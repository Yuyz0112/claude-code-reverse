
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