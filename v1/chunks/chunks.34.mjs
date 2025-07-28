
// @from(Start 3766276, End 3768968)
tD1 = Y((IV3, Wi5) => {
  Wi5.exports = {
    name: "google-auth-library",
    version: "9.15.1",
    author: "Google Inc.",
    description: "Google APIs Authentication Client Library for Node.js",
    engines: {
      node: ">=14"
    },
    main: "./build/src/index.js",
    types: "./build/src/index.d.ts",
    repository: "googleapis/google-auth-library-nodejs.git",
    keywords: ["google", "api", "google apis", "client", "client library"],
    dependencies: {
      "base64-js": "^1.3.0",
      "ecdsa-sig-formatter": "^1.0.11",
      gaxios: "^6.1.1",
      "gcp-metadata": "^6.1.0",
      gtoken: "^7.0.0",
      jws: "^4.0.0"
    },
    devDependencies: {
      "@types/base64-js": "^1.2.5",
      "@types/chai": "^4.1.7",
      "@types/jws": "^3.1.0",
      "@types/mocha": "^9.0.0",
      "@types/mv": "^2.1.0",
      "@types/ncp": "^2.0.1",
      "@types/node": "^20.4.2",
      "@types/sinon": "^17.0.0",
      "assert-rejects": "^1.0.0",
      c8: "^8.0.0",
      chai: "^4.2.0",
      cheerio: "1.0.0-rc.12",
      codecov: "^3.0.2",
      "engine.io": "6.6.2",
      gts: "^5.0.0",
      "is-docker": "^2.0.0",
      jsdoc: "^4.0.0",
      "jsdoc-fresh": "^3.0.0",
      "jsdoc-region-tag": "^3.0.0",
      karma: "^6.0.0",
      "karma-chrome-launcher": "^3.0.0",
      "karma-coverage": "^2.0.0",
      "karma-firefox-launcher": "^2.0.0",
      "karma-mocha": "^2.0.0",
      "karma-sourcemap-loader": "^0.4.0",
      "karma-webpack": "5.0.0",
      keypair: "^1.0.4",
      linkinator: "^4.0.0",
      mocha: "^9.2.2",
      mv: "^2.1.1",
      ncp: "^2.0.0",
      nock: "^13.0.0",
      "null-loader": "^4.0.0",
      pdfmake: "0.2.12",
      puppeteer: "^21.0.0",
      sinon: "^18.0.0",
      "ts-loader": "^8.0.0",
      typescript: "^5.1.6",
      webpack: "^5.21.2",
      "webpack-cli": "^4.0.0"
    },
    files: ["build/src", "!build/src/**/*.map"],
    scripts: {
      test: "c8 mocha build/test",
      clean: "gts clean",
      prepare: "npm run compile",
      lint: "gts check",
      compile: "tsc -p .",
      fix: "gts fix",
      pretest: "npm run compile -- --sourceMap",
      docs: "jsdoc -c .jsdoc.json",
      "samples-setup": "cd samples/ && npm link ../ && npm run setup && cd ../",
      "samples-test": "cd samples/ && npm link ../ && npm test && cd ../",
      "system-test": "mocha build/system-test --timeout 60000",
      "presystem-test": "npm run compile -- --sourceMap",
      webpack: "webpack",
      "browser-test": "karma start",
      "docs-test": "linkinator docs",
      "predocs-test": "npm run docs",
      prelint: "cd samples; npm link ../; npm install",
      precompile: "gts clean"
    },
    license: "Apache-2.0"
  }
})
// @from(Start 3768974, End 3770645)
eP = Y(($d2) => {
  Object.defineProperty($d2, "__esModule", {
    value: !0
  });
  $d2.DefaultTransporter = void 0;
  var wi5 = dW(),
    Bi5 = yd2(),
    Ai5 = tD1(),
    Pd2 = "google-api-nodejs-client";
  class oP {
    constructor() {
      this.instance = new wi5.Gaxios
    }
    configure(I = {}) {
      if (I.headers = I.headers || {}, typeof window === "undefined") {
        let d = I.headers["User-Agent"];
        if (!d) I.headers["User-Agent"] = oP.USER_AGENT;
        else if (!d.includes(`${Pd2}/`)) I.headers["User-Agent"] = `${d} ${oP.USER_AGENT}`;
        if (!I.headers["x-goog-api-client"]) {
          let G = process.version.replace(/^v/, "");
          I.headers["x-goog-api-client"] = `gl-node/${G}`
        }
      }
      return I
    }
    request(I) {
      return I = this.configure(I), Bi5.validate(I), this.instance.request(I).catch((d) => {
        throw this.processError(d)
      })
    }
    get defaults() {
      return this.instance.defaults
    }
    set defaults(I) {
      this.instance.defaults = I
    }
    processError(I) {
      let d = I.response,
        G = I,
        Z = d ? d.data : null;
      if (d && Z && Z.error && d.status !== 200)
        if (typeof Z.error === "string") G.message = Z.error, G.status = d.status;
        else if (Array.isArray(Z.error.errors)) G.message = Z.error.errors.map((C) => C.message).join(`
`), G.code = Z.error.code, G.errors = Z.error.errors;
      else G.message = Z.error.message, G.code = Z.error.code;
      else if (d && d.status >= 400) G.message = Z, G.status = d.status;
      return G
    }
  }
  $d2.DefaultTransporter = oP;
  oP.USER_AGENT = `${Pd2}/${Ai5.version}`
})
// @from(Start 3770651, End 3771799)
kq = Y((IH1, Od2) => {
  /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
  var nr = B1("buffer"),
    RB = nr.Buffer;

  function Td2(I, d) {
    for (var G in I) d[G] = I[G]
  }
  if (RB.from && RB.alloc && RB.allocUnsafe && RB.allocUnsafeSlow) Od2.exports = nr;
  else Td2(nr, IH1), IH1.Buffer = uJ;

  function uJ(I, d, G) {
    return RB(I, d, G)
  }
  uJ.prototype = Object.create(RB.prototype);
  Td2(RB, uJ);
  uJ.from = function(I, d, G) {
    if (typeof I === "number") throw new TypeError("Argument must not be a number");
    return RB(I, d, G)
  };
  uJ.alloc = function(I, d, G) {
    if (typeof I !== "number") throw new TypeError("Argument must be a number");
    var Z = RB(I);
    if (d !== void 0)
      if (typeof G === "string") Z.fill(d, G);
      else Z.fill(d);
    else Z.fill(0);
    return Z
  };
  uJ.allocUnsafe = function(I) {
    if (typeof I !== "number") throw new TypeError("Argument must be a number");
    return RB(I)
  };
  uJ.allocUnsafeSlow = function(I) {
    if (typeof I !== "number") throw new TypeError("Argument must be a number");
    return nr.SlowBuffer(I)
  }
})
// @from(Start 3771805, End 3772137)
ld2 = Y((GV3, md2) => {
  function dH1(I) {
    var d = (I / 8 | 0) + (I % 8 === 0 ? 0 : 1);
    return d
  }
  var Vi5 = {
    ES256: dH1(256),
    ES384: dH1(384),
    ES512: dH1(521)
  };

  function Xi5(I) {
    var d = Vi5[I];
    if (d) return d;
    throw new Error('Unknown algorithm "' + I + '"')
  }
  md2.exports = Xi5
})
// @from(Start 3772143, End 3774989)
GH1 = Y((ZV3, cd2) => {
  var rr = kq().Buffer,
    hd2 = ld2(),
    ar = 128,
    jd2 = 0,
    Yi5 = 32,
    _i5 = 16,
    Di5 = 2,
    kd2 = _i5 | Yi5 | jd2 << 6,
    sr = Di5 | jd2 << 6;

  function Hi5(I) {
    return I.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
  }

  function xd2(I) {
    if (rr.isBuffer(I)) return I;
    else if (typeof I === "string") return rr.from(I, "base64");
    throw new TypeError("ECDSA signature must be a Base64 string or a Buffer")
  }

  function Fi5(I, d) {
    I = xd2(I);
    var G = hd2(d),
      Z = G + 1,
      C = I.length,
      W = 0;
    if (I[W++] !== kd2) throw new Error('Could not find expected "seq"');
    var w = I[W++];
    if (w === (ar | 1)) w = I[W++];
    if (C - W < w) throw new Error('"seq" specified length of "' + w + '", only "' + (C - W) + '" remaining');
    if (I[W++] !== sr) throw new Error('Could not find expected "int" for "r"');
    var B = I[W++];
    if (C - W - 2 < B) throw new Error('"r" specified length of "' + B + '", only "' + (C - W - 2) + '" available');
    if (Z < B) throw new Error('"r" specified length of "' + B + '", max of "' + Z + '" is acceptable');
    var A = W;
    if (W += B, I[W++] !== sr) throw new Error('Could not find expected "int" for "s"');
    var V = I[W++];
    if (C - W !== V) throw new Error('"s" specified length of "' + V + '", expected "' + (C - W) + '"');
    if (Z < V) throw new Error('"s" specified length of "' + V + '", max of "' + Z + '" is acceptable');
    var X = W;
    if (W += V, W !== C) throw new Error('Expected to consume entire buffer, but "' + (C - W) + '" bytes remain');
    var _ = G - B,
      F = G - V,
      g = rr.allocUnsafe(_ + B + F + V);
    for (W = 0; W < _; ++W) g[W] = 0;
    I.copy(g, W, A + Math.max(-_, 0), A + B), W = G;
    for (var J = W; W < J + F; ++W) g[W] = 0;
    return I.copy(g, W, X + Math.max(-F, 0), X + V), g = g.toString("base64"), g = Hi5(g), g
  }

  function bd2(I, d, G) {
    var Z = 0;
    while (d + Z < G && I[d + Z] === 0) ++Z;
    var C = I[d + Z] >= ar;
    if (C) --Z;
    return Z
  }

  function gi5(I, d) {
    I = xd2(I);
    var G = hd2(d),
      Z = I.length;
    if (Z !== G * 2) throw new TypeError('"' + d + '" signatures must be "' + G * 2 + '" bytes, saw "' + Z + '"');
    var C = bd2(I, 0, G),
      W = bd2(I, G, I.length),
      w = G - C,
      B = G - W,
      A = 2 + w + 1 + 1 + B,
      V = A < ar,
      X = rr.allocUnsafe((V ? 2 : 3) + A),
      _ = 0;
    if (X[_++] = kd2, V) X[_++] = A;
    else X[_++] = ar | 1, X[_++] = A & 255;
    if (X[_++] = sr, X[_++] = w, C < 0) X[_++] = 0, _ += I.copy(X, _, 0, G);
    else _ += I.copy(X, _, C, G);
    if (X[_++] = sr, X[_++] = B, W < 0) X[_++] = 0, I.copy(X, _, G);
    else I.copy(X, _, G + W);
    return X
  }
  cd2.exports = {
    derToJose: Fi5,
    joseToDer: gi5
  }
})
// @from(Start 3774995, End 3776798)
pD = Y((cD) => {
  var ZW = cD && cD.__classPrivateFieldGet || function(I, d, G, Z) {
      if (G === "a" && !Z) throw new TypeError("Private accessor was defined without a getter");
      if (typeof d === "function" ? I !== d || !Z : !d.has(I)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return G === "m" ? Z : G === "a" ? Z.call(I) : Z ? Z.value : d.get(I)
    },
    xq, rV, ZH1, CH1;
  Object.defineProperty(cD, "__esModule", {
    value: !0
  });
  cD.LRUCache = void 0;
  cD.snakeToCamel = pd2;
  cD.originalOrCamelOptions = Ji5;

  function pd2(I) {
    return I.replace(/([_][^_])/g, (d) => d.slice(1).toUpperCase())
  }

  function Ji5(I) {
    function d(G) {
      var Z;
      let C = I || {};
      return (Z = C[G]) !== null && Z !== void 0 ? Z : C[pd2(G)]
    }
    return {
      get: d
    }
  }
  class id2 {
    constructor(I) {
      xq.add(this), rV.set(this, new Map), this.capacity = I.capacity, this.maxAge = I.maxAge
    }
    set(I, d) {
      ZW(this, xq, "m", ZH1).call(this, I, d), ZW(this, xq, "m", CH1).call(this)
    }
    get(I) {
      let d = ZW(this, rV, "f").get(I);
      if (!d) return;
      return ZW(this, xq, "m", ZH1).call(this, I, d.value), ZW(this, xq, "m", CH1).call(this), d.value
    }
  }
  cD.LRUCache = id2;
  rV = new WeakMap, xq = new WeakSet, ZH1 = function I(d, G) {
    ZW(this, rV, "f").delete(d), ZW(this, rV, "f").set(d, {
      value: G,
      lastAccessed: Date.now()
    })
  }, CH1 = function I() {
    let d = this.maxAge ? Date.now() - this.maxAge : 0,
      G = ZW(this, rV, "f").entries().next();
    while (!G.done && (ZW(this, rV, "f").size > this.capacity || G.value[1].lastAccessed < d)) ZW(this, rV, "f").delete(G.value[0]), G = ZW(this, rV, "f").entries().next()
  }
})
// @from(Start 3776804, End 3779016)
UB = Y((sd2) => {
  Object.defineProperty(sd2, "__esModule", {
    value: !0
  });
  sd2.AuthClient = sd2.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS = sd2.DEFAULT_UNIVERSE = void 0;
  var Ki5 = B1("events"),
    nd2 = dW(),
    rd2 = eP(),
    Ni5 = pD();
  sd2.DEFAULT_UNIVERSE = "googleapis.com";
  sd2.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS = 300000;
  class ad2 extends Ki5.EventEmitter {
    constructor(I = {}) {
      var d, G, Z, C, W;
      super();
      this.credentials = {}, this.eagerRefreshThresholdMillis = sd2.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS, this.forceRefreshOnFailure = !1, this.universeDomain = sd2.DEFAULT_UNIVERSE;
      let w = Ni5.originalOrCamelOptions(I);
      if (this.apiKey = I.apiKey, this.projectId = (d = w.get("project_id")) !== null && d !== void 0 ? d : null, this.quotaProjectId = w.get("quota_project_id"), this.credentials = (G = w.get("credentials")) !== null && G !== void 0 ? G : {}, this.universeDomain = (Z = w.get("universe_domain")) !== null && Z !== void 0 ? Z : sd2.DEFAULT_UNIVERSE, this.transporter = (C = I.transporter) !== null && C !== void 0 ? C : new rd2.DefaultTransporter, I.transporterOptions) this.transporter.defaults = I.transporterOptions;
      if (I.eagerRefreshThresholdMillis) this.eagerRefreshThresholdMillis = I.eagerRefreshThresholdMillis;
      this.forceRefreshOnFailure = (W = I.forceRefreshOnFailure) !== null && W !== void 0 ? W : !1
    }
    get gaxios() {
      if (this.transporter instanceof nd2.Gaxios) return this.transporter;
      else if (this.transporter instanceof rd2.DefaultTransporter) return this.transporter.instance;
      else if ("instance" in this.transporter && this.transporter.instance instanceof nd2.Gaxios) return this.transporter.instance;
      return null
    }
    setCredentials(I) {
      this.credentials = I
    }
    addSharedMetadataHeaders(I) {
      if (!I["x-goog-user-project"] && this.quotaProjectId) I["x-goog-user-project"] = this.quotaProjectId;
      return I
    }
    static get RETRY_CONFIG() {
      return {
        retry: !0,
        retryConfig: {
          httpMethodsToRetry: ["GET", "PUT", "POST", "HEAD", "OPTIONS", "DELETE"]
        }
      }
    }
  }
  sd2.AuthClient = ad2
})
// @from(Start 3779022, End 3779589)
wH1 = Y((IG2) => {
  Object.defineProperty(IG2, "__esModule", {
    value: !0
  });
  IG2.LoginTicket = void 0;
  class td2 {
    constructor(I, d) {
      this.envelope = I, this.payload = d
    }
    getEnvelope() {
      return this.envelope
    }
    getPayload() {
      return this.payload
    }
    getUserId() {
      let I = this.getPayload();
      if (I && I.sub) return I.sub;
      return null
    }
    getAttributes() {
      return {
        envelope: this.getEnvelope(),
        payload: this.getPayload()
      }
    }
  }
  IG2.LoginTicket = td2
})
// @from(Start 3779595, End 3797949)
TJ = Y((ZG2) => {
  Object.defineProperty(ZG2, "__esModule", {
    value: !0
  });
  ZG2.OAuth2Client = ZG2.ClientAuthentication = ZG2.CertificateFormat = ZG2.CodeChallengeMethod = void 0;
  var zi5 = dW(),
    BH1 = B1("querystring"),
    Qi5 = B1("stream"),
    fi5 = GH1(),
    AH1 = hq(),
    qi5 = UB(),
    Ri5 = wH1(),
    GG2;
  (function(I) {
    I.Plain = "plain", I.S256 = "S256"
  })(GG2 || (ZG2.CodeChallengeMethod = GG2 = {}));
  var aV;
  (function(I) {
    I.PEM = "PEM", I.JWK = "JWK"
  })(aV || (ZG2.CertificateFormat = aV = {}));
  var tP;
  (function(I) {
    I.ClientSecretPost = "ClientSecretPost", I.ClientSecretBasic = "ClientSecretBasic", I.None = "None"
  })(tP || (ZG2.ClientAuthentication = tP = {}));
  class _I extends qi5.AuthClient {
    constructor(I, d, G) {
      let Z = I && typeof I === "object" ? I : {
        clientId: I,
        clientSecret: d,
        redirectUri: G
      };
      super(Z);
      this.certificateCache = {}, this.certificateExpiry = null, this.certificateCacheFormat = aV.PEM, this.refreshTokenPromises = new Map, this._clientId = Z.clientId, this._clientSecret = Z.clientSecret, this.redirectUri = Z.redirectUri, this.endpoints = {
        tokenInfoUrl: "https://oauth2.googleapis.com/tokeninfo",
        oauth2AuthBaseUrl: "https://accounts.google.com/o/oauth2/v2/auth",
        oauth2TokenUrl: "https://oauth2.googleapis.com/token",
        oauth2RevokeUrl: "https://oauth2.googleapis.com/revoke",
        oauth2FederatedSignonPemCertsUrl: "https://www.googleapis.com/oauth2/v1/certs",
        oauth2FederatedSignonJwkCertsUrl: "https://www.googleapis.com/oauth2/v3/certs",
        oauth2IapPublicKeyUrl: "https://www.gstatic.com/iap/verify/public_key",
        ...Z.endpoints
      }, this.clientAuthentication = Z.clientAuthentication || tP.ClientSecretPost, this.issuers = Z.issuers || ["accounts.google.com", "https://accounts.google.com", this.universeDomain]
    }
    generateAuthUrl(I = {}) {
      if (I.code_challenge_method && !I.code_challenge) throw new Error("If a code_challenge_method is provided, code_challenge must be included.");
      if (I.response_type = I.response_type || "code", I.client_id = I.client_id || this._clientId, I.redirect_uri = I.redirect_uri || this.redirectUri, Array.isArray(I.scope)) I.scope = I.scope.join(" ");
      return this.endpoints.oauth2AuthBaseUrl.toString() + "?" + BH1.stringify(I)
    }
    generateCodeVerifier() {
      throw new Error("generateCodeVerifier is removed, please use generateCodeVerifierAsync instead.")
    }
    async generateCodeVerifierAsync() {
      let I = AH1.createCrypto(),
        G = I.randomBytesBase64(96).replace(/\+/g, "~").replace(/=/g, "_").replace(/\//g, "-"),
        C = (await I.sha256DigestBase64(G)).split("=")[0].replace(/\+/g, "-").replace(/\//g, "_");
      return {
        codeVerifier: G,
        codeChallenge: C
      }
    }
    getToken(I, d) {
      let G = typeof I === "string" ? {
        code: I
      } : I;
      if (d) this.getTokenAsync(G).then((Z) => d(null, Z.tokens, Z.res), (Z) => d(Z, null, Z.response));
      else return this.getTokenAsync(G)
    }
    async getTokenAsync(I) {
      let d = this.endpoints.oauth2TokenUrl.toString(),
        G = {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        Z = {
          client_id: I.client_id || this._clientId,
          code_verifier: I.codeVerifier,
          code: I.code,
          grant_type: "authorization_code",
          redirect_uri: I.redirect_uri || this.redirectUri
        };
      if (this.clientAuthentication === tP.ClientSecretBasic) {
        let w = Buffer.from(`${this._clientId}:${this._clientSecret}`);
        G.Authorization = `Basic ${w.toString("base64")}`
      }
      if (this.clientAuthentication === tP.ClientSecretPost) Z.client_secret = this._clientSecret;
      let C = await this.transporter.request({
          ..._I.RETRY_CONFIG,
          method: "POST",
          url: d,
          data: BH1.stringify(Z),
          headers: G
        }),
        W = C.data;
      if (C.data && C.data.expires_in) W.expiry_date = new Date().getTime() + C.data.expires_in * 1000, delete W.expires_in;
      return this.emit("tokens", W), {
        tokens: W,
        res: C
      }
    }
    async refreshToken(I) {
      if (!I) return this.refreshTokenNoCache(I);
      if (this.refreshTokenPromises.has(I)) return this.refreshTokenPromises.get(I);
      let d = this.refreshTokenNoCache(I).then((G) => {
        return this.refreshTokenPromises.delete(I), G
      }, (G) => {
        throw this.refreshTokenPromises.delete(I), G
      });
      return this.refreshTokenPromises.set(I, d), d
    }
    async refreshTokenNoCache(I) {
      var d;
      if (!I) throw new Error("No refresh token is set.");
      let G = this.endpoints.oauth2TokenUrl.toString(),
        Z = {
          refresh_token: I,
          client_id: this._clientId,
          client_secret: this._clientSecret,
          grant_type: "refresh_token"
        },
        C;
      try {
        C = await this.transporter.request({
          ..._I.RETRY_CONFIG,
          method: "POST",
          url: G,
          data: BH1.stringify(Z),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
      } catch (w) {
        if (w instanceof zi5.GaxiosError && w.message === "invalid_grant" && ((d = w.response) === null || d === void 0 ? void 0 : d.data) && /ReAuth/i.test(w.response.data.error_description)) w.message = JSON.stringify(w.response.data);
        throw w
      }
      let W = C.data;
      if (C.data && C.data.expires_in) W.expiry_date = new Date().getTime() + C.data.expires_in * 1000, delete W.expires_in;
      return this.emit("tokens", W), {
        tokens: W,
        res: C
      }
    }
    refreshAccessToken(I) {
      if (I) this.refreshAccessTokenAsync().then((d) => I(null, d.credentials, d.res), I);
      else return this.refreshAccessTokenAsync()
    }
    async refreshAccessTokenAsync() {
      let I = await this.refreshToken(this.credentials.refresh_token),
        d = I.tokens;
      return d.refresh_token = this.credentials.refresh_token, this.credentials = d, {
        credentials: this.credentials,
        res: I.res
      }
    }
    getAccessToken(I) {
      if (I) this.getAccessTokenAsync().then((d) => I(null, d.token, d.res), I);
      else return this.getAccessTokenAsync()
    }
    async getAccessTokenAsync() {
      if (!this.credentials.access_token || this.isTokenExpiring()) {
        if (!this.credentials.refresh_token)
          if (this.refreshHandler) {
            let G = await this.processAndValidateRefreshHandler();
            if (G === null || G === void 0 ? void 0 : G.access_token) return this.setCredentials(G), {
              token: this.credentials.access_token
            }
          } else throw new Error("No refresh token or refresh handler callback is set.");
        let d = await this.refreshAccessTokenAsync();
        if (!d.credentials || d.credentials && !d.credentials.access_token) throw new Error("Could not refresh access token.");
        return {
          token: d.credentials.access_token,
          res: d.res
        }
      } else return {
        token: this.credentials.access_token
      }
    }
    async getRequestHeaders(I) {
      return (await this.getRequestMetadataAsync(I)).headers
    }
    async getRequestMetadataAsync(I) {
      let d = this.credentials;
      if (!d.access_token && !d.refresh_token && !this.apiKey && !this.refreshHandler) throw new Error("No access, refresh token, API key or refresh handler callback is set.");
      if (d.access_token && !this.isTokenExpiring()) {
        d.token_type = d.token_type || "Bearer";
        let w = {
          Authorization: d.token_type + " " + d.access_token
        };
        return {
          headers: this.addSharedMetadataHeaders(w)
        }
      }
      if (this.refreshHandler) {
        let w = await this.processAndValidateRefreshHandler();
        if (w === null || w === void 0 ? void 0 : w.access_token) {
          this.setCredentials(w);
          let B = {
            Authorization: "Bearer " + this.credentials.access_token
          };
          return {
            headers: this.addSharedMetadataHeaders(B)
          }
        }
      }
      if (this.apiKey) return {
        headers: {
          "X-Goog-Api-Key": this.apiKey
        }
      };
      let G = null,
        Z = null;
      try {
        G = await this.refreshToken(d.refresh_token), Z = G.tokens
      } catch (w) {
        let B = w;
        if (B.response && (B.response.status === 403 || B.response.status === 404)) B.message = `Could not refresh access token: ${B.message}`;
        throw B
      }
      let C = this.credentials;
      C.token_type = C.token_type || "Bearer", Z.refresh_token = C.refresh_token, this.credentials = Z;
      let W = {
        Authorization: C.token_type + " " + Z.access_token
      };
      return {
        headers: this.addSharedMetadataHeaders(W),
        res: G.res
      }
    }
    static getRevokeTokenUrl(I) {
      return new _I().getRevokeTokenURL(I).toString()
    }
    getRevokeTokenURL(I) {
      let d = new URL(this.endpoints.oauth2RevokeUrl);
      return d.searchParams.append("token", I), d
    }
    revokeToken(I, d) {
      let G = {
        ..._I.RETRY_CONFIG,
        url: this.getRevokeTokenURL(I).toString(),
        method: "POST"
      };
      if (d) this.transporter.request(G).then((Z) => d(null, Z), d);
      else return this.transporter.request(G)
    }
    revokeCredentials(I) {
      if (I) this.revokeCredentialsAsync().then((d) => I(null, d), I);
      else return this.revokeCredentialsAsync()
    }
    async revokeCredentialsAsync() {
      let I = this.credentials.access_token;
      if (this.credentials = {}, I) return this.revokeToken(I);
      else throw new Error("No access token to revoke.")
    }
    request(I, d) {
      if (d) this.requestAsync(I).then((G) => d(null, G), (G) => {
        return d(G, G.response)
      });
      else return this.requestAsync(I)
    }
    async requestAsync(I, d = !1) {
      let G;
      try {
        let Z = await this.getRequestMetadataAsync(I.url);
        if (I.headers = I.headers || {}, Z.headers && Z.headers["x-goog-user-project"]) I.headers["x-goog-user-project"] = Z.headers["x-goog-user-project"];
        if (Z.headers && Z.headers.Authorization) I.headers.Authorization = Z.headers.Authorization;
        if (this.apiKey) I.headers["X-Goog-Api-Key"] = this.apiKey;
        G = await this.transporter.request(I)
      } catch (Z) {
        let C = Z.response;
        if (C) {
          let W = C.status,
            w = this.credentials && this.credentials.access_token && this.credentials.refresh_token && (!this.credentials.expiry_date || this.forceRefreshOnFailure),
            B = this.credentials && this.credentials.access_token && !this.credentials.refresh_token && (!this.credentials.expiry_date || this.forceRefreshOnFailure) && this.refreshHandler,
            A = C.config.data instanceof Qi5.Readable,
            V = W === 401 || W === 403;
          if (!d && V && !A && w) return await this.refreshAccessTokenAsync(), this.requestAsync(I, !0);
          else if (!d && V && !A && B) {
            let X = await this.processAndValidateRefreshHandler();
            if (X === null || X === void 0 ? void 0 : X.access_token) this.setCredentials(X);
            return this.requestAsync(I, !0)
          }
        }
        throw Z
      }
      return G
    }
    verifyIdToken(I, d) {
      if (d && typeof d !== "function") throw new Error("This method accepts an options object as the first parameter, which includes the idToken, audience, and maxExpiry.");
      if (d) this.verifyIdTokenAsync(I).then((G) => d(null, G), d);
      else return this.verifyIdTokenAsync(I)
    }
    async verifyIdTokenAsync(I) {
      if (!I.idToken) throw new Error("The verifyIdToken method requires an ID Token");
      let d = await this.getFederatedSignonCertsAsync();
      return await this.verifySignedJwtWithCertsAsync(I.idToken, d.certs, I.audience, this.issuers, I.maxExpiry)
    }
    async getTokenInfo(I) {
      let {
        data: d
      } = await this.transporter.request({
        ..._I.RETRY_CONFIG,
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${I}`
        },
        url: this.endpoints.tokenInfoUrl.toString()
      }), G = Object.assign({
        expiry_date: new Date().getTime() + d.expires_in * 1000,
        scopes: d.scope.split(" ")
      }, d);
      return delete G.expires_in, delete G.scope, G
    }
    getFederatedSignonCerts(I) {
      if (I) this.getFederatedSignonCertsAsync().then((d) => I(null, d.certs, d.res), I);
      else return this.getFederatedSignonCertsAsync()
    }
    async getFederatedSignonCertsAsync() {
      let I = new Date().getTime(),
        d = AH1.hasBrowserCrypto() ? aV.JWK : aV.PEM;
      if (this.certificateExpiry && I < this.certificateExpiry.getTime() && this.certificateCacheFormat === d) return {
        certs: this.certificateCache,
        format: d
      };
      let G, Z;
      switch (d) {
        case aV.PEM:
          Z = this.endpoints.oauth2FederatedSignonPemCertsUrl.toString();
          break;
        case aV.JWK:
          Z = this.endpoints.oauth2FederatedSignonJwkCertsUrl.toString();
          break;
        default:
          throw new Error(`Unsupported certificate format ${d}`)
      }
      try {
        G = await this.transporter.request({
          ..._I.RETRY_CONFIG,
          url: Z
        })
      } catch (A) {
        if (A instanceof Error) A.message = `Failed to retrieve verification certificates: ${A.message}`;
        throw A
      }
      let C = G ? G.headers["cache-control"] : void 0,
        W = -1;
      if (C) {
        let V = new RegExp("max-age=([0-9]*)").exec(C);
        if (V && V.length === 2) W = Number(V[1]) * 1000
      }
      let w = {};
      switch (d) {
        case aV.PEM:
          w = G.data;
          break;
        case aV.JWK:
          for (let A of G.data.keys) w[A.kid] = A;
          break;
        default:
          throw new Error(`Unsupported certificate format ${d}`)
      }
      let B = new Date;
      return this.certificateExpiry = W === -1 ? null : new Date(B.getTime() + W), this.certificateCache = w, this.certificateCacheFormat = d, {
        certs: w,
        format: d,
        res: G
      }
    }
    getIapPublicKeys(I) {
      if (I) this.getIapPublicKeysAsync().then((d) => I(null, d.pubkeys, d.res), I);
      else return this.getIapPublicKeysAsync()
    }
    async getIapPublicKeysAsync() {
      let I, d = this.endpoints.oauth2IapPublicKeyUrl.toString();
      try {
        I = await this.transporter.request({
          ..._I.RETRY_CONFIG,
          url: d
        })
      } catch (G) {
        if (G instanceof Error) G.message = `Failed to retrieve verification certificates: ${G.message}`;
        throw G
      }
      return {
        pubkeys: I.data,
        res: I
      }
    }
    verifySignedJwtWithCerts() {
      throw new Error("verifySignedJwtWithCerts is removed, please use verifySignedJwtWithCertsAsync instead.")
    }
    async verifySignedJwtWithCertsAsync(I, d, G, Z, C) {
      let W = AH1.createCrypto();
      if (!C) C = _I.DEFAULT_MAX_TOKEN_LIFETIME_SECS_;
      let w = I.split(".");
      if (w.length !== 3) throw new Error("Wrong number of segments in token: " + I);
      let B = w[0] + "." + w[1],
        A = w[2],
        V, X;
      try {
        V = JSON.parse(W.decodeBase64StringUtf8(w[0]))
      } catch (S) {
        if (S instanceof Error) S.message = `Can't parse token envelope: ${w[0]}': ${S.message}`;
        throw S
      }
      if (!V) throw new Error("Can't parse token envelope: " + w[0]);
      try {
        X = JSON.parse(W.decodeBase64StringUtf8(w[1]))
      } catch (S) {
        if (S instanceof Error) S.message = `Can't parse token payload '${w[0]}`;
        throw S
      }
      if (!X) throw new Error("Can't parse token payload: " + w[1]);
      if (!Object.prototype.hasOwnProperty.call(d, V.kid)) throw new Error("No pem found for envelope: " + JSON.stringify(V));
      let _ = d[V.kid];
      if (V.alg === "ES256") A = fi5.joseToDer(A, "ES256").toString("base64");
      if (!await W.verify(_, B, A)) throw new Error("Invalid token signature: " + I);
      if (!X.iat) throw new Error("No issue time in token: " + JSON.stringify(X));
      if (!X.exp) throw new Error("No expiration time in token: " + JSON.stringify(X));
      let g = Number(X.iat);
      if (isNaN(g)) throw new Error("iat field using invalid format");
      let J = Number(X.exp);
      if (isNaN(J)) throw new Error("exp field using invalid format");
      let K = new Date().getTime() / 1000;
      if (J >= K + C) throw new Error("Expiration time too far in future: " + JSON.stringify(X));
      let Q = g - _I.CLOCK_SKEW_SECS_,
        E = J + _I.CLOCK_SKEW_SECS_;
      if (K < Q) throw new Error("Token used too early, " + K + " < " + Q + ": " + JSON.stringify(X));
      if (K > E) throw new Error("Token used too late, " + K + " > " + E + ": " + JSON.stringify(X));
      if (Z && Z.indexOf(X.iss) < 0) throw new Error("Invalid issuer, expected one of [" + Z + "], but got " + X.iss);
      if (typeof G !== "undefined" && G !== null) {
        let S = X.aud,
          P = !1;
        if (G.constructor === Array) P = G.indexOf(S) > -1;
        else P = S === G;
        if (!P) throw new Error("Wrong recipient, payload audience != requiredAudience")
      }
      return new Ri5.LoginTicket(V, X)
    }
    async processAndValidateRefreshHandler() {
      if (this.refreshHandler) {
        let I = await this.refreshHandler();
        if (!I.access_token) throw new Error("No access token is returned by the refreshHandler callback.");
        return I
      }
      return
    }
    isTokenExpiring() {
      let I = this.credentials.expiry_date;
      return I ? I <= new Date().getTime() + this.eagerRefreshThresholdMillis : !1
    }
  }
  ZG2.OAuth2Client = _I;
  _I.GOOGLE_TOKEN_INFO_URL = "https://oauth2.googleapis.com/tokeninfo";
  _I.CLOCK_SKEW_SECS_ = 300;
  _I.DEFAULT_MAX_TOKEN_LIFETIME_SECS_ = 86400
})
// @from(Start 3797955, End 3800223)
VH1 = Y((BG2) => {
  Object.defineProperty(BG2, "__esModule", {
    value: !0
  });
  BG2.Compute = void 0;
  var Mi5 = dW(),
    WG2 = sP(),
    Si5 = TJ();
  class wG2 extends Si5.OAuth2Client {
    constructor(I = {}) {
      super(I);
      this.credentials = {
        expiry_date: 1,
        refresh_token: "compute-placeholder"
      }, this.serviceAccountEmail = I.serviceAccountEmail || "default", this.scopes = Array.isArray(I.scopes) ? I.scopes : I.scopes ? [I.scopes] : []
    }
    async refreshTokenNoCache(I) {
      let d = `service-accounts/${this.serviceAccountEmail}/token`,
        G;
      try {
        let C = {
          property: d
        };
        if (this.scopes.length > 0) C.params = {
          scopes: this.scopes.join(",")
        };
        G = await WG2.instance(C)
      } catch (C) {
        if (C instanceof Mi5.GaxiosError) C.message = `Could not refresh access token: ${C.message}`, this.wrapError(C);
        throw C
      }
      let Z = G;
      if (G && G.expires_in) Z.expiry_date = new Date().getTime() + G.expires_in * 1000, delete Z.expires_in;
      return this.emit("tokens", Z), {
        tokens: Z,
        res: null
      }
    }
    async fetchIdToken(I) {
      let d = `service-accounts/${this.serviceAccountEmail}/identity?format=full&audience=${I}`,
        G;
      try {
        let Z = {
          property: d
        };
        G = await WG2.instance(Z)
      } catch (Z) {
        if (Z instanceof Error) Z.message = `Could not fetch ID token: ${Z.message}`;
        throw Z
      }
      return G
    }
    wrapError(I) {
      let d = I.response;
      if (d && d.status) {
        if (I.status = d.status, d.status === 403) I.message = "A Forbidden error was returned while attempting to retrieve an access token for the Compute Engine built-in service account. This may be because the Compute Engine instance does not have the correct permission scopes specified: " + I.message;
        else if (d.status === 404) I.message = "A Not Found error was returned while attempting to retrieve an accesstoken for the Compute Engine built-in service account. This may be because the Compute Engine instance does not have any permission scopes specified: " + I.message
      }
    }
  }
  BG2.Compute = wG2
})
// @from(Start 3800229, End 3801174)
XH1 = Y((XG2) => {
  Object.defineProperty(XG2, "__esModule", {
    value: !0
  });
  XG2.IdTokenClient = void 0;
  var Li5 = TJ();
  class VG2 extends Li5.OAuth2Client {
    constructor(I) {
      super(I);
      this.targetAudience = I.targetAudience, this.idTokenProvider = I.idTokenProvider
    }
    async getRequestMetadataAsync(I) {
      if (!this.credentials.id_token || !this.credentials.expiry_date || this.isTokenExpiring()) {
        let G = await this.idTokenProvider.fetchIdToken(this.targetAudience);
        this.credentials = {
          id_token: G,
          expiry_date: this.getIdTokenExpiryDate(G)
        }
      }
      return {
        headers: {
          Authorization: "Bearer " + this.credentials.id_token
        }
      }
    }
    getIdTokenExpiryDate(I) {
      let d = I.split(".")[1];
      if (d) return JSON.parse(Buffer.from(d, "base64").toString("ascii")).exp * 1000
    }
  }
  XG2.IdTokenClient = VG2
})
// @from(Start 3801180, End 3802495)
YH1 = Y((DG2) => {
  Object.defineProperty(DG2, "__esModule", {
    value: !0
  });
  DG2.GCPEnv = void 0;
  DG2.clear = yi5;
  DG2.getEnv = Pi5;
  var _G2 = sP(),
    sV;
  (function(I) {
    I.APP_ENGINE = "APP_ENGINE", I.KUBERNETES_ENGINE = "KUBERNETES_ENGINE", I.CLOUD_FUNCTIONS = "CLOUD_FUNCTIONS", I.COMPUTE_ENGINE = "COMPUTE_ENGINE", I.CLOUD_RUN = "CLOUD_RUN", I.NONE = "NONE"
  })(sV || (DG2.GCPEnv = sV = {}));
  var I$;

  function yi5() {
    I$ = void 0
  }
  async function Pi5() {
    if (I$) return I$;
    return I$ = $i5(), I$
  }
  async function $i5() {
    let I = sV.NONE;
    if (ui5()) I = sV.APP_ENGINE;
    else if (Ti5()) I = sV.CLOUD_FUNCTIONS;
    else if (await li5())
      if (await mi5()) I = sV.KUBERNETES_ENGINE;
      else if (Oi5()) I = sV.CLOUD_RUN;
    else I = sV.COMPUTE_ENGINE;
    else I = sV.NONE;
    return I
  }

  function ui5() {
    return !!(process.env.GAE_SERVICE || process.env.GAE_MODULE_NAME)
  }

  function Ti5() {
    return !!(process.env.FUNCTION_NAME || process.env.FUNCTION_TARGET)
  }

  function Oi5() {
    return !!process.env.K_CONFIGURATION
  }
  async function mi5() {
    try {
      return await _G2.instance("attributes/cluster-name"), !0
    } catch (I) {
      return !1
    }
  }
  async function li5() {
    return _G2.isAvailable()
  }
})
// @from(Start 3802501, End 3803417)
_H1 = Y((YV3, FG2) => {
  var or = kq().Buffer,
    ji5 = B1("stream"),
    ki5 = B1("util");

  function er(I) {
    if (this.buffer = null, this.writable = !0, this.readable = !0, !I) return this.buffer = or.alloc(0), this;
    if (typeof I.pipe === "function") return this.buffer = or.alloc(0), I.pipe(this), this;
    if (I.length || typeof I === "object") return this.buffer = I, this.writable = !1, process.nextTick(function() {
      this.emit("end", I), this.readable = !1, this.emit("close")
    }.bind(this)), this;
    throw new TypeError("Unexpected data type (" + typeof I + ")")
  }
  ki5.inherits(er, ji5);
  er.prototype.write = function I(d) {
    this.buffer = or.concat([this.buffer, or.from(d)]), this.emit("data", d)
  };
  er.prototype.end = function I(d) {
    if (d) this.write(d);
    this.emit("end", d), this.emit("close"), this.writable = !1, this.readable = !1
  };
  FG2.exports = er
})
// @from(Start 3803423, End 3804029)
JG2 = Y((_V3, gG2) => {
  var d$ = B1("buffer").Buffer,
    DH1 = B1("buffer").SlowBuffer;
  gG2.exports = tr;

  function tr(I, d) {
    if (!d$.isBuffer(I) || !d$.isBuffer(d)) return !1;
    if (I.length !== d.length) return !1;
    var G = 0;
    for (var Z = 0; Z < I.length; Z++) G |= I[Z] ^ d[Z];
    return G === 0
  }
  tr.install = function() {
    d$.prototype.equal = DH1.prototype.equal = function I(d) {
      return tr(this, d)
    }
  };
  var xi5 = d$.prototype.equal,
    ci5 = DH1.prototype.equal;
  tr.restore = function() {
    d$.prototype.equal = xi5, DH1.prototype.equal = ci5
  }
})
// @from(Start 3804035, End 3808311)
gH1 = Y((DV3, vG2) => {
  var pi5 = JG2(),
    pq = kq().Buffer,
    vB = B1("crypto"),
    NG2 = GH1(),
    KG2 = B1("util"),
    ii5 = `"%s" is not a valid algorithm.
  Supported algorithms are:
  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".`,
    G$ = "secret must be a string or buffer",
    cq = "key must be a string or a buffer",
    ni5 = "key must be a string, a buffer or an object",
    HH1 = typeof vB.createPublicKey === "function";
  if (HH1) cq += " or a KeyObject", G$ += "or a KeyObject";

  function zG2(I) {
    if (pq.isBuffer(I)) return;
    if (typeof I === "string") return;
    if (!HH1) throw CW(cq);
    if (typeof I !== "object") throw CW(cq);
    if (typeof I.type !== "string") throw CW(cq);
    if (typeof I.asymmetricKeyType !== "string") throw CW(cq);
    if (typeof I.export !== "function") throw CW(cq)
  }

  function QG2(I) {
    if (pq.isBuffer(I)) return;
    if (typeof I === "string") return;
    if (typeof I === "object") return;
    throw CW(ni5)
  }

  function ri5(I) {
    if (pq.isBuffer(I)) return;
    if (typeof I === "string") return I;
    if (!HH1) throw CW(G$);
    if (typeof I !== "object") throw CW(G$);
    if (I.type !== "secret") throw CW(G$);
    if (typeof I.export !== "function") throw CW(G$)
  }

  function FH1(I) {
    return I.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
  }

  function fG2(I) {
    I = I.toString();
    var d = 4 - I.length % 4;
    if (d !== 4)
      for (var G = 0; G < d; ++G) I += "=";
    return I.replace(/\-/g, "+").replace(/_/g, "/")
  }

  function CW(I) {
    var d = [].slice.call(arguments, 1),
      G = KG2.format.bind(KG2, I).apply(null, d);
    return new TypeError(G)
  }

  function ai5(I) {
    return pq.isBuffer(I) || typeof I === "string"
  }

  function Z$(I) {
    if (!ai5(I)) I = JSON.stringify(I);
    return I
  }

  function qG2(I) {
    return function d(G, Z) {
      ri5(Z), G = Z$(G);
      var C = vB.createHmac("sha" + I, Z),
        W = (C.update(G), C.digest("base64"));
      return FH1(W)
    }
  }

  function si5(I) {
    return function d(G, Z, C) {
      var W = qG2(I)(G, C);
      return pi5(pq.from(Z), pq.from(W))
    }
  }

  function RG2(I) {
    return function d(G, Z) {
      QG2(Z), G = Z$(G);
      var C = vB.createSign("RSA-SHA" + I),
        W = (C.update(G), C.sign(Z, "base64"));
      return FH1(W)
    }
  }

  function UG2(I) {
    return function d(G, Z, C) {
      zG2(C), G = Z$(G), Z = fG2(Z);
      var W = vB.createVerify("RSA-SHA" + I);
      return W.update(G), W.verify(C, Z, "base64")
    }
  }

  function oi5(I) {
    return function d(G, Z) {
      QG2(Z), G = Z$(G);
      var C = vB.createSign("RSA-SHA" + I),
        W = (C.update(G), C.sign({
          key: Z,
          padding: vB.constants.RSA_PKCS1_PSS_PADDING,
          saltLength: vB.constants.RSA_PSS_SALTLEN_DIGEST
        }, "base64"));
      return FH1(W)
    }
  }

  function ei5(I) {
    return function d(G, Z, C) {
      zG2(C), G = Z$(G), Z = fG2(Z);
      var W = vB.createVerify("RSA-SHA" + I);
      return W.update(G), W.verify({
        key: C,
        padding: vB.constants.RSA_PKCS1_PSS_PADDING,
        saltLength: vB.constants.RSA_PSS_SALTLEN_DIGEST
      }, Z, "base64")
    }
  }

  function ti5(I) {
    var d = RG2(I);
    return function G() {
      var Z = d.apply(null, arguments);
      return Z = NG2.derToJose(Z, "ES" + I), Z
    }
  }

  function In5(I) {
    var d = UG2(I);
    return function G(Z, C, W) {
      C = NG2.joseToDer(C, "ES" + I).toString("base64");
      var w = d(Z, C, W);
      return w
    }
  }

  function dn5() {
    return function I() {
      return ""
    }
  }

  function Gn5() {
    return function I(d, G) {
      return G === ""
    }
  }
  vG2.exports = function I(d) {
    var G = {
        hs: qG2,
        rs: RG2,
        ps: oi5,
        es: ti5,
        none: dn5
      },
      Z = {
        hs: si5,
        rs: UG2,
        ps: ei5,
        es: In5,
        none: Gn5
      },
      C = d.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);
    if (!C) throw CW(ii5, d);
    var W = (C[1] || C[3]).toLowerCase(),
      w = C[2];
    return {
      sign: G[W](w),
      verify: Z[W](w)
    }
  }
})
// @from(Start 3808317, End 3808553)
JH1 = Y((HV3, EG2) => {
  var Zn5 = B1("buffer").Buffer;
  EG2.exports = function I(d) {
    if (typeof d === "string") return d;
    if (typeof d === "number" || Zn5.isBuffer(d)) return d.toString();
    return JSON.stringify(d)
  }
})
// @from(Start 3808559, End 3810161)
$G2 = Y((FV3, PG2) => {
  var Cn5 = kq().Buffer,
    MG2 = _H1(),
    Wn5 = gH1(),
    wn5 = B1("stream"),
    SG2 = JH1(),
    KH1 = B1("util");

  function LG2(I, d) {
    return Cn5.from(I, d).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
  }

  function Bn5(I, d, G) {
    G = G || "utf8";
    var Z = LG2(SG2(I), "binary"),
      C = LG2(SG2(d), G);
    return KH1.format("%s.%s", Z, C)
  }

  function yG2(I) {
    var {
      header: d,
      payload: G
    } = I, Z = I.secret || I.privateKey, C = I.encoding, W = Wn5(d.alg), w = Bn5(d, G, C), B = W.sign(w, Z);
    return KH1.format("%s.%s", w, B)
  }

  function Ia(I) {
    var d = I.secret || I.privateKey || I.key,
      G = new MG2(d);
    this.readable = !0, this.header = I.header, this.encoding = I.encoding, this.secret = this.privateKey = this.key = G, this.payload = new MG2(I.payload), this.secret.once("close", function() {
      if (!this.payload.writable && this.readable) this.sign()
    }.bind(this)), this.payload.once("close", function() {
      if (!this.secret.writable && this.readable) this.sign()
    }.bind(this))
  }
  KH1.inherits(Ia, wn5);
  Ia.prototype.sign = function I() {
    try {
      var d = yG2({
        header: this.header,
        payload: this.payload.buffer,
        secret: this.secret.buffer,
        encoding: this.encoding
      });
      return this.emit("done", d), this.emit("data", d), this.emit("end"), this.readable = !1, d
    } catch (G) {
      this.readable = !1, this.emit("error", G), this.emit("close")
    }
  };
  Ia.sign = yG2;
  PG2.exports = Ia
})
// @from(Start 3810167, End 3812574)
xG2 = Y((gV3, kG2) => {
  var TG2 = kq().Buffer,
    uG2 = _H1(),
    An5 = gH1(),
    Vn5 = B1("stream"),
    OG2 = JH1(),
    Xn5 = B1("util"),
    Yn5 = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;

  function _n5(I) {
    return Object.prototype.toString.call(I) === "[object Object]"
  }

  function Dn5(I) {
    if (_n5(I)) return I;
    try {
      return JSON.parse(I)
    } catch (d) {
      return
    }
  }

  function mG2(I) {
    var d = I.split(".", 1)[0];
    return Dn5(TG2.from(d, "base64").toString("binary"))
  }

  function Hn5(I) {
    return I.split(".", 2).join(".")
  }

  function lG2(I) {
    return I.split(".")[2]
  }

  function Fn5(I, d) {
    d = d || "utf8";
    var G = I.split(".")[1];
    return TG2.from(G, "base64").toString(d)
  }

  function bG2(I) {
    return Yn5.test(I) && !!mG2(I)
  }

  function hG2(I, d, G) {
    if (!d) {
      var Z = new Error("Missing algorithm parameter for jws.verify");
      throw Z.code = "MISSING_ALGORITHM", Z
    }
    I = OG2(I);
    var C = lG2(I),
      W = Hn5(I),
      w = An5(d);
    return w.verify(W, C, G)
  }

  function jG2(I, d) {
    if (d = d || {}, I = OG2(I), !bG2(I)) return null;
    var G = mG2(I);
    if (!G) return null;
    var Z = Fn5(I);
    if (G.typ === "JWT" || d.json) Z = JSON.parse(Z, d.encoding);
    return {
      header: G,
      payload: Z,
      signature: lG2(I)
    }
  }

  function iq(I) {
    I = I || {};
    var d = I.secret || I.publicKey || I.key,
      G = new uG2(d);
    this.readable = !0, this.algorithm = I.algorithm, this.encoding = I.encoding, this.secret = this.publicKey = this.key = G, this.signature = new uG2(I.signature), this.secret.once("close", function() {
      if (!this.signature.writable && this.readable) this.verify()
    }.bind(this)), this.signature.once("close", function() {
      if (!this.secret.writable && this.readable) this.verify()
    }.bind(this))
  }
  Xn5.inherits(iq, Vn5);
  iq.prototype.verify = function I() {
    try {
      var d = hG2(this.signature.buffer, this.algorithm, this.key.buffer),
        G = jG2(this.signature.buffer, this.encoding);
      return this.emit("done", d, G), this.emit("data", d), this.emit("end"), this.readable = !1, d
    } catch (Z) {
      this.readable = !1, this.emit("error", Z), this.emit("close")
    }
  };
  iq.decode = jG2;
  iq.isValid = bG2;
  iq.verify = hG2;
  kG2.exports = iq
})
// @from(Start 3812580, End 3813007)
NH1 = Y((Jn5) => {
  var cG2 = $G2(),
    da = xG2(),
    gn5 = ["HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512"];
  Jn5.ALGORITHMS = gn5;
  Jn5.sign = cG2.sign;
  Jn5.verify = da.verify;
  Jn5.decode = da.decode;
  Jn5.isValid = da.isValid;
  Jn5.createSign = function I(d) {
    return new cG2(d)
  };
  Jn5.createVerify = function I(d) {
    return new da(d)
  }
})
// @from(Start 3813013, End 3820133)
tG2 = Y((iD) => {
  var WW = iD && iD.__classPrivateFieldGet || function(I, d, G, Z) {
      if (G === "a" && !Z) throw new TypeError("Private accessor was defined without a getter");
      if (typeof d === "function" ? I !== d || !Z : !d.has(I)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return G === "m" ? Z : G === "a" ? Z.call(I) : Z ? Z.value : d.get(I)
    },
    pG2 = iD && iD.__classPrivateFieldSet || function(I, d, G, Z, C) {
      if (Z === "m") throw new TypeError("Private method is not writable");
      if (Z === "a" && !C) throw new TypeError("Private accessor was defined without a setter");
      if (typeof d === "function" ? I !== d || !C : !d.has(I)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return Z === "a" ? C.call(I, G) : C ? C.value = G : d.set(I, G), G
    },
    wW, nq, zH1, iG2, nG2, QH1, fH1, rG2;
  Object.defineProperty(iD, "__esModule", {
    value: !0
  });
  iD.GoogleToken = void 0;
  var aG2 = B1("fs"),
    Un5 = dW(),
    vn5 = NH1(),
    En5 = B1("path"),
    Mn5 = B1("util"),
    sG2 = aG2.readFile ? Mn5.promisify(aG2.readFile) : async () => {
      throw new rq("use key rather than keyFile.", "MISSING_CREDENTIALS")
    }, oG2 = "https://www.googleapis.com/oauth2/v4/token", Sn5 = "https://accounts.google.com/o/oauth2/revoke?token=";
  class rq extends Error {
    constructor(I, d) {
      super(I);
      this.code = d
    }
  }
  class eG2 {
    get accessToken() {
      return this.rawToken ? this.rawToken.access_token : void 0
    }
    get idToken() {
      return this.rawToken ? this.rawToken.id_token : void 0
    }
    get tokenType() {
      return this.rawToken ? this.rawToken.token_type : void 0
    }
    get refreshToken() {
      return this.rawToken ? this.rawToken.refresh_token : void 0
    }
    constructor(I) {
      wW.add(this), this.transporter = {
        request: (d) => Un5.request(d)
      }, nq.set(this, void 0), WW(this, wW, "m", fH1).call(this, I)
    }
    hasExpired() {
      let I = new Date().getTime();
      if (this.rawToken && this.expiresAt) return I >= this.expiresAt;
      else return !0
    }
    isTokenExpiring() {
      var I;
      let d = new Date().getTime(),
        G = (I = this.eagerRefreshThresholdMillis) !== null && I !== void 0 ? I : 0;
      if (this.rawToken && this.expiresAt) return this.expiresAt <= d + G;
      else return !0
    }
    getToken(I, d = {}) {
      if (typeof I === "object") d = I, I = void 0;
      if (d = Object.assign({
          forceRefresh: !1
        }, d), I) {
        let G = I;
        WW(this, wW, "m", zH1).call(this, d).then((Z) => G(null, Z), I);
        return
      }
      return WW(this, wW, "m", zH1).call(this, d)
    }
    async getCredentials(I) {
      switch (En5.extname(I)) {
        case ".json": {
          let G = await sG2(I, "utf8"),
            Z = JSON.parse(G),
            C = Z.private_key,
            W = Z.client_email;
          if (!C || !W) throw new rq("private_key and client_email are required.", "MISSING_CREDENTIALS");
          return {
            privateKey: C,
            clientEmail: W
          }
        }
        case ".der":
        case ".crt":
        case ".pem":
          return {
            privateKey: await sG2(I, "utf8")
          };
        case ".p12":
        case ".pfx":
          throw new rq("*.p12 certificates are not supported after v6.1.2. Consider utilizing *.json format or converting *.p12 to *.pem using the OpenSSL CLI.", "UNKNOWN_CERTIFICATE_TYPE");
        default:
          throw new rq("Unknown certificate type. Type is determined based on file extension. Current supported extensions are *.json, and *.pem.", "UNKNOWN_CERTIFICATE_TYPE")
      }
    }
    revokeToken(I) {
      if (I) {
        WW(this, wW, "m", QH1).call(this).then(() => I(), I);
        return
      }
      return WW(this, wW, "m", QH1).call(this)
    }
  }
  iD.GoogleToken = eG2;
  nq = new WeakMap, wW = new WeakSet, zH1 = async function I(d) {
    if (WW(this, nq, "f") && !d.forceRefresh) return WW(this, nq, "f");
    try {
      return await pG2(this, nq, WW(this, wW, "m", iG2).call(this, d), "f")
    } finally {
      pG2(this, nq, void 0, "f")
    }
  }, iG2 = async function I(d) {
    if (this.isTokenExpiring() === !1 && d.forceRefresh === !1) return Promise.resolve(this.rawToken);
    if (!this.key && !this.keyFile) throw new Error("No key or keyFile set.");
    if (!this.key && this.keyFile) {
      let G = await this.getCredentials(this.keyFile);
      if (this.key = G.privateKey, this.iss = G.clientEmail || this.iss, !G.clientEmail) WW(this, wW, "m", nG2).call(this)
    }
    return WW(this, wW, "m", rG2).call(this)
  }, nG2 = function I() {
    if (!this.iss) throw new rq("email is required.", "MISSING_CREDENTIALS")
  }, QH1 = async function I() {
    if (!this.accessToken) throw new Error("No token to revoke.");
    let d = Sn5 + this.accessToken;
    await this.transporter.request({
      url: d,
      retry: !0
    }), WW(this, wW, "m", fH1).call(this, {
      email: this.iss,
      sub: this.sub,
      key: this.key,
      keyFile: this.keyFile,
      scope: this.scope,
      additionalClaims: this.additionalClaims
    })
  }, fH1 = function I(d = {}) {
    if (this.keyFile = d.keyFile, this.key = d.key, this.rawToken = void 0, this.iss = d.email || d.iss, this.sub = d.sub, this.additionalClaims = d.additionalClaims, typeof d.scope === "object") this.scope = d.scope.join(" ");
    else this.scope = d.scope;
    if (this.eagerRefreshThresholdMillis = d.eagerRefreshThresholdMillis, d.transporter) this.transporter = d.transporter
  }, rG2 = async function I() {
    var d, G;
    let Z = Math.floor(new Date().getTime() / 1000),
      C = this.additionalClaims || {},
      W = Object.assign({
        iss: this.iss,
        scope: this.scope,
        aud: oG2,
        exp: Z + 3600,
        iat: Z,
        sub: this.sub
      }, C),
      w = vn5.sign({
        header: {
          alg: "RS256"
        },
        payload: W,
        secret: this.key
      });
    try {
      let B = await this.transporter.request({
        method: "POST",
        url: oG2,
        data: {
          grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
          assertion: w
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        responseType: "json",
        retryConfig: {
          httpMethodsToRetry: ["POST"]
        }
      });
      return this.rawToken = B.data, this.expiresAt = B.data.expires_in === null || B.data.expires_in === void 0 ? void 0 : (Z + B.data.expires_in) * 1000, this.rawToken
    } catch (B) {
      this.rawToken = void 0, this.tokenExpires = void 0;
      let A = B.response && ((d = B.response) === null || d === void 0 ? void 0 : d.data) ? (G = B.response) === null || G === void 0 ? void 0 : G.data : {};
      if (A.error) {
        let V = A.error_description ? `: ${A.error_description}` : "";
        B.message = `${A.error}${V}`
      }
      throw B
    }
  }
})
// @from(Start 3820139, End 3823146)
RH1 = Y((dZ2) => {
  Object.defineProperty(dZ2, "__esModule", {
    value: !0
  });
  dZ2.JWTAccess = void 0;
  var Ln5 = NH1(),
    yn5 = pD(),
    IZ2 = {
      alg: "RS256",
      typ: "JWT"
    };
  class qH1 {
    constructor(I, d, G, Z) {
      this.cache = new yn5.LRUCache({
        capacity: 500,
        maxAge: 3600000
      }), this.email = I, this.key = d, this.keyId = G, this.eagerRefreshThresholdMillis = Z !== null && Z !== void 0 ? Z : 300000
    }
    getCachedKey(I, d) {
      let G = I;
      if (d && Array.isArray(d) && d.length) G = I ? `${I}_${d.join("_")}` : `${d.join("_")}`;
      else if (typeof d === "string") G = I ? `${I}_${d}` : d;
      if (!G) throw Error("Scopes or url must be provided");
      return G
    }
    getRequestHeaders(I, d, G) {
      let Z = this.getCachedKey(I, G),
        C = this.cache.get(Z),
        W = Date.now();
      if (C && C.expiration - W > this.eagerRefreshThresholdMillis) return C.headers;
      let w = Math.floor(Date.now() / 1000),
        B = qH1.getExpirationTime(w),
        A;
      if (Array.isArray(G)) G = G.join(" ");
      if (G) A = {
        iss: this.email,
        sub: this.email,
        scope: G,
        exp: B,
        iat: w
      };
      else A = {
        iss: this.email,
        sub: this.email,
        aud: I,
        exp: B,
        iat: w
      };
      if (d) {
        for (let g in A)
          if (d[g]) throw new Error(`The '${g}' property is not allowed when passing additionalClaims. This claim is included in the JWT by default.`)
      }
      let V = this.keyId ? {
          ...IZ2,
          kid: this.keyId
        } : IZ2,
        X = Object.assign(A, d),
        F = {
          Authorization: `Bearer ${Ln5.sign({header:V,payload:X,secret:this.key})}`
        };
      return this.cache.set(Z, {
        expiration: B * 1000,
        headers: F
      }), F
    }
    static getExpirationTime(I) {
      return I + 3600
    }
    fromJSON(I) {
      if (!I) throw new Error("Must pass in a JSON object containing the service account auth settings.");
      if (!I.client_email) throw new Error("The incoming JSON object does not contain a client_email field");
      if (!I.private_key) throw new Error("The incoming JSON object does not contain a private_key field");
      this.email = I.client_email, this.key = I.private_key, this.keyId = I.private_key_id, this.projectId = I.project_id
    }
    fromStream(I, d) {
      if (d) this.fromStreamAsync(I).then(() => d(), d);
      else return this.fromStreamAsync(I)
    }
    fromStreamAsync(I) {
      return new Promise((d, G) => {
        if (!I) G(new Error("Must pass in a stream containing the service account auth settings."));
        let Z = "";
        I.setEncoding("utf8").on("data", (C) => Z += C).on("error", G).on("end", () => {
          try {
            let C = JSON.parse(Z);
            this.fromJSON(C), d()
          } catch (C) {
            G(C)
          }
        })
      })
    }
  }
  dZ2.JWTAccess = qH1
})
// @from(Start 3823152, End 3829218)
vH1 = Y((CZ2) => {
  Object.defineProperty(CZ2, "__esModule", {
    value: !0
  });
  CZ2.JWT = void 0;
  var ZZ2 = tG2(),
    Pn5 = RH1(),
    $n5 = TJ(),
    Ga = UB();
  class UH1 extends $n5.OAuth2Client {
    constructor(I, d, G, Z, C, W) {
      let w = I && typeof I === "object" ? I : {
        email: I,
        keyFile: d,
        key: G,
        keyId: W,
        scopes: Z,
        subject: C
      };
      super(w);
      this.email = w.email, this.keyFile = w.keyFile, this.key = w.key, this.keyId = w.keyId, this.scopes = w.scopes, this.subject = w.subject, this.additionalClaims = w.additionalClaims, this.credentials = {
        refresh_token: "jwt-placeholder",
        expiry_date: 1
      }
    }
    createScoped(I) {
      let d = new UH1(this);
      return d.scopes = I, d
    }
    async getRequestMetadataAsync(I) {
      I = this.defaultServicePath ? `https://${this.defaultServicePath}/` : I;
      let d = !this.hasUserScopes() && I || this.useJWTAccessWithScope && this.hasAnyScopes() || this.universeDomain !== Ga.DEFAULT_UNIVERSE;
      if (this.subject && this.universeDomain !== Ga.DEFAULT_UNIVERSE) throw new RangeError(`Service Account user is configured for the credential. Domain-wide delegation is not supported in universes other than ${Ga.DEFAULT_UNIVERSE}`);
      if (!this.apiKey && d)
        if (this.additionalClaims && this.additionalClaims.target_audience) {
          let {
            tokens: G
          } = await this.refreshToken();
          return {
            headers: this.addSharedMetadataHeaders({
              Authorization: `Bearer ${G.id_token}`
            })
          }
        } else {
          if (!this.access) this.access = new Pn5.JWTAccess(this.email, this.key, this.keyId, this.eagerRefreshThresholdMillis);
          let G;
          if (this.hasUserScopes()) G = this.scopes;
          else if (!I) G = this.defaultScopes;
          let Z = this.useJWTAccessWithScope || this.universeDomain !== Ga.DEFAULT_UNIVERSE,
            C = await this.access.getRequestHeaders(I !== null && I !== void 0 ? I : void 0, this.additionalClaims, Z ? G : void 0);
          return {
            headers: this.addSharedMetadataHeaders(C)
          }
        }
      else if (this.hasAnyScopes() || this.apiKey) return super.getRequestMetadataAsync(I);
      else return {
        headers: {}
      }
    }
    async fetchIdToken(I) {
      let d = new ZZ2.GoogleToken({
        iss: this.email,
        sub: this.subject,
        scope: this.scopes || this.defaultScopes,
        keyFile: this.keyFile,
        key: this.key,
        additionalClaims: {
          target_audience: I
        },
        transporter: this.transporter
      });
      if (await d.getToken({
          forceRefresh: !0
        }), !d.idToken) throw new Error("Unknown error: Failed to fetch ID token");
      return d.idToken
    }
    hasUserScopes() {
      if (!this.scopes) return !1;
      return this.scopes.length > 0
    }
    hasAnyScopes() {
      if (this.scopes && this.scopes.length > 0) return !0;
      if (this.defaultScopes && this.defaultScopes.length > 0) return !0;
      return !1
    }
    authorize(I) {
      if (I) this.authorizeAsync().then((d) => I(null, d), I);
      else return this.authorizeAsync()
    }
    async authorizeAsync() {
      let I = await this.refreshToken();
      if (!I) throw new Error("No result returned");
      return this.credentials = I.tokens, this.credentials.refresh_token = "jwt-placeholder", this.key = this.gtoken.key, this.email = this.gtoken.iss, I.tokens
    }
    async refreshTokenNoCache(I) {
      let d = this.createGToken(),
        Z = {
          access_token: (await d.getToken({
            forceRefresh: this.isTokenExpiring()
          })).access_token,
          token_type: "Bearer",
          expiry_date: d.expiresAt,
          id_token: d.idToken
        };
      return this.emit("tokens", Z), {
        res: null,
        tokens: Z
      }
    }
    createGToken() {
      if (!this.gtoken) this.gtoken = new ZZ2.GoogleToken({
        iss: this.email,
        sub: this.subject,
        scope: this.scopes || this.defaultScopes,
        keyFile: this.keyFile,
        key: this.key,
        additionalClaims: this.additionalClaims,
        transporter: this.transporter
      });
      return this.gtoken
    }
    fromJSON(I) {
      if (!I) throw new Error("Must pass in a JSON object containing the service account auth settings.");
      if (!I.client_email) throw new Error("The incoming JSON object does not contain a client_email field");
      if (!I.private_key) throw new Error("The incoming JSON object does not contain a private_key field");
      this.email = I.client_email, this.key = I.private_key, this.keyId = I.private_key_id, this.projectId = I.project_id, this.quotaProjectId = I.quota_project_id, this.universeDomain = I.universe_domain || this.universeDomain
    }
    fromStream(I, d) {
      if (d) this.fromStreamAsync(I).then(() => d(), d);
      else return this.fromStreamAsync(I)
    }
    fromStreamAsync(I) {
      return new Promise((d, G) => {
        if (!I) throw new Error("Must pass in a stream containing the service account auth settings.");
        let Z = "";
        I.setEncoding("utf8").on("error", G).on("data", (C) => Z += C).on("end", () => {
          try {
            let C = JSON.parse(Z);
            this.fromJSON(C), d()
          } catch (C) {
            G(C)
          }
        })
      })
    }
    fromAPIKey(I) {
      if (typeof I !== "string") throw new Error("Must provide an API Key string.");
      this.apiKey = I
    }
    async getCredentials() {
      if (this.key) return {
        private_key: this.key,
        client_email: this.email
      };
      else if (this.keyFile) {
        let d = await this.createGToken().getCredentials(this.keyFile);
        return {
          private_key: d.privateKey,
          client_email: d.clientEmail
        }
      }
      throw new Error("A key or a keyFile must be provided to getCredentials.")
    }
  }
  CZ2.JWT = UH1
})
// @from(Start 3829224, End 3832027)
EH1 = Y((wZ2) => {
  Object.defineProperty(wZ2, "__esModule", {
    value: !0
  });
  wZ2.UserRefreshClient = wZ2.USER_REFRESH_ACCOUNT_TYPE = void 0;
  var un5 = TJ(),
    Tn5 = B1("querystring");
  wZ2.USER_REFRESH_ACCOUNT_TYPE = "authorized_user";
  class Za extends un5.OAuth2Client {
    constructor(I, d, G, Z, C) {
      let W = I && typeof I === "object" ? I : {
        clientId: I,
        clientSecret: d,
        refreshToken: G,
        eagerRefreshThresholdMillis: Z,
        forceRefreshOnFailure: C
      };
      super(W);
      this._refreshToken = W.refreshToken, this.credentials.refresh_token = W.refreshToken
    }
    async refreshTokenNoCache(I) {
      return super.refreshTokenNoCache(this._refreshToken)
    }
    async fetchIdToken(I) {
      return (await this.transporter.request({
        ...Za.RETRY_CONFIG,
        url: this.endpoints.oauth2TokenUrl,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        data: Tn5.stringify({
          client_id: this._clientId,
          client_secret: this._clientSecret,
          grant_type: "refresh_token",
          refresh_token: this._refreshToken,
          target_audience: I
        })
      })).data.id_token
    }
    fromJSON(I) {
      if (!I) throw new Error("Must pass in a JSON object containing the user refresh token");
      if (I.type !== "authorized_user") throw new Error('The incoming JSON object does not have the "authorized_user" type');
      if (!I.client_id) throw new Error("The incoming JSON object does not contain a client_id field");
      if (!I.client_secret) throw new Error("The incoming JSON object does not contain a client_secret field");
      if (!I.refresh_token) throw new Error("The incoming JSON object does not contain a refresh_token field");
      this._clientId = I.client_id, this._clientSecret = I.client_secret, this._refreshToken = I.refresh_token, this.credentials.refresh_token = I.refresh_token, this.quotaProjectId = I.quota_project_id, this.universeDomain = I.universe_domain || this.universeDomain
    }
    fromStream(I, d) {
      if (d) this.fromStreamAsync(I).then(() => d(), d);
      else return this.fromStreamAsync(I)
    }
    async fromStreamAsync(I) {
      return new Promise((d, G) => {
        if (!I) return G(new Error("Must pass in a stream containing the user refresh token."));
        let Z = "";
        I.setEncoding("utf8").on("error", G).on("data", (C) => Z += C).on("end", () => {
          try {
            let C = JSON.parse(Z);
            return this.fromJSON(C), d()
          } catch (C) {
            return G(C)
          }
        })
      })
    }
    static fromJSON(I) {
      let d = new Za;
      return d.fromJSON(I), d
    }
  }
  wZ2.UserRefreshClient = Za
})
// @from(Start 3832033, End 3836129)
MH1 = Y((VZ2) => {
  Object.defineProperty(VZ2, "__esModule", {
    value: !0
  });
  VZ2.Impersonated = VZ2.IMPERSONATED_ACCOUNT_TYPE = void 0;
  var AZ2 = TJ(),
    mn5 = dW(),
    ln5 = pD();
  VZ2.IMPERSONATED_ACCOUNT_TYPE = "impersonated_service_account";
  class C$ extends AZ2.OAuth2Client {
    constructor(I = {}) {
      var d, G, Z, C, W, w;
      super(I);
      if (this.credentials = {
          expiry_date: 1,
          refresh_token: "impersonated-placeholder"
        }, this.sourceClient = (d = I.sourceClient) !== null && d !== void 0 ? d : new AZ2.OAuth2Client, this.targetPrincipal = (G = I.targetPrincipal) !== null && G !== void 0 ? G : "", this.delegates = (Z = I.delegates) !== null && Z !== void 0 ? Z : [], this.targetScopes = (C = I.targetScopes) !== null && C !== void 0 ? C : [], this.lifetime = (W = I.lifetime) !== null && W !== void 0 ? W : 3600, !ln5.originalOrCamelOptions(I).get("universe_domain")) this.universeDomain = this.sourceClient.universeDomain;
      else if (this.sourceClient.universeDomain !== this.universeDomain) throw new RangeError(`Universe domain ${this.sourceClient.universeDomain} in source credentials does not match ${this.universeDomain} universe domain set for impersonated credentials.`);
      this.endpoint = (w = I.endpoint) !== null && w !== void 0 ? w : `https://iamcredentials.${this.universeDomain}`
    }
    async sign(I) {
      await this.sourceClient.getAccessToken();
      let d = `projects/-/serviceAccounts/${this.targetPrincipal}`,
        G = `${this.endpoint}/v1/${d}:signBlob`,
        Z = {
          delegates: this.delegates,
          payload: Buffer.from(I).toString("base64")
        };
      return (await this.sourceClient.request({
        ...C$.RETRY_CONFIG,
        url: G,
        data: Z,
        method: "POST"
      })).data
    }
    getTargetPrincipal() {
      return this.targetPrincipal
    }
    async refreshToken() {
      var I, d, G, Z, C, W;
      try {
        await this.sourceClient.getAccessToken();
        let w = "projects/-/serviceAccounts/" + this.targetPrincipal,
          B = `${this.endpoint}/v1/${w}:generateAccessToken`,
          A = {
            delegates: this.delegates,
            scope: this.targetScopes,
            lifetime: this.lifetime + "s"
          },
          V = await this.sourceClient.request({
            ...C$.RETRY_CONFIG,
            url: B,
            data: A,
            method: "POST"
          }),
          X = V.data;
        return this.credentials.access_token = X.accessToken, this.credentials.expiry_date = Date.parse(X.expireTime), {
          tokens: this.credentials,
          res: V
        }
      } catch (w) {
        if (!(w instanceof Error)) throw w;
        let B = 0,
          A = "";
        if (w instanceof mn5.GaxiosError) B = (G = (d = (I = w === null || w === void 0 ? void 0 : w.response) === null || I === void 0 ? void 0 : I.data) === null || d === void 0 ? void 0 : d.error) === null || G === void 0 ? void 0 : G.status, A = (W = (C = (Z = w === null || w === void 0 ? void 0 : w.response) === null || Z === void 0 ? void 0 : Z.data) === null || C === void 0 ? void 0 : C.error) === null || W === void 0 ? void 0 : W.message;
        if (B && A) throw w.message = `${B}: unable to impersonate: ${A}`, w;
        else throw w.message = `unable to impersonate: ${w}`, w
      }
    }
    async fetchIdToken(I, d) {
      var G, Z;
      await this.sourceClient.getAccessToken();
      let C = `projects/-/serviceAccounts/${this.targetPrincipal}`,
        W = `${this.endpoint}/v1/${C}:generateIdToken`,
        w = {
          delegates: this.delegates,
          audience: I,
          includeEmail: (G = d === null || d === void 0 ? void 0 : d.includeEmail) !== null && G !== void 0 ? G : !0,
          useEmailAzp: (Z = d === null || d === void 0 ? void 0 : d.includeEmail) !== null && Z !== void 0 ? Z : !0
        };
      return (await this.sourceClient.request({
        ...C$.RETRY_CONFIG,
        url: W,
        data: w,
        method: "POST"
      })).data.token
    }
  }
  VZ2.Impersonated = C$
})
// @from(Start 3836135, End 3839357)
SH1 = Y((DZ2) => {
  Object.defineProperty(DZ2, "__esModule", {
    value: !0
  });
  DZ2.OAuthClientAuthHandler = void 0;
  DZ2.getErrorFromOAuthErrorResponse = kn5;
  var YZ2 = B1("querystring"),
    hn5 = hq(),
    jn5 = ["PUT", "POST", "PATCH"];
  class _Z2 {
    constructor(I) {
      this.clientAuthentication = I, this.crypto = hn5.createCrypto()
    }
    applyClientAuthenticationOptions(I, d) {
      if (this.injectAuthenticatedHeaders(I, d), !d) this.injectAuthenticatedRequestBody(I)
    }
    injectAuthenticatedHeaders(I, d) {
      var G;
      if (d) I.headers = I.headers || {}, Object.assign(I.headers, {
        Authorization: `Bearer ${d}}`
      });
      else if (((G = this.clientAuthentication) === null || G === void 0 ? void 0 : G.confidentialClientType) === "basic") {
        I.headers = I.headers || {};
        let Z = this.clientAuthentication.clientId,
          C = this.clientAuthentication.clientSecret || "",
          W = this.crypto.encodeBase64StringUtf8(`${Z}:${C}`);
        Object.assign(I.headers, {
          Authorization: `Basic ${W}`
        })
      }
    }
    injectAuthenticatedRequestBody(I) {
      var d;
      if (((d = this.clientAuthentication) === null || d === void 0 ? void 0 : d.confidentialClientType) === "request-body") {
        let G = (I.method || "GET").toUpperCase();
        if (jn5.indexOf(G) !== -1) {
          let Z, C = I.headers || {};
          for (let W in C)
            if (W.toLowerCase() === "content-type" && C[W]) {
              Z = C[W].toLowerCase();
              break
            } if (Z === "application/x-www-form-urlencoded") {
            I.data = I.data || "";
            let W = YZ2.parse(I.data);
            Object.assign(W, {
              client_id: this.clientAuthentication.clientId,
              client_secret: this.clientAuthentication.clientSecret || ""
            }), I.data = YZ2.stringify(W)
          } else if (Z === "application/json") I.data = I.data || {}, Object.assign(I.data, {
            client_id: this.clientAuthentication.clientId,
            client_secret: this.clientAuthentication.clientSecret || ""
          });
          else throw new Error(`${Z} content-types are not supported with ${this.clientAuthentication.confidentialClientType} client authentication`)
        } else throw new Error(`${G} HTTP method does not support ${this.clientAuthentication.confidentialClientType} client authentication`)
      }
    }
    static get RETRY_CONFIG() {
      return {
        retry: !0,
        retryConfig: {
          httpMethodsToRetry: ["GET", "PUT", "POST", "HEAD", "OPTIONS", "DELETE"]
        }
      }
    }
  }
  DZ2.OAuthClientAuthHandler = _Z2;

  function kn5(I, d) {
    let {
      error: G,
      error_description: Z,
      error_uri: C
    } = I, W = `Error code ${G}`;
    if (typeof Z !== "undefined") W += `: ${Z}`;
    if (typeof C !== "undefined") W += ` - ${C}`;
    let w = new Error(W);
    if (d) {
      let B = Object.keys(d);
      if (d.stack) B.push("stack");
      B.forEach((A) => {
        if (A !== "message") Object.defineProperty(w, A, {
          value: d[A],
          writable: !1,
          enumerable: !0
        })
      })
    }
    return w
  }
})
// @from(Start 3839363, End 3841149)
yH1 = Y((gZ2) => {
  Object.defineProperty(gZ2, "__esModule", {
    value: !0
  });
  gZ2.StsCredentials = void 0;
  var cn5 = dW(),
    pn5 = B1("querystring"),
    in5 = eP(),
    FZ2 = SH1();
  class LH1 extends FZ2.OAuthClientAuthHandler {
    constructor(I, d) {
      super(d);
      this.tokenExchangeEndpoint = I, this.transporter = new in5.DefaultTransporter
    }
    async exchangeToken(I, d, G) {
      var Z, C, W;
      let w = {
        grant_type: I.grantType,
        resource: I.resource,
        audience: I.audience,
        scope: (Z = I.scope) === null || Z === void 0 ? void 0 : Z.join(" "),
        requested_token_type: I.requestedTokenType,
        subject_token: I.subjectToken,
        subject_token_type: I.subjectTokenType,
        actor_token: (C = I.actingParty) === null || C === void 0 ? void 0 : C.actorToken,
        actor_token_type: (W = I.actingParty) === null || W === void 0 ? void 0 : W.actorTokenType,
        options: G && JSON.stringify(G)
      };
      Object.keys(w).forEach((V) => {
        if (typeof w[V] === "undefined") delete w[V]
      });
      let B = {
        "Content-Type": "application/x-www-form-urlencoded"
      };
      Object.assign(B, d || {});
      let A = {
        ...LH1.RETRY_CONFIG,
        url: this.tokenExchangeEndpoint.toString(),
        method: "POST",
        headers: B,
        data: pn5.stringify(w),
        responseType: "json"
      };
      this.applyClientAuthenticationOptions(A);
      try {
        let V = await this.transporter.request(A),
          X = V.data;
        return X.res = V, X
      } catch (V) {
        if (V instanceof cn5.GaxiosError && V.response) throw FZ2.getErrorFromOAuthErrorResponse(V.response.data, V);
        throw V
      }
    }
  }
  gZ2.StsCredentials = LH1
})
// @from(Start 3841155, End 3850702)
nD = Y((z8) => {
  var PH1 = z8 && z8.__classPrivateFieldGet || function(I, d, G, Z) {
      if (G === "a" && !Z) throw new TypeError("Private accessor was defined without a getter");
      if (typeof d === "function" ? I !== d || !Z : !d.has(I)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return G === "m" ? Z : G === "a" ? Z.call(I) : Z ? Z.value : d.get(I)
    },
    KZ2 = z8 && z8.__classPrivateFieldSet || function(I, d, G, Z, C) {
      if (Z === "m") throw new TypeError("Private method is not writable");
      if (Z === "a" && !C) throw new TypeError("Private accessor was defined without a setter");
      if (typeof d === "function" ? I !== d || !C : !d.has(I)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return Z === "a" ? C.call(I, G) : C ? C.value = G : d.set(I, G), G
    },
    $H1, aq, zZ2;
  Object.defineProperty(z8, "__esModule", {
    value: !0
  });
  z8.BaseExternalAccountClient = z8.DEFAULT_UNIVERSE = z8.CLOUD_RESOURCE_MANAGER = z8.EXTERNAL_ACCOUNT_TYPE = z8.EXPIRATION_TIME_OFFSET = void 0;
  var nn5 = B1("stream"),
    rn5 = UB(),
    an5 = yH1(),
    NZ2 = pD(),
    sn5 = "urn:ietf:params:oauth:grant-type:token-exchange",
    on5 = "urn:ietf:params:oauth:token-type:access_token",
    uH1 = "https://www.googleapis.com/auth/cloud-platform",
    en5 = 3600;
  z8.EXPIRATION_TIME_OFFSET = 300000;
  z8.EXTERNAL_ACCOUNT_TYPE = "external_account";
  z8.CLOUD_RESOURCE_MANAGER = "https://cloudresourcemanager.googleapis.com/v1/projects/";
  var tn5 = "//iam\\.googleapis\\.com/locations/[^/]+/workforcePools/[^/]+/providers/.+",
    Ir5 = "https://sts.{universeDomain}/v1/token",
    dr5 = tD1(),
    Gr5 = UB();
  Object.defineProperty(z8, "DEFAULT_UNIVERSE", {
    enumerable: !0,
    get: function() {
      return Gr5.DEFAULT_UNIVERSE
    }
  });
  class Ca extends rn5.AuthClient {
    constructor(I, d) {
      var G;
      super({
        ...I,
        ...d
      });
      $H1.add(this), aq.set(this, null);
      let Z = NZ2.originalOrCamelOptions(I),
        C = Z.get("type");
      if (C && C !== z8.EXTERNAL_ACCOUNT_TYPE) throw new Error(`Expected "${z8.EXTERNAL_ACCOUNT_TYPE}" type but received "${I.type}"`);
      let W = Z.get("client_id"),
        w = Z.get("client_secret"),
        B = (G = Z.get("token_url")) !== null && G !== void 0 ? G : Ir5.replace("{universeDomain}", this.universeDomain),
        A = Z.get("subject_token_type"),
        V = Z.get("workforce_pool_user_project"),
        X = Z.get("service_account_impersonation_url"),
        _ = Z.get("service_account_impersonation"),
        F = NZ2.originalOrCamelOptions(_).get("token_lifetime_seconds");
      if (this.cloudResourceManagerURL = new URL(Z.get("cloud_resource_manager_url") || `https://cloudresourcemanager.${this.universeDomain}/v1/projects/`), W) this.clientAuth = {
        confidentialClientType: "basic",
        clientId: W,
        clientSecret: w
      };
      this.stsCredential = new an5.StsCredentials(B, this.clientAuth), this.scopes = Z.get("scopes") || [uH1], this.cachedAccessToken = null, this.audience = Z.get("audience"), this.subjectTokenType = A, this.workforcePoolUserProject = V;
      let g = new RegExp(tn5);
      if (this.workforcePoolUserProject && !this.audience.match(g)) throw new Error("workforcePoolUserProject should not be set for non-workforce pool credentials.");
      if (this.serviceAccountImpersonationUrl = X, this.serviceAccountImpersonationLifetime = F, this.serviceAccountImpersonationLifetime) this.configLifetimeRequested = !0;
      else this.configLifetimeRequested = !1, this.serviceAccountImpersonationLifetime = en5;
      this.projectNumber = this.getProjectNumber(this.audience), this.supplierContext = {
        audience: this.audience,
        subjectTokenType: this.subjectTokenType,
        transporter: this.transporter
      }
    }
    getServiceAccountEmail() {
      var I;
      if (this.serviceAccountImpersonationUrl) {
        if (this.serviceAccountImpersonationUrl.length > 256) throw new RangeError(`URL is too long: ${this.serviceAccountImpersonationUrl}`);
        let G = /serviceAccounts\/(?<email>[^:]+):generateAccessToken$/.exec(this.serviceAccountImpersonationUrl);
        return ((I = G === null || G === void 0 ? void 0 : G.groups) === null || I === void 0 ? void 0 : I.email) || null
      }
      return null
    }
    setCredentials(I) {
      super.setCredentials(I), this.cachedAccessToken = I
    }
    async getAccessToken() {
      if (!this.cachedAccessToken || this.isExpired(this.cachedAccessToken)) await this.refreshAccessTokenAsync();
      return {
        token: this.cachedAccessToken.access_token,
        res: this.cachedAccessToken.res
      }
    }
    async getRequestHeaders() {
      let d = {
        Authorization: `Bearer ${(await this.getAccessToken()).token}`
      };
      return this.addSharedMetadataHeaders(d)
    }
    request(I, d) {
      if (d) this.requestAsync(I).then((G) => d(null, G), (G) => {
        return d(G, G.response)
      });
      else return this.requestAsync(I)
    }
    async getProjectId() {
      let I = this.projectNumber || this.workforcePoolUserProject;
      if (this.projectId) return this.projectId;
      else if (I) {
        let d = await this.getRequestHeaders(),
          G = await this.transporter.request({
            ...Ca.RETRY_CONFIG,
            headers: d,
            url: `${this.cloudResourceManagerURL.toString()}${I}`,
            responseType: "json"
          });
        return this.projectId = G.data.projectId, this.projectId
      }
      return null
    }
    async requestAsync(I, d = !1) {
      let G;
      try {
        let Z = await this.getRequestHeaders();
        if (I.headers = I.headers || {}, Z && Z["x-goog-user-project"]) I.headers["x-goog-user-project"] = Z["x-goog-user-project"];
        if (Z && Z.Authorization) I.headers.Authorization = Z.Authorization;
        G = await this.transporter.request(I)
      } catch (Z) {
        let C = Z.response;
        if (C) {
          let W = C.status,
            w = C.config.data instanceof nn5.Readable;
          if (!d && (W === 401 || W === 403) && !w && this.forceRefreshOnFailure) return await this.refreshAccessTokenAsync(), await this.requestAsync(I, !0)
        }
        throw Z
      }
      return G
    }
    async refreshAccessTokenAsync() {
      KZ2(this, aq, PH1(this, aq, "f") || PH1(this, $H1, "m", zZ2).call(this), "f");
      try {
        return await PH1(this, aq, "f")
      } finally {
        KZ2(this, aq, null, "f")
      }
    }
    getProjectNumber(I) {
      let d = I.match(/\/projects\/([^/]+)/);
      if (!d) return null;
      return d[1]
    }
    async getImpersonatedAccessToken(I) {
      let d = {
          ...Ca.RETRY_CONFIG,
          url: this.serviceAccountImpersonationUrl,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${I}`
          },
          data: {
            scope: this.getScopesArray(),
            lifetime: this.serviceAccountImpersonationLifetime + "s"
          },
          responseType: "json"
        },
        G = await this.transporter.request(d),
        Z = G.data;
      return {
        access_token: Z.accessToken,
        expiry_date: new Date(Z.expireTime).getTime(),
        res: G
      }
    }
    isExpired(I) {
      let d = new Date().getTime();
      return I.expiry_date ? d >= I.expiry_date - this.eagerRefreshThresholdMillis : !1
    }
    getScopesArray() {
      if (typeof this.scopes === "string") return [this.scopes];
      return this.scopes || [uH1]
    }
    getMetricsHeaderValue() {
      let I = process.version.replace(/^v/, ""),
        d = this.serviceAccountImpersonationUrl !== void 0,
        G = this.credentialSourceType ? this.credentialSourceType : "unknown";
      return `gl-node/${I} auth/${dr5.version} google-byoid-sdk source/${G} sa-impersonation/${d} config-lifetime/${this.configLifetimeRequested}`
    }
  }
  z8.BaseExternalAccountClient = Ca;
  aq = new WeakMap, $H1 = new WeakSet, zZ2 = async function I() {
    let d = await this.retrieveSubjectToken(),
      G = {
        grantType: sn5,
        audience: this.audience,
        requestedTokenType: on5,
        subjectToken: d,
        subjectTokenType: this.subjectTokenType,
        scope: this.serviceAccountImpersonationUrl ? [uH1] : this.getScopesArray()
      },
      Z = !this.clientAuth && this.workforcePoolUserProject ? {
        userProject: this.workforcePoolUserProject
      } : void 0,
      C = {
        "x-goog-api-client": this.getMetricsHeaderValue()
      },
      W = await this.stsCredential.exchangeToken(G, C, Z);
    if (this.serviceAccountImpersonationUrl) this.cachedAccessToken = await this.getImpersonatedAccessToken(W.access_token);
    else if (W.expires_in) this.cachedAccessToken = {
      access_token: W.access_token,
      expiry_date: new Date().getTime() + W.expires_in * 1000,
      res: W.res
    };
    else this.cachedAccessToken = {
      access_token: W.access_token,
      res: W.res
    };
    return this.credentials = {}, Object.assign(this.credentials, this.cachedAccessToken), delete this.credentials.res, this.emit("tokens", {
      refresh_token: null,
      expiry_date: this.cachedAccessToken.expiry_date,
      access_token: this.cachedAccessToken.access_token,
      token_type: "Bearer",
      id_token: null
    }), this.cachedAccessToken
  }
})
// @from(Start 3850708, End 3852026)
RZ2 = Y((fZ2) => {
  var TH1, OH1, mH1;
  Object.defineProperty(fZ2, "__esModule", {
    value: !0
  });
  fZ2.FileSubjectTokenSupplier = void 0;
  var lH1 = B1("util"),
    bH1 = B1("fs"),
    Zr5 = lH1.promisify((TH1 = bH1.readFile) !== null && TH1 !== void 0 ? TH1 : () => {}),
    Cr5 = lH1.promisify((OH1 = bH1.realpath) !== null && OH1 !== void 0 ? OH1 : () => {}),
    Wr5 = lH1.promisify((mH1 = bH1.lstat) !== null && mH1 !== void 0 ? mH1 : () => {});
  class QZ2 {
    constructor(I) {
      this.filePath = I.filePath, this.formatType = I.formatType, this.subjectTokenFieldName = I.subjectTokenFieldName
    }
    async getSubjectToken(I) {
      let d = this.filePath;
      try {
        if (d = await Cr5(d), !(await Wr5(d)).isFile()) throw new Error
      } catch (C) {
        if (C instanceof Error) C.message = `The file at ${d} does not exist, or it is not a file. ${C.message}`;
        throw C
      }
      let G, Z = await Zr5(d, {
        encoding: "utf8"
      });
      if (this.formatType === "text") G = Z;
      else if (this.formatType === "json" && this.subjectTokenFieldName) G = JSON.parse(Z)[this.subjectTokenFieldName];
      if (!G) throw new Error("Unable to parse the subject_token from the credential_source file");
      return G
    }
  }
  fZ2.FileSubjectTokenSupplier = QZ2
})
// @from(Start 3852032, End 3853012)
MZ2 = Y((vZ2) => {
  Object.defineProperty(vZ2, "__esModule", {
    value: !0
  });
  vZ2.UrlSubjectTokenSupplier = void 0;
  class UZ2 {
    constructor(I) {
      this.url = I.url, this.formatType = I.formatType, this.subjectTokenFieldName = I.subjectTokenFieldName, this.headers = I.headers, this.additionalGaxiosOptions = I.additionalGaxiosOptions
    }
    async getSubjectToken(I) {
      let d = {
          ...this.additionalGaxiosOptions,
          url: this.url,
          method: "GET",
          headers: this.headers,
          responseType: this.formatType
        },
        G;
      if (this.formatType === "text") G = (await I.transporter.request(d)).data;
      else if (this.formatType === "json" && this.subjectTokenFieldName) G = (await I.transporter.request(d)).data[this.subjectTokenFieldName];
      if (!G) throw new Error("Unable to parse the subject_token from the credential_source URL");
      return G
    }
  }
  vZ2.UrlSubjectTokenSupplier = UZ2
})
// @from(Start 3853018, End 3855165)
kH1 = Y((SZ2) => {
  Object.defineProperty(SZ2, "__esModule", {
    value: !0
  });
  SZ2.IdentityPoolClient = void 0;
  var wr5 = nD(),
    hH1 = pD(),
    Br5 = RZ2(),
    Ar5 = MZ2();
  class jH1 extends wr5.BaseExternalAccountClient {
    constructor(I, d) {
      super(I, d);
      let G = hH1.originalOrCamelOptions(I),
        Z = G.get("credential_source"),
        C = G.get("subject_token_supplier");
      if (!Z && !C) throw new Error("A credential source or subject token supplier must be specified.");
      if (Z && C) throw new Error("Only one of credential source or subject token supplier can be specified.");
      if (C) this.subjectTokenSupplier = C, this.credentialSourceType = "programmatic";
      else {
        let W = hH1.originalOrCamelOptions(Z),
          w = hH1.originalOrCamelOptions(W.get("format")),
          B = w.get("type") || "text",
          A = w.get("subject_token_field_name");
        if (B !== "json" && B !== "text") throw new Error(`Invalid credential_source format "${B}"`);
        if (B === "json" && !A) throw new Error("Missing subject_token_field_name for JSON credential_source format");
        let V = W.get("file"),
          X = W.get("url"),
          _ = W.get("headers");
        if (V && X) throw new Error('No valid Identity Pool "credential_source" provided, must be either file or url.');
        else if (V && !X) this.credentialSourceType = "file", this.subjectTokenSupplier = new Br5.FileSubjectTokenSupplier({
          filePath: V,
          formatType: B,
          subjectTokenFieldName: A
        });
        else if (!V && X) this.credentialSourceType = "url", this.subjectTokenSupplier = new Ar5.UrlSubjectTokenSupplier({
          url: X,
          formatType: B,
          subjectTokenFieldName: A,
          headers: _,
          additionalGaxiosOptions: jH1.RETRY_CONFIG
        });
        else throw new Error('No valid Identity Pool "credential_source" provided, must be either file or url.')
      }
    }
    async retrieveSubjectToken() {
      return this.subjectTokenSupplier.getSubjectToken(this.supplierContext)
    }
  }
  SZ2.IdentityPoolClient = jH1
})
// @from(Start 3855171, End 3858228)
xH1 = Y((uZ2) => {
  Object.defineProperty(uZ2, "__esModule", {
    value: !0
  });
  uZ2.AwsRequestSigner = void 0;
  var PZ2 = hq(),
    yZ2 = "AWS4-HMAC-SHA256",
    Vr5 = "aws4_request";
  class $Z2 {
    constructor(I, d) {
      this.getCredentials = I, this.region = d, this.crypto = PZ2.createCrypto()
    }
    async getRequestOptions(I) {
      if (!I.url) throw new Error('"url" is required in "amzOptions"');
      let d = typeof I.data === "object" ? JSON.stringify(I.data) : I.data,
        G = I.url,
        Z = I.method || "GET",
        C = I.body || d,
        W = I.headers,
        w = await this.getCredentials(),
        B = new URL(G),
        A = await Yr5({
          crypto: this.crypto,
          host: B.host,
          canonicalUri: B.pathname,
          canonicalQuerystring: B.search.substr(1),
          method: Z,
          region: this.region,
          securityCredentials: w,
          requestPayload: C,
          additionalAmzHeaders: W
        }),
        V = Object.assign(A.amzDate ? {
          "x-amz-date": A.amzDate
        } : {}, {
          Authorization: A.authorizationHeader,
          host: B.host
        }, W || {});
      if (w.token) Object.assign(V, {
        "x-amz-security-token": w.token
      });
      let X = {
        url: G,
        method: Z,
        headers: V
      };
      if (typeof C !== "undefined") X.body = C;
      return X
    }
  }
  uZ2.AwsRequestSigner = $Z2;
  async function W$(I, d, G) {
    return await I.signWithHmacSha256(d, G)
  }
  async function Xr5(I, d, G, Z, C) {
    let W = await W$(I, `AWS4${d}`, G),
      w = await W$(I, W, Z),
      B = await W$(I, w, C);
    return await W$(I, B, "aws4_request")
  }
  async function Yr5(I) {
    let d = I.additionalAmzHeaders || {},
      G = I.requestPayload || "",
      Z = I.host.split(".")[0],
      C = new Date,
      W = C.toISOString().replace(/[-:]/g, "").replace(/\.[0-9]+/, ""),
      w = C.toISOString().replace(/[-]/g, "").replace(/T.*/, ""),
      B = {};
    if (Object.keys(d).forEach((P) => {
        B[P.toLowerCase()] = d[P]
      }), I.securityCredentials.token) B["x-amz-security-token"] = I.securityCredentials.token;
    let A = Object.assign({
        host: I.host
      }, B.date ? {} : {
        "x-amz-date": W
      }, B),
      V = "",
      X = Object.keys(A).sort();
    X.forEach((P) => {
      V += `${P}:${A[P]}
`
    });
    let _ = X.join(";"),
      F = await I.crypto.sha256DigestHex(G),
      g = `${I.method}
${I.canonicalUri}
${I.canonicalQuerystring}
${V}
${_}
${F}`,
      J = `${w}/${I.region}/${Z}/${Vr5}`,
      K = `${yZ2}
${W}
${J}
` + await I.crypto.sha256DigestHex(g),
      Q = await Xr5(I.crypto, I.securityCredentials.secretAccessKey, w, I.region, Z),
      E = await W$(I.crypto, Q, K),
      S = `${yZ2} Credential=${I.securityCredentials.accessKeyId}/${J}, SignedHeaders=${_}, Signature=${PZ2.fromArrayBufferToHex(E)}`;
    return {
      amzDate: B.date ? void 0 : W,
      authorizationHeader: S,
      canonicalQuerystring: I.canonicalQuerystring
    }
  }
})
// @from(Start 3858234, End 3861620)
bZ2 = Y((sq) => {
  var oV = sq && sq.__classPrivateFieldGet || function(I, d, G, Z) {
      if (G === "a" && !Z) throw new TypeError("Private accessor was defined without a getter");
      if (typeof d === "function" ? I !== d || !Z : !d.has(I)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return G === "m" ? Z : G === "a" ? Z.call(I) : Z ? Z.value : d.get(I)
    },
    BW, cH1, OZ2, mZ2, Wa, pH1;
  Object.defineProperty(sq, "__esModule", {
    value: !0
  });
  sq.DefaultAwsSecurityCredentialsSupplier = void 0;
  class lZ2 {
    constructor(I) {
      BW.add(this), this.regionUrl = I.regionUrl, this.securityCredentialsUrl = I.securityCredentialsUrl, this.imdsV2SessionTokenUrl = I.imdsV2SessionTokenUrl, this.additionalGaxiosOptions = I.additionalGaxiosOptions
    }
    async getAwsRegion(I) {
      if (oV(this, BW, "a", Wa)) return oV(this, BW, "a", Wa);
      let d = {};
      if (!oV(this, BW, "a", Wa) && this.imdsV2SessionTokenUrl) d["x-aws-ec2-metadata-token"] = await oV(this, BW, "m", cH1).call(this, I.transporter);
      if (!this.regionUrl) throw new Error('Unable to determine AWS region due to missing "options.credential_source.region_url"');
      let G = {
          ...this.additionalGaxiosOptions,
          url: this.regionUrl,
          method: "GET",
          responseType: "text",
          headers: d
        },
        Z = await I.transporter.request(G);
      return Z.data.substr(0, Z.data.length - 1)
    }
    async getAwsSecurityCredentials(I) {
      if (oV(this, BW, "a", pH1)) return oV(this, BW, "a", pH1);
      let d = {};
      if (this.imdsV2SessionTokenUrl) d["x-aws-ec2-metadata-token"] = await oV(this, BW, "m", cH1).call(this, I.transporter);
      let G = await oV(this, BW, "m", OZ2).call(this, d, I.transporter),
        Z = await oV(this, BW, "m", mZ2).call(this, G, d, I.transporter);
      return {
        accessKeyId: Z.AccessKeyId,
        secretAccessKey: Z.SecretAccessKey,
        token: Z.Token
      }
    }
  }
  sq.DefaultAwsSecurityCredentialsSupplier = lZ2;
  BW = new WeakSet, cH1 = async function I(d) {
    let G = {
      ...this.additionalGaxiosOptions,
      url: this.imdsV2SessionTokenUrl,
      method: "PUT",
      responseType: "text",
      headers: {
        "x-aws-ec2-metadata-token-ttl-seconds": "300"
      }
    };
    return (await d.request(G)).data
  }, OZ2 = async function I(d, G) {
    if (!this.securityCredentialsUrl) throw new Error('Unable to determine AWS role name due to missing "options.credential_source.url"');
    let Z = {
      ...this.additionalGaxiosOptions,
      url: this.securityCredentialsUrl,
      method: "GET",
      responseType: "text",
      headers: d
    };
    return (await G.request(Z)).data
  }, mZ2 = async function I(d, G, Z) {
    return (await Z.request({
      ...this.additionalGaxiosOptions,
      url: `${this.securityCredentialsUrl}/${d}`,
      responseType: "json",
      headers: G
    })).data
  }, Wa = function I() {
    return process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION || null
  }, pH1 = function I() {
    if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) return {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      token: process.env.AWS_SESSION_TOKEN
    };
    return null
  }
})
// @from(Start 3861626, End 3865016)
iH1 = Y((oq) => {
  var _r5 = oq && oq.__classPrivateFieldGet || function(I, d, G, Z) {
      if (G === "a" && !Z) throw new TypeError("Private accessor was defined without a getter");
      if (typeof d === "function" ? I !== d || !Z : !d.has(I)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return G === "m" ? Z : G === "a" ? Z.call(I) : Z ? Z.value : d.get(I)
    },
    wa, jZ2;
  Object.defineProperty(oq, "__esModule", {
    value: !0
  });
  oq.AwsClient = void 0;
  var Dr5 = xH1(),
    Hr5 = nD(),
    Fr5 = bZ2(),
    hZ2 = pD();
  class w$ extends Hr5.BaseExternalAccountClient {
    constructor(I, d) {
      super(I, d);
      let G = hZ2.originalOrCamelOptions(I),
        Z = G.get("credential_source"),
        C = G.get("aws_security_credentials_supplier");
      if (!Z && !C) throw new Error("A credential source or AWS security credentials supplier must be specified.");
      if (Z && C) throw new Error("Only one of credential source or AWS security credentials supplier can be specified.");
      if (C) this.awsSecurityCredentialsSupplier = C, this.regionalCredVerificationUrl = _r5(wa, wa, "f", jZ2), this.credentialSourceType = "programmatic";
      else {
        let W = hZ2.originalOrCamelOptions(Z);
        this.environmentId = W.get("environment_id");
        let w = W.get("region_url"),
          B = W.get("url"),
          A = W.get("imdsv2_session_token_url");
        this.awsSecurityCredentialsSupplier = new Fr5.DefaultAwsSecurityCredentialsSupplier({
          regionUrl: w,
          securityCredentialsUrl: B,
          imdsV2SessionTokenUrl: A
        }), this.regionalCredVerificationUrl = W.get("regional_cred_verification_url"), this.credentialSourceType = "aws", this.validateEnvironmentId()
      }
      this.awsRequestSigner = null, this.region = ""
    }
    validateEnvironmentId() {
      var I;
      let d = (I = this.environmentId) === null || I === void 0 ? void 0 : I.match(/^(aws)(\d+)$/);
      if (!d || !this.regionalCredVerificationUrl) throw new Error('No valid AWS "credential_source" provided');
      else if (parseInt(d[2], 10) !== 1) throw new Error(`aws version "${d[2]}" is not supported in the current build.`)
    }
    async retrieveSubjectToken() {
      if (!this.awsRequestSigner) this.region = await this.awsSecurityCredentialsSupplier.getAwsRegion(this.supplierContext), this.awsRequestSigner = new Dr5.AwsRequestSigner(async () => {
        return this.awsSecurityCredentialsSupplier.getAwsSecurityCredentials(this.supplierContext)
      }, this.region);
      let I = await this.awsRequestSigner.getRequestOptions({
          ...wa.RETRY_CONFIG,
          url: this.regionalCredVerificationUrl.replace("{region}", this.region),
          method: "POST"
        }),
        d = [],
        G = Object.assign({
          "x-goog-cloud-target-resource": this.audience
        }, I.headers);
      for (let Z in G) d.push({
        key: Z,
        value: G[Z]
      });
      return encodeURIComponent(JSON.stringify({
        url: I.url,
        method: I.method,
        headers: d
      }))
    }
  }
  oq.AwsClient = w$;
  wa = w$;
  jZ2 = {
    value: "https://sts.{region}.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15"
  };
  w$.AWS_EC2_METADATA_IPV4_ADDRESS = "169.254.169.254";
  w$.AWS_EC2_METADATA_IPV6_ADDRESS = "fd00:ec2::254"
})