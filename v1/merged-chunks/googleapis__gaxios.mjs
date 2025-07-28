
// @from(Start 3669507, End 3669965)
b72 = Y((m72) => {
  Object.defineProperty(m72, "__esModule", {
    value: !0
  });
  m72.default = void 0;
  var Tx5 = Ox5(B1("crypto"));

  function Ox5(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }

  function mx5(I) {
    if (Array.isArray(I)) I = Buffer.from(I);
    else if (typeof I === "string") I = Buffer.from(I, "utf8");
    return Tx5.default.createHash("md5").update(I).digest()
  }
  var lx5 = mx5;
  m72.default = lx5
})
// @from(Start 3669971, End 3670295)
x72 = Y((j72) => {
  Object.defineProperty(j72, "__esModule", {
    value: !0
  });
  j72.default = void 0;
  var bx5 = h72(hD1()),
    hx5 = h72(b72());

  function h72(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }
  var jx5 = bx5.default("v3", 48, hx5.default),
    kx5 = jx5;
  j72.default = kx5
})
// @from(Start 3670301, End 3670605)
i72 = Y((c72) => {
  Object.defineProperty(c72, "__esModule", {
    value: !0
  });
  c72.default = void 0;
  var xx5 = cx5(B1("crypto"));

  function cx5(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }
  var px5 = {
    randomUUID: xx5.default.randomUUID
  };
  c72.default = px5
})
// @from(Start 3670611, End 3671265)
o72 = Y((a72) => {
  Object.defineProperty(a72, "__esModule", {
    value: !0
  });
  a72.default = void 0;
  var n72 = r72(i72()),
    ix5 = r72(TD1()),
    nx5 = pP();

  function r72(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }

  function rx5(I, d, G) {
    if (n72.default.randomUUID && !d && !I) return n72.default.randomUUID();
    I = I || {};
    let Z = I.random || (I.rng || ix5.default)();
    if (Z[6] = Z[6] & 15 | 64, Z[8] = Z[8] & 63 | 128, d) {
      G = G || 0;
      for (let C = 0; C < 16; ++C) d[G + C] = Z[C];
      return d
    }
    return nx5.unsafeStringify(Z)
  }
  var ax5 = rx5;
  a72.default = ax5
})
// @from(Start 3671271, End 3671730)
II2 = Y((e72) => {
  Object.defineProperty(e72, "__esModule", {
    value: !0
  });
  e72.default = void 0;
  var sx5 = ox5(B1("crypto"));

  function ox5(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }

  function ex5(I) {
    if (Array.isArray(I)) I = Buffer.from(I);
    else if (typeof I === "string") I = Buffer.from(I, "utf8");
    return sx5.default.createHash("sha1").update(I).digest()
  }
  var tx5 = ex5;
  e72.default = tx5
})
// @from(Start 3671736, End 3672060)
CI2 = Y((GI2) => {
  Object.defineProperty(GI2, "__esModule", {
    value: !0
  });
  GI2.default = void 0;
  var Ic5 = dI2(hD1()),
    dc5 = dI2(II2());

  function dI2(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }
  var Gc5 = Ic5.default("v5", 80, dc5.default),
    Zc5 = Gc5;
  GI2.default = Zc5
})
// @from(Start 3672066, End 3672248)
BI2 = Y((WI2) => {
  Object.defineProperty(WI2, "__esModule", {
    value: !0
  });
  WI2.default = void 0;
  var Cc5 = "00000000-0000-0000-0000-000000000000";
  WI2.default = Cc5
})
// @from(Start 3672254, End 3672633)
XI2 = Y((AI2) => {
  Object.defineProperty(AI2, "__esModule", {
    value: !0
  });
  AI2.default = void 0;
  var Wc5 = wc5(cP());

  function wc5(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }

  function Bc5(I) {
    if (!Wc5.default(I)) throw TypeError("Invalid UUID");
    return parseInt(I.slice(14, 15), 16)
  }
  var Ac5 = Bc5;
  AI2.default = Ac5
})
// @from(Start 3672639, End 3674053)
YI2 = Y((IW) => {
  Object.defineProperty(IW, "__esModule", {
    value: !0
  });
  Object.defineProperty(IW, "NIL", {
    enumerable: !0,
    get: function() {
      return Dc5.default
    }
  });
  Object.defineProperty(IW, "parse", {
    enumerable: !0,
    get: function() {
      return Jc5.default
    }
  });
  Object.defineProperty(IW, "stringify", {
    enumerable: !0,
    get: function() {
      return gc5.default
    }
  });
  Object.defineProperty(IW, "v1", {
    enumerable: !0,
    get: function() {
      return Vc5.default
    }
  });
  Object.defineProperty(IW, "v3", {
    enumerable: !0,
    get: function() {
      return Xc5.default
    }
  });
  Object.defineProperty(IW, "v4", {
    enumerable: !0,
    get: function() {
      return Yc5.default
    }
  });
  Object.defineProperty(IW, "v5", {
    enumerable: !0,
    get: function() {
      return _c5.default
    }
  });
  Object.defineProperty(IW, "validate", {
    enumerable: !0,
    get: function() {
      return Fc5.default
    }
  });
  Object.defineProperty(IW, "version", {
    enumerable: !0,
    get: function() {
      return Hc5.default
    }
  });
  var Vc5 = nV(L72()),
    Xc5 = nV(x72()),
    Yc5 = nV(o72()),
    _c5 = nV(CI2()),
    Dc5 = nV(BI2()),
    Hc5 = nV(XI2()),
    Fc5 = nV(cP()),
    gc5 = nV(pP()),
    Jc5 = nV(bD1());

  function nV(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }
})
// @from(Start 3674059, End 3674250)
jD1 = Y((DI2) => {
  Object.defineProperty(DI2, "__esModule", {
    value: !0
  });
  DI2.GaxiosInterceptorManager = void 0;
  class _I2 extends Set {}
  DI2.GaxiosInterceptorManager = _I2
})
// @from(Start 3674256, End 3676071)
JI2 = Y((Yd) => {
  var Kc5 = Yd && Yd.__createBinding || (Object.create ? function(I, d, G, Z) {
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
    Nc5 = Yd && Yd.__setModuleDefault || (Object.create ? function(I, d) {
      Object.defineProperty(I, "default", {
        enumerable: !0,
        value: d
      })
    } : function(I, d) {
      I.default = d
    }),
    FI2 = Yd && Yd.__importStar || function(I) {
      if (I && I.__esModule) return I;
      var d = {};
      if (I != null) {
        for (var G in I)
          if (G !== "default" && Object.prototype.hasOwnProperty.call(I, G)) Kc5(d, I, G)
      }
      return Nc5(d, I), d
    };
  Object.defineProperty(Yd, "__esModule", {
    value: !0
  });
  Yd.req = Yd.json = Yd.toBuffer = void 0;
  var zc5 = FI2(B1("http")),
    Qc5 = FI2(B1("https"));
  async function gI2(I) {
    let d = 0,
      G = [];
    for await (let Z of I) d += Z.length, G.push(Z);
    return Buffer.concat(G, d)
  }
  Yd.toBuffer = gI2;
  async function fc5(I) {
    let G = (await gI2(I)).toString("utf8");
    try {
      return JSON.parse(G)
    } catch (Z) {
      let C = Z;
      throw C.message += ` (input: ${G})`, C
    }
  }
  Yd.json = fc5;

  function qc5(I, d = {}) {
    let Z = ((typeof I === "string" ? I : I.href).startsWith("https:") ? Qc5 : zc5).request(I, d),
      C = new Promise((W, w) => {
        Z.once("response", W).once("error", w).end()
      });
    return Z.then = C.then.bind(C), Z
  }
  Yd.req = qc5
})
// @from(Start 3676077, End 3679861)
fI2 = Y((wG) => {
  var NI2 = wG && wG.__createBinding || (Object.create ? function(I, d, G, Z) {
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
    Rc5 = wG && wG.__setModuleDefault || (Object.create ? function(I, d) {
      Object.defineProperty(I, "default", {
        enumerable: !0,
        value: d
      })
    } : function(I, d) {
      I.default = d
    }),
    zI2 = wG && wG.__importStar || function(I) {
      if (I && I.__esModule) return I;
      var d = {};
      if (I != null) {
        for (var G in I)
          if (G !== "default" && Object.prototype.hasOwnProperty.call(I, G)) NI2(d, I, G)
      }
      return Rc5(d, I), d
    },
    Uc5 = wG && wG.__exportStar || function(I, d) {
      for (var G in I)
        if (G !== "default" && !Object.prototype.hasOwnProperty.call(d, G)) NI2(d, I, G)
    };
  Object.defineProperty(wG, "__esModule", {
    value: !0
  });
  wG.Agent = void 0;
  var vc5 = zI2(B1("net")),
    KI2 = zI2(B1("http")),
    Ec5 = B1("https");
  Uc5(JI2(), wG);
  var fB = Symbol("AgentBaseInternalState");
  class QI2 extends KI2.Agent {
    constructor(I) {
      super(I);
      this[fB] = {}
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
    incrementSockets(I) {
      if (this.maxSockets === 1 / 0 && this.maxTotalSockets === 1 / 0) return null;
      if (!this.sockets[I]) this.sockets[I] = [];
      let d = new vc5.Socket({
        writable: !1
      });
      return this.sockets[I].push(d), this.totalSocketCount++, d
    }
    decrementSockets(I, d) {
      if (!this.sockets[I] || d === null) return;
      let G = this.sockets[I],
        Z = G.indexOf(d);
      if (Z !== -1) {
        if (G.splice(Z, 1), this.totalSocketCount--, G.length === 0) delete this.sockets[I]
      }
    }
    getName(I) {
      if (typeof I.secureEndpoint === "boolean" ? I.secureEndpoint : this.isSecureEndpoint(I)) return Ec5.Agent.prototype.getName.call(this, I);
      return super.getName(I)
    }
    createSocket(I, d, G) {
      let Z = {
          ...d,
          secureEndpoint: this.isSecureEndpoint(d)
        },
        C = this.getName(Z),
        W = this.incrementSockets(C);
      Promise.resolve().then(() => this.connect(I, Z)).then((w) => {
        if (this.decrementSockets(C, W), w instanceof KI2.Agent) try {
          return w.addRequest(I, Z)
        } catch (B) {
          return G(B)
        }
        this[fB].currentSocket = w, super.createSocket(I, d, G)
      }, (w) => {
        this.decrementSockets(C, W), G(w)
      })
    }
    createConnection() {
      let I = this[fB].currentSocket;
      if (this[fB].currentSocket = void 0, !I) throw new Error("No socket was returned in the `connect()` function");
      return I
    }
    get defaultPort() {
      return this[fB].defaultPort ?? (this.protocol === "https:" ? 443 : 80)
    }
    set defaultPort(I) {
      if (this[fB]) this[fB].defaultPort = I
    }
    get protocol() {
      return this[fB].protocol ?? (this.isSecureEndpoint() ? "https:" : "http:")
    }
    set protocol(I) {
      if (this[fB]) this[fB].protocol = I
    }
  }
  wG.Agent = QI2
})
// @from(Start 3679867, End 3682006)
qI2 = Y((mq) => {
  var Mc5 = mq && mq.__importDefault || function(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  };
  Object.defineProperty(mq, "__esModule", {
    value: !0
  });
  mq.parseProxyResponse = void 0;
  var Sc5 = Mc5(qS()),
    Tr = Sc5.default("https-proxy-agent:parse-proxy-response");

  function Lc5(I) {
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
        w(), Tr("onend"), G(new Error("Proxy connection ended before receiving CONNECT response"))
      }

      function A(X) {
        w(), Tr("onerror %o", X), G(X)
      }

      function V(X) {
        C.push(X), Z += X.length;
        let _ = Buffer.concat(C, Z),
          F = _.indexOf(`\r
\r
`);
        if (F === -1) {
          Tr("have not received end of HTTP headers yet..."), W();
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
        Tr("got proxy server response: %o %o", J, S), w(), d({
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
  mq.parseProxyResponse = Lc5
})
// @from(Start 3682012, End 3686175)
SI2 = Y((OZ) => {
  var yc5 = OZ && OZ.__createBinding || (Object.create ? function(I, d, G, Z) {
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
    Pc5 = OZ && OZ.__setModuleDefault || (Object.create ? function(I, d) {
      Object.defineProperty(I, "default", {
        enumerable: !0,
        value: d
      })
    } : function(I, d) {
      I.default = d
    }),
    EI2 = OZ && OZ.__importStar || function(I) {
      if (I && I.__esModule) return I;
      var d = {};
      if (I != null) {
        for (var G in I)
          if (G !== "default" && Object.prototype.hasOwnProperty.call(I, G)) yc5(d, I, G)
      }
      return Pc5(d, I), d
    },
    MI2 = OZ && OZ.__importDefault || function(I) {
      return I && I.__esModule ? I : {
        default: I
      }
    };
  Object.defineProperty(OZ, "__esModule", {
    value: !0
  });
  OZ.HttpsProxyAgent = void 0;
  var Or = EI2(B1("net")),
    RI2 = EI2(B1("tls")),
    $c5 = MI2(B1("assert")),
    uc5 = MI2(qS()),
    Tc5 = fI2(),
    Oc5 = B1("url"),
    mc5 = qI2(),
    iP = uc5.default("https-proxy-agent"),
    UI2 = (I) => {
      if (I.servername === void 0 && I.host && !Or.isIP(I.host)) return {
        ...I,
        servername: I.host
      };
      return I
    };
  class kD1 extends Tc5.Agent {
    constructor(I, d) {
      super(d);
      this.options = {
        path: void 0
      }, this.proxy = typeof I === "string" ? new Oc5.URL(I) : I, this.proxyHeaders = d?.headers ?? {}, iP("Creating new HttpsProxyAgent instance: %o", this.proxy.href);
      let G = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, ""),
        Z = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === "https:" ? 443 : 80;
      this.connectOpts = {
        ALPNProtocols: ["http/1.1"],
        ...d ? vI2(d, "headers") : null,
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
      if (G.protocol === "https:") iP("Creating `tls.Socket`: %o", this.connectOpts), Z = RI2.connect(UI2(this.connectOpts));
      else iP("Creating `net.Socket`: %o", this.connectOpts), Z = Or.connect(this.connectOpts);
      let C = typeof this.proxyHeaders === "function" ? this.proxyHeaders() : {
          ...this.proxyHeaders
        },
        W = Or.isIPv6(d.host) ? `[${d.host}]` : d.host,
        w = `CONNECT ${W}:${d.port} HTTP/1.1\r
`;
      if (G.username || G.password) {
        let _ = `${decodeURIComponent(G.username)}:${decodeURIComponent(G.password)}`;
        C["Proxy-Authorization"] = `Basic ${Buffer.from(_).toString("base64")}`
      }
      if (C.Host = `${W}:${d.port}`, !C["Proxy-Connection"]) C["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close";
      for (let _ of Object.keys(C)) w += `${_}: ${C[_]}\r
`;
      let B = mc5.parseProxyResponse(Z);
      Z.write(`${w}\r
`);
      let {
        connect: A,
        buffered: V
      } = await B;
      if (I.emit("proxyConnect", A), this.emit("proxyConnect", A, I), A.statusCode === 200) {
        if (I.once("socket", lc5), d.secureEndpoint) return iP("Upgrading socket connection to TLS"), RI2.connect({
          ...vI2(UI2(d), "host", "path", "port"),
          socket: Z
        });
        return Z
      }
      Z.destroy();
      let X = new Or.Socket({
        writable: !1
      });
      return X.readable = !0, I.once("socket", (_) => {
        iP("Replaying proxy buffer for failed request"), $c5.default(_.listenerCount("data") > 0), _.push(V), _.push(null)
      }), X
    }
  }
  kD1.protocols = ["http", "https"];
  OZ.HttpsProxyAgent = kD1;

  function lc5(I) {
    I.resume()
  }

  function vI2(I, ...d) {
    let G = {},
      Z;
    for (Z in I)
      if (!d.includes(Z)) G[Z] = I[Z];
    return G
  }
})
// @from(Start 3686181, End 3697029)
hI2 = Y((b7) => {
  var bc5 = b7 && b7.__createBinding || (Object.create ? function(I, d, G, Z) {
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
    hc5 = b7 && b7.__setModuleDefault || (Object.create ? function(I, d) {
      Object.defineProperty(I, "default", {
        enumerable: !0,
        value: d
      })
    } : function(I, d) {
      I.default = d
    }),
    jc5 = b7 && b7.__importStar || function(I) {
      if (I && I.__esModule) return I;
      var d = {};
      if (I != null) {
        for (var G in I)
          if (G !== "default" && Object.prototype.hasOwnProperty.call(I, G)) bc5(d, I, G)
      }
      return hc5(d, I), d
    },
    yJ = b7 && b7.__classPrivateFieldGet || function(I, d, G, Z) {
      if (G === "a" && !Z) throw new TypeError("Private accessor was defined without a getter");
      if (typeof d === "function" ? I !== d || !Z : !d.has(I)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return G === "m" ? Z : G === "a" ? Z.call(I) : Z ? Z.value : d.get(I)
    },
    kc5 = b7 && b7.__classPrivateFieldSet || function(I, d, G, Z, C) {
      if (Z === "m") throw new TypeError("Private method is not writable");
      if (Z === "a" && !C) throw new TypeError("Private accessor was defined without a setter");
      if (typeof d === "function" ? I !== d || !C : !d.has(I)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return Z === "a" ? C.call(I, G) : C ? C.value = G : d.set(I, G), G
    },
    br = b7 && b7.__importDefault || function(I) {
      return I && I.__esModule ? I : {
        default: I
      }
    },
    lq, LJ, LI2, OI2, mI2, lI2, mr, yI2;
  Object.defineProperty(b7, "__esModule", {
    value: !0
  });
  b7.Gaxios = void 0;
  var xc5 = br(yD1()),
    cc5 = B1("https"),
    pc5 = br(f41()),
    ic5 = br(B1("querystring")),
    nc5 = br(B72()),
    PI2 = B1("url"),
    lr = uD1(),
    rc5 = J72(),
    $I2 = B1("stream"),
    ac5 = YI2(),
    uI2 = jD1(),
    sc5 = ec5() ? window.fetch : pc5.default;

  function oc5() {
    return typeof window !== "undefined" && !!window
  }

  function ec5() {
    return oc5() && !!window.fetch
  }

  function tc5() {
    return typeof Buffer !== "undefined"
  }

  function TI2(I, d) {
    return !!bI2(I, d)
  }

  function bI2(I, d) {
    d = d.toLowerCase();
    for (let G of Object.keys((I === null || I === void 0 ? void 0 : I.headers) || {}))
      if (d === G.toLowerCase()) return I.headers[G];
    return
  }
  class xD1 {
    constructor(I) {
      lq.add(this), this.agentCache = new Map, this.defaults = I || {}, this.interceptors = {
        request: new uI2.GaxiosInterceptorManager,
        response: new uI2.GaxiosInterceptorManager
      }
    }
    async request(I = {}) {
      return I = await yJ(this, lq, "m", lI2).call(this, I), I = await yJ(this, lq, "m", OI2).call(this, I), yJ(this, lq, "m", mI2).call(this, this._request(I))
    }
    async _defaultAdapter(I) {
      let G = await (I.fetchImplementation || sc5)(I.url, I),
        Z = await this.getResponseData(I, G);
      return this.translateResponse(I, G, Z)
    }
    async _request(I = {}) {
      var d;
      try {
        let G;
        if (I.adapter) G = await I.adapter(I, this._defaultAdapter.bind(this));
        else G = await this._defaultAdapter(I);
        if (!I.validateStatus(G.status)) {
          if (I.responseType === "stream") {
            let Z = "";
            await new Promise((C) => {
              (G === null || G === void 0 ? void 0 : G.data).on("data", (W) => {
                Z += W
              }), (G === null || G === void 0 ? void 0 : G.data).on("end", C)
            }), G.data = Z
          }
          throw new lr.GaxiosError(`Request failed with status code ${G.status}`, I, G)
        }
        return G
      } catch (G) {
        let Z = G instanceof lr.GaxiosError ? G : new lr.GaxiosError(G.message, I, void 0, G),
          {
            shouldRetry: C,
            config: W
          } = await rc5.getRetryConfig(Z);
        if (C && W) return Z.config.retryConfig.currentRetryAttempt = W.retryConfig.currentRetryAttempt, I.retryConfig = (d = Z.config) === null || d === void 0 ? void 0 : d.retryConfig, this._request(I);
        throw Z
      }
    }
    async getResponseData(I, d) {
      switch (I.responseType) {
        case "stream":
          return d.body;
        case "json": {
          let G = await d.text();
          try {
            G = JSON.parse(G)
          } catch (Z) {}
          return G
        }
        case "arraybuffer":
          return d.arrayBuffer();
        case "blob":
          return d.blob();
        case "text":
          return d.text();
        default:
          return this.getResponseDataFromContentType(d)
      }
    }
    validateStatus(I) {
      return I >= 200 && I < 300
    }
    paramsSerializer(I) {
      return ic5.default.stringify(I)
    }
    translateResponse(I, d, G) {
      let Z = {};
      return d.headers.forEach((C, W) => {
        Z[W] = C
      }), {
        config: I,
        data: G,
        headers: Z,
        status: d.status,
        statusText: d.statusText,
        request: {
          responseURL: d.url
        }
      }
    }
    async getResponseDataFromContentType(I) {
      let d = I.headers.get("Content-Type");
      if (d === null) return I.text();
      if (d = d.toLowerCase(), d.includes("application/json")) {
        let G = await I.text();
        try {
          G = JSON.parse(G)
        } catch (Z) {}
        return G
      } else if (d.match(/^text\//)) return I.text();
      else return I.blob()
    }
    async * getMultipartRequest(I, d) {
      let G = `--${d}--`;
      for (let Z of I) {
        let C = Z.headers["Content-Type"] || "application/octet-stream";
        if (yield `--${d}\r
Content-Type: ${C}\r
\r
`, typeof Z.content === "string") yield Z.content;
        else yield* Z.content;
        yield `\r
`
      }
      yield G
    }
  }
  b7.Gaxios = xD1;
  LJ = xD1, lq = new WeakSet, LI2 = function I(d, G = []) {
    var Z, C;
    let W = new PI2.URL(d),
      w = [...G],
      B = ((C = (Z = process.env.NO_PROXY) !== null && Z !== void 0 ? Z : process.env.no_proxy) === null || C === void 0 ? void 0 : C.split(",")) || [];
    for (let A of B) w.push(A.trim());
    for (let A of w)
      if (A instanceof RegExp) {
        if (A.test(W.toString())) return !1
      } else if (A instanceof PI2.URL) {
      if (A.origin === W.origin) return !1
    } else if (A.startsWith("*.") || A.startsWith(".")) {
      let V = A.replace(/^\*\./, ".");
      if (W.hostname.endsWith(V)) return !1
    } else if (A === W.origin || A === W.hostname || A === W.href) return !1;
    return !0
  }, OI2 = async function I(d) {
    let G = Promise.resolve(d);
    for (let Z of this.interceptors.request.values())
      if (Z) G = G.then(Z.resolved, Z.rejected);
    return G
  }, mI2 = async function I(d) {
    let G = Promise.resolve(d);
    for (let Z of this.interceptors.response.values())
      if (Z) G = G.then(Z.resolved, Z.rejected);
    return G
  }, lI2 = async function I(d) {
    var G, Z, C, W;
    let w = xc5.default(!0, {}, this.defaults, d);
    if (!w.url) throw new Error("URL is required.");
    let B = w.baseUrl || w.baseURL;
    if (B) w.url = B.toString() + w.url;
    if (w.paramsSerializer = w.paramsSerializer || this.paramsSerializer, w.params && Object.keys(w.params).length > 0) {
      let X = w.paramsSerializer(w.params);
      if (X.startsWith("?")) X = X.slice(1);
      let _ = w.url.toString().includes("?") ? "&" : "?";
      w.url = w.url + _ + X
    }
    if (typeof d.maxContentLength === "number") w.size = d.maxContentLength;
    if (typeof d.maxRedirects === "number") w.follow = d.maxRedirects;
    if (w.headers = w.headers || {}, w.multipart === void 0 && w.data) {
      let X = typeof FormData === "undefined" ? !1 : (w === null || w === void 0 ? void 0 : w.data) instanceof FormData;
      if (nc5.default.readable(w.data)) w.body = w.data;
      else if (tc5() && Buffer.isBuffer(w.data)) {
        if (w.body = w.data, !TI2(w, "Content-Type")) w.headers["Content-Type"] = "application/json"
      } else if (typeof w.data === "object") {
        if (!X)
          if (bI2(w, "content-type") === "application/x-www-form-urlencoded") w.body = w.paramsSerializer(w.data);
          else {
            if (!TI2(w, "Content-Type")) w.headers["Content-Type"] = "application/json";
            w.body = JSON.stringify(w.data)
          }
      } else w.body = w.data
    } else if (w.multipart && w.multipart.length > 0) {
      let X = ac5.v4();
      w.headers["Content-Type"] = `multipart/related; boundary=${X}`;
      let _ = new $I2.PassThrough;
      w.body = _, $I2.pipeline(this.getMultipartRequest(w.multipart, X), _, () => {})
    }
    if (w.validateStatus = w.validateStatus || this.validateStatus, w.responseType = w.responseType || "unknown", !w.headers.Accept && w.responseType === "json") w.headers.Accept = "application/json";
    w.method = w.method || "GET";
    let A = w.proxy || ((G = process === null || process === void 0 ? void 0 : process.env) === null || G === void 0 ? void 0 : G.HTTPS_PROXY) || ((Z = process === null || process === void 0 ? void 0 : process.env) === null || Z === void 0 ? void 0 : Z.https_proxy) || ((C = process === null || process === void 0 ? void 0 : process.env) === null || C === void 0 ? void 0 : C.HTTP_PROXY) || ((W = process === null || process === void 0 ? void 0 : process.env) === null || W === void 0 ? void 0 : W.http_proxy),
      V = yJ(this, lq, "m", LI2).call(this, w.url, w.noProxy);
    if (w.agent);
    else if (A && V) {
      let X = await yJ(LJ, LJ, "m", yI2).call(LJ);
      if (this.agentCache.has(A)) w.agent = this.agentCache.get(A);
      else w.agent = new X(A, {
        cert: w.cert,
        key: w.key
      }), this.agentCache.set(A, w.agent)
    } else if (w.cert && w.key)
      if (this.agentCache.has(w.key)) w.agent = this.agentCache.get(w.key);
      else w.agent = new cc5.Agent({
        cert: w.cert,
        key: w.key
      }), this.agentCache.set(w.key, w.agent);
    if (typeof w.errorRedactor !== "function" && w.errorRedactor !== !1) w.errorRedactor = lr.defaultErrorRedactor;
    return w
  }, yI2 = async function I() {
    return kc5(this, LJ, yJ(this, LJ, "f", mr) || (await Promise.resolve().then(() => jc5(SI2()))).HttpsProxyAgent, "f", mr), yJ(this, LJ, "f", mr)
  };
  mr = {
    value: void 0
  }
})
// @from(Start 3697035, End 3698223)
dW = Y((YI) => {
  var Ip5 = YI && YI.__createBinding || (Object.create ? function(I, d, G, Z) {
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
    dp5 = YI && YI.__exportStar || function(I, d) {
      for (var G in I)
        if (G !== "default" && !Object.prototype.hasOwnProperty.call(d, G)) Ip5(d, I, G)
    };
  Object.defineProperty(YI, "__esModule", {
    value: !0
  });
  YI.instance = YI.Gaxios = YI.GaxiosError = void 0;
  YI.request = Zp5;
  var jI2 = hI2();
  Object.defineProperty(YI, "Gaxios", {
    enumerable: !0,
    get: function() {
      return jI2.Gaxios
    }
  });
  var Gp5 = uD1();
  Object.defineProperty(YI, "GaxiosError", {
    enumerable: !0,
    get: function() {
      return Gp5.GaxiosError
    }
  });
  dp5(jD1(), YI);
  YI.instance = new jI2.Gaxios;
  async function Zp5(I) {
    return YI.instance.request(I)
  }
})
// @from(Start 3698229, End 3734098)
cD1 = Y((kI2, hr) => {
  (function(I) {
    var d, G = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
      Z = Math.ceil,
      C = Math.floor,
      W = "[BigNumber Error] ",
      w = W + "Number primitive has more than 15 significant digits: ",
      B = 100000000000000,
      A = 14,
      V = 9007199254740991,
      X = [1, 10, 100, 1000, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 10000000000, 100000000000, 1000000000000, 10000000000000],
      _ = 1e7,
      F = 1e9;

    function g(h) {
      var O, T, V1, c = e.prototype = {
          constructor: e,
          toString: null,
          valueOf: null
        },
        c1 = new e(1),
        o1 = 20,
        a1 = 4,
        f1 = -7,
        r = 21,
        A1 = -1e7,
        m1 = 1e7,
        T1 = !1,
        e1 = 1,
        F0 = 0,
        P0 = {
          prefix: "",
          groupSize: 3,
          secondaryGroupSize: 0,
          groupSeparator: ",",
          decimalSeparator: ".",
          fractionGroupSize: 0,
          fractionGroupSeparator: " ",
          suffix: ""
        },
        B0 = "0123456789abcdefghijklmnopqrstuvwxyz",
        a0 = !0;

      function e(k, a) {
        var Z1, Q1, N1, F1, O1, K1, R1, h1, j = this;
        if (!(j instanceof e)) return new e(k, a);
        if (a == null) {
          if (k && k._isBigNumber === !0) {
            if (j.s = k.s, !k.c || k.e > m1) j.c = j.e = null;
            else if (k.e < A1) j.c = [j.e = 0];
            else j.e = k.e, j.c = k.c.slice();
            return
          }
          if ((K1 = typeof k == "number") && k * 0 == 0) {
            if (j.s = 1 / k < 0 ? (k = -k, -1) : 1, k === ~~k) {
              for (F1 = 0, O1 = k; O1 >= 10; O1 /= 10, F1++);
              if (F1 > m1) j.c = j.e = null;
              else j.e = F1, j.c = [k];
              return
            }
            h1 = String(k)
          } else {
            if (!G.test(h1 = String(k))) return V1(j, h1, K1);
            j.s = h1.charCodeAt(0) == 45 ? (h1 = h1.slice(1), -1) : 1
          }
          if ((F1 = h1.indexOf(".")) > -1) h1 = h1.replace(".", "");
          if ((O1 = h1.search(/e/i)) > 0) {
            if (F1 < 0) F1 = O1;
            F1 += +h1.slice(O1 + 1), h1 = h1.substring(0, O1)
          } else if (F1 < 0) F1 = h1.length
        } else {
          if (E(a, 2, B0.length, "Base"), a == 10 && a0) return j = new e(k), i1(j, o1 + j.e + 1, a1);
          if (h1 = String(k), K1 = typeof k == "number") {
            if (k * 0 != 0) return V1(j, h1, K1, a);
            if (j.s = 1 / k < 0 ? (h1 = h1.slice(1), -1) : 1, e.DEBUG && h1.replace(/^0\.0*|\./, "").length > 15) throw Error(w + k)
          } else j.s = h1.charCodeAt(0) === 45 ? (h1 = h1.slice(1), -1) : 1;
          Z1 = B0.slice(0, a), F1 = O1 = 0;
          for (R1 = h1.length; O1 < R1; O1++)
            if (Z1.indexOf(Q1 = h1.charAt(O1)) < 0) {
              if (Q1 == ".") {
                if (O1 > F1) {
                  F1 = R1;
                  continue
                }
              } else if (!N1) {
                if (h1 == h1.toUpperCase() && (h1 = h1.toLowerCase()) || h1 == h1.toLowerCase() && (h1 = h1.toUpperCase())) {
                  N1 = !0, O1 = -1, F1 = 0;
                  continue
                }
              }
              return V1(j, String(k), K1, a)
            } if (K1 = !1, h1 = T(h1, a, 10, j.s), (F1 = h1.indexOf(".")) > -1) h1 = h1.replace(".", "");
          else F1 = h1.length
        }
        for (O1 = 0; h1.charCodeAt(O1) === 48; O1++);
        for (R1 = h1.length; h1.charCodeAt(--R1) === 48;);
        if (h1 = h1.slice(O1, ++R1)) {
          if (R1 -= O1, K1 && e.DEBUG && R1 > 15 && (k > V || k !== C(k))) throw Error(w + j.s * k);
          if ((F1 = F1 - O1 - 1) > m1) j.c = j.e = null;
          else if (F1 < A1) j.c = [j.e = 0];
          else {
            if (j.e = F1, j.c = [], O1 = (F1 + 1) % A, F1 < 0) O1 += A;
            if (O1 < R1) {
              if (O1) j.c.push(+h1.slice(0, O1));
              for (R1 -= A; O1 < R1;) j.c.push(+h1.slice(O1, O1 += A));
              O1 = A - (h1 = h1.slice(O1)).length
            } else O1 -= R1;
            for (; O1--; h1 += "0");
            j.c.push(+h1)
          }
        } else j.c = [j.e = 0]
      }
      e.clone = g, e.ROUND_UP = 0, e.ROUND_DOWN = 1, e.ROUND_CEIL = 2, e.ROUND_FLOOR = 3, e.ROUND_HALF_UP = 4, e.ROUND_HALF_DOWN = 5, e.ROUND_HALF_EVEN = 6, e.ROUND_HALF_CEIL = 7, e.ROUND_HALF_FLOOR = 8, e.EUCLID = 9, e.config = e.set = function(k) {
        var a, Z1;
        if (k != null)
          if (typeof k == "object") {
            if (k.hasOwnProperty(a = "DECIMAL_PLACES")) Z1 = k[a], E(Z1, 0, F, a), o1 = Z1;
            if (k.hasOwnProperty(a = "ROUNDING_MODE")) Z1 = k[a], E(Z1, 0, 8, a), a1 = Z1;
            if (k.hasOwnProperty(a = "EXPONENTIAL_AT"))
              if (Z1 = k[a], Z1 && Z1.pop) E(Z1[0], -F, 0, a), E(Z1[1], 0, F, a), f1 = Z1[0], r = Z1[1];
              else E(Z1, -F, F, a), f1 = -(r = Z1 < 0 ? -Z1 : Z1);
            if (k.hasOwnProperty(a = "RANGE"))
              if (Z1 = k[a], Z1 && Z1.pop) E(Z1[0], -F, -1, a), E(Z1[1], 1, F, a), A1 = Z1[0], m1 = Z1[1];
              else if (E(Z1, -F, F, a), Z1) A1 = -(m1 = Z1 < 0 ? -Z1 : Z1);
            else throw Error(W + a + " cannot be zero: " + Z1);
            if (k.hasOwnProperty(a = "CRYPTO"))
              if (Z1 = k[a], Z1 === !!Z1)
                if (Z1)
                  if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) T1 = Z1;
                  else throw T1 = !Z1, Error(W + "crypto unavailable");
            else T1 = Z1;
            else throw Error(W + a + " not true or false: " + Z1);
            if (k.hasOwnProperty(a = "MODULO_MODE")) Z1 = k[a], E(Z1, 0, 9, a), e1 = Z1;
            if (k.hasOwnProperty(a = "POW_PRECISION")) Z1 = k[a], E(Z1, 0, F, a), F0 = Z1;
            if (k.hasOwnProperty(a = "FORMAT"))
              if (Z1 = k[a], typeof Z1 == "object") P0 = Z1;
              else throw Error(W + a + " not an object: " + Z1);
            if (k.hasOwnProperty(a = "ALPHABET"))
              if (Z1 = k[a], typeof Z1 == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(Z1)) a0 = Z1.slice(0, 10) == "0123456789", B0 = Z1;
              else throw Error(W + a + " invalid: " + Z1)
          } else throw Error(W + "Object expected: " + k);
        return {
          DECIMAL_PLACES: o1,
          ROUNDING_MODE: a1,
          EXPONENTIAL_AT: [f1, r],
          RANGE: [A1, m1],
          CRYPTO: T1,
          MODULO_MODE: e1,
          POW_PRECISION: F0,
          FORMAT: P0,
          ALPHABET: B0
        }
      }, e.isBigNumber = function(k) {
        if (!k || k._isBigNumber !== !0) return !1;
        if (!e.DEBUG) return !0;
        var a, Z1, Q1 = k.c,
          N1 = k.e,
          F1 = k.s;
        I: if ({}.toString.call(Q1) == "[object Array]") {
          if ((F1 === 1 || F1 === -1) && N1 >= -F && N1 <= F && N1 === C(N1)) {
            if (Q1[0] === 0) {
              if (N1 === 0 && Q1.length === 1) return !0;
              break I
            }
            if (a = (N1 + 1) % A, a < 1) a += A;
            if (String(Q1[0]).length == a) {
              for (a = 0; a < Q1.length; a++)
                if (Z1 = Q1[a], Z1 < 0 || Z1 >= B || Z1 !== C(Z1)) break I;
              if (Z1 !== 0) return !0
            }
          }
        } else if (Q1 === null && N1 === null && (F1 === null || F1 === 1 || F1 === -1)) return !0;
        throw Error(W + "Invalid BigNumber: " + k)
      }, e.maximum = e.max = function() {
        return H1(arguments, -1)
      }, e.minimum = e.min = function() {
        return H1(arguments, 1)
      }, e.random = function() {
        var k = 9007199254740992,
          a = Math.random() * k & 2097151 ? function() {
            return C(Math.random() * k)
          } : function() {
            return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0)
          };
        return function(Z1) {
          var Q1, N1, F1, O1, K1, R1 = 0,
            h1 = [],
            j = new e(c1);
          if (Z1 == null) Z1 = o1;
          else E(Z1, 0, F);
          if (O1 = Z(Z1 / A), T1)
            if (crypto.getRandomValues) {
              Q1 = crypto.getRandomValues(new Uint32Array(O1 *= 2));
              for (; R1 < O1;)
                if (K1 = Q1[R1] * 131072 + (Q1[R1 + 1] >>> 11), K1 >= 9000000000000000) N1 = crypto.getRandomValues(new Uint32Array(2)), Q1[R1] = N1[0], Q1[R1 + 1] = N1[1];
                else h1.push(K1 % 100000000000000), R1 += 2;
              R1 = O1 / 2
            } else if (crypto.randomBytes) {
            Q1 = crypto.randomBytes(O1 *= 7);
            for (; R1 < O1;)
              if (K1 = (Q1[R1] & 31) * 281474976710656 + Q1[R1 + 1] * 1099511627776 + Q1[R1 + 2] * 4294967296 + Q1[R1 + 3] * 16777216 + (Q1[R1 + 4] << 16) + (Q1[R1 + 5] << 8) + Q1[R1 + 6], K1 >= 9000000000000000) crypto.randomBytes(7).copy(Q1, R1);
              else h1.push(K1 % 100000000000000), R1 += 7;
            R1 = O1 / 7
          } else throw T1 = !1, Error(W + "crypto unavailable");
          if (!T1) {
            for (; R1 < O1;)
              if (K1 = a(), K1 < 9000000000000000) h1[R1++] = K1 % 100000000000000
          }
          if (O1 = h1[--R1], Z1 %= A, O1 && Z1) K1 = X[A - Z1], h1[R1] = C(O1 / K1) * K1;
          for (; h1[R1] === 0; h1.pop(), R1--);
          if (R1 < 0) h1 = [F1 = 0];
          else {
            for (F1 = -1; h1[0] === 0; h1.splice(0, 1), F1 -= A);
            for (R1 = 1, K1 = h1[0]; K1 >= 10; K1 /= 10, R1++);
            if (R1 < A) F1 -= A - R1
          }
          return j.e = F1, j.c = h1, j
        }
      }(), e.sum = function() {
        var k = 1,
          a = arguments,
          Z1 = new e(a[0]);
        for (; k < a.length;) Z1 = Z1.plus(a[k++]);
        return Z1
      }, T = function() {
        var k = "0123456789";

        function a(Z1, Q1, N1, F1) {
          var O1, K1 = [0],
            R1, h1 = 0,
            j = Z1.length;
          for (; h1 < j;) {
            for (R1 = K1.length; R1--; K1[R1] *= Q1);
            K1[0] += F1.indexOf(Z1.charAt(h1++));
            for (O1 = 0; O1 < K1.length; O1++)
              if (K1[O1] > N1 - 1) {
                if (K1[O1 + 1] == null) K1[O1 + 1] = 0;
                K1[O1 + 1] += K1[O1] / N1 | 0, K1[O1] %= N1
              }
          }
          return K1.reverse()
        }
        return function(Z1, Q1, N1, F1, O1) {
          var K1, R1, h1, j, W1, U1, L1, D0, O0 = Z1.indexOf("."),
            x0 = o1,
            i0 = a1;
          if (O0 >= 0) j = F0, F0 = 0, Z1 = Z1.replace(".", ""), D0 = new e(Q1), U1 = D0.pow(Z1.length - O0), F0 = j, D0.c = a($(K(U1.c), U1.e, "0"), 10, N1, k), D0.e = D0.c.length;
          L1 = a(Z1, Q1, N1, O1 ? (K1 = B0, k) : (K1 = k, B0)), h1 = j = L1.length;
          for (; L1[--j] == 0; L1.pop());
          if (!L1[0]) return K1.charAt(0);
          if (O0 < 0) --h1;
          else U1.c = L1, U1.e = h1, U1.s = F1, U1 = O(U1, D0, x0, i0, N1), L1 = U1.c, W1 = U1.r, h1 = U1.e;
          if (R1 = h1 + x0 + 1, O0 = L1[R1], j = N1 / 2, W1 = W1 || R1 < 0 || L1[R1 + 1] != null, W1 = i0 < 4 ? (O0 != null || W1) && (i0 == 0 || i0 == (U1.s < 0 ? 3 : 2)) : O0 > j || O0 == j && (i0 == 4 || W1 || i0 == 6 && L1[R1 - 1] & 1 || i0 == (U1.s < 0 ? 8 : 7)), R1 < 1 || !L1[0]) Z1 = W1 ? $(K1.charAt(1), -x0, K1.charAt(0)) : K1.charAt(0);
          else {
            if (L1.length = R1, W1) {
              for (--N1; ++L1[--R1] > N1;)
                if (L1[R1] = 0, !R1) ++h1, L1 = [1].concat(L1)
            }
            for (j = L1.length; !L1[--j];);
            for (O0 = 0, Z1 = ""; O0 <= j; Z1 += K1.charAt(L1[O0++]));
            Z1 = $(Z1, h1, K1.charAt(0))
          }
          return Z1
        }
      }(), O = function() {
        function k(Q1, N1, F1) {
          var O1, K1, R1, h1, j = 0,
            W1 = Q1.length,
            U1 = N1 % _,
            L1 = N1 / _ | 0;
          for (Q1 = Q1.slice(); W1--;) R1 = Q1[W1] % _, h1 = Q1[W1] / _ | 0, O1 = L1 * R1 + h1 * U1, K1 = U1 * R1 + O1 % _ * _ + j, j = (K1 / F1 | 0) + (O1 / _ | 0) + L1 * h1, Q1[W1] = K1 % F1;
          if (j) Q1 = [j].concat(Q1);
          return Q1
        }

        function a(Q1, N1, F1, O1) {
          var K1, R1;
          if (F1 != O1) R1 = F1 > O1 ? 1 : -1;
          else
            for (K1 = R1 = 0; K1 < F1; K1++)
              if (Q1[K1] != N1[K1]) {
                R1 = Q1[K1] > N1[K1] ? 1 : -1;
                break
              } return R1
        }

        function Z1(Q1, N1, F1, O1) {
          var K1 = 0;
          for (; F1--;) Q1[F1] -= K1, K1 = Q1[F1] < N1[F1] ? 1 : 0, Q1[F1] = K1 * O1 + Q1[F1] - N1[F1];
          for (; !Q1[0] && Q1.length > 1; Q1.splice(0, 1));
        }
        return function(Q1, N1, F1, O1, K1) {
          var R1, h1, j, W1, U1, L1, D0, O0, x0, i0, s0, P2, r5, n0, B2, A2, B4, A4 = Q1.s == N1.s ? 1 : -1,
            _5 = Q1.c,
            D5 = N1.c;
          if (!_5 || !_5[0] || !D5 || !D5[0]) return new e(!Q1.s || !N1.s || (_5 ? D5 && _5[0] == D5[0] : !D5) ? NaN : _5 && _5[0] == 0 || !D5 ? A4 * 0 : A4 / 0);
          if (O0 = new e(A4), x0 = O0.c = [], h1 = Q1.e - N1.e, A4 = F1 + h1 + 1, !K1) K1 = B, h1 = J(Q1.e / A) - J(N1.e / A), A4 = A4 / A | 0;
          for (j = 0; D5[j] == (_5[j] || 0); j++);
          if (D5[j] > (_5[j] || 0)) h1--;
          if (A4 < 0) x0.push(1), W1 = !0;
          else {
            if (n0 = _5.length, A2 = D5.length, j = 0, A4 += 2, U1 = C(K1 / (D5[0] + 1)), U1 > 1) D5 = k(D5, U1, K1), _5 = k(_5, U1, K1), A2 = D5.length, n0 = _5.length;
            r5 = A2, i0 = _5.slice(0, A2), s0 = i0.length;
            for (; s0 < A2; i0[s0++] = 0);
            if (B4 = D5.slice(), B4 = [0].concat(B4), B2 = D5[0], D5[1] >= K1 / 2) B2++;
            do {
              if (U1 = 0, R1 = a(D5, i0, A2, s0), R1 < 0) {
                if (P2 = i0[0], A2 != s0) P2 = P2 * K1 + (i0[1] || 0);
                if (U1 = C(P2 / B2), U1 > 1) {
                  if (U1 >= K1) U1 = K1 - 1;
                  L1 = k(D5, U1, K1), D0 = L1.length, s0 = i0.length;
                  while (a(L1, i0, D0, s0) == 1) U1--, Z1(L1, A2 < D0 ? B4 : D5, D0, K1), D0 = L1.length, R1 = 1
                } else {
                  if (U1 == 0) R1 = U1 = 1;
                  L1 = D5.slice(), D0 = L1.length
                }
                if (D0 < s0) L1 = [0].concat(L1);
                if (Z1(i0, L1, s0, K1), s0 = i0.length, R1 == -1)
                  while (a(D5, i0, A2, s0) < 1) U1++, Z1(i0, A2 < s0 ? B4 : D5, s0, K1), s0 = i0.length
              } else if (R1 === 0) U1++, i0 = [0];
              if (x0[j++] = U1, i0[0]) i0[s0++] = _5[r5] || 0;
              else i0 = [_5[r5]], s0 = 1
            } while ((r5++ < n0 || i0[0] != null) && A4--);
            if (W1 = i0[0] != null, !x0[0]) x0.splice(0, 1)
          }
          if (K1 == B) {
            for (j = 1, A4 = x0[0]; A4 >= 10; A4 /= 10, j++);
            i1(O0, F1 + (O0.e = j + h1 * A - 1) + 1, O1, W1)
          } else O0.e = h1, O0.r = +W1;
          return O0
        }
      }();

      function G0(k, a, Z1, Q1) {
        var N1, F1, O1, K1, R1;
        if (Z1 == null) Z1 = a1;
        else E(Z1, 0, 8);
        if (!k.c) return k.toString();
        if (N1 = k.c[0], O1 = k.e, a == null) R1 = K(k.c), R1 = Q1 == 1 || Q1 == 2 && (O1 <= f1 || O1 >= r) ? P(R1, O1) : $(R1, O1, "0");
        else if (k = i1(new e(k), a, Z1), F1 = k.e, R1 = K(k.c), K1 = R1.length, Q1 == 1 || Q1 == 2 && (a <= F1 || F1 <= f1)) {
          for (; K1 < a; R1 += "0", K1++);
          R1 = P(R1, F1)
        } else if (a -= O1, R1 = $(R1, F1, "0"), F1 + 1 > K1) {
          if (--a > 0)
            for (R1 += "."; a--; R1 += "0");
        } else if (a += F1 - K1, a > 0) {
          if (F1 + 1 == K1) R1 += ".";
          for (; a--; R1 += "0");
        }
        return k.s < 0 && N1 ? "-" + R1 : R1
      }

      function H1(k, a) {
        var Z1, Q1, N1 = 1,
          F1 = new e(k[0]);
        for (; N1 < k.length; N1++)
          if (Q1 = new e(k[N1]), !Q1.s || (Z1 = Q(F1, Q1)) === a || Z1 === 0 && F1.s === a) F1 = Q1;
        return F1
      }

      function j1(k, a, Z1) {
        var Q1 = 1,
          N1 = a.length;
        for (; !a[--N1]; a.pop());
        for (N1 = a[0]; N1 >= 10; N1 /= 10, Q1++);
        if ((Z1 = Q1 + Z1 * A - 1) > m1) k.c = k.e = null;
        else if (Z1 < A1) k.c = [k.e = 0];
        else k.e = Z1, k.c = a;
        return k
      }
      V1 = function() {
        var k = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
          a = /^([^.]+)\.$/,
          Z1 = /^\.([^.]+)$/,
          Q1 = /^-?(Infinity|NaN)$/,
          N1 = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
        return function(F1, O1, K1, R1) {
          var h1, j = K1 ? O1 : O1.replace(N1, "");
          if (Q1.test(j)) F1.s = isNaN(j) ? null : j < 0 ? -1 : 1;
          else {
            if (!K1) {
              if (j = j.replace(k, function(W1, U1, L1) {
                  return h1 = (L1 = L1.toLowerCase()) == "x" ? 16 : L1 == "b" ? 2 : 8, !R1 || R1 == h1 ? U1 : W1
                }), R1) h1 = R1, j = j.replace(a, "$1").replace(Z1, "0.$1");
              if (O1 != j) return new e(j, h1)
            }
            if (e.DEBUG) throw Error(W + "Not a" + (R1 ? " base " + R1 : "") + " number: " + O1);
            F1.s = null
          }
          F1.c = F1.e = null
        }
      }();

      function i1(k, a, Z1, Q1) {
        var N1, F1, O1, K1, R1, h1, j, W1 = k.c,
          U1 = X;
        if (W1) {
          I: {
            for (N1 = 1, K1 = W1[0]; K1 >= 10; K1 /= 10, N1++);
            if (F1 = a - N1, F1 < 0) F1 += A,
            O1 = a,
            R1 = W1[h1 = 0],
            j = C(R1 / U1[N1 - O1 - 1] % 10);
            else if (h1 = Z((F1 + 1) / A), h1 >= W1.length)
              if (Q1) {
                for (; W1.length <= h1; W1.push(0));
                R1 = j = 0, N1 = 1, F1 %= A, O1 = F1 - A + 1
              } else break I;
            else {
              R1 = K1 = W1[h1];
              for (N1 = 1; K1 >= 10; K1 /= 10, N1++);
              F1 %= A, O1 = F1 - A + N1, j = O1 < 0 ? 0 : C(R1 / U1[N1 - O1 - 1] % 10)
            }
            if (Q1 = Q1 || a < 0 || W1[h1 + 1] != null || (O1 < 0 ? R1 : R1 % U1[N1 - O1 - 1]), Q1 = Z1 < 4 ? (j || Q1) && (Z1 == 0 || Z1 == (k.s < 0 ? 3 : 2)) : j > 5 || j == 5 && (Z1 == 4 || Q1 || Z1 == 6 && (F1 > 0 ? O1 > 0 ? R1 / U1[N1 - O1] : 0 : W1[h1 - 1]) % 10 & 1 || Z1 == (k.s < 0 ? 8 : 7)), a < 1 || !W1[0]) {
              if (W1.length = 0, Q1) a -= k.e + 1, W1[0] = U1[(A - a % A) % A], k.e = -a || 0;
              else W1[0] = k.e = 0;
              return k
            }
            if (F1 == 0) W1.length = h1,
            K1 = 1,
            h1--;
            else W1.length = h1 + 1,
            K1 = U1[A - F1],
            W1[h1] = O1 > 0 ? C(R1 / U1[N1 - O1] % U1[O1]) * K1 : 0;
            if (Q1)
              for (;;)
                if (h1 == 0) {
                  for (F1 = 1, O1 = W1[0]; O1 >= 10; O1 /= 10, F1++);
                  O1 = W1[0] += K1;
                  for (K1 = 1; O1 >= 10; O1 /= 10, K1++);
                  if (F1 != K1) {
                    if (k.e++, W1[0] == B) W1[0] = 1
                  }
                  break
                } else {
                  if (W1[h1] += K1, W1[h1] != B) break;
                  W1[h1--] = 0, K1 = 1
                } for (F1 = W1.length; W1[--F1] === 0; W1.pop());
          }
          if (k.e > m1) k.c = k.e = null;
          else if (k.e < A1) k.c = [k.e = 0]
        }
        return k
      }

      function E0(k) {
        var a, Z1 = k.e;
        if (Z1 === null) return k.toString();
        return a = K(k.c), a = Z1 <= f1 || Z1 >= r ? P(a, Z1) : $(a, Z1, "0"), k.s < 0 ? "-" + a : a
      }
      if (c.absoluteValue = c.abs = function() {
          var k = new e(this);
          if (k.s < 0) k.s = 1;
          return k
        }, c.comparedTo = function(k, a) {
          return Q(this, new e(k, a))
        }, c.decimalPlaces = c.dp = function(k, a) {
          var Z1, Q1, N1, F1 = this;
          if (k != null) {
            if (E(k, 0, F), a == null) a = a1;
            else E(a, 0, 8);
            return i1(new e(F1), k + F1.e + 1, a)
          }
          if (!(Z1 = F1.c)) return null;
          if (Q1 = ((N1 = Z1.length - 1) - J(this.e / A)) * A, N1 = Z1[N1])
            for (; N1 % 10 == 0; N1 /= 10, Q1--);
          if (Q1 < 0) Q1 = 0;
          return Q1
        }, c.dividedBy = c.div = function(k, a) {
          return O(this, new e(k, a), o1, a1)
        }, c.dividedToIntegerBy = c.idiv = function(k, a) {
          return O(this, new e(k, a), 0, 1)
        }, c.exponentiatedBy = c.pow = function(k, a) {
          var Z1, Q1, N1, F1, O1, K1, R1, h1, j, W1 = this;
          if (k = new e(k), k.c && !k.isInteger()) throw Error(W + "Exponent not an integer: " + E0(k));
          if (a != null) a = new e(a);
          if (K1 = k.e > 14, !W1.c || !W1.c[0] || W1.c[0] == 1 && !W1.e && W1.c.length == 1 || !k.c || !k.c[0]) return j = new e(Math.pow(+E0(W1), K1 ? k.s * (2 - S(k)) : +E0(k))), a ? j.mod(a) : j;
          if (R1 = k.s < 0, a) {
            if (a.c ? !a.c[0] : !a.s) return new e(NaN);
            if (Q1 = !R1 && W1.isInteger() && a.isInteger(), Q1) W1 = W1.mod(a)
          } else if (k.e > 9 && (W1.e > 0 || W1.e < -1 || (W1.e == 0 ? W1.c[0] > 1 || K1 && W1.c[1] >= 240000000 : W1.c[0] < 80000000000000 || K1 && W1.c[0] <= 99999750000000))) {
            if (F1 = W1.s < 0 && S(k) ? -0 : 0, W1.e > -1) F1 = 1 / F1;
            return new e(R1 ? 1 / F1 : F1)
          } else if (F0) F1 = Z(F0 / A + 2);
          if (K1) {
            if (Z1 = new e(0.5), R1) k.s = 1;
            h1 = S(k)
          } else N1 = Math.abs(+E0(k)), h1 = N1 % 2;
          j = new e(c1);
          for (;;) {
            if (h1) {
              if (j = j.times(W1), !j.c) break;
              if (F1) {
                if (j.c.length > F1) j.c.length = F1
              } else if (Q1) j = j.mod(a)
            }
            if (N1) {
              if (N1 = C(N1 / 2), N1 === 0) break;
              h1 = N1 % 2
            } else if (k = k.times(Z1), i1(k, k.e + 1, 1), k.e > 14) h1 = S(k);
            else {
              if (N1 = +E0(k), N1 === 0) break;
              h1 = N1 % 2
            }
            if (W1 = W1.times(W1), F1) {
              if (W1.c && W1.c.length > F1) W1.c.length = F1
            } else if (Q1) W1 = W1.mod(a)
          }
          if (Q1) return j;
          if (R1) j = c1.div(j);
          return a ? j.mod(a) : F1 ? i1(j, F0, a1, O1) : j
        }, c.integerValue = function(k) {
          var a = new e(this);
          if (k == null) k = a1;
          else E(k, 0, 8);
          return i1(a, a.e + 1, k)
        }, c.isEqualTo = c.eq = function(k, a) {
          return Q(this, new e(k, a)) === 0
        }, c.isFinite = function() {
          return !!this.c
        }, c.isGreaterThan = c.gt = function(k, a) {
          return Q(this, new e(k, a)) > 0
        }, c.isGreaterThanOrEqualTo = c.gte = function(k, a) {
          return (a = Q(this, new e(k, a))) === 1 || a === 0
        }, c.isInteger = function() {
          return !!this.c && J(this.e / A) > this.c.length - 2
        }, c.isLessThan = c.lt = function(k, a) {
          return Q(this, new e(k, a)) < 0
        }, c.isLessThanOrEqualTo = c.lte = function(k, a) {
          return (a = Q(this, new e(k, a))) === -1 || a === 0
        }, c.isNaN = function() {
          return !this.s
        }, c.isNegative = function() {
          return this.s < 0
        }, c.isPositive = function() {
          return this.s > 0
        }, c.isZero = function() {
          return !!this.c && this.c[0] == 0
        }, c.minus = function(k, a) {
          var Z1, Q1, N1, F1, O1 = this,
            K1 = O1.s;
          if (k = new e(k, a), a = k.s, !K1 || !a) return new e(NaN);
          if (K1 != a) return k.s = -a, O1.plus(k);
          var R1 = O1.e / A,
            h1 = k.e / A,
            j = O1.c,
            W1 = k.c;
          if (!R1 || !h1) {
            if (!j || !W1) return j ? (k.s = -a, k) : new e(W1 ? O1 : NaN);
            if (!j[0] || !W1[0]) return W1[0] ? (k.s = -a, k) : new e(j[0] ? O1 : a1 == 3 ? -0 : 0)
          }
          if (R1 = J(R1), h1 = J(h1), j = j.slice(), K1 = R1 - h1) {
            if (F1 = K1 < 0) K1 = -K1, N1 = j;
            else h1 = R1, N1 = W1;
            N1.reverse();
            for (a = K1; a--; N1.push(0));
            N1.reverse()
          } else {
            Q1 = (F1 = (K1 = j.length) < (a = W1.length)) ? K1 : a;
            for (K1 = a = 0; a < Q1; a++)
              if (j[a] != W1[a]) {
                F1 = j[a] < W1[a];
                break
              }
          }
          if (F1) N1 = j, j = W1, W1 = N1, k.s = -k.s;
          if (a = (Q1 = W1.length) - (Z1 = j.length), a > 0)
            for (; a--; j[Z1++] = 0);
          a = B - 1;
          for (; Q1 > K1;) {
            if (j[--Q1] < W1[Q1]) {
              for (Z1 = Q1; Z1 && !j[--Z1]; j[Z1] = a);
              --j[Z1], j[Q1] += B
            }
            j[Q1] -= W1[Q1]
          }
          for (; j[0] == 0; j.splice(0, 1), --h1);
          if (!j[0]) return k.s = a1 == 3 ? -1 : 1, k.c = [k.e = 0], k;
          return j1(k, j, h1)
        }, c.modulo = c.mod = function(k, a) {
          var Z1, Q1, N1 = this;
          if (k = new e(k, a), !N1.c || !k.s || k.c && !k.c[0]) return new e(NaN);
          else if (!k.c || N1.c && !N1.c[0]) return new e(N1);
          if (e1 == 9) Q1 = k.s, k.s = 1, Z1 = O(N1, k, 0, 3), k.s = Q1, Z1.s *= Q1;
          else Z1 = O(N1, k, 0, e1);
          if (k = N1.minus(Z1.times(k)), !k.c[0] && e1 == 1) k.s = N1.s;
          return k
        }, c.multipliedBy = c.times = function(k, a) {
          var Z1, Q1, N1, F1, O1, K1, R1, h1, j, W1, U1, L1, D0, O0, x0, i0 = this,
            s0 = i0.c,
            P2 = (k = new e(k, a)).c;
          if (!s0 || !P2 || !s0[0] || !P2[0]) {
            if (!i0.s || !k.s || s0 && !s0[0] && !P2 || P2 && !P2[0] && !s0) k.c = k.e = k.s = null;
            else if (k.s *= i0.s, !s0 || !P2) k.c = k.e = null;
            else k.c = [0], k.e = 0;
            return k
          }
          if (Q1 = J(i0.e / A) + J(k.e / A), k.s *= i0.s, R1 = s0.length, W1 = P2.length, R1 < W1) D0 = s0, s0 = P2, P2 = D0, N1 = R1, R1 = W1, W1 = N1;
          for (N1 = R1 + W1, D0 = []; N1--; D0.push(0));
          O0 = B, x0 = _;
          for (N1 = W1; --N1 >= 0;) {
            Z1 = 0, U1 = P2[N1] % x0, L1 = P2[N1] / x0 | 0;
            for (O1 = R1, F1 = N1 + O1; F1 > N1;) h1 = s0[--O1] % x0, j = s0[O1] / x0 | 0, K1 = L1 * h1 + j * U1, h1 = U1 * h1 + K1 % x0 * x0 + D0[F1] + Z1, Z1 = (h1 / O0 | 0) + (K1 / x0 | 0) + L1 * j, D0[F1--] = h1 % O0;
            D0[F1] = Z1
          }
          if (Z1) ++Q1;
          else D0.splice(0, 1);
          return j1(k, D0, Q1)
        }, c.negated = function() {
          var k = new e(this);
          return k.s = -k.s || null, k
        }, c.plus = function(k, a) {
          var Z1, Q1 = this,
            N1 = Q1.s;
          if (k = new e(k, a), a = k.s, !N1 || !a) return new e(NaN);
          if (N1 != a) return k.s = -a, Q1.minus(k);
          var F1 = Q1.e / A,
            O1 = k.e / A,
            K1 = Q1.c,
            R1 = k.c;
          if (!F1 || !O1) {
            if (!K1 || !R1) return new e(N1 / 0);
            if (!K1[0] || !R1[0]) return R1[0] ? k : new e(K1[0] ? Q1 : N1 * 0)
          }
          if (F1 = J(F1), O1 = J(O1), K1 = K1.slice(), N1 = F1 - O1) {
            if (N1 > 0) O1 = F1, Z1 = R1;
            else N1 = -N1, Z1 = K1;
            Z1.reverse();
            for (; N1--; Z1.push(0));
            Z1.reverse()
          }
          if (N1 = K1.length, a = R1.length, N1 - a < 0) Z1 = R1, R1 = K1, K1 = Z1, a = N1;
          for (N1 = 0; a;) N1 = (K1[--a] = K1[a] + R1[a] + N1) / B | 0, K1[a] = B === K1[a] ? 0 : K1[a] % B;
          if (N1) K1 = [N1].concat(K1), ++O1;
          return j1(k, K1, O1)
        }, c.precision = c.sd = function(k, a) {
          var Z1, Q1, N1, F1 = this;
          if (k != null && k !== !!k) {
            if (E(k, 1, F), a == null) a = a1;
            else E(a, 0, 8);
            return i1(new e(F1), k, a)
          }
          if (!(Z1 = F1.c)) return null;
          if (N1 = Z1.length - 1, Q1 = N1 * A + 1, N1 = Z1[N1]) {
            for (; N1 % 10 == 0; N1 /= 10, Q1--);
            for (N1 = Z1[0]; N1 >= 10; N1 /= 10, Q1++);
          }
          if (k && F1.e + 1 > Q1) Q1 = F1.e + 1;
          return Q1
        }, c.shiftedBy = function(k) {
          return E(k, -V, V), this.times("1e" + k)
        }, c.squareRoot = c.sqrt = function() {
          var k, a, Z1, Q1, N1, F1 = this,
            O1 = F1.c,
            K1 = F1.s,
            R1 = F1.e,
            h1 = o1 + 4,
            j = new e("0.5");
          if (K1 !== 1 || !O1 || !O1[0]) return new e(!K1 || K1 < 0 && (!O1 || O1[0]) ? NaN : O1 ? F1 : 1 / 0);
          if (K1 = Math.sqrt(+E0(F1)), K1 == 0 || K1 == 1 / 0) {
            if (a = K(O1), (a.length + R1) % 2 == 0) a += "0";
            if (K1 = Math.sqrt(+a), R1 = J((R1 + 1) / 2) - (R1 < 0 || R1 % 2), K1 == 1 / 0) a = "5e" + R1;
            else a = K1.toExponential(), a = a.slice(0, a.indexOf("e") + 1) + R1;
            Z1 = new e(a)
          } else Z1 = new e(K1 + "");
          if (Z1.c[0]) {
            if (R1 = Z1.e, K1 = R1 + h1, K1 < 3) K1 = 0;
            for (;;)
              if (N1 = Z1, Z1 = j.times(N1.plus(O(F1, N1, h1, 1))), K(N1.c).slice(0, K1) === (a = K(Z1.c)).slice(0, K1)) {
                if (Z1.e < R1) --K1;
                if (a = a.slice(K1 - 3, K1 + 1), a == "9999" || !Q1 && a == "4999") {
                  if (!Q1) {
                    if (i1(N1, N1.e + o1 + 2, 0), N1.times(N1).eq(F1)) {
                      Z1 = N1;
                      break
                    }
                  }
                  h1 += 4, K1 += 4, Q1 = 1
                } else {
                  if (!+a || !+a.slice(1) && a.charAt(0) == "5") i1(Z1, Z1.e + o1 + 2, 1), k = !Z1.times(Z1).eq(F1);
                  break
                }
              }
          }
          return i1(Z1, Z1.e + o1 + 1, a1, k)
        }, c.toExponential = function(k, a) {
          if (k != null) E(k, 0, F), k++;
          return G0(this, k, a, 1)
        }, c.toFixed = function(k, a) {
          if (k != null) E(k, 0, F), k = k + this.e + 1;
          return G0(this, k, a)
        }, c.toFormat = function(k, a, Z1) {
          var Q1, N1 = this;
          if (Z1 == null)
            if (k != null && a && typeof a == "object") Z1 = a, a = null;
            else if (k && typeof k == "object") Z1 = k, k = a = null;
          else Z1 = P0;
          else if (typeof Z1 != "object") throw Error(W + "Argument not an object: " + Z1);
          if (Q1 = N1.toFixed(k, a), N1.c) {
            var F1, O1 = Q1.split("."),
              K1 = +Z1.groupSize,
              R1 = +Z1.secondaryGroupSize,
              h1 = Z1.groupSeparator || "",
              j = O1[0],
              W1 = O1[1],
              U1 = N1.s < 0,
              L1 = U1 ? j.slice(1) : j,
              D0 = L1.length;
            if (R1) F1 = K1, K1 = R1, R1 = F1, D0 -= F1;
            if (K1 > 0 && D0 > 0) {
              F1 = D0 % K1 || K1, j = L1.substr(0, F1);
              for (; F1 < D0; F1 += K1) j += h1 + L1.substr(F1, K1);
              if (R1 > 0) j += h1 + L1.slice(F1);
              if (U1) j = "-" + j
            }
            Q1 = W1 ? j + (Z1.decimalSeparator || "") + ((R1 = +Z1.fractionGroupSize) ? W1.replace(new RegExp("\\d{" + R1 + "}\\B", "g"), "$&" + (Z1.fractionGroupSeparator || "")) : W1) : j
          }
          return (Z1.prefix || "") + Q1 + (Z1.suffix || "")
        }, c.toFraction = function(k) {
          var a, Z1, Q1, N1, F1, O1, K1, R1, h1, j, W1, U1, L1 = this,
            D0 = L1.c;
          if (k != null) {
            if (K1 = new e(k), !K1.isInteger() && (K1.c || K1.s !== 1) || K1.lt(c1)) throw Error(W + "Argument " + (K1.isInteger() ? "out of range: " : "not an integer: ") + E0(K1))
          }
          if (!D0) return new e(L1);
          a = new e(c1), h1 = Z1 = new e(c1), Q1 = R1 = new e(c1), U1 = K(D0), F1 = a.e = U1.length - L1.e - 1, a.c[0] = X[(O1 = F1 % A) < 0 ? A + O1 : O1], k = !k || K1.comparedTo(a) > 0 ? F1 > 0 ? a : h1 : K1, O1 = m1, m1 = 1 / 0, K1 = new e(U1), R1.c[0] = 0;
          for (;;) {
            if (j = O(K1, a, 0, 1), N1 = Z1.plus(j.times(Q1)), N1.comparedTo(k) == 1) break;
            Z1 = Q1, Q1 = N1, h1 = R1.plus(j.times(N1 = h1)), R1 = N1, a = K1.minus(j.times(N1 = a)), K1 = N1
          }
          return N1 = O(k.minus(Z1), Q1, 0, 1), R1 = R1.plus(N1.times(h1)), Z1 = Z1.plus(N1.times(Q1)), R1.s = h1.s = L1.s, F1 = F1 * 2, W1 = O(h1, Q1, F1, a1).minus(L1).abs().comparedTo(O(R1, Z1, F1, a1).minus(L1).abs()) < 1 ? [h1, Q1] : [R1, Z1], m1 = O1, W1
        }, c.toNumber = function() {
          return +E0(this)
        }, c.toPrecision = function(k, a) {
          if (k != null) E(k, 1, F);
          return G0(this, k, a, 2)
        }, c.toString = function(k) {
          var a, Z1 = this,
            Q1 = Z1.s,
            N1 = Z1.e;
          if (N1 === null)
            if (Q1) {
              if (a = "Infinity", Q1 < 0) a = "-" + a
            } else a = "NaN";
          else {
            if (k == null) a = N1 <= f1 || N1 >= r ? P(K(Z1.c), N1) : $(K(Z1.c), N1, "0");
            else if (k === 10 && a0) Z1 = i1(new e(Z1), o1 + N1 + 1, a1), a = $(K(Z1.c), Z1.e, "0");
            else E(k, 2, B0.length, "Base"), a = T($(K(Z1.c), N1, "0"), 10, k, Q1, !0);
            if (Q1 < 0 && Z1.c[0]) a = "-" + a
          }
          return a
        }, c.valueOf = c.toJSON = function() {
          return E0(this)
        }, c._isBigNumber = !0, h != null) e.set(h);
      return e
    }

    function J(h) {
      var O = h | 0;
      return h > 0 || h === O ? O : O - 1
    }

    function K(h) {
      var O, T, V1 = 1,
        c = h.length,
        c1 = h[0] + "";
      for (; V1 < c;) {
        O = h[V1++] + "", T = A - O.length;
        for (; T--; O = "0" + O);
        c1 += O
      }
      for (c = c1.length; c1.charCodeAt(--c) === 48;);
      return c1.slice(0, c + 1 || 1)
    }

    function Q(h, O) {
      var T, V1, c = h.c,
        c1 = O.c,
        o1 = h.s,
        a1 = O.s,
        f1 = h.e,
        r = O.e;
      if (!o1 || !a1) return null;
      if (T = c && !c[0], V1 = c1 && !c1[0], T || V1) return T ? V1 ? 0 : -a1 : o1;
      if (o1 != a1) return o1;
      if (T = o1 < 0, V1 = f1 == r, !c || !c1) return V1 ? 0 : !c ^ T ? 1 : -1;
      if (!V1) return f1 > r ^ T ? 1 : -1;
      a1 = (f1 = c.length) < (r = c1.length) ? f1 : r;
      for (o1 = 0; o1 < a1; o1++)
        if (c[o1] != c1[o1]) return c[o1] > c1[o1] ^ T ? 1 : -1;
      return f1 == r ? 0 : f1 > r ^ T ? 1 : -1
    }

    function E(h, O, T, V1) {
      if (h < O || h > T || h !== C(h)) throw Error(W + (V1 || "Argument") + (typeof h == "number" ? h < O || h > T ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(h))
    }

    function S(h) {
      var O = h.c.length - 1;
      return J(h.e / A) == O && h.c[O] % 2 != 0
    }

    function P(h, O) {
      return (h.length > 1 ? h.charAt(0) + "." + h.slice(1) : h) + (O < 0 ? "e" : "e+") + O
    }

    function $(h, O, T) {
      var V1, c;
      if (O < 0) {
        for (c = T + "."; ++O; c += T);
        h = c + h
      } else if (V1 = h.length, ++O > V1) {
        for (c = T, O -= V1; --O; c += T);
        h += c
      } else if (O < V1) h = h.slice(0, O) + "." + h.slice(O);
      return h
    }
    if (d = g(), d.default = d.BigNumber = d, typeof define == "function" && define.amd) define(function() {
      return d
    });
    else if (typeof hr != "undefined" && hr.exports) hr.exports = d;
    else {
      if (!I) I = typeof self != "undefined" && self ? self : window;
      I.BigNumber = d
    }
  })(kI2)
})
// @from(Start 3734104, End 3736851)
iI2 = Y((jA3, pI2) => {
  var xI2 = cD1(),
    cI2 = jA3;
  (function() {
    function I(V) {
      return V < 10 ? "0" + V : V
    }
    var d = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      G = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      Z, C, W = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\\"",
        "\\": "\\\\"
      },
      w;

    function B(V) {
      return G.lastIndex = 0, G.test(V) ? '"' + V.replace(G, function(X) {
        var _ = W[X];
        return typeof _ === "string" ? _ : "\\u" + ("0000" + X.charCodeAt(0).toString(16)).slice(-4)
      }) + '"' : '"' + V + '"'
    }

    function A(V, X) {
      var _, F, g, J, K = Z,
        Q, E = X[V],
        S = E != null && (E instanceof xI2 || xI2.isBigNumber(E));
      if (E && typeof E === "object" && typeof E.toJSON === "function") E = E.toJSON(V);
      if (typeof w === "function") E = w.call(X, V, E);
      switch (typeof E) {
        case "string":
          if (S) return E;
          else return B(E);
        case "number":
          return isFinite(E) ? String(E) : "null";
        case "boolean":
        case "null":
        case "bigint":
          return String(E);
        case "object":
          if (!E) return "null";
          if (Z += C, Q = [], Object.prototype.toString.apply(E) === "[object Array]") {
            J = E.length;
            for (_ = 0; _ < J; _ += 1) Q[_] = A(_, E) || "null";
            return g = Q.length === 0 ? "[]" : Z ? `[
` + Z + Q.join(`,
` + Z) + `
` + K + "]" : "[" + Q.join(",") + "]", Z = K, g
          }
          if (w && typeof w === "object") {
            J = w.length;
            for (_ = 0; _ < J; _ += 1)
              if (typeof w[_] === "string") {
                if (F = w[_], g = A(F, E), g) Q.push(B(F) + (Z ? ": " : ":") + g)
              }
          } else Object.keys(E).forEach(function(P) {
            var $ = A(P, E);
            if ($) Q.push(B(P) + (Z ? ": " : ":") + $)
          });
          return g = Q.length === 0 ? "{}" : Z ? `{
` + Z + Q.join(`,
` + Z) + `
` + K + "}" : "{" + Q.join(",") + "}", Z = K, g
      }
    }
    if (typeof cI2.stringify !== "function") cI2.stringify = function(V, X, _) {
      var F;
      if (Z = "", C = "", typeof _ === "number")
        for (F = 0; F < _; F += 1) C += " ";
      else if (typeof _ === "string") C = _;
      if (w = X, X && typeof X !== "function" && (typeof X !== "object" || typeof X.length !== "number")) throw new Error("JSON.stringify");
      return A("", {
        "": V
      })
    }
  })()
})
// @from(Start 3736857, End 3743099)
rI2 = Y((kA3, nI2) => {
  var jr = null,
    Cp5 = /(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/,
    Wp5 = /(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/,
    wp5 = function(I) {
      var d = {
        strict: !1,
        storeAsString: !1,
        alwaysParseAsBig: !1,
        useNativeBigInt: !1,
        protoAction: "error",
        constructorAction: "error"
      };
      if (I !== void 0 && I !== null) {
        if (I.strict === !0) d.strict = !0;
        if (I.storeAsString === !0) d.storeAsString = !0;
        if (d.alwaysParseAsBig = I.alwaysParseAsBig === !0 ? I.alwaysParseAsBig : !1, d.useNativeBigInt = I.useNativeBigInt === !0 ? I.useNativeBigInt : !1, typeof I.constructorAction !== "undefined")
          if (I.constructorAction === "error" || I.constructorAction === "ignore" || I.constructorAction === "preserve") d.constructorAction = I.constructorAction;
          else throw new Error(`Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${I.constructorAction}`);
        if (typeof I.protoAction !== "undefined")
          if (I.protoAction === "error" || I.protoAction === "ignore" || I.protoAction === "preserve") d.protoAction = I.protoAction;
          else throw new Error(`Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${I.protoAction}`)
      }
      var G, Z, C = {
          '"': '"',
          "\\": "\\",
          "/": "/",
          b: "\b",
          f: "\f",
          n: `
`,
          r: "\r",
          t: "\t"
        },
        W, w = function(K) {
          throw {
            name: "SyntaxError",
            message: K,
            at: G,
            text: W
          }
        },
        B = function(K) {
          if (K && K !== Z) w("Expected '" + K + "' instead of '" + Z + "'");
          return Z = W.charAt(G), G += 1, Z
        },
        A = function() {
          var K, Q = "";
          if (Z === "-") Q = "-", B("-");
          while (Z >= "0" && Z <= "9") Q += Z, B();
          if (Z === ".") {
            Q += ".";
            while (B() && Z >= "0" && Z <= "9") Q += Z
          }
          if (Z === "e" || Z === "E") {
            if (Q += Z, B(), Z === "-" || Z === "+") Q += Z, B();
            while (Z >= "0" && Z <= "9") Q += Z, B()
          }
          if (K = +Q, !isFinite(K)) w("Bad number");
          else {
            if (jr == null) jr = cD1();
            if (Q.length > 15) return d.storeAsString ? Q : d.useNativeBigInt ? BigInt(Q) : new jr(Q);
            else return !d.alwaysParseAsBig ? K : d.useNativeBigInt ? BigInt(K) : new jr(K)
          }
        },
        V = function() {
          var K, Q, E = "",
            S;
          if (Z === '"') {
            var P = G;
            while (B()) {
              if (Z === '"') {
                if (G - 1 > P) E += W.substring(P, G - 1);
                return B(), E
              }
              if (Z === "\\") {
                if (G - 1 > P) E += W.substring(P, G - 1);
                if (B(), Z === "u") {
                  S = 0;
                  for (Q = 0; Q < 4; Q += 1) {
                    if (K = parseInt(B(), 16), !isFinite(K)) break;
                    S = S * 16 + K
                  }
                  E += String.fromCharCode(S)
                } else if (typeof C[Z] === "string") E += C[Z];
                else break;
                P = G
              }
            }
          }
          w("Bad string")
        },
        X = function() {
          while (Z && Z <= " ") B()
        },
        _ = function() {
          switch (Z) {
            case "t":
              return B("t"), B("r"), B("u"), B("e"), !0;
            case "f":
              return B("f"), B("a"), B("l"), B("s"), B("e"), !1;
            case "n":
              return B("n"), B("u"), B("l"), B("l"), null
          }
          w("Unexpected '" + Z + "'")
        },
        F, g = function() {
          var K = [];
          if (Z === "[") {
            if (B("["), X(), Z === "]") return B("]"), K;
            while (Z) {
              if (K.push(F()), X(), Z === "]") return B("]"), K;
              B(","), X()
            }
          }
          w("Bad array")
        },
        J = function() {
          var K, Q = Object.create(null);
          if (Z === "{") {
            if (B("{"), X(), Z === "}") return B("}"), Q;
            while (Z) {
              if (K = V(), X(), B(":"), d.strict === !0 && Object.hasOwnProperty.call(Q, K)) w('Duplicate key "' + K + '"');
              if (Cp5.test(K) === !0)
                if (d.protoAction === "error") w("Object contains forbidden prototype property");
                else if (d.protoAction === "ignore") F();
              else Q[K] = F();
              else if (Wp5.test(K) === !0)
                if (d.constructorAction === "error") w("Object contains forbidden constructor property");
                else if (d.constructorAction === "ignore") F();
              else Q[K] = F();
              else Q[K] = F();
              if (X(), Z === "}") return B("}"), Q;
              B(","), X()
            }
          }
          w("Bad object")
        };
      return F = function() {
          switch (X(), Z) {
            case "{":
              return J();
            case "[":
              return g();
            case '"':
              return V();
            case "-":
              return A();
            default:
              return Z >= "0" && Z <= "9" ? A() : _()
          }
        },
        function(K, Q) {
          var E;
          if (W = K + "", G = 0, Z = " ", E = F(), X(), Z) w("Syntax error");
          return typeof Q === "function" ? function S(P, $) {
            var h, O, T = P[$];
            if (T && typeof T === "object") Object.keys(T).forEach(function(V1) {
              if (O = S(T, V1), O !== void 0) T[V1] = O;
              else delete T[V1]
            });
            return Q.call(P, $, T)
          }({
            "": E
          }, "") : E
        }
    };
  nI2.exports = wp5
})
// @from(Start 3743105, End 3743328)
oI2 = Y((xA3, kr) => {
  var aI2 = iI2().stringify,
    sI2 = rI2();
  kr.exports = function(I) {
    return {
      parse: sI2(I),
      stringify: aI2
    }
  };
  kr.exports.parse = sI2();
  kr.exports.stringify = aI2
})
// @from(Start 3743334, End 3744581)
pD1 = Y((Cd2) => {
  Object.defineProperty(Cd2, "__esModule", {
    value: !0
  });
  Cd2.GCE_LINUX_BIOS_PATHS = void 0;
  Cd2.isGoogleCloudServerless = Id2;
  Cd2.isGoogleComputeEngineLinux = dd2;
  Cd2.isGoogleComputeEngineMACAddress = Gd2;
  Cd2.isGoogleComputeEngine = Zd2;
  Cd2.detectGCPResidency = Ap5;
  var eI2 = B1("fs"),
    tI2 = B1("os");
  Cd2.GCE_LINUX_BIOS_PATHS = {
    BIOS_DATE: "/sys/class/dmi/id/bios_date",
    BIOS_VENDOR: "/sys/class/dmi/id/bios_vendor"
  };
  var Bp5 = /^42:01/;

  function Id2() {
    return !!(process.env.CLOUD_RUN_JOB || process.env.FUNCTION_NAME || process.env.K_SERVICE)
  }

  function dd2() {
    if (tI2.platform() !== "linux") return !1;
    try {
      eI2.statSync(Cd2.GCE_LINUX_BIOS_PATHS.BIOS_DATE);
      let I = eI2.readFileSync(Cd2.GCE_LINUX_BIOS_PATHS.BIOS_VENDOR, "utf8");
      return /Google/.test(I)
    } catch (I) {
      return !1
    }
  }

  function Gd2() {
    let I = tI2.networkInterfaces();
    for (let d of Object.values(I)) {
      if (!d) continue;
      for (let {
          mac: G
        }
        of d)
        if (Bp5.test(G)) return !0
    }
    return !1
  }

  function Zd2() {
    return dd2() || Gd2()
  }

  function Ap5() {
    return Id2() || Zd2()
  }
})
// @from(Start 3744587, End 3745593)
Bd2 = Y((Wd2) => {
  Object.defineProperty(Wd2, "__esModule", {
    value: !0
  });
  Wd2.Colours = void 0;
  class j4 {
    static isEnabled(I) {
      return I.isTTY && (typeof I.getColorDepth === "function" ? I.getColorDepth() > 2 : !0)
    }
    static refresh() {
      if (j4.enabled = j4.isEnabled(process.stderr), !this.enabled) j4.reset = "", j4.bright = "", j4.dim = "", j4.red = "", j4.green = "", j4.yellow = "", j4.blue = "", j4.magenta = "", j4.cyan = "", j4.white = "", j4.grey = "";
      else j4.reset = "\x1B[0m", j4.bright = "\x1B[1m", j4.dim = "\x1B[2m", j4.red = "\x1B[31m", j4.green = "\x1B[32m", j4.yellow = "\x1B[33m", j4.blue = "\x1B[34m", j4.magenta = "\x1B[35m", j4.cyan = "\x1B[36m", j4.white = "\x1B[37m", j4.grey = "\x1B[90m"
    }
  }
  Wd2.Colours = j4;
  j4.enabled = !1;
  j4.reset = "";
  j4.bright = "";
  j4.dim = "";
  j4.red = "";
  j4.green = "";
  j4.yellow = "";
  j4.blue = "";
  j4.magenta = "";
  j4.cyan = "";
  j4.white = "";
  j4.grey = "";
  j4.refresh()
})
// @from(Start 3745599, End 3751984)
Dd2 = Y((_9) => {
  var Hp5 = _9 && _9.__createBinding || (Object.create ? function(I, d, G, Z) {
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
    Fp5 = _9 && _9.__setModuleDefault || (Object.create ? function(I, d) {
      Object.defineProperty(I, "default", {
        enumerable: !0,
        value: d
      })
    } : function(I, d) {
      I.default = d
    }),
    Ad2 = _9 && _9.__importStar || function(I) {
      if (I && I.__esModule) return I;
      var d = {};
      if (I != null) {
        for (var G in I)
          if (G !== "default" && Object.prototype.hasOwnProperty.call(I, G)) Hp5(d, I, G)
      }
      return Fp5(d, I), d
    };
  Object.defineProperty(_9, "__esModule", {
    value: !0
  });
  _9.env = _9.DebugLogBackendBase = _9.placeholder = _9.AdhocDebugLogger = _9.LogSeverity = void 0;
  _9.getNodeBackend = iD1;
  _9.getDebugBackend = Jp5;
  _9.getStructuredBackend = Kp5;
  _9.setBackend = Np5;
  _9.log = _d2;
  var gp5 = B1("node:events"),
    nP = Ad2(B1("node:process")),
    Vd2 = Ad2(B1("node:util")),
    BG = Bd2(),
    GW;
  (function(I) {
    I.DEFAULT = "DEFAULT", I.DEBUG = "DEBUG", I.INFO = "INFO", I.WARNING = "WARNING", I.ERROR = "ERROR"
  })(GW || (_9.LogSeverity = GW = {}));
  class cr extends gp5.EventEmitter {
    constructor(I, d) {
      super();
      this.namespace = I, this.upstream = d, this.func = Object.assign(this.invoke.bind(this), {
        instance: this,
        on: (G, Z) => this.on(G, Z)
      }), this.func.debug = (...G) => this.invokeSeverity(GW.DEBUG, ...G), this.func.info = (...G) => this.invokeSeverity(GW.INFO, ...G), this.func.warn = (...G) => this.invokeSeverity(GW.WARNING, ...G), this.func.error = (...G) => this.invokeSeverity(GW.ERROR, ...G), this.func.sublog = (G) => _d2(G, this.func)
    }
    invoke(I, ...d) {
      if (this.upstream) this.upstream(I, ...d);
      this.emit("log", I, d)
    }
    invokeSeverity(I, ...d) {
      this.invoke({
        severity: I
      }, ...d)
    }
  }
  _9.AdhocDebugLogger = cr;
  _9.placeholder = new cr("", () => {}).func;
  class rP {
    constructor() {
      var I;
      this.cached = new Map, this.filters = [], this.filtersSet = !1;
      let d = (I = nP.env[_9.env.nodeEnables]) !== null && I !== void 0 ? I : "*";
      if (d === "all") d = "*";
      this.filters = d.split(",")
    }
    log(I, d, ...G) {
      try {
        if (!this.filtersSet) this.setFilters(), this.filtersSet = !0;
        let Z = this.cached.get(I);
        if (!Z) Z = this.makeLogger(I), this.cached.set(I, Z);
        Z(d, ...G)
      } catch (Z) {
        console.error(Z)
      }
    }
  }
  _9.DebugLogBackendBase = rP;
  class rD1 extends rP {
    constructor() {
      super(...arguments);
      this.enabledRegexp = /.*/g
    }
    isEnabled(I) {
      return this.enabledRegexp.test(I)
    }
    makeLogger(I) {
      if (!this.enabledRegexp.test(I)) return () => {};
      return (d, ...G) => {
        var Z;
        let C = `${BG.Colours.green}${I}${BG.Colours.reset}`,
          W = `${BG.Colours.yellow}${nP.pid}${BG.Colours.reset}`,
          w;
        switch (d.severity) {
          case GW.ERROR:
            w = `${BG.Colours.red}${d.severity}${BG.Colours.reset}`;
            break;
          case GW.INFO:
            w = `${BG.Colours.magenta}${d.severity}${BG.Colours.reset}`;
            break;
          case GW.WARNING:
            w = `${BG.Colours.yellow}${d.severity}${BG.Colours.reset}`;
            break;
          default:
            w = (Z = d.severity) !== null && Z !== void 0 ? Z : GW.DEFAULT;
            break
        }
        let B = Vd2.formatWithOptions({
            colors: BG.Colours.enabled
          }, ...G),
          A = Object.assign({}, d);
        delete A.severity;
        let V = Object.getOwnPropertyNames(A).length ? JSON.stringify(A) : "",
          X = V ? `${BG.Colours.grey}${V}${BG.Colours.reset}` : "";
        console.error("%s [%s|%s] %s%s", W, C, w, B, V ? ` ${X}` : "")
      }
    }
    setFilters() {
      let d = this.filters.join(",").replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^");
      this.enabledRegexp = new RegExp(`^${d}$`, "i")
    }
  }

  function iD1() {
    return new rD1
  }
  class Xd2 extends rP {
    constructor(I) {
      super();
      this.debugPkg = I
    }
    makeLogger(I) {
      let d = this.debugPkg(I);
      return (G, ...Z) => {
        d(Z[0], ...Z.slice(1))
      }
    }
    setFilters() {
      var I;
      let d = (I = nP.env.NODE_DEBUG) !== null && I !== void 0 ? I : "";
      nP.env.NODE_DEBUG = `${d}${d?",":""}${this.filters.join(",")}`
    }
  }

  function Jp5(I) {
    return new Xd2(I)
  }
  class Yd2 extends rP {
    constructor(I) {
      var d;
      super();
      this.upstream = (d = I) !== null && d !== void 0 ? d : new rD1
    }
    makeLogger(I) {
      let d = this.upstream.makeLogger(I);
      return (G, ...Z) => {
        var C;
        let W = (C = G.severity) !== null && C !== void 0 ? C : GW.INFO,
          w = Object.assign({
            severity: W,
            message: Vd2.format(...Z)
          }, G),
          B = JSON.stringify(w);
        d(G, B)
      }
    }
    setFilters() {
      this.upstream.setFilters()
    }
  }

  function Kp5(I) {
    return new Yd2(I)
  }
  _9.env = {
    nodeEnables: "GOOGLE_SDK_NODE_LOGGING"
  };
  var nD1 = new Map,
    mZ = void 0;

  function Np5(I) {
    mZ = I, nD1.clear()
  }

  function _d2(I, d) {
    if (!nP.env[_9.env.nodeEnables]) return _9.placeholder;
    if (!I) return _9.placeholder;
    if (d) I = `${d.instance.namespace}:${I}`;
    let Z = nD1.get(I);
    if (Z) return Z.func;
    if (mZ === null) return _9.placeholder;
    else if (mZ === void 0) mZ = iD1();
    let C = (() => {
      let W = void 0;
      return new cr(I, (B, ...A) => {
        if (W !== mZ) {
          if (mZ === null) return;
          else if (mZ === void 0) mZ = iD1();
          W = mZ
        }
        mZ === null || mZ === void 0 || mZ.log(I, B, ...A)
      })
    })();
    return nD1.set(I, C), C.func
  }
})
// @from(Start 3751990, End 3752725)
Hd2 = Y((PJ) => {
  var zp5 = PJ && PJ.__createBinding || (Object.create ? function(I, d, G, Z) {
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
    Qp5 = PJ && PJ.__exportStar || function(I, d) {
      for (var G in I)
        if (G !== "default" && !Object.prototype.hasOwnProperty.call(d, G)) zp5(d, I, G)
    };
  Object.defineProperty(PJ, "__esModule", {
    value: !0
  });
  Qp5(Dd2(), PJ)
})
// @from(Start 3752731, End 3759234)
sP = Y((I4) => {
  var fp5 = I4 && I4.__createBinding || (Object.create ? function(I, d, G, Z) {
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
    qp5 = I4 && I4.__exportStar || function(I, d) {
      for (var G in I)
        if (G !== "default" && !Object.prototype.hasOwnProperty.call(d, G)) fp5(d, I, G)
    };
  Object.defineProperty(I4, "__esModule", {
    value: !0
  });
  I4.gcpResidencyCache = I4.METADATA_SERVER_DETECTION = I4.HEADERS = I4.HEADER_VALUE = I4.HEADER_NAME = I4.SECONDARY_HOST_ADDRESS = I4.HOST_ADDRESS = I4.BASE_PATH = void 0;
  I4.instance = Sp5;
  I4.project = Lp5;
  I4.universe = yp5;
  I4.bulk = Pp5;
  I4.isAvailable = up5;
  I4.resetIsAvailableCache = Tp5;
  I4.getGCPResidency = oD1;
  I4.setGCPResidency = gd2;
  I4.requestTimeout = Jd2;
  var aD1 = dW(),
    Rp5 = oI2(),
    Up5 = pD1(),
    vp5 = Hd2();
  I4.BASE_PATH = "/computeMetadata/v1";
  I4.HOST_ADDRESS = "http://169.254.169.254";
  I4.SECONDARY_HOST_ADDRESS = "http://metadata.google.internal.";
  I4.HEADER_NAME = "Metadata-Flavor";
  I4.HEADER_VALUE = "Google";
  I4.HEADERS = Object.freeze({
    [I4.HEADER_NAME]: I4.HEADER_VALUE
  });
  var Fd2 = vp5.log("gcp metadata");
  I4.METADATA_SERVER_DETECTION = Object.freeze({
    "assume-present": "don't try to ping the metadata server, but assume it's present",
    none: "don't try to ping the metadata server, but don't try to use it either",
    "bios-only": "treat the result of a BIOS probe as canonical (don't fall back to pinging)",
    "ping-only": "skip the BIOS probe, and go straight to pinging"
  });

  function sD1(I) {
    if (!I) I = process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST || I4.HOST_ADDRESS;
    if (!/^https?:\/\//.test(I)) I = `http://${I}`;
    return new URL(I4.BASE_PATH, I).href
  }

  function Ep5(I) {
    Object.keys(I).forEach((d) => {
      switch (d) {
        case "params":
        case "property":
        case "headers":
          break;
        case "qs":
          throw new Error("'qs' is not a valid configuration option. Please use 'params' instead.");
        default:
          throw new Error(`'${d}' is not a valid configuration option.`)
      }
    })
  }
  async function aP(I, d = {}, G = 3, Z = !1) {
    let C = "",
      W = {},
      w = {};
    if (typeof I === "object") {
      let X = I;
      C = X.metadataKey, W = X.params || W, w = X.headers || w, G = X.noResponseRetries || G, Z = X.fastFail || Z
    } else C = I;
    if (typeof d === "string") C += `/${d}`;
    else {
      if (Ep5(d), d.property) C += `/${d.property}`;
      w = d.headers || w, W = d.params || W
    }
    let B = Z ? Mp5 : aD1.request,
      A = {
        url: `${sD1()}/${C}`,
        headers: {
          ...I4.HEADERS,
          ...w
        },
        retryConfig: {
          noResponseRetries: G
        },
        params: W,
        responseType: "text",
        timeout: Jd2()
      };
    Fd2.info("instance request %j", A);
    let V = await B(A);
    if (Fd2.info("instance metadata is %s", V.data), V.headers[I4.HEADER_NAME.toLowerCase()] !== I4.HEADER_VALUE) throw new Error(`Invalid response from metadata service: incorrect ${I4.HEADER_NAME} header. Expected '${I4.HEADER_VALUE}', got ${V.headers[I4.HEADER_NAME.toLowerCase()]?`'${V.headers[I4.HEADER_NAME.toLowerCase()]}'`:"no header"}`);
    if (typeof V.data === "string") try {
      return Rp5.parse(V.data)
    } catch (X) {}
    return V.data
  }
  async function Mp5(I) {
    var d;
    let G = {
        ...I,
        url: (d = I.url) === null || d === void 0 ? void 0 : d.toString().replace(sD1(), sD1(I4.SECONDARY_HOST_ADDRESS))
      },
      Z = !1,
      C = aD1.request(I).then((w) => {
        return Z = !0, w
      }).catch((w) => {
        if (Z) return W;
        else throw Z = !0, w
      }),
      W = aD1.request(G).then((w) => {
        return Z = !0, w
      }).catch((w) => {
        if (Z) return C;
        else throw Z = !0, w
      });
    return Promise.race([C, W])
  }

  function Sp5(I) {
    return aP("instance", I)
  }

  function Lp5(I) {
    return aP("project", I)
  }

  function yp5(I) {
    return aP("universe", I)
  }
  async function Pp5(I) {
    let d = {};
    return await Promise.all(I.map((G) => {
      return (async () => {
        let Z = await aP(G),
          C = G.metadataKey;
        d[C] = Z
      })()
    })), d
  }

  function $p5() {
    return process.env.DETECT_GCP_RETRIES ? Number(process.env.DETECT_GCP_RETRIES) : 0
  }
  var pr;
  async function up5() {
    if (process.env.METADATA_SERVER_DETECTION) {
      let I = process.env.METADATA_SERVER_DETECTION.trim().toLocaleLowerCase();
      if (!(I in I4.METADATA_SERVER_DETECTION)) throw new RangeError(`Unknown \`METADATA_SERVER_DETECTION\` env variable. Got \`${I}\`, but it should be \`${Object.keys(I4.METADATA_SERVER_DETECTION).join("`, `")}\`, or unset`);
      switch (I) {
        case "assume-present":
          return !0;
        case "none":
          return !1;
        case "bios-only":
          return oD1();
        case "ping-only":
      }
    }
    try {
      if (pr === void 0) pr = aP("instance", void 0, $p5(), !(process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST));
      return await pr, !0
    } catch (I) {
      let d = I;
      if (process.env.DEBUG_AUTH) console.info(d);
      if (d.type === "request-timeout") return !1;
      if (d.response && d.response.status === 404) return !1;
      else {
        if (!(d.response && d.response.status === 404) && (!d.code || !["EHOSTDOWN", "EHOSTUNREACH", "ENETUNREACH", "ENOENT", "ENOTFOUND", "ECONNREFUSED"].includes(d.code))) {
          let G = "UNKNOWN";
          if (d.code) G = d.code;
          process.emitWarning(`received unexpected error = ${d.message} code = ${G}`, "MetadataLookupWarning")
        }
        return !1
      }
    }
  }

  function Tp5() {
    pr = void 0
  }
  I4.gcpResidencyCache = null;

  function oD1() {
    if (I4.gcpResidencyCache === null) gd2();
    return I4.gcpResidencyCache
  }

  function gd2(I = null) {
    I4.gcpResidencyCache = I !== null ? I : Up5.detectGCPResidency()
  }

  function Jd2() {
    return oD1() ? 0 : 3000
  }
  qp5(pD1(), I4)
})
// @from(Start 3759240, End 3761402)
zd2 = Y((xp5) => {
  xp5.byteLength = mp5;
  xp5.toByteArray = bp5;
  xp5.fromByteArray = kp5;
  var qB = [],
    lZ = [],
    Op5 = typeof Uint8Array !== "undefined" ? Uint8Array : Array,
    eD1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for ($J = 0, Kd2 = eD1.length; $J < Kd2; ++$J) qB[$J] = eD1[$J], lZ[eD1.charCodeAt($J)] = $J;
  var $J, Kd2;
  lZ[45] = 62;
  lZ[95] = 63;

  function Nd2(I) {
    var d = I.length;
    if (d % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var G = I.indexOf("=");
    if (G === -1) G = d;
    var Z = G === d ? 0 : 4 - G % 4;
    return [G, Z]
  }

  function mp5(I) {
    var d = Nd2(I),
      G = d[0],
      Z = d[1];
    return (G + Z) * 3 / 4 - Z
  }

  function lp5(I, d, G) {
    return (d + G) * 3 / 4 - G
  }

  function bp5(I) {
    var d, G = Nd2(I),
      Z = G[0],
      C = G[1],
      W = new Op5(lp5(I, Z, C)),
      w = 0,
      B = C > 0 ? Z - 4 : Z,
      A;
    for (A = 0; A < B; A += 4) d = lZ[I.charCodeAt(A)] << 18 | lZ[I.charCodeAt(A + 1)] << 12 | lZ[I.charCodeAt(A + 2)] << 6 | lZ[I.charCodeAt(A + 3)], W[w++] = d >> 16 & 255, W[w++] = d >> 8 & 255, W[w++] = d & 255;
    if (C === 2) d = lZ[I.charCodeAt(A)] << 2 | lZ[I.charCodeAt(A + 1)] >> 4, W[w++] = d & 255;
    if (C === 1) d = lZ[I.charCodeAt(A)] << 10 | lZ[I.charCodeAt(A + 1)] << 4 | lZ[I.charCodeAt(A + 2)] >> 2, W[w++] = d >> 8 & 255, W[w++] = d & 255;
    return W
  }

  function hp5(I) {
    return qB[I >> 18 & 63] + qB[I >> 12 & 63] + qB[I >> 6 & 63] + qB[I & 63]
  }

  function jp5(I, d, G) {
    var Z, C = [];
    for (var W = d; W < G; W += 3) Z = (I[W] << 16 & 16711680) + (I[W + 1] << 8 & 65280) + (I[W + 2] & 255), C.push(hp5(Z));
    return C.join("")
  }

  function kp5(I) {
    var d, G = I.length,
      Z = G % 3,
      C = [],
      W = 16383;
    for (var w = 0, B = G - Z; w < B; w += W) C.push(jp5(I, w, w + W > B ? B : w + W));
    if (Z === 1) d = I[G - 1], C.push(qB[d >> 2] + qB[d << 4 & 63] + "==");
    else if (Z === 2) d = (I[G - 2] << 8) + I[G - 1], C.push(qB[d >> 10] + qB[d >> 4 & 63] + qB[d << 2 & 63] + "=");
    return C.join("")
  }
})
// @from(Start 3761408, End 3763799)
qd2 = Y((Qd2) => {
  Object.defineProperty(Qd2, "__esModule", {
    value: !0
  });
  Qd2.BrowserCrypto = void 0;
  var bq = zd2(),
    np5 = hq();
  class ir {
    constructor() {
      if (typeof window === "undefined" || window.crypto === void 0 || window.crypto.subtle === void 0) throw new Error("SubtleCrypto not found. Make sure it's an https:// website.")
    }
    async sha256DigestBase64(I) {
      let d = new TextEncoder().encode(I),
        G = await window.crypto.subtle.digest("SHA-256", d);
      return bq.fromByteArray(new Uint8Array(G))
    }
    randomBytesBase64(I) {
      let d = new Uint8Array(I);
      return window.crypto.getRandomValues(d), bq.fromByteArray(d)
    }
    static padBase64(I) {
      while (I.length % 4 !== 0) I += "=";
      return I
    }
    async verify(I, d, G) {
      let Z = {
          name: "RSASSA-PKCS1-v1_5",
          hash: {
            name: "SHA-256"
          }
        },
        C = new TextEncoder().encode(d),
        W = bq.toByteArray(ir.padBase64(G)),
        w = await window.crypto.subtle.importKey("jwk", I, Z, !0, ["verify"]);
      return await window.crypto.subtle.verify(Z, w, W, C)
    }
    async sign(I, d) {
      let G = {
          name: "RSASSA-PKCS1-v1_5",
          hash: {
            name: "SHA-256"
          }
        },
        Z = new TextEncoder().encode(d),
        C = await window.crypto.subtle.importKey("jwk", I, G, !0, ["sign"]),
        W = await window.crypto.subtle.sign(G, C, Z);
      return bq.fromByteArray(new Uint8Array(W))
    }
    decodeBase64StringUtf8(I) {
      let d = bq.toByteArray(ir.padBase64(I));
      return new TextDecoder().decode(d)
    }
    encodeBase64StringUtf8(I) {
      let d = new TextEncoder().encode(I);
      return bq.fromByteArray(d)
    }
    async sha256DigestHex(I) {
      let d = new TextEncoder().encode(I),
        G = await window.crypto.subtle.digest("SHA-256", d);
      return np5.fromArrayBufferToHex(G)
    }
    async signWithHmacSha256(I, d) {
      let G = typeof I === "string" ? I : String.fromCharCode(...new Uint16Array(I)),
        Z = new TextEncoder,
        C = await window.crypto.subtle.importKey("raw", Z.encode(G), {
          name: "HMAC",
          hash: {
            name: "SHA-256"
          }
        }, !1, ["sign"]);
      return window.crypto.subtle.sign("HMAC", C, Z.encode(d))
    }
  }
  Qd2.BrowserCrypto = ir
})
// @from(Start 3763805, End 3765026)
Ed2 = Y((Ud2) => {
  Object.defineProperty(Ud2, "__esModule", {
    value: !0
  });
  Ud2.NodeCrypto = void 0;
  var jq = B1("crypto");
  class Rd2 {
    async sha256DigestBase64(I) {
      return jq.createHash("sha256").update(I).digest("base64")
    }
    randomBytesBase64(I) {
      return jq.randomBytes(I).toString("base64")
    }
    async verify(I, d, G) {
      let Z = jq.createVerify("RSA-SHA256");
      return Z.update(d), Z.end(), Z.verify(I, G, "base64")
    }
    async sign(I, d) {
      let G = jq.createSign("RSA-SHA256");
      return G.update(d), G.end(), G.sign(I, "base64")
    }
    decodeBase64StringUtf8(I) {
      return Buffer.from(I, "base64").toString("utf-8")
    }
    encodeBase64StringUtf8(I) {
      return Buffer.from(I, "utf-8").toString("base64")
    }
    async sha256DigestHex(I) {
      return jq.createHash("sha256").update(I).digest("hex")
    }
    async signWithHmacSha256(I, d) {
      let G = typeof I === "string" ? I : ap5(I);
      return rp5(jq.createHmac("sha256", G).update(d).digest())
    }
  }
  Ud2.NodeCrypto = Rd2;

  function rp5(I) {
    return I.buffer.slice(I.byteOffset, I.byteOffset + I.byteLength)
  }

  function ap5(I) {
    return Buffer.from(I)
  }
})
// @from(Start 3765032, End 3765634)
hq = Y((Sd2) => {
  Object.defineProperty(Sd2, "__esModule", {
    value: !0
  });
  Sd2.createCrypto = ep5;
  Sd2.hasBrowserCrypto = Md2;
  Sd2.fromArrayBufferToHex = tp5;
  var sp5 = qd2(),
    op5 = Ed2();

  function ep5() {
    if (Md2()) return new sp5.BrowserCrypto;
    return new op5.NodeCrypto
  }

  function Md2() {
    return typeof window !== "undefined" && typeof window.crypto !== "undefined" && typeof window.crypto.subtle !== "undefined"
  }

  function tp5(I) {
    return Array.from(new Uint8Array(I)).map((G) => {
      return G.toString(16).padStart(2, "0")
    }).join("")
  }
})
// @from(Start 3765640, End 3766270)
yd2 = Y((Ld2) => {
  Object.defineProperty(Ld2, "__esModule", {
    value: !0
  });
  Ld2.validate = Zi5;

  function Zi5(I) {
    let d = [{
      invalid: "uri",
      expected: "url"
    }, {
      invalid: "json",
      expected: "data"
    }, {
      invalid: "qs",
      expected: "params"
    }];
    for (let G of d)
      if (I[G.invalid]) {
        let Z = `'${G.invalid}' is not a valid configuration option. Please use '${G.expected}' instead. This library is using Axios for requests. Please see https://github.com/axios/axios to learn more about the valid request options.`;
        throw new Error(Z)
      }
  }
})