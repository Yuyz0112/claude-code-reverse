
// @from(Start 6127688, End 6129925)
async function aZ9({
  systemPrompt: I,
  userPrompt: d,
  assistantPrompt: G,
  signal: Z
}) {
  let C = await JJ1(Rw),
    W = Rw,
    w = [{
      role: "user",
      content: d
    }, ...G ? [{
      role: "assistant",
      content: G
    }] : []];
  I0("tengu_api_query", {
    model: W,
    messagesLength: String(JSON.stringify([{
      systemPrompt: I
    }, ...w]).length),
    provider: b9 ? "bedrock" : h9 ? "vertex" : "1p"
  });
  let B = 0,
    A = Date.now(),
    V = Date.now(),
    X, _ = void 0;
  try {
    X = await ls(async (S) => {
      B = S, A = Date.now();
      let P = C.beta.messages.stream({
        model: W,
        max_tokens: 512,
        messages: w,
        system: Ts(I).map(($) => ({
          type: "text",
          text: $
        })),
        temperature: 0,
        metadata: ms(),
        stream: !0
      }, {
        signal: Z
      });
      return _ = P, await gJ1(P)
    })
  } catch (S) {
    return X0(S), I0("tengu_api_error", {
      error: S instanceof Error ? S.message : String(S),
      status: S instanceof f9 ? String(S.status) : void 0,
      model: Rw,
      messageCount: String(G ? 2 : 1),
      durationMs: String(Date.now() - A),
      durationMsIncludingRetries: String(Date.now() - V),
      attempt: String(B),
      provider: b9 ? "bedrock" : h9 ? "vertex" : "1p",
      requestId: _?.request_id ?? void 0
    }), KJ1(S)
  }
  let F = Date.now() - A,
    g = Date.now() - V;
  I0("tengu_api_success", {
    model: Rw,
    messageCount: String(G ? 2 : 1),
    inputTokens: String(X.usage.input_tokens),
    outputTokens: String(X.usage.output_tokens),
    durationMs: String(F),
    durationMsIncludingRetries: String(g),
    attempt: String(B),
    provider: b9 ? "bedrock" : h9 ? "vertex" : "1p",
    requestId: _?.request_id ?? void 0,
    stop_reason: X.stop_reason ?? void 0
  });
  let J = X.usage.input_tokens,
    K = X.usage.output_tokens,
    Q = J / 1e6 * pK2 + K / 1e6 * iK2;
  return _a(Q, F), {
    durationMs: F,
    message: {
      ...X,
      content: hs(X.content),
      usage: {
        ...X.usage,
        cache_read_input_tokens: 0,
        cache_creation_input_tokens: 0
      }
    },
    costUSD: Q,
    type: "assistant",
    uuid: e$()
  }
}
// @from(Start 6129926, End 6130567)
async function jZ({
  systemPrompt: I = [],
  userPrompt: d,
  assistantPrompt: G,
  enablePromptCaching: Z = !1,
  signal: C
}) {
  return await gF1([{
    message: {
      role: "user",
      content: I.map((W) => ({
        type: "text",
        text: W
      }))
    },
    type: "user",
    uuid: e$()
  }, {
    message: {
      role: "user",
      content: d
    },
    type: "user",
    uuid: e$()
  }], () => {
    return Z ? rZ9({
      systemPrompt: I,
      userPrompt: d,
      assistantPrompt: G,
      signal: C
    }) : aZ9({
      systemPrompt: I,
      userPrompt: d,
      assistantPrompt: G,
      signal: C
    })
  })
}
// @from(Start 6130569, End 6130681)
function sZ9(I) {
  if (I.includes("3-5")) return 8192;
  if (I.includes("haiku")) return 8192;
  return 20000
}
// @from(Start 6130682, End 6130917)
async function rR(I) {
  let d = process.platform,
    G = d === "win32" ? "start" : d === "darwin" ? "open" : "xdg-open";
  try {
    let {
      code: Z
    } = await E5(G, [I]);
    return Z === 0
  } catch (Z) {
    return !1
  }
}
// @from(Start 6130922, End 6130939)
sK2 = J1(u1(), 1)
// @from(Start 6130942, End 6131262)
function P6(I) {
  let [d, G] = sK2.useState({
    pending: !1,
    keyName: null
  }), Z = $g((W) => G({
    pending: W,
    keyName: "Ctrl-C"
  }), I), C = $g((W) => G({
    pending: W,
    keyName: "Ctrl-D"
  }), I);
  return C4((W, w) => {
    if (w.ctrl && W === "c") Z();
    if (w.ctrl && W === "d") C()
  }), d
}
// @from(Start 6131267, End 6131323)
oZ9 = "https://github.com/anthropics/claude-code/issues"
// @from(Start 6131326, End 6136757)
function oK2({
  onDone: I
}) {
  let [d, G] = iZ.useState("userInput"), [Z, C] = iZ.useState(0), [W, w] = iZ.useState(""), [B, A] = iZ.useState(null), [V, X] = iZ.useState(null), [_, F] = iZ.useState({
    isGit: !1,
    gitState: null
  }), [g, J] = iZ.useState(null), K = G9().columns - 4, Q = yS()();
  iZ.useEffect(() => {
    async function $() {
      let h = await eG(),
        O = null;
      if (h) O = await qb();
      F({
        isGit: h,
        gitState: O
      })
    }
    $()
  }, []);
  let E = P6(() => process.exit(0)),
    S = iZ.useCallback(async () => {
      G("submitting"), X(null), A(null);
      let $ = {
          message_count: Q.length,
          datetime: new Date().toISOString(),
          description: W,
          platform: K2.platform,
          gitRepo: _.isGit,
          terminal: K2.terminal,
          version: {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://docs.anthropic.com/s/claude-code",
            VERSION: "0.2.9"
          }.VERSION,
          transcript: Q,
          errors: ru1()
        },
        [h, O] = await Promise.all([IC9($), tZ9(W)]);
      if (J(O), h.success) {
        if (h.feedbackId) A(h.feedbackId), I0("tengu_bug_report_submitted", {
          feedback_id: h.feedbackId
        });
        G("done")
      } else X("Could not submit feedback. Please try again later."), G("userInput")
    }, [W, _.isGit, Q]);
  C4(($, h) => {
    if (d === "done") {
      if (h.return && B && g) {
        let O = eZ9(B, g, W);
        rR(O)
      }
      I("<bash-stdout>Bug report submitted</bash-stdout>");
      return
    }
    if (V) {
      I("<bash-stderr>Error submitting bug report</bash-stderr>");
      return
    }
    if (h.escape) {
      I("<bash-stderr>Bug report cancelled</bash-stderr>");
      return
    }
    if (d === "consent" && (h.return || $ === " ")) S()
  });
  let P = r1();
  return p0.createElement(p0.Fragment, null, p0.createElement(p, {
    flexDirection: "column",
    borderStyle: "round",
    borderColor: P.permission,
    paddingX: 1,
    paddingBottom: 1,
    gap: 1
  }, p0.createElement(u, {
    bold: !0,
    color: P.permission
  }, "Submit Bug Report"), d === "userInput" && p0.createElement(p, {
    flexDirection: "column",
    gap: 1
  }, p0.createElement(u, null, "Describe the issue below:"), p0.createElement(mC, {
    value: W,
    onChange: w,
    columns: K,
    onSubmit: () => G("consent"),
    onExitMessage: () => I("<bash-stderr>Bug report cancelled</bash-stderr>"),
    cursorOffset: Z,
    onChangeCursorOffset: C
  }), V && p0.createElement(p, {
    flexDirection: "column",
    gap: 1
  }, p0.createElement(u, {
    color: "red"
  }, V), p0.createElement(u, {
    dimColor: !0
  }, "Press any key to close"))), d === "consent" && p0.createElement(p, {
    flexDirection: "column"
  }, p0.createElement(u, null, "This report will include:"), p0.createElement(p, {
    marginLeft: 2,
    flexDirection: "column"
  }, p0.createElement(u, null, "- Your bug description: ", p0.createElement(u, {
    dimColor: !0
  }, W)), p0.createElement(u, null, "- Environment info:", " ", p0.createElement(u, {
    dimColor: !0
  }, K2.platform, ", ", K2.terminal, ", v", {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://docs.anthropic.com/s/claude-code",
    VERSION: "0.2.9"
  }.VERSION)), _.gitState && p0.createElement(u, null, "- Git repo metadata:", " ", p0.createElement(u, {
    dimColor: !0
  }, _.gitState.branchName, _.gitState.commitHash ? `, ${_.gitState.commitHash.slice(0,7)}` : "", _.gitState.remoteUrl ? ` @ ${_.gitState.remoteUrl}` : "", !_.gitState.isHeadOnRemote && ", not synced", !_.gitState.isClean && ", has local changes")), p0.createElement(u, null, "- Current session transcript")), p0.createElement(p, {
    marginTop: 1
  }, p0.createElement(u, {
    wrap: "wrap",
    dimColor: !0
  }, "We will use your feedback to debug related issues or to improve", " ", K4, "'s functionality (eg. to reduce the risk of bugs occurring in the future). Anthropic will not train generative models using feedback from ", K4, ".")), p0.createElement(p, {
    marginTop: 1
  }, p0.createElement(u, null, "Press ", p0.createElement(u, {
    bold: !0
  }, "Enter"), " to confirm and submit."))), d === "submitting" && p0.createElement(p, {
    flexDirection: "row",
    gap: 1
  }, p0.createElement(u, null, "Submitting report…")), d === "done" && p0.createElement(p, {
    flexDirection: "column"
  }, p0.createElement(u, {
    color: r1().success
  }, "Thank you for your report!"), B && p0.createElement(u, {
    dimColor: !0
  }, "Feedback ID: ", B), p0.createElement(p, {
    marginTop: 1
  }, p0.createElement(u, null, "Press "), p0.createElement(u, {
    bold: !0
  }, "Enter "), p0.createElement(u, null, "to also create a GitHub issue, or any other key to close.")))), p0.createElement(p, {
    marginLeft: 3
  }, p0.createElement(u, {
    dimColor: !0
  }, E.pending ? p0.createElement(p0.Fragment, null, "Press ", E.keyName, " again to exit") : d === "userInput" ? p0.createElement(p0.Fragment, null, "Enter to continue · Esc to cancel") : d === "consent" ? p0.createElement(p0.Fragment, null, "Enter to submit · Esc to cancel") : null)))
}
// @from(Start 6136759, End 6137260)
function eZ9(I, d, G) {
  let Z = encodeURIComponent(`**Bug Description**
${G}

**Environment Info**
- Platform: ${K2.platform}
- Terminal: ${K2.terminal}
- Version: ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.anthropic.com/s/claude-code",VERSION:"0.2.9"}.VERSION||"unknown"}
- Feedback ID: ${I}
`);
  return `${oZ9}/new?title=${encodeURIComponent(d)}&body=${Z}&labels=user-reported,bug`
}
// @from(Start 6137261, End 6137761)
async function tZ9(I) {
  let d = await jZ({
      systemPrompt: ['Generate a concise issue title (max 80 chars) that captures the key point of this feedback. Do not include quotes or prefixes like "Feedback:" or "Issue:". If you cannot generate a title, just use "User Feedback".'],
      userPrompt: I
    }),
    G = d.message.content[0]?.type === "text" ? d.message.content[0].text : "Bug Report";
  if (G.startsWith(hZ)) return `Bug Report: ${I.slice(0,60)}${I.length>60?"...":""}`;
  return G
}
// @from(Start 6137762, End 6138650)
async function IC9(I) {
  try {
    let d = vw();
    if (!d) return {
      success: !1
    };
    let G = await fetch("https://api.anthropic.com/api/claude_cli_feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": PS,
        "x-api-key": d
      },
      body: JSON.stringify({
        content: JSON.stringify(I)
      })
    });
    if (G.ok) {
      let Z = await G.json();
      if (Z?.feedback_id) return {
        success: !0,
        feedbackId: Z.feedback_id
      };
      return X0("Failed to submit feedback: request did not return feedback_id"), {
        success: !1
      }
    }
    return X0("Failed to submit feedback:" + G.status), {
      success: !1
    }
  } catch (d) {
    return X0("Error submitting feedback: " + (d instanceof Error ? d.message : "Unknown error")), {
      success: !1
    }
  }
}
// @from(Start 6138655, End 6138672)
NJ1 = J1(u1(), 1)
// @from(Start 6138678, End 6138954)
dC9 = {
    type: "local-jsx",
    name: "bug",
    description: `Submit feedback about ${K4}`,
    isEnabled: !0,
    isHidden: !1,
    async call(I) {
      return NJ1.createElement(oK2, {
        onDone: I
      })
    },
    userFacingName() {
      return "bug"
    }
  }
// @from(Start 6138958, End 6138967)
eK2 = dC9
// @from(Start 6139110, End 6139270)
BC9 = "The codebase follows strict style guidelines shown below. All code changes must strictly adhere to these guidelines to maintain consistency and quality."
// @from(Start 6139274, End 6139564)
aR = a2(() => {
    let I = [],
      d = R0();
    while (d !== WC9(d).root) {
      let G = CC9(d, "CLAUDE.md");
      if (GC9(G)) I.push(`Contents of ${G}:

${ZC9(G,"utf-8")}`);
      d = wC9(d)
    }
    if (I.length === 0) return "";
    return `${BC9}

${I.reverse().join(`

`)}`
  })
