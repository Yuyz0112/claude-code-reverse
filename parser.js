/**
 * Parse conversation log string into structured output
 * @param {string} rawLogString - The raw log content as a string
 * @returns {Object} Parsed and structured log data
 */
function parseConversationLog(rawLogString) {
  // Type definitions (for documentation)
  // type JSONValue = string | number | boolean | null | JSONObject | JSONArray;
  // interface JSONObject { [k: string]: JSONValue; }
  // interface JSONArray extends Array<JSONValue> {}

  const ts = () => new Date().toISOString();

  /** Stable stringify with sorted keys for consistent dedupe */
  function stableStringify(v) {
    return JSON.stringify(v, function replacer(_key, value) {
      if (value && typeof value === "object" && !Array.isArray(value)) {
        const obj = value;
        const sorted = {};
        for (const k of Object.keys(obj).sort()) {
          sorted[k] = obj[k];
        }
        return sorted;
      }
      return value;
    });
  }

  /** Deep JSON clone for plain data */
  function cloneJSON(obj) {
    try {
      return JSON.parse(JSON.stringify(obj));
    } catch {
      return obj;
    }
  }

  // ----- Global registries for tools and prompts -----

  const toolDefs = {};
  const toolCanonToId = new Map();
  const toolNameCounters = {};

  const promptDefs = {};
  const promptTextToId = new Map();
  let promptCounter = 0;

  function registerTool(toolObj) {
    const canon = stableStringify(toolObj);
    let id = toolCanonToId.get(canon);
    if (!id) {
      const name =
        typeof toolObj?.["name"] === "string" && toolObj["name"].trim()
          ? toolObj["name"]
          : "Tool";
      const n = (toolNameCounters[name] = (toolNameCounters[name] || 0) + 1);
      id = `${name}_${n}`;
      toolCanonToId.set(canon, id);
      toolDefs[id] = toolObj;
    }
    return id;
  }

  function registerToolsArr(toolsArr) {
    if (!Array.isArray(toolsArr)) return toolsArr;
    return toolsArr.map((t) => registerTool((t ?? {})));
  }

  const promptCounts = {};

  function registerPrompt(text) {
    if (typeof text !== "string") return text;
    let id = promptTextToId.get(text);
    if (!id) {
      id = `prompt_${++promptCounter}`;
      promptTextToId.set(text, id);
      promptDefs[id] = text;
      promptCounts[id] = 0;
    }
    promptCounts[id] = (promptCounts[id] ?? 0) + 1; // bump refcount
    return id;
  }

  // ----- Transform helpers applied to input params -----

  function transformContentBlock(block, isUser) {
    const b = cloneJSON(block);
    if (b && b["type"] === "text" && typeof b["text"] === "string") {

      const byPass = isUser && !b["text"].startsWith("<system-reminder>");

      if (!byPass) {
        b["text"] = registerPrompt(b["text"]);
      }
    }
    return b;
  }

  function transformMessage(mess) {
    const m = cloneJSON(mess);
    const content = m["content"];
    if (Array.isArray(content)) {
      m["content"] = content.map((blk) => transformContentBlock(blk, true));
    } else if (typeof content === "string") {
      const byPass = m["role"] === "user" && !content.startsWith("<system-reminder>");
      if (!byPass) {
        m["content"] = registerPrompt(content);
      }
    }
    return m;
  }

  /** Transform top-level params:
   * - tools -> array of tool ids
   * - messages/system -> replace text blocks with prompt_#
   */
  function transformParams(params) {
    const p = cloneJSON(params);

    if (Array.isArray(p["tools"])) {
      p["tools"] = registerToolsArr(p["tools"]);
    }

    if (Array.isArray(p["messages"])) {
      p["messages"] = p["messages"].map((m) => transformMessage(m));
    }

    const sys = p["system"];
    if (Array.isArray(sys)) {
      p["system"] = sys.map((b) => transformContentBlock(b));
    } else if (typeof sys === "string") {
      p["system"] = registerPrompt(sys);
    }

    return p;
  }

  // ----- Parse log content -----

  const lines = rawLogString.replace(/\r\n/g, "\n").split("\n");

  let sessionTitle = "";
  let sessionTitleSet = false;
  const convByUid = new Map();
  let lineNo = 0;

  function ensureConv(uid, iso) {
    let c = convByUid.get(uid);
    if (!c) {
      c = {
        uid,
        started_at: iso,
        finished_at: null,
        request_id: null,
        input: null,
        result: null,
      };
      convByUid.set(uid, c);
    }
    return c;
  }

  for (const line of lines) {
    lineNo++;
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (!sessionTitleSet) {
      sessionTitle = trimmed;
      sessionTitleSet = true;
      continue;
    }

    // Pattern A: "ISO uid=<uid> <kind>: <json/text>"
    // kind ∈ { input | output | stream.final | error }
    const mA =
      trimmed.match(
        /^(\d{4}-\d{2}-\d{2}T[^\s]+)\s+uid=([^\s]+)\s+(input|output|stream\.final|error):\s*([\s\S]+)$/
      ) || null;

    // Pattern B: "ISO uid=<uid> request_id[:=]<val>"
    const mB =
      trimmed.match(
        /^(\d{4}-\d{2}-\d{2}T[^\s]+)\s+uid=([^\s]+)\s+request_id[:=]\s*([^\s]+)\s*$/
      ) || null;

    if (!mA && !mB) {
      console.warn(
        `[WARN line ${lineNo}] Unrecognized line: ${trimmed.slice(0, 200)}`
      );
      continue;
    }

    if (mB) {
      const [, iso, uid, reqId] = mB;
      const conv = ensureConv(uid, iso);
      conv.request_id = reqId;
      continue;
    }

    const [, iso, uid, kind, tail] = mA;
    const conv = ensureConv(uid, iso);

    if (kind === "input" || kind === "output" || kind === "stream.final") {
      try {
        const payload = JSON.parse(tail);
        if (kind === "input") {
          conv.input = transformParams(payload);
          conv.started_at = conv.started_at || iso;
        } else if (kind === "output") {
          conv.result = { type: "output", data: payload };
          conv.finished_at = iso;
        } else {
          conv.result = { type: "stream_final", data: payload };
          conv.finished_at = iso;
        }
      } catch (e) {
        console.warn(
          `[WARN line ${lineNo}] JSON parse failed for ${kind}: ${e?.message || String(e)
          }`
        );
      }
      continue;
    }

    if (kind === "error") {
      conv.result = { type: "error", data: tail };
      conv.finished_at = iso;
      continue;
    }
  }

  // ----- Generate prompt kind guesses -----
  const promptKindGuess = {};
  for (const id of Object.keys(promptDefs)) {
    const c = promptCounts[id] ?? 0;
    promptKindGuess[id] = c > 1 ? "system_like" : "user_like";
  }

  // ----- Finalize -----

  const conversations = Array.from(convByUid.values()).sort((a, b) => {
    const ta = a.started_at ? Date.parse(a.started_at) : 0;
    const tb = b.started_at ? Date.parse(b.started_at) : 0;
    return ta - tb;
  });

  return {
    session_title: sessionTitle,
    tool_defs: toolDefs,
    prompts: promptDefs,
    prompt_counts: promptCounts,
    prompt_kind_guess: promptKindGuess,
    conversations,
    generated_at: ts(),
  };
}

// Example usage:
/*
const logString = `My Session Title
2024-01-01T10:00:00Z uid=conv1 input: {"messages": [{"role": "user", "content": "Hello"}]}
2024-01-01T10:00:01Z uid=conv1 output: {"content": "Hi there!"}
`;

const result = parseConversationLog(logString);
console.log(result);
*/

// Export for use in modules (optional)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = parseConversationLog;
}

// Export for ES6 modules (optional)
if (typeof window !== 'undefined') {
  window.parseConversationLog = parseConversationLog;
}