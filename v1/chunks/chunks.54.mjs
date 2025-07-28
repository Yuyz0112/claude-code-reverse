
// @from(Start 5520221, End 5520341)
function au1(I) {
  if (!YY(I)) return [];
  try {
    return JSON.parse(dZ4(I, "utf8"))
  } catch {
    return []
  }
}
// @from(Start 5520343, End 5520374)
function WZ4(I, d) {
  return
}
// @from(Start 5520376, End 5520406)
function Wz(I, d) {
  return
}
// @from(Start 5520408, End 5520475)
function w21(I, d, G) {
  while (YY(DY(I, d, G))) d++;
  return d
}
// @from(Start 5520477, End 5520554)
function su1(I, d) {
  let G = 1;
  while (YY(DY(I, d, G))) G++;
  return G
}
// @from(Start 5520556, End 5521035)
function wz(I, d) {
  try {
    let G = _Y.mcpLogs(I),
      Z = d instanceof Error ? d.stack || d.message : String(d),
      C = new Date().toISOString(),
      W = Cz(G, nu1 + ".txt");
    if (!YY(G)) W21(G, {
      recursive: !0
    });
    if (!YY(W)) KE(W, "[]", "utf8");
    let w = {
        error: Z,
        timestamp: C,
        sessionId: id,
        cwd: process.cwd()
      },
      B = au1(W);
    B.push(w), KE(W, JSON.stringify(B, null, 2), "utf8")
  } catch {}
}
// @from(Start 5521067, End 5521084)
hB4 = J1(u1(), 1)
// @from(Start 5521090, End 5521128)
AT1 = (I = 0) => (d) => `\x1B[${d+I}m`
// @from(Start 5521132, End 5521178)
VT1 = (I = 0) => (d) => `\x1B[${38+I};5;${d}m`
// @from(Start 5521182, End 5521244)
XT1 = (I = 0) => (d, G, Z) => `\x1B[${38+I};2;${d};${G};${Z}m`
// @from(Start 5521248, End 5522495)
s9 = {
    modifier: {
      reset: [0, 0],
      bold: [1, 22],
      dim: [2, 22],
      italic: [3, 23],
      underline: [4, 24],
      overline: [53, 55],
      inverse: [7, 27],
      hidden: [8, 28],
      strikethrough: [9, 29]
    },
    color: {
      black: [30, 39],
      red: [31, 39],
      green: [32, 39],
      yellow: [33, 39],
      blue: [34, 39],
      magenta: [35, 39],
      cyan: [36, 39],
      white: [37, 39],
      blackBright: [90, 39],
      gray: [90, 39],
      grey: [90, 39],
      redBright: [91, 39],
      greenBright: [92, 39],
      yellowBright: [93, 39],
      blueBright: [94, 39],
      magentaBright: [95, 39],
      cyanBright: [96, 39],
      whiteBright: [97, 39]
    },
    bgColor: {
      bgBlack: [40, 49],
      bgRed: [41, 49],
      bgGreen: [42, 49],
      bgYellow: [43, 49],
      bgBlue: [44, 49],
      bgMagenta: [45, 49],
      bgCyan: [46, 49],
      bgWhite: [47, 49],
      bgBlackBright: [100, 49],
      bgGray: [100, 49],
      bgGrey: [100, 49],
      bgRedBright: [101, 49],
      bgGreenBright: [102, 49],
      bgYellowBright: [103, 49],
      bgBlueBright: [104, 49],
      bgMagentaBright: [105, 49],
      bgCyanBright: [106, 49],
      bgWhiteBright: [107, 49]
    }
  }
// @from(Start 5522499, End 5522529)
cq9 = Object.keys(s9.modifier)
// @from(Start 5522533, End 5522560)
CC4 = Object.keys(s9.color)
// @from(Start 5522564, End 5522593)
WC4 = Object.keys(s9.bgColor)
// @from(Start 5522597, End 5522619)
pq9 = [...CC4, ...WC4]
// @from(Start 5522622, End 5524887)
function wC4() {
  let I = new Map;
  for (let [d, G] of Object.entries(s9)) {
    for (let [Z, C] of Object.entries(G)) s9[Z] = {
      open: `\x1B[${C[0]}m`,
      close: `\x1B[${C[1]}m`
    }, G[Z] = s9[Z], I.set(C[0], C[1]);
    Object.defineProperty(s9, d, {
      value: G,
      enumerable: !1
    })
  }
  return Object.defineProperty(s9, "codes", {
    value: I,
    enumerable: !1
  }), s9.color.close = "\x1B[39m", s9.bgColor.close = "\x1B[49m", s9.color.ansi = AT1(), s9.color.ansi256 = VT1(), s9.color.ansi16m = XT1(), s9.bgColor.ansi = AT1(10), s9.bgColor.ansi256 = VT1(10), s9.bgColor.ansi16m = XT1(10), Object.defineProperties(s9, {
    rgbToAnsi256: {
      value(d, G, Z) {
        if (d === G && G === Z) {
          if (d < 8) return 16;
          if (d > 248) return 231;
          return Math.round((d - 8) / 247 * 24) + 232
        }
        return 16 + 36 * Math.round(d / 255 * 5) + 6 * Math.round(G / 255 * 5) + Math.round(Z / 255 * 5)
      },
      enumerable: !1
    },
    hexToRgb: {
      value(d) {
        let G = /[a-f\d]{6}|[a-f\d]{3}/i.exec(d.toString(16));
        if (!G) return [0, 0, 0];
        let [Z] = G;
        if (Z.length === 3) Z = [...Z].map((W) => W + W).join("");
        let C = Number.parseInt(Z, 16);
        return [C >> 16 & 255, C >> 8 & 255, C & 255]
      },
      enumerable: !1
    },
    hexToAnsi256: {
      value: (d) => s9.rgbToAnsi256(...s9.hexToRgb(d)),
      enumerable: !1
    },
    ansi256ToAnsi: {
      value(d) {
        if (d < 8) return 30 + d;
        if (d < 16) return 90 + (d - 8);
        let G, Z, C;
        if (d >= 232) G = ((d - 232) * 10 + 8) / 255, Z = G, C = G;
        else {
          d -= 16;
          let B = d % 36;
          G = Math.floor(d / 36) / 5, Z = Math.floor(B / 6) / 5, C = B % 6 / 5
        }
        let W = Math.max(G, Z, C) * 2;
        if (W === 0) return 30;
        let w = 30 + (Math.round(C) << 2 | Math.round(Z) << 1 | Math.round(G));
        if (W === 2) w += 60;
        return w
      },
      enumerable: !1
    },
    rgbToAnsi: {
      value: (d, G, Z) => s9.ansi256ToAnsi(s9.rgbToAnsi256(d, G, Z)),
      enumerable: !1
    },
    hexToAnsi: {
      value: (d) => s9.ansi256ToAnsi(s9.hexToAnsi256(d)),
      enumerable: !1
    }
  }), s9
}
// @from(Start 5524892, End 5524903)
BC4 = wC4()
// @from(Start 5524907, End 5524915)
KC = BC4
// @from(Start 5525005, End 5525234)
function oG(I, d = globalThis.Deno ? globalThis.Deno.args : _21.argv) {
  let G = I.startsWith("-") ? "" : I.length === 1 ? "-" : "--",
    Z = d.indexOf(G + I),
    C = d.indexOf("--");
  return Z !== -1 && (C === -1 || Z < C)
}
// @from(Start 5525442, End 5525678)
function VC4() {
  if ("FORCE_COLOR" in g3) {
    if (g3.FORCE_COLOR === "true") return 1;
    if (g3.FORCE_COLOR === "false") return 0;
    return g3.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(g3.FORCE_COLOR, 10), 3)
  }
}
// @from(Start 5525680, End 5525811)
function XC4(I) {
  if (I === 0) return !1;
  return {
    level: I,
    hasBasic: !0,
    has256: I >= 2,
    has16m: I >= 3
  }
}
// @from(Start 5525813, End 5527312)
function YC4(I, {
  streamIsTTY: d,
  sniffFlags: G = !0
} = {}) {
  let Z = VC4();
  if (Z !== void 0) xl = Z;
  let C = G ? xl : Z;
  if (C === 0) return 0;
  if (G) {
    if (oG("color=16m") || oG("color=full") || oG("color=truecolor")) return 3;
    if (oG("color=256")) return 2
  }
  if ("TF_BUILD" in g3 && "AGENT_NAME" in g3) return 1;
  if (I && !d && C === void 0) return 0;
  let W = C || 0;
  if (g3.TERM === "dumb") return W;
  if (_21.platform === "win32") {
    let w = AC4.release().split(".");
    if (Number(w[0]) >= 10 && Number(w[2]) >= 10586) return Number(w[2]) >= 14931 ? 3 : 2;
    return 1
  }
  if ("CI" in g3) {
    if ("GITHUB_ACTIONS" in g3 || "GITEA_ACTIONS" in g3) return 3;
    if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "BUILDKITE", "DRONE"].some((w) => (w in g3)) || g3.CI_NAME === "codeship") return 1;
    return W
  }
  if ("TEAMCITY_VERSION" in g3) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(g3.TEAMCITY_VERSION) ? 1 : 0;
  if (g3.COLORTERM === "truecolor") return 3;
  if (g3.TERM === "xterm-kitty") return 3;
  if ("TERM_PROGRAM" in g3) {
    let w = Number.parseInt((g3.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
    switch (g3.TERM_PROGRAM) {
      case "iTerm.app":
        return w >= 3 ? 3 : 2;
      case "Apple_Terminal":
        return 2
    }
  }
  if (/-256(color)?$/i.test(g3.TERM)) return 2;
  if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(g3.TERM)) return 1;
  if ("COLORTERM" in g3) return 1;
  return W
}
// @from(Start 5527314, End 5527422)
function _T1(I, d = {}) {
  let G = YC4(I, {
    streamIsTTY: I && I.isTTY,
    ...d
  });
  return XC4(G)
}
// @from(Start 5527427, End 5527543)
_C4 = {
    stdout: _T1({
      isTTY: YT1.isatty(1)
    }),
    stderr: _T1({
      isTTY: YT1.isatty(2)
    })
  }
