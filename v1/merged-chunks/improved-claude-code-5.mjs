/* Some variables in the code import from the following projects
* J1 import from OSS "sentry"
* u1 import from OSS "statsig"
* p, u, r1, NQ import from OSS "ink"
* R0, tG, q2, p4, I5, o9, OE, wz, I0, Uw, j0, I41, K2, NY, b9, h9 import from OSS "yoga"
* a2, r01, s01, X0, lA import from OSS "commander.js"
* v40, P40, p81, MS import from OSS "npm"
*/

// @from(Start 6221139, End 6226764)
class dK1 extends gu {
  constructor(I, d) {
    var G;
    super(d);
    this._clientInfo = I, this._capabilities = (G = d === null || d === void 0 ? void 0 : d.capabilities) !== null && G !== void 0 ? G : {}
  }
  registerCapabilities(I) {
    if (this.transport) throw new Error("Cannot register capabilities after connecting to transport");
    this._capabilities = Do(this._capabilities, I)
  }
  assertCapability(I, d) {
    var G;
    if (!((G = this._serverCapabilities) === null || G === void 0 ? void 0 : G[I])) throw new Error(`Server does not support ${I} (required for ${d})`)
  }
  async connect(I) {
    await super.connect(I);
    try {
      let d = await this.request({
        method: "initialize",
        params: {
          protocolVersion: Yu,
          capabilities: this._capabilities,
          clientInfo: this._clientInfo
        }
      }, cJ1);
      if (d === void 0) throw new Error(`Server sent invalid initialize result: ${d}`);
      if (!Go.includes(d.protocolVersion)) throw new Error(`Server's protocol version is not supported: ${d.protocolVersion}`);
      this._serverCapabilities = d.capabilities, this._serverVersion = d.serverInfo, this._instructions = d.instructions, await this.notification({
        method: "notifications/initialized"
      })
    } catch (d) {
      throw this.close(), d
    }
  }
  getServerCapabilities() {
    return this._serverCapabilities
  }
  getServerVersion() {
    return this._serverVersion
  }
  getInstructions() {
    return this._instructions
  }
  assertCapabilityForMethod(I) {
    var d, G, Z, C, W;
    switch (I) {
      case "logging/setLevel":
        if (!((d = this._serverCapabilities) === null || d === void 0 ? void 0 : d.logging)) throw new Error(`Server does not support logging (required for ${I})`);
        break;
      case "prompts/get":
      case "prompts/list":
        if (!((G = this._serverCapabilities) === null || G === void 0 ? void 0 : G.prompts)) throw new Error(`Server does not support prompts (required for ${I})`);
        break;
      case "resources/list":
      case "resources/templates/list":
      case "resources/read":
      case "resources/subscribe":
      case "resources/unsubscribe":
        if (!((Z = this._serverCapabilities) === null || Z === void 0 ? void 0 : Z.resources)) throw new Error(`Server does not support resources (required for ${I})`);
        if (I === "resources/subscribe" && !this._serverCapabilities.resources.subscribe) throw new Error(`Server does not support resource subscriptions (required for ${I})`);
        break;
      case "tools/call":
      case "tools/list":
        if (!((C = this._serverCapabilities) === null || C === void 0 ? void 0 : C.tools)) throw new Error(`Server does not support tools (required for ${I})`);
        break;
      case "completion/complete":
        if (!((W = this._serverCapabilities) === null || W === void 0 ? void 0 : W.prompts)) throw new Error(`Server does not support prompts (required for ${I})`);
        break;
      case "initialize":
        break;
      case "ping":
        break
    }
  }
  assertNotificationCapability(I) {
    var d;
    switch (I) {
      case "notifications/roots/list_changed":
        if (!((d = this._capabilities.roots) === null || d === void 0 ? void 0 : d.listChanged)) throw new Error(`Client does not support roots list changed notifications (required for ${I})`);
        break;
      case "notifications/initialized":
        break;
      case "notifications/cancelled":
        break;
      case "notifications/progress":
        break
    }
  }
  assertRequestHandlerCapability(I) {
    switch (I) {
      case "sampling/createMessage":
        if (!this._capabilities.sampling) throw new Error(`Client does not support sampling capability (required for ${I})`);
        break;
      case "roots/list":
        if (!this._capabilities.roots) throw new Error(`Client does not support roots capability (required for ${I})`);
        break;
      case "ping":
        break
    }
  }
  async ping(I) {
    return this.request({
      method: "ping"
    }, HX, I)
  }
  async complete(I, d) {
    return this.request({
      method: "completion/complete",
      params: I
    }, tJ1, d)
  }
  async setLoggingLevel(I, d) {
    return this.request({
      method: "logging/setLevel",
      params: {
        level: I
      }
    }, HX, d)
  }
  async getPrompt(I, d) {
    return this.request({
      method: "prompts/get",
      params: I
    }, aJ1, d)
  }
  async listPrompts(I, d) {
    return this.request({
      method: "prompts/list",
      params: I
    }, Du, d)
  }
  async listResources(I, d) {
    return this.request({
      method: "resources/list",
      params: I
    }, iJ1, d)
  }
  async listResourceTemplates(I, d) {
    return this.request({
      method: "resources/templates/list",
      params: I
    }, nJ1, d)
  }
  async readResource(I, d) {
    return this.request({
      method: "resources/read",
      params: I
    }, rJ1, d)
  }
  async subscribeResource(I, d) {
    return this.request({
      method: "resources/subscribe",
      params: I
    }, HX, d)
  }
  async unsubscribeResource(I, d) {
    return this.request({
      method: "resources/unsubscribe",
      params: I
    }, HX, d)
  }
  async callTool(I, d = IU, G) {
    return this.request({
      method: "tools/call",
      params: I
    }, d, G)
  }
  async listTools(I, d) {
    return this.request({
      method: "tools/list",
      params: I
    }, Hu, d)
  }
  async sendRootsListChanged() {
    return this.notification({
      method: "notifications/roots/list_changed"
    })
  }
}
// @from(Start 6226849, End 6227232)
class Ju {
  append(I) {
    this._buffer = this._buffer ? Buffer.concat([this._buffer, I]) : I
  }
  readMessage() {
    if (!this._buffer) return null;
    let I = this._buffer.indexOf(`
`);
    if (I === -1) return null;
    let d = this._buffer.toString("utf8", 0, I);
    return this._buffer = this._buffer.subarray(I + 1), Aw9(d)
  }
  clear() {
    this._buffer = void 0
  }
}
// @from(Start 6227234, End 6227286)
function Aw9(I) {
  return Wo.parse(JSON.parse(I))
}
// @from(Start 6227288, End 6227339)
function Ho(I) {
  return JSON.stringify(I) + `
`
}
// @from(Start 6227344, End 6227581)
Xw9 = Fo.platform === "win32" ? ["APPDATA", "HOMEDRIVE", "HOMEPATH", "LOCALAPPDATA", "PATH", "PROCESSOR_ARCHITECTURE", "SYSTEMDRIVE", "SYSTEMROOT", "TEMP", "USERNAME", "USERPROFILE"] : ["HOME", "LOGNAME", "PATH", "SHELL", "TERM", "USER"]
// @from(Start 6227584, End 6227760)
function Yw9() {
  let I = {};
  for (let d of Xw9) {
    let G = Fo.env[d];
    if (G === void 0) continue;
    if (G.startsWith("()")) continue;
    I[d] = G
  }
  return I
}
// @from(Start 6227761, End 6230412)
class GK1 {
  constructor(I) {
    this._abortController = new AbortController, this._readBuffer = new Ju, this._serverParams = I
  }
  async start() {
    if (this._process) throw new Error("StdioClientTransport already started! If using Client class, note that connect() calls start() automatically.");
    return new Promise((I, d) => {
      var G, Z, C, W, w, B;
      this._process = Vw9(this._serverParams.command, (G = this._serverParams.args) !== null && G !== void 0 ? G : [], {
        env: (Z = this._serverParams.env) !== null && Z !== void 0 ? Z : Yw9(),
        stdio: ["pipe", "pipe", (C = this._serverParams.stderr) !== null && C !== void 0 ? C : "inherit"],
        shell: !1,
        signal: this._abortController.signal,
        windowsHide: Fo.platform === "win32" && _w9()
      }), this._process.on("error", (A) => {
        var V, X;
        if (A.name === "AbortError") {
          (V = this.onclose) === null || V === void 0 || V.call(this);
          return
        }
        d(A), (X = this.onerror) === null || X === void 0 || X.call(this, A)
      }), this._process.on("spawn", () => {
        I()
      }), this._process.on("close", (A) => {
        var V;
        this._process = void 0, (V = this.onclose) === null || V === void 0 || V.call(this)
      }), (W = this._process.stdin) === null || W === void 0 || W.on("error", (A) => {
        var V;
        (V = this.onerror) === null || V === void 0 || V.call(this, A)
      }), (w = this._process.stdout) === null || w === void 0 || w.on("data", (A) => {
        this._readBuffer.append(A), this.processReadBuffer()
      }), (B = this._process.stdout) === null || B === void 0 || B.on("error", (A) => {
        var V;
        (V = this.onerror) === null || V === void 0 || V.call(this, A)
      })
    })
  }
  get stderr() {
    var I, d;
    return (d = (I = this._process) === null || I === void 0 ? void 0 : I.stderr) !== null && d !== void 0 ? d : null
  }
  processReadBuffer() {
    var I, d;
    while (!0) try {
      let G = this._readBuffer.readMessage();
      if (G === null) break;
      (I = this.onmessage) === null || I === void 0 || I.call(this, G)
    } catch (G) {
      (d = this.onerror) === null || d === void 0 || d.call(this, G)
    }
  }
  async close() {
    this._abortController.abort(), this._process = void 0, this._readBuffer.clear()
  }
  send(I) {
    return new Promise((d) => {
      var G;
      if (!((G = this._process) === null || G === void 0 ? void 0 : G.stdin)) throw new Error("Not connected");
      let Z = Ho(I);
      if (this._process.stdin.write(Z)) d();
      else this._process.stdin.once("drain", d)
    })
  }
}
// @from(Start 6230414, End 6230454)
function _w9() {
  return "type" in Fo
}
// @from(Start 6230459, End 6230486)
Dw9 = Object.defineProperty
// @from(Start 6230490, End 6230620)
Hw9 = (I, d, G) => (d in I) ? Dw9(I, d, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: G
  }) : I[d] = G
// @from(Start 6230624, End 6230686)
go = (I, d, G) => Hw9(I, typeof d != "symbol" ? d + "" : d, G)
// @from(Start 6230688, End 6230938)
class CK1 extends Error {
  constructor(I, d) {
    super(I), go(this, "type"), go(this, "field"), go(this, "value"), go(this, "line"), this.name = "ParseError", this.type = d.type, this.field = d.field, this.value = d.value, this.line = d.line
  }
}
// @from(Start 6230940, End 6230958)
function ZK1(I) {}
// @from(Start 6230960, End 6232595)
function sz2(I) {
  let {
    onEvent: d = ZK1,
    onError: G = ZK1,
    onRetry: Z = ZK1,
    onComment: C
  } = I, W = "", w = !0, B, A = "", V = "";

  function X(K) {
    let Q = w ? K.replace(/^\xEF\xBB\xBF/, "") : K,
      [E, S] = Fw9(`${W}${Q}`);
    for (let P of E) _(P);
    W = S, w = !1
  }

  function _(K) {
    if (K === "") {
      g();
      return
    }
    if (K.startsWith(":")) {
      C && C(K.slice(K.startsWith(": ") ? 2 : 1));
      return
    }
    let Q = K.indexOf(":");
    if (Q !== -1) {
      let E = K.slice(0, Q),
        S = K[Q + 1] === " " ? 2 : 1,
        P = K.slice(Q + S);
      F(E, P, K);
      return
    }
    F(K, "", K)
  }

  function F(K, Q, E) {
    switch (K) {
      case "event":
        V = Q;
        break;
      case "data":
        A = `${A}${Q}
`;
        break;
      case "id":
        B = Q.includes("\x00") ? void 0 : Q;
        break;
      case "retry":
        /^\d+$/.test(Q) ? Z(parseInt(Q, 10)) : G(new CK1(`Invalid \`retry\` value: "${Q}"`, {
          type: "invalid-retry",
          value: Q,
          line: E
        }));
        break;
      default:
        G(new CK1(`Unknown field "${K.length>20?`${K.slice(0,20)}…`:K}"`, {
          type: "unknown-field",
          field: K,
          value: Q,
          line: E
        }));
        break
    }
  }

  function g() {
    A.length > 0 && d({
      id: B,
      event: V || void 0,
      data: A.endsWith(`
`) ? A.slice(0, -1) : A
    }), B = void 0, A = "", V = ""
  }

  function J(K = {}) {
    W && K.consume && _(W), B = void 0, A = "", V = "", W = ""
  }
  return {
    feed: X,
    reset: J
  }
}
// @from(Start 6232597, End 6232849)
function Fw9(I) {
  let d = [],
    G = "",
    Z = I.length;
  for (let C = 0; C < Z; C++) {
    let W = I[C];
    W === "\r" && I[C + 1] === `
` ? (d.push(G), G = "", C++) : W === "\r" || W === `
` ? (d.push(G), G = "") : G += W
  }
  return [d, G]
}
// @from(Start 6232850, End 6232876)
class WK1 extends Event {}
// @from(Start 6232878, End 6233011)
function gw9(I) {
  let d = globalThis.DOMException;
  return typeof d == "function" ? new d(I, "SyntaxError") : new SyntaxError(I)
}
// @from(Start 6233016, End 6233057)
ez2 = (I) => {
    throw TypeError(I)
  }
