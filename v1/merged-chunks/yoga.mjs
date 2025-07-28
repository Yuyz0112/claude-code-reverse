
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
// @from(Start 5577901, End 5615892)
eY4 = (() => {
  var I = typeof document != "undefined" && document.currentScript ? document.currentScript.src : void 0;
  return function(d = {}) {
    A || (A = d !== void 0 ? d : {}), A.ready = new Promise(function(d1, o) {
      V = d1, X = o
    });
    var G, Z, C = Object.assign({}, A),
      W = "";
    typeof document != "undefined" && document.currentScript && (W = document.currentScript.src), I && (W = I), W = W.indexOf("blob:") !== 0 ? W.substr(0, W.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "";
    var w = console.log.bind(console),
      B = console.warn.bind(console);
    Object.assign(A, C), C = null, typeof WebAssembly != "object" && f1("no native wasm support detected");
    var A, V, X, _, F = !1;

    function g(d1, o, S1) {
      S1 = o + S1;
      for (var p1 = ""; !(o >= S1);) {
        var l1 = d1[o++];
        if (!l1) break;
        if (128 & l1) {
          var s1 = 63 & d1[o++];
          if ((224 & l1) == 192) p1 += String.fromCharCode((31 & l1) << 6 | s1);
          else {
            var U0 = 63 & d1[o++];
            65536 > (l1 = (240 & l1) == 224 ? (15 & l1) << 12 | s1 << 6 | U0 : (7 & l1) << 18 | s1 << 12 | U0 << 6 | 63 & d1[o++]) ? p1 += String.fromCharCode(l1) : (l1 -= 65536, p1 += String.fromCharCode(55296 | l1 >> 10, 56320 | 1023 & l1))
          }
        } else p1 += String.fromCharCode(l1)
      }
      return p1
    }

    function J() {
      var d1 = _.buffer;
      A.HEAP8 = K = new Int8Array(d1), A.HEAP16 = E = new Int16Array(d1), A.HEAP32 = P = new Int32Array(d1), A.HEAPU8 = Q = new Uint8Array(d1), A.HEAPU16 = S = new Uint16Array(d1), A.HEAPU32 = $ = new Uint32Array(d1), A.HEAPF32 = h = new Float32Array(d1), A.HEAPF64 = O = new Float64Array(d1)
    }
    var K, Q, E, S, P, $, h, O, T, V1 = [],
      c = [],
      c1 = [],
      o1 = 0,
      a1 = null;

    function f1(d1) {
      throw B(d1 = "Aborted(" + d1 + ")"), F = !0, X(d1 = new WebAssembly.RuntimeError(d1 + ". Build with -sASSERTIONS for more info.")), d1
    }

    function r() {
      return G.startsWith("data:application/octet-stream;base64,")
    }

    function A1() {
      try {
        throw "both async and sync fetching of the wasm failed"
      } catch (d1) {
        f1(d1)
      }
    }

    function m1(d1) {
      for (; 0 < d1.length;) d1.shift()(A)
    }

    function T1(d1) {
      if (d1 === void 0) return "_unknown";
      var o = (d1 = d1.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
      return 48 <= o && 57 >= o ? "_" + d1 : d1
    }

    function e1(d1, o) {
      return d1 = T1(d1),
        function() {
          return o.apply(this, arguments)
        }
    }
    G = "yoga.wasm", r() || (G = W + G);
    var F0 = [{}, {
        value: void 0
      }, {
        value: null
      }, {
        value: !0
      }, {
        value: !1
      }],
      P0 = [];

    function B0(d1) {
      var o = Error,
        S1 = e1(d1, function(p1) {
          this.name = d1, this.message = p1, (p1 = Error(p1).stack) !== void 0 && (this.stack = this.toString() + `
` + p1.replace(/^Error(:[^\n]*)?\n/, ""))
        });
      return S1.prototype = Object.create(o.prototype), S1.prototype.constructor = S1, S1.prototype.toString = function() {
        return this.message === void 0 ? this.name : this.name + ": " + this.message
      }, S1
    }
    var a0 = void 0;

    function e(d1) {
      throw new a0(d1)
    }
    var G0 = (d1) => (d1 || e("Cannot use deleted val. handle = " + d1), F0[d1].value),
      H1 = (d1) => {
        switch (d1) {
          case void 0:
            return 1;
          case null:
            return 2;
          case !0:
            return 3;
          case !1:
            return 4;
          default:
            var o = P0.length ? P0.pop() : F0.length;
            return F0[o] = {
              fa: 1,
              value: d1
            }, o
        }
      },
      j1 = void 0,
      i1 = void 0;

    function E0(d1) {
      for (var o = ""; Q[d1];) o += i1[Q[d1++]];
      return o
    }
    var k = [];

    function a() {
      for (; k.length;) {
        var d1 = k.pop();
        d1.L.Z = !1, d1.delete()
      }
    }
    var Z1 = void 0,
      Q1 = {};

    function N1(d1, o) {
      for (o === void 0 && e("ptr should not be undefined"); d1.P;) o = d1.aa(o), d1 = d1.P;
      return o
    }
    var F1 = {};

    function O1(d1) {
      var o = E0(d1 = TW(d1));
      return _7(d1), o
    }

    function K1(d1, o) {
      var S1 = F1[d1];
      return S1 === void 0 && e(o + " has unknown type " + O1(d1)), S1
    }

    function R1() {}
    var h1 = !1;

    function j(d1) {
      --d1.count.value, d1.count.value === 0 && (d1.S ? d1.T.V(d1.S) : d1.O.M.V(d1.N))
    }
    var W1 = {},
      U1 = void 0;

    function L1(d1) {
      throw new U1(d1)
    }

    function D0(d1, o) {
      return o.O && o.N || L1("makeClassHandle requires ptr and ptrType"), !!o.T != !!o.S && L1("Both smartPtrType and smartPtr must be specified"), o.count = {
        value: 1
      }, O0(Object.create(d1, {
        L: {
          value: o
        }
      }))
    }

    function O0(d1) {
      return typeof FinalizationRegistry == "undefined" ? (O0 = (o) => o, d1) : (h1 = new FinalizationRegistry((o) => {
        j(o.L)
      }), O0 = (o) => {
        var S1 = o.L;
        return S1.S && h1.register(o, {
          L: S1
        }, o), o
      }, R1 = (o) => {
        h1.unregister(o)
      }, O0(d1))
    }
    var x0 = {};

    function i0(d1) {
      for (; d1.length;) {
        var o = d1.pop();
        d1.pop()(o)
      }
    }

    function s0(d1) {
      return this.fromWireType(P[d1 >> 2])
    }
    var P2 = {},
      r5 = {};

    function n0(d1, o, S1) {
      function p1(w0) {
        (w0 = S1(w0)).length !== d1.length && L1("Mismatched type converter count");
        for (var J0 = 0; J0 < d1.length; ++J0) A2(d1[J0], w0[J0])
      }
      d1.forEach(function(w0) {
        r5[w0] = o
      });
      var l1 = Array(o.length),
        s1 = [],
        U0 = 0;
      o.forEach((w0, J0) => {
        F1.hasOwnProperty(w0) ? l1[J0] = F1[w0] : (s1.push(w0), P2.hasOwnProperty(w0) || (P2[w0] = []), P2[w0].push(() => {
          l1[J0] = F1[w0], ++U0 === s1.length && p1(l1)
        }))
      }), s1.length === 0 && p1(l1)
    }

    function B2(d1) {
      switch (d1) {
        case 1:
          return 0;
        case 2:
          return 1;
        case 4:
          return 2;
        case 8:
          return 3;
        default:
          throw TypeError("Unknown type size: " + d1)
      }
    }

    function A2(d1, o, S1 = {}) {
      if (!("argPackAdvance" in o)) throw TypeError("registerType registeredInstance requires argPackAdvance");
      var p1 = o.name;
      if (d1 || e('type "' + p1 + '" must have a positive integer typeid pointer'), F1.hasOwnProperty(d1)) {
        if (S1.ta) return;
        e("Cannot register type '" + p1 + "' twice")
      }
      F1[d1] = o, delete r5[d1], P2.hasOwnProperty(d1) && (o = P2[d1], delete P2[d1], o.forEach((l1) => l1()))
    }

    function B4(d1) {
      e(d1.L.O.M.name + " instance already deleted")
    }

    function A4() {}

    function _5(d1, o, S1) {
      if (d1[o].R === void 0) {
        var p1 = d1[o];
        d1[o] = function() {
          return d1[o].R.hasOwnProperty(arguments.length) || e("Function '" + S1 + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + d1[o].R + ")!"), d1[o].R[arguments.length].apply(this, arguments)
        }, d1[o].R = [], d1[o].R[p1.Y] = p1
      }
    }

    function D5(d1, o, S1, p1, l1, s1, U0, w0) {
      this.name = d1, this.constructor = o, this.W = S1, this.V = p1, this.P = l1, this.oa = s1, this.aa = U0, this.ma = w0, this.ia = []
    }

    function tZ(d1, o, S1) {
      for (; o !== S1;) o.aa || e("Expected null or instance of " + S1.name + ", got an instance of " + o.name), d1 = o.aa(d1), o = o.P;
      return d1
    }

    function T6(d1, o) {
      return o === null ? (this.da && e("null is not a valid " + this.name), 0) : (o.L || e('Cannot pass "' + vI(o) + '" as a ' + this.name), o.L.N || e("Cannot pass deleted object as a pointer of type " + this.name), tZ(o.L.N, o.L.O.M, this.M))
    }

    function pB(d1, o) {
      if (o === null) {
        if (this.da && e("null is not a valid " + this.name), this.ca) {
          var S1 = this.ea();
          return d1 !== null && d1.push(this.V, S1), S1
        }
        return 0
      }
      if (o.L || e('Cannot pass "' + vI(o) + '" as a ' + this.name), o.L.N || e("Cannot pass deleted object as a pointer of type " + this.name), !this.ba && o.L.O.ba && e("Cannot convert argument of type " + (o.L.T ? o.L.T.name : o.L.O.name) + " to parameter type " + this.name), S1 = tZ(o.L.N, o.L.O.M, this.M), this.ca) switch (o.L.S === void 0 && e("Passing raw pointer to smart pointer is illegal"), this.Aa) {
        case 0:
          o.L.T === this ? S1 = o.L.S : e("Cannot convert argument of type " + (o.L.T ? o.L.T.name : o.L.O.name) + " to parameter type " + this.name);
          break;
        case 1:
          S1 = o.L.S;
          break;
        case 2:
          if (o.L.T === this) S1 = o.L.S;
          else {
            var p1 = o.clone();
            S1 = this.wa(S1, H1(function() {
              p1.delete()
            })), d1 !== null && d1.push(this.V, S1)
          }
          break;
        default:
          e("Unsupporting sharing policy")
      }
      return S1
    }

    function iB(d1, o) {
      return o === null ? (this.da && e("null is not a valid " + this.name), 0) : (o.L || e('Cannot pass "' + vI(o) + '" as a ' + this.name), o.L.N || e("Cannot pass deleted object as a pointer of type " + this.name), o.L.O.ba && e("Cannot convert argument of type " + o.L.O.name + " to parameter type " + this.name), tZ(o.L.N, o.L.O.M, this.M))
    }

    function X3(d1, o, S1, p1) {
      this.name = d1, this.M = o, this.da = S1, this.ba = p1, this.ca = !1, this.V = this.wa = this.ea = this.ja = this.Aa = this.va = void 0, o.P !== void 0 ? this.toWireType = pB : (this.toWireType = p1 ? T6 : iB, this.U = null)
    }
    var Nd = [];

    function IC(d1) {
      var o = Nd[d1];
      return o || (d1 >= Nd.length && (Nd.length = d1 + 1), Nd[d1] = o = T.get(d1)), o
    }

    function Y3(d1, o) {
      var S1, p1, l1 = (d1 = E0(d1)).includes("j") ? (S1 = d1, p1 = [], function() {
        if (p1.length = 0, Object.assign(p1, arguments), S1.includes("j")) {
          var s1 = A["dynCall_" + S1];
          s1 = p1 && p1.length ? s1.apply(null, [o].concat(p1)) : s1.call(null, o)
        } else s1 = IC(o).apply(null, p1);
        return s1
      }) : IC(o);
      return typeof l1 != "function" && e("unknown function pointer with signature " + d1 + ": " + o), l1
    }
    var zd = void 0;

    function Qd(d1, o) {
      var S1 = [],
        p1 = {};
      throw o.forEach(function l1(s1) {
        p1[s1] || F1[s1] || (r5[s1] ? r5[s1].forEach(l1) : (S1.push(s1), p1[s1] = !0))
      }), new zd(d1 + ": " + S1.map(O1).join([", "]))
    }

    function QG(d1, o, S1, p1, l1) {
      var s1 = o.length;
      2 > s1 && e("argTypes array size mismatch! Must at least get return value and 'this' types!");
      var U0 = o[1] !== null && S1 !== null,
        w0 = !1;
      for (S1 = 1; S1 < o.length; ++S1)
        if (o[S1] !== null && o[S1].U === void 0) {
          w0 = !0;
          break
        } var J0 = o[0].name !== "void",
        W0 = s1 - 2,
        g0 = Array(W0),
        c2 = [],
        L2 = [];
      return function() {
        if (arguments.length !== W0 && e("function " + d1 + " called with " + arguments.length + " arguments, expected " + W0 + " args!"), L2.length = 0, c2.length = U0 ? 2 : 1, c2[0] = l1, U0) {
          var R2 = o[1].toWireType(L2, this);
          c2[1] = R2
        }
        for (var l = 0; l < W0; ++l) g0[l] = o[l + 2].toWireType(L2, arguments[l]), c2.push(g0[l]);
        if (l = p1.apply(null, c2), w0) i0(L2);
        else
          for (var _1 = U0 ? 1 : 2; _1 < o.length; _1++) {
            var I1 = _1 === 1 ? R2 : g0[_1 - 2];
            o[_1].U !== null && o[_1].U(I1)
          }
        return J0 ? o[0].fromWireType(l) : void 0
      }
    }

    function fG(d1, o) {
      for (var S1 = [], p1 = 0; p1 < d1; p1++) S1.push($[o + 4 * p1 >> 2]);
      return S1
    }

    function X7(d1) {
      4 < d1 && --F0[d1].fa == 0 && (F0[d1] = void 0, P0.push(d1))
    }

    function vI(d1) {
      if (d1 === null) return "null";
      var o = typeof d1;
      return o === "object" || o === "array" || o === "function" ? d1.toString() : "" + d1
    }

    function i7(d1, o) {
      for (var S1 = "", p1 = 0; !(p1 >= o / 2); ++p1) {
        var l1 = E[d1 + 2 * p1 >> 1];
        if (l1 == 0) break;
        S1 += String.fromCharCode(l1)
      }
      return S1
    }

    function fd(d1, o, S1) {
      if (S1 === void 0 && (S1 = 2147483647), 2 > S1) return 0;
      S1 -= 2;
      var p1 = o;
      S1 = S1 < 2 * d1.length ? S1 / 2 : d1.length;
      for (var l1 = 0; l1 < S1; ++l1) E[o >> 1] = d1.charCodeAt(l1), o += 2;
      return E[o >> 1] = 0, o - p1
    }

    function Y7(d1) {
      return 2 * d1.length
    }

    function nB(d1, o) {
      for (var S1 = 0, p1 = ""; !(S1 >= o / 4);) {
        var l1 = P[d1 + 4 * S1 >> 2];
        if (l1 == 0) break;
        ++S1, 65536 <= l1 ? (l1 -= 65536, p1 += String.fromCharCode(55296 | l1 >> 10, 56320 | 1023 & l1)) : p1 += String.fromCharCode(l1)
      }
      return p1
    }

    function qd(d1, o, S1) {
      if (S1 === void 0 && (S1 = 2147483647), 4 > S1) return 0;
      var p1 = o;
      S1 = p1 + S1 - 4;
      for (var l1 = 0; l1 < d1.length; ++l1) {
        var s1 = d1.charCodeAt(l1);
        if (55296 <= s1 && 57343 >= s1 && (s1 = 65536 + ((1023 & s1) << 10) | 1023 & d1.charCodeAt(++l1)), P[o >> 2] = s1, (o += 4) + 4 > S1) break
      }
      return P[o >> 2] = 0, o - p1
    }

    function rB(d1) {
      for (var o = 0, S1 = 0; S1 < d1.length; ++S1) {
        var p1 = d1.charCodeAt(S1);
        55296 <= p1 && 57343 >= p1 && ++S1, o += 4
      }
      return o
    }
    var PW = {};

    function $W(d1) {
      var o = PW[d1];
      return o === void 0 ? E0(d1) : o
    }
    var v8 = [],
      qG = [],
      aB = [null, [],
        []
      ];
    a0 = A.BindingError = B0("BindingError"), A.count_emval_handles = function() {
      for (var d1 = 0, o = 5; o < F0.length; ++o) F0[o] !== void 0 && ++d1;
      return d1
    }, A.get_first_emval = function() {
      for (var d1 = 5; d1 < F0.length; ++d1)
        if (F0[d1] !== void 0) return F0[d1];
      return null
    }, j1 = A.PureVirtualError = B0("PureVirtualError");
    for (var uW = Array(256), Rd = 0; 256 > Rd; ++Rd) uW[Rd] = String.fromCharCode(Rd);
    i1 = uW, A.getInheritedInstanceCount = function() {
      return Object.keys(Q1).length
    }, A.getLiveInheritedInstances = function() {
      var d1, o = [];
      for (d1 in Q1) Q1.hasOwnProperty(d1) && o.push(Q1[d1]);
      return o
    }, A.flushPendingDeletes = a, A.setDelayFunction = function(d1) {
      Z1 = d1, k.length && Z1 && Z1(a)
    }, U1 = A.InternalError = B0("InternalError"), A4.prototype.isAliasOf = function(d1) {
      if (!(this instanceof A4 && d1 instanceof A4)) return !1;
      var o = this.L.O.M,
        S1 = this.L.N,
        p1 = d1.L.O.M;
      for (d1 = d1.L.N; o.P;) S1 = o.aa(S1), o = o.P;
      for (; p1.P;) d1 = p1.aa(d1), p1 = p1.P;
      return o === p1 && S1 === d1
    }, A4.prototype.clone = function() {
      if (this.L.N || B4(this), this.L.$) return this.L.count.value += 1, this;
      var d1 = O0,
        o = Object,
        S1 = o.create,
        p1 = Object.getPrototypeOf(this),
        l1 = this.L;
      return d1 = d1(S1.call(o, p1, {
        L: {
          value: {
            count: l1.count,
            Z: l1.Z,
            $: l1.$,
            N: l1.N,
            O: l1.O,
            S: l1.S,
            T: l1.T
          }
        }
      })), d1.L.count.value += 1, d1.L.Z = !1, d1
    }, A4.prototype.delete = function() {
      this.L.N || B4(this), this.L.Z && !this.L.$ && e("Object already scheduled for deletion"), R1(this), j(this.L), this.L.$ || (this.L.S = void 0, this.L.N = void 0)
    }, A4.prototype.isDeleted = function() {
      return !this.L.N
    }, A4.prototype.deleteLater = function() {
      return this.L.N || B4(this), this.L.Z && !this.L.$ && e("Object already scheduled for deletion"), k.push(this), k.length === 1 && Z1 && Z1(a), this.L.Z = !0, this
    }, X3.prototype.pa = function(d1) {
      return this.ja && (d1 = this.ja(d1)), d1
    }, X3.prototype.ga = function(d1) {
      this.V && this.V(d1)
    }, X3.prototype.argPackAdvance = 8, X3.prototype.readValueFromPointer = s0, X3.prototype.deleteObject = function(d1) {
      d1 !== null && d1.delete()
    }, X3.prototype.fromWireType = function(d1) {
      function o() {
        return this.ca ? D0(this.M.W, {
          O: this.va,
          N: p1,
          T: this,
          S: d1
        }) : D0(this.M.W, {
          O: this,
          N: d1
        })
      }
      var S1, p1 = this.pa(d1);
      if (!p1) return this.ga(d1), null;
      var l1 = Q1[N1(this.M, p1)];
      if (l1 !== void 0) return l1.L.count.value === 0 ? (l1.L.N = p1, l1.L.S = d1, l1.clone()) : (l1 = l1.clone(), this.ga(d1), l1);
      if (!(l1 = W1[l1 = this.M.oa(p1)])) return o.call(this);
      l1 = this.ba ? l1.ka : l1.pointerType;
      var s1 = function U0(w0, J0, W0) {
        return J0 === W0 ? w0 : W0.P === void 0 ? null : (w0 = U0(w0, J0, W0.P)) === null ? null : W0.ma(w0)
      }(p1, this.M, l1.M);
      return s1 === null ? o.call(this) : this.ca ? D0(l1.M.W, {
        O: l1,
        N: s1,
        T: this,
        S: d1
      }) : D0(l1.M.W, {
        O: l1,
        N: s1
      })
    }, zd = A.UnboundTypeError = B0("UnboundTypeError");
    var sB = {
      q: function(d1, o, S1) {
        d1 = E0(d1), o = K1(o, "wrapper"), S1 = G0(S1);
        var p1 = [].slice,
          l1 = o.M,
          s1 = l1.W,
          U0 = l1.P.W,
          w0 = l1.P.constructor;
        for (var J0 in d1 = e1(d1, function() {
            l1.P.ia.forEach(function(W0) {
              if (this[W0] === U0[W0]) throw new j1("Pure virtual function " + W0 + " must be implemented in JavaScript")
            }.bind(this)), Object.defineProperty(this, "__parent", {
              value: s1
            }), this.__construct.apply(this, p1.call(arguments))
          }), s1.__construct = function() {
            this === s1 && e("Pass correct 'this' to __construct");
            var W0 = w0.implement.apply(void 0, [this].concat(p1.call(arguments)));
            R1(W0);
            var g0 = W0.L;
            W0.notifyOnDestruction(), g0.$ = !0, Object.defineProperties(this, {
              L: {
                value: g0
              }
            }), O0(this), W0 = N1(l1, W0 = g0.N), Q1.hasOwnProperty(W0) ? e("Tried to register registered instance: " + W0) : Q1[W0] = this
          }, s1.__destruct = function() {
            this === s1 && e("Pass correct 'this' to __destruct"), R1(this);
            var W0 = this.L.N;
            W0 = N1(l1, W0), Q1.hasOwnProperty(W0) ? delete Q1[W0] : e("Tried to unregister unregistered instance: " + W0)
          }, d1.prototype = Object.create(s1), S1) d1.prototype[J0] = S1[J0];
        return H1(d1)
      },
      l: function(d1) {
        var o = x0[d1];
        delete x0[d1];
        var {
          ea: S1,
          V: p1,
          ha: l1
        } = o;
        n0([d1], l1.map((s1) => s1.sa).concat(l1.map((s1) => s1.ya)), (s1) => {
          var U0 = {};
          return l1.forEach((w0, J0) => {
            var W0 = s1[J0],
              g0 = w0.qa,
              c2 = w0.ra,
              L2 = s1[J0 + l1.length],
              R2 = w0.xa,
              l = w0.za;
            U0[w0.na] = {
              read: (_1) => W0.fromWireType(g0(c2, _1)),
              write: (_1, I1) => {
                var v1 = [];
                R2(l, _1, L2.toWireType(v1, I1)), i0(v1)
              }
            }
          }), [{
            name: o.name,
            fromWireType: function(w0) {
              var J0, W0 = {};
              for (J0 in U0) W0[J0] = U0[J0].read(w0);
              return p1(w0), W0
            },
            toWireType: function(w0, J0) {
              for (var W0 in U0)
                if (!(W0 in J0)) throw TypeError('Missing field:  "' + W0 + '"');
              var g0 = S1();
              for (W0 in U0) U0[W0].write(g0, J0[W0]);
              return w0 !== null && w0.push(p1, g0), g0
            },
            argPackAdvance: 8,
            readValueFromPointer: s0,
            U: p1
          }]
        })
      },
      v: function() {},
      B: function(d1, o, S1, p1, l1) {
        var s1 = B2(S1);
        A2(d1, {
          name: o = E0(o),
          fromWireType: function(U0) {
            return !!U0
          },
          toWireType: function(U0, w0) {
            return w0 ? p1 : l1
          },
          argPackAdvance: 8,
          readValueFromPointer: function(U0) {
            if (S1 === 1) var w0 = K;
            else if (S1 === 2) w0 = E;
            else if (S1 === 4) w0 = P;
            else throw TypeError("Unknown boolean type size: " + o);
            return this.fromWireType(w0[U0 >> s1])
          },
          U: null
        })
      },
      h: function(d1, o, S1, p1, l1, s1, U0, w0, J0, W0, g0, c2, L2) {
        g0 = E0(g0), s1 = Y3(l1, s1), w0 && (w0 = Y3(U0, w0)), W0 && (W0 = Y3(J0, W0)), L2 = Y3(c2, L2);
        var R2, l = T1(g0);
        R2 = function() {
          Qd("Cannot construct " + g0 + " due to unbound types", [p1])
        }, A.hasOwnProperty(l) ? (e("Cannot register public name '" + l + "' twice"), _5(A, l, l), A.hasOwnProperty(void 0) && e("Cannot register multiple overloads of a function with the same number of arguments (undefined)!"), A[l].R[void 0] = R2) : A[l] = R2, n0([d1, o, S1], p1 ? [p1] : [], function(_1) {
          if (_1 = _1[0], p1) var I1, v1 = _1.M,
            y1 = v1.W;
          else y1 = A4.prototype;
          _1 = e1(l, function() {
            if (Object.getPrototypeOf(this) !== E1) throw new a0("Use 'new' to construct " + g0);
            if (Z0.X === void 0) throw new a0(g0 + " has no accessible constructor");
            var N0 = Z0.X[arguments.length];
            if (N0 === void 0) throw new a0("Tried to invoke ctor of " + g0 + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(Z0.X).toString() + ") parameters instead!");
            return N0.apply(this, arguments)
          });
          var E1 = Object.create(y1, {
            constructor: {
              value: _1
            }
          });
          _1.prototype = E1;
          var Z0 = new D5(g0, _1, E1, L2, v1, s1, w0, W0);
          v1 = new X3(g0, Z0, !0, !1), y1 = new X3(g0 + "*", Z0, !1, !1);
          var Q0 = new X3(g0 + " const*", Z0, !1, !0);
          return W1[d1] = {
            pointerType: y1,
            ka: Q0
          }, I1 = _1, A.hasOwnProperty(l) || L1("Replacing nonexistant public symbol"), A[l] = I1, A[l].Y = void 0, [v1, y1, Q0]
        })
      },
      d: function(d1, o, S1, p1, l1, s1, U0) {
        var w0 = fG(S1, p1);
        o = E0(o), s1 = Y3(l1, s1), n0([], [d1], function(J0) {
          function W0() {
            Qd("Cannot call " + g0 + " due to unbound types", w0)
          }
          var g0 = (J0 = J0[0]).name + "." + o;
          o.startsWith("@@") && (o = Symbol[o.substring(2)]);
          var c2 = J0.M.constructor;
          return c2[o] === void 0 ? (W0.Y = S1 - 1, c2[o] = W0) : (_5(c2, o, g0), c2[o].R[S1 - 1] = W0), n0([], w0, function(L2) {
            return L2 = QG(g0, [L2[0], null].concat(L2.slice(1)), null, s1, U0), c2[o].R === void 0 ? (L2.Y = S1 - 1, c2[o] = L2) : c2[o].R[S1 - 1] = L2, []
          }), []
        })
      },
      p: function(d1, o, S1, p1, l1, s1) {
        0 < o || f1();
        var U0 = fG(o, S1);
        l1 = Y3(p1, l1), n0([], [d1], function(w0) {
          var J0 = "constructor " + (w0 = w0[0]).name;
          if (w0.M.X === void 0 && (w0.M.X = []), w0.M.X[o - 1] !== void 0) throw new a0("Cannot register multiple constructors with identical number of parameters (" + (o - 1) + ") for class '" + w0.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
          return w0.M.X[o - 1] = () => {
            Qd("Cannot construct " + w0.name + " due to unbound types", U0)
          }, n0([], U0, function(W0) {
            return W0.splice(1, 0, null), w0.M.X[o - 1] = QG(J0, W0, null, l1, s1), []
          }), []
        })
      },
      a: function(d1, o, S1, p1, l1, s1, U0, w0) {
        var J0 = fG(S1, p1);
        o = E0(o), s1 = Y3(l1, s1), n0([], [d1], function(W0) {
          function g0() {
            Qd("Cannot call " + c2 + " due to unbound types", J0)
          }
          var c2 = (W0 = W0[0]).name + "." + o;
          o.startsWith("@@") && (o = Symbol[o.substring(2)]), w0 && W0.M.ia.push(o);
          var L2 = W0.M.W,
            R2 = L2[o];
          return R2 === void 0 || R2.R === void 0 && R2.className !== W0.name && R2.Y === S1 - 2 ? (g0.Y = S1 - 2, g0.className = W0.name, L2[o] = g0) : (_5(L2, o, c2), L2[o].R[S1 - 2] = g0), n0([], J0, function(l) {
            return l = QG(c2, l, W0, s1, U0), L2[o].R === void 0 ? (l.Y = S1 - 2, L2[o] = l) : L2[o].R[S1 - 2] = l, []
          }), []
        })
      },
      A: function(d1, o) {
        A2(d1, {
          name: o = E0(o),
          fromWireType: function(S1) {
            var p1 = G0(S1);
            return X7(S1), p1
          },
          toWireType: function(S1, p1) {
            return H1(p1)
          },
          argPackAdvance: 8,
          readValueFromPointer: s0,
          U: null
        })
      },
      n: function(d1, o, S1) {
        S1 = B2(S1), A2(d1, {
          name: o = E0(o),
          fromWireType: function(p1) {
            return p1
          },
          toWireType: function(p1, l1) {
            return l1
          },
          argPackAdvance: 8,
          readValueFromPointer: function(p1, l1) {
            switch (l1) {
              case 2:
                return function(s1) {
                  return this.fromWireType(h[s1 >> 2])
                };
              case 3:
                return function(s1) {
                  return this.fromWireType(O[s1 >> 3])
                };
              default:
                throw TypeError("Unknown float type: " + p1)
            }
          }(o, S1),
          U: null
        })
      },
      e: function(d1, o, S1, p1, l1) {
        o = E0(o), l1 === -1 && (l1 = 4294967295), l1 = B2(S1);
        var s1 = (w0) => w0;
        if (p1 === 0) {
          var U0 = 32 - 8 * S1;
          s1 = (w0) => w0 << U0 >>> U0
        }
        S1 = o.includes("unsigned") ? function(w0, J0) {
          return J0 >>> 0
        } : function(w0, J0) {
          return J0
        }, A2(d1, {
          name: o,
          fromWireType: s1,
          toWireType: S1,
          argPackAdvance: 8,
          readValueFromPointer: function(w0, J0, W0) {
            switch (J0) {
              case 0:
                return W0 ? function(g0) {
                  return K[g0]
                } : function(g0) {
                  return Q[g0]
                };
              case 1:
                return W0 ? function(g0) {
                  return E[g0 >> 1]
                } : function(g0) {
                  return S[g0 >> 1]
                };
              case 2:
                return W0 ? function(g0) {
                  return P[g0 >> 2]
                } : function(g0) {
                  return $[g0 >> 2]
                };
              default:
                throw TypeError("Unknown integer type: " + w0)
            }
          }(o, l1, p1 !== 0),
          U: null
        })
      },
      b: function(d1, o, S1) {
        function p1(s1) {
          s1 >>= 2;
          var U0 = $;
          return new l1(U0.buffer, U0[s1 + 1], U0[s1])
        }
        var l1 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][o];
        A2(d1, {
          name: S1 = E0(S1),
          fromWireType: p1,
          argPackAdvance: 8,
          readValueFromPointer: p1
        }, {
          ta: !0
        })
      },
      o: function(d1, o) {
        var S1 = (o = E0(o)) === "std::string";
        A2(d1, {
          name: o,
          fromWireType: function(p1) {
            var l1 = $[p1 >> 2],
              s1 = p1 + 4;
            if (S1)
              for (var U0 = s1, w0 = 0; w0 <= l1; ++w0) {
                var J0 = s1 + w0;
                if (w0 == l1 || Q[J0] == 0) {
                  if (U0 = U0 ? g(Q, U0, J0 - U0) : "", W0 === void 0) var W0 = U0;
                  else W0 += "\x00" + U0;
                  U0 = J0 + 1
                }
              } else {
                for (w0 = 0, W0 = Array(l1); w0 < l1; ++w0) W0[w0] = String.fromCharCode(Q[s1 + w0]);
                W0 = W0.join("")
              }
            return _7(p1), W0
          },
          toWireType: function(p1, l1) {
            l1 instanceof ArrayBuffer && (l1 = new Uint8Array(l1));
            var s1, U0 = typeof l1 == "string";
            if (U0 || l1 instanceof Uint8Array || l1 instanceof Uint8ClampedArray || l1 instanceof Int8Array || e("Cannot pass non-string to std::string"), S1 && U0) {
              var w0 = 0;
              for (s1 = 0; s1 < l1.length; ++s1) {
                var J0 = l1.charCodeAt(s1);
                127 >= J0 ? w0++ : 2047 >= J0 ? w0 += 2 : 55296 <= J0 && 57343 >= J0 ? (w0 += 4, ++s1) : w0 += 3
              }
              s1 = w0
            } else s1 = l1.length;
            if (J0 = (w0 = Ud(4 + s1 + 1)) + 4, $[w0 >> 2] = s1, S1 && U0) {
              if (U0 = J0, J0 = s1 + 1, s1 = Q, 0 < J0) {
                J0 = U0 + J0 - 1;
                for (var W0 = 0; W0 < l1.length; ++W0) {
                  var g0 = l1.charCodeAt(W0);
                  if (55296 <= g0 && 57343 >= g0 && (g0 = 65536 + ((1023 & g0) << 10) | 1023 & l1.charCodeAt(++W0)), 127 >= g0) {
                    if (U0 >= J0) break;
                    s1[U0++] = g0
                  } else {
                    if (2047 >= g0) {
                      if (U0 + 1 >= J0) break;
                      s1[U0++] = 192 | g0 >> 6
                    } else {
                      if (65535 >= g0) {
                        if (U0 + 2 >= J0) break;
                        s1[U0++] = 224 | g0 >> 12
                      } else {
                        if (U0 + 3 >= J0) break;
                        s1[U0++] = 240 | g0 >> 18, s1[U0++] = 128 | g0 >> 12 & 63
                      }
                      s1[U0++] = 128 | g0 >> 6 & 63
                    }
                    s1[U0++] = 128 | 63 & g0
                  }
                }
                s1[U0] = 0
              }
            } else if (U0)
              for (U0 = 0; U0 < s1; ++U0) 255 < (W0 = l1.charCodeAt(U0)) && (_7(J0), e("String has UTF-16 code units that do not fit in 8 bits")), Q[J0 + U0] = W0;
            else
              for (U0 = 0; U0 < s1; ++U0) Q[J0 + U0] = l1[U0];
            return p1 !== null && p1.push(_7, w0), w0
          },
          argPackAdvance: 8,
          readValueFromPointer: s0,
          U: function(p1) {
            _7(p1)
          }
        })
      },
      k: function(d1, o, S1) {
        if (S1 = E0(S1), o === 2) var p1 = i7,
          l1 = fd,
          s1 = Y7,
          U0 = () => S,
          w0 = 1;
        else o === 4 && (p1 = nB, l1 = qd, s1 = rB, U0 = () => $, w0 = 2);
        A2(d1, {
          name: S1,
          fromWireType: function(J0) {
            for (var W0, g0 = $[J0 >> 2], c2 = U0(), L2 = J0 + 4, R2 = 0; R2 <= g0; ++R2) {
              var l = J0 + 4 + R2 * o;
              (R2 == g0 || c2[l >> w0] == 0) && (L2 = p1(L2, l - L2), W0 === void 0 ? W0 = L2 : W0 += "\x00" + L2, L2 = l + o)
            }
            return _7(J0), W0
          },
          toWireType: function(J0, W0) {
            typeof W0 != "string" && e("Cannot pass non-string to C++ string type " + S1);
            var g0 = s1(W0),
              c2 = Ud(4 + g0 + o);
            return $[c2 >> 2] = g0 >> w0, l1(W0, c2 + 4, g0 + o), J0 !== null && J0.push(_7, c2), c2
          },
          argPackAdvance: 8,
          readValueFromPointer: s0,
          U: function(J0) {
            _7(J0)
          }
        })
      },
      m: function(d1, o, S1, p1, l1, s1) {
        x0[d1] = {
          name: E0(o),
          ea: Y3(S1, p1),
          V: Y3(l1, s1),
          ha: []
        }
      },
      c: function(d1, o, S1, p1, l1, s1, U0, w0, J0, W0) {
        x0[d1].ha.push({
          na: E0(o),
          sa: S1,
          qa: Y3(p1, l1),
          ra: s1,
          ya: U0,
          xa: Y3(w0, J0),
          za: W0
        })
      },
      C: function(d1, o) {
        A2(d1, {
          ua: !0,
          name: o = E0(o),
          argPackAdvance: 0,
          fromWireType: function() {},
          toWireType: function() {}
        })
      },
      t: function(d1, o, S1, p1, l1) {
        d1 = v8[d1], o = G0(o), S1 = $W(S1);
        var s1 = [];
        return $[p1 >> 2] = H1(s1), d1(o, S1, s1, l1)
      },
      j: function(d1, o, S1, p1) {
        d1 = v8[d1], d1(o = G0(o), S1 = $W(S1), null, p1)
      },
      f: X7,
      g: function(d1, o) {
        var S1, p1, l1 = function(J0, W0) {
            for (var g0 = Array(J0), c2 = 0; c2 < J0; ++c2) g0[c2] = K1($[W0 + 4 * c2 >> 2], "parameter " + c2);
            return g0
          }(d1, o),
          s1 = l1[0],
          U0 = qG[o = s1.name + "_$" + l1.slice(1).map(function(J0) {
            return J0.name
          }).join("_") + "$"];
        if (U0 !== void 0) return U0;
        var w0 = Array(d1 - 1);
        return S1 = (J0, W0, g0, c2) => {
          for (var L2 = 0, R2 = 0; R2 < d1 - 1; ++R2) w0[R2] = l1[R2 + 1].readValueFromPointer(c2 + L2), L2 += l1[R2 + 1].argPackAdvance;
          for (R2 = 0, J0 = J0[W0].apply(J0, w0); R2 < d1 - 1; ++R2) l1[R2 + 1].la && l1[R2 + 1].la(w0[R2]);
          if (!s1.ua) return s1.toWireType(g0, J0)
        }, p1 = v8.length, v8.push(S1), U0 = p1, qG[o] = U0
      },
      r: function(d1) {
        4 < d1 && (F0[d1].fa += 1)
      },
      s: function(d1) {
        i0(G0(d1)), X7(d1)
      },
      i: function() {
        f1("")
      },
      x: function(d1, o, S1) {
        Q.copyWithin(d1, o, o + S1)
      },
      w: function(d1) {
        var o = Q.length;
        if (2147483648 < (d1 >>>= 0)) return !1;
        for (var S1 = 1; 4 >= S1; S1 *= 2) {
          var p1 = o * (1 + 0.2 / S1);
          p1 = Math.min(p1, d1 + 100663296);
          var l1 = Math,
            s1 = l1.min;
          p1 = Math.max(d1, p1), p1 += (65536 - p1 % 65536) % 65536;
          I: {
            var U0 = _.buffer;
            try {
              _.grow(s1.call(l1, 2147483648, p1) - U0.byteLength + 65535 >>> 16), J();
              var w0 = 1;
              break I
            } catch (J0) {}
            w0 = void 0
          }
          if (w0) return !0
        }
        return !1
      },
      z: function() {
        return 52
      },
      u: function() {
        return 70
      },
      y: function(d1, o, S1, p1) {
        for (var l1 = 0, s1 = 0; s1 < S1; s1++) {
          var U0 = $[o >> 2],
            w0 = $[o + 4 >> 2];
          o += 8;
          for (var J0 = 0; J0 < w0; J0++) {
            var W0 = Q[U0 + J0],
              g0 = aB[d1];
            W0 === 0 || W0 === 10 ? ((d1 === 1 ? w : B)(g(g0, 0)), g0.length = 0) : g0.push(W0)
          }
          l1 += w0
        }
        return $[p1 >> 2] = l1, 0
      }
    };
    (function() {
      function d1(l1) {
        A.asm = l1.exports, _ = A.asm.D, J(), T = A.asm.I, c.unshift(A.asm.E), --o1 == 0 && a1 && (l1 = a1, a1 = null, l1())
      }

      function o(l1) {
        d1(l1.instance)
      }

      function S1(l1) {
        return (typeof fetch == "function" ? fetch(G, {
          credentials: "same-origin"
        }).then(function(s1) {
          if (!s1.ok) throw "failed to load wasm binary file at '" + G + "'";
          return s1.arrayBuffer()
        }).catch(function() {
          return A1()
        }) : Promise.resolve().then(function() {
          return A1()
        })).then(function(s1) {
          return WebAssembly.instantiate(s1, p1)
        }).then(function(s1) {
          return s1
        }).then(l1, function(s1) {
          B("failed to asynchronously prepare wasm: " + s1), f1(s1)
        })
      }
      var p1 = {
        a: sB
      };
      if (o1++, A.instantiateWasm) try {
        return A.instantiateWasm(p1, d1)
      } catch (l1) {
        B("Module.instantiateWasm callback failed with error: " + l1), X(l1)
      }(typeof WebAssembly.instantiateStreaming != "function" || r() || typeof fetch != "function" ? S1(o) : fetch(G, {
        credentials: "same-origin"
      }).then(function(l1) {
        return WebAssembly.instantiateStreaming(l1, p1).then(o, function(s1) {
          return B("wasm streaming compile failed: " + s1), B("falling back to ArrayBuffer instantiation"), S1(o)
        })
      })).catch(X)
    })();
    var TW = A.___getTypeName = function() {
      return (TW = A.___getTypeName = A.asm.F).apply(null, arguments)
    };

    function Ud() {
      return (Ud = A.asm.H).apply(null, arguments)
    }

    function _7() {
      return (_7 = A.asm.J).apply(null, arguments)
    }

    function OW() {
      0 < o1 || (m1(V1), 0 < o1 || Z || (Z = !0, A.calledRun = !0, F || (m1(c), V(A), m1(c1))))
    }
    return A.__embind_initialize_bindings = function() {
      return (A.__embind_initialize_bindings = A.asm.G).apply(null, arguments)
    }, A.dynCall_jiji = function() {
      return (A.dynCall_jiji = A.asm.K).apply(null, arguments)
    }, a1 = function d1() {
      Z || OW(), Z || (a1 = d1)
    }, OW(), d.ready
  }
})()
// @from(Start 5615894, End 5616121)
async function ck1(I) {
  let d = await eY4({
    instantiateWasm(G, Z) {
      WebAssembly.instantiate(I, G).then((C) => {
        C instanceof WebAssembly.Instance ? Z(C) : Z(C.instance)
      })
    }
  });
  return xk1(d)
}
// @from(Start 5616234, End 5616304)
Dj = await ck1(await tY4(I_4(import.meta.url).resolve("./yoga.wasm")))
// @from(Start 5616307, End 5616631)
function h51({
  onlyFirst: I = !1
} = {}) {
  let G = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");
  return new RegExp(G, I ? void 0 : "g")
}
// @from(Start 5616636, End 5616647)
d_4 = h51()
// @from(Start 5616650, End 5616792)
function RM(I) {
  if (typeof I !== "string") throw new TypeError(`Expected a \`string\`, got \`${typeof I}\``);
  return I.replace(d_4, "")
}
// @from(Start 5616794, End 5620494)
function pk1(I) {
  return I === 161 || I === 164 || I === 167 || I === 168 || I === 170 || I === 173 || I === 174 || I >= 176 && I <= 180 || I >= 182 && I <= 186 || I >= 188 && I <= 191 || I === 198 || I === 208 || I === 215 || I === 216 || I >= 222 && I <= 225 || I === 230 || I >= 232 && I <= 234 || I === 236 || I === 237 || I === 240 || I === 242 || I === 243 || I >= 247 && I <= 250 || I === 252 || I === 254 || I === 257 || I === 273 || I === 275 || I === 283 || I === 294 || I === 295 || I === 299 || I >= 305 && I <= 307 || I === 312 || I >= 319 && I <= 322 || I === 324 || I >= 328 && I <= 331 || I === 333 || I === 338 || I === 339 || I === 358 || I === 359 || I === 363 || I === 462 || I === 464 || I === 466 || I === 468 || I === 470 || I === 472 || I === 474 || I === 476 || I === 593 || I === 609 || I === 708 || I === 711 || I >= 713 && I <= 715 || I === 717 || I === 720 || I >= 728 && I <= 731 || I === 733 || I === 735 || I >= 768 && I <= 879 || I >= 913 && I <= 929 || I >= 931 && I <= 937 || I >= 945 && I <= 961 || I >= 963 && I <= 969 || I === 1025 || I >= 1040 && I <= 1103 || I === 1105 || I === 8208 || I >= 8211 && I <= 8214 || I === 8216 || I === 8217 || I === 8220 || I === 8221 || I >= 8224 && I <= 8226 || I >= 8228 && I <= 8231 || I === 8240 || I === 8242 || I === 8243 || I === 8245 || I === 8251 || I === 8254 || I === 8308 || I === 8319 || I >= 8321 && I <= 8324 || I === 8364 || I === 8451 || I === 8453 || I === 8457 || I === 8467 || I === 8470 || I === 8481 || I === 8482 || I === 8486 || I === 8491 || I === 8531 || I === 8532 || I >= 8539 && I <= 8542 || I >= 8544 && I <= 8555 || I >= 8560 && I <= 8569 || I === 8585 || I >= 8592 && I <= 8601 || I === 8632 || I === 8633 || I === 8658 || I === 8660 || I === 8679 || I === 8704 || I === 8706 || I === 8707 || I === 8711 || I === 8712 || I === 8715 || I === 8719 || I === 8721 || I === 8725 || I === 8730 || I >= 8733 && I <= 8736 || I === 8739 || I === 8741 || I >= 8743 && I <= 8748 || I === 8750 || I >= 8756 && I <= 8759 || I === 8764 || I === 8765 || I === 8776 || I === 8780 || I === 8786 || I === 8800 || I === 8801 || I >= 8804 && I <= 8807 || I === 8810 || I === 8811 || I === 8814 || I === 8815 || I === 8834 || I === 8835 || I === 8838 || I === 8839 || I === 8853 || I === 8857 || I === 8869 || I === 8895 || I === 8978 || I >= 9312 && I <= 9449 || I >= 9451 && I <= 9547 || I >= 9552 && I <= 9587 || I >= 9600 && I <= 9615 || I >= 9618 && I <= 9621 || I === 9632 || I === 9633 || I >= 9635 && I <= 9641 || I === 9650 || I === 9651 || I === 9654 || I === 9655 || I === 9660 || I === 9661 || I === 9664 || I === 9665 || I >= 9670 && I <= 9672 || I === 9675 || I >= 9678 && I <= 9681 || I >= 9698 && I <= 9701 || I === 9711 || I === 9733 || I === 9734 || I === 9737 || I === 9742 || I === 9743 || I === 9756 || I === 9758 || I === 9792 || I === 9794 || I === 9824 || I === 9825 || I >= 9827 && I <= 9829 || I >= 9831 && I <= 9834 || I === 9836 || I === 9837 || I === 9839 || I === 9886 || I === 9887 || I === 9919 || I >= 9926 && I <= 9933 || I >= 9935 && I <= 9939 || I >= 9941 && I <= 9953 || I === 9955 || I === 9960 || I === 9961 || I >= 9963 && I <= 9969 || I === 9972 || I >= 9974 && I <= 9977 || I === 9979 || I === 9980 || I === 9982 || I === 9983 || I === 10045 || I >= 10102 && I <= 10111 || I >= 11094 && I <= 11097 || I >= 12872 && I <= 12879 || I >= 57344 && I <= 63743 || I >= 65024 && I <= 65039 || I === 65533 || I >= 127232 && I <= 127242 || I >= 127248 && I <= 127277 || I >= 127280 && I <= 127337 || I >= 127344 && I <= 127373 || I === 127375 || I === 127376 || I >= 127387 && I <= 127404 || I >= 917760 && I <= 917999 || I >= 983040 && I <= 1048573 || I >= 1048576 && I <= 1114109
}
// @from(Start 5620496, End 5620592)
function ik1(I) {
  return I === 12288 || I >= 65281 && I <= 65376 || I >= 65504 && I <= 65510
}
// @from(Start 5620594, End 5623704)
function nk1(I) {
  return I >= 4352 && I <= 4447 || I === 8986 || I === 8987 || I === 9001 || I === 9002 || I >= 9193 && I <= 9196 || I === 9200 || I === 9203 || I === 9725 || I === 9726 || I === 9748 || I === 9749 || I >= 9776 && I <= 9783 || I >= 9800 && I <= 9811 || I === 9855 || I >= 9866 && I <= 9871 || I === 9875 || I === 9889 || I === 9898 || I === 9899 || I === 9917 || I === 9918 || I === 9924 || I === 9925 || I === 9934 || I === 9940 || I === 9962 || I === 9970 || I === 9971 || I === 9973 || I === 9978 || I === 9981 || I === 9989 || I === 9994 || I === 9995 || I === 10024 || I === 10060 || I === 10062 || I >= 10067 && I <= 10069 || I === 10071 || I >= 10133 && I <= 10135 || I === 10160 || I === 10175 || I === 11035 || I === 11036 || I === 11088 || I === 11093 || I >= 11904 && I <= 11929 || I >= 11931 && I <= 12019 || I >= 12032 && I <= 12245 || I >= 12272 && I <= 12287 || I >= 12289 && I <= 12350 || I >= 12353 && I <= 12438 || I >= 12441 && I <= 12543 || I >= 12549 && I <= 12591 || I >= 12593 && I <= 12686 || I >= 12688 && I <= 12773 || I >= 12783 && I <= 12830 || I >= 12832 && I <= 12871 || I >= 12880 && I <= 42124 || I >= 42128 && I <= 42182 || I >= 43360 && I <= 43388 || I >= 44032 && I <= 55203 || I >= 63744 && I <= 64255 || I >= 65040 && I <= 65049 || I >= 65072 && I <= 65106 || I >= 65108 && I <= 65126 || I >= 65128 && I <= 65131 || I >= 94176 && I <= 94180 || I === 94192 || I === 94193 || I >= 94208 && I <= 100343 || I >= 100352 && I <= 101589 || I >= 101631 && I <= 101640 || I >= 110576 && I <= 110579 || I >= 110581 && I <= 110587 || I === 110589 || I === 110590 || I >= 110592 && I <= 110882 || I === 110898 || I >= 110928 && I <= 110930 || I === 110933 || I >= 110948 && I <= 110951 || I >= 110960 && I <= 111355 || I >= 119552 && I <= 119638 || I >= 119648 && I <= 119670 || I === 126980 || I === 127183 || I === 127374 || I >= 127377 && I <= 127386 || I >= 127488 && I <= 127490 || I >= 127504 && I <= 127547 || I >= 127552 && I <= 127560 || I === 127568 || I === 127569 || I >= 127584 && I <= 127589 || I >= 127744 && I <= 127776 || I >= 127789 && I <= 127797 || I >= 127799 && I <= 127868 || I >= 127870 && I <= 127891 || I >= 127904 && I <= 127946 || I >= 127951 && I <= 127955 || I >= 127968 && I <= 127984 || I === 127988 || I >= 127992 && I <= 128062 || I === 128064 || I >= 128066 && I <= 128252 || I >= 128255 && I <= 128317 || I >= 128331 && I <= 128334 || I >= 128336 && I <= 128359 || I === 128378 || I === 128405 || I === 128406 || I === 128420 || I >= 128507 && I <= 128591 || I >= 128640 && I <= 128709 || I === 128716 || I >= 128720 && I <= 128722 || I >= 128725 && I <= 128727 || I >= 128732 && I <= 128735 || I === 128747 || I === 128748 || I >= 128756 && I <= 128764 || I >= 128992 && I <= 129003 || I === 129008 || I >= 129292 && I <= 129338 || I >= 129340 && I <= 129349 || I >= 129351 && I <= 129535 || I >= 129648 && I <= 129660 || I >= 129664 && I <= 129673 || I >= 129679 && I <= 129734 || I >= 129742 && I <= 129756 || I >= 129759 && I <= 129769 || I >= 129776 && I <= 129784 || I >= 131072 && I <= 196605 || I >= 196608 && I <= 262141
}
// @from(Start 5623706, End 5623824)
function G_4(I) {
  if (!Number.isSafeInteger(I)) throw new TypeError(`Expected a code point, got \`${typeof I}\`.`)
}
// @from(Start 5623826, End 5623948)
function Hj(I, {
  ambiguousAsWide: d = !1
} = {}) {
  if (G_4(I), ik1(I) || nk1(I) || d && pk1(I)) return 2;
  return 1
}
// @from(Start 5623953, End 5623971)
sk1 = J1(ak1(), 1)
// @from(Start 5623975, End 5623999)
Z_4 = new Intl.Segmenter
// @from(Start 5624003, End 5624046)
C_4 = /^\p{Default_Ignorable_Code_Point}$/u
// @from(Start 5624049, End 5624887)
function E7(I, d = {}) {
  if (typeof I !== "string" || I.length === 0) return 0;
  let {
    ambiguousIsNarrow: G = !0,
    countAnsiEscapeCodes: Z = !1
  } = d;
  if (!Z) I = RM(I);
  if (I.length === 0) return 0;
  let C = 0,
    W = {
      ambiguousAsWide: !G
    };
  for (let {
      segment: w
    }
    of Z_4.segment(I)) {
    let B = w.codePointAt(0);
    if (B <= 31 || B >= 127 && B <= 159) continue;
    if (B >= 8203 && B <= 8207 || B === 65279) continue;
    if (B >= 768 && B <= 879 || B >= 6832 && B <= 6911 || B >= 7616 && B <= 7679 || B >= 8400 && B <= 8447 || B >= 65056 && B <= 65071) continue;
    if (B >= 55296 && B <= 57343) continue;
    if (B >= 65024 && B <= 65039) continue;
    if (C_4.test(w)) continue;
    if (sk1.default().test(w)) {
      C += 2;
      continue
    }
    C += Hj(B, W)
  }
  return C
}
// @from(Start 5624889, End 5624985)
function dQ(I) {
  let d = 0;
  for (let G of I.split(`
`)) d = Math.max(d, E7(G));
  return d
}
// @from(Start 5624990, End 5624998)
ok1 = {}
// @from(Start 5625002, End 5625284)
W_4 = (I) => {
    if (I.length === 0) return {
      width: 0,
      height: 0
    };
    let d = ok1[I];
    if (d) return d;
    let G = dQ(I),
      Z = I.split(`
`).length;
    return ok1[I] = {
      width: G,
      height: Z
    }, {
      width: G,
      height: Z
    }
  }
// @from(Start 5625288, End 5625297)
j51 = W_4
// @from(Start 5625303, End 5625341)
ek1 = (I = 0) => (d) => `\x1B[${d+I}m`
// @from(Start 5625345, End 5625391)
tk1 = (I = 0) => (d) => `\x1B[${38+I};5;${d}m`
// @from(Start 5625395, End 5625457)
Ix1 = (I = 0) => (d, G, Z) => `\x1B[${38+I};2;${d};${G};${Z}m`
// @from(Start 5625461, End 5626708)
I3 = {
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
// @from(Start 5626712, End 5626742)
oM9 = Object.keys(I3.modifier)
// @from(Start 5626746, End 5626773)
w_4 = Object.keys(I3.color)
// @from(Start 5626777, End 5626806)
B_4 = Object.keys(I3.bgColor)
// @from(Start 5626810, End 5626832)
eM9 = [...w_4, ...B_4]
// @from(Start 5626835, End 5629115)
function A_4() {
  let I = new Map;
  for (let [d, G] of Object.entries(I3)) {
    for (let [Z, C] of Object.entries(G)) I3[Z] = {
      open: `\x1B[${C[0]}m`,
      close: `\x1B[${C[1]}m`
    }, G[Z] = I3[Z], I.set(C[0], C[1]);
    Object.defineProperty(I3, d, {
      value: G,
      enumerable: !1
    })
  }
  return Object.defineProperty(I3, "codes", {
    value: I,
    enumerable: !1
  }), I3.color.close = "\x1B[39m", I3.bgColor.close = "\x1B[49m", I3.color.ansi = ek1(), I3.color.ansi256 = tk1(), I3.color.ansi16m = Ix1(), I3.bgColor.ansi = ek1(10), I3.bgColor.ansi256 = tk1(10), I3.bgColor.ansi16m = Ix1(10), Object.defineProperties(I3, {
    rgbToAnsi256: {
      value: (d, G, Z) => {
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
      value: (d) => {
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
      value: (d) => I3.rgbToAnsi256(...I3.hexToRgb(d)),
      enumerable: !1
    },
    ansi256ToAnsi: {
      value: (d) => {
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
      value: (d, G, Z) => I3.ansi256ToAnsi(I3.rgbToAnsi256(d, G, Z)),
      enumerable: !1
    },
    hexToAnsi: {
      value: (d) => I3.ansi256ToAnsi(I3.hexToAnsi256(d)),
      enumerable: !1
    }
  }), I3
}
// @from(Start 5629120, End 5629131)
V_4 = A_4()
// @from(Start 5629135, End 5629143)
d3 = V_4
// @from(Start 5629149, End 5629176)
gj = new Set(["\x1B", ""])
// @from(Start 5629180, End 5629188)
X_4 = 39
// @from(Start 5629192, End 5629204)
x51 = "\x07"
// @from(Start 5629208, End 5629217)
Zx1 = "["
// @from(Start 5629221, End 5629230)
Y_4 = "]"
// @from(Start 5629234, End 5629243)
Cx1 = "m"
// @from(Start 5629247, End 5629263)
Fj = `${Y_4}8;;`
// @from(Start 5629267, End 5629325)
dx1 = (I) => `${gj.values().next().value}${Zx1}${I}${Cx1}`
// @from(Start 5629329, End 5629386)
Gx1 = (I) => `${gj.values().next().value}${Fj}${I}${x51}`
// @from(Start 5629390, End 5629433)
__4 = (I) => I.split(" ").map((d) => E7(d))
// @from(Start 5629437, End 5630037)
k51 = (I, d, G) => {
    let Z = [...d],
      C = !1,
      W = !1,
      w = E7(RM(I.at(-1)));
    for (let [B, A] of Z.entries()) {
      let V = E7(A);
      if (w + V <= G) I[I.length - 1] += A;
      else I.push(A), w = 0;
      if (gj.has(A)) C = !0, W = Z.slice(B + 1, B + 1 + Fj.length).join("") === Fj;
      if (C) {
        if (W) {
          if (A === x51) C = !1, W = !1
        } else if (A === Cx1) C = !1;
        continue
      }
      if (w += V, w === G && B < Z.length - 1) I.push(""), w = 0
    }
    if (!w && I.at(-1).length > 0 && I.length > 1) I[I.length - 2] += I.pop()
  }
// @from(Start 5630041, End 5630267)
D_4 = (I) => {
    let d = I.split(" "),
      G = d.length;
    while (G > 0) {
      if (E7(d[G - 1]) > 0) break;
      G--
    }
    if (G === d.length) return I;
    return d.slice(0, G).join(" ") + d.slice(G).join("")
  }
// @from(Start 5630271, End 5632033)
H_4 = (I, d, G = {}) => {
    if (G.trim !== !1 && I.trim() === "") return "";
    let Z = "",
      C, W, w = __4(I),
      B = [""];
    for (let [_, F] of I.split(" ").entries()) {
      if (G.trim !== !1) B[B.length - 1] = B.at(-1).trimStart();
      let g = E7(B.at(-1));
      if (_ !== 0) {
        if (g >= d && (G.wordWrap === !1 || G.trim === !1)) B.push(""), g = 0;
        if (g > 0 || G.trim === !1) B[B.length - 1] += " ", g++
      }
      if (G.hard && w[_] > d) {
        let J = d - g,
          K = 1 + Math.floor((w[_] - J - 1) / d);
        if (Math.floor((w[_] - 1) / d) < K) B.push("");
        k51(B, F, d);
        continue
      }
      if (g + w[_] > d && g > 0 && w[_] > 0) {
        if (G.wordWrap === !1 && g < d) {
          k51(B, F, d);
          continue
        }
        B.push("")
      }
      if (g + w[_] > d && G.wordWrap === !1) {
        k51(B, F, d);
        continue
      }
      B[B.length - 1] += F
    }
    if (G.trim !== !1) B = B.map((_) => D_4(_));
    let A = B.join(`
`),
      V = [...A],
      X = 0;
    for (let [_, F] of V.entries()) {
      if (Z += F, gj.has(F)) {
        let {
          groups: J
        } = new RegExp(`(?:\\${Zx1}(?<code>\\d+)m|\\${Fj}(?<uri>.*)${x51})`).exec(A.slice(X)) || {
          groups: {}
        };
        if (J.code !== void 0) {
          let K = Number.parseFloat(J.code);
          C = K === X_4 ? void 0 : K
        } else if (J.uri !== void 0) W = J.uri.length === 0 ? void 0 : J.uri
      }
      let g = d3.codes.get(Number(C));
      if (V[_ + 1] === `
`) {
        if (W) Z += Gx1("");
        if (C && g) Z += dx1(g)
      } else if (F === `
`) {
        if (C && g) Z += dx1(C);
        if (W) Z += Gx1(W)
      }
      X += F.length
    }
    return Z
  }
// @from(Start 5632036, End 5632160)
function UM(I, d, G) {
  return String(I).normalize().replaceAll(`\r
`, `
`).split(`
`).map((Z) => H_4(Z, d, G)).join(`
`)
}
// @from(Start 5632162, End 5632666)
function vM(I) {
  if (!Number.isInteger(I)) return !1;
  return I >= 4352 && (I <= 4447 || I === 9001 || I === 9002 || 11904 <= I && I <= 12871 && I !== 12351 || 12880 <= I && I <= 19903 || 19968 <= I && I <= 42182 || 43360 <= I && I <= 43388 || 44032 <= I && I <= 55203 || 63744 <= I && I <= 64255 || 65040 <= I && I <= 65049 || 65072 <= I && I <= 65131 || 65281 <= I && I <= 65376 || 65504 <= I && I <= 65510 || 110592 <= I && I <= 110593 || 127488 <= I && I <= 127569 || 131072 <= I && I <= 262141)
}
// @from(Start 5632671, End 5632711)
F_4 = /^[\uD800-\uDBFF][\uDC00-\uDFFF]$/
// @from(Start 5632715, End 5632734)
wx1 = ["\x1B", ""]
// @from(Start 5632738, End 5632767)
Jj = (I) => `${wx1[0]}[${I}m`
// @from(Start 5632771, End 5633442)
Wx1 = (I, d, G) => {
    let Z = [];
    I = [...I];
    for (let C of I) {
      let W = C;
      if (C.includes(";")) C = C.split(";")[0][0] + "0";
      let w = d3.codes.get(Number.parseInt(C, 10));
      if (w) {
        let B = I.indexOf(w.toString());
        if (B === -1) Z.push(Jj(d ? w : W));
        else I.splice(B, 1)
      } else if (d) {
        Z.push(Jj(0));
        break
      } else Z.push(Jj(W))
    }
    if (d) {
      if (Z = Z.filter((C, W) => Z.indexOf(C) === W), G !== void 0) {
        let C = Jj(d3.codes.get(Number.parseInt(G, 10)));
        Z = Z.reduce((W, w) => w === C ? [w, ...W] : [...W, w], [])
      }
    }
    return Z.join("")
  }
// @from(Start 5633445, End 5634158)
function Ow(I, d, G) {
  let Z = [...I],
    C = [],
    W = typeof G === "number" ? G : Z.length,
    w = !1,
    B, A = 0,
    V = "";
  for (let [X, _] of Z.entries()) {
    let F = !1;
    if (wx1.includes(_)) {
      let g = /\d[^m]*/.exec(I.slice(X, X + 18));
      if (B = g && g.length > 0 ? g[0] : void 0, A < W) {
        if (w = !0, B !== void 0) C.push(B)
      }
    } else if (w && _ === "m") w = !1, F = !0;
    if (!w && !F) A++;
    if (!F_4.test(_) && vM(_.codePointAt())) {
      if (A++, typeof G !== "number") W++
    }
    if (A > d && A <= W) V += _;
    else if (A === d && !w && B !== void 0) V = Wx1(C);
    else if (A >= W) {
      V += Wx1(C, !0, B);
      break
    }
  }
  return V
}
// @from(Start 5634160, End 5634352)
function Kj(I, d, G) {
  if (I.charAt(d) === " ") return d;
  let Z = G ? 1 : -1;
  for (let C = 0; C <= 3; C++) {
    let W = d + C * Z;
    if (I.charAt(W) === " ") return W
  }
  return d
}
// @from(Start 5634354, End 5635567)
function c51(I, d, G = {}) {
  let {
    position: Z = "end",
    space: C = !1,
    preferTruncationOnSpace: W = !1
  } = G, {
    truncationCharacter: w = "…"
  } = G;
  if (typeof I !== "string") throw new TypeError(`Expected \`input\` to be a string, got ${typeof I}`);
  if (typeof d !== "number") throw new TypeError(`Expected \`columns\` to be a number, got ${typeof d}`);
  if (d < 1) return "";
  if (d === 1) return w;
  let B = E7(I);
  if (B <= d) return I;
  if (Z === "start") {
    if (W) {
      let A = Kj(I, B - d + 1, !0);
      return w + Ow(I, A, B).trim()
    }
    if (C === !0) w += " ";
    return w + Ow(I, B - d + E7(w), B)
  }
  if (Z === "middle") {
    if (C === !0) w = ` ${w} `;
    let A = Math.floor(d / 2);
    if (W) {
      let V = Kj(I, A),
        X = Kj(I, B - (d - A) + 1, !0);
      return Ow(I, 0, V) + w + Ow(I, X, B).trim()
    }
    return Ow(I, 0, A) + w + Ow(I, B - (d - A) + E7(w), B)
  }
  if (Z === "end") {
    if (W) {
      let A = Kj(I, d - 1);
      return Ow(I, 0, A) + w
    }
    if (C === !0) w = ` ${w}`;
    return Ow(I, 0, d - E7(w)) + w
  }
  throw new Error(`Expected \`options.position\` to be either \`start\`, \`middle\` or \`end\`, got ${Z}`)
}
// @from(Start 5635572, End 5635580)
Bx1 = {}
// @from(Start 5635584, End 5636012)
g_4 = (I, d, G) => {
    let Z = I + String(d) + String(G),
      C = Bx1[Z];
    if (C) return C;
    let W = I;
    if (G === "wrap") W = UM(I, d, {
      trim: !1,
      hard: !0
    });
    if (G.startsWith("truncate")) {
      let w = "end";
      if (G === "truncate-middle") w = "middle";
      if (G === "truncate-start") w = "start";
      W = c51(I, d, {
        position: w
      })
    }
    return Bx1[Z] = W, W
  }
// @from(Start 5636016, End 5636024)
Nj = g_4
// @from(Start 5636030, End 5636494)
Ax1 = (I) => {
    let d = "";
    for (let G = 0; G < I.childNodes.length; G++) {
      let Z = I.childNodes[G];
      if (Z === void 0) continue;
      let C = "";
      if (Z.nodeName === "#text") C = Z.nodeValue;
      else {
        if (Z.nodeName === "ink-text" || Z.nodeName === "ink-virtual-text") C = Ax1(Z);
        if (C.length > 0 && typeof Z.internal_transform === "function") C = Z.internal_transform(C, G)
      }
      d += C
    }
    return d
  }
// @from(Start 5636498, End 5636506)
zj = Ax1
// @from(Start 5636512, End 5636811)
Qj = (I) => {
    let d = {
      nodeName: I,
      style: {},
      attributes: {},
      childNodes: [],
      parentNode: void 0,
      yogaNode: I === "ink-virtual-text" ? void 0 : Dj.Node.create()
    };
    if (I === "ink-text") d.yogaNode?.setMeasureFunc(J_4.bind(null, d));
    return d
  }
// @from(Start 5636815, End 5637081)
fj = (I, d) => {
    if (d.parentNode) EM(d.parentNode, d);
    if (d.parentNode = I, I.childNodes.push(d), d.yogaNode) I.yogaNode?.insertChild(d.yogaNode, I.yogaNode.getChildCount());
    if (I.nodeName === "ink-text" || I.nodeName === "ink-virtual-text") qj(I)
  }
// @from(Start 5637085, End 5637525)
p51 = (I, d, G) => {
    if (d.parentNode) EM(d.parentNode, d);
    d.parentNode = I;
    let Z = I.childNodes.indexOf(G);
    if (Z >= 0) {
      if (I.childNodes.splice(Z, 0, d), d.yogaNode) I.yogaNode?.insertChild(d.yogaNode, Z);
      return
    }
    if (I.childNodes.push(d), d.yogaNode) I.yogaNode?.insertChild(d.yogaNode, I.yogaNode.getChildCount());
    if (I.nodeName === "ink-text" || I.nodeName === "ink-virtual-text") qj(I)
  }
// @from(Start 5637529, End 5637803)
EM = (I, d) => {
    if (d.yogaNode) d.parentNode?.yogaNode?.removeChild(d.yogaNode);
    d.parentNode = void 0;
    let G = I.childNodes.indexOf(d);
    if (G >= 0) I.childNodes.splice(G, 1);
    if (I.nodeName === "ink-text" || I.nodeName === "ink-virtual-text") qj(I)
  }
// @from(Start 5637807, End 5637855)
i51 = (I, d, G) => {
    I.attributes[d] = G
  }
// @from(Start 5637859, End 5637896)
n51 = (I, d) => {
    I.style = d
  }
// @from(Start 5637900, End 5638073)
Vx1 = (I) => {
    let d = {
      nodeName: "#text",
      nodeValue: I,
      yogaNode: void 0,
      parentNode: void 0,
      style: {}
    };
    return MM(d, I), d
  }
// @from(Start 5638077, End 5638343)
J_4 = function(I, d) {
    let G = I.nodeName === "#text" ? I.nodeValue : zj(I),
      Z = j51(G);
    if (Z.width <= d) return Z;
    if (Z.width >= 1 && d > 0 && d < 1) return Z;
    let C = I.style?.textWrap ?? "wrap",
      W = Nj(G, d, C);
    return j51(W)
  }
// @from(Start 5638347, End 5638440)
Xx1 = (I) => {
    if (!I?.parentNode) return;
    return I.yogaNode ?? Xx1(I.parentNode)
  }
// @from(Start 5638444, End 5638485)
qj = (I) => {
    Xx1(I)?.markDirty()
  }
// @from(Start 5638489, End 5638582)
MM = (I, d) => {
    if (typeof d !== "string") d = String(d);
    I.nodeValue = d, qj(I)
  }
// @from(Start 5638588, End 5638689)
N_4 = (I, d) => {
    if ("position" in d) I.setPositionType(d.position === "absolute" ? Aj : Bj)
  }
// @from(Start 5638693, End 5639138)
z_4 = (I, d) => {
    if ("margin" in d) I.setMargin(qM, d.margin ?? 0);
    if ("marginX" in d) I.setMargin(QM, d.marginX ?? 0);
    if ("marginY" in d) I.setMargin(fM, d.marginY ?? 0);
    if ("marginLeft" in d) I.setMargin(ih, d.marginLeft || 0);
    if ("marginRight" in d) I.setMargin(nh, d.marginRight || 0);
    if ("marginTop" in d) I.setMargin(bY, d.marginTop || 0);
    if ("marginBottom" in d) I.setMargin(hY, d.marginBottom || 0)
  }
// @from(Start 5639142, End 5639608)
Q_4 = (I, d) => {
    if ("padding" in d) I.setPadding(qM, d.padding ?? 0);
    if ("paddingX" in d) I.setPadding(QM, d.paddingX ?? 0);
    if ("paddingY" in d) I.setPadding(fM, d.paddingY ?? 0);
    if ("paddingLeft" in d) I.setPadding(uw, d.paddingLeft || 0);
    if ("paddingRight" in d) I.setPadding(Tw, d.paddingRight || 0);
    if ("paddingTop" in d) I.setPadding(bY, d.paddingTop || 0);
    if ("paddingBottom" in d) I.setPadding(hY, d.paddingBottom || 0)
  }
// @from(Start 5639612, End 5641575)
f_4 = (I, d) => {
    if ("flexGrow" in d) I.setFlexGrow(d.flexGrow ?? 0);
    if ("flexShrink" in d) I.setFlexShrink(typeof d.flexShrink === "number" ? d.flexShrink : 1);
    if ("flexWrap" in d) {
      if (d.flexWrap === "nowrap") I.setFlexWrap(Vj);
      if (d.flexWrap === "wrap") I.setFlexWrap(Xj);
      if (d.flexWrap === "wrap-reverse") I.setFlexWrap(Yj)
    }
    if ("flexDirection" in d) {
      if (d.flexDirection === "row") I.setFlexDirection(sh);
      if (d.flexDirection === "row-reverse") I.setFlexDirection(oh);
      if (d.flexDirection === "column") I.setFlexDirection(rh);
      if (d.flexDirection === "column-reverse") I.setFlexDirection(ah)
    }
    if ("flexBasis" in d)
      if (typeof d.flexBasis === "number") I.setFlexBasis(d.flexBasis);
      else if (typeof d.flexBasis === "string") I.setFlexBasisPercent(Number.parseInt(d.flexBasis, 10));
    else I.setFlexBasis(Number.NaN);
    if ("alignItems" in d) {
      if (d.alignItems === "stretch" || !d.alignItems) I.setAlignItems(ph);
      if (d.alignItems === "flex-start") I.setAlignItems(KM);
      if (d.alignItems === "center") I.setAlignItems(NM);
      if (d.alignItems === "flex-end") I.setAlignItems(zM)
    }
    if ("alignSelf" in d) {
      if (d.alignSelf === "auto" || !d.alignSelf) I.setAlignSelf(ch);
      if (d.alignSelf === "flex-start") I.setAlignSelf(KM);
      if (d.alignSelf === "center") I.setAlignSelf(NM);
      if (d.alignSelf === "flex-end") I.setAlignSelf(zM)
    }
    if ("justifyContent" in d) {
      if (d.justifyContent === "flex-start" || !d.justifyContent) I.setJustifyContent(dj);
      if (d.justifyContent === "center") I.setJustifyContent(Gj);
      if (d.justifyContent === "flex-end") I.setJustifyContent(Zj);
      if (d.justifyContent === "space-between") I.setJustifyContent(Cj);
      if (d.justifyContent === "space-around") I.setJustifyContent(Wj);
      if (d.justifyContent === "space-evenly") I.setJustifyContent(wj)
    }
  }
// @from(Start 5641579, End 5642347)
q_4 = (I, d) => {
    if ("width" in d)
      if (typeof d.width === "number") I.setWidth(d.width);
      else if (typeof d.width === "string") I.setWidthPercent(Number.parseInt(d.width, 10));
    else I.setWidthAuto();
    if ("height" in d)
      if (typeof d.height === "number") I.setHeight(d.height);
      else if (typeof d.height === "string") I.setHeightPercent(Number.parseInt(d.height, 10));
    else I.setHeightAuto();
    if ("minWidth" in d)
      if (typeof d.minWidth === "string") I.setMinWidthPercent(Number.parseInt(d.minWidth, 10));
      else I.setMinWidth(d.minWidth ?? 0);
    if ("minHeight" in d)
      if (typeof d.minHeight === "string") I.setMinHeightPercent(Number.parseInt(d.minHeight, 10));
      else I.setMinHeight(d.minHeight ?? 0)
  }
// @from(Start 5642351, End 5642441)
R_4 = (I, d) => {
    if ("display" in d) I.setDisplay(d.display === "flex" ? IQ : lY)
  }
// @from(Start 5642445, End 5642744)
U_4 = (I, d) => {
    if ("borderStyle" in d) {
      let G = d.borderStyle ? 1 : 0;
      if (d.borderTop !== !1) I.setBorder(bY, G);
      if (d.borderBottom !== !1) I.setBorder(hY, G);
      if (d.borderLeft !== !1) I.setBorder(uw, G);
      if (d.borderRight !== !1) I.setBorder(Tw, G)
    }
  }
// @from(Start 5642748, End 5642924)
v_4 = (I, d) => {
    if ("gap" in d) I.setGap(Ij, d.gap ?? 0);
    if ("columnGap" in d) I.setGap(eh, d.columnGap ?? 0);
    if ("rowGap" in d) I.setGap(th, d.rowGap ?? 0)
  }
// @from(Start 5642928, End 5643045)
E_4 = (I, d = {}) => {
    N_4(I, d), z_4(I, d), Q_4(I, d), f_4(I, d), q_4(I, d), R_4(I, d), U_4(I, d), v_4(I, d)
  }
// @from(Start 5643049, End 5643058)
r51 = E_4
// @from(Start 5643497, End 5643821)
zc1 = (I, d) => {
    if (I === d) return;
    if (!I) return d;
    let G = {},
      Z = !1;
    for (let C of Object.keys(I))
      if (d ? !Object.hasOwn(d, C) : !0) G[C] = void 0, Z = !0;
    if (d) {
      for (let C of Object.keys(d))
        if (d[C] !== I[C]) G[C] = d[C], Z = !0
    }
    return Z ? G : void 0
  }
// @from(Start 5643825, End 5643889)
Qc1 = (I) => {
    I?.unsetMeasureFunc(), I?.freeRecursive()
  }
// @from(Start 5643893, End 5647456)
Jg = fc1.default({
    getRootHostContext: () => ({
      isInsideText: !1
    }),
    prepareForCommit: () => null,
    preparePortalMount: () => null,
    clearContainer: () => !1,
    resetAfterCommit(I) {
      if (typeof I.onComputeLayout === "function") I.onComputeLayout();
      if (I.isStaticDirty) {
        if (I.isStaticDirty = !1, typeof I.onImmediateRender === "function") I.onImmediateRender();
        return
      }
      if (typeof I.onRender === "function") I.onRender()
    },
    getChildHostContext(I, d) {
      let G = I.isInsideText,
        Z = d === "ink-text" || d === "ink-virtual-text";
      if (G === Z) return I;
      return {
        isInsideText: Z
      }
    },
    shouldSetTextContent: () => !1,
    createInstance(I, d, G, Z) {
      if (Z.isInsideText && I === "ink-box") throw new Error("<Box> can’t be nested inside <Text> component");
      let C = I === "ink-text" && Z.isInsideText ? "ink-virtual-text" : I,
        W = Qj(C);
      for (let [w, B] of Object.entries(d)) {
        if (w === "children") continue;
        if (w === "style") {
          if (n51(W, B), W.yogaNode) r51(W.yogaNode, B);
          continue
        }
        if (w === "internal_transform") {
          W.internal_transform = B;
          continue
        }
        if (w === "internal_static") {
          W.internal_static = !0;
          continue
        }
        i51(W, w, B)
      }
      return W
    },
    createTextInstance(I, d, G) {
      if (!G.isInsideText) throw new Error(`Text string "${I}" must be rendered inside <Text> component`);
      return Vx1(I)
    },
    resetTextContent() {},
    hideTextInstance(I) {
      MM(I, "")
    },
    unhideTextInstance(I, d) {
      MM(I, d)
    },
    getPublicInstance: (I) => I,
    hideInstance(I) {
      I.yogaNode?.setDisplay(lY)
    },
    unhideInstance(I) {
      I.yogaNode?.setDisplay(IQ)
    },
    appendInitialChild: fj,
    appendChild: fj,
    insertBefore: p51,
    finalizeInitialChildren(I, d, G, Z) {
      if (I.internal_static) Z.isStaticDirty = !0, Z.staticNode = I;
      return !1
    },
    isPrimaryRenderer: !0,
    supportsMutation: !0,
    supportsPersistence: !1,
    supportsHydration: !1,
    scheduleTimeout: setTimeout,
    cancelTimeout: clearTimeout,
    noTimeout: -1,
    getCurrentEventPriority: () => b51,
    beforeActiveInstanceBlur() {},
    afterActiveInstanceBlur() {},
    detachDeletedInstance() {},
    getInstanceFromNode: () => null,
    prepareScopeUpdate() {},
    getInstanceFromScope: () => null,
    appendChildToContainer: fj,
    insertInContainerBefore: p51,
    removeChildFromContainer(I, d) {
      EM(I, d), Qc1(d.yogaNode)
    },
    prepareUpdate(I, d, G, Z, C) {
      if (I.internal_static) C.isStaticDirty = !0;
      let W = zc1(G, Z),
        w = zc1(G.style, Z.style);
      if (!W && !w) return null;
      return {
        props: W,
        style: w
      }
    },
    commitUpdate(I, {
      props: d,
      style: G
    }) {
      if (d)
        for (let [Z, C] of Object.entries(d)) {
          if (Z === "style") {
            n51(I, C);
            continue
          }
          if (Z === "internal_transform") {
            I.internal_transform = C;
            continue
          }
          if (Z === "internal_static") {
            I.internal_static = !0;
            continue
          }
          i51(I, Z, C)
        }
      if (G && I.yogaNode) r51(I.yogaNode, G)
    },
    commitTextUpdate(I, d, G) {
      MM(I, G)
    },
    removeChild(I, d) {
      EM(I, d), Qc1(d.yogaNode)
    }
  })
// @from(Start 5647459, End 5648091)
function Y91(I, d = 1, G = {}) {
  let {
    indent: Z = " ",
    includeEmptyLines: C = !1
  } = G;
  if (typeof I !== "string") throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof I}\``);
  if (typeof d !== "number") throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof d}\``);
  if (d < 0) throw new RangeError(`Expected \`count\` to be at least 0, got \`${d}\``);
  if (typeof Z !== "string") throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof Z}\``);
  if (d === 0) return I;
  let W = C ? /^/gm : /^(?!\s*$)/gm;
  return I.replace(W, Z.repeat(d))
}
// @from(Start 5648096, End 5648252)
oD4 = (I) => {
    return I.getComputedWidth() - I.getComputedPadding(uw) - I.getComputedPadding(Tw) - I.getComputedBorder(uw) - I.getComputedBorder(Tw)
  }
