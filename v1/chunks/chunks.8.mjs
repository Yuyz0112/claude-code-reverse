
// @from(Start 743152, End 745464)
am1 = Y((Rz) => {
  var zB4 = Rz && Rz.__awaiter || function(I, d, G, Z) {
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
  Object.defineProperty(Rz, "__esModule", {
    value: !0
  });
  Rz.StatsigEvaluationsDataAdapter = void 0;
  var xF = JY(),
    QB4 = a21();
  class rm1 extends xF.DataAdapterCore {
    constructor() {
      super("EvaluationsDataAdapter", "evaluations");
      this._network = null, this._options = null
    }
    attach(I, d) {
      super.attach(I, d), this._network = new QB4.default(d !== null && d !== void 0 ? d : {})
    }
    getDataAsync(I, d, G) {
      return this._getDataAsyncImpl(I, xF._normalizeUser(d, this._options), G)
    }
    prefetchData(I, d) {
      return this._prefetchDataImpl(I, d)
    }
    setData(I) {
      let d = xF._typedJsonParse(I, "has_updates", "data");
      if (d && "user" in d) super.setData(I, d.user);
      else xF.Log.error("StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.")
    }
    setDataLegacy(I, d) {
      super.setData(I, d)
    }
    _fetchFromNetwork(I, d, G) {
      var Z;
      return zB4(this, void 0, void 0, function*() {
        let C = yield(Z = this._network) === null || Z === void 0 ? void 0 : Z.fetchEvaluations(this._getSdkKey(), I, G === null || G === void 0 ? void 0 : G.priority, d);
        return C !== null && C !== void 0 ? C : null
      })
    }
    _getCacheKey(I) {
      var d;
      let G = xF._getStorageKey(this._getSdkKey(), I, (d = this._options) === null || d === void 0 ? void 0 : d.customUserCacheKeyFunc);
      return `${xF.DataAdapterCachePrefix}.${this._cacheSuffix}.${G}`
    }
    _isCachedResultValidFor204(I, d) {
      return I.fullUserHash != null && I.fullUserHash === xF._getFullUserHash(d)
    }
  }
  Rz.StatsigEvaluationsDataAdapter = rm1
})
// @from(Start 745470, End 755131)
sm1 = Y((LE) => {
  var o21 = LE && LE.__awaiter || function(I, d, G, Z) {
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
  Object.defineProperty(LE, "__esModule", {
    value: !0
  });
  var a4 = JY(),
    fB4 = mm1(),
    qB4 = a21(),
    RB4 = nm1(),
    UB4 = am1();
  class Qb extends a4.StatsigClientBase {
    static instance(I) {
      let d = a4._getStatsigGlobal().instance(I);
      if (d instanceof Qb) return d;
      return a4.Log.warn(a4._isServerEnv() ? "StatsigClient.instance is not supported in server environments" : "Unable to find StatsigClient instance"), new Qb(I !== null && I !== void 0 ? I : "", {})
    }
    constructor(I, d, G = null) {
      var Z, C;
      a4.SDKType._setClientType(I, "javascript-client");
      let W = new qB4.default(G, (B) => {
        this.$emt(B)
      });
      super(I, (Z = G === null || G === void 0 ? void 0 : G.dataAdapter) !== null && Z !== void 0 ? Z : new UB4.StatsigEvaluationsDataAdapter, W, G);
      this.getFeatureGate = this._memoize(a4.MemoPrefix._gate, this._getFeatureGateImpl.bind(this)), this.getDynamicConfig = this._memoize(a4.MemoPrefix._dynamicConfig, this._getDynamicConfigImpl.bind(this)), this.getExperiment = this._memoize(a4.MemoPrefix._experiment, this._getExperimentImpl.bind(this)), this.getLayer = this._memoize(a4.MemoPrefix._layer, this._getLayerImpl.bind(this)), this.getParameterStore = this._memoize(a4.MemoPrefix._paramStore, this._getParameterStoreImpl.bind(this)), this._store = new fB4.default(I), this._network = W, this._user = this._configureUser(d, G);
      let w = (C = G === null || G === void 0 ? void 0 : G.plugins) !== null && C !== void 0 ? C : [];
      for (let B of w) B.bind(this)
    }
    initializeSync(I) {
      var d;
      if (this.loadingStatus !== "Uninitialized") return a4.createUpdateDetails(!0, this._store.getSource(), -1, null, null, ["MultipleInitializations", ...(d = this._store.getWarnings()) !== null && d !== void 0 ? d : []]);
      return this._logger.start(), this.updateUserSync(this._user, I)
    }
    initializeAsync(I) {
      return o21(this, void 0, void 0, function*() {
        if (this._initializePromise) return this._initializePromise;
        return this._initializePromise = this._initializeAsyncImpl(I), this._initializePromise
      })
    }
    updateUserSync(I, d) {
      var G;
      let Z = performance.now(),
        C = [...(G = this._store.getWarnings()) !== null && G !== void 0 ? G : []];
      this._resetForUser(I);
      let W = this.dataAdapter.getDataSync(this._user);
      if (W == null) C.push("NoCachedValues");
      this._store.setValues(W, this._user), this._finalizeUpdate(W);
      let w = d === null || d === void 0 ? void 0 : d.disableBackgroundCacheRefresh;
      if (w === !0 || w == null && (W === null || W === void 0 ? void 0 : W.source) === "Bootstrap") return a4.createUpdateDetails(!0, this._store.getSource(), performance.now() - Z, this._errorBoundary.getLastSeenErrorAndReset(), this._network.getLastUsedInitUrlAndReset(), C);
      return this._runPostUpdate(W !== null && W !== void 0 ? W : null, this._user), a4.createUpdateDetails(!0, this._store.getSource(), performance.now() - Z, this._errorBoundary.getLastSeenErrorAndReset(), this._network.getLastUsedInitUrlAndReset(), C)
    }
    updateUserAsync(I, d) {
      return o21(this, void 0, void 0, function*() {
        this._resetForUser(I);
        let G = this._user;
        a4.Diagnostics._markInitOverallStart(this._sdkKey);
        let Z = this.dataAdapter.getDataSync(G);
        if (this._store.setValues(Z, this._user), this._setStatus("Loading", Z), Z = yield this.dataAdapter.getDataAsync(Z, G, d), G !== this._user) return a4.createUpdateDetails(!1, this._store.getSource(), -1, new Error("User changed during update"), this._network.getLastUsedInitUrlAndReset());
        let C = !1;
        if (Z != null) a4.Diagnostics._markInitProcessStart(this._sdkKey), C = this._store.setValues(Z, this._user), a4.Diagnostics._markInitProcessEnd(this._sdkKey, {
          success: C
        });
        if (this._finalizeUpdate(Z), !C) this._errorBoundary.attachErrorIfNoneExists(a4.UPDATE_DETAIL_ERROR_MESSAGES.NO_NETWORK_DATA), this.$emt({
          name: "initialization_failure"
        });
        a4.Diagnostics._markInitOverallEnd(this._sdkKey, C, this._store.getCurrentSourceDetails());
        let W = a4.Diagnostics._enqueueDiagnosticsEvent(this._user, this._logger, this._sdkKey, this._options);
        return a4.createUpdateDetails(C, this._store.getSource(), W, this._errorBoundary.getLastSeenErrorAndReset(), this._network.getLastUsedInitUrlAndReset(), this._store.getWarnings())
      })
    }
    getContext() {
      return {
        sdkKey: this._sdkKey,
        options: this._options,
        values: this._store.getValues(),
        user: JSON.parse(JSON.stringify(this._user)),
        errorBoundary: this._errorBoundary,
        session: a4.StatsigSession.get(this._sdkKey),
        stableID: a4.StableID.get(this._sdkKey)
      }
    }
    checkGate(I, d) {
      return this.getFeatureGate(I, d).value
    }
    logEvent(I, d, G) {
      let Z = typeof I === "string" ? {
        eventName: I,
        value: d,
        metadata: G
      } : I;
      this._logger.enqueue(Object.assign(Object.assign({}, Z), {
        user: this._user,
        time: Date.now()
      }))
    }
    _primeReadyRipcord() {
      this.$on("error", () => {
        this.loadingStatus === "Loading" && this._finalizeUpdate(null)
      })
    }
    _initializeAsyncImpl(I) {
      return o21(this, void 0, void 0, function*() {
        if (!a4.Storage.isReady()) yield a4.Storage.isReadyResolver();
        return this._logger.start(), this.updateUserAsync(this._user, I)
      })
    }
    _finalizeUpdate(I) {
      this._store.finalize(), this._setStatus("Ready", I)
    }
    _runPostUpdate(I, d) {
      this.dataAdapter.getDataAsync(I, d, {
        priority: "low"
      }).catch((G) => {
        a4.Log.error("An error occurred after update.", G)
      })
    }
    _resetForUser(I) {
      this._logger.reset(), this._store.reset(), this._user = this._configureUser(I, this._options)
    }
    _configureUser(I, d) {
      var G;
      let Z = a4._normalizeUser(I, d),
        C = (G = Z.customIDs) === null || G === void 0 ? void 0 : G.stableID;
      if (C) a4.StableID.setOverride(C, this._sdkKey);
      return Z
    }
    _getFeatureGateImpl(I, d) {
      var G, Z;
      let {
        result: C,
        details: W
      } = this._store.getGate(I), w = a4._makeFeatureGate(I, W, C), B = (Z = (G = this.overrideAdapter) === null || G === void 0 ? void 0 : G.getGateOverride) === null || Z === void 0 ? void 0 : Z.call(G, w, this._user, d), A = B !== null && B !== void 0 ? B : w;
      return this._enqueueExposure(I, a4._createGateExposure(this._user, A), d), this.$emt({
        name: "gate_evaluation",
        gate: A
      }), A
    }
    _getDynamicConfigImpl(I, d) {
      var G, Z;
      let {
        result: C,
        details: W
      } = this._store.getConfig(I), w = a4._makeDynamicConfig(I, W, C), B = (Z = (G = this.overrideAdapter) === null || G === void 0 ? void 0 : G.getDynamicConfigOverride) === null || Z === void 0 ? void 0 : Z.call(G, w, this._user, d), A = B !== null && B !== void 0 ? B : w;
      return this._enqueueExposure(I, a4._createConfigExposure(this._user, A), d), this.$emt({
        name: "dynamic_config_evaluation",
        dynamicConfig: A
      }), A
    }
    _getExperimentImpl(I, d) {
      var G, Z;
      let {
        result: C,
        details: W
      } = this._store.getConfig(I), w = a4._makeExperiment(I, W, C), B = (Z = (G = this.overrideAdapter) === null || G === void 0 ? void 0 : G.getExperimentOverride) === null || Z === void 0 ? void 0 : Z.call(G, w, this._user, d), A = B !== null && B !== void 0 ? B : w;
      return this._enqueueExposure(I, a4._createConfigExposure(this._user, A), d), this.$emt({
        name: "experiment_evaluation",
        experiment: A
      }), A
    }
    _getLayerImpl(I, d) {
      var G, Z, C;
      let {
        result: W,
        details: w
      } = this._store.getLayer(I), B = a4._makeLayer(I, w, W), A = (Z = (G = this.overrideAdapter) === null || G === void 0 ? void 0 : G.getLayerOverride) === null || Z === void 0 ? void 0 : Z.call(G, B, this._user, d);
      if (d === null || d === void 0 ? void 0 : d.disableExposureLog) this._logger.incrementNonExposureCount(I);
      let V = a4._mergeOverride(B, A, (C = A === null || A === void 0 ? void 0 : A.__value) !== null && C !== void 0 ? C : B.__value, (X) => {
        if (d === null || d === void 0 ? void 0 : d.disableExposureLog) return;
        this._enqueueExposure(I, a4._createLayerParameterExposure(this._user, V, X), d)
      });
      return this.$emt({
        name: "layer_evaluation",
        layer: V
      }), V
    }
    _getParameterStoreImpl(I, d) {
      let {
        result: G,
        details: Z
      } = this._store.getParamStore(I);
      return this._logger.incrementNonExposureCount(I), {
        name: I,
        details: Z,
        __configuration: G,
        get: RB4._makeParamStoreGetter(this, G, d)
      }
    }
  }
  LE.default = Qb
})
// @from(Start 755137, End 756136)
em1 = Y((qw) => {
  var vB4 = qw && qw.__createBinding || (Object.create ? function(I, d, G, Z) {
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
    EB4 = qw && qw.__exportStar || function(I, d) {
      for (var G in I)
        if (G !== "default" && !Object.prototype.hasOwnProperty.call(d, G)) vB4(d, I, G)
    };
  Object.defineProperty(qw, "__esModule", {
    value: !0
  });
  qw.StatsigClient = void 0;
  var om1 = sm1();
  qw.StatsigClient = om1.default;
  EB4(JY(), qw);
  __STATSIG__ = Object.assign(Object.assign({}, __STATSIG__ !== null && __STATSIG__ !== void 0 ? __STATSIG__ : {}), {
    StatsigClient: om1.default
  });
  qw.default = __STATSIG__
})
// @from(Start 756142, End 759605)
Ol1 = Y((Lv9, Tl1) => {
  var m3 = {};
  Tl1.exports = m3;

  function ul1(I) {
    return I < 0 ? -1 : 1
  }

  function YA4(I) {
    if (I % 1 === 0.5 && (I & 1) === 0) return Math.floor(I);
    else return Math.round(I)
  }

  function zY(I, d) {
    if (!d.unsigned) --I;
    let G = d.unsigned ? 0 : -Math.pow(2, I),
      Z = Math.pow(2, I) - 1,
      C = d.moduloBitLength ? Math.pow(2, d.moduloBitLength) : Math.pow(2, I),
      W = d.moduloBitLength ? Math.pow(2, d.moduloBitLength - 1) : Math.pow(2, I - 1);
    return function(w, B) {
      if (!B) B = {};
      let A = +w;
      if (B.enforceRange) {
        if (!Number.isFinite(A)) throw new TypeError("Argument is not a finite number");
        if (A = ul1(A) * Math.floor(Math.abs(A)), A < G || A > Z) throw new TypeError("Argument is not in byte range");
        return A
      }
      if (!isNaN(A) && B.clamp) {
        if (A = YA4(A), A < G) A = G;
        if (A > Z) A = Z;
        return A
      }
      if (!Number.isFinite(A) || A === 0) return 0;
      if (A = ul1(A) * Math.floor(Math.abs(A)), A = A % C, !d.unsigned && A >= W) return A - C;
      else if (d.unsigned) {
        if (A < 0) A += C;
        else if (A === -0) return 0
      }
      return A
    }
  }
  m3.void = function() {
    return
  };
  m3.boolean = function(I) {
    return !!I
  };
  m3.byte = zY(8, {
    unsigned: !1
  });
  m3.octet = zY(8, {
    unsigned: !0
  });
  m3.short = zY(16, {
    unsigned: !1
  });
  m3["unsigned short"] = zY(16, {
    unsigned: !0
  });
  m3.long = zY(32, {
    unsigned: !1
  });
  m3["unsigned long"] = zY(32, {
    unsigned: !0
  });
  m3["long long"] = zY(32, {
    unsigned: !1,
    moduloBitLength: 64
  });
  m3["unsigned long long"] = zY(32, {
    unsigned: !0,
    moduloBitLength: 64
  });
  m3.double = function(I) {
    let d = +I;
    if (!Number.isFinite(d)) throw new TypeError("Argument is not a finite floating-point value");
    return d
  };
  m3["unrestricted double"] = function(I) {
    let d = +I;
    if (isNaN(d)) throw new TypeError("Argument is NaN");
    return d
  };
  m3.float = m3.double;
  m3["unrestricted float"] = m3["unrestricted double"];
  m3.DOMString = function(I, d) {
    if (!d) d = {};
    if (d.treatNullAsEmptyString && I === null) return "";
    return String(I)
  };
  m3.ByteString = function(I, d) {
    let G = String(I),
      Z = void 0;
    for (let C = 0;
      (Z = G.codePointAt(C)) !== void 0; ++C)
      if (Z > 255) throw new TypeError("Argument is not a valid bytestring");
    return G
  };
  m3.USVString = function(I) {
    let d = String(I),
      G = d.length,
      Z = [];
    for (let C = 0; C < G; ++C) {
      let W = d.charCodeAt(C);
      if (W < 55296 || W > 57343) Z.push(String.fromCodePoint(W));
      else if (56320 <= W && W <= 57343) Z.push(String.fromCodePoint(65533));
      else if (C === G - 1) Z.push(String.fromCodePoint(65533));
      else {
        let w = d.charCodeAt(C + 1);
        if (56320 <= w && w <= 57343) {
          let B = W & 1023,
            A = w & 1023;
          Z.push(String.fromCodePoint(65536 + 1024 * B + A)), ++C
        } else Z.push(String.fromCodePoint(65533))
      }
    }
    return Z.join("")
  };
  m3.Date = function(I, d) {
    if (!(I instanceof Date)) throw new TypeError("Argument is not a Date object");
    if (isNaN(I)) return;
    return I
  };
  m3.RegExp = function(I, d) {
    if (!(I instanceof RegExp)) I = new RegExp(I);
    return I
  }
})
// @from(Start 759611, End 760049)
bl1 = Y((_A4, QY) => {
  _A4.mixin = function I(d, G) {
    let Z = Object.getOwnPropertyNames(G);
    for (let C = 0; C < Z.length; ++C) Object.defineProperty(d, Z[C], Object.getOwnPropertyDescriptor(G, Z[C]))
  };
  _A4.wrapperSymbol = Symbol("wrapper");
  _A4.implSymbol = Symbol("impl");
  _A4.wrapperForImpl = function(I) {
    return I[_A4.wrapperSymbol]
  };
  _A4.implForWrapper = function(I) {
    return I[_A4.implSymbol]
  }
})