// @from(Start 6139728, End 6139752)
tK2 = Symbol("NO_VALUE")
// @from(Start 6139754, End 6139895)
async function gH(I) {
  let d = tK2;
  for await (let G of I) d = G;
  if (d === tK2) throw new Error("No items in generator");
  return d
}
// @from(Start 6139896, End 6140544)
async function* IN2(I, d = 1 / 0) {
  let G = (W) => {
      let w = W.next().then(({
        done: B,
        value: A
      }) => ({
        done: B,
        value: A,
        generator: W,
        promise: w
      }));
      return w
    },
    Z = [...I],
    C = new Set;
  while (C.size < d && Z.length > 0) {
    let W = Z.shift();
    C.add(G(W))
  }
  while (C.size > 0) {
    let {
      done: W,
      value: w,
      generator: B,
      promise: A
    } = await Promise.race(C);
    if (C.delete(A), !W) {
      if (C.add(G(B)), w !== void 0) yield w
    } else if (Z.length > 0) {
      let V = Z.shift();
      C.add(G(V))
    }
  }
}
// @from(Start 6140545, End 6141087)
async function XC9() {
  let I = new AbortController,
    d = setTimeout(() => I.abort(), 3000);
  try {
    let G = await MS(["--files", "--glob", GN2("**", "*", "CLAUDE.md")], R0(), I.signal);
    if (!G.length) return null;
    return `NOTE: Additional CLAUDE.md files were found. When working in these directories, make sure to read and follow the instructions in the corresponding CLAUDE.md file:
${G.map((Z)=>dN2.join(R0(),Z)).map((Z)=>`- ${Z}`).join(`
`)}`
  } catch (G) {
    return X0(G), null
  } finally {
    clearTimeout(d)
  }
}
// @from(Start 6141092, End 6141283)
YC9 = a2(async () => {
    try {
      let I = GN2(R0(), "README.md");
      if (!VC9(I)) return null;
      return await AC9(I, "utf-8")
    } catch (I) {
      return X0(I), null
    }
  })
// @from(Start 6141287, End 6142601)
_C9 = a2(async () => {
    if (!await eG()) return null;
    try {
      let [I, d, G, Z, C] = await Promise.all([E5("git", ["branch", "--show-current"], void 0, void 0, !1).then(({
        stdout: B
      }) => B.trim()), E5("git", ["rev-parse", "--abbrev-ref", "origin/HEAD"], void 0, void 0, !1).then(({
        stdout: B
      }) => B.replace("origin/", "").trim()), E5("git", ["status", "--short"], void 0, void 0, !1).then(({
        stdout: B
      }) => B.trim()), E5("git", ["log", "--oneline", "-n", "5"], void 0, void 0, !1).then(({
        stdout: B
      }) => B.trim()), E5("git", ["log", "--oneline", "-n", "5", "--author", await Ml1() || ""], void 0, void 0, !1).then(({
        stdout: B
      }) => B.trim())]), w = G.split(`
`).length > 200 ? G.split(`
`).slice(0, 200).join(`
`) + `
... (truncated because there are more than 200 lines. If you need more information, run "git status" using BashTool)` : G;
      return `This is the git status at the start of the conversation. Note that this status is a snapshot in time, and will not update during the conversation.
Current branch: ${I}

Main branch (you will usually use this for PRs): ${d}

Status:
${w||"(clean)"}

Recent commits:
${Z}

Your recent commits:
${C||"(no recent commits)"}`
    } catch (I) {
      return X0(I), null
    }
  })
// @from(Start 6142605, End 6143115)
j7 = a2(async () => {
    let I = aR(),
      d = I5(),
      G = d.dontCrawlDirectory,
      [Z, C, W, w] = await Promise.all([_C9(), G ? Promise.resolve("") : DC9(), G ? Promise.resolve("") : XC9(), YC9()]);
    return {
      ...d.context,
      ...C ? {
        directoryStructure: C
      } : {},
      ...Z ? {
        gitStatus: Z
      } : {},
      ...I ? {
        codeStyle: I
      } : {},
      ...W ? {
        claudeFiles: W
      } : {},
      ...w ? {
        readme: w
      } : {}
    }
  })
// @from(Start 6143119, End 6143905)
DC9 = a2(async function() {
    let I;
    try {
      let d = new AbortController;
      setTimeout(() => {
        d.abort()
      }, 1000);
      let G = await K6(),
        Z = zI.call({
          path: "."
        }, {
          abortController: d,
          options: {
            commands: [],
            tools: [],
            slowAndCapableModel: G,
            forkNumber: 0,
            messageLogName: "unused",
            maxThinkingTokens: 0
          },
          messageId: void 0,
          readFileTimestamps: {}
        });
      I = (await gH(Z)).data
    } catch (d) {
      return X0(d), ""
    }
    return `Below is a snapshot of this project's file structure at the start of the conversation. This snapshot will NOT update during the conversation.

${I}`
  })
// @from(Start 6143908, End 6144056)
function zJ1(I) {
  if (process.platform === "win32") process.title = I ? `✳ ${I}` : I;
  else process.stdout.write(`\x1B]0;${I?`✳ ${I}`:""}\x07`)
}
// @from(Start 6144057, End 6144760)
async function ZN2(I) {
  try {
    let G = (await jZ({
        systemPrompt: ["Analyze if this message indicates a new conversation topic. If it does, extract a 2-3 word title that captures the new topic. Format your response as a JSON object with two fields: 'isNewTopic' (boolean) and 'title' (string, or null if isNewTopic is false). Only include these fields, no other text."],
        userPrompt: I,
        enablePromptCaching: !0
      })).message.content.filter((C) => C.type === "text").map((C) => C.text).join(""),
      Z = tG(G);
    if (Z && typeof Z === "object" && "isNewTopic" in Z && "title" in Z) {
      if (Z.isNewTopic && Z.title) zJ1(Z.title)
    }
  } catch (d) {
    X0(d)
  }
}
// @from(Start 6144762, End 6144888)
function $6() {
  return new Promise((I) => {
    process.stdout.write("\x1B[2J\x1B[3J\x1B[H", () => {
      I()
    })
  })
}
// @from(Start 6144889, End 6145039)
async function Iu(I) {
  await $6(), qx()([]), I.setForkConvoWithMessagesOnTheNextRender([]), j7.cache.clear?.(), aR.cache.clear?.(), await Uw(t7())
}
// @from(Start 6145044, End 6145300)
HC9 = {
    type: "local",
    name: "clear",
    description: "Clear conversation history and free up context",
    isEnabled: !0,
    isHidden: !1,
    async call(I, d) {
      return Iu(d), ""
    },
    userFacingName() {
      return "clear"
    }
  }
// @from(Start 6145304, End 6145313)
CN2 = HC9
// @from(Start 6145319, End 6146949)
FC9 = {
    type: "local",
    name: "compact",
    description: "Clear conversation history but keep a summary in context",
    isEnabled: !0,
    isHidden: !1,
    async call(I, {
      options: {
        tools: d,
        slowAndCapableModel: G
      },
      abortController: Z,
      setForkConvoWithMessagesOnTheNextRender: C
    }) {
      let W = yS()(),
        w = p9("Provide a detailed but concise summary of our conversation above. Focus on information that would be helpful for continuing the conversation, including what we did, what we're doing, which files we're working on, and what we're going to do next."),
        B = await bs(sR([...W, w]), ["You are a helpful AI assistant tasked with summarizing conversations."], 0, d, Z.signal, {
          dangerouslySkipPermissions: !1,
          model: G,
          prependCLISysprompt: !0
        }),
        A = B.message.content,
        V = typeof A === "string" ? A : A.length > 0 && A[0]?.type === "text" ? A[0].text : null;
      if (!V) throw new Error(`Failed to generate conversation summary - response did not contain valid text content - ${B}`);
      else if (V.startsWith(hZ)) throw new Error(V);
      return B.message.usage = {
        input_tokens: 0,
        output_tokens: B.message.usage.output_tokens,
        cache_creation_input_tokens: 0,
        cache_read_input_tokens: 0
      }, await $6(), qx()([]), C([p9("Use the /compact command to clear the conversation history, and start a new conversation with the summary in context."), B]), j7.cache.clear?.(), aR.cache.clear?.(), ""
    },
    userFacingName() {
      return "compact"
    }
  }
// @from(Start 6146953, End 6146962)
WN2 = FC9
// @from(Start 6146968, End 6146984)
T4 = J1(u1(), 1)
// @from(Start 6146988, End 6147005)
QJ1 = J1(u1(), 1)
// @from(Start 6147008, End 6150244)
function wN2({
  onClose: I
}) {
  let [d, G] = QJ1.useState(q2()), Z = T4.useRef(q2()), [C, W] = QJ1.useState(0), w = P6(() => process.exit(0)), B = [...[], {
    id: "verbose",
    label: "Verbose output",
    value: d.verbose,
    type: "boolean",
    onChange(A) {
      let V = {
        ...q2(),
        verbose: A
      };
      p4(V), G(V)
    }
  }, {
    id: "theme",
    label: "Theme",
    value: d.theme,
    options: ["light", "dark", "light-daltonized", "dark-daltonized"],
    type: "enum",
    onChange(A) {
      let V = {
        ...q2(),
        theme: A
      };
      p4(V), G(V)
    }
  }, {
    id: "notifChannel",
    label: "Notifications",
    value: d.preferredNotifChannel,
    options: ["iterm2", "terminal_bell", "iterm2_with_bell", "notifications_disabled"],
    type: "enum",
    onChange(A) {
      let V = {
        ...q2(),
        preferredNotifChannel: A
      };
      p4(V), G(V)
    }
  }];
  return C4((A, V) => {
    if (V.escape) {
      let _ = [],
        F = Boolean(!1),
        g = Boolean(!1);
      if (F !== g) _.push(`  ⎿  ${g?"Enabled":"Disabled"} custom API key`);
      if (d.verbose !== Z.current.verbose) _.push(`  ⎿  Set verbose to ${j0.bold(d.verbose)}`);
      if (d.theme !== Z.current.theme) _.push(`  ⎿  Set theme to ${j0.bold(d.theme)}`);
      if (d.preferredNotifChannel !== Z.current.preferredNotifChannel) _.push(`  ⎿  Set notifications to ${j0.bold(d.preferredNotifChannel)}`);
      if (_.length > 0) console.log(j0.gray(_.join(`
`)));
      I();
      return
    }

    function X() {
      let _ = B[C];
      if (!_ || !_.onChange) return;
      if (_.type === "boolean") {
        _.onChange(!_.value);
        return
      }
      if (_.type === "enum") {
        let g = (_.options.indexOf(_.value) + 1) % _.options.length;
        _.onChange(_.options[g]);
        return
      }
    }
    if (V.return || A === " ") {
      X();
      return
    }
    if (V.upArrow) W((_) => Math.max(0, _ - 1));
    if (V.downArrow) W((_) => Math.min(B.length - 1, _ + 1))
  }), T4.createElement(T4.Fragment, null, T4.createElement(p, {
    flexDirection: "column",
    borderStyle: "round",
    borderColor: r1().secondaryBorder,
    paddingX: 1,
    marginTop: 1
  }, T4.createElement(p, {
    flexDirection: "column",
    minHeight: 2,
    marginBottom: 1
  }, T4.createElement(u, {
    bold: !0
  }, "Settings"), T4.createElement(u, {
    dimColor: !0
  }, "Configure ", K4, " preferences")), B.map((A, V) => {
    let X = V === C;
    return T4.createElement(p, {
      key: A.id,
      height: 2,
      minHeight: 2
    }, T4.createElement(p, {
      width: 44
    }, T4.createElement(u, {
      color: X ? "blue" : void 0
    }, X ? I9.pointer : " ", " ", A.label)), T4.createElement(p, null, A.type === "boolean" ? T4.createElement(u, {
      color: X ? "blue" : void 0
    }, A.value.toString()) : T4.createElement(u, {
      color: X ? "blue" : void 0
    }, A.value.toString())))
  })), T4.createElement(p, {
    marginLeft: 3
  }, T4.createElement(u, {
    dimColor: !0
  }, w.pending ? T4.createElement(T4.Fragment, null, "Press ", w.keyName, " again to exit") : T4.createElement(T4.Fragment, null, "↑/↓ to select · Enter/Space to change · Esc to close"))))
}
// @from(Start 6150249, End 6150266)
fJ1 = J1(u1(), 1)
// @from(Start 6150270, End 6150543)
gC9 = {
    type: "local-jsx",
    name: "config",
    description: "Open config panel",
    isEnabled: !0,
    isHidden: !1,
    async call(I) {
      return fJ1.createElement(wN2, {
        onClose: I
      })
    },
    userFacingName() {
      return "config"
    }
  }
// @from(Start 6150547, End 6150556)
BN2 = gC9
// @from(Start 6150562, End 6150817)
JC9 = {
    type: "local",
    name: "cost",
    description: "Show the total cost and duration of the current session",
    isEnabled: !0,
    isHidden: !1,
    async call() {
      return FF1()
    },
    userFacingName() {
      return "cost"
    }
  }