// @from(Start 5648256, End 5648265)
qc1 = oD4
// @from(Start 5648271, End 5648289)
Ec1 = J1(vc1(), 1)
// @from(Start 5648295, End 5648341)
tD4 = /^rgb\(\s?(\d+),\s?(\d+),\s?(\d+)\s?\)$/
// @from(Start 5648345, End 5648377)
IH4 = /^ansi256\(\s?(\d+)\s?\)$/
// @from(Start 5648381, End 5648418)
dH4 = (I) => {
    return I in j0
  }
// @from(Start 5648422, End 5649148)
GH4 = (I, d, G) => {
    if (!d) return I;
    if (dH4(d)) {
      if (G === "foreground") return j0[d](I);
      let Z = `bg${d[0].toUpperCase()+d.slice(1)}`;
      return j0[Z](I)
    }
    if (d.startsWith("#")) return G === "foreground" ? j0.hex(d)(I) : j0.bgHex(d)(I);
    if (d.startsWith("ansi256")) {
      let Z = IH4.exec(d);
      if (!Z) return I;
      let C = Number(Z[1]);
      return G === "foreground" ? j0.ansi256(C)(I) : j0.bgAnsi256(C)(I)
    }
    if (d.startsWith("rgb")) {
      let Z = tD4.exec(d);
      if (!Z) return I;
      let C = Number(Z[1]),
        W = Number(Z[2]),
        w = Number(Z[3]);
      return G === "foreground" ? j0.rgb(C, W, w)(I) : j0.bgRgb(C, W, w)(I)
    }
    return I
  }
