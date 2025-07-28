
// @from(Start 735, End 754)
IU2 = Object.create
// @from(Start 850, End 887)
ZU2 = Object.prototype.hasOwnProperty
// @from(Start 893, End 1172)
J1 = (I, d, G) => {
  G = I != null ? IU2(dU2(I)) : {};
  let Z = d || !I || !I.__esModule ? ie(G, "default", {
    value: I,
    enumerable: !0
  }) : G;
  for (let C of GU2(I))
    if (!ZU2.call(Z, C)) ie(Z, C, {
      get: () => I[C],
      enumerable: !0
    });
  return Z
}
// @from(Start 1178, End 1253)
Y = (I, d) => () => (d || I((d = {
  exports: {}
}).exports, d), d.exports)
// @from(Start 1259, End 1400)
Kv = (I, d) => {
  for (var G in d) ie(I, G, {
    get: d[G],
    enumerable: !0,
    configurable: !0,
    set: (Z) => d[G] = () => Z
  })
}
// @from(Start 1406, End 1451)
Gw = (I, d) => () => (I && (d = I(I = 0)), d)
// @from(Start 1457, End 1482)
B1 = CU2(import.meta.url)
// @from(Start 1488, End 3526)
xG = Y((eN1) => {
  Object.defineProperty(eN1, "__esModule", {
    value: !0
  });
  var aN1 = Object.prototype.toString;

  function WU2(I) {
    switch (aN1.call(I)) {
      case "[object Error]":
      case "[object Exception]":
      case "[object DOMException]":
        return !0;
      default:
        return IO(I, Error)
    }
  }

  function GN(I, d) {
    return aN1.call(I) === `[object ${d}]`
  }

  function wU2(I) {
    return GN(I, "ErrorEvent")
  }

  function BU2(I) {
    return GN(I, "DOMError")
  }

  function AU2(I) {
    return GN(I, "DOMException")
  }

  function VU2(I) {
    return GN(I, "String")
  }

  function sN1(I) {
    return typeof I === "object" && I !== null && "__sentry_template_string__" in I && "__sentry_template_values__" in I
  }

  function XU2(I) {
    return I === null || sN1(I) || typeof I !== "object" && typeof I !== "function"
  }

  function oN1(I) {
    return GN(I, "Object")
  }

  function YU2(I) {
    return typeof Event !== "undefined" && IO(I, Event)
  }

  function _U2(I) {
    return typeof Element !== "undefined" && IO(I, Element)
  }

  function DU2(I) {
    return GN(I, "RegExp")
  }

  function HU2(I) {
    return Boolean(I && I.then && typeof I.then === "function")
  }

  function FU2(I) {
    return oN1(I) && "nativeEvent" in I && "preventDefault" in I && "stopPropagation" in I
  }

  function gU2(I) {
    return typeof I === "number" && I !== I
  }

  function IO(I, d) {
    try {
      return I instanceof d
    } catch (G) {
      return !1
    }
  }

  function JU2(I) {
    return !!(typeof I === "object" && I !== null && (I.__isVue || I._isVue))
  }
  eN1.isDOMError = BU2;
  eN1.isDOMException = AU2;
  eN1.isElement = _U2;
  eN1.isError = WU2;
  eN1.isErrorEvent = wU2;
  eN1.isEvent = YU2;
  eN1.isInstanceOf = IO;
  eN1.isNaN = gU2;
  eN1.isParameterizedString = sN1;
  eN1.isPlainObject = oN1;
  eN1.isPrimitive = XU2;
  eN1.isRegExp = DU2;
  eN1.isString = VU2;
  eN1.isSyntheticEvent = FU2;
  eN1.isThenable = HU2;
  eN1.isVueViewModel = JU2
})
// @from(Start 3532, End 4889)
Nv = Y((Iz1) => {
  Object.defineProperty(Iz1, "__esModule", {
    value: !0
  });
  var dO = xG();

  function uU2(I, d = 0) {
    if (typeof I !== "string" || d === 0) return I;
    return I.length <= d ? I : `${I.slice(0,d)}...`
  }

  function TU2(I, d) {
    let G = I,
      Z = G.length;
    if (Z <= 150) return G;
    if (d > Z) d = Z;
    let C = Math.max(d - 60, 0);
    if (C < 5) C = 0;
    let W = Math.min(C + 140, Z);
    if (W > Z - 5) W = Z;
    if (W === Z) C = Math.max(W - 140, 0);
    if (G = G.slice(C, W), C > 0) G = `'{snip} ${G}`;
    if (W < Z) G += " {snip}";
    return G
  }

  function OU2(I, d) {
    if (!Array.isArray(I)) return "";
    let G = [];
    for (let Z = 0; Z < I.length; Z++) {
      let C = I[Z];
      try {
        if (dO.isVueViewModel(C)) G.push("[VueViewModel]");
        else G.push(String(C))
      } catch (W) {
        G.push("[value cannot be serialized]")
      }
    }
    return G.join(d)
  }

  function tN1(I, d, G = !1) {
    if (!dO.isString(I)) return !1;
    if (dO.isRegExp(d)) return d.test(I);
    if (dO.isString(d)) return G ? I === d : I.includes(d);
    return !1
  }

  function mU2(I, d = [], G = !1) {
    return d.some((Z) => tN1(I, Z, G))
  }
  Iz1.isMatchingPattern = tN1;
  Iz1.safeJoin = OU2;
  Iz1.snipLine = TU2;
  Iz1.stringMatchesSomePattern = mU2;
  Iz1.truncate = uU2
})
// @from(Start 4895, End 6602)
Cz1 = Y((Zz1) => {
  Object.defineProperty(Zz1, "__esModule", {
    value: !0
  });
  var ne = xG(),
    xU2 = Nv();

  function cU2(I, d, G = 250, Z, C, W, w) {
    if (!W.exception || !W.exception.values || !w || !ne.isInstanceOf(w.originalException, Error)) return;
    let B = W.exception.values.length > 0 ? W.exception.values[W.exception.values.length - 1] : void 0;
    if (B) W.exception.values = pU2(re(I, d, C, w.originalException, Z, W.exception.values, B, 0), G)
  }

  function re(I, d, G, Z, C, W, w, B) {
    if (W.length >= G + 1) return W;
    let A = [...W];
    if (ne.isInstanceOf(Z[C], Error)) {
      dz1(w, B);
      let V = I(d, Z[C]),
        X = A.length;
      Gz1(V, C, X, B), A = re(I, d, G, Z[C], C, [V, ...A], V, X)
    }
    if (Array.isArray(Z.errors)) Z.errors.forEach((V, X) => {
      if (ne.isInstanceOf(V, Error)) {
        dz1(w, B);
        let _ = I(d, V),
          F = A.length;
        Gz1(_, `errors[${X}]`, F, B), A = re(I, d, G, V, C, [_, ...A], _, F)
      }
    });
    return A
  }

  function dz1(I, d) {
    I.mechanism = I.mechanism || {
      type: "generic",
      handled: !0
    }, I.mechanism = {
      ...I.mechanism,
      ...I.type === "AggregateError" && {
        is_exception_group: !0
      },
      exception_id: d
    }
  }

  function Gz1(I, d, G, Z) {
    I.mechanism = I.mechanism || {
      type: "generic",
      handled: !0
    }, I.mechanism = {
      ...I.mechanism,
      type: "chained",
      source: d,
      exception_id: G,
      parent_id: Z
    }
  }

  function pU2(I, d) {
    return I.map((G) => {
      if (G.value) G.value = xU2.truncate(G.value, d);
      return G
    })
  }
  Zz1.applyAggregateErrorsToEvent = cU2
})
// @from(Start 6608, End 7240)
K7 = Y((Wz1) => {
  Object.defineProperty(Wz1, "__esModule", {
    value: !0
  });

  function GO(I) {
    return I && I.Math == Math ? I : void 0
  }
  var ae = typeof globalThis == "object" && GO(globalThis) || typeof window == "object" && GO(window) || typeof self == "object" && GO(self) || typeof global == "object" && GO(global) || function() {
    return this
  }() || {};

  function nU2() {
    return ae
  }

  function rU2(I, d, G) {
    let Z = G || ae,
      C = Z.__SENTRY__ = Z.__SENTRY__ || {};
    return C[I] || (C[I] = d())
  }
  Wz1.GLOBAL_OBJ = ae;
  Wz1.getGlobalObject = nU2;
  Wz1.getGlobalSingleton = rU2
})
// @from(Start 7246, End 9502)
se = Y((wz1) => {
  Object.defineProperty(wz1, "__esModule", {
    value: !0
  });
  var eU2 = xG(),
    tU2 = K7(),
    ZN = tU2.getGlobalObject(),
    Iv2 = 80;

  function dv2(I, d = {}) {
    if (!I) return "<unknown>";
    try {
      let G = I,
        Z = 5,
        C = [],
        W = 0,
        w = 0,
        B = " > ",
        A = B.length,
        V, X = Array.isArray(d) ? d : d.keyAttrs,
        _ = !Array.isArray(d) && d.maxStringLength || Iv2;
      while (G && W++ < Z) {
        if (V = Gv2(G, X), V === "html" || W > 1 && w + C.length * A + V.length >= _) break;
        C.push(V), w += V.length, G = G.parentNode
      }
      return C.reverse().join(B)
    } catch (G) {
      return "<unknown>"
    }
  }

  function Gv2(I, d) {
    let G = I,
      Z = [],
      C, W, w, B, A;
    if (!G || !G.tagName) return "";
    if (ZN.HTMLElement) {
      if (G instanceof HTMLElement && G.dataset && G.dataset.sentryComponent) return G.dataset.sentryComponent
    }
    Z.push(G.tagName.toLowerCase());
    let V = d && d.length ? d.filter((_) => G.getAttribute(_)).map((_) => [_, G.getAttribute(_)]) : null;
    if (V && V.length) V.forEach((_) => {
      Z.push(`[${_[0]}="${_[1]}"]`)
    });
    else {
      if (G.id) Z.push(`#${G.id}`);
      if (C = G.className, C && eU2.isString(C)) {
        W = C.split(/\s+/);
        for (A = 0; A < W.length; A++) Z.push(`.${W[A]}`)
      }
    }
    let X = ["aria-label", "type", "name", "title", "alt"];
    for (A = 0; A < X.length; A++)
      if (w = X[A], B = G.getAttribute(w), B) Z.push(`[${w}="${B}"]`);
    return Z.join("")
  }

  function Zv2() {
    try {
      return ZN.document.location.href
    } catch (I) {
      return ""
    }
  }

  function Cv2(I) {
    if (ZN.document && ZN.document.querySelector) return ZN.document.querySelector(I);
    return null
  }

  function Wv2(I) {
    if (!ZN.HTMLElement) return null;
    let d = I,
      G = 5;
    for (let Z = 0; Z < G; Z++) {
      if (!d) return null;
      if (d instanceof HTMLElement && d.dataset.sentryComponent) return d.dataset.sentryComponent;
      d = d.parentNode
    }
    return null
  }
  wz1.getComponentName = Wv2;
  wz1.getDomElement = Cv2;
  wz1.getLocationHref = Zv2;
  wz1.htmlTreeAsString = dv2
})
// @from(Start 9508, End 9690)
Zw = Y((Bz1) => {
  Object.defineProperty(Bz1, "__esModule", {
    value: !0
  });
  var Xv2 = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
  Bz1.DEBUG_BUILD = Xv2
})
// @from(Start 9696, End 10858)
DC = Y((Vz1) => {
  Object.defineProperty(Vz1, "__esModule", {
    value: !0
  });
  var _v2 = Zw(),
    oe = K7(),
    Dv2 = "Sentry Logger ",
    ee = ["debug", "info", "warn", "error", "log", "assert", "trace"],
    te = {};

  function Az1(I) {
    if (!("console" in oe.GLOBAL_OBJ)) return I();
    let d = oe.GLOBAL_OBJ.console,
      G = {},
      Z = Object.keys(te);
    Z.forEach((C) => {
      let W = te[C];
      G[C] = d[C], d[C] = W
    });
    try {
      return I()
    } finally {
      Z.forEach((C) => {
        d[C] = G[C]
      })
    }
  }

  function Hv2() {
    let I = !1,
      d = {
        enable: () => {
          I = !0
        },
        disable: () => {
          I = !1
        },
        isEnabled: () => I
      };
    if (_v2.DEBUG_BUILD) ee.forEach((G) => {
      d[G] = (...Z) => {
        if (I) Az1(() => {
          oe.GLOBAL_OBJ.console[G](`${Dv2}[${G}]:`, ...Z)
        })
      }
    });
    else ee.forEach((G) => {
      d[G] = () => {
        return
      }
    });
    return d
  }
  var Fv2 = Hv2();
  Vz1.CONSOLE_LEVELS = ee;
  Vz1.consoleSandbox = Az1;
  Vz1.logger = Fv2;
  Vz1.originalConsoleMethods = te
})
// @from(Start 10864, End 12984)
It = Y((_z1) => {
  Object.defineProperty(_z1, "__esModule", {
    value: !0
  });
  var zv2 = Zw(),
    zv = DC(),
    Qv2 = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

  function fv2(I) {
    return I === "http" || I === "https"
  }

  function qv2(I, d = !1) {
    let {
      host: G,
      path: Z,
      pass: C,
      port: W,
      projectId: w,
      protocol: B,
      publicKey: A
    } = I;
    return `${B}://${A}${d&&C?`:${C}`:""}@${G}${W?`:${W}`:""}/${Z?`${Z}/`:Z}${w}`
  }

  function Xz1(I) {
    let d = Qv2.exec(I);
    if (!d) {
      zv.consoleSandbox(() => {
        console.error(`Invalid Sentry Dsn: ${I}`)
      });
      return
    }
    let [G, Z, C = "", W, w = "", B] = d.slice(1), A = "", V = B, X = V.split("/");
    if (X.length > 1) A = X.slice(0, -1).join("/"), V = X.pop();
    if (V) {
      let _ = V.match(/^\d+/);
      if (_) V = _[0]
    }
    return Yz1({
      host: W,
      pass: C,
      path: A,
      projectId: V,
      port: w,
      protocol: G,
      publicKey: Z
    })
  }

  function Yz1(I) {
    return {
      protocol: I.protocol,
      publicKey: I.publicKey || "",
      pass: I.pass || "",
      host: I.host,
      port: I.port || "",
      path: I.path || "",
      projectId: I.projectId
    }
  }

  function Rv2(I) {
    if (!zv2.DEBUG_BUILD) return !0;
    let {
      port: d,
      projectId: G,
      protocol: Z
    } = I;
    if (["protocol", "publicKey", "host", "projectId"].find((w) => {
        if (!I[w]) return zv.logger.error(`Invalid Sentry Dsn: ${w} missing`), !0;
        return !1
      })) return !1;
    if (!G.match(/^\d+$/)) return zv.logger.error(`Invalid Sentry Dsn: Invalid projectId ${G}`), !1;
    if (!fv2(Z)) return zv.logger.error(`Invalid Sentry Dsn: Invalid protocol ${Z}`), !1;
    if (d && isNaN(parseInt(d, 10))) return zv.logger.error(`Invalid Sentry Dsn: Invalid port ${d}`), !1;
    return !0
  }

  function Uv2(I) {
    let d = typeof I === "string" ? Xz1(I) : Yz1(I);
    if (!d || !Rv2(d)) return;
    return d
  }
  _z1.dsnFromString = Xz1;
  _z1.dsnToString = qv2;
  _z1.makeDsn = Uv2
})
// @from(Start 12990, End 13330)
dt = Y((Hz1) => {
  Object.defineProperty(Hz1, "__esModule", {
    value: !0
  });
  class Dz1 extends Error {
    constructor(I, d = "warn") {
      super(I);
      this.message = I, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = d
    }
  }
  Hz1.SentryError = Dz1
})
// @from(Start 13336, End 16882)
cG = Y((Qz1) => {
  Object.defineProperty(Qz1, "__esModule", {
    value: !0
  });
  var Lv2 = se(),
    yv2 = Zw(),
    CN = xG(),
    Pv2 = DC(),
    Fz1 = Nv();

  function $v2(I, d, G) {
    if (!(d in I)) return;
    let Z = I[d],
      C = G(Z);
    if (typeof C === "function") Nz1(C, Z);
    I[d] = C
  }

  function Kz1(I, d, G) {
    try {
      Object.defineProperty(I, d, {
        value: G,
        writable: !0,
        configurable: !0
      })
    } catch (Z) {
      yv2.DEBUG_BUILD && Pv2.logger.log(`Failed to add non-enumerable property "${d}" to object`, I)
    }
  }

  function Nz1(I, d) {
    try {
      let G = d.prototype || {};
      I.prototype = d.prototype = G, Kz1(I, "__sentry_original__", d)
    } catch (G) {}
  }

  function uv2(I) {
    return I.__sentry_original__
  }

  function Tv2(I) {
    return Object.keys(I).map((d) => `${encodeURIComponent(d)}=${encodeURIComponent(I[d])}`).join("&")
  }

  function zz1(I) {
    if (CN.isError(I)) return {
      message: I.message,
      name: I.name,
      stack: I.stack,
      ...Jz1(I)
    };
    else if (CN.isEvent(I)) {
      let d = {
        type: I.type,
        target: gz1(I.target),
        currentTarget: gz1(I.currentTarget),
        ...Jz1(I)
      };
      if (typeof CustomEvent !== "undefined" && CN.isInstanceOf(I, CustomEvent)) d.detail = I.detail;
      return d
    } else return I
  }

  function gz1(I) {
    try {
      return CN.isElement(I) ? Lv2.htmlTreeAsString(I) : Object.prototype.toString.call(I)
    } catch (d) {
      return "<unknown>"
    }
  }

  function Jz1(I) {
    if (typeof I === "object" && I !== null) {
      let d = {};
      for (let G in I)
        if (Object.prototype.hasOwnProperty.call(I, G)) d[G] = I[G];
      return d
    } else return {}
  }

  function Ov2(I, d = 40) {
    let G = Object.keys(zz1(I));
    if (G.sort(), !G.length) return "[object has no keys]";
    if (G[0].length >= d) return Fz1.truncate(G[0], d);
    for (let Z = G.length; Z > 0; Z--) {
      let C = G.slice(0, Z).join(", ");
      if (C.length > d) continue;
      if (Z === G.length) return C;
      return Fz1.truncate(C, d)
    }
    return ""
  }

  function mv2(I) {
    return Gt(I, new Map)
  }

  function Gt(I, d) {
    if (lv2(I)) {
      let G = d.get(I);
      if (G !== void 0) return G;
      let Z = {};
      d.set(I, Z);
      for (let C of Object.keys(I))
        if (typeof I[C] !== "undefined") Z[C] = Gt(I[C], d);
      return Z
    }
    if (Array.isArray(I)) {
      let G = d.get(I);
      if (G !== void 0) return G;
      let Z = [];
      return d.set(I, Z), I.forEach((C) => {
        Z.push(Gt(C, d))
      }), Z
    }
    return I
  }

  function lv2(I) {
    if (!CN.isPlainObject(I)) return !1;
    try {
      let d = Object.getPrototypeOf(I).constructor.name;
      return !d || d === "Object"
    } catch (d) {
      return !0
    }
  }

  function bv2(I) {
    let d;
    switch (!0) {
      case (I === void 0 || I === null):
        d = new String(I);
        break;
      case (typeof I === "symbol" || typeof I === "bigint"):
        d = Object(I);
        break;
      case CN.isPrimitive(I):
        d = new I.constructor(I);
        break;
      default:
        d = I;
        break
    }
    return d
  }
  Qz1.addNonEnumerableProperty = Kz1;
  Qz1.convertToPlainObject = zz1;
  Qz1.dropUndefinedKeys = mv2;
  Qz1.extractExceptionKeysForMessage = Ov2;
  Qz1.fill = $v2;
  Qz1.getOriginalFunction = uv2;
  Qz1.markFunctionWrapped = Nz1;
  Qz1.objectify = bv2;
  Qz1.urlEncode = Tv2
})
// @from(Start 16888, End 18470)
ZO = Y((qz1) => {
  Object.defineProperty(qz1, "__esModule", {
    value: !0
  });

  function fz1(I, d = !1) {
    return !(d || I && !I.startsWith("/") && !I.match(/^[A-Z]:/) && !I.startsWith(".") && !I.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//)) && I !== void 0 && !I.includes("node_modules/")
  }

  function av2(I) {
    let d = /^\s*[-]{4,}$/,
      G = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
    return (Z) => {
      let C = Z.match(G);
      if (C) {
        let W, w, B, A, V;
        if (C[1]) {
          B = C[1];
          let F = B.lastIndexOf(".");
          if (B[F - 1] === ".") F--;
          if (F > 0) {
            W = B.slice(0, F), w = B.slice(F + 1);
            let g = W.indexOf(".Module");
            if (g > 0) B = B.slice(g + 1), W = W.slice(0, g)
          }
          A = void 0
        }
        if (w) A = W, V = w;
        if (w === "<anonymous>") V = void 0, B = void 0;
        if (B === void 0) V = V || "<anonymous>", B = A ? `${A}.${V}` : V;
        let X = C[2] && C[2].startsWith("file://") ? C[2].slice(7) : C[2],
          _ = C[5] === "native";
        if (X && X.match(/\/[A-Z]:/)) X = X.slice(1);
        if (!X && C[5] && !_) X = C[5];
        return {
          filename: X,
          module: I ? I(X) : void 0,
          function: B,
          lineno: parseInt(C[3], 10) || void 0,
          colno: parseInt(C[4], 10) || void 0,
          in_app: fz1(X, _)
        }
      }
      if (Z.match(d)) return {
        filename: Z
      };
      return
    }
  }
  qz1.filenameIsInApp = fz1;
  qz1.node = av2
})
// @from(Start 18476, End 20217)
CO = Y((Lz1) => {
  Object.defineProperty(Lz1, "__esModule", {
    value: !0
  });
  var vz1 = ZO(),
    Ez1 = 50,
    Rz1 = /\(error: (.*)\)/,
    Uz1 = /captureMessage|captureException/;

  function Mz1(...I) {
    let d = I.sort((G, Z) => G[0] - Z[0]).map((G) => G[1]);
    return (G, Z = 0) => {
      let C = [],
        W = G.split(`
`);
      for (let w = Z; w < W.length; w++) {
        let B = W[w];
        if (B.length > 1024) continue;
        let A = Rz1.test(B) ? B.replace(Rz1, "$1") : B;
        if (A.match(/\S*Error: /)) continue;
        for (let V of d) {
          let X = V(A);
          if (X) {
            C.push(X);
            break
          }
        }
        if (C.length >= Ez1) break
      }
      return Sz1(C)
    }
  }

  function ev2(I) {
    if (Array.isArray(I)) return Mz1(...I);
    return I
  }

  function Sz1(I) {
    if (!I.length) return [];
    let d = Array.from(I);
    if (/sentryWrapped/.test(d[d.length - 1].function || "")) d.pop();
    if (d.reverse(), Uz1.test(d[d.length - 1].function || "")) {
      if (d.pop(), Uz1.test(d[d.length - 1].function || "")) d.pop()
    }
    return d.slice(0, Ez1).map((G) => ({
      ...G,
      filename: G.filename || d[d.length - 1].filename,
      function: G.function || "?"
    }))
  }
  var Zt = "<anonymous>";

  function tv2(I) {
    try {
      if (!I || typeof I !== "function") return Zt;
      return I.name || Zt
    } catch (d) {
      return Zt
    }
  }

  function IE2(I) {
    return [90, vz1.node(I)]
  }
  Lz1.filenameIsInApp = vz1.filenameIsInApp;
  Lz1.createStackParser = Mz1;
  Lz1.getFunctionName = tv2;
  Lz1.nodeStackLineParser = IE2;
  Lz1.stackParserFromStackParserOptions = ev2;
  Lz1.stripSentryFramesAndReverse = Sz1
})
// @from(Start 20223, End 21006)
zA = Y((Pz1) => {
  Object.defineProperty(Pz1, "__esModule", {
    value: !0
  });
  var BE2 = Zw(),
    AE2 = DC(),
    VE2 = CO(),
    WN = {},
    yz1 = {};

  function XE2(I, d) {
    WN[I] = WN[I] || [], WN[I].push(d)
  }

  function YE2() {
    Object.keys(WN).forEach((I) => {
      WN[I] = void 0
    })
  }

  function _E2(I, d) {
    if (!yz1[I]) d(), yz1[I] = !0
  }

  function DE2(I, d) {
    let G = I && WN[I];
    if (!G) return;
    for (let Z of G) try {
      Z(d)
    } catch (C) {
      BE2.DEBUG_BUILD && AE2.logger.error(`Error while triggering instrumentation handler.
Type: ${I}
Name: ${VE2.getFunctionName(Z)}
Error:`, C)
    }
  }
  Pz1.addHandler = XE2;
  Pz1.maybeInstrument = _E2;
  Pz1.resetInstrumentationHandlers = YE2;
  Pz1.triggerHandlers = DE2
})
// @from(Start 21012, End 21851)
wt = Y(($z1) => {
  Object.defineProperty($z1, "__esModule", {
    value: !0
  });
  var Ct = DC(),
    KE2 = cG(),
    WO = K7(),
    Wt = zA();

  function NE2(I) {
    Wt.addHandler("console", I), Wt.maybeInstrument("console", zE2)
  }

  function zE2() {
    if (!("console" in WO.GLOBAL_OBJ)) return;
    Ct.CONSOLE_LEVELS.forEach(function(I) {
      if (!(I in WO.GLOBAL_OBJ.console)) return;
      KE2.fill(WO.GLOBAL_OBJ.console, I, function(d) {
        return Ct.originalConsoleMethods[I] = d,
          function(...G) {
            let Z = {
              args: G,
              level: I
            };
            Wt.triggerHandlers("console", Z);
            let C = Ct.originalConsoleMethods[I];
            C && C.apply(WO.GLOBAL_OBJ.console, G)
          }
      })
    })
  }
  $z1.addConsoleInstrumentationHandler = NE2
})
// @from(Start 21857, End 24800)
Qv = Y((Tz1) => {
  Object.defineProperty(Tz1, "__esModule", {
    value: !0
  });
  var fE2 = cG(),
    Bt = Nv(),
    qE2 = K7();

  function RE2() {
    let I = qE2.GLOBAL_OBJ,
      d = I.crypto || I.msCrypto,
      G = () => Math.random() * 16;
    try {
      if (d && d.randomUUID) return d.randomUUID().replace(/-/g, "");
      if (d && d.getRandomValues) G = () => {
        let Z = new Uint8Array(1);
        return d.getRandomValues(Z), Z[0]
      }
    } catch (Z) {}
    return ([1e7] + 1000 + 4000 + 8000 + 100000000000).replace(/[018]/g, (Z) => (Z ^ (G() & 15) >> Z / 4).toString(16))
  }

  function uz1(I) {
    return I.exception && I.exception.values ? I.exception.values[0] : void 0
  }

  function UE2(I) {
    let {
      message: d,
      event_id: G
    } = I;
    if (d) return d;
    let Z = uz1(I);
    if (Z) {
      if (Z.type && Z.value) return `${Z.type}: ${Z.value}`;
      return Z.type || Z.value || G || "<unknown>"
    }
    return G || "<unknown>"
  }

  function vE2(I, d, G) {
    let Z = I.exception = I.exception || {},
      C = Z.values = Z.values || [],
      W = C[0] = C[0] || {};
    if (!W.value) W.value = d || "";
    if (!W.type) W.type = G || "Error"
  }

  function EE2(I, d) {
    let G = uz1(I);
    if (!G) return;
    let Z = {
        type: "generic",
        handled: !0
      },
      C = G.mechanism;
    if (G.mechanism = {
        ...Z,
        ...C,
        ...d
      }, d && "data" in d) {
      let W = {
        ...C && C.data,
        ...d.data
      };
      G.mechanism.data = W
    }
  }
  var ME2 = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

  function SE2(I) {
    let d = I.match(ME2) || [],
      G = parseInt(d[1], 10),
      Z = parseInt(d[2], 10),
      C = parseInt(d[3], 10);
    return {
      buildmetadata: d[5],
      major: isNaN(G) ? void 0 : G,
      minor: isNaN(Z) ? void 0 : Z,
      patch: isNaN(C) ? void 0 : C,
      prerelease: d[4]
    }
  }

  function LE2(I, d, G = 5) {
    if (d.lineno === void 0) return;
    let Z = I.length,
      C = Math.max(Math.min(Z - 1, d.lineno - 1), 0);
    d.pre_context = I.slice(Math.max(0, C - G), C).map((W) => Bt.snipLine(W, 0)), d.context_line = Bt.snipLine(I[Math.min(Z - 1, C)], d.colno || 0), d.post_context = I.slice(Math.min(C + 1, Z), C + 1 + G).map((W) => Bt.snipLine(W, 0))
  }

  function yE2(I) {
    if (I && I.__sentry_captured__) return !0;
    try {
      fE2.addNonEnumerableProperty(I, "__sentry_captured__", !0)
    } catch (d) {}
    return !1
  }

  function PE2(I) {
    return Array.isArray(I) ? I : [I]
  }
  Tz1.addContextToFrame = LE2;
  Tz1.addExceptionMechanism = EE2;
  Tz1.addExceptionTypeValue = vE2;
  Tz1.arrayify = PE2;
  Tz1.checkOrSetAlreadyCaught = yE2;
  Tz1.getEventDescription = UE2;
  Tz1.parseSemver = SE2;
  Tz1.uuid4 = RE2
})
// @from(Start 24806, End 27785)
Yt = Y((bz1) => {
  Object.defineProperty(bz1, "__esModule", {
    value: !0
  });
  var jE2 = Qv(),
    wO = cG(),
    kE2 = K7(),
    At = zA(),
    wN = kE2.GLOBAL_OBJ,
    xE2 = 1000,
    Oz1, Vt, Xt;

  function cE2(I) {
    At.addHandler("dom", I), At.maybeInstrument("dom", lz1)
  }

  function lz1() {
    if (!wN.document) return;
    let I = At.triggerHandlers.bind(null, "dom"),
      d = mz1(I, !0);
    wN.document.addEventListener("click", d, !1), wN.document.addEventListener("keypress", d, !1), ["EventTarget", "Node"].forEach((G) => {
      let Z = wN[G] && wN[G].prototype;
      if (!Z || !Z.hasOwnProperty || !Z.hasOwnProperty("addEventListener")) return;
      wO.fill(Z, "addEventListener", function(C) {
        return function(W, w, B) {
          if (W === "click" || W == "keypress") try {
            let A = this,
              V = A.__sentry_instrumentation_handlers__ = A.__sentry_instrumentation_handlers__ || {},
              X = V[W] = V[W] || {
                refCount: 0
              };
            if (!X.handler) {
              let _ = mz1(I);
              X.handler = _, C.call(this, W, _, B)
            }
            X.refCount++
          } catch (A) {}
          return C.call(this, W, w, B)
        }
      }), wO.fill(Z, "removeEventListener", function(C) {
        return function(W, w, B) {
          if (W === "click" || W == "keypress") try {
            let A = this,
              V = A.__sentry_instrumentation_handlers__ || {},
              X = V[W];
            if (X) {
              if (X.refCount--, X.refCount <= 0) C.call(this, W, X.handler, B), X.handler = void 0, delete V[W];
              if (Object.keys(V).length === 0) delete A.__sentry_instrumentation_handlers__
            }
          } catch (A) {}
          return C.call(this, W, w, B)
        }
      })
    })
  }

  function pE2(I) {
    if (I.type !== Vt) return !1;
    try {
      if (!I.target || I.target._sentryId !== Xt) return !1
    } catch (d) {}
    return !0
  }

  function iE2(I, d) {
    if (I !== "keypress") return !1;
    if (!d || !d.tagName) return !0;
    if (d.tagName === "INPUT" || d.tagName === "TEXTAREA" || d.isContentEditable) return !1;
    return !0
  }

  function mz1(I, d = !1) {
    return (G) => {
      if (!G || G._sentryCaptured) return;
      let Z = nE2(G);
      if (iE2(G.type, Z)) return;
      if (wO.addNonEnumerableProperty(G, "_sentryCaptured", !0), Z && !Z._sentryId) wO.addNonEnumerableProperty(Z, "_sentryId", jE2.uuid4());
      let C = G.type === "keypress" ? "input" : G.type;
      if (!pE2(G)) I({
        event: G,
        name: C,
        global: d
      }), Vt = G.type, Xt = Z ? Z._sentryId : void 0;
      clearTimeout(Oz1), Oz1 = wN.setTimeout(() => {
        Xt = void 0, Vt = void 0
      }, xE2)
    }
  }

  function nE2(I) {
    try {
      return I.target
    } catch (d) {
      return null
    }
  }
  bz1.addClickKeypressInstrumentationHandler = cE2;
  bz1.instrumentDOM = lz1
})
// @from(Start 27791, End 29643)
Ht = Y((hz1) => {
  Object.defineProperty(hz1, "__esModule", {
    value: !0
  });
  var sE2 = Zw(),
    oE2 = DC(),
    eE2 = K7(),
    BO = eE2.getGlobalObject();

  function tE2() {
    try {
      return new ErrorEvent(""), !0
    } catch (I) {
      return !1
    }
  }

  function IM2() {
    try {
      return new DOMError(""), !0
    } catch (I) {
      return !1
    }
  }

  function dM2() {
    try {
      return new DOMException(""), !0
    } catch (I) {
      return !1
    }
  }

  function Dt() {
    if (!("fetch" in BO)) return !1;
    try {
      return new Request("http://www.example.com"), !0
    } catch (I) {
      return !1
    }
  }

  function _t(I) {
    return I && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(I.toString())
  }

  function GM2() {
    if (typeof EdgeRuntime === "string") return !0;
    if (!Dt()) return !1;
    if (_t(BO.fetch)) return !0;
    let I = !1,
      d = BO.document;
    if (d && typeof d.createElement === "function") try {
      let G = d.createElement("iframe");
      if (G.hidden = !0, d.head.appendChild(G), G.contentWindow && G.contentWindow.fetch) I = _t(G.contentWindow.fetch);
      d.head.removeChild(G)
    } catch (G) {
      sE2.DEBUG_BUILD && oE2.logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", G)
    }
    return I
  }

  function ZM2() {
    return "ReportingObserver" in BO
  }

  function CM2() {
    if (!Dt()) return !1;
    try {
      return new Request("_", {
        referrerPolicy: "origin"
      }), !0
    } catch (I) {
      return !1
    }
  }
  hz1.isNativeFetch = _t;
  hz1.supportsDOMError = IM2;
  hz1.supportsDOMException = dM2;
  hz1.supportsErrorEvent = tE2;
  hz1.supportsFetch = Dt;
  hz1.supportsNativeFetch = GM2;
  hz1.supportsReferrerPolicy = CM2;
  hz1.supportsReportingObserver = ZM2
})
// @from(Start 29649, End 31470)
gt = Y((cz1) => {
  Object.defineProperty(cz1, "__esModule", {
    value: !0
  });
  var DM2 = cG(),
    HM2 = Ht(),
    jz1 = K7(),
    fv = zA();

  function FM2(I) {
    fv.addHandler("fetch", I), fv.maybeInstrument("fetch", gM2)
  }

  function gM2() {
    if (!HM2.supportsNativeFetch()) return;
    DM2.fill(jz1.GLOBAL_OBJ, "fetch", function(I) {
      return function(...d) {
        let {
          method: G,
          url: Z
        } = xz1(d), C = {
          args: d,
          fetchData: {
            method: G,
            url: Z
          },
          startTimestamp: Date.now()
        };
        return fv.triggerHandlers("fetch", {
          ...C
        }), I.apply(jz1.GLOBAL_OBJ, d).then((W) => {
          let w = {
            ...C,
            endTimestamp: Date.now(),
            response: W
          };
          return fv.triggerHandlers("fetch", w), W
        }, (W) => {
          let w = {
            ...C,
            endTimestamp: Date.now(),
            error: W
          };
          throw fv.triggerHandlers("fetch", w), W
        })
      }
    })
  }

  function Ft(I, d) {
    return !!I && typeof I === "object" && !!I[d]
  }

  function kz1(I) {
    if (typeof I === "string") return I;
    if (!I) return "";
    if (Ft(I, "url")) return I.url;
    if (I.toString) return I.toString();
    return ""
  }

  function xz1(I) {
    if (I.length === 0) return {
      method: "GET",
      url: ""
    };
    if (I.length === 2) {
      let [G, Z] = I;
      return {
        url: kz1(G),
        method: Ft(Z, "method") ? String(Z.method).toUpperCase() : "GET"
      }
    }
    let d = I[0];
    return {
      url: kz1(d),
      method: Ft(d, "method") ? String(d.method).toUpperCase() : "GET"
    }
  }
  cz1.addFetchInstrumentationHandler = FM2;
  cz1.parseFetchArgs = xz1
})
// @from(Start 31476, End 32141)
Nt = Y((pz1) => {
  Object.defineProperty(pz1, "__esModule", {
    value: !0
  });
  var Jt = K7(),
    Kt = zA(),
    AO = null;

  function NM2(I) {
    Kt.addHandler("error", I), Kt.maybeInstrument("error", zM2)
  }

  function zM2() {
    AO = Jt.GLOBAL_OBJ.onerror, Jt.GLOBAL_OBJ.onerror = function(I, d, G, Z, C) {
      let W = {
        column: Z,
        error: C,
        line: G,
        msg: I,
        url: d
      };
      if (Kt.triggerHandlers("error", W), AO && !AO.__SENTRY_LOADER__) return AO.apply(this, arguments);
      return !1
    }, Jt.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = !0
  }
  pz1.addGlobalErrorInstrumentationHandler = NM2
})
// @from(Start 32147, End 32798)
ft = Y((iz1) => {
  Object.defineProperty(iz1, "__esModule", {
    value: !0
  });
  var zt = K7(),
    Qt = zA(),
    VO = null;

  function fM2(I) {
    Qt.addHandler("unhandledrejection", I), Qt.maybeInstrument("unhandledrejection", qM2)
  }

  function qM2() {
    VO = zt.GLOBAL_OBJ.onunhandledrejection, zt.GLOBAL_OBJ.onunhandledrejection = function(I) {
      let d = I;
      if (Qt.triggerHandlers("unhandledrejection", d), VO && !VO.__SENTRY_LOADER__) return VO.apply(this, arguments);
      return !0
    }, zt.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
  }
  iz1.addGlobalUnhandledRejectionInstrumentationHandler = fM2
})
// @from(Start 32804, End 33154)
qt = Y((nz1) => {
  Object.defineProperty(nz1, "__esModule", {
    value: !0
  });
  var UM2 = K7(),
    XO = UM2.getGlobalObject();

  function vM2() {
    let I = XO.chrome,
      d = I && I.app && I.app.runtime,
      G = "history" in XO && !!XO.history.pushState && !!XO.history.replaceState;
    return !d && G
  }
  nz1.supportsHistory = vM2
})
// @from(Start 33160, End 34292)
Rt = Y((az1) => {
  Object.defineProperty(az1, "__esModule", {
    value: !0
  });
  var rz1 = cG();
  Zw();
  DC();
  var MM2 = K7(),
    SM2 = qt(),
    _O = zA(),
    qv = MM2.GLOBAL_OBJ,
    YO;

  function LM2(I) {
    _O.addHandler("history", I), _O.maybeInstrument("history", yM2)
  }

  function yM2() {
    if (!SM2.supportsHistory()) return;
    let I = qv.onpopstate;
    qv.onpopstate = function(...G) {
      let Z = qv.location.href,
        C = YO;
      YO = Z;
      let W = {
        from: C,
        to: Z
      };
      if (_O.triggerHandlers("history", W), I) try {
        return I.apply(this, G)
      } catch (w) {}
    };

    function d(G) {
      return function(...Z) {
        let C = Z.length > 2 ? Z[2] : void 0;
        if (C) {
          let W = YO,
            w = String(C);
          YO = w;
          let B = {
            from: W,
            to: w
          };
          _O.triggerHandlers("history", B)
        }
        return G.apply(this, Z)
      }
    }
    rz1.fill(qv.history, "pushState", d), rz1.fill(qv.history, "replaceState", d)
  }
  az1.addHistoryInstrumentationHandler = LM2
})
// @from(Start 34298, End 36756)
Ut = Y((oz1) => {
  Object.defineProperty(oz1, "__esModule", {
    value: !0
  });
  var HO = xG(),
    DO = cG(),
    $M2 = K7(),
    FO = zA(),
    uM2 = $M2.GLOBAL_OBJ,
    Rv = "__sentry_xhr_v3__";

  function TM2(I) {
    FO.addHandler("xhr", I), FO.maybeInstrument("xhr", sz1)
  }

  function sz1() {
    if (!uM2.XMLHttpRequest) return;
    let I = XMLHttpRequest.prototype;
    DO.fill(I, "open", function(d) {
      return function(...G) {
        let Z = Date.now(),
          C = HO.isString(G[0]) ? G[0].toUpperCase() : void 0,
          W = OM2(G[1]);
        if (!C || !W) return d.apply(this, G);
        if (this[Rv] = {
            method: C,
            url: W,
            request_headers: {}
          }, C === "POST" && W.match(/sentry_key/)) this.__sentry_own_request__ = !0;
        let w = () => {
          let B = this[Rv];
          if (!B) return;
          if (this.readyState === 4) {
            try {
              B.status_code = this.status
            } catch (V) {}
            let A = {
              args: [C, W],
              endTimestamp: Date.now(),
              startTimestamp: Z,
              xhr: this
            };
            FO.triggerHandlers("xhr", A)
          }
        };
        if ("onreadystatechange" in this && typeof this.onreadystatechange === "function") DO.fill(this, "onreadystatechange", function(B) {
          return function(...A) {
            return w(), B.apply(this, A)
          }
        });
        else this.addEventListener("readystatechange", w);
        return DO.fill(this, "setRequestHeader", function(B) {
          return function(...A) {
            let [V, X] = A, _ = this[Rv];
            if (_ && HO.isString(V) && HO.isString(X)) _.request_headers[V.toLowerCase()] = X;
            return B.apply(this, A)
          }
        }), d.apply(this, G)
      }
    }), DO.fill(I, "send", function(d) {
      return function(...G) {
        let Z = this[Rv];
        if (!Z) return d.apply(this, G);
        if (G[0] !== void 0) Z.body = G[0];
        let C = {
          args: [Z.method, Z.url],
          startTimestamp: Date.now(),
          xhr: this
        };
        return FO.triggerHandlers("xhr", C), d.apply(this, G)
      }
    })
  }

  function OM2(I) {
    if (HO.isString(I)) return I;
    try {
      return I.toString()
    } catch (d) {}
    return
  }
  oz1.SENTRY_XHR_DATA_KEY = Rv;
  oz1.addXhrInstrumentationHandler = TM2;
  oz1.instrumentXHR = sz1
})
// @from(Start 36762, End 38387)
WQ1 = Y((CQ1) => {
  Object.defineProperty(CQ1, "__esModule", {
    value: !0
  });
  var hM2 = Zw(),
    jM2 = DC(),
    ez1 = wt(),
    tz1 = Yt(),
    IQ1 = gt(),
    dQ1 = Nt(),
    GQ1 = ft(),
    ZQ1 = Rt(),
    vt = Ut();

  function kM2(I, d) {
    switch (I) {
      case "console":
        return ez1.addConsoleInstrumentationHandler(d);
      case "dom":
        return tz1.addClickKeypressInstrumentationHandler(d);
      case "xhr":
        return vt.addXhrInstrumentationHandler(d);
      case "fetch":
        return IQ1.addFetchInstrumentationHandler(d);
      case "history":
        return ZQ1.addHistoryInstrumentationHandler(d);
      case "error":
        return dQ1.addGlobalErrorInstrumentationHandler(d);
      case "unhandledrejection":
        return GQ1.addGlobalUnhandledRejectionInstrumentationHandler(d);
      default:
        hM2.DEBUG_BUILD && jM2.logger.warn("unknown instrumentation type:", I)
    }
  }
  CQ1.addConsoleInstrumentationHandler = ez1.addConsoleInstrumentationHandler;
  CQ1.addClickKeypressInstrumentationHandler = tz1.addClickKeypressInstrumentationHandler;
  CQ1.addFetchInstrumentationHandler = IQ1.addFetchInstrumentationHandler;
  CQ1.addGlobalErrorInstrumentationHandler = dQ1.addGlobalErrorInstrumentationHandler;
  CQ1.addGlobalUnhandledRejectionInstrumentationHandler = GQ1.addGlobalUnhandledRejectionInstrumentationHandler;
  CQ1.addHistoryInstrumentationHandler = ZQ1.addHistoryInstrumentationHandler;
  CQ1.SENTRY_XHR_DATA_KEY = vt.SENTRY_XHR_DATA_KEY;
  CQ1.addXhrInstrumentationHandler = vt.addXhrInstrumentationHandler;
  CQ1.addInstrumentationHandler = kM2
})
// @from(Start 38393, End 38688)
Et = Y((wQ1) => {
  Object.defineProperty(wQ1, "__esModule", {
    value: !0
  });

  function eM2() {
    return typeof __SENTRY_BROWSER_BUNDLE__ !== "undefined" && !!__SENTRY_BROWSER_BUNDLE__
  }

  function tM2() {
    return "npm"
  }
  wQ1.getSDKSource = tM2;
  wQ1.isBrowserBundle = eM2
})
// @from(Start 38694, End 39314)
Mt = Y((BQ1, JO) => {
  Object.defineProperty(BQ1, "__esModule", {
    value: !0
  });
  var GS2 = Et();

  function ZS2() {
    return !GS2.isBrowserBundle() && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]"
  }

  function gO(I, d) {
    return I.require(d)
  }

  function CS2(I) {
    let d;
    try {
      d = gO(JO, I)
    } catch (G) {}
    try {
      let {
        cwd: G
      } = gO(JO, "process");
      d = gO(JO, `${G()}/node_modules/${I}`)
    } catch (G) {}
    return d
  }
  BQ1.dynamicRequire = gO;
  BQ1.isNodeEnv = ZS2;
  BQ1.loadModule = CS2
})
// @from(Start 39320, End 39673)
XQ1 = Y((VQ1) => {
  Object.defineProperty(VQ1, "__esModule", {
    value: !0
  });
  var AS2 = Mt(),
    AQ1 = K7();

  function VS2() {
    return typeof window !== "undefined" && (!AS2.isNodeEnv() || XS2())
  }

  function XS2() {
    return AQ1.GLOBAL_OBJ.process !== void 0 && AQ1.GLOBAL_OBJ.process.type === "renderer"
  }
  VQ1.isBrowser = VS2
})
// @from(Start 39679, End 40312)
St = Y((YQ1) => {
  Object.defineProperty(YQ1, "__esModule", {
    value: !0
  });

  function _S2() {
    let I = typeof WeakSet === "function",
      d = I ? new WeakSet : [];

    function G(C) {
      if (I) {
        if (d.has(C)) return !0;
        return d.add(C), !1
      }
      for (let W = 0; W < d.length; W++)
        if (d[W] === C) return !0;
      return d.push(C), !1
    }

    function Z(C) {
      if (I) d.delete(C);
      else
        for (let W = 0; W < d.length; W++)
          if (d[W] === C) {
            d.splice(W, 1);
            break
          }
    }
    return [G, Z]
  }
  YQ1.memoBuilder = _S2
})
// @from(Start 40318, End 43406)
Uv = Y((HQ1) => {
  Object.defineProperty(HQ1, "__esModule", {
    value: !0
  });
  var Lt = xG(),
    HS2 = St(),
    FS2 = cG(),
    gS2 = CO();

  function _Q1(I, d = 100, G = 1 / 0) {
    try {
      return KO("", I, d, G)
    } catch (Z) {
      return {
        ERROR: `**non-serializable** (${Z})`
      }
    }
  }

  function DQ1(I, d = 3, G = 102400) {
    let Z = _Q1(I, d);
    if (zS2(Z) > G) return DQ1(I, d - 1, G);
    return Z
  }

  function KO(I, d, G = 1 / 0, Z = 1 / 0, C = HS2.memoBuilder()) {
    let [W, w] = C;
    if (d == null || ["number", "boolean", "string"].includes(typeof d) && !Lt.isNaN(d)) return d;
    let B = JS2(I, d);
    if (!B.startsWith("[object ")) return B;
    if (d.__sentry_skip_normalization__) return d;
    let A = typeof d.__sentry_override_normalization_depth__ === "number" ? d.__sentry_override_normalization_depth__ : G;
    if (A === 0) return B.replace("object ", "");
    if (W(d)) return "[Circular ~]";
    let V = d;
    if (V && typeof V.toJSON === "function") try {
      let g = V.toJSON();
      return KO("", g, A - 1, Z, C)
    } catch (g) {}
    let X = Array.isArray(d) ? [] : {},
      _ = 0,
      F = FS2.convertToPlainObject(d);
    for (let g in F) {
      if (!Object.prototype.hasOwnProperty.call(F, g)) continue;
      if (_ >= Z) {
        X[g] = "[MaxProperties ~]";
        break
      }
      let J = F[g];
      X[g] = KO(g, J, A - 1, Z, C), _++
    }
    return w(d), X
  }

  function JS2(I, d) {
    try {
      if (I === "domain" && d && typeof d === "object" && d._events) return "[Domain]";
      if (I === "domainEmitter") return "[DomainEmitter]";
      if (typeof global !== "undefined" && d === global) return "[Global]";
      if (typeof window !== "undefined" && d === window) return "[Window]";
      if (typeof document !== "undefined" && d === document) return "[Document]";
      if (Lt.isVueViewModel(d)) return "[VueViewModel]";
      if (Lt.isSyntheticEvent(d)) return "[SyntheticEvent]";
      if (typeof d === "number" && d !== d) return "[NaN]";
      if (typeof d === "function") return `[Function: ${gS2.getFunctionName(d)}]`;
      if (typeof d === "symbol") return `[${String(d)}]`;
      if (typeof d === "bigint") return `[BigInt: ${String(d)}]`;
      let G = KS2(d);
      if (/^HTML(\w*)Element$/.test(G)) return `[HTMLElement: ${G}]`;
      return `[object ${G}]`
    } catch (G) {
      return `**non-serializable** (${G})`
    }
  }

  function KS2(I) {
    let d = Object.getPrototypeOf(I);
    return d ? d.constructor.name : "null prototype"
  }

  function NS2(I) {
    return ~-encodeURI(I).split(/%..|./).length
  }

  function zS2(I) {
    return NS2(JSON.stringify(I))
  }

  function QS2(I, d) {
    let G = d.replace(/\\/g, "/").replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"),
      Z = I;
    try {
      Z = decodeURI(I)
    } catch (C) {}
    return Z.replace(/\\/g, "/").replace(/webpack:\/?/g, "").replace(new RegExp(`(file://)?/*${G}/*`, "ig"), "app:///")
  }
  HQ1.normalize = _Q1;
  HQ1.normalizeToSize = DQ1;
  HQ1.normalizeUrlToBase = QS2;
  HQ1.walk = KO
})
// @from(Start 43412, End 45773)
QQ1 = Y((zQ1) => {
  Object.defineProperty(zQ1, "__esModule", {
    value: !0
  });

  function gQ1(I, d) {
    let G = 0;
    for (let Z = I.length - 1; Z >= 0; Z--) {
      let C = I[Z];
      if (C === ".") I.splice(Z, 1);
      else if (C === "..") I.splice(Z, 1), G++;
      else if (G) I.splice(Z, 1), G--
    }
    if (d)
      for (; G--; G) I.unshift("..");
    return I
  }
  var vS2 = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;

  function JQ1(I) {
    let d = I.length > 1024 ? `<truncated>${I.slice(-1024)}` : I,
      G = vS2.exec(d);
    return G ? G.slice(1) : []
  }

  function yt(...I) {
    let d = "",
      G = !1;
    for (let Z = I.length - 1; Z >= -1 && !G; Z--) {
      let C = Z >= 0 ? I[Z] : "/";
      if (!C) continue;
      d = `${C}/${d}`, G = C.charAt(0) === "/"
    }
    return d = gQ1(d.split("/").filter((Z) => !!Z), !G).join("/"), (G ? "/" : "") + d || "."
  }

  function FQ1(I) {
    let d = 0;
    for (; d < I.length; d++)
      if (I[d] !== "") break;
    let G = I.length - 1;
    for (; G >= 0; G--)
      if (I[G] !== "") break;
    if (d > G) return [];
    return I.slice(d, G - d + 1)
  }

  function ES2(I, d) {
    I = yt(I).slice(1), d = yt(d).slice(1);
    let G = FQ1(I.split("/")),
      Z = FQ1(d.split("/")),
      C = Math.min(G.length, Z.length),
      W = C;
    for (let B = 0; B < C; B++)
      if (G[B] !== Z[B]) {
        W = B;
        break
      } let w = [];
    for (let B = W; B < G.length; B++) w.push("..");
    return w = w.concat(Z.slice(W)), w.join("/")
  }

  function KQ1(I) {
    let d = NQ1(I),
      G = I.slice(-1) === "/",
      Z = gQ1(I.split("/").filter((C) => !!C), !d).join("/");
    if (!Z && !d) Z = ".";
    if (Z && G) Z += "/";
    return (d ? "/" : "") + Z
  }

  function NQ1(I) {
    return I.charAt(0) === "/"
  }

  function MS2(...I) {
    return KQ1(I.join("/"))
  }

  function SS2(I) {
    let d = JQ1(I),
      G = d[0],
      Z = d[1];
    if (!G && !Z) return ".";
    if (Z) Z = Z.slice(0, Z.length - 1);
    return G + Z
  }

  function LS2(I, d) {
    let G = JQ1(I)[2];
    if (d && G.slice(d.length * -1) === d) G = G.slice(0, G.length - d.length);
    return G
  }
  zQ1.basename = LS2;
  zQ1.dirname = SS2;
  zQ1.isAbsolute = NQ1;
  zQ1.join = MS2;
  zQ1.normalizePath = KQ1;
  zQ1.relative = ES2;
  zQ1.resolve = yt
})
// @from(Start 45779, End 48277)
Pt = Y((fQ1) => {
  Object.defineProperty(fQ1, "__esModule", {
    value: !0
  });
  var lS2 = xG(),
    QA;
  (function(I) {
    I[I.PENDING = 0] = "PENDING";
    let G = 1;
    I[I.RESOLVED = G] = "RESOLVED";
    let Z = 2;
    I[I.REJECTED = Z] = "REJECTED"
  })(QA || (QA = {}));

  function bS2(I) {
    return new Cw((d) => {
      d(I)
    })
  }

  function hS2(I) {
    return new Cw((d, G) => {
      G(I)
    })
  }
  class Cw {
    constructor(I) {
      Cw.prototype.__init.call(this), Cw.prototype.__init2.call(this), Cw.prototype.__init3.call(this), Cw.prototype.__init4.call(this), this._state = QA.PENDING, this._handlers = [];
      try {
        I(this._resolve, this._reject)
      } catch (d) {
        this._reject(d)
      }
    }
    then(I, d) {
      return new Cw((G, Z) => {
        this._handlers.push([!1, (C) => {
          if (!I) G(C);
          else try {
            G(I(C))
          } catch (W) {
            Z(W)
          }
        }, (C) => {
          if (!d) Z(C);
          else try {
            G(d(C))
          } catch (W) {
            Z(W)
          }
        }]), this._executeHandlers()
      })
    } catch (I) {
      return this.then((d) => d, I)
    } finally(I) {
      return new Cw((d, G) => {
        let Z, C;
        return this.then((W) => {
          if (C = !1, Z = W, I) I()
        }, (W) => {
          if (C = !0, Z = W, I) I()
        }).then(() => {
          if (C) {
            G(Z);
            return
          }
          d(Z)
        })
      })
    }
    __init() {
      this._resolve = (I) => {
        this._setResult(QA.RESOLVED, I)
      }
    }
    __init2() {
      this._reject = (I) => {
        this._setResult(QA.REJECTED, I)
      }
    }
    __init3() {
      this._setResult = (I, d) => {
        if (this._state !== QA.PENDING) return;
        if (lS2.isThenable(d)) {
          d.then(this._resolve, this._reject);
          return
        }
        this._state = I, this._value = d, this._executeHandlers()
      }
    }
    __init4() {
      this._executeHandlers = () => {
        if (this._state === QA.PENDING) return;
        let I = this._handlers.slice();
        this._handlers = [], I.forEach((d) => {
          if (d[0]) return;
          if (this._state === QA.RESOLVED) d[1](this._value);
          if (this._state === QA.REJECTED) d[2](this._value);
          d[0] = !0
        })
      }
    }
  }
  fQ1.SyncPromise = Cw;
  fQ1.rejectedSyncPromise = hS2;
  fQ1.resolvedSyncPromise = bS2
})
// @from(Start 48283, End 49327)
RQ1 = Y((qQ1) => {
  Object.defineProperty(qQ1, "__esModule", {
    value: !0
  });
  var cS2 = dt(),
    $t = Pt();

  function pS2(I) {
    let d = [];

    function G() {
      return I === void 0 || d.length < I
    }

    function Z(w) {
      return d.splice(d.indexOf(w), 1)[0]
    }

    function C(w) {
      if (!G()) return $t.rejectedSyncPromise(new cS2.SentryError("Not adding Promise because buffer limit was reached."));
      let B = w();
      if (d.indexOf(B) === -1) d.push(B);
      return B.then(() => Z(B)).then(null, () => Z(B).then(null, () => {})), B
    }

    function W(w) {
      return new $t.SyncPromise((B, A) => {
        let V = d.length;
        if (!V) return B(!0);
        let X = setTimeout(() => {
          if (w && w > 0) B(!1)
        }, w);
        d.forEach((_) => {
          $t.resolvedSyncPromise(_).then(() => {
            if (!--V) clearTimeout(X), B(!0)
          }, A)
        })
      })
    }
    return {
      $: d,
      add: C,
      drain: W
    }
  }
  qQ1.makePromiseBuffer = pS2
})
// @from(Start 49333, End 50081)
vQ1 = Y((UQ1) => {
  Object.defineProperty(UQ1, "__esModule", {
    value: !0
  });

  function nS2(I) {
    let d = {},
      G = 0;
    while (G < I.length) {
      let Z = I.indexOf("=", G);
      if (Z === -1) break;
      let C = I.indexOf(";", G);
      if (C === -1) C = I.length;
      else if (C < Z) {
        G = I.lastIndexOf(";", Z - 1) + 1;
        continue
      }
      let W = I.slice(G, Z).trim();
      if (d[W] === void 0) {
        let w = I.slice(Z + 1, C).trim();
        if (w.charCodeAt(0) === 34) w = w.slice(1, -1);
        try {
          d[W] = w.indexOf("%") !== -1 ? decodeURIComponent(w) : w
        } catch (B) {
          d[W] = w
        }
      }
      G = C + 1
    }
    return d
  }
  UQ1.parseCookie = nS2
})
// @from(Start 50087, End 51040)
ut = Y((EQ1) => {
  Object.defineProperty(EQ1, "__esModule", {
    value: !0
  });

  function aS2(I) {
    if (!I) return {};
    let d = I.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!d) return {};
    let G = d[6] || "",
      Z = d[8] || "";
    return {
      host: d[4],
      path: d[5],
      protocol: d[2],
      search: G,
      hash: Z,
      relative: d[5] + G + Z
    }
  }

  function sS2(I) {
    return I.split(/[\?#]/, 1)[0]
  }

  function oS2(I) {
    return I.split(/\\?\//).filter((d) => d.length > 0 && d !== ",").length
  }

  function eS2(I) {
    let {
      protocol: d,
      host: G,
      path: Z
    } = I, C = G && G.replace(/^.*@/, "[filtered]:[filtered]@").replace(/(:80)$/, "").replace(/(:443)$/, "") || "";
    return `${d?`${d}://`:""}${C}${Z}`
  }
  EQ1.getNumberOfUrlSegments = oS2;
  EQ1.getSanitizedUrlString = eS2;
  EQ1.parseUrl = aS2;
  EQ1.stripUrlQueryAndFragment = sS2
})
// @from(Start 51046, End 55901)
$Q1 = Y((PQ1) => {
  Object.defineProperty(PQ1, "__esModule", {
    value: !0
  });
  var ZL2 = vQ1(),
    CL2 = Zw(),
    MQ1 = xG(),
    WL2 = DC(),
    wL2 = Uv(),
    BL2 = ut(),
    AL2 = {
      ip: !1,
      request: !0,
      transaction: !0,
      user: !0
    },
    VL2 = ["cookies", "data", "headers", "method", "query_string", "url"],
    SQ1 = ["id", "username", "email"];

  function XL2(I, d, G) {
    if (!I) return;
    if (!I.metadata.source || I.metadata.source === "url") {
      let [Z, C] = NO(d, {
        path: !0,
        method: !0
      });
      I.updateName(Z), I.setMetadata({
        source: C
      })
    }
    if (I.setAttribute("url", d.originalUrl || d.url), d.baseUrl) I.setAttribute("baseUrl", d.baseUrl);
    I.setData("query", LQ1(d, G))
  }

  function NO(I, d = {}) {
    let G = I.method && I.method.toUpperCase(),
      Z = "",
      C = "url";
    if (d.customRoute || I.route) Z = d.customRoute || `${I.baseUrl||""}${I.route&&I.route.path}`, C = "route";
    else if (I.originalUrl || I.url) Z = BL2.stripUrlQueryAndFragment(I.originalUrl || I.url || "");
    let W = "";
    if (d.method && G) W += G;
    if (d.method && d.path) W += " ";
    if (d.path && Z) W += Z;
    return [W, C]
  }

  function YL2(I, d) {
    switch (d) {
      case "path":
        return NO(I, {
          path: !0
        })[0];
      case "handler":
        return I.route && I.route.stack && I.route.stack[0] && I.route.stack[0].name || "<anonymous>";
      case "methodPath":
      default: {
        let G = I._reconstructedRoute ? I._reconstructedRoute : void 0;
        return NO(I, {
          path: !0,
          method: !0,
          customRoute: G
        })[0]
      }
    }
  }

  function _L2(I, d) {
    let G = {};
    return (Array.isArray(d) ? d : SQ1).forEach((C) => {
      if (I && C in I) G[C] = I[C]
    }), G
  }

  function Tt(I, d) {
    let {
      include: G = VL2,
      deps: Z
    } = d || {}, C = {}, W = I.headers || {}, w = I.method, B = W.host || I.hostname || I.host || "<no host>", A = I.protocol === "https" || I.socket && I.socket.encrypted ? "https" : "http", V = I.originalUrl || I.url || "", X = V.startsWith(A) ? V : `${A}://${B}${V}`;
    return G.forEach((_) => {
      switch (_) {
        case "headers": {
          if (C.headers = W, !G.includes("cookies")) delete C.headers.cookie;
          break
        }
        case "method": {
          C.method = w;
          break
        }
        case "url": {
          C.url = X;
          break
        }
        case "cookies": {
          C.cookies = I.cookies || W.cookie && ZL2.parseCookie(W.cookie) || {};
          break
        }
        case "query_string": {
          C.query_string = LQ1(I, Z);
          break
        }
        case "data": {
          if (w === "GET" || w === "HEAD") break;
          if (I.body !== void 0) C.data = MQ1.isString(I.body) ? I.body : JSON.stringify(wL2.normalize(I.body));
          break
        }
        default:
          if ({}.hasOwnProperty.call(I, _)) C[_] = I[_]
      }
    }), C
  }

  function DL2(I, d, G) {
    let Z = {
      ...AL2,
      ...G && G.include
    };
    if (Z.request) {
      let C = Array.isArray(Z.request) ? Tt(d, {
        include: Z.request,
        deps: G && G.deps
      }) : Tt(d, {
        deps: G && G.deps
      });
      I.request = {
        ...I.request,
        ...C
      }
    }
    if (Z.user) {
      let C = d.user && MQ1.isPlainObject(d.user) ? _L2(d.user, Z.user) : {};
      if (Object.keys(C).length) I.user = {
        ...I.user,
        ...C
      }
    }
    if (Z.ip) {
      let C = d.ip || d.socket && d.socket.remoteAddress;
      if (C) I.user = {
        ...I.user,
        ip_address: C
      }
    }
    if (Z.transaction && !I.transaction) I.transaction = YL2(d, Z.transaction);
    return I
  }

  function LQ1(I, d) {
    let G = I.originalUrl || I.url || "";
    if (!G) return;
    if (G.startsWith("/")) G = `http://dogs.are.great${G}`;
    try {
      return I.query || typeof URL !== "undefined" && new URL(G).search.slice(1) || d && d.url && d.url.parse(G).query || void 0
    } catch (Z) {
      return
    }
  }

  function yQ1(I) {
    let d = {};
    try {
      I.forEach((G, Z) => {
        if (typeof G === "string") d[Z] = G
      })
    } catch (G) {
      CL2.DEBUG_BUILD && WL2.logger.warn("Sentry failed extracting headers from a request object. If you see this, please file an issue.")
    }
    return d
  }

  function HL2(I) {
    let d = yQ1(I.headers);
    return {
      method: I.method,
      url: I.url,
      headers: d
    }
  }
  PQ1.DEFAULT_USER_INCLUDES = SQ1;
  PQ1.addRequestDataToEvent = DL2;
  PQ1.addRequestDataToTransaction = XL2;
  PQ1.extractPathForTransaction = NO;
  PQ1.extractRequestData = Tt;
  PQ1.winterCGHeadersToDict = yQ1;
  PQ1.winterCGRequestToRequestData = HL2
})
// @from(Start 55907, End 56295)
mQ1 = Y((OQ1) => {
  Object.defineProperty(OQ1, "__esModule", {
    value: !0
  });
  var uQ1 = ["fatal", "error", "warning", "log", "info", "debug"];

  function fL2(I) {
    return TQ1(I)
  }

  function TQ1(I) {
    return I === "warn" ? "warning" : uQ1.includes(I) ? I : "log"
  }
  OQ1.severityFromString = fL2;
  OQ1.severityLevelFromString = TQ1;
  OQ1.validSeverityLevels = uQ1
})
// @from(Start 56301, End 57648)
Ot = Y((kQ1) => {
  Object.defineProperty(kQ1, "__esModule", {
    value: !0
  });
  var lQ1 = K7(),
    bQ1 = 1000;

  function hQ1() {
    return Date.now() / bQ1
  }

  function vL2() {
    let {
      performance: I
    } = lQ1.GLOBAL_OBJ;
    if (!I || !I.now) return hQ1;
    let d = Date.now() - I.now(),
      G = I.timeOrigin == null ? d : I.timeOrigin;
    return () => {
      return (G + I.now()) / bQ1
    }
  }
  var jQ1 = vL2(),
    EL2 = jQ1;
  kQ1._browserPerformanceTimeOriginMode = void 0;
  var ML2 = (() => {
    let {
      performance: I
    } = lQ1.GLOBAL_OBJ;
    if (!I || !I.now) {
      kQ1._browserPerformanceTimeOriginMode = "none";
      return
    }
    let d = 3600000,
      G = I.now(),
      Z = Date.now(),
      C = I.timeOrigin ? Math.abs(I.timeOrigin + G - Z) : d,
      W = C < d,
      w = I.timing && I.timing.navigationStart,
      A = typeof w === "number" ? Math.abs(w + G - Z) : d,
      V = A < d;
    if (W || V)
      if (C <= A) return kQ1._browserPerformanceTimeOriginMode = "timeOrigin", I.timeOrigin;
      else return kQ1._browserPerformanceTimeOriginMode = "navigationStart", w;
    return kQ1._browserPerformanceTimeOriginMode = "dateNow", Z
  })();
  kQ1.browserPerformanceTimeOrigin = ML2;
  kQ1.dateTimestampInSeconds = hQ1;
  kQ1.timestampInSeconds = jQ1;
  kQ1.timestampWithMs = EL2
})
// @from(Start 57654, End 59442)
lt = Y((iQ1) => {
  Object.defineProperty(iQ1, "__esModule", {
    value: !0
  });
  var $L2 = Zw(),
    uL2 = xG(),
    TL2 = DC(),
    OL2 = "baggage",
    mt = "sentry-",
    cQ1 = /^sentry-/,
    pQ1 = 8192;

  function mL2(I) {
    if (!uL2.isString(I) && !Array.isArray(I)) return;
    let d = {};
    if (Array.isArray(I)) d = I.reduce((Z, C) => {
      let W = xQ1(C);
      for (let w of Object.keys(W)) Z[w] = W[w];
      return Z
    }, {});
    else {
      if (!I) return;
      d = xQ1(I)
    }
    let G = Object.entries(d).reduce((Z, [C, W]) => {
      if (C.match(cQ1)) {
        let w = C.slice(mt.length);
        Z[w] = W
      }
      return Z
    }, {});
    if (Object.keys(G).length > 0) return G;
    else return
  }

  function lL2(I) {
    if (!I) return;
    let d = Object.entries(I).reduce((G, [Z, C]) => {
      if (C) G[`${mt}${Z}`] = C;
      return G
    }, {});
    return bL2(d)
  }

  function xQ1(I) {
    return I.split(",").map((d) => d.split("=").map((G) => decodeURIComponent(G.trim()))).reduce((d, [G, Z]) => {
      return d[G] = Z, d
    }, {})
  }

  function bL2(I) {
    if (Object.keys(I).length === 0) return;
    return Object.entries(I).reduce((d, [G, Z], C) => {
      let W = `${encodeURIComponent(G)}=${encodeURIComponent(Z)}`,
        w = C === 0 ? W : `${d},${W}`;
      if (w.length > pQ1) return $L2.DEBUG_BUILD && TL2.logger.warn(`Not adding key: ${G} with val: ${Z} to baggage header due to exceeding baggage size limits.`), d;
      else return w
    }, "")
  }
  iQ1.BAGGAGE_HEADER_NAME = OL2;
  iQ1.MAX_BAGGAGE_STRING_LENGTH = pQ1;
  iQ1.SENTRY_BAGGAGE_KEY_PREFIX = mt;
  iQ1.SENTRY_BAGGAGE_KEY_PREFIX_REGEX = cQ1;
  iQ1.baggageHeaderToDynamicSamplingContext = mL2;
  iQ1.dynamicSamplingContextToSentryBaggageHeader = lL2
})
// @from(Start 59448, End 61430)
sQ1 = Y((aQ1) => {
  Object.defineProperty(aQ1, "__esModule", {
    value: !0
  });
  var nQ1 = lt(),
    pG = Qv(),
    rQ1 = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

  function bt(I) {
    if (!I) return;
    let d = I.match(rQ1);
    if (!d) return;
    let G;
    if (d[3] === "1") G = !0;
    else if (d[3] === "0") G = !1;
    return {
      traceId: d[1],
      parentSampled: G,
      parentSpanId: d[2]
    }
  }

  function iL2(I, d) {
    let G = bt(I),
      Z = nQ1.baggageHeaderToDynamicSamplingContext(d),
      {
        traceId: C,
        parentSpanId: W,
        parentSampled: w
      } = G || {};
    if (!G) return {
      traceparentData: G,
      dynamicSamplingContext: void 0,
      propagationContext: {
        traceId: C || pG.uuid4(),
        spanId: pG.uuid4().substring(16)
      }
    };
    else return {
      traceparentData: G,
      dynamicSamplingContext: Z || {},
      propagationContext: {
        traceId: C || pG.uuid4(),
        parentSpanId: W || pG.uuid4().substring(16),
        spanId: pG.uuid4().substring(16),
        sampled: w,
        dsc: Z || {}
      }
    }
  }

  function nL2(I, d) {
    let G = bt(I),
      Z = nQ1.baggageHeaderToDynamicSamplingContext(d),
      {
        traceId: C,
        parentSpanId: W,
        parentSampled: w
      } = G || {};
    if (!G) return {
      traceId: C || pG.uuid4(),
      spanId: pG.uuid4().substring(16)
    };
    else return {
      traceId: C || pG.uuid4(),
      parentSpanId: W || pG.uuid4().substring(16),
      spanId: pG.uuid4().substring(16),
      sampled: w,
      dsc: Z || {}
    }
  }

  function rL2(I = pG.uuid4(), d = pG.uuid4().substring(16), G) {
    let Z = "";
    if (G !== void 0) Z = G ? "-1" : "-0";
    return `${I}-${d}${Z}`
  }
  aQ1.TRACEPARENT_REGEXP = rQ1;
  aQ1.extractTraceparentData = bt;
  aQ1.generateSentryTraceHeader = rL2;
  aQ1.propagationContextFromHeaders = nL2;
  aQ1.tracingContextFromHeaders = iL2
})
// @from(Start 61436, End 64912)
jt = Y((tQ1) => {
  Object.defineProperty(tQ1, "__esModule", {
    value: !0
  });
  var Iy2 = It(),
    dy2 = Uv(),
    oQ1 = cG();

  function Gy2(I, d = []) {
    return [I, d]
  }

  function Zy2(I, d) {
    let [G, Z] = I;
    return [G, [...Z, d]]
  }

  function eQ1(I, d) {
    let G = I[1];
    for (let Z of G) {
      let C = Z[0].type;
      if (d(Z, C)) return !0
    }
    return !1
  }

  function Cy2(I, d) {
    return eQ1(I, (G, Z) => d.includes(Z))
  }

  function ht(I, d) {
    return (d || new TextEncoder).encode(I)
  }

  function Wy2(I, d) {
    let [G, Z] = I, C = JSON.stringify(G);

    function W(w) {
      if (typeof C === "string") C = typeof w === "string" ? C + w : [ht(C, d), w];
      else C.push(typeof w === "string" ? ht(w, d) : w)
    }
    for (let w of Z) {
      let [B, A] = w;
      if (W(`
${JSON.stringify(B)}
`), typeof A === "string" || A instanceof Uint8Array) W(A);
      else {
        let V;
        try {
          V = JSON.stringify(A)
        } catch (X) {
          V = JSON.stringify(dy2.normalize(A))
        }
        W(V)
      }
    }
    return typeof C === "string" ? C : wy2(C)
  }

  function wy2(I) {
    let d = I.reduce((C, W) => C + W.length, 0),
      G = new Uint8Array(d),
      Z = 0;
    for (let C of I) G.set(C, Z), Z += C.length;
    return G
  }

  function By2(I, d, G) {
    let Z = typeof I === "string" ? d.encode(I) : I;

    function C(A) {
      let V = Z.subarray(0, A);
      return Z = Z.subarray(A + 1), V
    }

    function W() {
      let A = Z.indexOf(10);
      if (A < 0) A = Z.length;
      return JSON.parse(G.decode(C(A)))
    }
    let w = W(),
      B = [];
    while (Z.length) {
      let A = W(),
        V = typeof A.length === "number" ? A.length : void 0;
      B.push([A, V ? C(V) : W()])
    }
    return [w, B]
  }

  function Ay2(I, d) {
    let G = typeof I.data === "string" ? ht(I.data, d) : I.data;
    return [oQ1.dropUndefinedKeys({
      type: "attachment",
      length: G.length,
      filename: I.filename,
      content_type: I.contentType,
      attachment_type: I.attachmentType
    }), G]
  }
  var Vy2 = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile: "profile",
    replay_event: "replay",
    replay_recording: "replay",
    check_in: "monitor",
    feedback: "feedback",
    span: "span",
    statsd: "metric_bucket"
  };

  function Xy2(I) {
    return Vy2[I]
  }

  function Yy2(I) {
    if (!I || !I.sdk) return;
    let {
      name: d,
      version: G
    } = I.sdk;
    return {
      name: d,
      version: G
    }
  }

  function _y2(I, d, G, Z) {
    let C = I.sdkProcessingMetadata && I.sdkProcessingMetadata.dynamicSamplingContext;
    return {
      event_id: I.event_id,
      sent_at: new Date().toISOString(),
      ...d && {
        sdk: d
      },
      ...!!G && Z && {
        dsn: Iy2.dsnToString(Z)
      },
      ...C && {
        trace: oQ1.dropUndefinedKeys({
          ...C
        })
      }
    }
  }
  tQ1.addItemToEnvelope = Zy2;
  tQ1.createAttachmentEnvelopeItem = Ay2;
  tQ1.createEnvelope = Gy2;
  tQ1.createEventEnvelopeHeaders = _y2;
  tQ1.envelopeContainsItemType = Cy2;
  tQ1.envelopeItemTypeToDataCategory = Xy2;
  tQ1.forEachEnvelopeItem = eQ1;
  tQ1.getSdkMetadataForEnvelopeHeader = Yy2;
  tQ1.parseEnvelope = By2;
  tQ1.serializeEnvelope = Wy2
})
// @from(Start 64918, End 65312)
df1 = Y((If1) => {
  Object.defineProperty(If1, "__esModule", {
    value: !0
  });
  var qy2 = jt(),
    Ry2 = Ot();

  function Uy2(I, d, G) {
    let Z = [{
      type: "client_report"
    }, {
      timestamp: G || Ry2.dateTimestampInSeconds(),
      discarded_events: I
    }];
    return qy2.createEnvelope(d ? {
      dsn: d
    } : {}, [Z])
  }
  If1.createClientReportEnvelope = Uy2
})
// @from(Start 65318, End 66564)
wf1 = Y((Wf1) => {
  Object.defineProperty(Wf1, "__esModule", {
    value: !0
  });
  var Gf1 = 60000;

  function Zf1(I, d = Date.now()) {
    let G = parseInt(`${I}`, 10);
    if (!isNaN(G)) return G * 1000;
    let Z = Date.parse(`${I}`);
    if (!isNaN(Z)) return Z - d;
    return Gf1
  }

  function Cf1(I, d) {
    return I[d] || I.all || 0
  }

  function Ey2(I, d, G = Date.now()) {
    return Cf1(I, d) > G
  }

  function My2(I, {
    statusCode: d,
    headers: G
  }, Z = Date.now()) {
    let C = {
        ...I
      },
      W = G && G["x-sentry-rate-limits"],
      w = G && G["retry-after"];
    if (W)
      for (let B of W.trim().split(",")) {
        let [A, V, , , X] = B.split(":", 5), _ = parseInt(A, 10), F = (!isNaN(_) ? _ : 60) * 1000;
        if (!V) C.all = Z + F;
        else
          for (let g of V.split(";"))
            if (g === "metric_bucket") {
              if (!X || X.split(";").includes("custom")) C[g] = Z + F
            } else C[g] = Z + F
      } else if (w) C.all = Z + Zf1(w, Z);
      else if (d === 429) C.all = Z + 60000;
    return C
  }
  Wf1.DEFAULT_RETRY_AFTER = Gf1;
  Wf1.disabledUntil = Cf1;
  Wf1.isRateLimited = Ey2;
  Wf1.parseRetryAfterHeader = Zf1;
  Wf1.updateRateLimits = My2
})
// @from(Start 66570, End 67342)
Xf1 = Y((Vf1) => {
  Object.defineProperty(Vf1, "__esModule", {
    value: !0
  });

  function Bf1(I, d, G) {
    let Z = d.match(/([a-z_]+)\.(.*)/i);
    if (Z === null) I[d] = G;
    else {
      let C = I[Z[1]];
      Bf1(C, Z[2], G)
    }
  }

  function uy2(I, d, G = {}) {
    return Array.isArray(d) ? Af1(I, d, G) : Ty2(I, d, G)
  }

  function Af1(I, d, G) {
    let Z = d.find((C) => C.name === I.name);
    if (Z) {
      for (let [C, W] of Object.entries(G)) Bf1(Z, C, W);
      return d
    }
    return [...d, I]
  }

  function Ty2(I, d, G) {
    return (C) => {
      let W = d(C);
      if (I.allowExclusionByUser) {
        if (!W.find((B) => B.name === I.name)) return W
      }
      return Af1(I, W, G)
    }
  }
  Vf1.addOrUpdateIntegration = uy2
})
// @from(Start 67348, End 68090)
_f1 = Y((Yf1) => {
  Object.defineProperty(Yf1, "__esModule", {
    value: !0
  });

  function my2(I) {
    let d = [],
      G = {};
    return {
      add(Z, C) {
        while (d.length >= I) {
          let W = d.shift();
          if (W !== void 0) delete G[W]
        }
        if (G[Z]) this.delete(Z);
        d.push(Z), G[Z] = C
      },
      clear() {
        G = {}, d = []
      },
      get(Z) {
        return G[Z]
      },
      size() {
        return d.length
      },
      delete(Z) {
        if (!G[Z]) return !1;
        delete G[Z];
        for (let C = 0; C < d.length; C++)
          if (d[C] === Z) {
            d.splice(C, 1);
            break
          } return !0
      }
    }
  }
  Yf1.makeFifoCache = my2
})
// @from(Start 68096, End 70519)
gf1 = Y((Ff1) => {
  Object.defineProperty(Ff1, "__esModule", {
    value: !0
  });
  var kt = xG(),
    Df1 = Qv(),
    by2 = Uv(),
    hy2 = cG();

  function xt(I, d) {
    return I(d.stack || "", 1)
  }

  function Hf1(I, d) {
    let G = {
        type: d.name || d.constructor.name,
        value: d.message
      },
      Z = xt(I, d);
    if (Z.length) G.stacktrace = {
      frames: Z
    };
    return G
  }

  function jy2(I) {
    if ("name" in I && typeof I.name === "string") {
      let d = `'${I.name}' captured as exception`;
      if ("message" in I && typeof I.message === "string") d += ` with message '${I.message}'`;
      return d
    } else if ("message" in I && typeof I.message === "string") return I.message;
    else return `Object captured as exception with keys: ${hy2.extractExceptionKeysForMessage(I)}`
  }

  function ky2(I, d, G, Z) {
    let C = typeof I === "function" ? I().getClient() : I,
      W = G,
      B = Z && Z.data && Z.data.mechanism || {
        handled: !0,
        type: "generic"
      },
      A;
    if (!kt.isError(G)) {
      if (kt.isPlainObject(G)) {
        let X = C && C.getOptions().normalizeDepth;
        A = {
          ["__serialized__"]: by2.normalizeToSize(G, X)
        };
        let _ = jy2(G);
        W = Z && Z.syntheticException || new Error(_), W.message = _
      } else W = Z && Z.syntheticException || new Error(G), W.message = G;
      B.synthetic = !0
    }
    let V = {
      exception: {
        values: [Hf1(d, W)]
      }
    };
    if (A) V.extra = A;
    return Df1.addExceptionTypeValue(V, void 0, void 0), Df1.addExceptionMechanism(V, B), {
      ...V,
      event_id: Z && Z.event_id
    }
  }

  function xy2(I, d, G = "info", Z, C) {
    let W = {
      event_id: Z && Z.event_id,
      level: G
    };
    if (C && Z && Z.syntheticException) {
      let w = xt(I, Z.syntheticException);
      if (w.length) W.exception = {
        values: [{
          value: d,
          stacktrace: {
            frames: w
          }
        }]
      }
    }
    if (kt.isParameterizedString(d)) {
      let {
        __sentry_template_string__: w,
        __sentry_template_values__: B
      } = d;
      return W.logentry = {
        message: w,
        params: B
      }, W
    }
    return W.message = d, W
  }
  Ff1.eventFromMessage = xy2;
  Ff1.eventFromUnknownInput = ky2;
  Ff1.exceptionFromError = Hf1;
  Ff1.parseStackFrames = xt
})
// @from(Start 70525, End 71488)
Kf1 = Y((Jf1) => {
  Object.defineProperty(Jf1, "__esModule", {
    value: !0
  });
  var ry2 = cG(),
    ay2 = ZO();

  function sy2(I, d, G, Z) {
    let C = I(),
      W = !1,
      w = !0;
    return setInterval(() => {
      let B = C.getTimeMs();
      if (W === !1 && B > d + G) {
        if (W = !0, w) Z()
      }
      if (B < d + G) W = !1
    }, 20), {
      poll: () => {
        C.reset()
      },
      enabled: (B) => {
        w = B
      }
    }
  }

  function oy2(I, d, G) {
    let Z = d ? d.replace(/^file:\/\//, "") : void 0,
      C = I.location.columnNumber ? I.location.columnNumber + 1 : void 0,
      W = I.location.lineNumber ? I.location.lineNumber + 1 : void 0;
    return ry2.dropUndefinedKeys({
      filename: Z,
      module: G(Z),
      function: I.functionName || "?",
      colno: C,
      lineno: W,
      in_app: Z ? ay2.filenameIsInApp(Z) : void 0
    })
  }
  Jf1.callFrameToStackFrame = oy2;
  Jf1.watchdogTimer = sy2
})
// @from(Start 71494, End 72347)
Qf1 = Y((zf1) => {
  Object.defineProperty(zf1, "__esModule", {
    value: !0
  });
  class Nf1 {
    constructor(I) {
      this._maxSize = I, this._cache = new Map
    }
    get size() {
      return this._cache.size
    }
    get(I) {
      let d = this._cache.get(I);
      if (d === void 0) return;
      return this._cache.delete(I), this._cache.set(I, d), d
    }
    set(I, d) {
      if (this._cache.size >= this._maxSize) this._cache.delete(this._cache.keys().next().value);
      this._cache.set(I, d)
    }
    remove(I) {
      let d = this._cache.get(I);
      if (d) this._cache.delete(I);
      return d
    }
    clear() {
      this._cache.clear()
    }
    keys() {
      return Array.from(this._cache.keys())
    }
    values() {
      let I = [];
      return this._cache.forEach((d) => I.push(d)), I
    }
  }
  zf1.LRUMap = Nf1
})
// @from(Start 72353, End 72526)
ct = Y((ff1) => {
  Object.defineProperty(ff1, "__esModule", {
    value: !0
  });

  function dP2(I, d) {
    return I != null ? I : d()
  }
  ff1._nullishCoalesce = dP2
})
// @from(Start 72532, End 72741)
Rf1 = Y((qf1) => {
  Object.defineProperty(qf1, "__esModule", {
    value: !0
  });
  var ZP2 = ct();
  async function CP2(I, d) {
    return ZP2._nullishCoalesce(I, d)
  }
  qf1._asyncNullishCoalesce = CP2
})
// @from(Start 72747, End 73299)
pt = Y((Uf1) => {
  Object.defineProperty(Uf1, "__esModule", {
    value: !0
  });
  async function wP2(I) {
    let d = void 0,
      G = I[0],
      Z = 1;
    while (Z < I.length) {
      let C = I[Z],
        W = I[Z + 1];
      if (Z += 2, (C === "optionalAccess" || C === "optionalCall") && G == null) return;
      if (C === "access" || C === "optionalAccess") d = G, G = await W(G);
      else if (C === "call" || C === "optionalCall") G = await W((...w) => G.call(d, ...w)), d = void 0
    }
    return G
  }
  Uf1._asyncOptionalChain = wP2
})
// @from(Start 73305, End 73553)
Ef1 = Y((vf1) => {
  Object.defineProperty(vf1, "__esModule", {
    value: !0
  });
  var AP2 = pt();
  async function VP2(I) {
    let d = await AP2._asyncOptionalChain(I);
    return d == null ? !0 : d
  }
  vf1._asyncOptionalChainDelete = VP2
})
// @from(Start 73559, End 74089)
it = Y((Mf1) => {
  Object.defineProperty(Mf1, "__esModule", {
    value: !0
  });

  function YP2(I) {
    let d = void 0,
      G = I[0],
      Z = 1;
    while (Z < I.length) {
      let C = I[Z],
        W = I[Z + 1];
      if (Z += 2, (C === "optionalAccess" || C === "optionalCall") && G == null) return;
      if (C === "access" || C === "optionalAccess") d = G, G = W(G);
      else if (C === "call" || C === "optionalCall") G = W((...w) => G.call(d, ...w)), d = void 0
    }
    return G
  }
  Mf1._optionalChain = YP2
})
// @from(Start 74095, End 74322)
Lf1 = Y((Sf1) => {
  Object.defineProperty(Sf1, "__esModule", {
    value: !0
  });
  var DP2 = it();

  function HP2(I) {
    let d = DP2._optionalChain(I);
    return d == null ? !0 : d
  }
  Sf1._optionalChainDelete = HP2
})
// @from(Start 74328, End 74547)
Pf1 = Y((yf1) => {
  Object.defineProperty(yf1, "__esModule", {
    value: !0
  });

  function gP2(I) {
    return I.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
  }
  yf1.escapeStringForRegex = gP2
})
// @from(Start 74553, End 83518)
V0 = Y((et) => {
  Object.defineProperty(et, "__esModule", {
    value: !0
  });
  var KP2 = Cz1(),
    zO = se(),
    nt = It(),
    NP2 = dt(),
    rt = K7(),
    zP2 = WQ1(),
    N7 = xG(),
    QP2 = XQ1(),
    QO = DC(),
    fP2 = St(),
    xX = Qv(),
    at = Mt(),
    fO = Uv(),
    fA = cG(),
    YF = QQ1(),
    qP2 = RQ1(),
    _F = $Q1(),
    st = mQ1(),
    Ev = CO(),
    Mv = Nv(),
    cX = Ht(),
    ot = Pt(),
    Sv = Ot(),
    Lv = sQ1(),
    $f1 = Et(),
    Ww = jt(),
    RP2 = df1(),
    yv = wf1(),
    BN = lt(),
    qO = ut(),
    UP2 = Xf1(),
    vP2 = _f1(),
    RO = gf1(),
    uf1 = Kf1(),
    EP2 = Qf1(),
    MP2 = Rf1(),
    SP2 = pt(),
    LP2 = Ef1(),
    yP2 = ct(),
    PP2 = it(),
    $P2 = Lf1(),
    uP2 = wt(),
    TP2 = Yt(),
    Tf1 = Ut(),
    OP2 = gt(),
    mP2 = Rt(),
    lP2 = Nt(),
    bP2 = ft(),
    hP2 = zA(),
    jP2 = ZO(),
    kP2 = Pf1(),
    xP2 = qt();
  et.applyAggregateErrorsToEvent = KP2.applyAggregateErrorsToEvent;
  et.getComponentName = zO.getComponentName;
  et.getDomElement = zO.getDomElement;
  et.getLocationHref = zO.getLocationHref;
  et.htmlTreeAsString = zO.htmlTreeAsString;
  et.dsnFromString = nt.dsnFromString;
  et.dsnToString = nt.dsnToString;
  et.makeDsn = nt.makeDsn;
  et.SentryError = NP2.SentryError;
  et.GLOBAL_OBJ = rt.GLOBAL_OBJ;
  et.getGlobalObject = rt.getGlobalObject;
  et.getGlobalSingleton = rt.getGlobalSingleton;
  et.addInstrumentationHandler = zP2.addInstrumentationHandler;
  et.isDOMError = N7.isDOMError;
  et.isDOMException = N7.isDOMException;
  et.isElement = N7.isElement;
  et.isError = N7.isError;
  et.isErrorEvent = N7.isErrorEvent;
  et.isEvent = N7.isEvent;
  et.isInstanceOf = N7.isInstanceOf;
  et.isNaN = N7.isNaN;
  et.isParameterizedString = N7.isParameterizedString;
  et.isPlainObject = N7.isPlainObject;
  et.isPrimitive = N7.isPrimitive;
  et.isRegExp = N7.isRegExp;
  et.isString = N7.isString;
  et.isSyntheticEvent = N7.isSyntheticEvent;
  et.isThenable = N7.isThenable;
  et.isVueViewModel = N7.isVueViewModel;
  et.isBrowser = QP2.isBrowser;
  et.CONSOLE_LEVELS = QO.CONSOLE_LEVELS;
  et.consoleSandbox = QO.consoleSandbox;
  et.logger = QO.logger;
  et.originalConsoleMethods = QO.originalConsoleMethods;
  et.memoBuilder = fP2.memoBuilder;
  et.addContextToFrame = xX.addContextToFrame;
  et.addExceptionMechanism = xX.addExceptionMechanism;
  et.addExceptionTypeValue = xX.addExceptionTypeValue;
  et.arrayify = xX.arrayify;
  et.checkOrSetAlreadyCaught = xX.checkOrSetAlreadyCaught;
  et.getEventDescription = xX.getEventDescription;
  et.parseSemver = xX.parseSemver;
  et.uuid4 = xX.uuid4;
  et.dynamicRequire = at.dynamicRequire;
  et.isNodeEnv = at.isNodeEnv;
  et.loadModule = at.loadModule;
  et.normalize = fO.normalize;
  et.normalizeToSize = fO.normalizeToSize;
  et.normalizeUrlToBase = fO.normalizeUrlToBase;
  et.walk = fO.walk;
  et.addNonEnumerableProperty = fA.addNonEnumerableProperty;
  et.convertToPlainObject = fA.convertToPlainObject;
  et.dropUndefinedKeys = fA.dropUndefinedKeys;
  et.extractExceptionKeysForMessage = fA.extractExceptionKeysForMessage;
  et.fill = fA.fill;
  et.getOriginalFunction = fA.getOriginalFunction;
  et.markFunctionWrapped = fA.markFunctionWrapped;
  et.objectify = fA.objectify;
  et.urlEncode = fA.urlEncode;
  et.basename = YF.basename;
  et.dirname = YF.dirname;
  et.isAbsolute = YF.isAbsolute;
  et.join = YF.join;
  et.normalizePath = YF.normalizePath;
  et.relative = YF.relative;
  et.resolve = YF.resolve;
  et.makePromiseBuffer = qP2.makePromiseBuffer;
  et.DEFAULT_USER_INCLUDES = _F.DEFAULT_USER_INCLUDES;
  et.addRequestDataToEvent = _F.addRequestDataToEvent;
  et.addRequestDataToTransaction = _F.addRequestDataToTransaction;
  et.extractPathForTransaction = _F.extractPathForTransaction;
  et.extractRequestData = _F.extractRequestData;
  et.winterCGHeadersToDict = _F.winterCGHeadersToDict;
  et.winterCGRequestToRequestData = _F.winterCGRequestToRequestData;
  et.severityFromString = st.severityFromString;
  et.severityLevelFromString = st.severityLevelFromString;
  et.validSeverityLevels = st.validSeverityLevels;
  et.createStackParser = Ev.createStackParser;
  et.getFunctionName = Ev.getFunctionName;
  et.nodeStackLineParser = Ev.nodeStackLineParser;
  et.stackParserFromStackParserOptions = Ev.stackParserFromStackParserOptions;
  et.stripSentryFramesAndReverse = Ev.stripSentryFramesAndReverse;
  et.isMatchingPattern = Mv.isMatchingPattern;
  et.safeJoin = Mv.safeJoin;
  et.snipLine = Mv.snipLine;
  et.stringMatchesSomePattern = Mv.stringMatchesSomePattern;
  et.truncate = Mv.truncate;
  et.isNativeFetch = cX.isNativeFetch;
  et.supportsDOMError = cX.supportsDOMError;
  et.supportsDOMException = cX.supportsDOMException;
  et.supportsErrorEvent = cX.supportsErrorEvent;
  et.supportsFetch = cX.supportsFetch;
  et.supportsNativeFetch = cX.supportsNativeFetch;
  et.supportsReferrerPolicy = cX.supportsReferrerPolicy;
  et.supportsReportingObserver = cX.supportsReportingObserver;
  et.SyncPromise = ot.SyncPromise;
  et.rejectedSyncPromise = ot.rejectedSyncPromise;
  et.resolvedSyncPromise = ot.resolvedSyncPromise;
  Object.defineProperty(et, "_browserPerformanceTimeOriginMode", {
    enumerable: !0,
    get: () => Sv._browserPerformanceTimeOriginMode
  });
  et.browserPerformanceTimeOrigin = Sv.browserPerformanceTimeOrigin;
  et.dateTimestampInSeconds = Sv.dateTimestampInSeconds;
  et.timestampInSeconds = Sv.timestampInSeconds;
  et.timestampWithMs = Sv.timestampWithMs;
  et.TRACEPARENT_REGEXP = Lv.TRACEPARENT_REGEXP;
  et.extractTraceparentData = Lv.extractTraceparentData;
  et.generateSentryTraceHeader = Lv.generateSentryTraceHeader;
  et.propagationContextFromHeaders = Lv.propagationContextFromHeaders;
  et.tracingContextFromHeaders = Lv.tracingContextFromHeaders;
  et.getSDKSource = $f1.getSDKSource;
  et.isBrowserBundle = $f1.isBrowserBundle;
  et.addItemToEnvelope = Ww.addItemToEnvelope;
  et.createAttachmentEnvelopeItem = Ww.createAttachmentEnvelopeItem;
  et.createEnvelope = Ww.createEnvelope;
  et.createEventEnvelopeHeaders = Ww.createEventEnvelopeHeaders;
  et.envelopeContainsItemType = Ww.envelopeContainsItemType;
  et.envelopeItemTypeToDataCategory = Ww.envelopeItemTypeToDataCategory;
  et.forEachEnvelopeItem = Ww.forEachEnvelopeItem;
  et.getSdkMetadataForEnvelopeHeader = Ww.getSdkMetadataForEnvelopeHeader;
  et.parseEnvelope = Ww.parseEnvelope;
  et.serializeEnvelope = Ww.serializeEnvelope;
  et.createClientReportEnvelope = RP2.createClientReportEnvelope;
  et.DEFAULT_RETRY_AFTER = yv.DEFAULT_RETRY_AFTER;
  et.disabledUntil = yv.disabledUntil;
  et.isRateLimited = yv.isRateLimited;
  et.parseRetryAfterHeader = yv.parseRetryAfterHeader;
  et.updateRateLimits = yv.updateRateLimits;
  et.BAGGAGE_HEADER_NAME = BN.BAGGAGE_HEADER_NAME;
  et.MAX_BAGGAGE_STRING_LENGTH = BN.MAX_BAGGAGE_STRING_LENGTH;
  et.SENTRY_BAGGAGE_KEY_PREFIX = BN.SENTRY_BAGGAGE_KEY_PREFIX;
  et.SENTRY_BAGGAGE_KEY_PREFIX_REGEX = BN.SENTRY_BAGGAGE_KEY_PREFIX_REGEX;
  et.baggageHeaderToDynamicSamplingContext = BN.baggageHeaderToDynamicSamplingContext;
  et.dynamicSamplingContextToSentryBaggageHeader = BN.dynamicSamplingContextToSentryBaggageHeader;
  et.getNumberOfUrlSegments = qO.getNumberOfUrlSegments;
  et.getSanitizedUrlString = qO.getSanitizedUrlString;
  et.parseUrl = qO.parseUrl;
  et.stripUrlQueryAndFragment = qO.stripUrlQueryAndFragment;
  et.addOrUpdateIntegration = UP2.addOrUpdateIntegration;
  et.makeFifoCache = vP2.makeFifoCache;
  et.eventFromMessage = RO.eventFromMessage;
  et.eventFromUnknownInput = RO.eventFromUnknownInput;
  et.exceptionFromError = RO.exceptionFromError;
  et.parseStackFrames = RO.parseStackFrames;
  et.callFrameToStackFrame = uf1.callFrameToStackFrame;
  et.watchdogTimer = uf1.watchdogTimer;
  et.LRUMap = EP2.LRUMap;
  et._asyncNullishCoalesce = MP2._asyncNullishCoalesce;
  et._asyncOptionalChain = SP2._asyncOptionalChain;
  et._asyncOptionalChainDelete = LP2._asyncOptionalChainDelete;
  et._nullishCoalesce = yP2._nullishCoalesce;
  et._optionalChain = PP2._optionalChain;
  et._optionalChainDelete = $P2._optionalChainDelete;
  et.addConsoleInstrumentationHandler = uP2.addConsoleInstrumentationHandler;
  et.addClickKeypressInstrumentationHandler = TP2.addClickKeypressInstrumentationHandler;
  et.SENTRY_XHR_DATA_KEY = Tf1.SENTRY_XHR_DATA_KEY;
  et.addXhrInstrumentationHandler = Tf1.addXhrInstrumentationHandler;
  et.addFetchInstrumentationHandler = OP2.addFetchInstrumentationHandler;
  et.addHistoryInstrumentationHandler = mP2.addHistoryInstrumentationHandler;
  et.addGlobalErrorInstrumentationHandler = lP2.addGlobalErrorInstrumentationHandler;
  et.addGlobalUnhandledRejectionInstrumentationHandler = bP2.addGlobalUnhandledRejectionInstrumentationHandler;
  et.resetInstrumentationHandlers = hP2.resetInstrumentationHandlers;
  et.filenameIsInApp = jP2.filenameIsInApp;
  et.escapeStringForRegex = kP2.escapeStringForRegex;
  et.supportsHistory = xP2.supportsHistory
})
// @from(Start 83524, End 83706)
F6 = Y((Of1) => {
  Object.defineProperty(Of1, "__esModule", {
    value: !0
  });
  var cT2 = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
  Of1.DEBUG_BUILD = cT2
})
// @from(Start 83712, End 83855)
AN = Y((mf1) => {
  Object.defineProperty(mf1, "__esModule", {
    value: !0
  });
  var iT2 = "production";
  mf1.DEFAULT_ENVIRONMENT = iT2
})
// @from(Start 83861, End 84694)
Pv = Y((bf1) => {
  Object.defineProperty(bf1, "__esModule", {
    value: !0
  });
  var UO = V0(),
    rT2 = F6();

  function lf1() {
    return UO.getGlobalSingleton("globalEventProcessors", () => [])
  }

  function aT2(I) {
    lf1().push(I)
  }

  function tt(I, d, G, Z = 0) {
    return new UO.SyncPromise((C, W) => {
      let w = I[Z];
      if (d === null || typeof w !== "function") C(d);
      else {
        let B = w({
          ...d
        }, G);
        if (rT2.DEBUG_BUILD && w.id && B === null && UO.logger.log(`Event processor "${w.id}" dropped event`), UO.isThenable(B)) B.then((A) => tt(I, A, G, Z + 1).then(C)).then(null, W);
        else tt(I, B, G, Z + 1).then(C).then(null, W)
      }
    })
  }
  bf1.addGlobalEventProcessor = aT2;
  bf1.getGlobalEventProcessors = lf1;
  bf1.notifyEventProcessors = tt
})
// @from(Start 84700, End 87111)
VN = Y((hf1) => {
  Object.defineProperty(hf1, "__esModule", {
    value: !0
  });
  var $v = V0();

  function tT2(I) {
    let d = $v.timestampInSeconds(),
      G = {
        sid: $v.uuid4(),
        init: !0,
        timestamp: d,
        started: d,
        duration: 0,
        status: "ok",
        errors: 0,
        ignoreDuration: !1,
        toJSON: () => dO2(G)
      };
    if (I) I11(G, I);
    return G
  }

  function I11(I, d = {}) {
    if (d.user) {
      if (!I.ipAddress && d.user.ip_address) I.ipAddress = d.user.ip_address;
      if (!I.did && !d.did) I.did = d.user.id || d.user.email || d.user.username
    }
    if (I.timestamp = d.timestamp || $v.timestampInSeconds(), d.abnormal_mechanism) I.abnormal_mechanism = d.abnormal_mechanism;
    if (d.ignoreDuration) I.ignoreDuration = d.ignoreDuration;
    if (d.sid) I.sid = d.sid.length === 32 ? d.sid : $v.uuid4();
    if (d.init !== void 0) I.init = d.init;
    if (!I.did && d.did) I.did = `${d.did}`;
    if (typeof d.started === "number") I.started = d.started;
    if (I.ignoreDuration) I.duration = void 0;
    else if (typeof d.duration === "number") I.duration = d.duration;
    else {
      let G = I.timestamp - I.started;
      I.duration = G >= 0 ? G : 0
    }
    if (d.release) I.release = d.release;
    if (d.environment) I.environment = d.environment;
    if (!I.ipAddress && d.ipAddress) I.ipAddress = d.ipAddress;
    if (!I.userAgent && d.userAgent) I.userAgent = d.userAgent;
    if (typeof d.errors === "number") I.errors = d.errors;
    if (d.status) I.status = d.status
  }

  function IO2(I, d) {
    let G = {};
    if (d) G = {
      status: d
    };
    else if (I.status === "ok") G = {
      status: "exited"
    };
    I11(I, G)
  }

  function dO2(I) {
    return $v.dropUndefinedKeys({
      sid: `${I.sid}`,
      init: I.init,
      started: new Date(I.started * 1000).toISOString(),
      timestamp: new Date(I.timestamp * 1000).toISOString(),
      status: I.status,
      errors: I.errors,
      did: typeof I.did === "number" || typeof I.did === "string" ? `${I.did}` : void 0,
      duration: I.duration,
      abnormal_mechanism: I.abnormal_mechanism,
      attrs: {
        release: I.release,
        environment: I.environment,
        ip_address: I.ipAddress,
        user_agent: I.userAgent
      }
    })
  }
  hf1.closeSession = IO2;
  hf1.makeSession = tT2;
  hf1.updateSession = I11
})
// @from(Start 87117, End 88600)
kI = Y((pf1) => {
  Object.defineProperty(pf1, "__esModule", {
    value: !0
  });
  var d11 = V0(),
    WO2 = 0,
    kf1 = 1;

  function wO2(I) {
    let {
      spanId: d,
      traceId: G
    } = I.spanContext(), {
      data: Z,
      op: C,
      parent_span_id: W,
      status: w,
      tags: B,
      origin: A
    } = xf1(I);
    return d11.dropUndefinedKeys({
      data: Z,
      op: C,
      parent_span_id: W,
      span_id: d,
      status: w,
      tags: B,
      trace_id: G,
      origin: A
    })
  }

  function BO2(I) {
    let {
      traceId: d,
      spanId: G
    } = I.spanContext(), Z = cf1(I);
    return d11.generateSentryTraceHeader(d, G, Z)
  }

  function AO2(I) {
    if (typeof I === "number") return jf1(I);
    if (Array.isArray(I)) return I[0] + I[1] / 1e9;
    if (I instanceof Date) return jf1(I.getTime());
    return d11.timestampInSeconds()
  }

  function jf1(I) {
    return I > 9999999999 ? I / 1000 : I
  }

  function xf1(I) {
    if (VO2(I)) return I.getSpanJSON();
    if (typeof I.toJSON === "function") return I.toJSON();
    return {}
  }

  function VO2(I) {
    return typeof I.getSpanJSON === "function"
  }

  function cf1(I) {
    let {
      traceFlags: d
    } = I.spanContext();
    return Boolean(d & kf1)
  }
  pf1.TRACE_FLAG_NONE = WO2;
  pf1.TRACE_FLAG_SAMPLED = kf1;
  pf1.spanIsSampled = cf1;
  pf1.spanTimeInputToSeconds = AO2;
  pf1.spanToJSON = xf1;
  pf1.spanToTraceContext = wO2;
  pf1.spanToTraceHeader = BO2
})
// @from(Start 88606, End 93616)
vO = Y((sf1) => {
  Object.defineProperty(sf1, "__esModule", {
    value: !0
  });
  var jd = V0(),
    JO2 = AN(),
    if1 = Pv(),
    Z11 = MO(),
    G11 = EO(),
    KO2 = kI();

  function NO2(I, d, G, Z, C, W) {
    let {
      normalizeDepth: w = 3,
      normalizeMaxBreadth: B = 1000
    } = I, A = {
      ...d,
      event_id: d.event_id || G.event_id || jd.uuid4(),
      timestamp: d.timestamp || jd.dateTimestampInSeconds()
    }, V = G.integrations || I.integrations.map((Q) => Q.name);
    if (zO2(A, I), QO2(A, V), d.type === void 0) rf1(A, I.stackParser);
    let X = qO2(Z, G.captureContext);
    if (G.mechanism) jd.addExceptionMechanism(A, G.mechanism);
    let _ = C && C.getEventProcessors ? C.getEventProcessors() : [],
      F = Z11.getGlobalScope().getScopeData();
    if (W) {
      let Q = W.getScopeData();
      G11.mergeScopeData(F, Q)
    }
    if (X) {
      let Q = X.getScopeData();
      G11.mergeScopeData(F, Q)
    }
    let g = [...G.attachments || [], ...F.attachments];
    if (g.length) G.attachments = g;
    G11.applyScopeDataToEvent(A, F);
    let J = [..._, ...if1.getGlobalEventProcessors(), ...F.eventProcessors];
    return if1.notifyEventProcessors(J, A, G).then((Q) => {
      if (Q) af1(Q);
      if (typeof w === "number" && w > 0) return fO2(Q, w, B);
      return Q
    })
  }

  function zO2(I, d) {
    let {
      environment: G,
      release: Z,
      dist: C,
      maxValueLength: W = 250
    } = d;
    if (!("environment" in I)) I.environment = "environment" in d ? G : JO2.DEFAULT_ENVIRONMENT;
    if (I.release === void 0 && Z !== void 0) I.release = Z;
    if (I.dist === void 0 && C !== void 0) I.dist = C;
    if (I.message) I.message = jd.truncate(I.message, W);
    let w = I.exception && I.exception.values && I.exception.values[0];
    if (w && w.value) w.value = jd.truncate(w.value, W);
    let B = I.request;
    if (B && B.url) B.url = jd.truncate(B.url, W)
  }
  var nf1 = new WeakMap;

  function rf1(I, d) {
    let G = jd.GLOBAL_OBJ._sentryDebugIds;
    if (!G) return;
    let Z, C = nf1.get(d);
    if (C) Z = C;
    else Z = new Map, nf1.set(d, Z);
    let W = Object.keys(G).reduce((w, B) => {
      let A, V = Z.get(B);
      if (V) A = V;
      else A = d(B), Z.set(B, A);
      for (let X = A.length - 1; X >= 0; X--) {
        let _ = A[X];
        if (_.filename) {
          w[_.filename] = G[B];
          break
        }
      }
      return w
    }, {});
    try {
      I.exception.values.forEach((w) => {
        w.stacktrace.frames.forEach((B) => {
          if (B.filename) B.debug_id = W[B.filename]
        })
      })
    } catch (w) {}
  }

  function af1(I) {
    let d = {};
    try {
      I.exception.values.forEach((Z) => {
        Z.stacktrace.frames.forEach((C) => {
          if (C.debug_id) {
            if (C.abs_path) d[C.abs_path] = C.debug_id;
            else if (C.filename) d[C.filename] = C.debug_id;
            delete C.debug_id
          }
        })
      })
    } catch (Z) {}
    if (Object.keys(d).length === 0) return;
    I.debug_meta = I.debug_meta || {}, I.debug_meta.images = I.debug_meta.images || [];
    let G = I.debug_meta.images;
    Object.keys(d).forEach((Z) => {
      G.push({
        type: "sourcemap",
        code_file: Z,
        debug_id: d[Z]
      })
    })
  }

  function QO2(I, d) {
    if (d.length > 0) I.sdk = I.sdk || {}, I.sdk.integrations = [...I.sdk.integrations || [], ...d]
  }

  function fO2(I, d, G) {
    if (!I) return null;
    let Z = {
      ...I,
      ...I.breadcrumbs && {
        breadcrumbs: I.breadcrumbs.map((C) => ({
          ...C,
          ...C.data && {
            data: jd.normalize(C.data, d, G)
          }
        }))
      },
      ...I.user && {
        user: jd.normalize(I.user, d, G)
      },
      ...I.contexts && {
        contexts: jd.normalize(I.contexts, d, G)
      },
      ...I.extra && {
        extra: jd.normalize(I.extra, d, G)
      }
    };
    if (I.contexts && I.contexts.trace && Z.contexts) {
      if (Z.contexts.trace = I.contexts.trace, I.contexts.trace.data) Z.contexts.trace.data = jd.normalize(I.contexts.trace.data, d, G)
    }
    if (I.spans) Z.spans = I.spans.map((C) => {
      let W = KO2.spanToJSON(C).data;
      if (W) C.data = jd.normalize(W, d, G);
      return C
    });
    return Z
  }

  function qO2(I, d) {
    if (!d) return I;
    let G = I ? I.clone() : new Z11.Scope;
    return G.update(d), G
  }

  function RO2(I) {
    if (!I) return;
    if (UO2(I)) return {
      captureContext: I
    };
    if (EO2(I)) return {
      captureContext: I
    };
    return I
  }

  function UO2(I) {
    return I instanceof Z11.Scope || typeof I === "function"
  }
  var vO2 = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"];

  function EO2(I) {
    return Object.keys(I).some((d) => vO2.includes(d))
  }
  sf1.applyDebugIds = rf1;
  sf1.applyDebugMeta = af1;
  sf1.parseEventHintOrCaptureContext = RO2;
  sf1.prepareEvent = NO2
})
// @from(Start 93622, End 98569)
iG = Y((tf1) => {
  Object.defineProperty(tf1, "__esModule", {
    value: !0
  });
  var qA = V0(),
    PO2 = AN(),
    SO = F6(),
    I6 = ww(),
    C11 = VN(),
    $O2 = vO();

  function uO2(I, d) {
    return I6.getCurrentHub().captureException(I, $O2.parseEventHintOrCaptureContext(d))
  }

  function TO2(I, d) {
    let G = typeof d === "string" ? d : void 0,
      Z = typeof d !== "string" ? {
        captureContext: d
      } : void 0;
    return I6.getCurrentHub().captureMessage(I, G, Z)
  }

  function OO2(I, d) {
    return I6.getCurrentHub().captureEvent(I, d)
  }

  function mO2(I) {
    I6.getCurrentHub().configureScope(I)
  }

  function lO2(I, d) {
    I6.getCurrentHub().addBreadcrumb(I, d)
  }

  function bO2(I, d) {
    I6.getCurrentHub().setContext(I, d)
  }

  function hO2(I) {
    I6.getCurrentHub().setExtras(I)
  }

  function jO2(I, d) {
    I6.getCurrentHub().setExtra(I, d)
  }

  function kO2(I) {
    I6.getCurrentHub().setTags(I)
  }

  function xO2(I, d) {
    I6.getCurrentHub().setTag(I, d)
  }

  function cO2(I) {
    I6.getCurrentHub().setUser(I)
  }

  function of1(...I) {
    let d = I6.getCurrentHub();
    if (I.length === 2) {
      let [G, Z] = I;
      if (!G) return d.withScope(Z);
      return d.withScope(() => {
        return d.getStackTop().scope = G, Z(G)
      })
    }
    return d.withScope(I[0])
  }

  function pO2(I) {
    return I6.runWithAsyncContext(() => {
      return I(I6.getIsolationScope())
    })
  }

  function iO2(I, d) {
    return of1((G) => {
      return G.setSpan(I), d(G)
    })
  }

  function nO2(I, d) {
    return I6.getCurrentHub().startTransaction({
      ...I
    }, d)
  }

  function W11(I, d) {
    let G = uv(),
      Z = DF();
    if (!Z) SO.DEBUG_BUILD && qA.logger.warn("Cannot capture check-in. No client defined.");
    else if (!Z.captureCheckIn) SO.DEBUG_BUILD && qA.logger.warn("Cannot capture check-in. Client does not support sending check-ins.");
    else return Z.captureCheckIn(I, d, G);
    return qA.uuid4()
  }

  function rO2(I, d, G) {
    let Z = W11({
        monitorSlug: I,
        status: "in_progress"
      }, G),
      C = qA.timestampInSeconds();

    function W(B) {
      W11({
        monitorSlug: I,
        status: B,
        checkInId: Z,
        duration: qA.timestampInSeconds() - C
      })
    }
    let w;
    try {
      w = d()
    } catch (B) {
      throw W("error"), B
    }
    if (qA.isThenable(w)) Promise.resolve(w).then(() => {
      W("ok")
    }, () => {
      W("error")
    });
    else W("ok");
    return w
  }
  async function aO2(I) {
    let d = DF();
    if (d) return d.flush(I);
    return SO.DEBUG_BUILD && qA.logger.warn("Cannot flush events. No client defined."), Promise.resolve(!1)
  }
  async function sO2(I) {
    let d = DF();
    if (d) return d.close(I);
    return SO.DEBUG_BUILD && qA.logger.warn("Cannot flush events and disable SDK. No client defined."), Promise.resolve(!1)
  }

  function oO2() {
    return I6.getCurrentHub().lastEventId()
  }

  function DF() {
    return I6.getCurrentHub().getClient()
  }

  function eO2() {
    return !!DF()
  }

  function uv() {
    return I6.getCurrentHub().getScope()
  }

  function tO2(I) {
    let d = DF(),
      G = I6.getIsolationScope(),
      Z = uv(),
      {
        release: C,
        environment: W = PO2.DEFAULT_ENVIRONMENT
      } = d && d.getOptions() || {},
      {
        userAgent: w
      } = qA.GLOBAL_OBJ.navigator || {},
      B = C11.makeSession({
        release: C,
        environment: W,
        user: Z.getUser() || G.getUser(),
        ...w && {
          userAgent: w
        },
        ...I
      }),
      A = G.getSession();
    if (A && A.status === "ok") C11.updateSession(A, {
      status: "exited"
    });
    return w11(), G.setSession(B), Z.setSession(B), B
  }

  function w11() {
    let I = I6.getIsolationScope(),
      d = uv(),
      G = d.getSession() || I.getSession();
    if (G) C11.closeSession(G);
    ef1(), I.setSession(), d.setSession()
  }

  function ef1() {
    let I = I6.getIsolationScope(),
      d = uv(),
      G = DF(),
      Z = d.getSession() || I.getSession();
    if (Z && G && G.captureSession) G.captureSession(Z)
  }

  function Im2(I = !1) {
    if (I) {
      w11();
      return
    }
    ef1()
  }
  tf1.addBreadcrumb = lO2;
  tf1.captureCheckIn = W11;
  tf1.captureEvent = OO2;
  tf1.captureException = uO2;
  tf1.captureMessage = TO2;
  tf1.captureSession = Im2;
  tf1.close = sO2;
  tf1.configureScope = mO2;
  tf1.endSession = w11;
  tf1.flush = aO2;
  tf1.getClient = DF;
  tf1.getCurrentScope = uv;
  tf1.isInitialized = eO2;
  tf1.lastEventId = oO2;
  tf1.setContext = bO2;
  tf1.setExtra = jO2;
  tf1.setExtras = hO2;
  tf1.setTag = xO2;
  tf1.setTags = kO2;
  tf1.setUser = cO2;
  tf1.startSession = tO2;
  tf1.startTransaction = nO2;
  tf1.withActiveSpan = iO2;
  tf1.withIsolationScope = pO2;
  tf1.withMonitor = rO2;
  tf1.withScope = of1
})
// @from(Start 98575, End 98734)
XN = Y((Iq1) => {
  Object.defineProperty(Iq1, "__esModule", {
    value: !0
  });

  function Em2(I) {
    return I.transaction
  }
  Iq1.getRootSpan = Em2
})