// @from(Start 6233061, End 6233110)
DK1 = (I, d, G) => d.has(I) || ez2("Cannot " + G)
// @from(Start 6233114, End 6233196)
t4 = (I, d, G) => (DK1(I, d, "read from private field"), G ? G.call(I) : d.get(I))
// @from(Start 6233200, End 6233333)
o6 = (I, d, G) => d.has(I) ? ez2("Cannot add the same private member more than once") : d instanceof WeakSet ? d.add(I) : d.set(I, G)
// @from(Start 6233337, End 6233411)
V3 = (I, d, G, Z) => (DK1(I, d, "write to private field"), d.set(I, G), G)
// @from(Start 6233415, End 6233472)
FX = (I, d, G) => (DK1(I, d, "access private method"), G)
// @from(Start 6233476, End 6233478)
Jd
// @from(Start 6233480, End 6233482)
wK
// @from(Start 6233484, End 6233486)
dU
// @from(Start 6233488, End 6233490)
Jo
// @from(Start 6233492, End 6233494)
Ko
// @from(Start 6233496, End 6233498)
zu
// @from(Start 6233500, End 6233502)
CU
// @from(Start 6233504, End 6233506)
Qu
// @from(Start 6233508, End 6233510)
KH
// @from(Start 6233512, End 6233514)
GU
// @from(Start 6233516, End 6233518)
WU
// @from(Start 6233520, End 6233522)
ZU
// @from(Start 6233524, End 6233526)
Ku
// @from(Start 6233528, End 6233530)
RW
// @from(Start 6233532, End 6233535)
wK1
// @from(Start 6233537, End 6233540)
BK1
// @from(Start 6233542, End 6233545)
AK1
// @from(Start 6233547, End 6233550)
oz2
// @from(Start 6233552, End 6233555)
VK1
// @from(Start 6233557, End 6233560)
XK1
// @from(Start 6233562, End 6233564)
Nu
// @from(Start 6233566, End 6233569)
YK1
// @from(Start 6233571, End 6233574)
_K1
// @from(Start 6233576, End 6237394)
class wU extends EventTarget {
  constructor(I, d) {
    var G, Z;
    super(), o6(this, RW), this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2, o6(this, Jd), o6(this, wK), o6(this, dU), o6(this, Jo), o6(this, Ko), o6(this, zu), o6(this, CU), o6(this, Qu, null), o6(this, KH), o6(this, GU), o6(this, WU, null), o6(this, ZU, null), o6(this, Ku, null), o6(this, BK1, async (C) => {
      var W;
      t4(this, GU).reset();
      let {
        body: w,
        redirected: B,
        status: A,
        headers: V
      } = C;
      if (A === 204) {
        FX(this, RW, Nu).call(this, "Server sent HTTP 204, not reconnecting", 204), this.close();
        return
      }
      if (B ? V3(this, dU, new URL(C.url)) : V3(this, dU, void 0), A !== 200) {
        FX(this, RW, Nu).call(this, `Non-200 status code (${A})`, A);
        return
      }
      if (!(V.get("content-type") || "").startsWith("text/event-stream")) {
        FX(this, RW, Nu).call(this, 'Invalid content type, expected "text/event-stream"', A);
        return
      }
      if (t4(this, Jd) === this.CLOSED) return;
      V3(this, Jd, this.OPEN);
      let X = new Event("open");
      if ((W = t4(this, Ku)) == null || W.call(this, X), this.dispatchEvent(X), typeof w != "object" || !w || !("getReader" in w)) {
        FX(this, RW, Nu).call(this, "Invalid response body, expected a web ReadableStream", A), this.close();
        return
      }
      let _ = new TextDecoder,
        F = w.getReader(),
        g = !0;
      do {
        let {
          done: J,
          value: K
        } = await F.read();
        K && t4(this, GU).feed(_.decode(K, {
          stream: !J
        })), J && (g = !1, t4(this, GU).reset(), FX(this, RW, YK1).call(this))
      } while (g)
    }), o6(this, AK1, (C) => {
      V3(this, KH, void 0), !(C.name === "AbortError" || C.type === "aborted") && FX(this, RW, YK1).call(this)
    }), o6(this, VK1, (C) => {
      typeof C.id == "string" && V3(this, Qu, C.id);
      let W = new MessageEvent(C.event || "message", {
        data: C.data,
        origin: t4(this, dU) ? t4(this, dU).origin : t4(this, wK).origin,
        lastEventId: C.id || ""
      });
      t4(this, ZU) && (!C.event || C.event === "message") && t4(this, ZU).call(this, W), this.dispatchEvent(W)
    }), o6(this, XK1, (C) => {
      V3(this, zu, C)
    }), o6(this, _K1, () => {
      V3(this, CU, void 0), t4(this, Jd) === this.CONNECTING && FX(this, RW, wK1).call(this)
    });
    try {
      if (I instanceof URL) V3(this, wK, I);
      else if (typeof I == "string") V3(this, wK, new URL(I, Jw9()));
      else throw new Error("Invalid URL")
    } catch {
      throw gw9("An invalid or illegal string was specified")
    }
    V3(this, GU, sz2({
      onEvent: t4(this, VK1),
      onRetry: t4(this, XK1)
    })), V3(this, Jd, this.CONNECTING), V3(this, zu, 3000), V3(this, Ko, (G = d == null ? void 0 : d.fetch) != null ? G : globalThis.fetch), V3(this, Jo, (Z = d == null ? void 0 : d.withCredentials) != null ? Z : !1), FX(this, RW, wK1).call(this)
  }
  get readyState() {
    return t4(this, Jd)
  }
  get url() {
    return t4(this, wK).href
  }
  get withCredentials() {
    return t4(this, Jo)
  }
  get onerror() {
    return t4(this, WU)
  }
  set onerror(I) {
    V3(this, WU, I)
  }
  get onmessage() {
    return t4(this, ZU)
  }
  set onmessage(I) {
    V3(this, ZU, I)
  }
  get onopen() {
    return t4(this, Ku)
  }
  set onopen(I) {
    V3(this, Ku, I)
  }
  addEventListener(I, d, G) {
    let Z = d;
    super.addEventListener(I, Z, G)
  }
  removeEventListener(I, d, G) {
    let Z = d;
    super.removeEventListener(I, Z, G)
  }
  close() {
    t4(this, CU) && clearTimeout(t4(this, CU)), t4(this, Jd) !== this.CLOSED && (t4(this, KH) && t4(this, KH).abort(), V3(this, Jd, this.CLOSED), V3(this, KH, void 0))
  }
}
// @from(Start 6238876, End 6239067)
function Jw9() {
  let I = "document" in globalThis ? globalThis.document : void 0;
  return I && typeof I == "object" && "baseURI" in I && typeof I.baseURI == "string" ? I.baseURI : void 0
}
// @from(Start 6239068, End 6239188)
class tz2 extends Error {
  constructor(I, d, G) {
    super(`SSE error: ${d}`);
    this.code = I, this.event = G
  }
}
// @from(Start 6239189, End 6241782)
class HK1 {
  constructor(I, d) {
    this._url = I, this._eventSourceInit = d === null || d === void 0 ? void 0 : d.eventSourceInit, this._requestInit = d === null || d === void 0 ? void 0 : d.requestInit
  }
  start() {
    if (this._eventSource) throw new Error("SSEClientTransport already started! If using Client class, note that connect() calls start() automatically.");
    return new Promise((I, d) => {
      this._eventSource = new wU(this._url.href, this._eventSourceInit), this._abortController = new AbortController, this._eventSource.onerror = (G) => {
        var Z;
        let C = new tz2(G.code, G.message, G);
        d(C), (Z = this.onerror) === null || Z === void 0 || Z.call(this, C)
      }, this._eventSource.onopen = () => {}, this._eventSource.addEventListener("endpoint", (G) => {
        var Z;
        let C = G;
        try {
          if (this._endpoint = new URL(C.data, this._url), this._endpoint.origin !== this._url.origin) throw new Error(`Endpoint origin does not match connection origin: ${this._endpoint.origin}`)
        } catch (W) {
          d(W), (Z = this.onerror) === null || Z === void 0 || Z.call(this, W), this.close();
          return
        }
        I()
      }), this._eventSource.onmessage = (G) => {
        var Z, C;
        let W = G,
          w;
        try {
          w = Wo.parse(JSON.parse(W.data))
        } catch (B) {
          (Z = this.onerror) === null || Z === void 0 || Z.call(this, B);
          return
        }(C = this.onmessage) === null || C === void 0 || C.call(this, w)
      }
    })
  }
  async close() {
    var I, d, G;
    (I = this._abortController) === null || I === void 0 || I.abort(), (d = this._eventSource) === null || d === void 0 || d.close(), (G = this.onclose) === null || G === void 0 || G.call(this)
  }
  async send(I) {
    var d, G, Z;
    if (!this._endpoint) throw new Error("Not connected");
    try {
      let C = new Headers((d = this._requestInit) === null || d === void 0 ? void 0 : d.headers);
      C.set("content-type", "application/json");
      let W = {
          ...this._requestInit,
          method: "POST",
          headers: C,
          body: JSON.stringify(I),
          signal: (G = this._abortController) === null || G === void 0 ? void 0 : G.signal
        },
        w = await fetch(this._endpoint, W);
      if (!w.ok) {
        let B = await w.text().catch(() => null);
        throw new Error(`Error POSTing to endpoint (HTTP ${w.status}): ${B}`)
      }
    } catch (C) {
      throw (Z = this.onerror) === null || Z === void 0 || Z.call(this, C), C
    }
  }
}
// @from(Start 6241787, End 6241803)
i9 = J1(u1(), 1)
// @from(Start 6241809, End 6241817)
IQ2 = ""
// @from(Start 6241821, End 6241829)
dQ2 = ""
// @from(Start 6241835, End 6241867)
Kw9 = s.object({}).passthrough()
// @from(Start 6241871, End 6243732)
GQ2 = {
    async isEnabled() {
      return !0
    },
    isReadOnly() {
      return !1
    },
    name: "mcp",
    async description() {
      return dQ2
    },
    async prompt() {
      return IQ2
    },
    inputSchema: Kw9,
    async * call() {
      yield {
        type: "result",
        data: "",
        resultForAssistant: ""
      }
    },
    needsPermissions() {
      return !0
    },
    renderToolUseMessage(I) {
      return Object.entries(I).map(([d, G]) => `${d}: ${JSON.stringify(G)}`).join(", ")
    },
    userFacingName: () => "mcp",
    renderToolUseRejectedMessage() {
      return i9.createElement(A3, null)
    },
    renderToolResultMessage(I, {
      verbose: d
    }) {
      if (Array.isArray(I)) return i9.createElement(p, {
        flexDirection: "column"
      }, I.map((Z, C) => {
        if (Z.type === "image") return i9.createElement(p, {
          key: C,
          justifyContent: "space-between",
          overflowX: "hidden",
          width: "100%"
        }, i9.createElement(p, {
          flexDirection: "row"
        }, i9.createElement(u, null, "  ⎿  "), i9.createElement(u, null, "[Image]")));
        let W = Z.text.split(`
`).length;
        return i9.createElement(pR, {
          key: C,
          content: Z.text,
          lines: W,
          verbose: d
        })
      }));
      if (!I) return i9.createElement(p, {
        justifyContent: "space-between",
        overflowX: "hidden",
        width: "100%"
      }, i9.createElement(p, {
        flexDirection: "row"
      }, i9.createElement(u, null, "  ⎿  "), i9.createElement(u, {
        color: r1().secondaryText
      }, "(No content)")));
      let G = I.split(`
`).length;
      return i9.createElement(pR, {
        content: I,
        lines: G,
        verbose: d
      })
    },
    renderResultForAssistant(I) {
      return I
    }
  }