// @from(Start 5649152, End 5649160)
pY = GH4
// @from(Start 5649166, End 5650994)
ZH4 = (I, d, G, Z) => {
    if (G.style.borderStyle) {
      let C = G.yogaNode.getComputedWidth(),
        W = G.yogaNode.getComputedHeight(),
        w = typeof G.style.borderStyle === "string" ? Ec1.default[G.style.borderStyle] : G.style.borderStyle,
        B = G.style.borderTopColor ?? G.style.borderColor,
        A = G.style.borderBottomColor ?? G.style.borderColor,
        V = G.style.borderLeftColor ?? G.style.borderColor,
        X = G.style.borderRightColor ?? G.style.borderColor,
        _ = G.style.borderTopDimColor ?? G.style.borderDimColor,
        F = G.style.borderBottomDimColor ?? G.style.borderDimColor,
        g = G.style.borderLeftDimColor ?? G.style.borderDimColor,
        J = G.style.borderRightDimColor ?? G.style.borderDimColor,
        K = G.style.borderTop !== !1,
        Q = G.style.borderBottom !== !1,
        E = G.style.borderLeft !== !1,
        S = G.style.borderRight !== !1,
        P = C - (E ? 1 : 0) - (S ? 1 : 0),
        $ = K ? pY((E ? w.topLeft : "") + w.top.repeat(P) + (S ? w.topRight : ""), B, "foreground") : void 0;
      if (K && _) $ = j0.dim($);
      let h = W;
      if (K) h -= 1;
      if (Q) h -= 1;
      let O = (pY(w.left, V, "foreground") + `
`).repeat(h);
      if (g) O = j0.dim(O);
      let T = (pY(w.right, X, "foreground") + `
`).repeat(h);
      if (J) T = j0.dim(T);
      let V1 = Q ? pY((E ? w.bottomLeft : "") + w.bottom.repeat(P) + (S ? w.bottomRight : ""), A, "foreground") : void 0;
      if (Q && F) V1 = j0.dim(V1);
      let c = K ? 1 : 0;
      if ($) Z.write(I, d, $, {
        transformers: []
      });
      if (E) Z.write(I, d + c, O, {
        transformers: []
      });
      if (S) Z.write(I + C - 1, d + c, T, {
        transformers: []
      });
      if (V1) Z.write(I, d + W - 1, V1, {
        transformers: []
      })
    }
  }