// @from(Start 5527547, End 5527556)
DT1 = _C4
// @from(Start 5527559, End 5527788)
function HT1(I, d, G) {
  let Z = I.indexOf(d);
  if (Z === -1) return I;
  let C = d.length,
    W = 0,
    w = "";
  do w += I.slice(W, Z) + d + G, W = Z + C, Z = I.indexOf(d, W); while (Z !== -1);
  return w += I.slice(W), w
}
// @from(Start 5527790, End 5528028)
function FT1(I, d, G, Z) {
  let C = 0,
    W = "";
  do {
    let w = I[Z - 1] === "\r";
    W += I.slice(C, w ? Z - 1 : Z) + d + (w ? `\r
` : `
`) + G, C = Z + 1, Z = I.indexOf(`
`, C)
  } while (Z !== -1);
  return W += I.slice(C), W
}
// @from(Start 5528477, End 5528588)
HC4 = (I) => {
  let d = (...G) => G.join(" ");
  return DC4(d, I), Object.setPrototypeOf(d, QE.prototype), d
}
// @from(Start 5528591, End 5528625)
function QE(I) {
  return HC4(I)
}
// @from(Start 5529031, End 5529355)
H21 = (I, d, G, ...Z) => {
    if (I === "rgb") {
      if (d === "ansi16m") return KC[G].ansi16m(...Z);
      if (d === "ansi256") return KC[G].ansi256(KC.rgbToAnsi256(...Z));
      return KC[G].ansi(KC.rgbToAnsi(...Z))
    }
    if (I === "hex") return H21("rgb", d, G, ...KC.hexToRgb(...Z));
    return KC[G][I](...Z)
  }
// @from(Start 5529359, End 5529390)
FC4 = ["rgb", "hex", "ansi256"]
// @from(Start 5529938, End 5530141)
gC4 = Object.defineProperties(() => {}, {
    ...Vz,
    level: {
      enumerable: !0,
      get() {
        return this[D21].level
      },
      set(I) {
        this[D21].level = I
      }
    }
  })
// @from(Start 5530145, End 5530370)
F21 = (I, d, G) => {
    let Z, C;
    if (G === void 0) Z = I, C = d;
    else Z = G.openAll + I, C = d + G.closeAll;
    return {
      open: I,
      close: d,
      openAll: Z,
      closeAll: C,
      parent: G
    }
  }
// @from(Start 5530374, End 5530547)
cl = (I, d, G) => {
    let Z = (...C) => JC4(Z, C.length === 1 ? "" + C[0] : C.join(" "));
    return Object.setPrototypeOf(Z, gC4), Z[D21] = I, Z[Az] = d, Z[zE] = G, Z
  }
// @from(Start 5530551, End 5530917)
JC4 = (I, d) => {
    if (I.level <= 0 || !d) return I[zE] ? "" : d;
    let G = I[Az];
    if (G === void 0) return d;
    let {
      openAll: Z,
      closeAll: C
    } = G;
    if (d.includes("\x1B"))
      while (G !== void 0) d = HT1(d, G.close, G.open), G = G.parent;
    let W = d.indexOf(`
`);
    if (W !== -1) d = FT1(d, C, Z, W);
    return Z + d + C
  }
// @from(Start 5530966, End 5530976)
KC4 = QE()
// @from(Start 5530980, End 5531026)
dR9 = QE({
    level: JT1 ? JT1.level : 0
  })
// @from(Start 5531032, End 5531040)
j0 = KC4
// @from(Start 5531046, End 5531063)
Rb = J1(em1(), 1)
// @from(Start 5531069, End 5531194)
MB4 = {
    visibilityState: "visible",
    documentElement: {
      lang: "en"
    },
    addEventListener: (I, d) => {}
  }
// @from(Start 5531198, End 5531551)
SB4 = {
    document: MB4,
    location: {
      href: "node://localhost",
      pathname: "/"
    },
    addEventListener: (I, d) => {
      if (I === "beforeunload") process.on("exit", () => {
        if (typeof d === "function") d({});
        else d.handleEvent({})
      })
    },
    focus: () => {},
    innerHeight: 768,
    innerWidth: 1024
  }
// @from(Start 5531555, End 5531735)
LB4 = {
    sendBeacon: (I, d) => {
      return !0
    },
    userAgent: "Mozilla/5.0 (Node.js) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0",
    language: "en-US"
  }
// @from(Start 5532015, End 5532056)
cF = yE.join(yB4(), ".claude", "statsig")
// @from(Start 5532181, End 5533407)
class e21 {
  cache = new Map;
  ready = !1;
  constructor() {
    try {
      if (!NC.existsSync(cF)) NC.mkdirSync(cF, {
        recursive: !0
      });
      let I = NC.readdirSync(cF);
      for (let d of I) {
        let G = decodeURIComponent(d),
          Z = NC.readFileSync(yE.join(cF, d), "utf8");
        this.cache.set(G, Z)
      }
      this.ready = !0
    } catch (I) {
      X0(`Failed to initialize statsig storage: ${I}`), this.ready = !0
    }
  }
  isReady() {
    return this.ready
  }
  isReadyResolver() {
    return this.ready ? Promise.resolve() : null
  }
  getProviderName() {
    return "FileSystemStorageProvider"
  }
  getItem(I) {
    return this.cache.get(I) ?? null
  }
  setItem(I, d) {
    this.cache.set(I, d);
    try {
      let G = encodeURIComponent(I);
      NC.writeFileSync(yE.join(cF, G), d, "utf8")
    } catch (G) {
      X0(`Failed to write statsig storage item: ${G}`)
    }
  }
  removeItem(I) {
    this.cache.delete(I);
    let d = encodeURIComponent(I),
      G = yE.join(cF, d);
    if (!PB4(G)) return;
    try {
      $B4(G)
    } catch (Z) {
      X0(`Failed to remove statsig storage item: ${Z}`)
    }
  }
  getAllKeys() {
    return Array.from(this.cache.keys())
  }
}
// @from(Start 5533412, End 5533506)
tm1 = "https://e531a1d9ec1de9064fae9d4affb0b0f4@o1158394.ingest.us.sentry.io/4508259541909504"
// @from(Start 5533510, End 5533568)
Il1 = "client-RRNS7R65EAtReO5XA4xDC3eU6ZdJQi6lLEP6b5j32Me"
// @from(Start 5533574, End 5533609)
dl1 = "tengu-token-efficient-tools"
// @from(Start 5533613, End 5533653)
Gl1 = "token-efficient-tools-2024-12-11"
// @from(Start 5533657, End 5533691)
Zl1 = "tengu-use-external-updater"
// @from(Start 5533695, End 5533723)
Cl1 = "claude-code-20250219"
// @from(Start 5533729, End 5533851)
fb = a2(async () => {
  let I = [Cl1];
  if (process.env.SWE_BENCH) {
    if (await NY(dl1)) I.push(Gl1)
  }
  return I
})
// @from(Start 5533857, End 5533991)
eG = a2(async () => {
    let {
      code: I
    } = await E5("git", ["rev-parse", "--is-inside-work-tree"]);
    return I === 0
  })
// @from(Start 5533995, End 5534112)
uB4 = async () => {
    let {
      stdout: I
    } = await E5("git", ["rev-parse", "HEAD"]);
    return I.trim()
  }
// @from(Start 5534114, End 5534267)
TB4 = async () => {
    let {
      stdout: I
    } = await E5("git", ["rev-parse", "--abbrev-ref", "HEAD"], void 0, void 0, !1);
    return I.trim()
  }
// @from(Start 5534269, End 5534448)
OB4 = async () => {
    let {
      stdout: I,
      code: d
    } = await E5("git", ["remote", "get-url", "origin"], void 0, void 0, !1);
    return d === 0 ? I.trim() : null
  }
// @from(Start 5534450, End 5534584)
mB4 = async () => {
    let {
      code: I
    } = await E5("git", ["rev-parse", "@{u}"], void 0, void 0, !1);
    return I === 0
  }
// @from(Start 5534586, End 5534740)
lB4 = async () => {
    let {
      stdout: I
    } = await E5("git", ["status", "--porcelain"], void 0, void 0, !1);
    return I.trim().length === 0
  }
// @from(Start 5534742, End 5535014)
async function qb() {
  try {
    let [I, d, G, Z, C] = await Promise.all([uB4(), TB4(), OB4(), mB4(), lB4()]);
    return {
      commitHash: I,
      branchName: d,
      remoteUrl: G,
      isHeadOnRemote: Z,
      isClean: C
    }
  } catch (I) {
    return null
  }
}
// @from(Start 5535019, End 5535061)
b9 = !!process.env.CLAUDE_CODE_USE_BEDROCK
// @from(Start 5535065, End 5535106)
h9 = !!process.env.CLAUDE_CODE_USE_VERTEX
// @from(Start 5535110, End 5535269)
Wl1 = {
    bedrock: "us.anthropic.claude-3-7-sonnet-20250219-v1:0",
    vertex: "claude-3-7-sonnet@20250219",
    firstParty: "claude-3-7-sonnet-20250219"
  }