// @from(Start 6150821, End 6150830)
AN2 = JC9
// @from(Start 6150836, End 6150854)
dW9 = J1(Bz2(), 1)
// @from(Start 6150860, End 6150877)
fz2 = J1(u1(), 1)
// @from(Start 6150883, End 6150899)
e4 = J1(u1(), 1)
// @from(Start 6150905, End 6150921)
Z9 = J1(u1(), 1)
// @from(Start 6150927, End 6150943)
B7 = J1(u1(), 1)
// @from(Start 6150947, End 6150963)
zW = J1(u1(), 1)
// @from(Start 6150969, End 6151069)
is = process.platform === "darwin" ? ["·", "✢", "✳", "∗", "✻", "✽"] : ["·", "✢", "*", "∗", "✻", "✽"]
// @from(Start 6151073, End 6151800)
GW9 = ["Accomplishing", "Actioning", "Actualizing", "Baking", "Brewing", "Calculating", "Cerebrating", "Churning", "Clauding", "Coalescing", "Cogitating", "Computing", "Conjuring", "Considering", "Cooking", "Crafting", "Creating", "Crunching", "Deliberating", "Determining", "Doing", "Effecting", "Finagling", "Forging", "Forming", "Generating", "Hatching", "Herding", "Honking", "Hustling", "Ideating", "Inferring", "Manifesting", "Marinating", "Moseying", "Mulling", "Mustering", "Musing", "Noodling", "Percolating", "Pondering", "Processing", "Puttering", "Reticulating", "Ruminating", "Schlepping", "Shucking", "Simmering", "Smooshing", "Spinning", "Stewing", "Synthesizing", "Thinking", "Transmuting", "Vibing", "Working"]
// @from(Start 6151803, End 6152719)
function ns() {
  let I = [...is, ...[...is].reverse()],
    [d, G] = zW.useState(0),
    [Z, C] = zW.useState(0),
    W = zW.useRef(mF(GW9)),
    w = zW.useRef(Date.now());
  return zW.useEffect(() => {
    let B = setInterval(() => {
      G((A) => (A + 1) % I.length)
    }, 120);
    return () => clearInterval(B)
  }, [I.length]), zW.useEffect(() => {
    let B = setInterval(() => {
      C(Math.floor((Date.now() - w.current) / 1000))
    }, 1000);
    return () => clearInterval(B)
  }, []), B7.createElement(p, {
    flexDirection: "row",
    marginTop: 1
  }, B7.createElement(p, {
    flexWrap: "nowrap",
    height: 1,
    width: 2
  }, B7.createElement(u, {
    color: r1().claude
  }, I[d])), B7.createElement(u, {
    color: r1().claude
  }, W.current, "… "), B7.createElement(u, {
    color: r1().secondaryText
  }, "(", Z, "s · ", B7.createElement(u, {
    bold: !0
  }, "esc"), " to interrupt)"))
}
// @from(Start 6152721, End 6153106)
function Cu() {
  let I = [...is, ...[...is].reverse()],
    [d, G] = zW.useState(0);
  return zW.useEffect(() => {
    let Z = setInterval(() => {
      G((C) => (C + 1) % I.length)
    }, 120);
    return () => clearInterval(Z)
  }, [I.length]), B7.createElement(p, {
    flexWrap: "nowrap",
    height: 1,
    width: 2
  }, B7.createElement(u, {
    color: r1().claude
  }, I[d]))
}
// @from(Start 6153466, End 6153483)
Dz2 = J1(Fk(), 1)
// @from(Start 6153485, End 6154461)
async function Hz2() {
  try {
    let I = await PE("tengu_version_config", {
      minVersion: "0.0.0"
    });
    if (I.minVersion && Dz2.lt({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://docs.anthropic.com/s/claude-code",
        VERSION: "0.2.9"
      }.VERSION, I.minVersion)) console.error(`
It looks like your version of Claude Code (${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.anthropic.com/s/claude-code",VERSION:"0.2.9"}.VERSION}) needs an update.
A newer version (${I.minVersion} or higher) is required to continue.

To update, please run:
    claude update

This will ensure you have access to the latest features and improvements.
`), process.exit(1)
  } catch (I) {
    X0(`Error checking minimum version: ${I}`)
  }
}
// @from(Start 6154466, End 6154493)
CK = tR(vz, ".update.lock")
// @from(Start 6154497, End 6154509)
BW9 = 300000
// @from(Start 6154512, End 6154930)
function Fz2() {
  try {
    if (!wu(vz)) Vz2(vz, {
      recursive: !0
    });
    if (wu(CK)) {
      let I = WW9(CK);
      if (Date.now() - I.mtimeMs < BW9) return !1;
      try {
        Yz2(CK)
      } catch (G) {
        return X0(`Failed to remove stale lock file: ${G}`), !1
      }
    }
    return CW9(CK, `${process.pid}`, "utf8"), !0
  } catch (I) {
    return X0(`Failed to acquire lock: ${I}`), !1
  }
}
// @from(Start 6154932, End 6155097)
function gz2() {
  try {
    if (wu(CK)) {
      if (Xz2(CK, "utf8") === `${process.pid}`) Yz2(CK)
    }
  } catch (I) {
    X0(`Failed to release lock: ${I}`)
  }
}
// @from(Start 6155098, End 6155776)
async function $J1() {
  try {
    let I = await E5("npm", ["-g", "config", "get", "prefix"]);
    if (I.code !== 0) return X0("Failed to check npm permissions"), {
      hasPermissions: !1,
      npmPrefix: null
    };
    let d = I.stdout.trim(),
      G = !1;
    try {
      wW9(d, ZW9.W_OK), G = !0
    } catch {
      G = !1
    }
    if (G) return {
      hasPermissions: !0,
      npmPrefix: d
    };
    return X0("Insufficient permissions for global npm install."), {
      hasPermissions: !1,
      npmPrefix: d
    }
  } catch (I) {
    return X0(`Failed to verify npm global install permissions: ${I}`), {
      hasPermissions: !1,
      npmPrefix: null
    }
  }
}
// @from(Start 6155777, End 6157501)
async function Jz2(I) {
  if (!Fz2()) throw I0("tengu_auto_updater_prefix_lock_contention", {
    pid: String(process.pid),
    currentVersion: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://docs.anthropic.com/s/claude-code",
      VERSION: "0.2.9"
    }.VERSION,
    prefix: I
  }), new Error("Another process is currently setting up npm prefix");
  try {
    if (!wu(I)) Vz2(I, {
      recursive: !0
    });
    let d = await E5("npm", ["-g", "config", "set", "prefix", I]);
    if (d.code !== 0) throw new Error(`Failed to set npm prefix: ${d.stderr}`);
    let G = `
# npm global path
export PATH="${I}/bin:$PATH"
`;
    if (_z2 === "win32") {
      let Z = await E5("setx", ["PATH", `${process.env.PATH};${I}`]);
      if (Z.code !== 0) throw new Error(`Failed to update PATH on Windows: ${Z.stderr}`)
    } else {
      let Z = [tR(Wu(), ".bashrc"), tR(Wu(), ".bash_profile"), tR(Wu(), ".zshrc"), tR(Wu(), ".config", "fish", "config.fish")];
      for (let C of Z)
        if (wu(C)) try {
          if (!Xz2(C, "utf8").includes(I)) {
            if (C.includes("fish")) {
              let w = `
# npm global path
set -gx PATH ${I}/bin $PATH
`;
              Az2(C, w)
            } else Az2(C, G);
            I0("npm_prefix_path_updated", {
              configPath: C
            })
          }
        } catch (W) {
          I0("npm_prefix_path_update_failed", {
            configPath: C,
            error: W instanceof Error ? W.message.slice(0, 200) : String(W).slice(0, 200)
          }), X0(`Failed to update shell config ${C}: ${W}`)
        }
    }
  } finally {
    gz2()
  }
}
// @from(Start 6157503, End 6157554)
function Kz2() {
  return tR(Wu(), ".npm-global")
}
// @from(Start 6157556, End 6157781)
function Nz2(I) {
  let d = `icacls "${I}" /grant "%USERNAME%:(OI)(CI)F"`,
    G = I || "$(npm -g config get prefix)",
    Z = `sudo chown -R $USER:$(id -gn) ${G} && sudo chmod -R u+w ${G}`;
  return _z2 === "win32" ? d : Z
}
// @from(Start 6157782, End 6158230)
async function zz2() {
  let I = new AbortController;
  setTimeout(() => I.abort(), 5000);
  let d = await E5("npm", ["view", {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://docs.anthropic.com/s/claude-code",
    VERSION: "0.2.9"
  }.PACKAGE_URL, "version"], I.signal);
  if (d.code !== 0) return null;
  return d.stdout.trim()
}
// @from(Start 6158231, End 6159257)
async function rs() {
  if (!Fz2()) return X0("Another process is currently installing an update"), I0("tengu_auto_updater_lock_contention", {
    pid: String(process.pid),
    currentVersion: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://docs.anthropic.com/s/claude-code",
      VERSION: "0.2.9"
    }.VERSION
  }), "in_progress";
  try {
    let {
      hasPermissions: I
    } = await $J1();
    if (!I) return "no_permissions";
    let d = await E5("npm", ["install", "-g", {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://docs.anthropic.com/s/claude-code",
      VERSION: "0.2.9"
    }.PACKAGE_URL]);
    if (d.code !== 0) return X0(`Failed to install new version of claude: ${d.stdout} ${d.stderr}`), "install_failed";
    return "success"
  } finally {
    gz2()
  }
}
// @from(Start 6159259, End 6163112)
function Qz2({
  customPrefix: I,
  onCustomPrefixChange: d,
  onSuccess: G,
  onCancel: Z
}) {
  let [C, W] = Z9.useState(I.length), [w, B] = Z9.useState(!1), [A, V] = Z9.useState(!1), [X, _] = Z9.useState(null), [F, g] = Z9.useState({
    completeSteps: [!1, !1, !1, !1],
    inProgressStep: null
  }), J = G9().columns - 6, K = r1();
  async function Q(S) {
    V(!0), _(null);
    try {
      g({
        completeSteps: [!1, !1, !1, !1],
        inProgressStep: 0
      }), await Jz2(S), g({
        completeSteps: [!0, !0, !0, !1],
        inProgressStep: 3
      }), await rs(), g({
        completeSteps: [!0, !0, !0, !0],
        inProgressStep: null
      }), I0("tengu_auto_updater_config_complete", {
        finalStatus: "enabled",
        method: "prefix",
        success: "true"
      }), G()
    } catch (P) {
      X0(P);
      let $ = P instanceof Error ? P.message : "Failed to setup npm prefix";
      _($), V(!1), I0("tengu_auto_updater_config_complete", {
        finalStatus: "not_configured",
        method: "prefix",
        success: "false",
        error: $
      })
    }
  }
  let E = [{
    label: "Create new directory for npm global packages",
    command: `mkdir -p ${I}`
  }, {
    label: "Configure npm to use new location",
    command: `npm -g config set prefix ${I}`
  }, {
    label: "Update shell PATH configuration",
    command: `export PATH=${I}/bin:$PATH`
  }, {
    label: `Reinstall ${K4} globally`,
    command: `npm install -g ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.anthropic.com/s/claude-code",VERSION:"0.2.9"}.PACKAGE_URL}`
  }];
  return Z9.default.createElement(p, {
    marginLeft: 2,
    flexDirection: "column"
  }, Z9.default.createElement(p, {
    flexDirection: "column",
    gap: 1
  }, Z9.default.createElement(u, null, "⚠️ Warning: This will modify your global npm configuration and can be dangerous. The following changes will be made:"), E.map((S, P) => Z9.default.createElement(p, {
    key: P,
    flexDirection: "column"
  }, Z9.default.createElement(p, {
    flexDirection: "row"
  }, Z9.default.createElement(u, {
    color: F.completeSteps[P] ? K.success : void 0
  }, A ? F.completeSteps[P] ? "✓" : " " : `${P+1}.`), Z9.default.createElement(p, {
    width: 2
  }, F.inProgressStep === P && Z9.default.createElement(Cu, null)), Z9.default.createElement(u, {
    color: F.completeSteps[P] ? K.success : void 0
  }, S.label)), S.command && Z9.default.createElement(p, {
    marginLeft: 2
  }, Z9.default.createElement(u, {
    color: K.suggestion,
    dimColor: !0
  }, "$ ", S.command)))), Z9.default.createElement(u, {
    color: K.suggestion
  }, "Note: You'll need to restart your terminal after this change"), Z9.default.createElement(u, {
    color: K.warning
  }, "Important: Any existing global npm packages may need to be reinstalled")), !A && Z9.default.createElement(p, {
    marginTop: 1,
    flexDirection: "column"
  }, Z9.default.createElement(u, null, "Enter prefix path:"), Z9.default.createElement(p, {
    flexDirection: "row",
    gap: 1
  }, Z9.default.createElement(u, null, ">"), Z9.default.createElement(mC, {
    placeholder: I,
    value: I,
    onChange: d,
    onSubmit: () => B(!0),
    columns: J,
    cursorOffset: C,
    onChangeCursorOffset: W
  })), w && Z9.default.createElement(p, {
    marginTop: 1,
    flexDirection: "column"
  }, Z9.default.createElement(u, null, "Are you sure you want to continue with prefix: ", I, "?"), Z9.default.createElement(Q6, {
    options: [{
      label: "Yes",
      value: "yes"
    }, {
      label: "No",
      value: "no"
    }],
    onChange: (S) => {
      if (B(!1), S === "yes") Q(I);
      else Z()
    }
  }))), X && Z9.default.createElement(u, {
    color: K.error
  }, "Error: ", X))
}
// @from(Start 6163162, End 6163178)
Bu = J1(u1(), 1)
// @from(Start 6163181, End 6163338)
function JH() {
  return Bu.createElement(u, {
    color: r1().permission
  }, "Press ", Bu.createElement(u, {
    bold: !0
  }, "Enter"), " to continue…")
}
// @from(Start 6163340, End 6167439)
function Au({
  onDone: I,
  doctorMode: d = !1
}) {
  let [G, Z] = e4.useState(null), [C, W] = e4.useState(null), [w, B] = e4.useState(null), [A, V] = e4.useState(Kz2()), X = r1(), [_, F] = e4.useState(!1), g = [{
    label: "Manually fix permissions on current npm prefix (Recommended)",
    value: "manual",
    description: AW9 === "win32" ? "Uses icacls to grant write permissions" : "Uses sudo to change ownership"
  }, {
    label: "Create new npm prefix directory",
    value: "auto",
    description: "Creates a new directory for global npm packages in your home directory"
  }, {
    label: "Skip configuration until next session",
    value: "ignore",
    description: "Skip this warning (you will be reminded again later)"
  }], J = e4.useCallback(async () => {
    let K = await $J1();
    if (I0("tengu_auto_updater_permissions_check", {
        hasPermissions: K.hasPermissions.toString(),
        npmPrefix: K.npmPrefix ?? "null"
      }), Z(K.hasPermissions), K.npmPrefix) W(K.npmPrefix);
    if (K.hasPermissions) {
      let Q = q2();
      if (p4({
          ...Q,
          autoUpdaterStatus: "enabled"
        }), !d) I()
    }
  }, [I, d]);
  if (e4.useEffect(() => {
      I0("tengu_auto_updater_config_start", {}), J()
    }, [J]), C4((K, Q) => {
      if ((_ || d && G === !0) && Q.return) I()
    }, {
      isActive: _ || d && G === !0
    }), G === null) return e4.default.createElement(p, {
    paddingX: 1,
    paddingTop: 1
  }, e4.default.createElement(u, {
    color: X.secondaryText
  }, "Checking npm permissions…"));
  if (G === !0) {
    if (d) return e4.default.createElement(p, {
      flexDirection: "column",
      gap: 1,
      paddingX: 1,
      paddingTop: 1
    }, e4.default.createElement(u, {
      color: X.success
    }, "✓ npm permissions: OK"), e4.default.createElement(u, null, "Your installation is healthy and ready for auto-updates."), e4.default.createElement(JH, null));
    return e4.default.createElement(p, {
      paddingX: 1,
      paddingTop: 1
    }, e4.default.createElement(u, {
      color: X.success
    }, "✓ Auto-updates enabled"))
  }
  return e4.default.createElement(p, {
    borderColor: X.permission,
    borderStyle: "round",
    flexDirection: "column",
    gap: 1,
    paddingX: 1,
    paddingTop: 1
  }, e4.default.createElement(u, {
    bold: !0,
    color: X.permission
  }, "Enable automatic updates?"), e4.default.createElement(u, null, K4, " can't update itself because it doesn't have permissions. Do you want to fix this to get automatic updates?"), e4.default.createElement(p, {
    flexDirection: "column"
  }, !w && e4.default.createElement(p, {
    marginLeft: 2
  }, e4.default.createElement(u, null, "Select an option below to fix the permissions issue:"), e4.default.createElement(Q6, {
    options: g,
    onChange: (K) => {
      if (K !== "auto" && K !== "manual" && K !== "ignore") return;
      if (B(K), I0("tengu_auto_updater_config_option_selected", {
          option: K,
          npmPrefix: C ?? "null"
        }), K === "manual") {
        let Q = q2();
        p4({
          ...Q,
          autoUpdaterStatus: "not_configured"
        }), F(!0)
      } else if (K === "ignore") {
        let Q = q2();
        p4({
          ...Q,
          autoUpdaterStatus: "not_configured"
        }), I()
      }
    }
  })), w === "auto" && e4.default.createElement(p, {
    marginLeft: 2
  }, e4.default.createElement(Qz2, {
    customPrefix: A,
    onCustomPrefixChange: V,
    onSuccess: J,
    onCancel: I
  })), w === "manual" && e4.default.createElement(e4.default.Fragment, null, e4.default.createElement(p, {
    marginLeft: 4,
    flexDirection: "column"
  }, e4.default.createElement(u, null, "Run this command in your terminal:"), e4.default.createElement(p, {
    flexDirection: "row",
    gap: 1
  }, e4.default.createElement(u, {
    color: X.warning
  }, Nz2(C ?? ""))), e4.default.createElement(p, {
    flexDirection: "row",
    gap: 1
  }, e4.default.createElement(u, {
    color: X.suggestion
  }, "After running the command, restart ", K4))), e4.default.createElement(JH, null))))
}
// @from(Start 6167444, End 6167808)
VW9 = {
    name: "doctor",
    description: "Checks the health of your Claude Code installation",
    isEnabled: !0,
    isHidden: !1,
    userFacingName() {
      return "doctor"
    },
    type: "local-jsx",
    call(I) {
      let d = fz2.default.createElement(Au, {
        onDone: I,
        doctorMode: !0
      });
      return Promise.resolve(d)
    }
  }