// @from(Start 5650998, End 5651007)
Mc1 = ZH4
// @from(Start 5651013, End 5651208)
CH4 = (I, d) => {
    let G = I.childNodes[0]?.yogaNode;
    if (G) {
      let Z = G.getComputedLeft(),
        C = G.getComputedTop();
      d = `
`.repeat(C) + Y91(d, Z)
    }
    return d
  }
// @from(Start 5651212, End 5652983)
Sc1 = (I, d, G) => {
    let {
      offsetX: Z = 0,
      offsetY: C = 0,
      transformers: W = [],
      skipStaticElements: w
    } = G;
    if (w && I.internal_static) return;
    let {
      yogaNode: B
    } = I;
    if (B) {
      if (B.getDisplay() === lY) return;
      let A = Z + B.getComputedLeft(),
        V = C + B.getComputedTop(),
        X = W;
      if (typeof I.internal_transform === "function") X = [I.internal_transform, ...W];
      if (I.nodeName === "ink-text") {
        let F = zj(I);
        if (F.length > 0) {
          let g = dQ(F),
            J = qc1(B);
          if (g > J) {
            let K = I.style.textWrap ?? "wrap";
            F = Nj(F, J, K)
          }
          F = CH4(I, F), d.write(A, V, F, {
            transformers: X
          })
        }
        return
      }
      let _ = !1;
      if (I.nodeName === "ink-box") {
        Mc1(A, V, I, d);
        let F = I.style.overflowX === "hidden" || I.style.overflow === "hidden",
          g = I.style.overflowY === "hidden" || I.style.overflow === "hidden";
        if (F || g) {
          let J = F ? A + B.getComputedBorder(uw) : void 0,
            K = F ? A + B.getComputedWidth() - B.getComputedBorder(Tw) : void 0,
            Q = g ? V + B.getComputedBorder(bY) : void 0,
            E = g ? V + B.getComputedHeight() - B.getComputedBorder(hY) : void 0;
          d.clip({
            x1: J,
            x2: K,
            y1: Q,
            y2: E
          }), _ = !0
        }
      }
      if (I.nodeName === "ink-root" || I.nodeName === "ink-box") {
        for (let F of I.childNodes) Sc1(F, d, {
          offsetX: A,
          offsetY: V,
          transformers: X,
          skipStaticElements: w
        });
        if (_) d.unclip()
      }
    }
  }