// @from(Start 6243735, End 6244045)
function BQ2(I) {
  let d = {};
  if (I)
    for (let G of I) {
      let [Z, ...C] = G.split("=");
      if (!Z || C.length === 0) throw new Error(`Invalid environment variable format: ${G}, environment variables should be added as: -e KEY1=value1 -e KEY2=value2`);
      d[Z] = C.join("=")
    }
  return d
}
// @from(Start 6244050, End 6244077)
Nw9 = ["project", "global"]
// @from(Start 6244080, End 6244248)
function FK1(I) {
  if (!I) return "project";
  let d = Nw9;
  if (!d.includes(I)) throw new Error(`Invalid scope: ${I}. Must be one of: ${d.join(", ")}`);
  return I
}
// @from(Start 6244250, End 6244871)
function AQ2(I, d, G = "project") {
  if (G === "mcprc") {
    let Z = wQ2(R0(), ".mcprc"),
      C = {};
    if (ZQ2(Z)) try {
      let W = CQ2(Z, "utf-8"),
        w = tG(W);
      if (w && typeof w === "object") C = w
    } catch {}
    C[I] = d;
    try {
      WQ2(Z, JSON.stringify(C, null, 2), "utf-8")
    } catch (W) {
      throw new Error(`Failed to write to .mcprc: ${W}`)
    }
  } else if (G === "global") {
    let Z = q2();
    if (!Z.mcpServers) Z.mcpServers = {};
    Z.mcpServers[I] = d, p4(Z)
  } else {
    let Z = I5();
    if (!Z.mcpServers) Z.mcpServers = {};
    Z.mcpServers[I] = d, o9(Z)
  }
}
// @from(Start 6244873, End 6245730)
function VQ2(I, d = "project") {
  if (d === "mcprc") {
    let G = wQ2(R0(), ".mcprc");
    if (!ZQ2(G)) throw new Error("No .mcprc file found in this directory");
    try {
      let Z = CQ2(G, "utf-8"),
        C = tG(Z);
      if (!C || typeof C !== "object" || !C[I]) throw new Error(`No MCP server found with name: ${I} in .mcprc`);
      delete C[I], WQ2(G, JSON.stringify(C, null, 2), "utf-8")
    } catch (Z) {
      if (Z instanceof Error) throw Z;
      throw new Error(`Failed to remove from .mcprc: ${Z}`)
    }
  } else if (d === "global") {
    let G = q2();
    if (!G.mcpServers?.[I]) throw new Error(`No global MCP server found with name: ${I}`);
    delete G.mcpServers[I], p4(G)
  } else {
    let G = I5();
    if (!G.mcpServers?.[I]) throw new Error(`No local MCP server found with name: ${I}`);
    delete G.mcpServers[I], o9(G)
  }
}
// @from(Start 6245732, End 6245878)
function XQ2() {
  let I = q2(),
    d = OE(),
    G = I5();
  return {
    ...I.mcpServers ?? {},
    ...d ?? {},
    ...G.mcpServers ?? {}
  }
}
// @from(Start 6245880, End 6246179)
function YQ2(I) {
  let d = I5(),
    G = OE(),
    Z = q2();
  if (d.mcpServers?.[I]) return {
    ...d.mcpServers[I],
    scope: "project"
  };
  if (G?.[I]) return {
    ...G[I],
    scope: "mcprc"
  };
  if (Z.mcpServers?.[I]) return {
    ...Z.mcpServers[I],
    scope: "global"
  };
  return
}
// @from(Start 6246180, End 6246951)
async function zw9(I, d) {
  let G = d.type === "sse" ? new HK1(new URL(d.url)) : new GK1({
      command: d.command,
      args: d.args,
      env: {
        ...process.env,
        ...d.env
      },
      stderr: "pipe"
    }),
    Z = new dK1({
      name: "claude",
      version: "0.1.0"
    }, {
      capabilities: {}
    }),
    C = 5000,
    W = Z.connect(G),
    w = new Promise((B, A) => {
      let V = setTimeout(() => {
        A(new Error(`Connection to MCP server "${I}" timed out after 5000ms`))
      }, 5000);
      W.then(() => clearTimeout(V), () => clearTimeout(V))
    });
  if (await Promise.race([W, w]), d.type === "stdio") G.stderr?.on("data", (B) => {
    let A = B.toString().trim();
    if (A) wz(I, `Server stderr: ${A}`)
  });
  return Z
}
// @from(Start 6246953, End 6247131)
function _Q2(I) {
  let d = I5();
  if (d.approvedMcprcServers?.includes(I)) return "approved";
  if (d.rejectedMcprcServers?.includes(I)) return "rejected";
  return "pending"
}
// @from(Start 6247136, End 6247827)
gK1 = a2(async () => {
  if (process.env.CI) return [];
  let I = q2().mcpServers ?? {},
    d = OE(),
    G = I5().mcpServers ?? {},
    Z = r01(d, (W, w) => _Q2(w) === "approved"),
    C = {
      ...I,
      ...Z,
      ...G
    };
  return await Promise.all(Object.entries(C).map(async ([W, w]) => {
    try {
      let B = await zw9(W, w);
      return I0("tengu_mcp_server_connection_succeeded", {}), {
        name: W,
        client: B,
        type: "connected"
      }
    } catch (B) {
      return I0("tengu_mcp_server_connection_failed", {}), wz(W, `Connection failed: ${B instanceof Error?B.message:String(B)}`), {
        name: W,
        type: "failed"
      }
    }
  }))
})
// @from(Start 6247829, End 6248408)
async function DQ2(I, d, G) {
  let Z = await gK1();
  return (await Promise.allSettled(Z.map(async (W) => {
    if (W.type === "failed") return null;
    try {
      if (!(await W.client.getServerCapabilities())?.[G]) return null;
      return {
        client: W,
        result: await W.client.request(I, d)
      }
    } catch (w) {
      if (W.type === "connected") wz(W.name, `Failed to request '${I.method}': ${w instanceof Error?w.message:String(w)}`);
      return null
    }
  }))).filter((W) => W.status === "fulfilled").map((W) => W.value).filter((W) => W !== null)
}
// @from(Start 6248413, End 6249100)
HQ2 = a2(async () => {
  return (await DQ2({
    method: "tools/list"
  }, Hu, "tools")).flatMap(({
    client: d,
    result: {
      tools: G
    }
  }) => G.map((Z) => ({
    ...GQ2,
    name: "mcp__" + d.name + "__" + Z.name,
    async description() {
      return Z.description ?? ""
    },
    async prompt() {
      return Z.description ?? ""
    },
    inputJSONSchema: Z.inputSchema,
    async * call(C) {
      let W = await Qw9({
        client: d,
        tool: Z.name,
        args: C
      });
      yield {
        type: "result",
        data: W,
        resultForAssistant: W
      }
    },
    userFacingName() {
      return `${d.name}:${Z.name} (MCP)`
    }
  })))
})
// @from(Start 6249102, End 6249770)
async function Qw9({
  client: {
    client: I,
    name: d
  },
  tool: G,
  args: Z
}) {
  let C = await I.callTool({
    name: G,
    arguments: Z
  }, IU);
  if ("isError" in C && C.isError) {
    let W = `Error calling tool ${G}: ${C.error}`;
    throw wz(d, W), Error(W)
  }
  if ("toolResult" in C) return String(C.toolResult);
  if ("content" in C && Array.isArray(C.content)) return C.content.map((W) => {
    if (W.type === "image") return {
      type: "image",
      source: {
        type: "base64",
        data: String(W.data),
        media_type: W.mimeType
      }
    };
    return W
  });
  throw Error(`Unexpected response format from tool ${G}`)
}
// @from(Start 6249775, End 6250479)
FQ2 = a2(async () => {
  return (await DQ2({
    method: "prompts/list"
  }, Du, "prompts")).flatMap(({
    client: d,
    result: G
  }) => G.prompts?.map((Z) => {
    let C = Object.values(Z.arguments ?? {}).map((W) => W.name);
    return {
      type: "prompt",
      name: "mcp__" + d.name + "__" + Z.name,
      description: Z.description ?? "",
      isEnabled: !0,
      isHidden: !1,
      progressMessage: "running",
      userFacingName() {
        return `${d.name}:${Z.name} (MCP)`
      },
      argNames: C,
      async getPromptForCommand(W) {
        let w = W.split(" ");
        return await fw9({
          name: Z.name,
          client: d
        }, s01(C, w))
      }
    }
  }))
})
// @from(Start 6250481, End 6251069)
async function fw9({
  name: I,
  client: d
}, G) {
  try {
    return (await d.client.getPrompt({
      name: I,
      arguments: G
    })).messages.map((C) => ({
      role: C.role,
      content: [C.content.type === "text" ? {
        type: "text",
        text: C.content.text
      } : {
        type: "image",
        source: {
          data: String(C.content.data),
          media_type: C.content.mimeType,
          type: "base64"
        }
      }]
    }))
  } catch (Z) {
    throw wz(d.name, `Error running command '${I}': ${Z instanceof Error?Z.message:String(Z)}`), Z
  }
}
// @from(Start 6251074, End 6251189)
qw9 = a2(() => [CN2, WN2, BN2, AN2, qz2, Uz2, vz2, bz2, hz2, jz2, eK2, ts, NQ, ...as() ? [lz2, mz2()] : [], ...[]])
// @from(Start 6251193, End 6251285)
gQ2 = a2(async () => {
    return [...await FQ2(), ...qw9()].filter((I) => I.isEnabled)
  })
