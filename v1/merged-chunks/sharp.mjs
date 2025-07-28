
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
// @from(Start 5338199, End 5344681)
AK2 = Y((aK3, BK2) => {
  var y2 = $B(),
    CK2 = {
      center: 0,
      centre: 0,
      north: 1,
      east: 2,
      south: 3,
      west: 4,
      northeast: 5,
      southeast: 6,
      southwest: 7,
      northwest: 8
    },
    WK2 = {
      top: 1,
      right: 2,
      bottom: 3,
      left: 4,
      "right top": 5,
      "right bottom": 6,
      "left bottom": 7,
      "left top": 8
    },
    ZK2 = {
      background: "background",
      copy: "copy",
      repeat: "repeat",
      mirror: "mirror"
    },
    wK2 = {
      entropy: 16,
      attention: 17
    },
    sg1 = {
      nearest: "nearest",
      linear: "linear",
      cubic: "cubic",
      mitchell: "mitchell",
      lanczos2: "lanczos2",
      lanczos3: "lanczos3"
    },
    ad9 = {
      contain: "contain",
      cover: "cover",
      fill: "fill",
      inside: "inside",
      outside: "outside"
    },
    sd9 = {
      contain: "embed",
      cover: "crop",
      fill: "ignore_aspect",
      inside: "max",
      outside: "min"
    };

  function og1(I) {
    return I.angle % 360 !== 0 || I.useExifOrientation === !0 || I.rotationAngle !== 0
  }

  function Es(I) {
    return I.width !== -1 || I.height !== -1
  }

  function od9(I, d, G) {
    if (Es(this.options)) this.options.debuglog("ignoring previous resize options");
    if (this.options.widthPost !== -1) this.options.debuglog("operation order will be: extract, resize, extract");
    if (y2.defined(I))
      if (y2.object(I) && !y2.defined(G)) G = I;
      else if (y2.integer(I) && I > 0) this.options.width = I;
    else throw y2.invalidParameterError("width", "positive integer", I);
    else this.options.width = -1;
    if (y2.defined(d))
      if (y2.integer(d) && d > 0) this.options.height = d;
      else throw y2.invalidParameterError("height", "positive integer", d);
    else this.options.height = -1;
    if (y2.object(G)) {
      if (y2.defined(G.width))
        if (y2.integer(G.width) && G.width > 0) this.options.width = G.width;
        else throw y2.invalidParameterError("width", "positive integer", G.width);
      if (y2.defined(G.height))
        if (y2.integer(G.height) && G.height > 0) this.options.height = G.height;
        else throw y2.invalidParameterError("height", "positive integer", G.height);
      if (y2.defined(G.fit)) {
        let Z = sd9[G.fit];
        if (y2.string(Z)) this.options.canvas = Z;
        else throw y2.invalidParameterError("fit", "valid fit", G.fit)
      }
      if (y2.defined(G.position)) {
        let Z = y2.integer(G.position) ? G.position : wK2[G.position] || WK2[G.position] || CK2[G.position];
        if (y2.integer(Z) && (y2.inRange(Z, 0, 8) || y2.inRange(Z, 16, 17))) this.options.position = Z;
        else throw y2.invalidParameterError("position", "valid position/gravity/strategy", G.position)
      }
      if (this._setBackgroundColourOption("resizeBackground", G.background), y2.defined(G.kernel))
        if (y2.string(sg1[G.kernel])) this.options.kernel = sg1[G.kernel];
        else throw y2.invalidParameterError("kernel", "valid kernel name", G.kernel);
      if (y2.defined(G.withoutEnlargement)) this._setBooleanOption("withoutEnlargement", G.withoutEnlargement);
      if (y2.defined(G.withoutReduction)) this._setBooleanOption("withoutReduction", G.withoutReduction);
      if (y2.defined(G.fastShrinkOnLoad)) this._setBooleanOption("fastShrinkOnLoad", G.fastShrinkOnLoad)
    }
    if (og1(this.options) && Es(this.options)) this.options.rotateBeforePreExtract = !0;
    return this
  }

  function ed9(I) {
    if (y2.integer(I) && I > 0) this.options.extendTop = I, this.options.extendBottom = I, this.options.extendLeft = I, this.options.extendRight = I;
    else if (y2.object(I)) {
      if (y2.defined(I.top))
        if (y2.integer(I.top) && I.top >= 0) this.options.extendTop = I.top;
        else throw y2.invalidParameterError("top", "positive integer", I.top);
      if (y2.defined(I.bottom))
        if (y2.integer(I.bottom) && I.bottom >= 0) this.options.extendBottom = I.bottom;
        else throw y2.invalidParameterError("bottom", "positive integer", I.bottom);
      if (y2.defined(I.left))
        if (y2.integer(I.left) && I.left >= 0) this.options.extendLeft = I.left;
        else throw y2.invalidParameterError("left", "positive integer", I.left);
      if (y2.defined(I.right))
        if (y2.integer(I.right) && I.right >= 0) this.options.extendRight = I.right;
        else throw y2.invalidParameterError("right", "positive integer", I.right);
      if (this._setBackgroundColourOption("extendBackground", I.background), y2.defined(I.extendWith))
        if (y2.string(ZK2[I.extendWith])) this.options.extendWith = ZK2[I.extendWith];
        else throw y2.invalidParameterError("extendWith", "one of: background, copy, repeat, mirror", I.extendWith)
    } else throw y2.invalidParameterError("extend", "integer or object", I);
    return this
  }

  function td9(I) {
    let d = Es(this.options) || this.options.widthPre !== -1 ? "Post" : "Pre";
    if (this.options[`width${d}`] !== -1) this.options.debuglog("ignoring previous extract options");
    if (["left", "top", "width", "height"].forEach(function(G) {
        let Z = I[G];
        if (y2.integer(Z) && Z >= 0) this.options[G + (G === "left" || G === "top" ? "Offset" : "") + d] = Z;
        else throw y2.invalidParameterError(G, "integer", Z)
      }, this), og1(this.options) && !Es(this.options)) {
      if (this.options.widthPre === -1 || this.options.widthPost === -1) this.options.rotateBeforePreExtract = !0
    }
    return this
  }

  function IG9(I) {
    if (this.options.trimThreshold = 10, y2.defined(I))
      if (y2.object(I)) {
        if (y2.defined(I.background)) this._setBackgroundColourOption("trimBackground", I.background);
        if (y2.defined(I.threshold))
          if (y2.number(I.threshold) && I.threshold >= 0) this.options.trimThreshold = I.threshold;
          else throw y2.invalidParameterError("threshold", "positive number", I.threshold);
        if (y2.defined(I.lineArt)) this._setBooleanOption("trimLineArt", I.lineArt)
      } else throw y2.invalidParameterError("trim", "object", I);
    if (og1(this.options)) this.options.rotateBeforePreExtract = !0;
    return this
  }
  BK2.exports = function(I) {
    Object.assign(I.prototype, {
      resize: od9,
      extend: ed9,
      extract: td9,
      trim: IG9
    }), I.gravity = CK2, I.strategy = wK2, I.kernel = sg1, I.fit = ad9, I.position = WK2
  }
})
// @from(Start 5344687, End 5347518)
XK2 = Y((sK3, VK2) => {
  var F9 = $B(),
    eg1 = {
      clear: "clear",
      source: "source",
      over: "over",
      in: "in",
      out: "out",
      atop: "atop",
      dest: "dest",
      "dest-over": "dest-over",
      "dest-in": "dest-in",
      "dest-out": "dest-out",
      "dest-atop": "dest-atop",
      xor: "xor",
      add: "add",
      saturate: "saturate",
      multiply: "multiply",
      screen: "screen",
      overlay: "overlay",
      darken: "darken",
      lighten: "lighten",
      "colour-dodge": "colour-dodge",
      "color-dodge": "colour-dodge",
      "colour-burn": "colour-burn",
      "color-burn": "colour-burn",
      "hard-light": "hard-light",
      "soft-light": "soft-light",
      difference: "difference",
      exclusion: "exclusion"
    };

  function dG9(I) {
    if (!Array.isArray(I)) throw F9.invalidParameterError("images to composite", "array", I);
    return this.options.composite = I.map((d) => {
      if (!F9.object(d)) throw F9.invalidParameterError("image to composite", "object", d);
      let G = this._inputOptionsFromObject(d),
        Z = {
          input: this._createInputDescriptor(d.input, G, {
            allowStream: !1
          }),
          blend: "over",
          tile: !1,
          left: 0,
          top: 0,
          hasOffset: !1,
          gravity: 0,
          premultiplied: !1
        };
      if (F9.defined(d.blend))
        if (F9.string(eg1[d.blend])) Z.blend = eg1[d.blend];
        else throw F9.invalidParameterError("blend", "valid blend name", d.blend);
      if (F9.defined(d.tile))
        if (F9.bool(d.tile)) Z.tile = d.tile;
        else throw F9.invalidParameterError("tile", "boolean", d.tile);
      if (F9.defined(d.left))
        if (F9.integer(d.left)) Z.left = d.left;
        else throw F9.invalidParameterError("left", "integer", d.left);
      if (F9.defined(d.top))
        if (F9.integer(d.top)) Z.top = d.top;
        else throw F9.invalidParameterError("top", "integer", d.top);
      if (F9.defined(d.top) !== F9.defined(d.left)) throw new Error("Expected both left and top to be set");
      else Z.hasOffset = F9.integer(d.top) && F9.integer(d.left);
      if (F9.defined(d.gravity))
        if (F9.integer(d.gravity) && F9.inRange(d.gravity, 0, 8)) Z.gravity = d.gravity;
        else if (F9.string(d.gravity) && F9.integer(this.constructor.gravity[d.gravity])) Z.gravity = this.constructor.gravity[d.gravity];
      else throw F9.invalidParameterError("gravity", "valid gravity", d.gravity);
      if (F9.defined(d.premultiplied))
        if (F9.bool(d.premultiplied)) Z.premultiplied = d.premultiplied;
        else throw F9.invalidParameterError("premultiplied", "boolean", d.premultiplied);
      return Z
    }), this
  }
  VK2.exports = function(I) {
    I.prototype.composite = dG9, I.blend = eg1
  }
})
// @from(Start 5347524, End 5359612)
DK2 = Y((oK3, _K2) => {
  var GG9 = vs(),
    n1 = $B(),
    YK2 = {
      integer: "integer",
      float: "float",
      approximate: "approximate"
    };

  function ZG9(I, d) {
    if (this.options.useExifOrientation || this.options.angle || this.options.rotationAngle) this.options.debuglog("ignoring previous rotate options");
    if (!n1.defined(I)) this.options.useExifOrientation = !0;
    else if (n1.integer(I) && !(I % 90)) this.options.angle = I;
    else if (n1.number(I)) {
      if (this.options.rotationAngle = I, n1.object(d) && d.background) {
        let G = GG9(d.background);
        this.options.rotationBackground = [G.red(), G.green(), G.blue(), Math.round(G.alpha() * 255)]
      }
    } else throw n1.invalidParameterError("angle", "numeric", I);
    return this
  }

  function CG9(I) {
    return this.options.flip = n1.bool(I) ? I : !0, this
  }

  function WG9(I) {
    return this.options.flop = n1.bool(I) ? I : !0, this
  }

  function wG9(I, d) {
    let G = [].concat(...I);
    if (G.length === 4 && G.every(n1.number)) this.options.affineMatrix = G;
    else throw n1.invalidParameterError("matrix", "1x4 or 2x2 array", I);
    if (n1.defined(d))
      if (n1.object(d)) {
        if (this._setBackgroundColourOption("affineBackground", d.background), n1.defined(d.idx))
          if (n1.number(d.idx)) this.options.affineIdx = d.idx;
          else throw n1.invalidParameterError("options.idx", "number", d.idx);
        if (n1.defined(d.idy))
          if (n1.number(d.idy)) this.options.affineIdy = d.idy;
          else throw n1.invalidParameterError("options.idy", "number", d.idy);
        if (n1.defined(d.odx))
          if (n1.number(d.odx)) this.options.affineOdx = d.odx;
          else throw n1.invalidParameterError("options.odx", "number", d.odx);
        if (n1.defined(d.ody))
          if (n1.number(d.ody)) this.options.affineOdy = d.ody;
          else throw n1.invalidParameterError("options.ody", "number", d.ody);
        if (n1.defined(d.interpolator))
          if (n1.inArray(d.interpolator, Object.values(this.constructor.interpolators))) this.options.affineInterpolator = d.interpolator;
          else throw n1.invalidParameterError("options.interpolator", "valid interpolator name", d.interpolator)
      } else throw n1.invalidParameterError("options", "object", d);
    return this
  }

  function BG9(I, d, G) {
    if (!n1.defined(I)) this.options.sharpenSigma = -1;
    else if (n1.bool(I)) this.options.sharpenSigma = I ? -1 : 0;
    else if (n1.number(I) && n1.inRange(I, 0.01, 1e4)) {
      if (this.options.sharpenSigma = I, n1.defined(d))
        if (n1.number(d) && n1.inRange(d, 0, 1e4)) this.options.sharpenM1 = d;
        else throw n1.invalidParameterError("flat", "number between 0 and 10000", d);
      if (n1.defined(G))
        if (n1.number(G) && n1.inRange(G, 0, 1e4)) this.options.sharpenM2 = G;
        else throw n1.invalidParameterError("jagged", "number between 0 and 10000", G)
    } else if (n1.plainObject(I)) {
      if (n1.number(I.sigma) && n1.inRange(I.sigma, 0.000001, 10)) this.options.sharpenSigma = I.sigma;
      else throw n1.invalidParameterError("options.sigma", "number between 0.000001 and 10", I.sigma);
      if (n1.defined(I.m1))
        if (n1.number(I.m1) && n1.inRange(I.m1, 0, 1e6)) this.options.sharpenM1 = I.m1;
        else throw n1.invalidParameterError("options.m1", "number between 0 and 1000000", I.m1);
      if (n1.defined(I.m2))
        if (n1.number(I.m2) && n1.inRange(I.m2, 0, 1e6)) this.options.sharpenM2 = I.m2;
        else throw n1.invalidParameterError("options.m2", "number between 0 and 1000000", I.m2);
      if (n1.defined(I.x1))
        if (n1.number(I.x1) && n1.inRange(I.x1, 0, 1e6)) this.options.sharpenX1 = I.x1;
        else throw n1.invalidParameterError("options.x1", "number between 0 and 1000000", I.x1);
      if (n1.defined(I.y2))
        if (n1.number(I.y2) && n1.inRange(I.y2, 0, 1e6)) this.options.sharpenY2 = I.y2;
        else throw n1.invalidParameterError("options.y2", "number between 0 and 1000000", I.y2);
      if (n1.defined(I.y3))
        if (n1.number(I.y3) && n1.inRange(I.y3, 0, 1e6)) this.options.sharpenY3 = I.y3;
        else throw n1.invalidParameterError("options.y3", "number between 0 and 1000000", I.y3)
    } else throw n1.invalidParameterError("sigma", "number between 0.01 and 10000", I);
    return this
  }

  function AG9(I) {
    if (!n1.defined(I)) this.options.medianSize = 3;
    else if (n1.integer(I) && n1.inRange(I, 1, 1000)) this.options.medianSize = I;
    else throw n1.invalidParameterError("size", "integer between 1 and 1000", I);
    return this
  }

  function VG9(I) {
    let d;
    if (n1.number(I)) d = I;
    else if (n1.plainObject(I)) {
      if (!n1.number(I.sigma)) throw n1.invalidParameterError("options.sigma", "number between 0.3 and 1000", d);
      if (d = I.sigma, "precision" in I)
        if (n1.string(YK2[I.precision])) this.options.precision = YK2[I.precision];
        else throw n1.invalidParameterError("precision", "one of: integer, float, approximate", I.precision);
      if ("minAmplitude" in I)
        if (n1.number(I.minAmplitude) && n1.inRange(I.minAmplitude, 0.001, 1)) this.options.minAmpl = I.minAmplitude;
        else throw n1.invalidParameterError("minAmplitude", "number between 0.001 and 1", I.minAmplitude)
    }
    if (!n1.defined(I)) this.options.blurSigma = -1;
    else if (n1.bool(I)) this.options.blurSigma = I ? -1 : 0;
    else if (n1.number(d) && n1.inRange(d, 0.3, 1000)) this.options.blurSigma = d;
    else throw n1.invalidParameterError("sigma", "number between 0.3 and 1000", d);
    return this
  }

  function XG9(I) {
    if (this.options.flatten = n1.bool(I) ? I : !0, n1.object(I)) this._setBackgroundColourOption("flattenBackground", I.background);
    return this
  }

  function YG9() {
    return this.options.unflatten = !0, this
  }

  function _G9(I, d) {
    if (!n1.defined(I)) this.options.gamma = 2.2;
    else if (n1.number(I) && n1.inRange(I, 1, 3)) this.options.gamma = I;
    else throw n1.invalidParameterError("gamma", "number between 1.0 and 3.0", I);
    if (!n1.defined(d)) this.options.gammaOut = this.options.gamma;
    else if (n1.number(d) && n1.inRange(d, 1, 3)) this.options.gammaOut = d;
    else throw n1.invalidParameterError("gammaOut", "number between 1.0 and 3.0", d);
    return this
  }

  function DG9(I) {
    if (this.options.negate = n1.bool(I) ? I : !0, n1.plainObject(I) && "alpha" in I)
      if (!n1.bool(I.alpha)) throw n1.invalidParameterError("alpha", "should be boolean value", I.alpha);
      else this.options.negateAlpha = I.alpha;
    return this
  }

  function HG9(I) {
    if (n1.plainObject(I)) {
      if (n1.defined(I.lower))
        if (n1.number(I.lower) && n1.inRange(I.lower, 0, 99)) this.options.normaliseLower = I.lower;
        else throw n1.invalidParameterError("lower", "number between 0 and 99", I.lower);
      if (n1.defined(I.upper))
        if (n1.number(I.upper) && n1.inRange(I.upper, 1, 100)) this.options.normaliseUpper = I.upper;
        else throw n1.invalidParameterError("upper", "number between 1 and 100", I.upper)
    }
    if (this.options.normaliseLower >= this.options.normaliseUpper) throw n1.invalidParameterError("range", "lower to be less than upper", `${this.options.normaliseLower} >= ${this.options.normaliseUpper}`);
    return this.options.normalise = !0, this
  }

  function FG9(I) {
    return this.normalise(I)
  }

  function gG9(I) {
    if (n1.plainObject(I)) {
      if (n1.integer(I.width) && I.width > 0) this.options.claheWidth = I.width;
      else throw n1.invalidParameterError("width", "integer greater than zero", I.width);
      if (n1.integer(I.height) && I.height > 0) this.options.claheHeight = I.height;
      else throw n1.invalidParameterError("height", "integer greater than zero", I.height);
      if (n1.defined(I.maxSlope))
        if (n1.integer(I.maxSlope) && n1.inRange(I.maxSlope, 0, 100)) this.options.claheMaxSlope = I.maxSlope;
        else throw n1.invalidParameterError("maxSlope", "integer between 0 and 100", I.maxSlope)
    } else throw n1.invalidParameterError("options", "plain object", I);
    return this
  }

  function JG9(I) {
    if (!n1.object(I) || !Array.isArray(I.kernel) || !n1.integer(I.width) || !n1.integer(I.height) || !n1.inRange(I.width, 3, 1001) || !n1.inRange(I.height, 3, 1001) || I.height * I.width !== I.kernel.length) throw new Error("Invalid convolution kernel");
    if (!n1.integer(I.scale)) I.scale = I.kernel.reduce(function(d, G) {
      return d + G
    }, 0);
    if (I.scale < 1) I.scale = 1;
    if (!n1.integer(I.offset)) I.offset = 0;
    return this.options.convKernel = I, this
  }

  function KG9(I, d) {
    if (!n1.defined(I)) this.options.threshold = 128;
    else if (n1.bool(I)) this.options.threshold = I ? 128 : 0;
    else if (n1.integer(I) && n1.inRange(I, 0, 255)) this.options.threshold = I;
    else throw n1.invalidParameterError("threshold", "integer between 0 and 255", I);
    if (!n1.object(d) || d.greyscale === !0 || d.grayscale === !0) this.options.thresholdGrayscale = !0;
    else this.options.thresholdGrayscale = !1;
    return this
  }

  function NG9(I, d, G) {
    if (this.options.boolean = this._createInputDescriptor(I, G), n1.string(d) && n1.inArray(d, ["and", "or", "eor"])) this.options.booleanOp = d;
    else throw n1.invalidParameterError("operator", "one of: and, or, eor", d);
    return this
  }

  function zG9(I, d) {
    if (!n1.defined(I) && n1.number(d)) I = 1;
    else if (n1.number(I) && !n1.defined(d)) d = 0;
    if (!n1.defined(I)) this.options.linearA = [];
    else if (n1.number(I)) this.options.linearA = [I];
    else if (Array.isArray(I) && I.length && I.every(n1.number)) this.options.linearA = I;
    else throw n1.invalidParameterError("a", "number or array of numbers", I);
    if (!n1.defined(d)) this.options.linearB = [];
    else if (n1.number(d)) this.options.linearB = [d];
    else if (Array.isArray(d) && d.length && d.every(n1.number)) this.options.linearB = d;
    else throw n1.invalidParameterError("b", "number or array of numbers", d);
    if (this.options.linearA.length !== this.options.linearB.length) throw new Error("Expected a and b to be arrays of the same length");
    return this
  }

  function QG9(I) {
    if (!Array.isArray(I)) throw n1.invalidParameterError("inputMatrix", "array", I);
    if (I.length !== 3 && I.length !== 4) throw n1.invalidParameterError("inputMatrix", "3x3 or 4x4 array", I.length);
    let d = I.flat().map(Number);
    if (d.length !== 9 && d.length !== 16) throw n1.invalidParameterError("inputMatrix", "cardinality of 9 or 16", d.length);
    return this.options.recombMatrix = d, this
  }

  function fG9(I) {
    if (!n1.plainObject(I)) throw n1.invalidParameterError("options", "plain object", I);
    if ("brightness" in I)
      if (n1.number(I.brightness) && I.brightness >= 0) this.options.brightness = I.brightness;
      else throw n1.invalidParameterError("brightness", "number above zero", I.brightness);
    if ("saturation" in I)
      if (n1.number(I.saturation) && I.saturation >= 0) this.options.saturation = I.saturation;
      else throw n1.invalidParameterError("saturation", "number above zero", I.saturation);
    if ("hue" in I)
      if (n1.integer(I.hue)) this.options.hue = I.hue % 360;
      else throw n1.invalidParameterError("hue", "number", I.hue);
    if ("lightness" in I)
      if (n1.number(I.lightness)) this.options.lightness = I.lightness;
      else throw n1.invalidParameterError("lightness", "number", I.lightness);
    return this
  }
  _K2.exports = function(I) {
    Object.assign(I.prototype, {
      rotate: ZG9,
      flip: CG9,
      flop: WG9,
      affine: wG9,
      sharpen: BG9,
      median: AG9,
      blur: VG9,
      flatten: XG9,
      unflatten: YG9,
      gamma: _G9,
      negate: DG9,
      normalise: HG9,
      normalize: FG9,
      clahe: gG9,
      convolve: JG9,
      threshold: KG9,
      boolean: NG9,
      linear: zG9,
      recomb: QG9,
      modulate: fG9
    })
  }
})
// @from(Start 5359618, End 5361078)
gK2 = Y((eK3, FK2) => {
  var qG9 = vs(),
    XX = $B(),
    HK2 = {
      multiband: "multiband",
      "b-w": "b-w",
      bw: "b-w",
      cmyk: "cmyk",
      srgb: "srgb"
    };

  function RG9(I) {
    return this._setBackgroundColourOption("tint", I), this
  }

  function UG9(I) {
    return this.options.greyscale = XX.bool(I) ? I : !0, this
  }

  function vG9(I) {
    return this.greyscale(I)
  }

  function EG9(I) {
    if (!XX.string(I)) throw XX.invalidParameterError("colourspace", "string", I);
    return this.options.colourspacePipeline = I, this
  }

  function MG9(I) {
    return this.pipelineColourspace(I)
  }

  function SG9(I) {
    if (!XX.string(I)) throw XX.invalidParameterError("colourspace", "string", I);
    return this.options.colourspace = I, this
  }

  function LG9(I) {
    return this.toColourspace(I)
  }

  function yG9(I, d) {
    if (XX.defined(d))
      if (XX.object(d) || XX.string(d)) {
        let G = qG9(d);
        this.options[I] = [G.red(), G.green(), G.blue(), Math.round(G.alpha() * 255)]
      } else throw XX.invalidParameterError("background", "object or string", d)
  }
  FK2.exports = function(I) {
    Object.assign(I.prototype, {
      tint: RG9,
      greyscale: UG9,
      grayscale: vG9,
      pipelineColourspace: EG9,
      pipelineColorspace: MG9,
      toColourspace: SG9,
      toColorspace: LG9,
      _setBackgroundColourOption: yG9
    }), I.colourspace = HK2, I.colorspace = HK2
  }
})
// @from(Start 5361084, End 5362551)
KK2 = Y((tK3, JK2) => {
  var OB = $B(),
    PG9 = {
      and: "and",
      or: "or",
      eor: "eor"
    };

  function $G9() {
    return this.options.removeAlpha = !0, this
  }

  function uG9(I) {
    if (OB.defined(I))
      if (OB.number(I) && OB.inRange(I, 0, 1)) this.options.ensureAlpha = I;
      else throw OB.invalidParameterError("alpha", "number between 0 and 1", I);
    else this.options.ensureAlpha = 1;
    return this
  }

  function TG9(I) {
    let d = {
      red: 0,
      green: 1,
      blue: 2,
      alpha: 3
    };
    if (Object.keys(d).includes(I)) I = d[I];
    if (OB.integer(I) && OB.inRange(I, 0, 4)) this.options.extractChannel = I;
    else throw OB.invalidParameterError("channel", "integer or one of: red, green, blue, alpha", I);
    return this
  }

  function OG9(I, d) {
    if (Array.isArray(I)) I.forEach(function(G) {
      this.options.joinChannelIn.push(this._createInputDescriptor(G, d))
    }, this);
    else this.options.joinChannelIn.push(this._createInputDescriptor(I, d));
    return this
  }

  function mG9(I) {
    if (OB.string(I) && OB.inArray(I, ["and", "or", "eor"])) this.options.bandBoolOp = I;
    else throw OB.invalidParameterError("boolOp", "one of: and, or, eor", I);
    return this
  }
  JK2.exports = function(I) {
    Object.assign(I.prototype, {
      removeAlpha: $G9,
      ensureAlpha: uG9,
      extractChannel: TG9,
      joinChannel: OG9,
      bandbool: mG9
    }), I.bool = PG9
  }
})
// @from(Start 5362557, End 5387635)
RK2 = Y((IN3, qK2) => {
  var tg1 = B1("node:path"),
    G1 = $B(),
    xR = c$(),
    NK2 = new Map([
      ["heic", "heif"],
      ["heif", "heif"],
      ["avif", "avif"],
      ["jpeg", "jpeg"],
      ["jpg", "jpeg"],
      ["jpe", "jpeg"],
      ["tile", "tile"],
      ["dz", "tile"],
      ["png", "png"],
      ["raw", "raw"],
      ["tiff", "tiff"],
      ["tif", "tiff"],
      ["webp", "webp"],
      ["gif", "gif"],
      ["jp2", "jp2"],
      ["jpx", "jp2"],
      ["j2k", "jp2"],
      ["j2c", "jp2"],
      ["jxl", "jxl"]
    ]),
    lG9 = /\.(jp[2x]|j2[kc])$/i,
    zK2 = () => new Error("JP2 output requires libvips with support for OpenJPEG"),
    QK2 = (I) => 1 << 31 - Math.clz32(Math.ceil(Math.log2(I)));

  function bG9(I, d) {
    let G;
    if (!G1.string(I)) G = new Error("Missing output file path");
    else if (G1.string(this.options.input.file) && tg1.resolve(this.options.input.file) === tg1.resolve(I)) G = new Error("Cannot use same file for input and output");
    else if (lG9.test(tg1.extname(I)) && !this.constructor.format.jp2k.output.file) G = zK2();
    if (G)
      if (G1.fn(d)) d(G);
      else return Promise.reject(G);
    else {
      this.options.fileOut = I;
      let Z = Error();
      return this._pipeline(d, Z)
    }
    return this
  }

  function hG9(I, d) {
    if (G1.object(I)) this._setBooleanOption("resolveWithObject", I.resolveWithObject);
    else if (this.options.resolveWithObject) this.options.resolveWithObject = !1;
    this.options.fileOut = "";
    let G = Error();
    return this._pipeline(G1.fn(I) ? I : d, G)
  }

  function jG9() {
    return this.options.keepMetadata |= 1, this
  }

  function kG9(I) {
    if (G1.object(I))
      for (let [d, G] of Object.entries(I))
        if (G1.object(G))
          for (let [Z, C] of Object.entries(G))
            if (G1.string(C)) this.options.withExif[`exif-${d.toLowerCase()}-${Z}`] = C;
            else throw G1.invalidParameterError(`${d}.${Z}`, "string", C);
    else throw G1.invalidParameterError(d, "object", G);
    else throw G1.invalidParameterError("exif", "object", I);
    return this.options.withExifMerge = !1, this.keepExif()
  }

  function xG9(I) {
    return this.withExif(I), this.options.withExifMerge = !0, this
  }

  function cG9() {
    return this.options.keepMetadata |= 8, this
  }

  function pG9(I, d) {
    if (G1.string(I)) this.options.withIccProfile = I;
    else throw G1.invalidParameterError("icc", "string", I);
    if (this.keepIccProfile(), G1.object(d)) {
      if (G1.defined(d.attach))
        if (G1.bool(d.attach)) {
          if (!d.attach) this.options.keepMetadata &= -9
        } else throw G1.invalidParameterError("attach", "boolean", d.attach)
    }
    return this
  }

  function iG9() {
    return this.options.keepMetadata = 31, this
  }

  function nG9(I) {
    if (this.keepMetadata(), this.withIccProfile("srgb"), G1.object(I)) {
      if (G1.defined(I.orientation))
        if (G1.integer(I.orientation) && G1.inRange(I.orientation, 1, 8)) this.options.withMetadataOrientation = I.orientation;
        else throw G1.invalidParameterError("orientation", "integer between 1 and 8", I.orientation);
      if (G1.defined(I.density))
        if (G1.number(I.density) && I.density > 0) this.options.withMetadataDensity = I.density;
        else throw G1.invalidParameterError("density", "positive number", I.density);
      if (G1.defined(I.icc)) this.withIccProfile(I.icc);
      if (G1.defined(I.exif)) this.withExifMerge(I.exif)
    }
    return this
  }

  function rG9(I, d) {
    let G = NK2.get((G1.object(I) && G1.string(I.id) ? I.id : I).toLowerCase());
    if (!G) throw G1.invalidParameterError("format", `one of: ${[...NK2.keys()].join(", ")}`, I);
    return this[G](d)
  }

  function aG9(I) {
    if (G1.object(I)) {
      if (G1.defined(I.quality))
        if (G1.integer(I.quality) && G1.inRange(I.quality, 1, 100)) this.options.jpegQuality = I.quality;
        else throw G1.invalidParameterError("quality", "integer between 1 and 100", I.quality);
      if (G1.defined(I.progressive)) this._setBooleanOption("jpegProgressive", I.progressive);
      if (G1.defined(I.chromaSubsampling))
        if (G1.string(I.chromaSubsampling) && G1.inArray(I.chromaSubsampling, ["4:2:0", "4:4:4"])) this.options.jpegChromaSubsampling = I.chromaSubsampling;
        else throw G1.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", I.chromaSubsampling);
      let d = G1.bool(I.optimizeCoding) ? I.optimizeCoding : I.optimiseCoding;
      if (G1.defined(d)) this._setBooleanOption("jpegOptimiseCoding", d);
      if (G1.defined(I.mozjpeg))
        if (G1.bool(I.mozjpeg)) {
          if (I.mozjpeg) this.options.jpegTrellisQuantisation = !0, this.options.jpegOvershootDeringing = !0, this.options.jpegOptimiseScans = !0, this.options.jpegProgressive = !0, this.options.jpegQuantisationTable = 3
        } else throw G1.invalidParameterError("mozjpeg", "boolean", I.mozjpeg);
      let G = G1.bool(I.trellisQuantization) ? I.trellisQuantization : I.trellisQuantisation;
      if (G1.defined(G)) this._setBooleanOption("jpegTrellisQuantisation", G);
      if (G1.defined(I.overshootDeringing)) this._setBooleanOption("jpegOvershootDeringing", I.overshootDeringing);
      let Z = G1.bool(I.optimizeScans) ? I.optimizeScans : I.optimiseScans;
      if (G1.defined(Z)) {
        if (this._setBooleanOption("jpegOptimiseScans", Z), Z) this.options.jpegProgressive = !0
      }
      let C = G1.number(I.quantizationTable) ? I.quantizationTable : I.quantisationTable;
      if (G1.defined(C))
        if (G1.integer(C) && G1.inRange(C, 0, 8)) this.options.jpegQuantisationTable = C;
        else throw G1.invalidParameterError("quantisationTable", "integer between 0 and 8", C)
    }
    return this._updateFormatOut("jpeg", I)
  }

  function sG9(I) {
    if (G1.object(I)) {
      if (G1.defined(I.progressive)) this._setBooleanOption("pngProgressive", I.progressive);
      if (G1.defined(I.compressionLevel))
        if (G1.integer(I.compressionLevel) && G1.inRange(I.compressionLevel, 0, 9)) this.options.pngCompressionLevel = I.compressionLevel;
        else throw G1.invalidParameterError("compressionLevel", "integer between 0 and 9", I.compressionLevel);
      if (G1.defined(I.adaptiveFiltering)) this._setBooleanOption("pngAdaptiveFiltering", I.adaptiveFiltering);
      let d = I.colours || I.colors;
      if (G1.defined(d))
        if (G1.integer(d) && G1.inRange(d, 2, 256)) this.options.pngBitdepth = QK2(d);
        else throw G1.invalidParameterError("colours", "integer between 2 and 256", d);
      if (G1.defined(I.palette)) this._setBooleanOption("pngPalette", I.palette);
      else if ([I.quality, I.effort, I.colours, I.colors, I.dither].some(G1.defined)) this._setBooleanOption("pngPalette", !0);
      if (this.options.pngPalette) {
        if (G1.defined(I.quality))
          if (G1.integer(I.quality) && G1.inRange(I.quality, 0, 100)) this.options.pngQuality = I.quality;
          else throw G1.invalidParameterError("quality", "integer between 0 and 100", I.quality);
        if (G1.defined(I.effort))
          if (G1.integer(I.effort) && G1.inRange(I.effort, 1, 10)) this.options.pngEffort = I.effort;
          else throw G1.invalidParameterError("effort", "integer between 1 and 10", I.effort);
        if (G1.defined(I.dither))
          if (G1.number(I.dither) && G1.inRange(I.dither, 0, 1)) this.options.pngDither = I.dither;
          else throw G1.invalidParameterError("dither", "number between 0.0 and 1.0", I.dither)
      }
    }
    return this._updateFormatOut("png", I)
  }

  function oG9(I) {
    if (G1.object(I)) {
      if (G1.defined(I.quality))
        if (G1.integer(I.quality) && G1.inRange(I.quality, 1, 100)) this.options.webpQuality = I.quality;
        else throw G1.invalidParameterError("quality", "integer between 1 and 100", I.quality);
      if (G1.defined(I.alphaQuality))
        if (G1.integer(I.alphaQuality) && G1.inRange(I.alphaQuality, 0, 100)) this.options.webpAlphaQuality = I.alphaQuality;
        else throw G1.invalidParameterError("alphaQuality", "integer between 0 and 100", I.alphaQuality);
      if (G1.defined(I.lossless)) this._setBooleanOption("webpLossless", I.lossless);
      if (G1.defined(I.nearLossless)) this._setBooleanOption("webpNearLossless", I.nearLossless);
      if (G1.defined(I.smartSubsample)) this._setBooleanOption("webpSmartSubsample", I.smartSubsample);
      if (G1.defined(I.preset))
        if (G1.string(I.preset) && G1.inArray(I.preset, ["default", "photo", "picture", "drawing", "icon", "text"])) this.options.webpPreset = I.preset;
        else throw G1.invalidParameterError("preset", "one of: default, photo, picture, drawing, icon, text", I.preset);
      if (G1.defined(I.effort))
        if (G1.integer(I.effort) && G1.inRange(I.effort, 0, 6)) this.options.webpEffort = I.effort;
        else throw G1.invalidParameterError("effort", "integer between 0 and 6", I.effort);
      if (G1.defined(I.minSize)) this._setBooleanOption("webpMinSize", I.minSize);
      if (G1.defined(I.mixed)) this._setBooleanOption("webpMixed", I.mixed)
    }
    return fK2(I, this.options), this._updateFormatOut("webp", I)
  }

  function eG9(I) {
    if (G1.object(I)) {
      if (G1.defined(I.reuse)) this._setBooleanOption("gifReuse", I.reuse);
      if (G1.defined(I.progressive)) this._setBooleanOption("gifProgressive", I.progressive);
      let d = I.colours || I.colors;
      if (G1.defined(d))
        if (G1.integer(d) && G1.inRange(d, 2, 256)) this.options.gifBitdepth = QK2(d);
        else throw G1.invalidParameterError("colours", "integer between 2 and 256", d);
      if (G1.defined(I.effort))
        if (G1.number(I.effort) && G1.inRange(I.effort, 1, 10)) this.options.gifEffort = I.effort;
        else throw G1.invalidParameterError("effort", "integer between 1 and 10", I.effort);
      if (G1.defined(I.dither))
        if (G1.number(I.dither) && G1.inRange(I.dither, 0, 1)) this.options.gifDither = I.dither;
        else throw G1.invalidParameterError("dither", "number between 0.0 and 1.0", I.dither);
      if (G1.defined(I.interFrameMaxError))
        if (G1.number(I.interFrameMaxError) && G1.inRange(I.interFrameMaxError, 0, 32)) this.options.gifInterFrameMaxError = I.interFrameMaxError;
        else throw G1.invalidParameterError("interFrameMaxError", "number between 0.0 and 32.0", I.interFrameMaxError);
      if (G1.defined(I.interPaletteMaxError))
        if (G1.number(I.interPaletteMaxError) && G1.inRange(I.interPaletteMaxError, 0, 256)) this.options.gifInterPaletteMaxError = I.interPaletteMaxError;
        else throw G1.invalidParameterError("interPaletteMaxError", "number between 0.0 and 256.0", I.interPaletteMaxError)
    }
    return fK2(I, this.options), this._updateFormatOut("gif", I)
  }

  function tG9(I) {
    if (!this.constructor.format.jp2k.output.buffer) throw zK2();
    if (G1.object(I)) {
      if (G1.defined(I.quality))
        if (G1.integer(I.quality) && G1.inRange(I.quality, 1, 100)) this.options.jp2Quality = I.quality;
        else throw G1.invalidParameterError("quality", "integer between 1 and 100", I.quality);
      if (G1.defined(I.lossless))
        if (G1.bool(I.lossless)) this.options.jp2Lossless = I.lossless;
        else throw G1.invalidParameterError("lossless", "boolean", I.lossless);
      if (G1.defined(I.tileWidth))
        if (G1.integer(I.tileWidth) && G1.inRange(I.tileWidth, 1, 32768)) this.options.jp2TileWidth = I.tileWidth;
        else throw G1.invalidParameterError("tileWidth", "integer between 1 and 32768", I.tileWidth);
      if (G1.defined(I.tileHeight))
        if (G1.integer(I.tileHeight) && G1.inRange(I.tileHeight, 1, 32768)) this.options.jp2TileHeight = I.tileHeight;
        else throw G1.invalidParameterError("tileHeight", "integer between 1 and 32768", I.tileHeight);
      if (G1.defined(I.chromaSubsampling))
        if (G1.string(I.chromaSubsampling) && G1.inArray(I.chromaSubsampling, ["4:2:0", "4:4:4"])) this.options.jp2ChromaSubsampling = I.chromaSubsampling;
        else throw G1.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", I.chromaSubsampling)
    }
    return this._updateFormatOut("jp2", I)
  }

  function fK2(I, d) {
    if (G1.object(I) && G1.defined(I.loop))
      if (G1.integer(I.loop) && G1.inRange(I.loop, 0, 65535)) d.loop = I.loop;
      else throw G1.invalidParameterError("loop", "integer between 0 and 65535", I.loop);
    if (G1.object(I) && G1.defined(I.delay))
      if (G1.integer(I.delay) && G1.inRange(I.delay, 0, 65535)) d.delay = [I.delay];
      else if (Array.isArray(I.delay) && I.delay.every(G1.integer) && I.delay.every((G) => G1.inRange(G, 0, 65535))) d.delay = I.delay;
    else throw G1.invalidParameterError("delay", "integer or an array of integers between 0 and 65535", I.delay)
  }

  function IZ9(I) {
    if (G1.object(I)) {
      if (G1.defined(I.quality))
        if (G1.integer(I.quality) && G1.inRange(I.quality, 1, 100)) this.options.tiffQuality = I.quality;
        else throw G1.invalidParameterError("quality", "integer between 1 and 100", I.quality);
      if (G1.defined(I.bitdepth))
        if (G1.integer(I.bitdepth) && G1.inArray(I.bitdepth, [1, 2, 4, 8])) this.options.tiffBitdepth = I.bitdepth;
        else throw G1.invalidParameterError("bitdepth", "1, 2, 4 or 8", I.bitdepth);
      if (G1.defined(I.tile)) this._setBooleanOption("tiffTile", I.tile);
      if (G1.defined(I.tileWidth))
        if (G1.integer(I.tileWidth) && I.tileWidth > 0) this.options.tiffTileWidth = I.tileWidth;
        else throw G1.invalidParameterError("tileWidth", "integer greater than zero", I.tileWidth);
      if (G1.defined(I.tileHeight))
        if (G1.integer(I.tileHeight) && I.tileHeight > 0) this.options.tiffTileHeight = I.tileHeight;
        else throw G1.invalidParameterError("tileHeight", "integer greater than zero", I.tileHeight);
      if (G1.defined(I.miniswhite)) this._setBooleanOption("tiffMiniswhite", I.miniswhite);
      if (G1.defined(I.pyramid)) this._setBooleanOption("tiffPyramid", I.pyramid);
      if (G1.defined(I.xres))
        if (G1.number(I.xres) && I.xres > 0) this.options.tiffXres = I.xres;
        else throw G1.invalidParameterError("xres", "number greater than zero", I.xres);
      if (G1.defined(I.yres))
        if (G1.number(I.yres) && I.yres > 0) this.options.tiffYres = I.yres;
        else throw G1.invalidParameterError("yres", "number greater than zero", I.yres);
      if (G1.defined(I.compression))
        if (G1.string(I.compression) && G1.inArray(I.compression, ["none", "jpeg", "deflate", "packbits", "ccittfax4", "lzw", "webp", "zstd", "jp2k"])) this.options.tiffCompression = I.compression;
        else throw G1.invalidParameterError("compression", "one of: none, jpeg, deflate, packbits, ccittfax4, lzw, webp, zstd, jp2k", I.compression);
      if (G1.defined(I.predictor))
        if (G1.string(I.predictor) && G1.inArray(I.predictor, ["none", "horizontal", "float"])) this.options.tiffPredictor = I.predictor;
        else throw G1.invalidParameterError("predictor", "one of: none, horizontal, float", I.predictor);
      if (G1.defined(I.resolutionUnit))
        if (G1.string(I.resolutionUnit) && G1.inArray(I.resolutionUnit, ["inch", "cm"])) this.options.tiffResolutionUnit = I.resolutionUnit;
        else throw G1.invalidParameterError("resolutionUnit", "one of: inch, cm", I.resolutionUnit)
    }
    return this._updateFormatOut("tiff", I)
  }

  function dZ9(I) {
    return this.heif({
      ...I,
      compression: "av1"
    })
  }

  function GZ9(I) {
    if (G1.object(I)) {
      if (G1.string(I.compression) && G1.inArray(I.compression, ["av1", "hevc"])) this.options.heifCompression = I.compression;
      else throw G1.invalidParameterError("compression", "one of: av1, hevc", I.compression);
      if (G1.defined(I.quality))
        if (G1.integer(I.quality) && G1.inRange(I.quality, 1, 100)) this.options.heifQuality = I.quality;
        else throw G1.invalidParameterError("quality", "integer between 1 and 100", I.quality);
      if (G1.defined(I.lossless))
        if (G1.bool(I.lossless)) this.options.heifLossless = I.lossless;
        else throw G1.invalidParameterError("lossless", "boolean", I.lossless);
      if (G1.defined(I.effort))
        if (G1.integer(I.effort) && G1.inRange(I.effort, 0, 9)) this.options.heifEffort = I.effort;
        else throw G1.invalidParameterError("effort", "integer between 0 and 9", I.effort);
      if (G1.defined(I.chromaSubsampling))
        if (G1.string(I.chromaSubsampling) && G1.inArray(I.chromaSubsampling, ["4:2:0", "4:4:4"])) this.options.heifChromaSubsampling = I.chromaSubsampling;
        else throw G1.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", I.chromaSubsampling);
      if (G1.defined(I.bitdepth))
        if (G1.integer(I.bitdepth) && G1.inArray(I.bitdepth, [8, 10, 12])) {
          if (I.bitdepth !== 8 && this.constructor.versions.heif) throw G1.invalidParameterError("bitdepth when using prebuilt binaries", 8, I.bitdepth);
          this.options.heifBitdepth = I.bitdepth
        } else throw G1.invalidParameterError("bitdepth", "8, 10 or 12", I.bitdepth)
    } else throw G1.invalidParameterError("options", "Object", I);
    return this._updateFormatOut("heif", I)
  }

  function ZZ9(I) {
    if (G1.object(I)) {
      if (G1.defined(I.quality))
        if (G1.integer(I.quality) && G1.inRange(I.quality, 1, 100)) this.options.jxlDistance = I.quality >= 30 ? 0.1 + (100 - I.quality) * 0.09 : 0.017666666666666667 * I.quality * I.quality - 1.15 * I.quality + 25;
        else throw G1.invalidParameterError("quality", "integer between 1 and 100", I.quality);
      else if (G1.defined(I.distance))
        if (G1.number(I.distance) && G1.inRange(I.distance, 0, 15)) this.options.jxlDistance = I.distance;
        else throw G1.invalidParameterError("distance", "number between 0.0 and 15.0", I.distance);
      if (G1.defined(I.decodingTier))
        if (G1.integer(I.decodingTier) && G1.inRange(I.decodingTier, 0, 4)) this.options.jxlDecodingTier = I.decodingTier;
        else throw G1.invalidParameterError("decodingTier", "integer between 0 and 4", I.decodingTier);
      if (G1.defined(I.lossless))
        if (G1.bool(I.lossless)) this.options.jxlLossless = I.lossless;
        else throw G1.invalidParameterError("lossless", "boolean", I.lossless);
      if (G1.defined(I.effort))
        if (G1.integer(I.effort) && G1.inRange(I.effort, 3, 9)) this.options.jxlEffort = I.effort;
        else throw G1.invalidParameterError("effort", "integer between 3 and 9", I.effort)
    }
    return this._updateFormatOut("jxl", I)
  }

  function CZ9(I) {
    if (G1.object(I)) {
      if (G1.defined(I.depth))
        if (G1.string(I.depth) && G1.inArray(I.depth, ["char", "uchar", "short", "ushort", "int", "uint", "float", "complex", "double", "dpcomplex"])) this.options.rawDepth = I.depth;
        else throw G1.invalidParameterError("depth", "one of: char, uchar, short, ushort, int, uint, float, complex, double, dpcomplex", I.depth)
    }
    return this._updateFormatOut("raw")
  }

  function WZ9(I) {
    if (G1.object(I)) {
      if (G1.defined(I.size))
        if (G1.integer(I.size) && G1.inRange(I.size, 1, 8192)) this.options.tileSize = I.size;
        else throw G1.invalidParameterError("size", "integer between 1 and 8192", I.size);
      if (G1.defined(I.overlap))
        if (G1.integer(I.overlap) && G1.inRange(I.overlap, 0, 8192)) {
          if (I.overlap > this.options.tileSize) throw G1.invalidParameterError("overlap", `<= size (${this.options.tileSize})`, I.overlap);
          this.options.tileOverlap = I.overlap
        } else throw G1.invalidParameterError("overlap", "integer between 0 and 8192", I.overlap);
      if (G1.defined(I.container))
        if (G1.string(I.container) && G1.inArray(I.container, ["fs", "zip"])) this.options.tileContainer = I.container;
        else throw G1.invalidParameterError("container", "one of: fs, zip", I.container);
      if (G1.defined(I.layout))
        if (G1.string(I.layout) && G1.inArray(I.layout, ["dz", "google", "iiif", "iiif3", "zoomify"])) this.options.tileLayout = I.layout;
        else throw G1.invalidParameterError("layout", "one of: dz, google, iiif, iiif3, zoomify", I.layout);
      if (G1.defined(I.angle))
        if (G1.integer(I.angle) && !(I.angle % 90)) this.options.tileAngle = I.angle;
        else throw G1.invalidParameterError("angle", "positive/negative multiple of 90", I.angle);
      if (this._setBackgroundColourOption("tileBackground", I.background), G1.defined(I.depth))
        if (G1.string(I.depth) && G1.inArray(I.depth, ["onepixel", "onetile", "one"])) this.options.tileDepth = I.depth;
        else throw G1.invalidParameterError("depth", "one of: onepixel, onetile, one", I.depth);
      if (G1.defined(I.skipBlanks))
        if (G1.integer(I.skipBlanks) && G1.inRange(I.skipBlanks, -1, 65535)) this.options.tileSkipBlanks = I.skipBlanks;
        else throw G1.invalidParameterError("skipBlanks", "integer between -1 and 255/65535", I.skipBlanks);
      else if (G1.defined(I.layout) && I.layout === "google") this.options.tileSkipBlanks = 5;
      let d = G1.bool(I.center) ? I.center : I.centre;
      if (G1.defined(d)) this._setBooleanOption("tileCentre", d);
      if (G1.defined(I.id))
        if (G1.string(I.id)) this.options.tileId = I.id;
        else throw G1.invalidParameterError("id", "string", I.id);
      if (G1.defined(I.basename))
        if (G1.string(I.basename)) this.options.tileBasename = I.basename;
        else throw G1.invalidParameterError("basename", "string", I.basename)
    }
    if (G1.inArray(this.options.formatOut, ["jpeg", "png", "webp"])) this.options.tileFormat = this.options.formatOut;
    else if (this.options.formatOut !== "input") throw G1.invalidParameterError("format", "one of: jpeg, png, webp", this.options.formatOut);
    return this._updateFormatOut("dz")
  }

  function wZ9(I) {
    if (!G1.plainObject(I)) throw G1.invalidParameterError("options", "object", I);
    if (G1.integer(I.seconds) && G1.inRange(I.seconds, 0, 3600)) this.options.timeoutSeconds = I.seconds;
    else throw G1.invalidParameterError("seconds", "integer between 0 and 3600", I.seconds);
    return this
  }

  function BZ9(I, d) {
    if (!(G1.object(d) && d.force === !1)) this.options.formatOut = I;
    return this
  }

  function AZ9(I, d) {
    if (G1.bool(d)) this.options[I] = d;
    else throw G1.invalidParameterError(I, "boolean", d)
  }

  function VZ9() {
    if (!this.options.streamOut) {
      this.options.streamOut = !0;
      let I = Error();
      this._pipeline(void 0, I)
    }
  }

  function XZ9(I, d) {
    if (typeof I === "function") {
      if (this._isStreamInput()) this.on("finish", () => {
        this._flattenBufferIn(), xR.pipeline(this.options, (G, Z, C) => {
          if (G) I(G1.nativeError(G, d));
          else I(null, Z, C)
        })
      });
      else xR.pipeline(this.options, (G, Z, C) => {
        if (G) I(G1.nativeError(G, d));
        else I(null, Z, C)
      });
      return this
    } else if (this.options.streamOut) {
      if (this._isStreamInput()) {
        if (this.once("finish", () => {
            this._flattenBufferIn(), xR.pipeline(this.options, (G, Z, C) => {
              if (G) this.emit("error", G1.nativeError(G, d));
              else this.emit("info", C), this.push(Z);
              this.push(null), this.on("end", () => this.emit("close"))
            })
          }), this.streamInFinished) this.emit("finish")
      } else xR.pipeline(this.options, (G, Z, C) => {
        if (G) this.emit("error", G1.nativeError(G, d));
        else this.emit("info", C), this.push(Z);
        this.push(null), this.on("end", () => this.emit("close"))
      });
      return this
    } else if (this._isStreamInput()) return new Promise((G, Z) => {
      this.once("finish", () => {
        this._flattenBufferIn(), xR.pipeline(this.options, (C, W, w) => {
          if (C) Z(G1.nativeError(C, d));
          else if (this.options.resolveWithObject) G({
            data: W,
            info: w
          });
          else G(W)
        })
      })
    });
    else return new Promise((G, Z) => {
      xR.pipeline(this.options, (C, W, w) => {
        if (C) Z(G1.nativeError(C, d));
        else if (this.options.resolveWithObject) G({
          data: W,
          info: w
        });
        else G(W)
      })
    })
  }
  qK2.exports = function(I) {
    Object.assign(I.prototype, {
      toFile: bG9,
      toBuffer: hG9,
      keepExif: jG9,
      withExif: kG9,
      withExifMerge: xG9,
      keepIccProfile: cG9,
      withIccProfile: pG9,
      keepMetadata: iG9,
      withMetadata: nG9,
      toFormat: rG9,
      jpeg: aG9,
      jp2: tG9,
      png: sG9,
      webp: oG9,
      tiff: IZ9,
      avif: dZ9,
      heif: GZ9,
      jxl: ZZ9,
      gif: eG9,
      raw: CZ9,
      tile: WZ9,
      timeout: wZ9,
      _updateFormatOut: BZ9,
      _setBooleanOption: AZ9,
      _read: VZ9,
      _pipeline: XZ9
    })
  }
})
// @from(Start 5387641, End 5390219)
MK2 = Y((dN3, EK2) => {
  var YZ9 = B1("node:events"),
    Ms = _s(),
    pZ = $B(),
    {
      runtimePlatformArch: _Z9
    } = pg1(),
    KI = c$(),
    UK2 = _Z9(),
    IJ1 = KI.libvipsVersion(),
    HH = KI.format();
  HH.heif.output.alias = ["avif", "heic"];
  HH.jpeg.output.alias = ["jpe", "jpg"];
  HH.tiff.output.alias = ["tif"];
  HH.jp2k.output.alias = ["j2c", "j2k", "jp2", "jpx"];
  var DZ9 = {
      nearest: "nearest",
      bilinear: "bilinear",
      bicubic: "bicubic",
      locallyBoundedBicubic: "lbb",
      nohalo: "nohalo",
      vertexSplitQuadraticBasisSpline: "vsqbs"
    },
    cR = {
      vips: IJ1.semver
    };
  if (!IJ1.isGlobal)
    if (!IJ1.isWasm) try {
      cR = B1(`@img/sharp-${UK2}/versions`)
    } catch (I) {
      try {
        cR = B1(`@img/sharp-libvips-${UK2}/versions`)
      } catch (d) {}
    } else try {
      cR = (() => {
        throw new Error("Cannot require module " + "@img/sharp-wasm32/versions");
      })()
    } catch (I) {}
  cR.sharp = xg1().version;
  if (cR.heif && HH.heif) HH.heif.input.fileSuffix = [".avif"], HH.heif.output.alias = ["avif"];

  function vK2(I) {
    if (pZ.bool(I))
      if (I) return KI.cache(50, 20, 100);
      else return KI.cache(0, 0, 0);
    else if (pZ.object(I)) return KI.cache(I.memory, I.files, I.items);
    else return KI.cache()
  }
  vK2(!0);

  function HZ9(I) {
    return KI.concurrency(pZ.integer(I) ? I : null)
  }
  if (Ms.familySync() === Ms.GLIBC && !KI._isUsingJemalloc()) KI.concurrency(1);
  else if (Ms.familySync() === Ms.MUSL && KI.concurrency() === 1024) KI.concurrency(B1("node:os").availableParallelism());
  var FZ9 = new YZ9.EventEmitter;

  function gZ9() {
    return KI.counters()
  }

  function JZ9(I) {
    return KI.simd(pZ.bool(I) ? I : null)
  }

  function KZ9(I) {
    if (pZ.object(I))
      if (Array.isArray(I.operation) && I.operation.every(pZ.string)) KI.block(I.operation, !0);
      else throw pZ.invalidParameterError("operation", "Array<string>", I.operation);
    else throw pZ.invalidParameterError("options", "object", I)
  }

  function NZ9(I) {
    if (pZ.object(I))
      if (Array.isArray(I.operation) && I.operation.every(pZ.string)) KI.block(I.operation, !1);
      else throw pZ.invalidParameterError("operation", "Array<string>", I.operation);
    else throw pZ.invalidParameterError("options", "object", I)
  }
  EK2.exports = function(I) {
    I.cache = vK2, I.concurrency = HZ9, I.counters = gZ9, I.simd = JZ9, I.format = HH, I.interpolators = DZ9, I.versions = cR, I.queue = FZ9, I.block = KZ9, I.unblock = NZ9
  }
})
// @from(Start 5390225, End 5390392)
LK2 = Y((ZN3, SK2) => {
  var YX = kJ2();
  GK2()(YX);
  AK2()(YX);
  XK2()(YX);
  DK2()(YX);
  gK2()(YX);
  KK2()(YX);
  RK2()(YX);
  MK2()(YX);
  SK2.exports = YX
})
// @from(Start 5390398, End 5390802)
js = Y((_f3, XN2) => {
  var qJ1 = [],
    VN2 = 0,
    k7 = (I, d) => {
      if (VN2 >= d) qJ1.push(I)
    };
  k7.WARN = 1;
  k7.INFO = 2;
  k7.DEBUG = 3;
  k7.reset = () => {
    qJ1 = []
  };
  k7.setDebugLevel = (I) => {
    VN2 = I
  };
  k7.warn = (I) => k7(I, k7.WARN);
  k7.info = (I) => k7(I, k7.INFO);
  k7.debug = (I) => k7(I, k7.DEBUG);
  k7.debugMessages = () => qJ1;
  XN2.exports = k7
})
// @from(Start 5390808, End 5391149)
_N2 = Y((Df3, YN2) => {
  YN2.exports = ({
    onlyFirst: I = !1
  } = {}) => {
    let d = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
    return new RegExp(d, I ? void 0 : "g")
  }
})
// @from(Start 5391155, End 5391272)
HN2 = Y((Hf3, DN2) => {
  var KC9 = _N2();
  DN2.exports = (I) => typeof I === "string" ? I.replace(KC9(), "") : I
})
// @from(Start 5391278, End 5391887)
gN2 = Y((Ff3, RJ1) => {
  var FN2 = (I) => {
    if (Number.isNaN(I)) return !1;
    if (I >= 4352 && (I <= 4447 || I === 9001 || I === 9002 || 11904 <= I && I <= 12871 && I !== 12351 || 12880 <= I && I <= 19903 || 19968 <= I && I <= 42182 || 43360 <= I && I <= 43388 || 44032 <= I && I <= 55203 || 63744 <= I && I <= 64255 || 65040 <= I && I <= 65049 || 65072 <= I && I <= 65131 || 65281 <= I && I <= 65376 || 65504 <= I && I <= 65510 || 110592 <= I && I <= 110593 || 127488 <= I && I <= 127569 || 131072 <= I && I <= 262141)) return !0;
    return !1
  };
  RJ1.exports = FN2;
  RJ1.exports.default = FN2
})
// @from(Start 5391893, End 5402163)
KN2 = Y((gf3, JN2) => {
  JN2.exports = function() {
    return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g
  }
})
// @from(Start 5402169, End 5402738)
zN2 = Y((Jf3, UJ1) => {
  var NC9 = HN2(),
    zC9 = gN2(),
    QC9 = KN2(),
    NN2 = (I) => {
      if (typeof I !== "string" || I.length === 0) return 0;
      if (I = NC9(I), I.length === 0) return 0;
      I = I.replace(QC9(), "  ");
      let d = 0;
      for (let G = 0; G < I.length; G++) {
        let Z = I.codePointAt(G);
        if (Z <= 31 || Z >= 127 && Z <= 159) continue;
        if (Z >= 768 && Z <= 879) continue;
        if (Z > 65535) G++;
        d += zC9(Z) ? 2 : 1
      }
      return d
    };
  UJ1.exports = NN2;
  UJ1.exports.default = NN2
})
// @from(Start 5402744, End 5408292)
vJ1 = Y((Kf3, RN2) => {
  var QN2 = zN2();

  function ks(I) {
    return I ? /\u001b\[((?:\d*;){0,5}\d*)m/g : /\u001b\[(?:\d*;){0,5}\d*m/g
  }

  function mB(I) {
    let d = ks();
    return ("" + I).replace(d, "").split(`
`).reduce(function(C, W) {
      return QN2(W) > C ? QN2(W) : C
    }, 0)
  }

  function du(I, d) {
    return Array(d + 1).join(I)
  }

  function fC9(I, d, G, Z) {
    let C = mB(I);
    if (d + 1 >= C) {
      let W = d - C;
      switch (Z) {
        case "right": {
          I = du(G, W) + I;
          break
        }
        case "center": {
          let w = Math.ceil(W / 2),
            B = W - w;
          I = du(G, B) + I + du(G, w);
          break
        }
        default: {
          I = I + du(G, W);
          break
        }
      }
    }
    return I
  }
  var oR = {};

  function Gu(I, d, G) {
    d = "\x1B[" + d + "m", G = "\x1B[" + G + "m", oR[d] = {
      set: I,
      to: !0
    }, oR[G] = {
      set: I,
      to: !1
    }, oR[I] = {
      on: d,
      off: G
    }
  }
  Gu("bold", 1, 22);
  Gu("italics", 3, 23);
  Gu("underline", 4, 24);
  Gu("inverse", 7, 27);
  Gu("strikethrough", 9, 29);

  function fN2(I, d) {
    let G = d[1] ? parseInt(d[1].split(";")[0]) : 0;
    if (G >= 30 && G <= 39 || G >= 90 && G <= 97) {
      I.lastForegroundAdded = d[0];
      return
    }
    if (G >= 40 && G <= 49 || G >= 100 && G <= 107) {
      I.lastBackgroundAdded = d[0];
      return
    }
    if (G === 0) {
      for (let C in I)
        if (Object.prototype.hasOwnProperty.call(I, C)) delete I[C];
      return
    }
    let Z = oR[d[0]];
    if (Z) I[Z.set] = Z.to
  }

  function qC9(I) {
    let d = ks(!0),
      G = d.exec(I),
      Z = {};
    while (G !== null) fN2(Z, G), G = d.exec(I);
    return Z
  }

  function qN2(I, d) {
    let {
      lastBackgroundAdded: G,
      lastForegroundAdded: Z
    } = I;
    if (delete I.lastBackgroundAdded, delete I.lastForegroundAdded, Object.keys(I).forEach(function(C) {
        if (I[C]) d += oR[C].off
      }), G && G != "\x1B[49m") d += "\x1B[49m";
    if (Z && Z != "\x1B[39m") d += "\x1B[39m";
    return d
  }

  function RC9(I, d) {
    let {
      lastBackgroundAdded: G,
      lastForegroundAdded: Z
    } = I;
    if (delete I.lastBackgroundAdded, delete I.lastForegroundAdded, Object.keys(I).forEach(function(C) {
        if (I[C]) d = oR[C].on + d
      }), G && G != "\x1B[49m") d = G + d;
    if (Z && Z != "\x1B[39m") d = Z + d;
    return d
  }

  function UC9(I, d) {
    if (I.length === mB(I)) return I.substr(0, d);
    while (mB(I) > d) I = I.slice(0, -1);
    return I
  }

  function vC9(I, d) {
    let G = ks(!0),
      Z = I.split(ks()),
      C = 0,
      W = 0,
      w = "",
      B, A = {};
    while (W < d) {
      B = G.exec(I);
      let V = Z[C];
      if (C++, W + mB(V) > d) V = UC9(V, d - W);
      if (w += V, W += mB(V), W < d) {
        if (!B) break;
        w += B[0], fN2(A, B)
      }
    }
    return qN2(A, w)
  }

  function EC9(I, d, G) {
    if (G = G || "…", mB(I) <= d) return I;
    d -= mB(G);
    let C = vC9(I, d);
    C += G;
    let W = "\x1B]8;;\x07";
    if (I.includes(W) && !C.includes(W)) C += W;
    return C
  }

  function MC9() {
    return {
      chars: {
        top: "─",
        "top-mid": "┬",
        "top-left": "┌",
        "top-right": "┐",
        bottom: "─",
        "bottom-mid": "┴",
        "bottom-left": "└",
        "bottom-right": "┘",
        left: "│",
        "left-mid": "├",
        mid: "─",
        "mid-mid": "┼",
        right: "│",
        "right-mid": "┤",
        middle: "│"
      },
      truncate: "…",
      colWidths: [],
      rowHeights: [],
      colAligns: [],
      rowAligns: [],
      style: {
        "padding-left": 1,
        "padding-right": 1,
        head: ["red"],
        border: ["grey"],
        compact: !1
      },
      head: []
    }
  }

  function SC9(I, d) {
    I = I || {}, d = d || MC9();
    let G = Object.assign({}, d, I);
    return G.chars = Object.assign({}, d.chars, I.chars), G.style = Object.assign({}, d.style, I.style), G
  }

  function LC9(I, d) {
    let G = [],
      Z = d.split(/(\s+)/g),
      C = [],
      W = 0,
      w;
    for (let B = 0; B < Z.length; B += 2) {
      let A = Z[B],
        V = W + mB(A);
      if (W > 0 && w) V += w.length;
      if (V > I) {
        if (W !== 0) G.push(C.join(""));
        C = [A], W = mB(A)
      } else C.push(w || "", A), W = V;
      w = Z[B + 1]
    }
    if (W) G.push(C.join(""));
    return G
  }

  function yC9(I, d) {
    let G = [],
      Z = "";

    function C(w, B) {
      if (Z.length && B) Z += B;
      Z += w;
      while (Z.length > I) G.push(Z.slice(0, I)), Z = Z.slice(I)
    }
    let W = d.split(/(\s+)/g);
    for (let w = 0; w < W.length; w += 2) C(W[w], w && W[w - 1]);
    if (Z.length) G.push(Z);
    return G
  }

  function PC9(I, d, G = !0) {
    let Z = [];
    d = d.split(`
`);
    let C = G ? LC9 : yC9;
    for (let W = 0; W < d.length; W++) Z.push.apply(Z, C(I, d[W]));
    return Z
  }

  function $C9(I) {
    let d = {},
      G = [];
    for (let Z = 0; Z < I.length; Z++) {
      let C = RC9(d, I[Z]);
      d = qC9(C);
      let W = Object.assign({}, d);
      G.push(qN2(W, C))
    }
    return G
  }

  function uC9(I, d) {
    return ["\x1B]", "8", ";", ";", I || d, "\x07", d, "\x1B]", "8", ";", ";", "\x07"].join("")
  }
  RN2.exports = {
    strlen: mB,
    repeat: du,
    pad: fC9,
    truncate: EC9,
    mergeOptions: SC9,
    wordWrap: PC9,
    colorizeLines: $C9,
    hyperlink: uC9
  }
})
// @from(Start 5408298, End 5409722)
MN2 = Y((Nf3, EN2) => {
  var vN2 = {};
  EN2.exports = vN2;
  var UN2 = {
    reset: [0, 0],
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29],
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    gray: [90, 39],
    grey: [90, 39],
    brightRed: [91, 39],
    brightGreen: [92, 39],
    brightYellow: [93, 39],
    brightBlue: [94, 39],
    brightMagenta: [95, 39],
    brightCyan: [96, 39],
    brightWhite: [97, 39],
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],
    bgGray: [100, 49],
    bgGrey: [100, 49],
    bgBrightRed: [101, 49],
    bgBrightGreen: [102, 49],
    bgBrightYellow: [103, 49],
    bgBrightBlue: [104, 49],
    bgBrightMagenta: [105, 49],
    bgBrightCyan: [106, 49],
    bgBrightWhite: [107, 49],
    blackBG: [40, 49],
    redBG: [41, 49],
    greenBG: [42, 49],
    yellowBG: [43, 49],
    blueBG: [44, 49],
    magentaBG: [45, 49],
    cyanBG: [46, 49],
    whiteBG: [47, 49]
  };
  Object.keys(UN2).forEach(function(I) {
    var d = UN2[I],
      G = vN2[I] = [];
    G.open = "\x1B[" + d[0] + "m", G.close = "\x1B[" + d[1] + "m"
  })
})
// @from(Start 5409728, End 5409963)
LN2 = Y((zf3, SN2) => {
  SN2.exports = function(I, d) {
    d = d || process.argv;
    var G = d.indexOf("--"),
      Z = /^-{1,2}/.test(I) ? "" : "--",
      C = d.indexOf(Z + I);
    return C !== -1 && (G === -1 ? !0 : C < G)
  }
})
// @from(Start 5409969, End 5411978)
PN2 = Y((Qf3, yN2) => {
  var TC9 = B1("os"),
    NW = LN2(),
    QI = process.env,
    eR = void 0;
  if (NW("no-color") || NW("no-colors") || NW("color=false")) eR = !1;
  else if (NW("color") || NW("colors") || NW("color=true") || NW("color=always")) eR = !0;
  if ("FORCE_COLOR" in QI) eR = QI.FORCE_COLOR.length === 0 || parseInt(QI.FORCE_COLOR, 10) !== 0;

  function OC9(I) {
    if (I === 0) return !1;
    return {
      level: I,
      hasBasic: !0,
      has256: I >= 2,
      has16m: I >= 3
    }
  }

  function mC9(I) {
    if (eR === !1) return 0;
    if (NW("color=16m") || NW("color=full") || NW("color=truecolor")) return 3;
    if (NW("color=256")) return 2;
    if (I && !I.isTTY && eR !== !0) return 0;
    var d = eR ? 1 : 0;
    if (process.platform === "win32") {
      var G = TC9.release().split(".");
      if (Number(process.versions.node.split(".")[0]) >= 8 && Number(G[0]) >= 10 && Number(G[2]) >= 10586) return Number(G[2]) >= 14931 ? 3 : 2;
      return 1
    }
    if ("CI" in QI) {
      if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(function(C) {
          return C in QI
        }) || QI.CI_NAME === "codeship") return 1;
      return d
    }
    if ("TEAMCITY_VERSION" in QI) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(QI.TEAMCITY_VERSION) ? 1 : 0;
    if ("TERM_PROGRAM" in QI) {
      var Z = parseInt((QI.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (QI.TERM_PROGRAM) {
        case "iTerm.app":
          return Z >= 3 ? 3 : 2;
        case "Hyper":
          return 3;
        case "Apple_Terminal":
          return 2
      }
    }
    if (/-256(color)?$/i.test(QI.TERM)) return 2;
    if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(QI.TERM)) return 1;
    if ("COLORTERM" in QI) return 1;
    if (QI.TERM === "dumb") return d;
    return d
  }

  function EJ1(I) {
    var d = mC9(I);
    return OC9(d)
  }
  yN2.exports = {
    supportsColor: EJ1,
    stdout: EJ1(process.stdout),
    stderr: EJ1(process.stderr)
  }
})
// @from(Start 5411984, End 5413144)
uN2 = Y((ff3, $N2) => {
  $N2.exports = function I(d, G) {
    var Z = "";
    d = d || "Run the trap, drop the bass", d = d.split("");
    var C = {
      a: ["@", "Ą", "Ⱥ", "Ʌ", "Δ", "Λ", "Д"],
      b: ["ß", "Ɓ", "Ƀ", "ɮ", "β", "฿"],
      c: ["©", "Ȼ", "Ͼ"],
      d: ["Ð", "Ɗ", "Ԁ", "ԁ", "Ԃ", "ԃ"],
      e: ["Ë", "ĕ", "Ǝ", "ɘ", "Σ", "ξ", "Ҽ", "੬"],
      f: ["Ӻ"],
      g: ["ɢ"],
      h: ["Ħ", "ƕ", "Ң", "Һ", "Ӈ", "Ԋ"],
      i: ["༏"],
      j: ["Ĵ"],
      k: ["ĸ", "Ҡ", "Ӄ", "Ԟ"],
      l: ["Ĺ"],
      m: ["ʍ", "Ӎ", "ӎ", "Ԡ", "ԡ", "൩"],
      n: ["Ñ", "ŋ", "Ɲ", "Ͷ", "Π", "Ҋ"],
      o: ["Ø", "õ", "ø", "Ǿ", "ʘ", "Ѻ", "ם", "۝", "๏"],
      p: ["Ƿ", "Ҏ"],
      q: ["্"],
      r: ["®", "Ʀ", "Ȑ", "Ɍ", "ʀ", "Я"],
      s: ["§", "Ϟ", "ϟ", "Ϩ"],
      t: ["Ł", "Ŧ", "ͳ"],
      u: ["Ʊ", "Ս"],
      v: ["ט"],
      w: ["Ш", "Ѡ", "Ѽ", "൰"],
      x: ["Ҳ", "Ӿ", "Ӽ", "ӽ"],
      y: ["¥", "Ұ", "Ӌ"],
      z: ["Ƶ", "ɀ"]
    };
    return d.forEach(function(W) {
      W = W.toLowerCase();
      var w = C[W] || [" "],
        B = Math.floor(Math.random() * w.length);
      if (typeof C[W] !== "undefined") Z += C[W][B];
      else Z += W
    }), Z
  }
})
// @from(Start 5413150, End 5415148)
ON2 = Y((qf3, TN2) => {
  TN2.exports = function I(d, G) {
    d = d || "   he is here   ";
    var Z = {
        up: ["̍", "̎", "̄", "̅", "̿", "̑", "̆", "̐", "͒", "͗", "͑", "̇", "̈", "̊", "͂", "̓", "̈", "͊", "͋", "͌", "̃", "̂", "̌", "͐", "̀", "́", "̋", "̏", "̒", "̓", "̔", "̽", "̉", "ͣ", "ͤ", "ͥ", "ͦ", "ͧ", "ͨ", "ͩ", "ͪ", "ͫ", "ͬ", "ͭ", "ͮ", "ͯ", "̾", "͛", "͆", "̚"],
        down: ["̖", "̗", "̘", "̙", "̜", "̝", "̞", "̟", "̠", "̤", "̥", "̦", "̩", "̪", "̫", "̬", "̭", "̮", "̯", "̰", "̱", "̲", "̳", "̹", "̺", "̻", "̼", "ͅ", "͇", "͈", "͉", "͍", "͎", "͓", "͔", "͕", "͖", "͙", "͚", "̣"],
        mid: ["̕", "̛", "̀", "́", "͘", "̡", "̢", "̧", "̨", "̴", "̵", "̶", "͜", "͝", "͞", "͟", "͠", "͢", "̸", "̷", "͡", " ҉"]
      },
      C = [].concat(Z.up, Z.down, Z.mid);

    function W(A) {
      var V = Math.floor(Math.random() * A);
      return V
    }

    function w(A) {
      var V = !1;
      return C.filter(function(X) {
        V = X === A
      }), V
    }

    function B(A, V) {
      var X = "",
        _, F;
      V = V || {}, V.up = typeof V.up !== "undefined" ? V.up : !0, V.mid = typeof V.mid !== "undefined" ? V.mid : !0, V.down = typeof V.down !== "undefined" ? V.down : !0, V.size = typeof V.size !== "undefined" ? V.size : "maxi", A = A.split("");
      for (F in A) {
        if (w(F)) continue;
        switch (X = X + A[F], _ = {
            up: 0,
            down: 0,
            mid: 0
          }, V.size) {
          case "mini":
            _.up = W(8), _.mid = W(2), _.down = W(8);
            break;
          case "maxi":
            _.up = W(16) + 3, _.mid = W(4) + 1, _.down = W(64) + 3;
            break;
          default:
            _.up = W(8) + 1, _.mid = W(6) / 2, _.down = W(8) + 1;
            break
        }
        var g = ["up", "mid", "down"];
        for (var J in g) {
          var K = g[J];
          for (var Q = 0; Q <= _[K]; Q++)
            if (V[K]) X = X + Z[K][W(Z[K].length)]
        }
      }
      return X
    }
    return B(d, G)
  }
})
// @from(Start 5415154, End 5415444)
lN2 = Y((Rf3, mN2) => {
  mN2.exports = function(I) {
    return function(d, G, Z) {
      if (d === " ") return d;
      switch (G % 3) {
        case 0:
          return I.red(d);
        case 1:
          return I.white(d);
        case 2:
          return I.blue(d)
      }
    }
  }
})
// @from(Start 5415450, End 5415591)
hN2 = Y((Uf3, bN2) => {
  bN2.exports = function(I) {
    return function(d, G, Z) {
      return G % 2 === 0 ? d : I.inverse(d)
    }
  }
})
// @from(Start 5415597, End 5415826)
kN2 = Y((vf3, jN2) => {
  jN2.exports = function(I) {
    var d = ["red", "yellow", "green", "blue", "magenta"];
    return function(G, Z, C) {
      if (G === " ") return G;
      else return I[d[Z++ % d.length]](G)
    }
  }
})
// @from(Start 5415832, End 5416222)
cN2 = Y((Ef3, xN2) => {
  xN2.exports = function(I) {
    var d = ["underline", "inverse", "grey", "yellow", "red", "green", "blue", "white", "cyan", "magenta", "brightYellow", "brightRed", "brightGreen", "brightBlue", "brightWhite", "brightCyan", "brightMagenta"];
    return function(G, Z, C) {
      return G === " " ? G : I[d[Math.round(Math.random() * (d.length - 2))]](G)
    }
  }
})
// @from(Start 5416228, End 5419446)
sN2 = Y((Sf3, aN2) => {
  var o4 = {};
  aN2.exports = o4;
  o4.themes = {};
  var lC9 = B1("util"),
    ZK = o4.styles = MN2(),
    iN2 = Object.defineProperties,
    bC9 = new RegExp(/[\r\n]+/g);
  o4.supportsColor = PN2().supportsColor;
  if (typeof o4.enabled === "undefined") o4.enabled = o4.supportsColor() !== !1;
  o4.enable = function() {
    o4.enabled = !0
  };
  o4.disable = function() {
    o4.enabled = !1
  };
  o4.stripColors = o4.strip = function(I) {
    return ("" + I).replace(/\x1B\[\d+m/g, "")
  };
  var Mf3 = o4.stylize = function I(d, G) {
      if (!o4.enabled) return d + "";
      var Z = ZK[G];
      if (!Z && G in o4) return o4[G](d);
      return Z.open + d + Z.close
    },
    hC9 = /[|\\{}()[\]^$+*?.]/g,
    jC9 = function(I) {
      if (typeof I !== "string") throw new TypeError("Expected a string");
      return I.replace(hC9, "\\$&")
    };

  function nN2(I) {
    var d = function G() {
      return xC9.apply(G, arguments)
    };
    return d._styles = I, d.__proto__ = kC9, d
  }
  var rN2 = function() {
      var I = {};
      return ZK.grey = ZK.gray, Object.keys(ZK).forEach(function(d) {
        ZK[d].closeRe = new RegExp(jC9(ZK[d].close), "g"), I[d] = {
          get: function() {
            return nN2(this._styles.concat(d))
          }
        }
      }), I
    }(),
    kC9 = iN2(function I() {}, rN2);

  function xC9() {
    var I = Array.prototype.slice.call(arguments),
      d = I.map(function(w) {
        if (w != null && w.constructor === String) return w;
        else return lC9.inspect(w)
      }).join(" ");
    if (!o4.enabled || !d) return d;
    var G = d.indexOf(`
`) != -1,
      Z = this._styles,
      C = Z.length;
    while (C--) {
      var W = ZK[Z[C]];
      if (d = W.open + d.replace(W.closeRe, W.open) + W.close, G) d = d.replace(bC9, function(w) {
        return W.close + w + W.open
      })
    }
    return d
  }
  o4.setTheme = function(I) {
    if (typeof I === "string") {
      console.log("colors.setTheme now only accepts an object, not a string.  If you are trying to set a theme from a file, it is now your (the caller's) responsibility to require the file.  The old syntax looked like colors.setTheme(__dirname + '/../themes/generic-logging.js'); The new syntax looks like colors.setTheme(require(__dirname + '/../themes/generic-logging.js'));");
      return
    }
    for (var d in I)(function(G) {
      o4[G] = function(Z) {
        if (typeof I[G] === "object") {
          var C = Z;
          for (var W in I[G]) C = o4[I[G][W]](C);
          return C
        }
        return o4[I[G]](Z)
      }
    })(d)
  };

  function cC9() {
    var I = {};
    return Object.keys(rN2).forEach(function(d) {
      I[d] = {
        get: function() {
          return nN2([d])
        }
      }
    }), I
  }
  var pC9 = function I(d, G) {
    var Z = G.split("");
    return Z = Z.map(d), Z.join("")
  };
  o4.trap = uN2();
  o4.zalgo = ON2();
  o4.maps = {};
  o4.maps.america = lN2()(o4);
  o4.maps.zebra = hN2()(o4);
  o4.maps.rainbow = kN2()(o4);
  o4.maps.random = cN2()(o4);
  for (pN2 in o4.maps)(function(I) {
    o4[I] = function(d) {
      return pC9(o4.maps[I], d)
    }
  })(pN2);
  var pN2;
  iN2(o4, cC9())
})
// @from(Start 5419452, End 5419517)
eN2 = Y((Lf3, oN2) => {
  var iC9 = sN2();
  oN2.exports = iC9
})
// @from(Start 5419523, End 5427424)
Gz2 = Y((yf3, ps) => {
  var {
    info: nC9,
    debug: dz2
  } = js(), DG = vJ1();
  class Zu {
    constructor(I) {
      this.setOptions(I), this.x = null, this.y = null
    }
    setOptions(I) {
      if (["boolean", "number", "bigint", "string"].indexOf(typeof I) !== -1) I = {
        content: "" + I
      };
      I = I || {}, this.options = I;
      let d = I.content;
      if (["boolean", "number", "bigint", "string"].indexOf(typeof d) !== -1) this.content = String(d);
      else if (!d) this.content = this.options.href || "";
      else throw new Error("Content needs to be a primitive, got: " + typeof d);
      if (this.colSpan = I.colSpan || 1, this.rowSpan = I.rowSpan || 1, this.options.href) Object.defineProperty(this, "href", {
        get() {
          return this.options.href
        }
      })
    }
    mergeTableOptions(I, d) {
      this.cells = d;
      let G = this.options.chars || {},
        Z = I.chars,
        C = this.chars = {};
      aC9.forEach(function(B) {
        MJ1(G, Z, B, C)
      }), this.truncate = this.options.truncate || I.truncate;
      let W = this.options.style = this.options.style || {},
        w = I.style;
      MJ1(W, w, "padding-left", this), MJ1(W, w, "padding-right", this), this.head = W.head || w.head, this.border = W.border || w.border, this.fixedWidth = I.colWidths[this.x], this.lines = this.computeLines(I), this.desiredWidth = DG.strlen(this.content) + this.paddingLeft + this.paddingRight, this.desiredHeight = this.lines.length
    }
    computeLines(I) {
      let d = I.wordWrap || I.textWrap,
        {
          wordWrap: G = d
        } = this.options;
      if (this.fixedWidth && G) {
        if (this.fixedWidth -= this.paddingLeft + this.paddingRight, this.colSpan) {
          let W = 1;
          while (W < this.colSpan) this.fixedWidth += I.colWidths[this.x + W], W++
        }
        let {
          wrapOnWordBoundary: Z = !0
        } = I, {
          wrapOnWordBoundary: C = Z
        } = this.options;
        return this.wrapLines(DG.wordWrap(this.fixedWidth, this.content, C))
      }
      return this.wrapLines(this.content.split(`
`))
    }
    wrapLines(I) {
      let d = DG.colorizeLines(I);
      if (this.href) return d.map((G) => DG.hyperlink(this.href, G));
      return d
    }
    init(I) {
      let d = this.x,
        G = this.y;
      this.widths = I.colWidths.slice(d, d + this.colSpan), this.heights = I.rowHeights.slice(G, G + this.rowSpan), this.width = this.widths.reduce(Iz2, -1), this.height = this.heights.reduce(Iz2, -1), this.hAlign = this.options.hAlign || I.colAligns[d], this.vAlign = this.options.vAlign || I.rowAligns[G], this.drawRight = d + this.colSpan == I.colWidths.length
    }
    draw(I, d) {
      if (I == "top") return this.drawTop(this.drawRight);
      if (I == "bottom") return this.drawBottom(this.drawRight);
      let G = DG.truncate(this.content, 10, this.truncate);
      if (!I) nC9(`${this.y}-${this.x}: ${this.rowSpan-I}x${this.colSpan} Cell ${G}`);
      let Z = Math.max(this.height - this.lines.length, 0),
        C;
      switch (this.vAlign) {
        case "center":
          C = Math.ceil(Z / 2);
          break;
        case "bottom":
          C = Z;
          break;
        default:
          C = 0
      }
      if (I < C || I >= C + this.lines.length) return this.drawEmpty(this.drawRight, d);
      let W = this.lines.length > this.height && I + 1 >= this.height;
      return this.drawLine(I - C, this.drawRight, W, d)
    }
    drawTop(I) {
      let d = [];
      if (this.cells) this.widths.forEach(function(G, Z) {
        d.push(this._topLeftChar(Z)), d.push(DG.repeat(this.chars[this.y == 0 ? "top" : "mid"], G))
      }, this);
      else d.push(this._topLeftChar(0)), d.push(DG.repeat(this.chars[this.y == 0 ? "top" : "mid"], this.width));
      if (I) d.push(this.chars[this.y == 0 ? "topRight" : "rightMid"]);
      return this.wrapWithStyleColors("border", d.join(""))
    }
    _topLeftChar(I) {
      let d = this.x + I,
        G;
      if (this.y == 0) G = d == 0 ? "topLeft" : I == 0 ? "topMid" : "top";
      else if (d == 0) G = "leftMid";
      else if (G = I == 0 ? "midMid" : "bottomMid", this.cells) {
        if (this.cells[this.y - 1][d] instanceof Zu.ColSpanCell) G = I == 0 ? "topMid" : "mid";
        if (I == 0) {
          let C = 1;
          while (this.cells[this.y][d - C] instanceof Zu.ColSpanCell) C++;
          if (this.cells[this.y][d - C] instanceof Zu.RowSpanCell) G = "leftMid"
        }
      }
      return this.chars[G]
    }
    wrapWithStyleColors(I, d) {
      if (this[I] && this[I].length) try {
        let G = eN2();
        for (let Z = this[I].length - 1; Z >= 0; Z--) G = G[this[I][Z]];
        return G(d)
      } catch (G) {
        return d
      } else return d
    }
    drawLine(I, d, G, Z) {
      let C = this.chars[this.x == 0 ? "left" : "middle"];
      if (this.x && Z && this.cells) {
        let _ = this.cells[this.y + Z][this.x - 1];
        while (_ instanceof xs) _ = this.cells[_.y][_.x - 1];
        if (!(_ instanceof cs)) C = this.chars.rightMid
      }
      let W = DG.repeat(" ", this.paddingLeft),
        w = d ? this.chars.right : "",
        B = DG.repeat(" ", this.paddingRight),
        A = this.lines[I],
        V = this.width - (this.paddingLeft + this.paddingRight);
      if (G) A += this.truncate || "…";
      let X = DG.truncate(A, V, this.truncate);
      return X = DG.pad(X, V, " ", this.hAlign), X = W + X + B, this.stylizeLine(C, X, w)
    }
    stylizeLine(I, d, G) {
      if (I = this.wrapWithStyleColors("border", I), G = this.wrapWithStyleColors("border", G), this.y === 0) d = this.wrapWithStyleColors("head", d);
      return I + d + G
    }
    drawBottom(I) {
      let d = this.chars[this.x == 0 ? "bottomLeft" : "bottomMid"],
        G = DG.repeat(this.chars.bottom, this.width),
        Z = I ? this.chars.bottomRight : "";
      return this.wrapWithStyleColors("border", d + G + Z)
    }
    drawEmpty(I, d) {
      let G = this.chars[this.x == 0 ? "left" : "middle"];
      if (this.x && d && this.cells) {
        let W = this.cells[this.y + d][this.x - 1];
        while (W instanceof xs) W = this.cells[W.y][W.x - 1];
        if (!(W instanceof cs)) G = this.chars.rightMid
      }
      let Z = I ? this.chars.right : "",
        C = DG.repeat(" ", this.width);
      return this.stylizeLine(G, C, Z)
    }
  }
  class xs {
    constructor() {}
    draw(I) {
      if (typeof I === "number") dz2(`${this.y}-${this.x}: 1x1 ColSpanCell`);
      return ""
    }
    init() {}
    mergeTableOptions() {}
  }
  class cs {
    constructor(I) {
      this.originalCell = I
    }
    init(I) {
      let d = this.y,
        G = this.originalCell.y;
      this.cellOffset = d - G, this.offset = rC9(I.rowHeights, G, this.cellOffset)
    }
    draw(I) {
      if (I == "top") return this.originalCell.draw(this.offset, this.cellOffset);
      if (I == "bottom") return this.originalCell.draw("bottom");
      return dz2(`${this.y}-${this.x}: 1x${this.colSpan} RowSpanCell for ${this.originalCell.content}`), this.originalCell.draw(this.offset + 1 + I)
    }
    mergeTableOptions() {}
  }

  function tN2(...I) {
    return I.filter((d) => d !== void 0 && d !== null).shift()
  }

  function MJ1(I, d, G, Z) {
    let C = G.split("-");
    if (C.length > 1) C[1] = C[1].charAt(0).toUpperCase() + C[1].substr(1), C = C.join(""), Z[C] = tN2(I[C], I[G], d[C], d[G]);
    else Z[G] = tN2(I[G], d[G])
  }

  function rC9(I, d, G) {
    let Z = I[d];
    for (let C = 1; C < G; C++) Z += 1 + I[d + C];
    return Z
  }

  function Iz2(I, d) {
    return I + d + 1
  }
  var aC9 = ["top", "top-mid", "top-left", "top-right", "bottom", "bottom-mid", "bottom-left", "bottom-right", "left", "left-mid", "mid", "mid-mid", "right", "right-mid", "middle"];
  ps.exports = Zu;
  ps.exports.ColSpanCell = xs;
  ps.exports.RowSpanCell = cs
})
// @from(Start 5427430, End 5432356)
Wz2 = Y((Pf3, Cz2) => {
  var {
    warn: sC9,
    debug: oC9
  } = js(), SJ1 = Gz2(), {
    ColSpanCell: eC9,
    RowSpanCell: tC9
  } = SJ1;
  (function() {
    function I(g, J) {
      if (g[J] > 0) return I(g, J + 1);
      return J
    }

    function d(g) {
      let J = {};
      g.forEach(function(K, Q) {
        let E = 0;
        K.forEach(function(S) {
          S.y = Q, S.x = Q ? I(J, E) : E;
          let P = S.rowSpan || 1,
            $ = S.colSpan || 1;
          if (P > 1)
            for (let h = 0; h < $; h++) J[S.x + h] = P;
          E = S.x + $
        }), Object.keys(J).forEach((S) => {
          if (J[S]--, J[S] < 1) delete J[S]
        })
      })
    }

    function G(g) {
      let J = 0;
      return g.forEach(function(K) {
        K.forEach(function(Q) {
          J = Math.max(J, Q.x + (Q.colSpan || 1))
        })
      }), J
    }

    function Z(g) {
      return g.length
    }

    function C(g, J) {
      let K = g.y,
        Q = g.y - 1 + (g.rowSpan || 1),
        E = J.y,
        S = J.y - 1 + (J.rowSpan || 1),
        P = !(K > S || E > Q),
        $ = g.x,
        h = g.x - 1 + (g.colSpan || 1),
        O = J.x,
        T = J.x - 1 + (J.colSpan || 1),
        V1 = !($ > T || O > h);
      return P && V1
    }

    function W(g, J, K) {
      let Q = Math.min(g.length - 1, K),
        E = {
          x: J,
          y: K
        };
      for (let S = 0; S <= Q; S++) {
        let P = g[S];
        for (let $ = 0; $ < P.length; $++)
          if (C(E, P[$])) return !0
      }
      return !1
    }

    function w(g, J, K, Q) {
      for (let E = K; E < Q; E++)
        if (W(g, E, J)) return !1;
      return !0
    }

    function B(g) {
      g.forEach(function(J, K) {
        J.forEach(function(Q) {
          for (let E = 1; E < Q.rowSpan; E++) {
            let S = new tC9(Q);
            S.x = Q.x, S.y = Q.y + E, S.colSpan = Q.colSpan, V(S, g[K + E])
          }
        })
      })
    }

    function A(g) {
      for (let J = g.length - 1; J >= 0; J--) {
        let K = g[J];
        for (let Q = 0; Q < K.length; Q++) {
          let E = K[Q];
          for (let S = 1; S < E.colSpan; S++) {
            let P = new eC9;
            P.x = E.x + S, P.y = E.y, K.splice(Q + 1, 0, P)
          }
        }
      }
    }

    function V(g, J) {
      let K = 0;
      while (K < J.length && J[K].x < g.x) K++;
      J.splice(K, 0, g)
    }

    function X(g) {
      let J = Z(g),
        K = G(g);
      oC9(`Max rows: ${J}; Max cols: ${K}`);
      for (let Q = 0; Q < J; Q++)
        for (let E = 0; E < K; E++)
          if (!W(g, E, Q)) {
            let S = {
              x: E,
              y: Q,
              colSpan: 1,
              rowSpan: 1
            };
            E++;
            while (E < K && !W(g, E, Q)) S.colSpan++, E++;
            let P = Q + 1;
            while (P < J && w(g, P, S.x, S.x + S.colSpan)) S.rowSpan++, P++;
            let $ = new SJ1(S);
            $.x = S.x, $.y = S.y, sC9(`Missing cell at ${$.y}-${$.x}.`), V($, g[Q])
          }
    }

    function _(g) {
      return g.map(function(J) {
        if (!Array.isArray(J)) {
          let K = Object.keys(J)[0];
          if (J = J[K], Array.isArray(J)) J = J.slice(), J.unshift(K);
          else J = [K, J]
        }
        return J.map(function(K) {
          return new SJ1(K)
        })
      })
    }

    function F(g) {
      let J = _(g);
      return d(J), X(J), B(J), A(J), J
    }
    Cz2.exports = {
      makeTableLayout: F,
      layoutTable: d,
      addRowSpanCells: B,
      maxWidth: G,
      fillInTable: X,
      computeWidths: Zz2("colSpan", "desiredWidth", "x", 1),
      computeHeights: Zz2("rowSpan", "desiredHeight", "y", 1)
    }
  })();

  function Zz2(I, d, G, Z) {
    return function(C, W) {
      let w = [],
        B = [],
        A = {};
      W.forEach(function(V) {
        V.forEach(function(X) {
          if ((X[I] || 1) > 1) B.push(X);
          else w[X[G]] = Math.max(w[X[G]] || 0, X[d] || 0, Z)
        })
      }), C.forEach(function(V, X) {
        if (typeof V === "number") w[X] = V
      });
      for (let V = B.length - 1; V >= 0; V--) {
        let X = B[V],
          _ = X[I],
          F = X[G],
          g = w[F],
          J = typeof C[F] === "number" ? 0 : 1;
        if (typeof g === "number") {
          for (let K = 1; K < _; K++)
            if (g += 1 + w[F + K], typeof C[F + K] !== "number") J++
        } else if (g = d === "desiredWidth" ? X.desiredWidth - 1 : 1, !A[F] || A[F] < g) A[F] = g;
        if (X[d] > g) {
          let K = 0;
          while (J > 0 && X[d] > g) {
            if (typeof C[F + K] !== "number") {
              let Q = Math.round((X[d] - g) / J);
              g += Q, w[F + K] += Q, J--
            }
            K++
          }
        }
      }
      Object.assign(C, w, A);
      for (let V = 0; V < C.length; V++) C[V] = Math.max(Z, C[V] || 0)
    }
  }
})
// @from(Start 5432362, End 5434529)
Bz2 = Y(($f3, wz2) => {
  var DX = js(),
    IW9 = vJ1(),
    LJ1 = Wz2();
  class PJ1 extends Array {
    constructor(I) {
      super();
      let d = IW9.mergeOptions(I);
      if (Object.defineProperty(this, "options", {
          value: d,
          enumerable: d.debug
        }), d.debug) {
        switch (typeof d.debug) {
          case "boolean":
            DX.setDebugLevel(DX.WARN);
            break;
          case "number":
            DX.setDebugLevel(d.debug);
            break;
          case "string":
            DX.setDebugLevel(parseInt(d.debug, 10));
            break;
          default:
            DX.setDebugLevel(DX.WARN), DX.warn(`Debug option is expected to be boolean, number, or string. Received a ${typeof d.debug}`)
        }
        Object.defineProperty(this, "messages", {
          get() {
            return DX.debugMessages()
          }
        })
      }
    }
    toString() {
      let I = this,
        d = this.options.head && this.options.head.length;
      if (d) {
        if (I = [this.options.head], this.length) I.push.apply(I, this)
      } else this.options.style.head = [];
      let G = LJ1.makeTableLayout(I);
      G.forEach(function(C) {
        C.forEach(function(W) {
          W.mergeTableOptions(this.options, G)
        }, this)
      }, this), LJ1.computeWidths(this.options.colWidths, G), LJ1.computeHeights(this.options.rowHeights, G), G.forEach(function(C) {
        C.forEach(function(W) {
          W.init(this.options)
        }, this)
      }, this);
      let Z = [];
      for (let C = 0; C < G.length; C++) {
        let W = G[C],
          w = this.options.rowHeights[C];
        if (C === 0 || !this.options.style.compact || C == 1 && d) yJ1(W, "top", Z);
        for (let B = 0; B < w; B++) yJ1(W, B, Z);
        if (C + 1 == G.length) yJ1(W, "bottom", Z)
      }
      return Z.join(`
`)
    }
    get width() {
      return this.toString().split(`
`)[0].length
    }
  }
  PJ1.reset = () => DX.reset();

  function yJ1(I, d, G) {
    let Z = [];
    I.forEach(function(W) {
      Z.push(W.draw(d))
    });
    let C = Z.join("");
    if (C.length) G.push(C)
  }
  wz2.exports = PJ1
})
// @from(Start 5434535, End 5435041)
ru = Y((oA9) => {
  class ZN1 extends Error {
    constructor(I, d, G) {
      super(G);
      Error.captureStackTrace(this, this.constructor), this.name = this.constructor.name, this.code = d, this.exitCode = I, this.nestedError = void 0
    }
  }
  class Fq2 extends ZN1 {
    constructor(I) {
      super(1, "commander.invalidArgument", I);
      Error.captureStackTrace(this, this.constructor), this.name = this.constructor.name
    }
  }
  oA9.CommanderError = ZN1;
  oA9.InvalidArgumentError = Fq2
})
// @from(Start 5435047, End 5436695)
eo = Y((GV9) => {
  var {
    InvalidArgumentError: IV9
  } = ru();
  class gq2 {
    constructor(I, d) {
      switch (this.description = d || "", this.variadic = !1, this.parseArg = void 0, this.defaultValue = void 0, this.defaultValueDescription = void 0, this.argChoices = void 0, I[0]) {
        case "<":
          this.required = !0, this._name = I.slice(1, -1);
          break;
        case "[":
          this.required = !1, this._name = I.slice(1, -1);
          break;
        default:
          this.required = !0, this._name = I;
          break
      }
      if (this._name.length > 3 && this._name.slice(-3) === "...") this.variadic = !0, this._name = this._name.slice(0, -3)
    }
    name() {
      return this._name
    }
    _concatValue(I, d) {
      if (d === this.defaultValue || !Array.isArray(d)) return [I];
      return d.concat(I)
    }
    default (I, d) {
      return this.defaultValue = I, this.defaultValueDescription = d, this
    }
    argParser(I) {
      return this.parseArg = I, this
    }
    choices(I) {
      return this.argChoices = I.slice(), this.parseArg = (d, G) => {
        if (!this.argChoices.includes(d)) throw new IV9(`Allowed choices are ${this.argChoices.join(", ")}.`);
        if (this.variadic) return this._concatValue(d, G);
        return d
      }, this
    }
    argRequired() {
      return this.required = !0, this
    }
    argOptional() {
      return this.required = !1, this
    }
  }

  function dV9(I) {
    let d = I.name() + (I.variadic === !0 ? "..." : "");
    return I.required ? "<" + d + ">" : "[" + d + "]"
  }
  GV9.Argument = gq2;
  GV9.humanReadableArgName = dV9
})