// @from(Start 5652987, End 5652996)
D91 = Sc1
// @from(Start 5652999, End 5653078)
function H91(I) {
  if (!Number.isInteger(I)) return !1;
  return Hj(I) === 2
}
// @from(Start 5653083, End 5653107)
WH4 = new Set([27, 155])
// @from(Start 5653111, End 5653135)
wH4 = "0".codePointAt(0)
// @from(Start 5653139, End 5653163)
BH4 = "9".codePointAt(0)
// @from(Start 5653167, End 5653180)
g91 = new Set
// @from(Start 5653184, End 5653197)
F91 = new Map
// @from(Start 5653301, End 5653545)
function AH4(I) {
  if (g91.has(I)) return I;
  if (F91.has(I)) return F91.get(I);
  if (I = I.slice(2), I.includes(";")) I = I[0] + "0";
  let d = d3.codes.get(Number.parseInt(I, 10));
  if (d) return d3.color.ansi(d);
  return d3.reset.open
}
// @from(Start 5653547, End 5653690)
function VH4(I) {
  for (let d = 0; d < I.length; d++) {
    let G = I.codePointAt(d);
    if (G >= wH4 && G <= BH4) return d
  }
  return -1
}
// @from(Start 5653692, End 5653872)
function XH4(I, d) {
  I = I.slice(d, d + 19);
  let G = VH4(I);
  if (G !== -1) {
    let Z = I.indexOf("m", G);
    if (Z === -1) Z = I.length;
    return I.slice(0, Z + 1)
  }
}
// @from(Start 5653874, End 5654437)
function YH4(I, d = Number.POSITIVE_INFINITY) {
  let G = [],
    Z = 0,
    C = 0;
  while (Z < I.length) {
    let W = I.codePointAt(Z);
    if (WH4.has(W)) {
      let A = XH4(I, Z);
      if (A) {
        G.push({
          type: "ansi",
          code: A,
          endCode: AH4(A)
        }), Z += A.length;
        continue
      }
    }
    let w = H91(W),
      B = String.fromCodePoint(W);
    if (G.push({
        type: "character",
        value: B,
        isFullWidth: w
      }), Z += B.length, C += w ? 2 : B.length, C >= d) break
  }
  return G
}
// @from(Start 5654439, End 5654681)
function Lc1(I) {
  let d = [];
  for (let G of I)
    if (G.code === d3.reset.open) d = [];
    else if (g91.has(G.code)) d = d.filter((Z) => Z.endCode !== G.code);
  else d = d.filter((Z) => Z.endCode !== G.endCode), d.push(G);
  return d
}
// @from(Start 5654683, End 5654770)
function _H4(I) {
  return Lc1(I).map(({
    endCode: Z
  }) => Z).reverse().join("")
}
// @from(Start 5654772, End 5655208)
function J91(I, d, G) {
  let Z = YH4(I, G),
    C = [],
    W = 0,
    w = "",
    B = !1;
  for (let A of Z) {
    if (G !== void 0 && W >= G) break;
    if (A.type === "ansi") {
      if (C.push(A), B) w += A.code
    } else {
      if (!B && W >= d) B = !0, C = Lc1(C), w = C.map(({
        code: V
      }) => V).join("");
      if (B) w += A.value;
      W += A.isFullWidth ? 2 : A.value.length
    }
  }
  return w += _H4(C), w
}
// @from(Start 5655213, End 5655237)
yc1 = new Set([27, 155])
// @from(Start 5655241, End 5655253)
lj = new Set
// @from(Start 5655257, End 5655270)
K91 = new Map
// @from(Start 5655376, End 5655391)
bj = "\x1B]8;;"
// @from(Start 5655395, End 5655441)
N91 = bj.split("").map((I) => I.charCodeAt(0))
// @from(Start 5655445, End 5655457)
Pc1 = "\x07"
// @from(Start 5655461, End 5655484)
DL9 = Pc1.charCodeAt(0)
// @from(Start 5655488, End 5655510)
DH4 = `\x1B]8;;${Pc1}`
// @from(Start 5655513, End 5655790)
function $c1(I) {
  if (lj.has(I)) return I;
  if (K91.has(I)) return K91.get(I);
  if (I.startsWith(bj)) return DH4;
  if (I = I.slice(2), I.includes(";")) I = I[0] + "0";
  let d = d3.codes.get(parseInt(I, 10));
  if (d) return d3.color.ansi(d);
  else return d3.reset.open
}
// @from(Start 5655792, End 5655849)
function lM(I) {
  return I.map((d) => d.code).join("")
}
// @from(Start 5655851, End 5655889)
function z91(I) {
  return hj([], I)
}
// @from(Start 5655891, End 5656138)
function hj(I, d) {
  let G = [...I];
  for (let Z of d)
    if (Z.code === d3.reset.open) G = [];
    else if (lj.has(Z.code)) G = G.filter((C) => C.endCode !== Z.code);
  else G = G.filter((C) => C.endCode !== Z.endCode), G.push(Z);
  return G
}
// @from(Start 5656140, End 5656235)
function Q91(I) {
  return z91(I).reverse().map((d) => ({
    ...d,
    code: d.endCode
  }))
}
// @from(Start 5656237, End 5656431)
function jj(I, d) {
  let G = new Set(d.map((C) => C.endCode)),
    Z = new Set(I.map((C) => C.code));
  return [...Q91(I.filter((C) => !G.has(C.endCode))), ...d.filter((C) => !Z.has(C.code))]
}
// @from(Start 5656433, End 5656627)
function uc1(I) {
  let d = [],
    G = [];
  for (let Z of I)
    if (Z.type === "ansi") d = hj(d, [Z]);
    else if (Z.type === "char") G.push({
    ...Z,
    styles: [...d]
  });
  return G
}
// @from(Start 5656629, End 5656887)
function Tc1(I) {
  let d = "";
  for (let G = 0; G < I.length; G++) {
    let Z = I[G];
    if (G === 0) d += lM(Z.styles);
    else d += lM(jj(I[G - 1].styles, Z.styles));
    if (d += Z.value, G === I.length - 1) d += lM(jj(Z.styles, []))
  }
  return d
}
// @from(Start 5656889, End 5657029)
function HH4(I) {
  for (let d = 0; d < I.length; d++) {
    let G = I.charCodeAt(d);
    if (G >= 48 && G <= 57) return d
  }
  return -1
}
// @from(Start 5657031, End 5657245)
function FH4(I, d) {
  I = I.slice(d);
  for (let Z = 1; Z < N91.length; Z++)
    if (I.charCodeAt(Z) !== N91[Z]) return;
  let G = I.indexOf("\x07", bj.length);
  if (G === -1) return;
  return I.slice(0, G + 1)
}
// @from(Start 5657247, End 5657427)
function gH4(I, d) {
  I = I.slice(d, d + 19);
  let G = HH4(I);
  if (G !== -1) {
    let Z = I.indexOf("m", G);
    if (Z === -1) Z = I.length;
    return I.slice(0, Z + 1)
  }
}
// @from(Start 5657429, End 5657997)
function Oc1(I, d = Number.POSITIVE_INFINITY) {
  let G = [],
    Z = 0,
    C = 0;
  while (Z < I.length) {
    let W = I.codePointAt(Z);
    if (yc1.has(W)) {
      let A = FH4(I, Z) || gH4(I, Z);
      if (A) {
        G.push({
          type: "ansi",
          code: A,
          endCode: $c1(A)
        }), Z += A.length;
        continue
      }
    }
    let w = vM(W),
      B = String.fromCodePoint(W);
    if (G.push({
        type: "char",
        value: B,
        fullWidth: w
      }), Z += B.length, C += w ? 2 : B.length, C >= d) break
  }
  return G
}
// @from(Start 5657998, End 5661037)
class bM {
  width;
  height;
  operations = [];
  charCache = {};
  styledCharsToStringCache = {};
  constructor(I) {
    let {
      width: d,
      height: G
    } = I;
    this.width = d, this.height = G
  }
  write(I, d, G, Z) {
    let {
      transformers: C
    } = Z;
    if (!G) return;
    this.operations.push({
      type: "write",
      x: I,
      y: d,
      text: G,
      transformers: C
    })
  }
  clip(I) {
    this.operations.push({
      type: "clip",
      clip: I
    })
  }
  unclip() {
    this.operations.push({
      type: "unclip"
    })
  }
  get() {
    let I = [];
    for (let Z = 0; Z < this.height; Z++) {
      let C = [];
      for (let W = 0; W < this.width; W++) C.push({
        type: "char",
        value: " ",
        fullWidth: !1,
        styles: []
      });
      I.push(C)
    }
    let d = [];
    for (let Z of this.operations) {
      if (Z.type === "clip") d.push(Z.clip);
      if (Z.type === "unclip") d.pop();
      if (Z.type === "write") {
        let {
          text: C,
          transformers: W
        } = Z, {
          x: w,
          y: B
        } = Z, A = C.split(`
`), V = d.at(-1);
        if (V) {
          let _ = typeof V?.x1 === "number" && typeof V?.x2 === "number",
            F = typeof V?.y1 === "number" && typeof V?.y2 === "number";
          if (_) {
            let g = dQ(C);
            if (w + g < V.x1 || w > V.x2) continue
          }
          if (F) {
            let g = A.length;
            if (B + g < V.y1 || B > V.y2) continue
          }
          if (_) {
            if (A = A.map((g) => {
                let J = w < V.x1 ? V.x1 - w : 0,
                  K = E7(g),
                  Q = w + K > V.x2 ? V.x2 - w : K;
                return J91(g, J, Q)
              }), w < V.x1) w = V.x1
          }
          if (F) {
            let g = B < V.y1 ? V.y1 - B : 0,
              J = A.length,
              K = B + J > V.y2 ? V.y2 - B : J;
            if (A = A.slice(g, K), B < V.y1) B = V.y1
          }
        }
        let X = 0;
        for (let [_, F] of A.entries()) {
          let g = I[B + X];
          if (!g) continue;
          for (let Q of W) F = Q(F, _);
          if (!this.charCache.hasOwnProperty(F)) this.charCache[F] = uc1(Oc1(F));
          let J = this.charCache[F],
            K = w;
          for (let Q of J) {
            g[K] = Q;
            let E = Q.fullWidth || Q.value.length > 1;
            if (E) g[K + 1] = {
              type: "char",
              value: "",
              fullWidth: !1,
              styles: Q.styles
            };
            K += E ? 2 : 1
          }
          X++
        }
      }
    }
    return {
      output: I.map((Z) => {
        let C = Z.filter((w) => w !== void 0),
          W = JSON.stringify(C);
        if (!this.styledCharsToStringCache.hasOwnProperty(W)) {
          let w = Tc1(C).trimEnd();
          this.styledCharsToStringCache[W] = w
        }
        return this.styledCharsToStringCache[W]
      }).join(`
`),
      height: I.length
    }
  }
}
// @from(Start 5661042, End 5661792)
JH4 = (I) => {
    if (I.yogaNode) {
      let d = new bM({
        width: I.yogaNode.getComputedWidth(),
        height: I.yogaNode.getComputedHeight()
      });
      D91(I, d, {
        skipStaticElements: !0
      });
      let G;
      if (I.staticNode?.yogaNode) G = new bM({
        width: I.staticNode.yogaNode.getComputedWidth(),
        height: I.staticNode.yogaNode.getComputedHeight()
      }), D91(I.staticNode, G, {
        skipStaticElements: !1
      });
      let {
        output: Z,
        height: C
      } = d.get();
      return {
        output: Z,
        outputHeight: C,
        staticOutput: G ? `${G.get().output}
` : ""
      }
    }
    return {
      output: "",
      outputHeight: 0,
      staticOutput: ""
    }
  }