// @from(Start 6251288, End 6251385)
function JQ2(I, d) {
  return d.some((G) => G.userFacingName() === I || G.aliases?.includes(I))
}
// @from(Start 6251387, End 6251689)
function No(I, d) {
  let G = d.find((Z) => Z.userFacingName() === I || Z.aliases?.includes(I));
  if (!G) throw ReferenceError(`Command ${I} not found. Available commands: ${d.map((Z)=>{let C=Z.userFacingName();return Z.aliases?`${C} (aliases: ${Z.aliases.join(", ")})`:C}).join(", ")}`);
  return G
}
// @from(Start 6251735, End 6251751)
BK = J1(u1(), 1)
// @from(Start 6251757, End 6251773)
gX = J1(u1(), 1)
// @from(Start 6251776, End 6252155)
function zo({
  param: {
    text: I
  },
  addMargin: d
}) {
  let G = XG(I, "bash-input");
  if (!G) return null;
  return gX.createElement(p, {
    flexDirection: "column",
    marginTop: d ? 1 : 0,
    width: "100%"
  }, gX.createElement(p, null, gX.createElement(u, {
    color: r1().bashBorder
  }, "!"), gX.createElement(u, {
    color: r1().secondaryText
  }, " ", G)))
}
// @from(Start 6252160, End 6252196)
KW = "[Request interrupted by user]"
// @from(Start 6252200, End 6252249)
_X = "[Request interrupted by user for tool use]"
// @from(Start 6252253, End 6252386)
BU = "The user doesn't want to take this action right now. STOP what you are doing and wait for the user to tell you how to proceed."
// @from(Start 6252390, End 6252622)
fu = "The user doesn't want to proceed with this tool use. The tool use was rejected (eg. if it was a file edit, the new_string was NOT written to the file). STOP what you are doing and wait for the user to tell you how to proceed."
// @from(Start 6252626, End 6252655)
Xu = "No response requested."
// @from(Start 6252659, End 6252694)
nC2 = new Set([KW, _X, BU, fu, Xu])
// @from(Start 6252697, End 6253159)
function KQ2(I, d) {
  return {
    type: "assistant",
    costUSD: 0,
    durationMs: 0,
    uuid: AK(),
    message: {
      id: AK(),
      model: "<synthetic>",
      role: "assistant",
      stop_reason: "stop_sequence",
      stop_sequence: "",
      type: "message",
      usage: {
        input_tokens: 0,
        output_tokens: 0,
        cache_creation_input_tokens: 0,
        cache_read_input_tokens: 0
      },
      content: I
    },
    ...d
  }
}
// @from(Start 6253161, End 6253266)
function q8(I) {
  return KQ2([{
    type: "text",
    text: I === "" ? FH : I,
    citations: []
  }])
}
// @from(Start 6253268, End 6253406)
function nR(I) {
  return KQ2([{
    type: "text",
    text: I === "" ? FH : I,
    citations: []
  }], {
    isApiErrorMessage: !0
  })
}
// @from(Start 6253408, End 6253558)
function p9(I, d) {
  return {
    type: "user",
    message: {
      role: "user",
      content: I
    },
    uuid: AK(),
    toolUseResult: d
  }
}
// @from(Start 6253560, End 6253744)
function NQ2(I, d, G, Z, C) {
  return {
    type: "progress",
    content: G,
    normalizedMessages: Z,
    siblingToolUseIDs: d,
    tools: C,
    toolUseID: I,
    uuid: AK()
  }
}
// @from(Start 6253746, End 6253859)
function zQ2(I) {
  return {
    type: "tool_result",
    content: BU,
    is_error: !0,
    tool_use_id: I
  }
}
// @from(Start 6253860, End 6256280)
async function Qo(I, d, G, Z, C) {
  if (d === "bash") {
    I0("tengu_input_bash", {});
    let W = p9(`<bash-input>${I}</bash-input>`);
    if (I.startsWith("cd ")) {
      let w = R0(),
        B = Rw9(w, I.slice(3));
      try {
        return await Uw(B), [W, q8(`<bash-stdout>Changed directory to ${j0.bold(`${B}/`)}</bash-stdout>`)]
      } catch (A) {
        return X0(A), [W, q8(`<bash-stderr>cwd error: ${A instanceof Error?A.message:String(A)}</bash-stderr>`)]
      }
    }
    G({
      jsx: BK.createElement(p, {
        flexDirection: "column",
        marginTop: 1
      }, BK.createElement(zo, {
        addMargin: !1,
        param: {
          text: `<bash-input>${I}</bash-input>`,
          type: "text"
        }
      }), BK.createElement(ns, null)),
      shouldHidePromptInput: !1
    });
    try {
      let w = await G5.validateInput({
        command: I
      });
      if (!w.result) return [W, q8(w.message)];
      let {
        data: B
      } = await gH(G5.call({
        command: I
      }, Z));
      return [W, q8(`<bash-stdout>${B.stdout}</bash-stdout><bash-stderr>${B.stderr}</bash-stderr>`)]
    } catch (w) {
      return [W, q8(`<bash-stderr>Command failed: ${w instanceof Error?w.message:String(w)}</bash-stderr>`)]
    } finally {
      G(null)
    }
  }
  if (I.startsWith("/")) {
    let W = I.slice(1).split(" "),
      w = W[0];
    if (W.length > 1 && W[1] === "(MCP)") w = w + " (MCP)";
    if (!w) return I0("tengu_input_slash_missing", {
      input: I
    }), [q8("Commands are in the form `/command [args]`")];
    if (!JQ2(w, Z.options.commands)) return I0("tengu_input_prompt", {}), [p9(I)];
    let B = I.slice(w.length + 2),
      A = await Uw9(w, B, G, Z);
    if (A.length === 0) return I0("tengu_input_command", {
      input: I
    }), [];
    if (A.length === 2 && A[0].type === "user" && A[1].type === "assistant" && typeof A[1].message.content === "string" && A[1].message.content.startsWith("Unknown command:")) return I0("tengu_input_slash_invalid", {
      input: I
    }), A;
    if (A.length === 2) return I0("tengu_input_command", {
      input: I
    }), A;
    return I0("tengu_input_command", {
      input: I
    }), A
  }
  if (I0("tengu_input_prompt", {}), C) return [p9([{
    type: "image",
    source: {
      type: "base64",
      media_type: "image/png",
      data: C
    }
  }, {
    type: "text",
    text: I
  }])];
  return [p9(I)]
}
// @from(Start 6256281, End 6258774)
async function Uw9(I, d, G, Z) {
  try {
    let C = No(I, Z.options.commands);
    switch (C.type) {
      case "local-jsx":
        return new Promise((W) => {
          C.call((w) => {
            G(null), W([p9(`<command-name>${C.userFacingName()}</command-name>
          <command-message>${C.userFacingName()}</command-message>
          <command-args>${d}</command-args>`), w ? q8(w) : q8(Xu)])
          }, Z).then((w) => {
            G({
              jsx: w,
              shouldHidePromptInput: !0
            })
          })
        });
      case "local": {
        let W = p9(`<command-name>${C.userFacingName()}</command-name>
        <command-message>${C.userFacingName()}</command-message>
        <command-args>${d}</command-args>`);
        try {
          let w = await C.call(d, Z);
          return [W, q8(`<local-command-stdout>${w}</local-command-stdout>`)]
        } catch (w) {
          return X0(w), [W, q8(`<local-command-stderr>${String(w)}</local-command-stderr>`)]
        }
      }
      case "prompt":
        return (await C.getPromptForCommand(d)).map((w) => {
          if (typeof w.content === "string") return {
            message: {
              role: w.role,
              content: `<command-message>${C.userFacingName()} is ${C.progressMessage}…</command-message>
                    <command-name>${C.userFacingName()}</command-name>
                    <command-args>${d}</command-args>
                    <command-contents>${JSON.stringify(w.content,null,2)}</command-contents>`
            },
            type: "user",
            uuid: AK()
          };
          return {
            message: {
              role: w.role,
              content: w.content.map((B) => {
                switch (B.type) {
                  case "text":
                    return {
                      ...B, text: `
                        <command-message>${C.userFacingName()} is ${C.progressMessage}…</command-message>
                        <command-name>${C.userFacingName()}</command-name>
                        <command-args>${d}</command-args>
                        <command-contents>${JSON.stringify(B,null,2)}</command-contents>
                      `
                    };
                  default:
                    return B
                }
              })
            },
            type: "user",
            uuid: AK()
          }
        })
    }
  } catch (C) {
    if (C instanceof I41) return [q8(C.message)];
    throw C
  }
}
// @from(Start 6258776, End 6259365)
function XG(I, d) {
  if (!I.trim() || !d.trim()) return null;
  let G = d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    Z = new RegExp(`<${G}(?:\\s+[^>]*)?>([\\s\\S]*?)<\\/${G}>`, "gi"),
    C, W = 0,
    w = 0,
    B = new RegExp(`<${G}(?:\\s+[^>]*?)?>`, "gi"),
    A = new RegExp(`<\\/${G}>`, "gi");
  while ((C = Z.exec(I)) !== null) {
    let V = C[1],
      X = I.slice(w, C.index);
    W = 0, B.lastIndex = 0;
    while (B.exec(X) !== null) W++;
    A.lastIndex = 0;
    while (A.exec(X) !== null) W--;
    if (W === 0 && V) return V;
    w = C.index + C[0].length
  }
  return null
}
// @from(Start 6259367, End 6259790)
function fo(I) {
  if (I.type === "progress") return !0;
  if (typeof I.message.content === "string") return I.message.content.trim().length > 0;
  if (I.message.content.length === 0) return !1;
  if (I.message.content.length > 1) return !0;
  if (I.message.content[0].type !== "text") return !0;
  return I.message.content[0].text.trim().length > 0 && I.message.content[0].text !== FH && I.message.content[0].text !== _X
}
// @from(Start 6259792, End 6260320)
function QW(I) {
  return I.flatMap((d) => {
    if (d.type === "progress") return [d];
    if (typeof d.message.content === "string") return [d];
    return d.message.content.map((G) => {
      switch (d.type) {
        case "assistant":
          return {
            type: "assistant", uuid: AK(), message: {
              ...d.message,
              content: [G]
            }, costUSD: d.costUSD / d.message.content.length, durationMs: d.durationMs
          };
        case "user":
          return d
      }
    })
  })
}
// @from(Start 6260322, End 6260447)
function vw9(I) {
  return I.type === "assistant" && "costUSD" in I && I.message.content.some((d) => d.type === "tool_use")
}
// @from(Start 6260449, End 6261380)
function QQ2(I) {
  let d = [],
    G = [];
  for (let Z of I) {
    if (vw9(Z)) G.push(Z);
    if (Z.type === "progress") {
      let C = d.find((w) => w.type === "progress" && w.toolUseID === Z.toolUseID);
      if (C) {
        d[d.indexOf(C)] = Z;
        continue
      }
      let W = G.find((w) => w.message.content[0]?.id === Z.toolUseID);
      if (W) {
        d.splice(d.indexOf(W) + 1, 0, Z);
        continue
      }
    }
    if (Z.type === "user" && Array.isArray(Z.message.content) && Z.message.content[0]?.type === "tool_result") {
      let C = Z.message.content[0]?.tool_use_id,
        W = d.find((B) => B.type === "progress" && B.toolUseID === C);
      if (W) {
        d.splice(d.indexOf(W) + 1, 0, Z);
        continue
      }
      let w = G.find((B) => B.message.content[0]?.id === C);
      if (w) {
        d.splice(d.indexOf(w) + 1, 0, Z);
        continue
      }
    } else d.push(Z)
  }
  return d
}
// @from(Start 6261385, End 6261590)
fQ2 = a2((I) => Object.fromEntries(I.flatMap((d) => d.type === "user" && d.message.content[0]?.type === "tool_result" ? [
  [d.message.content[0].tool_use_id, d.message.content[0].is_error ?? !1]
] : [])))
// @from(Start 6261593, End 6261840)
function Io(I) {
  let d = fQ2(I);
  return new Set(I.filter((G) => G.type === "assistant" && Array.isArray(G.message.content) && G.message.content[0]?.type === "tool_use" && !(G.message.content[0]?.id in d)).map((G) => G.message.content[0].id))
}
// @from(Start 6261842, End 6262283)
function qQ2(I) {
  let d = Io(I),
    G = new Set(I.filter((Z) => Z.type === "progress").map((Z) => Z.toolUseID));
  return new Set(I.filter((Z) => {
    if (Z.type !== "assistant") return !1;
    if (Z.message.content[0]?.type !== "tool_use") return !1;
    let C = Z.message.content[0].id;
    if (C === d.values().next().value) return !0;
    if (G.has(C) && d.has(C)) return !0;
    return !1
  }).map((Z) => Z.message.content[0].id))
}
// @from(Start 6262285, End 6262518)
function RQ2(I) {
  let d = fQ2(I);
  return I.filter((G) => G.type === "assistant" && Array.isArray(G.message.content) && G.message.content[0]?.type === "tool_use" && (G.message.content[0]?.id in d) && d[G.message.content[0]?.id])
}
// @from(Start 6262520, End 6263281)
function sR(I) {
  let d = [];
  return I.filter((G) => G.type !== "progress").forEach((G) => {
    switch (G.type) {
      case "user": {
        if (!Array.isArray(G.message.content) || G.message.content[0]?.type !== "tool_result") {
          d.push(G);
          return
        }
        let Z = lA(d);
        if (!Z || Z?.type === "assistant" || !Array.isArray(Z.message.content) || Z.message.content[0]?.type !== "tool_result") {
          d.push(G);
          return
        }
        d[d.indexOf(Z)] = {
          ...Z,
          message: {
            ...Z.message,
            content: [...Z.message.content, ...G.message.content]
          }
        };
        return
      }
      case "assistant":
        d.push(G);
        return
    }
  }), d
}
// @from(Start 6263283, End 6263474)
function hs(I) {
  let d = I.filter((G) => G.type !== "text" || G.text.trim().length > 0);
  if (d.length === 0) return [{
    type: "text",
    text: FH,
    citations: []
  }];
  return d
}
// @from(Start 6263476, End 6263543)
function qo(I) {
  return JK1(I).trim() === "" || I.trim() === FH
}
// @from(Start 6263548, End 6263620)
Ew9 = ["commit_analysis", "context", "function_analysis", "pr_analysis"]
// @from(Start 6263623, End 6263738)
function JK1(I) {
  let d = new RegExp(`<(${Ew9.join("|")})>.*?</\\1>
?`, "gs");
  return I.replace(d, "").trim()
}
// @from(Start 6263740, End 6264088)
function KK1(I) {
  switch (I.type) {
    case "assistant":
      if (I.message.content[0]?.type !== "tool_use") return null;
      return I.message.content[0].id;
    case "user":
      if (I.message.content[0]?.type !== "tool_result") return null;
      return I.message.content[0].tool_use_id;
    case "progress":
      return I.toolUseID
  }
}
// @from(Start 6264090, End 6264240)
function FG(I) {
  for (let d = I.length - 1; d >= 0; d--) {
    let G = I[d];
    if (G && G.type === "assistant") return G.message.id
  }
  return
}
// @from(Start 6264245, End 6264261)
qu = J1(u1(), 1)
// @from(Start 6264264, End 6264399)
function UQ2() {
  return qu.createElement(u, null, "  ⎿  ", qu.createElement(u, {
    color: r1().error
  }, "Interrupted by user"))
}
// @from(Start 6264404, End 6264420)
UW = J1(u1(), 1)
// @from(Start 6264426, End 6264434)
NK1 = 10
// @from(Start 6264437, End 6264968)
function vQ2({
  param: I,
  verbose: d
}) {
  let G = typeof I.content === "string" ? I.content.trim() : "Error";
  return UW.createElement(p, {
    flexDirection: "row",
    width: "100%"
  }, UW.createElement(u, null, "  ⎿  "), UW.createElement(p, {
    flexDirection: "column"
  }, UW.createElement(u, {
    color: r1().error
  }, d ? G : G.split(`
`).slice(0, NK1).join(`
`) || ""), !d && G.split(`
`).length > NK1 && UW.createElement(u, {
    color: r1().secondaryText
  }, "... (+", G.split(`
`).length - NK1, " lines)")))
}
// @from(Start 6264973, End 6264990)
zK1 = J1(u1(), 1)
// @from(Start 6264996, End 6265013)
MQ2 = J1(u1(), 1)
// @from(Start 6265019, End 6265035)
zH = J1(u1(), 1)
// @from(Start 6265041, End 6265057)
Ru = J1(u1(), 1)
// @from(Start 6265060, End 6265360)
function NH({
  costUSD: I,
  durationMs: d,
  debug: G
}) {
  if (!G) return null;
  let Z = (d / 1000).toFixed(1);
  return Ru.createElement(p, {
    flexDirection: "column",
    minWidth: 23,
    width: 23
  }, Ru.createElement(u, {
    dimColor: !0
  }, "Cost: $", I.toFixed(4), " (", Z, "s)"))
}
// @from(Start 6265446, End 6265665)
yw9 = s.strictObject({
    pattern: s.string().describe("The glob pattern to match files against"),
    path: s.string().optional().describe("The directory to search in. Defaults to the current working directory.")
  })
