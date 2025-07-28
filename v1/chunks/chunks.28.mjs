
// @from(Start 3191346, End 3192294)
Kc0 = Y((KG3, Jc0) => {
  var {
    defineProperty: li,
    getOwnPropertyDescriptor: CN5,
    getOwnPropertyNames: WN5
  } = Object, wN5 = Object.prototype.hasOwnProperty, BN5 = (I, d) => li(I, "name", {
    value: d,
    configurable: !0
  }), AN5 = (I, d) => {
    for (var G in d) li(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, VN5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of WN5(d))
        if (!wN5.call(I, C) && C !== G) li(I, C, {
          get: () => d[C],
          enumerable: !(Z = CN5(d, C)) || Z.enumerable
        })
    }
    return I
  }, XN5 = (I) => VN5(li({}, "__esModule", {
    value: !0
  }), I), gc0 = {};
  AN5(gc0, {
    isArrayBuffer: () => YN5
  });
  Jc0.exports = XN5(gc0);
  var YN5 = BN5((I) => typeof ArrayBuffer === "function" && I instanceof ArrayBuffer || Object.prototype.toString.call(I) === "[object ArrayBuffer]", "isArrayBuffer")
})
// @from(Start 3192300, End 3193643)
Vq = Y((NG3, Qc0) => {
  var {
    defineProperty: bi,
    getOwnPropertyDescriptor: _N5,
    getOwnPropertyNames: DN5
  } = Object, HN5 = Object.prototype.hasOwnProperty, Nc0 = (I, d) => bi(I, "name", {
    value: d,
    configurable: !0
  }), FN5 = (I, d) => {
    for (var G in d) bi(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, gN5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of DN5(d))
        if (!HN5.call(I, C) && C !== G) bi(I, C, {
          get: () => d[C],
          enumerable: !(Z = _N5(d, C)) || Z.enumerable
        })
    }
    return I
  }, JN5 = (I) => gN5(bi({}, "__esModule", {
    value: !0
  }), I), zc0 = {};
  FN5(zc0, {
    fromArrayBuffer: () => NN5,
    fromString: () => zN5
  });
  Qc0.exports = JN5(zc0);
  var KN5 = Kc0(),
    vV1 = B1("buffer"),
    NN5 = Nc0((I, d = 0, G = I.byteLength - d) => {
      if (!KN5.isArrayBuffer(I)) throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof I} (${I})`);
      return vV1.Buffer.from(I, d, G)
    }, "fromArrayBuffer"),
    zN5 = Nc0((I, d) => {
      if (typeof I !== "string") throw new TypeError(`The "input" argument must be of type string. Received type ${typeof I} (${I})`);
      return d ? vV1.Buffer.from(I, d) : vV1.Buffer.from(I)
    }, "fromString")
})
// @from(Start 3193649, End 3194139)
Rc0 = Y((fc0) => {
  Object.defineProperty(fc0, "__esModule", {
    value: !0
  });
  fc0.fromBase64 = void 0;
  var QN5 = Vq(),
    fN5 = /^[A-Za-z0-9+/]*={0,2}$/,
    qN5 = (I) => {
      if (I.length * 3 % 4 !== 0) throw new TypeError("Incorrect padding on base64 string.");
      if (!fN5.exec(I)) throw new TypeError("Invalid base64 string.");
      let d = QN5.fromString(I, "base64");
      return new Uint8Array(d.buffer, d.byteOffset, d.byteLength)
    };
  fc0.fromBase64 = qN5
})
// @from(Start 3194145, End 3195795)
SZ = Y((QG3, Mc0) => {
  var {
    defineProperty: hi,
    getOwnPropertyDescriptor: RN5,
    getOwnPropertyNames: UN5
  } = Object, vN5 = Object.prototype.hasOwnProperty, EV1 = (I, d) => hi(I, "name", {
    value: d,
    configurable: !0
  }), EN5 = (I, d) => {
    for (var G in d) hi(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, MN5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of UN5(d))
        if (!vN5.call(I, C) && C !== G) hi(I, C, {
          get: () => d[C],
          enumerable: !(Z = RN5(d, C)) || Z.enumerable
        })
    }
    return I
  }, SN5 = (I) => MN5(hi({}, "__esModule", {
    value: !0
  }), I), Uc0 = {};
  EN5(Uc0, {
    fromUtf8: () => Ec0,
    toUint8Array: () => LN5,
    toUtf8: () => yN5
  });
  Mc0.exports = SN5(Uc0);
  var vc0 = Vq(),
    Ec0 = EV1((I) => {
      let d = vc0.fromString(I, "utf8");
      return new Uint8Array(d.buffer, d.byteOffset, d.byteLength / Uint8Array.BYTES_PER_ELEMENT)
    }, "fromUtf8"),
    LN5 = EV1((I) => {
      if (typeof I === "string") return Ec0(I);
      if (ArrayBuffer.isView(I)) return new Uint8Array(I.buffer, I.byteOffset, I.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      return new Uint8Array(I)
    }, "toUint8Array"),
    yN5 = EV1((I) => {
      if (typeof I === "string") return I;
      if (typeof I !== "object" || typeof I.byteOffset !== "number" || typeof I.byteLength !== "number") throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
      return vc0.fromArrayBuffer(I.buffer, I.byteOffset, I.byteLength).toString("utf8")
    }, "toUtf8")
})
// @from(Start 3195801, End 3196374)
yc0 = Y((Sc0) => {
  Object.defineProperty(Sc0, "__esModule", {
    value: !0
  });
  Sc0.toBase64 = void 0;
  var PN5 = Vq(),
    $N5 = SZ(),
    uN5 = (I) => {
      let d;
      if (typeof I === "string") d = $N5.fromUtf8(I);
      else d = I;
      if (typeof d !== "object" || typeof d.byteOffset !== "number" || typeof d.byteLength !== "number") throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
      return PN5.fromArrayBuffer(d.buffer, d.byteOffset, d.byteLength).toString("base64")
    };
  Sc0.toBase64 = uN5
})
// @from(Start 3196380, End 3197071)
fD = Y((qG3, ji) => {
  var {
    defineProperty: Pc0,
    getOwnPropertyDescriptor: TN5,
    getOwnPropertyNames: ON5
  } = Object, mN5 = Object.prototype.hasOwnProperty, MV1 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of ON5(d))
        if (!mN5.call(I, C) && C !== G) Pc0(I, C, {
          get: () => d[C],
          enumerable: !(Z = TN5(d, C)) || Z.enumerable
        })
    }
    return I
  }, $c0 = (I, d, G) => (MV1(I, d, "default"), G && MV1(G, d, "default")), lN5 = (I) => MV1(Pc0({}, "__esModule", {
    value: !0
  }), I), SV1 = {};
  ji.exports = lN5(SV1);
  $c0(SV1, Rc0(), ji.exports);
  $c0(SV1, yc0(), ji.exports)
})
// @from(Start 3197077, End 3198125)
yV1 = Y((RG3, Oc0) => {
  var {
    defineProperty: ki,
    getOwnPropertyDescriptor: bN5,
    getOwnPropertyNames: hN5
  } = Object, jN5 = Object.prototype.hasOwnProperty, LV1 = (I, d) => ki(I, "name", {
    value: d,
    configurable: !0
  }), kN5 = (I, d) => {
    for (var G in d) ki(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, xN5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of hN5(d))
        if (!jN5.call(I, C) && C !== G) ki(I, C, {
          get: () => d[C],
          enumerable: !(Z = bN5(d, C)) || Z.enumerable
        })
    }
    return I
  }, cN5 = (I) => xN5(ki({}, "__esModule", {
    value: !0
  }), I), uc0 = {};
  kN5(uc0, {
    escapeUri: () => Tc0,
    escapeUriPath: () => iN5
  });
  Oc0.exports = cN5(uc0);
  var Tc0 = LV1((I) => encodeURIComponent(I).replace(/[!'()*]/g, pN5), "escapeUri"),
    pN5 = LV1((I) => `%${I.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode"),
    iN5 = LV1((I) => I.split("/").map(Tc0).join("/"), "escapeUriPath")
})
// @from(Start 3198131, End 3199364)
$V1 = Y((UG3, bc0) => {
  var {
    defineProperty: xi,
    getOwnPropertyDescriptor: nN5,
    getOwnPropertyNames: rN5
  } = Object, aN5 = Object.prototype.hasOwnProperty, sN5 = (I, d) => xi(I, "name", {
    value: d,
    configurable: !0
  }), oN5 = (I, d) => {
    for (var G in d) xi(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, eN5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of rN5(d))
        if (!aN5.call(I, C) && C !== G) xi(I, C, {
          get: () => d[C],
          enumerable: !(Z = nN5(d, C)) || Z.enumerable
        })
    }
    return I
  }, tN5 = (I) => eN5(xi({}, "__esModule", {
    value: !0
  }), I), mc0 = {};
  oN5(mc0, {
    buildQueryString: () => lc0
  });
  bc0.exports = tN5(mc0);
  var PV1 = yV1();

  function lc0(I) {
    let d = [];
    for (let G of Object.keys(I).sort()) {
      let Z = I[G];
      if (G = PV1.escapeUri(G), Array.isArray(Z))
        for (let C = 0, W = Z.length; C < W; C++) d.push(`${G}=${PV1.escapeUri(Z[C])}`);
      else {
        let C = G;
        if (Z || typeof Z === "string") C += `=${PV1.escapeUri(Z)}`;
        d.push(C)
      }
    }
    return d.join("&")
  }
  sN5(lc0, "buildQueryString")
})
// @from(Start 3199370, End 3204467)
ac0 = Y((vG3, rc0) => {
  var {
    defineProperty: ci,
    getOwnPropertyDescriptor: Iz5,
    getOwnPropertyNames: dz5
  } = Object, Gz5 = Object.prototype.hasOwnProperty, Xq = (I, d) => ci(I, "name", {
    value: d,
    configurable: !0
  }), Zz5 = (I, d) => {
    for (var G in d) ci(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, Cz5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of dz5(d))
        if (!Gz5.call(I, C) && C !== G) ci(I, C, {
          get: () => d[C],
          enumerable: !(Z = Iz5(d, C)) || Z.enumerable
        })
    }
    return I
  }, Wz5 = (I) => Cz5(ci({}, "__esModule", {
    value: !0
  }), I), jc0 = {};
  Zz5(jc0, {
    FetchHttpHandler: () => Bz5,
    keepAliveSupport: () => xc0,
    streamCollector: () => Vz5
  });
  rc0.exports = Wz5(jc0);
  var hc0 = t8(),
    wz5 = $V1();

  function kc0(I = 0) {
    return new Promise((d, G) => {
      if (I) setTimeout(() => {
        let Z = new Error(`Request did not complete within ${I} ms`);
        Z.name = "TimeoutError", G(Z)
      }, I)
    })
  }
  Xq(kc0, "requestTimeout");
  var xc0 = {
      supported: Boolean(typeof Request !== "undefined" && "keepalive" in new Request("https://[::1]"))
    },
    cc0 = class I {
      static create(d) {
        if (typeof(d == null ? void 0 : d.handle) === "function") return d;
        return new I(d)
      }
      constructor(d) {
        if (typeof d === "function") this.configProvider = d().then((G) => G || {});
        else this.config = d ?? {}, this.configProvider = Promise.resolve(this.config)
      }
      destroy() {}
      async handle(d, {
        abortSignal: G
      } = {}) {
        if (!this.config) this.config = await this.configProvider;
        let Z = this.config.requestTimeout,
          C = this.config.keepAlive === !0;
        if (G == null ? void 0 : G.aborted) {
          let K = new Error("Request aborted");
          return K.name = "AbortError", Promise.reject(K)
        }
        let W = d.path,
          w = wz5.buildQueryString(d.query || {});
        if (w) W += `?${w}`;
        if (d.fragment) W += `#${d.fragment}`;
        let B = "";
        if (d.username != null || d.password != null) {
          let K = d.username ?? "",
            Q = d.password ?? "";
          B = `${K}:${Q}@`
        }
        let {
          port: A,
          method: V
        } = d, X = `${d.protocol}//${B}${d.hostname}${A?`:${A}`:""}${W}`, F = {
          body: V === "GET" || V === "HEAD" ? void 0 : d.body,
          headers: new Headers(d.headers),
          method: V
        };
        if (typeof AbortController !== "undefined") F.signal = G;
        if (xc0.supported) F.keepalive = C;
        let g = new Request(X, F),
          J = [fetch(g).then((K) => {
            let Q = K.headers,
              E = {};
            for (let P of Q.entries()) E[P[0]] = P[1];
            if (K.body == null) return K.blob().then((P) => ({
              response: new hc0.HttpResponse({
                headers: E,
                reason: K.statusText,
                statusCode: K.status,
                body: P
              })
            }));
            return {
              response: new hc0.HttpResponse({
                headers: E,
                reason: K.statusText,
                statusCode: K.status,
                body: K.body
              })
            }
          }), kc0(Z)];
        if (G) J.push(new Promise((K, Q) => {
          G.onabort = () => {
            let E = new Error("Request aborted");
            E.name = "AbortError", Q(E)
          }
        }));
        return Promise.race(J)
      }
      updateHttpClientConfig(d, G) {
        this.config = void 0, this.configProvider = this.configProvider.then((Z) => {
          return Z[d] = G, Z
        })
      }
      httpHandlerConfigs() {
        return this.config ?? {}
      }
    };
  Xq(cc0, "FetchHttpHandler");
  var Bz5 = cc0,
    Az5 = fD(),
    Vz5 = Xq((I) => {
      if (typeof Blob === "function" && I instanceof Blob) return pc0(I);
      return ic0(I)
    }, "streamCollector");
  async function pc0(I) {
    let d = await nc0(I),
      G = Az5.fromBase64(d);
    return new Uint8Array(G)
  }
  Xq(pc0, "collectBlob");
  async function ic0(I) {
    let d = new Uint8Array(0),
      G = I.getReader(),
      Z = !1;
    while (!Z) {
      let {
        done: C,
        value: W
      } = await G.read();
      if (W) {
        let w = d;
        d = new Uint8Array(w.length + W.length), d.set(w), d.set(W, w.length)
      }
      Z = C
    }
    return d
  }
  Xq(ic0, "collectStream");

  function nc0(I) {
    return new Promise((d, G) => {
      let Z = new FileReader;
      Z.onloadend = () => {
        if (Z.readyState !== 2) return G(new Error("Reader aborted too early"));
        let C = Z.result ?? "",
          W = C.indexOf(","),
          w = W > -1 ? W + 1 : C.length;
        d(C.substring(w))
      }, Z.onabort = () => G(new Error("Read aborted")), Z.onerror = () => G(Z.error), Z.readAsDataURL(I)
    })
  }
  Xq(nc0, "readToBase64")
})
// @from(Start 3204473, End 3212587)
Ip0 = Y((EG3, tc0) => {
  var {
    defineProperty: pi,
    getOwnPropertyDescriptor: Xz5,
    getOwnPropertyNames: Yz5
  } = Object, _z5 = Object.prototype.hasOwnProperty, LZ = (I, d) => pi(I, "name", {
    value: d,
    configurable: !0
  }), Dz5 = (I, d) => {
    for (var G in d) pi(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, Hz5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of Yz5(d))
        if (!_z5.call(I, C) && C !== G) pi(I, C, {
          get: () => d[C],
          enumerable: !(Z = Xz5(d, C)) || Z.enumerable
        })
    }
    return I
  }, Fz5 = (I) => Hz5(pi({}, "__esModule", {
    value: !0
  }), I), ec0 = {};
  Dz5(ec0, {
    constructStack: () => uV1
  });
  tc0.exports = Fz5(ec0);
  var NJ = LZ((I, d) => {
      let G = [];
      if (I) G.push(I);
      if (d)
        for (let Z of d) G.push(Z);
      return G
    }, "getAllAliases"),
    qD = LZ((I, d) => {
      return `${I||"anonymous"}${d&&d.length>0?` (a.k.a. ${d.join(",")})`:""}`
    }, "getMiddlewareNameWithAliases"),
    uV1 = LZ(() => {
      let I = [],
        d = [],
        G = !1,
        Z = new Set,
        C = LZ((_) => _.sort((F, g) => sc0[g.step] - sc0[F.step] || oc0[g.priority || "normal"] - oc0[F.priority || "normal"]), "sort"),
        W = LZ((_) => {
          let F = !1,
            g = LZ((J) => {
              let K = NJ(J.name, J.aliases);
              if (K.includes(_)) {
                F = !0;
                for (let Q of K) Z.delete(Q);
                return !1
              }
              return !0
            }, "filterCb");
          return I = I.filter(g), d = d.filter(g), F
        }, "removeByName"),
        w = LZ((_) => {
          let F = !1,
            g = LZ((J) => {
              if (J.middleware === _) {
                F = !0;
                for (let K of NJ(J.name, J.aliases)) Z.delete(K);
                return !1
              }
              return !0
            }, "filterCb");
          return I = I.filter(g), d = d.filter(g), F
        }, "removeByReference"),
        B = LZ((_) => {
          var F;
          return I.forEach((g) => {
            _.add(g.middleware, {
              ...g
            })
          }), d.forEach((g) => {
            _.addRelativeTo(g.middleware, {
              ...g
            })
          }), (F = _.identifyOnResolve) == null || F.call(_, X.identifyOnResolve()), _
        }, "cloneTo"),
        A = LZ((_) => {
          let F = [];
          return _.before.forEach((g) => {
            if (g.before.length === 0 && g.after.length === 0) F.push(g);
            else F.push(...A(g))
          }), F.push(_), _.after.reverse().forEach((g) => {
            if (g.before.length === 0 && g.after.length === 0) F.push(g);
            else F.push(...A(g))
          }), F
        }, "expandRelativeMiddlewareList"),
        V = LZ((_ = !1) => {
          let F = [],
            g = [],
            J = {};
          return I.forEach((Q) => {
            let E = {
              ...Q,
              before: [],
              after: []
            };
            for (let S of NJ(E.name, E.aliases)) J[S] = E;
            F.push(E)
          }), d.forEach((Q) => {
            let E = {
              ...Q,
              before: [],
              after: []
            };
            for (let S of NJ(E.name, E.aliases)) J[S] = E;
            g.push(E)
          }), g.forEach((Q) => {
            if (Q.toMiddleware) {
              let E = J[Q.toMiddleware];
              if (E === void 0) {
                if (_) return;
                throw new Error(`${Q.toMiddleware} is not found when adding ${qD(Q.name,Q.aliases)} middleware ${Q.relation} ${Q.toMiddleware}`)
              }
              if (Q.relation === "after") E.after.push(Q);
              if (Q.relation === "before") E.before.push(Q)
            }
          }), C(F).map(A).reduce((Q, E) => {
            return Q.push(...E), Q
          }, [])
        }, "getMiddlewareList"),
        X = {
          add: (_, F = {}) => {
            let {
              name: g,
              override: J,
              aliases: K
            } = F, Q = {
              step: "initialize",
              priority: "normal",
              middleware: _,
              ...F
            }, E = NJ(g, K);
            if (E.length > 0) {
              if (E.some((S) => Z.has(S))) {
                if (!J) throw new Error(`Duplicate middleware name '${qD(g,K)}'`);
                for (let S of E) {
                  let P = I.findIndex((h) => {
                    var O;
                    return h.name === S || ((O = h.aliases) == null ? void 0 : O.some((T) => T === S))
                  });
                  if (P === -1) continue;
                  let $ = I[P];
                  if ($.step !== Q.step || Q.priority !== $.priority) throw new Error(`"${qD($.name,$.aliases)}" middleware with ${$.priority} priority in ${$.step} step cannot be overridden by "${qD(g,K)}" middleware with ${Q.priority} priority in ${Q.step} step.`);
                  I.splice(P, 1)
                }
              }
              for (let S of E) Z.add(S)
            }
            I.push(Q)
          },
          addRelativeTo: (_, F) => {
            let {
              name: g,
              override: J,
              aliases: K
            } = F, Q = {
              middleware: _,
              ...F
            }, E = NJ(g, K);
            if (E.length > 0) {
              if (E.some((S) => Z.has(S))) {
                if (!J) throw new Error(`Duplicate middleware name '${qD(g,K)}'`);
                for (let S of E) {
                  let P = d.findIndex((h) => {
                    var O;
                    return h.name === S || ((O = h.aliases) == null ? void 0 : O.some((T) => T === S))
                  });
                  if (P === -1) continue;
                  let $ = d[P];
                  if ($.toMiddleware !== Q.toMiddleware || $.relation !== Q.relation) throw new Error(`"${qD($.name,$.aliases)}" middleware ${$.relation} "${$.toMiddleware}" middleware cannot be overridden by "${qD(g,K)}" middleware ${Q.relation} "${Q.toMiddleware}" middleware.`);
                  d.splice(P, 1)
                }
              }
              for (let S of E) Z.add(S)
            }
            d.push(Q)
          },
          clone: () => B(uV1()),
          use: (_) => {
            _.applyToStack(X)
          },
          remove: (_) => {
            if (typeof _ === "string") return W(_);
            else return w(_)
          },
          removeByTag: (_) => {
            let F = !1,
              g = LZ((J) => {
                let {
                  tags: K,
                  name: Q,
                  aliases: E
                } = J;
                if (K && K.includes(_)) {
                  let S = NJ(Q, E);
                  for (let P of S) Z.delete(P);
                  return F = !0, !1
                }
                return !0
              }, "filterCb");
            return I = I.filter(g), d = d.filter(g), F
          },
          concat: (_) => {
            var F;
            let g = B(uV1());
            return g.use(_), g.identifyOnResolve(G || g.identifyOnResolve() || (((F = _.identifyOnResolve) == null ? void 0 : F.call(_)) ?? !1)), g
          },
          applyToStack: B,
          identify: () => {
            return V(!0).map((_) => {
              let F = _.step ?? _.relation + " " + _.toMiddleware;
              return qD(_.name, _.aliases) + " - " + F
            })
          },
          identifyOnResolve(_) {
            if (typeof _ === "boolean") G = _;
            return G
          },
          resolve: (_, F) => {
            for (let g of V().map((J) => J.middleware).reverse()) _ = g(_, F);
            if (G) console.log(X.identify());
            return _
          }
        };
      return X
    }, "constructStack"),
    sc0 = {
      initialize: 5,
      serialize: 4,
      build: 3,
      finalizeRequest: 2,
      deserialize: 1
    },
    oc0 = {
      high: 3,
      normal: 2,
      low: 1
    }
})
// @from(Start 3212593, End 3213453)
Zp0 = Y((dp0) => {
  Object.defineProperty(dp0, "__esModule", {
    value: !0
  });
  dp0.getAwsChunkedEncodingStream = void 0;
  var gz5 = B1("stream"),
    Jz5 = (I, d) => {
      let {
        base64Encoder: G,
        bodyLengthChecker: Z,
        checksumAlgorithmFn: C,
        checksumLocationName: W,
        streamHasher: w
      } = d, B = G !== void 0 && C !== void 0 && W !== void 0 && w !== void 0, A = B ? w(C, I) : void 0, V = new gz5.Readable({
        read: () => {}
      });
      return I.on("data", (X) => {
        let _ = Z(X) || 0;
        V.push(`${_.toString(16)}\r
`), V.push(X), V.push(`\r
`)
      }), I.on("end", async () => {
        if (V.push(`0\r
`), B) {
          let X = G(await A);
          V.push(`${W}:${X}\r
`), V.push(`\r
`)
        }
        V.push(null)
      }), V
    };
  dp0.getAwsChunkedEncodingStream = Jz5
})
// @from(Start 3213459, End 3230142)
Yq = Y((SG3, Kp0) => {
  var {
    create: Kz5,
    defineProperty: iy,
    getOwnPropertyDescriptor: Nz5,
    getOwnPropertyNames: zz5,
    getPrototypeOf: Qz5
  } = Object, fz5 = Object.prototype.hasOwnProperty, N8 = (I, d) => iy(I, "name", {
    value: d,
    configurable: !0
  }), qz5 = (I, d) => {
    for (var G in d) iy(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, wp0 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of zz5(d))
        if (!fz5.call(I, C) && C !== G) iy(I, C, {
          get: () => d[C],
          enumerable: !(Z = Nz5(d, C)) || Z.enumerable
        })
    }
    return I
  }, Rz5 = (I, d, G) => (G = I != null ? Kz5(Qz5(I)) : {}, wp0(d || !I || !I.__esModule ? iy(G, "default", {
    value: I,
    enumerable: !0
  }) : G, I)), Uz5 = (I) => wp0(iy({}, "__esModule", {
    value: !0
  }), I), Bp0 = {};
  qz5(Bp0, {
    DEFAULT_REQUEST_TIMEOUT: () => Lz5,
    NodeHttp2Handler: () => Tz5,
    NodeHttpHandler: () => yz5,
    streamCollector: () => mz5
  });
  Kp0.exports = Uz5(Bp0);
  var Ap0 = t8(),
    Vp0 = $V1(),
    TV1 = B1("http"),
    OV1 = B1("https"),
    vz5 = ["ECONNRESET", "EPIPE", "ETIMEDOUT"],
    Xp0 = N8((I) => {
      let d = {};
      for (let G of Object.keys(I)) {
        let Z = I[G];
        d[G] = Array.isArray(Z) ? Z.join(",") : Z
      }
      return d
    }, "getTransformedHeaders"),
    Ez5 = N8((I, d, G = 0) => {
      if (!G) return;
      let Z = setTimeout(() => {
        I.destroy(), d(Object.assign(new Error(`Socket timed out without establishing a connection within ${G} ms`), {
          name: "TimeoutError"
        }))
      }, G);
      I.on("socket", (C) => {
        if (C.connecting) C.on("connect", () => {
          clearTimeout(Z)
        });
        else clearTimeout(Z)
      })
    }, "setConnectionTimeout"),
    Mz5 = N8((I, {
      keepAlive: d,
      keepAliveMsecs: G
    }) => {
      if (d !== !0) return;
      I.on("socket", (Z) => {
        Z.setKeepAlive(d, G || 0)
      })
    }, "setSocketKeepAlive"),
    Sz5 = N8((I, d, G = 0) => {
      I.setTimeout(G, () => {
        I.destroy(), d(Object.assign(new Error(`Connection timed out after ${G} ms`), {
          name: "TimeoutError"
        }))
      })
    }, "setSocketTimeout"),
    Yp0 = B1("stream"),
    Cp0 = 1000;
  async function mV1(I, d, G = Cp0) {
    let Z = d.headers ?? {},
      C = Z.Expect || Z.expect,
      W = -1,
      w = !1;
    if (C === "100-continue") await Promise.race([new Promise((B) => {
      W = Number(setTimeout(B, Math.max(Cp0, G)))
    }), new Promise((B) => {
      I.on("continue", () => {
        clearTimeout(W), B()
      }), I.on("error", () => {
        w = !0, clearTimeout(W), B()
      })
    })]);
    if (!w) _p0(I, d.body)
  }
  N8(mV1, "writeRequestBody");

  function _p0(I, d) {
    if (d instanceof Yp0.Readable) {
      d.pipe(I);
      return
    }
    if (d) {
      if (Buffer.isBuffer(d) || typeof d === "string") {
        I.end(d);
        return
      }
      let G = d;
      if (typeof G === "object" && G.buffer && typeof G.byteOffset === "number" && typeof G.byteLength === "number") {
        I.end(Buffer.from(G.buffer, G.byteOffset, G.byteLength));
        return
      }
      I.end(Buffer.from(d));
      return
    }
    I.end()
  }
  N8(_p0, "writeBody");
  var Lz5 = 0,
    Dp0 = class I {
      constructor(d) {
        this.socketWarningTimestamp = 0, this.metadata = {
          handlerProtocol: "http/1.1"
        }, this.configProvider = new Promise((G, Z) => {
          if (typeof d === "function") d().then((C) => {
            G(this.resolveDefaultConfig(C))
          }).catch(Z);
          else G(this.resolveDefaultConfig(d))
        })
      }
      static create(d) {
        if (typeof(d == null ? void 0 : d.handle) === "function") return d;
        return new I(d)
      }
      static checkSocketUsage(d, G) {
        var Z, C;
        let {
          sockets: W,
          requests: w,
          maxSockets: B
        } = d;
        if (typeof B !== "number" || B === 1 / 0) return G;
        let A = 15000;
        if (Date.now() - A < G) return G;
        if (W && w)
          for (let V in W) {
            let X = ((Z = W[V]) == null ? void 0 : Z.length) ?? 0,
              _ = ((C = w[V]) == null ? void 0 : C.length) ?? 0;
            if (X >= B && _ >= 2 * B) return console.warn("@smithy/node-http-handler:WARN", `socket usage at capacity=${X} and ${_} additional requests are enqueued.`, "See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html", "or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config."), Date.now()
          }
        return G
      }
      resolveDefaultConfig(d) {
        let {
          requestTimeout: G,
          connectionTimeout: Z,
          socketTimeout: C,
          httpAgent: W,
          httpsAgent: w
        } = d || {}, B = !0, A = 50;
        return {
          connectionTimeout: Z,
          requestTimeout: G ?? C,
          httpAgent: (() => {
            if (W instanceof TV1.Agent || typeof(W == null ? void 0 : W.destroy) === "function") return W;
            return new TV1.Agent({
              keepAlive: !0,
              maxSockets: 50,
              ...W
            })
          })(),
          httpsAgent: (() => {
            if (w instanceof OV1.Agent || typeof(w == null ? void 0 : w.destroy) === "function") return w;
            return new OV1.Agent({
              keepAlive: !0,
              maxSockets: 50,
              ...w
            })
          })()
        }
      }
      destroy() {
        var d, G, Z, C;
        (G = (d = this.config) == null ? void 0 : d.httpAgent) == null || G.destroy(), (C = (Z = this.config) == null ? void 0 : Z.httpsAgent) == null || C.destroy()
      }
      async handle(d, {
        abortSignal: G
      } = {}) {
        if (!this.config) this.config = await this.configProvider;
        let Z;
        return new Promise((C, W) => {
          let w = void 0,
            B = N8(async (S) => {
              await w, clearTimeout(Z), C(S)
            }, "resolve"),
            A = N8(async (S) => {
              await w, W(S)
            }, "reject");
          if (!this.config) throw new Error("Node HTTP request handler config is not resolved");
          if (G == null ? void 0 : G.aborted) {
            let S = new Error("Request aborted");
            S.name = "AbortError", A(S);
            return
          }
          let V = d.protocol === "https:",
            X = V ? this.config.httpsAgent : this.config.httpAgent;
          Z = setTimeout(() => {
            this.socketWarningTimestamp = I.checkSocketUsage(X, this.socketWarningTimestamp)
          }, this.config.socketAcquisitionWarningTimeout ?? (this.config.requestTimeout ?? 2000) + (this.config.connectionTimeout ?? 1000));
          let _ = Vp0.buildQueryString(d.query || {}),
            F = void 0;
          if (d.username != null || d.password != null) {
            let S = d.username ?? "",
              P = d.password ?? "";
            F = `${S}:${P}`
          }
          let g = d.path;
          if (_) g += `?${_}`;
          if (d.fragment) g += `#${d.fragment}`;
          let J = {
              headers: d.headers,
              host: d.hostname,
              method: d.method,
              path: g,
              port: d.port,
              agent: X,
              auth: F
            },
            Q = (V ? OV1.request : TV1.request)(J, (S) => {
              let P = new Ap0.HttpResponse({
                statusCode: S.statusCode || -1,
                reason: S.statusMessage,
                headers: Xp0(S.headers),
                body: S
              });
              B({
                response: P
              })
            });
          if (Q.on("error", (S) => {
              if (vz5.includes(S.code)) A(Object.assign(S, {
                name: "TimeoutError"
              }));
              else A(S)
            }), Ez5(Q, A, this.config.connectionTimeout), Sz5(Q, A, this.config.requestTimeout), G) G.onabort = () => {
            Q.abort();
            let S = new Error("Request aborted");
            S.name = "AbortError", A(S)
          };
          let E = J.agent;
          if (typeof E === "object" && "keepAlive" in E) Mz5(Q, {
            keepAlive: E.keepAlive,
            keepAliveMsecs: E.keepAliveMsecs
          });
          w = mV1(Q, d, this.config.requestTimeout).catch(W)
        })
      }
      updateHttpClientConfig(d, G) {
        this.config = void 0, this.configProvider = this.configProvider.then((Z) => {
          return {
            ...Z,
            [d]: G
          }
        })
      }
      httpHandlerConfigs() {
        return this.config ?? {}
      }
    };
  N8(Dp0, "NodeHttpHandler");
  var yz5 = Dp0,
    Wp0 = B1("http2"),
    Pz5 = Rz5(B1("http2")),
    Hp0 = class I {
      constructor(d) {
        this.sessions = [], this.sessions = d ?? []
      }
      poll() {
        if (this.sessions.length > 0) return this.sessions.shift()
      }
      offerLast(d) {
        this.sessions.push(d)
      }
      contains(d) {
        return this.sessions.includes(d)
      }
      remove(d) {
        this.sessions = this.sessions.filter((G) => G !== d)
      } [Symbol.iterator]() {
        return this.sessions[Symbol.iterator]()
      }
      destroy(d) {
        for (let G of this.sessions)
          if (G === d) {
            if (!G.destroyed) G.destroy()
          }
      }
    };
  N8(Hp0, "NodeHttp2ConnectionPool");
  var $z5 = Hp0,
    Fp0 = class I {
      constructor(d) {
        if (this.sessionCache = new Map, this.config = d, this.config.maxConcurrency && this.config.maxConcurrency <= 0) throw new RangeError("maxConcurrency must be greater than zero.")
      }
      lease(d, G) {
        let Z = this.getUrlString(d),
          C = this.sessionCache.get(Z);
        if (C) {
          let A = C.poll();
          if (A && !this.config.disableConcurrency) return A
        }
        let W = Pz5.default.connect(Z);
        if (this.config.maxConcurrency) W.settings({
          maxConcurrentStreams: this.config.maxConcurrency
        }, (A) => {
          if (A) throw new Error("Fail to set maxConcurrentStreams to " + this.config.maxConcurrency + "when creating new session for " + d.destination.toString())
        });
        W.unref();
        let w = N8(() => {
          W.destroy(), this.deleteSession(Z, W)
        }, "destroySessionCb");
        if (W.on("goaway", w), W.on("error", w), W.on("frameError", w), W.on("close", () => this.deleteSession(Z, W)), G.requestTimeout) W.setTimeout(G.requestTimeout, w);
        let B = this.sessionCache.get(Z) || new $z5;
        return B.offerLast(W), this.sessionCache.set(Z, B), W
      }
      deleteSession(d, G) {
        let Z = this.sessionCache.get(d);
        if (!Z) return;
        if (!Z.contains(G)) return;
        Z.remove(G), this.sessionCache.set(d, Z)
      }
      release(d, G) {
        var Z;
        let C = this.getUrlString(d);
        (Z = this.sessionCache.get(C)) == null || Z.offerLast(G)
      }
      destroy() {
        for (let [d, G] of this.sessionCache) {
          for (let Z of G) {
            if (!Z.destroyed) Z.destroy();
            G.remove(Z)
          }
          this.sessionCache.delete(d)
        }
      }
      setMaxConcurrentStreams(d) {
        if (this.config.maxConcurrency && this.config.maxConcurrency <= 0) throw new RangeError("maxConcurrentStreams must be greater than zero.");
        this.config.maxConcurrency = d
      }
      setDisableConcurrentStreams(d) {
        this.config.disableConcurrency = d
      }
      getUrlString(d) {
        return d.destination.toString()
      }
    };
  N8(Fp0, "NodeHttp2ConnectionManager");
  var uz5 = Fp0,
    gp0 = class I {
      constructor(d) {
        this.metadata = {
          handlerProtocol: "h2"
        }, this.connectionManager = new uz5({}), this.configProvider = new Promise((G, Z) => {
          if (typeof d === "function") d().then((C) => {
            G(C || {})
          }).catch(Z);
          else G(d || {})
        })
      }
      static create(d) {
        if (typeof(d == null ? void 0 : d.handle) === "function") return d;
        return new I(d)
      }
      destroy() {
        this.connectionManager.destroy()
      }
      async handle(d, {
        abortSignal: G
      } = {}) {
        if (!this.config) {
          if (this.config = await this.configProvider, this.connectionManager.setDisableConcurrentStreams(this.config.disableConcurrentStreams || !1), this.config.maxConcurrentStreams) this.connectionManager.setMaxConcurrentStreams(this.config.maxConcurrentStreams)
        }
        let {
          requestTimeout: Z,
          disableConcurrentStreams: C
        } = this.config;
        return new Promise((W, w) => {
          var B;
          let A = !1,
            V = void 0,
            X = N8(async (c) => {
              await V, W(c)
            }, "resolve"),
            _ = N8(async (c) => {
              await V, w(c)
            }, "reject");
          if (G == null ? void 0 : G.aborted) {
            A = !0;
            let c = new Error("Request aborted");
            c.name = "AbortError", _(c);
            return
          }
          let {
            hostname: F,
            method: g,
            port: J,
            protocol: K,
            query: Q
          } = d, E = "";
          if (d.username != null || d.password != null) {
            let c = d.username ?? "",
              c1 = d.password ?? "";
            E = `${c}:${c1}@`
          }
          let S = `${K}//${E}${F}${J?`:${J}`:""}`,
            P = {
              destination: new URL(S)
            },
            $ = this.connectionManager.lease(P, {
              requestTimeout: (B = this.config) == null ? void 0 : B.sessionTimeout,
              disableConcurrentStreams: C || !1
            }),
            h = N8((c) => {
              if (C) this.destroySession($);
              A = !0, _(c)
            }, "rejectWithDestroy"),
            O = Vp0.buildQueryString(Q || {}),
            T = d.path;
          if (O) T += `?${O}`;
          if (d.fragment) T += `#${d.fragment}`;
          let V1 = $.request({
            ...d.headers,
            [Wp0.constants.HTTP2_HEADER_PATH]: T,
            [Wp0.constants.HTTP2_HEADER_METHOD]: g
          });
          if ($.ref(), V1.on("response", (c) => {
              let c1 = new Ap0.HttpResponse({
                statusCode: c[":status"] || -1,
                headers: Xp0(c),
                body: V1
              });
              if (A = !0, X({
                  response: c1
                }), C) $.close(), this.connectionManager.deleteSession(S, $)
            }), Z) V1.setTimeout(Z, () => {
            V1.close();
            let c = new Error(`Stream timed out because of no activity for ${Z} ms`);
            c.name = "TimeoutError", h(c)
          });
          if (G) G.onabort = () => {
            V1.close();
            let c = new Error("Request aborted");
            c.name = "AbortError", h(c)
          };
          V1.on("frameError", (c, c1, o1) => {
            h(new Error(`Frame type id ${c} in stream id ${o1} has failed with code ${c1}.`))
          }), V1.on("error", h), V1.on("aborted", () => {
            h(new Error(`HTTP/2 stream is abnormally aborted in mid-communication with result code ${V1.rstCode}.`))
          }), V1.on("close", () => {
            if ($.unref(), C) $.destroy();
            if (!A) h(new Error("Unexpected error: http2 request did not get a response"))
          }), V = mV1(V1, d, Z)
        })
      }
      updateHttpClientConfig(d, G) {
        this.config = void 0, this.configProvider = this.configProvider.then((Z) => {
          return {
            ...Z,
            [d]: G
          }
        })
      }
      httpHandlerConfigs() {
        return this.config ?? {}
      }
      destroySession(d) {
        if (!d.destroyed) d.destroy()
      }
    };
  N8(gp0, "NodeHttp2Handler");
  var Tz5 = gp0,
    Jp0 = class I extends Yp0.Writable {
      constructor() {
        super(...arguments);
        this.bufferedBytes = []
      }
      _write(d, G, Z) {
        this.bufferedBytes.push(d), Z()
      }
    };
  N8(Jp0, "Collector");
  var Oz5 = Jp0,
    mz5 = N8((I) => new Promise((d, G) => {
      let Z = new Oz5;
      I.pipe(Z), I.on("error", (C) => {
        Z.end(), G(C)
      }), Z.on("error", G), Z.on("finish", function() {
        let C = new Uint8Array(Buffer.concat(this.bufferedBytes));
        d(C)
      })
    }), "streamCollector")
})
// @from(Start 3230148, End 3231721)
fp0 = Y((zp0) => {
  Object.defineProperty(zp0, "__esModule", {
    value: !0
  });
  zp0.sdkStreamMixin = void 0;
  var lz5 = Yq(),
    bz5 = Vq(),
    lV1 = B1("stream"),
    hz5 = B1("util"),
    Np0 = "The stream has already been transformed.",
    jz5 = (I) => {
      var d, G;
      if (!(I instanceof lV1.Readable)) {
        let W = ((G = (d = I === null || I === void 0 ? void 0 : I.__proto__) === null || d === void 0 ? void 0 : d.constructor) === null || G === void 0 ? void 0 : G.name) || I;
        throw new Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${W}`)
      }
      let Z = !1,
        C = async () => {
          if (Z) throw new Error(Np0);
          return Z = !0, await lz5.streamCollector(I)
        };
      return Object.assign(I, {
        transformToByteArray: C,
        transformToString: async (W) => {
          let w = await C();
          if (W === void 0 || Buffer.isEncoding(W)) return bz5.fromArrayBuffer(w.buffer, w.byteOffset, w.byteLength).toString(W);
          else return new hz5.TextDecoder(W).decode(w)
        },
        transformToWebStream: () => {
          if (Z) throw new Error(Np0);
          if (I.readableFlowing !== null) throw new Error("The stream has been consumed by other callbacks.");
          if (typeof lV1.Readable.toWeb !== "function") throw new Error("Readable.toWeb() is not supported. Please make sure you are using Node.js >= 17.0.0, or polyfill is available.");
          return Z = !0, lV1.Readable.toWeb(I)
        }
      })
    };
  zp0.sdkStreamMixin = jz5
})
// @from(Start 3231727, End 3233477)
Sp0 = Y((yG3, ri) => {
  var {
    defineProperty: ii,
    getOwnPropertyDescriptor: kz5,
    getOwnPropertyNames: xz5
  } = Object, cz5 = Object.prototype.hasOwnProperty, jV1 = (I, d) => ii(I, "name", {
    value: d,
    configurable: !0
  }), pz5 = (I, d) => {
    for (var G in d) ii(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, bV1 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of xz5(d))
        if (!cz5.call(I, C) && C !== G) ii(I, C, {
          get: () => d[C],
          enumerable: !(Z = kz5(d, C)) || Z.enumerable
        })
    }
    return I
  }, qp0 = (I, d, G) => (bV1(I, d, "default"), G && bV1(G, d, "default")), iz5 = (I) => bV1(ii({}, "__esModule", {
    value: !0
  }), I), ni = {};
  pz5(ni, {
    Uint8ArrayBlobAdapter: () => hV1
  });
  ri.exports = iz5(ni);
  var Rp0 = fD(),
    Up0 = SZ();

  function vp0(I, d = "utf-8") {
    if (d === "base64") return Rp0.toBase64(I);
    return Up0.toUtf8(I)
  }
  jV1(vp0, "transformToString");

  function Ep0(I, d) {
    if (d === "base64") return hV1.mutate(Rp0.fromBase64(I));
    return hV1.mutate(Up0.fromUtf8(I))
  }
  jV1(Ep0, "transformFromString");
  var Mp0 = class I extends Uint8Array {
    static fromString(d, G = "utf-8") {
      switch (typeof d) {
        case "string":
          return Ep0(d, G);
        default:
          throw new Error(`Unsupported conversion from ${typeof d} to Uint8ArrayBlobAdapter.`)
      }
    }
    static mutate(d) {
      return Object.setPrototypeOf(d, I.prototype), d
    }
    transformToString(d = "utf-8") {
      return vp0(this, d)
    }
  };
  jV1(Mp0, "Uint8ArrayBlobAdapter");
  var hV1 = Mp0;
  qp0(ni, Zp0(), ri.exports);
  qp0(ni, fp0(), ri.exports)
})
// @from(Start 3233483, End 3261080)
h2 = Y((PG3, ep0) => {
  var {
    defineProperty: ei,
    getOwnPropertyDescriptor: nz5,
    getOwnPropertyNames: rz5
  } = Object, az5 = Object.prototype.hasOwnProperty, t0 = (I, d) => ei(I, "name", {
    value: d,
    configurable: !0
  }), sz5 = (I, d) => {
    for (var G in d) ei(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, oz5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of rz5(d))
        if (!az5.call(I, C) && C !== G) ei(I, C, {
          get: () => d[C],
          enumerable: !(Z = nz5(d, C)) || Z.enumerable
        })
    }
    return I
  }, ez5 = (I) => oz5(ei({}, "__esModule", {
    value: !0
  }), I), yp0 = {};
  sz5(yp0, {
    Client: () => IQ5,
    Command: () => Op0,
    LazyJsonString: () => sQ5,
    NoOpLogger: () => tz5,
    SENSITIVE_STRING: () => ZQ5,
    ServiceException: () => lQ5,
    StringWrapper: () => oy,
    _json: () => rV1,
    collectBody: () => dQ5,
    convertMap: () => oQ5,
    createAggregatedClient: () => CQ5,
    dateToUtcString: () => xp0,
    decorateServiceException: () => pp0,
    emitWarningIfUnsupportedVersion: () => kQ5,
    expectBoolean: () => wQ5,
    expectByte: () => nV1,
    expectFloat32: () => ai,
    expectInt: () => AQ5,
    expectInt32: () => pV1,
    expectLong: () => ay,
    expectNonNull: () => XQ5,
    expectNumber: () => ry,
    expectObject: () => lp0,
    expectShort: () => iV1,
    expectString: () => YQ5,
    expectUnion: () => _Q5,
    extendedEncodeURIComponent: () => oi,
    getArrayIfSingleItem: () => aQ5,
    getDefaultClientConfiguration: () => nQ5,
    getDefaultExtensionConfiguration: () => np0,
    getValueFromTextNode: () => rp0,
    handleFloat: () => FQ5,
    limitedParseDouble: () => oV1,
    limitedParseFloat: () => gQ5,
    limitedParseFloat32: () => JQ5,
    loadConfigsForDefaultMode: () => jQ5,
    logger: () => sy,
    map: () => tV1,
    parseBoolean: () => WQ5,
    parseEpochTimestamp: () => SQ5,
    parseRfc3339DateTime: () => fQ5,
    parseRfc3339DateTimeWithOffset: () => RQ5,
    parseRfc7231DateTime: () => MQ5,
    resolveDefaultRuntimeConfig: () => rQ5,
    resolvedPath: () => Gf5,
    serializeFloat: () => Zf5,
    splitEvery: () => op0,
    strictParseByte: () => kp0,
    strictParseDouble: () => sV1,
    strictParseFloat: () => DQ5,
    strictParseFloat32: () => bp0,
    strictParseInt: () => KQ5,
    strictParseInt32: () => NQ5,
    strictParseLong: () => jp0,
    strictParseShort: () => _q,
    take: () => eQ5,
    throwDefaultError: () => ip0,
    withBaseException: () => bQ5
  });
  ep0.exports = ez5(yp0);
  var Pp0 = class I {
    trace() {}
    debug() {}
    info() {}
    warn() {}
    error() {}
  };
  t0(Pp0, "NoOpLogger");
  var tz5 = Pp0,
    $p0 = Ip0(),
    up0 = class I {
      constructor(d) {
        this.middlewareStack = $p0.constructStack(), this.config = d
      }
      send(d, G, Z) {
        let C = typeof G !== "function" ? G : void 0,
          W = typeof G === "function" ? G : Z,
          w = d.resolveMiddleware(this.middlewareStack, this.config, C);
        if (W) w(d).then((B) => W(null, B.output), (B) => W(B)).catch(() => {});
        else return w(d).then((B) => B.output)
      }
      destroy() {
        if (this.config.requestHandler.destroy) this.config.requestHandler.destroy()
      }
    };
  t0(up0, "Client");
  var IQ5 = up0,
    kV1 = Sp0(),
    dQ5 = t0(async (I = new Uint8Array, d) => {
      if (I instanceof Uint8Array) return kV1.Uint8ArrayBlobAdapter.mutate(I);
      if (!I) return kV1.Uint8ArrayBlobAdapter.mutate(new Uint8Array);
      let G = d.streamCollector(I);
      return kV1.Uint8ArrayBlobAdapter.mutate(await G)
    }, "collectBody"),
    cV1 = k3(),
    Tp0 = class I {
      constructor() {
        this.middlewareStack = $p0.constructStack()
      }
      static classBuilder() {
        return new GQ5
      }
      resolveMiddlewareWithContext(d, G, Z, {
        middlewareFn: C,
        clientName: W,
        commandName: w,
        inputFilterSensitiveLog: B,
        outputFilterSensitiveLog: A,
        smithyContext: V,
        additionalContext: X,
        CommandCtor: _
      }) {
        for (let Q of C.bind(this)(_, d, G, Z)) this.middlewareStack.use(Q);
        let F = d.concat(this.middlewareStack),
          {
            logger: g
          } = G,
          J = {
            logger: g,
            clientName: W,
            commandName: w,
            inputFilterSensitiveLog: B,
            outputFilterSensitiveLog: A,
            [cV1.SMITHY_CONTEXT_KEY]: {
              ...V
            },
            ...X
          },
          {
            requestHandler: K
          } = G;
        return F.resolve((Q) => K.handle(Q.request, Z || {}), J)
      }
    };
  t0(Tp0, "Command");
  var Op0 = Tp0,
    mp0 = class I {
      constructor() {
        this._init = () => {}, this._ep = {}, this._middlewareFn = () => [], this._commandName = "", this._clientName = "", this._additionalContext = {}, this._smithyContext = {}, this._inputFilterSensitiveLog = (d) => d, this._outputFilterSensitiveLog = (d) => d, this._serializer = null, this._deserializer = null
      }
      init(d) {
        this._init = d
      }
      ep(d) {
        return this._ep = d, this
      }
      m(d) {
        return this._middlewareFn = d, this
      }
      s(d, G, Z = {}) {
        return this._smithyContext = {
          service: d,
          operation: G,
          ...Z
        }, this
      }
      c(d = {}) {
        return this._additionalContext = d, this
      }
      n(d, G) {
        return this._clientName = d, this._commandName = G, this
      }
      f(d = (Z) => Z, G = (Z) => Z) {
        return this._inputFilterSensitiveLog = d, this._outputFilterSensitiveLog = G, this
      }
      ser(d) {
        return this._serializer = d, this
      }
      de(d) {
        return this._deserializer = d, this
      }
      build() {
        var d;
        let G = this,
          Z;
        return Z = (d = class extends Op0 {
          constructor(...[C]) {
            super();
            this.serialize = G._serializer, this.deserialize = G._deserializer, this.input = C ?? {}, G._init(this)
          }
          static getEndpointParameterInstructions() {
            return G._ep
          }
          resolveMiddleware(C, W, w) {
            return this.resolveMiddlewareWithContext(C, W, w, {
              CommandCtor: Z,
              middlewareFn: G._middlewareFn,
              clientName: G._clientName,
              commandName: G._commandName,
              inputFilterSensitiveLog: G._inputFilterSensitiveLog,
              outputFilterSensitiveLog: G._outputFilterSensitiveLog,
              smithyContext: G._smithyContext,
              additionalContext: G._additionalContext
            })
          }
        }, t0(d, "CommandRef"), d)
      }
    };
  t0(mp0, "ClassBuilder");
  var GQ5 = mp0,
    ZQ5 = "***SensitiveInformation***",
    CQ5 = t0((I, d) => {
      for (let G of Object.keys(I)) {
        let Z = I[G],
          C = t0(async function(w, B, A) {
            let V = new Z(w);
            if (typeof B === "function") this.send(V, B);
            else if (typeof A === "function") {
              if (typeof B !== "object") throw new Error(`Expected http options but got ${typeof B}`);
              this.send(V, B || {}, A)
            } else return this.send(V, B)
          }, "methodImpl"),
          W = (G[0].toLowerCase() + G.slice(1)).replace(/Command$/, "");
        d.prototype[W] = C
      }
    }, "createAggregatedClient"),
    WQ5 = t0((I) => {
      switch (I) {
        case "true":
          return !0;
        case "false":
          return !1;
        default:
          throw new Error(`Unable to parse boolean value "${I}"`)
      }
    }, "parseBoolean"),
    wQ5 = t0((I) => {
      if (I === null || I === void 0) return;
      if (typeof I === "number") {
        if (I === 0 || I === 1) sy.warn(si(`Expected boolean, got ${typeof I}: ${I}`));
        if (I === 0) return !1;
        if (I === 1) return !0
      }
      if (typeof I === "string") {
        let d = I.toLowerCase();
        if (d === "false" || d === "true") sy.warn(si(`Expected boolean, got ${typeof I}: ${I}`));
        if (d === "false") return !1;
        if (d === "true") return !0
      }
      if (typeof I === "boolean") return I;
      throw new TypeError(`Expected boolean, got ${typeof I}: ${I}`)
    }, "expectBoolean"),
    ry = t0((I) => {
      if (I === null || I === void 0) return;
      if (typeof I === "string") {
        let d = parseFloat(I);
        if (!Number.isNaN(d)) {
          if (String(d) !== String(I)) sy.warn(si(`Expected number but observed string: ${I}`));
          return d
        }
      }
      if (typeof I === "number") return I;
      throw new TypeError(`Expected number, got ${typeof I}: ${I}`)
    }, "expectNumber"),
    BQ5 = Math.ceil(340282346638528860000000000000000000000),
    ai = t0((I) => {
      let d = ry(I);
      if (d !== void 0 && !Number.isNaN(d) && d !== 1 / 0 && d !== -1 / 0) {
        if (Math.abs(d) > BQ5) throw new TypeError(`Expected 32-bit float, got ${I}`)
      }
      return d
    }, "expectFloat32"),
    ay = t0((I) => {
      if (I === null || I === void 0) return;
      if (Number.isInteger(I) && !Number.isNaN(I)) return I;
      throw new TypeError(`Expected integer, got ${typeof I}: ${I}`)
    }, "expectLong"),
    AQ5 = ay,
    pV1 = t0((I) => aV1(I, 32), "expectInt32"),
    iV1 = t0((I) => aV1(I, 16), "expectShort"),
    nV1 = t0((I) => aV1(I, 8), "expectByte"),
    aV1 = t0((I, d) => {
      let G = ay(I);
      if (G !== void 0 && VQ5(G, d) !== G) throw new TypeError(`Expected ${d}-bit integer, got ${I}`);
      return G
    }, "expectSizedInt"),
    VQ5 = t0((I, d) => {
      switch (d) {
        case 32:
          return Int32Array.of(I)[0];
        case 16:
          return Int16Array.of(I)[0];
        case 8:
          return Int8Array.of(I)[0]
      }
    }, "castInt"),
    XQ5 = t0((I, d) => {
      if (I === null || I === void 0) {
        if (d) throw new TypeError(`Expected a non-null value for ${d}`);
        throw new TypeError("Expected a non-null value")
      }
      return I
    }, "expectNonNull"),
    lp0 = t0((I) => {
      if (I === null || I === void 0) return;
      if (typeof I === "object" && !Array.isArray(I)) return I;
      let d = Array.isArray(I) ? "array" : typeof I;
      throw new TypeError(`Expected object, got ${d}: ${I}`)
    }, "expectObject"),
    YQ5 = t0((I) => {
      if (I === null || I === void 0) return;
      if (typeof I === "string") return I;
      if (["boolean", "number", "bigint"].includes(typeof I)) return sy.warn(si(`Expected string, got ${typeof I}: ${I}`)), String(I);
      throw new TypeError(`Expected string, got ${typeof I}: ${I}`)
    }, "expectString"),
    _Q5 = t0((I) => {
      if (I === null || I === void 0) return;
      let d = lp0(I),
        G = Object.entries(d).filter(([, Z]) => Z != null).map(([Z]) => Z);
      if (G.length === 0) throw new TypeError("Unions must have exactly one non-null member. None were found.");
      if (G.length > 1) throw new TypeError(`Unions must have exactly one non-null member. Keys ${G} were not null.`);
      return d
    }, "expectUnion"),
    sV1 = t0((I) => {
      if (typeof I == "string") return ry(Hq(I));
      return ry(I)
    }, "strictParseDouble"),
    DQ5 = sV1,
    bp0 = t0((I) => {
      if (typeof I == "string") return ai(Hq(I));
      return ai(I)
    }, "strictParseFloat32"),
    HQ5 = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g,
    Hq = t0((I) => {
      let d = I.match(HQ5);
      if (d === null || d[0].length !== I.length) throw new TypeError("Expected real number, got implicit NaN");
      return parseFloat(I)
    }, "parseNumber"),
    oV1 = t0((I) => {
      if (typeof I == "string") return hp0(I);
      return ry(I)
    }, "limitedParseDouble"),
    FQ5 = oV1,
    gQ5 = oV1,
    JQ5 = t0((I) => {
      if (typeof I == "string") return hp0(I);
      return ai(I)
    }, "limitedParseFloat32"),
    hp0 = t0((I) => {
      switch (I) {
        case "NaN":
          return NaN;
        case "Infinity":
          return 1 / 0;
        case "-Infinity":
          return -1 / 0;
        default:
          throw new Error(`Unable to parse float value: ${I}`)
      }
    }, "parseFloatString"),
    jp0 = t0((I) => {
      if (typeof I === "string") return ay(Hq(I));
      return ay(I)
    }, "strictParseLong"),
    KQ5 = jp0,
    NQ5 = t0((I) => {
      if (typeof I === "string") return pV1(Hq(I));
      return pV1(I)
    }, "strictParseInt32"),
    _q = t0((I) => {
      if (typeof I === "string") return iV1(Hq(I));
      return iV1(I)
    }, "strictParseShort"),
    kp0 = t0((I) => {
      if (typeof I === "string") return nV1(Hq(I));
      return nV1(I)
    }, "strictParseByte"),
    si = t0((I) => {
      return String(new TypeError(I).stack || I).split(`
`).slice(0, 5).filter((d) => !d.includes("stackTraceWarning")).join(`
`)
    }, "stackTraceWarning"),
    sy = {
      warn: console.warn
    },
    zQ5 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    eV1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function xp0(I) {
    let d = I.getUTCFullYear(),
      G = I.getUTCMonth(),
      Z = I.getUTCDay(),
      C = I.getUTCDate(),
      W = I.getUTCHours(),
      w = I.getUTCMinutes(),
      B = I.getUTCSeconds(),
      A = C < 10 ? `0${C}` : `${C}`,
      V = W < 10 ? `0${W}` : `${W}`,
      X = w < 10 ? `0${w}` : `${w}`,
      _ = B < 10 ? `0${B}` : `${B}`;
    return `${zQ5[Z]}, ${A} ${eV1[G]} ${d} ${V}:${X}:${_} GMT`
  }
  t0(xp0, "dateToUtcString");
  var QQ5 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/),
    fQ5 = t0((I) => {
      if (I === null || I === void 0) return;
      if (typeof I !== "string") throw new TypeError("RFC-3339 date-times must be expressed as strings");
      let d = QQ5.exec(I);
      if (!d) throw new TypeError("Invalid RFC-3339 date-time value");
      let [G, Z, C, W, w, B, A, V] = d, X = _q(Dq(Z)), _ = XB(C, "month", 1, 12), F = XB(W, "day", 1, 31);
      return ny(X, _, F, {
        hours: w,
        minutes: B,
        seconds: A,
        fractionalMilliseconds: V
      })
    }, "parseRfc3339DateTime"),
    qQ5 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/),
    RQ5 = t0((I) => {
      if (I === null || I === void 0) return;
      if (typeof I !== "string") throw new TypeError("RFC-3339 date-times must be expressed as strings");
      let d = qQ5.exec(I);
      if (!d) throw new TypeError("Invalid RFC-3339 date-time value");
      let [G, Z, C, W, w, B, A, V, X] = d, _ = _q(Dq(Z)), F = XB(C, "month", 1, 12), g = XB(W, "day", 1, 31), J = ny(_, F, g, {
        hours: w,
        minutes: B,
        seconds: A,
        fractionalMilliseconds: V
      });
      if (X.toUpperCase() != "Z") J.setTime(J.getTime() - mQ5(X));
      return J
    }, "parseRfc3339DateTimeWithOffset"),
    UQ5 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/),
    vQ5 = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/),
    EQ5 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/),
    MQ5 = t0((I) => {
      if (I === null || I === void 0) return;
      if (typeof I !== "string") throw new TypeError("RFC-7231 date-times must be expressed as strings");
      let d = UQ5.exec(I);
      if (d) {
        let [G, Z, C, W, w, B, A, V] = d;
        return ny(_q(Dq(W)), xV1(C), XB(Z, "day", 1, 31), {
          hours: w,
          minutes: B,
          seconds: A,
          fractionalMilliseconds: V
        })
      }
      if (d = vQ5.exec(I), d) {
        let [G, Z, C, W, w, B, A, V] = d;
        return PQ5(ny(LQ5(W), xV1(C), XB(Z, "day", 1, 31), {
          hours: w,
          minutes: B,
          seconds: A,
          fractionalMilliseconds: V
        }))
      }
      if (d = EQ5.exec(I), d) {
        let [G, Z, C, W, w, B, A, V] = d;
        return ny(_q(Dq(V)), xV1(Z), XB(C.trimLeft(), "day", 1, 31), {
          hours: W,
          minutes: w,
          seconds: B,
          fractionalMilliseconds: A
        })
      }
      throw new TypeError("Invalid RFC-7231 date-time value")
    }, "parseRfc7231DateTime"),
    SQ5 = t0((I) => {
      if (I === null || I === void 0) return;
      let d;
      if (typeof I === "number") d = I;
      else if (typeof I === "string") d = sV1(I);
      else throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
      if (Number.isNaN(d) || d === 1 / 0 || d === -1 / 0) throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
      return new Date(Math.round(d * 1000))
    }, "parseEpochTimestamp"),
    ny = t0((I, d, G, Z) => {
      let C = d - 1;
      return uQ5(I, C, G), new Date(Date.UTC(I, C, G, XB(Z.hours, "hour", 0, 23), XB(Z.minutes, "minute", 0, 59), XB(Z.seconds, "seconds", 0, 60), OQ5(Z.fractionalMilliseconds)))
    }, "buildDate"),
    LQ5 = t0((I) => {
      let d = new Date().getUTCFullYear(),
        G = Math.floor(d / 100) * 100 + _q(Dq(I));
      if (G < d) return G + 100;
      return G
    }, "parseTwoDigitYear"),
    yQ5 = 1576800000000,
    PQ5 = t0((I) => {
      if (I.getTime() - new Date().getTime() > yQ5) return new Date(Date.UTC(I.getUTCFullYear() - 100, I.getUTCMonth(), I.getUTCDate(), I.getUTCHours(), I.getUTCMinutes(), I.getUTCSeconds(), I.getUTCMilliseconds()));
      return I
    }, "adjustRfc850Year"),
    xV1 = t0((I) => {
      let d = eV1.indexOf(I);
      if (d < 0) throw new TypeError(`Invalid month: ${I}`);
      return d + 1
    }, "parseMonthByShortName"),
    $Q5 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    uQ5 = t0((I, d, G) => {
      let Z = $Q5[d];
      if (d === 1 && TQ5(I)) Z = 29;
      if (G > Z) throw new TypeError(`Invalid day for ${eV1[d]} in ${I}: ${G}`)
    }, "validateDayOfMonth"),
    TQ5 = t0((I) => {
      return I % 4 === 0 && (I % 100 !== 0 || I % 400 === 0)
    }, "isLeapYear"),
    XB = t0((I, d, G, Z) => {
      let C = kp0(Dq(I));
      if (C < G || C > Z) throw new TypeError(`${d} must be between ${G} and ${Z}, inclusive`);
      return C
    }, "parseDateValue"),
    OQ5 = t0((I) => {
      if (I === null || I === void 0) return 0;
      return bp0("0." + I) * 1000
    }, "parseMilliseconds"),
    mQ5 = t0((I) => {
      let d = I[0],
        G = 1;
      if (d == "+") G = 1;
      else if (d == "-") G = -1;
      else throw new TypeError(`Offset direction, ${d}, must be "+" or "-"`);
      let Z = Number(I.substring(1, 3)),
        C = Number(I.substring(4, 6));
      return G * (Z * 60 + C) * 60 * 1000
    }, "parseOffsetToMilliseconds"),
    Dq = t0((I) => {
      let d = 0;
      while (d < I.length - 1 && I.charAt(d) === "0") d++;
      if (d === 0) return I;
      return I.slice(d)
    }, "stripLeadingZeroes"),
    cp0 = class I extends Error {
      constructor(d) {
        super(d.message);
        Object.setPrototypeOf(this, I.prototype), this.name = d.name, this.$fault = d.$fault, this.$metadata = d.$metadata
      }
    };
  t0(cp0, "ServiceException");
  var lQ5 = cp0,
    pp0 = t0((I, d = {}) => {
      Object.entries(d).filter(([, Z]) => Z !== void 0).forEach(([Z, C]) => {
        if (I[Z] == null || I[Z] === "") I[Z] = C
      });
      let G = I.message || I.Message || "UnknownError";
      return I.message = G, delete I.Message, I
    }, "decorateServiceException"),
    ip0 = t0(({
      output: I,
      parsedBody: d,
      exceptionCtor: G,
      errorCode: Z
    }) => {
      let C = hQ5(I),
        W = C.httpStatusCode ? C.httpStatusCode + "" : void 0,
        w = new G({
          name: (d == null ? void 0 : d.code) || (d == null ? void 0 : d.Code) || Z || W || "UnknownError",
          $fault: "client",
          $metadata: C
        });
      throw pp0(w, d)
    }, "throwDefaultError"),
    bQ5 = t0((I) => {
      return ({
        output: d,
        parsedBody: G,
        errorCode: Z
      }) => {
        ip0({
          output: d,
          parsedBody: G,
          exceptionCtor: I,
          errorCode: Z
        })
      }
    }, "withBaseException"),
    hQ5 = t0((I) => ({
      httpStatusCode: I.statusCode,
      requestId: I.headers["x-amzn-requestid"] ?? I.headers["x-amzn-request-id"] ?? I.headers["x-amz-request-id"],
      extendedRequestId: I.headers["x-amz-id-2"],
      cfId: I.headers["x-amz-cf-id"]
    }), "deserializeMetadata"),
    jQ5 = t0((I) => {
      switch (I) {
        case "standard":
          return {
            retryMode: "standard", connectionTimeout: 3100
          };
        case "in-region":
          return {
            retryMode: "standard", connectionTimeout: 1100
          };
        case "cross-region":
          return {
            retryMode: "standard", connectionTimeout: 3100
          };
        case "mobile":
          return {
            retryMode: "standard", connectionTimeout: 30000
          };
        default:
          return {}
      }
    }, "loadConfigsForDefaultMode"),
    Lp0 = !1,
    kQ5 = t0((I) => {
      if (I && !Lp0 && parseInt(I.substring(1, I.indexOf("."))) < 14) Lp0 = !0
    }, "emitWarningIfUnsupportedVersion"),
    xQ5 = t0((I) => {
      let d = [];
      for (let G in cV1.AlgorithmId) {
        let Z = cV1.AlgorithmId[G];
        if (I[Z] === void 0) continue;
        d.push({
          algorithmId: () => Z,
          checksumConstructor: () => I[Z]
        })
      }
      return {
        _checksumAlgorithms: d,
        addChecksumAlgorithm(G) {
          this._checksumAlgorithms.push(G)
        },
        checksumAlgorithms() {
          return this._checksumAlgorithms
        }
      }
    }, "getChecksumConfiguration"),
    cQ5 = t0((I) => {
      let d = {};
      return I.checksumAlgorithms().forEach((G) => {
        d[G.algorithmId()] = G.checksumConstructor()
      }), d
    }, "resolveChecksumRuntimeConfig"),
    pQ5 = t0((I) => {
      let d = I.retryStrategy;
      return {
        setRetryStrategy(G) {
          d = G
        },
        retryStrategy() {
          return d
        }
      }
    }, "getRetryConfiguration"),
    iQ5 = t0((I) => {
      let d = {};
      return d.retryStrategy = I.retryStrategy(), d
    }, "resolveRetryRuntimeConfig"),
    np0 = t0((I) => {
      return {
        ...xQ5(I),
        ...pQ5(I)
      }
    }, "getDefaultExtensionConfiguration"),
    nQ5 = np0,
    rQ5 = t0((I) => {
      return {
        ...cQ5(I),
        ...iQ5(I)
      }
    }, "resolveDefaultRuntimeConfig");

  function oi(I) {
    return encodeURIComponent(I).replace(/[!'()*]/g, function(d) {
      return "%" + d.charCodeAt(0).toString(16).toUpperCase()
    })
  }
  t0(oi, "extendedEncodeURIComponent");
  var aQ5 = t0((I) => Array.isArray(I) ? I : [I], "getArrayIfSingleItem"),
    rp0 = t0((I) => {
      for (let G in I)
        if (I.hasOwnProperty(G) && I[G]["#text"] !== void 0) I[G] = I[G]["#text"];
        else if (typeof I[G] === "object" && I[G] !== null) I[G] = rp0(I[G]);
      return I
    }, "getValueFromTextNode"),
    oy = t0(function() {
      let I = Object.getPrototypeOf(this).constructor,
        G = new(Function.bind.apply(String, [null, ...arguments]));
      return Object.setPrototypeOf(G, I.prototype), G
    }, "StringWrapper");
  oy.prototype = Object.create(String.prototype, {
    constructor: {
      value: oy,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  });
  Object.setPrototypeOf(oy, String);
  var ap0 = class I extends oy {
    deserializeJSON() {
      return JSON.parse(super.toString())
    }
    toJSON() {
      return super.toString()
    }
    static fromObject(d) {
      if (d instanceof I) return d;
      else if (d instanceof String || typeof d === "string") return new I(d);
      return new I(JSON.stringify(d))
    }
  };
  t0(ap0, "LazyJsonString");
  var sQ5 = ap0;

  function tV1(I, d, G) {
    let Z, C, W;
    if (typeof d === "undefined" && typeof G === "undefined") Z = {}, W = I;
    else if (Z = I, typeof d === "function") return C = d, W = G, tQ5(Z, C, W);
    else W = d;
    for (let w of Object.keys(W)) {
      if (!Array.isArray(W[w])) {
        Z[w] = W[w];
        continue
      }
      sp0(Z, null, W, w)
    }
    return Z
  }
  t0(tV1, "map");
  var oQ5 = t0((I) => {
      let d = {};
      for (let [G, Z] of Object.entries(I || {})) d[G] = [, Z];
      return d
    }, "convertMap"),
    eQ5 = t0((I, d) => {
      let G = {};
      for (let Z in d) sp0(G, I, d, Z);
      return G
    }, "take"),
    tQ5 = t0((I, d, G) => {
      return tV1(I, Object.entries(G).reduce((Z, [C, W]) => {
        if (Array.isArray(W)) Z[C] = W;
        else if (typeof W === "function") Z[C] = [d, W()];
        else Z[C] = [d, W];
        return Z
      }, {}))
    }, "mapWithFilter"),
    sp0 = t0((I, d, G, Z) => {
      if (d !== null) {
        let w = G[Z];
        if (typeof w === "function") w = [, w];
        let [B = If5, A = df5, V = Z] = w;
        if (typeof B === "function" && B(d[V]) || typeof B !== "function" && !!B) I[Z] = A(d[V]);
        return
      }
      let [C, W] = G[Z];
      if (typeof W === "function") {
        let w, B = C === void 0 && (w = W()) != null,
          A = typeof C === "function" && !!C(void 0) || typeof C !== "function" && !!C;
        if (B) I[Z] = w;
        else if (A) I[Z] = W()
      } else {
        let w = C === void 0 && W != null,
          B = typeof C === "function" && !!C(W) || typeof C !== "function" && !!C;
        if (w || B) I[Z] = W
      }
    }, "applyInstruction"),
    If5 = t0((I) => I != null, "nonNullish"),
    df5 = t0((I) => I, "pass"),
    Gf5 = t0((I, d, G, Z, C, W) => {
      if (d != null && d[G] !== void 0) {
        let w = Z();
        if (w.length <= 0) throw new Error("Empty value provided for input HTTP label: " + G + ".");
        I = I.replace(C, W ? w.split("/").map((B) => oi(B)).join("/") : oi(w))
      } else throw new Error("No value provided for input HTTP label: " + G + ".");
      return I
    }, "resolvedPath"),
    Zf5 = t0((I) => {
      if (I !== I) return "NaN";
      switch (I) {
        case 1 / 0:
          return "Infinity";
        case -1 / 0:
          return "-Infinity";
        default:
          return I
      }
    }, "serializeFloat"),
    rV1 = t0((I) => {
      if (I == null) return {};
      if (Array.isArray(I)) return I.filter((d) => d != null).map(rV1);
      if (typeof I === "object") {
        let d = {};
        for (let G of Object.keys(I)) {
          if (I[G] == null) continue;
          d[G] = rV1(I[G])
        }
        return d
      }
      return I
    }, "_json");

  function op0(I, d, G) {
    if (G <= 0 || !Number.isInteger(G)) throw new Error("Invalid number of delimiters (" + G + ") for splitEvery.");
    let Z = I.split(d);
    if (G === 1) return Z;
    let C = [],
      W = "";
    for (let w = 0; w < Z.length; w++) {
      if (W === "") W = Z[w];
      else W += d + Z[w];
      if ((w + 1) % G === 0) C.push(W), W = ""
    }
    if (W !== "") C.push(W);
    return C
  }
  t0(op0, "splitEvery")
})
// @from(Start 3261086, End 3262225)
ey = Y((tp0) => {
  Object.defineProperty(tp0, "__esModule", {
    value: !0
  });
  tp0.getHostHeaderPlugin = tp0.hostHeaderMiddlewareOptions = tp0.hostHeaderMiddleware = tp0.resolveHostHeaderConfig = void 0;
  var Cf5 = t8();

  function Wf5(I) {
    return I
  }
  tp0.resolveHostHeaderConfig = Wf5;
  var wf5 = (I) => (d) => async (G) => {
    if (!Cf5.HttpRequest.isInstance(G.request)) return d(G);
    let {
      request: Z
    } = G, {
      handlerProtocol: C = ""
    } = I.requestHandler.metadata || {};
    if (C.indexOf("h2") >= 0 && !Z.headers[":authority"]) delete Z.headers.host, Z.headers[":authority"] = "";
    else if (!Z.headers.host) {
      let W = Z.hostname;
      if (Z.port != null) W += `:${Z.port}`;
      Z.headers.host = W
    }
    return d(G)
  };
  tp0.hostHeaderMiddleware = wf5;
  tp0.hostHeaderMiddlewareOptions = {
    name: "hostHeaderMiddleware",
    step: "build",
    priority: "low",
    tags: ["HOST"],
    override: !0
  };
  var Bf5 = (I) => ({
    applyToStack: (d) => {
      d.add(tp0.hostHeaderMiddleware(I), tp0.hostHeaderMiddlewareOptions)
    }
  });
  tp0.getHostHeaderPlugin = Bf5
})
// @from(Start 3262231, End 3264047)
Bi0 = Y((Zi0) => {
  Object.defineProperty(Zi0, "__esModule", {
    value: !0
  });
  Zi0.getLoggerPlugin = Zi0.loggerMiddlewareOptions = Zi0.loggerMiddleware = void 0;
  var Vf5 = () => (I, d) => async (G) => {
    var Z, C;
    try {
      let W = await I(G),
        {
          clientName: w,
          commandName: B,
          logger: A,
          dynamoDbDocumentClientOptions: V = {}
        } = d,
        {
          overrideInputFilterSensitiveLog: X,
          overrideOutputFilterSensitiveLog: _
        } = V,
        F = X !== null && X !== void 0 ? X : d.inputFilterSensitiveLog,
        g = _ !== null && _ !== void 0 ? _ : d.outputFilterSensitiveLog,
        {
          $metadata: J,
          ...K
        } = W.output;
      return (Z = A === null || A === void 0 ? void 0 : A.info) === null || Z === void 0 || Z.call(A, {
        clientName: w,
        commandName: B,
        input: F(G.input),
        output: g(K),
        metadata: J
      }), W
    } catch (W) {
      let {
        clientName: w,
        commandName: B,
        logger: A,
        dynamoDbDocumentClientOptions: V = {}
      } = d, {
        overrideInputFilterSensitiveLog: X
      } = V, _ = X !== null && X !== void 0 ? X : d.inputFilterSensitiveLog;
      throw (C = A === null || A === void 0 ? void 0 : A.error) === null || C === void 0 || C.call(A, {
        clientName: w,
        commandName: B,
        input: _(G.input),
        error: W,
        metadata: W.$metadata
      }), W
    }
  };
  Zi0.loggerMiddleware = Vf5;
  Zi0.loggerMiddlewareOptions = {
    name: "loggerMiddleware",
    tags: ["LOGGER"],
    step: "initialize",
    override: !0
  };
  var Xf5 = (I) => ({
    applyToStack: (d) => {
      d.add(Zi0.loggerMiddleware(), Zi0.loggerMiddlewareOptions)
    }
  });
  Zi0.getLoggerPlugin = Xf5
})
// @from(Start 3264053, End 3264187)
ty = Y((IX1) => {
  Object.defineProperty(IX1, "__esModule", {
    value: !0
  });
  var Yf5 = x1();
  Yf5.__exportStar(Bi0(), IX1)
})
// @from(Start 3264193, End 3265366)
IP = Y((Vi0) => {
  Object.defineProperty(Vi0, "__esModule", {
    value: !0
  });
  Vi0.getRecursionDetectionPlugin = Vi0.addRecursionDetectionMiddlewareOptions = Vi0.recursionDetectionMiddleware = void 0;
  var _f5 = t8(),
    Ai0 = "X-Amzn-Trace-Id",
    Df5 = "AWS_LAMBDA_FUNCTION_NAME",
    Hf5 = "_X_AMZN_TRACE_ID",
    Ff5 = (I) => (d) => async (G) => {
      let {
        request: Z
      } = G;
      if (!_f5.HttpRequest.isInstance(Z) || I.runtime !== "node" || Z.headers.hasOwnProperty(Ai0)) return d(G);
      let C = process.env[Df5],
        W = process.env[Hf5],
        w = (B) => typeof B === "string" && B.length > 0;
      if (w(C) && w(W)) Z.headers[Ai0] = W;
      return d({
        ...G,
        request: Z
      })
    };
  Vi0.recursionDetectionMiddleware = Ff5;
  Vi0.addRecursionDetectionMiddlewareOptions = {
    step: "build",
    tags: ["RECURSION_DETECTION"],
    name: "recursionDetectionMiddleware",
    override: !0,
    priority: "low"
  };
  var gf5 = (I) => ({
    applyToStack: (d) => {
      d.add(Vi0.recursionDetectionMiddleware(I), Vi0.addRecursionDetectionMiddlewareOptions)
    }
  });
  Vi0.getRecursionDetectionPlugin = gf5
})
// @from(Start 3265372, End 3268178)
x3 = Y((lG3, Ji0) => {
  var {
    defineProperty: ti,
    getOwnPropertyDescriptor: Jf5,
    getOwnPropertyNames: Kf5
  } = Object, Nf5 = Object.prototype.hasOwnProperty, zJ = (I, d) => ti(I, "name", {
    value: d,
    configurable: !0
  }), zf5 = (I, d) => {
    for (var G in d) ti(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, Qf5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of Kf5(d))
        if (!Nf5.call(I, C) && C !== G) ti(I, C, {
          get: () => d[C],
          enumerable: !(Z = Jf5(d, C)) || Z.enumerable
        })
    }
    return I
  }, ff5 = (I) => Qf5(ti({}, "__esModule", {
    value: !0
  }), I), Di0 = {};
  zf5(Di0, {
    CredentialsProviderError: () => qf5,
    ProviderError: () => In,
    TokenProviderError: () => Rf5,
    chain: () => Uf5,
    fromStatic: () => vf5,
    memoize: () => Ef5
  });
  Ji0.exports = ff5(Di0);
  var Hi0 = class I extends Error {
    constructor(d, G = !0) {
      super(d);
      this.tryNextLink = G, this.name = "ProviderError", Object.setPrototypeOf(this, I.prototype)
    }
    static from(d, G = !0) {
      return Object.assign(new this(d.message, G), d)
    }
  };
  zJ(Hi0, "ProviderError");
  var In = Hi0,
    Fi0 = class I extends In {
      constructor(d, G = !0) {
        super(d, G);
        this.tryNextLink = G, this.name = "CredentialsProviderError", Object.setPrototypeOf(this, I.prototype)
      }
    };
  zJ(Fi0, "CredentialsProviderError");
  var qf5 = Fi0,
    gi0 = class I extends In {
      constructor(d, G = !0) {
        super(d, G);
        this.tryNextLink = G, this.name = "TokenProviderError", Object.setPrototypeOf(this, I.prototype)
      }
    };
  zJ(gi0, "TokenProviderError");
  var Rf5 = gi0,
    Uf5 = zJ((...I) => async () => {
      if (I.length === 0) throw new In("No providers in chain");
      let d;
      for (let G of I) try {
        return await G()
      } catch (Z) {
        if (d = Z, Z == null ? void 0 : Z.tryNextLink) continue;
        throw Z
      }
      throw d
    }, "chain"),
    vf5 = zJ((I) => () => Promise.resolve(I), "fromStatic"),
    Ef5 = zJ((I, d, G) => {
      let Z, C, W, w = !1,
        B = zJ(async () => {
          if (!C) C = I();
          try {
            Z = await C, W = !0, w = !1
          } finally {
            C = void 0
          }
          return Z
        }, "coalesceProvider");
      if (d === void 0) return async (A) => {
        if (!W || (A == null ? void 0 : A.forceRefresh)) Z = await B();
        return Z
      };
      return async (A) => {
        if (!W || (A == null ? void 0 : A.forceRefresh)) Z = await B();
        if (w) return Z;
        if (G && !G(Z)) return w = !0, Z;
        if (d(Z)) return await B(), Z;
        return Z
      }
    }, "memoize")
})
// @from(Start 3268184, End 3269275)
Fq = Y((bG3, Qi0) => {
  var {
    defineProperty: dn,
    getOwnPropertyDescriptor: Mf5,
    getOwnPropertyNames: Sf5
  } = Object, Lf5 = Object.prototype.hasOwnProperty, Ni0 = (I, d) => dn(I, "name", {
    value: d,
    configurable: !0
  }), yf5 = (I, d) => {
    for (var G in d) dn(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, Pf5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of Sf5(d))
        if (!Lf5.call(I, C) && C !== G) dn(I, C, {
          get: () => d[C],
          enumerable: !(Z = Mf5(d, C)) || Z.enumerable
        })
    }
    return I
  }, $f5 = (I) => Pf5(dn({}, "__esModule", {
    value: !0
  }), I), zi0 = {};
  yf5(zi0, {
    getSmithyContext: () => uf5,
    normalizeProvider: () => Tf5
  });
  Qi0.exports = $f5(zi0);
  var Ki0 = k3(),
    uf5 = Ni0((I) => I[Ki0.SMITHY_CONTEXT_KEY] || (I[Ki0.SMITHY_CONTEXT_KEY] = {}), "getSmithyContext"),
    Tf5 = Ni0((I) => {
      if (typeof I === "function") return I;
      let d = Promise.resolve(I);
      return () => d
    }, "normalizeProvider")
})
// @from(Start 3269281, End 3270229)
Ri0 = Y((hG3, qi0) => {
  var {
    defineProperty: Gn,
    getOwnPropertyDescriptor: Of5,
    getOwnPropertyNames: mf5
  } = Object, lf5 = Object.prototype.hasOwnProperty, bf5 = (I, d) => Gn(I, "name", {
    value: d,
    configurable: !0
  }), hf5 = (I, d) => {
    for (var G in d) Gn(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, jf5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of mf5(d))
        if (!lf5.call(I, C) && C !== G) Gn(I, C, {
          get: () => d[C],
          enumerable: !(Z = Of5(d, C)) || Z.enumerable
        })
    }
    return I
  }, kf5 = (I) => jf5(Gn({}, "__esModule", {
    value: !0
  }), I), fi0 = {};
  hf5(fi0, {
    isArrayBuffer: () => xf5
  });
  qi0.exports = kf5(fi0);
  var xf5 = bf5((I) => typeof ArrayBuffer === "function" && I instanceof ArrayBuffer || Object.prototype.toString.call(I) === "[object ArrayBuffer]", "isArrayBuffer")
})
// @from(Start 3270235, End 3285629)
ci0 = Y((jG3, xi0) => {
  var {
    defineProperty: Bn,
    getOwnPropertyDescriptor: cf5,
    getOwnPropertyNames: pf5
  } = Object, if5 = Object.prototype.hasOwnProperty, E6 = (I, d) => Bn(I, "name", {
    value: d,
    configurable: !0
  }), nf5 = (I, d) => {
    for (var G in d) Bn(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, rf5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of pf5(d))
        if (!if5.call(I, C) && C !== G) Bn(I, C, {
          get: () => d[C],
          enumerable: !(Z = cf5(d, C)) || Z.enumerable
        })
    }
    return I
  }, af5 = (I) => rf5(Bn({}, "__esModule", {
    value: !0
  }), I), Si0 = {};
  nf5(Si0, {
    SignatureV4: () => fq5,
    clearCredentialCache: () => _q5,
    createScope: () => Wn,
    getCanonicalHeaders: () => CX1,
    getCanonicalQuery: () => mi0,
    getPayloadHash: () => wn,
    getSigningKey: () => Oi0,
    moveHeadersToQuery: () => ji0,
    prepareRequest: () => wX1
  });
  xi0.exports = af5(Si0);
  var Ui0 = Fq(),
    dX1 = SZ(),
    sf5 = "X-Amz-Algorithm",
    of5 = "X-Amz-Credential",
    Li0 = "X-Amz-Date",
    ef5 = "X-Amz-SignedHeaders",
    tf5 = "X-Amz-Expires",
    yi0 = "X-Amz-Signature",
    Pi0 = "X-Amz-Security-Token",
    $i0 = "authorization",
    ui0 = Li0.toLowerCase(),
    Iq5 = "date",
    dq5 = [$i0, ui0, Iq5],
    Gq5 = yi0.toLowerCase(),
    ZX1 = "x-amz-content-sha256",
    Zq5 = Pi0.toLowerCase(),
    Cq5 = {
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
    },
    Wq5 = /^proxy-/,
    wq5 = /^sec-/,
    GX1 = "AWS4-HMAC-SHA256",
    Bq5 = "AWS4-HMAC-SHA256-PAYLOAD",
    Aq5 = "UNSIGNED-PAYLOAD",
    Vq5 = 50,
    Ti0 = "aws4_request",
    Xq5 = 604800,
    RD = fV1(),
    Yq5 = SZ(),
    gq = {},
    Cn = [],
    Wn = E6((I, d, G) => `${I}/${d}/${G}/${Ti0}`, "createScope"),
    Oi0 = E6(async (I, d, G, Z, C) => {
      let W = await vi0(I, d.secretAccessKey, d.accessKeyId),
        w = `${G}:${Z}:${C}:${RD.toHex(W)}:${d.sessionToken}`;
      if (w in gq) return gq[w];
      Cn.push(w);
      while (Cn.length > Vq5) delete gq[Cn.shift()];
      let B = `AWS4${d.secretAccessKey}`;
      for (let A of [G, Z, C, Ti0]) B = await vi0(I, B, A);
      return gq[w] = B
    }, "getSigningKey"),
    _q5 = E6(() => {
      Cn.length = 0, Object.keys(gq).forEach((I) => {
        delete gq[I]
      })
    }, "clearCredentialCache"),
    vi0 = E6((I, d, G) => {
      let Z = new I(d);
      return Z.update(Yq5.toUint8Array(G)), Z.digest()
    }, "hmac"),
    CX1 = E6(({
      headers: I
    }, d, G) => {
      let Z = {};
      for (let C of Object.keys(I).sort()) {
        if (I[C] == null) continue;
        let W = C.toLowerCase();
        if (W in Cq5 || (d == null ? void 0 : d.has(W)) || Wq5.test(W) || wq5.test(W)) {
          if (!G || G && !G.has(W)) continue
        }
        Z[W] = I[C].trim().replace(/\s+/g, " ")
      }
      return Z
    }, "getCanonicalHeaders"),
    dP = yV1(),
    mi0 = E6(({
      query: I = {}
    }) => {
      let d = [],
        G = {};
      for (let Z of Object.keys(I).sort()) {
        if (Z.toLowerCase() === Gq5) continue;
        d.push(Z);
        let C = I[Z];
        if (typeof C === "string") G[Z] = `${dP.escapeUri(Z)}=${dP.escapeUri(C)}`;
        else if (Array.isArray(C)) G[Z] = C.slice(0).reduce((W, w) => W.concat([`${dP.escapeUri(Z)}=${dP.escapeUri(w)}`]), []).sort().join("&")
      }
      return d.map((Z) => G[Z]).filter((Z) => Z).join("&")
    }, "getCanonicalQuery"),
    Dq5 = Ri0(),
    Hq5 = SZ(),
    wn = E6(async ({
      headers: I,
      body: d
    }, G) => {
      for (let Z of Object.keys(I))
        if (Z.toLowerCase() === ZX1) return I[Z];
      if (d == null) return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
      else if (typeof d === "string" || ArrayBuffer.isView(d) || Dq5.isArrayBuffer(d)) {
        let Z = new G;
        return Z.update(Hq5.toUint8Array(d)), RD.toHex(await Z.digest())
      }
      return Aq5
    }, "getPayloadHash"),
    Ei0 = SZ(),
    li0 = class I {
      format(d) {
        let G = [];
        for (let W of Object.keys(d)) {
          let w = Ei0.fromUtf8(W);
          G.push(Uint8Array.from([w.byteLength]), w, this.formatHeaderValue(d[W]))
        }
        let Z = new Uint8Array(G.reduce((W, w) => W + w.byteLength, 0)),
          C = 0;
        for (let W of G) Z.set(W, C), C += W.byteLength;
        return Z
      }
      formatHeaderValue(d) {
        switch (d.type) {
          case "boolean":
            return Uint8Array.from([d.value ? 0 : 1]);
          case "byte":
            return Uint8Array.from([2, d.value]);
          case "short":
            let G = new DataView(new ArrayBuffer(3));
            return G.setUint8(0, 3), G.setInt16(1, d.value, !1), new Uint8Array(G.buffer);
          case "integer":
            let Z = new DataView(new ArrayBuffer(5));
            return Z.setUint8(0, 4), Z.setInt32(1, d.value, !1), new Uint8Array(Z.buffer);
          case "long":
            let C = new Uint8Array(9);
            return C[0] = 5, C.set(d.value.bytes, 1), C;
          case "binary":
            let W = new DataView(new ArrayBuffer(3 + d.value.byteLength));
            W.setUint8(0, 6), W.setUint16(1, d.value.byteLength, !1);
            let w = new Uint8Array(W.buffer);
            return w.set(d.value, 3), w;
          case "string":
            let B = Ei0.fromUtf8(d.value),
              A = new DataView(new ArrayBuffer(3 + B.byteLength));
            A.setUint8(0, 7), A.setUint16(1, B.byteLength, !1);
            let V = new Uint8Array(A.buffer);
            return V.set(B, 3), V;
          case "timestamp":
            let X = new Uint8Array(9);
            return X[0] = 8, X.set(Jq5.fromNumber(d.value.valueOf()).bytes, 1), X;
          case "uuid":
            if (!gq5.test(d.value)) throw new Error(`Invalid UUID received: ${d.value}`);
            let _ = new Uint8Array(17);
            return _[0] = 9, _.set(RD.fromHex(d.value.replace(/\-/g, "")), 1), _
        }
      }
    };
  E6(li0, "HeaderFormatter");
  var Fq5 = li0,
    gq5 = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
    bi0 = class I {
      constructor(d) {
        if (this.bytes = d, d.byteLength !== 8) throw new Error("Int64 buffers must be exactly 8 bytes")
      }
      static fromNumber(d) {
        if (d > 9223372036854776000 || d < -9223372036854776000) throw new Error(`${d} is too large (or, if negative, too small) to represent as an Int64`);
        let G = new Uint8Array(8);
        for (let Z = 7, C = Math.abs(Math.round(d)); Z > -1 && C > 0; Z--, C /= 256) G[Z] = C;
        if (d < 0) WX1(G);
        return new I(G)
      }
      valueOf() {
        let d = this.bytes.slice(0),
          G = d[0] & 128;
        if (G) WX1(d);
        return parseInt(RD.toHex(d), 16) * (G ? -1 : 1)
      }
      toString() {
        return String(this.valueOf())
      }
    };
  E6(bi0, "Int64");
  var Jq5 = bi0;

  function WX1(I) {
    for (let d = 0; d < 8; d++) I[d] ^= 255;
    for (let d = 7; d > -1; d--)
      if (I[d]++, I[d] !== 0) break
  }
  E6(WX1, "negate");
  var Kq5 = E6((I, d) => {
      I = I.toLowerCase();
      for (let G of Object.keys(d))
        if (I === G.toLowerCase()) return !0;
      return !1
    }, "hasHeader"),
    hi0 = E6(({
      headers: I,
      query: d,
      ...G
    }) => ({
      ...G,
      headers: {
        ...I
      },
      query: d ? Nq5(d) : void 0
    }), "cloneRequest"),
    Nq5 = E6((I) => Object.keys(I).reduce((d, G) => {
      let Z = I[G];
      return {
        ...d,
        [G]: Array.isArray(Z) ? [...Z] : Z
      }
    }, {}), "cloneQuery"),
    ji0 = E6((I, d = {}) => {
      var G;
      let {
        headers: Z,
        query: C = {}
      } = typeof I.clone === "function" ? I.clone() : hi0(I);
      for (let W of Object.keys(Z)) {
        let w = W.toLowerCase();
        if (w.slice(0, 6) === "x-amz-" && !((G = d.unhoistableHeaders) == null ? void 0 : G.has(w))) C[W] = Z[W], delete Z[W]
      }
      return {
        ...I,
        headers: Z,
        query: C
      }
    }, "moveHeadersToQuery"),
    wX1 = E6((I) => {
      I = typeof I.clone === "function" ? I.clone() : hi0(I);
      for (let d of Object.keys(I.headers))
        if (dq5.indexOf(d.toLowerCase()) > -1) delete I.headers[d];
      return I
    }, "prepareRequest"),
    zq5 = E6((I) => Qq5(I).toISOString().replace(/\.\d{3}Z$/, "Z"), "iso8601"),
    Qq5 = E6((I) => {
      if (typeof I === "number") return new Date(I * 1000);
      if (typeof I === "string") {
        if (Number(I)) return new Date(Number(I) * 1000);
        return new Date(I)
      }
      return I
    }, "toDate"),
    ki0 = class I {
      constructor({
        applyChecksum: d,
        credentials: G,
        region: Z,
        service: C,
        sha256: W,
        uriEscapePath: w = !0
      }) {
        this.headerFormatter = new Fq5, this.service = C, this.sha256 = W, this.uriEscapePath = w, this.applyChecksum = typeof d === "boolean" ? d : !0, this.regionProvider = Ui0.normalizeProvider(Z), this.credentialProvider = Ui0.normalizeProvider(G)
      }
      async presign(d, G = {}) {
        let {
          signingDate: Z = new Date,
          expiresIn: C = 3600,
          unsignableHeaders: W,
          unhoistableHeaders: w,
          signableHeaders: B,
          signingRegion: A,
          signingService: V
        } = G, X = await this.credentialProvider();
        this.validateResolvedCredentials(X);
        let _ = A ?? await this.regionProvider(),
          {
            longDate: F,
            shortDate: g
          } = Zn(Z);
        if (C > Xq5) return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
        let J = Wn(g, _, V ?? this.service),
          K = ji0(wX1(d), {
            unhoistableHeaders: w
          });
        if (X.sessionToken) K.query[Pi0] = X.sessionToken;
        K.query[sf5] = GX1, K.query[of5] = `${X.accessKeyId}/${J}`, K.query[Li0] = F, K.query[tf5] = C.toString(10);
        let Q = CX1(K, W, B);
        return K.query[ef5] = Mi0(Q), K.query[yi0] = await this.getSignature(F, J, this.getSigningKey(X, _, g, V), this.createCanonicalRequest(K, Q, await wn(d, this.sha256))), K
      }
      async sign(d, G) {
        if (typeof d === "string") return this.signString(d, G);
        else if (d.headers && d.payload) return this.signEvent(d, G);
        else if (d.message) return this.signMessage(d, G);
        else return this.signRequest(d, G)
      }
      async signEvent({
        headers: d,
        payload: G
      }, {
        signingDate: Z = new Date,
        priorSignature: C,
        signingRegion: W,
        signingService: w
      }) {
        let B = W ?? await this.regionProvider(),
          {
            shortDate: A,
            longDate: V
          } = Zn(Z),
          X = Wn(A, B, w ?? this.service),
          _ = await wn({
            headers: {},
            body: G
          }, this.sha256),
          F = new this.sha256;
        F.update(d);
        let g = RD.toHex(await F.digest()),
          J = [Bq5, V, X, C, g, _].join(`
`);
        return this.signString(J, {
          signingDate: Z,
          signingRegion: B,
          signingService: w
        })
      }
      async signMessage(d, {
        signingDate: G = new Date,
        signingRegion: Z,
        signingService: C
      }) {
        return this.signEvent({
          headers: this.headerFormatter.format(d.message.headers),
          payload: d.message.body
        }, {
          signingDate: G,
          signingRegion: Z,
          signingService: C,
          priorSignature: d.priorSignature
        }).then((w) => {
          return {
            message: d.message,
            signature: w
          }
        })
      }
      async signString(d, {
        signingDate: G = new Date,
        signingRegion: Z,
        signingService: C
      } = {}) {
        let W = await this.credentialProvider();
        this.validateResolvedCredentials(W);
        let w = Z ?? await this.regionProvider(),
          {
            shortDate: B
          } = Zn(G),
          A = new this.sha256(await this.getSigningKey(W, w, B, C));
        return A.update(dX1.toUint8Array(d)), RD.toHex(await A.digest())
      }
      async signRequest(d, {
        signingDate: G = new Date,
        signableHeaders: Z,
        unsignableHeaders: C,
        signingRegion: W,
        signingService: w
      } = {}) {
        let B = await this.credentialProvider();
        this.validateResolvedCredentials(B);
        let A = W ?? await this.regionProvider(),
          V = wX1(d),
          {
            longDate: X,
            shortDate: _
          } = Zn(G),
          F = Wn(_, A, w ?? this.service);
        if (V.headers[ui0] = X, B.sessionToken) V.headers[Zq5] = B.sessionToken;
        let g = await wn(V, this.sha256);
        if (!Kq5(ZX1, V.headers) && this.applyChecksum) V.headers[ZX1] = g;
        let J = CX1(V, C, Z),
          K = await this.getSignature(X, F, this.getSigningKey(B, A, _, w), this.createCanonicalRequest(V, J, g));
        return V.headers[$i0] = `${GX1} Credential=${B.accessKeyId}/${F}, SignedHeaders=${Mi0(J)}, Signature=${K}`, V
      }
      createCanonicalRequest(d, G, Z) {
        let C = Object.keys(G).sort();
        return `${d.method}
${this.getCanonicalPath(d)}
${mi0(d)}
${C.map((W)=>`${W}:${G[W]}`).join(`
`)}

${C.join(";")}
${Z}`
      }
      async createStringToSign(d, G, Z) {
        let C = new this.sha256;
        C.update(dX1.toUint8Array(Z));
        let W = await C.digest();
        return `${GX1}
${d}
${G}
${RD.toHex(W)}`
      }
      getCanonicalPath({
        path: d
      }) {
        if (this.uriEscapePath) {
          let G = [];
          for (let W of d.split("/")) {
            if ((W == null ? void 0 : W.length) === 0) continue;
            if (W === ".") continue;
            if (W === "..") G.pop();
            else G.push(W)
          }
          let Z = `${(d==null?void 0:d.startsWith("/"))?"/":""}${G.join("/")}${G.length>0&&(d==null?void 0:d.endsWith("/"))?"/":""}`;
          return dP.escapeUri(Z).replace(/%2F/g, "/")
        }
        return d
      }
      async getSignature(d, G, Z, C) {
        let W = await this.createStringToSign(d, G, C),
          w = new this.sha256(await Z);
        return w.update(dX1.toUint8Array(W)), RD.toHex(await w.digest())
      }
      getSigningKey(d, G, Z, C) {
        return Oi0(this.sha256, d, Z, G, C || this.service)
      }
      validateResolvedCredentials(d) {
        if (typeof d !== "object" || typeof d.accessKeyId !== "string" || typeof d.secretAccessKey !== "string") throw new Error("Resolved credential object is not valid")
      }
    };
  E6(ki0, "SignatureV4");
  var fq5 = ki0,
    Zn = E6((I) => {
      let d = zq5(I).replace(/[\-:]/g, "");
      return {
        longDate: d,
        shortDate: d.slice(0, 8)
      }
    }, "formatDate"),
    Mi0 = E6((I) => Object.keys(I).sort().join(";"), "getCanonicalHeaderList")
})
// @from(Start 3285635, End 3288639)
ri0 = Y((ii0) => {
  Object.defineProperty(ii0, "__esModule", {
    value: !0
  });
  ii0.resolveSigV4AuthConfig = ii0.resolveAwsAuthConfig = void 0;
  var qq5 = x3(),
    BX1 = ci0(),
    Jq = Fq(),
    Rq5 = 300000,
    Uq5 = (I) => {
      let d = I.credentials ? pi0(I.credentials) : I.credentialDefaultProvider(I),
        {
          signingEscapePath: G = !0,
          systemClockOffset: Z = I.systemClockOffset || 0,
          sha256: C
        } = I,
        W;
      if (I.signer) W = Jq.normalizeProvider(I.signer);
      else if (I.regionInfoProvider) W = () => Jq.normalizeProvider(I.region)().then(async (w) => [await I.regionInfoProvider(w, {
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
        return new(I.signerConstructor || BX1.SignatureV4)(X)
      });
      else W = async (w) => {
        w = Object.assign({}, {
          name: "sigv4",
          signingName: I.signingName || I.defaultSigningName,
          signingRegion: await Jq.normalizeProvider(I.region)(),
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
        return new(I.signerConstructor || BX1.SignatureV4)(V)
      };
      return {
        ...I,
        systemClockOffset: Z,
        signingEscapePath: G,
        credentials: d,
        signer: W
      }
    };
  ii0.resolveAwsAuthConfig = Uq5;
  var vq5 = (I) => {
    let d = I.credentials ? pi0(I.credentials) : I.credentialDefaultProvider(I),
      {
        signingEscapePath: G = !0,
        systemClockOffset: Z = I.systemClockOffset || 0,
        sha256: C
      } = I,
      W;
    if (I.signer) W = Jq.normalizeProvider(I.signer);
    else W = Jq.normalizeProvider(new BX1.SignatureV4({
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
  ii0.resolveSigV4AuthConfig = vq5;
  var pi0 = (I) => {
    if (typeof I === "function") return qq5.memoize(I, (d) => d.expiration !== void 0 && d.expiration.getTime() - Date.now() < Rq5, (d) => d.expiration !== void 0);
    return Jq.normalizeProvider(I)
  }
})
// @from(Start 3288645, End 3288846)
AX1 = Y((ai0) => {
  Object.defineProperty(ai0, "__esModule", {
    value: !0
  });
  ai0.getSkewCorrectedDate = void 0;
  var Mq5 = (I) => new Date(Date.now() + I);
  ai0.getSkewCorrectedDate = Mq5
})
// @from(Start 3288852, End 3289096)
ti0 = Y((oi0) => {
  Object.defineProperty(oi0, "__esModule", {
    value: !0
  });
  oi0.isClockSkewed = void 0;
  var Sq5 = AX1(),
    Lq5 = (I, d) => Math.abs(Sq5.getSkewCorrectedDate(d).getTime() - I) >= 300000;
  oi0.isClockSkewed = Lq5
})
// @from(Start 3289102, End 3289422)
Gn0 = Y((In0) => {
  Object.defineProperty(In0, "__esModule", {
    value: !0
  });
  In0.getUpdatedSystemClockOffset = void 0;
  var yq5 = ti0(),
    Pq5 = (I, d) => {
      let G = Date.parse(I);
      if (yq5.isClockSkewed(G, d)) return G - Date.now();
      return d
    };
  In0.getUpdatedSystemClockOffset = Pq5
})