// @from(Start 5661796, End 5661805)
mc1 = JH4
// @from(Start 5661843, End 5661861)
rc1 = J1(jc1(), 1)
// @from(Start 5661865, End 5661883)
ac1 = J1(nc1(), 1)
// @from(Start 5661921, End 5662048)
zH4 = rc1.default(() => {
    ac1.default(() => {
      NH4.stderr.write("\x1B[?25h")
    }, {
      alwaysLast: !0
    })
  })
// @from(Start 5662052, End 5662061)
sc1 = zH4
// @from(Start 5662067, End 5662074)
rj = !1
// @from(Start 5662078, End 5662085)
XQ = {}
// @from(Start 5662375, End 5662382)
YQ = XQ
// @from(Start 5662388, End 5662899)
QH4 = (I, {
    showCursor: d = !1
  } = {}) => {
    let G = 0,
      Z = "",
      C = !1,
      W = (w) => {
        if (!d && !C) YQ.hide(), C = !0;
        let B = w + `
`;
        if (B === Z) return;
        Z = B, I.write(OY.eraseLines(G) + B), G = B.split(`
`).length
      };
    return W.clear = () => {
      I.write(OY.eraseLines(G)), Z = "", G = 0
    }, W.updateLineCount = (w) => {
      G = w.split(`
`).length
    }, W.done = () => {
      if (Z = "", G = 0, !d) YQ.show(), C = !1
    }, W
  }