// @from(Start 6265669, End 6267789)
A7 = {
    name: ys,
    async description() {
      return BJ1
    },
    userFacingName() {
      return "Search"
    },
    inputSchema: yw9,
    async isEnabled() {
      return !0
    },
    isReadOnly() {
      return !0
    },
    needsPermissions({
      path: I
    }) {
      return !PB(I || R0())
    },
    async prompt() {
      return BJ1
    },
    renderToolUseMessage({
      pattern: I,
      path: d
    }, {
      verbose: G
    }) {
      let Z = d ? Mw9(d) ? d : Lw9(R0(), d) : void 0,
        C = Z ? Sw9(R0(), Z) : void 0;
      return `pattern: "${I}"${C||G?`, path: "${G?Z:C}"`:""}`
    },
    renderToolUseRejectedMessage() {
      return zH.default.createElement(A3, null)
    },
    renderToolResultMessage(I) {
      if (typeof I === "string") I = JSON.parse(I);
      return zH.default.createElement(p, {
        justifyContent: "space-between",
        width: "100%"
      }, zH.default.createElement(p, {
        flexDirection: "row"
      }, zH.default.createElement(u, null, "  ⎿  Found "), zH.default.createElement(u, {
        bold: !0
      }, I.numFiles, " "), zH.default.createElement(u, null, I.numFiles === 0 || I.numFiles > 1 ? "files" : "file")), zH.default.createElement(NH, {
        costUSD: 0,
        durationMs: I.durationMs,
        debug: !1
      }))
    },
    async * call({
      pattern: I,
      path: d
    }, {
      abortController: G
    }) {
      let Z = Date.now(),
        {
          files: C,
          truncated: W
        } = await v40(I, d ?? R0(), {
          limit: 100,
          offset: 0
        }, G.signal),
        w = {
          filenames: C,
          durationMs: Date.now() - Z,
          numFiles: C.length,
          truncated: W
        };
      yield {
        type: "result",
        resultForAssistant: this.renderResultForAssistant(w),
        data: w
      }
    },
    renderResultForAssistant(I) {
      let d = I.filenames.join(`
`);
      if (I.filenames.length === 0) d = "No files found";
      else if (I.truncated) d += `
(Results are truncated. Consider using a more specific path or pattern.)`;
      return d
    }
  }
// @from(Start 6267840, End 6267856)
QH = J1(u1(), 1)
// @from(Start 6267862, End 6268217)
$w9 = s.strictObject({
    pattern: s.string().describe("The regular expression pattern to search for in file contents"),
    path: s.string().optional().describe("The directory to search in. Defaults to the current working directory."),
    include: s.string().optional().describe('File pattern to include in the search (e.g. "*.js", "*.{ts,tsx}")')
  })
// @from(Start 6268221, End 6268230)
EQ2 = 100
// @from(Start 6268234, End 6270672)
Kd = {
    name: Ps,
    async description() {
      return AJ1
    },
    userFacingName() {
      return "Search"
    },
    inputSchema: $w9,
    isReadOnly() {
      return !0
    },
    async isEnabled() {
      return !0
    },
    needsPermissions({
      path: I
    }) {
      return !PB(I || R0())
    },
    async prompt() {
      return AJ1
    },
    renderToolUseMessage({
      pattern: I,
      path: d,
      include: G
    }, {
      verbose: Z
    }) {
      let {
        absolutePath: C,
        relativePath: W
      } = P40(d);
      return `pattern: "${I}"${W||Z?`, path: "${Z?C:W}"`:""}${G?`, include: "${G}"`:""}`
    },
    renderToolUseRejectedMessage() {
      return QH.default.createElement(A3, null)
    },
    renderToolResultMessage(I) {
      if (typeof I === "string") I = I;
      return QH.default.createElement(p, {
        justifyContent: "space-between",
        width: "100%"
      }, QH.default.createElement(p, {
        flexDirection: "row"
      }, QH.default.createElement(u, null, "  ⎿  Found "), QH.default.createElement(u, {
        bold: !0
      }, I.numFiles, " "), QH.default.createElement(u, null, I.numFiles === 0 || I.numFiles > 1 ? "files" : "file")), QH.default.createElement(NH, {
        costUSD: 0,
        durationMs: I.durationMs,
        debug: !1
      }))
    },
    renderResultForAssistant({
      numFiles: I,
      filenames: d
    }) {
      if (I === 0) return "No files found";
      let G = `Found ${I} file${I===1?"":"s"}
${d.slice(0,EQ2).join(`
`)}`;
      if (I > EQ2) G += `
(Results are truncated. Consider using a more specific path or pattern.)`;
      return G
    },
    async * call({
      pattern: I,
      path: d,
      include: G
    }, {
      abortController: Z
    }) {
      let C = Date.now(),
        W = p81(d) || R0(),
        w = ["-li", I];
      if (G) w.push("--glob", G);
      let B = await MS(w, W, Z.signal),
        A = await Promise.all(B.map((_) => Pw9(_))),
        V = B.map((_, F) => [_, A[F]]).sort((_, F) => {
          let g = (F[1].mtimeMs ?? 0) - (_[1].mtimeMs ?? 0);
          if (g === 0) return _[0].localeCompare(F[0]);
          return g
        }).map((_) => _[0]),
        X = {
          filenames: V,
          durationMs: Date.now() - C,
          numFiles: V.length
        };
      yield {
        type: "result",
        resultForAssistant: this.renderResultForAssistant(X),
        data: X
      }
    }
  }
// @from(Start 6270675, End 6270918)
function uw9(I, d) {
  let G = null;
  for (let Z of d) {
    if (Z.type !== "assistant" || !Array.isArray(Z.message.content)) continue;
    for (let C of Z.message.content)
      if (C.type === "tool_use" && C.id === I) G = C
  }
  return G
}
// @from(Start 6270920, End 6271339)
function Ro(I, d, G) {
  return MQ2.useMemo(() => {
    let Z = uw9(I, G);
    if (!Z) throw new ReferenceError(`Tool use not found for tool_use_id ${I}`);
    let C = [...d, A7, Kd].find((W) => W.name === Z.name);
    if (C === A7 || C === Kd) I0("tengu_legacy_tool_lookup", {});
    if (!C) throw new ReferenceError(`Tool not found for ${Z.name}`);
    return {
      tool: C,
      toolUse: Z
    }
  }, [I, G, d])
}
// @from(Start 6271341, End 6271679)
function SQ2({
  toolUseID: I,
  tools: d,
  messages: G,
  verbose: Z
}) {
  let {
    columns: C
  } = G9(), {
    tool: W,
    toolUse: w
  } = Ro(I, d, G), B = W.inputSchema.safeParse(w.input);
  if (B.success) return W.renderToolUseRejectedMessage(B.data, {
    columns: C,
    verbose: Z
  });
  return zK1.createElement(A3, null)
}
// @from(Start 6271684, End 6271701)
QK1 = J1(u1(), 1)
// @from(Start 6271704, End 6272006)
function LQ2({
  param: I,
  message: d,
  messages: G,
  tools: Z,
  verbose: C,
  width: W
}) {
  let {
    tool: w
  } = Ro(I.tool_use_id, Z, G);
  return QK1.createElement(p, {
    flexDirection: "column",
    width: W
  }, w.renderToolResultMessage?.(d.toolUseResult.data, {
    verbose: C
  }))
}
// @from(Start 6272008, End 6272516)
function yQ2({
  param: I,
  message: d,
  messages: G,
  tools: Z,
  verbose: C,
  width: W
}) {
  if (I.content === BU) return JX.createElement(UQ2, null);
  if (I.content === fu) return JX.createElement(SQ2, {
    toolUseID: I.tool_use_id,
    tools: Z,
    messages: G,
    verbose: C
  });
  if (I.is_error) return JX.createElement(vQ2, {
    param: I,
    verbose: C
  });
  return JX.createElement(LQ2, {
    param: I,
    message: d,
    messages: G,
    tools: Z,
    verbose: C,
    width: W
  })
}
// @from(Start 6272521, End 6272537)
gG = J1(u1(), 1)
// @from(Start 6272543, End 6272559)
vo = J1(u1(), 1)
// @from(Start 6272565, End 6272581)
Uu = J1(u1(), 1)
// @from(Start 6272584, End 6272820)
function Uo(I, d) {
  let G = Uu.useRef(I);
  Uu.useEffect(() => {
    G.current = I
  }, [I]), Uu.useEffect(() => {
    function Z() {
      G.current()
    }
    let C = setInterval(Z, d);
    return () => clearInterval(C)
  }, [d])
}
// @from(Start 6272825, End 6272865)
AU = K2.platform === "macos" ? "⏺" : "●"
// @from(Start 6272868, End 6273232)
function PQ2({
  isError: I,
  isUnresolved: d,
  shouldAnimate: G
}) {
  let [Z, C] = vo.default.useState(!0);
  Uo(() => {
    if (!G) return;
    C((w) => !w)
  }, 600);
  let W = d ? r1().secondaryText : I ? r1().error : r1().success;
  return vo.default.createElement(p, {
    minWidth: 2
  }, vo.default.createElement(u, {
    color: W
  }, Z ? AU : "  "))
}
// @from(Start 6273237, End 6273254)
fK1 = J1(u1(), 1)
// @from(Start 6273260, End 6273353)
$Q2 = "This is a no-op tool that logs a thought. It is inspired by the tau-bench think tool."
// @from(Start 6273357, End 6274300)
uQ2 = `Use the tool to think about something. It will not obtain new information or make any changes to the repository, but just log the thought. Use it when complex reasoning or brainstorming is needed. 

Common use cases:
1. When exploring a repository and discovering the source of a bug, call this tool to brainstorm several unique ways of fixing the bug, and assess which change(s) are likely to be simplest and most effective
2. After receiving test results, use this tool to brainstorm ways to fix failing tests
3. When planning a complex refactoring, use this tool to outline different approaches and their tradeoffs
4. When designing a new feature, use this tool to think through architecture decisions and implementation details
5. When debugging a complex issue, use this tool to organize your thoughts and hypotheses

The tool simply logs your thought process for better transparency and does not execute any code or make changes.`
// @from(Start 6274306, End 6274322)
vu = J1(u1(), 1)
// @from(Start 6274325, End 6274502)
function Eo({
  children: I
}) {
  return vu.createElement(p, {
    flexDirection: "row",
    height: 1,
    overflow: "hidden"
  }, vu.createElement(u, null, "  ", "⎿  "), I)
}
// @from(Start 6274507, End 6274579)
Tw9 = s.object({
    thought: s.string().describe("Your thoughts.")
  })
// @from(Start 6274583, End 6275597)
VK = {
    name: "Think",
    userFacingName: () => "Think",
    description: async () => $Q2,
    inputSchema: Tw9,
    isEnabled: async () => Boolean(process.env.THINK_TOOL) && await NY("tengu_think_tool"),
    isReadOnly: () => !0,
    needsPermissions: () => !1,
    prompt: async () => uQ2,
    async * call(I, {
      messageId: d
    }) {
      I0("tengu_thinking", {
        messageId: d,
        thoughtLength: I.thought.length.toString(),
        method: "tool",
        provider: b9 ? "bedrock" : h9 ? "vertex" : "1p"
      }), yield {
        type: "result",
        resultForAssistant: "Your thought has been logged.",
        data: {
          thought: I.thought
        }
      }
    },
    renderToolUseMessage(I) {
      return I.thought
    },
    renderToolUseRejectedMessage() {
      return fK1.default.createElement(Eo, null, fK1.default.createElement(u, {
        color: r1().error
      }, "Thought cancelled"))
    },
    renderResultForAssistant: () => "Your thought has been logged."
  }