// @from(Start 6167812, End 6167821)
qz2 = VW9
// @from(Start 6167827, End 6167843)
G2 = J1(u1(), 1)
// @from(Start 6167846, End 6170985)
function Rz2({
  commands: I,
  onClose: d
}) {
  let G = r1(),
    Z = !1,
    C = `Learn more at: ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.anthropic.com/s/claude-code",VERSION:"0.2.9"}.README_URL}`,
    W = I.filter((A) => !A.isHidden),
    [w, B] = G2.useState(0);
  return G2.useEffect(() => {
    let A = setTimeout(() => {
      if (w < 3) B(w + 1)
    }, 250);
    return () => clearTimeout(A)
  }, [w]), C4((A, V) => {
    if (V.return) d()
  }), G2.createElement(p, {
    flexDirection: "column",
    padding: 1
  }, G2.createElement(u, {
    bold: !0,
    color: G.claude
  }, `${K4} v${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.anthropic.com/s/claude-code",VERSION:"0.2.9"}.VERSION}`), G2.createElement(p, {
    marginTop: 1,
    flexDirection: "column"
  }, G2.createElement(u, null, K4, " is a beta research preview. Always review Claude's responses, especially when running code. Claude has read access to files in the current directory and can run commands and edit files with your permission.")), w >= 1 && G2.createElement(p, {
    flexDirection: "column",
    marginTop: 1
  }, G2.createElement(u, {
    bold: !0
  }, "Usage Modes:"), G2.createElement(u, null, "• REPL: ", G2.createElement(u, {
    bold: !0
  }, "claude"), " (interactive session)"), G2.createElement(u, null, "• Non-interactive: ", G2.createElement(u, {
    bold: !0
  }, 'claude -p "question"')), G2.createElement(p, {
    marginTop: 1
  }, G2.createElement(u, null, "Run ", G2.createElement(u, {
    bold: !0
  }, "claude -h"), " for all command line options"))), w >= 2 && G2.createElement(p, {
    marginTop: 1,
    flexDirection: "column"
  }, G2.createElement(u, {
    bold: !0
  }, "Common Tasks:"), G2.createElement(u, null, "• Ask questions about your codebase", " ", G2.createElement(u, {
    color: r1().secondaryText
  }, "> How does foo.py work?")), G2.createElement(u, null, "• Edit files", " ", G2.createElement(u, {
    color: r1().secondaryText
  }, "> Update bar.ts to...")), G2.createElement(u, null, "• Fix errors", " ", G2.createElement(u, {
    color: r1().secondaryText
  }, "> cargo build")), G2.createElement(u, null, "• Run commands", " ", G2.createElement(u, {
    color: r1().secondaryText
  }, "> /help")), G2.createElement(u, null, "• Run bash commands", " ", G2.createElement(u, {
    color: r1().secondaryText
  }, "> !ls"))), w >= 3 && G2.createElement(p, {
    marginTop: 1,
    flexDirection: "column"
  }, G2.createElement(u, {
    bold: !0
  }, "Interactive Mode Commands:"), G2.createElement(p, {
    flexDirection: "column"
  }, W.map((A, V) => G2.createElement(p, {
    key: V,
    marginLeft: 1
  }, G2.createElement(u, {
    bold: !0
  }, `/${A.name}`), G2.createElement(u, null, " - ", A.description))))), G2.createElement(p, {
    marginTop: 1
  }, G2.createElement(u, {
    color: G.secondaryText
  }, C)), G2.createElement(p, {
    marginTop: 2
  }, G2.createElement(JH, null)))
}
// @from(Start 6170990, End 6171007)
uJ1 = J1(u1(), 1)
// @from(Start 6171011, End 6171370)
XW9 = {
    type: "local-jsx",
    name: "help",
    description: "Show help and available commands",
    isEnabled: !0,
    isHidden: !1,
    async call(I, {
      options: {
        commands: d
      }
    }) {
      return uJ1.createElement(Rz2, {
        commands: d,
        onClose: I
      })
    },
    userFacingName() {
      return "help"
    }
  }
// @from(Start 6171374, End 6171383)
Uz2 = XW9
// @from(Start 6171389, End 6172389)
YW9 = {
    type: "prompt",
    name: "init",
    description: "Initialize a new CLAUDE.md file with codebase documentation",
    isEnabled: !0,
    isHidden: !1,
    progressMessage: "analyzing your codebase",
    userFacingName() {
      return "init"
    },
    async getPromptForCommand(I) {
      return zQ(), [{
        role: "user",
        content: [{
          type: "text",
          text: `Please analyze this codebase and create a CLAUDE.md file containing:
1. Build/lint/test commands - especially for running a single test
2. Code style guidelines including imports, formatting, types, naming conventions, error handling, etc.

The file you create will be given to agentic coding agents (such as yourself) that operate in this repository. Make it about 20 lines long.
If there's already a CLAUDE.md, improve it.
If there are Cursor rules (in .cursor/rules/ or .cursorrules) or Copilot rules (in .github/copilot-instructions.md), make sure to include them.`
        }]
      }]
    }
  }
// @from(Start 6172393, End 6172402)
vz2 = YW9
// @from(Start 6172408, End 6172519)
mq3 = process.platform === "darwin" && ["iTerm.app", "Apple_Terminal"].includes(process.env.TERM_PROGRAM || "")
// @from(Start 6172525, End 6172541)
c7 = J1(u1(), 1)
// @from(Start 6172547, End 6172563)
x2 = J1(u1(), 1)
// @from(Start 6172656, End 6172793)
_W9 = {
    REDIRECT_PORT: 54545,
    MANUAL_REDIRECT_URL: "/oauth/code/callback",
    SCOPES: ["org:create_api_key", "user:profile"]
  }
// @from(Start 6172797, End 6173179)
DW9 = {
    ..._W9,
    AUTHORIZE_URL: "https://console.anthropic.com/oauth/authorize",
    TOKEN_URL: "https://console.anthropic.com/v1/oauth/token",
    API_KEY_URL: "https://api.anthropic.com/api/oauth/claude_cli/create_api_key",
    SUCCESS_URL: "https://console.anthropic.com/buy_credits?returnUrl=/oauth/code/success",
    CLIENT_ID: "9d1c250a-e61b-44d9-88ed-5944d1962f5e"
  }
