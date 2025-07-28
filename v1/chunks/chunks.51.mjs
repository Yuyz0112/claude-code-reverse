
// @from(Start 5243979, End 5247396)
TF2 = Y((bJ3, uF2) => {
  var LF2 = (I, d) => (...G) => {
      return `\x1B[${I(...G)+d}m`
    },
    yF2 = (I, d) => (...G) => {
      let Z = I(...G);
      return `\x1B[${38+d};5;${Z}m`
    },
    PF2 = (I, d) => (...G) => {
      let Z = I(...G);
      return `\x1B[${38+d};2;${Z[0]};${Z[1]};${Z[2]}m`
    },
    oa = (I) => I,
    $F2 = (I, d, G) => [I, d, G],
    PR = (I, d, G) => {
      Object.defineProperty(I, d, {
        get: () => {
          let Z = G();
          return Object.defineProperty(I, d, {
            value: Z,
            enumerable: !0,
            configurable: !0
          }), Z
        },
        enumerable: !0,
        configurable: !0
      })
    },
    vg1, $R = (I, d, G, Z) => {
      if (vg1 === void 0) vg1 = Ug1();
      let C = Z ? 10 : 0,
        W = {};
      for (let [w, B] of Object.entries(vg1)) {
        let A = w === "ansi16" ? "ansi" : w;
        if (w === d) W[A] = I(G, C);
        else if (typeof B === "object") W[A] = I(B[d], C)
      }
      return W
    };

  function b89() {
    let I = new Map,
      d = {
        modifier: {
          reset: [0, 0],
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
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
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
    d.color.gray = d.color.blackBright, d.bgColor.bgGray = d.bgColor.bgBlackBright, d.color.grey = d.color.blackBright, d.bgColor.bgGrey = d.bgColor.bgBlackBright;
    for (let [G, Z] of Object.entries(d)) {
      for (let [C, W] of Object.entries(Z)) d[C] = {
        open: `\x1B[${W[0]}m`,
        close: `\x1B[${W[1]}m`
      }, Z[C] = d[C], I.set(W[0], W[1]);
      Object.defineProperty(d, G, {
        value: Z,
        enumerable: !1
      })
    }
    return Object.defineProperty(d, "codes", {
      value: I,
      enumerable: !1
    }), d.color.close = "\x1B[39m", d.bgColor.close = "\x1B[49m", PR(d.color, "ansi", () => $R(LF2, "ansi16", oa, !1)), PR(d.color, "ansi256", () => $R(yF2, "ansi256", oa, !1)), PR(d.color, "ansi16m", () => $R(PF2, "rgb", $F2, !1)), PR(d.bgColor, "ansi", () => $R(LF2, "ansi16", oa, !0)), PR(d.bgColor, "ansi256", () => $R(yF2, "ansi256", oa, !0)), PR(d.bgColor, "ansi16m", () => $R(PF2, "rgb", $F2, !0)), d
  }
  Object.defineProperty(uF2, "exports", {
    enumerable: !0,
    get: b89
  })
})
// @from(Start 5247402, End 5248070)
mF2 = Y((hJ3, OF2) => {
  var h89 = (I, d, G) => {
      let Z = I.indexOf(d);
      if (Z === -1) return I;
      let C = d.length,
        W = 0,
        w = "";
      do w += I.substr(W, Z - W) + d + G, W = Z + C, Z = I.indexOf(d, W); while (Z !== -1);
      return w += I.substr(W), w
    },
    j89 = (I, d, G, Z) => {
      let C = 0,
        W = "";
      do {
        let w = I[Z - 1] === "\r";
        W += I.substr(C, (w ? Z - 1 : Z) - C) + d + (w ? `\r
` : `
`) + G, C = Z + 1, Z = I.indexOf(`
`, C)
      } while (Z !== -1);
      return W += I.substr(C), W
    };
  OF2.exports = {
    stringReplaceAll: h89,
    stringEncaseCRLFWithFirstIndex: j89
  }
})
// @from(Start 5248076, End 5250702)
kF2 = Y((jJ3, jF2) => {
  var k89 = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
    lF2 = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
    x89 = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
    c89 = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi,
    p89 = new Map([
      ["n", `
`],
      ["r", "\r"],
      ["t", "\t"],
      ["b", "\b"],
      ["f", "\f"],
      ["v", "\v"],
      ["0", "\x00"],
      ["\\", "\\"],
      ["e", "\x1B"],
      ["a", "\x07"]
    ]);

  function hF2(I) {
    let d = I[0] === "u",
      G = I[1] === "{";
    if (d && !G && I.length === 5 || I[0] === "x" && I.length === 3) return String.fromCharCode(parseInt(I.slice(1), 16));
    if (d && G) return String.fromCodePoint(parseInt(I.slice(2, -1), 16));
    return p89.get(I) || I
  }

  function i89(I, d) {
    let G = [],
      Z = d.trim().split(/\s*,\s*/g),
      C;
    for (let W of Z) {
      let w = Number(W);
      if (!Number.isNaN(w)) G.push(w);
      else if (C = W.match(x89)) G.push(C[2].replace(c89, (B, A, V) => A ? hF2(A) : V));
      else throw new Error(`Invalid Chalk template style argument: ${W} (in style '${I}')`)
    }
    return G
  }

  function n89(I) {
    lF2.lastIndex = 0;
    let d = [],
      G;
    while ((G = lF2.exec(I)) !== null) {
      let Z = G[1];
      if (G[2]) {
        let C = i89(Z, G[2]);
        d.push([Z].concat(C))
      } else d.push([Z])
    }
    return d
  }

  function bF2(I, d) {
    let G = {};
    for (let C of d)
      for (let W of C.styles) G[W[0]] = C.inverse ? null : W.slice(1);
    let Z = I;
    for (let [C, W] of Object.entries(G)) {
      if (!Array.isArray(W)) continue;
      if (!(C in Z)) throw new Error(`Unknown Chalk style: ${C}`);
      Z = W.length > 0 ? Z[C](...W) : Z[C]
    }
    return Z
  }
  jF2.exports = (I, d) => {
    let G = [],
      Z = [],
      C = [];
    if (d.replace(k89, (W, w, B, A, V, X) => {
        if (w) C.push(hF2(w));
        else if (A) {
          let _ = C.join("");
          C = [], Z.push(G.length === 0 ? _ : bF2(I, G)(_)), G.push({
            inverse: B,
            styles: n89(A)
          })
        } else if (V) {
          if (G.length === 0) throw new Error("Found extraneous } in Chalk template literal");
          Z.push(bF2(I, G)(C.join(""))), C = [], G.pop()
        } else C.push(X)
      }), Z.push(C.join("")), G.length > 0) {
      let W = `Chalk template literal is missing ${G.length} closing bracket${G.length===1?"":"s"} (\`}\`)`;
      throw new Error(W)
    }
    return Z.join("")
  }
})
// @from(Start 5250708, End 5254571)
sF2 = Y((kJ3, aF2) => {
  var l$ = TF2(),
    {
      stdout: Mg1,
      stderr: Sg1
    } = Hx(),
    {
      stringReplaceAll: r89,
      stringEncaseCRLFWithFirstIndex: a89
    } = mF2(),
    {
      isArray: ea
    } = Array,
    cF2 = ["ansi", "ansi", "ansi256", "ansi16m"],
    uR = Object.create(null),
    s89 = (I, d = {}) => {
      if (d.level && !(Number.isInteger(d.level) && d.level >= 0 && d.level <= 3)) throw new Error("The `level` option should be an integer from 0 to 3");
      let G = Mg1 ? Mg1.level : 0;
      I.level = d.level === void 0 ? G : d.level
    };
  class pF2 {
    constructor(I) {
      return iF2(I)
    }
  }
  var iF2 = (I) => {
    let d = {};
    return s89(d, I), d.template = (...G) => rF2(d.template, ...G), Object.setPrototypeOf(d, ta.prototype), Object.setPrototypeOf(d.template, d), d.template.constructor = () => {
      throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.")
    }, d.template.Instance = pF2, d.template
  };

  function ta(I) {
    return iF2(I)
  }
  for (let [I, d] of Object.entries(l$)) uR[I] = {
    get() {
      let G = Is(this, Lg1(d.open, d.close, this._styler), this._isEmpty);
      return Object.defineProperty(this, I, {
        value: G
      }), G
    }
  };
  uR.visible = {
    get() {
      let I = Is(this, this._styler, !0);
      return Object.defineProperty(this, "visible", {
        value: I
      }), I
    }
  };
  var nF2 = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
  for (let I of nF2) uR[I] = {
    get() {
      let {
        level: d
      } = this;
      return function(...G) {
        let Z = Lg1(l$.color[cF2[d]][I](...G), l$.color.close, this._styler);
        return Is(this, Z, this._isEmpty)
      }
    }
  };
  for (let I of nF2) {
    let d = "bg" + I[0].toUpperCase() + I.slice(1);
    uR[d] = {
      get() {
        let {
          level: G
        } = this;
        return function(...Z) {
          let C = Lg1(l$.bgColor[cF2[G]][I](...Z), l$.bgColor.close, this._styler);
          return Is(this, C, this._isEmpty)
        }
      }
    }
  }
  var o89 = Object.defineProperties(() => {}, {
      ...uR,
      level: {
        enumerable: !0,
        get() {
          return this._generator.level
        },
        set(I) {
          this._generator.level = I
        }
      }
    }),
    Lg1 = (I, d, G) => {
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
    },
    Is = (I, d, G) => {
      let Z = (...C) => {
        if (ea(C[0]) && ea(C[0].raw)) return xF2(Z, rF2(Z, ...C));
        return xF2(Z, C.length === 1 ? "" + C[0] : C.join(" "))
      };
      return Object.setPrototypeOf(Z, o89), Z._generator = I, Z._styler = d, Z._isEmpty = G, Z
    },
    xF2 = (I, d) => {
      if (I.level <= 0 || !d) return I._isEmpty ? "" : d;
      let G = I._styler;
      if (G === void 0) return d;
      let {
        openAll: Z,
        closeAll: C
      } = G;
      if (d.indexOf("\x1B") !== -1)
        while (G !== void 0) d = r89(d, G.close, G.open), G = G.parent;
      let W = d.indexOf(`
`);
      if (W !== -1) d = a89(d, C, Z, W);
      return Z + d + C
    },
    Eg1, rF2 = (I, ...d) => {
      let [G] = d;
      if (!ea(G) || !ea(G.raw)) return d.join(" ");
      let Z = d.slice(1),
        C = [G.raw[0]];
      for (let W = 1; W < G.length; W++) C.push(String(Z[W - 1]).replace(/[{}\\]/g, "\\$&"), String(G.raw[W]));
      if (Eg1 === void 0) Eg1 = kF2();
      return Eg1(I, C.join(""))
    };
  Object.defineProperties(ta.prototype, uR);
  var ds = ta();
  ds.supportsColor = Mg1;
  ds.stderr = ta({
    level: Sg1 ? Sg1.level : 0
  });
  ds.stderr.supportsColor = Sg1;
  aF2.exports = ds
})
// @from(Start 5254577, End 5256851)
yg1 = Y((k4) => {
  var e89 = k4 && k4.__importDefault || function(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  };
  Object.defineProperty(k4, "__esModule", {
    value: !0
  });
  k4.parse = k4.stringify = k4.toJson = k4.fromJson = k4.DEFAULT_THEME = k4.plain = void 0;
  var i3 = e89(sF2()),
    t89 = function(I) {
      return I
    };
  k4.plain = t89;
  k4.DEFAULT_THEME = {
    keyword: i3.default.blue,
    built_in: i3.default.cyan,
    type: i3.default.cyan.dim,
    literal: i3.default.blue,
    number: i3.default.green,
    regexp: i3.default.red,
    string: i3.default.red,
    subst: k4.plain,
    symbol: k4.plain,
    class: i3.default.blue,
    function: i3.default.yellow,
    title: k4.plain,
    params: k4.plain,
    comment: i3.default.green,
    doctag: i3.default.green,
    meta: i3.default.grey,
    "meta-keyword": k4.plain,
    "meta-string": k4.plain,
    section: k4.plain,
    tag: i3.default.grey,
    name: i3.default.blue,
    "builtin-name": k4.plain,
    attr: i3.default.cyan,
    attribute: k4.plain,
    variable: k4.plain,
    bullet: k4.plain,
    code: k4.plain,
    emphasis: i3.default.italic,
    strong: i3.default.bold,
    formula: k4.plain,
    link: i3.default.underline,
    quote: k4.plain,
    "selector-tag": k4.plain,
    "selector-id": k4.plain,
    "selector-class": k4.plain,
    "selector-attr": k4.plain,
    "selector-pseudo": k4.plain,
    "template-tag": k4.plain,
    "template-variable": k4.plain,
    addition: i3.default.green,
    deletion: i3.default.red,
    default: k4.plain
  };

  function oF2(I) {
    var d = {};
    for (var G = 0, Z = Object.keys(I); G < Z.length; G++) {
      var C = Z[G],
        W = I[C];
      if (Array.isArray(W)) d[C] = W.reduce(function(w, B) {
        return B === "plain" ? k4.plain : w[B]
      }, i3.default);
      else d[C] = i3.default[W]
    }
    return d
  }
  k4.fromJson = oF2;

  function eF2(I) {
    var d = {};
    for (var G = 0, Z = Object.keys(d); G < Z.length; G++) {
      var C = Z[G],
        W = d[C];
      d[C] = W._styles
    }
    return d
  }
  k4.toJson = eF2;

  function I79(I) {
    return JSON.stringify(eF2(I))
  }
  k4.stringify = I79;

  function d79(I) {
    return oF2(JSON.parse(I))
  }
  k4.parse = d79
})
// @from(Start 5256857, End 5259623)
$g1 = Y((y6) => {
  var tF2 = y6 && y6.__createBinding || (Object.create ? function(I, d, G, Z) {
      if (Z === void 0) Z = G;
      Object.defineProperty(I, Z, {
        enumerable: !0,
        get: function() {
          return d[G]
        }
      })
    } : function(I, d, G, Z) {
      if (Z === void 0) Z = G;
      I[Z] = d[G]
    }),
    G79 = y6 && y6.__setModuleDefault || (Object.create ? function(I, d) {
      Object.defineProperty(I, "default", {
        enumerable: !0,
        value: d
      })
    } : function(I, d) {
      I.default = d
    }),
    Ig2 = y6 && y6.__importStar || function(I) {
      if (I && I.__esModule) return I;
      var d = {};
      if (I != null) {
        for (var G in I)
          if (G !== "default" && Object.prototype.hasOwnProperty.call(I, G)) tF2(d, I, G)
      }
      return G79(d, I), d
    },
    Z79 = y6 && y6.__exportStar || function(I, d) {
      for (var G in I)
        if (G !== "default" && !Object.prototype.hasOwnProperty.call(d, G)) tF2(d, I, G)
    },
    C79 = y6 && y6.__importDefault || function(I) {
      return I && I.__esModule ? I : {
        default: I
      }
    };
  Object.defineProperty(y6, "__esModule", {
    value: !0
  });
  y6.supportsLanguage = y6.listLanguages = y6.highlight = void 0;
  var Zs = Ig2(UR()),
    W79 = Ig2(HF2()),
    w79 = C79(qF2()),
    Gs = yg1();

  function Pg1(I, d, G) {
    if (d === void 0) d = {};
    switch (I.type) {
      case "text": {
        var Z = I.data;
        if (G === void 0) return (d.default || Gs.DEFAULT_THEME.default || Gs.plain)(Z);
        return Z
      }
      case "tag": {
        var C = /hljs-(\w+)/.exec(I.attribs.class);
        if (C) {
          var W = C[1],
            w = I.childNodes.map(function(B) {
              return Pg1(B, d, W)
            }).join("");
          return (d[W] || Gs.DEFAULT_THEME[W] || Gs.plain)(w)
        }
        return I.childNodes.map(function(B) {
          return Pg1(B, d)
        }).join("")
      }
    }
    throw new Error("Invalid node type " + I.type)
  }

  function B79(I, d) {
    if (d === void 0) d = {};
    var G = W79.parseFragment(I, {
      treeAdapter: w79.default
    });
    return G.childNodes.map(function(Z) {
      return Pg1(Z, d)
    }).join("")
  }

  function dg2(I, d) {
    if (d === void 0) d = {};
    var G;
    if (d.language) G = Zs.highlight(I, {
      language: d.language,
      ignoreIllegals: d.ignoreIllegals
    }).value;
    else G = Zs.highlightAuto(I, d.languageSubset).value;
    return B79(G, d.theme)
  }
  y6.highlight = dg2;

  function A79() {
    return Zs.listLanguages()
  }
  y6.listLanguages = A79;

  function V79(I) {
    return !!Zs.getLanguage(I)
  }
  y6.supportsLanguage = V79;
  y6.default = dg2;
  Z79(yg1(), y6)
})
// @from(Start 5259629, End 5261392)
$B = Y((FK3, _g2) => {
  var Yg2 = function(I) {
      return typeof I !== "undefined" && I !== null
    },
    v79 = function(I) {
      return typeof I === "object"
    },
    E79 = function(I) {
      return Object.prototype.toString.call(I) === "[object Object]"
    },
    M79 = function(I) {
      return typeof I === "function"
    },
    S79 = function(I) {
      return typeof I === "boolean"
    },
    L79 = function(I) {
      return I instanceof Buffer
    },
    y79 = function(I) {
      if (Yg2(I)) switch (I.constructor) {
        case Uint8Array:
        case Uint8ClampedArray:
        case Int8Array:
        case Uint16Array:
        case Int16Array:
        case Uint32Array:
        case Int32Array:
        case Float32Array:
        case Float64Array:
          return !0
      }
      return !1
    },
    P79 = function(I) {
      return I instanceof ArrayBuffer
    },
    $79 = function(I) {
      return typeof I === "string" && I.length > 0
    },
    u79 = function(I) {
      return typeof I === "number" && !Number.isNaN(I)
    },
    T79 = function(I) {
      return Number.isInteger(I)
    },
    O79 = function(I, d, G) {
      return I >= d && I <= G
    },
    m79 = function(I, d) {
      return d.includes(I)
    },
    l79 = function(I, d, G) {
      return new Error(`Expected ${d} for ${I} but received ${G} of type ${typeof G}`)
    },
    b79 = function(I, d) {
      return d.message = I.message, d
    };
  _g2.exports = {
    defined: Yg2,
    object: v79,
    plainObject: E79,
    fn: M79,
    bool: S79,
    buffer: L79,
    typedArray: y79,
    arrayBuffer: P79,
    string: $79,
    number: u79,
    integer: T79,
    inRange: O79,
    inArray: m79,
    invalidParameterError: l79,
    nativeError: b79
  }
})
// @from(Start 5261398, End 5261827)
Fg2 = Y((gK3, Hg2) => {
  var Dg2 = () => process.platform === "linux",
    Xs = null,
    h79 = () => {
      if (!Xs)
        if (Dg2() && process.report) {
          let I = process.report.excludeNetwork;
          process.report.excludeNetwork = !0, Xs = process.report.getReport(), process.report.excludeNetwork = I
        } else Xs = {};
      return Xs
    };
  Hg2.exports = {
    isLinux: Dg2,
    getReport: h79
  }
})
// @from(Start 5261833, End 5262161)
Kg2 = Y((JK3, Jg2) => {
  var gg2 = B1("fs"),
    j79 = (I) => gg2.readFileSync(I, "utf-8"),
    k79 = (I) => new Promise((d, G) => {
      gg2.readFile(I, "utf-8", (Z, C) => {
        if (Z) G(Z);
        else d(C)
      })
    });
  Jg2.exports = {
    LDD_PATH: "/usr/bin/ldd",
    readFileSync: j79,
    readFile: k79
  }
})
// @from(Start 5262167, End 5265727)
_s = Y((KK3, ug2) => {
  var zg2 = B1("child_process"),
    {
      isLinux: lR,
      getReport: Qg2
    } = Fg2(),
    {
      LDD_PATH: Ys,
      readFile: fg2,
      readFileSync: qg2
    } = Kg2(),
    uB, TB, XH = "",
    Rg2 = () => {
      if (!XH) return new Promise((I) => {
        zg2.exec("getconf GNU_LIBC_VERSION 2>&1 || true; ldd --version 2>&1 || true", (d, G) => {
          XH = d ? " " : G, I(XH)
        })
      });
      return XH
    },
    Ug2 = () => {
      if (!XH) try {
        XH = zg2.execSync("getconf GNU_LIBC_VERSION 2>&1 || true; ldd --version 2>&1 || true", {
          encoding: "utf8"
        })
      } catch (I) {
        XH = " "
      }
      return XH
    },
    YH = "glibc",
    vg2 = /LIBC[a-z0-9 \-).]*?(\d+\.\d+)/i,
    mR = "musl",
    x79 = (I) => I.includes("libc.musl-") || I.includes("ld-musl-"),
    Eg2 = () => {
      let I = Qg2();
      if (I.header && I.header.glibcVersionRuntime) return YH;
      if (Array.isArray(I.sharedObjects)) {
        if (I.sharedObjects.some(x79)) return mR
      }
      return null
    },
    Mg2 = (I) => {
      let [d, G] = I.split(/[\r\n]+/);
      if (d && d.includes(YH)) return YH;
      if (G && G.includes(mR)) return mR;
      return null
    },
    Sg2 = (I) => {
      if (I.includes("musl")) return mR;
      if (I.includes("GNU C Library")) return YH;
      return null
    },
    c79 = async () => {
      if (uB !== void 0) return uB;
      uB = null;
      try {
        let I = await fg2(Ys);
        uB = Sg2(I)
      } catch (I) {}
      return uB
    }, p79 = () => {
      if (uB !== void 0) return uB;
      uB = null;
      try {
        let I = qg2(Ys);
        uB = Sg2(I)
      } catch (I) {}
      return uB
    }, Lg2 = async () => {
      let I = null;
      if (lR()) {
        if (I = await c79(), !I) I = Eg2();
        if (!I) {
          let d = await Rg2();
          I = Mg2(d)
        }
      }
      return I
    }, yg2 = () => {
      let I = null;
      if (lR()) {
        if (I = p79(), !I) I = Eg2();
        if (!I) {
          let d = Ug2();
          I = Mg2(d)
        }
      }
      return I
    }, i79 = async () => lR() && await Lg2() !== YH, n79 = () => lR() && yg2() !== YH, r79 = async () => {
      if (TB !== void 0) return TB;
      TB = null;
      try {
        let d = (await fg2(Ys)).match(vg2);
        if (d) TB = d[1]
      } catch (I) {}
      return TB
    }, a79 = () => {
      if (TB !== void 0) return TB;
      TB = null;
      try {
        let d = qg2(Ys).match(vg2);
        if (d) TB = d[1]
      } catch (I) {}
      return TB
    }, Pg2 = () => {
      let I = Qg2();
      if (I.header && I.header.glibcVersionRuntime) return I.header.glibcVersionRuntime;
      return null
    }, Ng2 = (I) => I.trim().split(/\s+/)[1], $g2 = (I) => {
      let [d, G, Z] = I.split(/[\r\n]+/);
      if (d && d.includes(YH)) return Ng2(d);
      if (G && Z && G.includes(mR)) return Ng2(Z);
      return null
    }, s79 = async () => {
      let I = null;
      if (lR()) {
        if (I = await r79(), !I) I = Pg2();
        if (!I) {
          let d = await Rg2();
          I = $g2(d)
        }
      }
      return I
    }, o79 = () => {
      let I = null;
      if (lR()) {
        if (I = a79(), !I) I = Pg2();
        if (!I) {
          let d = Ug2();
          I = $g2(d)
        }
      }
      return I
    };
  ug2.exports = {
    GLIBC: YH,
    MUSL: mR,
    family: Lg2,
    familySync: yg2,
    isNonGlibcLinux: i79,
    isNonGlibcLinuxSync: n79,
    version: s79,
    versionSync: o79
  }
})
// @from(Start 5265733, End 5265959)
h$ = Y((NK3, Tg2) => {
  var e79 = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...I) => console.error("SEMVER", ...I) : () => {};
  Tg2.exports = e79
})
// @from(Start 5265965, End 5266381)
Ds = Y((zK3, Og2) => {
  var t79 = Number.MAX_SAFE_INTEGER || 9007199254740991,
    II9 = ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"];
  Og2.exports = {
    MAX_LENGTH: 256,
    MAX_SAFE_COMPONENT_LENGTH: 16,
    MAX_SAFE_BUILD_LENGTH: 250,
    MAX_SAFE_INTEGER: t79,
    RELEASE_TYPES: II9,
    SEMVER_SPEC_VERSION: "2.0.0",
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
  }
})
// @from(Start 5266387, End 5270408)
j$ = Y((VX, mg2) => {
  var {
    MAX_SAFE_COMPONENT_LENGTH: Og1,
    MAX_SAFE_BUILD_LENGTH: dI9,
    MAX_LENGTH: GI9
  } = Ds(), ZI9 = h$();
  VX = mg2.exports = {};
  var CI9 = VX.re = [],
    WI9 = VX.safeRe = [],
    H2 = VX.src = [],
    F2 = VX.t = {},
    wI9 = 0,
    mg1 = "[a-zA-Z0-9-]",
    BI9 = [
      ["\\s", 1],
      ["\\d", GI9],
      [mg1, dI9]
    ],
    AI9 = (I) => {
      for (let [d, G] of BI9) I = I.split(`${d}*`).join(`${d}{0,${G}}`).split(`${d}+`).join(`${d}{1,${G}}`);
      return I
    },
    v4 = (I, d, G) => {
      let Z = AI9(d),
        C = wI9++;
      ZI9(I, C, d), F2[I] = C, H2[C] = d, CI9[C] = new RegExp(d, G ? "g" : void 0), WI9[C] = new RegExp(Z, G ? "g" : void 0)
    };
  v4("NUMERICIDENTIFIER", "0|[1-9]\\d*");
  v4("NUMERICIDENTIFIERLOOSE", "\\d+");
  v4("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${mg1}*`);
  v4("MAINVERSION", `(${H2[F2.NUMERICIDENTIFIER]})\\.(${H2[F2.NUMERICIDENTIFIER]})\\.(${H2[F2.NUMERICIDENTIFIER]})`);
  v4("MAINVERSIONLOOSE", `(${H2[F2.NUMERICIDENTIFIERLOOSE]})\\.(${H2[F2.NUMERICIDENTIFIERLOOSE]})\\.(${H2[F2.NUMERICIDENTIFIERLOOSE]})`);
  v4("PRERELEASEIDENTIFIER", `(?:${H2[F2.NUMERICIDENTIFIER]}|${H2[F2.NONNUMERICIDENTIFIER]})`);
  v4("PRERELEASEIDENTIFIERLOOSE", `(?:${H2[F2.NUMERICIDENTIFIERLOOSE]}|${H2[F2.NONNUMERICIDENTIFIER]})`);
  v4("PRERELEASE", `(?:-(${H2[F2.PRERELEASEIDENTIFIER]}(?:\\.${H2[F2.PRERELEASEIDENTIFIER]})*))`);
  v4("PRERELEASELOOSE", `(?:-?(${H2[F2.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${H2[F2.PRERELEASEIDENTIFIERLOOSE]})*))`);
  v4("BUILDIDENTIFIER", `${mg1}+`);
  v4("BUILD", `(?:\\+(${H2[F2.BUILDIDENTIFIER]}(?:\\.${H2[F2.BUILDIDENTIFIER]})*))`);
  v4("FULLPLAIN", `v?${H2[F2.MAINVERSION]}${H2[F2.PRERELEASE]}?${H2[F2.BUILD]}?`);
  v4("FULL", `^${H2[F2.FULLPLAIN]}$`);
  v4("LOOSEPLAIN", `[v=\\s]*${H2[F2.MAINVERSIONLOOSE]}${H2[F2.PRERELEASELOOSE]}?${H2[F2.BUILD]}?`);
  v4("LOOSE", `^${H2[F2.LOOSEPLAIN]}$`);
  v4("GTLT", "((?:<|>)?=?)");
  v4("XRANGEIDENTIFIERLOOSE", `${H2[F2.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
  v4("XRANGEIDENTIFIER", `${H2[F2.NUMERICIDENTIFIER]}|x|X|\\*`);
  v4("XRANGEPLAIN", `[v=\\s]*(${H2[F2.XRANGEIDENTIFIER]})(?:\\.(${H2[F2.XRANGEIDENTIFIER]})(?:\\.(${H2[F2.XRANGEIDENTIFIER]})(?:${H2[F2.PRERELEASE]})?${H2[F2.BUILD]}?)?)?`);
  v4("XRANGEPLAINLOOSE", `[v=\\s]*(${H2[F2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${H2[F2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${H2[F2.XRANGEIDENTIFIERLOOSE]})(?:${H2[F2.PRERELEASELOOSE]})?${H2[F2.BUILD]}?)?)?`);
  v4("XRANGE", `^${H2[F2.GTLT]}\\s*${H2[F2.XRANGEPLAIN]}$`);
  v4("XRANGELOOSE", `^${H2[F2.GTLT]}\\s*${H2[F2.XRANGEPLAINLOOSE]}$`);
  v4("COERCEPLAIN", `(^|[^\\d])(\\d{1,${Og1}})(?:\\.(\\d{1,${Og1}}))?(?:\\.(\\d{1,${Og1}}))?`);
  v4("COERCE", `${H2[F2.COERCEPLAIN]}(?:$|[^\\d])`);
  v4("COERCEFULL", H2[F2.COERCEPLAIN] + `(?:${H2[F2.PRERELEASE]})?(?:${H2[F2.BUILD]})?(?:$|[^\\d])`);
  v4("COERCERTL", H2[F2.COERCE], !0);
  v4("COERCERTLFULL", H2[F2.COERCEFULL], !0);
  v4("LONETILDE", "(?:~>?)");
  v4("TILDETRIM", `(\\s*)${H2[F2.LONETILDE]}\\s+`, !0);
  VX.tildeTrimReplace = "$1~";
  v4("TILDE", `^${H2[F2.LONETILDE]}${H2[F2.XRANGEPLAIN]}$`);
  v4("TILDELOOSE", `^${H2[F2.LONETILDE]}${H2[F2.XRANGEPLAINLOOSE]}$`);
  v4("LONECARET", "(?:\\^)");
  v4("CARETTRIM", `(\\s*)${H2[F2.LONECARET]}\\s+`, !0);
  VX.caretTrimReplace = "$1^";
  v4("CARET", `^${H2[F2.LONECARET]}${H2[F2.XRANGEPLAIN]}$`);
  v4("CARETLOOSE", `^${H2[F2.LONECARET]}${H2[F2.XRANGEPLAINLOOSE]}$`);
  v4("COMPARATORLOOSE", `^${H2[F2.GTLT]}\\s*(${H2[F2.LOOSEPLAIN]})$|^$`);
  v4("COMPARATOR", `^${H2[F2.GTLT]}\\s*(${H2[F2.FULLPLAIN]})$|^$`);
  v4("COMPARATORTRIM", `(\\s*)${H2[F2.GTLT]}\\s*(${H2[F2.LOOSEPLAIN]}|${H2[F2.XRANGEPLAIN]})`, !0);
  VX.comparatorTrimReplace = "$1$2$3";
  v4("HYPHENRANGE", `^\\s*(${H2[F2.XRANGEPLAIN]})\\s+-\\s+(${H2[F2.XRANGEPLAIN]})\\s*$`);
  v4("HYPHENRANGELOOSE", `^\\s*(${H2[F2.XRANGEPLAINLOOSE]})\\s+-\\s+(${H2[F2.XRANGEPLAINLOOSE]})\\s*$`);
  v4("STAR", "(<|>)?=?\\s*\\*");
  v4("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
  v4("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$")
})
// @from(Start 5270414, End 5270652)
Hs = Y((QK3, lg2) => {
  var VI9 = Object.freeze({
      loose: !0
    }),
    XI9 = Object.freeze({}),
    YI9 = (I) => {
      if (!I) return XI9;
      if (typeof I !== "object") return VI9;
      return I
    };
  lg2.exports = YI9
})
// @from(Start 5270658, End 5271005)
kg2 = Y((fK3, jg2) => {
  var bg2 = /^[0-9]+$/,
    hg2 = (I, d) => {
      let G = bg2.test(I),
        Z = bg2.test(d);
      if (G && Z) I = +I, d = +d;
      return I === d ? 0 : G && !Z ? -1 : Z && !G ? 1 : I < d ? -1 : 1
    },
    _I9 = (I, d) => hg2(d, I);
  jg2.exports = {
    compareIdentifiers: hg2,
    rcompareIdentifiers: _I9
  }
})
// @from(Start 5271011, End 5276580)
hR = Y((qK3, ig2) => {
  var Fs = h$(),
    {
      MAX_LENGTH: xg2,
      MAX_SAFE_INTEGER: gs
    } = Ds(),
    {
      safeRe: cg2,
      t: pg2
    } = j$(),
    DI9 = Hs(),
    {
      compareIdentifiers: bR
    } = kg2();
  class gW {
    constructor(I, d) {
      if (d = DI9(d), I instanceof gW)
        if (I.loose === !!d.loose && I.includePrerelease === !!d.includePrerelease) return I;
        else I = I.version;
      else if (typeof I !== "string") throw new TypeError(`Invalid version. Must be a string. Got type "${typeof I}".`);
      if (I.length > xg2) throw new TypeError(`version is longer than ${xg2} characters`);
      Fs("SemVer", I, d), this.options = d, this.loose = !!d.loose, this.includePrerelease = !!d.includePrerelease;
      let G = I.trim().match(d.loose ? cg2[pg2.LOOSE] : cg2[pg2.FULL]);
      if (!G) throw new TypeError(`Invalid Version: ${I}`);
      if (this.raw = I, this.major = +G[1], this.minor = +G[2], this.patch = +G[3], this.major > gs || this.major < 0) throw new TypeError("Invalid major version");
      if (this.minor > gs || this.minor < 0) throw new TypeError("Invalid minor version");
      if (this.patch > gs || this.patch < 0) throw new TypeError("Invalid patch version");
      if (!G[4]) this.prerelease = [];
      else this.prerelease = G[4].split(".").map((Z) => {
        if (/^[0-9]+$/.test(Z)) {
          let C = +Z;
          if (C >= 0 && C < gs) return C
        }
        return Z
      });
      this.build = G[5] ? G[5].split(".") : [], this.format()
    }
    format() {
      if (this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length) this.version += `-${this.prerelease.join(".")}`;
      return this.version
    }
    toString() {
      return this.version
    }
    compare(I) {
      if (Fs("SemVer.compare", this.version, this.options, I), !(I instanceof gW)) {
        if (typeof I === "string" && I === this.version) return 0;
        I = new gW(I, this.options)
      }
      if (I.version === this.version) return 0;
      return this.compareMain(I) || this.comparePre(I)
    }
    compareMain(I) {
      if (!(I instanceof gW)) I = new gW(I, this.options);
      return bR(this.major, I.major) || bR(this.minor, I.minor) || bR(this.patch, I.patch)
    }
    comparePre(I) {
      if (!(I instanceof gW)) I = new gW(I, this.options);
      if (this.prerelease.length && !I.prerelease.length) return -1;
      else if (!this.prerelease.length && I.prerelease.length) return 1;
      else if (!this.prerelease.length && !I.prerelease.length) return 0;
      let d = 0;
      do {
        let G = this.prerelease[d],
          Z = I.prerelease[d];
        if (Fs("prerelease compare", d, G, Z), G === void 0 && Z === void 0) return 0;
        else if (Z === void 0) return 1;
        else if (G === void 0) return -1;
        else if (G === Z) continue;
        else return bR(G, Z)
      } while (++d)
    }
    compareBuild(I) {
      if (!(I instanceof gW)) I = new gW(I, this.options);
      let d = 0;
      do {
        let G = this.build[d],
          Z = I.build[d];
        if (Fs("build compare", d, G, Z), G === void 0 && Z === void 0) return 0;
        else if (Z === void 0) return 1;
        else if (G === void 0) return -1;
        else if (G === Z) continue;
        else return bR(G, Z)
      } while (++d)
    }
    inc(I, d, G) {
      switch (I) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", d, G);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", d, G);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", d, G), this.inc("pre", d, G);
          break;
        case "prerelease":
          if (this.prerelease.length === 0) this.inc("patch", d, G);
          this.inc("pre", d, G);
          break;
        case "major":
          if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) this.major++;
          this.minor = 0, this.patch = 0, this.prerelease = [];
          break;
        case "minor":
          if (this.patch !== 0 || this.prerelease.length === 0) this.minor++;
          this.patch = 0, this.prerelease = [];
          break;
        case "patch":
          if (this.prerelease.length === 0) this.patch++;
          this.prerelease = [];
          break;
        case "pre": {
          let Z = Number(G) ? 1 : 0;
          if (!d && G === !1) throw new Error("invalid increment argument: identifier is empty");
          if (this.prerelease.length === 0) this.prerelease = [Z];
          else {
            let C = this.prerelease.length;
            while (--C >= 0)
              if (typeof this.prerelease[C] === "number") this.prerelease[C]++, C = -2;
            if (C === -1) {
              if (d === this.prerelease.join(".") && G === !1) throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(Z)
            }
          }
          if (d) {
            let C = [d, Z];
            if (G === !1) C = [d];
            if (bR(this.prerelease[0], d) === 0) {
              if (isNaN(this.prerelease[1])) this.prerelease = C
            } else this.prerelease = C
          }
          break
        }
        default:
          throw new Error(`invalid increment argument: ${I}`)
      }
      if (this.raw = this.format(), this.build.length) this.raw += `+${this.build.join(".")}`;
      return this
    }
  }
  ig2.exports = gW
})
// @from(Start 5276586, End 5276839)
ag2 = Y((RK3, rg2) => {
  var ng2 = hR(),
    HI9 = (I, d, G = !1) => {
      if (I instanceof ng2) return I;
      try {
        return new ng2(I, d)
      } catch (Z) {
        if (!G) return null;
        throw Z
      }
    };
  rg2.exports = HI9
})
// @from(Start 5276845, End 5277897)
og2 = Y((UK3, sg2) => {
  var FI9 = hR(),
    gI9 = ag2(),
    {
      safeRe: Js,
      t: Ks
    } = j$(),
    JI9 = (I, d) => {
      if (I instanceof FI9) return I;
      if (typeof I === "number") I = String(I);
      if (typeof I !== "string") return null;
      d = d || {};
      let G = null;
      if (!d.rtl) G = I.match(d.includePrerelease ? Js[Ks.COERCEFULL] : Js[Ks.COERCE]);
      else {
        let A = d.includePrerelease ? Js[Ks.COERCERTLFULL] : Js[Ks.COERCERTL],
          V;
        while ((V = A.exec(I)) && (!G || G.index + G[0].length !== I.length)) {
          if (!G || V.index + V[0].length !== G.index + G[0].length) G = V;
          A.lastIndex = V.index + V[1].length + V[2].length
        }
        A.lastIndex = -1
      }
      if (G === null) return null;
      let Z = G[2],
        C = G[3] || "0",
        W = G[4] || "0",
        w = d.includePrerelease && G[5] ? `-${G[5]}` : "",
        B = d.includePrerelease && G[6] ? `+${G[6]}` : "";
      return gI9(`${Z}.${C}.${W}${w}${B}`, d)
    };
  sg2.exports = JI9
})
// @from(Start 5277903, End 5278027)
sJ = Y((vK3, tg2) => {
  var eg2 = hR(),
    KI9 = (I, d, G) => new eg2(I, G).compare(new eg2(d, G));
  tg2.exports = KI9
})
// @from(Start 5278033, End 5278139)
lg1 = Y((EK3, IJ2) => {
  var NI9 = sJ(),
    zI9 = (I, d, G) => NI9(I, d, G) >= 0;
  IJ2.exports = zI9
})
// @from(Start 5278145, End 5278717)
ZJ2 = Y((MK3, GJ2) => {
  class dJ2 {
    constructor() {
      this.max = 1000, this.map = new Map
    }
    get(I) {
      let d = this.map.get(I);
      if (d === void 0) return;
      else return this.map.delete(I), this.map.set(I, d), d
    }
    delete(I) {
      return this.map.delete(I)
    }
    set(I, d) {
      if (!this.delete(I) && d !== void 0) {
        if (this.map.size >= this.max) {
          let Z = this.map.keys().next().value;
          this.delete(Z)
        }
        this.map.set(I, d)
      }
      return this
    }
  }
  GJ2.exports = dJ2
})
// @from(Start 5278723, End 5278830)
WJ2 = Y((SK3, CJ2) => {
  var QI9 = sJ(),
    fI9 = (I, d, G) => QI9(I, d, G) === 0;
  CJ2.exports = fI9
})
// @from(Start 5278836, End 5278943)
BJ2 = Y((LK3, wJ2) => {
  var qI9 = sJ(),
    RI9 = (I, d, G) => qI9(I, d, G) !== 0;
  wJ2.exports = RI9
})
// @from(Start 5278949, End 5279054)
VJ2 = Y((yK3, AJ2) => {
  var UI9 = sJ(),
    vI9 = (I, d, G) => UI9(I, d, G) > 0;
  AJ2.exports = vI9
})
// @from(Start 5279060, End 5279165)
YJ2 = Y((PK3, XJ2) => {
  var EI9 = sJ(),
    MI9 = (I, d, G) => EI9(I, d, G) < 0;
  XJ2.exports = MI9
})
// @from(Start 5279171, End 5279277)
DJ2 = Y(($K3, _J2) => {
  var SI9 = sJ(),
    LI9 = (I, d, G) => SI9(I, d, G) <= 0;
  _J2.exports = LI9
})
// @from(Start 5279283, End 5280201)
FJ2 = Y((uK3, HJ2) => {
  var yI9 = WJ2(),
    PI9 = BJ2(),
    $I9 = VJ2(),
    uI9 = lg1(),
    TI9 = YJ2(),
    OI9 = DJ2(),
    mI9 = (I, d, G, Z) => {
      switch (d) {
        case "===":
          if (typeof I === "object") I = I.version;
          if (typeof G === "object") G = G.version;
          return I === G;
        case "!==":
          if (typeof I === "object") I = I.version;
          if (typeof G === "object") G = G.version;
          return I !== G;
        case "":
        case "=":
        case "==":
          return yI9(I, G, Z);
        case "!=":
          return PI9(I, G, Z);
        case ">":
          return $I9(I, G, Z);
        case ">=":
          return uI9(I, G, Z);
        case "<":
          return TI9(I, G, Z);
        case "<=":
          return OI9(I, G, Z);
        default:
          throw new TypeError(`Invalid operator: ${d}`)
      }
    };
  HJ2.exports = mI9
})
// @from(Start 5280207, End 5282747)
fJ2 = Y((TK3, QJ2) => {
  var k$ = Symbol("SemVer ANY");
  class Ns {
    static get ANY() {
      return k$
    }
    constructor(I, d) {
      if (d = gJ2(d), I instanceof Ns)
        if (I.loose === !!d.loose) return I;
        else I = I.value;
      if (I = I.trim().split(/\s+/).join(" "), hg1("comparator", I, d), this.options = d, this.loose = !!d.loose, this.parse(I), this.semver === k$) this.value = "";
      else this.value = this.operator + this.semver.version;
      hg1("comp", this)
    }
    parse(I) {
      let d = this.options.loose ? JJ2[KJ2.COMPARATORLOOSE] : JJ2[KJ2.COMPARATOR],
        G = I.match(d);
      if (!G) throw new TypeError(`Invalid comparator: ${I}`);
      if (this.operator = G[1] !== void 0 ? G[1] : "", this.operator === "=") this.operator = "";
      if (!G[2]) this.semver = k$;
      else this.semver = new NJ2(G[2], this.options.loose)
    }
    toString() {
      return this.value
    }
    test(I) {
      if (hg1("Comparator.test", I, this.options.loose), this.semver === k$ || I === k$) return !0;
      if (typeof I === "string") try {
        I = new NJ2(I, this.options)
      } catch (d) {
        return !1
      }
      return bg1(I, this.operator, this.semver, this.options)
    }
    intersects(I, d) {
      if (!(I instanceof Ns)) throw new TypeError("a Comparator is required");
      if (this.operator === "") {
        if (this.value === "") return !0;
        return new zJ2(I.value, d).test(this.value)
      } else if (I.operator === "") {
        if (I.value === "") return !0;
        return new zJ2(this.value, d).test(I.semver)
      }
      if (d = gJ2(d), d.includePrerelease && (this.value === "<0.0.0-0" || I.value === "<0.0.0-0")) return !1;
      if (!d.includePrerelease && (this.value.startsWith("<0.0.0") || I.value.startsWith("<0.0.0"))) return !1;
      if (this.operator.startsWith(">") && I.operator.startsWith(">")) return !0;
      if (this.operator.startsWith("<") && I.operator.startsWith("<")) return !0;
      if (this.semver.version === I.semver.version && this.operator.includes("=") && I.operator.includes("=")) return !0;
      if (bg1(this.semver, "<", I.semver, d) && this.operator.startsWith(">") && I.operator.startsWith("<")) return !0;
      if (bg1(this.semver, ">", I.semver, d) && this.operator.startsWith("<") && I.operator.startsWith(">")) return !0;
      return !1
    }
  }
  QJ2.exports = Ns;
  var gJ2 = Hs(),
    {
      safeRe: JJ2,
      t: KJ2
    } = j$(),
    bg1 = FJ2(),
    hg1 = h$(),
    NJ2 = hR(),
    zJ2 = jg1()
})
// @from(Start 5282753, End 5291125)
jg1 = Y((OK3, vJ2) => {
  var lI9 = /\s+/g;
  class x$ {
    constructor(I, d) {
      if (d = hI9(d), I instanceof x$)
        if (I.loose === !!d.loose && I.includePrerelease === !!d.includePrerelease) return I;
        else return new x$(I.raw, d);
      if (I instanceof kg1) return this.raw = I.value, this.set = [
        [I]
      ], this.formatted = void 0, this;
      if (this.options = d, this.loose = !!d.loose, this.includePrerelease = !!d.includePrerelease, this.raw = I.trim().replace(lI9, " "), this.set = this.raw.split("||").map((G) => this.parseRange(G.trim())).filter((G) => G.length), !this.set.length) throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        let G = this.set[0];
        if (this.set = this.set.filter((Z) => !RJ2(Z[0])), this.set.length === 0) this.set = [G];
        else if (this.set.length > 1) {
          for (let Z of this.set)
            if (Z.length === 1 && nI9(Z[0])) {
              this.set = [Z];
              break
            }
        }
      }
      this.formatted = void 0
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let I = 0; I < this.set.length; I++) {
          if (I > 0) this.formatted += "||";
          let d = this.set[I];
          for (let G = 0; G < d.length; G++) {
            if (G > 0) this.formatted += " ";
            this.formatted += d[G].toString().trim()
          }
        }
      }
      return this.formatted
    }
    format() {
      return this.range
    }
    toString() {
      return this.range
    }
    parseRange(I) {
      let G = ((this.options.includePrerelease && pI9) | (this.options.loose && iI9)) + ":" + I,
        Z = qJ2.get(G);
      if (Z) return Z;
      let C = this.options.loose,
        W = C ? Hd[gI.HYPHENRANGELOOSE] : Hd[gI.HYPHENRANGE];
      I = I.replace(W, Zd9(this.options.includePrerelease)), c9("hyphen replace", I), I = I.replace(Hd[gI.COMPARATORTRIM], kI9), c9("comparator trim", I), I = I.replace(Hd[gI.TILDETRIM], xI9), c9("tilde trim", I), I = I.replace(Hd[gI.CARETTRIM], cI9), c9("caret trim", I);
      let w = I.split(" ").map((X) => rI9(X, this.options)).join(" ").split(/\s+/).map((X) => Gd9(X, this.options));
      if (C) w = w.filter((X) => {
        return c9("loose invalid filter", X, this.options), !!X.match(Hd[gI.COMPARATORLOOSE])
      });
      c9("range list", w);
      let B = new Map,
        A = w.map((X) => new kg1(X, this.options));
      for (let X of A) {
        if (RJ2(X)) return [X];
        B.set(X.value, X)
      }
      if (B.size > 1 && B.has("")) B.delete("");
      let V = [...B.values()];
      return qJ2.set(G, V), V
    }
    intersects(I, d) {
      if (!(I instanceof x$)) throw new TypeError("a Range is required");
      return this.set.some((G) => {
        return UJ2(G, d) && I.set.some((Z) => {
          return UJ2(Z, d) && G.every((C) => {
            return Z.every((W) => {
              return C.intersects(W, d)
            })
          })
        })
      })
    }
    test(I) {
      if (!I) return !1;
      if (typeof I === "string") try {
        I = new jI9(I, this.options)
      } catch (d) {
        return !1
      }
      for (let d = 0; d < this.set.length; d++)
        if (Cd9(this.set[d], I, this.options)) return !0;
      return !1
    }
  }
  vJ2.exports = x$;
  var bI9 = ZJ2(),
    qJ2 = new bI9,
    hI9 = Hs(),
    kg1 = fJ2(),
    c9 = h$(),
    jI9 = hR(),
    {
      safeRe: Hd,
      t: gI,
      comparatorTrimReplace: kI9,
      tildeTrimReplace: xI9,
      caretTrimReplace: cI9
    } = j$(),
    {
      FLAG_INCLUDE_PRERELEASE: pI9,
      FLAG_LOOSE: iI9
    } = Ds(),
    RJ2 = (I) => I.value === "<0.0.0-0",
    nI9 = (I) => I.value === "",
    UJ2 = (I, d) => {
      let G = !0,
        Z = I.slice(),
        C = Z.pop();
      while (G && Z.length) G = Z.every((W) => {
        return C.intersects(W, d)
      }), C = Z.pop();
      return G
    },
    rI9 = (I, d) => {
      return c9("comp", I, d), I = oI9(I, d), c9("caret", I), I = aI9(I, d), c9("tildes", I), I = tI9(I, d), c9("xrange", I), I = dd9(I, d), c9("stars", I), I
    },
    JI = (I) => !I || I.toLowerCase() === "x" || I === "*",
    aI9 = (I, d) => {
      return I.trim().split(/\s+/).map((G) => sI9(G, d)).join(" ")
    },
    sI9 = (I, d) => {
      let G = d.loose ? Hd[gI.TILDELOOSE] : Hd[gI.TILDE];
      return I.replace(G, (Z, C, W, w, B) => {
        c9("tilde", I, Z, C, W, w, B);
        let A;
        if (JI(C)) A = "";
        else if (JI(W)) A = `>=${C}.0.0 <${+C+1}.0.0-0`;
        else if (JI(w)) A = `>=${C}.${W}.0 <${C}.${+W+1}.0-0`;
        else if (B) c9("replaceTilde pr", B), A = `>=${C}.${W}.${w}-${B} <${C}.${+W+1}.0-0`;
        else A = `>=${C}.${W}.${w} <${C}.${+W+1}.0-0`;
        return c9("tilde return", A), A
      })
    },
    oI9 = (I, d) => {
      return I.trim().split(/\s+/).map((G) => eI9(G, d)).join(" ")
    },
    eI9 = (I, d) => {
      c9("caret", I, d);
      let G = d.loose ? Hd[gI.CARETLOOSE] : Hd[gI.CARET],
        Z = d.includePrerelease ? "-0" : "";
      return I.replace(G, (C, W, w, B, A) => {
        c9("caret", I, C, W, w, B, A);
        let V;
        if (JI(W)) V = "";
        else if (JI(w)) V = `>=${W}.0.0${Z} <${+W+1}.0.0-0`;
        else if (JI(B))
          if (W === "0") V = `>=${W}.${w}.0${Z} <${W}.${+w+1}.0-0`;
          else V = `>=${W}.${w}.0${Z} <${+W+1}.0.0-0`;
        else if (A)
          if (c9("replaceCaret pr", A), W === "0")
            if (w === "0") V = `>=${W}.${w}.${B}-${A} <${W}.${w}.${+B+1}-0`;
            else V = `>=${W}.${w}.${B}-${A} <${W}.${+w+1}.0-0`;
        else V = `>=${W}.${w}.${B}-${A} <${+W+1}.0.0-0`;
        else if (c9("no pr"), W === "0")
          if (w === "0") V = `>=${W}.${w}.${B}${Z} <${W}.${w}.${+B+1}-0`;
          else V = `>=${W}.${w}.${B}${Z} <${W}.${+w+1}.0-0`;
        else V = `>=${W}.${w}.${B} <${+W+1}.0.0-0`;
        return c9("caret return", V), V
      })
    },
    tI9 = (I, d) => {
      return c9("replaceXRanges", I, d), I.split(/\s+/).map((G) => Id9(G, d)).join(" ")
    },
    Id9 = (I, d) => {
      I = I.trim();
      let G = d.loose ? Hd[gI.XRANGELOOSE] : Hd[gI.XRANGE];
      return I.replace(G, (Z, C, W, w, B, A) => {
        c9("xRange", I, Z, C, W, w, B, A);
        let V = JI(W),
          X = V || JI(w),
          _ = X || JI(B),
          F = _;
        if (C === "=" && F) C = "";
        if (A = d.includePrerelease ? "-0" : "", V)
          if (C === ">" || C === "<") Z = "<0.0.0-0";
          else Z = "*";
        else if (C && F) {
          if (X) w = 0;
          if (B = 0, C === ">")
            if (C = ">=", X) W = +W + 1, w = 0, B = 0;
            else w = +w + 1, B = 0;
          else if (C === "<=")
            if (C = "<", X) W = +W + 1;
            else w = +w + 1;
          if (C === "<") A = "-0";
          Z = `${C+W}.${w}.${B}${A}`
        } else if (X) Z = `>=${W}.0.0${A} <${+W+1}.0.0-0`;
        else if (_) Z = `>=${W}.${w}.0${A} <${W}.${+w+1}.0-0`;
        return c9("xRange return", Z), Z
      })
    },
    dd9 = (I, d) => {
      return c9("replaceStars", I, d), I.trim().replace(Hd[gI.STAR], "")
    },
    Gd9 = (I, d) => {
      return c9("replaceGTE0", I, d), I.trim().replace(Hd[d.includePrerelease ? gI.GTE0PRE : gI.GTE0], "")
    },
    Zd9 = (I) => (d, G, Z, C, W, w, B, A, V, X, _, F) => {
      if (JI(Z)) G = "";
      else if (JI(C)) G = `>=${Z}.0.0${I?"-0":""}`;
      else if (JI(W)) G = `>=${Z}.${C}.0${I?"-0":""}`;
      else if (w) G = `>=${G}`;
      else G = `>=${G}${I?"-0":""}`;
      if (JI(V)) A = "";
      else if (JI(X)) A = `<${+V+1}.0.0-0`;
      else if (JI(_)) A = `<${V}.${+X+1}.0-0`;
      else if (F) A = `<=${V}.${X}.${_}-${F}`;
      else if (I) A = `<${V}.${X}.${+_+1}-0`;
      else A = `<=${A}`;
      return `${G} ${A}`.trim()
    },
    Cd9 = (I, d, G) => {
      for (let Z = 0; Z < I.length; Z++)
        if (!I[Z].test(d)) return !1;
      if (d.prerelease.length && !G.includePrerelease) {
        for (let Z = 0; Z < I.length; Z++) {
          if (c9(I[Z].semver), I[Z].semver === kg1.ANY) continue;
          if (I[Z].semver.prerelease.length > 0) {
            let C = I[Z].semver;
            if (C.major === d.major && C.minor === d.minor && C.patch === d.patch) return !0
          }
        }
        return !1
      }
      return !0
    }
})
// @from(Start 5291131, End 5291335)
MJ2 = Y((mK3, EJ2) => {
  var Wd9 = jg1(),
    wd9 = (I, d, G) => {
      try {
        d = new Wd9(d, G)
      } catch (Z) {
        return !1
      }
      return d.test(I)
    };
  EJ2.exports = wd9
})
// @from(Start 5291341, End 5298616)
xg1 = Y((lK3, Bd9) => {
  Bd9.exports = {
    name: "sharp",
    description: "High performance Node.js image processing, the fastest module to resize JPEG, PNG, WebP, GIF, AVIF and TIFF images",
    version: "0.33.5",
    author: "Lovell Fuller <npm@lovell.info>",
    homepage: "https://sharp.pixelplumbing.com",
    contributors: ["Pierre Inglebert <pierre.inglebert@gmail.com>", "Jonathan Ong <jonathanrichardong@gmail.com>", "Chanon Sajjamanochai <chanon.s@gmail.com>", "Juliano Julio <julianojulio@gmail.com>", "Daniel Gasienica <daniel@gasienica.ch>", "Julian Walker <julian@fiftythree.com>", "Amit Pitaru <pitaru.amit@gmail.com>", "Brandon Aaron <hello.brandon@aaron.sh>", "Andreas Lind <andreas@one.com>", "Maurus Cuelenaere <mcuelenaere@gmail.com>", "Linus Unnebäck <linus@folkdatorn.se>", "Victor Mateevitsi <mvictoras@gmail.com>", "Alaric Holloway <alaric.holloway@gmail.com>", "Bernhard K. Weisshuhn <bkw@codingforce.com>", "Chris Riley <criley@primedia.com>", "David Carley <dacarley@gmail.com>", "John Tobin <john@limelightmobileinc.com>", "Kenton Gray <kentongray@gmail.com>", "Felix Bünemann <Felix.Buenemann@gmail.com>", "Samy Al Zahrani <samyalzahrany@gmail.com>", "Chintan Thakkar <lemnisk8@gmail.com>", "F. Orlando Galashan <frulo@gmx.de>", "Kleis Auke Wolthuizen <info@kleisauke.nl>", "Matt Hirsch <mhirsch@media.mit.edu>", "Matthias Thoemmes <thoemmes@gmail.com>", "Patrick Paskaris <patrick@paskaris.gr>", "Jérémy Lal <kapouer@melix.org>", "Rahul Nanwani <r.nanwani@gmail.com>", "Alice Monday <alice0meta@gmail.com>", "Kristo Jorgenson <kristo.jorgenson@gmail.com>", "YvesBos <yves_bos@outlook.com>", "Guy Maliar <guy@tailorbrands.com>", "Nicolas Coden <nicolas@ncoden.fr>", "Matt Parrish <matt.r.parrish@gmail.com>", "Marcel Bretschneider <marcel.bretschneider@gmail.com>", "Matthew McEachen <matthew+github@mceachen.org>", "Jarda Kotěšovec <jarda.kotesovec@gmail.com>", "Kenric D'Souza <kenric.dsouza@gmail.com>", "Oleh Aleinyk <oleg.aleynik@gmail.com>", "Marcel Bretschneider <marcel.bretschneider@gmail.com>", "Andrea Bianco <andrea.bianco@unibas.ch>", "Rik Heywood <rik@rik.org>", "Thomas Parisot <hi@oncletom.io>", "Nathan Graves <nathanrgraves+github@gmail.com>", "Tom Lokhorst <tom@lokhorst.eu>", "Espen Hovlandsdal <espen@hovlandsdal.com>", "Sylvain Dumont <sylvain.dumont35@gmail.com>", "Alun Davies <alun.owain.davies@googlemail.com>", "Aidan Hoolachan <ajhoolachan21@gmail.com>", "Axel Eirola <axel.eirola@iki.fi>", "Freezy <freezy@xbmc.org>", "Daiz <taneli.vatanen@gmail.com>", "Julian Aubourg <j@ubourg.net>", "Keith Belovay <keith@picthrive.com>", "Michael B. Klein <mbklein@gmail.com>", "Jordan Prudhomme <jordan@raboland.fr>", "Ilya Ovdin <iovdin@gmail.com>", "Andargor <andargor@yahoo.com>", "Paul Neave <paul.neave@gmail.com>", "Brendan Kennedy <brenwken@gmail.com>", "Brychan Bennett-Odlum <git@brychan.io>", "Edward Silverton <e.silverton@gmail.com>", "Roman Malieiev <aromaleev@gmail.com>", "Tomas Szabo <tomas.szabo@deftomat.com>", "Robert O'Rourke <robert@o-rourke.org>", "Guillermo Alfonso Varela Chouciño <guillevch@gmail.com>", "Christian Flintrup <chr@gigahost.dk>", "Manan Jadhav <manan@motionden.com>", "Leon Radley <leon@radley.se>", "alza54 <alza54@thiocod.in>", "Jacob Smith <jacob@frende.me>", "Michael Nutt <michael@nutt.im>", "Brad Parham <baparham@gmail.com>", "Taneli Vatanen <taneli.vatanen@gmail.com>", "Joris Dugué <zaruike10@gmail.com>", "Chris Banks <christopher.bradley.banks@gmail.com>", "Ompal Singh <ompal.hitm09@gmail.com>", "Brodan <christopher.hranj@gmail.com>", "Ankur Parihar <ankur.github@gmail.com>", "Brahim Ait elhaj <brahima@gmail.com>", "Mart Jansink <m.jansink@gmail.com>", "Lachlan Newman <lachnewman007@gmail.com>", "Dennis Beatty <dennis@dcbeatty.com>", "Ingvar Stepanyan <me@rreverser.com>", "Don Denton <don@happycollision.com>"],
    scripts: {
      install: "node install/check",
      clean: "rm -rf src/build/ .nyc_output/ coverage/ test/fixtures/output.*",
      test: "npm run test-lint && npm run test-unit && npm run test-licensing && npm run test-types",
      "test-lint": "semistandard && cpplint",
      "test-unit": "nyc --reporter=lcov --reporter=text --check-coverage --branches=100 mocha",
      "test-licensing": 'license-checker --production --summary --onlyAllow="Apache-2.0;BSD;ISC;LGPL-3.0-or-later;MIT"',
      "test-leak": "./test/leak/leak.sh",
      "test-types": "tsd",
      "package-from-local-build": "node npm/from-local-build",
      "package-from-github-release": "node npm/from-github-release",
      "docs-build": "node docs/build && node docs/search-index/build",
      "docs-serve": "cd docs && npx serve",
      "docs-publish": "cd docs && npx firebase-tools deploy --project pixelplumbing --only hosting:pixelplumbing-sharp"
    },
    type: "commonjs",
    main: "lib/index.js",
    types: "lib/index.d.ts",
    files: ["install", "lib", "src/*.{cc,h,gyp}"],
    repository: {
      type: "git",
      url: "git://github.com/lovell/sharp.git"
    },
    keywords: ["jpeg", "png", "webp", "avif", "tiff", "gif", "svg", "jp2", "dzi", "image", "resize", "thumbnail", "crop", "embed", "libvips", "vips"],
    dependencies: {
      color: "^4.2.3",
      "detect-libc": "^2.0.3",
      semver: "^7.6.3"
    },
    optionalDependencies: {
      "@img/sharp-darwin-arm64": "0.33.5",
      "@img/sharp-darwin-x64": "0.33.5",
      "@img/sharp-libvips-darwin-arm64": "1.0.4",
      "@img/sharp-libvips-darwin-x64": "1.0.4",
      "@img/sharp-libvips-linux-arm": "1.0.5",
      "@img/sharp-libvips-linux-arm64": "1.0.4",
      "@img/sharp-libvips-linux-s390x": "1.0.4",
      "@img/sharp-libvips-linux-x64": "1.0.4",
      "@img/sharp-libvips-linuxmusl-arm64": "1.0.4",
      "@img/sharp-libvips-linuxmusl-x64": "1.0.4",
      "@img/sharp-linux-arm": "0.33.5",
      "@img/sharp-linux-arm64": "0.33.5",
      "@img/sharp-linux-s390x": "0.33.5",
      "@img/sharp-linux-x64": "0.33.5",
      "@img/sharp-linuxmusl-arm64": "0.33.5",
      "@img/sharp-linuxmusl-x64": "0.33.5",
      "@img/sharp-wasm32": "0.33.5",
      "@img/sharp-win32-ia32": "0.33.5",
      "@img/sharp-win32-x64": "0.33.5"
    },
    devDependencies: {
      "@emnapi/runtime": "^1.2.0",
      "@img/sharp-libvips-dev": "1.0.4",
      "@img/sharp-libvips-dev-wasm32": "1.0.5",
      "@img/sharp-libvips-win32-ia32": "1.0.4",
      "@img/sharp-libvips-win32-x64": "1.0.4",
      "@types/node": "*",
      async: "^3.2.5",
      cc: "^3.0.1",
      emnapi: "^1.2.0",
      "exif-reader": "^2.0.1",
      "extract-zip": "^2.0.1",
      icc: "^3.0.0",
      "jsdoc-to-markdown": "^8.0.3",
      "license-checker": "^25.0.1",
      mocha: "^10.7.3",
      "node-addon-api": "^8.1.0",
      nyc: "^17.0.0",
      prebuild: "^13.0.1",
      semistandard: "^17.0.0",
      "tar-fs": "^3.0.6",
      tsd: "^0.31.1"
    },
    license: "Apache-2.0",
    engines: {
      node: "^18.17.0 || ^20.3.0 || >=21.0.0"
    },
    config: {
      libvips: ">=8.15.3"
    },
    funding: {
      url: "https://opencollective.com/libvips"
    },
    binary: {
      napi_versions: [9]
    },
    semistandard: {
      env: ["mocha"]
    },
    cc: {
      linelength: "120",
      filter: ["build/include"]
    },
    nyc: {
      include: ["lib"]
    },
    tsd: {
      directory: "test/types/"
    }
  }
})
// @from(Start 5298622, End 5302779)
pg1 = Y((bK3, lJ2) => {
  var {
    spawnSync: zs
  } = B1("node:child_process"), {
    createHash: Ad9
  } = B1("node:crypto"), PJ2 = og2(), Vd9 = lg1(), Xd9 = MJ2(), SJ2 = _s(), {
    config: Yd9,
    engines: LJ2,
    optionalDependencies: _d9
  } = xg1(), Dd9 = process.env.npm_package_config_libvips || Yd9.libvips, $J2 = PJ2(Dd9).version, Hd9 = ["darwin-arm64", "darwin-x64", "linux-arm", "linux-arm64", "linux-s390x", "linux-x64", "linuxmusl-arm64", "linuxmusl-x64", "win32-ia32", "win32-x64"], Qs = {
    encoding: "utf8",
    shell: !0
  }, Fd9 = (I) => {
    if (I instanceof Error) console.error(`sharp: Installation error: ${I.message}`);
    else console.log(`sharp: ${I}`)
  }, uJ2 = () => SJ2.isNonGlibcLinuxSync() ? SJ2.familySync() : "", gd9 = () => `${process.platform}${uJ2()}-${process.arch}`, jR = () => {
    if (TJ2()) return "wasm32";
    let {
      npm_config_arch: I,
      npm_config_platform: d,
      npm_config_libc: G
    } = process.env, Z = typeof G === "string" ? G : uJ2();
    return `${d||process.platform}${Z}-${I||process.arch}`
  }, Jd9 = () => {
    try {
      return B1(`@img/sharp-libvips-dev-${jR()}/include`)
    } catch {
      try {
        return (() => {
          throw new Error("Cannot require module " + "@img/sharp-libvips-dev/include");
        })()
      } catch {}
    }
    return ""
  }, Kd9 = () => {
    try {
      return (() => {
        throw new Error("Cannot require module " + "@img/sharp-libvips-dev/cplusplus");
      })()
    } catch {}
    return ""
  }, Nd9 = () => {
    try {
      return B1(`@img/sharp-libvips-dev-${jR()}/lib`)
    } catch {
      try {
        return B1(`@img/sharp-libvips-${jR()}/lib`)
      } catch {}
    }
    return ""
  }, zd9 = () => {
    if (process.release?.name === "node" && process.versions) {
      if (!Xd9(process.versions.node, LJ2.node)) return {
        found: process.versions.node,
        expected: LJ2.node
      }
    }
  }, TJ2 = () => {
    let {
      CC: I
    } = process.env;
    return Boolean(I && I.endsWith("/emcc"))
  }, Qd9 = () => {
    if (process.platform === "darwin" && process.arch === "x64") return (zs("sysctl sysctl.proc_translated", Qs).stdout || "").trim() === "sysctl.proc_translated: 1";
    return !1
  }, yJ2 = (I) => Ad9("sha512").update(I).digest("hex"), fd9 = () => {
    try {
      let I = yJ2(`imgsharp-libvips-${jR()}`),
        d = PJ2(_d9[`@img/sharp-libvips-${jR()}`]).version;
      return yJ2(`${I}npm:${d}`).slice(0, 10)
    } catch {}
    return ""
  }, qd9 = () => zs(`node-gyp rebuild --directory=src ${TJ2()?"--nodedir=emscripten":""}`, {
    ...Qs,
    stdio: "inherit"
  }).status, OJ2 = () => {
    if (process.platform !== "win32") return (zs("pkg-config --modversion vips-cpp", {
      ...Qs,
      env: {
        ...process.env,
        PKG_CONFIG_PATH: mJ2()
      }
    }).stdout || "").trim();
    else return ""
  }, mJ2 = () => {
    if (process.platform !== "win32") return [(zs('which brew >/dev/null 2>&1 && brew environment --plain | grep PKG_CONFIG_LIBDIR | cut -d" " -f2', Qs).stdout || "").trim(), process.env.PKG_CONFIG_PATH, "/usr/local/lib/pkgconfig", "/usr/lib/pkgconfig", "/usr/local/libdata/pkgconfig", "/usr/libdata/pkgconfig"].filter(Boolean).join(":");
    else return ""
  }, cg1 = (I, d, G) => {
    if (G) G(`Detected ${d}, skipping search for globally-installed libvips`);
    return I
  }, Rd9 = (I) => {
    if (Boolean(process.env.SHARP_IGNORE_GLOBAL_LIBVIPS) === !0) return cg1(!1, "SHARP_IGNORE_GLOBAL_LIBVIPS", I);
    if (Boolean(process.env.SHARP_FORCE_GLOBAL_LIBVIPS) === !0) return cg1(!0, "SHARP_FORCE_GLOBAL_LIBVIPS", I);
    if (Qd9()) return cg1(!1, "Rosetta", I);
    let d = OJ2();
    return !!d && Vd9(d, $J2)
  };
  lJ2.exports = {
    minimumLibvipsVersion: $J2,
    prebuiltPlatforms: Hd9,
    buildPlatformArch: jR,
    buildSharpLibvipsIncludeDir: Jd9,
    buildSharpLibvipsCPlusPlusDir: Kd9,
    buildSharpLibvipsLibDir: Nd9,
    isUnsupportedNodeRuntime: zd9,
    runtimePlatformArch: gd9,
    log: Fd9,
    yarnLocator: fd9,
    spawnRebuild: qd9,
    globalLibvipsVersion: OJ2,
    pkgConfigPath: mJ2,
    useGlobalLibvips: Rd9
  }
})
// @from(Start 5302785, End 5305581)
c$ = Y((jK3, hJ2) => {
  var {
    familySync: Ud9,
    versionSync: vd9
  } = _s(), {
    runtimePlatformArch: Ed9,
    isUnsupportedNodeRuntime: bJ2,
    prebuiltPlatforms: Md9,
    minimumLibvipsVersion: Sd9
  } = pg1(), oJ = Ed9(), Ld9 = [`../src/build/Release/sharp-${oJ}.node`, "../src/build/Release/sharp-wasm32.node", `@img/sharp-${oJ}/sharp.node`, "@img/sharp-wasm32/sharp.node"], ig1, fs = [];
  for (let I of Ld9) try {
    ig1 = B1(I);
    break
  } catch (d) {
    fs.push(d)
  }
  if (ig1) hJ2.exports = ig1;
  else {
    let [I, d, G] = ["linux", "darwin", "win32"].map((W) => oJ.startsWith(W)), Z = [`Could not load the "sharp" module using the ${oJ} runtime`];
    fs.forEach((W) => {
      if (W.code !== "MODULE_NOT_FOUND") Z.push(`${W.code}: ${W.message}`)
    });
    let C = fs.map((W) => W.message).join(" ");
    if (Z.push("Possible solutions:"), bJ2()) {
      let {
        found: W,
        expected: w
      } = bJ2();
      Z.push("- Please upgrade Node.js:", `    Found ${W}`, `    Requires ${w}`)
    } else if (Md9.includes(oJ)) {
      let [W, w] = oJ.split("-"), B = W.endsWith("musl") ? " --libc=musl" : "";
      Z.push("- Ensure optional dependencies can be installed:", "    npm install --include=optional sharp", "- Ensure your package manager supports multi-platform installation:", "    See https://sharp.pixelplumbing.com/install#cross-platform", "- Add platform-specific dependencies:", `    npm install --os=${W.replace("musl","")}${B} --cpu=${w} sharp`)
    } else Z.push(`- Manually install libvips >= ${Sd9}`, "- Add experimental WebAssembly-based dependencies:", "    npm install --cpu=wasm32 sharp", "    npm install @img/sharp-wasm32");
    if (I && /(symbol not found|CXXABI_)/i.test(C)) try {
      let {
        config: W
      } = B1(`@img/sharp-libvips-${oJ}/package`), w = `${Ud9()} ${vd9()}`, B = `${W.musl?"musl":"glibc"} ${W.musl||W.glibc}`;
      Z.push("- Update your OS:", `    Found ${w}`, `    Requires ${B}`)
    } catch (W) {}
    if (I && /\/snap\/core[0-9]{2}/.test(C)) Z.push("- Remove the Node.js Snap, which does not support native modules", "    snap remove node");
    if (d && /Incompatible library version/.test(C)) Z.push("- Update Homebrew:", "    brew update && brew upgrade vips");
    if (fs.some((W) => W.code === "ERR_DLOPEN_DISABLED")) Z.push("- Run Node.js without using the --no-addons flag");
    if (G && /The specified procedure could not be found/.test(C)) Z.push("- Using the canvas package on Windows?", "    See https://sharp.pixelplumbing.com/install#canvas-and-windows", "- Check for outdated versions of sharp in the dependency tree:", "    npm ls sharp");
    throw Z.push("- Consult the installation documentation:", "    See https://sharp.pixelplumbing.com/install"), new Error(Z.join(`
`))
  }
})
// @from(Start 5305587, End 5311291)
kJ2 = Y((xK3, jJ2) => {
  var yd9 = B1("node:util"),
    ng1 = B1("node:stream"),
    Pd9 = $B();
  c$();
  var $d9 = yd9.debuglog("sharp"),
    eJ = function(I, d) {
      if (arguments.length === 1 && !Pd9.defined(I)) throw new Error("Invalid input");
      if (!(this instanceof eJ)) return new eJ(I, d);
      return ng1.Duplex.call(this), this.options = {
        topOffsetPre: -1,
        leftOffsetPre: -1,
        widthPre: -1,
        heightPre: -1,
        topOffsetPost: -1,
        leftOffsetPost: -1,
        widthPost: -1,
        heightPost: -1,
        width: -1,
        height: -1,
        canvas: "crop",
        position: 0,
        resizeBackground: [0, 0, 0, 255],
        useExifOrientation: !1,
        angle: 0,
        rotationAngle: 0,
        rotationBackground: [0, 0, 0, 255],
        rotateBeforePreExtract: !1,
        flip: !1,
        flop: !1,
        extendTop: 0,
        extendBottom: 0,
        extendLeft: 0,
        extendRight: 0,
        extendBackground: [0, 0, 0, 255],
        extendWith: "background",
        withoutEnlargement: !1,
        withoutReduction: !1,
        affineMatrix: [],
        affineBackground: [0, 0, 0, 255],
        affineIdx: 0,
        affineIdy: 0,
        affineOdx: 0,
        affineOdy: 0,
        affineInterpolator: this.constructor.interpolators.bilinear,
        kernel: "lanczos3",
        fastShrinkOnLoad: !0,
        tint: [-1, 0, 0, 0],
        flatten: !1,
        flattenBackground: [0, 0, 0],
        unflatten: !1,
        negate: !1,
        negateAlpha: !0,
        medianSize: 0,
        blurSigma: 0,
        precision: "integer",
        minAmpl: 0.2,
        sharpenSigma: 0,
        sharpenM1: 1,
        sharpenM2: 2,
        sharpenX1: 2,
        sharpenY2: 10,
        sharpenY3: 20,
        threshold: 0,
        thresholdGrayscale: !0,
        trimBackground: [],
        trimThreshold: -1,
        trimLineArt: !1,
        gamma: 0,
        gammaOut: 0,
        greyscale: !1,
        normalise: !1,
        normaliseLower: 1,
        normaliseUpper: 99,
        claheWidth: 0,
        claheHeight: 0,
        claheMaxSlope: 3,
        brightness: 1,
        saturation: 1,
        hue: 0,
        lightness: 0,
        booleanBufferIn: null,
        booleanFileIn: "",
        joinChannelIn: [],
        extractChannel: -1,
        removeAlpha: !1,
        ensureAlpha: -1,
        colourspace: "srgb",
        colourspacePipeline: "last",
        composite: [],
        fileOut: "",
        formatOut: "input",
        streamOut: !1,
        keepMetadata: 0,
        withMetadataOrientation: -1,
        withMetadataDensity: 0,
        withIccProfile: "",
        withExif: {},
        withExifMerge: !0,
        resolveWithObject: !1,
        jpegQuality: 80,
        jpegProgressive: !1,
        jpegChromaSubsampling: "4:2:0",
        jpegTrellisQuantisation: !1,
        jpegOvershootDeringing: !1,
        jpegOptimiseScans: !1,
        jpegOptimiseCoding: !0,
        jpegQuantisationTable: 0,
        pngProgressive: !1,
        pngCompressionLevel: 6,
        pngAdaptiveFiltering: !1,
        pngPalette: !1,
        pngQuality: 100,
        pngEffort: 7,
        pngBitdepth: 8,
        pngDither: 1,
        jp2Quality: 80,
        jp2TileHeight: 512,
        jp2TileWidth: 512,
        jp2Lossless: !1,
        jp2ChromaSubsampling: "4:4:4",
        webpQuality: 80,
        webpAlphaQuality: 100,
        webpLossless: !1,
        webpNearLossless: !1,
        webpSmartSubsample: !1,
        webpPreset: "default",
        webpEffort: 4,
        webpMinSize: !1,
        webpMixed: !1,
        gifBitdepth: 8,
        gifEffort: 7,
        gifDither: 1,
        gifInterFrameMaxError: 0,
        gifInterPaletteMaxError: 3,
        gifReuse: !0,
        gifProgressive: !1,
        tiffQuality: 80,
        tiffCompression: "jpeg",
        tiffPredictor: "horizontal",
        tiffPyramid: !1,
        tiffMiniswhite: !1,
        tiffBitdepth: 8,
        tiffTile: !1,
        tiffTileHeight: 256,
        tiffTileWidth: 256,
        tiffXres: 1,
        tiffYres: 1,
        tiffResolutionUnit: "inch",
        heifQuality: 50,
        heifLossless: !1,
        heifCompression: "av1",
        heifEffort: 4,
        heifChromaSubsampling: "4:4:4",
        heifBitdepth: 8,
        jxlDistance: 1,
        jxlDecodingTier: 0,
        jxlEffort: 7,
        jxlLossless: !1,
        rawDepth: "uchar",
        tileSize: 256,
        tileOverlap: 0,
        tileContainer: "fs",
        tileLayout: "dz",
        tileFormat: "last",
        tileDepth: "last",
        tileAngle: 0,
        tileSkipBlanks: -1,
        tileBackground: [255, 255, 255, 255],
        tileCentre: !1,
        tileId: "https://example.com/iiif",
        tileBasename: "",
        timeoutSeconds: 0,
        linearA: [],
        linearB: [],
        debuglog: (G) => {
          this.emit("warning", G), $d9(G)
        },
        queueListener: function(G) {
          eJ.queue.emit("change", G)
        }
      }, this.options.input = this._createInputDescriptor(I, d, {
        allowStream: !0
      }), this
    };
  Object.setPrototypeOf(eJ.prototype, ng1.Duplex.prototype);
  Object.setPrototypeOf(eJ, ng1.Duplex);

  function ud9() {
    let I = this.constructor.call(),
      {
        debuglog: d,
        queueListener: G,
        ...Z
      } = this.options;
    if (I.options = structuredClone(Z), I.options.debuglog = d, I.options.queueListener = G, this._isStreamInput()) this.on("finish", () => {
      this._flattenBufferIn(), I.options.input.buffer = this.options.input.buffer, I.emit("finish")
    });
    return I
  }
  Object.assign(eJ.prototype, {
    clone: ud9
  });
  jJ2.exports = eJ
})
// @from(Start 5311297, End 5311595)
cJ2 = Y((cK3, xJ2) => {
  xJ2.exports = function I(d) {
    if (!d || typeof d === "string") return !1;
    return d instanceof Array || Array.isArray(d) || d.length >= 0 && (d.splice instanceof Function || Object.getOwnPropertyDescriptor(d, d.length - 1) && d.constructor.name !== "String")
  }
})
// @from(Start 5311601, End 5312038)
nJ2 = Y((pK3, iJ2) => {
  var Td9 = cJ2(),
    Od9 = Array.prototype.concat,
    md9 = Array.prototype.slice,
    pJ2 = iJ2.exports = function I(d) {
      var G = [];
      for (var Z = 0, C = d.length; Z < C; Z++) {
        var W = d[Z];
        if (Td9(W)) G = Od9.call(G, md9.call(W));
        else G.push(W)
      }
      return G
    };
  pJ2.wrap = function(I) {
    return function() {
      return I(pJ2(arguments))
    }
  }
})
// @from(Start 5312044, End 5316711)
oJ2 = Y((iK3, sJ2) => {
  var p$ = fg1(),
    i$ = nJ2(),
    rJ2 = Object.hasOwnProperty,
    aJ2 = Object.create(null);
  for (qs in p$)
    if (rJ2.call(p$, qs)) aJ2[p$[qs]] = qs;
  var qs, YG = sJ2.exports = {
    to: {},
    get: {}
  };
  YG.get = function(I) {
    var d = I.substring(0, 3).toLowerCase(),
      G, Z;
    switch (d) {
      case "hsl":
        G = YG.get.hsl(I), Z = "hsl";
        break;
      case "hwb":
        G = YG.get.hwb(I), Z = "hwb";
        break;
      default:
        G = YG.get.rgb(I), Z = "rgb";
        break
    }
    if (!G) return null;
    return {
      model: Z,
      value: G
    }
  };
  YG.get.rgb = function(I) {
    if (!I) return null;
    var d = /^#([a-f0-9]{3,4})$/i,
      G = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i,
      Z = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,
      C = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,
      W = /^(\w+)$/,
      w = [0, 0, 0, 1],
      B, A, V;
    if (B = I.match(G)) {
      V = B[2], B = B[1];
      for (A = 0; A < 3; A++) {
        var X = A * 2;
        w[A] = parseInt(B.slice(X, X + 2), 16)
      }
      if (V) w[3] = parseInt(V, 16) / 255
    } else if (B = I.match(d)) {
      B = B[1], V = B[3];
      for (A = 0; A < 3; A++) w[A] = parseInt(B[A] + B[A], 16);
      if (V) w[3] = parseInt(V + V, 16) / 255
    } else if (B = I.match(Z)) {
      for (A = 0; A < 3; A++) w[A] = parseInt(B[A + 1], 0);
      if (B[4])
        if (B[5]) w[3] = parseFloat(B[4]) * 0.01;
        else w[3] = parseFloat(B[4])
    } else if (B = I.match(C)) {
      for (A = 0; A < 3; A++) w[A] = Math.round(parseFloat(B[A + 1]) * 2.55);
      if (B[4])
        if (B[5]) w[3] = parseFloat(B[4]) * 0.01;
        else w[3] = parseFloat(B[4])
    } else if (B = I.match(W)) {
      if (B[1] === "transparent") return [0, 0, 0, 0];
      if (!rJ2.call(p$, B[1])) return null;
      return w = p$[B[1]], w[3] = 1, w
    } else return null;
    for (A = 0; A < 3; A++) w[A] = _H(w[A], 0, 255);
    return w[3] = _H(w[3], 0, 1), w
  };
  YG.get.hsl = function(I) {
    if (!I) return null;
    var d = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,
      G = I.match(d);
    if (G) {
      var Z = parseFloat(G[4]),
        C = (parseFloat(G[1]) % 360 + 360) % 360,
        W = _H(parseFloat(G[2]), 0, 100),
        w = _H(parseFloat(G[3]), 0, 100),
        B = _H(isNaN(Z) ? 1 : Z, 0, 1);
      return [C, W, w, B]
    }
    return null
  };
  YG.get.hwb = function(I) {
    if (!I) return null;
    var d = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,
      G = I.match(d);
    if (G) {
      var Z = parseFloat(G[4]),
        C = (parseFloat(G[1]) % 360 + 360) % 360,
        W = _H(parseFloat(G[2]), 0, 100),
        w = _H(parseFloat(G[3]), 0, 100),
        B = _H(isNaN(Z) ? 1 : Z, 0, 1);
      return [C, W, w, B]
    }
    return null
  };
  YG.to.hex = function() {
    var I = i$(arguments);
    return "#" + Rs(I[0]) + Rs(I[1]) + Rs(I[2]) + (I[3] < 1 ? Rs(Math.round(I[3] * 255)) : "")
  };
  YG.to.rgb = function() {
    var I = i$(arguments);
    return I.length < 4 || I[3] === 1 ? "rgb(" + Math.round(I[0]) + ", " + Math.round(I[1]) + ", " + Math.round(I[2]) + ")" : "rgba(" + Math.round(I[0]) + ", " + Math.round(I[1]) + ", " + Math.round(I[2]) + ", " + I[3] + ")"
  };
  YG.to.rgb.percent = function() {
    var I = i$(arguments),
      d = Math.round(I[0] / 255 * 100),
      G = Math.round(I[1] / 255 * 100),
      Z = Math.round(I[2] / 255 * 100);
    return I.length < 4 || I[3] === 1 ? "rgb(" + d + "%, " + G + "%, " + Z + "%)" : "rgba(" + d + "%, " + G + "%, " + Z + "%, " + I[3] + ")"
  };
  YG.to.hsl = function() {
    var I = i$(arguments);
    return I.length < 4 || I[3] === 1 ? "hsl(" + I[0] + ", " + I[1] + "%, " + I[2] + "%)" : "hsla(" + I[0] + ", " + I[1] + "%, " + I[2] + "%, " + I[3] + ")"
  };
  YG.to.hwb = function() {
    var I = i$(arguments),
      d = "";
    if (I.length >= 4 && I[3] !== 1) d = ", " + I[3];
    return "hwb(" + I[0] + ", " + I[1] + "%, " + I[2] + "%" + d + ")"
  };
  YG.to.keyword = function(I) {
    return aJ2[I.slice(0, 3)]
  };

  function _H(I, d, G) {
    return Math.min(Math.max(d, I), G)
  }

  function Rs(I) {
    var d = Math.round(I).toString(16).toUpperCase();
    return d.length < 2 ? "0" + d : d
  }
})
// @from(Start 5316717, End 5325271)
vs = Y((nK3, tJ2) => {
  var kR = oJ2(),
    _G = Ug1(),
    eJ2 = ["keyword", "gray", "hex"],
    rg1 = {};
  for (let I of Object.keys(_G)) rg1[[..._G[I].labels].sort().join("")] = I;
  var Us = {};

  function f8(I, d) {
    if (!(this instanceof f8)) return new f8(I, d);
    if (d && d in eJ2) d = null;
    if (d && !(d in _G)) throw new Error("Unknown model: " + d);
    let G, Z;
    if (I == null) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
    else if (I instanceof f8) this.model = I.model, this.color = [...I.color], this.valpha = I.valpha;
    else if (typeof I === "string") {
      let C = kR.get(I);
      if (C === null) throw new Error("Unable to parse color from string: " + I);
      this.model = C.model, Z = _G[this.model].channels, this.color = C.value.slice(0, Z), this.valpha = typeof C.value[Z] === "number" ? C.value[Z] : 1
    } else if (I.length > 0) {
      this.model = d || "rgb", Z = _G[this.model].channels;
      let C = Array.prototype.slice.call(I, 0, Z);
      this.color = ag1(C, Z), this.valpha = typeof I[Z] === "number" ? I[Z] : 1
    } else if (typeof I === "number") this.model = "rgb", this.color = [I >> 16 & 255, I >> 8 & 255, I & 255], this.valpha = 1;
    else {
      this.valpha = 1;
      let C = Object.keys(I);
      if ("alpha" in I) C.splice(C.indexOf("alpha"), 1), this.valpha = typeof I.alpha === "number" ? I.alpha : 0;
      let W = C.sort().join("");
      if (!(W in rg1)) throw new Error("Unable to parse color from object: " + JSON.stringify(I));
      this.model = rg1[W];
      let {
        labels: w
      } = _G[this.model], B = [];
      for (G = 0; G < w.length; G++) B.push(I[w[G]]);
      this.color = ag1(B)
    }
    if (Us[this.model]) {
      Z = _G[this.model].channels;
      for (G = 0; G < Z; G++) {
        let C = Us[this.model][G];
        if (C) this.color[G] = C(this.color[G])
      }
    }
    if (this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze) Object.freeze(this)
  }
  f8.prototype = {
    toString() {
      return this.string()
    },
    toJSON() {
      return this[this.model]()
    },
    string(I) {
      let d = this.model in kR.to ? this : this.rgb();
      d = d.round(typeof I === "number" ? I : 1);
      let G = d.valpha === 1 ? d.color : [...d.color, this.valpha];
      return kR.to[d.model](G)
    },
    percentString(I) {
      let d = this.rgb().round(typeof I === "number" ? I : 1),
        G = d.valpha === 1 ? d.color : [...d.color, this.valpha];
      return kR.to.rgb.percent(G)
    },
    array() {
      return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha]
    },
    object() {
      let I = {},
        {
          channels: d
        } = _G[this.model],
        {
          labels: G
        } = _G[this.model];
      for (let Z = 0; Z < d; Z++) I[G[Z]] = this.color[Z];
      if (this.valpha !== 1) I.alpha = this.valpha;
      return I
    },
    unitArray() {
      let I = this.rgb().color;
      if (I[0] /= 255, I[1] /= 255, I[2] /= 255, this.valpha !== 1) I.push(this.valpha);
      return I
    },
    unitObject() {
      let I = this.rgb().object();
      if (I.r /= 255, I.g /= 255, I.b /= 255, this.valpha !== 1) I.alpha = this.valpha;
      return I
    },
    round(I) {
      return I = Math.max(I || 0, 0), new f8([...this.color.map(bd9(I)), this.valpha], this.model)
    },
    alpha(I) {
      if (I !== void 0) return new f8([...this.color, Math.max(0, Math.min(1, I))], this.model);
      return this.valpha
    },
    red: n3("rgb", 0, s6(255)),
    green: n3("rgb", 1, s6(255)),
    blue: n3("rgb", 2, s6(255)),
    hue: n3(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (I) => (I % 360 + 360) % 360),
    saturationl: n3("hsl", 1, s6(100)),
    lightness: n3("hsl", 2, s6(100)),
    saturationv: n3("hsv", 1, s6(100)),
    value: n3("hsv", 2, s6(100)),
    chroma: n3("hcg", 1, s6(100)),
    gray: n3("hcg", 2, s6(100)),
    white: n3("hwb", 1, s6(100)),
    wblack: n3("hwb", 2, s6(100)),
    cyan: n3("cmyk", 0, s6(100)),
    magenta: n3("cmyk", 1, s6(100)),
    yellow: n3("cmyk", 2, s6(100)),
    black: n3("cmyk", 3, s6(100)),
    x: n3("xyz", 0, s6(95.047)),
    y: n3("xyz", 1, s6(100)),
    z: n3("xyz", 2, s6(108.833)),
    l: n3("lab", 0, s6(100)),
    a: n3("lab", 1),
    b: n3("lab", 2),
    keyword(I) {
      if (I !== void 0) return new f8(I);
      return _G[this.model].keyword(this.color)
    },
    hex(I) {
      if (I !== void 0) return new f8(I);
      return kR.to.hex(this.rgb().round().color)
    },
    hexa(I) {
      if (I !== void 0) return new f8(I);
      let d = this.rgb().round().color,
        G = Math.round(this.valpha * 255).toString(16).toUpperCase();
      if (G.length === 1) G = "0" + G;
      return kR.to.hex(d) + G
    },
    rgbNumber() {
      let I = this.rgb().color;
      return (I[0] & 255) << 16 | (I[1] & 255) << 8 | I[2] & 255
    },
    luminosity() {
      let I = this.rgb().color,
        d = [];
      for (let [G, Z] of I.entries()) {
        let C = Z / 255;
        d[G] = C <= 0.04045 ? C / 12.92 : ((C + 0.055) / 1.055) ** 2.4
      }
      return 0.2126 * d[0] + 0.7152 * d[1] + 0.0722 * d[2]
    },
    contrast(I) {
      let d = this.luminosity(),
        G = I.luminosity();
      if (d > G) return (d + 0.05) / (G + 0.05);
      return (G + 0.05) / (d + 0.05)
    },
    level(I) {
      let d = this.contrast(I);
      if (d >= 7) return "AAA";
      return d >= 4.5 ? "AA" : ""
    },
    isDark() {
      let I = this.rgb().color;
      return (I[0] * 2126 + I[1] * 7152 + I[2] * 722) / 1e4 < 128
    },
    isLight() {
      return !this.isDark()
    },
    negate() {
      let I = this.rgb();
      for (let d = 0; d < 3; d++) I.color[d] = 255 - I.color[d];
      return I
    },
    lighten(I) {
      let d = this.hsl();
      return d.color[2] += d.color[2] * I, d
    },
    darken(I) {
      let d = this.hsl();
      return d.color[2] -= d.color[2] * I, d
    },
    saturate(I) {
      let d = this.hsl();
      return d.color[1] += d.color[1] * I, d
    },
    desaturate(I) {
      let d = this.hsl();
      return d.color[1] -= d.color[1] * I, d
    },
    whiten(I) {
      let d = this.hwb();
      return d.color[1] += d.color[1] * I, d
    },
    blacken(I) {
      let d = this.hwb();
      return d.color[2] += d.color[2] * I, d
    },
    grayscale() {
      let I = this.rgb().color,
        d = I[0] * 0.3 + I[1] * 0.59 + I[2] * 0.11;
      return f8.rgb(d, d, d)
    },
    fade(I) {
      return this.alpha(this.valpha - this.valpha * I)
    },
    opaquer(I) {
      return this.alpha(this.valpha + this.valpha * I)
    },
    rotate(I) {
      let d = this.hsl(),
        G = d.color[0];
      return G = (G + I) % 360, G = G < 0 ? 360 + G : G, d.color[0] = G, d
    },
    mix(I, d) {
      if (!I || !I.rgb) throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof I);
      let G = I.rgb(),
        Z = this.rgb(),
        C = d === void 0 ? 0.5 : d,
        W = 2 * C - 1,
        w = G.alpha() - Z.alpha(),
        B = ((W * w === -1 ? W : (W + w) / (1 + W * w)) + 1) / 2,
        A = 1 - B;
      return f8.rgb(B * G.red() + A * Z.red(), B * G.green() + A * Z.green(), B * G.blue() + A * Z.blue(), G.alpha() * C + Z.alpha() * (1 - C))
    }
  };
  for (let I of Object.keys(_G)) {
    if (eJ2.includes(I)) continue;
    let {
      channels: d
    } = _G[I];
    f8.prototype[I] = function(...G) {
      if (this.model === I) return new f8(this);
      if (G.length > 0) return new f8(G, I);
      return new f8([...hd9(_G[this.model][I].raw(this.color)), this.valpha], I)
    }, f8[I] = function(...G) {
      let Z = G[0];
      if (typeof Z === "number") Z = ag1(G, d);
      return new f8(Z, I)
    }
  }

  function ld9(I, d) {
    return Number(I.toFixed(d))
  }

  function bd9(I) {
    return function(d) {
      return ld9(d, I)
    }
  }

  function n3(I, d, G) {
    I = Array.isArray(I) ? I : [I];
    for (let Z of I)(Us[Z] || (Us[Z] = []))[d] = G;
    return I = I[0],
      function(Z) {
        let C;
        if (Z !== void 0) {
          if (G) Z = G(Z);
          return C = this[I](), C.color[d] = Z, C
        }
        if (C = this[I]().color[d], G) C = G(C);
        return C
      }
  }

  function s6(I) {
    return function(d) {
      return Math.max(0, Math.min(I, d))
    }
  }

  function hd9(I) {
    return Array.isArray(I) ? I : [I]
  }

  function ag1(I, d) {
    for (let G = 0; G < d; G++)
      if (typeof I[G] !== "number") I[G] = 0;
    return I
  }
  tJ2.exports = f8
})
// @from(Start 5325277, End 5338193)
GK2 = Y((rK3, dK2) => {
  var jd9 = vs(),
    C0 = $B(),
    DH = c$(),
    kd9 = {
      left: "low",
      center: "centre",
      centre: "centre",
      right: "high"
    };

  function IK2(I) {
    let {
      raw: d,
      density: G,
      limitInputPixels: Z,
      ignoreIcc: C,
      unlimited: W,
      sequentialRead: w,
      failOn: B,
      failOnError: A,
      animated: V,
      page: X,
      pages: _,
      subifd: F
    } = I;
    return [d, G, Z, C, W, w, B, A, V, X, _, F].some(C0.defined) ? {
      raw: d,
      density: G,
      limitInputPixels: Z,
      ignoreIcc: C,
      unlimited: W,
      sequentialRead: w,
      failOn: B,
      failOnError: A,
      animated: V,
      page: X,
      pages: _,
      subifd: F
    } : void 0
  }

  function xd9(I, d, G) {
    let Z = {
      failOn: "warning",
      limitInputPixels: Math.pow(16383, 2),
      ignoreIcc: !1,
      unlimited: !1,
      sequentialRead: !0
    };
    if (C0.string(I)) Z.file = I;
    else if (C0.buffer(I)) {
      if (I.length === 0) throw Error("Input Buffer is empty");
      Z.buffer = I
    } else if (C0.arrayBuffer(I)) {
      if (I.byteLength === 0) throw Error("Input bit Array is empty");
      Z.buffer = Buffer.from(I, 0, I.byteLength)
    } else if (C0.typedArray(I)) {
      if (I.length === 0) throw Error("Input Bit Array is empty");
      Z.buffer = Buffer.from(I.buffer, I.byteOffset, I.byteLength)
    } else if (C0.plainObject(I) && !C0.defined(d)) {
      if (d = I, IK2(d)) Z.buffer = []
    } else if (!C0.defined(I) && !C0.defined(d) && C0.object(G) && G.allowStream) Z.buffer = [];
    else throw new Error(`Unsupported input '${I}' of type ${typeof I}${C0.defined(d)?` when also providing options of type ${typeof d}`:""}`);
    if (C0.object(d)) {
      if (C0.defined(d.failOnError))
        if (C0.bool(d.failOnError)) Z.failOn = d.failOnError ? "warning" : "none";
        else throw C0.invalidParameterError("failOnError", "boolean", d.failOnError);
      if (C0.defined(d.failOn))
        if (C0.string(d.failOn) && C0.inArray(d.failOn, ["none", "truncated", "error", "warning"])) Z.failOn = d.failOn;
        else throw C0.invalidParameterError("failOn", "one of: none, truncated, error, warning", d.failOn);
      if (C0.defined(d.density))
        if (C0.inRange(d.density, 1, 1e5)) Z.density = d.density;
        else throw C0.invalidParameterError("density", "number between 1 and 100000", d.density);
      if (C0.defined(d.ignoreIcc))
        if (C0.bool(d.ignoreIcc)) Z.ignoreIcc = d.ignoreIcc;
        else throw C0.invalidParameterError("ignoreIcc", "boolean", d.ignoreIcc);
      if (C0.defined(d.limitInputPixels))
        if (C0.bool(d.limitInputPixels)) Z.limitInputPixels = d.limitInputPixels ? Math.pow(16383, 2) : 0;
        else if (C0.integer(d.limitInputPixels) && C0.inRange(d.limitInputPixels, 0, Number.MAX_SAFE_INTEGER)) Z.limitInputPixels = d.limitInputPixels;
      else throw C0.invalidParameterError("limitInputPixels", "positive integer", d.limitInputPixels);
      if (C0.defined(d.unlimited))
        if (C0.bool(d.unlimited)) Z.unlimited = d.unlimited;
        else throw C0.invalidParameterError("unlimited", "boolean", d.unlimited);
      if (C0.defined(d.sequentialRead))
        if (C0.bool(d.sequentialRead)) Z.sequentialRead = d.sequentialRead;
        else throw C0.invalidParameterError("sequentialRead", "boolean", d.sequentialRead);
      if (C0.defined(d.raw))
        if (C0.object(d.raw) && C0.integer(d.raw.width) && d.raw.width > 0 && C0.integer(d.raw.height) && d.raw.height > 0 && C0.integer(d.raw.channels) && C0.inRange(d.raw.channels, 1, 4)) switch (Z.rawWidth = d.raw.width, Z.rawHeight = d.raw.height, Z.rawChannels = d.raw.channels, Z.rawPremultiplied = !!d.raw.premultiplied, I.constructor) {
          case Uint8Array:
          case Uint8ClampedArray:
            Z.rawDepth = "uchar";
            break;
          case Int8Array:
            Z.rawDepth = "char";
            break;
          case Uint16Array:
            Z.rawDepth = "ushort";
            break;
          case Int16Array:
            Z.rawDepth = "short";
            break;
          case Uint32Array:
            Z.rawDepth = "uint";
            break;
          case Int32Array:
            Z.rawDepth = "int";
            break;
          case Float32Array:
            Z.rawDepth = "float";
            break;
          case Float64Array:
            Z.rawDepth = "double";
            break;
          default:
            Z.rawDepth = "uchar";
            break
        } else throw new Error("Expected width, height and channels for raw pixel input");
      if (C0.defined(d.animated))
        if (C0.bool(d.animated)) Z.pages = d.animated ? -1 : 1;
        else throw C0.invalidParameterError("animated", "boolean", d.animated);
      if (C0.defined(d.pages))
        if (C0.integer(d.pages) && C0.inRange(d.pages, -1, 1e5)) Z.pages = d.pages;
        else throw C0.invalidParameterError("pages", "integer between -1 and 100000", d.pages);
      if (C0.defined(d.page))
        if (C0.integer(d.page) && C0.inRange(d.page, 0, 1e5)) Z.page = d.page;
        else throw C0.invalidParameterError("page", "integer between 0 and 100000", d.page);
      if (C0.defined(d.level))
        if (C0.integer(d.level) && C0.inRange(d.level, 0, 256)) Z.level = d.level;
        else throw C0.invalidParameterError("level", "integer between 0 and 256", d.level);
      if (C0.defined(d.subifd))
        if (C0.integer(d.subifd) && C0.inRange(d.subifd, -1, 1e5)) Z.subifd = d.subifd;
        else throw C0.invalidParameterError("subifd", "integer between -1 and 100000", d.subifd);
      if (C0.defined(d.create))
        if (C0.object(d.create) && C0.integer(d.create.width) && d.create.width > 0 && C0.integer(d.create.height) && d.create.height > 0 && C0.integer(d.create.channels)) {
          if (Z.createWidth = d.create.width, Z.createHeight = d.create.height, Z.createChannels = d.create.channels, C0.defined(d.create.noise)) {
            if (!C0.object(d.create.noise)) throw new Error("Expected noise to be an object");
            if (!C0.inArray(d.create.noise.type, ["gaussian"])) throw new Error("Only gaussian noise is supported at the moment");
            if (!C0.inRange(d.create.channels, 1, 4)) throw C0.invalidParameterError("create.channels", "number between 1 and 4", d.create.channels);
            if (Z.createNoiseType = d.create.noise.type, C0.number(d.create.noise.mean) && C0.inRange(d.create.noise.mean, 0, 1e4)) Z.createNoiseMean = d.create.noise.mean;
            else throw C0.invalidParameterError("create.noise.mean", "number between 0 and 10000", d.create.noise.mean);
            if (C0.number(d.create.noise.sigma) && C0.inRange(d.create.noise.sigma, 0, 1e4)) Z.createNoiseSigma = d.create.noise.sigma;
            else throw C0.invalidParameterError("create.noise.sigma", "number between 0 and 10000", d.create.noise.sigma)
          } else if (C0.defined(d.create.background)) {
            if (!C0.inRange(d.create.channels, 3, 4)) throw C0.invalidParameterError("create.channels", "number between 3 and 4", d.create.channels);
            let C = jd9(d.create.background);
            Z.createBackground = [C.red(), C.green(), C.blue(), Math.round(C.alpha() * 255)]
          } else throw new Error("Expected valid noise or background to create a new input image");
          delete Z.buffer
        } else throw new Error("Expected valid width, height and channels to create a new input image");
      if (C0.defined(d.text))
        if (C0.object(d.text) && C0.string(d.text.text)) {
          if (Z.textValue = d.text.text, C0.defined(d.text.height) && C0.defined(d.text.dpi)) throw new Error("Expected only one of dpi or height");
          if (C0.defined(d.text.font))
            if (C0.string(d.text.font)) Z.textFont = d.text.font;
            else throw C0.invalidParameterError("text.font", "string", d.text.font);
          if (C0.defined(d.text.fontfile))
            if (C0.string(d.text.fontfile)) Z.textFontfile = d.text.fontfile;
            else throw C0.invalidParameterError("text.fontfile", "string", d.text.fontfile);
          if (C0.defined(d.text.width))
            if (C0.integer(d.text.width) && d.text.width > 0) Z.textWidth = d.text.width;
            else throw C0.invalidParameterError("text.width", "positive integer", d.text.width);
          if (C0.defined(d.text.height))
            if (C0.integer(d.text.height) && d.text.height > 0) Z.textHeight = d.text.height;
            else throw C0.invalidParameterError("text.height", "positive integer", d.text.height);
          if (C0.defined(d.text.align))
            if (C0.string(d.text.align) && C0.string(this.constructor.align[d.text.align])) Z.textAlign = this.constructor.align[d.text.align];
            else throw C0.invalidParameterError("text.align", "valid alignment", d.text.align);
          if (C0.defined(d.text.justify))
            if (C0.bool(d.text.justify)) Z.textJustify = d.text.justify;
            else throw C0.invalidParameterError("text.justify", "boolean", d.text.justify);
          if (C0.defined(d.text.dpi))
            if (C0.integer(d.text.dpi) && C0.inRange(d.text.dpi, 1, 1e6)) Z.textDpi = d.text.dpi;
            else throw C0.invalidParameterError("text.dpi", "integer between 1 and 1000000", d.text.dpi);
          if (C0.defined(d.text.rgba))
            if (C0.bool(d.text.rgba)) Z.textRgba = d.text.rgba;
            else throw C0.invalidParameterError("text.rgba", "bool", d.text.rgba);
          if (C0.defined(d.text.spacing))
            if (C0.integer(d.text.spacing) && C0.inRange(d.text.spacing, -1e6, 1e6)) Z.textSpacing = d.text.spacing;
            else throw C0.invalidParameterError("text.spacing", "integer between -1000000 and 1000000", d.text.spacing);
          if (C0.defined(d.text.wrap))
            if (C0.string(d.text.wrap) && C0.inArray(d.text.wrap, ["word", "char", "word-char", "none"])) Z.textWrap = d.text.wrap;
            else throw C0.invalidParameterError("text.wrap", "one of: word, char, word-char, none", d.text.wrap);
          delete Z.buffer
        } else throw new Error("Expected a valid string to create an image with text.")
    } else if (C0.defined(d)) throw new Error("Invalid input options " + d);
    return Z
  }

  function cd9(I, d, G) {
    if (Array.isArray(this.options.input.buffer))
      if (C0.buffer(I)) {
        if (this.options.input.buffer.length === 0) this.on("finish", () => {
          this.streamInFinished = !0
        });
        this.options.input.buffer.push(I), G()
      } else G(new Error("Non-Buffer data on Writable Stream"));
    else G(new Error("Unexpected data on Writable Stream"))
  }

  function pd9() {
    if (this._isStreamInput()) this.options.input.buffer = Buffer.concat(this.options.input.buffer)
  }

  function id9() {
    return Array.isArray(this.options.input.buffer)
  }

  function nd9(I) {
    let d = Error();
    if (C0.fn(I)) {
      if (this._isStreamInput()) this.on("finish", () => {
        this._flattenBufferIn(), DH.metadata(this.options, (G, Z) => {
          if (G) I(C0.nativeError(G, d));
          else I(null, Z)
        })
      });
      else DH.metadata(this.options, (G, Z) => {
        if (G) I(C0.nativeError(G, d));
        else I(null, Z)
      });
      return this
    } else if (this._isStreamInput()) return new Promise((G, Z) => {
      let C = () => {
        this._flattenBufferIn(), DH.metadata(this.options, (W, w) => {
          if (W) Z(C0.nativeError(W, d));
          else G(w)
        })
      };
      if (this.writableFinished) C();
      else this.once("finish", C)
    });
    else return new Promise((G, Z) => {
      DH.metadata(this.options, (C, W) => {
        if (C) Z(C0.nativeError(C, d));
        else G(W)
      })
    })
  }

  function rd9(I) {
    let d = Error();
    if (C0.fn(I)) {
      if (this._isStreamInput()) this.on("finish", () => {
        this._flattenBufferIn(), DH.stats(this.options, (G, Z) => {
          if (G) I(C0.nativeError(G, d));
          else I(null, Z)
        })
      });
      else DH.stats(this.options, (G, Z) => {
        if (G) I(C0.nativeError(G, d));
        else I(null, Z)
      });
      return this
    } else if (this._isStreamInput()) return new Promise((G, Z) => {
      this.on("finish", function() {
        this._flattenBufferIn(), DH.stats(this.options, (C, W) => {
          if (C) Z(C0.nativeError(C, d));
          else G(W)
        })
      })
    });
    else return new Promise((G, Z) => {
      DH.stats(this.options, (C, W) => {
        if (C) Z(C0.nativeError(C, d));
        else G(W)
      })
    })
  }
  dK2.exports = function(I) {
    Object.assign(I.prototype, {
      _inputOptionsFromObject: IK2,
      _createInputDescriptor: xd9,
      _write: cd9,
      _flattenBufferIn: pd9,
      _isStreamInput: id9,
      metadata: nd9,
      stats: rd9
    }), I.align = kd9
  }
})