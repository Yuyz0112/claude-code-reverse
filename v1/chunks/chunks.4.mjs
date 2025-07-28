
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