// @from(Start 6173185, End 6173193)
gd = DW9
// @from(Start 6173196, End 6173303)
function TJ1(I) {
  return I.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
}
// @from(Start 6173305, End 6173356)
function HW9() {
  return TJ1(Vu.randomBytes(32))
}
// @from(Start 6173357, End 6173496)
async function FW9(I) {
  let G = new TextEncoder().encode(I),
    Z = await Vu.subtle.digest("SHA-256", G);
  return TJ1(Buffer.from(Z))
}
// @from(Start 6173497, End 6177751)
class OJ1 {
  server = null;
  codeVerifier;
  expectedState = null;
  pendingCodePromise = null;
  constructor() {
    this.codeVerifier = HW9()
  }
  generateAuthUrls(I, d) {
    function G(Z) {
      let C = new URL(gd.AUTHORIZE_URL);
      return C.searchParams.append("client_id", gd.CLIENT_ID), C.searchParams.append("response_type", "code"), C.searchParams.append("redirect_uri", Z ? gd.MANUAL_REDIRECT_URL : `http://localhost:${gd.REDIRECT_PORT}/callback`), C.searchParams.append("scope", gd.SCOPES.join(" ")), C.searchParams.append("code_challenge", I), C.searchParams.append("code_challenge_method", "S256"), C.searchParams.append("state", d), C.toString()
    }
    return {
      autoUrl: G(!1),
      manualUrl: G(!0)
    }
  }
  async startOAuthFlow(I) {
    let d = await FW9(this.codeVerifier),
      G = TJ1(Vu.randomBytes(32));
    this.expectedState = G;
    let {
      autoUrl: Z,
      manualUrl: C
    } = this.generateAuthUrls(d, G), W = async () => {
      await I(C), await rR(Z)
    }, {
      authorizationCode: w,
      useManualRedirect: B
    } = await new Promise((_, F) => {
      this.pendingCodePromise = {
        resolve: _,
        reject: F
      }, this.startLocalServer(G, W)
    }), {
      access_token: A,
      account: V,
      organization: X
    } = await this.exchangeCodeForTokens(w, G, B);
    if (V) {
      let _ = {
          accountUuid: V.uuid,
          emailAddress: V.email_address,
          organizationUuid: X?.uuid
        },
        F = q2();
      F.oauthAccount = _, p4(F)
    }
    return {
      accessToken: A
    }
  }
  startLocalServer(I, d) {
    if (this.server) this.closeServer();
    this.server = Ez2.createServer((G, Z) => {
      let C = Mz2.parse(G.url || "", !0);
      if (C.pathname === "/callback") {
        let W = C.query.code,
          w = C.query.state;
        if (!W) {
          if (Z.writeHead(400), Z.end("Authorization code not found"), this.pendingCodePromise) this.pendingCodePromise.reject(new Error("No authorization code received"));
          return
        }
        if (w !== I) {
          if (Z.writeHead(400), Z.end("Invalid state parameter"), this.pendingCodePromise) this.pendingCodePromise.reject(new Error("Invalid state parameter"));
          return
        }
        Z.writeHead(302, {
          Location: gd.SUCCESS_URL
        }), Z.end(), I0("tengu_oauth_automatic_redirect", {}), this.processCallback({
          authorizationCode: W,
          state: I,
          useManualRedirect: !1
        })
      } else Z.writeHead(404), Z.end()
    }), this.server.listen(gd.REDIRECT_PORT, async () => {
      d?.()
    }), this.server.on("error", (G) => {
      if (G.code === "EADDRINUSE") {
        let C = new Error(`Port ${gd.REDIRECT_PORT} is already in use. Please ensure no other applications are using this port.`);
        if (X0(C), this.closeServer(), this.pendingCodePromise) this.pendingCodePromise.reject(C);
        return
      } else {
        if (X0(G), this.closeServer(), this.pendingCodePromise) this.pendingCodePromise.reject(G);
        return
      }
    })
  }
  async exchangeCodeForTokens(I, d, G = !1) {
    let Z = {
        grant_type: "authorization_code",
        code: I,
        redirect_uri: G ? gd.MANUAL_REDIRECT_URL : `http://localhost:${gd.REDIRECT_PORT}/callback`,
        client_id: gd.CLIENT_ID,
        code_verifier: this.codeVerifier,
        state: d
      },
      C = await fetch(gd.TOKEN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(Z)
      });
    if (!C.ok) throw new Error(`Token exchange failed: ${C.statusText}`);
    return await C.json()
  }
  processCallback({
    authorizationCode: I,
    state: d,
    useManualRedirect: G
  }) {
    if (this.closeServer(), d !== this.expectedState) {
      if (this.pendingCodePromise) this.pendingCodePromise.reject(new Error("Invalid state parameter")), this.pendingCodePromise = null;
      return
    }
    if (this.pendingCodePromise) this.pendingCodePromise.resolve({
      authorizationCode: I,
      useManualRedirect: G
    }), this.pendingCodePromise = null
  }
  closeServer() {
    if (this.server) this.server.close(), this.server = null
  }
}
// @from(Start 6177752, End 6178854)
async function Sz2(I) {
  try {
    let d = await fetch(gd.API_KEY_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${I}`
        }
      }),
      G, Z = "";
    try {
      G = await d.json()
    } catch (C) {
      Z = await d.text()
    }
    if (I0("tengu_oauth_api_key", {
        status: d.ok ? "success" : "failure",
        statusCode: d.status.toString(),
        error: d.ok ? "" : Z || JSON.stringify(G)
      }), d.ok && G && G.raw_key) {
      let C = G.raw_key,
        W = q2();
      if (W.primaryApiKey = C, !W.customApiKeyResponses) W.customApiKeyResponses = {
        approved: [],
        rejected: []
      };
      if (!W.customApiKeyResponses.approved) W.customApiKeyResponses.approved = [];
      let w = Sb(C);
      if (!W.customApiKeyResponses.approved.includes(w)) W.customApiKeyResponses.approved.push(w);
      return p4(W), rK2(), C
    }
    return null
  } catch (d) {
    throw I0("tengu_oauth_api_key", {
      status: "failure",
      statusCode: "exception",
      error: d instanceof Error ? d.message : String(d)
    }), d
  }
}
// @from(Start 6178859, End 6178876)
mJ1 = J1(u1(), 1)
// @from(Start 6178879, End 6179660)
function Lz2() {
  let I = r1();
  return mJ1.default.createElement(p, {
    flexDirection: "column",
    alignItems: "flex-start"
  }, mJ1.default.createElement(u, {
    color: I.claude
  }, ` ██████╗██╗      █████╗ ██╗   ██╗██████╗ ███████╗
██╔════╝██║     ██╔══██╗██║   ██║██╔══██╗██╔════╝
██║     ██║     ███████║██║   ██║██║  ██║█████╗  
██║     ██║     ██╔══██║██║   ██║██║  ██║██╔══╝  
╚██████╗███████╗██║  ██║╚██████╔╝██████╔╝███████╗
 ╚═════╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝
 ██████╗ ██████╗ ██████╗ ███████╗                
██╔════╝██╔═══██╗██╔══██╗██╔════╝                
██║     ██║   ██║██║  ██║█████╗                  
██║     ██║   ██║██║  ██║██╔══╝                  
╚██████╗╚██████╔╝██████╔╝███████╗                
 ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝`))
}
// @from(Start 6179665, End 6179681)
W2 = J1(u1(), 1)
// @from(Start 6179687, End 6179703)
x7 = J1(u1(), 1)
// @from(Start 6179706, End 6181475)
function yz2({
  customApiKeyTruncated: I,
  onDone: d
}) {
  let G = r1();

  function Z(W) {
    let w = q2();
    switch (W) {
      case "yes": {
        p4({
          ...w,
          customApiKeyResponses: {
            ...w.customApiKeyResponses,
            approved: [...w.customApiKeyResponses?.approved ?? [], I]
          }
        }), d();
        break
      }
      case "no": {
        p4({
          ...w,
          customApiKeyResponses: {
            ...w.customApiKeyResponses,
            rejected: [...w.customApiKeyResponses?.rejected ?? [], I]
          }
        }), d();
        break
      }
    }
  }
  let C = P6(() => process.exit(0));
  return x7.default.createElement(x7.default.Fragment, null, x7.default.createElement(p, {
    flexDirection: "column",
    gap: 1,
    padding: 1,
    borderStyle: "round",
    borderColor: G.warning
  }, x7.default.createElement(u, {
    bold: !0,
    color: G.warning
  }, "Detected a custom API key in your environment"), x7.default.createElement(u, null, "Your environment sets", " ", x7.default.createElement(u, {
    color: G.warning
  }, "ANTHROPIC_API_KEY"), ":", " ", x7.default.createElement(u, {
    bold: !0
  }, "sk-ant-...", I)), x7.default.createElement(u, null, "Do you want to use this API key?"), x7.default.createElement(Q6, {
    options: [{
      label: `No (${j0.bold("recommended")})`,
      value: "no"
    }, {
      label: "Yes",
      value: "yes"
    }],
    onChange: (W) => Z(W)
  })), x7.default.createElement(p, {
    marginLeft: 3
  }, x7.default.createElement(u, {
    dimColor: !0
  }, C.pending ? x7.default.createElement(x7.default.Fragment, null, "Press ", C.keyName, " again to exit") : x7.default.createElement(x7.default.Fragment, null, "Enter to confirm"))))
}
// @from(Start 6181480, End 6181496)
L3 = J1(u1(), 1)
// @from(Start 6181502, End 6181519)
Pz2 = J1(u1(), 1)
// @from(Start 6181522, End 6181745)
function nZ({
  patch: I,
  dim: d,
  width: G,
  overrideTheme: Z
}) {
  return Pz2.useMemo(() => gW9(I.lines, I.oldStart, G, d, Z), [I.lines, I.oldStart, G, d, Z]).map((W, w) => L3.createElement(p, {
    key: w
  }, W))
}
// @from(Start 6181747, End 6183414)
function gW9(I, d, G, Z, C) {
  let W = r1(C),
    w = JW9(I.map((V) => {
      if (V.startsWith("+")) return {
        code: " " + V.slice(1),
        i: 0,
        type: "add"
      };
      if (V.startsWith("-")) return {
        code: " " + V.slice(1),
        i: 0,
        type: "remove"
      };
      return {
        code: V,
        i: 0,
        type: "nochange"
      }
    }), d),
    A = Math.max(...w.map(({
      i: V
    }) => V)).toString().length;
  return w.flatMap(({
    type: V,
    code: X,
    i: _
  }) => {
    return jC2(X, G - A).map((g, J) => {
      let K = `${V}-${_}-${J}`;
      switch (V) {
        case "add":
          return L3.createElement(u, {
            key: K
          }, L3.createElement(lJ1, {
            i: J === 0 ? _ : void 0,
            width: A
          }), L3.createElement(u, {
            color: C ? W.text : void 0,
            backgroundColor: Z ? W.diff.addedDimmed : W.diff.added,
            dimColor: Z
          }, g));
        case "remove":
          return L3.createElement(u, {
            key: K
          }, L3.createElement(lJ1, {
            i: J === 0 ? _ : void 0,
            width: A
          }), L3.createElement(u, {
            color: C ? W.text : void 0,
            backgroundColor: Z ? W.diff.removedDimmed : W.diff.removed,
            dimColor: Z
          }, g));
        case "nochange":
          return L3.createElement(u, {
            key: K
          }, L3.createElement(lJ1, {
            i: J === 0 ? _ : void 0,
            width: A
          }), L3.createElement(u, {
            color: C ? W.text : void 0,
            dimColor: Z
          }, g))
      }
    })
  })
}
// @from(Start 6183416, End 6183584)
function lJ1({
  i: I,
  width: d
}) {
  return L3.createElement(u, {
    color: r1().secondaryText
  }, I !== void 0 ? I.toString().padStart(d) : " ".repeat(d), " ")
}
// @from(Start 6183586, End 6184294)
function JW9(I, d) {
  let G = d,
    Z = [],
    C = [...I];
  while (C.length > 0) {
    let {
      code: W,
      type: w
    } = C.shift(), B = {
      code: W,
      type: w,
      i: G
    };
    switch (w) {
      case "nochange":
        G++, Z.push(B);
        break;
      case "add":
        G++, Z.push(B);
        break;
      case "remove": {
        Z.push(B);
        let A = 0;
        while (C[0]?.type === "remove") {
          G++;
          let {
            code: V,
            type: X
          } = C.shift(), _ = {
            code: V,
            type: X,
            i: G
          };
          Z.push(_), A++
        }
        G -= A;
        break
      }
    }
  }
  return Z
}
// @from(Start 6184296, End 6184334)
function as() {
  return !(b9 || h9)
}
// @from(Start 6184336, End 6184384)
function $z2() {
  return !!q2().primaryApiKey
}
// @from(Start 6184386, End 6190624)
function ss({
  onDone: I
}) {
  let [d, G] = W2.useState(0), Z = q2(), C = as(), [W, w] = W2.useState(zC.theme), B = r1();

  function A() {
    if (d < Q.length - 1) {
      let E = d + 1;
      G(E)
    }
  }

  function V(E) {
    p4({
      ...Z,
      theme: E
    }), A()
  }
  let X = P6(() => process.exit(0));
  C4(async (E, S) => {
    let P = Q[d];
    if (S.return && P && ["usage", "security"].includes(P.id))
      if (d === Q.length - 1) I();
      else {
        if (P.id === "security") await $6();
        A()
      }
  });
  let F = W2.default.createElement(p, {
      flexDirection: "column",
      gap: 1,
      paddingLeft: 1
    }, W2.default.createElement(u, null, "Let's get started."), W2.default.createElement(p, {
      flexDirection: "column"
    }, W2.default.createElement(u, {
      bold: !0
    }, "Choose the text style that looks best with your terminal:"), W2.default.createElement(u, {
      dimColor: !0
    }, "To change this later, run /config")), W2.default.createElement(N_, {
      options: [{
        label: "Light text",
        value: "dark"
      }, {
        label: "Dark text",
        value: "light"
      }, {
        label: "Light text (colorblind-friendly)",
        value: "dark-daltonized"
      }, {
        label: "Dark text (colorblind-friendly)",
        value: "light-daltonized"
      }],
      onFocus: (E) => w(E),
      onChange: V
    }), W2.default.createElement(p, {
      flexDirection: "column",
      paddingTop: 1
    }, W2.default.createElement(u, {
      bold: !0
    }, "Preview"), W2.default.createElement(p, {
      paddingLeft: 1,
      marginRight: 1,
      borderStyle: "round",
      flexDirection: "column"
    }, W2.default.createElement(nZ, {
      patch: {
        oldStart: 1,
        newStart: 1,
        oldLines: 3,
        newLines: 3,
        lines: ["function greet() {", '-  console.log("Hello, World!");', '+  console.log("Hello, Claude!");', "}"]
      },
      dim: !1,
      width: 40,
      overrideTheme: W
    })))),
    g = W2.default.createElement(p, {
      flexDirection: "column",
      gap: 1,
      paddingLeft: 1
    }, W2.default.createElement(u, {
      bold: !0
    }, "Security notes:"), W2.default.createElement(p, {
      flexDirection: "column",
      width: 70
    }, W2.default.createElement(b8, null, W2.default.createElement(b8.Item, null, W2.default.createElement(u, null, "Claude Code is currently in research preview"), W2.default.createElement(u, {
      color: B.secondaryText,
      wrap: "wrap"
    }, "This beta version may have limitations or unexpected behaviors.", W2.default.createElement(C6, null), "Run /bug at any time to report issues.", W2.default.createElement(C6, null))), W2.default.createElement(b8.Item, null, W2.default.createElement(u, null, "Claude can make mistakes"), W2.default.createElement(u, {
      color: B.secondaryText,
      wrap: "wrap"
    }, "You should always review Claude's responses, especially when", W2.default.createElement(C6, null), "running code.", W2.default.createElement(C6, null))), W2.default.createElement(b8.Item, null, W2.default.createElement(u, null, "Due to prompt injection risks, only use it with code you trust"), W2.default.createElement(u, {
      color: B.secondaryText,
      wrap: "wrap"
    }, "For more details see:", W2.default.createElement(C6, null), W2.default.createElement(z_, {
      url: "https://docs.anthropic.com/s/claude-code-security"
    }))))), W2.default.createElement(JH, null)),
    J = W2.default.createElement(p, {
      flexDirection: "column",
      gap: 1,
      paddingLeft: 1
    }, W2.default.createElement(u, {
      bold: !0
    }, "Using ", K4, " effectively:"), W2.default.createElement(p, {
      flexDirection: "column",
      width: 70
    }, W2.default.createElement(b8, null, W2.default.createElement(b8.Item, null, W2.default.createElement(u, null, "Start in your project directory", W2.default.createElement(C6, null), W2.default.createElement(u, {
      color: B.secondaryText
    }, "Files are automatically added to context when needed."), W2.default.createElement(C6, null))), W2.default.createElement(b8.Item, null, W2.default.createElement(u, null, "Use ", K4, " as a development partner", W2.default.createElement(C6, null), W2.default.createElement(u, {
      color: B.secondaryText
    }, "Get help with file analysis, editing, bash commands,", W2.default.createElement(C6, null), "and git history.", W2.default.createElement(C6, null)))), W2.default.createElement(b8.Item, null, W2.default.createElement(u, null, "Provide clear context", W2.default.createElement(C6, null), W2.default.createElement(u, {
      color: B.secondaryText
    }, "Be as specific as you would with another engineer. ", W2.default.createElement(C6, null), "The better the context, the better the results. ", W2.default.createElement(C6, null))))), W2.default.createElement(p, null, W2.default.createElement(u, null, "For more details on ", K4, ", see:", W2.default.createElement(C6, null), W2.default.createElement(z_, {
      url: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://docs.anthropic.com/s/claude-code",
        VERSION: "0.2.9"
      }.README_URL
    })))), W2.default.createElement(JH, null)),
    K = W2.useMemo(() => {
      return ""
    }, []),
    Q = [];
  if (Q.push({
      id: "theme",
      component: F
    }), C) Q.push({
    id: "oauth",
    component: W2.default.createElement(os, {
      onDone: A
    })
  });
  if (K) Q.push({
    id: "api-key",
    component: W2.default.createElement(yz2, {
      customApiKeyTruncated: K,
      onDone: A
    })
  });
  return Q.push({
    id: "security",
    component: g
  }), Q.push({
    id: "usage",
    component: J
  }), W2.default.createElement(p, {
    flexDirection: "column",
    gap: 1
  }, Q[d]?.id !== "oauth" && W2.default.createElement(bJ1, null), W2.default.createElement(p, {
    flexDirection: "column",
    padding: 0,
    gap: 0
  }, Q[d]?.component, X.pending && W2.default.createElement(p, {
    padding: 1
  }, W2.default.createElement(u, {
    dimColor: !0
  }, "Press ", X.keyName, " again to exit"))))
}
// @from(Start 6190626, End 6190980)
function bJ1() {
  let I = r1();
  return W2.default.createElement(p, {
    borderColor: I.claude,
    borderStyle: "round",
    paddingX: 1,
    width: a81
  }, W2.default.createElement(u, null, W2.default.createElement(u, {
    color: I.claude
  }, "✻"), " Welcome to", " ", W2.default.createElement(u, {
    bold: !0
  }, K4), " research preview!"))
}
// @from(Start 6190982, End 6191127)
function uz2({
  message: I,
  title: d
}) {
  let G = d ? `${d}:
${I}` : I;
  try {
    process.stdout.write(`\x1B]9;

${G}\x07`)
  } catch {}
}
// @from(Start 6191129, End 6191178)
function Tz2() {
  process.stdout.write("\x07")
}
// @from(Start 6191179, End 6191455)
async function es(I) {
  switch (q2().preferredNotifChannel) {
    case "iterm2":
      uz2(I);
      break;
    case "terminal_bell":
      Tz2();
      break;
    case "iterm2_with_bell":
      uz2(I), Tz2();
      break;
    case "notifications_disabled":
      break
  }
}
// @from(Start 6191460, End 6191498)
Oz2 = "Paste code here if prompted > "
// @from(Start 6191501, End 6198382)
function os({
  onDone: I
}) {
  let [d, G] = x2.useState({
    state: "idle"
  }), Z = r1(), [C, W] = x2.useState(""), [w, B] = x2.useState(0), [A] = x2.useState(() => new OJ1), [V, X] = x2.useState(!1), [_, F] = x2.useState(!1), g = G9().columns - Oz2.length - 1;
  x2.useEffect(() => {
    if (_) $6(), F(!1)
  }, [_]), x2.useEffect(() => {
    if (d.state === "about_to_retry") F(!0), setTimeout(() => {
      G(d.nextState)
    }, 1000)
  }, [d]), C4(async (S, P) => {
    if (P.return) {
      if (d.state === "idle") I0("tengu_oauth_start", {}), G({
        state: "ready_to_start"
      });
      else if (d.state === "success") I0("tengu_oauth_success", {}), await $6(), I();
      else if (d.state === "error" && d.toRetry) W(""), G({
        state: "about_to_retry",
        nextState: d.toRetry
      })
    }
  });
  async function J(S, P) {
    try {
      let [$, h] = S.split("#");
      if (!$ || !h) {
        G({
          state: "error",
          message: "Invalid code. Please make sure the full code was copied",
          toRetry: {
            state: "waiting_for_login",
            url: P
          }
        });
        return
      }
      I0("tengu_oauth_manual_entry", {}), A.processCallback({
        authorizationCode: $,
        state: h,
        useManualRedirect: !0
      })
    } catch ($) {
      X0($), G({
        state: "error",
        message: $.message,
        toRetry: {
          state: "waiting_for_login",
          url: P
        }
      })
    }
  }
  let K = x2.useCallback(async () => {
    try {
      let S = await A.startOAuthFlow(async ($) => {
        G({
          state: "waiting_for_login",
          url: $
        }), setTimeout(() => X(!0), 3000)
      }).catch(($) => {
        if ($.message.includes("Token exchange failed")) G({
          state: "error",
          message: "Failed to exchange authorization code for access token. Please try again.",
          toRetry: {
            state: "ready_to_start"
          }
        }), I0("tengu_oauth_token_exchange_error", {
          error: $.message
        });
        else G({
          state: "error",
          message: $.message,
          toRetry: {
            state: "ready_to_start"
          }
        });
        throw $
      });
      G({
        state: "creating_api_key"
      });
      let P = await Sz2(S.accessToken).catch(($) => {
        throw G({
          state: "error",
          message: "Failed to create API key: " + $.message,
          toRetry: {
            state: "ready_to_start"
          }
        }), I0("tengu_oauth_api_key_error", {
          error: $.message
        }), $
      });
      if (P) G({
        state: "success",
        apiKey: P
      }), es({
        message: "Claude Code login successful"
      });
      else G({
        state: "error",
        message: "Unable to create API key. The server accepted the request but didn't return a key.",
        toRetry: {
          state: "ready_to_start"
        }
      }), I0("tengu_oauth_api_key_error", {
        error: "server_returned_no_key"
      })
    } catch (S) {
      let P = S.message;
      I0("tengu_oauth_error", {
        error: P
      })
    }
  }, [A, X]);
  x2.useEffect(() => {
    if (d.state === "ready_to_start") K()
  }, [d.state, K]);

  function Q() {
    switch (d.state) {
      case "idle":
        return x2.default.createElement(p, {
          flexDirection: "column",
          gap: 1
        }, x2.default.createElement(u, {
          bold: !0
        }, K4, " is billed based on API usage through your Anthropic Console account."), x2.default.createElement(p, null, x2.default.createElement(u, null, "Pricing may evolve as we move towards general availability.")), x2.default.createElement(p, {
          marginTop: 1
        }, x2.default.createElement(u, {
          color: Z.permission
        }, "Press ", x2.default.createElement(u, {
          bold: !0
        }, "Enter"), " to login to your Anthropic Console account…")));
      case "waiting_for_login":
        return x2.default.createElement(p, {
          flexDirection: "column",
          gap: 1
        }, !V && x2.default.createElement(p, null, x2.default.createElement(Cu, null), x2.default.createElement(u, null, "Opening browser to sign in…")), V && x2.default.createElement(p, null, x2.default.createElement(u, null, Oz2), x2.default.createElement(mC, {
          value: C,
          onChange: W,
          onSubmit: (S) => J(S, d.url),
          cursorOffset: w,
          onChangeCursorOffset: B,
          columns: g
        })));
      case "creating_api_key":
        return x2.default.createElement(p, {
          flexDirection: "column",
          gap: 1
        }, x2.default.createElement(p, null, x2.default.createElement(Cu, null), x2.default.createElement(u, null, "Creating API key for Claude Code…")));
      case "about_to_retry":
        return x2.default.createElement(p, {
          flexDirection: "column",
          gap: 1
        }, x2.default.createElement(u, {
          color: Z.permission
        }, "Retrying…"));
      case "success":
        return x2.default.createElement(p, {
          flexDirection: "column",
          gap: 1
        }, x2.default.createElement(u, {
          color: Z.success
        }, "Login successful. Press ", x2.default.createElement(u, {
          bold: !0
        }, "Enter"), " to continue…"));
      case "error":
        return x2.default.createElement(p, {
          flexDirection: "column",
          gap: 1
        }, x2.default.createElement(u, {
          color: Z.error
        }, "OAuth error: ", d.message), d.toRetry && x2.default.createElement(p, {
          marginTop: 1
        }, x2.default.createElement(u, {
          color: Z.permission
        }, "Press ", x2.default.createElement(u, {
          bold: !0
        }, "Enter"), " to retry.")));
      default:
        return null
    }
  }
  let E = {};
  if (!_) E.header = x2.default.createElement(p, {
    key: "header",
    flexDirection: "column",
    gap: 1
  }, x2.default.createElement(bJ1, null), x2.default.createElement(p, {
    paddingBottom: 1,
    paddingLeft: 1
  }, x2.default.createElement(Lz2, null)));
  if (d.state === "waiting_for_login" && V) E.urlToCopy = x2.default.createElement(p, {
    flexDirection: "column",
    key: "urlToCopy",
    gap: 1,
    paddingBottom: 1
  }, x2.default.createElement(p, {
    paddingX: 1
  }, x2.default.createElement(u, {
    dimColor: !0
  }, "Browser didn't open? Use the url below to sign in:")), x2.default.createElement(p, {
    width: 1000
  }, x2.default.createElement(u, {
    dimColor: !0
  }, d.url)));
  return x2.default.createElement(p, {
    flexDirection: "column",
    gap: 1
  }, x2.default.createElement(DQ, {
    items: Object.keys(E)
  }, (S) => E[S]), x2.default.createElement(p, {
    paddingLeft: 1,
    flexDirection: "column",
    gap: 1
  }, Q()))
}
// @from(Start 6198387, End 6198746)
mz2 = () => ({
  type: "local-jsx",
  name: "login",
  description: $z2() ? "Switch Anthropic accounts" : "Sign in with your Anthropic account",
  isEnabled: !0,
  isHidden: !1,
  async call(I, d) {
    return await $6(), c7.createElement(KW9, {
      onDone: async () => {
        Iu(d), I()
      }
    })
  },
  userFacingName() {
    return "login"
  }
})
// @from(Start 6198749, End 6199090)
function KW9(I) {
  let d = P6(I.onDone);
  return c7.createElement(p, {
    flexDirection: "column"
  }, c7.createElement(os, {
    onDone: I.onDone
  }), c7.createElement(p, {
    marginLeft: 3
  }, c7.createElement(u, {
    dimColor: !0
  }, d.pending ? c7.createElement(c7.Fragment, null, "Press ", d.keyName, " again to exit") : "")))
}
// @from(Start 6199095, End 6199112)
hJ1 = J1(u1(), 1)
// @from(Start 6199118, End 6199693)
lz2 = {
  type: "local-jsx",
  name: "logout",
  description: "Sign out from your Anthropic account",
  isEnabled: !0,
  isHidden: !1,
  async call() {
    await $6();
    let I = q2();
    if (I.oauthAccount = void 0, I.primaryApiKey = void 0, I.hasCompletedOnboarding = !1, I.customApiKeyResponses?.approved) I.customApiKeyResponses.approved = [];
    p4(I);
    let d = hJ1.createElement(u, null, "Successfully logged out from your Anthropic account.");
    return setTimeout(() => {
      process.exit(0)
    }, 200), d
  },
  userFacingName() {
    return "logout"
  }
}
// @from(Start 6199699, End 6199716)
jJ1 = J1(u1(), 1)
// @from(Start 6199722, End 6200119)
bz2 = {
  type: "local-jsx",
  name: "onboarding",
  description: "[ANT-ONLY] Run through the onboarding flow",
  isEnabled: !1,
  isHidden: !1,
  async call(I, d) {
    await $6();
    let G = q2();
    return p4({
      ...G,
      theme: "dark"
    }), jJ1.createElement(ss, {
      onDone: async () => {
        Iu(d), I()
      }
    })
  },
  userFacingName() {
    return "onboarding"
  }
}
// @from(Start 6200125, End 6201899)
hz2 = {
  type: "prompt",
  name: "pr-comments",
  description: "Get comments from a GitHub pull request",
  progressMessage: "fetching PR comments",
  isEnabled: !0,
  isHidden: !1,
  userFacingName() {
    return "pr-comments"
  },
  async getPromptForCommand(I) {
    return [{
      role: "user",
      content: [{
        type: "text",
        text: `You are an AI assistant integrated into a git-based version control system. Your task is to fetch and display comments from a GitHub pull request.

Follow these steps:

1. Use \`gh pr view --json number,headRepository\` to get the PR number and repository info
2. Use \`gh api /repos/{owner}/{repo}/issues/{number}/comments\` to get PR-level comments
3. Use \`gh api /repos/{owner}/{repo}/pulls/{number}/comments\` to get review comments. Pay particular attention to the following fields: \`body\`, \`diff_hunk\`, \`path\`, \`line\`, etc. If the comment references some code, consider fetching it using eg \`gh api /repos/{owner}/{repo}/contents/{path}?ref={branch} | jq .content -r | base64 -d\`
4. Parse and format all comments in a readable way
5. Return ONLY the formatted comments, with no additional text

Format the comments as:

## Comments

[For each comment thread:]
- @author file.ts#line:
  \`\`\`diff
  [diff_hunk from the API response]
  \`\`\`
  > quoted comment text
  
  [any replies indented]

If there are no comments, return "No comments found."

Remember:
1. Only show the actual comments, no explanatory text
2. Include both PR-level and code review comments
3. Preserve the threading/nesting of comment replies
4. Show the file and line number context for code review comments
5. Use jq to parse the JSON responses from the GitHub API

${I?"Additional user input: "+I:""}
`
      }]
    }]
  }
}
// @from(Start 6201905, End 6202697)
NW9 = {
    description: "Show release notes for the current or specified version",
    isEnabled: !1,
    isHidden: !1,
    name: "release-notes",
    userFacingName() {
      return "release-notes"
    },
    type: "local",
    async call(I) {
      let d = {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://docs.anthropic.com/s/claude-code",
          VERSION: "0.2.9"
        }.VERSION,
        G = I ? I.trim() : d,
        Z = Xk[G];
      if (!Z || Z.length === 0) return `No release notes available for version ${G}.`;
      let C = `Release notes for version ${G}:`,
        W = Z.map((w) => `• ${w}`).join(`
`);
      return `${C}

${W}`
    }
  }