// @from(Start 5535273, End 5535393)
Rw = b9 ? "us.anthropic.claude-3-5-haiku-20241022-v1:0" : h9 ? "claude-3-5-haiku@20241022" : "claude-3-5-haiku-20241022"
// @from(Start 5535395, End 5535524)
async function bB4() {
  try {
    return await PE("tengu-capable-model-config", Wl1)
  } catch (I) {
    return X0(I), Wl1
  }
}
// @from(Start 5535529, End 5535653)
K6 = a2(async () => {
  let I = await bB4();
  if (b9) return I.bedrock;
  if (h9) return I.vertex;
  return I.firstParty
})
// @from(Start 5535655, End 5535763)
async function t21() {
  return !process.env.ANTHROPIC_MODEL || process.env.ANTHROPIC_MODEL === await K6()
}
// @from(Start 5535765, End 5536073)
function wl1(I) {
  if (I?.startsWith("claude-3-5-haiku")) return process.env.VERTEX_REGION_CLAUDE_3_5_HAIKU;
  else if (I?.startsWith("claude-3-5-sonnet")) return process.env.VERTEX_REGION_CLAUDE_3_5_SONNET;
  else if (I?.startsWith("claude-3-7-sonnet")) return process.env.VERTEX_REGION_CLAUDE_3_7_SONNET
}
// @from(Start 5536078, End 5536086)
Bl1 = {}
// @from(Start 5536090, End 5536099)
$E = null
// @from(Start 5536103, End 5536688)
Uz = a2(async () => {
    if (K2.isCI) return null;
    let I = await Ub(),
      d = {
        networkConfig: {
          api: "https://statsig.anthropic.com/v1/"
        },
        environment: {
          tier: K2.isCI || ["test", "development"].includes("production") ? "dev" : "production"
        },
        logLevel: Rb.LogLevel.None,
        storageProvider: new e21
      };
    return $E = new Rb.StatsigClient(Il1, I, d), $E.on("error", (G) => {
      X0(`Statsig error: ${G}`)
    }), await $E.initializeAsync(), process.on("exit", () => {
      $E?.flush()
    }), $E
  })
// @from(Start 5536691, End 5537599)
function I0(I, d) {
  if (K2.isCI) return;
  Promise.all([Uz(), eG(), fb(), d.model ? Promise.resolve(d.model) : K6()]).then(([G, Z, C, W]) => {
    if (!G) return;
    let w = {
        ...d,
        model: W,
        sessionId: id,
        userType: "external",
        ...{},
        ...C.length > 0 ? {
          betas: C.join(",")
        } : {},
        env: JSON.stringify({
          isGit: Z,
          platform: K2.platform,
          nodeVersion: K2.nodeVersion,
          terminal: K2.terminal,
          version: {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://docs.anthropic.com/s/claude-code",
            VERSION: "0.2.9"
          }.VERSION
        })
      },
      B = {
        eventName: I,
        metadata: w
      };
    G.logEvent(B)
  })
}
// @from(Start 5537604, End 5537747)
NY = a2(async (I) => {
  if (K2.isCI) return !1;
  let d = await Uz();
  if (!d) return !1;
  let G = d.checkGate(I);
  return Bl1[I] = G, G
})
// @from(Start 5537750, End 5537794)
function Al1() {
  return {
    ...Bl1
  }
}
// @from(Start 5537799, End 5538058)
yU9 = a2(async (I, d) => {
    if (K2.isCI) return d;
    let G = await Uz();
    if (!G) return d;
    let Z = G.getExperiment(I);
    if (Object.keys(Z.value).length === 0) return X0(`getExperimentValue got empty value for ${I}`), d;
    return Z.value
  })
// @from(Start 5538062, End 5538317)
PE = async (I, d) => {
    if (K2.isCI) return d;
    let G = await Uz();
    if (!G) return d;
    let Z = G.getDynamicConfig(I);
    if (Object.keys(Z.value).length === 0) return X0(`getDynamicConfig got empty value for ${I}`), d;
    return Z.value
  }
// @from(Start 5538323, End 5538353)
vb = _l1.tmpdir() + "/claude-"
// @from(Start 5538357, End 5538370)
iB4 = 1800000
// @from(Start 5538374, End 5538383)
nB4 = 143
// @from(Start 5538387, End 5538482)
Eb = {
    STATUS: "-status",
    STDOUT: "-stdout",
    STDERR: "-stderr",
    CWD: "-cwd"
  }
// @from(Start 5538486, End 5538550)
rB4 = {
    "/bin/bash": ".bashrc",
    "/bin/zsh": ".zshrc"
  }
// @from(Start 5538552, End 5544305)
class m8 {
  commandQueue = [];
  isExecuting = !1;
  shell;
  isAlive = !0;
  commandInterrupted = !1;
  statusFile;
  stdoutFile;
  stderrFile;
  cwdFile;
  cwd;
  binShell;
  constructor(I) {
    this.binShell = process.env.SHELL || "/bin/bash", this.shell = kB4(this.binShell, ["-l"], {
      stdio: ["pipe", "pipe", "pipe"],
      cwd: I,
      env: {
        ...process.env,
        GIT_EDITOR: "true"
      }
    }), this.cwd = I, this.shell.on("exit", (Z, C) => {
      if (Z) X0(`Shell exited with code ${Z} and signal ${C}`), I0("persistent_shell_exit", {
        code: Z?.toString() || "null",
        signal: C || "null"
      });
      for (let W of [this.statusFile, this.stdoutFile, this.stderrFile, this.cwdFile])
        if (N6.existsSync(W)) N6.unlinkSync(W);
      this.isAlive = !1
    });
    let d = Math.floor(Math.random() * 65536).toString(16).padStart(4, "0");
    this.statusFile = vb + d + Eb.STATUS, this.stdoutFile = vb + d + Eb.STDOUT, this.stderrFile = vb + d + Eb.STDERR, this.cwdFile = vb + d + Eb.CWD;
    for (let Z of [this.statusFile, this.stdoutFile, this.stderrFile]) N6.writeFileSync(Z, "");
    N6.writeFileSync(this.cwdFile, I);
    let G = rB4[this.binShell];
    if (G) {
      let Z = pB4(jB4(), G);
      if (Vl1(Z)) this.sendToShell(`source ${Z}`)
    }
  }
  static instance = null;
  static restart() {
    if (m8.instance) m8.instance.close(), m8.instance = null
  }
  static getInstance() {
    if (!m8.instance || !m8.instance.isAlive) m8.instance = new m8(process.cwd());
    return m8.instance
  }
  killChildren() {
    let I = this.shell.pid;
    try {
      let d = Xl1(`pgrep -P ${I}`).toString().trim().split(`
`).filter(Boolean);
      if (d.length > 0) I0("persistent_shell_command_interrupted", {
        numChildProcesses: d.length.toString()
      });
      d.forEach((G) => {
        try {
          process.kill(Number(G), "SIGTERM")
        } catch (Z) {
          X0(`Failed to kill process ${G}: ${Z}`), I0("persistent_shell_kill_process_error", {
            error: Z.message.substring(0, 10)
          })
        }
      })
    } catch {} finally {
      this.commandInterrupted = !0
    }
  }
  async processQueue() {
    if (this.isExecuting || this.commandQueue.length === 0) return;
    this.isExecuting = !0;
    let {
      command: I,
      abortSignal: d,
      timeout: G,
      resolve: Z,
      reject: C
    } = this.commandQueue.shift(), W = () => this.killChildren();
    if (d) d.addEventListener("abort", W);
    try {
      let w = await this.exec_(I, G);
      Z(w)
    } catch (w) {
      I0("persistent_shell_command_error", {
        error: w.message.substring(0, 10)
      }), C(w)
    } finally {
      if (this.isExecuting = !1, d) d.removeEventListener("abort", W);
      this.processQueue()
    }
  }
  async exec(I, d, G) {
    return new Promise((Z, C) => {
      this.commandQueue.push({
        command: I,
        abortSignal: d,
        timeout: G,
        resolve: Z,
        reject: C
      }), this.processQueue()
    })
  }
  async exec_(I, d) {
    let G = Yl1.default.quote([I]);
    try {
      Xl1(`${this.binShell} -n -c ${G}`, {
        stdio: "ignore",
        timeout: 1000
      })
    } catch (C) {
      let W = typeof C === "string" ? C : String(C || "");
      return I0("persistent_shell_syntax_error", {
        error: W.substring(0, 10)
      }), Promise.resolve({
        stdout: "",
        stderr: W,
        code: 128,
        interrupted: !1
      })
    }
    let Z = d || iB4;
    return this.commandInterrupted = !1, new Promise((C) => {
      N6.writeFileSync(this.stdoutFile, ""), N6.writeFileSync(this.stderrFile, ""), N6.writeFileSync(this.statusFile, "");
      let W = [];
      W.push(`eval ${G} < /dev/null > ${this.stdoutFile} 2> ${this.stderrFile}`), W.push("EXEC_EXIT_CODE=$?"), W.push(`pwd > ${this.cwdFile}`), W.push(`echo $EXEC_EXIT_CODE > ${this.statusFile}`), this.sendToShell(W.join(`
`));
      let w = Date.now(),
        B = setInterval(() => {
          try {
            let A = 0;
            if (N6.existsSync(this.statusFile)) A = N6.statSync(this.statusFile).size;
            if (A > 0 || Date.now() - w > Z || this.commandInterrupted) {
              clearInterval(B);
              let V = N6.existsSync(this.stdoutFile) ? N6.readFileSync(this.stdoutFile, "utf8") : "",
                X = N6.existsSync(this.stderrFile) ? N6.readFileSync(this.stderrFile, "utf8") : "",
                _;
              if (A) _ = Number(N6.readFileSync(this.statusFile, "utf8"));
              else this.killChildren(), _ = nB4, X += (X ? `
` : "") + "Command execution timed out", I0("persistent_shell_command_timeout", {
                command: I.substring(0, 10),
                timeout: Z.toString()
              });
              C({
                stdout: V,
                stderr: X,
                code: _,
                interrupted: this.commandInterrupted
              })
            }
          } catch {}
        }, 10)
    })
  }
  sendToShell(I) {
    try {
      this.shell.stdin.write(I + `
`)
    } catch (d) {
      let G = d instanceof Error ? d.message : String(d || "Unknown error");
      throw X0(`Error in sendToShell: ${G}`), I0("persistent_shell_write_error", {
        error: G.substring(0, 100),
        command: I.substring(0, 30)
      }), d
    }
  }
  pwd() {
    try {
      let I = N6.readFileSync(this.cwdFile, "utf8").trim();
      if (I) this.cwd = I
    } catch (I) {
      X0(`Shell pwd error ${I}`)
    }
    return this.cwd
  }
  async setCwd(I) {
    let d = xB4(I) ? I : cB4(process.cwd(), I);
    if (!Vl1(d)) throw new Error(`Path "${d}" does not exist`);
    await this.exec(`cd ${d}`)
  }
  close() {
    this.shell.stdin.end(), this.shell.kill()
  }
}
// @from(Start 5544310, End 5544340)
sB4 = {
  originalCwd: aB4()
}
// @from(Start 5544342, End 5544401)
async function Uw(I) {
  await m8.getInstance().setCwd(I)
}
// @from(Start 5544403, End 5544445)
function t7() {
  return sB4.originalCwd
}
// @from(Start 5544447, End 5544496)
function R0() {
  return m8.getInstance().pwd()
}
// @from(Start 5544501, End 5544511)
eB4 = 1000
// @from(Start 5544515, End 5544523)
tB4 = 60
// @from(Start 5544526, End 5545262)
function E5(I, d, G, Z = 10 * tB4 * eB4, C = !0) {
  return new Promise((W) => {
    try {
      oB4(I, d, {
        maxBuffer: 1e6,
        signal: G,
        timeout: Z,
        cwd: R0()
      }, (w, B, A) => {
        if (w)
          if (C) {
            let V = typeof w.code === "number" ? w.code : 1;
            W({
              stdout: B || "",
              stderr: A || "",
              code: V
            })
          } else W({
            stdout: "",
            stderr: "",
            code: 1
          });
        else W({
          stdout: B,
          stderr: A,
          code: 0
        })
      })
    } catch (w) {
      X0(w), W({
        stdout: "",
        stderr: "",
        code: 1
      })
    }
  })
}
// @from(Start 5545343, End 5545401)
vz = process.env.CLAUDE_CONFIG_DIR ?? Mb(Dl1(), ".claude")
// @from(Start 5545405, End 5545491)
jA = process.env.CLAUDE_CONFIG_DIR ? Mb(vz, "config.json") : Mb(Dl1(), ".claude.json")
// @from(Start 5545495, End 5545517)
Hl1 = Mb(vz, "memory")
// @from(Start 5545521, End 5545689)
IA4 = a2(async () => {
    let {
      code: I
    } = await E5("test", ["-f", "/.dockerenv"]);
    if (I !== 0) return !1;
    return process.platform === "linux"
  })