// @from(Start 5662903, End 5662930)
fH4 = {
    create: QH4
  }
// @from(Start 5662934, End 5662943)
ec1 = fH4
// @from(Start 5662949, End 5662966)
qH4 = new WeakMap
// @from(Start 5662970, End 5662978)
_Q = qH4
// @from(Start 5662984, End 5663000)
tA = J1(u1(), 1)
// @from(Start 5663091, End 5663108)
tc1 = J1(u1(), 1)
// @from(Start 5663112, End 5663156)
Ip1 = tc1.createContext({
    exit() {}
  })
// @from(Start 5663202, End 5663211)
U91 = Ip1
// @from(Start 5663217, End 5663234)
dp1 = J1(u1(), 1)
// @from(Start 5663325, End 5663479)
Gp1 = dp1.createContext({
  stdin: UH4.stdin,
  internal_eventEmitter: new RH4,
  setRawMode() {},
  isRawModeSupported: !1,
  internal_exitOnCtrlC: !0
})
// @from(Start 5663527, End 5663535)
aj = Gp1
// @from(Start 5663541, End 5663558)
Zp1 = J1(u1(), 1)
// @from(Start 5663596, End 5663659)
Cp1 = Zp1.createContext({
  stdout: vH4.stdout,
  write() {}
})
// @from(Start 5663708, End 5663717)
v91 = Cp1
// @from(Start 5663723, End 5663740)
Wp1 = J1(u1(), 1)
// @from(Start 5663778, End 5663841)
wp1 = Wp1.createContext({
  stderr: EH4.stderr,
  write() {}
})
// @from(Start 5663890, End 5663899)
E91 = wp1
// @from(Start 5663905, End 5663922)
Bp1 = J1(u1(), 1)
// @from(Start 5663926, End 5664153)
Ap1 = Bp1.createContext({
    activeId: void 0,
    add() {},
    remove() {},
    activate() {},
    deactivate() {},
    enableFocus() {},
    disableFocus() {},
    focusNext() {},
    focusPrevious() {},
    focus() {}
  })
