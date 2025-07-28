
// @from(Start 2362364, End 2366033)
o71 = Y((G70) => {
  Object.defineProperty(G70, "__esModule", {
    value: !0
  });
  G70.DefaultRateLimiter = void 0;
  var fx4 = _L();
  class d70 {
    constructor(I) {
      var d, G, Z, C, W;
      this.currentCapacity = 0, this.enabled = !1, this.lastMaxRate = 0, this.measuredTxRate = 0, this.requestCount = 0, this.lastTimestamp = 0, this.timeWindow = 0, this.beta = (d = I === null || I === void 0 ? void 0 : I.beta) !== null && d !== void 0 ? d : 0.7, this.minCapacity = (G = I === null || I === void 0 ? void 0 : I.minCapacity) !== null && G !== void 0 ? G : 1, this.minFillRate = (Z = I === null || I === void 0 ? void 0 : I.minFillRate) !== null && Z !== void 0 ? Z : 0.5, this.scaleConstant = (C = I === null || I === void 0 ? void 0 : I.scaleConstant) !== null && C !== void 0 ? C : 0.4, this.smooth = (W = I === null || I === void 0 ? void 0 : I.smooth) !== null && W !== void 0 ? W : 0.8;
      let w = this.getCurrentTimeInSeconds();
      this.lastThrottleTime = w, this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds()), this.fillRate = this.minFillRate, this.maxCapacity = this.minCapacity
    }
    getCurrentTimeInSeconds() {
      return Date.now() / 1000
    }
    async getSendToken() {
      return this.acquireTokenBucket(1)
    }
    async acquireTokenBucket(I) {
      if (!this.enabled) return;
      if (this.refillTokenBucket(), I > this.currentCapacity) {
        let d = (I - this.currentCapacity) / this.fillRate * 1000;
        await new Promise((G) => setTimeout(G, d))
      }
      this.currentCapacity = this.currentCapacity - I
    }
    refillTokenBucket() {
      let I = this.getCurrentTimeInSeconds();
      if (!this.lastTimestamp) {
        this.lastTimestamp = I;
        return
      }
      let d = (I - this.lastTimestamp) * this.fillRate;
      this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + d), this.lastTimestamp = I
    }
    updateClientSendingRate(I) {
      let d;
      if (this.updateMeasuredRate(), fx4.isThrottlingError(I)) {
        let Z = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
        this.lastMaxRate = Z, this.calculateTimeWindow(), this.lastThrottleTime = this.getCurrentTimeInSeconds(), d = this.cubicThrottle(Z), this.enableTokenBucket()
      } else this.calculateTimeWindow(), d = this.cubicSuccess(this.getCurrentTimeInSeconds());
      let G = Math.min(d, 2 * this.measuredTxRate);
      this.updateTokenBucketRate(G)
    }
    calculateTimeWindow() {
      this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 0.3333333333333333))
    }
    cubicThrottle(I) {
      return this.getPrecise(I * this.beta)
    }
    cubicSuccess(I) {
      return this.getPrecise(this.scaleConstant * Math.pow(I - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate)
    }
    enableTokenBucket() {
      this.enabled = !0
    }
    updateTokenBucketRate(I) {
      this.refillTokenBucket(), this.fillRate = Math.max(I, this.minFillRate), this.maxCapacity = Math.max(I, this.minCapacity), this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity)
    }
    updateMeasuredRate() {
      let I = this.getCurrentTimeInSeconds(),
        d = Math.floor(I * 2) / 2;
      if (this.requestCount++, d > this.lastTxRateBucket) {
        let G = this.requestCount / (d - this.lastTxRateBucket);
        this.measuredTxRate = this.getPrecise(G * this.smooth + this.measuredTxRate * (1 - this.smooth)), this.requestCount = 0, this.lastTxRateBucket = d
      }
    }
    getPrecise(I) {
      return parseFloat(I.toFixed(8))
    }
  }
  G70.DefaultRateLimiter = d70
})
// @from(Start 2366039, End 2366693)
Sf = Y((C70) => {
  Object.defineProperty(C70, "__esModule", {
    value: !0
  });
  C70.REQUEST_HEADER = C70.INVOCATION_ID_HEADER = C70.NO_RETRY_INCREMENT = C70.TIMEOUT_RETRY_COST = C70.RETRY_COST = C70.INITIAL_RETRY_TOKENS = C70.THROTTLING_RETRY_DELAY_BASE = C70.MAXIMUM_RETRY_DELAY = C70.DEFAULT_RETRY_DELAY_BASE = void 0;
  C70.DEFAULT_RETRY_DELAY_BASE = 100;
  C70.MAXIMUM_RETRY_DELAY = 20000;
  C70.THROTTLING_RETRY_DELAY_BASE = 500;
  C70.INITIAL_RETRY_TOKENS = 500;
  C70.RETRY_COST = 5;
  C70.TIMEOUT_RETRY_COST = 10;
  C70.NO_RETRY_INCREMENT = 1;
  C70.INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
  C70.REQUEST_HEADER = "amz-sdk-request"
})
// @from(Start 2366699, End 2367186)
V70 = Y((B70) => {
  Object.defineProperty(B70, "__esModule", {
    value: !0
  });
  B70.getDefaultRetryBackoffStrategy = void 0;
  var w70 = Sf(),
    yx4 = () => {
      let I = w70.DEFAULT_RETRY_DELAY_BASE;
      return {
        computeNextBackoffDelay: (Z) => {
          return Math.floor(Math.min(w70.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** Z * I))
        },
        setDelayBase: (Z) => {
          I = Z
        }
      }
    };
  B70.getDefaultRetryBackoffStrategy = yx4
})
// @from(Start 2367192, End 2367617)
_70 = Y((X70) => {
  Object.defineProperty(X70, "__esModule", {
    value: !0
  });
  X70.createDefaultRetryToken = void 0;
  var Px4 = Sf(),
    $x4 = ({
      retryDelay: I,
      retryCount: d,
      retryCost: G
    }) => {
      return {
        getRetryCount: () => d,
        getRetryDelay: () => Math.min(Px4.MAXIMUM_RETRY_DELAY, I),
        getRetryCost: () => G
      }
    };
  X70.createDefaultRetryToken = $x4
})
// @from(Start 2367623, End 2369904)
Hc = Y((F70) => {
  Object.defineProperty(F70, "__esModule", {
    value: !0
  });
  F70.StandardRetryStrategy = void 0;
  var e71 = Dc(),
    S_ = Sf(),
    ux4 = V70(),
    D70 = _70();
  class H70 {
    constructor(I) {
      this.maxAttempts = I, this.mode = e71.RETRY_MODES.STANDARD, this.capacity = S_.INITIAL_RETRY_TOKENS, this.retryBackoffStrategy = ux4.getDefaultRetryBackoffStrategy(), this.maxAttemptsProvider = typeof I === "function" ? I : async () => I
    }
    async acquireInitialRetryToken(I) {
      return D70.createDefaultRetryToken({
        retryDelay: S_.DEFAULT_RETRY_DELAY_BASE,
        retryCount: 0
      })
    }
    async refreshRetryTokenForRetry(I, d) {
      let G = await this.getMaxAttempts();
      if (this.shouldRetry(I, d, G)) {
        let Z = d.errorType;
        this.retryBackoffStrategy.setDelayBase(Z === "THROTTLING" ? S_.THROTTLING_RETRY_DELAY_BASE : S_.DEFAULT_RETRY_DELAY_BASE);
        let C = this.retryBackoffStrategy.computeNextBackoffDelay(I.getRetryCount()),
          W = d.retryAfterHint ? Math.max(d.retryAfterHint.getTime() - Date.now() || 0, C) : C,
          w = this.getCapacityCost(Z);
        return this.capacity -= w, D70.createDefaultRetryToken({
          retryDelay: W,
          retryCount: I.getRetryCount() + 1,
          retryCost: w
        })
      }
      throw new Error("No retry token available")
    }
    recordSuccess(I) {
      var d;
      this.capacity = Math.max(S_.INITIAL_RETRY_TOKENS, this.capacity + ((d = I.getRetryCost()) !== null && d !== void 0 ? d : S_.NO_RETRY_INCREMENT))
    }
    getCapacity() {
      return this.capacity
    }
    async getMaxAttempts() {
      try {
        return await this.maxAttemptsProvider()
      } catch (I) {
        return console.warn(`Max attempts provider could not resolve. Using default of ${e71.DEFAULT_MAX_ATTEMPTS}`), e71.DEFAULT_MAX_ATTEMPTS
      }
    }
    shouldRetry(I, d, G) {
      return I.getRetryCount() < G && this.capacity >= this.getCapacityCost(d.errorType) && this.isRetryableError(d.errorType)
    }
    getCapacityCost(I) {
      return I === "TRANSIENT" ? S_.TIMEOUT_RETRY_COST : S_.RETRY_COST
    }
    isRetryableError(I) {
      return I === "THROTTLING" || I === "TRANSIENT"
    }
  }
  F70.StandardRetryStrategy = H70
})
// @from(Start 2369910, End 2370916)
z70 = Y((K70) => {
  Object.defineProperty(K70, "__esModule", {
    value: !0
  });
  K70.AdaptiveRetryStrategy = void 0;
  var Tx4 = Dc(),
    Ox4 = o71(),
    mx4 = Hc();
  class J70 {
    constructor(I, d) {
      this.maxAttemptsProvider = I, this.mode = Tx4.RETRY_MODES.ADAPTIVE;
      let {
        rateLimiter: G
      } = d !== null && d !== void 0 ? d : {};
      this.rateLimiter = G !== null && G !== void 0 ? G : new Ox4.DefaultRateLimiter, this.standardRetryStrategy = new mx4.StandardRetryStrategy(I)
    }
    async acquireInitialRetryToken(I) {
      return await this.rateLimiter.getSendToken(), this.standardRetryStrategy.acquireInitialRetryToken(I)
    }
    async refreshRetryTokenForRetry(I, d) {
      return this.rateLimiter.updateClientSendingRate(d), this.standardRetryStrategy.refreshRetryTokenForRetry(I, d)
    }
    recordSuccess(I) {
      this.rateLimiter.updateClientSendingRate({}), this.standardRetryStrategy.recordSuccess(I)
    }
  }
  K70.AdaptiveRetryStrategy = J70
})
// @from(Start 2370922, End 2371603)
R70 = Y((f70) => {
  Object.defineProperty(f70, "__esModule", {
    value: !0
  });
  f70.ConfiguredRetryStrategy = void 0;
  var lx4 = Sf(),
    bx4 = Hc();
  class Q70 extends bx4.StandardRetryStrategy {
    constructor(I, d = lx4.DEFAULT_RETRY_DELAY_BASE) {
      super(typeof I === "function" ? I : async () => I);
      if (typeof d === "number") this.computeNextBackoffDelay = () => d;
      else this.computeNextBackoffDelay = d
    }
    async refreshRetryTokenForRetry(I, d) {
      let G = await super.refreshRetryTokenForRetry(I, d);
      return G.getRetryDelay = () => this.computeNextBackoffDelay(G.getRetryCount()), G
    }
  }
  f70.ConfiguredRetryStrategy = Q70
})
// @from(Start 2371609, End 2371694)
v70 = Y((U70) => {
  Object.defineProperty(U70, "__esModule", {
    value: !0
  })
})
// @from(Start 2371700, End 2372006)
Wd = Y((gV) => {
  Object.defineProperty(gV, "__esModule", {
    value: !0
  });
  var xg = x1();
  xg.__exportStar(z70(), gV);
  xg.__exportStar(R70(), gV);
  xg.__exportStar(o71(), gV);
  xg.__exportStar(Hc(), gV);
  xg.__exportStar(Dc(), gV);
  xg.__exportStar(Sf(), gV);
  xg.__exportStar(v70(), gV)
})
// @from(Start 2372012, End 2372414)
t71 = Y((E70) => {
  Object.defineProperty(E70, "__esModule", {
    value: !0
  });
  E70.default = kx4;
  var hx4 = jx4(B1("crypto"));

  function jx4(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }
  var gc = new Uint8Array(256),
    Fc = gc.length;

  function kx4() {
    if (Fc > gc.length - 16) hx4.default.randomFillSync(gc), Fc = 0;
    return gc.slice(Fc, Fc += 16)
  }
})
// @from(Start 2372420, End 2372681)
L70 = Y((M70) => {
  Object.defineProperty(M70, "__esModule", {
    value: !0
  });
  M70.default = void 0;
  var cx4 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  M70.default = cx4
})
// @from(Start 2372687, End 2373023)
DL = Y((y70) => {
  Object.defineProperty(y70, "__esModule", {
    value: !0
  });
  y70.default = void 0;
  var px4 = ix4(L70());

  function ix4(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }

  function nx4(I) {
    return typeof I === "string" && px4.default.test(I)
  }
  var rx4 = nx4;
  y70.default = rx4
})
// @from(Start 2373029, End 2373788)
HL = Y(($70) => {
  Object.defineProperty($70, "__esModule", {
    value: !0
  });
  $70.default = void 0;
  var ax4 = sx4(DL());

  function sx4(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }
  var n8 = [];
  for (let I = 0; I < 256; ++I) n8.push((I + 256).toString(16).substr(1));

  function ox4(I, d = 0) {
    let G = (n8[I[d + 0]] + n8[I[d + 1]] + n8[I[d + 2]] + n8[I[d + 3]] + "-" + n8[I[d + 4]] + n8[I[d + 5]] + "-" + n8[I[d + 6]] + n8[I[d + 7]] + "-" + n8[I[d + 8]] + n8[I[d + 9]] + "-" + n8[I[d + 10]] + n8[I[d + 11]] + n8[I[d + 12]] + n8[I[d + 13]] + n8[I[d + 14]] + n8[I[d + 15]]).toLowerCase();
    if (!ax4.default(G)) throw TypeError("Stringified UUID is invalid");
    return G
  }
  var ex4 = ox4;
  $70.default = ex4
})
// @from(Start 2373794, End 2375328)
b70 = Y((m70) => {
  Object.defineProperty(m70, "__esModule", {
    value: !0
  });
  m70.default = void 0;
  var tx4 = O70(t71()),
    Ic4 = O70(HL());

  function O70(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }
  var T70, II1, dI1 = 0,
    GI1 = 0;

  function dc4(I, d, G) {
    let Z = d && G || 0,
      C = d || new Array(16);
    I = I || {};
    let W = I.node || T70,
      w = I.clockseq !== void 0 ? I.clockseq : II1;
    if (W == null || w == null) {
      let F = I.random || (I.rng || tx4.default)();
      if (W == null) W = T70 = [F[0] | 1, F[1], F[2], F[3], F[4], F[5]];
      if (w == null) w = II1 = (F[6] << 8 | F[7]) & 16383
    }
    let B = I.msecs !== void 0 ? I.msecs : Date.now(),
      A = I.nsecs !== void 0 ? I.nsecs : GI1 + 1,
      V = B - dI1 + (A - GI1) / 1e4;
    if (V < 0 && I.clockseq === void 0) w = w + 1 & 16383;
    if ((V < 0 || B > dI1) && I.nsecs === void 0) A = 0;
    if (A >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    dI1 = B, GI1 = A, II1 = w, B += 12219292800000;
    let X = ((B & 268435455) * 1e4 + A) % 4294967296;
    C[Z++] = X >>> 24 & 255, C[Z++] = X >>> 16 & 255, C[Z++] = X >>> 8 & 255, C[Z++] = X & 255;
    let _ = B / 4294967296 * 1e4 & 268435455;
    C[Z++] = _ >>> 8 & 255, C[Z++] = _ & 255, C[Z++] = _ >>> 24 & 15 | 16, C[Z++] = _ >>> 16 & 255, C[Z++] = w >>> 8 | 128, C[Z++] = w & 255;
    for (let F = 0; F < 6; ++F) C[Z + F] = W[F];
    return d || Ic4.default(C)
  }
  var Gc4 = dc4;
  m70.default = Gc4
})
// @from(Start 2375334, End 2376212)
ZI1 = Y((h70) => {
  Object.defineProperty(h70, "__esModule", {
    value: !0
  });
  h70.default = void 0;
  var Zc4 = Cc4(DL());

  function Cc4(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }

  function Wc4(I) {
    if (!Zc4.default(I)) throw TypeError("Invalid UUID");
    let d, G = new Uint8Array(16);
    return G[0] = (d = parseInt(I.slice(0, 8), 16)) >>> 24, G[1] = d >>> 16 & 255, G[2] = d >>> 8 & 255, G[3] = d & 255, G[4] = (d = parseInt(I.slice(9, 13), 16)) >>> 8, G[5] = d & 255, G[6] = (d = parseInt(I.slice(14, 18), 16)) >>> 8, G[7] = d & 255, G[8] = (d = parseInt(I.slice(19, 23), 16)) >>> 8, G[9] = d & 255, G[10] = (d = parseInt(I.slice(24, 36), 16)) / 1099511627776 & 255, G[11] = d / 4294967296 & 255, G[12] = d >>> 24 & 255, G[13] = d >>> 16 & 255, G[14] = d >>> 8 & 255, G[15] = d & 255, G
  }
  var wc4 = Wc4;
  h70.default = wc4
})
// @from(Start 2376218, End 2377416)
CI1 = Y((p70) => {
  Object.defineProperty(p70, "__esModule", {
    value: !0
  });
  p70.default = Xc4;
  p70.URL = p70.DNS = void 0;
  var Bc4 = k70(HL()),
    Ac4 = k70(ZI1());

  function k70(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }

  function Vc4(I) {
    I = unescape(encodeURIComponent(I));
    let d = [];
    for (let G = 0; G < I.length; ++G) d.push(I.charCodeAt(G));
    return d
  }
  var x70 = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  p70.DNS = x70;
  var c70 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  p70.URL = c70;

  function Xc4(I, d, G) {
    function Z(C, W, w, B) {
      if (typeof C === "string") C = Vc4(C);
      if (typeof W === "string") W = Ac4.default(W);
      if (W.length !== 16) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let A = new Uint8Array(16 + C.length);
      if (A.set(W), A.set(C, W.length), A = G(A), A[6] = A[6] & 15 | d, A[8] = A[8] & 63 | 128, w) {
        B = B || 0;
        for (let V = 0; V < 16; ++V) w[B + V] = A[V];
        return w
      }
      return Bc4.default(A)
    }
    try {
      Z.name = I
    } catch (C) {}
    return Z.DNS = x70, Z.URL = c70, Z
  }
})
// @from(Start 2377422, End 2377880)
a70 = Y((n70) => {
  Object.defineProperty(n70, "__esModule", {
    value: !0
  });
  n70.default = void 0;
  var Dc4 = Hc4(B1("crypto"));

  function Hc4(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }

  function Fc4(I) {
    if (Array.isArray(I)) I = Buffer.from(I);
    else if (typeof I === "string") I = Buffer.from(I, "utf8");
    return Dc4.default.createHash("md5").update(I).digest()
  }
  var gc4 = Fc4;
  n70.default = gc4
})
// @from(Start 2377886, End 2378210)
t70 = Y((o70) => {
  Object.defineProperty(o70, "__esModule", {
    value: !0
  });
  o70.default = void 0;
  var Jc4 = s70(CI1()),
    Kc4 = s70(a70());

  function s70(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }
  var Nc4 = Jc4.default("v3", 48, Kc4.default),
    zc4 = Nc4;
  o70.default = zc4
})
// @from(Start 2378216, End 2378768)
ZI0 = Y((dI0) => {
  Object.defineProperty(dI0, "__esModule", {
    value: !0
  });
  dI0.default = void 0;
  var Qc4 = II0(t71()),
    fc4 = II0(HL());

  function II0(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }

  function qc4(I, d, G) {
    I = I || {};
    let Z = I.random || (I.rng || Qc4.default)();
    if (Z[6] = Z[6] & 15 | 64, Z[8] = Z[8] & 63 | 128, d) {
      G = G || 0;
      for (let C = 0; C < 16; ++C) d[G + C] = Z[C];
      return d
    }
    return fc4.default(Z)
  }
  var Rc4 = qc4;
  dI0.default = Rc4
})
// @from(Start 2378774, End 2379233)
wI0 = Y((CI0) => {
  Object.defineProperty(CI0, "__esModule", {
    value: !0
  });
  CI0.default = void 0;
  var Uc4 = vc4(B1("crypto"));

  function vc4(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }

  function Ec4(I) {
    if (Array.isArray(I)) I = Buffer.from(I);
    else if (typeof I === "string") I = Buffer.from(I, "utf8");
    return Uc4.default.createHash("sha1").update(I).digest()
  }
  var Mc4 = Ec4;
  CI0.default = Mc4
})
// @from(Start 2379239, End 2379563)
XI0 = Y((AI0) => {
  Object.defineProperty(AI0, "__esModule", {
    value: !0
  });
  AI0.default = void 0;
  var Sc4 = BI0(CI1()),
    Lc4 = BI0(wI0());

  function BI0(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }
  var yc4 = Sc4.default("v5", 80, Lc4.default),
    Pc4 = yc4;
  AI0.default = Pc4
})
// @from(Start 2379569, End 2379751)
DI0 = Y((YI0) => {
  Object.defineProperty(YI0, "__esModule", {
    value: !0
  });
  YI0.default = void 0;
  var $c4 = "00000000-0000-0000-0000-000000000000";
  YI0.default = $c4
})
// @from(Start 2379757, End 2380136)
gI0 = Y((HI0) => {
  Object.defineProperty(HI0, "__esModule", {
    value: !0
  });
  HI0.default = void 0;
  var uc4 = Tc4(DL());

  function Tc4(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }

  function Oc4(I) {
    if (!uc4.default(I)) throw TypeError("Invalid UUID");
    return parseInt(I.substr(14, 1), 16)
  }
  var mc4 = Oc4;
  HI0.default = mc4
})
// @from(Start 2380142, End 2381556)
WI1 = Y((bC) => {
  Object.defineProperty(bC, "__esModule", {
    value: !0
  });
  Object.defineProperty(bC, "v1", {
    enumerable: !0,
    get: function() {
      return lc4.default
    }
  });
  Object.defineProperty(bC, "v3", {
    enumerable: !0,
    get: function() {
      return bc4.default
    }
  });
  Object.defineProperty(bC, "v4", {
    enumerable: !0,
    get: function() {
      return hc4.default
    }
  });
  Object.defineProperty(bC, "v5", {
    enumerable: !0,
    get: function() {
      return jc4.default
    }
  });
  Object.defineProperty(bC, "NIL", {
    enumerable: !0,
    get: function() {
      return kc4.default
    }
  });
  Object.defineProperty(bC, "version", {
    enumerable: !0,
    get: function() {
      return xc4.default
    }
  });
  Object.defineProperty(bC, "validate", {
    enumerable: !0,
    get: function() {
      return cc4.default
    }
  });
  Object.defineProperty(bC, "stringify", {
    enumerable: !0,
    get: function() {
      return pc4.default
    }
  });
  Object.defineProperty(bC, "parse", {
    enumerable: !0,
    get: function() {
      return ic4.default
    }
  });
  var lc4 = JV(b70()),
    bc4 = JV(t70()),
    hc4 = JV(ZI0()),
    jc4 = JV(XI0()),
    kc4 = JV(DI0()),
    xc4 = JV(gI0()),
    cc4 = JV(DL()),
    pc4 = JV(HL()),
    ic4 = JV(ZI1());

  function JV(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }
})
// @from(Start 2381562, End 2382623)
NI0 = Y((JI0) => {
  Object.defineProperty(JI0, "__esModule", {
    value: !0
  });
  JI0.getDefaultRetryQuota = void 0;
  var wI1 = Wd(),
    nc4 = (I, d) => {
      var G, Z, C;
      let W = I,
        w = (G = d === null || d === void 0 ? void 0 : d.noRetryIncrement) !== null && G !== void 0 ? G : wI1.NO_RETRY_INCREMENT,
        B = (Z = d === null || d === void 0 ? void 0 : d.retryCost) !== null && Z !== void 0 ? Z : wI1.RETRY_COST,
        A = (C = d === null || d === void 0 ? void 0 : d.timeoutRetryCost) !== null && C !== void 0 ? C : wI1.TIMEOUT_RETRY_COST,
        V = I,
        X = (J) => J.name === "TimeoutError" ? A : B,
        _ = (J) => X(J) <= V;
      return Object.freeze({
        hasRetryTokens: _,
        retrieveRetryTokens: (J) => {
          if (!_(J)) throw new Error("No retry token available");
          let K = X(J);
          return V -= K, K
        },
        releaseRetryTokens: (J) => {
          V += J !== null && J !== void 0 ? J : w, V = Math.min(V, W)
        }
      })
    };
  JI0.getDefaultRetryQuota = nc4
})
// @from(Start 2382629, End 2382896)
BI1 = Y((zI0) => {
  Object.defineProperty(zI0, "__esModule", {
    value: !0
  });
  zI0.defaultDelayDecider = void 0;
  var rc4 = Wd(),
    ac4 = (I, d) => Math.floor(Math.min(rc4.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** d * I));
  zI0.defaultDelayDecider = ac4
})
// @from(Start 2382902, End 2383241)
AI1 = Y((fI0) => {
  Object.defineProperty(fI0, "__esModule", {
    value: !0
  });
  fI0.defaultRetryDecider = void 0;
  var Jc = _L(),
    sc4 = (I) => {
      if (!I) return !1;
      return Jc.isRetryableByTrait(I) || Jc.isClockSkewError(I) || Jc.isThrottlingError(I) || Jc.isTransientError(I)
    };
  fI0.defaultRetryDecider = sc4
})
// @from(Start 2383247, End 2383619)
VI1 = Y((RI0) => {
  Object.defineProperty(RI0, "__esModule", {
    value: !0
  });
  RI0.asSdkError = void 0;
  var oc4 = (I) => {
    if (I instanceof Error) return I;
    if (I instanceof Object) return Object.assign(new Error, I);
    if (typeof I === "string") return new Error(I);
    return new Error(`AWS SDK error wrapper for ${I}`)
  };
  RI0.asSdkError = oc4
})
// @from(Start 2383625, End 2386465)
YI1 = Y((EI0) => {
  Object.defineProperty(EI0, "__esModule", {
    value: !0
  });
  EI0.StandardRetryStrategy = void 0;
  var XI1 = J8(),
    ec4 = _L(),
    cg = Wd(),
    tc4 = WI1(),
    Ip4 = NI0(),
    dp4 = BI1(),
    Gp4 = AI1(),
    Zp4 = VI1();
  class vI0 {
    constructor(I, d) {
      var G, Z, C;
      this.maxAttemptsProvider = I, this.mode = cg.RETRY_MODES.STANDARD, this.retryDecider = (G = d === null || d === void 0 ? void 0 : d.retryDecider) !== null && G !== void 0 ? G : Gp4.defaultRetryDecider, this.delayDecider = (Z = d === null || d === void 0 ? void 0 : d.delayDecider) !== null && Z !== void 0 ? Z : dp4.defaultDelayDecider, this.retryQuota = (C = d === null || d === void 0 ? void 0 : d.retryQuota) !== null && C !== void 0 ? C : Ip4.getDefaultRetryQuota(cg.INITIAL_RETRY_TOKENS)
    }
    shouldRetry(I, d, G) {
      return d < G && this.retryDecider(I) && this.retryQuota.hasRetryTokens(I)
    }
    async getMaxAttempts() {
      let I;
      try {
        I = await this.maxAttemptsProvider()
      } catch (d) {
        I = cg.DEFAULT_MAX_ATTEMPTS
      }
      return I
    }
    async retry(I, d, G) {
      let Z, C = 0,
        W = 0,
        w = await this.getMaxAttempts(),
        {
          request: B
        } = d;
      if (XI1.HttpRequest.isInstance(B)) B.headers[cg.INVOCATION_ID_HEADER] = tc4.v4();
      while (!0) try {
        if (XI1.HttpRequest.isInstance(B)) B.headers[cg.REQUEST_HEADER] = `attempt=${C+1}; max=${w}`;
        if (G === null || G === void 0 ? void 0 : G.beforeRequest) await G.beforeRequest();
        let {
          response: A,
          output: V
        } = await I(d);
        if (G === null || G === void 0 ? void 0 : G.afterRequest) G.afterRequest(A);
        return this.retryQuota.releaseRetryTokens(Z), V.$metadata.attempts = C + 1, V.$metadata.totalRetryDelay = W, {
          response: A,
          output: V
        }
      } catch (A) {
        let V = Zp4.asSdkError(A);
        if (C++, this.shouldRetry(V, C, w)) {
          Z = this.retryQuota.retrieveRetryTokens(V);
          let X = this.delayDecider(ec4.isThrottlingError(V) ? cg.THROTTLING_RETRY_DELAY_BASE : cg.DEFAULT_RETRY_DELAY_BASE, C),
            _ = Cp4(V.$response),
            F = Math.max(_ || 0, X);
          W += F, await new Promise((g) => setTimeout(g, F));
          continue
        }
        if (!V.$metadata) V.$metadata = {};
        throw V.$metadata.attempts = C, V.$metadata.totalRetryDelay = W, V
      }
    }
  }
  EI0.StandardRetryStrategy = vI0;
  var Cp4 = (I) => {
    if (!XI1.HttpResponse.isInstance(I)) return;
    let d = Object.keys(I.headers).find((W) => W.toLowerCase() === "retry-after");
    if (!d) return;
    let G = I.headers[d],
      Z = Number(G);
    if (!Number.isNaN(Z)) return Z * 1000;
    return new Date(G).getTime() - Date.now()
  }
})
// @from(Start 2386471, End 2387248)
$I0 = Y((yI0) => {
  Object.defineProperty(yI0, "__esModule", {
    value: !0
  });
  yI0.AdaptiveRetryStrategy = void 0;
  var SI0 = Wd(),
    Wp4 = YI1();
  class LI0 extends Wp4.StandardRetryStrategy {
    constructor(I, d) {
      let {
        rateLimiter: G,
        ...Z
      } = d !== null && d !== void 0 ? d : {};
      super(I, Z);
      this.rateLimiter = G !== null && G !== void 0 ? G : new SI0.DefaultRateLimiter, this.mode = SI0.RETRY_MODES.ADAPTIVE
    }
    async retry(I, d) {
      return super.retry(I, d, {
        beforeRequest: async () => {
          return this.rateLimiter.getSendToken()
        },
        afterRequest: (G) => {
          this.rateLimiter.updateClientSendingRate(G)
        }
      })
    }
  }
  yI0.AdaptiveRetryStrategy = LI0
})
// @from(Start 2387254, End 2389086)
bI0 = Y((TI0) => {
  Object.defineProperty(TI0, "__esModule", {
    value: !0
  });
  TI0.NODE_RETRY_MODE_CONFIG_OPTIONS = TI0.CONFIG_RETRY_MODE = TI0.ENV_RETRY_MODE = TI0.resolveRetryConfig = TI0.NODE_MAX_ATTEMPT_CONFIG_OPTIONS = TI0.CONFIG_MAX_ATTEMPTS = TI0.ENV_MAX_ATTEMPTS = void 0;
  var uI0 = M_(),
    Lf = Wd();
  TI0.ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";
  TI0.CONFIG_MAX_ATTEMPTS = "max_attempts";
  TI0.NODE_MAX_ATTEMPT_CONFIG_OPTIONS = {
    environmentVariableSelector: (I) => {
      let d = I[TI0.ENV_MAX_ATTEMPTS];
      if (!d) return;
      let G = parseInt(d);
      if (Number.isNaN(G)) throw new Error(`Environment variable ${TI0.ENV_MAX_ATTEMPTS} mast be a number, got "${d}"`);
      return G
    },
    configFileSelector: (I) => {
      let d = I[TI0.CONFIG_MAX_ATTEMPTS];
      if (!d) return;
      let G = parseInt(d);
      if (Number.isNaN(G)) throw new Error(`Shared config file entry ${TI0.CONFIG_MAX_ATTEMPTS} mast be a number, got "${d}"`);
      return G
    },
    default: Lf.DEFAULT_MAX_ATTEMPTS
  };
  var wp4 = (I) => {
    var d;
    let {
      retryStrategy: G
    } = I, Z = uI0.normalizeProvider((d = I.maxAttempts) !== null && d !== void 0 ? d : Lf.DEFAULT_MAX_ATTEMPTS);
    return {
      ...I,
      maxAttempts: Z,
      retryStrategy: async () => {
        if (G) return G;
        if (await uI0.normalizeProvider(I.retryMode)() === Lf.RETRY_MODES.ADAPTIVE) return new Lf.AdaptiveRetryStrategy(Z);
        return new Lf.StandardRetryStrategy(Z)
      }
    }
  };
  TI0.resolveRetryConfig = wp4;
  TI0.ENV_RETRY_MODE = "AWS_RETRY_MODE";
  TI0.CONFIG_RETRY_MODE = "retry_mode";
  TI0.NODE_RETRY_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (I) => I[TI0.ENV_RETRY_MODE],
    configFileSelector: (I) => I[TI0.CONFIG_RETRY_MODE],
    default: Lf.DEFAULT_RETRY_MODE
  }
})
// @from(Start 2389092, End 2390014)
pI0 = Y((jI0) => {
  Object.defineProperty(jI0, "__esModule", {
    value: !0
  });
  jI0.getOmitRetryHeadersPlugin = jI0.omitRetryHeadersMiddlewareOptions = jI0.omitRetryHeadersMiddleware = void 0;
  var Vp4 = J8(),
    hI0 = Wd(),
    Xp4 = () => (I) => async (d) => {
      let {
        request: G
      } = d;
      if (Vp4.HttpRequest.isInstance(G)) delete G.headers[hI0.INVOCATION_ID_HEADER], delete G.headers[hI0.REQUEST_HEADER];
      return I(d)
    };
  jI0.omitRetryHeadersMiddleware = Xp4;
  jI0.omitRetryHeadersMiddlewareOptions = {
    name: "omitRetryHeadersMiddleware",
    tags: ["RETRY", "HEADERS", "OMIT_RETRY_HEADERS"],
    relation: "before",
    toMiddleware: "awsAuthMiddleware",
    override: !0
  };
  var Yp4 = (I) => ({
    applyToStack: (d) => {
      d.addRelativeTo(jI0.omitRetryHeadersMiddleware(), jI0.omitRetryHeadersMiddlewareOptions)
    }
  });
  jI0.getOmitRetryHeadersPlugin = Yp4
})
// @from(Start 2390020, End 2393000)
sI0 = Y((nI0) => {
  Object.defineProperty(nI0, "__esModule", {
    value: !0
  });
  nI0.getRetryAfterHint = nI0.getRetryPlugin = nI0.retryMiddlewareOptions = nI0.retryMiddleware = void 0;
  var FI1 = J8(),
    HI1 = _L(),
    iI0 = Wd(),
    _p4 = WI1(),
    Dp4 = VI1(),
    Hp4 = (I) => (d, G) => async (Z) => {
      let C = await I.retryStrategy(),
        W = await I.maxAttempts();
      if (Fp4(C)) {
        C = C;
        let w = await C.acquireInitialRetryToken(G.partition_id),
          B = new Error,
          A = 0,
          V = 0,
          {
            request: X
          } = Z;
        if (FI1.HttpRequest.isInstance(X)) X.headers[iI0.INVOCATION_ID_HEADER] = _p4.v4();
        while (!0) try {
          if (FI1.HttpRequest.isInstance(X)) X.headers[iI0.REQUEST_HEADER] = `attempt=${A+1}; max=${W}`;
          let {
            response: _,
            output: F
          } = await d(Z);
          return C.recordSuccess(w), F.$metadata.attempts = A + 1, F.$metadata.totalRetryDelay = V, {
            response: _,
            output: F
          }
        } catch (_) {
          let F = gp4(_);
          B = Dp4.asSdkError(_);
          try {
            w = await C.refreshRetryTokenForRetry(w, F)
          } catch (J) {
            if (!B.$metadata) B.$metadata = {};
            throw B.$metadata.attempts = A + 1, B.$metadata.totalRetryDelay = V, B
          }
          A = w.getRetryCount();
          let g = w.getRetryDelay();
          V += g, await new Promise((J) => setTimeout(J, g))
        }
      } else {
        if (C = C, C === null || C === void 0 ? void 0 : C.mode) G.userAgent = [...G.userAgent || [],
          ["cfg/retry-mode", C.mode]
        ];
        return C.retry(d, Z)
      }
    };
  nI0.retryMiddleware = Hp4;
  var Fp4 = (I) => typeof I.acquireInitialRetryToken !== "undefined" && typeof I.refreshRetryTokenForRetry !== "undefined" && typeof I.recordSuccess !== "undefined",
    gp4 = (I) => {
      let d = {
          errorType: Jp4(I)
        },
        G = nI0.getRetryAfterHint(I.$response);
      if (G) d.retryAfterHint = G;
      return d
    },
    Jp4 = (I) => {
      if (HI1.isThrottlingError(I)) return "THROTTLING";
      if (HI1.isTransientError(I)) return "TRANSIENT";
      if (HI1.isServerError(I)) return "SERVER_ERROR";
      return "CLIENT_ERROR"
    };
  nI0.retryMiddlewareOptions = {
    name: "retryMiddleware",
    tags: ["RETRY"],
    step: "finalizeRequest",
    priority: "high",
    override: !0
  };
  var Kp4 = (I) => ({
    applyToStack: (d) => {
      d.add(nI0.retryMiddleware(I), nI0.retryMiddlewareOptions)
    }
  });
  nI0.getRetryPlugin = Kp4;
  var Np4 = (I) => {
    if (!FI1.HttpResponse.isInstance(I)) return;
    let d = Object.keys(I.headers).find((W) => W.toLowerCase() === "retry-after");
    if (!d) return;
    let G = I.headers[d],
      Z = Number(G);
    if (!Number.isNaN(Z)) return new Date(Z * 1000);
    return new Date(G)
  };
  nI0.getRetryAfterHint = Np4
})
// @from(Start 2393006, End 2393315)
dG = Y((KV) => {
  Object.defineProperty(KV, "__esModule", {
    value: !0
  });
  var pg = x1();
  pg.__exportStar($I0(), KV);
  pg.__exportStar(YI1(), KV);
  pg.__exportStar(bI0(), KV);
  pg.__exportStar(BI1(), KV);
  pg.__exportStar(pI0(), KV);
  pg.__exportStar(AI1(), KV);
  pg.__exportStar(sI0(), KV)
})
// @from(Start 2393321, End 2393734)
FL = Y((oI0) => {
  Object.defineProperty(oI0, "__esModule", {
    value: !0
  });
  oI0.ProviderError = void 0;
  class JI1 extends Error {
    constructor(I, d = !0) {
      super(I);
      this.tryNextLink = d, this.name = "ProviderError", Object.setPrototypeOf(this, JI1.prototype)
    }
    static from(I, d = !0) {
      return Object.assign(new this(I.message, d), I)
    }
  }
  oI0.ProviderError = JI1
})
// @from(Start 2393740, End 2394131)
dd0 = Y((tI0) => {
  Object.defineProperty(tI0, "__esModule", {
    value: !0
  });
  tI0.CredentialsProviderError = void 0;
  var Qp4 = FL();
  class KI1 extends Qp4.ProviderError {
    constructor(I, d = !0) {
      super(I, d);
      this.tryNextLink = d, this.name = "CredentialsProviderError", Object.setPrototypeOf(this, KI1.prototype)
    }
  }
  tI0.CredentialsProviderError = KI1
})
// @from(Start 2394137, End 2394510)
Cd0 = Y((Gd0) => {
  Object.defineProperty(Gd0, "__esModule", {
    value: !0
  });
  Gd0.TokenProviderError = void 0;
  var fp4 = FL();
  class NI1 extends fp4.ProviderError {
    constructor(I, d = !0) {
      super(I, d);
      this.tryNextLink = d, this.name = "TokenProviderError", Object.setPrototypeOf(this, NI1.prototype)
    }
  }
  Gd0.TokenProviderError = NI1
})
// @from(Start 2394516, End 2394953)
Bd0 = Y((Wd0) => {
  Object.defineProperty(Wd0, "__esModule", {
    value: !0
  });
  Wd0.chain = void 0;
  var qp4 = FL();

  function Rp4(...I) {
    return () => {
      let d = Promise.reject(new qp4.ProviderError("No providers in chain"));
      for (let G of I) d = d.catch((Z) => {
        if (Z === null || Z === void 0 ? void 0 : Z.tryNextLink) return G();
        throw Z
      });
      return d
    }
  }
  Wd0.chain = Rp4
})
// @from(Start 2394959, End 2395140)
Xd0 = Y((Ad0) => {
  Object.defineProperty(Ad0, "__esModule", {
    value: !0
  });
  Ad0.fromStatic = void 0;
  var Up4 = (I) => () => Promise.resolve(I);
  Ad0.fromStatic = Up4
})
// @from(Start 2395146, End 2395898)
Dd0 = Y((Yd0) => {
  Object.defineProperty(Yd0, "__esModule", {
    value: !0
  });
  Yd0.memoize = void 0;
  var vp4 = (I, d, G) => {
    let Z, C, W, w = !1,
      B = async () => {
        if (!C) C = I();
        try {
          Z = await C, W = !0, w = !1
        } finally {
          C = void 0
        }
        return Z
      };
    if (d === void 0) return async (A) => {
      if (!W || (A === null || A === void 0 ? void 0 : A.forceRefresh)) Z = await B();
      return Z
    };
    return async (A) => {
      if (!W || (A === null || A === void 0 ? void 0 : A.forceRefresh)) Z = await B();
      if (w) return Z;
      if (G && !G(Z)) return w = !0, Z;
      if (d(Z)) return await B(), Z;
      return Z
    }
  };
  Yd0.memoize = vp4
})
// @from(Start 2395904, End 2396182)
W4 = Y((L_) => {
  Object.defineProperty(L_, "__esModule", {
    value: !0
  });
  var yf = x1();
  yf.__exportStar(dd0(), L_);
  yf.__exportStar(FL(), L_);
  yf.__exportStar(Cd0(), L_);
  yf.__exportStar(Bd0(), L_);
  yf.__exportStar(Xd0(), L_);
  yf.__exportStar(Dd0(), L_)
})
// @from(Start 2396188, End 2397037)
Kc = Y((Fd0) => {
  Object.defineProperty(Fd0, "__esModule", {
    value: !0
  });
  Fd0.toHex = Fd0.fromHex = void 0;
  var Hd0 = {},
    zI1 = {};
  for (let I = 0; I < 256; I++) {
    let d = I.toString(16).toLowerCase();
    if (d.length === 1) d = `0${d}`;
    Hd0[I] = d, zI1[d] = I
  }

  function Ep4(I) {
    if (I.length % 2 !== 0) throw new Error("Hex encoded strings must have an even number length");
    let d = new Uint8Array(I.length / 2);
    for (let G = 0; G < I.length; G += 2) {
      let Z = I.slice(G, G + 2).toLowerCase();
      if (Z in zI1) d[G / 2] = zI1[Z];
      else throw new Error(`Cannot decode unrecognized sequence ${Z} as hexadecimal`)
    }
    return d
  }
  Fd0.fromHex = Ep4;

  function Mp4(I) {
    let d = "";
    for (let G = 0; G < I.byteLength; G++) d += Hd0[I[G]];
    return d
  }
  Fd0.toHex = Mp4
})
// @from(Start 2397043, End 2397331)
QI1 = Y((Jd0) => {
  Object.defineProperty(Jd0, "__esModule", {
    value: !0
  });
  Jd0.isArrayBuffer = void 0;
  var Lp4 = (I) => typeof ArrayBuffer === "function" && I instanceof ArrayBuffer || Object.prototype.toString.call(I) === "[object ArrayBuffer]";
  Jd0.isArrayBuffer = Lp4
})
// @from(Start 2397337, End 2398011)
Pf = Y((Nd0) => {
  Object.defineProperty(Nd0, "__esModule", {
    value: !0
  });
  Nd0.fromString = Nd0.fromArrayBuffer = void 0;
  var yp4 = QI1(),
    fI1 = B1("buffer"),
    Pp4 = (I, d = 0, G = I.byteLength - d) => {
      if (!yp4.isArrayBuffer(I)) throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof I} (${I})`);
      return fI1.Buffer.from(I, d, G)
    };
  Nd0.fromArrayBuffer = Pp4;
  var $p4 = (I, d) => {
    if (typeof I !== "string") throw new TypeError(`The "input" argument must be of type string. Received type ${typeof I} (${I})`);
    return d ? fI1.Buffer.from(I, d) : fI1.Buffer.from(I)
  };
  Nd0.fromString = $p4
})
// @from(Start 2398017, End 2398331)
qI1 = Y((Qd0) => {
  Object.defineProperty(Qd0, "__esModule", {
    value: !0
  });
  Qd0.fromUtf8 = void 0;
  var Tp4 = Pf(),
    Op4 = (I) => {
      let d = Tp4.fromString(I, "utf8");
      return new Uint8Array(d.buffer, d.byteOffset, d.byteLength / Uint8Array.BYTES_PER_ELEMENT)
    };
  Qd0.fromUtf8 = Op4
})
// @from(Start 2398337, End 2398735)
Ud0 = Y((qd0) => {
  Object.defineProperty(qd0, "__esModule", {
    value: !0
  });
  qd0.toUint8Array = void 0;
  var mp4 = qI1(),
    lp4 = (I) => {
      if (typeof I === "string") return mp4.fromUtf8(I);
      if (ArrayBuffer.isView(I)) return new Uint8Array(I.buffer, I.byteOffset, I.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      return new Uint8Array(I)
    };
  qd0.toUint8Array = lp4
})
// @from(Start 2398741, End 2398980)
Md0 = Y((vd0) => {
  Object.defineProperty(vd0, "__esModule", {
    value: !0
  });
  vd0.toUtf8 = void 0;
  var bp4 = Pf(),
    hp4 = (I) => bp4.fromArrayBuffer(I.buffer, I.byteOffset, I.byteLength).toString("utf8");
  vd0.toUtf8 = hp4
})
// @from(Start 2398986, End 2399179)
hC = Y((gL) => {
  Object.defineProperty(gL, "__esModule", {
    value: !0
  });
  var RI1 = x1();
  RI1.__exportStar(qI1(), gL);
  RI1.__exportStar(Ud0(), gL);
  RI1.__exportStar(Md0(), gL)
})
// @from(Start 2399185, End 2401544)
ig = Y((Sd0) => {
  Object.defineProperty(Sd0, "__esModule", {
    value: !0
  });
  Sd0.MAX_PRESIGNED_TTL = Sd0.KEY_TYPE_IDENTIFIER = Sd0.MAX_CACHE_SIZE = Sd0.UNSIGNED_PAYLOAD = Sd0.EVENT_ALGORITHM_IDENTIFIER = Sd0.ALGORITHM_IDENTIFIER_V4A = Sd0.ALGORITHM_IDENTIFIER = Sd0.UNSIGNABLE_PATTERNS = Sd0.SEC_HEADER_PATTERN = Sd0.PROXY_HEADER_PATTERN = Sd0.ALWAYS_UNSIGNABLE_HEADERS = Sd0.HOST_HEADER = Sd0.TOKEN_HEADER = Sd0.SHA256_HEADER = Sd0.SIGNATURE_HEADER = Sd0.GENERATED_HEADERS = Sd0.DATE_HEADER = Sd0.AMZ_DATE_HEADER = Sd0.AUTH_HEADER = Sd0.REGION_SET_PARAM = Sd0.TOKEN_QUERY_PARAM = Sd0.SIGNATURE_QUERY_PARAM = Sd0.EXPIRES_QUERY_PARAM = Sd0.SIGNED_HEADERS_QUERY_PARAM = Sd0.AMZ_DATE_QUERY_PARAM = Sd0.CREDENTIAL_QUERY_PARAM = Sd0.ALGORITHM_QUERY_PARAM = void 0;
  Sd0.ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
  Sd0.CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
  Sd0.AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
  Sd0.SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
  Sd0.EXPIRES_QUERY_PARAM = "X-Amz-Expires";
  Sd0.SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
  Sd0.TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
  Sd0.REGION_SET_PARAM = "X-Amz-Region-Set";
  Sd0.AUTH_HEADER = "authorization";
  Sd0.AMZ_DATE_HEADER = Sd0.AMZ_DATE_QUERY_PARAM.toLowerCase();
  Sd0.DATE_HEADER = "date";
  Sd0.GENERATED_HEADERS = [Sd0.AUTH_HEADER, Sd0.AMZ_DATE_HEADER, Sd0.DATE_HEADER];
  Sd0.SIGNATURE_HEADER = Sd0.SIGNATURE_QUERY_PARAM.toLowerCase();
  Sd0.SHA256_HEADER = "x-amz-content-sha256";
  Sd0.TOKEN_HEADER = Sd0.TOKEN_QUERY_PARAM.toLowerCase();
  Sd0.HOST_HEADER = "host";
  Sd0.ALWAYS_UNSIGNABLE_HEADERS = {
    authorization: !0,
    "cache-control": !0,
    connection: !0,
    expect: !0,
    from: !0,
    "keep-alive": !0,
    "max-forwards": !0,
    pragma: !0,
    referer: !0,
    te: !0,
    trailer: !0,
    "transfer-encoding": !0,
    upgrade: !0,
    "user-agent": !0,
    "x-amzn-trace-id": !0
  };
  Sd0.PROXY_HEADER_PATTERN = /^proxy-/;
  Sd0.SEC_HEADER_PATTERN = /^sec-/;
  Sd0.UNSIGNABLE_PATTERNS = [/^proxy-/i, /^sec-/i];
  Sd0.ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
  Sd0.ALGORITHM_IDENTIFIER_V4A = "AWS4-ECDSA-P256-SHA256";
  Sd0.EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
  Sd0.UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
  Sd0.MAX_CACHE_SIZE = 50;
  Sd0.KEY_TYPE_IDENTIFIER = "aws4_request";
  Sd0.MAX_PRESIGNED_TTL = 604800
})
// @from(Start 2401550, End 2402568)
vI1 = Y((ld0) => {
  Object.defineProperty(ld0, "__esModule", {
    value: !0
  });
  ld0.clearCredentialCache = ld0.getSigningKey = ld0.createScope = void 0;
  var Bi4 = Kc(),
    Ai4 = hC(),
    UI1 = ig(),
    $f = {},
    Nc = [],
    Vi4 = (I, d, G) => `${I}/${d}/${G}/${UI1.KEY_TYPE_IDENTIFIER}`;
  ld0.createScope = Vi4;
  var Xi4 = async (I, d, G, Z, C) => {
    let W = await md0(I, d.secretAccessKey, d.accessKeyId),
      w = `${G}:${Z}:${C}:${Bi4.toHex(W)}:${d.sessionToken}`;
    if (w in $f) return $f[w];
    Nc.push(w);
    while (Nc.length > UI1.MAX_CACHE_SIZE) delete $f[Nc.shift()];
    let B = `AWS4${d.secretAccessKey}`;
    for (let A of [G, Z, C, UI1.KEY_TYPE_IDENTIFIER]) B = await md0(I, B, A);
    return $f[w] = B
  };
  ld0.getSigningKey = Xi4;
  var Yi4 = () => {
    Nc.length = 0, Object.keys($f).forEach((I) => {
      delete $f[I]
    })
  };
  ld0.clearCredentialCache = Yi4;
  var md0 = (I, d, G) => {
    let Z = new I(d);
    return Z.update(Ai4.toUint8Array(G)), Z.digest()
  }
})
// @from(Start 2402574, End 2403231)
MI1 = Y((hd0) => {
  Object.defineProperty(hd0, "__esModule", {
    value: !0
  });
  hd0.getCanonicalHeaders = void 0;
  var EI1 = ig(),
    Hi4 = ({
      headers: I
    }, d, G) => {
      let Z = {};
      for (let C of Object.keys(I).sort()) {
        if (I[C] == null) continue;
        let W = C.toLowerCase();
        if (W in EI1.ALWAYS_UNSIGNABLE_HEADERS || (d === null || d === void 0 ? void 0 : d.has(W)) || EI1.PROXY_HEADER_PATTERN.test(W) || EI1.SEC_HEADER_PATTERN.test(W)) {
          if (!G || G && !G.has(W)) continue
        }
        Z[W] = I[C].trim().replace(/\s+/g, " ")
      }
      return Z
    };
  hd0.getCanonicalHeaders = Hi4
})
// @from(Start 2403237, End 2403507)
SI1 = Y((kd0) => {
  Object.defineProperty(kd0, "__esModule", {
    value: !0
  });
  kd0.escapeUri = void 0;
  var Fi4 = (I) => encodeURIComponent(I).replace(/[!'()*]/g, gi4);
  kd0.escapeUri = Fi4;
  var gi4 = (I) => `%${I.charCodeAt(0).toString(16).toUpperCase()}`
})
// @from(Start 2403513, End 2403734)
id0 = Y((cd0) => {
  Object.defineProperty(cd0, "__esModule", {
    value: !0
  });
  cd0.escapeUriPath = void 0;
  var Ji4 = SI1(),
    Ki4 = (I) => I.split("/").map(Ji4.escapeUri).join("/");
  cd0.escapeUriPath = Ki4
})
// @from(Start 2403740, End 2403903)
LI1 = Y((zc) => {
  Object.defineProperty(zc, "__esModule", {
    value: !0
  });
  var nd0 = x1();
  nd0.__exportStar(SI1(), zc);
  nd0.__exportStar(id0(), zc)
})
// @from(Start 2403909, End 2404623)
yI1 = Y((rd0) => {
  Object.defineProperty(rd0, "__esModule", {
    value: !0
  });
  rd0.getCanonicalQuery = void 0;
  var Qc = LI1(),
    Ni4 = ig(),
    zi4 = ({
      query: I = {}
    }) => {
      let d = [],
        G = {};
      for (let Z of Object.keys(I).sort()) {
        if (Z.toLowerCase() === Ni4.SIGNATURE_HEADER) continue;
        d.push(Z);
        let C = I[Z];
        if (typeof C === "string") G[Z] = `${Qc.escapeUri(Z)}=${Qc.escapeUri(C)}`;
        else if (Array.isArray(C)) G[Z] = C.slice(0).sort().reduce((W, w) => W.concat([`${Qc.escapeUri(Z)}=${Qc.escapeUri(w)}`]), []).join("&")
      }
      return d.map((Z) => G[Z]).filter((Z) => Z).join("&")
    };
  rd0.getCanonicalQuery = zi4
})
// @from(Start 2404629, End 2405337)
PI1 = Y((od0) => {
  Object.defineProperty(od0, "__esModule", {
    value: !0
  });
  od0.getPayloadHash = void 0;
  var Qi4 = QI1(),
    fi4 = Kc(),
    qi4 = hC(),
    sd0 = ig(),
    Ri4 = async ({
      headers: I,
      body: d
    }, G) => {
      for (let Z of Object.keys(I))
        if (Z.toLowerCase() === sd0.SHA256_HEADER) return I[Z];
      if (d == null) return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
      else if (typeof d === "string" || ArrayBuffer.isView(d) || Qi4.isArrayBuffer(d)) {
        let Z = new G;
        return Z.update(qi4.toUint8Array(d)), fi4.toHex(await Z.digest())
      }
      return sd0.UNSIGNED_PAYLOAD
    };
  od0.getPayloadHash = Ri4
})
// @from(Start 2405343, End 2405995)
dG0 = Y((td0) => {
  Object.defineProperty(td0, "__esModule", {
    value: !0
  });
  td0.deleteHeader = td0.getHeaderValue = td0.hasHeader = void 0;
  var Ui4 = (I, d) => {
    I = I.toLowerCase();
    for (let G of Object.keys(d))
      if (I === G.toLowerCase()) return !0;
    return !1
  };
  td0.hasHeader = Ui4;
  var vi4 = (I, d) => {
    I = I.toLowerCase();
    for (let G of Object.keys(d))
      if (I === G.toLowerCase()) return d[G];
    return
  };
  td0.getHeaderValue = vi4;
  var Ei4 = (I, d) => {
    I = I.toLowerCase();
    for (let G of Object.keys(d))
      if (I === G.toLowerCase()) delete d[G]
  };
  td0.deleteHeader = Ei4
})
// @from(Start 2406001, End 2406491)
uI1 = Y((GG0) => {
  Object.defineProperty(GG0, "__esModule", {
    value: !0
  });
  GG0.cloneQuery = GG0.cloneRequest = void 0;
  var Li4 = ({
    headers: I,
    query: d,
    ...G
  }) => ({
    ...G,
    headers: {
      ...I
    },
    query: d ? GG0.cloneQuery(d) : void 0
  });
  GG0.cloneRequest = Li4;
  var yi4 = (I) => Object.keys(I).reduce((d, G) => {
    let Z = I[G];
    return {
      ...d,
      [G]: Array.isArray(Z) ? [...Z] : Z
    }
  }, {});
  GG0.cloneQuery = yi4
})
// @from(Start 2406497, End 2407140)
TI1 = Y((ZG0) => {
  Object.defineProperty(ZG0, "__esModule", {
    value: !0
  });
  ZG0.moveHeadersToQuery = void 0;
  var $i4 = uI1(),
    ui4 = (I, d = {}) => {
      var G;
      let {
        headers: Z,
        query: C = {}
      } = typeof I.clone === "function" ? I.clone() : $i4.cloneRequest(I);
      for (let W of Object.keys(Z)) {
        let w = W.toLowerCase();
        if (w.slice(0, 6) === "x-amz-" && !((G = d.unhoistableHeaders) === null || G === void 0 ? void 0 : G.has(w))) C[W] = Z[W], delete Z[W]
      }
      return {
        ...I,
        headers: Z,
        query: C
      }
    };
  ZG0.moveHeadersToQuery = ui4
})
// @from(Start 2407146, End 2407571)
OI1 = Y((WG0) => {
  Object.defineProperty(WG0, "__esModule", {
    value: !0
  });
  WG0.prepareRequest = void 0;
  var Ti4 = uI1(),
    Oi4 = ig(),
    mi4 = (I) => {
      I = typeof I.clone === "function" ? I.clone() : Ti4.cloneRequest(I);
      for (let d of Object.keys(I.headers))
        if (Oi4.GENERATED_HEADERS.indexOf(d.toLowerCase()) > -1) delete I.headers[d];
      return I
    };
  WG0.prepareRequest = mi4
})
// @from(Start 2407577, End 2408031)
AG0 = Y((BG0) => {
  Object.defineProperty(BG0, "__esModule", {
    value: !0
  });
  BG0.toDate = BG0.iso8601 = void 0;
  var li4 = (I) => BG0.toDate(I).toISOString().replace(/\.\d{3}Z$/, "Z");
  BG0.iso8601 = li4;
  var bi4 = (I) => {
    if (typeof I === "number") return new Date(I * 1000);
    if (typeof I === "string") {
      if (Number(I)) return new Date(Number(I) * 1000);
      return new Date(I)
    }
    return I
  };
  BG0.toDate = bi4
})
// @from(Start 2408037, End 2414536)
gG0 = Y((HG0) => {
  Object.defineProperty(HG0, "__esModule", {
    value: !0
  });
  HG0.SignatureV4 = void 0;
  var fc = Kc(),
    VG0 = M_(),
    lI1 = hC(),
    r8 = ig(),
    qc = vI1(),
    XG0 = MI1(),
    ji4 = yI1(),
    bI1 = PI1(),
    ki4 = dG0(),
    xi4 = TI1(),
    YG0 = OI1(),
    ci4 = AG0();
  class DG0 {
    constructor({
      applyChecksum: I,
      credentials: d,
      region: G,
      service: Z,
      sha256: C,
      uriEscapePath: W = !0
    }) {
      this.service = Z, this.sha256 = C, this.uriEscapePath = W, this.applyChecksum = typeof I === "boolean" ? I : !0, this.regionProvider = VG0.normalizeProvider(G), this.credentialProvider = VG0.normalizeProvider(d)
    }
    async presign(I, d = {}) {
      let {
        signingDate: G = new Date,
        expiresIn: Z = 3600,
        unsignableHeaders: C,
        unhoistableHeaders: W,
        signableHeaders: w,
        signingRegion: B,
        signingService: A
      } = d, V = await this.credentialProvider();
      this.validateResolvedCredentials(V);
      let X = B !== null && B !== void 0 ? B : await this.regionProvider(),
        {
          longDate: _,
          shortDate: F
        } = Rc(G);
      if (Z > r8.MAX_PRESIGNED_TTL) return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
      let g = qc.createScope(F, X, A !== null && A !== void 0 ? A : this.service),
        J = xi4.moveHeadersToQuery(YG0.prepareRequest(I), {
          unhoistableHeaders: W
        });
      if (V.sessionToken) J.query[r8.TOKEN_QUERY_PARAM] = V.sessionToken;
      J.query[r8.ALGORITHM_QUERY_PARAM] = r8.ALGORITHM_IDENTIFIER, J.query[r8.CREDENTIAL_QUERY_PARAM] = `${V.accessKeyId}/${g}`, J.query[r8.AMZ_DATE_QUERY_PARAM] = _, J.query[r8.EXPIRES_QUERY_PARAM] = Z.toString(10);
      let K = XG0.getCanonicalHeaders(J, C, w);
      return J.query[r8.SIGNED_HEADERS_QUERY_PARAM] = _G0(K), J.query[r8.SIGNATURE_QUERY_PARAM] = await this.getSignature(_, g, this.getSigningKey(V, X, F, A), this.createCanonicalRequest(J, K, await bI1.getPayloadHash(I, this.sha256))), J
    }
    async sign(I, d) {
      if (typeof I === "string") return this.signString(I, d);
      else if (I.headers && I.payload) return this.signEvent(I, d);
      else return this.signRequest(I, d)
    }
    async signEvent({
      headers: I,
      payload: d
    }, {
      signingDate: G = new Date,
      priorSignature: Z,
      signingRegion: C,
      signingService: W
    }) {
      let w = C !== null && C !== void 0 ? C : await this.regionProvider(),
        {
          shortDate: B,
          longDate: A
        } = Rc(G),
        V = qc.createScope(B, w, W !== null && W !== void 0 ? W : this.service),
        X = await bI1.getPayloadHash({
          headers: {},
          body: d
        }, this.sha256),
        _ = new this.sha256;
      _.update(I);
      let F = fc.toHex(await _.digest()),
        g = [r8.EVENT_ALGORITHM_IDENTIFIER, A, V, Z, F, X].join(`
`);
      return this.signString(g, {
        signingDate: G,
        signingRegion: w,
        signingService: W
      })
    }
    async signString(I, {
      signingDate: d = new Date,
      signingRegion: G,
      signingService: Z
    } = {}) {
      let C = await this.credentialProvider();
      this.validateResolvedCredentials(C);
      let W = G !== null && G !== void 0 ? G : await this.regionProvider(),
        {
          shortDate: w
        } = Rc(d),
        B = new this.sha256(await this.getSigningKey(C, W, w, Z));
      return B.update(lI1.toUint8Array(I)), fc.toHex(await B.digest())
    }
    async signRequest(I, {
      signingDate: d = new Date,
      signableHeaders: G,
      unsignableHeaders: Z,
      signingRegion: C,
      signingService: W
    } = {}) {
      let w = await this.credentialProvider();
      this.validateResolvedCredentials(w);
      let B = C !== null && C !== void 0 ? C : await this.regionProvider(),
        A = YG0.prepareRequest(I),
        {
          longDate: V,
          shortDate: X
        } = Rc(d),
        _ = qc.createScope(X, B, W !== null && W !== void 0 ? W : this.service);
      if (A.headers[r8.AMZ_DATE_HEADER] = V, w.sessionToken) A.headers[r8.TOKEN_HEADER] = w.sessionToken;
      let F = await bI1.getPayloadHash(A, this.sha256);
      if (!ki4.hasHeader(r8.SHA256_HEADER, A.headers) && this.applyChecksum) A.headers[r8.SHA256_HEADER] = F;
      let g = XG0.getCanonicalHeaders(A, Z, G),
        J = await this.getSignature(V, _, this.getSigningKey(w, B, X, W), this.createCanonicalRequest(A, g, F));
      return A.headers[r8.AUTH_HEADER] = `${r8.ALGORITHM_IDENTIFIER} Credential=${w.accessKeyId}/${_}, SignedHeaders=${_G0(g)}, Signature=${J}`, A
    }
    createCanonicalRequest(I, d, G) {
      let Z = Object.keys(d).sort();
      return `${I.method}
${this.getCanonicalPath(I)}
${ji4.getCanonicalQuery(I)}
${Z.map((C)=>`${C}:${d[C]}`).join(`
`)}

${Z.join(";")}
${G}`
    }
    async createStringToSign(I, d, G) {
      let Z = new this.sha256;
      Z.update(lI1.toUint8Array(G));
      let C = await Z.digest();
      return `${r8.ALGORITHM_IDENTIFIER}
${I}
${d}
${fc.toHex(C)}`
    }
    getCanonicalPath({
      path: I
    }) {
      if (this.uriEscapePath) {
        let d = [];
        for (let C of I.split("/")) {
          if ((C === null || C === void 0 ? void 0 : C.length) === 0) continue;
          if (C === ".") continue;
          if (C === "..") d.pop();
          else d.push(C)
        }
        let G = `${(I===null||I===void 0?void 0:I.startsWith("/"))?"/":""}${d.join("/")}${d.length>0&&(I===null||I===void 0?void 0:I.endsWith("/"))?"/":""}`;
        return encodeURIComponent(G).replace(/%2F/g, "/")
      }
      return I
    }
    async getSignature(I, d, G, Z) {
      let C = await this.createStringToSign(I, d, Z),
        W = new this.sha256(await G);
      return W.update(lI1.toUint8Array(C)), fc.toHex(await W.digest())
    }
    getSigningKey(I, d, G, Z) {
      return qc.getSigningKey(this.sha256, I, G, d, Z || this.service)
    }
    validateResolvedCredentials(I) {
      if (typeof I !== "object" || typeof I.accessKeyId !== "string" || typeof I.secretAccessKey !== "string") throw new Error("Resolved credential object is not valid")
    }
  }
  HG0.SignatureV4 = DG0;
  var Rc = (I) => {
      let d = ci4.iso8601(I).replace(/[\-:]/g, "");
      return {
        longDate: d,
        shortDate: d.slice(0, 8)
      }
    },
    _G0 = (I) => Object.keys(I).sort().join(";")
})
// @from(Start 2414542, End 2415616)
hI1 = Y((NV) => {
  Object.defineProperty(NV, "__esModule", {
    value: !0
  });
  NV.prepareRequest = NV.moveHeadersToQuery = NV.getPayloadHash = NV.getCanonicalQuery = NV.getCanonicalHeaders = void 0;
  var JG0 = x1();
  JG0.__exportStar(gG0(), NV);
  var pi4 = MI1();
  Object.defineProperty(NV, "getCanonicalHeaders", {
    enumerable: !0,
    get: function() {
      return pi4.getCanonicalHeaders
    }
  });
  var ii4 = yI1();
  Object.defineProperty(NV, "getCanonicalQuery", {
    enumerable: !0,
    get: function() {
      return ii4.getCanonicalQuery
    }
  });
  var ni4 = PI1();
  Object.defineProperty(NV, "getPayloadHash", {
    enumerable: !0,
    get: function() {
      return ni4.getPayloadHash
    }
  });
  var ri4 = TI1();
  Object.defineProperty(NV, "moveHeadersToQuery", {
    enumerable: !0,
    get: function() {
      return ri4.moveHeadersToQuery
    }
  });
  var ai4 = OI1();
  Object.defineProperty(NV, "prepareRequest", {
    enumerable: !0,
    get: function() {
      return ai4.prepareRequest
    }
  });
  JG0.__exportStar(vI1(), NV)
})
// @from(Start 2415622, End 2418626)
QG0 = Y((NG0) => {
  Object.defineProperty(NG0, "__esModule", {
    value: !0
  });
  NG0.resolveSigV4AuthConfig = NG0.resolveAwsAuthConfig = void 0;
  var oi4 = W4(),
    jI1 = hI1(),
    uf = M_(),
    ei4 = 300000,
    ti4 = (I) => {
      let d = I.credentials ? KG0(I.credentials) : I.credentialDefaultProvider(I),
        {
          signingEscapePath: G = !0,
          systemClockOffset: Z = I.systemClockOffset || 0,
          sha256: C
        } = I,
        W;
      if (I.signer) W = uf.normalizeProvider(I.signer);
      else if (I.regionInfoProvider) W = () => uf.normalizeProvider(I.region)().then(async (w) => [await I.regionInfoProvider(w, {
        useFipsEndpoint: await I.useFipsEndpoint(),
        useDualstackEndpoint: await I.useDualstackEndpoint()
      }) || {}, w]).then(([w, B]) => {
        let {
          signingRegion: A,
          signingService: V
        } = w;
        I.signingRegion = I.signingRegion || A || B, I.signingName = I.signingName || V || I.serviceId;
        let X = {
          ...I,
          credentials: d,
          region: I.signingRegion,
          service: I.signingName,
          sha256: C,
          uriEscapePath: G
        };
        return new(I.signerConstructor || jI1.SignatureV4)(X)
      });
      else W = async (w) => {
        w = Object.assign({}, {
          name: "sigv4",
          signingName: I.signingName || I.defaultSigningName,
          signingRegion: await uf.normalizeProvider(I.region)(),
          properties: {}
        }, w);
        let {
          signingRegion: B,
          signingName: A
        } = w;
        I.signingRegion = I.signingRegion || B, I.signingName = I.signingName || A || I.serviceId;
        let V = {
          ...I,
          credentials: d,
          region: I.signingRegion,
          service: I.signingName,
          sha256: C,
          uriEscapePath: G
        };
        return new(I.signerConstructor || jI1.SignatureV4)(V)
      };
      return {
        ...I,
        systemClockOffset: Z,
        signingEscapePath: G,
        credentials: d,
        signer: W
      }
    };
  NG0.resolveAwsAuthConfig = ti4;
  var In4 = (I) => {
    let d = I.credentials ? KG0(I.credentials) : I.credentialDefaultProvider(I),
      {
        signingEscapePath: G = !0,
        systemClockOffset: Z = I.systemClockOffset || 0,
        sha256: C
      } = I,
      W;
    if (I.signer) W = uf.normalizeProvider(I.signer);
    else W = uf.normalizeProvider(new jI1.SignatureV4({
      credentials: d,
      region: I.region,
      service: I.signingName,
      sha256: C,
      uriEscapePath: G
    }));
    return {
      ...I,
      systemClockOffset: Z,
      signingEscapePath: G,
      credentials: d,
      signer: W
    }
  };
  NG0.resolveSigV4AuthConfig = In4;
  var KG0 = (I) => {
    if (typeof I === "function") return oi4.memoize(I, (d) => d.expiration !== void 0 && d.expiration.getTime() - Date.now() < ei4, (d) => d.expiration !== void 0);
    return uf.normalizeProvider(I)
  }
})
// @from(Start 2418632, End 2418833)
kI1 = Y((fG0) => {
  Object.defineProperty(fG0, "__esModule", {
    value: !0
  });
  fG0.getSkewCorrectedDate = void 0;
  var Gn4 = (I) => new Date(Date.now() + I);
  fG0.getSkewCorrectedDate = Gn4
})
// @from(Start 2418839, End 2419083)
vG0 = Y((RG0) => {
  Object.defineProperty(RG0, "__esModule", {
    value: !0
  });
  RG0.isClockSkewed = void 0;
  var Zn4 = kI1(),
    Cn4 = (I, d) => Math.abs(Zn4.getSkewCorrectedDate(d).getTime() - I) >= 300000;
  RG0.isClockSkewed = Cn4
})
// @from(Start 2419089, End 2419409)
SG0 = Y((EG0) => {
  Object.defineProperty(EG0, "__esModule", {
    value: !0
  });
  EG0.getUpdatedSystemClockOffset = void 0;
  var Wn4 = vG0(),
    wn4 = (I, d) => {
      let G = Date.parse(I);
      if (Wn4.isClockSkewed(G, d)) return G - Date.now();
      return d
    };
  EG0.getUpdatedSystemClockOffset = wn4
})
// @from(Start 2419415, End 2421555)
lG0 = Y(($G0) => {
  Object.defineProperty($G0, "__esModule", {
    value: !0
  });
  $G0.getSigV4AuthPlugin = $G0.getAwsAuthPlugin = $G0.awsAuthMiddlewareOptions = $G0.awsAuthMiddleware = void 0;
  var PG0 = J8(),
    Bn4 = kI1(),
    LG0 = SG0(),
    An4 = (I) => (d, G) => async function(Z) {
      var C, W, w, B;
      if (!PG0.HttpRequest.isInstance(Z.request)) return d(Z);
      let A = (w = (W = (C = G.endpointV2) === null || C === void 0 ? void 0 : C.properties) === null || W === void 0 ? void 0 : W.authSchemes) === null || w === void 0 ? void 0 : w[0],
        V = (A === null || A === void 0 ? void 0 : A.name) === "sigv4a" ? (B = A === null || A === void 0 ? void 0 : A.signingRegionSet) === null || B === void 0 ? void 0 : B.join(",") : void 0,
        X = await I.signer(A),
        _ = await d({
          ...Z,
          request: await X.sign(Z.request, {
            signingDate: Bn4.getSkewCorrectedDate(I.systemClockOffset),
            signingRegion: V || G.signing_region,
            signingService: G.signing_service
          })
        }).catch((g) => {
          var J;
          let K = (J = g.ServerTime) !== null && J !== void 0 ? J : yG0(g.$response);
          if (K) I.systemClockOffset = LG0.getUpdatedSystemClockOffset(K, I.systemClockOffset);
          throw g
        }),
        F = yG0(_.response);
      if (F) I.systemClockOffset = LG0.getUpdatedSystemClockOffset(F, I.systemClockOffset);
      return _
    };
  $G0.awsAuthMiddleware = An4;
  var yG0 = (I) => {
    var d, G, Z;
    return PG0.HttpResponse.isInstance(I) ? (G = (d = I.headers) === null || d === void 0 ? void 0 : d.date) !== null && G !== void 0 ? G : (Z = I.headers) === null || Z === void 0 ? void 0 : Z.Date : void 0
  };
  $G0.awsAuthMiddlewareOptions = {
    name: "awsAuthMiddleware",
    tags: ["SIGNATURE", "AWSAUTH"],
    relation: "after",
    toMiddleware: "retryMiddleware",
    override: !0
  };
  var Vn4 = (I) => ({
    applyToStack: (d) => {
      d.addRelativeTo($G0.awsAuthMiddleware(I), $G0.awsAuthMiddlewareOptions)
    }
  });
  $G0.getAwsAuthPlugin = Vn4;
  $G0.getSigV4AuthPlugin = $G0.getAwsAuthPlugin
})
// @from(Start 2421561, End 2421723)
A9 = Y((Uc) => {
  Object.defineProperty(Uc, "__esModule", {
    value: !0
  });
  var bG0 = x1();
  bG0.__exportStar(QG0(), Uc);
  bG0.__exportStar(lG0(), Uc)
})
// @from(Start 2421729, End 2422066)
kG0 = Y((hG0) => {
  Object.defineProperty(hG0, "__esModule", {
    value: !0
  });
  hG0.resolveUserAgentConfig = void 0;

  function Xn4(I) {
    return {
      ...I,
      customUserAgent: typeof I.customUserAgent === "string" ? [
        [I.customUserAgent]
      ] : I.customUserAgent
    }
  }
  hG0.resolveUserAgentConfig = Xn4
})
// @from(Start 2422072, End 2427110)
xG0 = Y((sa9, Yn4) => {
  Yn4.exports = {
    partitions: [{
      id: "aws",
      outputs: {
        dnsSuffix: "amazonaws.com",
        dualStackDnsSuffix: "api.aws",
        name: "aws",
        supportsDualStack: !0,
        supportsFIPS: !0
      },
      regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
      regions: {
        "af-south-1": {
          description: "Africa (Cape Town)"
        },
        "ap-east-1": {
          description: "Asia Pacific (Hong Kong)"
        },
        "ap-northeast-1": {
          description: "Asia Pacific (Tokyo)"
        },
        "ap-northeast-2": {
          description: "Asia Pacific (Seoul)"
        },
        "ap-northeast-3": {
          description: "Asia Pacific (Osaka)"
        },
        "ap-south-1": {
          description: "Asia Pacific (Mumbai)"
        },
        "ap-south-2": {
          description: "Asia Pacific (Hyderabad)"
        },
        "ap-southeast-1": {
          description: "Asia Pacific (Singapore)"
        },
        "ap-southeast-2": {
          description: "Asia Pacific (Sydney)"
        },
        "ap-southeast-3": {
          description: "Asia Pacific (Jakarta)"
        },
        "ap-southeast-4": {
          description: "Asia Pacific (Melbourne)"
        },
        "aws-global": {
          description: "AWS Standard global region"
        },
        "ca-central-1": {
          description: "Canada (Central)"
        },
        "eu-central-1": {
          description: "Europe (Frankfurt)"
        },
        "eu-central-2": {
          description: "Europe (Zurich)"
        },
        "eu-north-1": {
          description: "Europe (Stockholm)"
        },
        "eu-south-1": {
          description: "Europe (Milan)"
        },
        "eu-south-2": {
          description: "Europe (Spain)"
        },
        "eu-west-1": {
          description: "Europe (Ireland)"
        },
        "eu-west-2": {
          description: "Europe (London)"
        },
        "eu-west-3": {
          description: "Europe (Paris)"
        },
        "me-central-1": {
          description: "Middle East (UAE)"
        },
        "me-south-1": {
          description: "Middle East (Bahrain)"
        },
        "sa-east-1": {
          description: "South America (Sao Paulo)"
        },
        "us-east-1": {
          description: "US East (N. Virginia)"
        },
        "us-east-2": {
          description: "US East (Ohio)"
        },
        "us-west-1": {
          description: "US West (N. California)"
        },
        "us-west-2": {
          description: "US West (Oregon)"
        }
      }
    }, {
      id: "aws-cn",
      outputs: {
        dnsSuffix: "amazonaws.com.cn",
        dualStackDnsSuffix: "api.amazonwebservices.com.cn",
        name: "aws-cn",
        supportsDualStack: !0,
        supportsFIPS: !0
      },
      regionRegex: "^cn\\-\\w+\\-\\d+$",
      regions: {
        "aws-cn-global": {
          description: "AWS China global region"
        },
        "cn-north-1": {
          description: "China (Beijing)"
        },
        "cn-northwest-1": {
          description: "China (Ningxia)"
        }
      }
    }, {
      id: "aws-us-gov",
      outputs: {
        dnsSuffix: "amazonaws.com",
        dualStackDnsSuffix: "api.aws",
        name: "aws-us-gov",
        supportsDualStack: !0,
        supportsFIPS: !0
      },
      regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
      regions: {
        "aws-us-gov-global": {
          description: "AWS GovCloud (US) global region"
        },
        "us-gov-east-1": {
          description: "AWS GovCloud (US-East)"
        },
        "us-gov-west-1": {
          description: "AWS GovCloud (US-West)"
        }
      }
    }, {
      id: "aws-iso",
      outputs: {
        dnsSuffix: "c2s.ic.gov",
        dualStackDnsSuffix: "c2s.ic.gov",
        name: "aws-iso",
        supportsDualStack: !1,
        supportsFIPS: !0
      },
      regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
      regions: {
        "aws-iso-global": {
          description: "AWS ISO (US) global region"
        },
        "us-iso-east-1": {
          description: "US ISO East"
        },
        "us-iso-west-1": {
          description: "US ISO WEST"
        }
      }
    }, {
      id: "aws-iso-b",
      outputs: {
        dnsSuffix: "sc2s.sgov.gov",
        dualStackDnsSuffix: "sc2s.sgov.gov",
        name: "aws-iso-b",
        supportsDualStack: !1,
        supportsFIPS: !0
      },
      regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
      regions: {
        "aws-iso-b-global": {
          description: "AWS ISOB (US) global region"
        },
        "us-isob-east-1": {
          description: "US ISOB East (Ohio)"
        }
      }
    }, {
      id: "aws-iso-e",
      outputs: {
        dnsSuffix: "cloud.adc-e.uk",
        dualStackDnsSuffix: "cloud.adc-e.uk",
        name: "aws-iso-e",
        supportsDualStack: !1,
        supportsFIPS: !0
      },
      regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
      regions: {}
    }],
    version: "1.1"
  }
})
// @from(Start 2427116, End 2428385)
xI1 = Y((nG0) => {
  Object.defineProperty(nG0, "__esModule", {
    value: !0
  });
  nG0.getUserAgentPrefix = nG0.useDefaultPartitionInfo = nG0.setPartitionInfo = nG0.partition = void 0;
  var _n4 = x1(),
    cG0 = _n4.__importDefault(xG0()),
    pG0 = cG0.default,
    iG0 = "",
    Dn4 = (I) => {
      let {
        partitions: d
      } = pG0;
      for (let Z of d) {
        let {
          regions: C,
          outputs: W
        } = Z;
        for (let [w, B] of Object.entries(C))
          if (w === I) return {
            ...W,
            ...B
          }
      }
      for (let Z of d) {
        let {
          regionRegex: C,
          outputs: W
        } = Z;
        if (new RegExp(C).test(I)) return {
          ...W
        }
      }
      let G = d.find((Z) => Z.id === "aws");
      if (!G) throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
      return {
        ...G.outputs
      }
    };
  nG0.partition = Dn4;
  var Hn4 = (I, d = "") => {
    pG0 = I, iG0 = d
  };
  nG0.setPartitionInfo = Hn4;
  var Fn4 = () => {
    nG0.setPartitionInfo(cG0.default, "")
  };
  nG0.useDefaultPartitionInfo = Fn4;
  var gn4 = () => iG0;
  nG0.getUserAgentPrefix = gn4
})
// @from(Start 2428391, End 2428529)
eG0 = Y((sG0) => {
  Object.defineProperty(sG0, "__esModule", {
    value: !0
  });
  sG0.debugId = void 0;
  sG0.debugId = "endpoints"
})
// @from(Start 2428535, End 2428913)
dZ0 = Y((tG0) => {
  Object.defineProperty(tG0, "__esModule", {
    value: !0
  });
  tG0.toDebugString = void 0;

  function cI1(I) {
    if (typeof I !== "object" || I == null) return I;
    if ("ref" in I) return `$${cI1(I.ref)}`;
    if ("fn" in I) return `${I.fn}(${(I.argv||[]).map(cI1).join(", ")})`;
    return JSON.stringify(I, null, 2)
  }
  tG0.toDebugString = cI1
})
// @from(Start 2428919, End 2429081)
JL = Y((vc) => {
  Object.defineProperty(vc, "__esModule", {
    value: !0
  });
  var GZ0 = x1();
  GZ0.__exportStar(eG0(), vc);
  GZ0.__exportStar(dZ0(), vc)
})
// @from(Start 2429087, End 2429338)
wZ0 = Y((CZ0) => {
  Object.defineProperty(CZ0, "__esModule", {
    value: !0
  });
  CZ0.EndpointError = void 0;
  class ZZ0 extends Error {
    constructor(I) {
      super(I);
      this.name = "EndpointError"
    }
  }
  CZ0.EndpointError = ZZ0
})
// @from(Start 2429344, End 2429429)
AZ0 = Y((BZ0) => {
  Object.defineProperty(BZ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2429435, End 2429520)
XZ0 = Y((VZ0) => {
  Object.defineProperty(VZ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2429526, End 2429611)
_Z0 = Y((YZ0) => {
  Object.defineProperty(YZ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2429617, End 2429702)
HZ0 = Y((DZ0) => {
  Object.defineProperty(DZ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2429708, End 2429793)
gZ0 = Y((FZ0) => {
  Object.defineProperty(FZ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2429799, End 2430078)
zZ = Y((y_) => {
  Object.defineProperty(y_, "__esModule", {
    value: !0
  });
  var Tf = x1();
  Tf.__exportStar(wZ0(), y_);
  Tf.__exportStar(AZ0(), y_);
  Tf.__exportStar(XZ0(), y_);
  Tf.__exportStar(_Z0(), y_);
  Tf.__exportStar(HZ0(), y_);
  Tf.__exportStar(gZ0(), y_)
})
// @from(Start 2430084, End 2430416)
pI1 = Y((JZ0) => {
  Object.defineProperty(JZ0, "__esModule", {
    value: !0
  });
  JZ0.isIpAddress = void 0;
  var Nn4 = new RegExp("^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$"),
    zn4 = (I) => Nn4.test(I) || I.startsWith("[") && I.endsWith("]");
  JZ0.isIpAddress = zn4
})
// @from(Start 2430422, End 2430815)
nI1 = Y((NZ0) => {
  Object.defineProperty(NZ0, "__esModule", {
    value: !0
  });
  NZ0.isValidHostLabel = void 0;
  var Qn4 = new RegExp("^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$"),
    fn4 = (I, d = !1) => {
      if (!d) return Qn4.test(I);
      let G = I.split(".");
      for (let Z of G)
        if (!NZ0.isValidHostLabel(Z)) return !1;
      return !0
    };
  NZ0.isValidHostLabel = fn4
})
// @from(Start 2430821, End 2431394)
QZ0 = Y((zZ0) => {
  Object.defineProperty(zZ0, "__esModule", {
    value: !0
  });
  zZ0.isVirtualHostableS3Bucket = void 0;
  var qn4 = pI1(),
    Rn4 = nI1(),
    Un4 = (I, d = !1) => {
      if (d) {
        for (let G of I.split("."))
          if (!zZ0.isVirtualHostableS3Bucket(G)) return !1;
        return !0
      }
      if (!Rn4.isValidHostLabel(I)) return !1;
      if (I.length < 3 || I.length > 63) return !1;
      if (I !== I.toLowerCase()) return !1;
      if (qn4.isIpAddress(I)) return !1;
      return !0
    };
  zZ0.isVirtualHostableS3Bucket = Un4
})
// @from(Start 2431400, End 2431880)
RZ0 = Y((fZ0) => {
  Object.defineProperty(fZ0, "__esModule", {
    value: !0
  });
  fZ0.parseArn = void 0;
  var vn4 = (I) => {
    let d = I.split(":");
    if (d.length < 6) return null;
    let [G, Z, C, W, w, ...B] = d;
    if (G !== "arn" || Z === "" || C === "" || B[0] === "") return null;
    return {
      partition: Z,
      service: C,
      region: W,
      accountId: w,
      resourceId: B[0].includes("/") ? B[0].split("/") : B
    }
  };
  fZ0.parseArn = vn4
})
// @from(Start 2431886, End 2432080)
UZ0 = Y((KL) => {
  Object.defineProperty(KL, "__esModule", {
    value: !0
  });
  var aI1 = x1();
  aI1.__exportStar(QZ0(), KL);
  aI1.__exportStar(RZ0(), KL);
  aI1.__exportStar(xI1(), KL)
})
// @from(Start 2432086, End 2432259)
MZ0 = Y((vZ0) => {
  Object.defineProperty(vZ0, "__esModule", {
    value: !0
  });
  vZ0.booleanEquals = void 0;
  var En4 = (I, d) => I === d;
  vZ0.booleanEquals = En4
})
// @from(Start 2432265, End 2432963)
PZ0 = Y((LZ0) => {
  Object.defineProperty(LZ0, "__esModule", {
    value: !0
  });
  LZ0.getAttrPathList = void 0;
  var SZ0 = zZ(),
    Mn4 = (I) => {
      let d = I.split("."),
        G = [];
      for (let Z of d) {
        let C = Z.indexOf("[");
        if (C !== -1) {
          if (Z.indexOf("]") !== Z.length - 1) throw new SZ0.EndpointError(`Path: '${I}' does not end with ']'`);
          let W = Z.slice(C + 1, -1);
          if (Number.isNaN(parseInt(W))) throw new SZ0.EndpointError(`Invalid array index: '${W}' in path: '${I}'`);
          if (C !== 0) G.push(Z.slice(0, C));
          G.push(W)
        } else G.push(Z)
      }
      return G
    };
  LZ0.getAttrPathList = Mn4
})
// @from(Start 2432969, End 2433405)
TZ0 = Y(($Z0) => {
  Object.defineProperty($Z0, "__esModule", {
    value: !0
  });
  $Z0.getAttr = void 0;
  var Sn4 = zZ(),
    Ln4 = PZ0(),
    yn4 = (I, d) => Ln4.getAttrPathList(d).reduce((G, Z) => {
      if (typeof G !== "object") throw new Sn4.EndpointError(`Index '${Z}' in '${d}' not found in '${JSON.stringify(I)}'`);
      else if (Array.isArray(G)) return G[parseInt(Z)];
      return G[Z]
    }, I);
  $Z0.getAttr = yn4
})
// @from(Start 2433411, End 2433567)
lZ0 = Y((OZ0) => {
  Object.defineProperty(OZ0, "__esModule", {
    value: !0
  });
  OZ0.isSet = void 0;
  var Pn4 = (I) => I != null;
  OZ0.isSet = Pn4
})
// @from(Start 2433573, End 2433718)
jZ0 = Y((bZ0) => {
  Object.defineProperty(bZ0, "__esModule", {
    value: !0
  });
  bZ0.not = void 0;
  var $n4 = (I) => !I;
  bZ0.not = $n4
})
// @from(Start 2433724, End 2433809)
xZ0 = Y((kZ0) => {
  Object.defineProperty(kZ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2433815, End 2434069)
pZ0 = Y((cZ0) => {
  Object.defineProperty(cZ0, "__esModule", {
    value: !0
  });
  cZ0.HttpAuthLocation = void 0;
  var un4;
  (function(I) {
    I.HEADER = "header", I.QUERY = "query"
  })(un4 = cZ0.HttpAuthLocation || (cZ0.HttpAuthLocation = {}))
})
// @from(Start 2434075, End 2434160)
nZ0 = Y((iZ0) => {
  Object.defineProperty(iZ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2434166, End 2434251)
aZ0 = Y((rZ0) => {
  Object.defineProperty(rZ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2434257, End 2434342)
oZ0 = Y((sZ0) => {
  Object.defineProperty(sZ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2434348, End 2434433)
tZ0 = Y((eZ0) => {
  Object.defineProperty(eZ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2434439, End 2434524)
dC0 = Y((IC0) => {
  Object.defineProperty(IC0, "__esModule", {
    value: !0
  })
})
// @from(Start 2434530, End 2434615)
ZC0 = Y((GC0) => {
  Object.defineProperty(GC0, "__esModule", {
    value: !0
  })
})
// @from(Start 2434621, End 2434815)
CC0 = Y((NL) => {
  Object.defineProperty(NL, "__esModule", {
    value: !0
  });
  var oI1 = x1();
  oI1.__exportStar(tZ0(), NL);
  oI1.__exportStar(dC0(), NL);
  oI1.__exportStar(ZC0(), NL)
})
// @from(Start 2434821, End 2434906)
wC0 = Y((WC0) => {
  Object.defineProperty(WC0, "__esModule", {
    value: !0
  })
})
// @from(Start 2434912, End 2434997)
AC0 = Y((BC0) => {
  Object.defineProperty(BC0, "__esModule", {
    value: !0
  })
})
// @from(Start 2435003, End 2435242)
XC0 = Y((VC0) => {
  Object.defineProperty(VC0, "__esModule", {
    value: !0
  });
  VC0.HostAddressType = void 0;
  var Tn4;
  (function(I) {
    I.AAAA = "AAAA", I.A = "A"
  })(Tn4 = VC0.HostAddressType || (VC0.HostAddressType = {}))
})
// @from(Start 2435248, End 2435501)
_C0 = Y((YC0) => {
  Object.defineProperty(YC0, "__esModule", {
    value: !0
  });
  YC0.EndpointURLScheme = void 0;
  var On4;
  (function(I) {
    I.HTTP = "http", I.HTTPS = "https"
  })(On4 = YC0.EndpointURLScheme || (YC0.EndpointURLScheme = {}))
})
// @from(Start 2435507, End 2435592)
HC0 = Y((DC0) => {
  Object.defineProperty(DC0, "__esModule", {
    value: !0
  })
})
// @from(Start 2435598, End 2435683)
gC0 = Y((FC0) => {
  Object.defineProperty(FC0, "__esModule", {
    value: !0
  })
})
// @from(Start 2435689, End 2435774)
KC0 = Y((JC0) => {
  Object.defineProperty(JC0, "__esModule", {
    value: !0
  })
})
// @from(Start 2435780, End 2435865)
zC0 = Y((NC0) => {
  Object.defineProperty(NC0, "__esModule", {
    value: !0
  })
})
// @from(Start 2435871, End 2435956)
fC0 = Y((QC0) => {
  Object.defineProperty(QC0, "__esModule", {
    value: !0
  })
})
// @from(Start 2435962, End 2436047)
RC0 = Y((qC0) => {
  Object.defineProperty(qC0, "__esModule", {
    value: !0
  })
})
// @from(Start 2436053, End 2436138)
vC0 = Y((UC0) => {
  Object.defineProperty(UC0, "__esModule", {
    value: !0
  })
})
// @from(Start 2436144, End 2436394)
EC0 = Y((ng) => {
  Object.defineProperty(ng, "__esModule", {
    value: !0
  });
  var zL = x1();
  zL.__exportStar(KC0(), ng);
  zL.__exportStar(zC0(), ng);
  zL.__exportStar(fC0(), ng);
  zL.__exportStar(RC0(), ng);
  zL.__exportStar(vC0(), ng)
})
// @from(Start 2436400, End 2436485)
SC0 = Y((MC0) => {
  Object.defineProperty(MC0, "__esModule", {
    value: !0
  })
})
// @from(Start 2436491, End 2436576)
yC0 = Y((LC0) => {
  Object.defineProperty(LC0, "__esModule", {
    value: !0
  })
})
// @from(Start 2436582, End 2436667)
$C0 = Y((PC0) => {
  Object.defineProperty(PC0, "__esModule", {
    value: !0
  })
})
// @from(Start 2436673, End 2436758)
TC0 = Y((uC0) => {
  Object.defineProperty(uC0, "__esModule", {
    value: !0
  })
})
// @from(Start 2436764, End 2436849)
mC0 = Y((OC0) => {
  Object.defineProperty(OC0, "__esModule", {
    value: !0
  })
})
// @from(Start 2436855, End 2436940)
bC0 = Y((lC0) => {
  Object.defineProperty(lC0, "__esModule", {
    value: !0
  })
})
// @from(Start 2436946, End 2437031)
jC0 = Y((hC0) => {
  Object.defineProperty(hC0, "__esModule", {
    value: !0
  })
})
// @from(Start 2437037, End 2437122)
xC0 = Y((kC0) => {
  Object.defineProperty(kC0, "__esModule", {
    value: !0
  })
})
// @from(Start 2437128, End 2437213)
pC0 = Y((cC0) => {
  Object.defineProperty(cC0, "__esModule", {
    value: !0
  })
})
// @from(Start 2437219, End 2437304)
nC0 = Y((iC0) => {
  Object.defineProperty(iC0, "__esModule", {
    value: !0
  })
})
// @from(Start 2437310, End 2437395)
aC0 = Y((rC0) => {
  Object.defineProperty(rC0, "__esModule", {
    value: !0
  })
})
// @from(Start 2437401, End 2437486)
oC0 = Y((sC0) => {
  Object.defineProperty(sC0, "__esModule", {
    value: !0
  })
})
// @from(Start 2437492, End 2437797)
tC0 = Y((eC0) => {
  Object.defineProperty(eC0, "__esModule", {
    value: !0
  });
  eC0.RequestHandlerProtocol = void 0;
  var mn4;
  (function(I) {
    I.HTTP_0_9 = "http/0.9", I.HTTP_1_0 = "http/1.0", I.TDS_8_0 = "tds/8.0"
  })(mn4 = eC0.RequestHandlerProtocol || (eC0.RequestHandlerProtocol = {}))
})
// @from(Start 2437803, End 2437888)
dW0 = Y((IW0) => {
  Object.defineProperty(IW0, "__esModule", {
    value: !0
  })
})
// @from(Start 2437894, End 2437979)
ZW0 = Y((GW0) => {
  Object.defineProperty(GW0, "__esModule", {
    value: !0
  })
})
// @from(Start 2437985, End 2438925)
CW0 = Y((c5) => {
  Object.defineProperty(c5, "__esModule", {
    value: !0
  });
  var V9 = x1();
  V9.__exportStar(xZ0(), c5);
  V9.__exportStar(pZ0(), c5);
  V9.__exportStar(nZ0(), c5);
  V9.__exportStar(aZ0(), c5);
  V9.__exportStar(oZ0(), c5);
  V9.__exportStar(CC0(), c5);
  V9.__exportStar(wC0(), c5);
  V9.__exportStar(AC0(), c5);
  V9.__exportStar(XC0(), c5);
  V9.__exportStar(_C0(), c5);
  V9.__exportStar(HC0(), c5);
  V9.__exportStar(gC0(), c5);
  V9.__exportStar(EC0(), c5);
  V9.__exportStar(SC0(), c5);
  V9.__exportStar(yC0(), c5);
  V9.__exportStar($C0(), c5);
  V9.__exportStar(TC0(), c5);
  V9.__exportStar(mC0(), c5);
  V9.__exportStar(bC0(), c5);
  V9.__exportStar(jC0(), c5);
  V9.__exportStar(xC0(), c5);
  V9.__exportStar(pC0(), c5);
  V9.__exportStar(nC0(), c5);
  V9.__exportStar(aC0(), c5);
  V9.__exportStar(oC0(), c5);
  V9.__exportStar(tC0(), c5);
  V9.__exportStar(dW0(), c5);
  V9.__exportStar(ZW0(), c5)
})
// @from(Start 2438931, End 2440488)
BW0 = Y((WW0) => {
  Object.defineProperty(WW0, "__esModule", {
    value: !0
  });
  WW0.parseURL = void 0;
  var Gd1 = CW0(),
    ln4 = pI1(),
    dd1 = {
      [Gd1.EndpointURLScheme.HTTP]: 80,
      [Gd1.EndpointURLScheme.HTTPS]: 443
    },
    bn4 = (I) => {
      let d = (() => {
        try {
          if (I instanceof URL) return I;
          if (typeof I === "object" && "hostname" in I) {
            let {
              hostname: F,
              port: g,
              protocol: J = "",
              path: K = "",
              query: Q = {}
            } = I, E = new URL(`${J}//${F}${g?`:${g}`:""}${K}`);
            return E.search = Object.entries(Q).map(([S, P]) => `${S}=${P}`).join("&"), E
          }
          return new URL(I)
        } catch (F) {
          return null
        }
      })();
      if (!d) return console.error(`Unable to parse ${JSON.stringify(I)} as a whatwg URL.`), null;
      let G = d.href,
        {
          host: Z,
          hostname: C,
          pathname: W,
          protocol: w,
          search: B
        } = d;
      if (B) return null;
      let A = w.slice(0, -1);
      if (!Object.values(Gd1.EndpointURLScheme).includes(A)) return null;
      let V = ln4.isIpAddress(C),
        X = G.includes(`${Z}:${dd1[A]}`) || typeof I === "string" && I.includes(`${Z}:${dd1[A]}`),
        _ = `${Z}${X?`:${dd1[A]}`:""}`;
      return {
        scheme: A,
        authority: _,
        path: W,
        normalizedPath: W.endsWith("/") ? W : `${W}/`,
        isIp: V
      }
    };
  WW0.parseURL = bn4
})
// @from(Start 2440494, End 2440665)
XW0 = Y((AW0) => {
  Object.defineProperty(AW0, "__esModule", {
    value: !0
  });
  AW0.stringEquals = void 0;
  var hn4 = (I, d) => I === d;
  AW0.stringEquals = hn4
})
// @from(Start 2440671, End 2440974)
DW0 = Y((YW0) => {
  Object.defineProperty(YW0, "__esModule", {
    value: !0
  });
  YW0.substring = void 0;
  var jn4 = (I, d, G, Z) => {
    if (d >= G || I.length < G) return null;
    if (!Z) return I.substring(d, G);
    return I.substring(I.length - G, I.length - d)
  };
  YW0.substring = jn4
})
// @from(Start 2440980, End 2441233)
gW0 = Y((HW0) => {
  Object.defineProperty(HW0, "__esModule", {
    value: !0
  });
  HW0.uriEncode = void 0;
  var kn4 = (I) => encodeURIComponent(I).replace(/[!*'()]/g, (d) => `%${d.charCodeAt(0).toString(16).toUpperCase()}`);
  HW0.uriEncode = kn4
})
// @from(Start 2441239, End 2441663)
Zd1 = Y((jC) => {
  Object.defineProperty(jC, "__esModule", {
    value: !0
  });
  jC.aws = void 0;
  var aw = x1();
  jC.aws = aw.__importStar(UZ0());
  aw.__exportStar(MZ0(), jC);
  aw.__exportStar(TZ0(), jC);
  aw.__exportStar(lZ0(), jC);
  aw.__exportStar(nI1(), jC);
  aw.__exportStar(jZ0(), jC);
  aw.__exportStar(BW0(), jC);
  aw.__exportStar(XW0(), jC);
  aw.__exportStar(DW0(), jC);
  aw.__exportStar(gW0(), jC)
})
// @from(Start 2441669, End 2442588)
Cd1 = Y((KW0) => {
  Object.defineProperty(KW0, "__esModule", {
    value: !0
  });
  KW0.evaluateTemplate = void 0;
  var xn4 = Zd1(),
    cn4 = (I, d) => {
      let G = [],
        Z = {
          ...d.endpointParams,
          ...d.referenceRecord
        },
        C = 0;
      while (C < I.length) {
        let W = I.indexOf("{", C);
        if (W === -1) {
          G.push(I.slice(C));
          break
        }
        G.push(I.slice(C, W));
        let w = I.indexOf("}", W);
        if (w === -1) {
          G.push(I.slice(W));
          break
        }
        if (I[W + 1] === "{" && I[w + 1] === "}") G.push(I.slice(W + 1, w)), C = w + 2;
        let B = I.substring(W + 1, w);
        if (B.includes("#")) {
          let [A, V] = B.split("#");
          G.push(xn4.getAttr(Z[A], V))
        } else G.push(Z[B]);
        C = w + 1
      }
      return G.join("")
    };
  KW0.evaluateTemplate = cn4
})
// @from(Start 2442594, End 2442865)
fW0 = Y((zW0) => {
  Object.defineProperty(zW0, "__esModule", {
    value: !0
  });
  zW0.getReferenceValue = void 0;
  var pn4 = ({
    ref: I
  }, d) => {
    return {
      ...d.endpointParams,
      ...d.referenceRecord
    } [I]
  };
  zW0.getReferenceValue = pn4
})
// @from(Start 2442871, End 2443399)
QL = Y((qW0) => {
  Object.defineProperty(qW0, "__esModule", {
    value: !0
  });
  qW0.evaluateExpression = void 0;
  var in4 = zZ(),
    nn4 = Wd1(),
    rn4 = Cd1(),
    an4 = fW0(),
    sn4 = (I, d, G) => {
      if (typeof I === "string") return rn4.evaluateTemplate(I, G);
      else if (I.fn) return nn4.callFunction(I, G);
      else if (I.ref) return an4.getReferenceValue(I, G);
      throw new in4.EndpointError(`'${d}': ${String(I)} is not a string, function or reference.`)
    };
  qW0.evaluateExpression = sn4
})
// @from(Start 2443405, End 2443848)
Wd1 = Y((UW0) => {
  Object.defineProperty(UW0, "__esModule", {
    value: !0
  });
  UW0.callFunction = void 0;
  var on4 = x1(),
    en4 = on4.__importStar(Zd1()),
    tn4 = QL(),
    Ir4 = ({
      fn: I,
      argv: d
    }, G) => {
      let Z = d.map((C) => ["boolean", "number"].includes(typeof C) ? C : tn4.evaluateExpression(C, "arg", G));
      return I.split(".").reduce((C, W) => C[W], en4)(...Z)
    };
  UW0.callFunction = Ir4
})
// @from(Start 2443854, End 2444651)
SW0 = Y((EW0) => {
  Object.defineProperty(EW0, "__esModule", {
    value: !0
  });
  EW0.evaluateCondition = void 0;
  var wd1 = JL(),
    dr4 = zZ(),
    Gr4 = Wd1(),
    Zr4 = ({
      assign: I,
      ...d
    }, G) => {
      var Z, C;
      if (I && I in G.referenceRecord) throw new dr4.EndpointError(`'${I}' is already defined in Reference Record.`);
      let W = Gr4.callFunction(d, G);
      return (C = (Z = G.logger) === null || Z === void 0 ? void 0 : Z.debug) === null || C === void 0 || C.call(Z, wd1.debugId, `evaluateCondition: ${wd1.toDebugString(d)} = ${wd1.toDebugString(W)}`), {
        result: W === "" ? !0 : !!W,
        ...I != null && {
          toAssign: {
            name: I,
            value: W
          }
        }
      }
    };
  EW0.evaluateCondition = Zr4
})
// @from(Start 2444657, End 2445492)
Ec = Y((yW0) => {
  Object.defineProperty(yW0, "__esModule", {
    value: !0
  });
  yW0.evaluateConditions = void 0;
  var LW0 = JL(),
    Cr4 = SW0(),
    Wr4 = (I = [], d) => {
      var G, Z;
      let C = {};
      for (let W of I) {
        let {
          result: w,
          toAssign: B
        } = Cr4.evaluateCondition(W, {
          ...d,
          referenceRecord: {
            ...d.referenceRecord,
            ...C
          }
        });
        if (!w) return {
          result: w
        };
        if (B) C[B.name] = B.value, (Z = (G = d.logger) === null || G === void 0 ? void 0 : G.debug) === null || Z === void 0 || Z.call(G, LW0.debugId, `assign: ${B.name} := ${LW0.toDebugString(B.value)}`)
      }
      return {
        result: !0,
        referenceRecord: C
      }
    };
  yW0.evaluateConditions = Wr4
})
// @from(Start 2445498, End 2446002)
TW0 = Y(($W0) => {
  Object.defineProperty($W0, "__esModule", {
    value: !0
  });
  $W0.getEndpointHeaders = void 0;
  var wr4 = zZ(),
    Br4 = QL(),
    Ar4 = (I, d) => Object.entries(I).reduce((G, [Z, C]) => ({
      ...G,
      [Z]: C.map((W) => {
        let w = Br4.evaluateExpression(W, "Header value entry", d);
        if (typeof w !== "string") throw new wr4.EndpointError(`Header '${Z}' value '${w}' is not a string`);
        return w
      })
    }), {});
  $W0.getEndpointHeaders = Ar4
})
// @from(Start 2446008, End 2446740)
lW0 = Y((mW0) => {
  Object.defineProperty(mW0, "__esModule", {
    value: !0
  });
  mW0.getEndpointProperty = void 0;
  var OW0 = zZ(),
    Vr4 = Cd1(),
    Xr4 = Ad1(),
    Yr4 = (I, d) => {
      if (Array.isArray(I)) return I.map((G) => mW0.getEndpointProperty(G, d));
      switch (typeof I) {
        case "string":
          return Vr4.evaluateTemplate(I, d);
        case "object":
          if (I === null) throw new OW0.EndpointError(`Unexpected endpoint property: ${I}`);
          return Xr4.getEndpointProperties(I, d);
        case "boolean":
          return I;
        default:
          throw new OW0.EndpointError(`Unexpected endpoint property type: ${typeof I}`)
      }
    };
  mW0.getEndpointProperty = Yr4
})
// @from(Start 2446746, End 2447052)
Ad1 = Y((bW0) => {
  Object.defineProperty(bW0, "__esModule", {
    value: !0
  });
  bW0.getEndpointProperties = void 0;
  var _r4 = lW0(),
    Dr4 = (I, d) => Object.entries(I).reduce((G, [Z, C]) => ({
      ...G,
      [Z]: _r4.getEndpointProperty(C, d)
    }), {});
  bW0.getEndpointProperties = Dr4
})
// @from(Start 2447058, End 2447573)
xW0 = Y((jW0) => {
  Object.defineProperty(jW0, "__esModule", {
    value: !0
  });
  jW0.getEndpointUrl = void 0;
  var Hr4 = zZ(),
    Fr4 = QL(),
    gr4 = (I, d) => {
      let G = Fr4.evaluateExpression(I, "Endpoint URL", d);
      if (typeof G === "string") try {
        return new URL(G)
      } catch (Z) {
        throw console.error(`Failed to construct URL with ${G}`, Z), Z
      }
      throw new Hr4.EndpointError(`Endpoint URL must be a string, got ${typeof G}`)
    };
  jW0.getEndpointUrl = gr4
})
// @from(Start 2447579, End 2448682)
nW0 = Y((pW0) => {
  Object.defineProperty(pW0, "__esModule", {
    value: !0
  });
  pW0.evaluateEndpointRule = void 0;
  var cW0 = JL(),
    Jr4 = Ec(),
    Kr4 = TW0(),
    Nr4 = Ad1(),
    zr4 = xW0(),
    Qr4 = (I, d) => {
      var G, Z;
      let {
        conditions: C,
        endpoint: W
      } = I, {
        result: w,
        referenceRecord: B
      } = Jr4.evaluateConditions(C, d);
      if (!w) return;
      let A = {
          ...d,
          referenceRecord: {
            ...d.referenceRecord,
            ...B
          }
        },
        {
          url: V,
          properties: X,
          headers: _
        } = W;
      return (Z = (G = d.logger) === null || G === void 0 ? void 0 : G.debug) === null || Z === void 0 || Z.call(G, cW0.debugId, `Resolving endpoint from template: ${cW0.toDebugString(W)}`), {
        ..._ != null && {
          headers: Kr4.getEndpointHeaders(_, A)
        },
        ...X != null && {
          properties: Nr4.getEndpointProperties(X, A)
        },
        url: zr4.getEndpointUrl(V, A)
      }
    };
  pW0.evaluateEndpointRule = Qr4
})
// @from(Start 2448688, End 2449271)
sW0 = Y((rW0) => {
  Object.defineProperty(rW0, "__esModule", {
    value: !0
  });
  rW0.evaluateErrorRule = void 0;
  var fr4 = zZ(),
    qr4 = Ec(),
    Rr4 = QL(),
    Ur4 = (I, d) => {
      let {
        conditions: G,
        error: Z
      } = I, {
        result: C,
        referenceRecord: W
      } = qr4.evaluateConditions(G, d);
      if (!C) return;
      throw new fr4.EndpointError(Rr4.evaluateExpression(Z, "Error", {
        ...d,
        referenceRecord: {
          ...d.referenceRecord,
          ...W
        }
      }))
    };
  rW0.evaluateErrorRule = Ur4
})
// @from(Start 2449277, End 2449807)
tW0 = Y((oW0) => {
  Object.defineProperty(oW0, "__esModule", {
    value: !0
  });
  oW0.evaluateTreeRule = void 0;
  var vr4 = Ec(),
    Er4 = Vd1(),
    Mr4 = (I, d) => {
      let {
        conditions: G,
        rules: Z
      } = I, {
        result: C,
        referenceRecord: W
      } = vr4.evaluateConditions(G, d);
      if (!C) return;
      return Er4.evaluateRules(Z, {
        ...d,
        referenceRecord: {
          ...d.referenceRecord,
          ...W
        }
      })
    };
  oW0.evaluateTreeRule = Mr4
})
// @from(Start 2449813, End 2450495)
Vd1 = Y((dw0) => {
  Object.defineProperty(dw0, "__esModule", {
    value: !0
  });
  dw0.evaluateRules = void 0;
  var Iw0 = zZ(),
    Sr4 = nW0(),
    Lr4 = sW0(),
    yr4 = tW0(),
    Pr4 = (I, d) => {
      for (let G of I)
        if (G.type === "endpoint") {
          let Z = Sr4.evaluateEndpointRule(G, d);
          if (Z) return Z
        } else if (G.type === "error") Lr4.evaluateErrorRule(G, d);
      else if (G.type === "tree") {
        let Z = yr4.evaluateTreeRule(G, d);
        if (Z) return Z
      } else throw new Iw0.EndpointError(`Unknown endpoint rule: ${G}`);
      throw new Iw0.EndpointError("Rules evaluation failed")
    };
  dw0.evaluateRules = Pr4
})
// @from(Start 2450501, End 2450636)
Zw0 = Y((Xd1) => {
  Object.defineProperty(Xd1, "__esModule", {
    value: !0
  });
  var $r4 = x1();
  $r4.__exportStar(Vd1(), Xd1)
})
// @from(Start 2450642, End 2452173)
ww0 = Y((Cw0) => {
  Object.defineProperty(Cw0, "__esModule", {
    value: !0
  });
  Cw0.resolveEndpoint = void 0;
  var Mc = JL(),
    ur4 = zZ(),
    Tr4 = Zw0(),
    Or4 = (I, d) => {
      var G, Z, C, W, w, B;
      let {
        endpointParams: A,
        logger: V
      } = d, {
        parameters: X,
        rules: _
      } = I;
      (Z = (G = d.logger) === null || G === void 0 ? void 0 : G.debug) === null || Z === void 0 || Z.call(G, `${Mc.debugId} Initial EndpointParams: ${Mc.toDebugString(A)}`);
      let F = Object.entries(X).filter(([, K]) => K.default != null).map(([K, Q]) => [K, Q.default]);
      if (F.length > 0)
        for (let [K, Q] of F) A[K] = (C = A[K]) !== null && C !== void 0 ? C : Q;
      let g = Object.entries(X).filter(([, K]) => K.required).map(([K]) => K);
      for (let K of g)
        if (A[K] == null) throw new ur4.EndpointError(`Missing required parameter: '${K}'`);
      let J = Tr4.evaluateRules(_, {
        endpointParams: A,
        logger: V,
        referenceRecord: {}
      });
      if ((W = d.endpointParams) === null || W === void 0 ? void 0 : W.Endpoint) try {
        let K = new URL(d.endpointParams.Endpoint),
          {
            protocol: Q,
            port: E
          } = K;
        J.url.protocol = Q, J.url.port = E
      } catch (K) {}
      return (B = (w = d.logger) === null || w === void 0 ? void 0 : w.debug) === null || B === void 0 || B.call(w, `${Mc.debugId} Resolved endpoint: ${Mc.toDebugString(J)}`), J
    };
  Cw0.resolveEndpoint = Or4
})
// @from(Start 2452179, End 2452371)
qL = Y((fL) => {
  Object.defineProperty(fL, "__esModule", {
    value: !0
  });
  var Yd1 = x1();
  Yd1.__exportStar(xI1(), fL);
  Yd1.__exportStar(ww0(), fL);
  Yd1.__exportStar(zZ(), fL)
})
// @from(Start 2452377, End 2452709)
Vw0 = Y((Bw0) => {
  Object.defineProperty(Bw0, "__esModule", {
    value: !0
  });
  Bw0.UA_ESCAPE_REGEX = Bw0.SPACE = Bw0.X_AMZ_USER_AGENT = Bw0.USER_AGENT = void 0;
  Bw0.USER_AGENT = "user-agent";
  Bw0.X_AMZ_USER_AGENT = "x-amz-user-agent";
  Bw0.SPACE = " ";
  Bw0.UA_ESCAPE_REGEX = /[^\!\#\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g
})
// @from(Start 2452715, End 2454564)
Hw0 = Y((Xw0) => {
  Object.defineProperty(Xw0, "__esModule", {
    value: !0
  });
  Xw0.getUserAgentPlugin = Xw0.getUserAgentMiddlewareOptions = Xw0.userAgentMiddleware = void 0;
  var hr4 = J8(),
    jr4 = qL(),
    P_ = Vw0(),
    kr4 = (I) => (d, G) => async (Z) => {
      var C, W;
      let {
        request: w
      } = Z;
      if (!hr4.HttpRequest.isInstance(w)) return d(Z);
      let {
        headers: B
      } = w, A = ((C = G === null || G === void 0 ? void 0 : G.userAgent) === null || C === void 0 ? void 0 : C.map(_d1)) || [], V = (await I.defaultUserAgentProvider()).map(_d1), X = ((W = I === null || I === void 0 ? void 0 : I.customUserAgent) === null || W === void 0 ? void 0 : W.map(_d1)) || [], _ = jr4.getUserAgentPrefix(), F = (_ ? [_] : []).concat([...V, ...A, ...X]).join(P_.SPACE), g = [...V.filter((J) => J.startsWith("aws-sdk-")), ...X].join(P_.SPACE);
      if (I.runtime !== "browser") {
        if (g) B[P_.X_AMZ_USER_AGENT] = B[P_.X_AMZ_USER_AGENT] ? `${B[P_.USER_AGENT]} ${g}` : g;
        B[P_.USER_AGENT] = F
      } else B[P_.X_AMZ_USER_AGENT] = F;
      return d({
        ...Z,
        request: w
      })
    };
  Xw0.userAgentMiddleware = kr4;
  var _d1 = ([I, d]) => {
    let G = I.indexOf("/"),
      Z = I.substring(0, G),
      C = I.substring(G + 1);
    if (Z === "api") C = C.toLowerCase();
    return [Z, C, d].filter((W) => W && W.length > 0).map((W) => W === null || W === void 0 ? void 0 : W.replace(P_.UA_ESCAPE_REGEX, "_")).join("/")
  };
  Xw0.getUserAgentMiddlewareOptions = {
    name: "getUserAgentMiddleware",
    step: "build",
    priority: "low",
    tags: ["SET_USER_AGENT", "USER_AGENT"],
    override: !0
  };
  var xr4 = (I) => ({
    applyToStack: (d) => {
      d.add(Xw0.userAgentMiddleware(I), Xw0.getUserAgentMiddlewareOptions)
    }
  });
  Xw0.getUserAgentPlugin = xr4
})
// @from(Start 2454570, End 2454732)
Lc = Y((Sc) => {
  Object.defineProperty(Sc, "__esModule", {
    value: !0
  });
  var Fw0 = x1();
  Fw0.__exportStar(kG0(), Sc);
  Fw0.__exportStar(Hw0(), Sc)
})
// @from(Start 2454738, End 2454965)
Nw0 = Y((Jw0) => {
  Object.defineProperty(Jw0, "__esModule", {
    value: !0
  });
  Jw0.NoOpLogger = void 0;
  class gw0 {
    trace() {}
    debug() {}
    info() {}
    warn() {}
    error() {}
  }
  Jw0.NoOpLogger = gw0
})