// @from(Start 6275603, End 6275619)
Tu = J1(u1(), 1)
// @from(Start 6275622, End 6275834)
function RK1() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
  }
}
// @from(Start 6275839, End 6275849)
YK = RK1()
// @from(Start 6275852, End 6275880)
function hQ2(I) {
  YK = I
}
// @from(Start 6275885, End 6275912)
Su = {
  exec: () => null
}
// @from(Start 6275915, End 6276240)
function C9(I, d = "") {
  let G = typeof I === "string" ? I : I.source,
    Z = {
      replace: (C, W) => {
        let w = typeof W === "string" ? W : W.source;
        return w = w.replace(fI.caret, "$1"), G = G.replace(C, w), Z
      },
      getRegex: () => {
        return new RegExp(G, d)
      }
    };
  return Z
}
// @from(Start 6276245, End 6278602)
fI = {
    codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
    outputLinkReplace: /\\([\[\]])/g,
    indentCodeCompensation: /^(\s+)(?:```)/,
    beginningSpace: /^\s+/,
    endingHash: /#$/,
    startingSpaceChar: /^ /,
    endingSpaceChar: / $/,
    nonSpaceChar: /[^ ]/,
    newLineCharGlobal: /\n/g,
    tabCharGlobal: /\t/g,
    multipleSpaceGlobal: /\s+/g,
    blankLine: /^[ \t]*$/,
    doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
    blockquoteStart: /^ {0,3}>/,
    blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
    blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
    listReplaceTabs: /^\t+/,
    listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
    listIsTask: /^\[[ xX]\] /,
    listReplaceTask: /^\[[ xX]\] +/,
    anyLine: /\n.*\n/,
    hrefBrackets: /^<(.*)>$/,
    tableDelimiter: /[:|]/,
    tableAlignChars: /^\||\| *$/g,
    tableRowBlankLine: /\n[ \t]*$/,
    tableAlignRight: /^ *-+: *$/,
    tableAlignCenter: /^ *:-+: *$/,
    tableAlignLeft: /^ *:-+ *$/,
    startATag: /^<a /i,
    endATag: /^<\/a>/i,
    startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
    endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
    startAngleBracket: /^</,
    endAngleBracket: />$/,
    pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
    unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
    escapeTest: /[&<>"']/,
    escapeReplace: /[&<>"']/g,
    escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
    escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
    unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
    caret: /(^|[^\[])\^/g,
    percentDecode: /%25/g,
    findPipe: /\|/g,
    splitPipe: / \|/,
    slashPipe: /\\\|/g,
    carriageReturn: /\r\n|\r/g,
    spaceLine: /^ +$/gm,
    notSpaceStart: /^\S*/,
    endingNewline: /\n$/,
    listItemRegex: (I) => new RegExp(`^( {0,3}${I})((?:[	 ][^\\n]*)?(?:\\n|$))`),
    nextBulletRegex: (I) => new RegExp(`^ {0,${Math.min(3,I-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
    hrRegex: (I) => new RegExp(`^ {0,${Math.min(3,I-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
    fencesBeginRegex: (I) => new RegExp(`^ {0,${Math.min(3,I-1)}}(?:\`\`\`|~~~)`),
    headingBeginRegex: (I) => new RegExp(`^ {0,${Math.min(3,I-1)}}#`),
    htmlBeginRegex: (I) => new RegExp(`^ {0,${Math.min(3,I-1)}}<(?:[a-z].*>|!--)`, "i")
  }
// @from(Start 6278606, End 6278634)
Ow9 = /^(?:[ \t]*(?:\n|$))+/
// @from(Start 6278638, End 6278699)
mw9 = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/
// @from(Start 6278703, End 6278818)
lw9 = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/
// @from(Start 6278822, End 6278895)
$u = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/
// @from(Start 6278899, End 6278943)
bw9 = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/
// @from(Start 6278947, End 6278976)
jQ2 = /(?:[*+-]|\d{1,9}[.)])/
// @from(Start 6278980, End 6279366)
kQ2 = C9(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, jQ2).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex()
// @from(Start 6279370, End 6279462)
UK1 = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/
// @from(Start 6279466, End 6279481)
hw9 = /^[^\n]+/
// @from(Start 6279485, End 6279520)
vK1 = /(?!\s*\])(?:\\.|[^\[\]\\])+/
// @from(Start 6279524, End 6279757)
jw9 = C9(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", vK1).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex()
// @from(Start 6279761, End 6279842)
kw9 = C9(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, jQ2).getRegex()
// @from(Start 6279846, End 6280202)
Lo = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"
// @from(Start 6280206, End 6280243)
EK1 = /<!--(?:-?>|[\s\S]*?(?:-->|$))/
// @from(Start 6280247, End 6280891)
xw9 = C9("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$))", "i").replace("comment", EK1).replace("tag", Lo).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex()
// @from(Start 6280895, End 6281269)
xQ2 = C9(UK1).replace("hr", $u).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Lo).getRegex()
// @from(Start 6281273, End 6281361)
cw9 = C9(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", xQ2).getRegex()
// @from(Start 6281365, End 6281589)
MK1 = {
    blockquote: cw9,
    code: mw9,
    def: jw9,
    fences: lw9,
    heading: bw9,
    hr: $u,
    html: xw9,
    lheading: kQ2,
    list: kw9,
    newline: Ow9,
    paragraph: xQ2,
    table: Su,
    text: hw9
  }
// @from(Start 6281593, End 6282117)
TQ2 = C9("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", $u).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}\t)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Lo).getRegex()
// @from(Start 6282121, End 6282544)
pw9 = {
    ...MK1,
    table: TQ2,
    paragraph: C9(UK1).replace("hr", $u).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", TQ2).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Lo).getRegex()
  }
// @from(Start 6282548, End 6283376)
iw9 = {
    ...MK1,
    html: C9(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", EK1).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: Su,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: C9(UK1).replace("hr", $u).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", kQ2).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
  }
// @from(Start 6283380, End 6283431)
nw9 = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/
// @from(Start 6283435, End 6283478)
rw9 = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/
// @from(Start 6283482, End 6283511)
cQ2 = /^( {2,}|\\)\n(?!\s*$)/
// @from(Start 6283515, End 6283598)
aw9 = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/
// @from(Start 6283602, End 6283622)
yo = /[\p{P}\p{S}]/u
// @from(Start 6283626, End 6283649)
SK1 = /[\s\p{P}\p{S}]/u
// @from(Start 6283653, End 6283677)
pQ2 = /[^\s\p{P}\p{S}]/u
// @from(Start 6283681, End 6283758)
sw9 = C9(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, SK1).getRegex()
// @from(Start 6283762, End 6283788)
iQ2 = /(?!~)[\p{P}\p{S}]/u
// @from(Start 6283792, End 6283820)
ow9 = /(?!~)[\s\p{P}\p{S}]/u
// @from(Start 6283824, End 6283854)
ew9 = /(?:[^\s\p{P}\p{S}]|~)/u
// @from(Start 6283858, End 6283943)
tw9 = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g
// @from(Start 6283947, End 6284016)
nQ2 = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/
// @from(Start 6284020, End 6284071)
IB9 = C9(nQ2, "u").replace(/punct/g, yo).getRegex()
// @from(Start 6284075, End 6284127)
dB9 = C9(nQ2, "u").replace(/punct/g, iQ2).getRegex()
// @from(Start 6284131, End 6284400)
rQ2 = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)"
// @from(Start 6284404, End 6284515)
GB9 = C9(rQ2, "gu").replace(/notPunctSpace/g, pQ2).replace(/punctSpace/g, SK1).replace(/punct/g, yo).getRegex()
// @from(Start 6284519, End 6284631)
ZB9 = C9(rQ2, "gu").replace(/notPunctSpace/g, ew9).replace(/punctSpace/g, ow9).replace(/punct/g, iQ2).getRegex()
// @from(Start 6284635, End 6284953)
CB9 = C9("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, pQ2).replace(/punctSpace/g, SK1).replace(/punct/g, yo).getRegex()
// @from(Start 6284957, End 6285017)
WB9 = C9(/\\(punct)/, "gu").replace(/punct/g, yo).getRegex()
// @from(Start 6285021, End 6285290)
wB9 = C9(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex()
// @from(Start 6285294, End 6285346)
BB9 = C9(EK1).replace("(?:-->|$)", "-->").getRegex()
// @from(Start 6285350, End 6285649)
AB9 = C9("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", BB9).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex()
// @from(Start 6285653, End 6285711)
So = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/
// @from(Start 6285715, End 6285940)
VB9 = C9(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", So).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex()
// @from(Start 6285944, End 6286031)
aQ2 = C9(/^!?\[(label)\]\[(ref)\]/).replace("label", So).replace("ref", vK1).getRegex()
// @from(Start 6286035, End 6286099)
sQ2 = C9(/^!?\[(ref)\](?:\[\])?/).replace("ref", vK1).getRegex()
// @from(Start 6286103, End 6286199)
XB9 = C9("reflink|nolink(?!\\()", "g").replace("reflink", aQ2).replace("nolink", sQ2).getRegex()
// @from(Start 6286203, End 6286574)
LK1 = {
    _backpedal: Su,
    anyPunctuation: WB9,
    autolink: wB9,
    blockSkip: tw9,
    br: cQ2,
    code: rw9,
    del: Su,
    emStrongLDelim: IB9,
    emStrongRDelimAst: GB9,
    emStrongRDelimUnd: CB9,
    escape: nw9,
    link: VB9,
    nolink: sQ2,
    punctuation: sw9,
    reflink: aQ2,
    reflinkSearch: XB9,
    tag: AB9,
    text: aw9,
    url: Su
  }
// @from(Start 6286578, End 6286755)
YB9 = {
    ...LK1,
    link: C9(/^!?\[(label)\]\((.*?)\)/).replace("label", So).getRegex(),
    reflink: C9(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", So).getRegex()
  }
// @from(Start 6286759, End 6287425)
qK1 = {
    ...LK1,
    emStrongRDelimAst: ZB9,
    emStrongLDelim: dB9,
    url: C9(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
  }
// @from(Start 6287429, End 6287592)
_B9 = {
    ...qK1,
    br: C9(cQ2).replace("{2,}", "*").getRegex(),
    text: C9(qK1.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
  }
// @from(Start 6287596, End 6287655)
Mo = {
    normal: MK1,
    gfm: pw9,
    pedantic: iw9
  }
// @from(Start 6287659, End 6287735)
Eu = {
    normal: LK1,
    gfm: qK1,
    breaks: _B9,
    pedantic: YB9
  }
// @from(Start 6287739, End 6287838)
DB9 = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }
// @from(Start 6287842, End 6287861)
OQ2 = (I) => DB9[I]
// @from(Start 6287864, End 6288071)
function bB(I, d) {
  if (d) {
    if (fI.escapeTest.test(I)) return I.replace(fI.escapeReplace, OQ2)
  } else if (fI.escapeTestNoEncode.test(I)) return I.replace(fI.escapeReplaceNoEncode, OQ2);
  return I
}
// @from(Start 6288073, End 6288195)
function mQ2(I) {
  try {
    I = encodeURI(I).replace(fI.percentDecode, "%")
  } catch {
    return null
  }
  return I
}
// @from(Start 6288197, End 6288705)
function lQ2(I, d) {
  let G = I.replace(fI.findPipe, (W, w, B) => {
      let A = !1,
        V = w;
      while (--V >= 0 && B[V] === "\\") A = !A;
      if (A) return "|";
      else return " |"
    }),
    Z = G.split(fI.splitPipe),
    C = 0;
  if (!Z[0].trim()) Z.shift();
  if (Z.length > 0 && !Z.at(-1)?.trim()) Z.pop();
  if (d)
    if (Z.length > d) Z.splice(d);
    else
      while (Z.length < d) Z.push("");
  for (; C < Z.length; C++) Z[C] = Z[C].trim().replace(fI.slashPipe, "|");
  return Z
}
// @from(Start 6288707, End 6288889)
function Mu(I, d, G) {
  let Z = I.length;
  if (Z === 0) return "";
  let C = 0;
  while (C < Z)
    if (I.charAt(Z - C - 1) === d) C++;
    else break;
  return I.slice(0, Z - C)
}
// @from(Start 6288891, End 6289138)
function HB9(I, d) {
  if (I.indexOf(d[1]) === -1) return -1;
  let G = 0;
  for (let Z = 0; Z < I.length; Z++)
    if (I[Z] === "\\") Z++;
    else if (I[Z] === d[0]) G++;
  else if (I[Z] === d[1]) {
    if (G--, G < 0) return Z
  }
  return -1
}
// @from(Start 6289140, End 6289582)
function bQ2(I, d, G, Z, C) {
  let W = d.href,
    w = d.title || null,
    B = I[1].replace(C.other.outputLinkReplace, "$1");
  if (I[0].charAt(0) !== "!") {
    Z.state.inLink = !0;
    let A = {
      type: "link",
      raw: G,
      href: W,
      title: w,
      text: B,
      tokens: Z.inlineTokens(B)
    };
    return Z.state.inLink = !1, A
  }
  return {
    type: "image",
    raw: G,
    href: W,
    title: w,
    text: B
  }
}
// @from(Start 6289584, End 6289915)
function FB9(I, d, G) {
  let Z = I.match(G.other.indentCodeCompensation);
  if (Z === null) return d;
  let C = Z[1];
  return d.split(`
`).map((W) => {
    let w = W.match(G.other.beginningSpace);
    if (w === null) return W;
    let [B] = w;
    if (B.length >= C.length) return W.slice(C.length);
    return W
  }).join(`
`)
}
// @from(Start 6289916, End 6304998)
class yu {
  options;
  rules;
  lexer;
  constructor(I) {
    this.options = I || YK
  }
  space(I) {
    let d = this.rules.block.newline.exec(I);
    if (d && d[0].length > 0) return {
      type: "space",
      raw: d[0]
    }
  }
  code(I) {
    let d = this.rules.block.code.exec(I);
    if (d) {
      let G = d[0].replace(this.rules.other.codeRemoveIndent, "");
      return {
        type: "code",
        raw: d[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? Mu(G, `
`) : G
      }
    }
  }
  fences(I) {
    let d = this.rules.block.fences.exec(I);
    if (d) {
      let G = d[0],
        Z = FB9(G, d[3] || "", this.rules);
      return {
        type: "code",
        raw: G,
        lang: d[2] ? d[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : d[2],
        text: Z
      }
    }
  }
  heading(I) {
    let d = this.rules.block.heading.exec(I);
    if (d) {
      let G = d[2].trim();
      if (this.rules.other.endingHash.test(G)) {
        let Z = Mu(G, "#");
        if (this.options.pedantic) G = Z.trim();
        else if (!Z || this.rules.other.endingSpaceChar.test(Z)) G = Z.trim()
      }
      return {
        type: "heading",
        raw: d[0],
        depth: d[1].length,
        text: G,
        tokens: this.lexer.inline(G)
      }
    }
  }
  hr(I) {
    let d = this.rules.block.hr.exec(I);
    if (d) return {
      type: "hr",
      raw: Mu(d[0], `
`)
    }
  }
  blockquote(I) {
    let d = this.rules.block.blockquote.exec(I);
    if (d) {
      let G = Mu(d[0], `
`).split(`
`),
        Z = "",
        C = "",
        W = [];
      while (G.length > 0) {
        let w = !1,
          B = [],
          A;
        for (A = 0; A < G.length; A++)
          if (this.rules.other.blockquoteStart.test(G[A])) B.push(G[A]), w = !0;
          else if (!w) B.push(G[A]);
        else break;
        G = G.slice(A);
        let V = B.join(`
`),
          X = V.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        Z = Z ? `${Z}
${V}` : V, C = C ? `${C}
${X}` : X;
        let _ = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(X, W, !0), this.lexer.state.top = _, G.length === 0) break;
        let F = W.at(-1);
        if (F?.type === "code") break;
        else if (F?.type === "blockquote") {
          let g = F,
            J = g.raw + `
` + G.join(`
`),
            K = this.blockquote(J);
          W[W.length - 1] = K, Z = Z.substring(0, Z.length - g.raw.length) + K.raw, C = C.substring(0, C.length - g.text.length) + K.text;
          break
        } else if (F?.type === "list") {
          let g = F,
            J = g.raw + `
` + G.join(`
`),
            K = this.list(J);
          W[W.length - 1] = K, Z = Z.substring(0, Z.length - F.raw.length) + K.raw, C = C.substring(0, C.length - g.raw.length) + K.raw, G = J.substring(W.at(-1).raw.length).split(`
`);
          continue
        }
      }
      return {
        type: "blockquote",
        raw: Z,
        tokens: W,
        text: C
      }
    }
  }
  list(I) {
    let d = this.rules.block.list.exec(I);
    if (d) {
      let G = d[1].trim(),
        Z = G.length > 1,
        C = {
          type: "list",
          raw: "",
          ordered: Z,
          start: Z ? +G.slice(0, -1) : "",
          loose: !1,
          items: []
        };
      if (G = Z ? `\\d{1,9}\\${G.slice(-1)}` : `\\${G}`, this.options.pedantic) G = Z ? G : "[*+-]";
      let W = this.rules.other.listItemRegex(G),
        w = !1;
      while (I) {
        let A = !1,
          V = "",
          X = "";
        if (!(d = W.exec(I))) break;
        if (this.rules.block.hr.test(I)) break;
        V = d[0], I = I.substring(V.length);
        let _ = d[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (E) => " ".repeat(3 * E.length)),
          F = I.split(`
`, 1)[0],
          g = !_.trim(),
          J = 0;
        if (this.options.pedantic) J = 2, X = _.trimStart();
        else if (g) J = d[1].length + 1;
        else J = d[2].search(this.rules.other.nonSpaceChar), J = J > 4 ? 1 : J, X = _.slice(J), J += d[1].length;
        if (g && this.rules.other.blankLine.test(F)) V += F + `
`, I = I.substring(F.length + 1), A = !0;
        if (!A) {
          let E = this.rules.other.nextBulletRegex(J),
            S = this.rules.other.hrRegex(J),
            P = this.rules.other.fencesBeginRegex(J),
            $ = this.rules.other.headingBeginRegex(J),
            h = this.rules.other.htmlBeginRegex(J);
          while (I) {
            let O = I.split(`
`, 1)[0],
              T;
            if (F = O, this.options.pedantic) F = F.replace(this.rules.other.listReplaceNesting, "  "), T = F;
            else T = F.replace(this.rules.other.tabCharGlobal, "    ");
            if (P.test(F)) break;
            if ($.test(F)) break;
            if (h.test(F)) break;
            if (E.test(F)) break;
            if (S.test(F)) break;
            if (T.search(this.rules.other.nonSpaceChar) >= J || !F.trim()) X += `
` + T.slice(J);
            else {
              if (g) break;
              if (_.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4) break;
              if (P.test(_)) break;
              if ($.test(_)) break;
              if (S.test(_)) break;
              X += `
` + F
            }
            if (!g && !F.trim()) g = !0;
            V += O + `
`, I = I.substring(O.length + 1), _ = T.slice(J)
          }
        }
        if (!C.loose) {
          if (w) C.loose = !0;
          else if (this.rules.other.doubleBlankLine.test(V)) w = !0
        }
        let K = null,
          Q;
        if (this.options.gfm) {
          if (K = this.rules.other.listIsTask.exec(X), K) Q = K[0] !== "[ ] ", X = X.replace(this.rules.other.listReplaceTask, "")
        }
        C.items.push({
          type: "list_item",
          raw: V,
          task: !!K,
          checked: Q,
          loose: !1,
          text: X,
          tokens: []
        }), C.raw += V
      }
      let B = C.items.at(-1);
      if (B) B.raw = B.raw.trimEnd(), B.text = B.text.trimEnd();
      else return;
      C.raw = C.raw.trimEnd();
      for (let A = 0; A < C.items.length; A++)
        if (this.lexer.state.top = !1, C.items[A].tokens = this.lexer.blockTokens(C.items[A].text, []), !C.loose) {
          let V = C.items[A].tokens.filter((_) => _.type === "space"),
            X = V.length > 0 && V.some((_) => this.rules.other.anyLine.test(_.raw));
          C.loose = X
        } if (C.loose)
        for (let A = 0; A < C.items.length; A++) C.items[A].loose = !0;
      return C
    }
  }
  html(I) {
    let d = this.rules.block.html.exec(I);
    if (d) return {
      type: "html",
      block: !0,
      raw: d[0],
      pre: d[1] === "pre" || d[1] === "script" || d[1] === "style",
      text: d[0]
    }
  }
  def(I) {
    let d = this.rules.block.def.exec(I);
    if (d) {
      let G = d[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "),
        Z = d[2] ? d[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "",
        C = d[3] ? d[3].substring(1, d[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : d[3];
      return {
        type: "def",
        tag: G,
        raw: d[0],
        href: Z,
        title: C
      }
    }
  }
  table(I) {
    let d = this.rules.block.table.exec(I);
    if (!d) return;
    if (!this.rules.other.tableDelimiter.test(d[2])) return;
    let G = lQ2(d[1]),
      Z = d[2].replace(this.rules.other.tableAlignChars, "").split("|"),
      C = d[3]?.trim() ? d[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [],
      W = {
        type: "table",
        raw: d[0],
        header: [],
        align: [],
        rows: []
      };
    if (G.length !== Z.length) return;
    for (let w of Z)
      if (this.rules.other.tableAlignRight.test(w)) W.align.push("right");
      else if (this.rules.other.tableAlignCenter.test(w)) W.align.push("center");
    else if (this.rules.other.tableAlignLeft.test(w)) W.align.push("left");
    else W.align.push(null);
    for (let w = 0; w < G.length; w++) W.header.push({
      text: G[w],
      tokens: this.lexer.inline(G[w]),
      header: !0,
      align: W.align[w]
    });
    for (let w of C) W.rows.push(lQ2(w, W.header.length).map((B, A) => {
      return {
        text: B,
        tokens: this.lexer.inline(B),
        header: !1,
        align: W.align[A]
      }
    }));
    return W
  }
  lheading(I) {
    let d = this.rules.block.lheading.exec(I);
    if (d) return {
      type: "heading",
      raw: d[0],
      depth: d[2].charAt(0) === "=" ? 1 : 2,
      text: d[1],
      tokens: this.lexer.inline(d[1])
    }
  }
  paragraph(I) {
    let d = this.rules.block.paragraph.exec(I);
    if (d) {
      let G = d[1].charAt(d[1].length - 1) === `
` ? d[1].slice(0, -1) : d[1];
      return {
        type: "paragraph",
        raw: d[0],
        text: G,
        tokens: this.lexer.inline(G)
      }
    }
  }
  text(I) {
    let d = this.rules.block.text.exec(I);
    if (d) return {
      type: "text",
      raw: d[0],
      text: d[0],
      tokens: this.lexer.inline(d[0])
    }
  }
  escape(I) {
    let d = this.rules.inline.escape.exec(I);
    if (d) return {
      type: "escape",
      raw: d[0],
      text: d[1]
    }
  }
  tag(I) {
    let d = this.rules.inline.tag.exec(I);
    if (d) {
      if (!this.lexer.state.inLink && this.rules.other.startATag.test(d[0])) this.lexer.state.inLink = !0;
      else if (this.lexer.state.inLink && this.rules.other.endATag.test(d[0])) this.lexer.state.inLink = !1;
      if (!this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(d[0])) this.lexer.state.inRawBlock = !0;
      else if (this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(d[0])) this.lexer.state.inRawBlock = !1;
      return {
        type: "html",
        raw: d[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: d[0]
      }
    }
  }
  link(I) {
    let d = this.rules.inline.link.exec(I);
    if (d) {
      let G = d[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(G)) {
        if (!this.rules.other.endAngleBracket.test(G)) return;
        let W = Mu(G.slice(0, -1), "\\");
        if ((G.length - W.length) % 2 === 0) return
      } else {
        let W = HB9(d[2], "()");
        if (W > -1) {
          let B = (d[0].indexOf("!") === 0 ? 5 : 4) + d[1].length + W;
          d[2] = d[2].substring(0, W), d[0] = d[0].substring(0, B).trim(), d[3] = ""
        }
      }
      let Z = d[2],
        C = "";
      if (this.options.pedantic) {
        let W = this.rules.other.pedanticHrefTitle.exec(Z);
        if (W) Z = W[1], C = W[3]
      } else C = d[3] ? d[3].slice(1, -1) : "";
      if (Z = Z.trim(), this.rules.other.startAngleBracket.test(Z))
        if (this.options.pedantic && !this.rules.other.endAngleBracket.test(G)) Z = Z.slice(1);
        else Z = Z.slice(1, -1);
      return bQ2(d, {
        href: Z ? Z.replace(this.rules.inline.anyPunctuation, "$1") : Z,
        title: C ? C.replace(this.rules.inline.anyPunctuation, "$1") : C
      }, d[0], this.lexer, this.rules)
    }
  }
  reflink(I, d) {
    let G;
    if ((G = this.rules.inline.reflink.exec(I)) || (G = this.rules.inline.nolink.exec(I))) {
      let Z = (G[2] || G[1]).replace(this.rules.other.multipleSpaceGlobal, " "),
        C = d[Z.toLowerCase()];
      if (!C) {
        let W = G[0].charAt(0);
        return {
          type: "text",
          raw: W,
          text: W
        }
      }
      return bQ2(G, C, G[0], this.lexer, this.rules)
    }
  }
  emStrong(I, d, G = "") {
    let Z = this.rules.inline.emStrongLDelim.exec(I);
    if (!Z) return;
    if (Z[3] && G.match(this.rules.other.unicodeAlphaNumeric)) return;
    if (!(Z[1] || Z[2]) || !G || this.rules.inline.punctuation.exec(G)) {
      let W = [...Z[0]].length - 1,
        w, B, A = W,
        V = 0,
        X = Z[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      X.lastIndex = 0, d = d.slice(-1 * I.length + W);
      while ((Z = X.exec(d)) != null) {
        if (w = Z[1] || Z[2] || Z[3] || Z[4] || Z[5] || Z[6], !w) continue;
        if (B = [...w].length, Z[3] || Z[4]) {
          A += B;
          continue
        } else if (Z[5] || Z[6]) {
          if (W % 3 && !((W + B) % 3)) {
            V += B;
            continue
          }
        }
        if (A -= B, A > 0) continue;
        B = Math.min(B, B + A + V);
        let _ = [...Z[0]][0].length,
          F = I.slice(0, W + Z.index + _ + B);
        if (Math.min(W, B) % 2) {
          let J = F.slice(1, -1);
          return {
            type: "em",
            raw: F,
            text: J,
            tokens: this.lexer.inlineTokens(J)
          }
        }
        let g = F.slice(2, -2);
        return {
          type: "strong",
          raw: F,
          text: g,
          tokens: this.lexer.inlineTokens(g)
        }
      }
    }
  }
  codespan(I) {
    let d = this.rules.inline.code.exec(I);
    if (d) {
      let G = d[2].replace(this.rules.other.newLineCharGlobal, " "),
        Z = this.rules.other.nonSpaceChar.test(G),
        C = this.rules.other.startingSpaceChar.test(G) && this.rules.other.endingSpaceChar.test(G);
      if (Z && C) G = G.substring(1, G.length - 1);
      return {
        type: "codespan",
        raw: d[0],
        text: G
      }
    }
  }
  br(I) {
    let d = this.rules.inline.br.exec(I);
    if (d) return {
      type: "br",
      raw: d[0]
    }
  }
  del(I) {
    let d = this.rules.inline.del.exec(I);
    if (d) return {
      type: "del",
      raw: d[0],
      text: d[2],
      tokens: this.lexer.inlineTokens(d[2])
    }
  }
  autolink(I) {
    let d = this.rules.inline.autolink.exec(I);
    if (d) {
      let G, Z;
      if (d[2] === "@") G = d[1], Z = "mailto:" + G;
      else G = d[1], Z = G;
      return {
        type: "link",
        raw: d[0],
        text: G,
        href: Z,
        tokens: [{
          type: "text",
          raw: G,
          text: G
        }]
      }
    }
  }
  url(I) {
    let d;
    if (d = this.rules.inline.url.exec(I)) {
      let G, Z;
      if (d[2] === "@") G = d[0], Z = "mailto:" + G;
      else {
        let C;
        do C = d[0], d[0] = this.rules.inline._backpedal.exec(d[0])?.[0] ?? ""; while (C !== d[0]);
        if (G = d[0], d[1] === "www.") Z = "http://" + d[0];
        else Z = d[0]
      }
      return {
        type: "link",
        raw: d[0],
        text: G,
        href: Z,
        tokens: [{
          type: "text",
          raw: G,
          text: G
        }]
      }
    }
  }
  inlineText(I) {
    let d = this.rules.inline.text.exec(I);
    if (d) {
      let G = this.lexer.state.inRawBlock;
      return {
        type: "text",
        raw: d[0],
        text: d[0],
        escaped: G
      }
    }
  }
}
// @from(Start 6304999, End 6313258)
class rZ {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(I) {
    this.tokens = [], this.tokens.links = Object.create(null), this.options = I || YK, this.options.tokenizer = this.options.tokenizer || new yu, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    let d = {
      other: fI,
      block: Mo.normal,
      inline: Eu.normal
    };
    if (this.options.pedantic) d.block = Mo.pedantic, d.inline = Eu.pedantic;
    else if (this.options.gfm)
      if (d.block = Mo.gfm, this.options.breaks) d.inline = Eu.breaks;
      else d.inline = Eu.gfm;
    this.tokenizer.rules = d
  }
  static get rules() {
    return {
      block: Mo,
      inline: Eu
    }
  }
  static lex(I, d) {
    return new rZ(d).lex(I)
  }
  static lexInline(I, d) {
    return new rZ(d).inlineTokens(I)
  }
  lex(I) {
    I = I.replace(fI.carriageReturn, `
`), this.blockTokens(I, this.tokens);
    for (let d = 0; d < this.inlineQueue.length; d++) {
      let G = this.inlineQueue[d];
      this.inlineTokens(G.src, G.tokens)
    }
    return this.inlineQueue = [], this.tokens
  }
  blockTokens(I, d = [], G = !1) {
    if (this.options.pedantic) I = I.replace(fI.tabCharGlobal, "    ").replace(fI.spaceLine, "");
    while (I) {
      let Z;
      if (this.options.extensions?.block?.some((W) => {
          if (Z = W.call({
              lexer: this
            }, I, d)) return I = I.substring(Z.raw.length), d.push(Z), !0;
          return !1
        })) continue;
      if (Z = this.tokenizer.space(I)) {
        I = I.substring(Z.raw.length);
        let W = d.at(-1);
        if (Z.raw.length === 1 && W !== void 0) W.raw += `
`;
        else d.push(Z);
        continue
      }
      if (Z = this.tokenizer.code(I)) {
        I = I.substring(Z.raw.length);
        let W = d.at(-1);
        if (W?.type === "paragraph" || W?.type === "text") W.raw += `
` + Z.raw, W.text += `
` + Z.text, this.inlineQueue.at(-1).src = W.text;
        else d.push(Z);
        continue
      }
      if (Z = this.tokenizer.fences(I)) {
        I = I.substring(Z.raw.length), d.push(Z);
        continue
      }
      if (Z = this.tokenizer.heading(I)) {
        I = I.substring(Z.raw.length), d.push(Z);
        continue
      }
      if (Z = this.tokenizer.hr(I)) {
        I = I.substring(Z.raw.length), d.push(Z);
        continue
      }
      if (Z = this.tokenizer.blockquote(I)) {
        I = I.substring(Z.raw.length), d.push(Z);
        continue
      }
      if (Z = this.tokenizer.list(I)) {
        I = I.substring(Z.raw.length), d.push(Z);
        continue
      }
      if (Z = this.tokenizer.html(I)) {
        I = I.substring(Z.raw.length), d.push(Z);
        continue
      }
      if (Z = this.tokenizer.def(I)) {
        I = I.substring(Z.raw.length);
        let W = d.at(-1);
        if (W?.type === "paragraph" || W?.type === "text") W.raw += `
` + Z.raw, W.text += `
` + Z.raw, this.inlineQueue.at(-1).src = W.text;
        else if (!this.tokens.links[Z.tag]) this.tokens.links[Z.tag] = {
          href: Z.href,
          title: Z.title
        };
        continue
      }
      if (Z = this.tokenizer.table(I)) {
        I = I.substring(Z.raw.length), d.push(Z);
        continue
      }
      if (Z = this.tokenizer.lheading(I)) {
        I = I.substring(Z.raw.length), d.push(Z);
        continue
      }
      let C = I;
      if (this.options.extensions?.startBlock) {
        let W = 1 / 0,
          w = I.slice(1),
          B;
        if (this.options.extensions.startBlock.forEach((A) => {
            if (B = A.call({
                lexer: this
              }, w), typeof B === "number" && B >= 0) W = Math.min(W, B)
          }), W < 1 / 0 && W >= 0) C = I.substring(0, W + 1)
      }
      if (this.state.top && (Z = this.tokenizer.paragraph(C))) {
        let W = d.at(-1);
        if (G && W?.type === "paragraph") W.raw += `
` + Z.raw, W.text += `
` + Z.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = W.text;
        else d.push(Z);
        G = C.length !== I.length, I = I.substring(Z.raw.length);
        continue
      }
      if (Z = this.tokenizer.text(I)) {
        I = I.substring(Z.raw.length);
        let W = d.at(-1);
        if (W?.type === "text") W.raw += `
` + Z.raw, W.text += `
` + Z.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = W.text;
        else d.push(Z);
        continue
      }
      if (I) {
        let W = "Infinite loop on byte: " + I.charCodeAt(0);
        if (this.options.silent) {
          console.error(W);
          break
        } else throw new Error(W)
      }
    }
    return this.state.top = !0, d
  }
  inline(I, d = []) {
    return this.inlineQueue.push({
      src: I,
      tokens: d
    }), d
  }
  inlineTokens(I, d = []) {
    let G = I,
      Z = null;
    if (this.tokens.links) {
      let w = Object.keys(this.tokens.links);
      if (w.length > 0) {
        while ((Z = this.tokenizer.rules.inline.reflinkSearch.exec(G)) != null)
          if (w.includes(Z[0].slice(Z[0].lastIndexOf("[") + 1, -1))) G = G.slice(0, Z.index) + "[" + "a".repeat(Z[0].length - 2) + "]" + G.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex)
      }
    }
    while ((Z = this.tokenizer.rules.inline.blockSkip.exec(G)) != null) G = G.slice(0, Z.index) + "[" + "a".repeat(Z[0].length - 2) + "]" + G.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    while ((Z = this.tokenizer.rules.inline.anyPunctuation.exec(G)) != null) G = G.slice(0, Z.index) + "++" + G.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let C = !1,
      W = "";
    while (I) {
      if (!C) W = "";
      C = !1;
      let w;
      if (this.options.extensions?.inline?.some((A) => {
          if (w = A.call({
              lexer: this
            }, I, d)) return I = I.substring(w.raw.length), d.push(w), !0;
          return !1
        })) continue;
      if (w = this.tokenizer.escape(I)) {
        I = I.substring(w.raw.length), d.push(w);
        continue
      }
      if (w = this.tokenizer.tag(I)) {
        I = I.substring(w.raw.length), d.push(w);
        continue
      }
      if (w = this.tokenizer.link(I)) {
        I = I.substring(w.raw.length), d.push(w);
        continue
      }
      if (w = this.tokenizer.reflink(I, this.tokens.links)) {
        I = I.substring(w.raw.length);
        let A = d.at(-1);
        if (w.type === "text" && A?.type === "text") A.raw += w.raw, A.text += w.text;
        else d.push(w);
        continue
      }
      if (w = this.tokenizer.emStrong(I, G, W)) {
        I = I.substring(w.raw.length), d.push(w);
        continue
      }
      if (w = this.tokenizer.codespan(I)) {
        I = I.substring(w.raw.length), d.push(w);
        continue
      }
      if (w = this.tokenizer.br(I)) {
        I = I.substring(w.raw.length), d.push(w);
        continue
      }
      if (w = this.tokenizer.del(I)) {
        I = I.substring(w.raw.length), d.push(w);
        continue
      }
      if (w = this.tokenizer.autolink(I)) {
        I = I.substring(w.raw.length), d.push(w);
        continue
      }
      if (!this.state.inLink && (w = this.tokenizer.url(I))) {
        I = I.substring(w.raw.length), d.push(w);
        continue
      }
      let B = I;
      if (this.options.extensions?.startInline) {
        let A = 1 / 0,
          V = I.slice(1),
          X;
        if (this.options.extensions.startInline.forEach((_) => {
            if (X = _.call({
                lexer: this
              }, V), typeof X === "number" && X >= 0) A = Math.min(A, X)
          }), A < 1 / 0 && A >= 0) B = I.substring(0, A + 1)
      }
      if (w = this.tokenizer.inlineText(B)) {
        if (I = I.substring(w.raw.length), w.raw.slice(-1) !== "_") W = w.raw.slice(-1);
        C = !0;
        let A = d.at(-1);
        if (A?.type === "text") A.raw += w.raw, A.text += w.text;
        else d.push(w);
        continue
      }
      if (I) {
        let A = "Infinite loop on byte: " + I.charCodeAt(0);
        if (this.options.silent) {
          console.error(A);
          break
        } else throw new Error(A)
      }
    }
    return d
  }
}