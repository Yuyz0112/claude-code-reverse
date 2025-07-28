
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