// @from(Start 5664201, End 5664209)
sj = Ap1
// @from(Start 5664215, End 5664231)
z6 = J1(u1(), 1)
// @from(Start 5664235, End 5664253)
L91 = J1(Hp1(), 1)
// @from(Start 5664335, End 5664424)
uH4 = (I, d = 2) => {
    return I.replace(/^\t+/gm, (G) => " ".repeat(G.length * d))
  }
// @from(Start 5664428, End 5664437)
Fp1 = uH4
// @from(Start 5664443, End 5664571)
TH4 = (I, d) => {
    let G = [],
      Z = I - d,
      C = I + d;
    for (let W = Z; W <= C; W++) G.push(W);
    return G
  }
// @from(Start 5664575, End 5664998)
OH4 = (I, d, G = {}) => {
    var Z;
    if (typeof I !== "string") throw new TypeError("Source code is missing.");
    if (!d || d < 1) throw new TypeError("Line number must start from `1`.");
    let C = Fp1(I).split(/\r?\n/);
    if (d > C.length) return;
    return TH4(d, (Z = G.around) !== null && Z !== void 0 ? Z : 3).filter((W) => C[W - 1] !== void 0).map((W) => ({
      line: W,
      value: C[W - 1]
    }))
  }
// @from(Start 5665002, End 5665011)
gp1 = OH4
// @from(Start 5665017, End 5665033)
oj = J1(u1(), 1)
// @from(Start 5665037, End 5665330)
S91 = oj.forwardRef(({
    children: I,
    ...d
  }, G) => {
    return oj.default.createElement("ink-box", {
      ref: G,
      style: {
        ...d,
        overflowX: d.overflowX ?? d.overflow ?? "visible",
        overflowY: d.overflowY ?? d.overflow ?? "visible"
      }
    }, I)
  })
// @from(Start 5665462, End 5665469)
p = S91
// @from(Start 5665475, End 5665492)
Jp1 = J1(u1(), 1)
// @from(Start 5665495, End 5666232)
function u({
  color: I,
  backgroundColor: d,
  dimColor: G = !1,
  bold: Z = !1,
  italic: C = !1,
  underline: W = !1,
  strikethrough: w = !1,
  inverse: B = !1,
  wrap: A = "wrap",
  children: V
}) {
  if (V === void 0 || V === null) return null;
  let X = (_) => {
    if (G) _ = j0.dim(_);
    if (I) _ = pY(_, I, "foreground");
    if (d) _ = pY(_, d, "background");
    if (Z) _ = j0.bold(_);
    if (C) _ = j0.italic(_);
    if (W) _ = j0.underline(_);
    if (w) _ = j0.strikethrough(_);
    if (B) _ = j0.inverse(_);
    return _
  };
  return Jp1.default.createElement("ink-text", {
    style: {
      flexGrow: 0,
      flexShrink: 1,
      flexDirection: "row",
      textWrap: A
    },
    internal_transform: X
  }, V)
}
// @from(Start 5666237, End 5666301)
Kp1 = (I) => {
    return I?.replace(`file://${zp1()}/`, "")
  }
// @from(Start 5666305, End 5666392)
Np1 = new L91.default({
    cwd: zp1(),
    internals: L91.default.nodeInternals()
  })
// @from(Start 5666395, End 5668504)
function y91({
  error: I
}) {
  let d = I.stack ? I.stack.split(`
`).slice(1) : void 0,
    G = d ? Np1.parseLine(d[0]) : void 0,
    Z = Kp1(G?.file),
    C, W = 0;
  if (Z && G?.line && ej.existsSync(Z)) {
    let w = ej.readFileSync(Z, "utf8");
    if (C = gp1(w, G.line), C)
      for (let {
          line: B
        }
        of C) W = Math.max(W, String(B).length)
  }
  return z6.default.createElement(p, {
    flexDirection: "column",
    padding: 1
  }, z6.default.createElement(p, null, z6.default.createElement(u, {
    backgroundColor: "red",
    color: "white"
  }, " ", "ERROR", " "), z6.default.createElement(u, null, " ", I.message)), G && Z && z6.default.createElement(p, {
    marginTop: 1
  }, z6.default.createElement(u, {
    dimColor: !0
  }, Z, ":", G.line, ":", G.column)), G && C && z6.default.createElement(p, {
    marginTop: 1,
    flexDirection: "column"
  }, C.map(({
    line: w,
    value: B
  }) => z6.default.createElement(p, {
    key: w
  }, z6.default.createElement(p, {
    width: W + 1
  }, z6.default.createElement(u, {
    dimColor: w !== G.line,
    backgroundColor: w === G.line ? "red" : void 0,
    color: w === G.line ? "white" : void 0
  }, String(w).padStart(W, " "), ":")), z6.default.createElement(u, {
    key: w,
    backgroundColor: w === G.line ? "red" : void 0,
    color: w === G.line ? "white" : void 0
  }, " " + B)))), I.stack && z6.default.createElement(p, {
    marginTop: 1,
    flexDirection: "column"
  }, I.stack.split(`
`).slice(1).map((w) => {
    let B = Np1.parseLine(w);
    if (!B) return z6.default.createElement(p, {
      key: w
    }, z6.default.createElement(u, {
      dimColor: !0
    }, "- "), z6.default.createElement(u, {
      dimColor: !0,
      bold: !0
    }, w));
    return z6.default.createElement(p, {
      key: w
    }, z6.default.createElement(u, {
      dimColor: !0
    }, "- "), z6.default.createElement(u, {
      dimColor: !0,
      bold: !0
    }, B.function), z6.default.createElement(u, {
      dimColor: !0,
      color: "gray"
    }, " ", "(", Kp1(B.file) ?? "", ":", B.line, ":", B.column, ")"))
  })))
}
// @from(Start 5668509, End 5668519)
bH4 = "\t"
// @from(Start 5668523, End 5668537)
hH4 = "\x1B[Z"
// @from(Start 5668541, End 5668553)
jH4 = "\x1B"