
// @from(Start 5742775, End 5764655)
class ZV {
  #I;
  #d;
  #W;
  #Z;
  #w;
  #z;
  ttl;
  ttlResolution;
  ttlAutopurge;
  updateAgeOnGet;
  updateAgeOnHas;
  allowStale;
  noDisposeOnSet;
  noUpdateTTL;
  maxEntrySize;
  sizeCalculation;
  noDeleteOnFetchRejection;
  noDeleteOnStaleGet;
  allowStaleOnFetchAbort;
  allowStaleOnFetchRejection;
  ignoreFetchAbort;
  #V;
  #Y;
  #B;
  #A;
  #C;
  #g;
  #J;
  #D;
  #_;
  #q;
  #F;
  #R;
  #U;
  #N;
  #Q;
  #f;
  #H;
  static unsafeExposeInternals(I) {
    return {
      starts: I.#U,
      ttls: I.#N,
      sizes: I.#R,
      keyMap: I.#B,
      keyList: I.#A,
      valList: I.#C,
      next: I.#g,
      prev: I.#J,
      get head() {
        return I.#D
      },
      get tail() {
        return I.#_
      },
      free: I.#q,
      isBackgroundFetch: (d) => I.#X(d),
      backgroundFetch: (d, G, Z, C) => I.#l(d, G, Z, C),
      moveToTail: (d) => I.#h(d),
      indexes: (d) => I.#E(d),
      rindexes: (d) => I.#M(d),
      isStale: (d) => I.#K(d)
    }
  }
  get max() {
    return this.#I
  }
  get maxSize() {
    return this.#d
  }
  get calculatedSize() {
    return this.#Y
  }
  get size() {
    return this.#V
  }
  get fetchMethod() {
    return this.#w
  }
  get memoMethod() {
    return this.#z
  }
  get dispose() {
    return this.#W
  }
  get disposeAfter() {
    return this.#Z
  }
  constructor(I) {
    let {
      max: d = 0,
      ttl: G,
      ttlResolution: Z = 1,
      ttlAutopurge: C,
      updateAgeOnGet: W,
      updateAgeOnHas: w,
      allowStale: B,
      dispose: A,
      disposeAfter: V,
      noDisposeOnSet: X,
      noUpdateTTL: _,
      maxSize: F = 0,
      maxEntrySize: g = 0,
      sizeCalculation: J,
      fetchMethod: K,
      memoMethod: Q,
      noDeleteOnFetchRejection: E,
      noDeleteOnStaleGet: S,
      allowStaleOnFetchRejection: P,
      allowStaleOnFetchAbort: $,
      ignoreFetchAbort: h
    } = I;
    if (d !== 0 && !iY(d)) throw new TypeError("max option must be a nonnegative integer");
    let O = d ? ki1(d) : Array;
    if (!O) throw new Error("invalid max value: " + d);
    if (this.#I = d, this.#d = F, this.maxEntrySize = g || this.#d, this.sizeCalculation = J, this.sizeCalculation) {
      if (!this.#d && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
      if (typeof this.sizeCalculation !== "function") throw new TypeError("sizeCalculation set to non-function")
    }
    if (Q !== void 0 && typeof Q !== "function") throw new TypeError("memoMethod must be a function if defined");
    if (this.#z = Q, K !== void 0 && typeof K !== "function") throw new TypeError("fetchMethod must be a function if specified");
    if (this.#w = K, this.#f = !!K, this.#B = new Map, this.#A = new Array(d).fill(void 0), this.#C = new Array(d).fill(void 0), this.#g = new O(d), this.#J = new O(d), this.#D = 0, this.#_ = 0, this.#q = UQ.create(d), this.#V = 0, this.#Y = 0, typeof A === "function") this.#W = A;
    if (typeof V === "function") this.#Z = V, this.#F = [];
    else this.#Z = void 0, this.#F = void 0;
    if (this.#Q = !!this.#W, this.#H = !!this.#Z, this.noDisposeOnSet = !!X, this.noUpdateTTL = !!_, this.noDeleteOnFetchRejection = !!E, this.allowStaleOnFetchRejection = !!P, this.allowStaleOnFetchAbort = !!$, this.ignoreFetchAbort = !!h, this.maxEntrySize !== 0) {
      if (this.#d !== 0) {
        if (!iY(this.#d)) throw new TypeError("maxSize must be a positive integer if specified")
      }
      if (!iY(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
      this.#L()
    }
    if (this.allowStale = !!B, this.noDeleteOnStaleGet = !!S, this.updateAgeOnGet = !!W, this.updateAgeOnHas = !!w, this.ttlResolution = iY(Z) || Z === 0 ? Z : 1, this.ttlAutopurge = !!C, this.ttl = G || 0, this.ttl) {
      if (!iY(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
      this.#S()
    }
    if (this.#I === 0 && this.ttl === 0 && this.#d === 0) throw new TypeError("At least one of max, maxSize, or ttl is required");
    if (!this.ttlAutopurge && !this.#I && !this.#d) {
      if (jJ4("LRU_CACHE_UNBOUNDED")) hi1.add("LRU_CACHE_UNBOUNDED"), ji1("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", "LRU_CACHE_UNBOUNDED", ZV)
    }
  }
  getRemainingTTL(I) {
    return this.#B.has(I) ? 1 / 0 : 0
  }
  #S() {
    let I = new tM(this.#I),
      d = new tM(this.#I);
    this.#N = I, this.#U = d, this.#P = (C, W, w = RQ.now()) => {
      if (d[C] = W !== 0 ? w : 0, I[C] = W, W !== 0 && this.ttlAutopurge) {
        let B = setTimeout(() => {
          if (this.#K(C)) this.#y(this.#A[C], "expire")
        }, W + 1);
        if (B.unref) B.unref()
      }
    }, this.#v = (C) => {
      d[C] = I[C] !== 0 ? RQ.now() : 0
    }, this.#G = (C, W) => {
      if (I[W]) {
        let w = I[W],
          B = d[W];
        if (!w || !B) return;
        C.ttl = w, C.start = B, C.now = G || Z();
        let A = C.now - B;
        C.remainingTTL = w - A
      }
    };
    let G = 0,
      Z = () => {
        let C = RQ.now();
        if (this.ttlResolution > 0) {
          G = C;
          let W = setTimeout(() => G = 0, this.ttlResolution);
          if (W.unref) W.unref()
        }
        return C
      };
    this.getRemainingTTL = (C) => {
      let W = this.#B.get(C);
      if (W === void 0) return 0;
      let w = I[W],
        B = d[W];
      if (!w || !B) return 1 / 0;
      let A = (G || Z()) - B;
      return w - A
    }, this.#K = (C) => {
      let W = d[C],
        w = I[C];
      return !!w && !!W && (G || Z()) - W > w
    }
  }
  #v = () => {};
  #G = () => {};
  #P = () => {};
  #K = () => !1;
  #L() {
    let I = new tM(this.#I);
    this.#Y = 0, this.#R = I, this.#$ = (d) => {
      this.#Y -= I[d], I[d] = 0
    }, this.#T = (d, G, Z, C) => {
      if (this.#X(G)) return 0;
      if (!iY(Z))
        if (C) {
          if (typeof C !== "function") throw new TypeError("sizeCalculation must be a function");
          if (Z = C(G, d), !iY(Z)) throw new TypeError("sizeCalculation return invalid (expect positive integer)")
        } else throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
      return Z
    }, this.#u = (d, G, Z) => {
      if (I[d] = G, this.#d) {
        let C = this.#d - I[d];
        while (this.#Y > C) this.#m(!0)
      }
      if (this.#Y += I[d], Z) Z.entrySize = G, Z.totalCalculatedSize = this.#Y
    }
  }
  #$ = (I) => {};
  #u = (I, d, G) => {};
  #T = (I, d, G, Z) => {
    if (G || Z) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
    return 0
  };* #E({
    allowStale: I = this.allowStale
  } = {}) {
    if (this.#V)
      for (let d = this.#_;;) {
        if (!this.#O(d)) break;
        if (I || !this.#K(d)) yield d;
        if (d === this.#D) break;
        else d = this.#J[d]
      }
  }* #M({
    allowStale: I = this.allowStale
  } = {}) {
    if (this.#V)
      for (let d = this.#D;;) {
        if (!this.#O(d)) break;
        if (I || !this.#K(d)) yield d;
        if (d === this.#_) break;
        else d = this.#g[d]
      }
  }
  #O(I) {
    return I !== void 0 && this.#B.get(this.#A[I]) === I
  }* entries() {
    for (let I of this.#E())
      if (this.#C[I] !== void 0 && this.#A[I] !== void 0 && !this.#X(this.#C[I])) yield [this.#A[I], this.#C[I]]
  }* rentries() {
    for (let I of this.#M())
      if (this.#C[I] !== void 0 && this.#A[I] !== void 0 && !this.#X(this.#C[I])) yield [this.#A[I], this.#C[I]]
  }* keys() {
    for (let I of this.#E()) {
      let d = this.#A[I];
      if (d !== void 0 && !this.#X(this.#C[I])) yield d
    }
  }* rkeys() {
    for (let I of this.#M()) {
      let d = this.#A[I];
      if (d !== void 0 && !this.#X(this.#C[I])) yield d
    }
  }* values() {
    for (let I of this.#E())
      if (this.#C[I] !== void 0 && !this.#X(this.#C[I])) yield this.#C[I]
  }* rvalues() {
    for (let I of this.#M())
      if (this.#C[I] !== void 0 && !this.#X(this.#C[I])) yield this.#C[I]
  } [Symbol.iterator]() {
    return this.entries()
  } [Symbol.toStringTag] = "LRUCache";
  find(I, d = {}) {
    for (let G of this.#E()) {
      let Z = this.#C[G],
        C = this.#X(Z) ? Z.__staleWhileFetching : Z;
      if (C === void 0) continue;
      if (I(C, this.#A[G], this)) return this.get(this.#A[G], d)
    }
  }
  forEach(I, d = this) {
    for (let G of this.#E()) {
      let Z = this.#C[G],
        C = this.#X(Z) ? Z.__staleWhileFetching : Z;
      if (C === void 0) continue;
      I.call(d, C, this.#A[G], this)
    }
  }
  rforEach(I, d = this) {
    for (let G of this.#M()) {
      let Z = this.#C[G],
        C = this.#X(Z) ? Z.__staleWhileFetching : Z;
      if (C === void 0) continue;
      I.call(d, C, this.#A[G], this)
    }
  }
  purgeStale() {
    let I = !1;
    for (let d of this.#M({
        allowStale: !0
      }))
      if (this.#K(d)) this.#y(this.#A[d], "expire"), I = !0;
    return I
  }
  info(I) {
    let d = this.#B.get(I);
    if (d === void 0) return;
    let G = this.#C[d],
      Z = this.#X(G) ? G.__staleWhileFetching : G;
    if (Z === void 0) return;
    let C = {
      value: Z
    };
    if (this.#N && this.#U) {
      let W = this.#N[d],
        w = this.#U[d];
      if (W && w) {
        let B = W - (RQ.now() - w);
        C.ttl = B, C.start = Date.now()
      }
    }
    if (this.#R) C.size = this.#R[d];
    return C
  }
  dump() {
    let I = [];
    for (let d of this.#E({
        allowStale: !0
      })) {
      let G = this.#A[d],
        Z = this.#C[d],
        C = this.#X(Z) ? Z.__staleWhileFetching : Z;
      if (C === void 0 || G === void 0) continue;
      let W = {
        value: C
      };
      if (this.#N && this.#U) {
        W.ttl = this.#N[d];
        let w = RQ.now() - this.#U[d];
        W.start = Math.floor(Date.now() - w)
      }
      if (this.#R) W.size = this.#R[d];
      I.unshift([G, W])
    }
    return I
  }
  load(I) {
    this.clear();
    for (let [d, G] of I) {
      if (G.start) {
        let Z = Date.now() - G.start;
        G.start = RQ.now() - Z
      }
      this.set(d, G.value, G)
    }
  }
  set(I, d, G = {}) {
    if (d === void 0) return this.delete(I), this;
    let {
      ttl: Z = this.ttl,
      start: C,
      noDisposeOnSet: W = this.noDisposeOnSet,
      sizeCalculation: w = this.sizeCalculation,
      status: B
    } = G, {
      noUpdateTTL: A = this.noUpdateTTL
    } = G, V = this.#T(I, d, G.size || 0, w);
    if (this.maxEntrySize && V > this.maxEntrySize) {
      if (B) B.set = "miss", B.maxEntrySizeExceeded = !0;
      return this.#y(I, "set"), this
    }
    let X = this.#V === 0 ? void 0 : this.#B.get(I);
    if (X === void 0) {
      if (X = this.#V === 0 ? this.#_ : this.#q.length !== 0 ? this.#q.pop() : this.#V === this.#I ? this.#m(!1) : this.#V, this.#A[X] = I, this.#C[X] = d, this.#B.set(I, X), this.#g[this.#_] = X, this.#J[X] = this.#_, this.#_ = X, this.#V++, this.#u(X, V, B), B) B.set = "add";
      A = !1
    } else {
      this.#h(X);
      let _ = this.#C[X];
      if (d !== _) {
        if (this.#f && this.#X(_)) {
          _.__abortController.abort(new Error("replaced"));
          let {
            __staleWhileFetching: F
          } = _;
          if (F !== void 0 && !W) {
            if (this.#Q) this.#W?.(F, I, "set");
            if (this.#H) this.#F?.push([F, I, "set"])
          }
        } else if (!W) {
          if (this.#Q) this.#W?.(_, I, "set");
          if (this.#H) this.#F?.push([_, I, "set"])
        }
        if (this.#$(X), this.#u(X, V, B), this.#C[X] = d, B) {
          B.set = "replace";
          let F = _ && this.#X(_) ? _.__staleWhileFetching : _;
          if (F !== void 0) B.oldValue = F
        }
      } else if (B) B.set = "update"
    }
    if (Z !== 0 && !this.#N) this.#S();
    if (this.#N) {
      if (!A) this.#P(X, Z, C);
      if (B) this.#G(B, X)
    }
    if (!W && this.#H && this.#F) {
      let _ = this.#F,
        F;
      while (F = _?.shift()) this.#Z?.(...F)
    }
    return this
  }
  pop() {
    try {
      while (this.#V) {
        let I = this.#C[this.#D];
        if (this.#m(!0), this.#X(I)) {
          if (I.__staleWhileFetching) return I.__staleWhileFetching
        } else if (I !== void 0) return I
      }
    } finally {
      if (this.#H && this.#F) {
        let I = this.#F,
          d;
        while (d = I?.shift()) this.#Z?.(...d)
      }
    }
  }
  #m(I) {
    let d = this.#D,
      G = this.#A[d],
      Z = this.#C[d];
    if (this.#f && this.#X(Z)) Z.__abortController.abort(new Error("evicted"));
    else if (this.#Q || this.#H) {
      if (this.#Q) this.#W?.(Z, G, "evict");
      if (this.#H) this.#F?.push([Z, G, "evict"])
    }
    if (this.#$(d), I) this.#A[d] = void 0, this.#C[d] = void 0, this.#q.push(d);
    if (this.#V === 1) this.#D = this.#_ = 0, this.#q.length = 0;
    else this.#D = this.#g[d];
    return this.#B.delete(G), this.#V--, d
  }
  has(I, d = {}) {
    let {
      updateAgeOnHas: G = this.updateAgeOnHas,
      status: Z
    } = d, C = this.#B.get(I);
    if (C !== void 0) {
      let W = this.#C[C];
      if (this.#X(W) && W.__staleWhileFetching === void 0) return !1;
      if (!this.#K(C)) {
        if (G) this.#v(C);
        if (Z) Z.has = "hit", this.#G(Z, C);
        return !0
      } else if (Z) Z.has = "stale", this.#G(Z, C)
    } else if (Z) Z.has = "miss";
    return !1
  }
  peek(I, d = {}) {
    let {
      allowStale: G = this.allowStale
    } = d, Z = this.#B.get(I);
    if (Z === void 0 || !G && this.#K(Z)) return;
    let C = this.#C[Z];
    return this.#X(C) ? C.__staleWhileFetching : C
  }
  #l(I, d, G, Z) {
    let C = d === void 0 ? void 0 : this.#C[d];
    if (this.#X(C)) return C;
    let W = new Jk,
      {
        signal: w
      } = G;
    w?.addEventListener("abort", () => W.abort(w.reason), {
      signal: W.signal
    });
    let B = {
        signal: W.signal,
        options: G,
        context: Z
      },
      A = (J, K = !1) => {
        let {
          aborted: Q
        } = W.signal, E = G.ignoreFetchAbort && J !== void 0;
        if (G.status)
          if (Q && !K) {
            if (G.status.fetchAborted = !0, G.status.fetchError = W.signal.reason, E) G.status.fetchAbortIgnored = !0
          } else G.status.fetchResolved = !0;
        if (Q && !E && !K) return X(W.signal.reason);
        let S = F;
        if (this.#C[d] === F)
          if (J === void 0)
            if (S.__staleWhileFetching) this.#C[d] = S.__staleWhileFetching;
            else this.#y(I, "fetch");
        else {
          if (G.status) G.status.fetchUpdated = !0;
          this.set(I, J, B.options)
        }
        return J
      },
      V = (J) => {
        if (G.status) G.status.fetchRejected = !0, G.status.fetchError = J;
        return X(J)
      },
      X = (J) => {
        let {
          aborted: K
        } = W.signal, Q = K && G.allowStaleOnFetchAbort, E = Q || G.allowStaleOnFetchRejection, S = E || G.noDeleteOnFetchRejection, P = F;
        if (this.#C[d] === F) {
          if (!S || P.__staleWhileFetching === void 0) this.#y(I, "fetch");
          else if (!Q) this.#C[d] = P.__staleWhileFetching
        }
        if (E) {
          if (G.status && P.__staleWhileFetching !== void 0) G.status.returnedStale = !0;
          return P.__staleWhileFetching
        } else if (P.__returned === P) throw J
      },
      _ = (J, K) => {
        let Q = this.#w?.(I, C, B);
        if (Q && Q instanceof Promise) Q.then((E) => J(E === void 0 ? void 0 : E), K);
        W.signal.addEventListener("abort", () => {
          if (!G.ignoreFetchAbort || G.allowStaleOnFetchAbort) {
            if (J(void 0), G.allowStaleOnFetchAbort) J = (E) => A(E, !0)
          }
        })
      };
    if (G.status) G.status.fetchDispatched = !0;
    let F = new Promise(_).then(A, V),
      g = Object.assign(F, {
        __abortController: W,
        __staleWhileFetching: C,
        __returned: void 0
      });
    if (d === void 0) this.set(I, g, {
      ...B.options,
      status: void 0
    }), d = this.#B.get(I);
    else this.#C[d] = g;
    return g
  }
  #X(I) {
    if (!this.#f) return !1;
    let d = I;
    return !!d && d instanceof Promise && d.hasOwnProperty("__staleWhileFetching") && d.__abortController instanceof Jk
  }
  async fetch(I, d = {}) {
    let {
      allowStale: G = this.allowStale,
      updateAgeOnGet: Z = this.updateAgeOnGet,
      noDeleteOnStaleGet: C = this.noDeleteOnStaleGet,
      ttl: W = this.ttl,
      noDisposeOnSet: w = this.noDisposeOnSet,
      size: B = 0,
      sizeCalculation: A = this.sizeCalculation,
      noUpdateTTL: V = this.noUpdateTTL,
      noDeleteOnFetchRejection: X = this.noDeleteOnFetchRejection,
      allowStaleOnFetchRejection: _ = this.allowStaleOnFetchRejection,
      ignoreFetchAbort: F = this.ignoreFetchAbort,
      allowStaleOnFetchAbort: g = this.allowStaleOnFetchAbort,
      context: J,
      forceRefresh: K = !1,
      status: Q,
      signal: E
    } = d;
    if (!this.#f) {
      if (Q) Q.fetch = "get";
      return this.get(I, {
        allowStale: G,
        updateAgeOnGet: Z,
        noDeleteOnStaleGet: C,
        status: Q
      })
    }
    let S = {
        allowStale: G,
        updateAgeOnGet: Z,
        noDeleteOnStaleGet: C,
        ttl: W,
        noDisposeOnSet: w,
        size: B,
        sizeCalculation: A,
        noUpdateTTL: V,
        noDeleteOnFetchRejection: X,
        allowStaleOnFetchRejection: _,
        allowStaleOnFetchAbort: g,
        ignoreFetchAbort: F,
        status: Q,
        signal: E
      },
      P = this.#B.get(I);
    if (P === void 0) {
      if (Q) Q.fetch = "miss";
      let $ = this.#l(I, P, S, J);
      return $.__returned = $
    } else {
      let $ = this.#C[P];
      if (this.#X($)) {
        let c = G && $.__staleWhileFetching !== void 0;
        if (Q) {
          if (Q.fetch = "inflight", c) Q.returnedStale = !0
        }
        return c ? $.__staleWhileFetching : $.__returned = $
      }
      let h = this.#K(P);
      if (!K && !h) {
        if (Q) Q.fetch = "hit";
        if (this.#h(P), Z) this.#v(P);
        if (Q) this.#G(Q, P);
        return $
      }
      let O = this.#l(I, P, S, J),
        V1 = O.__staleWhileFetching !== void 0 && G;
      if (Q) {
        if (Q.fetch = h ? "stale" : "refresh", V1 && h) Q.returnedStale = !0
      }
      return V1 ? O.__staleWhileFetching : O.__returned = O
    }
  }
  async forceFetch(I, d = {}) {
    let G = await this.fetch(I, d);
    if (G === void 0) throw new Error("fetch() returned undefined");
    return G
  }
  memo(I, d = {}) {
    let G = this.#z;
    if (!G) throw new Error("no memoMethod provided to constructor");
    let {
      context: Z,
      forceRefresh: C,
      ...W
    } = d, w = this.get(I, W);
    if (!C && w !== void 0) return w;
    let B = G(I, w, {
      options: W,
      context: Z
    });
    return this.set(I, B, W), B
  }
  get(I, d = {}) {
    let {
      allowStale: G = this.allowStale,
      updateAgeOnGet: Z = this.updateAgeOnGet,
      noDeleteOnStaleGet: C = this.noDeleteOnStaleGet,
      status: W
    } = d, w = this.#B.get(I);
    if (w !== void 0) {
      let B = this.#C[w],
        A = this.#X(B);
      if (W) this.#G(W, w);
      if (this.#K(w)) {
        if (W) W.get = "stale";
        if (!A) {
          if (!C) this.#y(I, "expire");
          if (W && G) W.returnedStale = !0;
          return G ? B : void 0
        } else {
          if (W && G && B.__staleWhileFetching !== void 0) W.returnedStale = !0;
          return G ? B.__staleWhileFetching : void 0
        }
      } else {
        if (W) W.get = "hit";
        if (A) return B.__staleWhileFetching;
        if (this.#h(w), Z) this.#v(w);
        return B
      }
    } else if (W) W.get = "miss"
  }
  #b(I, d) {
    this.#J[d] = I, this.#g[I] = d
  }
  #h(I) {
    if (I !== this.#_) {
      if (I === this.#D) this.#D = this.#g[I];
      else this.#b(this.#J[I], this.#g[I]);
      this.#b(this.#_, I), this.#_ = I
    }
  }
  delete(I) {
    return this.#y(I, "delete")
  }
  #y(I, d) {
    let G = !1;
    if (this.#V !== 0) {
      let Z = this.#B.get(I);
      if (Z !== void 0)
        if (G = !0, this.#V === 1) this.#j(d);
        else {
          this.#$(Z);
          let C = this.#C[Z];
          if (this.#X(C)) C.__abortController.abort(new Error("deleted"));
          else if (this.#Q || this.#H) {
            if (this.#Q) this.#W?.(C, I, d);
            if (this.#H) this.#F?.push([C, I, d])
          }
          if (this.#B.delete(I), this.#A[Z] = void 0, this.#C[Z] = void 0, Z === this.#_) this.#_ = this.#J[Z];
          else if (Z === this.#D) this.#D = this.#g[Z];
          else {
            let W = this.#J[Z];
            this.#g[W] = this.#g[Z];
            let w = this.#g[Z];
            this.#J[w] = this.#J[Z]
          }
          this.#V--, this.#q.push(Z)
        }
    }
    if (this.#H && this.#F?.length) {
      let Z = this.#F,
        C;
      while (C = Z?.shift()) this.#Z?.(...C)
    }
    return G
  }
  clear() {
    return this.#j("delete")
  }
  #j(I) {
    for (let d of this.#M({
        allowStale: !0
      })) {
      let G = this.#C[d];
      if (this.#X(G)) G.__abortController.abort(new Error("deleted"));
      else {
        let Z = this.#A[d];
        if (this.#Q) this.#W?.(G, Z, I);
        if (this.#H) this.#F?.push([G, Z, I])
      }
    }
    if (this.#B.clear(), this.#C.fill(void 0), this.#A.fill(void 0), this.#N && this.#U) this.#N.fill(0), this.#U.fill(0);
    if (this.#R) this.#R.fill(0);
    if (this.#D = 0, this.#_ = 0, this.#q.length = 0, this.#Y = 0, this.#V = 0, this.#H && this.#F) {
      let d = this.#F,
        G;
      while (G = d?.shift()) this.#Z?.(...G)
    }
  }
}
// @from(Start 5765183, End 5765280)
xi1 = typeof process === "object" && process ? process : {
    stdout: null,
    stderr: null
  }
// @from(Start 5765284, End 5765386)
xJ4 = (I) => !!I && typeof I === "object" && (I instanceof qg || I instanceof ni1 || cJ4(I) || pJ4(I))
// @from(Start 5765390, End 5765525)
cJ4 = (I) => !!I && typeof I === "object" && I instanceof d31 && typeof I.pipe === "function" && I.pipe !== ni1.Writable.prototype.pipe
// @from(Start 5765529, End 5765654)
pJ4 = (I) => !!I && typeof I === "object" && I instanceof d31 && typeof I.write === "function" && typeof I.end === "function"
// @from(Start 5765658, End 5765676)
CV = Symbol("EOF")
// @from(Start 5765680, End 5765707)
WV = Symbol("maybeEmitEnd")
// @from(Start 5765711, End 5765736)
nY = Symbol("emittedEnd")
// @from(Start 5765740, End 5765766)
Kk = Symbol("emittingEnd")
// @from(Start 5765770, End 5765797)
IS = Symbol("emittedError")
// @from(Start 5765801, End 5765822)
Nk = Symbol("closed")
// @from(Start 5765826, End 5765846)
ci1 = Symbol("read")
// @from(Start 5765850, End 5765870)
zk = Symbol("flush")
// @from(Start 5765874, End 5765900)
pi1 = Symbol("flushChunk")
// @from(Start 5765904, End 5765927)
PC = Symbol("encoding")
// @from(Start 5765931, End 5765953)
vQ = Symbol("decoder")
// @from(Start 5765957, End 5765979)
D8 = Symbol("flowing")
// @from(Start 5765983, End 5766004)
dS = Symbol("paused")
// @from(Start 5766008, End 5766029)
EQ = Symbol("resume")
// @from(Start 5766033, End 5766054)
H8 = Symbol("buffer")
// @from(Start 5766058, End 5766078)
CI = Symbol("pipes")
// @from(Start 5766082, End 5766109)
F8 = Symbol("bufferLength")
// @from(Start 5766113, End 5766139)
s91 = Symbol("bufferPush")
// @from(Start 5766143, End 5766169)
Qk = Symbol("bufferShift")
// @from(Start 5766173, End 5766198)
M7 = Symbol("objectMode")
// @from(Start 5766202, End 5766226)
W6 = Symbol("destroyed")
// @from(Start 5766230, End 5766251)
o91 = Symbol("error")
// @from(Start 5766255, End 5766279)
e91 = Symbol("emitData")
// @from(Start 5766283, End 5766306)
ii1 = Symbol("emitEnd")
// @from(Start 5766310, End 5766334)
t91 = Symbol("emitEnd2")
// @from(Start 5766338, End 5766358)
bw = Symbol("async")
// @from(Start 5766362, End 5766383)
I31 = Symbol("abort")
// @from(Start 5766387, End 5766409)
fk = Symbol("aborted")
// @from(Start 5766413, End 5766434)
GS = Symbol("signal")
// @from(Start 5766438, End 5766466)
fg = Symbol("dataListeners")
// @from(Start 5766470, End 5766494)
sd = Symbol("discarded")
// @from(Start 5766498, End 5766535)
ZS = (I) => Promise.resolve().then(I)
// @from(Start 5766539, End 5766555)
iJ4 = (I) => I()
// @from(Start 5766559, End 5766622)
nJ4 = (I) => I === "end" || I === "finish" || I === "prefinish"
// @from(Start 5766626, End 5766773)
rJ4 = (I) => I instanceof ArrayBuffer || !!I && typeof I === "object" && I.constructor && I.constructor.name === "ArrayBuffer" && I.byteLength >= 0
// @from(Start 5766777, End 5766834)
aJ4 = (I) => !Buffer.isBuffer(I) && ArrayBuffer.isView(I)
// @from(Start 5766836, End 5767183)
class G31 {
  src;
  dest;
  opts;
  ondrain;
  constructor(I, d, G) {
    this.src = I, this.dest = d, this.opts = G, this.ondrain = () => I[EQ](), this.dest.on("drain", this.ondrain)
  }
  unpipe() {
    this.dest.removeListener("drain", this.ondrain)
  }
  proxyErrors(I) {}
  end() {
    if (this.unpipe(), this.opts.end) this.dest.end()
  }
}
// @from(Start 5767184, End 5767428)
class ri1 extends G31 {
  unpipe() {
    this.src.removeListener("error", this.proxyErrors), super.unpipe()
  }
  constructor(I, d, G) {
    super(I, d, G);
    this.proxyErrors = (Z) => d.emit("error", Z), I.on("error", this.proxyErrors)
  }
}
// @from(Start 5767433, End 5767460)
sJ4 = (I) => !!I.objectMode
// @from(Start 5767464, End 5767533)
oJ4 = (I) => !I.objectMode && !!I.encoding && I.encoding !== "buffer"
// @from(Start 5767535, End 5778916)
class qg extends d31 {
  [D8] = !1;
  [dS] = !1;
  [CI] = [];
  [H8] = [];
  [M7];
  [PC];
  [bw];
  [vQ];
  [CV] = !1;
  [nY] = !1;
  [Kk] = !1;
  [Nk] = !1;
  [IS] = null;
  [F8] = 0;
  [W6] = !1;
  [GS];
  [fk] = !1;
  [fg] = 0;
  [sd] = !1;
  writable = !0;
  readable = !0;
  constructor(...I) {
    let d = I[0] || {};
    super();
    if (d.objectMode && typeof d.encoding === "string") throw new TypeError("Encoding and objectMode may not be used together");
    if (sJ4(d)) this[M7] = !0, this[PC] = null;
    else if (oJ4(d)) this[PC] = d.encoding, this[M7] = !1;
    else this[M7] = !1, this[PC] = null;
    if (this[bw] = !!d.async, this[vQ] = this[PC] ? new kJ4(this[PC]) : null, d && d.debugExposeBuffer === !0) Object.defineProperty(this, "buffer", {
      get: () => this[H8]
    });
    if (d && d.debugExposePipes === !0) Object.defineProperty(this, "pipes", {
      get: () => this[CI]
    });
    let {
      signal: G
    } = d;
    if (G)
      if (this[GS] = G, G.aborted) this[I31]();
      else G.addEventListener("abort", () => this[I31]())
  }
  get bufferLength() {
    return this[F8]
  }
  get encoding() {
    return this[PC]
  }
  set encoding(I) {
    throw new Error("Encoding must be set at instantiation time")
  }
  setEncoding(I) {
    throw new Error("Encoding must be set at instantiation time")
  }
  get objectMode() {
    return this[M7]
  }
  set objectMode(I) {
    throw new Error("objectMode must be set at instantiation time")
  }
  get["async"]() {
    return this[bw]
  }
  set["async"](I) {
    this[bw] = this[bw] || !!I
  } [I31]() {
    this[fk] = !0, this.emit("abort", this[GS]?.reason), this.destroy(this[GS]?.reason)
  }
  get aborted() {
    return this[fk]
  }
  set aborted(I) {}
  write(I, d, G) {
    if (this[fk]) return !1;
    if (this[CV]) throw new Error("write after end");
    if (this[W6]) return this.emit("error", Object.assign(new Error("Cannot call write after a stream was destroyed"), {
      code: "ERR_STREAM_DESTROYED"
    })), !0;
    if (typeof d === "function") G = d, d = "utf8";
    if (!d) d = "utf8";
    let Z = this[bw] ? ZS : iJ4;
    if (!this[M7] && !Buffer.isBuffer(I)) {
      if (aJ4(I)) I = Buffer.from(I.buffer, I.byteOffset, I.byteLength);
      else if (rJ4(I)) I = Buffer.from(I);
      else if (typeof I !== "string") throw new Error("Non-contiguous data written to non-objectMode stream")
    }
    if (this[M7]) {
      if (this[D8] && this[F8] !== 0) this[zk](!0);
      if (this[D8]) this.emit("data", I);
      else this[s91](I);
      if (this[F8] !== 0) this.emit("readable");
      if (G) Z(G);
      return this[D8]
    }
    if (!I.length) {
      if (this[F8] !== 0) this.emit("readable");
      if (G) Z(G);
      return this[D8]
    }
    if (typeof I === "string" && !(d === this[PC] && !this[vQ]?.lastNeed)) I = Buffer.from(I, d);
    if (Buffer.isBuffer(I) && this[PC]) I = this[vQ].write(I);
    if (this[D8] && this[F8] !== 0) this[zk](!0);
    if (this[D8]) this.emit("data", I);
    else this[s91](I);
    if (this[F8] !== 0) this.emit("readable");
    if (G) Z(G);
    return this[D8]
  }
  read(I) {
    if (this[W6]) return null;
    if (this[sd] = !1, this[F8] === 0 || I === 0 || I && I > this[F8]) return this[WV](), null;
    if (this[M7]) I = null;
    if (this[H8].length > 1 && !this[M7]) this[H8] = [this[PC] ? this[H8].join("") : Buffer.concat(this[H8], this[F8])];
    let d = this[ci1](I || null, this[H8][0]);
    return this[WV](), d
  } [ci1](I, d) {
    if (this[M7]) this[Qk]();
    else {
      let G = d;
      if (I === G.length || I === null) this[Qk]();
      else if (typeof G === "string") this[H8][0] = G.slice(I), d = G.slice(0, I), this[F8] -= I;
      else this[H8][0] = G.subarray(I), d = G.subarray(0, I), this[F8] -= I
    }
    if (this.emit("data", d), !this[H8].length && !this[CV]) this.emit("drain");
    return d
  }
  end(I, d, G) {
    if (typeof I === "function") G = I, I = void 0;
    if (typeof d === "function") G = d, d = "utf8";
    if (I !== void 0) this.write(I, d);
    if (G) this.once("end", G);
    if (this[CV] = !0, this.writable = !1, this[D8] || !this[dS]) this[WV]();
    return this
  } [EQ]() {
    if (this[W6]) return;
    if (!this[fg] && !this[CI].length) this[sd] = !0;
    if (this[dS] = !1, this[D8] = !0, this.emit("resume"), this[H8].length) this[zk]();
    else if (this[CV]) this[WV]();
    else this.emit("drain")
  }
  resume() {
    return this[EQ]()
  }
  pause() {
    this[D8] = !1, this[dS] = !0, this[sd] = !1
  }
  get destroyed() {
    return this[W6]
  }
  get flowing() {
    return this[D8]
  }
  get paused() {
    return this[dS]
  } [s91](I) {
    if (this[M7]) this[F8] += 1;
    else this[F8] += I.length;
    this[H8].push(I)
  } [Qk]() {
    if (this[M7]) this[F8] -= 1;
    else this[F8] -= this[H8][0].length;
    return this[H8].shift()
  } [zk](I = !1) {
    do; while (this[pi1](this[Qk]()) && this[H8].length);
    if (!I && !this[H8].length && !this[CV]) this.emit("drain")
  } [pi1](I) {
    return this.emit("data", I), this[D8]
  }
  pipe(I, d) {
    if (this[W6]) return I;
    this[sd] = !1;
    let G = this[nY];
    if (d = d || {}, I === xi1.stdout || I === xi1.stderr) d.end = !1;
    else d.end = d.end !== !1;
    if (d.proxyErrors = !!d.proxyErrors, G) {
      if (d.end) I.end()
    } else if (this[CI].push(!d.proxyErrors ? new G31(this, I, d) : new ri1(this, I, d)), this[bw]) ZS(() => this[EQ]());
    else this[EQ]();
    return I
  }
  unpipe(I) {
    let d = this[CI].find((G) => G.dest === I);
    if (d) {
      if (this[CI].length === 1) {
        if (this[D8] && this[fg] === 0) this[D8] = !1;
        this[CI] = []
      } else this[CI].splice(this[CI].indexOf(d), 1);
      d.unpipe()
    }
  }
  addListener(I, d) {
    return this.on(I, d)
  }
  on(I, d) {
    let G = super.on(I, d);
    if (I === "data") {
      if (this[sd] = !1, this[fg]++, !this[CI].length && !this[D8]) this[EQ]()
    } else if (I === "readable" && this[F8] !== 0) super.emit("readable");
    else if (nJ4(I) && this[nY]) super.emit(I), this.removeAllListeners(I);
    else if (I === "error" && this[IS]) {
      let Z = d;
      if (this[bw]) ZS(() => Z.call(this, this[IS]));
      else Z.call(this, this[IS])
    }
    return G
  }
  removeListener(I, d) {
    return this.off(I, d)
  }
  off(I, d) {
    let G = super.off(I, d);
    if (I === "data") {
      if (this[fg] = this.listeners("data").length, this[fg] === 0 && !this[sd] && !this[CI].length) this[D8] = !1
    }
    return G
  }
  removeAllListeners(I) {
    let d = super.removeAllListeners(I);
    if (I === "data" || I === void 0) {
      if (this[fg] = 0, !this[sd] && !this[CI].length) this[D8] = !1
    }
    return d
  }
  get emittedEnd() {
    return this[nY]
  } [WV]() {
    if (!this[Kk] && !this[nY] && !this[W6] && this[H8].length === 0 && this[CV]) {
      if (this[Kk] = !0, this.emit("end"), this.emit("prefinish"), this.emit("finish"), this[Nk]) this.emit("close");
      this[Kk] = !1
    }
  }
  emit(I, ...d) {
    let G = d[0];
    if (I !== "error" && I !== "close" && I !== W6 && this[W6]) return !1;
    else if (I === "data") return !this[M7] && !G ? !1 : this[bw] ? (ZS(() => this[e91](G)), !0) : this[e91](G);
    else if (I === "end") return this[ii1]();
    else if (I === "close") {
      if (this[Nk] = !0, !this[nY] && !this[W6]) return !1;
      let C = super.emit("close");
      return this.removeAllListeners("close"), C
    } else if (I === "error") {
      this[IS] = G, super.emit(o91, G);
      let C = !this[GS] || this.listeners("error").length ? super.emit("error", G) : !1;
      return this[WV](), C
    } else if (I === "resume") {
      let C = super.emit("resume");
      return this[WV](), C
    } else if (I === "finish" || I === "prefinish") {
      let C = super.emit(I);
      return this.removeAllListeners(I), C
    }
    let Z = super.emit(I, ...d);
    return this[WV](), Z
  } [e91](I) {
    for (let G of this[CI])
      if (G.dest.write(I) === !1) this.pause();
    let d = this[sd] ? !1 : super.emit("data", I);
    return this[WV](), d
  } [ii1]() {
    if (this[nY]) return !1;
    return this[nY] = !0, this.readable = !1, this[bw] ? (ZS(() => this[t91]()), !0) : this[t91]()
  } [t91]() {
    if (this[vQ]) {
      let d = this[vQ].end();
      if (d) {
        for (let G of this[CI]) G.dest.write(d);
        if (!this[sd]) super.emit("data", d)
      }
    }
    for (let d of this[CI]) d.end();
    let I = super.emit("end");
    return this.removeAllListeners("end"), I
  }
  async collect() {
    let I = Object.assign([], {
      dataLength: 0
    });
    if (!this[M7]) I.dataLength = 0;
    let d = this.promise();
    return this.on("data", (G) => {
      if (I.push(G), !this[M7]) I.dataLength += G.length
    }), await d, I
  }
  async concat() {
    if (this[M7]) throw new Error("cannot concat in objectMode");
    let I = await this.collect();
    return this[PC] ? I.join("") : Buffer.concat(I, I.dataLength)
  }
  async promise() {
    return new Promise((I, d) => {
      this.on(W6, () => d(new Error("stream destroyed"))), this.on("error", (G) => d(G)), this.on("end", () => I())
    })
  } [Symbol.asyncIterator]() {
    this[sd] = !1;
    let I = !1,
      d = async () => {
        return this.pause(), I = !0, {
          value: void 0,
          done: !0
        }
      };
    return {
      next: () => {
        if (I) return d();
        let Z = this.read();
        if (Z !== null) return Promise.resolve({
          done: !1,
          value: Z
        });
        if (this[CV]) return d();
        let C, W, w = (X) => {
            this.off("data", B), this.off("end", A), this.off(W6, V), d(), W(X)
          },
          B = (X) => {
            this.off("error", w), this.off("end", A), this.off(W6, V), this.pause(), C({
              value: X,
              done: !!this[CV]
            })
          },
          A = () => {
            this.off("error", w), this.off("data", B), this.off(W6, V), d(), C({
              done: !0,
              value: void 0
            })
          },
          V = () => w(new Error("stream destroyed"));
        return new Promise((X, _) => {
          W = _, C = X, this.once(W6, V), this.once("error", w), this.once("end", A), this.once("data", B)
        })
      },
      throw: d,
      return: d,
      [Symbol.asyncIterator]() {
        return this
      }
    }
  } [Symbol.iterator]() {
    this[sd] = !1;
    let I = !1,
      d = () => {
        return this.pause(), this.off(o91, d), this.off(W6, d), this.off("end", d), I = !0, {
          done: !0,
          value: void 0
        }
      },
      G = () => {
        if (I) return d();
        let Z = this.read();
        return Z === null ? d() : {
          done: !1,
          value: Z
        }
      };
    return this.once("end", d), this.once(o91, d), this.once(W6, d), {
      next: G,
      throw: d,
      return: d,
      [Symbol.iterator]() {
        return this
      }
    }
  }
  destroy(I) {
    if (this[W6]) {
      if (I) this.emit("error", I);
      else this.emit(W6);
      return this
    }
    this[W6] = !0, this[sd] = !0, this[H8].length = 0, this[F8] = 0;
    let d = this;
    if (typeof d.close === "function" && !this[Nk]) d.close();
    if (I) this.emit("error", I);
    else this.emit(W6);
    return this
  }
  static get isStream() {
    return xJ4
  }
}
// @from(Start 5778921, End 5778937)
wK4 = CK4.native
// @from(Start 5778941, End 5779158)
WS = {
    lstatSync: IK4,
    readdir: dK4,
    readdirSync: GK4,
    readlinkSync: ZK4,
    realpathSync: wK4,
    promises: {
      lstat: BK4,
      readdir: AK4,
      readlink: VK4,
      realpath: XK4
    }
  }
// @from(Start 5779162, End 5779306)
ti1 = (I) => !I || I === WS || I === WK4 ? WS : {
    ...WS,
    ...I,
    promises: {
      ...WS.promises,
      ...I.promises || {}
    }
  }
// @from(Start 5779310, End 5779340)
In1 = /^\\\\\?\\([a-z]:)\\?$/i
// @from(Start 5779344, End 5779400)
YK4 = (I) => I.replace(/\//g, "\\").replace(In1, "$1\\")
// @from(Start 5779404, End 5779418)
_K4 = /[\\\/]/
// @from(Start 5779422, End 5779428)
_Z = 0
// @from(Start 5779432, End 5779439)
dn1 = 1
// @from(Start 5779443, End 5779450)
Gn1 = 2
// @from(Start 5779454, End 5779460)
hw = 4
// @from(Start 5779464, End 5779471)
Zn1 = 6
// @from(Start 5779475, End 5779482)
Cn1 = 8
// @from(Start 5779486, End 5779493)
Rg = 10
// @from(Start 5779497, End 5779505)
Wn1 = 12
// @from(Start 5779509, End 5779516)
YZ = 15
// @from(Start 5779520, End 5779528)
CS = ~YZ
// @from(Start 5779532, End 5779540)
Z31 = 16
// @from(Start 5779544, End 5779552)
ai1 = 32
// @from(Start 5779556, End 5779563)
wS = 64
// @from(Start 5779567, End 5779575)
$C = 128
// @from(Start 5779579, End 5779587)
qk = 256
// @from(Start 5779591, End 5779599)
Uk = 512
// @from(Start 5779603, End 5779621)
si1 = wS | $C | Uk
// @from(Start 5779625, End 5779635)
DK4 = 1023
// @from(Start 5779639, End 5779818)
C31 = (I) => I.isFile() ? Cn1 : I.isDirectory() ? hw : I.isSymbolicLink() ? Rg : I.isCharacterDevice() ? Gn1 : I.isBlockDevice() ? Zn1 : I.isSocket() ? Wn1 : I.isFIFO() ? dn1 : _Z
// @from(Start 5779822, End 5779835)
oi1 = new Map
// @from(Start 5779839, End 5779962)
BS = (I) => {
    let d = oi1.get(I);
    if (d) return d;
    let G = I.normalize("NFKD");
    return oi1.set(I, G), G
  }
// @from(Start 5779966, End 5779979)
ei1 = new Map
// @from(Start 5779983, End 5780106)
Rk = (I) => {
    let d = ei1.get(I);
    if (d) return d;
    let G = BS(I.toLowerCase());
    return ei1.set(I, G), G
  }
// @from(Start 5780108, End 5780188)
class w31 extends ZV {
  constructor() {
    super({
      max: 256
    })
  }
}
// @from(Start 5780189, End 5780324)
class wn1 extends ZV {
  constructor(I = 16384) {
    super({
      maxSize: I,
      sizeCalculation: (d) => d.length + 1
    })
  }
}
// @from(Start 5780329, End 5780364)
Bn1 = Symbol("PathScurry setAsCwd")
// @from(Start 5780366, End 5791877)
class WI {
  name;
  root;
  roots;
  parent;
  nocase;
  isCWD = !1;
  #I;
  #d;
  get dev() {
    return this.#d
  }
  #W;
  get mode() {
    return this.#W
  }
  #Z;
  get nlink() {
    return this.#Z
  }
  #w;
  get uid() {
    return this.#w
  }
  #z;
  get gid() {
    return this.#z
  }
  #V;
  get rdev() {
    return this.#V
  }
  #Y;
  get blksize() {
    return this.#Y
  }
  #B;
  get ino() {
    return this.#B
  }
  #A;
  get size() {
    return this.#A
  }
  #C;
  get blocks() {
    return this.#C
  }
  #g;
  get atimeMs() {
    return this.#g
  }
  #J;
  get mtimeMs() {
    return this.#J
  }
  #D;
  get ctimeMs() {
    return this.#D
  }
  #_;
  get birthtimeMs() {
    return this.#_
  }
  #q;
  get atime() {
    return this.#q
  }
  #F;
  get mtime() {
    return this.#F
  }
  #R;
  get ctime() {
    return this.#R
  }
  #U;
  get birthtime() {
    return this.#U
  }
  #N;
  #Q;
  #f;
  #H;
  #S;
  #v;
  #G;
  #P;
  #K;
  #L;
  get parentPath() {
    return (this.parent || this).fullpath()
  }
  get path() {
    return this.parentPath
  }
  constructor(I, d = _Z, G, Z, C, W, w) {
    if (this.name = I, this.#N = C ? Rk(I) : BS(I), this.#G = d & DK4, this.nocase = C, this.roots = Z, this.root = G || this, this.#P = W, this.#f = w.fullpath, this.#S = w.relative, this.#v = w.relativePosix, this.parent = w.parent, this.parent) this.#I = this.parent.#I;
    else this.#I = ti1(w.fs)
  }
  depth() {
    if (this.#Q !== void 0) return this.#Q;
    if (!this.parent) return this.#Q = 0;
    return this.#Q = this.parent.depth() + 1
  }
  childrenCache() {
    return this.#P
  }
  resolve(I) {
    if (!I) return this;
    let d = this.getRootString(I),
      Z = I.substring(d.length).split(this.splitSep);
    return d ? this.getRoot(d).#$(Z) : this.#$(Z)
  }
  #$(I) {
    let d = this;
    for (let G of I) d = d.child(G);
    return d
  }
  children() {
    let I = this.#P.get(this);
    if (I) return I;
    let d = Object.assign([], {
      provisional: 0
    });
    return this.#P.set(this, d), this.#G &= ~Z31, d
  }
  child(I, d) {
    if (I === "" || I === ".") return this;
    if (I === "..") return this.parent || this;
    let G = this.children(),
      Z = this.nocase ? Rk(I) : BS(I);
    for (let B of G)
      if (B.#N === Z) return B;
    let C = this.parent ? this.sep : "",
      W = this.#f ? this.#f + C + I : void 0,
      w = this.newChild(I, _Z, {
        ...d,
        parent: this,
        fullpath: W
      });
    if (!this.canReaddir()) w.#G |= $C;
    return G.push(w), w
  }
  relative() {
    if (this.isCWD) return "";
    if (this.#S !== void 0) return this.#S;
    let I = this.name,
      d = this.parent;
    if (!d) return this.#S = this.name;
    let G = d.relative();
    return G + (!G || !d.parent ? "" : this.sep) + I
  }
  relativePosix() {
    if (this.sep === "/") return this.relative();
    if (this.isCWD) return "";
    if (this.#v !== void 0) return this.#v;
    let I = this.name,
      d = this.parent;
    if (!d) return this.#v = this.fullpathPosix();
    let G = d.relativePosix();
    return G + (!G || !d.parent ? "" : "/") + I
  }
  fullpath() {
    if (this.#f !== void 0) return this.#f;
    let I = this.name,
      d = this.parent;
    if (!d) return this.#f = this.name;
    let Z = d.fullpath() + (!d.parent ? "" : this.sep) + I;
    return this.#f = Z
  }
  fullpathPosix() {
    if (this.#H !== void 0) return this.#H;
    if (this.sep === "/") return this.#H = this.fullpath();
    if (!this.parent) {
      let Z = this.fullpath().replace(/\\/g, "/");
      if (/^[a-z]:\//i.test(Z)) return this.#H = `//?/${Z}`;
      else return this.#H = Z
    }
    let I = this.parent,
      d = I.fullpathPosix(),
      G = d + (!d || !I.parent ? "" : "/") + this.name;
    return this.#H = G
  }
  isUnknown() {
    return (this.#G & YZ) === _Z
  }
  isType(I) {
    return this[`is${I}`]()
  }
  getType() {
    return this.isUnknown() ? "Unknown" : this.isDirectory() ? "Directory" : this.isFile() ? "File" : this.isSymbolicLink() ? "SymbolicLink" : this.isFIFO() ? "FIFO" : this.isCharacterDevice() ? "CharacterDevice" : this.isBlockDevice() ? "BlockDevice" : this.isSocket() ? "Socket" : "Unknown"
  }
  isFile() {
    return (this.#G & YZ) === Cn1
  }
  isDirectory() {
    return (this.#G & YZ) === hw
  }
  isCharacterDevice() {
    return (this.#G & YZ) === Gn1
  }
  isBlockDevice() {
    return (this.#G & YZ) === Zn1
  }
  isFIFO() {
    return (this.#G & YZ) === dn1
  }
  isSocket() {
    return (this.#G & YZ) === Wn1
  }
  isSymbolicLink() {
    return (this.#G & Rg) === Rg
  }
  lstatCached() {
    return this.#G & ai1 ? this : void 0
  }
  readlinkCached() {
    return this.#K
  }
  realpathCached() {
    return this.#L
  }
  readdirCached() {
    let I = this.children();
    return I.slice(0, I.provisional)
  }
  canReadlink() {
    if (this.#K) return !0;
    if (!this.parent) return !1;
    let I = this.#G & YZ;
    return !(I !== _Z && I !== Rg || this.#G & qk || this.#G & $C)
  }
  calledReaddir() {
    return !!(this.#G & Z31)
  }
  isENOENT() {
    return !!(this.#G & $C)
  }
  isNamed(I) {
    return !this.nocase ? this.#N === BS(I) : this.#N === Rk(I)
  }
  async readlink() {
    let I = this.#K;
    if (I) return I;
    if (!this.canReadlink()) return;
    if (!this.parent) return;
    try {
      let d = await this.#I.promises.readlink(this.fullpath()),
        G = (await this.parent.realpath())?.resolve(d);
      if (G) return this.#K = G
    } catch (d) {
      this.#X(d.code);
      return
    }
  }
  readlinkSync() {
    let I = this.#K;
    if (I) return I;
    if (!this.canReadlink()) return;
    if (!this.parent) return;
    try {
      let d = this.#I.readlinkSync(this.fullpath()),
        G = this.parent.realpathSync()?.resolve(d);
      if (G) return this.#K = G
    } catch (d) {
      this.#X(d.code);
      return
    }
  }
  #u(I) {
    this.#G |= Z31;
    for (let d = I.provisional; d < I.length; d++) {
      let G = I[d];
      if (G) G.#T()
    }
  }
  #T() {
    if (this.#G & $C) return;
    this.#G = (this.#G | $C) & CS, this.#E()
  }
  #E() {
    let I = this.children();
    I.provisional = 0;
    for (let d of I) d.#T()
  }
  #M() {
    this.#G |= Uk, this.#O()
  }
  #O() {
    if (this.#G & wS) return;
    let I = this.#G;
    if ((I & YZ) === hw) I &= CS;
    this.#G = I | wS, this.#E()
  }
  #m(I = "") {
    if (I === "ENOTDIR" || I === "EPERM") this.#O();
    else if (I === "ENOENT") this.#T();
    else this.children().provisional = 0
  }
  #l(I = "") {
    if (I === "ENOTDIR") this.parent.#O();
    else if (I === "ENOENT") this.#T()
  }
  #X(I = "") {
    let d = this.#G;
    if (d |= qk, I === "ENOENT") d |= $C;
    if (I === "EINVAL" || I === "UNKNOWN") d &= CS;
    if (this.#G = d, I === "ENOTDIR" && this.parent) this.parent.#O()
  }
  #b(I, d) {
    return this.#y(I, d) || this.#h(I, d)
  }
  #h(I, d) {
    let G = C31(I),
      Z = this.newChild(I.name, G, {
        parent: this
      }),
      C = Z.#G & YZ;
    if (C !== hw && C !== Rg && C !== _Z) Z.#G |= wS;
    return d.unshift(Z), d.provisional++, Z
  }
  #y(I, d) {
    for (let G = d.provisional; G < d.length; G++) {
      let Z = d[G];
      if ((this.nocase ? Rk(I.name) : BS(I.name)) !== Z.#N) continue;
      return this.#j(I, Z, G, d)
    }
  }
  #j(I, d, G, Z) {
    let C = d.name;
    if (d.#G = d.#G & CS | C31(I), C !== I.name) d.name = I.name;
    if (G !== Z.provisional) {
      if (G === Z.length - 1) Z.pop();
      else Z.splice(G, 1);
      Z.unshift(d)
    }
    return Z.provisional++, d
  }
  async lstat() {
    if ((this.#G & $C) === 0) try {
      return this.#p(await this.#I.promises.lstat(this.fullpath())), this
    } catch (I) {
      this.#l(I.code)
    }
  }
  lstatSync() {
    if ((this.#G & $C) === 0) try {
      return this.#p(this.#I.lstatSync(this.fullpath())), this
    } catch (I) {
      this.#l(I.code)
    }
  }
  #p(I) {
    let {
      atime: d,
      atimeMs: G,
      birthtime: Z,
      birthtimeMs: C,
      blksize: W,
      blocks: w,
      ctime: B,
      ctimeMs: A,
      dev: V,
      gid: X,
      ino: _,
      mode: F,
      mtime: g,
      mtimeMs: J,
      nlink: K,
      rdev: Q,
      size: E,
      uid: S
    } = I;
    this.#q = d, this.#g = G, this.#U = Z, this.#_ = C, this.#Y = W, this.#C = w, this.#R = B, this.#D = A, this.#d = V, this.#z = X, this.#B = _, this.#W = F, this.#F = g, this.#J = J, this.#Z = K, this.#V = Q, this.#A = E, this.#w = S;
    let P = C31(I);
    if (this.#G = this.#G & CS | P | ai1, P !== _Z && P !== hw && P !== Rg) this.#G |= wS
  }
  #x = [];
  #c = !1;
  #i(I) {
    this.#c = !1;
    let d = this.#x.slice();
    this.#x.length = 0, d.forEach((G) => G(null, I))
  }
  readdirCB(I, d = !1) {
    if (!this.canReaddir()) {
      if (d) I(null, []);
      else queueMicrotask(() => I(null, []));
      return
    }
    let G = this.children();
    if (this.calledReaddir()) {
      let C = G.slice(0, G.provisional);
      if (d) I(null, C);
      else queueMicrotask(() => I(null, C));
      return
    }
    if (this.#x.push(I), this.#c) return;
    this.#c = !0;
    let Z = this.fullpath();
    this.#I.readdir(Z, {
      withFileTypes: !0
    }, (C, W) => {
      if (C) this.#m(C.code), G.provisional = 0;
      else {
        for (let w of W) this.#b(w, G);
        this.#u(G)
      }
      this.#i(G.slice(0, G.provisional));
      return
    })
  }
  #k;
  async readdir() {
    if (!this.canReaddir()) return [];
    let I = this.children();
    if (this.calledReaddir()) return I.slice(0, I.provisional);
    let d = this.fullpath();
    if (this.#k) await this.#k;
    else {
      let G = () => {};
      this.#k = new Promise((Z) => G = Z);
      try {
        for (let Z of await this.#I.promises.readdir(d, {
            withFileTypes: !0
          })) this.#b(Z, I);
        this.#u(I)
      } catch (Z) {
        this.#m(Z.code), I.provisional = 0
      }
      this.#k = void 0, G()
    }
    return I.slice(0, I.provisional)
  }
  readdirSync() {
    if (!this.canReaddir()) return [];
    let I = this.children();
    if (this.calledReaddir()) return I.slice(0, I.provisional);
    let d = this.fullpath();
    try {
      for (let G of this.#I.readdirSync(d, {
          withFileTypes: !0
        })) this.#b(G, I);
      this.#u(I)
    } catch (G) {
      this.#m(G.code), I.provisional = 0
    }
    return I.slice(0, I.provisional)
  }
  canReaddir() {
    if (this.#G & si1) return !1;
    let I = YZ & this.#G;
    if (!(I === _Z || I === hw || I === Rg)) return !1;
    return !0
  }
  shouldWalk(I, d) {
    return (this.#G & hw) === hw && !(this.#G & si1) && !I.has(this) && (!d || d(this))
  }
  async realpath() {
    if (this.#L) return this.#L;
    if ((Uk | qk | $C) & this.#G) return;
    try {
      let I = await this.#I.promises.realpath(this.fullpath());
      return this.#L = this.resolve(I)
    } catch (I) {
      this.#M()
    }
  }
  realpathSync() {
    if (this.#L) return this.#L;
    if ((Uk | qk | $C) & this.#G) return;
    try {
      let I = this.#I.realpathSync(this.fullpath());
      return this.#L = this.resolve(I)
    } catch (I) {
      this.#M()
    }
  } [Bn1](I) {
    if (I === this) return;
    I.isCWD = !1, this.isCWD = !0;
    let d = new Set([]),
      G = [],
      Z = this;
    while (Z && Z.parent) d.add(Z), Z.#S = G.join(this.sep), Z.#v = G.join("/"), Z = Z.parent, G.push("..");
    Z = I;
    while (Z && Z.parent && !d.has(Z)) Z.#S = void 0, Z.#v = void 0, Z = Z.parent
  }
}
// @from(Start 5791878, End 5792556)
class vk extends WI {
  sep = "\\";
  splitSep = _K4;
  constructor(I, d = _Z, G, Z, C, W, w) {
    super(I, d, G, Z, C, W, w)
  }
  newChild(I, d = _Z, G = {}) {
    return new vk(I, d, this.root, this.roots, this.nocase, this.childrenCache(), G)
  }
  getRootString(I) {
    return W31.parse(I).root
  }
  getRoot(I) {
    if (I = YK4(I.toUpperCase()), I === this.root.name) return this.root;
    for (let [d, G] of Object.entries(this.roots))
      if (this.sameRoot(I, d)) return this.roots[I] = G;
    return this.roots[I] = new AS(I, this).root
  }
  sameRoot(I, d = this.root.name) {
    return I = I.toUpperCase().replace(/\//g, "\\").replace(In1, "$1\\"), I === d
  }
}
// @from(Start 5792557, End 5792914)
class Ek extends WI {
  splitSep = "/";
  sep = "/";
  constructor(I, d = _Z, G, Z, C, W, w) {
    super(I, d, G, Z, C, W, w)
  }
  getRootString(I) {
    return I.startsWith("/") ? "/" : ""
  }
  getRoot(I) {
    return this.root
  }
  newChild(I, d = _Z, G = {}) {
    return new Ek(I, d, this.root, this.roots, this.nocase, this.childrenCache(), G)
  }
}
// @from(Start 5792915, End 5802882)
class B31 {
  root;
  rootPath;
  roots;
  cwd;
  #I;
  #d;
  #W;
  nocase;
  #Z;
  constructor(I = process.cwd(), d, G, {
    nocase: Z,
    childrenCacheSize: C = 16384,
    fs: W = WS
  } = {}) {
    if (this.#Z = ti1(W), I instanceof URL || I.startsWith("file://")) I = tJ4(I);
    let w = d.resolve(I);
    this.roots = Object.create(null), this.rootPath = this.parseRootPath(w), this.#I = new w31, this.#d = new w31, this.#W = new wn1(C);
    let B = w.substring(this.rootPath.length).split(G);
    if (B.length === 1 && !B[0]) B.pop();
    if (Z === void 0) throw new TypeError("must provide nocase setting to PathScurryBase ctor");
    this.nocase = Z, this.root = this.newRoot(this.#Z), this.roots[this.rootPath] = this.root;
    let A = this.root,
      V = B.length - 1,
      X = d.sep,
      _ = this.rootPath,
      F = !1;
    for (let g of B) {
      let J = V--;
      A = A.child(g, {
        relative: new Array(J).fill("..").join(X),
        relativePosix: new Array(J).fill("..").join("/"),
        fullpath: _ += (F ? "" : X) + g
      }), F = !0
    }
    this.cwd = A
  }
  depth(I = this.cwd) {
    if (typeof I === "string") I = this.cwd.resolve(I);
    return I.depth()
  }
  childrenCache() {
    return this.#W
  }
  resolve(...I) {
    let d = "";
    for (let C = I.length - 1; C >= 0; C--) {
      let W = I[C];
      if (!W || W === ".") continue;
      if (d = d ? `${W}/${d}` : W, this.isAbsolute(W)) break
    }
    let G = this.#I.get(d);
    if (G !== void 0) return G;
    let Z = this.cwd.resolve(d).fullpath();
    return this.#I.set(d, Z), Z
  }
  resolvePosix(...I) {
    let d = "";
    for (let C = I.length - 1; C >= 0; C--) {
      let W = I[C];
      if (!W || W === ".") continue;
      if (d = d ? `${W}/${d}` : W, this.isAbsolute(W)) break
    }
    let G = this.#d.get(d);
    if (G !== void 0) return G;
    let Z = this.cwd.resolve(d).fullpathPosix();
    return this.#d.set(d, Z), Z
  }
  relative(I = this.cwd) {
    if (typeof I === "string") I = this.cwd.resolve(I);
    return I.relative()
  }
  relativePosix(I = this.cwd) {
    if (typeof I === "string") I = this.cwd.resolve(I);
    return I.relativePosix()
  }
  basename(I = this.cwd) {
    if (typeof I === "string") I = this.cwd.resolve(I);
    return I.name
  }
  dirname(I = this.cwd) {
    if (typeof I === "string") I = this.cwd.resolve(I);
    return (I.parent || I).fullpath()
  }
  async readdir(I = this.cwd, d = {
    withFileTypes: !0
  }) {
    if (typeof I === "string") I = this.cwd.resolve(I);
    else if (!(I instanceof WI)) d = I, I = this.cwd;
    let {
      withFileTypes: G
    } = d;
    if (!I.canReaddir()) return [];
    else {
      let Z = await I.readdir();
      return G ? Z : Z.map((C) => C.name)
    }
  }
  readdirSync(I = this.cwd, d = {
    withFileTypes: !0
  }) {
    if (typeof I === "string") I = this.cwd.resolve(I);
    else if (!(I instanceof WI)) d = I, I = this.cwd;
    let {
      withFileTypes: G = !0
    } = d;
    if (!I.canReaddir()) return [];
    else if (G) return I.readdirSync();
    else return I.readdirSync().map((Z) => Z.name)
  }
  async lstat(I = this.cwd) {
    if (typeof I === "string") I = this.cwd.resolve(I);
    return I.lstat()
  }
  lstatSync(I = this.cwd) {
    if (typeof I === "string") I = this.cwd.resolve(I);
    return I.lstatSync()
  }
  async readlink(I = this.cwd, {
    withFileTypes: d
  } = {
    withFileTypes: !1
  }) {
    if (typeof I === "string") I = this.cwd.resolve(I);
    else if (!(I instanceof WI)) d = I.withFileTypes, I = this.cwd;
    let G = await I.readlink();
    return d ? G : G?.fullpath()
  }
  readlinkSync(I = this.cwd, {
    withFileTypes: d
  } = {
    withFileTypes: !1
  }) {
    if (typeof I === "string") I = this.cwd.resolve(I);
    else if (!(I instanceof WI)) d = I.withFileTypes, I = this.cwd;
    let G = I.readlinkSync();
    return d ? G : G?.fullpath()
  }
  async realpath(I = this.cwd, {
    withFileTypes: d
  } = {
    withFileTypes: !1
  }) {
    if (typeof I === "string") I = this.cwd.resolve(I);
    else if (!(I instanceof WI)) d = I.withFileTypes, I = this.cwd;
    let G = await I.realpath();
    return d ? G : G?.fullpath()
  }
  realpathSync(I = this.cwd, {
    withFileTypes: d
  } = {
    withFileTypes: !1
  }) {
    if (typeof I === "string") I = this.cwd.resolve(I);
    else if (!(I instanceof WI)) d = I.withFileTypes, I = this.cwd;
    let G = I.realpathSync();
    return d ? G : G?.fullpath()
  }
  async walk(I = this.cwd, d = {}) {
    if (typeof I === "string") I = this.cwd.resolve(I);
    else if (!(I instanceof WI)) d = I, I = this.cwd;
    let {
      withFileTypes: G = !0,
      follow: Z = !1,
      filter: C,
      walkFilter: W
    } = d, w = [];
    if (!C || C(I)) w.push(G ? I : I.fullpath());
    let B = new Set,
      A = (X, _) => {
        B.add(X), X.readdirCB((F, g) => {
          if (F) return _(F);
          let J = g.length;
          if (!J) return _();
          let K = () => {
            if (--J === 0) _()
          };
          for (let Q of g) {
            if (!C || C(Q)) w.push(G ? Q : Q.fullpath());
            if (Z && Q.isSymbolicLink()) Q.realpath().then((E) => E?.isUnknown() ? E.lstat() : E).then((E) => E?.shouldWalk(B, W) ? A(E, K) : K());
            else if (Q.shouldWalk(B, W)) A(Q, K);
            else K()
          }
        }, !0)
      },
      V = I;
    return new Promise((X, _) => {
      A(V, (F) => {
        if (F) return _(F);
        X(w)
      })
    })
  }
  walkSync(I = this.cwd, d = {}) {
    if (typeof I === "string") I = this.cwd.resolve(I);
    else if (!(I instanceof WI)) d = I, I = this.cwd;
    let {
      withFileTypes: G = !0,
      follow: Z = !1,
      filter: C,
      walkFilter: W
    } = d, w = [];
    if (!C || C(I)) w.push(G ? I : I.fullpath());
    let B = new Set([I]);
    for (let A of B) {
      let V = A.readdirSync();
      for (let X of V) {
        if (!C || C(X)) w.push(G ? X : X.fullpath());
        let _ = X;
        if (X.isSymbolicLink()) {
          if (!(Z && (_ = X.realpathSync()))) continue;
          if (_.isUnknown()) _.lstatSync()
        }
        if (_.shouldWalk(B, W)) B.add(_)
      }
    }
    return w
  } [Symbol.asyncIterator]() {
    return this.iterate()
  }
  iterate(I = this.cwd, d = {}) {
    if (typeof I === "string") I = this.cwd.resolve(I);
    else if (!(I instanceof WI)) d = I, I = this.cwd;
    return this.stream(I, d)[Symbol.asyncIterator]()
  } [Symbol.iterator]() {
    return this.iterateSync()
  }* iterateSync(I = this.cwd, d = {}) {
    if (typeof I === "string") I = this.cwd.resolve(I);
    else if (!(I instanceof WI)) d = I, I = this.cwd;
    let {
      withFileTypes: G = !0,
      follow: Z = !1,
      filter: C,
      walkFilter: W
    } = d;
    if (!C || C(I)) yield G ? I : I.fullpath();
    let w = new Set([I]);
    for (let B of w) {
      let A = B.readdirSync();
      for (let V of A) {
        if (!C || C(V)) yield G ? V : V.fullpath();
        let X = V;
        if (V.isSymbolicLink()) {
          if (!(Z && (X = V.realpathSync()))) continue;
          if (X.isUnknown()) X.lstatSync()
        }
        if (X.shouldWalk(w, W)) w.add(X)
      }
    }
  }
  stream(I = this.cwd, d = {}) {
    if (typeof I === "string") I = this.cwd.resolve(I);
    else if (!(I instanceof WI)) d = I, I = this.cwd;
    let {
      withFileTypes: G = !0,
      follow: Z = !1,
      filter: C,
      walkFilter: W
    } = d, w = new qg({
      objectMode: !0
    });
    if (!C || C(I)) w.write(G ? I : I.fullpath());
    let B = new Set,
      A = [I],
      V = 0,
      X = () => {
        let _ = !1;
        while (!_) {
          let F = A.shift();
          if (!F) {
            if (V === 0) w.end();
            return
          }
          V++, B.add(F);
          let g = (K, Q, E = !1) => {
              if (K) return w.emit("error", K);
              if (Z && !E) {
                let S = [];
                for (let P of Q)
                  if (P.isSymbolicLink()) S.push(P.realpath().then(($) => $?.isUnknown() ? $.lstat() : $));
                if (S.length) {
                  Promise.all(S).then(() => g(null, Q, !0));
                  return
                }
              }
              for (let S of Q)
                if (S && (!C || C(S))) {
                  if (!w.write(G ? S : S.fullpath())) _ = !0
                } V--;
              for (let S of Q) {
                let P = S.realpathCached() || S;
                if (P.shouldWalk(B, W)) A.push(P)
              }
              if (_ && !w.flowing) w.once("drain", X);
              else if (!J) X()
            },
            J = !0;
          F.readdirCB(g, !0), J = !1
        }
      };
    return X(), w
  }
  streamSync(I = this.cwd, d = {}) {
    if (typeof I === "string") I = this.cwd.resolve(I);
    else if (!(I instanceof WI)) d = I, I = this.cwd;
    let {
      withFileTypes: G = !0,
      follow: Z = !1,
      filter: C,
      walkFilter: W
    } = d, w = new qg({
      objectMode: !0
    }), B = new Set;
    if (!C || C(I)) w.write(G ? I : I.fullpath());
    let A = [I],
      V = 0,
      X = () => {
        let _ = !1;
        while (!_) {
          let F = A.shift();
          if (!F) {
            if (V === 0) w.end();
            return
          }
          V++, B.add(F);
          let g = F.readdirSync();
          for (let J of g)
            if (!C || C(J)) {
              if (!w.write(G ? J : J.fullpath())) _ = !0
            } V--;
          for (let J of g) {
            let K = J;
            if (J.isSymbolicLink()) {
              if (!(Z && (K = J.realpathSync()))) continue;
              if (K.isUnknown()) K.lstatSync()
            }
            if (K.shouldWalk(B, W)) A.push(K)
          }
        }
        if (_ && !w.flowing) w.once("drain", X)
      };
    return X(), w
  }
  chdir(I = this.cwd) {
    let d = this.cwd;
    this.cwd = typeof I === "string" ? this.cwd.resolve(I) : I, this.cwd[Bn1](d)
  }
}
// @from(Start 5802883, End 5803462)
class AS extends B31 {
  sep = "\\";
  constructor(I = process.cwd(), d = {}) {
    let {
      nocase: G = !0
    } = d;
    super(I, W31, "\\", {
      ...d,
      nocase: G
    });
    this.nocase = G;
    for (let Z = this.cwd; Z; Z = Z.parent) Z.nocase = this.nocase
  }
  parseRootPath(I) {
    return W31.parse(I).root.toUpperCase()
  }
  newRoot(I) {
    return new vk(this.rootPath, hw, void 0, this.roots, this.nocase, this.childrenCache(), {
      fs: I
    })
  }
  isAbsolute(I) {
    return I.startsWith("/") || I.startsWith("\\") || /^[a-z]:(\/|\\)/i.test(I)
  }
}
// @from(Start 5803463, End 5803893)
class VS extends B31 {
  sep = "/";
  constructor(I = process.cwd(), d = {}) {
    let {
      nocase: G = !1
    } = d;
    super(I, eJ4, "/", {
      ...d,
      nocase: G
    });
    this.nocase = G
  }
  parseRootPath(I) {
    return "/"
  }
  newRoot(I) {
    return new Ek(this.rootPath, hw, void 0, this.roots, this.nocase, this.childrenCache(), {
      fs: I
    })
  }
  isAbsolute(I) {
    return I.startsWith("/")
  }
}
// @from(Start 5803894, End 5804056)
class Mk extends VS {
  constructor(I = process.cwd(), d = {}) {
    let {
      nocase: G = !0
    } = d;
    super(I, {
      ...d,
      nocase: G
    })
  }
}
// @from(Start 5804061, End 5804105)
Jm9 = process.platform === "win32" ? vk : Ek
// @from(Start 5804109, End 5804190)
An1 = process.platform === "win32" ? AS : process.platform === "darwin" ? Mk : VS
// @from(Start 5804196, End 5804222)
HK4 = (I) => I.length >= 1
// @from(Start 5804226, End 5804252)
FK4 = (I) => I.length >= 1
// @from(Start 5804254, End 5807028)
class MQ {
  #I;
  #d;
  #W;
  length;
  #Z;
  #w;
  #z;
  #V;
  #Y;
  #B;
  #A = !0;
  constructor(I, d, G, Z) {
    if (!HK4(I)) throw new TypeError("empty pattern list");
    if (!FK4(d)) throw new TypeError("empty glob list");
    if (d.length !== I.length) throw new TypeError("mismatched pattern list and glob list lengths");
    if (this.length = I.length, G < 0 || G >= this.length) throw new TypeError("index out of range");
    if (this.#I = I, this.#d = d, this.#W = G, this.#Z = Z, this.#W === 0) {
      if (this.isUNC()) {
        let [C, W, w, B, ...A] = this.#I, [V, X, _, F, ...g] = this.#d;
        if (A[0] === "") A.shift(), g.shift();
        let J = [C, W, w, B, ""].join("/"),
          K = [V, X, _, F, ""].join("/");
        this.#I = [J, ...A], this.#d = [K, ...g], this.length = this.#I.length
      } else if (this.isDrive() || this.isAbsolute()) {
        let [C, ...W] = this.#I, [w, ...B] = this.#d;
        if (W[0] === "") W.shift(), B.shift();
        let A = C + "/",
          V = w + "/";
        this.#I = [A, ...W], this.#d = [V, ...B], this.length = this.#I.length
      }
    }
  }
  pattern() {
    return this.#I[this.#W]
  }
  isString() {
    return typeof this.#I[this.#W] === "string"
  }
  isGlobstar() {
    return this.#I[this.#W] === j8
  }
  isRegExp() {
    return this.#I[this.#W] instanceof RegExp
  }
  globString() {
    return this.#z = this.#z || (this.#W === 0 ? this.isAbsolute() ? this.#d[0] + this.#d.slice(1).join("/") : this.#d.join("/") : this.#d.slice(this.#W).join("/"))
  }
  hasMore() {
    return this.length > this.#W + 1
  }
  rest() {
    if (this.#w !== void 0) return this.#w;
    if (!this.hasMore()) return this.#w = null;
    return this.#w = new MQ(this.#I, this.#d, this.#W + 1, this.#Z), this.#w.#B = this.#B, this.#w.#Y = this.#Y, this.#w.#V = this.#V, this.#w
  }
  isUNC() {
    let I = this.#I;
    return this.#Y !== void 0 ? this.#Y : this.#Y = this.#Z === "win32" && this.#W === 0 && I[0] === "" && I[1] === "" && typeof I[2] === "string" && !!I[2] && typeof I[3] === "string" && !!I[3]
  }
  isDrive() {
    let I = this.#I;
    return this.#V !== void 0 ? this.#V : this.#V = this.#Z === "win32" && this.#W === 0 && this.length > 1 && typeof I[0] === "string" && /^[a-z]:$/i.test(I[0])
  }
  isAbsolute() {
    let I = this.#I;
    return this.#B !== void 0 ? this.#B : this.#B = I[0] === "" && I.length > 1 || this.isDrive() || this.isUNC()
  }
  root() {
    let I = this.#I[0];
    return typeof I === "string" && this.isAbsolute() && this.#W === 0 ? I : ""
  }
  checkFollowGlobstar() {
    return !(this.#W === 0 || !this.isGlobstar() || !this.#A)
  }
  markFollowGlobstar() {
    if (this.#W === 0 || !this.isGlobstar() || !this.#A) return !1;
    return this.#A = !1, !0
  }
}
// @from(Start 5807033, End 5807146)
gK4 = typeof process === "object" && process && typeof process.platform === "string" ? process.platform : "linux"
// @from(Start 5807148, End 5808874)
class XS {
  relative;
  relativeChildren;
  absolute;
  absoluteChildren;
  platform;
  mmopts;
  constructor(I, {
    nobrace: d,
    nocase: G,
    noext: Z,
    noglobstar: C,
    platform: W = gK4
  }) {
    this.relative = [], this.absolute = [], this.relativeChildren = [], this.absoluteChildren = [], this.platform = W, this.mmopts = {
      dot: !0,
      nobrace: d,
      nocase: G,
      noext: Z,
      noglobstar: C,
      optimizationLevel: 2,
      platform: W,
      nocomment: !0,
      nonegate: !0
    };
    for (let w of I) this.add(w)
  }
  add(I) {
    let d = new XZ(I, this.mmopts);
    for (let G = 0; G < d.set.length; G++) {
      let Z = d.set[G],
        C = d.globParts[G];
      if (!Z || !C) throw new Error("invalid pattern object");
      while (Z[0] === "." && C[0] === ".") Z.shift(), C.shift();
      let W = new MQ(Z, C, 0, this.platform),
        w = new XZ(W.globString(), this.mmopts),
        B = C[C.length - 1] === "**",
        A = W.isAbsolute();
      if (A) this.absolute.push(w);
      else this.relative.push(w);
      if (B)
        if (A) this.absoluteChildren.push(w);
        else this.relativeChildren.push(w)
    }
  }
  ignored(I) {
    let d = I.fullpath(),
      G = `${d}/`,
      Z = I.relative() || ".",
      C = `${Z}/`;
    for (let W of this.relative)
      if (W.match(Z) || W.match(C)) return !0;
    for (let W of this.absolute)
      if (W.match(d) || W.match(G)) return !0;
    return !1
  }
  childrenIgnored(I) {
    let d = I.fullpath() + "/",
      G = (I.relative() || ".") + "/";
    for (let Z of this.relativeChildren)
      if (Z.match(G)) return !0;
    for (let Z of this.absoluteChildren)
      if (Z.match(d)) return !0;
    return !1
  }
}
// @from(Start 5808875, End 5809258)
class A31 {
  store;
  constructor(I = new Map) {
    this.store = I
  }
  copy() {
    return new A31(new Map(this.store))
  }
  hasWalked(I, d) {
    return this.store.get(I.fullpath())?.has(d.globString())
  }
  storeWalked(I, d) {
    let G = I.fullpath(),
      Z = this.store.get(G);
    if (Z) Z.add(d.globString());
    else this.store.set(G, new Set([d.globString()]))
  }
}
// @from(Start 5809259, End 5809526)
class Vn1 {
  store = new Map;
  add(I, d, G) {
    let Z = (d ? 2 : 0) | (G ? 1 : 0),
      C = this.store.get(I);
    this.store.set(I, C === void 0 ? Z : Z & C)
  }
  entries() {
    return [...this.store.entries()].map(([I, d]) => [I, !!(d & 2), !!(d & 1)])
  }
}
// @from(Start 5809527, End 5810037)
class Xn1 {
  store = new Map;
  add(I, d) {
    if (!I.canReaddir()) return;
    let G = this.store.get(I);
    if (G) {
      if (!G.find((Z) => Z.globString() === d.globString())) G.push(d)
    } else this.store.set(I, [d])
  }
  get(I) {
    let d = this.store.get(I);
    if (!d) throw new Error("attempting to walk unknown path");
    return d
  }
  entries() {
    return this.keys().map((I) => [I, this.store.get(I)])
  }
  keys() {
    return [...this.store.keys()].filter((I) => I.canReaddir())
  }
}
// @from(Start 5810038, End 5813324)
class YS {
  hasWalkedCache;
  matches = new Vn1;
  subwalks = new Xn1;
  patterns;
  follow;
  dot;
  opts;
  constructor(I, d) {
    this.opts = I, this.follow = !!I.follow, this.dot = !!I.dot, this.hasWalkedCache = d ? d.copy() : new A31
  }
  processPatterns(I, d) {
    this.patterns = d;
    let G = d.map((Z) => [I, Z]);
    for (let [Z, C] of G) {
      this.hasWalkedCache.storeWalked(Z, C);
      let W = C.root(),
        w = C.isAbsolute() && this.opts.absolute !== !1;
      if (W) {
        Z = Z.resolve(W === "/" && this.opts.root !== void 0 ? this.opts.root : W);
        let X = C.rest();
        if (!X) {
          this.matches.add(Z, !0, !1);
          continue
        } else C = X
      }
      if (Z.isENOENT()) continue;
      let B, A, V = !1;
      while (typeof(B = C.pattern()) === "string" && (A = C.rest())) Z = Z.resolve(B), C = A, V = !0;
      if (B = C.pattern(), A = C.rest(), V) {
        if (this.hasWalkedCache.hasWalked(Z, C)) continue;
        this.hasWalkedCache.storeWalked(Z, C)
      }
      if (typeof B === "string") {
        let X = B === ".." || B === "" || B === ".";
        this.matches.add(Z.resolve(B), w, X);
        continue
      } else if (B === j8) {
        if (!Z.isSymbolicLink() || this.follow || C.checkFollowGlobstar()) this.subwalks.add(Z, C);
        let X = A?.pattern(),
          _ = A?.rest();
        if (!A || (X === "" || X === ".") && !_) this.matches.add(Z, w, X === "" || X === ".");
        else if (X === "..") {
          let F = Z.parent || Z;
          if (!_) this.matches.add(F, w, !0);
          else if (!this.hasWalkedCache.hasWalked(F, _)) this.subwalks.add(F, _)
        }
      } else if (B instanceof RegExp) this.subwalks.add(Z, C)
    }
    return this
  }
  subwalkTargets() {
    return this.subwalks.keys()
  }
  child() {
    return new YS(this.opts, this.hasWalkedCache)
  }
  filterEntries(I, d) {
    let G = this.subwalks.get(I),
      Z = this.child();
    for (let C of d)
      for (let W of G) {
        let w = W.isAbsolute(),
          B = W.pattern(),
          A = W.rest();
        if (B === j8) Z.testGlobstar(C, W, A, w);
        else if (B instanceof RegExp) Z.testRegExp(C, B, A, w);
        else Z.testString(C, B, A, w)
      }
    return Z
  }
  testGlobstar(I, d, G, Z) {
    if (this.dot || !I.name.startsWith(".")) {
      if (!d.hasMore()) this.matches.add(I, Z, !1);
      if (I.canReaddir()) {
        if (this.follow || !I.isSymbolicLink()) this.subwalks.add(I, d);
        else if (I.isSymbolicLink()) {
          if (G && d.checkFollowGlobstar()) this.subwalks.add(I, G);
          else if (d.markFollowGlobstar()) this.subwalks.add(I, d)
        }
      }
    }
    if (G) {
      let C = G.pattern();
      if (typeof C === "string" && C !== ".." && C !== "" && C !== ".") this.testString(I, C, G.rest(), Z);
      else if (C === "..") {
        let W = I.parent || I;
        this.subwalks.add(W, G)
      } else if (C instanceof RegExp) this.testRegExp(I, C, G.rest(), Z)
    }
  }
  testRegExp(I, d, G, Z) {
    if (!d.test(I.name)) return;
    if (!G) this.matches.add(I, Z, !1);
    else this.subwalks.add(I, G)
  }
  testString(I, d, G, Z) {
    if (!I.isNamed(d)) return;
    if (!G) this.matches.add(I, Z, !1);
    else this.subwalks.add(I, G)
  }
}
// @from(Start 5813329, End 5813421)
JK4 = (I, d) => typeof I === "string" ? new XS([I], d) : Array.isArray(I) ? new XS(I, d) : I
// @from(Start 5813423, End 5819001)
class V31 {
  path;
  patterns;
  opts;
  seen = new Set;
  paused = !1;
  aborted = !1;
  #I = [];
  #d;
  #W;
  signal;
  maxDepth;
  includeChildMatches;
  constructor(I, d, G) {
    if (this.patterns = I, this.path = d, this.opts = G, this.#W = !G.posix && G.platform === "win32" ? "\\" : "/", this.includeChildMatches = G.includeChildMatches !== !1, G.ignore || !this.includeChildMatches) {
      if (this.#d = JK4(G.ignore ?? [], G), !this.includeChildMatches && typeof this.#d.add !== "function") throw new Error("cannot ignore child matches, ignore lacks add() method.")
    }
    if (this.maxDepth = G.maxDepth || 1 / 0, G.signal) this.signal = G.signal, this.signal.addEventListener("abort", () => {
      this.#I.length = 0
    })
  }
  #Z(I) {
    return this.seen.has(I) || !!this.#d?.ignored?.(I)
  }
  #w(I) {
    return !!this.#d?.childrenIgnored?.(I)
  }
  pause() {
    this.paused = !0
  }
  resume() {
    if (this.signal?.aborted) return;
    this.paused = !1;
    let I = void 0;
    while (!this.paused && (I = this.#I.shift())) I()
  }
  onResume(I) {
    if (this.signal?.aborted) return;
    if (!this.paused) I();
    else this.#I.push(I)
  }
  async matchCheck(I, d) {
    if (d && this.opts.nodir) return;
    let G;
    if (this.opts.realpath) {
      if (G = I.realpathCached() || await I.realpath(), !G) return;
      I = G
    }
    let C = I.isUnknown() || this.opts.stat ? await I.lstat() : I;
    if (this.opts.follow && this.opts.nodir && C?.isSymbolicLink()) {
      let W = await C.realpath();
      if (W && (W.isUnknown() || this.opts.stat)) await W.lstat()
    }
    return this.matchCheckTest(C, d)
  }
  matchCheckTest(I, d) {
    return I && (this.maxDepth === 1 / 0 || I.depth() <= this.maxDepth) && (!d || I.canReaddir()) && (!this.opts.nodir || !I.isDirectory()) && (!this.opts.nodir || !this.opts.follow || !I.isSymbolicLink() || !I.realpathCached()?.isDirectory()) && !this.#Z(I) ? I : void 0
  }
  matchCheckSync(I, d) {
    if (d && this.opts.nodir) return;
    let G;
    if (this.opts.realpath) {
      if (G = I.realpathCached() || I.realpathSync(), !G) return;
      I = G
    }
    let C = I.isUnknown() || this.opts.stat ? I.lstatSync() : I;
    if (this.opts.follow && this.opts.nodir && C?.isSymbolicLink()) {
      let W = C.realpathSync();
      if (W && (W?.isUnknown() || this.opts.stat)) W.lstatSync()
    }
    return this.matchCheckTest(C, d)
  }
  matchFinish(I, d) {
    if (this.#Z(I)) return;
    if (!this.includeChildMatches && this.#d?.add) {
      let C = `${I.relativePosix()}/**`;
      this.#d.add(C)
    }
    let G = this.opts.absolute === void 0 ? d : this.opts.absolute;
    this.seen.add(I);
    let Z = this.opts.mark && I.isDirectory() ? this.#W : "";
    if (this.opts.withFileTypes) this.matchEmit(I);
    else if (G) {
      let C = this.opts.posix ? I.fullpathPosix() : I.fullpath();
      this.matchEmit(C + Z)
    } else {
      let C = this.opts.posix ? I.relativePosix() : I.relative(),
        W = this.opts.dotRelative && !C.startsWith(".." + this.#W) ? "." + this.#W : "";
      this.matchEmit(!C ? "." + Z : W + C + Z)
    }
  }
  async match(I, d, G) {
    let Z = await this.matchCheck(I, G);
    if (Z) this.matchFinish(Z, d)
  }
  matchSync(I, d, G) {
    let Z = this.matchCheckSync(I, G);
    if (Z) this.matchFinish(Z, d)
  }
  walkCB(I, d, G) {
    if (this.signal?.aborted) G();
    this.walkCB2(I, d, new YS(this.opts), G)
  }
  walkCB2(I, d, G, Z) {
    if (this.#w(I)) return Z();
    if (this.signal?.aborted) Z();
    if (this.paused) {
      this.onResume(() => this.walkCB2(I, d, G, Z));
      return
    }
    G.processPatterns(I, d);
    let C = 1,
      W = () => {
        if (--C === 0) Z()
      };
    for (let [w, B, A] of G.matches.entries()) {
      if (this.#Z(w)) continue;
      C++, this.match(w, B, A).then(() => W())
    }
    for (let w of G.subwalkTargets()) {
      if (this.maxDepth !== 1 / 0 && w.depth() >= this.maxDepth) continue;
      C++;
      let B = w.readdirCached();
      if (w.calledReaddir()) this.walkCB3(w, B, G, W);
      else w.readdirCB((A, V) => this.walkCB3(w, V, G, W), !0)
    }
    W()
  }
  walkCB3(I, d, G, Z) {
    G = G.filterEntries(I, d);
    let C = 1,
      W = () => {
        if (--C === 0) Z()
      };
    for (let [w, B, A] of G.matches.entries()) {
      if (this.#Z(w)) continue;
      C++, this.match(w, B, A).then(() => W())
    }
    for (let [w, B] of G.subwalks.entries()) C++, this.walkCB2(w, B, G.child(), W);
    W()
  }
  walkCBSync(I, d, G) {
    if (this.signal?.aborted) G();
    this.walkCB2Sync(I, d, new YS(this.opts), G)
  }
  walkCB2Sync(I, d, G, Z) {
    if (this.#w(I)) return Z();
    if (this.signal?.aborted) Z();
    if (this.paused) {
      this.onResume(() => this.walkCB2Sync(I, d, G, Z));
      return
    }
    G.processPatterns(I, d);
    let C = 1,
      W = () => {
        if (--C === 0) Z()
      };
    for (let [w, B, A] of G.matches.entries()) {
      if (this.#Z(w)) continue;
      this.matchSync(w, B, A)
    }
    for (let w of G.subwalkTargets()) {
      if (this.maxDepth !== 1 / 0 && w.depth() >= this.maxDepth) continue;
      C++;
      let B = w.readdirSync();
      this.walkCB3Sync(w, B, G, W)
    }
    W()
  }
  walkCB3Sync(I, d, G, Z) {
    G = G.filterEntries(I, d);
    let C = 1,
      W = () => {
        if (--C === 0) Z()
      };
    for (let [w, B, A] of G.matches.entries()) {
      if (this.#Z(w)) continue;
      this.matchSync(w, B, A)
    }
    for (let [w, B] of G.subwalks.entries()) C++, this.walkCB2Sync(w, B, G.child(), W);
    W()
  }
}
// @from(Start 5819002, End 5819750)
class Sk extends V31 {
  matches = new Set;
  constructor(I, d, G) {
    super(I, d, G)
  }
  matchEmit(I) {
    this.matches.add(I)
  }
  async walk() {
    if (this.signal?.aborted) throw this.signal.reason;
    if (this.path.isUnknown()) await this.path.lstat();
    return await new Promise((I, d) => {
      this.walkCB(this.path, this.patterns, () => {
        if (this.signal?.aborted) d(this.signal.reason);
        else I(this.matches)
      })
    }), this.matches
  }
  walkSync() {
    if (this.signal?.aborted) throw this.signal.reason;
    if (this.path.isUnknown()) this.path.lstatSync();
    return this.walkCBSync(this.path, this.patterns, () => {
      if (this.signal?.aborted) throw this.signal.reason
    }), this.matches
  }
}
// @from(Start 5819751, End 5820515)
class Lk extends V31 {
  results;
  constructor(I, d, G) {
    super(I, d, G);
    this.results = new qg({
      signal: this.signal,
      objectMode: !0
    }), this.results.on("drain", () => this.resume()), this.results.on("resume", () => this.resume())
  }
  matchEmit(I) {
    if (this.results.write(I), !this.results.flowing) this.pause()
  }
  stream() {
    let I = this.path;
    if (I.isUnknown()) I.lstat().then(() => {
      this.walkCB(I, this.patterns, () => this.results.end())
    });
    else this.walkCB(I, this.patterns, () => this.results.end());
    return this.results
  }
  streamSync() {
    if (this.path.isUnknown()) this.path.lstatSync();
    return this.walkCBSync(this.path, this.patterns, () => this.results.end()), this.results
  }
}
// @from(Start 5820520, End 5820633)
NK4 = typeof process === "object" && process && typeof process.platform === "string" ? process.platform : "linux"
// @from(Start 5820635, End 5825162)
class jw {
  absolute;
  cwd;
  root;
  dot;
  dotRelative;
  follow;
  ignore;
  magicalBraces;
  mark;
  matchBase;
  maxDepth;
  nobrace;
  nocase;
  nodir;
  noext;
  noglobstar;
  pattern;
  platform;
  realpath;
  scurry;
  stat;
  signal;
  windowsPathsNoEscape;
  withFileTypes;
  includeChildMatches;
  opts;
  patterns;
  constructor(I, d) {
    if (!d) throw new TypeError("glob options required");
    if (this.withFileTypes = !!d.withFileTypes, this.signal = d.signal, this.follow = !!d.follow, this.dot = !!d.dot, this.dotRelative = !!d.dotRelative, this.nodir = !!d.nodir, this.mark = !!d.mark, !d.cwd) this.cwd = "";
    else if (d.cwd instanceof URL || d.cwd.startsWith("file://")) d.cwd = KK4(d.cwd);
    if (this.cwd = d.cwd || "", this.root = d.root, this.magicalBraces = !!d.magicalBraces, this.nobrace = !!d.nobrace, this.noext = !!d.noext, this.realpath = !!d.realpath, this.absolute = d.absolute, this.includeChildMatches = d.includeChildMatches !== !1, this.noglobstar = !!d.noglobstar, this.matchBase = !!d.matchBase, this.maxDepth = typeof d.maxDepth === "number" ? d.maxDepth : 1 / 0, this.stat = !!d.stat, this.ignore = d.ignore, this.withFileTypes && this.absolute !== void 0) throw new Error("cannot set absolute and withFileTypes:true");
    if (typeof I === "string") I = [I];
    if (this.windowsPathsNoEscape = !!d.windowsPathsNoEscape || d.allowWindowsEscape === !1, this.windowsPathsNoEscape) I = I.map((B) => B.replace(/\\/g, "/"));
    if (this.matchBase) {
      if (d.noglobstar) throw new TypeError("base matching requires globstar");
      I = I.map((B) => B.includes("/") ? B : `./**/${B}`)
    }
    if (this.pattern = I, this.platform = d.platform || NK4, this.opts = {
        ...d,
        platform: this.platform
      }, d.scurry) {
      if (this.scurry = d.scurry, d.nocase !== void 0 && d.nocase !== d.scurry.nocase) throw new Error("nocase option contradicts provided scurry option")
    } else {
      let B = d.platform === "win32" ? AS : d.platform === "darwin" ? Mk : d.platform ? VS : An1;
      this.scurry = new B(this.cwd, {
        nocase: d.nocase,
        fs: d.fs
      })
    }
    this.nocase = this.scurry.nocase;
    let G = this.platform === "darwin" || this.platform === "win32",
      Z = {
        ...d,
        dot: this.dot,
        matchBase: this.matchBase,
        nobrace: this.nobrace,
        nocase: this.nocase,
        nocaseMagicOnly: G,
        nocomment: !0,
        noext: this.noext,
        nonegate: !0,
        optimizationLevel: 2,
        platform: this.platform,
        windowsPathsNoEscape: this.windowsPathsNoEscape,
        debug: !!this.opts.debug
      },
      C = this.pattern.map((B) => new XZ(B, Z)),
      [W, w] = C.reduce((B, A) => {
        return B[0].push(...A.set), B[1].push(...A.globParts), B
      }, [
        [],
        []
      ]);
    this.patterns = W.map((B, A) => {
      let V = w[A];
      if (!V) throw new Error("invalid pattern object");
      return new MQ(B, V, 0, this.platform)
    })
  }
  async walk() {
    return [...await new Sk(this.patterns, this.scurry.cwd, {
      ...this.opts,
      maxDepth: this.maxDepth !== 1 / 0 ? this.maxDepth + this.scurry.cwd.depth() : 1 / 0,
      platform: this.platform,
      nocase: this.nocase,
      includeChildMatches: this.includeChildMatches
    }).walk()]
  }
  walkSync() {
    return [...new Sk(this.patterns, this.scurry.cwd, {
      ...this.opts,
      maxDepth: this.maxDepth !== 1 / 0 ? this.maxDepth + this.scurry.cwd.depth() : 1 / 0,
      platform: this.platform,
      nocase: this.nocase,
      includeChildMatches: this.includeChildMatches
    }).walkSync()]
  }
  stream() {
    return new Lk(this.patterns, this.scurry.cwd, {
      ...this.opts,
      maxDepth: this.maxDepth !== 1 / 0 ? this.maxDepth + this.scurry.cwd.depth() : 1 / 0,
      platform: this.platform,
      nocase: this.nocase,
      includeChildMatches: this.includeChildMatches
    }).stream()
  }
  streamSync() {
    return new Lk(this.patterns, this.scurry.cwd, {
      ...this.opts,
      maxDepth: this.maxDepth !== 1 / 0 ? this.maxDepth + this.scurry.cwd.depth() : 1 / 0,
      platform: this.platform,
      nocase: this.nocase,
      includeChildMatches: this.includeChildMatches
    }).streamSync()
  }
  iterateSync() {
    return this.streamSync()[Symbol.iterator]()
  } [Symbol.iterator]() {
    return this.iterateSync()
  }
  iterate() {
    return this.stream()[Symbol.asyncIterator]()
  } [Symbol.asyncIterator]() {
    return this.iterate()
  }
}
// @from(Start 5825167, End 5825300)
X31 = (I, d = {}) => {
  if (!Array.isArray(I)) I = [I];
  for (let G of I)
    if (new XZ(G, d).hasMagic()) return !0;
  return !1
}
// @from(Start 5825303, End 5825364)
function Pk(I, d = {}) {
  return new jw(I, d).streamSync()
}
// @from(Start 5825366, End 5825424)
function _n1(I, d = {}) {
  return new jw(I, d).stream()
}
// @from(Start 5825426, End 5825486)
function Dn1(I, d = {}) {
  return new jw(I, d).walkSync()
}
// @from(Start 5825487, End 5825549)
async function Yn1(I, d = {}) {
  return new jw(I, d).walk()
}
// @from(Start 5825551, End 5825613)
function $k(I, d = {}) {
  return new jw(I, d).iterateSync()
}
// @from(Start 5825615, End 5825674)
function Hn1(I, d = {}) {
  return new jw(I, d).iterate()
}
// @from(Start 5825679, End 5825687)
zK4 = Pk
// @from(Start 5825691, End 5825735)
QK4 = Object.assign(_n1, {
    sync: Pk
  })
// @from(Start 5825739, End 5825747)
fK4 = $k
// @from(Start 5825751, End 5825795)
qK4 = Object.assign(Hn1, {
    sync: $k
  })
// @from(Start 5825799, End 5825862)
RK4 = Object.assign(Dn1, {
    stream: Pk,
    iterate: $k
  })
// @from(Start 5825866, End 5826181)
yk = Object.assign(Yn1, {
    glob: Yn1,
    globSync: Dn1,
    sync: RK4,
    globStream: _n1,
    stream: QK4,
    globStreamSync: Pk,
    streamSync: zK4,
    globIterate: Hn1,
    iterate: qK4,
    globIterateSync: $k,
    iterateSync: fK4,
    Glob: jw,
    hasMagic: X31,
    escape: qQ,
    unescape: yC
  })
// @from(Start 5826241, End 5826259)
D40 = J1(Y40(), 1)
// @from(Start 5826362, End 5826379)
H40 = J1(qS(), 1)
// @from(Start 5826436, End 5826462)
tl4 = sl4(import.meta.url)
// @from(Start 5826466, End 5826485)
Ib4 = ol4(tl4, ".")
// @from(Start 5826489, End 5826523)
wI = H40.default("claude:ripgrep")
// @from(Start 5826527, End 5826566)
F40 = !!process.env.USE_BUILTIN_RIPGREP
// @from(Start 5826645, End 5827077)
ES = a2(() => {
  let {
    cmd: I
  } = D40.findActualExecutable("rg", []);
  if (wI(`ripgrep initially resolved as: ${I}`), I !== "rg" && !F40) return I;
  else {
    let d = Kx.resolve(Ib4, "vendor", "ripgrep");
    if (process.platform === "win32") return Kx.resolve(d, "x64-win32", "rg.exe");
    let G = Kx.resolve(d, `${process.arch}-${process.platform}`, "rg");
    return wI("internal ripgrep resolved as: %s", G), G
  }
})
// @from(Start 5827079, End 5827502)
async function MS(I, d, G) {
  await db4();
  let Z = ES();
  return wI("ripgrep called: %s %o", Z, d, I), new Promise((C) => {
    el4(ES(), [...I, d], {
      maxBuffer: 1e6,
      signal: G,
      timeout: 1e4
    }, (W, w) => {
      if (W) {
        if (W.code !== 1) wI("ripgrep error: %o", W), X0(W);
        C([])
      } else wI("ripgrep succeeded with %s", w), C(w.trim().split(`
`).filter(Boolean))
    })
  })
}
// @from(Start 5827503, End 5827721)
async function g40(I, d, G) {
  try {
    return wI("listAllContentFiles called: %s", I), (await MS(["-l", ".", I], I, d)).slice(0, G)
  } catch (Z) {
    return wI("listAllContentFiles failed: %o", Z), X0(Z), []
  }
}
// @from(Start 5827726, End 5827734)
_40 = !1
// @from(Start 5827736, End 5828619)
async function db4() {
  if (process.platform !== "darwin" || _40) return;
  if (_40 = !0, wI("checking if ripgrep is already signed"), !(await E5("codesign", ["-vv", "-d", ES()], void 0, void 0, !1)).stdout.split(`
`).find((G) => G.includes("linker-signed"))) {
    wI("seems to be already signed");
    return
  }
  try {
    wI("signing ripgrep");
    let G = await E5("codesign", ["--sign", "-", "--force", "--preserve-metadata=entitlements,requirements,flags,runtime", ES()]);
    if (G.code !== 0) wI("failed to sign ripgrep: %o", G), X0(`Failed to sign ripgrep: ${G.stdout} ${G.stderr}`);
    wI("removing quarantine");
    let Z = await E5("xattr", ["-d", "com.apple.quarantine", ES()]);
    if (Z.code !== 0) wI("failed to remove quarantine: %o", Z), X0(`Failed to remove quarantine: ${Z.stdout} ${Z.stderr}`)
  } catch (G) {
    wI("failed during sign: %o", G), X0(G)
  }
}
// @from(Start 5828620, End 5828987)
async function v40(I, d, {
  limit: G,
  offset: Z
}, C) {
  let w = (await yk([I], {
      cwd: d,
      nocase: !0,
      nodir: !0,
      signal: C,
      stat: !0,
      withFileTypes: !0
    })).sort((A, V) => (A.mtimeMs ?? 0) - (V.mtimeMs ?? 0)),
    B = w.length > Z + G;
  return {
    files: w.slice(Z, Z + G).map((A) => A.fullpath()),
    truncated: B
  }
}
// @from(Start 5828989, End 5829312)
function x81(I, d) {
  if (I === ".") return !0;
  if (I.startsWith("~")) return !1;
  if (I.includes("\x00") || d.includes("\x00")) return !1;
  let G = J40(I),
    Z = J40(d);
  G = G.endsWith(Nx) ? G : G + Nx, Z = Z.endsWith(Nx) ? Z : Z + Nx;
  let C = K40(Q40(), Z, G),
    W = K40(Q40(), Z);
  return C.startsWith(W)
}
// @from(Start 5829314, End 5829560)
function E40(I, d = 0, G) {
  let Z = dd(I),
    W = Gb4(I, Z).split(/\r?\n/),
    w = G !== void 0 && W.length - d > G ? W.slice(d, d + G) : W.slice(d);
  return {
    content: w.join(`
`),
    lineCount: w.length,
    totalLines: W.length
  }
}
// @from(Start 5829562, End 5829702)
function Xf(I, d, G, Z) {
  let C = d;
  if (Z === "CRLF") C = d.split(`
`).join(`\r
`);
  Zb4(I, C, {
    encoding: G,
    flush: !0
  })
}
// @from(Start 5829707, End 5829801)
Xb4 = new ZV({
  fetchMethod: (I) => Yb4(I),
  ttl: 300000,
  ttlAutopurge: !1,
  max: 1000
})
// @from(Start 5829803, End 5829854)
async function M40(I) {
  return Xb4.fetch(SS(I))
}
// @from(Start 5829855, End 5830088)
async function Yb4(I) {
  let d = new AbortController;
  setTimeout(() => {
    d.abort()
  }, 1000);
  let G = await g40(I, d.signal, 15),
    Z = 0;
  for (let C of G)
    if (Sg(C) === "CRLF") Z++;
  return Z > 3 ? "CRLF" : "LF"
}
// @from(Start 5830090, End 5830187)
function S40(I, d, G) {
  if (I.has(d)) return I.get(d);
  let Z = G();
  return I.set(d, Z), Z
}
// @from(Start 5830192, End 5830286)
_b4 = new ZV({
  fetchMethod: (I) => L40(I),
  ttl: 300000,
  ttlAutopurge: !1,
  max: 1000
})
// @from(Start 5830289, End 5830359)
function dd(I) {
  let d = SS(I);
  return S40(_b4, d, () => L40(d))
}
// @from(Start 5830361, End 5830844)
function L40(I) {
  let G = Buffer.alloc(4096),
    Z = void 0;
  try {
    Z = f40(I, "r");
    let C = q40(Z, G, 0, 4096, 0);
    if (C >= 2) {
      if (G[0] === 255 && G[1] === 254) return "utf16le"
    }
    if (C >= 3 && G[0] === 239 && G[1] === 187 && G[2] === 191) return "utf8";
    return G.slice(0, C).toString("utf8").length > 0 ? "utf8" : "ascii"
  } catch (C) {
    return X0(`Error detecting encoding for file ${I}: ${C}`), "utf8"
  } finally {
    if (Z) R40(Z)
  }
}
// @from(Start 5830849, End 5830943)
Db4 = new ZV({
  fetchMethod: (I) => y40(I),
  ttl: 300000,
  ttlAutopurge: !1,
  max: 1000
})
// @from(Start 5830946, End 5831016)
function Sg(I) {
  let d = SS(I);
  return S40(Db4, d, () => y40(d))
}
// @from(Start 5831018, End 5831467)
function y40(I, d = "utf8") {
  try {
    let G = Buffer.alloc(4096),
      Z = f40(I, "r"),
      C = q40(Z, G, 0, 4096, 0);
    R40(Z);
    let W = G.toString(d, 0, C),
      w = 0,
      B = 0;
    for (let A = 0; A < W.length; A++)
      if (W[A] === `
`)
        if (A > 0 && W[A - 1] === "\r") w++;
        else B++;
    return w > B ? "CRLF" : "LF"
  } catch (G) {
    return X0(`Error detecting line endings for file ${I}: ${G}`), "LF"
  }
}
// @from(Start 5831469, End 5831727)
function c81(I) {
  let d = U40(I) ? I : SS(R0(), I);
  if (d.endsWith(" AM.png")) return d.replace(" AM.png", `${String.fromCharCode(8239)}AM.png`);
  if (d.endsWith(" PM.png")) return d.replace(" PM.png", `${String.fromCharCode(8239)}PM.png`);
  return d
}
// @from(Start 5831729, End 5831795)
function p81(I) {
  return I ? U40(I) ? I : SS(R0(), I) : void 0
}
// @from(Start 5831797, End 5831925)
function P40(I) {
  let d = p81(I),
    G = d ? Bb4(R0(), d) : void 0;
  return {
    absolutePath: d,
    relativePath: G
  }
}
// @from(Start 5831927, End 5832218)
function Yf(I) {
  try {
    let d = Ab4(I),
      G = N40(I, z40(I));
    if (!Cb4(d)) return;
    let W = Wb4(d).filter((w) => N40(w, z40(w)) === G && Vb4(d, w) !== I)[0];
    if (W) return W;
    return
  } catch (d) {
    X0(`Error finding similar file for ${I}: ${d}`);
    return
  }
}
// @from(Start 5832220, End 5832469)
function _f({
  content: I,
  startLine: d
}) {
  if (!I) return "";
  return I.split(/\r?\n/).map((G, Z) => {
    let C = Z + d,
      W = String(C);
    if (W.length >= 6) return `${W}	${G}`;
    return `${W.padStart(6," ")}	${G}`
  }).join(`
`)
}
// @from(Start 5832471, End 5832651)
function $40(I) {
  try {
    let d = wb4(I),
      G = d.readSync();
    return d.closeSync(), G === null
  } catch (d) {
    return X0(`Error checking directory: ${d}`), !1
  }
}
// @from(Start 5832653, End 5832784)
function zQ() {
  let I = I5();
  if (!I.hasCompletedProjectOnboarding) o9({
    ...I,
    hasCompletedProjectOnboarding: !0
  })
}
// @from(Start 5832786, End 5833113)
function Jb4() {
  let I = q2();
  p4({
    ...I,
    lastReleaseNotesSeen: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://docs.anthropic.com/s/claude-code",
      VERSION: "0.2.9"
    }.VERSION
  })
}
// @from(Start 5833115, End 5836394)
function i81({
  workspaceDir: I
}) {
  let G = !I5().hasCompletedProjectOnboarding,
    C = q2().lastReleaseNotesSeen,
    W = [];
  if (!C || u40.gt({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://docs.anthropic.com/s/claude-code",
      VERSION: "0.2.9"
    }.VERSION, C)) W = Xk[{
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://docs.anthropic.com/s/claude-code",
    VERSION: "0.2.9"
  }.VERSION] || [];
  let w = W.length > 0;
  if (T2.useEffect(() => {
      if (w && !G) Jb4()
    }, [w, G]), !G && !w) return null;
  let B = Hb4(Fb4(I, "CLAUDE.md")),
    A = $40(I),
    V = !B && !A,
    X = NQ.isEnabled && !q2().shiftEnterKeyBindingInstalled,
    _ = r1();
  return T2.createElement(p, {
    flexDirection: "column",
    gap: 1,
    padding: 1,
    paddingBottom: 0
  }, G && T2.createElement(T2.Fragment, null, T2.createElement(u, {
    color: _.secondaryText
  }, "Tips for getting started:"), T2.createElement(b8, null, (() => {
    let F = [];
    if (A) F.push(T2.createElement(b8.Item, {
      key: "workspace"
    }, T2.createElement(u, {
      color: _.secondaryText
    }, "Ask Claude to create a new app or clone a repository.")));
    if (V) F.push(T2.createElement(b8.Item, {
      key: "claudemd"
    }, T2.createElement(u, {
      color: _.secondaryText
    }, "Run ", T2.createElement(u, {
      color: _.text
    }, "/init"), " to create a CLAUDE.md file with instructions for Claude.")));
    if (X) F.push(T2.createElement(b8.Item, {
      key: "terminal"
    }, T2.createElement(u, {
      color: _.secondaryText
    }, "Run ", T2.createElement(u, {
      color: _.text
    }, "/terminal-setup"), T2.createElement(u, {
      bold: !1
    }, " to set up terminal integration"))));
    return F.push(T2.createElement(b8.Item, {
      key: "questions"
    }, T2.createElement(u, {
      color: _.secondaryText
    }, "Ask Claude questions about your codebase."))), F.push(T2.createElement(b8.Item, {
      key: "changes"
    }, T2.createElement(u, {
      color: _.secondaryText
    }, "Ask Claude to implement changes to your codebase."))), F
  })())), !G && w && T2.createElement(p, {
    borderColor: r1().secondaryBorder,
    flexDirection: "column",
    marginRight: 1
  }, T2.createElement(p, {
    flexDirection: "column",
    gap: 0
  }, T2.createElement(p, {
    marginBottom: 1
  }, T2.createElement(u, null, "\uD83C\uDD95 What's new in v", {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://docs.anthropic.com/s/claude-code",
    VERSION: "0.2.9"
  }.VERSION, ":")), T2.createElement(p, {
    flexDirection: "column",
    marginLeft: 1
  }, W.map((F, g) => T2.createElement(u, {
    key: g,
    color: r1().secondaryText
  }, "• ", F))))), I === gb4() && T2.createElement(u, {
    color: r1().warning
  }, "Note: You have launched ", T2.createElement(u, {
    bold: !0
  }, "claude"), " in your home directory. For the best experience, launch it in a project directory instead."))
}
// @from(Start 5836399, End 5836415)
Q_ = J1(u1(), 1)
// @from(Start 5836421, End 5836437)
Df = J1(u1(), 1)
// @from(Start 5836443, End 5836459)
LS = J1(u1(), 1)
// @from(Start 5836462, End 5836921)
function T40({
  isFocused: I,
  isSelected: d,
  children: G
}) {
  let {
    styles: Z
  } = Q9("Select");
  return LS.default.createElement(p, {
    ...Z.option({
      isFocused: I
    })
  }, I && LS.default.createElement(u, {
    ...Z.focusIndicator()
  }, I9.pointer), LS.default.createElement(u, {
    ...Z.label({
      isFocused: I,
      isSelected: d
    })
  }, G), d && LS.default.createElement(u, {
    ...Z.selectedIndicator()
  }, I9.tick))
}
// @from(Start 5836926, End 5836942)
Gd = J1(u1(), 1)
// @from(Start 5837000, End 5837325)
class zx extends Map {
  first;
  constructor(I) {
    let d = [],
      G, Z, C = 0;
    for (let W of I) {
      let w = {
        ...W,
        previous: Z,
        next: void 0,
        index: C
      };
      if (Z) Z.next = w;
      G ||= w, d.push([W.value, w]), C++, Z = w
    }
    super(d);
    this.first = G
  }
}