// @from(Start 6202701, End 6202710)
jz2 = NW9
// @from(Start 6202716, End 6203940)
ts = {
  type: "prompt",
  name: "review",
  description: "Review a pull request",
  isEnabled: !0,
  isHidden: !1,
  progressMessage: "reviewing pull request",
  userFacingName() {
    return "review"
  },
  async getPromptForCommand(I) {
    return [{
      role: "user",
      content: [{
        type: "text",
        text: `
      You are an expert code reviewer. Follow these steps:

      1. If no PR number is provided in the args, use ${G5.name}("gh pr list") to show open PRs
      2. If a PR number is provided, use ${G5.name}("gh pr view <number>") to get PR details
      3. Use ${G5.name}("gh pr diff <number>") to get the diff
      4. Analyze the changes and provide a thorough code review that includes:
         - Overview of what the PR does
         - Analysis of code quality and style
         - Specific suggestions for improvements
         - Any potential issues or risks
      
      Keep your review concise but thorough. Focus on:
      - Code correctness
      - Following project conventions
      - Performance implications
      - Test coverage
      - Security considerations

      Format your review with clear sections and bullet points.

      PR number: ${I}
    `
      }]
    }]
  }
}
// @from(Start 6203946, End 6203963)
RW9 = J1(u1(), 1)
// @from(Start 6203969, End 6203986)
fW9 = J1(u1(), 1)
// @from(Start 6203992, End 6204009)
zW9 = J1(u1(), 1)
// @from(Start 6204142, End 6204159)
Yu = "2024-11-05"
// @from(Start 6204163, End 6204186)
Go = [Yu, "2024-10-07"]
// @from(Start 6204190, End 6204200)
Zo = "2.0"
// @from(Start 6204204, End 6204249)
kz2 = s.union([s.string(), s.number().int()])
// @from(Start 6204253, End 6204269)
xz2 = s.string()
// @from(Start 6204273, End 6204399)
fW = s.object({
    _meta: s.optional(s.object({
      progressToken: s.optional(kz2)
    }).passthrough())
  }).passthrough()
