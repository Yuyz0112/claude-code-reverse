
// @from(Start 645584, End 651339)
XP1 = Y((VP1) => {
  Object.defineProperty(VP1, "__esModule", {
    value: !0
  });
  var Q2 = V4(),
    Z54 = XM1(),
    C54 = F01(),
    W54 = K01(),
    DE = y01(),
    h01 = V0(),
    w54 = tS1(),
    WP1 = L01(),
    B54 = BL1(),
    A54 = gL1(),
    V54 = UL1(),
    X54 = EL1(),
    tX = ny1(),
    Y54 = Sm(),
    _54 = hm(),
    D54 = km(),
    H54 = mm(),
    F54 = Pm(),
    g54 = Lm(),
    J54 = Om(),
    K54 = xm(),
    N54 = rm(),
    wP1 = O01(),
    BP1 = pm(),
    AP1 = $m(),
    z54 = T01(),
    Q54 = ty1(),
    f54 = GP1(),
    q54 = CP1(),
    R54 = WP1.createGetModuleFromFilename(),
    U54 = {
      ...Q2.Integrations,
      ...V54,
      ...X54
    },
    v54 = {
      instrumentCron: Q54.instrumentCron,
      instrumentNodeCron: f54.instrumentNodeCron,
      instrumentNodeSchedule: q54.instrumentNodeSchedule
    };
  VP1.Hub = Q2.Hub;
  VP1.SDK_VERSION = Q2.SDK_VERSION;
  VP1.SEMANTIC_ATTRIBUTE_SENTRY_OP = Q2.SEMANTIC_ATTRIBUTE_SENTRY_OP;
  VP1.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = Q2.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
  VP1.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE = Q2.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE;
  VP1.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE = Q2.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
  VP1.Scope = Q2.Scope;
  VP1.addBreadcrumb = Q2.addBreadcrumb;
  VP1.addEventProcessor = Q2.addEventProcessor;
  VP1.addGlobalEventProcessor = Q2.addGlobalEventProcessor;
  VP1.addIntegration = Q2.addIntegration;
  VP1.captureCheckIn = Q2.captureCheckIn;
  VP1.captureEvent = Q2.captureEvent;
  VP1.captureException = Q2.captureException;
  VP1.captureMessage = Q2.captureMessage;
  VP1.captureSession = Q2.captureSession;
  VP1.close = Q2.close;
  VP1.configureScope = Q2.configureScope;
  VP1.continueTrace = Q2.continueTrace;
  VP1.createTransport = Q2.createTransport;
  VP1.endSession = Q2.endSession;
  VP1.extractTraceparentData = Q2.extractTraceparentData;
  VP1.flush = Q2.flush;
  VP1.functionToStringIntegration = Q2.functionToStringIntegration;
  VP1.getActiveSpan = Q2.getActiveSpan;
  VP1.getActiveTransaction = Q2.getActiveTransaction;
  VP1.getClient = Q2.getClient;
  VP1.getCurrentHub = Q2.getCurrentHub;
  VP1.getCurrentScope = Q2.getCurrentScope;
  VP1.getGlobalScope = Q2.getGlobalScope;
  VP1.getHubFromCarrier = Q2.getHubFromCarrier;
  VP1.getIsolationScope = Q2.getIsolationScope;
  VP1.getSpanStatusFromHttpCode = Q2.getSpanStatusFromHttpCode;
  VP1.inboundFiltersIntegration = Q2.inboundFiltersIntegration;
  VP1.isInitialized = Q2.isInitialized;
  VP1.lastEventId = Q2.lastEventId;
  VP1.linkedErrorsIntegration = Q2.linkedErrorsIntegration;
  VP1.makeMain = Q2.makeMain;
  VP1.metrics = Q2.metrics;
  VP1.parameterize = Q2.parameterize;
  VP1.requestDataIntegration = Q2.requestDataIntegration;
  VP1.runWithAsyncContext = Q2.runWithAsyncContext;
  VP1.setContext = Q2.setContext;
  VP1.setCurrentClient = Q2.setCurrentClient;
  VP1.setExtra = Q2.setExtra;
  VP1.setExtras = Q2.setExtras;
  VP1.setHttpStatus = Q2.setHttpStatus;
  VP1.setMeasurement = Q2.setMeasurement;
  VP1.setTag = Q2.setTag;
  VP1.setTags = Q2.setTags;
  VP1.setUser = Q2.setUser;
  VP1.spanStatusfromHttpCode = Q2.spanStatusfromHttpCode;
  VP1.startActiveSpan = Q2.startActiveSpan;
  VP1.startInactiveSpan = Q2.startInactiveSpan;
  VP1.startSession = Q2.startSession;
  VP1.startSpan = Q2.startSpan;
  VP1.startSpanManual = Q2.startSpanManual;
  VP1.startTransaction = Q2.startTransaction;
  VP1.trace = Q2.trace;
  VP1.withActiveSpan = Q2.withActiveSpan;
  VP1.withIsolationScope = Q2.withIsolationScope;
  VP1.withMonitor = Q2.withMonitor;
  VP1.withScope = Q2.withScope;
  VP1.autoDiscoverNodePerformanceMonitoringIntegrations = Z54.autoDiscoverNodePerformanceMonitoringIntegrations;
  VP1.NodeClient = C54.NodeClient;
  VP1.makeNodeTransport = W54.makeNodeTransport;
  VP1.defaultIntegrations = DE.defaultIntegrations;
  VP1.defaultStackParser = DE.defaultStackParser;
  VP1.getDefaultIntegrations = DE.getDefaultIntegrations;
  VP1.getSentryRelease = DE.getSentryRelease;
  VP1.init = DE.init;
  VP1.DEFAULT_USER_INCLUDES = h01.DEFAULT_USER_INCLUDES;
  VP1.addRequestDataToEvent = h01.addRequestDataToEvent;
  VP1.extractRequestData = h01.extractRequestData;
  VP1.deepReadDirSync = w54.deepReadDirSync;
  VP1.createGetModuleFromFilename = WP1.createGetModuleFromFilename;
  VP1.enableAnrDetection = B54.enableAnrDetection;
  VP1.Handlers = A54;
  VP1.captureConsoleIntegration = tX.captureConsoleIntegration;
  VP1.debugIntegration = tX.debugIntegration;
  VP1.dedupeIntegration = tX.dedupeIntegration;
  VP1.extraErrorDataIntegration = tX.extraErrorDataIntegration;
  VP1.httpClientIntegration = tX.httpClientIntegration;
  VP1.reportingObserverIntegration = tX.reportingObserverIntegration;
  VP1.rewriteFramesIntegration = tX.rewriteFramesIntegration;
  VP1.sessionTimingIntegration = tX.sessionTimingIntegration;
  VP1.consoleIntegration = Y54.consoleIntegration;
  VP1.onUncaughtExceptionIntegration = _54.onUncaughtExceptionIntegration;
  VP1.onUnhandledRejectionIntegration = D54.onUnhandledRejectionIntegration;
  VP1.modulesIntegration = H54.modulesIntegration;
  VP1.contextLinesIntegration = F54.contextLinesIntegration;
  VP1.nodeContextIntegration = g54.nodeContextIntegration;
  VP1.localVariablesIntegration = J54.localVariablesIntegration;
  VP1.spotlightIntegration = K54.spotlightIntegration;
  VP1.anrIntegration = N54.anrIntegration;
  VP1.hapiErrorPlugin = wP1.hapiErrorPlugin;
  VP1.hapiIntegration = wP1.hapiIntegration;
  VP1.Undici = BP1.Undici;
  VP1.nativeNodeFetchintegration = BP1.nativeNodeFetchintegration;
  VP1.Http = AP1.Http;
  VP1.httpIntegration = AP1.httpIntegration;
  VP1.trpcMiddleware = z54.trpcMiddleware;
  VP1.Integrations = U54;
  VP1.cron = v54;
  VP1.getModuleFromFilename = R54
})
// @from(Start 651345, End 651793)
mu1 = Y((Sq9, Ou1) => {
  Ou1.exports = function I(d) {
    return d.map(function(G) {
      if (G && typeof G === "object") return G.op.replace(/(.)/g, "\\$1");
      if (/["\s]/.test(G) && !/'/.test(G)) return "'" + G.replace(/(['\\])/g, "\\$1") + "'";
      if (/["'\s]/.test(G)) return '"' + G.replace(/(["\\$`!])/g, "\\$1") + '"';
      return String(G).replace(/([A-Za-z]:)?([#!"$&'()*,:;<=>?@[\\\]^`{|}])/g, "$1\\$2")
    }).join(" ")
  }
})
// @from(Start 651799, End 655389)
cu1 = Y((Lq9, xu1) => {
  var ku1 = "(?:" + ["\\|\\|", "\\&\\&", ";;", "\\|\\&", "\\<\\(", "\\<\\<\\<", ">>", ">\\&", "<\\&", "[&;()|<>]"].join("|") + ")",
    lu1 = new RegExp("^" + ku1 + "$"),
    bu1 = "|&;()<> \\t",
    jG4 = '"((\\\\"|[^"])*?)"',
    kG4 = "'((\\\\'|[^'])*?)'",
    xG4 = /^#$/,
    hu1 = "'",
    ju1 = '"',
    o01 = "$",
    lF = "",
    cG4 = 4294967296;
  for (e01 = 0; e01 < 4; e01++) lF += (cG4 * Math.random()).toString(16);
  var e01, pG4 = new RegExp("^" + lF);

  function iG4(I, d) {
    var G = d.lastIndex,
      Z = [],
      C;
    while (C = d.exec(I))
      if (Z.push(C), d.lastIndex === C.index) d.lastIndex += 1;
    return d.lastIndex = G, Z
  }

  function nG4(I, d, G) {
    var Z = typeof I === "function" ? I(G) : I[G];
    if (typeof Z === "undefined" && G != "") Z = "";
    else if (typeof Z === "undefined") Z = "$";
    if (typeof Z === "object") return d + lF + JSON.stringify(Z) + lF;
    return d + Z
  }

  function rG4(I, d, G) {
    if (!G) G = {};
    var Z = G.escape || "\\",
      C = "(\\" + Z + `['"` + bu1 + `]|[^\\s'"` + bu1 + "])+",
      W = new RegExp(["(" + ku1 + ")", "(" + C + "|" + jG4 + "|" + kG4 + ")+"].join("|"), "g"),
      w = iG4(I, W);
    if (w.length === 0) return [];
    if (!d) d = {};
    var B = !1;
    return w.map(function(A) {
      var V = A[0];
      if (!V || B) return;
      if (lu1.test(V)) return {
        op: V
      };
      var X = !1,
        _ = !1,
        F = "",
        g = !1,
        J;

      function K() {
        J += 1;
        var S, P, $ = V.charAt(J);
        if ($ === "{") {
          if (J += 1, V.charAt(J) === "}") throw new Error("Bad substitution: " + V.slice(J - 2, J + 1));
          if (S = V.indexOf("}", J), S < 0) throw new Error("Bad substitution: " + V.slice(J));
          P = V.slice(J, S), J = S
        } else if (/[*@#?$!_-]/.test($)) P = $, J += 1;
        else {
          var h = V.slice(J);
          if (S = h.match(/[^\w\d_]/), !S) P = h, J = V.length;
          else P = h.slice(0, S.index), J += S.index - 1
        }
        return nG4(d, "", P)
      }
      for (J = 0; J < V.length; J++) {
        var Q = V.charAt(J);
        if (g = g || !X && (Q === "*" || Q === "?"), _) F += Q, _ = !1;
        else if (X)
          if (Q === X) X = !1;
          else if (X == hu1) F += Q;
        else if (Q === Z)
          if (J += 1, Q = V.charAt(J), Q === ju1 || Q === Z || Q === o01) F += Q;
          else F += Z + Q;
        else if (Q === o01) F += K();
        else F += Q;
        else if (Q === ju1 || Q === hu1) X = Q;
        else if (lu1.test(Q)) return {
          op: V
        };
        else if (xG4.test(Q)) {
          B = !0;
          var E = {
            comment: I.slice(A.index + J + 1)
          };
          if (F.length) return [F, E];
          return [E]
        } else if (Q === Z) _ = !0;
        else if (Q === o01) F += K();
        else F += Q
      }
      if (g) return {
        op: "glob",
        pattern: F
      };
      return F
    }).reduce(function(A, V) {
      return typeof V === "undefined" ? A : A.concat(V)
    }, [])
  }
  xu1.exports = function I(d, G, Z) {
    var C = rG4(d, G, Z);
    if (typeof G !== "function") return C;
    return C.reduce(function(W, w) {
      if (typeof w === "object") return W.concat(w);
      var B = w.split(RegExp("(" + lF + ".*?" + lF + ")", "g"));
      if (B.length === 1) return W.concat(B[0]);
      return W.concat(B.filter(Boolean).map(function(A) {
        if (pG4.test(A)) return JSON.parse(A.split(lF)[1]);
        return A
      }))
    }, [])
  }
})
// @from(Start 655395, End 655457)
t01 = Y((aG4) => {
  aG4.quote = mu1();
  aG4.parse = cu1()
})
// @from(Start 655463, End 664807)
u1 = Y((QZ4) => {
  var NE = Symbol.for("react.element"),
    wZ4 = Symbol.for("react.portal"),
    BZ4 = Symbol.for("react.fragment"),
    AZ4 = Symbol.for("react.strict_mode"),
    VZ4 = Symbol.for("react.profiler"),
    XZ4 = Symbol.for("react.provider"),
    YZ4 = Symbol.for("react.context"),
    _Z4 = Symbol.for("react.forward_ref"),
    DZ4 = Symbol.for("react.suspense"),
    HZ4 = Symbol.for("react.memo"),
    FZ4 = Symbol.for("react.lazy"),
    ou1 = Symbol.iterator;

  function gZ4(I) {
    if (I === null || typeof I !== "object") return null;
    return I = ou1 && I[ou1] || I["@@iterator"], typeof I === "function" ? I : null
  }
  var IT1 = {
      isMounted: function() {
        return !1
      },
      enqueueForceUpdate: function() {},
      enqueueReplaceState: function() {},
      enqueueSetState: function() {}
    },
    dT1 = Object.assign,
    GT1 = {};

  function Bz(I, d, G) {
    this.props = I, this.context = d, this.refs = GT1, this.updater = G || IT1
  }
  Bz.prototype.isReactComponent = {};
  Bz.prototype.setState = function(I, d) {
    if (typeof I !== "object" && typeof I !== "function" && I != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, I, d, "setState")
  };
  Bz.prototype.forceUpdate = function(I) {
    this.updater.enqueueForceUpdate(this, I, "forceUpdate")
  };

  function ZT1() {}
  ZT1.prototype = Bz.prototype;

  function A21(I, d, G) {
    this.props = I, this.context = d, this.refs = GT1, this.updater = G || IT1
  }
  var V21 = A21.prototype = new ZT1;
  V21.constructor = A21;
  dT1(V21, Bz.prototype);
  V21.isPureReactComponent = !0;
  var eu1 = Array.isArray,
    CT1 = Object.prototype.hasOwnProperty,
    X21 = {
      current: null
    },
    WT1 = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };

  function wT1(I, d, G) {
    var Z, C = {},
      W = null,
      w = null;
    if (d != null)
      for (Z in d.ref !== void 0 && (w = d.ref), d.key !== void 0 && (W = "" + d.key), d) CT1.call(d, Z) && !WT1.hasOwnProperty(Z) && (C[Z] = d[Z]);
    var B = arguments.length - 2;
    if (B === 1) C.children = G;
    else if (1 < B) {
      for (var A = Array(B), V = 0; V < B; V++) A[V] = arguments[V + 2];
      C.children = A
    }
    if (I && I.defaultProps)
      for (Z in B = I.defaultProps, B) C[Z] === void 0 && (C[Z] = B[Z]);
    return {
      $$typeof: NE,
      type: I,
      key: W,
      ref: w,
      props: C,
      _owner: X21.current
    }
  }

  function JZ4(I, d) {
    return {
      $$typeof: NE,
      type: I.type,
      key: d,
      ref: I.ref,
      props: I.props,
      _owner: I._owner
    }
  }

  function Y21(I) {
    return typeof I === "object" && I !== null && I.$$typeof === NE
  }

  function KZ4(I) {
    var d = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + I.replace(/[=:]/g, function(G) {
      return d[G]
    })
  }
  var tu1 = /\/+/g;

  function B21(I, d) {
    return typeof I === "object" && I !== null && I.key != null ? KZ4("" + I.key) : d.toString(36)
  }

  function jl(I, d, G, Z, C) {
    var W = typeof I;
    if (W === "undefined" || W === "boolean") I = null;
    var w = !1;
    if (I === null) w = !0;
    else switch (W) {
      case "string":
      case "number":
        w = !0;
        break;
      case "object":
        switch (I.$$typeof) {
          case NE:
          case wZ4:
            w = !0
        }
    }
    if (w) return w = I, C = C(w), I = Z === "" ? "." + B21(w, 0) : Z, eu1(C) ? (G = "", I != null && (G = I.replace(tu1, "$&/") + "/"), jl(C, d, G, "", function(V) {
      return V
    })) : C != null && (Y21(C) && (C = JZ4(C, G + (!C.key || w && w.key === C.key ? "" : ("" + C.key).replace(tu1, "$&/") + "/") + I)), d.push(C)), 1;
    if (w = 0, Z = Z === "" ? "." : Z + ":", eu1(I))
      for (var B = 0; B < I.length; B++) {
        W = I[B];
        var A = Z + B21(W, B);
        w += jl(W, d, G, A, C)
      } else if (A = gZ4(I), typeof A === "function")
        for (I = A.call(I), B = 0; !(W = I.next()).done;) W = W.value, A = Z + B21(W, B++), w += jl(W, d, G, A, C);
      else if (W === "object") throw d = String(I), Error("Objects are not valid as a React child (found: " + (d === "[object Object]" ? "object with keys {" + Object.keys(I).join(", ") + "}" : d) + "). If you meant to render a collection of children, use an array instead.");
    return w
  }

  function hl(I, d, G) {
    if (I == null) return I;
    var Z = [],
      C = 0;
    return jl(I, Z, "", "", function(W) {
      return d.call(G, W, C++)
    }), Z
  }

  function NZ4(I) {
    if (I._status === -1) {
      var d = I._result;
      d = d(), d.then(function(G) {
        if (I._status === 0 || I._status === -1) I._status = 1, I._result = G
      }, function(G) {
        if (I._status === 0 || I._status === -1) I._status = 2, I._result = G
      }), I._status === -1 && (I._status = 0, I._result = d)
    }
    if (I._status === 1) return I._result.default;
    throw I._result
  }
  var e7 = {
      current: null
    },
    kl = {
      transition: null
    },
    zZ4 = {
      ReactCurrentDispatcher: e7,
      ReactCurrentBatchConfig: kl,
      ReactCurrentOwner: X21
    };

  function BT1() {
    throw Error("act(...) is not supported in production builds of React.")
  }
  QZ4.Children = {
    map: hl,
    forEach: function(I, d, G) {
      hl(I, function() {
        d.apply(this, arguments)
      }, G)
    },
    count: function(I) {
      var d = 0;
      return hl(I, function() {
        d++
      }), d
    },
    toArray: function(I) {
      return hl(I, function(d) {
        return d
      }) || []
    },
    only: function(I) {
      if (!Y21(I)) throw Error("React.Children.only expected to receive a single React element child.");
      return I
    }
  };
  QZ4.Component = Bz;
  QZ4.Fragment = BZ4;
  QZ4.Profiler = VZ4;
  QZ4.PureComponent = A21;
  QZ4.StrictMode = AZ4;
  QZ4.Suspense = DZ4;
  QZ4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zZ4;
  QZ4.act = BT1;
  QZ4.cloneElement = function(I, d, G) {
    if (I === null || I === void 0) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + I + ".");
    var Z = dT1({}, I.props),
      C = I.key,
      W = I.ref,
      w = I._owner;
    if (d != null) {
      if (d.ref !== void 0 && (W = d.ref, w = X21.current), d.key !== void 0 && (C = "" + d.key), I.type && I.type.defaultProps) var B = I.type.defaultProps;
      for (A in d) CT1.call(d, A) && !WT1.hasOwnProperty(A) && (Z[A] = d[A] === void 0 && B !== void 0 ? B[A] : d[A])
    }
    var A = arguments.length - 2;
    if (A === 1) Z.children = G;
    else if (1 < A) {
      B = Array(A);
      for (var V = 0; V < A; V++) B[V] = arguments[V + 2];
      Z.children = B
    }
    return {
      $$typeof: NE,
      type: I.type,
      key: C,
      ref: W,
      props: Z,
      _owner: w
    }
  };
  QZ4.createContext = function(I) {
    return I = {
      $$typeof: YZ4,
      _currentValue: I,
      _currentValue2: I,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }, I.Provider = {
      $$typeof: XZ4,
      _context: I
    }, I.Consumer = I
  };
  QZ4.createElement = wT1;
  QZ4.createFactory = function(I) {
    var d = wT1.bind(null, I);
    return d.type = I, d
  };
  QZ4.createRef = function() {
    return {
      current: null
    }
  };
  QZ4.forwardRef = function(I) {
    return {
      $$typeof: _Z4,
      render: I
    }
  };
  QZ4.isValidElement = Y21;
  QZ4.lazy = function(I) {
    return {
      $$typeof: FZ4,
      _payload: {
        _status: -1,
        _result: I
      },
      _init: NZ4
    }
  };
  QZ4.memo = function(I, d) {
    return {
      $$typeof: HZ4,
      type: I,
      compare: d === void 0 ? null : d
    }
  };
  QZ4.startTransition = function(I) {
    var d = kl.transition;
    kl.transition = {};
    try {
      I()
    } finally {
      kl.transition = d
    }
  };
  QZ4.unstable_act = BT1;
  QZ4.useCallback = function(I, d) {
    return e7.current.useCallback(I, d)
  };
  QZ4.useContext = function(I) {
    return e7.current.useContext(I)
  };
  QZ4.useDebugValue = function() {};
  QZ4.useDeferredValue = function(I) {
    return e7.current.useDeferredValue(I)
  };
  QZ4.useEffect = function(I, d) {
    return e7.current.useEffect(I, d)
  };
  QZ4.useId = function() {
    return e7.current.useId()
  };
  QZ4.useImperativeHandle = function(I, d, G) {
    return e7.current.useImperativeHandle(I, d, G)
  };
  QZ4.useInsertionEffect = function(I, d) {
    return e7.current.useInsertionEffect(I, d)
  };
  QZ4.useLayoutEffect = function(I, d) {
    return e7.current.useLayoutEffect(I, d)
  };
  QZ4.useMemo = function(I, d) {
    return e7.current.useMemo(I, d)
  };
  QZ4.useReducer = function(I, d, G) {
    return e7.current.useReducer(I, d, G)
  };
  QZ4.useRef = function(I) {
    return e7.current.useRef(I)
  };
  QZ4.useState = function(I) {
    return e7.current.useState(I)
  };
  QZ4.useSyncExternalStore = function(I, d, G) {
    return e7.current.useSyncExternalStore(I, d, G)
  };
  QZ4.useTransition = function() {
    return e7.current.useTransition()
  };
  QZ4.version = "18.3.1"
})
// @from(Start 664813, End 665636)
q7 = Y((NT1) => {
  Object.defineProperty(NT1, "__esModule", {
    value: !0
  });
  NT1.Log = NT1.LogLevel = void 0;
  var NC4 = " DEBUG ",
    zC4 = "  INFO ",
    QC4 = "  WARN ",
    fC4 = " ERROR ";

  function pl(I) {
    return I.unshift("[Statsig]"), I
  }
  NT1.LogLevel = {
    None: 0,
    Error: 1,
    Warn: 2,
    Info: 3,
    Debug: 4
  };
  class bF {
    static info(...I) {
      if (bF.level >= NT1.LogLevel.Info) console.info(zC4, ...pl(I))
    }
    static debug(...I) {
      if (bF.level >= NT1.LogLevel.Debug) console.debug(NC4, ...pl(I))
    }
    static warn(...I) {
      if (bF.level >= NT1.LogLevel.Warn) console.warn(QC4, ...pl(I))
    }
    static error(...I) {
      if (bF.level >= NT1.LogLevel.Error) console.error(fC4, ...pl(I))
    }
  }
  NT1.Log = bF;
  bF.level = NT1.LogLevel.Warn
})
// @from(Start 665642, End 666917)
hF = Y((RT1) => {
  var g21, J21, K21;
  Object.defineProperty(RT1, "__esModule", {
    value: !0
  });
  RT1._getInstance = RT1._getStatsigGlobalFlag = RT1._getStatsigGlobal = void 0;
  var qC4 = q7(),
    RC4 = () => {
      return __STATSIG__ ? __STATSIG__ : il
    };
  RT1._getStatsigGlobal = RC4;
  var UC4 = (I) => {
    return RT1._getStatsigGlobal()[I]
  };
  RT1._getStatsigGlobalFlag = UC4;
  var vC4 = (I) => {
    let d = RT1._getStatsigGlobal();
    if (!I) {
      if (d.instances && Object.keys(d.instances).length > 1) qC4.Log.warn("Call made to Statsig global instance without an SDK key but there is more than one client instance. If you are using mulitple clients, please specify the SDK key.");
      return d.firstInstance
    }
    return d.instances && d.instances[I]
  };
  RT1._getInstance = vC4;
  var Yz = "__STATSIG__",
    QT1 = typeof window !== "undefined" ? window : {},
    fT1 = typeof global !== "undefined" ? global : {},
    qT1 = typeof globalThis !== "undefined" ? globalThis : {},
    il = (K21 = (J21 = (g21 = QT1[Yz]) !== null && g21 !== void 0 ? g21 : fT1[Yz]) !== null && J21 !== void 0 ? J21 : qT1[Yz]) !== null && K21 !== void 0 ? K21 : {
      instance: RT1._getInstance
    };
  QT1[Yz] = il;
  fT1[Yz] = il;
  qT1[Yz] = il
})
// @from(Start 666923, End 669557)
rl = Y((UT1) => {
  Object.defineProperty(UT1, "__esModule", {
    value: !0
  });
  UT1.Diagnostics = void 0;
  var nl = new Map,
    Q21 = "start",
    f21 = "end",
    MC4 = "statsig::diagnostics";
  UT1.Diagnostics = {
    _getMarkers: (I) => {
      return nl.get(I)
    },
    _markInitOverallStart: (I) => {
      Dz(I, _z({}, Q21, "overall"))
    },
    _markInitOverallEnd: (I, d, G) => {
      Dz(I, _z({
        success: d,
        error: d ? void 0 : {
          name: "InitializeError",
          message: "Failed to initialize"
        },
        evaluationDetails: G
      }, f21, "overall"))
    },
    _markInitNetworkReqStart: (I, d) => {
      Dz(I, _z(d, Q21, "initialize", "network_request"))
    },
    _markInitNetworkReqEnd: (I, d) => {
      Dz(I, _z(d, f21, "initialize", "network_request"))
    },
    _markInitProcessStart: (I) => {
      Dz(I, _z({}, Q21, "initialize", "process"))
    },
    _markInitProcessEnd: (I, d) => {
      Dz(I, _z(d, f21, "initialize", "process"))
    },
    _clearMarkers: (I) => {
      nl.delete(I)
    },
    _formatError(I) {
      if (!(I && typeof I === "object")) return;
      return {
        code: q21(I, "code"),
        name: q21(I, "name"),
        message: q21(I, "message")
      }
    },
    _getDiagnosticsData(I, d, G, Z) {
      var C;
      return {
        success: (I === null || I === void 0 ? void 0 : I.ok) === !0,
        statusCode: I === null || I === void 0 ? void 0 : I.status,
        sdkRegion: (C = I === null || I === void 0 ? void 0 : I.headers) === null || C === void 0 ? void 0 : C.get("x-statsig-region"),
        isDelta: G.includes('"is_delta":true') === !0 ? !0 : void 0,
        attempt: d,
        error: UT1.Diagnostics._formatError(Z)
      }
    },
    _enqueueDiagnosticsEvent(I, d, G, Z) {
      let C = UT1.Diagnostics._getMarkers(G);
      if (C == null || C.length <= 0) return -1;
      let W = C[C.length - 1].timestamp - C[0].timestamp;
      UT1.Diagnostics._clearMarkers(G);
      let w = SC4(I, {
        context: "initialize",
        markers: C.slice(),
        statsigOptions: Z
      });
      return d.enqueue(w), W
    }
  };

  function _z(I, d, G, Z) {
    return Object.assign({
      key: G,
      action: d,
      step: Z,
      timestamp: Date.now()
    }, I)
  }

  function SC4(I, d) {
    return {
      eventName: MC4,
      user: I,
      value: null,
      metadata: d,
      time: Date.now()
    }
  }

  function Dz(I, d) {
    var G;
    let Z = (G = nl.get(I)) !== null && G !== void 0 ? G : [];
    Z.push(d), nl.set(I, Z)
  }

  function q21(I, d) {
    if (d in I) return I[d];
    return
  }
})
// @from(Start 669563, End 669922)
al = Y((vT1) => {
  Object.defineProperty(vT1, "__esModule", {
    value: !0
  });
  vT1._isTypeMatch = vT1._typeOf = void 0;

  function LC4(I) {
    return Array.isArray(I) ? "array" : typeof I
  }
  vT1._typeOf = LC4;

  function yC4(I, d) {
    let G = (Z) => Array.isArray(Z) ? "array" : typeof Z;
    return G(I) === G(d)
  }
  vT1._isTypeMatch = yC4
})
// @from(Start 669928, End 670780)
Hz = Y((MT1) => {
  Object.defineProperty(MT1, "__esModule", {
    value: !0
  });
  MT1._getSortedObject = MT1._DJB2Object = MT1._DJB2 = void 0;
  var $C4 = al(),
    uC4 = (I) => {
      let d = 0;
      for (let G = 0; G < I.length; G++) {
        let Z = I.charCodeAt(G);
        d = (d << 5) - d + Z, d = d & d
      }
      return String(d >>> 0)
    };
  MT1._DJB2 = uC4;
  var TC4 = (I, d) => {
    return MT1._DJB2(JSON.stringify(MT1._getSortedObject(I, d)))
  };
  MT1._DJB2Object = TC4;
  var OC4 = (I, d) => {
    if (I == null) return null;
    let G = Object.keys(I).sort(),
      Z = {};
    return G.forEach((C) => {
      let W = I[C];
      if (d === 0 || $C4._typeOf(W) !== "object") {
        Z[C] = W;
        return
      }
      Z[C] = MT1._getSortedObject(W, d != null ? d - 1 : d)
    }), Z
  };
  MT1._getSortedObject = OC4
})
// @from(Start 670786, End 671440)
qE = Y((PT1) => {
  Object.defineProperty(PT1, "__esModule", {
    value: !0
  });
  PT1._getStorageKey = PT1._getUserStorageKey = void 0;
  var LT1 = Hz();

  function yT1(I, d, G) {
    var Z;
    if (G) return G(I, d);
    let C = d && d.customIDs ? d.customIDs : {},
      W = [`uid:${(Z=d===null||d===void 0?void 0:d.userID)!==null&&Z!==void 0?Z:""}`, `cids:${Object.keys(C).sort((w,B)=>w.localeCompare(B)).map((w)=>`${w}-${C[w]}`).join(",")}`, `k:${I}`];
    return LT1._DJB2(W.join("|"))
  }
  PT1._getUserStorageKey = yT1;

  function lC4(I, d, G) {
    if (d) return yT1(I, d, G);
    return LT1._DJB2(`k:${I}`)
  }
  PT1._getStorageKey = lC4
})
// @from(Start 671446, End 672143)
RE = Y((uT1) => {
  Object.defineProperty(uT1, "__esModule", {
    value: !0
  });
  uT1.NetworkParam = uT1.NetworkDefault = uT1.Endpoint = void 0;
  uT1.Endpoint = {
    _initialize: "initialize",
    _rgstr: "rgstr",
    _download_config_specs: "download_config_specs"
  };
  uT1.NetworkDefault = {
    [uT1.Endpoint._rgstr]: "https://prodregistryv2.org/v1",
    [uT1.Endpoint._initialize]: "https://featureassets.org/v1",
    [uT1.Endpoint._download_config_specs]: "https://api.statsigcdn.com/v1"
  };
  uT1.NetworkParam = {
    EventCount: "ec",
    SdkKey: "k",
    SdkType: "st",
    SdkVersion: "sv",
    Time: "t",
    SessionID: "sid",
    StatsigEncoded: "se",
    IsGzipped: "gz"
  }
})
// @from(Start 672149, End 673641)
jF = Y((OT1) => {
  Object.defineProperty(OT1, "__esModule", {
    value: !0
  });
  OT1._getCurrentPageUrlSafe = OT1._addDocumentEventListenerSafe = OT1._addWindowEventListenerSafe = OT1._isServerEnv = OT1._getDocumentSafe = OT1._getWindowSafe = void 0;
  var jC4 = () => {
    return typeof window !== "undefined" ? window : null
  };
  OT1._getWindowSafe = jC4;
  var kC4 = () => {
    var I;
    let d = OT1._getWindowSafe();
    return (I = d === null || d === void 0 ? void 0 : d.document) !== null && I !== void 0 ? I : null
  };
  OT1._getDocumentSafe = kC4;
  var xC4 = () => {
    if (OT1._getDocumentSafe() !== null) return !1;
    let I = typeof process !== "undefined" && process.versions != null && process.versions.node != null;
    return typeof EdgeRuntime === "string" || I
  };
  OT1._isServerEnv = xC4;
  var cC4 = (I, d) => {
    let G = OT1._getWindowSafe();
    if (typeof(G === null || G === void 0 ? void 0 : G.addEventListener) === "function") G.addEventListener(I, d)
  };
  OT1._addWindowEventListenerSafe = cC4;
  var pC4 = (I, d) => {
    let G = OT1._getDocumentSafe();
    if (typeof(G === null || G === void 0 ? void 0 : G.addEventListener) === "function") G.addEventListener(I, d)
  };
  OT1._addDocumentEventListenerSafe = pC4;
  var iC4 = () => {
    var I;
    try {
      return (I = OT1._getWindowSafe()) === null || I === void 0 ? void 0 : I.location.href.split(/[?#]/)[0]
    } catch (d) {
      return
    }
  };
  OT1._getCurrentPageUrlSafe = iC4
})
// @from(Start 673647, End 676402)
v21 = Y((jT1) => {
  Object.defineProperty(jT1, "__esModule", {
    value: !0
  });
  jT1._createLayerParameterExposure = jT1._createConfigExposure = jT1._createGateExposure = jT1._isExposureEvent = void 0;
  var lT1 = "statsig::config_exposure",
    bT1 = "statsig::gate_exposure",
    hT1 = "statsig::layer_exposure",
    U21 = (I, d, G, Z, C) => {
      if (G.bootstrapMetadata) Z.bootstrapMetadata = G.bootstrapMetadata;
      return {
        eventName: I,
        user: d,
        value: null,
        metadata: IW4(G, Z),
        secondaryExposures: C,
        time: Date.now()
      }
    },
    sC4 = ({
      eventName: I
    }) => {
      return I === bT1 || I === lT1 || I === hT1
    };
  jT1._isExposureEvent = sC4;
  var oC4 = (I, d) => {
    var G, Z, C;
    let W = {
      gate: d.name,
      gateValue: String(d.value),
      ruleID: d.ruleID
    };
    if (((G = d.__evaluation) === null || G === void 0 ? void 0 : G.version) != null) W.configVersion = d.__evaluation.version;
    return U21(bT1, I, d.details, W, (C = (Z = d.__evaluation) === null || Z === void 0 ? void 0 : Z.secondary_exposures) !== null && C !== void 0 ? C : [])
  };
  jT1._createGateExposure = oC4;
  var eC4 = (I, d) => {
    var G, Z, C, W;
    let w = {
      config: d.name,
      ruleID: d.ruleID
    };
    if (((G = d.__evaluation) === null || G === void 0 ? void 0 : G.version) != null) w.configVersion = d.__evaluation.version;
    if (((Z = d.__evaluation) === null || Z === void 0 ? void 0 : Z.passed) != null) w.rulePassed = String(d.__evaluation.passed);
    return U21(lT1, I, d.details, w, (W = (C = d.__evaluation) === null || C === void 0 ? void 0 : C.secondary_exposures) !== null && W !== void 0 ? W : [])
  };
  jT1._createConfigExposure = eC4;
  var tC4 = (I, d, G) => {
    var Z, C, W, w;
    let B = d.__evaluation,
      A = ((Z = B === null || B === void 0 ? void 0 : B.explicit_parameters) === null || Z === void 0 ? void 0 : Z.includes(G)) === !0,
      V = "",
      X = (C = B === null || B === void 0 ? void 0 : B.undelegated_secondary_exposures) !== null && C !== void 0 ? C : [];
    if (A) V = (W = B.allocated_experiment_name) !== null && W !== void 0 ? W : "", X = B.secondary_exposures;
    let _ = {
      config: d.name,
      parameterName: G,
      ruleID: d.ruleID,
      allocatedExperiment: V,
      isExplicitParameter: String(A)
    };
    if (((w = d.__evaluation) === null || w === void 0 ? void 0 : w.version) != null) _.configVersion = d.__evaluation.version;
    return U21(hT1, I, d.details, _, X)
  };
  jT1._createLayerParameterExposure = tC4;
  var IW4 = (I, d) => {
    if (d.reason = I.reason, I.lcut) d.lcut = String(I.lcut);
    if (I.receivedAt) d.receivedAt = String(I.receivedAt);
    return d
  }
})
// @from(Start 676408, End 678453)
bA = Y((xT1) => {
  Object.defineProperty(xT1, "__esModule", {
    value: !0
  });
  xT1._setObjectInStorage = xT1._getObjectFromStorage = xT1.Storage = void 0;
  var CW4 = q7(),
    WW4 = jF(),
    UE = {},
    M21 = {
      isReady: () => !0,
      isReadyResolver: () => null,
      getProviderName: () => "InMemory",
      getItem: (I) => UE[I] ? UE[I] : null,
      setItem: (I, d) => {
        UE[I] = d
      },
      removeItem: (I) => {
        delete UE[I]
      },
      getAllKeys: () => Object.keys(UE)
    },
    tl = null;
  try {
    let I = WW4._getWindowSafe();
    if (I && I.localStorage && typeof I.localStorage.getItem === "function") tl = {
      isReady: () => !0,
      isReadyResolver: () => null,
      getProviderName: () => "LocalStorage",
      getItem: (d) => I.localStorage.getItem(d),
      setItem: (d, G) => I.localStorage.setItem(d, G),
      removeItem: (d) => I.localStorage.removeItem(d),
      getAllKeys: () => Object.keys(I.localStorage)
    }
  } catch (I) {
    CW4.Log.warn("Failed to setup localStorageProvider.")
  }
  var E21 = tl !== null && tl !== void 0 ? tl : M21,
    Qw = E21;

  function wW4(I) {
    try {
      return I()
    } catch (d) {
      if (d instanceof Error && d.name === "SecurityError") return xT1.Storage._setProvider(M21), null;
      throw d
    }
  }
  xT1.Storage = {
    isReady: () => Qw.isReady(),
    isReadyResolver: () => Qw.isReadyResolver(),
    getProviderName: () => Qw.getProviderName(),
    getItem: (I) => wW4(() => Qw.getItem(I)),
    setItem: (I, d) => Qw.setItem(I, d),
    removeItem: (I) => Qw.removeItem(I),
    getAllKeys: () => Qw.getAllKeys(),
    _setProvider: (I) => {
      E21 = I, Qw = I
    },
    _setDisabled: (I) => {
      if (I) Qw = M21;
      else Qw = E21
    }
  };

  function BW4(I) {
    let d = xT1.Storage.getItem(I);
    return JSON.parse(d !== null && d !== void 0 ? d : "null")
  }
  xT1._getObjectFromStorage = BW4;

  function AW4(I, d) {
    xT1.Storage.setItem(I, JSON.stringify(d))
  }
  xT1._setObjectInStorage = AW4
})
// @from(Start 678459, End 679250)
S21 = Y((iT1) => {
  Object.defineProperty(iT1, "__esModule", {
    value: !0
  });
  iT1.UrlConfiguration = void 0;
  var db = RE(),
    XW4 = {
      [db.Endpoint._initialize]: "i",
      [db.Endpoint._rgstr]: "e",
      [db.Endpoint._download_config_specs]: "d"
    };
  class pT1 {
    constructor(I, d, G, Z) {
      if (this.customUrl = null, this.fallbackUrls = null, this.endpoint = I, this.endpointDnsKey = XW4[I], d) this.customUrl = d;
      if (!d && G) this.customUrl = G.endsWith("/") ? `${G}${I}` : `${G}/${I}`;
      if (Z) this.fallbackUrls = Z;
      let C = db.NetworkDefault[I];
      this.defaultUrl = `${C}/${I}`
    }
    getUrl() {
      var I;
      return (I = this.customUrl) !== null && I !== void 0 ? I : this.defaultUrl
    }
  }
  iT1.UrlConfiguration = pT1
})
// @from(Start 679256, End 680364)
Cb = Y((aT1) => {
  Object.defineProperty(aT1, "__esModule", {
    value: !0
  });
  aT1._notifyVisibilityChanged = aT1._subscribeToVisiblityChanged = aT1._isUnloading = aT1._isCurrentlyVisible = void 0;
  var Gb = jF(),
    Zb = "foreground",
    y21 = "background",
    rT1 = [],
    L21 = Zb,
    P21 = !1,
    YW4 = () => {
      return L21 === Zb
    };
  aT1._isCurrentlyVisible = YW4;
  var _W4 = () => P21;
  aT1._isUnloading = _W4;
  var DW4 = (I) => {
    rT1.unshift(I)
  };
  aT1._subscribeToVisiblityChanged = DW4;
  var HW4 = (I) => {
    if (I === L21) return;
    L21 = I, rT1.forEach((d) => d(I))
  };
  aT1._notifyVisibilityChanged = HW4;
  Gb._addWindowEventListenerSafe("focus", () => {
    P21 = !1, aT1._notifyVisibilityChanged(Zb)
  });
  Gb._addWindowEventListenerSafe("blur", () => aT1._notifyVisibilityChanged(y21));
  Gb._addWindowEventListenerSafe("beforeunload", () => {
    P21 = !0, aT1._notifyVisibilityChanged(y21)
  });
  Gb._addDocumentEventListenerSafe("visibilitychange", () => {
    aT1._notifyVisibilityChanged(document.visibilityState === "visible" ? Zb : y21)
  })
})
// @from(Start 680370, End 688717)
u21 = Y((Kz) => {
  var gz = Kz && Kz.__awaiter || function(I, d, G, Z) {
    function C(W) {
      return W instanceof G ? W : new G(function(w) {
        w(W)
      })
    }
    return new(G || (G = Promise))(function(W, w) {
      function B(X) {
        try {
          V(Z.next(X))
        } catch (_) {
          w(_)
        }
      }

      function A(X) {
        try {
          V(Z.throw(X))
        } catch (_) {
          w(_)
        }
      }

      function V(X) {
        X.done ? W(X.value) : C(X.value).then(B, A)
      }
      V((Z = Z.apply(I, d || [])).next())
    })
  };
  Object.defineProperty(Kz, "__esModule", {
    value: !0
  });
  Kz.EventLogger = void 0;
  var KW4 = qE(),
    NW4 = Hz(),
    vE = q7(),
    sT1 = RE(),
    $21 = jF(),
    zW4 = v21(),
    Jz = bA(),
    QW4 = S21(),
    oT1 = Cb(),
    fW4 = 100,
    qW4 = 1e4,
    RW4 = 1000,
    UW4 = 600000,
    vW4 = 500,
    eT1 = 200,
    EE = {},
    Wb = {
      Startup: "startup",
      GainedFocus: "gained_focus"
    };
  class kF {
    static _safeFlushAndForget(I) {
      var d;
      (d = EE[I]) === null || d === void 0 || d.flush().catch(() => {})
    }
    static _safeRetryFailedLogs(I) {
      var d;
      (d = EE[I]) === null || d === void 0 || d._retryFailedLogs(Wb.GainedFocus)
    }
    constructor(I, d, G, Z) {
      var C;
      this._sdkKey = I, this._emitter = d, this._network = G, this._options = Z, this._queue = [], this._lastExposureTimeMap = {}, this._nonExposedChecks = {}, this._hasRunQuickFlush = !1, this._creationTime = Date.now(), this._isLoggingDisabled = (Z === null || Z === void 0 ? void 0 : Z.disableLogging) === !0, this._maxQueueSize = (C = Z === null || Z === void 0 ? void 0 : Z.loggingBufferMaxSize) !== null && C !== void 0 ? C : fW4;
      let W = Z === null || Z === void 0 ? void 0 : Z.networkConfig;
      this._logEventUrlConfig = new QW4.UrlConfiguration(sT1.Endpoint._rgstr, W === null || W === void 0 ? void 0 : W.logEventUrl, W === null || W === void 0 ? void 0 : W.api, W === null || W === void 0 ? void 0 : W.logEventFallbackUrls)
    }
    setLoggingDisabled(I) {
      this._isLoggingDisabled = I
    }
    enqueue(I) {
      if (!this._shouldLogEvent(I)) return;
      if (this._normalizeAndAppendEvent(I), this._quickFlushIfNeeded(), this._queue.length > this._maxQueueSize) kF._safeFlushAndForget(this._sdkKey)
    }
    incrementNonExposureCount(I) {
      var d;
      let G = (d = this._nonExposedChecks[I]) !== null && d !== void 0 ? d : 0;
      this._nonExposedChecks[I] = G + 1
    }
    reset() {
      this._lastExposureTimeMap = {}
    }
    start() {
      if ($21._isServerEnv()) return;
      EE[this._sdkKey] = this, oT1._subscribeToVisiblityChanged((I) => {
        if (I === "background") kF._safeFlushAndForget(this._sdkKey);
        else if (I === "foreground") kF._safeRetryFailedLogs(this._sdkKey)
      }), this._retryFailedLogs(Wb.Startup), this._startBackgroundFlushInterval()
    }
    stop() {
      return gz(this, void 0, void 0, function*() {
        if (this._flushIntervalId) clearInterval(this._flushIntervalId), this._flushIntervalId = null;
        delete EE[this._sdkKey], yield this.flush()
      })
    }
    flush() {
      return gz(this, void 0, void 0, function*() {
        if (this._appendAndResetNonExposedChecks(), this._queue.length === 0) return;
        let I = this._queue;
        this._queue = [], yield this._sendEvents(I)
      })
    }
    _quickFlushIfNeeded() {
      if (this._hasRunQuickFlush) return;
      if (this._hasRunQuickFlush = !0, Date.now() - this._creationTime > eT1) return;
      setTimeout(() => kF._safeFlushAndForget(this._sdkKey), eT1)
    }
    _shouldLogEvent(I) {
      if ($21._isServerEnv()) return !1;
      if (!zW4._isExposureEvent(I)) return !0;
      let d = I.user ? I.user : {
          statsigEnvironment: void 0
        },
        G = KW4._getUserStorageKey(this._sdkKey, d),
        Z = I.metadata ? I.metadata : {},
        C = [I.eventName, G, Z.gate, Z.config, Z.ruleID, Z.allocatedExperiment, Z.parameterName, String(Z.isExplicitParameter), Z.reason].join("|"),
        W = this._lastExposureTimeMap[C],
        w = Date.now();
      if (W && w - W < UW4) return !1;
      if (Object.keys(this._lastExposureTimeMap).length > RW4) this._lastExposureTimeMap = {};
      return this._lastExposureTimeMap[C] = w, !0
    }
    _sendEvents(I) {
      var d, G;
      return gz(this, void 0, void 0, function*() {
        if (this._isLoggingDisabled) return this._saveFailedLogsToStorage(I), !1;
        try {
          let C = oT1._isUnloading() && this._network.isBeaconSupported() && ((G = (d = this._options) === null || d === void 0 ? void 0 : d.networkConfig) === null || G === void 0 ? void 0 : G.networkOverrideFunc) == null;
          if (this._emitter({
              name: "pre_logs_flushed",
              events: I
            }), (C ? yield this._sendEventsViaBeacon(I): yield this._sendEventsViaPost(I)).success) return this._emitter({
            name: "logs_flushed",
            events: I
          }), !0;
          else return vE.Log.warn("Failed to flush events."), this._saveFailedLogsToStorage(I), !1
        } catch (Z) {
          return vE.Log.warn("Failed to flush events."), !1
        }
      })
    }
    _sendEventsViaPost(I) {
      var d;
      return gz(this, void 0, void 0, function*() {
        let G = yield this._network.post(this._getRequestData(I)), Z = (d = G === null || G === void 0 ? void 0 : G.code) !== null && d !== void 0 ? d : -1;
        return {
          success: Z >= 200 && Z < 300
        }
      })
    }
    _sendEventsViaBeacon(I) {
      return gz(this, void 0, void 0, function*() {
        return {
          success: yield this._network.beacon(this._getRequestData(I))
        }
      })
    }
    _getRequestData(I) {
      return {
        sdkKey: this._sdkKey,
        data: {
          events: I
        },
        urlConfig: this._logEventUrlConfig,
        retries: 3,
        isCompressable: !0,
        params: {
          [sT1.NetworkParam.EventCount]: String(I.length)
        }
      }
    }
    _saveFailedLogsToStorage(I) {
      while (I.length > vW4) I.shift();
      let d = this._getStorageKey();
      try {
        Jz._setObjectInStorage(d, I)
      } catch (G) {
        vE.Log.warn("Unable to save failed logs to storage")
      }
    }
    _retryFailedLogs(I) {
      let d = this._getStorageKey();
      (() => gz(this, void 0, void 0, function*() {
        if (!Jz.Storage.isReady()) yield Jz.Storage.isReadyResolver();
        let G = Jz._getObjectFromStorage(d);
        if (!G) return;
        if (I === Wb.Startup) Jz.Storage.removeItem(d);
        if ((yield this._sendEvents(G)) && I === Wb.GainedFocus) Jz.Storage.removeItem(d)
      }))().catch(() => {
        vE.Log.warn("Failed to flush stored logs")
      })
    }
    _getStorageKey() {
      return `statsig.failed_logs.${NW4._DJB2(this._sdkKey)}`
    }
    _normalizeAndAppendEvent(I) {
      if (I.user) I.user = Object.assign({}, I.user), delete I.user.privateAttributes;
      let d = {},
        G = this._getCurrentPageUrl();
      if (G) d.statsigMetadata = {
        currentPage: G
      };
      let Z = Object.assign(Object.assign({}, I), d);
      vE.Log.debug("Enqueued Event:", Z), this._queue.push(Z)
    }
    _appendAndResetNonExposedChecks() {
      if (Object.keys(this._nonExposedChecks).length === 0) return;
      this._normalizeAndAppendEvent({
        eventName: "statsig::non_exposed_checks",
        user: null,
        time: Date.now(),
        metadata: {
          checks: Object.assign({}, this._nonExposedChecks)
        }
      }), this._nonExposedChecks = {}
    }
    _getCurrentPageUrl() {
      var I;
      if (((I = this._options) === null || I === void 0 ? void 0 : I.includeCurrentPageUrlWithEvents) === !1) return;
      return $21._getCurrentPageUrlSafe()
    }
    _startBackgroundFlushInterval() {
      var I, d;
      let G = (d = (I = this._options) === null || I === void 0 ? void 0 : I.loggingIntervalMs) !== null && d !== void 0 ? d : qW4,
        Z = setInterval(() => {
          let C = EE[this._sdkKey];
          if (!C || C._flushIntervalId !== Z) clearInterval(Z);
          else kF._safeFlushAndForget(this._sdkKey)
        }, G);
      this._flushIntervalId = Z
    }
  }
  Kz.EventLogger = kF
})
// @from(Start 688723, End 689106)
ME = Y((tT1) => {
  Object.defineProperty(tT1, "__esModule", {
    value: !0
  });
  tT1.StatsigMetadataProvider = tT1.SDK_VERSION = void 0;
  tT1.SDK_VERSION = "3.12.0";
  var T21 = {
    sdkVersion: tT1.SDK_VERSION,
    sdkType: "js-mono"
  };
  tT1.StatsigMetadataProvider = {
    get: () => T21,
    add: (I) => {
      T21 = Object.assign(Object.assign({}, T21), I)
    }
  }
})
// @from(Start 689112, End 689197)
ZO1 = Y((GO1) => {
  Object.defineProperty(GO1, "__esModule", {
    value: !0
  })
})
// @from(Start 689203, End 689926)
wb = Y((CO1) => {
  Object.defineProperty(CO1, "__esModule", {
    value: !0
  });
  CO1.getUUID = void 0;

  function EW4() {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") return crypto.randomUUID();
    let I = new Date().getTime(),
      d = typeof performance !== "undefined" && performance.now && performance.now() * 1000 || 0;
    return `xxxxxxxx-xxxx-4xxx-${"89ab"[Math.floor(Math.random()*4)]}xxx-xxxxxxxxxxxx`.replace(/[xy]/g, (Z) => {
      let C = Math.random() * 16;
      if (I > 0) C = (I + C) % 16 | 0, I = Math.floor(I / 16);
      else C = (d + C) % 16 | 0, d = Math.floor(d / 16);
      return (Z === "x" ? C : C & 7 | 8).toString(16)
    })
  }
  CO1.getUUID = EW4
})
// @from(Start 689932, End 690711)
Ab = Y((VO1) => {
  Object.defineProperty(VO1, "__esModule", {
    value: !0
  });
  VO1.StableID = void 0;
  var MW4 = qE(),
    SW4 = q7(),
    BO1 = bA(),
    LW4 = wb(),
    Bb = {};
  VO1.StableID = {
    get: (I) => {
      if (Bb[I] == null) {
        let d = yW4(I);
        if (d == null) d = LW4.getUUID(), wO1(d, I);
        Bb[I] = d
      }
      return Bb[I]
    },
    setOverride: (I, d) => {
      Bb[d] = I, wO1(I, d)
    }
  };

  function AO1(I) {
    return `statsig.stable_id.${MW4._getStorageKey(I)}`
  }

  function wO1(I, d) {
    let G = AO1(d);
    try {
      BO1._setObjectInStorage(G, I)
    } catch (Z) {
      SW4.Log.warn("Failed to save StableID")
    }
  }

  function yW4(I) {
    let d = AO1(I);
    return BO1._getObjectFromStorage(d)
  }
})
// @from(Start 690717, End 691405)
O21 = Y((YO1) => {
  Object.defineProperty(YO1, "__esModule", {
    value: !0
  });
  YO1._getFullUserHash = YO1._normalizeUser = void 0;
  var PW4 = Hz(),
    $W4 = q7();

  function uW4(I, d, G) {
    try {
      let Z = JSON.parse(JSON.stringify(I));
      if (d != null && d.environment != null) Z.statsigEnvironment = d.environment;
      else if (G != null) Z.statsigEnvironment = {
        tier: G
      };
      return Z
    } catch (Z) {
      return $W4.Log.error("Failed to JSON.stringify user"), {
        statsigEnvironment: void 0
      }
    }
  }
  YO1._normalizeUser = uW4;

  function TW4(I) {
    return I ? PW4._DJB2Object(I) : null
  }
  YO1._getFullUserHash = TW4
})
// @from(Start 691411, End 691776)
m21 = Y((DO1) => {
  Object.defineProperty(DO1, "__esModule", {
    value: !0
  });
  DO1._typedJsonParse = void 0;
  var mW4 = q7();

  function lW4(I, d, G) {
    try {
      let Z = JSON.parse(I);
      if (Z && typeof Z === "object" && d in Z) return Z
    } catch (Z) {}
    return mW4.Log.error(`Failed to parse ${G}`), null
  }
  DO1._typedJsonParse = lW4
})
// @from(Start 691782, End 697285)
zO1 = Y((FY) => {
  var l21 = FY && FY.__awaiter || function(I, d, G, Z) {
    function C(W) {
      return W instanceof G ? W : new G(function(w) {
        w(W)
      })
    }
    return new(G || (G = Promise))(function(W, w) {
      function B(X) {
        try {
          V(Z.next(X))
        } catch (_) {
          w(_)
        }
      }

      function A(X) {
        try {
          V(Z.throw(X))
        } catch (_) {
          w(_)
        }
      }

      function V(X) {
        X.done ? W(X.value) : C(X.value).then(B, A)
      }
      V((Z = Z.apply(I, d || [])).next())
    })
  };
  Object.defineProperty(FY, "__esModule", {
    value: !0
  });
  FY._makeDataAdapterResult = FY.DataAdapterCore = void 0;
  var Vb = q7(),
    bW4 = Ab(),
    Xb = O21(),
    HY = bA(),
    FO1 = m21(),
    gO1 = 10;
  class JO1 {
    constructor(I, d) {
      this._adapterName = I, this._cacheSuffix = d, this._options = null, this._sdkKey = null, this._lastModifiedStoreKey = `statsig.last_modified_time.${d}`, this._inMemoryCache = new KO1
    }
    attach(I, d) {
      this._sdkKey = I, this._options = d
    }
    getDataSync(I) {
      let d = I && Xb._normalizeUser(I, this._options),
        G = this._getCacheKey(d),
        Z = this._inMemoryCache.get(G, d);
      if (Z) return Z;
      let C = this._loadFromCache(G);
      if (C) return this._inMemoryCache.add(G, C), this._inMemoryCache.get(G, d);
      return null
    }
    setData(I, d) {
      let G = d && Xb._normalizeUser(d, this._options),
        Z = this._getCacheKey(G);
      this._inMemoryCache.add(Z, Yb("Bootstrap", I, null, G))
    }
    _getDataAsyncImpl(I, d, G) {
      return l21(this, void 0, void 0, function*() {
        if (!HY.Storage.isReady()) yield HY.Storage.isReadyResolver();
        let Z = I !== null && I !== void 0 ? I : this.getDataSync(d),
          C = [this._fetchAndPrepFromNetwork(Z, d, G)];
        if (G === null || G === void 0 ? void 0 : G.timeoutMs) C.push(new Promise((W) => setTimeout(W, G.timeoutMs)).then(() => {
          return Vb.Log.debug("Fetching latest value timed out"), null
        }));
        return yield Promise.race(C)
      })
    }
    _prefetchDataImpl(I, d) {
      return l21(this, void 0, void 0, function*() {
        let G = I && Xb._normalizeUser(I, this._options),
          Z = this._getCacheKey(G),
          C = yield this._getDataAsyncImpl(null, G, d);
        if (C) this._inMemoryCache.add(Z, Object.assign(Object.assign({}, C), {
          source: "Prefetch"
        }))
      })
    }
    _fetchAndPrepFromNetwork(I, d, G) {
      return l21(this, void 0, void 0, function*() {
        let Z = null;
        if (I && this._isCachedResultValidFor204(I, d)) Z = I.data;
        let C = yield this._fetchFromNetwork(Z, d, G);
        if (!C) return Vb.Log.debug("No response returned for latest value"), null;
        let W = FO1._typedJsonParse(C, "has_updates", "Response"),
          w = this._getSdkKey(),
          B = bW4.StableID.get(w),
          A = null;
        if ((W === null || W === void 0 ? void 0 : W.has_updates) === !0) A = Yb("Network", C, B, d);
        else if (Z && (W === null || W === void 0 ? void 0 : W.has_updates) === !1) A = Yb("NetworkNotModified", Z, B, d);
        else return null;
        let V = this._getCacheKey(d);
        return this._inMemoryCache.add(V, A), this._writeToCache(V, A), A
      })
    }
    _getSdkKey() {
      if (this._sdkKey != null) return this._sdkKey;
      return Vb.Log.error(`${this._adapterName} is not attached to a Client`), ""
    }
    _loadFromCache(I) {
      var d;
      let G = (d = HY.Storage.getItem) === null || d === void 0 ? void 0 : d.call(HY.Storage, I);
      if (G == null) return null;
      let Z = FO1._typedJsonParse(G, "source", "Cached Result");
      return Z ? Object.assign(Object.assign({}, Z), {
        source: "Cache"
      }) : null
    }
    _writeToCache(I, d) {
      HY.Storage.setItem(I, JSON.stringify(d)), this._runLocalStorageCacheEviction(I)
    }
    _runLocalStorageCacheEviction(I) {
      var d;
      let G = (d = HY._getObjectFromStorage(this._lastModifiedStoreKey)) !== null && d !== void 0 ? d : {};
      G[I] = Date.now();
      let Z = NO1(G, gO1);
      if (Z) delete G[Z], HY.Storage.removeItem(Z);
      HY._setObjectInStorage(this._lastModifiedStoreKey, G)
    }
  }
  FY.DataAdapterCore = JO1;

  function Yb(I, d, G, Z) {
    return {
      source: I,
      data: d,
      receivedAt: Date.now(),
      stableID: G,
      fullUserHash: Xb._getFullUserHash(Z)
    }
  }
  FY._makeDataAdapterResult = Yb;
  class KO1 {
    constructor() {
      this._data = {}
    }
    get(I, d) {
      var G;
      let Z = this._data[I],
        C = Z === null || Z === void 0 ? void 0 : Z.stableID,
        W = (G = d === null || d === void 0 ? void 0 : d.customIDs) === null || G === void 0 ? void 0 : G.stableID;
      if (W && C && W !== C) return Vb.Log.warn("'StatsigUser.customIDs.stableID' mismatch"), null;
      return Z
    }
    add(I, d) {
      let G = NO1(this._data, gO1 - 1);
      if (G) delete this._data[G];
      this._data[I] = d
    }
    merge(I) {
      this._data = Object.assign(Object.assign({}, this._data), I)
    }
  }

  function NO1(I, d) {
    let G = Object.keys(I);
    if (G.length <= d) return null;
    return G.reduce((Z, C) => {
      let W = I[Z],
        w = I[C];
      if (typeof W === "object" && typeof w === "object") return w.receivedAt < W.receivedAt ? C : Z;
      return w < W ? C : Z
    })
  }
})
// @from(Start 697291, End 697376)
fO1 = Y((QO1) => {
  Object.defineProperty(QO1, "__esModule", {
    value: !0
  })
})
// @from(Start 697382, End 697817)
_b = Y((RO1) => {
  Object.defineProperty(RO1, "__esModule", {
    value: !0
  });
  RO1.SDKType = void 0;
  var qO1 = {},
    Nz;
  RO1.SDKType = {
    _get: (I) => {
      var d;
      return ((d = qO1[I]) !== null && d !== void 0 ? d : "js-mono") + (Nz !== null && Nz !== void 0 ? Nz : "")
    },
    _setClientType(I, d) {
      qO1[I] = d
    },
    _setBindingType(I) {
      if (!Nz || Nz === "-react") Nz = "-" + I
    }
  }
})
// @from(Start 697823, End 702220)
b21 = Y((hA) => {
  var hW4 = hA && hA.__awaiter || function(I, d, G, Z) {
    function C(W) {
      return W instanceof G ? W : new G(function(w) {
        w(W)
      })
    }
    return new(G || (G = Promise))(function(W, w) {
      function B(X) {
        try {
          V(Z.next(X))
        } catch (_) {
          w(_)
        }
      }

      function A(X) {
        try {
          V(Z.throw(X))
        } catch (_) {
          w(_)
        }
      }

      function V(X) {
        X.done ? W(X.value) : C(X.value).then(B, A)
      }
      V((Z = Z.apply(I, d || [])).next())
    })
  };
  Object.defineProperty(hA, "__esModule", {
    value: !0
  });
  hA.ErrorBoundary = hA.EXCEPTION_ENDPOINT = void 0;
  var jW4 = q7(),
    kW4 = _b(),
    xW4 = ME();
  hA.EXCEPTION_ENDPOINT = "https://statsigapi.net/v1/sdk_exception";
  var EO1 = "[Statsig] UnknownError";
  class MO1 {
    constructor(I, d, G, Z) {
      this._sdkKey = I, this._options = d, this._emitter = G, this._lastSeenError = Z, this._seen = new Set
    }
    wrap(I) {
      try {
        let d = I;
        pW4(d).forEach((G) => {
          let Z = d[G];
          if ("$EB" in Z) return;
          d[G] = (...C) => {
            return this._capture(G, () => Z.apply(I, C))
          }, d[G].$EB = !0
        })
      } catch (d) {
        this._onError("eb:wrap", d)
      }
    }
    logError(I, d) {
      this._onError(I, d)
    }
    getLastSeenErrorAndReset() {
      let I = this._lastSeenError;
      return this._lastSeenError = void 0, I !== null && I !== void 0 ? I : null
    }
    attachErrorIfNoneExists(I) {
      if (this._lastSeenError) return;
      this._lastSeenError = vO1(I)
    }
    _capture(I, d) {
      try {
        let G = d();
        if (G && G instanceof Promise) return G.catch((Z) => this._onError(I, Z));
        return G
      } catch (G) {
        return this._onError(I, G), null
      }
    }
    _onError(I, d) {
      try {
        jW4.Log.warn(`Caught error in ${I}`, {
          error: d
        }), (() => hW4(this, void 0, void 0, function*() {
          var Z, C, W, w, B, A, V;
          let X = d ? d : Error(EO1),
            _ = X instanceof Error,
            F = _ ? X.name : "No Name",
            g = vO1(X);
          if (this._lastSeenError = g, this._seen.has(F)) return;
          if (this._seen.add(F), (C = (Z = this._options) === null || Z === void 0 ? void 0 : Z.networkConfig) === null || C === void 0 ? void 0 : C.preventAllNetworkTraffic) {
            (W = this._emitter) === null || W === void 0 || W.call(this, {
              name: "error",
              error: d,
              tag: I
            });
            return
          }
          let J = kW4.SDKType._get(this._sdkKey),
            K = xW4.StatsigMetadataProvider.get(),
            Q = _ ? X.stack : cW4(X),
            E = JSON.stringify(Object.assign({
              tag: I,
              exception: F,
              info: Q
            }, Object.assign(Object.assign({}, K), {
              sdkType: J
            })));
          yield((A = (B = (w = this._options) === null || w === void 0 ? void 0 : w.networkConfig) === null || B === void 0 ? void 0 : B.networkOverrideFunc) !== null && A !== void 0 ? A : fetch)(hA.EXCEPTION_ENDPOINT, {
            method: "POST",
            headers: {
              "STATSIG-API-KEY": this._sdkKey,
              "STATSIG-SDK-TYPE": String(J),
              "STATSIG-SDK-VERSION": String(K.sdkVersion),
              "Content-Type": "application/json"
            },
            body: E
          }), (V = this._emitter) === null || V === void 0 || V.call(this, {
            name: "error",
            error: d,
            tag: I
          })
        }))().then(() => {}).catch(() => {})
      } catch (G) {}
    }
  }
  hA.ErrorBoundary = MO1;

  function vO1(I) {
    if (I instanceof Error) return I;
    else if (typeof I === "string") return new Error(I);
    else return new Error("An unknown error occurred.")
  }

  function cW4(I) {
    try {
      return JSON.stringify(I)
    } catch (d) {
      return EO1
    }
  }

  function pW4(I) {
    let d = new Set,
      G = Object.getPrototypeOf(I);
    while (G && G !== Object.prototype) Object.getOwnPropertyNames(G).filter((Z) => typeof(G === null || G === void 0 ? void 0 : G[Z]) === "function").forEach((Z) => d.add(Z)), G = Object.getPrototypeOf(G);
    return Array.from(d)
  }
})
// @from(Start 702226, End 702311)
LO1 = Y((SO1) => {
  Object.defineProperty(SO1, "__esModule", {
    value: !0
  })
})
// @from(Start 702317, End 702402)
PO1 = Y((yO1) => {
  Object.defineProperty(yO1, "__esModule", {
    value: !0
  })
})
// @from(Start 702408, End 702493)
uO1 = Y(($O1) => {
  Object.defineProperty($O1, "__esModule", {
    value: !0
  })
})
// @from(Start 702499, End 703090)
h21 = Y((TO1) => {
  Object.defineProperty(TO1, "__esModule", {
    value: !0
  });
  TO1.createMemoKey = TO1.MemoPrefix = void 0;
  TO1.MemoPrefix = {
    _gate: "g",
    _dynamicConfig: "c",
    _experiment: "e",
    _layer: "l",
    _paramStore: "p"
  };
  var iW4 = new Set([]),
    nW4 = new Set(["userPersistedValues"]);

  function rW4(I, d, G) {
    let Z = `${I}|${d}`;
    if (!G) return Z;
    for (let C of Object.keys(G)) {
      if (nW4.has(C)) return;
      if (iW4.has(C)) Z += `|${C}=true`;
      else Z += `|${C}=${G[C]}`
    }
    return Z
  }
  TO1.createMemoKey = rW4
})
// @from(Start 703096, End 704987)
mO1 = Y((zz) => {
  var sW4 = zz && zz.__awaiter || function(I, d, G, Z) {
    function C(W) {
      return W instanceof G ? W : new G(function(w) {
        w(W)
      })
    }
    return new(G || (G = Promise))(function(W, w) {
      function B(X) {
        try {
          V(Z.next(X))
        } catch (_) {
          w(_)
        }
      }

      function A(X) {
        try {
          V(Z.throw(X))
        } catch (_) {
          w(_)
        }
      }

      function V(X) {
        X.done ? W(X.value) : C(X.value).then(B, A)
      }
      V((Z = Z.apply(I, d || [])).next())
    })
  };
  Object.defineProperty(zz, "__esModule", {
    value: !0
  });
  zz._fetchTxtRecords = void 0;
  var oW4 = new Uint8Array([0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 13, 102, 101, 97, 116, 117, 114, 101, 97, 115, 115, 101, 116, 115, 3, 111, 114, 103, 0, 0, 16, 0, 1]),
    eW4 = "https://cloudflare-dns.com/dns-query",
    tW4 = ["i", "e", "d"],
    Iw4 = 200;

  function dw4(I) {
    return sW4(this, void 0, void 0, function*() {
      let d = yield I(eW4, {
        method: "POST",
        headers: {
          "Content-Type": "application/dns-message",
          Accept: "application/dns-message"
        },
        body: oW4
      });
      if (!d.ok) {
        let C = new Error("Failed to fetch TXT records from DNS");
        throw C.name = "DnsTxtFetchError", C
      }
      let G = yield d.arrayBuffer(), Z = new Uint8Array(G);
      return Gw4(Z)
    })
  }
  zz._fetchTxtRecords = dw4;

  function Gw4(I) {
    let d = I.findIndex((Z, C) => C < Iw4 && String.fromCharCode(Z) === "=" && tW4.includes(String.fromCharCode(I[C - 1])));
    if (d === -1) {
      let Z = new Error("Failed to parse TXT records from DNS");
      throw Z.name = "DnsTxtParseError", Z
    }
    let G = "";
    for (let Z = d - 1; Z < I.length; Z++) G += String.fromCharCode(I[Z]);
    return G.split(",")
  }
})
// @from(Start 704993, End 710494)
cO1 = Y((gY) => {
  var lO1 = gY && gY.__awaiter || function(I, d, G, Z) {
    function C(W) {
      return W instanceof G ? W : new G(function(w) {
        w(W)
      })
    }
    return new(G || (G = Promise))(function(W, w) {
      function B(X) {
        try {
          V(Z.next(X))
        } catch (_) {
          w(_)
        }
      }

      function A(X) {
        try {
          V(Z.throw(X))
        } catch (_) {
          w(_)
        }
      }

      function V(X) {
        X.done ? W(X.value) : C(X.value).then(B, A)
      }
      V((Z = Z.apply(I, d || [])).next())
    })
  };
  Object.defineProperty(gY, "__esModule", {
    value: !0
  });
  gY._isDomainFailure = gY.NetworkFallbackResolver = void 0;
  var Zw4 = mO1(),
    Cw4 = Hz(),
    Ww4 = q7(),
    k21 = bA(),
    bO1 = 604800000,
    ww4 = 14400000;
  class jO1 {
    constructor(I) {
      var d;
      this._fallbackInfo = null, this._errorBoundary = null, this._dnsQueryCooldowns = {}, this._networkOverrideFunc = (d = I.networkConfig) === null || d === void 0 ? void 0 : d.networkOverrideFunc
    }
    setErrorBoundary(I) {
      this._errorBoundary = I
    }
    tryBumpExpiryTime(I, d) {
      var G;
      let Z = (G = this._fallbackInfo) === null || G === void 0 ? void 0 : G[d.endpoint];
      if (!Z) return;
      Z.expiryTime = Date.now() + bO1, j21(I, Object.assign(Object.assign({}, this._fallbackInfo), {
        [d.endpoint]: Z
      }))
    }
    getActiveFallbackUrl(I, d) {
      var G, Z;
      let C = this._fallbackInfo;
      if (C == null) C = (G = Bw4(I)) !== null && G !== void 0 ? G : {}, this._fallbackInfo = C;
      let W = C[d.endpoint];
      if (!W || Date.now() > ((Z = W.expiryTime) !== null && Z !== void 0 ? Z : 0)) return delete C[d.endpoint], this._fallbackInfo = C, j21(I, this._fallbackInfo), null;
      if (W.url) return W.url;
      return null
    }
    getFallbackFromProvided(I) {
      let d = hO1(I);
      if (d) return I.replace(d, "");
      return null
    }
    tryFetchUpdatedFallbackInfo(I, d, G, Z) {
      var C, W;
      return lO1(this, void 0, void 0, function*() {
        try {
          if (!kO1(G, Z)) return !1;
          let B = d.customUrl == null && d.fallbackUrls == null ? yield this._tryFetchFallbackUrlsFromNetwork(d): d.fallbackUrls, A = this._pickNewFallbackUrl((C = this._fallbackInfo) === null || C === void 0 ? void 0 : C[d.endpoint], B);
          if (!A) return !1;
          return this._updateFallbackInfoWithNewUrl(I, d.endpoint, A), !0
        } catch (w) {
          return (W = this._errorBoundary) === null || W === void 0 || W.logError("tryFetchUpdatedFallbackInfo", w), !1
        }
      })
    }
    _updateFallbackInfoWithNewUrl(I, d, G) {
      var Z, C, W;
      let w = {
          url: G,
          expiryTime: Date.now() + bO1,
          previous: []
        },
        B = (Z = this._fallbackInfo) === null || Z === void 0 ? void 0 : Z[d];
      if (B) w.previous.push(...B.previous);
      if (w.previous.length > 10) w.previous = [];
      let A = (W = (C = this._fallbackInfo) === null || C === void 0 ? void 0 : C[d]) === null || W === void 0 ? void 0 : W.url;
      if (A != null) w.previous.push(A);
      this._fallbackInfo = Object.assign(Object.assign({}, this._fallbackInfo), {
        [d]: w
      }), j21(I, this._fallbackInfo)
    }
    _tryFetchFallbackUrlsFromNetwork(I) {
      var d;
      return lO1(this, void 0, void 0, function*() {
        let G = this._dnsQueryCooldowns[I.endpoint];
        if (G && Date.now() < G) return null;
        this._dnsQueryCooldowns[I.endpoint] = Date.now() + ww4;
        let Z = [],
          C = yield Zw4._fetchTxtRecords((d = this._networkOverrideFunc) !== null && d !== void 0 ? d : fetch), W = hO1(I.defaultUrl);
        for (let w of C) {
          if (!w.startsWith(I.endpointDnsKey + "=")) continue;
          let B = w.split("=");
          if (B.length > 1) {
            let A = B[1];
            if (A.endsWith("/")) A = A.slice(0, -1);
            Z.push(`https://${A}${W}`)
          }
        }
        return Z
      })
    }
    _pickNewFallbackUrl(I, d) {
      var G;
      if (d == null) return null;
      let Z = new Set((G = I === null || I === void 0 ? void 0 : I.previous) !== null && G !== void 0 ? G : []),
        C = I === null || I === void 0 ? void 0 : I.url,
        W = null;
      for (let w of d) {
        let B = w.endsWith("/") ? w.slice(0, -1) : w;
        if (!Z.has(w) && B !== C) {
          W = B;
          break
        }
      }
      return W
    }
  }
  gY.NetworkFallbackResolver = jO1;

  function kO1(I, d) {
    var G;
    let Z = (G = I === null || I === void 0 ? void 0 : I.toLowerCase()) !== null && G !== void 0 ? G : "";
    return d || Z.includes("uncaught exception") || Z.includes("failed to fetch") || Z.includes("networkerror when attempting to fetch resource")
  }
  gY._isDomainFailure = kO1;

  function xO1(I) {
    return `statsig.network_fallback.${Cw4._DJB2(I)}`
  }

  function j21(I, d) {
    let G = xO1(I);
    if (!d || Object.keys(d).length === 0) {
      k21.Storage.removeItem(G);
      return
    }
    k21.Storage.setItem(G, JSON.stringify(d))
  }

  function Bw4(I) {
    let d = xO1(I),
      G = k21.Storage.getItem(d);
    if (!G) return null;
    try {
      return JSON.parse(G)
    } catch (Z) {
      return Ww4.Log.error("Failed to parse FallbackInfo"), null
    }
  }

  function hO1(I) {
    try {
      return new URL(I).pathname
    } catch (d) {
      return null
    }
  }
})
// @from(Start 710500, End 712536)
Hb = Y((oO1) => {
  Object.defineProperty(oO1, "__esModule", {
    value: !0
  });
  oO1.StatsigSession = oO1.SessionID = void 0;
  var Aw4 = qE(),
    Vw4 = q7(),
    iO1 = bA(),
    nO1 = wb(),
    rO1 = 1800000,
    aO1 = 14400000,
    Db = {};
  oO1.SessionID = {
    get: (I) => {
      return oO1.StatsigSession.get(I).data.sessionID
    }
  };
  oO1.StatsigSession = {
    get: (I) => {
      if (Db[I] == null) Db[I] = Xw4(I);
      let d = Db[I];
      return _w4(d)
    },
    overrideInitialSessionID: (I, d) => {
      Db[d] = Yw4(I, d)
    }
  };

  function Xw4(I) {
    let d = gw4(I),
      G = Date.now();
    if (!d) d = {
      sessionID: nO1.getUUID(),
      startTime: G,
      lastUpdate: G
    };
    return {
      data: d,
      sdkKey: I
    }
  }

  function Yw4(I, d) {
    let G = Date.now();
    return {
      data: {
        sessionID: I,
        startTime: G,
        lastUpdate: G
      },
      sdkKey: d
    }
  }

  function _w4(I) {
    let d = Date.now(),
      G = I.data;
    if (Dw4(G) || Hw4(G)) G.sessionID = nO1.getUUID(), G.startTime = d;
    G.lastUpdate = d, Fw4(G, I.sdkKey), clearTimeout(I.idleTimeoutID), clearTimeout(I.ageTimeoutID);
    let Z = d - G.startTime,
      C = I.sdkKey;
    return I.idleTimeoutID = pO1(C, rO1), I.ageTimeoutID = pO1(C, aO1 - Z), I
  }

  function pO1(I, d) {
    return setTimeout(() => {
      let G = __STATSIG__ === null || __STATSIG__ === void 0 ? void 0 : __STATSIG__.instance(I);
      if (G) G.$emt({
        name: "session_expired"
      })
    }, d)
  }

  function Dw4({
    lastUpdate: I
  }) {
    return Date.now() - I > rO1
  }

  function Hw4({
    startTime: I
  }) {
    return Date.now() - I > aO1
  }

  function sO1(I) {
    return `statsig.session_id.${Aw4._getStorageKey(I)}`
  }

  function Fw4(I, d) {
    let G = sO1(d);
    try {
      iO1._setObjectInStorage(G, I)
    } catch (Z) {
      Vw4.Log.warn("Failed to save SessionID")
    }
  }

  function gw4(I) {
    let d = sO1(I);
    return iO1._getObjectFromStorage(d)
  }
})
// @from(Start 712542, End 712709)
c21 = Y((eO1) => {
  Object.defineProperty(eO1, "__esModule", {
    value: !0
  });
  eO1.ErrorTag = void 0;
  eO1.ErrorTag = {
    NetworkError: "NetworkError"
  }
})
// @from(Start 712715, End 722070)
Bm1 = Y((fz) => {
  var Qz = fz && fz.__awaiter || function(I, d, G, Z) {
    function C(W) {
      return W instanceof G ? W : new G(function(w) {
        w(W)
      })
    }
    return new(G || (G = Promise))(function(W, w) {
      function B(X) {
        try {
          V(Z.next(X))
        } catch (_) {
          w(_)
        }
      }

      function A(X) {
        try {
          V(Z.throw(X))
        } catch (_) {
          w(_)
        }
      }

      function V(X) {
        X.done ? W(X.value) : C(X.value).then(B, A)
      }
      V((Z = Z.apply(I, d || [])).next())
    })
  };
  Object.defineProperty(fz, "__esModule", {
    value: !0
  });
  fz.NetworkCore = void 0;
  hF();
  var Kw4 = hF(),
    p21 = rl(),
    Fb = q7(),
    fw = RE(),
    Nw4 = cO1(),
    Im1 = _b(),
    zw4 = jF(),
    dm1 = Hb(),
    Qw4 = Ab(),
    fw4 = c21(),
    Gm1 = ME(),
    qw4 = Cb(),
    Rw4 = 1e4,
    Uw4 = 500,
    vw4 = 30000,
    Ew4 = 1000,
    Wm1 = 50,
    Mw4 = Wm1 / Ew4,
    Sw4 = new Set([408, 500, 502, 503, 504, 522, 524, 599]);
  class wm1 {
    constructor(I, d) {
      if (this._emitter = d, this._errorBoundary = null, this._timeout = Rw4, this._netConfig = {}, this._options = {}, this._leakyBucket = {}, this._lastUsedInitUrl = null, I) this._options = I;
      if (this._options.networkConfig) this._netConfig = this._options.networkConfig;
      if (this._netConfig.networkTimeoutMs) this._timeout = this._netConfig.networkTimeoutMs;
      this._fallbackResolver = new Nw4.NetworkFallbackResolver(this._options)
    }
    setErrorBoundary(I) {
      this._errorBoundary = I, this._errorBoundary.wrap(this), this._errorBoundary.wrap(this._fallbackResolver), this._fallbackResolver.setErrorBoundary(I)
    }
    isBeaconSupported() {
      return typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function"
    }
    getLastUsedInitUrlAndReset() {
      let I = this._lastUsedInitUrl;
      return this._lastUsedInitUrl = null, I
    }
    beacon(I) {
      return Qz(this, void 0, void 0, function*() {
        if (!Zm1(I)) return !1;
        let d = this._getInternalRequestArgs("POST", I),
          G = yield this._getPopulatedBody(d, I.data), Z = yield this._getPopulatedURL(d), C = navigator;
        return C.sendBeacon.bind(C)(Z, G)
      })
    }
    post(I) {
      return Qz(this, void 0, void 0, function*() {
        let d = this._getInternalRequestArgs("POST", I);
        if (d.body = yield this._getPopulatedBody(d, I.data), I.isStatsigEncodable) d.body = this._attemptToEncodeString(d, d.body);
        return this._sendRequest(d)
      })
    }
    get(I) {
      let d = this._getInternalRequestArgs("GET", I);
      return this._sendRequest(d)
    }
    _sendRequest(I) {
      var d, G, Z, C;
      return Qz(this, void 0, void 0, function*() {
        if (!Zm1(I)) return null;
        if (this._netConfig.preventAllNetworkTraffic) return null;
        let {
          method: W,
          body: w,
          retries: B,
          attempt: A
        } = I, V = I.urlConfig.endpoint;
        if (this._isRateLimited(V)) return Fb.Log.warn(`Request to ${V} was blocked because you are making requests too frequently.`), null;
        let X = A !== null && A !== void 0 ? A : 1,
          _ = typeof AbortController !== "undefined" ? new AbortController : null,
          F = setTimeout(() => {
            _ === null || _ === void 0 || _.abort(`Timeout of ${this._timeout}ms expired.`)
          }, this._timeout),
          g = yield this._getPopulatedURL(I), J = null, K = qw4._isUnloading();
        try {
          let Q = {
            method: W,
            body: w,
            headers: Object.assign({}, I.headers),
            signal: _ === null || _ === void 0 ? void 0 : _.signal,
            priority: I.priority,
            keepalive: K
          };
          Pw4(I, X);
          let E = this._leakyBucket[V];
          if (E) E.lastRequestTime = Date.now(), this._leakyBucket[V] = E;
          if (J = yield((d = this._netConfig.networkOverrideFunc) !== null && d !== void 0 ? d : fetch)(g, Q), clearTimeout(F), !J.ok) {
            let $ = yield J.text().catch(() => "No Text"), h = new Error(`NetworkError: ${g} ${$}`);
            throw h.name = "NetworkError", h
          }
          let P = yield J.text();
          return Cm1(I, J, X, P), this._fallbackResolver.tryBumpExpiryTime(I.sdkKey, I.urlConfig), {
            body: P,
            code: J.status
          }
        } catch (Q) {
          let E = Lw4(_, Q),
            S = yw4(_);
          if (Cm1(I, J, X, "", Q), yield this._fallbackResolver.tryFetchUpdatedFallbackInfo(I.sdkKey, I.urlConfig, E, S)) I.fallbackUrl = this._fallbackResolver.getActiveFallbackUrl(I.sdkKey, I.urlConfig);
          if (!B || X > B || !Sw4.has((G = J === null || J === void 0 ? void 0 : J.status) !== null && G !== void 0 ? G : 500)) {
            (Z = this._emitter) === null || Z === void 0 || Z.call(this, {
              name: "error",
              error: Q,
              tag: fw4.ErrorTag.NetworkError,
              requestArgs: I
            });
            let $ = `A networking error occurred during ${W} request to ${g}.`;
            return Fb.Log.error($, E, Q), (C = this._errorBoundary) === null || C === void 0 || C.attachErrorIfNoneExists($), null
          }
          return yield $w4(X), this._sendRequest(Object.assign(Object.assign({}, I), {
            retries: B,
            attempt: X + 1
          }))
        }
      })
    }
    _isRateLimited(I) {
      var d;
      let G = Date.now(),
        Z = (d = this._leakyBucket[I]) !== null && d !== void 0 ? d : {
          count: 0,
          lastRequestTime: G
        },
        C = G - Z.lastRequestTime,
        W = Math.floor(C * Mw4);
      if (Z.count = Math.max(0, Z.count - W), Z.count >= Wm1) return !0;
      return Z.count += 1, Z.lastRequestTime = G, this._leakyBucket[I] = Z, !1
    }
    _getPopulatedURL(I) {
      var d;
      return Qz(this, void 0, void 0, function*() {
        let G = (d = I.fallbackUrl) !== null && d !== void 0 ? d : I.urlConfig.getUrl();
        if (I.urlConfig.endpoint === fw.Endpoint._initialize || I.urlConfig.endpoint === fw.Endpoint._download_config_specs) this._lastUsedInitUrl = G;
        let Z = Object.assign({
            [fw.NetworkParam.SdkKey]: I.sdkKey,
            [fw.NetworkParam.SdkType]: Im1.SDKType._get(I.sdkKey),
            [fw.NetworkParam.SdkVersion]: Gm1.SDK_VERSION,
            [fw.NetworkParam.Time]: String(Date.now()),
            [fw.NetworkParam.SessionID]: dm1.SessionID.get(I.sdkKey)
          }, I.params),
          C = Object.keys(Z).map((W) => {
            return `${encodeURIComponent(W)}=${encodeURIComponent(Z[W])}`
          }).join("&");
        return `${G}${C?`?${C}`:""}`
      })
    }
    _getPopulatedBody(I, d) {
      return Qz(this, void 0, void 0, function*() {
        let {
          sdkKey: G,
          fallbackUrl: Z
        } = I, C = Qw4.StableID.get(G), W = dm1.SessionID.get(G), w = Im1.SDKType._get(G);
        return JSON.stringify(Object.assign(Object.assign({}, d), {
          statsigMetadata: Object.assign(Object.assign({}, Gm1.StatsigMetadataProvider.get()), {
            stableID: C,
            sessionID: W,
            sdkType: w,
            fallbackUrl: Z
          })
        }))
      })
    }
    _attemptToEncodeString(I, d) {
      var G, Z;
      let C = zw4._getWindowSafe();
      if (this._options.disableStatsigEncoding || Kw4._getStatsigGlobalFlag("no-encode") != null || !(C === null || C === void 0 ? void 0 : C.btoa)) return d;
      try {
        let W = (G = C.btoa(d).split("").reverse().join("")) !== null && G !== void 0 ? G : d;
        return I.params = Object.assign(Object.assign({}, (Z = I.params) !== null && Z !== void 0 ? Z : {}), {
          [fw.NetworkParam.StatsigEncoded]: "1"
        }), W
      } catch (W) {
        return Fb.Log.warn(`Request encoding failed for ${I.urlConfig.getUrl()}`), d
      }
    }
    _getInternalRequestArgs(I, d) {
      let G = this._fallbackResolver.getActiveFallbackUrl(d.sdkKey, d.urlConfig);
      return Object.assign(Object.assign({}, d), {
        method: I,
        fallbackUrl: G
      })
    }
  }
  fz.NetworkCore = wm1;
  var Zm1 = (I) => {
    if (!I.sdkKey) return Fb.Log.warn("Unable to make request without an SDK key"), !1;
    return !0
  };

  function Lw4(I, d) {
    if ((I === null || I === void 0 ? void 0 : I.signal.aborted) && typeof I.signal.reason === "string") return I.signal.reason;
    if (typeof d === "string") return d;
    if (d instanceof Error) return `${d.name}: ${d.message}`;
    return "Unknown Error"
  }

  function yw4(I) {
    return (I === null || I === void 0 ? void 0 : I.signal.aborted) && typeof I.signal.reason === "string" && I.signal.reason.includes("Timeout") || !1
  }

  function Pw4(I, d) {
    if (I.urlConfig.endpoint !== fw.Endpoint._initialize) return;
    p21.Diagnostics._markInitNetworkReqStart(I.sdkKey, {
      attempt: d
    })
  }

  function Cm1(I, d, G, Z, C) {
    if (I.urlConfig.endpoint !== fw.Endpoint._initialize) return;
    p21.Diagnostics._markInitNetworkReqEnd(I.sdkKey, p21.Diagnostics._getDiagnosticsData(d, G, Z, C))
  }

  function $w4(I) {
    return Qz(this, void 0, void 0, function*() {
      yield new Promise((d) => setTimeout(d, Math.min(Uw4 * (I * I), vw4)))
    })
  }
})
// @from(Start 722076, End 722161)
Vm1 = Y((Am1) => {
  Object.defineProperty(Am1, "__esModule", {
    value: !0
  })
})
// @from(Start 722167, End 722252)
Ym1 = Y((Xm1) => {
  Object.defineProperty(Xm1, "__esModule", {
    value: !0
  })
})
// @from(Start 722258, End 727083)
Dm1 = Y((qz) => {
  var uw4 = qz && qz.__awaiter || function(I, d, G, Z) {
    function C(W) {
      return W instanceof G ? W : new G(function(w) {
        w(W)
      })
    }
    return new(G || (G = Promise))(function(W, w) {
      function B(X) {
        try {
          V(Z.next(X))
        } catch (_) {
          w(_)
        }
      }

      function A(X) {
        try {
          V(Z.throw(X))
        } catch (_) {
          w(_)
        }
      }

      function V(X) {
        X.done ? W(X.value) : C(X.value).then(B, A)
      }
      V((Z = Z.apply(I, d || [])).next())
    })
  };
  Object.defineProperty(qz, "__esModule", {
    value: !0
  });
  qz.StatsigClientBase = void 0;
  hF();
  var Tw4 = hF(),
    Ow4 = b21(),
    mw4 = u21(),
    i21 = q7(),
    lw4 = h21(),
    bw4 = jF(),
    hw4 = Hb(),
    gb = bA(),
    jw4 = 3000;
  class _m1 {
    constructor(I, d, G, Z) {
      var C;
      this.loadingStatus = "Uninitialized", this._initializePromise = null, this._listeners = {};
      let W = this.$emt.bind(this);
      (Z === null || Z === void 0 ? void 0 : Z.logLevel) != null && (i21.Log.level = Z.logLevel), (Z === null || Z === void 0 ? void 0 : Z.disableStorage) && gb.Storage._setDisabled(!0), (Z === null || Z === void 0 ? void 0 : Z.initialSessionID) && hw4.StatsigSession.overrideInitialSessionID(Z.initialSessionID, I), (Z === null || Z === void 0 ? void 0 : Z.storageProvider) && gb.Storage._setProvider(Z.storageProvider), this._sdkKey = I, this._options = Z !== null && Z !== void 0 ? Z : {}, this._memoCache = {}, this.overrideAdapter = (C = Z === null || Z === void 0 ? void 0 : Z.overrideAdapter) !== null && C !== void 0 ? C : null, this._logger = new mw4.EventLogger(I, W, G, Z), this._errorBoundary = new Ow4.ErrorBoundary(I, Z, W), this._errorBoundary.wrap(this), this._errorBoundary.wrap(d), this._errorBoundary.wrap(this._logger), G.setErrorBoundary(this._errorBoundary), this.dataAdapter = d, this.dataAdapter.attach(I, Z), this.storageProvider = gb.Storage, this._primeReadyRipcord(), kw4(I, this)
    }
    updateRuntimeOptions(I) {
      if (I.disableLogging != null) this._options.disableLogging = I.disableLogging, this._logger.setLoggingDisabled(I.disableLogging);
      if (I.disableStorage != null) this._options.disableStorage = I.disableStorage, gb.Storage._setDisabled(I.disableStorage)
    }
    flush() {
      return this._logger.flush()
    }
    shutdown() {
      return uw4(this, void 0, void 0, function*() {
        this.$emt({
          name: "pre_shutdown"
        }), this._setStatus("Uninitialized", null), this._initializePromise = null, yield this._logger.stop()
      })
    }
    on(I, d) {
      if (!this._listeners[I]) this._listeners[I] = [];
      this._listeners[I].push(d)
    }
    off(I, d) {
      if (this._listeners[I]) {
        let G = this._listeners[I].indexOf(d);
        if (G !== -1) this._listeners[I].splice(G, 1)
      }
    }
    $on(I, d) {
      d.__isInternal = !0, this.on(I, d)
    }
    $emt(I) {
      var d;
      let G = (Z) => {
        try {
          Z(I)
        } catch (C) {
          if (Z.__isInternal === !0) {
            this._errorBoundary.logError(`__emit:${I.name}`, C);
            return
          }
          i21.Log.error("An error occurred in a StatsigClientEvent listener. This is not an issue with Statsig.", I)
        }
      };
      if (this._listeners[I.name]) this._listeners[I.name].forEach((Z) => G(Z));
      (d = this._listeners["*"]) === null || d === void 0 || d.forEach(G)
    }
    _setStatus(I, d) {
      this.loadingStatus = I, this._memoCache = {}, this.$emt({
        name: "values_updated",
        status: I,
        values: d
      })
    }
    _enqueueExposure(I, d, G) {
      if ((G === null || G === void 0 ? void 0 : G.disableExposureLog) === !0) {
        this._logger.incrementNonExposureCount(I);
        return
      }
      this._logger.enqueue(d)
    }
    _memoize(I, d) {
      return (G, Z) => {
        if (this._options.disableEvaluationMemoization) return d(G, Z);
        let C = lw4.createMemoKey(I, G, Z);
        if (!C) return d(G, Z);
        if (!(C in this._memoCache)) {
          if (Object.keys(this._memoCache).length >= jw4) this._memoCache = {};
          this._memoCache[C] = d(G, Z)
        }
        return this._memoCache[C]
      }
    }
  }
  qz.StatsigClientBase = _m1;

  function kw4(I, d) {
    var G;
    if (bw4._isServerEnv()) return;
    let Z = Tw4._getStatsigGlobal(),
      C = (G = Z.instances) !== null && G !== void 0 ? G : {},
      W = d;
    if (C[I] != null) i21.Log.warn("Creating multiple Statsig clients with the same SDK key can lead to unexpected behavior. Multi-instance support requires different SDK keys.");
    if (C[I] = W, !Z.firstInstance) Z.firstInstance = W;
    Z.instances = C, __STATSIG__ = Z
  }
})
// @from(Start 727089, End 727262)
gm1 = Y((Hm1) => {
  Object.defineProperty(Hm1, "__esModule", {
    value: !0
  });
  Hm1.DataAdapterCachePrefix = void 0;
  Hm1.DataAdapterCachePrefix = "statsig.cached"
})
// @from(Start 727268, End 727353)
Km1 = Y((Jm1) => {
  Object.defineProperty(Jm1, "__esModule", {
    value: !0
  })
})
// @from(Start 727359, End 727444)
zm1 = Y((Nm1) => {
  Object.defineProperty(Nm1, "__esModule", {
    value: !0
  })
})
// @from(Start 727450, End 729877)
Rm1 = Y((fm1) => {
  Object.defineProperty(fm1, "__esModule", {
    value: !0
  });
  fm1._makeTypedGet = fm1._mergeOverride = fm1._makeLayer = fm1._makeExperiment = fm1._makeDynamicConfig = fm1._makeFeatureGate = void 0;
  var xw4 = q7(),
    cw4 = al(),
    pw4 = "default";

  function n21(I, d, G, Z) {
    var C;
    return {
      name: I,
      details: d,
      ruleID: (C = G === null || G === void 0 ? void 0 : G.rule_id) !== null && C !== void 0 ? C : pw4,
      __evaluation: G,
      value: Z
    }
  }

  function iw4(I, d, G) {
    return n21(I, d, G, (G === null || G === void 0 ? void 0 : G.value) === !0)
  }
  fm1._makeFeatureGate = iw4;

  function Qm1(I, d, G) {
    var Z;
    let C = (Z = G === null || G === void 0 ? void 0 : G.value) !== null && Z !== void 0 ? Z : {};
    return Object.assign(Object.assign({}, n21(I, d, G, C)), {
      get: Jb(I, G === null || G === void 0 ? void 0 : G.value)
    })
  }
  fm1._makeDynamicConfig = Qm1;

  function nw4(I, d, G) {
    var Z;
    let C = Qm1(I, d, G);
    return Object.assign(Object.assign({}, C), {
      groupName: (Z = G === null || G === void 0 ? void 0 : G.group_name) !== null && Z !== void 0 ? Z : null
    })
  }
  fm1._makeExperiment = nw4;

  function rw4(I, d, G, Z) {
    var C, W;
    return Object.assign(Object.assign({}, n21(I, d, G, void 0)), {
      get: Jb(I, G === null || G === void 0 ? void 0 : G.value, Z),
      groupName: (C = G === null || G === void 0 ? void 0 : G.group_name) !== null && C !== void 0 ? C : null,
      __value: (W = G === null || G === void 0 ? void 0 : G.value) !== null && W !== void 0 ? W : {}
    })
  }
  fm1._makeLayer = rw4;

  function aw4(I, d, G, Z) {
    return Object.assign(Object.assign(Object.assign({}, I), d), {
      get: Jb(I.name, G, Z)
    })
  }
  fm1._mergeOverride = aw4;

  function Jb(I, d, G) {
    return (Z, C) => {
      var W;
      let w = (W = d === null || d === void 0 ? void 0 : d[Z]) !== null && W !== void 0 ? W : null;
      if (w == null) return C !== null && C !== void 0 ? C : null;
      if (C != null && !cw4._isTypeMatch(w, C)) return xw4.Log.warn(`Parameter type mismatch. '${I}.${Z}' was found to be type '${typeof w}' but fallback/return type is '${typeof C}'. See https://docs.statsig.com/client/javascript-sdk/#typed-getters`), C !== null && C !== void 0 ? C : null;
      return G === null || G === void 0 || G(Z), w
    }
  }
  fm1._makeTypedGet = Jb
})
// @from(Start 729883, End 729968)
vm1 = Y((Um1) => {
  Object.defineProperty(Um1, "__esModule", {
    value: !0
  })
})
// @from(Start 729974, End 730543)
Sm1 = Y((Em1) => {
  Object.defineProperty(Em1, "__esModule", {
    value: !0
  });
  Em1.UPDATE_DETAIL_ERROR_MESSAGES = Em1.createUpdateDetails = void 0;
  var dB4 = (I, d, G, Z, C, W) => {
    return {
      duration: G,
      source: d,
      success: I,
      error: Z,
      sourceUrl: C,
      warnings: W
    }
  };
  Em1.createUpdateDetails = dB4;
  Em1.UPDATE_DETAIL_ERROR_MESSAGES = {
    NO_NETWORK_DATA: "No data was returned from the network. This may be due to a network timeout if a timeout value was specified in the options or ad blocker error."
  }
})
// @from(Start 730549, End 730899)
$m1 = Y((ym1) => {
  Object.defineProperty(ym1, "__esModule", {
    value: !0
  });
  ym1.SDKFlags = void 0;
  var Lm1 = {};
  ym1.SDKFlags = {
    setFlags: (I, d) => {
      Lm1[I] = d
    },
    get: (I, d) => {
      var G, Z;
      return (Z = (G = Lm1[I]) === null || G === void 0 ? void 0 : G[d]) !== null && Z !== void 0 ? Z : !1
    }
  }
})
// @from(Start 730905, End 733094)
JY = Y((n2) => {
  var ZB4 = n2 && n2.__createBinding || (Object.create ? function(I, d, G, Z) {
      if (Z === void 0) Z = G;
      var C = Object.getOwnPropertyDescriptor(d, G);
      if (!C || ("get" in C ? !d.__esModule : C.writable || C.configurable)) C = {
        enumerable: !0,
        get: function() {
          return d[G]
        }
      };
      Object.defineProperty(I, Z, C)
    } : function(I, d, G, Z) {
      if (Z === void 0) Z = G;
      I[Z] = d[G]
    }),
    l4 = n2 && n2.__exportStar || function(I, d) {
      for (var G in I)
        if (G !== "default" && !Object.prototype.hasOwnProperty.call(d, G)) ZB4(d, I, G)
    };
  Object.defineProperty(n2, "__esModule", {
    value: !0
  });
  n2.Storage = n2.Log = n2.EventLogger = n2.Diagnostics = void 0;
  hF();
  var CB4 = rl();
  Object.defineProperty(n2, "Diagnostics", {
    enumerable: !0,
    get: function() {
      return CB4.Diagnostics
    }
  });
  var WB4 = u21();
  Object.defineProperty(n2, "EventLogger", {
    enumerable: !0,
    get: function() {
      return WB4.EventLogger
    }
  });
  var um1 = q7();
  Object.defineProperty(n2, "Log", {
    enumerable: !0,
    get: function() {
      return um1.Log
    }
  });
  var wB4 = ME(),
    BB4 = bA();
  Object.defineProperty(n2, "Storage", {
    enumerable: !0,
    get: function() {
      return BB4.Storage
    }
  });
  l4(hF(), n2);
  l4(qE(), n2);
  l4(ZO1(), n2);
  l4(zO1(), n2);
  l4(rl(), n2);
  l4(fO1(), n2);
  l4(b21(), n2);
  l4(LO1(), n2);
  l4(PO1(), n2);
  l4(Hz(), n2);
  l4(uO1(), n2);
  l4(q7(), n2);
  l4(h21(), n2);
  l4(RE(), n2);
  l4(Bm1(), n2);
  l4(Vm1(), n2);
  l4(Ym1(), n2);
  l4(jF(), n2);
  l4(_b(), n2);
  l4(Hb(), n2);
  l4(Ab(), n2);
  l4(Dm1(), n2);
  l4(c21(), n2);
  l4(gm1(), n2);
  l4(v21(), n2);
  l4(ME(), n2);
  l4(Km1(), n2);
  l4(zm1(), n2);
  l4(Rm1(), n2);
  l4(vm1(), n2);
  l4(O21(), n2);
  l4(bA(), n2);
  l4(m21(), n2);
  l4(al(), n2);
  l4(S21(), n2);
  l4(wb(), n2);
  l4(Cb(), n2);
  l4(Sm1(), n2);
  l4($m1(), n2);
  __STATSIG__ = Object.assign(Object.assign({}, __STATSIG__ !== null && __STATSIG__ !== void 0 ? __STATSIG__ : {}), {
    Log: um1.Log,
    SDK_VERSION: wB4.SDK_VERSION
  })
})
// @from(Start 733100, End 737057)
mm1 = Y((Om1) => {
  Object.defineProperty(Om1, "__esModule", {
    value: !0
  });
  var KY = JY();
  class Tm1 {
    constructor(I) {
      this._sdkKey = I, this._rawValues = null, this._values = null, this._source = "Uninitialized", this._lcut = 0, this._receivedAt = 0, this._bootstrapMetadata = null, this._warnings = new Set
    }
    reset() {
      this._values = null, this._rawValues = null, this._source = "Loading", this._lcut = 0, this._receivedAt = 0, this._bootstrapMetadata = null
    }
    finalize() {
      if (this._values) return;
      this._source = "NoValues"
    }
    getValues() {
      return this._rawValues ? KY._typedJsonParse(this._rawValues, "has_updates", "EvaluationStoreValues") : null
    }
    setValues(I, d) {
      if (!I) return !1;
      let G = KY._typedJsonParse(I.data, "has_updates", "EvaluationResponse");
      if (G == null) return !1;
      if (this._source = I.source, (G === null || G === void 0 ? void 0 : G.has_updates) !== !0) return !0;
      if (this._rawValues = I.data, this._lcut = G.time, this._receivedAt = I.receivedAt, this._values = G, this._bootstrapMetadata = this._extractBootstrapMetadata(I.source, G), I.source && G.user) this._setWarningState(d, G);
      if (G.sdk_flags) KY.SDKFlags.setFlags(this._sdkKey, G.sdk_flags);
      else KY.SDKFlags.setFlags(this._sdkKey, {});
      return !0
    }
    getWarnings() {
      if (this._warnings.size === 0) return;
      return Array.from(this._warnings)
    }
    getGate(I) {
      var d;
      return this._getDetailedStoreResult((d = this._values) === null || d === void 0 ? void 0 : d.feature_gates, I)
    }
    getConfig(I) {
      var d;
      return this._getDetailedStoreResult((d = this._values) === null || d === void 0 ? void 0 : d.dynamic_configs, I)
    }
    getLayer(I) {
      var d;
      return this._getDetailedStoreResult((d = this._values) === null || d === void 0 ? void 0 : d.layer_configs, I)
    }
    getParamStore(I) {
      var d;
      return this._getDetailedStoreResult((d = this._values) === null || d === void 0 ? void 0 : d.param_stores, I)
    }
    getSource() {
      return this._source
    }
    _extractBootstrapMetadata(I, d) {
      if (I !== "Bootstrap") return null;
      let G = {};
      if (d.user) G.user = d.user;
      if (d.sdkInfo) G.generatorSDKInfo = d.sdkInfo;
      return G.lcut = d.time, G
    }
    _getDetailedStoreResult(I, d) {
      let G = null;
      if (I) G = I[d] ? I[d] : I[KY._DJB2(d)];
      return {
        result: G,
        details: this._getDetails(G == null)
      }
    }
    _setWarningState(I, d) {
      var G;
      let Z = KY.StableID.get(this._sdkKey);
      if (((G = I.customIDs) === null || G === void 0 ? void 0 : G.stableID) !== Z) {
        this._warnings.add("StableIDMismatch");
        return
      }
      if ("user" in d) {
        let C = d.user;
        if (KY._getFullUserHash(I) !== KY._getFullUserHash(C)) this._warnings.add("PartialUserMatch")
      }
    }
    getCurrentSourceDetails() {
      if (this._source === "Uninitialized" || this._source === "NoValues") return {
        reason: this._source
      };
      let I = {
        reason: this._source,
        lcut: this._lcut,
        receivedAt: this._receivedAt
      };
      if (this._warnings.size > 0) I.warnings = Array.from(this._warnings);
      return I
    }
    _getDetails(I) {
      var d, G;
      let Z = this.getCurrentSourceDetails(),
        C = Z.reason,
        W = (d = Z.warnings) !== null && d !== void 0 ? d : [];
      if (this._source === "Bootstrap" && W.length > 0) C = C + W[0];
      if (C !== "Uninitialized" && C !== "NoValues") C = `${C}:${I?"Unrecognized":"Recognized"}`;
      let w = this._source === "Bootstrap" ? (G = this._bootstrapMetadata) !== null && G !== void 0 ? G : void 0 : void 0;
      if (w) Z.bootstrapMetadata = w;
      return Object.assign(Object.assign({}, Z), {
        reason: C
      })
    }
  }
  Om1.default = Tm1
})
// @from(Start 737063, End 738553)
jm1 = Y((bm1) => {
  Object.defineProperty(bm1, "__esModule", {
    value: !0
  });
  bm1._resolveDeltasResponse = void 0;
  var lm1 = JY(),
    VB4 = 2;

  function XB4(I, d) {
    let G = lm1._typedJsonParse(d, "checksum", "DeltasEvaluationResponse");
    if (!G) return {
      hadBadDeltaChecksum: !0
    };
    let Z = YB4(I, G),
      C = _B4(Z),
      W = lm1._DJB2Object({
        feature_gates: C.feature_gates,
        dynamic_configs: C.dynamic_configs,
        layer_configs: C.layer_configs
      }, VB4);
    if (W !== G.checksumV2) return {
      hadBadDeltaChecksum: !0,
      badChecksum: W,
      badMergedConfigs: C,
      badFullResponse: G.deltas_full_response
    };
    return JSON.stringify(C)
  }
  bm1._resolveDeltasResponse = XB4;

  function YB4(I, d) {
    return Object.assign(Object.assign(Object.assign({}, I), d), {
      feature_gates: Object.assign(Object.assign({}, I.feature_gates), d.feature_gates),
      layer_configs: Object.assign(Object.assign({}, I.layer_configs), d.layer_configs),
      dynamic_configs: Object.assign(Object.assign({}, I.dynamic_configs), d.dynamic_configs)
    })
  }

  function _B4(I) {
    let d = I;
    return r21(I.deleted_gates, d.feature_gates), delete d.deleted_gates, r21(I.deleted_configs, d.dynamic_configs), delete d.deleted_configs, r21(I.deleted_layers, d.layer_configs), delete d.deleted_layers, d
  }

  function r21(I, d) {
    I === null || I === void 0 || I.forEach((G) => {
      delete d[G]
    })
  }
})
// @from(Start 738559, End 741442)
a21 = Y((SE) => {
  var km1 = SE && SE.__awaiter || function(I, d, G, Z) {
    function C(W) {
      return W instanceof G ? W : new G(function(w) {
        w(W)
      })
    }
    return new(G || (G = Promise))(function(W, w) {
      function B(X) {
        try {
          V(Z.next(X))
        } catch (_) {
          w(_)
        }
      }

      function A(X) {
        try {
          V(Z.throw(X))
        } catch (_) {
          w(_)
        }
      }

      function V(X) {
        X.done ? W(X.value) : C(X.value).then(B, A)
      }
      V((Z = Z.apply(I, d || [])).next())
    })
  };
  Object.defineProperty(SE, "__esModule", {
    value: !0
  });
  var Kb = JY(),
    DB4 = jm1();
  class xm1 extends Kb.NetworkCore {
    constructor(I, d) {
      super(I, d);
      let G = I === null || I === void 0 ? void 0 : I.networkConfig;
      this._initializeUrlConfig = new Kb.UrlConfiguration(Kb.Endpoint._initialize, G === null || G === void 0 ? void 0 : G.initializeUrl, G === null || G === void 0 ? void 0 : G.api, G === null || G === void 0 ? void 0 : G.initializeFallbackUrls)
    }
    fetchEvaluations(I, d, G, Z) {
      return km1(this, void 0, void 0, function*() {
        let C = d ? Kb._typedJsonParse(d, "has_updates", "InitializeResponse") : null,
          W = {
            user: Z,
            hash: "djb2",
            deltasResponseRequested: !1,
            full_checksum: null
          };
        if (C === null || C === void 0 ? void 0 : C.has_updates) W = Object.assign(Object.assign({}, W), {
          sinceTime: C.time,
          previousDerivedFields: "derived_fields" in C ? C.derived_fields : {},
          deltasResponseRequested: !0,
          full_checksum: C.full_checksum
        });
        return this._fetchEvaluations(I, C, W, G)
      })
    }
    _fetchEvaluations(I, d, G, Z) {
      var C, W;
      return km1(this, void 0, void 0, function*() {
        let w = yield this.post({
          sdkKey: I,
          urlConfig: this._initializeUrlConfig,
          data: G,
          retries: 2,
          isStatsigEncodable: !0,
          priority: Z
        });
        if ((w === null || w === void 0 ? void 0 : w.code) === 204) return '{"has_updates": false}';
        if ((w === null || w === void 0 ? void 0 : w.code) !== 200) return (C = w === null || w === void 0 ? void 0 : w.body) !== null && C !== void 0 ? C : null;
        if ((d === null || d === void 0 ? void 0 : d.has_updates) !== !0 || ((W = w.body) === null || W === void 0 ? void 0 : W.includes('"is_delta":true')) !== !0 || G.deltasResponseRequested !== !0) return w.body;
        let B = DB4._resolveDeltasResponse(d, w.body);
        if (typeof B === "string") return B;
        return this._fetchEvaluations(I, d, Object.assign(Object.assign(Object.assign({}, G), B), {
          deltasResponseRequested: !1
        }), Z)
      })
    }
  }
  SE.default = xm1
})
// @from(Start 741448, End 743146)
nm1 = Y((pm1) => {
  Object.defineProperty(pm1, "__esModule", {
    value: !0
  });
  pm1._makeParamStoreGetter = void 0;
  var cm1 = JY(),
    Nb = {
      disableExposureLog: !0
    };

  function zb(I) {
    return I == null || I.disableExposureLog === !1
  }

  function s21(I, d) {
    return d != null && !cm1._isTypeMatch(I, d)
  }

  function HB4(I, d) {
    return I.value
  }

  function FB4(I, d, G) {
    if (I.getFeatureGate(d.gate_name, zb(G) ? void 0 : Nb).value) return d.pass_value;
    return d.fail_value
  }

  function gB4(I, d, G, Z) {
    let W = I.getDynamicConfig(d.config_name, Nb).get(d.param_name);
    if (s21(W, G)) return G;
    if (zb(Z)) I.getDynamicConfig(d.config_name);
    return W
  }

  function JB4(I, d, G, Z) {
    let W = I.getExperiment(d.experiment_name, Nb).get(d.param_name);
    if (s21(W, G)) return G;
    if (zb(Z)) I.getExperiment(d.experiment_name);
    return W
  }

  function KB4(I, d, G, Z) {
    let W = I.getLayer(d.layer_name, Nb).get(d.param_name);
    if (s21(W, G)) return G;
    if (zb(Z)) I.getLayer(d.layer_name).get(d.param_name);
    return W
  }

  function NB4(I, d, G) {
    return (Z, C) => {
      if (d == null) return C;
      let W = d[Z];
      if (W == null || C != null && cm1._typeOf(C) !== W.param_type) return C;
      switch (W.ref_type) {
        case "static":
          return HB4(W, G);
        case "gate":
          return FB4(I, W, G);
        case "dynamic_config":
          return gB4(I, W, C, G);
        case "experiment":
          return JB4(I, W, C, G);
        case "layer":
          return KB4(I, W, C, G);
        default:
          return C
      }
    }
  }
  pm1._makeParamStoreGetter = NB4
})