
// @from(Start 3865022, End 3867721)
IF1 = Y((cZ2) => {
  Object.defineProperty(cZ2, "__esModule", {
    value: !0
  });
  cZ2.InvalidSubjectTokenError = cZ2.InvalidMessageFieldError = cZ2.InvalidCodeFieldError = cZ2.InvalidTokenTypeFieldError = cZ2.InvalidExpirationTimeFieldError = cZ2.InvalidSuccessFieldError = cZ2.InvalidVersionFieldError = cZ2.ExecutableResponseError = cZ2.ExecutableResponse = void 0;
  var Ba = "urn:ietf:params:oauth:token-type:saml2",
    nH1 = "urn:ietf:params:oauth:token-type:id_token",
    rH1 = "urn:ietf:params:oauth:token-type:jwt";
  class kZ2 {
    constructor(I) {
      if (!I.version) throw new aH1("Executable response must contain a 'version' field.");
      if (I.success === void 0) throw new sH1("Executable response must contain a 'success' field.");
      if (this.version = I.version, this.success = I.success, this.success) {
        if (this.expirationTime = I.expiration_time, this.tokenType = I.token_type, this.tokenType !== Ba && this.tokenType !== nH1 && this.tokenType !== rH1) throw new oH1(`Executable response must contain a 'token_type' field when successful and it must be one of ${nH1}, ${rH1}, or ${Ba}.`);
        if (this.tokenType === Ba) {
          if (!I.saml_response) throw new Aa(`Executable response must contain a 'saml_response' field when token_type=${Ba}.`);
          this.subjectToken = I.saml_response
        } else {
          if (!I.id_token) throw new Aa(`Executable response must contain a 'id_token' field when token_type=${nH1} or ${rH1}.`);
          this.subjectToken = I.id_token
        }
      } else {
        if (!I.code) throw new eH1("Executable response must contain a 'code' field when unsuccessful.");
        if (!I.message) throw new tH1("Executable response must contain a 'message' field when unsuccessful.");
        this.errorCode = I.code, this.errorMessage = I.message
      }
    }
    isValid() {
      return !this.isExpired() && this.success
    }
    isExpired() {
      return this.expirationTime !== void 0 && this.expirationTime < Math.round(Date.now() / 1000)
    }
  }
  cZ2.ExecutableResponse = kZ2;
  class eV extends Error {
    constructor(I) {
      super(I);
      Object.setPrototypeOf(this, new.target.prototype)
    }
  }
  cZ2.ExecutableResponseError = eV;
  class aH1 extends eV {}
  cZ2.InvalidVersionFieldError = aH1;
  class sH1 extends eV {}
  cZ2.InvalidSuccessFieldError = sH1;
  class xZ2 extends eV {}
  cZ2.InvalidExpirationTimeFieldError = xZ2;
  class oH1 extends eV {}
  cZ2.InvalidTokenTypeFieldError = oH1;
  class eH1 extends eV {}
  cZ2.InvalidCodeFieldError = eH1;
  class tH1 extends eV {}
  cZ2.InvalidMessageFieldError = tH1;
  class Aa extends eV {}
  cZ2.InvalidSubjectTokenError = Aa
})
// @from(Start 3867727, End 3870422)
rZ2 = Y((iZ2) => {
  Object.defineProperty(iZ2, "__esModule", {
    value: !0
  });
  iZ2.PluggableAuthHandler = void 0;
  var Rr5 = Va(),
    OJ = IF1(),
    Ur5 = B1("child_process"),
    dF1 = B1("fs");
  class GF1 {
    constructor(I) {
      if (!I.command) throw new Error("No command provided.");
      if (this.commandComponents = GF1.parseCommand(I.command), this.timeoutMillis = I.timeoutMillis, !this.timeoutMillis) throw new Error("No timeoutMillis provided.");
      this.outputFile = I.outputFile
    }
    retrieveResponseFromExecutable(I) {
      return new Promise((d, G) => {
        let Z = Ur5.spawn(this.commandComponents[0], this.commandComponents.slice(1), {
            env: {
              ...process.env,
              ...Object.fromEntries(I)
            }
          }),
          C = "";
        Z.stdout.on("data", (w) => {
          C += w
        }), Z.stderr.on("data", (w) => {
          C += w
        });
        let W = setTimeout(() => {
          return Z.removeAllListeners(), Z.kill(), G(new Error("The executable failed to finish within the timeout specified."))
        }, this.timeoutMillis);
        Z.on("close", (w) => {
          if (clearTimeout(W), w === 0) try {
            let B = JSON.parse(C),
              A = new OJ.ExecutableResponse(B);
            return d(A)
          } catch (B) {
            if (B instanceof OJ.ExecutableResponseError) return G(B);
            return G(new OJ.ExecutableResponseError(`The executable returned an invalid response: ${C}`))
          } else return G(new Rr5.ExecutableError(C, w.toString()))
        })
      })
    }
    async retrieveCachedResponse() {
      if (!this.outputFile || this.outputFile.length === 0) return;
      let I;
      try {
        I = await dF1.promises.realpath(this.outputFile)
      } catch (G) {
        return
      }
      if (!(await dF1.promises.lstat(I)).isFile()) return;
      let d = await dF1.promises.readFile(I, {
        encoding: "utf8"
      });
      if (d === "") return;
      try {
        let G = JSON.parse(d);
        if (new OJ.ExecutableResponse(G).isValid()) return new OJ.ExecutableResponse(G);
        return
      } catch (G) {
        if (G instanceof OJ.ExecutableResponseError) throw G;
        throw new OJ.ExecutableResponseError(`The output file contained an invalid response: ${d}`)
      }
    }
    static parseCommand(I) {
      let d = I.match(/(?:[^\s"]+|"[^"]*")+/g);
      if (!d) throw new Error(`Provided command: "${I}" could not be parsed.`);
      for (let G = 0; G < d.length; G++)
        if (d[G][0] === '"' && d[G].slice(-1) === '"') d[G] = d[G].slice(1, -1);
      return d
    }
  }
  iZ2.PluggableAuthHandler = GF1
})
// @from(Start 3870428, End 3873397)
Va = Y((tZ2) => {
  Object.defineProperty(tZ2, "__esModule", {
    value: !0
  });
  tZ2.PluggableAuthClient = tZ2.ExecutableError = void 0;
  var vr5 = nD(),
    Er5 = IF1(),
    Mr5 = rZ2();
  class ZF1 extends Error {
    constructor(I, d) {
      super(`The executable failed with exit code: ${d} and error message: ${I}.`);
      this.code = d, Object.setPrototypeOf(this, new.target.prototype)
    }
  }
  tZ2.ExecutableError = ZF1;
  var Sr5 = 30000,
    aZ2 = 5000,
    sZ2 = 120000,
    Lr5 = "GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES",
    oZ2 = 1;
  class eZ2 extends vr5.BaseExternalAccountClient {
    constructor(I, d) {
      super(I, d);
      if (!I.credential_source.executable) throw new Error('No valid Pluggable Auth "credential_source" provided.');
      if (this.command = I.credential_source.executable.command, !this.command) throw new Error('No valid Pluggable Auth "credential_source" provided.');
      if (I.credential_source.executable.timeout_millis === void 0) this.timeoutMillis = Sr5;
      else if (this.timeoutMillis = I.credential_source.executable.timeout_millis, this.timeoutMillis < aZ2 || this.timeoutMillis > sZ2) throw new Error(`Timeout must be between ${aZ2} and ${sZ2} milliseconds.`);
      this.outputFile = I.credential_source.executable.output_file, this.handler = new Mr5.PluggableAuthHandler({
        command: this.command,
        timeoutMillis: this.timeoutMillis,
        outputFile: this.outputFile
      }), this.credentialSourceType = "executable"
    }
    async retrieveSubjectToken() {
      if (process.env[Lr5] !== "1") throw new Error("Pluggable Auth executables need to be explicitly allowed to run by setting the GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES environment Variable to 1.");
      let I = void 0;
      if (this.outputFile) I = await this.handler.retrieveCachedResponse();
      if (!I) {
        let d = new Map;
        if (d.set("GOOGLE_EXTERNAL_ACCOUNT_AUDIENCE", this.audience), d.set("GOOGLE_EXTERNAL_ACCOUNT_TOKEN_TYPE", this.subjectTokenType), d.set("GOOGLE_EXTERNAL_ACCOUNT_INTERACTIVE", "0"), this.outputFile) d.set("GOOGLE_EXTERNAL_ACCOUNT_OUTPUT_FILE", this.outputFile);
        let G = this.getServiceAccountEmail();
        if (G) d.set("GOOGLE_EXTERNAL_ACCOUNT_IMPERSONATED_EMAIL", G);
        I = await this.handler.retrieveResponseFromExecutable(d)
      }
      if (I.version > oZ2) throw new Error(`Version of executable is not currently supported, maximum supported version is ${oZ2}.`);
      if (!I.success) throw new ZF1(I.errorMessage, I.errorCode);
      if (this.outputFile) {
        if (!I.expirationTime) throw new Er5.InvalidExpirationTimeFieldError("The executable response must contain the `expiration_time` field for successful responses when an output_file has been specified in the configuration.")
      }
      if (I.isExpired()) throw new Error("Executable response is expired.");
      return I.subjectToken
    }
  }
  tZ2.PluggableAuthClient = eZ2
})
// @from(Start 3873403, End 3874390)
CF1 = Y((GC2) => {
  Object.defineProperty(GC2, "__esModule", {
    value: !0
  });
  GC2.ExternalAccountClient = void 0;
  var Pr5 = nD(),
    $r5 = kH1(),
    ur5 = iH1(),
    Tr5 = Va();
  class dC2 {
    constructor() {
      throw new Error("ExternalAccountClients should be initialized via: ExternalAccountClient.fromJSON(), directly via explicit constructors, eg. new AwsClient(options), new IdentityPoolClient(options), newPluggableAuthClientOptions, or via new GoogleAuth(options).getClient()")
    }
    static fromJSON(I, d) {
      var G, Z;
      if (I && I.type === Pr5.EXTERNAL_ACCOUNT_TYPE)
        if ((G = I.credential_source) === null || G === void 0 ? void 0 : G.environment_id) return new ur5.AwsClient(I, d);
        else if ((Z = I.credential_source) === null || Z === void 0 ? void 0 : Z.executable) return new Tr5.PluggableAuthClient(I, d);
      else return new $r5.IdentityPoolClient(I, d);
      else return null
    }
  }
  GC2.ExternalAccountClient = dC2
})
// @from(Start 3874396, End 3878651)
AC2 = Y((wC2) => {
  Object.defineProperty(wC2, "__esModule", {
    value: !0
  });
  wC2.ExternalAccountAuthorizedUserClient = wC2.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = void 0;
  var Or5 = UB(),
    CC2 = SH1(),
    mr5 = dW(),
    lr5 = B1("stream"),
    br5 = nD();
  wC2.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = "external_account_authorized_user";
  var hr5 = "https://sts.{universeDomain}/v1/oauthtoken";
  class WF1 extends CC2.OAuthClientAuthHandler {
    constructor(I, d, G) {
      super(G);
      this.url = I, this.transporter = d
    }
    async refreshToken(I, d) {
      let G = new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: I
        }),
        Z = {
          "Content-Type": "application/x-www-form-urlencoded",
          ...d
        },
        C = {
          ...WF1.RETRY_CONFIG,
          url: this.url,
          method: "POST",
          headers: Z,
          data: G.toString(),
          responseType: "json"
        };
      this.applyClientAuthenticationOptions(C);
      try {
        let W = await this.transporter.request(C),
          w = W.data;
        return w.res = W, w
      } catch (W) {
        if (W instanceof mr5.GaxiosError && W.response) throw CC2.getErrorFromOAuthErrorResponse(W.response.data, W);
        throw W
      }
    }
  }
  class WC2 extends Or5.AuthClient {
    constructor(I, d) {
      var G;
      super({
        ...I,
        ...d
      });
      if (I.universe_domain) this.universeDomain = I.universe_domain;
      this.refreshToken = I.refresh_token;
      let Z = {
        confidentialClientType: "basic",
        clientId: I.client_id,
        clientSecret: I.client_secret
      };
      if (this.externalAccountAuthorizedUserHandler = new WF1((G = I.token_url) !== null && G !== void 0 ? G : hr5.replace("{universeDomain}", this.universeDomain), this.transporter, Z), this.cachedAccessToken = null, this.quotaProjectId = I.quota_project_id, typeof(d === null || d === void 0 ? void 0 : d.eagerRefreshThresholdMillis) !== "number") this.eagerRefreshThresholdMillis = br5.EXPIRATION_TIME_OFFSET;
      else this.eagerRefreshThresholdMillis = d.eagerRefreshThresholdMillis;
      this.forceRefreshOnFailure = !!(d === null || d === void 0 ? void 0 : d.forceRefreshOnFailure)
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
            w = C.config.data instanceof lr5.Readable;
          if (!d && (W === 401 || W === 403) && !w && this.forceRefreshOnFailure) return await this.refreshAccessTokenAsync(), await this.requestAsync(I, !0)
        }
        throw Z
      }
      return G
    }
    async refreshAccessTokenAsync() {
      let I = await this.externalAccountAuthorizedUserHandler.refreshToken(this.refreshToken);
      if (this.cachedAccessToken = {
          access_token: I.access_token,
          expiry_date: new Date().getTime() + I.expires_in * 1000,
          res: I.res
        }, I.refresh_token !== void 0) this.refreshToken = I.refresh_token;
      return this.cachedAccessToken
    }
    isExpired(I) {
      let d = new Date().getTime();
      return I.expiry_date ? d >= I.expiry_date - this.eagerRefreshThresholdMillis : !1
    }
  }
  wC2.ExternalAccountAuthorizedUserClient = WC2
})
// @from(Start 3878657, End 3895840)
HC2 = Y((C7) => {
  var rD = C7 && C7.__classPrivateFieldGet || function(I, d, G, Z) {
      if (G === "a" && !Z) throw new TypeError("Private accessor was defined without a getter");
      if (typeof d === "function" ? I !== d || !Z : !d.has(I)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return G === "m" ? Z : G === "a" ? Z.call(I) : Z ? Z.value : d.get(I)
    },
    VC2 = C7 && C7.__classPrivateFieldSet || function(I, d, G, Z, C) {
      if (Z === "m") throw new TypeError("Private method is not writable");
      if (Z === "a" && !C) throw new TypeError("Private accessor was defined without a setter");
      if (typeof d === "function" ? I !== d || !C : !d.has(I)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return Z === "a" ? C.call(I, G) : C ? C.value = G : d.set(I, G), G
    },
    aD, IR, dR, DC2;
  Object.defineProperty(C7, "__esModule", {
    value: !0
  });
  C7.GoogleAuth = C7.GoogleAuthExceptionMessages = C7.CLOUD_SDK_CLIENT_ID = void 0;
  var kr5 = B1("child_process"),
    V$ = B1("fs"),
    B$ = sP(),
    xr5 = B1("os"),
    BF1 = B1("path"),
    cr5 = hq(),
    pr5 = eP(),
    ir5 = VH1(),
    nr5 = XH1(),
    rr5 = YH1(),
    eq = vH1(),
    XC2 = EH1(),
    tq = MH1(),
    ar5 = CF1(),
    A$ = nD(),
    wF1 = UB(),
    YC2 = AC2(),
    _C2 = pD();
  C7.CLOUD_SDK_CLIENT_ID = "764086051850-6qr4p6gpi6hn506pt8ejuq83di341hur.apps.googleusercontent.com";
  C7.GoogleAuthExceptionMessages = {
    API_KEY_WITH_CREDENTIALS: "API Keys and Credentials are mutually exclusive authentication methods and cannot be used together.",
    NO_PROJECT_ID_FOUND: `Unable to detect a Project Id in the current environment. 
To learn more about authentication and Google APIs, visit: 
https://cloud.google.com/docs/authentication/getting-started`,
    NO_CREDENTIALS_FOUND: `Unable to find credentials in current environment. 
To learn more about authentication and Google APIs, visit: 
https://cloud.google.com/docs/authentication/getting-started`,
    NO_ADC_FOUND: "Could not load the default credentials. Browse to https://cloud.google.com/docs/authentication/getting-started for more information.",
    NO_UNIVERSE_DOMAIN_FOUND: `Unable to detect a Universe Domain in the current environment.
To learn more about Universe Domain retrieval, visit: 
https://cloud.google.com/compute/docs/metadata/predefined-metadata-keys`
  };
  class AF1 {
    get isGCE() {
      return this.checkIsGCE
    }
    constructor(I = {}) {
      if (aD.add(this), this.checkIsGCE = void 0, this.jsonContent = null, this.cachedCredential = null, IR.set(this, null), this.clientOptions = {}, this._cachedProjectId = I.projectId || null, this.cachedCredential = I.authClient || null, this.keyFilename = I.keyFilename || I.keyFile, this.scopes = I.scopes, this.clientOptions = I.clientOptions || {}, this.jsonContent = I.credentials || null, this.apiKey = I.apiKey || this.clientOptions.apiKey || null, this.apiKey && (this.jsonContent || this.clientOptions.credentials)) throw new RangeError(C7.GoogleAuthExceptionMessages.API_KEY_WITH_CREDENTIALS);
      if (I.universeDomain) this.clientOptions.universeDomain = I.universeDomain
    }
    setGapicJWTValues(I) {
      I.defaultServicePath = this.defaultServicePath, I.useJWTAccessWithScope = this.useJWTAccessWithScope, I.defaultScopes = this.defaultScopes
    }
    getProjectId(I) {
      if (I) this.getProjectIdAsync().then((d) => I(null, d), I);
      else return this.getProjectIdAsync()
    }
    async getProjectIdOptional() {
      try {
        return await this.getProjectId()
      } catch (I) {
        if (I instanceof Error && I.message === C7.GoogleAuthExceptionMessages.NO_PROJECT_ID_FOUND) return null;
        else throw I
      }
    }
    async findAndCacheProjectId() {
      let I = null;
      if (I || (I = await this.getProductionProjectId()), I || (I = await this.getFileProjectId()), I || (I = await this.getDefaultServiceProjectId()), I || (I = await this.getGCEProjectId()), I || (I = await this.getExternalAccountClientProjectId()), I) return this._cachedProjectId = I, I;
      else throw new Error(C7.GoogleAuthExceptionMessages.NO_PROJECT_ID_FOUND)
    }
    async getProjectIdAsync() {
      if (this._cachedProjectId) return this._cachedProjectId;
      if (!this._findProjectIdPromise) this._findProjectIdPromise = this.findAndCacheProjectId();
      return this._findProjectIdPromise
    }
    async getUniverseDomainFromMetadataServer() {
      var I;
      let d;
      try {
        d = await B$.universe("universe-domain"), d || (d = wF1.DEFAULT_UNIVERSE)
      } catch (G) {
        if (G && ((I = G === null || G === void 0 ? void 0 : G.response) === null || I === void 0 ? void 0 : I.status) === 404) d = wF1.DEFAULT_UNIVERSE;
        else throw G
      }
      return d
    }
    async getUniverseDomain() {
      let I = _C2.originalOrCamelOptions(this.clientOptions).get("universe_domain");
      try {
        I !== null && I !== void 0 || (I = (await this.getClient()).universeDomain)
      } catch (d) {
        I !== null && I !== void 0 || (I = wF1.DEFAULT_UNIVERSE)
      }
      return I
    }
    getAnyScopes() {
      return this.scopes || this.defaultScopes
    }
    getApplicationDefault(I = {}, d) {
      let G;
      if (typeof I === "function") d = I;
      else G = I;
      if (d) this.getApplicationDefaultAsync(G).then((Z) => d(null, Z.credential, Z.projectId), d);
      else return this.getApplicationDefaultAsync(G)
    }
    async getApplicationDefaultAsync(I = {}) {
      if (this.cachedCredential) return await rD(this, aD, "m", dR).call(this, this.cachedCredential, null);
      let d;
      if (d = await this._tryGetApplicationCredentialsFromEnvironmentVariable(I), d) {
        if (d instanceof eq.JWT) d.scopes = this.scopes;
        else if (d instanceof A$.BaseExternalAccountClient) d.scopes = this.getAnyScopes();
        return await rD(this, aD, "m", dR).call(this, d)
      }
      if (d = await this._tryGetApplicationCredentialsFromWellKnownFile(I), d) {
        if (d instanceof eq.JWT) d.scopes = this.scopes;
        else if (d instanceof A$.BaseExternalAccountClient) d.scopes = this.getAnyScopes();
        return await rD(this, aD, "m", dR).call(this, d)
      }
      if (await this._checkIsGCE()) return I.scopes = this.getAnyScopes(), await rD(this, aD, "m", dR).call(this, new ir5.Compute(I));
      throw new Error(C7.GoogleAuthExceptionMessages.NO_ADC_FOUND)
    }
    async _checkIsGCE() {
      if (this.checkIsGCE === void 0) this.checkIsGCE = B$.getGCPResidency() || await B$.isAvailable();
      return this.checkIsGCE
    }
    async _tryGetApplicationCredentialsFromEnvironmentVariable(I) {
      let d = process.env.GOOGLE_APPLICATION_CREDENTIALS || process.env.google_application_credentials;
      if (!d || d.length === 0) return null;
      try {
        return this._getApplicationCredentialsFromFilePath(d, I)
      } catch (G) {
        if (G instanceof Error) G.message = `Unable to read the credential file specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable: ${G.message}`;
        throw G
      }
    }
    async _tryGetApplicationCredentialsFromWellKnownFile(I) {
      let d = null;
      if (this._isWindows()) d = process.env.APPDATA;
      else {
        let Z = process.env.HOME;
        if (Z) d = BF1.join(Z, ".config")
      }
      if (d) {
        if (d = BF1.join(d, "gcloud", "application_default_credentials.json"), !V$.existsSync(d)) d = null
      }
      if (!d) return null;
      return await this._getApplicationCredentialsFromFilePath(d, I)
    }
    async _getApplicationCredentialsFromFilePath(I, d = {}) {
      if (!I || I.length === 0) throw new Error("The file path is invalid.");
      try {
        if (I = V$.realpathSync(I), !V$.lstatSync(I).isFile()) throw new Error
      } catch (Z) {
        if (Z instanceof Error) Z.message = `The file at ${I} does not exist, or it is not a file. ${Z.message}`;
        throw Z
      }
      let G = V$.createReadStream(I);
      return this.fromStream(G, d)
    }
    fromImpersonatedJSON(I) {
      var d, G, Z, C;
      if (!I) throw new Error("Must pass in a JSON object containing an  impersonated refresh token");
      if (I.type !== tq.IMPERSONATED_ACCOUNT_TYPE) throw new Error(`The incoming JSON object does not have the "${tq.IMPERSONATED_ACCOUNT_TYPE}" type`);
      if (!I.source_credentials) throw new Error("The incoming JSON object does not contain a source_credentials field");
      if (!I.service_account_impersonation_url) throw new Error("The incoming JSON object does not contain a service_account_impersonation_url field");
      let W = this.fromJSON(I.source_credentials);
      if (((d = I.service_account_impersonation_url) === null || d === void 0 ? void 0 : d.length) > 256) throw new RangeError(`Target principal is too long: ${I.service_account_impersonation_url}`);
      let w = (Z = (G = /(?<target>[^/]+):(generateAccessToken|generateIdToken)$/.exec(I.service_account_impersonation_url)) === null || G === void 0 ? void 0 : G.groups) === null || Z === void 0 ? void 0 : Z.target;
      if (!w) throw new RangeError(`Cannot extract target principal from ${I.service_account_impersonation_url}`);
      let B = (C = this.getAnyScopes()) !== null && C !== void 0 ? C : [];
      return new tq.Impersonated({
        ...I,
        sourceClient: W,
        targetPrincipal: w,
        targetScopes: Array.isArray(B) ? B : [B]
      })
    }
    fromJSON(I, d = {}) {
      let G, Z = _C2.originalOrCamelOptions(d).get("universe_domain");
      if (I.type === XC2.USER_REFRESH_ACCOUNT_TYPE) G = new XC2.UserRefreshClient(d), G.fromJSON(I);
      else if (I.type === tq.IMPERSONATED_ACCOUNT_TYPE) G = this.fromImpersonatedJSON(I);
      else if (I.type === A$.EXTERNAL_ACCOUNT_TYPE) G = ar5.ExternalAccountClient.fromJSON(I, d), G.scopes = this.getAnyScopes();
      else if (I.type === YC2.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE) G = new YC2.ExternalAccountAuthorizedUserClient(I, d);
      else d.scopes = this.scopes, G = new eq.JWT(d), this.setGapicJWTValues(G), G.fromJSON(I);
      if (Z) G.universeDomain = Z;
      return G
    }
    _cacheClientFromJSON(I, d) {
      let G = this.fromJSON(I, d);
      return this.jsonContent = I, this.cachedCredential = G, G
    }
    fromStream(I, d = {}, G) {
      let Z = {};
      if (typeof d === "function") G = d;
      else Z = d;
      if (G) this.fromStreamAsync(I, Z).then((C) => G(null, C), G);
      else return this.fromStreamAsync(I, Z)
    }
    fromStreamAsync(I, d) {
      return new Promise((G, Z) => {
        if (!I) throw new Error("Must pass in a stream containing the Google auth settings.");
        let C = [];
        I.setEncoding("utf8").on("error", Z).on("data", (W) => C.push(W)).on("end", () => {
          try {
            try {
              let W = JSON.parse(C.join("")),
                w = this._cacheClientFromJSON(W, d);
              return G(w)
            } catch (W) {
              if (!this.keyFilename) throw W;
              let w = new eq.JWT({
                ...this.clientOptions,
                keyFile: this.keyFilename
              });
              return this.cachedCredential = w, this.setGapicJWTValues(w), G(w)
            }
          } catch (W) {
            return Z(W)
          }
        })
      })
    }
    fromAPIKey(I, d = {}) {
      return new eq.JWT({
        ...d,
        apiKey: I
      })
    }
    _isWindows() {
      let I = xr5.platform();
      if (I && I.length >= 3) {
        if (I.substring(0, 3).toLowerCase() === "win") return !0
      }
      return !1
    }
    async getDefaultServiceProjectId() {
      return new Promise((I) => {
        kr5.exec("gcloud config config-helper --format json", (d, G) => {
          if (!d && G) try {
            let Z = JSON.parse(G).configuration.properties.core.project;
            I(Z);
            return
          } catch (Z) {}
          I(null)
        })
      })
    }
    getProductionProjectId() {
      return process.env.GCLOUD_PROJECT || process.env.GOOGLE_CLOUD_PROJECT || process.env.gcloud_project || process.env.google_cloud_project
    }
    async getFileProjectId() {
      if (this.cachedCredential) return this.cachedCredential.projectId;
      if (this.keyFilename) {
        let d = await this.getClient();
        if (d && d.projectId) return d.projectId
      }
      let I = await this._tryGetApplicationCredentialsFromEnvironmentVariable();
      if (I) return I.projectId;
      else return null
    }
    async getExternalAccountClientProjectId() {
      if (!this.jsonContent || this.jsonContent.type !== A$.EXTERNAL_ACCOUNT_TYPE) return null;
      return await (await this.getClient()).getProjectId()
    }
    async getGCEProjectId() {
      try {
        return await B$.project("project-id")
      } catch (I) {
        return null
      }
    }
    getCredentials(I) {
      if (I) this.getCredentialsAsync().then((d) => I(null, d), I);
      else return this.getCredentialsAsync()
    }
    async getCredentialsAsync() {
      let I = await this.getClient();
      if (I instanceof tq.Impersonated) return {
        client_email: I.getTargetPrincipal()
      };
      if (I instanceof A$.BaseExternalAccountClient) {
        let d = I.getServiceAccountEmail();
        if (d) return {
          client_email: d,
          universe_domain: I.universeDomain
        }
      }
      if (this.jsonContent) return {
        client_email: this.jsonContent.client_email,
        private_key: this.jsonContent.private_key,
        universe_domain: this.jsonContent.universe_domain
      };
      if (await this._checkIsGCE()) {
        let [d, G] = await Promise.all([B$.instance("service-accounts/default/email"), this.getUniverseDomain()]);
        return {
          client_email: d,
          universe_domain: G
        }
      }
      throw new Error(C7.GoogleAuthExceptionMessages.NO_CREDENTIALS_FOUND)
    }
    async getClient() {
      if (this.cachedCredential) return this.cachedCredential;
      VC2(this, IR, rD(this, IR, "f") || rD(this, aD, "m", DC2).call(this), "f");
      try {
        return await rD(this, IR, "f")
      } finally {
        VC2(this, IR, null, "f")
      }
    }
    async getIdTokenClient(I) {
      let d = await this.getClient();
      if (!("fetchIdToken" in d)) throw new Error("Cannot fetch ID token in this environment, use GCE or set the GOOGLE_APPLICATION_CREDENTIALS environment variable to a service account credentials JSON file.");
      return new nr5.IdTokenClient({
        targetAudience: I,
        idTokenProvider: d
      })
    }
    async getAccessToken() {
      return (await (await this.getClient()).getAccessToken()).token
    }
    async getRequestHeaders(I) {
      return (await this.getClient()).getRequestHeaders(I)
    }
    async authorizeRequest(I) {
      I = I || {};
      let d = I.url || I.uri,
        Z = await (await this.getClient()).getRequestHeaders(d);
      return I.headers = Object.assign(I.headers || {}, Z), I
    }
    async request(I) {
      return (await this.getClient()).request(I)
    }
    getEnv() {
      return rr5.getEnv()
    }
    async sign(I, d) {
      let G = await this.getClient(),
        Z = await this.getUniverseDomain();
      if (d = d || `https://iamcredentials.${Z}/v1/projects/-/serviceAccounts/`, G instanceof tq.Impersonated) return (await G.sign(I)).signedBlob;
      let C = cr5.createCrypto();
      if (G instanceof eq.JWT && G.key) return await C.sign(G.key, I);
      let W = await this.getCredentials();
      if (!W.client_email) throw new Error("Cannot sign data without `client_email`.");
      return this.signBlob(C, W.client_email, I, d)
    }
    async signBlob(I, d, G, Z) {
      let C = new URL(Z + `${d}:signBlob`);
      return (await this.request({
        method: "POST",
        url: C.href,
        data: {
          payload: I.encodeBase64StringUtf8(G)
        },
        retry: !0,
        retryConfig: {
          httpMethodsToRetry: ["POST"]
        }
      })).data.signedBlob
    }
  }
  C7.GoogleAuth = AF1;
  IR = new WeakMap, aD = new WeakSet, dR = async function I(d, G = process.env.GOOGLE_CLOUD_QUOTA_PROJECT || null) {
    let Z = await this.getProjectIdOptional();
    if (G) d.quotaProjectId = G;
    return this.cachedCredential = d, {
      credential: d,
      projectId: Z
    }
  }, DC2 = async function I() {
    if (this.jsonContent) return this._cacheClientFromJSON(this.jsonContent, this.clientOptions);
    else if (this.keyFilename) {
      let d = BF1.resolve(this.keyFilename),
        G = V$.createReadStream(d);
      return await this.fromStreamAsync(G, this.clientOptions)
    } else if (this.apiKey) {
      let d = await this.fromAPIKey(this.apiKey, this.clientOptions);
      d.scopes = this.scopes;
      let {
        credential: G
      } = await rD(this, aD, "m", dR).call(this, d);
      return G
    } else {
      let {
        credential: d
      } = await this.getApplicationDefaultAsync(this.clientOptions);
      return d
    }
  };
  AF1.DefaultTransporter = pr5.DefaultTransporter
})
// @from(Start 3895846, End 3896263)
KC2 = Y((gC2) => {
  Object.defineProperty(gC2, "__esModule", {
    value: !0
  });
  gC2.IAMAuth = void 0;
  class FC2 {
    constructor(I, d) {
      this.selector = I, this.token = d, this.selector = I, this.token = d
    }
    getRequestHeaders() {
      return {
        "x-goog-iam-authority-selector": this.selector,
        "x-goog-iam-authorization-token": this.token
      }
    }
  }
  gC2.IAMAuth = FC2
})
// @from(Start 3896269, End 3900599)
fC2 = Y((zC2) => {
  Object.defineProperty(zC2, "__esModule", {
    value: !0
  });
  zC2.DownscopedClient = zC2.EXPIRATION_TIME_OFFSET = zC2.MAX_ACCESS_BOUNDARY_RULES_COUNT = void 0;
  var sr5 = B1("stream"),
    or5 = UB(),
    er5 = yH1(),
    tr5 = "urn:ietf:params:oauth:grant-type:token-exchange",
    Ia5 = "urn:ietf:params:oauth:token-type:access_token",
    da5 = "urn:ietf:params:oauth:token-type:access_token";
  zC2.MAX_ACCESS_BOUNDARY_RULES_COUNT = 10;
  zC2.EXPIRATION_TIME_OFFSET = 300000;
  class NC2 extends or5.AuthClient {
    constructor(I, d, G, Z) {
      super({
        ...G,
        quotaProjectId: Z
      });
      if (this.authClient = I, this.credentialAccessBoundary = d, d.accessBoundary.accessBoundaryRules.length === 0) throw new Error("At least one access boundary rule needs to be defined.");
      else if (d.accessBoundary.accessBoundaryRules.length > zC2.MAX_ACCESS_BOUNDARY_RULES_COUNT) throw new Error(`The provided access boundary has more than ${zC2.MAX_ACCESS_BOUNDARY_RULES_COUNT} access boundary rules.`);
      for (let C of d.accessBoundary.accessBoundaryRules)
        if (C.availablePermissions.length === 0) throw new Error("At least one permission should be defined in access boundary rules.");
      this.stsCredential = new er5.StsCredentials(`https://sts.${this.universeDomain}/v1/token`), this.cachedDownscopedAccessToken = null
    }
    setCredentials(I) {
      if (!I.expiry_date) throw new Error("The access token expiry_date field is missing in the provided credentials.");
      super.setCredentials(I), this.cachedDownscopedAccessToken = I
    }
    async getAccessToken() {
      if (!this.cachedDownscopedAccessToken || this.isExpired(this.cachedDownscopedAccessToken)) await this.refreshAccessTokenAsync();
      return {
        token: this.cachedDownscopedAccessToken.access_token,
        expirationTime: this.cachedDownscopedAccessToken.expiry_date,
        res: this.cachedDownscopedAccessToken.res
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
            w = C.config.data instanceof sr5.Readable;
          if (!d && (W === 401 || W === 403) && !w && this.forceRefreshOnFailure) return await this.refreshAccessTokenAsync(), await this.requestAsync(I, !0)
        }
        throw Z
      }
      return G
    }
    async refreshAccessTokenAsync() {
      var I;
      let d = (await this.authClient.getAccessToken()).token,
        G = {
          grantType: tr5,
          requestedTokenType: Ia5,
          subjectToken: d,
          subjectTokenType: da5
        },
        Z = await this.stsCredential.exchangeToken(G, void 0, this.credentialAccessBoundary),
        C = ((I = this.authClient.credentials) === null || I === void 0 ? void 0 : I.expiry_date) || null,
        W = Z.expires_in ? new Date().getTime() + Z.expires_in * 1000 : C;
      return this.cachedDownscopedAccessToken = {
        access_token: Z.access_token,
        expiry_date: W,
        res: Z.res
      }, this.credentials = {}, Object.assign(this.credentials, this.cachedDownscopedAccessToken), delete this.credentials.res, this.emit("tokens", {
        refresh_token: null,
        expiry_date: this.cachedDownscopedAccessToken.expiry_date,
        access_token: this.cachedDownscopedAccessToken.access_token,
        token_type: "Bearer",
        id_token: null
      }), this.cachedDownscopedAccessToken
    }
    isExpired(I) {
      let d = new Date().getTime();
      return I.expiry_date ? d >= I.expiry_date - this.eagerRefreshThresholdMillis : !1
    }
  }
  zC2.DownscopedClient = NC2
})
// @from(Start 3900605, End 3901034)
UC2 = Y((qC2) => {
  Object.defineProperty(qC2, "__esModule", {
    value: !0
  });
  qC2.PassThroughClient = void 0;
  var Za5 = UB();
  class XF1 extends Za5.AuthClient {
    async request(I) {
      return this.transporter.request(I)
    }
    async getAccessToken() {
      return {}
    }
    async getRequestHeaders() {
      return {}
    }
  }
  qC2.PassThroughClient = XF1;
  var Ca5 = new XF1;
  Ca5.getAccessToken()
})
// @from(Start 3901040, End 3905498)
SC2 = Y((R9) => {
  Object.defineProperty(R9, "__esModule", {
    value: !0
  });
  R9.GoogleAuth = R9.auth = R9.DefaultTransporter = R9.PassThroughClient = R9.ExecutableError = R9.PluggableAuthClient = R9.DownscopedClient = R9.BaseExternalAccountClient = R9.ExternalAccountClient = R9.IdentityPoolClient = R9.AwsRequestSigner = R9.AwsClient = R9.UserRefreshClient = R9.LoginTicket = R9.ClientAuthentication = R9.OAuth2Client = R9.CodeChallengeMethod = R9.Impersonated = R9.JWT = R9.JWTAccess = R9.IdTokenClient = R9.IAMAuth = R9.GCPEnv = R9.Compute = R9.DEFAULT_UNIVERSE = R9.AuthClient = R9.gaxios = R9.gcpMetadata = void 0;
  var vC2 = HC2();
  Object.defineProperty(R9, "GoogleAuth", {
    enumerable: !0,
    get: function() {
      return vC2.GoogleAuth
    }
  });
  R9.gcpMetadata = sP();
  R9.gaxios = dW();
  var EC2 = UB();
  Object.defineProperty(R9, "AuthClient", {
    enumerable: !0,
    get: function() {
      return EC2.AuthClient
    }
  });
  Object.defineProperty(R9, "DEFAULT_UNIVERSE", {
    enumerable: !0,
    get: function() {
      return EC2.DEFAULT_UNIVERSE
    }
  });
  var Wa5 = VH1();
  Object.defineProperty(R9, "Compute", {
    enumerable: !0,
    get: function() {
      return Wa5.Compute
    }
  });
  var wa5 = YH1();
  Object.defineProperty(R9, "GCPEnv", {
    enumerable: !0,
    get: function() {
      return wa5.GCPEnv
    }
  });
  var Ba5 = KC2();
  Object.defineProperty(R9, "IAMAuth", {
    enumerable: !0,
    get: function() {
      return Ba5.IAMAuth
    }
  });
  var Aa5 = XH1();
  Object.defineProperty(R9, "IdTokenClient", {
    enumerable: !0,
    get: function() {
      return Aa5.IdTokenClient
    }
  });
  var Va5 = RH1();
  Object.defineProperty(R9, "JWTAccess", {
    enumerable: !0,
    get: function() {
      return Va5.JWTAccess
    }
  });
  var Xa5 = vH1();
  Object.defineProperty(R9, "JWT", {
    enumerable: !0,
    get: function() {
      return Xa5.JWT
    }
  });
  var Ya5 = MH1();
  Object.defineProperty(R9, "Impersonated", {
    enumerable: !0,
    get: function() {
      return Ya5.Impersonated
    }
  });
  var YF1 = TJ();
  Object.defineProperty(R9, "CodeChallengeMethod", {
    enumerable: !0,
    get: function() {
      return YF1.CodeChallengeMethod
    }
  });
  Object.defineProperty(R9, "OAuth2Client", {
    enumerable: !0,
    get: function() {
      return YF1.OAuth2Client
    }
  });
  Object.defineProperty(R9, "ClientAuthentication", {
    enumerable: !0,
    get: function() {
      return YF1.ClientAuthentication
    }
  });
  var _a5 = wH1();
  Object.defineProperty(R9, "LoginTicket", {
    enumerable: !0,
    get: function() {
      return _a5.LoginTicket
    }
  });
  var Da5 = EH1();
  Object.defineProperty(R9, "UserRefreshClient", {
    enumerable: !0,
    get: function() {
      return Da5.UserRefreshClient
    }
  });
  var Ha5 = iH1();
  Object.defineProperty(R9, "AwsClient", {
    enumerable: !0,
    get: function() {
      return Ha5.AwsClient
    }
  });
  var Fa5 = xH1();
  Object.defineProperty(R9, "AwsRequestSigner", {
    enumerable: !0,
    get: function() {
      return Fa5.AwsRequestSigner
    }
  });
  var ga5 = kH1();
  Object.defineProperty(R9, "IdentityPoolClient", {
    enumerable: !0,
    get: function() {
      return ga5.IdentityPoolClient
    }
  });
  var Ja5 = CF1();
  Object.defineProperty(R9, "ExternalAccountClient", {
    enumerable: !0,
    get: function() {
      return Ja5.ExternalAccountClient
    }
  });
  var Ka5 = nD();
  Object.defineProperty(R9, "BaseExternalAccountClient", {
    enumerable: !0,
    get: function() {
      return Ka5.BaseExternalAccountClient
    }
  });
  var Na5 = fC2();
  Object.defineProperty(R9, "DownscopedClient", {
    enumerable: !0,
    get: function() {
      return Na5.DownscopedClient
    }
  });
  var MC2 = Va();
  Object.defineProperty(R9, "PluggableAuthClient", {
    enumerable: !0,
    get: function() {
      return MC2.PluggableAuthClient
    }
  });
  Object.defineProperty(R9, "ExecutableError", {
    enumerable: !0,
    get: function() {
      return MC2.ExecutableError
    }
  });
  var za5 = UC2();
  Object.defineProperty(R9, "PassThroughClient", {
    enumerable: !0,
    get: function() {
      return za5.PassThroughClient
    }
  });
  var Qa5 = eP();
  Object.defineProperty(R9, "DefaultTransporter", {
    enumerable: !0,
    get: function() {
      return Qa5.DefaultTransporter
    }
  });
  var fa5 = new vC2.GoogleAuth;
  R9.auth = fa5
})
// @from(Start 3905504, End 3907225)
yC2 = Y((FX3, ya5) => {
  ya5.exports = {
    name: "dotenv",
    version: "16.4.5",
    description: "Loads environment variables from .env file",
    main: "lib/main.js",
    types: "lib/main.d.ts",
    exports: {
      ".": {
        types: "./lib/main.d.ts",
        require: "./lib/main.js",
        default: "./lib/main.js"
      },
      "./config": "./config.js",
      "./config.js": "./config.js",
      "./lib/env-options": "./lib/env-options.js",
      "./lib/env-options.js": "./lib/env-options.js",
      "./lib/cli-options": "./lib/cli-options.js",
      "./lib/cli-options.js": "./lib/cli-options.js",
      "./package.json": "./package.json"
    },
    scripts: {
      "dts-check": "tsc --project tests/types/tsconfig.json",
      lint: "standard",
      "lint-readme": "standard-markdown",
      pretest: "npm run lint && npm run dts-check",
      test: "tap tests/*.js --100 -Rspec",
      "test:coverage": "tap --coverage-report=lcov",
      prerelease: "npm test",
      release: "standard-version"
    },
    repository: {
      type: "git",
      url: "git://github.com/motdotla/dotenv.git"
    },
    funding: "https://dotenvx.com",
    keywords: ["dotenv", "env", ".env", "environment", "variables", "config", "settings"],
    readmeFilename: "README.md",
    license: "BSD-2-Clause",
    devDependencies: {
      "@definitelytyped/dtslint": "^0.0.133",
      "@types/node": "^18.11.3",
      decache: "^4.6.1",
      sinon: "^14.0.1",
      standard: "^17.0.0",
      "standard-markdown": "^7.1.0",
      "standard-version": "^9.5.0",
      tap: "^16.3.0",
      tar: "^6.1.11",
      typescript: "^4.8.4"
    },
    engines: {
      node: ">=12"
    },
    browser: {
      fs: !1
    }
  }
})
// @from(Start 3907231, End 3913601)
TC2 = Y((gX3, tV) => {
  var _F1 = B1("fs"),
    DF1 = B1("path"),
    Pa5 = B1("os"),
    $a5 = B1("crypto"),
    ua5 = yC2(),
    HF1 = ua5.version,
    Ta5 = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;

  function Oa5(I) {
    let d = {},
      G = I.toString();
    G = G.replace(/\r\n?/mg, `
`);
    let Z;
    while ((Z = Ta5.exec(G)) != null) {
      let C = Z[1],
        W = Z[2] || "";
      W = W.trim();
      let w = W[0];
      if (W = W.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), w === '"') W = W.replace(/\\n/g, `
`), W = W.replace(/\\r/g, "\r");
      d[C] = W
    }
    return d
  }

  function ma5(I) {
    let d = uC2(I),
      G = r6.configDotenv({
        path: d
      });
    if (!G.parsed) {
      let w = new Error(`MISSING_DATA: Cannot parse ${d} for an unknown reason`);
      throw w.code = "MISSING_DATA", w
    }
    let Z = $C2(I).split(","),
      C = Z.length,
      W;
    for (let w = 0; w < C; w++) try {
      let B = Z[w].trim(),
        A = ha5(G, B);
      W = r6.decrypt(A.ciphertext, A.key);
      break
    } catch (B) {
      if (w + 1 >= C) throw B
    }
    return r6.parse(W)
  }

  function la5(I) {
    console.log(`[dotenv@${HF1}][INFO] ${I}`)
  }

  function ba5(I) {
    console.log(`[dotenv@${HF1}][WARN] ${I}`)
  }

  function Ya(I) {
    console.log(`[dotenv@${HF1}][DEBUG] ${I}`)
  }

  function $C2(I) {
    if (I && I.DOTENV_KEY && I.DOTENV_KEY.length > 0) return I.DOTENV_KEY;
    if (process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0) return process.env.DOTENV_KEY;
    return ""
  }

  function ha5(I, d) {
    let G;
    try {
      G = new URL(d)
    } catch (B) {
      if (B.code === "ERR_INVALID_URL") {
        let A = new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");
        throw A.code = "INVALID_DOTENV_KEY", A
      }
      throw B
    }
    let Z = G.password;
    if (!Z) {
      let B = new Error("INVALID_DOTENV_KEY: Missing key part");
      throw B.code = "INVALID_DOTENV_KEY", B
    }
    let C = G.searchParams.get("environment");
    if (!C) {
      let B = new Error("INVALID_DOTENV_KEY: Missing environment part");
      throw B.code = "INVALID_DOTENV_KEY", B
    }
    let W = `DOTENV_VAULT_${C.toUpperCase()}`,
      w = I.parsed[W];
    if (!w) {
      let B = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${W} in your .env.vault file.`);
      throw B.code = "NOT_FOUND_DOTENV_ENVIRONMENT", B
    }
    return {
      ciphertext: w,
      key: Z
    }
  }

  function uC2(I) {
    let d = null;
    if (I && I.path && I.path.length > 0)
      if (Array.isArray(I.path)) {
        for (let G of I.path)
          if (_F1.existsSync(G)) d = G.endsWith(".vault") ? G : `${G}.vault`
      } else d = I.path.endsWith(".vault") ? I.path : `${I.path}.vault`;
    else d = DF1.resolve(process.cwd(), ".env.vault");
    if (_F1.existsSync(d)) return d;
    return null
  }

  function PC2(I) {
    return I[0] === "~" ? DF1.join(Pa5.homedir(), I.slice(1)) : I
  }

  function ja5(I) {
    la5("Loading env from encrypted .env.vault");
    let d = r6._parseVault(I),
      G = process.env;
    if (I && I.processEnv != null) G = I.processEnv;
    return r6.populate(G, d, I), {
      parsed: d
    }
  }

  function ka5(I) {
    let d = DF1.resolve(process.cwd(), ".env"),
      G = "utf8",
      Z = Boolean(I && I.debug);
    if (I && I.encoding) G = I.encoding;
    else if (Z) Ya("No encoding is specified. UTF-8 is used by default");
    let C = [d];
    if (I && I.path)
      if (!Array.isArray(I.path)) C = [PC2(I.path)];
      else {
        C = [];
        for (let A of I.path) C.push(PC2(A))
      } let W, w = {};
    for (let A of C) try {
      let V = r6.parse(_F1.readFileSync(A, {
        encoding: G
      }));
      r6.populate(w, V, I)
    } catch (V) {
      if (Z) Ya(`Failed to load ${A} ${V.message}`);
      W = V
    }
    let B = process.env;
    if (I && I.processEnv != null) B = I.processEnv;
    if (r6.populate(B, w, I), W) return {
      parsed: w,
      error: W
    };
    else return {
      parsed: w
    }
  }

  function xa5(I) {
    if ($C2(I).length === 0) return r6.configDotenv(I);
    let d = uC2(I);
    if (!d) return ba5(`You set DOTENV_KEY but you are missing a .env.vault file at ${d}. Did you forget to build it?`), r6.configDotenv(I);
    return r6._configVault(I)
  }

  function ca5(I, d) {
    let G = Buffer.from(d.slice(-64), "hex"),
      Z = Buffer.from(I, "base64"),
      C = Z.subarray(0, 12),
      W = Z.subarray(-16);
    Z = Z.subarray(12, -16);
    try {
      let w = $a5.createDecipheriv("aes-256-gcm", G, C);
      return w.setAuthTag(W), `${w.update(Z)}${w.final()}`
    } catch (w) {
      let B = w instanceof RangeError,
        A = w.message === "Invalid key length",
        V = w.message === "Unsupported state or unable to authenticate data";
      if (B || A) {
        let X = new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");
        throw X.code = "INVALID_DOTENV_KEY", X
      } else if (V) {
        let X = new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");
        throw X.code = "DECRYPTION_FAILED", X
      } else throw w
    }
  }

  function pa5(I, d, G = {}) {
    let Z = Boolean(G && G.debug),
      C = Boolean(G && G.override);
    if (typeof d !== "object") {
      let W = new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
      throw W.code = "OBJECT_REQUIRED", W
    }
    for (let W of Object.keys(d))
      if (Object.prototype.hasOwnProperty.call(I, W)) {
        if (C === !0) I[W] = d[W];
        if (Z)
          if (C === !0) Ya(`"${W}" is already defined and WAS overwritten`);
          else Ya(`"${W}" is already defined and was NOT overwritten`)
      } else I[W] = d[W]
  }
  var r6 = {
    configDotenv: ka5,
    _configVault: ja5,
    _parseVault: ma5,
    config: xa5,
    decrypt: ca5,
    parse: Oa5,
    populate: pa5
  };
  gX3.configDotenv = r6.configDotenv;
  gX3._configVault = r6._configVault;
  gX3._parseVault = r6._parseVault;
  gX3.config = r6.config;
  gX3.decrypt = r6.decrypt;
  gX3.parse = r6.parse;
  gX3.populate = r6.populate;
  tV.exports = r6
})
// @from(Start 3913607, End 3914152)
mC2 = Y((JX3, OC2) => {
  var GR = {};
  if (process.env.DOTENV_CONFIG_ENCODING != null) GR.encoding = process.env.DOTENV_CONFIG_ENCODING;
  if (process.env.DOTENV_CONFIG_PATH != null) GR.path = process.env.DOTENV_CONFIG_PATH;
  if (process.env.DOTENV_CONFIG_DEBUG != null) GR.debug = process.env.DOTENV_CONFIG_DEBUG;
  if (process.env.DOTENV_CONFIG_OVERRIDE != null) GR.override = process.env.DOTENV_CONFIG_OVERRIDE;
  if (process.env.DOTENV_CONFIG_DOTENV_KEY != null) GR.DOTENV_KEY = process.env.DOTENV_CONFIG_DOTENV_KEY;
  OC2.exports = GR
})
// @from(Start 3914158, End 3914418)
bC2 = Y((KX3, lC2) => {
  var ta5 = /^dotenv_config_(encoding|path|debug|override|DOTENV_KEY)=(.+)$/;
  lC2.exports = function I(d) {
    return d.reduce(function(G, Z) {
      let C = Z.match(ta5);
      if (C) G[C[1]] = C[2];
      return G
    }, {})
  }
})
// @from(Start 3914424, End 3914529)
hC2 = Y(() => {
  (function() {
    TC2().config(Object.assign({}, mC2(), bC2()(process.argv)))
  })()
})
// @from(Start 3914535, End 3947498)
Aw2 = Y((fD3, Bw2) => {
  function $F1(I) {
    if (I instanceof Map) I.clear = I.delete = I.set = function() {
      throw new Error("map is read-only")
    };
    else if (I instanceof Set) I.add = I.clear = I.delete = function() {
      throw new Error("set is read-only")
    };
    return Object.freeze(I), Object.getOwnPropertyNames(I).forEach(function(d) {
      var G = I[d];
      if (typeof G == "object" && !Object.isFrozen(G)) $F1(G)
    }), I
  }
  var eW2 = $F1,
    vo5 = $F1;
  eW2.default = vo5;
  class yF1 {
    constructor(I) {
      if (I.data === void 0) I.data = {};
      this.data = I.data, this.isMatchIgnored = !1
    }
    ignoreMatch() {
      this.isMatchIgnored = !0
    }
  }

  function zR(I) {
    return I.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
  }

  function GH(I, ...d) {
    let G = Object.create(null);
    for (let Z in I) G[Z] = I[Z];
    return d.forEach(function(Z) {
      for (let C in Z) G[C] = Z[C]
    }), G
  }
  var Eo5 = "</span>",
    iW2 = (I) => {
      return !!I.kind
    };
  class tW2 {
    constructor(I, d) {
      this.buffer = "", this.classPrefix = d.classPrefix, I.walk(this)
    }
    addText(I) {
      this.buffer += zR(I)
    }
    openNode(I) {
      if (!iW2(I)) return;
      let d = I.kind;
      if (!I.sublanguage) d = `${this.classPrefix}${d}`;
      this.span(d)
    }
    closeNode(I) {
      if (!iW2(I)) return;
      this.buffer += Eo5
    }
    value() {
      return this.buffer
    }
    span(I) {
      this.buffer += `<span class="${I}">`
    }
  }
  class uF1 {
    constructor() {
      this.rootNode = {
        children: []
      }, this.stack = [this.rootNode]
    }
    get top() {
      return this.stack[this.stack.length - 1]
    }
    get root() {
      return this.rootNode
    }
    add(I) {
      this.top.children.push(I)
    }
    openNode(I) {
      let d = {
        kind: I,
        children: []
      };
      this.add(d), this.stack.push(d)
    }
    closeNode() {
      if (this.stack.length > 1) return this.stack.pop();
      return
    }
    closeAllNodes() {
      while (this.closeNode());
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4)
    }
    walk(I) {
      return this.constructor._walk(I, this.rootNode)
    }
    static _walk(I, d) {
      if (typeof d === "string") I.addText(d);
      else if (d.children) I.openNode(d), d.children.forEach((G) => this._walk(I, G)), I.closeNode(d);
      return I
    }
    static _collapse(I) {
      if (typeof I === "string") return;
      if (!I.children) return;
      if (I.children.every((d) => typeof d === "string")) I.children = [I.children.join("")];
      else I.children.forEach((d) => {
        uF1._collapse(d)
      })
    }
  }
  class Iw2 extends uF1 {
    constructor(I) {
      super();
      this.options = I
    }
    addKeyword(I, d) {
      if (I === "") return;
      this.openNode(d), this.addText(I), this.closeNode()
    }
    addText(I) {
      if (I === "") return;
      this.add(I)
    }
    addSublanguage(I, d) {
      let G = I.root;
      G.kind = d, G.sublanguage = !0, this.add(G)
    }
    toHTML() {
      return new tW2(this, this.options).value()
    }
    finalize() {
      return !0
    }
  }

  function Mo5(I) {
    return new RegExp(I.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "m")
  }

  function f$(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function So5(...I) {
    return I.map((G) => f$(G)).join("")
  }

  function Lo5(...I) {
    return "(" + I.map((G) => f$(G)).join("|") + ")"
  }

  function yo5(I) {
    return new RegExp(I.toString() + "|").exec("").length - 1
  }

  function Po5(I, d) {
    let G = I && I.exec(d);
    return G && G.index === 0
  }
  var $o5 = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

  function uo5(I, d = "|") {
    let G = 0;
    return I.map((Z) => {
      G += 1;
      let C = G,
        W = f$(Z),
        w = "";
      while (W.length > 0) {
        let B = $o5.exec(W);
        if (!B) {
          w += W;
          break
        }
        if (w += W.substring(0, B.index), W = W.substring(B.index + B[0].length), B[0][0] === "\\" && B[1]) w += "\\" + String(Number(B[1]) + C);
        else if (w += B[0], B[0] === "(") G++
      }
      return w
    }).map((Z) => `(${Z})`).join(d)
  }
  var To5 = /\b\B/,
    dw2 = "[a-zA-Z]\\w*",
    TF1 = "[a-zA-Z_]\\w*",
    OF1 = "\\b\\d+(\\.\\d+)?",
    Gw2 = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
    Zw2 = "\\b(0b[01]+)",
    Oo5 = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    mo5 = (I = {}) => {
      let d = /^#![ ]*\//;
      if (I.binary) I.begin = So5(d, /.*\b/, I.binary, /\b.*/);
      return GH({
        className: "meta",
        begin: d,
        end: /$/,
        relevance: 0,
        "on:begin": (G, Z) => {
          if (G.index !== 0) Z.ignoreMatch()
        }
      }, I)
    },
    q$ = {
      begin: "\\\\[\\s\\S]",
      relevance: 0
    },
    lo5 = {
      className: "string",
      begin: "'",
      end: "'",
      illegal: "\\n",
      contains: [q$]
    },
    bo5 = {
      className: "string",
      begin: '"',
      end: '"',
      illegal: "\\n",
      contains: [q$]
    },
    Cw2 = {
      begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
    },
    Ua = function(I, d, G = {}) {
      let Z = GH({
        className: "comment",
        begin: I,
        end: d,
        contains: []
      }, G);
      return Z.contains.push(Cw2), Z.contains.push({
        className: "doctag",
        begin: "(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",
        relevance: 0
      }), Z
    },
    ho5 = Ua("//", "$"),
    jo5 = Ua("/\\*", "\\*/"),
    ko5 = Ua("#", "$"),
    xo5 = {
      className: "number",
      begin: OF1,
      relevance: 0
    },
    co5 = {
      className: "number",
      begin: Gw2,
      relevance: 0
    },
    po5 = {
      className: "number",
      begin: Zw2,
      relevance: 0
    },
    io5 = {
      className: "number",
      begin: OF1 + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0
    },
    no5 = {
      begin: /(?=\/[^/\n]*\/)/,
      contains: [{
        className: "regexp",
        begin: /\//,
        end: /\/[gimuy]*/,
        illegal: /\n/,
        contains: [q$, {
          begin: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [q$]
        }]
      }]
    },
    ro5 = {
      className: "title",
      begin: dw2,
      relevance: 0
    },
    ao5 = {
      className: "title",
      begin: TF1,
      relevance: 0
    },
    so5 = {
      begin: "\\.\\s*" + TF1,
      relevance: 0
    },
    oo5 = function(I) {
      return Object.assign(I, {
        "on:begin": (d, G) => {
          G.data._beginMatch = d[1]
        },
        "on:end": (d, G) => {
          if (G.data._beginMatch !== d[1]) G.ignoreMatch()
        }
      })
    },
    Ra = Object.freeze({
      __proto__: null,
      MATCH_NOTHING_RE: To5,
      IDENT_RE: dw2,
      UNDERSCORE_IDENT_RE: TF1,
      NUMBER_RE: OF1,
      C_NUMBER_RE: Gw2,
      BINARY_NUMBER_RE: Zw2,
      RE_STARTERS_RE: Oo5,
      SHEBANG: mo5,
      BACKSLASH_ESCAPE: q$,
      APOS_STRING_MODE: lo5,
      QUOTE_STRING_MODE: bo5,
      PHRASAL_WORDS_MODE: Cw2,
      COMMENT: Ua,
      C_LINE_COMMENT_MODE: ho5,
      C_BLOCK_COMMENT_MODE: jo5,
      HASH_COMMENT_MODE: ko5,
      NUMBER_MODE: xo5,
      C_NUMBER_MODE: co5,
      BINARY_NUMBER_MODE: po5,
      CSS_NUMBER_MODE: io5,
      REGEXP_MODE: no5,
      TITLE_MODE: ro5,
      UNDERSCORE_TITLE_MODE: ao5,
      METHOD_GUARD: so5,
      END_SAME_AS_BEGIN: oo5
    });

  function eo5(I, d) {
    if (I.input[I.index - 1] === ".") d.ignoreMatch()
  }

  function to5(I, d) {
    if (!d) return;
    if (!I.beginKeywords) return;
    if (I.begin = "\\b(" + I.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", I.__beforeBegin = eo5, I.keywords = I.keywords || I.beginKeywords, delete I.beginKeywords, I.relevance === void 0) I.relevance = 0
  }

  function Ie5(I, d) {
    if (!Array.isArray(I.illegal)) return;
    I.illegal = Lo5(...I.illegal)
  }

  function de5(I, d) {
    if (!I.match) return;
    if (I.begin || I.end) throw new Error("begin & end are not supported with match");
    I.begin = I.match, delete I.match
  }

  function Ge5(I, d) {
    if (I.relevance === void 0) I.relevance = 1
  }
  var Ze5 = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"],
    Ce5 = "keyword";

  function Ww2(I, d, G = Ce5) {
    let Z = {};
    if (typeof I === "string") C(G, I.split(" "));
    else if (Array.isArray(I)) C(G, I);
    else Object.keys(I).forEach(function(W) {
      Object.assign(Z, Ww2(I[W], d, W))
    });
    return Z;

    function C(W, w) {
      if (d) w = w.map((B) => B.toLowerCase());
      w.forEach(function(B) {
        let A = B.split("|");
        Z[A[0]] = [W, We5(A[0], A[1])]
      })
    }
  }

  function We5(I, d) {
    if (d) return Number(d);
    return we5(I) ? 0 : 1
  }

  function we5(I) {
    return Ze5.includes(I.toLowerCase())
  }

  function Be5(I, {
    plugins: d
  }) {
    function G(B, A) {
      return new RegExp(f$(B), "m" + (I.case_insensitive ? "i" : "") + (A ? "g" : ""))
    }
    class Z {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
      }
      addRule(B, A) {
        A.position = this.position++, this.matchIndexes[this.matchAt] = A, this.regexes.push([A, B]), this.matchAt += yo5(B) + 1
      }
      compile() {
        if (this.regexes.length === 0) this.exec = () => null;
        let B = this.regexes.map((A) => A[1]);
        this.matcherRe = G(uo5(B), !0), this.lastIndex = 0
      }
      exec(B) {
        this.matcherRe.lastIndex = this.lastIndex;
        let A = this.matcherRe.exec(B);
        if (!A) return null;
        let V = A.findIndex((_, F) => F > 0 && _ !== void 0),
          X = this.matchIndexes[V];
        return A.splice(0, V), Object.assign(A, X)
      }
    }
    class C {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
      }
      getMatcher(B) {
        if (this.multiRegexes[B]) return this.multiRegexes[B];
        let A = new Z;
        return this.rules.slice(B).forEach(([V, X]) => A.addRule(V, X)), A.compile(), this.multiRegexes[B] = A, A
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0
      }
      considerAll() {
        this.regexIndex = 0
      }
      addRule(B, A) {
        if (this.rules.push([B, A]), A.type === "begin") this.count++
      }
      exec(B) {
        let A = this.getMatcher(this.regexIndex);
        A.lastIndex = this.lastIndex;
        let V = A.exec(B);
        if (this.resumingScanAtSamePosition())
          if (V && V.index === this.lastIndex);
          else {
            let X = this.getMatcher(0);
            X.lastIndex = this.lastIndex + 1, V = X.exec(B)
          } if (V) {
          if (this.regexIndex += V.position + 1, this.regexIndex === this.count) this.considerAll()
        }
        return V
      }
    }

    function W(B) {
      let A = new C;
      if (B.contains.forEach((V) => A.addRule(V.begin, {
          rule: V,
          type: "begin"
        })), B.terminatorEnd) A.addRule(B.terminatorEnd, {
        type: "end"
      });
      if (B.illegal) A.addRule(B.illegal, {
        type: "illegal"
      });
      return A
    }

    function w(B, A) {
      let V = B;
      if (B.isCompiled) return V;
      [de5].forEach((_) => _(B, A)), I.compilerExtensions.forEach((_) => _(B, A)), B.__beforeBegin = null, [to5, Ie5, Ge5].forEach((_) => _(B, A)), B.isCompiled = !0;
      let X = null;
      if (typeof B.keywords === "object") X = B.keywords.$pattern, delete B.keywords.$pattern;
      if (B.keywords) B.keywords = Ww2(B.keywords, I.case_insensitive);
      if (B.lexemes && X) throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");
      if (X = X || B.lexemes || /\w+/, V.keywordPatternRe = G(X, !0), A) {
        if (!B.begin) B.begin = /\B|\b/;
        if (V.beginRe = G(B.begin), B.endSameAsBegin) B.end = B.begin;
        if (!B.end && !B.endsWithParent) B.end = /\B|\b/;
        if (B.end) V.endRe = G(B.end);
        if (V.terminatorEnd = f$(B.end) || "", B.endsWithParent && A.terminatorEnd) V.terminatorEnd += (B.end ? "|" : "") + A.terminatorEnd
      }
      if (B.illegal) V.illegalRe = G(B.illegal);
      if (!B.contains) B.contains = [];
      if (B.contains = [].concat(...B.contains.map(function(_) {
          return Ae5(_ === "self" ? B : _)
        })), B.contains.forEach(function(_) {
          w(_, V)
        }), B.starts) w(B.starts, A);
      return V.matcher = W(V), V
    }
    if (!I.compilerExtensions) I.compilerExtensions = [];
    if (I.contains && I.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return I.classNameAliases = GH(I.classNameAliases || {}), w(I)
  }

  function ww2(I) {
    if (!I) return !1;
    return I.endsWithParent || ww2(I.starts)
  }

  function Ae5(I) {
    if (I.variants && !I.cachedVariants) I.cachedVariants = I.variants.map(function(d) {
      return GH(I, {
        variants: null
      }, d)
    });
    if (I.cachedVariants) return I.cachedVariants;
    if (ww2(I)) return GH(I, {
      starts: I.starts ? GH(I.starts) : null
    });
    if (Object.isFrozen(I)) return GH(I);
    return I
  }
  var Ve5 = "10.7.3";

  function Xe5(I) {
    return Boolean(I || I === "")
  }

  function Ye5(I) {
    let d = {
      props: ["language", "code", "autodetect"],
      data: function() {
        return {
          detectedLanguage: "",
          unknownLanguage: !1
        }
      },
      computed: {
        className() {
          if (this.unknownLanguage) return "";
          return "hljs " + this.detectedLanguage
        },
        highlighted() {
          if (!this.autoDetect && !I.getLanguage(this.language)) return console.warn(`The language "${this.language}" you specified could not be found.`), this.unknownLanguage = !0, zR(this.code);
          let Z = {};
          if (this.autoDetect) Z = I.highlightAuto(this.code), this.detectedLanguage = Z.language;
          else Z = I.highlight(this.language, this.code, this.ignoreIllegals), this.detectedLanguage = this.language;
          return Z.value
        },
        autoDetect() {
          return !this.language || Xe5(this.autodetect)
        },
        ignoreIllegals() {
          return !0
        }
      },
      render(Z) {
        return Z("pre", {}, [Z("code", {
          class: this.className,
          domProps: {
            innerHTML: this.highlighted
          }
        })])
      }
    };
    return {
      Component: d,
      VuePlugin: {
        install(Z) {
          Z.component("highlightjs", d)
        }
      }
    }
  }
  var _e5 = {
    "after:highlightElement": ({
      el: I,
      result: d,
      text: G
    }) => {
      let Z = nW2(I);
      if (!Z.length) return;
      let C = document.createElement("div");
      C.innerHTML = d.value, d.value = De5(Z, nW2(C), G)
    }
  };

  function PF1(I) {
    return I.nodeName.toLowerCase()
  }

  function nW2(I) {
    let d = [];
    return function G(Z, C) {
      for (let W = Z.firstChild; W; W = W.nextSibling)
        if (W.nodeType === 3) C += W.nodeValue.length;
        else if (W.nodeType === 1) {
        if (d.push({
            event: "start",
            offset: C,
            node: W
          }), C = G(W, C), !PF1(W).match(/br|hr|img|input/)) d.push({
          event: "stop",
          offset: C,
          node: W
        })
      }
      return C
    }(I, 0), d
  }

  function De5(I, d, G) {
    let Z = 0,
      C = "",
      W = [];

    function w() {
      if (!I.length || !d.length) return I.length ? I : d;
      if (I[0].offset !== d[0].offset) return I[0].offset < d[0].offset ? I : d;
      return d[0].event === "start" ? I : d
    }

    function B(X) {
      function _(F) {
        return " " + F.nodeName + '="' + zR(F.value) + '"'
      }
      C += "<" + PF1(X) + [].map.call(X.attributes, _).join("") + ">"
    }

    function A(X) {
      C += "</" + PF1(X) + ">"
    }

    function V(X) {
      (X.event === "start" ? B : A)(X.node)
    }
    while (I.length || d.length) {
      let X = w();
      if (C += zR(G.substring(Z, X[0].offset)), Z = X[0].offset, X === I) {
        W.reverse().forEach(A);
        do V(X.splice(0, 1)[0]), X = w(); while (X === I && X.length && X[0].offset === Z);
        W.reverse().forEach(B)
      } else {
        if (X[0].event === "start") W.push(X[0].node);
        else W.pop();
        V(X.splice(0, 1)[0])
      }
    }
    return C + zR(G.substr(Z))
  }
  var rW2 = {},
    SF1 = (I) => {
      console.error(I)
    },
    aW2 = (I, ...d) => {
      console.log(`WARN: ${I}`, ...d)
    },
    kZ = (I, d) => {
      if (rW2[`${I}/${d}`]) return;
      console.log(`Deprecated as of ${I}. ${d}`), rW2[`${I}/${d}`] = !0
    },
    LF1 = zR,
    sW2 = GH,
    oW2 = Symbol("nomatch"),
    He5 = function(I) {
      let d = Object.create(null),
        G = Object.create(null),
        Z = [],
        C = !0,
        W = /(^(<[^>]+>|\t|)+|\n)/gm,
        w = "Could not find the language '{}', did you forget to load/include a language module?",
        B = {
          disableAutodetect: !0,
          name: "Plain text",
          contains: []
        },
        A = {
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          tabReplace: null,
          useBR: !1,
          languages: null,
          __emitter: Iw2
        };

      function V(e) {
        return A.noHighlightRe.test(e)
      }

      function X(e) {
        let G0 = e.className + " ";
        G0 += e.parentNode ? e.parentNode.className : "";
        let H1 = A.languageDetectRe.exec(G0);
        if (H1) {
          let j1 = A1(H1[1]);
          if (!j1) aW2(w.replace("{}", H1[1])), aW2("Falling back to no-highlight mode for this block.", e);
          return j1 ? H1[1] : "no-highlight"
        }
        return G0.split(/\s+/).find((j1) => V(j1) || A1(j1))
      }

      function _(e, G0, H1, j1) {
        let i1 = "",
          E0 = "";
        if (typeof G0 === "object") i1 = e, H1 = G0.ignoreIllegals, E0 = G0.language, j1 = void 0;
        else kZ("10.7.0", "highlight(lang, code, ...args) has been deprecated."), kZ("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), E0 = e, i1 = G0;
        let k = {
          code: i1,
          language: E0
        };
        P0("before:highlight", k);
        let a = k.result ? k.result : F(k.language, k.code, H1, j1);
        return a.code = k.code, P0("after:highlight", a), a
      }

      function F(e, G0, H1, j1) {
        function i1(n0, B2) {
          let A2 = j.case_insensitive ? B2[0].toLowerCase() : B2[0];
          return Object.prototype.hasOwnProperty.call(n0.keywords, A2) && n0.keywords[A2]
        }

        function E0() {
          if (!L1.keywords) {
            O0.addText(x0);
            return
          }
          let n0 = 0;
          L1.keywordPatternRe.lastIndex = 0;
          let B2 = L1.keywordPatternRe.exec(x0),
            A2 = "";
          while (B2) {
            A2 += x0.substring(n0, B2.index);
            let B4 = i1(L1, B2);
            if (B4) {
              let [A4, _5] = B4;
              if (O0.addText(A2), A2 = "", i0 += _5, A4.startsWith("_")) A2 += B2[0];
              else {
                let D5 = j.classNameAliases[A4] || A4;
                O0.addKeyword(B2[0], D5)
              }
            } else A2 += B2[0];
            n0 = L1.keywordPatternRe.lastIndex, B2 = L1.keywordPatternRe.exec(x0)
          }
          A2 += x0.substr(n0), O0.addText(A2)
        }

        function k() {
          if (x0 === "") return;
          let n0 = null;
          if (typeof L1.subLanguage === "string") {
            if (!d[L1.subLanguage]) {
              O0.addText(x0);
              return
            }
            n0 = F(L1.subLanguage, x0, !0, D0[L1.subLanguage]), D0[L1.subLanguage] = n0.top
          } else n0 = J(x0, L1.subLanguage.length ? L1.subLanguage : null);
          if (L1.relevance > 0) i0 += n0.relevance;
          O0.addSublanguage(n0.emitter, n0.language)
        }

        function a() {
          if (L1.subLanguage != null) k();
          else E0();
          x0 = ""
        }

        function Z1(n0) {
          if (n0.className) O0.openNode(j.classNameAliases[n0.className] || n0.className);
          return L1 = Object.create(n0, {
            parent: {
              value: L1
            }
          }), L1
        }

        function Q1(n0, B2, A2) {
          let B4 = Po5(n0.endRe, A2);
          if (B4) {
            if (n0["on:end"]) {
              let A4 = new yF1(n0);
              if (n0["on:end"](B2, A4), A4.isMatchIgnored) B4 = !1
            }
            if (B4) {
              while (n0.endsParent && n0.parent) n0 = n0.parent;
              return n0
            }
          }
          if (n0.endsWithParent) return Q1(n0.parent, B2, A2)
        }

        function N1(n0) {
          if (L1.matcher.regexIndex === 0) return x0 += n0[0], 1;
          else return r5 = !0, 0
        }

        function F1(n0) {
          let B2 = n0[0],
            A2 = n0.rule,
            B4 = new yF1(A2),
            A4 = [A2.__beforeBegin, A2["on:begin"]];
          for (let _5 of A4) {
            if (!_5) continue;
            if (_5(n0, B4), B4.isMatchIgnored) return N1(B2)
          }
          if (A2 && A2.endSameAsBegin) A2.endRe = Mo5(B2);
          if (A2.skip) x0 += B2;
          else {
            if (A2.excludeBegin) x0 += B2;
            if (a(), !A2.returnBegin && !A2.excludeBegin) x0 = B2
          }
          return Z1(A2), A2.returnBegin ? 0 : B2.length
        }

        function O1(n0) {
          let B2 = n0[0],
            A2 = G0.substr(n0.index),
            B4 = Q1(L1, n0, A2);
          if (!B4) return oW2;
          let A4 = L1;
          if (A4.skip) x0 += B2;
          else {
            if (!(A4.returnEnd || A4.excludeEnd)) x0 += B2;
            if (a(), A4.excludeEnd) x0 = B2
          }
          do {
            if (L1.className) O0.closeNode();
            if (!L1.skip && !L1.subLanguage) i0 += L1.relevance;
            L1 = L1.parent
          } while (L1 !== B4.parent);
          if (B4.starts) {
            if (B4.endSameAsBegin) B4.starts.endRe = B4.endRe;
            Z1(B4.starts)
          }
          return A4.returnEnd ? 0 : B2.length
        }

        function K1() {
          let n0 = [];
          for (let B2 = L1; B2 !== j; B2 = B2.parent)
            if (B2.className) n0.unshift(B2.className);
          n0.forEach((B2) => O0.openNode(B2))
        }
        let R1 = {};

        function h1(n0, B2) {
          let A2 = B2 && B2[0];
          if (x0 += n0, A2 == null) return a(), 0;
          if (R1.type === "begin" && B2.type === "end" && R1.index === B2.index && A2 === "") {
            if (x0 += G0.slice(B2.index, B2.index + 1), !C) {
              let B4 = new Error("0 width match regex");
              throw B4.languageName = e, B4.badRule = R1.rule, B4
            }
            return 1
          }
          if (R1 = B2, B2.type === "begin") return F1(B2);
          else if (B2.type === "illegal" && !H1) {
            let B4 = new Error('Illegal lexeme "' + A2 + '" for mode "' + (L1.className || "<unnamed>") + '"');
            throw B4.mode = L1, B4
          } else if (B2.type === "end") {
            let B4 = O1(B2);
            if (B4 !== oW2) return B4
          }
          if (B2.type === "illegal" && A2 === "") return 1;
          if (P2 > 1e5 && P2 > B2.index * 3) throw new Error("potential infinite loop, way more iterations than matches");
          return x0 += A2, A2.length
        }
        let j = A1(e);
        if (!j) throw SF1(w.replace("{}", e)), new Error('Unknown language: "' + e + '"');
        let W1 = Be5(j, {
            plugins: Z
          }),
          U1 = "",
          L1 = j1 || W1,
          D0 = {},
          O0 = new A.__emitter(A);
        K1();
        let x0 = "",
          i0 = 0,
          s0 = 0,
          P2 = 0,
          r5 = !1;
        try {
          L1.matcher.considerAll();
          for (;;) {
            if (P2++, r5) r5 = !1;
            else L1.matcher.considerAll();
            L1.matcher.lastIndex = s0;
            let n0 = L1.matcher.exec(G0);
            if (!n0) break;
            let B2 = G0.substring(s0, n0.index),
              A2 = h1(B2, n0);
            s0 = n0.index + A2
          }
          return h1(G0.substr(s0)), O0.closeAllNodes(), O0.finalize(), U1 = O0.toHTML(), {
            relevance: Math.floor(i0),
            value: U1,
            language: e,
            illegal: !1,
            emitter: O0,
            top: L1
          }
        } catch (n0) {
          if (n0.message && n0.message.includes("Illegal")) return {
            illegal: !0,
            illegalBy: {
              msg: n0.message,
              context: G0.slice(s0 - 100, s0 + 100),
              mode: n0.mode
            },
            sofar: U1,
            relevance: 0,
            value: LF1(G0),
            emitter: O0
          };
          else if (C) return {
            illegal: !1,
            relevance: 0,
            value: LF1(G0),
            emitter: O0,
            language: e,
            top: L1,
            errorRaised: n0
          };
          else throw n0
        }
      }

      function g(e) {
        let G0 = {
          relevance: 0,
          emitter: new A.__emitter(A),
          value: LF1(e),
          illegal: !1,
          top: B
        };
        return G0.emitter.addText(e), G0
      }

      function J(e, G0) {
        G0 = G0 || A.languages || Object.keys(d);
        let H1 = g(e),
          j1 = G0.filter(A1).filter(T1).map((Z1) => F(Z1, e, !1));
        j1.unshift(H1);
        let i1 = j1.sort((Z1, Q1) => {
            if (Z1.relevance !== Q1.relevance) return Q1.relevance - Z1.relevance;
            if (Z1.language && Q1.language) {
              if (A1(Z1.language).supersetOf === Q1.language) return 1;
              else if (A1(Q1.language).supersetOf === Z1.language) return -1
            }
            return 0
          }),
          [E0, k] = i1,
          a = E0;
        return a.second_best = k, a
      }

      function K(e) {
        if (!(A.tabReplace || A.useBR)) return e;
        return e.replace(W, (G0) => {
          if (G0 === `
`) return A.useBR ? "<br>" : G0;
          else if (A.tabReplace) return G0.replace(/\t/g, A.tabReplace);
          return G0
        })
      }

      function Q(e, G0, H1) {
        let j1 = G0 ? G[G0] : H1;
        if (e.classList.add("hljs"), j1) e.classList.add(j1)
      }
      let E = {
          "before:highlightElement": ({
            el: e
          }) => {
            if (A.useBR) e.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ /]*>/g, `
`)
          },
          "after:highlightElement": ({
            result: e
          }) => {
            if (A.useBR) e.value = e.value.replace(/\n/g, "<br>")
          }
        },
        S = /^(<[^>]+>|\t)+/gm,
        P = {
          "after:highlightElement": ({
            result: e
          }) => {
            if (A.tabReplace) e.value = e.value.replace(S, (G0) => G0.replace(/\t/g, A.tabReplace))
          }
        };

      function $(e) {
        let G0 = null,
          H1 = X(e);
        if (V(H1)) return;
        P0("before:highlightElement", {
          el: e,
          language: H1
        }), G0 = e;
        let j1 = G0.textContent,
          i1 = H1 ? _(j1, {
            language: H1,
            ignoreIllegals: !0
          }) : J(j1);
        if (P0("after:highlightElement", {
            el: e,
            result: i1,
            text: j1
          }), e.innerHTML = i1.value, Q(e, H1, i1.language), e.result = {
            language: i1.language,
            re: i1.relevance,
            relavance: i1.relevance
          }, i1.second_best) e.second_best = {
          language: i1.second_best.language,
          re: i1.second_best.relevance,
          relavance: i1.second_best.relevance
        }
      }

      function h(e) {
        if (e.useBR) kZ("10.3.0", "'useBR' will be removed entirely in v11.0"), kZ("10.3.0", "Please see https://github.com/highlightjs/highlight.js/issues/2559");
        A = sW2(A, e)
      }
      let O = () => {
        if (O.called) return;
        O.called = !0, kZ("10.6.0", "initHighlighting() is deprecated.  Use highlightAll() instead."), document.querySelectorAll("pre code").forEach($)
      };

      function T() {
        kZ("10.6.0", "initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."), V1 = !0
      }
      let V1 = !1;

      function c() {
        if (document.readyState === "loading") {
          V1 = !0;
          return
        }
        document.querySelectorAll("pre code").forEach($)
      }

      function c1() {
        if (V1) c()
      }
      if (typeof window !== "undefined" && window.addEventListener) window.addEventListener("DOMContentLoaded", c1, !1);

      function o1(e, G0) {
        let H1 = null;
        try {
          H1 = G0(I)
        } catch (j1) {
          if (SF1("Language definition for '{}' could not be registered.".replace("{}", e)), !C) throw j1;
          else SF1(j1);
          H1 = B
        }
        if (!H1.name) H1.name = e;
        if (d[e] = H1, H1.rawDefinition = G0.bind(null, I), H1.aliases) m1(H1.aliases, {
          languageName: e
        })
      }

      function a1(e) {
        delete d[e];
        for (let G0 of Object.keys(G))
          if (G[G0] === e) delete G[G0]
      }

      function f1() {
        return Object.keys(d)
      }

      function r(e) {
        kZ("10.4.0", "requireLanguage will be removed entirely in v11."), kZ("10.4.0", "Please see https://github.com/highlightjs/highlight.js/pull/2844");
        let G0 = A1(e);
        if (G0) return G0;
        throw new Error("The '{}' language is required, but not loaded.".replace("{}", e))
      }

      function A1(e) {
        return e = (e || "").toLowerCase(), d[e] || d[G[e]]
      }

      function m1(e, {
        languageName: G0
      }) {
        if (typeof e === "string") e = [e];
        e.forEach((H1) => {
          G[H1.toLowerCase()] = G0
        })
      }

      function T1(e) {
        let G0 = A1(e);
        return G0 && !G0.disableAutodetect
      }

      function e1(e) {
        if (e["before:highlightBlock"] && !e["before:highlightElement"]) e["before:highlightElement"] = (G0) => {
          e["before:highlightBlock"](Object.assign({
            block: G0.el
          }, G0))
        };
        if (e["after:highlightBlock"] && !e["after:highlightElement"]) e["after:highlightElement"] = (G0) => {
          e["after:highlightBlock"](Object.assign({
            block: G0.el
          }, G0))
        }
      }

      function F0(e) {
        e1(e), Z.push(e)
      }

      function P0(e, G0) {
        let H1 = e;
        Z.forEach(function(j1) {
          if (j1[H1]) j1[H1](G0)
        })
      }

      function B0(e) {
        return kZ("10.2.0", "fixMarkup will be removed entirely in v11.0"), kZ("10.2.0", "Please see https://github.com/highlightjs/highlight.js/issues/2534"), K(e)
      }

      function a0(e) {
        return kZ("10.7.0", "highlightBlock will be removed entirely in v12.0"), kZ("10.7.0", "Please use highlightElement now."), $(e)
      }
      Object.assign(I, {
        highlight: _,
        highlightAuto: J,
        highlightAll: c,
        fixMarkup: B0,
        highlightElement: $,
        highlightBlock: a0,
        configure: h,
        initHighlighting: O,
        initHighlightingOnLoad: T,
        registerLanguage: o1,
        unregisterLanguage: a1,
        listLanguages: f1,
        getLanguage: A1,
        registerAliases: m1,
        requireLanguage: r,
        autoDetection: T1,
        inherit: sW2,
        addPlugin: F0,
        vuePlugin: Ye5(I).VuePlugin
      }), I.debugMode = function() {
        C = !1
      }, I.safeMode = function() {
        C = !0
      }, I.versionString = Ve5;
      for (let e in Ra)
        if (typeof Ra[e] === "object") eW2(Ra[e]);
      return Object.assign(I, Ra), I.addPlugin(E), I.addPlugin(_e5), I.addPlugin(P), I
    },
    Fe5 = He5({});
  Bw2.exports = Fe5
})