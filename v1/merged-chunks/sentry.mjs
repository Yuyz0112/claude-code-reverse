
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
// @from(Start 98740, End 99993)
HF = Y((Zq1) => {
  Object.defineProperty(Zq1, "__esModule", {
    value: !0
  });
  var Sm2 = V0(),
    Lm2 = AN(),
    dq1 = iG(),
    ym2 = XN(),
    B11 = kI();

  function Gq1(I, d, G) {
    let Z = d.getOptions(),
      {
        publicKey: C
      } = d.getDsn() || {},
      {
        segment: W
      } = G && G.getUser() || {},
      w = Sm2.dropUndefinedKeys({
        environment: Z.environment || Lm2.DEFAULT_ENVIRONMENT,
        release: Z.release,
        user_segment: W,
        public_key: C,
        trace_id: I
      });
    return d.emit && d.emit("createDsc", w), w
  }

  function Pm2(I) {
    let d = dq1.getClient();
    if (!d) return {};
    let G = Gq1(B11.spanToJSON(I).trace_id || "", d, dq1.getCurrentScope()),
      Z = ym2.getRootSpan(I);
    if (!Z) return G;
    let C = Z && Z._frozenDynamicSamplingContext;
    if (C) return C;
    let {
      sampleRate: W,
      source: w
    } = Z.metadata;
    if (W != null) G.sample_rate = `${W}`;
    let B = B11.spanToJSON(Z);
    if (w && w !== "url") G.transaction = B.description;
    return G.sampled = String(B11.spanIsSampled(Z)), d.emit && d.emit("createDsc", G), G
  }
  Zq1.getDynamicSamplingContextFromClient = Gq1;
  Zq1.getDynamicSamplingContextFromSpan = Pm2
})
// @from(Start 99999, End 103068)
EO = Y((Wq1) => {
  Object.defineProperty(Wq1, "__esModule", {
    value: !0
  });
  var Tv = V0(),
    Tm2 = HF(),
    Om2 = XN(),
    Cq1 = kI();

  function mm2(I, d) {
    let {
      fingerprint: G,
      span: Z,
      breadcrumbs: C,
      sdkProcessingMetadata: W
    } = d;
    if (bm2(I, d), Z) km2(I, Z);
    xm2(I, G), hm2(I, C), jm2(I, W)
  }

  function lm2(I, d) {
    let {
      extra: G,
      tags: Z,
      user: C,
      contexts: W,
      level: w,
      sdkProcessingMetadata: B,
      breadcrumbs: A,
      fingerprint: V,
      eventProcessors: X,
      attachments: _,
      propagationContext: F,
      transactionName: g,
      span: J
    } = d;
    if (YN(I, "extra", G), YN(I, "tags", Z), YN(I, "user", C), YN(I, "contexts", W), YN(I, "sdkProcessingMetadata", B), w) I.level = w;
    if (g) I.transactionName = g;
    if (J) I.span = J;
    if (A.length) I.breadcrumbs = [...I.breadcrumbs, ...A];
    if (V.length) I.fingerprint = [...I.fingerprint, ...V];
    if (X.length) I.eventProcessors = [...I.eventProcessors, ...X];
    if (_.length) I.attachments = [...I.attachments, ..._];
    I.propagationContext = {
      ...I.propagationContext,
      ...F
    }
  }

  function YN(I, d, G) {
    if (G && Object.keys(G).length) {
      I[d] = {
        ...I[d]
      };
      for (let Z in G)
        if (Object.prototype.hasOwnProperty.call(G, Z)) I[d][Z] = G[Z]
    }
  }

  function bm2(I, d) {
    let {
      extra: G,
      tags: Z,
      user: C,
      contexts: W,
      level: w,
      transactionName: B
    } = d, A = Tv.dropUndefinedKeys(G);
    if (A && Object.keys(A).length) I.extra = {
      ...A,
      ...I.extra
    };
    let V = Tv.dropUndefinedKeys(Z);
    if (V && Object.keys(V).length) I.tags = {
      ...V,
      ...I.tags
    };
    let X = Tv.dropUndefinedKeys(C);
    if (X && Object.keys(X).length) I.user = {
      ...X,
      ...I.user
    };
    let _ = Tv.dropUndefinedKeys(W);
    if (_ && Object.keys(_).length) I.contexts = {
      ..._,
      ...I.contexts
    };
    if (w) I.level = w;
    if (B) I.transaction = B
  }

  function hm2(I, d) {
    let G = [...I.breadcrumbs || [], ...d];
    I.breadcrumbs = G.length ? G : void 0
  }

  function jm2(I, d) {
    I.sdkProcessingMetadata = {
      ...I.sdkProcessingMetadata,
      ...d
    }
  }

  function km2(I, d) {
    I.contexts = {
      trace: Cq1.spanToTraceContext(d),
      ...I.contexts
    };
    let G = Om2.getRootSpan(d);
    if (G) {
      I.sdkProcessingMetadata = {
        dynamicSamplingContext: Tm2.getDynamicSamplingContextFromSpan(d),
        ...I.sdkProcessingMetadata
      };
      let Z = Cq1.spanToJSON(G).description;
      if (Z) I.tags = {
        transaction: Z,
        ...I.tags
      }
    }
  }

  function xm2(I, d) {
    if (I.fingerprint = I.fingerprint ? Tv.arrayify(I.fingerprint) : [], d) I.fingerprint = I.fingerprint.concat(d);
    if (I.fingerprint && !I.fingerprint.length) delete I.fingerprint
  }
  Wq1.applyScopeDataToEvent = mm2;
  Wq1.mergeAndOverwriteScopeData = YN;
  Wq1.mergeScopeData = lm2
})
// @from(Start 103074, End 111879)
MO = Y((Aq1) => {
  Object.defineProperty(Aq1, "__esModule", {
    value: !0
  });
  var Bw = V0(),
    wq1 = Pv(),
    nm2 = VN(),
    rm2 = EO(),
    am2 = 100,
    LO;
  class _N {
    constructor() {
      this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = Bq1()
    }
    static clone(I) {
      return I ? I.clone() : new _N
    }
    clone() {
      let I = new _N;
      return I._breadcrumbs = [...this._breadcrumbs], I._tags = {
        ...this._tags
      }, I._extra = {
        ...this._extra
      }, I._contexts = {
        ...this._contexts
      }, I._user = this._user, I._level = this._level, I._span = this._span, I._session = this._session, I._transactionName = this._transactionName, I._fingerprint = this._fingerprint, I._eventProcessors = [...this._eventProcessors], I._requestSession = this._requestSession, I._attachments = [...this._attachments], I._sdkProcessingMetadata = {
        ...this._sdkProcessingMetadata
      }, I._propagationContext = {
        ...this._propagationContext
      }, I._client = this._client, I
    }
    setClient(I) {
      this._client = I
    }
    getClient() {
      return this._client
    }
    addScopeListener(I) {
      this._scopeListeners.push(I)
    }
    addEventProcessor(I) {
      return this._eventProcessors.push(I), this
    }
    setUser(I) {
      if (this._user = I || {
          email: void 0,
          id: void 0,
          ip_address: void 0,
          segment: void 0,
          username: void 0
        }, this._session) nm2.updateSession(this._session, {
        user: I
      });
      return this._notifyScopeListeners(), this
    }
    getUser() {
      return this._user
    }
    getRequestSession() {
      return this._requestSession
    }
    setRequestSession(I) {
      return this._requestSession = I, this
    }
    setTags(I) {
      return this._tags = {
        ...this._tags,
        ...I
      }, this._notifyScopeListeners(), this
    }
    setTag(I, d) {
      return this._tags = {
        ...this._tags,
        [I]: d
      }, this._notifyScopeListeners(), this
    }
    setExtras(I) {
      return this._extra = {
        ...this._extra,
        ...I
      }, this._notifyScopeListeners(), this
    }
    setExtra(I, d) {
      return this._extra = {
        ...this._extra,
        [I]: d
      }, this._notifyScopeListeners(), this
    }
    setFingerprint(I) {
      return this._fingerprint = I, this._notifyScopeListeners(), this
    }
    setLevel(I) {
      return this._level = I, this._notifyScopeListeners(), this
    }
    setTransactionName(I) {
      return this._transactionName = I, this._notifyScopeListeners(), this
    }
    setContext(I, d) {
      if (d === null) delete this._contexts[I];
      else this._contexts[I] = d;
      return this._notifyScopeListeners(), this
    }
    setSpan(I) {
      return this._span = I, this._notifyScopeListeners(), this
    }
    getSpan() {
      return this._span
    }
    getTransaction() {
      let I = this._span;
      return I && I.transaction
    }
    setSession(I) {
      if (!I) delete this._session;
      else this._session = I;
      return this._notifyScopeListeners(), this
    }
    getSession() {
      return this._session
    }
    update(I) {
      if (!I) return this;
      let d = typeof I === "function" ? I(this) : I;
      if (d instanceof _N) {
        let G = d.getScopeData();
        if (this._tags = {
            ...this._tags,
            ...G.tags
          }, this._extra = {
            ...this._extra,
            ...G.extra
          }, this._contexts = {
            ...this._contexts,
            ...G.contexts
          }, G.user && Object.keys(G.user).length) this._user = G.user;
        if (G.level) this._level = G.level;
        if (G.fingerprint.length) this._fingerprint = G.fingerprint;
        if (d.getRequestSession()) this._requestSession = d.getRequestSession();
        if (G.propagationContext) this._propagationContext = G.propagationContext
      } else if (Bw.isPlainObject(d)) {
        let G = I;
        if (this._tags = {
            ...this._tags,
            ...G.tags
          }, this._extra = {
            ...this._extra,
            ...G.extra
          }, this._contexts = {
            ...this._contexts,
            ...G.contexts
          }, G.user) this._user = G.user;
        if (G.level) this._level = G.level;
        if (G.fingerprint) this._fingerprint = G.fingerprint;
        if (G.requestSession) this._requestSession = G.requestSession;
        if (G.propagationContext) this._propagationContext = G.propagationContext
      }
      return this
    }
    clear() {
      return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this._propagationContext = Bq1(), this
    }
    addBreadcrumb(I, d) {
      let G = typeof d === "number" ? d : am2;
      if (G <= 0) return this;
      let Z = {
          timestamp: Bw.dateTimestampInSeconds(),
          ...I
        },
        C = this._breadcrumbs;
      return C.push(Z), this._breadcrumbs = C.length > G ? C.slice(-G) : C, this._notifyScopeListeners(), this
    }
    getLastBreadcrumb() {
      return this._breadcrumbs[this._breadcrumbs.length - 1]
    }
    clearBreadcrumbs() {
      return this._breadcrumbs = [], this._notifyScopeListeners(), this
    }
    addAttachment(I) {
      return this._attachments.push(I), this
    }
    getAttachments() {
      return this.getScopeData().attachments
    }
    clearAttachments() {
      return this._attachments = [], this
    }
    getScopeData() {
      let {
        _breadcrumbs: I,
        _attachments: d,
        _contexts: G,
        _tags: Z,
        _extra: C,
        _user: W,
        _level: w,
        _fingerprint: B,
        _eventProcessors: A,
        _propagationContext: V,
        _sdkProcessingMetadata: X,
        _transactionName: _,
        _span: F
      } = this;
      return {
        breadcrumbs: I,
        attachments: d,
        contexts: G,
        tags: Z,
        extra: C,
        user: W,
        level: w,
        fingerprint: B || [],
        eventProcessors: A,
        propagationContext: V,
        sdkProcessingMetadata: X,
        transactionName: _,
        span: F
      }
    }
    applyToEvent(I, d = {}, G = []) {
      rm2.applyScopeDataToEvent(I, this.getScopeData());
      let Z = [...G, ...wq1.getGlobalEventProcessors(), ...this._eventProcessors];
      return wq1.notifyEventProcessors(Z, I, d)
    }
    setSDKProcessingMetadata(I) {
      return this._sdkProcessingMetadata = {
        ...this._sdkProcessingMetadata,
        ...I
      }, this
    }
    setPropagationContext(I) {
      return this._propagationContext = I, this
    }
    getPropagationContext() {
      return this._propagationContext
    }
    captureException(I, d) {
      let G = d && d.event_id ? d.event_id : Bw.uuid4();
      if (!this._client) return Bw.logger.warn("No client configured on scope - will not capture exception!"), G;
      let Z = new Error("Sentry syntheticException");
      return this._client.captureException(I, {
        originalException: I,
        syntheticException: Z,
        ...d,
        event_id: G
      }, this), G
    }
    captureMessage(I, d, G) {
      let Z = G && G.event_id ? G.event_id : Bw.uuid4();
      if (!this._client) return Bw.logger.warn("No client configured on scope - will not capture message!"), Z;
      let C = new Error(I);
      return this._client.captureMessage(I, d, {
        originalException: I,
        syntheticException: C,
        ...G,
        event_id: Z
      }, this), Z
    }
    captureEvent(I, d) {
      let G = d && d.event_id ? d.event_id : Bw.uuid4();
      if (!this._client) return Bw.logger.warn("No client configured on scope - will not capture event!"), G;
      return this._client.captureEvent(I, {
        ...d,
        event_id: G
      }, this), G
    }
    _notifyScopeListeners() {
      if (!this._notifyingListeners) this._notifyingListeners = !0, this._scopeListeners.forEach((I) => {
        I(this)
      }), this._notifyingListeners = !1
    }
  }

  function sm2() {
    if (!LO) LO = new _N;
    return LO
  }

  function om2(I) {
    LO = I
  }

  function Bq1() {
    return {
      traceId: Bw.uuid4(),
      spanId: Bw.uuid4().substring(16)
    }
  }
  Aq1.Scope = _N;
  Aq1.getGlobalScope = sm2;
  Aq1.setGlobalScope = om2
})
// @from(Start 111885, End 112017)
yO = Y((Vq1) => {
  Object.defineProperty(Vq1, "__esModule", {
    value: !0
  });
  var dl2 = "7.120.0";
  Vq1.SDK_VERSION = dl2
})
// @from(Start 112023, End 120064)
ww = Y((Hq1) => {
  Object.defineProperty(Hq1, "__esModule", {
    value: !0
  });
  var s7 = V0(),
    Zl2 = AN(),
    A11 = F6(),
    Xq1 = MO(),
    V11 = VN(),
    Cl2 = yO(),
    PO = parseFloat(Cl2.SDK_VERSION),
    Wl2 = 100;
  class mv {
    constructor(I, d, G, Z = PO) {
      this._version = Z;
      let C;
      if (!d) C = new Xq1.Scope, C.setClient(I);
      else C = d;
      let W;
      if (!G) W = new Xq1.Scope, W.setClient(I);
      else W = G;
      if (this._stack = [{
          scope: C
        }], I) this.bindClient(I);
      this._isolationScope = W
    }
    isOlderThan(I) {
      return this._version < I
    }
    bindClient(I) {
      let d = this.getStackTop();
      if (d.client = I, d.scope.setClient(I), I && I.setupIntegrations) I.setupIntegrations()
    }
    pushScope() {
      let I = this.getScope().clone();
      return this.getStack().push({
        client: this.getClient(),
        scope: I
      }), I
    }
    popScope() {
      if (this.getStack().length <= 1) return !1;
      return !!this.getStack().pop()
    }
    withScope(I) {
      let d = this.pushScope(),
        G;
      try {
        G = I(d)
      } catch (Z) {
        throw this.popScope(), Z
      }
      if (s7.isThenable(G)) return G.then((Z) => {
        return this.popScope(), Z
      }, (Z) => {
        throw this.popScope(), Z
      });
      return this.popScope(), G
    }
    getClient() {
      return this.getStackTop().client
    }
    getScope() {
      return this.getStackTop().scope
    }
    getIsolationScope() {
      return this._isolationScope
    }
    getStack() {
      return this._stack
    }
    getStackTop() {
      return this._stack[this._stack.length - 1]
    }
    captureException(I, d) {
      let G = this._lastEventId = d && d.event_id ? d.event_id : s7.uuid4(),
        Z = new Error("Sentry syntheticException");
      return this.getScope().captureException(I, {
        originalException: I,
        syntheticException: Z,
        ...d,
        event_id: G
      }), G
    }
    captureMessage(I, d, G) {
      let Z = this._lastEventId = G && G.event_id ? G.event_id : s7.uuid4(),
        C = new Error(I);
      return this.getScope().captureMessage(I, d, {
        originalException: I,
        syntheticException: C,
        ...G,
        event_id: Z
      }), Z
    }
    captureEvent(I, d) {
      let G = d && d.event_id ? d.event_id : s7.uuid4();
      if (!I.type) this._lastEventId = G;
      return this.getScope().captureEvent(I, {
        ...d,
        event_id: G
      }), G
    }
    lastEventId() {
      return this._lastEventId
    }
    addBreadcrumb(I, d) {
      let {
        scope: G,
        client: Z
      } = this.getStackTop();
      if (!Z) return;
      let {
        beforeBreadcrumb: C = null,
        maxBreadcrumbs: W = Wl2
      } = Z.getOptions && Z.getOptions() || {};
      if (W <= 0) return;
      let B = {
          timestamp: s7.dateTimestampInSeconds(),
          ...I
        },
        A = C ? s7.consoleSandbox(() => C(B, d)) : B;
      if (A === null) return;
      if (Z.emit) Z.emit("beforeAddBreadcrumb", A, d);
      G.addBreadcrumb(A, W)
    }
    setUser(I) {
      this.getScope().setUser(I), this.getIsolationScope().setUser(I)
    }
    setTags(I) {
      this.getScope().setTags(I), this.getIsolationScope().setTags(I)
    }
    setExtras(I) {
      this.getScope().setExtras(I), this.getIsolationScope().setExtras(I)
    }
    setTag(I, d) {
      this.getScope().setTag(I, d), this.getIsolationScope().setTag(I, d)
    }
    setExtra(I, d) {
      this.getScope().setExtra(I, d), this.getIsolationScope().setExtra(I, d)
    }
    setContext(I, d) {
      this.getScope().setContext(I, d), this.getIsolationScope().setContext(I, d)
    }
    configureScope(I) {
      let {
        scope: d,
        client: G
      } = this.getStackTop();
      if (G) I(d)
    }
    run(I) {
      let d = X11(this);
      try {
        I(this)
      } finally {
        X11(d)
      }
    }
    getIntegration(I) {
      let d = this.getClient();
      if (!d) return null;
      try {
        return d.getIntegration(I)
      } catch (G) {
        return A11.DEBUG_BUILD && s7.logger.warn(`Cannot retrieve integration ${I.id} from the current Hub`), null
      }
    }
    startTransaction(I, d) {
      let G = this._callExtensionMethod("startTransaction", I, d);
      if (A11.DEBUG_BUILD && !G)
        if (!this.getClient()) s7.logger.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'");
        else s7.logger.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`);
      return G
    }
    traceHeaders() {
      return this._callExtensionMethod("traceHeaders")
    }
    captureSession(I = !1) {
      if (I) return this.endSession();
      this._sendSessionUpdate()
    }
    endSession() {
      let d = this.getStackTop().scope,
        G = d.getSession();
      if (G) V11.closeSession(G);
      this._sendSessionUpdate(), d.setSession()
    }
    startSession(I) {
      let {
        scope: d,
        client: G
      } = this.getStackTop(), {
        release: Z,
        environment: C = Zl2.DEFAULT_ENVIRONMENT
      } = G && G.getOptions() || {}, {
        userAgent: W
      } = s7.GLOBAL_OBJ.navigator || {}, w = V11.makeSession({
        release: Z,
        environment: C,
        user: d.getUser(),
        ...W && {
          userAgent: W
        },
        ...I
      }), B = d.getSession && d.getSession();
      if (B && B.status === "ok") V11.updateSession(B, {
        status: "exited"
      });
      return this.endSession(), d.setSession(w), w
    }
    shouldSendDefaultPii() {
      let I = this.getClient(),
        d = I && I.getOptions();
      return Boolean(d && d.sendDefaultPii)
    }
    _sendSessionUpdate() {
      let {
        scope: I,
        client: d
      } = this.getStackTop(), G = I.getSession();
      if (G && d && d.captureSession) d.captureSession(G)
    }
    _callExtensionMethod(I, ...d) {
      let Z = FF().__SENTRY__;
      if (Z && Z.extensions && typeof Z.extensions[I] === "function") return Z.extensions[I].apply(this, d);
      A11.DEBUG_BUILD && s7.logger.warn(`Extension method ${I} couldn't be found, doing nothing.`)
    }
  }

  function FF() {
    return s7.GLOBAL_OBJ.__SENTRY__ = s7.GLOBAL_OBJ.__SENTRY__ || {
      extensions: {},
      hub: void 0
    }, s7.GLOBAL_OBJ
  }

  function X11(I) {
    let d = FF(),
      G = Ov(d);
    return $O(d, I), G
  }

  function Yq1() {
    let I = FF();
    if (I.__SENTRY__ && I.__SENTRY__.acs) {
      let d = I.__SENTRY__.acs.getCurrentHub();
      if (d) return d
    }
    return _q1(I)
  }

  function wl2() {
    return Yq1().getIsolationScope()
  }

  function _q1(I = FF()) {
    if (!Dq1(I) || Ov(I).isOlderThan(PO)) $O(I, new mv);
    return Ov(I)
  }

  function Bl2(I, d = _q1()) {
    if (!Dq1(I) || Ov(I).isOlderThan(PO)) {
      let G = d.getClient(),
        Z = d.getScope(),
        C = d.getIsolationScope();
      $O(I, new mv(G, Z.clone(), C.clone()))
    }
  }

  function Al2(I) {
    let d = FF();
    d.__SENTRY__ = d.__SENTRY__ || {}, d.__SENTRY__.acs = I
  }

  function Vl2(I, d = {}) {
    let G = FF();
    if (G.__SENTRY__ && G.__SENTRY__.acs) return G.__SENTRY__.acs.runWithAsyncContext(I, d);
    return I()
  }

  function Dq1(I) {
    return !!(I && I.__SENTRY__ && I.__SENTRY__.hub)
  }

  function Ov(I) {
    return s7.getGlobalSingleton("hub", () => new mv, I)
  }

  function $O(I, d) {
    if (!I) return !1;
    let G = I.__SENTRY__ = I.__SENTRY__ || {};
    return G.hub = d, !0
  }
  Hq1.API_VERSION = PO;
  Hq1.Hub = mv;
  Hq1.ensureHubOnCarrier = Bl2;
  Hq1.getCurrentHub = Yq1;
  Hq1.getHubFromCarrier = Ov;
  Hq1.getIsolationScope = wl2;
  Hq1.getMainCarrier = FF;
  Hq1.makeMain = X11;
  Hq1.runWithAsyncContext = Vl2;
  Hq1.setAsyncContextStrategy = Al2;
  Hq1.setHubOnCarrier = $O
})
// @from(Start 120070, End 120452)
uO = Y((gq1) => {
  Object.defineProperty(gq1, "__esModule", {
    value: !0
  });
  var Fq1 = V0(),
    Ql2 = ww();

  function fl2(I) {
    return (I || Ql2.getCurrentHub()).getScope().getTransaction()
  }
  var ql2 = Fq1.extractTraceparentData;
  gq1.stripUrlQueryAndFragment = Fq1.stripUrlQueryAndFragment;
  gq1.extractTraceparentData = ql2;
  gq1.getActiveTransaction = fl2
})
// @from(Start 120458, End 121061)
TO = Y((Kq1) => {
  Object.defineProperty(Kq1, "__esModule", {
    value: !0
  });
  var Y11 = V0(),
    El2 = F6(),
    Ml2 = uO(),
    Jq1 = !1;

  function Sl2() {
    if (Jq1) return;
    Jq1 = !0, Y11.addGlobalErrorInstrumentationHandler(_11), Y11.addGlobalUnhandledRejectionInstrumentationHandler(_11)
  }

  function _11() {
    let I = Ml2.getActiveTransaction();
    if (I) El2.DEBUG_BUILD && Y11.logger.log("[Tracing] Transaction: internal_error -> Global error occured"), I.setStatus("internal_error")
  }
  _11.tag = "sentry_tracingErrorCallback";
  Kq1.registerErrorInstrumentation = Sl2
})
// @from(Start 121067, End 123155)
DN = Y((Nq1) => {
  Object.defineProperty(Nq1, "__esModule", {
    value: !0
  });
  Nq1.SpanStatus = void 0;
  (function(I) {
    I.Ok = "ok";
    let G = "deadline_exceeded";
    I.DeadlineExceeded = G;
    let Z = "unauthenticated";
    I.Unauthenticated = Z;
    let C = "permission_denied";
    I.PermissionDenied = C;
    let W = "not_found";
    I.NotFound = W;
    let w = "resource_exhausted";
    I.ResourceExhausted = w;
    let B = "invalid_argument";
    I.InvalidArgument = B;
    let A = "unimplemented";
    I.Unimplemented = A;
    let V = "unavailable";
    I.Unavailable = V;
    let X = "internal_error";
    I.InternalError = X;
    let _ = "unknown_error";
    I.UnknownError = _;
    let F = "cancelled";
    I.Cancelled = F;
    let g = "already_exists";
    I.AlreadyExists = g;
    let J = "failed_precondition";
    I.FailedPrecondition = J;
    let K = "aborted";
    I.Aborted = K;
    let Q = "out_of_range";
    I.OutOfRange = Q;
    let E = "data_loss";
    I.DataLoss = E
  })(Nq1.SpanStatus || (Nq1.SpanStatus = {}));

  function H11(I) {
    if (I < 400 && I >= 100) return "ok";
    if (I >= 400 && I < 500) switch (I) {
      case 401:
        return "unauthenticated";
      case 403:
        return "permission_denied";
      case 404:
        return "not_found";
      case 409:
        return "already_exists";
      case 413:
        return "failed_precondition";
      case 429:
        return "resource_exhausted";
      default:
        return "invalid_argument"
    }
    if (I >= 500 && I < 600) switch (I) {
      case 501:
        return "unimplemented";
      case 503:
        return "unavailable";
      case 504:
        return "deadline_exceeded";
      default:
        return "internal_error"
    }
    return "unknown_error"
  }
  var yl2 = H11;

  function Pl2(I, d) {
    I.setTag("http.status_code", String(d)), I.setData("http.response.status_code", d);
    let G = H11(d);
    if (G !== "unknown_error") I.setStatus(G)
  }
  Nq1.getSpanStatusFromHttpCode = H11;
  Nq1.setHttpStatus = Pl2;
  Nq1.spanStatusfromHttpCode = yl2
})
// @from(Start 123161, End 123616)
F11 = Y((zq1) => {
  Object.defineProperty(zq1, "__esModule", {
    value: !0
  });
  var Ol2 = V0();

  function ml2(I, d, G = () => {}) {
    let Z;
    try {
      Z = I()
    } catch (C) {
      throw d(C), G(), C
    }
    return ll2(Z, d, G)
  }

  function ll2(I, d, G) {
    if (Ol2.isThenable(I)) return I.then((Z) => {
      return G(), Z
    }, (Z) => {
      throw d(Z), G(), Z
    });
    return G(), I
  }
  zq1.handleCallbackErrors = ml2
})
// @from(Start 123622, End 124019)
OO = Y((Qq1) => {
  Object.defineProperty(Qq1, "__esModule", {
    value: !0
  });
  var hl2 = iG();

  function jl2(I) {
    if (typeof __SENTRY_TRACING__ === "boolean" && !__SENTRY_TRACING__) return !1;
    let d = hl2.getClient(),
      G = I || d && d.getOptions();
    return !!G && (G.enableTracing || ("tracesSampleRate" in G) || ("tracesSampler" in G))
  }
  Qq1.hasTracingEnabled = jl2
})
// @from(Start 124025, End 128948)
hO = Y((Eq1) => {
  Object.defineProperty(Eq1, "__esModule", {
    value: !0
  });
  var lv = V0(),
    xl2 = F6(),
    pX = ww(),
    mO = kI();
  TO();
  DN();
  var cl2 = HF(),
    HN = iG(),
    g11 = F11(),
    fq1 = OO();

  function pl2(I, d, G = () => {}, Z = () => {}) {
    let C = pX.getCurrentHub(),
      W = HN.getCurrentScope(),
      w = W.getSpan(),
      B = bO(I),
      A = lO(C, {
        parentSpan: w,
        spanContext: B,
        forceTransaction: !1,
        scope: W
      });
    return W.setSpan(A), g11.handleCallbackErrors(() => d(A), (V) => {
      A && A.setStatus("internal_error"), G(V, A)
    }, () => {
      A && A.end(), W.setSpan(w), Z()
    })
  }

  function qq1(I, d) {
    let G = bO(I);
    return pX.runWithAsyncContext(() => {
      return HN.withScope(I.scope, (Z) => {
        let C = pX.getCurrentHub(),
          W = Z.getSpan(),
          B = I.onlyIfParent && !W ? void 0 : lO(C, {
            parentSpan: W,
            spanContext: G,
            forceTransaction: I.forceTransaction,
            scope: Z
          });
        return g11.handleCallbackErrors(() => d(B), () => {
          if (B) {
            let {
              status: A
            } = mO.spanToJSON(B);
            if (!A || A === "ok") B.setStatus("internal_error")
          }
        }, () => B && B.end())
      })
    })
  }
  var il2 = qq1;

  function nl2(I, d) {
    let G = bO(I);
    return pX.runWithAsyncContext(() => {
      return HN.withScope(I.scope, (Z) => {
        let C = pX.getCurrentHub(),
          W = Z.getSpan(),
          B = I.onlyIfParent && !W ? void 0 : lO(C, {
            parentSpan: W,
            spanContext: G,
            forceTransaction: I.forceTransaction,
            scope: Z
          });

        function A() {
          B && B.end()
        }
        return g11.handleCallbackErrors(() => d(B, A), () => {
          if (B && B.isRecording()) {
            let {
              status: V
            } = mO.spanToJSON(B);
            if (!V || V === "ok") B.setStatus("internal_error")
          }
        })
      })
    })
  }

  function rl2(I) {
    if (!fq1.hasTracingEnabled()) return;
    let d = bO(I),
      G = pX.getCurrentHub(),
      Z = I.scope ? I.scope.getSpan() : Rq1();
    if (I.onlyIfParent && !Z) return;
    let w = (I.scope || HN.getCurrentScope()).clone();
    return lO(G, {
      parentSpan: Z,
      spanContext: d,
      forceTransaction: I.forceTransaction,
      scope: w
    })
  }

  function Rq1() {
    return HN.getCurrentScope().getSpan()
  }
  var al2 = ({
    sentryTrace: I,
    baggage: d
  }, G) => {
    let Z = HN.getCurrentScope(),
      {
        traceparentData: C,
        dynamicSamplingContext: W,
        propagationContext: w
      } = lv.tracingContextFromHeaders(I, d);
    if (Z.setPropagationContext(w), xl2.DEBUG_BUILD && C) lv.logger.log(`[Tracing] Continuing trace ${C.traceId}.`);
    let B = {
      ...C,
      metadata: lv.dropUndefinedKeys({
        dynamicSamplingContext: W
      })
    };
    if (!G) return B;
    return pX.runWithAsyncContext(() => {
      return G(B)
    })
  };

  function lO(I, {
    parentSpan: d,
    spanContext: G,
    forceTransaction: Z,
    scope: C
  }) {
    if (!fq1.hasTracingEnabled()) return;
    let W = pX.getIsolationScope(),
      w;
    if (d && !Z) w = d.startChild(G);
    else if (d) {
      let B = cl2.getDynamicSamplingContextFromSpan(d),
        {
          traceId: A,
          spanId: V
        } = d.spanContext(),
        X = mO.spanIsSampled(d);
      w = I.startTransaction({
        traceId: A,
        parentSpanId: V,
        parentSampled: X,
        ...G,
        metadata: {
          dynamicSamplingContext: B,
          ...G.metadata
        }
      })
    } else {
      let {
        traceId: B,
        dsc: A,
        parentSpanId: V,
        sampled: X
      } = {
        ...W.getPropagationContext(),
        ...C.getPropagationContext()
      };
      w = I.startTransaction({
        traceId: B,
        parentSpanId: V,
        parentSampled: X,
        ...G,
        metadata: {
          dynamicSamplingContext: A,
          ...G.metadata
        }
      })
    }
    return C.setSpan(w), sl2(w, C, W), w
  }

  function bO(I) {
    if (I.startTime) {
      let d = {
        ...I
      };
      return d.startTimestamp = mO.spanTimeInputToSeconds(I.startTime), delete d.startTime, d
    }
    return I
  }
  var Uq1 = "_sentryScope",
    vq1 = "_sentryIsolationScope";

  function sl2(I, d, G) {
    if (I) lv.addNonEnumerableProperty(I, vq1, G), lv.addNonEnumerableProperty(I, Uq1, d)
  }

  function ol2(I) {
    return {
      scope: I[Uq1],
      isolationScope: I[vq1]
    }
  }
  Eq1.continueTrace = al2;
  Eq1.getActiveSpan = Rq1;
  Eq1.getCapturedScopesOnSpan = ol2;
  Eq1.startActiveSpan = il2;
  Eq1.startInactiveSpan = rl2;
  Eq1.startSpan = qq1;
  Eq1.startSpanManual = nl2;
  Eq1.trace = pl2
})
// @from(Start 128954, End 130028)
hv = Y((Sq1) => {
  Object.defineProperty(Sq1, "__esModule", {
    value: !0
  });
  var wb2 = V0();
  F6();
  TO();
  DN();
  var Bb2 = hO(),
    bv;

  function Mq1(I) {
    return bv ? bv.get(I) : void 0
  }

  function Ab2(I) {
    let d = Mq1(I);
    if (!d) return;
    let G = {};
    for (let [, [Z, C]] of d) {
      if (!G[Z]) G[Z] = [];
      G[Z].push(wb2.dropUndefinedKeys(C))
    }
    return G
  }

  function Vb2(I, d, G, Z, C, W) {
    let w = Bb2.getActiveSpan();
    if (w) {
      let B = Mq1(w) || new Map,
        A = `${I}:${d}@${Z}`,
        V = B.get(W);
      if (V) {
        let [, X] = V;
        B.set(W, [A, {
          min: Math.min(X.min, G),
          max: Math.max(X.max, G),
          count: X.count += 1,
          sum: X.sum += G,
          tags: X.tags
        }])
      } else B.set(W, [A, {
        min: G,
        max: G,
        count: 1,
        sum: G,
        tags: C
      }]);
      if (!bv) bv = new WeakMap;
      bv.set(w, B)
    }
  }
  Sq1.getMetricSummaryJsonForSpan = Ab2;
  Sq1.updateMetricSummaryOnActiveSpan = Vb2
})
// @from(Start 130034, End 130481)
jv = Y((Lq1) => {
  Object.defineProperty(Lq1, "__esModule", {
    value: !0
  });
  var _b2 = "sentry.source",
    Db2 = "sentry.sample_rate",
    Hb2 = "sentry.op",
    Fb2 = "sentry.origin",
    gb2 = "profile_id";
  Lq1.SEMANTIC_ATTRIBUTE_PROFILE_ID = gb2;
  Lq1.SEMANTIC_ATTRIBUTE_SENTRY_OP = Hb2;
  Lq1.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = Fb2;
  Lq1.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE = Db2;
  Lq1.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE = _b2
})
// @from(Start 130487, End 137557)
jO = Y((uq1) => {
  Object.defineProperty(uq1, "__esModule", {
    value: !0
  });
  var gF = V0(),
    yq1 = F6(),
    fb2 = hv(),
    RA = jv(),
    Pq1 = XN(),
    FN = kI(),
    qb2 = DN();
  class $q1 {
    constructor(I = 1000) {
      this._maxlen = I, this.spans = []
    }
    add(I) {
      if (this.spans.length > this._maxlen) I.spanRecorder = void 0;
      else this.spans.push(I)
    }
  }
  class J11 {
    constructor(I = {}) {
      if (this._traceId = I.traceId || gF.uuid4(), this._spanId = I.spanId || gF.uuid4().substring(16), this._startTime = I.startTimestamp || gF.timestampInSeconds(), this.tags = I.tags ? {
          ...I.tags
        } : {}, this.data = I.data ? {
          ...I.data
        } : {}, this.instrumenter = I.instrumenter || "sentry", this._attributes = {}, this.setAttributes({
          [RA.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: I.origin || "manual",
          [RA.SEMANTIC_ATTRIBUTE_SENTRY_OP]: I.op,
          ...I.attributes
        }), this._name = I.name || I.description, I.parentSpanId) this._parentSpanId = I.parentSpanId;
      if ("sampled" in I) this._sampled = I.sampled;
      if (I.status) this._status = I.status;
      if (I.endTimestamp) this._endTime = I.endTimestamp;
      if (I.exclusiveTime !== void 0) this._exclusiveTime = I.exclusiveTime;
      this._measurements = I.measurements ? {
        ...I.measurements
      } : {}
    }
    get name() {
      return this._name || ""
    }
    set name(I) {
      this.updateName(I)
    }
    get description() {
      return this._name
    }
    set description(I) {
      this._name = I
    }
    get traceId() {
      return this._traceId
    }
    set traceId(I) {
      this._traceId = I
    }
    get spanId() {
      return this._spanId
    }
    set spanId(I) {
      this._spanId = I
    }
    set parentSpanId(I) {
      this._parentSpanId = I
    }
    get parentSpanId() {
      return this._parentSpanId
    }
    get sampled() {
      return this._sampled
    }
    set sampled(I) {
      this._sampled = I
    }
    get attributes() {
      return this._attributes
    }
    set attributes(I) {
      this._attributes = I
    }
    get startTimestamp() {
      return this._startTime
    }
    set startTimestamp(I) {
      this._startTime = I
    }
    get endTimestamp() {
      return this._endTime
    }
    set endTimestamp(I) {
      this._endTime = I
    }
    get status() {
      return this._status
    }
    set status(I) {
      this._status = I
    }
    get op() {
      return this._attributes[RA.SEMANTIC_ATTRIBUTE_SENTRY_OP]
    }
    set op(I) {
      this.setAttribute(RA.SEMANTIC_ATTRIBUTE_SENTRY_OP, I)
    }
    get origin() {
      return this._attributes[RA.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]
    }
    set origin(I) {
      this.setAttribute(RA.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, I)
    }
    spanContext() {
      let {
        _spanId: I,
        _traceId: d,
        _sampled: G
      } = this;
      return {
        spanId: I,
        traceId: d,
        traceFlags: G ? FN.TRACE_FLAG_SAMPLED : FN.TRACE_FLAG_NONE
      }
    }
    startChild(I) {
      let d = new J11({
        ...I,
        parentSpanId: this._spanId,
        sampled: this._sampled,
        traceId: this._traceId
      });
      if (d.spanRecorder = this.spanRecorder, d.spanRecorder) d.spanRecorder.add(d);
      let G = Pq1.getRootSpan(this);
      if (d.transaction = G, yq1.DEBUG_BUILD && G) {
        let Z = I && I.op || "< unknown op >",
          C = FN.spanToJSON(d).description || "< unknown name >",
          W = G.spanContext().spanId,
          w = `[Tracing] Starting '${Z}' span on transaction '${C}' (${W}).`;
        gF.logger.log(w), this._logMessage = w
      }
      return d
    }
    setTag(I, d) {
      return this.tags = {
        ...this.tags,
        [I]: d
      }, this
    }
    setData(I, d) {
      return this.data = {
        ...this.data,
        [I]: d
      }, this
    }
    setAttribute(I, d) {
      if (d === void 0) delete this._attributes[I];
      else this._attributes[I] = d
    }
    setAttributes(I) {
      Object.keys(I).forEach((d) => this.setAttribute(d, I[d]))
    }
    setStatus(I) {
      return this._status = I, this
    }
    setHttpStatus(I) {
      return qb2.setHttpStatus(this, I), this
    }
    setName(I) {
      this.updateName(I)
    }
    updateName(I) {
      return this._name = I, this
    }
    isSuccess() {
      return this._status === "ok"
    }
    finish(I) {
      return this.end(I)
    }
    end(I) {
      if (this._endTime) return;
      let d = Pq1.getRootSpan(this);
      if (yq1.DEBUG_BUILD && d && d.spanContext().spanId !== this._spanId) {
        let G = this._logMessage;
        if (G) gF.logger.log(G.replace("Starting", "Finishing"))
      }
      this._endTime = FN.spanTimeInputToSeconds(I)
    }
    toTraceparent() {
      return FN.spanToTraceHeader(this)
    }
    toContext() {
      return gF.dropUndefinedKeys({
        data: this._getData(),
        description: this._name,
        endTimestamp: this._endTime,
        op: this.op,
        parentSpanId: this._parentSpanId,
        sampled: this._sampled,
        spanId: this._spanId,
        startTimestamp: this._startTime,
        status: this._status,
        tags: this.tags,
        traceId: this._traceId
      })
    }
    updateWithContext(I) {
      return this.data = I.data || {}, this._name = I.name || I.description, this._endTime = I.endTimestamp, this.op = I.op, this._parentSpanId = I.parentSpanId, this._sampled = I.sampled, this._spanId = I.spanId || this._spanId, this._startTime = I.startTimestamp || this._startTime, this._status = I.status, this.tags = I.tags || {}, this._traceId = I.traceId || this._traceId, this
    }
    getTraceContext() {
      return FN.spanToTraceContext(this)
    }
    getSpanJSON() {
      return gF.dropUndefinedKeys({
        data: this._getData(),
        description: this._name,
        op: this._attributes[RA.SEMANTIC_ATTRIBUTE_SENTRY_OP],
        parent_span_id: this._parentSpanId,
        span_id: this._spanId,
        start_timestamp: this._startTime,
        status: this._status,
        tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
        timestamp: this._endTime,
        trace_id: this._traceId,
        origin: this._attributes[RA.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
        _metrics_summary: fb2.getMetricSummaryJsonForSpan(this),
        profile_id: this._attributes[RA.SEMANTIC_ATTRIBUTE_PROFILE_ID],
        exclusive_time: this._exclusiveTime,
        measurements: Object.keys(this._measurements).length > 0 ? this._measurements : void 0
      })
    }
    isRecording() {
      return !this._endTime && !!this._sampled
    }
    toJSON() {
      return this.getSpanJSON()
    }
    _getData() {
      let {
        data: I,
        _attributes: d
      } = this, G = Object.keys(I).length > 0, Z = Object.keys(d).length > 0;
      if (!G && !Z) return;
      if (G && Z) return {
        ...I,
        ...d
      };
      return G ? I : d
    }
  }
  uq1.Span = J11;
  uq1.SpanRecorder = $q1
})
// @from(Start 137563, End 142384)
cO = Y((lq1) => {
  Object.defineProperty(lq1, "__esModule", {
    value: !0
  });
  var gN = V0(),
    kO = F6(),
    vb2 = ww(),
    Eb2 = hv(),
    kv = jv(),
    xO = kI(),
    Tq1 = HF(),
    Oq1 = jO(),
    Mb2 = hO();
  class mq1 extends Oq1.Span {
    constructor(I, d) {
      super(I);
      this._contexts = {}, this._hub = d || vb2.getCurrentHub(), this._name = I.name || "", this._metadata = {
        ...I.metadata
      }, this._trimEnd = I.trimEnd, this.transaction = this;
      let G = this._metadata.dynamicSamplingContext;
      if (G) this._frozenDynamicSamplingContext = {
        ...G
      }
    }
    get name() {
      return this._name
    }
    set name(I) {
      this.setName(I)
    }
    get metadata() {
      return {
        source: "custom",
        spanMetadata: {},
        ...this._metadata,
        ...this._attributes[kv.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] && {
          source: this._attributes[kv.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]
        },
        ...this._attributes[kv.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE] && {
          sampleRate: this._attributes[kv.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]
        }
      }
    }
    set metadata(I) {
      this._metadata = I
    }
    setName(I, d = "custom") {
      this._name = I, this.setAttribute(kv.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, d)
    }
    updateName(I) {
      return this._name = I, this
    }
    initSpanRecorder(I = 1000) {
      if (!this.spanRecorder) this.spanRecorder = new Oq1.SpanRecorder(I);
      this.spanRecorder.add(this)
    }
    setContext(I, d) {
      if (d === null) delete this._contexts[I];
      else this._contexts[I] = d
    }
    setMeasurement(I, d, G = "") {
      this._measurements[I] = {
        value: d,
        unit: G
      }
    }
    setMetadata(I) {
      this._metadata = {
        ...this._metadata,
        ...I
      }
    }
    end(I) {
      let d = xO.spanTimeInputToSeconds(I),
        G = this._finishTransaction(d);
      if (!G) return;
      return this._hub.captureEvent(G)
    }
    toContext() {
      let I = super.toContext();
      return gN.dropUndefinedKeys({
        ...I,
        name: this._name,
        trimEnd: this._trimEnd
      })
    }
    updateWithContext(I) {
      return super.updateWithContext(I), this._name = I.name || "", this._trimEnd = I.trimEnd, this
    }
    getDynamicSamplingContext() {
      return Tq1.getDynamicSamplingContextFromSpan(this)
    }
    setHub(I) {
      this._hub = I
    }
    getProfileId() {
      if (this._contexts !== void 0 && this._contexts.profile !== void 0) return this._contexts.profile.profile_id;
      return
    }
    _finishTransaction(I) {
      if (this._endTime !== void 0) return;
      if (!this._name) kO.DEBUG_BUILD && gN.logger.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>";
      super.end(I);
      let d = this._hub.getClient();
      if (d && d.emit) d.emit("finishTransaction", this);
      if (this._sampled !== !0) {
        if (kO.DEBUG_BUILD && gN.logger.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."), d) d.recordDroppedEvent("sample_rate", "transaction");
        return
      }
      let G = this.spanRecorder ? this.spanRecorder.spans.filter((V) => V !== this && xO.spanToJSON(V).timestamp) : [];
      if (this._trimEnd && G.length > 0) {
        let V = G.map((X) => xO.spanToJSON(X).timestamp).filter(Boolean);
        this._endTime = V.reduce((X, _) => {
          return X > _ ? X : _
        })
      }
      let {
        scope: Z,
        isolationScope: C
      } = Mb2.getCapturedScopesOnSpan(this), {
        metadata: W
      } = this, {
        source: w
      } = W, B = {
        contexts: {
          ...this._contexts,
          trace: xO.spanToTraceContext(this)
        },
        spans: G,
        start_timestamp: this._startTime,
        tags: this.tags,
        timestamp: this._endTime,
        transaction: this._name,
        type: "transaction",
        sdkProcessingMetadata: {
          ...W,
          capturedSpanScope: Z,
          capturedSpanIsolationScope: C,
          ...gN.dropUndefinedKeys({
            dynamicSamplingContext: Tq1.getDynamicSamplingContextFromSpan(this)
          })
        },
        _metrics_summary: Eb2.getMetricSummaryJsonForSpan(this),
        ...w && {
          transaction_info: {
            source: w
          }
        }
      };
      if (Object.keys(this._measurements).length > 0) kO.DEBUG_BUILD && gN.logger.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)), B.measurements = this._measurements;
      return kO.DEBUG_BUILD && gN.logger.log(`[Tracing] Finishing ${this.op} transaction: ${this._name}.`), B
    }
  }
  lq1.Transaction = mq1
})
// @from(Start 142390, End 149042)
N11 = Y((hq1) => {
  Object.defineProperty(hq1, "__esModule", {
    value: !0
  });
  var z7 = V0(),
    xI = F6(),
    pO = kI(),
    Lb2 = jO(),
    yb2 = cO(),
    iO = {
      idleTimeout: 1000,
      finalTimeout: 30000,
      heartbeatInterval: 5000
    },
    Pb2 = "finishReason",
    JN = ["heartbeatFailed", "idleTimeout", "documentHidden", "finalTimeout", "externalFinish", "cancelled"];
  class K11 extends Lb2.SpanRecorder {
    constructor(I, d, G, Z) {
      super(Z);
      this._pushActivity = I, this._popActivity = d, this.transactionSpanId = G
    }
    add(I) {
      if (I.spanContext().spanId !== this.transactionSpanId) {
        let d = I.end;
        if (I.end = (...G) => {
            return this._popActivity(I.spanContext().spanId), d.apply(I, G)
          }, pO.spanToJSON(I).timestamp === void 0) this._pushActivity(I.spanContext().spanId)
      }
      super.add(I)
    }
  }
  class bq1 extends yb2.Transaction {
    constructor(I, d, G = iO.idleTimeout, Z = iO.finalTimeout, C = iO.heartbeatInterval, W = !1, w = !1) {
      super(I, d);
      if (this._idleHub = d, this._idleTimeout = G, this._finalTimeout = Z, this._heartbeatInterval = C, this._onScope = W, this.activities = {}, this._heartbeatCounter = 0, this._finished = !1, this._idleTimeoutCanceledPermanently = !1, this._beforeFinishCallbacks = [], this._finishReason = JN[4], this._autoFinishAllowed = !w, W) xI.DEBUG_BUILD && z7.logger.log(`Setting idle transaction on scope. Span ID: ${this.spanContext().spanId}`), d.getScope().setSpan(this);
      if (!w) this._restartIdleTimeout();
      setTimeout(() => {
        if (!this._finished) this.setStatus("deadline_exceeded"), this._finishReason = JN[3], this.end()
      }, this._finalTimeout)
    }
    end(I) {
      let d = pO.spanTimeInputToSeconds(I);
      if (this._finished = !0, this.activities = {}, this.op === "ui.action.click") this.setAttribute(Pb2, this._finishReason);
      if (this.spanRecorder) {
        xI.DEBUG_BUILD && z7.logger.log("[Tracing] finishing IdleTransaction", new Date(d * 1000).toISOString(), this.op);
        for (let G of this._beforeFinishCallbacks) G(this, d);
        this.spanRecorder.spans = this.spanRecorder.spans.filter((G) => {
          if (G.spanContext().spanId === this.spanContext().spanId) return !0;
          if (!pO.spanToJSON(G).timestamp) G.setStatus("cancelled"), G.end(d), xI.DEBUG_BUILD && z7.logger.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(G, void 0, 2));
          let {
            start_timestamp: Z,
            timestamp: C
          } = pO.spanToJSON(G), W = Z && Z < d, w = (this._finalTimeout + this._idleTimeout) / 1000, B = C && Z && C - Z < w;
          if (xI.DEBUG_BUILD) {
            let A = JSON.stringify(G, void 0, 2);
            if (!W) z7.logger.log("[Tracing] discarding Span since it happened after Transaction was finished", A);
            else if (!B) z7.logger.log("[Tracing] discarding Span since it finished after Transaction final timeout", A)
          }
          return W && B
        }), xI.DEBUG_BUILD && z7.logger.log("[Tracing] flushing IdleTransaction")
      } else xI.DEBUG_BUILD && z7.logger.log("[Tracing] No active IdleTransaction");
      if (this._onScope) {
        let G = this._idleHub.getScope();
        if (G.getTransaction() === this) G.setSpan(void 0)
      }
      return super.end(I)
    }
    registerBeforeFinishCallback(I) {
      this._beforeFinishCallbacks.push(I)
    }
    initSpanRecorder(I) {
      if (!this.spanRecorder) {
        let d = (Z) => {
            if (this._finished) return;
            this._pushActivity(Z)
          },
          G = (Z) => {
            if (this._finished) return;
            this._popActivity(Z)
          };
        this.spanRecorder = new K11(d, G, this.spanContext().spanId, I), xI.DEBUG_BUILD && z7.logger.log("Starting heartbeat"), this._pingHeartbeat()
      }
      this.spanRecorder.add(this)
    }
    cancelIdleTimeout(I, {
      restartOnChildSpanChange: d
    } = {
      restartOnChildSpanChange: !0
    }) {
      if (this._idleTimeoutCanceledPermanently = d === !1, this._idleTimeoutID) {
        if (clearTimeout(this._idleTimeoutID), this._idleTimeoutID = void 0, Object.keys(this.activities).length === 0 && this._idleTimeoutCanceledPermanently) this._finishReason = JN[5], this.end(I)
      }
    }
    setFinishReason(I) {
      this._finishReason = I
    }
    sendAutoFinishSignal() {
      if (!this._autoFinishAllowed) xI.DEBUG_BUILD && z7.logger.log("[Tracing] Received finish signal for idle transaction."), this._restartIdleTimeout(), this._autoFinishAllowed = !0
    }
    _restartIdleTimeout(I) {
      this.cancelIdleTimeout(), this._idleTimeoutID = setTimeout(() => {
        if (!this._finished && Object.keys(this.activities).length === 0) this._finishReason = JN[1], this.end(I)
      }, this._idleTimeout)
    }
    _pushActivity(I) {
      this.cancelIdleTimeout(void 0, {
        restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently
      }), xI.DEBUG_BUILD && z7.logger.log(`[Tracing] pushActivity: ${I}`), this.activities[I] = !0, xI.DEBUG_BUILD && z7.logger.log("[Tracing] new activities count", Object.keys(this.activities).length)
    }
    _popActivity(I) {
      if (this.activities[I]) xI.DEBUG_BUILD && z7.logger.log(`[Tracing] popActivity ${I}`), delete this.activities[I], xI.DEBUG_BUILD && z7.logger.log("[Tracing] new activities count", Object.keys(this.activities).length);
      if (Object.keys(this.activities).length === 0) {
        let d = z7.timestampInSeconds();
        if (this._idleTimeoutCanceledPermanently) {
          if (this._autoFinishAllowed) this._finishReason = JN[5], this.end(d)
        } else this._restartIdleTimeout(d + this._idleTimeout / 1000)
      }
    }
    _beat() {
      if (this._finished) return;
      let I = Object.keys(this.activities).join("");
      if (I === this._prevHeartbeatString) this._heartbeatCounter++;
      else this._heartbeatCounter = 1;
      if (this._prevHeartbeatString = I, this._heartbeatCounter >= 3) {
        if (this._autoFinishAllowed) xI.DEBUG_BUILD && z7.logger.log("[Tracing] Transaction finished because of no change for 3 heart beats"), this.setStatus("deadline_exceeded"), this._finishReason = JN[0], this.end()
      } else this._pingHeartbeat()
    }
    _pingHeartbeat() {
      xI.DEBUG_BUILD && z7.logger.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`), setTimeout(() => {
        this._beat()
      }, this._heartbeatInterval)
    }
  }
  hq1.IdleTransaction = bq1;
  hq1.IdleTransactionSpanRecorder = K11;
  hq1.TRACING_DEFAULTS = iO
})
// @from(Start 149048, End 151147)
z11 = Y((kq1) => {
  Object.defineProperty(kq1, "__esModule", {
    value: !0
  });
  var JF = V0(),
    KN = F6(),
    nO = jv(),
    Ob2 = OO(),
    mb2 = kI();

  function lb2(I, d, G) {
    if (!Ob2.hasTracingEnabled(d)) return I.sampled = !1, I;
    if (I.sampled !== void 0) return I.setAttribute(nO.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, Number(I.sampled)), I;
    let Z;
    if (typeof d.tracesSampler === "function") Z = d.tracesSampler(G), I.setAttribute(nO.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, Number(Z));
    else if (G.parentSampled !== void 0) Z = G.parentSampled;
    else if (typeof d.tracesSampleRate !== "undefined") Z = d.tracesSampleRate, I.setAttribute(nO.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, Number(Z));
    else Z = 1, I.setAttribute(nO.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, Z);
    if (!jq1(Z)) return KN.DEBUG_BUILD && JF.logger.warn("[Tracing] Discarding transaction because of invalid sample rate."), I.sampled = !1, I;
    if (!Z) return KN.DEBUG_BUILD && JF.logger.log(`[Tracing] Discarding transaction because ${typeof d.tracesSampler==="function"?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0"}`), I.sampled = !1, I;
    if (I.sampled = Math.random() < Z, !I.sampled) return KN.DEBUG_BUILD && JF.logger.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(Z)})`), I;
    return KN.DEBUG_BUILD && JF.logger.log(`[Tracing] starting ${I.op} transaction - ${mb2.spanToJSON(I).description}`), I
  }

  function jq1(I) {
    if (JF.isNaN(I) || !(typeof I === "number" || typeof I === "boolean")) return KN.DEBUG_BUILD && JF.logger.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(I)} of type ${JSON.stringify(typeof I)}.`), !1;
    if (I < 0 || I > 1) return KN.DEBUG_BUILD && JF.logger.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${I}.`), !1;
    return !0
  }
  kq1.isValidSampleRate = jq1;
  kq1.sampleTransaction = lb2
})
// @from(Start 151153, End 153382)
Q11 = Y((cq1) => {
  Object.defineProperty(cq1, "__esModule", {
    value: !0
  });
  var jb2 = V0(),
    kb2 = F6(),
    xb2 = ww(),
    cb2 = kI(),
    pb2 = TO(),
    ib2 = N11(),
    xq1 = z11(),
    nb2 = cO();

  function rb2() {
    let d = this.getScope().getSpan();
    return d ? {
      "sentry-trace": cb2.spanToTraceHeader(d)
    } : {}
  }

  function ab2(I, d) {
    let G = this.getClient(),
      Z = G && G.getOptions() || {},
      C = Z.instrumenter || "sentry",
      W = I.instrumenter || "sentry";
    if (C !== W) kb2.DEBUG_BUILD && jb2.logger.error(`A transaction was started with instrumenter=\`${W}\`, but the SDK is configured with the \`${C}\` instrumenter.
The transaction will not be sampled. Please use the ${C} instrumentation to start transactions.`), I.sampled = !1;
    let w = new nb2.Transaction(I, this);
    if (w = xq1.sampleTransaction(w, Z, {
        name: I.name,
        parentSampled: I.parentSampled,
        transactionContext: I,
        attributes: {
          ...I.data,
          ...I.attributes
        },
        ...d
      }), w.isRecording()) w.initSpanRecorder(Z._experiments && Z._experiments.maxSpans);
    if (G && G.emit) G.emit("startTransaction", w);
    return w
  }

  function sb2(I, d, G, Z, C, W, w, B = !1) {
    let A = I.getClient(),
      V = A && A.getOptions() || {},
      X = new ib2.IdleTransaction(d, I, G, Z, w, C, B);
    if (X = xq1.sampleTransaction(X, V, {
        name: d.name,
        parentSampled: d.parentSampled,
        transactionContext: d,
        attributes: {
          ...d.data,
          ...d.attributes
        },
        ...W
      }), X.isRecording()) X.initSpanRecorder(V._experiments && V._experiments.maxSpans);
    if (A && A.emit) A.emit("startTransaction", X);
    return X
  }

  function ob2() {
    let I = xb2.getMainCarrier();
    if (!I.__SENTRY__) return;
    if (I.__SENTRY__.extensions = I.__SENTRY__.extensions || {}, !I.__SENTRY__.extensions.startTransaction) I.__SENTRY__.extensions.startTransaction = ab2;
    if (!I.__SENTRY__.extensions.traceHeaders) I.__SENTRY__.extensions.traceHeaders = rb2;
    pb2.registerErrorInstrumentation()
  }
  cq1.addTracingExtensions = ob2;
  cq1.startIdleTransaction = sb2
})
// @from(Start 153388, End 153627)
iq1 = Y((pq1) => {
  Object.defineProperty(pq1, "__esModule", {
    value: !0
  });
  var Ih2 = uO();

  function dh2(I, d, G) {
    let Z = Ih2.getActiveTransaction();
    if (Z) Z.setMeasurement(I, d, G)
  }
  pq1.setMeasurement = dh2
})
// @from(Start 153633, End 154872)
f11 = Y((nq1) => {
  Object.defineProperty(nq1, "__esModule", {
    value: !0
  });
  var NN = V0();

  function Zh2(I, d) {
    if (!d) return I;
    return I.sdk = I.sdk || {}, I.sdk.name = I.sdk.name || d.name, I.sdk.version = I.sdk.version || d.version, I.sdk.integrations = [...I.sdk.integrations || [], ...d.integrations || []], I.sdk.packages = [...I.sdk.packages || [], ...d.packages || []], I
  }

  function Ch2(I, d, G, Z) {
    let C = NN.getSdkMetadataForEnvelopeHeader(G),
      W = {
        sent_at: new Date().toISOString(),
        ...C && {
          sdk: C
        },
        ...!!Z && d && {
          dsn: NN.dsnToString(d)
        }
      },
      w = "aggregates" in I ? [{
        type: "sessions"
      }, I] : [{
        type: "session"
      }, I.toJSON()];
    return NN.createEnvelope(W, [w])
  }

  function Wh2(I, d, G, Z) {
    let C = NN.getSdkMetadataForEnvelopeHeader(G),
      W = I.type && I.type !== "replay_event" ? I.type : "event";
    Zh2(I, G && G.sdk);
    let w = NN.createEventEnvelopeHeaders(I, C, Z, d);
    delete I.sdkProcessingMetadata;
    let B = [{
      type: W
    }, I];
    return NN.createEnvelope(w, [B])
  }
  nq1.createEventEnvelope = Wh2;
  nq1.createSessionEnvelope = Ch2
})
// @from(Start 154878, End 156679)
q11 = Y((aq1) => {
  Object.defineProperty(aq1, "__esModule", {
    value: !0
  });
  var Ah2 = V0(),
    Vh2 = iG();
  class rq1 {
    constructor(I, d) {
      if (this._client = I, this.flushTimeout = 60, this._pendingAggregates = {}, this._isEnabled = !0, this._intervalId = setInterval(() => this.flush(), this.flushTimeout * 1000), this._intervalId.unref) this._intervalId.unref();
      this._sessionAttrs = d
    }
    flush() {
      let I = this.getSessionAggregates();
      if (I.aggregates.length === 0) return;
      this._pendingAggregates = {}, this._client.sendSession(I)
    }
    getSessionAggregates() {
      let I = Object.keys(this._pendingAggregates).map((G) => {
          return this._pendingAggregates[parseInt(G)]
        }),
        d = {
          attrs: this._sessionAttrs,
          aggregates: I
        };
      return Ah2.dropUndefinedKeys(d)
    }
    close() {
      clearInterval(this._intervalId), this._isEnabled = !1, this.flush()
    }
    incrementSessionStatusCount() {
      if (!this._isEnabled) return;
      let I = Vh2.getCurrentScope(),
        d = I.getRequestSession();
      if (d && d.status) this._incrementSessionStatusCount(d.status, new Date), I.setRequestSession(void 0)
    }
    _incrementSessionStatusCount(I, d) {
      let G = new Date(d).setSeconds(0, 0);
      this._pendingAggregates[G] = this._pendingAggregates[G] || {};
      let Z = this._pendingAggregates[G];
      if (!Z.started) Z.started = new Date(G).toISOString();
      switch (I) {
        case "errored":
          return Z.errored = (Z.errored || 0) + 1, Z.errored;
        case "ok":
          return Z.exited = (Z.exited || 0) + 1, Z.exited;
        default:
          return Z.crashed = (Z.crashed || 0) + 1, Z.crashed
      }
    }
  }
  aq1.SessionFlusher = rq1
})
// @from(Start 156685, End 158092)
rO = Y((oq1) => {
  Object.defineProperty(oq1, "__esModule", {
    value: !0
  });
  var R11 = V0(),
    Yh2 = "7";

  function sq1(I) {
    let d = I.protocol ? `${I.protocol}:` : "",
      G = I.port ? `:${I.port}` : "";
    return `${d}//${I.host}${G}${I.path?`/${I.path}`:""}/api/`
  }

  function _h2(I) {
    return `${sq1(I)}${I.projectId}/envelope/`
  }

  function Dh2(I, d) {
    return R11.urlEncode({
      sentry_key: I.publicKey,
      sentry_version: Yh2,
      ...d && {
        sentry_client: `${d.name}/${d.version}`
      }
    })
  }

  function Hh2(I, d = {}) {
    let G = typeof d === "string" ? d : d.tunnel,
      Z = typeof d === "string" || !d._metadata ? void 0 : d._metadata.sdk;
    return G ? G : `${_h2(I)}?${Dh2(I,Z)}`
  }

  function Fh2(I, d) {
    let G = R11.makeDsn(I);
    if (!G) return "";
    let Z = `${sq1(G)}embed/error-page/`,
      C = `dsn=${R11.dsnToString(G)}`;
    for (let W in d) {
      if (W === "dsn") continue;
      if (W === "onClose") continue;
      if (W === "user") {
        let w = d.user;
        if (!w) continue;
        if (w.name) C += `&name=${encodeURIComponent(w.name)}`;
        if (w.email) C += `&email=${encodeURIComponent(w.email)}`
      } else C += `&${encodeURIComponent(W)}=${encodeURIComponent(d[W])}`
    }
    return `${Z}?${C}`
  }
  oq1.getEnvelopeEndpointWithUrlEncodedAuth = Hh2;
  oq1.getReportDialogEndpoint = Fh2
})
// @from(Start 158098, End 160789)
UA = Y((tq1) => {
  Object.defineProperty(tq1, "__esModule", {
    value: !0
  });
  var aO = V0(),
    U11 = F6(),
    Kh2 = Pv(),
    Nh2 = iG(),
    zh2 = ww(),
    v11 = [];

  function Qh2(I) {
    let d = {};
    return I.forEach((G) => {
      let {
        name: Z
      } = G, C = d[Z];
      if (C && !C.isDefaultInstance && G.isDefaultInstance) return;
      d[Z] = G
    }), Object.keys(d).map((G) => d[G])
  }

  function fh2(I) {
    let d = I.defaultIntegrations || [],
      G = I.integrations;
    d.forEach((w) => {
      w.isDefaultInstance = !0
    });
    let Z;
    if (Array.isArray(G)) Z = [...d, ...G];
    else if (typeof G === "function") Z = aO.arrayify(G(d));
    else Z = d;
    let C = Qh2(Z),
      W = vh2(C, (w) => w.name === "Debug");
    if (W !== -1) {
      let [w] = C.splice(W, 1);
      C.push(w)
    }
    return C
  }

  function qh2(I, d) {
    let G = {};
    return d.forEach((Z) => {
      if (Z) eq1(I, Z, G)
    }), G
  }

  function Rh2(I, d) {
    for (let G of d)
      if (G && G.afterAllSetup) G.afterAllSetup(I)
  }

  function eq1(I, d, G) {
    if (G[d.name]) {
      U11.DEBUG_BUILD && aO.logger.log(`Integration skipped because it was already installed: ${d.name}`);
      return
    }
    if (G[d.name] = d, v11.indexOf(d.name) === -1) d.setupOnce(Kh2.addGlobalEventProcessor, zh2.getCurrentHub), v11.push(d.name);
    if (d.setup && typeof d.setup === "function") d.setup(I);
    if (I.on && typeof d.preprocessEvent === "function") {
      let Z = d.preprocessEvent.bind(d);
      I.on("preprocessEvent", (C, W) => Z(C, W, I))
    }
    if (I.addEventProcessor && typeof d.processEvent === "function") {
      let Z = d.processEvent.bind(d),
        C = Object.assign((W, w) => Z(W, w, I), {
          id: d.name
        });
      I.addEventProcessor(C)
    }
    U11.DEBUG_BUILD && aO.logger.log(`Integration installed: ${d.name}`)
  }

  function Uh2(I) {
    let d = Nh2.getClient();
    if (!d || !d.addIntegration) {
      U11.DEBUG_BUILD && aO.logger.warn(`Cannot add integration "${I.name}" because no SDK Client is available.`);
      return
    }
    d.addIntegration(I)
  }

  function vh2(I, d) {
    for (let G = 0; G < I.length; G++)
      if (d(I[G]) === !0) return G;
    return -1
  }

  function Eh2(I, d) {
    return Object.assign(function G(...Z) {
      return d(...Z)
    }, {
      id: I
    })
  }

  function Mh2(I) {
    return I
  }
  tq1.addIntegration = Uh2;
  tq1.afterSetupIntegrations = Rh2;
  tq1.convertIntegrationFnToClass = Eh2;
  tq1.defineIntegration = Mh2;
  tq1.getIntegrationsToSetup = fh2;
  tq1.installedIntegrations = v11;
  tq1.setupIntegration = eq1;
  tq1.setupIntegrations = qh2
})
// @from(Start 160795, End 162374)
xv = Y((IR1) => {
  Object.defineProperty(IR1, "__esModule", {
    value: !0
  });
  var mh2 = V0();

  function lh2(I, d, G, Z) {
    let C = Object.entries(mh2.dropUndefinedKeys(Z)).sort((W, w) => W[0].localeCompare(w[0]));
    return `${I}${d}${G}${C}`
  }

  function bh2(I) {
    let d = 0;
    for (let G = 0; G < I.length; G++) {
      let Z = I.charCodeAt(G);
      d = (d << 5) - d + Z, d &= d
    }
    return d >>> 0
  }

  function hh2(I) {
    let d = "";
    for (let G of I) {
      let Z = Object.entries(G.tags),
        C = Z.length > 0 ? `|#${Z.map(([W,w])=>`${W}:${w}`).join(",")}` : "";
      d += `${G.name}@${G.unit}:${G.metric}|${G.metricType}${C}|T${G.timestamp}
`
    }
    return d
  }

  function jh2(I) {
    return I.replace(/[^\w]+/gi, "_")
  }

  function kh2(I) {
    return I.replace(/[^\w\-.]+/gi, "_")
  }

  function xh2(I) {
    return I.replace(/[^\w\-./]+/gi, "")
  }
  var ch2 = [
    [`
`, "\\n"],
    ["\r", "\\r"],
    ["\t", "\\t"],
    ["\\", "\\\\"],
    ["|", "\\u{7c}"],
    [",", "\\u{2c}"]
  ];

  function ph2(I) {
    for (let [d, G] of ch2)
      if (I === d) return G;
    return I
  }

  function ih2(I) {
    return [...I].reduce((d, G) => d + ph2(G), "")
  }

  function nh2(I) {
    let d = {};
    for (let G in I)
      if (Object.prototype.hasOwnProperty.call(I, G)) {
        let Z = xh2(G);
        d[Z] = ih2(String(I[G]))
      } return d
  }
  IR1.getBucketKey = lh2;
  IR1.sanitizeMetricKey = kh2;
  IR1.sanitizeTags = nh2;
  IR1.sanitizeUnit = jh2;
  IR1.serializeMetricBuckets = hh2;
  IR1.simpleHash = bh2
})
// @from(Start 162380, End 162959)
ZR1 = Y((GR1) => {
  Object.defineProperty(GR1, "__esModule", {
    value: !0
  });
  var dR1 = V0(),
    Ij2 = xv();

  function dj2(I, d, G, Z) {
    let C = {
      sent_at: new Date().toISOString()
    };
    if (G && G.sdk) C.sdk = {
      name: G.sdk.name,
      version: G.sdk.version
    };
    if (!!Z && d) C.dsn = dR1.dsnToString(d);
    let W = Gj2(I);
    return dR1.createEnvelope(C, [W])
  }

  function Gj2(I) {
    let d = Ij2.serializeMetricBuckets(I);
    return [{
      type: "statsd",
      length: d.length
    }, d]
  }
  GR1.createMetricEnvelope = dj2
})
// @from(Start 162965, End 174924)
E11 = Y((XR1) => {
  Object.defineProperty(XR1, "__esModule", {
    value: !0
  });
  var v5 = V0(),
    Cj2 = rO(),
    Aw = F6(),
    CR1 = f11(),
    Wj2 = iG(),
    wj2 = ww(),
    sO = UA(),
    Bj2 = ZR1(),
    WR1 = VN(),
    Aj2 = HF(),
    Vj2 = vO(),
    wR1 = "Not capturing exception because it's already been captured.";
  class BR1 {
    constructor(I) {
      if (this._options = I, this._integrations = {}, this._integrationsInitialized = !1, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], I.dsn) this._dsn = v5.makeDsn(I.dsn);
      else Aw.DEBUG_BUILD && v5.logger.warn("No DSN provided, client will not send events.");
      if (this._dsn) {
        let d = Cj2.getEnvelopeEndpointWithUrlEncodedAuth(this._dsn, I);
        this._transport = I.transport({
          tunnel: this._options.tunnel,
          recordDroppedEvent: this.recordDroppedEvent.bind(this),
          ...I.transportOptions,
          url: d
        })
      }
    }
    captureException(I, d, G) {
      if (v5.checkOrSetAlreadyCaught(I)) {
        Aw.DEBUG_BUILD && v5.logger.log(wR1);
        return
      }
      let Z = d && d.event_id;
      return this._process(this.eventFromException(I, d).then((C) => this._captureEvent(C, d, G)).then((C) => {
        Z = C
      })), Z
    }
    captureMessage(I, d, G, Z) {
      let C = G && G.event_id,
        W = v5.isParameterizedString(I) ? I : String(I),
        w = v5.isPrimitive(I) ? this.eventFromMessage(W, d, G) : this.eventFromException(I, G);
      return this._process(w.then((B) => this._captureEvent(B, G, Z)).then((B) => {
        C = B
      })), C
    }
    captureEvent(I, d, G) {
      if (d && d.originalException && v5.checkOrSetAlreadyCaught(d.originalException)) {
        Aw.DEBUG_BUILD && v5.logger.log(wR1);
        return
      }
      let Z = d && d.event_id,
        W = (I.sdkProcessingMetadata || {}).capturedSpanScope;
      return this._process(this._captureEvent(I, d, W || G).then((w) => {
        Z = w
      })), Z
    }
    captureSession(I) {
      if (typeof I.release !== "string") Aw.DEBUG_BUILD && v5.logger.warn("Discarded session because of missing or non-string release");
      else this.sendSession(I), WR1.updateSession(I, {
        init: !1
      })
    }
    getDsn() {
      return this._dsn
    }
    getOptions() {
      return this._options
    }
    getSdkMetadata() {
      return this._options._metadata
    }
    getTransport() {
      return this._transport
    }
    flush(I) {
      let d = this._transport;
      if (d) {
        if (this.metricsAggregator) this.metricsAggregator.flush();
        return this._isClientDoneProcessing(I).then((G) => {
          return d.flush(I).then((Z) => G && Z)
        })
      } else return v5.resolvedSyncPromise(!0)
    }
    close(I) {
      return this.flush(I).then((d) => {
        if (this.getOptions().enabled = !1, this.metricsAggregator) this.metricsAggregator.close();
        return d
      })
    }
    getEventProcessors() {
      return this._eventProcessors
    }
    addEventProcessor(I) {
      this._eventProcessors.push(I)
    }
    setupIntegrations(I) {
      if (I && !this._integrationsInitialized || this._isEnabled() && !this._integrationsInitialized) this._setupIntegrations()
    }
    init() {
      if (this._isEnabled()) this._setupIntegrations()
    }
    getIntegrationById(I) {
      return this.getIntegrationByName(I)
    }
    getIntegrationByName(I) {
      return this._integrations[I]
    }
    getIntegration(I) {
      try {
        return this._integrations[I.id] || null
      } catch (d) {
        return Aw.DEBUG_BUILD && v5.logger.warn(`Cannot retrieve integration ${I.id} from the current Client`), null
      }
    }
    addIntegration(I) {
      let d = this._integrations[I.name];
      if (sO.setupIntegration(this, I, this._integrations), !d) sO.afterSetupIntegrations(this, [I])
    }
    sendEvent(I, d = {}) {
      this.emit("beforeSendEvent", I, d);
      let G = CR1.createEventEnvelope(I, this._dsn, this._options._metadata, this._options.tunnel);
      for (let C of d.attachments || []) G = v5.addItemToEnvelope(G, v5.createAttachmentEnvelopeItem(C, this._options.transportOptions && this._options.transportOptions.textEncoder));
      let Z = this._sendEnvelope(G);
      if (Z) Z.then((C) => this.emit("afterSendEvent", I, C), null)
    }
    sendSession(I) {
      let d = CR1.createSessionEnvelope(I, this._dsn, this._options._metadata, this._options.tunnel);
      this._sendEnvelope(d)
    }
    recordDroppedEvent(I, d, G) {
      if (this._options.sendClientReports) {
        let Z = typeof G === "number" ? G : 1,
          C = `${I}:${d}`;
        Aw.DEBUG_BUILD && v5.logger.log(`Recording outcome: "${C}"${Z>1?` (${Z} times)`:""}`), this._outcomes[C] = (this._outcomes[C] || 0) + Z
      }
    }
    captureAggregateMetrics(I) {
      Aw.DEBUG_BUILD && v5.logger.log(`Flushing aggregated metrics, number of metrics: ${I.length}`);
      let d = Bj2.createMetricEnvelope(I, this._dsn, this._options._metadata, this._options.tunnel);
      this._sendEnvelope(d)
    }
    on(I, d) {
      if (!this._hooks[I]) this._hooks[I] = [];
      this._hooks[I].push(d)
    }
    emit(I, ...d) {
      if (this._hooks[I]) this._hooks[I].forEach((G) => G(...d))
    }
    _setupIntegrations() {
      let {
        integrations: I
      } = this._options;
      this._integrations = sO.setupIntegrations(this, I), sO.afterSetupIntegrations(this, I), this._integrationsInitialized = !0
    }
    _updateSessionFromEvent(I, d) {
      let G = !1,
        Z = !1,
        C = d.exception && d.exception.values;
      if (C) {
        Z = !0;
        for (let B of C) {
          let A = B.mechanism;
          if (A && A.handled === !1) {
            G = !0;
            break
          }
        }
      }
      let W = I.status === "ok";
      if (W && I.errors === 0 || W && G) WR1.updateSession(I, {
        ...G && {
          status: "crashed"
        },
        errors: I.errors || Number(Z || G)
      }), this.captureSession(I)
    }
    _isClientDoneProcessing(I) {
      return new v5.SyncPromise((d) => {
        let G = 0,
          Z = 1,
          C = setInterval(() => {
            if (this._numProcessing == 0) clearInterval(C), d(!0);
            else if (G += Z, I && G >= I) clearInterval(C), d(!1)
          }, Z)
      })
    }
    _isEnabled() {
      return this.getOptions().enabled !== !1 && this._transport !== void 0
    }
    _prepareEvent(I, d, G, Z = wj2.getIsolationScope()) {
      let C = this.getOptions(),
        W = Object.keys(this._integrations);
      if (!d.integrations && W.length > 0) d.integrations = W;
      return this.emit("preprocessEvent", I, d), Vj2.prepareEvent(C, I, d, G, this, Z).then((w) => {
        if (w === null) return w;
        let B = {
          ...Z.getPropagationContext(),
          ...G ? G.getPropagationContext() : void 0
        };
        if (!(w.contexts && w.contexts.trace) && B) {
          let {
            traceId: V,
            spanId: X,
            parentSpanId: _,
            dsc: F
          } = B;
          w.contexts = {
            trace: {
              trace_id: V,
              span_id: X,
              parent_span_id: _
            },
            ...w.contexts
          };
          let g = F ? F : Aj2.getDynamicSamplingContextFromClient(V, this, G);
          w.sdkProcessingMetadata = {
            dynamicSamplingContext: g,
            ...w.sdkProcessingMetadata
          }
        }
        return w
      })
    }
    _captureEvent(I, d = {}, G) {
      return this._processEvent(I, d, G).then((Z) => {
        return Z.event_id
      }, (Z) => {
        if (Aw.DEBUG_BUILD) {
          let C = Z;
          if (C.logLevel === "log") v5.logger.log(C.message);
          else v5.logger.warn(C)
        }
        return
      })
    }
    _processEvent(I, d, G) {
      let Z = this.getOptions(),
        {
          sampleRate: C
        } = Z,
        W = VR1(I),
        w = AR1(I),
        B = I.type || "error",
        A = `before send for type \`${B}\``;
      if (w && typeof C === "number" && Math.random() > C) return this.recordDroppedEvent("sample_rate", "error", I), v5.rejectedSyncPromise(new v5.SentryError(`Discarding event because it's not included in the random sample (sampling rate = ${C})`, "log"));
      let V = B === "replay_event" ? "replay" : B,
        _ = (I.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
      return this._prepareEvent(I, d, G, _).then((F) => {
        if (F === null) throw this.recordDroppedEvent("event_processor", V, I), new v5.SentryError("An event processor returned `null`, will not send event.", "log");
        if (d.data && d.data.__sentry__ === !0) return F;
        let J = Yj2(Z, F, d);
        return Xj2(J, A)
      }).then((F) => {
        if (F === null) {
          if (this.recordDroppedEvent("before_send", V, I), W) {
            let Q = 1 + (I.spans || []).length;
            this.recordDroppedEvent("before_send", "span", Q)
          }
          throw new v5.SentryError(`${A} returned \`null\`, will not send event.`, "log")
        }
        let g = G && G.getSession();
        if (!W && g) this._updateSessionFromEvent(g, F);
        if (W) {
          let K = F.sdkProcessingMetadata && F.sdkProcessingMetadata.spanCountBeforeProcessing || 0,
            Q = F.spans ? F.spans.length : 0,
            E = K - Q;
          if (E > 0) this.recordDroppedEvent("before_send", "span", E)
        }
        let J = F.transaction_info;
        if (W && J && F.transaction !== I.transaction) F.transaction_info = {
          ...J,
          source: "custom"
        };
        return this.sendEvent(F, d), F
      }).then(null, (F) => {
        if (F instanceof v5.SentryError) throw F;
        throw this.captureException(F, {
          data: {
            __sentry__: !0
          },
          originalException: F
        }), new v5.SentryError(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${F}`)
      })
    }
    _process(I) {
      this._numProcessing++, I.then((d) => {
        return this._numProcessing--, d
      }, (d) => {
        return this._numProcessing--, d
      })
    }
    _sendEnvelope(I) {
      if (this.emit("beforeEnvelope", I), this._isEnabled() && this._transport) return this._transport.send(I).then(null, (d) => {
        Aw.DEBUG_BUILD && v5.logger.error("Error while sending event:", d)
      });
      else Aw.DEBUG_BUILD && v5.logger.error("Transport disabled")
    }
    _clearOutcomes() {
      let I = this._outcomes;
      return this._outcomes = {}, Object.keys(I).map((d) => {
        let [G, Z] = d.split(":");
        return {
          reason: G,
          category: Z,
          quantity: I[d]
        }
      })
    }
  }

  function Xj2(I, d) {
    let G = `${d} must return \`null\` or a valid event.`;
    if (v5.isThenable(I)) return I.then((Z) => {
      if (!v5.isPlainObject(Z) && Z !== null) throw new v5.SentryError(G);
      return Z
    }, (Z) => {
      throw new v5.SentryError(`${d} rejected with ${Z}`)
    });
    else if (!v5.isPlainObject(I) && I !== null) throw new v5.SentryError(G);
    return I
  }

  function Yj2(I, d, G) {
    let {
      beforeSend: Z,
      beforeSendTransaction: C
    } = I;
    if (AR1(d) && Z) return Z(d, G);
    if (VR1(d) && C) {
      if (d.spans) {
        let W = d.spans.length;
        d.sdkProcessingMetadata = {
          ...d.sdkProcessingMetadata,
          spanCountBeforeProcessing: W
        }
      }
      return C(d, G)
    }
    return d
  }

  function AR1(I) {
    return I.type === void 0
  }

  function VR1(I) {
    return I.type === "transaction"
  }

  function _j2(I) {
    let d = Wj2.getClient();
    if (!d || !d.addEventProcessor) return;
    d.addEventProcessor(I)
  }
  XR1.BaseClient = BR1;
  XR1.addEventProcessor = _j2
})
// @from(Start 174930, End 175481)
S11 = Y((YR1) => {
  Object.defineProperty(YR1, "__esModule", {
    value: !0
  });
  var M11 = V0();

  function Fj2(I, d, G, Z, C) {
    let W = {
      sent_at: new Date().toISOString()
    };
    if (G && G.sdk) W.sdk = {
      name: G.sdk.name,
      version: G.sdk.version
    };
    if (!!Z && !!C) W.dsn = M11.dsnToString(C);
    if (d) W.trace = M11.dropUndefinedKeys(d);
    let w = gj2(I);
    return M11.createEnvelope(W, [w])
  }

  function gj2(I) {
    return [{
      type: "check_in"
    }, I]
  }
  YR1.createCheckInEnvelope = Fj2
})
// @from(Start 175487, End 175914)
cv = Y((_R1) => {
  Object.defineProperty(_R1, "__esModule", {
    value: !0
  });
  var Kj2 = "c",
    Nj2 = "g",
    zj2 = "s",
    Qj2 = "d",
    fj2 = 5000,
    qj2 = 1e4,
    Rj2 = 1e4;
  _R1.COUNTER_METRIC_TYPE = Kj2;
  _R1.DEFAULT_BROWSER_FLUSH_INTERVAL = fj2;
  _R1.DEFAULT_FLUSH_INTERVAL = qj2;
  _R1.DISTRIBUTION_METRIC_TYPE = Qj2;
  _R1.GAUGE_METRIC_TYPE = Nj2;
  _R1.MAX_WEIGHT = Rj2;
  _R1.SET_METRIC_TYPE = zj2
})
// @from(Start 175920, End 177503)
u11 = Y((DR1) => {
  Object.defineProperty(DR1, "__esModule", {
    value: !0
  });
  var oO = cv(),
    Pj2 = xv();
  class L11 {
    constructor(I) {
      this._value = I
    }
    get weight() {
      return 1
    }
    add(I) {
      this._value += I
    }
    toString() {
      return `${this._value}`
    }
  }
  class y11 {
    constructor(I) {
      this._last = I, this._min = I, this._max = I, this._sum = I, this._count = 1
    }
    get weight() {
      return 5
    }
    add(I) {
      if (this._last = I, I < this._min) this._min = I;
      if (I > this._max) this._max = I;
      this._sum += I, this._count++
    }
    toString() {
      return `${this._last}:${this._min}:${this._max}:${this._sum}:${this._count}`
    }
  }
  class P11 {
    constructor(I) {
      this._value = [I]
    }
    get weight() {
      return this._value.length
    }
    add(I) {
      this._value.push(I)
    }
    toString() {
      return this._value.join(":")
    }
  }
  class $11 {
    constructor(I) {
      this.first = I, this._value = new Set([I])
    }
    get weight() {
      return this._value.size
    }
    add(I) {
      this._value.add(I)
    }
    toString() {
      return Array.from(this._value).map((I) => typeof I === "string" ? Pj2.simpleHash(I) : I).join(":")
    }
  }
  var $j2 = {
    [oO.COUNTER_METRIC_TYPE]: L11,
    [oO.GAUGE_METRIC_TYPE]: y11,
    [oO.DISTRIBUTION_METRIC_TYPE]: P11,
    [oO.SET_METRIC_TYPE]: $11
  };
  DR1.CounterMetric = L11;
  DR1.DistributionMetric = P11;
  DR1.GaugeMetric = y11;
  DR1.METRIC_MAP = $j2;
  DR1.SetMetric = $11
})
// @from(Start 177509, End 179795)
JR1 = Y((gR1) => {
  Object.defineProperty(gR1, "__esModule", {
    value: !0
  });
  var HR1 = V0(),
    pv = cv(),
    bj2 = u11(),
    hj2 = hv(),
    eO = xv();
  class FR1 {
    constructor(I) {
      if (this._client = I, this._buckets = new Map, this._bucketsTotalWeight = 0, this._interval = setInterval(() => this._flush(), pv.DEFAULT_FLUSH_INTERVAL), this._interval.unref) this._interval.unref();
      this._flushShift = Math.floor(Math.random() * pv.DEFAULT_FLUSH_INTERVAL / 1000), this._forceFlush = !1
    }
    add(I, d, G, Z = "none", C = {}, W = HR1.timestampInSeconds()) {
      let w = Math.floor(W),
        B = eO.sanitizeMetricKey(d),
        A = eO.sanitizeTags(C),
        V = eO.sanitizeUnit(Z),
        X = eO.getBucketKey(I, B, V, A),
        _ = this._buckets.get(X),
        F = _ && I === pv.SET_METRIC_TYPE ? _.metric.weight : 0;
      if (_) {
        if (_.metric.add(G), _.timestamp < w) _.timestamp = w
      } else _ = {
        metric: new bj2.METRIC_MAP[I](G),
        timestamp: w,
        metricType: I,
        name: B,
        unit: V,
        tags: A
      }, this._buckets.set(X, _);
      let g = typeof G === "string" ? _.metric.weight - F : G;
      if (hj2.updateMetricSummaryOnActiveSpan(I, B, g, V, C, X), this._bucketsTotalWeight += _.metric.weight, this._bucketsTotalWeight >= pv.MAX_WEIGHT) this.flush()
    }
    flush() {
      this._forceFlush = !0, this._flush()
    }
    close() {
      this._forceFlush = !0, clearInterval(this._interval), this._flush()
    }
    _flush() {
      if (this._forceFlush) {
        this._forceFlush = !1, this._bucketsTotalWeight = 0, this._captureMetrics(this._buckets), this._buckets.clear();
        return
      }
      let I = Math.floor(HR1.timestampInSeconds()) - pv.DEFAULT_FLUSH_INTERVAL / 1000 - this._flushShift,
        d = new Map;
      for (let [G, Z] of this._buckets)
        if (Z.timestamp <= I) d.set(G, Z), this._bucketsTotalWeight -= Z.metric.weight;
      for (let [G] of d) this._buckets.delete(G);
      this._captureMetrics(d)
    }
    _captureMetrics(I) {
      if (I.size > 0 && this._client.captureAggregateMetrics) {
        let d = Array.from(I).map(([, G]) => G);
        this._client.captureAggregateMetrics(d)
      }
    }
  }
  gR1.MetricsAggregator = FR1
})
// @from(Start 179801, End 184046)
QR1 = Y((zR1) => {
  Object.defineProperty(zR1, "__esModule", {
    value: !0
  });
  var vA = V0(),
    kj2 = E11(),
    xj2 = S11(),
    tO = F6(),
    cj2 = iG(),
    pj2 = JR1(),
    ij2 = q11(),
    nj2 = Q11(),
    rj2 = kI(),
    aj2 = XN();
  DN();
  var KR1 = HF();
  class NR1 extends kj2.BaseClient {
    constructor(I) {
      nj2.addTracingExtensions();
      super(I);
      if (I._experiments && I._experiments.metricsAggregator) this.metricsAggregator = new pj2.MetricsAggregator(this)
    }
    eventFromException(I, d) {
      return vA.resolvedSyncPromise(vA.eventFromUnknownInput(cj2.getClient(), this._options.stackParser, I, d))
    }
    eventFromMessage(I, d = "info", G) {
      return vA.resolvedSyncPromise(vA.eventFromMessage(this._options.stackParser, I, d, G, this._options.attachStacktrace))
    }
    captureException(I, d, G) {
      if (this._options.autoSessionTracking && this._sessionFlusher && G) {
        let Z = G.getRequestSession();
        if (Z && Z.status === "ok") Z.status = "errored"
      }
      return super.captureException(I, d, G)
    }
    captureEvent(I, d, G) {
      if (this._options.autoSessionTracking && this._sessionFlusher && G) {
        if ((I.type || "exception") === "exception" && I.exception && I.exception.values && I.exception.values.length > 0) {
          let W = G.getRequestSession();
          if (W && W.status === "ok") W.status = "errored"
        }
      }
      return super.captureEvent(I, d, G)
    }
    close(I) {
      if (this._sessionFlusher) this._sessionFlusher.close();
      return super.close(I)
    }
    initSessionFlusher() {
      let {
        release: I,
        environment: d
      } = this._options;
      if (!I) tO.DEBUG_BUILD && vA.logger.warn("Cannot initialise an instance of SessionFlusher if no release is provided!");
      else this._sessionFlusher = new ij2.SessionFlusher(this, {
        release: I,
        environment: d
      })
    }
    captureCheckIn(I, d, G) {
      let Z = "checkInId" in I && I.checkInId ? I.checkInId : vA.uuid4();
      if (!this._isEnabled()) return tO.DEBUG_BUILD && vA.logger.warn("SDK not enabled, will not capture checkin."), Z;
      let C = this.getOptions(),
        {
          release: W,
          environment: w,
          tunnel: B
        } = C,
        A = {
          check_in_id: Z,
          monitor_slug: I.monitorSlug,
          status: I.status,
          release: W,
          environment: w
        };
      if ("duration" in I) A.duration = I.duration;
      if (d) A.monitor_config = {
        schedule: d.schedule,
        checkin_margin: d.checkinMargin,
        max_runtime: d.maxRuntime,
        timezone: d.timezone
      };
      let [V, X] = this._getTraceInfoFromScope(G);
      if (X) A.contexts = {
        trace: X
      };
      let _ = xj2.createCheckInEnvelope(A, V, this.getSdkMetadata(), B, this.getDsn());
      return tO.DEBUG_BUILD && vA.logger.info("Sending checkin:", I.monitorSlug, I.status), this._sendEnvelope(_), Z
    }
    _captureRequestSession() {
      if (!this._sessionFlusher) tO.DEBUG_BUILD && vA.logger.warn("Discarded request mode session because autoSessionTracking option was disabled");
      else this._sessionFlusher.incrementSessionStatusCount()
    }
    _prepareEvent(I, d, G, Z) {
      if (this._options.platform) I.platform = I.platform || this._options.platform;
      if (this._options.runtime) I.contexts = {
        ...I.contexts,
        runtime: (I.contexts || {}).runtime || this._options.runtime
      };
      if (this._options.serverName) I.server_name = I.server_name || this._options.serverName;
      return super._prepareEvent(I, d, G, Z)
    }
    _getTraceInfoFromScope(I) {
      if (!I) return [void 0, void 0];
      let d = I.getSpan();
      if (d) return [aj2.getRootSpan(d) ? KR1.getDynamicSamplingContextFromSpan(d) : void 0, rj2.spanToTraceContext(d)];
      let {
        traceId: G,
        spanId: Z,
        parentSpanId: C,
        dsc: W
      } = I.getPropagationContext(), w = {
        trace_id: G,
        span_id: Z,
        parent_span_id: C
      };
      if (W) return [W, w];
      return [KR1.getDynamicSamplingContextFromClient(G, this, I), w]
    }
  }
  zR1.ServerRuntimeClient = NR1
})
// @from(Start 184052, End 184816)
UR1 = Y((RR1) => {
  Object.defineProperty(RR1, "__esModule", {
    value: !0
  });
  var fR1 = V0(),
    oj2 = F6(),
    ej2 = iG(),
    tj2 = ww();

  function Ik2(I, d) {
    if (d.debug === !0)
      if (oj2.DEBUG_BUILD) fR1.logger.enable();
      else fR1.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
      });
    ej2.getCurrentScope().update(d.initialScope);
    let Z = new I(d);
    qR1(Z), dk2(Z)
  }

  function qR1(I) {
    let G = tj2.getCurrentHub().getStackTop();
    G.client = I, G.scope.setClient(I)
  }

  function dk2(I) {
    if (I.init) I.init();
    else if (I.setupIntegrations) I.setupIntegrations()
  }
  RR1.initAndBind = Ik2;
  RR1.setCurrentClient = qR1
})
// @from(Start 184822, End 186633)
LR1 = Y((SR1) => {
  Object.defineProperty(SR1, "__esModule", {
    value: !0
  });
  var cI = V0(),
    vR1 = F6(),
    MR1 = 30;

  function Ck2(I, d, G = cI.makePromiseBuffer(I.bufferSize || MR1)) {
    let Z = {},
      C = (w) => G.drain(w);

    function W(w) {
      let B = [];
      if (cI.forEachEnvelopeItem(w, (_, F) => {
          let g = cI.envelopeItemTypeToDataCategory(F);
          if (cI.isRateLimited(Z, g)) {
            let J = ER1(_, F);
            I.recordDroppedEvent("ratelimit_backoff", g, J)
          } else B.push(_)
        }), B.length === 0) return cI.resolvedSyncPromise();
      let A = cI.createEnvelope(w[0], B),
        V = (_) => {
          cI.forEachEnvelopeItem(A, (F, g) => {
            let J = ER1(F, g);
            I.recordDroppedEvent(_, cI.envelopeItemTypeToDataCategory(g), J)
          })
        },
        X = () => d({
          body: cI.serializeEnvelope(A, I.textEncoder)
        }).then((_) => {
          if (_.statusCode !== void 0 && (_.statusCode < 200 || _.statusCode >= 300)) vR1.DEBUG_BUILD && cI.logger.warn(`Sentry responded with status code ${_.statusCode} to sent event.`);
          return Z = cI.updateRateLimits(Z, _), _
        }, (_) => {
          throw V("network_error"), _
        });
      return G.add(X).then((_) => _, (_) => {
        if (_ instanceof cI.SentryError) return vR1.DEBUG_BUILD && cI.logger.error("Skipped sending event because buffer is full."), V("queue_overflow"), cI.resolvedSyncPromise();
        else throw _
      })
    }
    return W.__sentry__baseTransport__ = !0, {
      send: W,
      flush: C
    }
  }

  function ER1(I, d) {
    if (d !== "event" && d !== "transaction") return;
    return Array.isArray(I) ? I[1] : void 0
  }
  SR1.DEFAULT_TRANSPORT_BUFFER_SIZE = MR1;
  SR1.createTransport = Ck2
})
// @from(Start 186639, End 188463)
$R1 = Y((PR1) => {
  Object.defineProperty(PR1, "__esModule", {
    value: !0
  });
  var O11 = V0(),
    Bk2 = F6(),
    yR1 = 100,
    m11 = 5000,
    Ak2 = 3600000;

  function T11(I, d) {
    Bk2.DEBUG_BUILD && O11.logger.info(`[Offline]: ${I}`, d)
  }

  function Vk2(I) {
    return (d) => {
      let G = I(d),
        Z = d.createStore ? d.createStore(d) : void 0,
        C = m11,
        W;

      function w(X, _, F) {
        if (O11.envelopeContainsItemType(X, ["replay_event", "replay_recording", "client_report"])) return !1;
        if (d.shouldStore) return d.shouldStore(X, _, F);
        return !0
      }

      function B(X) {
        if (!Z) return;
        if (W) clearTimeout(W);
        if (W = setTimeout(async () => {
            W = void 0;
            let _ = await Z.pop();
            if (_) T11("Attempting to send previously queued event"), V(_).catch((F) => {
              T11("Failed to retry sending", F)
            })
          }, X), typeof W !== "number" && W.unref) W.unref()
      }

      function A() {
        if (W) return;
        B(C), C = Math.min(C * 2, Ak2)
      }
      async function V(X) {
        try {
          let _ = await G.send(X),
            F = yR1;
          if (_) {
            if (_.headers && _.headers["retry-after"]) F = O11.parseRetryAfterHeader(_.headers["retry-after"]);
            else if ((_.statusCode || 0) >= 400) return _
          }
          return B(F), C = m11, _
        } catch (_) {
          if (Z && await w(X, _, C)) return await Z.insert(X), A(), T11("Error sending. Event queued", _), {};
          else throw _
        }
      }
      if (d.flushAtStartup) A();
      return {
        send: V,
        flush: (X) => G.flush(X)
      }
    }
  }
  PR1.MIN_DELAY = yR1;
  PR1.START_DELAY = m11;
  PR1.makeOfflineTransport = Vk2
})
// @from(Start 188469, End 190469)
TR1 = Y((uR1) => {
  Object.defineProperty(uR1, "__esModule", {
    value: !0
  });
  var l11 = V0(),
    Dk2 = rO();

  function b11(I, d) {
    let G;
    return l11.forEachEnvelopeItem(I, (Z, C) => {
      if (d.includes(C)) G = Array.isArray(Z) ? Z[1] : void 0;
      return !!G
    }), G
  }

  function Hk2(I, d) {
    return (G) => {
      let Z = I(G);
      return {
        ...Z,
        send: async (C) => {
          let W = b11(C, ["event", "transaction", "profile", "replay_event"]);
          if (W) W.release = d;
          return Z.send(C)
        }
      }
    }
  }

  function Fk2(I, d) {
    return l11.createEnvelope(d ? {
      ...I[0],
      dsn: d
    } : I[0], I[1])
  }

  function gk2(I, d) {
    return (G) => {
      let Z = I(G),
        C = new Map;

      function W(A, V) {
        let X = V ? `${A}:${V}` : A,
          _ = C.get(X);
        if (!_) {
          let F = l11.dsnFromString(A);
          if (!F) return;
          let g = Dk2.getEnvelopeEndpointWithUrlEncodedAuth(F, G.tunnel);
          _ = V ? Hk2(I, V)({
            ...G,
            url: g
          }) : I({
            ...G,
            url: g
          }), C.set(X, _)
        }
        return [A, _]
      }
      async function w(A) {
        function V(F) {
          let g = F && F.length ? F : ["event"];
          return b11(A, g)
        }
        let X = d({
          envelope: A,
          getEvent: V
        }).map((F) => {
          if (typeof F === "string") return W(F, void 0);
          else return W(F.dsn, F.release)
        }).filter((F) => !!F);
        if (X.length === 0) X.push(["", Z]);
        return (await Promise.all(X.map(([F, g]) => g.send(Fk2(A, F)))))[0]
      }
      async function B(A) {
        let V = [await Z.flush(A)];
        for (let [, X] of C) V.push(await X.flush(A));
        return V.every((X) => X)
      }
      return {
        send: w,
        flush: B
      }
    }
  }
  uR1.eventFromEnvelope = b11;
  uR1.makeMultiplexedTransport = gk2
})
// @from(Start 190475, End 190866)
lR1 = Y((mR1) => {
  Object.defineProperty(mR1, "__esModule", {
    value: !0
  });
  var OR1 = V0();

  function Nk2(I, d) {
    let G = {
      sent_at: new Date().toISOString()
    };
    if (d) G.dsn = OR1.dsnToString(d);
    let Z = I.map(zk2);
    return OR1.createEnvelope(G, Z)
  }

  function zk2(I) {
    return [{
      type: "span"
    }, I]
  }
  mR1.createSpanEnvelope = Nk2
})
// @from(Start 190872, End 191448)
jR1 = Y((hR1) => {
  Object.defineProperty(hR1, "__esModule", {
    value: !0
  });

  function fk2(I, d) {
    let G = d && Uk2(d) ? d.getClient() : d,
      Z = G && G.getDsn(),
      C = G && G.getOptions().tunnel;
    return Rk2(I, Z) || qk2(I, C)
  }

  function qk2(I, d) {
    if (!d) return !1;
    return bR1(I) === bR1(d)
  }

  function Rk2(I, d) {
    return d ? I.includes(d.host) : !1
  }

  function bR1(I) {
    return I[I.length - 1] === "/" ? I.slice(0, -1) : I
  }

  function Uk2(I) {
    return I.getClient !== void 0
  }
  hR1.isSentryRequestUrl = fk2
})
// @from(Start 191454, End 191776)
xR1 = Y((kR1) => {
  Object.defineProperty(kR1, "__esModule", {
    value: !0
  });

  function Ek2(I, ...d) {
    let G = new String(String.raw(I, ...d));
    return G.__sentry_template_string__ = I.join("\x00").replace(/%/g, "%%").replace(/\0/g, "%s"), G.__sentry_template_values__ = d, G
  }
  kR1.parameterize = Ek2
})
// @from(Start 191782, End 192227)
iR1 = Y((pR1) => {
  Object.defineProperty(pR1, "__esModule", {
    value: !0
  });
  var cR1 = yO();

  function Sk2(I, d, G = [d], Z = "npm") {
    let C = I._metadata || {};
    if (!C.sdk) C.sdk = {
      name: `sentry.javascript.${d}`,
      packages: G.map((W) => ({
        name: `${Z}:@sentry/${W}`,
        version: cR1.SDK_VERSION
      })),
      version: cR1.SDK_VERSION
    };
    I._metadata = C
  }
  pR1.applySdkMetadata = Sk2
})
// @from(Start 192233, End 193476)
oR1 = Y((sR1) => {
  Object.defineProperty(sR1, "__esModule", {
    value: !0
  });
  var h11 = V0(),
    rR1 = new Map,
    nR1 = new Set;

  function yk2(I) {
    if (!h11.GLOBAL_OBJ._sentryModuleMetadata) return;
    for (let d of Object.keys(h11.GLOBAL_OBJ._sentryModuleMetadata)) {
      let G = h11.GLOBAL_OBJ._sentryModuleMetadata[d];
      if (nR1.has(d)) continue;
      nR1.add(d);
      let Z = I(d);
      for (let C of Z.reverse())
        if (C.filename) {
          rR1.set(C.filename, G);
          break
        }
    }
  }

  function aR1(I, d) {
    return yk2(I), rR1.get(d)
  }

  function Pk2(I, d) {
    try {
      d.exception.values.forEach((G) => {
        if (!G.stacktrace) return;
        for (let Z of G.stacktrace.frames || []) {
          if (!Z.filename) continue;
          let C = aR1(I, Z.filename);
          if (C) Z.module_metadata = C
        }
      })
    } catch (G) {}
  }

  function $k2(I) {
    try {
      I.exception.values.forEach((d) => {
        if (!d.stacktrace) return;
        for (let G of d.stacktrace.frames || []) delete G.module_metadata
      })
    } catch (d) {}
  }
  sR1.addMetadataToStackFrames = Pk2;
  sR1.getMetadataForUrl = aR1;
  sR1.stripMetadataFromStackFrames = $k2
})
// @from(Start 193482, End 194417)
ZU1 = Y((GU1) => {
  Object.defineProperty(GU1, "__esModule", {
    value: !0
  });
  var mk2 = V0(),
    tR1 = UA(),
    eR1 = oR1(),
    IU1 = "ModuleMetadata",
    lk2 = () => {
      return {
        name: IU1,
        setupOnce() {},
        setup(I) {
          if (typeof I.on !== "function") return;
          I.on("beforeEnvelope", (d) => {
            mk2.forEachEnvelopeItem(d, (G, Z) => {
              if (Z === "event") {
                let C = Array.isArray(G) ? G[1] : void 0;
                if (C) eR1.stripMetadataFromStackFrames(C), G[1] = C
              }
            })
          })
        },
        processEvent(I, d, G) {
          let Z = G.getOptions().stackParser;
          return eR1.addMetadataToStackFrames(Z, I), I
        }
      }
    },
    dU1 = tR1.defineIntegration(lk2),
    bk2 = tR1.convertIntegrationFnToClass(IU1, dU1);
  GU1.ModuleMetadata = bk2;
  GU1.moduleMetadataIntegration = dU1
})
// @from(Start 194423, End 197056)
VU1 = Y((AU1) => {
  Object.defineProperty(AU1, "__esModule", {
    value: !0
  });
  var CU1 = V0(),
    WU1 = UA(),
    kk2 = kI(),
    j11 = {
      include: {
        cookies: !0,
        data: !0,
        headers: !0,
        ip: !1,
        query_string: !0,
        url: !0,
        user: {
          id: !0,
          username: !0,
          email: !0
        }
      },
      transactionNamingScheme: "methodPath"
    },
    wU1 = "RequestData",
    xk2 = (I = {}) => {
      let d = CU1.addRequestDataToEvent,
        G = {
          ...j11,
          ...I,
          include: {
            method: !0,
            ...j11.include,
            ...I.include,
            user: I.include && typeof I.include.user === "boolean" ? I.include.user : {
              ...j11.include.user,
              ...(I.include || {}).user
            }
          }
        };
      return {
        name: wU1,
        setupOnce() {},
        processEvent(Z, C, W) {
          let {
            transactionNamingScheme: w
          } = G, {
            sdkProcessingMetadata: B = {}
          } = Z, A = B.request;
          if (!A) return Z;
          let V = B.requestDataOptionsFromExpressHandler || B.requestDataOptionsFromGCPWrapper || pk2(G),
            X = d(Z, A, V);
          if (Z.type === "transaction" || w === "handler") return X;
          let F = A._sentryTransaction;
          if (F) {
            let g = kk2.spanToJSON(F).description || "",
              J = ik2(W) === "sentry.javascript.nextjs" ? g.startsWith("/api") : w !== "path",
              [K] = CU1.extractPathForTransaction(A, {
                path: !0,
                method: J,
                customRoute: g
              });
            X.transaction = K
          }
          return X
        }
      }
    },
    BU1 = WU1.defineIntegration(xk2),
    ck2 = WU1.convertIntegrationFnToClass(wU1, BU1);

  function pk2(I) {
    let {
      transactionNamingScheme: d,
      include: {
        ip: G,
        user: Z,
        ...C
      }
    } = I, W = [];
    for (let [B, A] of Object.entries(C))
      if (A) W.push(B);
    let w;
    if (Z === void 0) w = !0;
    else if (typeof Z === "boolean") w = Z;
    else {
      let B = [];
      for (let [A, V] of Object.entries(Z))
        if (V) B.push(A);
      w = B
    }
    return {
      include: {
        ip: G,
        user: w,
        request: W.length !== 0 ? W : void 0,
        transaction: d
      }
    }
  }

  function ik2(I) {
    try {
      return I.getOptions()._metadata.sdk.name
    } catch (d) {
      return
    }
  }
  AU1.RequestData = ck2;
  AU1.requestDataIntegration = BU1
})
// @from(Start 197062, End 201073)
k11 = Y((DU1) => {
  Object.defineProperty(DU1, "__esModule", {
    value: !0
  });
  var W8 = V0(),
    KF = F6(),
    XU1 = UA(),
    ak2 = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/],
    sk2 = [/^.*\/healthcheck$/, /^.*\/healthy$/, /^.*\/live$/, /^.*\/ready$/, /^.*\/heartbeat$/, /^.*\/health$/, /^.*\/healthz$/],
    YU1 = "InboundFilters",
    ok2 = (I = {}) => {
      return {
        name: YU1,
        setupOnce() {},
        processEvent(d, G, Z) {
          let C = Z.getOptions(),
            W = tk2(I, C);
          return Ix2(d, W) ? null : d
        }
      }
    },
    _U1 = XU1.defineIntegration(ok2),
    ek2 = XU1.convertIntegrationFnToClass(YU1, _U1);

  function tk2(I = {}, d = {}) {
    return {
      allowUrls: [...I.allowUrls || [], ...d.allowUrls || []],
      denyUrls: [...I.denyUrls || [], ...d.denyUrls || []],
      ignoreErrors: [...I.ignoreErrors || [], ...d.ignoreErrors || [], ...I.disableErrorDefaults ? [] : ak2],
      ignoreTransactions: [...I.ignoreTransactions || [], ...d.ignoreTransactions || [], ...I.disableTransactionDefaults ? [] : sk2],
      ignoreInternal: I.ignoreInternal !== void 0 ? I.ignoreInternal : !0
    }
  }

  function Ix2(I, d) {
    if (d.ignoreInternal && wx2(I)) return KF.DEBUG_BUILD && W8.logger.warn(`Event dropped due to being internal Sentry Error.
Event: ${W8.getEventDescription(I)}`), !0;
    if (dx2(I, d.ignoreErrors)) return KF.DEBUG_BUILD && W8.logger.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${W8.getEventDescription(I)}`), !0;
    if (Gx2(I, d.ignoreTransactions)) return KF.DEBUG_BUILD && W8.logger.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${W8.getEventDescription(I)}`), !0;
    if (Zx2(I, d.denyUrls)) return KF.DEBUG_BUILD && W8.logger.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${W8.getEventDescription(I)}.
Url: ${Im(I)}`), !0;
    if (!Cx2(I, d.allowUrls)) return KF.DEBUG_BUILD && W8.logger.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${W8.getEventDescription(I)}.
Url: ${Im(I)}`), !0;
    return !1
  }

  function dx2(I, d) {
    if (I.type || !d || !d.length) return !1;
    return Wx2(I).some((G) => W8.stringMatchesSomePattern(G, d))
  }

  function Gx2(I, d) {
    if (I.type !== "transaction" || !d || !d.length) return !1;
    let G = I.transaction;
    return G ? W8.stringMatchesSomePattern(G, d) : !1
  }

  function Zx2(I, d) {
    if (!d || !d.length) return !1;
    let G = Im(I);
    return !G ? !1 : W8.stringMatchesSomePattern(G, d)
  }

  function Cx2(I, d) {
    if (!d || !d.length) return !0;
    let G = Im(I);
    return !G ? !0 : W8.stringMatchesSomePattern(G, d)
  }

  function Wx2(I) {
    let d = [];
    if (I.message) d.push(I.message);
    let G;
    try {
      G = I.exception.values[I.exception.values.length - 1]
    } catch (Z) {}
    if (G) {
      if (G.value) {
        if (d.push(G.value), G.type) d.push(`${G.type}: ${G.value}`)
      }
    }
    if (KF.DEBUG_BUILD && d.length === 0) W8.logger.error(`Could not extract message for event ${W8.getEventDescription(I)}`);
    return d
  }

  function wx2(I) {
    try {
      return I.exception.values[0].type === "SentryError"
    } catch (d) {}
    return !1
  }

  function Bx2(I = []) {
    for (let d = I.length - 1; d >= 0; d--) {
      let G = I[d];
      if (G && G.filename !== "<anonymous>" && G.filename !== "[native code]") return G.filename || null
    }
    return null
  }

  function Im(I) {
    try {
      let d;
      try {
        d = I.exception.values[0].stacktrace.frames
      } catch (G) {}
      return d ? Bx2(d) : null
    } catch (d) {
      return KF.DEBUG_BUILD && W8.logger.error(`Cannot extract url for event ${W8.getEventDescription(I)}`), null
    }
  }
  DU1.InboundFilters = ek2;
  DU1.inboundFiltersIntegration = _U1
})
// @from(Start 201079, End 201910)
x11 = Y((NU1) => {
  Object.defineProperty(NU1, "__esModule", {
    value: !0
  });
  var Xx2 = V0(),
    Yx2 = iG(),
    gU1 = UA(),
    HU1, JU1 = "FunctionToString",
    FU1 = new WeakMap,
    _x2 = () => {
      return {
        name: JU1,
        setupOnce() {
          HU1 = Function.prototype.toString;
          try {
            Function.prototype.toString = function(...I) {
              let d = Xx2.getOriginalFunction(this),
                G = FU1.has(Yx2.getClient()) && d !== void 0 ? d : this;
              return HU1.apply(G, I)
            }
          } catch (I) {}
        },
        setup(I) {
          FU1.set(I, !0)
        }
      }
    },
    KU1 = gU1.defineIntegration(_x2),
    Dx2 = gU1.convertIntegrationFnToClass(JU1, KU1);
  NU1.FunctionToString = Dx2;
  NU1.functionToStringIntegration = KU1
})
// @from(Start 201916, End 202590)
c11 = Y((RU1) => {
  Object.defineProperty(RU1, "__esModule", {
    value: !0
  });
  var zU1 = V0(),
    QU1 = UA(),
    gx2 = "cause",
    Jx2 = 5,
    fU1 = "LinkedErrors",
    Kx2 = (I = {}) => {
      let d = I.limit || Jx2,
        G = I.key || gx2;
      return {
        name: fU1,
        setupOnce() {},
        preprocessEvent(Z, C, W) {
          let w = W.getOptions();
          zU1.applyAggregateErrorsToEvent(zU1.exceptionFromError, w.stackParser, w.maxValueLength, G, d, Z, C)
        }
      }
    },
    qU1 = QU1.defineIntegration(Kx2),
    Nx2 = QU1.convertIntegrationFnToClass(fU1, qU1);
  RU1.LinkedErrors = Nx2;
  RU1.linkedErrorsIntegration = qU1
})
// @from(Start 202596, End 202863)
vU1 = Y((UU1) => {
  Object.defineProperty(UU1, "__esModule", {
    value: !0
  });
  var fx2 = x11(),
    qx2 = k11(),
    Rx2 = c11();
  UU1.FunctionToString = fx2.FunctionToString;
  UU1.InboundFilters = qx2.InboundFilters;
  UU1.LinkedErrors = Rx2.LinkedErrors
})
// @from(Start 202869, End 204318)
LU1 = Y((SU1) => {
  Object.defineProperty(SU1, "__esModule", {
    value: !0
  });
  var Mx2 = V0(),
    EU1 = cv(),
    Sx2 = u11(),
    Lx2 = hv(),
    dm = xv();
  class MU1 {
    constructor(I) {
      this._client = I, this._buckets = new Map, this._interval = setInterval(() => this.flush(), EU1.DEFAULT_BROWSER_FLUSH_INTERVAL)
    }
    add(I, d, G, Z = "none", C = {}, W = Mx2.timestampInSeconds()) {
      let w = Math.floor(W),
        B = dm.sanitizeMetricKey(d),
        A = dm.sanitizeTags(C),
        V = dm.sanitizeUnit(Z),
        X = dm.getBucketKey(I, B, V, A),
        _ = this._buckets.get(X),
        F = _ && I === EU1.SET_METRIC_TYPE ? _.metric.weight : 0;
      if (_) {
        if (_.metric.add(G), _.timestamp < w) _.timestamp = w
      } else _ = {
        metric: new Sx2.METRIC_MAP[I](G),
        timestamp: w,
        metricType: I,
        name: B,
        unit: V,
        tags: A
      }, this._buckets.set(X, _);
      let g = typeof G === "string" ? _.metric.weight - F : G;
      Lx2.updateMetricSummaryOnActiveSpan(I, B, g, V, C, X)
    }
    flush() {
      if (this._buckets.size === 0) return;
      if (this._client.captureAggregateMetrics) {
        let I = Array.from(this._buckets).map(([, d]) => d);
        this._client.captureAggregateMetrics(I)
      }
      this._buckets.clear()
    }
    close() {
      clearInterval(this._interval), this.flush()
    }
  }
  SU1.BrowserMetricsAggregator = MU1
})
// @from(Start 204324, End 204827)
TU1 = Y((uU1) => {
  Object.defineProperty(uU1, "__esModule", {
    value: !0
  });
  var yU1 = UA(),
    Px2 = LU1(),
    PU1 = "MetricsAggregator",
    $x2 = () => {
      return {
        name: PU1,
        setupOnce() {},
        setup(I) {
          I.metricsAggregator = new Px2.BrowserMetricsAggregator(I)
        }
      }
    },
    $U1 = yU1.defineIntegration($x2),
    ux2 = yU1.convertIntegrationFnToClass(PU1, $U1);
  uU1.MetricsAggregator = ux2;
  uU1.metricsAggregatorIntegration = $U1
})
// @from(Start 204833, End 206404)
pU1 = Y((cU1) => {
  Object.defineProperty(cU1, "__esModule", {
    value: !0
  });
  var OU1 = V0(),
    mU1 = F6(),
    lU1 = iG(),
    mx2 = kI(),
    Gm = cv(),
    bU1 = TU1();

  function Zm(I, d, G, Z = {}) {
    let C = lU1.getClient(),
      W = lU1.getCurrentScope();
    if (C) {
      if (!C.metricsAggregator) {
        mU1.DEBUG_BUILD && OU1.logger.warn("No metrics aggregator enabled. Please add the MetricsAggregator integration to use metrics APIs");
        return
      }
      let {
        unit: w,
        tags: B,
        timestamp: A
      } = Z, {
        release: V,
        environment: X
      } = C.getOptions(), _ = W.getTransaction(), F = {};
      if (V) F.release = V;
      if (X) F.environment = X;
      if (_) F.transaction = mx2.spanToJSON(_).description || "";
      mU1.DEBUG_BUILD && OU1.logger.log(`Adding value of ${G} to ${I} metric ${d}`), C.metricsAggregator.add(I, d, G, w, {
        ...F,
        ...B
      }, A)
    }
  }

  function hU1(I, d = 1, G) {
    Zm(Gm.COUNTER_METRIC_TYPE, I, d, G)
  }

  function jU1(I, d, G) {
    Zm(Gm.DISTRIBUTION_METRIC_TYPE, I, d, G)
  }

  function kU1(I, d, G) {
    Zm(Gm.SET_METRIC_TYPE, I, d, G)
  }

  function xU1(I, d, G) {
    Zm(Gm.GAUGE_METRIC_TYPE, I, d, G)
  }
  var lx2 = {
    increment: hU1,
    distribution: jU1,
    set: kU1,
    gauge: xU1,
    MetricsAggregator: bU1.MetricsAggregator,
    metricsAggregatorIntegration: bU1.metricsAggregatorIntegration
  };
  cU1.distribution = jU1;
  cU1.gauge = xU1;
  cU1.increment = hU1;
  cU1.metrics = lx2;
  cU1.set = kU1
})
// @from(Start 206410, End 212820)
V4 = Y((n11) => {
  Object.defineProperty(n11, "__esModule", {
    value: !0
  });
  var iU1 = Q11(),
    nU1 = N11(),
    cx2 = jO(),
    px2 = cO(),
    rU1 = uO(),
    Cm = DN(),
    NF = hO(),
    aU1 = HF(),
    ix2 = iq1(),
    nx2 = z11(),
    iv = jv(),
    sU1 = f11(),
    L9 = iG(),
    Vw = ww(),
    p11 = VN(),
    rx2 = q11(),
    i11 = MO(),
    oU1 = Pv(),
    eU1 = rO(),
    tU1 = E11(),
    ax2 = QR1(),
    Iv1 = UR1(),
    sx2 = LR1(),
    ox2 = $R1(),
    ex2 = TR1(),
    tx2 = yO(),
    Wm = UA(),
    dv1 = EO(),
    Ic2 = vO(),
    dc2 = S11(),
    Gc2 = lR1(),
    Zc2 = OO(),
    Cc2 = jR1(),
    Wc2 = F11(),
    wc2 = xR1(),
    wm = kI(),
    Bc2 = XN(),
    Ac2 = iR1(),
    Vc2 = AN(),
    Gv1 = ZU1(),
    Zv1 = VU1(),
    Cv1 = k11(),
    Wv1 = x11(),
    wv1 = c11(),
    Xc2 = vU1(),
    Yc2 = pU1(),
    _c2 = Xc2;
  n11.addTracingExtensions = iU1.addTracingExtensions;
  n11.startIdleTransaction = iU1.startIdleTransaction;
  n11.IdleTransaction = nU1.IdleTransaction;
  n11.TRACING_DEFAULTS = nU1.TRACING_DEFAULTS;
  n11.Span = cx2.Span;
  n11.Transaction = px2.Transaction;
  n11.extractTraceparentData = rU1.extractTraceparentData;
  n11.getActiveTransaction = rU1.getActiveTransaction;
  Object.defineProperty(n11, "SpanStatus", {
    enumerable: !0,
    get: () => Cm.SpanStatus
  });
  n11.getSpanStatusFromHttpCode = Cm.getSpanStatusFromHttpCode;
  n11.setHttpStatus = Cm.setHttpStatus;
  n11.spanStatusfromHttpCode = Cm.spanStatusfromHttpCode;
  n11.continueTrace = NF.continueTrace;
  n11.getActiveSpan = NF.getActiveSpan;
  n11.startActiveSpan = NF.startActiveSpan;
  n11.startInactiveSpan = NF.startInactiveSpan;
  n11.startSpan = NF.startSpan;
  n11.startSpanManual = NF.startSpanManual;
  n11.trace = NF.trace;
  n11.getDynamicSamplingContextFromClient = aU1.getDynamicSamplingContextFromClient;
  n11.getDynamicSamplingContextFromSpan = aU1.getDynamicSamplingContextFromSpan;
  n11.setMeasurement = ix2.setMeasurement;
  n11.isValidSampleRate = nx2.isValidSampleRate;
  n11.SEMANTIC_ATTRIBUTE_PROFILE_ID = iv.SEMANTIC_ATTRIBUTE_PROFILE_ID;
  n11.SEMANTIC_ATTRIBUTE_SENTRY_OP = iv.SEMANTIC_ATTRIBUTE_SENTRY_OP;
  n11.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = iv.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
  n11.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE = iv.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE;
  n11.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE = iv.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
  n11.createEventEnvelope = sU1.createEventEnvelope;
  n11.createSessionEnvelope = sU1.createSessionEnvelope;
  n11.addBreadcrumb = L9.addBreadcrumb;
  n11.captureCheckIn = L9.captureCheckIn;
  n11.captureEvent = L9.captureEvent;
  n11.captureException = L9.captureException;
  n11.captureMessage = L9.captureMessage;
  n11.captureSession = L9.captureSession;
  n11.close = L9.close;
  n11.configureScope = L9.configureScope;
  n11.endSession = L9.endSession;
  n11.flush = L9.flush;
  n11.getClient = L9.getClient;
  n11.getCurrentScope = L9.getCurrentScope;
  n11.isInitialized = L9.isInitialized;
  n11.lastEventId = L9.lastEventId;
  n11.setContext = L9.setContext;
  n11.setExtra = L9.setExtra;
  n11.setExtras = L9.setExtras;
  n11.setTag = L9.setTag;
  n11.setTags = L9.setTags;
  n11.setUser = L9.setUser;
  n11.startSession = L9.startSession;
  n11.startTransaction = L9.startTransaction;
  n11.withActiveSpan = L9.withActiveSpan;
  n11.withIsolationScope = L9.withIsolationScope;
  n11.withMonitor = L9.withMonitor;
  n11.withScope = L9.withScope;
  n11.Hub = Vw.Hub;
  n11.ensureHubOnCarrier = Vw.ensureHubOnCarrier;
  n11.getCurrentHub = Vw.getCurrentHub;
  n11.getHubFromCarrier = Vw.getHubFromCarrier;
  n11.getIsolationScope = Vw.getIsolationScope;
  n11.getMainCarrier = Vw.getMainCarrier;
  n11.makeMain = Vw.makeMain;
  n11.runWithAsyncContext = Vw.runWithAsyncContext;
  n11.setAsyncContextStrategy = Vw.setAsyncContextStrategy;
  n11.setHubOnCarrier = Vw.setHubOnCarrier;
  n11.closeSession = p11.closeSession;
  n11.makeSession = p11.makeSession;
  n11.updateSession = p11.updateSession;
  n11.SessionFlusher = rx2.SessionFlusher;
  n11.Scope = i11.Scope;
  n11.getGlobalScope = i11.getGlobalScope;
  n11.setGlobalScope = i11.setGlobalScope;
  n11.addGlobalEventProcessor = oU1.addGlobalEventProcessor;
  n11.notifyEventProcessors = oU1.notifyEventProcessors;
  n11.getEnvelopeEndpointWithUrlEncodedAuth = eU1.getEnvelopeEndpointWithUrlEncodedAuth;
  n11.getReportDialogEndpoint = eU1.getReportDialogEndpoint;
  n11.BaseClient = tU1.BaseClient;
  n11.addEventProcessor = tU1.addEventProcessor;
  n11.ServerRuntimeClient = ax2.ServerRuntimeClient;
  n11.initAndBind = Iv1.initAndBind;
  n11.setCurrentClient = Iv1.setCurrentClient;
  n11.createTransport = sx2.createTransport;
  n11.makeOfflineTransport = ox2.makeOfflineTransport;
  n11.makeMultiplexedTransport = ex2.makeMultiplexedTransport;
  n11.SDK_VERSION = tx2.SDK_VERSION;
  n11.addIntegration = Wm.addIntegration;
  n11.convertIntegrationFnToClass = Wm.convertIntegrationFnToClass;
  n11.defineIntegration = Wm.defineIntegration;
  n11.getIntegrationsToSetup = Wm.getIntegrationsToSetup;
  n11.applyScopeDataToEvent = dv1.applyScopeDataToEvent;
  n11.mergeScopeData = dv1.mergeScopeData;
  n11.prepareEvent = Ic2.prepareEvent;
  n11.createCheckInEnvelope = dc2.createCheckInEnvelope;
  n11.createSpanEnvelope = Gc2.createSpanEnvelope;
  n11.hasTracingEnabled = Zc2.hasTracingEnabled;
  n11.isSentryRequestUrl = Cc2.isSentryRequestUrl;
  n11.handleCallbackErrors = Wc2.handleCallbackErrors;
  n11.parameterize = wc2.parameterize;
  n11.spanIsSampled = wm.spanIsSampled;
  n11.spanToJSON = wm.spanToJSON;
  n11.spanToTraceContext = wm.spanToTraceContext;
  n11.spanToTraceHeader = wm.spanToTraceHeader;
  n11.getRootSpan = Bc2.getRootSpan;
  n11.applySdkMetadata = Ac2.applySdkMetadata;
  n11.DEFAULT_ENVIRONMENT = Vc2.DEFAULT_ENVIRONMENT;
  n11.ModuleMetadata = Gv1.ModuleMetadata;
  n11.moduleMetadataIntegration = Gv1.moduleMetadataIntegration;
  n11.RequestData = Zv1.RequestData;
  n11.requestDataIntegration = Zv1.requestDataIntegration;
  n11.InboundFilters = Cv1.InboundFilters;
  n11.inboundFiltersIntegration = Cv1.inboundFiltersIntegration;
  n11.FunctionToString = Wv1.FunctionToString;
  n11.functionToStringIntegration = Wv1.functionToStringIntegration;
  n11.LinkedErrors = wv1.LinkedErrors;
  n11.linkedErrorsIntegration = wv1.linkedErrorsIntegration;
  n11.metrics = Yc2.metrics;
  n11.Integrations = _c2
})
// @from(Start 212826, End 213008)
pI = Y((Bv1) => {
  Object.defineProperty(Bv1, "__esModule", {
    value: !0
  });
  var fi2 = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
  Bv1.DEBUG_BUILD = fi2
})
// @from(Start 213014, End 213452)
iX = Y((Vv1) => {
  var {
    _optionalChain: Av1
  } = V0();
  Object.defineProperty(Vv1, "__esModule", {
    value: !0
  });

  function Ri2(I) {
    let d = Av1([I, "call", (Z) => Z(), "access", (Z) => Z.getClient, "call", (Z) => Z(), "optionalAccess", (Z) => Z.getOptions, "call", (Z) => Z()]);
    return (Av1([d, "optionalAccess", (Z) => Z.instrumenter]) || "sentry") !== "sentry"
  }
  Vv1.shouldDisableAutoInstrumentation = Ri2
})
// @from(Start 213458, End 220468)
Hv1 = Y((Dv1) => {
  var {
    _optionalChain: Xw
  } = V0();
  Object.defineProperty(Dv1, "__esModule", {
    value: !0
  });
  var r11 = V4(),
    iI = V0(),
    Bm = pI(),
    vi2 = iX();
  class Am {
    static __initStatic() {
      this.id = "Express"
    }
    constructor(I = {}) {
      this.name = Am.id, this._router = I.router || I.app, this._methods = (Array.isArray(I.methods) ? I.methods : []).concat("use")
    }
    setupOnce(I, d) {
      if (!this._router) {
        Bm.DEBUG_BUILD && iI.logger.error("ExpressIntegration is missing an Express instance");
        return
      }
      if (vi2.shouldDisableAutoInstrumentation(d)) {
        Bm.DEBUG_BUILD && iI.logger.log("Express Integration is skipped because of instrumenter configuration.");
        return
      }
      Si2(this._router, this._methods), Li2(this._router)
    }
  }
  Am.__initStatic();

  function Xv1(I, d) {
    let G = I.length;
    switch (G) {
      case 2:
        return function(Z, C) {
          let W = C.__sentry_transaction;
          if (W) {
            let w = W.startChild({
              description: I.name,
              op: `middleware.express.${d}`,
              origin: "auto.middleware.express"
            });
            C.once("finish", () => {
              w.end()
            })
          }
          return I.call(this, Z, C)
        };
      case 3:
        return function(Z, C, W) {
          let w = C.__sentry_transaction,
            B = Xw([w, "optionalAccess", (A) => A.startChild, "call", (A) => A({
              description: I.name,
              op: `middleware.express.${d}`,
              origin: "auto.middleware.express"
            })]);
          I.call(this, Z, C, function(...A) {
            Xw([B, "optionalAccess", (V) => V.end, "call", (V) => V()]), W.call(this, ...A)
          })
        };
      case 4:
        return function(Z, C, W, w) {
          let B = W.__sentry_transaction,
            A = Xw([B, "optionalAccess", (V) => V.startChild, "call", (V) => V({
              description: I.name,
              op: `middleware.express.${d}`,
              origin: "auto.middleware.express"
            })]);
          I.call(this, Z, C, W, function(...V) {
            Xw([A, "optionalAccess", (X) => X.end, "call", (X) => X()]), w.call(this, ...V)
          })
        };
      default:
        throw new Error(`Express middleware takes 2-4 arguments. Got: ${G}`)
    }
  }

  function Ei2(I, d) {
    return I.map((G) => {
      if (typeof G === "function") return Xv1(G, d);
      if (Array.isArray(G)) return G.map((Z) => {
        if (typeof Z === "function") return Xv1(Z, d);
        return Z
      });
      return G
    })
  }

  function Mi2(I, d) {
    let G = I[d];
    return I[d] = function(...Z) {
      return G.call(this, ...Ei2(Z, d))
    }, I
  }

  function Si2(I, d = []) {
    d.forEach((G) => Mi2(I, G))
  }

  function Li2(I) {
    let d = "settings" in I;
    if (d && I._router === void 0 && I.lazyrouter) I.lazyrouter();
    let G = d ? I._router : I;
    if (!G) {
      Bm.DEBUG_BUILD && iI.logger.debug("Cannot instrument router for URL Parameterization (did not find a valid router)."), Bm.DEBUG_BUILD && iI.logger.debug("Routing instrumentation is currently only supported in Express 4.");
      return
    }
    let Z = Object.getPrototypeOf(G),
      C = Z.process_params;
    Z.process_params = function W(w, B, A, V, X) {
      if (!A._reconstructedRoute) A._reconstructedRoute = "";
      let {
        layerRoutePath: _,
        isRegex: F,
        isArray: g,
        numExtraSegments: J
      } = yi2(w);
      if (_ || F || g) A._hasParameters = !0;
      let K;
      if (_) K = _;
      else K = _v1(A.originalUrl, A._reconstructedRoute, w.path) || "";
      let Q = K.split("/").filter((P) => P.length > 0 && (F || g || !P.includes("*"))).join("/");
      if (Q && Q.length > 0) A._reconstructedRoute += `/${Q}${F?"/":""}`;
      let E = iI.getNumberOfUrlSegments(iI.stripUrlQueryAndFragment(A.originalUrl || "")) + J,
        S = iI.getNumberOfUrlSegments(A._reconstructedRoute);
      if (E === S) {
        if (!A._hasParameters) {
          if (A._reconstructedRoute !== A.originalUrl) A._reconstructedRoute = A.originalUrl ? iI.stripUrlQueryAndFragment(A.originalUrl) : A.originalUrl
        }
        let P = V.__sentry_transaction,
          $ = P && r11.spanToJSON(P).data || {};
        if (P && $[r11.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] !== "custom") {
          let h = A._reconstructedRoute || "/",
            [O, T] = iI.extractPathForTransaction(A, {
              path: !0,
              method: !0,
              customRoute: h
            });
          P.updateName(O), P.setAttribute(r11.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, T)
        }
      }
      return C.call(this, w, B, A, V, X)
    }
  }
  var Yv1 = (I, d, G) => {
    if (!I || !d || !G || Object.keys(G).length === 0 || !Xw([G, "access", (V) => V[0], "optionalAccess", (V) => V.offset])) return;
    let Z = G.sort((V, X) => V.offset - X.offset),
      W = new RegExp(d, `${d.flags}d`).exec(I);
    if (!W || !W.indices) return;
    let [, ...w] = W.indices;
    if (w.length !== Z.length) return;
    let B = I,
      A = 0;
    return w.forEach((V, X) => {
      if (V) {
        let [_, F] = V, g = B.substring(0, _ - A), J = `:${Z[X].name}`, K = B.substring(F - A);
        B = g + J + K, A = A + (F - _ - J.length)
      }
    }), B
  };

  function yi2(I) {
    let d = Xw([I, "access", (w) => w.route, "optionalAccess", (w) => w.path]),
      G = iI.isRegExp(d),
      Z = Array.isArray(d);
    if (!d) {
      let [w] = iI.GLOBAL_OBJ.process.versions.node.split(".").map(Number);
      if (w >= 16) d = Yv1(I.path, I.regexp, I.keys)
    }
    if (!d) return {
      isRegex: G,
      isArray: Z,
      numExtraSegments: 0
    };
    let C = Z ? Math.max(Pi2(d) - iI.getNumberOfUrlSegments(I.path || ""), 0) : 0;
    return {
      layerRoutePath: $i2(Z, d),
      isRegex: G,
      isArray: Z,
      numExtraSegments: C
    }
  }

  function Pi2(I) {
    return I.reduce((d, G) => {
      return d + iI.getNumberOfUrlSegments(G.toString())
    }, 0)
  }

  function $i2(I, d) {
    if (I) return d.map((G) => G.toString()).join(",");
    return d && d.toString()
  }

  function _v1(I, d, G) {
    let Z = iI.stripUrlQueryAndFragment(I || ""),
      C = Xw([Z, "optionalAccess", (A) => A.split, "call", (A) => A("/"), "access", (A) => A.filter, "call", (A) => A((V) => !!V)]),
      W = 0,
      w = Xw([d, "optionalAccess", (A) => A.split, "call", (A) => A("/"), "access", (A) => A.filter, "call", (A) => A((V) => !!V), "access", (A) => A.length]) || 0;
    return Xw([G, "optionalAccess", (A) => A.split, "call", (A) => A("/"), "access", (A) => A.filter, "call", (A) => A((V) => {
      if (Xw([C, "optionalAccess", (X) => X[w + W]]) === V) return W += 1, !0;
      return !1
    }), "access", (A) => A.join, "call", (A) => A("/")])
  }
  Dv1.Express = Am;
  Dv1.extractOriginalRoute = Yv1;
  Dv1.preventDuplicateSegments = _v1
})
// @from(Start 220474, End 223047)
gv1 = Y((Fv1) => {
  var {
    _optionalChain: zN
  } = V0();
  Object.defineProperty(Fv1, "__esModule", {
    value: !0
  });
  var QN = V0(),
    a11 = pI(),
    mi2 = iX();
  class Vm {
    static __initStatic() {
      this.id = "Postgres"
    }
    constructor(I = {}) {
      this.name = Vm.id, this._usePgNative = !!I.usePgNative, this._module = I.module
    }
    loadDependency() {
      return this._module = this._module || QN.loadModule("pg")
    }
    setupOnce(I, d) {
      if (mi2.shouldDisableAutoInstrumentation(d)) {
        a11.DEBUG_BUILD && QN.logger.log("Postgres Integration is skipped because of instrumenter configuration.");
        return
      }
      let G = this.loadDependency();
      if (!G) {
        a11.DEBUG_BUILD && QN.logger.error("Postgres Integration was unable to require `pg` package.");
        return
      }
      let Z = this._usePgNative ? zN([G, "access", (C) => C.native, "optionalAccess", (C) => C.Client]) : G.Client;
      if (!Z) {
        a11.DEBUG_BUILD && QN.logger.error("Postgres Integration was unable to access 'pg-native' bindings.");
        return
      }
      QN.fill(Z.prototype, "query", function(C) {
        return function(W, w, B) {
          let V = d().getScope().getSpan(),
            X = {
              "db.system": "postgresql"
            };
          try {
            if (this.database) X["db.name"] = this.database;
            if (this.host) X["server.address"] = this.host;
            if (this.port) X["server.port"] = this.port;
            if (this.user) X["db.user"] = this.user
          } catch (g) {}
          let _ = zN([V, "optionalAccess", (g) => g.startChild, "call", (g) => g({
            description: typeof W === "string" ? W : W.text,
            op: "db",
            origin: "auto.db.postgres",
            data: X
          })]);
          if (typeof B === "function") return C.call(this, W, w, function(g, J) {
            zN([_, "optionalAccess", (K) => K.end, "call", (K) => K()]), B(g, J)
          });
          if (typeof w === "function") return C.call(this, W, function(g, J) {
            zN([_, "optionalAccess", (K) => K.end, "call", (K) => K()]), w(g, J)
          });
          let F = typeof w !== "undefined" ? C.call(this, W, w) : C.call(this, W);
          if (QN.isThenable(F)) return F.then((g) => {
            return zN([_, "optionalAccess", (J) => J.end, "call", (J) => J()]), g
          });
          return zN([_, "optionalAccess", (g) => g.end, "call", (g) => g()]), F
        }
      })
    }
  }
  Vm.__initStatic();
  Fv1.Postgres = Vm
})
// @from(Start 223053, End 225409)
Kv1 = Y((Jv1) => {
  var {
    _optionalChain: bi2
  } = V0();
  Object.defineProperty(Jv1, "__esModule", {
    value: !0
  });
  var nv = V0(),
    s11 = pI(),
    hi2 = iX();
  class Xm {
    static __initStatic() {
      this.id = "Mysql"
    }
    constructor() {
      this.name = Xm.id
    }
    loadDependency() {
      return this._module = this._module || nv.loadModule("mysql/lib/Connection.js")
    }
    setupOnce(I, d) {
      if (hi2.shouldDisableAutoInstrumentation(d)) {
        s11.DEBUG_BUILD && nv.logger.log("Mysql Integration is skipped because of instrumenter configuration.");
        return
      }
      let G = this.loadDependency();
      if (!G) {
        s11.DEBUG_BUILD && nv.logger.error("Mysql Integration was unable to require `mysql` package.");
        return
      }
      let Z = void 0;
      try {
        G.prototype.connect = new Proxy(G.prototype.connect, {
          apply(w, B, A) {
            if (!Z) Z = B.config;
            return w.apply(B, A)
          }
        })
      } catch (w) {
        s11.DEBUG_BUILD && nv.logger.error("Mysql Integration was unable to instrument `mysql` config.")
      }

      function C() {
        if (!Z) return {};
        return {
          "server.address": Z.host,
          "server.port": Z.port,
          "db.user": Z.user
        }
      }

      function W(w) {
        if (!w) return;
        let B = C();
        Object.keys(B).forEach((A) => {
          w.setAttribute(A, B[A])
        }), w.end()
      }
      nv.fill(G, "createQuery", function(w) {
        return function(B, A, V) {
          let _ = d().getScope().getSpan(),
            F = bi2([_, "optionalAccess", (J) => J.startChild, "call", (J) => J({
              description: typeof B === "string" ? B : B.sql,
              op: "db",
              origin: "auto.db.mysql",
              data: {
                "db.system": "mysql"
              }
            })]);
          if (typeof V === "function") return w.call(this, B, A, function(J, K, Q) {
            W(F), V(J, K, Q)
          });
          if (typeof A === "function") return w.call(this, B, function(J, K, Q) {
            W(F), A(J, K, Q)
          });
          let g = w.call(this, B, A);
          return g.on("end", () => {
            W(F)
          }), g
        }
      })
    }
  }
  Xm.__initStatic();
  Jv1.Mysql = Xm
})
// @from(Start 225415, End 230548)
Qv1 = Y((zv1) => {
  var {
    _optionalChain: nX
  } = V0();
  Object.defineProperty(zv1, "__esModule", {
    value: !0
  });
  var rv = V0(),
    Nv1 = pI(),
    ki2 = iX(),
    xi2 = ["aggregate", "bulkWrite", "countDocuments", "createIndex", "createIndexes", "deleteMany", "deleteOne", "distinct", "drop", "dropIndex", "dropIndexes", "estimatedDocumentCount", "find", "findOne", "findOneAndDelete", "findOneAndReplace", "findOneAndUpdate", "indexes", "indexExists", "indexInformation", "initializeOrderedBulkOp", "insertMany", "insertOne", "isCapped", "mapReduce", "options", "parallelCollectionScan", "rename", "replaceOne", "stats", "updateMany", "updateOne"],
    ci2 = {
      bulkWrite: ["operations"],
      countDocuments: ["query"],
      createIndex: ["fieldOrSpec"],
      createIndexes: ["indexSpecs"],
      deleteMany: ["filter"],
      deleteOne: ["filter"],
      distinct: ["key", "query"],
      dropIndex: ["indexName"],
      find: ["query"],
      findOne: ["query"],
      findOneAndDelete: ["filter"],
      findOneAndReplace: ["filter", "replacement"],
      findOneAndUpdate: ["filter", "update"],
      indexExists: ["indexes"],
      insertMany: ["docs"],
      insertOne: ["doc"],
      mapReduce: ["map", "reduce"],
      rename: ["newName"],
      replaceOne: ["filter", "doc"],
      updateMany: ["filter", "update"],
      updateOne: ["filter", "update"]
    };

  function pi2(I) {
    return I && typeof I === "object" && I.once && typeof I.once === "function"
  }
  class Ym {
    static __initStatic() {
      this.id = "Mongo"
    }
    constructor(I = {}) {
      this.name = Ym.id, this._operations = Array.isArray(I.operations) ? I.operations : xi2, this._describeOperations = "describeOperations" in I ? I.describeOperations : !0, this._useMongoose = !!I.useMongoose
    }
    loadDependency() {
      let I = this._useMongoose ? "mongoose" : "mongodb";
      return this._module = this._module || rv.loadModule(I)
    }
    setupOnce(I, d) {
      if (ki2.shouldDisableAutoInstrumentation(d)) {
        Nv1.DEBUG_BUILD && rv.logger.log("Mongo Integration is skipped because of instrumenter configuration.");
        return
      }
      let G = this.loadDependency();
      if (!G) {
        let Z = this._useMongoose ? "mongoose" : "mongodb";
        Nv1.DEBUG_BUILD && rv.logger.error(`Mongo Integration was unable to require \`${Z}\` package.`);
        return
      }
      this._instrumentOperations(G.Collection, this._operations, d)
    }
    _instrumentOperations(I, d, G) {
      d.forEach((Z) => this._patchOperation(I, Z, G))
    }
    _patchOperation(I, d, G) {
      if (!(d in I.prototype)) return;
      let Z = this._getSpanContextFromOperationArguments.bind(this);
      rv.fill(I.prototype, d, function(C) {
        return function(...W) {
          let w = W[W.length - 1],
            B = G(),
            A = B.getScope(),
            V = B.getClient(),
            X = A.getSpan(),
            _ = nX([V, "optionalAccess", (g) => g.getOptions, "call", (g) => g(), "access", (g) => g.sendDefaultPii]);
          if (typeof w !== "function" || d === "mapReduce" && W.length === 2) {
            let g = nX([X, "optionalAccess", (K) => K.startChild, "call", (K) => K(Z(this, d, W, _))]),
              J = C.call(this, ...W);
            if (rv.isThenable(J)) return J.then((K) => {
              return nX([g, "optionalAccess", (Q) => Q.end, "call", (Q) => Q()]), K
            });
            else if (pi2(J)) {
              let K = J;
              try {
                K.once("close", () => {
                  nX([g, "optionalAccess", (Q) => Q.end, "call", (Q) => Q()])
                })
              } catch (Q) {
                nX([g, "optionalAccess", (E) => E.end, "call", (E) => E()])
              }
              return K
            } else return nX([g, "optionalAccess", (K) => K.end, "call", (K) => K()]), J
          }
          let F = nX([X, "optionalAccess", (g) => g.startChild, "call", (g) => g(Z(this, d, W.slice(0, -1)))]);
          return C.call(this, ...W.slice(0, -1), function(g, J) {
            nX([F, "optionalAccess", (K) => K.end, "call", (K) => K()]), w(g, J)
          })
        }
      })
    }
    _getSpanContextFromOperationArguments(I, d, G, Z = !1) {
      let C = {
          "db.system": "mongodb",
          "db.name": I.dbName,
          "db.operation": d,
          "db.mongodb.collection": I.collectionName
        },
        W = {
          op: "db",
          origin: "auto.db.mongo",
          description: d,
          data: C
        },
        w = ci2[d],
        B = Array.isArray(this._describeOperations) ? this._describeOperations.includes(d) : this._describeOperations;
      if (!w || !B || !Z) return W;
      try {
        if (d === "mapReduce") {
          let [A, V] = G;
          C[w[0]] = typeof A === "string" ? A : A.name || "<anonymous>", C[w[1]] = typeof V === "string" ? V : V.name || "<anonymous>"
        } else
          for (let A = 0; A < w.length; A++) C[`db.mongodb.${w[A]}`] = JSON.stringify(G[A])
      } catch (A) {}
      return W
    }
  }
  Ym.__initStatic();
  zv1.Mongo = Ym
})
// @from(Start 230554, End 232089)
Rv1 = Y((qv1) => {
  Object.defineProperty(qv1, "__esModule", {
    value: !0
  });
  var o11 = V4(),
    fv1 = V0(),
    ni2 = pI(),
    ri2 = iX();

  function ai2(I) {
    return !!I && !!I.$use
  }
  class _m {
    static __initStatic() {
      this.id = "Prisma"
    }
    constructor(I = {}) {
      if (this.name = _m.id, ai2(I.client) && !I.client._sentryInstrumented) {
        fv1.addNonEnumerableProperty(I.client, "_sentryInstrumented", !0);
        let d = {};
        try {
          let G = I.client._engineConfig;
          if (G) {
            let {
              activeProvider: Z,
              clientVersion: C
            } = G;
            if (Z) d["db.system"] = Z;
            if (C) d["db.prisma.version"] = C
          }
        } catch (G) {}
        I.client.$use((G, Z) => {
          if (ri2.shouldDisableAutoInstrumentation(o11.getCurrentHub)) return Z(G);
          let {
            action: C,
            model: W
          } = G;
          return o11.startSpan({
            name: W ? `${W} ${C}` : C,
            onlyIfParent: !0,
            op: "db.prisma",
            attributes: {
              [o11.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.prisma"
            },
            data: {
              ...d,
              "db.operation": C
            }
          }, () => Z(G))
        })
      } else ni2.DEBUG_BUILD && fv1.logger.warn("Unsupported Prisma client provided to PrismaIntegration. Provided client:", I.client)
    }
    setupOnce() {}
  }
  _m.__initStatic();
  qv1.Prisma = _m
})
// @from(Start 232095, End 233822)
Ev1 = Y((vv1) => {
  var {
    _optionalChain: fN
  } = V0();
  Object.defineProperty(vv1, "__esModule", {
    value: !0
  });
  var av = V0(),
    Uv1 = pI(),
    oi2 = iX();
  class Dm {
    static __initStatic() {
      this.id = "GraphQL"
    }
    constructor() {
      this.name = Dm.id
    }
    loadDependency() {
      return this._module = this._module || av.loadModule("graphql/execution/execute.js")
    }
    setupOnce(I, d) {
      if (oi2.shouldDisableAutoInstrumentation(d)) {
        Uv1.DEBUG_BUILD && av.logger.log("GraphQL Integration is skipped because of instrumenter configuration.");
        return
      }
      let G = this.loadDependency();
      if (!G) {
        Uv1.DEBUG_BUILD && av.logger.error("GraphQL Integration was unable to require graphql/execution package.");
        return
      }
      av.fill(G, "execute", function(Z) {
        return function(...C) {
          let W = d().getScope(),
            w = W.getSpan(),
            B = fN([w, "optionalAccess", (V) => V.startChild, "call", (V) => V({
              description: "execute",
              op: "graphql.execute",
              origin: "auto.graphql.graphql"
            })]);
          fN([W, "optionalAccess", (V) => V.setSpan, "call", (V) => V(B)]);
          let A = Z.call(this, ...C);
          if (av.isThenable(A)) return A.then((V) => {
            return fN([B, "optionalAccess", (X) => X.end, "call", (X) => X()]), fN([W, "optionalAccess", (X) => X.setSpan, "call", (X) => X(w)]), V
          });
          return fN([B, "optionalAccess", (V) => V.end, "call", (V) => V()]), fN([W, "optionalAccess", (V) => V.setSpan, "call", (V) => V(w)]), A
        }
      })
    }
  }
  Dm.__initStatic();
  vv1.GraphQL = Dm
})
// @from(Start 233828, End 237345)
Lv1 = Y((Sv1) => {
  var {
    _optionalChain: e11
  } = V0();
  Object.defineProperty(Sv1, "__esModule", {
    value: !0
  });
  var Q7 = V0(),
    Hm = pI(),
    ti2 = iX();
  class Fm {
    static __initStatic() {
      this.id = "Apollo"
    }
    constructor(I = {
      useNestjs: !1
    }) {
      this.name = Fm.id, this._useNest = !!I.useNestjs
    }
    loadDependency() {
      if (this._useNest) this._module = this._module || Q7.loadModule("@nestjs/graphql");
      else this._module = this._module || Q7.loadModule("apollo-server-core");
      return this._module
    }
    setupOnce(I, d) {
      if (ti2.shouldDisableAutoInstrumentation(d)) {
        Hm.DEBUG_BUILD && Q7.logger.log("Apollo Integration is skipped because of instrumenter configuration.");
        return
      }
      if (this._useNest) {
        let G = this.loadDependency();
        if (!G) {
          Hm.DEBUG_BUILD && Q7.logger.error("Apollo-NestJS Integration was unable to require @nestjs/graphql package.");
          return
        }
        Q7.fill(G.GraphQLFactory.prototype, "mergeWithSchema", function(Z) {
          return function(...C) {
            return Q7.fill(this.resolversExplorerService, "explore", function(W) {
              return function() {
                let w = Q7.arrayify(W.call(this));
                return Mv1(w, d)
              }
            }), Z.call(this, ...C)
          }
        })
      } else {
        let G = this.loadDependency();
        if (!G) {
          Hm.DEBUG_BUILD && Q7.logger.error("Apollo Integration was unable to require apollo-server-core package.");
          return
        }
        Q7.fill(G.ApolloServerBase.prototype, "constructSchema", function(Z) {
          return function() {
            if (!this.config.resolvers) {
              if (Hm.DEBUG_BUILD) {
                if (this.config.schema) Q7.logger.warn("Apollo integration is not able to trace `ApolloServer` instances constructed via `schema` property.If you are using NestJS with Apollo, please use `Sentry.Integrations.Apollo({ useNestjs: true })` instead."), Q7.logger.warn();
                else if (this.config.modules) Q7.logger.warn("Apollo integration is not able to trace `ApolloServer` instances constructed via `modules` property.");
                Q7.logger.error("Skipping tracing as no resolvers found on the `ApolloServer` instance.")
              }
              return Z.call(this)
            }
            let C = Q7.arrayify(this.config.resolvers);
            return this.config.resolvers = Mv1(C, d), Z.call(this)
          }
        })
      }
    }
  }
  Fm.__initStatic();

  function Mv1(I, d) {
    return I.map((G) => {
      return Object.keys(G).forEach((Z) => {
        Object.keys(G[Z]).forEach((C) => {
          if (typeof G[Z][C] !== "function") return;
          In2(G, Z, C, d)
        })
      }), G
    })
  }

  function In2(I, d, G, Z) {
    Q7.fill(I[d], G, function(C) {
      return function(...W) {
        let B = Z().getScope().getSpan(),
          A = e11([B, "optionalAccess", (X) => X.startChild, "call", (X) => X({
            description: `${d}.${G}`,
            op: "graphql.resolve",
            origin: "auto.graphql.apollo"
          })]),
          V = C.call(this, ...W);
        if (Q7.isThenable(V)) return V.then((X) => {
          return e11([A, "optionalAccess", (_) => _.end, "call", (_) => _()]), X
        });
        return e11([A, "optionalAccess", (X) => X.end, "call", (X) => X()]), V
      }
    })
  }
  Sv1.Apollo = Fm
})
// @from(Start 237351, End 238113)
Pv1 = Y((yv1, rX) => {
  Object.defineProperty(yv1, "__esModule", {
    value: !0
  });
  var zF = V0(),
    Gn2 = [() => {
      return new(zF.dynamicRequire(rX, "./apollo")).Apollo
    }, () => {
      return new(zF.dynamicRequire(rX, "./apollo")).Apollo({
        useNestjs: !0
      })
    }, () => {
      return new(zF.dynamicRequire(rX, "./graphql")).GraphQL
    }, () => {
      return new(zF.dynamicRequire(rX, "./mongo")).Mongo
    }, () => {
      return new(zF.dynamicRequire(rX, "./mongo")).Mongo({
        mongoose: !0
      })
    }, () => {
      return new(zF.dynamicRequire(rX, "./mysql")).Mysql
    }, () => {
      return new(zF.dynamicRequire(rX, "./postgres")).Postgres
    }];
  yv1.lazyLoadedNodePerformanceMonitoringIntegrations = Gn2
})
// @from(Start 238119, End 238267)
kd = Y(($v1) => {
  Object.defineProperty($v1, "__esModule", {
    value: !0
  });
  var Cn2 = V0(),
    Wn2 = Cn2.GLOBAL_OBJ;
  $v1.WINDOW = Wn2
})
// @from(Start 238273, End 239126)
I01 = Y((mv1) => {
  Object.defineProperty(mv1, "__esModule", {
    value: !0
  });
  var uv1 = V4(),
    Tv1 = V0(),
    Ov1 = pI(),
    t11 = kd();

  function Bn2() {
    if (t11.WINDOW.document) t11.WINDOW.document.addEventListener("visibilitychange", () => {
      let I = uv1.getActiveTransaction();
      if (t11.WINDOW.document.hidden && I) {
        let {
          op: G,
          status: Z
        } = uv1.spanToJSON(I);
        if (Ov1.DEBUG_BUILD && Tv1.logger.log(`[Tracing] Transaction: cancelled -> since tab moved to the background, op: ${G}`), !Z) I.setStatus("cancelled");
        I.setTag("visibilitychange", "document.hidden"), I.end()
      }
    });
    else Ov1.DEBUG_BUILD && Tv1.logger.warn("[Tracing] Could not set up background tab detection due to lack of global document")
  }
  mv1.registerBackgroundTabDetection = Bn2
})
// @from(Start 239132, End 239468)
qN = Y((lv1) => {
  Object.defineProperty(lv1, "__esModule", {
    value: !0
  });
  var Vn2 = (I, d, G) => {
    let Z, C;
    return (W) => {
      if (d.value >= 0) {
        if (W || G) {
          if (C = d.value - (Z || 0), C || Z === void 0) Z = d.value, d.delta = C, I(d)
        }
      }
    }
  };
  lv1.bindReporter = Vn2
})
// @from(Start 239474, End 239701)
hv1 = Y((bv1) => {
  Object.defineProperty(bv1, "__esModule", {
    value: !0
  });
  var Yn2 = () => {
    return `v3-${Date.now()}-${Math.floor(Math.random()*8999999999999)+1000000000000}`
  };
  bv1.generateUniqueID = Yn2
})
// @from(Start 239707, End 240570)
ov = Y((jv1) => {
  Object.defineProperty(jv1, "__esModule", {
    value: !0
  });
  var sv = kd(),
    Dn2 = () => {
      let I = sv.WINDOW.performance.timing,
        d = sv.WINDOW.performance.navigation.type,
        G = {
          entryType: "navigation",
          startTime: 0,
          type: d == 2 ? "back_forward" : d === 1 ? "reload" : "navigate"
        };
      for (let Z in I)
        if (Z !== "navigationStart" && Z !== "toJSON") G[Z] = Math.max(I[Z] - I.navigationStart, 0);
      return G
    },
    Hn2 = () => {
      if (sv.WINDOW.__WEB_VITALS_POLYFILL__) return sv.WINDOW.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || Dn2());
      else return sv.WINDOW.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
    };
  jv1.getNavigationEntry = Hn2
})
// @from(Start 240576, End 240816)
gm = Y((kv1) => {
  Object.defineProperty(kv1, "__esModule", {
    value: !0
  });
  var gn2 = ov(),
    Jn2 = () => {
      let I = gn2.getNavigationEntry();
      return I && I.activationStart || 0
    };
  kv1.getActivationStart = Jn2
})
// @from(Start 240822, End 241480)
RN = Y((cv1) => {
  Object.defineProperty(cv1, "__esModule", {
    value: !0
  });
  var xv1 = kd(),
    Nn2 = hv1(),
    zn2 = gm(),
    Qn2 = ov(),
    fn2 = (I, d) => {
      let G = Qn2.getNavigationEntry(),
        Z = "navigate";
      if (G)
        if (xv1.WINDOW.document && xv1.WINDOW.document.prerendering || zn2.getActivationStart() > 0) Z = "prerender";
        else Z = G.type.replace(/_/g, "-");
      return {
        name: I,
        value: typeof d === "undefined" ? -1 : d,
        rating: "good",
        delta: 0,
        entries: [],
        id: Nn2.generateUniqueID(),
        navigationType: Z
      }
    };
  cv1.initMetric = fn2
})
// @from(Start 241486, End 241932)
QF = Y((pv1) => {
  Object.defineProperty(pv1, "__esModule", {
    value: !0
  });
  var Rn2 = (I, d, G) => {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(I)) {
        let Z = new PerformanceObserver((C) => {
          d(C.getEntries())
        });
        return Z.observe(Object.assign({
          type: I,
          buffered: !0
        }, G || {})), Z
      }
    } catch (Z) {}
    return
  };
  pv1.observe = Rn2
})
// @from(Start 241938, End 242444)
UN = Y((nv1) => {
  Object.defineProperty(nv1, "__esModule", {
    value: !0
  });
  var iv1 = kd(),
    vn2 = (I, d) => {
      let G = (Z) => {
        if (Z.type === "pagehide" || iv1.WINDOW.document.visibilityState === "hidden") {
          if (I(Z), d) removeEventListener("visibilitychange", G, !0), removeEventListener("pagehide", G, !0)
        }
      };
      if (iv1.WINDOW.document) addEventListener("visibilitychange", G, !0), addEventListener("pagehide", G, !0)
    };
  nv1.onHidden = vn2
})
// @from(Start 242450, End 243440)
av1 = Y((rv1) => {
  Object.defineProperty(rv1, "__esModule", {
    value: !0
  });
  var Mn2 = qN(),
    Sn2 = RN(),
    Ln2 = QF(),
    yn2 = UN(),
    Pn2 = (I, d = {}) => {
      let G = Sn2.initMetric("CLS", 0),
        Z, C = 0,
        W = [],
        w = (A) => {
          A.forEach((V) => {
            if (!V.hadRecentInput) {
              let X = W[0],
                _ = W[W.length - 1];
              if (C && W.length !== 0 && V.startTime - _.startTime < 1000 && V.startTime - X.startTime < 5000) C += V.value, W.push(V);
              else C = V.value, W = [V];
              if (C > G.value) {
                if (G.value = C, G.entries = W, Z) Z()
              }
            }
          })
        },
        B = Ln2.observe("layout-shift", w);
      if (B) {
        Z = Mn2.bindReporter(I, G, d.reportAllChanges);
        let A = () => {
          w(B.takeRecords()), Z(!0)
        };
        return yn2.onHidden(A), A
      }
      return
    };
  rv1.onCLS = Pn2
})
// @from(Start 243446, End 244056)
Nm = Y((sv1) => {
  Object.defineProperty(sv1, "__esModule", {
    value: !0
  });
  var Jm = kd(),
    un2 = UN(),
    Km = -1,
    Tn2 = () => {
      if (Jm.WINDOW.document && Jm.WINDOW.document.visibilityState) Km = Jm.WINDOW.document.visibilityState === "hidden" && !Jm.WINDOW.document.prerendering ? 0 : 1 / 0
    },
    On2 = () => {
      un2.onHidden(({
        timeStamp: I
      }) => {
        Km = I
      }, !0)
    },
    mn2 = () => {
      if (Km < 0) Tn2(), On2();
      return {
        get firstHiddenTime() {
          return Km
        }
      }
    };
  sv1.getVisibilityWatcher = mn2
})
// @from(Start 244062, End 244717)
ev1 = Y((ov1) => {
  Object.defineProperty(ov1, "__esModule", {
    value: !0
  });
  var bn2 = qN(),
    hn2 = Nm(),
    jn2 = RN(),
    kn2 = QF(),
    xn2 = UN(),
    cn2 = (I) => {
      let d = hn2.getVisibilityWatcher(),
        G = jn2.initMetric("FID"),
        Z, C = (B) => {
          if (B.startTime < d.firstHiddenTime) G.value = B.processingStart - B.startTime, G.entries.push(B), Z(!0)
        },
        W = (B) => {
          B.forEach(C)
        },
        w = kn2.observe("first-input", W);
      if (Z = bn2.bindReporter(I, G), w) xn2.onHidden(() => {
        W(w.takeRecords()), w.disconnect()
      }, !0)
    };
  ov1.onFID = cn2
})
// @from(Start 244723, End 245437)
dE1 = Y((IE1) => {
  Object.defineProperty(IE1, "__esModule", {
    value: !0
  });
  var in2 = QF(),
    tv1 = 0,
    d01 = 1 / 0,
    zm = 0,
    nn2 = (I) => {
      I.forEach((d) => {
        if (d.interactionId) d01 = Math.min(d01, d.interactionId), zm = Math.max(zm, d.interactionId), tv1 = zm ? (zm - d01) / 7 + 1 : 0
      })
    },
    G01, rn2 = () => {
      return G01 ? tv1 : performance.interactionCount || 0
    },
    an2 = () => {
      if ("interactionCount" in performance || G01) return;
      G01 = in2.observe("event", nn2, {
        type: "event",
        buffered: !0,
        durationThreshold: 0
      })
    };
  IE1.getInteractionCount = rn2;
  IE1.initInteractionCountPolyfill = an2
})
// @from(Start 245443, End 247391)
BE1 = Y((wE1) => {
  Object.defineProperty(wE1, "__esModule", {
    value: !0
  });
  var en2 = qN(),
    tn2 = RN(),
    Ir2 = QF(),
    dr2 = UN(),
    CE1 = dE1(),
    WE1 = () => {
      return CE1.getInteractionCount()
    },
    GE1 = 10,
    EA = [],
    Z01 = {},
    ZE1 = (I) => {
      let d = EA[EA.length - 1],
        G = Z01[I.interactionId];
      if (G || EA.length < GE1 || I.duration > d.latency) {
        if (G) G.entries.push(I), G.latency = Math.max(G.latency, I.duration);
        else {
          let Z = {
            id: I.interactionId,
            latency: I.duration,
            entries: [I]
          };
          Z01[Z.id] = Z, EA.push(Z)
        }
        EA.sort((Z, C) => C.latency - Z.latency), EA.splice(GE1).forEach((Z) => {
          delete Z01[Z.id]
        })
      }
    },
    Gr2 = () => {
      let I = Math.min(EA.length - 1, Math.floor(WE1() / 50));
      return EA[I]
    },
    Zr2 = (I, d) => {
      d = d || {}, CE1.initInteractionCountPolyfill();
      let G = tn2.initMetric("INP"),
        Z, C = (w) => {
          w.forEach((A) => {
            if (A.interactionId) ZE1(A);
            if (A.entryType === "first-input") {
              if (!EA.some((X) => {
                  return X.entries.some((_) => {
                    return A.duration === _.duration && A.startTime === _.startTime
                  })
                })) ZE1(A)
            }
          });
          let B = Gr2();
          if (B && B.latency !== G.value) G.value = B.latency, G.entries = B.entries, Z()
        },
        W = Ir2.observe("event", C, {
          durationThreshold: d.durationThreshold || 40
        });
      if (Z = en2.bindReporter(I, G, d.reportAllChanges), W) W.observe({
        type: "first-input",
        buffered: !0
      }), dr2.onHidden(() => {
        if (C(W.takeRecords()), G.value < 0 && WE1() > 0) G.value = 0, G.entries = [];
        Z(!0)
      })
    };
  wE1.onINP = Zr2
})
// @from(Start 247397, End 248433)
XE1 = Y((VE1) => {
  Object.defineProperty(VE1, "__esModule", {
    value: !0
  });
  var Wr2 = kd(),
    wr2 = qN(),
    Br2 = gm(),
    Ar2 = Nm(),
    Vr2 = RN(),
    Xr2 = QF(),
    Yr2 = UN(),
    AE1 = {},
    _r2 = (I) => {
      let d = Ar2.getVisibilityWatcher(),
        G = Vr2.initMetric("LCP"),
        Z, C = (w) => {
          let B = w[w.length - 1];
          if (B) {
            let A = Math.max(B.startTime - Br2.getActivationStart(), 0);
            if (A < d.firstHiddenTime) G.value = A, G.entries = [B], Z()
          }
        },
        W = Xr2.observe("largest-contentful-paint", C);
      if (W) {
        Z = wr2.bindReporter(I, G);
        let w = () => {
          if (!AE1[G.id]) C(W.takeRecords()), W.disconnect(), AE1[G.id] = !0, Z(!0)
        };
        return ["keydown", "click"].forEach((B) => {
          if (Wr2.WINDOW.document) addEventListener(B, w, {
            once: !0,
            capture: !0
          })
        }), Yr2.onHidden(w, !0), w
      }
      return
    };
  VE1.onLCP = _r2
})
// @from(Start 248439, End 249332)
_E1 = Y((YE1) => {
  Object.defineProperty(YE1, "__esModule", {
    value: !0
  });
  var C01 = kd(),
    Hr2 = qN(),
    Fr2 = gm(),
    gr2 = ov(),
    Jr2 = RN(),
    W01 = (I) => {
      if (!C01.WINDOW.document) return;
      if (C01.WINDOW.document.prerendering) addEventListener("prerenderingchange", () => W01(I), !0);
      else if (C01.WINDOW.document.readyState !== "complete") addEventListener("load", () => W01(I), !0);
      else setTimeout(I, 0)
    },
    Kr2 = (I, d) => {
      d = d || {};
      let G = Jr2.initMetric("TTFB"),
        Z = Hr2.bindReporter(I, G, d.reportAllChanges);
      W01(() => {
        let C = gr2.getNavigationEntry();
        if (C) {
          if (G.value = Math.max(C.responseStart - Fr2.getActivationStart(), 0), G.value < 0 || G.value > performance.now()) return;
          G.entries = [C], Z(!0)
        }
      })
    };
  YE1.onTTFB = Kr2
})
// @from(Start 249338, End 251783)
EN = Y((QE1) => {
  Object.defineProperty(QE1, "__esModule", {
    value: !0
  });
  var DE1 = V0(),
    zr2 = pI(),
    Qr2 = av1(),
    fr2 = ev1(),
    qr2 = BE1(),
    Rr2 = XE1(),
    Ur2 = QF(),
    vr2 = _E1(),
    ev = {},
    Qm = {},
    HE1, FE1, gE1, JE1, KE1;

  function Er2(I, d = !1) {
    return tv("cls", I, $r2, HE1, d)
  }

  function Mr2(I, d = !1) {
    return tv("lcp", I, Tr2, gE1, d)
  }

  function Sr2(I) {
    return tv("ttfb", I, Or2, JE1)
  }

  function Lr2(I) {
    return tv("fid", I, ur2, FE1)
  }

  function yr2(I) {
    return tv("inp", I, mr2, KE1)
  }

  function Pr2(I, d) {
    if (NE1(I, d), !Qm[I]) lr2(I), Qm[I] = !0;
    return zE1(I, d)
  }

  function vN(I, d) {
    let G = ev[I];
    if (!G || !G.length) return;
    for (let Z of G) try {
      Z(d)
    } catch (C) {
      zr2.DEBUG_BUILD && DE1.logger.error(`Error while triggering instrumentation handler.
Type: ${I}
Name: ${DE1.getFunctionName(Z)}
Error:`, C)
    }
  }

  function $r2() {
    return Qr2.onCLS((I) => {
      vN("cls", {
        metric: I
      }), HE1 = I
    }, {
      reportAllChanges: !0
    })
  }

  function ur2() {
    return fr2.onFID((I) => {
      vN("fid", {
        metric: I
      }), FE1 = I
    })
  }

  function Tr2() {
    return Rr2.onLCP((I) => {
      vN("lcp", {
        metric: I
      }), gE1 = I
    })
  }

  function Or2() {
    return vr2.onTTFB((I) => {
      vN("ttfb", {
        metric: I
      }), JE1 = I
    })
  }

  function mr2() {
    return qr2.onINP((I) => {
      vN("inp", {
        metric: I
      }), KE1 = I
    })
  }

  function tv(I, d, G, Z, C = !1) {
    NE1(I, d);
    let W;
    if (!Qm[I]) W = G(), Qm[I] = !0;
    if (Z) d({
      metric: Z
    });
    return zE1(I, d, C ? W : void 0)
  }

  function lr2(I) {
    let d = {};
    if (I === "event") d.durationThreshold = 0;
    Ur2.observe(I, (G) => {
      vN(I, {
        entries: G
      })
    }, d)
  }

  function NE1(I, d) {
    ev[I] = ev[I] || [], ev[I].push(d)
  }

  function zE1(I, d, G) {
    return () => {
      if (G) G();
      let Z = ev[I];
      if (!Z) return;
      let C = Z.indexOf(d);
      if (C !== -1) Z.splice(C, 1)
    }
  }
  QE1.addClsInstrumentationHandler = Er2;
  QE1.addFidInstrumentationHandler = Lr2;
  QE1.addInpInstrumentationHandler = yr2;
  QE1.addLcpInstrumentationHandler = Mr2;
  QE1.addPerformanceInstrumentationHandler = Pr2;
  QE1.addTtfbInstrumentationHandler = Sr2
})
// @from(Start 251789, End 252194)
qE1 = Y((fE1) => {
  Object.defineProperty(fE1, "__esModule", {
    value: !0
  });

  function pr2(I) {
    return typeof I === "number" && isFinite(I)
  }

  function ir2(I, {
    startTimestamp: d,
    ...G
  }) {
    if (d && I.startTimestamp > d) I.startTimestamp = d;
    return I.startChild({
      startTimestamp: d,
      ...G
    })
  }
  fE1._startChild = ir2;
  fE1.isMeasurementValue = pr2
})
// @from(Start 252200, End 265449)
A01 = Y((ME1) => {
  Object.defineProperty(ME1, "__esModule", {
    value: !0
  });
  var MA = V4(),
    N9 = V0(),
    xd = pI(),
    fF = EN(),
    SA = kd(),
    ar2 = Nm(),
    LA = qE1(),
    sr2 = ov(),
    or2 = 2147483647;

  function x6(I) {
    return I / 1000
  }

  function B01() {
    return SA.WINDOW && SA.WINDOW.addEventListener && SA.WINDOW.performance
  }
  var RE1 = 0,
    T3 = {},
    Yw, IE;

  function er2() {
    let I = B01();
    if (I && N9.browserPerformanceTimeOrigin) {
      if (I.mark) SA.WINDOW.performance.mark("sentry-tracing-init");
      let d = Ca2(),
        G = Ga2(),
        Z = Za2(),
        C = Wa2();
      return () => {
        d(), G(), Z(), C()
      }
    }
    return () => {
      return
    }
  }

  function tr2() {
    fF.addPerformanceInstrumentationHandler("longtask", ({
      entries: I
    }) => {
      for (let d of I) {
        let G = MA.getActiveTransaction();
        if (!G) return;
        let Z = x6(N9.browserPerformanceTimeOrigin + d.startTime),
          C = x6(d.duration);
        G.startChild({
          description: "Main UI thread blocked",
          op: "ui.long-task",
          origin: "auto.ui.browser.metrics",
          startTimestamp: Z,
          endTimestamp: Z + C
        })
      }
    })
  }

  function Ia2() {
    fF.addPerformanceInstrumentationHandler("event", ({
      entries: I
    }) => {
      for (let d of I) {
        let G = MA.getActiveTransaction();
        if (!G) return;
        if (d.name === "click") {
          let Z = x6(N9.browserPerformanceTimeOrigin + d.startTime),
            C = x6(d.duration),
            W = {
              description: N9.htmlTreeAsString(d.target),
              op: `ui.interaction.${d.name}`,
              origin: "auto.ui.browser.metrics",
              startTimestamp: Z,
              endTimestamp: Z + C
            },
            w = N9.getComponentName(d.target);
          if (w) W.attributes = {
            "ui.component_name": w
          };
          G.startChild(W)
        }
      }
    })
  }

  function da2(I, d) {
    if (B01() && N9.browserPerformanceTimeOrigin) {
      let Z = wa2(I, d);
      return () => {
        Z()
      }
    }
    return () => {
      return
    }
  }

  function Ga2() {
    return fF.addClsInstrumentationHandler(({
      metric: I
    }) => {
      let d = I.entries[I.entries.length - 1];
      if (!d) return;
      xd.DEBUG_BUILD && N9.logger.log("[Measurements] Adding CLS"), T3.cls = {
        value: I.value,
        unit: ""
      }, IE = d
    }, !0)
  }

  function Za2() {
    return fF.addLcpInstrumentationHandler(({
      metric: I
    }) => {
      let d = I.entries[I.entries.length - 1];
      if (!d) return;
      xd.DEBUG_BUILD && N9.logger.log("[Measurements] Adding LCP"), T3.lcp = {
        value: I.value,
        unit: "millisecond"
      }, Yw = d
    }, !0)
  }

  function Ca2() {
    return fF.addFidInstrumentationHandler(({
      metric: I
    }) => {
      let d = I.entries[I.entries.length - 1];
      if (!d) return;
      let G = x6(N9.browserPerformanceTimeOrigin),
        Z = x6(d.startTime);
      xd.DEBUG_BUILD && N9.logger.log("[Measurements] Adding FID"), T3.fid = {
        value: I.value,
        unit: "millisecond"
      }, T3["mark.fid"] = {
        value: G + Z,
        unit: "second"
      }
    })
  }

  function Wa2() {
    return fF.addTtfbInstrumentationHandler(({
      metric: I
    }) => {
      if (!I.entries[I.entries.length - 1]) return;
      xd.DEBUG_BUILD && N9.logger.log("[Measurements] Adding TTFB"), T3.ttfb = {
        value: I.value,
        unit: "millisecond"
      }
    })
  }
  var UE1 = {
    click: "click",
    pointerdown: "click",
    pointerup: "click",
    mousedown: "click",
    mouseup: "click",
    touchstart: "click",
    touchend: "click",
    mouseover: "hover",
    mouseout: "hover",
    mouseenter: "hover",
    mouseleave: "hover",
    pointerover: "hover",
    pointerout: "hover",
    pointerenter: "hover",
    pointerleave: "hover",
    dragstart: "drag",
    dragend: "drag",
    drag: "drag",
    dragenter: "drag",
    dragleave: "drag",
    dragover: "drag",
    drop: "drag",
    keydown: "press",
    keyup: "press",
    keypress: "press",
    input: "press"
  };

  function wa2(I, d) {
    return fF.addInpInstrumentationHandler(({
      metric: G
    }) => {
      if (G.value === void 0) return;
      let Z = G.entries.find((P) => P.duration === G.value && UE1[P.name] !== void 0),
        C = MA.getClient();
      if (!Z || !C) return;
      let W = UE1[Z.name],
        w = C.getOptions(),
        B = x6(N9.browserPerformanceTimeOrigin + Z.startTime),
        A = x6(G.value),
        V = Z.interactionId !== void 0 ? I[Z.interactionId] : void 0;
      if (V === void 0) return;
      let {
        routeName: X,
        parentContext: _,
        activeTransaction: F,
        user: g,
        replayId: J
      } = V, K = g !== void 0 ? g.email || g.id || g.ip_address : void 0, Q = F !== void 0 ? F.getProfileId() : void 0, E = new MA.Span({
        startTimestamp: B,
        endTimestamp: B + A,
        op: `ui.interaction.${W}`,
        name: N9.htmlTreeAsString(Z.target),
        attributes: {
          release: w.release,
          environment: w.environment,
          transaction: X,
          ...K !== void 0 && K !== "" ? {
            user: K
          } : {},
          ...Q !== void 0 ? {
            profile_id: Q
          } : {},
          ...J !== void 0 ? {
            replay_id: J
          } : {}
        },
        exclusiveTime: G.value,
        measurements: {
          inp: {
            value: G.value,
            unit: "millisecond"
          }
        }
      }), S = Da2(_, w, d);
      if (!S) return;
      if (Math.random() < S) {
        let P = E ? MA.createSpanEnvelope([E], C.getDsn()) : void 0,
          $ = C && C.getTransport();
        if ($ && P) $.send(P).then(null, (h) => {
          xd.DEBUG_BUILD && N9.logger.error("Error while sending interaction:", h)
        });
        return
      }
    })
  }

  function Ba2(I) {
    let d = B01();
    if (!d || !SA.WINDOW.performance.getEntries || !N9.browserPerformanceTimeOrigin) return;
    xd.DEBUG_BUILD && N9.logger.log("[Tracing] Adding & adjusting spans using Performance API");
    let G = x6(N9.browserPerformanceTimeOrigin),
      Z = d.getEntries(),
      {
        op: C,
        start_timestamp: W
      } = MA.spanToJSON(I);
    if (Z.slice(RE1).forEach((w) => {
        let B = x6(w.startTime),
          A = x6(w.duration);
        if (I.op === "navigation" && W && G + B < W) return;
        switch (w.entryType) {
          case "navigation": {
            Aa2(I, w, G);
            break
          }
          case "mark":
          case "paint":
          case "measure": {
            vE1(I, w, B, A, G);
            let V = ar2.getVisibilityWatcher(),
              X = w.startTime < V.firstHiddenTime;
            if (w.name === "first-paint" && X) xd.DEBUG_BUILD && N9.logger.log("[Measurements] Adding FP"), T3.fp = {
              value: w.startTime,
              unit: "millisecond"
            };
            if (w.name === "first-contentful-paint" && X) xd.DEBUG_BUILD && N9.logger.log("[Measurements] Adding FCP"), T3.fcp = {
              value: w.startTime,
              unit: "millisecond"
            };
            break
          }
          case "resource": {
            EE1(I, w, w.name, B, A, G);
            break
          }
        }
      }), RE1 = Math.max(Z.length - 1, 0), Xa2(I), C === "pageload") {
      _a2(T3), ["fcp", "fp", "lcp"].forEach((B) => {
        if (!T3[B] || !W || G >= W) return;
        let A = T3[B].value,
          V = G + x6(A),
          X = Math.abs((V - W) * 1000),
          _ = X - A;
        xd.DEBUG_BUILD && N9.logger.log(`[Measurements] Normalized ${B} from ${A} to ${X} (${_})`), T3[B].value = X
      });
      let w = T3["mark.fid"];
      if (w && T3.fid) LA._startChild(I, {
        description: "first input delay",
        endTimestamp: w.value + x6(T3.fid.value),
        op: "ui.action",
        origin: "auto.ui.browser.metrics",
        startTimestamp: w.value
      }), delete T3["mark.fid"];
      if (!("fcp" in T3)) delete T3.cls;
      Object.keys(T3).forEach((B) => {
        MA.setMeasurement(B, T3[B].value, T3[B].unit)
      }), Ya2(I)
    }
    Yw = void 0, IE = void 0, T3 = {}
  }

  function vE1(I, d, G, Z, C) {
    let W = C + G,
      w = W + Z;
    return LA._startChild(I, {
      description: d.name,
      endTimestamp: w,
      op: d.entryType,
      origin: "auto.resource.browser.metrics",
      startTimestamp: W
    }), W
  }

  function Aa2(I, d, G) {
    ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach((Z) => {
      fm(I, d, Z, G)
    }), fm(I, d, "secureConnection", G, "TLS/SSL", "connectEnd"), fm(I, d, "fetch", G, "cache", "domainLookupStart"), fm(I, d, "domainLookup", G, "DNS"), Va2(I, d, G)
  }

  function fm(I, d, G, Z, C, W) {
    let w = W ? d[W] : d[`${G}End`],
      B = d[`${G}Start`];
    if (!B || !w) return;
    LA._startChild(I, {
      op: "browser",
      origin: "auto.browser.browser.metrics",
      description: C || G,
      startTimestamp: Z + x6(B),
      endTimestamp: Z + x6(w)
    })
  }

  function Va2(I, d, G) {
    if (d.responseEnd) LA._startChild(I, {
      op: "browser",
      origin: "auto.browser.browser.metrics",
      description: "request",
      startTimestamp: G + x6(d.requestStart),
      endTimestamp: G + x6(d.responseEnd)
    }), LA._startChild(I, {
      op: "browser",
      origin: "auto.browser.browser.metrics",
      description: "response",
      startTimestamp: G + x6(d.responseStart),
      endTimestamp: G + x6(d.responseEnd)
    })
  }

  function EE1(I, d, G, Z, C, W) {
    if (d.initiatorType === "xmlhttprequest" || d.initiatorType === "fetch") return;
    let w = N9.parseUrl(G),
      B = {};
    if (w01(B, d, "transferSize", "http.response_transfer_size"), w01(B, d, "encodedBodySize", "http.response_content_length"), w01(B, d, "decodedBodySize", "http.decoded_response_content_length"), "renderBlockingStatus" in d) B["resource.render_blocking_status"] = d.renderBlockingStatus;
    if (w.protocol) B["url.scheme"] = w.protocol.split(":").pop();
    if (w.host) B["server.address"] = w.host;
    B["url.same_origin"] = G.includes(SA.WINDOW.location.origin);
    let A = W + Z,
      V = A + C;
    LA._startChild(I, {
      description: G.replace(SA.WINDOW.location.origin, ""),
      endTimestamp: V,
      op: d.initiatorType ? `resource.${d.initiatorType}` : "resource.other",
      origin: "auto.resource.browser.metrics",
      startTimestamp: A,
      data: B
    })
  }

  function Xa2(I) {
    let d = SA.WINDOW.navigator;
    if (!d) return;
    let G = d.connection;
    if (G) {
      if (G.effectiveType) I.setTag("effectiveConnectionType", G.effectiveType);
      if (G.type) I.setTag("connectionType", G.type);
      if (LA.isMeasurementValue(G.rtt)) T3["connection.rtt"] = {
        value: G.rtt,
        unit: "millisecond"
      }
    }
    if (LA.isMeasurementValue(d.deviceMemory)) I.setTag("deviceMemory", `${d.deviceMemory} GB`);
    if (LA.isMeasurementValue(d.hardwareConcurrency)) I.setTag("hardwareConcurrency", String(d.hardwareConcurrency))
  }

  function Ya2(I) {
    if (Yw) {
      if (xd.DEBUG_BUILD && N9.logger.log("[Measurements] Adding LCP Data"), Yw.element) I.setTag("lcp.element", N9.htmlTreeAsString(Yw.element));
      if (Yw.id) I.setTag("lcp.id", Yw.id);
      if (Yw.url) I.setTag("lcp.url", Yw.url.trim().slice(0, 200));
      I.setTag("lcp.size", Yw.size)
    }
    if (IE && IE.sources) xd.DEBUG_BUILD && N9.logger.log("[Measurements] Adding CLS Data"), IE.sources.forEach((d, G) => I.setTag(`cls.source.${G+1}`, N9.htmlTreeAsString(d.node)))
  }

  function w01(I, d, G, Z) {
    let C = d[G];
    if (C != null && C < or2) I[Z] = C
  }

  function _a2(I) {
    let d = sr2.getNavigationEntry();
    if (!d) return;
    let {
      responseStart: G,
      requestStart: Z
    } = d;
    if (Z <= G) xd.DEBUG_BUILD && N9.logger.log("[Measurements] Adding TTFB Request Time"), I["ttfb.requestTime"] = {
      value: G - Z,
      unit: "millisecond"
    }
  }

  function Da2(I, d, G) {
    if (!MA.hasTracingEnabled(d)) return !1;
    let Z;
    if (I !== void 0 && typeof d.tracesSampler === "function") Z = d.tracesSampler({
      transactionContext: I,
      name: I.name,
      parentSampled: I.parentSampled,
      attributes: {
        ...I.data,
        ...I.attributes
      },
      location: SA.WINDOW.location
    });
    else if (I !== void 0 && I.sampled !== void 0) Z = I.sampled;
    else if (typeof d.tracesSampleRate !== "undefined") Z = d.tracesSampleRate;
    else Z = 1;
    if (!MA.isValidSampleRate(Z)) return xd.DEBUG_BUILD && N9.logger.warn("[Tracing] Discarding interaction span because of invalid sample rate."), !1;
    if (Z === !0) return G;
    else if (Z === !1) return 0;
    return Z * G
  }
  ME1._addMeasureSpans = vE1;
  ME1._addResourceSpans = EE1;
  ME1.addPerformanceEntries = Ba2;
  ME1.startTrackingINP = da2;
  ME1.startTrackingInteractions = Ia2;
  ME1.startTrackingLongTasks = tr2;
  ME1.startTrackingWebVitals = er2
})
// @from(Start 265455, End 268577)
V01 = Y((LE1) => {
  Object.defineProperty(LE1, "__esModule", {
    value: !0
  });
  var _w = V4(),
    qF = V0();

  function Qa2(I, d, G, Z, C = "auto.http.browser") {
    if (!_w.hasTracingEnabled() || !I.fetchData) return;
    let W = d(I.fetchData.url);
    if (I.endTimestamp && W) {
      let g = I.fetchData.__span;
      if (!g) return;
      let J = Z[g];
      if (J) qa2(J, I), delete Z[g];
      return
    }
    let w = _w.getCurrentScope(),
      B = _w.getClient(),
      {
        method: A,
        url: V
      } = I.fetchData,
      X = fa2(V),
      _ = X ? qF.parseUrl(X).host : void 0,
      F = W ? _w.startInactiveSpan({
        name: `${A} ${V}`,
        onlyIfParent: !0,
        attributes: {
          url: V,
          type: "fetch",
          "http.method": A,
          "http.url": X,
          "server.address": _,
          [_w.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: C
        },
        op: "http.client"
      }) : void 0;
    if (F) I.fetchData.__span = F.spanContext().spanId, Z[F.spanContext().spanId] = F;
    if (G(I.fetchData.url) && B) {
      let g = I.args[0];
      I.args[1] = I.args[1] || {};
      let J = I.args[1];
      J.headers = SE1(g, B, w, J, F)
    }
    return F
  }

  function SE1(I, d, G, Z, C) {
    let W = C || G.getSpan(),
      w = _w.getIsolationScope(),
      {
        traceId: B,
        spanId: A,
        sampled: V,
        dsc: X
      } = {
        ...w.getPropagationContext(),
        ...G.getPropagationContext()
      },
      _ = W ? _w.spanToTraceHeader(W) : qF.generateSentryTraceHeader(B, A, V),
      F = qF.dynamicSamplingContextToSentryBaggageHeader(X || (W ? _w.getDynamicSamplingContextFromSpan(W) : _w.getDynamicSamplingContextFromClient(B, d, G))),
      g = Z.headers || (typeof Request !== "undefined" && qF.isInstanceOf(I, Request) ? I.headers : void 0);
    if (!g) return {
      "sentry-trace": _,
      baggage: F
    };
    else if (typeof Headers !== "undefined" && qF.isInstanceOf(g, Headers)) {
      let J = new Headers(g);
      if (J.append("sentry-trace", _), F) J.append(qF.BAGGAGE_HEADER_NAME, F);
      return J
    } else if (Array.isArray(g)) {
      let J = [...g, ["sentry-trace", _]];
      if (F) J.push([qF.BAGGAGE_HEADER_NAME, F]);
      return J
    } else {
      let J = "baggage" in g ? g.baggage : void 0,
        K = [];
      if (Array.isArray(J)) K.push(...J);
      else if (J) K.push(J);
      if (F) K.push(F);
      return {
        ...g,
        "sentry-trace": _,
        baggage: K.length > 0 ? K.join(",") : void 0
      }
    }
  }

  function fa2(I) {
    try {
      return new URL(I).href
    } catch (d) {
      return
    }
  }

  function qa2(I, d) {
    if (d.response) {
      _w.setHttpStatus(I, d.response.status);
      let G = d.response && d.response.headers && d.response.headers.get("content-length");
      if (G) {
        let Z = parseInt(G);
        if (Z > 0) I.setAttribute("http.response_content_length", Z)
      }
    } else if (d.error) I.setStatus("internal_error");
    I.end()
  }
  LE1.addTracingHeadersToFetchRequest = SE1;
  LE1.instrumentFetchRequest = Qa2
})
// @from(Start 268583, End 273849)
Rm = Y((OE1) => {
  Object.defineProperty(OE1, "__esModule", {
    value: !0
  });
  var HC = V4(),
    FC = V0(),
    va2 = V01(),
    Ea2 = EN(),
    Ma2 = kd(),
    qm = ["localhost", /^\/(?!\/)/],
    X01 = {
      traceFetch: !0,
      traceXHR: !0,
      enableHTTPTimings: !0,
      tracingOrigins: qm,
      tracePropagationTargets: qm
    };

  function Sa2(I) {
    let {
      traceFetch: d,
      traceXHR: G,
      tracePropagationTargets: Z,
      tracingOrigins: C,
      shouldCreateSpanForRequest: W,
      enableHTTPTimings: w
    } = {
      traceFetch: X01.traceFetch,
      traceXHR: X01.traceXHR,
      ...I
    }, B = typeof W === "function" ? W : (X) => !0, A = (X) => $E1(X, Z || C), V = {};
    if (d) FC.addFetchInstrumentationHandler((X) => {
      let _ = va2.instrumentFetchRequest(X, B, A, V);
      if (_) {
        let F = TE1(X.fetchData.url),
          g = F ? FC.parseUrl(F).host : void 0;
        _.setAttributes({
          "http.url": F,
          "server.address": g
        })
      }
      if (w && _) yE1(_)
    });
    if (G) FC.addXhrInstrumentationHandler((X) => {
      let _ = uE1(X, B, A, V);
      if (w && _) yE1(_)
    })
  }

  function La2(I) {
    return I.entryType === "resource" && "initiatorType" in I && typeof I.nextHopProtocol === "string" && (I.initiatorType === "fetch" || I.initiatorType === "xmlhttprequest")
  }

  function yE1(I) {
    let {
      url: d
    } = HC.spanToJSON(I).data || {};
    if (!d || typeof d !== "string") return;
    let G = Ea2.addPerformanceInstrumentationHandler("resource", ({
      entries: Z
    }) => {
      Z.forEach((C) => {
        if (La2(C) && C.name.endsWith(d)) ya2(C).forEach((w) => I.setAttribute(...w)), setTimeout(G)
      })
    })
  }

  function PE1(I) {
    let d = "unknown",
      G = "unknown",
      Z = "";
    for (let C of I) {
      if (C === "/") {
        [d, G] = I.split("/");
        break
      }
      if (!isNaN(Number(C))) {
        d = Z === "h" ? "http" : Z, G = I.split(Z)[1];
        break
      }
      Z += C
    }
    if (Z === I) d = Z;
    return {
      name: d,
      version: G
    }
  }

  function Dw(I = 0) {
    return ((FC.browserPerformanceTimeOrigin || performance.timeOrigin) + I) / 1000
  }

  function ya2(I) {
    let {
      name: d,
      version: G
    } = PE1(I.nextHopProtocol), Z = [];
    if (Z.push(["network.protocol.version", G], ["network.protocol.name", d]), !FC.browserPerformanceTimeOrigin) return Z;
    return [...Z, ["http.request.redirect_start", Dw(I.redirectStart)],
      ["http.request.fetch_start", Dw(I.fetchStart)],
      ["http.request.domain_lookup_start", Dw(I.domainLookupStart)],
      ["http.request.domain_lookup_end", Dw(I.domainLookupEnd)],
      ["http.request.connect_start", Dw(I.connectStart)],
      ["http.request.secure_connection_start", Dw(I.secureConnectionStart)],
      ["http.request.connection_end", Dw(I.connectEnd)],
      ["http.request.request_start", Dw(I.requestStart)],
      ["http.request.response_start", Dw(I.responseStart)],
      ["http.request.response_end", Dw(I.responseEnd)]
    ]
  }

  function $E1(I, d) {
    return FC.stringMatchesSomePattern(I, d || qm)
  }

  function uE1(I, d, G, Z) {
    let C = I.xhr,
      W = C && C[FC.SENTRY_XHR_DATA_KEY];
    if (!HC.hasTracingEnabled() || !C || C.__sentry_own_request__ || !W) return;
    let w = d(W.url);
    if (I.endTimestamp && w) {
      let g = C.__sentry_xhr_span_id__;
      if (!g) return;
      let J = Z[g];
      if (J && W.status_code !== void 0) HC.setHttpStatus(J, W.status_code), J.end(), delete Z[g];
      return
    }
    let B = HC.getCurrentScope(),
      A = HC.getIsolationScope(),
      V = TE1(W.url),
      X = V ? FC.parseUrl(V).host : void 0,
      _ = w ? HC.startInactiveSpan({
        name: `${W.method} ${W.url}`,
        onlyIfParent: !0,
        attributes: {
          type: "xhr",
          "http.method": W.method,
          "http.url": V,
          url: W.url,
          "server.address": X,
          [HC.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser"
        },
        op: "http.client"
      }) : void 0;
    if (_) C.__sentry_xhr_span_id__ = _.spanContext().spanId, Z[C.__sentry_xhr_span_id__] = _;
    let F = HC.getClient();
    if (C.setRequestHeader && G(W.url) && F) {
      let {
        traceId: g,
        spanId: J,
        sampled: K,
        dsc: Q
      } = {
        ...A.getPropagationContext(),
        ...B.getPropagationContext()
      }, E = _ ? HC.spanToTraceHeader(_) : FC.generateSentryTraceHeader(g, J, K), S = FC.dynamicSamplingContextToSentryBaggageHeader(Q || (_ ? HC.getDynamicSamplingContextFromSpan(_) : HC.getDynamicSamplingContextFromClient(g, F, B)));
      Pa2(C, E, S)
    }
    return _
  }

  function Pa2(I, d, G) {
    try {
      if (I.setRequestHeader("sentry-trace", d), G) I.setRequestHeader(FC.BAGGAGE_HEADER_NAME, G)
    } catch (Z) {}
  }

  function TE1(I) {
    try {
      return new URL(I, Ma2.WINDOW.location.origin).href
    } catch (d) {
      return
    }
  }
  OE1.DEFAULT_TRACE_PROPAGATION_TARGETS = qm;
  OE1.defaultRequestInstrumentationOptions = X01;
  OE1.extractNetworkProtocol = PE1;
  OE1.instrumentOutgoingRequests = Sa2;
  OE1.shouldAttachHeaders = $E1;
  OE1.xhrCallback = uE1
})
// @from(Start 273855, End 275134)
bE1 = Y((lE1) => {
  Object.defineProperty(lE1, "__esModule", {
    value: !0
  });
  var dE = V0(),
    mE1 = pI(),
    GE = kd();

  function ba2(I, d = !0, G = !0) {
    if (!GE.WINDOW || !GE.WINDOW.location) {
      mE1.DEBUG_BUILD && dE.logger.warn("Could not initialize routing instrumentation due to invalid location");
      return
    }
    let Z = GE.WINDOW.location.href,
      C;
    if (d) C = I({
      name: GE.WINDOW.location.pathname,
      startTimestamp: dE.browserPerformanceTimeOrigin ? dE.browserPerformanceTimeOrigin / 1000 : void 0,
      op: "pageload",
      origin: "auto.pageload.browser",
      metadata: {
        source: "url"
      }
    });
    if (G) dE.addHistoryInstrumentationHandler(({
      to: W,
      from: w
    }) => {
      if (w === void 0 && Z && Z.indexOf(W) !== -1) {
        Z = void 0;
        return
      }
      if (w !== W) {
        if (Z = void 0, C) mE1.DEBUG_BUILD && dE.logger.log(`[Tracing] Finishing current transaction with op: ${C.op}`), C.end();
        C = I({
          name: GE.WINDOW.location.pathname,
          op: "navigation",
          origin: "auto.navigation.browser",
          metadata: {
            source: "url"
          }
        })
      }
    })
  }
  lE1.instrumentRoutingWithDefaults = ba2
})
// @from(Start 275140, End 284715)
iE1 = Y((pE1) => {
  Object.defineProperty(pE1, "__esModule", {
    value: !0
  });
  var gC = V4(),
    yA = V0(),
    aX = pI(),
    ja2 = I01(),
    hE1 = EN(),
    ZE = A01(),
    kE1 = Rm(),
    ka2 = bE1(),
    RF = kd(),
    xE1 = "BrowserTracing",
    xa2 = {
      ...gC.TRACING_DEFAULTS,
      markBackgroundTransactions: !0,
      routingInstrumentation: ka2.instrumentRoutingWithDefaults,
      startTransactionOnLocationChange: !0,
      startTransactionOnPageLoad: !0,
      enableLongTask: !0,
      enableInp: !1,
      interactionsSampleRate: 1,
      _experiments: {},
      ...kE1.defaultRequestInstrumentationOptions
    },
    jE1 = 10;
  class cE1 {
    constructor(I) {
      if (this.name = xE1, this._hasSetTracePropagationTargets = !1, gC.addTracingExtensions(), aX.DEBUG_BUILD) this._hasSetTracePropagationTargets = !!(I && (I.tracePropagationTargets || I.tracingOrigins));
      if (this.options = {
          ...xa2,
          ...I
        }, this.options._experiments.enableLongTask !== void 0) this.options.enableLongTask = this.options._experiments.enableLongTask;
      if (I && !I.tracePropagationTargets && I.tracingOrigins) this.options.tracePropagationTargets = I.tracingOrigins;
      if (this._collectWebVitals = ZE.startTrackingWebVitals(), this._interactionIdToRouteNameMapping = {}, this.options.enableInp) ZE.startTrackingINP(this._interactionIdToRouteNameMapping, this.options.interactionsSampleRate);
      if (this.options.enableLongTask) ZE.startTrackingLongTasks();
      if (this.options._experiments.enableInteractions) ZE.startTrackingInteractions();
      this._latestRoute = {
        name: void 0,
        context: void 0
      }
    }
    setupOnce(I, d) {
      this._getCurrentHub = d;
      let Z = d().getClient(),
        C = Z && Z.getOptions(),
        {
          routingInstrumentation: W,
          startTransactionOnLocationChange: w,
          startTransactionOnPageLoad: B,
          markBackgroundTransactions: A,
          traceFetch: V,
          traceXHR: X,
          shouldCreateSpanForRequest: _,
          enableHTTPTimings: F,
          _experiments: g
        } = this.options,
        J = C && C.tracePropagationTargets,
        K = J || this.options.tracePropagationTargets;
      if (aX.DEBUG_BUILD && this._hasSetTracePropagationTargets && J) yA.logger.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used.");
      if (W((Q) => {
          let E = this._createRouteTransaction(Q);
          return this.options._experiments.onStartRouteTransaction && this.options._experiments.onStartRouteTransaction(E, Q, d), E
        }, B, w), A) ja2.registerBackgroundTabDetection();
      if (g.enableInteractions) this._registerInteractionListener();
      if (this.options.enableInp) this._registerInpInteractionListener();
      kE1.instrumentOutgoingRequests({
        traceFetch: V,
        traceXHR: X,
        tracePropagationTargets: K,
        shouldCreateSpanForRequest: _,
        enableHTTPTimings: F
      })
    }
    _createRouteTransaction(I) {
      if (!this._getCurrentHub) {
        aX.DEBUG_BUILD && yA.logger.warn(`[Tracing] Did not create ${I.op} transaction because _getCurrentHub is invalid.`);
        return
      }
      let d = this._getCurrentHub(),
        {
          beforeNavigate: G,
          idleTimeout: Z,
          finalTimeout: C,
          heartbeatInterval: W
        } = this.options,
        w = I.op === "pageload",
        B;
      if (w) {
        let F = w ? Y01("sentry-trace") : "",
          g = w ? Y01("baggage") : void 0,
          {
            traceId: J,
            dsc: K,
            parentSpanId: Q,
            sampled: E
          } = yA.propagationContextFromHeaders(F, g);
        B = {
          traceId: J,
          parentSpanId: Q,
          parentSampled: E,
          ...I,
          metadata: {
            ...I.metadata,
            dynamicSamplingContext: K
          },
          trimEnd: !0
        }
      } else B = {
        trimEnd: !0,
        ...I
      };
      let A = typeof G === "function" ? G(B) : B,
        V = A === void 0 ? {
          ...B,
          sampled: !1
        } : A;
      if (V.metadata = V.name !== B.name ? {
          ...V.metadata,
          source: "custom"
        } : V.metadata, this._latestRoute.name = V.name, this._latestRoute.context = V, V.sampled === !1) aX.DEBUG_BUILD && yA.logger.log(`[Tracing] Will not send ${V.op} transaction because of beforeNavigate.`);
      aX.DEBUG_BUILD && yA.logger.log(`[Tracing] Starting ${V.op} transaction on scope`);
      let {
        location: X
      } = RF.WINDOW, _ = gC.startIdleTransaction(d, V, Z, C, !0, {
        location: X
      }, W, w);
      if (w) {
        if (RF.WINDOW.document) {
          if (RF.WINDOW.document.addEventListener("readystatechange", () => {
              if (["interactive", "complete"].includes(RF.WINDOW.document.readyState)) _.sendAutoFinishSignal()
            }), ["interactive", "complete"].includes(RF.WINDOW.document.readyState)) _.sendAutoFinishSignal()
        }
      }
      return _.registerBeforeFinishCallback((F) => {
        this._collectWebVitals(), ZE.addPerformanceEntries(F)
      }), _
    }
    _registerInteractionListener() {
      let I, d = () => {
        let {
          idleTimeout: G,
          finalTimeout: Z,
          heartbeatInterval: C
        } = this.options, W = "ui.action.click", w = gC.getActiveTransaction();
        if (w && w.op && ["navigation", "pageload"].includes(w.op)) {
          aX.DEBUG_BUILD && yA.logger.warn("[Tracing] Did not create ui.action.click transaction because a pageload or navigation transaction is in progress.");
          return
        }
        if (I) I.setFinishReason("interactionInterrupted"), I.end(), I = void 0;
        if (!this._getCurrentHub) {
          aX.DEBUG_BUILD && yA.logger.warn("[Tracing] Did not create ui.action.click transaction because _getCurrentHub is invalid.");
          return
        }
        if (!this._latestRoute.name) {
          aX.DEBUG_BUILD && yA.logger.warn("[Tracing] Did not create ui.action.click transaction because _latestRouteName is missing.");
          return
        }
        let B = this._getCurrentHub(),
          {
            location: A
          } = RF.WINDOW,
          V = {
            name: this._latestRoute.name,
            op: "ui.action.click",
            trimEnd: !0,
            data: {
              [gC.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: this._latestRoute.context ? ca2(this._latestRoute.context) : "url"
            }
          };
        I = gC.startIdleTransaction(B, V, G, Z, !0, {
          location: A
        }, C)
      };
      ["click"].forEach((G) => {
        if (RF.WINDOW.document) addEventListener(G, d, {
          once: !1,
          capture: !0
        })
      })
    }
    _registerInpInteractionListener() {
      let I = ({
        entries: d
      }) => {
        let G = gC.getClient(),
          Z = G !== void 0 && G.getIntegrationByName !== void 0 ? G.getIntegrationByName("Replay") : void 0,
          C = Z !== void 0 ? Z.getReplayId() : void 0,
          W = gC.getActiveTransaction(),
          w = gC.getCurrentScope(),
          B = w !== void 0 ? w.getUser() : void 0;
        d.forEach((A) => {
          if (pa2(A)) {
            let V = A.interactionId;
            if (V === void 0) return;
            let X = this._interactionIdToRouteNameMapping[V],
              _ = A.duration,
              F = A.startTime,
              g = Object.keys(this._interactionIdToRouteNameMapping),
              J = g.length > 0 ? g.reduce((K, Q) => {
                return this._interactionIdToRouteNameMapping[K].duration < this._interactionIdToRouteNameMapping[Q].duration ? K : Q
              }) : void 0;
            if (A.entryType === "first-input") {
              if (g.map((Q) => this._interactionIdToRouteNameMapping[Q]).some((Q) => {
                  return Q.duration === _ && Q.startTime === F
                })) return
            }
            if (!V) return;
            if (X) X.duration = Math.max(X.duration, _);
            else if (g.length < jE1 || J === void 0 || _ > this._interactionIdToRouteNameMapping[J].duration) {
              let K = this._latestRoute.name,
                Q = this._latestRoute.context;
              if (K && Q) {
                if (J && Object.keys(this._interactionIdToRouteNameMapping).length >= jE1) delete this._interactionIdToRouteNameMapping[J];
                this._interactionIdToRouteNameMapping[V] = {
                  routeName: K,
                  duration: _,
                  parentContext: Q,
                  user: B,
                  activeTransaction: W,
                  replayId: C,
                  startTime: F
                }
              }
            }
          }
        })
      };
      hE1.addPerformanceInstrumentationHandler("event", I), hE1.addPerformanceInstrumentationHandler("first-input", I)
    }
  }

  function Y01(I) {
    let d = yA.getDomElement(`meta[name=${I}]`);
    return d ? d.getAttribute("content") : void 0
  }

  function ca2(I) {
    let d = I.attributes && I.attributes[gC.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE],
      G = I.data && I.data[gC.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE],
      Z = I.metadata && I.metadata.source;
    return d || G || Z
  }

  function pa2(I) {
    return "duration" in I
  }
  pE1.BROWSER_TRACING_INTEGRATION_ID = xE1;
  pE1.BrowserTracing = cE1;
  pE1.getMetaContent = Y01
})
// @from(Start 284721, End 294534)
IM1 = Y((tE1) => {
  Object.defineProperty(tE1, "__esModule", {
    value: !0
  });
  var d6 = V4(),
    nG = V0(),
    sX = pI(),
    aa2 = I01(),
    nE1 = EN(),
    CE = A01(),
    aE1 = Rm(),
    cd = kd(),
    sE1 = "BrowserTracing",
    sa2 = {
      ...d6.TRACING_DEFAULTS,
      instrumentNavigation: !0,
      instrumentPageLoad: !0,
      markBackgroundSpan: !0,
      enableLongTask: !0,
      enableInp: !1,
      interactionsSampleRate: 1,
      _experiments: {},
      ...aE1.defaultRequestInstrumentationOptions
    },
    oa2 = (I = {}) => {
      let d = sX.DEBUG_BUILD ? !!(I.tracePropagationTargets || I.tracingOrigins) : !1;
      if (d6.addTracingExtensions(), !I.tracePropagationTargets && I.tracingOrigins) I.tracePropagationTargets = I.tracingOrigins;
      let G = {
          ...sa2,
          ...I
        },
        Z = CE.startTrackingWebVitals(),
        C = {};
      if (G.enableInp) CE.startTrackingINP(C, G.interactionsSampleRate);
      if (G.enableLongTask) CE.startTrackingLongTasks();
      if (G._experiments.enableInteractions) CE.startTrackingInteractions();
      let W = {
        name: void 0,
        context: void 0
      };

      function w(B) {
        let A = d6.getCurrentHub(),
          {
            beforeStartSpan: V,
            idleTimeout: X,
            finalTimeout: _,
            heartbeatInterval: F
          } = G,
          g = B.op === "pageload",
          J;
        if (g) {
          let S = g ? _01("sentry-trace") : "",
            P = g ? _01("baggage") : void 0,
            {
              traceId: $,
              dsc: h,
              parentSpanId: O,
              sampled: T
            } = nG.propagationContextFromHeaders(S, P);
          J = {
            traceId: $,
            parentSpanId: O,
            parentSampled: T,
            ...B,
            metadata: {
              ...B.metadata,
              dynamicSamplingContext: h
            },
            trimEnd: !0
          }
        } else J = {
          trimEnd: !0,
          ...B
        };
        let K = V ? V(J) : J;
        if (K.metadata = K.name !== J.name ? {
            ...K.metadata,
            source: "custom"
          } : K.metadata, W.name = K.name, W.context = K, K.sampled === !1) sX.DEBUG_BUILD && nG.logger.log(`[Tracing] Will not send ${K.op} transaction because of beforeNavigate.`);
        sX.DEBUG_BUILD && nG.logger.log(`[Tracing] Starting ${K.op} transaction on scope`);
        let {
          location: Q
        } = cd.WINDOW, E = d6.startIdleTransaction(A, K, X, _, !0, {
          location: Q
        }, F, g);
        if (g && cd.WINDOW.document) {
          if (cd.WINDOW.document.addEventListener("readystatechange", () => {
              if (["interactive", "complete"].includes(cd.WINDOW.document.readyState)) E.sendAutoFinishSignal()
            }), ["interactive", "complete"].includes(cd.WINDOW.document.readyState)) E.sendAutoFinishSignal()
        }
        return E.registerBeforeFinishCallback((S) => {
          Z(), CE.addPerformanceEntries(S)
        }), E
      }
      return {
        name: sE1,
        setupOnce: () => {},
        afterAllSetup(B) {
          let A = B.getOptions(),
            {
              markBackgroundSpan: V,
              traceFetch: X,
              traceXHR: _,
              shouldCreateSpanForRequest: F,
              enableHTTPTimings: g,
              _experiments: J
            } = G,
            K = A && A.tracePropagationTargets,
            Q = K || G.tracePropagationTargets;
          if (sX.DEBUG_BUILD && d && K) nG.logger.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used.");
          let E, S = cd.WINDOW.location && cd.WINDOW.location.href;
          if (B.on) B.on("startNavigationSpan", (P) => {
            if (E) sX.DEBUG_BUILD && nG.logger.log(`[Tracing] Finishing current transaction with op: ${d6.spanToJSON(E).op}`), E.end();
            E = w({
              op: "navigation",
              ...P
            })
          }), B.on("startPageLoadSpan", (P) => {
            if (E) sX.DEBUG_BUILD && nG.logger.log(`[Tracing] Finishing current transaction with op: ${d6.spanToJSON(E).op}`), E.end();
            E = w({
              op: "pageload",
              ...P
            })
          });
          if (G.instrumentPageLoad && B.emit && cd.WINDOW.location) {
            let P = {
              name: cd.WINDOW.location.pathname,
              startTimestamp: nG.browserPerformanceTimeOrigin ? nG.browserPerformanceTimeOrigin / 1000 : void 0,
              origin: "auto.pageload.browser",
              attributes: {
                [d6.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url"
              }
            };
            oE1(B, P)
          }
          if (G.instrumentNavigation && B.emit && cd.WINDOW.location) nG.addHistoryInstrumentationHandler(({
            to: P,
            from: $
          }) => {
            if ($ === void 0 && S && S.indexOf(P) !== -1) {
              S = void 0;
              return
            }
            if ($ !== P) {
              S = void 0;
              let h = {
                name: cd.WINDOW.location.pathname,
                origin: "auto.navigation.browser",
                attributes: {
                  [d6.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url"
                }
              };
              eE1(B, h)
            }
          });
          if (V) aa2.registerBackgroundTabDetection();
          if (J.enableInteractions) ea2(G, W);
          if (G.enableInp) Is2(C, W);
          aE1.instrumentOutgoingRequests({
            traceFetch: X,
            traceXHR: _,
            tracePropagationTargets: Q,
            shouldCreateSpanForRequest: F,
            enableHTTPTimings: g
          })
        },
        options: G
      }
    };

  function oE1(I, d) {
    if (!I.emit) return;
    I.emit("startPageLoadSpan", d);
    let G = d6.getActiveSpan();
    return (G && d6.spanToJSON(G).op) === "pageload" ? G : void 0
  }

  function eE1(I, d) {
    if (!I.emit) return;
    I.emit("startNavigationSpan", d);
    let G = d6.getActiveSpan();
    return (G && d6.spanToJSON(G).op) === "navigation" ? G : void 0
  }

  function _01(I) {
    let d = nG.getDomElement(`meta[name=${I}]`);
    return d ? d.getAttribute("content") : void 0
  }

  function ea2(I, d) {
    let G, Z = () => {
      let {
        idleTimeout: C,
        finalTimeout: W,
        heartbeatInterval: w
      } = I, B = "ui.action.click", A = d6.getActiveTransaction();
      if (A && A.op && ["navigation", "pageload"].includes(A.op)) {
        sX.DEBUG_BUILD && nG.logger.warn("[Tracing] Did not create ui.action.click transaction because a pageload or navigation transaction is in progress.");
        return
      }
      if (G) G.setFinishReason("interactionInterrupted"), G.end(), G = void 0;
      if (!d.name) {
        sX.DEBUG_BUILD && nG.logger.warn("[Tracing] Did not create ui.action.click transaction because _latestRouteName is missing.");
        return
      }
      let {
        location: V
      } = cd.WINDOW, X = {
        name: d.name,
        op: "ui.action.click",
        trimEnd: !0,
        data: {
          [d6.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: d.context ? ds2(d.context) : "url"
        }
      };
      G = d6.startIdleTransaction(d6.getCurrentHub(), X, C, W, !0, {
        location: V
      }, w)
    };
    ["click"].forEach((C) => {
      if (cd.WINDOW.document) addEventListener(C, Z, {
        once: !1,
        capture: !0
      })
    })
  }

  function ta2(I) {
    return "duration" in I
  }
  var rE1 = 10;

  function Is2(I, d) {
    let G = ({
      entries: Z
    }) => {
      let C = d6.getClient(),
        W = C !== void 0 && C.getIntegrationByName !== void 0 ? C.getIntegrationByName("Replay") : void 0,
        w = W !== void 0 ? W.getReplayId() : void 0,
        B = d6.getActiveTransaction(),
        A = d6.getCurrentScope(),
        V = A !== void 0 ? A.getUser() : void 0;
      Z.forEach((X) => {
        if (ta2(X)) {
          let _ = X.interactionId;
          if (_ === void 0) return;
          let F = I[_],
            g = X.duration,
            J = X.startTime,
            K = Object.keys(I),
            Q = K.length > 0 ? K.reduce((E, S) => {
              return I[E].duration < I[S].duration ? E : S
            }) : void 0;
          if (X.entryType === "first-input") {
            if (K.map((S) => I[S]).some((S) => {
                return S.duration === g && S.startTime === J
              })) return
          }
          if (!_) return;
          if (F) F.duration = Math.max(F.duration, g);
          else if (K.length < rE1 || Q === void 0 || g > I[Q].duration) {
            let {
              name: E,
              context: S
            } = d;
            if (E && S) {
              if (Q && Object.keys(I).length >= rE1) delete I[Q];
              I[_] = {
                routeName: E,
                duration: g,
                parentContext: S,
                user: V,
                activeTransaction: B,
                replayId: w,
                startTime: J
              }
            }
          }
        }
      })
    };
    nE1.addPerformanceInstrumentationHandler("event", G), nE1.addPerformanceInstrumentationHandler("first-input", G)
  }

  function ds2(I) {
    let d = I.attributes && I.attributes[d6.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE],
      G = I.data && I.data[d6.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE],
      Z = I.metadata && I.metadata.source;
    return d || G || Z
  }
  tE1.BROWSER_TRACING_INTEGRATION_ID = sE1;
  tE1.browserTracingIntegration = oa2;
  tE1.getMetaContent = _01;
  tE1.startBrowserTracingNavigationSpan = eE1;
  tE1.startBrowserTracingPageLoadSpan = oE1
})
// @from(Start 294540, End 295607)
ZM1 = Y((GM1, WE) => {
  Object.defineProperty(GM1, "__esModule", {
    value: !0
  });
  var dM1 = V4(),
    MN = V0();

  function Bs2() {
    let I = dM1.getMainCarrier();
    if (!I.__SENTRY__) return;
    let d = {
        mongodb() {
          return new(MN.dynamicRequire(WE, "./node/integrations/mongo")).Mongo
        },
        mongoose() {
          return new(MN.dynamicRequire(WE, "./node/integrations/mongo")).Mongo
        },
        mysql() {
          return new(MN.dynamicRequire(WE, "./node/integrations/mysql")).Mysql
        },
        pg() {
          return new(MN.dynamicRequire(WE, "./node/integrations/postgres")).Postgres
        }
      },
      G = Object.keys(d).filter((Z) => !!MN.loadModule(Z)).map((Z) => {
        try {
          return d[Z]()
        } catch (C) {
          return
        }
      }).filter((Z) => Z);
    if (G.length > 0) I.__SENTRY__.integrations = [...I.__SENTRY__.integrations || [], ...G]
  }

  function As2() {
    if (dM1.addTracingExtensions(), MN.isNodeEnv()) Bs2()
  }
  GM1.addExtensionMethods = As2
})
// @from(Start 295613, End 297770)
H01 = Y((AM1) => {
  Object.defineProperty(AM1, "__esModule", {
    value: !0
  });
  var PA = V4(),
    CM1 = V0(),
    Xs2 = Hv1(),
    Ys2 = gv1(),
    _s2 = Kv1(),
    Ds2 = Qv1(),
    Hs2 = Rv1(),
    Fs2 = Ev1(),
    gs2 = Lv1(),
    Js2 = Pv1(),
    WM1 = iE1(),
    D01 = IM1(),
    wM1 = Rm(),
    Um = EN(),
    BM1 = V01(),
    Ks2 = ZM1();
  AM1.IdleTransaction = PA.IdleTransaction;
  AM1.Span = PA.Span;
  AM1.SpanStatus = PA.SpanStatus;
  AM1.Transaction = PA.Transaction;
  AM1.extractTraceparentData = PA.extractTraceparentData;
  AM1.getActiveTransaction = PA.getActiveTransaction;
  AM1.hasTracingEnabled = PA.hasTracingEnabled;
  AM1.spanStatusfromHttpCode = PA.spanStatusfromHttpCode;
  AM1.startIdleTransaction = PA.startIdleTransaction;
  AM1.TRACEPARENT_REGEXP = CM1.TRACEPARENT_REGEXP;
  AM1.stripUrlQueryAndFragment = CM1.stripUrlQueryAndFragment;
  AM1.Express = Xs2.Express;
  AM1.Postgres = Ys2.Postgres;
  AM1.Mysql = _s2.Mysql;
  AM1.Mongo = Ds2.Mongo;
  AM1.Prisma = Hs2.Prisma;
  AM1.GraphQL = Fs2.GraphQL;
  AM1.Apollo = gs2.Apollo;
  AM1.lazyLoadedNodePerformanceMonitoringIntegrations = Js2.lazyLoadedNodePerformanceMonitoringIntegrations;
  AM1.BROWSER_TRACING_INTEGRATION_ID = WM1.BROWSER_TRACING_INTEGRATION_ID;
  AM1.BrowserTracing = WM1.BrowserTracing;
  AM1.browserTracingIntegration = D01.browserTracingIntegration;
  AM1.startBrowserTracingNavigationSpan = D01.startBrowserTracingNavigationSpan;
  AM1.startBrowserTracingPageLoadSpan = D01.startBrowserTracingPageLoadSpan;
  AM1.defaultRequestInstrumentationOptions = wM1.defaultRequestInstrumentationOptions;
  AM1.instrumentOutgoingRequests = wM1.instrumentOutgoingRequests;
  AM1.addClsInstrumentationHandler = Um.addClsInstrumentationHandler;
  AM1.addFidInstrumentationHandler = Um.addFidInstrumentationHandler;
  AM1.addLcpInstrumentationHandler = Um.addLcpInstrumentationHandler;
  AM1.addPerformanceInstrumentationHandler = Um.addPerformanceInstrumentationHandler;
  AM1.addTracingHeadersToFetchRequest = BM1.addTracingHeadersToFetchRequest;
  AM1.instrumentFetchRequest = BM1.instrumentFetchRequest;
  AM1.addExtensionMethods = Ks2.addExtensionMethods
})
// @from(Start 297776, End 298325)
XM1 = Y((VM1) => {
  Object.defineProperty(VM1, "__esModule", {
    value: !0
  });
  var es2 = H01(),
    ts2 = V0();

  function Io2() {
    let I = es2.lazyLoadedNodePerformanceMonitoringIntegrations.map((d) => {
      try {
        return d()
      } catch (G) {
        return
      }
    }).filter((d) => !!d);
    if (I.length === 0) ts2.logger.warn("Performance monitoring integrations could not be automatically loaded.");
    return I.filter((d) => !!d.loadDependency())
  }
  VM1.autoDiscoverNodePerformanceMonitoringIntegrations = Io2
})
// @from(Start 298331, End 298981)
F01 = Y((DM1) => {
  Object.defineProperty(DM1, "__esModule", {
    value: !0
  });
  var Go2 = B1("os"),
    Zo2 = B1("util"),
    YM1 = V4();
  class _M1 extends YM1.ServerRuntimeClient {
    constructor(I) {
      YM1.applySdkMetadata(I, "node"), I.transportOptions = {
        textEncoder: new Zo2.TextEncoder,
        ...I.transportOptions
      };
      let d = {
        ...I,
        platform: "node",
        runtime: {
          name: "node",
          version: global.process.version
        },
        serverName: I.serverName || global.process.env.SENTRY_NAME || Go2.hostname()
      };
      super(d)
    }
  }
  DM1.NodeClient = _M1
})
// @from(Start 298987, End 300632)
KM1 = Y((JM1) => {
  var {
    _nullishCoalesce: HM1
  } = V0();
  Object.defineProperty(JM1, "__esModule", {
    value: !0
  });
  var FM1 = B1("http");
  B1("https");
  var Hw = Symbol("AgentBaseInternalState");
  class gM1 extends FM1.Agent {
    constructor(I) {
      super(I);
      this[Hw] = {}
    }
    isSecureEndpoint(I) {
      if (I) {
        if (typeof I.secureEndpoint === "boolean") return I.secureEndpoint;
        if (typeof I.protocol === "string") return I.protocol === "https:"
      }
      let {
        stack: d
      } = new Error;
      if (typeof d !== "string") return !1;
      return d.split(`
`).some((G) => G.indexOf("(https.js:") !== -1 || G.indexOf("node:https:") !== -1)
    }
    createSocket(I, d, G) {
      let Z = {
        ...d,
        secureEndpoint: this.isSecureEndpoint(d)
      };
      Promise.resolve().then(() => this.connect(I, Z)).then((C) => {
        if (C instanceof FM1.Agent) return C.addRequest(I, Z);
        this[Hw].currentSocket = C, super.createSocket(I, d, G)
      }, G)
    }
    createConnection() {
      let I = this[Hw].currentSocket;
      if (this[Hw].currentSocket = void 0, !I) throw new Error("No socket was returned in the `connect()` function");
      return I
    }
    get defaultPort() {
      return HM1(this[Hw].defaultPort, () => this.protocol === "https:" ? 443 : 80)
    }
    set defaultPort(I) {
      if (this[Hw]) this[Hw].defaultPort = I
    }
    get protocol() {
      return HM1(this[Hw].protocol, () => this.isSecureEndpoint() ? "https:" : "http:")
    }
    set protocol(I) {
      if (this[Hw]) this[Hw].protocol = I
    }
  }
  JM1.Agent = gM1
})
// @from(Start 300638, End 302654)
zM1 = Y((NM1) => {
  Object.defineProperty(NM1, "__esModule", {
    value: !0
  });
  var wo2 = V0();

  function vm(...I) {
    wo2.logger.log("[https-proxy-agent:parse-proxy-response]", ...I)
  }

  function Bo2(I) {
    return new Promise((d, G) => {
      let Z = 0,
        C = [];

      function W() {
        let X = I.read();
        if (X) V(X);
        else I.once("readable", W)
      }

      function w() {
        I.removeListener("end", B), I.removeListener("error", A), I.removeListener("readable", W)
      }

      function B() {
        w(), vm("onend"), G(new Error("Proxy connection ended before receiving CONNECT response"))
      }

      function A(X) {
        w(), vm("onerror %o", X), G(X)
      }

      function V(X) {
        C.push(X), Z += X.length;
        let _ = Buffer.concat(C, Z),
          F = _.indexOf(`\r
\r
`);
        if (F === -1) {
          vm("have not received end of HTTP headers yet..."), W();
          return
        }
        let g = _.slice(0, F).toString("ascii").split(`\r
`),
          J = g.shift();
        if (!J) return I.destroy(), G(new Error("No header received from proxy CONNECT response"));
        let K = J.split(" "),
          Q = +K[1],
          E = K.slice(2).join(" "),
          S = {};
        for (let P of g) {
          if (!P) continue;
          let $ = P.indexOf(":");
          if ($ === -1) return I.destroy(), G(new Error(`Invalid header from proxy CONNECT response: "${P}"`));
          let h = P.slice(0, $).toLowerCase(),
            O = P.slice($ + 1).trimStart(),
            T = S[h];
          if (typeof T === "string") S[h] = [T, O];
          else if (Array.isArray(T)) T.push(O);
          else S[h] = O
        }
        vm("got proxy server response: %o %o", J, S), w(), d({
          connect: {
            statusCode: Q,
            statusText: E,
            headers: S
          },
          buffered: _
        })
      }
      I.on("error", A), I.on("end", B), W()
    })
  }
  NM1.parseProxyResponse = Bo2
})
// @from(Start 302660, End 305912)
RM1 = Y((qM1) => {
  var {
    _nullishCoalesce: Vo2,
    _optionalChain: Xo2
  } = V0();
  Object.defineProperty(qM1, "__esModule", {
    value: !0
  });
  var wE = B1("net"),
    QM1 = B1("tls"),
    Yo2 = B1("url"),
    _o2 = V0(),
    Do2 = KM1(),
    Ho2 = zM1();

  function BE(...I) {
    _o2.logger.log("[https-proxy-agent]", ...I)
  }
  class g01 extends Do2.Agent {
    static __initStatic() {
      this.protocols = ["http", "https"]
    }
    constructor(I, d) {
      super(d);
      this.options = {}, this.proxy = typeof I === "string" ? new Yo2.URL(I) : I, this.proxyHeaders = Vo2(Xo2([d, "optionalAccess", (C) => C.headers]), () => ({})), BE("Creating new HttpsProxyAgent instance: %o", this.proxy.href);
      let G = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, ""),
        Z = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === "https:" ? 443 : 80;
      this.connectOpts = {
        ALPNProtocols: ["http/1.1"],
        ...d ? fM1(d, "headers") : null,
        host: G,
        port: Z
      }
    }
    async connect(I, d) {
      let {
        proxy: G
      } = this;
      if (!d.host) throw new TypeError('No "host" provided');
      let Z;
      if (G.protocol === "https:") {
        BE("Creating `tls.Socket`: %o", this.connectOpts);
        let _ = this.connectOpts.servername || this.connectOpts.host;
        Z = QM1.connect({
          ...this.connectOpts,
          servername: _ && wE.isIP(_) ? void 0 : _
        })
      } else BE("Creating `net.Socket`: %o", this.connectOpts), Z = wE.connect(this.connectOpts);
      let C = typeof this.proxyHeaders === "function" ? this.proxyHeaders() : {
          ...this.proxyHeaders
        },
        W = wE.isIPv6(d.host) ? `[${d.host}]` : d.host,
        w = `CONNECT ${W}:${d.port} HTTP/1.1\r
`;
      if (G.username || G.password) {
        let _ = `${decodeURIComponent(G.username)}:${decodeURIComponent(G.password)}`;
        C["Proxy-Authorization"] = `Basic ${Buffer.from(_).toString("base64")}`
      }
      if (C.Host = `${W}:${d.port}`, !C["Proxy-Connection"]) C["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close";
      for (let _ of Object.keys(C)) w += `${_}: ${C[_]}\r
`;
      let B = Ho2.parseProxyResponse(Z);
      Z.write(`${w}\r
`);
      let {
        connect: A,
        buffered: V
      } = await B;
      if (I.emit("proxyConnect", A), this.emit("proxyConnect", A, I), A.statusCode === 200) {
        if (I.once("socket", Fo2), d.secureEndpoint) {
          BE("Upgrading socket connection to TLS");
          let _ = d.servername || d.host;
          return QM1.connect({
            ...fM1(d, "host", "path", "port"),
            socket: Z,
            servername: wE.isIP(_) ? void 0 : _
          })
        }
        return Z
      }
      Z.destroy();
      let X = new wE.Socket({
        writable: !1
      });
      return X.readable = !0, I.once("socket", (_) => {
        BE("Replaying proxy buffer for failed request"), _.push(V), _.push(null)
      }), X
    }
  }
  g01.__initStatic();

  function Fo2(I) {
    I.resume()
  }

  function fM1(I, ...d) {
    let G = {},
      Z;
    for (Z in I)
      if (!d.includes(Z)) G[Z] = I[Z];
    return G
  }
  qM1.HttpsProxyAgent = g01
})
// @from(Start 305918, End 308449)
K01 = Y((EM1) => {
  var {
    _nullishCoalesce: J01
  } = V0();
  Object.defineProperty(EM1, "__esModule", {
    value: !0
  });
  var Jo2 = B1("http"),
    Ko2 = B1("https"),
    No2 = B1("stream"),
    vM1 = B1("url"),
    zo2 = B1("zlib"),
    UM1 = V4(),
    Qo2 = V0(),
    fo2 = RM1(),
    qo2 = 32768;

  function Ro2(I) {
    return new No2.Readable({
      read() {
        this.push(I), this.push(null)
      }
    })
  }

  function Uo2(I) {
    let d;
    try {
      d = new vM1.URL(I.url)
    } catch (A) {
      return Qo2.consoleSandbox(() => {
        console.warn("[@sentry/node]: Invalid dsn or tunnel option, will not send any events. The tunnel option must be a full URL when used.")
      }), UM1.createTransport(I, () => Promise.resolve({}))
    }
    let G = d.protocol === "https:",
      Z = vo2(d, I.proxy || (G ? process.env.https_proxy : void 0) || process.env.http_proxy),
      C = G ? Ko2 : Jo2,
      W = I.keepAlive === void 0 ? !1 : I.keepAlive,
      w = Z ? new fo2.HttpsProxyAgent(Z) : new C.Agent({
        keepAlive: W,
        maxSockets: 30,
        timeout: 2000
      }),
      B = Eo2(I, J01(I.httpModule, () => C), w);
    return UM1.createTransport(I, B)
  }

  function vo2(I, d) {
    let {
      no_proxy: G
    } = process.env;
    if (G && G.split(",").some((C) => I.host.endsWith(C) || I.hostname.endsWith(C))) return;
    else return d
  }

  function Eo2(I, d, G) {
    let {
      hostname: Z,
      pathname: C,
      port: W,
      protocol: w,
      search: B
    } = new vM1.URL(I.url);
    return function A(V) {
      return new Promise((X, _) => {
        let F = Ro2(V.body),
          g = {
            ...I.headers
          };
        if (V.body.length > qo2) g["content-encoding"] = "gzip", F = F.pipe(zo2.createGzip());
        let J = d.request({
          method: "POST",
          agent: G,
          headers: g,
          hostname: Z,
          path: `${C}${B}`,
          port: W,
          protocol: w,
          ca: I.caCerts
        }, (K) => {
          K.on("data", () => {}), K.on("end", () => {}), K.setEncoding("utf8");
          let Q = J01(K.headers["retry-after"], () => null),
            E = J01(K.headers["x-sentry-rate-limits"], () => null);
          X({
            statusCode: K.statusCode,
            headers: {
              "retry-after": Q,
              "x-sentry-rate-limits": Array.isArray(E) ? E[0] : E
            }
          })
        });
        J.on("error", _), F.pipe(J)
      })
    }
  }
  EM1.makeNodeTransport = Uo2
})
// @from(Start 308455, End 308633)
UF = Y((MM1) => {
  Object.defineProperty(MM1, "__esModule", {
    value: !0
  });
  var So2 = V0(),
    Lo2 = So2.parseSemver(process.versions.node);
  MM1.NODE_VERSION = Lo2
})
// @from(Start 308639, End 309542)
PM1 = Y((yM1) => {
  var {
    _optionalChain: Po2
  } = V0();
  Object.defineProperty(yM1, "__esModule", {
    value: !0
  });
  var SM1 = B1("domain"),
    vF = V4();

  function LM1() {
    return SM1.active
  }

  function $o2() {
    let I = LM1();
    if (!I) return;
    return vF.ensureHubOnCarrier(I), vF.getHubFromCarrier(I)
  }

  function uo2(I) {
    let d = {};
    return vF.ensureHubOnCarrier(d, I), vF.getHubFromCarrier(d)
  }

  function To2(I, d) {
    let G = LM1();
    if (G && Po2([d, "optionalAccess", (w) => w.reuseExisting])) return I();
    let Z = SM1.create(),
      C = G ? vF.getHubFromCarrier(G) : void 0,
      W = uo2(C);
    return vF.setHubOnCarrier(Z, W), Z.bind(() => {
      return I()
    })()
  }

  function Oo2() {
    vF.setAsyncContextStrategy({
      getCurrentHub: $o2,
      runWithAsyncContext: To2
    })
  }
  yM1.setDomainAsyncContextStrategy = Oo2
})
// @from(Start 309548, End 310310)
uM1 = Y(($M1) => {
  var {
    _optionalChain: lo2
  } = V0();
  Object.defineProperty($M1, "__esModule", {
    value: !0
  });
  var N01 = V4(),
    bo2 = B1("async_hooks"),
    Em;

  function ho2() {
    if (!Em) Em = new bo2.AsyncLocalStorage;

    function I() {
      return Em.getStore()
    }

    function d(Z) {
      let C = {};
      return N01.ensureHubOnCarrier(C, Z), N01.getHubFromCarrier(C)
    }

    function G(Z, C) {
      let W = I();
      if (W && lo2([C, "optionalAccess", (B) => B.reuseExisting])) return Z();
      let w = d(W);
      return Em.run(w, () => {
        return Z()
      })
    }
    N01.setAsyncContextStrategy({
      getCurrentHub: I,
      runWithAsyncContext: G
    })
  }
  $M1.setHooksAsyncContextStrategy = ho2
})
// @from(Start 310316, End 310637)
OM1 = Y((TM1) => {
  Object.defineProperty(TM1, "__esModule", {
    value: !0
  });
  var ko2 = UF(),
    xo2 = PM1(),
    co2 = uM1();

  function po2() {
    if (ko2.NODE_VERSION.major >= 14) co2.setHooksAsyncContextStrategy();
    else xo2.setDomainAsyncContextStrategy()
  }
  TM1.setNodeAsyncContextStrategy = po2
})
// @from(Start 310643, End 311488)
Sm = Y((hM1) => {
  Object.defineProperty(hM1, "__esModule", {
    value: !0
  });
  var no2 = B1("util"),
    Mm = V4(),
    mM1 = V0(),
    lM1 = "Console",
    ro2 = () => {
      return {
        name: lM1,
        setupOnce() {},
        setup(I) {
          mM1.addConsoleInstrumentationHandler(({
            args: d,
            level: G
          }) => {
            if (Mm.getClient() !== I) return;
            Mm.addBreadcrumb({
              category: "console",
              level: mM1.severityLevelFromString(G),
              message: no2.format.apply(void 0, d)
            }, {
              input: [...d],
              level: G
            })
          })
        }
      }
    },
    bM1 = Mm.defineIntegration(ro2),
    ao2 = Mm.convertIntegrationFnToClass(lM1, bM1);
  hM1.Console = ao2;
  hM1.consoleIntegration = bM1
})
// @from(Start 311494, End 319355)
Lm = Y((sM1) => {
  var {
    _optionalChain: EF
  } = V0();
  Object.defineProperty(sM1, "__esModule", {
    value: !0
  });
  var eo2 = B1("child_process"),
    kM1 = B1("fs"),
    rG = B1("os"),
    to2 = B1("path"),
    xM1 = B1("util"),
    cM1 = V4(),
    pM1 = xM1.promisify(kM1.readFile),
    iM1 = xM1.promisify(kM1.readdir),
    nM1 = "Context",
    Ie2 = (I = {}) => {
      let d, G = {
        app: !0,
        os: !0,
        device: !0,
        culture: !0,
        cloudResource: !0,
        ...I
      };
      async function Z(W) {
        if (d === void 0) d = C();
        let w = Ge2(await d);
        return W.contexts = {
          ...W.contexts,
          app: {
            ...w.app,
            ...EF([W, "access", (B) => B.contexts, "optionalAccess", (B) => B.app])
          },
          os: {
            ...w.os,
            ...EF([W, "access", (B) => B.contexts, "optionalAccess", (B) => B.os])
          },
          device: {
            ...w.device,
            ...EF([W, "access", (B) => B.contexts, "optionalAccess", (B) => B.device])
          },
          culture: {
            ...w.culture,
            ...EF([W, "access", (B) => B.contexts, "optionalAccess", (B) => B.culture])
          },
          cloud_resource: {
            ...w.cloud_resource,
            ...EF([W, "access", (B) => B.contexts, "optionalAccess", (B) => B.cloud_resource])
          }
        }, W
      }
      async function C() {
        let W = {};
        if (G.os) W.os = await Ze2();
        if (G.app) W.app = We2();
        if (G.device) W.device = aM1(G.device);
        if (G.culture) {
          let w = Ce2();
          if (w) W.culture = w
        }
        if (G.cloudResource) W.cloud_resource = Ye2();
        return W
      }
      return {
        name: nM1,
        setupOnce() {},
        processEvent(W) {
          return Z(W)
        }
      }
    },
    rM1 = cM1.defineIntegration(Ie2),
    de2 = cM1.convertIntegrationFnToClass(nM1, rM1);

  function Ge2(I) {
    if (EF([I, "optionalAccess", (d) => d.app, "optionalAccess", (d) => d.app_memory])) I.app.app_memory = process.memoryUsage().rss;
    if (EF([I, "optionalAccess", (d) => d.device, "optionalAccess", (d) => d.free_memory])) I.device.free_memory = rG.freemem();
    return I
  }
  async function Ze2() {
    let I = rG.platform();
    switch (I) {
      case "darwin":
        return Ve2();
      case "linux":
        return Xe2();
      default:
        return {
          name: we2[I] || I, version: rG.release()
        }
    }
  }

  function Ce2() {
    try {
      if (typeof process.versions.icu !== "string") return;
      let I = new Date(900000000);
      if (new Intl.DateTimeFormat("es", {
          month: "long"
        }).format(I) === "enero") {
        let G = Intl.DateTimeFormat().resolvedOptions();
        return {
          locale: G.locale,
          timezone: G.timeZone
        }
      }
    } catch (I) {}
    return
  }

  function We2() {
    let I = process.memoryUsage().rss;
    return {
      app_start_time: new Date(Date.now() - process.uptime() * 1000).toISOString(),
      app_memory: I
    }
  }

  function aM1(I) {
    let d = {},
      G;
    try {
      G = rG.uptime && rG.uptime()
    } catch (Z) {}
    if (typeof G === "number") d.boot_time = new Date(Date.now() - G * 1000).toISOString();
    if (d.arch = rG.arch(), I === !0 || I.memory) d.memory_size = rG.totalmem(), d.free_memory = rG.freemem();
    if (I === !0 || I.cpu) {
      let Z = rG.cpus();
      if (Z && Z.length) {
        let C = Z[0];
        d.processor_count = Z.length, d.cpu_description = C.model, d.processor_frequency = C.speed
      }
    }
    return d
  }
  var we2 = {
      aix: "IBM AIX",
      freebsd: "FreeBSD",
      openbsd: "OpenBSD",
      sunos: "SunOS",
      win32: "Windows"
    },
    Be2 = [{
      name: "fedora-release",
      distros: ["Fedora"]
    }, {
      name: "redhat-release",
      distros: ["Red Hat Linux", "Centos"]
    }, {
      name: "redhat_version",
      distros: ["Red Hat Linux"]
    }, {
      name: "SuSE-release",
      distros: ["SUSE Linux"]
    }, {
      name: "lsb-release",
      distros: ["Ubuntu Linux", "Arch Linux"]
    }, {
      name: "debian_version",
      distros: ["Debian"]
    }, {
      name: "debian_release",
      distros: ["Debian"]
    }, {
      name: "arch-release",
      distros: ["Arch Linux"]
    }, {
      name: "gentoo-release",
      distros: ["Gentoo Linux"]
    }, {
      name: "novell-release",
      distros: ["SUSE Linux"]
    }, {
      name: "alpine-release",
      distros: ["Alpine Linux"]
    }],
    Ae2 = {
      alpine: (I) => I,
      arch: (I) => Fw(/distrib_release=(.*)/, I),
      centos: (I) => Fw(/release ([^ ]+)/, I),
      debian: (I) => I,
      fedora: (I) => Fw(/release (..)/, I),
      mint: (I) => Fw(/distrib_release=(.*)/, I),
      red: (I) => Fw(/release ([^ ]+)/, I),
      suse: (I) => Fw(/VERSION = (.*)\n/, I),
      ubuntu: (I) => Fw(/distrib_release=(.*)/, I)
    };

  function Fw(I, d) {
    let G = I.exec(d);
    return G ? G[1] : void 0
  }
  async function Ve2() {
    let I = {
      kernel_version: rG.release(),
      name: "Mac OS X",
      version: `10.${Number(rG.release().split(".")[0])-4}`
    };
    try {
      let d = await new Promise((G, Z) => {
        eo2.execFile("/usr/bin/sw_vers", (C, W) => {
          if (C) {
            Z(C);
            return
          }
          G(W)
        })
      });
      I.name = Fw(/^ProductName:\s+(.*)$/m, d), I.version = Fw(/^ProductVersion:\s+(.*)$/m, d), I.build = Fw(/^BuildVersion:\s+(.*)$/m, d)
    } catch (d) {}
    return I
  }

  function jM1(I) {
    return I.split(" ")[0].toLowerCase()
  }
  async function Xe2() {
    let I = {
      kernel_version: rG.release(),
      name: "Linux"
    };
    try {
      let d = await iM1("/etc"),
        G = Be2.find((B) => d.includes(B.name));
      if (!G) return I;
      let Z = to2.join("/etc", G.name),
        C = (await pM1(Z, {
          encoding: "utf-8"
        })).toLowerCase(),
        {
          distros: W
        } = G;
      I.name = W.find((B) => C.indexOf(jM1(B)) >= 0) || W[0];
      let w = jM1(I.name);
      I.version = Ae2[w](C)
    } catch (d) {}
    return I
  }

  function Ye2() {
    if (process.env.VERCEL) return {
      "cloud.provider": "vercel",
      "cloud.region": process.env.VERCEL_REGION
    };
    else if (process.env.AWS_REGION) return {
      "cloud.provider": "aws",
      "cloud.region": process.env.AWS_REGION,
      "cloud.platform": process.env.AWS_EXECUTION_ENV
    };
    else if (process.env.GCP_PROJECT) return {
      "cloud.provider": "gcp"
    };
    else if (process.env.ALIYUN_REGION_ID) return {
      "cloud.provider": "alibaba_cloud",
      "cloud.region": process.env.ALIYUN_REGION_ID
    };
    else if (process.env.WEBSITE_SITE_NAME && process.env.REGION_NAME) return {
      "cloud.provider": "azure",
      "cloud.region": process.env.REGION_NAME
    };
    else if (process.env.IBM_CLOUD_REGION) return {
      "cloud.provider": "ibm_cloud",
      "cloud.region": process.env.IBM_CLOUD_REGION
    };
    else if (process.env.TENCENTCLOUD_REGION) return {
      "cloud.provider": "tencent_cloud",
      "cloud.region": process.env.TENCENTCLOUD_REGION,
      "cloud.account.id": process.env.TENCENTCLOUD_APPID,
      "cloud.availability_zone": process.env.TENCENTCLOUD_ZONE
    };
    else if (process.env.NETLIFY) return {
      "cloud.provider": "netlify"
    };
    else if (process.env.FLY_REGION) return {
      "cloud.provider": "fly.io",
      "cloud.region": process.env.FLY_REGION
    };
    else if (process.env.DYNO) return {
      "cloud.provider": "heroku"
    };
    else return
  }
  sM1.Context = de2;
  sM1.getDeviceContext = aM1;
  sM1.nodeContextIntegration = rM1;
  sM1.readDirAsync = iM1;
  sM1.readFileAsync = pM1
})
// @from(Start 319361, End 321432)
Pm = Y((dS1) => {
  var {
    _optionalChain: z01
  } = V0();
  Object.defineProperty(dS1, "__esModule", {
    value: !0
  });
  var Je2 = B1("fs"),
    oM1 = V4(),
    eM1 = V0(),
    ym = new eM1.LRUMap(100),
    Ke2 = 7,
    tM1 = "ContextLines";

  function Ne2(I) {
    return new Promise((d, G) => {
      Je2.readFile(I, "utf8", (Z, C) => {
        if (Z) G(Z);
        else d(C)
      })
    })
  }
  var ze2 = (I = {}) => {
      let d = I.frameContextLines !== void 0 ? I.frameContextLines : Ke2;
      return {
        name: tM1,
        setupOnce() {},
        processEvent(G) {
          return fe2(G, d)
        }
      }
    },
    IS1 = oM1.defineIntegration(ze2),
    Qe2 = oM1.convertIntegrationFnToClass(tM1, IS1);
  async function fe2(I, d) {
    let G = {},
      Z = [];
    if (d > 0 && z01([I, "access", (C) => C.exception, "optionalAccess", (C) => C.values]))
      for (let C of I.exception.values) {
        if (!z01([C, "access", (W) => W.stacktrace, "optionalAccess", (W) => W.frames])) continue;
        for (let W = C.stacktrace.frames.length - 1; W >= 0; W--) {
          let w = C.stacktrace.frames[W];
          if (w.filename && !G[w.filename] && !ym.get(w.filename)) Z.push(Re2(w.filename)), G[w.filename] = 1
        }
      }
    if (Z.length > 0) await Promise.all(Z);
    if (d > 0 && z01([I, "access", (C) => C.exception, "optionalAccess", (C) => C.values])) {
      for (let C of I.exception.values)
        if (C.stacktrace && C.stacktrace.frames) await qe2(C.stacktrace.frames, d)
    }
    return I
  }

  function qe2(I, d) {
    for (let G of I)
      if (G.filename && G.context_line === void 0) {
        let Z = ym.get(G.filename);
        if (Z) try {
          eM1.addContextToFrame(Z, G, d)
        } catch (C) {}
      }
  }
  async function Re2(I) {
    let d = ym.get(I);
    if (d === null) return null;
    if (d !== void 0) return d;
    let G = null;
    try {
      G = (await Ne2(I)).split(`
`)
    } catch (Z) {}
    return ym.set(I, G), G
  }
  dS1.ContextLines = Qe2;
  dS1.contextLinesIntegration = IS1
})
// @from(Start 321438, End 321620)
AE = Y((GS1) => {
  Object.defineProperty(GS1, "__esModule", {
    value: !0
  });
  var Ee2 = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
  GS1.DEBUG_BUILD = Ee2
})
// @from(Start 321626, End 324595)
wS1 = Y((WS1) => {
  var {
    _optionalChain: gw
  } = V0();
  Object.defineProperty(WS1, "__esModule", {
    value: !0
  });
  var Q01 = B1("url"),
    Se2 = UF();

  function Le2(I) {
    let {
      protocol: d,
      hostname: G,
      port: Z
    } = CS1(I), C = I.path ? I.path : "/";
    return `${d}//${G}${Z}${C}`
  }

  function ZS1(I) {
    let {
      protocol: d,
      hostname: G,
      port: Z
    } = CS1(I), C = I.pathname || "/", W = I.auth ? ye2(I.auth) : "";
    return `${d}//${W}${G}${Z}${C}`
  }

  function ye2(I) {
    let [d, G] = I.split(":");
    return `${d?"[Filtered]":""}:${G?"[Filtered]":""}@`
  }

  function Pe2(I, d, G) {
    if (!I) return I;
    let [Z, C] = I.split(" ");
    if (d.host && !d.protocol) d.protocol = gw([G, "optionalAccess", (W) => W.agent, "optionalAccess", (W) => W.protocol]), C = ZS1(d);
    if (gw([C, "optionalAccess", (W) => W.startsWith, "call", (W) => W("///")])) C = C.slice(2);
    return `${Z} ${C}`
  }

  function f01(I) {
    let d = {
      protocol: I.protocol,
      hostname: typeof I.hostname === "string" && I.hostname.startsWith("[") ? I.hostname.slice(1, -1) : I.hostname,
      hash: I.hash,
      search: I.search,
      pathname: I.pathname,
      path: `${I.pathname||""}${I.search||""}`,
      href: I.href
    };
    if (I.port !== "") d.port = Number(I.port);
    if (I.username || I.password) d.auth = `${I.username}:${I.password}`;
    return d
  }

  function $e2(I, d) {
    let G, Z;
    if (typeof d[d.length - 1] === "function") G = d.pop();
    if (typeof d[0] === "string") Z = f01(new Q01.URL(d[0]));
    else if (d[0] instanceof Q01.URL) Z = f01(d[0]);
    else {
      Z = d[0];
      try {
        let C = new Q01.URL(Z.path || "", `${Z.protocol||"http:"}//${Z.hostname}`);
        Z = {
          pathname: C.pathname,
          search: C.search,
          hash: C.hash,
          ...Z
        }
      } catch (C) {}
    }
    if (d.length === 2) Z = {
      ...Z,
      ...d[1]
    };
    if (Z.protocol === void 0)
      if (Se2.NODE_VERSION.major > 8) Z.protocol = gw([gw([I, "optionalAccess", (C) => C.globalAgent]), "optionalAccess", (C) => C.protocol]) || gw([Z.agent, "optionalAccess", (C) => C.protocol]) || gw([Z._defaultAgent, "optionalAccess", (C) => C.protocol]);
      else Z.protocol = gw([Z.agent, "optionalAccess", (C) => C.protocol]) || gw([Z._defaultAgent, "optionalAccess", (C) => C.protocol]) || gw([gw([I, "optionalAccess", (C) => C.globalAgent]), "optionalAccess", (C) => C.protocol]);
    if (G) return [Z, G];
    else return [Z]
  }

  function CS1(I) {
    let d = I.protocol || "",
      G = I.hostname || I.host || "",
      Z = !I.port || I.port === 80 || I.port === 443 || /^(.*):(\d+)$/.test(G) ? "" : `:${I.port}`;
    return {
      protocol: d,
      hostname: G,
      port: Z
    }
  }
  WS1.cleanSpanDescription = Pe2;
  WS1.extractRawUrl = Le2;
  WS1.extractUrl = ZS1;
  WS1.normalizeRequestArgs = $e2;
  WS1.urlToOptions = f01
})
// @from(Start 324601, End 330525)
$m = Y((XS1) => {
  var {
    _optionalChain: SN
  } = V0();
  Object.defineProperty(XS1, "__esModule", {
    value: !0
  });
  var f7 = V4(),
    pd = V0(),
    q01 = AE(),
    be2 = UF(),
    VE = wS1(),
    he2 = (I = {}) => {
      let {
        breadcrumbs: d,
        tracing: G,
        shouldCreateSpanForRequest: Z
      } = I, C = {
        breadcrumbs: d,
        tracing: G === !1 ? !1 : pd.dropUndefinedKeys({
          enableIfHasTracingEnabled: G === !0 ? void 0 : !0,
          shouldCreateSpanForRequest: Z
        })
      };
      return new MF(C)
    },
    je2 = f7.defineIntegration(he2);
  class MF {
    static __initStatic() {
      this.id = "Http"
    }
    __init() {
      this.name = MF.id
    }
    constructor(I = {}) {
      MF.prototype.__init.call(this), this._breadcrumbs = typeof I.breadcrumbs === "undefined" ? !0 : I.breadcrumbs, this._tracing = !I.tracing ? void 0 : I.tracing === !0 ? {} : I.tracing
    }
    setupOnce(I, d) {
      let G = SN([d, "call", (A) => A(), "access", (A) => A.getClient, "call", (A) => A(), "optionalAccess", (A) => A.getOptions, "call", (A) => A()]),
        Z = AS1(this._tracing, G);
      if (!this._breadcrumbs && !Z) return;
      if (G && G.instrumenter !== "sentry") {
        q01.DEBUG_BUILD && pd.logger.log("HTTP Integration is skipped because of instrumenter configuration.");
        return
      }
      let C = VS1(Z, this._tracing, G),
        W = SN([G, "optionalAccess", (A) => A.tracePropagationTargets]) || SN([this, "access", (A) => A._tracing, "optionalAccess", (A) => A.tracePropagationTargets]),
        w = B1("http"),
        B = BS1(w, this._breadcrumbs, C, W);
      if (pd.fill(w, "get", B), pd.fill(w, "request", B), be2.NODE_VERSION.major > 8) {
        let A = B1("https"),
          V = BS1(A, this._breadcrumbs, C, W);
        pd.fill(A, "get", V), pd.fill(A, "request", V)
      }
    }
  }
  MF.__initStatic();

  function BS1(I, d, G, Z) {
    let C = new pd.LRUMap(100),
      W = new pd.LRUMap(100),
      w = (V) => {
        if (G === void 0) return !0;
        let X = C.get(V);
        if (X !== void 0) return X;
        let _ = G(V);
        return C.set(V, _), _
      },
      B = (V) => {
        if (Z === void 0) return !0;
        let X = W.get(V);
        if (X !== void 0) return X;
        let _ = pd.stringMatchesSomePattern(V, Z);
        return W.set(V, _), _
      };

    function A(V, X, _, F) {
      if (!f7.getCurrentHub().getIntegration(MF)) return;
      f7.addBreadcrumb({
        category: "http",
        data: {
          status_code: F && F.statusCode,
          ...X
        },
        type: "http"
      }, {
        event: V,
        request: _,
        response: F
      })
    }
    return function V(X) {
      return function _(...F) {
        let g = VE.normalizeRequestArgs(I, F),
          J = g[0],
          K = VE.extractRawUrl(J),
          Q = VE.extractUrl(J),
          E = f7.getClient();
        if (f7.isSentryRequestUrl(Q, E)) return X.apply(I, g);
        let S = f7.getCurrentScope(),
          P = f7.getIsolationScope(),
          $ = f7.getActiveSpan(),
          h = xe2(Q, J),
          O = w(K) ? SN([$, "optionalAccess", (T) => T.startChild, "call", (T) => T({
            op: "http.client",
            origin: "auto.http.node.http",
            description: `${h["http.method"]} ${h.url}`,
            data: h
          })]) : void 0;
        if (E && B(K)) {
          let {
            traceId: T,
            spanId: V1,
            sampled: c,
            dsc: c1
          } = {
            ...P.getPropagationContext(),
            ...S.getPropagationContext()
          }, o1 = O ? f7.spanToTraceHeader(O) : pd.generateSentryTraceHeader(T, V1, c), a1 = pd.dynamicSamplingContextToSentryBaggageHeader(c1 || (O ? f7.getDynamicSamplingContextFromSpan(O) : f7.getDynamicSamplingContextFromClient(T, E, S)));
          ke2(J, Q, o1, a1)
        } else q01.DEBUG_BUILD && pd.logger.log(`[Tracing] Not adding sentry-trace header to outgoing request (${Q}) due to mismatching tracePropagationTargets option.`);
        return X.apply(I, g).once("response", function(T) {
          let V1 = this;
          if (d) A("response", h, V1, T);
          if (O) {
            if (T.statusCode) f7.setHttpStatus(O, T.statusCode);
            O.updateName(VE.cleanSpanDescription(f7.spanToJSON(O).description || "", J, V1) || ""), O.end()
          }
        }).once("error", function() {
          let T = this;
          if (d) A("error", h, T);
          if (O) f7.setHttpStatus(O, 500), O.updateName(VE.cleanSpanDescription(f7.spanToJSON(O).description || "", J, T) || ""), O.end()
        })
      }
    }
  }

  function ke2(I, d, G, Z) {
    if ((I.headers || {})["sentry-trace"]) return;
    q01.DEBUG_BUILD && pd.logger.log(`[Tracing] Adding sentry-trace header ${G} to outgoing request to "${d}": `), I.headers = {
      ...I.headers,
      "sentry-trace": G,
      ...Z && Z.length > 0 && {
        baggage: ce2(I, Z)
      }
    }
  }

  function xe2(I, d) {
    let G = d.method || "GET",
      Z = {
        url: I,
        "http.method": G
      };
    if (d.hash) Z["http.fragment"] = d.hash.substring(1);
    if (d.search) Z["http.query"] = d.search.substring(1);
    return Z
  }

  function ce2(I, d) {
    if (!I.headers || !I.headers.baggage) return d;
    else if (!d) return I.headers.baggage;
    else if (Array.isArray(I.headers.baggage)) return [...I.headers.baggage, d];
    return [I.headers.baggage, d]
  }

  function AS1(I, d) {
    return I === void 0 ? !1 : I.enableIfHasTracingEnabled ? f7.hasTracingEnabled(d) : !0
  }

  function VS1(I, d, G) {
    return I ? SN([d, "optionalAccess", (C) => C.shouldCreateSpanForRequest]) || SN([G, "optionalAccess", (C) => C.shouldCreateSpanForRequest]) : () => !1
  }
  XS1.Http = MF;
  XS1._getShouldCreateSpanForRequest = VS1;
  XS1._shouldCreateSpans = AS1;
  XS1.httpIntegration = je2
})
// @from(Start 330531, End 331475)
DS1 = Y((_S1) => {
  Object.defineProperty(_S1, "__esModule", {
    value: !0
  });

  function ae2(I, d, G) {
    let Z = 0,
      C = 5,
      W = 0;
    return setInterval(() => {
      if (W === 0) {
        if (Z > I) {
          if (C *= 2, G(C), C > 86400) C = 86400;
          W = C
        }
      } else if (W -= 1, W === 0) d();
      Z = 0
    }, 1000).unref(), () => {
      Z += 1
    }
  }

  function R01(I) {
    return I !== void 0 && (I.length === 0 || I === "?" || I === "<anonymous>")
  }

  function se2(I, d) {
    return I === d || R01(I) && R01(d)
  }

  function YS1(I) {
    if (I === void 0) return;
    return I.slice(-10).reduce((d, G) => `${d},${G.function},${G.lineno},${G.colno}`, "")
  }

  function oe2(I, d) {
    if (d === void 0) return;
    return YS1(I(d, 1))
  }
  _S1.createRateLimiter = ae2;
  _S1.functionNamesMatch = se2;
  _S1.hashFrames = YS1;
  _S1.hashFromStack = oe2;
  _S1.isAnonymous = R01
})
// @from(Start 331481, End 338806)
KS1 = Y((JS1) => {
  var {
    _optionalChain: O3
  } = V0();
  Object.defineProperty(JS1, "__esModule", {
    value: !0
  });
  var U01 = V4(),
    um = V0(),
    Zt2 = UF(),
    Tm = DS1();

  function v01(I) {
    let d = [],
      G = !1;

    function Z(w) {
      if (d = [], G) return;
      G = !0, I(w)
    }
    d.push(Z);

    function C(w) {
      d.push(w)
    }

    function W(w) {
      let B = d.pop() || Z;
      try {
        B(w)
      } catch (A) {
        Z(w)
      }
    }
    return {
      add: C,
      next: W
    }
  }
  class HS1 {
    constructor() {
      let {
        Session: I
      } = B1("inspector");
      this._session = new I
    }
    configureAndConnect(I, d) {
      this._session.connect(), this._session.on("Debugger.paused", (G) => {
        I(G, () => {
          this._session.post("Debugger.resume")
        })
      }), this._session.post("Debugger.enable"), this._session.post("Debugger.setPauseOnExceptions", {
        state: d ? "all" : "uncaught"
      })
    }
    setPauseOnExceptions(I) {
      this._session.post("Debugger.setPauseOnExceptions", {
        state: I ? "all" : "uncaught"
      })
    }
    getLocalVariables(I, d) {
      this._getProperties(I, (G) => {
        let {
          add: Z,
          next: C
        } = v01(d);
        for (let W of G)
          if (O3([W, "optionalAccess", (w) => w.value, "optionalAccess", (w) => w.objectId]) && O3([W, "optionalAccess", (w) => w.value, "access", (w) => w.className]) === "Array") {
            let w = W.value.objectId;
            Z((B) => this._unrollArray(w, W.name, B, C))
          } else if (O3([W, "optionalAccess", (w) => w.value, "optionalAccess", (w) => w.objectId]) && O3([W, "optionalAccess", (w) => w.value, "optionalAccess", (w) => w.className]) === "Object") {
          let w = W.value.objectId;
          Z((B) => this._unrollObject(w, W.name, B, C))
        } else if (O3([W, "optionalAccess", (w) => w.value, "optionalAccess", (w) => w.value]) != null || O3([W, "optionalAccess", (w) => w.value, "optionalAccess", (w) => w.description]) != null) Z((w) => this._unrollOther(W, w, C));
        C({})
      })
    }
    _getProperties(I, d) {
      this._session.post("Runtime.getProperties", {
        objectId: I,
        ownProperties: !0
      }, (G, Z) => {
        if (G) d([]);
        else d(Z.result)
      })
    }
    _unrollArray(I, d, G, Z) {
      this._getProperties(I, (C) => {
        G[d] = C.filter((W) => W.name !== "length" && !isNaN(parseInt(W.name, 10))).sort((W, w) => parseInt(W.name, 10) - parseInt(w.name, 10)).map((W) => O3([W, "optionalAccess", (w) => w.value, "optionalAccess", (w) => w.value])), Z(G)
      })
    }
    _unrollObject(I, d, G, Z) {
      this._getProperties(I, (C) => {
        G[d] = C.map((W) => [W.name, O3([W, "optionalAccess", (w) => w.value, "optionalAccess", (w) => w.value])]).reduce((W, [w, B]) => {
          return W[w] = B, W
        }, {}), Z(G)
      })
    }
    _unrollOther(I, d, G) {
      if (O3([I, "optionalAccess", (Z) => Z.value, "optionalAccess", (Z) => Z.value]) != null) d[I.name] = I.value.value;
      else if (O3([I, "optionalAccess", (Z) => Z.value, "optionalAccess", (Z) => Z.description]) != null && O3([I, "optionalAccess", (Z) => Z.value, "optionalAccess", (Z) => Z.type]) !== "function") d[I.name] = `<${I.value.description}>`;
      G(d)
    }
  }

  function Ct2() {
    try {
      return new HS1
    } catch (I) {
      return
    }
  }
  var FS1 = "LocalVariables",
    Wt2 = (I = {}, d = Ct2()) => {
      let G = new um.LRUMap(20),
        Z, C = !1;

      function W(A, {
        params: {
          reason: V,
          data: X,
          callFrames: _
        }
      }, F) {
        if (V !== "exception" && V !== "promiseRejection") {
          F();
          return
        }
        O3([Z, "optionalCall", (Q) => Q()]);
        let g = Tm.hashFromStack(A, O3([X, "optionalAccess", (Q) => Q.description]));
        if (g == null) {
          F();
          return
        }
        let {
          add: J,
          next: K
        } = v01((Q) => {
          G.set(g, Q), F()
        });
        for (let Q = 0; Q < Math.min(_.length, 5); Q++) {
          let {
            scopeChain: E,
            functionName: S,
            this: P
          } = _[Q], $ = E.find((O) => O.type === "local"), h = P.className === "global" || !P.className ? S : `${P.className}.${S}`;
          if (O3([$, "optionalAccess", (O) => O.object, "access", (O) => O.objectId]) === void 0) J((O) => {
            O[Q] = {
              function: h
            }, K(O)
          });
          else {
            let O = $.object.objectId;
            J((T) => O3([d, "optionalAccess", (V1) => V1.getLocalVariables, "call", (V1) => V1(O, (c) => {
              T[Q] = {
                function: h,
                vars: c
              }, K(T)
            })]))
          }
        }
        K([])
      }

      function w(A) {
        let V = Tm.hashFrames(O3([A, "optionalAccess", (F) => F.stacktrace, "optionalAccess", (F) => F.frames]));
        if (V === void 0) return;
        let X = G.remove(V);
        if (X === void 0) return;
        let _ = (O3([A, "access", (F) => F.stacktrace, "optionalAccess", (F) => F.frames]) || []).filter((F) => F.function !== "new Promise");
        for (let F = 0; F < _.length; F++) {
          let g = _.length - F - 1;
          if (!_[g] || !X[F]) break;
          if (X[F].vars === void 0 || _[g].in_app === !1 || !Tm.functionNamesMatch(_[g].function, X[F].function)) continue;
          _[g].vars = X[F].vars
        }
      }

      function B(A) {
        for (let V of O3([A, "optionalAccess", (X) => X.exception, "optionalAccess", (X) => X.values]) || []) w(V);
        return A
      }
      return {
        name: FS1,
        setupOnce() {
          let A = U01.getClient(),
            V = O3([A, "optionalAccess", (X) => X.getOptions, "call", (X) => X()]);
          if (d && O3([V, "optionalAccess", (X) => X.includeLocalVariables])) {
            if (Zt2.NODE_VERSION.major < 18) {
              um.logger.log("The `LocalVariables` integration is only supported on Node >= v18.");
              return
            }
            let _ = I.captureAllExceptions !== !1;
            if (d.configureAndConnect((F, g) => W(V.stackParser, F, g), _), _) {
              let F = I.maxExceptionsPerSecond || 50;
              Z = Tm.createRateLimiter(F, () => {
                um.logger.log("Local variables rate-limit lifted."), O3([d, "optionalAccess", (g) => g.setPauseOnExceptions, "call", (g) => g(!0)])
              }, (g) => {
                um.logger.log(`Local variables rate-limit exceeded. Disabling capturing of caught exceptions for ${g} seconds.`), O3([d, "optionalAccess", (J) => J.setPauseOnExceptions, "call", (J) => J(!1)])
              })
            }
            C = !0
          }
        },
        processEvent(A) {
          if (C) return B(A);
          return A
        },
        _getCachedFramesCount() {
          return G.size
        },
        _getFirstCachedFrame() {
          return G.values()[0]
        }
      }
    },
    gS1 = U01.defineIntegration(Wt2),
    wt2 = U01.convertIntegrationFnToClass(FS1, gS1);
  JS1.LocalVariablesSync = wt2;
  JS1.createCallbackList = v01;
  JS1.localVariablesSyncIntegration = gS1
})
// @from(Start 338812, End 339061)
Om = Y((zS1) => {
  Object.defineProperty(zS1, "__esModule", {
    value: !0
  });
  var NS1 = KS1(),
    Xt2 = NS1.LocalVariablesSync,
    Yt2 = NS1.localVariablesSyncIntegration;
  zS1.LocalVariables = Xt2;
  zS1.localVariablesIntegration = Yt2
})
// @from(Start 339067, End 340375)
mm = Y((vS1) => {
  Object.defineProperty(vS1, "__esModule", {
    value: !0
  });
  var QS1 = B1("fs"),
    fS1 = B1("path"),
    qS1 = V4(),
    E01, RS1 = "Modules";

  function Ht2() {
    try {
      return B1.cache ? Object.keys(B1.cache) : []
    } catch (I) {
      return []
    }
  }

  function Ft2() {
    let I = B1.main && B1.main.paths || [],
      d = Ht2(),
      G = {},
      Z = {};
    return d.forEach((C) => {
      let W = C,
        w = () => {
          let B = W;
          if (W = fS1.dirname(B), !W || B === W || Z[B]) return;
          if (I.indexOf(W) < 0) return w();
          let A = fS1.join(B, "package.json");
          if (Z[B] = !0, !QS1.existsSync(A)) return w();
          try {
            let V = JSON.parse(QS1.readFileSync(A, "utf8"));
            G[V.name] = V.version
          } catch (V) {}
        };
      w()
    }), G
  }

  function gt2() {
    if (!E01) E01 = Ft2();
    return E01
  }
  var Jt2 = () => {
      return {
        name: RS1,
        setupOnce() {},
        processEvent(I) {
          return I.modules = {
            ...I.modules,
            ...gt2()
          }, I
        }
      }
    },
    US1 = qS1.defineIntegration(Jt2),
    Kt2 = qS1.convertIntegrationFnToClass(RS1, US1);
  vS1.Modules = Kt2;
  vS1.modulesIntegration = US1
})
// @from(Start 340381, End 341187)
S01 = Y((ES1) => {
  Object.defineProperty(ES1, "__esModule", {
    value: !0
  });
  var Qt2 = V4(),
    lm = V0(),
    M01 = AE(),
    ft2 = 2000;

  function qt2(I) {
    lm.consoleSandbox(() => {
      console.error(I)
    });
    let d = Qt2.getClient();
    if (d === void 0) M01.DEBUG_BUILD && lm.logger.warn("No NodeClient was defined, we are exiting the process now."), global.process.exit(1);
    let G = d.getOptions(),
      Z = G && G.shutdownTimeout && G.shutdownTimeout > 0 && G.shutdownTimeout || ft2;
    d.close(Z).then((C) => {
      if (!C) M01.DEBUG_BUILD && lm.logger.warn("We reached the timeout for emptying the request buffer, still exiting now!");
      global.process.exit(1)
    }, (C) => {
      M01.DEBUG_BUILD && lm.logger.error(C)
    })
  }
  ES1.logAndExitProcess = qt2
})
// @from(Start 341193, End 343118)
hm = Y((PS1) => {
  Object.defineProperty(PS1, "__esModule", {
    value: !0
  });
  var bm = V4(),
    Ut2 = V0(),
    vt2 = AE(),
    MS1 = S01(),
    SS1 = "OnUncaughtException",
    Et2 = (I = {}) => {
      let d = {
        exitEvenIfOtherHandlersAreRegistered: !0,
        ...I
      };
      return {
        name: SS1,
        setupOnce() {},
        setup(G) {
          global.process.on("uncaughtException", yS1(G, d))
        }
      }
    },
    LS1 = bm.defineIntegration(Et2),
    Mt2 = bm.convertIntegrationFnToClass(SS1, LS1);

  function yS1(I, d) {
    let Z = !1,
      C = !1,
      W = !1,
      w, B = I.getOptions();
    return Object.assign((A) => {
      let V = MS1.logAndExitProcess;
      if (d.onFatalError) V = d.onFatalError;
      else if (B.onFatalError) V = B.onFatalError;
      let _ = global.process.listeners("uncaughtException").reduce((g, J) => {
          if (J.name === "domainUncaughtExceptionClear" || J.tag && J.tag === "sentry_tracingErrorCallback" || J._errorHandler) return g;
          else return g + 1
        }, 0) === 0,
        F = d.exitEvenIfOtherHandlersAreRegistered || _;
      if (!Z) {
        if (w = A, Z = !0, bm.getClient() === I) bm.captureException(A, {
          originalException: A,
          captureContext: {
            level: "fatal"
          },
          mechanism: {
            handled: !1,
            type: "onuncaughtexception"
          }
        });
        if (!W && F) W = !0, V(A)
      } else if (F) {
        if (W) vt2.DEBUG_BUILD && Ut2.logger.warn("uncaught exception after calling fatal error shutdown callback - this is bad! forcing shutdown"), MS1.logAndExitProcess(A);
        else if (!C) C = !0, setTimeout(() => {
          if (!W) W = !0, V(w, A)
        }, 2000)
      }
    }, {
      _errorHandler: !0
    })
  }
  PS1.OnUncaughtException = Mt2;
  PS1.makeErrorHandler = yS1;
  PS1.onUncaughtExceptionIntegration = LS1
})
// @from(Start 343124, End 344619)
km = Y((mS1) => {
  Object.defineProperty(mS1, "__esModule", {
    value: !0
  });
  var jm = V4(),
    $S1 = V0(),
    Pt2 = S01(),
    uS1 = "OnUnhandledRejection",
    $t2 = (I = {}) => {
      let d = I.mode || "warn";
      return {
        name: uS1,
        setupOnce() {},
        setup(G) {
          global.process.on("unhandledRejection", OS1(G, {
            mode: d
          }))
        }
      }
    },
    TS1 = jm.defineIntegration($t2),
    ut2 = jm.convertIntegrationFnToClass(uS1, TS1);

  function OS1(I, d) {
    return function G(Z, C) {
      if (jm.getClient() !== I) return;
      jm.captureException(Z, {
        originalException: C,
        captureContext: {
          extra: {
            unhandledPromiseRejection: !0
          }
        },
        mechanism: {
          handled: !1,
          type: "onunhandledrejection"
        }
      }), Tt2(Z, d)
    }
  }

  function Tt2(I, d) {
    let G = "This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason:";
    if (d.mode === "warn") $S1.consoleSandbox(() => {
      console.warn(G), console.error(I && I.stack ? I.stack : I)
    });
    else if (d.mode === "strict") $S1.consoleSandbox(() => {
      console.warn(G)
    }), Pt2.logAndExitProcess(I)
  }
  mS1.OnUnhandledRejection = ut2;
  mS1.makeUnhandledPromiseHandler = OS1;
  mS1.onUnhandledRejectionIntegration = TS1
})
// @from(Start 344625, End 346732)
xm = Y((kS1) => {
  Object.defineProperty(kS1, "__esModule", {
    value: !0
  });
  var bt2 = B1("http"),
    ht2 = B1("url"),
    lS1 = V4(),
    LN = V0(),
    bS1 = "Spotlight",
    jt2 = (I = {}) => {
      let d = {
        sidecarUrl: I.sidecarUrl || "http://localhost:8969/stream"
      };
      return {
        name: bS1,
        setupOnce() {},
        setup(G) {
          if (typeof process === "object" && process.env) LN.logger.warn("[Spotlight] It seems you're not in dev mode. Do you really want to have Spotlight enabled?");
          xt2(G, d)
        }
      }
    },
    hS1 = lS1.defineIntegration(jt2),
    kt2 = lS1.convertIntegrationFnToClass(bS1, hS1);

  function xt2(I, d) {
    let G = ct2(d.sidecarUrl);
    if (!G) return;
    let Z = 0;
    if (typeof I.on !== "function") {
      LN.logger.warn("[Spotlight] Cannot connect to spotlight due to missing method on SDK client (`client.on`)");
      return
    }
    I.on("beforeEnvelope", (C) => {
      if (Z > 3) {
        LN.logger.warn("[Spotlight] Disabled Sentry -> Spotlight integration due to too many failed requests");
        return
      }
      let W = LN.serializeEnvelope(C),
        B = jS1()({
          method: "POST",
          path: G.pathname,
          hostname: G.hostname,
          port: G.port,
          headers: {
            "Content-Type": "application/x-sentry-envelope"
          }
        }, (A) => {
          A.on("data", () => {}), A.on("end", () => {}), A.setEncoding("utf8")
        });
      B.on("error", () => {
        Z++, LN.logger.warn("[Spotlight] Failed to send envelope to Spotlight Sidecar")
      }), B.write(W), B.end()
    })
  }

  function ct2(I) {
    try {
      return new ht2.URL(`${I}`)
    } catch (d) {
      LN.logger.warn(`[Spotlight] Invalid sidecar URL: ${I}`);
      return
    }
  }

  function jS1() {
    let {
      request: I
    } = bt2;
    if (pt2(I)) return I.__sentry_original__;
    return I
  }

  function pt2(I) {
    return "__sentry_original__" in I
  }
  kS1.Spotlight = kt2;
  kS1.getNativeHttpRequest = jS1;
  kS1.spotlightIntegration = hS1
})
// @from(Start 346738, End 352570)
pm = Y((xS1) => {
  var {
    _optionalChain: cm
  } = V0();
  Object.defineProperty(xS1, "__esModule", {
    value: !0
  });
  var g6 = V4(),
    SF = V0(),
    at2 = UF();
  xS1.ChannelName = void 0;
  (function(I) {
    I.RequestCreate = "undici:request:create";
    let G = "undici:request:headers";
    I.RequestEnd = G;
    let Z = "undici:request:error";
    I.RequestError = Z
  })(xS1.ChannelName || (xS1.ChannelName = {}));
  var st2 = (I) => {
      return new nI(I)
    },
    ot2 = g6.defineIntegration(st2);
  class nI {
    static __initStatic() {
      this.id = "Undici"
    }
    __init() {
      this.name = nI.id
    }
    __init2() {
      this._createSpanUrlMap = new SF.LRUMap(100)
    }
    __init3() {
      this._headersUrlMap = new SF.LRUMap(100)
    }
    constructor(I = {}) {
      nI.prototype.__init.call(this), nI.prototype.__init2.call(this), nI.prototype.__init3.call(this), nI.prototype.__init4.call(this), nI.prototype.__init5.call(this), nI.prototype.__init6.call(this), this._options = {
        breadcrumbs: I.breadcrumbs === void 0 ? !0 : I.breadcrumbs,
        tracing: I.tracing,
        shouldCreateSpanForRequest: I.shouldCreateSpanForRequest
      }
    }
    setupOnce(I) {
      if (at2.NODE_VERSION.major < 16) return;
      let d;
      try {
        d = B1("diagnostics_channel")
      } catch (G) {}
      if (!d || !d.subscribe) return;
      d.subscribe(xS1.ChannelName.RequestCreate, this._onRequestCreate), d.subscribe(xS1.ChannelName.RequestEnd, this._onRequestEnd), d.subscribe(xS1.ChannelName.RequestError, this._onRequestError)
    }
    _shouldCreateSpan(I) {
      if (this._options.tracing === !1 || this._options.tracing === void 0 && !g6.hasTracingEnabled()) return !1;
      if (this._options.shouldCreateSpanForRequest === void 0) return !0;
      let d = this._createSpanUrlMap.get(I);
      if (d !== void 0) return d;
      let G = this._options.shouldCreateSpanForRequest(I);
      return this._createSpanUrlMap.set(I, G), G
    }
    __init4() {
      this._onRequestCreate = (I) => {
        if (!cm([g6.getClient, "call", (X) => X(), "optionalAccess", (X) => X.getIntegration, "call", (X) => X(nI)])) return;
        let {
          request: d
        } = I, G = d.origin ? d.origin.toString() + d.path : d.path, Z = g6.getClient();
        if (!Z) return;
        if (g6.isSentryRequestUrl(G, Z) || d.__sentry_span__ !== void 0) return;
        let C = Z.getOptions(),
          W = g6.getCurrentScope(),
          w = g6.getIsolationScope(),
          B = g6.getActiveSpan(),
          A = this._shouldCreateSpan(G) ? tt2(B, d, G) : void 0;
        if (A) d.__sentry_span__ = A;
        if (((X) => {
            if (C.tracePropagationTargets === void 0) return !0;
            let _ = this._headersUrlMap.get(X);
            if (_ !== void 0) return _;
            let F = SF.stringMatchesSomePattern(X, C.tracePropagationTargets);
            return this._headersUrlMap.set(X, F), F
          })(G)) {
          let {
            traceId: X,
            spanId: _,
            sampled: F,
            dsc: g
          } = {
            ...w.getPropagationContext(),
            ...W.getPropagationContext()
          }, J = A ? g6.spanToTraceHeader(A) : SF.generateSentryTraceHeader(X, _, F), K = SF.dynamicSamplingContextToSentryBaggageHeader(g || (A ? g6.getDynamicSamplingContextFromSpan(A) : g6.getDynamicSamplingContextFromClient(X, Z, W)));
          et2(d, J, K)
        }
      }
    }
    __init5() {
      this._onRequestEnd = (I) => {
        if (!cm([g6.getClient, "call", (W) => W(), "optionalAccess", (W) => W.getIntegration, "call", (W) => W(nI)])) return;
        let {
          request: d,
          response: G
        } = I, Z = d.origin ? d.origin.toString() + d.path : d.path;
        if (g6.isSentryRequestUrl(Z, g6.getClient())) return;
        let C = d.__sentry_span__;
        if (C) g6.setHttpStatus(C, G.statusCode), C.end();
        if (this._options.breadcrumbs) g6.addBreadcrumb({
          category: "http",
          data: {
            method: d.method,
            status_code: G.statusCode,
            url: Z
          },
          type: "http"
        }, {
          event: "response",
          request: d,
          response: G
        })
      }
    }
    __init6() {
      this._onRequestError = (I) => {
        if (!cm([g6.getClient, "call", (C) => C(), "optionalAccess", (C) => C.getIntegration, "call", (C) => C(nI)])) return;
        let {
          request: d
        } = I, G = d.origin ? d.origin.toString() + d.path : d.path;
        if (g6.isSentryRequestUrl(G, g6.getClient())) return;
        let Z = d.__sentry_span__;
        if (Z) Z.setStatus("internal_error"), Z.end();
        if (this._options.breadcrumbs) g6.addBreadcrumb({
          category: "http",
          data: {
            method: d.method,
            url: G
          },
          level: "error",
          type: "http"
        }, {
          event: "error",
          request: d
        })
      }
    }
  }
  nI.__initStatic();

  function et2(I, d, G) {
    let Z;
    if (Array.isArray(I.headers)) Z = I.headers.some((C) => C === "sentry-trace");
    else Z = I.headers.split(`\r
`).some((W) => W.startsWith("sentry-trace:"));
    if (Z) return;
    if (I.addHeader("sentry-trace", d), G) I.addHeader("baggage", G)
  }

  function tt2(I, d, G) {
    let Z = SF.parseUrl(G),
      C = d.method || "GET",
      W = {
        "http.method": C
      };
    if (Z.search) W["http.query"] = Z.search;
    if (Z.hash) W["http.fragment"] = Z.hash;
    return cm([I, "optionalAccess", (w) => w.startChild, "call", (w) => w({
      op: "http.client",
      origin: "auto.http.node.undici",
      description: `${C} ${SF.getSanitizedUrlString(Z)}`,
      data: W
    })])
  }
  xS1.Undici = nI;
  xS1.nativeNodeFetchintegration = ot2
})
// @from(Start 352576, End 353522)
L01 = Y((iS1) => {
  Object.defineProperty(iS1, "__esModule", {
    value: !0
  });
  var cS1 = B1("path"),
    G14 = V0();

  function pS1(I) {
    return I.replace(/^[A-Z]:/, "").replace(/\\/g, "/")
  }

  function Z14(I = process.argv[1] ? G14.dirname(process.argv[1]) : process.cwd(), d = cS1.sep === "\\") {
    let G = d ? pS1(I) : I;
    return (Z) => {
      if (!Z) return;
      let C = d ? pS1(Z) : Z,
        {
          dir: W,
          base: w,
          ext: B
        } = cS1.posix.parse(C);
      if (B === ".js" || B === ".mjs" || B === ".cjs") w = w.slice(0, B.length * -1);
      if (!W) W = ".";
      let A = W.lastIndexOf("/node_modules");
      if (A > -1) return `${W.slice(A+14).replace(/\//g,".")}:${w}`;
      if (W.startsWith(G)) {
        let V = W.slice(G.length + 1).replace(/\//g, ".");
        if (V) V += ":";
        return V += w, V
      }
      return w
    }
  }
  iS1.createGetModuleFromFilename = Z14
})
// @from(Start 353528, End 357572)
y01 = Y((oS1) => {
  var {
    _optionalChain: W14
  } = V0();
  Object.defineProperty(oS1, "__esModule", {
    value: !0
  });
  var aG = V4(),
    LF = V0(),
    w14 = OM1(),
    B14 = F01(),
    A14 = Sm(),
    V14 = Lm(),
    X14 = Pm(),
    Y14 = $m(),
    _14 = Om(),
    D14 = mm(),
    H14 = hm(),
    F14 = km(),
    g14 = xm(),
    J14 = pm(),
    K14 = L01(),
    N14 = K01(),
    nS1 = [aG.inboundFiltersIntegration(), aG.functionToStringIntegration(), aG.linkedErrorsIntegration(), aG.requestDataIntegration(), A14.consoleIntegration(), Y14.httpIntegration(), J14.nativeNodeFetchintegration(), H14.onUncaughtExceptionIntegration(), F14.onUnhandledRejectionIntegration(), X14.contextLinesIntegration(), _14.localVariablesIntegration(), V14.nodeContextIntegration(), D14.modulesIntegration()];

  function rS1(I) {
    let d = aG.getMainCarrier(),
      G = W14([d, "access", (Z) => Z.__SENTRY__, "optionalAccess", (Z) => Z.integrations]) || [];
    return [...nS1, ...G]
  }

  function z14(I = {}) {
    if (w14.setNodeAsyncContextStrategy(), I.defaultIntegrations === void 0) I.defaultIntegrations = rS1();
    if (I.dsn === void 0 && process.env.SENTRY_DSN) I.dsn = process.env.SENTRY_DSN;
    let d = process.env.SENTRY_TRACES_SAMPLE_RATE;
    if (I.tracesSampleRate === void 0 && d) {
      let Z = parseFloat(d);
      if (isFinite(Z)) I.tracesSampleRate = Z
    }
    if (I.release === void 0) {
      let Z = aS1();
      if (Z !== void 0) I.release = Z;
      else I.autoSessionTracking = !1
    }
    if (I.environment === void 0 && process.env.SENTRY_ENVIRONMENT) I.environment = process.env.SENTRY_ENVIRONMENT;
    if (I.autoSessionTracking === void 0 && I.dsn !== void 0) I.autoSessionTracking = !0;
    if (I.instrumenter === void 0) I.instrumenter = "sentry";
    let G = {
      ...I,
      stackParser: LF.stackParserFromStackParserOptions(I.stackParser || sS1),
      integrations: aG.getIntegrationsToSetup(I),
      transport: I.transport || N14.makeNodeTransport
    };
    if (aG.initAndBind(I.clientClass || B14.NodeClient, G), I.autoSessionTracking) f14();
    if (q14(), I.spotlight) {
      let Z = aG.getClient();
      if (Z && Z.addIntegration) {
        let C = Z.getOptions().integrations;
        for (let W of C) Z.addIntegration(W);
        Z.addIntegration(g14.spotlightIntegration({
          sidecarUrl: typeof I.spotlight === "string" ? I.spotlight : void 0
        }))
      }
    }
  }

  function Q14(I) {
    if (I === void 0) return !1;
    let d = I && I.getOptions();
    if (d && d.autoSessionTracking !== void 0) return d.autoSessionTracking;
    return !1
  }

  function aS1(I) {
    if (process.env.SENTRY_RELEASE) return process.env.SENTRY_RELEASE;
    if (LF.GLOBAL_OBJ.SENTRY_RELEASE && LF.GLOBAL_OBJ.SENTRY_RELEASE.id) return LF.GLOBAL_OBJ.SENTRY_RELEASE.id;
    return process.env.GITHUB_SHA || process.env.COMMIT_REF || process.env.VERCEL_GIT_COMMIT_SHA || process.env.VERCEL_GITHUB_COMMIT_SHA || process.env.VERCEL_GITLAB_COMMIT_SHA || process.env.VERCEL_BITBUCKET_COMMIT_SHA || process.env.ZEIT_GITHUB_COMMIT_SHA || process.env.ZEIT_GITLAB_COMMIT_SHA || process.env.ZEIT_BITBUCKET_COMMIT_SHA || process.env.CF_PAGES_COMMIT_SHA || I
  }
  var sS1 = LF.createStackParser(LF.nodeStackLineParser(K14.createGetModuleFromFilename()));

  function f14() {
    aG.startSession(), process.on("beforeExit", () => {
      let I = aG.getIsolationScope().getSession();
      if (I && !["exited", "crashed"].includes(I.status)) aG.endSession()
    })
  }

  function q14() {
    let I = (process.env.SENTRY_USE_ENVIRONMENT || "").toLowerCase();
    if (!["false", "n", "no", "off", "0"].includes(I)) {
      let d = process.env.SENTRY_TRACE,
        G = process.env.SENTRY_BAGGAGE,
        Z = LF.propagationContextFromHeaders(d, G);
      aG.getCurrentScope().setPropagationContext(Z)
    }
  }
  oS1.defaultIntegrations = nS1;
  oS1.defaultStackParser = sS1;
  oS1.getDefaultIntegrations = rS1;
  oS1.getSentryRelease = aS1;
  oS1.init = z14;
  oS1.isAutoSessionTrackingEnabled = Q14
})
// @from(Start 357578, End 358274)
tS1 = Y((eS1) => {
  Object.defineProperty(eS1, "__esModule", {
    value: !0
  });
  var im = B1("fs"),
    P01 = B1("path");

  function L14(I) {
    let d = P01.resolve(I);
    if (!im.existsSync(d)) throw new Error(`Cannot read contents of ${d}. Directory does not exist.`);
    if (!im.statSync(d).isDirectory()) throw new Error(`Cannot read contents of ${d}, because it is not a directory.`);
    let G = (Z) => {
      return im.readdirSync(Z).reduce((C, W) => {
        let w = P01.join(Z, W);
        if (im.statSync(w).isDirectory()) return C.concat(G(w));
        return C.push(w), C
      }, [])
    };
    return G(d).map((Z) => P01.relative(d, Z))
  }
  eS1.deepReadDirSync = L14
})
// @from(Start 358280, End 547448)
IL1 = Y((P14) => {
  /*! @sentry/node 7.120.0 (611282e) | https://github.com/getsentry/sentry-javascript */
  P14.base64WorkerScript = "aW1wb3J0IHsgU2Vzc2lvbiB9IGZyb20gJ2luc3BlY3Rvcic7CmltcG9ydCB7IHdvcmtlckRhdGEsIHBhcmVudFBvcnQgfSBmcm9tICd3b3JrZXJfdGhyZWFkcyc7CmltcG9ydCB7IHBvc2l4LCBzZXAgfSBmcm9tICdwYXRoJzsKaW1wb3J0ICogYXMgaHR0cCBmcm9tICdodHRwJzsKaW1wb3J0ICogYXMgaHR0cHMgZnJvbSAnaHR0cHMnOwppbXBvcnQgeyBSZWFkYWJsZSB9IGZyb20gJ3N0cmVhbSc7CmltcG9ydCB7IFVSTCB9IGZyb20gJ3VybCc7CmltcG9ydCB7IGNyZWF0ZUd6aXAgfSBmcm9tICd6bGliJzsKaW1wb3J0ICogYXMgbmV0IGZyb20gJ25ldCc7CmltcG9ydCAqIGFzIHRscyBmcm9tICd0bHMnOwoKLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC91bmJvdW5kLW1ldGhvZApjb25zdCBvYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7CgovKioKICogQ2hlY2tzIHdoZXRoZXIgZ2l2ZW4gdmFsdWUncyB0eXBlIGlzIG9uZSBvZiBhIGZldyBFcnJvciBvciBFcnJvci1saWtlCiAqIHtAbGluayBpc0Vycm9yfS4KICoKICogQHBhcmFtIHdhdCBBIHZhbHVlIHRvIGJlIGNoZWNrZWQuCiAqIEByZXR1cm5zIEEgYm9vbGVhbiByZXByZXNlbnRpbmcgdGhlIHJlc3VsdC4KICovCmZ1bmN0aW9uIGlzRXJyb3Iod2F0KSB7CiAgc3dpdGNoIChvYmplY3RUb1N0cmluZy5jYWxsKHdhdCkpIHsKICAgIGNhc2UgJ1tvYmplY3QgRXJyb3JdJzoKICAgIGNhc2UgJ1tvYmplY3QgRXhjZXB0aW9uXSc6CiAgICBjYXNlICdbb2JqZWN0IERPTUV4Y2VwdGlvbl0nOgogICAgICByZXR1cm4gdHJ1ZTsKICAgIGRlZmF1bHQ6CiAgICAgIHJldHVybiBpc0luc3RhbmNlT2Yod2F0LCBFcnJvcik7CiAgfQp9Ci8qKgogKiBDaGVja3Mgd2hldGhlciBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiB0aGUgZ2l2ZW4gYnVpbHQtaW4gY2xhc3MuCiAqCiAqIEBwYXJhbSB3YXQgVGhlIHZhbHVlIHRvIGJlIGNoZWNrZWQKICogQHBhcmFtIGNsYXNzTmFtZQogKiBAcmV0dXJucyBBIGJvb2xlYW4gcmVwcmVzZW50aW5nIHRoZSByZXN1bHQuCiAqLwpmdW5jdGlvbiBpc0J1aWx0aW4od2F0LCBjbGFzc05hbWUpIHsKICByZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbCh3YXQpID09PSBgW29iamVjdCAke2NsYXNzTmFtZX1dYDsKfQoKLyoqCiAqIENoZWNrcyB3aGV0aGVyIGdpdmVuIHZhbHVlJ3MgdHlwZSBpcyBhIHN0cmluZwogKiB7QGxpbmsgaXNTdHJpbmd9LgogKgogKiBAcGFyYW0gd2F0IEEgdmFsdWUgdG8gYmUgY2hlY2tlZC4KICogQHJldHVybnMgQSBib29sZWFuIHJlcHJlc2VudGluZyB0aGUgcmVzdWx0LgogKi8KZnVuY3Rpb24gaXNTdHJpbmcod2F0KSB7CiAgcmV0dXJuIGlzQnVpbHRpbih3YXQsICdTdHJpbmcnKTsKfQoKLyoqCiAqIENoZWNrcyB3aGV0aGVyIGdpdmVuIHZhbHVlJ3MgdHlwZSBpcyBhbiBvYmplY3QgbGl0ZXJhbCwgb3IgYSBjbGFzcyBpbnN0YW5jZS4KICoge0BsaW5rIGlzUGxhaW5PYmplY3R9LgogKgogKiBAcGFyYW0gd2F0IEEgdmFsdWUgdG8gYmUgY2hlY2tlZC4KICogQHJldHVybnMgQSBib29sZWFuIHJlcHJlc2VudGluZyB0aGUgcmVzdWx0LgogKi8KZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh3YXQpIHsKICByZXR1cm4gaXNCdWlsdGluKHdhdCwgJ09iamVjdCcpOwp9CgovKioKICogQ2hlY2tzIHdoZXRoZXIgZ2l2ZW4gdmFsdWUncyB0eXBlIGlzIGFuIEV2ZW50IGluc3RhbmNlCiAqIHtAbGluayBpc0V2ZW50fS4KICoKICogQHBhcmFtIHdhdCBBIHZhbHVlIHRvIGJlIGNoZWNrZWQuCiAqIEByZXR1cm5zIEEgYm9vbGVhbiByZXByZXNlbnRpbmcgdGhlIHJlc3VsdC4KICovCmZ1bmN0aW9uIGlzRXZlbnQod2F0KSB7CiAgcmV0dXJuIHR5cGVvZiBFdmVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNJbnN0YW5jZU9mKHdhdCwgRXZlbnQpOwp9CgovKioKICogQ2hlY2tzIHdoZXRoZXIgZ2l2ZW4gdmFsdWUncyB0eXBlIGlzIGFuIEVsZW1lbnQgaW5zdGFuY2UKICoge0BsaW5rIGlzRWxlbWVudH0uCiAqCiAqIEBwYXJhbSB3YXQgQSB2YWx1ZSB0byBiZSBjaGVja2VkLgogKiBAcmV0dXJucyBBIGJvb2xlYW4gcmVwcmVzZW50aW5nIHRoZSByZXN1bHQuCiAqLwpmdW5jdGlvbiBpc0VsZW1lbnQod2F0KSB7CiAgcmV0dXJuIHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc0luc3RhbmNlT2Yod2F0LCBFbGVtZW50KTsKfQoKLyoqCiAqIENoZWNrcyB3aGV0aGVyIGdpdmVuIHZhbHVlIGhhcyBhIHRoZW4gZnVuY3Rpb24uCiAqIEBwYXJhbSB3YXQgQSB2YWx1ZSB0byBiZSBjaGVja2VkLgogKi8KZnVuY3Rpb24gaXNUaGVuYWJsZSh3YXQpIHsKICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzCiAgcmV0dXJuIEJvb2xlYW4od2F0ICYmIHdhdC50aGVuICYmIHR5cGVvZiB3YXQudGhlbiA9PT0gJ2Z1bmN0aW9uJyk7Cn0KCi8qKgogKiBDaGVja3Mgd2hldGhlciBnaXZlbiB2YWx1ZSdzIHR5cGUgaXMgYSBTeW50aGV0aWNFdmVudAogKiB7QGxpbmsgaXNTeW50aGV0aWNFdmVudH0uCiAqCiAqIEBwYXJhbSB3YXQgQSB2YWx1ZSB0byBiZSBjaGVja2VkLgogKiBAcmV0dXJucyBBIGJvb2xlYW4gcmVwcmVzZW50aW5nIHRoZSByZXN1bHQuCiAqLwpmdW5jdGlvbiBpc1N5bnRoZXRpY0V2ZW50KHdhdCkgewogIHJldHVybiBpc1BsYWluT2JqZWN0KHdhdCkgJiYgJ25hdGl2ZUV2ZW50JyBpbiB3YXQgJiYgJ3ByZXZlbnREZWZhdWx0JyBpbiB3YXQgJiYgJ3N0b3BQcm9wYWdhdGlvbicgaW4gd2F0Owp9CgovKioKICogQ2hlY2tzIHdoZXRoZXIgZ2l2ZW4gdmFsdWUgaXMgTmFOCiAqIHtAbGluayBpc05hTn0uCiAqCiAqIEBwYXJhbSB3YXQgQSB2YWx1ZSB0byBiZSBjaGVja2VkLgogKiBAcmV0dXJucyBBIGJvb2xlYW4gcmVwcmVzZW50aW5nIHRoZSByZXN1bHQuCiAqLwpmdW5jdGlvbiBpc05hTiQxKHdhdCkgewogIHJldHVybiB0eXBlb2Ygd2F0ID09PSAnbnVtYmVyJyAmJiB3YXQgIT09IHdhdDsKfQoKLyoqCiAqIENoZWNrcyB3aGV0aGVyIGdpdmVuIHZhbHVlJ3MgdHlwZSBpcyBhbiBpbnN0YW5jZSBvZiBwcm92aWRlZCBjb25zdHJ1Y3Rvci4KICoge0BsaW5rIGlzSW5zdGFuY2VPZn0uCiAqCiAqIEBwYXJhbSB3YXQgQSB2YWx1ZSB0byBiZSBjaGVja2VkLgogKiBAcGFyYW0gYmFzZSBBIGNvbnN0cnVjdG9yIHRvIGJlIHVzZWQgaW4gYSBjaGVjay4KICogQHJldHVybnMgQSBib29sZWFuIHJlcHJlc2VudGluZyB0aGUgcmVzdWx0LgogKi8KZnVuY3Rpb24gaXNJbnN0YW5jZU9mKHdhdCwgYmFzZSkgewogIHRyeSB7CiAgICByZXR1cm4gd2F0IGluc3RhbmNlb2YgYmFzZTsKICB9IGNhdGNoIChfZSkgewogICAgcmV0dXJuIGZhbHNlOwogIH0KfQoKLyoqCiAqIENoZWNrcyB3aGV0aGVyIGdpdmVuIHZhbHVlJ3MgdHlwZSBpcyBhIFZ1ZSBWaWV3TW9kZWwuCiAqCiAqIEBwYXJhbSB3YXQgQSB2YWx1ZSB0byBiZSBjaGVja2VkLgogKiBAcmV0dXJucyBBIGJvb2xlYW4gcmVwcmVzZW50aW5nIHRoZSByZXN1bHQuCiAqLwpmdW5jdGlvbiBpc1Z1ZVZpZXdNb2RlbCh3YXQpIHsKICAvLyBOb3QgdXNpbmcgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyBiZWNhdXNlIGluIFZ1ZSAzIGl0IHdvdWxkIHJlYWQgdGhlIGluc3RhbmNlJ3MgU3ltYm9sKFN5bWJvbC50b1N0cmluZ1RhZykgcHJvcGVydHkuCiAgcmV0dXJuICEhKHR5cGVvZiB3YXQgPT09ICdvYmplY3QnICYmIHdhdCAhPT0gbnVsbCAmJiAoKHdhdCApLl9faXNWdWUgfHwgKHdhdCApLl9pc1Z1ZSkpOwp9CgovKiogSW50ZXJuYWwgZ2xvYmFsIHdpdGggY29tbW9uIHByb3BlcnRpZXMgYW5kIFNlbnRyeSBleHRlbnNpb25zICAqLwoKLy8gVGhlIGNvZGUgYmVsb3cgZm9yICdpc0dsb2JhbE9iaicgYW5kICdHTE9CQUxfT0JKJyB3YXMgY29waWVkIGZyb20gY29yZS1qcyBiZWZvcmUgbW9kaWZpY2F0aW9uCi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvMWI5NDRkZjU1MjgyY2RjOTljOTBkYjVmNDllYjBiNmVkYTJjYzBhMy9wYWNrYWdlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMKLy8gY29yZS1qcyBoYXMgdGhlIGZvbGxvd2luZyBsaWNlbmNlOgovLwovLyBDb3B5cmlnaHQgKGMpIDIwMTQtMjAyMiBEZW5pcyBQdXNoa2FyZXYKLy8KLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weQovLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSAiU29mdHdhcmUiKSwgdG8gZGVhbAovLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzCi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwKLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzCi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6Ci8vCi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluCi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLgovLwovLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgIkFTIElTIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUgovLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwKLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFCi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIKLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwKLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTgovLyBUSEUgU09GVFdBUkUuCgovKiogUmV0dXJucyAnb2JqJyBpZiBpdCdzIHRoZSBnbG9iYWwgb2JqZWN0LCBvdGhlcndpc2UgcmV0dXJucyB1bmRlZmluZWQgKi8KZnVuY3Rpb24gaXNHbG9iYWxPYmoob2JqKSB7CiAgcmV0dXJuIG9iaiAmJiBvYmouTWF0aCA9PSBNYXRoID8gb2JqIDogdW5kZWZpbmVkOwp9CgovKiogR2V0J3MgdGhlIGdsb2JhbCBvYmplY3QgZm9yIHRoZSBjdXJyZW50IEphdmFTY3JpcHQgcnVudGltZSAqLwpjb25zdCBHTE9CQUxfT0JKID0KICAodHlwZW9mIGdsb2JhbFRoaXMgPT0gJ29iamVjdCcgJiYgaXNHbG9iYWxPYmooZ2xvYmFsVGhpcykpIHx8CiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscwogICh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIGlzR2xvYmFsT2JqKHdpbmRvdykpIHx8CiAgKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIGlzR2xvYmFsT2JqKHNlbGYpKSB8fAogICh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGlzR2xvYmFsT2JqKGdsb2JhbCkpIHx8CiAgKGZ1bmN0aW9uICgpIHsKICAgIHJldHVybiB0aGlzOwogIH0pKCkgfHwKICB7fTsKCi8qKgogKiBAZGVwcmVjYXRlZCBVc2UgR0xPQkFMX09CSiBpbnN0ZWFkIG9yIFdJTkRPVyBmcm9tIEBzZW50cnkvYnJvd3Nlci4gVGhpcyB3aWxsIGJlIHJlbW92ZWQgaW4gdjgKICovCmZ1bmN0aW9uIGdldEdsb2JhbE9iamVjdCgpIHsKICByZXR1cm4gR0xPQkFMX09CSiA7Cn0KCi8qKgogKiBSZXR1cm5zIGEgZ2xvYmFsIHNpbmdsZXRvbiBjb250YWluZWQgaW4gdGhlIGdsb2JhbCBgX19TRU5UUllfX2Agb2JqZWN0LgogKgogKiBJZiB0aGUgc2luZ2xldG9uIGRvZXNuJ3QgYWxyZWFkeSBleGlzdCBpbiBgX19TRU5UUllfX2AsIGl0IHdpbGwgYmUgY3JlYXRlZCB1c2luZyB0aGUgZ2l2ZW4gZmFjdG9yeQogKiBmdW5jdGlvbiBhbmQgYWRkZWQgdG8gdGhlIGBfX1NFTlRSWV9fYCBvYmplY3QuCiAqCiAqIEBwYXJhbSBuYW1lIG5hbWUgb2YgdGhlIGdsb2JhbCBzaW5nbGV0b24gb24gX19TRU5UUllfXwogKiBAcGFyYW0gY3JlYXRvciBjcmVhdG9yIEZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBzaW5nbGV0b24gaWYgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0IG9uIGBfX1NFTlRSWV9fYAogKiBAcGFyYW0gb2JqIChPcHRpb25hbCkgVGhlIGdsb2JhbCBvYmplY3Qgb24gd2hpY2ggdG8gbG9vayBmb3IgYF9fU0VOVFJZX19gLCBpZiBub3QgYEdMT0JBTF9PQkpgJ3MgcmV0dXJuIHZhbHVlCiAqIEByZXR1cm5zIHRoZSBzaW5nbGV0b24KICovCmZ1bmN0aW9uIGdldEdsb2JhbFNpbmdsZXRvbihuYW1lLCBjcmVhdG9yLCBvYmopIHsKICBjb25zdCBnYmwgPSAob2JqIHx8IEdMT0JBTF9PQkopIDsKICBjb25zdCBfX1NFTlRSWV9fID0gKGdibC5fX1NFTlRSWV9fID0gZ2JsLl9fU0VOVFJZX18gfHwge30pOwogIGNvbnN0IHNpbmdsZXRvbiA9IF9fU0VOVFJZX19bbmFtZV0gfHwgKF9fU0VOVFJZX19bbmFtZV0gPSBjcmVhdG9yKCkpOwogIHJldHVybiBzaW5nbGV0b247Cn0KCi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgpjb25zdCBXSU5ET1cgPSBnZXRHbG9iYWxPYmplY3QoKTsKCmNvbnN0IERFRkFVTFRfTUFYX1NUUklOR19MRU5HVEggPSA4MDsKCi8qKgogKiBHaXZlbiBhIGNoaWxkIERPTSBlbGVtZW50LCByZXR1cm5zIGEgcXVlcnktc2VsZWN0b3Igc3RhdGVtZW50IGRlc2NyaWJpbmcgdGhhdAogKiBhbmQgaXRzIGFuY2VzdG9ycwogKiBlLmcuIFtIVE1MRWxlbWVudF0gPT4gYm9keSA+IGRpdiA+IGlucHV0I2Zvby5idG5bbmFtZT1iYXpdCiAqIEByZXR1cm5zIGdlbmVyYXRlZCBET00gcGF0aAogKi8KZnVuY3Rpb24gaHRtbFRyZWVBc1N0cmluZygKICBlbGVtLAogIG9wdGlvbnMgPSB7fSwKKSB7CiAgaWYgKCFlbGVtKSB7CiAgICByZXR1cm4gJzx1bmtub3duPic7CiAgfQoKICAvLyB0cnkvY2F0Y2ggYm90aDoKICAvLyAtIGFjY2Vzc2luZyBldmVudC50YXJnZXQgKHNlZSBnZXRzZW50cnkvcmF2ZW4tanMjODM4LCAjNzY4KQogIC8vIC0gYGh0bWxUcmVlQXNTdHJpbmdgIGJlY2F1c2UgaXQncyBjb21wbGV4LCBhbmQganVzdCBhY2Nlc3NpbmcgdGhlIERPTSBpbmNvcnJlY3RseQogIC8vIC0gY2FuIHRocm93IGFuIGV4Y2VwdGlvbiBpbiBzb21lIGNpcmN1bXN0YW5jZXMuCiAgdHJ5IHsKICAgIGxldCBjdXJyZW50RWxlbSA9IGVsZW0gOwogICAgY29uc3QgTUFYX1RSQVZFUlNFX0hFSUdIVCA9IDU7CiAgICBjb25zdCBvdXQgPSBbXTsKICAgIGxldCBoZWlnaHQgPSAwOwogICAgbGV0IGxlbiA9IDA7CiAgICBjb25zdCBzZXBhcmF0b3IgPSAnID4gJzsKICAgIGNvbnN0IHNlcExlbmd0aCA9IHNlcGFyYXRvci5sZW5ndGg7CiAgICBsZXQgbmV4dFN0cjsKICAgIGNvbnN0IGtleUF0dHJzID0gQXJyYXkuaXNBcnJheShvcHRpb25zKSA/IG9wdGlvbnMgOiBvcHRpb25zLmtleUF0dHJzOwogICAgY29uc3QgbWF4U3RyaW5nTGVuZ3RoID0gKCFBcnJheS5pc0FycmF5KG9wdGlvbnMpICYmIG9wdGlvbnMubWF4U3RyaW5nTGVuZ3RoKSB8fCBERUZBVUxUX01BWF9TVFJJTkdfTEVOR1RIOwoKICAgIHdoaWxlIChjdXJyZW50RWxlbSAmJiBoZWlnaHQrKyA8IE1BWF9UUkFWRVJTRV9IRUlHSFQpIHsKICAgICAgbmV4dFN0ciA9IF9odG1sRWxlbWVudEFzU3RyaW5nKGN1cnJlbnRFbGVtLCBrZXlBdHRycyk7CiAgICAgIC8vIGJhaWwgb3V0IGlmCiAgICAgIC8vIC0gbmV4dFN0ciBpcyB0aGUgJ2h0bWwnIGVsZW1lbnQKICAgICAgLy8gLSB0aGUgbGVuZ3RoIG9mIHRoZSBzdHJpbmcgdGhhdCB3b3VsZCBiZSBjcmVhdGVkIGV4Y2VlZHMgbWF4U3RyaW5nTGVuZ3RoCiAgICAgIC8vICAgKGlnbm9yZSB0aGlzIGxpbWl0IGlmIHdlIGFyZSBvbiB0aGUgZmlyc3QgaXRlcmF0aW9uKQogICAgICBpZiAobmV4dFN0ciA9PT0gJ2h0bWwnIHx8IChoZWlnaHQgPiAxICYmIGxlbiArIG91dC5sZW5ndGggKiBzZXBMZW5ndGggKyBuZXh0U3RyLmxlbmd0aCA+PSBtYXhTdHJpbmdMZW5ndGgpKSB7CiAgICAgICAgYnJlYWs7CiAgICAgIH0KCiAgICAgIG91dC5wdXNoKG5leHRTdHIpOwoKICAgICAgbGVuICs9IG5leHRTdHIubGVuZ3RoOwogICAgICBjdXJyZW50RWxlbSA9IGN1cnJlbnRFbGVtLnBhcmVudE5vZGU7CiAgICB9CgogICAgcmV0dXJuIG91dC5yZXZlcnNlKCkuam9pbihzZXBhcmF0b3IpOwogIH0gY2F0Y2ggKF9vTykgewogICAgcmV0dXJuICc8dW5rbm93bj4nOwogIH0KfQoKLyoqCiAqIFJldHVybnMgYSBzaW1wbGUsIHF1ZXJ5LXNlbGVjdG9yIHJlcHJlc2VudGF0aW9uIG9mIGEgRE9NIGVsZW1lbnQKICogZS5nLiBbSFRNTEVsZW1lbnRdID0+IGlucHV0I2Zvby5idG5bbmFtZT1iYXpdCiAqIEByZXR1cm5zIGdlbmVyYXRlZCBET00gcGF0aAogKi8KZnVuY3Rpb24gX2h0bWxFbGVtZW50QXNTdHJpbmcoZWwsIGtleUF0dHJzKSB7CiAgY29uc3QgZWxlbSA9IGVsCgo7CgogIGNvbnN0IG91dCA9IFtdOwogIGxldCBjbGFzc05hbWU7CiAgbGV0IGNsYXNzZXM7CiAgbGV0IGtleTsKICBsZXQgYXR0cjsKICBsZXQgaTsKCiAgaWYgKCFlbGVtIHx8ICFlbGVtLnRhZ05hbWUpIHsKICAgIHJldHVybiAnJzsKICB9CgogIC8vIEB0cy1leHBlY3QtZXJyb3IgV0lORE9XIGhhcyBIVE1MRWxlbWVudAogIGlmIChXSU5ET1cuSFRNTEVsZW1lbnQpIHsKICAgIC8vIElmIHVzaW5nIHRoZSBjb21wb25lbnQgbmFtZSBhbm5vdGF0aW9uIHBsdWdpbiwgdGhpcyB2YWx1ZSBtYXkgYmUgYXZhaWxhYmxlIG9uIHRoZSBET00gbm9kZQogICAgaWYgKGVsZW0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBlbGVtLmRhdGFzZXQgJiYgZWxlbS5kYXRhc2V0WydzZW50cnlDb21wb25lbnQnXSkgewogICAgICByZXR1cm4gZWxlbS5kYXRhc2V0WydzZW50cnlDb21wb25lbnQnXTsKICAgIH0KICB9CgogIG91dC5wdXNoKGVsZW0udGFnTmFtZS50b0xvd2VyQ2FzZSgpKTsKCiAgLy8gUGFpcnMgb2YgYXR0cmlidXRlIGtleXMgZGVmaW5lZCBpbiBgc2VyaWFsaXplQXR0cmlidXRlYCBhbmQgdGhlaXIgdmFsdWVzIG9uIGVsZW1lbnQuCiAgY29uc3Qga2V5QXR0clBhaXJzID0KICAgIGtleUF0dHJzICYmIGtleUF0dHJzLmxlbmd0aAogICAgICA/IGtleUF0dHJzLmZpbHRlcihrZXlBdHRyID0+IGVsZW0uZ2V0QXR0cmlidXRlKGtleUF0dHIpKS5tYXAoa2V5QXR0ciA9PiBba2V5QXR0ciwgZWxlbS5nZXRBdHRyaWJ1dGUoa2V5QXR0cildKQogICAgICA6IG51bGw7CgogIGlmIChrZXlBdHRyUGFpcnMgJiYga2V5QXR0clBhaXJzLmxlbmd0aCkgewogICAga2V5QXR0clBhaXJzLmZvckVhY2goa2V5QXR0clBhaXIgPT4gewogICAgICBvdXQucHVzaChgWyR7a2V5QXR0clBhaXJbMF19PSIke2tleUF0dHJQYWlyWzFdfSJdYCk7CiAgICB9KTsKICB9IGVsc2UgewogICAgaWYgKGVsZW0uaWQpIHsKICAgICAgb3V0LnB1c2goYCMke2VsZW0uaWR9YCk7CiAgICB9CgogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1jb25zdAogICAgY2xhc3NOYW1lID0gZWxlbS5jbGFzc05hbWU7CiAgICBpZiAoY2xhc3NOYW1lICYmIGlzU3RyaW5nKGNsYXNzTmFtZSkpIHsKICAgICAgY2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdCgvXHMrLyk7CiAgICAgIGZvciAoaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgb3V0LnB1c2goYC4ke2NsYXNzZXNbaV19YCk7CiAgICAgIH0KICAgIH0KICB9CiAgY29uc3QgYWxsb3dlZEF0dHJzID0gWydhcmlhLWxhYmVsJywgJ3R5cGUnLCAnbmFtZScsICd0aXRsZScsICdhbHQnXTsKICBmb3IgKGkgPSAwOyBpIDwgYWxsb3dlZEF0dHJzLmxlbmd0aDsgaSsrKSB7CiAgICBrZXkgPSBhbGxvd2VkQXR0cnNbaV07CiAgICBhdHRyID0gZWxlbS5nZXRBdHRyaWJ1dGUoa2V5KTsKICAgIGlmIChhdHRyKSB7CiAgICAgIG91dC5wdXNoKGBbJHtrZXl9PSIke2F0dHJ9Il1gKTsKICAgIH0KICB9CiAgcmV0dXJuIG91dC5qb2luKCcnKTsKfQoKLyoqCiAqIFRoaXMgc2VydmVzIGFzIGEgYnVpbGQgdGltZSBmbGFnIHRoYXQgd2lsbCBiZSB0cnVlIGJ5IGRlZmF1bHQsIGJ1dCBmYWxzZSBpbiBub24tZGVidWcgYnVpbGRzIG9yIGlmIHVzZXJzIHJlcGxhY2UgYF9fU0VOVFJZX0RFQlVHX19gIGluIHRoZWlyIGdlbmVyYXRlZCBjb2RlLgogKgogKiBBVFRFTlRJT046IFRoaXMgY29uc3RhbnQgbXVzdCBuZXZlciBjcm9zcyBwYWNrYWdlIGJvdW5kYXJpZXMgKGkuZS4gYmUgZXhwb3J0ZWQpIHRvIGd1YXJhbnRlZSB0aGF0IGl0IGNhbiBiZSB1c2VkIGZvciB0cmVlIHNoYWtpbmcuCiAqLwpjb25zdCBERUJVR19CVUlMRCQxID0gKHR5cGVvZiBfX1NFTlRSWV9ERUJVR19fID09PSAndW5kZWZpbmVkJyB8fCBfX1NFTlRSWV9ERUJVR19fKTsKCi8qKiBQcmVmaXggZm9yIGxvZ2dpbmcgc3RyaW5ncyAqLwpjb25zdCBQUkVGSVggPSAnU2VudHJ5IExvZ2dlciAnOwoKY29uc3QgQ09OU09MRV9MRVZFTFMgPSBbCiAgJ2RlYnVnJywKICAnaW5mbycsCiAgJ3dhcm4nLAogICdlcnJvcicsCiAgJ2xvZycsCiAgJ2Fzc2VydCcsCiAgJ3RyYWNlJywKXSA7CgovKiogVGhpcyBtYXkgYmUgbXV0YXRlZCBieSB0aGUgY29uc29sZSBpbnN0cnVtZW50YXRpb24uICovCmNvbnN0IG9yaWdpbmFsQ29uc29sZU1ldGhvZHMKCiA9IHt9OwoKLyoqIEpTRG9jICovCgovKioKICogVGVtcG9yYXJpbHkgZGlzYWJsZSBzZW50cnkgY29uc29sZSBpbnN0cnVtZW50YXRpb25zLgogKgogKiBAcGFyYW0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIHJ1biBhZ2FpbnN0IHRoZSBvcmlnaW5hbCBgY29uc29sZWAgbWVzc2FnZXMKICogQHJldHVybnMgVGhlIHJlc3VsdHMgb2YgdGhlIGNhbGxiYWNrCiAqLwpmdW5jdGlvbiBjb25zb2xlU2FuZGJveChjYWxsYmFjaykgewogIGlmICghKCdjb25zb2xlJyBpbiBHTE9CQUxfT0JKKSkgewogICAgcmV0dXJuIGNhbGxiYWNrKCk7CiAgfQoKICBjb25zdCBjb25zb2xlID0gR0xPQkFMX09CSi5jb25zb2xlIDsKICBjb25zdCB3cmFwcGVkRnVuY3MgPSB7fTsKCiAgY29uc3Qgd3JhcHBlZExldmVscyA9IE9iamVjdC5rZXlzKG9yaWdpbmFsQ29uc29sZU1ldGhvZHMpIDsKCiAgLy8gUmVzdG9yZSBhbGwgd3JhcHBlZCBjb25zb2xlIG1ldGhvZHMKICB3cmFwcGVkTGV2ZWxzLmZvckVhY2gobGV2ZWwgPT4gewogICAgY29uc3Qgb3JpZ2luYWxDb25zb2xlTWV0aG9kID0gb3JpZ2luYWxDb25zb2xlTWV0aG9kc1tsZXZlbF0gOwogICAgd3JhcHBlZEZ1bmNzW2xldmVsXSA9IGNvbnNvbGVbbGV2ZWxdIDsKICAgIGNvbnNvbGVbbGV2ZWxdID0gb3JpZ2luYWxDb25zb2xlTWV0aG9kOwogIH0pOwoKICB0cnkgewogICAgcmV0dXJuIGNhbGxiYWNrKCk7CiAgfSBmaW5hbGx5IHsKICAgIC8vIFJldmVydCByZXN0b3JhdGlvbiB0byB3cmFwcGVkIHN0YXRlCiAgICB3cmFwcGVkTGV2ZWxzLmZvckVhY2gobGV2ZWwgPT4gewogICAgICBjb25zb2xlW2xldmVsXSA9IHdyYXBwZWRGdW5jc1tsZXZlbF0gOwogICAgfSk7CiAgfQp9CgpmdW5jdGlvbiBtYWtlTG9nZ2VyKCkgewogIGxldCBlbmFibGVkID0gZmFsc2U7CiAgY29uc3QgbG9nZ2VyID0gewogICAgZW5hYmxlOiAoKSA9PiB7CiAgICAgIGVuYWJsZWQgPSB0cnVlOwogICAgfSwKICAgIGRpc2FibGU6ICgpID0+IHsKICAgICAgZW5hYmxlZCA9IGZhbHNlOwogICAgfSwKICAgIGlzRW5hYmxlZDogKCkgPT4gZW5hYmxlZCwKICB9OwoKICBpZiAoREVCVUdfQlVJTEQkMSkgewogICAgQ09OU09MRV9MRVZFTFMuZm9yRWFjaChuYW1lID0+IHsKICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkKICAgICAgbG9nZ2VyW25hbWVdID0gKC4uLmFyZ3MpID0+IHsKICAgICAgICBpZiAoZW5hYmxlZCkgewogICAgICAgICAgY29uc29sZVNhbmRib3goKCkgPT4gewogICAgICAgICAgICBHTE9CQUxfT0JKLmNvbnNvbGVbbmFtZV0oYCR7UFJFRklYfVske25hbWV9XTpgLCAuLi5hcmdzKTsKICAgICAgICAgIH0pOwogICAgICAgIH0KICAgICAgfTsKICAgIH0pOwogIH0gZWxzZSB7CiAgICBDT05TT0xFX0xFVkVMUy5mb3JFYWNoKG5hbWUgPT4gewogICAgICBsb2dnZXJbbmFtZV0gPSAoKSA9PiB1bmRlZmluZWQ7CiAgICB9KTsKICB9CgogIHJldHVybiBsb2dnZXIgOwp9Cgpjb25zdCBsb2dnZXIgPSBtYWtlTG9nZ2VyKCk7CgovKioKICogUmVuZGVycyB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRHNuLgogKgogKiBCeSBkZWZhdWx0LCB0aGlzIHdpbGwgcmVuZGVyIHRoZSBwdWJsaWMgcmVwcmVzZW50YXRpb24gd2l0aG91dCB0aGUgcGFzc3dvcmQKICogY29tcG9uZW50LiBUbyBnZXQgdGhlIGRlcHJlY2F0ZWQgcHJpdmF0ZSByZXByZXNlbnRhdGlvbiwgc2V0IGB3aXRoUGFzc3dvcmRgCiAqIHRvIHRydWUuCiAqCiAqIEBwYXJhbSB3aXRoUGFzc3dvcmQgV2hlbiBzZXQgdG8gdHJ1ZSwgdGhlIHBhc3N3b3JkIHdpbGwgYmUgaW5jbHVkZWQuCiAqLwpmdW5jdGlvbiBkc25Ub1N0cmluZyhkc24sIHdpdGhQYXNzd29yZCA9IGZhbHNlKSB7CiAgY29uc3QgeyBob3N0LCBwYXRoLCBwYXNzLCBwb3J0LCBwcm9qZWN0SWQsIHByb3RvY29sLCBwdWJsaWNLZXkgfSA9IGRzbjsKICByZXR1cm4gKAogICAgYCR7cHJvdG9jb2x9Oi8vJHtwdWJsaWNLZXl9JHt3aXRoUGFzc3dvcmQgJiYgcGFzcyA/IGA6JHtwYXNzfWAgOiAnJ31gICsKICAgIGBAJHtob3N0fSR7cG9ydCA/IGA6JHtwb3J0fWAgOiAnJ30vJHtwYXRoID8gYCR7cGF0aH0vYCA6IHBhdGh9JHtwcm9qZWN0SWR9YAogICk7Cn0KCi8qKiBBbiBlcnJvciBlbWl0dGVkIGJ5IFNlbnRyeSBTREtzIGFuZCByZWxhdGVkIHV0aWxpdGllcy4gKi8KY2xhc3MgU2VudHJ5RXJyb3IgZXh0ZW5kcyBFcnJvciB7CiAgLyoqIERpc3BsYXkgbmFtZSBvZiB0aGlzIGVycm9yIGluc3RhbmNlLiAqLwoKICAgY29uc3RydWN0b3IoIG1lc3NhZ2UsIGxvZ0xldmVsID0gJ3dhcm4nKSB7CiAgICBzdXBlcihtZXNzYWdlKTt0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlOwogICAgdGhpcy5uYW1lID0gbmV3LnRhcmdldC5wcm90b3R5cGUuY29uc3RydWN0b3IubmFtZTsKICAgIC8vIFRoaXMgc2V0cyB0aGUgcHJvdG90eXBlIHRvIGJlIGBFcnJvcmAsIG5vdCBgU2VudHJ5RXJyb3JgLiBJdCdzIHVuY2xlYXIgd2h5IHdlIGRvIHRoaXMsIGJ1dCBjb21tZW50aW5nIHRoaXMgbGluZQogICAgLy8gb3V0IGNhdXNlcyB2YXJpb3VzIChzZWVtaW5nbHkgdG90YWxseSB1bnJlbGF0ZWQpIHBsYXl3cmlnaHQgdGVzdHMgY29uc2lzdGVudGx5IHRpbWUgb3V0LiBGWUksIHRoaXMgbWFrZXMKICAgIC8vIGluc3RhbmNlcyBvZiBgU2VudHJ5RXJyb3JgIGZhaWwgYG9iaiBpbnN0YW5jZW9mIFNlbnRyeUVycm9yYCBjaGVja3MuCiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgbmV3LnRhcmdldC5wcm90b3R5cGUpOwogICAgdGhpcy5sb2dMZXZlbCA9IGxvZ0xldmVsOwogIH0KfQoKLyoqCiAqIEVuY29kZXMgZ2l2ZW4gb2JqZWN0IGludG8gdXJsLWZyaWVuZGx5IGZvcm1hdAogKgogKiBAcGFyYW0gb2JqZWN0IEFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIHNlcmlhbGl6YWJsZSB2YWx1ZXMKICogQHJldHVybnMgc3RyaW5nIEVuY29kZWQKICovCmZ1bmN0aW9uIHVybEVuY29kZShvYmplY3QpIHsKICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KQogICAgLm1hcChrZXkgPT4gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGtleSl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KG9iamVjdFtrZXldKX1gKQogICAgLmpvaW4oJyYnKTsKfQoKLyoqCiAqIFRyYW5zZm9ybXMgYW55IGBFcnJvcmAgb3IgYEV2ZW50YCBpbnRvIGEgcGxhaW4gb2JqZWN0IHdpdGggYWxsIG9mIHRoZWlyIGVudW1lcmFibGUgcHJvcGVydGllcywgYW5kIHNvbWUgb2YgdGhlaXIKICogbm9uLWVudW1lcmFibGUgcHJvcGVydGllcyBhdHRhY2hlZC4KICoKICogQHBhcmFtIHZhbHVlIEluaXRpYWwgc291cmNlIHRoYXQgd2UgaGF2ZSB0byB0cmFuc2Zvcm0gaW4gb3JkZXIgZm9yIGl0IHRvIGJlIHVzYWJsZSBieSB0aGUgc2VyaWFsaXplcgogKiBAcmV0dXJucyBBbiBFdmVudCBvciBFcnJvciB0dXJuZWQgaW50byBhbiBvYmplY3QgLSBvciB0aGUgdmFsdWUgYXJndXJtZW50IGl0c2VsZiwgd2hlbiB2YWx1ZSBpcyBuZWl0aGVyIGFuIEV2ZW50IG5vcgogKiAgYW4gRXJyb3IuCiAqLwpmdW5jdGlvbiBjb252ZXJ0VG9QbGFpbk9iamVjdCgKICB2YWx1ZSwKKQoKIHsKICBpZiAoaXNFcnJvcih2YWx1ZSkpIHsKICAgIHJldHVybiB7CiAgICAgIG1lc3NhZ2U6IHZhbHVlLm1lc3NhZ2UsCiAgICAgIG5hbWU6IHZhbHVlLm5hbWUsCiAgICAgIHN0YWNrOiB2YWx1ZS5zdGFjaywKICAgICAgLi4uZ2V0T3duUHJvcGVydGllcyh2YWx1ZSksCiAgICB9OwogIH0gZWxzZSBpZiAoaXNFdmVudCh2YWx1ZSkpIHsKICAgIGNvbnN0IG5ld09iagoKID0gewogICAgICB0eXBlOiB2YWx1ZS50eXBlLAogICAgICB0YXJnZXQ6IHNlcmlhbGl6ZUV2ZW50VGFyZ2V0KHZhbHVlLnRhcmdldCksCiAgICAgIGN1cnJlbnRUYXJnZXQ6IHNlcmlhbGl6ZUV2ZW50VGFyZ2V0KHZhbHVlLmN1cnJlbnRUYXJnZXQpLAogICAgICAuLi5nZXRPd25Qcm9wZXJ0aWVzKHZhbHVlKSwKICAgIH07CgogICAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNJbnN0YW5jZU9mKHZhbHVlLCBDdXN0b21FdmVudCkpIHsKICAgICAgbmV3T2JqLmRldGFpbCA9IHZhbHVlLmRldGFpbDsKICAgIH0KCiAgICByZXR1cm4gbmV3T2JqOwogIH0gZWxzZSB7CiAgICByZXR1cm4gdmFsdWU7CiAgfQp9CgovKiogQ3JlYXRlcyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdGFyZ2V0IG9mIGFuIGBFdmVudGAgb2JqZWN0ICovCmZ1bmN0aW9uIHNlcmlhbGl6ZUV2ZW50VGFyZ2V0KHRhcmdldCkgewogIHRyeSB7CiAgICByZXR1cm4gaXNFbGVtZW50KHRhcmdldCkgPyBodG1sVHJlZUFzU3RyaW5nKHRhcmdldCkgOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGFyZ2V0KTsKICB9IGNhdGNoIChfb08pIHsKICAgIHJldHVybiAnPHVua25vd24+JzsKICB9Cn0KCi8qKiBGaWx0ZXJzIG91dCBhbGwgYnV0IGFuIG9iamVjdCdzIG93biBwcm9wZXJ0aWVzICovCmZ1bmN0aW9uIGdldE93blByb3BlcnRpZXMob2JqKSB7CiAgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbCkgewogICAgY29uc3QgZXh0cmFjdGVkUHJvcHMgPSB7fTsKICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gb2JqKSB7CiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wZXJ0eSkpIHsKICAgICAgICBleHRyYWN0ZWRQcm9wc1twcm9wZXJ0eV0gPSAob2JqIClbcHJvcGVydHldOwogICAgICB9CiAgICB9CiAgICByZXR1cm4gZXh0cmFjdGVkUHJvcHM7CiAgfSBlbHNlIHsKICAgIHJldHVybiB7fTsKICB9Cn0KCi8qKgogKiBHaXZlbiBhbnkgb2JqZWN0LCByZXR1cm4gYSBuZXcgb2JqZWN0IGhhdmluZyByZW1vdmVkIGFsbCBmaWVsZHMgd2hvc2UgdmFsdWUgd2FzIGB1bmRlZmluZWRgLgogKiBXb3JrcyByZWN1cnNpdmVseSBvbiBvYmplY3RzIGFuZCBhcnJheXMuCiAqCiAqIEF0dGVudGlvbjogVGhpcyBmdW5jdGlvbiBrZWVwcyBjaXJjdWxhciByZWZlcmVuY2VzIGluIHRoZSByZXR1cm5lZCBvYmplY3QuCiAqLwpmdW5jdGlvbiBkcm9wVW5kZWZpbmVkS2V5cyhpbnB1dFZhbHVlKSB7CiAgLy8gVGhpcyBtYXAga2VlcHMgdHJhY2sgb2Ygd2hhdCBhbHJlYWR5IHZpc2l0ZWQgbm9kZXMgbWFwIHRvLgogIC8vIE91ciBTZXQgLSBiYXNlZCBtZW1vQnVpbGRlciBkb2Vzbid0IHdvcmsgaGVyZSBiZWNhdXNlIHdlIHdhbnQgdG8gdGhlIG91dHB1dCBvYmplY3QgdG8gaGF2ZSB0aGUgc2FtZSBjaXJjdWxhcgogIC8vIHJlZmVyZW5jZXMgYXMgdGhlIGlucHV0IG9iamVjdC4KICBjb25zdCBtZW1vaXphdGlvbk1hcCA9IG5ldyBNYXAoKTsKCiAgLy8gVGhpcyBmdW5jdGlvbiBqdXN0IHByb3hpZXMgYF9kcm9wVW5kZWZpbmVkS2V5c2AgdG8ga2VlcCB0aGUgYG1lbW9CdWlsZGVyYCBvdXQgb2YgdGhpcyBmdW5jdGlvbidzIEFQSQogIHJldHVybiBfZHJvcFVuZGVmaW5lZEtleXMoaW5wdXRWYWx1ZSwgbWVtb2l6YXRpb25NYXApOwp9CgpmdW5jdGlvbiBfZHJvcFVuZGVmaW5lZEtleXMoaW5wdXRWYWx1ZSwgbWVtb2l6YXRpb25NYXApIHsKICBpZiAoaXNQb2pvKGlucHV0VmFsdWUpKSB7CiAgICAvLyBJZiB0aGlzIG5vZGUgaGFzIGFscmVhZHkgYmVlbiB2aXNpdGVkIGR1ZSB0byBhIGNpcmN1bGFyIHJlZmVyZW5jZSwgcmV0dXJuIHRoZSBvYmplY3QgaXQgd2FzIG1hcHBlZCB0byBpbiB0aGUgbmV3IG9iamVjdAogICAgY29uc3QgbWVtb1ZhbCA9IG1lbW9pemF0aW9uTWFwLmdldChpbnB1dFZhbHVlKTsKICAgIGlmIChtZW1vVmFsICE9PSB1bmRlZmluZWQpIHsKICAgICAgcmV0dXJuIG1lbW9WYWwgOwogICAgfQoKICAgIGNvbnN0IHJldHVyblZhbHVlID0ge307CiAgICAvLyBTdG9yZSB0aGUgbWFwcGluZyBvZiB0aGlzIHZhbHVlIGluIGNhc2Ugd2UgdmlzaXQgaXQgYWdhaW4sIGluIGNhc2Ugb2YgY2lyY3VsYXIgZGF0YQogICAgbWVtb2l6YXRpb25NYXAuc2V0KGlucHV0VmFsdWUsIHJldHVyblZhbHVlKTsKCiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhpbnB1dFZhbHVlKSkgewogICAgICBpZiAodHlwZW9mIGlucHV0VmFsdWVba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHsKICAgICAgICByZXR1cm5WYWx1ZVtrZXldID0gX2Ryb3BVbmRlZmluZWRLZXlzKGlucHV0VmFsdWVba2V5XSwgbWVtb2l6YXRpb25NYXApOwogICAgICB9CiAgICB9CgogICAgcmV0dXJuIHJldHVyblZhbHVlIDsKICB9CgogIGlmIChBcnJheS5pc0FycmF5KGlucHV0VmFsdWUpKSB7CiAgICAvLyBJZiB0aGlzIG5vZGUgaGFzIGFscmVhZHkgYmVlbiB2aXNpdGVkIGR1ZSB0byBhIGNpcmN1bGFyIHJlZmVyZW5jZSwgcmV0dXJuIHRoZSBhcnJheSBpdCB3YXMgbWFwcGVkIHRvIGluIHRoZSBuZXcgb2JqZWN0CiAgICBjb25zdCBtZW1vVmFsID0gbWVtb2l6YXRpb25NYXAuZ2V0KGlucHV0VmFsdWUpOwogICAgaWYgKG1lbW9WYWwgIT09IHVuZGVmaW5lZCkgewogICAgICByZXR1cm4gbWVtb1ZhbCA7CiAgICB9CgogICAgY29uc3QgcmV0dXJuVmFsdWUgPSBbXTsKICAgIC8vIFN0b3JlIHRoZSBtYXBwaW5nIG9mIHRoaXMgdmFsdWUgaW4gY2FzZSB3ZSB2aXNpdCBpdCBhZ2FpbiwgaW4gY2FzZSBvZiBjaXJjdWxhciBkYXRhCiAgICBtZW1vaXphdGlvbk1hcC5zZXQoaW5wdXRWYWx1ZSwgcmV0dXJuVmFsdWUpOwoKICAgIGlucHV0VmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gewogICAgICByZXR1cm5WYWx1ZS5wdXNoKF9kcm9wVW5kZWZpbmVkS2V5cyhpdGVtLCBtZW1vaXphdGlvbk1hcCkpOwogICAgfSk7CgogICAgcmV0dXJuIHJldHVyblZhbHVlIDsKICB9CgogIHJldHVybiBpbnB1dFZhbHVlOwp9CgpmdW5jdGlvbiBpc1Bvam8oaW5wdXQpIHsKICBpZiAoIWlzUGxhaW5PYmplY3QoaW5wdXQpKSB7CiAgICByZXR1cm4gZmFsc2U7CiAgfQoKICB0cnkgewogICAgY29uc3QgbmFtZSA9IChPYmplY3QuZ2V0UHJvdG90eXBlT2YoaW5wdXQpICkuY29uc3RydWN0b3IubmFtZTsKICAgIHJldHVybiAhbmFtZSB8fCBuYW1lID09PSAnT2JqZWN0JzsKICB9IGNhdGNoIChlKSB7CiAgICByZXR1cm4gdHJ1ZTsKICB9Cn0KCi8qKgogKiBEb2VzIHRoaXMgZmlsZW5hbWUgbG9vayBsaWtlIGl0J3MgcGFydCBvZiB0aGUgYXBwIGNvZGU/CiAqLwpmdW5jdGlvbiBmaWxlbmFtZUlzSW5BcHAoZmlsZW5hbWUsIGlzTmF0aXZlID0gZmFsc2UpIHsKICBjb25zdCBpc0ludGVybmFsID0KICAgIGlzTmF0aXZlIHx8CiAgICAoZmlsZW5hbWUgJiYKICAgICAgLy8gSXQncyBub3QgaW50ZXJuYWwgaWYgaXQncyBhbiBhYnNvbHV0ZSBsaW51eCBwYXRoCiAgICAgICFmaWxlbmFtZS5zdGFydHNXaXRoKCcvJykgJiYKICAgICAgLy8gSXQncyBub3QgaW50ZXJuYWwgaWYgaXQncyBhbiBhYnNvbHV0ZSB3aW5kb3dzIHBhdGgKICAgICAgIWZpbGVuYW1lLm1hdGNoKC9eW0EtWl06LykgJiYKICAgICAgLy8gSXQncyBub3QgaW50ZXJuYWwgaWYgdGhlIHBhdGggaXMgc3RhcnRpbmcgd2l0aCBhIGRvdAogICAgICAhZmlsZW5hbWUuc3RhcnRzV2l0aCgnLicpICYmCiAgICAgIC8vIEl0J3Mgbm90IGludGVybmFsIGlmIHRoZSBmcmFtZSBoYXMgYSBwcm90b2NvbC4gSW4gbm9kZSwgdGhpcyBpcyB1c3VhbGx5IHRoZSBjYXNlIGlmIHRoZSBmaWxlIGdvdCBwcmUtcHJvY2Vzc2VkIHdpdGggYSBidW5kbGVyIGxpa2Ugd2VicGFjawogICAgICAhZmlsZW5hbWUubWF0Y2goL15bYS16QS1aXShbYS16QS1aMC05LlwtK10pKjpcL1wvLykpOyAvLyBTY2hlbWEgZnJvbTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM2NDE3ODIKCiAgLy8gaW5fYXBwIGlzIGFsbCB0aGF0J3Mgbm90IGFuIGludGVybmFsIE5vZGUgZnVuY3Rpb24gb3IgYSBtb2R1bGUgd2l0aGluIG5vZGVfbW9kdWxlcwogIC8vIG5vdGUgdGhhdCBpc05hdGl2ZSBhcHBlYXJzIHRvIHJldHVybiB0cnVlIGV2ZW4gZm9yIG5vZGUgY29yZSBsaWJyYXJpZXMKICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2dldHNlbnRyeS9yYXZlbi1ub2RlL2lzc3Vlcy8xNzYKCiAgcmV0dXJuICFpc0ludGVybmFsICYmIGZpbGVuYW1lICE9PSB1bmRlZmluZWQgJiYgIWZpbGVuYW1lLmluY2x1ZGVzKCdub2RlX21vZHVsZXMvJyk7Cn0KCmNvbnN0IFNUQUNLVFJBQ0VfRlJBTUVfTElNSVQgPSA1MDsKY29uc3QgU1RSSVBfRlJBTUVfUkVHRVhQID0gL2NhcHR1cmVNZXNzYWdlfGNhcHR1cmVFeGNlcHRpb24vOwoKLyoqCiAqIFJlbW92ZXMgU2VudHJ5IGZyYW1lcyBmcm9tIHRoZSB0b3AgYW5kIGJvdHRvbSBvZiB0aGUgc3RhY2sgaWYgcHJlc2VudCBhbmQgZW5mb3JjZXMgYSBsaW1pdCBvZiBtYXggbnVtYmVyIG9mIGZyYW1lcy4KICogQXNzdW1lcyBzdGFjayBpbnB1dCBpcyBvcmRlcmVkIGZyb20gdG9wIHRvIGJvdHRvbSBhbmQgcmV0dXJucyB0aGUgcmV2ZXJzZSByZXByZXNlbnRhdGlvbiBzbyBjYWxsIHNpdGUgb2YgdGhlCiAqIGZ1bmN0aW9uIHRoYXQgY2F1c2VkIHRoZSBjcmFzaCBpcyB0aGUgbGFzdCBmcmFtZSBpbiB0aGUgYXJyYXkuCiAqIEBoaWRkZW4KICovCmZ1bmN0aW9uIHN0cmlwU2VudHJ5RnJhbWVzQW5kUmV2ZXJzZShzdGFjaykgewogIGlmICghc3RhY2subGVuZ3RoKSB7CiAgICByZXR1cm4gW107CiAgfQoKICBjb25zdCBsb2NhbFN0YWNrID0gQXJyYXkuZnJvbShzdGFjayk7CgogIC8vIElmIHN0YWNrIHN0YXJ0cyB3aXRoIG9uZSBvZiBvdXIgQVBJIGNhbGxzLCByZW1vdmUgaXQgKHN0YXJ0cywgbWVhbmluZyBpdCdzIHRoZSB0b3Agb2YgdGhlIHN0YWNrIC0gYWthIGxhc3QgY2FsbCkKICBpZiAoL3NlbnRyeVdyYXBwZWQvLnRlc3QobG9jYWxTdGFja1tsb2NhbFN0YWNrLmxlbmd0aCAtIDFdLmZ1bmN0aW9uIHx8ICcnKSkgewogICAgbG9jYWxTdGFjay5wb3AoKTsKICB9CgogIC8vIFJldmVyc2luZyBpbiB0aGUgbWlkZGxlIG9mIHRoZSBwcm9jZWR1cmUgYWxsb3dzIHVzIHRvIGp1c3QgcG9wIHRoZSB2YWx1ZXMgb2ZmIHRoZSBzdGFjawogIGxvY2FsU3RhY2sucmV2ZXJzZSgpOwoKICAvLyBJZiBzdGFjayBlbmRzIHdpdGggb25lIG9mIG91ciBpbnRlcm5hbCBBUEkgY2FsbHMsIHJlbW92ZSBpdCAoZW5kcywgbWVhbmluZyBpdCdzIHRoZSBib3R0b20gb2YgdGhlIHN0YWNrIC0gYWthIHRvcC1tb3N0IGNhbGwpCiAgaWYgKFNUUklQX0ZSQU1FX1JFR0VYUC50ZXN0KGxvY2FsU3RhY2tbbG9jYWxTdGFjay5sZW5ndGggLSAxXS5mdW5jdGlvbiB8fCAnJykpIHsKICAgIGxvY2FsU3RhY2sucG9wKCk7CgogICAgLy8gV2hlbiB1c2luZyBzeW50aGV0aWMgZXZlbnRzLCB3ZSB3aWxsIGhhdmUgYSAyIGxldmVscyBkZWVwIHN0YWNrLCBhcyBgbmV3IEVycm9yKCdTZW50cnkgc3ludGhldGljRXhjZXB0aW9uJylgCiAgICAvLyBpcyBwcm9kdWNlZCB3aXRoaW4gdGhlIGh1YiBpdHNlbGYsIG1ha2luZyBpdDoKICAgIC8vCiAgICAvLyAgIFNlbnRyeS5jYXB0dXJlRXhjZXB0aW9uKCkKICAgIC8vICAgZ2V0Q3VycmVudEh1YigpLmNhcHR1cmVFeGNlcHRpb24oKQogICAgLy8KICAgIC8vIGluc3RlYWQgb2YganVzdCB0aGUgdG9wIGBTZW50cnlgIGNhbGwgaXRzZWxmLgogICAgLy8gVGhpcyBmb3JjZXMgdXMgdG8gcG9zc2libHkgc3RyaXAgYW4gYWRkaXRpb25hbCBmcmFtZSBpbiB0aGUgZXhhY3Qgc2FtZSB3YXMgYXMgYWJvdmUuCiAgICBpZiAoU1RSSVBfRlJBTUVfUkVHRVhQLnRlc3QobG9jYWxTdGFja1tsb2NhbFN0YWNrLmxlbmd0aCAtIDFdLmZ1bmN0aW9uIHx8ICcnKSkgewogICAgICBsb2NhbFN0YWNrLnBvcCgpOwogICAgfQogIH0KCiAgcmV0dXJuIGxvY2FsU3RhY2suc2xpY2UoMCwgU1RBQ0tUUkFDRV9GUkFNRV9MSU1JVCkubWFwKGZyYW1lID0+ICh7CiAgICAuLi5mcmFtZSwKICAgIGZpbGVuYW1lOiBmcmFtZS5maWxlbmFtZSB8fCBsb2NhbFN0YWNrW2xvY2FsU3RhY2subGVuZ3RoIC0gMV0uZmlsZW5hbWUsCiAgICBmdW5jdGlvbjogZnJhbWUuZnVuY3Rpb24gfHwgJz8nLAogIH0pKTsKfQoKY29uc3QgZGVmYXVsdEZ1bmN0aW9uTmFtZSA9ICc8YW5vbnltb3VzPic7CgovKioKICogU2FmZWx5IGV4dHJhY3QgZnVuY3Rpb24gbmFtZSBmcm9tIGl0c2VsZgogKi8KZnVuY3Rpb24gZ2V0RnVuY3Rpb25OYW1lKGZuKSB7CiAgdHJ5IHsKICAgIGlmICghZm4gfHwgdHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7CiAgICAgIHJldHVybiBkZWZhdWx0RnVuY3Rpb25OYW1lOwogICAgfQogICAgcmV0dXJuIGZuLm5hbWUgfHwgZGVmYXVsdEZ1bmN0aW9uTmFtZTsKICB9IGNhdGNoIChlKSB7CiAgICAvLyBKdXN0IGFjY2Vzc2luZyBjdXN0b20gcHJvcHMgaW4gc29tZSBTZWxlbml1bSBlbnZpcm9ubWVudHMKICAgIC8vIGNhbiBjYXVzZSBhICJQZXJtaXNzaW9uIGRlbmllZCIgZXhjZXB0aW9uIChzZWUgcmF2ZW4tanMjNDk1KS4KICAgIHJldHVybiBkZWZhdWx0RnVuY3Rpb25OYW1lOwogIH0KfQoKLyoqCiAqIFVVSUQ0IGdlbmVyYXRvcgogKgogKiBAcmV0dXJucyBzdHJpbmcgR2VuZXJhdGVkIFVVSUQ0LgogKi8KZnVuY3Rpb24gdXVpZDQoKSB7CiAgY29uc3QgZ2JsID0gR0xPQkFMX09CSiA7CiAgY29uc3QgY3J5cHRvID0gZ2JsLmNyeXB0byB8fCBnYmwubXNDcnlwdG87CgogIGxldCBnZXRSYW5kb21CeXRlID0gKCkgPT4gTWF0aC5yYW5kb20oKSAqIDE2OwogIHRyeSB7CiAgICBpZiAoY3J5cHRvICYmIGNyeXB0by5yYW5kb21VVUlEKSB7CiAgICAgIHJldHVybiBjcnlwdG8ucmFuZG9tVVVJRCgpLnJlcGxhY2UoLy0vZywgJycpOwogICAgfQogICAgaWYgKGNyeXB0byAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7CiAgICAgIGdldFJhbmRvbUJ5dGUgPSAoKSA9PiB7CiAgICAgICAgLy8gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyBtaWdodCByZXR1cm4gdW5kZWZpbmVkIGluc3RlYWQgb2YgdGhlIHR5cGVkIGFycmF5CiAgICAgICAgLy8gaW4gb2xkIENocm9taXVtIHZlcnNpb25zIChlLmcuIDIzLjAuMTIzNS4wICgxNTE0MjIpKQogICAgICAgIC8vIEhvd2V2ZXIsIGB0eXBlZEFycmF5YCBpcyBzdGlsbCBmaWxsZWQgaW4tcGxhY2UuCiAgICAgICAgLy8gQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ3J5cHRvL2dldFJhbmRvbVZhbHVlcyN0eXBlZGFycmF5CiAgICAgICAgY29uc3QgdHlwZWRBcnJheSA9IG5ldyBVaW50OEFycmF5KDEpOwogICAgICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXModHlwZWRBcnJheSk7CiAgICAgICAgcmV0dXJuIHR5cGVkQXJyYXlbMF07CiAgICAgIH07CiAgICB9CiAgfSBjYXRjaCAoXykgewogICAgLy8gc29tZSBydW50aW1lcyBjYW4gY3Jhc2ggaW52b2tpbmcgY3J5cHRvCiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2V0c2VudHJ5L3NlbnRyeS1qYXZhc2NyaXB0L2lzc3Vlcy84OTM1CiAgfQoKICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwNTAzNC9ob3ctdG8tY3JlYXRlLWEtZ3VpZC11dWlkLWluLWphdmFzY3JpcHQvMjExNzUyMyMyMTE3NTIzCiAgLy8gQ29uY2F0ZW5hdGluZyB0aGUgZm9sbG93aW5nIG51bWJlcnMgYXMgc3RyaW5ncyByZXN1bHRzIGluICcxMDAwMDAwMDEwMDA0MDAwODAwMDEwMDAwMDAwMDAwMCcKICByZXR1cm4gKChbMWU3XSApICsgMWUzICsgNGUzICsgOGUzICsgMWUxMSkucmVwbGFjZSgvWzAxOF0vZywgYyA9PgogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2UKICAgICgoYyApIF4gKChnZXRSYW5kb21CeXRlKCkgJiAxNSkgPj4gKChjICkgLyA0KSkpLnRvU3RyaW5nKDE2KSwKICApOwp9CgovKioKICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGlucHV0IGlzIGFscmVhZHkgYW4gYXJyYXksIGFuZCBpZiBpdCBpc24ndCwgd3JhcHMgaXQgaW4gb25lLgogKgogKiBAcGFyYW0gbWF5YmVBcnJheSBJbnB1dCB0byB0dXJuIGludG8gYW4gYXJyYXksIGlmIG5lY2Vzc2FyeQogKiBAcmV0dXJucyBUaGUgaW5wdXQsIGlmIGFscmVhZHkgYW4gYXJyYXksIG9yIGFuIGFycmF5IHdpdGggdGhlIGlucHV0IGFzIHRoZSBvbmx5IGVsZW1lbnQsIGlmIG5vdAogKi8KZnVuY3Rpb24gYXJyYXlpZnkobWF5YmVBcnJheSkgewogIHJldHVybiBBcnJheS5pc0FycmF5KG1heWJlQXJyYXkpID8gbWF5YmVBcnJheSA6IFttYXliZUFycmF5XTsKfQoKLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzICovCi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi8KCi8qKgogKiBIZWxwZXIgdG8gZGVjeWNsZSBqc29uIG9iamVjdHMKICovCmZ1bmN0aW9uIG1lbW9CdWlsZGVyKCkgewogIGNvbnN0IGhhc1dlYWtTZXQgPSB0eXBlb2YgV2Vha1NldCA9PT0gJ2Z1bmN0aW9uJzsKICBjb25zdCBpbm5lciA9IGhhc1dlYWtTZXQgPyBuZXcgV2Vha1NldCgpIDogW107CiAgZnVuY3Rpb24gbWVtb2l6ZShvYmopIHsKICAgIGlmIChoYXNXZWFrU2V0KSB7CiAgICAgIGlmIChpbm5lci5oYXMob2JqKSkgewogICAgICAgIHJldHVybiB0cnVlOwogICAgICB9CiAgICAgIGlubmVyLmFkZChvYmopOwogICAgICByZXR1cm4gZmFsc2U7CiAgICB9CiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1mb3Itb2YKICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5uZXIubGVuZ3RoOyBpKyspIHsKICAgICAgY29uc3QgdmFsdWUgPSBpbm5lcltpXTsKICAgICAgaWYgKHZhbHVlID09PSBvYmopIHsKICAgICAgICByZXR1cm4gdHJ1ZTsKICAgICAgfQogICAgfQogICAgaW5uZXIucHVzaChvYmopOwogICAgcmV0dXJuIGZhbHNlOwogIH0KCiAgZnVuY3Rpb24gdW5tZW1vaXplKG9iaikgewogICAgaWYgKGhhc1dlYWtTZXQpIHsKICAgICAgaW5uZXIuZGVsZXRlKG9iaik7CiAgICB9IGVsc2UgewogICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlubmVyLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgaWYgKGlubmVyW2ldID09PSBvYmopIHsKICAgICAgICAgIGlubmVyLnNwbGljZShpLCAxKTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIH0KICAgICAgfQogICAgfQogIH0KICByZXR1cm4gW21lbW9pemUsIHVubWVtb2l6ZV07Cn0KCi8qKgogKiBSZWN1cnNpdmVseSBub3JtYWxpemVzIHRoZSBnaXZlbiBvYmplY3QuCiAqCiAqIC0gQ3JlYXRlcyBhIGNvcHkgdG8gcHJldmVudCBvcmlnaW5hbCBpbnB1dCBtdXRhdGlvbgogKiAtIFNraXBzIG5vbi1lbnVtZXJhYmxlIHByb3BlcnRpZXMKICogLSBXaGVuIHN0cmluZ2lmeWluZywgY2FsbHMgYHRvSlNPTmAgaWYgaW1wbGVtZW50ZWQKICogLSBSZW1vdmVzIGNpcmN1bGFyIHJlZmVyZW5jZXMKICogLSBUcmFuc2xhdGVzIG5vbi1zZXJpYWxpemFibGUgdmFsdWVzIChgdW5kZWZpbmVkYC9gTmFOYC9mdW5jdGlvbnMpIHRvIHNlcmlhbGl6YWJsZSBmb3JtYXQKICogLSBUcmFuc2xhdGVzIGtub3duIGdsb2JhbCBvYmplY3RzL2NsYXNzZXMgdG8gYSBzdHJpbmcgcmVwcmVzZW50YXRpb25zCiAqIC0gVGFrZXMgY2FyZSBvZiBgRXJyb3JgIG9iamVjdCBzZXJpYWxpemF0aW9uCiAqIC0gT3B0aW9uYWxseSBsaW1pdHMgZGVwdGggb2YgZmluYWwgb3V0cHV0CiAqIC0gT3B0aW9uYWxseSBsaW1pdHMgbnVtYmVyIG9mIHByb3BlcnRpZXMvZWxlbWVudHMgaW5jbHVkZWQgaW4gYW55IHNpbmdsZSBvYmplY3QvYXJyYXkKICoKICogQHBhcmFtIGlucHV0IFRoZSBvYmplY3QgdG8gYmUgbm9ybWFsaXplZC4KICogQHBhcmFtIGRlcHRoIFRoZSBtYXggZGVwdGggdG8gd2hpY2ggdG8gbm9ybWFsaXplIHRoZSBvYmplY3QuIChBbnl0aGluZyBkZWVwZXIgc3RyaW5naWZpZWQgd2hvbGUuKQogKiBAcGFyYW0gbWF4UHJvcGVydGllcyBUaGUgbWF4IG51bWJlciBvZiBlbGVtZW50cyBvciBwcm9wZXJ0aWVzIHRvIGJlIGluY2x1ZGVkIGluIGFueSBzaW5nbGUgYXJyYXkgb3IKICogb2JqZWN0IGluIHRoZSBub3JtYWxsaXplZCBvdXRwdXQuCiAqIEByZXR1cm5zIEEgbm9ybWFsaXplZCB2ZXJzaW9uIG9mIHRoZSBvYmplY3QsIG9yIGAiKipub24tc2VyaWFsaXphYmxlKioiYCBpZiBhbnkgZXJyb3JzIGFyZSB0aHJvd24gZHVyaW5nIG5vcm1hbGl6YXRpb24uCiAqLwovLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueQpmdW5jdGlvbiBub3JtYWxpemUoaW5wdXQsIGRlcHRoID0gMTAwLCBtYXhQcm9wZXJ0aWVzID0gK0luZmluaXR5KSB7CiAgdHJ5IHsKICAgIC8vIHNpbmNlIHdlJ3JlIGF0IHRoZSBvdXRlcm1vc3QgbGV2ZWwsIHdlIGRvbid0IHByb3ZpZGUgYSBrZXkKICAgIHJldHVybiB2aXNpdCgnJywgaW5wdXQsIGRlcHRoLCBtYXhQcm9wZXJ0aWVzKTsKICB9IGNhdGNoIChlcnIpIHsKICAgIHJldHVybiB7IEVSUk9SOiBgKipub24tc2VyaWFsaXphYmxlKiogKCR7ZXJyfSlgIH07CiAgfQp9CgovKioKICogVmlzaXRzIGEgbm9kZSB0byBwZXJmb3JtIG5vcm1hbGl6YXRpb24gb24gaXQKICoKICogQHBhcmFtIGtleSBUaGUga2V5IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIG5vZGUKICogQHBhcmFtIHZhbHVlIFRoZSBub2RlIHRvIGJlIHZpc2l0ZWQKICogQHBhcmFtIGRlcHRoIE9wdGlvbmFsIG51bWJlciBpbmRpY2F0aW5nIHRoZSBtYXhpbXVtIHJlY3Vyc2lvbiBkZXB0aAogKiBAcGFyYW0gbWF4UHJvcGVydGllcyBPcHRpb25hbCBtYXhpbXVtIG51bWJlciBvZiBwcm9wZXJ0aWVzL2VsZW1lbnRzIGluY2x1ZGVkIGluIGFueSBzaW5nbGUgb2JqZWN0L2FycmF5CiAqIEBwYXJhbSBtZW1vIE9wdGlvbmFsIE1lbW8gY2xhc3MgaGFuZGxpbmcgZGVjeWNsaW5nCiAqLwpmdW5jdGlvbiB2aXNpdCgKICBrZXksCiAgdmFsdWUsCiAgZGVwdGggPSArSW5maW5pdHksCiAgbWF4UHJvcGVydGllcyA9ICtJbmZpbml0eSwKICBtZW1vID0gbWVtb0J1aWxkZXIoKSwKKSB7CiAgY29uc3QgW21lbW9pemUsIHVubWVtb2l6ZV0gPSBtZW1vOwoKICAvLyBHZXQgdGhlIHNpbXBsZSBjYXNlcyBvdXQgb2YgdGhlIHdheSBmaXJzdAogIGlmICgKICAgIHZhbHVlID09IG51bGwgfHwgLy8gdGhpcyBtYXRjaGVzIG51bGwgYW5kIHVuZGVmaW5lZCAtPiBlcWVxIG5vdCBlcWVxZXEKICAgIChbJ251bWJlcicsICdib29sZWFuJywgJ3N0cmluZyddLmluY2x1ZGVzKHR5cGVvZiB2YWx1ZSkgJiYgIWlzTmFOJDEodmFsdWUpKQogICkgewogICAgcmV0dXJuIHZhbHVlIDsKICB9CgogIGNvbnN0IHN0cmluZ2lmaWVkID0gc3RyaW5naWZ5VmFsdWUoa2V5LCB2YWx1ZSk7CgogIC8vIEFueXRoaW5nIHdlIGNvdWxkIHBvdGVudGlhbGx5IGRpZyBpbnRvIG1vcmUgKG9iamVjdHMgb3IgYXJyYXlzKSB3aWxsIGhhdmUgY29tZSBiYWNrIGFzIGAiW29iamVjdCBYWFhYXSJgLgogIC8vIEV2ZXJ5dGhpbmcgZWxzZSB3aWxsIGhhdmUgYWxyZWFkeSBiZWVuIHNlcmlhbGl6ZWQsIHNvIGlmIHdlIGRvbid0IHNlZSB0aGF0IHBhdHRlcm4sIHdlJ3JlIGRvbmUuCiAgaWYgKCFzdHJpbmdpZmllZC5zdGFydHNXaXRoKCdbb2JqZWN0ICcpKSB7CiAgICByZXR1cm4gc3RyaW5naWZpZWQ7CiAgfQoKICAvLyBGcm9tIGhlcmUgb24sIHdlIGNhbiBhc3NlcnQgdGhhdCBgdmFsdWVgIGlzIGVpdGhlciBhbiBvYmplY3Qgb3IgYW4gYXJyYXkuCgogIC8vIERvIG5vdCBub3JtYWxpemUgb2JqZWN0cyB0aGF0IHdlIGtub3cgaGF2ZSBhbHJlYWR5IGJlZW4gbm9ybWFsaXplZC4gQXMgYSBnZW5lcmFsIHJ1bGUsIHRoZQogIC8vICJfX3NlbnRyeV9za2lwX25vcm1hbGl6YXRpb25fXyIgcHJvcGVydHkgc2hvdWxkIG9ubHkgYmUgdXNlZCBzcGFyaW5nbHkgYW5kIG9ubHkgc2hvdWxkIG9ubHkgYmUgc2V0IG9uIG9iamVjdHMgdGhhdAogIC8vIGhhdmUgYWxyZWFkeSBiZWVuIG5vcm1hbGl6ZWQuCiAgaWYgKCh2YWx1ZSApWydfX3NlbnRyeV9za2lwX25vcm1hbGl6YXRpb25fXyddKSB7CiAgICByZXR1cm4gdmFsdWUgOwogIH0KCiAgLy8gV2UgY2FuIHNldCBgX19zZW50cnlfb3ZlcnJpZGVfbm9ybWFsaXphdGlvbl9kZXB0aF9fYCBvbiBhbiBvYmplY3QgdG8gZW5zdXJlIHRoYXQgZnJvbSB0aGVyZQogIC8vIFdlIGtlZXAgYSBjZXJ0YWluIGFtb3VudCBvZiBkZXB0aC4KICAvLyBUaGlzIHNob3VsZCBiZSB1c2VkIHNwYXJpbmdseSwgZS5nLiB3ZSB1c2UgaXQgZm9yIHRoZSByZWR1eCBpbnRlZ3JhdGlvbiB0byBlbnN1cmUgd2UgZ2V0IGEgY2VydGFpbiBhbW91bnQgb2Ygc3RhdGUuCiAgY29uc3QgcmVtYWluaW5nRGVwdGggPQogICAgdHlwZW9mICh2YWx1ZSApWydfX3NlbnRyeV9vdmVycmlkZV9ub3JtYWxpemF0aW9uX2RlcHRoX18nXSA9PT0gJ251bWJlcicKICAgICAgPyAoKHZhbHVlIClbJ19fc2VudHJ5X292ZXJyaWRlX25vcm1hbGl6YXRpb25fZGVwdGhfXyddICkKICAgICAgOiBkZXB0aDsKCiAgLy8gV2UncmUgYWxzbyBkb25lIGlmIHdlJ3ZlIHJlYWNoZWQgdGhlIG1heCBkZXB0aAogIGlmIChyZW1haW5pbmdEZXB0aCA9PT0gMCkgewogICAgLy8gQXQgdGhpcyBwb2ludCB3ZSBrbm93IGBzZXJpYWxpemVkYCBpcyBhIHN0cmluZyBvZiB0aGUgZm9ybSBgIltvYmplY3QgWFhYWF0iYC4gQ2xlYW4gaXQgdXAgc28gaXQncyBqdXN0IGAiW1hYWFhdImAuCiAgICByZXR1cm4gc3RyaW5naWZpZWQucmVwbGFjZSgnb2JqZWN0ICcsICcnKTsKICB9CgogIC8vIElmIHdlJ3ZlIGFscmVhZHkgdmlzaXRlZCB0aGlzIGJyYW5jaCwgYmFpbCBvdXQsIGFzIGl0J3MgY2lyY3VsYXIgcmVmZXJlbmNlLiBJZiBub3QsIG5vdGUgdGhhdCB3ZSdyZSBzZWVpbmcgaXQgbm93LgogIGlmIChtZW1vaXplKHZhbHVlKSkgewogICAgcmV0dXJuICdbQ2lyY3VsYXIgfl0nOwogIH0KCiAgLy8gSWYgdGhlIHZhbHVlIGhhcyBhIGB0b0pTT05gIG1ldGhvZCwgd2UgY2FsbCBpdCB0byBleHRyYWN0IG1vcmUgaW5mb3JtYXRpb24KICBjb25zdCB2YWx1ZVdpdGhUb0pTT04gPSB2YWx1ZSA7CiAgaWYgKHZhbHVlV2l0aFRvSlNPTiAmJiB0eXBlb2YgdmFsdWVXaXRoVG9KU09OLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJykgewogICAgdHJ5IHsKICAgICAgY29uc3QganNvblZhbHVlID0gdmFsdWVXaXRoVG9KU09OLnRvSlNPTigpOwogICAgICAvLyBXZSBuZWVkIHRvIG5vcm1hbGl6ZSB0aGUgcmV0dXJuIHZhbHVlIG9mIGAudG9KU09OKClgIGluIGNhc2UgaXQgaGFzIGNpcmN1bGFyIHJlZmVyZW5jZXMKICAgICAgcmV0dXJuIHZpc2l0KCcnLCBqc29uVmFsdWUsIHJlbWFpbmluZ0RlcHRoIC0gMSwgbWF4UHJvcGVydGllcywgbWVtbyk7CiAgICB9IGNhdGNoIChlcnIpIHsKICAgICAgLy8gcGFzcyAoVGhlIGJ1aWx0LWluIGB0b0pTT05gIGZhaWxlZCwgYnV0IHdlIGNhbiBzdGlsbCB0cnkgdG8gZG8gaXQgb3Vyc2VsdmVzKQogICAgfQogIH0KCiAgLy8gQXQgdGhpcyBwb2ludCB3ZSBrbm93IHdlIGVpdGhlciBoYXZlIGFuIG9iamVjdCBvciBhbiBhcnJheSwgd2UgaGF2ZW4ndCBzZWVuIGl0IGJlZm9yZSwgYW5kIHdlJ3JlIGdvaW5nIHRvIHJlY3Vyc2UKICAvLyBiZWNhdXNlIHdlIGhhdmVuJ3QgeWV0IHJlYWNoZWQgdGhlIG1heCBkZXB0aC4gQ3JlYXRlIGFuIGFjY3VtdWxhdG9yIHRvIGhvbGQgdGhlIHJlc3VsdHMgb2YgdmlzaXRpbmcgZWFjaAogIC8vIHByb3BlcnR5L2VudHJ5LCBhbmQga2VlcCB0cmFjayBvZiB0aGUgbnVtYmVyIG9mIGl0ZW1zIHdlIGFkZCB0byBpdC4KICBjb25zdCBub3JtYWxpemVkID0gKEFycmF5LmlzQXJyYXkodmFsdWUpID8gW10gOiB7fSkgOwogIGxldCBudW1BZGRlZCA9IDA7CgogIC8vIEJlZm9yZSB3ZSBiZWdpbiwgY29udmVydGBFcnJvcmAgYW5kYEV2ZW50YCBpbnN0YW5jZXMgaW50byBwbGFpbiBvYmplY3RzLCBzaW5jZSBzb21lIG9mIGVhY2ggb2YgdGhlaXIgcmVsZXZhbnQKICAvLyBwcm9wZXJ0aWVzIGFyZSBub24tZW51bWVyYWJsZSBhbmQgb3RoZXJ3aXNlIHdvdWxkIGdldCBtaXNzZWQuCiAgY29uc3QgdmlzaXRhYmxlID0gY29udmVydFRvUGxhaW5PYmplY3QodmFsdWUgKTsKCiAgZm9yIChjb25zdCB2aXNpdEtleSBpbiB2aXNpdGFibGUpIHsKICAgIC8vIEF2b2lkIGl0ZXJhdGluZyBvdmVyIGZpZWxkcyBpbiB0aGUgcHJvdG90eXBlIGlmIHRoZXkndmUgc29tZWhvdyBiZWVuIGV4cG9zZWQgdG8gZW51bWVyYXRpb24uCiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2aXNpdGFibGUsIHZpc2l0S2V5KSkgewogICAgICBjb250aW51ZTsKICAgIH0KCiAgICBpZiAobnVtQWRkZWQgPj0gbWF4UHJvcGVydGllcykgewogICAgICBub3JtYWxpemVkW3Zpc2l0S2V5XSA9ICdbTWF4UHJvcGVydGllcyB+XSc7CiAgICAgIGJyZWFrOwogICAgfQoKICAgIC8vIFJlY3Vyc2l2ZWx5IHZpc2l0IGFsbCB0aGUgY2hpbGQgbm9kZXMKICAgIGNvbnN0IHZpc2l0VmFsdWUgPSB2aXNpdGFibGVbdmlzaXRLZXldOwogICAgbm9ybWFsaXplZFt2aXNpdEtleV0gPSB2aXNpdCh2aXNpdEtleSwgdmlzaXRWYWx1ZSwgcmVtYWluaW5nRGVwdGggLSAxLCBtYXhQcm9wZXJ0aWVzLCBtZW1vKTsKCiAgICBudW1BZGRlZCsrOwogIH0KCiAgLy8gT25jZSB3ZSd2ZSB2aXNpdGVkIGFsbCB0aGUgYnJhbmNoZXMsIHJlbW92ZSB0aGUgcGFyZW50IGZyb20gbWVtbyBzdG9yYWdlCiAgdW5tZW1vaXplKHZhbHVlKTsKCiAgLy8gUmV0dXJuIGFjY3VtdWxhdGVkIHZhbHVlcwogIHJldHVybiBub3JtYWxpemVkOwp9CgovKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovCi8qKgogKiBTdHJpbmdpZnkgdGhlIGdpdmVuIHZhbHVlLiBIYW5kbGVzIHZhcmlvdXMga25vd24gc3BlY2lhbCB2YWx1ZXMgYW5kIHR5cGVzLgogKgogKiBOb3QgbWVhbnQgdG8gYmUgdXNlZCBvbiBzaW1wbGUgcHJpbWl0aXZlcyB3aGljaCBhbHJlYWR5IGhhdmUgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24sIGFzIGl0IHdpbGwsIGZvciBleGFtcGxlLCB0dXJuCiAqIHRoZSBudW1iZXIgMTIzMSBpbnRvICJbT2JqZWN0IE51bWJlcl0iLCBub3Igb24gYG51bGxgLCBhcyBpdCB3aWxsIHRocm93LgogKgogKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHN0cmluZ2lmeQogKiBAcmV0dXJucyBBIHN0cmluZ2lmaWVkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiB2YWx1ZQogKi8KZnVuY3Rpb24gc3RyaW5naWZ5VmFsdWUoCiAga2V5LAogIC8vIHRoaXMgdHlwZSBpcyBhIHRpbnkgYml0IG9mIGEgY2hlYXQsIHNpbmNlIHRoaXMgZnVuY3Rpb24gZG9lcyBoYW5kbGUgTmFOICh3aGljaCBpcyB0ZWNobmljYWxseSBhIG51bWJlciksIGJ1dCBmb3IKICAvLyBvdXIgaW50ZXJuYWwgdXNlLCBpdCdsbCBkbwogIHZhbHVlLAopIHsKICB0cnkgewogICAgaWYgKGtleSA9PT0gJ2RvbWFpbicgJiYgdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAodmFsdWUgKS5fZXZlbnRzKSB7CiAgICAgIHJldHVybiAnW0RvbWFpbl0nOwogICAgfQoKICAgIGlmIChrZXkgPT09ICdkb21haW5FbWl0dGVyJykgewogICAgICByZXR1cm4gJ1tEb21haW5FbWl0dGVyXSc7CiAgICB9CgogICAgLy8gSXQncyBzYWZlIHRvIHVzZSBgZ2xvYmFsYCwgYHdpbmRvd2AsIGFuZCBgZG9jdW1lbnRgIGhlcmUgaW4gdGhpcyBtYW5uZXIsIGFzIHdlIGFyZSBhc3NlcnRpbmcgdXNpbmcgYHR5cGVvZmAgZmlyc3QKICAgIC8vIHdoaWNoIHdvbid0IHRocm93IGlmIHRoZXkgYXJlIG5vdCBwcmVzZW50LgoKICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSA9PT0gZ2xvYmFsKSB7CiAgICAgIHJldHVybiAnW0dsb2JhbF0nOwogICAgfQoKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHMKICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSA9PT0gd2luZG93KSB7CiAgICAgIHJldHVybiAnW1dpbmRvd10nOwogICAgfQoKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHMKICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlID09PSBkb2N1bWVudCkgewogICAgICByZXR1cm4gJ1tEb2N1bWVudF0nOwogICAgfQoKICAgIGlmIChpc1Z1ZVZpZXdNb2RlbCh2YWx1ZSkpIHsKICAgICAgcmV0dXJuICdbVnVlVmlld01vZGVsXSc7CiAgICB9CgogICAgLy8gUmVhY3QncyBTeW50aGV0aWNFdmVudCB0aGluZ3kKICAgIGlmIChpc1N5bnRoZXRpY0V2ZW50KHZhbHVlKSkgewogICAgICByZXR1cm4gJ1tTeW50aGV0aWNFdmVudF0nOwogICAgfQoKICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHZhbHVlICE9PSB2YWx1ZSkgewogICAgICByZXR1cm4gJ1tOYU5dJzsKICAgIH0KCiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7CiAgICAgIHJldHVybiBgW0Z1bmN0aW9uOiAke2dldEZ1bmN0aW9uTmFtZSh2YWx1ZSl9XWA7CiAgICB9CgogICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCcpIHsKICAgICAgcmV0dXJuIGBbJHtTdHJpbmcodmFsdWUpfV1gOwogICAgfQoKICAgIC8vIHN0cmluZ2lmaWVkIEJpZ0ludHMgYXJlIGluZGlzdGluZ3Vpc2hhYmxlIGZyb20gcmVndWxhciBudW1iZXJzLCBzbyB3ZSBuZWVkIHRvIGxhYmVsIHRoZW0gdG8gYXZvaWQgY29uZnVzaW9uCiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYmlnaW50JykgewogICAgICByZXR1cm4gYFtCaWdJbnQ6ICR7U3RyaW5nKHZhbHVlKX1dYDsKICAgIH0KCiAgICAvLyBOb3cgdGhhdCB3ZSd2ZSBrbm9ja2VkIG91dCBhbGwgdGhlIHNwZWNpYWwgY2FzZXMgYW5kIHRoZSBwcmltaXRpdmVzLCBhbGwgd2UgaGF2ZSBsZWZ0IGFyZSBvYmplY3RzLiBTaW1wbHkgY2FzdGluZwogICAgLy8gdGhlbSB0byBzdHJpbmdzIG1lYW5zIHRoYXQgaW5zdGFuY2VzIG9mIGNsYXNzZXMgd2hpY2ggaGF2ZW4ndCBkZWZpbmVkIHRoZWlyIGB0b1N0cmluZ1RhZ2Agd2lsbCBqdXN0IGNvbWUgb3V0IGFzCiAgICAvLyBgIltvYmplY3QgT2JqZWN0XSJgLiBJZiB3ZSBpbnN0ZWFkIGxvb2sgYXQgdGhlIGNvbnN0cnVjdG9yJ3MgbmFtZSAod2hpY2ggaXMgdGhlIHNhbWUgYXMgdGhlIG5hbWUgb2YgdGhlIGNsYXNzKSwKICAgIC8vIHdlIGNhbiBtYWtlIHN1cmUgdGhhdCBvbmx5IHBsYWluIG9iamVjdHMgY29tZSBvdXQgdGhhdCB3YXkuCiAgICBjb25zdCBvYmpOYW1lID0gZ2V0Q29uc3RydWN0b3JOYW1lKHZhbHVlKTsKCiAgICAvLyBIYW5kbGUgSFRNTCBFbGVtZW50cwogICAgaWYgKC9eSFRNTChcdyopRWxlbWVudCQvLnRlc3Qob2JqTmFtZSkpIHsKICAgICAgcmV0dXJuIGBbSFRNTEVsZW1lbnQ6ICR7b2JqTmFtZX1dYDsKICAgIH0KCiAgICByZXR1cm4gYFtvYmplY3QgJHtvYmpOYW1lfV1gOwogIH0gY2F0Y2ggKGVycikgewogICAgcmV0dXJuIGAqKm5vbi1zZXJpYWxpemFibGUqKiAoJHtlcnJ9KWA7CiAgfQp9Ci8qIGVzbGludC1lbmFibGUgY29tcGxleGl0eSAqLwoKZnVuY3Rpb24gZ2V0Q29uc3RydWN0b3JOYW1lKHZhbHVlKSB7CiAgY29uc3QgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKTsKCiAgcmV0dXJuIHByb3RvdHlwZSA/IHByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lIDogJ251bGwgcHJvdG90eXBlJzsKfQoKLyoqCiAqIE5vcm1hbGl6ZXMgVVJMcyBpbiBleGNlcHRpb25zIGFuZCBzdGFja3RyYWNlcyB0byBhIGJhc2UgcGF0aCBzbyBTZW50cnkgY2FuIGZpbmdlcnByaW50CiAqIGFjcm9zcyBwbGF0Zm9ybXMgYW5kIHdvcmtpbmcgZGlyZWN0b3J5LgogKgogKiBAcGFyYW0gdXJsIFRoZSBVUkwgdG8gYmUgbm9ybWFsaXplZC4KICogQHBhcmFtIGJhc2VQYXRoIFRoZSBhcHBsaWNhdGlvbiBiYXNlIHBhdGguCiAqIEByZXR1cm5zIFRoZSBub3JtYWxpemVkIFVSTC4KICovCmZ1bmN0aW9uIG5vcm1hbGl6ZVVybFRvQmFzZSh1cmwsIGJhc2VQYXRoKSB7CiAgY29uc3QgZXNjYXBlZEJhc2UgPSBiYXNlUGF0aAogICAgLy8gQmFja3NsYXNoIHRvIGZvcndhcmQKICAgIC5yZXBsYWNlKC9cXC9nLCAnLycpCiAgICAvLyBFc2NhcGUgUmVnRXhwIHNwZWNpYWwgY2hhcmFjdGVycwogICAgLnJlcGxhY2UoL1t8XFx7fSgpW1xdXiQrKj8uXS9nLCAnXFwkJicpOwoKICBsZXQgbmV3VXJsID0gdXJsOwogIHRyeSB7CiAgICBuZXdVcmwgPSBkZWNvZGVVUkkodXJsKTsKICB9IGNhdGNoIChfT28pIHsKICAgIC8vIFNvbWV0aW1lIHRoaXMgYnJlYWtzCiAgfQogIHJldHVybiAoCiAgICBuZXdVcmwKICAgICAgLnJlcGxhY2UoL1xcL2csICcvJykKICAgICAgLnJlcGxhY2UoL3dlYnBhY2s6XC8/L2csICcnKSAvLyBSZW1vdmUgaW50ZXJtZWRpYXRlIGJhc2UgcGF0aAogICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHNlbnRyeS1pbnRlcm5hbC9zZGsvbm8tcmVnZXhwLWNvbnN0cnVjdG9yCiAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoYChmaWxlOi8vKT8vKiR7ZXNjYXBlZEJhc2V9LypgLCAnaWcnKSwgJ2FwcDovLy8nKQogICk7Cn0KCi8vIFNsaWdodGx5IG1vZGlmaWVkIChubyBJRTggc3VwcG9ydCwgRVM2KSBhbmQgdHJhbnNjcmliZWQgdG8gVHlwZVNjcmlwdAoKLy8gU3BsaXQgYSBmaWxlbmFtZSBpbnRvIFtyb290LCBkaXIsIGJhc2VuYW1lLCBleHRdLCB1bml4IHZlcnNpb24KLy8gJ3Jvb3QnIGlzIGp1c3QgYSBzbGFzaCwgb3Igbm90aGluZy4KY29uc3Qgc3BsaXRQYXRoUmUgPSAvXihcUys6XFx8XC8/KShbXHNcU10qPykoKD86XC57MSwyfXxbXi9cXF0rP3wpKFwuW14uL1xcXSp8KSkoPzpbL1xcXSopJC87Ci8qKiBKU0RvYyAqLwpmdW5jdGlvbiBzcGxpdFBhdGgoZmlsZW5hbWUpIHsKICAvLyBUcnVuY2F0ZSBmaWxlcyBuYW1lcyBncmVhdGVyIHRoYW4gMTAyNCBjaGFyYWN0ZXJzIHRvIGF2b2lkIHJlZ2V4IGRvcwogIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9nZXRzZW50cnkvc2VudHJ5LWphdmFzY3JpcHQvcHVsbC84NzM3I2Rpc2N1c3Npb25fcjEyODU3MTkxNzIKICBjb25zdCB0cnVuY2F0ZWQgPSBmaWxlbmFtZS5sZW5ndGggPiAxMDI0ID8gYDx0cnVuY2F0ZWQ+JHtmaWxlbmFtZS5zbGljZSgtMTAyNCl9YCA6IGZpbGVuYW1lOwogIGNvbnN0IHBhcnRzID0gc3BsaXRQYXRoUmUuZXhlYyh0cnVuY2F0ZWQpOwogIHJldHVybiBwYXJ0cyA/IHBhcnRzLnNsaWNlKDEpIDogW107Cn0KCi8qKiBKU0RvYyAqLwpmdW5jdGlvbiBkaXJuYW1lKHBhdGgpIHsKICBjb25zdCByZXN1bHQgPSBzcGxpdFBhdGgocGF0aCk7CiAgY29uc3Qgcm9vdCA9IHJlc3VsdFswXTsKICBsZXQgZGlyID0gcmVzdWx0WzFdOwoKICBpZiAoIXJvb3QgJiYgIWRpcikgewogICAgLy8gTm8gZGlybmFtZSB3aGF0c29ldmVyCiAgICByZXR1cm4gJy4nOwogIH0KCiAgaWYgKGRpcikgewogICAgLy8gSXQgaGFzIGEgZGlybmFtZSwgc3RyaXAgdHJhaWxpbmcgc2xhc2gKICAgIGRpciA9IGRpci5zbGljZSgwLCBkaXIubGVuZ3RoIC0gMSk7CiAgfQoKICByZXR1cm4gcm9vdCArIGRpcjsKfQoKLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LWZ1bmN0aW9uLXJldHVybi10eXBlICovCgovKiogU3luY1Byb21pc2UgaW50ZXJuYWwgc3RhdGVzICovCnZhciBTdGF0ZXM7IChmdW5jdGlvbiAoU3RhdGVzKSB7CiAgLyoqIFBlbmRpbmcgKi8KICBjb25zdCBQRU5ESU5HID0gMDsgU3RhdGVzW1N0YXRlc1siUEVORElORyJdID0gUEVORElOR10gPSAiUEVORElORyI7CiAgLyoqIFJlc29sdmVkIC8gT0sgKi8KICBjb25zdCBSRVNPTFZFRCA9IDE7IFN0YXRlc1tTdGF0ZXNbIlJFU09MVkVEIl0gPSBSRVNPTFZFRF0gPSAiUkVTT0xWRUQiOwogIC8qKiBSZWplY3RlZCAvIEVycm9yICovCiAgY29uc3QgUkVKRUNURUQgPSAyOyBTdGF0ZXNbU3RhdGVzWyJSRUpFQ1RFRCJdID0gUkVKRUNURURdID0gIlJFSkVDVEVEIjsKfSkoU3RhdGVzIHx8IChTdGF0ZXMgPSB7fSkpOwoKLy8gT3ZlcmxvYWRzIHNvIHdlIGNhbiBjYWxsIHJlc29sdmVkU3luY1Byb21pc2Ugd2l0aG91dCBhcmd1bWVudHMgYW5kIGdlbmVyaWMgYXJndW1lbnQKCi8qKgogKiBDcmVhdGVzIGEgcmVzb2x2ZWQgc3luYyBwcm9taXNlLgogKgogKiBAcGFyYW0gdmFsdWUgdGhlIHZhbHVlIHRvIHJlc29sdmUgdGhlIHByb21pc2Ugd2l0aAogKiBAcmV0dXJucyB0aGUgcmVzb2x2ZWQgc3luYyBwcm9taXNlCiAqLwpmdW5jdGlvbiByZXNvbHZlZFN5bmNQcm9taXNlKHZhbHVlKSB7CiAgcmV0dXJuIG5ldyBTeW5jUHJvbWlzZShyZXNvbHZlID0+IHsKICAgIHJlc29sdmUodmFsdWUpOwogIH0pOwp9CgovKioKICogQ3JlYXRlcyBhIHJlamVjdGVkIHN5bmMgcHJvbWlzZS4KICoKICogQHBhcmFtIHZhbHVlIHRoZSB2YWx1ZSB0byByZWplY3QgdGhlIHByb21pc2Ugd2l0aAogKiBAcmV0dXJucyB0aGUgcmVqZWN0ZWQgc3luYyBwcm9taXNlCiAqLwpmdW5jdGlvbiByZWplY3RlZFN5bmNQcm9taXNlKHJlYXNvbikgewogIHJldHVybiBuZXcgU3luY1Byb21pc2UoKF8sIHJlamVjdCkgPT4gewogICAgcmVqZWN0KHJlYXNvbik7CiAgfSk7Cn0KCi8qKgogKiBUaGVuYWJsZSBjbGFzcyB0aGF0IGJlaGF2ZXMgbGlrZSBhIFByb21pc2UgYW5kIGZvbGxvd3MgaXQncyBpbnRlcmZhY2UKICogYnV0IGlzIG5vdCBhc3luYyBpbnRlcm5hbGx5CiAqLwpjbGFzcyBTeW5jUHJvbWlzZSB7CgogICBjb25zdHJ1Y3RvcigKICAgIGV4ZWN1dG9yLAogICkge1N5bmNQcm9taXNlLnByb3RvdHlwZS5fX2luaXQuY2FsbCh0aGlzKTtTeW5jUHJvbWlzZS5wcm90b3R5cGUuX19pbml0Mi5jYWxsKHRoaXMpO1N5bmNQcm9taXNlLnByb3RvdHlwZS5fX2luaXQzLmNhbGwodGhpcyk7U3luY1Byb21pc2UucHJvdG90eXBlLl9faW5pdDQuY2FsbCh0aGlzKTsKICAgIHRoaXMuX3N0YXRlID0gU3RhdGVzLlBFTkRJTkc7CiAgICB0aGlzLl9oYW5kbGVycyA9IFtdOwoKICAgIHRyeSB7CiAgICAgIGV4ZWN1dG9yKHRoaXMuX3Jlc29sdmUsIHRoaXMuX3JlamVjdCk7CiAgICB9IGNhdGNoIChlKSB7CiAgICAgIHRoaXMuX3JlamVjdChlKTsKICAgIH0KICB9CgogIC8qKiBKU0RvYyAqLwogICB0aGVuKAogICAgb25mdWxmaWxsZWQsCiAgICBvbnJlamVjdGVkLAogICkgewogICAgcmV0dXJuIG5ldyBTeW5jUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7CiAgICAgIHRoaXMuX2hhbmRsZXJzLnB1c2goWwogICAgICAgIGZhbHNlLAogICAgICAgIHJlc3VsdCA9PiB7CiAgICAgICAgICBpZiAoIW9uZnVsZmlsbGVkKSB7CiAgICAgICAgICAgIC8vIFRPRE86IMKvXF8o44OEKV8vwq8KICAgICAgICAgICAgLy8gVE9ETzogRklYTUUKICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQgKTsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgcmVzb2x2ZShvbmZ1bGZpbGxlZChyZXN1bHQpKTsKICAgICAgICAgICAgfSBjYXRjaCAoZSkgewogICAgICAgICAgICAgIHJlamVjdChlKTsKICAgICAgICAgICAgfQogICAgICAgICAgfQogICAgICAgIH0sCiAgICAgICAgcmVhc29uID0+IHsKICAgICAgICAgIGlmICghb25yZWplY3RlZCkgewogICAgICAgICAgICByZWplY3QocmVhc29uKTsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgcmVzb2x2ZShvbnJlamVjdGVkKHJlYXNvbikpOwogICAgICAgICAgICB9IGNhdGNoIChlKSB7CiAgICAgICAgICAgICAgcmVqZWN0KGUpOwogICAgICAgICAgICB9CiAgICAgICAgICB9CiAgICAgICAgfSwKICAgICAgXSk7CiAgICAgIHRoaXMuX2V4ZWN1dGVIYW5kbGVycygpOwogICAgfSk7CiAgfQoKICAvKiogSlNEb2MgKi8KICAgY2F0Y2goCiAgICBvbnJlamVjdGVkLAogICkgewogICAgcmV0dXJuIHRoaXMudGhlbih2YWwgPT4gdmFsLCBvbnJlamVjdGVkKTsKICB9CgogIC8qKiBKU0RvYyAqLwogICBmaW5hbGx5KG9uZmluYWxseSkgewogICAgcmV0dXJuIG5ldyBTeW5jUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7CiAgICAgIGxldCB2YWw7CiAgICAgIGxldCBpc1JlamVjdGVkOwoKICAgICAgcmV0dXJuIHRoaXMudGhlbigKICAgICAgICB2YWx1ZSA9PiB7CiAgICAgICAgICBpc1JlamVjdGVkID0gZmFsc2U7CiAgICAgICAgICB2YWwgPSB2YWx1ZTsKICAgICAgICAgIGlmIChvbmZpbmFsbHkpIHsKICAgICAgICAgICAgb25maW5hbGx5KCk7CiAgICAgICAgICB9CiAgICAgICAgfSwKICAgICAgICByZWFzb24gPT4gewogICAgICAgICAgaXNSZWplY3RlZCA9IHRydWU7CiAgICAgICAgICB2YWwgPSByZWFzb247CiAgICAgICAgICBpZiAob25maW5hbGx5KSB7CiAgICAgICAgICAgIG9uZmluYWxseSgpOwogICAgICAgICAgfQogICAgICAgIH0sCiAgICAgICkudGhlbigoKSA9PiB7CiAgICAgICAgaWYgKGlzUmVqZWN0ZWQpIHsKICAgICAgICAgIHJlamVjdCh2YWwpOwogICAgICAgICAgcmV0dXJuOwogICAgICAgIH0KCiAgICAgICAgcmVzb2x2ZSh2YWwgKTsKICAgICAgfSk7CiAgICB9KTsKICB9CgogIC8qKiBKU0RvYyAqLwogICAgX19pbml0KCkge3RoaXMuX3Jlc29sdmUgPSAodmFsdWUpID0+IHsKICAgIHRoaXMuX3NldFJlc3VsdChTdGF0ZXMuUkVTT0xWRUQsIHZhbHVlKTsKICB9O30KCiAgLyoqIEpTRG9jICovCiAgICBfX2luaXQyKCkge3RoaXMuX3JlamVjdCA9IChyZWFzb24pID0+IHsKICAgIHRoaXMuX3NldFJlc3VsdChTdGF0ZXMuUkVKRUNURUQsIHJlYXNvbik7CiAgfTt9CgogIC8qKiBKU0RvYyAqLwogICAgX19pbml0MygpIHt0aGlzLl9zZXRSZXN1bHQgPSAoc3RhdGUsIHZhbHVlKSA9PiB7CiAgICBpZiAodGhpcy5fc3RhdGUgIT09IFN0YXRlcy5QRU5ESU5HKSB7CiAgICAgIHJldHVybjsKICAgIH0KCiAgICBpZiAoaXNUaGVuYWJsZSh2YWx1ZSkpIHsKICAgICAgdm9pZCAodmFsdWUgKS50aGVuKHRoaXMuX3Jlc29sdmUsIHRoaXMuX3JlamVjdCk7CiAgICAgIHJldHVybjsKICAgIH0KCiAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlOwogICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTsKCiAgICB0aGlzLl9leGVjdXRlSGFuZGxlcnMoKTsKICB9O30KCiAgLyoqIEpTRG9jICovCiAgICBfX2luaXQ0KCkge3RoaXMuX2V4ZWN1dGVIYW5kbGVycyA9ICgpID0+IHsKICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gU3RhdGVzLlBFTkRJTkcpIHsKICAgICAgcmV0dXJuOwogICAgfQoKICAgIGNvbnN0IGNhY2hlZEhhbmRsZXJzID0gdGhpcy5faGFuZGxlcnMuc2xpY2UoKTsKICAgIHRoaXMuX2hhbmRsZXJzID0gW107CgogICAgY2FjaGVkSGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IHsKICAgICAgaWYgKGhhbmRsZXJbMF0pIHsKICAgICAgICByZXR1cm47CiAgICAgIH0KCiAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gU3RhdGVzLlJFU09MVkVEKSB7CiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlcwogICAgICAgIGhhbmRsZXJbMV0odGhpcy5fdmFsdWUgKTsKICAgICAgfQoKICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBTdGF0ZXMuUkVKRUNURUQpIHsKICAgICAgICBoYW5kbGVyWzJdKHRoaXMuX3ZhbHVlKTsKICAgICAgfQoKICAgICAgaGFuZGxlclswXSA9IHRydWU7CiAgICB9KTsKICB9O30KfQoKLyoqCiAqIENyZWF0ZXMgYW4gbmV3IFByb21pc2VCdWZmZXIgb2JqZWN0IHdpdGggdGhlIHNwZWNpZmllZCBsaW1pdAogKiBAcGFyYW0gbGltaXQgbWF4IG51bWJlciBvZiBwcm9taXNlcyB0aGF0IGNhbiBiZSBzdG9yZWQgaW4gdGhlIGJ1ZmZlcgogKi8KZnVuY3Rpb24gbWFrZVByb21pc2VCdWZmZXIobGltaXQpIHsKICBjb25zdCBidWZmZXIgPSBbXTsKCiAgZnVuY3Rpb24gaXNSZWFkeSgpIHsKICAgIHJldHVybiBsaW1pdCA9PT0gdW5kZWZpbmVkIHx8IGJ1ZmZlci5sZW5ndGggPCBsaW1pdDsKICB9CgogIC8qKgogICAqIFJlbW92ZSBhIHByb21pc2UgZnJvbSB0aGUgcXVldWUuCiAgICoKICAgKiBAcGFyYW0gdGFzayBDYW4gYmUgYW55IFByb21pc2VMaWtlPFQ+CiAgICogQHJldHVybnMgUmVtb3ZlZCBwcm9taXNlLgogICAqLwogIGZ1bmN0aW9uIHJlbW92ZSh0YXNrKSB7CiAgICByZXR1cm4gYnVmZmVyLnNwbGljZShidWZmZXIuaW5kZXhPZih0YXNrKSwgMSlbMF07CiAgfQoKICAvKioKICAgKiBBZGQgYSBwcm9taXNlIChyZXByZXNlbnRpbmcgYW4gaW4tZmxpZ2h0IGFjdGlvbikgdG8gdGhlIHF1ZXVlLCBhbmQgc2V0IGl0IHRvIHJlbW92ZSBpdHNlbGYgb24gZnVsZmlsbG1lbnQuCiAgICoKICAgKiBAcGFyYW0gdGFza1Byb2R1Y2VyIEEgZnVuY3Rpb24gcHJvZHVjaW5nIGFueSBQcm9taXNlTGlrZTxUPjsgSW4gcHJldmlvdXMgdmVyc2lvbnMgdGhpcyB1c2VkIHRvIGJlIGB0YXNrOgogICAqICAgICAgICBQcm9taXNlTGlrZTxUPmAsIGJ1dCB1bmRlciB0aGF0IG1vZGVsLCBQcm9taXNlcyB3ZXJlIGluc3RhbnRseSBjcmVhdGVkIG9uIHRoZSBjYWxsLXNpdGUgYW5kIHRoZWlyIGV4ZWN1dG9yCiAgICogICAgICAgIGZ1bmN0aW9ucyB0aGVyZWZvcmUgcmFuIGltbWVkaWF0ZWx5LiBUaHVzLCBldmVuIGlmIHRoZSBidWZmZXIgd2FzIGZ1bGwsIHRoZSBhY3Rpb24gc3RpbGwgaGFwcGVuZWQuIEJ5CiAgICogICAgICAgIHJlcXVpcmluZyB0aGUgcHJvbWlzZSB0byBiZSB3cmFwcGVkIGluIGEgZnVuY3Rpb24sIHdlIGNhbiBkZWZlciBwcm9taXNlIGNyZWF0aW9uIHVudGlsIGFmdGVyIHRoZSBidWZmZXIKICAgKiAgICAgICAgbGltaXQgY2hlY2suCiAgICogQHJldHVybnMgVGhlIG9yaWdpbmFsIHByb21pc2UuCiAgICovCiAgZnVuY3Rpb24gYWRkKHRhc2tQcm9kdWNlcikgewogICAgaWYgKCFpc1JlYWR5KCkpIHsKICAgICAgcmV0dXJuIHJlamVjdGVkU3luY1Byb21pc2UobmV3IFNlbnRyeUVycm9yKCdOb3QgYWRkaW5nIFByb21pc2UgYmVjYXVzZSBidWZmZXIgbGltaXQgd2FzIHJlYWNoZWQuJykpOwogICAgfQoKICAgIC8vIHN0YXJ0IHRoZSB0YXNrIGFuZCBhZGQgaXRzIHByb21pc2UgdG8gdGhlIHF1ZXVlCiAgICBjb25zdCB0YXNrID0gdGFza1Byb2R1Y2VyKCk7CiAgICBpZiAoYnVmZmVyLmluZGV4T2YodGFzaykgPT09IC0xKSB7CiAgICAgIGJ1ZmZlci5wdXNoKHRhc2spOwogICAgfQogICAgdm9pZCB0YXNrCiAgICAgIC50aGVuKCgpID0+IHJlbW92ZSh0YXNrKSkKICAgICAgLy8gVXNlIGB0aGVuKG51bGwsIHJlamVjdGlvbkhhbmRsZXIpYCByYXRoZXIgdGhhbiBgY2F0Y2gocmVqZWN0aW9uSGFuZGxlcilgIHNvIHRoYXQgd2UgY2FuIHVzZSBgUHJvbWlzZUxpa2VgCiAgICAgIC8vIHJhdGhlciB0aGFuIGBQcm9taXNlYC4gYFByb21pc2VMaWtlYCBkb2Vzbid0IGhhdmUgYSBgLmNhdGNoYCBtZXRob2QsIG1ha2luZyBpdHMgcG9seWZpbGwgc21hbGxlci4gKEVTNSBkaWRuJ3QKICAgICAgLy8gaGF2ZSBwcm9taXNlcywgc28gVFMgaGFzIHRvIHBvbHlmaWxsIHdoZW4gZG93bi1jb21waWxpbmcuKQogICAgICAudGhlbihudWxsLCAoKSA9PgogICAgICAgIHJlbW92ZSh0YXNrKS50aGVuKG51bGwsICgpID0+IHsKICAgICAgICAgIC8vIFdlIGhhdmUgdG8gYWRkIGFub3RoZXIgY2F0Y2ggaGVyZSBiZWNhdXNlIGByZW1vdmUoKWAgc3RhcnRzIGEgbmV3IHByb21pc2UgY2hhaW4uCiAgICAgICAgfSksCiAgICAgICk7CiAgICByZXR1cm4gdGFzazsKICB9CgogIC8qKgogICAqIFdhaXQgZm9yIGFsbCBwcm9taXNlcyBpbiB0aGUgcXVldWUgdG8gcmVzb2x2ZSBvciBmb3IgdGltZW91dCB0byBleHBpcmUsIHdoaWNoZXZlciBjb21lcyBmaXJzdC4KICAgKgogICAqIEBwYXJhbSB0aW1lb3V0IFRoZSB0aW1lLCBpbiBtcywgYWZ0ZXIgd2hpY2ggdG8gcmVzb2x2ZSB0byBgZmFsc2VgIGlmIHRoZSBxdWV1ZSBpcyBzdGlsbCBub24tZW1wdHkuIFBhc3NpbmcgYDBgIChvcgogICAqIG5vdCBwYXNzaW5nIGFueXRoaW5nKSB3aWxsIG1ha2UgdGhlIHByb21pc2Ugd2FpdCBhcyBsb25nIGFzIGl0IHRha2VzIGZvciB0aGUgcXVldWUgdG8gZHJhaW4gYmVmb3JlIHJlc29sdmluZyB0bwogICAqIGB0cnVlYC4KICAgKiBAcmV0dXJucyBBIHByb21pc2Ugd2hpY2ggd2lsbCByZXNvbHZlIHRvIGB0cnVlYCBpZiB0aGUgcXVldWUgaXMgYWxyZWFkeSBlbXB0eSBvciBkcmFpbnMgYmVmb3JlIHRoZSB0aW1lb3V0LCBhbmQKICAgKiBgZmFsc2VgIG90aGVyd2lzZQogICAqLwogIGZ1bmN0aW9uIGRyYWluKHRpbWVvdXQpIHsKICAgIHJldHVybiBuZXcgU3luY1Byb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gewogICAgICBsZXQgY291bnRlciA9IGJ1ZmZlci5sZW5ndGg7CgogICAgICBpZiAoIWNvdW50ZXIpIHsKICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTsKICAgICAgfQoKICAgICAgLy8gd2FpdCBmb3IgYHRpbWVvdXRgIG1zIGFuZCB0aGVuIHJlc29sdmUgdG8gYGZhbHNlYCAoaWYgbm90IGNhbmNlbGxlZCBmaXJzdCkKICAgICAgY29uc3QgY2FwdHVyZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7CiAgICAgICAgaWYgKHRpbWVvdXQgJiYgdGltZW91dCA+IDApIHsKICAgICAgICAgIHJlc29sdmUoZmFsc2UpOwogICAgICAgIH0KICAgICAgfSwgdGltZW91dCk7CgogICAgICAvLyBpZiBhbGwgcHJvbWlzZXMgcmVzb2x2ZSBpbiB0aW1lLCBjYW5jZWwgdGhlIHRpbWVyIGFuZCByZXNvbHZlIHRvIGB0cnVlYAogICAgICBidWZmZXIuZm9yRWFjaChpdGVtID0+IHsKICAgICAgICB2b2lkIHJlc29sdmVkU3luY1Byb21pc2UoaXRlbSkudGhlbigoKSA9PiB7CiAgICAgICAgICBpZiAoIS0tY291bnRlcikgewogICAgICAgICAgICBjbGVhclRpbWVvdXQoY2FwdHVyZWRTZXRUaW1lb3V0KTsKICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTsKICAgICAgICAgIH0KICAgICAgICB9LCByZWplY3QpOwogICAgICB9KTsKICAgIH0pOwogIH0KCiAgcmV0dXJuIHsKICAgICQ6IGJ1ZmZlciwKICAgIGFkZCwKICAgIGRyYWluLAogIH07Cn0KCmNvbnN0IE9ORV9TRUNPTkRfSU5fTVMgPSAxMDAwOwoKLyoqCiAqIEEgcGFydGlhbCBkZWZpbml0aW9uIG9mIHRoZSBbUGVyZm9ybWFuY2UgV2ViIEFQSV17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1BlcmZvcm1hbmNlfQogKiBmb3IgYWNjZXNzaW5nIGEgaGlnaC1yZXNvbHV0aW9uIG1vbm90b25pYyBjbG9jay4KICovCgovKioKICogUmV0dXJucyBhIHRpbWVzdGFtcCBpbiBzZWNvbmRzIHNpbmNlIHRoZSBVTklYIGVwb2NoIHVzaW5nIHRoZSBEYXRlIEFQSS4KICoKICogVE9ETyh2OCk6IFJldHVybiB0eXBlIHNob3VsZCBiZSByb3VuZGVkLgogKi8KZnVuY3Rpb24gZGF0ZVRpbWVzdGFtcEluU2Vjb25kcygpIHsKICByZXR1cm4gRGF0ZS5ub3coKSAvIE9ORV9TRUNPTkRfSU5fTVM7Cn0KCi8qKgogKiBSZXR1cm5zIGEgd3JhcHBlciBhcm91bmQgdGhlIG5hdGl2ZSBQZXJmb3JtYW5jZSBBUEkgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiwgb3IgdW5kZWZpbmVkIGZvciBicm93c2VycyB0aGF0IGRvIG5vdAogKiBzdXBwb3J0IHRoZSBBUEkuCiAqCiAqIFdyYXBwaW5nIHRoZSBuYXRpdmUgQVBJIHdvcmtzIGFyb3VuZCBkaWZmZXJlbmNlcyBpbiBiZWhhdmlvciBmcm9tIGRpZmZlcmVudCBicm93c2Vycy4KICovCmZ1bmN0aW9uIGNyZWF0ZVVuaXhUaW1lc3RhbXBJblNlY29uZHNGdW5jKCkgewogIGNvbnN0IHsgcGVyZm9ybWFuY2UgfSA9IEdMT0JBTF9PQkogOwogIGlmICghcGVyZm9ybWFuY2UgfHwgIXBlcmZvcm1hbmNlLm5vdykgewogICAgcmV0dXJuIGRhdGVUaW1lc3RhbXBJblNlY29uZHM7CiAgfQoKICAvLyBTb21lIGJyb3dzZXIgYW5kIGVudmlyb25tZW50cyBkb24ndCBoYXZlIGEgdGltZU9yaWdpbiwgc28gd2UgZmFsbGJhY2sgdG8KICAvLyB1c2luZyBEYXRlLm5vdygpIHRvIGNvbXB1dGUgdGhlIHN0YXJ0aW5nIHRpbWUuCiAgY29uc3QgYXBwcm94U3RhcnRpbmdUaW1lT3JpZ2luID0gRGF0ZS5ub3coKSAtIHBlcmZvcm1hbmNlLm5vdygpOwogIGNvbnN0IHRpbWVPcmlnaW4gPSBwZXJmb3JtYW5jZS50aW1lT3JpZ2luID09IHVuZGVmaW5lZCA/IGFwcHJveFN0YXJ0aW5nVGltZU9yaWdpbiA6IHBlcmZvcm1hbmNlLnRpbWVPcmlnaW47CgogIC8vIHBlcmZvcm1hbmNlLm5vdygpIGlzIGEgbW9ub3RvbmljIGNsb2NrLCB3aGljaCBtZWFucyBpdCBzdGFydHMgYXQgMCB3aGVuIHRoZSBwcm9jZXNzIGJlZ2lucy4gVG8gZ2V0IHRoZSBjdXJyZW50CiAgLy8gd2FsbCBjbG9jayB0aW1lIChhY3R1YWwgVU5JWCB0aW1lc3RhbXApLCB3ZSBuZWVkIHRvIGFkZCB0aGUgc3RhcnRpbmcgdGltZSBvcmlnaW4gYW5kIHRoZSBjdXJyZW50IHRpbWUgZWxhcHNlZC4KICAvLwogIC8vIFRPRE86IFRoaXMgZG9lcyBub3QgYWNjb3VudCBmb3IgdGhlIGNhc2Ugd2hlcmUgdGhlIG1vbm90b25pYyBjbG9jayB0aGF0IHBvd2VycyBwZXJmb3JtYW5jZS5ub3coKSBkcmlmdHMgZnJvbSB0aGUKICAvLyB3YWxsIGNsb2NrIHRpbWUsIHdoaWNoIGNhdXNlcyB0aGUgcmV0dXJuZWQgdGltZXN0YW1wIHRvIGJlIGluYWNjdXJhdGUuIFdlIHNob3VsZCBpbnZlc3RpZ2F0ZSBob3cgdG8gZGV0ZWN0IGFuZAogIC8vIGNvcnJlY3QgZm9yIHRoaXMuCiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZ2V0c2VudHJ5L3NlbnRyeS1qYXZhc2NyaXB0L2lzc3Vlcy8yNTkwCiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbWRuL2NvbnRlbnQvaXNzdWVzLzQ3MTMKICAvLyBTZWU6IGh0dHBzOi8vZGV2LnRvL25vYW1yL3doZW4tYS1taWxsaXNlY29uZC1pcy1ub3QtYS1taWxsaXNlY29uZC0zaDYKICByZXR1cm4gKCkgPT4gewogICAgcmV0dXJuICh0aW1lT3JpZ2luICsgcGVyZm9ybWFuY2Uubm93KCkpIC8gT05FX1NFQ09ORF9JTl9NUzsKICB9Owp9CgovKioKICogUmV0dXJucyBhIHRpbWVzdGFtcCBpbiBzZWNvbmRzIHNpbmNlIHRoZSBVTklYIGVwb2NoIHVzaW5nIGVpdGhlciB0aGUgUGVyZm9ybWFuY2Ugb3IgRGF0ZSBBUElzLCBkZXBlbmRpbmcgb24gdGhlCiAqIGF2YWlsYWJpbGl0eSBvZiB0aGUgUGVyZm9ybWFuY2UgQVBJLgogKgogKiBCVUc6IE5vdGUgdGhhdCBiZWNhdXNlIG9mIGhvdyBicm93c2VycyBpbXBsZW1lbnQgdGhlIFBlcmZvcm1hbmNlIEFQSSwgdGhlIGNsb2NrIG1pZ2h0IHN0b3Agd2hlbiB0aGUgY29tcHV0ZXIgaXMKICogYXNsZWVwLiBUaGlzIGNyZWF0ZXMgYSBza2V3IGJldHdlZW4gYGRhdGVUaW1lc3RhbXBJblNlY29uZHNgIGFuZCBgdGltZXN0YW1wSW5TZWNvbmRzYC4gVGhlCiAqIHNrZXcgY2FuIGdyb3cgdG8gYXJiaXRyYXJ5IGFtb3VudHMgbGlrZSBkYXlzLCB3ZWVrcyBvciBtb250aHMuCiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZ2V0c2VudHJ5L3NlbnRyeS1qYXZhc2NyaXB0L2lzc3Vlcy8yNTkwLgogKi8KY29uc3QgdGltZXN0YW1wSW5TZWNvbmRzID0gY3JlYXRlVW5peFRpbWVzdGFtcEluU2Vjb25kc0Z1bmMoKTsKCi8qKgogKiBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBzaW5jZSB0aGUgVU5JWCBlcG9jaC4gVGhpcyB2YWx1ZSBpcyBvbmx5IHVzYWJsZSBpbiBhIGJyb3dzZXIsIGFuZCBvbmx5IHdoZW4gdGhlCiAqIHBlcmZvcm1hbmNlIEFQSSBpcyBhdmFpbGFibGUuCiAqLwooKCkgPT4gewogIC8vIFVuZm9ydHVuYXRlbHkgYnJvd3NlcnMgbWF5IHJlcG9ydCBhbiBpbmFjY3VyYXRlIHRpbWUgb3JpZ2luIGRhdGEsIHRocm91Z2ggZWl0aGVyIHBlcmZvcm1hbmNlLnRpbWVPcmlnaW4gb3IKICAvLyBwZXJmb3JtYW5jZS50aW1pbmcubmF2aWdhdGlvblN0YXJ0LCB3aGljaCByZXN1bHRzIGluIHBvb3IgcmVzdWx0cyBpbiBwZXJmb3JtYW5jZSBkYXRhLiBXZSBvbmx5IHRyZWF0IHRpbWUgb3JpZ2luCiAgLy8gZGF0YSBhcyByZWxpYWJsZSBpZiB0aGV5IGFyZSB3aXRoaW4gYSByZWFzb25hYmxlIHRocmVzaG9sZCBvZiB0aGUgY3VycmVudCB0aW1lLgoKICBjb25zdCB7IHBlcmZvcm1hbmNlIH0gPSBHTE9CQUxfT0JKIDsKICBpZiAoIXBlcmZvcm1hbmNlIHx8ICFwZXJmb3JtYW5jZS5ub3cpIHsKICAgIHJldHVybiB1bmRlZmluZWQ7CiAgfQoKICBjb25zdCB0aHJlc2hvbGQgPSAzNjAwICogMTAwMDsKICBjb25zdCBwZXJmb3JtYW5jZU5vdyA9IHBlcmZvcm1hbmNlLm5vdygpOwogIGNvbnN0IGRhdGVOb3cgPSBEYXRlLm5vdygpOwoKICAvLyBpZiB0aW1lT3JpZ2luIGlzbid0IGF2YWlsYWJsZSBzZXQgZGVsdGEgdG8gdGhyZXNob2xkIHNvIGl0IGlzbid0IHVzZWQKICBjb25zdCB0aW1lT3JpZ2luRGVsdGEgPSBwZXJmb3JtYW5jZS50aW1lT3JpZ2luCiAgICA/IE1hdGguYWJzKHBlcmZvcm1hbmNlLnRpbWVPcmlnaW4gKyBwZXJmb3JtYW5jZU5vdyAtIGRhdGVOb3cpCiAgICA6IHRocmVzaG9sZDsKICBjb25zdCB0aW1lT3JpZ2luSXNSZWxpYWJsZSA9IHRpbWVPcmlnaW5EZWx0YSA8IHRocmVzaG9sZDsKCiAgLy8gV2hpbGUgcGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydCBpcyBkZXByZWNhdGVkIGluIGZhdm9yIG9mIHBlcmZvcm1hbmNlLnRpbWVPcmlnaW4sIHBlcmZvcm1hbmNlLnRpbWVPcmlnaW4KICAvLyBpcyBub3QgYXMgd2lkZWx5IHN1cHBvcnRlZC4gTmFtZWx5LCBwZXJmb3JtYW5jZS50aW1lT3JpZ2luIGlzIHVuZGVmaW5lZCBpbiBTYWZhcmkgYXMgb2Ygd3JpdGluZy4KICAvLyBBbHNvIGFzIG9mIHdyaXRpbmcsIHBlcmZvcm1hbmNlLnRpbWluZyBpcyBub3QgYXZhaWxhYmxlIGluIFdlYiBXb3JrZXJzIGluIG1haW5zdHJlYW0gYnJvd3NlcnMsIHNvIGl0IGlzIG5vdCBhbHdheXMKICAvLyBhIHZhbGlkIGZhbGxiYWNrLiBJbiB0aGUgYWJzZW5jZSBvZiBhbiBpbml0aWFsIHRpbWUgcHJvdmlkZWQgYnkgdGhlIGJyb3dzZXIsIGZhbGxiYWNrIHRvIHRoZSBjdXJyZW50IHRpbWUgZnJvbSB0aGUKICAvLyBEYXRlIEFQSS4KICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICBjb25zdCBuYXZpZ2F0aW9uU3RhcnQgPSBwZXJmb3JtYW5jZS50aW1pbmcgJiYgcGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydDsKICBjb25zdCBoYXNOYXZpZ2F0aW9uU3RhcnQgPSB0eXBlb2YgbmF2aWdhdGlvblN0YXJ0ID09PSAnbnVtYmVyJzsKICAvLyBpZiBuYXZpZ2F0aW9uU3RhcnQgaXNuJ3QgYXZhaWxhYmxlIHNldCBkZWx0YSB0byB0aHJlc2hvbGQgc28gaXQgaXNuJ3QgdXNlZAogIGNvbnN0IG5hdmlnYXRpb25TdGFydERlbHRhID0gaGFzTmF2aWdhdGlvblN0YXJ0ID8gTWF0aC5hYnMobmF2aWdhdGlvblN0YXJ0ICsgcGVyZm9ybWFuY2VOb3cgLSBkYXRlTm93KSA6IHRocmVzaG9sZDsKICBjb25zdCBuYXZpZ2F0aW9uU3RhcnRJc1JlbGlhYmxlID0gbmF2aWdhdGlvblN0YXJ0RGVsdGEgPCB0aHJlc2hvbGQ7CgogIGlmICh0aW1lT3JpZ2luSXNSZWxpYWJsZSB8fCBuYXZpZ2F0aW9uU3RhcnRJc1JlbGlhYmxlKSB7CiAgICAvLyBVc2UgdGhlIG1vcmUgcmVsaWFibGUgdGltZSBvcmlnaW4KICAgIGlmICh0aW1lT3JpZ2luRGVsdGEgPD0gbmF2aWdhdGlvblN0YXJ0RGVsdGEpIHsKICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLnRpbWVPcmlnaW47CiAgICB9IGVsc2UgewogICAgICByZXR1cm4gbmF2aWdhdGlvblN0YXJ0OwogICAgfQogIH0KICByZXR1cm4gZGF0ZU5vdzsKfSkoKTsKCi8qKgogKiBDcmVhdGVzIGFuIGVudmVsb3BlLgogKiBNYWtlIHN1cmUgdG8gYWx3YXlzIGV4cGxpY2l0bHkgcHJvdmlkZSB0aGUgZ2VuZXJpYyB0byB0aGlzIGZ1bmN0aW9uCiAqIHNvIHRoYXQgdGhlIGVudmVsb3BlIHR5cGVzIHJlc29sdmUgY29ycmVjdGx5LgogKi8KZnVuY3Rpb24gY3JlYXRlRW52ZWxvcGUoaGVhZGVycywgaXRlbXMgPSBbXSkgewogIHJldHVybiBbaGVhZGVycywgaXRlbXNdIDsKfQoKLyoqCiAqIENvbnZlbmllbmNlIGZ1bmN0aW9uIHRvIGxvb3AgdGhyb3VnaCB0aGUgaXRlbXMgYW5kIGl0ZW0gdHlwZXMgb2YgYW4gZW52ZWxvcGUuCiAqIChUaGlzIGZ1bmN0aW9uIHdhcyBtb3N0bHkgY3JlYXRlZCBiZWNhdXNlIHdvcmtpbmcgd2l0aCBlbnZlbG9wZSB0eXBlcyBpcyBwYWluZnVsIGF0IHRoZSBtb21lbnQpCiAqCiAqIElmIHRoZSBjYWxsYmFjayByZXR1cm5zIHRydWUsIHRoZSByZXN0IG9mIHRoZSBpdGVtcyB3aWxsIGJlIHNraXBwZWQuCiAqLwpmdW5jdGlvbiBmb3JFYWNoRW52ZWxvcGVJdGVtKAogIGVudmVsb3BlLAogIGNhbGxiYWNrLAopIHsKICBjb25zdCBlbnZlbG9wZUl0ZW1zID0gZW52ZWxvcGVbMV07CgogIGZvciAoY29uc3QgZW52ZWxvcGVJdGVtIG9mIGVudmVsb3BlSXRlbXMpIHsKICAgIGNvbnN0IGVudmVsb3BlSXRlbVR5cGUgPSBlbnZlbG9wZUl0ZW1bMF0udHlwZTsKICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGVudmVsb3BlSXRlbSwgZW52ZWxvcGVJdGVtVHlwZSk7CgogICAgaWYgKHJlc3VsdCkgewogICAgICByZXR1cm4gdHJ1ZTsKICAgIH0KICB9CgogIHJldHVybiBmYWxzZTsKfQoKLyoqCiAqIEVuY29kZSBhIHN0cmluZyB0byBVVEY4LgogKi8KZnVuY3Rpb24gZW5jb2RlVVRGOChpbnB1dCwgdGV4dEVuY29kZXIpIHsKICBjb25zdCB1dGY4ID0gdGV4dEVuY29kZXIgfHwgbmV3IFRleHRFbmNvZGVyKCk7CiAgcmV0dXJuIHV0ZjguZW5jb2RlKGlucHV0KTsKfQoKLyoqCiAqIFNlcmlhbGl6ZXMgYW4gZW52ZWxvcGUuCiAqLwpmdW5jdGlvbiBzZXJpYWxpemVFbnZlbG9wZShlbnZlbG9wZSwgdGV4dEVuY29kZXIpIHsKICBjb25zdCBbZW52SGVhZGVycywgaXRlbXNdID0gZW52ZWxvcGU7CgogIC8vIEluaXRpYWxseSB3ZSBjb25zdHJ1Y3Qgb3VyIGVudmVsb3BlIGFzIGEgc3RyaW5nIGFuZCBvbmx5IGNvbnZlcnQgdG8gYmluYXJ5IGNodW5rcyBpZiB3ZSBlbmNvdW50ZXIgYmluYXJ5IGRhdGEKICBsZXQgcGFydHMgPSBKU09OLnN0cmluZ2lmeShlbnZIZWFkZXJzKTsKCiAgZnVuY3Rpb24gYXBwZW5kKG5leHQpIHsKICAgIGlmICh0eXBlb2YgcGFydHMgPT09ICdzdHJpbmcnKSB7CiAgICAgIHBhcnRzID0gdHlwZW9mIG5leHQgPT09ICdzdHJpbmcnID8gcGFydHMgKyBuZXh0IDogW2VuY29kZVVURjgocGFydHMsIHRleHRFbmNvZGVyKSwgbmV4dF07CiAgICB9IGVsc2UgewogICAgICBwYXJ0cy5wdXNoKHR5cGVvZiBuZXh0ID09PSAnc3RyaW5nJyA/IGVuY29kZVVURjgobmV4dCwgdGV4dEVuY29kZXIpIDogbmV4dCk7CiAgICB9CiAgfQoKICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHsKICAgIGNvbnN0IFtpdGVtSGVhZGVycywgcGF5bG9hZF0gPSBpdGVtOwoKICAgIGFwcGVuZChgXG4ke0pTT04uc3RyaW5naWZ5KGl0ZW1IZWFkZXJzKX1cbmApOwoKICAgIGlmICh0eXBlb2YgcGF5bG9hZCA9PT0gJ3N0cmluZycgfHwgcGF5bG9hZCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHsKICAgICAgYXBwZW5kKHBheWxvYWQpOwogICAgfSBlbHNlIHsKICAgICAgbGV0IHN0cmluZ2lmaWVkUGF5bG9hZDsKICAgICAgdHJ5IHsKICAgICAgICBzdHJpbmdpZmllZFBheWxvYWQgPSBKU09OLnN0cmluZ2lmeShwYXlsb2FkKTsKICAgICAgfSBjYXRjaCAoZSkgewogICAgICAgIC8vIEluIGNhc2UsIGRlc3BpdGUgYWxsIG91ciBlZmZvcnRzIHRvIGtlZXAgYHBheWxvYWRgIGNpcmN1bGFyLWRlcGVuZGVuY3ktZnJlZSwgYEpTT04uc3RyaW5pZnkoKWAgc3RpbGwKICAgICAgICAvLyBmYWlscywgd2UgdHJ5IGFnYWluIGFmdGVyIG5vcm1hbGl6aW5nIGl0IGFnYWluIHdpdGggaW5maW5pdGUgbm9ybWFsaXphdGlvbiBkZXB0aC4gVGhpcyBvZiBjb3Vyc2UgaGFzIGEKICAgICAgICAvLyBwZXJmb3JtYW5jZSBpbXBhY3QgYnV0IGluIHRoaXMgY2FzZSBhIHBlcmZvcm1hbmNlIGhpdCBpcyBiZXR0ZXIgdGhhbiB0aHJvd2luZy4KICAgICAgICBzdHJpbmdpZmllZFBheWxvYWQgPSBKU09OLnN0cmluZ2lmeShub3JtYWxpemUocGF5bG9hZCkpOwogICAgICB9CiAgICAgIGFwcGVuZChzdHJpbmdpZmllZFBheWxvYWQpOwogICAgfQogIH0KCiAgcmV0dXJuIHR5cGVvZiBwYXJ0cyA9PT0gJ3N0cmluZycgPyBwYXJ0cyA6IGNvbmNhdEJ1ZmZlcnMocGFydHMpOwp9CgpmdW5jdGlvbiBjb25jYXRCdWZmZXJzKGJ1ZmZlcnMpIHsKICBjb25zdCB0b3RhbExlbmd0aCA9IGJ1ZmZlcnMucmVkdWNlKChhY2MsIGJ1ZikgPT4gYWNjICsgYnVmLmxlbmd0aCwgMCk7CgogIGNvbnN0IG1lcmdlZCA9IG5ldyBVaW50OEFycmF5KHRvdGFsTGVuZ3RoKTsKICBsZXQgb2Zmc2V0ID0gMDsKICBmb3IgKGNvbnN0IGJ1ZmZlciBvZiBidWZmZXJzKSB7CiAgICBtZXJnZWQuc2V0KGJ1ZmZlciwgb2Zmc2V0KTsKICAgIG9mZnNldCArPSBidWZmZXIubGVuZ3RoOwogIH0KCiAgcmV0dXJuIG1lcmdlZDsKfQoKY29uc3QgSVRFTV9UWVBFX1RPX0RBVEFfQ0FURUdPUllfTUFQID0gewogIHNlc3Npb246ICdzZXNzaW9uJywKICBzZXNzaW9uczogJ3Nlc3Npb24nLAogIGF0dGFjaG1lbnQ6ICdhdHRhY2htZW50JywKICB0cmFuc2FjdGlvbjogJ3RyYW5zYWN0aW9uJywKICBldmVudDogJ2Vycm9yJywKICBjbGllbnRfcmVwb3J0OiAnaW50ZXJuYWwnLAogIHVzZXJfcmVwb3J0OiAnZGVmYXVsdCcsCiAgcHJvZmlsZTogJ3Byb2ZpbGUnLAogIHJlcGxheV9ldmVudDogJ3JlcGxheScsCiAgcmVwbGF5X3JlY29yZGluZzogJ3JlcGxheScsCiAgY2hlY2tfaW46ICdtb25pdG9yJywKICBmZWVkYmFjazogJ2ZlZWRiYWNrJywKICBzcGFuOiAnc3BhbicsCiAgc3RhdHNkOiAnbWV0cmljX2J1Y2tldCcsCn07CgovKioKICogTWFwcyB0aGUgdHlwZSBvZiBhbiBlbnZlbG9wZSBpdGVtIHRvIGEgZGF0YSBjYXRlZ29yeS4KICovCmZ1bmN0aW9uIGVudmVsb3BlSXRlbVR5cGVUb0RhdGFDYXRlZ29yeSh0eXBlKSB7CiAgcmV0dXJuIElURU1fVFlQRV9UT19EQVRBX0NBVEVHT1JZX01BUFt0eXBlXTsKfQoKLyoqIEV4dHJhY3RzIHRoZSBtaW5pbWFsIFNESyBpbmZvIGZyb20gdGhlIG1ldGFkYXRhIG9yIGFuIGV2ZW50cyAqLwpmdW5jdGlvbiBnZXRTZGtNZXRhZGF0YUZvckVudmVsb3BlSGVhZGVyKG1ldGFkYXRhT3JFdmVudCkgewogIGlmICghbWV0YWRhdGFPckV2ZW50IHx8ICFtZXRhZGF0YU9yRXZlbnQuc2RrKSB7CiAgICByZXR1cm47CiAgfQogIGNvbnN0IHsgbmFtZSwgdmVyc2lvbiB9ID0gbWV0YWRhdGFPckV2ZW50LnNkazsKICByZXR1cm4geyBuYW1lLCB2ZXJzaW9uIH07Cn0KCi8qKgogKiBDcmVhdGVzIGV2ZW50IGVudmVsb3BlIGhlYWRlcnMsIGJhc2VkIG9uIGV2ZW50LCBzZGsgaW5mbyBhbmQgdHVubmVsCiAqIE5vdGU6IFRoaXMgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBmcm9tIHRoZSBjb3JlIHBhY2thZ2UgdG8gbWFrZSBpdCBhdmFpbGFibGUgaW4gUmVwbGF5CiAqLwpmdW5jdGlvbiBjcmVhdGVFdmVudEVudmVsb3BlSGVhZGVycygKICBldmVudCwKICBzZGtJbmZvLAogIHR1bm5lbCwKICBkc24sCikgewogIGNvbnN0IGR5bmFtaWNTYW1wbGluZ0NvbnRleHQgPSBldmVudC5zZGtQcm9jZXNzaW5nTWV0YWRhdGEgJiYgZXZlbnQuc2RrUHJvY2Vzc2luZ01ldGFkYXRhLmR5bmFtaWNTYW1wbGluZ0NvbnRleHQ7CiAgcmV0dXJuIHsKICAgIGV2ZW50X2lkOiBldmVudC5ldmVudF9pZCAsCiAgICBzZW50X2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksCiAgICAuLi4oc2RrSW5mbyAmJiB7IHNkazogc2RrSW5mbyB9KSwKICAgIC4uLighIXR1bm5lbCAmJiBkc24gJiYgeyBkc246IGRzblRvU3RyaW5nKGRzbikgfSksCiAgICAuLi4oZHluYW1pY1NhbXBsaW5nQ29udGV4dCAmJiB7CiAgICAgIHRyYWNlOiBkcm9wVW5kZWZpbmVkS2V5cyh7IC4uLmR5bmFtaWNTYW1wbGluZ0NvbnRleHQgfSksCiAgICB9KSwKICB9Owp9CgovLyBJbnRlbnRpb25hbGx5IGtlZXBpbmcgdGhlIGtleSBicm9hZCwgYXMgd2UgZG9uJ3Qga25vdyBmb3Igc3VyZSB3aGF0IHJhdGUgbGltaXQgaGVhZGVycyBnZXQgcmV0dXJuZWQgZnJvbSBiYWNrZW5kCgpjb25zdCBERUZBVUxUX1JFVFJZX0FGVEVSID0gNjAgKiAxMDAwOyAvLyA2MCBzZWNvbmRzCgovKioKICogRXh0cmFjdHMgUmV0cnktQWZ0ZXIgdmFsdWUgZnJvbSB0aGUgcmVxdWVzdCBoZWFkZXIgb3IgcmV0dXJucyBkZWZhdWx0IHZhbHVlCiAqIEBwYXJhbSBoZWFkZXIgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mICdSZXRyeS1BZnRlcicgaGVhZGVyCiAqIEBwYXJhbSBub3cgY3VycmVudCB1bml4IHRpbWVzdGFtcAogKgogKi8KZnVuY3Rpb24gcGFyc2VSZXRyeUFmdGVySGVhZGVyKGhlYWRlciwgbm93ID0gRGF0ZS5ub3coKSkgewogIGNvbnN0IGhlYWRlckRlbGF5ID0gcGFyc2VJbnQoYCR7aGVhZGVyfWAsIDEwKTsKICBpZiAoIWlzTmFOKGhlYWRlckRlbGF5KSkgewogICAgcmV0dXJuIGhlYWRlckRlbGF5ICogMTAwMDsKICB9CgogIGNvbnN0IGhlYWRlckRhdGUgPSBEYXRlLnBhcnNlKGAke2hlYWRlcn1gKTsKICBpZiAoIWlzTmFOKGhlYWRlckRhdGUpKSB7CiAgICByZXR1cm4gaGVhZGVyRGF0ZSAtIG5vdzsKICB9CgogIHJldHVybiBERUZBVUxUX1JFVFJZX0FGVEVSOwp9CgovKioKICogR2V0cyB0aGUgdGltZSB0aGF0IHRoZSBnaXZlbiBjYXRlZ29yeSBpcyBkaXNhYmxlZCB1bnRpbCBmb3IgcmF0ZSBsaW1pdGluZy4KICogSW4gY2FzZSBubyBjYXRlZ29yeS1zcGVjaWZpYyBsaW1pdCBpcyBzZXQgYnV0IGEgZ2VuZXJhbCByYXRlIGxpbWl0IGFjcm9zcyBhbGwgY2F0ZWdvcmllcyBpcyBhY3RpdmUsCiAqIHRoYXQgdGltZSBpcyByZXR1cm5lZC4KICoKICogQHJldHVybiB0aGUgdGltZSBpbiBtcyB0aGF0IHRoZSBjYXRlZ29yeSBpcyBkaXNhYmxlZCB1bnRpbCBvciAwIGlmIHRoZXJlJ3Mgbm8gYWN0aXZlIHJhdGUgbGltaXQuCiAqLwpmdW5jdGlvbiBkaXNhYmxlZFVudGlsKGxpbWl0cywgZGF0YUNhdGVnb3J5KSB7CiAgcmV0dXJuIGxpbWl0c1tkYXRhQ2F0ZWdvcnldIHx8IGxpbWl0cy5hbGwgfHwgMDsKfQoKLyoqCiAqIENoZWNrcyBpZiBhIGNhdGVnb3J5IGlzIHJhdGUgbGltaXRlZAogKi8KZnVuY3Rpb24gaXNSYXRlTGltaXRlZChsaW1pdHMsIGRhdGFDYXRlZ29yeSwgbm93ID0gRGF0ZS5ub3coKSkgewogIHJldHVybiBkaXNhYmxlZFVudGlsKGxpbWl0cywgZGF0YUNhdGVnb3J5KSA+IG5vdzsKfQoKLyoqCiAqIFVwZGF0ZSByYXRlbGltaXRzIGZyb20gaW5jb21pbmcgaGVhZGVycy4KICoKICogQHJldHVybiB0aGUgdXBkYXRlZCBSYXRlTGltaXRzIG9iamVjdC4KICovCmZ1bmN0aW9uIHVwZGF0ZVJhdGVMaW1pdHMoCiAgbGltaXRzLAogIHsgc3RhdHVzQ29kZSwgaGVhZGVycyB9LAogIG5vdyA9IERhdGUubm93KCksCikgewogIGNvbnN0IHVwZGF0ZWRSYXRlTGltaXRzID0gewogICAgLi4ubGltaXRzLAogIH07CgogIC8vICJUaGUgbmFtZSBpcyBjYXNlLWluc2Vuc2l0aXZlLiIKICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGVhZGVycy9nZXQKICBjb25zdCByYXRlTGltaXRIZWFkZXIgPSBoZWFkZXJzICYmIGhlYWRlcnNbJ3gtc2VudHJ5LXJhdGUtbGltaXRzJ107CiAgY29uc3QgcmV0cnlBZnRlckhlYWRlciA9IGhlYWRlcnMgJiYgaGVhZGVyc1sncmV0cnktYWZ0ZXInXTsKCiAgaWYgKHJhdGVMaW1pdEhlYWRlcikgewogICAgLyoqCiAgICAgKiByYXRlIGxpbWl0IGhlYWRlcnMgYXJlIG9mIHRoZSBmb3JtCiAgICAgKiAgICAgPGhlYWRlcj4sPGhlYWRlcj4sLi4KICAgICAqIHdoZXJlIGVhY2ggPGhlYWRlcj4gaXMgb2YgdGhlIGZvcm0KICAgICAqICAgICA8cmV0cnlfYWZ0ZXI+OiA8Y2F0ZWdvcmllcz46IDxzY29wZT46IDxyZWFzb25fY29kZT46IDxuYW1lc3BhY2VzPgogICAgICogd2hlcmUKICAgICAqICAgICA8cmV0cnlfYWZ0ZXI+IGlzIGEgZGVsYXkgaW4gc2Vjb25kcwogICAgICogICAgIDxjYXRlZ29yaWVzPiBpcyB0aGUgZXZlbnQgdHlwZShzKSAoZXJyb3IsIHRyYW5zYWN0aW9uLCBldGMpIGJlaW5nIHJhdGUgbGltaXRlZCBhbmQgaXMgb2YgdGhlIGZvcm0KICAgICAqICAgICAgICAgPGNhdGVnb3J5Pjs8Y2F0ZWdvcnk+Oy4uLgogICAgICogICAgIDxzY29wZT4gaXMgd2hhdCdzIGJlaW5nIGxpbWl0ZWQgKG9yZywgcHJvamVjdCwgb3Iga2V5KSAtIGlnbm9yZWQgYnkgU0RLCiAgICAgKiAgICAgPHJlYXNvbl9jb2RlPiBpcyBhbiBhcmJpdHJhcnkgc3RyaW5nIGxpa2UgIm9yZ19xdW90YSIgLSBpZ25vcmVkIGJ5IFNESwogICAgICogICAgIDxuYW1lc3BhY2VzPiBTZW1pY29sb24tc2VwYXJhdGVkIGxpc3Qgb2YgbWV0cmljIG5hbWVzcGFjZSBpZGVudGlmaWVycy4gRGVmaW5lcyB3aGljaCBuYW1lc3BhY2Uocykgd2lsbCBiZSBhZmZlY3RlZC4KICAgICAqICAgICAgICAgT25seSBwcmVzZW50IGlmIHJhdGUgbGltaXQgYXBwbGllcyB0byB0aGUgbWV0cmljX2J1Y2tldCBkYXRhIGNhdGVnb3J5LgogICAgICovCiAgICBmb3IgKGNvbnN0IGxpbWl0IG9mIHJhdGVMaW1pdEhlYWRlci50cmltKCkuc3BsaXQoJywnKSkgewogICAgICBjb25zdCBbcmV0cnlBZnRlciwgY2F0ZWdvcmllcywgLCAsIG5hbWVzcGFjZXNdID0gbGltaXQuc3BsaXQoJzonLCA1KTsKICAgICAgY29uc3QgaGVhZGVyRGVsYXkgPSBwYXJzZUludChyZXRyeUFmdGVyLCAxMCk7CiAgICAgIGNvbnN0IGRlbGF5ID0gKCFpc05hTihoZWFkZXJEZWxheSkgPyBoZWFkZXJEZWxheSA6IDYwKSAqIDEwMDA7IC8vIDYwc2VjIGRlZmF1bHQKICAgICAgaWYgKCFjYXRlZ29yaWVzKSB7CiAgICAgICAgdXBkYXRlZFJhdGVMaW1pdHMuYWxsID0gbm93ICsgZGVsYXk7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgZm9yIChjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzLnNwbGl0KCc7JykpIHsKICAgICAgICAgIGlmIChjYXRlZ29yeSA9PT0gJ21ldHJpY19idWNrZXQnKSB7CiAgICAgICAgICAgIC8vIG5hbWVzcGFjZXMgd2lsbCBiZSBwcmVzZW50IHdoZW4gY2F0ZWdvcnkgPT09ICdtZXRyaWNfYnVja2V0JwogICAgICAgICAgICBpZiAoIW5hbWVzcGFjZXMgfHwgbmFtZXNwYWNlcy5zcGxpdCgnOycpLmluY2x1ZGVzKCdjdXN0b20nKSkgewogICAgICAgICAgICAgIHVwZGF0ZWRSYXRlTGltaXRzW2NhdGVnb3J5XSA9IG5vdyArIGRlbGF5OwogICAgICAgICAgICB9CiAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICB1cGRhdGVkUmF0ZUxpbWl0c1tjYXRlZ29yeV0gPSBub3cgKyBkZWxheTsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0KICAgIH0KICB9IGVsc2UgaWYgKHJldHJ5QWZ0ZXJIZWFkZXIpIHsKICAgIHVwZGF0ZWRSYXRlTGltaXRzLmFsbCA9IG5vdyArIHBhcnNlUmV0cnlBZnRlckhlYWRlcihyZXRyeUFmdGVySGVhZGVyLCBub3cpOwogIH0gZWxzZSBpZiAoc3RhdHVzQ29kZSA9PT0gNDI5KSB7CiAgICB1cGRhdGVkUmF0ZUxpbWl0cy5hbGwgPSBub3cgKyA2MCAqIDEwMDA7CiAgfQoKICByZXR1cm4gdXBkYXRlZFJhdGVMaW1pdHM7Cn0KCi8qKgogKiBBIG5vZGUuanMgd2F0Y2hkb2cgdGltZXIKICogQHBhcmFtIHBvbGxJbnRlcnZhbCBUaGUgaW50ZXJ2YWwgdGhhdCB3ZSBleHBlY3QgdG8gZ2V0IHBvbGxlZCBhdAogKiBAcGFyYW0gYW5yVGhyZXNob2xkIFRoZSB0aHJlc2hvbGQgZm9yIHdoZW4gd2UgY29uc2lkZXIgQU5SCiAqIEBwYXJhbSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgdG8gY2FsbCBmb3IgQU5SCiAqIEByZXR1cm5zIEFuIG9iamVjdCB3aXRoIGBwb2xsYCBhbmQgYGVuYWJsZWRgIGZ1bmN0aW9ucyB7QGxpbmsgV2F0Y2hkb2dSZXR1cm59CiAqLwpmdW5jdGlvbiB3YXRjaGRvZ1RpbWVyKAogIGNyZWF0ZVRpbWVyLAogIHBvbGxJbnRlcnZhbCwKICBhbnJUaHJlc2hvbGQsCiAgY2FsbGJhY2ssCikgewogIGNvbnN0IHRpbWVyID0gY3JlYXRlVGltZXIoKTsKICBsZXQgdHJpZ2dlcmVkID0gZmFsc2U7CiAgbGV0IGVuYWJsZWQgPSB0cnVlOwoKICBzZXRJbnRlcnZhbCgoKSA9PiB7CiAgICBjb25zdCBkaWZmTXMgPSB0aW1lci5nZXRUaW1lTXMoKTsKCiAgICBpZiAodHJpZ2dlcmVkID09PSBmYWxzZSAmJiBkaWZmTXMgPiBwb2xsSW50ZXJ2YWwgKyBhbnJUaHJlc2hvbGQpIHsKICAgICAgdHJpZ2dlcmVkID0gdHJ1ZTsKICAgICAgaWYgKGVuYWJsZWQpIHsKICAgICAgICBjYWxsYmFjaygpOwogICAgICB9CiAgICB9CgogICAgaWYgKGRpZmZNcyA8IHBvbGxJbnRlcnZhbCArIGFuclRocmVzaG9sZCkgewogICAgICB0cmlnZ2VyZWQgPSBmYWxzZTsKICAgIH0KICB9LCAyMCk7CgogIHJldHVybiB7CiAgICBwb2xsOiAoKSA9PiB7CiAgICAgIHRpbWVyLnJlc2V0KCk7CiAgICB9LAogICAgZW5hYmxlZDogKHN0YXRlKSA9PiB7CiAgICAgIGVuYWJsZWQgPSBzdGF0ZTsKICAgIH0sCiAgfTsKfQoKLy8gdHlwZXMgY29waWVkIGZyb20gaW5zcGVjdG9yLmQudHMKCi8qKgogKiBDb252ZXJ0cyBEZWJ1Z2dlci5DYWxsRnJhbWUgdG8gU2VudHJ5IFN0YWNrRnJhbWUKICovCmZ1bmN0aW9uIGNhbGxGcmFtZVRvU3RhY2tGcmFtZSgKICBmcmFtZSwKICB1cmwsCiAgZ2V0TW9kdWxlRnJvbUZpbGVuYW1lLAopIHsKICBjb25zdCBmaWxlbmFtZSA9IHVybCA/IHVybC5yZXBsYWNlKC9eZmlsZTpcL1wvLywgJycpIDogdW5kZWZpbmVkOwoKICAvLyBDYWxsRnJhbWUgcm93L2NvbCBhcmUgMCBiYXNlZCwgd2hlcmVhcyBTdGFja0ZyYW1lIGFyZSAxIGJhc2VkCiAgY29uc3QgY29sbm8gPSBmcmFtZS5sb2NhdGlvbi5jb2x1bW5OdW1iZXIgPyBmcmFtZS5sb2NhdGlvbi5jb2x1bW5OdW1iZXIgKyAxIDogdW5kZWZpbmVkOwogIGNvbnN0IGxpbmVubyA9IGZyYW1lLmxvY2F0aW9uLmxpbmVOdW1iZXIgPyBmcmFtZS5sb2NhdGlvbi5saW5lTnVtYmVyICsgMSA6IHVuZGVmaW5lZDsKCiAgcmV0dXJuIGRyb3BVbmRlZmluZWRLZXlzKHsKICAgIGZpbGVuYW1lLAogICAgbW9kdWxlOiBnZXRNb2R1bGVGcm9tRmlsZW5hbWUoZmlsZW5hbWUpLAogICAgZnVuY3Rpb246IGZyYW1lLmZ1bmN0aW9uTmFtZSB8fCAnPycsCiAgICBjb2xubywKICAgIGxpbmVubywKICAgIGluX2FwcDogZmlsZW5hbWUgPyBmaWxlbmFtZUlzSW5BcHAoZmlsZW5hbWUpIDogdW5kZWZpbmVkLAogIH0pOwp9CgovKioKICogVGhpcyBzZXJ2ZXMgYXMgYSBidWlsZCB0aW1lIGZsYWcgdGhhdCB3aWxsIGJlIHRydWUgYnkgZGVmYXVsdCwgYnV0IGZhbHNlIGluIG5vbi1kZWJ1ZyBidWlsZHMgb3IgaWYgdXNlcnMgcmVwbGFjZSBgX19TRU5UUllfREVCVUdfX2AgaW4gdGhlaXIgZ2VuZXJhdGVkIGNvZGUuCiAqCiAqIEFUVEVOVElPTjogVGhpcyBjb25zdGFudCBtdXN0IG5ldmVyIGNyb3NzIHBhY2thZ2UgYm91bmRhcmllcyAoaS5lLiBiZSBleHBvcnRlZCkgdG8gZ3VhcmFudGVlIHRoYXQgaXQgY2FuIGJlIHVzZWQgZm9yIHRyZWUgc2hha2luZy4KICovCmNvbnN0IERFQlVHX0JVSUxEID0gKHR5cGVvZiBfX1NFTlRSWV9ERUJVR19fID09PSAndW5kZWZpbmVkJyB8fCBfX1NFTlRSWV9ERUJVR19fKTsKCmNvbnN0IERFRkFVTFRfRU5WSVJPTk1FTlQgPSAncHJvZHVjdGlvbic7CgovKioKICogUmV0dXJucyB0aGUgZ2xvYmFsIGV2ZW50IHByb2Nlc3NvcnMuCiAqIEBkZXByZWNhdGVkIEdsb2JhbCBldmVudCBwcm9jZXNzb3JzIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4KICovCmZ1bmN0aW9uIGdldEdsb2JhbEV2ZW50UHJvY2Vzc29ycygpIHsKICByZXR1cm4gZ2V0R2xvYmFsU2luZ2xldG9uKCdnbG9iYWxFdmVudFByb2Nlc3NvcnMnLCAoKSA9PiBbXSk7Cn0KCi8qKgogKiBQcm9jZXNzIGFuIGFycmF5IG9mIGV2ZW50IHByb2Nlc3NvcnMsIHJldHVybmluZyB0aGUgcHJvY2Vzc2VkIGV2ZW50IChvciBgbnVsbGAgaWYgdGhlIGV2ZW50IHdhcyBkcm9wcGVkKS4KICovCmZ1bmN0aW9uIG5vdGlmeUV2ZW50UHJvY2Vzc29ycygKICBwcm9jZXNzb3JzLAogIGV2ZW50LAogIGhpbnQsCiAgaW5kZXggPSAwLAopIHsKICByZXR1cm4gbmV3IFN5bmNQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHsKICAgIGNvbnN0IHByb2Nlc3NvciA9IHByb2Nlc3NvcnNbaW5kZXhdOwogICAgaWYgKGV2ZW50ID09PSBudWxsIHx8IHR5cGVvZiBwcm9jZXNzb3IgIT09ICdmdW5jdGlvbicpIHsKICAgICAgcmVzb2x2ZShldmVudCk7CiAgICB9IGVsc2UgewogICAgICBjb25zdCByZXN1bHQgPSBwcm9jZXNzb3IoeyAuLi5ldmVudCB9LCBoaW50KSA7CgogICAgICBERUJVR19CVUlMRCAmJiBwcm9jZXNzb3IuaWQgJiYgcmVzdWx0ID09PSBudWxsICYmIGxvZ2dlci5sb2coYEV2ZW50IHByb2Nlc3NvciAiJHtwcm9jZXNzb3IuaWR9IiBkcm9wcGVkIGV2ZW50YCk7CgogICAgICBpZiAoaXNUaGVuYWJsZShyZXN1bHQpKSB7CiAgICAgICAgdm9pZCByZXN1bHQKICAgICAgICAgIC50aGVuKGZpbmFsID0+IG5vdGlmeUV2ZW50UHJvY2Vzc29ycyhwcm9jZXNzb3JzLCBmaW5hbCwgaGludCwgaW5kZXggKyAxKS50aGVuKHJlc29sdmUpKQogICAgICAgICAgLnRoZW4obnVsbCwgcmVqZWN0KTsKICAgICAgfSBlbHNlIHsKICAgICAgICB2b2lkIG5vdGlmeUV2ZW50UHJvY2Vzc29ycyhwcm9jZXNzb3JzLCByZXN1bHQsIGhpbnQsIGluZGV4ICsgMSkKICAgICAgICAgIC50aGVuKHJlc29sdmUpCiAgICAgICAgICAudGhlbihudWxsLCByZWplY3QpOwogICAgICB9CiAgICB9CiAgfSk7Cn0KCi8qKgogKiBDcmVhdGVzIGEgbmV3IGBTZXNzaW9uYCBvYmplY3QgYnkgc2V0dGluZyBjZXJ0YWluIGRlZmF1bHQgcGFyYW1ldGVycy4gSWYgb3B0aW9uYWwgQHBhcmFtIGNvbnRleHQKICogaXMgcGFzc2VkLCB0aGUgcGFzc2VkIHByb3BlcnRpZXMgYXJlIGFwcGxpZWQgdG8gdGhlIHNlc3Npb24gb2JqZWN0LgogKgogKiBAcGFyYW0gY29udGV4dCAob3B0aW9uYWwpIGFkZGl0aW9uYWwgcHJvcGVydGllcyB0byBiZSBhcHBsaWVkIHRvIHRoZSByZXR1cm5lZCBzZXNzaW9uIG9iamVjdAogKgogKiBAcmV0dXJucyBhIG5ldyBgU2Vzc2lvbmAgb2JqZWN0CiAqLwpmdW5jdGlvbiBtYWtlU2Vzc2lvbihjb250ZXh0KSB7CiAgLy8gQm90aCB0aW1lc3RhbXAgYW5kIHN0YXJ0ZWQgYXJlIGluIHNlY29uZHMgc2luY2UgdGhlIFVOSVggZXBvY2guCiAgY29uc3Qgc3RhcnRpbmdUaW1lID0gdGltZXN0YW1wSW5TZWNvbmRzKCk7CgogIGNvbnN0IHNlc3Npb24gPSB7CiAgICBzaWQ6IHV1aWQ0KCksCiAgICBpbml0OiB0cnVlLAogICAgdGltZXN0YW1wOiBzdGFydGluZ1RpbWUsCiAgICBzdGFydGVkOiBzdGFydGluZ1RpbWUsCiAgICBkdXJhdGlvbjogMCwKICAgIHN0YXR1czogJ29rJywKICAgIGVycm9yczogMCwKICAgIGlnbm9yZUR1cmF0aW9uOiBmYWxzZSwKICAgIHRvSlNPTjogKCkgPT4gc2Vzc2lvblRvSlNPTihzZXNzaW9uKSwKICB9OwoKICBpZiAoY29udGV4dCkgewogICAgdXBkYXRlU2Vzc2lvbihzZXNzaW9uLCBjb250ZXh0KTsKICB9CgogIHJldHVybiBzZXNzaW9uOwp9CgovKioKICogVXBkYXRlcyBhIHNlc3Npb24gb2JqZWN0IHdpdGggdGhlIHByb3BlcnRpZXMgcGFzc2VkIGluIHRoZSBjb250ZXh0LgogKgogKiBOb3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBtdXRhdGVzIHRoZSBwYXNzZWQgb2JqZWN0IGFuZCByZXR1cm5zIHZvaWQuCiAqIChIYWQgdG8gZG8gdGhpcyBpbnN0ZWFkIG9mIHJldHVybmluZyBhIG5ldyBhbmQgdXBkYXRlZCBzZXNzaW9uIGJlY2F1c2UgY2xvc2luZyBhbmQgc2VuZGluZyBhIHNlc3Npb24KICogbWFrZXMgYW4gdXBkYXRlIHRvIHRoZSBzZXNzaW9uIGFmdGVyIGl0IHdhcyBwYXNzZWQgdG8gdGhlIHNlbmRpbmcgbG9naWMuCiAqIEBzZWUgQmFzZUNsaWVudC5jYXB0dXJlU2Vzc2lvbiApCiAqCiAqIEBwYXJhbSBzZXNzaW9uIHRoZSBgU2Vzc2lvbmAgdG8gdXBkYXRlCiAqIEBwYXJhbSBjb250ZXh0IHRoZSBgU2Vzc2lvbkNvbnRleHRgIGhvbGRpbmcgdGhlIHByb3BlcnRpZXMgdGhhdCBzaG91bGQgYmUgdXBkYXRlZCBpbiBAcGFyYW0gc2Vzc2lvbgogKi8KLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHkKZnVuY3Rpb24gdXBkYXRlU2Vzc2lvbihzZXNzaW9uLCBjb250ZXh0ID0ge30pIHsKICBpZiAoY29udGV4dC51c2VyKSB7CiAgICBpZiAoIXNlc3Npb24uaXBBZGRyZXNzICYmIGNvbnRleHQudXNlci5pcF9hZGRyZXNzKSB7CiAgICAgIHNlc3Npb24uaXBBZGRyZXNzID0gY29udGV4dC51c2VyLmlwX2FkZHJlc3M7CiAgICB9CgogICAgaWYgKCFzZXNzaW9uLmRpZCAmJiAhY29udGV4dC5kaWQpIHsKICAgICAgc2Vzc2lvbi5kaWQgPSBjb250ZXh0LnVzZXIuaWQgfHwgY29udGV4dC51c2VyLmVtYWlsIHx8IGNvbnRleHQudXNlci51c2VybmFtZTsKICAgIH0KICB9CgogIHNlc3Npb24udGltZXN0YW1wID0gY29udGV4dC50aW1lc3RhbXAgfHwgdGltZXN0YW1wSW5TZWNvbmRzKCk7CgogIGlmIChjb250ZXh0LmFibm9ybWFsX21lY2hhbmlzbSkgewogICAgc2Vzc2lvbi5hYm5vcm1hbF9tZWNoYW5pc20gPSBjb250ZXh0LmFibm9ybWFsX21lY2hhbmlzbTsKICB9CgogIGlmIChjb250ZXh0Lmlnbm9yZUR1cmF0aW9uKSB7CiAgICBzZXNzaW9uLmlnbm9yZUR1cmF0aW9uID0gY29udGV4dC5pZ25vcmVEdXJhdGlvbjsKICB9CiAgaWYgKGNvbnRleHQuc2lkKSB7CiAgICAvLyBHb29kIGVub3VnaCB1dWlkIHZhbGlkYXRpb24uIOKAlCBLYW1pbAogICAgc2Vzc2lvbi5zaWQgPSBjb250ZXh0LnNpZC5sZW5ndGggPT09IDMyID8gY29udGV4dC5zaWQgOiB1dWlkNCgpOwogIH0KICBpZiAoY29udGV4dC5pbml0ICE9PSB1bmRlZmluZWQpIHsKICAgIHNlc3Npb24uaW5pdCA9IGNvbnRleHQuaW5pdDsKICB9CiAgaWYgKCFzZXNzaW9uLmRpZCAmJiBjb250ZXh0LmRpZCkgewogICAgc2Vzc2lvbi5kaWQgPSBgJHtjb250ZXh0LmRpZH1gOwogIH0KICBpZiAodHlwZW9mIGNvbnRleHQuc3RhcnRlZCA9PT0gJ251bWJlcicpIHsKICAgIHNlc3Npb24uc3RhcnRlZCA9IGNvbnRleHQuc3RhcnRlZDsKICB9CiAgaWYgKHNlc3Npb24uaWdub3JlRHVyYXRpb24pIHsKICAgIHNlc3Npb24uZHVyYXRpb24gPSB1bmRlZmluZWQ7CiAgfSBlbHNlIGlmICh0eXBlb2YgY29udGV4dC5kdXJhdGlvbiA9PT0gJ251bWJlcicpIHsKICAgIHNlc3Npb24uZHVyYXRpb24gPSBjb250ZXh0LmR1cmF0aW9uOwogIH0gZWxzZSB7CiAgICBjb25zdCBkdXJhdGlvbiA9IHNlc3Npb24udGltZXN0YW1wIC0gc2Vzc2lvbi5zdGFydGVkOwogICAgc2Vzc2lvbi5kdXJhdGlvbiA9IGR1cmF0aW9uID49IDAgPyBkdXJhdGlvbiA6IDA7CiAgfQogIGlmIChjb250ZXh0LnJlbGVhc2UpIHsKICAgIHNlc3Npb24ucmVsZWFzZSA9IGNvbnRleHQucmVsZWFzZTsKICB9CiAgaWYgKGNvbnRleHQuZW52aXJvbm1lbnQpIHsKICAgIHNlc3Npb24uZW52aXJvbm1lbnQgPSBjb250ZXh0LmVudmlyb25tZW50OwogIH0KICBpZiAoIXNlc3Npb24uaXBBZGRyZXNzICYmIGNvbnRleHQuaXBBZGRyZXNzKSB7CiAgICBzZXNzaW9uLmlwQWRkcmVzcyA9IGNvbnRleHQuaXBBZGRyZXNzOwogIH0KICBpZiAoIXNlc3Npb24udXNlckFnZW50ICYmIGNvbnRleHQudXNlckFnZW50KSB7CiAgICBzZXNzaW9uLnVzZXJBZ2VudCA9IGNvbnRleHQudXNlckFnZW50OwogIH0KICBpZiAodHlwZW9mIGNvbnRleHQuZXJyb3JzID09PSAnbnVtYmVyJykgewogICAgc2Vzc2lvbi5lcnJvcnMgPSBjb250ZXh0LmVycm9yczsKICB9CiAgaWYgKGNvbnRleHQuc3RhdHVzKSB7CiAgICBzZXNzaW9uLnN0YXR1cyA9IGNvbnRleHQuc3RhdHVzOwogIH0KfQoKLyoqCiAqIENsb3NlcyBhIHNlc3Npb24gYnkgc2V0dGluZyBpdHMgc3RhdHVzIGFuZCB1cGRhdGluZyB0aGUgc2Vzc2lvbiBvYmplY3Qgd2l0aCBpdC4KICogSW50ZXJuYWxseSBjYWxscyBgdXBkYXRlU2Vzc2lvbmAgdG8gdXBkYXRlIHRoZSBwYXNzZWQgc2Vzc2lvbiBvYmplY3QuCiAqCiAqIE5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIG11dGF0ZXMgdGhlIHBhc3NlZCBzZXNzaW9uIChAc2VlIHVwZGF0ZVNlc3Npb24gZm9yIGV4cGxhbmF0aW9uKS4KICoKICogQHBhcmFtIHNlc3Npb24gdGhlIGBTZXNzaW9uYCBvYmplY3QgdG8gYmUgY2xvc2VkCiAqIEBwYXJhbSBzdGF0dXMgdGhlIGBTZXNzaW9uU3RhdHVzYCB3aXRoIHdoaWNoIHRoZSBzZXNzaW9uIHdhcyBjbG9zZWQuIElmIHlvdSBkb24ndCBwYXNzIGEgc3RhdHVzLAogKiAgICAgICAgICAgICAgIHRoaXMgZnVuY3Rpb24gd2lsbCBrZWVwIHRoZSBwcmV2aW91c2x5IHNldCBzdGF0dXMsIHVubGVzcyBpdCB3YXMgYCdvaydgIGluIHdoaWNoIGNhc2UKICogICAgICAgICAgICAgICBpdCBpcyBjaGFuZ2VkIHRvIGAnZXhpdGVkJ2AuCiAqLwpmdW5jdGlvbiBjbG9zZVNlc3Npb24oc2Vzc2lvbiwgc3RhdHVzKSB7CiAgbGV0IGNvbnRleHQgPSB7fTsKICBpZiAoc3RhdHVzKSB7CiAgICBjb250ZXh0ID0geyBzdGF0dXMgfTsKICB9IGVsc2UgaWYgKHNlc3Npb24uc3RhdHVzID09PSAnb2snKSB7CiAgICBjb250ZXh0ID0geyBzdGF0dXM6ICdleGl0ZWQnIH07CiAgfQoKICB1cGRhdGVTZXNzaW9uKHNlc3Npb24sIGNvbnRleHQpOwp9CgovKioKICogU2VyaWFsaXplcyBhIHBhc3NlZCBzZXNzaW9uIG9iamVjdCB0byBhIEpTT04gb2JqZWN0IHdpdGggYSBzbGlnaHRseSBkaWZmZXJlbnQgc3RydWN0dXJlLgogKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHRoZSBTZW50cnkgYmFja2VuZCByZXF1aXJlcyBhIHNsaWdodGx5IGRpZmZlcmVudCBzY2hlbWEgb2YgYSBzZXNzaW9uCiAqIHRoYW4gdGhlIG9uZSB0aGUgSlMgU0RLcyB1c2UgaW50ZXJuYWxseS4KICoKICogQHBhcmFtIHNlc3Npb24gdGhlIHNlc3Npb24gdG8gYmUgY29udmVydGVkCiAqCiAqIEByZXR1cm5zIGEgSlNPTiBvYmplY3Qgb2YgdGhlIHBhc3NlZCBzZXNzaW9uCiAqLwpmdW5jdGlvbiBzZXNzaW9uVG9KU09OKHNlc3Npb24pIHsKICByZXR1cm4gZHJvcFVuZGVmaW5lZEtleXMoewogICAgc2lkOiBgJHtzZXNzaW9uLnNpZH1gLAogICAgaW5pdDogc2Vzc2lvbi5pbml0LAogICAgLy8gTWFrZSBzdXJlIHRoYXQgc2VjIGlzIGNvbnZlcnRlZCB0byBtcyBmb3IgZGF0ZSBjb25zdHJ1Y3RvcgogICAgc3RhcnRlZDogbmV3IERhdGUoc2Vzc2lvbi5zdGFydGVkICogMTAwMCkudG9JU09TdHJpbmcoKSwKICAgIHRpbWVzdGFtcDogbmV3IERhdGUoc2Vzc2lvbi50aW1lc3RhbXAgKiAxMDAwKS50b0lTT1N0cmluZygpLAogICAgc3RhdHVzOiBzZXNzaW9uLnN0YXR1cywKICAgIGVycm9yczogc2Vzc2lvbi5lcnJvcnMsCiAgICBkaWQ6IHR5cGVvZiBzZXNzaW9uLmRpZCA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHNlc3Npb24uZGlkID09PSAnc3RyaW5nJyA/IGAke3Nlc3Npb24uZGlkfWAgOiB1bmRlZmluZWQsCiAgICBkdXJhdGlvbjogc2Vzc2lvbi5kdXJhdGlvbiwKICAgIGFibm9ybWFsX21lY2hhbmlzbTogc2Vzc2lvbi5hYm5vcm1hbF9tZWNoYW5pc20sCiAgICBhdHRyczogewogICAgICByZWxlYXNlOiBzZXNzaW9uLnJlbGVhc2UsCiAgICAgIGVudmlyb25tZW50OiBzZXNzaW9uLmVudmlyb25tZW50LAogICAgICBpcF9hZGRyZXNzOiBzZXNzaW9uLmlwQWRkcmVzcywKICAgICAgdXNlcl9hZ2VudDogc2Vzc2lvbi51c2VyQWdlbnQsCiAgICB9LAogIH0pOwp9Cgpjb25zdCBUUkFDRV9GTEFHX1NBTVBMRUQgPSAweDE7CgovKioKICogQ29udmVydCBhIHNwYW4gdG8gYSB0cmFjZSBjb250ZXh0LCB3aGljaCBjYW4gYmUgc2VudCBhcyB0aGUgYHRyYWNlYCBjb250ZXh0IGluIGFuIGV2ZW50LgogKi8KZnVuY3Rpb24gc3BhblRvVHJhY2VDb250ZXh0KHNwYW4pIHsKICBjb25zdCB7IHNwYW5JZDogc3Bhbl9pZCwgdHJhY2VJZDogdHJhY2VfaWQgfSA9IHNwYW4uc3BhbkNvbnRleHQoKTsKICBjb25zdCB7IGRhdGEsIG9wLCBwYXJlbnRfc3Bhbl9pZCwgc3RhdHVzLCB0YWdzLCBvcmlnaW4gfSA9IHNwYW5Ub0pTT04oc3Bhbik7CgogIHJldHVybiBkcm9wVW5kZWZpbmVkS2V5cyh7CiAgICBkYXRhLAogICAgb3AsCiAgICBwYXJlbnRfc3Bhbl9pZCwKICAgIHNwYW5faWQsCiAgICBzdGF0dXMsCiAgICB0YWdzLAogICAgdHJhY2VfaWQsCiAgICBvcmlnaW4sCiAgfSk7Cn0KCi8qKgogKiBDb252ZXJ0IGEgc3BhbiB0byBhIEpTT04gcmVwcmVzZW50YXRpb24uCiAqIE5vdGUgdGhhdCBhbGwgZmllbGRzIHJldHVybmVkIGhlcmUgYXJlIG9wdGlvbmFsIGFuZCBuZWVkIHRvIGJlIGd1YXJkZWQgYWdhaW5zdC4KICoKICogTm90ZTogQmVjYXVzZSBvZiB0aGlzLCB3ZSBjdXJyZW50bHkgaGF2ZSBhIGNpcmN1bGFyIHR5cGUgZGVwZW5kZW5jeSAod2hpY2ggd2Ugb3B0ZWQgb3V0IG9mIGluIHBhY2thZ2UuanNvbikuCiAqIFRoaXMgaXMgbm90IGF2b2lkYWJsZSBhcyB3ZSBuZWVkIGBzcGFuVG9KU09OYCBpbiBgc3BhblV0aWxzLnRzYCwgd2hpY2ggaW4gdHVybiBpcyBuZWVkZWQgYnkgYHNwYW4udHNgIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4KICogQW5kIGBzcGFuVG9KU09OYCBuZWVkcyB0aGUgU3BhbiBjbGFzcyBmcm9tIGBzcGFuLnRzYCB0byBjaGVjayBoZXJlLgogKiBUT0RPIHY4OiBXaGVuIHdlIHJlbW92ZSB0aGUgZGVwcmVjYXRlZCBzdHVmZiBmcm9tIGBzcGFuLnRzYCwgd2UgY2FuIHJlbW92ZSB0aGUgY2lyY3VsYXIgZGVwZW5kZW5jeSBhZ2Fpbi4KICovCmZ1bmN0aW9uIHNwYW5Ub0pTT04oc3BhbikgewogIGlmIChzcGFuSXNTcGFuQ2xhc3Moc3BhbikpIHsKICAgIHJldHVybiBzcGFuLmdldFNwYW5KU09OKCk7CiAgfQoKICAvLyBGYWxsYmFjazogV2UgYWxzbyBjaGVjayBmb3IgYC50b0pTT04oKWAgaGVyZS4uLgogIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogIGlmICh0eXBlb2Ygc3Bhbi50b0pTT04gPT09ICdmdW5jdGlvbicpIHsKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgcmV0dXJuIHNwYW4udG9KU09OKCk7CiAgfQoKICByZXR1cm4ge307Cn0KCi8qKgogKiBTYWRseSwgZHVlIHRvIGNpcmN1bGFyIGRlcGVuZGVuY3kgY2hlY2tzIHdlIGNhbm5vdCBhY3R1YWxseSBpbXBvcnQgdGhlIFNwYW4gY2xhc3MgaGVyZSBhbmQgY2hlY2sgZm9yIGluc3RhbmNlb2YuCiAqIDooIFNvIGluc3RlYWQgd2UgYXBwcm94aW1hdGUgdGhpcyBieSBjaGVja2luZyBpZiBpdCBoYXMgdGhlIGBnZXRTcGFuSlNPTmAgbWV0aG9kLgogKi8KZnVuY3Rpb24gc3BhbklzU3BhbkNsYXNzKHNwYW4pIHsKICByZXR1cm4gdHlwZW9mIChzcGFuICkuZ2V0U3BhbkpTT04gPT09ICdmdW5jdGlvbic7Cn0KCi8qKgogKiBSZXR1cm5zIHRydWUgaWYgYSBzcGFuIGlzIHNhbXBsZWQuCiAqIEluIG1vc3QgY2FzZXMsIHlvdSBzaG91bGQganVzdCB1c2UgYHNwYW4uaXNSZWNvcmRpbmcoKWAgaW5zdGVhZC4KICogSG93ZXZlciwgdGhpcyBoYXMgYSBzbGlnaHRseSBkaWZmZXJlbnQgc2VtYW50aWMsIGFzIGl0IGFsc28gcmV0dXJucyBmYWxzZSBpZiB0aGUgc3BhbiBpcyBmaW5pc2hlZC4KICogU28gaW4gdGhlIGNhc2Ugd2hlcmUgdGhpcyBkaXN0aW5jdGlvbiBpcyBpbXBvcnRhbnQsIHVzZSB0aGlzIG1ldGhvZC4KICovCmZ1bmN0aW9uIHNwYW5Jc1NhbXBsZWQoc3BhbikgewogIC8vIFdlIGFsaWduIG91ciB0cmFjZSBmbGFncyB3aXRoIHRoZSBvbmVzIE9wZW5UZWxlbWV0cnkgdXNlCiAgLy8gU28gd2UgYWxzbyBjaGVjayBmb3Igc2FtcGxlZCB0aGUgc2FtZSB3YXkgdGhleSBkby4KICBjb25zdCB7IHRyYWNlRmxhZ3MgfSA9IHNwYW4uc3BhbkNvbnRleHQoKTsKICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZQogIHJldHVybiBCb29sZWFuKHRyYWNlRmxhZ3MgJiBUUkFDRV9GTEFHX1NBTVBMRUQpOwp9CgovKioKICogR2V0IHRoZSBjdXJyZW50bHkgYWN0aXZlIGNsaWVudC4KICovCmZ1bmN0aW9uIGdldENsaWVudCgpIHsKICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICByZXR1cm4gZ2V0Q3VycmVudEh1YigpLmdldENsaWVudCgpOwp9CgovKioKICogR2V0IHRoZSBjdXJyZW50bHkgYWN0aXZlIHNjb3BlLgogKi8KZnVuY3Rpb24gZ2V0Q3VycmVudFNjb3BlKCkgewogIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogIHJldHVybiBnZXRDdXJyZW50SHViKCkuZ2V0U2NvcGUoKTsKfQoKLyoqCiAqIFJldHVybnMgdGhlIHJvb3Qgc3BhbiBvZiBhIGdpdmVuIHNwYW4uCiAqCiAqIEFzIGxvbmcgYXMgd2UgdXNlIGBUcmFuc2FjdGlvbmBzIGludGVybmFsbHksIHRoZSByZXR1cm5lZCByb290IHNwYW4KICogd2lsbCBiZSBhIGBUcmFuc2FjdGlvbmAgYnV0IGJlIGF3YXJlIHRoYXQgdGhpcyBtaWdodCBjaGFuZ2UgaW4gdGhlIGZ1dHVyZS4KICoKICogSWYgdGhlIGdpdmVuIHNwYW4gaGFzIG5vIHJvb3Qgc3BhbiBvciB0cmFuc2FjdGlvbiwgYHVuZGVmaW5lZGAgaXMgcmV0dXJuZWQuCiAqLwpmdW5jdGlvbiBnZXRSb290U3BhbihzcGFuKSB7CiAgLy8gVE9ETyAodjgpOiBSZW1vdmUgdGhpcyBjaGVjayBhbmQganVzdCByZXR1cm4gc3BhbgogIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogIHJldHVybiBzcGFuLnRyYW5zYWN0aW9uOwp9CgovKioKICogQ3JlYXRlcyBhIGR5bmFtaWMgc2FtcGxpbmcgY29udGV4dCBmcm9tIGEgY2xpZW50LgogKgogKiBEaXNwYXRjaGVzIHRoZSBgY3JlYXRlRHNjYCBsaWZlY3ljbGUgaG9vayBhcyBhIHNpZGUgZWZmZWN0LgogKi8KZnVuY3Rpb24gZ2V0RHluYW1pY1NhbXBsaW5nQ29udGV4dEZyb21DbGllbnQoCiAgdHJhY2VfaWQsCiAgY2xpZW50LAogIHNjb3BlLAopIHsKICBjb25zdCBvcHRpb25zID0gY2xpZW50LmdldE9wdGlvbnMoKTsKCiAgY29uc3QgeyBwdWJsaWNLZXk6IHB1YmxpY19rZXkgfSA9IGNsaWVudC5nZXREc24oKSB8fCB7fTsKICAvLyBUT0RPKHY4KTogUmVtb3ZlIHNlZ21lbnQgZnJvbSBVc2VyCiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgY29uc3QgeyBzZWdtZW50OiB1c2VyX3NlZ21lbnQgfSA9IChzY29wZSAmJiBzY29wZS5nZXRVc2VyKCkpIHx8IHt9OwoKICBjb25zdCBkc2MgPSBkcm9wVW5kZWZpbmVkS2V5cyh7CiAgICBlbnZpcm9ubWVudDogb3B0aW9ucy5lbnZpcm9ubWVudCB8fCBERUZBVUxUX0VOVklST05NRU5ULAogICAgcmVsZWFzZTogb3B0aW9ucy5yZWxlYXNlLAogICAgdXNlcl9zZWdtZW50LAogICAgcHVibGljX2tleSwKICAgIHRyYWNlX2lkLAogIH0pIDsKCiAgY2xpZW50LmVtaXQgJiYgY2xpZW50LmVtaXQoJ2NyZWF0ZURzYycsIGRzYyk7CgogIHJldHVybiBkc2M7Cn0KCi8qKgogKiBBIFNwYW4gd2l0aCBhIGZyb3plbiBkeW5hbWljIHNhbXBsaW5nIGNvbnRleHQuCiAqLwoKLyoqCiAqIENyZWF0ZXMgYSBkeW5hbWljIHNhbXBsaW5nIGNvbnRleHQgZnJvbSBhIHNwYW4gKGFuZCBjbGllbnQgYW5kIHNjb3BlKQogKgogKiBAcGFyYW0gc3BhbiB0aGUgc3BhbiBmcm9tIHdoaWNoIGEgZmV3IHZhbHVlcyBsaWtlIHRoZSByb290IHNwYW4gbmFtZSBhbmQgc2FtcGxlIHJhdGUgYXJlIGV4dHJhY3RlZC4KICoKICogQHJldHVybnMgYSBkeW5hbWljIHNhbXBsaW5nIGNvbnRleHQKICovCmZ1bmN0aW9uIGdldER5bmFtaWNTYW1wbGluZ0NvbnRleHRGcm9tU3BhbihzcGFuKSB7CiAgY29uc3QgY2xpZW50ID0gZ2V0Q2xpZW50KCk7CiAgaWYgKCFjbGllbnQpIHsKICAgIHJldHVybiB7fTsKICB9CgogIC8vIHBhc3NpbmcgZW1pdD1mYWxzZSBoZXJlIHRvIG9ubHkgZW1pdCBsYXRlciBvbmNlIHRoZSBEU0MgaXMgYWN0dWFsbHkgcG9wdWxhdGVkCiAgY29uc3QgZHNjID0gZ2V0RHluYW1pY1NhbXBsaW5nQ29udGV4dEZyb21DbGllbnQoc3BhblRvSlNPTihzcGFuKS50cmFjZV9pZCB8fCAnJywgY2xpZW50LCBnZXRDdXJyZW50U2NvcGUoKSk7CgogIC8vIFRPRE8gKHY4KTogUmVtb3ZlIHY3RnJvemVuRHNjIGFzIGEgVHJhbnNhY3Rpb24gd2lsbCBubyBsb25nZXIgaGF2ZSBfZnJvemVuRHluYW1pY1NhbXBsaW5nQ29udGV4dAogIGNvbnN0IHR4biA9IGdldFJvb3RTcGFuKHNwYW4pIDsKICBpZiAoIXR4bikgewogICAgcmV0dXJuIGRzYzsKICB9CgogIC8vIFRPRE8gKHY4KTogUmVtb3ZlIHY3RnJvemVuRHNjIGFzIGEgVHJhbnNhY3Rpb24gd2lsbCBubyBsb25nZXIgaGF2ZSBfZnJvemVuRHluYW1pY1NhbXBsaW5nQ29udGV4dAogIC8vIEZvciBub3cgd2UgbmVlZCB0byBhdm9pZCBicmVha2luZyB1c2VycyB3aG8gZGlyZWN0bHkgY3JlYXRlZCBhIHR4biB3aXRoIGEgRFNDLCB3aGVyZSB0aGlzIGZpZWxkIGlzIHN0aWxsIHNldC4KICAvLyBAc2VlIFRyYW5zYWN0aW9uIGNsYXNzIGNvbnN0cnVjdG9yCiAgY29uc3QgdjdGcm96ZW5Ec2MgPSB0eG4gJiYgdHhuLl9mcm96ZW5EeW5hbWljU2FtcGxpbmdDb250ZXh0OwogIGlmICh2N0Zyb3plbkRzYykgewogICAgcmV0dXJuIHY3RnJvemVuRHNjOwogIH0KCiAgLy8gVE9ETyAodjgpOiBSZXBsYWNlIHR4bi5tZXRhZGF0YSB3aXRoIHR4bi5hdHRyaWJ1dGVzW10KICAvLyBXZSBjYW4ndCBkbyB0aGlzIHlldCBiZWNhdXNlIGF0dHJpYnV0ZXMgYXJlbid0IGFsd2F5cyBzZXQgeWV0LgogIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogIGNvbnN0IHsgc2FtcGxlUmF0ZTogbWF5YmVTYW1wbGVSYXRlLCBzb3VyY2UgfSA9IHR4bi5tZXRhZGF0YTsKICBpZiAobWF5YmVTYW1wbGVSYXRlICE9IG51bGwpIHsKICAgIGRzYy5zYW1wbGVfcmF0ZSA9IGAke21heWJlU2FtcGxlUmF0ZX1gOwogIH0KCiAgLy8gV2UgZG9uJ3Qgd2FudCB0byBoYXZlIGEgdHJhbnNhY3Rpb24gbmFtZSBpbiB0aGUgRFNDIGlmIHRoZSBzb3VyY2UgaXMgInVybCIgYmVjYXVzZSBVUkxzIG1pZ2h0IGNvbnRhaW4gUElJCiAgY29uc3QganNvblNwYW4gPSBzcGFuVG9KU09OKHR4bik7CgogIC8vIGFmdGVyIEpTT04gY29udmVyc2lvbiwgdHhuLm5hbWUgYmVjb21lcyBqc29uU3Bhbi5kZXNjcmlwdGlvbgogIGlmIChzb3VyY2UgJiYgc291cmNlICE9PSAndXJsJykgewogICAgZHNjLnRyYW5zYWN0aW9uID0ganNvblNwYW4uZGVzY3JpcHRpb247CiAgfQoKICBkc2Muc2FtcGxlZCA9IFN0cmluZyhzcGFuSXNTYW1wbGVkKHR4bikpOwoKICBjbGllbnQuZW1pdCAmJiBjbGllbnQuZW1pdCgnY3JlYXRlRHNjJywgZHNjKTsKCiAgcmV0dXJuIGRzYzsKfQoKLyoqCiAqIEFwcGxpZXMgZGF0YSBmcm9tIHRoZSBzY29wZSB0byB0aGUgZXZlbnQgYW5kIHJ1bnMgYWxsIGV2ZW50IHByb2Nlc3NvcnMgb24gaXQuCiAqLwpmdW5jdGlvbiBhcHBseVNjb3BlRGF0YVRvRXZlbnQoZXZlbnQsIGRhdGEpIHsKICBjb25zdCB7IGZpbmdlcnByaW50LCBzcGFuLCBicmVhZGNydW1icywgc2RrUHJvY2Vzc2luZ01ldGFkYXRhIH0gPSBkYXRhOwoKICAvLyBBcHBseSBnZW5lcmFsIGRhdGEKICBhcHBseURhdGFUb0V2ZW50KGV2ZW50LCBkYXRhKTsKCiAgLy8gV2Ugd2FudCB0byBzZXQgdGhlIHRyYWNlIGNvbnRleHQgZm9yIG5vcm1hbCBldmVudHMgb25seSBpZiB0aGVyZSBpc24ndCBhbHJlYWR5CiAgLy8gYSB0cmFjZSBjb250ZXh0IG9uIHRoZSBldmVudC4gVGhlcmUgaXMgYSBwcm9kdWN0IGZlYXR1cmUgaW4gcGxhY2Ugd2hlcmUgd2UgbGluawogIC8vIGVycm9ycyB3aXRoIHRyYW5zYWN0aW9uIGFuZCBpdCByZWxpZXMgb24gdGhhdC4KICBpZiAoc3BhbikgewogICAgYXBwbHlTcGFuVG9FdmVudChldmVudCwgc3Bhbik7CiAgfQoKICBhcHBseUZpbmdlcnByaW50VG9FdmVudChldmVudCwgZmluZ2VycHJpbnQpOwogIGFwcGx5QnJlYWRjcnVtYnNUb0V2ZW50KGV2ZW50LCBicmVhZGNydW1icyk7CiAgYXBwbHlTZGtNZXRhZGF0YVRvRXZlbnQoZXZlbnQsIHNka1Byb2Nlc3NpbmdNZXRhZGF0YSk7Cn0KCmZ1bmN0aW9uIGFwcGx5RGF0YVRvRXZlbnQoZXZlbnQsIGRhdGEpIHsKICBjb25zdCB7CiAgICBleHRyYSwKICAgIHRhZ3MsCiAgICB1c2VyLAogICAgY29udGV4dHMsCiAgICBsZXZlbCwKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgdHJhbnNhY3Rpb25OYW1lLAogIH0gPSBkYXRhOwoKICBjb25zdCBjbGVhbmVkRXh0cmEgPSBkcm9wVW5kZWZpbmVkS2V5cyhleHRyYSk7CiAgaWYgKGNsZWFuZWRFeHRyYSAmJiBPYmplY3Qua2V5cyhjbGVhbmVkRXh0cmEpLmxlbmd0aCkgewogICAgZXZlbnQuZXh0cmEgPSB7IC4uLmNsZWFuZWRFeHRyYSwgLi4uZXZlbnQuZXh0cmEgfTsKICB9CgogIGNvbnN0IGNsZWFuZWRUYWdzID0gZHJvcFVuZGVmaW5lZEtleXModGFncyk7CiAgaWYgKGNsZWFuZWRUYWdzICYmIE9iamVjdC5rZXlzKGNsZWFuZWRUYWdzKS5sZW5ndGgpIHsKICAgIGV2ZW50LnRhZ3MgPSB7IC4uLmNsZWFuZWRUYWdzLCAuLi5ldmVudC50YWdzIH07CiAgfQoKICBjb25zdCBjbGVhbmVkVXNlciA9IGRyb3BVbmRlZmluZWRLZXlzKHVzZXIpOwogIGlmIChjbGVhbmVkVXNlciAmJiBPYmplY3Qua2V5cyhjbGVhbmVkVXNlcikubGVuZ3RoKSB7CiAgICBldmVudC51c2VyID0geyAuLi5jbGVhbmVkVXNlciwgLi4uZXZlbnQudXNlciB9OwogIH0KCiAgY29uc3QgY2xlYW5lZENvbnRleHRzID0gZHJvcFVuZGVmaW5lZEtleXMoY29udGV4dHMpOwogIGlmIChjbGVhbmVkQ29udGV4dHMgJiYgT2JqZWN0LmtleXMoY2xlYW5lZENvbnRleHRzKS5sZW5ndGgpIHsKICAgIGV2ZW50LmNvbnRleHRzID0geyAuLi5jbGVhbmVkQ29udGV4dHMsIC4uLmV2ZW50LmNvbnRleHRzIH07CiAgfQoKICBpZiAobGV2ZWwpIHsKICAgIGV2ZW50LmxldmVsID0gbGV2ZWw7CiAgfQoKICBpZiAodHJhbnNhY3Rpb25OYW1lKSB7CiAgICBldmVudC50cmFuc2FjdGlvbiA9IHRyYW5zYWN0aW9uTmFtZTsKICB9Cn0KCmZ1bmN0aW9uIGFwcGx5QnJlYWRjcnVtYnNUb0V2ZW50KGV2ZW50LCBicmVhZGNydW1icykgewogIGNvbnN0IG1lcmdlZEJyZWFkY3J1bWJzID0gWy4uLihldmVudC5icmVhZGNydW1icyB8fCBbXSksIC4uLmJyZWFkY3J1bWJzXTsKICBldmVudC5icmVhZGNydW1icyA9IG1lcmdlZEJyZWFkY3J1bWJzLmxlbmd0aCA/IG1lcmdlZEJyZWFkY3J1bWJzIDogdW5kZWZpbmVkOwp9CgpmdW5jdGlvbiBhcHBseVNka01ldGFkYXRhVG9FdmVudChldmVudCwgc2RrUHJvY2Vzc2luZ01ldGFkYXRhKSB7CiAgZXZlbnQuc2RrUHJvY2Vzc2luZ01ldGFkYXRhID0gewogICAgLi4uZXZlbnQuc2RrUHJvY2Vzc2luZ01ldGFkYXRhLAogICAgLi4uc2RrUHJvY2Vzc2luZ01ldGFkYXRhLAogIH07Cn0KCmZ1bmN0aW9uIGFwcGx5U3BhblRvRXZlbnQoZXZlbnQsIHNwYW4pIHsKICBldmVudC5jb250ZXh0cyA9IHsgdHJhY2U6IHNwYW5Ub1RyYWNlQ29udGV4dChzcGFuKSwgLi4uZXZlbnQuY29udGV4dHMgfTsKICBjb25zdCByb290U3BhbiA9IGdldFJvb3RTcGFuKHNwYW4pOwogIGlmIChyb290U3BhbikgewogICAgZXZlbnQuc2RrUHJvY2Vzc2luZ01ldGFkYXRhID0gewogICAgICBkeW5hbWljU2FtcGxpbmdDb250ZXh0OiBnZXREeW5hbWljU2FtcGxpbmdDb250ZXh0RnJvbVNwYW4oc3BhbiksCiAgICAgIC4uLmV2ZW50LnNka1Byb2Nlc3NpbmdNZXRhZGF0YSwKICAgIH07CiAgICBjb25zdCB0cmFuc2FjdGlvbk5hbWUgPSBzcGFuVG9KU09OKHJvb3RTcGFuKS5kZXNjcmlwdGlvbjsKICAgIGlmICh0cmFuc2FjdGlvbk5hbWUpIHsKICAgICAgZXZlbnQudGFncyA9IHsgdHJhbnNhY3Rpb246IHRyYW5zYWN0aW9uTmFtZSwgLi4uZXZlbnQudGFncyB9OwogICAgfQogIH0KfQoKLyoqCiAqIEFwcGxpZXMgZmluZ2VycHJpbnQgZnJvbSB0aGUgc2NvcGUgdG8gdGhlIGV2ZW50IGlmIHRoZXJlJ3Mgb25lLAogKiB1c2VzIG1lc3NhZ2UgaWYgdGhlcmUncyBvbmUgaW5zdGVhZCBvciBnZXQgcmlkIG9mIGVtcHR5IGZpbmdlcnByaW50CiAqLwpmdW5jdGlvbiBhcHBseUZpbmdlcnByaW50VG9FdmVudChldmVudCwgZmluZ2VycHJpbnQpIHsKICAvLyBNYWtlIHN1cmUgaXQncyBhbiBhcnJheSBmaXJzdCBhbmQgd2UgYWN0dWFsbHkgaGF2ZSBzb21ldGhpbmcgaW4gcGxhY2UKICBldmVudC5maW5nZXJwcmludCA9IGV2ZW50LmZpbmdlcnByaW50ID8gYXJyYXlpZnkoZXZlbnQuZmluZ2VycHJpbnQpIDogW107CgogIC8vIElmIHdlIGhhdmUgc29tZXRoaW5nIG9uIHRoZSBzY29wZSwgdGhlbiBtZXJnZSBpdCB3aXRoIGV2ZW50CiAgaWYgKGZpbmdlcnByaW50KSB7CiAgICBldmVudC5maW5nZXJwcmludCA9IGV2ZW50LmZpbmdlcnByaW50LmNvbmNhdChmaW5nZXJwcmludCk7CiAgfQoKICAvLyBJZiB3ZSBoYXZlIG5vIGRhdGEgYXQgYWxsLCByZW1vdmUgZW1wdHkgYXJyYXkgZGVmYXVsdAogIGlmIChldmVudC5maW5nZXJwcmludCAmJiAhZXZlbnQuZmluZ2VycHJpbnQubGVuZ3RoKSB7CiAgICBkZWxldGUgZXZlbnQuZmluZ2VycHJpbnQ7CiAgfQp9CgovKioKICogRGVmYXVsdCB2YWx1ZSBmb3IgbWF4aW11bSBudW1iZXIgb2YgYnJlYWRjcnVtYnMgYWRkZWQgdG8gYW4gZXZlbnQuCiAqLwpjb25zdCBERUZBVUxUX01BWF9CUkVBRENSVU1CUyA9IDEwMDsKCi8qKgogKiBIb2xkcyBhZGRpdGlvbmFsIGV2ZW50IGluZm9ybWF0aW9uLiB7QGxpbmsgU2NvcGUuYXBwbHlUb0V2ZW50fSB3aWxsIGJlCiAqIGNhbGxlZCBieSB0aGUgY2xpZW50IGJlZm9yZSBhbiBldmVudCB3aWxsIGJlIHNlbnQuCiAqLwpjbGFzcyBTY29wZSAgewogIC8qKiBGbGFnIGlmIG5vdGlmeWluZyBpcyBoYXBwZW5pbmcuICovCgogIC8qKiBDYWxsYmFjayBmb3IgY2xpZW50IHRvIHJlY2VpdmUgc2NvcGUgY2hhbmdlcy4gKi8KCiAgLyoqIENhbGxiYWNrIGxpc3QgdGhhdCB3aWxsIGJlIGNhbGxlZCBhZnRlciB7QGxpbmsgYXBwbHlUb0V2ZW50fS4gKi8KCiAgLyoqIEFycmF5IG9mIGJyZWFkY3J1bWJzLiAqLwoKICAvKiogVXNlciAqLwoKICAvKiogVGFncyAqLwoKICAvKiogRXh0cmEgKi8KCiAgLyoqIENvbnRleHRzICovCgogIC8qKiBBdHRhY2htZW50cyAqLwoKICAvKiogUHJvcGFnYXRpb24gQ29udGV4dCBmb3IgZGlzdHJpYnV0ZWQgdHJhY2luZyAqLwoKICAvKioKICAgKiBBIHBsYWNlIHRvIHN0YXNoIGRhdGEgd2hpY2ggaXMgbmVlZGVkIGF0IHNvbWUgcG9pbnQgaW4gdGhlIFNESydzIGV2ZW50IHByb2Nlc3NpbmcgcGlwZWxpbmUgYnV0IHdoaWNoIHNob3VsZG4ndCBnZXQKICAgKiBzZW50IHRvIFNlbnRyeQogICAqLwoKICAvKiogRmluZ2VycHJpbnQgKi8KCiAgLyoqIFNldmVyaXR5ICovCiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCgogIC8qKgogICAqIFRyYW5zYWN0aW9uIE5hbWUKICAgKi8KCiAgLyoqIFNwYW4gKi8KCiAgLyoqIFNlc3Npb24gKi8KCiAgLyoqIFJlcXVlc3QgTW9kZSBTZXNzaW9uIFN0YXR1cyAqLwoKICAvKiogVGhlIGNsaWVudCBvbiB0aGlzIHNjb3BlICovCgogIC8vIE5PVEU6IEFueSBmaWVsZCB3aGljaCBnZXRzIGFkZGVkIGhlcmUgc2hvdWxkIGdldCBhZGRlZCBub3Qgb25seSB0byB0aGUgY29uc3RydWN0b3IgYnV0IGFsc28gdG8gdGhlIGBjbG9uZWAgbWV0aG9kLgoKICAgY29uc3RydWN0b3IoKSB7CiAgICB0aGlzLl9ub3RpZnlpbmdMaXN0ZW5lcnMgPSBmYWxzZTsKICAgIHRoaXMuX3Njb3BlTGlzdGVuZXJzID0gW107CiAgICB0aGlzLl9ldmVudFByb2Nlc3NvcnMgPSBbXTsKICAgIHRoaXMuX2JyZWFkY3J1bWJzID0gW107CiAgICB0aGlzLl9hdHRhY2htZW50cyA9IFtdOwogICAgdGhpcy5fdXNlciA9IHt9OwogICAgdGhpcy5fdGFncyA9IHt9OwogICAgdGhpcy5fZXh0cmEgPSB7fTsKICAgIHRoaXMuX2NvbnRleHRzID0ge307CiAgICB0aGlzLl9zZGtQcm9jZXNzaW5nTWV0YWRhdGEgPSB7fTsKICAgIHRoaXMuX3Byb3BhZ2F0aW9uQ29udGV4dCA9IGdlbmVyYXRlUHJvcGFnYXRpb25Db250ZXh0KCk7CiAgfQoKICAvKioKICAgKiBJbmhlcml0IHZhbHVlcyBmcm9tIHRoZSBwYXJlbnQgc2NvcGUuCiAgICogQGRlcHJlY2F0ZWQgVXNlIGBzY29wZS5jbG9uZSgpYCBhbmQgYG5ldyBTY29wZSgpYCBpbnN0ZWFkLgogICAqLwogICBzdGF0aWMgY2xvbmUoc2NvcGUpIHsKICAgIHJldHVybiBzY29wZSA/IHNjb3BlLmNsb25lKCkgOiBuZXcgU2NvcGUoKTsKICB9CgogIC8qKgogICAqIENsb25lIHRoaXMgc2NvcGUgaW5zdGFuY2UuCiAgICovCiAgIGNsb25lKCkgewogICAgY29uc3QgbmV3U2NvcGUgPSBuZXcgU2NvcGUoKTsKICAgIG5ld1Njb3BlLl9icmVhZGNydW1icyA9IFsuLi50aGlzLl9icmVhZGNydW1ic107CiAgICBuZXdTY29wZS5fdGFncyA9IHsgLi4udGhpcy5fdGFncyB9OwogICAgbmV3U2NvcGUuX2V4dHJhID0geyAuLi50aGlzLl9leHRyYSB9OwogICAgbmV3U2NvcGUuX2NvbnRleHRzID0geyAuLi50aGlzLl9jb250ZXh0cyB9OwogICAgbmV3U2NvcGUuX3VzZXIgPSB0aGlzLl91c2VyOwogICAgbmV3U2NvcGUuX2xldmVsID0gdGhpcy5fbGV2ZWw7CiAgICBuZXdTY29wZS5fc3BhbiA9IHRoaXMuX3NwYW47CiAgICBuZXdTY29wZS5fc2Vzc2lvbiA9IHRoaXMuX3Nlc3Npb247CiAgICBuZXdTY29wZS5fdHJhbnNhY3Rpb25OYW1lID0gdGhpcy5fdHJhbnNhY3Rpb25OYW1lOwogICAgbmV3U2NvcGUuX2ZpbmdlcnByaW50ID0gdGhpcy5fZmluZ2VycHJpbnQ7CiAgICBuZXdTY29wZS5fZXZlbnRQcm9jZXNzb3JzID0gWy4uLnRoaXMuX2V2ZW50UHJvY2Vzc29yc107CiAgICBuZXdTY29wZS5fcmVxdWVzdFNlc3Npb24gPSB0aGlzLl9yZXF1ZXN0U2Vzc2lvbjsKICAgIG5ld1Njb3BlLl9hdHRhY2htZW50cyA9IFsuLi50aGlzLl9hdHRhY2htZW50c107CiAgICBuZXdTY29wZS5fc2RrUHJvY2Vzc2luZ01ldGFkYXRhID0geyAuLi50aGlzLl9zZGtQcm9jZXNzaW5nTWV0YWRhdGEgfTsKICAgIG5ld1Njb3BlLl9wcm9wYWdhdGlvbkNvbnRleHQgPSB7IC4uLnRoaXMuX3Byb3BhZ2F0aW9uQ29udGV4dCB9OwogICAgbmV3U2NvcGUuX2NsaWVudCA9IHRoaXMuX2NsaWVudDsKCiAgICByZXR1cm4gbmV3U2NvcGU7CiAgfQoKICAvKiogVXBkYXRlIHRoZSBjbGllbnQgb24gdGhlIHNjb3BlLiAqLwogICBzZXRDbGllbnQoY2xpZW50KSB7CiAgICB0aGlzLl9jbGllbnQgPSBjbGllbnQ7CiAgfQoKICAvKioKICAgKiBHZXQgdGhlIGNsaWVudCBhc3NpZ25lZCB0byB0aGlzIHNjb3BlLgogICAqCiAgICogSXQgaXMgZ2VuZXJhbGx5IHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgZ2xvYmFsIGZ1bmN0aW9uIGBTZW50cnkuZ2V0Q2xpZW50KClgIGluc3RlYWQsIHVubGVzcyB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcuCiAgICovCiAgIGdldENsaWVudCgpIHsKICAgIHJldHVybiB0aGlzLl9jbGllbnQ7CiAgfQoKICAvKioKICAgKiBBZGQgaW50ZXJuYWwgb24gY2hhbmdlIGxpc3RlbmVyLiBVc2VkIGZvciBzdWIgU0RLcyB0aGF0IG5lZWQgdG8gc3RvcmUgdGhlIHNjb3BlLgogICAqIEBoaWRkZW4KICAgKi8KICAgYWRkU2NvcGVMaXN0ZW5lcihjYWxsYmFjaykgewogICAgdGhpcy5fc2NvcGVMaXN0ZW5lcnMucHVzaChjYWxsYmFjayk7CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqLwogICBhZGRFdmVudFByb2Nlc3NvcihjYWxsYmFjaykgewogICAgdGhpcy5fZXZlbnRQcm9jZXNzb3JzLnB1c2goY2FsbGJhY2spOwogICAgcmV0dXJuIHRoaXM7CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqLwogICBzZXRVc2VyKHVzZXIpIHsKICAgIC8vIElmIG51bGwgaXMgcGFzc2VkIHdlIHdhbnQgdG8gdW5zZXQgZXZlcnl0aGluZywgYnV0IHN0aWxsIGRlZmluZSBrZXlzLAogICAgLy8gc28gdGhhdCBsYXRlciBkb3duIGluIHRoZSBwaXBlbGluZSBhbnkgZXhpc3RpbmcgdmFsdWVzIGFyZSBjbGVhcmVkLgogICAgdGhpcy5fdXNlciA9IHVzZXIgfHwgewogICAgICBlbWFpbDogdW5kZWZpbmVkLAogICAgICBpZDogdW5kZWZpbmVkLAogICAgICBpcF9hZGRyZXNzOiB1bmRlZmluZWQsCiAgICAgIHNlZ21lbnQ6IHVuZGVmaW5lZCwKICAgICAgdXNlcm5hbWU6IHVuZGVmaW5lZCwKICAgIH07CgogICAgaWYgKHRoaXMuX3Nlc3Npb24pIHsKICAgICAgdXBkYXRlU2Vzc2lvbih0aGlzLl9zZXNzaW9uLCB7IHVzZXIgfSk7CiAgICB9CgogICAgdGhpcy5fbm90aWZ5U2NvcGVMaXN0ZW5lcnMoKTsKICAgIHJldHVybiB0aGlzOwogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKi8KICAgZ2V0VXNlcigpIHsKICAgIHJldHVybiB0aGlzLl91c2VyOwogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKi8KICAgZ2V0UmVxdWVzdFNlc3Npb24oKSB7CiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdFNlc3Npb247CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqLwogICBzZXRSZXF1ZXN0U2Vzc2lvbihyZXF1ZXN0U2Vzc2lvbikgewogICAgdGhpcy5fcmVxdWVzdFNlc3Npb24gPSByZXF1ZXN0U2Vzc2lvbjsKICAgIHJldHVybiB0aGlzOwogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKi8KICAgc2V0VGFncyh0YWdzKSB7CiAgICB0aGlzLl90YWdzID0gewogICAgICAuLi50aGlzLl90YWdzLAogICAgICAuLi50YWdzLAogICAgfTsKICAgIHRoaXMuX25vdGlmeVNjb3BlTGlzdGVuZXJzKCk7CiAgICByZXR1cm4gdGhpczsKICB9CgogIC8qKgogICAqIEBpbmhlcml0RG9jCiAgICovCiAgIHNldFRhZyhrZXksIHZhbHVlKSB7CiAgICB0aGlzLl90YWdzID0geyAuLi50aGlzLl90YWdzLCBba2V5XTogdmFsdWUgfTsKICAgIHRoaXMuX25vdGlmeVNjb3BlTGlzdGVuZXJzKCk7CiAgICByZXR1cm4gdGhpczsKICB9CgogIC8qKgogICAqIEBpbmhlcml0RG9jCiAgICovCiAgIHNldEV4dHJhcyhleHRyYXMpIHsKICAgIHRoaXMuX2V4dHJhID0gewogICAgICAuLi50aGlzLl9leHRyYSwKICAgICAgLi4uZXh0cmFzLAogICAgfTsKICAgIHRoaXMuX25vdGlmeVNjb3BlTGlzdGVuZXJzKCk7CiAgICByZXR1cm4gdGhpczsKICB9CgogIC8qKgogICAqIEBpbmhlcml0RG9jCiAgICovCiAgIHNldEV4dHJhKGtleSwgZXh0cmEpIHsKICAgIHRoaXMuX2V4dHJhID0geyAuLi50aGlzLl9leHRyYSwgW2tleV06IGV4dHJhIH07CiAgICB0aGlzLl9ub3RpZnlTY29wZUxpc3RlbmVycygpOwogICAgcmV0dXJuIHRoaXM7CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqLwogICBzZXRGaW5nZXJwcmludChmaW5nZXJwcmludCkgewogICAgdGhpcy5fZmluZ2VycHJpbnQgPSBmaW5nZXJwcmludDsKICAgIHRoaXMuX25vdGlmeVNjb3BlTGlzdGVuZXJzKCk7CiAgICByZXR1cm4gdGhpczsKICB9CgogIC8qKgogICAqIEBpbmhlcml0RG9jCiAgICovCiAgIHNldExldmVsKAogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICBsZXZlbCwKICApIHsKICAgIHRoaXMuX2xldmVsID0gbGV2ZWw7CiAgICB0aGlzLl9ub3RpZnlTY29wZUxpc3RlbmVycygpOwogICAgcmV0dXJuIHRoaXM7CiAgfQoKICAvKioKICAgKiBTZXRzIHRoZSB0cmFuc2FjdGlvbiBuYW1lIG9uIHRoZSBzY29wZSBmb3IgZnV0dXJlIGV2ZW50cy4KICAgKi8KICAgc2V0VHJhbnNhY3Rpb25OYW1lKG5hbWUpIHsKICAgIHRoaXMuX3RyYW5zYWN0aW9uTmFtZSA9IG5hbWU7CiAgICB0aGlzLl9ub3RpZnlTY29wZUxpc3RlbmVycygpOwogICAgcmV0dXJuIHRoaXM7CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqLwogICBzZXRDb250ZXh0KGtleSwgY29udGV4dCkgewogICAgaWYgKGNvbnRleHQgPT09IG51bGwpIHsKICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1keW5hbWljLWRlbGV0ZQogICAgICBkZWxldGUgdGhpcy5fY29udGV4dHNba2V5XTsKICAgIH0gZWxzZSB7CiAgICAgIHRoaXMuX2NvbnRleHRzW2tleV0gPSBjb250ZXh0OwogICAgfQoKICAgIHRoaXMuX25vdGlmeVNjb3BlTGlzdGVuZXJzKCk7CiAgICByZXR1cm4gdGhpczsKICB9CgogIC8qKgogICAqIFNldHMgdGhlIFNwYW4gb24gdGhlIHNjb3BlLgogICAqIEBwYXJhbSBzcGFuIFNwYW4KICAgKiBAZGVwcmVjYXRlZCBJbnN0ZWFkIG9mIHNldHRpbmcgYSBzcGFuIG9uIGEgc2NvcGUsIHVzZSBgc3RhcnRTcGFuKClgL2BzdGFydFNwYW5NYW51YWwoKWAgaW5zdGVhZC4KICAgKi8KICAgc2V0U3BhbihzcGFuKSB7CiAgICB0aGlzLl9zcGFuID0gc3BhbjsKICAgIHRoaXMuX25vdGlmeVNjb3BlTGlzdGVuZXJzKCk7CiAgICByZXR1cm4gdGhpczsKICB9CgogIC8qKgogICAqIFJldHVybnMgdGhlIGBTcGFuYCBpZiB0aGVyZSBpcyBvbmUuCiAgICogQGRlcHJlY2F0ZWQgVXNlIGBnZXRBY3RpdmVTcGFuKClgIGluc3RlYWQuCiAgICovCiAgIGdldFNwYW4oKSB7CiAgICByZXR1cm4gdGhpcy5fc3BhbjsKICB9CgogIC8qKgogICAqIFJldHVybnMgdGhlIGBUcmFuc2FjdGlvbmAgYXR0YWNoZWQgdG8gdGhlIHNjb3BlIChpZiB0aGVyZSBpcyBvbmUpLgogICAqIEBkZXByZWNhdGVkIFlvdSBzaG91bGQgbm90IHJlbHkgb24gdGhlIHRyYW5zYWN0aW9uLCBidXQganVzdCB1c2UgYHN0YXJ0U3BhbigpYCBBUElzIGluc3RlYWQuCiAgICovCiAgIGdldFRyYW5zYWN0aW9uKCkgewogICAgLy8gT2Z0ZW4sIHRoaXMgc3BhbiAoaWYgaXQgZXhpc3RzIGF0IGFsbCkgd2lsbCBiZSBhIHRyYW5zYWN0aW9uLCBidXQgaXQncyBub3QgZ3VhcmFudGVlZCB0byBiZS4gUmVnYXJkbGVzcywgaXQgd2lsbAogICAgLy8gaGF2ZSBhIHBvaW50ZXIgdG8gdGhlIGN1cnJlbnRseS1hY3RpdmUgdHJhbnNhY3Rpb24uCiAgICBjb25zdCBzcGFuID0gdGhpcy5fc3BhbjsKICAgIC8vIENhbm5vdCByZXBsYWNlIHdpdGggZ2V0Um9vdFNwYW4gYmVjYXVzZSBnZXRSb290U3BhbiByZXR1cm5zIGEgc3Bhbiwgbm90IGEgdHJhbnNhY3Rpb24KICAgIC8vIEFsc28sIHRoaXMgbWV0aG9kIHdpbGwgYmUgcmVtb3ZlZCBhbnl3YXkuCiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICAgIHJldHVybiBzcGFuICYmIHNwYW4udHJhbnNhY3Rpb247CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqLwogICBzZXRTZXNzaW9uKHNlc3Npb24pIHsKICAgIGlmICghc2Vzc2lvbikgewogICAgICBkZWxldGUgdGhpcy5fc2Vzc2lvbjsKICAgIH0gZWxzZSB7CiAgICAgIHRoaXMuX3Nlc3Npb24gPSBzZXNzaW9uOwogICAgfQogICAgdGhpcy5fbm90aWZ5U2NvcGVMaXN0ZW5lcnMoKTsKICAgIHJldHVybiB0aGlzOwogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKi8KICAgZ2V0U2Vzc2lvbigpIHsKICAgIHJldHVybiB0aGlzLl9zZXNzaW9uOwogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKi8KICAgdXBkYXRlKGNhcHR1cmVDb250ZXh0KSB7CiAgICBpZiAoIWNhcHR1cmVDb250ZXh0KSB7CiAgICAgIHJldHVybiB0aGlzOwogICAgfQoKICAgIGNvbnN0IHNjb3BlVG9NZXJnZSA9IHR5cGVvZiBjYXB0dXJlQ29udGV4dCA9PT0gJ2Z1bmN0aW9uJyA/IGNhcHR1cmVDb250ZXh0KHRoaXMpIDogY2FwdHVyZUNvbnRleHQ7CgogICAgaWYgKHNjb3BlVG9NZXJnZSBpbnN0YW5jZW9mIFNjb3BlKSB7CiAgICAgIGNvbnN0IHNjb3BlRGF0YSA9IHNjb3BlVG9NZXJnZS5nZXRTY29wZURhdGEoKTsKCiAgICAgIHRoaXMuX3RhZ3MgPSB7IC4uLnRoaXMuX3RhZ3MsIC4uLnNjb3BlRGF0YS50YWdzIH07CiAgICAgIHRoaXMuX2V4dHJhID0geyAuLi50aGlzLl9leHRyYSwgLi4uc2NvcGVEYXRhLmV4dHJhIH07CiAgICAgIHRoaXMuX2NvbnRleHRzID0geyAuLi50aGlzLl9jb250ZXh0cywgLi4uc2NvcGVEYXRhLmNvbnRleHRzIH07CiAgICAgIGlmIChzY29wZURhdGEudXNlciAmJiBPYmplY3Qua2V5cyhzY29wZURhdGEudXNlcikubGVuZ3RoKSB7CiAgICAgICAgdGhpcy5fdXNlciA9IHNjb3BlRGF0YS51c2VyOwogICAgICB9CiAgICAgIGlmIChzY29wZURhdGEubGV2ZWwpIHsKICAgICAgICB0aGlzLl9sZXZlbCA9IHNjb3BlRGF0YS5sZXZlbDsKICAgICAgfQogICAgICBpZiAoc2NvcGVEYXRhLmZpbmdlcnByaW50Lmxlbmd0aCkgewogICAgICAgIHRoaXMuX2ZpbmdlcnByaW50ID0gc2NvcGVEYXRhLmZpbmdlcnByaW50OwogICAgICB9CiAgICAgIGlmIChzY29wZVRvTWVyZ2UuZ2V0UmVxdWVzdFNlc3Npb24oKSkgewogICAgICAgIHRoaXMuX3JlcXVlc3RTZXNzaW9uID0gc2NvcGVUb01lcmdlLmdldFJlcXVlc3RTZXNzaW9uKCk7CiAgICAgIH0KICAgICAgaWYgKHNjb3BlRGF0YS5wcm9wYWdhdGlvbkNvbnRleHQpIHsKICAgICAgICB0aGlzLl9wcm9wYWdhdGlvbkNvbnRleHQgPSBzY29wZURhdGEucHJvcGFnYXRpb25Db250ZXh0OwogICAgICB9CiAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3Qoc2NvcGVUb01lcmdlKSkgewogICAgICBjb25zdCBzY29wZUNvbnRleHQgPSBjYXB0dXJlQ29udGV4dCA7CiAgICAgIHRoaXMuX3RhZ3MgPSB7IC4uLnRoaXMuX3RhZ3MsIC4uLnNjb3BlQ29udGV4dC50YWdzIH07CiAgICAgIHRoaXMuX2V4dHJhID0geyAuLi50aGlzLl9leHRyYSwgLi4uc2NvcGVDb250ZXh0LmV4dHJhIH07CiAgICAgIHRoaXMuX2NvbnRleHRzID0geyAuLi50aGlzLl9jb250ZXh0cywgLi4uc2NvcGVDb250ZXh0LmNvbnRleHRzIH07CiAgICAgIGlmIChzY29wZUNvbnRleHQudXNlcikgewogICAgICAgIHRoaXMuX3VzZXIgPSBzY29wZUNvbnRleHQudXNlcjsKICAgICAgfQogICAgICBpZiAoc2NvcGVDb250ZXh0LmxldmVsKSB7CiAgICAgICAgdGhpcy5fbGV2ZWwgPSBzY29wZUNvbnRleHQubGV2ZWw7CiAgICAgIH0KICAgICAgaWYgKHNjb3BlQ29udGV4dC5maW5nZXJwcmludCkgewogICAgICAgIHRoaXMuX2ZpbmdlcnByaW50ID0gc2NvcGVDb250ZXh0LmZpbmdlcnByaW50OwogICAgICB9CiAgICAgIGlmIChzY29wZUNvbnRleHQucmVxdWVzdFNlc3Npb24pIHsKICAgICAgICB0aGlzLl9yZXF1ZXN0U2Vzc2lvbiA9IHNjb3BlQ29udGV4dC5yZXF1ZXN0U2Vzc2lvbjsKICAgICAgfQogICAgICBpZiAoc2NvcGVDb250ZXh0LnByb3BhZ2F0aW9uQ29udGV4dCkgewogICAgICAgIHRoaXMuX3Byb3BhZ2F0aW9uQ29udGV4dCA9IHNjb3BlQ29udGV4dC5wcm9wYWdhdGlvbkNvbnRleHQ7CiAgICAgIH0KICAgIH0KCiAgICByZXR1cm4gdGhpczsKICB9CgogIC8qKgogICAqIEBpbmhlcml0RG9jCiAgICovCiAgIGNsZWFyKCkgewogICAgdGhpcy5fYnJlYWRjcnVtYnMgPSBbXTsKICAgIHRoaXMuX3RhZ3MgPSB7fTsKICAgIHRoaXMuX2V4dHJhID0ge307CiAgICB0aGlzLl91c2VyID0ge307CiAgICB0aGlzLl9jb250ZXh0cyA9IHt9OwogICAgdGhpcy5fbGV2ZWwgPSB1bmRlZmluZWQ7CiAgICB0aGlzLl90cmFuc2FjdGlvbk5hbWUgPSB1bmRlZmluZWQ7CiAgICB0aGlzLl9maW5nZXJwcmludCA9IHVuZGVmaW5lZDsKICAgIHRoaXMuX3JlcXVlc3RTZXNzaW9uID0gdW5kZWZpbmVkOwogICAgdGhpcy5fc3BhbiA9IHVuZGVmaW5lZDsKICAgIHRoaXMuX3Nlc3Npb24gPSB1bmRlZmluZWQ7CiAgICB0aGlzLl9ub3RpZnlTY29wZUxpc3RlbmVycygpOwogICAgdGhpcy5fYXR0YWNobWVudHMgPSBbXTsKICAgIHRoaXMuX3Byb3BhZ2F0aW9uQ29udGV4dCA9IGdlbmVyYXRlUHJvcGFnYXRpb25Db250ZXh0KCk7CiAgICByZXR1cm4gdGhpczsKICB9CgogIC8qKgogICAqIEBpbmhlcml0RG9jCiAgICovCiAgIGFkZEJyZWFkY3J1bWIoYnJlYWRjcnVtYiwgbWF4QnJlYWRjcnVtYnMpIHsKICAgIGNvbnN0IG1heENydW1icyA9IHR5cGVvZiBtYXhCcmVhZGNydW1icyA9PT0gJ251bWJlcicgPyBtYXhCcmVhZGNydW1icyA6IERFRkFVTFRfTUFYX0JSRUFEQ1JVTUJTOwoKICAgIC8vIE5vIGRhdGEgaGFzIGJlZW4gY2hhbmdlZCwgc28gZG9uJ3Qgbm90aWZ5IHNjb3BlIGxpc3RlbmVycwogICAgaWYgKG1heENydW1icyA8PSAwKSB7CiAgICAgIHJldHVybiB0aGlzOwogICAgfQoKICAgIGNvbnN0IG1lcmdlZEJyZWFkY3J1bWIgPSB7CiAgICAgIHRpbWVzdGFtcDogZGF0ZVRpbWVzdGFtcEluU2Vjb25kcygpLAogICAgICAuLi5icmVhZGNydW1iLAogICAgfTsKCiAgICBjb25zdCBicmVhZGNydW1icyA9IHRoaXMuX2JyZWFkY3J1bWJzOwogICAgYnJlYWRjcnVtYnMucHVzaChtZXJnZWRCcmVhZGNydW1iKTsKICAgIHRoaXMuX2JyZWFkY3J1bWJzID0gYnJlYWRjcnVtYnMubGVuZ3RoID4gbWF4Q3J1bWJzID8gYnJlYWRjcnVtYnMuc2xpY2UoLW1heENydW1icykgOiBicmVhZGNydW1iczsKCiAgICB0aGlzLl9ub3RpZnlTY29wZUxpc3RlbmVycygpOwoKICAgIHJldHVybiB0aGlzOwogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKi8KICAgZ2V0TGFzdEJyZWFkY3J1bWIoKSB7CiAgICByZXR1cm4gdGhpcy5fYnJlYWRjcnVtYnNbdGhpcy5fYnJlYWRjcnVtYnMubGVuZ3RoIC0gMV07CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqLwogICBjbGVhckJyZWFkY3J1bWJzKCkgewogICAgdGhpcy5fYnJlYWRjcnVtYnMgPSBbXTsKICAgIHRoaXMuX25vdGlmeVNjb3BlTGlzdGVuZXJzKCk7CiAgICByZXR1cm4gdGhpczsKICB9CgogIC8qKgogICAqIEBpbmhlcml0RG9jCiAgICovCiAgIGFkZEF0dGFjaG1lbnQoYXR0YWNobWVudCkgewogICAgdGhpcy5fYXR0YWNobWVudHMucHVzaChhdHRhY2htZW50KTsKICAgIHJldHVybiB0aGlzOwogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKiBAZGVwcmVjYXRlZCBVc2UgYGdldFNjb3BlRGF0YSgpYCBpbnN0ZWFkLgogICAqLwogICBnZXRBdHRhY2htZW50cygpIHsKICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldFNjb3BlRGF0YSgpOwoKICAgIHJldHVybiBkYXRhLmF0dGFjaG1lbnRzOwogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKi8KICAgY2xlYXJBdHRhY2htZW50cygpIHsKICAgIHRoaXMuX2F0dGFjaG1lbnRzID0gW107CiAgICByZXR1cm4gdGhpczsKICB9CgogIC8qKiBAaW5oZXJpdERvYyAqLwogICBnZXRTY29wZURhdGEoKSB7CiAgICBjb25zdCB7CiAgICAgIF9icmVhZGNydW1icywKICAgICAgX2F0dGFjaG1lbnRzLAogICAgICBfY29udGV4dHMsCiAgICAgIF90YWdzLAogICAgICBfZXh0cmEsCiAgICAgIF91c2VyLAogICAgICBfbGV2ZWwsCiAgICAgIF9maW5nZXJwcmludCwKICAgICAgX2V2ZW50UHJvY2Vzc29ycywKICAgICAgX3Byb3BhZ2F0aW9uQ29udGV4dCwKICAgICAgX3Nka1Byb2Nlc3NpbmdNZXRhZGF0YSwKICAgICAgX3RyYW5zYWN0aW9uTmFtZSwKICAgICAgX3NwYW4sCiAgICB9ID0gdGhpczsKCiAgICByZXR1cm4gewogICAgICBicmVhZGNydW1iczogX2JyZWFkY3J1bWJzLAogICAgICBhdHRhY2htZW50czogX2F0dGFjaG1lbnRzLAogICAgICBjb250ZXh0czogX2NvbnRleHRzLAogICAgICB0YWdzOiBfdGFncywKICAgICAgZXh0cmE6IF9leHRyYSwKICAgICAgdXNlcjogX3VzZXIsCiAgICAgIGxldmVsOiBfbGV2ZWwsCiAgICAgIGZpbmdlcnByaW50OiBfZmluZ2VycHJpbnQgfHwgW10sCiAgICAgIGV2ZW50UHJvY2Vzc29yczogX2V2ZW50UHJvY2Vzc29ycywKICAgICAgcHJvcGFnYXRpb25Db250ZXh0OiBfcHJvcGFnYXRpb25Db250ZXh0LAogICAgICBzZGtQcm9jZXNzaW5nTWV0YWRhdGE6IF9zZGtQcm9jZXNzaW5nTWV0YWRhdGEsCiAgICAgIHRyYW5zYWN0aW9uTmFtZTogX3RyYW5zYWN0aW9uTmFtZSwKICAgICAgc3BhbjogX3NwYW4sCiAgICB9OwogIH0KCiAgLyoqCiAgICogQXBwbGllcyBkYXRhIGZyb20gdGhlIHNjb3BlIHRvIHRoZSBldmVudCBhbmQgcnVucyBhbGwgZXZlbnQgcHJvY2Vzc29ycyBvbiBpdC4KICAgKgogICAqIEBwYXJhbSBldmVudCBFdmVudAogICAqIEBwYXJhbSBoaW50IE9iamVjdCBjb250YWluaW5nIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIG9yaWdpbmFsIGV4Y2VwdGlvbiwgZm9yIHVzZSBieSB0aGUgZXZlbnQgcHJvY2Vzc29ycy4KICAgKiBAaGlkZGVuCiAgICogQGRlcHJlY2F0ZWQgVXNlIGBhcHBseVNjb3BlRGF0YVRvRXZlbnQoKWAgZGlyZWN0bHkKICAgKi8KICAgYXBwbHlUb0V2ZW50KAogICAgZXZlbnQsCiAgICBoaW50ID0ge30sCiAgICBhZGRpdGlvbmFsRXZlbnRQcm9jZXNzb3JzID0gW10sCiAgKSB7CiAgICBhcHBseVNjb3BlRGF0YVRvRXZlbnQoZXZlbnQsIHRoaXMuZ2V0U2NvcGVEYXRhKCkpOwoKICAgIC8vIFRPRE8gKHY4KTogVXBkYXRlIHRoaXMgb3JkZXIgdG8gYmU6IEdsb2JhbCA+IENsaWVudCA+IFNjb3BlCiAgICBjb25zdCBldmVudFByb2Nlc3NvcnMgPSBbCiAgICAgIC4uLmFkZGl0aW9uYWxFdmVudFByb2Nlc3NvcnMsCiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgICAuLi5nZXRHbG9iYWxFdmVudFByb2Nlc3NvcnMoKSwKICAgICAgLi4udGhpcy5fZXZlbnRQcm9jZXNzb3JzLAogICAgXTsKCiAgICByZXR1cm4gbm90aWZ5RXZlbnRQcm9jZXNzb3JzKGV2ZW50UHJvY2Vzc29ycywgZXZlbnQsIGhpbnQpOwogIH0KCiAgLyoqCiAgICogQWRkIGRhdGEgd2hpY2ggd2lsbCBiZSBhY2Nlc3NpYmxlIGR1cmluZyBldmVudCBwcm9jZXNzaW5nIGJ1dCB3b24ndCBnZXQgc2VudCB0byBTZW50cnkKICAgKi8KICAgc2V0U0RLUHJvY2Vzc2luZ01ldGFkYXRhKG5ld0RhdGEpIHsKICAgIHRoaXMuX3Nka1Byb2Nlc3NpbmdNZXRhZGF0YSA9IHsgLi4udGhpcy5fc2RrUHJvY2Vzc2luZ01ldGFkYXRhLCAuLi5uZXdEYXRhIH07CgogICAgcmV0dXJuIHRoaXM7CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqLwogICBzZXRQcm9wYWdhdGlvbkNvbnRleHQoY29udGV4dCkgewogICAgdGhpcy5fcHJvcGFnYXRpb25Db250ZXh0ID0gY29udGV4dDsKICAgIHJldHVybiB0aGlzOwogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKi8KICAgZ2V0UHJvcGFnYXRpb25Db250ZXh0KCkgewogICAgcmV0dXJuIHRoaXMuX3Byb3BhZ2F0aW9uQ29udGV4dDsKICB9CgogIC8qKgogICAqIENhcHR1cmUgYW4gZXhjZXB0aW9uIGZvciB0aGlzIHNjb3BlLgogICAqCiAgICogQHBhcmFtIGV4Y2VwdGlvbiBUaGUgZXhjZXB0aW9uIHRvIGNhcHR1cmUuCiAgICogQHBhcmFtIGhpbnQgT3B0aW5hbCBhZGRpdGlvbmFsIGRhdGEgdG8gYXR0YWNoIHRvIHRoZSBTZW50cnkgZXZlbnQuCiAgICogQHJldHVybnMgdGhlIGlkIG9mIHRoZSBjYXB0dXJlZCBTZW50cnkgZXZlbnQuCiAgICovCiAgIGNhcHR1cmVFeGNlcHRpb24oZXhjZXB0aW9uLCBoaW50KSB7CiAgICBjb25zdCBldmVudElkID0gaGludCAmJiBoaW50LmV2ZW50X2lkID8gaGludC5ldmVudF9pZCA6IHV1aWQ0KCk7CgogICAgaWYgKCF0aGlzLl9jbGllbnQpIHsKICAgICAgbG9nZ2VyLndhcm4oJ05vIGNsaWVudCBjb25maWd1cmVkIG9uIHNjb3BlIC0gd2lsbCBub3QgY2FwdHVyZSBleGNlcHRpb24hJyk7CiAgICAgIHJldHVybiBldmVudElkOwogICAgfQoKICAgIGNvbnN0IHN5bnRoZXRpY0V4Y2VwdGlvbiA9IG5ldyBFcnJvcignU2VudHJ5IHN5bnRoZXRpY0V4Y2VwdGlvbicpOwoKICAgIHRoaXMuX2NsaWVudC5jYXB0dXJlRXhjZXB0aW9uKAogICAgICBleGNlcHRpb24sCiAgICAgIHsKICAgICAgICBvcmlnaW5hbEV4Y2VwdGlvbjogZXhjZXB0aW9uLAogICAgICAgIHN5bnRoZXRpY0V4Y2VwdGlvbiwKICAgICAgICAuLi5oaW50LAogICAgICAgIGV2ZW50X2lkOiBldmVudElkLAogICAgICB9LAogICAgICB0aGlzLAogICAgKTsKCiAgICByZXR1cm4gZXZlbnRJZDsKICB9CgogIC8qKgogICAqIENhcHR1cmUgYSBtZXNzYWdlIGZvciB0aGlzIHNjb3BlLgogICAqCiAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gY2FwdHVyZS4KICAgKiBAcGFyYW0gbGV2ZWwgQW4gb3B0aW9uYWwgc2V2ZXJpdHkgbGV2ZWwgdG8gcmVwb3J0IHRoZSBtZXNzYWdlIHdpdGguCiAgICogQHBhcmFtIGhpbnQgT3B0aW9uYWwgYWRkaXRpb25hbCBkYXRhIHRvIGF0dGFjaCB0byB0aGUgU2VudHJ5IGV2ZW50LgogICAqIEByZXR1cm5zIHRoZSBpZCBvZiB0aGUgY2FwdHVyZWQgbWVzc2FnZS4KICAgKi8KICAgY2FwdHVyZU1lc3NhZ2UobWVzc2FnZSwgbGV2ZWwsIGhpbnQpIHsKICAgIGNvbnN0IGV2ZW50SWQgPSBoaW50ICYmIGhpbnQuZXZlbnRfaWQgPyBoaW50LmV2ZW50X2lkIDogdXVpZDQoKTsKCiAgICBpZiAoIXRoaXMuX2NsaWVudCkgewogICAgICBsb2dnZXIud2FybignTm8gY2xpZW50IGNvbmZpZ3VyZWQgb24gc2NvcGUgLSB3aWxsIG5vdCBjYXB0dXJlIG1lc3NhZ2UhJyk7CiAgICAgIHJldHVybiBldmVudElkOwogICAgfQoKICAgIGNvbnN0IHN5bnRoZXRpY0V4Y2VwdGlvbiA9IG5ldyBFcnJvcihtZXNzYWdlKTsKCiAgICB0aGlzLl9jbGllbnQuY2FwdHVyZU1lc3NhZ2UoCiAgICAgIG1lc3NhZ2UsCiAgICAgIGxldmVsLAogICAgICB7CiAgICAgICAgb3JpZ2luYWxFeGNlcHRpb246IG1lc3NhZ2UsCiAgICAgICAgc3ludGhldGljRXhjZXB0aW9uLAogICAgICAgIC4uLmhpbnQsCiAgICAgICAgZXZlbnRfaWQ6IGV2ZW50SWQsCiAgICAgIH0sCiAgICAgIHRoaXMsCiAgICApOwoKICAgIHJldHVybiBldmVudElkOwogIH0KCiAgLyoqCiAgICogQ2FwdHVyZXMgYSBtYW51YWxseSBjcmVhdGVkIGV2ZW50IGZvciB0aGlzIHNjb3BlIGFuZCBzZW5kcyBpdCB0byBTZW50cnkuCiAgICoKICAgKiBAcGFyYW0gZXhjZXB0aW9uIFRoZSBldmVudCB0byBjYXB0dXJlLgogICAqIEBwYXJhbSBoaW50IE9wdGlvbmFsIGFkZGl0aW9uYWwgZGF0YSB0byBhdHRhY2ggdG8gdGhlIFNlbnRyeSBldmVudC4KICAgKiBAcmV0dXJucyB0aGUgaWQgb2YgdGhlIGNhcHR1cmVkIGV2ZW50LgogICAqLwogICBjYXB0dXJlRXZlbnQoZXZlbnQsIGhpbnQpIHsKICAgIGNvbnN0IGV2ZW50SWQgPSBoaW50ICYmIGhpbnQuZXZlbnRfaWQgPyBoaW50LmV2ZW50X2lkIDogdXVpZDQoKTsKCiAgICBpZiAoIXRoaXMuX2NsaWVudCkgewogICAgICBsb2dnZXIud2FybignTm8gY2xpZW50IGNvbmZpZ3VyZWQgb24gc2NvcGUgLSB3aWxsIG5vdCBjYXB0dXJlIGV2ZW50IScpOwogICAgICByZXR1cm4gZXZlbnRJZDsKICAgIH0KCiAgICB0aGlzLl9jbGllbnQuY2FwdHVyZUV2ZW50KGV2ZW50LCB7IC4uLmhpbnQsIGV2ZW50X2lkOiBldmVudElkIH0sIHRoaXMpOwoKICAgIHJldHVybiBldmVudElkOwogIH0KCiAgLyoqCiAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCBvbiBldmVyeSBzZXQgY2FsbC4KICAgKi8KICAgX25vdGlmeVNjb3BlTGlzdGVuZXJzKCkgewogICAgLy8gV2UgbmVlZCB0aGlzIGNoZWNrIGZvciB0aGlzLl9ub3RpZnlpbmdMaXN0ZW5lcnMgdG8gYmUgYWJsZSB0byB3b3JrIG9uIHNjb3BlIGR1cmluZyB1cGRhdGVzCiAgICAvLyBJZiB0aGlzIGNoZWNrIGlzIG5vdCBoZXJlIHdlJ2xsIHByb2R1Y2UgZW5kbGVzcyByZWN1cnNpb24gd2hlbiBzb21ldGhpbmcgaXMgZG9uZSB3aXRoIHRoZSBzY29wZQogICAgLy8gZHVyaW5nIHRoZSBjYWxsYmFjay4KICAgIGlmICghdGhpcy5fbm90aWZ5aW5nTGlzdGVuZXJzKSB7CiAgICAgIHRoaXMuX25vdGlmeWluZ0xpc3RlbmVycyA9IHRydWU7CiAgICAgIHRoaXMuX3Njb3BlTGlzdGVuZXJzLmZvckVhY2goY2FsbGJhY2sgPT4gewogICAgICAgIGNhbGxiYWNrKHRoaXMpOwogICAgICB9KTsKICAgICAgdGhpcy5fbm90aWZ5aW5nTGlzdGVuZXJzID0gZmFsc2U7CiAgICB9CiAgfQp9CgpmdW5jdGlvbiBnZW5lcmF0ZVByb3BhZ2F0aW9uQ29udGV4dCgpIHsKICByZXR1cm4gewogICAgdHJhY2VJZDogdXVpZDQoKSwKICAgIHNwYW5JZDogdXVpZDQoKS5zdWJzdHJpbmcoMTYpLAogIH07Cn0KCmNvbnN0IFNES19WRVJTSU9OID0gJzcuMTIwLjAnOwoKLyoqCiAqIEFQSSBjb21wYXRpYmlsaXR5IHZlcnNpb24gb2YgdGhpcyBodWIuCiAqCiAqIFdBUk5JTkc6IFRoaXMgbnVtYmVyIHNob3VsZCBvbmx5IGJlIGluY3JlYXNlZCB3aGVuIHRoZSBnbG9iYWwgaW50ZXJmYWNlCiAqIGNoYW5nZXMgYW5kIG5ldyBtZXRob2RzIGFyZSBpbnRyb2R1Y2VkLgogKgogKiBAaGlkZGVuCiAqLwpjb25zdCBBUElfVkVSU0lPTiA9IHBhcnNlRmxvYXQoU0RLX1ZFUlNJT04pOwoKLyoqCiAqIERlZmF1bHQgbWF4aW11bSBudW1iZXIgb2YgYnJlYWRjcnVtYnMgYWRkZWQgdG8gYW4gZXZlbnQuIENhbiBiZSBvdmVyd3JpdHRlbgogKiB3aXRoIHtAbGluayBPcHRpb25zLm1heEJyZWFkY3J1bWJzfS4KICovCmNvbnN0IERFRkFVTFRfQlJFQURDUlVNQlMgPSAxMDA7CgovKioKICogQGRlcHJlY2F0ZWQgVGhlIGBIdWJgIGNsYXNzIHdpbGwgYmUgcmVtb3ZlZCBpbiB2ZXJzaW9uIDggb2YgdGhlIFNESyBpbiBmYXZvdXIgb2YgYFNjb3BlYCBhbmQgYENsaWVudGAgb2JqZWN0cy4KICoKICogSWYgeW91IHByZXZpb3VzbHkgdXNlZCB0aGUgYEh1YmAgY2xhc3MgZGlyZWN0bHksIHJlcGxhY2UgaXQgd2l0aCBgU2NvcGVgIGFuZCBgQ2xpZW50YCBvYmplY3RzLiBNb3JlIGluZm9ybWF0aW9uOgogKiAtIFtNdWx0aXBsZSBTZW50cnkgSW5zdGFuY2VzXShodHRwczovL2RvY3Muc2VudHJ5LmlvL3BsYXRmb3Jtcy9qYXZhc2NyaXB0L2Jlc3QtcHJhY3RpY2VzL211bHRpcGxlLXNlbnRyeS1pbnN0YW5jZXMvKQogKiAtIFtCcm93c2VyIEV4dGVuc2lvbnNdKGh0dHBzOi8vZG9jcy5zZW50cnkuaW8vcGxhdGZvcm1zL2phdmFzY3JpcHQvYmVzdC1wcmFjdGljZXMvYnJvd3Nlci1leHRlbnNpb25zLykKICoKICogU29tZSBvZiBvdXIgQVBJcyBhcmUgdHlwZWQgd2l0aCB0aGUgSHViIGNsYXNzIGluc3RlYWQgb2YgdGhlIGludGVyZmFjZSAoZS5nLiBgZ2V0Q3VycmVudEh1YmApLiBNb3N0IG9mIHRoZW0gYXJlIGRlcHJlY2F0ZWQKICogdGhlbXNlbHZlcyBhbmQgd2lsbCBhbHNvIGJlIHJlbW92ZWQgaW4gdmVyc2lvbiA4LiBNb3JlIGluZm9ybWF0aW9uOgogKiAtIFtNaWdyYXRpb24gR3VpZGVdKGh0dHBzOi8vZ2l0aHViLmNvbS9nZXRzZW50cnkvc2VudHJ5LWphdmFzY3JpcHQvYmxvYi9kZXZlbG9wL01JR1JBVElPTi5tZCNkZXByZWNhdGUtaHViKQogKi8KLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCmNsYXNzIEh1YiAgewogIC8qKiBJcyBhIHtAbGluayBMYXllcn1bXSBjb250YWluaW5nIHRoZSBjbGllbnQgYW5kIHNjb3BlICovCgogIC8qKiBDb250YWlucyB0aGUgbGFzdCBldmVudCBpZCBvZiBhIGNhcHR1cmVkIGV2ZW50LiAgKi8KCiAgLyoqCiAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgaHViLCB3aWxsIHB1c2ggb25lIHtAbGluayBMYXllcn0gaW50byB0aGUKICAgKiBpbnRlcm5hbCBzdGFjayBvbiBjcmVhdGlvbi4KICAgKgogICAqIEBwYXJhbSBjbGllbnQgYm91bmQgdG8gdGhlIGh1Yi4KICAgKiBAcGFyYW0gc2NvcGUgYm91bmQgdG8gdGhlIGh1Yi4KICAgKiBAcGFyYW0gdmVyc2lvbiBudW1iZXIsIGhpZ2hlciBudW1iZXIgbWVhbnMgaGlnaGVyIHByaW9yaXR5LgogICAqCiAgICogQGRlcHJlY2F0ZWQgSW5zdGFudGlhdGlvbiBvZiBIdWIgb2JqZWN0cyBpcyBkZXByZWNhdGVkIGFuZCB0aGUgY29uc3RydWN0b3Igd2lsbCBiZSByZW1vdmVkIGluIHZlcnNpb24gOCBvZiB0aGUgU0RLLgogICAqCiAgICogSWYgeW91IGFyZSBjdXJyZW50bHkgdXNpbmcgdGhlIEh1YiBmb3IgbXVsdGktY2xpZW50IHVzZSBsaWtlIHNvOgogICAqCiAgICogYGBgCiAgICogLy8gT0xECiAgICogY29uc3QgaHViID0gbmV3IEh1YigpOwogICAqIGh1Yi5iaW5kQ2xpZW50KGNsaWVudCk7CiAgICogbWFrZU1haW4oaHViKQogICAqIGBgYAogICAqCiAgICogaW5zdGVhZCBpbml0aWFsaXplIHRoZSBjbGllbnQgYXMgZm9sbG93czoKICAgKgogICAqIGBgYAogICAqIC8vIE5FVwogICAqIFNlbnRyeS53aXRoSXNvbGF0aW9uU2NvcGUoKCkgPT4gewogICAqICAgIFNlbnRyeS5zZXRDdXJyZW50Q2xpZW50KGNsaWVudCk7CiAgICogICAgY2xpZW50LmluaXQoKTsKICAgKiB9KTsKICAgKiBgYGAKICAgKgogICAqIElmIHlvdSBhcmUgdXNpbmcgdGhlIEh1YiB0byBjYXB0dXJlIGV2ZW50cyBsaWtlIHNvOgogICAqCiAgICogYGBgCiAgICogLy8gT0xECiAgICogY29uc3QgY2xpZW50ID0gbmV3IENsaWVudCgpOwogICAqIGNvbnN0IGh1YiA9IG5ldyBIdWIoY2xpZW50KTsKICAgKiBodWIuY2FwdHVyZUV4Y2VwdGlvbigpCiAgICogYGBgCiAgICoKICAgKiBpbnN0ZWFkIGNhcHR1cmUgaXNvbGF0ZWQgZXZlbnRzIGFzIGZvbGxvd3M6CiAgICoKICAgKiBgYGAKICAgKiAvLyBORVcKICAgKiBjb25zdCBjbGllbnQgPSBuZXcgQ2xpZW50KCk7CiAgICogY29uc3Qgc2NvcGUgPSBuZXcgU2NvcGUoKTsKICAgKiBzY29wZS5zZXRDbGllbnQoY2xpZW50KTsKICAgKiBzY29wZS5jYXB0dXJlRXhjZXB0aW9uKCk7CiAgICogYGBgCiAgICovCiAgIGNvbnN0cnVjdG9yKAogICAgY2xpZW50LAogICAgc2NvcGUsCiAgICBpc29sYXRpb25TY29wZSwKICAgICAgX3ZlcnNpb24gPSBBUElfVkVSU0lPTiwKICApIHt0aGlzLl92ZXJzaW9uID0gX3ZlcnNpb247CiAgICBsZXQgYXNzaWduZWRTY29wZTsKICAgIGlmICghc2NvcGUpIHsKICAgICAgYXNzaWduZWRTY29wZSA9IG5ldyBTY29wZSgpOwogICAgICBhc3NpZ25lZFNjb3BlLnNldENsaWVudChjbGllbnQpOwogICAgfSBlbHNlIHsKICAgICAgYXNzaWduZWRTY29wZSA9IHNjb3BlOwogICAgfQoKICAgIGxldCBhc3NpZ25lZElzb2xhdGlvblNjb3BlOwogICAgaWYgKCFpc29sYXRpb25TY29wZSkgewogICAgICBhc3NpZ25lZElzb2xhdGlvblNjb3BlID0gbmV3IFNjb3BlKCk7CiAgICAgIGFzc2lnbmVkSXNvbGF0aW9uU2NvcGUuc2V0Q2xpZW50KGNsaWVudCk7CiAgICB9IGVsc2UgewogICAgICBhc3NpZ25lZElzb2xhdGlvblNjb3BlID0gaXNvbGF0aW9uU2NvcGU7CiAgICB9CgogICAgdGhpcy5fc3RhY2sgPSBbeyBzY29wZTogYXNzaWduZWRTY29wZSB9XTsKCiAgICBpZiAoY2xpZW50KSB7CiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgICB0aGlzLmJpbmRDbGllbnQoY2xpZW50KTsKICAgIH0KCiAgICB0aGlzLl9pc29sYXRpb25TY29wZSA9IGFzc2lnbmVkSXNvbGF0aW9uU2NvcGU7CiAgfQoKICAvKioKICAgKiBDaGVja3MgaWYgdGhpcyBodWIncyB2ZXJzaW9uIGlzIG9sZGVyIHRoYW4gdGhlIGdpdmVuIHZlcnNpb24uCiAgICoKICAgKiBAcGFyYW0gdmVyc2lvbiBBIHZlcnNpb24gbnVtYmVyIHRvIGNvbXBhcmUgdG8uCiAgICogQHJldHVybiBUcnVlIGlmIHRoZSBnaXZlbiB2ZXJzaW9uIGlzIG5ld2VyOyBvdGhlcndpc2UgZmFsc2UuCiAgICoKICAgKiBAZGVwcmVjYXRlZCBUaGlzIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4KICAgKi8KICAgaXNPbGRlclRoYW4odmVyc2lvbikgewogICAgcmV0dXJuIHRoaXMuX3ZlcnNpb24gPCB2ZXJzaW9uOwogIH0KCiAgLyoqCiAgICogVGhpcyBiaW5kcyB0aGUgZ2l2ZW4gY2xpZW50IHRvIHRoZSBjdXJyZW50IHNjb3BlLgogICAqIEBwYXJhbSBjbGllbnQgQW4gU0RLIGNsaWVudCAoY2xpZW50KSBpbnN0YW5jZS4KICAgKgogICAqIEBkZXByZWNhdGVkIFVzZSBgaW5pdEFuZEJpbmQoKWAgZGlyZWN0bHksIG9yIGBzZXRDdXJyZW50Q2xpZW50KClgIGFuZC9vciBgY2xpZW50LmluaXQoKWAgaW5zdGVhZC4KICAgKi8KICAgYmluZENsaWVudChjbGllbnQpIHsKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgY29uc3QgdG9wID0gdGhpcy5nZXRTdGFja1RvcCgpOwogICAgdG9wLmNsaWVudCA9IGNsaWVudDsKICAgIHRvcC5zY29wZS5zZXRDbGllbnQoY2xpZW50KTsKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgaWYgKGNsaWVudCAmJiBjbGllbnQuc2V0dXBJbnRlZ3JhdGlvbnMpIHsKICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICAgIGNsaWVudC5zZXR1cEludGVncmF0aW9ucygpOwogICAgfQogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKgogICAqIEBkZXByZWNhdGVkIFVzZSBgd2l0aFNjb3BlYCBpbnN0ZWFkLgogICAqLwogICBwdXNoU2NvcGUoKSB7CiAgICAvLyBXZSB3YW50IHRvIGNsb25lIHRoZSBjb250ZW50IG9mIHByZXYgc2NvcGUKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgY29uc3Qgc2NvcGUgPSB0aGlzLmdldFNjb3BlKCkuY2xvbmUoKTsKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgdGhpcy5nZXRTdGFjaygpLnB1c2goewogICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICAgICAgY2xpZW50OiB0aGlzLmdldENsaWVudCgpLAogICAgICBzY29wZSwKICAgIH0pOwogICAgcmV0dXJuIHNjb3BlOwogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKgogICAqIEBkZXByZWNhdGVkIFVzZSBgd2l0aFNjb3BlYCBpbnN0ZWFkLgogICAqLwogICBwb3BTY29wZSgpIHsKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgaWYgKHRoaXMuZ2V0U3RhY2soKS5sZW5ndGggPD0gMSkgcmV0dXJuIGZhbHNlOwogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICByZXR1cm4gISF0aGlzLmdldFN0YWNrKCkucG9wKCk7CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqCiAgICogQGRlcHJlY2F0ZWQgVXNlIGBTZW50cnkud2l0aFNjb3BlKClgIGluc3RlYWQuCiAgICovCiAgIHdpdGhTY29wZShjYWxsYmFjaykgewogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICBjb25zdCBzY29wZSA9IHRoaXMucHVzaFNjb3BlKCk7CgogICAgbGV0IG1heWJlUHJvbWlzZVJlc3VsdDsKICAgIHRyeSB7CiAgICAgIG1heWJlUHJvbWlzZVJlc3VsdCA9IGNhbGxiYWNrKHNjb3BlKTsKICAgIH0gY2F0Y2ggKGUpIHsKICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICAgIHRoaXMucG9wU2NvcGUoKTsKICAgICAgdGhyb3cgZTsKICAgIH0KCiAgICBpZiAoaXNUaGVuYWJsZShtYXliZVByb21pc2VSZXN1bHQpKSB7CiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBpc1RoZW5hYmxlIHJldHVybnMgdGhlIHdyb25nIHR5cGUKICAgICAgcmV0dXJuIG1heWJlUHJvbWlzZVJlc3VsdC50aGVuKAogICAgICAgIHJlcyA9PiB7CiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICAgICAgICAgIHRoaXMucG9wU2NvcGUoKTsKICAgICAgICAgIHJldHVybiByZXM7CiAgICAgICAgfSwKICAgICAgICBlID0+IHsKICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgICAgICAgdGhpcy5wb3BTY29wZSgpOwogICAgICAgICAgdGhyb3cgZTsKICAgICAgICB9LAogICAgICApOwogICAgfQoKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgdGhpcy5wb3BTY29wZSgpOwogICAgcmV0dXJuIG1heWJlUHJvbWlzZVJlc3VsdDsKICB9CgogIC8qKgogICAqIEBpbmhlcml0RG9jCiAgICoKICAgKiBAZGVwcmVjYXRlZCBVc2UgYFNlbnRyeS5nZXRDbGllbnQoKWAgaW5zdGVhZC4KICAgKi8KICAgZ2V0Q2xpZW50KCkgewogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICByZXR1cm4gdGhpcy5nZXRTdGFja1RvcCgpLmNsaWVudCA7CiAgfQoKICAvKioKICAgKiBSZXR1cm5zIHRoZSBzY29wZSBvZiB0aGUgdG9wIHN0YWNrLgogICAqCiAgICogQGRlcHJlY2F0ZWQgVXNlIGBTZW50cnkuZ2V0Q3VycmVudFNjb3BlKClgIGluc3RlYWQuCiAgICovCiAgIGdldFNjb3BlKCkgewogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICByZXR1cm4gdGhpcy5nZXRTdGFja1RvcCgpLnNjb3BlOwogIH0KCiAgLyoqCiAgICogQGRlcHJlY2F0ZWQgVXNlIGBTZW50cnkuZ2V0SXNvbGF0aW9uU2NvcGUoKWAgaW5zdGVhZC4KICAgKi8KICAgZ2V0SXNvbGF0aW9uU2NvcGUoKSB7CiAgICByZXR1cm4gdGhpcy5faXNvbGF0aW9uU2NvcGU7CiAgfQoKICAvKioKICAgKiBSZXR1cm5zIHRoZSBzY29wZSBzdGFjayBmb3IgZG9tYWlucyBvciB0aGUgcHJvY2Vzcy4KICAgKiBAZGVwcmVjYXRlZCBUaGlzIHdpbGwgYmUgcmVtb3ZlZCBpbiB2OC4KICAgKi8KICAgZ2V0U3RhY2soKSB7CiAgICByZXR1cm4gdGhpcy5fc3RhY2s7CiAgfQoKICAvKioKICAgKiBSZXR1cm5zIHRoZSB0b3Btb3N0IHNjb3BlIGxheWVyIGluIHRoZSBvcmRlciBkb21haW4gPiBsb2NhbCA+IHByb2Nlc3MuCiAgICogQGRlcHJlY2F0ZWQgVGhpcyB3aWxsIGJlIHJlbW92ZWQgaW4gdjguCiAgICovCiAgIGdldFN0YWNrVG9wKCkgewogICAgcmV0dXJuIHRoaXMuX3N0YWNrW3RoaXMuX3N0YWNrLmxlbmd0aCAtIDFdOwogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKgogICAqIEBkZXByZWNhdGVkIFVzZSBgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24oKWAgaW5zdGVhZC4KICAgKi8KICAgY2FwdHVyZUV4Y2VwdGlvbihleGNlcHRpb24sIGhpbnQpIHsKICAgIGNvbnN0IGV2ZW50SWQgPSAodGhpcy5fbGFzdEV2ZW50SWQgPSBoaW50ICYmIGhpbnQuZXZlbnRfaWQgPyBoaW50LmV2ZW50X2lkIDogdXVpZDQoKSk7CiAgICBjb25zdCBzeW50aGV0aWNFeGNlcHRpb24gPSBuZXcgRXJyb3IoJ1NlbnRyeSBzeW50aGV0aWNFeGNlcHRpb24nKTsKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgdGhpcy5nZXRTY29wZSgpLmNhcHR1cmVFeGNlcHRpb24oZXhjZXB0aW9uLCB7CiAgICAgIG9yaWdpbmFsRXhjZXB0aW9uOiBleGNlcHRpb24sCiAgICAgIHN5bnRoZXRpY0V4Y2VwdGlvbiwKICAgICAgLi4uaGludCwKICAgICAgZXZlbnRfaWQ6IGV2ZW50SWQsCiAgICB9KTsKCiAgICByZXR1cm4gZXZlbnRJZDsKICB9CgogIC8qKgogICAqIEBpbmhlcml0RG9jCiAgICoKICAgKiBAZGVwcmVjYXRlZCBVc2UgIGBTZW50cnkuY2FwdHVyZU1lc3NhZ2UoKWAgaW5zdGVhZC4KICAgKi8KICAgY2FwdHVyZU1lc3NhZ2UoCiAgICBtZXNzYWdlLAogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICBsZXZlbCwKICAgIGhpbnQsCiAgKSB7CiAgICBjb25zdCBldmVudElkID0gKHRoaXMuX2xhc3RFdmVudElkID0gaGludCAmJiBoaW50LmV2ZW50X2lkID8gaGludC5ldmVudF9pZCA6IHV1aWQ0KCkpOwogICAgY29uc3Qgc3ludGhldGljRXhjZXB0aW9uID0gbmV3IEVycm9yKG1lc3NhZ2UpOwogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICB0aGlzLmdldFNjb3BlKCkuY2FwdHVyZU1lc3NhZ2UobWVzc2FnZSwgbGV2ZWwsIHsKICAgICAgb3JpZ2luYWxFeGNlcHRpb246IG1lc3NhZ2UsCiAgICAgIHN5bnRoZXRpY0V4Y2VwdGlvbiwKICAgICAgLi4uaGludCwKICAgICAgZXZlbnRfaWQ6IGV2ZW50SWQsCiAgICB9KTsKCiAgICByZXR1cm4gZXZlbnRJZDsKICB9CgogIC8qKgogICAqIEBpbmhlcml0RG9jCiAgICoKICAgKiBAZGVwcmVjYXRlZCBVc2UgYFNlbnRyeS5jYXB0dXJlRXZlbnQoKWAgaW5zdGVhZC4KICAgKi8KICAgY2FwdHVyZUV2ZW50KGV2ZW50LCBoaW50KSB7CiAgICBjb25zdCBldmVudElkID0gaGludCAmJiBoaW50LmV2ZW50X2lkID8gaGludC5ldmVudF9pZCA6IHV1aWQ0KCk7CiAgICBpZiAoIWV2ZW50LnR5cGUpIHsKICAgICAgdGhpcy5fbGFzdEV2ZW50SWQgPSBldmVudElkOwogICAgfQogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICB0aGlzLmdldFNjb3BlKCkuY2FwdHVyZUV2ZW50KGV2ZW50LCB7IC4uLmhpbnQsIGV2ZW50X2lkOiBldmVudElkIH0pOwogICAgcmV0dXJuIGV2ZW50SWQ7CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqCiAgICogQGRlcHJlY2F0ZWQgVGhpcyB3aWxsIGJlIHJlbW92ZWQgaW4gdjguCiAgICovCiAgIGxhc3RFdmVudElkKCkgewogICAgcmV0dXJuIHRoaXMuX2xhc3RFdmVudElkOwogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKgogICAqIEBkZXByZWNhdGVkIFVzZSBgU2VudHJ5LmFkZEJyZWFkY3J1bWIoKWAgaW5zdGVhZC4KICAgKi8KICAgYWRkQnJlYWRjcnVtYihicmVhZGNydW1iLCBoaW50KSB7CiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICAgIGNvbnN0IHsgc2NvcGUsIGNsaWVudCB9ID0gdGhpcy5nZXRTdGFja1RvcCgpOwoKICAgIGlmICghY2xpZW50KSByZXR1cm47CgogICAgY29uc3QgeyBiZWZvcmVCcmVhZGNydW1iID0gbnVsbCwgbWF4QnJlYWRjcnVtYnMgPSBERUZBVUxUX0JSRUFEQ1JVTUJTIH0gPQogICAgICAoY2xpZW50LmdldE9wdGlvbnMgJiYgY2xpZW50LmdldE9wdGlvbnMoKSkgfHwge307CgogICAgaWYgKG1heEJyZWFkY3J1bWJzIDw9IDApIHJldHVybjsKCiAgICBjb25zdCB0aW1lc3RhbXAgPSBkYXRlVGltZXN0YW1wSW5TZWNvbmRzKCk7CiAgICBjb25zdCBtZXJnZWRCcmVhZGNydW1iID0geyB0aW1lc3RhbXAsIC4uLmJyZWFkY3J1bWIgfTsKICAgIGNvbnN0IGZpbmFsQnJlYWRjcnVtYiA9IGJlZm9yZUJyZWFkY3J1bWIKICAgICAgPyAoY29uc29sZVNhbmRib3goKCkgPT4gYmVmb3JlQnJlYWRjcnVtYihtZXJnZWRCcmVhZGNydW1iLCBoaW50KSkgKQogICAgICA6IG1lcmdlZEJyZWFkY3J1bWI7CgogICAgaWYgKGZpbmFsQnJlYWRjcnVtYiA9PT0gbnVsbCkgcmV0dXJuOwoKICAgIGlmIChjbGllbnQuZW1pdCkgewogICAgICBjbGllbnQuZW1pdCgnYmVmb3JlQWRkQnJlYWRjcnVtYicsIGZpbmFsQnJlYWRjcnVtYiwgaGludCk7CiAgICB9CgogICAgLy8gVE9ETyh2OCk6IEkga25vdyB0aGlzIGNvbW1lbnQgZG9lc24ndCBtYWtlIG11Y2ggc2Vuc2UgYmVjYXVzZSB0aGUgaHViIHdpbGwgYmUgZGVwcmVjYXRlZCBidXQgSSBzdGlsbCB3YW50ZWQgdG8KICAgIC8vIHdyaXRlIGl0IGRvd24uIEluIHRoZW9yeSwgd2Ugd291bGQgaGF2ZSB0byBhZGQgdGhlIGJyZWFkY3J1bWJzIHRvIHRoZSBpc29sYXRpb24gc2NvcGUgaGVyZSwgaG93ZXZlciwgdGhhdCB3b3VsZAogICAgLy8gZHVwbGljYXRlIGFsbCBvZiB0aGUgYnJlYWRjcnVtYnMuIFRoZXJlIHdhcyB0aGUgcG9zc2liaWxpdHkgb2YgYWRkaW5nIGJyZWFkY3J1bWJzIHRvIGJvdGgsIHRoZSBpc29sYXRpb24gc2NvcGUKICAgIC8vIGFuZCB0aGUgbm9ybWFsIHNjb3BlLCBhbmQgZGVkdXBsaWNhdGluZyBpdCBkb3duIHRoZSBsaW5lIGluIHRoZSBldmVudCBwcm9jZXNzaW5nIHBpcGVsaW5lLiBIb3dldmVyLCB0aGF0IHdvdWxkCiAgICAvLyBoYXZlIGJlZW4gdmVyeSBmcmFnaWxlLCBiZWNhdXNlIHRoZSBicmVhZGNydW1iIG9iamVjdHMgd291bGQgaGF2ZSBuZWVkZWQgdG8ga2VlcCB0aGVpciBpZGVudGl0eSBhbGwgdGhyb3VnaG91dAogICAgLy8gdGhlIGV2ZW50IHByb2Nlc3NpbmcgcGlwZWxpbmUuCiAgICAvLyBJbiB0aGUgbmV3IGltcGxlbWVudGF0aW9uLCB0aGUgdG9wIGxldmVsIGBTZW50cnkuYWRkQnJlYWRjcnVtYigpYCBzaG91bGQgT05MWSB3cml0ZSB0byB0aGUgaXNvbGF0aW9uIHNjb3BlLgoKICAgIHNjb3BlLmFkZEJyZWFkY3J1bWIoZmluYWxCcmVhZGNydW1iLCBtYXhCcmVhZGNydW1icyk7CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqIEBkZXByZWNhdGVkIFVzZSBgU2VudHJ5LnNldFVzZXIoKWAgaW5zdGVhZC4KICAgKi8KICAgc2V0VXNlcih1c2VyKSB7CiAgICAvLyBUT0RPKHY4KTogVGhlIHRvcCBsZXZlbCBgU2VudHJ5LnNldFVzZXIoKWAgZnVuY3Rpb24gc2hvdWxkIHdyaXRlIE9OTFkgdG8gdGhlIGlzb2xhdGlvbiBzY29wZS4KICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgdGhpcy5nZXRTY29wZSgpLnNldFVzZXIodXNlcik7CiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICAgIHRoaXMuZ2V0SXNvbGF0aW9uU2NvcGUoKS5zZXRVc2VyKHVzZXIpOwogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKiBAZGVwcmVjYXRlZCBVc2UgYFNlbnRyeS5zZXRUYWdzKClgIGluc3RlYWQuCiAgICovCiAgIHNldFRhZ3ModGFncykgewogICAgLy8gVE9ETyh2OCk6IFRoZSB0b3AgbGV2ZWwgYFNlbnRyeS5zZXRUYWdzKClgIGZ1bmN0aW9uIHNob3VsZCB3cml0ZSBPTkxZIHRvIHRoZSBpc29sYXRpb24gc2NvcGUuCiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICAgIHRoaXMuZ2V0U2NvcGUoKS5zZXRUYWdzKHRhZ3MpOwogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICB0aGlzLmdldElzb2xhdGlvblNjb3BlKCkuc2V0VGFncyh0YWdzKTsKICB9CgogIC8qKgogICAqIEBpbmhlcml0RG9jCiAgICogQGRlcHJlY2F0ZWQgVXNlIGBTZW50cnkuc2V0RXh0cmFzKClgIGluc3RlYWQuCiAgICovCiAgIHNldEV4dHJhcyhleHRyYXMpIHsKICAgIC8vIFRPRE8odjgpOiBUaGUgdG9wIGxldmVsIGBTZW50cnkuc2V0RXh0cmFzKClgIGZ1bmN0aW9uIHNob3VsZCB3cml0ZSBPTkxZIHRvIHRoZSBpc29sYXRpb24gc2NvcGUuCiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICAgIHRoaXMuZ2V0U2NvcGUoKS5zZXRFeHRyYXMoZXh0cmFzKTsKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgdGhpcy5nZXRJc29sYXRpb25TY29wZSgpLnNldEV4dHJhcyhleHRyYXMpOwogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKiBAZGVwcmVjYXRlZCBVc2UgYFNlbnRyeS5zZXRUYWcoKWAgaW5zdGVhZC4KICAgKi8KICAgc2V0VGFnKGtleSwgdmFsdWUpIHsKICAgIC8vIFRPRE8odjgpOiBUaGUgdG9wIGxldmVsIGBTZW50cnkuc2V0VGFnKClgIGZ1bmN0aW9uIHNob3VsZCB3cml0ZSBPTkxZIHRvIHRoZSBpc29sYXRpb24gc2NvcGUuCiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICAgIHRoaXMuZ2V0U2NvcGUoKS5zZXRUYWcoa2V5LCB2YWx1ZSk7CiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICAgIHRoaXMuZ2V0SXNvbGF0aW9uU2NvcGUoKS5zZXRUYWcoa2V5LCB2YWx1ZSk7CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqIEBkZXByZWNhdGVkIFVzZSBgU2VudHJ5LnNldEV4dHJhKClgIGluc3RlYWQuCiAgICovCiAgIHNldEV4dHJhKGtleSwgZXh0cmEpIHsKICAgIC8vIFRPRE8odjgpOiBUaGUgdG9wIGxldmVsIGBTZW50cnkuc2V0RXh0cmEoKWAgZnVuY3Rpb24gc2hvdWxkIHdyaXRlIE9OTFkgdG8gdGhlIGlzb2xhdGlvbiBzY29wZS4KICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgdGhpcy5nZXRTY29wZSgpLnNldEV4dHJhKGtleSwgZXh0cmEpOwogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICB0aGlzLmdldElzb2xhdGlvblNjb3BlKCkuc2V0RXh0cmEoa2V5LCBleHRyYSk7CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqIEBkZXByZWNhdGVkIFVzZSBgU2VudHJ5LnNldENvbnRleHQoKWAgaW5zdGVhZC4KICAgKi8KICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueQogICBzZXRDb250ZXh0KG5hbWUsIGNvbnRleHQpIHsKICAgIC8vIFRPRE8odjgpOiBUaGUgdG9wIGxldmVsIGBTZW50cnkuc2V0Q29udGV4dCgpYCBmdW5jdGlvbiBzaG91bGQgd3JpdGUgT05MWSB0byB0aGUgaXNvbGF0aW9uIHNjb3BlLgogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICB0aGlzLmdldFNjb3BlKCkuc2V0Q29udGV4dChuYW1lLCBjb250ZXh0KTsKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgdGhpcy5nZXRJc29sYXRpb25TY29wZSgpLnNldENvbnRleHQobmFtZSwgY29udGV4dCk7CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqCiAgICogQGRlcHJlY2F0ZWQgVXNlIGBnZXRTY29wZSgpYCBkaXJlY3RseS4KICAgKi8KICAgY29uZmlndXJlU2NvcGUoY2FsbGJhY2spIHsKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgY29uc3QgeyBzY29wZSwgY2xpZW50IH0gPSB0aGlzLmdldFN0YWNrVG9wKCk7CiAgICBpZiAoY2xpZW50KSB7CiAgICAgIGNhbGxiYWNrKHNjb3BlKTsKICAgIH0KICB9CgogIC8qKgogICAqIEBpbmhlcml0RG9jCiAgICovCiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgIHJ1bihjYWxsYmFjaykgewogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICBjb25zdCBvbGRIdWIgPSBtYWtlTWFpbih0aGlzKTsKICAgIHRyeSB7CiAgICAgIGNhbGxiYWNrKHRoaXMpOwogICAgfSBmaW5hbGx5IHsKICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICAgIG1ha2VNYWluKG9sZEh1Yik7CiAgICB9CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqIEBkZXByZWNhdGVkIFVzZSBgU2VudHJ5LmdldENsaWVudCgpLmdldEludGVncmF0aW9uQnlOYW1lKClgIGluc3RlYWQuCiAgICovCiAgIGdldEludGVncmF0aW9uKGludGVncmF0aW9uKSB7CiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICAgIGNvbnN0IGNsaWVudCA9IHRoaXMuZ2V0Q2xpZW50KCk7CiAgICBpZiAoIWNsaWVudCkgcmV0dXJuIG51bGw7CiAgICB0cnkgewogICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICAgICAgcmV0dXJuIGNsaWVudC5nZXRJbnRlZ3JhdGlvbihpbnRlZ3JhdGlvbik7CiAgICB9IGNhdGNoIChfb08pIHsKICAgICAgREVCVUdfQlVJTEQgJiYgbG9nZ2VyLndhcm4oYENhbm5vdCByZXRyaWV2ZSBpbnRlZ3JhdGlvbiAke2ludGVncmF0aW9uLmlkfSBmcm9tIHRoZSBjdXJyZW50IEh1YmApOwogICAgICByZXR1cm4gbnVsbDsKICAgIH0KICB9CgogIC8qKgogICAqIFN0YXJ0cyBhIG5ldyBgVHJhbnNhY3Rpb25gIGFuZCByZXR1cm5zIGl0LiBUaGlzIGlzIHRoZSBlbnRyeSBwb2ludCB0byBtYW51YWwgdHJhY2luZyBpbnN0cnVtZW50YXRpb24uCiAgICoKICAgKiBBIHRyZWUgc3RydWN0dXJlIGNhbiBiZSBidWlsdCBieSBhZGRpbmcgY2hpbGQgc3BhbnMgdG8gdGhlIHRyYW5zYWN0aW9uLCBhbmQgY2hpbGQgc3BhbnMgdG8gb3RoZXIgc3BhbnMuIFRvIHN0YXJ0IGEKICAgKiBuZXcgY2hpbGQgc3BhbiB3aXRoaW4gdGhlIHRyYW5zYWN0aW9uIG9yIGFueSBzcGFuLCBjYWxsIHRoZSByZXNwZWN0aXZlIGAuc3RhcnRDaGlsZCgpYCBtZXRob2QuCiAgICoKICAgKiBFdmVyeSBjaGlsZCBzcGFuIG11c3QgYmUgZmluaXNoZWQgYmVmb3JlIHRoZSB0cmFuc2FjdGlvbiBpcyBmaW5pc2hlZCwgb3RoZXJ3aXNlIHRoZSB1bmZpbmlzaGVkIHNwYW5zIGFyZSBkaXNjYXJkZWQuCiAgICoKICAgKiBUaGUgdHJhbnNhY3Rpb24gbXVzdCBiZSBmaW5pc2hlZCB3aXRoIGEgY2FsbCB0byBpdHMgYC5lbmQoKWAgbWV0aG9kLCBhdCB3aGljaCBwb2ludCB0aGUgdHJhbnNhY3Rpb24gd2l0aCBhbGwgaXRzCiAgICogZmluaXNoZWQgY2hpbGQgc3BhbnMgd2lsbCBiZSBzZW50IHRvIFNlbnRyeS4KICAgKgogICAqIEBwYXJhbSBjb250ZXh0IFByb3BlcnRpZXMgb2YgdGhlIG5ldyBgVHJhbnNhY3Rpb25gLgogICAqIEBwYXJhbSBjdXN0b21TYW1wbGluZ0NvbnRleHQgSW5mb3JtYXRpb24gZ2l2ZW4gdG8gdGhlIHRyYW5zYWN0aW9uIHNhbXBsaW5nIGZ1bmN0aW9uIChhbG9uZyB3aXRoIGNvbnRleHQtZGVwZW5kZW50CiAgICogZGVmYXVsdCB2YWx1ZXMpLiBTZWUge0BsaW5rIE9wdGlvbnMudHJhY2VzU2FtcGxlcn0uCiAgICoKICAgKiBAcmV0dXJucyBUaGUgdHJhbnNhY3Rpb24gd2hpY2ggd2FzIGp1c3Qgc3RhcnRlZAogICAqCiAgICogQGRlcHJlY2F0ZWQgVXNlIGBzdGFydFNwYW4oKWAsIGBzdGFydFNwYW5NYW51YWwoKWAgb3IgYHN0YXJ0SW5hY3RpdmVTcGFuKClgIGluc3RlYWQuCiAgICovCiAgIHN0YXJ0VHJhbnNhY3Rpb24oY29udGV4dCwgY3VzdG9tU2FtcGxpbmdDb250ZXh0KSB7CiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9jYWxsRXh0ZW5zaW9uTWV0aG9kKCdzdGFydFRyYW5zYWN0aW9uJywgY29udGV4dCwgY3VzdG9tU2FtcGxpbmdDb250ZXh0KTsKCiAgICBpZiAoREVCVUdfQlVJTEQgJiYgIXJlc3VsdCkgewogICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICAgICAgY29uc3QgY2xpZW50ID0gdGhpcy5nZXRDbGllbnQoKTsKICAgICAgaWYgKCFjbGllbnQpIHsKICAgICAgICBsb2dnZXIud2FybigKICAgICAgICAgICJUcmFjaW5nIGV4dGVuc2lvbiAnc3RhcnRUcmFuc2FjdGlvbicgaXMgbWlzc2luZy4gWW91IHNob3VsZCAnaW5pdCcgdGhlIFNESyBiZWZvcmUgY2FsbGluZyAnc3RhcnRUcmFuc2FjdGlvbiciLAogICAgICAgICk7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgbG9nZ2VyLndhcm4oYFRyYWNpbmcgZXh0ZW5zaW9uICdzdGFydFRyYW5zYWN0aW9uJyBoYXMgbm90IGJlZW4gYWRkZWQuIENhbGwgJ2FkZFRyYWNpbmdFeHRlbnNpb25zJyBiZWZvcmUgY2FsbGluZyAnaW5pdCc6ClNlbnRyeS5hZGRUcmFjaW5nRXh0ZW5zaW9ucygpOwpTZW50cnkuaW5pdCh7Li4ufSk7CmApOwogICAgICB9CiAgICB9CgogICAgcmV0dXJuIHJlc3VsdDsKICB9CgogIC8qKgogICAqIEBpbmhlcml0RG9jCiAgICogQGRlcHJlY2F0ZWQgVXNlIGBzcGFuVG9UcmFjZUhlYWRlcigpYCBpbnN0ZWFkLgogICAqLwogICB0cmFjZUhlYWRlcnMoKSB7CiAgICByZXR1cm4gdGhpcy5fY2FsbEV4dGVuc2lvbk1ldGhvZCgndHJhY2VIZWFkZXJzJyk7CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqCiAgICogQGRlcHJlY2F0ZWQgVXNlIHRvcCBsZXZlbCBgY2FwdHVyZVNlc3Npb25gIGluc3RlYWQuCiAgICovCiAgIGNhcHR1cmVTZXNzaW9uKGVuZFNlc3Npb24gPSBmYWxzZSkgewogICAgLy8gYm90aCBzZW5kIHRoZSB1cGRhdGUgYW5kIHB1bGwgdGhlIHNlc3Npb24gZnJvbSB0aGUgc2NvcGUKICAgIGlmIChlbmRTZXNzaW9uKSB7CiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgICByZXR1cm4gdGhpcy5lbmRTZXNzaW9uKCk7CiAgICB9CgogICAgLy8gb25seSBzZW5kIHRoZSB1cGRhdGUKICAgIHRoaXMuX3NlbmRTZXNzaW9uVXBkYXRlKCk7CiAgfQoKICAvKioKICAgKiBAaW5oZXJpdERvYwogICAqIEBkZXByZWNhdGVkIFVzZSB0b3AgbGV2ZWwgYGVuZFNlc3Npb25gIGluc3RlYWQuCiAgICovCiAgIGVuZFNlc3Npb24oKSB7CiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICAgIGNvbnN0IGxheWVyID0gdGhpcy5nZXRTdGFja1RvcCgpOwogICAgY29uc3Qgc2NvcGUgPSBsYXllci5zY29wZTsKICAgIGNvbnN0IHNlc3Npb24gPSBzY29wZS5nZXRTZXNzaW9uKCk7CiAgICBpZiAoc2Vzc2lvbikgewogICAgICBjbG9zZVNlc3Npb24oc2Vzc2lvbik7CiAgICB9CiAgICB0aGlzLl9zZW5kU2Vzc2lvblVwZGF0ZSgpOwoKICAgIC8vIHRoZSBzZXNzaW9uIGlzIG92ZXI7IHRha2UgaXQgb2ZmIG9mIHRoZSBzY29wZQogICAgc2NvcGUuc2V0U2Vzc2lvbigpOwogIH0KCiAgLyoqCiAgICogQGluaGVyaXREb2MKICAgKiBAZGVwcmVjYXRlZCBVc2UgdG9wIGxldmVsIGBzdGFydFNlc3Npb25gIGluc3RlYWQuCiAgICovCiAgIHN0YXJ0U2Vzc2lvbihjb250ZXh0KSB7CiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb24KICAgIGNvbnN0IHsgc2NvcGUsIGNsaWVudCB9ID0gdGhpcy5nZXRTdGFja1RvcCgpOwogICAgY29uc3QgeyByZWxlYXNlLCBlbnZpcm9ubWVudCA9IERFRkFVTFRfRU5WSVJPTk1FTlQgfSA9IChjbGllbnQgJiYgY2xpZW50LmdldE9wdGlvbnMoKSkgfHwge307CgogICAgLy8gV2lsbCBmZXRjaCB1c2VyQWdlbnQgaWYgY2FsbGVkIGZyb20gYnJvd3NlciBzZGsKICAgIGNvbnN0IHsgdXNlckFnZW50IH0gPSBHTE9CQUxfT0JKLm5hdmlnYXRvciB8fCB7fTsKCiAgICBjb25zdCBzZXNzaW9uID0gbWFrZVNlc3Npb24oewogICAgICByZWxlYXNlLAogICAgICBlbnZpcm9ubWVudCwKICAgICAgdXNlcjogc2NvcGUuZ2V0VXNlcigpLAogICAgICAuLi4odXNlckFnZW50ICYmIHsgdXNlckFnZW50IH0pLAogICAgICAuLi5jb250ZXh0LAogICAgfSk7CgogICAgLy8gRW5kIGV4aXN0aW5nIHNlc3Npb24gaWYgdGhlcmUncyBvbmUKICAgIGNvbnN0IGN1cnJlbnRTZXNzaW9uID0gc2NvcGUuZ2V0U2Vzc2lvbiAmJiBzY29wZS5nZXRTZXNzaW9uKCk7CiAgICBpZiAoY3VycmVudFNlc3Npb24gJiYgY3VycmVudFNlc3Npb24uc3RhdHVzID09PSAnb2snKSB7CiAgICAgIHVwZGF0ZVNlc3Npb24oY3VycmVudFNlc3Npb24sIHsgc3RhdHVzOiAnZXhpdGVkJyB9KTsKICAgIH0KICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgdGhpcy5lbmRTZXNzaW9uKCk7CgogICAgLy8gQWZ0ZXJ3YXJkcyB3ZSBzZXQgdGhlIG5ldyBzZXNzaW9uIG9uIHRoZSBzY29wZQogICAgc2NvcGUuc2V0U2Vzc2lvbihzZXNzaW9uKTsKCiAgICByZXR1cm4gc2Vzc2lvbjsKICB9CgogIC8qKgogICAqIFJldHVybnMgaWYgZGVmYXVsdCBQSUkgc2hvdWxkIGJlIHNlbnQgdG8gU2VudHJ5IGFuZCBwcm9wYWdhdGVkIGluIG91cmdvaW5nIHJlcXVlc3RzCiAgICogd2hlbiBUcmFjaW5nIGlzIHVzZWQuCiAgICoKICAgKiBAZGVwcmVjYXRlZCBVc2UgdG9wLWxldmVsIGBnZXRDbGllbnQoKS5nZXRPcHRpb25zKCkuc2VuZERlZmF1bHRQaWlgIGluc3RlYWQuIFRoaXMgZnVuY3Rpb24KICAgKiBvbmx5IHVubmVjZXNzYXJpbHkgaW5jcmVhc2VkIEFQSSBzdXJmYWNlIGJ1dCBvbmx5IHdyYXBwZWQgYWNjZXNzaW5nIHRoZSBvcHRpb24uCiAgICovCiAgIHNob3VsZFNlbmREZWZhdWx0UGlpKCkgewogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICBjb25zdCBjbGllbnQgPSB0aGlzLmdldENsaWVudCgpOwogICAgY29uc3Qgb3B0aW9ucyA9IGNsaWVudCAmJiBjbGllbnQuZ2V0T3B0aW9ucygpOwogICAgcmV0dXJuIEJvb2xlYW4ob3B0aW9ucyAmJiBvcHRpb25zLnNlbmREZWZhdWx0UGlpKTsKICB9CgogIC8qKgogICAqIFNlbmRzIHRoZSBjdXJyZW50IFNlc3Npb24gb24gdGhlIHNjb3BlCiAgICovCiAgIF9zZW5kU2Vzc2lvblVwZGF0ZSgpIHsKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgY29uc3QgeyBzY29wZSwgY2xpZW50IH0gPSB0aGlzLmdldFN0YWNrVG9wKCk7CgogICAgY29uc3Qgc2Vzc2lvbiA9IHNjb3BlLmdldFNlc3Npb24oKTsKICAgIGlmIChzZXNzaW9uICYmIGNsaWVudCAmJiBjbGllbnQuY2FwdHVyZVNlc3Npb24pIHsKICAgICAgY2xpZW50LmNhcHR1cmVTZXNzaW9uKHNlc3Npb24pOwogICAgfQogIH0KCiAgLyoqCiAgICogQ2FsbHMgZ2xvYmFsIGV4dGVuc2lvbiBtZXRob2QgYW5kIGJpbmRpbmcgY3VycmVudCBpbnN0YW5jZSB0byB0aGUgZnVuY3Rpb24gY2FsbAogICAqLwogIC8vIEB0cy1leHBlY3QtZXJyb3IgRnVuY3Rpb24gbGFja3MgZW5kaW5nIHJldHVybiBzdGF0ZW1lbnQgYW5kIHJldHVybiB0eXBlIGRvZXMgbm90IGluY2x1ZGUgJ3VuZGVmaW5lZCcuIHRzKDIzNjYpCiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkKICAgX2NhbGxFeHRlbnNpb25NZXRob2QobWV0aG9kLCAuLi5hcmdzKSB7CiAgICBjb25zdCBjYXJyaWVyID0gZ2V0TWFpbkNhcnJpZXIoKTsKICAgIGNvbnN0IHNlbnRyeSA9IGNhcnJpZXIuX19TRU5UUllfXzsKICAgIGlmIChzZW50cnkgJiYgc2VudHJ5LmV4dGVuc2lvbnMgJiYgdHlwZW9mIHNlbnRyeS5leHRlbnNpb25zW21ldGhvZF0gPT09ICdmdW5jdGlvbicpIHsKICAgICAgcmV0dXJuIHNlbnRyeS5leHRlbnNpb25zW21ldGhvZF0uYXBwbHkodGhpcywgYXJncyk7CiAgICB9CiAgICBERUJVR19CVUlMRCAmJiBsb2dnZXIud2FybihgRXh0ZW5zaW9uIG1ldGhvZCAke21ldGhvZH0gY291bGRuJ3QgYmUgZm91bmQsIGRvaW5nIG5vdGhpbmcuYCk7CiAgfQp9CgovKioKICogUmV0dXJucyB0aGUgZ2xvYmFsIHNoaW0gcmVnaXN0cnkuCiAqCiAqIEZJWE1FOiBUaGlzIGZ1bmN0aW9uIGlzIHByb2JsZW1hdGljLCBiZWNhdXNlIGRlc3BpdGUgYWx3YXlzIHJldHVybmluZyBhIHZhbGlkIENhcnJpZXIsCiAqIGl0IGhhcyBhbiBvcHRpb25hbCBgX19TRU5UUllfX2AgcHJvcGVydHksIHdoaWNoIHRoZW4gaW4gdHVybiByZXF1aXJlcyB1cyB0byBhbHdheXMgcGVyZm9ybSBhbiB1bm5lY2Vzc2FyeSBjaGVjawogKiBhdCB0aGUgY2FsbC1zaXRlLiBXZSBhbHdheXMgYWNjZXNzIHRoZSBjYXJyaWVyIHRocm91Z2ggdGhpcyBmdW5jdGlvbiwgc28gd2UgY2FuIGd1YXJhbnRlZSB0aGF0IGBfX1NFTlRSWV9fYCBpcyB0aGVyZS4KICoqLwpmdW5jdGlvbiBnZXRNYWluQ2FycmllcigpIHsKICBHTE9CQUxfT0JKLl9fU0VOVFJZX18gPSBHTE9CQUxfT0JKLl9fU0VOVFJZX18gfHwgewogICAgZXh0ZW5zaW9uczoge30sCiAgICBodWI6IHVuZGVmaW5lZCwKICB9OwogIHJldHVybiBHTE9CQUxfT0JKOwp9CgovKioKICogUmVwbGFjZXMgdGhlIGN1cnJlbnQgbWFpbiBodWIgd2l0aCB0aGUgcGFzc2VkIG9uZSBvbiB0aGUgZ2xvYmFsIG9iamVjdAogKgogKiBAcmV0dXJucyBUaGUgb2xkIHJlcGxhY2VkIGh1YgogKgogKiBAZGVwcmVjYXRlZCBVc2UgYHNldEN1cnJlbnRDbGllbnQoKWAgaW5zdGVhZC4KICovCi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgpmdW5jdGlvbiBtYWtlTWFpbihodWIpIHsKICBjb25zdCByZWdpc3RyeSA9IGdldE1haW5DYXJyaWVyKCk7CiAgY29uc3Qgb2xkSHViID0gZ2V0SHViRnJvbUNhcnJpZXIocmVnaXN0cnkpOwogIHNldEh1Yk9uQ2FycmllcihyZWdpc3RyeSwgaHViKTsKICByZXR1cm4gb2xkSHViOwp9CgovKioKICogUmV0dXJucyB0aGUgZGVmYXVsdCBodWIgaW5zdGFuY2UuCiAqCiAqIElmIGEgaHViIGlzIGFscmVhZHkgcmVnaXN0ZXJlZCBpbiB0aGUgZ2xvYmFsIGNhcnJpZXIgYnV0IHRoaXMgbW9kdWxlCiAqIGNvbnRhaW5zIGEgbW9yZSByZWNlbnQgdmVyc2lvbiwgaXQgcmVwbGFjZXMgdGhlIHJlZ2lzdGVyZWQgdmVyc2lvbi4KICogT3RoZXJ3aXNlLCB0aGUgY3VycmVudGx5IHJlZ2lzdGVyZWQgaHViIHdpbGwgYmUgcmV0dXJuZWQuCiAqCiAqIEBkZXByZWNhdGVkIFVzZSB0aGUgcmVzcGVjdGl2ZSByZXBsYWNlbWVudCBtZXRob2QgZGlyZWN0bHkgaW5zdGVhZC4KICovCi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgpmdW5jdGlvbiBnZXRDdXJyZW50SHViKCkgewogIC8vIEdldCBtYWluIGNhcnJpZXIgKGdsb2JhbCBmb3IgZXZlcnkgZW52aXJvbm1lbnQpCiAgY29uc3QgcmVnaXN0cnkgPSBnZXRNYWluQ2FycmllcigpOwoKICBpZiAocmVnaXN0cnkuX19TRU5UUllfXyAmJiByZWdpc3RyeS5fX1NFTlRSWV9fLmFjcykgewogICAgY29uc3QgaHViID0gcmVnaXN0cnkuX19TRU5UUllfXy5hY3MuZ2V0Q3VycmVudEh1YigpOwoKICAgIGlmIChodWIpIHsKICAgICAgcmV0dXJuIGh1YjsKICAgIH0KICB9CgogIC8vIFJldHVybiBodWIgdGhhdCBsaXZlcyBvbiBhIGdsb2JhbCBvYmplY3QKICByZXR1cm4gZ2V0R2xvYmFsSHViKHJlZ2lzdHJ5KTsKfQoKLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCmZ1bmN0aW9uIGdldEdsb2JhbEh1YihyZWdpc3RyeSA9IGdldE1haW5DYXJyaWVyKCkpIHsKICAvLyBJZiB0aGVyZSdzIG5vIGh1Yiwgb3IgaXRzIGFuIG9sZCBBUEksIGFzc2lnbiBhIG5ldyBvbmUKCiAgaWYgKAogICAgIWhhc0h1Yk9uQ2FycmllcihyZWdpc3RyeSkgfHwKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgogICAgZ2V0SHViRnJvbUNhcnJpZXIocmVnaXN0cnkpLmlzT2xkZXJUaGFuKEFQSV9WRVJTSU9OKQogICkgewogICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgICBzZXRIdWJPbkNhcnJpZXIocmVnaXN0cnksIG5ldyBIdWIoKSk7CiAgfQoKICAvLyBSZXR1cm4gaHViIHRoYXQgbGl2ZXMgb24gYSBnbG9iYWwgb2JqZWN0CiAgcmV0dXJuIGdldEh1YkZyb21DYXJyaWVyKHJlZ2lzdHJ5KTsKfQoKLyoqCiAqIFRoaXMgd2lsbCB0ZWxsIHdoZXRoZXIgYSBjYXJyaWVyIGhhcyBhIGh1YiBvbiBpdCBvciBub3QKICogQHBhcmFtIGNhcnJpZXIgb2JqZWN0CiAqLwpmdW5jdGlvbiBoYXNIdWJPbkNhcnJpZXIoY2FycmllcikgewogIHJldHVybiAhIShjYXJyaWVyICYmIGNhcnJpZXIuX19TRU5UUllfXyAmJiBjYXJyaWVyLl9fU0VOVFJZX18uaHViKTsKfQoKLyoqCiAqIFRoaXMgd2lsbCBjcmVhdGUgYSBuZXcge0BsaW5rIEh1Yn0gYW5kIGFkZCB0byB0aGUgcGFzc2VkIG9iamVjdCBvbgogKiBfX1NFTlRSWV9fLmh1Yi4KICogQHBhcmFtIGNhcnJpZXIgb2JqZWN0CiAqIEBoaWRkZW4KICovCi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgpmdW5jdGlvbiBnZXRIdWJGcm9tQ2FycmllcihjYXJyaWVyKSB7CiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uCiAgcmV0dXJuIGdldEdsb2JhbFNpbmdsZXRvbignaHViJywgKCkgPT4gbmV3IEh1YigpLCBjYXJyaWVyKTsKfQoKLyoqCiAqIFRoaXMgd2lsbCBzZXQgcGFzc2VkIHtAbGluayBIdWJ9IG9uIHRoZSBwYXNzZWQgb2JqZWN0J3MgX19TRU5UUllfXy5odWIgYXR0cmlidXRlCiAqIEBwYXJhbSBjYXJyaWVyIG9iamVjdAogKiBAcGFyYW0gaHViIEh1YgogKiBAcmV0dXJucyBBIGJvb2xlYW4gaW5kaWNhdGluZyBzdWNjZXNzIG9yIGZhaWx1cmUKICovCi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbgpmdW5jdGlvbiBzZXRIdWJPbkNhcnJpZXIoY2FycmllciwgaHViKSB7CiAgaWYgKCFjYXJyaWVyKSByZXR1cm4gZmFsc2U7CiAgY29uc3QgX19TRU5UUllfXyA9IChjYXJyaWVyLl9fU0VOVFJZX18gPSBjYXJyaWVyLl9fU0VOVFJZX18gfHwge30pOwogIF9fU0VOVFJZX18uaHViID0gaHViOwogIHJldHVybiB0cnVlOwp9CgovKioKICogQXBwbHkgU2RrSW5mbyAobmFtZSwgdmVyc2lvbiwgcGFja2FnZXMsIGludGVncmF0aW9ucykgdG8gdGhlIGNvcnJlc3BvbmRpbmcgZXZlbnQga2V5LgogKiBNZXJnZSB3aXRoIGV4aXN0aW5nIGRhdGEgaWYgYW55LgogKiovCmZ1bmN0aW9uIGVuaGFuY2VFdmVudFdpdGhTZGtJbmZvKGV2ZW50LCBzZGtJbmZvKSB7CiAgaWYgKCFzZGtJbmZvKSB7CiAgICByZXR1cm4gZXZlbnQ7CiAgfQogIGV2ZW50LnNkayA9IGV2ZW50LnNkayB8fCB7fTsKICBldmVudC5zZGsubmFtZSA9IGV2ZW50LnNkay5uYW1lIHx8IHNka0luZm8ubmFtZTsKICBldmVudC5zZGsudmVyc2lvbiA9IGV2ZW50LnNkay52ZXJzaW9uIHx8IHNka0luZm8udmVyc2lvbjsKICBldmVudC5zZGsuaW50ZWdyYXRpb25zID0gWy4uLihldmVudC5zZGsuaW50ZWdyYXRpb25zIHx8IFtdKSwgLi4uKHNka0luZm8uaW50ZWdyYXRpb25zIHx8IFtdKV07CiAgZXZlbnQuc2RrLnBhY2thZ2VzID0gWy4uLihldmVudC5zZGsucGFja2FnZXMgfHwgW10pLCAuLi4oc2RrSW5mby5wYWNrYWdlcyB8fCBbXSldOwogIHJldHVybiBldmVudDsKfQoKLyoqIENyZWF0ZXMgYW4gZW52ZWxvcGUgZnJvbSBhIFNlc3Npb24gKi8KZnVuY3Rpb24gY3JlYXRlU2Vzc2lvbkVudmVsb3BlKAogIHNlc3Npb24sCiAgZHNuLAogIG1ldGFkYXRhLAogIHR1bm5lbCwKKSB7CiAgY29uc3Qgc2RrSW5mbyA9IGdldFNka01ldGFkYXRhRm9yRW52ZWxvcGVIZWFkZXIobWV0YWRhdGEpOwogIGNvbnN0IGVudmVsb3BlSGVhZGVycyA9IHsKICAgIHNlbnRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSwKICAgIC4uLihzZGtJbmZvICYmIHsgc2RrOiBzZGtJbmZvIH0pLAogICAgLi4uKCEhdHVubmVsICYmIGRzbiAmJiB7IGRzbjogZHNuVG9TdHJpbmcoZHNuKSB9KSwKICB9OwoKICBjb25zdCBlbnZlbG9wZUl0ZW0gPQogICAgJ2FnZ3JlZ2F0ZXMnIGluIHNlc3Npb24gPyBbeyB0eXBlOiAnc2Vzc2lvbnMnIH0sIHNlc3Npb25dIDogW3sgdHlwZTogJ3Nlc3Npb24nIH0sIHNlc3Npb24udG9KU09OKCldOwoKICByZXR1cm4gY3JlYXRlRW52ZWxvcGUoZW52ZWxvcGVIZWFkZXJzLCBbZW52ZWxvcGVJdGVtXSk7Cn0KCi8qKgogKiBDcmVhdGUgYW4gRW52ZWxvcGUgZnJvbSBhbiBldmVudC4KICovCmZ1bmN0aW9uIGNyZWF0ZUV2ZW50RW52ZWxvcGUoCiAgZXZlbnQsCiAgZHNuLAogIG1ldGFkYXRhLAogIHR1bm5lbCwKKSB7CiAgY29uc3Qgc2RrSW5mbyA9IGdldFNka01ldGFkYXRhRm9yRW52ZWxvcGVIZWFkZXIobWV0YWRhdGEpOwoKICAvKgogICAgTm90ZTogRHVlIHRvIFRTLCBldmVudC50eXBlIG1heSBiZSBgcmVwbGF5X2V2ZW50YCwgdGhlb3JldGljYWxseS4KICAgIEluIHByYWN0aWNlLCB3ZSBuZXZlciBjYWxsIGBjcmVhdGVFdmVudEVudmVsb3BlYCB3aXRoIGByZXBsYXlfZXZlbnRgIHR5cGUsCiAgICBhbmQgd2UnZCBoYXZlIHRvIGFkanV0IGEgbG9vb3Qgb2YgdHlwZXMgdG8gbWFrZSB0aGlzIHdvcmsgcHJvcGVybHkuCiAgICBXZSB3YW50IHRvIGF2b2lkIGNhc3RpbmcgdGhpcyBhcm91bmQsIGFzIHRoYXQgY291bGQgbGVhZCB0byBidWdzIChlLmcuIHdoZW4gd2UgYWRkIGFub3RoZXIgdHlwZSkKICAgIFNvIHRoZSBzYWZlIGNob2ljZSBpcyB0byByZWFsbHkgZ3VhcmQgYWdhaW5zdCB0aGUgcmVwbGF5X2V2ZW50IHR5cGUgaGVyZS4KICAqLwogIGNvbnN0IGV2ZW50VHlwZSA9IGV2ZW50LnR5cGUgJiYgZXZlbnQudHlwZSAhPT0gJ3JlcGxheV9ldmVudCcgPyBldmVudC50eXBlIDogJ2V2ZW50JzsKCiAgZW5oYW5jZUV2ZW50V2l0aFNka0luZm8oZXZlbnQsIG1ldGFkYXRhICYmIG1ldGFkYXRhLnNkayk7CgogIGNvbnN0IGVudmVsb3BlSGVhZGVycyA9IGNyZWF0ZUV2ZW50RW52ZWxvcGVIZWFkZXJzKGV2ZW50LCBzZGtJbmZvLCB0dW5uZWwsIGRzbik7CgogIC8vIFByZXZlbnQgdGhpcyBkYXRhICh3aGljaCwgaWYgaXQgZXhpc3RzLCB3YXMgdXNlZCBpbiBlYXJsaWVyIHN0ZXBzIGluIHRoZSBwcm9jZXNzaW5nIHBpcGVsaW5lKSBmcm9tIGJlaW5nIHNlbnQgdG8KICAvLyBzZW50cnkuIChOb3RlOiBPdXIgdXNlIG9mIHRoaXMgcHJvcGVydHkgY29tZXMgYW5kIGdvZXMgd2l0aCB3aGF0ZXZlciB3ZSBtaWdodCBiZSBkZWJ1Z2dpbmcsIHdoYXRldmVyIGhhY2tzIHdlIG1heQogIC8vIGhhdmUgdGVtcG9yYXJpbHkgYWRkZWQsIGV0Yy4gRXZlbiBpZiB3ZSBkb24ndCBoYXBwZW4gdG8gYmUgdXNpbmcgaXQgYXQgc29tZSBwb2ludCBpbiB0aGUgZnV0dXJlLCBsZXQncyBub3QgZ2V0IHJpZAogIC8vIG9mIHRoaXMgYGRlbGV0ZWAsIGxlc3Qgd2UgbWlzcyBwdXR0aW5nIGl0IGJhY2sgaW4gdGhlIG5leHQgdGltZSB0aGUgcHJvcGVydHkgaXMgaW4gdXNlLikKICBkZWxldGUgZXZlbnQuc2RrUHJvY2Vzc2luZ01ldGFkYXRhOwoKICBjb25zdCBldmVudEl0ZW0gPSBbeyB0eXBlOiBldmVudFR5cGUgfSwgZXZlbnRdOwogIHJldHVybiBjcmVhdGVFbnZlbG9wZShlbnZlbG9wZUhlYWRlcnMsIFtldmVudEl0ZW1dKTsKfQoKY29uc3QgU0VOVFJZX0FQSV9WRVJTSU9OID0gJzcnOwoKLyoqIFJldHVybnMgdGhlIHByZWZpeCB0byBjb25zdHJ1Y3QgU2VudHJ5IGluZ2VzdGlvbiBBUEkgZW5kcG9pbnRzLiAqLwpmdW5jdGlvbiBnZXRCYXNlQXBpRW5kcG9pbnQoZHNuKSB7CiAgY29uc3QgcHJvdG9jb2wgPSBkc24ucHJvdG9jb2wgPyBgJHtkc24ucHJvdG9jb2x9OmAgOiAnJzsKICBjb25zdCBwb3J0ID0gZHNuLnBvcnQgPyBgOiR7ZHNuLnBvcnR9YCA6ICcnOwogIHJldHVybiBgJHtwcm90b2NvbH0vLyR7ZHNuLmhvc3R9JHtwb3J0fSR7ZHNuLnBhdGggPyBgLyR7ZHNuLnBhdGh9YCA6ICcnfS9hcGkvYDsKfQoKLyoqIFJldHVybnMgdGhlIGluZ2VzdCBBUEkgZW5kcG9pbnQgZm9yIHRhcmdldC4gKi8KZnVuY3Rpb24gX2dldEluZ2VzdEVuZHBvaW50KGRzbikgewogIHJldHVybiBgJHtnZXRCYXNlQXBpRW5kcG9pbnQoZHNuKX0ke2Rzbi5wcm9qZWN0SWR9L2VudmVsb3BlL2A7Cn0KCi8qKiBSZXR1cm5zIGEgVVJMLWVuY29kZWQgc3RyaW5nIHdpdGggYXV0aCBjb25maWcgc3VpdGFibGUgZm9yIGEgcXVlcnkgc3RyaW5nLiAqLwpmdW5jdGlvbiBfZW5jb2RlZEF1dGgoZHNuLCBzZGtJbmZvKSB7CiAgcmV0dXJuIHVybEVuY29kZSh7CiAgICAvLyBXZSBzZW5kIG9ubHkgdGhlIG1pbmltdW0gc2V0IG9mIHJlcXVpcmVkIGluZm9ybWF0aW9uLiBTZWUKICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9nZXRzZW50cnkvc2VudHJ5LWphdmFzY3JpcHQvaXNzdWVzLzI1NzIuCiAgICBzZW50cnlfa2V5OiBkc24ucHVibGljS2V5LAogICAgc2VudHJ5X3ZlcnNpb246IFNFTlRSWV9BUElfVkVSU0lPTiwKICAgIC4uLihzZGtJbmZvICYmIHsgc2VudHJ5X2NsaWVudDogYCR7c2RrSW5mby5uYW1lfS8ke3Nka0luZm8udmVyc2lvbn1gIH0pLAogIH0pOwp9CgovKioKICogUmV0dXJucyB0aGUgZW52ZWxvcGUgZW5kcG9pbnQgVVJMIHdpdGggYXV0aCBpbiB0aGUgcXVlcnkgc3RyaW5nLgogKgogKiBTZW5kaW5nIGF1dGggYXMgcGFydCBvZiB0aGUgcXVlcnkgc3RyaW5nIGFuZCBub3QgYXMgY3VzdG9tIEhUVFAgaGVhZGVycyBhdm9pZHMgQ09SUyBwcmVmbGlnaHQgcmVxdWVzdHMuCiAqLwpmdW5jdGlvbiBnZXRFbnZlbG9wZUVuZHBvaW50V2l0aFVybEVuY29kZWRBdXRoKAogIGRzbiwKICAvLyBUT0RPICh2OCk6IFJlbW92ZSBgdHVubmVsT3JPcHRpb25zYCBpbiBmYXZvciBvZiBgb3B0aW9uc2AsIGFuZCB1c2UgdGhlIHN1YnN0aXR1dGUgY29kZSBiZWxvdwogIC8vIG9wdGlvbnM6IENsaWVudE9wdGlvbnMgPSB7fSBhcyBDbGllbnRPcHRpb25zLAogIHR1bm5lbE9yT3B0aW9ucyA9IHt9ICwKKSB7CiAgLy8gVE9ETyAodjgpOiBVc2UgdGhpcyBjb2RlIGluc3RlYWQKICAvLyBjb25zdCB7IHR1bm5lbCwgX21ldGFkYXRhID0ge30gfSA9IG9wdGlvbnM7CiAgLy8gcmV0dXJuIHR1bm5lbCA/IHR1bm5lbCA6IGAke19nZXRJbmdlc3RFbmRwb2ludChkc24pfT8ke19lbmNvZGVkQXV0aChkc24sIF9tZXRhZGF0YS5zZGspfWA7CgogIGNvbnN0IHR1bm5lbCA9IHR5cGVvZiB0dW5uZWxPck9wdGlvbnMgPT09ICdzdHJpbmcnID8gdHVubmVsT3JPcHRpb25zIDogdHVubmVsT3JPcHRpb25zLnR1bm5lbDsKICBjb25zdCBzZGtJbmZvID0KICAgIHR5cGVvZiB0dW5uZWxPck9wdGlvbnMgPT09ICdzdHJpbmcnIHx8ICF0dW5uZWxPck9wdGlvbnMuX21ldGFkYXRhID8gdW5kZWZpbmVkIDogdHVubmVsT3JPcHRpb25zLl9tZXRhZGF0YS5zZGs7CgogIHJldHVybiB0dW5uZWwgPyB0dW5uZWwgOiBgJHtfZ2V0SW5nZXN0RW5kcG9pbnQoZHNuKX0/JHtfZW5jb2RlZEF1dGgoZHNuLCBzZGtJbmZvKX1gOwp9Cgpjb25zdCBERUZBVUxUX1RSQU5TUE9SVF9CVUZGRVJfU0laRSA9IDMwOwoKLyoqCiAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgYSBTZW50cnkgYFRyYW5zcG9ydGAKICoKICogQHBhcmFtIG9wdGlvbnMKICogQHBhcmFtIG1ha2VSZXF1ZXN0CiAqLwpmdW5jdGlvbiBjcmVhdGVUcmFuc3BvcnQoCiAgb3B0aW9ucywKICBtYWtlUmVxdWVzdCwKICBidWZmZXIgPSBtYWtlUHJvbWlzZUJ1ZmZlcigKICAgIG9wdGlvbnMuYnVmZmVyU2l6ZSB8fCBERUZBVUxUX1RSQU5TUE9SVF9CVUZGRVJfU0laRSwKICApLAopIHsKICBsZXQgcmF0ZUxpbWl0cyA9IHt9OwogIGNvbnN0IGZsdXNoID0gKHRpbWVvdXQpID0+IGJ1ZmZlci5kcmFpbih0aW1lb3V0KTsKCiAgZnVuY3Rpb24gc2VuZChlbnZlbG9wZSkgewogICAgY29uc3QgZmlsdGVyZWRFbnZlbG9wZUl0ZW1zID0gW107CgogICAgLy8gRHJvcCByYXRlIGxpbWl0ZWQgaXRlbXMgZnJvbSBlbnZlbG9wZQogICAgZm9yRWFjaEVudmVsb3BlSXRlbShlbnZlbG9wZSwgKGl0ZW0sIHR5cGUpID0+IHsKICAgICAgY29uc3QgZGF0YUNhdGVnb3J5ID0gZW52ZWxvcGVJdGVtVHlwZVRvRGF0YUNhdGVnb3J5KHR5cGUpOwogICAgICBpZiAoaXNSYXRlTGltaXRlZChyYXRlTGltaXRzLCBkYXRhQ2F0ZWdvcnkpKSB7CiAgICAgICAgY29uc3QgZXZlbnQgPSBnZXRFdmVudEZvckVudmVsb3BlSXRlbShpdGVtLCB0eXBlKTsKICAgICAgICBvcHRpb25zLnJlY29yZERyb3BwZWRFdmVudCgncmF0ZWxpbWl0X2JhY2tvZmYnLCBkYXRhQ2F0ZWdvcnksIGV2ZW50KTsKICAgICAgfSBlbHNlIHsKICAgICAgICBmaWx0ZXJlZEVudmVsb3BlSXRlbXMucHVzaChpdGVtKTsKICAgICAgfQogICAgfSk7CgogICAgLy8gU2tpcCBzZW5kaW5nIGlmIGVudmVsb3BlIGlzIGVtcHR5IGFmdGVyIGZpbHRlcmluZyBvdXQgcmF0ZSBsaW1pdGVkIGV2ZW50cwogICAgaWYgKGZpbHRlcmVkRW52ZWxvcGVJdGVtcy5sZW5ndGggPT09IDApIHsKICAgICAgcmV0dXJuIHJlc29sdmVkU3luY1Byb21pc2UoKTsKICAgIH0KCiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueQogICAgY29uc3QgZmlsdGVyZWRFbnZlbG9wZSA9IGNyZWF0ZUVudmVsb3BlKGVudmVsb3BlWzBdLCBmaWx0ZXJlZEVudmVsb3BlSXRlbXMgKTsKCiAgICAvLyBDcmVhdGVzIGNsaWVudCByZXBvcnQgZm9yIGVhY2ggaXRlbSBpbiBhbiBlbnZlbG9wZQogICAgY29uc3QgcmVjb3JkRW52ZWxvcGVMb3NzID0gKHJlYXNvbikgPT4gewogICAgICBmb3JFYWNoRW52ZWxvcGVJdGVtKGZpbHRlcmVkRW52ZWxvcGUsIChpdGVtLCB0eXBlKSA9PiB7CiAgICAgICAgY29uc3QgZXZlbnQgPSBnZXRFdmVudEZvckVudmVsb3BlSXRlbShpdGVtLCB0eXBlKTsKICAgICAgICBvcHRpb25zLnJlY29yZERyb3BwZWRFdmVudChyZWFzb24sIGVudmVsb3BlSXRlbVR5cGVUb0RhdGFDYXRlZ29yeSh0eXBlKSwgZXZlbnQpOwogICAgICB9KTsKICAgIH07CgogICAgY29uc3QgcmVxdWVzdFRhc2sgPSAoKSA9PgogICAgICBtYWtlUmVxdWVzdCh7IGJvZHk6IHNlcmlhbGl6ZUVudmVsb3BlKGZpbHRlcmVkRW52ZWxvcGUsIG9wdGlvbnMudGV4dEVuY29kZXIpIH0pLnRoZW4oCiAgICAgICAgcmVzcG9uc2UgPT4gewogICAgICAgICAgLy8gV2UgZG9uJ3Qgd2FudCB0byB0aHJvdyBvbiBOT0sgcmVzcG9uc2VzLCBidXQgd2Ugd2FudCB0byBhdCBsZWFzdCBsb2cgdGhlbQogICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgIT09IHVuZGVmaW5lZCAmJiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA8IDIwMCB8fCByZXNwb25zZS5zdGF0dXNDb2RlID49IDMwMCkpIHsKICAgICAgICAgICAgREVCVUdfQlVJTEQgJiYgbG9nZ2VyLndhcm4oYFNlbnRyeSByZXNwb25kZWQgd2l0aCBzdGF0dXMgY29kZSAke3Jlc3BvbnNlLnN0YXR1c0NvZGV9IHRvIHNlbnQgZXZlbnQuYCk7CiAgICAgICAgICB9CgogICAgICAgICAgcmF0ZUxpbWl0cyA9IHVwZGF0ZVJhdGVMaW1pdHMocmF0ZUxpbWl0cywgcmVzcG9uc2UpOwogICAgICAgICAgcmV0dXJuIHJlc3BvbnNlOwogICAgICAgIH0sCiAgICAgICAgZXJyb3IgPT4gewogICAgICAgICAgcmVjb3JkRW52ZWxvcGVMb3NzKCduZXR3b3JrX2Vycm9yJyk7CiAgICAgICAgICB0aHJvdyBlcnJvcjsKICAgICAgICB9LAogICAgICApOwoKICAgIHJldHVybiBidWZmZXIuYWRkKHJlcXVlc3RUYXNrKS50aGVuKAogICAgICByZXN1bHQgPT4gcmVzdWx0LAogICAgICBlcnJvciA9PiB7CiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgU2VudHJ5RXJyb3IpIHsKICAgICAgICAgIERFQlVHX0JVSUxEICYmIGxvZ2dlci5lcnJvcignU2tpcHBlZCBzZW5kaW5nIGV2ZW50IGJlY2F1c2UgYnVmZmVyIGlzIGZ1bGwuJyk7CiAgICAgICAgICByZWNvcmRFbnZlbG9wZUxvc3MoJ3F1ZXVlX292ZXJmbG93Jyk7CiAgICAgICAgICByZXR1cm4gcmVzb2x2ZWRTeW5jUHJvbWlzZSgpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICB0aHJvdyBlcnJvcjsKICAgICAgICB9CiAgICAgIH0sCiAgICApOwogIH0KCiAgLy8gV2UgdXNlIHRoaXMgdG8gaWRlbnRpZmlmeSBpZiB0aGUgdHJhbnNwb3J0IGlzIHRoZSBiYXNlIHRyYW5zcG9ydAogIC8vIFRPRE8gKHY4KTogUmVtb3ZlIHRoaXMgYWdhaW4gYXMgd2UnbGwgbm8gbG9uZ2VyIG5lZWQgaXQKICBzZW5kLl9fc2VudHJ5X19iYXNlVHJhbnNwb3J0X18gPSB0cnVlOwoKICByZXR1cm4gewogICAgc2VuZCwKICAgIGZsdXNoLAogIH07Cn0KCmZ1bmN0aW9uIGdldEV2ZW50Rm9yRW52ZWxvcGVJdGVtKGl0ZW0sIHR5cGUpIHsKICBpZiAodHlwZSAhPT0gJ2V2ZW50JyAmJiB0eXBlICE9PSAndHJhbnNhY3Rpb24nKSB7CiAgICByZXR1cm4gdW5kZWZpbmVkOwogIH0KCiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoaXRlbSkgPyAoaXRlbSApWzFdIDogdW5kZWZpbmVkOwp9CgovKiogbm9ybWFsaXplcyBXaW5kb3dzIHBhdGhzICovCmZ1bmN0aW9uIG5vcm1hbGl6ZVdpbmRvd3NQYXRoKHBhdGgpIHsKICByZXR1cm4gcGF0aAogICAgLnJlcGxhY2UoL15bQS1aXTovLCAnJykgLy8gcmVtb3ZlIFdpbmRvd3Mtc3R5bGUgcHJlZml4CiAgICAucmVwbGFjZSgvXFwvZywgJy8nKTsgLy8gcmVwbGFjZSBhbGwgYFxgIGluc3RhbmNlcyB3aXRoIGAvYAp9CgovKiogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgZ2V0cyB0aGUgbW9kdWxlIG5hbWUgZnJvbSBhIGZpbGVuYW1lICovCmZ1bmN0aW9uIGNyZWF0ZUdldE1vZHVsZUZyb21GaWxlbmFtZSgKICBiYXNlUGF0aCA9IHByb2Nlc3MuYXJndlsxXSA/IGRpcm5hbWUocHJvY2Vzcy5hcmd2WzFdKSA6IHByb2Nlc3MuY3dkKCksCiAgaXNXaW5kb3dzID0gc2VwID09PSAnXFwnLAopIHsKICBjb25zdCBub3JtYWxpemVkQmFzZSA9IGlzV2luZG93cyA/IG5vcm1hbGl6ZVdpbmRvd3NQYXRoKGJhc2VQYXRoKSA6IGJhc2VQYXRoOwoKICByZXR1cm4gKGZpbGVuYW1lKSA9PiB7CiAgICBpZiAoIWZpbGVuYW1lKSB7CiAgICAgIHJldHVybjsKICAgIH0KCiAgICBjb25zdCBub3JtYWxpemVkRmlsZW5hbWUgPSBpc1dpbmRvd3MgPyBub3JtYWxpemVXaW5kb3dzUGF0aChmaWxlbmFtZSkgOiBmaWxlbmFtZTsKCiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0CiAgICBsZXQgeyBkaXIsIGJhc2U6IGZpbGUsIGV4dCB9ID0gcG9zaXgucGFyc2Uobm9ybWFsaXplZEZpbGVuYW1lKTsKCiAgICBpZiAoZXh0ID09PSAnLmpzJyB8fCBleHQgPT09ICcubWpzJyB8fCBleHQgPT09ICcuY2pzJykgewogICAgICBmaWxlID0gZmlsZS5zbGljZSgwLCBleHQubGVuZ3RoICogLTEpOwogICAgfQoKICAgIGlmICghZGlyKSB7CiAgICAgIC8vIE5vIGRpcm5hbWUgd2hhdHNvZXZlcgogICAgICBkaXIgPSAnLic7CiAgICB9CgogICAgY29uc3QgbiA9IGRpci5sYXN0SW5kZXhPZignL25vZGVfbW9kdWxlcycpOwogICAgaWYgKG4gPiAtMSkgewogICAgICByZXR1cm4gYCR7ZGlyLnNsaWNlKG4gKyAxNCkucmVwbGFjZSgvXC8vZywgJy4nKX06JHtmaWxlfWA7CiAgICB9CgogICAgLy8gTGV0J3Mgc2VlIGlmIGl0J3MgYSBwYXJ0IG9mIHRoZSBtYWluIG1vZHVsZQogICAgLy8gVG8gYmUgYSBwYXJ0IG9mIG1haW4gbW9kdWxlLCBpdCBoYXMgdG8gc2hhcmUgdGhlIHNhbWUgYmFzZQogICAgaWYgKGRpci5zdGFydHNXaXRoKG5vcm1hbGl6ZWRCYXNlKSkgewogICAgICBsZXQgbW9kdWxlTmFtZSA9IGRpci5zbGljZShub3JtYWxpemVkQmFzZS5sZW5ndGggKyAxKS5yZXBsYWNlKC9cLy9nLCAnLicpOwoKICAgICAgaWYgKG1vZHVsZU5hbWUpIHsKICAgICAgICBtb2R1bGVOYW1lICs9ICc6JzsKICAgICAgfQogICAgICBtb2R1bGVOYW1lICs9IGZpbGU7CgogICAgICByZXR1cm4gbW9kdWxlTmFtZTsKICAgIH0KCiAgICByZXR1cm4gZmlsZTsKICB9Owp9CgpmdW5jdGlvbiBfbnVsbGlzaENvYWxlc2NlJDIobGhzLCByaHNGbikgeyBpZiAobGhzICE9IG51bGwpIHsgcmV0dXJuIGxoczsgfSBlbHNlIHsgcmV0dXJuIHJoc0ZuKCk7IH0gfS8qKgogKiBUaGlzIGNvZGUgd2FzIG9yaWdpbmFsbHkgZm9ya2VkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL1Rvb1RhbGxOYXRlL3Byb3h5LWFnZW50cy90cmVlL2IxMzMyOTVmZDE2ZjY0NzU1NzhiNmIxNWJkOWI0ZTMzZWNiMGQwYjcKICogV2l0aCB0aGUgZm9sbG93aW5nIGxpY2VuY2U6CiAqCiAqIChUaGUgTUlUIExpY2Vuc2UpCiAqCiAqIENvcHlyaWdodCAoYykgMjAxMyBOYXRoYW4gUmFqbGljaCA8bmF0aGFuQHRvb3RhbGxuYXRlLm5ldD4qCiAqCiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZwogKiBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUKICogJ1NvZnR3YXJlJyksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZwogKiB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsCiAqIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0bwogKiBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8KICogdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOioKICoKICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUKICogaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuKgogKgogKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgJ0FTIElTJywgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwKICogRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GCiAqIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4KICogSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkKICogQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwKICogVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUKICogU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuCiAqLwoKY29uc3QgSU5URVJOQUwgPSBTeW1ib2woJ0FnZW50QmFzZUludGVybmFsU3RhdGUnKTsKCmNsYXNzIEFnZW50IGV4dGVuZHMgaHR0cC5BZ2VudCB7CgogIC8vIFNldCBieSBgaHR0cC5BZ2VudGAgLSBtaXNzaW5nIGZyb20gYEB0eXBlcy9ub2RlYAoKICBjb25zdHJ1Y3RvcihvcHRzKSB7CiAgICBzdXBlcihvcHRzKTsKICAgIHRoaXNbSU5URVJOQUxdID0ge307CiAgfQoKICAvKioKICAgKiBEZXRlcm1pbmUgd2hldGhlciB0aGlzIGlzIGFuIGBodHRwYCBvciBgaHR0cHNgIHJlcXVlc3QuCiAgICovCiAgaXNTZWN1cmVFbmRwb2ludChvcHRpb25zKSB7CiAgICBpZiAob3B0aW9ucykgewogICAgICAvLyBGaXJzdCBjaGVjayB0aGUgYHNlY3VyZUVuZHBvaW50YCBwcm9wZXJ0eSBleHBsaWNpdGx5LCBzaW5jZSB0aGlzCiAgICAgIC8vIG1lYW5zIHRoYXQgYSBwYXJlbnQgYEFnZW50YCBpcyAicGFzc2luZyB0aHJvdWdoIiB0byB0aGlzIGluc3RhbmNlLgogICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSwgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzCiAgICAgIGlmICh0eXBlb2YgKG9wdGlvbnMgKS5zZWN1cmVFbmRwb2ludCA9PT0gJ2Jvb2xlYW4nKSB7CiAgICAgICAgcmV0dXJuIG9wdGlvbnMuc2VjdXJlRW5kcG9pbnQ7CiAgICAgIH0KCiAgICAgIC8vIElmIG5vIGV4cGxpY2l0IGBzZWN1cmVgIGVuZHBvaW50LCBjaGVjayBpZiBgcHJvdG9jb2xgIHByb3BlcnR5IGlzCiAgICAgIC8vIHNldC4gVGhpcyB3aWxsIHVzdWFsbHkgYmUgdGhlIGNhc2Ugc2luY2UgdXNpbmcgYSBmdWxsIHN0cmluZyBVUkwKICAgICAgLy8gb3IgYFVSTGAgaW5zdGFuY2Ugc2hvdWxkIGJlIHRoZSBtb3N0IGNvbW1vbiB1c2FnZS4KICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnByb3RvY29sID09PSAnc3RyaW5nJykgewogICAgICAgIHJldHVybiBvcHRpb25zLnByb3RvY29sID09PSAnaHR0cHM6JzsKICAgICAgfQogICAgfQoKICAgIC8vIEZpbmFsbHksIGlmIG5vIGBwcm90b2NvbGAgcHJvcGVydHkgd2FzIHNldCwgdGhlbiBmYWxsIGJhY2sgdG8KICAgIC8vIGNoZWNraW5nIHRoZSBzdGFjayB0cmFjZSBvZiB0aGUgY3VycmVudCBjYWxsIHN0YWNrLCBhbmQgdHJ5IHRvCiAgICAvLyBkZXRlY3QgdGhlICJodHRwcyIgbW9kdWxlLgogICAgY29uc3QgeyBzdGFjayB9ID0gbmV3IEVycm9yKCk7CiAgICBpZiAodHlwZW9mIHN0YWNrICE9PSAnc3RyaW5nJykgcmV0dXJuIGZhbHNlOwogICAgcmV0dXJuIHN0YWNrLnNwbGl0KCdcbicpLnNvbWUobCA9PiBsLmluZGV4T2YoJyhodHRwcy5qczonKSAhPT0gLTEgfHwgbC5pbmRleE9mKCdub2RlOmh0dHBzOicpICE9PSAtMSk7CiAgfQoKICBjcmVhdGVTb2NrZXQocmVxLCBvcHRpb25zLCBjYikgewogICAgY29uc3QgY29ubmVjdE9wdHMgPSB7CiAgICAgIC4uLm9wdGlvbnMsCiAgICAgIHNlY3VyZUVuZHBvaW50OiB0aGlzLmlzU2VjdXJlRW5kcG9pbnQob3B0aW9ucyksCiAgICB9OwogICAgUHJvbWlzZS5yZXNvbHZlKCkKICAgICAgLnRoZW4oKCkgPT4gdGhpcy5jb25uZWN0KHJlcSwgY29ubmVjdE9wdHMpKQogICAgICAudGhlbihzb2NrZXQgPT4gewogICAgICAgIGlmIChzb2NrZXQgaW5zdGFuY2VvZiBodHRwLkFnZW50KSB7CiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGBhZGRSZXF1ZXN0KClgIGlzbid0IGRlZmluZWQgaW4gYEB0eXBlcy9ub2RlYAogICAgICAgICAgcmV0dXJuIHNvY2tldC5hZGRSZXF1ZXN0KHJlcSwgY29ubmVjdE9wdHMpOwogICAgICAgIH0KICAgICAgICB0aGlzW0lOVEVSTkFMXS5jdXJyZW50U29ja2V0ID0gc29ja2V0OwogICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgYGNyZWF0ZVNvY2tldCgpYCBpc24ndCBkZWZpbmVkIGluIGBAdHlwZXMvbm9kZWAKICAgICAgICBzdXBlci5jcmVhdGVTb2NrZXQocmVxLCBvcHRpb25zLCBjYik7CiAgICAgIH0sIGNiKTsKICB9CgogIGNyZWF0ZUNvbm5lY3Rpb24oKSB7CiAgICBjb25zdCBzb2NrZXQgPSB0aGlzW0lOVEVSTkFMXS5jdXJyZW50U29ja2V0OwogICAgdGhpc1tJTlRFUk5BTF0uY3VycmVudFNvY2tldCA9IHVuZGVmaW5lZDsKICAgIGlmICghc29ja2V0KSB7CiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gc29ja2V0IHdhcyByZXR1cm5lZCBpbiB0aGUgYGNvbm5lY3QoKWAgZnVuY3Rpb24nKTsKICAgIH0KICAgIHJldHVybiBzb2NrZXQ7CiAgfQoKICBnZXQgZGVmYXVsdFBvcnQoKSB7CiAgICByZXR1cm4gX251bGxpc2hDb2FsZXNjZSQyKHRoaXNbSU5URVJOQUxdLmRlZmF1bHRQb3J0LCAoKSA9PiAoICh0aGlzLnByb3RvY29sID09PSAnaHR0cHM6JyA/IDQ0MyA6IDgwKSkpOwogIH0KCiAgc2V0IGRlZmF1bHRQb3J0KHYpIHsKICAgIGlmICh0aGlzW0lOVEVSTkFMXSkgewogICAgICB0aGlzW0lOVEVSTkFMXS5kZWZhdWx0UG9ydCA9IHY7CiAgICB9CiAgfQoKICBnZXQgcHJvdG9jb2woKSB7CiAgICByZXR1cm4gX251bGxpc2hDb2FsZXNjZSQyKHRoaXNbSU5URVJOQUxdLnByb3RvY29sLCAoKSA9PiAoICh0aGlzLmlzU2VjdXJlRW5kcG9pbnQoKSA/ICdodHRwczonIDogJ2h0dHA6JykpKTsKICB9CgogIHNldCBwcm90b2NvbCh2KSB7CiAgICBpZiAodGhpc1tJTlRFUk5BTF0pIHsKICAgICAgdGhpc1tJTlRFUk5BTF0ucHJvdG9jb2wgPSB2OwogICAgfQogIH0KfQoKZnVuY3Rpb24gZGVidWckMSguLi5hcmdzKSB7CiAgbG9nZ2VyLmxvZygnW2h0dHBzLXByb3h5LWFnZW50OnBhcnNlLXByb3h5LXJlc3BvbnNlXScsIC4uLmFyZ3MpOwp9CgpmdW5jdGlvbiBwYXJzZVByb3h5UmVzcG9uc2Uoc29ja2V0KSB7CiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHsKICAgIC8vIHdlIG5lZWQgdG8gYnVmZmVyIGFueSBIVFRQIHRyYWZmaWMgdGhhdCBoYXBwZW5zIHdpdGggdGhlIHByb3h5IGJlZm9yZSB3ZSBnZXQKICAgIC8vIHRoZSBDT05ORUNUIHJlc3BvbnNlLCBzbyB0aGF0IGlmIHRoZSByZXNwb25zZSBpcyBhbnl0aGluZyBvdGhlciB0aGFuIGFuICIyMDAiCiAgICAvLyByZXNwb25zZSBjb2RlLCB0aGVuIHdlIGNhbiByZS1wbGF5IHRoZSAiZGF0YSIgZXZlbnRzIG9uIHRoZSBzb2NrZXQgb25jZSB0aGUKICAgIC8vIEhUVFAgcGFyc2VyIGlzIGhvb2tlZCB1cC4uLgogICAgbGV0IGJ1ZmZlcnNMZW5ndGggPSAwOwogICAgY29uc3QgYnVmZmVycyA9IFtdOwoKICAgIGZ1bmN0aW9uIHJlYWQoKSB7CiAgICAgIGNvbnN0IGIgPSBzb2NrZXQucmVhZCgpOwogICAgICBpZiAoYikgb25kYXRhKGIpOwogICAgICBlbHNlIHNvY2tldC5vbmNlKCdyZWFkYWJsZScsIHJlYWQpOwogICAgfQoKICAgIGZ1bmN0aW9uIGNsZWFudXAoKSB7CiAgICAgIHNvY2tldC5yZW1vdmVMaXN0ZW5lcignZW5kJywgb25lbmQpOwogICAgICBzb2NrZXQucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgb25lcnJvcik7CiAgICAgIHNvY2tldC5yZW1vdmVMaXN0ZW5lcigncmVhZGFibGUnLCByZWFkKTsKICAgIH0KCiAgICBmdW5jdGlvbiBvbmVuZCgpIHsKICAgICAgY2xlYW51cCgpOwogICAgICBkZWJ1ZyQxKCdvbmVuZCcpOwogICAgICByZWplY3QobmV3IEVycm9yKCdQcm94eSBjb25uZWN0aW9uIGVuZGVkIGJlZm9yZSByZWNlaXZpbmcgQ09OTkVDVCByZXNwb25zZScpKTsKICAgIH0KCiAgICBmdW5jdGlvbiBvbmVycm9yKGVycikgewogICAgICBjbGVhbnVwKCk7CiAgICAgIGRlYnVnJDEoJ29uZXJyb3IgJW8nLCBlcnIpOwogICAgICByZWplY3QoZXJyKTsKICAgIH0KCiAgICBmdW5jdGlvbiBvbmRhdGEoYikgewogICAgICBidWZmZXJzLnB1c2goYik7CiAgICAgIGJ1ZmZlcnNMZW5ndGggKz0gYi5sZW5ndGg7CgogICAgICBjb25zdCBidWZmZXJlZCA9IEJ1ZmZlci5jb25jYXQoYnVmZmVycywgYnVmZmVyc0xlbmd0aCk7CiAgICAgIGNvbnN0IGVuZE9mSGVhZGVycyA9IGJ1ZmZlcmVkLmluZGV4T2YoJ1xyXG5cclxuJyk7CgogICAgICBpZiAoZW5kT2ZIZWFkZXJzID09PSAtMSkgewogICAgICAgIC8vIGtlZXAgYnVmZmVyaW5nCiAgICAgICAgZGVidWckMSgnaGF2ZSBub3QgcmVjZWl2ZWQgZW5kIG9mIEhUVFAgaGVhZGVycyB5ZXQuLi4nKTsKICAgICAgICByZWFkKCk7CiAgICAgICAgcmV0dXJuOwogICAgICB9CgogICAgICBjb25zdCBoZWFkZXJQYXJ0cyA9IGJ1ZmZlcmVkLnNsaWNlKDAsIGVuZE9mSGVhZGVycykudG9TdHJpbmcoJ2FzY2lpJykuc3BsaXQoJ1xyXG4nKTsKICAgICAgY29uc3QgZmlyc3RMaW5lID0gaGVhZGVyUGFydHMuc2hpZnQoKTsKICAgICAgaWYgKCFmaXJzdExpbmUpIHsKICAgICAgICBzb2NrZXQuZGVzdHJveSgpOwogICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKCdObyBoZWFkZXIgcmVjZWl2ZWQgZnJvbSBwcm94eSBDT05ORUNUIHJlc3BvbnNlJykpOwogICAgICB9CiAgICAgIGNvbnN0IGZpcnN0TGluZVBhcnRzID0gZmlyc3RMaW5lLnNwbGl0KCcgJyk7CiAgICAgIGNvbnN0IHN0YXR1c0NvZGUgPSArZmlyc3RMaW5lUGFydHNbMV07CiAgICAgIGNvbnN0IHN0YXR1c1RleHQgPSBmaXJzdExpbmVQYXJ0cy5zbGljZSgyKS5qb2luKCcgJyk7CiAgICAgIGNvbnN0IGhlYWRlcnMgPSB7fTsKICAgICAgZm9yIChjb25zdCBoZWFkZXIgb2YgaGVhZGVyUGFydHMpIHsKICAgICAgICBpZiAoIWhlYWRlcikgY29udGludWU7CiAgICAgICAgY29uc3QgZmlyc3RDb2xvbiA9IGhlYWRlci5pbmRleE9mKCc6Jyk7CiAgICAgICAgaWYgKGZpcnN0Q29sb24gPT09IC0xKSB7CiAgICAgICAgICBzb2NrZXQuZGVzdHJveSgpOwogICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYEludmFsaWQgaGVhZGVyIGZyb20gcHJveHkgQ09OTkVDVCByZXNwb25zZTogIiR7aGVhZGVyfSJgKSk7CiAgICAgICAgfQogICAgICAgIGNvbnN0IGtleSA9IGhlYWRlci5zbGljZSgwLCBmaXJzdENvbG9uKS50b0xvd2VyQ2FzZSgpOwogICAgICAgIGNvbnN0IHZhbHVlID0gaGVhZGVyLnNsaWNlKGZpcnN0Q29sb24gKyAxKS50cmltU3RhcnQoKTsKICAgICAgICBjb25zdCBjdXJyZW50ID0gaGVhZGVyc1trZXldOwogICAgICAgIGlmICh0eXBlb2YgY3VycmVudCA9PT0gJ3N0cmluZycpIHsKICAgICAgICAgIGhlYWRlcnNba2V5XSA9IFtjdXJyZW50LCB2YWx1ZV07CiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGN1cnJlbnQpKSB7CiAgICAgICAgICBjdXJyZW50LnB1c2godmFsdWUpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICBoZWFkZXJzW2tleV0gPSB2YWx1ZTsKICAgICAgICB9CiAgICAgIH0KICAgICAgZGVidWckMSgnZ290IHByb3h5IHNlcnZlciByZXNwb25zZTogJW8gJW8nLCBmaXJzdExpbmUsIGhlYWRlcnMpOwogICAgICBjbGVhbnVwKCk7CiAgICAgIHJlc29sdmUoewogICAgICAgIGNvbm5lY3Q6IHsKICAgICAgICAgIHN0YXR1c0NvZGUsCiAgICAgICAgICBzdGF0dXNUZXh0LAogICAgICAgICAgaGVhZGVycywKICAgICAgICB9LAogICAgICAgIGJ1ZmZlcmVkLAogICAgICB9KTsKICAgIH0KCiAgICBzb2NrZXQub24oJ2Vycm9yJywgb25lcnJvcik7CiAgICBzb2NrZXQub24oJ2VuZCcsIG9uZW5kKTsKCiAgICByZWFkKCk7CiAgfSk7Cn0KCmZ1bmN0aW9uIF9udWxsaXNoQ29hbGVzY2UkMShsaHMsIHJoc0ZuKSB7IGlmIChsaHMgIT0gbnVsbCkgeyByZXR1cm4gbGhzOyB9IGVsc2UgeyByZXR1cm4gcmhzRm4oKTsgfSB9IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluJDEob3BzKSB7IGxldCBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyBsZXQgdmFsdWUgPSBvcHNbMF07IGxldCBpID0gMTsgd2hpbGUgKGkgPCBvcHMubGVuZ3RoKSB7IGNvbnN0IG9wID0gb3BzW2ldOyBjb25zdCBmbiA9IG9wc1tpICsgMV07IGkgKz0gMjsgaWYgKChvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpICYmIHZhbHVlID09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBpZiAob3AgPT09ICdhY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnKSB7IGxhc3RBY2Nlc3NMSFMgPSB2YWx1ZTsgdmFsdWUgPSBmbih2YWx1ZSk7IH0gZWxzZSBpZiAob3AgPT09ICdjYWxsJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpIHsgdmFsdWUgPSBmbigoLi4uYXJncykgPT4gdmFsdWUuY2FsbChsYXN0QWNjZXNzTEhTLCAuLi5hcmdzKSk7IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IH0gfSByZXR1cm4gdmFsdWU7IH0KCmZ1bmN0aW9uIGRlYnVnKC4uLmFyZ3MpIHsKICBsb2dnZXIubG9nKCdbaHR0cHMtcHJveHktYWdlbnRdJywgLi4uYXJncyk7Cn0KCi8qKgogKiBUaGUgYEh0dHBzUHJveHlBZ2VudGAgaW1wbGVtZW50cyBhbiBIVFRQIEFnZW50IHN1YmNsYXNzIHRoYXQgY29ubmVjdHMgdG8KICogdGhlIHNwZWNpZmllZCAiSFRUUChzKSBwcm94eSBzZXJ2ZXIiIGluIG9yZGVyIHRvIHByb3h5IEhUVFBTIHJlcXVlc3RzLgogKgogKiBPdXRnb2luZyBIVFRQIHJlcXVlc3RzIGFyZSBmaXJzdCB0dW5uZWxlZCB0aHJvdWdoIHRoZSBwcm94eSBzZXJ2ZXIgdXNpbmcgdGhlCiAqIGBDT05ORUNUYCBIVFRQIHJlcXVlc3QgbWV0aG9kIHRvIGVzdGFibGlzaCBhIGNvbm5lY3Rpb24gdG8gdGhlIHByb3h5IHNlcnZlciwKICogYW5kIHRoZW4gdGhlIHByb3h5IHNlcnZlciBjb25uZWN0cyB0byB0aGUgZGVzdGluYXRpb24gdGFyZ2V0IGFuZCBpc3N1ZXMgdGhlCiAqIEhUVFAgcmVxdWVzdCBmcm9tIHRoZSBwcm94eSBzZXJ2ZXIuCiAqCiAqIGBodHRwczpgIHJlcXVlc3RzIGhhdmUgdGhlaXIgc29ja2V0IGNvbm5lY3Rpb24gdXBncmFkZWQgdG8gVExTIG9uY2UKICogdGhlIGNvbm5lY3Rpb24gdG8gdGhlIHByb3h5IHNlcnZlciBoYXMgYmVlbiBlc3RhYmxpc2hlZC4KICovCmNsYXNzIEh0dHBzUHJveHlBZ2VudCBleHRlbmRzIEFnZW50IHsKICBzdGF0aWMgX19pbml0U3RhdGljKCkge3RoaXMucHJvdG9jb2xzID0gWydodHRwJywgJ2h0dHBzJ107IH0KCiAgY29uc3RydWN0b3IocHJveHksIG9wdHMpIHsKICAgIHN1cGVyKG9wdHMpOwogICAgdGhpcy5vcHRpb25zID0ge307CiAgICB0aGlzLnByb3h5ID0gdHlwZW9mIHByb3h5ID09PSAnc3RyaW5nJyA/IG5ldyBVUkwocHJveHkpIDogcHJveHk7CiAgICB0aGlzLnByb3h5SGVhZGVycyA9IF9udWxsaXNoQ29hbGVzY2UkMShfb3B0aW9uYWxDaGFpbiQxKFtvcHRzLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMiA9PiBfMi5oZWFkZXJzXSksICgpID0+ICgge30pKTsKICAgIGRlYnVnKCdDcmVhdGluZyBuZXcgSHR0cHNQcm94eUFnZW50IGluc3RhbmNlOiAlbycsIHRoaXMucHJveHkuaHJlZik7CgogICAgLy8gVHJpbSBvZmYgdGhlIGJyYWNrZXRzIGZyb20gSVB2NiBhZGRyZXNzZXMKICAgIGNvbnN0IGhvc3QgPSAodGhpcy5wcm94eS5ob3N0bmFtZSB8fCB0aGlzLnByb3h5Lmhvc3QpLnJlcGxhY2UoL15cW3xcXSQvZywgJycpOwogICAgY29uc3QgcG9ydCA9IHRoaXMucHJveHkucG9ydCA/IHBhcnNlSW50KHRoaXMucHJveHkucG9ydCwgMTApIDogdGhpcy5wcm94eS5wcm90b2NvbCA9PT0gJ2h0dHBzOicgPyA0NDMgOiA4MDsKICAgIHRoaXMuY29ubmVjdE9wdHMgPSB7CiAgICAgIC8vIEF0dGVtcHQgdG8gbmVnb3RpYXRlIGh0dHAvMS4xIGZvciBwcm94eSBzZXJ2ZXJzIHRoYXQgc3VwcG9ydCBodHRwLzIKICAgICAgQUxQTlByb3RvY29sczogWydodHRwLzEuMSddLAogICAgICAuLi4ob3B0cyA/IG9taXQob3B0cywgJ2hlYWRlcnMnKSA6IG51bGwpLAogICAgICBob3N0LAogICAgICBwb3J0LAogICAgfTsKICB9CgogIC8qKgogICAqIENhbGxlZCB3aGVuIHRoZSBub2RlLWNvcmUgSFRUUCBjbGllbnQgbGlicmFyeSBpcyBjcmVhdGluZyBhCiAgICogbmV3IEhUVFAgcmVxdWVzdC4KICAgKi8KICBhc3luYyBjb25uZWN0KHJlcSwgb3B0cykgewogICAgY29uc3QgeyBwcm94eSB9ID0gdGhpczsKCiAgICBpZiAoIW9wdHMuaG9zdCkgewogICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdObyAiaG9zdCIgcHJvdmlkZWQnKTsKICAgIH0KCiAgICAvLyBDcmVhdGUgYSBzb2NrZXQgY29ubmVjdGlvbiB0byB0aGUgcHJveHkgc2VydmVyLgogICAgbGV0IHNvY2tldDsKICAgIGlmIChwcm94eS5wcm90b2NvbCA9PT0gJ2h0dHBzOicpIHsKICAgICAgZGVidWcoJ0NyZWF0aW5nIGB0bHMuU29ja2V0YDogJW8nLCB0aGlzLmNvbm5lY3RPcHRzKTsKICAgICAgY29uc3Qgc2VydmVybmFtZSA9IHRoaXMuY29ubmVjdE9wdHMuc2VydmVybmFtZSB8fCB0aGlzLmNvbm5lY3RPcHRzLmhvc3Q7CiAgICAgIHNvY2tldCA9IHRscy5jb25uZWN0KHsKICAgICAgICAuLi50aGlzLmNvbm5lY3RPcHRzLAogICAgICAgIHNlcnZlcm5hbWU6IHNlcnZlcm5hbWUgJiYgbmV0LmlzSVAoc2VydmVybmFtZSkgPyB1bmRlZmluZWQgOiBzZXJ2ZXJuYW1lLAogICAgICB9KTsKICAgIH0gZWxzZSB7CiAgICAgIGRlYnVnKCdDcmVhdGluZyBgbmV0LlNvY2tldGA6ICVvJywgdGhpcy5jb25uZWN0T3B0cyk7CiAgICAgIHNvY2tldCA9IG5ldC5jb25uZWN0KHRoaXMuY29ubmVjdE9wdHMpOwogICAgfQoKICAgIGNvbnN0IGhlYWRlcnMgPQogICAgICB0eXBlb2YgdGhpcy5wcm94eUhlYWRlcnMgPT09ICdmdW5jdGlvbicgPyB0aGlzLnByb3h5SGVhZGVycygpIDogeyAuLi50aGlzLnByb3h5SGVhZGVycyB9OwogICAgY29uc3QgaG9zdCA9IG5ldC5pc0lQdjYob3B0cy5ob3N0KSA/IGBbJHtvcHRzLmhvc3R9XWAgOiBvcHRzLmhvc3Q7CiAgICBsZXQgcGF5bG9hZCA9IGBDT05ORUNUICR7aG9zdH06JHtvcHRzLnBvcnR9IEhUVFAvMS4xXHJcbmA7CgogICAgLy8gSW5qZWN0IHRoZSBgUHJveHktQXV0aG9yaXphdGlvbmAgaGVhZGVyIGlmIG5lY2Vzc2FyeS4KICAgIGlmIChwcm94eS51c2VybmFtZSB8fCBwcm94eS5wYXNzd29yZCkgewogICAgICBjb25zdCBhdXRoID0gYCR7ZGVjb2RlVVJJQ29tcG9uZW50KHByb3h5LnVzZXJuYW1lKX06JHtkZWNvZGVVUklDb21wb25lbnQocHJveHkucGFzc3dvcmQpfWA7CiAgICAgIGhlYWRlcnNbJ1Byb3h5LUF1dGhvcml6YXRpb24nXSA9IGBCYXNpYyAke0J1ZmZlci5mcm9tKGF1dGgpLnRvU3RyaW5nKCdiYXNlNjQnKX1gOwogICAgfQoKICAgIGhlYWRlcnMuSG9zdCA9IGAke2hvc3R9OiR7b3B0cy5wb3J0fWA7CgogICAgaWYgKCFoZWFkZXJzWydQcm94eS1Db25uZWN0aW9uJ10pIHsKICAgICAgaGVhZGVyc1snUHJveHktQ29ubmVjdGlvbiddID0gdGhpcy5rZWVwQWxpdmUgPyAnS2VlcC1BbGl2ZScgOiAnY2xvc2UnOwogICAgfQogICAgZm9yIChjb25zdCBuYW1lIG9mIE9iamVjdC5rZXlzKGhlYWRlcnMpKSB7CiAgICAgIHBheWxvYWQgKz0gYCR7bmFtZX06ICR7aGVhZGVyc1tuYW1lXX1cclxuYDsKICAgIH0KCiAgICBjb25zdCBwcm94eVJlc3BvbnNlUHJvbWlzZSA9IHBhcnNlUHJveHlSZXNwb25zZShzb2NrZXQpOwoKICAgIHNvY2tldC53cml0ZShgJHtwYXlsb2FkfVxyXG5gKTsKCiAgICBjb25zdCB7IGNvbm5lY3QsIGJ1ZmZlcmVkIH0gPSBhd2FpdCBwcm94eVJlc3BvbnNlUHJvbWlzZTsKICAgIHJlcS5lbWl0KCdwcm94eUNvbm5lY3QnLCBjb25uZWN0KTsKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnQKICAgIC8vIEB0cy1pZ25vcmUgTm90IEV2ZW50RW1pdHRlciBpbiBOb2RlIHR5cGVzCiAgICB0aGlzLmVtaXQoJ3Byb3h5Q29ubmVjdCcsIGNvbm5lY3QsIHJlcSk7CgogICAgaWYgKGNvbm5lY3Quc3RhdHVzQ29kZSA9PT0gMjAwKSB7CiAgICAgIHJlcS5vbmNlKCdzb2NrZXQnLCByZXN1bWUpOwoKICAgICAgaWYgKG9wdHMuc2VjdXJlRW5kcG9pbnQpIHsKICAgICAgICAvLyBUaGUgcHJveHkgaXMgY29ubmVjdGluZyB0byBhIFRMUyBzZXJ2ZXIsIHNvIHVwZ3JhZGUKICAgICAgICAvLyB0aGlzIHNvY2tldCBjb25uZWN0aW9uIHRvIGEgVExTIGNvbm5lY3Rpb24uCiAgICAgICAgZGVidWcoJ1VwZ3JhZGluZyBzb2NrZXQgY29ubmVjdGlvbiB0byBUTFMnKTsKICAgICAgICBjb25zdCBzZXJ2ZXJuYW1lID0gb3B0cy5zZXJ2ZXJuYW1lIHx8IG9wdHMuaG9zdDsKICAgICAgICByZXR1cm4gdGxzLmNvbm5lY3QoewogICAgICAgICAgLi4ub21pdChvcHRzLCAnaG9zdCcsICdwYXRoJywgJ3BvcnQnKSwKICAgICAgICAgIHNvY2tldCwKICAgICAgICAgIHNlcnZlcm5hbWU6IG5ldC5pc0lQKHNlcnZlcm5hbWUpID8gdW5kZWZpbmVkIDogc2VydmVybmFtZSwKICAgICAgICB9KTsKICAgICAgfQoKICAgICAgcmV0dXJuIHNvY2tldDsKICAgIH0KCiAgICAvLyBTb21lIG90aGVyIHN0YXR1cyBjb2RlIHRoYXQncyBub3QgMjAwLi4uIG5lZWQgdG8gcmUtcGxheSB0aGUgSFRUUAogICAgLy8gaGVhZGVyICJkYXRhIiBldmVudHMgb250byB0aGUgc29ja2V0IG9uY2UgdGhlIEhUVFAgbWFjaGluZXJ5IGlzCiAgICAvLyBhdHRhY2hlZCBzbyB0aGF0IHRoZSBub2RlIGNvcmUgYGh0dHBgIGNhbiBwYXJzZSBhbmQgaGFuZGxlIHRoZQogICAgLy8gZXJyb3Igc3RhdHVzIGNvZGUuCgogICAgLy8gQ2xvc2UgdGhlIG9yaWdpbmFsIHNvY2tldCwgYW5kIGEgbmV3ICJmYWtlIiBzb2NrZXQgaXMgcmV0dXJuZWQKICAgIC8vIGluc3RlYWQsIHNvIHRoYXQgdGhlIHByb3h5IGRvZXNuJ3QgZ2V0IHRoZSBIVFRQIHJlcXVlc3QKICAgIC8vIHdyaXR0ZW4gdG8gaXQgKHdoaWNoIG1heSBjb250YWluIGBBdXRob3JpemF0aW9uYCBoZWFkZXJzIG9yIG90aGVyCiAgICAvLyBzZW5zaXRpdmUgZGF0YSkuCiAgICAvLwogICAgLy8gU2VlOiBodHRwczovL2hhY2tlcm9uZS5jb20vcmVwb3J0cy81NDE1MDIKICAgIHNvY2tldC5kZXN0cm95KCk7CgogICAgY29uc3QgZmFrZVNvY2tldCA9IG5ldyBuZXQuU29ja2V0KHsgd3JpdGFibGU6IGZhbHNlIH0pOwogICAgZmFrZVNvY2tldC5yZWFkYWJsZSA9IHRydWU7CgogICAgLy8gTmVlZCB0byB3YWl0IGZvciB0aGUgInNvY2tldCIgZXZlbnQgdG8gcmUtcGxheSB0aGUgImRhdGEiIGV2ZW50cy4KICAgIHJlcS5vbmNlKCdzb2NrZXQnLCAocykgPT4gewogICAgICBkZWJ1ZygnUmVwbGF5aW5nIHByb3h5IGJ1ZmZlciBmb3IgZmFpbGVkIHJlcXVlc3QnKTsKICAgICAgLy8gUmVwbGF5IHRoZSAiYnVmZmVyZWQiIEJ1ZmZlciBvbnRvIHRoZSBmYWtlIGBzb2NrZXRgLCBzaW5jZSBhdAogICAgICAvLyB0aGlzIHBvaW50IHRoZSBIVFRQIG1vZHVsZSBtYWNoaW5lcnkgaGFzIGJlZW4gaG9va2VkIHVwIGZvcgogICAgICAvLyB0aGUgdXNlci4KICAgICAgcy5wdXNoKGJ1ZmZlcmVkKTsKICAgICAgcy5wdXNoKG51bGwpOwogICAgfSk7CgogICAgcmV0dXJuIGZha2VTb2NrZXQ7CiAgfQp9IEh0dHBzUHJveHlBZ2VudC5fX2luaXRTdGF0aWMoKTsKCmZ1bmN0aW9uIHJlc3VtZShzb2NrZXQpIHsKICBzb2NrZXQucmVzdW1lKCk7Cn0KCmZ1bmN0aW9uIG9taXQoCiAgb2JqLAogIC4uLmtleXMKKQoKIHsKICBjb25zdCByZXQgPSB7fQoKOwogIGxldCBrZXk7CiAgZm9yIChrZXkgaW4gb2JqKSB7CiAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkgewogICAgICByZXRba2V5XSA9IG9ialtrZXldOwogICAgfQogIH0KICByZXR1cm4gcmV0Owp9CgpmdW5jdGlvbiBfbnVsbGlzaENvYWxlc2NlKGxocywgcmhzRm4pIHsgaWYgKGxocyAhPSBudWxsKSB7IHJldHVybiBsaHM7IH0gZWxzZSB7IHJldHVybiByaHNGbigpOyB9IH0KLy8gRXN0aW1hdGVkIG1heGltdW0gc2l6ZSBmb3IgcmVhc29uYWJsZSBzdGFuZGFsb25lIGV2ZW50CmNvbnN0IEdaSVBfVEhSRVNIT0xEID0gMTAyNCAqIDMyOwoKLyoqCiAqIEdldHMgYSBzdHJlYW0gZnJvbSBhIFVpbnQ4QXJyYXkgb3Igc3RyaW5nCiAqIFJlYWRhYmxlLmZyb20gaXMgaWRlYWwgYnV0IHdhcyBhZGRlZCBpbiBub2RlLmpzIHYxMi4zLjAgYW5kIHYxMC4xNy4wCiAqLwpmdW5jdGlvbiBzdHJlYW1Gcm9tQm9keShib2R5KSB7CiAgcmV0dXJuIG5ldyBSZWFkYWJsZSh7CiAgICByZWFkKCkgewogICAgICB0aGlzLnB1c2goYm9keSk7CiAgICAgIHRoaXMucHVzaChudWxsKTsKICAgIH0sCiAgfSk7Cn0KCi8qKgogKiBDcmVhdGVzIGEgVHJhbnNwb3J0IHRoYXQgdXNlcyBuYXRpdmUgdGhlIG5hdGl2ZSAnaHR0cCcgYW5kICdodHRwcycgbW9kdWxlcyB0byBzZW5kIGV2ZW50cyB0byBTZW50cnkuCiAqLwpmdW5jdGlvbiBtYWtlTm9kZVRyYW5zcG9ydChvcHRpb25zKSB7CiAgbGV0IHVybFNlZ21lbnRzOwoKICB0cnkgewogICAgdXJsU2VnbWVudHMgPSBuZXcgVVJMKG9wdGlvbnMudXJsKTsKICB9IGNhdGNoIChlKSB7CiAgICBjb25zb2xlU2FuZGJveCgoKSA9PiB7CiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlCiAgICAgIGNvbnNvbGUud2FybigKICAgICAgICAnW0BzZW50cnkvbm9kZV06IEludmFsaWQgZHNuIG9yIHR1bm5lbCBvcHRpb24sIHdpbGwgbm90IHNlbmQgYW55IGV2ZW50cy4gVGhlIHR1bm5lbCBvcHRpb24gbXVzdCBiZSBhIGZ1bGwgVVJMIHdoZW4gdXNlZC4nLAogICAgICApOwogICAgfSk7CiAgICByZXR1cm4gY3JlYXRlVHJhbnNwb3J0KG9wdGlvbnMsICgpID0+IFByb21pc2UucmVzb2x2ZSh7fSkpOwogIH0KCiAgY29uc3QgaXNIdHRwcyA9IHVybFNlZ21lbnRzLnByb3RvY29sID09PSAnaHR0cHM6JzsKCiAgLy8gUHJveHkgcHJpb3JpdGl6YXRpb246IGh0dHAgPT4gYG9wdGlvbnMucHJveHlgIHwgYHByb2Nlc3MuZW52Lmh0dHBfcHJveHlgCiAgLy8gUHJveHkgcHJpb3JpdGl6YXRpb246IGh0dHBzID0+IGBvcHRpb25zLnByb3h5YCB8IGBwcm9jZXNzLmVudi5odHRwc19wcm94eWAgfCBgcHJvY2Vzcy5lbnYuaHR0cF9wcm94eWAKICBjb25zdCBwcm94eSA9IGFwcGx5Tm9Qcm94eU9wdGlvbigKICAgIHVybFNlZ21lbnRzLAogICAgb3B0aW9ucy5wcm94eSB8fCAoaXNIdHRwcyA/IHByb2Nlc3MuZW52Lmh0dHBzX3Byb3h5IDogdW5kZWZpbmVkKSB8fCBwcm9jZXNzLmVudi5odHRwX3Byb3h5LAogICk7CgogIGNvbnN0IG5hdGl2ZUh0dHBNb2R1bGUgPSBpc0h0dHBzID8gaHR0cHMgOiBodHRwOwogIGNvbnN0IGtlZXBBbGl2ZSA9IG9wdGlvbnMua2VlcEFsaXZlID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IG9wdGlvbnMua2VlcEFsaXZlOwoKICAvLyBUT0RPKHY3KTogRXZhbHVhdGUgaWYgd2UgY2FuIHNldCBrZWVwQWxpdmUgdG8gdHJ1ZS4gVGhpcyB3b3VsZCBpbnZvbHZlIHRlc3RpbmcgZm9yIG1lbW9yeSBsZWFrcyBpbiBvbGRlciBub2RlCiAgLy8gdmVyc2lvbnMoPj0gOCkgYXMgdGhleSBoYWQgbWVtb3J5IGxlYWtzIHdoZW4gdXNpbmcgaXQ6ICMyNTU1CiAgY29uc3QgYWdlbnQgPSBwcm94eQogICAgPyAobmV3IEh0dHBzUHJveHlBZ2VudChwcm94eSkgKQogICAgOiBuZXcgbmF0aXZlSHR0cE1vZHVsZS5BZ2VudCh7IGtlZXBBbGl2ZSwgbWF4U29ja2V0czogMzAsIHRpbWVvdXQ6IDIwMDAgfSk7CgogIGNvbnN0IHJlcXVlc3RFeGVjdXRvciA9IGNyZWF0ZVJlcXVlc3RFeGVjdXRvcihvcHRpb25zLCBfbnVsbGlzaENvYWxlc2NlKG9wdGlvbnMuaHR0cE1vZHVsZSwgKCkgPT4gKCBuYXRpdmVIdHRwTW9kdWxlKSksIGFnZW50KTsKICByZXR1cm4gY3JlYXRlVHJhbnNwb3J0KG9wdGlvbnMsIHJlcXVlc3RFeGVjdXRvcik7Cn0KCi8qKgogKiBIb25vcnMgdGhlIGBub19wcm94eWAgZW52IHZhcmlhYmxlIHdpdGggdGhlIGhpZ2hlc3QgcHJpb3JpdHkgdG8gYWxsb3cgZm9yIGhvc3RzIGV4Y2x1c2lvbi4KICoKICogQHBhcmFtIHRyYW5zcG9ydFVybCBUaGUgVVJMIHRoZSB0cmFuc3BvcnQgaW50ZW5kcyB0byBzZW5kIGV2ZW50cyB0by4KICogQHBhcmFtIHByb3h5IFRoZSBjbGllbnQgY29uZmlndXJlZCBwcm94eS4KICogQHJldHVybnMgQSBwcm94eSB0aGUgdHJhbnNwb3J0IHNob3VsZCB1c2UuCiAqLwpmdW5jdGlvbiBhcHBseU5vUHJveHlPcHRpb24odHJhbnNwb3J0VXJsU2VnbWVudHMsIHByb3h5KSB7CiAgY29uc3QgeyBub19wcm94eSB9ID0gcHJvY2Vzcy5lbnY7CgogIGNvbnN0IHVybElzRXhlbXB0RnJvbVByb3h5ID0KICAgIG5vX3Byb3h5ICYmCiAgICBub19wcm94eQogICAgICAuc3BsaXQoJywnKQogICAgICAuc29tZSgKICAgICAgICBleGVtcHRpb24gPT4gdHJhbnNwb3J0VXJsU2VnbWVudHMuaG9zdC5lbmRzV2l0aChleGVtcHRpb24pIHx8IHRyYW5zcG9ydFVybFNlZ21lbnRzLmhvc3RuYW1lLmVuZHNXaXRoKGV4ZW1wdGlvbiksCiAgICAgICk7CgogIGlmICh1cmxJc0V4ZW1wdEZyb21Qcm94eSkgewogICAgcmV0dXJuIHVuZGVmaW5lZDsKICB9IGVsc2UgewogICAgcmV0dXJuIHByb3h5OwogIH0KfQoKLyoqCiAqIENyZWF0ZXMgYSBSZXF1ZXN0RXhlY3V0b3IgdG8gYmUgdXNlZCB3aXRoIGBjcmVhdGVUcmFuc3BvcnRgLgogKi8KZnVuY3Rpb24gY3JlYXRlUmVxdWVzdEV4ZWN1dG9yKAogIG9wdGlvbnMsCiAgaHR0cE1vZHVsZSwKICBhZ2VudCwKKSB7CiAgY29uc3QgeyBob3N0bmFtZSwgcGF0aG5hbWUsIHBvcnQsIHByb3RvY29sLCBzZWFyY2ggfSA9IG5ldyBVUkwob3B0aW9ucy51cmwpOwogIHJldHVybiBmdW5jdGlvbiBtYWtlUmVxdWVzdChyZXF1ZXN0KSB7CiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gewogICAgICBsZXQgYm9keSA9IHN0cmVhbUZyb21Cb2R5KHJlcXVlc3QuYm9keSk7CgogICAgICBjb25zdCBoZWFkZXJzID0geyAuLi5vcHRpb25zLmhlYWRlcnMgfTsKCiAgICAgIGlmIChyZXF1ZXN0LmJvZHkubGVuZ3RoID4gR1pJUF9USFJFU0hPTEQpIHsKICAgICAgICBoZWFkZXJzWydjb250ZW50LWVuY29kaW5nJ10gPSAnZ3ppcCc7CiAgICAgICAgYm9keSA9IGJvZHkucGlwZShjcmVhdGVHemlwKCkpOwogICAgICB9CgogICAgICBjb25zdCByZXEgPSBodHRwTW9kdWxlLnJlcXVlc3QoCiAgICAgICAgewogICAgICAgICAgbWV0aG9kOiAnUE9TVCcsCiAgICAgICAgICBhZ2VudCwKICAgICAgICAgIGhlYWRlcnMsCiAgICAgICAgICBob3N0bmFtZSwKICAgICAgICAgIHBhdGg6IGAke3BhdGhuYW1lfSR7c2VhcmNofWAsCiAgICAgICAgICBwb3J0LAogICAgICAgICAgcHJvdG9jb2wsCiAgICAgICAgICBjYTogb3B0aW9ucy5jYUNlcnRzLAogICAgICAgIH0sCiAgICAgICAgcmVzID0+IHsKICAgICAgICAgIHJlcy5vbignZGF0YScsICgpID0+IHsKICAgICAgICAgICAgLy8gRHJhaW4gc29ja2V0CiAgICAgICAgICB9KTsKCiAgICAgICAgICByZXMub24oJ2VuZCcsICgpID0+IHsKICAgICAgICAgICAgLy8gRHJhaW4gc29ja2V0CiAgICAgICAgICB9KTsKCiAgICAgICAgICByZXMuc2V0RW5jb2RpbmcoJ3V0ZjgnKTsKCiAgICAgICAgICAvLyAiS2V5LXZhbHVlIHBhaXJzIG9mIGhlYWRlciBuYW1lcyBhbmQgdmFsdWVzLiBIZWFkZXIgbmFtZXMgYXJlIGxvd2VyLWNhc2VkLiIKICAgICAgICAgIC8vIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzCiAgICAgICAgICBjb25zdCByZXRyeUFmdGVySGVhZGVyID0gX251bGxpc2hDb2FsZXNjZShyZXMuaGVhZGVyc1sncmV0cnktYWZ0ZXInXSwgKCkgPT4gKCBudWxsKSk7CiAgICAgICAgICBjb25zdCByYXRlTGltaXRzSGVhZGVyID0gX251bGxpc2hDb2FsZXNjZShyZXMuaGVhZGVyc1sneC1zZW50cnktcmF0ZS1saW1pdHMnXSwgKCkgPT4gKCBudWxsKSk7CgogICAgICAgICAgcmVzb2x2ZSh7CiAgICAgICAgICAgIHN0YXR1c0NvZGU6IHJlcy5zdGF0dXNDb2RlLAogICAgICAgICAgICBoZWFkZXJzOiB7CiAgICAgICAgICAgICAgJ3JldHJ5LWFmdGVyJzogcmV0cnlBZnRlckhlYWRlciwKICAgICAgICAgICAgICAneC1zZW50cnktcmF0ZS1saW1pdHMnOiBBcnJheS5pc0FycmF5KHJhdGVMaW1pdHNIZWFkZXIpID8gcmF0ZUxpbWl0c0hlYWRlclswXSA6IHJhdGVMaW1pdHNIZWFkZXIsCiAgICAgICAgICAgIH0sCiAgICAgICAgICB9KTsKICAgICAgICB9LAogICAgICApOwoKICAgICAgcmVxLm9uKCdlcnJvcicsIHJlamVjdCk7CiAgICAgIGJvZHkucGlwZShyZXEpOwogICAgfSk7CiAgfTsKfQoKZnVuY3Rpb24gX29wdGlvbmFsQ2hhaW4ob3BzKSB7IGxldCBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyBsZXQgdmFsdWUgPSBvcHNbMF07IGxldCBpID0gMTsgd2hpbGUgKGkgPCBvcHMubGVuZ3RoKSB7IGNvbnN0IG9wID0gb3BzW2ldOyBjb25zdCBmbiA9IG9wc1tpICsgMV07IGkgKz0gMjsgaWYgKChvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpICYmIHZhbHVlID09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBpZiAob3AgPT09ICdhY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnKSB7IGxhc3RBY2Nlc3NMSFMgPSB2YWx1ZTsgdmFsdWUgPSBmbih2YWx1ZSk7IH0gZWxzZSBpZiAob3AgPT09ICdjYWxsJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpIHsgdmFsdWUgPSBmbigoLi4uYXJncykgPT4gdmFsdWUuY2FsbChsYXN0QWNjZXNzTEhTLCAuLi5hcmdzKSk7IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IH0gfSByZXR1cm4gdmFsdWU7IH0KY29uc3Qgb3B0aW9ucyA9IHdvcmtlckRhdGE7CmxldCBzZXNzaW9uOwpsZXQgaGFzU2VudEFuckV2ZW50ID0gZmFsc2U7CgpmdW5jdGlvbiBsb2cobXNnKSB7CiAgaWYgKG9wdGlvbnMuZGVidWcpIHsKICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlCiAgICBjb25zb2xlLmxvZyhgW0FOUiBXb3JrZXJdICR7bXNnfWApOwogIH0KfQoKY29uc3QgdXJsID0gZ2V0RW52ZWxvcGVFbmRwb2ludFdpdGhVcmxFbmNvZGVkQXV0aChvcHRpb25zLmRzbik7CmNvbnN0IHRyYW5zcG9ydCA9IG1ha2VOb2RlVHJhbnNwb3J0KHsKICB1cmwsCiAgcmVjb3JkRHJvcHBlZEV2ZW50OiAoKSA9PiB7CiAgICAvLwogIH0sCn0pOwoKYXN5bmMgZnVuY3Rpb24gc2VuZEFibm9ybWFsU2Vzc2lvbigpIHsKICAvLyBvZiB3ZSBoYXZlIGFuIGV4aXN0aW5nIHNlc3Npb24gcGFzc2VkIGZyb20gdGhlIG1haW4gdGhyZWFkLCBzZW5kIGl0IGFzIGFibm9ybWFsCiAgaWYgKHNlc3Npb24pIHsKICAgIGxvZygnU2VuZGluZyBhYm5vcm1hbCBzZXNzaW9uJyk7CiAgICB1cGRhdGVTZXNzaW9uKHNlc3Npb24sIHsgc3RhdHVzOiAnYWJub3JtYWwnLCBhYm5vcm1hbF9tZWNoYW5pc206ICdhbnJfZm9yZWdyb3VuZCcgfSk7CgogICAgY29uc3QgZW52ZWxvcGUgPSBjcmVhdGVTZXNzaW9uRW52ZWxvcGUoc2Vzc2lvbiwgb3B0aW9ucy5kc24sIG9wdGlvbnMuc2RrTWV0YWRhdGEpOwogICAgLy8gTG9nIHRoZSBlbnZlbG9wZSBzbyB0byBhaWQgaW4gdGVzdGluZwogICAgbG9nKEpTT04uc3RyaW5naWZ5KGVudmVsb3BlKSk7CgogICAgYXdhaXQgdHJhbnNwb3J0LnNlbmQoZW52ZWxvcGUpOwoKICAgIHRyeSB7CiAgICAgIC8vIE5vdGlmeSB0aGUgbWFpbiBwcm9jZXNzIHRoYXQgdGhlIHNlc3Npb24gaGFzIGVuZGVkIHNvIHRoZSBzZXNzaW9uIGNhbiBiZSBjbGVhcmVkIGZyb20gdGhlIHNjb3BlCiAgICAgIF9vcHRpb25hbENoYWluKFtwYXJlbnRQb3J0LCAnb3B0aW9uYWxBY2Nlc3MnLCBfMiA9PiBfMi5wb3N0TWVzc2FnZSwgJ2NhbGwnLCBfMyA9PiBfMygnc2Vzc2lvbi1lbmRlZCcpXSk7CiAgICB9IGNhdGNoIChfKSB7CiAgICAgIC8vIGlnbm9yZQogICAgfQogIH0KfQoKbG9nKCdTdGFydGVkJyk7CgpmdW5jdGlvbiBwcmVwYXJlU3RhY2tGcmFtZXMoc3RhY2tGcmFtZXMpIHsKICBpZiAoIXN0YWNrRnJhbWVzKSB7CiAgICByZXR1cm4gdW5kZWZpbmVkOwogIH0KCiAgLy8gU3RyaXAgU2VudHJ5IGZyYW1lcyBhbmQgcmV2ZXJzZSB0aGUgc3RhY2sgZnJhbWVzIHNvIHRoZXkgYXJlIGluIHRoZSBjb3JyZWN0IG9yZGVyCiAgY29uc3Qgc3RyaXBwZWRGcmFtZXMgPSBzdHJpcFNlbnRyeUZyYW1lc0FuZFJldmVyc2Uoc3RhY2tGcmFtZXMpOwoKICAvLyBJZiB3ZSBoYXZlIGFuIGFwcCByb290IHBhdGgsIHJld3JpdGUgdGhlIGZpbGVuYW1lcyB0byBiZSByZWxhdGl2ZSB0byB0aGUgYXBwIHJvb3QKICBpZiAob3B0aW9ucy5hcHBSb290UGF0aCkgewogICAgZm9yIChjb25zdCBmcmFtZSBvZiBzdHJpcHBlZEZyYW1lcykgewogICAgICBpZiAoIWZyYW1lLmZpbGVuYW1lKSB7CiAgICAgICAgY29udGludWU7CiAgICAgIH0KCiAgICAgIGZyYW1lLmZpbGVuYW1lID0gbm9ybWFsaXplVXJsVG9CYXNlKGZyYW1lLmZpbGVuYW1lLCBvcHRpb25zLmFwcFJvb3RQYXRoKTsKICAgIH0KICB9CgogIHJldHVybiBzdHJpcHBlZEZyYW1lczsKfQoKZnVuY3Rpb24gYXBwbHlTY29wZVRvRXZlbnQoZXZlbnQsIHNjb3BlKSB7CiAgYXBwbHlTY29wZURhdGFUb0V2ZW50KGV2ZW50LCBzY29wZSk7CgogIGlmICghX29wdGlvbmFsQ2hhaW4oW2V2ZW50LCAnYWNjZXNzJywgXzQgPT4gXzQuY29udGV4dHMsICdvcHRpb25hbEFjY2VzcycsIF81ID0+IF81LnRyYWNlXSkpIHsKICAgIGNvbnN0IHsgdHJhY2VJZCwgc3BhbklkLCBwYXJlbnRTcGFuSWQgfSA9IHNjb3BlLnByb3BhZ2F0aW9uQ29udGV4dDsKICAgIGV2ZW50LmNvbnRleHRzID0gewogICAgICB0cmFjZTogewogICAgICAgIHRyYWNlX2lkOiB0cmFjZUlkLAogICAgICAgIHNwYW5faWQ6IHNwYW5JZCwKICAgICAgICBwYXJlbnRfc3Bhbl9pZDogcGFyZW50U3BhbklkLAogICAgICB9LAogICAgICAuLi5ldmVudC5jb250ZXh0cywKICAgIH07CiAgfQp9Cgphc3luYyBmdW5jdGlvbiBzZW5kQW5yRXZlbnQoZnJhbWVzLCBzY29wZSkgewogIGlmIChoYXNTZW50QW5yRXZlbnQpIHsKICAgIHJldHVybjsKICB9CgogIGhhc1NlbnRBbnJFdmVudCA9IHRydWU7CgogIGF3YWl0IHNlbmRBYm5vcm1hbFNlc3Npb24oKTsKCiAgbG9nKCdTZW5kaW5nIGV2ZW50Jyk7CgogIGNvbnN0IGV2ZW50ID0gewogICAgZXZlbnRfaWQ6IHV1aWQ0KCksCiAgICBjb250ZXh0czogb3B0aW9ucy5jb250ZXh0cywKICAgIHJlbGVhc2U6IG9wdGlvbnMucmVsZWFzZSwKICAgIGVudmlyb25tZW50OiBvcHRpb25zLmVudmlyb25tZW50LAogICAgZGlzdDogb3B0aW9ucy5kaXN0LAogICAgcGxhdGZvcm06ICdub2RlJywKICAgIGxldmVsOiAnZXJyb3InLAogICAgZXhjZXB0aW9uOiB7CiAgICAgIHZhbHVlczogWwogICAgICAgIHsKICAgICAgICAgIHR5cGU6ICdBcHBsaWNhdGlvbk5vdFJlc3BvbmRpbmcnLAogICAgICAgICAgdmFsdWU6IGBBcHBsaWNhdGlvbiBOb3QgUmVzcG9uZGluZyBmb3IgYXQgbGVhc3QgJHtvcHRpb25zLmFuclRocmVzaG9sZH0gbXNgLAogICAgICAgICAgc3RhY2t0cmFjZTogeyBmcmFtZXM6IHByZXBhcmVTdGFja0ZyYW1lcyhmcmFtZXMpIH0sCiAgICAgICAgICAvLyBUaGlzIGVuc3VyZXMgdGhlIFVJIGRvZXNuJ3Qgc2F5ICdDcmFzaGVkIGluJyBmb3IgdGhlIHN0YWNrIHRyYWNlCiAgICAgICAgICBtZWNoYW5pc206IHsgdHlwZTogJ0FOUicgfSwKICAgICAgICB9LAogICAgICBdLAogICAgfSwKICAgIHRhZ3M6IG9wdGlvbnMuc3RhdGljVGFncywKICB9OwoKICBpZiAoc2NvcGUpIHsKICAgIGFwcGx5U2NvcGVUb0V2ZW50KGV2ZW50LCBzY29wZSk7CiAgfQoKICBjb25zdCBlbnZlbG9wZSA9IGNyZWF0ZUV2ZW50RW52ZWxvcGUoZXZlbnQsIG9wdGlvbnMuZHNuLCBvcHRpb25zLnNka01ldGFkYXRhKTsKICAvLyBMb2cgdGhlIGVudmVsb3BlIHRvIGFpZCBpbiB0ZXN0aW5nCiAgbG9nKEpTT04uc3RyaW5naWZ5KGVudmVsb3BlKSk7CgogIGF3YWl0IHRyYW5zcG9ydC5zZW5kKGVudmVsb3BlKTsKICBhd2FpdCB0cmFuc3BvcnQuZmx1c2goMjAwMCk7CgogIC8vIERlbGF5IGZvciA1IHNlY29uZHMgc28gdGhhdCBzdGRpbyBjYW4gZmx1c2ggaW4gdGhlIG1haW4gZXZlbnQgbG9vcCBldmVyIHJlc3RhcnRzLgogIC8vIFRoaXMgaXMgbWFpbmx5IGZvciB0aGUgYmVuZWZpdCBvZiBsb2dnaW5nL2RlYnVnZ2luZyBpc3N1ZXMuCiAgc2V0VGltZW91dCgoKSA9PiB7CiAgICBwcm9jZXNzLmV4aXQoMCk7CiAgfSwgNTAwMCk7Cn0KCmxldCBkZWJ1Z2dlclBhdXNlOwoKaWYgKG9wdGlvbnMuY2FwdHVyZVN0YWNrVHJhY2UpIHsKICBsb2coJ0Nvbm5lY3RpbmcgdG8gZGVidWdnZXInKTsKCiAgY29uc3Qgc2Vzc2lvbiA9IG5ldyBTZXNzaW9uKCkgOwogIHNlc3Npb24uY29ubmVjdFRvTWFpblRocmVhZCgpOwoKICBsb2coJ0Nvbm5lY3RlZCB0byBkZWJ1Z2dlcicpOwoKICAvLyBDb2xsZWN0IHNjcmlwdElkIC0+IHVybCBtYXAgc28gd2UgY2FuIGxvb2sgdXAgdGhlIGZpbGVuYW1lcyBsYXRlcgogIGNvbnN0IHNjcmlwdHMgPSBuZXcgTWFwKCk7CgogIHNlc3Npb24ub24oJ0RlYnVnZ2VyLnNjcmlwdFBhcnNlZCcsIGV2ZW50ID0+IHsKICAgIHNjcmlwdHMuc2V0KGV2ZW50LnBhcmFtcy5zY3JpcHRJZCwgZXZlbnQucGFyYW1zLnVybCk7CiAgfSk7CgogIHNlc3Npb24ub24oJ0RlYnVnZ2VyLnBhdXNlZCcsIGV2ZW50ID0+IHsKICAgIGlmIChldmVudC5wYXJhbXMucmVhc29uICE9PSAnb3RoZXInKSB7CiAgICAgIHJldHVybjsKICAgIH0KCiAgICB0cnkgewogICAgICBsb2coJ0RlYnVnZ2VyIHBhdXNlZCcpOwoKICAgICAgLy8gY29weSB0aGUgZnJhbWVzCiAgICAgIGNvbnN0IGNhbGxGcmFtZXMgPSBbLi4uZXZlbnQucGFyYW1zLmNhbGxGcmFtZXNdOwoKICAgICAgY29uc3QgZ2V0TW9kdWxlTmFtZSA9IG9wdGlvbnMuYXBwUm9vdFBhdGggPyBjcmVhdGVHZXRNb2R1bGVGcm9tRmlsZW5hbWUob3B0aW9ucy5hcHBSb290UGF0aCkgOiAoKSA9PiB1bmRlZmluZWQ7CiAgICAgIGNvbnN0IHN0YWNrRnJhbWVzID0gY2FsbEZyYW1lcy5tYXAoZnJhbWUgPT4KICAgICAgICBjYWxsRnJhbWVUb1N0YWNrRnJhbWUoZnJhbWUsIHNjcmlwdHMuZ2V0KGZyYW1lLmxvY2F0aW9uLnNjcmlwdElkKSwgZ2V0TW9kdWxlTmFtZSksCiAgICAgICk7CgogICAgICAvLyBFdmFsdWF0ZSBhIHNjcmlwdCBpbiB0aGUgY3VycmVudGx5IHBhdXNlZCBjb250ZXh0CiAgICAgIHNlc3Npb24ucG9zdCgKICAgICAgICAnUnVudGltZS5ldmFsdWF0ZScsCiAgICAgICAgewogICAgICAgICAgLy8gR3JhYiB0aGUgdHJhY2UgY29udGV4dCBmcm9tIHRoZSBjdXJyZW50IHNjb3BlCiAgICAgICAgICBleHByZXNzaW9uOiAnZ2xvYmFsLl9fU0VOVFJZX0dFVF9TQ09QRVNfXygpOycsCiAgICAgICAgICAvLyBEb24ndCByZS10cmlnZ2VyIHRoZSBkZWJ1Z2dlciBpZiB0aGlzIGNhdXNlcyBhbiBlcnJvcgogICAgICAgICAgc2lsZW50OiB0cnVlLAogICAgICAgICAgLy8gU2VyaWFsaXplIHRoZSByZXN1bHQgdG8ganNvbiBvdGhlcndpc2Ugb25seSBwcmltaXRpdmVzIGFyZSBzdXBwb3J0ZWQKICAgICAgICAgIHJldHVybkJ5VmFsdWU6IHRydWUsCiAgICAgICAgfSwKICAgICAgICAoZXJyLCBwYXJhbSkgPT4gewogICAgICAgICAgaWYgKGVycikgewogICAgICAgICAgICBsb2coYEVycm9yIGV4ZWN1dGluZyBzY3JpcHQ6ICcke2Vyci5tZXNzYWdlfSdgKTsKICAgICAgICAgIH0KCiAgICAgICAgICBjb25zdCBzY29wZXMgPSBwYXJhbSAmJiBwYXJhbS5yZXN1bHQgPyAocGFyYW0ucmVzdWx0LnZhbHVlICkgOiB1bmRlZmluZWQ7CgogICAgICAgICAgc2Vzc2lvbi5wb3N0KCdEZWJ1Z2dlci5yZXN1bWUnKTsKICAgICAgICAgIHNlc3Npb24ucG9zdCgnRGVidWdnZXIuZGlzYWJsZScpOwoKICAgICAgICAgIHNlbmRBbnJFdmVudChzdGFja0ZyYW1lcywgc2NvcGVzKS50aGVuKG51bGwsICgpID0+IHsKICAgICAgICAgICAgbG9nKCdTZW5kaW5nIEFOUiBldmVudCBmYWlsZWQuJyk7CiAgICAgICAgICB9KTsKICAgICAgICB9LAogICAgICApOwogICAgfSBjYXRjaCAoZSkgewogICAgICBzZXNzaW9uLnBvc3QoJ0RlYnVnZ2VyLnJlc3VtZScpOwogICAgICBzZXNzaW9uLnBvc3QoJ0RlYnVnZ2VyLmRpc2FibGUnKTsKICAgICAgdGhyb3cgZTsKICAgIH0KICB9KTsKCiAgZGVidWdnZXJQYXVzZSA9ICgpID0+IHsKICAgIHRyeSB7CiAgICAgIHNlc3Npb24ucG9zdCgnRGVidWdnZXIuZW5hYmxlJywgKCkgPT4gewogICAgICAgIHNlc3Npb24ucG9zdCgnRGVidWdnZXIucGF1c2UnKTsKICAgICAgfSk7CiAgICB9IGNhdGNoIChfKSB7CiAgICAgIC8vCiAgICB9CiAgfTsKfQoKZnVuY3Rpb24gY3JlYXRlSHJUaW1lcigpIHsKICAvLyBUT0RPICh2OCk6IFdlIGNhbiB1c2UgcHJvY2Vzcy5ocnRpbWUuYmlnaW50KCkgYWZ0ZXIgd2UgZHJvcCBub2RlIHY4CiAgbGV0IGxhc3RQb2xsID0gcHJvY2Vzcy5ocnRpbWUoKTsKCiAgcmV0dXJuIHsKICAgIGdldFRpbWVNczogKCkgPT4gewogICAgICBjb25zdCBbc2Vjb25kcywgbmFub1NlY29uZHNdID0gcHJvY2Vzcy5ocnRpbWUobGFzdFBvbGwpOwogICAgICByZXR1cm4gTWF0aC5mbG9vcihzZWNvbmRzICogMWUzICsgbmFub1NlY29uZHMgLyAxZTYpOwogICAgfSwKICAgIHJlc2V0OiAoKSA9PiB7CiAgICAgIGxhc3RQb2xsID0gcHJvY2Vzcy5ocnRpbWUoKTsKICAgIH0sCiAgfTsKfQoKZnVuY3Rpb24gd2F0Y2hkb2dUaW1lb3V0KCkgewogIGxvZygnV2F0Y2hkb2cgdGltZW91dCcpOwoKICBpZiAoZGVidWdnZXJQYXVzZSkgewogICAgbG9nKCdQYXVzaW5nIGRlYnVnZ2VyIHRvIGNhcHR1cmUgc3RhY2sgdHJhY2UnKTsKICAgIGRlYnVnZ2VyUGF1c2UoKTsKICB9IGVsc2UgewogICAgbG9nKCdDYXB0dXJpbmcgZXZlbnQgd2l0aG91dCBhIHN0YWNrIHRyYWNlJyk7CiAgICBzZW5kQW5yRXZlbnQoKS50aGVuKG51bGwsICgpID0+IHsKICAgICAgbG9nKCdTZW5kaW5nIEFOUiBldmVudCBmYWlsZWQgb24gd2F0Y2hkb2cgdGltZW91dC4nKTsKICAgIH0pOwogIH0KfQoKY29uc3QgeyBwb2xsIH0gPSB3YXRjaGRvZ1RpbWVyKGNyZWF0ZUhyVGltZXIsIG9wdGlvbnMucG9sbEludGVydmFsLCBvcHRpb25zLmFuclRocmVzaG9sZCwgd2F0Y2hkb2dUaW1lb3V0KTsKCl9vcHRpb25hbENoYWluKFtwYXJlbnRQb3J0LCAnb3B0aW9uYWxBY2Nlc3MnLCBfNiA9PiBfNi5vbiwgJ2NhbGwnLCBfNyA9PiBfNygnbWVzc2FnZScsIChtc2cpID0+IHsKICBpZiAobXNnLnNlc3Npb24pIHsKICAgIHNlc3Npb24gPSBtYWtlU2Vzc2lvbihtc2cuc2Vzc2lvbik7CiAgfQoKICBwb2xsKCk7Cn0pXSk7"
})
// @from(Start 547454, End 551059)
rm = Y((CL1, WL1) => {
  var {
    _optionalChain: u14,
    _optionalChainDelete: dL1
  } = V0();
  Object.defineProperty(CL1, "__esModule", {
    value: !0
  });
  var T14 = B1("url"),
    $A = V4(),
    nm = V0(),
    $01 = UF(),
    O14 = IL1(),
    m14 = 50,
    l14 = 5000;

  function u01(I, ...d) {
    nm.logger.log(`[ANR] ${I}`, ...d)
  }

  function b14() {
    return nm.GLOBAL_OBJ
  }

  function h14() {
    let I = $A.getGlobalScope().getScopeData();
    return $A.mergeScopeData(I, $A.getIsolationScope().getScopeData()), $A.mergeScopeData(I, $A.getCurrentScope().getScopeData()), I.attachments = [], I.eventProcessors = [], I
  }

  function j14() {
    return nm.dynamicRequire(WL1, "worker_threads")
  }
  async function k14(I) {
    let d = {
        message: "ANR"
      },
      G = {};
    for (let Z of I.getEventProcessors()) {
      if (d === null) break;
      d = await Z(d, G)
    }
    return u14([d, "optionalAccess", (Z) => Z.contexts]) || {}
  }
  var GL1 = "Anr",
    x14 = (I = {}) => {
      if ($01.NODE_VERSION.major < 16 || $01.NODE_VERSION.major === 16 && $01.NODE_VERSION.minor < 17) throw new Error("ANR detection requires Node 16.17.0 or later");
      let d, G, Z = b14();
      return Z.__SENTRY_GET_SCOPES__ = h14, {
        name: GL1,
        setupOnce() {},
        startWorker: () => {
          if (d) return;
          if (G) d = p14(G, I)
        },
        stopWorker: () => {
          if (d) d.then((C) => {
            C(), d = void 0
          })
        },
        setup(C) {
          G = C, setImmediate(() => this.startWorker())
        }
      }
    },
    ZL1 = $A.defineIntegration(x14),
    c14 = $A.convertIntegrationFnToClass(GL1, ZL1);
  async function p14(I, d) {
    let G = I.getDsn();
    if (!G) return () => {};
    let Z = await k14(I);
    dL1([Z, "access", (X) => X.app, "optionalAccess", (X) => delete X.app_memory]), dL1([Z, "access", (X) => X.device, "optionalAccess", (X) => delete X.free_memory]);
    let C = I.getOptions(),
      W = I.getSdkMetadata() || {};
    if (W.sdk) W.sdk.integrations = C.integrations.map((X) => X.name);
    let w = {
      debug: nm.logger.isEnabled(),
      dsn: G,
      environment: C.environment || "production",
      release: C.release,
      dist: C.dist,
      sdkMetadata: W,
      appRootPath: d.appRootPath,
      pollInterval: d.pollInterval || m14,
      anrThreshold: d.anrThreshold || l14,
      captureStackTrace: !!d.captureStackTrace,
      staticTags: d.staticTags || {},
      contexts: Z
    };
    if (w.captureStackTrace) {
      let X = B1("inspector");
      if (!X.url()) X.open(0)
    }
    let {
      Worker: B
    } = j14(), A = new B(new T14.URL(`data:application/javascript;base64,${O14.base64WorkerScript}`), {
      workerData: w
    });
    process.on("exit", () => {
      A.terminate()
    });
    let V = setInterval(() => {
      try {
        let X = $A.getCurrentScope().getSession(),
          _ = X ? {
            ...X,
            toJSON: void 0
          } : void 0;
        A.postMessage({
          session: _
        })
      } catch (X) {}
    }, w.pollInterval);
    return V.unref(), A.on("message", (X) => {
      if (X === "session-ended") u01("ANR event sent from ANR worker. Clearing session in this thread."), $A.getCurrentScope().setSession(void 0)
    }), A.once("error", (X) => {
      clearInterval(V), u01("ANR worker error", X)
    }), A.once("exit", (X) => {
      clearInterval(V), u01("ANR worker exit", X)
    }), A.unref(), () => {
      A.terminate(), clearInterval(V)
    }
  }
  CL1.Anr = c14;
  CL1.anrIntegration = ZL1
})
// @from(Start 551065, End 551324)
BL1 = Y((wL1) => {
  Object.defineProperty(wL1, "__esModule", {
    value: !0
  });
  var r14 = V4(),
    a14 = rm();

  function s14(I) {
    let d = r14.getClient();
    return new a14.Anr(I).setup(d), Promise.resolve()
  }
  wL1.enableAnrDetection = s14
})
// @from(Start 551330, End 552985)
T01 = Y((XL1) => {
  var {
    _optionalChain: AL1
  } = V0();
  Object.defineProperty(XL1, "__esModule", {
    value: !0
  });
  var PN = V4(),
    VL1 = V0();

  function e14(I = {}) {
    return function({
      path: d,
      type: G,
      next: Z,
      rawInput: C
    }) {
      let W = AL1([PN.getClient, "call", (V) => V(), "optionalAccess", (V) => V.getOptions, "call", (V) => V()]),
        w = PN.getCurrentScope().getTransaction();
      if (w) {
        w.updateName(`trpc/${d}`), w.setAttribute(PN.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "route"), w.op = "rpc.server";
        let V = {
          procedure_type: G
        };
        if (I.attachRpcInput !== void 0 ? I.attachRpcInput : AL1([W, "optionalAccess", (X) => X.sendDefaultPii])) V.input = VL1.normalize(C);
        w.setContext("trpc", V)
      }

      function B(V) {
        if (!V.ok) PN.captureException(V.error, {
          mechanism: {
            handled: !1,
            data: {
              function: "trpcMiddleware"
            }
          }
        })
      }
      let A;
      try {
        A = Z()
      } catch (V) {
        throw PN.captureException(V, {
          mechanism: {
            handled: !1,
            data: {
              function: "trpcMiddleware"
            }
          }
        }), V
      }
      if (VL1.isThenable(A)) Promise.resolve(A).then((V) => {
        B(V)
      }, (V) => {
        PN.captureException(V, {
          mechanism: {
            handled: !1,
            data: {
              function: "trpcMiddleware"
            }
          }
        })
      });
      else B(A);
      return A
    }
  }
  XL1.trpcMiddleware = e14
})
// @from(Start 552991, End 553348)
DL1 = Y((_L1) => {
  Object.defineProperty(_L1, "__esModule", {
    value: !0
  });
  var YL1 = V0();

  function I04(I, d) {
    return YL1.extractRequestData(I, {
      include: d
    })
  }

  function d04(I, d, G = {}) {
    return YL1.addRequestDataToEvent(I, d, {
      include: G
    })
  }
  _L1.extractRequestData = I04;
  _L1.parseRequest = d04
})
// @from(Start 553354, End 557895)
gL1 = Y((FL1) => {
  var {
    _optionalChain: am
  } = V0();
  Object.defineProperty(FL1, "__esModule", {
    value: !0
  });
  var w8 = V4(),
    $N = V0(),
    C04 = AE(),
    sm = y01(),
    W04 = T01(),
    HL1 = DL1();

  function w04() {
    return function I(d, G, Z) {
      let C = am([w8.getClient, "call", (X) => X(), "optionalAccess", (X) => X.getOptions, "call", (X) => X()]);
      if (!C || C.instrumenter !== "sentry" || am([d, "access", (X) => X.method, "optionalAccess", (X) => X.toUpperCase, "call", (X) => X()]) === "OPTIONS" || am([d, "access", (X) => X.method, "optionalAccess", (X) => X.toUpperCase, "call", (X) => X()]) === "HEAD") return Z();
      let W = d.headers && $N.isString(d.headers["sentry-trace"]) ? d.headers["sentry-trace"] : void 0,
        w = am([d, "access", (X) => X.headers, "optionalAccess", (X) => X.baggage]);
      if (!w8.hasTracingEnabled(C)) return Z();
      let [B, A] = $N.extractPathForTransaction(d, {
        path: !0,
        method: !0
      }), V = w8.continueTrace({
        sentryTrace: W,
        baggage: w
      }, (X) => w8.startTransaction({
        name: B,
        op: "http.server",
        origin: "auto.http.node.tracingHandler",
        ...X,
        data: {
          [w8.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: A
        },
        metadata: {
          ...X.metadata,
          request: d
        }
      }, {
        request: $N.extractRequestData(d)
      }));
      w8.getCurrentScope().setSpan(V), G.__sentry_transaction = V, G.once("finish", () => {
        setImmediate(() => {
          $N.addRequestDataToTransaction(V, d), w8.setHttpStatus(V, G.statusCode), V.end()
        })
      }), Z()
    }
  }

  function B04(I = {}) {
    let d;
    if ("include" in I) d = {
      include: I.include
    };
    else {
      let {
        ip: G,
        request: Z,
        transaction: C,
        user: W
      } = I;
      if (G || Z || C || W) d = {
        include: $N.dropUndefinedKeys({
          ip: G,
          request: Z,
          transaction: C,
          user: W
        })
      }
    }
    return d
  }

  function A04(I) {
    let d = B04(I),
      G = w8.getClient();
    if (G && sm.isAutoSessionTrackingEnabled(G)) {
      G.initSessionFlusher();
      let Z = w8.getCurrentScope();
      if (Z.getSession()) Z.setSession()
    }
    return function Z(C, W, w) {
      if (I && I.flushTimeout && I.flushTimeout > 0) {
        let B = W.end;
        W.end = function(A, V, X) {
          w8.flush(I.flushTimeout).then(() => {
            B.call(this, A, V, X)
          }).then(null, (_) => {
            C04.DEBUG_BUILD && $N.logger.error(_), B.call(this, A, V, X)
          })
        }
      }
      w8.runWithAsyncContext(() => {
        let B = w8.getCurrentScope();
        B.setSDKProcessingMetadata({
          request: C,
          requestDataOptionsFromExpressHandler: d
        });
        let A = w8.getClient();
        if (sm.isAutoSessionTrackingEnabled(A)) B.setRequestSession({
          status: "ok"
        });
        W.once("finish", () => {
          let V = w8.getClient();
          if (sm.isAutoSessionTrackingEnabled(V)) setImmediate(() => {
            if (V && V._captureRequestSession) V._captureRequestSession()
          })
        }), w()
      })
    }
  }

  function V04(I) {
    let d = I.status || I.statusCode || I.status_code || I.output && I.output.statusCode;
    return d ? parseInt(d, 10) : 500
  }

  function X04(I) {
    return V04(I) >= 500
  }

  function Y04(I) {
    return function d(G, Z, C, W) {
      if ((I && I.shouldHandleError || X04)(G)) {
        w8.withScope((B) => {
          B.setSDKProcessingMetadata({
            request: Z
          });
          let A = C.__sentry_transaction;
          if (A && !w8.getActiveSpan()) B.setSpan(A);
          let V = w8.getClient();
          if (V && sm.isAutoSessionTrackingEnabled(V)) {
            if (V._sessionFlusher !== void 0) {
              let F = B.getRequestSession();
              if (F && F.status !== void 0) F.status = "crashed"
            }
          }
          let X = w8.captureException(G, {
            mechanism: {
              type: "middleware",
              handled: !1
            }
          });
          C.sentry = X, W(G)
        });
        return
      }
      W(G)
    }
  }
  var _04 = W04.trpcMiddleware;
  FL1.extractRequestData = HL1.extractRequestData;
  FL1.parseRequest = HL1.parseRequest;
  FL1.errorHandler = Y04;
  FL1.requestHandler = A04;
  FL1.tracingHandler = w04;
  FL1.trpcMiddleware = _04
})
// @from(Start 557901, End 560568)
O01 = Y((qL1) => {
  Object.defineProperty(qL1, "__esModule", {
    value: !0
  });
  var rI = V4(),
    KL1 = V0();

  function JL1(I) {
    return I && I.statusCode !== void 0
  }

  function N04(I) {
    return I && I.error !== void 0
  }

  function z04(I) {
    rI.captureException(I, {
      mechanism: {
        type: "hapi",
        handled: !1,
        data: {
          function: "hapiErrorPlugin"
        }
      }
    })
  }
  var NL1 = {
      name: "SentryHapiErrorPlugin",
      version: rI.SDK_VERSION,
      register: async function(I) {
        I.events.on("request", (G, Z) => {
          let C = rI.getActiveTransaction();
          if (N04(Z)) z04(Z.error);
          if (C) C.setStatus("internal_error"), C.end()
        })
      }
    },
    zL1 = {
      name: "SentryHapiTracingPlugin",
      version: rI.SDK_VERSION,
      register: async function(I) {
        let d = I;
        d.ext("onPreHandler", (G, Z) => {
          let C = rI.continueTrace({
            sentryTrace: G.headers["sentry-trace"] || void 0,
            baggage: G.headers.baggage || void 0
          }, (W) => {
            return rI.startTransaction({
              ...W,
              op: "hapi.request",
              name: G.route.path,
              description: `${G.route.method} ${G.path}`
            })
          });
          return rI.getCurrentScope().setSpan(C), Z.continue
        }), d.ext("onPreResponse", (G, Z) => {
          let C = rI.getActiveTransaction();
          if (G.response && JL1(G.response) && C) {
            let W = G.response;
            W.header("sentry-trace", rI.spanToTraceHeader(C));
            let w = KL1.dynamicSamplingContextToSentryBaggageHeader(rI.getDynamicSamplingContextFromSpan(C));
            if (w) W.header("baggage", w)
          }
          return Z.continue
        }), d.ext("onPostHandler", (G, Z) => {
          let C = rI.getActiveTransaction();
          if (C) {
            if (G.response && JL1(G.response)) rI.setHttpStatus(C, G.response.statusCode);
            C.end()
          }
          return Z.continue
        })
      }
    },
    QL1 = "Hapi",
    Q04 = (I = {}) => {
      let d = I.server;
      return {
        name: QL1,
        setupOnce() {
          if (!d) return;
          KL1.fill(d, "start", (G) => {
            return async function() {
              return await this.register(zL1), await this.register(NL1), G.apply(this)
            }
          })
        }
      }
    },
    fL1 = rI.defineIntegration(Q04),
    f04 = rI.convertIntegrationFnToClass(QL1, fL1);
  qL1.Hapi = f04;
  qL1.hapiErrorPlugin = NL1;
  qL1.hapiIntegration = fL1;
  qL1.hapiTracingPlugin = zL1
})
// @from(Start 560574, End 561311)
UL1 = Y((RL1) => {
  Object.defineProperty(RL1, "__esModule", {
    value: !0
  });
  var E04 = Sm(),
    M04 = $m(),
    S04 = hm(),
    L04 = km(),
    y04 = mm(),
    P04 = Pm(),
    $04 = Lm(),
    u04 = V4(),
    T04 = Om(),
    O04 = pm(),
    m04 = xm(),
    l04 = rm(),
    b04 = O01();
  RL1.Console = E04.Console;
  RL1.Http = M04.Http;
  RL1.OnUncaughtException = S04.OnUncaughtException;
  RL1.OnUnhandledRejection = L04.OnUnhandledRejection;
  RL1.Modules = y04.Modules;
  RL1.ContextLines = P04.ContextLines;
  RL1.Context = $04.Context;
  RL1.RequestData = u04.RequestData;
  RL1.LocalVariables = T04.LocalVariables;
  RL1.Undici = O04.Undici;
  RL1.Spotlight = m04.Spotlight;
  RL1.Anr = l04.Anr;
  RL1.Hapi = b04.Hapi
})
// @from(Start 561317, End 561606)
EL1 = Y((vL1) => {
  Object.defineProperty(vL1, "__esModule", {
    value: !0
  });
  var yF = H01();
  vL1.Apollo = yF.Apollo;
  vL1.Express = yF.Express;
  vL1.GraphQL = yF.GraphQL;
  vL1.Mongo = yF.Mongo;
  vL1.Mysql = yF.Mysql;
  vL1.Postgres = yF.Postgres;
  vL1.Prisma = yF.Prisma
})
// @from(Start 561612, End 563120)
yL1 = Y((LL1) => {
  Object.defineProperty(LL1, "__esModule", {
    value: !0
  });
  var PF = V4(),
    $F = V0(),
    ML1 = "CaptureConsole",
    w24 = (I = {}) => {
      let d = I.levels || $F.CONSOLE_LEVELS;
      return {
        name: ML1,
        setupOnce() {},
        setup(G) {
          if (!("console" in $F.GLOBAL_OBJ)) return;
          $F.addConsoleInstrumentationHandler(({
            args: Z,
            level: C
          }) => {
            if (PF.getClient() !== G || !d.includes(C)) return;
            A24(Z, C)
          })
        }
      }
    },
    SL1 = PF.defineIntegration(w24),
    B24 = PF.convertIntegrationFnToClass(ML1, SL1);

  function A24(I, d) {
    let G = {
      level: $F.severityLevelFromString(d),
      extra: {
        arguments: I
      }
    };
    PF.withScope((Z) => {
      if (Z.addEventProcessor((w) => {
          return w.logger = "console", $F.addExceptionMechanism(w, {
            handled: !1,
            type: "console"
          }), w
        }), d === "assert" && I[0] === !1) {
        let w = `Assertion failed: ${$F.safeJoin(I.slice(1)," ")||"console.assert"}`;
        Z.setExtra("arguments", I.slice(1)), PF.captureMessage(w, G);
        return
      }
      let C = I.find((w) => w instanceof Error);
      if (d === "error" && C) {
        PF.captureException(C, G);
        return
      }
      let W = $F.safeJoin(I, " ");
      PF.captureMessage(W, G)
    })
  }
  LL1.CaptureConsole = B24;
  LL1.captureConsoleIntegration = SL1
})
// @from(Start 563126, End 564039)
OL1 = Y((TL1) => {
  Object.defineProperty(TL1, "__esModule", {
    value: !0
  });
  var PL1 = V4(),
    Y24 = V0(),
    $L1 = "Debug",
    _24 = (I = {}) => {
      let d = {
        debugger: !1,
        stringify: !1,
        ...I
      };
      return {
        name: $L1,
        setupOnce() {},
        setup(G) {
          if (!G.on) return;
          G.on("beforeSendEvent", (Z, C) => {
            if (d.debugger) debugger;
            Y24.consoleSandbox(() => {
              if (d.stringify) {
                if (console.log(JSON.stringify(Z, null, 2)), C && Object.keys(C).length) console.log(JSON.stringify(C, null, 2))
              } else if (console.log(Z), C && Object.keys(C).length) console.log(C)
            })
          })
        }
      }
    },
    uL1 = PL1.defineIntegration(_24),
    D24 = PL1.convertIntegrationFnToClass($L1, uL1);
  TL1.Debug = D24;
  TL1.debugIntegration = uL1
})
// @from(Start 564045, End 564227)
XE = Y((mL1) => {
  Object.defineProperty(mL1, "__esModule", {
    value: !0
  });
  var g24 = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
  mL1.DEBUG_BUILD = g24
})
// @from(Start 564233, End 566465)
nL1 = Y((iL1) => {
  Object.defineProperty(iL1, "__esModule", {
    value: !0
  });
  var hL1 = V4(),
    K24 = V0(),
    N24 = XE(),
    jL1 = "Dedupe",
    z24 = () => {
      let I;
      return {
        name: jL1,
        setupOnce() {},
        processEvent(d) {
          if (d.type) return d;
          try {
            if (xL1(d, I)) return N24.DEBUG_BUILD && K24.logger.warn("Event dropped due to being a duplicate of previously captured event."), null
          } catch (G) {}
          return I = d
        }
      }
    },
    kL1 = hL1.defineIntegration(z24),
    Q24 = hL1.convertIntegrationFnToClass(jL1, kL1);

  function xL1(I, d) {
    if (!d) return !1;
    if (f24(I, d)) return !0;
    if (q24(I, d)) return !0;
    return !1
  }

  function f24(I, d) {
    let G = I.message,
      Z = d.message;
    if (!G && !Z) return !1;
    if (G && !Z || !G && Z) return !1;
    if (G !== Z) return !1;
    if (!pL1(I, d)) return !1;
    if (!cL1(I, d)) return !1;
    return !0
  }

  function q24(I, d) {
    let G = lL1(d),
      Z = lL1(I);
    if (!G || !Z) return !1;
    if (G.type !== Z.type || G.value !== Z.value) return !1;
    if (!pL1(I, d)) return !1;
    if (!cL1(I, d)) return !1;
    return !0
  }

  function cL1(I, d) {
    let G = bL1(I),
      Z = bL1(d);
    if (!G && !Z) return !0;
    if (G && !Z || !G && Z) return !1;
    if (G = G, Z = Z, Z.length !== G.length) return !1;
    for (let C = 0; C < Z.length; C++) {
      let W = Z[C],
        w = G[C];
      if (W.filename !== w.filename || W.lineno !== w.lineno || W.colno !== w.colno || W.function !== w.function) return !1
    }
    return !0
  }

  function pL1(I, d) {
    let G = I.fingerprint,
      Z = d.fingerprint;
    if (!G && !Z) return !0;
    if (G && !Z || !G && Z) return !1;
    G = G, Z = Z;
    try {
      return G.join("") === Z.join("")
    } catch (C) {
      return !1
    }
  }

  function lL1(I) {
    return I.exception && I.exception.values && I.exception.values[0]
  }

  function bL1(I) {
    let d = I.exception;
    if (d) try {
      return d.values[0].stacktrace.frames
    } catch (G) {
      return
    }
    return
  }
  iL1.Dedupe = Q24;
  iL1._shouldDropEvent = xL1;
  iL1.dedupeIntegration = kL1
})
// @from(Start 566471, End 568323)
eL1 = Y((oL1) => {
  Object.defineProperty(oL1, "__esModule", {
    value: !0
  });
  var rL1 = V4(),
    oX = V0(),
    E24 = XE(),
    aL1 = "ExtraErrorData",
    M24 = (I = {}) => {
      let d = I.depth || 3,
        G = I.captureErrorCause || !1;
      return {
        name: aL1,
        setupOnce() {},
        processEvent(Z, C) {
          return L24(Z, C, d, G)
        }
      }
    },
    sL1 = rL1.defineIntegration(M24),
    S24 = rL1.convertIntegrationFnToClass(aL1, sL1);

  function L24(I, d = {}, G, Z) {
    if (!d.originalException || !oX.isError(d.originalException)) return I;
    let C = d.originalException.name || d.originalException.constructor.name,
      W = y24(d.originalException, Z);
    if (W) {
      let w = {
          ...I.contexts
        },
        B = oX.normalize(W, G);
      if (oX.isPlainObject(B)) oX.addNonEnumerableProperty(B, "__sentry_skip_normalization__", !0), w[C] = B;
      return {
        ...I,
        contexts: w
      }
    }
    return I
  }

  function y24(I, d) {
    try {
      let G = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber", "toJSON"],
        Z = {};
      for (let C of Object.keys(I)) {
        if (G.indexOf(C) !== -1) continue;
        let W = I[C];
        Z[C] = oX.isError(W) ? W.toString() : W
      }
      if (d && I.cause !== void 0) Z.cause = oX.isError(I.cause) ? I.cause.toString() : I.cause;
      if (typeof I.toJSON === "function") {
        let C = I.toJSON();
        for (let W of Object.keys(C)) {
          let w = C[W];
          Z[W] = oX.isError(w) ? w.toString() : w
        }
      }
      return Z
    } catch (G) {
      E24.DEBUG_BUILD && oX.logger.error("Unable to extract extra data from the Error object:", G)
    }
    return null
  }
  oL1.ExtraErrorData = S24;
  oL1.extraErrorDataIntegration = sL1
})
// @from(Start 568329, End 626287)
Iy1 = Y((tL1, m01) => {
  /*!
      localForage -- Offline Storage, Improved
      Version 1.10.0
      https://localforage.github.io/localForage
      (c) 2013-2017 Mozilla, Apache License 2.0
  */
  (function(I) {
    if (typeof tL1 === "object" && typeof m01 !== "undefined") m01.exports = I();
    else if (typeof define === "function" && define.amd) define([], I);
    else {
      var d;
      if (typeof window !== "undefined") d = window;
      else if (typeof global !== "undefined") d = global;
      else if (typeof self !== "undefined") d = self;
      else d = this;
      d.localforage = I()
    }
  })(function() {
    var I, d, G;
    return function Z(C, W, w) {
      function B(X, _) {
        if (!W[X]) {
          if (!C[X]) {
            var F = B1;
            if (!_ && F) return F(X, !0);
            if (A) return A(X, !0);
            var g = new Error("Cannot find module '" + X + "'");
            throw g.code = "MODULE_NOT_FOUND", g
          }
          var J = W[X] = {
            exports: {}
          };
          C[X][0].call(J.exports, function(K) {
            var Q = C[X][1][K];
            return B(Q ? Q : K)
          }, J, J.exports, Z, C, W, w)
        }
        return W[X].exports
      }
      var A = B1;
      for (var V = 0; V < w.length; V++) B(w[V]);
      return B
    }({
      1: [function(Z, C, W) {
        (function(w) {
          var B = w.MutationObserver || w.WebKitMutationObserver,
            A;
          if (B) {
            var V = 0,
              X = new B(K),
              _ = w.document.createTextNode("");
            X.observe(_, {
              characterData: !0
            }), A = function() {
              _.data = V = ++V % 2
            }
          } else if (!w.setImmediate && typeof w.MessageChannel !== "undefined") {
            var F = new w.MessageChannel;
            F.port1.onmessage = K, A = function() {
              F.port2.postMessage(0)
            }
          } else if ("document" in w && "onreadystatechange" in w.document.createElement("script")) A = function() {
            var E = w.document.createElement("script");
            E.onreadystatechange = function() {
              K(), E.onreadystatechange = null, E.parentNode.removeChild(E), E = null
            }, w.document.documentElement.appendChild(E)
          };
          else A = function() {
            setTimeout(K, 0)
          };
          var g, J = [];

          function K() {
            g = !0;
            var E, S, P = J.length;
            while (P) {
              S = J, J = [], E = -1;
              while (++E < P) S[E]();
              P = J.length
            }
            g = !1
          }
          C.exports = Q;

          function Q(E) {
            if (J.push(E) === 1 && !g) A()
          }
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
      }, {}],
      2: [function(Z, C, W) {
        var w = Z(1);

        function B() {}
        var A = {},
          V = ["REJECTED"],
          X = ["FULFILLED"],
          _ = ["PENDING"];
        C.exports = F;

        function F(O) {
          if (typeof O !== "function") throw new TypeError("resolver must be a function");
          if (this.state = _, this.queue = [], this.outcome = void 0, O !== B) Q(this, O)
        }
        F.prototype.catch = function(O) {
          return this.then(null, O)
        }, F.prototype.then = function(O, T) {
          if (typeof O !== "function" && this.state === X || typeof T !== "function" && this.state === V) return this;
          var V1 = new this.constructor(B);
          if (this.state !== _) {
            var c = this.state === X ? O : T;
            J(V1, c, this.outcome)
          } else this.queue.push(new g(V1, O, T));
          return V1
        };

        function g(O, T, V1) {
          if (this.promise = O, typeof T === "function") this.onFulfilled = T, this.callFulfilled = this.otherCallFulfilled;
          if (typeof V1 === "function") this.onRejected = V1, this.callRejected = this.otherCallRejected
        }
        g.prototype.callFulfilled = function(O) {
          A.resolve(this.promise, O)
        }, g.prototype.otherCallFulfilled = function(O) {
          J(this.promise, this.onFulfilled, O)
        }, g.prototype.callRejected = function(O) {
          A.reject(this.promise, O)
        }, g.prototype.otherCallRejected = function(O) {
          J(this.promise, this.onRejected, O)
        };

        function J(O, T, V1) {
          w(function() {
            var c;
            try {
              c = T(V1)
            } catch (c1) {
              return A.reject(O, c1)
            }
            if (c === O) A.reject(O, new TypeError("Cannot resolve promise with itself"));
            else A.resolve(O, c)
          })
        }
        A.resolve = function(O, T) {
          var V1 = E(K, T);
          if (V1.status === "error") return A.reject(O, V1.value);
          var c = V1.value;
          if (c) Q(O, c);
          else {
            O.state = X, O.outcome = T;
            var c1 = -1,
              o1 = O.queue.length;
            while (++c1 < o1) O.queue[c1].callFulfilled(T)
          }
          return O
        }, A.reject = function(O, T) {
          O.state = V, O.outcome = T;
          var V1 = -1,
            c = O.queue.length;
          while (++V1 < c) O.queue[V1].callRejected(T);
          return O
        };

        function K(O) {
          var T = O && O.then;
          if (O && (typeof O === "object" || typeof O === "function") && typeof T === "function") return function V1() {
            T.apply(O, arguments)
          }
        }

        function Q(O, T) {
          var V1 = !1;

          function c(f1) {
            if (V1) return;
            V1 = !0, A.reject(O, f1)
          }

          function c1(f1) {
            if (V1) return;
            V1 = !0, A.resolve(O, f1)
          }

          function o1() {
            T(c1, c)
          }
          var a1 = E(o1);
          if (a1.status === "error") c(a1.value)
        }

        function E(O, T) {
          var V1 = {};
          try {
            V1.value = O(T), V1.status = "success"
          } catch (c) {
            V1.status = "error", V1.value = c
          }
          return V1
        }
        F.resolve = S;

        function S(O) {
          if (O instanceof this) return O;
          return A.resolve(new this(B), O)
        }
        F.reject = P;

        function P(O) {
          var T = new this(B);
          return A.reject(T, O)
        }
        F.all = $;

        function $(O) {
          var T = this;
          if (Object.prototype.toString.call(O) !== "[object Array]") return this.reject(new TypeError("must be an array"));
          var V1 = O.length,
            c = !1;
          if (!V1) return this.resolve([]);
          var c1 = new Array(V1),
            o1 = 0,
            a1 = -1,
            f1 = new this(B);
          while (++a1 < V1) r(O[a1], a1);
          return f1;

          function r(A1, m1) {
            T.resolve(A1).then(T1, function(e1) {
              if (!c) c = !0, A.reject(f1, e1)
            });

            function T1(e1) {
              if (c1[m1] = e1, ++o1 === V1 && !c) c = !0, A.resolve(f1, c1)
            }
          }
        }
        F.race = h;

        function h(O) {
          var T = this;
          if (Object.prototype.toString.call(O) !== "[object Array]") return this.reject(new TypeError("must be an array"));
          var V1 = O.length,
            c = !1;
          if (!V1) return this.resolve([]);
          var c1 = -1,
            o1 = new this(B);
          while (++c1 < V1) a1(O[c1]);
          return o1;

          function a1(f1) {
            T.resolve(f1).then(function(r) {
              if (!c) c = !0, A.resolve(o1, r)
            }, function(r) {
              if (!c) c = !0, A.reject(o1, r)
            })
          }
        }
      }, {
        "1": 1
      }],
      3: [function(Z, C, W) {
        (function(w) {
          if (typeof w.Promise !== "function") w.Promise = Z(2)
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
      }, {
        "2": 2
      }],
      4: [function(Z, C, W) {
        var w = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(l) {
          return typeof l
        } : function(l) {
          return l && typeof Symbol === "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l
        };

        function B(l, _1) {
          if (!(l instanceof _1)) throw new TypeError("Cannot call a class as a function")
        }

        function A() {
          try {
            if (typeof indexedDB !== "undefined") return indexedDB;
            if (typeof webkitIndexedDB !== "undefined") return webkitIndexedDB;
            if (typeof mozIndexedDB !== "undefined") return mozIndexedDB;
            if (typeof OIndexedDB !== "undefined") return OIndexedDB;
            if (typeof msIndexedDB !== "undefined") return msIndexedDB
          } catch (l) {
            return
          }
        }
        var V = A();

        function X() {
          try {
            if (!V || !V.open) return !1;
            var l = typeof openDatabase !== "undefined" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform),
              _1 = typeof fetch === "function" && fetch.toString().indexOf("[native code") !== -1;
            return (!l || _1) && typeof indexedDB !== "undefined" && typeof IDBKeyRange !== "undefined"
          } catch (I1) {
            return !1
          }
        }

        function _(l, _1) {
          l = l || [], _1 = _1 || {};
          try {
            return new Blob(l, _1)
          } catch (E1) {
            if (E1.name !== "TypeError") throw E1;
            var I1 = typeof BlobBuilder !== "undefined" ? BlobBuilder : typeof MSBlobBuilder !== "undefined" ? MSBlobBuilder : typeof MozBlobBuilder !== "undefined" ? MozBlobBuilder : WebKitBlobBuilder,
              v1 = new I1;
            for (var y1 = 0; y1 < l.length; y1 += 1) v1.append(l[y1]);
            return v1.getBlob(_1.type)
          }
        }
        if (typeof Promise === "undefined") Z(3);
        var F = Promise;

        function g(l, _1) {
          if (_1) l.then(function(I1) {
            _1(null, I1)
          }, function(I1) {
            _1(I1)
          })
        }

        function J(l, _1, I1) {
          if (typeof _1 === "function") l.then(_1);
          if (typeof I1 === "function") l.catch(I1)
        }

        function K(l) {
          if (typeof l !== "string") console.warn(l + " used as a key, but it is not a string."), l = String(l);
          return l
        }

        function Q() {
          if (arguments.length && typeof arguments[arguments.length - 1] === "function") return arguments[arguments.length - 1]
        }
        var E = "local-forage-detect-blob-support",
          S = void 0,
          P = {},
          $ = Object.prototype.toString,
          h = "readonly",
          O = "readwrite";

        function T(l) {
          var _1 = l.length,
            I1 = new ArrayBuffer(_1),
            v1 = new Uint8Array(I1);
          for (var y1 = 0; y1 < _1; y1++) v1[y1] = l.charCodeAt(y1);
          return I1
        }

        function V1(l) {
          return new F(function(_1) {
            var I1 = l.transaction(E, O),
              v1 = _([""]);
            I1.objectStore(E).put(v1, "key"), I1.onabort = function(y1) {
              y1.preventDefault(), y1.stopPropagation(), _1(!1)
            }, I1.oncomplete = function() {
              var y1 = navigator.userAgent.match(/Chrome\/(\d+)/),
                E1 = navigator.userAgent.match(/Edge\//);
              _1(E1 || !y1 || parseInt(y1[1], 10) >= 43)
            }
          }).catch(function() {
            return !1
          })
        }

        function c(l) {
          if (typeof S === "boolean") return F.resolve(S);
          return V1(l).then(function(_1) {
            return S = _1, S
          })
        }

        function c1(l) {
          var _1 = P[l.name],
            I1 = {};
          if (I1.promise = new F(function(v1, y1) {
              I1.resolve = v1, I1.reject = y1
            }), _1.deferredOperations.push(I1), !_1.dbReady) _1.dbReady = I1.promise;
          else _1.dbReady = _1.dbReady.then(function() {
            return I1.promise
          })
        }

        function o1(l) {
          var _1 = P[l.name],
            I1 = _1.deferredOperations.pop();
          if (I1) return I1.resolve(), I1.promise
        }

        function a1(l, _1) {
          var I1 = P[l.name],
            v1 = I1.deferredOperations.pop();
          if (v1) return v1.reject(_1), v1.promise
        }

        function f1(l, _1) {
          return new F(function(I1, v1) {
            if (P[l.name] = P[l.name] || e(), l.db)
              if (_1) c1(l), l.db.close();
              else return I1(l.db);
            var y1 = [l.name];
            if (_1) y1.push(l.version);
            var E1 = V.open.apply(V, y1);
            if (_1) E1.onupgradeneeded = function(Z0) {
              var Q0 = E1.result;
              try {
                if (Q0.createObjectStore(l.storeName), Z0.oldVersion <= 1) Q0.createObjectStore(E)
              } catch (N0) {
                if (N0.name === "ConstraintError") console.warn('The database "' + l.name + '" has been upgraded from version ' + Z0.oldVersion + " to version " + Z0.newVersion + ', but the storage "' + l.storeName + '" already exists.');
                else throw N0
              }
            };
            E1.onerror = function(Z0) {
              Z0.preventDefault(), v1(E1.error)
            }, E1.onsuccess = function() {
              var Z0 = E1.result;
              Z0.onversionchange = function(Q0) {
                Q0.target.close()
              }, I1(Z0), o1(l)
            }
          })
        }

        function r(l) {
          return f1(l, !1)
        }

        function A1(l) {
          return f1(l, !0)
        }

        function m1(l, _1) {
          if (!l.db) return !0;
          var I1 = !l.db.objectStoreNames.contains(l.storeName),
            v1 = l.version < l.db.version,
            y1 = l.version > l.db.version;
          if (v1) {
            if (l.version !== _1) console.warn('The database "' + l.name + `" can't be downgraded from version ` + l.db.version + " to version " + l.version + ".");
            l.version = l.db.version
          }
          if (y1 || I1) {
            if (I1) {
              var E1 = l.db.version + 1;
              if (E1 > l.version) l.version = E1
            }
            return !0
          }
          return !1
        }

        function T1(l) {
          return new F(function(_1, I1) {
            var v1 = new FileReader;
            v1.onerror = I1, v1.onloadend = function(y1) {
              var E1 = btoa(y1.target.result || "");
              _1({
                __local_forage_encoded_blob: !0,
                data: E1,
                type: l.type
              })
            }, v1.readAsBinaryString(l)
          })
        }

        function e1(l) {
          var _1 = T(atob(l.data));
          return _([_1], {
            type: l.type
          })
        }

        function F0(l) {
          return l && l.__local_forage_encoded_blob
        }

        function P0(l) {
          var _1 = this,
            I1 = _1._initReady().then(function() {
              var v1 = P[_1._dbInfo.name];
              if (v1 && v1.dbReady) return v1.dbReady
            });
          return J(I1, l, l), I1
        }

        function B0(l) {
          c1(l);
          var _1 = P[l.name],
            I1 = _1.forages;
          for (var v1 = 0; v1 < I1.length; v1++) {
            var y1 = I1[v1];
            if (y1._dbInfo.db) y1._dbInfo.db.close(), y1._dbInfo.db = null
          }
          return l.db = null, r(l).then(function(E1) {
            if (l.db = E1, m1(l)) return A1(l);
            return E1
          }).then(function(E1) {
            l.db = _1.db = E1;
            for (var Z0 = 0; Z0 < I1.length; Z0++) I1[Z0]._dbInfo.db = E1
          }).catch(function(E1) {
            throw a1(l, E1), E1
          })
        }

        function a0(l, _1, I1, v1) {
          if (v1 === void 0) v1 = 1;
          try {
            var y1 = l.db.transaction(l.storeName, _1);
            I1(null, y1)
          } catch (E1) {
            if (v1 > 0 && (!l.db || E1.name === "InvalidStateError" || E1.name === "NotFoundError")) return F.resolve().then(function() {
              if (!l.db || E1.name === "NotFoundError" && !l.db.objectStoreNames.contains(l.storeName) && l.version <= l.db.version) {
                if (l.db) l.version = l.db.version + 1;
                return A1(l)
              }
            }).then(function() {
              return B0(l).then(function() {
                a0(l, _1, I1, v1 - 1)
              })
            }).catch(I1);
            I1(E1)
          }
        }

        function e() {
          return {
            forages: [],
            db: null,
            dbReady: null,
            deferredOperations: []
          }
        }

        function G0(l) {
          var _1 = this,
            I1 = {
              db: null
            };
          if (l)
            for (var v1 in l) I1[v1] = l[v1];
          var y1 = P[I1.name];
          if (!y1) y1 = e(), P[I1.name] = y1;
          if (y1.forages.push(_1), !_1._initReady) _1._initReady = _1.ready, _1.ready = P0;
          var E1 = [];

          function Z0() {
            return F.resolve()
          }
          for (var Q0 = 0; Q0 < y1.forages.length; Q0++) {
            var N0 = y1.forages[Q0];
            if (N0 !== _1) E1.push(N0._initReady().catch(Z0))
          }
          var $0 = y1.forages.slice(0);
          return F.all(E1).then(function() {
            return I1.db = y1.db, r(I1)
          }).then(function(h0) {
            if (I1.db = h0, m1(I1, _1._defaultConfig.version)) return A1(I1);
            return h0
          }).then(function(h0) {
            I1.db = y1.db = h0, _1._dbInfo = I1;
            for (var g2 = 0; g2 < $0.length; g2++) {
              var F4 = $0[g2];
              if (F4 !== _1) F4._dbInfo.db = I1.db, F4._dbInfo.version = I1.version
            }
          })
        }

        function H1(l, _1) {
          var I1 = this;
          l = K(l);
          var v1 = new F(function(y1, E1) {
            I1.ready().then(function() {
              a0(I1._dbInfo, h, function(Z0, Q0) {
                if (Z0) return E1(Z0);
                try {
                  var N0 = Q0.objectStore(I1._dbInfo.storeName),
                    $0 = N0.get(l);
                  $0.onsuccess = function() {
                    var h0 = $0.result;
                    if (h0 === void 0) h0 = null;
                    if (F0(h0)) h0 = e1(h0);
                    y1(h0)
                  }, $0.onerror = function() {
                    E1($0.error)
                  }
                } catch (h0) {
                  E1(h0)
                }
              })
            }).catch(E1)
          });
          return g(v1, _1), v1
        }

        function j1(l, _1) {
          var I1 = this,
            v1 = new F(function(y1, E1) {
              I1.ready().then(function() {
                a0(I1._dbInfo, h, function(Z0, Q0) {
                  if (Z0) return E1(Z0);
                  try {
                    var N0 = Q0.objectStore(I1._dbInfo.storeName),
                      $0 = N0.openCursor(),
                      h0 = 1;
                    $0.onsuccess = function() {
                      var g2 = $0.result;
                      if (g2) {
                        var F4 = g2.value;
                        if (F0(F4)) F4 = e1(F4);
                        var x4 = l(F4, g2.key, h0++);
                        if (x4 !== void 0) y1(x4);
                        else g2.continue()
                      } else y1()
                    }, $0.onerror = function() {
                      E1($0.error)
                    }
                  } catch (g2) {
                    E1(g2)
                  }
                })
              }).catch(E1)
            });
          return g(v1, _1), v1
        }

        function i1(l, _1, I1) {
          var v1 = this;
          l = K(l);
          var y1 = new F(function(E1, Z0) {
            var Q0;
            v1.ready().then(function() {
              if (Q0 = v1._dbInfo, $.call(_1) === "[object Blob]") return c(Q0.db).then(function(N0) {
                if (N0) return _1;
                return T1(_1)
              });
              return _1
            }).then(function(N0) {
              a0(v1._dbInfo, O, function($0, h0) {
                if ($0) return Z0($0);
                try {
                  var g2 = h0.objectStore(v1._dbInfo.storeName);
                  if (N0 === null) N0 = void 0;
                  var F4 = g2.put(N0, l);
                  h0.oncomplete = function() {
                    if (N0 === void 0) N0 = null;
                    E1(N0)
                  }, h0.onabort = h0.onerror = function() {
                    var x4 = F4.error ? F4.error : F4.transaction.error;
                    Z0(x4)
                  }
                } catch (x4) {
                  Z0(x4)
                }
              })
            }).catch(Z0)
          });
          return g(y1, I1), y1
        }

        function E0(l, _1) {
          var I1 = this;
          l = K(l);
          var v1 = new F(function(y1, E1) {
            I1.ready().then(function() {
              a0(I1._dbInfo, O, function(Z0, Q0) {
                if (Z0) return E1(Z0);
                try {
                  var N0 = Q0.objectStore(I1._dbInfo.storeName),
                    $0 = N0.delete(l);
                  Q0.oncomplete = function() {
                    y1()
                  }, Q0.onerror = function() {
                    E1($0.error)
                  }, Q0.onabort = function() {
                    var h0 = $0.error ? $0.error : $0.transaction.error;
                    E1(h0)
                  }
                } catch (h0) {
                  E1(h0)
                }
              })
            }).catch(E1)
          });
          return g(v1, _1), v1
        }

        function k(l) {
          var _1 = this,
            I1 = new F(function(v1, y1) {
              _1.ready().then(function() {
                a0(_1._dbInfo, O, function(E1, Z0) {
                  if (E1) return y1(E1);
                  try {
                    var Q0 = Z0.objectStore(_1._dbInfo.storeName),
                      N0 = Q0.clear();
                    Z0.oncomplete = function() {
                      v1()
                    }, Z0.onabort = Z0.onerror = function() {
                      var $0 = N0.error ? N0.error : N0.transaction.error;
                      y1($0)
                    }
                  } catch ($0) {
                    y1($0)
                  }
                })
              }).catch(y1)
            });
          return g(I1, l), I1
        }

        function a(l) {
          var _1 = this,
            I1 = new F(function(v1, y1) {
              _1.ready().then(function() {
                a0(_1._dbInfo, h, function(E1, Z0) {
                  if (E1) return y1(E1);
                  try {
                    var Q0 = Z0.objectStore(_1._dbInfo.storeName),
                      N0 = Q0.count();
                    N0.onsuccess = function() {
                      v1(N0.result)
                    }, N0.onerror = function() {
                      y1(N0.error)
                    }
                  } catch ($0) {
                    y1($0)
                  }
                })
              }).catch(y1)
            });
          return g(I1, l), I1
        }

        function Z1(l, _1) {
          var I1 = this,
            v1 = new F(function(y1, E1) {
              if (l < 0) {
                y1(null);
                return
              }
              I1.ready().then(function() {
                a0(I1._dbInfo, h, function(Z0, Q0) {
                  if (Z0) return E1(Z0);
                  try {
                    var N0 = Q0.objectStore(I1._dbInfo.storeName),
                      $0 = !1,
                      h0 = N0.openKeyCursor();
                    h0.onsuccess = function() {
                      var g2 = h0.result;
                      if (!g2) {
                        y1(null);
                        return
                      }
                      if (l === 0) y1(g2.key);
                      else if (!$0) $0 = !0, g2.advance(l);
                      else y1(g2.key)
                    }, h0.onerror = function() {
                      E1(h0.error)
                    }
                  } catch (g2) {
                    E1(g2)
                  }
                })
              }).catch(E1)
            });
          return g(v1, _1), v1
        }

        function Q1(l) {
          var _1 = this,
            I1 = new F(function(v1, y1) {
              _1.ready().then(function() {
                a0(_1._dbInfo, h, function(E1, Z0) {
                  if (E1) return y1(E1);
                  try {
                    var Q0 = Z0.objectStore(_1._dbInfo.storeName),
                      N0 = Q0.openKeyCursor(),
                      $0 = [];
                    N0.onsuccess = function() {
                      var h0 = N0.result;
                      if (!h0) {
                        v1($0);
                        return
                      }
                      $0.push(h0.key), h0.continue()
                    }, N0.onerror = function() {
                      y1(N0.error)
                    }
                  } catch (h0) {
                    y1(h0)
                  }
                })
              }).catch(y1)
            });
          return g(I1, l), I1
        }

        function N1(l, _1) {
          _1 = Q.apply(this, arguments);
          var I1 = this.config();
          if (l = typeof l !== "function" && l || {}, !l.name) l.name = l.name || I1.name, l.storeName = l.storeName || I1.storeName;
          var v1 = this,
            y1;
          if (!l.name) y1 = F.reject("Invalid arguments");
          else {
            var E1 = l.name === I1.name && v1._dbInfo.db,
              Z0 = E1 ? F.resolve(v1._dbInfo.db) : r(l).then(function(Q0) {
                var N0 = P[l.name],
                  $0 = N0.forages;
                N0.db = Q0;
                for (var h0 = 0; h0 < $0.length; h0++) $0[h0]._dbInfo.db = Q0;
                return Q0
              });
            if (!l.storeName) y1 = Z0.then(function(Q0) {
              c1(l);
              var N0 = P[l.name],
                $0 = N0.forages;
              Q0.close();
              for (var h0 = 0; h0 < $0.length; h0++) {
                var g2 = $0[h0];
                g2._dbInfo.db = null
              }
              var F4 = new F(function(x4, c4) {
                var W9 = V.deleteDatabase(l.name);
                W9.onerror = function() {
                  var u9 = W9.result;
                  if (u9) u9.close();
                  c4(W9.error)
                }, W9.onblocked = function() {
                  console.warn('dropInstance blocked for database "' + l.name + '" until all open connections are closed')
                }, W9.onsuccess = function() {
                  var u9 = W9.result;
                  if (u9) u9.close();
                  x4(u9)
                }
              });
              return F4.then(function(x4) {
                N0.db = x4;
                for (var c4 = 0; c4 < $0.length; c4++) {
                  var W9 = $0[c4];
                  o1(W9._dbInfo)
                }
              }).catch(function(x4) {
                throw (a1(l, x4) || F.resolve()).catch(function() {}), x4
              })
            });
            else y1 = Z0.then(function(Q0) {
              if (!Q0.objectStoreNames.contains(l.storeName)) return;
              var N0 = Q0.version + 1;
              c1(l);
              var $0 = P[l.name],
                h0 = $0.forages;
              Q0.close();
              for (var g2 = 0; g2 < h0.length; g2++) {
                var F4 = h0[g2];
                F4._dbInfo.db = null, F4._dbInfo.version = N0
              }
              var x4 = new F(function(c4, W9) {
                var u9 = V.open(l.name, N0);
                u9.onerror = function(e6) {
                  var vd = u9.result;
                  vd.close(), W9(e6)
                }, u9.onupgradeneeded = function() {
                  var e6 = u9.result;
                  e6.deleteObjectStore(l.storeName)
                }, u9.onsuccess = function() {
                  var e6 = u9.result;
                  e6.close(), c4(e6)
                }
              });
              return x4.then(function(c4) {
                $0.db = c4;
                for (var W9 = 0; W9 < h0.length; W9++) {
                  var u9 = h0[W9];
                  u9._dbInfo.db = c4, o1(u9._dbInfo)
                }
              }).catch(function(c4) {
                throw (a1(l, c4) || F.resolve()).catch(function() {}), c4
              })
            })
          }
          return g(y1, _1), y1
        }
        var F1 = {
          _driver: "asyncStorage",
          _initStorage: G0,
          _support: X(),
          iterate: j1,
          getItem: H1,
          setItem: i1,
          removeItem: E0,
          clear: k,
          length: a,
          key: Z1,
          keys: Q1,
          dropInstance: N1
        };

        function O1() {
          return typeof openDatabase === "function"
        }
        var K1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          R1 = "~~local_forage_type~",
          h1 = /^~~local_forage_type~([^~]+)~/,
          j = "__lfsc__:",
          W1 = j.length,
          U1 = "arbf",
          L1 = "blob",
          D0 = "si08",
          O0 = "ui08",
          x0 = "uic8",
          i0 = "si16",
          s0 = "si32",
          P2 = "ur16",
          r5 = "ui32",
          n0 = "fl32",
          B2 = "fl64",
          A2 = W1 + U1.length,
          B4 = Object.prototype.toString;

        function A4(l) {
          var _1 = l.length * 0.75,
            I1 = l.length,
            v1, y1 = 0,
            E1, Z0, Q0, N0;
          if (l[l.length - 1] === "=") {
            if (_1--, l[l.length - 2] === "=") _1--
          }
          var $0 = new ArrayBuffer(_1),
            h0 = new Uint8Array($0);
          for (v1 = 0; v1 < I1; v1 += 4) E1 = K1.indexOf(l[v1]), Z0 = K1.indexOf(l[v1 + 1]), Q0 = K1.indexOf(l[v1 + 2]), N0 = K1.indexOf(l[v1 + 3]), h0[y1++] = E1 << 2 | Z0 >> 4, h0[y1++] = (Z0 & 15) << 4 | Q0 >> 2, h0[y1++] = (Q0 & 3) << 6 | N0 & 63;
          return $0
        }

        function _5(l) {
          var _1 = new Uint8Array(l),
            I1 = "",
            v1;
          for (v1 = 0; v1 < _1.length; v1 += 3) I1 += K1[_1[v1] >> 2], I1 += K1[(_1[v1] & 3) << 4 | _1[v1 + 1] >> 4], I1 += K1[(_1[v1 + 1] & 15) << 2 | _1[v1 + 2] >> 6], I1 += K1[_1[v1 + 2] & 63];
          if (_1.length % 3 === 2) I1 = I1.substring(0, I1.length - 1) + "=";
          else if (_1.length % 3 === 1) I1 = I1.substring(0, I1.length - 2) + "==";
          return I1
        }

        function D5(l, _1) {
          var I1 = "";
          if (l) I1 = B4.call(l);
          if (l && (I1 === "[object ArrayBuffer]" || l.buffer && B4.call(l.buffer) === "[object ArrayBuffer]")) {
            var v1, y1 = j;
            if (l instanceof ArrayBuffer) v1 = l, y1 += U1;
            else if (v1 = l.buffer, I1 === "[object Int8Array]") y1 += D0;
            else if (I1 === "[object Uint8Array]") y1 += O0;
            else if (I1 === "[object Uint8ClampedArray]") y1 += x0;
            else if (I1 === "[object Int16Array]") y1 += i0;
            else if (I1 === "[object Uint16Array]") y1 += P2;
            else if (I1 === "[object Int32Array]") y1 += s0;
            else if (I1 === "[object Uint32Array]") y1 += r5;
            else if (I1 === "[object Float32Array]") y1 += n0;
            else if (I1 === "[object Float64Array]") y1 += B2;
            else _1(new Error("Failed to get type for BinaryArray"));
            _1(y1 + _5(v1))
          } else if (I1 === "[object Blob]") {
            var E1 = new FileReader;
            E1.onload = function() {
              var Z0 = R1 + l.type + "~" + _5(this.result);
              _1(j + L1 + Z0)
            }, E1.readAsArrayBuffer(l)
          } else try {
            _1(JSON.stringify(l))
          } catch (Z0) {
            console.error("Couldn't convert value into a JSON string: ", l), _1(null, Z0)
          }
        }

        function tZ(l) {
          if (l.substring(0, W1) !== j) return JSON.parse(l);
          var _1 = l.substring(A2),
            I1 = l.substring(W1, A2),
            v1;
          if (I1 === L1 && h1.test(_1)) {
            var y1 = _1.match(h1);
            v1 = y1[1], _1 = _1.substring(y1[0].length)
          }
          var E1 = A4(_1);
          switch (I1) {
            case U1:
              return E1;
            case L1:
              return _([E1], {
                type: v1
              });
            case D0:
              return new Int8Array(E1);
            case O0:
              return new Uint8Array(E1);
            case x0:
              return new Uint8ClampedArray(E1);
            case i0:
              return new Int16Array(E1);
            case P2:
              return new Uint16Array(E1);
            case s0:
              return new Int32Array(E1);
            case r5:
              return new Uint32Array(E1);
            case n0:
              return new Float32Array(E1);
            case B2:
              return new Float64Array(E1);
            default:
              throw new Error("Unkown type: " + I1)
          }
        }
        var T6 = {
          serialize: D5,
          deserialize: tZ,
          stringToBuffer: A4,
          bufferToString: _5
        };

        function pB(l, _1, I1, v1) {
          l.executeSql("CREATE TABLE IF NOT EXISTS " + _1.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], I1, v1)
        }

        function iB(l) {
          var _1 = this,
            I1 = {
              db: null
            };
          if (l)
            for (var v1 in l) I1[v1] = typeof l[v1] !== "string" ? l[v1].toString() : l[v1];
          var y1 = new F(function(E1, Z0) {
            try {
              I1.db = openDatabase(I1.name, String(I1.version), I1.description, I1.size)
            } catch (Q0) {
              return Z0(Q0)
            }
            I1.db.transaction(function(Q0) {
              pB(Q0, I1, function() {
                _1._dbInfo = I1, E1()
              }, function(N0, $0) {
                Z0($0)
              })
            }, Z0)
          });
          return I1.serializer = T6, y1
        }

        function X3(l, _1, I1, v1, y1, E1) {
          l.executeSql(I1, v1, y1, function(Z0, Q0) {
            if (Q0.code === Q0.SYNTAX_ERR) Z0.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [_1.storeName], function(N0, $0) {
              if (!$0.rows.length) pB(N0, _1, function() {
                N0.executeSql(I1, v1, y1, E1)
              }, E1);
              else E1(N0, Q0)
            }, E1);
            else E1(Z0, Q0)
          }, E1)
        }

        function Nd(l, _1) {
          var I1 = this;
          l = K(l);
          var v1 = new F(function(y1, E1) {
            I1.ready().then(function() {
              var Z0 = I1._dbInfo;
              Z0.db.transaction(function(Q0) {
                X3(Q0, Z0, "SELECT * FROM " + Z0.storeName + " WHERE key = ? LIMIT 1", [l], function(N0, $0) {
                  var h0 = $0.rows.length ? $0.rows.item(0).value : null;
                  if (h0) h0 = Z0.serializer.deserialize(h0);
                  y1(h0)
                }, function(N0, $0) {
                  E1($0)
                })
              })
            }).catch(E1)
          });
          return g(v1, _1), v1
        }

        function IC(l, _1) {
          var I1 = this,
            v1 = new F(function(y1, E1) {
              I1.ready().then(function() {
                var Z0 = I1._dbInfo;
                Z0.db.transaction(function(Q0) {
                  X3(Q0, Z0, "SELECT * FROM " + Z0.storeName, [], function(N0, $0) {
                    var h0 = $0.rows,
                      g2 = h0.length;
                    for (var F4 = 0; F4 < g2; F4++) {
                      var x4 = h0.item(F4),
                        c4 = x4.value;
                      if (c4) c4 = Z0.serializer.deserialize(c4);
                      if (c4 = l(c4, x4.key, F4 + 1), c4 !== void 0) {
                        y1(c4);
                        return
                      }
                    }
                    y1()
                  }, function(N0, $0) {
                    E1($0)
                  })
                })
              }).catch(E1)
            });
          return g(v1, _1), v1
        }

        function Y3(l, _1, I1, v1) {
          var y1 = this;
          l = K(l);
          var E1 = new F(function(Z0, Q0) {
            y1.ready().then(function() {
              if (_1 === void 0) _1 = null;
              var N0 = _1,
                $0 = y1._dbInfo;
              $0.serializer.serialize(_1, function(h0, g2) {
                if (g2) Q0(g2);
                else $0.db.transaction(function(F4) {
                  X3(F4, $0, "INSERT OR REPLACE INTO " + $0.storeName + " (key, value) VALUES (?, ?)", [l, h0], function() {
                    Z0(N0)
                  }, function(x4, c4) {
                    Q0(c4)
                  })
                }, function(F4) {
                  if (F4.code === F4.QUOTA_ERR) {
                    if (v1 > 0) {
                      Z0(Y3.apply(y1, [l, N0, I1, v1 - 1]));
                      return
                    }
                    Q0(F4)
                  }
                })
              })
            }).catch(Q0)
          });
          return g(E1, I1), E1
        }

        function zd(l, _1, I1) {
          return Y3.apply(this, [l, _1, I1, 1])
        }

        function Qd(l, _1) {
          var I1 = this;
          l = K(l);
          var v1 = new F(function(y1, E1) {
            I1.ready().then(function() {
              var Z0 = I1._dbInfo;
              Z0.db.transaction(function(Q0) {
                X3(Q0, Z0, "DELETE FROM " + Z0.storeName + " WHERE key = ?", [l], function() {
                  y1()
                }, function(N0, $0) {
                  E1($0)
                })
              })
            }).catch(E1)
          });
          return g(v1, _1), v1
        }

        function QG(l) {
          var _1 = this,
            I1 = new F(function(v1, y1) {
              _1.ready().then(function() {
                var E1 = _1._dbInfo;
                E1.db.transaction(function(Z0) {
                  X3(Z0, E1, "DELETE FROM " + E1.storeName, [], function() {
                    v1()
                  }, function(Q0, N0) {
                    y1(N0)
                  })
                })
              }).catch(y1)
            });
          return g(I1, l), I1
        }

        function fG(l) {
          var _1 = this,
            I1 = new F(function(v1, y1) {
              _1.ready().then(function() {
                var E1 = _1._dbInfo;
                E1.db.transaction(function(Z0) {
                  X3(Z0, E1, "SELECT COUNT(key) as c FROM " + E1.storeName, [], function(Q0, N0) {
                    var $0 = N0.rows.item(0).c;
                    v1($0)
                  }, function(Q0, N0) {
                    y1(N0)
                  })
                })
              }).catch(y1)
            });
          return g(I1, l), I1
        }

        function X7(l, _1) {
          var I1 = this,
            v1 = new F(function(y1, E1) {
              I1.ready().then(function() {
                var Z0 = I1._dbInfo;
                Z0.db.transaction(function(Q0) {
                  X3(Q0, Z0, "SELECT key FROM " + Z0.storeName + " WHERE id = ? LIMIT 1", [l + 1], function(N0, $0) {
                    var h0 = $0.rows.length ? $0.rows.item(0).key : null;
                    y1(h0)
                  }, function(N0, $0) {
                    E1($0)
                  })
                })
              }).catch(E1)
            });
          return g(v1, _1), v1
        }

        function vI(l) {
          var _1 = this,
            I1 = new F(function(v1, y1) {
              _1.ready().then(function() {
                var E1 = _1._dbInfo;
                E1.db.transaction(function(Z0) {
                  X3(Z0, E1, "SELECT key FROM " + E1.storeName, [], function(Q0, N0) {
                    var $0 = [];
                    for (var h0 = 0; h0 < N0.rows.length; h0++) $0.push(N0.rows.item(h0).key);
                    v1($0)
                  }, function(Q0, N0) {
                    y1(N0)
                  })
                })
              }).catch(y1)
            });
          return g(I1, l), I1
        }

        function i7(l) {
          return new F(function(_1, I1) {
            l.transaction(function(v1) {
              v1.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(y1, E1) {
                var Z0 = [];
                for (var Q0 = 0; Q0 < E1.rows.length; Q0++) Z0.push(E1.rows.item(Q0).name);
                _1({
                  db: l,
                  storeNames: Z0
                })
              }, function(y1, E1) {
                I1(E1)
              })
            }, function(v1) {
              I1(v1)
            })
          })
        }

        function fd(l, _1) {
          _1 = Q.apply(this, arguments);
          var I1 = this.config();
          if (l = typeof l !== "function" && l || {}, !l.name) l.name = l.name || I1.name, l.storeName = l.storeName || I1.storeName;
          var v1 = this,
            y1;
          if (!l.name) y1 = F.reject("Invalid arguments");
          else y1 = new F(function(E1) {
            var Z0;
            if (l.name === I1.name) Z0 = v1._dbInfo.db;
            else Z0 = openDatabase(l.name, "", "", 0);
            if (!l.storeName) E1(i7(Z0));
            else E1({
              db: Z0,
              storeNames: [l.storeName]
            })
          }).then(function(E1) {
            return new F(function(Z0, Q0) {
              E1.db.transaction(function(N0) {
                function $0(x4) {
                  return new F(function(c4, W9) {
                    N0.executeSql("DROP TABLE IF EXISTS " + x4, [], function() {
                      c4()
                    }, function(u9, e6) {
                      W9(e6)
                    })
                  })
                }
                var h0 = [];
                for (var g2 = 0, F4 = E1.storeNames.length; g2 < F4; g2++) h0.push($0(E1.storeNames[g2]));
                F.all(h0).then(function() {
                  Z0()
                }).catch(function(x4) {
                  Q0(x4)
                })
              }, function(N0) {
                Q0(N0)
              })
            })
          });
          return g(y1, _1), y1
        }
        var Y7 = {
          _driver: "webSQLStorage",
          _initStorage: iB,
          _support: O1(),
          iterate: IC,
          getItem: Nd,
          setItem: zd,
          removeItem: Qd,
          clear: QG,
          length: fG,
          key: X7,
          keys: vI,
          dropInstance: fd
        };

        function nB() {
          try {
            return typeof localStorage !== "undefined" && "setItem" in localStorage && !!localStorage.setItem
          } catch (l) {
            return !1
          }
        }

        function qd(l, _1) {
          var I1 = l.name + "/";
          if (l.storeName !== _1.storeName) I1 += l.storeName + "/";
          return I1
        }

        function rB() {
          var l = "_localforage_support_test";
          try {
            return localStorage.setItem(l, !0), localStorage.removeItem(l), !1
          } catch (_1) {
            return !0
          }
        }

        function PW() {
          return !rB() || localStorage.length > 0
        }

        function $W(l) {
          var _1 = this,
            I1 = {};
          if (l)
            for (var v1 in l) I1[v1] = l[v1];
          if (I1.keyPrefix = qd(l, _1._defaultConfig), !PW()) return F.reject();
          return _1._dbInfo = I1, I1.serializer = T6, F.resolve()
        }

        function v8(l) {
          var _1 = this,
            I1 = _1.ready().then(function() {
              var v1 = _1._dbInfo.keyPrefix;
              for (var y1 = localStorage.length - 1; y1 >= 0; y1--) {
                var E1 = localStorage.key(y1);
                if (E1.indexOf(v1) === 0) localStorage.removeItem(E1)
              }
            });
          return g(I1, l), I1
        }

        function qG(l, _1) {
          var I1 = this;
          l = K(l);
          var v1 = I1.ready().then(function() {
            var y1 = I1._dbInfo,
              E1 = localStorage.getItem(y1.keyPrefix + l);
            if (E1) E1 = y1.serializer.deserialize(E1);
            return E1
          });
          return g(v1, _1), v1
        }

        function aB(l, _1) {
          var I1 = this,
            v1 = I1.ready().then(function() {
              var y1 = I1._dbInfo,
                E1 = y1.keyPrefix,
                Z0 = E1.length,
                Q0 = localStorage.length,
                N0 = 1;
              for (var $0 = 0; $0 < Q0; $0++) {
                var h0 = localStorage.key($0);
                if (h0.indexOf(E1) !== 0) continue;
                var g2 = localStorage.getItem(h0);
                if (g2) g2 = y1.serializer.deserialize(g2);
                if (g2 = l(g2, h0.substring(Z0), N0++), g2 !== void 0) return g2
              }
            });
          return g(v1, _1), v1
        }

        function uW(l, _1) {
          var I1 = this,
            v1 = I1.ready().then(function() {
              var y1 = I1._dbInfo,
                E1;
              try {
                E1 = localStorage.key(l)
              } catch (Z0) {
                E1 = null
              }
              if (E1) E1 = E1.substring(y1.keyPrefix.length);
              return E1
            });
          return g(v1, _1), v1
        }

        function Rd(l) {
          var _1 = this,
            I1 = _1.ready().then(function() {
              var v1 = _1._dbInfo,
                y1 = localStorage.length,
                E1 = [];
              for (var Z0 = 0; Z0 < y1; Z0++) {
                var Q0 = localStorage.key(Z0);
                if (Q0.indexOf(v1.keyPrefix) === 0) E1.push(Q0.substring(v1.keyPrefix.length))
              }
              return E1
            });
          return g(I1, l), I1
        }

        function sB(l) {
          var _1 = this,
            I1 = _1.keys().then(function(v1) {
              return v1.length
            });
          return g(I1, l), I1
        }

        function TW(l, _1) {
          var I1 = this;
          l = K(l);
          var v1 = I1.ready().then(function() {
            var y1 = I1._dbInfo;
            localStorage.removeItem(y1.keyPrefix + l)
          });
          return g(v1, _1), v1
        }

        function Ud(l, _1, I1) {
          var v1 = this;
          l = K(l);
          var y1 = v1.ready().then(function() {
            if (_1 === void 0) _1 = null;
            var E1 = _1;
            return new F(function(Z0, Q0) {
              var N0 = v1._dbInfo;
              N0.serializer.serialize(_1, function($0, h0) {
                if (h0) Q0(h0);
                else try {
                  localStorage.setItem(N0.keyPrefix + l, $0), Z0(E1)
                } catch (g2) {
                  if (g2.name === "QuotaExceededError" || g2.name === "NS_ERROR_DOM_QUOTA_REACHED") Q0(g2);
                  Q0(g2)
                }
              })
            })
          });
          return g(y1, I1), y1
        }

        function _7(l, _1) {
          if (_1 = Q.apply(this, arguments), l = typeof l !== "function" && l || {}, !l.name) {
            var I1 = this.config();
            l.name = l.name || I1.name, l.storeName = l.storeName || I1.storeName
          }
          var v1 = this,
            y1;
          if (!l.name) y1 = F.reject("Invalid arguments");
          else y1 = new F(function(E1) {
            if (!l.storeName) E1(l.name + "/");
            else E1(qd(l, v1._defaultConfig))
          }).then(function(E1) {
            for (var Z0 = localStorage.length - 1; Z0 >= 0; Z0--) {
              var Q0 = localStorage.key(Z0);
              if (Q0.indexOf(E1) === 0) localStorage.removeItem(Q0)
            }
          });
          return g(y1, _1), y1
        }
        var OW = {
            _driver: "localStorageWrapper",
            _initStorage: $W,
            _support: nB(),
            iterate: aB,
            getItem: qG,
            setItem: Ud,
            removeItem: TW,
            clear: v8,
            length: sB,
            key: uW,
            keys: Rd,
            dropInstance: _7
          },
          d1 = function l(_1, I1) {
            return _1 === I1 || typeof _1 === "number" && typeof I1 === "number" && isNaN(_1) && isNaN(I1)
          },
          o = function l(_1, I1) {
            var v1 = _1.length,
              y1 = 0;
            while (y1 < v1) {
              if (d1(_1[y1], I1)) return !0;
              y1++
            }
            return !1
          },
          S1 = Array.isArray || function(l) {
            return Object.prototype.toString.call(l) === "[object Array]"
          },
          p1 = {},
          l1 = {},
          s1 = {
            INDEXEDDB: F1,
            WEBSQL: Y7,
            LOCALSTORAGE: OW
          },
          U0 = [s1.INDEXEDDB._driver, s1.WEBSQL._driver, s1.LOCALSTORAGE._driver],
          w0 = ["dropInstance"],
          J0 = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(w0),
          W0 = {
            description: "",
            driver: U0.slice(),
            name: "localforage",
            size: 4980736,
            storeName: "keyvaluepairs",
            version: 1
          };

        function g0(l, _1) {
          l[_1] = function() {
            var I1 = arguments;
            return l.ready().then(function() {
              return l[_1].apply(l, I1)
            })
          }
        }

        function c2() {
          for (var l = 1; l < arguments.length; l++) {
            var _1 = arguments[l];
            if (_1) {
              for (var I1 in _1)
                if (_1.hasOwnProperty(I1))
                  if (S1(_1[I1])) arguments[0][I1] = _1[I1].slice();
                  else arguments[0][I1] = _1[I1]
            }
          }
          return arguments[0]
        }
        var L2 = function() {
            function l(_1) {
              B(this, l);
              for (var I1 in s1)
                if (s1.hasOwnProperty(I1)) {
                  var v1 = s1[I1],
                    y1 = v1._driver;
                  if (this[I1] = y1, !p1[y1]) this.defineDriver(v1)
                } this._defaultConfig = c2({}, W0), this._config = c2({}, this._defaultConfig, _1), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {})
            }
            return l.prototype.config = function _1(I1) {
              if ((typeof I1 === "undefined" ? "undefined" : w(I1)) === "object") {
                if (this._ready) return new Error("Can't call config() after localforage has been used.");
                for (var v1 in I1) {
                  if (v1 === "storeName") I1[v1] = I1[v1].replace(/\W/g, "_");
                  if (v1 === "version" && typeof I1[v1] !== "number") return new Error("Database version must be a number.");
                  this._config[v1] = I1[v1]
                }
                if ("driver" in I1 && I1.driver) return this.setDriver(this._config.driver);
                return !0
              } else if (typeof I1 === "string") return this._config[I1];
              else return this._config
            }, l.prototype.defineDriver = function _1(I1, v1, y1) {
              var E1 = new F(function(Z0, Q0) {
                try {
                  var N0 = I1._driver,
                    $0 = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                  if (!I1._driver) {
                    Q0($0);
                    return
                  }
                  var h0 = J0.concat("_initStorage");
                  for (var g2 = 0, F4 = h0.length; g2 < F4; g2++) {
                    var x4 = h0[g2],
                      c4 = !o(w0, x4);
                    if ((c4 || I1[x4]) && typeof I1[x4] !== "function") {
                      Q0($0);
                      return
                    }
                  }
                  var W9 = function e6() {
                    var vd = function HK(Ed) {
                      return function() {
                        var $4 = new Error("Method " + Ed + " is not implemented by the current driver"),
                          oB = F.reject($4);
                        return g(oB, arguments[arguments.length - 1]), oB
                      }
                    };
                    for (var dC = 0, qX = w0.length; dC < qX; dC++) {
                      var RG = w0[dC];
                      if (!I1[RG]) I1[RG] = vd(RG)
                    }
                  };
                  W9();
                  var u9 = function e6(vd) {
                    if (p1[N0]) console.info("Redefining LocalForage driver: " + N0);
                    p1[N0] = I1, l1[N0] = vd, Z0()
                  };
                  if ("_support" in I1)
                    if (I1._support && typeof I1._support === "function") I1._support().then(u9, Q0);
                    else u9(!!I1._support);
                  else u9(!0)
                } catch (e6) {
                  Q0(e6)
                }
              });
              return J(E1, v1, y1), E1
            }, l.prototype.driver = function _1() {
              return this._driver || null
            }, l.prototype.getDriver = function _1(I1, v1, y1) {
              var E1 = p1[I1] ? F.resolve(p1[I1]) : F.reject(new Error("Driver not found."));
              return J(E1, v1, y1), E1
            }, l.prototype.getSerializer = function _1(I1) {
              var v1 = F.resolve(T6);
              return J(v1, I1), v1
            }, l.prototype.ready = function _1(I1) {
              var v1 = this,
                y1 = v1._driverSet.then(function() {
                  if (v1._ready === null) v1._ready = v1._initDriver();
                  return v1._ready
                });
              return J(y1, I1, I1), y1
            }, l.prototype.setDriver = function _1(I1, v1, y1) {
              var E1 = this;
              if (!S1(I1)) I1 = [I1];
              var Z0 = this._getSupportedDrivers(I1);

              function Q0() {
                E1._config.driver = E1.driver()
              }

              function N0(g2) {
                return E1._extend(g2), Q0(), E1._ready = E1._initStorage(E1._config), E1._ready
              }

              function $0(g2) {
                return function() {
                  var F4 = 0;

                  function x4() {
                    while (F4 < g2.length) {
                      var c4 = g2[F4];
                      return F4++, E1._dbInfo = null, E1._ready = null, E1.getDriver(c4).then(N0).catch(x4)
                    }
                    Q0();
                    var W9 = new Error("No available storage method found.");
                    return E1._driverSet = F.reject(W9), E1._driverSet
                  }
                  return x4()
                }
              }
              var h0 = this._driverSet !== null ? this._driverSet.catch(function() {
                return F.resolve()
              }) : F.resolve();
              return this._driverSet = h0.then(function() {
                var g2 = Z0[0];
                return E1._dbInfo = null, E1._ready = null, E1.getDriver(g2).then(function(F4) {
                  E1._driver = F4._driver, Q0(), E1._wrapLibraryMethodsWithReady(), E1._initDriver = $0(Z0)
                })
              }).catch(function() {
                Q0();
                var g2 = new Error("No available storage method found.");
                return E1._driverSet = F.reject(g2), E1._driverSet
              }), J(this._driverSet, v1, y1), this._driverSet
            }, l.prototype.supports = function _1(I1) {
              return !!l1[I1]
            }, l.prototype._extend = function _1(I1) {
              c2(this, I1)
            }, l.prototype._getSupportedDrivers = function _1(I1) {
              var v1 = [];
              for (var y1 = 0, E1 = I1.length; y1 < E1; y1++) {
                var Z0 = I1[y1];
                if (this.supports(Z0)) v1.push(Z0)
              }
              return v1
            }, l.prototype._wrapLibraryMethodsWithReady = function _1() {
              for (var I1 = 0, v1 = J0.length; I1 < v1; I1++) g0(this, J0[I1])
            }, l.prototype.createInstance = function _1(I1) {
              return new l(I1)
            }, l
          }(),
          R2 = new L2;
        C.exports = R2
      }, {
        "3": 3
      }]
    }, {}, [4])(4)
  })
})
// @from(Start 626293, End 628861)
Gy1 = Y((dy1) => {
  Object.defineProperty(dy1, "__esModule", {
    value: !0
  });
  var Jw = V0(),
    u24 = Iy1(),
    uF = XE(),
    eX = Jw.GLOBAL_OBJ;
  class YE {
    static __initStatic() {
      this.id = "Offline"
    }
    constructor(I = {}) {
      this.name = YE.id, this.maxStoredEvents = I.maxStoredEvents || 30, this.offlineEventStore = u24.createInstance({
        name: "sentry/offlineEventStore"
      })
    }
    setupOnce(I, d) {
      if (this.hub = d(), "addEventListener" in eX) eX.addEventListener("online", () => {
        this._sendEvents().catch(() => {
          uF.DEBUG_BUILD && Jw.logger.warn("could not send cached events")
        })
      });
      let G = (Z) => {
        if (this.hub && this.hub.getIntegration(YE)) {
          if ("navigator" in eX && "onLine" in eX.navigator && !eX.navigator.onLine) return uF.DEBUG_BUILD && Jw.logger.log("Event dropped due to being a offline - caching instead"), this._cacheEvent(Z).then((C) => this._enforceMaxEvents()).catch((C) => {
            uF.DEBUG_BUILD && Jw.logger.warn("could not cache event while offline")
          }), null
        }
        return Z
      };
      if (G.id = this.name, I(G), "navigator" in eX && "onLine" in eX.navigator && eX.navigator.onLine) this._sendEvents().catch(() => {
        uF.DEBUG_BUILD && Jw.logger.warn("could not send cached events")
      })
    }
    async _cacheEvent(I) {
      return this.offlineEventStore.setItem(Jw.uuid4(), Jw.normalize(I))
    }
    async _enforceMaxEvents() {
      let I = [];
      return this.offlineEventStore.iterate((d, G, Z) => {
        I.push({
          cacheKey: G,
          event: d
        })
      }).then(() => this._purgeEvents(I.sort((d, G) => (G.event.timestamp || 0) - (d.event.timestamp || 0)).slice(this.maxStoredEvents < I.length ? this.maxStoredEvents : I.length).map((d) => d.cacheKey))).catch((d) => {
        uF.DEBUG_BUILD && Jw.logger.warn("could not enforce max events")
      })
    }
    async _purgeEvent(I) {
      return this.offlineEventStore.removeItem(I)
    }
    async _purgeEvents(I) {
      return Promise.all(I.map((d) => this._purgeEvent(d))).then()
    }
    async _sendEvents() {
      return this.offlineEventStore.iterate((I, d, G) => {
        if (this.hub) this.hub.captureEvent(I), this._purgeEvent(d).catch((Z) => {
          uF.DEBUG_BUILD && Jw.logger.warn("could not purge event from cache")
        });
        else uF.DEBUG_BUILD && Jw.logger.warn("no hub found - could not send cached event")
      })
    }
  }
  YE.__initStatic();
  dy1.Offline = YE
})
// @from(Start 628867, End 630245)
Ay1 = Y((By1) => {
  Object.defineProperty(By1, "__esModule", {
    value: !0
  });
  var _E = V4(),
    Cy1 = V0(),
    O24 = Cy1.GLOBAL_OBJ,
    Wy1 = "ReportingObserver",
    Zy1 = new WeakMap,
    m24 = (I = {}) => {
      let d = I.types || ["crash", "deprecation", "intervention"];

      function G(Z) {
        if (!Zy1.has(_E.getClient())) return;
        for (let C of Z) _E.withScope((W) => {
          W.setExtra("url", C.url);
          let w = `ReportingObserver [${C.type}]`,
            B = "No details available";
          if (C.body) {
            let A = {};
            for (let V in C.body) A[V] = C.body[V];
            if (W.setExtra("body", A), C.type === "crash") {
              let V = C.body;
              B = [V.crashId || "", V.reason || ""].join(" ").trim() || B
            } else B = C.body.message || B
          }
          _E.captureMessage(`${w}: ${B}`)
        })
      }
      return {
        name: Wy1,
        setupOnce() {
          if (!Cy1.supportsReportingObserver()) return;
          new O24.ReportingObserver(G, {
            buffered: !0,
            types: d
          }).observe()
        },
        setup(Z) {
          Zy1.set(Z, !0)
        }
      }
    },
    wy1 = _E.defineIntegration(m24),
    l24 = _E.convertIntegrationFnToClass(Wy1, wy1);
  By1.ReportingObserver = l24;
  By1.reportingObserverIntegration = wy1
})
// @from(Start 630251, End 631882)
Hy1 = Y((Dy1) => {
  Object.defineProperty(Dy1, "__esModule", {
    value: !0
  });
  var Xy1 = V4(),
    Vy1 = V0(),
    Yy1 = "RewriteFrames",
    j24 = (I = {}) => {
      let d = I.root,
        G = I.prefix || "app:///",
        Z = I.iteratee || ((w) => {
          if (!w.filename) return w;
          let B = /^[a-zA-Z]:\\/.test(w.filename) || w.filename.includes("\\") && !w.filename.includes("/"),
            A = /^\//.test(w.filename);
          if (B || A) {
            let V = B ? w.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : w.filename,
              X = d ? Vy1.relative(d, V) : Vy1.basename(V);
            w.filename = `${G}${X}`
          }
          return w
        });

      function C(w) {
        try {
          return {
            ...w,
            exception: {
              ...w.exception,
              values: w.exception.values.map((B) => ({
                ...B,
                ...B.stacktrace && {
                  stacktrace: W(B.stacktrace)
                }
              }))
            }
          }
        } catch (B) {
          return w
        }
      }

      function W(w) {
        return {
          ...w,
          frames: w && w.frames && w.frames.map((B) => Z(B))
        }
      }
      return {
        name: Yy1,
        setupOnce() {},
        processEvent(w) {
          let B = w;
          if (w.exception && Array.isArray(w.exception.values)) B = C(B);
          return B
        }
      }
    },
    _y1 = Xy1.defineIntegration(j24),
    k24 = Xy1.convertIntegrationFnToClass(Yy1, _y1);
  Dy1.RewriteFrames = k24;
  Dy1.rewriteFramesIntegration = _y1
})
// @from(Start 631888, End 632579)
Ny1 = Y((Ky1) => {
  Object.defineProperty(Ky1, "__esModule", {
    value: !0
  });
  var Fy1 = V4(),
    gy1 = "SessionTiming",
    p24 = () => {
      let I = Date.now();
      return {
        name: gy1,
        setupOnce() {},
        processEvent(d) {
          let G = Date.now();
          return {
            ...d,
            extra: {
              ...d.extra,
              ["session:start"]: I,
              ["session:duration"]: G - I,
              ["session:end"]: G
            }
          }
        }
      }
    },
    Jy1 = Fy1.defineIntegration(p24),
    i24 = Fy1.convertIntegrationFnToClass(gy1, Jy1);
  Ky1.SessionTiming = i24;
  Ky1.sessionTimingIntegration = Jy1
})
// @from(Start 632585, End 633428)
fy1 = Y((Qy1) => {
  Object.defineProperty(Qy1, "__esModule", {
    value: !0
  });
  var a24 = V4(),
    zy1 = "Transaction",
    s24 = () => {
      return {
        name: zy1,
        setupOnce() {},
        processEvent(I) {
          let d = e24(I);
          for (let G = d.length - 1; G >= 0; G--) {
            let Z = d[G];
            if (Z.in_app === !0) {
              I.transaction = t24(Z);
              break
            }
          }
          return I
        }
      }
    },
    o24 = a24.convertIntegrationFnToClass(zy1, s24);

  function e24(I) {
    let d = I.exception && I.exception.values && I.exception.values[0];
    return d && d.stacktrace && d.stacktrace.frames || []
  }

  function t24(I) {
    return I.module || I.function ? `${I.module||"?"}/${I.function||"?"}` : "<unknown>"
  }
  Qy1.Transaction = o24
})
// @from(Start 633434, End 638604)
Ly1 = Y((Sy1) => {
  Object.defineProperty(Sy1, "__esModule", {
    value: !0
  });
  var uA = V4(),
    Kw = V0(),
    om = XE(),
    qy1 = "HttpClient",
    d44 = (I = {}) => {
      let d = {
        failedRequestStatusCodes: [
          [500, 599]
        ],
        failedRequestTargets: [/.*/],
        ...I
      };
      return {
        name: qy1,
        setupOnce() {},
        setup(G) {
          X44(G, d), Y44(G, d)
        }
      }
    },
    Ry1 = uA.defineIntegration(d44),
    G44 = uA.convertIntegrationFnToClass(qy1, Ry1);

  function Z44(I, d, G, Z) {
    if (vy1(I, G.status, G.url)) {
      let C = _44(d, Z),
        W, w, B, A;
      if (My1())[{
        headers: W,
        cookies: B
      }, {
        headers: w,
        cookies: A
      }] = [{
        cookieHeader: "Cookie",
        obj: C
      }, {
        cookieHeader: "Set-Cookie",
        obj: G
      }].map(({
        cookieHeader: X,
        obj: _
      }) => {
        let F = w44(_.headers),
          g;
        try {
          let J = F[X] || F[X.toLowerCase()] || void 0;
          if (J) g = Uy1(J)
        } catch (J) {
          om.DEBUG_BUILD && Kw.logger.log(`Could not extract cookies from header ${X}`)
        }
        return {
          headers: F,
          cookies: g
        }
      });
      let V = Ey1({
        url: C.url,
        method: C.method,
        status: G.status,
        requestHeaders: W,
        responseHeaders: w,
        requestCookies: B,
        responseCookies: A
      });
      uA.captureEvent(V)
    }
  }

  function C44(I, d, G, Z) {
    if (vy1(I, d.status, d.responseURL)) {
      let C, W, w;
      if (My1()) {
        try {
          let A = d.getResponseHeader("Set-Cookie") || d.getResponseHeader("set-cookie") || void 0;
          if (A) W = Uy1(A)
        } catch (A) {
          om.DEBUG_BUILD && Kw.logger.log("Could not extract cookies from response headers")
        }
        try {
          w = B44(d)
        } catch (A) {
          om.DEBUG_BUILD && Kw.logger.log("Could not extract headers from response")
        }
        C = Z
      }
      let B = Ey1({
        url: d.responseURL,
        method: G,
        status: d.status,
        requestHeaders: C,
        responseHeaders: w,
        responseCookies: W
      });
      uA.captureEvent(B)
    }
  }

  function W44(I) {
    if (I) {
      let d = I["Content-Length"] || I["content-length"];
      if (d) return parseInt(d, 10)
    }
    return
  }

  function Uy1(I) {
    return I.split("; ").reduce((d, G) => {
      let [Z, C] = G.split("=");
      return d[Z] = C, d
    }, {})
  }

  function w44(I) {
    let d = {};
    return I.forEach((G, Z) => {
      d[Z] = G
    }), d
  }

  function B44(I) {
    let d = I.getAllResponseHeaders();
    if (!d) return {};
    return d.split(`\r
`).reduce((G, Z) => {
      let [C, W] = Z.split(": ");
      return G[C] = W, G
    }, {})
  }

  function A44(I, d) {
    return I.some((G) => {
      if (typeof G === "string") return d.includes(G);
      return G.test(d)
    })
  }

  function V44(I, d) {
    return I.some((G) => {
      if (typeof G === "number") return G === d;
      return d >= G[0] && d <= G[1]
    })
  }

  function X44(I, d) {
    if (!Kw.supportsNativeFetch()) return;
    Kw.addFetchInstrumentationHandler((G) => {
      if (uA.getClient() !== I) return;
      let {
        response: Z,
        args: C
      } = G, [W, w] = C;
      if (!Z) return;
      Z44(d, W, Z, w)
    })
  }

  function Y44(I, d) {
    if (!("XMLHttpRequest" in Kw.GLOBAL_OBJ)) return;
    Kw.addXhrInstrumentationHandler((G) => {
      if (uA.getClient() !== I) return;
      let Z = G.xhr,
        C = Z[Kw.SENTRY_XHR_DATA_KEY];
      if (!C) return;
      let {
        method: W,
        request_headers: w
      } = C;
      try {
        C44(d, Z, W, w)
      } catch (B) {
        om.DEBUG_BUILD && Kw.logger.warn("Error while extracting response event form XHR response", B)
      }
    })
  }

  function vy1(I, d, G) {
    return V44(I.failedRequestStatusCodes, d) && A44(I.failedRequestTargets, G) && !uA.isSentryRequestUrl(G, uA.getClient())
  }

  function Ey1(I) {
    let d = `HTTP Client Error with status code: ${I.status}`,
      G = {
        message: d,
        exception: {
          values: [{
            type: "Error",
            value: d
          }]
        },
        request: {
          url: I.url,
          method: I.method,
          headers: I.requestHeaders,
          cookies: I.requestCookies
        },
        contexts: {
          response: {
            status_code: I.status,
            headers: I.responseHeaders,
            cookies: I.responseCookies,
            body_size: W44(I.responseHeaders)
          }
        }
      };
    return Kw.addExceptionMechanism(G, {
      type: "http.client",
      handled: !1
    }), G
  }

  function _44(I, d) {
    if (!d && I instanceof Request) return I;
    if (I instanceof Request && I.bodyUsed) return I;
    return new Request(I, d)
  }

  function My1() {
    let I = uA.getClient();
    return I ? Boolean(I.getOptions().sendDefaultPii) : !1
  }
  Sy1.HttpClient = G44;
  Sy1.httpClientIntegration = Ry1
})
// @from(Start 638610, End 639873)
Oy1 = Y((Ty1) => {
  Object.defineProperty(Ty1, "__esModule", {
    value: !0
  });
  var yy1 = V4(),
    b01 = V0(),
    l01 = b01.GLOBAL_OBJ,
    F44 = 7,
    Py1 = "ContextLines",
    g44 = (I = {}) => {
      let d = I.frameContextLines != null ? I.frameContextLines : F44;
      return {
        name: Py1,
        setupOnce() {},
        processEvent(G) {
          return K44(G, d)
        }
      }
    },
    $y1 = yy1.defineIntegration(g44),
    J44 = yy1.convertIntegrationFnToClass(Py1, $y1);

  function K44(I, d) {
    let G = l01.document,
      Z = l01.location && b01.stripUrlQueryAndFragment(l01.location.href);
    if (!G || !Z) return I;
    let C = I.exception && I.exception.values;
    if (!C || !C.length) return I;
    let W = G.documentElement.innerHTML;
    if (!W) return I;
    let w = ["<!DOCTYPE html>", "<html>", ...W.split(`
`), "</html>"];
    return C.forEach((B) => {
      let A = B.stacktrace;
      if (A && A.frames) A.frames = A.frames.map((V) => uy1(V, w, Z, d))
    }), I
  }

  function uy1(I, d, G, Z) {
    if (I.filename !== G || !I.lineno || !d.length) return I;
    return b01.addContextToFrame(d, I, Z), I
  }
  Ty1.ContextLines = J44;
  Ty1.applySourceContextToFrame = uy1;
  Ty1.contextLinesIntegration = $y1
})
// @from(Start 639879, End 641103)
ny1 = Y((iy1) => {
  Object.defineProperty(iy1, "__esModule", {
    value: !0
  });
  var my1 = yL1(),
    ly1 = OL1(),
    by1 = nL1(),
    hy1 = eL1(),
    f44 = Gy1(),
    jy1 = Ay1(),
    ky1 = Hy1(),
    xy1 = Ny1(),
    q44 = fy1(),
    cy1 = Ly1(),
    py1 = Oy1();
  iy1.CaptureConsole = my1.CaptureConsole;
  iy1.captureConsoleIntegration = my1.captureConsoleIntegration;
  iy1.Debug = ly1.Debug;
  iy1.debugIntegration = ly1.debugIntegration;
  iy1.Dedupe = by1.Dedupe;
  iy1.dedupeIntegration = by1.dedupeIntegration;
  iy1.ExtraErrorData = hy1.ExtraErrorData;
  iy1.extraErrorDataIntegration = hy1.extraErrorDataIntegration;
  iy1.Offline = f44.Offline;
  iy1.ReportingObserver = jy1.ReportingObserver;
  iy1.reportingObserverIntegration = jy1.reportingObserverIntegration;
  iy1.RewriteFrames = ky1.RewriteFrames;
  iy1.rewriteFramesIntegration = ky1.rewriteFramesIntegration;
  iy1.SessionTiming = xy1.SessionTiming;
  iy1.sessionTimingIntegration = xy1.sessionTimingIntegration;
  iy1.Transaction = q44.Transaction;
  iy1.HttpClient = cy1.HttpClient;
  iy1.httpClientIntegration = cy1.httpClientIntegration;
  iy1.ContextLines = py1.ContextLines;
  iy1.contextLinesIntegration = py1.contextLinesIntegration
})
// @from(Start 641109, End 642098)
em = Y((ry1) => {
  Object.defineProperty(ry1, "__esModule", {
    value: !0
  });
  var c44 = [
    ["january", "1"],
    ["february", "2"],
    ["march", "3"],
    ["april", "4"],
    ["may", "5"],
    ["june", "6"],
    ["july", "7"],
    ["august", "8"],
    ["september", "9"],
    ["october", "10"],
    ["november", "11"],
    ["december", "12"],
    ["jan", "1"],
    ["feb", "2"],
    ["mar", "3"],
    ["apr", "4"],
    ["may", "5"],
    ["jun", "6"],
    ["jul", "7"],
    ["aug", "8"],
    ["sep", "9"],
    ["oct", "10"],
    ["nov", "11"],
    ["dec", "12"],
    ["sunday", "0"],
    ["monday", "1"],
    ["tuesday", "2"],
    ["wednesday", "3"],
    ["thursday", "4"],
    ["friday", "5"],
    ["saturday", "6"],
    ["sun", "0"],
    ["mon", "1"],
    ["tue", "2"],
    ["wed", "3"],
    ["thu", "4"],
    ["fri", "5"],
    ["sat", "6"]
  ];

  function p44(I) {
    return c44.reduce((d, [G, Z]) => d.replace(new RegExp(G, "gi"), Z), I)
  }
  ry1.replaceCronNames = p44
})
// @from(Start 642104, End 643699)
ty1 = Y((ey1) => {
  Object.defineProperty(ey1, "__esModule", {
    value: !0
  });
  var ay1 = V4(),
    sy1 = em(),
    oy1 = "Automatic instrumentation of CronJob only supports crontab string";

  function n44(I, d) {
    let G = !1;
    return new Proxy(I, {
      construct(Z, C) {
        let [W, w, B, A, V, ...X] = C;
        if (typeof W !== "string") throw new Error(oy1);
        if (G) throw new Error(`A job named '${d}' has already been scheduled`);
        G = !0;
        let _ = sy1.replaceCronNames(W);

        function F(g, J) {
          return ay1.withMonitor(d, () => {
            return w(g, J)
          }, {
            schedule: {
              type: "crontab",
              value: _
            },
            timezone: V || void 0
          })
        }
        return new Z(W, F, B, A, V, ...X)
      },
      get(Z, C) {
        if (C === "from") return (W) => {
          let {
            cronTime: w,
            onTick: B,
            timeZone: A
          } = W;
          if (typeof w !== "string") throw new Error(oy1);
          if (G) throw new Error(`A job named '${d}' has already been scheduled`);
          G = !0;
          let V = sy1.replaceCronNames(w);
          return W.onTick = (X, _) => {
            return ay1.withMonitor(d, () => {
              return B(X, _)
            }, {
              schedule: {
                type: "crontab",
                value: V
              },
              timezone: A || void 0
            })
          }, Z.from(W)
        };
        else return Z[C]
      }
    })
  }
  ey1.instrumentCron = n44
})
// @from(Start 643705, End 644641)
GP1 = Y((dP1) => {
  var {
    _optionalChain: IP1
  } = V0();
  Object.defineProperty(dP1, "__esModule", {
    value: !0
  });
  var a44 = V4(),
    s44 = em();

  function o44(I) {
    return new Proxy(I, {
      get(d, G) {
        if (G === "schedule" && d.schedule) return new Proxy(d.schedule, {
          apply(Z, C, W) {
            let [w, , B] = W;
            if (!IP1([B, "optionalAccess", (A) => A.name])) throw new Error('Missing "name" for scheduled job. A name is required for Sentry check-in monitoring.');
            return a44.withMonitor(B.name, () => {
              return Z.apply(C, W)
            }, {
              schedule: {
                type: "crontab",
                value: s44.replaceCronNames(w)
              },
              timezone: IP1([B, "optionalAccess", (A) => A.timezone])
            })
          }
        });
        else return d[G]
      }
    })
  }
  dP1.instrumentNodeCron = o44
})
// @from(Start 644647, End 645578)
CP1 = Y((ZP1) => {
  Object.defineProperty(ZP1, "__esModule", {
    value: !0
  });
  var t44 = V4(),
    I54 = em();

  function d54(I) {
    return new Proxy(I, {
      get(d, G) {
        if (G === "scheduleJob") return new Proxy(d.scheduleJob, {
          apply(Z, C, W) {
            let [w, B] = W;
            if (typeof w !== "string" || typeof B !== "string") throw new Error("Automatic instrumentation of 'node-schedule' requires the first parameter of 'scheduleJob' to be a job name string and the second parameter to be a crontab string");
            let A = w,
              V = B;
            return t44.withMonitor(A, () => {
              return Z.apply(C, W)
            }, {
              schedule: {
                type: "crontab",
                value: I54.replaceCronNames(V)
              }
            })
          }
        });
        return d[G]
      }
    })
  }
  ZP1.instrumentNodeSchedule = d54
})