// @from(Start 5545693, End 5545972)
dA4 = a2(async () => {
    try {
      let I = new AbortController,
        d = setTimeout(() => I.abort(), 1000);
      return await fetch("http://1.1.1.1", {
        method: "HEAD",
        signal: I.signal
      }), clearTimeout(d), !0
    } catch {
      return !1
    }
  })
// @from(Start 5545976, End 5546252)
K2 = {
    getIsDocker: IA4,
    hasInternetAccess: dA4,
    isCI: Boolean(process.env.CI),
    platform: process.platform === "win32" ? "windows" : process.platform === "darwin" ? "macos" : "linux",
    nodeVersion: process.version,
    terminal: process.env.TERM_PROGRAM
  }
// @from(Start 5546302, End 5546419)
function tG(I) {
  if (!I) return null;
  try {
    return JSON.parse(I)
  } catch (d) {
    return X0(d), null
  }
}
// @from(Start 5546420, End 5546450)
class I41 extends TypeError {}
// @from(Start 5546451, End 5546476)
class Ez extends Error {}
// @from(Start 5546477, End 5546653)
class Mz extends Error {
  filePath;
  defaultConfig;
  constructor(I, d, G) {
    super(I);
    this.name = "ConfigParseError", this.filePath = d, this.defaultConfig = G
  }
}
// @from(Start 5546658, End 5546895)
Jl1 = {
  allowedTools: [],
  context: {},
  history: [],
  dontCrawlDirectory: !1,
  enableArchitectTool: !1,
  mcpContextUris: [],
  mcpServers: {},
  approvedMcprcServers: [],
  rejectedMcprcServers: [],
  hasTrustDialogAccepted: !1
}
// @from(Start 5546898, End 5547002)
function gl1(I) {
  let d = {
    ...Jl1
  };
  if (I === ZA4()) d.dontCrawlDirectory = !0;
  return d
}
// @from(Start 5547004, End 5547104)
function WA4(I) {
  return ["disabled", "enabled", "no_permissions", "not_configured"].includes(I)
}
// @from(Start 5547109, End 5547327)
zC = {
    numStartups: 0,
    autoUpdaterStatus: "not_configured",
    theme: "dark",
    preferredNotifChannel: "iterm2",
    verbose: !1,
    customApiKeyResponses: {
      approved: [],
      rejected: []
    }
  }
// @from(Start 5547331, End 5547552)
uE = ["autoUpdaterStatus", "theme", "hasCompletedOnboarding", "lastOnboardingVersion", "lastReleaseNotesSeen", "verbose", "customApiKeyResponses", "primaryApiKey", "preferredNotifChannel", "shiftEnterKeyBindingInstalled"]
// @from(Start 5547555, End 5547598)
function C41(I) {
  return uE.includes(I)
}
// @from(Start 5547603, End 5547712)
TE = ["dontCrawlDirectory", "enableArchitectTool", "hasTrustDialogAccepted", "hasCompletedProjectOnboarding"]
// @from(Start 5547715, End 5547920)
function Kl1() {
  let I = R0(),
    d = Sz(jA, zC);
  while (!0) {
    if (d.projects?.[I]?.hasTrustDialogAccepted) return !0;
    let Z = Z41(I, "..");
    if (Z === I) break;
    I = Z
  }
  return !1
}
// @from(Start 5547925, End 5547981)
_v9 = {
    ...zC,
    autoUpdaterStatus: "disabled"
  }
// @from(Start 5547985, End 5548007)
Dv9 = {
    ...Jl1
  }
// @from(Start 5548010, End 5548053)
function W41(I) {
  return TE.includes(I)
}
// @from(Start 5548055, End 5548138)
function p4(I) {
  zl1(jA, {
    ...I,
    projects: Sz(jA, zC).projects
  }, zC)
}
// @from(Start 5548140, End 5548177)
function q2() {
  return Sz(jA, zC)
}
// @from(Start 5548179, End 5548232)
function vw() {
  return q2().primaryApiKey ?? null
}
// @from(Start 5548234, End 5548274)
function Sb(I) {
  return I.slice(-20)
}
// @from(Start 5548276, End 5548343)
function Lb() {
  let I = q2();
  return vw() === I.primaryApiKey
}
// @from(Start 5548345, End 5548541)
function Nl1(I) {
  let d = q2();
  if (d.customApiKeyResponses?.approved?.includes(I)) return "approved";
  if (d.customApiKeyResponses?.rejected?.includes(I)) return "rejected";
  return "new"
}
// @from(Start 5548543, End 5548726)
function zl1(I, d, G) {
  let Z = Object.fromEntries(Object.entries(d).filter(([C, W]) => JSON.stringify(W) !== JSON.stringify(G[C])));
  GA4(I, JSON.stringify(Z, null, 2), "utf-8")
}
// @from(Start 5548731, End 5548739)
Ql1 = !1
// @from(Start 5548742, End 5548787)
function fl1() {
  Ql1 = !0, Sz(jA, zC, !0)
}
// @from(Start 5548789, End 5549222)
function Sz(I, d, G) {
  if (!Ql1) throw new Error("Config accessed before allowed.");
  if (!d41(I)) return JE(d);
  try {
    let Z = G41(I, "utf-8");
    try {
      let C = JSON.parse(Z);
      return {
        ...JE(d),
        ...C
      }
    } catch (C) {
      let W = C instanceof Error ? C.message : String(C);
      throw new Mz(W, I, d)
    }
  } catch (Z) {
    if (Z instanceof Mz && G) throw Z;
    return JE(d)
  }
}
// @from(Start 5549224, End 5549447)
function I5() {
  let I = Z41(R0()),
    d = Sz(jA, zC);
  if (!d.projects) return gl1(I);
  let G = d.projects[I] ?? gl1(I);
  if (typeof G.allowedTools === "string") G.allowedTools = tG(G.allowedTools) ?? [];
  return G
}
// @from(Start 5549449, End 5549584)
function o9(I) {
  let d = Sz(jA, zC);
  zl1(jA, {
    ...d,
    projects: {
      ...d.projects,
      [Z41(R0())]: I
    }
  }, zC)
}
// @from(Start 5549585, End 5549673)
async function ql1() {
  return await NY(Zl1) || q2().autoUpdaterStatus === "disabled"
}
// @from(Start 5549678, End 5550127)
OE = a2(() => {
  let I = Fl1(R0(), ".mcprc");
  if (!d41(I)) return {};
  try {
    let d = G41(I, "utf-8"),
      G = tG(d);
    if (G && typeof G === "object") return I0("tengu_mcprc_found", {
      numServers: Object.keys(G).length.toString()
    }), G
  } catch {}
  return {}
}, () => {
  let I = R0(),
    d = Fl1(I, ".mcprc");
  if (d41(d)) try {
    let G = G41(d, "utf-8");
    return `${I}:${G}`
  } catch {
    return I
  }
  return I
})
// @from(Start 5550130, End 5550277)
function yb() {
  let I = q2();
  if (I.userID) return I.userID;
  let d = CA4(32).toString("hex");
  return p4({
    ...I,
    userID: d
  }), d
}
// @from(Start 5550279, End 5550703)
function Rl1(I, d) {
  if (I0("tengu_config_get", {
      key: I,
      global: d?.toString() ?? "false"
    }), d) {
    if (!C41(I)) console.error(`Error: '${I}' is not a valid config key. Valid keys are: ${uE.join(", ")}`), process.exit(1);
    return q2()[I]
  } else {
    if (!W41(I)) console.error(`Error: '${I}' is not a valid config key. Valid keys are: ${TE.join(", ")}`), process.exit(1);
    return I5()[I]
  }
}
// @from(Start 5550705, End 5551482)
function Ul1(I, d, G) {
  if (I0("tengu_config_set", {
      key: I,
      global: G?.toString() ?? "false"
    }), G) {
    if (!C41(I)) console.error(`Error: Cannot set '${I}'. Only these keys can be modified: ${uE.join(", ")}`), process.exit(1);
    if (I === "autoUpdaterStatus" && !WA4(d)) console.error("Error: Invalid value for autoUpdaterStatus. Must be one of: disabled, enabled, no_permissions, not_configured"), process.exit(1);
    let Z = q2();
    p4({
      ...Z,
      [I]: d
    })
  } else {
    if (!W41(I)) console.error(`Error: Cannot set '${I}'. Only these keys can be modified: ${TE.join(", ")}. Did you mean --global?`), process.exit(1);
    let Z = I5();
    o9({
      ...Z,
      [I]: d
    })
  }
  setTimeout(() => {
    process.exit(0)
  }, 100)
}
// @from(Start 5551484, End 5551989)
function vl1(I, d) {
  if (I0("tengu_config_delete", {
      key: I,
      global: d?.toString() ?? "false"
    }), d) {
    if (!C41(I)) console.error(`Error: Cannot delete '${I}'. Only these keys can be modified: ${uE.join(", ")}`), process.exit(1);
    let G = q2();
    delete G[I], p4(G)
  } else {
    if (!W41(I)) console.error(`Error: Cannot delete '${I}'. Only these keys can be modified: ${TE.join(", ")}. Did you mean --global?`), process.exit(1);
    let G = I5();
    delete G[I], o9(G)
  }
}
// @from(Start 5551991, End 5552140)
function El1(I) {
  if (I0("tengu_config_list", {
      global: I?.toString() ?? "false"
    }), I) return Tl(q2(), uE);
  else return Tl(I5(), TE)
}
// @from(Start 5552145, End 5552369)
Ml1 = a2(async () => {
    let I = await E5("git", ["config", "user.email"]);
    if (I.code !== 0) {
      X0(`Failed to get git email: ${I.stdout} ${I.stderr}`);
      return
    }
    return I.stdout.trim() || void 0
  })