// @from(Start 6204403, End 6204474)
HG = s.object({
    method: s.string(),
    params: s.optional(fW)
  })
// @from(Start 6204478, End 6204562)
_u = s.object({
    _meta: s.optional(s.object({}).passthrough())
  }).passthrough()
// @from(Start 6204566, End 6204637)
lB = s.object({
    method: s.string(),
    params: s.optional(_u)
  })
// @from(Start 6204641, End 6204725)
qW = s.object({
    _meta: s.optional(s.object({}).passthrough())
  }).passthrough()
// @from(Start 6204729, End 6204773)
Co = s.union([s.string(), s.number().int()])
// @from(Start 6204777, End 6204856)
UW9 = s.object({
    jsonrpc: s.literal(Zo),
    id: Co
  }).merge(HG).strict()
// @from(Start 6204860, End 6204927)
vW9 = s.object({
    jsonrpc: s.literal(Zo)
  }).merge(lB).strict()
// @from(Start 6204931, End 6205016)
EW9 = s.object({
    jsonrpc: s.literal(Zo),
    id: Co,
    result: qW
  }).strict()
// @from(Start 6205020, End 6205022)
WK
// @from(Start 6205400, End 6205592)
MW9 = s.object({
    jsonrpc: s.literal(Zo),
    id: Co,
    error: s.object({
      code: s.number().int(),
      message: s.string(),
      data: s.optional(s.unknown())
    })
  }).strict()
// @from(Start 6205596, End 6205630)
Wo = s.union([UW9, vW9, EW9, MW9])
// @from(Start 6205634, End 6205650)
HX = qW.strict()
// @from(Start 6205654, End 6205813)
wo = lB.extend({
    method: s.literal("notifications/cancelled"),
    params: _u.extend({
      requestId: Co,
      reason: s.string().optional()
    })
  })
// @from(Start 6205817, End 6205898)
cz2 = s.object({
    name: s.string(),
    version: s.string()
  }).passthrough()
// @from(Start 6205902, End 6206147)
SW9 = s.object({
    experimental: s.optional(s.object({}).passthrough()),
    sampling: s.optional(s.object({}).passthrough()),
    roots: s.optional(s.object({
      listChanged: s.optional(s.boolean())
    }).passthrough())
  }).passthrough()
// @from(Start 6206151, End 6206323)
xJ1 = HG.extend({
    method: s.literal("initialize"),
    params: fW.extend({
      protocolVersion: s.string(),
      capabilities: SW9,
      clientInfo: cz2
    })
  })
// @from(Start 6206327, End 6206817)
LW9 = s.object({
    experimental: s.optional(s.object({}).passthrough()),
    logging: s.optional(s.object({}).passthrough()),
    prompts: s.optional(s.object({
      listChanged: s.optional(s.boolean())
    }).passthrough()),
    resources: s.optional(s.object({
      subscribe: s.optional(s.boolean()),
      listChanged: s.optional(s.boolean())
    }).passthrough()),
    tools: s.optional(s.object({
      listChanged: s.optional(s.boolean())
    }).passthrough())
  }).passthrough()
// @from(Start 6206821, End 6206961)
cJ1 = qW.extend({
    protocolVersion: s.string(),
    capabilities: LW9,
    serverInfo: cz2,
    instructions: s.optional(s.string())
  })
// @from(Start 6206965, End 6207038)
pJ1 = lB.extend({
    method: s.literal("notifications/initialized")
  })
// @from(Start 6207042, End 6207093)
Bo = HG.extend({
    method: s.literal("ping")
  })
// @from(Start 6207097, End 6207192)
yW9 = s.object({
    progress: s.number(),
    total: s.optional(s.number())
  }).passthrough()
// @from(Start 6207196, End 6207333)
Ao = lB.extend({
    method: s.literal("notifications/progress"),
    params: _u.merge(yW9).extend({
      progressToken: kz2
    })
  })
// @from(Start 6207337, End 6207430)
Vo = HG.extend({
    params: fW.extend({
      cursor: s.optional(xz2)
    }).optional()
  })
// @from(Start 6207434, End 6207487)
Xo = qW.extend({
    nextCursor: s.optional(xz2)
  })
// @from(Start 6207491, End 6207584)
pz2 = s.object({
    uri: s.string(),
    mimeType: s.optional(s.string())
  }).passthrough()
// @from(Start 6207588, End 6207632)
iz2 = pz2.extend({
    text: s.string()
  })
// @from(Start 6207636, End 6207689)
nz2 = pz2.extend({
    blob: s.string().base64()
  })
// @from(Start 6207693, End 6207849)
PW9 = s.object({
    uri: s.string(),
    name: s.string(),
    description: s.optional(s.string()),
    mimeType: s.optional(s.string())
  }).passthrough()
// @from(Start 6207853, End 6208017)
$W9 = s.object({
    uriTemplate: s.string(),
    name: s.string(),
    description: s.optional(s.string()),
    mimeType: s.optional(s.string())
  }).passthrough()
// @from(Start 6208021, End 6208083)
uW9 = Vo.extend({
    method: s.literal("resources/list")
  })
// @from(Start 6208087, End 6208137)
iJ1 = Xo.extend({
    resources: s.array(PW9)
  })
// @from(Start 6208141, End 6208213)
TW9 = Vo.extend({
    method: s.literal("resources/templates/list")
  })
// @from(Start 6208217, End 6208275)
nJ1 = Xo.extend({
    resourceTemplates: s.array($W9)
  })
// @from(Start 6208279, End 6208395)
OW9 = HG.extend({
    method: s.literal("resources/read"),
    params: fW.extend({
      uri: s.string()
    })
  })
// @from(Start 6208399, End 6208464)
rJ1 = qW.extend({
    contents: s.array(s.union([iz2, nz2]))
  })
// @from(Start 6208468, End 6208552)
mW9 = lB.extend({
    method: s.literal("notifications/resources/list_changed")
  })
// @from(Start 6208556, End 6208677)
lW9 = HG.extend({
    method: s.literal("resources/subscribe"),
    params: fW.extend({
      uri: s.string()
    })
  })
// @from(Start 6208681, End 6208804)
bW9 = HG.extend({
    method: s.literal("resources/unsubscribe"),
    params: fW.extend({
      uri: s.string()
    })
  })
// @from(Start 6208808, End 6208941)
hW9 = lB.extend({
    method: s.literal("notifications/resources/updated"),
    params: _u.extend({
      uri: s.string()
    })
  })
// @from(Start 6208945, End 6209081)
jW9 = s.object({
    name: s.string(),
    description: s.optional(s.string()),
    required: s.optional(s.boolean())
  }).passthrough()
// @from(Start 6209085, End 6209223)
kW9 = s.object({
    name: s.string(),
    description: s.optional(s.string()),
    arguments: s.optional(s.array(jW9))
  }).passthrough()
// @from(Start 6209227, End 6209287)
xW9 = Vo.extend({
    method: s.literal("prompts/list")
  })
// @from(Start 6209291, End 6209338)
Du = Xo.extend({
    prompts: s.array(kW9)
  })
// @from(Start 6209342, End 6209507)
cW9 = HG.extend({
    method: s.literal("prompts/get"),
    params: fW.extend({
      name: s.string(),
      arguments: s.optional(s.record(s.string()))
    })
  })
// @from(Start 6209511, End 6209595)
Yo = s.object({
    type: s.literal("text"),
    text: s.string()
  }).passthrough()
// @from(Start 6209599, End 6209719)
_o = s.object({
    type: s.literal("image"),
    data: s.string().base64(),
    mimeType: s.string()
  }).passthrough()
// @from(Start 6209723, End 6209825)
rz2 = s.object({
    type: s.literal("resource"),
    resource: s.union([iz2, nz2])
  }).passthrough()
// @from(Start 6209829, End 6209941)
pW9 = s.object({
    role: s.enum(["user", "assistant"]),
    content: s.union([Yo, _o, rz2])
  }).passthrough()
// @from(Start 6209945, End 6210035)
aJ1 = qW.extend({
    description: s.optional(s.string()),
    messages: s.array(pW9)
  })
// @from(Start 6210039, End 6210121)
iW9 = lB.extend({
    method: s.literal("notifications/prompts/list_changed")
  })