// @from(Start 5552373, End 5553062)
Ub = a2(async () => {
    let I = yb(),
      d = q2(),
      G = void 0;
    return {
      customIDs: {
        sessionId: id
      },
      userID: I,
      appVersion: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://docs.anthropic.com/s/claude-code",
        VERSION: "0.2.9"
      }.VERSION,
      userAgent: K2.platform,
      email: void 0,
      custom: {
        nodeVersion: K2.nodeVersion,
        userType: "external",
        organizationUuid: d.oauthAccount?.organizationUuid,
        accountUuid: d.oauthAccount?.accountUuid
      }
    }
  })
// @from(Start 5553065, End 5553644)
function Sl1() {
  sI.init({
    dsn: tm1,
    release: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://docs.anthropic.com/s/claude-code",
      VERSION: "0.2.9"
    }.VERSION,
    integrations: [new sI.Integrations.Http({
      tracing: !0
    }), new sI.Integrations.Modules, new sI.Integrations.Console, new sI.Integrations.FunctionToString, new sI.Integrations.LinkedErrors],
    tracesSampleRate: 1,
    tracePropagationTargets: ["localhost"]
  })
}
// @from(Start 5553645, End 5554370)
async function bl(I) {
  try {
    let [d, G] = await Promise.all([eG(), Ub()]);
    sI.setExtras({
      nodeVersion: K2.nodeVersion,
      platform: K2.platform,
      cwd: R0(),
      isCI: K2.isCI,
      isGit: d,
      isTest: !1,
      packageVersion: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://docs.anthropic.com/s/claude-code",
        VERSION: "0.2.9"
      }.VERSION,
      sessionId: id,
      statsigGates: Al1(),
      terminal: K2.terminal,
      userType: "external"
    }), sI.setUser({
      id: G.userID,
      email: G.email
    }), sI.captureException(I)
  } catch {}
}
// @from(Start 5554375, End 5554393)
K4 = "Claude Code"
// @from(Start 5554399, End 5554407)
Oj1 = {}
// @from(Start 5554413, End 5554421)
Ll1 = !1
// @from(Start 5554425, End 5554436)
pF = void 0
// @from(Start 5554440, End 5554452)
w41 = void 0
// @from(Start 5554456, End 5554468)
wA4 = void 0
// @from(Start 5554472, End 5554484)
BA4 = void 0
// @from(Start 5554488, End 5554500)
AA4 = void 0
// @from(Start 5554504, End 5554516)
yl1 = void 0
// @from(Start 5554520, End 5554532)
VA4 = void 0
// @from(Start 5554536, End 5554547)
Pb = void 0
// @from(Start 5554551, End 5554563)
B41 = void 0
// @from(Start 5554567, End 5554579)
Pl1 = void 0
// @from(Start 5554583, End 5554595)
A41 = void 0
// @from(Start 5554599, End 5554610)
$b = void 0
// @from(Start 5554614, End 5554626)
$l1 = void 0
// @from(Start 5554629, End 5555210)
function ub(I, d = {
  auto: !1
}) {
  if (Ll1) throw new Error(`you must \`import '@anthropic-ai/sdk/shims/${I.kind}'\` before importing anything else from @anthropic-ai/sdk`);
  if (pF) throw new Error(`can't \`import '@anthropic-ai/sdk/shims/${I.kind}'\` after \`import '@anthropic-ai/sdk/shims/${pF}'\``);
  Ll1 = d.auto, pF = I.kind, w41 = I.fetch, wA4 = I.Request, BA4 = I.Response, AA4 = I.Headers, yl1 = I.FormData, VA4 = I.Blob, Pb = I.File, B41 = I.ReadableStream, Pl1 = I.getMultipartRequestOptions, A41 = I.getDefaultAgent, $b = I.fileFromPath, $l1 = I.isFsReadStream
}
// @from(Start 5555215, End 5555232)
TY = J1(f41(), 1)
// @from(Start 5555299, End 5555327)
ih1 = (I) => I instanceof vC
// @from(Start 5555376, End 5555494)
nh1 = WX4(() => {}, 'Constructor "entries" argument is not spec-compliant and will be removed in next major release.')
// @from(Start 5555500, End 5555858)
Lw = function(I, d, G, Z) {
    if (G === "a" && !Z) throw new TypeError("Private accessor was defined without a getter");
    if (typeof d === "function" ? I !== d || !Z : !d.has(I)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return G === "m" ? Z : G === "a" ? Z.call(I) : Z ? Z.value : d.get(I)
  }
// @from(Start 5555862, End 5555864)
zh
// @from(Start 5555866, End 5555868)
yw
// @from(Start 5555870, End 5555873)
G51
// @from(Start 5555875, End 5558366)
class Z51 {
  constructor(I) {
    if (zh.add(this), yw.set(this, new Map), I) nh1(), I.forEach(({
      name: d,
      value: G,
      fileName: Z
    }) => this.append(d, G, Z))
  }
  static[(yw = new WeakMap, zh = new WeakSet, Symbol.hasInstance)](I) {
    return Boolean(I && Z6(I.constructor) && I[Symbol.toStringTag] === "FormData" && Z6(I.append) && Z6(I.set) && Z6(I.get) && Z6(I.getAll) && Z6(I.has) && Z6(I.delete) && Z6(I.entries) && Z6(I.values) && Z6(I.keys) && Z6(I[Symbol.iterator]) && Z6(I.forEach))
  }
  append(I, d, G) {
    Lw(this, zh, "m", G51).call(this, {
      name: I,
      fileName: G,
      append: !0,
      rawValue: d,
      argsLength: arguments.length
    })
  }
  set(I, d, G) {
    Lw(this, zh, "m", G51).call(this, {
      name: I,
      fileName: G,
      append: !1,
      rawValue: d,
      argsLength: arguments.length
    })
  }
  get(I) {
    let d = Lw(this, yw, "f").get(String(I));
    if (!d) return null;
    return d[0]
  }
  getAll(I) {
    let d = Lw(this, yw, "f").get(String(I));
    if (!d) return [];
    return d.slice()
  }
  has(I) {
    return Lw(this, yw, "f").has(String(I))
  }
  delete(I) {
    Lw(this, yw, "f").delete(String(I))
  }* keys() {
    for (let I of Lw(this, yw, "f").keys()) yield I
  }* entries() {
    for (let I of this.keys()) {
      let d = this.getAll(I);
      for (let G of d) yield [I, G]
    }
  }* values() {
    for (let [, I] of this) yield I
  } [(G51 = function I({
    name: d,
    rawValue: G,
    append: Z,
    fileName: C,
    argsLength: W
  }) {
    let w = Z ? "append" : "set";
    if (W < 2) throw new TypeError(`Failed to execute '${w}' on 'FormData': 2 arguments required, but only ${W} present.`);
    d = String(d);
    let B;
    if (I51(G)) B = C === void 0 ? G : new Sw([G], C, {
      type: G.type,
      lastModified: G.lastModified
    });
    else if (ih1(G)) B = new Sw([G], C === void 0 ? "blob" : C, {
      type: G.type
    });
    else if (C) throw new TypeError(`Failed to execute '${w}' on 'FormData': parameter 2 is not of type 'Blob'.`);
    else B = String(G);
    let A = Lw(this, yw, "f").get(d);
    if (!A) return void Lw(this, yw, "f").set(d, [B]);
    if (!Z) return void Lw(this, yw, "f").set(d, [B]);
    A.push(B)
  }, Symbol.iterator)]() {
    return this.entries()
  }
  forEach(I, d) {
    for (let [G, Z] of this) I.call(d, Z, G, this)
  }
  get[Symbol.toStringTag]() {
    return "FormData"
  } [wX4.custom]() {
    return this[Symbol.toStringTag]
  }
}
// @from(Start 5558371, End 5558389)
Q51 = J1(wj1(), 1)
// @from(Start 5558393, End 5558411)
Tj1 = J1(Qj1(), 1)
// @from(Start 5558461, End 5558601)
function $X4() {
  let I = 16,
    d = "";
  while (I--) d += "abcdefghijklmnopqrstuvwxyz0123456789" [Math.random() * 36 << 0];
  return d
}
// @from(Start 5558606, End 5558615)
fj1 = $X4
// @from(Start 5558621, End 5558694)
uX4 = (I) => Object.prototype.toString.call(I).slice(8, -1).toLowerCase()
// @from(Start 5558697, End 5558910)
function TX4(I) {
  if (uX4(I) !== "object") return !1;
  let d = Object.getPrototypeOf(I);
  if (d === null || d === void 0) return !0;
  return (d.constructor && d.constructor.toString()) === Object.toString()
}
// @from(Start 5558915, End 5558924)
H51 = TX4
// @from(Start 5558930, End 5559091)
OX4 = (I) => String(I).replace(/\r|\n/g, (d, G, Z) => {
    if (d === "\r" && Z[G + 1] !== `
` || d === `
` && Z[G - 1] !== "\r") return `\r
`;
    return d
  })
// @from(Start 5559095, End 5559104)
F51 = OX4
// @from(Start 5559110, End 5559197)
mX4 = (I) => String(I).replace(/\r/g, "%0D").replace(/\n/g, "%0A").replace(/"/g, "%22")
// @from(Start 5559201, End 5559210)
g51 = mX4
// @from(Start 5559216, End 5559252)
lX4 = (I) => typeof I === "function"
// @from(Start 5559256, End 5559264)
aA = lX4
// @from(Start 5559270, End 5559452)
wg = (I) => Boolean(I && typeof I === "object" && aA(I.constructor) && I[Symbol.toStringTag] === "File" && aA(I.stream) && I.name != null && I.size != null && I.lastModified != null)
// @from(Start 5559458, End 5559617)
qj1 = (I) => Boolean(I && aA(I.constructor) && I[Symbol.toStringTag] === "FormData" && aA(I.append) && aA(I.getAll) && aA(I.entries) && aA(I[Symbol.iterator]))
// @from(Start 5559623, End 5560054)
CM = function(I, d, G, Z, C) {
    if (Z === "m") throw new TypeError("Private method is not writable");
    if (Z === "a" && !C) throw new TypeError("Private accessor was defined without a setter");
    if (typeof d === "function" ? I !== d || !C : !d.has(I)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return Z === "a" ? C.call(I, G) : C ? C.value = G : d.set(I, G), G
  }
// @from(Start 5560058, End 5560416)
e9 = function(I, d, G, Z) {
    if (G === "a" && !Z) throw new TypeError("Private accessor was defined without a getter");
    if (typeof d === "function" ? I !== d || !Z : !d.has(I)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return G === "m" ? Z : G === "a" ? Z.call(I) : Z ? Z.value : d.get(I)
  }
// @from(Start 5560420, End 5560422)
Sh
// @from(Start 5560424, End 5560426)
uY
// @from(Start 5560428, End 5560430)
WM
// @from(Start 5560432, End 5560434)
Lh
// @from(Start 5560436, End 5560438)
wM
// @from(Start 5560440, End 5560442)
Bg
// @from(Start 5560444, End 5560446)
BM
// @from(Start 5560448, End 5560450)
AM
// @from(Start 5560452, End 5560454)
yh
// @from(Start 5560456, End 5560459)
J51
// @from(Start 5560461, End 5560504)
bX4 = {
    enableAdditionalHeaders: !1
  }
// @from(Start 5560506, End 5563501)
class K51 {
  constructor(I, d, G) {
    if (Sh.add(this), uY.set(this, `\r
`), WM.set(this, void 0), Lh.set(this, void 0), wM.set(this, "-".repeat(2)), Bg.set(this, new TextEncoder), BM.set(this, void 0), AM.set(this, void 0), yh.set(this, void 0), !qj1(I)) throw new TypeError("Expected first argument to be a FormData instance.");
    let Z;
    if (H51(d)) G = d;
    else Z = d;
    if (!Z) Z = fj1();
    if (typeof Z !== "string") throw new TypeError("Expected boundary argument to be a string.");
    if (G && !H51(G)) throw new TypeError("Expected options argument to be an object.");
    CM(this, AM, I, "f"), CM(this, yh, {
      ...bX4,
      ...G
    }, "f"), CM(this, WM, e9(this, Bg, "f").encode(e9(this, uY, "f")), "f"), CM(this, Lh, e9(this, WM, "f").byteLength, "f"), this.boundary = `form-data-boundary-${Z}`, this.contentType = `multipart/form-data; boundary=${this.boundary}`, CM(this, BM, e9(this, Bg, "f").encode(`${e9(this,wM,"f")}${this.boundary}${e9(this,wM,"f")}${e9(this,uY,"f").repeat(2)}`), "f"), this.contentLength = String(this.getContentLength()), this.headers = Object.freeze({
      "Content-Type": this.contentType,
      "Content-Length": this.contentLength
    }), Object.defineProperties(this, {
      boundary: {
        writable: !1,
        configurable: !1
      },
      contentType: {
        writable: !1,
        configurable: !1
      },
      contentLength: {
        writable: !1,
        configurable: !1
      },
      headers: {
        writable: !1,
        configurable: !1
      }
    })
  }
  getContentLength() {
    let I = 0;
    for (let [d, G] of e9(this, AM, "f")) {
      let Z = wg(G) ? G : e9(this, Bg, "f").encode(F51(G));
      I += e9(this, Sh, "m", J51).call(this, d, Z).byteLength, I += wg(Z) ? Z.size : Z.byteLength, I += e9(this, Lh, "f")
    }
    return I + e9(this, BM, "f").byteLength
  }* values() {
    for (let [I, d] of e9(this, AM, "f").entries()) {
      let G = wg(d) ? d : e9(this, Bg, "f").encode(F51(d));
      yield e9(this, Sh, "m", J51).call(this, I, G), yield G, yield e9(this, WM, "f")
    }
    yield e9(this, BM, "f")
  }
  async * encode() {
    for (let I of this.values())
      if (wg(I)) yield* I.stream();
      else yield I
  } [(uY = new WeakMap, WM = new WeakMap, Lh = new WeakMap, wM = new WeakMap, Bg = new WeakMap, BM = new WeakMap, AM = new WeakMap, yh = new WeakMap, Sh = new WeakSet, J51 = function I(d, G) {
    let Z = "";
    if (Z += `${e9(this,wM,"f")}${this.boundary}${e9(this,uY,"f")}`, Z += `Content-Disposition: form-data; name="${g51(d)}"`, wg(G)) Z += `; filename="${g51(G.name)}"${e9(this,uY,"f")}`, Z += `Content-Type: ${G.type||"application/octet-stream"}`;
    if (e9(this, yh, "f").enableAdditionalHeaders === !0) Z += `${e9(this,uY,"f")}Content-Length: ${wg(G)?G.size:G.byteLength}`;
    return e9(this, Bg, "f").encode(`${Z}${e9(this,uY,"f").repeat(2)}`)
  }, Symbol.iterator)]() {
    return this.values()
  } [Symbol.asyncIterator]() {
    return this.encode()
  }
}
// @from(Start 5563551, End 5563666)
class N51 {
  constructor(I) {
    this.body = I
  }
  get[Symbol.toStringTag]() {
    return "MultipartBody"
  }
}
// @from(Start 5563730, End 5563738)
uj1 = !1
// @from(Start 5563740, End 5564002)
async function oX4(I, ...d) {
  let {
    fileFromPath: G
  } = await Promise.resolve().then(() => ($j1(), Pj1));
  if (!uj1) console.warn(`fileFromPath is deprecated; use fs.createReadStream(${JSON.stringify(I)}) instead`), uj1 = !0;
  return await G(I, ...d)
}
// @from(Start 5564007, End 5564074)
eX4 = new Q51.default({
    keepAlive: !0,
    timeout: 300000
  })
// @from(Start 5564078, End 5564156)
tX4 = new Q51.default.HttpsAgent({
    keepAlive: !0,
    timeout: 300000
  })
// @from(Start 5564158, End 5564399)
async function IY4(I, d) {
  let G = new K51(I),
    Z = aX4.from(G),
    C = new N51(Z),
    W = {
      ...d.headers,
      ...G.headers,
      "Content-Length": G.contentLength
    };
  return {
    ...d,
    body: C,
    headers: W
  }
}
// @from(Start 5564401, End 5564886)
function Ph() {
  if (typeof AbortController === "undefined") globalThis.AbortController = Tj1.AbortController;
  return {
    kind: "node",
    fetch: TY.default,
    Request: TY.Request,
    Response: TY.Response,
    Headers: TY.Headers,
    FormData: Z51,
    Blob: vC,
    File: Sw,
    ReadableStream: sX4,
    getMultipartRequestOptions: IY4,
    getDefaultAgent: (I) => I.startsWith("https") ? tX4 : eX4,
    fileFromPath: oX4,
    isFsReadStream: (I) => I instanceof rX4
  }
}
// @from(Start 5564901, End 5564917)
gU = J1(u1(), 1)
// @from(Start 5565105, End 5565122)
fp1 = J1(u1(), 1)
// @from(Start 5565157, End 5566012)
function mj1(I, d, {
  signal: G,
  edges: Z
} = {}) {
  let C = void 0,
    W = null,
    w = Z != null && Z.includes("leading"),
    B = Z == null || Z.includes("trailing"),
    A = () => {
      if (W !== null) I.apply(C, W), C = void 0, W = null
    },
    V = () => {
      if (B) A();
      g()
    },
    X = null,
    _ = () => {
      if (X != null) clearTimeout(X);
      X = setTimeout(() => {
        X = null, V()
      }, d)
    },
    F = () => {
      if (X !== null) clearTimeout(X), X = null
    },
    g = () => {
      F(), C = void 0, W = null
    },
    J = () => {
      F(), A()
    },
    K = function(...Q) {
      if (G?.aborted) return;
      C = this, W = Q;
      let E = X == null;
      if (_(), w && E) A()
    };
  return K.schedule = _, K.cancel = g, K.flush = J, G?.addEventListener("abort", g, {
    once: !0
  }), K
}
// @from(Start 5566014, End 5566735)
function lj1(I, d = 0, G = {}) {
  if (typeof G !== "object") G = {};
  let {
    signal: Z,
    leading: C = !1,
    trailing: W = !0,
    maxWait: w
  } = G, B = Array(2);
  if (C) B[0] = "leading";
  if (W) B[1] = "trailing";
  let A = void 0,
    V = null,
    X = mj1(function(...g) {
      A = I.apply(this, g), V = null
    }, d, {
      signal: Z,
      edges: B
    }),
    _ = function(...g) {
      if (w != null) {
        if (V === null) V = Date.now();
        else if (Date.now() - V >= w) return A = I.apply(this, g), V = Date.now(), X.cancel(), X.schedule(), A
      }
      return X.apply(this, g), A
    },
    F = () => {
      return X.flush(), A
    };
  return _.cancel = X.cancel, _.flush = F, _
}
// @from(Start 5566737, End 5566970)
function $h(I, d = 0, G = {}) {
  if (typeof G !== "object") G = {};
  let {
    leading: Z = !0,
    trailing: C = !0,
    signal: W
  } = G;
  return lj1(I, d, {
    leading: Z,
    trailing: C,
    signal: W,
    maxWait: d
  })
}
// @from(Start 5566975, End 5566982)
OY = {}
// @from(Start 5567849, End 5567892)
uh = globalThis.window?.document !== void 0
// @from(Start 5567896, End 5567947)
oE9 = globalThis.process?.versions?.node !== void 0
// @from(Start 5567951, End 5568001)
eE9 = globalThis.process?.versions?.bun !== void 0
// @from(Start 5568005, End 5568052)
tE9 = globalThis.Deno?.version?.deno !== void 0
// @from(Start 5568056, End 5568111)
IM9 = globalThis.process?.versions?.electron !== void 0
// @from(Start 5568115, End 5568178)
dM9 = globalThis.navigator?.userAgent?.includes("jsdom") === !0
// @from(Start 5568182, End 5568271)
GM9 = typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope
// @from(Start 5568275, End 5568382)
ZM9 = typeof DedicatedWorkerGlobalScope !== "undefined" && globalThis instanceof DedicatedWorkerGlobalScope
// @from(Start 5568386, End 5568487)
CM9 = typeof SharedWorkerGlobalScope !== "undefined" && globalThis instanceof SharedWorkerGlobalScope
// @from(Start 5568491, End 5568594)
WM9 = typeof ServiceWorkerGlobalScope !== "undefined" && globalThis instanceof ServiceWorkerGlobalScope
// @from(Start 5568598, End 5568648)
XM = globalThis.navigator?.userAgentData?.platform
// @from(Start 5568652, End 5568827)
wM9 = XM === "macOS" || globalThis.navigator?.platform === "MacIntel" || globalThis.navigator?.userAgent?.includes(" Mac ") === !0 || globalThis.process?.platform === "darwin"
// @from(Start 5568831, End 5568943)
BM9 = XM === "Windows" || globalThis.navigator?.platform === "Win32" || globalThis.process?.platform === "win32"
// @from(Start 5568947, End 5569136)
AM9 = XM === "Linux" || globalThis.navigator?.platform?.startsWith("Linux") === !0 || globalThis.navigator?.userAgent?.includes(" Linux ") === !0 || globalThis.process?.platform === "linux"
// @from(Start 5569140, End 5569310)
VM9 = XM === "iOS" || globalThis.navigator?.platform === "MacIntel" && globalThis.navigator?.maxTouchPoints > 1 || /iPad|iPhone|iPod/.test(globalThis.navigator?.platform)
// @from(Start 5569314, End 5569495)
XM9 = XM === "Android" || globalThis.navigator?.platform === "Android" || globalThis.navigator?.userAgent?.includes(" Android ") === !0 || globalThis.process?.platform === "android"
// @from(Start 5569501, End 5569513)
$5 = "\x1B["
// @from(Start 5569517, End 5569529)
_M = "\x1B]"
// @from(Start 5569533, End 5569544)
az = "\x07"
// @from(Start 5569548, End 5569556)
YM = ";"
// @from(Start 5569560, End 5569614)
bj1 = !uh && q51.env.TERM_PROGRAM === "Apple_Terminal"
// @from(Start 5569618, End 5569655)
dY4 = !uh && q51.platform === "win32"
// @from(Start 5569659, End 5569770)
GY4 = uh ? () => {
    throw new Error("`process.cwd()` only works in Node.js, not the browser.")
  } : q51.cwd
// @from(Start 5569774, End 5569982)
ZY4 = (I, d) => {
    if (typeof I !== "number") throw new TypeError("The `x` argument is required");
    if (typeof d !== "number") return $5 + (I + 1) + "G";
    return $5 + (d + 1) + YM + (I + 1) + "H"
  }
// @from(Start 5569986, End 5570268)
CY4 = (I, d) => {
    if (typeof I !== "number") throw new TypeError("The `x` argument is required");
    let G = "";
    if (I < 0) G += $5 + -I + "D";
    else if (I > 0) G += $5 + I + "C";
    if (d < 0) G += $5 + -d + "A";
    else if (d > 0) G += $5 + d + "B";
    return G
  }
// @from(Start 5570272, End 5570301)
hj1 = (I = 1) => $5 + I + "A"
// @from(Start 5570305, End 5570334)
WY4 = (I = 1) => $5 + I + "B"
// @from(Start 5570338, End 5570367)
wY4 = (I = 1) => $5 + I + "C"
// @from(Start 5570371, End 5570400)
BY4 = (I = 1) => $5 + I + "D"
// @from(Start 5570404, End 5570418)
jj1 = $5 + "G"
// @from(Start 5570422, End 5570452)
AY4 = bj1 ? "\x1B7" : $5 + "s"
// @from(Start 5570456, End 5570486)
VY4 = bj1 ? "\x1B8" : $5 + "u"
// @from(Start 5570490, End 5570505)
XY4 = $5 + "6n"
// @from(Start 5570509, End 5570523)
YY4 = $5 + "E"
// @from(Start 5570527, End 5570541)
_Y4 = $5 + "F"
// @from(Start 5570545, End 5570562)
DY4 = $5 + "?25l"
// @from(Start 5570566, End 5570583)
R51 = $5 + "?25h"
// @from(Start 5570587, End 5570724)
HY4 = (I) => {
    let d = "";
    for (let G = 0; G < I; G++) d += kj1 + (G < I - 1 ? hj1() : "");
    if (I) d += jj1;
    return d
  }
// @from(Start 5570728, End 5570742)
FY4 = $5 + "K"
// @from(Start 5570746, End 5570761)
gY4 = $5 + "1K"
// @from(Start 5570765, End 5570780)
kj1 = $5 + "2K"
// @from(Start 5570784, End 5570798)
JY4 = $5 + "J"
// @from(Start 5570802, End 5570817)
KY4 = $5 + "1J"
// @from(Start 5570821, End 5570836)
f51 = $5 + "2J"
// @from(Start 5570840, End 5570854)
NY4 = $5 + "S"
// @from(Start 5570858, End 5570872)
zY4 = $5 + "T"
// @from(Start 5570876, End 5570889)
QY4 = "\x1Bc"
// @from(Start 5570893, End 5570944)
fY4 = dY4 ? `${f51}${$5}0f` : `${f51}${$5}3J${$5}H`
// @from(Start 5570948, End 5570967)
qY4 = $5 + "?1049h"
// @from(Start 5570971, End 5570990)
RY4 = $5 + "?1049l"
// @from(Start 5570994, End 5571002)
UY4 = az
// @from(Start 5571006, End 5571079)
vY4 = (I, d) => [_M, "8", YM, YM, d, az, I, _M, "8", YM, YM, az].join("")
// @from(Start 5571083, End 5571366)
EY4 = (I, d = {}) => {
    let G = `${_M}1337;File=inline=1`;
    if (d.width) G += `;width=${d.width}`;
    if (d.height) G += `;height=${d.height}`;
    if (d.preserveAspectRatio === !1) G += ";preserveAspectRatio=0";
    return G + ":" + Buffer.from(I).toString("base64") + az
  }
// @from(Start 5571370, End 5571912)
MY4 = {
    setCwd: (I = GY4()) => `${_M}50;CurrentDir=${I}${az}`,
    annotation(I, d = {}) {
      let G = `${_M}1337;`,
        Z = d.x !== void 0,
        C = d.y !== void 0;
      if ((Z || C) && !(Z && C && d.length !== void 0)) throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
      if (I = I.replaceAll("|", ""), G += d.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", d.length > 0) G += (Z ? [I, d.length, d.x, d.y] : [d.length, I]).join("|");
      else G += I;
      return G + az
    }
  }
// @from(Start 5571962, End 5572108)
SY4 = DM.CI !== "0" && DM.CI !== "false" && (("CI" in DM) || ("CONTINUOUS_INTEGRATION" in DM) || Object.keys(DM).some((I) => I.startsWith("CI_")))
// @from(Start 5572112, End 5572120)
Vg = SY4
// @from(Start 5572126, End 5572297)
LY4 = (I) => {
  let d = new Set;
  do
    for (let G of Reflect.ownKeys(I)) d.add([I, G]); while ((I = Reflect.getPrototypeOf(I)) && I !== Object.prototype);
  return d
}
// @from(Start 5572300, End 5572749)
function U51(I, {
  include: d,
  exclude: G
} = {}) {
  let Z = (C) => {
    let W = (w) => typeof w === "string" ? C === w : w.test(C);
    if (d) return d.some(W);
    if (G) return !G.some(W);
    return !0
  };
  for (let [C, W] of LY4(I.constructor.prototype)) {
    if (W === "constructor" || !Z(W)) continue;
    let w = Reflect.getOwnPropertyDescriptor(C, W);
    if (w && typeof w.value === "function") I[W] = I[W].bind(I)
  }
  return I
}
// @from(Start 5572754, End 5572772)
qp1 = J1(rj1(), 1)
// @from(Start 5572830, End 5573014)
sj1 = ["assert", "count", "countReset", "debug", "dir", "dirxml", "error", "group", "groupCollapsed", "groupEnd", "info", "log", "table", "time", "timeEnd", "timeLog", "trace", "warn"]
// @from(Start 5573018, End 5573026)
M51 = {}
// @from(Start 5573030, End 5573374)
yY4 = (I) => {
    let d = new aj1,
      G = new aj1;
    d.write = (C) => {
      I("stdout", C)
    }, G.write = (C) => {
      I("stderr", C)
    };
    let Z = new console.Console(d, G);
    for (let C of sj1) M51[C] = console[C], console[C] = Z[C];
    return () => {
      for (let C of sj1) console[C] = M51[C];
      M51 = {}
    }
  }
// @from(Start 5573378, End 5573387)
oj1 = yY4
// @from(Start 5573393, End 5573411)
fc1 = J1(Vk1(), 1)
// @from(Start 5573449, End 5573457)
b51 = 16
// @from(Start 5573463, End 5573470)
I2 = {}
// @from(Start 5573474, End 5573496)
ch = I2.ALIGN_AUTO = 0
// @from(Start 5573500, End 5573528)
KM = I2.ALIGN_FLEX_START = 1
// @from(Start 5573532, End 5573556)
NM = I2.ALIGN_CENTER = 2
// @from(Start 5573560, End 5573586)
zM = I2.ALIGN_FLEX_END = 3
// @from(Start 5573590, End 5573615)
ph = I2.ALIGN_STRETCH = 4
// @from(Start 5573619, End 5573646)
Xk1 = I2.ALIGN_BASELINE = 5
// @from(Start 5573650, End 5573682)
Yk1 = I2.ALIGN_SPACE_BETWEEN = 6
// @from(Start 5573686, End 5573717)
_k1 = I2.ALIGN_SPACE_AROUND = 7
// @from(Start 5573721, End 5573749)
Dk1 = I2.DIMENSION_WIDTH = 0
// @from(Start 5573753, End 5573782)
Hk1 = I2.DIMENSION_HEIGHT = 1
// @from(Start 5573786, End 5573816)
Fk1 = I2.DIRECTION_INHERIT = 0
// @from(Start 5573820, End 5573846)
gk1 = I2.DIRECTION_LTR = 1
// @from(Start 5573850, End 5573876)
Jk1 = I2.DIRECTION_RTL = 2
// @from(Start 5573880, End 5573904)
IQ = I2.DISPLAY_FLEX = 0
// @from(Start 5573908, End 5573932)
lY = I2.DISPLAY_NONE = 1
// @from(Start 5573936, End 5573957)
uw = I2.EDGE_LEFT = 0
// @from(Start 5573961, End 5573981)
bY = I2.EDGE_TOP = 1
// @from(Start 5573985, End 5574007)
Tw = I2.EDGE_RIGHT = 2
// @from(Start 5574011, End 5574034)
hY = I2.EDGE_BOTTOM = 3
// @from(Start 5574038, End 5574060)
ih = I2.EDGE_START = 4
// @from(Start 5574064, End 5574084)
nh = I2.EDGE_END = 5
// @from(Start 5574088, End 5574115)
QM = I2.EDGE_HORIZONTAL = 6
// @from(Start 5574119, End 5574144)
fM = I2.EDGE_VERTICAL = 7
// @from(Start 5574148, End 5574168)
qM = I2.EDGE_ALL = 8
// @from(Start 5574172, End 5574220)
Kk1 = I2.EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS = 0
// @from(Start 5574224, End 5574298)
Nk1 = I2.EXPERIMENTAL_FEATURE_ABSOLUTE_PERCENTAGE_AGAINST_PADDING_EDGE = 1
// @from(Start 5574302, End 5574371)
zk1 = I2.EXPERIMENTAL_FEATURE_FIX_ABSOLUTE_TRAILING_COLUMN_MARGIN = 2
// @from(Start 5574375, End 5574408)
rh = I2.FLEX_DIRECTION_COLUMN = 0
// @from(Start 5574412, End 5574453)
ah = I2.FLEX_DIRECTION_COLUMN_REVERSE = 1
// @from(Start 5574457, End 5574487)
sh = I2.FLEX_DIRECTION_ROW = 2
// @from(Start 5574491, End 5574529)
oh = I2.FLEX_DIRECTION_ROW_REVERSE = 3
// @from(Start 5574533, End 5574558)
eh = I2.GUTTER_COLUMN = 0
// @from(Start 5574562, End 5574584)
th = I2.GUTTER_ROW = 1
// @from(Start 5574588, End 5574610)
Ij = I2.GUTTER_ALL = 2
// @from(Start 5574614, End 5574644)
dj = I2.JUSTIFY_FLEX_START = 0
// @from(Start 5574648, End 5574674)
Gj = I2.JUSTIFY_CENTER = 1
// @from(Start 5574678, End 5574706)
Zj = I2.JUSTIFY_FLEX_END = 2
// @from(Start 5574710, End 5574743)
Cj = I2.JUSTIFY_SPACE_BETWEEN = 3
// @from(Start 5574747, End 5574779)
Wj = I2.JUSTIFY_SPACE_AROUND = 4
// @from(Start 5574783, End 5574815)
wj = I2.JUSTIFY_SPACE_EVENLY = 5
// @from(Start 5574819, End 5574847)
Qk1 = I2.LOG_LEVEL_ERROR = 0
// @from(Start 5574851, End 5574878)
fk1 = I2.LOG_LEVEL_WARN = 1
// @from(Start 5574882, End 5574909)
qk1 = I2.LOG_LEVEL_INFO = 2
// @from(Start 5574913, End 5574941)
Rk1 = I2.LOG_LEVEL_DEBUG = 3
// @from(Start 5574945, End 5574975)
Uk1 = I2.LOG_LEVEL_VERBOSE = 4
// @from(Start 5574979, End 5575007)
vk1 = I2.LOG_LEVEL_FATAL = 5
// @from(Start 5575011, End 5575046)
Ek1 = I2.MEASURE_MODE_UNDEFINED = 0
// @from(Start 5575050, End 5575083)
Mk1 = I2.MEASURE_MODE_EXACTLY = 1
// @from(Start 5575087, End 5575120)
Sk1 = I2.MEASURE_MODE_AT_MOST = 2
// @from(Start 5575124, End 5575154)
Lk1 = I2.NODE_TYPE_DEFAULT = 0
// @from(Start 5575158, End 5575185)
yk1 = I2.NODE_TYPE_TEXT = 1
// @from(Start 5575189, End 5575218)
Pk1 = I2.OVERFLOW_VISIBLE = 0
// @from(Start 5575222, End 5575250)
$k1 = I2.OVERFLOW_HIDDEN = 1
// @from(Start 5575254, End 5575282)
uk1 = I2.OVERFLOW_SCROLL = 2
// @from(Start 5575286, End 5575319)
Tk1 = I2.POSITION_TYPE_STATIC = 0
// @from(Start 5575323, End 5575357)
Bj = I2.POSITION_TYPE_RELATIVE = 1
// @from(Start 5575361, End 5575395)
Aj = I2.POSITION_TYPE_ABSOLUTE = 2
// @from(Start 5575399, End 5575432)
Ok1 = I2.PRINT_OPTIONS_LAYOUT = 1
// @from(Start 5575436, End 5575468)
mk1 = I2.PRINT_OPTIONS_STYLE = 2
// @from(Start 5575472, End 5575507)
lk1 = I2.PRINT_OPTIONS_CHILDREN = 4
// @from(Start 5575511, End 5575538)
bk1 = I2.UNIT_UNDEFINED = 0
// @from(Start 5575542, End 5575565)
hk1 = I2.UNIT_POINT = 1
// @from(Start 5575569, End 5575594)
jk1 = I2.UNIT_PERCENT = 2
// @from(Start 5575598, End 5575620)
kk1 = I2.UNIT_AUTO = 3
// @from(Start 5575624, End 5575648)
Vj = I2.WRAP_NO_WRAP = 0
// @from(Start 5575652, End 5575673)
Xj = I2.WRAP_WRAP = 1
// @from(Start 5575677, End 5575706)
Yj = I2.WRAP_WRAP_REVERSE = 2
// @from(Start 5575712, End 5577895)
xk1 = (I) => {
  function d(C, W, w) {
    let B = C[W];
    C[W] = function(...A) {
      return w.call(this, B, ...A)
    }
  }
  for (let C of ["setPosition", "setMargin", "setFlexBasis", "setWidth", "setHeight", "setMinWidth", "setMinHeight", "setMaxWidth", "setMaxHeight", "setPadding"]) {
    let W = {
      [I2.UNIT_POINT]: I.Node.prototype[C],
      [I2.UNIT_PERCENT]: I.Node.prototype[`${C}Percent`],
      [I2.UNIT_AUTO]: I.Node.prototype[`${C}Auto`]
    };
    d(I.Node.prototype, C, function(w, ...B) {
      let A, V, X = B.pop();
      if (X === "auto") A = I2.UNIT_AUTO, V = void 0;
      else if (typeof X == "object") A = X.unit, V = X.valueOf();
      else if (A = typeof X == "string" && X.endsWith("%") ? I2.UNIT_PERCENT : I2.UNIT_POINT, V = parseFloat(X), !Number.isNaN(X) && Number.isNaN(V)) throw Error(`Invalid value ${X} for ${C}`);
      if (!W[A]) throw Error(`Failed to execute "${C}": Unsupported unit '${X}'`);
      return V !== void 0 ? W[A].call(this, ...B, V) : W[A].call(this, ...B)
    })
  }

  function G(C) {
    return I.MeasureCallback.implement({
      measure: (...W) => {
        let {
          width: w,
          height: B
        } = C(...W);
        return {
          width: w ?? NaN,
          height: B ?? NaN
        }
      }
    })
  }

  function Z(C) {
    return I.DirtiedCallback.implement({
      dirtied: C
    })
  }
  return d(I.Node.prototype, "setMeasureFunc", function(C, W) {
    return W ? C.call(this, G(W)) : this.unsetMeasureFunc()
  }), d(I.Node.prototype, "setDirtiedFunc", function(C, W) {
    C.call(this, Z(W))
  }), d(I.Config.prototype, "free", function() {
    I.Config.destroy(this)
  }), d(I.Node, "create", (C, W) => W ? I.Node.createWithConfig(W) : I.Node.createDefault()), d(I.Node.prototype, "free", function() {
    I.Node.destroy(this)
  }), d(I.Node.prototype, "freeRecursive", function() {
    for (let C = 0, W = this.getChildCount(); C < W; ++C) this.getChild(0).freeRecursive();
    this.free()
  }), d(I.Node.prototype, "calculateLayout", function(C, W = NaN, w = NaN, B = I2.DIRECTION_LTR) {
    return C.call(this, W, w, B)
  }), {
    Config: I.Config,
    Node: I.Node,
    ...I2
  }
}