// @from(Start 6210125, End 6210362)
nW9 = s.object({
    name: s.string(),
    description: s.optional(s.string()),
    inputSchema: s.object({
      type: s.literal("object"),
      properties: s.optional(s.object({}).passthrough())
    }).passthrough()
  }).passthrough()
// @from(Start 6210366, End 6210424)
sJ1 = Vo.extend({
    method: s.literal("tools/list")
  })
// @from(Start 6210428, End 6210473)
Hu = Xo.extend({
    tools: s.array(nW9)
  })
// @from(Start 6210477, End 6210592)
IU = qW.extend({
    content: s.array(s.union([Yo, _o, rz2])),
    isError: s.boolean().default(!1).optional()
  })
// @from(Start 6210596, End 6210653)
mU3 = IU.or(qW.extend({
    toolResult: s.unknown()
  }))
// @from(Start 6210657, End 6210822)
oJ1 = HG.extend({
    method: s.literal("tools/call"),
    params: fW.extend({
      name: s.string(),
      arguments: s.optional(s.record(s.unknown()))
    })
  })
// @from(Start 6210826, End 6210906)
rW9 = lB.extend({
    method: s.literal("notifications/tools/list_changed")
  })
// @from(Start 6210910, End 6211005)
az2 = s.enum(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"])
// @from(Start 6211009, End 6211122)
aW9 = HG.extend({
    method: s.literal("logging/setLevel"),
    params: fW.extend({
      level: az2
    })
  })
// @from(Start 6211126, End 6211307)
sW9 = lB.extend({
    method: s.literal("notifications/message"),
    params: _u.extend({
      level: az2,
      logger: s.optional(s.string()),
      data: s.unknown()
    })
  })
// @from(Start 6211311, End 6211378)
oW9 = s.object({
    name: s.string().optional()
  }).passthrough()
// @from(Start 6211382, End 6211630)
eW9 = s.object({
    hints: s.optional(s.array(oW9)),
    costPriority: s.optional(s.number().min(0).max(1)),
    speedPriority: s.optional(s.number().min(0).max(1)),
    intelligencePriority: s.optional(s.number().min(0).max(1))
  }).passthrough()
// @from(Start 6211634, End 6211741)
tW9 = s.object({
    role: s.enum(["user", "assistant"]),
    content: s.union([Yo, _o])
  }).passthrough()
// @from(Start 6211745, End 6212229)
Iw9 = HG.extend({
    method: s.literal("sampling/createMessage"),
    params: fW.extend({
      messages: s.array(tW9),
      systemPrompt: s.optional(s.string()),
      includeContext: s.optional(s.enum(["none", "thisServer", "allServers"])),
      temperature: s.optional(s.number()),
      maxTokens: s.number().int(),
      stopSequences: s.optional(s.array(s.string())),
      metadata: s.optional(s.object({}).passthrough()),
      modelPreferences: s.optional(eW9)
    })
  })
// @from(Start 6212233, End 6212464)
eJ1 = qW.extend({
    model: s.string(),
    stopReason: s.optional(s.enum(["endTurn", "stopSequence", "maxTokens"]).or(s.string())),
    role: s.enum(["user", "assistant"]),
    content: s.discriminatedUnion("type", [Yo, _o])
  })
// @from(Start 6212468, End 6212560)
dw9 = s.object({
    type: s.literal("ref/resource"),
    uri: s.string()
  }).passthrough()
// @from(Start 6212564, End 6212655)
Gw9 = s.object({
    type: s.literal("ref/prompt"),
    name: s.string()
  }).passthrough()
// @from(Start 6212659, End 6212892)
Zw9 = HG.extend({
    method: s.literal("completion/complete"),
    params: fW.extend({
      ref: s.union([Gw9, dw9]),
      argument: s.object({
        name: s.string(),
        value: s.string()
      }).passthrough()
    })
  })
// @from(Start 6212896, End 6213092)
tJ1 = qW.extend({
    completion: s.object({
      values: s.array(s.string()).max(100),
      total: s.optional(s.number().int()),
      hasMore: s.optional(s.boolean())
    }).passthrough()
  })
// @from(Start 6213096, End 6213207)
Cw9 = s.object({
    uri: s.string().startsWith("file://"),
    name: s.optional(s.string())
  }).passthrough()
// @from(Start 6213211, End 6213269)
Ww9 = HG.extend({
    method: s.literal("roots/list")
  })
// @from(Start 6213273, End 6213319)
IK1 = qW.extend({
    roots: s.array(Cw9)
  })
// @from(Start 6213323, End 6213403)
ww9 = lB.extend({
    method: s.literal("notifications/roots/list_changed")
  })
// @from(Start 6213407, End 6213486)
lU3 = s.union([Bo, xJ1, Zw9, aW9, cW9, xW9, uW9, TW9, OW9, lW9, bW9, oJ1, sJ1])
// @from(Start 6213490, End 6213523)
bU3 = s.union([wo, Ao, pJ1, ww9])
// @from(Start 6213527, End 6213556)
hU3 = s.union([HX, eJ1, IK1])
// @from(Start 6213560, End 6213589)
jU3 = s.union([Bo, Iw9, Ww9])
// @from(Start 6213593, End 6213641)
kU3 = s.union([wo, Ao, sW9, hW9, mW9, rW9, iW9])
// @from(Start 6213645, End 6213706)
xU3 = s.union([HX, cJ1, tJ1, aJ1, Du, iJ1, nJ1, rJ1, IU, Hu])
// @from(Start 6213708, End 6213831)
class Fu extends Error {
  constructor(I, d, G) {
    super(`MCP error ${I}: ${d}`);
    this.code = I, this.data = G
  }
}
// @from(Start 6213836, End 6213847)
Bw9 = 60000
// @from(Start 6213849, End 6220922)
class gu {
  constructor(I) {
    this._options = I, this._requestMessageId = 0, this._requestHandlers = new Map, this._requestHandlerAbortControllers = new Map, this._notificationHandlers = new Map, this._responseHandlers = new Map, this._progressHandlers = new Map, this.setNotificationHandler(wo, (d) => {
      let G = this._requestHandlerAbortControllers.get(d.params.requestId);
      G === null || G === void 0 || G.abort(d.params.reason)
    }), this.setNotificationHandler(Ao, (d) => {
      this._onprogress(d)
    }), this.setRequestHandler(Bo, (d) => ({}))
  }
  async connect(I) {
    this._transport = I, this._transport.onclose = () => {
      this._onclose()
    }, this._transport.onerror = (d) => {
      this._onerror(d)
    }, this._transport.onmessage = (d) => {
      if (!("method" in d)) this._onresponse(d);
      else if ("id" in d) this._onrequest(d);
      else this._onnotification(d)
    }, await this._transport.start()
  }
  _onclose() {
    var I;
    let d = this._responseHandlers;
    this._responseHandlers = new Map, this._progressHandlers.clear(), this._transport = void 0, (I = this.onclose) === null || I === void 0 || I.call(this);
    let G = new Fu(WK.ConnectionClosed, "Connection closed");
    for (let Z of d.values()) Z(G)
  }
  _onerror(I) {
    var d;
    (d = this.onerror) === null || d === void 0 || d.call(this, I)
  }
  _onnotification(I) {
    var d;
    let G = (d = this._notificationHandlers.get(I.method)) !== null && d !== void 0 ? d : this.fallbackNotificationHandler;
    if (G === void 0) return;
    Promise.resolve().then(() => G(I)).catch((Z) => this._onerror(new Error(`Uncaught error in notification handler: ${Z}`)))
  }
  _onrequest(I) {
    var d, G;
    let Z = (d = this._requestHandlers.get(I.method)) !== null && d !== void 0 ? d : this.fallbackRequestHandler;
    if (Z === void 0) {
      (G = this._transport) === null || G === void 0 || G.send({
        jsonrpc: "2.0",
        id: I.id,
        error: {
          code: WK.MethodNotFound,
          message: "Method not found"
        }
      }).catch((W) => this._onerror(new Error(`Failed to send an error response: ${W}`)));
      return
    }
    let C = new AbortController;
    this._requestHandlerAbortControllers.set(I.id, C), Promise.resolve().then(() => Z(I, {
      signal: C.signal
    })).then((W) => {
      var w;
      if (C.signal.aborted) return;
      return (w = this._transport) === null || w === void 0 ? void 0 : w.send({
        result: W,
        jsonrpc: "2.0",
        id: I.id
      })
    }, (W) => {
      var w, B;
      if (C.signal.aborted) return;
      return (w = this._transport) === null || w === void 0 ? void 0 : w.send({
        jsonrpc: "2.0",
        id: I.id,
        error: {
          code: Number.isSafeInteger(W.code) ? W.code : WK.InternalError,
          message: (B = W.message) !== null && B !== void 0 ? B : "Internal error"
        }
      })
    }).catch((W) => this._onerror(new Error(`Failed to send response: ${W}`))).finally(() => {
      this._requestHandlerAbortControllers.delete(I.id)
    })
  }
  _onprogress(I) {
    let {
      progressToken: d,
      ...G
    } = I.params, Z = this._progressHandlers.get(Number(d));
    if (Z === void 0) {
      this._onerror(new Error(`Received a progress notification for an unknown token: ${JSON.stringify(I)}`));
      return
    }
    Z(G)
  }
  _onresponse(I) {
    let d = I.id,
      G = this._responseHandlers.get(Number(d));
    if (G === void 0) {
      this._onerror(new Error(`Received a response for an unknown message ID: ${JSON.stringify(I)}`));
      return
    }
    if (this._responseHandlers.delete(Number(d)), this._progressHandlers.delete(Number(d)), "result" in I) G(I);
    else {
      let Z = new Fu(I.error.code, I.error.message, I.error.data);
      G(Z)
    }
  }
  get transport() {
    return this._transport
  }
  async close() {
    var I;
    await ((I = this._transport) === null || I === void 0 ? void 0 : I.close())
  }
  request(I, d, G) {
    return new Promise((Z, C) => {
      var W, w, B, A;
      if (!this._transport) {
        C(new Error("Not connected"));
        return
      }
      if (((W = this._options) === null || W === void 0 ? void 0 : W.enforceStrictCapabilities) === !0) this.assertCapabilityForMethod(I.method);
      (w = G === null || G === void 0 ? void 0 : G.signal) === null || w === void 0 || w.throwIfAborted();
      let V = this._requestMessageId++,
        X = {
          ...I,
          jsonrpc: "2.0",
          id: V
        };
      if (G === null || G === void 0 ? void 0 : G.onprogress) this._progressHandlers.set(V, G.onprogress), X.params = {
        ...I.params,
        _meta: {
          progressToken: V
        }
      };
      let _ = void 0;
      this._responseHandlers.set(V, (J) => {
        var K;
        if (_ !== void 0) clearTimeout(_);
        if ((K = G === null || G === void 0 ? void 0 : G.signal) === null || K === void 0 ? void 0 : K.aborted) return;
        if (J instanceof Error) return C(J);
        try {
          let Q = d.parse(J.result);
          Z(Q)
        } catch (Q) {
          C(Q)
        }
      });
      let F = (J) => {
        var K;
        this._responseHandlers.delete(V), this._progressHandlers.delete(V), (K = this._transport) === null || K === void 0 || K.send({
          jsonrpc: "2.0",
          method: "notifications/cancelled",
          params: {
            requestId: V,
            reason: String(J)
          }
        }).catch((Q) => this._onerror(new Error(`Failed to send cancellation: ${Q}`))), C(J)
      };
      (B = G === null || G === void 0 ? void 0 : G.signal) === null || B === void 0 || B.addEventListener("abort", () => {
        var J;
        if (_ !== void 0) clearTimeout(_);
        F((J = G === null || G === void 0 ? void 0 : G.signal) === null || J === void 0 ? void 0 : J.reason)
      });
      let g = (A = G === null || G === void 0 ? void 0 : G.timeout) !== null && A !== void 0 ? A : Bw9;
      _ = setTimeout(() => F(new Fu(WK.RequestTimeout, "Request timed out", {
        timeout: g
      })), g), this._transport.send(X).catch((J) => {
        if (_ !== void 0) clearTimeout(_);
        C(J)
      })
    })
  }
  async notification(I) {
    if (!this._transport) throw new Error("Not connected");
    this.assertNotificationCapability(I.method);
    let d = {
      ...I,
      jsonrpc: "2.0"
    };
    await this._transport.send(d)
  }
  setRequestHandler(I, d) {
    let G = I.shape.method.value;
    this.assertRequestHandlerCapability(G), this._requestHandlers.set(G, (Z, C) => Promise.resolve(d(I.parse(Z), C)))
  }
  removeRequestHandler(I) {
    this._requestHandlers.delete(I)
  }
  assertCanSetRequestHandler(I) {
    if (this._requestHandlers.has(I)) throw new Error(`A request handler for ${I} already exists, which would be overridden`)
  }
  setNotificationHandler(I, d) {
    this._notificationHandlers.set(I.shape.method.value, (G) => Promise.resolve(d(I.parse(G))))
  }
  removeNotificationHandler(I) {
    this._notificationHandlers.delete(I)
  }
}
// @from(Start 6220924, End 6221138)
function Do(I, d) {
  return Object.entries(d).reduce((G, [Z, C]) => {
    if (C && typeof C === "object") G[Z] = G[Z] ? {
      ...G[Z],
      ...C
    } : C;
    else G[Z] = C;
    return G
  }, {
    ...I
  })
}