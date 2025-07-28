
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
// @from(Start 3947504, End 3979085)
Xw2 = Y((qD3, Vw2) => {
  function ge5(I) {
    var d = "[A-Za-zА-Яа-яёЁ_][A-Za-zА-Яа-яёЁ_0-9]+",
      G = "далее ",
      Z = "возврат вызватьисключение выполнить для если и из или иначе иначеесли исключение каждого конецесли " + "конецпопытки конеццикла не новый перейти перем по пока попытка прервать продолжить тогда цикл экспорт ",
      C = G + Z,
      W = "загрузитьизфайла ",
      w = "вебклиент вместо внешнеесоединение клиент конецобласти мобильноеприложениеклиент мобильноеприложениесервер " + "наклиенте наклиентенасервере наклиентенасерверебезконтекста насервере насерверебезконтекста область перед " + "после сервер толстыйклиентобычноеприложение толстыйклиентуправляемоеприложение тонкийклиент ",
      B = W + w,
      A = "разделительстраниц разделительстрок символтабуляции ",
      V = "ansitooem oemtoansi ввестивидсубконто ввестиперечисление ввестипериод ввестиплансчетов выбранныйплансчетов " + "датагод датамесяц датачисло заголовоксистемы значениевстроку значениеизстроки каталогиб каталогпользователя " + "кодсимв конгода конецпериодаби конецрассчитанногопериодаби конецстандартногоинтервала конквартала конмесяца " + "коннедели лог лог10 максимальноеколичествосубконто названиеинтерфейса названиенабораправ назначитьвид " + "назначитьсчет найтиссылки началопериодаби началостандартногоинтервала начгода начквартала начмесяца " + "начнедели номерднягода номерднянедели номернеделигода обработкаожидания основнойжурналрасчетов " + "основнойплансчетов основнойязык очиститьокносообщений периодстр получитьвремята получитьдатута " + "получитьдокументта получитьзначенияотбора получитьпозициюта получитьпустоезначение получитьта " + "префиксавтонумерации пропись пустоезначение разм разобратьпозициюдокумента рассчитатьрегистрына " + "рассчитатьрегистрыпо симв создатьобъект статусвозврата стрколичествострок сформироватьпозициюдокумента " + "счетпокоду текущеевремя типзначения типзначениястр установитьтана установитьтапо фиксшаблон шаблон ",
      X = "acos asin atan base64значение base64строка cos exp log log10 pow sin sqrt tan xmlзначение xmlстрока " + "xmlтип xmlтипзнч активноеокно безопасныйрежим безопасныйрежимразделенияданных булево ввестидату ввестизначение " + "ввестистроку ввестичисло возможностьчтенияxml вопрос восстановитьзначение врег выгрузитьжурналрегистрации " + "выполнитьобработкуоповещения выполнитьпроверкуправдоступа вычислить год данныеформывзначение дата день деньгода " + "деньнедели добавитьмесяц заблокироватьданныедляредактирования заблокироватьработупользователя завершитьработусистемы " + "загрузитьвнешнююкомпоненту закрытьсправку записатьjson записатьxml записатьдатуjson записьжурналарегистрации " + "заполнитьзначениясвойств запроситьразрешениепользователя запуститьприложение запуститьсистему зафиксироватьтранзакцию " + "значениевданныеформы значениевстрокувнутр значениевфайл значениезаполнено значениеизстрокивнутр значениеизфайла " + "изxmlтипа импортмоделиxdto имякомпьютера имяпользователя инициализироватьпредопределенныеданные информацияобошибке " + "каталогбиблиотекимобильногоустройства каталогвременныхфайлов каталогдокументов каталогпрограммы кодироватьстроку " + "кодлокализацииинформационнойбазы кодсимвола командасистемы конецгода конецдня конецквартала конецмесяца конецминуты " + "конецнедели конецчаса конфигурациябазыданныхизмененадинамически конфигурацияизменена копироватьданныеформы " + "копироватьфайл краткоепредставлениеошибки лев макс местноевремя месяц мин минута монопольныйрежим найти " + "найтинедопустимыесимволыxml найтиокнопонавигационнойссылке найтипомеченныенаудаление найтипоссылкам найтифайлы " + "началогода началодня началоквартала началомесяца началоминуты началонедели началочаса начатьзапросразрешенияпользователя " + "начатьзапускприложения начатькопированиефайла начатьперемещениефайла начатьподключениевнешнейкомпоненты " + "начатьподключениерасширенияработыскриптографией начатьподключениерасширенияработысфайлами начатьпоискфайлов " + "начатьполучениекаталогавременныхфайлов начатьполучениекаталогадокументов начатьполучениерабочегокаталогаданныхпользователя " + "начатьполучениефайлов начатьпомещениефайла начатьпомещениефайлов начатьсозданиедвоичныхданныхизфайла начатьсозданиекаталога " + "начатьтранзакцию начатьудалениефайлов начатьустановкувнешнейкомпоненты начатьустановкурасширенияработыскриптографией " + "начатьустановкурасширенияработысфайлами неделягода необходимостьзавершениясоединения номерсеансаинформационнойбазы " + "номерсоединенияинформационнойбазы нрег нстр обновитьинтерфейс обновитьнумерациюобъектов обновитьповторноиспользуемыезначения " + "обработкапрерыванияпользователя объединитьфайлы окр описаниеошибки оповестить оповеститьобизменении " + "отключитьобработчикзапросанастроекклиенталицензирования отключитьобработчикожидания отключитьобработчикоповещения " + "открытьзначение открытьиндекссправки открытьсодержаниесправки открытьсправку открытьформу открытьформумодально " + "отменитьтранзакцию очиститьжурналрегистрации очиститьнастройкипользователя очиститьсообщения параметрыдоступа " + "перейтипонавигационнойссылке переместитьфайл подключитьвнешнююкомпоненту " + "подключитьобработчикзапросанастроекклиенталицензирования подключитьобработчикожидания подключитьобработчикоповещения " + "подключитьрасширениеработыскриптографией подключитьрасширениеработысфайлами подробноепредставлениеошибки " + "показатьвводдаты показатьвводзначения показатьвводстроки показатьвводчисла показатьвопрос показатьзначение " + "показатьинформациюобошибке показатьнакарте показатьоповещениепользователя показатьпредупреждение полноеимяпользователя " + "получитьcomобъект получитьxmlтип получитьадреспоместоположению получитьблокировкусеансов получитьвремязавершенияспящегосеанса " + "получитьвремязасыпанияпассивногосеанса получитьвремяожиданияблокировкиданных получитьданныевыбора " + "получитьдополнительныйпараметрклиенталицензирования получитьдопустимыекодылокализации получитьдопустимыечасовыепояса " + "получитьзаголовокклиентскогоприложения получитьзаголовоксистемы получитьзначенияотборажурналарегистрации " + "получитьидентификаторконфигурации получитьизвременногохранилища получитьимявременногофайла " + "получитьимяклиенталицензирования получитьинформациюэкрановклиента получитьиспользованиежурналарегистрации " + "получитьиспользованиесобытияжурналарегистрации получитькраткийзаголовокприложения получитьмакетоформления " + "получитьмаскувсефайлы получитьмаскувсефайлыклиента получитьмаскувсефайлысервера получитьместоположениепоадресу " + "получитьминимальнуюдлинупаролейпользователей получитьнавигационнуюссылку получитьнавигационнуюссылкуинформационнойбазы " + "получитьобновлениеконфигурациибазыданных получитьобновлениепредопределенныхданныхинформационнойбазы получитьобщиймакет " + "получитьобщуюформу получитьокна получитьоперативнуюотметкувремени получитьотключениебезопасногорежима " + "получитьпараметрыфункциональныхопцийинтерфейса получитьполноеимяпредопределенногозначения " + "получитьпредставлениянавигационныхссылок получитьпроверкусложностипаролейпользователей получитьразделительпути " + "получитьразделительпутиклиента получитьразделительпутисервера получитьсеансыинформационнойбазы " + "получитьскоростьклиентскогосоединения получитьсоединенияинформационнойбазы получитьсообщенияпользователю " + "получитьсоответствиеобъектаиформы получитьсоставстандартногоинтерфейсаodata получитьструктурухранениябазыданных " + "получитьтекущийсеансинформационнойбазы получитьфайл получитьфайлы получитьформу получитьфункциональнуюопцию " + "получитьфункциональнуюопциюинтерфейса получитьчасовойпоясинформационнойбазы пользователиос поместитьвовременноехранилище " + "поместитьфайл поместитьфайлы прав праводоступа предопределенноезначение представлениекодалокализации представлениепериода " + "представлениеправа представлениеприложения представлениесобытияжурналарегистрации представлениечасовогопояса предупреждение " + "прекратитьработусистемы привилегированныйрежим продолжитьвызов прочитатьjson прочитатьxml прочитатьдатуjson пустаястрока " + "рабочийкаталогданныхпользователя разблокироватьданныедляредактирования разделитьфайл разорватьсоединениесвнешнимисточникомданных " + "раскодироватьстроку рольдоступна секунда сигнал символ скопироватьжурналрегистрации смещениелетнеговремени " + "смещениестандартноговремени соединитьбуферыдвоичныхданных создатькаталог создатьфабрикуxdto сокрл сокрлп сокрп сообщить " + "состояние сохранитьзначение сохранитьнастройкипользователя сред стрдлина стрзаканчиваетсяна стрзаменить стрнайти стрначинаетсяс " + "строка строкасоединенияинформационнойбазы стрполучитьстроку стрразделить стрсоединить стрсравнить стрчисловхождений " + "стрчислострок стршаблон текущаядата текущаядатасеанса текущаяуниверсальнаядата текущаяуниверсальнаядатавмиллисекундах " + "текущийвариантинтерфейсаклиентскогоприложения текущийвариантосновногошрифтаклиентскогоприложения текущийкодлокализации " + "текущийрежимзапуска текущийязык текущийязыксистемы тип типзнч транзакцияактивна трег удалитьданныеинформационнойбазы " + "удалитьизвременногохранилища удалитьобъекты удалитьфайлы универсальноевремя установитьбезопасныйрежим " + "установитьбезопасныйрежимразделенияданных установитьблокировкусеансов установитьвнешнююкомпоненту " + "установитьвремязавершенияспящегосеанса установитьвремязасыпанияпассивногосеанса установитьвремяожиданияблокировкиданных " + "установитьзаголовокклиентскогоприложения установитьзаголовоксистемы установитьиспользованиежурналарегистрации " + "установитьиспользованиесобытияжурналарегистрации установитькраткийзаголовокприложения " + "установитьминимальнуюдлинупаролейпользователей установитьмонопольныйрежим установитьнастройкиклиенталицензирования " + "установитьобновлениепредопределенныхданныхинформационнойбазы установитьотключениебезопасногорежима " + "установитьпараметрыфункциональныхопцийинтерфейса установитьпривилегированныйрежим " + "установитьпроверкусложностипаролейпользователей установитьрасширениеработыскриптографией " + "установитьрасширениеработысфайлами установитьсоединениесвнешнимисточникомданных установитьсоответствиеобъектаиформы " + "установитьсоставстандартногоинтерфейсаodata установитьчасовойпоясинформационнойбазы установитьчасовойпояссеанса " + "формат цел час часовойпояс часовойпояссеанса число числопрописью этоадресвременногохранилища ",
      _ = "wsссылки библиотекакартинок библиотекамакетовоформлениякомпоновкиданных библиотекастилей бизнеспроцессы " + "внешниеисточникиданных внешниеобработки внешниеотчеты встроенныепокупки главныйинтерфейс главныйстиль " + "документы доставляемыеуведомления журналыдокументов задачи информацияобинтернетсоединении использованиерабочейдаты " + "историяработыпользователя константы критерииотбора метаданные обработки отображениерекламы отправкадоставляемыхуведомлений " + "отчеты панельзадачос параметрзапуска параметрысеанса перечисления планывидоврасчета планывидовхарактеристик " + "планыобмена планысчетов полнотекстовыйпоиск пользователиинформационнойбазы последовательности проверкавстроенныхпокупок " + "рабочаядата расширенияконфигурации регистрыбухгалтерии регистрынакопления регистрырасчета регистрысведений " + "регламентныезадания сериализаторxdto справочники средствагеопозиционирования средствакриптографии средствамультимедиа " + "средстваотображениярекламы средствапочты средствателефонии фабрикаxdto файловыепотоки фоновыезадания хранилищанастроек " + "хранилищевариантовотчетов хранилищенастроекданныхформ хранилищеобщихнастроек хранилищепользовательскихнастроекдинамическихсписков " + "хранилищепользовательскихнастроекотчетов хранилищесистемныхнастроек ",
      F = A + V + X + _,
      g = "webцвета windowsцвета windowsшрифты библиотекакартинок рамкистиля символы цветастиля шрифтыстиля ",
      J = "автоматическоесохранениеданныхформывнастройках автонумерациявформе автораздвижениесерий " + "анимациядиаграммы вариантвыравниванияэлементовизаголовков вариантуправлениявысотойтаблицы " + "вертикальнаяпрокруткаформы вертикальноеположение вертикальноеположениеэлемента видгруппыформы " + "виддекорацииформы виддополненияэлементаформы видизмененияданных видкнопкиформы видпереключателя " + "видподписейкдиаграмме видполяформы видфлажка влияниеразмеранапузырекдиаграммы горизонтальноеположение " + "горизонтальноеположениеэлемента группировкаколонок группировкаподчиненныхэлементовформы " + "группыиэлементы действиеперетаскивания дополнительныйрежимотображения допустимыедействияперетаскивания " + "интервалмеждуэлементамиформы использованиевывода использованиеполосыпрокрутки " + "используемоезначениеточкибиржевойдиаграммы историявыборапривводе источникзначенийоситочекдиаграммы " + "источникзначенияразмерапузырькадиаграммы категориягруппыкоманд максимумсерий начальноеотображениедерева " + "начальноеотображениесписка обновлениетекстаредактирования ориентациядендрограммы ориентациядиаграммы " + "ориентацияметокдиаграммы ориентацияметоксводнойдиаграммы ориентацияэлементаформы отображениевдиаграмме " + "отображениевлегендедиаграммы отображениегруппыкнопок отображениезаголовкашкалыдиаграммы " + "отображениезначенийсводнойдиаграммы отображениезначенияизмерительнойдиаграммы " + "отображениеинтерваладиаграммыганта отображениекнопки отображениекнопкивыбора отображениеобсужденийформы " + "отображениеобычнойгруппы отображениеотрицательныхзначенийпузырьковойдиаграммы отображениепанелипоиска " + "отображениеподсказки отображениепредупрежденияприредактировании отображениеразметкиполосырегулирования " + "отображениестраницформы отображениетаблицы отображениетекстазначениядиаграммыганта " + "отображениеуправленияобычнойгруппы отображениефигурыкнопки палитрацветовдиаграммы поведениеобычнойгруппы " + "поддержкамасштабадендрограммы поддержкамасштабадиаграммыганта поддержкамасштабасводнойдиаграммы " + "поисквтаблицепривводе положениезаголовкаэлементаформы положениекартинкикнопкиформы " + "положениекартинкиэлементаграфическойсхемы положениекоманднойпанелиформы положениекоманднойпанелиэлементаформы " + "положениеопорнойточкиотрисовки положениеподписейкдиаграмме положениеподписейшкалызначенийизмерительнойдиаграммы " + "положениесостоянияпросмотра положениестрокипоиска положениетекстасоединительнойлинии положениеуправленияпоиском " + "положениешкалывремени порядокотображенияточекгоризонтальнойгистограммы порядоксерийвлегендедиаграммы " + "размеркартинки расположениезаголовкашкалыдиаграммы растягиваниеповертикалидиаграммыганта " + "режимавтоотображениясостояния режимвводастроктаблицы режимвыборанезаполненного режимвыделениядаты " + "режимвыделениястрокитаблицы режимвыделениятаблицы режимизмененияразмера режимизменениясвязанногозначения " + "режимиспользованиядиалогапечати режимиспользованияпараметракоманды режиммасштабированияпросмотра " + "режимосновногоокнаклиентскогоприложения режимоткрытияокнаформы режимотображениявыделения " + "режимотображениягеографическойсхемы режимотображениязначенийсерии режимотрисовкисеткиграфическойсхемы " + "режимполупрозрачностидиаграммы режимпробеловдиаграммы режимразмещениянастранице режимредактированияколонки " + "режимсглаживаниядиаграммы режимсглаживанияиндикатора режимсписказадач сквозноевыравнивание " + "сохранениеданныхформывнастройках способзаполнениятекстазаголовкашкалыдиаграммы " + "способопределенияограничивающегозначениядиаграммы стандартнаягруппакоманд стандартноеоформление " + "статусоповещенияпользователя стильстрелки типаппроксимациилиниитрендадиаграммы типдиаграммы " + "типединицышкалывремени типимпортасерийслоягеографическойсхемы типлиниигеографическойсхемы типлиниидиаграммы " + "типмаркерагеографическойсхемы типмаркерадиаграммы типобластиоформления " + "типорганизацииисточникаданныхгеографическойсхемы типотображениясериислоягеографическойсхемы " + "типотображенияточечногообъектагеографическойсхемы типотображенияшкалыэлементалегендыгеографическойсхемы " + "типпоискаобъектовгеографическойсхемы типпроекциигеографическойсхемы типразмещенияизмерений " + "типразмещенияреквизитовизмерений типрамкиэлементауправления типсводнойдиаграммы " + "типсвязидиаграммыганта типсоединениязначенийпосериямдиаграммы типсоединенияточекдиаграммы " + "типсоединительнойлинии типстороныэлементаграфическойсхемы типформыотчета типшкалырадарнойдиаграммы " + "факторлиниитрендадиаграммы фигуракнопки фигурыграфическойсхемы фиксациявтаблице форматдняшкалывремени " + "форматкартинки ширинаподчиненныхэлементовформы ",
      K = "виддвижениябухгалтерии виддвижениянакопления видпериодарегистрарасчета видсчета видточкимаршрутабизнеспроцесса " + "использованиеагрегатарегистранакопления использованиегруппиэлементов использованиережимапроведения " + "использованиесреза периодичностьагрегатарегистранакопления режимавтовремя режимзаписидокумента режимпроведениядокумента ",
      Q = "авторегистрацияизменений допустимыйномерсообщения отправкаэлементаданных получениеэлементаданных ",
      E = "использованиерасшифровкитабличногодокумента ориентациястраницы положениеитоговколоноксводнойтаблицы " + "положениеитоговстроксводнойтаблицы положениетекстаотносительнокартинки расположениезаголовкагруппировкитабличногодокумента " + "способчтениязначенийтабличногодокумента типдвустороннейпечати типзаполненияобластитабличногодокумента " + "типкурсоровтабличногодокумента типлиниирисункатабличногодокумента типлинииячейкитабличногодокумента " + "типнаправленияпереходатабличногодокумента типотображениявыделениятабличногодокумента типотображениялинийсводнойтаблицы " + "типразмещениятекстатабличногодокумента типрисункатабличногодокумента типсмещениятабличногодокумента " + "типузоратабличногодокумента типфайлатабличногодокумента точностьпечати чередованиерасположениястраниц ",
      S = "отображениевремениэлементовпланировщика ",
      P = "типфайлаформатированногодокумента ",
      $ = "обходрезультатазапроса типзаписизапроса ",
      h = "видзаполнениярасшифровкипостроителяотчета типдобавленияпредставлений типизмеренияпостроителяотчета типразмещенияитогов ",
      O = "доступкфайлу режимдиалогавыборафайла режимоткрытияфайла ",
      T = "типизмеренияпостроителязапроса ",
      V1 = "видданныханализа методкластеризации типединицыинтервалавременианализаданных типзаполнениятаблицырезультатаанализаданных " + "типиспользованиячисловыхзначенийанализаданных типисточникаданныхпоискаассоциаций типколонкианализаданныхдереворешений " + "типколонкианализаданныхкластеризация типколонкианализаданныхобщаястатистика типколонкианализаданныхпоискассоциаций " + "типколонкианализаданныхпоискпоследовательностей типколонкимоделипрогноза типмерырасстоянияанализаданных " + "типотсеченияправилассоциации типполяанализаданных типстандартизациианализаданных типупорядочиванияправилассоциациианализаданных " + "типупорядочиванияшаблоновпоследовательностейанализаданных типупрощениядереварешений ",
      c = "wsнаправлениепараметра вариантxpathxs вариантзаписидатыjson вариантпростоготипаxs видгруппымоделиxs видфасетаxdto " + "действиепостроителяdom завершенностьпростоготипаxs завершенностьсоставноготипаxs завершенностьсхемыxs запрещенныеподстановкиxs " + "исключениягруппподстановкиxs категорияиспользованияатрибутаxs категорияограниченияидентичностиxs категорияограниченияпространствименxs " + "методнаследованияxs модельсодержимогоxs назначениетипаxml недопустимыеподстановкиxs обработкапробельныхсимволовxs обработкасодержимогоxs " + "ограничениезначенияxs параметрыотбораузловdom переносстрокjson позициявдокументеdom пробельныесимволыxml типатрибутаxml типзначенияjson " + "типканоническогоxml типкомпонентыxs типпроверкиxml типрезультатаdomxpath типузлаdom типузлаxml формаxml формапредставленияxs " + "форматдатыjson экранированиесимволовjson ",
      c1 = "видсравнениякомпоновкиданных действиеобработкирасшифровкикомпоновкиданных направлениесортировкикомпоновкиданных " + "расположениевложенныхэлементоврезультатакомпоновкиданных расположениеитоговкомпоновкиданных расположениегруппировкикомпоновкиданных " + "расположениеполейгруппировкикомпоновкиданных расположениеполякомпоновкиданных расположениереквизитовкомпоновкиданных " + "расположениересурсовкомпоновкиданных типбухгалтерскогоостаткакомпоновкиданных типвыводатекстакомпоновкиданных " + "типгруппировкикомпоновкиданных типгруппыэлементовотборакомпоновкиданных типдополненияпериодакомпоновкиданных " + "типзаголовкаполейкомпоновкиданных типмакетагруппировкикомпоновкиданных типмакетаобластикомпоновкиданных типостаткакомпоновкиданных " + "типпериодакомпоновкиданных типразмещениятекстакомпоновкиданных типсвязинаборовданныхкомпоновкиданных типэлементарезультатакомпоновкиданных " + "расположениелегендыдиаграммыкомпоновкиданных типпримененияотборакомпоновкиданных режимотображенияэлементанастройкикомпоновкиданных " + "режимотображениянастроеккомпоновкиданных состояниеэлементанастройкикомпоновкиданных способвосстановлениянастроеккомпоновкиданных " + "режимкомпоновкирезультата использованиепараметракомпоновкиданных автопозицияресурсовкомпоновкиданных " + "вариантиспользованиягруппировкикомпоновкиданных расположениересурсоввдиаграммекомпоновкиданных фиксациякомпоновкиданных " + "использованиеусловногооформлениякомпоновкиданных ",
      o1 = "важностьинтернетпочтовогосообщения обработкатекстаинтернетпочтовогосообщения способкодированияинтернетпочтовоговложения " + "способкодированиянеasciiсимволовинтернетпочтовогосообщения типтекстапочтовогосообщения протоколинтернетпочты " + "статусразборапочтовогосообщения ",
      a1 = "режимтранзакциизаписижурналарегистрации статустранзакциизаписижурналарегистрации уровеньжурналарегистрации ",
      f1 = "расположениехранилищасертификатовкриптографии режимвключениясертификатовкриптографии режимпроверкисертификатакриптографии " + "типхранилищасертификатовкриптографии ",
      r = "кодировкаименфайловвzipфайле методсжатияzip методшифрованияzip режимвосстановленияпутейфайловzip режимобработкиподкаталоговzip " + "режимсохраненияпутейzip уровеньсжатияzip ",
      A1 = "звуковоеоповещение направлениепереходакстроке позициявпотоке порядокбайтов режимблокировкиданных режимуправленияблокировкойданных " + "сервисвстроенныхпокупок состояниефоновогозадания типподписчикадоставляемыхуведомлений уровеньиспользованиязащищенногосоединенияftp ",
      m1 = "направлениепорядкасхемызапроса типдополненияпериодамисхемызапроса типконтрольнойточкисхемызапроса типобъединениясхемызапроса " + "типпараметрадоступнойтаблицысхемызапроса типсоединениясхемызапроса ",
      T1 = "httpметод автоиспользованиеобщегореквизита автопрефиксномеразадачи вариантвстроенногоязыка видиерархии видрегистранакопления " + "видтаблицывнешнегоисточникаданных записьдвиженийприпроведении заполнениепоследовательностей индексирование " + "использованиебазыпланавидоврасчета использованиебыстроговыбора использованиеобщегореквизита использованиеподчинения " + "использованиеполнотекстовогопоиска использованиеразделяемыхданныхобщегореквизита использованиереквизита " + "назначениеиспользованияприложения назначениерасширенияконфигурации направлениепередачи обновлениепредопределенныхданных " + "оперативноепроведение основноепредставлениевидарасчета основноепредставлениевидахарактеристики основноепредставлениезадачи " + "основноепредставлениепланаобмена основноепредставлениесправочника основноепредставлениесчета перемещениеграницыприпроведении " + "периодичностьномерабизнеспроцесса периодичностьномерадокумента периодичностьрегистрарасчета периодичностьрегистрасведений " + "повторноеиспользованиевозвращаемыхзначений полнотекстовыйпоискпривводепостроке принадлежностьобъекта проведение " + "разделениеаутентификацииобщегореквизита разделениеданныхобщегореквизита разделениерасширенийконфигурацииобщегореквизита " + "режимавтонумерацииобъектов режимзаписирегистра режимиспользованиямодальности " + "режимиспользованиясинхронныхвызововрасширенийплатформыивнешнихкомпонент режимповторногоиспользованиясеансов " + "режимполученияданныхвыборапривводепостроке режимсовместимости режимсовместимостиинтерфейса " + "режимуправленияблокировкойданныхпоумолчанию сериикодовпланавидовхарактеристик сериикодовпланасчетов " + "сериикодовсправочника созданиепривводе способвыбора способпоискастрокипривводепостроке способредактирования " + "типданныхтаблицывнешнегоисточникаданных типкодапланавидоврасчета типкодасправочника типмакета типномерабизнеспроцесса " + "типномерадокумента типномеразадачи типформы удалениедвижений ",
      e1 = "важностьпроблемыприменениярасширенияконфигурации вариантинтерфейсаклиентскогоприложения вариантмасштабаформклиентскогоприложения " + "вариантосновногошрифтаклиентскогоприложения вариантстандартногопериода вариантстандартнойдатыначала видграницы видкартинки " + "видотображенияполнотекстовогопоиска видрамки видсравнения видцвета видчисловогозначения видшрифта допустимаядлина допустимыйзнак " + "использованиеbyteordermark использованиеметаданныхполнотекстовогопоиска источникрасширенийконфигурации клавиша кодвозвратадиалога " + "кодировкаxbase кодировкатекста направлениепоиска направлениесортировки обновлениепредопределенныхданных обновлениеприизмененииданных " + "отображениепанелиразделов проверказаполнения режимдиалогавопрос режимзапускаклиентскогоприложения режимокругления режимоткрытияформприложения " + "режимполнотекстовогопоиска скоростьклиентскогосоединения состояниевнешнегоисточникаданных состояниеобновленияконфигурациибазыданных " + "способвыборасертификатаwindows способкодированиястроки статуссообщения типвнешнейкомпоненты типплатформы типповеденияклавишиenter " + "типэлементаинформацииовыполненииобновленияконфигурациибазыданных уровеньизоляциитранзакций хешфункция частидаты",
      F0 = g + J + K + Q + E + S + P + $ + h + O + T + V1 + c + c1 + o1 + a1 + f1 + r + A1 + m1 + T1 + e1,
      P0 = "comобъект ftpсоединение httpзапрос httpсервисответ httpсоединение wsопределения wsпрокси xbase анализданных аннотацияxs " + "блокировкаданных буфердвоичныхданных включениеxs выражениекомпоновкиданных генераторслучайныхчисел географическаясхема " + "географическиекоординаты графическаясхема группамоделиxs данныерасшифровкикомпоновкиданных двоичныеданные дендрограмма " + "диаграмма диаграммаганта диалогвыборафайла диалогвыборацвета диалогвыборашрифта диалограсписаниярегламентногозадания " + "диалогредактированиястандартногопериода диапазон документdom документhtml документацияxs доставляемоеуведомление " + "записьdom записьfastinfoset записьhtml записьjson записьxml записьzipфайла записьданных записьтекста записьузловdom " + "запрос защищенноесоединениеopenssl значенияполейрасшифровкикомпоновкиданных извлечениетекста импортxs интернетпочта " + "интернетпочтовоесообщение интернетпочтовыйпрофиль интернетпрокси интернетсоединение информациядляприложенияxs " + "использованиеатрибутаxs использованиесобытияжурналарегистрации источникдоступныхнастроеккомпоновкиданных " + "итераторузловdom картинка квалификаторыдаты квалификаторыдвоичныхданных квалификаторыстроки квалификаторычисла " + "компоновщикмакетакомпоновкиданных компоновщикнастроеккомпоновкиданных конструктормакетаоформлениякомпоновкиданных " + "конструкторнастроеккомпоновкиданных конструкторформатнойстроки линия макеткомпоновкиданных макетобластикомпоновкиданных " + "макетоформлениякомпоновкиданных маскаxs менеджеркриптографии наборсхемxml настройкикомпоновкиданных настройкисериализацииjson " + "обработкакартинок обработкарасшифровкикомпоновкиданных обходдереваdom объявлениеатрибутаxs объявлениенотацииxs " + "объявлениеэлементаxs описаниеиспользованиясобытиядоступжурналарегистрации " + "описаниеиспользованиясобытияотказвдоступежурналарегистрации описаниеобработкирасшифровкикомпоновкиданных " + "описаниепередаваемогофайла описаниетипов определениегруппыатрибутовxs определениегруппымоделиxs " + "определениеограниченияидентичностиxs определениепростоготипаxs определениесоставноготипаxs определениетипадокументаdom " + "определенияxpathxs отборкомпоновкиданных пакетотображаемыхдокументов параметрвыбора параметркомпоновкиданных " + "параметрызаписиjson параметрызаписиxml параметрычтенияxml переопределениеxs планировщик полеанализаданных " + "полекомпоновкиданных построительdom построительзапроса построительотчета построительотчетаанализаданных " + "построительсхемxml поток потоквпамяти почта почтовоесообщение преобразованиеxsl преобразованиекканоническомуxml " + "процессорвыводарезультатакомпоновкиданныхвколлекциюзначений процессорвыводарезультатакомпоновкиданныхвтабличныйдокумент " + "процессоркомпоновкиданных разыменовательпространствименdom рамка расписаниерегламентногозадания расширенноеимяxml " + "результатчтенияданных своднаядиаграмма связьпараметравыбора связьпотипу связьпотипукомпоновкиданных сериализаторxdto " + "сертификатклиентаwindows сертификатклиентафайл сертификаткриптографии сертификатыудостоверяющихцентровwindows " + "сертификатыудостоверяющихцентровфайл сжатиеданных системнаяинформация сообщениепользователю сочетаниеклавиш " + "сравнениезначений стандартнаядатаначала стандартныйпериод схемаxml схемакомпоновкиданных табличныйдокумент " + "текстовыйдокумент тестируемоеприложение типданныхxml уникальныйидентификатор фабрикаxdto файл файловыйпоток " + "фасетдлиныxs фасетколичестваразрядовдробнойчастиxs фасетмаксимальноговключающегозначенияxs " + "фасетмаксимальногоисключающегозначенияxs фасетмаксимальнойдлиныxs фасетминимальноговключающегозначенияxs " + "фасетминимальногоисключающегозначенияxs фасетминимальнойдлиныxs фасетобразцаxs фасетобщегоколичестваразрядовxs " + "фасетперечисленияxs фасетпробельныхсимволовxs фильтрузловdom форматированнаястрока форматированныйдокумент " + "фрагментxs хешированиеданных хранилищезначения цвет чтениеfastinfoset чтениеhtml чтениеjson чтениеxml чтениеzipфайла " + "чтениеданных чтениетекста чтениеузловdom шрифт элементрезультатакомпоновкиданных ",
      B0 = "comsafearray деревозначений массив соответствие списокзначений структура таблицазначений фиксированнаяструктура " + "фиксированноесоответствие фиксированныймассив ",
      a0 = P0 + B0,
      e = "null истина ложь неопределено",
      G0 = I.inherit(I.NUMBER_MODE),
      H1 = {
        className: "string",
        begin: '"|\\|',
        end: '"|$',
        contains: [{
          begin: '""'
        }]
      },
      j1 = {
        begin: "'",
        end: "'",
        excludeBegin: !0,
        excludeEnd: !0,
        contains: [{
          className: "number",
          begin: "\\d{4}([\\.\\\\/:-]?\\d{2}){0,5}"
        }]
      },
      i1 = I.inherit(I.C_LINE_COMMENT_MODE),
      E0 = {
        className: "meta",
        begin: "#|&",
        end: "$",
        keywords: {
          $pattern: d,
          "meta-keyword": C + B
        },
        contains: [i1]
      },
      k = {
        className: "symbol",
        begin: "~",
        end: ";|:",
        excludeEnd: !0
      },
      a = {
        className: "function",
        variants: [{
          begin: "процедура|функция",
          end: "\\)",
          keywords: "процедура функция"
        }, {
          begin: "конецпроцедуры|конецфункции",
          keywords: "конецпроцедуры конецфункции"
        }],
        contains: [{
          begin: "\\(",
          end: "\\)",
          endsParent: !0,
          contains: [{
            className: "params",
            begin: d,
            end: ",",
            excludeEnd: !0,
            endsWithParent: !0,
            keywords: {
              $pattern: d,
              keyword: "знач",
              literal: e
            },
            contains: [G0, H1, j1]
          }, i1]
        }, I.inherit(I.TITLE_MODE, {
          begin: d
        })]
      };
    return {
      name: "1C:Enterprise",
      case_insensitive: !0,
      keywords: {
        $pattern: d,
        keyword: C,
        built_in: F,
        class: F0,
        type: a0,
        literal: e
      },
      contains: [E0, a, i1, k, G0, H1, j1]
    }
  }
  Vw2.exports = ge5
})
// @from(Start 3979091, End 3980305)
_w2 = Y((RD3, Yw2) => {
  function Je5(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function Ke5(...I) {
    return I.map((G) => Je5(G)).join("")
  }

  function Ne5(I) {
    let d = {
        ruleDeclaration: /^[a-zA-Z][a-zA-Z0-9-]*/,
        unexpectedChars: /[!@#$^&',?+~`|:]/
      },
      G = ["ALPHA", "BIT", "CHAR", "CR", "CRLF", "CTL", "DIGIT", "DQUOTE", "HEXDIG", "HTAB", "LF", "LWSP", "OCTET", "SP", "VCHAR", "WSP"],
      Z = I.COMMENT(/;/, /$/),
      C = {
        className: "symbol",
        begin: /%b[0-1]+(-[0-1]+|(\.[0-1]+)+){0,1}/
      },
      W = {
        className: "symbol",
        begin: /%d[0-9]+(-[0-9]+|(\.[0-9]+)+){0,1}/
      },
      w = {
        className: "symbol",
        begin: /%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+){0,1}/
      },
      B = {
        className: "symbol",
        begin: /%[si]/
      },
      A = {
        className: "attribute",
        begin: Ke5(d.ruleDeclaration, /(?=\s*=)/)
      };
    return {
      name: "Augmented Backus-Naur Form",
      illegal: d.unexpectedChars,
      keywords: G,
      contains: [A, Z, C, W, w, B, I.QUOTE_STRING_MODE, I.NUMBER_MODE]
    }
  }
  Yw2.exports = Ne5
})
// @from(Start 3980311, End 3981778)
Fw2 = Y((UD3, Hw2) => {
  function Dw2(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function ze5(...I) {
    return I.map((G) => Dw2(G)).join("")
  }

  function Qe5(...I) {
    return "(" + I.map((G) => Dw2(G)).join("|") + ")"
  }

  function fe5(I) {
    let d = ["GET", "POST", "HEAD", "PUT", "DELETE", "CONNECT", "OPTIONS", "PATCH", "TRACE"];
    return {
      name: "Apache Access Log",
      contains: [{
        className: "number",
        begin: /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?\b/,
        relevance: 5
      }, {
        className: "number",
        begin: /\b\d+\b/,
        relevance: 0
      }, {
        className: "string",
        begin: ze5(/"/, Qe5(...d)),
        end: /"/,
        keywords: d,
        illegal: /\n/,
        relevance: 5,
        contains: [{
          begin: /HTTP\/[12]\.\d'/,
          relevance: 5
        }]
      }, {
        className: "string",
        begin: /\[\d[^\]\n]{8,}\]/,
        illegal: /\n/,
        relevance: 1
      }, {
        className: "string",
        begin: /\[/,
        end: /\]/,
        illegal: /\n/,
        relevance: 0
      }, {
        className: "string",
        begin: /"Mozilla\/\d\.\d \(/,
        end: /"/,
        illegal: /\n/,
        relevance: 3
      }, {
        className: "string",
        begin: /"/,
        end: /"/,
        illegal: /\n/,
        relevance: 0
      }]
    }
  }
  Hw2.exports = fe5
})
// @from(Start 3981784, End 3983808)
Jw2 = Y((vD3, gw2) => {
  function qe5(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function Re5(...I) {
    return I.map((G) => qe5(G)).join("")
  }

  function Ue5(I) {
    let d = /[a-zA-Z_$][a-zA-Z0-9_$]*/,
      G = /([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)/,
      Z = {
        className: "rest_arg",
        begin: /[.]{3}/,
        end: d,
        relevance: 10
      };
    return {
      name: "ActionScript",
      aliases: ["as"],
      keywords: {
        keyword: "as break case catch class const continue default delete do dynamic each else extends final finally for function get if implements import in include instanceof interface internal is namespace native new override package private protected public return set static super switch this throw try typeof use var void while with",
        literal: "true false null undefined"
      },
      contains: [I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.C_NUMBER_MODE, {
        className: "class",
        beginKeywords: "package",
        end: /\{/,
        contains: [I.TITLE_MODE]
      }, {
        className: "class",
        beginKeywords: "class interface",
        end: /\{/,
        excludeEnd: !0,
        contains: [{
          beginKeywords: "extends implements"
        }, I.TITLE_MODE]
      }, {
        className: "meta",
        beginKeywords: "import include",
        end: /;/,
        keywords: {
          "meta-keyword": "import include"
        }
      }, {
        className: "function",
        beginKeywords: "function",
        end: /[{;]/,
        excludeEnd: !0,
        illegal: /\S/,
        contains: [I.TITLE_MODE, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          contains: [I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, Z]
        }, {
          begin: Re5(/:\s*/, G)
        }]
      }, I.METHOD_GUARD],
      illegal: /#/
    }
  }
  gw2.exports = Ue5
})
// @from(Start 3983814, End 3986830)
Nw2 = Y((ED3, Kw2) => {
  function ve5(I) {
    let G = "[eE][-+]?\\d(_|\\d)*",
      Z = "\\d(_|\\d)*(\\.\\d(_|\\d)*)?(" + G + ")?",
      C = "\\w+",
      w = "\\b(" + ("\\d(_|\\d)*#\\w+(\\.\\w+)?#(" + G + ")?") + "|" + Z + ")",
      B = "[A-Za-z](_?[A-Za-z0-9.])*",
      A = `[]\\{\\}%#'"`,
      V = I.COMMENT("--", "$"),
      X = {
        begin: "\\s+:\\s+",
        end: "\\s*(:=|;|\\)|=>|$)",
        illegal: `[]\\{\\}%#'"`,
        contains: [{
          beginKeywords: "loop for declare others",
          endsParent: !0
        }, {
          className: "keyword",
          beginKeywords: "not null constant access function procedure in out aliased exception"
        }, {
          className: "type",
          begin: "[A-Za-z](_?[A-Za-z0-9.])*",
          endsParent: !0,
          relevance: 0
        }]
      };
    return {
      name: "Ada",
      case_insensitive: !0,
      keywords: {
        keyword: "abort else new return abs elsif not reverse abstract end accept entry select access exception of separate aliased exit or some all others subtype and for out synchronized array function overriding at tagged generic package task begin goto pragma terminate body private then if procedure type case in protected constant interface is raise use declare range delay limited record when delta loop rem while digits renames with do mod requeue xor",
        literal: "True False"
      },
      contains: [V, {
        className: "string",
        begin: /"/,
        end: /"/,
        contains: [{
          begin: /""/,
          relevance: 0
        }]
      }, {
        className: "string",
        begin: /'.'/
      }, {
        className: "number",
        begin: w,
        relevance: 0
      }, {
        className: "symbol",
        begin: "'[A-Za-z](_?[A-Za-z0-9.])*"
      }, {
        className: "title",
        begin: "(\\bwith\\s+)?(\\bprivate\\s+)?\\bpackage\\s+(\\bbody\\s+)?",
        end: "(is|$)",
        keywords: "package body",
        excludeBegin: !0,
        excludeEnd: !0,
        illegal: `[]\\{\\}%#'"`
      }, {
        begin: "(\\b(with|overriding)\\s+)?\\b(function|procedure)\\s+",
        end: "(\\bis|\\bwith|\\brenames|\\)\\s*;)",
        keywords: "overriding function procedure with is renames return",
        returnBegin: !0,
        contains: [V, {
          className: "title",
          begin: "(\\bwith\\s+)?\\b(function|procedure)\\s+",
          end: "(\\(|\\s+|$)",
          excludeBegin: !0,
          excludeEnd: !0,
          illegal: `[]\\{\\}%#'"`
        }, X, {
          className: "type",
          begin: "\\breturn\\s+",
          end: "(\\s+|;|$)",
          keywords: "return",
          excludeBegin: !0,
          excludeEnd: !0,
          endsParent: !0,
          illegal: `[]\\{\\}%#'"`
        }]
      }, {
        className: "type",
        begin: "\\b(sub)?type\\s+",
        end: "\\s+",
        keywords: "type",
        excludeBegin: !0,
        illegal: `[]\\{\\}%#'"`
      }, X]
    }
  }
  Kw2.exports = ve5
})
// @from(Start 3986836, End 3989156)
Qw2 = Y((MD3, zw2) => {
  function Ee5(I) {
    var d = {
        className: "built_in",
        begin: "\\b(void|bool|int|int8|int16|int32|int64|uint|uint8|uint16|uint32|uint64|string|ref|array|double|float|auto|dictionary)"
      },
      G = {
        className: "symbol",
        begin: "[a-zA-Z0-9_]+@"
      },
      Z = {
        className: "keyword",
        begin: "<",
        end: ">",
        contains: [d, G]
      };
    return d.contains = [Z], G.contains = [Z], {
      name: "AngelScript",
      aliases: ["asc"],
      keywords: "for in|0 break continue while do|0 return if else case switch namespace is cast or and xor not get|0 in inout|10 out override set|0 private public const default|0 final shared external mixin|10 enum typedef funcdef this super import from interface abstract|0 try catch protected explicit property",
      illegal: "(^using\\s+[A-Za-z0-9_\\.]+;$|\\bfunction\\s*[^\\(])",
      contains: [{
        className: "string",
        begin: "'",
        end: "'",
        illegal: "\\n",
        contains: [I.BACKSLASH_ESCAPE],
        relevance: 0
      }, {
        className: "string",
        begin: '"""',
        end: '"""'
      }, {
        className: "string",
        begin: '"',
        end: '"',
        illegal: "\\n",
        contains: [I.BACKSLASH_ESCAPE],
        relevance: 0
      }, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, {
        className: "string",
        begin: "^\\s*\\[",
        end: "\\]"
      }, {
        beginKeywords: "interface namespace",
        end: /\{/,
        illegal: "[;.\\-]",
        contains: [{
          className: "symbol",
          begin: "[a-zA-Z0-9_]+"
        }]
      }, {
        beginKeywords: "class",
        end: /\{/,
        illegal: "[;.\\-]",
        contains: [{
          className: "symbol",
          begin: "[a-zA-Z0-9_]+",
          contains: [{
            begin: "[:,]\\s*",
            contains: [{
              className: "symbol",
              begin: "[a-zA-Z0-9_]+"
            }]
          }]
        }]
      }, d, G, {
        className: "literal",
        begin: "\\b(null|true|false)"
      }, {
        className: "number",
        relevance: 0,
        begin: "(-?)(\\b0[xXbBoOdD][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?f?|\\.\\d+f?)([eE][-+]?\\d+f?)?)"
      }]
    }
  }
  zw2.exports = Ee5
})
// @from(Start 3989162, End 3990638)
qw2 = Y((SD3, fw2) => {
  function Me5(I) {
    let d = {
        className: "number",
        begin: /[$%]\d+/
      },
      G = {
        className: "number",
        begin: /\d+/
      },
      Z = {
        className: "number",
        begin: /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?/
      },
      C = {
        className: "number",
        begin: /:\d{1,5}/
      };
    return {
      name: "Apache config",
      aliases: ["apacheconf"],
      case_insensitive: !0,
      contains: [I.HASH_COMMENT_MODE, {
        className: "section",
        begin: /<\/?/,
        end: />/,
        contains: [Z, C, I.inherit(I.QUOTE_STRING_MODE, {
          relevance: 0
        })]
      }, {
        className: "attribute",
        begin: /\w+/,
        relevance: 0,
        keywords: {
          nomarkup: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
        },
        starts: {
          end: /$/,
          relevance: 0,
          keywords: {
            literal: "on off all deny allow"
          },
          contains: [{
            className: "meta",
            begin: /\s\[/,
            end: /\]$/
          }, {
            className: "variable",
            begin: /[\$%]\{/,
            end: /\}/,
            contains: ["self", d]
          }, Z, G, I.QUOTE_STRING_MODE]
        }
      }],
      illegal: /\S/
    }
  }
  fw2.exports = Me5
})
// @from(Start 3990644, End 3993827)
Mw2 = Y((LD3, Ew2) => {
  function vw2(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function Rw2(...I) {
    return I.map((G) => vw2(G)).join("")
  }

  function Uw2(...I) {
    return "(" + I.map((G) => vw2(G)).join("|") + ")"
  }

  function Se5(I) {
    let d = I.inherit(I.QUOTE_STRING_MODE, {
        illegal: null
      }),
      G = {
        className: "params",
        begin: /\(/,
        end: /\)/,
        contains: ["self", I.C_NUMBER_MODE, d]
      },
      Z = I.COMMENT(/--/, /$/),
      C = I.COMMENT(/\(\*/, /\*\)/, {
        contains: ["self", Z]
      }),
      W = [Z, C, I.HASH_COMMENT_MODE],
      w = [/apart from/, /aside from/, /instead of/, /out of/, /greater than/, /isn't|(doesn't|does not) (equal|come before|come after|contain)/, /(greater|less) than( or equal)?/, /(starts?|ends|begins?) with/, /contained by/, /comes (before|after)/, /a (ref|reference)/, /POSIX (file|path)/, /(date|time) string/, /quoted form/],
      B = [/clipboard info/, /the clipboard/, /info for/, /list (disks|folder)/, /mount volume/, /path to/, /(close|open for) access/, /(get|set) eof/, /current date/, /do shell script/, /get volume settings/, /random number/, /set volume/, /system attribute/, /system info/, /time to GMT/, /(load|run|store) script/, /scripting components/, /ASCII (character|number)/, /localized string/, /choose (application|color|file|file name|folder|from list|remote application|URL)/, /display (alert|dialog)/];
    return {
      name: "AppleScript",
      aliases: ["osascript"],
      keywords: {
        keyword: "about above after against and around as at back before beginning behind below beneath beside between but by considering contain contains continue copy div does eighth else end equal equals error every exit fifth first for fourth from front get given global if ignoring in into is it its last local me middle mod my ninth not of on onto or over prop property put ref reference repeat returning script second set seventh since sixth some tell tenth that the|0 then third through thru timeout times to transaction try until where while whose with without",
        literal: "AppleScript false linefeed return pi quote result space tab true",
        built_in: "alias application boolean class constant date file integer list number real record string text activate beep count delay launch log offset read round run say summarize write character characters contents day frontmost id item length month name paragraph paragraphs rest reverse running time version weekday word words year"
      },
      contains: [d, I.C_NUMBER_MODE, {
        className: "built_in",
        begin: Rw2(/\b/, Uw2(...B), /\b/)
      }, {
        className: "built_in",
        begin: /^\s*return\b/
      }, {
        className: "literal",
        begin: /\b(text item delimiters|current application|missing value)\b/
      }, {
        className: "keyword",
        begin: Rw2(/\b/, Uw2(...w), /\b/)
      }, {
        beginKeywords: "on",
        illegal: /[${=;\n]/,
        contains: [I.UNDERSCORE_TITLE_MODE, G]
      }, ...W],
      illegal: /\/\/|->|=>|\[\[/
    }
  }
  Ew2.exports = Se5
})
// @from(Start 3993833, End 3997778)
Lw2 = Y((yD3, Sw2) => {
  function Le5(I) {
    let G = {
        keyword: "if for while var new function do return void else break",
        literal: "BackSlash DoubleQuote false ForwardSlash Infinity NaN NewLine null PI SingleQuote Tab TextFormatting true undefined",
        built_in: "Abs Acos Angle Attachments Area AreaGeodetic Asin Atan Atan2 Average Bearing Boolean Buffer BufferGeodetic Ceil Centroid Clip Console Constrain Contains Cos Count Crosses Cut Date DateAdd DateDiff Day Decode DefaultValue Dictionary Difference Disjoint Distance DistanceGeodetic Distinct DomainCode DomainName Equals Exp Extent Feature FeatureSet FeatureSetByAssociation FeatureSetById FeatureSetByPortalItem FeatureSetByRelationshipName FeatureSetByTitle FeatureSetByUrl Filter First Floor Geometry GroupBy Guid HasKey Hour IIf IndexOf Intersection Intersects IsEmpty IsNan IsSelfIntersecting Length LengthGeodetic Log Max Mean Millisecond Min Minute Month MultiPartToSinglePart Multipoint NextSequenceValue Now Number OrderBy Overlaps Point Polygon Polyline Portal Pow Random Relate Reverse RingIsClockWise Round Second SetGeometry Sin Sort Sqrt Stdev Sum SymmetricDifference Tan Text Timestamp Today ToLocal Top Touches ToUTC TrackCurrentTime TrackGeometryWindow TrackIndex TrackStartTime TrackWindow TypeOf Union UrlEncode Variance Weekday When Within Year "
      },
      Z = {
        className: "symbol",
        begin: "\\$[datastore|feature|layer|map|measure|sourcefeature|sourcelayer|targetfeature|targetlayer|value|view]+"
      },
      C = {
        className: "number",
        variants: [{
          begin: "\\b(0[bB][01]+)"
        }, {
          begin: "\\b(0[oO][0-7]+)"
        }, {
          begin: I.C_NUMBER_RE
        }],
        relevance: 0
      },
      W = {
        className: "subst",
        begin: "\\$\\{",
        end: "\\}",
        keywords: G,
        contains: []
      },
      w = {
        className: "string",
        begin: "`",
        end: "`",
        contains: [I.BACKSLASH_ESCAPE, W]
      };
    W.contains = [I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, w, C, I.REGEXP_MODE];
    let B = W.contains.concat([I.C_BLOCK_COMMENT_MODE, I.C_LINE_COMMENT_MODE]);
    return {
      name: "ArcGIS Arcade",
      keywords: G,
      contains: [I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, w, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, Z, C, {
        begin: /[{,]\s*/,
        relevance: 0,
        contains: [{
          begin: "[A-Za-z_][0-9A-Za-z_]*\\s*:",
          returnBegin: !0,
          relevance: 0,
          contains: [{
            className: "attr",
            begin: "[A-Za-z_][0-9A-Za-z_]*",
            relevance: 0
          }]
        }]
      }, {
        begin: "(" + I.RE_STARTERS_RE + "|\\b(return)\\b)\\s*",
        keywords: "return",
        contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.REGEXP_MODE, {
          className: "function",
          begin: "(\\(.*?\\)|[A-Za-z_][0-9A-Za-z_]*)\\s*=>",
          returnBegin: !0,
          end: "\\s*=>",
          contains: [{
            className: "params",
            variants: [{
              begin: "[A-Za-z_][0-9A-Za-z_]*"
            }, {
              begin: /\(\s*\)/
            }, {
              begin: /\(/,
              end: /\)/,
              excludeBegin: !0,
              excludeEnd: !0,
              keywords: G,
              contains: B
            }]
          }]
        }],
        relevance: 0
      }, {
        className: "function",
        beginKeywords: "function",
        end: /\{/,
        excludeEnd: !0,
        contains: [I.inherit(I.TITLE_MODE, {
          begin: "[A-Za-z_][0-9A-Za-z_]*"
        }), {
          className: "params",
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          contains: B
        }],
        illegal: /\[|%/
      }, {
        begin: /\$[(.]/
      }],
      illegal: /#(?!!)/
    }
  }
  Sw2.exports = Le5
})
// @from(Start 3997784, End 4008792)
Pw2 = Y((PD3, yw2) => {
  function ye5(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function Pe5(I) {
    return mF1("(?=", I, ")")
  }

  function va(I) {
    return mF1("(", I, ")?")
  }

  function mF1(...I) {
    return I.map((G) => ye5(G)).join("")
  }

  function $e5(I) {
    let d = I.COMMENT("//", "$", {
        contains: [{
          begin: /\\\n/
        }]
      }),
      G = "decltype\\(auto\\)",
      Z = "[a-zA-Z_]\\w*::",
      C = "<[^<>]+>",
      W = "(decltype\\(auto\\)|" + va("[a-zA-Z_]\\w*::") + "[a-zA-Z_]\\w*" + va("<[^<>]+>") + ")",
      w = {
        className: "keyword",
        begin: "\\b[a-z\\d_]*_t\\b"
      },
      B = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",
      A = {
        className: "string",
        variants: [{
          begin: '(u8?|U|L)?"',
          end: '"',
          illegal: "\\n",
          contains: [I.BACKSLASH_ESCAPE]
        }, {
          begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
          end: "'",
          illegal: "."
        }, I.END_SAME_AS_BEGIN({
          begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
          end: /\)([^()\\ ]{0,16})"/
        })]
      },
      V = {
        className: "number",
        variants: [{
          begin: "\\b(0b[01']+)"
        }, {
          begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
        }, {
          begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
        }],
        relevance: 0
      },
      X = {
        className: "meta",
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: {
          "meta-keyword": "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
        },
        contains: [{
          begin: /\\\n/,
          relevance: 0
        }, I.inherit(A, {
          className: "meta-string"
        }), {
          className: "meta-string",
          begin: /<.*?>/
        }, d, I.C_BLOCK_COMMENT_MODE]
      },
      _ = {
        className: "title",
        begin: va("[a-zA-Z_]\\w*::") + I.IDENT_RE,
        relevance: 0
      },
      F = va("[a-zA-Z_]\\w*::") + I.IDENT_RE + "\\s*\\(",
      J = {
        keyword: "int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",
        built_in: "_Bool _Complex _Imaginary",
        _relevance_hints: ["asin", "atan2", "atan", "calloc", "ceil", "cosh", "cos", "exit", "exp", "fabs", "floor", "fmod", "fprintf", "fputs", "free", "frexp", "auto_ptr", "deque", "list", "queue", "stack", "vector", "map", "set", "pair", "bitset", "multiset", "multimap", "unordered_set", "fscanf", "future", "isalnum", "isalpha", "iscntrl", "isdigit", "isgraph", "islower", "isprint", "ispunct", "isspace", "isupper", "isxdigit", "tolower", "toupper", "labs", "ldexp", "log10", "log", "malloc", "realloc", "memchr", "memcmp", "memcpy", "memset", "modf", "pow", "printf", "putchar", "puts", "scanf", "sinh", "sin", "snprintf", "sprintf", "sqrt", "sscanf", "strcat", "strchr", "strcmp", "strcpy", "strcspn", "strlen", "strncat", "strncmp", "strncpy", "strpbrk", "strrchr", "strspn", "strstr", "tanh", "tan", "unordered_map", "unordered_multiset", "unordered_multimap", "priority_queue", "make_pair", "array", "shared_ptr", "abort", "terminate", "abs", "acos", "vfprintf", "vprintf", "vsprintf", "endl", "initializer_list", "unique_ptr", "complex", "imaginary", "std", "string", "wstring", "cin", "cout", "cerr", "clog", "stdin", "stdout", "stderr", "stringstream", "istringstream", "ostringstream"],
        literal: "true false nullptr NULL"
      },
      K = {
        className: "function.dispatch",
        relevance: 0,
        keywords: J,
        begin: mF1(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!while)/, I.IDENT_RE, Pe5(/\s*\(/))
      },
      Q = [K, X, w, d, I.C_BLOCK_COMMENT_MODE, V, A],
      E = {
        variants: [{
          begin: /=/,
          end: /;/
        }, {
          begin: /\(/,
          end: /\)/
        }, {
          beginKeywords: "new throw return else",
          end: /;/
        }],
        keywords: J,
        contains: Q.concat([{
          begin: /\(/,
          end: /\)/,
          keywords: J,
          contains: Q.concat(["self"]),
          relevance: 0
        }]),
        relevance: 0
      },
      S = {
        className: "function",
        begin: "(" + W + "[\\*&\\s]+)+" + F,
        returnBegin: !0,
        end: /[{;=]/,
        excludeEnd: !0,
        keywords: J,
        illegal: /[^\w\s\*&:<>.]/,
        contains: [{
          begin: "decltype\\(auto\\)",
          keywords: J,
          relevance: 0
        }, {
          begin: F,
          returnBegin: !0,
          contains: [_],
          relevance: 0
        }, {
          begin: /::/,
          relevance: 0
        }, {
          begin: /:/,
          endsWithParent: !0,
          contains: [A, V]
        }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: J,
          relevance: 0,
          contains: [d, I.C_BLOCK_COMMENT_MODE, A, V, w, {
            begin: /\(/,
            end: /\)/,
            keywords: J,
            relevance: 0,
            contains: ["self", d, I.C_BLOCK_COMMENT_MODE, A, V, w]
          }]
        }, w, d, I.C_BLOCK_COMMENT_MODE, X]
      };
    return {
      name: "C++",
      aliases: ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"],
      keywords: J,
      illegal: "</",
      classNameAliases: {
        "function.dispatch": "built_in"
      },
      contains: [].concat(E, S, K, Q, [X, {
        begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
        end: ">",
        keywords: J,
        contains: ["self", w]
      }, {
        begin: I.IDENT_RE + "::",
        keywords: J
      }, {
        className: "class",
        beginKeywords: "enum class struct union",
        end: /[{;:<>=]/,
        contains: [{
          beginKeywords: "final class struct"
        }, I.TITLE_MODE]
      }]),
      exports: {
        preprocessor: X,
        strings: A,
        keywords: J
      }
    }
  }

  function ue5(I) {
    let d = {
        keyword: "boolean byte word String",
        built_in: "KeyboardController MouseController SoftwareSerial EthernetServer EthernetClient LiquidCrystal RobotControl GSMVoiceCall EthernetUDP EsploraTFT HttpClient RobotMotor WiFiClient GSMScanner FileSystem Scheduler GSMServer YunClient YunServer IPAddress GSMClient GSMModem Keyboard Ethernet Console GSMBand Esplora Stepper Process WiFiUDP GSM_SMS Mailbox USBHost Firmata PImage Client Server GSMPIN FileIO Bridge Serial EEPROM Stream Mouse Audio Servo File Task GPRS WiFi Wire TFT GSM SPI SD ",
        _: "setup loop runShellCommandAsynchronously analogWriteResolution retrieveCallingNumber printFirmwareVersion analogReadResolution sendDigitalPortPair noListenOnLocalhost readJoystickButton setFirmwareVersion readJoystickSwitch scrollDisplayRight getVoiceCallStatus scrollDisplayLeft writeMicroseconds delayMicroseconds beginTransmission getSignalStrength runAsynchronously getAsynchronously listenOnLocalhost getCurrentCarrier readAccelerometer messageAvailable sendDigitalPorts lineFollowConfig countryNameWrite runShellCommand readStringUntil rewindDirectory readTemperature setClockDivider readLightSensor endTransmission analogReference detachInterrupt countryNameRead attachInterrupt encryptionType readBytesUntil robotNameWrite readMicrophone robotNameRead cityNameWrite userNameWrite readJoystickY readJoystickX mouseReleased openNextFile scanNetworks noInterrupts digitalWrite beginSpeaker mousePressed isActionDone mouseDragged displayLogos noAutoscroll addParameter remoteNumber getModifiers keyboardRead userNameRead waitContinue processInput parseCommand printVersion readNetworks writeMessage blinkVersion cityNameRead readMessage setDataMode parsePacket isListening setBitOrder beginPacket isDirectory motorsWrite drawCompass digitalRead clearScreen serialEvent rightToLeft setTextSize leftToRight requestFrom keyReleased compassRead analogWrite interrupts WiFiServer disconnect playMelody parseFloat autoscroll getPINUsed setPINUsed setTimeout sendAnalog readSlider analogRead beginWrite createChar motorsStop keyPressed tempoWrite readButton subnetMask debugPrint macAddress writeGreen randomSeed attachGPRS readString sendString remotePort releaseAll mouseMoved background getXChange getYChange answerCall getResult voiceCall endPacket constrain getSocket writeJSON getButton available connected findUntil readBytes exitValue readGreen writeBlue startLoop IPAddress isPressed sendSysex pauseMode gatewayIP setCursor getOemKey tuneWrite noDisplay loadImage switchPIN onRequest onReceive changePIN playFile noBuffer parseInt overflow checkPIN knobRead beginTFT bitClear updateIR bitWrite position writeRGB highByte writeRed setSpeed readBlue noStroke remoteIP transfer shutdown hangCall beginSMS endWrite attached maintain noCursor checkReg checkPUK shiftOut isValid shiftIn pulseIn connect println localIP pinMode getIMEI display noBlink process getBand running beginSD drawBMP lowByte setBand release bitRead prepare pointTo readRed setMode noFill remove listen stroke detach attach noTone exists buffer height bitSet circle config cursor random IRread setDNS endSMS getKey micros millis begin print write ready flush width isPIN blink clear press mkdir rmdir close point yield image BSSID click delay read text move peek beep rect line open seek fill size turn stop home find step tone sqrt RSSI SSID end bit tan cos sin pow map abs max min get run put",
        literal: "DIGITAL_MESSAGE FIRMATA_STRING ANALOG_MESSAGE REPORT_DIGITAL REPORT_ANALOG INPUT_PULLUP SET_PIN_MODE INTERNAL2V56 SYSTEM_RESET LED_BUILTIN INTERNAL1V1 SYSEX_START INTERNAL EXTERNAL DEFAULT OUTPUT INPUT HIGH LOW"
      },
      G = $e5(I),
      Z = G.keywords;
    return Z.keyword += " " + d.keyword, Z.literal += " " + d.literal, Z.built_in += " " + d.built_in, Z._ += " " + d._, G.name = "Arduino", G.aliases = ["ino"], G.supersetOf = "cpp", G
  }
  yw2.exports = ue5
})
// @from(Start 4008798, End 4012464)
uw2 = Y(($D3, $w2) => {
  function Te5(I) {
    let d = {
      variants: [I.COMMENT("^[ \\t]*(?=#)", "$", {
        relevance: 0,
        excludeBegin: !0
      }), I.COMMENT("[;@]", "$", {
        relevance: 0
      }), I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE]
    };
    return {
      name: "ARM Assembly",
      case_insensitive: !0,
      aliases: ["arm"],
      keywords: {
        $pattern: "\\.?" + I.IDENT_RE,
        meta: ".2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .arm .thumb .code16 .code32 .force_thumb .thumb_func .ltorg ALIAS ALIGN ARM AREA ASSERT ATTR CN CODE CODE16 CODE32 COMMON CP DATA DCB DCD DCDU DCDO DCFD DCFDU DCI DCQ DCQU DCW DCWU DN ELIF ELSE END ENDFUNC ENDIF ENDP ENTRY EQU EXPORT EXPORTAS EXTERN FIELD FILL FUNCTION GBLA GBLL GBLS GET GLOBAL IF IMPORT INCBIN INCLUDE INFO KEEP LCLA LCLL LCLS LTORG MACRO MAP MEND MEXIT NOFP OPT PRESERVE8 PROC QN READONLY RELOC REQUIRE REQUIRE8 RLIST FN ROUT SETA SETL SETS SN SPACE SUBT THUMB THUMBX TTL WHILE WEND ",
        built_in: "r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 pc lr sp ip sl sb fp a1 a2 a3 a4 v1 v2 v3 v4 v5 v6 v7 v8 f0 f1 f2 f3 f4 f5 f6 f7 p0 p1 p2 p3 p4 p5 p6 p7 p8 p9 p10 p11 p12 p13 p14 p15 c0 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 q0 q1 q2 q3 q4 q5 q6 q7 q8 q9 q10 q11 q12 q13 q14 q15 cpsr_c cpsr_x cpsr_s cpsr_f cpsr_cx cpsr_cxs cpsr_xs cpsr_xsf cpsr_sf cpsr_cxsf spsr_c spsr_x spsr_s spsr_f spsr_cx spsr_cxs spsr_xs spsr_xsf spsr_sf spsr_cxsf s0 s1 s2 s3 s4 s5 s6 s7 s8 s9 s10 s11 s12 s13 s14 s15 s16 s17 s18 s19 s20 s21 s22 s23 s24 s25 s26 s27 s28 s29 s30 s31 d0 d1 d2 d3 d4 d5 d6 d7 d8 d9 d10 d11 d12 d13 d14 d15 d16 d17 d18 d19 d20 d21 d22 d23 d24 d25 d26 d27 d28 d29 d30 d31 {PC} {VAR} {TRUE} {FALSE} {OPT} {CONFIG} {ENDIAN} {CODESIZE} {CPU} {FPU} {ARCHITECTURE} {PCSTOREOFFSET} {ARMASM_VERSION} {INTER} {ROPI} {RWPI} {SWST} {NOSWST} . @"
      },
      contains: [{
        className: "keyword",
        begin: "\\b(adc|(qd?|sh?|u[qh]?)?add(8|16)?|usada?8|(q|sh?|u[qh]?)?(as|sa)x|and|adrl?|sbc|rs[bc]|asr|b[lx]?|blx|bxj|cbn?z|tb[bh]|bic|bfc|bfi|[su]bfx|bkpt|cdp2?|clz|clrex|cmp|cmn|cpsi[ed]|cps|setend|dbg|dmb|dsb|eor|isb|it[te]{0,3}|lsl|lsr|ror|rrx|ldm(([id][ab])|f[ds])?|ldr((s|ex)?[bhd])?|movt?|mvn|mra|mar|mul|[us]mull|smul[bwt][bt]|smu[as]d|smmul|smmla|mla|umlaal|smlal?([wbt][bt]|d)|mls|smlsl?[ds]|smc|svc|sev|mia([bt]{2}|ph)?|mrr?c2?|mcrr2?|mrs|msr|orr|orn|pkh(tb|bt)|rbit|rev(16|sh)?|sel|[su]sat(16)?|nop|pop|push|rfe([id][ab])?|stm([id][ab])?|str(ex)?[bhd]?|(qd?)?sub|(sh?|q|u[qh]?)?sub(8|16)|[su]xt(a?h|a?b(16)?)|srs([id][ab])?|swpb?|swi|smi|tst|teq|wfe|wfi|yield)(eq|ne|cs|cc|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al|hs|lo)?[sptrx]?(?=\\s)"
      }, d, I.QUOTE_STRING_MODE, {
        className: "string",
        begin: "'",
        end: "[^\\\\]'",
        relevance: 0
      }, {
        className: "title",
        begin: "\\|",
        end: "\\|",
        illegal: "\\n",
        relevance: 0
      }, {
        className: "number",
        variants: [{
          begin: "[#$=]?0x[0-9a-f]+"
        }, {
          begin: "[#$=]?0b[01]+"
        }, {
          begin: "[#$=]\\d+"
        }, {
          begin: "\\b\\d+"
        }],
        relevance: 0
      }, {
        className: "symbol",
        variants: [{
          begin: "^[ \\t]*[a-z_\\.\\$][a-z0-9_\\.\\$]+:"
        }, {
          begin: "^[a-z_\\.\\$][a-z0-9_\\.\\$]+"
        }, {
          begin: "[=#]\\w+"
        }],
        relevance: 0
      }]
    }
  }
  $w2.exports = Te5
})
// @from(Start 4012470, End 4016091)
lw2 = Y((uD3, mw2) => {
  function Ow2(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function Tw2(I) {
    return kJ("(?=", I, ")")
  }

  function Oe5(I) {
    return kJ("(", I, ")?")
  }

  function kJ(...I) {
    return I.map((G) => Ow2(G)).join("")
  }

  function me5(...I) {
    return "(" + I.map((G) => Ow2(G)).join("|") + ")"
  }

  function le5(I) {
    let d = kJ(/[A-Z_]/, Oe5(/[A-Z0-9_.-]*:/), /[A-Z0-9_.-]*/),
      G = /[A-Za-z0-9._:-]+/,
      Z = {
        className: "symbol",
        begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
      },
      C = {
        begin: /\s/,
        contains: [{
          className: "meta-keyword",
          begin: /#?[a-z_][a-z1-9_-]+/,
          illegal: /\n/
        }]
      },
      W = I.inherit(C, {
        begin: /\(/,
        end: /\)/
      }),
      w = I.inherit(I.APOS_STRING_MODE, {
        className: "meta-string"
      }),
      B = I.inherit(I.QUOTE_STRING_MODE, {
        className: "meta-string"
      }),
      A = {
        endsWithParent: !0,
        illegal: /</,
        relevance: 0,
        contains: [{
          className: "attr",
          begin: G,
          relevance: 0
        }, {
          begin: /=\s*/,
          relevance: 0,
          contains: [{
            className: "string",
            endsParent: !0,
            variants: [{
              begin: /"/,
              end: /"/,
              contains: [Z]
            }, {
              begin: /'/,
              end: /'/,
              contains: [Z]
            }, {
              begin: /[^\s"'=<>`]+/
            }]
          }]
        }]
      };
    return {
      name: "HTML, XML",
      aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"],
      case_insensitive: !0,
      contains: [{
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [C, B, w, W, {
          begin: /\[/,
          end: /\]/,
          contains: [{
            className: "meta",
            begin: /<![a-z]/,
            end: />/,
            contains: [C, W, B, w]
          }]
        }]
      }, I.COMMENT(/<!--/, /-->/, {
        relevance: 10
      }), {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      }, Z, {
        className: "meta",
        begin: /<\?xml/,
        end: /\?>/,
        relevance: 10
      }, {
        className: "tag",
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: {
          name: "style"
        },
        contains: [A],
        starts: {
          end: /<\/style>/,
          returnEnd: !0,
          subLanguage: ["css", "xml"]
        }
      }, {
        className: "tag",
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: {
          name: "script"
        },
        contains: [A],
        starts: {
          end: /<\/script>/,
          returnEnd: !0,
          subLanguage: ["javascript", "handlebars", "xml"]
        }
      }, {
        className: "tag",
        begin: /<>|<\/>/
      }, {
        className: "tag",
        begin: kJ(/</, Tw2(kJ(d, me5(/\/>/, />/, /\s/)))),
        end: /\/?>/,
        contains: [{
          className: "name",
          begin: d,
          relevance: 0,
          starts: A
        }]
      }, {
        className: "tag",
        begin: kJ(/<\//, Tw2(kJ(d, />/))),
        contains: [{
          className: "name",
          begin: d,
          relevance: 0
        }, {
          begin: />/,
          relevance: 0,
          endsParent: !0
        }]
      }]
    }
  }
  mw2.exports = le5
})
// @from(Start 4016097, End 4020182)
jw2 = Y((TD3, hw2) => {
  function be5(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function bw2(...I) {
    return I.map((G) => be5(G)).join("")
  }

  function he5(I) {
    let d = {
        begin: "^'{3,}[ \\t]*$",
        relevance: 10
      },
      G = [{
        begin: /\\[*_`]/
      }, {
        begin: /\\\\\*{2}[^\n]*?\*{2}/
      }, {
        begin: /\\\\_{2}[^\n]*_{2}/
      }, {
        begin: /\\\\`{2}[^\n]*`{2}/
      }, {
        begin: /[:;}][*_`](?![*_`])/
      }],
      Z = [{
        className: "strong",
        begin: /\*{2}([^\n]+?)\*{2}/
      }, {
        className: "strong",
        begin: bw2(/\*\*/, /((\*(?!\*)|\\[^\n]|[^*\n\\])+\n)+/, /(\*(?!\*)|\\[^\n]|[^*\n\\])*/, /\*\*/),
        relevance: 0
      }, {
        className: "strong",
        begin: /\B\*(\S|\S[^\n]*?\S)\*(?!\w)/
      }, {
        className: "strong",
        begin: /\*[^\s]([^\n]+\n)+([^\n]+)\*/
      }],
      C = [{
        className: "emphasis",
        begin: /_{2}([^\n]+?)_{2}/
      }, {
        className: "emphasis",
        begin: bw2(/__/, /((_(?!_)|\\[^\n]|[^_\n\\])+\n)+/, /(_(?!_)|\\[^\n]|[^_\n\\])*/, /__/),
        relevance: 0
      }, {
        className: "emphasis",
        begin: /\b_(\S|\S[^\n]*?\S)_(?!\w)/
      }, {
        className: "emphasis",
        begin: /_[^\s]([^\n]+\n)+([^\n]+)_/
      }, {
        className: "emphasis",
        begin: "\\B'(?!['\\s])",
        end: "(\\n{2}|')",
        contains: [{
          begin: "\\\\'\\w",
          relevance: 0
        }],
        relevance: 0
      }],
      W = {
        className: "symbol",
        begin: "^(NOTE|TIP|IMPORTANT|WARNING|CAUTION):\\s+",
        relevance: 10
      },
      w = {
        className: "bullet",
        begin: "^(\\*+|-+|\\.+|[^\\n]+?::)\\s+"
      };
    return {
      name: "AsciiDoc",
      aliases: ["adoc"],
      contains: [I.COMMENT("^/{4,}\\n", "\\n/{4,}$", {
        relevance: 10
      }), I.COMMENT("^//", "$", {
        relevance: 0
      }), {
        className: "title",
        begin: "^\\.\\w.*$"
      }, {
        begin: "^[=\\*]{4,}\\n",
        end: "\\n^[=\\*]{4,}$",
        relevance: 10
      }, {
        className: "section",
        relevance: 10,
        variants: [{
          begin: "^(={1,6})[ \t].+?([ \t]\\1)?$"
        }, {
          begin: "^[^\\[\\]\\n]+?\\n[=\\-~\\^\\+]{2,}$"
        }]
      }, {
        className: "meta",
        begin: "^:.+?:",
        end: "\\s",
        excludeEnd: !0,
        relevance: 10
      }, {
        className: "meta",
        begin: "^\\[.+?\\]$",
        relevance: 0
      }, {
        className: "quote",
        begin: "^_{4,}\\n",
        end: "\\n_{4,}$",
        relevance: 10
      }, {
        className: "code",
        begin: "^[\\-\\.]{4,}\\n",
        end: "\\n[\\-\\.]{4,}$",
        relevance: 10
      }, {
        begin: "^\\+{4,}\\n",
        end: "\\n\\+{4,}$",
        contains: [{
          begin: "<",
          end: ">",
          subLanguage: "xml",
          relevance: 0
        }],
        relevance: 10
      }, w, W, ...G, ...Z, ...C, {
        className: "string",
        variants: [{
          begin: "``.+?''"
        }, {
          begin: "`.+?'"
        }]
      }, {
        className: "code",
        begin: /`{2}/,
        end: /(\n{2}|`{2})/
      }, {
        className: "code",
        begin: "(`.+?`|\\+.+?\\+)",
        relevance: 0
      }, {
        className: "code",
        begin: "^[ \\t]",
        end: "$",
        relevance: 0
      }, d, {
        begin: "(link:)?(http|https|ftp|file|irc|image:?):\\S+?\\[[^[]*?\\]",
        returnBegin: !0,
        contains: [{
          begin: "(link|image:?):",
          relevance: 0
        }, {
          className: "link",
          begin: "\\w",
          end: "[^\\[]+",
          relevance: 0
        }, {
          className: "string",
          begin: "\\[",
          end: "\\]",
          excludeBegin: !0,
          excludeEnd: !0,
          relevance: 0
        }],
        relevance: 10
      }]
    }
  }
  hw2.exports = he5
})
// @from(Start 4020188, End 4023799)
xw2 = Y((OD3, kw2) => {
  function je5(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function lF1(...I) {
    return I.map((G) => je5(G)).join("")
  }

  function ke5(I) {
    let d = "false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else extends implements break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws privileged aspectOf adviceexecution proceed cflowbelow cflow initialization preinitialization staticinitialization withincode target within execution getWithinTypeName handler thisJoinPoint thisJoinPointStaticPart thisEnclosingJoinPointStaticPart declare parents warning error soft precedence thisAspectInstance",
      G = "get set args call";
    return {
      name: "AspectJ",
      keywords: d,
      illegal: /<\/|#/,
      contains: [I.COMMENT(/\/\*\*/, /\*\//, {
        relevance: 0,
        contains: [{
          begin: /\w+@/,
          relevance: 0
        }, {
          className: "doctag",
          begin: /@[A-Za-z]+/
        }]
      }), I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, {
        className: "class",
        beginKeywords: "aspect",
        end: /[{;=]/,
        excludeEnd: !0,
        illegal: /[:;"\[\]]/,
        contains: [{
          beginKeywords: "extends implements pertypewithin perthis pertarget percflowbelow percflow issingleton"
        }, I.UNDERSCORE_TITLE_MODE, {
          begin: /\([^\)]*/,
          end: /[)]+/,
          keywords: d + " get set args call",
          excludeEnd: !1
        }]
      }, {
        className: "class",
        beginKeywords: "class interface",
        end: /[{;=]/,
        excludeEnd: !0,
        relevance: 0,
        keywords: "class interface",
        illegal: /[:"\[\]]/,
        contains: [{
          beginKeywords: "extends implements"
        }, I.UNDERSCORE_TITLE_MODE]
      }, {
        beginKeywords: "pointcut after before around throwing returning",
        end: /[)]/,
        excludeEnd: !1,
        illegal: /["\[\]]/,
        contains: [{
          begin: lF1(I.UNDERSCORE_IDENT_RE, /\s*\(/),
          returnBegin: !0,
          contains: [I.UNDERSCORE_TITLE_MODE]
        }]
      }, {
        begin: /[:]/,
        returnBegin: !0,
        end: /[{;]/,
        relevance: 0,
        excludeEnd: !1,
        keywords: d,
        illegal: /["\[\]]/,
        contains: [{
          begin: lF1(I.UNDERSCORE_IDENT_RE, /\s*\(/),
          keywords: d + " get set args call",
          relevance: 0
        }, I.QUOTE_STRING_MODE]
      }, {
        beginKeywords: "new throw",
        relevance: 0
      }, {
        className: "function",
        begin: /\w+ +\w+(\.\w+)?\s*\([^\)]*\)\s*((throws)[\w\s,]+)?[\{;]/,
        returnBegin: !0,
        end: /[{;=]/,
        keywords: d,
        excludeEnd: !0,
        contains: [{
          begin: lF1(I.UNDERSCORE_IDENT_RE, /\s*\(/),
          returnBegin: !0,
          relevance: 0,
          contains: [I.UNDERSCORE_TITLE_MODE]
        }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          relevance: 0,
          keywords: d,
          contains: [I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, I.C_NUMBER_MODE, I.C_BLOCK_COMMENT_MODE]
        }, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE]
      }, I.C_NUMBER_MODE, {
        className: "meta",
        begin: /@[A-Za-z]+/
      }]
    }
  }
  kw2.exports = ke5
})
// @from(Start 4023805, End 4025137)
pw2 = Y((mD3, cw2) => {
  function xe5(I) {
    let d = {
      begin: "`[\\s\\S]"
    };
    return {
      name: "AutoHotkey",
      case_insensitive: !0,
      aliases: ["ahk"],
      keywords: {
        keyword: "Break Continue Critical Exit ExitApp Gosub Goto New OnExit Pause return SetBatchLines SetTimer Suspend Thread Throw Until ahk_id ahk_class ahk_pid ahk_exe ahk_group",
        literal: "true false NOT AND OR",
        built_in: "ComSpec Clipboard ClipboardAll ErrorLevel"
      },
      contains: [d, I.inherit(I.QUOTE_STRING_MODE, {
        contains: [d]
      }), I.COMMENT(";", "$", {
        relevance: 0
      }), I.C_BLOCK_COMMENT_MODE, {
        className: "number",
        begin: I.NUMBER_RE,
        relevance: 0
      }, {
        className: "variable",
        begin: "%[a-zA-Z0-9#_$@]+%"
      }, {
        className: "built_in",
        begin: "^\\s*\\w+\\s*(,|%)"
      }, {
        className: "title",
        variants: [{
          begin: '^[^\\n";]+::(?!=)'
        }, {
          begin: '^[^\\n";]+:(?!=)',
          relevance: 0
        }]
      }, {
        className: "meta",
        begin: "^\\s*#\\w+",
        end: "$",
        relevance: 0
      }, {
        className: "built_in",
        begin: "A_[a-zA-Z0-9]+"
      }, {
        begin: ",\\s*,"
      }]
    }
  }
  cw2.exports = xe5
})
// @from(Start 4025143, End 4037956)
nw2 = Y((lD3, iw2) => {
  function ce5(I) {
    let d = "ByRef Case Const ContinueCase ContinueLoop Dim Do Else ElseIf EndFunc EndIf EndSelect EndSwitch EndWith Enum Exit ExitLoop For Func Global If In Local Next ReDim Return Select Static Step Switch Then To Until Volatile WEnd While With",
      G = ["EndRegion", "forcedef", "forceref", "ignorefunc", "include", "include-once", "NoTrayIcon", "OnAutoItStartRegister", "pragma", "Region", "RequireAdmin", "Tidy_Off", "Tidy_On", "Tidy_Parameters"],
      Z = "True False And Null Not Or Default",
      C = "Abs ACos AdlibRegister AdlibUnRegister Asc AscW ASin Assign ATan AutoItSetOption AutoItWinGetTitle AutoItWinSetTitle Beep Binary BinaryLen BinaryMid BinaryToString BitAND BitNOT BitOR BitRotate BitShift BitXOR BlockInput Break Call CDTray Ceiling Chr ChrW ClipGet ClipPut ConsoleRead ConsoleWrite ConsoleWriteError ControlClick ControlCommand ControlDisable ControlEnable ControlFocus ControlGetFocus ControlGetHandle ControlGetPos ControlGetText ControlHide ControlListView ControlMove ControlSend ControlSetText ControlShow ControlTreeView Cos Dec DirCopy DirCreate DirGetSize DirMove DirRemove DllCall DllCallAddress DllCallbackFree DllCallbackGetPtr DllCallbackRegister DllClose DllOpen DllStructCreate DllStructGetData DllStructGetPtr DllStructGetSize DllStructSetData DriveGetDrive DriveGetFileSystem DriveGetLabel DriveGetSerial DriveGetType DriveMapAdd DriveMapDel DriveMapGet DriveSetLabel DriveSpaceFree DriveSpaceTotal DriveStatus EnvGet EnvSet EnvUpdate Eval Execute Exp FileChangeDir FileClose FileCopy FileCreateNTFSLink FileCreateShortcut FileDelete FileExists FileFindFirstFile FileFindNextFile FileFlush FileGetAttrib FileGetEncoding FileGetLongName FileGetPos FileGetShortcut FileGetShortName FileGetSize FileGetTime FileGetVersion FileInstall FileMove FileOpen FileOpenDialog FileRead FileReadLine FileReadToArray FileRecycle FileRecycleEmpty FileSaveDialog FileSelectFolder FileSetAttrib FileSetEnd FileSetPos FileSetTime FileWrite FileWriteLine Floor FtpSetProxy FuncName GUICreate GUICtrlCreateAvi GUICtrlCreateButton GUICtrlCreateCheckbox GUICtrlCreateCombo GUICtrlCreateContextMenu GUICtrlCreateDate GUICtrlCreateDummy GUICtrlCreateEdit GUICtrlCreateGraphic GUICtrlCreateGroup GUICtrlCreateIcon GUICtrlCreateInput GUICtrlCreateLabel GUICtrlCreateList GUICtrlCreateListView GUICtrlCreateListViewItem GUICtrlCreateMenu GUICtrlCreateMenuItem GUICtrlCreateMonthCal GUICtrlCreateObj GUICtrlCreatePic GUICtrlCreateProgress GUICtrlCreateRadio GUICtrlCreateSlider GUICtrlCreateTab GUICtrlCreateTabItem GUICtrlCreateTreeView GUICtrlCreateTreeViewItem GUICtrlCreateUpdown GUICtrlDelete GUICtrlGetHandle GUICtrlGetState GUICtrlRead GUICtrlRecvMsg GUICtrlRegisterListViewSort GUICtrlSendMsg GUICtrlSendToDummy GUICtrlSetBkColor GUICtrlSetColor GUICtrlSetCursor GUICtrlSetData GUICtrlSetDefBkColor GUICtrlSetDefColor GUICtrlSetFont GUICtrlSetGraphic GUICtrlSetImage GUICtrlSetLimit GUICtrlSetOnEvent GUICtrlSetPos GUICtrlSetResizing GUICtrlSetState GUICtrlSetStyle GUICtrlSetTip GUIDelete GUIGetCursorInfo GUIGetMsg GUIGetStyle GUIRegisterMsg GUISetAccelerators GUISetBkColor GUISetCoord GUISetCursor GUISetFont GUISetHelp GUISetIcon GUISetOnEvent GUISetState GUISetStyle GUIStartGroup GUISwitch Hex HotKeySet HttpSetProxy HttpSetUserAgent HWnd InetClose InetGet InetGetInfo InetGetSize InetRead IniDelete IniRead IniReadSection IniReadSectionNames IniRenameSection IniWrite IniWriteSection InputBox Int IsAdmin IsArray IsBinary IsBool IsDeclared IsDllStruct IsFloat IsFunc IsHWnd IsInt IsKeyword IsNumber IsObj IsPtr IsString Log MemGetStats Mod MouseClick MouseClickDrag MouseDown MouseGetCursor MouseGetPos MouseMove MouseUp MouseWheel MsgBox Number ObjCreate ObjCreateInterface ObjEvent ObjGet ObjName OnAutoItExitRegister OnAutoItExitUnRegister Ping PixelChecksum PixelGetColor PixelSearch ProcessClose ProcessExists ProcessGetStats ProcessList ProcessSetPriority ProcessWait ProcessWaitClose ProgressOff ProgressOn ProgressSet Ptr Random RegDelete RegEnumKey RegEnumVal RegRead RegWrite Round Run RunAs RunAsWait RunWait Send SendKeepActive SetError SetExtended ShellExecute ShellExecuteWait Shutdown Sin Sleep SoundPlay SoundSetWaveVolume SplashImageOn SplashOff SplashTextOn Sqrt SRandom StatusbarGetText StderrRead StdinWrite StdioClose StdoutRead String StringAddCR StringCompare StringFormat StringFromASCIIArray StringInStr StringIsAlNum StringIsAlpha StringIsASCII StringIsDigit StringIsFloat StringIsInt StringIsLower StringIsSpace StringIsUpper StringIsXDigit StringLeft StringLen StringLower StringMid StringRegExp StringRegExpReplace StringReplace StringReverse StringRight StringSplit StringStripCR StringStripWS StringToASCIIArray StringToBinary StringTrimLeft StringTrimRight StringUpper Tan TCPAccept TCPCloseSocket TCPConnect TCPListen TCPNameToIP TCPRecv TCPSend TCPShutdown, UDPShutdown TCPStartup, UDPStartup TimerDiff TimerInit ToolTip TrayCreateItem TrayCreateMenu TrayGetMsg TrayItemDelete TrayItemGetHandle TrayItemGetState TrayItemGetText TrayItemSetOnEvent TrayItemSetState TrayItemSetText TraySetClick TraySetIcon TraySetOnEvent TraySetPauseIcon TraySetState TraySetToolTip TrayTip UBound UDPBind UDPCloseSocket UDPOpen UDPRecv UDPSend VarGetType WinActivate WinActive WinClose WinExists WinFlash WinGetCaretPos WinGetClassList WinGetClientSize WinGetHandle WinGetPos WinGetProcess WinGetState WinGetText WinGetTitle WinKill WinList WinMenuSelectItem WinMinimizeAll WinMinimizeAllUndo WinMove WinSetOnTop WinSetState WinSetTitle WinSetTrans WinWait WinWaitActive WinWaitClose WinWaitNotActive",
      W = {
        variants: [I.COMMENT(";", "$", {
          relevance: 0
        }), I.COMMENT("#cs", "#ce"), I.COMMENT("#comments-start", "#comments-end")]
      },
      w = {
        begin: "\\$[A-z0-9_]+"
      },
      B = {
        className: "string",
        variants: [{
          begin: /"/,
          end: /"/,
          contains: [{
            begin: /""/,
            relevance: 0
          }]
        }, {
          begin: /'/,
          end: /'/,
          contains: [{
            begin: /''/,
            relevance: 0
          }]
        }]
      },
      A = {
        variants: [I.BINARY_NUMBER_MODE, I.C_NUMBER_MODE]
      },
      V = {
        className: "meta",
        begin: "#",
        end: "$",
        keywords: {
          "meta-keyword": G
        },
        contains: [{
          begin: /\\\n/,
          relevance: 0
        }, {
          beginKeywords: "include",
          keywords: {
            "meta-keyword": "include"
          },
          end: "$",
          contains: [B, {
            className: "meta-string",
            variants: [{
              begin: "<",
              end: ">"
            }, {
              begin: /"/,
              end: /"/,
              contains: [{
                begin: /""/,
                relevance: 0
              }]
            }, {
              begin: /'/,
              end: /'/,
              contains: [{
                begin: /''/,
                relevance: 0
              }]
            }]
          }]
        }, B, W]
      },
      X = {
        className: "symbol",
        begin: "@[A-z0-9_]+"
      },
      _ = {
        className: "function",
        beginKeywords: "Func",
        end: "$",
        illegal: "\\$|\\[|%",
        contains: [I.UNDERSCORE_TITLE_MODE, {
          className: "params",
          begin: "\\(",
          end: "\\)",
          contains: [w, B, A]
        }]
      };
    return {
      name: "AutoIt",
      case_insensitive: !0,
      illegal: /\/\*/,
      keywords: {
        keyword: d,
        built_in: "Abs ACos AdlibRegister AdlibUnRegister Asc AscW ASin Assign ATan AutoItSetOption AutoItWinGetTitle AutoItWinSetTitle Beep Binary BinaryLen BinaryMid BinaryToString BitAND BitNOT BitOR BitRotate BitShift BitXOR BlockInput Break Call CDTray Ceiling Chr ChrW ClipGet ClipPut ConsoleRead ConsoleWrite ConsoleWriteError ControlClick ControlCommand ControlDisable ControlEnable ControlFocus ControlGetFocus ControlGetHandle ControlGetPos ControlGetText ControlHide ControlListView ControlMove ControlSend ControlSetText ControlShow ControlTreeView Cos Dec DirCopy DirCreate DirGetSize DirMove DirRemove DllCall DllCallAddress DllCallbackFree DllCallbackGetPtr DllCallbackRegister DllClose DllOpen DllStructCreate DllStructGetData DllStructGetPtr DllStructGetSize DllStructSetData DriveGetDrive DriveGetFileSystem DriveGetLabel DriveGetSerial DriveGetType DriveMapAdd DriveMapDel DriveMapGet DriveSetLabel DriveSpaceFree DriveSpaceTotal DriveStatus EnvGet EnvSet EnvUpdate Eval Execute Exp FileChangeDir FileClose FileCopy FileCreateNTFSLink FileCreateShortcut FileDelete FileExists FileFindFirstFile FileFindNextFile FileFlush FileGetAttrib FileGetEncoding FileGetLongName FileGetPos FileGetShortcut FileGetShortName FileGetSize FileGetTime FileGetVersion FileInstall FileMove FileOpen FileOpenDialog FileRead FileReadLine FileReadToArray FileRecycle FileRecycleEmpty FileSaveDialog FileSelectFolder FileSetAttrib FileSetEnd FileSetPos FileSetTime FileWrite FileWriteLine Floor FtpSetProxy FuncName GUICreate GUICtrlCreateAvi GUICtrlCreateButton GUICtrlCreateCheckbox GUICtrlCreateCombo GUICtrlCreateContextMenu GUICtrlCreateDate GUICtrlCreateDummy GUICtrlCreateEdit GUICtrlCreateGraphic GUICtrlCreateGroup GUICtrlCreateIcon GUICtrlCreateInput GUICtrlCreateLabel GUICtrlCreateList GUICtrlCreateListView GUICtrlCreateListViewItem GUICtrlCreateMenu GUICtrlCreateMenuItem GUICtrlCreateMonthCal GUICtrlCreateObj GUICtrlCreatePic GUICtrlCreateProgress GUICtrlCreateRadio GUICtrlCreateSlider GUICtrlCreateTab GUICtrlCreateTabItem GUICtrlCreateTreeView GUICtrlCreateTreeViewItem GUICtrlCreateUpdown GUICtrlDelete GUICtrlGetHandle GUICtrlGetState GUICtrlRead GUICtrlRecvMsg GUICtrlRegisterListViewSort GUICtrlSendMsg GUICtrlSendToDummy GUICtrlSetBkColor GUICtrlSetColor GUICtrlSetCursor GUICtrlSetData GUICtrlSetDefBkColor GUICtrlSetDefColor GUICtrlSetFont GUICtrlSetGraphic GUICtrlSetImage GUICtrlSetLimit GUICtrlSetOnEvent GUICtrlSetPos GUICtrlSetResizing GUICtrlSetState GUICtrlSetStyle GUICtrlSetTip GUIDelete GUIGetCursorInfo GUIGetMsg GUIGetStyle GUIRegisterMsg GUISetAccelerators GUISetBkColor GUISetCoord GUISetCursor GUISetFont GUISetHelp GUISetIcon GUISetOnEvent GUISetState GUISetStyle GUIStartGroup GUISwitch Hex HotKeySet HttpSetProxy HttpSetUserAgent HWnd InetClose InetGet InetGetInfo InetGetSize InetRead IniDelete IniRead IniReadSection IniReadSectionNames IniRenameSection IniWrite IniWriteSection InputBox Int IsAdmin IsArray IsBinary IsBool IsDeclared IsDllStruct IsFloat IsFunc IsHWnd IsInt IsKeyword IsNumber IsObj IsPtr IsString Log MemGetStats Mod MouseClick MouseClickDrag MouseDown MouseGetCursor MouseGetPos MouseMove MouseUp MouseWheel MsgBox Number ObjCreate ObjCreateInterface ObjEvent ObjGet ObjName OnAutoItExitRegister OnAutoItExitUnRegister Ping PixelChecksum PixelGetColor PixelSearch ProcessClose ProcessExists ProcessGetStats ProcessList ProcessSetPriority ProcessWait ProcessWaitClose ProgressOff ProgressOn ProgressSet Ptr Random RegDelete RegEnumKey RegEnumVal RegRead RegWrite Round Run RunAs RunAsWait RunWait Send SendKeepActive SetError SetExtended ShellExecute ShellExecuteWait Shutdown Sin Sleep SoundPlay SoundSetWaveVolume SplashImageOn SplashOff SplashTextOn Sqrt SRandom StatusbarGetText StderrRead StdinWrite StdioClose StdoutRead String StringAddCR StringCompare StringFormat StringFromASCIIArray StringInStr StringIsAlNum StringIsAlpha StringIsASCII StringIsDigit StringIsFloat StringIsInt StringIsLower StringIsSpace StringIsUpper StringIsXDigit StringLeft StringLen StringLower StringMid StringRegExp StringRegExpReplace StringReplace StringReverse StringRight StringSplit StringStripCR StringStripWS StringToASCIIArray StringToBinary StringTrimLeft StringTrimRight StringUpper Tan TCPAccept TCPCloseSocket TCPConnect TCPListen TCPNameToIP TCPRecv TCPSend TCPShutdown, UDPShutdown TCPStartup, UDPStartup TimerDiff TimerInit ToolTip TrayCreateItem TrayCreateMenu TrayGetMsg TrayItemDelete TrayItemGetHandle TrayItemGetState TrayItemGetText TrayItemSetOnEvent TrayItemSetState TrayItemSetText TraySetClick TraySetIcon TraySetOnEvent TraySetPauseIcon TraySetState TraySetToolTip TrayTip UBound UDPBind UDPCloseSocket UDPOpen UDPRecv UDPSend VarGetType WinActivate WinActive WinClose WinExists WinFlash WinGetCaretPos WinGetClassList WinGetClientSize WinGetHandle WinGetPos WinGetProcess WinGetState WinGetText WinGetTitle WinKill WinList WinMenuSelectItem WinMinimizeAll WinMinimizeAllUndo WinMove WinSetOnTop WinSetState WinSetTitle WinSetTrans WinWait WinWaitActive WinWaitClose WinWaitNotActive",
        literal: "True False And Null Not Or Default"
      },
      contains: [W, w, B, A, V, X, _]
    }
  }
  iw2.exports = ce5
})
// @from(Start 4037962, End 4040224)
aw2 = Y((bD3, rw2) => {
  function pe5(I) {
    return {
      name: "AVR Assembly",
      case_insensitive: !0,
      keywords: {
        $pattern: "\\.?" + I.IDENT_RE,
        keyword: "adc add adiw and andi asr bclr bld brbc brbs brcc brcs break breq brge brhc brhs brid brie brlo brlt brmi brne brpl brsh brtc brts brvc brvs bset bst call cbi cbr clc clh cli cln clr cls clt clv clz com cp cpc cpi cpse dec eicall eijmp elpm eor fmul fmuls fmulsu icall ijmp in inc jmp ld ldd ldi lds lpm lsl lsr mov movw mul muls mulsu neg nop or ori out pop push rcall ret reti rjmp rol ror sbc sbr sbrc sbrs sec seh sbi sbci sbic sbis sbiw sei sen ser ses set sev sez sleep spm st std sts sub subi swap tst wdr",
        built_in: "r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 r23 r24 r25 r26 r27 r28 r29 r30 r31 x|0 xh xl y|0 yh yl z|0 zh zl ucsr1c udr1 ucsr1a ucsr1b ubrr1l ubrr1h ucsr0c ubrr0h tccr3c tccr3a tccr3b tcnt3h tcnt3l ocr3ah ocr3al ocr3bh ocr3bl ocr3ch ocr3cl icr3h icr3l etimsk etifr tccr1c ocr1ch ocr1cl twcr twdr twar twsr twbr osccal xmcra xmcrb eicra spmcsr spmcr portg ddrg ping portf ddrf sreg sph spl xdiv rampz eicrb eimsk gimsk gicr eifr gifr timsk tifr mcucr mcucsr tccr0 tcnt0 ocr0 assr tccr1a tccr1b tcnt1h tcnt1l ocr1ah ocr1al ocr1bh ocr1bl icr1h icr1l tccr2 tcnt2 ocr2 ocdr wdtcr sfior eearh eearl eedr eecr porta ddra pina portb ddrb pinb portc ddrc pinc portd ddrd pind spdr spsr spcr udr0 ucsr0a ucsr0b ubrr0l acsr admux adcsr adch adcl porte ddre pine pinf",
        meta: ".byte .cseg .db .def .device .dseg .dw .endmacro .equ .eseg .exit .include .list .listmac .macro .nolist .org .set"
      },
      contains: [I.C_BLOCK_COMMENT_MODE, I.COMMENT(";", "$", {
        relevance: 0
      }), I.C_NUMBER_MODE, I.BINARY_NUMBER_MODE, {
        className: "number",
        begin: "\\b(\\$[a-zA-Z0-9]+|0o[0-7]+)"
      }, I.QUOTE_STRING_MODE, {
        className: "string",
        begin: "'",
        end: "[^\\\\]'",
        illegal: "[^\\\\][^']"
      }, {
        className: "symbol",
        begin: "^[A-Za-z0-9_.$]+:"
      }, {
        className: "meta",
        begin: "#",
        end: "$"
      }, {
        className: "subst",
        begin: "@[0-9]+"
      }]
    }
  }
  rw2.exports = pe5
})
// @from(Start 4040230, End 4041449)
ow2 = Y((hD3, sw2) => {
  function ie5(I) {
    let d = {
        className: "variable",
        variants: [{
          begin: /\$[\w\d#@][\w\d_]*/
        }, {
          begin: /\$\{(.*?)\}/
        }]
      },
      G = "BEGIN END if else while do for in break continue delete next nextfile function func exit|10",
      Z = {
        className: "string",
        contains: [I.BACKSLASH_ESCAPE],
        variants: [{
          begin: /(u|b)?r?'''/,
          end: /'''/,
          relevance: 10
        }, {
          begin: /(u|b)?r?"""/,
          end: /"""/,
          relevance: 10
        }, {
          begin: /(u|r|ur)'/,
          end: /'/,
          relevance: 10
        }, {
          begin: /(u|r|ur)"/,
          end: /"/,
          relevance: 10
        }, {
          begin: /(b|br)'/,
          end: /'/
        }, {
          begin: /(b|br)"/,
          end: /"/
        }, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE]
      };
    return {
      name: "Awk",
      keywords: {
        keyword: "BEGIN END if else while do for in break continue delete next nextfile function func exit|10"
      },
      contains: [d, Z, I.REGEXP_MODE, I.HASH_COMMENT_MODE, I.NUMBER_MODE]
    }
  }
  sw2.exports = ie5
})
// @from(Start 4041455, End 4043415)
tw2 = Y((jD3, ew2) => {
  function ne5(I) {
    return {
      name: "X++",
      aliases: ["x++"],
      keywords: {
        keyword: ["abstract", "as", "asc", "avg", "break", "breakpoint", "by", "byref", "case", "catch", "changecompany", "class", "client", "client", "common", "const", "continue", "count", "crosscompany", "delegate", "delete_from", "desc", "display", "div", "do", "edit", "else", "eventhandler", "exists", "extends", "final", "finally", "firstfast", "firstonly", "firstonly1", "firstonly10", "firstonly100", "firstonly1000", "flush", "for", "forceliterals", "forcenestedloop", "forceplaceholders", "forceselectorder", "forupdate", "from", "generateonly", "group", "hint", "if", "implements", "in", "index", "insert_recordset", "interface", "internal", "is", "join", "like", "maxof", "minof", "mod", "namespace", "new", "next", "nofetch", "notexists", "optimisticlock", "order", "outer", "pessimisticlock", "print", "private", "protected", "public", "readonly", "repeatableread", "retry", "return", "reverse", "select", "server", "setting", "static", "sum", "super", "switch", "this", "throw", "try", "ttsabort", "ttsbegin", "ttscommit", "unchecked", "update_recordset", "using", "validtimestate", "void", "where", "while"],
        built_in: ["anytype", "boolean", "byte", "char", "container", "date", "double", "enum", "guid", "int", "int64", "long", "real", "short", "str", "utcdatetime", "var"],
        literal: ["default", "false", "null", "true"]
      },
      contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, I.C_NUMBER_MODE, {
        className: "meta",
        begin: "#",
        end: "$"
      }, {
        className: "class",
        beginKeywords: "class interface",
        end: /\{/,
        excludeEnd: !0,
        illegal: ":",
        contains: [{
          beginKeywords: "extends implements"
        }, I.UNDERSCORE_TITLE_MODE]
      }]
    }
  }
  ew2.exports = ne5
})
// @from(Start 4043421, End 4046324)
dB2 = Y((kD3, IB2) => {
  function re5(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function ae5(...I) {
    return I.map((G) => re5(G)).join("")
  }

  function se5(I) {
    let d = {},
      G = {
        begin: /\$\{/,
        end: /\}/,
        contains: ["self", {
          begin: /:-/,
          contains: [d]
        }]
      };
    Object.assign(d, {
      className: "variable",
      variants: [{
        begin: ae5(/\$[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![$])")
      }, G]
    });
    let Z = {
        className: "subst",
        begin: /\$\(/,
        end: /\)/,
        contains: [I.BACKSLASH_ESCAPE]
      },
      C = {
        begin: /<<-?\s*(?=\w+)/,
        starts: {
          contains: [I.END_SAME_AS_BEGIN({
            begin: /(\w+)/,
            end: /(\w+)/,
            className: "string"
          })]
        }
      },
      W = {
        className: "string",
        begin: /"/,
        end: /"/,
        contains: [I.BACKSLASH_ESCAPE, d, Z]
      };
    Z.contains.push(W);
    let w = {
        className: "",
        begin: /\\"/
      },
      B = {
        className: "string",
        begin: /'/,
        end: /'/
      },
      A = {
        begin: /\$\(\(/,
        end: /\)\)/,
        contains: [{
          begin: /\d+#[0-9a-f]+/,
          className: "number"
        }, I.NUMBER_MODE, d]
      },
      V = ["fish", "bash", "zsh", "sh", "csh", "ksh", "tcsh", "dash", "scsh"],
      X = I.SHEBANG({
        binary: `(${V.join("|")})`,
        relevance: 10
      }),
      _ = {
        className: "function",
        begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
        returnBegin: !0,
        contains: [I.inherit(I.TITLE_MODE, {
          begin: /\w[\w\d_]*/
        })],
        relevance: 0
      };
    return {
      name: "Bash",
      aliases: ["sh", "zsh"],
      keywords: {
        $pattern: /\b[a-z._-]+\b/,
        keyword: "if then else elif fi for while in do done case esac function",
        literal: "true false",
        built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp"
      },
      contains: [X, I.SHEBANG(), _, A, I.HASH_COMMENT_MODE, C, W, w, B, d]
    }
  }
  IB2.exports = se5
})
// @from(Start 4046330, End 4048052)
ZB2 = Y((xD3, GB2) => {
  function oe5(I) {
    return {
      name: "BASIC",
      case_insensitive: !0,
      illegal: "^.",
      keywords: {
        $pattern: "[a-zA-Z][a-zA-Z0-9_$%!#]*",
        keyword: "ABS ASC AND ATN AUTO|0 BEEP BLOAD|10 BSAVE|10 CALL CALLS CDBL CHAIN CHDIR CHR$|10 CINT CIRCLE CLEAR CLOSE CLS COLOR COM COMMON CONT COS CSNG CSRLIN CVD CVI CVS DATA DATE$ DEFDBL DEFINT DEFSNG DEFSTR DEF|0 SEG USR DELETE DIM DRAW EDIT END ENVIRON ENVIRON$ EOF EQV ERASE ERDEV ERDEV$ ERL ERR ERROR EXP FIELD FILES FIX FOR|0 FRE GET GOSUB|10 GOTO HEX$ IF THEN ELSE|0 INKEY$ INP INPUT INPUT# INPUT$ INSTR IMP INT IOCTL IOCTL$ KEY ON OFF LIST KILL LEFT$ LEN LET LINE LLIST LOAD LOC LOCATE LOF LOG LPRINT USING LSET MERGE MID$ MKDIR MKD$ MKI$ MKS$ MOD NAME NEW NEXT NOISE NOT OCT$ ON OR PEN PLAY STRIG OPEN OPTION BASE OUT PAINT PALETTE PCOPY PEEK PMAP POINT POKE POS PRINT PRINT] PSET PRESET PUT RANDOMIZE READ REM RENUM RESET|0 RESTORE RESUME RETURN|0 RIGHT$ RMDIR RND RSET RUN SAVE SCREEN SGN SHELL SIN SOUND SPACE$ SPC SQR STEP STICK STOP STR$ STRING$ SWAP SYSTEM TAB TAN TIME$ TIMER TROFF TRON TO USR VAL VARPTR VARPTR$ VIEW WAIT WHILE WEND WIDTH WINDOW WRITE XOR"
      },
      contains: [I.QUOTE_STRING_MODE, I.COMMENT("REM", "$", {
        relevance: 10
      }), I.COMMENT("'", "$", {
        relevance: 0
      }), {
        className: "symbol",
        begin: "^[0-9]+ ",
        relevance: 10
      }, {
        className: "number",
        begin: "\\b\\d+(\\.\\d+)?([edED]\\d+)?[#!]?",
        relevance: 0
      }, {
        className: "number",
        begin: "(&[hH][0-9a-fA-F]{1,4})"
      }, {
        className: "number",
        begin: "(&[oO][0-7]{1,6})"
      }]
    }
  }
  GB2.exports = oe5
})
// @from(Start 4048058, End 4048488)
WB2 = Y((cD3, CB2) => {
  function ee5(I) {
    return {
      name: "Backus–Naur Form",
      contains: [{
        className: "attribute",
        begin: /</,
        end: />/
      }, {
        begin: /::=/,
        end: /$/,
        contains: [{
          begin: /</,
          end: />/
        }, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE]
      }]
    }
  }
  CB2.exports = ee5
})
// @from(Start 4048494, End 4049099)
BB2 = Y((pD3, wB2) => {
  function te5(I) {
    let d = {
      className: "literal",
      begin: /[+-]/,
      relevance: 0
    };
    return {
      name: "Brainfuck",
      aliases: ["bf"],
      contains: [I.COMMENT(`[^\\[\\]\\.,\\+\\-<> \r
]`, `[\\[\\]\\.,\\+\\-<> \r
]`, {
        returnEnd: !0,
        relevance: 0
      }), {
        className: "title",
        begin: "[\\[\\]]",
        relevance: 0
      }, {
        className: "string",
        begin: "[\\.,]",
        relevance: 0
      }, {
        begin: /(?:\+\+|--)/,
        contains: [d]
      }, d]
    }
  }
  wB2.exports = te5
})
// @from(Start 4049105, End 4056459)
VB2 = Y((iD3, AB2) => {
  function It5(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function dt5(I) {
    return bF1("(?=", I, ")")
  }

  function Ea(I) {
    return bF1("(", I, ")?")
  }

  function bF1(...I) {
    return I.map((G) => It5(G)).join("")
  }

  function Gt5(I) {
    let d = I.COMMENT("//", "$", {
        contains: [{
          begin: /\\\n/
        }]
      }),
      G = "decltype\\(auto\\)",
      Z = "[a-zA-Z_]\\w*::",
      C = "<[^<>]+>",
      W = "(decltype\\(auto\\)|" + Ea("[a-zA-Z_]\\w*::") + "[a-zA-Z_]\\w*" + Ea("<[^<>]+>") + ")",
      w = {
        className: "keyword",
        begin: "\\b[a-z\\d_]*_t\\b"
      },
      B = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",
      A = {
        className: "string",
        variants: [{
          begin: '(u8?|U|L)?"',
          end: '"',
          illegal: "\\n",
          contains: [I.BACKSLASH_ESCAPE]
        }, {
          begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
          end: "'",
          illegal: "."
        }, I.END_SAME_AS_BEGIN({
          begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
          end: /\)([^()\\ ]{0,16})"/
        })]
      },
      V = {
        className: "number",
        variants: [{
          begin: "\\b(0b[01']+)"
        }, {
          begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
        }, {
          begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
        }],
        relevance: 0
      },
      X = {
        className: "meta",
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: {
          "meta-keyword": "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
        },
        contains: [{
          begin: /\\\n/,
          relevance: 0
        }, I.inherit(A, {
          className: "meta-string"
        }), {
          className: "meta-string",
          begin: /<.*?>/
        }, d, I.C_BLOCK_COMMENT_MODE]
      },
      _ = {
        className: "title",
        begin: Ea("[a-zA-Z_]\\w*::") + I.IDENT_RE,
        relevance: 0
      },
      F = Ea("[a-zA-Z_]\\w*::") + I.IDENT_RE + "\\s*\\(",
      J = {
        keyword: "int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",
        built_in: "_Bool _Complex _Imaginary",
        _relevance_hints: ["asin", "atan2", "atan", "calloc", "ceil", "cosh", "cos", "exit", "exp", "fabs", "floor", "fmod", "fprintf", "fputs", "free", "frexp", "auto_ptr", "deque", "list", "queue", "stack", "vector", "map", "set", "pair", "bitset", "multiset", "multimap", "unordered_set", "fscanf", "future", "isalnum", "isalpha", "iscntrl", "isdigit", "isgraph", "islower", "isprint", "ispunct", "isspace", "isupper", "isxdigit", "tolower", "toupper", "labs", "ldexp", "log10", "log", "malloc", "realloc", "memchr", "memcmp", "memcpy", "memset", "modf", "pow", "printf", "putchar", "puts", "scanf", "sinh", "sin", "snprintf", "sprintf", "sqrt", "sscanf", "strcat", "strchr", "strcmp", "strcpy", "strcspn", "strlen", "strncat", "strncmp", "strncpy", "strpbrk", "strrchr", "strspn", "strstr", "tanh", "tan", "unordered_map", "unordered_multiset", "unordered_multimap", "priority_queue", "make_pair", "array", "shared_ptr", "abort", "terminate", "abs", "acos", "vfprintf", "vprintf", "vsprintf", "endl", "initializer_list", "unique_ptr", "complex", "imaginary", "std", "string", "wstring", "cin", "cout", "cerr", "clog", "stdin", "stdout", "stderr", "stringstream", "istringstream", "ostringstream"],
        literal: "true false nullptr NULL"
      },
      K = {
        className: "function.dispatch",
        relevance: 0,
        keywords: J,
        begin: bF1(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!while)/, I.IDENT_RE, dt5(/\s*\(/))
      },
      Q = [K, X, w, d, I.C_BLOCK_COMMENT_MODE, V, A],
      E = {
        variants: [{
          begin: /=/,
          end: /;/
        }, {
          begin: /\(/,
          end: /\)/
        }, {
          beginKeywords: "new throw return else",
          end: /;/
        }],
        keywords: J,
        contains: Q.concat([{
          begin: /\(/,
          end: /\)/,
          keywords: J,
          contains: Q.concat(["self"]),
          relevance: 0
        }]),
        relevance: 0
      },
      S = {
        className: "function",
        begin: "(" + W + "[\\*&\\s]+)+" + F,
        returnBegin: !0,
        end: /[{;=]/,
        excludeEnd: !0,
        keywords: J,
        illegal: /[^\w\s\*&:<>.]/,
        contains: [{
          begin: "decltype\\(auto\\)",
          keywords: J,
          relevance: 0
        }, {
          begin: F,
          returnBegin: !0,
          contains: [_],
          relevance: 0
        }, {
          begin: /::/,
          relevance: 0
        }, {
          begin: /:/,
          endsWithParent: !0,
          contains: [A, V]
        }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: J,
          relevance: 0,
          contains: [d, I.C_BLOCK_COMMENT_MODE, A, V, w, {
            begin: /\(/,
            end: /\)/,
            keywords: J,
            relevance: 0,
            contains: ["self", d, I.C_BLOCK_COMMENT_MODE, A, V, w]
          }]
        }, w, d, I.C_BLOCK_COMMENT_MODE, X]
      };
    return {
      name: "C++",
      aliases: ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"],
      keywords: J,
      illegal: "</",
      classNameAliases: {
        "function.dispatch": "built_in"
      },
      contains: [].concat(E, S, K, Q, [X, {
        begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
        end: ">",
        keywords: J,
        contains: ["self", w]
      }, {
        begin: I.IDENT_RE + "::",
        keywords: J
      }, {
        className: "class",
        beginKeywords: "enum class struct union",
        end: /[{;:<>=]/,
        contains: [{
          beginKeywords: "final class struct"
        }, I.TITLE_MODE]
      }]),
      exports: {
        preprocessor: X,
        strings: A,
        keywords: J
      }
    }
  }

  function Zt5(I) {
    let d = Gt5(I),
      G = ["c", "h"],
      Z = ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"];
    if (d.disableAutodetect = !0, d.aliases = [], !I.getLanguage("c")) d.aliases.push(...G);
    if (!I.getLanguage("cpp")) d.aliases.push(...Z);
    return d
  }
  AB2.exports = Zt5
})
// @from(Start 4056465, End 4062660)
YB2 = Y((nD3, XB2) => {
  function Ct5(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function Ma(I) {
    return Wt5("(", I, ")?")
  }

  function Wt5(...I) {
    return I.map((G) => Ct5(G)).join("")
  }

  function wt5(I) {
    let d = I.COMMENT("//", "$", {
        contains: [{
          begin: /\\\n/
        }]
      }),
      G = "decltype\\(auto\\)",
      Z = "[a-zA-Z_]\\w*::",
      C = "<[^<>]+>",
      W = "(decltype\\(auto\\)|" + Ma("[a-zA-Z_]\\w*::") + "[a-zA-Z_]\\w*" + Ma("<[^<>]+>") + ")",
      w = {
        className: "keyword",
        begin: "\\b[a-z\\d_]*_t\\b"
      },
      B = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",
      A = {
        className: "string",
        variants: [{
          begin: '(u8?|U|L)?"',
          end: '"',
          illegal: "\\n",
          contains: [I.BACKSLASH_ESCAPE]
        }, {
          begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
          end: "'",
          illegal: "."
        }, I.END_SAME_AS_BEGIN({
          begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
          end: /\)([^()\\ ]{0,16})"/
        })]
      },
      V = {
        className: "number",
        variants: [{
          begin: "\\b(0b[01']+)"
        }, {
          begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
        }, {
          begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
        }],
        relevance: 0
      },
      X = {
        className: "meta",
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: {
          "meta-keyword": "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
        },
        contains: [{
          begin: /\\\n/,
          relevance: 0
        }, I.inherit(A, {
          className: "meta-string"
        }), {
          className: "meta-string",
          begin: /<.*?>/
        }, d, I.C_BLOCK_COMMENT_MODE]
      },
      _ = {
        className: "title",
        begin: Ma("[a-zA-Z_]\\w*::") + I.IDENT_RE,
        relevance: 0
      },
      F = Ma("[a-zA-Z_]\\w*::") + I.IDENT_RE + "\\s*\\(",
      g = {
        keyword: "int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",
        built_in: "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr _Bool complex _Complex imaginary _Imaginary",
        literal: "true false nullptr NULL"
      },
      J = [X, w, d, I.C_BLOCK_COMMENT_MODE, V, A],
      K = {
        variants: [{
          begin: /=/,
          end: /;/
        }, {
          begin: /\(/,
          end: /\)/
        }, {
          beginKeywords: "new throw return else",
          end: /;/
        }],
        keywords: g,
        contains: J.concat([{
          begin: /\(/,
          end: /\)/,
          keywords: g,
          contains: J.concat(["self"]),
          relevance: 0
        }]),
        relevance: 0
      },
      Q = {
        className: "function",
        begin: "(" + W + "[\\*&\\s]+)+" + F,
        returnBegin: !0,
        end: /[{;=]/,
        excludeEnd: !0,
        keywords: g,
        illegal: /[^\w\s\*&:<>.]/,
        contains: [{
          begin: "decltype\\(auto\\)",
          keywords: g,
          relevance: 0
        }, {
          begin: F,
          returnBegin: !0,
          contains: [_],
          relevance: 0
        }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: g,
          relevance: 0,
          contains: [d, I.C_BLOCK_COMMENT_MODE, A, V, w, {
            begin: /\(/,
            end: /\)/,
            keywords: g,
            relevance: 0,
            contains: ["self", d, I.C_BLOCK_COMMENT_MODE, A, V, w]
          }]
        }, w, d, I.C_BLOCK_COMMENT_MODE, X]
      };
    return {
      name: "C",
      aliases: ["h"],
      keywords: g,
      disableAutodetect: !0,
      illegal: "</",
      contains: [].concat(K, Q, J, [X, {
        begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
        end: ">",
        keywords: g,
        contains: ["self", w]
      }, {
        begin: I.IDENT_RE + "::",
        keywords: g
      }, {
        className: "class",
        beginKeywords: "enum class struct union",
        end: /[{;:<>=]/,
        contains: [{
          beginKeywords: "final class struct"
        }, I.TITLE_MODE]
      }]),
      exports: {
        preprocessor: X,
        strings: A,
        keywords: g
      }
    }
  }
  XB2.exports = wt5
})
// @from(Start 4062666, End 4064226)
DB2 = Y((rD3, _B2) => {
  function Bt5(I) {
    let d = "div mod in and or not xor asserterror begin case do downto else end exit for if of repeat then to until while with var",
      G = "false true",
      Z = [I.C_LINE_COMMENT_MODE, I.COMMENT(/\{/, /\}/, {
        relevance: 0
      }), I.COMMENT(/\(\*/, /\*\)/, {
        relevance: 10
      })],
      C = {
        className: "string",
        begin: /'/,
        end: /'/,
        contains: [{
          begin: /''/
        }]
      },
      W = {
        className: "string",
        begin: /(#\d+)+/
      },
      w = {
        className: "number",
        begin: "\\b\\d+(\\.\\d+)?(DT|D|T)",
        relevance: 0
      },
      B = {
        className: "string",
        begin: '"',
        end: '"'
      },
      A = {
        className: "function",
        beginKeywords: "procedure",
        end: /[:;]/,
        keywords: "procedure|10",
        contains: [I.TITLE_MODE, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: d,
          contains: [C, W]
        }].concat(Z)
      },
      V = {
        className: "class",
        begin: "OBJECT (Table|Form|Report|Dataport|Codeunit|XMLport|MenuSuite|Page|Query) (\\d+) ([^\\r\\n]+)",
        returnBegin: !0,
        contains: [I.TITLE_MODE, A]
      };
    return {
      name: "C/AL",
      case_insensitive: !0,
      keywords: {
        keyword: d,
        literal: "false true"
      },
      illegal: /\/\*/,
      contains: [C, W, w, B, I.NUMBER_MODE, V, A]
    }
  }
  _B2.exports = Bt5
})
// @from(Start 4064232, End 4065458)
FB2 = Y((aD3, HB2) => {
  function At5(I) {
    return {
      name: "Cap’n Proto",
      aliases: ["capnp"],
      keywords: {
        keyword: "struct enum interface union group import using const annotation extends in of on as with from fixed",
        built_in: "Void Bool Int8 Int16 Int32 Int64 UInt8 UInt16 UInt32 UInt64 Float32 Float64 Text Data AnyPointer AnyStruct Capability List",
        literal: "true false"
      },
      contains: [I.QUOTE_STRING_MODE, I.NUMBER_MODE, I.HASH_COMMENT_MODE, {
        className: "meta",
        begin: /@0x[\w\d]{16};/,
        illegal: /\n/
      }, {
        className: "symbol",
        begin: /@\d+\b/
      }, {
        className: "class",
        beginKeywords: "struct enum",
        end: /\{/,
        illegal: /\n/,
        contains: [I.inherit(I.TITLE_MODE, {
          starts: {
            endsWithParent: !0,
            excludeEnd: !0
          }
        })]
      }, {
        className: "class",
        beginKeywords: "interface",
        end: /\{/,
        illegal: /\n/,
        contains: [I.inherit(I.TITLE_MODE, {
          starts: {
            endsWithParent: !0,
            excludeEnd: !0
          }
        })]
      }]
    }
  }
  HB2.exports = At5
})
// @from(Start 4065464, End 4067026)
JB2 = Y((sD3, gB2) => {
  function Vt5(I) {
    let d = "assembly module package import alias class interface object given value assign void function new of extends satisfies abstracts in out return break continue throw assert dynamic if else switch case for while try catch finally then let this outer super is exists nonempty",
      G = "shared abstract formal default actual variable late native deprecated final sealed annotation suppressWarnings small",
      Z = "doc by license see throws tagged",
      C = {
        className: "subst",
        excludeBegin: !0,
        excludeEnd: !0,
        begin: /``/,
        end: /``/,
        keywords: d,
        relevance: 10
      },
      W = [{
        className: "string",
        begin: '"""',
        end: '"""',
        relevance: 10
      }, {
        className: "string",
        begin: '"',
        end: '"',
        contains: [C]
      }, {
        className: "string",
        begin: "'",
        end: "'"
      }, {
        className: "number",
        begin: "#[0-9a-fA-F_]+|\\$[01_]+|[0-9_]+(?:\\.[0-9_](?:[eE][+-]?\\d+)?)?[kMGTPmunpf]?",
        relevance: 0
      }];
    return C.contains = W, {
      name: "Ceylon",
      keywords: {
        keyword: d + " " + G,
        meta: "doc by license see throws tagged"
      },
      illegal: "\\$[^01]|#[^0-9a-fA-F]",
      contains: [I.C_LINE_COMMENT_MODE, I.COMMENT("/\\*", "\\*/", {
        contains: ["self"]
      }), {
        className: "meta",
        begin: '@[a-z]\\w*(?::"[^"]*")?'
      }].concat(W)
    }
  }
  gB2.exports = Vt5
})
// @from(Start 4067032, End 4067686)
NB2 = Y((oD3, KB2) => {
  function Xt5(I) {
    return {
      name: "Clean",
      aliases: ["icl", "dcl"],
      keywords: {
        keyword: "if let in with where case of class instance otherwise implementation definition system module from import qualified as special code inline foreign export ccall stdcall generic derive infix infixl infixr",
        built_in: "Int Real Char Bool",
        literal: "True False"
      },
      contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, I.C_NUMBER_MODE, {
        begin: "->|<-[|:]?|#!?|>>=|\\{\\||\\|\\}|:==|=:|<>"
      }]
    }
  }
  KB2.exports = Xt5
})
// @from(Start 4067692, End 4072229)
QB2 = Y((eD3, zB2) => {
  function Yt5(I) {
    let G = "[a-zA-Z_\\-!.?+*=<>&#'][a-zA-Z_\\-!.?+*=<>&#'0-9/;:]*",
      Z = "def defonce defprotocol defstruct defmulti defmethod defn- defn defmacro deftype defrecord",
      C = {
        $pattern: G,
        "builtin-name": "def defonce defprotocol defstruct defmulti defmethod defn- defn defmacro deftype defrecord cond apply if-not if-let if not not= =|0 <|0 >|0 <=|0 >=|0 ==|0 +|0 /|0 *|0 -|0 rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy first rest cons cast coll last butlast sigs reify second ffirst fnext nfirst nnext meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"
      },
      W = "[-+]?\\d+(\\.\\d+)?",
      w = {
        begin: G,
        relevance: 0
      },
      B = {
        className: "number",
        begin: "[-+]?\\d+(\\.\\d+)?",
        relevance: 0
      },
      A = I.inherit(I.QUOTE_STRING_MODE, {
        illegal: null
      }),
      V = I.COMMENT(";", "$", {
        relevance: 0
      }),
      X = {
        className: "literal",
        begin: /\b(true|false|nil)\b/
      },
      _ = {
        begin: "[\\[\\{]",
        end: "[\\]\\}]"
      },
      F = {
        className: "comment",
        begin: "\\^" + G
      },
      g = I.COMMENT("\\^\\{", "\\}"),
      J = {
        className: "symbol",
        begin: "[:]{1,2}" + G
      },
      K = {
        begin: "\\(",
        end: "\\)"
      },
      Q = {
        endsWithParent: !0,
        relevance: 0
      },
      E = {
        keywords: C,
        className: "name",
        begin: G,
        relevance: 0,
        starts: Q
      },
      S = [K, A, F, g, V, J, _, B, X, w],
      P = {
        beginKeywords: "def defonce defprotocol defstruct defmulti defmethod defn- defn defmacro deftype defrecord",
        lexemes: G,
        end: '(\\[|#|\\d|"|:|\\{|\\)|\\(|$)',
        contains: [{
          className: "title",
          begin: G,
          relevance: 0,
          excludeEnd: !0,
          endsParent: !0
        }].concat(S)
      };
    return K.contains = [I.COMMENT("comment", ""), P, E, Q], Q.contains = S, _.contains = S, g.contains = [_], {
      name: "Clojure",
      aliases: ["clj"],
      illegal: /\S/,
      contains: [K, A, F, g, V, J, _, B, X]
    }
  }
  zB2.exports = Yt5
})
// @from(Start 4072235, End 4072526)
qB2 = Y((tD3, fB2) => {
  function _t5(I) {
    return {
      name: "Clojure REPL",
      contains: [{
        className: "meta",
        begin: /^([\w.-]+|\s*#_)?=>/,
        starts: {
          end: /$/,
          subLanguage: "clojure"
        }
      }]
    }
  }
  fB2.exports = _t5
})
// @from(Start 4072532, End 4075083)
UB2 = Y((IH3, RB2) => {
  function Dt5(I) {
    return {
      name: "CMake",
      aliases: ["cmake.in"],
      case_insensitive: !0,
      keywords: {
        keyword: "break cmake_host_system_information cmake_minimum_required cmake_parse_arguments cmake_policy configure_file continue elseif else endforeach endfunction endif endmacro endwhile execute_process file find_file find_library find_package find_path find_program foreach function get_cmake_property get_directory_property get_filename_component get_property if include include_guard list macro mark_as_advanced math message option return separate_arguments set_directory_properties set_property set site_name string unset variable_watch while add_compile_definitions add_compile_options add_custom_command add_custom_target add_definitions add_dependencies add_executable add_library add_link_options add_subdirectory add_test aux_source_directory build_command create_test_sourcelist define_property enable_language enable_testing export fltk_wrap_ui get_source_file_property get_target_property get_test_property include_directories include_external_msproject include_regular_expression install link_directories link_libraries load_cache project qt_wrap_cpp qt_wrap_ui remove_definitions set_source_files_properties set_target_properties set_tests_properties source_group target_compile_definitions target_compile_features target_compile_options target_include_directories target_link_directories target_link_libraries target_link_options target_sources try_compile try_run ctest_build ctest_configure ctest_coverage ctest_empty_binary_directory ctest_memcheck ctest_read_custom_files ctest_run_script ctest_sleep ctest_start ctest_submit ctest_test ctest_update ctest_upload build_name exec_program export_library_dependencies install_files install_programs install_targets load_command make_directory output_required_files remove subdir_depends subdirs use_mangled_mesa utility_source variable_requires write_file qt5_use_modules qt5_use_package qt5_wrap_cpp on off true false and or not command policy target test exists is_newer_than is_directory is_symlink is_absolute matches less greater equal less_equal greater_equal strless strgreater strequal strless_equal strgreater_equal version_less version_greater version_equal version_less_equal version_greater_equal in_list defined"
      },
      contains: [{
        className: "variable",
        begin: /\$\{/,
        end: /\}/
      }, I.HASH_COMMENT_MODE, I.QUOTE_STRING_MODE, I.NUMBER_MODE]
    }
  }
  RB2.exports = Dt5
})
// @from(Start 4075089, End 4079650)
EB2 = Y((dH3, vB2) => {
  var Ht5 = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"],
    Ft5 = ["true", "false", "null", "undefined", "NaN", "Infinity"],
    gt5 = ["Intl", "DataView", "Number", "Math", "Date", "String", "RegExp", "Object", "Function", "Boolean", "Error", "Symbol", "Set", "Map", "WeakSet", "WeakMap", "Proxy", "Reflect", "JSON", "Promise", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Float32Array", "Array", "Uint8Array", "Uint8ClampedArray", "ArrayBuffer", "BigInt64Array", "BigUint64Array", "BigInt"],
    Jt5 = ["EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
    Kt5 = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
    Nt5 = ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"],
    zt5 = [].concat(Kt5, Nt5, gt5, Jt5);

  function Qt5(I) {
    let d = ["npm", "print"],
      G = ["yes", "no", "on", "off"],
      Z = ["then", "unless", "until", "loop", "by", "when", "and", "or", "is", "isnt", "not"],
      C = ["var", "const", "let", "function", "static"],
      W = (g) => (J) => !g.includes(J),
      w = {
        keyword: Ht5.concat(Z).filter(W(C)),
        literal: Ft5.concat(G),
        built_in: zt5.concat(d)
      },
      B = "[A-Za-z$_][0-9A-Za-z$_]*",
      A = {
        className: "subst",
        begin: /#\{/,
        end: /\}/,
        keywords: w
      },
      V = [I.BINARY_NUMBER_MODE, I.inherit(I.C_NUMBER_MODE, {
        starts: {
          end: "(\\s*/)?",
          relevance: 0
        }
      }), {
        className: "string",
        variants: [{
          begin: /'''/,
          end: /'''/,
          contains: [I.BACKSLASH_ESCAPE]
        }, {
          begin: /'/,
          end: /'/,
          contains: [I.BACKSLASH_ESCAPE]
        }, {
          begin: /"""/,
          end: /"""/,
          contains: [I.BACKSLASH_ESCAPE, A]
        }, {
          begin: /"/,
          end: /"/,
          contains: [I.BACKSLASH_ESCAPE, A]
        }]
      }, {
        className: "regexp",
        variants: [{
          begin: "///",
          end: "///",
          contains: [A, I.HASH_COMMENT_MODE]
        }, {
          begin: "//[gim]{0,3}(?=\\W)",
          relevance: 0
        }, {
          begin: /\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/
        }]
      }, {
        begin: "@[A-Za-z$_][0-9A-Za-z$_]*"
      }, {
        subLanguage: "javascript",
        excludeBegin: !0,
        excludeEnd: !0,
        variants: [{
          begin: "```",
          end: "```"
        }, {
          begin: "`",
          end: "`"
        }]
      }];
    A.contains = V;
    let X = I.inherit(I.TITLE_MODE, {
        begin: "[A-Za-z$_][0-9A-Za-z$_]*"
      }),
      _ = "(\\(.*\\)\\s*)?\\B[-=]>",
      F = {
        className: "params",
        begin: "\\([^\\(]",
        returnBegin: !0,
        contains: [{
          begin: /\(/,
          end: /\)/,
          keywords: w,
          contains: ["self"].concat(V)
        }]
      };
    return {
      name: "CoffeeScript",
      aliases: ["coffee", "cson", "iced"],
      keywords: w,
      illegal: /\/\*/,
      contains: V.concat([I.COMMENT("###", "###"), I.HASH_COMMENT_MODE, {
        className: "function",
        begin: "^\\s*[A-Za-z$_][0-9A-Za-z$_]*\\s*=\\s*" + _,
        end: "[-=]>",
        returnBegin: !0,
        contains: [X, F]
      }, {
        begin: /[:\(,=]\s*/,
        relevance: 0,
        contains: [{
          className: "function",
          begin: _,
          end: "[-=]>",
          returnBegin: !0,
          contains: [F]
        }]
      }, {
        className: "class",
        beginKeywords: "class",
        end: "$",
        illegal: /[:="\[\]]/,
        contains: [{
          beginKeywords: "extends",
          endsWithParent: !0,
          illegal: /[:="\[\]]/,
          contains: [X]
        }, X]
      }, {
        begin: "[A-Za-z$_][0-9A-Za-z$_]*:",
        end: ":",
        returnBegin: !0,
        returnEnd: !0,
        relevance: 0
      }])
    }
  }
  vB2.exports = Qt5
})
// @from(Start 4079656, End 4083271)
SB2 = Y((GH3, MB2) => {
  function ft5(I) {
    return {
      name: "Coq",
      keywords: {
        keyword: "_|0 as at cofix else end exists exists2 fix for forall fun if IF in let match mod Prop return Set then Type using where with Abort About Add Admit Admitted All Arguments Assumptions Axiom Back BackTo Backtrack Bind Blacklist Canonical Cd Check Class Classes Close Coercion Coercions CoFixpoint CoInductive Collection Combined Compute Conjecture Conjectures Constant constr Constraint Constructors Context Corollary CreateHintDb Cut Declare Defined Definition Delimit Dependencies Dependent Derive Drop eauto End Equality Eval Example Existential Existentials Existing Export exporting Extern Extract Extraction Fact Field Fields File Fixpoint Focus for From Function Functional Generalizable Global Goal Grab Grammar Graph Guarded Heap Hint HintDb Hints Hypotheses Hypothesis ident Identity If Immediate Implicit Import Include Inductive Infix Info Initial Inline Inspect Instance Instances Intro Intros Inversion Inversion_clear Language Left Lemma Let Libraries Library Load LoadPath Local Locate Ltac ML Mode Module Modules Monomorphic Morphism Next NoInline Notation Obligation Obligations Opaque Open Optimize Options Parameter Parameters Parametric Path Paths pattern Polymorphic Preterm Print Printing Program Projections Proof Proposition Pwd Qed Quit Rec Record Recursive Redirect Relation Remark Remove Require Reserved Reset Resolve Restart Rewrite Right Ring Rings Save Scheme Scope Scopes Script Search SearchAbout SearchHead SearchPattern SearchRewrite Section Separate Set Setoid Show Solve Sorted Step Strategies Strategy Structure SubClass Table Tables Tactic Term Test Theorem Time Timeout Transparent Type Typeclasses Types Undelimit Undo Unfocus Unfocused Unfold Universe Universes Unset Unshelve using Variable Variables Variant Verbose Visibility where with",
        built_in: "abstract absurd admit after apply as assert assumption at auto autorewrite autounfold before bottom btauto by case case_eq cbn cbv change classical_left classical_right clear clearbody cofix compare compute congruence constr_eq constructor contradict contradiction cut cutrewrite cycle decide decompose dependent destruct destruction dintuition discriminate discrR do double dtauto eapply eassumption eauto ecase econstructor edestruct ediscriminate eelim eexact eexists einduction einjection eleft elim elimtype enough equality erewrite eright esimplify_eq esplit evar exact exactly_once exfalso exists f_equal fail field field_simplify field_simplify_eq first firstorder fix fold fourier functional generalize generalizing gfail give_up has_evar hnf idtac in induction injection instantiate intro intro_pattern intros intuition inversion inversion_clear is_evar is_var lapply lazy left lia lra move native_compute nia nsatz omega once pattern pose progress proof psatz quote record red refine reflexivity remember rename repeat replace revert revgoals rewrite rewrite_strat right ring ring_simplify rtauto set setoid_reflexivity setoid_replace setoid_rewrite setoid_symmetry setoid_transitivity shelve shelve_unifiable simpl simple simplify_eq solve specialize split split_Rabs split_Rmult stepl stepr subst sum swap symmetry tactic tauto time timeout top transitivity trivial try tryif unfold unify until using vm_compute with"
      },
      contains: [I.QUOTE_STRING_MODE, I.COMMENT("\\(\\*", "\\*\\)"), I.C_NUMBER_MODE, {
        className: "type",
        excludeBegin: !0,
        begin: "\\|\\s*",
        end: "\\w+"
      }, {
        begin: /[-=]>/
      }]
    }
  }
  MB2.exports = ft5
})
// @from(Start 4083277, End 4085154)
yB2 = Y((ZH3, LB2) => {
  function qt5(I) {
    return {
      name: "Caché Object Script",
      case_insensitive: !0,
      aliases: ["cls"],
      keywords: "property parameter class classmethod clientmethod extends as break catch close continue do d|0 else elseif for goto halt hang h|0 if job j|0 kill k|0 lock l|0 merge new open quit q|0 read r|0 return set s|0 tcommit throw trollback try tstart use view while write w|0 xecute x|0 zkill znspace zn ztrap zwrite zw zzdump zzwrite print zbreak zinsert zload zprint zremove zsave zzprint mv mvcall mvcrt mvdim mvprint zquit zsync ascii",
      contains: [{
        className: "number",
        begin: "\\b(\\d+(\\.\\d*)?|\\.\\d+)",
        relevance: 0
      }, {
        className: "string",
        variants: [{
          begin: '"',
          end: '"',
          contains: [{
            begin: '""',
            relevance: 0
          }]
        }]
      }, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, {
        className: "comment",
        begin: /;/,
        end: "$",
        relevance: 0
      }, {
        className: "built_in",
        begin: /(?:\$\$?|\.\.)\^?[a-zA-Z]+/
      }, {
        className: "built_in",
        begin: /\$\$\$[a-zA-Z]+/
      }, {
        className: "built_in",
        begin: /%[a-z]+(?:\.[a-z]+)*/
      }, {
        className: "symbol",
        begin: /\^%?[a-zA-Z][\w]*/
      }, {
        className: "keyword",
        begin: /##class|##super|#define|#dim/
      }, {
        begin: /&sql\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        subLanguage: "sql"
      }, {
        begin: /&(js|jscript|javascript)</,
        end: />/,
        excludeBegin: !0,
        excludeEnd: !0,
        subLanguage: "javascript"
      }, {
        begin: /&html<\s*</,
        end: />\s*>/,
        subLanguage: "xml"
      }]
    }
  }
  LB2.exports = qt5
})
// @from(Start 4085160, End 4092229)
$B2 = Y((CH3, PB2) => {
  function Rt5(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function Ut5(I) {
    return hF1("(?=", I, ")")
  }

  function Sa(I) {
    return hF1("(", I, ")?")
  }

  function hF1(...I) {
    return I.map((G) => Rt5(G)).join("")
  }

  function vt5(I) {
    let d = I.COMMENT("//", "$", {
        contains: [{
          begin: /\\\n/
        }]
      }),
      G = "decltype\\(auto\\)",
      Z = "[a-zA-Z_]\\w*::",
      C = "<[^<>]+>",
      W = "(decltype\\(auto\\)|" + Sa("[a-zA-Z_]\\w*::") + "[a-zA-Z_]\\w*" + Sa("<[^<>]+>") + ")",
      w = {
        className: "keyword",
        begin: "\\b[a-z\\d_]*_t\\b"
      },
      B = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",
      A = {
        className: "string",
        variants: [{
          begin: '(u8?|U|L)?"',
          end: '"',
          illegal: "\\n",
          contains: [I.BACKSLASH_ESCAPE]
        }, {
          begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
          end: "'",
          illegal: "."
        }, I.END_SAME_AS_BEGIN({
          begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
          end: /\)([^()\\ ]{0,16})"/
        })]
      },
      V = {
        className: "number",
        variants: [{
          begin: "\\b(0b[01']+)"
        }, {
          begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
        }, {
          begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
        }],
        relevance: 0
      },
      X = {
        className: "meta",
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: {
          "meta-keyword": "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
        },
        contains: [{
          begin: /\\\n/,
          relevance: 0
        }, I.inherit(A, {
          className: "meta-string"
        }), {
          className: "meta-string",
          begin: /<.*?>/
        }, d, I.C_BLOCK_COMMENT_MODE]
      },
      _ = {
        className: "title",
        begin: Sa("[a-zA-Z_]\\w*::") + I.IDENT_RE,
        relevance: 0
      },
      F = Sa("[a-zA-Z_]\\w*::") + I.IDENT_RE + "\\s*\\(",
      J = {
        keyword: "int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",
        built_in: "_Bool _Complex _Imaginary",
        _relevance_hints: ["asin", "atan2", "atan", "calloc", "ceil", "cosh", "cos", "exit", "exp", "fabs", "floor", "fmod", "fprintf", "fputs", "free", "frexp", "auto_ptr", "deque", "list", "queue", "stack", "vector", "map", "set", "pair", "bitset", "multiset", "multimap", "unordered_set", "fscanf", "future", "isalnum", "isalpha", "iscntrl", "isdigit", "isgraph", "islower", "isprint", "ispunct", "isspace", "isupper", "isxdigit", "tolower", "toupper", "labs", "ldexp", "log10", "log", "malloc", "realloc", "memchr", "memcmp", "memcpy", "memset", "modf", "pow", "printf", "putchar", "puts", "scanf", "sinh", "sin", "snprintf", "sprintf", "sqrt", "sscanf", "strcat", "strchr", "strcmp", "strcpy", "strcspn", "strlen", "strncat", "strncmp", "strncpy", "strpbrk", "strrchr", "strspn", "strstr", "tanh", "tan", "unordered_map", "unordered_multiset", "unordered_multimap", "priority_queue", "make_pair", "array", "shared_ptr", "abort", "terminate", "abs", "acos", "vfprintf", "vprintf", "vsprintf", "endl", "initializer_list", "unique_ptr", "complex", "imaginary", "std", "string", "wstring", "cin", "cout", "cerr", "clog", "stdin", "stdout", "stderr", "stringstream", "istringstream", "ostringstream"],
        literal: "true false nullptr NULL"
      },
      K = {
        className: "function.dispatch",
        relevance: 0,
        keywords: J,
        begin: hF1(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!while)/, I.IDENT_RE, Ut5(/\s*\(/))
      },
      Q = [K, X, w, d, I.C_BLOCK_COMMENT_MODE, V, A],
      E = {
        variants: [{
          begin: /=/,
          end: /;/
        }, {
          begin: /\(/,
          end: /\)/
        }, {
          beginKeywords: "new throw return else",
          end: /;/
        }],
        keywords: J,
        contains: Q.concat([{
          begin: /\(/,
          end: /\)/,
          keywords: J,
          contains: Q.concat(["self"]),
          relevance: 0
        }]),
        relevance: 0
      },
      S = {
        className: "function",
        begin: "(" + W + "[\\*&\\s]+)+" + F,
        returnBegin: !0,
        end: /[{;=]/,
        excludeEnd: !0,
        keywords: J,
        illegal: /[^\w\s\*&:<>.]/,
        contains: [{
          begin: "decltype\\(auto\\)",
          keywords: J,
          relevance: 0
        }, {
          begin: F,
          returnBegin: !0,
          contains: [_],
          relevance: 0
        }, {
          begin: /::/,
          relevance: 0
        }, {
          begin: /:/,
          endsWithParent: !0,
          contains: [A, V]
        }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: J,
          relevance: 0,
          contains: [d, I.C_BLOCK_COMMENT_MODE, A, V, w, {
            begin: /\(/,
            end: /\)/,
            keywords: J,
            relevance: 0,
            contains: ["self", d, I.C_BLOCK_COMMENT_MODE, A, V, w]
          }]
        }, w, d, I.C_BLOCK_COMMENT_MODE, X]
      };
    return {
      name: "C++",
      aliases: ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"],
      keywords: J,
      illegal: "</",
      classNameAliases: {
        "function.dispatch": "built_in"
      },
      contains: [].concat(E, S, K, Q, [X, {
        begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
        end: ">",
        keywords: J,
        contains: ["self", w]
      }, {
        begin: I.IDENT_RE + "::",
        keywords: J
      }, {
        className: "class",
        beginKeywords: "enum class struct union",
        end: /[{;:<>=]/,
        contains: [{
          beginKeywords: "final class struct"
        }, I.TITLE_MODE]
      }]),
      exports: {
        preprocessor: X,
        strings: A,
        keywords: J
      }
    }
  }
  PB2.exports = vt5
})
// @from(Start 4092235, End 4094497)
TB2 = Y((WH3, uB2) => {
  function Et5(I) {
    let G = "group clone ms master location colocation order fencing_topology rsc_ticket acl_target acl_group user role tag xml",
      Z = "property rsc_defaults op_defaults",
      C = "params meta operations op rule attributes utilization",
      W = "read write deny defined not_defined in_range date spec in ref reference attribute type xpath version and or lt gt tag lte gte eq ne \\",
      w = "number string",
      B = "Master Started Slave Stopped start promote demote stop monitor true false";
    return {
      name: "crmsh",
      aliases: ["crm", "pcmk"],
      case_insensitive: !0,
      keywords: {
        keyword: "params meta operations op rule attributes utilization " + W + " number string",
        literal: "Master Started Slave Stopped start promote demote stop monitor true false"
      },
      contains: [I.HASH_COMMENT_MODE, {
        beginKeywords: "node",
        starts: {
          end: "\\s*([\\w_-]+:)?",
          starts: {
            className: "title",
            end: "\\s*[\\$\\w_][\\w_-]*"
          }
        }
      }, {
        beginKeywords: "primitive rsc_template",
        starts: {
          className: "title",
          end: "\\s*[\\$\\w_][\\w_-]*",
          starts: {
            end: "\\s*@?[\\w_][\\w_\\.:-]*"
          }
        }
      }, {
        begin: "\\b(" + G.split(" ").join("|") + ")\\s+",
        keywords: G,
        starts: {
          className: "title",
          end: "[\\$\\w_][\\w_-]*"
        }
      }, {
        beginKeywords: "property rsc_defaults op_defaults",
        starts: {
          className: "title",
          end: "\\s*([\\w_-]+:)?"
        }
      }, I.QUOTE_STRING_MODE, {
        className: "meta",
        begin: "(ocf|systemd|service|lsb):[\\w_:-]+",
        relevance: 0
      }, {
        className: "number",
        begin: "\\b\\d+(\\.\\d+)?(ms|s|h|m)?",
        relevance: 0
      }, {
        className: "literal",
        begin: "[-]?(infinity|inf)",
        relevance: 0
      }, {
        className: "attr",
        begin: /([A-Za-z$_#][\w_-]+)=/,
        relevance: 0
      }, {
        className: "tag",
        begin: "</?",
        end: "/?>",
        relevance: 0
      }]
    }
  }
  uB2.exports = Et5
})
// @from(Start 4094503, End 4100677)
mB2 = Y((wH3, OB2) => {
  function Mt5(I) {
    let w = {
        $pattern: "[a-zA-Z_]\\w*[!?=]?",
        keyword: "abstract alias annotation as as? asm begin break case class def do else elsif end ensure enum extend for fun if include instance_sizeof is_a? lib macro module next nil? of out pointerof private protected rescue responds_to? return require select self sizeof struct super then type typeof union uninitialized unless until verbatim when while with yield __DIR__ __END_LINE__ __FILE__ __LINE__",
        literal: "false nil true"
      },
      B = {
        className: "subst",
        begin: /#\{/,
        end: /\}/,
        keywords: w
      },
      A = {
        className: "template-variable",
        variants: [{
          begin: "\\{\\{",
          end: "\\}\\}"
        }, {
          begin: "\\{%",
          end: "%\\}"
        }],
        keywords: w
      };

    function V(Q, E) {
      let S = [{
        begin: Q,
        end: E
      }];
      return S[0].contains = S, S
    }
    let X = {
        className: "string",
        contains: [I.BACKSLASH_ESCAPE, B],
        variants: [{
          begin: /'/,
          end: /'/
        }, {
          begin: /"/,
          end: /"/
        }, {
          begin: /`/,
          end: /`/
        }, {
          begin: "%[Qwi]?\\(",
          end: "\\)",
          contains: V("\\(", "\\)")
        }, {
          begin: "%[Qwi]?\\[",
          end: "\\]",
          contains: V("\\[", "\\]")
        }, {
          begin: "%[Qwi]?\\{",
          end: /\}/,
          contains: V(/\{/, /\}/)
        }, {
          begin: "%[Qwi]?<",
          end: ">",
          contains: V("<", ">")
        }, {
          begin: "%[Qwi]?\\|",
          end: "\\|"
        }, {
          begin: /<<-\w+$/,
          end: /^\s*\w+$/
        }],
        relevance: 0
      },
      _ = {
        className: "string",
        variants: [{
          begin: "%q\\(",
          end: "\\)",
          contains: V("\\(", "\\)")
        }, {
          begin: "%q\\[",
          end: "\\]",
          contains: V("\\[", "\\]")
        }, {
          begin: "%q\\{",
          end: /\}/,
          contains: V(/\{/, /\}/)
        }, {
          begin: "%q<",
          end: ">",
          contains: V("<", ">")
        }, {
          begin: "%q\\|",
          end: "\\|"
        }, {
          begin: /<<-'\w+'$/,
          end: /^\s*\w+$/
        }],
        relevance: 0
      },
      F = {
        begin: "(?!%\\})(" + I.RE_STARTERS_RE + "|\\n|\\b(case|if|select|unless|until|when|while)\\b)\\s*",
        keywords: "case if select unless until when while",
        contains: [{
          className: "regexp",
          contains: [I.BACKSLASH_ESCAPE, B],
          variants: [{
            begin: "//[a-z]*",
            relevance: 0
          }, {
            begin: "/(?!\\/)",
            end: "/[a-z]*"
          }]
        }],
        relevance: 0
      },
      g = {
        className: "regexp",
        contains: [I.BACKSLASH_ESCAPE, B],
        variants: [{
          begin: "%r\\(",
          end: "\\)",
          contains: V("\\(", "\\)")
        }, {
          begin: "%r\\[",
          end: "\\]",
          contains: V("\\[", "\\]")
        }, {
          begin: "%r\\{",
          end: /\}/,
          contains: V(/\{/, /\}/)
        }, {
          begin: "%r<",
          end: ">",
          contains: V("<", ">")
        }, {
          begin: "%r\\|",
          end: "\\|"
        }],
        relevance: 0
      },
      J = {
        className: "meta",
        begin: "@\\[",
        end: "\\]",
        contains: [I.inherit(I.QUOTE_STRING_MODE, {
          className: "meta-string"
        })]
      },
      K = [A, X, _, g, F, J, I.HASH_COMMENT_MODE, {
        className: "class",
        beginKeywords: "class module struct",
        end: "$|;",
        illegal: /=/,
        contains: [I.HASH_COMMENT_MODE, I.inherit(I.TITLE_MODE, {
          begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|!)?"
        }), {
          begin: "<"
        }]
      }, {
        className: "class",
        beginKeywords: "lib enum union",
        end: "$|;",
        illegal: /=/,
        contains: [I.HASH_COMMENT_MODE, I.inherit(I.TITLE_MODE, {
          begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|!)?"
        })]
      }, {
        beginKeywords: "annotation",
        end: "$|;",
        illegal: /=/,
        contains: [I.HASH_COMMENT_MODE, I.inherit(I.TITLE_MODE, {
          begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|!)?"
        })],
        relevance: 2
      }, {
        className: "function",
        beginKeywords: "def",
        end: /\B\b/,
        contains: [I.inherit(I.TITLE_MODE, {
          begin: "[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|[=!]~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~|]|//|//=|&[-+*]=?|&\\*\\*|\\[\\][=?]?",
          endsParent: !0
        })]
      }, {
        className: "function",
        beginKeywords: "fun macro",
        end: /\B\b/,
        contains: [I.inherit(I.TITLE_MODE, {
          begin: "[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|[=!]~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~|]|//|//=|&[-+*]=?|&\\*\\*|\\[\\][=?]?",
          endsParent: !0
        })],
        relevance: 2
      }, {
        className: "symbol",
        begin: I.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
        relevance: 0
      }, {
        className: "symbol",
        begin: ":",
        contains: [X, {
          begin: "[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|[=!]~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~|]|//|//=|&[-+*]=?|&\\*\\*|\\[\\][=?]?"
        }],
        relevance: 0
      }, {
        className: "number",
        variants: [{
          begin: "\\b0b([01_]+)(_?[ui](8|16|32|64|128))?"
        }, {
          begin: "\\b0o([0-7_]+)(_?[ui](8|16|32|64|128))?"
        }, {
          begin: "\\b0x([A-Fa-f0-9_]+)(_?[ui](8|16|32|64|128))?"
        }, {
          begin: "\\b([1-9][0-9_]*[0-9]|[0-9])(\\.[0-9][0-9_]*)?([eE]_?[-+]?[0-9_]*)?(_?f(32|64))?(?!_)"
        }, {
          begin: "\\b([1-9][0-9_]*|0)(_?[ui](8|16|32|64|128))?"
        }],
        relevance: 0
      }];
    return B.contains = K, A.contains = K.slice(1), {
      name: "Crystal",
      aliases: ["cr"],
      keywords: w,
      contains: K
    }
  }
  OB2.exports = Mt5
})
// @from(Start 4100683, End 4106576)
bB2 = Y((BH3, lB2) => {
  function St5(I) {
    let d = ["bool", "byte", "char", "decimal", "delegate", "double", "dynamic", "enum", "float", "int", "long", "nint", "nuint", "object", "sbyte", "short", "string", "ulong", "uint", "ushort"],
      G = ["public", "private", "protected", "static", "internal", "protected", "abstract", "async", "extern", "override", "unsafe", "virtual", "new", "sealed", "partial"],
      Z = ["default", "false", "null", "true"],
      C = ["abstract", "as", "base", "break", "case", "class", "const", "continue", "do", "else", "event", "explicit", "extern", "finally", "fixed", "for", "foreach", "goto", "if", "implicit", "in", "interface", "internal", "is", "lock", "namespace", "new", "operator", "out", "override", "params", "private", "protected", "public", "readonly", "record", "ref", "return", "sealed", "sizeof", "stackalloc", "static", "struct", "switch", "this", "throw", "try", "typeof", "unchecked", "unsafe", "using", "virtual", "void", "volatile", "while"],
      W = ["add", "alias", "and", "ascending", "async", "await", "by", "descending", "equals", "from", "get", "global", "group", "init", "into", "join", "let", "nameof", "not", "notnull", "on", "or", "orderby", "partial", "remove", "select", "set", "unmanaged", "value|0", "var", "when", "where", "with", "yield"],
      w = {
        keyword: C.concat(W),
        built_in: d,
        literal: Z
      },
      B = I.inherit(I.TITLE_MODE, {
        begin: "[a-zA-Z](\\.?\\w)*"
      }),
      A = {
        className: "number",
        variants: [{
          begin: "\\b(0b[01']+)"
        }, {
          begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
        }, {
          begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
        }],
        relevance: 0
      },
      V = {
        className: "string",
        begin: '@"',
        end: '"',
        contains: [{
          begin: '""'
        }]
      },
      X = I.inherit(V, {
        illegal: /\n/
      }),
      _ = {
        className: "subst",
        begin: /\{/,
        end: /\}/,
        keywords: w
      },
      F = I.inherit(_, {
        illegal: /\n/
      }),
      g = {
        className: "string",
        begin: /\$"/,
        end: '"',
        illegal: /\n/,
        contains: [{
          begin: /\{\{/
        }, {
          begin: /\}\}/
        }, I.BACKSLASH_ESCAPE, F]
      },
      J = {
        className: "string",
        begin: /\$@"/,
        end: '"',
        contains: [{
          begin: /\{\{/
        }, {
          begin: /\}\}/
        }, {
          begin: '""'
        }, _]
      },
      K = I.inherit(J, {
        illegal: /\n/,
        contains: [{
          begin: /\{\{/
        }, {
          begin: /\}\}/
        }, {
          begin: '""'
        }, F]
      });
    _.contains = [J, g, V, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, A, I.C_BLOCK_COMMENT_MODE], F.contains = [K, g, X, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, A, I.inherit(I.C_BLOCK_COMMENT_MODE, {
      illegal: /\n/
    })];
    let Q = {
        variants: [J, g, V, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE]
      },
      E = {
        begin: "<",
        end: ">",
        contains: [{
          beginKeywords: "in out"
        }, B]
      },
      S = I.IDENT_RE + "(<" + I.IDENT_RE + "(\\s*,\\s*" + I.IDENT_RE + ")*>)?(\\[\\])?",
      P = {
        begin: "@" + I.IDENT_RE,
        relevance: 0
      };
    return {
      name: "C#",
      aliases: ["cs", "c#"],
      keywords: w,
      illegal: /::/,
      contains: [I.COMMENT("///", "$", {
        returnBegin: !0,
        contains: [{
          className: "doctag",
          variants: [{
            begin: "///",
            relevance: 0
          }, {
            begin: "<!--|-->"
          }, {
            begin: "</?",
            end: ">"
          }]
        }]
      }), I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, {
        className: "meta",
        begin: "#",
        end: "$",
        keywords: {
          "meta-keyword": "if else elif endif define undef warning error line region endregion pragma checksum"
        }
      }, Q, A, {
        beginKeywords: "class interface",
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:,]/,
        contains: [{
          beginKeywords: "where class"
        }, B, E, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE]
      }, {
        beginKeywords: "namespace",
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:]/,
        contains: [B, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE]
      }, {
        beginKeywords: "record",
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:]/,
        contains: [B, E, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE]
      }, {
        className: "meta",
        begin: "^\\s*\\[",
        excludeBegin: !0,
        end: "\\]",
        excludeEnd: !0,
        contains: [{
          className: "meta-string",
          begin: /"/,
          end: /"/
        }]
      }, {
        beginKeywords: "new return throw await else",
        relevance: 0
      }, {
        className: "function",
        begin: "(" + S + "\\s+)+" + I.IDENT_RE + "\\s*(<.+>\\s*)?\\(",
        returnBegin: !0,
        end: /\s*[{;=]/,
        excludeEnd: !0,
        keywords: w,
        contains: [{
          beginKeywords: G.join(" "),
          relevance: 0
        }, {
          begin: I.IDENT_RE + "\\s*(<.+>\\s*)?\\(",
          returnBegin: !0,
          contains: [I.TITLE_MODE, E],
          relevance: 0
        }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: w,
          relevance: 0,
          contains: [Q, A, I.C_BLOCK_COMMENT_MODE]
        }, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE]
      }, P]
    }
  }
  lB2.exports = St5
})
// @from(Start 4106582, End 4107185)
jB2 = Y((AH3, hB2) => {
  function Lt5(I) {
    return {
      name: "CSP",
      case_insensitive: !1,
      keywords: {
        $pattern: "[a-zA-Z][a-zA-Z0-9_-]*",
        keyword: "base-uri child-src connect-src default-src font-src form-action frame-ancestors frame-src img-src media-src object-src plugin-types report-uri sandbox script-src style-src"
      },
      contains: [{
        className: "string",
        begin: "'",
        end: "'"
      }, {
        className: "attribute",
        begin: "^Content",
        end: ":",
        excludeEnd: !0
      }]
    }
  }
  hB2.exports = Lt5
})
// @from(Start 4107191, End 4115687)
xB2 = Y((VH3, kB2) => {
  var yt5 = (I) => {
      return {
        IMPORTANT: {
          className: "meta",
          begin: "!important"
        },
        HEXCOLOR: {
          className: "number",
          begin: "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})"
        },
        ATTRIBUTE_SELECTOR_MODE: {
          className: "selector-attr",
          begin: /\[/,
          end: /\]/,
          illegal: "$",
          contains: [I.APOS_STRING_MODE, I.QUOTE_STRING_MODE]
        }
      }
    },
    Pt5 = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"],
    $t5 = ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"],
    ut5 = ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"],
    Tt5 = ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"],
    Ot5 = ["align-content", "align-items", "align-self", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "auto", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "clip-path", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-variant", "font-variant-ligatures", "font-variation-settings", "font-weight", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inherit", "initial", "justify-content", "left", "letter-spacing", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "mask", "max-height", "max-width", "min-height", "min-width", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "right", "src", "tab-size", "table-layout", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index"].reverse();

  function mt5(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function lt5(I) {
    return bt5("(?=", I, ")")
  }

  function bt5(...I) {
    return I.map((G) => mt5(G)).join("")
  }

  function ht5(I) {
    let d = yt5(I),
      G = {
        className: "built_in",
        begin: /[\w-]+(?=\()/
      },
      Z = {
        begin: /-(webkit|moz|ms|o)-(?=[a-z])/
      },
      C = "and or not only",
      W = /@-?\w[\w]*(-\w+)*/,
      w = "[a-zA-Z-][a-zA-Z0-9_-]*",
      B = [I.APOS_STRING_MODE, I.QUOTE_STRING_MODE];
    return {
      name: "CSS",
      case_insensitive: !0,
      illegal: /[=|'\$]/,
      keywords: {
        keyframePosition: "from to"
      },
      classNameAliases: {
        keyframePosition: "selector-tag"
      },
      contains: [I.C_BLOCK_COMMENT_MODE, Z, I.CSS_NUMBER_MODE, {
        className: "selector-id",
        begin: /#[A-Za-z0-9_-]+/,
        relevance: 0
      }, {
        className: "selector-class",
        begin: "\\.[a-zA-Z-][a-zA-Z0-9_-]*",
        relevance: 0
      }, d.ATTRIBUTE_SELECTOR_MODE, {
        className: "selector-pseudo",
        variants: [{
          begin: ":(" + ut5.join("|") + ")"
        }, {
          begin: "::(" + Tt5.join("|") + ")"
        }]
      }, {
        className: "attribute",
        begin: "\\b(" + Ot5.join("|") + ")\\b"
      }, {
        begin: ":",
        end: "[;}]",
        contains: [d.HEXCOLOR, d.IMPORTANT, I.CSS_NUMBER_MODE, ...B, {
          begin: /(url|data-uri)\(/,
          end: /\)/,
          relevance: 0,
          keywords: {
            built_in: "url data-uri"
          },
          contains: [{
            className: "string",
            begin: /[^)]/,
            endsWithParent: !0,
            excludeEnd: !0
          }]
        }, G]
      }, {
        begin: lt5(/@/),
        end: "[{;]",
        relevance: 0,
        illegal: /:/,
        contains: [{
          className: "keyword",
          begin: W
        }, {
          begin: /\s/,
          endsWithParent: !0,
          excludeEnd: !0,
          relevance: 0,
          keywords: {
            $pattern: /[a-z-]+/,
            keyword: "and or not only",
            attribute: $t5.join(" ")
          },
          contains: [{
            begin: /[a-z-]+(?=:)/,
            className: "attribute"
          }, ...B, I.CSS_NUMBER_MODE]
        }]
      }, {
        className: "selector-tag",
        begin: "\\b(" + Pt5.join("|") + ")\\b"
      }]
    }
  }
  kB2.exports = ht5
})
// @from(Start 4115693, End 4119149)
pB2 = Y((XH3, cB2) => {
  function jt5(I) {
    let d = {
        $pattern: I.UNDERSCORE_IDENT_RE,
        keyword: "abstract alias align asm assert auto body break byte case cast catch class const continue debug default delete deprecated do else enum export extern final finally for foreach foreach_reverse|10 goto if immutable import in inout int interface invariant is lazy macro mixin module new nothrow out override package pragma private protected public pure ref return scope shared static struct super switch synchronized template this throw try typedef typeid typeof union unittest version void volatile while with __FILE__ __LINE__ __gshared|10 __thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__",
        built_in: "bool cdouble cent cfloat char creal dchar delegate double dstring float function idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar wstring",
        literal: "false null true"
      },
      G = "(0|[1-9][\\d_]*)",
      Z = "(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)",
      C = "0[bB][01_]+",
      W = "([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)",
      w = "0[xX]([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)",
      B = "([eE][+-]?(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d))",
      A = "((0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)(\\.\\d*|" + B + ")|\\d+\\.(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)|\\.(0|[1-9][\\d_]*)" + B + "?)",
      V = "(0[xX](([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)\\.([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)|\\.?([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*))[pP][+-]?(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d))",
      X = "((0|[1-9][\\d_]*)|0[bB][01_]+|" + w + ")",
      _ = "(" + V + "|" + A + ")",
      F = `\\\\(['"\\?\\\\abfnrtv]|u[\\dA-Fa-f]{4}|[0-7]{1,3}|x[\\dA-Fa-f]{2}|U[\\dA-Fa-f]{8})|&[a-zA-Z\\d]{2,};`,
      g = {
        className: "number",
        begin: "\\b" + X + "(L|u|U|Lu|LU|uL|UL)?",
        relevance: 0
      },
      J = {
        className: "number",
        begin: "\\b(" + _ + "([fF]|L|i|[fF]i|Li)?|" + X + "(i|[fF]i|Li))",
        relevance: 0
      },
      K = {
        className: "string",
        begin: "'(" + F + "|.)",
        end: "'",
        illegal: "."
      },
      E = {
        className: "string",
        begin: '"',
        contains: [{
          begin: F,
          relevance: 0
        }],
        end: '"[cwd]?'
      },
      S = {
        className: "string",
        begin: '[rq]"',
        end: '"[cwd]?',
        relevance: 5
      },
      P = {
        className: "string",
        begin: "`",
        end: "`[cwd]?"
      },
      $ = {
        className: "string",
        begin: 'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?',
        relevance: 10
      },
      h = {
        className: "string",
        begin: 'q"\\{',
        end: '\\}"'
      },
      O = {
        className: "meta",
        begin: "^#!",
        end: "$",
        relevance: 5
      },
      T = {
        className: "meta",
        begin: "#(line)",
        end: "$",
        relevance: 5
      },
      V1 = {
        className: "keyword",
        begin: "@[a-zA-Z_][a-zA-Z_\\d]*"
      },
      c = I.COMMENT("\\/\\+", "\\+\\/", {
        contains: ["self"],
        relevance: 10
      });
    return {
      name: "D",
      keywords: d,
      contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, c, $, E, S, P, h, J, g, K, O, T, V1]
    }
  }
  cB2.exports = jt5
})
// @from(Start 4119155, End 4122836)
nB2 = Y((YH3, iB2) => {
  function kt5(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function xt5(...I) {
    return I.map((G) => kt5(G)).join("")
  }

  function ct5(I) {
    let d = {
        begin: /<\/?[A-Za-z_]/,
        end: ">",
        subLanguage: "xml",
        relevance: 0
      },
      G = {
        begin: "^[-\\*]{3,}",
        end: "$"
      },
      Z = {
        className: "code",
        variants: [{
          begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*"
        }, {
          begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*"
        }, {
          begin: "```",
          end: "```+[ ]*$"
        }, {
          begin: "~~~",
          end: "~~~+[ ]*$"
        }, {
          begin: "`.+?`"
        }, {
          begin: "(?=^( {4}|\\t))",
          contains: [{
            begin: "^( {4}|\\t)",
            end: "(\\n)$"
          }],
          relevance: 0
        }]
      },
      C = {
        className: "bullet",
        begin: "^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",
        end: "\\s+",
        excludeEnd: !0
      },
      W = {
        begin: /^\[[^\n]+\]:/,
        returnBegin: !0,
        contains: [{
          className: "symbol",
          begin: /\[/,
          end: /\]/,
          excludeBegin: !0,
          excludeEnd: !0
        }, {
          className: "link",
          begin: /:\s*/,
          end: /$/,
          excludeBegin: !0
        }]
      },
      B = {
        variants: [{
          begin: /\[.+?\]\[.*?\]/,
          relevance: 0
        }, {
          begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
          relevance: 2
        }, {
          begin: xt5(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/),
          relevance: 2
        }, {
          begin: /\[.+?\]\([./?&#].*?\)/,
          relevance: 1
        }, {
          begin: /\[.+?\]\(.*?\)/,
          relevance: 0
        }],
        returnBegin: !0,
        contains: [{
          className: "string",
          relevance: 0,
          begin: "\\[",
          end: "\\]",
          excludeBegin: !0,
          returnEnd: !0
        }, {
          className: "link",
          relevance: 0,
          begin: "\\]\\(",
          end: "\\)",
          excludeBegin: !0,
          excludeEnd: !0
        }, {
          className: "symbol",
          relevance: 0,
          begin: "\\]\\[",
          end: "\\]",
          excludeBegin: !0,
          excludeEnd: !0
        }]
      },
      A = {
        className: "strong",
        contains: [],
        variants: [{
          begin: /_{2}/,
          end: /_{2}/
        }, {
          begin: /\*{2}/,
          end: /\*{2}/
        }]
      },
      V = {
        className: "emphasis",
        contains: [],
        variants: [{
          begin: /\*(?!\*)/,
          end: /\*/
        }, {
          begin: /_(?!_)/,
          end: /_/,
          relevance: 0
        }]
      };
    A.contains.push(V), V.contains.push(A);
    let X = [d, B];
    return A.contains = A.contains.concat(X), V.contains = V.contains.concat(X), X = X.concat(A, V), {
      name: "Markdown",
      aliases: ["md", "mkdown", "mkd"],
      contains: [{
        className: "section",
        variants: [{
          begin: "^#{1,6}",
          end: "$",
          contains: X
        }, {
          begin: "(?=^.+?\\n[=-]{2,}$)",
          contains: [{
            begin: "^[=-]*$"
          }, {
            begin: "^",
            end: "\\n",
            contains: X
          }]
        }]
      }, d, C, A, V, {
        className: "quote",
        begin: "^>\\s+",
        contains: X,
        end: "$"
      }, Z, G, B, W]
    }
  }
  iB2.exports = ct5
})
// @from(Start 4122842, End 4125728)
aB2 = Y((_H3, rB2) => {
  function pt5(I) {
    let d = {
        className: "subst",
        variants: [{
          begin: "\\$[A-Za-z0-9_]+"
        }]
      },
      G = {
        className: "subst",
        variants: [{
          begin: /\$\{/,
          end: /\}/
        }],
        keywords: "true false null this is new super"
      },
      Z = {
        className: "string",
        variants: [{
          begin: "r'''",
          end: "'''"
        }, {
          begin: 'r"""',
          end: '"""'
        }, {
          begin: "r'",
          end: "'",
          illegal: "\\n"
        }, {
          begin: 'r"',
          end: '"',
          illegal: "\\n"
        }, {
          begin: "'''",
          end: "'''",
          contains: [I.BACKSLASH_ESCAPE, d, G]
        }, {
          begin: '"""',
          end: '"""',
          contains: [I.BACKSLASH_ESCAPE, d, G]
        }, {
          begin: "'",
          end: "'",
          illegal: "\\n",
          contains: [I.BACKSLASH_ESCAPE, d, G]
        }, {
          begin: '"',
          end: '"',
          illegal: "\\n",
          contains: [I.BACKSLASH_ESCAPE, d, G]
        }]
      };
    G.contains = [I.C_NUMBER_MODE, Z];
    let C = ["Comparable", "DateTime", "Duration", "Function", "Iterable", "Iterator", "List", "Map", "Match", "Object", "Pattern", "RegExp", "Set", "Stopwatch", "String", "StringBuffer", "StringSink", "Symbol", "Type", "Uri", "bool", "double", "int", "num", "Element", "ElementList"],
      W = C.map((B) => `${B}?`);
    return {
      name: "Dart",
      keywords: {
        keyword: "abstract as assert async await break case catch class const continue covariant default deferred do dynamic else enum export extends extension external factory false final finally for Function get hide if implements import in inferface is late library mixin new null on operator part required rethrow return set show static super switch sync this throw true try typedef var void while with yield",
        built_in: C.concat(W).concat(["Never", "Null", "dynamic", "print", "document", "querySelector", "querySelectorAll", "window"]),
        $pattern: /[A-Za-z][A-Za-z0-9_]*\??/
      },
      contains: [Z, I.COMMENT(/\/\*\*(?!\/)/, /\*\//, {
        subLanguage: "markdown",
        relevance: 0
      }), I.COMMENT(/\/{3,} ?/, /$/, {
        contains: [{
          subLanguage: "markdown",
          begin: ".",
          end: "$",
          relevance: 0
        }]
      }), I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, {
        className: "class",
        beginKeywords: "class interface",
        end: /\{/,
        excludeEnd: !0,
        contains: [{
          beginKeywords: "extends implements"
        }, I.UNDERSCORE_TITLE_MODE]
      }, I.C_NUMBER_MODE, {
        className: "meta",
        begin: "@[A-Za-z]+"
      }, {
        begin: "=>"
      }]
    }
  }
  rB2.exports = pt5
})
// @from(Start 4125734, End 4128348)
oB2 = Y((DH3, sB2) => {
  function it5(I) {
    let d = "exports register file shl array record property for mod while set ally label uses raise not stored class safecall var interface or private static exit index inherited to else stdcall override shr asm far resourcestring finalization packed virtual out and protected library do xorwrite goto near function end div overload object unit begin string on inline repeat until destructor write message program with read initialization except default nil if case cdecl in downto threadvar of try pascal const external constructor type public then implementation finally published procedure absolute reintroduce operator as is abstract alias assembler bitpacked break continue cppdecl cvar enumerator experimental platform deprecated unimplemented dynamic export far16 forward generic helper implements interrupt iochecks local name nodefault noreturn nostackframe oldfpccall otherwise saveregisters softfloat specialize strict unaligned varargs ",
      G = [I.C_LINE_COMMENT_MODE, I.COMMENT(/\{/, /\}/, {
        relevance: 0
      }), I.COMMENT(/\(\*/, /\*\)/, {
        relevance: 10
      })],
      Z = {
        className: "meta",
        variants: [{
          begin: /\{\$/,
          end: /\}/
        }, {
          begin: /\(\*\$/,
          end: /\*\)/
        }]
      },
      C = {
        className: "string",
        begin: /'/,
        end: /'/,
        contains: [{
          begin: /''/
        }]
      },
      W = {
        className: "number",
        relevance: 0,
        variants: [{
          begin: "\\$[0-9A-Fa-f]+"
        }, {
          begin: "&[0-7]+"
        }, {
          begin: "%[01]+"
        }]
      },
      w = {
        className: "string",
        begin: /(#\d+)+/
      },
      B = {
        begin: I.IDENT_RE + "\\s*=\\s*class\\s*\\(",
        returnBegin: !0,
        contains: [I.TITLE_MODE]
      },
      A = {
        className: "function",
        beginKeywords: "function constructor destructor procedure",
        end: /[:;]/,
        keywords: "function constructor|10 destructor|10 procedure|10",
        contains: [I.TITLE_MODE, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: d,
          contains: [C, w, Z].concat(G)
        }, Z].concat(G)
      };
    return {
      name: "Delphi",
      aliases: ["dpr", "dfm", "pas", "pascal", "freepascal", "lazarus", "lpr", "lfm"],
      case_insensitive: !0,
      keywords: d,
      illegal: /"|\$[G-Zg-z]|\/\*|<\/|\|/,
      contains: [C, w, I.NUMBER_MODE, W, B, A, Z].concat(G)
    }
  }
  sB2.exports = it5
})
// @from(Start 4128354, End 4129520)
tB2 = Y((HH3, eB2) => {
  function nt5(I) {
    return {
      name: "Diff",
      aliases: ["patch"],
      contains: [{
        className: "meta",
        relevance: 10,
        variants: [{
          begin: /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/
        }, {
          begin: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
        }, {
          begin: /^--- +\d+,\d+ +----$/
        }]
      }, {
        className: "comment",
        variants: [{
          begin: /Index: /,
          end: /$/
        }, {
          begin: /^index/,
          end: /$/
        }, {
          begin: /={3,}/,
          end: /$/
        }, {
          begin: /^-{3}/,
          end: /$/
        }, {
          begin: /^\*{3} /,
          end: /$/
        }, {
          begin: /^\+{3}/,
          end: /$/
        }, {
          begin: /^\*{15}$/
        }, {
          begin: /^diff --git/,
          end: /$/
        }]
      }, {
        className: "addition",
        begin: /^\+/,
        end: /$/
      }, {
        className: "deletion",
        begin: /^-/,
        end: /$/
      }, {
        className: "addition",
        begin: /^!/,
        end: /$/
      }]
    }
  }
  eB2.exports = nt5
})
// @from(Start 4129526, End 4131657)
dA2 = Y((FH3, IA2) => {
  function rt5(I) {
    let d = {
      begin: /\|[A-Za-z]+:?/,
      keywords: {
        name: "truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone"
      },
      contains: [I.QUOTE_STRING_MODE, I.APOS_STRING_MODE]
    };
    return {
      name: "Django",
      aliases: ["jinja"],
      case_insensitive: !0,
      subLanguage: "xml",
      contains: [I.COMMENT(/\{%\s*comment\s*%\}/, /\{%\s*endcomment\s*%\}/), I.COMMENT(/\{#/, /#\}/), {
        className: "template-tag",
        begin: /\{%/,
        end: /%\}/,
        contains: [{
          className: "name",
          begin: /\w+/,
          keywords: {
            name: "comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim"
          },
          starts: {
            endsWithParent: !0,
            keywords: "in by as",
            contains: [d],
            relevance: 0
          }
        }]
      }, {
        className: "template-variable",
        begin: /\{\{/,
        end: /\}\}/,
        contains: [d]
      }]
    }
  }
  IA2.exports = rt5
})
// @from(Start 4131663, End 4133604)
ZA2 = Y((gH3, GA2) => {
  function at5(I) {
    return {
      name: "DNS Zone",
      aliases: ["bind", "zone"],
      keywords: {
        keyword: "IN A AAAA AFSDB APL CAA CDNSKEY CDS CERT CNAME DHCID DLV DNAME DNSKEY DS HIP IPSECKEY KEY KX LOC MX NAPTR NS NSEC NSEC3 NSEC3PARAM PTR RRSIG RP SIG SOA SRV SSHFP TA TKEY TLSA TSIG TXT"
      },
      contains: [I.COMMENT(";", "$", {
        relevance: 0
      }), {
        className: "meta",
        begin: /^\$(TTL|GENERATE|INCLUDE|ORIGIN)\b/
      }, {
        className: "number",
        begin: "((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))\\b"
      }, {
        className: "number",
        begin: "((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\b"
      }, I.inherit(I.NUMBER_MODE, {
        begin: /\b\d+[dhwm]?/
      })]
    }
  }
  GA2.exports = at5
})
// @from(Start 4133610, End 4134156)
WA2 = Y((JH3, CA2) => {
  function st5(I) {
    return {
      name: "Dockerfile",
      aliases: ["docker"],
      case_insensitive: !0,
      keywords: "from maintainer expose env arg user onbuild stopsignal",
      contains: [I.HASH_COMMENT_MODE, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, I.NUMBER_MODE, {
        beginKeywords: "run cmd entrypoint volume add copy workdir label healthcheck shell",
        starts: {
          end: /[^\\]$/,
          subLanguage: "bash"
        }
      }],
      illegal: "</"
    }
  }
  CA2.exports = st5
})
// @from(Start 4134162, End 4135631)
BA2 = Y((KH3, wA2) => {
  function ot5(I) {
    let d = I.COMMENT(/^\s*@?rem\b/, /$/, {
      relevance: 10
    });
    return {
      name: "Batch file (DOS)",
      aliases: ["bat", "cmd"],
      case_insensitive: !0,
      illegal: /\/\*/,
      keywords: {
        keyword: "if else goto for in do call exit not exist errorlevel defined equ neq lss leq gtr geq",
        built_in: "prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux shift cd dir echo setlocal endlocal set pause copy append assoc at attrib break cacls cd chcp chdir chkdsk chkntfs cls cmd color comp compact convert date dir diskcomp diskcopy doskey erase fs find findstr format ftype graftabl help keyb label md mkdir mode more move path pause print popd pushd promt rd recover rem rename replace restore rmdir shift sort start subst time title tree type ver verify vol ping net ipconfig taskkill xcopy ren del"
      },
      contains: [{
        className: "variable",
        begin: /%%[^ ]|%[^ ]+?%|![^ ]+?!/
      }, {
        className: "function",
        begin: {
          className: "symbol",
          begin: "^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)",
          relevance: 0
        }.begin,
        end: "goto:eof",
        contains: [I.inherit(I.TITLE_MODE, {
          begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"
        }), d]
      }, {
        className: "number",
        begin: "\\b\\d+",
        relevance: 0
      }, d]
    }
  }
  wA2.exports = ot5
})
// @from(Start 4135637, End 4136606)
VA2 = Y((NH3, AA2) => {
  function et5(I) {
    return {
      keywords: "dsconfig",
      contains: [{
        className: "keyword",
        begin: "^dsconfig",
        end: /\s/,
        excludeEnd: !0,
        relevance: 10
      }, {
        className: "built_in",
        begin: /(list|create|get|set|delete)-(\w+)/,
        end: /\s/,
        excludeEnd: !0,
        illegal: "!@#$%^&*()",
        relevance: 10
      }, {
        className: "built_in",
        begin: /--(\w+)/,
        end: /\s/,
        excludeEnd: !0
      }, {
        className: "string",
        begin: /"/,
        end: /"/
      }, {
        className: "string",
        begin: /'/,
        end: /'/
      }, {
        className: "string",
        begin: /[\w\-?]+:\w+/,
        end: /\W/,
        relevance: 0
      }, {
        className: "string",
        begin: /\w+(\-\w+)*/,
        end: /(?=\W)/,
        relevance: 0
      }, I.HASH_COMMENT_MODE]
    }
  }
  AA2.exports = et5
})
// @from(Start 4136612, End 4138871)
YA2 = Y((zH3, XA2) => {
  function tt5(I) {
    let d = {
        className: "string",
        variants: [I.inherit(I.QUOTE_STRING_MODE, {
          begin: '((u8?|U)|L)?"'
        }), {
          begin: '(u8?|U)?R"',
          end: '"',
          contains: [I.BACKSLASH_ESCAPE]
        }, {
          begin: "'\\\\?.",
          end: "'",
          illegal: "."
        }]
      },
      G = {
        className: "number",
        variants: [{
          begin: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
        }, {
          begin: I.C_NUMBER_RE
        }],
        relevance: 0
      },
      Z = {
        className: "meta",
        begin: "#",
        end: "$",
        keywords: {
          "meta-keyword": "if else elif endif define undef ifdef ifndef"
        },
        contains: [{
          begin: /\\\n/,
          relevance: 0
        }, {
          beginKeywords: "include",
          end: "$",
          keywords: {
            "meta-keyword": "include"
          },
          contains: [I.inherit(d, {
            className: "meta-string"
          }), {
            className: "meta-string",
            begin: "<",
            end: ">",
            illegal: "\\n"
          }]
        }, d, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE]
      },
      C = {
        className: "variable",
        begin: /&[a-z\d_]*\b/
      },
      W = {
        className: "meta-keyword",
        begin: "/[a-z][a-z\\d-]*/"
      },
      w = {
        className: "symbol",
        begin: "^\\s*[a-zA-Z_][a-zA-Z\\d_]*:"
      },
      B = {
        className: "params",
        begin: "<",
        end: ">",
        contains: [G, C]
      },
      A = {
        className: "class",
        begin: /[a-zA-Z_][a-zA-Z\d_@]*\s\{/,
        end: /[{;=]/,
        returnBegin: !0,
        excludeEnd: !0
      };
    return {
      name: "Device Tree",
      keywords: "",
      contains: [{
        className: "class",
        begin: "/\\s*\\{",
        end: /\};/,
        relevance: 10,
        contains: [C, W, w, A, B, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, G, d]
      }, C, W, w, A, B, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, G, d, Z, {
        begin: I.IDENT_RE + "::",
        keywords: ""
      }]
    }
  }
  XA2.exports = tt5
})
// @from(Start 4138877, End 4139602)
DA2 = Y((QH3, _A2) => {
  function I19(I) {
    return {
      name: "Dust",
      aliases: ["dst"],
      case_insensitive: !0,
      subLanguage: "xml",
      contains: [{
        className: "template-tag",
        begin: /\{[#\/]/,
        end: /\}/,
        illegal: /;/,
        contains: [{
          className: "name",
          begin: /[a-zA-Z\.-]+/,
          starts: {
            endsWithParent: !0,
            relevance: 0,
            contains: [I.QUOTE_STRING_MODE]
          }
        }]
      }, {
        className: "template-variable",
        begin: /\{/,
        end: /\}/,
        illegal: /;/,
        keywords: "if eq ne lt lte gt gte select default math sep"
      }]
    }
  }
  _A2.exports = I19
})
// @from(Start 4139608, End 4140246)
FA2 = Y((fH3, HA2) => {
  function d19(I) {
    let d = I.COMMENT(/\(\*/, /\*\)/),
      G = {
        className: "attribute",
        begin: /^[ ]*[a-zA-Z]+([\s_-]+[a-zA-Z]+)*/
      },
      C = {
        begin: /=/,
        end: /[.;]/,
        contains: [d, {
          className: "meta",
          begin: /\?.*\?/
        }, {
          className: "string",
          variants: [I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, {
            begin: "`",
            end: "`"
          }]
        }]
      };
    return {
      name: "Extended Backus-Naur Form",
      illegal: /\S/,
      contains: [d, G, C]
    }
  }
  HA2.exports = d19
})
// @from(Start 4140252, End 4144482)
JA2 = Y((qH3, gA2) => {
  function G19(I) {
    let Z = {
        $pattern: "[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?",
        keyword: "and false then defined module in return redo retry end for true self when next until do begin unless nil break not case cond alias while ensure or include use alias fn quote require import with|0"
      },
      C = {
        className: "subst",
        begin: /#\{/,
        end: /\}/,
        keywords: Z
      },
      W = {
        className: "number",
        begin: "(\\b0o[0-7_]+)|(\\b0b[01_]+)|(\\b0x[0-9a-fA-F_]+)|(-?\\b[1-9][0-9_]*(\\.[0-9_]+([eE][-+]?[0-9]+)?)?)",
        relevance: 0
      },
      w = `[/|([{<"']`,
      B = {
        className: "string",
        begin: `~[a-z](?=[/|([{<"'])`,
        contains: [{
          endsParent: !0,
          contains: [{
            contains: [I.BACKSLASH_ESCAPE, C],
            variants: [{
              begin: /"/,
              end: /"/
            }, {
              begin: /'/,
              end: /'/
            }, {
              begin: /\//,
              end: /\//
            }, {
              begin: /\|/,
              end: /\|/
            }, {
              begin: /\(/,
              end: /\)/
            }, {
              begin: /\[/,
              end: /\]/
            }, {
              begin: /\{/,
              end: /\}/
            }, {
              begin: /</,
              end: />/
            }]
          }]
        }]
      },
      A = {
        className: "string",
        begin: `~[A-Z](?=[/|([{<"'])`,
        contains: [{
          begin: /"/,
          end: /"/
        }, {
          begin: /'/,
          end: /'/
        }, {
          begin: /\//,
          end: /\//
        }, {
          begin: /\|/,
          end: /\|/
        }, {
          begin: /\(/,
          end: /\)/
        }, {
          begin: /\[/,
          end: /\]/
        }, {
          begin: /\{/,
          end: /\}/
        }, {
          begin: /</,
          end: />/
        }]
      },
      V = {
        className: "string",
        contains: [I.BACKSLASH_ESCAPE, C],
        variants: [{
          begin: /"""/,
          end: /"""/
        }, {
          begin: /'''/,
          end: /'''/
        }, {
          begin: /~S"""/,
          end: /"""/,
          contains: []
        }, {
          begin: /~S"/,
          end: /"/,
          contains: []
        }, {
          begin: /~S'''/,
          end: /'''/,
          contains: []
        }, {
          begin: /~S'/,
          end: /'/,
          contains: []
        }, {
          begin: /'/,
          end: /'/
        }, {
          begin: /"/,
          end: /"/
        }]
      },
      X = {
        className: "function",
        beginKeywords: "def defp defmacro",
        end: /\B\b/,
        contains: [I.inherit(I.TITLE_MODE, {
          begin: "[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?",
          endsParent: !0
        })]
      },
      _ = I.inherit(X, {
        className: "class",
        beginKeywords: "defimpl defmodule defprotocol defrecord",
        end: /\bdo\b|$|;/
      }),
      F = [V, A, B, I.HASH_COMMENT_MODE, _, X, {
        begin: "::"
      }, {
        className: "symbol",
        begin: ":(?![\\s:])",
        contains: [V, {
          begin: "[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?"
        }],
        relevance: 0
      }, {
        className: "symbol",
        begin: "[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?:(?!:)",
        relevance: 0
      }, W, {
        className: "variable",
        begin: "(\\$\\W)|((\\$|@@?)(\\w+))"
      }, {
        begin: "->"
      }, {
        begin: "(" + I.RE_STARTERS_RE + ")\\s*",
        contains: [I.HASH_COMMENT_MODE, {
          begin: /\/: (?=\d+\s*[,\]])/,
          relevance: 0,
          contains: [W]
        }, {
          className: "regexp",
          illegal: "\\n",
          contains: [I.BACKSLASH_ESCAPE, C],
          variants: [{
            begin: "/",
            end: "/[a-z]*"
          }, {
            begin: "%r\\[",
            end: "\\][a-z]*"
          }]
        }],
        relevance: 0
      }];
    return C.contains = F, {
      name: "Elixir",
      keywords: Z,
      contains: F
    }
  }
  gA2.exports = G19
})
// @from(Start 4144488, End 4146259)
NA2 = Y((RH3, KA2) => {
  function Z19(I) {
    let d = {
        variants: [I.COMMENT("--", "$"), I.COMMENT(/\{-/, /-\}/, {
          contains: ["self"]
        })]
      },
      G = {
        className: "type",
        begin: "\\b[A-Z][\\w']*",
        relevance: 0
      },
      Z = {
        begin: "\\(",
        end: "\\)",
        illegal: '"',
        contains: [{
          className: "type",
          begin: "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"
        }, d]
      },
      C = {
        begin: /\{/,
        end: /\}/,
        contains: Z.contains
      },
      W = {
        className: "string",
        begin: "'\\\\?.",
        end: "'",
        illegal: "."
      };
    return {
      name: "Elm",
      keywords: "let in if then else case of where module import exposing type alias as infix infixl infixr port effect command subscription",
      contains: [{
        beginKeywords: "port effect module",
        end: "exposing",
        keywords: "port effect module where command subscription exposing",
        contains: [Z, d],
        illegal: "\\W\\.|;"
      }, {
        begin: "import",
        end: "$",
        keywords: "import as exposing",
        contains: [Z, d],
        illegal: "\\W\\.|;"
      }, {
        begin: "type",
        end: "$",
        keywords: "type alias",
        contains: [G, Z, C, d]
      }, {
        beginKeywords: "infix infixl infixr",
        end: "$",
        contains: [I.C_NUMBER_MODE, d]
      }, {
        begin: "port",
        end: "$",
        keywords: "port",
        contains: [d]
      }, W, I.QUOTE_STRING_MODE, I.C_NUMBER_MODE, G, I.inherit(I.TITLE_MODE, {
        begin: "^[_a-z][\\w']*"
      }), d, {
        begin: "->|<-"
      }],
      illegal: /;/
    }
  }
  KA2.exports = Z19
})
// @from(Start 4146265, End 4152307)
fA2 = Y((UH3, QA2) => {
  function C19(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function W19(I) {
    return zA2("(?=", I, ")")
  }

  function zA2(...I) {
    return I.map((G) => C19(G)).join("")
  }

  function w19(I) {
    let G = {
        keyword: "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor __FILE__",
        built_in: "proc lambda",
        literal: "true false nil"
      },
      Z = {
        className: "doctag",
        begin: "@[A-Za-z]+"
      },
      C = {
        begin: "#<",
        end: ">"
      },
      W = [I.COMMENT("#", "$", {
        contains: [Z]
      }), I.COMMENT("^=begin", "^=end", {
        contains: [Z],
        relevance: 10
      }), I.COMMENT("^__END__", "\\n$")],
      w = {
        className: "subst",
        begin: /#\{/,
        end: /\}/,
        keywords: G
      },
      B = {
        className: "string",
        contains: [I.BACKSLASH_ESCAPE, w],
        variants: [{
          begin: /'/,
          end: /'/
        }, {
          begin: /"/,
          end: /"/
        }, {
          begin: /`/,
          end: /`/
        }, {
          begin: /%[qQwWx]?\(/,
          end: /\)/
        }, {
          begin: /%[qQwWx]?\[/,
          end: /\]/
        }, {
          begin: /%[qQwWx]?\{/,
          end: /\}/
        }, {
          begin: /%[qQwWx]?</,
          end: />/
        }, {
          begin: /%[qQwWx]?\//,
          end: /\//
        }, {
          begin: /%[qQwWx]?%/,
          end: /%/
        }, {
          begin: /%[qQwWx]?-/,
          end: /-/
        }, {
          begin: /%[qQwWx]?\|/,
          end: /\|/
        }, {
          begin: /\B\?(\\\d{1,3})/
        }, {
          begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/
        }, {
          begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/
        }, {
          begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/
        }, {
          begin: /\B\?\\(c|C-)[\x20-\x7e]/
        }, {
          begin: /\B\?\\?\S/
        }, {
          begin: /<<[-~]?'?(\w+)\n(?:[^\n]*\n)*?\s*\1\b/,
          returnBegin: !0,
          contains: [{
            begin: /<<[-~]?'?/
          }, I.END_SAME_AS_BEGIN({
            begin: /(\w+)/,
            end: /(\w+)/,
            contains: [I.BACKSLASH_ESCAPE, w]
          })]
        }]
      },
      A = "[1-9](_?[0-9])*|0",
      V = "[0-9](_?[0-9])*",
      X = {
        className: "number",
        relevance: 0,
        variants: [{
          begin: "\\b([1-9](_?[0-9])*|0)(\\.([0-9](_?[0-9])*))?([eE][+-]?([0-9](_?[0-9])*)|r)?i?\\b"
        }, {
          begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b"
        }, {
          begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b"
        }, {
          begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b"
        }, {
          begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"
        }, {
          begin: "\\b0(_?[0-7])+r?i?\\b"
        }]
      },
      _ = {
        className: "params",
        begin: "\\(",
        end: "\\)",
        endsParent: !0,
        keywords: G
      },
      F = [B, {
        className: "class",
        beginKeywords: "class module",
        end: "$|;",
        illegal: /=/,
        contains: [I.inherit(I.TITLE_MODE, {
          begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|!)?"
        }), {
          begin: "<\\s*",
          contains: [{
            begin: "(" + I.IDENT_RE + "::)?" + I.IDENT_RE,
            relevance: 0
          }]
        }].concat(W)
      }, {
        className: "function",
        begin: zA2(/def\s+/, W19("([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)\\s*(\\(|;|$)")),
        relevance: 0,
        keywords: "def",
        end: "$|;",
        contains: [I.inherit(I.TITLE_MODE, {
          begin: "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)"
        }), _].concat(W)
      }, {
        begin: I.IDENT_RE + "::"
      }, {
        className: "symbol",
        begin: I.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
        relevance: 0
      }, {
        className: "symbol",
        begin: ":(?!\\s)",
        contains: [B, {
          begin: "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)"
        }],
        relevance: 0
      }, X, {
        className: "variable",
        begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
      }, {
        className: "params",
        begin: /\|/,
        end: /\|/,
        relevance: 0,
        keywords: G
      }, {
        begin: "(" + I.RE_STARTERS_RE + "|unless)\\s*",
        keywords: "unless",
        contains: [{
          className: "regexp",
          contains: [I.BACKSLASH_ESCAPE, w],
          illegal: /\n/,
          variants: [{
            begin: "/",
            end: "/[a-z]*"
          }, {
            begin: /%r\{/,
            end: /\}[a-z]*/
          }, {
            begin: "%r\\(",
            end: "\\)[a-z]*"
          }, {
            begin: "%r!",
            end: "![a-z]*"
          }, {
            begin: "%r\\[",
            end: "\\][a-z]*"
          }]
        }].concat(C, W),
        relevance: 0
      }].concat(C, W);
    w.contains = F, _.contains = F;
    let g = "[>?]>",
      J = "[\\w#]+\\(\\w+\\):\\d+:\\d+>",
      K = "(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>",
      Q = [{
        begin: /^\s*=>/,
        starts: {
          end: "$",
          contains: F
        }
      }, {
        className: "meta",
        begin: "^(" + g + "|" + J + "|" + K + ")(?=[ ])",
        starts: {
          end: "$",
          contains: F
        }
      }];
    return W.unshift(C), {
      name: "Ruby",
      aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
      keywords: G,
      illegal: /\/\*/,
      contains: [I.SHEBANG({
        binary: "ruby"
      })].concat(Q).concat(W).concat(F)
    }
  }
  QA2.exports = w19
})
// @from(Start 4152313, End 4152628)
RA2 = Y((vH3, qA2) => {
  function B19(I) {
    return {
      name: "ERB",
      subLanguage: "xml",
      contains: [I.COMMENT("<%#", "%>"), {
        begin: "<%[%=-]?",
        end: "[%-]?%>",
        subLanguage: "ruby",
        excludeBegin: !0,
        excludeEnd: !0
      }]
    }
  }
  qA2.exports = B19
})
// @from(Start 4152634, End 4153858)
vA2 = Y((EH3, UA2) => {
  function A19(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function V19(...I) {
    return I.map((G) => A19(G)).join("")
  }

  function X19(I) {
    return {
      name: "Erlang REPL",
      keywords: {
        built_in: "spawn spawn_link self",
        keyword: "after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if let not of or orelse|10 query receive rem try when xor"
      },
      contains: [{
        className: "meta",
        begin: "^[0-9]+> ",
        relevance: 10
      }, I.COMMENT("%", "$"), {
        className: "number",
        begin: "\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)",
        relevance: 0
      }, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, {
        begin: V19(/\?(::)?/, /([A-Z]\w*)/, /((::)[A-Z]\w*)*/)
      }, {
        begin: "->"
      }, {
        begin: "ok"
      }, {
        begin: "!"
      }, {
        begin: "(\\b[a-z'][a-zA-Z0-9_']*:[a-z'][a-zA-Z0-9_']*)|(\\b[a-z'][a-zA-Z0-9_']*)",
        relevance: 0
      }, {
        begin: "[A-Z][a-zA-Z0-9_']*",
        relevance: 0
      }]
    }
  }
  UA2.exports = X19
})
// @from(Start 4153864, End 4156980)
MA2 = Y((MH3, EA2) => {
  function Y19(I) {
    let G = "([a-z'][a-zA-Z0-9_']*:[a-z'][a-zA-Z0-9_']*|[a-z'][a-zA-Z0-9_']*)",
      Z = {
        keyword: "after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor",
        literal: "false true"
      },
      C = I.COMMENT("%", "$"),
      W = {
        className: "number",
        begin: "\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)",
        relevance: 0
      },
      w = {
        begin: "fun\\s+[a-z'][a-zA-Z0-9_']*/\\d+"
      },
      B = {
        begin: G + "\\(",
        end: "\\)",
        returnBegin: !0,
        relevance: 0,
        contains: [{
          begin: G,
          relevance: 0
        }, {
          begin: "\\(",
          end: "\\)",
          endsWithParent: !0,
          returnEnd: !0,
          relevance: 0
        }]
      },
      A = {
        begin: /\{/,
        end: /\}/,
        relevance: 0
      },
      V = {
        begin: "\\b_([A-Z][A-Za-z0-9_]*)?",
        relevance: 0
      },
      X = {
        begin: "[A-Z][a-zA-Z0-9_]*",
        relevance: 0
      },
      _ = {
        begin: "#" + I.UNDERSCORE_IDENT_RE,
        relevance: 0,
        returnBegin: !0,
        contains: [{
          begin: "#" + I.UNDERSCORE_IDENT_RE,
          relevance: 0
        }, {
          begin: /\{/,
          end: /\}/,
          relevance: 0
        }]
      },
      F = {
        beginKeywords: "fun receive if try case",
        end: "end",
        keywords: Z
      };
    F.contains = [C, w, I.inherit(I.APOS_STRING_MODE, {
      className: ""
    }), F, B, I.QUOTE_STRING_MODE, W, A, V, X, _];
    let g = [C, w, F, B, I.QUOTE_STRING_MODE, W, A, V, X, _];
    B.contains[1].contains = g, A.contains = g, _.contains[1].contains = g;
    let J = ["-module", "-record", "-undef", "-export", "-ifdef", "-ifndef", "-author", "-copyright", "-doc", "-vsn", "-import", "-include", "-include_lib", "-compile", "-define", "-else", "-endif", "-file", "-behaviour", "-behavior", "-spec"],
      K = {
        className: "params",
        begin: "\\(",
        end: "\\)",
        contains: g
      };
    return {
      name: "Erlang",
      aliases: ["erl"],
      keywords: Z,
      illegal: "(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))",
      contains: [{
        className: "function",
        begin: "^[a-z'][a-zA-Z0-9_']*\\s*\\(",
        end: "->",
        returnBegin: !0,
        illegal: "\\(|#|//|/\\*|\\\\|:|;",
        contains: [K, I.inherit(I.TITLE_MODE, {
          begin: "[a-z'][a-zA-Z0-9_']*"
        })],
        starts: {
          end: ";|\\.",
          keywords: Z,
          contains: g
        }
      }, C, {
        begin: "^-",
        end: "\\.",
        relevance: 0,
        excludeEnd: !0,
        returnBegin: !0,
        keywords: {
          $pattern: "-" + I.IDENT_RE,
          keyword: J.map((Q) => `${Q}|1.5`).join(" ")
        },
        contains: [K]
      }, W, I.QUOTE_STRING_MODE, _, V, X, A, {
        begin: /\.$/
      }]
    }
  }
  EA2.exports = Y19
})
// @from(Start 4156986, End 4161627)
LA2 = Y((SH3, SA2) => {
  function _19(I) {
    return {
      name: "Excel formulae",
      aliases: ["xlsx", "xls"],
      case_insensitive: !0,
      keywords: {
        $pattern: /[a-zA-Z][\w\.]*/,
        built_in: "ABS ACCRINT ACCRINTM ACOS ACOSH ACOT ACOTH AGGREGATE ADDRESS AMORDEGRC AMORLINC AND ARABIC AREAS ASC ASIN ASINH ATAN ATAN2 ATANH AVEDEV AVERAGE AVERAGEA AVERAGEIF AVERAGEIFS BAHTTEXT BASE BESSELI BESSELJ BESSELK BESSELY BETADIST BETA.DIST BETAINV BETA.INV BIN2DEC BIN2HEX BIN2OCT BINOMDIST BINOM.DIST BINOM.DIST.RANGE BINOM.INV BITAND BITLSHIFT BITOR BITRSHIFT BITXOR CALL CEILING CEILING.MATH CEILING.PRECISE CELL CHAR CHIDIST CHIINV CHITEST CHISQ.DIST CHISQ.DIST.RT CHISQ.INV CHISQ.INV.RT CHISQ.TEST CHOOSE CLEAN CODE COLUMN COLUMNS COMBIN COMBINA COMPLEX CONCAT CONCATENATE CONFIDENCE CONFIDENCE.NORM CONFIDENCE.T CONVERT CORREL COS COSH COT COTH COUNT COUNTA COUNTBLANK COUNTIF COUNTIFS COUPDAYBS COUPDAYS COUPDAYSNC COUPNCD COUPNUM COUPPCD COVAR COVARIANCE.P COVARIANCE.S CRITBINOM CSC CSCH CUBEKPIMEMBER CUBEMEMBER CUBEMEMBERPROPERTY CUBERANKEDMEMBER CUBESET CUBESETCOUNT CUBEVALUE CUMIPMT CUMPRINC DATE DATEDIF DATEVALUE DAVERAGE DAY DAYS DAYS360 DB DBCS DCOUNT DCOUNTA DDB DEC2BIN DEC2HEX DEC2OCT DECIMAL DEGREES DELTA DEVSQ DGET DISC DMAX DMIN DOLLAR DOLLARDE DOLLARFR DPRODUCT DSTDEV DSTDEVP DSUM DURATION DVAR DVARP EDATE EFFECT ENCODEURL EOMONTH ERF ERF.PRECISE ERFC ERFC.PRECISE ERROR.TYPE EUROCONVERT EVEN EXACT EXP EXPON.DIST EXPONDIST FACT FACTDOUBLE FALSE|0 F.DIST FDIST F.DIST.RT FILTERXML FIND FINDB F.INV F.INV.RT FINV FISHER FISHERINV FIXED FLOOR FLOOR.MATH FLOOR.PRECISE FORECAST FORECAST.ETS FORECAST.ETS.CONFINT FORECAST.ETS.SEASONALITY FORECAST.ETS.STAT FORECAST.LINEAR FORMULATEXT FREQUENCY F.TEST FTEST FV FVSCHEDULE GAMMA GAMMA.DIST GAMMADIST GAMMA.INV GAMMAINV GAMMALN GAMMALN.PRECISE GAUSS GCD GEOMEAN GESTEP GETPIVOTDATA GROWTH HARMEAN HEX2BIN HEX2DEC HEX2OCT HLOOKUP HOUR HYPERLINK HYPGEOM.DIST HYPGEOMDIST IF IFERROR IFNA IFS IMABS IMAGINARY IMARGUMENT IMCONJUGATE IMCOS IMCOSH IMCOT IMCSC IMCSCH IMDIV IMEXP IMLN IMLOG10 IMLOG2 IMPOWER IMPRODUCT IMREAL IMSEC IMSECH IMSIN IMSINH IMSQRT IMSUB IMSUM IMTAN INDEX INDIRECT INFO INT INTERCEPT INTRATE IPMT IRR ISBLANK ISERR ISERROR ISEVEN ISFORMULA ISLOGICAL ISNA ISNONTEXT ISNUMBER ISODD ISREF ISTEXT ISO.CEILING ISOWEEKNUM ISPMT JIS KURT LARGE LCM LEFT LEFTB LEN LENB LINEST LN LOG LOG10 LOGEST LOGINV LOGNORM.DIST LOGNORMDIST LOGNORM.INV LOOKUP LOWER MATCH MAX MAXA MAXIFS MDETERM MDURATION MEDIAN MID MIDBs MIN MINIFS MINA MINUTE MINVERSE MIRR MMULT MOD MODE MODE.MULT MODE.SNGL MONTH MROUND MULTINOMIAL MUNIT N NA NEGBINOM.DIST NEGBINOMDIST NETWORKDAYS NETWORKDAYS.INTL NOMINAL NORM.DIST NORMDIST NORMINV NORM.INV NORM.S.DIST NORMSDIST NORM.S.INV NORMSINV NOT NOW NPER NPV NUMBERVALUE OCT2BIN OCT2DEC OCT2HEX ODD ODDFPRICE ODDFYIELD ODDLPRICE ODDLYIELD OFFSET OR PDURATION PEARSON PERCENTILE.EXC PERCENTILE.INC PERCENTILE PERCENTRANK.EXC PERCENTRANK.INC PERCENTRANK PERMUT PERMUTATIONA PHI PHONETIC PI PMT POISSON.DIST POISSON POWER PPMT PRICE PRICEDISC PRICEMAT PROB PRODUCT PROPER PV QUARTILE QUARTILE.EXC QUARTILE.INC QUOTIENT RADIANS RAND RANDBETWEEN RANK.AVG RANK.EQ RANK RATE RECEIVED REGISTER.ID REPLACE REPLACEB REPT RIGHT RIGHTB ROMAN ROUND ROUNDDOWN ROUNDUP ROW ROWS RRI RSQ RTD SEARCH SEARCHB SEC SECH SECOND SERIESSUM SHEET SHEETS SIGN SIN SINH SKEW SKEW.P SLN SLOPE SMALL SQL.REQUEST SQRT SQRTPI STANDARDIZE STDEV STDEV.P STDEV.S STDEVA STDEVP STDEVPA STEYX SUBSTITUTE SUBTOTAL SUM SUMIF SUMIFS SUMPRODUCT SUMSQ SUMX2MY2 SUMX2PY2 SUMXMY2 SWITCH SYD T TAN TANH TBILLEQ TBILLPRICE TBILLYIELD T.DIST T.DIST.2T T.DIST.RT TDIST TEXT TEXTJOIN TIME TIMEVALUE T.INV T.INV.2T TINV TODAY TRANSPOSE TREND TRIM TRIMMEAN TRUE|0 TRUNC T.TEST TTEST TYPE UNICHAR UNICODE UPPER VALUE VAR VAR.P VAR.S VARA VARP VARPA VDB VLOOKUP WEBSERVICE WEEKDAY WEEKNUM WEIBULL WEIBULL.DIST WORKDAY WORKDAY.INTL XIRR XNPV XOR YEAR YEARFRAC YIELD YIELDDISC YIELDMAT Z.TEST ZTEST"
      },
      contains: [{
        begin: /^=/,
        end: /[^=]/,
        returnEnd: !0,
        illegal: /=/,
        relevance: 10
      }, {
        className: "symbol",
        begin: /\b[A-Z]{1,2}\d+\b/,
        end: /[^\d]/,
        excludeEnd: !0,
        relevance: 0
      }, {
        className: "symbol",
        begin: /[A-Z]{0,2}\d*:[A-Z]{0,2}\d*/,
        relevance: 0
      }, I.BACKSLASH_ESCAPE, I.QUOTE_STRING_MODE, {
        className: "number",
        begin: I.NUMBER_RE + "(%)?",
        relevance: 0
      }, I.COMMENT(/\bN\(/, /\)/, {
        excludeBegin: !0,
        excludeEnd: !0,
        illegal: /\n/
      })]
    }
  }
  SA2.exports = _19
})
// @from(Start 4161633, End 4162280)
PA2 = Y((LH3, yA2) => {
  function D19(I) {
    return {
      name: "FIX",
      contains: [{
        begin: /[^\u2401\u0001]+/,
        end: /[\u2401\u0001]/,
        excludeEnd: !0,
        returnBegin: !0,
        returnEnd: !1,
        contains: [{
          begin: /([^\u2401\u0001=]+)/,
          end: /=([^\u2401\u0001=]+)/,
          returnEnd: !0,
          returnBegin: !1,
          className: "attr"
        }, {
          begin: /=/,
          end: /([\u2401\u0001])/,
          excludeEnd: !0,
          excludeBegin: !0,
          className: "string"
        }]
      }],
      case_insensitive: !0
    }
  }
  yA2.exports = D19
})
// @from(Start 4162286, End 4163199)
uA2 = Y((yH3, $A2) => {
  function H19(I) {
    let d = {
        className: "string",
        begin: /'(.|\\[xXuU][a-zA-Z0-9]+)'/
      },
      G = {
        className: "string",
        variants: [{
          begin: '"',
          end: '"'
        }]
      },
      C = {
        className: "function",
        beginKeywords: "def",
        end: /[:={\[(\n;]/,
        excludeEnd: !0,
        contains: [{
          className: "title",
          relevance: 0,
          begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/
        }]
      };
    return {
      name: "Flix",
      keywords: {
        literal: "true false",
        keyword: "case class def else enum if impl import in lat rel index let match namespace switch type yield with"
      },
      contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, d, G, C, I.C_NUMBER_MODE]
    }
  }
  $A2.exports = H19
})
// @from(Start 4163205, End 4168597)
OA2 = Y((PH3, TA2) => {
  function F19(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function jF1(...I) {
    return I.map((G) => F19(G)).join("")
  }

  function g19(I) {
    let d = {
        className: "params",
        begin: "\\(",
        end: "\\)"
      },
      G = {
        variants: [I.COMMENT("!", "$", {
          relevance: 0
        }), I.COMMENT("^C[ ]", "$", {
          relevance: 0
        }), I.COMMENT("^C$", "$", {
          relevance: 0
        })]
      },
      Z = /(_[a-z_\d]+)?/,
      C = /([de][+-]?\d+)?/,
      W = {
        className: "number",
        variants: [{
          begin: jF1(/\b\d+/, /\.(\d*)/, C, Z)
        }, {
          begin: jF1(/\b\d+/, C, Z)
        }, {
          begin: jF1(/\.\d+/, C, Z)
        }],
        relevance: 0
      },
      w = {
        className: "function",
        beginKeywords: "subroutine function program",
        illegal: "[${=\\n]",
        contains: [I.UNDERSCORE_TITLE_MODE, d]
      },
      B = {
        className: "string",
        relevance: 0,
        variants: [I.APOS_STRING_MODE, I.QUOTE_STRING_MODE]
      };
    return {
      name: "Fortran",
      case_insensitive: !0,
      aliases: ["f90", "f95"],
      keywords: {
        literal: ".False. .True.",
        keyword: "kind do concurrent local shared while private call intrinsic where elsewhere type endtype endmodule endselect endinterface end enddo endif if forall endforall only contains default return stop then block endblock endassociate public subroutine|10 function program .and. .or. .not. .le. .eq. .ge. .gt. .lt. goto save else use module select case access blank direct exist file fmt form formatted iostat name named nextrec number opened rec recl sequential status unformatted unit continue format pause cycle exit c_null_char c_alert c_backspace c_form_feed flush wait decimal round iomsg synchronous nopass non_overridable pass protected volatile abstract extends import non_intrinsic value deferred generic final enumerator class associate bind enum c_int c_short c_long c_long_long c_signed_char c_size_t c_int8_t c_int16_t c_int32_t c_int64_t c_int_least8_t c_int_least16_t c_int_least32_t c_int_least64_t c_int_fast8_t c_int_fast16_t c_int_fast32_t c_int_fast64_t c_intmax_t C_intptr_t c_float c_double c_long_double c_float_complex c_double_complex c_long_double_complex c_bool c_char c_null_ptr c_null_funptr c_new_line c_carriage_return c_horizontal_tab c_vertical_tab iso_c_binding c_loc c_funloc c_associated  c_f_pointer c_ptr c_funptr iso_fortran_env character_storage_size error_unit file_storage_size input_unit iostat_end iostat_eor numeric_storage_size output_unit c_f_procpointer ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode newunit contiguous recursive pad position action delim readwrite eor advance nml interface procedure namelist include sequence elemental pure impure integer real character complex logical codimension dimension allocatable|10 parameter external implicit|10 none double precision assign intent optional pointer target in out common equivalence data",
        built_in: "alog alog10 amax0 amax1 amin0 amin1 amod cabs ccos cexp clog csin csqrt dabs dacos dasin datan datan2 dcos dcosh ddim dexp dint dlog dlog10 dmax1 dmin1 dmod dnint dsign dsin dsinh dsqrt dtan dtanh float iabs idim idint idnint ifix isign max0 max1 min0 min1 sngl algama cdabs cdcos cdexp cdlog cdsin cdsqrt cqabs cqcos cqexp cqlog cqsin cqsqrt dcmplx dconjg derf derfc dfloat dgamma dimag dlgama iqint qabs qacos qasin qatan qatan2 qcmplx qconjg qcos qcosh qdim qerf qerfc qexp qgamma qimag qlgama qlog qlog10 qmax1 qmin1 qmod qnint qsign qsin qsinh qsqrt qtan qtanh abs acos aimag aint anint asin atan atan2 char cmplx conjg cos cosh exp ichar index int log log10 max min nint sign sin sinh sqrt tan tanh print write dim lge lgt lle llt mod nullify allocate deallocate adjustl adjustr all allocated any associated bit_size btest ceiling count cshift date_and_time digits dot_product eoshift epsilon exponent floor fraction huge iand ibclr ibits ibset ieor ior ishft ishftc lbound len_trim matmul maxexponent maxloc maxval merge minexponent minloc minval modulo mvbits nearest pack present product radix random_number random_seed range repeat reshape rrspacing scale scan selected_int_kind selected_real_kind set_exponent shape size spacing spread sum system_clock tiny transpose trim ubound unpack verify achar iachar transfer dble entry dprod cpu_time command_argument_count get_command get_command_argument get_environment_variable is_iostat_end ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode is_iostat_eor move_alloc new_line selected_char_kind same_type_as extends_type_of acosh asinh atanh bessel_j0 bessel_j1 bessel_jn bessel_y0 bessel_y1 bessel_yn erf erfc erfc_scaled gamma log_gamma hypot norm2 atomic_define atomic_ref execute_command_line leadz trailz storage_size merge_bits bge bgt ble blt dshiftl dshiftr findloc iall iany iparity image_index lcobound ucobound maskl maskr num_images parity popcnt poppar shifta shiftl shiftr this_image sync change team co_broadcast co_max co_min co_sum co_reduce"
      },
      illegal: /\/\*/,
      contains: [B, w, {
        begin: /^C\s*=(?!=)/,
        relevance: 0
      }, G, W]
    }
  }
  TA2.exports = g19
})
// @from(Start 4168603, End 4170166)
lA2 = Y(($H3, mA2) => {
  function J19(I) {
    let d = {
      begin: "<",
      end: ">",
      contains: [I.inherit(I.TITLE_MODE, {
        begin: /'[a-zA-Z0-9_]+/
      })]
    };
    return {
      name: "F#",
      aliases: ["fs"],
      keywords: "abstract and as assert base begin class default delegate do done downcast downto elif else end exception extern false finally for fun function global if in inherit inline interface internal lazy let match member module mutable namespace new null of open or override private public rec return sig static struct then to true try type upcast use val void when while with yield",
      illegal: /\/\*/,
      contains: [{
        className: "keyword",
        begin: /\b(yield|return|let|do)!/
      }, {
        className: "string",
        begin: '@"',
        end: '"',
        contains: [{
          begin: '""'
        }]
      }, {
        className: "string",
        begin: '"""',
        end: '"""'
      }, I.COMMENT("\\(\\*(\\s)", "\\*\\)", {
        contains: ["self"]
      }), {
        className: "class",
        beginKeywords: "type",
        end: "\\(|=|$",
        excludeEnd: !0,
        contains: [I.UNDERSCORE_TITLE_MODE, d]
      }, {
        className: "meta",
        begin: "\\[<",
        end: ">\\]",
        relevance: 10
      }, {
        className: "symbol",
        begin: "\\B('[A-Za-z])\\b",
        contains: [I.BACKSLASH_ESCAPE]
      }, I.C_LINE_COMMENT_MODE, I.inherit(I.QUOTE_STRING_MODE, {
        illegal: null
      }), I.C_NUMBER_MODE]
    }
  }
  mA2.exports = J19
})
// @from(Start 4170172, End 4174195)
hA2 = Y((uH3, bA2) => {
  function K19(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function N19(I) {
    return kF1("(", I, ")*")
  }

  function kF1(...I) {
    return I.map((G) => K19(G)).join("")
  }

  function z19(I) {
    let d = {
        keyword: "abort acronym acronyms alias all and assign binary card diag display else eq file files for free ge gt if integer le loop lt maximizing minimizing model models ne negative no not option options or ord positive prod put putpage puttl repeat sameas semicont semiint smax smin solve sos1 sos2 sum system table then until using while xor yes",
        literal: "eps inf na",
        built_in: "abs arccos arcsin arctan arctan2 Beta betaReg binomial ceil centropy cos cosh cvPower div div0 eDist entropy errorf execSeed exp fact floor frac gamma gammaReg log logBeta logGamma log10 log2 mapVal max min mod ncpCM ncpF ncpVUpow ncpVUsin normal pi poly power randBinomial randLinear randTriangle round rPower sigmoid sign signPower sin sinh slexp sllog10 slrec sqexp sqlog10 sqr sqrec sqrt tan tanh trunc uniform uniformInt vcPower bool_and bool_eqv bool_imp bool_not bool_or bool_xor ifThen rel_eq rel_ge rel_gt rel_le rel_lt rel_ne gday gdow ghour gleap gmillisec gminute gmonth gsecond gyear jdate jnow jstart jtime errorLevel execError gamsRelease gamsVersion handleCollect handleDelete handleStatus handleSubmit heapFree heapLimit heapSize jobHandle jobKill jobStatus jobTerminate licenseLevel licenseStatus maxExecError sleep timeClose timeComp timeElapsed timeExec timeStart"
      },
      G = {
        className: "params",
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0
      },
      Z = {
        className: "symbol",
        variants: [{
          begin: /=[lgenxc]=/
        }, {
          begin: /\$/
        }]
      },
      C = {
        className: "comment",
        variants: [{
          begin: "'",
          end: "'"
        }, {
          begin: '"',
          end: '"'
        }],
        illegal: "\\n",
        contains: [I.BACKSLASH_ESCAPE]
      },
      W = {
        begin: "/",
        end: "/",
        keywords: d,
        contains: [C, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.QUOTE_STRING_MODE, I.APOS_STRING_MODE, I.C_NUMBER_MODE]
      },
      w = /[a-z0-9&#*=?@\\><:,()$[\]_.{}!+%^-]+/,
      B = {
        begin: /[a-z][a-z0-9_]*(\([a-z0-9_, ]*\))?[ \t]+/,
        excludeBegin: !0,
        end: "$",
        endsWithParent: !0,
        contains: [C, W, {
          className: "comment",
          begin: kF1(w, N19(kF1(/[ ]+/, w))),
          relevance: 0
        }]
      };
    return {
      name: "GAMS",
      aliases: ["gms"],
      case_insensitive: !0,
      keywords: d,
      contains: [I.COMMENT(/^\$ontext/, /^\$offtext/), {
        className: "meta",
        begin: "^\\$[a-z0-9]+",
        end: "$",
        returnBegin: !0,
        contains: [{
          className: "meta-keyword",
          begin: "^\\$[a-z0-9]+"
        }]
      }, I.COMMENT("^\\*", "$"), I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.QUOTE_STRING_MODE, I.APOS_STRING_MODE, {
        beginKeywords: "set sets parameter parameters variable variables scalar scalars equation equations",
        end: ";",
        contains: [I.COMMENT("^\\*", "$"), I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.QUOTE_STRING_MODE, I.APOS_STRING_MODE, W, B]
      }, {
        beginKeywords: "table",
        end: ";",
        returnBegin: !0,
        contains: [{
          beginKeywords: "table",
          end: "$",
          contains: [B]
        }, I.COMMENT("^\\*", "$"), I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.QUOTE_STRING_MODE, I.APOS_STRING_MODE, I.C_NUMBER_MODE]
      }, {
        className: "function",
        begin: /^[a-z][a-z0-9_,\-+' ()$]+\.{2}/,
        returnBegin: !0,
        contains: [{
          className: "title",
          begin: /^[a-z0-9_]+/
        }, G, Z]
      }, I.C_NUMBER_MODE, Z]
    }
  }
  bA2.exports = z19
})
// @from(Start 4174201, End 4188478)
kA2 = Y((TH3, jA2) => {
  function Q19(I) {
    let d = {
        keyword: "bool break call callexe checkinterrupt clear clearg closeall cls comlog compile continue create debug declare delete disable dlibrary dllcall do dos ed edit else elseif enable end endfor endif endp endo errorlog errorlogat expr external fn for format goto gosub graph if keyword let lib library line load loadarray loadexe loadf loadk loadm loadp loads loadx local locate loopnextindex lprint lpwidth lshow matrix msym ndpclex new open output outwidth plot plotsym pop prcsn print printdos proc push retp return rndcon rndmod rndmult rndseed run save saveall screen scroll setarray show sparse stop string struct system trace trap threadfor threadendfor threadbegin threadjoin threadstat threadend until use while winprint ne ge le gt lt and xor or not eq eqv",
        built_in: "abs acf aconcat aeye amax amean AmericanBinomCall AmericanBinomCall_Greeks AmericanBinomCall_ImpVol AmericanBinomPut AmericanBinomPut_Greeks AmericanBinomPut_ImpVol AmericanBSCall AmericanBSCall_Greeks AmericanBSCall_ImpVol AmericanBSPut AmericanBSPut_Greeks AmericanBSPut_ImpVol amin amult annotationGetDefaults annotationSetBkd annotationSetFont annotationSetLineColor annotationSetLineStyle annotationSetLineThickness annualTradingDays arccos arcsin areshape arrayalloc arrayindex arrayinit arraytomat asciiload asclabel astd astds asum atan atan2 atranspose axmargin balance band bandchol bandcholsol bandltsol bandrv bandsolpd bar base10 begwind besselj bessely beta box boxcox cdfBeta cdfBetaInv cdfBinomial cdfBinomialInv cdfBvn cdfBvn2 cdfBvn2e cdfCauchy cdfCauchyInv cdfChic cdfChii cdfChinc cdfChincInv cdfExp cdfExpInv cdfFc cdfFnc cdfFncInv cdfGam cdfGenPareto cdfHyperGeo cdfLaplace cdfLaplaceInv cdfLogistic cdfLogisticInv cdfmControlCreate cdfMvn cdfMvn2e cdfMvnce cdfMvne cdfMvt2e cdfMvtce cdfMvte cdfN cdfN2 cdfNc cdfNegBinomial cdfNegBinomialInv cdfNi cdfPoisson cdfPoissonInv cdfRayleigh cdfRayleighInv cdfTc cdfTci cdfTnc cdfTvn cdfWeibull cdfWeibullInv cdir ceil ChangeDir chdir chiBarSquare chol choldn cholsol cholup chrs close code cols colsf combinate combinated complex con cond conj cons ConScore contour conv convertsatostr convertstrtosa corrm corrms corrvc corrx corrxs cos cosh counts countwts crossprd crout croutp csrcol csrlin csvReadM csvReadSA cumprodc cumsumc curve cvtos datacreate datacreatecomplex datalist dataload dataloop dataopen datasave date datestr datestring datestrymd dayinyr dayofweek dbAddDatabase dbClose dbCommit dbCreateQuery dbExecQuery dbGetConnectOptions dbGetDatabaseName dbGetDriverName dbGetDrivers dbGetHostName dbGetLastErrorNum dbGetLastErrorText dbGetNumericalPrecPolicy dbGetPassword dbGetPort dbGetTableHeaders dbGetTables dbGetUserName dbHasFeature dbIsDriverAvailable dbIsOpen dbIsOpenError dbOpen dbQueryBindValue dbQueryClear dbQueryCols dbQueryExecPrepared dbQueryFetchAllM dbQueryFetchAllSA dbQueryFetchOneM dbQueryFetchOneSA dbQueryFinish dbQueryGetBoundValue dbQueryGetBoundValues dbQueryGetField dbQueryGetLastErrorNum dbQueryGetLastErrorText dbQueryGetLastInsertID dbQueryGetLastQuery dbQueryGetPosition dbQueryIsActive dbQueryIsForwardOnly dbQueryIsNull dbQueryIsSelect dbQueryIsValid dbQueryPrepare dbQueryRows dbQuerySeek dbQuerySeekFirst dbQuerySeekLast dbQuerySeekNext dbQuerySeekPrevious dbQuerySetForwardOnly dbRemoveDatabase dbRollback dbSetConnectOptions dbSetDatabaseName dbSetHostName dbSetNumericalPrecPolicy dbSetPort dbSetUserName dbTransaction DeleteFile delif delrows denseToSp denseToSpRE denToZero design det detl dfft dffti diag diagrv digamma doswin DOSWinCloseall DOSWinOpen dotfeq dotfeqmt dotfge dotfgemt dotfgt dotfgtmt dotfle dotflemt dotflt dotfltmt dotfne dotfnemt draw drop dsCreate dstat dstatmt dstatmtControlCreate dtdate dtday dttime dttodtv dttostr dttoutc dtvnormal dtvtodt dtvtoutc dummy dummybr dummydn eig eigh eighv eigv elapsedTradingDays endwind envget eof eqSolve eqSolvemt eqSolvemtControlCreate eqSolvemtOutCreate eqSolveset erf erfc erfccplx erfcplx error etdays ethsec etstr EuropeanBinomCall EuropeanBinomCall_Greeks EuropeanBinomCall_ImpVol EuropeanBinomPut EuropeanBinomPut_Greeks EuropeanBinomPut_ImpVol EuropeanBSCall EuropeanBSCall_Greeks EuropeanBSCall_ImpVol EuropeanBSPut EuropeanBSPut_Greeks EuropeanBSPut_ImpVol exctsmpl exec execbg exp extern eye fcheckerr fclearerr feq feqmt fflush fft ffti fftm fftmi fftn fge fgemt fgets fgetsa fgetsat fgetst fgt fgtmt fileinfo filesa fle flemt floor flt fltmt fmod fne fnemt fonts fopen formatcv formatnv fputs fputst fseek fstrerror ftell ftocv ftos ftostrC gamma gammacplx gammaii gausset gdaAppend gdaCreate gdaDStat gdaDStatMat gdaGetIndex gdaGetName gdaGetNames gdaGetOrders gdaGetType gdaGetTypes gdaGetVarInfo gdaIsCplx gdaLoad gdaPack gdaRead gdaReadByIndex gdaReadSome gdaReadSparse gdaReadStruct gdaReportVarInfo gdaSave gdaUpdate gdaUpdateAndPack gdaVars gdaWrite gdaWrite32 gdaWriteSome getarray getdims getf getGAUSShome getmatrix getmatrix4D getname getnamef getNextTradingDay getNextWeekDay getnr getorders getpath getPreviousTradingDay getPreviousWeekDay getRow getscalar3D getscalar4D getTrRow getwind glm gradcplx gradMT gradMTm gradMTT gradMTTm gradp graphprt graphset hasimag header headermt hess hessMT hessMTg hessMTgw hessMTm hessMTmw hessMTT hessMTTg hessMTTgw hessMTTm hessMTw hessp hist histf histp hsec imag indcv indexcat indices indices2 indicesf indicesfn indnv indsav integrate1d integrateControlCreate intgrat2 intgrat3 inthp1 inthp2 inthp3 inthp4 inthpControlCreate intquad1 intquad2 intquad3 intrleav intrleavsa intrsect intsimp inv invpd invswp iscplx iscplxf isden isinfnanmiss ismiss key keyav keyw lag lag1 lagn lapEighb lapEighi lapEighvb lapEighvi lapgEig lapgEigh lapgEighv lapgEigv lapgSchur lapgSvdcst lapgSvds lapgSvdst lapSvdcusv lapSvds lapSvdusv ldlp ldlsol linSolve listwise ln lncdfbvn lncdfbvn2 lncdfmvn lncdfn lncdfn2 lncdfnc lnfact lngammacplx lnpdfmvn lnpdfmvt lnpdfn lnpdft loadd loadstruct loadwind loess loessmt loessmtControlCreate log loglog logx logy lower lowmat lowmat1 ltrisol lu lusol machEpsilon make makevars makewind margin matalloc matinit mattoarray maxbytes maxc maxindc maxv maxvec mbesselei mbesselei0 mbesselei1 mbesseli mbesseli0 mbesseli1 meanc median mergeby mergevar minc minindc minv miss missex missrv moment momentd movingave movingaveExpwgt movingaveWgt nextindex nextn nextnevn nextwind ntos null null1 numCombinations ols olsmt olsmtControlCreate olsqr olsqr2 olsqrmt ones optn optnevn orth outtyp pacf packedToSp packr parse pause pdfCauchy pdfChi pdfExp pdfGenPareto pdfHyperGeo pdfLaplace pdfLogistic pdfn pdfPoisson pdfRayleigh pdfWeibull pi pinv pinvmt plotAddArrow plotAddBar plotAddBox plotAddHist plotAddHistF plotAddHistP plotAddPolar plotAddScatter plotAddShape plotAddTextbox plotAddTS plotAddXY plotArea plotBar plotBox plotClearLayout plotContour plotCustomLayout plotGetDefaults plotHist plotHistF plotHistP plotLayout plotLogLog plotLogX plotLogY plotOpenWindow plotPolar plotSave plotScatter plotSetAxesPen plotSetBar plotSetBarFill plotSetBarStacked plotSetBkdColor plotSetFill plotSetGrid plotSetLegend plotSetLineColor plotSetLineStyle plotSetLineSymbol plotSetLineThickness plotSetNewWindow plotSetTitle plotSetWhichYAxis plotSetXAxisShow plotSetXLabel plotSetXRange plotSetXTicInterval plotSetXTicLabel plotSetYAxisShow plotSetYLabel plotSetYRange plotSetZAxisShow plotSetZLabel plotSurface plotTS plotXY polar polychar polyeval polygamma polyint polymake polymat polymroot polymult polyroot pqgwin previousindex princomp printfm printfmt prodc psi putarray putf putvals pvCreate pvGetIndex pvGetParNames pvGetParVector pvLength pvList pvPack pvPacki pvPackm pvPackmi pvPacks pvPacksi pvPacksm pvPacksmi pvPutParVector pvTest pvUnpack QNewton QNewtonmt QNewtonmtControlCreate QNewtonmtOutCreate QNewtonSet QProg QProgmt QProgmtInCreate qqr qqre qqrep qr qre qrep qrsol qrtsol qtyr qtyre qtyrep quantile quantiled qyr qyre qyrep qz rank rankindx readr real reclassify reclassifyCuts recode recserar recsercp recserrc rerun rescale reshape rets rev rfft rffti rfftip rfftn rfftnp rfftp rndBernoulli rndBeta rndBinomial rndCauchy rndChiSquare rndCon rndCreateState rndExp rndGamma rndGeo rndGumbel rndHyperGeo rndi rndKMbeta rndKMgam rndKMi rndKMn rndKMnb rndKMp rndKMu rndKMvm rndLaplace rndLCbeta rndLCgam rndLCi rndLCn rndLCnb rndLCp rndLCu rndLCvm rndLogNorm rndMTu rndMVn rndMVt rndn rndnb rndNegBinomial rndp rndPoisson rndRayleigh rndStateSkip rndu rndvm rndWeibull rndWishart rotater round rows rowsf rref sampleData satostrC saved saveStruct savewind scale scale3d scalerr scalinfnanmiss scalmiss schtoc schur searchsourcepath seekr select selif seqa seqm setdif setdifsa setvars setvwrmode setwind shell shiftr sin singleindex sinh sleep solpd sortc sortcc sortd sorthc sorthcc sortind sortindc sortmc sortr sortrc spBiconjGradSol spChol spConjGradSol spCreate spDenseSubmat spDiagRvMat spEigv spEye spLDL spline spLU spNumNZE spOnes spreadSheetReadM spreadSheetReadSA spreadSheetWrite spScale spSubmat spToDense spTrTDense spTScalar spZeros sqpSolve sqpSolveMT sqpSolveMTControlCreate sqpSolveMTlagrangeCreate sqpSolveMToutCreate sqpSolveSet sqrt statements stdc stdsc stocv stof strcombine strindx strlen strput strrindx strsect strsplit strsplitPad strtodt strtof strtofcplx strtriml strtrimr strtrunc strtruncl strtruncpad strtruncr submat subscat substute subvec sumc sumr surface svd svd1 svd2 svdcusv svds svdusv sysstate tab tan tanh tempname time timedt timestr timeutc title tkf2eps tkf2ps tocart todaydt toeplitz token topolar trapchk trigamma trimr trunc type typecv typef union unionsa uniqindx uniqindxsa unique uniquesa upmat upmat1 upper utctodt utctodtv utrisol vals varCovMS varCovXS varget vargetl varmall varmares varput varputl vartypef vcm vcms vcx vcxs vec vech vecr vector vget view viewxyz vlist vnamecv volume vput vread vtypecv wait waitc walkindex where window writer xlabel xlsGetSheetCount xlsGetSheetSize xlsGetSheetTypes xlsMakeRange xlsReadM xlsReadSA xlsWrite xlsWriteM xlsWriteSA xpnd xtics xy xyz ylabel ytics zeros zeta zlabel ztics cdfEmpirical dot h5create h5open h5read h5readAttribute h5write h5writeAttribute ldl plotAddErrorBar plotAddSurface plotCDFEmpirical plotSetColormap plotSetContourLabels plotSetLegendFont plotSetTextInterpreter plotSetXTicCount plotSetYTicCount plotSetZLevels powerm strjoin sylvester strtrim",
        literal: "DB_AFTER_LAST_ROW DB_ALL_TABLES DB_BATCH_OPERATIONS DB_BEFORE_FIRST_ROW DB_BLOB DB_EVENT_NOTIFICATIONS DB_FINISH_QUERY DB_HIGH_PRECISION DB_LAST_INSERT_ID DB_LOW_PRECISION_DOUBLE DB_LOW_PRECISION_INT32 DB_LOW_PRECISION_INT64 DB_LOW_PRECISION_NUMBERS DB_MULTIPLE_RESULT_SETS DB_NAMED_PLACEHOLDERS DB_POSITIONAL_PLACEHOLDERS DB_PREPARED_QUERIES DB_QUERY_SIZE DB_SIMPLE_LOCKING DB_SYSTEM_TABLES DB_TABLES DB_TRANSACTIONS DB_UNICODE DB_VIEWS __STDIN __STDOUT __STDERR __FILE_DIR"
      },
      G = I.COMMENT("@", "@"),
      Z = {
        className: "meta",
        begin: "#",
        end: "$",
        keywords: {
          "meta-keyword": "define definecs|10 undef ifdef ifndef iflight ifdllcall ifmac ifos2win ifunix else endif lineson linesoff srcfile srcline"
        },
        contains: [{
          begin: /\\\n/,
          relevance: 0
        }, {
          beginKeywords: "include",
          end: "$",
          keywords: {
            "meta-keyword": "include"
          },
          contains: [{
            className: "meta-string",
            begin: '"',
            end: '"',
            illegal: "\\n"
          }]
        }, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, G]
      },
      C = {
        begin: /\bstruct\s+/,
        end: /\s/,
        keywords: "struct",
        contains: [{
          className: "type",
          begin: I.UNDERSCORE_IDENT_RE,
          relevance: 0
        }]
      },
      W = [{
        className: "params",
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        endsWithParent: !0,
        relevance: 0,
        contains: [{
          className: "literal",
          begin: /\.\.\./
        }, I.C_NUMBER_MODE, I.C_BLOCK_COMMENT_MODE, G, C]
      }],
      w = {
        className: "title",
        begin: I.UNDERSCORE_IDENT_RE,
        relevance: 0
      },
      B = function(F, g, J) {
        let K = I.inherit({
          className: "function",
          beginKeywords: F,
          end: g,
          excludeEnd: !0,
          contains: [].concat(W)
        }, J || {});
        return K.contains.push(w), K.contains.push(I.C_NUMBER_MODE), K.contains.push(I.C_BLOCK_COMMENT_MODE), K.contains.push(G), K
      },
      A = {
        className: "built_in",
        begin: "\\b(" + d.built_in.split(" ").join("|") + ")\\b"
      },
      V = {
        className: "string",
        begin: '"',
        end: '"',
        contains: [I.BACKSLASH_ESCAPE],
        relevance: 0
      },
      X = {
        begin: I.UNDERSCORE_IDENT_RE + "\\s*\\(",
        returnBegin: !0,
        keywords: d,
        relevance: 0,
        contains: [{
          beginKeywords: d.keyword
        }, A, {
          className: "built_in",
          begin: I.UNDERSCORE_IDENT_RE,
          relevance: 0
        }]
      },
      _ = {
        begin: /\(/,
        end: /\)/,
        relevance: 0,
        keywords: {
          built_in: d.built_in,
          literal: d.literal
        },
        contains: [I.C_NUMBER_MODE, I.C_BLOCK_COMMENT_MODE, G, A, X, V, "self"]
      };
    return X.contains.push(_), {
      name: "GAUSS",
      aliases: ["gss"],
      case_insensitive: !0,
      keywords: d,
      illegal: /(\{[%#]|[%#]\}| <- )/,
      contains: [I.C_NUMBER_MODE, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, G, V, Z, {
        className: "keyword",
        begin: /\bexternal (matrix|string|array|sparse matrix|struct|proc|keyword|fn)/
      }, B("proc keyword", ";"), B("fn", "="), {
        beginKeywords: "for threadfor",
        end: /;/,
        relevance: 0,
        contains: [I.C_BLOCK_COMMENT_MODE, G, _]
      }, {
        variants: [{
          begin: I.UNDERSCORE_IDENT_RE + "\\." + I.UNDERSCORE_IDENT_RE
        }, {
          begin: I.UNDERSCORE_IDENT_RE + "\\s*="
        }],
        relevance: 0
      }, X, C]
    }
  }
  jA2.exports = Q19
})
// @from(Start 4188484, End 4189970)
cA2 = Y((OH3, xA2) => {
  function f19(I) {
    let Z = {
        $pattern: "[A-Z_][A-Z0-9_.]*",
        keyword: "IF DO WHILE ENDWHILE CALL ENDIF SUB ENDSUB GOTO REPEAT ENDREPEAT EQ LT GT NE GE LE OR XOR"
      },
      C = {
        className: "meta",
        begin: "([O])([0-9]+)"
      },
      W = I.inherit(I.C_NUMBER_MODE, {
        begin: "([-+]?((\\.\\d+)|(\\d+)(\\.\\d*)?))|" + I.C_NUMBER_RE
      }),
      w = [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.COMMENT(/\(/, /\)/), W, I.inherit(I.APOS_STRING_MODE, {
        illegal: null
      }), I.inherit(I.QUOTE_STRING_MODE, {
        illegal: null
      }), {
        className: "name",
        begin: "([G])([0-9]+\\.?[0-9]?)"
      }, {
        className: "name",
        begin: "([M])([0-9]+\\.?[0-9]?)"
      }, {
        className: "attr",
        begin: "(VC|VS|#)",
        end: "(\\d+)"
      }, {
        className: "attr",
        begin: "(VZOFX|VZOFY|VZOFZ)"
      }, {
        className: "built_in",
        begin: "(ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN)(\\[)",
        contains: [W],
        end: "\\]"
      }, {
        className: "symbol",
        variants: [{
          begin: "N",
          end: "\\d+",
          illegal: "\\W"
        }]
      }];
    return {
      name: "G-code (ISO 6983)",
      aliases: ["nc"],
      case_insensitive: !0,
      keywords: Z,
      contains: [{
        className: "meta",
        begin: "%"
      }, C].concat(w)
    }
  }
  xA2.exports = f19
})
// @from(Start 4189976, End 4190776)
iA2 = Y((mH3, pA2) => {
  function q19(I) {
    return {
      name: "Gherkin",
      aliases: ["feature"],
      keywords: "Feature Background Ability Business Need Scenario Scenarios Scenario Outline Scenario Template Examples Given And Then But When",
      contains: [{
        className: "symbol",
        begin: "\\*",
        relevance: 0
      }, {
        className: "meta",
        begin: "@[^@\\s]+"
      }, {
        begin: "\\|",
        end: "\\|\\w*$",
        contains: [{
          className: "string",
          begin: "[^|]+"
        }]
      }, {
        className: "variable",
        begin: "<",
        end: ">"
      }, I.HASH_COMMENT_MODE, {
        className: "string",
        begin: '"""',
        end: '"""'
      }, I.QUOTE_STRING_MODE]
    }
  }
  pA2.exports = q19
})
// @from(Start 4190782, End 4199242)
rA2 = Y((lH3, nA2) => {
  function R19(I) {
    return {
      name: "GLSL",
      keywords: {
        keyword: "break continue discard do else for if return while switch case default attribute binding buffer ccw centroid centroid varying coherent column_major const cw depth_any depth_greater depth_less depth_unchanged early_fragment_tests equal_spacing flat fractional_even_spacing fractional_odd_spacing highp in index inout invariant invocations isolines layout line_strip lines lines_adjacency local_size_x local_size_y local_size_z location lowp max_vertices mediump noperspective offset origin_upper_left out packed patch pixel_center_integer point_mode points precise precision quads r11f_g11f_b10f r16 r16_snorm r16f r16i r16ui r32f r32i r32ui r8 r8_snorm r8i r8ui readonly restrict rg16 rg16_snorm rg16f rg16i rg16ui rg32f rg32i rg32ui rg8 rg8_snorm rg8i rg8ui rgb10_a2 rgb10_a2ui rgba16 rgba16_snorm rgba16f rgba16i rgba16ui rgba32f rgba32i rgba32ui rgba8 rgba8_snorm rgba8i rgba8ui row_major sample shared smooth std140 std430 stream triangle_strip triangles triangles_adjacency uniform varying vertices volatile writeonly",
        type: "atomic_uint bool bvec2 bvec3 bvec4 dmat2 dmat2x2 dmat2x3 dmat2x4 dmat3 dmat3x2 dmat3x3 dmat3x4 dmat4 dmat4x2 dmat4x3 dmat4x4 double dvec2 dvec3 dvec4 float iimage1D iimage1DArray iimage2D iimage2DArray iimage2DMS iimage2DMSArray iimage2DRect iimage3D iimageBuffer iimageCube iimageCubeArray image1D image1DArray image2D image2DArray image2DMS image2DMSArray image2DRect image3D imageBuffer imageCube imageCubeArray int isampler1D isampler1DArray isampler2D isampler2DArray isampler2DMS isampler2DMSArray isampler2DRect isampler3D isamplerBuffer isamplerCube isamplerCubeArray ivec2 ivec3 ivec4 mat2 mat2x2 mat2x3 mat2x4 mat3 mat3x2 mat3x3 mat3x4 mat4 mat4x2 mat4x3 mat4x4 sampler1D sampler1DArray sampler1DArrayShadow sampler1DShadow sampler2D sampler2DArray sampler2DArrayShadow sampler2DMS sampler2DMSArray sampler2DRect sampler2DRectShadow sampler2DShadow sampler3D samplerBuffer samplerCube samplerCubeArray samplerCubeArrayShadow samplerCubeShadow image1D uimage1DArray uimage2D uimage2DArray uimage2DMS uimage2DMSArray uimage2DRect uimage3D uimageBuffer uimageCube uimageCubeArray uint usampler1D usampler1DArray usampler2D usampler2DArray usampler2DMS usampler2DMSArray usampler2DRect usampler3D samplerBuffer usamplerCube usamplerCubeArray uvec2 uvec3 uvec4 vec2 vec3 vec4 void",
        built_in: "gl_MaxAtomicCounterBindings gl_MaxAtomicCounterBufferSize gl_MaxClipDistances gl_MaxClipPlanes gl_MaxCombinedAtomicCounterBuffers gl_MaxCombinedAtomicCounters gl_MaxCombinedImageUniforms gl_MaxCombinedImageUnitsAndFragmentOutputs gl_MaxCombinedTextureImageUnits gl_MaxComputeAtomicCounterBuffers gl_MaxComputeAtomicCounters gl_MaxComputeImageUniforms gl_MaxComputeTextureImageUnits gl_MaxComputeUniformComponents gl_MaxComputeWorkGroupCount gl_MaxComputeWorkGroupSize gl_MaxDrawBuffers gl_MaxFragmentAtomicCounterBuffers gl_MaxFragmentAtomicCounters gl_MaxFragmentImageUniforms gl_MaxFragmentInputComponents gl_MaxFragmentInputVectors gl_MaxFragmentUniformComponents gl_MaxFragmentUniformVectors gl_MaxGeometryAtomicCounterBuffers gl_MaxGeometryAtomicCounters gl_MaxGeometryImageUniforms gl_MaxGeometryInputComponents gl_MaxGeometryOutputComponents gl_MaxGeometryOutputVertices gl_MaxGeometryTextureImageUnits gl_MaxGeometryTotalOutputComponents gl_MaxGeometryUniformComponents gl_MaxGeometryVaryingComponents gl_MaxImageSamples gl_MaxImageUnits gl_MaxLights gl_MaxPatchVertices gl_MaxProgramTexelOffset gl_MaxTessControlAtomicCounterBuffers gl_MaxTessControlAtomicCounters gl_MaxTessControlImageUniforms gl_MaxTessControlInputComponents gl_MaxTessControlOutputComponents gl_MaxTessControlTextureImageUnits gl_MaxTessControlTotalOutputComponents gl_MaxTessControlUniformComponents gl_MaxTessEvaluationAtomicCounterBuffers gl_MaxTessEvaluationAtomicCounters gl_MaxTessEvaluationImageUniforms gl_MaxTessEvaluationInputComponents gl_MaxTessEvaluationOutputComponents gl_MaxTessEvaluationTextureImageUnits gl_MaxTessEvaluationUniformComponents gl_MaxTessGenLevel gl_MaxTessPatchComponents gl_MaxTextureCoords gl_MaxTextureImageUnits gl_MaxTextureUnits gl_MaxVaryingComponents gl_MaxVaryingFloats gl_MaxVaryingVectors gl_MaxVertexAtomicCounterBuffers gl_MaxVertexAtomicCounters gl_MaxVertexAttribs gl_MaxVertexImageUniforms gl_MaxVertexOutputComponents gl_MaxVertexOutputVectors gl_MaxVertexTextureImageUnits gl_MaxVertexUniformComponents gl_MaxVertexUniformVectors gl_MaxViewports gl_MinProgramTexelOffset gl_BackColor gl_BackLightModelProduct gl_BackLightProduct gl_BackMaterial gl_BackSecondaryColor gl_ClipDistance gl_ClipPlane gl_ClipVertex gl_Color gl_DepthRange gl_EyePlaneQ gl_EyePlaneR gl_EyePlaneS gl_EyePlaneT gl_Fog gl_FogCoord gl_FogFragCoord gl_FragColor gl_FragCoord gl_FragData gl_FragDepth gl_FrontColor gl_FrontFacing gl_FrontLightModelProduct gl_FrontLightProduct gl_FrontMaterial gl_FrontSecondaryColor gl_GlobalInvocationID gl_InstanceID gl_InvocationID gl_Layer gl_LightModel gl_LightSource gl_LocalInvocationID gl_LocalInvocationIndex gl_ModelViewMatrix gl_ModelViewMatrixInverse gl_ModelViewMatrixInverseTranspose gl_ModelViewMatrixTranspose gl_ModelViewProjectionMatrix gl_ModelViewProjectionMatrixInverse gl_ModelViewProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixTranspose gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_Normal gl_NormalMatrix gl_NormalScale gl_NumSamples gl_NumWorkGroups gl_ObjectPlaneQ gl_ObjectPlaneR gl_ObjectPlaneS gl_ObjectPlaneT gl_PatchVerticesIn gl_Point gl_PointCoord gl_PointSize gl_Position gl_PrimitiveID gl_PrimitiveIDIn gl_ProjectionMatrix gl_ProjectionMatrixInverse gl_ProjectionMatrixInverseTranspose gl_ProjectionMatrixTranspose gl_SampleID gl_SampleMask gl_SampleMaskIn gl_SamplePosition gl_SecondaryColor gl_TessCoord gl_TessLevelInner gl_TessLevelOuter gl_TexCoord gl_TextureEnvColor gl_TextureMatrix gl_TextureMatrixInverse gl_TextureMatrixInverseTranspose gl_TextureMatrixTranspose gl_Vertex gl_VertexID gl_ViewportIndex gl_WorkGroupID gl_WorkGroupSize gl_in gl_out EmitStreamVertex EmitVertex EndPrimitive EndStreamPrimitive abs acos acosh all any asin asinh atan atanh atomicAdd atomicAnd atomicCompSwap atomicCounter atomicCounterDecrement atomicCounterIncrement atomicExchange atomicMax atomicMin atomicOr atomicXor barrier bitCount bitfieldExtract bitfieldInsert bitfieldReverse ceil clamp cos cosh cross dFdx dFdy degrees determinant distance dot equal exp exp2 faceforward findLSB findMSB floatBitsToInt floatBitsToUint floor fma fract frexp ftransform fwidth greaterThan greaterThanEqual groupMemoryBarrier imageAtomicAdd imageAtomicAnd imageAtomicCompSwap imageAtomicExchange imageAtomicMax imageAtomicMin imageAtomicOr imageAtomicXor imageLoad imageSize imageStore imulExtended intBitsToFloat interpolateAtCentroid interpolateAtOffset interpolateAtSample inverse inversesqrt isinf isnan ldexp length lessThan lessThanEqual log log2 matrixCompMult max memoryBarrier memoryBarrierAtomicCounter memoryBarrierBuffer memoryBarrierImage memoryBarrierShared min mix mod modf noise1 noise2 noise3 noise4 normalize not notEqual outerProduct packDouble2x32 packHalf2x16 packSnorm2x16 packSnorm4x8 packUnorm2x16 packUnorm4x8 pow radians reflect refract round roundEven shadow1D shadow1DLod shadow1DProj shadow1DProjLod shadow2D shadow2DLod shadow2DProj shadow2DProjLod sign sin sinh smoothstep sqrt step tan tanh texelFetch texelFetchOffset texture texture1D texture1DLod texture1DProj texture1DProjLod texture2D texture2DLod texture2DProj texture2DProjLod texture3D texture3DLod texture3DProj texture3DProjLod textureCube textureCubeLod textureGather textureGatherOffset textureGatherOffsets textureGrad textureGradOffset textureLod textureLodOffset textureOffset textureProj textureProjGrad textureProjGradOffset textureProjLod textureProjLodOffset textureProjOffset textureQueryLevels textureQueryLod textureSize transpose trunc uaddCarry uintBitsToFloat umulExtended unpackDouble2x32 unpackHalf2x16 unpackSnorm2x16 unpackSnorm4x8 unpackUnorm2x16 unpackUnorm4x8 usubBorrow",
        literal: "true false"
      },
      illegal: '"',
      contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.C_NUMBER_MODE, {
        className: "meta",
        begin: "#",
        end: "$"
      }]
    }
  }
  nA2.exports = R19
})
// @from(Start 4199248, End 4249904)
sA2 = Y((bH3, aA2) => {
  function U19(I) {
    return {
      name: "GML",
      case_insensitive: !1,
      keywords: {
        keyword: "begin end if then else while do for break continue with until repeat exit and or xor not return mod div switch case default var globalvar enum function constructor delete #macro #region #endregion",
        built_in: "is_real is_string is_array is_undefined is_int32 is_int64 is_ptr is_vec3 is_vec4 is_matrix is_bool is_method is_struct is_infinity is_nan is_numeric typeof variable_global_exists variable_global_get variable_global_set variable_instance_exists variable_instance_get variable_instance_set variable_instance_get_names variable_struct_exists variable_struct_get variable_struct_get_names variable_struct_names_count variable_struct_remove variable_struct_set array_delete array_insert array_length array_length_1d array_length_2d array_height_2d array_equals array_create array_copy array_pop array_push array_resize array_sort random random_range irandom irandom_range random_set_seed random_get_seed randomize randomise choose abs round floor ceil sign frac sqrt sqr exp ln log2 log10 sin cos tan arcsin arccos arctan arctan2 dsin dcos dtan darcsin darccos darctan darctan2 degtorad radtodeg power logn min max mean median clamp lerp dot_product dot_product_3d dot_product_normalised dot_product_3d_normalised dot_product_normalized dot_product_3d_normalized math_set_epsilon math_get_epsilon angle_difference point_distance_3d point_distance point_direction lengthdir_x lengthdir_y real string int64 ptr string_format chr ansi_char ord string_length string_byte_length string_pos string_copy string_char_at string_ord_at string_byte_at string_set_byte_at string_delete string_insert string_lower string_upper string_repeat string_letters string_digits string_lettersdigits string_replace string_replace_all string_count string_hash_to_newline clipboard_has_text clipboard_set_text clipboard_get_text date_current_datetime date_create_datetime date_valid_datetime date_inc_year date_inc_month date_inc_week date_inc_day date_inc_hour date_inc_minute date_inc_second date_get_year date_get_month date_get_week date_get_day date_get_hour date_get_minute date_get_second date_get_weekday date_get_day_of_year date_get_hour_of_year date_get_minute_of_year date_get_second_of_year date_year_span date_month_span date_week_span date_day_span date_hour_span date_minute_span date_second_span date_compare_datetime date_compare_date date_compare_time date_date_of date_time_of date_datetime_string date_date_string date_time_string date_days_in_month date_days_in_year date_leap_year date_is_today date_set_timezone date_get_timezone game_set_speed game_get_speed motion_set motion_add place_free place_empty place_meeting place_snapped move_random move_snap move_towards_point move_contact_solid move_contact_all move_outside_solid move_outside_all move_bounce_solid move_bounce_all move_wrap distance_to_point distance_to_object position_empty position_meeting path_start path_end mp_linear_step mp_potential_step mp_linear_step_object mp_potential_step_object mp_potential_settings mp_linear_path mp_potential_path mp_linear_path_object mp_potential_path_object mp_grid_create mp_grid_destroy mp_grid_clear_all mp_grid_clear_cell mp_grid_clear_rectangle mp_grid_add_cell mp_grid_get_cell mp_grid_add_rectangle mp_grid_add_instances mp_grid_path mp_grid_draw mp_grid_to_ds_grid collision_point collision_rectangle collision_circle collision_ellipse collision_line collision_point_list collision_rectangle_list collision_circle_list collision_ellipse_list collision_line_list instance_position_list instance_place_list point_in_rectangle point_in_triangle point_in_circle rectangle_in_rectangle rectangle_in_triangle rectangle_in_circle instance_find instance_exists instance_number instance_position instance_nearest instance_furthest instance_place instance_create_depth instance_create_layer instance_copy instance_change instance_destroy position_destroy position_change instance_id_get instance_deactivate_all instance_deactivate_object instance_deactivate_region instance_activate_all instance_activate_object instance_activate_region room_goto room_goto_previous room_goto_next room_previous room_next room_restart game_end game_restart game_load game_save game_save_buffer game_load_buffer event_perform event_user event_perform_object event_inherited show_debug_message show_debug_overlay debug_event debug_get_callstack alarm_get alarm_set font_texture_page_size keyboard_set_map keyboard_get_map keyboard_unset_map keyboard_check keyboard_check_pressed keyboard_check_released keyboard_check_direct keyboard_get_numlock keyboard_set_numlock keyboard_key_press keyboard_key_release keyboard_clear io_clear mouse_check_button mouse_check_button_pressed mouse_check_button_released mouse_wheel_up mouse_wheel_down mouse_clear draw_self draw_sprite draw_sprite_pos draw_sprite_ext draw_sprite_stretched draw_sprite_stretched_ext draw_sprite_tiled draw_sprite_tiled_ext draw_sprite_part draw_sprite_part_ext draw_sprite_general draw_clear draw_clear_alpha draw_point draw_line draw_line_width draw_rectangle draw_roundrect draw_roundrect_ext draw_triangle draw_circle draw_ellipse draw_set_circle_precision draw_arrow draw_button draw_path draw_healthbar draw_getpixel draw_getpixel_ext draw_set_colour draw_set_color draw_set_alpha draw_get_colour draw_get_color draw_get_alpha merge_colour make_colour_rgb make_colour_hsv colour_get_red colour_get_green colour_get_blue colour_get_hue colour_get_saturation colour_get_value merge_color make_color_rgb make_color_hsv color_get_red color_get_green color_get_blue color_get_hue color_get_saturation color_get_value merge_color screen_save screen_save_part draw_set_font draw_set_halign draw_set_valign draw_text draw_text_ext string_width string_height string_width_ext string_height_ext draw_text_transformed draw_text_ext_transformed draw_text_colour draw_text_ext_colour draw_text_transformed_colour draw_text_ext_transformed_colour draw_text_color draw_text_ext_color draw_text_transformed_color draw_text_ext_transformed_color draw_point_colour draw_line_colour draw_line_width_colour draw_rectangle_colour draw_roundrect_colour draw_roundrect_colour_ext draw_triangle_colour draw_circle_colour draw_ellipse_colour draw_point_color draw_line_color draw_line_width_color draw_rectangle_color draw_roundrect_color draw_roundrect_color_ext draw_triangle_color draw_circle_color draw_ellipse_color draw_primitive_begin draw_vertex draw_vertex_colour draw_vertex_color draw_primitive_end sprite_get_uvs font_get_uvs sprite_get_texture font_get_texture texture_get_width texture_get_height texture_get_uvs draw_primitive_begin_texture draw_vertex_texture draw_vertex_texture_colour draw_vertex_texture_color texture_global_scale surface_create surface_create_ext surface_resize surface_free surface_exists surface_get_width surface_get_height surface_get_texture surface_set_target surface_set_target_ext surface_reset_target surface_depth_disable surface_get_depth_disable draw_surface draw_surface_stretched draw_surface_tiled draw_surface_part draw_surface_ext draw_surface_stretched_ext draw_surface_tiled_ext draw_surface_part_ext draw_surface_general surface_getpixel surface_getpixel_ext surface_save surface_save_part surface_copy surface_copy_part application_surface_draw_enable application_get_position application_surface_enable application_surface_is_enabled display_get_width display_get_height display_get_orientation display_get_gui_width display_get_gui_height display_reset display_mouse_get_x display_mouse_get_y display_mouse_set display_set_ui_visibility window_set_fullscreen window_get_fullscreen window_set_caption window_set_min_width window_set_max_width window_set_min_height window_set_max_height window_get_visible_rects window_get_caption window_set_cursor window_get_cursor window_set_colour window_get_colour window_set_color window_get_color window_set_position window_set_size window_set_rectangle window_center window_get_x window_get_y window_get_width window_get_height window_mouse_get_x window_mouse_get_y window_mouse_set window_view_mouse_get_x window_view_mouse_get_y window_views_mouse_get_x window_views_mouse_get_y audio_listener_position audio_listener_velocity audio_listener_orientation audio_emitter_position audio_emitter_create audio_emitter_free audio_emitter_exists audio_emitter_pitch audio_emitter_velocity audio_emitter_falloff audio_emitter_gain audio_play_sound audio_play_sound_on audio_play_sound_at audio_stop_sound audio_resume_music audio_music_is_playing audio_resume_sound audio_pause_sound audio_pause_music audio_channel_num audio_sound_length audio_get_type audio_falloff_set_model audio_play_music audio_stop_music audio_master_gain audio_music_gain audio_sound_gain audio_sound_pitch audio_stop_all audio_resume_all audio_pause_all audio_is_playing audio_is_paused audio_exists audio_sound_set_track_position audio_sound_get_track_position audio_emitter_get_gain audio_emitter_get_pitch audio_emitter_get_x audio_emitter_get_y audio_emitter_get_z audio_emitter_get_vx audio_emitter_get_vy audio_emitter_get_vz audio_listener_set_position audio_listener_set_velocity audio_listener_set_orientation audio_listener_get_data audio_set_master_gain audio_get_master_gain audio_sound_get_gain audio_sound_get_pitch audio_get_name audio_sound_set_track_position audio_sound_get_track_position audio_create_stream audio_destroy_stream audio_create_sync_group audio_destroy_sync_group audio_play_in_sync_group audio_start_sync_group audio_stop_sync_group audio_pause_sync_group audio_resume_sync_group audio_sync_group_get_track_pos audio_sync_group_debug audio_sync_group_is_playing audio_debug audio_group_load audio_group_unload audio_group_is_loaded audio_group_load_progress audio_group_name audio_group_stop_all audio_group_set_gain audio_create_buffer_sound audio_free_buffer_sound audio_create_play_queue audio_free_play_queue audio_queue_sound audio_get_recorder_count audio_get_recorder_info audio_start_recording audio_stop_recording audio_sound_get_listener_mask audio_emitter_get_listener_mask audio_get_listener_mask audio_sound_set_listener_mask audio_emitter_set_listener_mask audio_set_listener_mask audio_get_listener_count audio_get_listener_info audio_system show_message show_message_async clickable_add clickable_add_ext clickable_change clickable_change_ext clickable_delete clickable_exists clickable_set_style show_question show_question_async get_integer get_string get_integer_async get_string_async get_login_async get_open_filename get_save_filename get_open_filename_ext get_save_filename_ext show_error highscore_clear highscore_add highscore_value highscore_name draw_highscore sprite_exists sprite_get_name sprite_get_number sprite_get_width sprite_get_height sprite_get_xoffset sprite_get_yoffset sprite_get_bbox_left sprite_get_bbox_right sprite_get_bbox_top sprite_get_bbox_bottom sprite_save sprite_save_strip sprite_set_cache_size sprite_set_cache_size_ext sprite_get_tpe sprite_prefetch sprite_prefetch_multi sprite_flush sprite_flush_multi sprite_set_speed sprite_get_speed_type sprite_get_speed font_exists font_get_name font_get_fontname font_get_bold font_get_italic font_get_first font_get_last font_get_size font_set_cache_size path_exists path_get_name path_get_length path_get_time path_get_kind path_get_closed path_get_precision path_get_number path_get_point_x path_get_point_y path_get_point_speed path_get_x path_get_y path_get_speed script_exists script_get_name timeline_add timeline_delete timeline_clear timeline_exists timeline_get_name timeline_moment_clear timeline_moment_add_script timeline_size timeline_max_moment object_exists object_get_name object_get_sprite object_get_solid object_get_visible object_get_persistent object_get_mask object_get_parent object_get_physics object_is_ancestor room_exists room_get_name sprite_set_offset sprite_duplicate sprite_assign sprite_merge sprite_add sprite_replace sprite_create_from_surface sprite_add_from_surface sprite_delete sprite_set_alpha_from_sprite sprite_collision_mask font_add_enable_aa font_add_get_enable_aa font_add font_add_sprite font_add_sprite_ext font_replace font_replace_sprite font_replace_sprite_ext font_delete path_set_kind path_set_closed path_set_precision path_add path_assign path_duplicate path_append path_delete path_add_point path_insert_point path_change_point path_delete_point path_clear_points path_reverse path_mirror path_flip path_rotate path_rescale path_shift script_execute object_set_sprite object_set_solid object_set_visible object_set_persistent object_set_mask room_set_width room_set_height room_set_persistent room_set_background_colour room_set_background_color room_set_view room_set_viewport room_get_viewport room_set_view_enabled room_add room_duplicate room_assign room_instance_add room_instance_clear room_get_camera room_set_camera asset_get_index asset_get_type file_text_open_from_string file_text_open_read file_text_open_write file_text_open_append file_text_close file_text_write_string file_text_write_real file_text_writeln file_text_read_string file_text_read_real file_text_readln file_text_eof file_text_eoln file_exists file_delete file_rename file_copy directory_exists directory_create directory_destroy file_find_first file_find_next file_find_close file_attributes filename_name filename_path filename_dir filename_drive filename_ext filename_change_ext file_bin_open file_bin_rewrite file_bin_close file_bin_position file_bin_size file_bin_seek file_bin_write_byte file_bin_read_byte parameter_count parameter_string environment_get_variable ini_open_from_string ini_open ini_close ini_read_string ini_read_real ini_write_string ini_write_real ini_key_exists ini_section_exists ini_key_delete ini_section_delete ds_set_precision ds_exists ds_stack_create ds_stack_destroy ds_stack_clear ds_stack_copy ds_stack_size ds_stack_empty ds_stack_push ds_stack_pop ds_stack_top ds_stack_write ds_stack_read ds_queue_create ds_queue_destroy ds_queue_clear ds_queue_copy ds_queue_size ds_queue_empty ds_queue_enqueue ds_queue_dequeue ds_queue_head ds_queue_tail ds_queue_write ds_queue_read ds_list_create ds_list_destroy ds_list_clear ds_list_copy ds_list_size ds_list_empty ds_list_add ds_list_insert ds_list_replace ds_list_delete ds_list_find_index ds_list_find_value ds_list_mark_as_list ds_list_mark_as_map ds_list_sort ds_list_shuffle ds_list_write ds_list_read ds_list_set ds_map_create ds_map_destroy ds_map_clear ds_map_copy ds_map_size ds_map_empty ds_map_add ds_map_add_list ds_map_add_map ds_map_replace ds_map_replace_map ds_map_replace_list ds_map_delete ds_map_exists ds_map_find_value ds_map_find_previous ds_map_find_next ds_map_find_first ds_map_find_last ds_map_write ds_map_read ds_map_secure_save ds_map_secure_load ds_map_secure_load_buffer ds_map_secure_save_buffer ds_map_set ds_priority_create ds_priority_destroy ds_priority_clear ds_priority_copy ds_priority_size ds_priority_empty ds_priority_add ds_priority_change_priority ds_priority_find_priority ds_priority_delete_value ds_priority_delete_min ds_priority_find_min ds_priority_delete_max ds_priority_find_max ds_priority_write ds_priority_read ds_grid_create ds_grid_destroy ds_grid_copy ds_grid_resize ds_grid_width ds_grid_height ds_grid_clear ds_grid_set ds_grid_add ds_grid_multiply ds_grid_set_region ds_grid_add_region ds_grid_multiply_region ds_grid_set_disk ds_grid_add_disk ds_grid_multiply_disk ds_grid_set_grid_region ds_grid_add_grid_region ds_grid_multiply_grid_region ds_grid_get ds_grid_get_sum ds_grid_get_max ds_grid_get_min ds_grid_get_mean ds_grid_get_disk_sum ds_grid_get_disk_min ds_grid_get_disk_max ds_grid_get_disk_mean ds_grid_value_exists ds_grid_value_x ds_grid_value_y ds_grid_value_disk_exists ds_grid_value_disk_x ds_grid_value_disk_y ds_grid_shuffle ds_grid_write ds_grid_read ds_grid_sort ds_grid_set ds_grid_get effect_create_below effect_create_above effect_clear part_type_create part_type_destroy part_type_exists part_type_clear part_type_shape part_type_sprite part_type_size part_type_scale part_type_orientation part_type_life part_type_step part_type_death part_type_speed part_type_direction part_type_gravity part_type_colour1 part_type_colour2 part_type_colour3 part_type_colour_mix part_type_colour_rgb part_type_colour_hsv part_type_color1 part_type_color2 part_type_color3 part_type_color_mix part_type_color_rgb part_type_color_hsv part_type_alpha1 part_type_alpha2 part_type_alpha3 part_type_blend part_system_create part_system_create_layer part_system_destroy part_system_exists part_system_clear part_system_draw_order part_system_depth part_system_position part_system_automatic_update part_system_automatic_draw part_system_update part_system_drawit part_system_get_layer part_system_layer part_particles_create part_particles_create_colour part_particles_create_color part_particles_clear part_particles_count part_emitter_create part_emitter_destroy part_emitter_destroy_all part_emitter_exists part_emitter_clear part_emitter_region part_emitter_burst part_emitter_stream external_call external_define external_free window_handle window_device matrix_get matrix_set matrix_build_identity matrix_build matrix_build_lookat matrix_build_projection_ortho matrix_build_projection_perspective matrix_build_projection_perspective_fov matrix_multiply matrix_transform_vertex matrix_stack_push matrix_stack_pop matrix_stack_multiply matrix_stack_set matrix_stack_clear matrix_stack_top matrix_stack_is_empty browser_input_capture os_get_config os_get_info os_get_language os_get_region os_lock_orientation display_get_dpi_x display_get_dpi_y display_set_gui_size display_set_gui_maximise display_set_gui_maximize device_mouse_dbclick_enable display_set_timing_method display_get_timing_method display_set_sleep_margin display_get_sleep_margin virtual_key_add virtual_key_hide virtual_key_delete virtual_key_show draw_enable_drawevent draw_enable_swf_aa draw_set_swf_aa_level draw_get_swf_aa_level draw_texture_flush draw_flush gpu_set_blendenable gpu_set_ztestenable gpu_set_zfunc gpu_set_zwriteenable gpu_set_lightingenable gpu_set_fog gpu_set_cullmode gpu_set_blendmode gpu_set_blendmode_ext gpu_set_blendmode_ext_sepalpha gpu_set_colorwriteenable gpu_set_colourwriteenable gpu_set_alphatestenable gpu_set_alphatestref gpu_set_alphatestfunc gpu_set_texfilter gpu_set_texfilter_ext gpu_set_texrepeat gpu_set_texrepeat_ext gpu_set_tex_filter gpu_set_tex_filter_ext gpu_set_tex_repeat gpu_set_tex_repeat_ext gpu_set_tex_mip_filter gpu_set_tex_mip_filter_ext gpu_set_tex_mip_bias gpu_set_tex_mip_bias_ext gpu_set_tex_min_mip gpu_set_tex_min_mip_ext gpu_set_tex_max_mip gpu_set_tex_max_mip_ext gpu_set_tex_max_aniso gpu_set_tex_max_aniso_ext gpu_set_tex_mip_enable gpu_set_tex_mip_enable_ext gpu_get_blendenable gpu_get_ztestenable gpu_get_zfunc gpu_get_zwriteenable gpu_get_lightingenable gpu_get_fog gpu_get_cullmode gpu_get_blendmode gpu_get_blendmode_ext gpu_get_blendmode_ext_sepalpha gpu_get_blendmode_src gpu_get_blendmode_dest gpu_get_blendmode_srcalpha gpu_get_blendmode_destalpha gpu_get_colorwriteenable gpu_get_colourwriteenable gpu_get_alphatestenable gpu_get_alphatestref gpu_get_alphatestfunc gpu_get_texfilter gpu_get_texfilter_ext gpu_get_texrepeat gpu_get_texrepeat_ext gpu_get_tex_filter gpu_get_tex_filter_ext gpu_get_tex_repeat gpu_get_tex_repeat_ext gpu_get_tex_mip_filter gpu_get_tex_mip_filter_ext gpu_get_tex_mip_bias gpu_get_tex_mip_bias_ext gpu_get_tex_min_mip gpu_get_tex_min_mip_ext gpu_get_tex_max_mip gpu_get_tex_max_mip_ext gpu_get_tex_max_aniso gpu_get_tex_max_aniso_ext gpu_get_tex_mip_enable gpu_get_tex_mip_enable_ext gpu_push_state gpu_pop_state gpu_get_state gpu_set_state draw_light_define_ambient draw_light_define_direction draw_light_define_point draw_light_enable draw_set_lighting draw_light_get_ambient draw_light_get draw_get_lighting shop_leave_rating url_get_domain url_open url_open_ext url_open_full get_timer achievement_login achievement_logout achievement_post achievement_increment achievement_post_score achievement_available achievement_show_achievements achievement_show_leaderboards achievement_load_friends achievement_load_leaderboard achievement_send_challenge achievement_load_progress achievement_reset achievement_login_status achievement_get_pic achievement_show_challenge_notifications achievement_get_challenges achievement_event achievement_show achievement_get_info cloud_file_save cloud_string_save cloud_synchronise ads_enable ads_disable ads_setup ads_engagement_launch ads_engagement_available ads_engagement_active ads_event ads_event_preload ads_set_reward_callback ads_get_display_height ads_get_display_width ads_move ads_interstitial_available ads_interstitial_display device_get_tilt_x device_get_tilt_y device_get_tilt_z device_is_keypad_open device_mouse_check_button device_mouse_check_button_pressed device_mouse_check_button_released device_mouse_x device_mouse_y device_mouse_raw_x device_mouse_raw_y device_mouse_x_to_gui device_mouse_y_to_gui iap_activate iap_status iap_enumerate_products iap_restore_all iap_acquire iap_consume iap_product_details iap_purchase_details facebook_init facebook_login facebook_status facebook_graph_request facebook_dialog facebook_logout facebook_launch_offerwall facebook_post_message facebook_send_invite facebook_user_id facebook_accesstoken facebook_check_permission facebook_request_read_permissions facebook_request_publish_permissions gamepad_is_supported gamepad_get_device_count gamepad_is_connected gamepad_get_description gamepad_get_button_threshold gamepad_set_button_threshold gamepad_get_axis_deadzone gamepad_set_axis_deadzone gamepad_button_count gamepad_button_check gamepad_button_check_pressed gamepad_button_check_released gamepad_button_value gamepad_axis_count gamepad_axis_value gamepad_set_vibration gamepad_set_colour gamepad_set_color os_is_paused window_has_focus code_is_compiled http_get http_get_file http_post_string http_request json_encode json_decode zip_unzip load_csv base64_encode base64_decode md5_string_unicode md5_string_utf8 md5_file os_is_network_connected sha1_string_unicode sha1_string_utf8 sha1_file os_powersave_enable analytics_event analytics_event_ext win8_livetile_tile_notification win8_livetile_tile_clear win8_livetile_badge_notification win8_livetile_badge_clear win8_livetile_queue_enable win8_secondarytile_pin win8_secondarytile_badge_notification win8_secondarytile_delete win8_livetile_notification_begin win8_livetile_notification_secondary_begin win8_livetile_notification_expiry win8_livetile_notification_tag win8_livetile_notification_text_add win8_livetile_notification_image_add win8_livetile_notification_end win8_appbar_enable win8_appbar_add_element win8_appbar_remove_element win8_settingscharm_add_entry win8_settingscharm_add_html_entry win8_settingscharm_add_xaml_entry win8_settingscharm_set_xaml_property win8_settingscharm_get_xaml_property win8_settingscharm_remove_entry win8_share_image win8_share_screenshot win8_share_file win8_share_url win8_share_text win8_search_enable win8_search_disable win8_search_add_suggestions win8_device_touchscreen_available win8_license_initialize_sandbox win8_license_trial_version winphone_license_trial_version winphone_tile_title winphone_tile_count winphone_tile_back_title winphone_tile_back_content winphone_tile_back_content_wide winphone_tile_front_image winphone_tile_front_image_small winphone_tile_front_image_wide winphone_tile_back_image winphone_tile_back_image_wide winphone_tile_background_colour winphone_tile_background_color winphone_tile_icon_image winphone_tile_small_icon_image winphone_tile_wide_content winphone_tile_cycle_images winphone_tile_small_background_image physics_world_create physics_world_gravity physics_world_update_speed physics_world_update_iterations physics_world_draw_debug physics_pause_enable physics_fixture_create physics_fixture_set_kinematic physics_fixture_set_density physics_fixture_set_awake physics_fixture_set_restitution physics_fixture_set_friction physics_fixture_set_collision_group physics_fixture_set_sensor physics_fixture_set_linear_damping physics_fixture_set_angular_damping physics_fixture_set_circle_shape physics_fixture_set_box_shape physics_fixture_set_edge_shape physics_fixture_set_polygon_shape physics_fixture_set_chain_shape physics_fixture_add_point physics_fixture_bind physics_fixture_bind_ext physics_fixture_delete physics_apply_force physics_apply_impulse physics_apply_angular_impulse physics_apply_local_force physics_apply_local_impulse physics_apply_torque physics_mass_properties physics_draw_debug physics_test_overlap physics_remove_fixture physics_set_friction physics_set_density physics_set_restitution physics_get_friction physics_get_density physics_get_restitution physics_joint_distance_create physics_joint_rope_create physics_joint_revolute_create physics_joint_prismatic_create physics_joint_pulley_create physics_joint_wheel_create physics_joint_weld_create physics_joint_friction_create physics_joint_gear_create physics_joint_enable_motor physics_joint_get_value physics_joint_set_value physics_joint_delete physics_particle_create physics_particle_delete physics_particle_delete_region_circle physics_particle_delete_region_box physics_particle_delete_region_poly physics_particle_set_flags physics_particle_set_category_flags physics_particle_draw physics_particle_draw_ext physics_particle_count physics_particle_get_data physics_particle_get_data_particle physics_particle_group_begin physics_particle_group_circle physics_particle_group_box physics_particle_group_polygon physics_particle_group_add_point physics_particle_group_end physics_particle_group_join physics_particle_group_delete physics_particle_group_count physics_particle_group_get_data physics_particle_group_get_mass physics_particle_group_get_inertia physics_particle_group_get_centre_x physics_particle_group_get_centre_y physics_particle_group_get_vel_x physics_particle_group_get_vel_y physics_particle_group_get_ang_vel physics_particle_group_get_x physics_particle_group_get_y physics_particle_group_get_angle physics_particle_set_group_flags physics_particle_get_group_flags physics_particle_get_max_count physics_particle_get_radius physics_particle_get_density physics_particle_get_damping physics_particle_get_gravity_scale physics_particle_set_max_count physics_particle_set_radius physics_particle_set_density physics_particle_set_damping physics_particle_set_gravity_scale network_create_socket network_create_socket_ext network_create_server network_create_server_raw network_connect network_connect_raw network_send_packet network_send_raw network_send_broadcast network_send_udp network_send_udp_raw network_set_timeout network_set_config network_resolve network_destroy buffer_create buffer_write buffer_read buffer_seek buffer_get_surface buffer_set_surface buffer_delete buffer_exists buffer_get_type buffer_get_alignment buffer_poke buffer_peek buffer_save buffer_save_ext buffer_load buffer_load_ext buffer_load_partial buffer_copy buffer_fill buffer_get_size buffer_tell buffer_resize buffer_md5 buffer_sha1 buffer_base64_encode buffer_base64_decode buffer_base64_decode_ext buffer_sizeof buffer_get_address buffer_create_from_vertex_buffer buffer_create_from_vertex_buffer_ext buffer_copy_from_vertex_buffer buffer_async_group_begin buffer_async_group_option buffer_async_group_end buffer_load_async buffer_save_async gml_release_mode gml_pragma steam_activate_overlay steam_is_overlay_enabled steam_is_overlay_activated steam_get_persona_name steam_initialised steam_is_cloud_enabled_for_app steam_is_cloud_enabled_for_account steam_file_persisted steam_get_quota_total steam_get_quota_free steam_file_write steam_file_write_file steam_file_read steam_file_delete steam_file_exists steam_file_size steam_file_share steam_is_screenshot_requested steam_send_screenshot steam_is_user_logged_on steam_get_user_steam_id steam_user_owns_dlc steam_user_installed_dlc steam_set_achievement steam_get_achievement steam_clear_achievement steam_set_stat_int steam_set_stat_float steam_set_stat_avg_rate steam_get_stat_int steam_get_stat_float steam_get_stat_avg_rate steam_reset_all_stats steam_reset_all_stats_achievements steam_stats_ready steam_create_leaderboard steam_upload_score steam_upload_score_ext steam_download_scores_around_user steam_download_scores steam_download_friends_scores steam_upload_score_buffer steam_upload_score_buffer_ext steam_current_game_language steam_available_languages steam_activate_overlay_browser steam_activate_overlay_user steam_activate_overlay_store steam_get_user_persona_name steam_get_app_id steam_get_user_account_id steam_ugc_download steam_ugc_create_item steam_ugc_start_item_update steam_ugc_set_item_title steam_ugc_set_item_description steam_ugc_set_item_visibility steam_ugc_set_item_tags steam_ugc_set_item_content steam_ugc_set_item_preview steam_ugc_submit_item_update steam_ugc_get_item_update_progress steam_ugc_subscribe_item steam_ugc_unsubscribe_item steam_ugc_num_subscribed_items steam_ugc_get_subscribed_items steam_ugc_get_item_install_info steam_ugc_get_item_update_info steam_ugc_request_item_details steam_ugc_create_query_user steam_ugc_create_query_user_ex steam_ugc_create_query_all steam_ugc_create_query_all_ex steam_ugc_query_set_cloud_filename_filter steam_ugc_query_set_match_any_tag steam_ugc_query_set_search_text steam_ugc_query_set_ranked_by_trend_days steam_ugc_query_add_required_tag steam_ugc_query_add_excluded_tag steam_ugc_query_set_return_long_description steam_ugc_query_set_return_total_only steam_ugc_query_set_allow_cached_response steam_ugc_send_query shader_set shader_get_name shader_reset shader_current shader_is_compiled shader_get_sampler_index shader_get_uniform shader_set_uniform_i shader_set_uniform_i_array shader_set_uniform_f shader_set_uniform_f_array shader_set_uniform_matrix shader_set_uniform_matrix_array shader_enable_corner_id texture_set_stage texture_get_texel_width texture_get_texel_height shaders_are_supported vertex_format_begin vertex_format_end vertex_format_delete vertex_format_add_position vertex_format_add_position_3d vertex_format_add_colour vertex_format_add_color vertex_format_add_normal vertex_format_add_texcoord vertex_format_add_textcoord vertex_format_add_custom vertex_create_buffer vertex_create_buffer_ext vertex_delete_buffer vertex_begin vertex_end vertex_position vertex_position_3d vertex_colour vertex_color vertex_argb vertex_texcoord vertex_normal vertex_float1 vertex_float2 vertex_float3 vertex_float4 vertex_ubyte4 vertex_submit vertex_freeze vertex_get_number vertex_get_buffer_size vertex_create_buffer_from_buffer vertex_create_buffer_from_buffer_ext push_local_notification push_get_first_local_notification push_get_next_local_notification push_cancel_local_notification skeleton_animation_set skeleton_animation_get skeleton_animation_mix skeleton_animation_set_ext skeleton_animation_get_ext skeleton_animation_get_duration skeleton_animation_get_frames skeleton_animation_clear skeleton_skin_set skeleton_skin_get skeleton_attachment_set skeleton_attachment_get skeleton_attachment_create skeleton_collision_draw_set skeleton_bone_data_get skeleton_bone_data_set skeleton_bone_state_get skeleton_bone_state_set skeleton_get_minmax skeleton_get_num_bounds skeleton_get_bounds skeleton_animation_get_frame skeleton_animation_set_frame draw_skeleton draw_skeleton_time draw_skeleton_instance draw_skeleton_collision skeleton_animation_list skeleton_skin_list skeleton_slot_data layer_get_id layer_get_id_at_depth layer_get_depth layer_create layer_destroy layer_destroy_instances layer_add_instance layer_has_instance layer_set_visible layer_get_visible layer_exists layer_x layer_y layer_get_x layer_get_y layer_hspeed layer_vspeed layer_get_hspeed layer_get_vspeed layer_script_begin layer_script_end layer_shader layer_get_script_begin layer_get_script_end layer_get_shader layer_set_target_room layer_get_target_room layer_reset_target_room layer_get_all layer_get_all_elements layer_get_name layer_depth layer_get_element_layer layer_get_element_type layer_element_move layer_force_draw_depth layer_is_draw_depth_forced layer_get_forced_depth layer_background_get_id layer_background_exists layer_background_create layer_background_destroy layer_background_visible layer_background_change layer_background_sprite layer_background_htiled layer_background_vtiled layer_background_stretch layer_background_yscale layer_background_xscale layer_background_blend layer_background_alpha layer_background_index layer_background_speed layer_background_get_visible layer_background_get_sprite layer_background_get_htiled layer_background_get_vtiled layer_background_get_stretch layer_background_get_yscale layer_background_get_xscale layer_background_get_blend layer_background_get_alpha layer_background_get_index layer_background_get_speed layer_sprite_get_id layer_sprite_exists layer_sprite_create layer_sprite_destroy layer_sprite_change layer_sprite_index layer_sprite_speed layer_sprite_xscale layer_sprite_yscale layer_sprite_angle layer_sprite_blend layer_sprite_alpha layer_sprite_x layer_sprite_y layer_sprite_get_sprite layer_sprite_get_index layer_sprite_get_speed layer_sprite_get_xscale layer_sprite_get_yscale layer_sprite_get_angle layer_sprite_get_blend layer_sprite_get_alpha layer_sprite_get_x layer_sprite_get_y layer_tilemap_get_id layer_tilemap_exists layer_tilemap_create layer_tilemap_destroy tilemap_tileset tilemap_x tilemap_y tilemap_set tilemap_set_at_pixel tilemap_get_tileset tilemap_get_tile_width tilemap_get_tile_height tilemap_get_width tilemap_get_height tilemap_get_x tilemap_get_y tilemap_get tilemap_get_at_pixel tilemap_get_cell_x_at_pixel tilemap_get_cell_y_at_pixel tilemap_clear draw_tilemap draw_tile tilemap_set_global_mask tilemap_get_global_mask tilemap_set_mask tilemap_get_mask tilemap_get_frame tile_set_empty tile_set_index tile_set_flip tile_set_mirror tile_set_rotate tile_get_empty tile_get_index tile_get_flip tile_get_mirror tile_get_rotate layer_tile_exists layer_tile_create layer_tile_destroy layer_tile_change layer_tile_xscale layer_tile_yscale layer_tile_blend layer_tile_alpha layer_tile_x layer_tile_y layer_tile_region layer_tile_visible layer_tile_get_sprite layer_tile_get_xscale layer_tile_get_yscale layer_tile_get_blend layer_tile_get_alpha layer_tile_get_x layer_tile_get_y layer_tile_get_region layer_tile_get_visible layer_instance_get_instance instance_activate_layer instance_deactivate_layer camera_create camera_create_view camera_destroy camera_apply camera_get_active camera_get_default camera_set_default camera_set_view_mat camera_set_proj_mat camera_set_update_script camera_set_begin_script camera_set_end_script camera_set_view_pos camera_set_view_size camera_set_view_speed camera_set_view_border camera_set_view_angle camera_set_view_target camera_get_view_mat camera_get_proj_mat camera_get_update_script camera_get_begin_script camera_get_end_script camera_get_view_x camera_get_view_y camera_get_view_width camera_get_view_height camera_get_view_speed_x camera_get_view_speed_y camera_get_view_border_x camera_get_view_border_y camera_get_view_angle camera_get_view_target view_get_camera view_get_visible view_get_xport view_get_yport view_get_wport view_get_hport view_get_surface_id view_set_camera view_set_visible view_set_xport view_set_yport view_set_wport view_set_hport view_set_surface_id gesture_drag_time gesture_drag_distance gesture_flick_speed gesture_double_tap_time gesture_double_tap_distance gesture_pinch_distance gesture_pinch_angle_towards gesture_pinch_angle_away gesture_rotate_time gesture_rotate_angle gesture_tap_count gesture_get_drag_time gesture_get_drag_distance gesture_get_flick_speed gesture_get_double_tap_time gesture_get_double_tap_distance gesture_get_pinch_distance gesture_get_pinch_angle_towards gesture_get_pinch_angle_away gesture_get_rotate_time gesture_get_rotate_angle gesture_get_tap_count keyboard_virtual_show keyboard_virtual_hide keyboard_virtual_status keyboard_virtual_height",
        literal: "self other all noone global local undefined pointer_invalid pointer_null path_action_stop path_action_restart path_action_continue path_action_reverse true false pi GM_build_date GM_version GM_runtime_version  timezone_local timezone_utc gamespeed_fps gamespeed_microseconds  ev_create ev_destroy ev_step ev_alarm ev_keyboard ev_mouse ev_collision ev_other ev_draw ev_draw_begin ev_draw_end ev_draw_pre ev_draw_post ev_keypress ev_keyrelease ev_trigger ev_left_button ev_right_button ev_middle_button ev_no_button ev_left_press ev_right_press ev_middle_press ev_left_release ev_right_release ev_middle_release ev_mouse_enter ev_mouse_leave ev_mouse_wheel_up ev_mouse_wheel_down ev_global_left_button ev_global_right_button ev_global_middle_button ev_global_left_press ev_global_right_press ev_global_middle_press ev_global_left_release ev_global_right_release ev_global_middle_release ev_joystick1_left ev_joystick1_right ev_joystick1_up ev_joystick1_down ev_joystick1_button1 ev_joystick1_button2 ev_joystick1_button3 ev_joystick1_button4 ev_joystick1_button5 ev_joystick1_button6 ev_joystick1_button7 ev_joystick1_button8 ev_joystick2_left ev_joystick2_right ev_joystick2_up ev_joystick2_down ev_joystick2_button1 ev_joystick2_button2 ev_joystick2_button3 ev_joystick2_button4 ev_joystick2_button5 ev_joystick2_button6 ev_joystick2_button7 ev_joystick2_button8 ev_outside ev_boundary ev_game_start ev_game_end ev_room_start ev_room_end ev_no_more_lives ev_animation_end ev_end_of_path ev_no_more_health ev_close_button ev_user0 ev_user1 ev_user2 ev_user3 ev_user4 ev_user5 ev_user6 ev_user7 ev_user8 ev_user9 ev_user10 ev_user11 ev_user12 ev_user13 ev_user14 ev_user15 ev_step_normal ev_step_begin ev_step_end ev_gui ev_gui_begin ev_gui_end ev_cleanup ev_gesture ev_gesture_tap ev_gesture_double_tap ev_gesture_drag_start ev_gesture_dragging ev_gesture_drag_end ev_gesture_flick ev_gesture_pinch_start ev_gesture_pinch_in ev_gesture_pinch_out ev_gesture_pinch_end ev_gesture_rotate_start ev_gesture_rotating ev_gesture_rotate_end ev_global_gesture_tap ev_global_gesture_double_tap ev_global_gesture_drag_start ev_global_gesture_dragging ev_global_gesture_drag_end ev_global_gesture_flick ev_global_gesture_pinch_start ev_global_gesture_pinch_in ev_global_gesture_pinch_out ev_global_gesture_pinch_end ev_global_gesture_rotate_start ev_global_gesture_rotating ev_global_gesture_rotate_end vk_nokey vk_anykey vk_enter vk_return vk_shift vk_control vk_alt vk_escape vk_space vk_backspace vk_tab vk_pause vk_printscreen vk_left vk_right vk_up vk_down vk_home vk_end vk_delete vk_insert vk_pageup vk_pagedown vk_f1 vk_f2 vk_f3 vk_f4 vk_f5 vk_f6 vk_f7 vk_f8 vk_f9 vk_f10 vk_f11 vk_f12 vk_numpad0 vk_numpad1 vk_numpad2 vk_numpad3 vk_numpad4 vk_numpad5 vk_numpad6 vk_numpad7 vk_numpad8 vk_numpad9 vk_divide vk_multiply vk_subtract vk_add vk_decimal vk_lshift vk_lcontrol vk_lalt vk_rshift vk_rcontrol vk_ralt  mb_any mb_none mb_left mb_right mb_middle c_aqua c_black c_blue c_dkgray c_fuchsia c_gray c_green c_lime c_ltgray c_maroon c_navy c_olive c_purple c_red c_silver c_teal c_white c_yellow c_orange fa_left fa_center fa_right fa_top fa_middle fa_bottom pr_pointlist pr_linelist pr_linestrip pr_trianglelist pr_trianglestrip pr_trianglefan bm_complex bm_normal bm_add bm_max bm_subtract bm_zero bm_one bm_src_colour bm_inv_src_colour bm_src_color bm_inv_src_color bm_src_alpha bm_inv_src_alpha bm_dest_alpha bm_inv_dest_alpha bm_dest_colour bm_inv_dest_colour bm_dest_color bm_inv_dest_color bm_src_alpha_sat tf_point tf_linear tf_anisotropic mip_off mip_on mip_markedonly audio_falloff_none audio_falloff_inverse_distance audio_falloff_inverse_distance_clamped audio_falloff_linear_distance audio_falloff_linear_distance_clamped audio_falloff_exponent_distance audio_falloff_exponent_distance_clamped audio_old_system audio_new_system audio_mono audio_stereo audio_3d cr_default cr_none cr_arrow cr_cross cr_beam cr_size_nesw cr_size_ns cr_size_nwse cr_size_we cr_uparrow cr_hourglass cr_drag cr_appstart cr_handpoint cr_size_all spritespeed_framespersecond spritespeed_framespergameframe asset_object asset_unknown asset_sprite asset_sound asset_room asset_path asset_script asset_font asset_timeline asset_tiles asset_shader fa_readonly fa_hidden fa_sysfile fa_volumeid fa_directory fa_archive  ds_type_map ds_type_list ds_type_stack ds_type_queue ds_type_grid ds_type_priority ef_explosion ef_ring ef_ellipse ef_firework ef_smoke ef_smokeup ef_star ef_spark ef_flare ef_cloud ef_rain ef_snow pt_shape_pixel pt_shape_disk pt_shape_square pt_shape_line pt_shape_star pt_shape_circle pt_shape_ring pt_shape_sphere pt_shape_flare pt_shape_spark pt_shape_explosion pt_shape_cloud pt_shape_smoke pt_shape_snow ps_distr_linear ps_distr_gaussian ps_distr_invgaussian ps_shape_rectangle ps_shape_ellipse ps_shape_diamond ps_shape_line ty_real ty_string dll_cdecl dll_stdcall matrix_view matrix_projection matrix_world os_win32 os_windows os_macosx os_ios os_android os_symbian os_linux os_unknown os_winphone os_tizen os_win8native os_wiiu os_3ds  os_psvita os_bb10 os_ps4 os_xboxone os_ps3 os_xbox360 os_uwp os_tvos os_switch browser_not_a_browser browser_unknown browser_ie browser_firefox browser_chrome browser_safari browser_safari_mobile browser_opera browser_tizen browser_edge browser_windows_store browser_ie_mobile  device_ios_unknown device_ios_iphone device_ios_iphone_retina device_ios_ipad device_ios_ipad_retina device_ios_iphone5 device_ios_iphone6 device_ios_iphone6plus device_emulator device_tablet display_landscape display_landscape_flipped display_portrait display_portrait_flipped tm_sleep tm_countvsyncs of_challenge_win of_challen ge_lose of_challenge_tie leaderboard_type_number leaderboard_type_time_mins_secs cmpfunc_never cmpfunc_less cmpfunc_equal cmpfunc_lessequal cmpfunc_greater cmpfunc_notequal cmpfunc_greaterequal cmpfunc_always cull_noculling cull_clockwise cull_counterclockwise lighttype_dir lighttype_point iap_ev_storeload iap_ev_product iap_ev_purchase iap_ev_consume iap_ev_restore iap_storeload_ok iap_storeload_failed iap_status_uninitialised iap_status_unavailable iap_status_loading iap_status_available iap_status_processing iap_status_restoring iap_failed iap_unavailable iap_available iap_purchased iap_canceled iap_refunded fb_login_default fb_login_fallback_to_webview fb_login_no_fallback_to_webview fb_login_forcing_webview fb_login_use_system_account fb_login_forcing_safari  phy_joint_anchor_1_x phy_joint_anchor_1_y phy_joint_anchor_2_x phy_joint_anchor_2_y phy_joint_reaction_force_x phy_joint_reaction_force_y phy_joint_reaction_torque phy_joint_motor_speed phy_joint_angle phy_joint_motor_torque phy_joint_max_motor_torque phy_joint_translation phy_joint_speed phy_joint_motor_force phy_joint_max_motor_force phy_joint_length_1 phy_joint_length_2 phy_joint_damping_ratio phy_joint_frequency phy_joint_lower_angle_limit phy_joint_upper_angle_limit phy_joint_angle_limits phy_joint_max_length phy_joint_max_torque phy_joint_max_force phy_debug_render_aabb phy_debug_render_collision_pairs phy_debug_render_coms phy_debug_render_core_shapes phy_debug_render_joints phy_debug_render_obb phy_debug_render_shapes  phy_particle_flag_water phy_particle_flag_zombie phy_particle_flag_wall phy_particle_flag_spring phy_particle_flag_elastic phy_particle_flag_viscous phy_particle_flag_powder phy_particle_flag_tensile phy_particle_flag_colourmixing phy_particle_flag_colormixing phy_particle_group_flag_solid phy_particle_group_flag_rigid phy_particle_data_flag_typeflags phy_particle_data_flag_position phy_particle_data_flag_velocity phy_particle_data_flag_colour phy_particle_data_flag_color phy_particle_data_flag_category  achievement_our_info achievement_friends_info achievement_leaderboard_info achievement_achievement_info achievement_filter_all_players achievement_filter_friends_only achievement_filter_favorites_only achievement_type_achievement_challenge achievement_type_score_challenge achievement_pic_loaded  achievement_show_ui achievement_show_profile achievement_show_leaderboard achievement_show_achievement achievement_show_bank achievement_show_friend_picker achievement_show_purchase_prompt network_socket_tcp network_socket_udp network_socket_bluetooth network_type_connect network_type_disconnect network_type_data network_type_non_blocking_connect network_config_connect_timeout network_config_use_non_blocking_socket network_config_enable_reliable_udp network_config_disable_reliable_udp buffer_fixed buffer_grow buffer_wrap buffer_fast buffer_vbuffer buffer_network buffer_u8 buffer_s8 buffer_u16 buffer_s16 buffer_u32 buffer_s32 buffer_u64 buffer_f16 buffer_f32 buffer_f64 buffer_bool buffer_text buffer_string buffer_surface_copy buffer_seek_start buffer_seek_relative buffer_seek_end buffer_generalerror buffer_outofspace buffer_outofbounds buffer_invalidtype  text_type button_type input_type ANSI_CHARSET DEFAULT_CHARSET EASTEUROPE_CHARSET RUSSIAN_CHARSET SYMBOL_CHARSET SHIFTJIS_CHARSET HANGEUL_CHARSET GB2312_CHARSET CHINESEBIG5_CHARSET JOHAB_CHARSET HEBREW_CHARSET ARABIC_CHARSET GREEK_CHARSET TURKISH_CHARSET VIETNAMESE_CHARSET THAI_CHARSET MAC_CHARSET BALTIC_CHARSET OEM_CHARSET  gp_face1 gp_face2 gp_face3 gp_face4 gp_shoulderl gp_shoulderr gp_shoulderlb gp_shoulderrb gp_select gp_start gp_stickl gp_stickr gp_padu gp_padd gp_padl gp_padr gp_axislh gp_axislv gp_axisrh gp_axisrv ov_friends ov_community ov_players ov_settings ov_gamegroup ov_achievements lb_sort_none lb_sort_ascending lb_sort_descending lb_disp_none lb_disp_numeric lb_disp_time_sec lb_disp_time_ms ugc_result_success ugc_filetype_community ugc_filetype_microtrans ugc_visibility_public ugc_visibility_friends_only ugc_visibility_private ugc_query_RankedByVote ugc_query_RankedByPublicationDate ugc_query_AcceptedForGameRankedByAcceptanceDate ugc_query_RankedByTrend ugc_query_FavoritedByFriendsRankedByPublicationDate ugc_query_CreatedByFriendsRankedByPublicationDate ugc_query_RankedByNumTimesReported ugc_query_CreatedByFollowedUsersRankedByPublicationDate ugc_query_NotYetRated ugc_query_RankedByTotalVotesAsc ugc_query_RankedByVotesUp ugc_query_RankedByTextSearch ugc_sortorder_CreationOrderDesc ugc_sortorder_CreationOrderAsc ugc_sortorder_TitleAsc ugc_sortorder_LastUpdatedDesc ugc_sortorder_SubscriptionDateDesc ugc_sortorder_VoteScoreDesc ugc_sortorder_ForModeration ugc_list_Published ugc_list_VotedOn ugc_list_VotedUp ugc_list_VotedDown ugc_list_WillVoteLater ugc_list_Favorited ugc_list_Subscribed ugc_list_UsedOrPlayed ugc_list_Followed ugc_match_Items ugc_match_Items_Mtx ugc_match_Items_ReadyToUse ugc_match_Collections ugc_match_Artwork ugc_match_Videos ugc_match_Screenshots ugc_match_AllGuides ugc_match_WebGuides ugc_match_IntegratedGuides ugc_match_UsableInGame ugc_match_ControllerBindings  vertex_usage_position vertex_usage_colour vertex_usage_color vertex_usage_normal vertex_usage_texcoord vertex_usage_textcoord vertex_usage_blendweight vertex_usage_blendindices vertex_usage_psize vertex_usage_tangent vertex_usage_binormal vertex_usage_fog vertex_usage_depth vertex_usage_sample vertex_type_float1 vertex_type_float2 vertex_type_float3 vertex_type_float4 vertex_type_colour vertex_type_color vertex_type_ubyte4 layerelementtype_undefined layerelementtype_background layerelementtype_instance layerelementtype_oldtilemap layerelementtype_sprite layerelementtype_tilemap layerelementtype_particlesystem layerelementtype_tile tile_rotate tile_flip tile_mirror tile_index_mask kbv_type_default kbv_type_ascii kbv_type_url kbv_type_email kbv_type_numbers kbv_type_phone kbv_type_phone_name kbv_returnkey_default kbv_returnkey_go kbv_returnkey_google kbv_returnkey_join kbv_returnkey_next kbv_returnkey_route kbv_returnkey_search kbv_returnkey_send kbv_returnkey_yahoo kbv_returnkey_done kbv_returnkey_continue kbv_returnkey_emergency kbv_autocapitalize_none kbv_autocapitalize_words kbv_autocapitalize_sentences kbv_autocapitalize_characters",
        symbol: "argument_relative argument argument0 argument1 argument2 argument3 argument4 argument5 argument6 argument7 argument8 argument9 argument10 argument11 argument12 argument13 argument14 argument15 argument_count x|0 y|0 xprevious yprevious xstart ystart hspeed vspeed direction speed friction gravity gravity_direction path_index path_position path_positionprevious path_speed path_scale path_orientation path_endaction object_index id solid persistent mask_index instance_count instance_id room_speed fps fps_real current_time current_year current_month current_day current_weekday current_hour current_minute current_second alarm timeline_index timeline_position timeline_speed timeline_running timeline_loop room room_first room_last room_width room_height room_caption room_persistent score lives health show_score show_lives show_health caption_score caption_lives caption_health event_type event_number event_object event_action application_surface gamemaker_pro gamemaker_registered gamemaker_version error_occurred error_last debug_mode keyboard_key keyboard_lastkey keyboard_lastchar keyboard_string mouse_x mouse_y mouse_button mouse_lastbutton cursor_sprite visible sprite_index sprite_width sprite_height sprite_xoffset sprite_yoffset image_number image_index image_speed depth image_xscale image_yscale image_angle image_alpha image_blend bbox_left bbox_right bbox_top bbox_bottom layer background_colour  background_showcolour background_color background_showcolor view_enabled view_current view_visible view_xview view_yview view_wview view_hview view_xport view_yport view_wport view_hport view_angle view_hborder view_vborder view_hspeed view_vspeed view_object view_surface_id view_camera game_id game_display_name game_project_name game_save_id working_directory temp_directory program_directory browser_width browser_height os_type os_device os_browser os_version display_aa async_load delta_time webgl_enabled event_data iap_data phy_rotation phy_position_x phy_position_y phy_angular_velocity phy_linear_velocity_x phy_linear_velocity_y phy_speed_x phy_speed_y phy_speed phy_angular_damping phy_linear_damping phy_bullet phy_fixed_rotation phy_active phy_mass phy_inertia phy_com_x phy_com_y phy_dynamic phy_kinematic phy_sleeping phy_collision_points phy_collision_x phy_collision_y phy_col_normal_x phy_col_normal_y phy_position_xprevious phy_position_yprevious"
      },
      contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, I.C_NUMBER_MODE]
    }
  }
  aA2.exports = U19
})
// @from(Start 4249910, End 4251243)
eA2 = Y((hH3, oA2) => {
  function v19(I) {
    let d = {
      keyword: "break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",
      literal: "true false iota nil",
      built_in: "append cap close complex copy imag len make new panic print println real recover delete"
    };
    return {
      name: "Go",
      aliases: ["golang"],
      keywords: d,
      illegal: "</",
      contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, {
        className: "string",
        variants: [I.QUOTE_STRING_MODE, I.APOS_STRING_MODE, {
          begin: "`",
          end: "`"
        }]
      }, {
        className: "number",
        variants: [{
          begin: I.C_NUMBER_RE + "[i]",
          relevance: 1
        }, I.C_NUMBER_MODE]
      }, {
        begin: /:=/
      }, {
        className: "function",
        beginKeywords: "func",
        end: "\\s*(\\{|$)",
        excludeEnd: !0,
        contains: [I.TITLE_MODE, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: d,
          illegal: /["']/
        }]
      }]
    }
  }
  oA2.exports = v19
})
// @from(Start 4251249, End 4251894)
IV2 = Y((jH3, tA2) => {
  function E19(I) {
    return {
      name: "Golo",
      keywords: {
        keyword: "println readln print import module function local return let var while for foreach times in case when match with break continue augment augmentation each find filter reduce if then else otherwise try catch finally raise throw orIfNull DynamicObject|10 DynamicVariable struct Observable map set vector list array",
        literal: "true false null"
      },
      contains: [I.HASH_COMMENT_MODE, I.QUOTE_STRING_MODE, I.C_NUMBER_MODE, {
        className: "meta",
        begin: "@[A-Za-z]+"
      }]
    }
  }
  tA2.exports = E19
})
// @from(Start 4251900, End 4253516)
GV2 = Y((kH3, dV2) => {
  function M19(I) {
    return {
      name: "Gradle",
      case_insensitive: !0,
      keywords: {
        keyword: "task project allprojects subprojects artifacts buildscript configurations dependencies repositories sourceSets description delete from into include exclude source classpath destinationDir includes options sourceCompatibility targetCompatibility group flatDir doLast doFirst flatten todir fromdir ant def abstract break case catch continue default do else extends final finally for if implements instanceof native new private protected public return static switch synchronized throw throws transient try volatile while strictfp package import false null super this true antlrtask checkstyle codenarc copy boolean byte char class double float int interface long short void compile runTime file fileTree abs any append asList asWritable call collect compareTo count div dump each eachByte eachFile eachLine every find findAll flatten getAt getErr getIn getOut getText grep immutable inject inspect intersect invokeMethods isCase join leftShift minus multiply newInputStream newOutputStream newPrintWriter newReader newWriter next plus pop power previous print println push putAt read readBytes readLines reverse reverseEach round size sort splitEachLine step subMap times toInteger toList tokenize upto waitForOrKill withPrintWriter withReader withStream withWriter withWriterAppend write writeLine"
      },
      contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, I.NUMBER_MODE, I.REGEXP_MODE]
    }
  }
  dV2.exports = M19
})
// @from(Start 4253522, End 4255924)
CV2 = Y((xH3, ZV2) => {
  function S19(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function L19(I) {
    return y19("(?=", I, ")")
  }

  function y19(...I) {
    return I.map((G) => S19(G)).join("")
  }

  function xF1(I, d = {}) {
    return d.variants = I, d
  }

  function P19(I) {
    let G = xF1([I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.COMMENT("/\\*\\*", "\\*/", {
        relevance: 0,
        contains: [{
          begin: /\w+@/,
          relevance: 0
        }, {
          className: "doctag",
          begin: "@[A-Za-z]+"
        }]
      })]),
      Z = {
        className: "regexp",
        begin: /~?\/[^\/\n]+\//,
        contains: [I.BACKSLASH_ESCAPE]
      },
      C = xF1([I.BINARY_NUMBER_MODE, I.C_NUMBER_MODE]),
      W = xF1([{
        begin: /"""/,
        end: /"""/
      }, {
        begin: /'''/,
        end: /'''/
      }, {
        begin: "\\$/",
        end: "/\\$",
        relevance: 10
      }, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE], {
        className: "string"
      });
    return {
      name: "Groovy",
      keywords: {
        built_in: "this super",
        literal: "true false null",
        keyword: "byte short char int long boolean float double void def as in assert trait abstract static volatile transient public private protected synchronized final class interface enum if else for while switch case break default continue throw throws try catch finally implements extends new import package return instanceof"
      },
      contains: [I.SHEBANG({
        binary: "groovy",
        relevance: 10
      }), G, W, Z, C, {
        className: "class",
        beginKeywords: "class interface trait enum",
        end: /\{/,
        illegal: ":",
        contains: [{
          beginKeywords: "extends implements"
        }, I.UNDERSCORE_TITLE_MODE]
      }, {
        className: "meta",
        begin: "@[A-Za-z]+",
        relevance: 0
      }, {
        className: "attr",
        begin: "[A-Za-z0-9_$]+[ \t]*:",
        relevance: 0
      }, {
        begin: /\?/,
        end: /:/,
        relevance: 0,
        contains: [G, W, Z, C, "self"]
      }, {
        className: "symbol",
        begin: "^[ \t]*" + L19("[A-Za-z0-9_$]+:"),
        excludeBegin: !0,
        end: "[A-Za-z0-9_$]+:",
        relevance: 0
      }],
      illegal: /#|<\//
    }
  }
  ZV2.exports = P19
})
// @from(Start 4255930, End 4257818)
wV2 = Y((cH3, WV2) => {
  function $19(I) {
    return {
      name: "HAML",
      case_insensitive: !0,
      contains: [{
        className: "meta",
        begin: "^!!!( (5|1\\.1|Strict|Frameset|Basic|Mobile|RDFa|XML\\b.*))?$",
        relevance: 10
      }, I.COMMENT("^\\s*(!=#|=#|-#|/).*$", !1, {
        relevance: 0
      }), {
        begin: "^\\s*(-|=|!=)(?!#)",
        starts: {
          end: "\\n",
          subLanguage: "ruby"
        }
      }, {
        className: "tag",
        begin: "^\\s*%",
        contains: [{
          className: "selector-tag",
          begin: "\\w+"
        }, {
          className: "selector-id",
          begin: "#[\\w-]+"
        }, {
          className: "selector-class",
          begin: "\\.[\\w-]+"
        }, {
          begin: /\{\s*/,
          end: /\s*\}/,
          contains: [{
            begin: ":\\w+\\s*=>",
            end: ",\\s+",
            returnBegin: !0,
            endsWithParent: !0,
            contains: [{
              className: "attr",
              begin: ":\\w+"
            }, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, {
              begin: "\\w+",
              relevance: 0
            }]
          }]
        }, {
          begin: "\\(\\s*",
          end: "\\s*\\)",
          excludeEnd: !0,
          contains: [{
            begin: "\\w+\\s*=",
            end: "\\s+",
            returnBegin: !0,
            endsWithParent: !0,
            contains: [{
              className: "attr",
              begin: "\\w+",
              relevance: 0
            }, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, {
              begin: "\\w+",
              relevance: 0
            }]
          }]
        }]
      }, {
        begin: "^\\s*[=~]\\s*"
      }, {
        begin: /#\{/,
        starts: {
          end: /\}/,
          subLanguage: "ruby"
        }
      }]
    }
  }
  WV2.exports = $19
})
// @from(Start 4257824, End 4261683)
VV2 = Y((pH3, AV2) => {
  function BV2(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function u19(I) {
    return R$("(", I, ")*")
  }

  function T19(I) {
    return R$("(", I, ")?")
  }

  function R$(...I) {
    return I.map((G) => BV2(G)).join("")
  }

  function O19(...I) {
    return "(" + I.map((G) => BV2(G)).join("|") + ")"
  }

  function m19(I) {
    let d = {
        "builtin-name": ["action", "bindattr", "collection", "component", "concat", "debugger", "each", "each-in", "get", "hash", "if", "in", "input", "link-to", "loc", "log", "lookup", "mut", "outlet", "partial", "query-params", "render", "template", "textarea", "unbound", "unless", "view", "with", "yield"]
      },
      G = {
        literal: ["true", "false", "undefined", "null"]
      },
      Z = /""|"[^"]+"/,
      C = /''|'[^']+'/,
      W = /\[\]|\[[^\]]+\]/,
      w = /[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,
      B = /(\.|\/)/,
      A = O19(Z, C, W, w),
      V = R$(T19(/\.|\.\/|\//), A, u19(R$(B, A))),
      X = R$("(", W, "|", w, ")(?==)"),
      _ = {
        begin: V,
        lexemes: /[\w.\/]+/
      },
      F = I.inherit(_, {
        keywords: G
      }),
      g = {
        begin: /\(/,
        end: /\)/
      },
      J = {
        className: "attr",
        begin: X,
        relevance: 0,
        starts: {
          begin: /=/,
          end: /=/,
          starts: {
            contains: [I.NUMBER_MODE, I.QUOTE_STRING_MODE, I.APOS_STRING_MODE, F, g]
          }
        }
      },
      K = {
        begin: /as\s+\|/,
        keywords: {
          keyword: "as"
        },
        end: /\|/,
        contains: [{
          begin: /\w+/
        }]
      },
      Q = {
        contains: [I.NUMBER_MODE, I.QUOTE_STRING_MODE, I.APOS_STRING_MODE, K, J, F, g],
        returnEnd: !0
      },
      E = I.inherit(_, {
        className: "name",
        keywords: d,
        starts: I.inherit(Q, {
          end: /\)/
        })
      });
    g.contains = [E];
    let S = I.inherit(_, {
        keywords: d,
        className: "name",
        starts: I.inherit(Q, {
          end: /\}\}/
        })
      }),
      P = I.inherit(_, {
        keywords: d,
        className: "name"
      }),
      $ = I.inherit(_, {
        className: "name",
        keywords: d,
        starts: I.inherit(Q, {
          end: /\}\}/
        })
      });
    return {
      name: "Handlebars",
      aliases: ["hbs", "html.hbs", "html.handlebars", "htmlbars"],
      case_insensitive: !0,
      subLanguage: "xml",
      contains: [{
        begin: /\\\{\{/,
        skip: !0
      }, {
        begin: /\\\\(?=\{\{)/,
        skip: !0
      }, I.COMMENT(/\{\{!--/, /--\}\}/), I.COMMENT(/\{\{!/, /\}\}/), {
        className: "template-tag",
        begin: /\{\{\{\{(?!\/)/,
        end: /\}\}\}\}/,
        contains: [S],
        starts: {
          end: /\{\{\{\{\//,
          returnEnd: !0,
          subLanguage: "xml"
        }
      }, {
        className: "template-tag",
        begin: /\{\{\{\{\//,
        end: /\}\}\}\}/,
        contains: [P]
      }, {
        className: "template-tag",
        begin: /\{\{#/,
        end: /\}\}/,
        contains: [S]
      }, {
        className: "template-tag",
        begin: /\{\{(?=else\}\})/,
        end: /\}\}/,
        keywords: "else"
      }, {
        className: "template-tag",
        begin: /\{\{(?=else if)/,
        end: /\}\}/,
        keywords: "else if"
      }, {
        className: "template-tag",
        begin: /\{\{\//,
        end: /\}\}/,
        contains: [P]
      }, {
        className: "template-variable",
        begin: /\{\{\{/,
        end: /\}\}\}/,
        contains: [$]
      }, {
        className: "template-variable",
        begin: /\{\{/,
        end: /\}\}/,
        contains: [$]
      }]
    }
  }
  AV2.exports = m19
})
// @from(Start 4261689, End 4264222)
YV2 = Y((iH3, XV2) => {
  function l19(I) {
    let d = {
        variants: [I.COMMENT("--", "$"), I.COMMENT(/\{-/, /-\}/, {
          contains: ["self"]
        })]
      },
      G = {
        className: "meta",
        begin: /\{-#/,
        end: /#-\}/
      },
      Z = {
        className: "meta",
        begin: "^#",
        end: "$"
      },
      C = {
        className: "type",
        begin: "\\b[A-Z][\\w']*",
        relevance: 0
      },
      W = {
        begin: "\\(",
        end: "\\)",
        illegal: '"',
        contains: [G, Z, {
          className: "type",
          begin: "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"
        }, I.inherit(I.TITLE_MODE, {
          begin: "[_a-z][\\w']*"
        }), d]
      },
      w = {
        begin: /\{/,
        end: /\}/,
        contains: W.contains
      };
    return {
      name: "Haskell",
      aliases: ["hs"],
      keywords: "let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec",
      contains: [{
        beginKeywords: "module",
        end: "where",
        keywords: "module where",
        contains: [W, d],
        illegal: "\\W\\.|;"
      }, {
        begin: "\\bimport\\b",
        end: "$",
        keywords: "import qualified as hiding",
        contains: [W, d],
        illegal: "\\W\\.|;"
      }, {
        className: "class",
        begin: "^(\\s*)?(class|instance)\\b",
        end: "where",
        keywords: "class family instance where",
        contains: [C, W, d]
      }, {
        className: "class",
        begin: "\\b(data|(new)?type)\\b",
        end: "$",
        keywords: "data family type newtype deriving",
        contains: [G, C, W, w, d]
      }, {
        beginKeywords: "default",
        end: "$",
        contains: [C, W, d]
      }, {
        beginKeywords: "infix infixl infixr",
        end: "$",
        contains: [I.C_NUMBER_MODE, d]
      }, {
        begin: "\\bforeign\\b",
        end: "$",
        keywords: "foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe",
        contains: [C, I.QUOTE_STRING_MODE, d]
      }, {
        className: "meta",
        begin: "#!\\/usr\\/bin\\/env runhaskell",
        end: "$"
      }, G, Z, I.QUOTE_STRING_MODE, I.C_NUMBER_MODE, C, I.inherit(I.TITLE_MODE, {
        begin: "^[_a-z][\\w']*"
      }), d, {
        begin: "->|<-"
      }]
    }
  }
  XV2.exports = l19
})
// @from(Start 4264228, End 4267225)
DV2 = Y((nH3, _V2) => {
  function b19(I) {
    return {
      name: "Haxe",
      aliases: ["hx"],
      keywords: {
        keyword: "break case cast catch continue default do dynamic else enum extern for function here if import in inline never new override package private get set public return static super switch this throw trace try typedef untyped using var while Int Float String Bool Dynamic Void Array ",
        built_in: "trace this",
        literal: "true false null _"
      },
      contains: [{
        className: "string",
        begin: "'",
        end: "'",
        contains: [I.BACKSLASH_ESCAPE, {
          className: "subst",
          begin: "\\$\\{",
          end: "\\}"
        }, {
          className: "subst",
          begin: "\\$",
          end: /\W\}/
        }]
      }, I.QUOTE_STRING_MODE, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.C_NUMBER_MODE, {
        className: "meta",
        begin: "@:",
        end: "$"
      }, {
        className: "meta",
        begin: "#",
        end: "$",
        keywords: {
          "meta-keyword": "if else elseif end error"
        }
      }, {
        className: "type",
        begin: ":[ \t]*",
        end: "[^A-Za-z0-9_ \t\\->]",
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0
      }, {
        className: "type",
        begin: ":[ \t]*",
        end: "\\W",
        excludeBegin: !0,
        excludeEnd: !0
      }, {
        className: "type",
        begin: "new *",
        end: "\\W",
        excludeBegin: !0,
        excludeEnd: !0
      }, {
        className: "class",
        beginKeywords: "enum",
        end: "\\{",
        contains: [I.TITLE_MODE]
      }, {
        className: "class",
        beginKeywords: "abstract",
        end: "[\\{$]",
        contains: [{
          className: "type",
          begin: "\\(",
          end: "\\)",
          excludeBegin: !0,
          excludeEnd: !0
        }, {
          className: "type",
          begin: "from +",
          end: "\\W",
          excludeBegin: !0,
          excludeEnd: !0
        }, {
          className: "type",
          begin: "to +",
          end: "\\W",
          excludeBegin: !0,
          excludeEnd: !0
        }, I.TITLE_MODE],
        keywords: {
          keyword: "abstract from to"
        }
      }, {
        className: "class",
        begin: "\\b(class|interface) +",
        end: "[\\{$]",
        excludeEnd: !0,
        keywords: "class interface",
        contains: [{
          className: "keyword",
          begin: "\\b(extends|implements) +",
          keywords: "extends implements",
          contains: [{
            className: "type",
            begin: I.IDENT_RE,
            relevance: 0
          }]
        }, I.TITLE_MODE]
      }, {
        className: "function",
        beginKeywords: "function",
        end: "\\(",
        excludeEnd: !0,
        illegal: "\\S",
        contains: [I.TITLE_MODE]
      }],
      illegal: /<\//
    }
  }
  _V2.exports = b19
})
// @from(Start 4267231, End 4270897)
FV2 = Y((rH3, HV2) => {
  function h19(I) {
    return {
      name: "HSP",
      case_insensitive: !0,
      keywords: {
        $pattern: /[\w._]+/,
        keyword: "goto gosub return break repeat loop continue wait await dim sdim foreach dimtype dup dupptr end stop newmod delmod mref run exgoto on mcall assert logmes newlab resume yield onexit onerror onkey onclick oncmd exist delete mkdir chdir dirlist bload bsave bcopy memfile if else poke wpoke lpoke getstr chdpm memexpand memcpy memset notesel noteadd notedel noteload notesave randomize noteunsel noteget split strrep setease button chgdisp exec dialog mmload mmplay mmstop mci pset pget syscolor mes print title pos circle cls font sysfont objsize picload color palcolor palette redraw width gsel gcopy gzoom gmode bmpsave hsvcolor getkey listbox chkbox combox input mesbox buffer screen bgscr mouse objsel groll line clrobj boxf objprm objmode stick grect grotate gsquare gradf objimage objskip objenable celload celdiv celput newcom querycom delcom cnvstow comres axobj winobj sendmsg comevent comevarg sarrayconv callfunc cnvwtos comevdisp libptr system hspstat hspver stat cnt err strsize looplev sublev iparam wparam lparam refstr refdval int rnd strlen length length2 length3 length4 vartype gettime peek wpeek lpeek varptr varuse noteinfo instr abs limit getease str strmid strf getpath strtrim sin cos tan atan sqrt double absf expf logf limitf powf geteasef mousex mousey mousew hwnd hinstance hdc ginfo objinfo dirinfo sysinfo thismod __hspver__ __hsp30__ __date__ __time__ __line__ __file__ _debug __hspdef__ and or xor not screen_normal screen_palette screen_hide screen_fixedsize screen_tool screen_frame gmode_gdi gmode_mem gmode_rgb0 gmode_alpha gmode_rgb0alpha gmode_add gmode_sub gmode_pixela ginfo_mx ginfo_my ginfo_act ginfo_sel ginfo_wx1 ginfo_wy1 ginfo_wx2 ginfo_wy2 ginfo_vx ginfo_vy ginfo_sizex ginfo_sizey ginfo_winx ginfo_winy ginfo_mesx ginfo_mesy ginfo_r ginfo_g ginfo_b ginfo_paluse ginfo_dispx ginfo_dispy ginfo_cx ginfo_cy ginfo_intid ginfo_newid ginfo_sx ginfo_sy objinfo_mode objinfo_bmscr objinfo_hwnd notemax notesize dir_cur dir_exe dir_win dir_sys dir_cmdline dir_desktop dir_mydoc dir_tv font_normal font_bold font_italic font_underline font_strikeout font_antialias objmode_normal objmode_guifont objmode_usefont gsquare_grad msgothic msmincho do until while wend for next _break _continue switch case default swbreak swend ddim ldim alloc m_pi rad2deg deg2rad ease_linear ease_quad_in ease_quad_out ease_quad_inout ease_cubic_in ease_cubic_out ease_cubic_inout ease_quartic_in ease_quartic_out ease_quartic_inout ease_bounce_in ease_bounce_out ease_bounce_inout ease_shake_in ease_shake_out ease_shake_inout ease_loop"
      },
      contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.QUOTE_STRING_MODE, I.APOS_STRING_MODE, {
        className: "string",
        begin: /\{"/,
        end: /"\}/,
        contains: [I.BACKSLASH_ESCAPE]
      }, I.COMMENT(";", "$", {
        relevance: 0
      }), {
        className: "meta",
        begin: "#",
        end: "$",
        keywords: {
          "meta-keyword": "addion cfunc cmd cmpopt comfunc const defcfunc deffunc define else endif enum epack func global if ifdef ifndef include modcfunc modfunc modinit modterm module pack packopt regcmd runtime undef usecom uselib"
        },
        contains: [I.inherit(I.QUOTE_STRING_MODE, {
          className: "meta-string"
        }), I.NUMBER_MODE, I.C_NUMBER_MODE, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE]
      }, {
        className: "symbol",
        begin: "^\\*(\\w+|@)"
      }, I.NUMBER_MODE, I.C_NUMBER_MODE]
    }
  }
  HV2.exports = h19
})
// @from(Start 4270903, End 4274904)
KV2 = Y((aH3, JV2) => {
  function gV2(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function j19(I) {
    return U$("(", I, ")*")
  }

  function k19(I) {
    return U$("(", I, ")?")
  }

  function U$(...I) {
    return I.map((G) => gV2(G)).join("")
  }

  function x19(...I) {
    return "(" + I.map((G) => gV2(G)).join("|") + ")"
  }

  function c19(I) {
    let d = {
        "builtin-name": ["action", "bindattr", "collection", "component", "concat", "debugger", "each", "each-in", "get", "hash", "if", "in", "input", "link-to", "loc", "log", "lookup", "mut", "outlet", "partial", "query-params", "render", "template", "textarea", "unbound", "unless", "view", "with", "yield"]
      },
      G = {
        literal: ["true", "false", "undefined", "null"]
      },
      Z = /""|"[^"]+"/,
      C = /''|'[^']+'/,
      W = /\[\]|\[[^\]]+\]/,
      w = /[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,
      B = /(\.|\/)/,
      A = x19(Z, C, W, w),
      V = U$(k19(/\.|\.\/|\//), A, j19(U$(B, A))),
      X = U$("(", W, "|", w, ")(?==)"),
      _ = {
        begin: V,
        lexemes: /[\w.\/]+/
      },
      F = I.inherit(_, {
        keywords: G
      }),
      g = {
        begin: /\(/,
        end: /\)/
      },
      J = {
        className: "attr",
        begin: X,
        relevance: 0,
        starts: {
          begin: /=/,
          end: /=/,
          starts: {
            contains: [I.NUMBER_MODE, I.QUOTE_STRING_MODE, I.APOS_STRING_MODE, F, g]
          }
        }
      },
      K = {
        begin: /as\s+\|/,
        keywords: {
          keyword: "as"
        },
        end: /\|/,
        contains: [{
          begin: /\w+/
        }]
      },
      Q = {
        contains: [I.NUMBER_MODE, I.QUOTE_STRING_MODE, I.APOS_STRING_MODE, K, J, F, g],
        returnEnd: !0
      },
      E = I.inherit(_, {
        className: "name",
        keywords: d,
        starts: I.inherit(Q, {
          end: /\)/
        })
      });
    g.contains = [E];
    let S = I.inherit(_, {
        keywords: d,
        className: "name",
        starts: I.inherit(Q, {
          end: /\}\}/
        })
      }),
      P = I.inherit(_, {
        keywords: d,
        className: "name"
      }),
      $ = I.inherit(_, {
        className: "name",
        keywords: d,
        starts: I.inherit(Q, {
          end: /\}\}/
        })
      });
    return {
      name: "Handlebars",
      aliases: ["hbs", "html.hbs", "html.handlebars", "htmlbars"],
      case_insensitive: !0,
      subLanguage: "xml",
      contains: [{
        begin: /\\\{\{/,
        skip: !0
      }, {
        begin: /\\\\(?=\{\{)/,
        skip: !0
      }, I.COMMENT(/\{\{!--/, /--\}\}/), I.COMMENT(/\{\{!/, /\}\}/), {
        className: "template-tag",
        begin: /\{\{\{\{(?!\/)/,
        end: /\}\}\}\}/,
        contains: [S],
        starts: {
          end: /\{\{\{\{\//,
          returnEnd: !0,
          subLanguage: "xml"
        }
      }, {
        className: "template-tag",
        begin: /\{\{\{\{\//,
        end: /\}\}\}\}/,
        contains: [P]
      }, {
        className: "template-tag",
        begin: /\{\{#/,
        end: /\}\}/,
        contains: [S]
      }, {
        className: "template-tag",
        begin: /\{\{(?=else\}\})/,
        end: /\}\}/,
        keywords: "else"
      }, {
        className: "template-tag",
        begin: /\{\{(?=else if)/,
        end: /\}\}/,
        keywords: "else if"
      }, {
        className: "template-tag",
        begin: /\{\{\//,
        end: /\}\}/,
        contains: [P]
      }, {
        className: "template-variable",
        begin: /\{\{\{/,
        end: /\}\}\}/,
        contains: [$]
      }, {
        className: "template-variable",
        begin: /\{\{/,
        end: /\}\}/,
        contains: [$]
      }]
    }
  }

  function p19(I) {
    let d = c19(I);
    if (d.name = "HTMLbars", I.getLanguage("handlebars")) d.disableAutodetect = !0;
    return d
  }
  JV2.exports = p19
})
// @from(Start 4274910, End 4276644)
zV2 = Y((sH3, NV2) => {
  function i19(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function n19(...I) {
    return I.map((G) => i19(G)).join("")
  }

  function r19(I) {
    let Z = {
        className: "attribute",
        begin: n19("^", /[A-Za-z][A-Za-z0-9-]*/, "(?=\\:\\s)"),
        starts: {
          contains: [{
            className: "punctuation",
            begin: /: /,
            relevance: 0,
            starts: {
              end: "$",
              relevance: 0
            }
          }]
        }
      },
      C = [Z, {
        begin: "\\n\\n",
        starts: {
          subLanguage: [],
          endsWithParent: !0
        }
      }];
    return {
      name: "HTTP",
      aliases: ["https"],
      illegal: /\S/,
      contains: [{
        begin: "^(?=HTTP/(2|1\\.[01]) \\d{3})",
        end: /$/,
        contains: [{
          className: "meta",
          begin: "HTTP/(2|1\\.[01])"
        }, {
          className: "number",
          begin: "\\b\\d{3}\\b"
        }],
        starts: {
          end: /\b\B/,
          illegal: /\S/,
          contains: C
        }
      }, {
        begin: "(?=^[A-Z]+ (.*?) HTTP/(2|1\\.[01])$)",
        end: /$/,
        contains: [{
          className: "string",
          begin: " ",
          end: " ",
          excludeBegin: !0,
          excludeEnd: !0
        }, {
          className: "meta",
          begin: "HTTP/(2|1\\.[01])"
        }, {
          className: "keyword",
          begin: "[A-Z]+"
        }],
        starts: {
          end: /\b\B/,
          illegal: /\S/,
          contains: C
        }
      }, I.inherit(Z, {
        relevance: 0
      })]
    }
  }
  NV2.exports = r19
})
// @from(Start 4276650, End 4280189)
fV2 = Y((oH3, QV2) => {
  function a19(I) {
    var d = "a-zA-Z_\\-!.?+*=<>&#'",
      G = "[" + d + "][" + d + "0-9/;:]*",
      Z = {
        $pattern: G,
        "builtin-name": "!= % %= & &= * ** **= *= *map + += , --build-class-- --import-- -= . / // //= /= < << <<= <= = > >= >> >>= @ @= ^ ^= abs accumulate all and any ap-compose ap-dotimes ap-each ap-each-while ap-filter ap-first ap-if ap-last ap-map ap-map-when ap-pipe ap-reduce ap-reject apply as-> ascii assert assoc bin break butlast callable calling-module-name car case cdr chain chr coll? combinations compile compress cond cons cons? continue count curry cut cycle dec def default-method defclass defmacro defmacro-alias defmacro/g! defmain defmethod defmulti defn defn-alias defnc defnr defreader defseq del delattr delete-route dict-comp dir disassemble dispatch-reader-macro distinct divmod do doto drop drop-last drop-while empty? end-sequence eval eval-and-compile eval-when-compile even? every? except exec filter first flatten float? fn fnc fnr for for* format fraction genexpr gensym get getattr global globals group-by hasattr hash hex id identity if if* if-not if-python2 import in inc input instance? integer integer-char? integer? interleave interpose is is-coll is-cons is-empty is-even is-every is-float is-instance is-integer is-integer-char is-iterable is-iterator is-keyword is-neg is-none is-not is-numeric is-odd is-pos is-string is-symbol is-zero isinstance islice issubclass iter iterable? iterate iterator? keyword keyword? lambda last len let lif lif-not list* list-comp locals loop macro-error macroexpand macroexpand-1 macroexpand-all map max merge-with method-decorator min multi-decorator multicombinations name neg? next none? nonlocal not not-in not? nth numeric? oct odd? open or ord partition permutations pos? post-route postwalk pow prewalk print product profile/calls profile/cpu put-route quasiquote quote raise range read read-str recursive-replace reduce remove repeat repeatedly repr require rest round route route-with-methods rwm second seq set-comp setattr setv some sorted string string? sum switch symbol? take take-nth take-while tee try unless unquote unquote-splicing vars walk when while with with* with-decorator with-gensyms xi xor yield yield-from zero? zip zip-longest | |= ~"
      },
      C = "[-+]?\\d+(\\.\\d+)?",
      W = {
        begin: G,
        relevance: 0
      },
      w = {
        className: "number",
        begin: C,
        relevance: 0
      },
      B = I.inherit(I.QUOTE_STRING_MODE, {
        illegal: null
      }),
      A = I.COMMENT(";", "$", {
        relevance: 0
      }),
      V = {
        className: "literal",
        begin: /\b([Tt]rue|[Ff]alse|nil|None)\b/
      },
      X = {
        begin: "[\\[\\{]",
        end: "[\\]\\}]"
      },
      _ = {
        className: "comment",
        begin: "\\^" + G
      },
      F = I.COMMENT("\\^\\{", "\\}"),
      g = {
        className: "symbol",
        begin: "[:]{1,2}" + G
      },
      J = {
        begin: "\\(",
        end: "\\)"
      },
      K = {
        endsWithParent: !0,
        relevance: 0
      },
      Q = {
        className: "name",
        relevance: 0,
        keywords: Z,
        begin: G,
        starts: K
      },
      E = [J, B, _, F, A, g, X, w, V, W];
    return J.contains = [I.COMMENT("comment", ""), Q, K], K.contains = E, X.contains = E, {
      name: "Hy",
      aliases: ["hylang"],
      illegal: /\S/,
      contains: [I.SHEBANG(), J, B, _, F, A, g, X, w, V]
    }
  }
  QV2.exports = a19
})
// @from(Start 4280195, End 4281197)
RV2 = Y((eH3, qV2) => {
  function s19(I) {
    return {
      name: "Inform 7",
      aliases: ["i7"],
      case_insensitive: !0,
      keywords: {
        keyword: "thing room person man woman animal container supporter backdrop door scenery open closed locked inside gender is are say understand kind of rule"
      },
      contains: [{
        className: "string",
        begin: '"',
        end: '"',
        relevance: 0,
        contains: [{
          className: "subst",
          begin: "\\[",
          end: "\\]"
        }]
      }, {
        className: "section",
        begin: /^(Volume|Book|Part|Chapter|Section|Table)\b/,
        end: "$"
      }, {
        begin: /^(Check|Carry out|Report|Instead of|To|Rule|When|Before|After)\b/,
        end: ":",
        contains: [{
          begin: "\\(This",
          end: "\\)"
        }]
      }, {
        className: "comment",
        begin: "\\[",
        end: "\\]",
        contains: ["self"]
      }]
    }
  }
  qV2.exports = s19
})
// @from(Start 4281203, End 4283170)
MV2 = Y((tH3, EV2) => {
  function UV2(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function o19(I) {
    return vV2("(?=", I, ")")
  }

  function vV2(...I) {
    return I.map((G) => UV2(G)).join("")
  }

  function e19(...I) {
    return "(" + I.map((G) => UV2(G)).join("|") + ")"
  }

  function t19(I) {
    let d = {
        className: "number",
        relevance: 0,
        variants: [{
          begin: /([+-]+)?[\d]+_[\d_]+/
        }, {
          begin: I.NUMBER_RE
        }]
      },
      G = I.COMMENT();
    G.variants = [{
      begin: /;/,
      end: /$/
    }, {
      begin: /#/,
      end: /$/
    }];
    let Z = {
        className: "variable",
        variants: [{
          begin: /\$[\w\d"][\w\d_]*/
        }, {
          begin: /\$\{(.*?)\}/
        }]
      },
      C = {
        className: "literal",
        begin: /\bon|off|true|false|yes|no\b/
      },
      W = {
        className: "string",
        contains: [I.BACKSLASH_ESCAPE],
        variants: [{
          begin: "'''",
          end: "'''",
          relevance: 10
        }, {
          begin: '"""',
          end: '"""',
          relevance: 10
        }, {
          begin: '"',
          end: '"'
        }, {
          begin: "'",
          end: "'"
        }]
      },
      w = {
        begin: /\[/,
        end: /\]/,
        contains: [G, C, Z, W, d, "self"],
        relevance: 0
      },
      X = e19(/[A-Za-z0-9_-]+/, /"(\\"|[^"])*"/, /'[^']*'/),
      _ = vV2(X, "(\\s*\\.\\s*", X, ")*", o19(/\s*=\s*[^#\s]/));
    return {
      name: "TOML, also INI",
      aliases: ["toml"],
      case_insensitive: !0,
      illegal: /\S/,
      contains: [G, {
        className: "section",
        begin: /\[+/,
        end: /\]+/
      }, {
        begin: _,
        className: "attr",
        starts: {
          end: /$/,
          contains: [G, w, C, Z, W, d]
        }
      }]
    }
  }
  EV2.exports = t19
})
// @from(Start 4283176, End 4288488)
LV2 = Y((IF3, SV2) => {
  function I09(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function cF1(...I) {
    return I.map((G) => I09(G)).join("")
  }

  function d09(I) {
    let d = {
        className: "params",
        begin: "\\(",
        end: "\\)"
      },
      G = /(_[a-z_\d]+)?/,
      Z = /([de][+-]?\d+)?/,
      C = {
        className: "number",
        variants: [{
          begin: cF1(/\b\d+/, /\.(\d*)/, Z, G)
        }, {
          begin: cF1(/\b\d+/, Z, G)
        }, {
          begin: cF1(/\.\d+/, Z, G)
        }],
        relevance: 0
      };
    return {
      name: "IRPF90",
      case_insensitive: !0,
      keywords: {
        literal: ".False. .True.",
        keyword: "kind do while private call intrinsic where elsewhere type endtype endmodule endselect endinterface end enddo endif if forall endforall only contains default return stop then public subroutine|10 function program .and. .or. .not. .le. .eq. .ge. .gt. .lt. goto save else use module select case access blank direct exist file fmt form formatted iostat name named nextrec number opened rec recl sequential status unformatted unit continue format pause cycle exit c_null_char c_alert c_backspace c_form_feed flush wait decimal round iomsg synchronous nopass non_overridable pass protected volatile abstract extends import non_intrinsic value deferred generic final enumerator class associate bind enum c_int c_short c_long c_long_long c_signed_char c_size_t c_int8_t c_int16_t c_int32_t c_int64_t c_int_least8_t c_int_least16_t c_int_least32_t c_int_least64_t c_int_fast8_t c_int_fast16_t c_int_fast32_t c_int_fast64_t c_intmax_t C_intptr_t c_float c_double c_long_double c_float_complex c_double_complex c_long_double_complex c_bool c_char c_null_ptr c_null_funptr c_new_line c_carriage_return c_horizontal_tab c_vertical_tab iso_c_binding c_loc c_funloc c_associated  c_f_pointer c_ptr c_funptr iso_fortran_env character_storage_size error_unit file_storage_size input_unit iostat_end iostat_eor numeric_storage_size output_unit c_f_procpointer ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode newunit contiguous recursive pad position action delim readwrite eor advance nml interface procedure namelist include sequence elemental pure integer real character complex logical dimension allocatable|10 parameter external implicit|10 none double precision assign intent optional pointer target in out common equivalence data begin_provider &begin_provider end_provider begin_shell end_shell begin_template end_template subst assert touch soft_touch provide no_dep free irp_if irp_else irp_endif irp_write irp_read",
        built_in: "alog alog10 amax0 amax1 amin0 amin1 amod cabs ccos cexp clog csin csqrt dabs dacos dasin datan datan2 dcos dcosh ddim dexp dint dlog dlog10 dmax1 dmin1 dmod dnint dsign dsin dsinh dsqrt dtan dtanh float iabs idim idint idnint ifix isign max0 max1 min0 min1 sngl algama cdabs cdcos cdexp cdlog cdsin cdsqrt cqabs cqcos cqexp cqlog cqsin cqsqrt dcmplx dconjg derf derfc dfloat dgamma dimag dlgama iqint qabs qacos qasin qatan qatan2 qcmplx qconjg qcos qcosh qdim qerf qerfc qexp qgamma qimag qlgama qlog qlog10 qmax1 qmin1 qmod qnint qsign qsin qsinh qsqrt qtan qtanh abs acos aimag aint anint asin atan atan2 char cmplx conjg cos cosh exp ichar index int log log10 max min nint sign sin sinh sqrt tan tanh print write dim lge lgt lle llt mod nullify allocate deallocate adjustl adjustr all allocated any associated bit_size btest ceiling count cshift date_and_time digits dot_product eoshift epsilon exponent floor fraction huge iand ibclr ibits ibset ieor ior ishft ishftc lbound len_trim matmul maxexponent maxloc maxval merge minexponent minloc minval modulo mvbits nearest pack present product radix random_number random_seed range repeat reshape rrspacing scale scan selected_int_kind selected_real_kind set_exponent shape size spacing spread sum system_clock tiny transpose trim ubound unpack verify achar iachar transfer dble entry dprod cpu_time command_argument_count get_command get_command_argument get_environment_variable is_iostat_end ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode is_iostat_eor move_alloc new_line selected_char_kind same_type_as extends_type_of acosh asinh atanh bessel_j0 bessel_j1 bessel_jn bessel_y0 bessel_y1 bessel_yn erf erfc erfc_scaled gamma log_gamma hypot norm2 atomic_define atomic_ref execute_command_line leadz trailz storage_size merge_bits bge bgt ble blt dshiftl dshiftr findloc iall iany iparity image_index lcobound ucobound maskl maskr num_images parity popcnt poppar shifta shiftl shiftr this_image IRP_ALIGN irp_here"
      },
      illegal: /\/\*/,
      contains: [I.inherit(I.APOS_STRING_MODE, {
        className: "string",
        relevance: 0
      }), I.inherit(I.QUOTE_STRING_MODE, {
        className: "string",
        relevance: 0
      }), {
        className: "function",
        beginKeywords: "subroutine function program",
        illegal: "[${=\\n]",
        contains: [I.UNDERSCORE_TITLE_MODE, d]
      }, I.COMMENT("!", "$", {
        relevance: 0
      }), I.COMMENT("begin_doc", "end_doc", {
        relevance: 10
      }), C]
    }
  }
  SV2.exports = d09
})
// @from(Start 4383462, End 4388579)
nV2 = Y((AF3, iV2) => {
  var fR = "[0-9](_*[0-9])*",
    Pa = `\\.(${fR})`,
    $a = "[0-9a-fA-F](_*[0-9a-fA-F])*",
    K09 = {
      className: "number",
      variants: [{
        begin: `(\\b(${fR})((${Pa})|\\.)?|(${Pa}))[eE][+-]?(${fR})[fFdD]?\\b`
      }, {
        begin: `\\b(${fR})((${Pa})[fFdD]?\\b|\\.([fFdD]\\b)?)`
      }, {
        begin: `(${Pa})[fFdD]?\\b`
      }, {
        begin: `\\b(${fR})[fFdD]\\b`
      }, {
        begin: `\\b0[xX]((${$a})\\.?|(${$a})?\\.(${$a}))[pP][+-]?(${fR})[fFdD]?\\b`
      }, {
        begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b"
      }, {
        begin: `\\b0[xX](${$a})[lL]?\\b`
      }, {
        begin: "\\b0(_*[0-7])*[lL]?\\b"
      }, {
        begin: "\\b0[bB][01](_*[01])*[lL]?\\b"
      }],
      relevance: 0
    };

  function N09(I) {
    let d = {
        keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
        built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
        literal: "true false null"
      },
      G = {
        className: "keyword",
        begin: /\b(break|continue|return|this)\b/,
        starts: {
          contains: [{
            className: "symbol",
            begin: /@\w+/
          }]
        }
      },
      Z = {
        className: "symbol",
        begin: I.UNDERSCORE_IDENT_RE + "@"
      },
      C = {
        className: "subst",
        begin: /\$\{/,
        end: /\}/,
        contains: [I.C_NUMBER_MODE]
      },
      W = {
        className: "variable",
        begin: "\\$" + I.UNDERSCORE_IDENT_RE
      },
      w = {
        className: "string",
        variants: [{
          begin: '"""',
          end: '"""(?=[^"])',
          contains: [W, C]
        }, {
          begin: "'",
          end: "'",
          illegal: /\n/,
          contains: [I.BACKSLASH_ESCAPE]
        }, {
          begin: '"',
          end: '"',
          illegal: /\n/,
          contains: [I.BACKSLASH_ESCAPE, W, C]
        }]
      };
    C.contains.push(w);
    let B = {
        className: "meta",
        begin: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + I.UNDERSCORE_IDENT_RE + ")?"
      },
      A = {
        className: "meta",
        begin: "@" + I.UNDERSCORE_IDENT_RE,
        contains: [{
          begin: /\(/,
          end: /\)/,
          contains: [I.inherit(w, {
            className: "meta-string"
          })]
        }]
      },
      V = K09,
      X = I.COMMENT("/\\*", "\\*/", {
        contains: [I.C_BLOCK_COMMENT_MODE]
      }),
      _ = {
        variants: [{
          className: "type",
          begin: I.UNDERSCORE_IDENT_RE
        }, {
          begin: /\(/,
          end: /\)/,
          contains: []
        }]
      },
      F = _;
    return F.variants[1].contains = [_], _.variants[1].contains = [F], {
      name: "Kotlin",
      aliases: ["kt", "kts"],
      keywords: d,
      contains: [I.COMMENT("/\\*\\*", "\\*/", {
        relevance: 0,
        contains: [{
          className: "doctag",
          begin: "@[A-Za-z]+"
        }]
      }), I.C_LINE_COMMENT_MODE, X, G, Z, B, A, {
        className: "function",
        beginKeywords: "fun",
        end: "[(]|$",
        returnBegin: !0,
        excludeEnd: !0,
        keywords: d,
        relevance: 5,
        contains: [{
          begin: I.UNDERSCORE_IDENT_RE + "\\s*\\(",
          returnBegin: !0,
          relevance: 0,
          contains: [I.UNDERSCORE_TITLE_MODE]
        }, {
          className: "type",
          begin: /</,
          end: />/,
          keywords: "reified",
          relevance: 0
        }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          endsParent: !0,
          keywords: d,
          relevance: 0,
          contains: [{
            begin: /:/,
            end: /[=,\/]/,
            endsWithParent: !0,
            contains: [_, I.C_LINE_COMMENT_MODE, X],
            relevance: 0
          }, I.C_LINE_COMMENT_MODE, X, B, A, w, I.C_NUMBER_MODE]
        }, X]
      }, {
        className: "class",
        beginKeywords: "class interface trait",
        end: /[:\{(]|$/,
        excludeEnd: !0,
        illegal: "extends implements",
        contains: [{
          beginKeywords: "public protected internal private constructor"
        }, I.UNDERSCORE_TITLE_MODE, {
          className: "type",
          begin: /</,
          end: />/,
          excludeBegin: !0,
          excludeEnd: !0,
          relevance: 0
        }, {
          className: "type",
          begin: /[,:]\s*/,
          end: /[<\(,]|$/,
          excludeBegin: !0,
          returnEnd: !0
        }, B, A]
      }, w, {
        className: "meta",
        begin: "^#!/usr/bin/env",
        end: "$",
        illegal: `
`
      }, V]
    }
  }
  iV2.exports = N09
})
// @from(Start 4388585, End 4392776)
aV2 = Y((VF3, rV2) => {
  function z09(I) {
    let C = {
        $pattern: "[a-zA-Z_][\\w.]*|&[lg]t;",
        literal: "true false none minimal full all void and or not bw nbw ew new cn ncn lt lte gt gte eq neq rx nrx ft",
        built_in: "array date decimal duration integer map pair string tag xml null boolean bytes keyword list locale queue set stack staticarray local var variable global data self inherited currentcapture givenblock",
        keyword: "cache database_names database_schemanames database_tablenames define_tag define_type email_batch encode_set html_comment handle handle_error header if inline iterate ljax_target link link_currentaction link_currentgroup link_currentrecord link_detail link_firstgroup link_firstrecord link_lastgroup link_lastrecord link_nextgroup link_nextrecord link_prevgroup link_prevrecord log loop namespace_using output_none portal private protect records referer referrer repeating resultset rows search_args search_arguments select sort_args sort_arguments thread_atomic value_list while abort case else fail_if fail_ifnot fail if_empty if_false if_null if_true loop_abort loop_continue loop_count params params_up return return_value run_children soap_definetag soap_lastrequest soap_lastresponse tag_name ascending average by define descending do equals frozen group handle_failure import in into join let match max min on order parent protected provide public require returnhome skip split_thread sum take thread to trait type where with yield yieldhome"
      },
      W = I.COMMENT("<!--", "-->", {
        relevance: 0
      }),
      w = {
        className: "meta",
        begin: "\\[noprocess\\]",
        starts: {
          end: "\\[/noprocess\\]",
          returnEnd: !0,
          contains: [W]
        }
      },
      B = {
        className: "meta",
        begin: "\\[/noprocess|<\\?(lasso(script)?|=)"
      },
      A = {
        className: "symbol",
        begin: "'[a-zA-Z_][\\w.]*'"
      },
      V = [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.inherit(I.C_NUMBER_MODE, {
        begin: I.C_NUMBER_RE + "|(-?infinity|NaN)\\b"
      }), I.inherit(I.APOS_STRING_MODE, {
        illegal: null
      }), I.inherit(I.QUOTE_STRING_MODE, {
        illegal: null
      }), {
        className: "string",
        begin: "`",
        end: "`"
      }, {
        variants: [{
          begin: "[#$][a-zA-Z_][\\w.]*"
        }, {
          begin: "#",
          end: "\\d+",
          illegal: "\\W"
        }]
      }, {
        className: "type",
        begin: "::\\s*",
        end: "[a-zA-Z_][\\w.]*",
        illegal: "\\W"
      }, {
        className: "params",
        variants: [{
          begin: "-(?!infinity)[a-zA-Z_][\\w.]*",
          relevance: 0
        }, {
          begin: "(\\.\\.\\.)"
        }]
      }, {
        begin: /(->|\.)\s*/,
        relevance: 0,
        contains: [A]
      }, {
        className: "class",
        beginKeywords: "define",
        returnEnd: !0,
        end: "\\(|=>",
        contains: [I.inherit(I.TITLE_MODE, {
          begin: "[a-zA-Z_][\\w.]*(=(?!>))?|[-+*/%](?!>)"
        })]
      }];
    return {
      name: "Lasso",
      aliases: ["ls", "lassoscript"],
      case_insensitive: !0,
      keywords: C,
      contains: [{
        className: "meta",
        begin: "\\]|\\?>",
        relevance: 0,
        starts: {
          end: "\\[|<\\?(lasso(script)?|=)",
          returnEnd: !0,
          relevance: 0,
          contains: [W]
        }
      }, w, B, {
        className: "meta",
        begin: "\\[no_square_brackets",
        starts: {
          end: "\\[/no_square_brackets\\]",
          keywords: C,
          contains: [{
            className: "meta",
            begin: "\\]|\\?>",
            relevance: 0,
            starts: {
              end: "\\[noprocess\\]|<\\?(lasso(script)?|=)",
              returnEnd: !0,
              contains: [W]
            }
          }, w, B].concat(V)
        }
      }, {
        className: "meta",
        begin: "\\[",
        relevance: 0
      }, {
        className: "meta",
        begin: "^#!",
        end: "lasso9$",
        relevance: 10
      }].concat(V)
    }
  }
  rV2.exports = z09
})
// @from(Start 4392782, End 4398337)
oV2 = Y((XF3, sV2) => {
  function Q09(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function f09(...I) {
    return "(" + I.map((G) => Q09(G)).join("|") + ")"
  }

  function q09(I) {
    let d = f09(...["(?:NeedsTeXFormat|RequirePackage|GetIdInfo)", "Provides(?:Expl)?(?:Package|Class|File)", "(?:DeclareOption|ProcessOptions)", "(?:documentclass|usepackage|input|include)", "makeat(?:letter|other)", "ExplSyntax(?:On|Off)", "(?:new|renew|provide)?command", "(?:re)newenvironment", "(?:New|Renew|Provide|Declare)(?:Expandable)?DocumentCommand", "(?:New|Renew|Provide|Declare)DocumentEnvironment", "(?:(?:e|g|x)?def|let)", "(?:begin|end)", "(?:part|chapter|(?:sub){0,2}section|(?:sub)?paragraph)", "caption", "(?:label|(?:eq|page|name)?ref|(?:paren|foot|super)?cite)", "(?:alpha|beta|[Gg]amma|[Dd]elta|(?:var)?epsilon|zeta|eta|[Tt]heta|vartheta)", "(?:iota|(?:var)?kappa|[Ll]ambda|mu|nu|[Xx]i|[Pp]i|varpi|(?:var)rho)", "(?:[Ss]igma|varsigma|tau|[Uu]psilon|[Pp]hi|varphi|chi|[Pp]si|[Oo]mega)", "(?:frac|sum|prod|lim|infty|times|sqrt|leq|geq|left|right|middle|[bB]igg?)", "(?:[lr]angle|q?quad|[lcvdi]?dots|d?dot|hat|tilde|bar)"].map((c) => c + "(?![a-zA-Z@:_])")),
      G = new RegExp(["(?:__)?[a-zA-Z]{2,}_[a-zA-Z](?:_?[a-zA-Z])+:[a-zA-Z]*", "[lgc]__?[a-zA-Z](?:_?[a-zA-Z])*_[a-zA-Z]{2,}", "[qs]__?[a-zA-Z](?:_?[a-zA-Z])+", "use(?:_i)?:[a-zA-Z]*", "(?:else|fi|or):", "(?:if|cs|exp):w", "(?:hbox|vbox):n", "::[a-zA-Z]_unbraced", "::[a-zA-Z:]"].map((c) => c + "(?![a-zA-Z:_])").join("|")),
      Z = [{
        begin: /[a-zA-Z@]+/
      }, {
        begin: /[^a-zA-Z@]?/
      }],
      C = [{
        begin: /\^{6}[0-9a-f]{6}/
      }, {
        begin: /\^{5}[0-9a-f]{5}/
      }, {
        begin: /\^{4}[0-9a-f]{4}/
      }, {
        begin: /\^{3}[0-9a-f]{3}/
      }, {
        begin: /\^{2}[0-9a-f]{2}/
      }, {
        begin: /\^{2}[\u0000-\u007f]/
      }],
      W = {
        className: "keyword",
        begin: /\\/,
        relevance: 0,
        contains: [{
          endsParent: !0,
          begin: d
        }, {
          endsParent: !0,
          begin: G
        }, {
          endsParent: !0,
          variants: C
        }, {
          endsParent: !0,
          relevance: 0,
          variants: Z
        }]
      },
      w = {
        className: "params",
        relevance: 0,
        begin: /#+\d?/
      },
      B = {
        variants: C
      },
      A = {
        className: "built_in",
        relevance: 0,
        begin: /[$&^_]/
      },
      V = {
        className: "meta",
        begin: "% !TeX",
        end: "$",
        relevance: 10
      },
      X = I.COMMENT("%", "$", {
        relevance: 0
      }),
      _ = [W, w, B, A, V, X],
      F = {
        begin: /\{/,
        end: /\}/,
        relevance: 0,
        contains: ["self", ..._]
      },
      g = I.inherit(F, {
        relevance: 0,
        endsParent: !0,
        contains: [F, ..._]
      }),
      J = {
        begin: /\[/,
        end: /\]/,
        endsParent: !0,
        relevance: 0,
        contains: [F, ..._]
      },
      K = {
        begin: /\s+/,
        relevance: 0
      },
      Q = [g],
      E = [J],
      S = function(c, c1) {
        return {
          contains: [K],
          starts: {
            relevance: 0,
            contains: c,
            starts: c1
          }
        }
      },
      P = function(c, c1) {
        return {
          begin: "\\\\" + c + "(?![a-zA-Z@:_])",
          keywords: {
            $pattern: /\\[a-zA-Z]+/,
            keyword: "\\" + c
          },
          relevance: 0,
          contains: [K],
          starts: c1
        }
      },
      $ = function(c, c1) {
        return I.inherit({
          begin: "\\\\begin(?=[ \t]*(\\r?\\n[ \t]*)?\\{" + c + "\\})",
          keywords: {
            $pattern: /\\[a-zA-Z]+/,
            keyword: "\\begin"
          },
          relevance: 0
        }, S(Q, c1))
      },
      h = (c = "string") => {
        return I.END_SAME_AS_BEGIN({
          className: c,
          begin: /(.|\r?\n)/,
          end: /(.|\r?\n)/,
          excludeBegin: !0,
          excludeEnd: !0,
          endsParent: !0
        })
      },
      O = function(c) {
        return {
          className: "string",
          end: "(?=\\\\end\\{" + c + "\\})"
        }
      },
      T = (c = "string") => {
        return {
          relevance: 0,
          begin: /\{/,
          starts: {
            endsParent: !0,
            contains: [{
              className: c,
              end: /(?=\})/,
              endsParent: !0,
              contains: [{
                begin: /\{/,
                end: /\}/,
                relevance: 0,
                contains: ["self"]
              }]
            }]
          }
        }
      },
      V1 = [...["verb", "lstinline"].map((c) => P(c, {
        contains: [h()]
      })), P("mint", S(Q, {
        contains: [h()]
      })), P("mintinline", S(Q, {
        contains: [T(), h()]
      })), P("url", {
        contains: [T("link"), T("link")]
      }), P("hyperref", {
        contains: [T("link")]
      }), P("href", S(E, {
        contains: [T("link")]
      })), ...[].concat(...["", "\\*"].map((c) => [$("verbatim" + c, O("verbatim" + c)), $("filecontents" + c, S(Q, O("filecontents" + c))), ...["", "B", "L"].map((c1) => $(c1 + "Verbatim" + c, S(E, O(c1 + "Verbatim" + c))))])), $("minted", S(E, S(Q, O("minted"))))];
    return {
      name: "LaTeX",
      aliases: ["tex"],
      contains: [...V1, ..._]
    }
  }
  sV2.exports = q09
})
// @from(Start 4398343, End 4398951)
tV2 = Y((YF3, eV2) => {
  function R09(I) {
    return {
      name: "LDIF",
      contains: [{
        className: "attribute",
        begin: "^dn",
        end: ": ",
        excludeEnd: !0,
        starts: {
          end: "$",
          relevance: 0
        },
        relevance: 10
      }, {
        className: "attribute",
        begin: "^\\w",
        end: ": ",
        excludeEnd: !0,
        starts: {
          end: "$",
          relevance: 0
        }
      }, {
        className: "literal",
        begin: "^-",
        end: "$"
      }, I.HASH_COMMENT_MODE]
    }
  }
  eV2.exports = R09
})
// @from(Start 4398957, End 4399726)
dX2 = Y((_F3, IX2) => {
  function U09(I) {
    return {
      name: "Leaf",
      contains: [{
        className: "function",
        begin: "#+[A-Za-z_0-9]*\\(",
        end: / \{/,
        returnBegin: !0,
        excludeEnd: !0,
        contains: [{
          className: "keyword",
          begin: "#+"
        }, {
          className: "title",
          begin: "[A-Za-z_][A-Za-z_0-9]*"
        }, {
          className: "params",
          begin: "\\(",
          end: "\\)",
          endsParent: !0,
          contains: [{
            className: "string",
            begin: '"',
            end: '"'
          }, {
            className: "variable",
            begin: "[A-Za-z_][A-Za-z_0-9]*"
          }]
        }]
      }]
    }
  }
  IX2.exports = U09
})
// @from(Start 4399732, End 4409482)
WX2 = Y((DF3, CX2) => {
  var v09 = (I) => {
      return {
        IMPORTANT: {
          className: "meta",
          begin: "!important"
        },
        HEXCOLOR: {
          className: "number",
          begin: "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})"
        },
        ATTRIBUTE_SELECTOR_MODE: {
          className: "selector-attr",
          begin: /\[/,
          end: /\]/,
          illegal: "$",
          contains: [I.APOS_STRING_MODE, I.QUOTE_STRING_MODE]
        }
      }
    },
    E09 = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"],
    M09 = ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"],
    GX2 = ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"],
    ZX2 = ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"],
    S09 = ["align-content", "align-items", "align-self", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "auto", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "clip-path", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-variant", "font-variant-ligatures", "font-variation-settings", "font-weight", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inherit", "initial", "justify-content", "left", "letter-spacing", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "mask", "max-height", "max-width", "min-height", "min-width", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "right", "src", "tab-size", "table-layout", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index"].reverse(),
    L09 = GX2.concat(ZX2);

  function y09(I) {
    let d = v09(I),
      G = L09,
      Z = "and or not only",
      C = "[\\w-]+",
      W = "([\\w-]+|@\\{[\\w-]+\\})",
      w = [],
      B = [],
      A = function(P) {
        return {
          className: "string",
          begin: "~?" + P + ".*?" + P
        }
      },
      V = function(P, $, h) {
        return {
          className: P,
          begin: $,
          relevance: h
        }
      },
      X = {
        $pattern: /[a-z-]+/,
        keyword: "and or not only",
        attribute: M09.join(" ")
      },
      _ = {
        begin: "\\(",
        end: "\\)",
        contains: B,
        keywords: X,
        relevance: 0
      };
    B.push(I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, A("'"), A('"'), I.CSS_NUMBER_MODE, {
      begin: "(url|data-uri)\\(",
      starts: {
        className: "string",
        end: "[\\)\\n]",
        excludeEnd: !0
      }
    }, d.HEXCOLOR, _, V("variable", "@@?[\\w-]+", 10), V("variable", "@\\{[\\w-]+\\}"), V("built_in", "~?`[^`]*?`"), {
      className: "attribute",
      begin: "[\\w-]+\\s*:",
      end: ":",
      returnBegin: !0,
      excludeEnd: !0
    }, d.IMPORTANT);
    let F = B.concat({
        begin: /\{/,
        end: /\}/,
        contains: w
      }),
      g = {
        beginKeywords: "when",
        endsWithParent: !0,
        contains: [{
          beginKeywords: "and not"
        }].concat(B)
      },
      J = {
        begin: W + "\\s*:",
        returnBegin: !0,
        end: /[;}]/,
        relevance: 0,
        contains: [{
          begin: /-(webkit|moz|ms|o)-/
        }, {
          className: "attribute",
          begin: "\\b(" + S09.join("|") + ")\\b",
          end: /(?=:)/,
          starts: {
            endsWithParent: !0,
            illegal: "[<=$]",
            relevance: 0,
            contains: B
          }
        }]
      },
      K = {
        className: "keyword",
        begin: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
        starts: {
          end: "[;{}]",
          keywords: X,
          returnEnd: !0,
          contains: B,
          relevance: 0
        }
      },
      Q = {
        className: "variable",
        variants: [{
          begin: "@[\\w-]+\\s*:",
          relevance: 15
        }, {
          begin: "@[\\w-]+"
        }],
        starts: {
          end: "[;}]",
          returnEnd: !0,
          contains: F
        }
      },
      E = {
        variants: [{
          begin: "[\\.#:&\\[>]",
          end: "[;{}]"
        }, {
          begin: W,
          end: /\{/
        }],
        returnBegin: !0,
        returnEnd: !0,
        illegal: `[<='$"]`,
        relevance: 0,
        contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, g, V("keyword", "all\\b"), V("variable", "@\\{[\\w-]+\\}"), {
          begin: "\\b(" + E09.join("|") + ")\\b",
          className: "selector-tag"
        }, V("selector-tag", W + "%?", 0), V("selector-id", "#" + W), V("selector-class", "\\." + W, 0), V("selector-tag", "&", 0), d.ATTRIBUTE_SELECTOR_MODE, {
          className: "selector-pseudo",
          begin: ":(" + GX2.join("|") + ")"
        }, {
          className: "selector-pseudo",
          begin: "::(" + ZX2.join("|") + ")"
        }, {
          begin: "\\(",
          end: "\\)",
          contains: F
        }, {
          begin: "!important"
        }]
      },
      S = {
        begin: `[\\w-]+:(:)?(${G.join("|")})`,
        returnBegin: !0,
        contains: [E]
      };
    return w.push(I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, K, Q, S, J, E), {
      name: "Less",
      case_insensitive: !0,
      illegal: `[=>'/<($"]`,
      contains: w
    }
  }
  CX2.exports = y09
})
// @from(Start 4409488, End 4411556)
BX2 = Y((HF3, wX2) => {
  function P09(I) {
    var d = "[a-zA-Z_\\-+\\*\\/<=>&#][a-zA-Z0-9_\\-+*\\/<=>&#!]*",
      G = "\\|[^]*?\\|",
      Z = "(-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|-)?\\d+)?",
      C = {
        className: "literal",
        begin: "\\b(t{1}|nil)\\b"
      },
      W = {
        className: "number",
        variants: [{
          begin: Z,
          relevance: 0
        }, {
          begin: "#(b|B)[0-1]+(/[0-1]+)?"
        }, {
          begin: "#(o|O)[0-7]+(/[0-7]+)?"
        }, {
          begin: "#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?"
        }, {
          begin: "#(c|C)\\(" + Z + " +" + Z,
          end: "\\)"
        }]
      },
      w = I.inherit(I.QUOTE_STRING_MODE, {
        illegal: null
      }),
      B = I.COMMENT(";", "$", {
        relevance: 0
      }),
      A = {
        begin: "\\*",
        end: "\\*"
      },
      V = {
        className: "symbol",
        begin: "[:&]" + d
      },
      X = {
        begin: d,
        relevance: 0
      },
      _ = {
        begin: G
      },
      F = {
        begin: "\\(",
        end: "\\)",
        contains: ["self", C, w, W, X]
      },
      g = {
        contains: [W, w, A, V, F, X],
        variants: [{
          begin: "['`]\\(",
          end: "\\)"
        }, {
          begin: "\\(quote ",
          end: "\\)",
          keywords: {
            name: "quote"
          }
        }, {
          begin: "'" + G
        }]
      },
      J = {
        variants: [{
          begin: "'" + d
        }, {
          begin: "#'" + d + "(::" + d + ")*"
        }]
      },
      K = {
        begin: "\\(\\s*",
        end: "\\)"
      },
      Q = {
        endsWithParent: !0,
        relevance: 0
      };
    return K.contains = [{
      className: "name",
      variants: [{
        begin: d,
        relevance: 0
      }, {
        begin: G
      }]
    }, Q], Q.contains = [g, J, K, C, W, w, B, A, V, _, X], {
      name: "Lisp",
      illegal: /\S/,
      contains: [W, I.SHEBANG(), C, w, B, g, J, K, X]
    }
  }
  wX2.exports = P09
})
// @from(Start 4411562, End 4420367)
VX2 = Y((FF3, AX2) => {
  function $09(I) {
    let d = {
        className: "variable",
        variants: [{
          begin: "\\b([gtps][A-Z]{1}[a-zA-Z0-9]*)(\\[.+\\])?(?:\\s*?)"
        }, {
          begin: "\\$_[A-Z]+"
        }],
        relevance: 0
      },
      G = [I.C_BLOCK_COMMENT_MODE, I.HASH_COMMENT_MODE, I.COMMENT("--", "$"), I.COMMENT("[^:]//", "$")],
      Z = I.inherit(I.TITLE_MODE, {
        variants: [{
          begin: "\\b_*rig[A-Z][A-Za-z0-9_\\-]*"
        }, {
          begin: "\\b_[a-z0-9\\-]+"
        }]
      }),
      C = I.inherit(I.TITLE_MODE, {
        begin: "\\b([A-Za-z0-9_\\-]+)\\b"
      });
    return {
      name: "LiveCode",
      case_insensitive: !1,
      keywords: {
        keyword: "$_COOKIE $_FILES $_GET $_GET_BINARY $_GET_RAW $_POST $_POST_BINARY $_POST_RAW $_SESSION $_SERVER codepoint codepoints segment segments codeunit codeunits sentence sentences trueWord trueWords paragraph after byte bytes english the until http forever descending using line real8 with seventh for stdout finally element word words fourth before black ninth sixth characters chars stderr uInt1 uInt1s uInt2 uInt2s stdin string lines relative rel any fifth items from middle mid at else of catch then third it file milliseconds seconds second secs sec int1 int1s int4 int4s internet int2 int2s normal text item last long detailed effective uInt4 uInt4s repeat end repeat URL in try into switch to words https token binfile each tenth as ticks tick system real4 by dateItems without char character ascending eighth whole dateTime numeric short first ftp integer abbreviated abbr abbrev private case while if div mod wrap and or bitAnd bitNot bitOr bitXor among not in a an within contains ends with begins the keys of keys",
        literal: "SIX TEN FORMFEED NINE ZERO NONE SPACE FOUR FALSE COLON CRLF PI COMMA ENDOFFILE EOF EIGHT FIVE QUOTE EMPTY ONE TRUE RETURN CR LINEFEED RIGHT BACKSLASH NULL SEVEN TAB THREE TWO six ten formfeed nine zero none space four false colon crlf pi comma endoffile eof eight five quote empty one true return cr linefeed right backslash null seven tab three two RIVERSION RISTATE FILE_READ_MODE FILE_WRITE_MODE FILE_WRITE_MODE DIR_WRITE_MODE FILE_READ_UMASK FILE_WRITE_UMASK DIR_READ_UMASK DIR_WRITE_UMASK",
        built_in: "put abs acos aliasReference annuity arrayDecode arrayEncode asin atan atan2 average avg avgDev base64Decode base64Encode baseConvert binaryDecode binaryEncode byteOffset byteToNum cachedURL cachedURLs charToNum cipherNames codepointOffset codepointProperty codepointToNum codeunitOffset commandNames compound compress constantNames cos date dateFormat decompress difference directories diskSpace DNSServers exp exp1 exp2 exp10 extents files flushEvents folders format functionNames geometricMean global globals hasMemory harmonicMean hostAddress hostAddressToName hostName hostNameToAddress isNumber ISOToMac itemOffset keys len length libURLErrorData libUrlFormData libURLftpCommand libURLLastHTTPHeaders libURLLastRHHeaders libUrlMultipartFormAddPart libUrlMultipartFormData libURLVersion lineOffset ln ln1 localNames log log2 log10 longFilePath lower macToISO matchChunk matchText matrixMultiply max md5Digest median merge messageAuthenticationCode messageDigest millisec millisecs millisecond milliseconds min monthNames nativeCharToNum normalizeText num number numToByte numToChar numToCodepoint numToNativeChar offset open openfiles openProcesses openProcessIDs openSockets paragraphOffset paramCount param params peerAddress pendingMessages platform popStdDev populationStandardDeviation populationVariance popVariance processID random randomBytes replaceText result revCreateXMLTree revCreateXMLTreeFromFile revCurrentRecord revCurrentRecordIsFirst revCurrentRecordIsLast revDatabaseColumnCount revDatabaseColumnIsNull revDatabaseColumnLengths revDatabaseColumnNames revDatabaseColumnNamed revDatabaseColumnNumbered revDatabaseColumnTypes revDatabaseConnectResult revDatabaseCursors revDatabaseID revDatabaseTableNames revDatabaseType revDataFromQuery revdb_closeCursor revdb_columnbynumber revdb_columncount revdb_columnisnull revdb_columnlengths revdb_columnnames revdb_columntypes revdb_commit revdb_connect revdb_connections revdb_connectionerr revdb_currentrecord revdb_cursorconnection revdb_cursorerr revdb_cursors revdb_dbtype revdb_disconnect revdb_execute revdb_iseof revdb_isbof revdb_movefirst revdb_movelast revdb_movenext revdb_moveprev revdb_query revdb_querylist revdb_recordcount revdb_rollback revdb_tablenames revGetDatabaseDriverPath revNumberOfRecords revOpenDatabase revOpenDatabases revQueryDatabase revQueryDatabaseBlob revQueryResult revQueryIsAtStart revQueryIsAtEnd revUnixFromMacPath revXMLAttribute revXMLAttributes revXMLAttributeValues revXMLChildContents revXMLChildNames revXMLCreateTreeFromFileWithNamespaces revXMLCreateTreeWithNamespaces revXMLDataFromXPathQuery revXMLEvaluateXPath revXMLFirstChild revXMLMatchingNode revXMLNextSibling revXMLNodeContents revXMLNumberOfChildren revXMLParent revXMLPreviousSibling revXMLRootNode revXMLRPC_CreateRequest revXMLRPC_Documents revXMLRPC_Error revXMLRPC_GetHost revXMLRPC_GetMethod revXMLRPC_GetParam revXMLText revXMLRPC_Execute revXMLRPC_GetParamCount revXMLRPC_GetParamNode revXMLRPC_GetParamType revXMLRPC_GetPath revXMLRPC_GetPort revXMLRPC_GetProtocol revXMLRPC_GetRequest revXMLRPC_GetResponse revXMLRPC_GetSocket revXMLTree revXMLTrees revXMLValidateDTD revZipDescribeItem revZipEnumerateItems revZipOpenArchives round sampVariance sec secs seconds sentenceOffset sha1Digest shell shortFilePath sin specialFolderPath sqrt standardDeviation statRound stdDev sum sysError systemVersion tan tempName textDecode textEncode tick ticks time to tokenOffset toLower toUpper transpose truewordOffset trunc uniDecode uniEncode upper URLDecode URLEncode URLStatus uuid value variableNames variance version waitDepth weekdayNames wordOffset xsltApplyStylesheet xsltApplyStylesheetFromFile xsltLoadStylesheet xsltLoadStylesheetFromFile add breakpoint cancel clear local variable file word line folder directory URL close socket process combine constant convert create new alias folder directory decrypt delete variable word line folder directory URL dispatch divide do encrypt filter get include intersect kill libURLDownloadToFile libURLFollowHttpRedirects libURLftpUpload libURLftpUploadFile libURLresetAll libUrlSetAuthCallback libURLSetDriver libURLSetCustomHTTPHeaders libUrlSetExpect100 libURLSetFTPListCommand libURLSetFTPMode libURLSetFTPStopTime libURLSetStatusCallback load extension loadedExtensions multiply socket prepare process post seek rel relative read from process rename replace require resetAll resolve revAddXMLNode revAppendXML revCloseCursor revCloseDatabase revCommitDatabase revCopyFile revCopyFolder revCopyXMLNode revDeleteFolder revDeleteXMLNode revDeleteAllXMLTrees revDeleteXMLTree revExecuteSQL revGoURL revInsertXMLNode revMoveFolder revMoveToFirstRecord revMoveToLastRecord revMoveToNextRecord revMoveToPreviousRecord revMoveToRecord revMoveXMLNode revPutIntoXMLNode revRollBackDatabase revSetDatabaseDriverPath revSetXMLAttribute revXMLRPC_AddParam revXMLRPC_DeleteAllDocuments revXMLAddDTD revXMLRPC_Free revXMLRPC_FreeAll revXMLRPC_DeleteDocument revXMLRPC_DeleteParam revXMLRPC_SetHost revXMLRPC_SetMethod revXMLRPC_SetPort revXMLRPC_SetProtocol revXMLRPC_SetSocket revZipAddItemWithData revZipAddItemWithFile revZipAddUncompressedItemWithData revZipAddUncompressedItemWithFile revZipCancel revZipCloseArchive revZipDeleteItem revZipExtractItemToFile revZipExtractItemToVariable revZipSetProgressCallback revZipRenameItem revZipReplaceItemWithData revZipReplaceItemWithFile revZipOpenArchive send set sort split start stop subtract symmetric union unload vectorDotProduct wait write"
      },
      contains: [d, {
        className: "keyword",
        begin: "\\bend\\sif\\b"
      }, {
        className: "function",
        beginKeywords: "function",
        end: "$",
        contains: [d, C, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, I.BINARY_NUMBER_MODE, I.C_NUMBER_MODE, Z]
      }, {
        className: "function",
        begin: "\\bend\\s+",
        end: "$",
        keywords: "end",
        contains: [C, Z],
        relevance: 0
      }, {
        beginKeywords: "command on",
        end: "$",
        contains: [d, C, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, I.BINARY_NUMBER_MODE, I.C_NUMBER_MODE, Z]
      }, {
        className: "meta",
        variants: [{
          begin: "<\\?(rev|lc|livecode)",
          relevance: 10
        }, {
          begin: "<\\?"
        }, {
          begin: "\\?>"
        }]
      }, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, I.BINARY_NUMBER_MODE, I.C_NUMBER_MODE, Z].concat(G),
      illegal: ";$|^\\[|^=|&|\\{"
    }
  }
  AX2.exports = $09
})
// @from(Start 4420373, End 4425504)
YX2 = Y((gF3, XX2) => {
  var u09 = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"],
    T09 = ["true", "false", "null", "undefined", "NaN", "Infinity"],
    O09 = ["Intl", "DataView", "Number", "Math", "Date", "String", "RegExp", "Object", "Function", "Boolean", "Error", "Symbol", "Set", "Map", "WeakSet", "WeakMap", "Proxy", "Reflect", "JSON", "Promise", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Float32Array", "Array", "Uint8Array", "Uint8ClampedArray", "ArrayBuffer", "BigInt64Array", "BigUint64Array", "BigInt"],
    m09 = ["EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
    l09 = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
    b09 = ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"],
    h09 = [].concat(l09, b09, O09, m09);

  function j09(I) {
    let d = ["npm", "print"],
      G = ["yes", "no", "on", "off", "it", "that", "void"],
      Z = ["then", "unless", "until", "loop", "of", "by", "when", "and", "or", "is", "isnt", "not", "it", "that", "otherwise", "from", "to", "til", "fallthrough", "case", "enum", "native", "list", "map", "__hasProp", "__extends", "__slice", "__bind", "__indexOf"],
      C = {
        keyword: u09.concat(Z),
        literal: T09.concat(G),
        built_in: h09.concat(d)
      },
      W = "[A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*",
      w = I.inherit(I.TITLE_MODE, {
        begin: "[A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*"
      }),
      B = {
        className: "subst",
        begin: /#\{/,
        end: /\}/,
        keywords: C
      },
      A = {
        className: "subst",
        begin: /#[A-Za-z$_]/,
        end: /(?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*/,
        keywords: C
      },
      V = [I.BINARY_NUMBER_MODE, {
        className: "number",
        begin: "(\\b0[xX][a-fA-F0-9_]+)|(\\b\\d(\\d|_\\d)*(\\.(\\d(\\d|_\\d)*)?)?(_*[eE]([-+]\\d(_\\d|\\d)*)?)?[_a-z]*)",
        relevance: 0,
        starts: {
          end: "(\\s*/)?",
          relevance: 0
        }
      }, {
        className: "string",
        variants: [{
          begin: /'''/,
          end: /'''/,
          contains: [I.BACKSLASH_ESCAPE]
        }, {
          begin: /'/,
          end: /'/,
          contains: [I.BACKSLASH_ESCAPE]
        }, {
          begin: /"""/,
          end: /"""/,
          contains: [I.BACKSLASH_ESCAPE, B, A]
        }, {
          begin: /"/,
          end: /"/,
          contains: [I.BACKSLASH_ESCAPE, B, A]
        }, {
          begin: /\\/,
          end: /(\s|$)/,
          excludeEnd: !0
        }]
      }, {
        className: "regexp",
        variants: [{
          begin: "//",
          end: "//[gim]*",
          contains: [B, I.HASH_COMMENT_MODE]
        }, {
          begin: /\/(?![ *])(\\.|[^\\\n])*?\/[gim]*(?=\W)/
        }]
      }, {
        begin: "@[A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*"
      }, {
        begin: "``",
        end: "``",
        excludeBegin: !0,
        excludeEnd: !0,
        subLanguage: "javascript"
      }];
    B.contains = V;
    let X = {
        className: "params",
        begin: "\\(",
        returnBegin: !0,
        contains: [{
          begin: /\(/,
          end: /\)/,
          keywords: C,
          contains: ["self"].concat(V)
        }]
      },
      _ = {
        begin: "(#=>|=>|\\|>>|-?->|!->)"
      };
    return {
      name: "LiveScript",
      aliases: ["ls"],
      keywords: C,
      illegal: /\/\*/,
      contains: V.concat([I.COMMENT("\\/\\*", "\\*\\/"), I.HASH_COMMENT_MODE, _, {
        className: "function",
        contains: [w, X],
        returnBegin: !0,
        variants: [{
          begin: "([A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*\\s*(?:=|:=)\\s*)?(\\(.*\\)\\s*)?\\B->\\*?",
          end: "->\\*?"
        }, {
          begin: "([A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*\\s*(?:=|:=)\\s*)?!?(\\(.*\\)\\s*)?\\B[-~]{1,2}>\\*?",
          end: "[-~]{1,2}>\\*?"
        }, {
          begin: "([A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*\\s*(?:=|:=)\\s*)?(\\(.*\\)\\s*)?\\B!?[-~]{1,2}>\\*?",
          end: "!?[-~]{1,2}>\\*?"
        }]
      }, {
        className: "class",
        beginKeywords: "class",
        end: "$",
        illegal: /[:="\[\]]/,
        contains: [{
          beginKeywords: "extends",
          endsWithParent: !0,
          illegal: /[:="\[\]]/,
          contains: [w]
        }, w]
      }, {
        begin: "[A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*:",
        end: ":",
        returnBegin: !0,
        returnEnd: !0,
        relevance: 0
      }])
    }
  }
  XX2.exports = j09
})
// @from(Start 4425510, End 4428926)
DX2 = Y((JF3, _X2) => {
  function k09(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function ua(...I) {
    return I.map((G) => k09(G)).join("")
  }

  function x09(I) {
    let d = /([-a-zA-Z$._][\w$.-]*)/,
      G = {
        className: "type",
        begin: /\bi\d+(?=\s|\b)/
      },
      Z = {
        className: "operator",
        relevance: 0,
        begin: /=/
      },
      C = {
        className: "punctuation",
        relevance: 0,
        begin: /,/
      },
      W = {
        className: "number",
        variants: [{
          begin: /0[xX][a-fA-F0-9]+/
        }, {
          begin: /-?\d+(?:[.]\d+)?(?:[eE][-+]?\d+(?:[.]\d+)?)?/
        }],
        relevance: 0
      },
      w = {
        className: "symbol",
        variants: [{
          begin: /^\s*[a-z]+:/
        }],
        relevance: 0
      },
      B = {
        className: "variable",
        variants: [{
          begin: ua(/%/, d)
        }, {
          begin: /%\d+/
        }, {
          begin: /#\d+/
        }]
      },
      A = {
        className: "title",
        variants: [{
          begin: ua(/@/, d)
        }, {
          begin: /@\d+/
        }, {
          begin: ua(/!/, d)
        }, {
          begin: ua(/!\d+/, d)
        }, {
          begin: /!\d+/
        }]
      };
    return {
      name: "LLVM IR",
      keywords: "begin end true false declare define global constant private linker_private internal available_externally linkonce linkonce_odr weak weak_odr appending dllimport dllexport common default hidden protected extern_weak external thread_local zeroinitializer undef null to tail target triple datalayout volatile nuw nsw nnan ninf nsz arcp fast exact inbounds align addrspace section alias module asm sideeffect gc dbg linker_private_weak attributes blockaddress initialexec localdynamic localexec prefix unnamed_addr ccc fastcc coldcc x86_stdcallcc x86_fastcallcc arm_apcscc arm_aapcscc arm_aapcs_vfpcc ptx_device ptx_kernel intel_ocl_bicc msp430_intrcc spir_func spir_kernel x86_64_sysvcc x86_64_win64cc x86_thiscallcc cc c signext zeroext inreg sret nounwind noreturn noalias nocapture byval nest readnone readonly inlinehint noinline alwaysinline optsize ssp sspreq noredzone noimplicitfloat naked builtin cold nobuiltin noduplicate nonlazybind optnone returns_twice sanitize_address sanitize_memory sanitize_thread sspstrong uwtable returned type opaque eq ne slt sgt sle sge ult ugt ule uge oeq one olt ogt ole oge ord uno ueq une x acq_rel acquire alignstack atomic catch cleanup filter inteldialect max min monotonic nand personality release seq_cst singlethread umax umin unordered xchg add fadd sub fsub mul fmul udiv sdiv fdiv urem srem frem shl lshr ashr and or xor icmp fcmp phi call trunc zext sext fptrunc fpext uitofp sitofp fptoui fptosi inttoptr ptrtoint bitcast addrspacecast select va_arg ret br switch invoke unwind unreachable indirectbr landingpad resume malloc alloca free load store getelementptr extractelement insertelement shufflevector getresult extractvalue insertvalue atomicrmw cmpxchg fence argmemonly double",
      contains: [G, I.COMMENT(/;\s*$/, null, {
        relevance: 0
      }), I.COMMENT(/;/, /$/), I.QUOTE_STRING_MODE, {
        className: "string",
        variants: [{
          begin: /"/,
          end: /[^\\]"/
        }]
      }, A, C, Z, B, w, W]
    }
  }
  _X2.exports = x09
})
// @from(Start 4428932, End 4441350)
FX2 = Y((KF3, HX2) => {
  function c09(I) {
    var d = {
        className: "subst",
        begin: /\\[tn"\\]/
      },
      G = {
        className: "string",
        begin: '"',
        end: '"',
        contains: [d]
      },
      Z = {
        className: "number",
        relevance: 0,
        begin: I.C_NUMBER_RE
      },
      C = {
        className: "literal",
        variants: [{
          begin: "\\b(PI|TWO_PI|PI_BY_TWO|DEG_TO_RAD|RAD_TO_DEG|SQRT2)\\b"
        }, {
          begin: "\\b(XP_ERROR_(EXPERIENCES_DISABLED|EXPERIENCE_(DISABLED|SUSPENDED)|INVALID_(EXPERIENCE|PARAMETERS)|KEY_NOT_FOUND|MATURITY_EXCEEDED|NONE|NOT_(FOUND|PERMITTED(_LAND)?)|NO_EXPERIENCE|QUOTA_EXCEEDED|RETRY_UPDATE|STORAGE_EXCEPTION|STORE_DISABLED|THROTTLED|UNKNOWN_ERROR)|JSON_APPEND|STATUS_(PHYSICS|ROTATE_[XYZ]|PHANTOM|SANDBOX|BLOCK_GRAB(_OBJECT)?|(DIE|RETURN)_AT_EDGE|CAST_SHADOWS|OK|MALFORMED_PARAMS|TYPE_MISMATCH|BOUNDS_ERROR|NOT_(FOUND|SUPPORTED)|INTERNAL_ERROR|WHITELIST_FAILED)|AGENT(_(BY_(LEGACY_|USER)NAME|FLYING|ATTACHMENTS|SCRIPTED|MOUSELOOK|SITTING|ON_OBJECT|AWAY|WALKING|IN_AIR|TYPING|CROUCHING|BUSY|ALWAYS_RUN|AUTOPILOT|LIST_(PARCEL(_OWNER)?|REGION)))?|CAMERA_(PITCH|DISTANCE|BEHINDNESS_(ANGLE|LAG)|(FOCUS|POSITION)(_(THRESHOLD|LOCKED|LAG))?|FOCUS_OFFSET|ACTIVE)|ANIM_ON|LOOP|REVERSE|PING_PONG|SMOOTH|ROTATE|SCALE|ALL_SIDES|LINK_(ROOT|SET|ALL_(OTHERS|CHILDREN)|THIS)|ACTIVE|PASS(IVE|_(ALWAYS|IF_NOT_HANDLED|NEVER))|SCRIPTED|CONTROL_(FWD|BACK|(ROT_)?(LEFT|RIGHT)|UP|DOWN|(ML_)?LBUTTON)|PERMISSION_(RETURN_OBJECTS|DEBIT|OVERRIDE_ANIMATIONS|SILENT_ESTATE_MANAGEMENT|TAKE_CONTROLS|TRIGGER_ANIMATION|ATTACH|CHANGE_LINKS|(CONTROL|TRACK)_CAMERA|TELEPORT)|INVENTORY_(TEXTURE|SOUND|OBJECT|SCRIPT|LANDMARK|CLOTHING|NOTECARD|BODYPART|ANIMATION|GESTURE|ALL|NONE)|CHANGED_(INVENTORY|COLOR|SHAPE|SCALE|TEXTURE|LINK|ALLOWED_DROP|OWNER|REGION(_START)?|TELEPORT|MEDIA)|OBJECT_(CLICK_ACTION|HOVER_HEIGHT|LAST_OWNER_ID|(PHYSICS|SERVER|STREAMING)_COST|UNKNOWN_DETAIL|CHARACTER_TIME|PHANTOM|PHYSICS|TEMP_(ATTACHED|ON_REZ)|NAME|DESC|POS|PRIM_(COUNT|EQUIVALENCE)|RETURN_(PARCEL(_OWNER)?|REGION)|REZZER_KEY|ROO?T|VELOCITY|OMEGA|OWNER|GROUP(_TAG)?|CREATOR|ATTACHED_(POINT|SLOTS_AVAILABLE)|RENDER_WEIGHT|(BODY_SHAPE|PATHFINDING)_TYPE|(RUNNING|TOTAL)_SCRIPT_COUNT|TOTAL_INVENTORY_COUNT|SCRIPT_(MEMORY|TIME))|TYPE_(INTEGER|FLOAT|STRING|KEY|VECTOR|ROTATION|INVALID)|(DEBUG|PUBLIC)_CHANNEL|ATTACH_(AVATAR_CENTER|CHEST|HEAD|BACK|PELVIS|MOUTH|CHIN|NECK|NOSE|BELLY|[LR](SHOULDER|HAND|FOOT|EAR|EYE|[UL](ARM|LEG)|HIP)|(LEFT|RIGHT)_PEC|HUD_(CENTER_[12]|TOP_(RIGHT|CENTER|LEFT)|BOTTOM(_(RIGHT|LEFT))?)|[LR]HAND_RING1|TAIL_(BASE|TIP)|[LR]WING|FACE_(JAW|[LR]EAR|[LR]EYE|TOUNGE)|GROIN|HIND_[LR]FOOT)|LAND_(LEVEL|RAISE|LOWER|SMOOTH|NOISE|REVERT)|DATA_(ONLINE|NAME|BORN|SIM_(POS|STATUS|RATING)|PAYINFO)|PAYMENT_INFO_(ON_FILE|USED)|REMOTE_DATA_(CHANNEL|REQUEST|REPLY)|PSYS_(PART_(BF_(ZERO|ONE(_MINUS_(DEST_COLOR|SOURCE_(ALPHA|COLOR)))?|DEST_COLOR|SOURCE_(ALPHA|COLOR))|BLEND_FUNC_(DEST|SOURCE)|FLAGS|(START|END)_(COLOR|ALPHA|SCALE|GLOW)|MAX_AGE|(RIBBON|WIND|INTERP_(COLOR|SCALE)|BOUNCE|FOLLOW_(SRC|VELOCITY)|TARGET_(POS|LINEAR)|EMISSIVE)_MASK)|SRC_(MAX_AGE|PATTERN|ANGLE_(BEGIN|END)|BURST_(RATE|PART_COUNT|RADIUS|SPEED_(MIN|MAX))|ACCEL|TEXTURE|TARGET_KEY|OMEGA|PATTERN_(DROP|EXPLODE|ANGLE(_CONE(_EMPTY)?)?)))|VEHICLE_(REFERENCE_FRAME|TYPE_(NONE|SLED|CAR|BOAT|AIRPLANE|BALLOON)|(LINEAR|ANGULAR)_(FRICTION_TIMESCALE|MOTOR_DIRECTION)|LINEAR_MOTOR_OFFSET|HOVER_(HEIGHT|EFFICIENCY|TIMESCALE)|BUOYANCY|(LINEAR|ANGULAR)_(DEFLECTION_(EFFICIENCY|TIMESCALE)|MOTOR_(DECAY_)?TIMESCALE)|VERTICAL_ATTRACTION_(EFFICIENCY|TIMESCALE)|BANKING_(EFFICIENCY|MIX|TIMESCALE)|FLAG_(NO_DEFLECTION_UP|LIMIT_(ROLL_ONLY|MOTOR_UP)|HOVER_((WATER|TERRAIN|UP)_ONLY|GLOBAL_HEIGHT)|MOUSELOOK_(STEER|BANK)|CAMERA_DECOUPLED))|PRIM_(ALLOW_UNSIT|ALPHA_MODE(_(BLEND|EMISSIVE|MASK|NONE))?|NORMAL|SPECULAR|TYPE(_(BOX|CYLINDER|PRISM|SPHERE|TORUS|TUBE|RING|SCULPT))?|HOLE_(DEFAULT|CIRCLE|SQUARE|TRIANGLE)|MATERIAL(_(STONE|METAL|GLASS|WOOD|FLESH|PLASTIC|RUBBER))?|SHINY_(NONE|LOW|MEDIUM|HIGH)|BUMP_(NONE|BRIGHT|DARK|WOOD|BARK|BRICKS|CHECKER|CONCRETE|TILE|STONE|DISKS|GRAVEL|BLOBS|SIDING|LARGETILE|STUCCO|SUCTION|WEAVE)|TEXGEN_(DEFAULT|PLANAR)|SCRIPTED_SIT_ONLY|SCULPT_(TYPE_(SPHERE|TORUS|PLANE|CYLINDER|MASK)|FLAG_(MIRROR|INVERT))|PHYSICS(_(SHAPE_(CONVEX|NONE|PRIM|TYPE)))?|(POS|ROT)_LOCAL|SLICE|TEXT|FLEXIBLE|POINT_LIGHT|TEMP_ON_REZ|PHANTOM|POSITION|SIT_TARGET|SIZE|ROTATION|TEXTURE|NAME|OMEGA|DESC|LINK_TARGET|COLOR|BUMP_SHINY|FULLBRIGHT|TEXGEN|GLOW|MEDIA_(ALT_IMAGE_ENABLE|CONTROLS|(CURRENT|HOME)_URL|AUTO_(LOOP|PLAY|SCALE|ZOOM)|FIRST_CLICK_INTERACT|(WIDTH|HEIGHT)_PIXELS|WHITELIST(_ENABLE)?|PERMS_(INTERACT|CONTROL)|PARAM_MAX|CONTROLS_(STANDARD|MINI)|PERM_(NONE|OWNER|GROUP|ANYONE)|MAX_(URL_LENGTH|WHITELIST_(SIZE|COUNT)|(WIDTH|HEIGHT)_PIXELS)))|MASK_(BASE|OWNER|GROUP|EVERYONE|NEXT)|PERM_(TRANSFER|MODIFY|COPY|MOVE|ALL)|PARCEL_(MEDIA_COMMAND_(STOP|PAUSE|PLAY|LOOP|TEXTURE|URL|TIME|AGENT|UNLOAD|AUTO_ALIGN|TYPE|SIZE|DESC|LOOP_SET)|FLAG_(ALLOW_(FLY|(GROUP_)?SCRIPTS|LANDMARK|TERRAFORM|DAMAGE|CREATE_(GROUP_)?OBJECTS)|USE_(ACCESS_(GROUP|LIST)|BAN_LIST|LAND_PASS_LIST)|LOCAL_SOUND_ONLY|RESTRICT_PUSHOBJECT|ALLOW_(GROUP|ALL)_OBJECT_ENTRY)|COUNT_(TOTAL|OWNER|GROUP|OTHER|SELECTED|TEMP)|DETAILS_(NAME|DESC|OWNER|GROUP|AREA|ID|SEE_AVATARS))|LIST_STAT_(MAX|MIN|MEAN|MEDIAN|STD_DEV|SUM(_SQUARES)?|NUM_COUNT|GEOMETRIC_MEAN|RANGE)|PAY_(HIDE|DEFAULT)|REGION_FLAG_(ALLOW_DAMAGE|FIXED_SUN|BLOCK_TERRAFORM|SANDBOX|DISABLE_(COLLISIONS|PHYSICS)|BLOCK_FLY|ALLOW_DIRECT_TELEPORT|RESTRICT_PUSHOBJECT)|HTTP_(METHOD|MIMETYPE|BODY_(MAXLENGTH|TRUNCATED)|CUSTOM_HEADER|PRAGMA_NO_CACHE|VERBOSE_THROTTLE|VERIFY_CERT)|SIT_(INVALID_(AGENT|LINK_OBJECT)|NO(T_EXPERIENCE|_(ACCESS|EXPERIENCE_PERMISSION|SIT_TARGET)))|STRING_(TRIM(_(HEAD|TAIL))?)|CLICK_ACTION_(NONE|TOUCH|SIT|BUY|PAY|OPEN(_MEDIA)?|PLAY|ZOOM)|TOUCH_INVALID_FACE|PROFILE_(NONE|SCRIPT_MEMORY)|RC_(DATA_FLAGS|DETECT_PHANTOM|GET_(LINK_NUM|NORMAL|ROOT_KEY)|MAX_HITS|REJECT_(TYPES|AGENTS|(NON)?PHYSICAL|LAND))|RCERR_(CAST_TIME_EXCEEDED|SIM_PERF_LOW|UNKNOWN)|ESTATE_ACCESS_(ALLOWED_(AGENT|GROUP)_(ADD|REMOVE)|BANNED_AGENT_(ADD|REMOVE))|DENSITY|FRICTION|RESTITUTION|GRAVITY_MULTIPLIER|KFM_(COMMAND|CMD_(PLAY|STOP|PAUSE)|MODE|FORWARD|LOOP|PING_PONG|REVERSE|DATA|ROTATION|TRANSLATION)|ERR_(GENERIC|PARCEL_PERMISSIONS|MALFORMED_PARAMS|RUNTIME_PERMISSIONS|THROTTLED)|CHARACTER_(CMD_((SMOOTH_)?STOP|JUMP)|DESIRED_(TURN_)?SPEED|RADIUS|STAY_WITHIN_PARCEL|LENGTH|ORIENTATION|ACCOUNT_FOR_SKIPPED_FRAMES|AVOIDANCE_MODE|TYPE(_([ABCD]|NONE))?|MAX_(DECEL|TURN_RADIUS|(ACCEL|SPEED)))|PURSUIT_(OFFSET|FUZZ_FACTOR|GOAL_TOLERANCE|INTERCEPT)|REQUIRE_LINE_OF_SIGHT|FORCE_DIRECT_PATH|VERTICAL|HORIZONTAL|AVOID_(CHARACTERS|DYNAMIC_OBSTACLES|NONE)|PU_(EVADE_(HIDDEN|SPOTTED)|FAILURE_(DYNAMIC_PATHFINDING_DISABLED|INVALID_(GOAL|START)|NO_(NAVMESH|VALID_DESTINATION)|OTHER|TARGET_GONE|(PARCEL_)?UNREACHABLE)|(GOAL|SLOWDOWN_DISTANCE)_REACHED)|TRAVERSAL_TYPE(_(FAST|NONE|SLOW))?|CONTENT_TYPE_(ATOM|FORM|HTML|JSON|LLSD|RSS|TEXT|XHTML|XML)|GCNP_(RADIUS|STATIC)|(PATROL|WANDER)_PAUSE_AT_WAYPOINTS|OPT_(AVATAR|CHARACTER|EXCLUSION_VOLUME|LEGACY_LINKSET|MATERIAL_VOLUME|OTHER|STATIC_OBSTACLE|WALKABLE)|SIM_STAT_PCT_CHARS_STEPPED)\\b"
        }, {
          begin: "\\b(FALSE|TRUE)\\b"
        }, {
          begin: "\\b(ZERO_ROTATION)\\b"
        }, {
          begin: "\\b(EOF|JSON_(ARRAY|DELETE|FALSE|INVALID|NULL|NUMBER|OBJECT|STRING|TRUE)|NULL_KEY|TEXTURE_(BLANK|DEFAULT|MEDIA|PLYWOOD|TRANSPARENT)|URL_REQUEST_(GRANTED|DENIED))\\b"
        }, {
          begin: "\\b(ZERO_VECTOR|TOUCH_INVALID_(TEXCOORD|VECTOR))\\b"
        }]
      },
      W = {
        className: "built_in",
        begin: "\\b(ll(AgentInExperience|(Create|DataSize|Delete|KeyCount|Keys|Read|Update)KeyValue|GetExperience(Details|ErrorMessage)|ReturnObjectsBy(ID|Owner)|Json(2List|[GS]etValue|ValueType)|Sin|Cos|Tan|Atan2|Sqrt|Pow|Abs|Fabs|Frand|Floor|Ceil|Round|Vec(Mag|Norm|Dist)|Rot(Between|2(Euler|Fwd|Left|Up))|(Euler|Axes)2Rot|Whisper|(Region|Owner)?Say|Shout|Listen(Control|Remove)?|Sensor(Repeat|Remove)?|Detected(Name|Key|Owner|Type|Pos|Vel|Grab|Rot|Group|LinkNumber)|Die|Ground|Wind|([GS]et)(AnimationOverride|MemoryLimit|PrimMediaParams|ParcelMusicURL|Object(Desc|Name)|PhysicsMaterial|Status|Scale|Color|Alpha|Texture|Pos|Rot|Force|Torque)|ResetAnimationOverride|(Scale|Offset|Rotate)Texture|(Rot)?Target(Remove)?|(Stop)?MoveToTarget|Apply(Rotational)?Impulse|Set(KeyframedMotion|ContentType|RegionPos|(Angular)?Velocity|Buoyancy|HoverHeight|ForceAndTorque|TimerEvent|ScriptState|Damage|TextureAnim|Sound(Queueing|Radius)|Vehicle(Type|(Float|Vector|Rotation)Param)|(Touch|Sit)?Text|Camera(Eye|At)Offset|PrimitiveParams|ClickAction|Link(Alpha|Color|PrimitiveParams(Fast)?|Texture(Anim)?|Camera|Media)|RemoteScriptAccessPin|PayPrice|LocalRot)|ScaleByFactor|Get((Max|Min)ScaleFactor|ClosestNavPoint|StaticPath|SimStats|Env|PrimitiveParams|Link(PrimitiveParams|Number(OfSides)?|Key|Name|Media)|HTTPHeader|FreeURLs|Object(Details|PermMask|PrimCount)|Parcel(MaxPrims|Details|Prim(Count|Owners))|Attached(List)?|(SPMax|Free|Used)Memory|Region(Name|TimeDilation|FPS|Corner|AgentCount)|Root(Position|Rotation)|UnixTime|(Parcel|Region)Flags|(Wall|GMT)clock|SimulatorHostname|BoundingBox|GeometricCenter|Creator|NumberOf(Prims|NotecardLines|Sides)|Animation(List)?|(Camera|Local)(Pos|Rot)|Vel|Accel|Omega|Time(stamp|OfDay)|(Object|CenterOf)?Mass|MassMKS|Energy|Owner|(Owner)?Key|SunDirection|Texture(Offset|Scale|Rot)|Inventory(Number|Name|Key|Type|Creator|PermMask)|Permissions(Key)?|StartParameter|List(Length|EntryType)|Date|Agent(Size|Info|Language|List)|LandOwnerAt|NotecardLine|Script(Name|State))|(Get|Reset|GetAndReset)Time|PlaySound(Slave)?|LoopSound(Master|Slave)?|(Trigger|Stop|Preload)Sound|((Get|Delete)Sub|Insert)String|To(Upper|Lower)|Give(InventoryList|Money)|RezObject|(Stop)?LookAt|Sleep|CollisionFilter|(Take|Release)Controls|DetachFromAvatar|AttachToAvatar(Temp)?|InstantMessage|(GetNext)?Email|StopHover|MinEventDelay|RotLookAt|String(Length|Trim)|(Start|Stop)Animation|TargetOmega|Request(Experience)?Permissions|(Create|Break)Link|BreakAllLinks|(Give|Remove)Inventory|Water|PassTouches|Request(Agent|Inventory)Data|TeleportAgent(Home|GlobalCoords)?|ModifyLand|CollisionSound|ResetScript|MessageLinked|PushObject|PassCollisions|AxisAngle2Rot|Rot2(Axis|Angle)|A(cos|sin)|AngleBetween|AllowInventoryDrop|SubStringIndex|List2(CSV|Integer|Json|Float|String|Key|Vector|Rot|List(Strided)?)|DeleteSubList|List(Statistics|Sort|Randomize|(Insert|Find|Replace)List)|EdgeOfWorld|AdjustSoundVolume|Key2Name|TriggerSoundLimited|EjectFromLand|(CSV|ParseString)2List|OverMyLand|SameGroup|UnSit|Ground(Slope|Normal|Contour)|GroundRepel|(Set|Remove)VehicleFlags|SitOnLink|(AvatarOn)?(Link)?SitTarget|Script(Danger|Profiler)|Dialog|VolumeDetect|ResetOtherScript|RemoteLoadScriptPin|(Open|Close)RemoteDataChannel|SendRemoteData|RemoteDataReply|(Integer|String)ToBase64|XorBase64|Log(10)?|Base64To(String|Integer)|ParseStringKeepNulls|RezAtRoot|RequestSimulatorData|ForceMouselook|(Load|Release|(E|Une)scape)URL|ParcelMedia(CommandList|Query)|ModPow|MapDestination|(RemoveFrom|AddTo|Reset)Land(Pass|Ban)List|(Set|Clear)CameraParams|HTTP(Request|Response)|TextBox|DetectedTouch(UV|Face|Pos|(N|Bin)ormal|ST)|(MD5|SHA1|DumpList2)String|Request(Secure)?URL|Clear(Prim|Link)Media|(Link)?ParticleSystem|(Get|Request)(Username|DisplayName)|RegionSayTo|CastRay|GenerateKey|TransferLindenDollars|ManageEstateAccess|(Create|Delete)Character|ExecCharacterCmd|Evade|FleeFrom|NavigateTo|PatrolPoints|Pursue|UpdateCharacter|WanderWithin))\\b"
      };
    return {
      name: "LSL (Linden Scripting Language)",
      illegal: ":",
      contains: [G, {
        className: "comment",
        variants: [I.COMMENT("//", "$"), I.COMMENT("/\\*", "\\*/")],
        relevance: 0
      }, Z, {
        className: "section",
        variants: [{
          begin: "\\b(state|default)\\b"
        }, {
          begin: "\\b(state_(entry|exit)|touch(_(start|end))?|(land_)?collision(_(start|end))?|timer|listen|(no_)?sensor|control|(not_)?at_(rot_)?target|money|email|experience_permissions(_denied)?|run_time_permissions|changed|attach|dataserver|moving_(start|end)|link_message|(on|object)_rez|remote_data|http_re(sponse|quest)|path_update|transaction_result)\\b"
        }]
      }, W, C, {
        className: "type",
        begin: "\\b(integer|float|string|key|vector|quaternion|rotation|list)\\b"
      }]
    }
  }
  HX2.exports = c09
})
// @from(Start 4441356, End 4443619)
JX2 = Y((NF3, gX2) => {
  function p09(I) {
    let Z = {
        begin: "\\[=*\\[",
        end: "\\]=*\\]",
        contains: ["self"]
      },
      C = [I.COMMENT("--(?!\\[=*\\[)", "$"), I.COMMENT("--\\[=*\\[", "\\]=*\\]", {
        contains: [Z],
        relevance: 10
      })];
    return {
      name: "Lua",
      keywords: {
        $pattern: I.UNDERSCORE_IDENT_RE,
        literal: "true false nil",
        keyword: "and break do else elseif end for goto if in local not or repeat return then until while",
        built_in: "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"
      },
      contains: C.concat([{
        className: "function",
        beginKeywords: "function",
        end: "\\)",
        contains: [I.inherit(I.TITLE_MODE, {
          begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"
        }), {
          className: "params",
          begin: "\\(",
          endsWithParent: !0,
          contains: C
        }].concat(C)
      }, I.C_NUMBER_MODE, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, {
        className: "string",
        begin: "\\[=*\\[",
        end: "\\]=*\\]",
        contains: [Z],
        relevance: 5
      }])
    }
  }
  gX2.exports = p09
})
// @from(Start 4443625, End 4445199)
NX2 = Y((zF3, KX2) => {
  function i09(I) {
    let d = {
        className: "variable",
        variants: [{
          begin: "\\$\\(" + I.UNDERSCORE_IDENT_RE + "\\)",
          contains: [I.BACKSLASH_ESCAPE]
        }, {
          begin: /\$[@%<?\^\+\*]/
        }]
      },
      G = {
        className: "string",
        begin: /"/,
        end: /"/,
        contains: [I.BACKSLASH_ESCAPE, d]
      },
      Z = {
        className: "variable",
        begin: /\$\([\w-]+\s/,
        end: /\)/,
        keywords: {
          built_in: "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"
        },
        contains: [d]
      },
      C = {
        begin: "^" + I.UNDERSCORE_IDENT_RE + "\\s*(?=[:+?]?=)"
      },
      W = {
        className: "meta",
        begin: /^\.PHONY:/,
        end: /$/,
        keywords: {
          $pattern: /[\.\w]+/,
          "meta-keyword": ".PHONY"
        }
      },
      w = {
        className: "section",
        begin: /^[^\s]+:/,
        end: /$/,
        contains: [d]
      };
    return {
      name: "Makefile",
      aliases: ["mk", "mak", "make"],
      keywords: {
        $pattern: /[\w-]+/,
        keyword: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"
      },
      contains: [I.HASH_COMMENT_MODE, d, G, Z, C, W, w]
    }
  }
  KX2.exports = i09
})
// @from(Start 4445205, End 4565659)
RX2 = Y((QF3, qX2) => {
  var n09 = ["AASTriangle", "AbelianGroup", "Abort", "AbortKernels", "AbortProtect", "AbortScheduledTask", "Above", "Abs", "AbsArg", "AbsArgPlot", "Absolute", "AbsoluteCorrelation", "AbsoluteCorrelationFunction", "AbsoluteCurrentValue", "AbsoluteDashing", "AbsoluteFileName", "AbsoluteOptions", "AbsolutePointSize", "AbsoluteThickness", "AbsoluteTime", "AbsoluteTiming", "AcceptanceThreshold", "AccountingForm", "Accumulate", "Accuracy", "AccuracyGoal", "ActionDelay", "ActionMenu", "ActionMenuBox", "ActionMenuBoxOptions", "Activate", "Active", "ActiveClassification", "ActiveClassificationObject", "ActiveItem", "ActivePrediction", "ActivePredictionObject", "ActiveStyle", "AcyclicGraphQ", "AddOnHelpPath", "AddSides", "AddTo", "AddToSearchIndex", "AddUsers", "AdjacencyGraph", "AdjacencyList", "AdjacencyMatrix", "AdjacentMeshCells", "AdjustmentBox", "AdjustmentBoxOptions", "AdjustTimeSeriesForecast", "AdministrativeDivisionData", "AffineHalfSpace", "AffineSpace", "AffineStateSpaceModel", "AffineTransform", "After", "AggregatedEntityClass", "AggregationLayer", "AircraftData", "AirportData", "AirPressureData", "AirTemperatureData", "AiryAi", "AiryAiPrime", "AiryAiZero", "AiryBi", "AiryBiPrime", "AiryBiZero", "AlgebraicIntegerQ", "AlgebraicNumber", "AlgebraicNumberDenominator", "AlgebraicNumberNorm", "AlgebraicNumberPolynomial", "AlgebraicNumberTrace", "AlgebraicRules", "AlgebraicRulesData", "Algebraics", "AlgebraicUnitQ", "Alignment", "AlignmentMarker", "AlignmentPoint", "All", "AllowAdultContent", "AllowedCloudExtraParameters", "AllowedCloudParameterExtensions", "AllowedDimensions", "AllowedFrequencyRange", "AllowedHeads", "AllowGroupClose", "AllowIncomplete", "AllowInlineCells", "AllowKernelInitialization", "AllowLooseGrammar", "AllowReverseGroupClose", "AllowScriptLevelChange", "AllowVersionUpdate", "AllTrue", "Alphabet", "AlphabeticOrder", "AlphabeticSort", "AlphaChannel", "AlternateImage", "AlternatingFactorial", "AlternatingGroup", "AlternativeHypothesis", "Alternatives", "AltitudeMethod", "AmbientLight", "AmbiguityFunction", "AmbiguityList", "Analytic", "AnatomyData", "AnatomyForm", "AnatomyPlot3D", "AnatomySkinStyle", "AnatomyStyling", "AnchoredSearch", "And", "AndersonDarlingTest", "AngerJ", "AngleBisector", "AngleBracket", "AnglePath", "AnglePath3D", "AngleVector", "AngularGauge", "Animate", "AnimationCycleOffset", "AnimationCycleRepetitions", "AnimationDirection", "AnimationDisplayTime", "AnimationRate", "AnimationRepetitions", "AnimationRunning", "AnimationRunTime", "AnimationTimeIndex", "Animator", "AnimatorBox", "AnimatorBoxOptions", "AnimatorElements", "Annotate", "Annotation", "AnnotationDelete", "AnnotationKeys", "AnnotationRules", "AnnotationValue", "Annuity", "AnnuityDue", "Annulus", "AnomalyDetection", "AnomalyDetector", "AnomalyDetectorFunction", "Anonymous", "Antialiasing", "AntihermitianMatrixQ", "Antisymmetric", "AntisymmetricMatrixQ", "Antonyms", "AnyOrder", "AnySubset", "AnyTrue", "Apart", "ApartSquareFree", "APIFunction", "Appearance", "AppearanceElements", "AppearanceRules", "AppellF1", "Append", "AppendCheck", "AppendLayer", "AppendTo", "Apply", "ApplySides", "ArcCos", "ArcCosh", "ArcCot", "ArcCoth", "ArcCsc", "ArcCsch", "ArcCurvature", "ARCHProcess", "ArcLength", "ArcSec", "ArcSech", "ArcSin", "ArcSinDistribution", "ArcSinh", "ArcTan", "ArcTanh", "Area", "Arg", "ArgMax", "ArgMin", "ArgumentCountQ", "ARIMAProcess", "ArithmeticGeometricMean", "ARMAProcess", "Around", "AroundReplace", "ARProcess", "Array", "ArrayComponents", "ArrayDepth", "ArrayFilter", "ArrayFlatten", "ArrayMesh", "ArrayPad", "ArrayPlot", "ArrayQ", "ArrayResample", "ArrayReshape", "ArrayRules", "Arrays", "Arrow", "Arrow3DBox", "ArrowBox", "Arrowheads", "ASATriangle", "Ask", "AskAppend", "AskConfirm", "AskDisplay", "AskedQ", "AskedValue", "AskFunction", "AskState", "AskTemplateDisplay", "AspectRatio", "AspectRatioFixed", "Assert", "AssociateTo", "Association", "AssociationFormat", "AssociationMap", "AssociationQ", "AssociationThread", "AssumeDeterministic", "Assuming", "Assumptions", "AstronomicalData", "Asymptotic", "AsymptoticDSolveValue", "AsymptoticEqual", "AsymptoticEquivalent", "AsymptoticGreater", "AsymptoticGreaterEqual", "AsymptoticIntegrate", "AsymptoticLess", "AsymptoticLessEqual", "AsymptoticOutputTracker", "AsymptoticProduct", "AsymptoticRSolveValue", "AsymptoticSolve", "AsymptoticSum", "Asynchronous", "AsynchronousTaskObject", "AsynchronousTasks", "Atom", "AtomCoordinates", "AtomCount", "AtomDiagramCoordinates", "AtomList", "AtomQ", "AttentionLayer", "Attributes", "Audio", "AudioAmplify", "AudioAnnotate", "AudioAnnotationLookup", "AudioBlockMap", "AudioCapture", "AudioChannelAssignment", "AudioChannelCombine", "AudioChannelMix", "AudioChannels", "AudioChannelSeparate", "AudioData", "AudioDelay", "AudioDelete", "AudioDevice", "AudioDistance", "AudioEncoding", "AudioFade", "AudioFrequencyShift", "AudioGenerator", "AudioIdentify", "AudioInputDevice", "AudioInsert", "AudioInstanceQ", "AudioIntervals", "AudioJoin", "AudioLabel", "AudioLength", "AudioLocalMeasurements", "AudioLooping", "AudioLoudness", "AudioMeasurements", "AudioNormalize", "AudioOutputDevice", "AudioOverlay", "AudioPad", "AudioPan", "AudioPartition", "AudioPause", "AudioPitchShift", "AudioPlay", "AudioPlot", "AudioQ", "AudioRecord", "AudioReplace", "AudioResample", "AudioReverb", "AudioReverse", "AudioSampleRate", "AudioSpectralMap", "AudioSpectralTransformation", "AudioSplit", "AudioStop", "AudioStream", "AudioStreams", "AudioTimeStretch", "AudioTracks", "AudioTrim", "AudioType", "AugmentedPolyhedron", "AugmentedSymmetricPolynomial", "Authenticate", "Authentication", "AuthenticationDialog", "AutoAction", "Autocomplete", "AutocompletionFunction", "AutoCopy", "AutocorrelationTest", "AutoDelete", "AutoEvaluateEvents", "AutoGeneratedPackage", "AutoIndent", "AutoIndentSpacings", "AutoItalicWords", "AutoloadPath", "AutoMatch", "Automatic", "AutomaticImageSize", "AutoMultiplicationSymbol", "AutoNumberFormatting", "AutoOpenNotebooks", "AutoOpenPalettes", "AutoQuoteCharacters", "AutoRefreshed", "AutoRemove", "AutorunSequencing", "AutoScaling", "AutoScroll", "AutoSpacing", "AutoStyleOptions", "AutoStyleWords", "AutoSubmitting", "Axes", "AxesEdge", "AxesLabel", "AxesOrigin", "AxesStyle", "AxiomaticTheory", "Axis", "BabyMonsterGroupB", "Back", "Background", "BackgroundAppearance", "BackgroundTasksSettings", "Backslash", "Backsubstitution", "Backward", "Ball", "Band", "BandpassFilter", "BandstopFilter", "BarabasiAlbertGraphDistribution", "BarChart", "BarChart3D", "BarcodeImage", "BarcodeRecognize", "BaringhausHenzeTest", "BarLegend", "BarlowProschanImportance", "BarnesG", "BarOrigin", "BarSpacing", "BartlettHannWindow", "BartlettWindow", "BaseDecode", "BaseEncode", "BaseForm", "Baseline", "BaselinePosition", "BaseStyle", "BasicRecurrentLayer", "BatchNormalizationLayer", "BatchSize", "BatesDistribution", "BattleLemarieWavelet", "BayesianMaximization", "BayesianMaximizationObject", "BayesianMinimization", "BayesianMinimizationObject", "Because", "BeckmannDistribution", "Beep", "Before", "Begin", "BeginDialogPacket", "BeginFrontEndInteractionPacket", "BeginPackage", "BellB", "BellY", "Below", "BenfordDistribution", "BeniniDistribution", "BenktanderGibratDistribution", "BenktanderWeibullDistribution", "BernoulliB", "BernoulliDistribution", "BernoulliGraphDistribution", "BernoulliProcess", "BernsteinBasis", "BesselFilterModel", "BesselI", "BesselJ", "BesselJZero", "BesselK", "BesselY", "BesselYZero", "Beta", "BetaBinomialDistribution", "BetaDistribution", "BetaNegativeBinomialDistribution", "BetaPrimeDistribution", "BetaRegularized", "Between", "BetweennessCentrality", "BeveledPolyhedron", "BezierCurve", "BezierCurve3DBox", "BezierCurve3DBoxOptions", "BezierCurveBox", "BezierCurveBoxOptions", "BezierFunction", "BilateralFilter", "Binarize", "BinaryDeserialize", "BinaryDistance", "BinaryFormat", "BinaryImageQ", "BinaryRead", "BinaryReadList", "BinarySerialize", "BinaryWrite", "BinCounts", "BinLists", "Binomial", "BinomialDistribution", "BinomialProcess", "BinormalDistribution", "BiorthogonalSplineWavelet", "BipartiteGraphQ", "BiquadraticFilterModel", "BirnbaumImportance", "BirnbaumSaundersDistribution", "BitAnd", "BitClear", "BitGet", "BitLength", "BitNot", "BitOr", "BitSet", "BitShiftLeft", "BitShiftRight", "BitXor", "BiweightLocation", "BiweightMidvariance", "Black", "BlackmanHarrisWindow", "BlackmanNuttallWindow", "BlackmanWindow", "Blank", "BlankForm", "BlankNullSequence", "BlankSequence", "Blend", "Block", "BlockchainAddressData", "BlockchainBase", "BlockchainBlockData", "BlockchainContractValue", "BlockchainData", "BlockchainGet", "BlockchainKeyEncode", "BlockchainPut", "BlockchainTokenData", "BlockchainTransaction", "BlockchainTransactionData", "BlockchainTransactionSign", "BlockchainTransactionSubmit", "BlockMap", "BlockRandom", "BlomqvistBeta", "BlomqvistBetaTest", "Blue", "Blur", "BodePlot", "BohmanWindow", "Bold", "Bond", "BondCount", "BondList", "BondQ", "Bookmarks", "Boole", "BooleanConsecutiveFunction", "BooleanConvert", "BooleanCountingFunction", "BooleanFunction", "BooleanGraph", "BooleanMaxterms", "BooleanMinimize", "BooleanMinterms", "BooleanQ", "BooleanRegion", "Booleans", "BooleanStrings", "BooleanTable", "BooleanVariables", "BorderDimensions", "BorelTannerDistribution", "Bottom", "BottomHatTransform", "BoundaryDiscretizeGraphics", "BoundaryDiscretizeRegion", "BoundaryMesh", "BoundaryMeshRegion", "BoundaryMeshRegionQ", "BoundaryStyle", "BoundedRegionQ", "BoundingRegion", "Bounds", "Box", "BoxBaselineShift", "BoxData", "BoxDimensions", "Boxed", "Boxes", "BoxForm", "BoxFormFormatTypes", "BoxFrame", "BoxID", "BoxMargins", "BoxMatrix", "BoxObject", "BoxRatios", "BoxRotation", "BoxRotationPoint", "BoxStyle", "BoxWhiskerChart", "Bra", "BracketingBar", "BraKet", "BrayCurtisDistance", "BreadthFirstScan", "Break", "BridgeData", "BrightnessEqualize", "BroadcastStationData", "Brown", "BrownForsytheTest", "BrownianBridgeProcess", "BrowserCategory", "BSplineBasis", "BSplineCurve", "BSplineCurve3DBox", "BSplineCurve3DBoxOptions", "BSplineCurveBox", "BSplineCurveBoxOptions", "BSplineFunction", "BSplineSurface", "BSplineSurface3DBox", "BSplineSurface3DBoxOptions", "BubbleChart", "BubbleChart3D", "BubbleScale", "BubbleSizes", "BuildingData", "BulletGauge", "BusinessDayQ", "ButterflyGraph", "ButterworthFilterModel", "Button", "ButtonBar", "ButtonBox", "ButtonBoxOptions", "ButtonCell", "ButtonContents", "ButtonData", "ButtonEvaluator", "ButtonExpandable", "ButtonFrame", "ButtonFunction", "ButtonMargins", "ButtonMinHeight", "ButtonNote", "ButtonNotebook", "ButtonSource", "ButtonStyle", "ButtonStyleMenuListing", "Byte", "ByteArray", "ByteArrayFormat", "ByteArrayQ", "ByteArrayToString", "ByteCount", "ByteOrdering", "C", "CachedValue", "CacheGraphics", "CachePersistence", "CalendarConvert", "CalendarData", "CalendarType", "Callout", "CalloutMarker", "CalloutStyle", "CallPacket", "CanberraDistance", "Cancel", "CancelButton", "CandlestickChart", "CanonicalGraph", "CanonicalizePolygon", "CanonicalizePolyhedron", "CanonicalName", "CanonicalWarpingCorrespondence", "CanonicalWarpingDistance", "CantorMesh", "CantorStaircase", "Cap", "CapForm", "CapitalDifferentialD", "Capitalize", "CapsuleShape", "CaptureRunning", "CardinalBSplineBasis", "CarlemanLinearize", "CarmichaelLambda", "CaseOrdering", "Cases", "CaseSensitive", "Cashflow", "Casoratian", "Catalan", "CatalanNumber", "Catch", "CategoricalDistribution", "Catenate", "CatenateLayer", "CauchyDistribution", "CauchyWindow", "CayleyGraph", "CDF", "CDFDeploy", "CDFInformation", "CDFWavelet", "Ceiling", "CelestialSystem", "Cell", "CellAutoOverwrite", "CellBaseline", "CellBoundingBox", "CellBracketOptions", "CellChangeTimes", "CellContents", "CellContext", "CellDingbat", "CellDynamicExpression", "CellEditDuplicate", "CellElementsBoundingBox", "CellElementSpacings", "CellEpilog", "CellEvaluationDuplicate", "CellEvaluationFunction", "CellEvaluationLanguage", "CellEventActions", "CellFrame", "CellFrameColor", "CellFrameLabelMargins", "CellFrameLabels", "CellFrameMargins", "CellGroup", "CellGroupData", "CellGrouping", "CellGroupingRules", "CellHorizontalScrolling", "CellID", "CellLabel", "CellLabelAutoDelete", "CellLabelMargins", "CellLabelPositioning", "CellLabelStyle", "CellLabelTemplate", "CellMargins", "CellObject", "CellOpen", "CellPrint", "CellProlog", "Cells", "CellSize", "CellStyle", "CellTags", "CellularAutomaton", "CensoredDistribution", "Censoring", "Center", "CenterArray", "CenterDot", "CentralFeature", "CentralMoment", "CentralMomentGeneratingFunction", "Cepstrogram", "CepstrogramArray", "CepstrumArray", "CForm", "ChampernowneNumber", "ChangeOptions", "ChannelBase", "ChannelBrokerAction", "ChannelDatabin", "ChannelHistoryLength", "ChannelListen", "ChannelListener", "ChannelListeners", "ChannelListenerWait", "ChannelObject", "ChannelPreSendFunction", "ChannelReceiverFunction", "ChannelSend", "ChannelSubscribers", "ChanVeseBinarize", "Character", "CharacterCounts", "CharacterEncoding", "CharacterEncodingsPath", "CharacteristicFunction", "CharacteristicPolynomial", "CharacterName", "CharacterNormalize", "CharacterRange", "Characters", "ChartBaseStyle", "ChartElementData", "ChartElementDataFunction", "ChartElementFunction", "ChartElements", "ChartLabels", "ChartLayout", "ChartLegends", "ChartStyle", "Chebyshev1FilterModel", "Chebyshev2FilterModel", "ChebyshevDistance", "ChebyshevT", "ChebyshevU", "Check", "CheckAbort", "CheckAll", "Checkbox", "CheckboxBar", "CheckboxBox", "CheckboxBoxOptions", "ChemicalData", "ChessboardDistance", "ChiDistribution", "ChineseRemainder", "ChiSquareDistribution", "ChoiceButtons", "ChoiceDialog", "CholeskyDecomposition", "Chop", "ChromaticityPlot", "ChromaticityPlot3D", "ChromaticPolynomial", "Circle", "CircleBox", "CircleDot", "CircleMinus", "CirclePlus", "CirclePoints", "CircleThrough", "CircleTimes", "CirculantGraph", "CircularOrthogonalMatrixDistribution", "CircularQuaternionMatrixDistribution", "CircularRealMatrixDistribution", "CircularSymplecticMatrixDistribution", "CircularUnitaryMatrixDistribution", "Circumsphere", "CityData", "ClassifierFunction", "ClassifierInformation", "ClassifierMeasurements", "ClassifierMeasurementsObject", "Classify", "ClassPriors", "Clear", "ClearAll", "ClearAttributes", "ClearCookies", "ClearPermissions", "ClearSystemCache", "ClebschGordan", "ClickPane", "Clip", "ClipboardNotebook", "ClipFill", "ClippingStyle", "ClipPlanes", "ClipPlanesStyle", "ClipRange", "Clock", "ClockGauge", "ClockwiseContourIntegral", "Close", "Closed", "CloseKernels", "ClosenessCentrality", "Closing", "ClosingAutoSave", "ClosingEvent", "ClosingSaveDialog", "CloudAccountData", "CloudBase", "CloudConnect", "CloudConnections", "CloudDeploy", "CloudDirectory", "CloudDisconnect", "CloudEvaluate", "CloudExport", "CloudExpression", "CloudExpressions", "CloudFunction", "CloudGet", "CloudImport", "CloudLoggingData", "CloudObject", "CloudObjectInformation", "CloudObjectInformationData", "CloudObjectNameFormat", "CloudObjects", "CloudObjectURLType", "CloudPublish", "CloudPut", "CloudRenderingMethod", "CloudSave", "CloudShare", "CloudSubmit", "CloudSymbol", "CloudUnshare", "CloudUserID", "ClusterClassify", "ClusterDissimilarityFunction", "ClusteringComponents", "ClusteringTree", "CMYKColor", "Coarse", "CodeAssistOptions", "Coefficient", "CoefficientArrays", "CoefficientDomain", "CoefficientList", "CoefficientRules", "CoifletWavelet", "Collect", "Colon", "ColonForm", "ColorBalance", "ColorCombine", "ColorConvert", "ColorCoverage", "ColorData", "ColorDataFunction", "ColorDetect", "ColorDistance", "ColorFunction", "ColorFunctionScaling", "Colorize", "ColorNegate", "ColorOutput", "ColorProfileData", "ColorQ", "ColorQuantize", "ColorReplace", "ColorRules", "ColorSelectorSettings", "ColorSeparate", "ColorSetter", "ColorSetterBox", "ColorSetterBoxOptions", "ColorSlider", "ColorsNear", "ColorSpace", "ColorToneMapping", "Column", "ColumnAlignments", "ColumnBackgrounds", "ColumnForm", "ColumnLines", "ColumnsEqual", "ColumnSpacings", "ColumnWidths", "CombinedEntityClass", "CombinerFunction", "CometData", "CommonDefaultFormatTypes", "Commonest", "CommonestFilter", "CommonName", "CommonUnits", "CommunityBoundaryStyle", "CommunityGraphPlot", "CommunityLabels", "CommunityRegionStyle", "CompanyData", "CompatibleUnitQ", "CompilationOptions", "CompilationTarget", "Compile", "Compiled", "CompiledCodeFunction", "CompiledFunction", "CompilerOptions", "Complement", "ComplementedEntityClass", "CompleteGraph", "CompleteGraphQ", "CompleteKaryTree", "CompletionsListPacket", "Complex", "ComplexContourPlot", "Complexes", "ComplexExpand", "ComplexInfinity", "ComplexityFunction", "ComplexListPlot", "ComplexPlot", "ComplexPlot3D", "ComplexRegionPlot", "ComplexStreamPlot", "ComplexVectorPlot", "ComponentMeasurements", "ComponentwiseContextMenu", "Compose", "ComposeList", "ComposeSeries", "CompositeQ", "Composition", "CompoundElement", "CompoundExpression", "CompoundPoissonDistribution", "CompoundPoissonProcess", "CompoundRenewalProcess", "Compress", "CompressedData", "CompressionLevel", "ComputeUncertainty", "Condition", "ConditionalExpression", "Conditioned", "Cone", "ConeBox", "ConfidenceLevel", "ConfidenceRange", "ConfidenceTransform", "ConfigurationPath", "ConformAudio", "ConformImages", "Congruent", "ConicHullRegion", "ConicHullRegion3DBox", "ConicHullRegionBox", "ConicOptimization", "Conjugate", "ConjugateTranspose", "Conjunction", "Connect", "ConnectedComponents", "ConnectedGraphComponents", "ConnectedGraphQ", "ConnectedMeshComponents", "ConnectedMoleculeComponents", "ConnectedMoleculeQ", "ConnectionSettings", "ConnectLibraryCallbackFunction", "ConnectSystemModelComponents", "ConnesWindow", "ConoverTest", "ConsoleMessage", "ConsoleMessagePacket", "Constant", "ConstantArray", "ConstantArrayLayer", "ConstantImage", "ConstantPlusLayer", "ConstantRegionQ", "Constants", "ConstantTimesLayer", "ConstellationData", "ConstrainedMax", "ConstrainedMin", "Construct", "Containing", "ContainsAll", "ContainsAny", "ContainsExactly", "ContainsNone", "ContainsOnly", "ContentFieldOptions", "ContentLocationFunction", "ContentObject", "ContentPadding", "ContentsBoundingBox", "ContentSelectable", "ContentSize", "Context", "ContextMenu", "Contexts", "ContextToFileName", "Continuation", "Continue", "ContinuedFraction", "ContinuedFractionK", "ContinuousAction", "ContinuousMarkovProcess", "ContinuousTask", "ContinuousTimeModelQ", "ContinuousWaveletData", "ContinuousWaveletTransform", "ContourDetect", "ContourGraphics", "ContourIntegral", "ContourLabels", "ContourLines", "ContourPlot", "ContourPlot3D", "Contours", "ContourShading", "ContourSmoothing", "ContourStyle", "ContraharmonicMean", "ContrastiveLossLayer", "Control", "ControlActive", "ControlAlignment", "ControlGroupContentsBox", "ControllabilityGramian", "ControllabilityMatrix", "ControllableDecomposition", "ControllableModelQ", "ControllerDuration", "ControllerInformation", "ControllerInformationData", "ControllerLinking", "ControllerManipulate", "ControllerMethod", "ControllerPath", "ControllerState", "ControlPlacement", "ControlsRendering", "ControlType", "Convergents", "ConversionOptions", "ConversionRules", "ConvertToBitmapPacket", "ConvertToPostScript", "ConvertToPostScriptPacket", "ConvexHullMesh", "ConvexPolygonQ", "ConvexPolyhedronQ", "ConvolutionLayer", "Convolve", "ConwayGroupCo1", "ConwayGroupCo2", "ConwayGroupCo3", "CookieFunction", "Cookies", "CoordinateBoundingBox", "CoordinateBoundingBoxArray", "CoordinateBounds", "CoordinateBoundsArray", "CoordinateChartData", "CoordinatesToolOptions", "CoordinateTransform", "CoordinateTransformData", "CoprimeQ", "Coproduct", "CopulaDistribution", "Copyable", "CopyDatabin", "CopyDirectory", "CopyFile", "CopyTag", "CopyToClipboard", "CornerFilter", "CornerNeighbors", "Correlation", "CorrelationDistance", "CorrelationFunction", "CorrelationTest", "Cos", "Cosh", "CoshIntegral", "CosineDistance", "CosineWindow", "CosIntegral", "Cot", "Coth", "Count", "CountDistinct", "CountDistinctBy", "CounterAssignments", "CounterBox", "CounterBoxOptions", "CounterClockwiseContourIntegral", "CounterEvaluator", "CounterFunction", "CounterIncrements", "CounterStyle", "CounterStyleMenuListing", "CountRoots", "CountryData", "Counts", "CountsBy", "Covariance", "CovarianceEstimatorFunction", "CovarianceFunction", "CoxianDistribution", "CoxIngersollRossProcess", "CoxModel", "CoxModelFit", "CramerVonMisesTest", "CreateArchive", "CreateCellID", "CreateChannel", "CreateCloudExpression", "CreateDatabin", "CreateDataStructure", "CreateDataSystemModel", "CreateDialog", "CreateDirectory", "CreateDocument", "CreateFile", "CreateIntermediateDirectories", "CreateManagedLibraryExpression", "CreateNotebook", "CreatePacletArchive", "CreatePalette", "CreatePalettePacket", "CreatePermissionsGroup", "CreateScheduledTask", "CreateSearchIndex", "CreateSystemModel", "CreateTemporary", "CreateUUID", "CreateWindow", "CriterionFunction", "CriticalityFailureImportance", "CriticalitySuccessImportance", "CriticalSection", "Cross", "CrossEntropyLossLayer", "CrossingCount", "CrossingDetect", "CrossingPolygon", "CrossMatrix", "Csc", "Csch", "CTCLossLayer", "Cube", "CubeRoot", "Cubics", "Cuboid", "CuboidBox", "Cumulant", "CumulantGeneratingFunction", "Cup", "CupCap", "Curl", "CurlyDoubleQuote", "CurlyQuote", "CurrencyConvert", "CurrentDate", "CurrentImage", "CurrentlySpeakingPacket", "CurrentNotebookImage", "CurrentScreenImage", "CurrentValue", "Curry", "CurryApplied", "CurvatureFlowFilter", "CurveClosed", "Cyan", "CycleGraph", "CycleIndexPolynomial", "Cycles", "CyclicGroup", "Cyclotomic", "Cylinder", "CylinderBox", "CylindricalDecomposition", "D", "DagumDistribution", "DamData", "DamerauLevenshteinDistance", "DampingFactor", "Darker", "Dashed", "Dashing", "DatabaseConnect", "DatabaseDisconnect", "DatabaseReference", "Databin", "DatabinAdd", "DatabinRemove", "Databins", "DatabinUpload", "DataCompression", "DataDistribution", "DataRange", "DataReversed", "Dataset", "DatasetDisplayPanel", "DataStructure", "DataStructureQ", "Date", "DateBounds", "Dated", "DateDelimiters", "DateDifference", "DatedUnit", "DateFormat", "DateFunction", "DateHistogram", "DateInterval", "DateList", "DateListLogPlot", "DateListPlot", "DateListStepPlot", "DateObject", "DateObjectQ", "DateOverlapsQ", "DatePattern", "DatePlus", "DateRange", "DateReduction", "DateString", "DateTicksFormat", "DateValue", "DateWithinQ", "DaubechiesWavelet", "DavisDistribution", "DawsonF", "DayCount", "DayCountConvention", "DayHemisphere", "DaylightQ", "DayMatchQ", "DayName", "DayNightTerminator", "DayPlus", "DayRange", "DayRound", "DeBruijnGraph", "DeBruijnSequence", "Debug", "DebugTag", "Decapitalize", "Decimal", "DecimalForm", "DeclareKnownSymbols", "DeclarePackage", "Decompose", "DeconvolutionLayer", "Decrement", "Decrypt", "DecryptFile", "DedekindEta", "DeepSpaceProbeData", "Default", "DefaultAxesStyle", "DefaultBaseStyle", "DefaultBoxStyle", "DefaultButton", "DefaultColor", "DefaultControlPlacement", "DefaultDuplicateCellStyle", "DefaultDuration", "DefaultElement", "DefaultFaceGridsStyle", "DefaultFieldHintStyle", "DefaultFont", "DefaultFontProperties", "DefaultFormatType", "DefaultFormatTypeForStyle", "DefaultFrameStyle", "DefaultFrameTicksStyle", "DefaultGridLinesStyle", "DefaultInlineFormatType", "DefaultInputFormatType", "DefaultLabelStyle", "DefaultMenuStyle", "DefaultNaturalLanguage", "DefaultNewCellStyle", "DefaultNewInlineCellStyle", "DefaultNotebook", "DefaultOptions", "DefaultOutputFormatType", "DefaultPrintPrecision", "DefaultStyle", "DefaultStyleDefinitions", "DefaultTextFormatType", "DefaultTextInlineFormatType", "DefaultTicksStyle", "DefaultTooltipStyle", "DefaultValue", "DefaultValues", "Defer", "DefineExternal", "DefineInputStreamMethod", "DefineOutputStreamMethod", "DefineResourceFunction", "Definition", "Degree", "DegreeCentrality", "DegreeGraphDistribution", "DegreeLexicographic", "DegreeReverseLexicographic", "DEigensystem", "DEigenvalues", "Deinitialization", "Del", "DelaunayMesh", "Delayed", "Deletable", "Delete", "DeleteAnomalies", "DeleteBorderComponents", "DeleteCases", "DeleteChannel", "DeleteCloudExpression", "DeleteContents", "DeleteDirectory", "DeleteDuplicates", "DeleteDuplicatesBy", "DeleteFile", "DeleteMissing", "DeleteObject", "DeletePermissionsKey", "DeleteSearchIndex", "DeleteSmallComponents", "DeleteStopwords", "DeleteWithContents", "DeletionWarning", "DelimitedArray", "DelimitedSequence", "Delimiter", "DelimiterFlashTime", "DelimiterMatching", "Delimiters", "DeliveryFunction", "Dendrogram", "Denominator", "DensityGraphics", "DensityHistogram", "DensityPlot", "DensityPlot3D", "DependentVariables", "Deploy", "Deployed", "Depth", "DepthFirstScan", "Derivative", "DerivativeFilter", "DerivedKey", "DescriptorStateSpace", "DesignMatrix", "DestroyAfterEvaluation", "Det", "DeviceClose", "DeviceConfigure", "DeviceExecute", "DeviceExecuteAsynchronous", "DeviceObject", "DeviceOpen", "DeviceOpenQ", "DeviceRead", "DeviceReadBuffer", "DeviceReadLatest", "DeviceReadList", "DeviceReadTimeSeries", "Devices", "DeviceStreams", "DeviceWrite", "DeviceWriteBuffer", "DGaussianWavelet", "DiacriticalPositioning", "Diagonal", "DiagonalizableMatrixQ", "DiagonalMatrix", "DiagonalMatrixQ", "Dialog", "DialogIndent", "DialogInput", "DialogLevel", "DialogNotebook", "DialogProlog", "DialogReturn", "DialogSymbols", "Diamond", "DiamondMatrix", "DiceDissimilarity", "DictionaryLookup", "DictionaryWordQ", "DifferenceDelta", "DifferenceOrder", "DifferenceQuotient", "DifferenceRoot", "DifferenceRootReduce", "Differences", "DifferentialD", "DifferentialRoot", "DifferentialRootReduce", "DifferentiatorFilter", "DigitalSignature", "DigitBlock", "DigitBlockMinimum", "DigitCharacter", "DigitCount", "DigitQ", "DihedralAngle", "DihedralGroup", "Dilation", "DimensionalCombinations", "DimensionalMeshComponents", "DimensionReduce", "DimensionReducerFunction", "DimensionReduction", "Dimensions", "DiracComb", "DiracDelta", "DirectedEdge", "DirectedEdges", "DirectedGraph", "DirectedGraphQ", "DirectedInfinity", "Direction", "Directive", "Directory", "DirectoryName", "DirectoryQ", "DirectoryStack", "DirichletBeta", "DirichletCharacter", "DirichletCondition", "DirichletConvolve", "DirichletDistribution", "DirichletEta", "DirichletL", "DirichletLambda", "DirichletTransform", "DirichletWindow", "DisableConsolePrintPacket", "DisableFormatting", "DiscreteAsymptotic", "DiscreteChirpZTransform", "DiscreteConvolve", "DiscreteDelta", "DiscreteHadamardTransform", "DiscreteIndicator", "DiscreteLimit", "DiscreteLQEstimatorGains", "DiscreteLQRegulatorGains", "DiscreteLyapunovSolve", "DiscreteMarkovProcess", "DiscreteMaxLimit", "DiscreteMinLimit", "DiscretePlot", "DiscretePlot3D", "DiscreteRatio", "DiscreteRiccatiSolve", "DiscreteShift", "DiscreteTimeModelQ", "DiscreteUniformDistribution", "DiscreteVariables", "DiscreteWaveletData", "DiscreteWaveletPacketTransform", "DiscreteWaveletTransform", "DiscretizeGraphics", "DiscretizeRegion", "Discriminant", "DisjointQ", "Disjunction", "Disk", "DiskBox", "DiskMatrix", "DiskSegment", "Dispatch", "DispatchQ", "DispersionEstimatorFunction", "Display", "DisplayAllSteps", "DisplayEndPacket", "DisplayFlushImagePacket", "DisplayForm", "DisplayFunction", "DisplayPacket", "DisplayRules", "DisplaySetSizePacket", "DisplayString", "DisplayTemporary", "DisplayWith", "DisplayWithRef", "DisplayWithVariable", "DistanceFunction", "DistanceMatrix", "DistanceTransform", "Distribute", "Distributed", "DistributedContexts", "DistributeDefinitions", "DistributionChart", "DistributionDomain", "DistributionFitTest", "DistributionParameterAssumptions", "DistributionParameterQ", "Dithering", "Div", "Divergence", "Divide", "DivideBy", "Dividers", "DivideSides", "Divisible", "Divisors", "DivisorSigma", "DivisorSum", "DMSList", "DMSString", "Do", "DockedCells", "DocumentGenerator", "DocumentGeneratorInformation", "DocumentGeneratorInformationData", "DocumentGenerators", "DocumentNotebook", "DocumentWeightingRules", "Dodecahedron", "DomainRegistrationInformation", "DominantColors", "DOSTextFormat", "Dot", "DotDashed", "DotEqual", "DotLayer", "DotPlusLayer", "Dotted", "DoubleBracketingBar", "DoubleContourIntegral", "DoubleDownArrow", "DoubleLeftArrow", "DoubleLeftRightArrow", "DoubleLeftTee", "DoubleLongLeftArrow", "DoubleLongLeftRightArrow", "DoubleLongRightArrow", "DoubleRightArrow", "DoubleRightTee", "DoubleUpArrow", "DoubleUpDownArrow", "DoubleVerticalBar", "DoublyInfinite", "Down", "DownArrow", "DownArrowBar", "DownArrowUpArrow", "DownLeftRightVector", "DownLeftTeeVector", "DownLeftVector", "DownLeftVectorBar", "DownRightTeeVector", "DownRightVector", "DownRightVectorBar", "Downsample", "DownTee", "DownTeeArrow", "DownValues", "DragAndDrop", "DrawEdges", "DrawFrontFaces", "DrawHighlighted", "Drop", "DropoutLayer", "DSolve", "DSolveValue", "Dt", "DualLinearProgramming", "DualPolyhedron", "DualSystemsModel", "DumpGet", "DumpSave", "DuplicateFreeQ", "Duration", "Dynamic", "DynamicBox", "DynamicBoxOptions", "DynamicEvaluationTimeout", "DynamicGeoGraphics", "DynamicImage", "DynamicLocation", "DynamicModule", "DynamicModuleBox", "DynamicModuleBoxOptions", "DynamicModuleParent", "DynamicModuleValues", "DynamicName", "DynamicNamespace", "DynamicReference", "DynamicSetting", "DynamicUpdating", "DynamicWrapper", "DynamicWrapperBox", "DynamicWrapperBoxOptions", "E", "EarthImpactData", "EarthquakeData", "EccentricityCentrality", "Echo", "EchoFunction", "EclipseType", "EdgeAdd", "EdgeBetweennessCentrality", "EdgeCapacity", "EdgeCapForm", "EdgeColor", "EdgeConnectivity", "EdgeContract", "EdgeCost", "EdgeCount", "EdgeCoverQ", "EdgeCycleMatrix", "EdgeDashing", "EdgeDelete", "EdgeDetect", "EdgeForm", "EdgeIndex", "EdgeJoinForm", "EdgeLabeling", "EdgeLabels", "EdgeLabelStyle", "EdgeList", "EdgeOpacity", "EdgeQ", "EdgeRenderingFunction", "EdgeRules", "EdgeShapeFunction", "EdgeStyle", "EdgeTaggedGraph", "EdgeTaggedGraphQ", "EdgeTags", "EdgeThickness", "EdgeWeight", "EdgeWeightedGraphQ", "Editable", "EditButtonSettings", "EditCellTagsSettings", "EditDistance", "EffectiveInterest", "Eigensystem", "Eigenvalues", "EigenvectorCentrality", "Eigenvectors", "Element", "ElementData", "ElementwiseLayer", "ElidedForms", "Eliminate", "EliminationOrder", "Ellipsoid", "EllipticE", "EllipticExp", "EllipticExpPrime", "EllipticF", "EllipticFilterModel", "EllipticK", "EllipticLog", "EllipticNomeQ", "EllipticPi", "EllipticReducedHalfPeriods", "EllipticTheta", "EllipticThetaPrime", "EmbedCode", "EmbeddedHTML", "EmbeddedService", "EmbeddingLayer", "EmbeddingObject", "EmitSound", "EmphasizeSyntaxErrors", "EmpiricalDistribution", "Empty", "EmptyGraphQ", "EmptyRegion", "EnableConsolePrintPacket", "Enabled", "Encode", "Encrypt", "EncryptedObject", "EncryptFile", "End", "EndAdd", "EndDialogPacket", "EndFrontEndInteractionPacket", "EndOfBuffer", "EndOfFile", "EndOfLine", "EndOfString", "EndPackage", "EngineEnvironment", "EngineeringForm", "Enter", "EnterExpressionPacket", "EnterTextPacket", "Entity", "EntityClass", "EntityClassList", "EntityCopies", "EntityFunction", "EntityGroup", "EntityInstance", "EntityList", "EntityPrefetch", "EntityProperties", "EntityProperty", "EntityPropertyClass", "EntityRegister", "EntityStore", "EntityStores", "EntityTypeName", "EntityUnregister", "EntityValue", "Entropy", "EntropyFilter", "Environment", "Epilog", "EpilogFunction", "Equal", "EqualColumns", "EqualRows", "EqualTilde", "EqualTo", "EquatedTo", "Equilibrium", "EquirippleFilterKernel", "Equivalent", "Erf", "Erfc", "Erfi", "ErlangB", "ErlangC", "ErlangDistribution", "Erosion", "ErrorBox", "ErrorBoxOptions", "ErrorNorm", "ErrorPacket", "ErrorsDialogSettings", "EscapeRadius", "EstimatedBackground", "EstimatedDistribution", "EstimatedProcess", "EstimatorGains", "EstimatorRegulator", "EuclideanDistance", "EulerAngles", "EulerCharacteristic", "EulerE", "EulerGamma", "EulerianGraphQ", "EulerMatrix", "EulerPhi", "Evaluatable", "Evaluate", "Evaluated", "EvaluatePacket", "EvaluateScheduledTask", "EvaluationBox", "EvaluationCell", "EvaluationCompletionAction", "EvaluationData", "EvaluationElements", "EvaluationEnvironment", "EvaluationMode", "EvaluationMonitor", "EvaluationNotebook", "EvaluationObject", "EvaluationOrder", "Evaluator", "EvaluatorNames", "EvenQ", "EventData", "EventEvaluator", "EventHandler", "EventHandlerTag", "EventLabels", "EventSeries", "ExactBlackmanWindow", "ExactNumberQ", "ExactRootIsolation", "ExampleData", "Except", "ExcludedForms", "ExcludedLines", "ExcludedPhysicalQuantities", "ExcludePods", "Exclusions", "ExclusionsStyle", "Exists", "Exit", "ExitDialog", "ExoplanetData", "Exp", "Expand", "ExpandAll", "ExpandDenominator", "ExpandFileName", "ExpandNumerator", "Expectation", "ExpectationE", "ExpectedValue", "ExpGammaDistribution", "ExpIntegralE", "ExpIntegralEi", "ExpirationDate", "Exponent", "ExponentFunction", "ExponentialDistribution", "ExponentialFamily", "ExponentialGeneratingFunction", "ExponentialMovingAverage", "ExponentialPowerDistribution", "ExponentPosition", "ExponentStep", "Export", "ExportAutoReplacements", "ExportByteArray", "ExportForm", "ExportPacket", "ExportString", "Expression", "ExpressionCell", "ExpressionGraph", "ExpressionPacket", "ExpressionUUID", "ExpToTrig", "ExtendedEntityClass", "ExtendedGCD", "Extension", "ExtentElementFunction", "ExtentMarkers", "ExtentSize", "ExternalBundle", "ExternalCall", "ExternalDataCharacterEncoding", "ExternalEvaluate", "ExternalFunction", "ExternalFunctionName", "ExternalIdentifier", "ExternalObject", "ExternalOptions", "ExternalSessionObject", "ExternalSessions", "ExternalStorageBase", "ExternalStorageDownload", "ExternalStorageGet", "ExternalStorageObject", "ExternalStoragePut", "ExternalStorageUpload", "ExternalTypeSignature", "ExternalValue", "Extract", "ExtractArchive", "ExtractLayer", "ExtractPacletArchive", "ExtremeValueDistribution", "FaceAlign", "FaceForm", "FaceGrids", "FaceGridsStyle", "FacialFeatures", "Factor", "FactorComplete", "Factorial", "Factorial2", "FactorialMoment", "FactorialMomentGeneratingFunction", "FactorialPower", "FactorInteger", "FactorList", "FactorSquareFree", "FactorSquareFreeList", "FactorTerms", "FactorTermsList", "Fail", "Failure", "FailureAction", "FailureDistribution", "FailureQ", "False", "FareySequence", "FARIMAProcess", "FeatureDistance", "FeatureExtract", "FeatureExtraction", "FeatureExtractor", "FeatureExtractorFunction", "FeatureNames", "FeatureNearest", "FeatureSpacePlot", "FeatureSpacePlot3D", "FeatureTypes", "FEDisableConsolePrintPacket", "FeedbackLinearize", "FeedbackSector", "FeedbackSectorStyle", "FeedbackType", "FEEnableConsolePrintPacket", "FetalGrowthData", "Fibonacci", "Fibonorial", "FieldCompletionFunction", "FieldHint", "FieldHintStyle", "FieldMasked", "FieldSize", "File", "FileBaseName", "FileByteCount", "FileConvert", "FileDate", "FileExistsQ", "FileExtension", "FileFormat", "FileHandler", "FileHash", "FileInformation", "FileName", "FileNameDepth", "FileNameDialogSettings", "FileNameDrop", "FileNameForms", "FileNameJoin", "FileNames", "FileNameSetter", "FileNameSplit", "FileNameTake", "FilePrint", "FileSize", "FileSystemMap", "FileSystemScan", "FileTemplate", "FileTemplateApply", "FileType", "FilledCurve", "FilledCurveBox", "FilledCurveBoxOptions", "Filling", "FillingStyle", "FillingTransform", "FilteredEntityClass", "FilterRules", "FinancialBond", "FinancialData", "FinancialDerivative", "FinancialIndicator", "Find", "FindAnomalies", "FindArgMax", "FindArgMin", "FindChannels", "FindClique", "FindClusters", "FindCookies", "FindCurvePath", "FindCycle", "FindDevices", "FindDistribution", "FindDistributionParameters", "FindDivisions", "FindEdgeCover", "FindEdgeCut", "FindEdgeIndependentPaths", "FindEquationalProof", "FindEulerianCycle", "FindExternalEvaluators", "FindFaces", "FindFile", "FindFit", "FindFormula", "FindFundamentalCycles", "FindGeneratingFunction", "FindGeoLocation", "FindGeometricConjectures", "FindGeometricTransform", "FindGraphCommunities", "FindGraphIsomorphism", "FindGraphPartition", "FindHamiltonianCycle", "FindHamiltonianPath", "FindHiddenMarkovStates", "FindImageText", "FindIndependentEdgeSet", "FindIndependentVertexSet", "FindInstance", "FindIntegerNullVector", "FindKClan", "FindKClique", "FindKClub", "FindKPlex", "FindLibrary", "FindLinearRecurrence", "FindList", "FindMatchingColor", "FindMaximum", "FindMaximumCut", "FindMaximumFlow", "FindMaxValue", "FindMeshDefects", "FindMinimum", "FindMinimumCostFlow", "FindMinimumCut", "FindMinValue", "FindMoleculeSubstructure", "FindPath", "FindPeaks", "FindPermutation", "FindPostmanTour", "FindProcessParameters", "FindRepeat", "FindRoot", "FindSequenceFunction", "FindSettings", "FindShortestPath", "FindShortestTour", "FindSpanningTree", "FindSystemModelEquilibrium", "FindTextualAnswer", "FindThreshold", "FindTransientRepeat", "FindVertexCover", "FindVertexCut", "FindVertexIndependentPaths", "Fine", "FinishDynamic", "FiniteAbelianGroupCount", "FiniteGroupCount", "FiniteGroupData", "First", "FirstCase", "FirstPassageTimeDistribution", "FirstPosition", "FischerGroupFi22", "FischerGroupFi23", "FischerGroupFi24Prime", "FisherHypergeometricDistribution", "FisherRatioTest", "FisherZDistribution", "Fit", "FitAll", "FitRegularization", "FittedModel", "FixedOrder", "FixedPoint", "FixedPointList", "FlashSelection", "Flat", "Flatten", "FlattenAt", "FlattenLayer", "FlatTopWindow", "FlipView", "Floor", "FlowPolynomial", "FlushPrintOutputPacket", "Fold", "FoldList", "FoldPair", "FoldPairList", "FollowRedirects", "Font", "FontColor", "FontFamily", "FontForm", "FontName", "FontOpacity", "FontPostScriptName", "FontProperties", "FontReencoding", "FontSize", "FontSlant", "FontSubstitutions", "FontTracking", "FontVariations", "FontWeight", "For", "ForAll", "ForceVersionInstall", "Format", "FormatRules", "FormatType", "FormatTypeAutoConvert", "FormatValues", "FormBox", "FormBoxOptions", "FormControl", "FormFunction", "FormLayoutFunction", "FormObject", "FormPage", "FormTheme", "FormulaData", "FormulaLookup", "FortranForm", "Forward", "ForwardBackward", "Fourier", "FourierCoefficient", "FourierCosCoefficient", "FourierCosSeries", "FourierCosTransform", "FourierDCT", "FourierDCTFilter", "FourierDCTMatrix", "FourierDST", "FourierDSTMatrix", "FourierMatrix", "FourierParameters", "FourierSequenceTransform", "FourierSeries", "FourierSinCoefficient", "FourierSinSeries", "FourierSinTransform", "FourierTransform", "FourierTrigSeries", "FractionalBrownianMotionProcess", "FractionalGaussianNoiseProcess", "FractionalPart", "FractionBox", "FractionBoxOptions", "FractionLine", "Frame", "FrameBox", "FrameBoxOptions", "Framed", "FrameInset", "FrameLabel", "Frameless", "FrameMargins", "FrameRate", "FrameStyle", "FrameTicks", "FrameTicksStyle", "FRatioDistribution", "FrechetDistribution", "FreeQ", "FrenetSerretSystem", "FrequencySamplingFilterKernel", "FresnelC", "FresnelF", "FresnelG", "FresnelS", "Friday", "FrobeniusNumber", "FrobeniusSolve", "FromAbsoluteTime", "FromCharacterCode", "FromCoefficientRules", "FromContinuedFraction", "FromDate", "FromDigits", "FromDMS", "FromEntity", "FromJulianDate", "FromLetterNumber", "FromPolarCoordinates", "FromRomanNumeral", "FromSphericalCoordinates", "FromUnixTime", "Front", "FrontEndDynamicExpression", "FrontEndEventActions", "FrontEndExecute", "FrontEndObject", "FrontEndResource", "FrontEndResourceString", "FrontEndStackSize", "FrontEndToken", "FrontEndTokenExecute", "FrontEndValueCache", "FrontEndVersion", "FrontFaceColor", "FrontFaceOpacity", "Full", "FullAxes", "FullDefinition", "FullForm", "FullGraphics", "FullInformationOutputRegulator", "FullOptions", "FullRegion", "FullSimplify", "Function", "FunctionCompile", "FunctionCompileExport", "FunctionCompileExportByteArray", "FunctionCompileExportLibrary", "FunctionCompileExportString", "FunctionDomain", "FunctionExpand", "FunctionInterpolation", "FunctionPeriod", "FunctionRange", "FunctionSpace", "FussellVeselyImportance", "GaborFilter", "GaborMatrix", "GaborWavelet", "GainMargins", "GainPhaseMargins", "GalaxyData", "GalleryView", "Gamma", "GammaDistribution", "GammaRegularized", "GapPenalty", "GARCHProcess", "GatedRecurrentLayer", "Gather", "GatherBy", "GaugeFaceElementFunction", "GaugeFaceStyle", "GaugeFrameElementFunction", "GaugeFrameSize", "GaugeFrameStyle", "GaugeLabels", "GaugeMarkers", "GaugeStyle", "GaussianFilter", "GaussianIntegers", "GaussianMatrix", "GaussianOrthogonalMatrixDistribution", "GaussianSymplecticMatrixDistribution", "GaussianUnitaryMatrixDistribution", "GaussianWindow", "GCD", "GegenbauerC", "General", "GeneralizedLinearModelFit", "GenerateAsymmetricKeyPair", "GenerateConditions", "GeneratedCell", "GeneratedDocumentBinding", "GenerateDerivedKey", "GenerateDigitalSignature", "GenerateDocument", "GeneratedParameters", "GeneratedQuantityMagnitudes", "GenerateFileSignature", "GenerateHTTPResponse", "GenerateSecuredAuthenticationKey", "GenerateSymmetricKey", "GeneratingFunction", "GeneratorDescription", "GeneratorHistoryLength", "GeneratorOutputType", "Generic", "GenericCylindricalDecomposition", "GenomeData", "GenomeLookup", "GeoAntipode", "GeoArea", "GeoArraySize", "GeoBackground", "GeoBoundingBox", "GeoBounds", "GeoBoundsRegion", "GeoBubbleChart", "GeoCenter", "GeoCircle", "GeoContourPlot", "GeoDensityPlot", "GeodesicClosing", "GeodesicDilation", "GeodesicErosion", "GeodesicOpening", "GeoDestination", "GeodesyData", "GeoDirection", "GeoDisk", "GeoDisplacement", "GeoDistance", "GeoDistanceList", "GeoElevationData", "GeoEntities", "GeoGraphics", "GeogravityModelData", "GeoGridDirectionDifference", "GeoGridLines", "GeoGridLinesStyle", "GeoGridPosition", "GeoGridRange", "GeoGridRangePadding", "GeoGridUnitArea", "GeoGridUnitDistance", "GeoGridVector", "GeoGroup", "GeoHemisphere", "GeoHemisphereBoundary", "GeoHistogram", "GeoIdentify", "GeoImage", "GeoLabels", "GeoLength", "GeoListPlot", "GeoLocation", "GeologicalPeriodData", "GeomagneticModelData", "GeoMarker", "GeometricAssertion", "GeometricBrownianMotionProcess", "GeometricDistribution", "GeometricMean", "GeometricMeanFilter", "GeometricOptimization", "GeometricScene", "GeometricTransformation", "GeometricTransformation3DBox", "GeometricTransformation3DBoxOptions", "GeometricTransformationBox", "GeometricTransformationBoxOptions", "GeoModel", "GeoNearest", "GeoPath", "GeoPosition", "GeoPositionENU", "GeoPositionXYZ", "GeoProjection", "GeoProjectionData", "GeoRange", "GeoRangePadding", "GeoRegionValuePlot", "GeoResolution", "GeoScaleBar", "GeoServer", "GeoSmoothHistogram", "GeoStreamPlot", "GeoStyling", "GeoStylingImageFunction", "GeoVariant", "GeoVector", "GeoVectorENU", "GeoVectorPlot", "GeoVectorXYZ", "GeoVisibleRegion", "GeoVisibleRegionBoundary", "GeoWithinQ", "GeoZoomLevel", "GestureHandler", "GestureHandlerTag", "Get", "GetBoundingBoxSizePacket", "GetContext", "GetEnvironment", "GetFileName", "GetFrontEndOptionsDataPacket", "GetLinebreakInformationPacket", "GetMenusPacket", "GetPageBreakInformationPacket", "Glaisher", "GlobalClusteringCoefficient", "GlobalPreferences", "GlobalSession", "Glow", "GoldenAngle", "GoldenRatio", "GompertzMakehamDistribution", "GoochShading", "GoodmanKruskalGamma", "GoodmanKruskalGammaTest", "Goto", "Grad", "Gradient", "GradientFilter", "GradientOrientationFilter", "GrammarApply", "GrammarRules", "GrammarToken", "Graph", "Graph3D", "GraphAssortativity", "GraphAutomorphismGroup", "GraphCenter", "GraphComplement", "GraphData", "GraphDensity", "GraphDiameter", "GraphDifference", "GraphDisjointUnion", "GraphDistance", "GraphDistanceMatrix", "GraphElementData", "GraphEmbedding", "GraphHighlight", "GraphHighlightStyle", "GraphHub", "Graphics", "Graphics3D", "Graphics3DBox", "Graphics3DBoxOptions", "GraphicsArray", "GraphicsBaseline", "GraphicsBox", "GraphicsBoxOptions", "GraphicsColor", "GraphicsColumn", "GraphicsComplex", "GraphicsComplex3DBox", "GraphicsComplex3DBoxOptions", "GraphicsComplexBox", "GraphicsComplexBoxOptions", "GraphicsContents", "GraphicsData", "GraphicsGrid", "GraphicsGridBox", "GraphicsGroup", "GraphicsGroup3DBox", "GraphicsGroup3DBoxOptions", "GraphicsGroupBox", "GraphicsGroupBoxOptions", "GraphicsGrouping", "GraphicsHighlightColor", "GraphicsRow", "GraphicsSpacing", "GraphicsStyle", "GraphIntersection", "GraphLayout", "GraphLinkEfficiency", "GraphPeriphery", "GraphPlot", "GraphPlot3D", "GraphPower", "GraphPropertyDistribution", "GraphQ", "GraphRadius", "GraphReciprocity", "GraphRoot", "GraphStyle", "GraphUnion", "Gray", "GrayLevel", "Greater", "GreaterEqual", "GreaterEqualLess", "GreaterEqualThan", "GreaterFullEqual", "GreaterGreater", "GreaterLess", "GreaterSlantEqual", "GreaterThan", "GreaterTilde", "Green", "GreenFunction", "Grid", "GridBaseline", "GridBox", "GridBoxAlignment", "GridBoxBackground", "GridBoxDividers", "GridBoxFrame", "GridBoxItemSize", "GridBoxItemStyle", "GridBoxOptions", "GridBoxSpacings", "GridCreationSettings", "GridDefaultElement", "GridElementStyleOptions", "GridFrame", "GridFrameMargins", "GridGraph", "GridLines", "GridLinesStyle", "GroebnerBasis", "GroupActionBase", "GroupBy", "GroupCentralizer", "GroupElementFromWord", "GroupElementPosition", "GroupElementQ", "GroupElements", "GroupElementToWord", "GroupGenerators", "Groupings", "GroupMultiplicationTable", "GroupOrbits", "GroupOrder", "GroupPageBreakWithin", "GroupSetwiseStabilizer", "GroupStabilizer", "GroupStabilizerChain", "GroupTogetherGrouping", "GroupTogetherNestedGrouping", "GrowCutComponents", "Gudermannian", "GuidedFilter", "GumbelDistribution", "HaarWavelet", "HadamardMatrix", "HalfLine", "HalfNormalDistribution", "HalfPlane", "HalfSpace", "HalftoneShading", "HamiltonianGraphQ", "HammingDistance", "HammingWindow", "HandlerFunctions", "HandlerFunctionsKeys", "HankelH1", "HankelH2", "HankelMatrix", "HankelTransform", "HannPoissonWindow", "HannWindow", "HaradaNortonGroupHN", "HararyGraph", "HarmonicMean", "HarmonicMeanFilter", "HarmonicNumber", "Hash", "HatchFilling", "HatchShading", "Haversine", "HazardFunction", "Head", "HeadCompose", "HeaderAlignment", "HeaderBackground", "HeaderDisplayFunction", "HeaderLines", "HeaderSize", "HeaderStyle", "Heads", "HeavisideLambda", "HeavisidePi", "HeavisideTheta", "HeldGroupHe", "HeldPart", "HelpBrowserLookup", "HelpBrowserNotebook", "HelpBrowserSettings", "Here", "HermiteDecomposition", "HermiteH", "HermitianMatrixQ", "HessenbergDecomposition", "Hessian", "HeunB", "HeunBPrime", "HeunC", "HeunCPrime", "HeunD", "HeunDPrime", "HeunG", "HeunGPrime", "HeunT", "HeunTPrime", "HexadecimalCharacter", "Hexahedron", "HexahedronBox", "HexahedronBoxOptions", "HiddenItems", "HiddenMarkovProcess", "HiddenSurface", "Highlighted", "HighlightGraph", "HighlightImage", "HighlightMesh", "HighpassFilter", "HigmanSimsGroupHS", "HilbertCurve", "HilbertFilter", "HilbertMatrix", "Histogram", "Histogram3D", "HistogramDistribution", "HistogramList", "HistogramTransform", "HistogramTransformInterpolation", "HistoricalPeriodData", "HitMissTransform", "HITSCentrality", "HjorthDistribution", "HodgeDual", "HoeffdingD", "HoeffdingDTest", "Hold", "HoldAll", "HoldAllComplete", "HoldComplete", "HoldFirst", "HoldForm", "HoldPattern", "HoldRest", "HolidayCalendar", "HomeDirectory", "HomePage", "Horizontal", "HorizontalForm", "HorizontalGauge", "HorizontalScrollPosition", "HornerForm", "HostLookup", "HotellingTSquareDistribution", "HoytDistribution", "HTMLSave", "HTTPErrorResponse", "HTTPRedirect", "HTTPRequest", "HTTPRequestData", "HTTPResponse", "Hue", "HumanGrowthData", "HumpDownHump", "HumpEqual", "HurwitzLerchPhi", "HurwitzZeta", "HyperbolicDistribution", "HypercubeGraph", "HyperexponentialDistribution", "Hyperfactorial", "Hypergeometric0F1", "Hypergeometric0F1Regularized", "Hypergeometric1F1", "Hypergeometric1F1Regularized", "Hypergeometric2F1", "Hypergeometric2F1Regularized", "HypergeometricDistribution", "HypergeometricPFQ", "HypergeometricPFQRegularized", "HypergeometricU", "Hyperlink", "HyperlinkAction", "HyperlinkCreationSettings", "Hyperplane", "Hyphenation", "HyphenationOptions", "HypoexponentialDistribution", "HypothesisTestData", "I", "IconData", "Iconize", "IconizedObject", "IconRules", "Icosahedron", "Identity", "IdentityMatrix", "If", "IgnoreCase", "IgnoreDiacritics", "IgnorePunctuation", "IgnoreSpellCheck", "IgnoringInactive", "Im", "Image", "Image3D", "Image3DProjection", "Image3DSlices", "ImageAccumulate", "ImageAdd", "ImageAdjust", "ImageAlign", "ImageApply", "ImageApplyIndexed", "ImageAspectRatio", "ImageAssemble", "ImageAugmentationLayer", "ImageBoundingBoxes", "ImageCache", "ImageCacheValid", "ImageCapture", "ImageCaptureFunction", "ImageCases", "ImageChannels", "ImageClip", "ImageCollage", "ImageColorSpace", "ImageCompose", "ImageContainsQ", "ImageContents", "ImageConvolve", "ImageCooccurrence", "ImageCorners", "ImageCorrelate", "ImageCorrespondingPoints", "ImageCrop", "ImageData", "ImageDeconvolve", "ImageDemosaic", "ImageDifference", "ImageDimensions", "ImageDisplacements", "ImageDistance", "ImageEffect", "ImageExposureCombine", "ImageFeatureTrack", "ImageFileApply", "ImageFileFilter", "ImageFileScan", "ImageFilter", "ImageFocusCombine", "ImageForestingComponents", "ImageFormattingWidth", "ImageForwardTransformation", "ImageGraphics", "ImageHistogram", "ImageIdentify", "ImageInstanceQ", "ImageKeypoints", "ImageLabels", "ImageLegends", "ImageLevels", "ImageLines", "ImageMargins", "ImageMarker", "ImageMarkers", "ImageMeasurements", "ImageMesh", "ImageMultiply", "ImageOffset", "ImagePad", "ImagePadding", "ImagePartition", "ImagePeriodogram", "ImagePerspectiveTransformation", "ImagePosition", "ImagePreviewFunction", "ImagePyramid", "ImagePyramidApply", "ImageQ", "ImageRangeCache", "ImageRecolor", "ImageReflect", "ImageRegion", "ImageResize", "ImageResolution", "ImageRestyle", "ImageRotate", "ImageRotated", "ImageSaliencyFilter", "ImageScaled", "ImageScan", "ImageSize", "ImageSizeAction", "ImageSizeCache", "ImageSizeMultipliers", "ImageSizeRaw", "ImageSubtract", "ImageTake", "ImageTransformation", "ImageTrim", "ImageType", "ImageValue", "ImageValuePositions", "ImagingDevice", "ImplicitRegion", "Implies", "Import", "ImportAutoReplacements", "ImportByteArray", "ImportOptions", "ImportString", "ImprovementImportance", "In", "Inactivate", "Inactive", "IncidenceGraph", "IncidenceList", "IncidenceMatrix", "IncludeAromaticBonds", "IncludeConstantBasis", "IncludeDefinitions", "IncludeDirectories", "IncludeFileExtension", "IncludeGeneratorTasks", "IncludeHydrogens", "IncludeInflections", "IncludeMetaInformation", "IncludePods", "IncludeQuantities", "IncludeRelatedTables", "IncludeSingularTerm", "IncludeWindowTimes", "Increment", "IndefiniteMatrixQ", "Indent", "IndentingNewlineSpacings", "IndentMaxFraction", "IndependenceTest", "IndependentEdgeSetQ", "IndependentPhysicalQuantity", "IndependentUnit", "IndependentUnitDimension", "IndependentVertexSetQ", "Indeterminate", "IndeterminateThreshold", "IndexCreationOptions", "Indexed", "IndexEdgeTaggedGraph", "IndexGraph", "IndexTag", "Inequality", "InexactNumberQ", "InexactNumbers", "InfiniteFuture", "InfiniteLine", "InfinitePast", "InfinitePlane", "Infinity", "Infix", "InflationAdjust", "InflationMethod", "Information", "InformationData", "InformationDataGrid", "Inherited", "InheritScope", "InhomogeneousPoissonProcess", "InitialEvaluationHistory", "Initialization", "InitializationCell", "InitializationCellEvaluation", "InitializationCellWarning", "InitializationObjects", "InitializationValue", "Initialize", "InitialSeeding", "InlineCounterAssignments", "InlineCounterIncrements", "InlineRules", "Inner", "InnerPolygon", "InnerPolyhedron", "Inpaint", "Input", "InputAliases", "InputAssumptions", "InputAutoReplacements", "InputField", "InputFieldBox", "InputFieldBoxOptions", "InputForm", "InputGrouping", "InputNamePacket", "InputNotebook", "InputPacket", "InputSettings", "InputStream", "InputString", "InputStringPacket", "InputToBoxFormPacket", "Insert", "InsertionFunction", "InsertionPointObject", "InsertLinebreaks", "InsertResults", "Inset", "Inset3DBox", "Inset3DBoxOptions", "InsetBox", "InsetBoxOptions", "Insphere", "Install", "InstallService", "InstanceNormalizationLayer", "InString", "Integer", "IntegerDigits", "IntegerExponent", "IntegerLength", "IntegerName", "IntegerPart", "IntegerPartitions", "IntegerQ", "IntegerReverse", "Integers", "IntegerString", "Integral", "Integrate", "Interactive", "InteractiveTradingChart", "Interlaced", "Interleaving", "InternallyBalancedDecomposition", "InterpolatingFunction", "InterpolatingPolynomial", "Interpolation", "InterpolationOrder", "InterpolationPoints", "InterpolationPrecision", "Interpretation", "InterpretationBox", "InterpretationBoxOptions", "InterpretationFunction", "Interpreter", "InterpretTemplate", "InterquartileRange", "Interrupt", "InterruptSettings", "IntersectedEntityClass", "IntersectingQ", "Intersection", "Interval", "IntervalIntersection", "IntervalMarkers", "IntervalMarkersStyle", "IntervalMemberQ", "IntervalSlider", "IntervalUnion", "Into", "Inverse", "InverseBetaRegularized", "InverseCDF", "InverseChiSquareDistribution", "InverseContinuousWaveletTransform", "InverseDistanceTransform", "InverseEllipticNomeQ", "InverseErf", "InverseErfc", "InverseFourier", "InverseFourierCosTransform", "InverseFourierSequenceTransform", "InverseFourierSinTransform", "InverseFourierTransform", "InverseFunction", "InverseFunctions", "InverseGammaDistribution", "InverseGammaRegularized", "InverseGaussianDistribution", "InverseGudermannian", "InverseHankelTransform", "InverseHaversine", "InverseImagePyramid", "InverseJacobiCD", "InverseJacobiCN", "InverseJacobiCS", "InverseJacobiDC", "InverseJacobiDN", "InverseJacobiDS", "InverseJacobiNC", "InverseJacobiND", "InverseJacobiNS", "InverseJacobiSC", "InverseJacobiSD", "InverseJacobiSN", "InverseLaplaceTransform", "InverseMellinTransform", "InversePermutation", "InverseRadon", "InverseRadonTransform", "InverseSeries", "InverseShortTimeFourier", "InverseSpectrogram", "InverseSurvivalFunction", "InverseTransformedRegion", "InverseWaveletTransform", "InverseWeierstrassP", "InverseWishartMatrixDistribution", "InverseZTransform", "Invisible", "InvisibleApplication", "InvisibleTimes", "IPAddress", "IrreduciblePolynomialQ", "IslandData", "IsolatingInterval", "IsomorphicGraphQ", "IsotopeData", "Italic", "Item", "ItemAspectRatio", "ItemBox", "ItemBoxOptions", "ItemDisplayFunction", "ItemSize", "ItemStyle", "ItoProcess", "JaccardDissimilarity", "JacobiAmplitude", "Jacobian", "JacobiCD", "JacobiCN", "JacobiCS", "JacobiDC", "JacobiDN", "JacobiDS", "JacobiNC", "JacobiND", "JacobiNS", "JacobiP", "JacobiSC", "JacobiSD", "JacobiSN", "JacobiSymbol", "JacobiZeta", "JankoGroupJ1", "JankoGroupJ2", "JankoGroupJ3", "JankoGroupJ4", "JarqueBeraALMTest", "JohnsonDistribution", "Join", "JoinAcross", "Joined", "JoinedCurve", "JoinedCurveBox", "JoinedCurveBoxOptions", "JoinForm", "JordanDecomposition", "JordanModelDecomposition", "JulianDate", "JuliaSetBoettcher", "JuliaSetIterationCount", "JuliaSetPlot", "JuliaSetPoints", "K", "KagiChart", "KaiserBesselWindow", "KaiserWindow", "KalmanEstimator", "KalmanFilter", "KarhunenLoeveDecomposition", "KaryTree", "KatzCentrality", "KCoreComponents", "KDistribution", "KEdgeConnectedComponents", "KEdgeConnectedGraphQ", "KeepExistingVersion", "KelvinBei", "KelvinBer", "KelvinKei", "KelvinKer", "KendallTau", "KendallTauTest", "KernelExecute", "KernelFunction", "KernelMixtureDistribution", "KernelObject", "Kernels", "Ket", "Key", "KeyCollisionFunction", "KeyComplement", "KeyDrop", "KeyDropFrom", "KeyExistsQ", "KeyFreeQ", "KeyIntersection", "KeyMap", "KeyMemberQ", "KeypointStrength", "Keys", "KeySelect", "KeySort", "KeySortBy", "KeyTake", "KeyUnion", "KeyValueMap", "KeyValuePattern", "Khinchin", "KillProcess", "KirchhoffGraph", "KirchhoffMatrix", "KleinInvariantJ", "KnapsackSolve", "KnightTourGraph", "KnotData", "KnownUnitQ", "KochCurve", "KolmogorovSmirnovTest", "KroneckerDelta", "KroneckerModelDecomposition", "KroneckerProduct", "KroneckerSymbol", "KuiperTest", "KumaraswamyDistribution", "Kurtosis", "KuwaharaFilter", "KVertexConnectedComponents", "KVertexConnectedGraphQ", "LABColor", "Label", "Labeled", "LabeledSlider", "LabelingFunction", "LabelingSize", "LabelStyle", "LabelVisibility", "LaguerreL", "LakeData", "LambdaComponents", "LambertW", "LaminaData", "LanczosWindow", "LandauDistribution", "Language", "LanguageCategory", "LanguageData", "LanguageIdentify", "LanguageOptions", "LaplaceDistribution", "LaplaceTransform", "Laplacian", "LaplacianFilter", "LaplacianGaussianFilter", "Large", "Larger", "Last", "Latitude", "LatitudeLongitude", "LatticeData", "LatticeReduce", "Launch", "LaunchKernels", "LayeredGraphPlot", "LayerSizeFunction", "LayoutInformation", "LCHColor", "LCM", "LeaderSize", "LeafCount", "LeapYearQ", "LearnDistribution", "LearnedDistribution", "LearningRate", "LearningRateMultipliers", "LeastSquares", "LeastSquaresFilterKernel", "Left", "LeftArrow", "LeftArrowBar", "LeftArrowRightArrow", "LeftDownTeeVector", "LeftDownVector", "LeftDownVectorBar", "LeftRightArrow", "LeftRightVector", "LeftTee", "LeftTeeArrow", "LeftTeeVector", "LeftTriangle", "LeftTriangleBar", "LeftTriangleEqual", "LeftUpDownVector", "LeftUpTeeVector", "LeftUpVector", "LeftUpVectorBar", "LeftVector", "LeftVectorBar", "LegendAppearance", "Legended", "LegendFunction", "LegendLabel", "LegendLayout", "LegendMargins", "LegendMarkers", "LegendMarkerSize", "LegendreP", "LegendreQ", "LegendreType", "Length", "LengthWhile", "LerchPhi", "Less", "LessEqual", "LessEqualGreater", "LessEqualThan", "LessFullEqual", "LessGreater", "LessLess", "LessSlantEqual", "LessThan", "LessTilde", "LetterCharacter", "LetterCounts", "LetterNumber", "LetterQ", "Level", "LeveneTest", "LeviCivitaTensor", "LevyDistribution", "Lexicographic", "LibraryDataType", "LibraryFunction", "LibraryFunctionError", "LibraryFunctionInformation", "LibraryFunctionLoad", "LibraryFunctionUnload", "LibraryLoad", "LibraryUnload", "LicenseID", "LiftingFilterData", "LiftingWaveletTransform", "LightBlue", "LightBrown", "LightCyan", "Lighter", "LightGray", "LightGreen", "Lighting", "LightingAngle", "LightMagenta", "LightOrange", "LightPink", "LightPurple", "LightRed", "LightSources", "LightYellow", "Likelihood", "Limit", "LimitsPositioning", "LimitsPositioningTokens", "LindleyDistribution", "Line", "Line3DBox", "Line3DBoxOptions", "LinearFilter", "LinearFractionalOptimization", "LinearFractionalTransform", "LinearGradientImage", "LinearizingTransformationData", "LinearLayer", "LinearModelFit", "LinearOffsetFunction", "LinearOptimization", "LinearProgramming", "LinearRecurrence", "LinearSolve", "LinearSolveFunction", "LineBox", "LineBoxOptions", "LineBreak", "LinebreakAdjustments", "LineBreakChart", "LinebreakSemicolonWeighting", "LineBreakWithin", "LineColor", "LineGraph", "LineIndent", "LineIndentMaxFraction", "LineIntegralConvolutionPlot", "LineIntegralConvolutionScale", "LineLegend", "LineOpacity", "LineSpacing", "LineWrapParts", "LinkActivate", "LinkClose", "LinkConnect", "LinkConnectedQ", "LinkCreate", "LinkError", "LinkFlush", "LinkFunction", "LinkHost", "LinkInterrupt", "LinkLaunch", "LinkMode", "LinkObject", "LinkOpen", "LinkOptions", "LinkPatterns", "LinkProtocol", "LinkRankCentrality", "LinkRead", "LinkReadHeld", "LinkReadyQ", "Links", "LinkService", "LinkWrite", "LinkWriteHeld", "LiouvilleLambda", "List", "Listable", "ListAnimate", "ListContourPlot", "ListContourPlot3D", "ListConvolve", "ListCorrelate", "ListCurvePathPlot", "ListDeconvolve", "ListDensityPlot", "ListDensityPlot3D", "Listen", "ListFormat", "ListFourierSequenceTransform", "ListInterpolation", "ListLineIntegralConvolutionPlot", "ListLinePlot", "ListLogLinearPlot", "ListLogLogPlot", "ListLogPlot", "ListPicker", "ListPickerBox", "ListPickerBoxBackground", "ListPickerBoxOptions", "ListPlay", "ListPlot", "ListPlot3D", "ListPointPlot3D", "ListPolarPlot", "ListQ", "ListSliceContourPlot3D", "ListSliceDensityPlot3D", "ListSliceVectorPlot3D", "ListStepPlot", "ListStreamDensityPlot", "ListStreamPlot", "ListSurfacePlot3D", "ListVectorDensityPlot", "ListVectorPlot", "ListVectorPlot3D", "ListZTransform", "Literal", "LiteralSearch", "LocalAdaptiveBinarize", "LocalCache", "LocalClusteringCoefficient", "LocalizeDefinitions", "LocalizeVariables", "LocalObject", "LocalObjects", "LocalResponseNormalizationLayer", "LocalSubmit", "LocalSymbol", "LocalTime", "LocalTimeZone", "LocationEquivalenceTest", "LocationTest", "Locator", "LocatorAutoCreate", "LocatorBox", "LocatorBoxOptions", "LocatorCentering", "LocatorPane", "LocatorPaneBox", "LocatorPaneBoxOptions", "LocatorRegion", "Locked", "Log", "Log10", "Log2", "LogBarnesG", "LogGamma", "LogGammaDistribution", "LogicalExpand", "LogIntegral", "LogisticDistribution", "LogisticSigmoid", "LogitModelFit", "LogLikelihood", "LogLinearPlot", "LogLogisticDistribution", "LogLogPlot", "LogMultinormalDistribution", "LogNormalDistribution", "LogPlot", "LogRankTest", "LogSeriesDistribution", "LongEqual", "Longest", "LongestCommonSequence", "LongestCommonSequencePositions", "LongestCommonSubsequence", "LongestCommonSubsequencePositions", "LongestMatch", "LongestOrderedSequence", "LongForm", "Longitude", "LongLeftArrow", "LongLeftRightArrow", "LongRightArrow", "LongShortTermMemoryLayer", "Lookup", "Loopback", "LoopFreeGraphQ", "Looping", "LossFunction", "LowerCaseQ", "LowerLeftArrow", "LowerRightArrow", "LowerTriangularize", "LowerTriangularMatrixQ", "LowpassFilter", "LQEstimatorGains", "LQGRegulator", "LQOutputRegulatorGains", "LQRegulatorGains", "LUBackSubstitution", "LucasL", "LuccioSamiComponents", "LUDecomposition", "LunarEclipse", "LUVColor", "LyapunovSolve", "LyonsGroupLy", "MachineID", "MachineName", "MachineNumberQ", "MachinePrecision", "MacintoshSystemPageSetup", "Magenta", "Magnification", "Magnify", "MailAddressValidation", "MailExecute", "MailFolder", "MailItem", "MailReceiverFunction", "MailResponseFunction", "MailSearch", "MailServerConnect", "MailServerConnection", "MailSettings", "MainSolve", "MaintainDynamicCaches", "Majority", "MakeBoxes", "MakeExpression", "MakeRules", "ManagedLibraryExpressionID", "ManagedLibraryExpressionQ", "MandelbrotSetBoettcher", "MandelbrotSetDistance", "MandelbrotSetIterationCount", "MandelbrotSetMemberQ", "MandelbrotSetPlot", "MangoldtLambda", "ManhattanDistance", "Manipulate", "Manipulator", "MannedSpaceMissionData", "MannWhitneyTest", "MantissaExponent", "Manual", "Map", "MapAll", "MapAt", "MapIndexed", "MAProcess", "MapThread", "MarchenkoPasturDistribution", "MarcumQ", "MardiaCombinedTest", "MardiaKurtosisTest", "MardiaSkewnessTest", "MarginalDistribution", "MarkovProcessProperties", "Masking", "MatchingDissimilarity", "MatchLocalNameQ", "MatchLocalNames", "MatchQ", "Material", "MathematicalFunctionData", "MathematicaNotation", "MathieuC", "MathieuCharacteristicA", "MathieuCharacteristicB", "MathieuCharacteristicExponent", "MathieuCPrime", "MathieuGroupM11", "MathieuGroupM12", "MathieuGroupM22", "MathieuGroupM23", "MathieuGroupM24", "MathieuS", "MathieuSPrime", "MathMLForm", "MathMLText", "Matrices", "MatrixExp", "MatrixForm", "MatrixFunction", "MatrixLog", "MatrixNormalDistribution", "MatrixPlot", "MatrixPower", "MatrixPropertyDistribution", "MatrixQ", "MatrixRank", "MatrixTDistribution", "Max", "MaxBend", "MaxCellMeasure", "MaxColorDistance", "MaxDate", "MaxDetect", "MaxDuration", "MaxExtraBandwidths", "MaxExtraConditions", "MaxFeatureDisplacement", "MaxFeatures", "MaxFilter", "MaximalBy", "Maximize", "MaxItems", "MaxIterations", "MaxLimit", "MaxMemoryUsed", "MaxMixtureKernels", "MaxOverlapFraction", "MaxPlotPoints", "MaxPoints", "MaxRecursion", "MaxStableDistribution", "MaxStepFraction", "MaxSteps", "MaxStepSize", "MaxTrainingRounds", "MaxValue", "MaxwellDistribution", "MaxWordGap", "McLaughlinGroupMcL", "Mean", "MeanAbsoluteLossLayer", "MeanAround", "MeanClusteringCoefficient", "MeanDegreeConnectivity", "MeanDeviation", "MeanFilter", "MeanGraphDistance", "MeanNeighborDegree", "MeanShift", "MeanShiftFilter", "MeanSquaredLossLayer", "Median", "MedianDeviation", "MedianFilter", "MedicalTestData", "Medium", "MeijerG", "MeijerGReduce", "MeixnerDistribution", "MellinConvolve", "MellinTransform", "MemberQ", "MemoryAvailable", "MemoryConstrained", "MemoryConstraint", "MemoryInUse", "MengerMesh", "Menu", "MenuAppearance", "MenuCommandKey", "MenuEvaluator", "MenuItem", "MenuList", "MenuPacket", "MenuSortingValue", "MenuStyle", "MenuView", "Merge", "MergeDifferences", "MergingFunction", "MersennePrimeExponent", "MersennePrimeExponentQ", "Mesh", "MeshCellCentroid", "MeshCellCount", "MeshCellHighlight", "MeshCellIndex", "MeshCellLabel", "MeshCellMarker", "MeshCellMeasure", "MeshCellQuality", "MeshCells", "MeshCellShapeFunction", "MeshCellStyle", "MeshConnectivityGraph", "MeshCoordinates", "MeshFunctions", "MeshPrimitives", "MeshQualityGoal", "MeshRange", "MeshRefinementFunction", "MeshRegion", "MeshRegionQ", "MeshShading", "MeshStyle", "Message", "MessageDialog", "MessageList", "MessageName", "MessageObject", "MessageOptions", "MessagePacket", "Messages", "MessagesNotebook", "MetaCharacters", "MetaInformation", "MeteorShowerData", "Method", "MethodOptions", "MexicanHatWavelet", "MeyerWavelet", "Midpoint", "Min", "MinColorDistance", "MinDate", "MinDetect", "MineralData", "MinFilter", "MinimalBy", "MinimalPolynomial", "MinimalStateSpaceModel", "Minimize", "MinimumTimeIncrement", "MinIntervalSize", "MinkowskiQuestionMark", "MinLimit", "MinMax", "MinorPlanetData", "Minors", "MinRecursion", "MinSize", "MinStableDistribution", "Minus", "MinusPlus", "MinValue", "Missing", "MissingBehavior", "MissingDataMethod", "MissingDataRules", "MissingQ", "MissingString", "MissingStyle", "MissingValuePattern", "MittagLefflerE", "MixedFractionParts", "MixedGraphQ", "MixedMagnitude", "MixedRadix", "MixedRadixQuantity", "MixedUnit", "MixtureDistribution", "Mod", "Modal", "Mode", "Modular", "ModularInverse", "ModularLambda", "Module", "Modulus", "MoebiusMu", "Molecule", "MoleculeContainsQ", "MoleculeEquivalentQ", "MoleculeGraph", "MoleculeModify", "MoleculePattern", "MoleculePlot", "MoleculePlot3D", "MoleculeProperty", "MoleculeQ", "MoleculeRecognize", "MoleculeValue", "Moment", "Momentary", "MomentConvert", "MomentEvaluate", "MomentGeneratingFunction", "MomentOfInertia", "Monday", "Monitor", "MonomialList", "MonomialOrder", "MonsterGroupM", "MoonPhase", "MoonPosition", "MorletWavelet", "MorphologicalBinarize", "MorphologicalBranchPoints", "MorphologicalComponents", "MorphologicalEulerNumber", "MorphologicalGraph", "MorphologicalPerimeter", "MorphologicalTransform", "MortalityData", "Most", "MountainData", "MouseAnnotation", "MouseAppearance", "MouseAppearanceTag", "MouseButtons", "Mouseover", "MousePointerNote", "MousePosition", "MovieData", "MovingAverage", "MovingMap", "MovingMedian", "MoyalDistribution", "Multicolumn", "MultiedgeStyle", "MultigraphQ", "MultilaunchWarning", "MultiLetterItalics", "MultiLetterStyle", "MultilineFunction", "Multinomial", "MultinomialDistribution", "MultinormalDistribution", "MultiplicativeOrder", "Multiplicity", "MultiplySides", "Multiselection", "MultivariateHypergeometricDistribution", "MultivariatePoissonDistribution", "MultivariateTDistribution", "N", "NakagamiDistribution", "NameQ", "Names", "NamespaceBox", "NamespaceBoxOptions", "Nand", "NArgMax", "NArgMin", "NBernoulliB", "NBodySimulation", "NBodySimulationData", "NCache", "NDEigensystem", "NDEigenvalues", "NDSolve", "NDSolveValue", "Nearest", "NearestFunction", "NearestMeshCells", "NearestNeighborGraph", "NearestTo", "NebulaData", "NeedCurrentFrontEndPackagePacket", "NeedCurrentFrontEndSymbolsPacket", "NeedlemanWunschSimilarity", "Needs", "Negative", "NegativeBinomialDistribution", "NegativeDefiniteMatrixQ", "NegativeIntegers", "NegativeMultinomialDistribution", "NegativeRationals", "NegativeReals", "NegativeSemidefiniteMatrixQ", "NeighborhoodData", "NeighborhoodGraph", "Nest", "NestedGreaterGreater", "NestedLessLess", "NestedScriptRules", "NestGraph", "NestList", "NestWhile", "NestWhileList", "NetAppend", "NetBidirectionalOperator", "NetChain", "NetDecoder", "NetDelete", "NetDrop", "NetEncoder", "NetEvaluationMode", "NetExtract", "NetFlatten", "NetFoldOperator", "NetGANOperator", "NetGraph", "NetInformation", "NetInitialize", "NetInsert", "NetInsertSharedArrays", "NetJoin", "NetMapOperator", "NetMapThreadOperator", "NetMeasurements", "NetModel", "NetNestOperator", "NetPairEmbeddingOperator", "NetPort", "NetPortGradient", "NetPrepend", "NetRename", "NetReplace", "NetReplacePart", "NetSharedArray", "NetStateObject", "NetTake", "NetTrain", "NetTrainResultsObject", "NetworkPacketCapture", "NetworkPacketRecording", "NetworkPacketRecordingDuring", "NetworkPacketTrace", "NeumannValue", "NevilleThetaC", "NevilleThetaD", "NevilleThetaN", "NevilleThetaS", "NewPrimitiveStyle", "NExpectation", "Next", "NextCell", "NextDate", "NextPrime", "NextScheduledTaskTime", "NHoldAll", "NHoldFirst", "NHoldRest", "NicholsGridLines", "NicholsPlot", "NightHemisphere", "NIntegrate", "NMaximize", "NMaxValue", "NMinimize", "NMinValue", "NominalVariables", "NonAssociative", "NoncentralBetaDistribution", "NoncentralChiSquareDistribution", "NoncentralFRatioDistribution", "NoncentralStudentTDistribution", "NonCommutativeMultiply", "NonConstants", "NondimensionalizationTransform", "None", "NoneTrue", "NonlinearModelFit", "NonlinearStateSpaceModel", "NonlocalMeansFilter", "NonNegative", "NonNegativeIntegers", "NonNegativeRationals", "NonNegativeReals", "NonPositive", "NonPositiveIntegers", "NonPositiveRationals", "NonPositiveReals", "Nor", "NorlundB", "Norm", "Normal", "NormalDistribution", "NormalGrouping", "NormalizationLayer", "Normalize", "Normalized", "NormalizedSquaredEuclideanDistance", "NormalMatrixQ", "NormalsFunction", "NormFunction", "Not", "NotCongruent", "NotCupCap", "NotDoubleVerticalBar", "Notebook", "NotebookApply", "NotebookAutoSave", "NotebookClose", "NotebookConvertSettings", "NotebookCreate", "NotebookCreateReturnObject", "NotebookDefault", "NotebookDelete", "NotebookDirectory", "NotebookDynamicExpression", "NotebookEvaluate", "NotebookEventActions", "NotebookFileName", "NotebookFind", "NotebookFindReturnObject", "NotebookGet", "NotebookGetLayoutInformationPacket", "NotebookGetMisspellingsPacket", "NotebookImport", "NotebookInformation", "NotebookInterfaceObject", "NotebookLocate", "NotebookObject", "NotebookOpen", "NotebookOpenReturnObject", "NotebookPath", "NotebookPrint", "NotebookPut", "NotebookPutReturnObject", "NotebookRead", "NotebookResetGeneratedCells", "Notebooks", "NotebookSave", "NotebookSaveAs", "NotebookSelection", "NotebookSetupLayoutInformationPacket", "NotebooksMenu", "NotebookTemplate", "NotebookWrite", "NotElement", "NotEqualTilde", "NotExists", "NotGreater", "NotGreaterEqual", "NotGreaterFullEqual", "NotGreaterGreater", "NotGreaterLess", "NotGreaterSlantEqual", "NotGreaterTilde", "Nothing", "NotHumpDownHump", "NotHumpEqual", "NotificationFunction", "NotLeftTriangle", "NotLeftTriangleBar", "NotLeftTriangleEqual", "NotLess", "NotLessEqual", "NotLessFullEqual", "NotLessGreater", "NotLessLess", "NotLessSlantEqual", "NotLessTilde", "NotNestedGreaterGreater", "NotNestedLessLess", "NotPrecedes", "NotPrecedesEqual", "NotPrecedesSlantEqual", "NotPrecedesTilde", "NotReverseElement", "NotRightTriangle", "NotRightTriangleBar", "NotRightTriangleEqual", "NotSquareSubset", "NotSquareSubsetEqual", "NotSquareSuperset", "NotSquareSupersetEqual", "NotSubset", "NotSubsetEqual", "NotSucceeds", "NotSucceedsEqual", "NotSucceedsSlantEqual", "NotSucceedsTilde", "NotSuperset", "NotSupersetEqual", "NotTilde", "NotTildeEqual", "NotTildeFullEqual", "NotTildeTilde", "NotVerticalBar", "Now", "NoWhitespace", "NProbability", "NProduct", "NProductFactors", "NRoots", "NSolve", "NSum", "NSumTerms", "NuclearExplosionData", "NuclearReactorData", "Null", "NullRecords", "NullSpace", "NullWords", "Number", "NumberCompose", "NumberDecompose", "NumberExpand", "NumberFieldClassNumber", "NumberFieldDiscriminant", "NumberFieldFundamentalUnits", "NumberFieldIntegralBasis", "NumberFieldNormRepresentatives", "NumberFieldRegulator", "NumberFieldRootsOfUnity", "NumberFieldSignature", "NumberForm", "NumberFormat", "NumberLinePlot", "NumberMarks", "NumberMultiplier", "NumberPadding", "NumberPoint", "NumberQ", "NumberSeparator", "NumberSigns", "NumberString", "Numerator", "NumeratorDenominator", "NumericalOrder", "NumericalSort", "NumericArray", "NumericArrayQ", "NumericArrayType", "NumericFunction", "NumericQ", "NuttallWindow", "NValues", "NyquistGridLines", "NyquistPlot", "O", "ObservabilityGramian", "ObservabilityMatrix", "ObservableDecomposition", "ObservableModelQ", "OceanData", "Octahedron", "OddQ", "Off", "Offset", "OLEData", "On", "ONanGroupON", "Once", "OneIdentity", "Opacity", "OpacityFunction", "OpacityFunctionScaling", "Open", "OpenAppend", "Opener", "OpenerBox", "OpenerBoxOptions", "OpenerView", "OpenFunctionInspectorPacket", "Opening", "OpenRead", "OpenSpecialOptions", "OpenTemporary", "OpenWrite", "Operate", "OperatingSystem", "OperatorApplied", "OptimumFlowData", "Optional", "OptionalElement", "OptionInspectorSettings", "OptionQ", "Options", "OptionsPacket", "OptionsPattern", "OptionValue", "OptionValueBox", "OptionValueBoxOptions", "Or", "Orange", "Order", "OrderDistribution", "OrderedQ", "Ordering", "OrderingBy", "OrderingLayer", "Orderless", "OrderlessPatternSequence", "OrnsteinUhlenbeckProcess", "Orthogonalize", "OrthogonalMatrixQ", "Out", "Outer", "OuterPolygon", "OuterPolyhedron", "OutputAutoOverwrite", "OutputControllabilityMatrix", "OutputControllableModelQ", "OutputForm", "OutputFormData", "OutputGrouping", "OutputMathEditExpression", "OutputNamePacket", "OutputResponse", "OutputSizeLimit", "OutputStream", "Over", "OverBar", "OverDot", "Overflow", "OverHat", "Overlaps", "Overlay", "OverlayBox", "OverlayBoxOptions", "Overscript", "OverscriptBox", "OverscriptBoxOptions", "OverTilde", "OverVector", "OverwriteTarget", "OwenT", "OwnValues", "Package", "PackingMethod", "PackPaclet", "PacletDataRebuild", "PacletDirectoryAdd", "PacletDirectoryLoad", "PacletDirectoryRemove", "PacletDirectoryUnload", "PacletDisable", "PacletEnable", "PacletFind", "PacletFindRemote", "PacletInformation", "PacletInstall", "PacletInstallSubmit", "PacletNewerQ", "PacletObject", "PacletObjectQ", "PacletSite", "PacletSiteObject", "PacletSiteRegister", "PacletSites", "PacletSiteUnregister", "PacletSiteUpdate", "PacletUninstall", "PacletUpdate", "PaddedForm", "Padding", "PaddingLayer", "PaddingSize", "PadeApproximant", "PadLeft", "PadRight", "PageBreakAbove", "PageBreakBelow", "PageBreakWithin", "PageFooterLines", "PageFooters", "PageHeaderLines", "PageHeaders", "PageHeight", "PageRankCentrality", "PageTheme", "PageWidth", "Pagination", "PairedBarChart", "PairedHistogram", "PairedSmoothHistogram", "PairedTTest", "PairedZTest", "PaletteNotebook", "PalettePath", "PalindromeQ", "Pane", "PaneBox", "PaneBoxOptions", "Panel", "PanelBox", "PanelBoxOptions", "Paneled", "PaneSelector", "PaneSelectorBox", "PaneSelectorBoxOptions", "PaperWidth", "ParabolicCylinderD", "ParagraphIndent", "ParagraphSpacing", "ParallelArray", "ParallelCombine", "ParallelDo", "Parallelepiped", "ParallelEvaluate", "Parallelization", "Parallelize", "ParallelMap", "ParallelNeeds", "Parallelogram", "ParallelProduct", "ParallelSubmit", "ParallelSum", "ParallelTable", "ParallelTry", "Parameter", "ParameterEstimator", "ParameterMixtureDistribution", "ParameterVariables", "ParametricFunction", "ParametricNDSolve", "ParametricNDSolveValue", "ParametricPlot", "ParametricPlot3D", "ParametricRampLayer", "ParametricRegion", "ParentBox", "ParentCell", "ParentConnect", "ParentDirectory", "ParentForm", "Parenthesize", "ParentList", "ParentNotebook", "ParetoDistribution", "ParetoPickandsDistribution", "ParkData", "Part", "PartBehavior", "PartialCorrelationFunction", "PartialD", "ParticleAcceleratorData", "ParticleData", "Partition", "PartitionGranularity", "PartitionsP", "PartitionsQ", "PartLayer", "PartOfSpeech", "PartProtection", "ParzenWindow", "PascalDistribution", "PassEventsDown", "PassEventsUp", "Paste", "PasteAutoQuoteCharacters", "PasteBoxFormInlineCells", "PasteButton", "Path", "PathGraph", "PathGraphQ", "Pattern", "PatternFilling", "PatternSequence", "PatternTest", "PauliMatrix", "PaulWavelet", "Pause", "PausedTime", "PDF", "PeakDetect", "PeanoCurve", "PearsonChiSquareTest", "PearsonCorrelationTest", "PearsonDistribution", "PercentForm", "PerfectNumber", "PerfectNumberQ", "PerformanceGoal", "Perimeter", "PeriodicBoundaryCondition", "PeriodicInterpolation", "Periodogram", "PeriodogramArray", "Permanent", "Permissions", "PermissionsGroup", "PermissionsGroupMemberQ", "PermissionsGroups", "PermissionsKey", "PermissionsKeys", "PermutationCycles", "PermutationCyclesQ", "PermutationGroup", "PermutationLength", "PermutationList", "PermutationListQ", "PermutationMax", "PermutationMin", "PermutationOrder", "PermutationPower", "PermutationProduct", "PermutationReplace", "Permutations", "PermutationSupport", "Permute", "PeronaMalikFilter", "Perpendicular", "PerpendicularBisector", "PersistenceLocation", "PersistenceTime", "PersistentObject", "PersistentObjects", "PersistentValue", "PersonData", "PERTDistribution", "PetersenGraph", "PhaseMargins", "PhaseRange", "PhysicalSystemData", "Pi", "Pick", "PIDData", "PIDDerivativeFilter", "PIDFeedforward", "PIDTune", "Piecewise", "PiecewiseExpand", "PieChart", "PieChart3D", "PillaiTrace", "PillaiTraceTest", "PingTime", "Pink", "PitchRecognize", "Pivoting", "PixelConstrained", "PixelValue", "PixelValuePositions", "Placed", "Placeholder", "PlaceholderReplace", "Plain", "PlanarAngle", "PlanarGraph", "PlanarGraphQ", "PlanckRadiationLaw", "PlaneCurveData", "PlanetaryMoonData", "PlanetData", "PlantData", "Play", "PlayRange", "Plot", "Plot3D", "Plot3Matrix", "PlotDivision", "PlotJoined", "PlotLabel", "PlotLabels", "PlotLayout", "PlotLegends", "PlotMarkers", "PlotPoints", "PlotRange", "PlotRangeClipping", "PlotRangeClipPlanesStyle", "PlotRangePadding", "PlotRegion", "PlotStyle", "PlotTheme", "Pluralize", "Plus", "PlusMinus", "Pochhammer", "PodStates", "PodWidth", "Point", "Point3DBox", "Point3DBoxOptions", "PointBox", "PointBoxOptions", "PointFigureChart", "PointLegend", "PointSize", "PoissonConsulDistribution", "PoissonDistribution", "PoissonProcess", "PoissonWindow", "PolarAxes", "PolarAxesOrigin", "PolarGridLines", "PolarPlot", "PolarTicks", "PoleZeroMarkers", "PolyaAeppliDistribution", "PolyGamma", "Polygon", "Polygon3DBox", "Polygon3DBoxOptions", "PolygonalNumber", "PolygonAngle", "PolygonBox", "PolygonBoxOptions", "PolygonCoordinates", "PolygonDecomposition", "PolygonHoleScale", "PolygonIntersections", "PolygonScale", "Polyhedron", "PolyhedronAngle", "PolyhedronCoordinates", "PolyhedronData", "PolyhedronDecomposition", "PolyhedronGenus", "PolyLog", "PolynomialExtendedGCD", "PolynomialForm", "PolynomialGCD", "PolynomialLCM", "PolynomialMod", "PolynomialQ", "PolynomialQuotient", "PolynomialQuotientRemainder", "PolynomialReduce", "PolynomialRemainder", "Polynomials", "PoolingLayer", "PopupMenu", "PopupMenuBox", "PopupMenuBoxOptions", "PopupView", "PopupWindow", "Position", "PositionIndex", "Positive", "PositiveDefiniteMatrixQ", "PositiveIntegers", "PositiveRationals", "PositiveReals", "PositiveSemidefiniteMatrixQ", "PossibleZeroQ", "Postfix", "PostScript", "Power", "PowerDistribution", "PowerExpand", "PowerMod", "PowerModList", "PowerRange", "PowerSpectralDensity", "PowersRepresentations", "PowerSymmetricPolynomial", "Precedence", "PrecedenceForm", "Precedes", "PrecedesEqual", "PrecedesSlantEqual", "PrecedesTilde", "Precision", "PrecisionGoal", "PreDecrement", "Predict", "PredictionRoot", "PredictorFunction", "PredictorInformation", "PredictorMeasurements", "PredictorMeasurementsObject", "PreemptProtect", "PreferencesPath", "Prefix", "PreIncrement", "Prepend", "PrependLayer", "PrependTo", "PreprocessingRules", "PreserveColor", "PreserveImageOptions", "Previous", "PreviousCell", "PreviousDate", "PriceGraphDistribution", "PrimaryPlaceholder", "Prime", "PrimeNu", "PrimeOmega", "PrimePi", "PrimePowerQ", "PrimeQ", "Primes", "PrimeZetaP", "PrimitivePolynomialQ", "PrimitiveRoot", "PrimitiveRootList", "PrincipalComponents", "PrincipalValue", "Print", "PrintableASCIIQ", "PrintAction", "PrintForm", "PrintingCopies", "PrintingOptions", "PrintingPageRange", "PrintingStartingPageNumber", "PrintingStyleEnvironment", "Printout3D", "Printout3DPreviewer", "PrintPrecision", "PrintTemporary", "Prism", "PrismBox", "PrismBoxOptions", "PrivateCellOptions", "PrivateEvaluationOptions", "PrivateFontOptions", "PrivateFrontEndOptions", "PrivateKey", "PrivateNotebookOptions", "PrivatePaths", "Probability", "ProbabilityDistribution", "ProbabilityPlot", "ProbabilityPr", "ProbabilityScalePlot", "ProbitModelFit", "ProcessConnection", "ProcessDirectory", "ProcessEnvironment", "Processes", "ProcessEstimator", "ProcessInformation", "ProcessObject", "ProcessParameterAssumptions", "ProcessParameterQ", "ProcessStateDomain", "ProcessStatus", "ProcessTimeDomain", "Product", "ProductDistribution", "ProductLog", "ProgressIndicator", "ProgressIndicatorBox", "ProgressIndicatorBoxOptions", "Projection", "Prolog", "PromptForm", "ProofObject", "Properties", "Property", "PropertyList", "PropertyValue", "Proportion", "Proportional", "Protect", "Protected", "ProteinData", "Pruning", "PseudoInverse", "PsychrometricPropertyData", "PublicKey", "PublisherID", "PulsarData", "PunctuationCharacter", "Purple", "Put", "PutAppend", "Pyramid", "PyramidBox", "PyramidBoxOptions", "QBinomial", "QFactorial", "QGamma", "QHypergeometricPFQ", "QnDispersion", "QPochhammer", "QPolyGamma", "QRDecomposition", "QuadraticIrrationalQ", "QuadraticOptimization", "Quantile", "QuantilePlot", "Quantity", "QuantityArray", "QuantityDistribution", "QuantityForm", "QuantityMagnitude", "QuantityQ", "QuantityUnit", "QuantityVariable", "QuantityVariableCanonicalUnit", "QuantityVariableDimensions", "QuantityVariableIdentifier", "QuantityVariablePhysicalQuantity", "Quartics", "QuartileDeviation", "Quartiles", "QuartileSkewness", "Query", "QueueingNetworkProcess", "QueueingProcess", "QueueProperties", "Quiet", "Quit", "Quotient", "QuotientRemainder", "RadialGradientImage", "RadialityCentrality", "RadicalBox", "RadicalBoxOptions", "RadioButton", "RadioButtonBar", "RadioButtonBox", "RadioButtonBoxOptions", "Radon", "RadonTransform", "RamanujanTau", "RamanujanTauL", "RamanujanTauTheta", "RamanujanTauZ", "Ramp", "Random", "RandomChoice", "RandomColor", "RandomComplex", "RandomEntity", "RandomFunction", "RandomGeoPosition", "RandomGraph", "RandomImage", "RandomInstance", "RandomInteger", "RandomPermutation", "RandomPoint", "RandomPolygon", "RandomPolyhedron", "RandomPrime", "RandomReal", "RandomSample", "RandomSeed", "RandomSeeding", "RandomVariate", "RandomWalkProcess", "RandomWord", "Range", "RangeFilter", "RangeSpecification", "RankedMax", "RankedMin", "RarerProbability", "Raster", "Raster3D", "Raster3DBox", "Raster3DBoxOptions", "RasterArray", "RasterBox", "RasterBoxOptions", "Rasterize", "RasterSize", "Rational", "RationalFunctions", "Rationalize", "Rationals", "Ratios", "RawArray", "RawBoxes", "RawData", "RawMedium", "RayleighDistribution", "Re", "Read", "ReadByteArray", "ReadLine", "ReadList", "ReadProtected", "ReadString", "Real", "RealAbs", "RealBlockDiagonalForm", "RealDigits", "RealExponent", "Reals", "RealSign", "Reap", "RebuildPacletData", "RecognitionPrior", "RecognitionThreshold", "Record", "RecordLists", "RecordSeparators", "Rectangle", "RectangleBox", "RectangleBoxOptions", "RectangleChart", "RectangleChart3D", "RectangularRepeatingElement", "RecurrenceFilter", "RecurrenceTable", "RecurringDigitsForm", "Red", "Reduce", "RefBox", "ReferenceLineStyle", "ReferenceMarkers", "ReferenceMarkerStyle", "Refine", "ReflectionMatrix", "ReflectionTransform", "Refresh", "RefreshRate", "Region", "RegionBinarize", "RegionBoundary", "RegionBoundaryStyle", "RegionBounds", "RegionCentroid", "RegionDifference", "RegionDimension", "RegionDisjoint", "RegionDistance", "RegionDistanceFunction", "RegionEmbeddingDimension", "RegionEqual", "RegionFillingStyle", "RegionFunction", "RegionImage", "RegionIntersection", "RegionMeasure", "RegionMember", "RegionMemberFunction", "RegionMoment", "RegionNearest", "RegionNearestFunction", "RegionPlot", "RegionPlot3D", "RegionProduct", "RegionQ", "RegionResize", "RegionSize", "RegionSymmetricDifference", "RegionUnion", "RegionWithin", "RegisterExternalEvaluator", "RegularExpression", "Regularization", "RegularlySampledQ", "RegularPolygon", "ReIm", "ReImLabels", "ReImPlot", "ReImStyle", "Reinstall", "RelationalDatabase", "RelationGraph", "Release", "ReleaseHold", "ReliabilityDistribution", "ReliefImage", "ReliefPlot", "RemoteAuthorizationCaching", "RemoteConnect", "RemoteConnectionObject", "RemoteFile", "RemoteRun", "RemoteRunProcess", "Remove", "RemoveAlphaChannel", "RemoveAsynchronousTask", "RemoveAudioStream", "RemoveBackground", "RemoveChannelListener", "RemoveChannelSubscribers", "Removed", "RemoveDiacritics", "RemoveInputStreamMethod", "RemoveOutputStreamMethod", "RemoveProperty", "RemoveScheduledTask", "RemoveUsers", "RemoveVideoStream", "RenameDirectory", "RenameFile", "RenderAll", "RenderingOptions", "RenewalProcess", "RenkoChart", "RepairMesh", "Repeated", "RepeatedNull", "RepeatedString", "RepeatedTiming", "RepeatingElement", "Replace", "ReplaceAll", "ReplaceHeldPart", "ReplaceImageValue", "ReplaceList", "ReplacePart", "ReplacePixelValue", "ReplaceRepeated", "ReplicateLayer", "RequiredPhysicalQuantities", "Resampling", "ResamplingAlgorithmData", "ResamplingMethod", "Rescale", "RescalingTransform", "ResetDirectory", "ResetMenusPacket", "ResetScheduledTask", "ReshapeLayer", "Residue", "ResizeLayer", "Resolve", "ResourceAcquire", "ResourceData", "ResourceFunction", "ResourceObject", "ResourceRegister", "ResourceRemove", "ResourceSearch", "ResourceSubmissionObject", "ResourceSubmit", "ResourceSystemBase", "ResourceSystemPath", "ResourceUpdate", "ResourceVersion", "ResponseForm", "Rest", "RestartInterval", "Restricted", "Resultant", "ResumePacket", "Return", "ReturnEntersInput", "ReturnExpressionPacket", "ReturnInputFormPacket", "ReturnPacket", "ReturnReceiptFunction", "ReturnTextPacket", "Reverse", "ReverseApplied", "ReverseBiorthogonalSplineWavelet", "ReverseElement", "ReverseEquilibrium", "ReverseGraph", "ReverseSort", "ReverseSortBy", "ReverseUpEquilibrium", "RevolutionAxis", "RevolutionPlot3D", "RGBColor", "RiccatiSolve", "RiceDistribution", "RidgeFilter", "RiemannR", "RiemannSiegelTheta", "RiemannSiegelZ", "RiemannXi", "Riffle", "Right", "RightArrow", "RightArrowBar", "RightArrowLeftArrow", "RightComposition", "RightCosetRepresentative", "RightDownTeeVector", "RightDownVector", "RightDownVectorBar", "RightTee", "RightTeeArrow", "RightTeeVector", "RightTriangle", "RightTriangleBar", "RightTriangleEqual", "RightUpDownVector", "RightUpTeeVector", "RightUpVector", "RightUpVectorBar", "RightVector", "RightVectorBar", "RiskAchievementImportance", "RiskReductionImportance", "RogersTanimotoDissimilarity", "RollPitchYawAngles", "RollPitchYawMatrix", "RomanNumeral", "Root", "RootApproximant", "RootIntervals", "RootLocusPlot", "RootMeanSquare", "RootOfUnityQ", "RootReduce", "Roots", "RootSum", "Rotate", "RotateLabel", "RotateLeft", "RotateRight", "RotationAction", "RotationBox", "RotationBoxOptions", "RotationMatrix", "RotationTransform", "Round", "RoundImplies", "RoundingRadius", "Row", "RowAlignments", "RowBackgrounds", "RowBox", "RowHeights", "RowLines", "RowMinHeight", "RowReduce", "RowsEqual", "RowSpacings", "RSolve", "RSolveValue", "RudinShapiro", "RudvalisGroupRu", "Rule", "RuleCondition", "RuleDelayed", "RuleForm", "RulePlot", "RulerUnits", "Run", "RunProcess", "RunScheduledTask", "RunThrough", "RuntimeAttributes", "RuntimeOptions", "RussellRaoDissimilarity", "SameQ", "SameTest", "SameTestProperties", "SampledEntityClass", "SampleDepth", "SampledSoundFunction", "SampledSoundList", "SampleRate", "SamplingPeriod", "SARIMAProcess", "SARMAProcess", "SASTriangle", "SatelliteData", "SatisfiabilityCount", "SatisfiabilityInstances", "SatisfiableQ", "Saturday", "Save", "Saveable", "SaveAutoDelete", "SaveConnection", "SaveDefinitions", "SavitzkyGolayMatrix", "SawtoothWave", "Scale", "Scaled", "ScaleDivisions", "ScaledMousePosition", "ScaleOrigin", "ScalePadding", "ScaleRanges", "ScaleRangeStyle", "ScalingFunctions", "ScalingMatrix", "ScalingTransform", "Scan", "ScheduledTask", "ScheduledTaskActiveQ", "ScheduledTaskInformation", "ScheduledTaskInformationData", "ScheduledTaskObject", "ScheduledTasks", "SchurDecomposition", "ScientificForm", "ScientificNotationThreshold", "ScorerGi", "ScorerGiPrime", "ScorerHi", "ScorerHiPrime", "ScreenRectangle", "ScreenStyleEnvironment", "ScriptBaselineShifts", "ScriptForm", "ScriptLevel", "ScriptMinSize", "ScriptRules", "ScriptSizeMultipliers", "Scrollbars", "ScrollingOptions", "ScrollPosition", "SearchAdjustment", "SearchIndexObject", "SearchIndices", "SearchQueryString", "SearchResultObject", "Sec", "Sech", "SechDistribution", "SecondOrderConeOptimization", "SectionGrouping", "SectorChart", "SectorChart3D", "SectorOrigin", "SectorSpacing", "SecuredAuthenticationKey", "SecuredAuthenticationKeys", "SeedRandom", "Select", "Selectable", "SelectComponents", "SelectedCells", "SelectedNotebook", "SelectFirst", "Selection", "SelectionAnimate", "SelectionCell", "SelectionCellCreateCell", "SelectionCellDefaultStyle", "SelectionCellParentStyle", "SelectionCreateCell", "SelectionDebuggerTag", "SelectionDuplicateCell", "SelectionEvaluate", "SelectionEvaluateCreateCell", "SelectionMove", "SelectionPlaceholder", "SelectionSetStyle", "SelectWithContents", "SelfLoops", "SelfLoopStyle", "SemanticImport", "SemanticImportString", "SemanticInterpretation", "SemialgebraicComponentInstances", "SemidefiniteOptimization", "SendMail", "SendMessage", "Sequence", "SequenceAlignment", "SequenceAttentionLayer", "SequenceCases", "SequenceCount", "SequenceFold", "SequenceFoldList", "SequenceForm", "SequenceHold", "SequenceLastLayer", "SequenceMostLayer", "SequencePosition", "SequencePredict", "SequencePredictorFunction", "SequenceReplace", "SequenceRestLayer", "SequenceReverseLayer", "SequenceSplit", "Series", "SeriesCoefficient", "SeriesData", "SeriesTermGoal", "ServiceConnect", "ServiceDisconnect", "ServiceExecute", "ServiceObject", "ServiceRequest", "ServiceResponse", "ServiceSubmit", "SessionSubmit", "SessionTime", "Set", "SetAccuracy", "SetAlphaChannel", "SetAttributes", "Setbacks", "SetBoxFormNamesPacket", "SetCloudDirectory", "SetCookies", "SetDelayed", "SetDirectory", "SetEnvironment", "SetEvaluationNotebook", "SetFileDate", "SetFileLoadingContext", "SetNotebookStatusLine", "SetOptions", "SetOptionsPacket", "SetPermissions", "SetPrecision", "SetProperty", "SetSecuredAuthenticationKey", "SetSelectedNotebook", "SetSharedFunction", "SetSharedVariable", "SetSpeechParametersPacket", "SetStreamPosition", "SetSystemModel", "SetSystemOptions", "Setter", "SetterBar", "SetterBox", "SetterBoxOptions", "Setting", "SetUsers", "SetValue", "Shading", "Shallow", "ShannonWavelet", "ShapiroWilkTest", "Share", "SharingList", "Sharpen", "ShearingMatrix", "ShearingTransform", "ShellRegion", "ShenCastanMatrix", "ShiftedGompertzDistribution", "ShiftRegisterSequence", "Short", "ShortDownArrow", "Shortest", "ShortestMatch", "ShortestPathFunction", "ShortLeftArrow", "ShortRightArrow", "ShortTimeFourier", "ShortTimeFourierData", "ShortUpArrow", "Show", "ShowAutoConvert", "ShowAutoSpellCheck", "ShowAutoStyles", "ShowCellBracket", "ShowCellLabel", "ShowCellTags", "ShowClosedCellArea", "ShowCodeAssist", "ShowContents", "ShowControls", "ShowCursorTracker", "ShowGroupOpenCloseIcon", "ShowGroupOpener", "ShowInvisibleCharacters", "ShowPageBreaks", "ShowPredictiveInterface", "ShowSelection", "ShowShortBoxForm", "ShowSpecialCharacters", "ShowStringCharacters", "ShowSyntaxStyles", "ShrinkingDelay", "ShrinkWrapBoundingBox", "SiderealTime", "SiegelTheta", "SiegelTukeyTest", "SierpinskiCurve", "SierpinskiMesh", "Sign", "Signature", "SignedRankTest", "SignedRegionDistance", "SignificanceLevel", "SignPadding", "SignTest", "SimilarityRules", "SimpleGraph", "SimpleGraphQ", "SimplePolygonQ", "SimplePolyhedronQ", "Simplex", "Simplify", "Sin", "Sinc", "SinghMaddalaDistribution", "SingleEvaluation", "SingleLetterItalics", "SingleLetterStyle", "SingularValueDecomposition", "SingularValueList", "SingularValuePlot", "SingularValues", "Sinh", "SinhIntegral", "SinIntegral", "SixJSymbol", "Skeleton", "SkeletonTransform", "SkellamDistribution", "Skewness", "SkewNormalDistribution", "SkinStyle", "Skip", "SliceContourPlot3D", "SliceDensityPlot3D", "SliceDistribution", "SliceVectorPlot3D", "Slider", "Slider2D", "Slider2DBox", "Slider2DBoxOptions", "SliderBox", "SliderBoxOptions", "SlideView", "Slot", "SlotSequence", "Small", "SmallCircle", "Smaller", "SmithDecomposition", "SmithDelayCompensator", "SmithWatermanSimilarity", "SmoothDensityHistogram", "SmoothHistogram", "SmoothHistogram3D", "SmoothKernelDistribution", "SnDispersion", "Snippet", "SnubPolyhedron", "SocialMediaData", "Socket", "SocketConnect", "SocketListen", "SocketListener", "SocketObject", "SocketOpen", "SocketReadMessage", "SocketReadyQ", "Sockets", "SocketWaitAll", "SocketWaitNext", "SoftmaxLayer", "SokalSneathDissimilarity", "SolarEclipse", "SolarSystemFeatureData", "SolidAngle", "SolidData", "SolidRegionQ", "Solve", "SolveAlways", "SolveDelayed", "Sort", "SortBy", "SortedBy", "SortedEntityClass", "Sound", "SoundAndGraphics", "SoundNote", "SoundVolume", "SourceLink", "Sow", "Space", "SpaceCurveData", "SpaceForm", "Spacer", "Spacings", "Span", "SpanAdjustments", "SpanCharacterRounding", "SpanFromAbove", "SpanFromBoth", "SpanFromLeft", "SpanLineThickness", "SpanMaxSize", "SpanMinSize", "SpanningCharacters", "SpanSymmetric", "SparseArray", "SpatialGraphDistribution", "SpatialMedian", "SpatialTransformationLayer", "Speak", "SpeakerMatchQ", "SpeakTextPacket", "SpearmanRankTest", "SpearmanRho", "SpeciesData", "SpecificityGoal", "SpectralLineData", "Spectrogram", "SpectrogramArray", "Specularity", "SpeechCases", "SpeechInterpreter", "SpeechRecognize", "SpeechSynthesize", "SpellingCorrection", "SpellingCorrectionList", "SpellingDictionaries", "SpellingDictionariesPath", "SpellingOptions", "SpellingSuggestionsPacket", "Sphere", "SphereBox", "SpherePoints", "SphericalBesselJ", "SphericalBesselY", "SphericalHankelH1", "SphericalHankelH2", "SphericalHarmonicY", "SphericalPlot3D", "SphericalRegion", "SphericalShell", "SpheroidalEigenvalue", "SpheroidalJoiningFactor", "SpheroidalPS", "SpheroidalPSPrime", "SpheroidalQS", "SpheroidalQSPrime", "SpheroidalRadialFactor", "SpheroidalS1", "SpheroidalS1Prime", "SpheroidalS2", "SpheroidalS2Prime", "Splice", "SplicedDistribution", "SplineClosed", "SplineDegree", "SplineKnots", "SplineWeights", "Split", "SplitBy", "SpokenString", "Sqrt", "SqrtBox", "SqrtBoxOptions", "Square", "SquaredEuclideanDistance", "SquareFreeQ", "SquareIntersection", "SquareMatrixQ", "SquareRepeatingElement", "SquaresR", "SquareSubset", "SquareSubsetEqual", "SquareSuperset", "SquareSupersetEqual", "SquareUnion", "SquareWave", "SSSTriangle", "StabilityMargins", "StabilityMarginsStyle", "StableDistribution", "Stack", "StackBegin", "StackComplete", "StackedDateListPlot", "StackedListPlot", "StackInhibit", "StadiumShape", "StandardAtmosphereData", "StandardDeviation", "StandardDeviationFilter", "StandardForm", "Standardize", "Standardized", "StandardOceanData", "StandbyDistribution", "Star", "StarClusterData", "StarData", "StarGraph", "StartAsynchronousTask", "StartExternalSession", "StartingStepSize", "StartOfLine", "StartOfString", "StartProcess", "StartScheduledTask", "StartupSound", "StartWebSession", "StateDimensions", "StateFeedbackGains", "StateOutputEstimator", "StateResponse", "StateSpaceModel", "StateSpaceRealization", "StateSpaceTransform", "StateTransformationLinearize", "StationaryDistribution", "StationaryWaveletPacketTransform", "StationaryWaveletTransform", "StatusArea", "StatusCentrality", "StepMonitor", "StereochemistryElements", "StieltjesGamma", "StippleShading", "StirlingS1", "StirlingS2", "StopAsynchronousTask", "StoppingPowerData", "StopScheduledTask", "StrataVariables", "StratonovichProcess", "StreamColorFunction", "StreamColorFunctionScaling", "StreamDensityPlot", "StreamMarkers", "StreamPlot", "StreamPoints", "StreamPosition", "Streams", "StreamScale", "StreamStyle", "String", "StringBreak", "StringByteCount", "StringCases", "StringContainsQ", "StringCount", "StringDelete", "StringDrop", "StringEndsQ", "StringExpression", "StringExtract", "StringForm", "StringFormat", "StringFreeQ", "StringInsert", "StringJoin", "StringLength", "StringMatchQ", "StringPadLeft", "StringPadRight", "StringPart", "StringPartition", "StringPosition", "StringQ", "StringRepeat", "StringReplace", "StringReplaceList", "StringReplacePart", "StringReverse", "StringRiffle", "StringRotateLeft", "StringRotateRight", "StringSkeleton", "StringSplit", "StringStartsQ", "StringTake", "StringTemplate", "StringToByteArray", "StringToStream", "StringTrim", "StripBoxes", "StripOnInput", "StripWrapperBoxes", "StrokeForm", "StructuralImportance", "StructuredArray", "StructuredArrayHeadQ", "StructuredSelection", "StruveH", "StruveL", "Stub", "StudentTDistribution", "Style", "StyleBox", "StyleBoxAutoDelete", "StyleData", "StyleDefinitions", "StyleForm", "StyleHints", "StyleKeyMapping", "StyleMenuListing", "StyleNameDialogSettings", "StyleNames", "StylePrint", "StyleSheetPath", "Subdivide", "Subfactorial", "Subgraph", "SubMinus", "SubPlus", "SubresultantPolynomialRemainders", "SubresultantPolynomials", "Subresultants", "Subscript", "SubscriptBox", "SubscriptBoxOptions", "Subscripted", "Subsequences", "Subset", "SubsetCases", "SubsetCount", "SubsetEqual", "SubsetMap", "SubsetPosition", "SubsetQ", "SubsetReplace", "Subsets", "SubStar", "SubstitutionSystem", "Subsuperscript", "SubsuperscriptBox", "SubsuperscriptBoxOptions", "SubtitleEncoding", "SubtitleTracks", "Subtract", "SubtractFrom", "SubtractSides", "SubValues", "Succeeds", "SucceedsEqual", "SucceedsSlantEqual", "SucceedsTilde", "Success", "SuchThat", "Sum", "SumConvergence", "SummationLayer", "Sunday", "SunPosition", "Sunrise", "Sunset", "SuperDagger", "SuperMinus", "SupernovaData", "SuperPlus", "Superscript", "SuperscriptBox", "SuperscriptBoxOptions", "Superset", "SupersetEqual", "SuperStar", "Surd", "SurdForm", "SurfaceAppearance", "SurfaceArea", "SurfaceColor", "SurfaceData", "SurfaceGraphics", "SurvivalDistribution", "SurvivalFunction", "SurvivalModel", "SurvivalModelFit", "SuspendPacket", "SuzukiDistribution", "SuzukiGroupSuz", "SwatchLegend", "Switch", "Symbol", "SymbolName", "SymletWavelet", "Symmetric", "SymmetricGroup", "SymmetricKey", "SymmetricMatrixQ", "SymmetricPolynomial", "SymmetricReduction", "Symmetrize", "SymmetrizedArray", "SymmetrizedArrayRules", "SymmetrizedDependentComponents", "SymmetrizedIndependentComponents", "SymmetrizedReplacePart", "SynchronousInitialization", "SynchronousUpdating", "Synonyms", "Syntax", "SyntaxForm", "SyntaxInformation", "SyntaxLength", "SyntaxPacket", "SyntaxQ", "SynthesizeMissingValues", "SystemCredential", "SystemCredentialData", "SystemCredentialKey", "SystemCredentialKeys", "SystemCredentialStoreObject", "SystemDialogInput", "SystemException", "SystemGet", "SystemHelpPath", "SystemInformation", "SystemInformationData", "SystemInstall", "SystemModel", "SystemModeler", "SystemModelExamples", "SystemModelLinearize", "SystemModelParametricSimulate", "SystemModelPlot", "SystemModelProgressReporting", "SystemModelReliability", "SystemModels", "SystemModelSimulate", "SystemModelSimulateSensitivity", "SystemModelSimulationData", "SystemOpen", "SystemOptions", "SystemProcessData", "SystemProcesses", "SystemsConnectionsModel", "SystemsModelDelay", "SystemsModelDelayApproximate", "SystemsModelDelete", "SystemsModelDimensions", "SystemsModelExtract", "SystemsModelFeedbackConnect", "SystemsModelLabels", "SystemsModelLinearity", "SystemsModelMerge", "SystemsModelOrder", "SystemsModelParallelConnect", "SystemsModelSeriesConnect", "SystemsModelStateFeedbackConnect", "SystemsModelVectorRelativeOrders", "SystemStub", "SystemTest", "Tab", "TabFilling", "Table", "TableAlignments", "TableDepth", "TableDirections", "TableForm", "TableHeadings", "TableSpacing", "TableView", "TableViewBox", "TableViewBoxBackground", "TableViewBoxItemSize", "TableViewBoxOptions", "TabSpacings", "TabView", "TabViewBox", "TabViewBoxOptions", "TagBox", "TagBoxNote", "TagBoxOptions", "TaggingRules", "TagSet", "TagSetDelayed", "TagStyle", "TagUnset", "Take", "TakeDrop", "TakeLargest", "TakeLargestBy", "TakeList", "TakeSmallest", "TakeSmallestBy", "TakeWhile", "Tally", "Tan", "Tanh", "TargetDevice", "TargetFunctions", "TargetSystem", "TargetUnits", "TaskAbort", "TaskExecute", "TaskObject", "TaskRemove", "TaskResume", "Tasks", "TaskSuspend", "TaskWait", "TautologyQ", "TelegraphProcess", "TemplateApply", "TemplateArgBox", "TemplateBox", "TemplateBoxOptions", "TemplateEvaluate", "TemplateExpression", "TemplateIf", "TemplateObject", "TemplateSequence", "TemplateSlot", "TemplateSlotSequence", "TemplateUnevaluated", "TemplateVerbatim", "TemplateWith", "TemporalData", "TemporalRegularity", "Temporary", "TemporaryVariable", "TensorContract", "TensorDimensions", "TensorExpand", "TensorProduct", "TensorQ", "TensorRank", "TensorReduce", "TensorSymmetry", "TensorTranspose", "TensorWedge", "TestID", "TestReport", "TestReportObject", "TestResultObject", "Tetrahedron", "TetrahedronBox", "TetrahedronBoxOptions", "TeXForm", "TeXSave", "Text", "Text3DBox", "Text3DBoxOptions", "TextAlignment", "TextBand", "TextBoundingBox", "TextBox", "TextCases", "TextCell", "TextClipboardType", "TextContents", "TextData", "TextElement", "TextForm", "TextGrid", "TextJustification", "TextLine", "TextPacket", "TextParagraph", "TextPosition", "TextRecognize", "TextSearch", "TextSearchReport", "TextSentences", "TextString", "TextStructure", "TextStyle", "TextTranslation", "Texture", "TextureCoordinateFunction", "TextureCoordinateScaling", "TextWords", "Therefore", "ThermodynamicData", "ThermometerGauge", "Thick", "Thickness", "Thin", "Thinning", "ThisLink", "ThompsonGroupTh", "Thread", "ThreadingLayer", "ThreeJSymbol", "Threshold", "Through", "Throw", "ThueMorse", "Thumbnail", "Thursday", "Ticks", "TicksStyle", "TideData", "Tilde", "TildeEqual", "TildeFullEqual", "TildeTilde", "TimeConstrained", "TimeConstraint", "TimeDirection", "TimeFormat", "TimeGoal", "TimelinePlot", "TimeObject", "TimeObjectQ", "TimeRemaining", "Times", "TimesBy", "TimeSeries", "TimeSeriesAggregate", "TimeSeriesForecast", "TimeSeriesInsert", "TimeSeriesInvertibility", "TimeSeriesMap", "TimeSeriesMapThread", "TimeSeriesModel", "TimeSeriesModelFit", "TimeSeriesResample", "TimeSeriesRescale", "TimeSeriesShift", "TimeSeriesThread", "TimeSeriesWindow", "TimeUsed", "TimeValue", "TimeWarpingCorrespondence", "TimeWarpingDistance", "TimeZone", "TimeZoneConvert", "TimeZoneOffset", "Timing", "Tiny", "TitleGrouping", "TitsGroupT", "ToBoxes", "ToCharacterCode", "ToColor", "ToContinuousTimeModel", "ToDate", "Today", "ToDiscreteTimeModel", "ToEntity", "ToeplitzMatrix", "ToExpression", "ToFileName", "Together", "Toggle", "ToggleFalse", "Toggler", "TogglerBar", "TogglerBox", "TogglerBoxOptions", "ToHeldExpression", "ToInvertibleTimeSeries", "TokenWords", "Tolerance", "ToLowerCase", "Tomorrow", "ToNumberField", "TooBig", "Tooltip", "TooltipBox", "TooltipBoxOptions", "TooltipDelay", "TooltipStyle", "ToonShading", "Top", "TopHatTransform", "ToPolarCoordinates", "TopologicalSort", "ToRadicals", "ToRules", "ToSphericalCoordinates", "ToString", "Total", "TotalHeight", "TotalLayer", "TotalVariationFilter", "TotalWidth", "TouchPosition", "TouchscreenAutoZoom", "TouchscreenControlPlacement", "ToUpperCase", "Tr", "Trace", "TraceAbove", "TraceAction", "TraceBackward", "TraceDepth", "TraceDialog", "TraceForward", "TraceInternal", "TraceLevel", "TraceOff", "TraceOn", "TraceOriginal", "TracePrint", "TraceScan", "TrackedSymbols", "TrackingFunction", "TracyWidomDistribution", "TradingChart", "TraditionalForm", "TraditionalFunctionNotation", "TraditionalNotation", "TraditionalOrder", "TrainingProgressCheckpointing", "TrainingProgressFunction", "TrainingProgressMeasurements", "TrainingProgressReporting", "TrainingStoppingCriterion", "TrainingUpdateSchedule", "TransferFunctionCancel", "TransferFunctionExpand", "TransferFunctionFactor", "TransferFunctionModel", "TransferFunctionPoles", "TransferFunctionTransform", "TransferFunctionZeros", "TransformationClass", "TransformationFunction", "TransformationFunctions", "TransformationMatrix", "TransformedDistribution", "TransformedField", "TransformedProcess", "TransformedRegion", "TransitionDirection", "TransitionDuration", "TransitionEffect", "TransitiveClosureGraph", "TransitiveReductionGraph", "Translate", "TranslationOptions", "TranslationTransform", "Transliterate", "Transparent", "TransparentColor", "Transpose", "TransposeLayer", "TrapSelection", "TravelDirections", "TravelDirectionsData", "TravelDistance", "TravelDistanceList", "TravelMethod", "TravelTime", "TreeForm", "TreeGraph", "TreeGraphQ", "TreePlot", "TrendStyle", "Triangle", "TriangleCenter", "TriangleConstruct", "TriangleMeasurement", "TriangleWave", "TriangularDistribution", "TriangulateMesh", "Trig", "TrigExpand", "TrigFactor", "TrigFactorList", "Trigger", "TrigReduce", "TrigToExp", "TrimmedMean", "TrimmedVariance", "TropicalStormData", "True", "TrueQ", "TruncatedDistribution", "TruncatedPolyhedron", "TsallisQExponentialDistribution", "TsallisQGaussianDistribution", "TTest", "Tube", "TubeBezierCurveBox", "TubeBezierCurveBoxOptions", "TubeBox", "TubeBoxOptions", "TubeBSplineCurveBox", "TubeBSplineCurveBoxOptions", "Tuesday", "TukeyLambdaDistribution", "TukeyWindow", "TunnelData", "Tuples", "TuranGraph", "TuringMachine", "TuttePolynomial", "TwoWayRule", "Typed", "TypeSpecifier", "UnateQ", "Uncompress", "UnconstrainedParameters", "Undefined", "UnderBar", "Underflow", "Underlined", "Underoverscript", "UnderoverscriptBox", "UnderoverscriptBoxOptions", "Underscript", "UnderscriptBox", "UnderscriptBoxOptions", "UnderseaFeatureData", "UndirectedEdge", "UndirectedGraph", "UndirectedGraphQ", "UndoOptions", "UndoTrackedVariables", "Unequal", "UnequalTo", "Unevaluated", "UniformDistribution", "UniformGraphDistribution", "UniformPolyhedron", "UniformSumDistribution", "Uninstall", "Union", "UnionedEntityClass", "UnionPlus", "Unique", "UnitaryMatrixQ", "UnitBox", "UnitConvert", "UnitDimensions", "Unitize", "UnitRootTest", "UnitSimplify", "UnitStep", "UnitSystem", "UnitTriangle", "UnitVector", "UnitVectorLayer", "UnityDimensions", "UniverseModelData", "UniversityData", "UnixTime", "Unprotect", "UnregisterExternalEvaluator", "UnsameQ", "UnsavedVariables", "Unset", "UnsetShared", "UntrackedVariables", "Up", "UpArrow", "UpArrowBar", "UpArrowDownArrow", "Update", "UpdateDynamicObjects", "UpdateDynamicObjectsSynchronous", "UpdateInterval", "UpdatePacletSites", "UpdateSearchIndex", "UpDownArrow", "UpEquilibrium", "UpperCaseQ", "UpperLeftArrow", "UpperRightArrow", "UpperTriangularize", "UpperTriangularMatrixQ", "Upsample", "UpSet", "UpSetDelayed", "UpTee", "UpTeeArrow", "UpTo", "UpValues", "URL", "URLBuild", "URLDecode", "URLDispatcher", "URLDownload", "URLDownloadSubmit", "URLEncode", "URLExecute", "URLExpand", "URLFetch", "URLFetchAsynchronous", "URLParse", "URLQueryDecode", "URLQueryEncode", "URLRead", "URLResponseTime", "URLSave", "URLSaveAsynchronous", "URLShorten", "URLSubmit", "UseGraphicsRange", "UserDefinedWavelet", "Using", "UsingFrontEnd", "UtilityFunction", "V2Get", "ValenceErrorHandling", "ValidationLength", "ValidationSet", "Value", "ValueBox", "ValueBoxOptions", "ValueDimensions", "ValueForm", "ValuePreprocessingFunction", "ValueQ", "Values", "ValuesData", "Variables", "Variance", "VarianceEquivalenceTest", "VarianceEstimatorFunction", "VarianceGammaDistribution", "VarianceTest", "VectorAngle", "VectorAround", "VectorAspectRatio", "VectorColorFunction", "VectorColorFunctionScaling", "VectorDensityPlot", "VectorGlyphData", "VectorGreater", "VectorGreaterEqual", "VectorLess", "VectorLessEqual", "VectorMarkers", "VectorPlot", "VectorPlot3D", "VectorPoints", "VectorQ", "VectorRange", "Vectors", "VectorScale", "VectorScaling", "VectorSizes", "VectorStyle", "Vee", "Verbatim", "Verbose", "VerboseConvertToPostScriptPacket", "VerificationTest", "VerifyConvergence", "VerifyDerivedKey", "VerifyDigitalSignature", "VerifyFileSignature", "VerifyInterpretation", "VerifySecurityCertificates", "VerifySolutions", "VerifyTestAssumptions", "Version", "VersionedPreferences", "VersionNumber", "VertexAdd", "VertexCapacity", "VertexColors", "VertexComponent", "VertexConnectivity", "VertexContract", "VertexCoordinateRules", "VertexCoordinates", "VertexCorrelationSimilarity", "VertexCosineSimilarity", "VertexCount", "VertexCoverQ", "VertexDataCoordinates", "VertexDegree", "VertexDelete", "VertexDiceSimilarity", "VertexEccentricity", "VertexInComponent", "VertexInDegree", "VertexIndex", "VertexJaccardSimilarity", "VertexLabeling", "VertexLabels", "VertexLabelStyle", "VertexList", "VertexNormals", "VertexOutComponent", "VertexOutDegree", "VertexQ", "VertexRenderingFunction", "VertexReplace", "VertexShape", "VertexShapeFunction", "VertexSize", "VertexStyle", "VertexTextureCoordinates", "VertexWeight", "VertexWeightedGraphQ", "Vertical", "VerticalBar", "VerticalForm", "VerticalGauge", "VerticalSeparator", "VerticalSlider", "VerticalTilde", "Video", "VideoEncoding", "VideoExtractFrames", "VideoFrameList", "VideoFrameMap", "VideoPause", "VideoPlay", "VideoQ", "VideoStop", "VideoStream", "VideoStreams", "VideoTimeSeries", "VideoTracks", "VideoTrim", "ViewAngle", "ViewCenter", "ViewMatrix", "ViewPoint", "ViewPointSelectorSettings", "ViewPort", "ViewProjection", "ViewRange", "ViewVector", "ViewVertical", "VirtualGroupData", "Visible", "VisibleCell", "VoiceStyleData", "VoigtDistribution", "VolcanoData", "Volume", "VonMisesDistribution", "VoronoiMesh", "WaitAll", "WaitAsynchronousTask", "WaitNext", "WaitUntil", "WakebyDistribution", "WalleniusHypergeometricDistribution", "WaringYuleDistribution", "WarpingCorrespondence", "WarpingDistance", "WatershedComponents", "WatsonUSquareTest", "WattsStrogatzGraphDistribution", "WaveletBestBasis", "WaveletFilterCoefficients", "WaveletImagePlot", "WaveletListPlot", "WaveletMapIndexed", "WaveletMatrixPlot", "WaveletPhi", "WaveletPsi", "WaveletScale", "WaveletScalogram", "WaveletThreshold", "WeaklyConnectedComponents", "WeaklyConnectedGraphComponents", "WeaklyConnectedGraphQ", "WeakStationarity", "WeatherData", "WeatherForecastData", "WebAudioSearch", "WebElementObject", "WeberE", "WebExecute", "WebImage", "WebImageSearch", "WebSearch", "WebSessionObject", "WebSessions", "WebWindowObject", "Wedge", "Wednesday", "WeibullDistribution", "WeierstrassE1", "WeierstrassE2", "WeierstrassE3", "WeierstrassEta1", "WeierstrassEta2", "WeierstrassEta3", "WeierstrassHalfPeriods", "WeierstrassHalfPeriodW1", "WeierstrassHalfPeriodW2", "WeierstrassHalfPeriodW3", "WeierstrassInvariantG2", "WeierstrassInvariantG3", "WeierstrassInvariants", "WeierstrassP", "WeierstrassPPrime", "WeierstrassSigma", "WeierstrassZeta", "WeightedAdjacencyGraph", "WeightedAdjacencyMatrix", "WeightedData", "WeightedGraphQ", "Weights", "WelchWindow", "WheelGraph", "WhenEvent", "Which", "While", "White", "WhiteNoiseProcess", "WhitePoint", "Whitespace", "WhitespaceCharacter", "WhittakerM", "WhittakerW", "WienerFilter", "WienerProcess", "WignerD", "WignerSemicircleDistribution", "WikidataData", "WikidataSearch", "WikipediaData", "WikipediaSearch", "WilksW", "WilksWTest", "WindDirectionData", "WindingCount", "WindingPolygon", "WindowClickSelect", "WindowElements", "WindowFloating", "WindowFrame", "WindowFrameElements", "WindowMargins", "WindowMovable", "WindowOpacity", "WindowPersistentStyles", "WindowSelected", "WindowSize", "WindowStatusArea", "WindowTitle", "WindowToolbars", "WindowWidth", "WindSpeedData", "WindVectorData", "WinsorizedMean", "WinsorizedVariance", "WishartMatrixDistribution", "With", "WolframAlpha", "WolframAlphaDate", "WolframAlphaQuantity", "WolframAlphaResult", "WolframLanguageData", "Word", "WordBoundary", "WordCharacter", "WordCloud", "WordCount", "WordCounts", "WordData", "WordDefinition", "WordFrequency", "WordFrequencyData", "WordList", "WordOrientation", "WordSearch", "WordSelectionFunction", "WordSeparators", "WordSpacings", "WordStem", "WordTranslation", "WorkingPrecision", "WrapAround", "Write", "WriteLine", "WriteString", "Wronskian", "XMLElement", "XMLObject", "XMLTemplate", "Xnor", "Xor", "XYZColor", "Yellow", "Yesterday", "YuleDissimilarity", "ZernikeR", "ZeroSymmetric", "ZeroTest", "ZeroWidthTimes", "Zeta", "ZetaZero", "ZIPCodeData", "ZipfDistribution", "ZoomCenter", "ZoomFactor", "ZTest", "ZTransform", "$Aborted", "$ActivationGroupID", "$ActivationKey", "$ActivationUserRegistered", "$AddOnsDirectory", "$AllowDataUpdates", "$AllowExternalChannelFunctions", "$AllowInternet", "$AssertFunction", "$Assumptions", "$AsynchronousTask", "$AudioDecoders", "$AudioEncoders", "$AudioInputDevices", "$AudioOutputDevices", "$BaseDirectory", "$BasePacletsDirectory", "$BatchInput", "$BatchOutput", "$BlockchainBase", "$BoxForms", "$ByteOrdering", "$CacheBaseDirectory", "$Canceled", "$ChannelBase", "$CharacterEncoding", "$CharacterEncodings", "$CloudAccountName", "$CloudBase", "$CloudConnected", "$CloudConnection", "$CloudCreditsAvailable", "$CloudEvaluation", "$CloudExpressionBase", "$CloudObjectNameFormat", "$CloudObjectURLType", "$CloudRootDirectory", "$CloudSymbolBase", "$CloudUserID", "$CloudUserUUID", "$CloudVersion", "$CloudVersionNumber", "$CloudWolframEngineVersionNumber", "$CommandLine", "$CompilationTarget", "$ConditionHold", "$ConfiguredKernels", "$Context", "$ContextPath", "$ControlActiveSetting", "$Cookies", "$CookieStore", "$CreationDate", "$CurrentLink", "$CurrentTask", "$CurrentWebSession", "$DataStructures", "$DateStringFormat", "$DefaultAudioInputDevice", "$DefaultAudioOutputDevice", "$DefaultFont", "$DefaultFrontEnd", "$DefaultImagingDevice", "$DefaultLocalBase", "$DefaultMailbox", "$DefaultNetworkInterface", "$DefaultPath", "$DefaultProxyRules", "$DefaultSystemCredentialStore", "$Display", "$DisplayFunction", "$DistributedContexts", "$DynamicEvaluation", "$Echo", "$EmbedCodeEnvironments", "$EmbeddableServices", "$EntityStores", "$Epilog", "$EvaluationCloudBase", "$EvaluationCloudObject", "$EvaluationEnvironment", "$ExportFormats", "$ExternalIdentifierTypes", "$ExternalStorageBase", "$Failed", "$FinancialDataSource", "$FontFamilies", "$FormatType", "$FrontEnd", "$FrontEndSession", "$GeoEntityTypes", "$GeoLocation", "$GeoLocationCity", "$GeoLocationCountry", "$GeoLocationPrecision", "$GeoLocationSource", "$HistoryLength", "$HomeDirectory", "$HTMLExportRules", "$HTTPCookies", "$HTTPRequest", "$IgnoreEOF", "$ImageFormattingWidth", "$ImageResolution", "$ImagingDevice", "$ImagingDevices", "$ImportFormats", "$IncomingMailSettings", "$InitialDirectory", "$Initialization", "$InitializationContexts", "$Input", "$InputFileName", "$InputStreamMethods", "$Inspector", "$InstallationDate", "$InstallationDirectory", "$InterfaceEnvironment", "$InterpreterTypes", "$IterationLimit", "$KernelCount", "$KernelID", "$Language", "$LaunchDirectory", "$LibraryPath", "$LicenseExpirationDate", "$LicenseID", "$LicenseProcesses", "$LicenseServer", "$LicenseSubprocesses", "$LicenseType", "$Line", "$Linked", "$LinkSupported", "$LoadedFiles", "$LocalBase", "$LocalSymbolBase", "$MachineAddresses", "$MachineDomain", "$MachineDomains", "$MachineEpsilon", "$MachineID", "$MachineName", "$MachinePrecision", "$MachineType", "$MaxExtraPrecision", "$MaxLicenseProcesses", "$MaxLicenseSubprocesses", "$MaxMachineNumber", "$MaxNumber", "$MaxPiecewiseCases", "$MaxPrecision", "$MaxRootDegree", "$MessageGroups", "$MessageList", "$MessagePrePrint", "$Messages", "$MinMachineNumber", "$MinNumber", "$MinorReleaseNumber", "$MinPrecision", "$MobilePhone", "$ModuleNumber", "$NetworkConnected", "$NetworkInterfaces", "$NetworkLicense", "$NewMessage", "$NewSymbol", "$NotebookInlineStorageLimit", "$Notebooks", "$NoValue", "$NumberMarks", "$Off", "$OperatingSystem", "$Output", "$OutputForms", "$OutputSizeLimit", "$OutputStreamMethods", "$Packages", "$ParentLink", "$ParentProcessID", "$PasswordFile", "$PatchLevelID", "$Path", "$PathnameSeparator", "$PerformanceGoal", "$Permissions", "$PermissionsGroupBase", "$PersistenceBase", "$PersistencePath", "$PipeSupported", "$PlotTheme", "$Post", "$Pre", "$PreferencesDirectory", "$PreInitialization", "$PrePrint", "$PreRead", "$PrintForms", "$PrintLiteral", "$Printout3DPreviewer", "$ProcessID", "$ProcessorCount", "$ProcessorType", "$ProductInformation", "$ProgramName", "$PublisherID", "$RandomState", "$RecursionLimit", "$RegisteredDeviceClasses", "$RegisteredUserName", "$ReleaseNumber", "$RequesterAddress", "$RequesterWolframID", "$RequesterWolframUUID", "$RootDirectory", "$ScheduledTask", "$ScriptCommandLine", "$ScriptInputString", "$SecuredAuthenticationKeyTokens", "$ServiceCreditsAvailable", "$Services", "$SessionID", "$SetParentLink", "$SharedFunctions", "$SharedVariables", "$SoundDisplay", "$SoundDisplayFunction", "$SourceLink", "$SSHAuthentication", "$SubtitleDecoders", "$SubtitleEncoders", "$SummaryBoxDataSizeLimit", "$SuppressInputFormHeads", "$SynchronousEvaluation", "$SyntaxHandler", "$System", "$SystemCharacterEncoding", "$SystemCredentialStore", "$SystemID", "$SystemMemory", "$SystemShell", "$SystemTimeZone", "$SystemWordLength", "$TemplatePath", "$TemporaryDirectory", "$TemporaryPrefix", "$TestFileName", "$TextStyle", "$TimedOut", "$TimeUnit", "$TimeZone", "$TimeZoneEntity", "$TopDirectory", "$TraceOff", "$TraceOn", "$TracePattern", "$TracePostAction", "$TracePreAction", "$UnitSystem", "$Urgent", "$UserAddOnsDirectory", "$UserAgentLanguages", "$UserAgentMachine", "$UserAgentName", "$UserAgentOperatingSystem", "$UserAgentString", "$UserAgentVersion", "$UserBaseDirectory", "$UserBasePacletsDirectory", "$UserDocumentsDirectory", "$Username", "$UserName", "$UserURLBase", "$Version", "$VersionNumber", "$VideoDecoders", "$VideoEncoders", "$VoiceStyles", "$WolframDocumentsDirectory", "$WolframID", "$WolframUUID"];

  function fX2(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function zX2(I) {
    return Ta("(", I, ")?")
  }

  function Ta(...I) {
    return I.map((G) => fX2(G)).join("")
  }

  function QX2(...I) {
    return "(" + I.map((G) => fX2(G)).join("|") + ")"
  }

  function r09(I) {
    let d = /([2-9]|[1-2]\d|[3][0-5])\^\^/,
      G = /(\w*\.\w+|\w+\.\w*|\w+)/,
      Z = /(\d*\.\d+|\d+\.\d*|\d+)/,
      C = QX2(Ta(d, G), Z),
      B = QX2(/``[+-]?(\d*\.\d+|\d+\.\d*|\d+)/, /`([+-]?(\d*\.\d+|\d+\.\d*|\d+))?/),
      A = /\*\^[+-]?\d+/,
      X = {
        className: "number",
        relevance: 0,
        begin: Ta(C, zX2(B), zX2(A))
      },
      _ = /[a-zA-Z$][a-zA-Z0-9$]*/,
      F = new Set(n09),
      g = {
        variants: [{
          className: "builtin-symbol",
          begin: _,
          "on:begin": ($, h) => {
            if (!F.has($[0])) h.ignoreMatch()
          }
        }, {
          className: "symbol",
          relevance: 0,
          begin: _
        }]
      },
      J = {
        className: "named-character",
        begin: /\\\[[$a-zA-Z][$a-zA-Z0-9]+\]/
      },
      K = {
        className: "operator",
        relevance: 0,
        begin: /[+\-*/,;.:@~=><&|_`'^?!%]+/
      },
      Q = {
        className: "pattern",
        relevance: 0,
        begin: /([a-zA-Z$][a-zA-Z0-9$]*)?_+([a-zA-Z$][a-zA-Z0-9$]*)?/
      },
      E = {
        className: "slot",
        relevance: 0,
        begin: /#[a-zA-Z$][a-zA-Z0-9$]*|#+[0-9]?/
      },
      S = {
        className: "brace",
        relevance: 0,
        begin: /[[\](){}]/
      },
      P = {
        className: "message-name",
        relevance: 0,
        begin: Ta("::", _)
      };
    return {
      name: "Mathematica",
      aliases: ["mma", "wl"],
      classNameAliases: {
        brace: "punctuation",
        pattern: "type",
        slot: "type",
        symbol: "variable",
        "named-character": "variable",
        "builtin-symbol": "built_in",
        "message-name": "string"
      },
      contains: [I.COMMENT(/\(\*/, /\*\)/, {
        contains: ["self"]
      }), Q, E, P, g, J, I.QUOTE_STRING_MODE, X, K, S]
    }
  }
  qX2.exports = r09
})
// @from(Start 4565665, End 4568581)
vX2 = Y((fF3, UX2) => {
  function a09(I) {
    var d = "('|\\.')+",
      G = {
        relevance: 0,
        contains: [{
          begin: d
        }]
      };
    return {
      name: "Matlab",
      keywords: {
        keyword: "arguments break case catch classdef continue else elseif end enumeration events for function global if methods otherwise parfor persistent properties return spmd switch try while",
        built_in: "sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i|0 inf nan isnan isinf isfinite j|0 why compan gallery hadamard hankel hilb invhilb magic pascal rosser toeplitz vander wilkinson max min nanmax nanmin mean nanmean type table readtable writetable sortrows sort figure plot plot3 scatter scatter3 cellfun legend intersect ismember procrustes hold num2cell "
      },
      illegal: '(//|"|#|/\\*|\\s+/\\w+)',
      contains: [{
        className: "function",
        beginKeywords: "function",
        end: "$",
        contains: [I.UNDERSCORE_TITLE_MODE, {
          className: "params",
          variants: [{
            begin: "\\(",
            end: "\\)"
          }, {
            begin: "\\[",
            end: "\\]"
          }]
        }]
      }, {
        className: "built_in",
        begin: /true|false/,
        relevance: 0,
        starts: G
      }, {
        begin: "[a-zA-Z][a-zA-Z_0-9]*" + d,
        relevance: 0
      }, {
        className: "number",
        begin: I.C_NUMBER_RE,
        relevance: 0,
        starts: G
      }, {
        className: "string",
        begin: "'",
        end: "'",
        contains: [I.BACKSLASH_ESCAPE, {
          begin: "''"
        }]
      }, {
        begin: /\]|\}|\)/,
        relevance: 0,
        starts: G
      }, {
        className: "string",
        begin: '"',
        end: '"',
        contains: [I.BACKSLASH_ESCAPE, {
          begin: '""'
        }],
        starts: G
      }, I.COMMENT("^\\s*%\\{\\s*$", "^\\s*%\\}\\s*$"), I.COMMENT("%", "$")]
    }
  }
  UX2.exports = a09
})
// @from(Start 4568587, End 4597623)
MX2 = Y((qF3, EX2) => {
  function s09(I) {
    let Z = " abasep abs absint absolute_real_time acos acosh acot acoth acsc acsch activate addcol add_edge add_edges addmatrices addrow add_vertex add_vertices adjacency_matrix adjoin adjoint af agd airy airy_ai airy_bi airy_dai airy_dbi algsys alg_type alias allroots alphacharp alphanumericp amortization %and annuity_fv annuity_pv antid antidiff AntiDifference append appendfile apply apply1 apply2 applyb1 apropos args arit_amortization arithmetic arithsum array arrayapply arrayinfo arraymake arraysetapply ascii asec asech asin asinh askinteger asksign assoc assoc_legendre_p assoc_legendre_q assume assume_external_byte_order asympa at atan atan2 atanh atensimp atom atvalue augcoefmatrix augmented_lagrangian_method av average_degree backtrace bars barsplot barsplot_description base64 base64_decode bashindices batch batchload bc2 bdvac belln benefit_cost bern bernpoly bernstein_approx bernstein_expand bernstein_poly bessel bessel_i bessel_j bessel_k bessel_simplify bessel_y beta beta_incomplete beta_incomplete_generalized beta_incomplete_regularized bezout bfallroots bffac bf_find_root bf_fmin_cobyla bfhzeta bfloat bfloatp bfpsi bfpsi0 bfzeta biconnected_components bimetric binomial bipartition block blockmatrixp bode_gain bode_phase bothcoef box boxplot boxplot_description break bug_report build_info|10 buildq build_sample burn cabs canform canten cardinality carg cartan cartesian_product catch cauchy_matrix cbffac cdf_bernoulli cdf_beta cdf_binomial cdf_cauchy cdf_chi2 cdf_continuous_uniform cdf_discrete_uniform cdf_exp cdf_f cdf_gamma cdf_general_finite_discrete cdf_geometric cdf_gumbel cdf_hypergeometric cdf_laplace cdf_logistic cdf_lognormal cdf_negative_binomial cdf_noncentral_chi2 cdf_noncentral_student_t cdf_normal cdf_pareto cdf_poisson cdf_rank_sum cdf_rayleigh cdf_signed_rank cdf_student_t cdf_weibull cdisplay ceiling central_moment cequal cequalignore cf cfdisrep cfexpand cgeodesic cgreaterp cgreaterpignore changename changevar chaosgame charat charfun charfun2 charlist charp charpoly chdir chebyshev_t chebyshev_u checkdiv check_overlaps chinese cholesky christof chromatic_index chromatic_number cint circulant_graph clear_edge_weight clear_rules clear_vertex_label clebsch_gordan clebsch_graph clessp clesspignore close closefile cmetric coeff coefmatrix cograd col collapse collectterms columnop columnspace columnswap columnvector combination combine comp2pui compare compfile compile compile_file complement_graph complete_bipartite_graph complete_graph complex_number_p components compose_functions concan concat conjugate conmetderiv connected_components connect_vertices cons constant constantp constituent constvalue cont2part content continuous_freq contortion contour_plot contract contract_edge contragrad contrib_ode convert coord copy copy_file copy_graph copylist copymatrix cor cos cosh cot coth cov cov1 covdiff covect covers crc24sum create_graph create_list csc csch csetup cspline ctaylor ct_coordsys ctransform ctranspose cube_graph cuboctahedron_graph cunlisp cv cycle_digraph cycle_graph cylindrical days360 dblint deactivate declare declare_constvalue declare_dimensions declare_fundamental_dimensions declare_fundamental_units declare_qty declare_translated declare_unit_conversion declare_units declare_weights decsym defcon define define_alt_display define_variable defint defmatch defrule defstruct deftaylor degree_sequence del delete deleten delta demo demoivre denom depends derivdegree derivlist describe desolve determinant dfloat dgauss_a dgauss_b dgeev dgemm dgeqrf dgesv dgesvd diag diagmatrix diag_matrix diagmatrixp diameter diff digitcharp dimacs_export dimacs_import dimension dimensionless dimensions dimensions_as_list direct directory discrete_freq disjoin disjointp disolate disp dispcon dispform dispfun dispJordan display disprule dispterms distrib divide divisors divsum dkummer_m dkummer_u dlange dodecahedron_graph dotproduct dotsimp dpart draw draw2d draw3d drawdf draw_file draw_graph dscalar echelon edge_coloring edge_connectivity edges eigens_by_jacobi eigenvalues eigenvectors eighth einstein eivals eivects elapsed_real_time elapsed_run_time ele2comp ele2polynome ele2pui elem elementp elevation_grid elim elim_allbut eliminate eliminate_using ellipse elliptic_e elliptic_ec elliptic_eu elliptic_f elliptic_kc elliptic_pi ematrix empty_graph emptyp endcons entermatrix entertensor entier equal equalp equiv_classes erf erfc erf_generalized erfi errcatch error errormsg errors euler ev eval_string evenp every evolution evolution2d evundiff example exp expand expandwrt expandwrt_factored expint expintegral_chi expintegral_ci expintegral_e expintegral_e1 expintegral_ei expintegral_e_simplify expintegral_li expintegral_shi expintegral_si explicit explose exponentialize express expt exsec extdiff extract_linear_equations extremal_subset ezgcd %f f90 facsum factcomb factor factorfacsum factorial factorout factorsum facts fast_central_elements fast_linsolve fasttimes featurep fernfale fft fib fibtophi fifth filename_merge file_search file_type fillarray findde find_root find_root_abs find_root_error find_root_rel first fix flatten flength float floatnump floor flower_snark flush flush1deriv flushd flushnd flush_output fmin_cobyla forget fortran fourcos fourexpand fourier fourier_elim fourint fourintcos fourintsin foursimp foursin fourth fposition frame_bracket freeof freshline fresnel_c fresnel_s from_adjacency_matrix frucht_graph full_listify fullmap fullmapl fullratsimp fullratsubst fullsetify funcsolve fundamental_dimensions fundamental_units fundef funmake funp fv g0 g1 gamma gamma_greek gamma_incomplete gamma_incomplete_generalized gamma_incomplete_regularized gauss gauss_a gauss_b gaussprob gcd gcdex gcdivide gcfac gcfactor gd generalized_lambert_w genfact gen_laguerre genmatrix gensym geo_amortization geo_annuity_fv geo_annuity_pv geomap geometric geometric_mean geosum get getcurrentdirectory get_edge_weight getenv get_lu_factors get_output_stream_string get_pixel get_plot_option get_tex_environment get_tex_environment_default get_vertex_label gfactor gfactorsum ggf girth global_variances gn gnuplot_close gnuplot_replot gnuplot_reset gnuplot_restart gnuplot_start go Gosper GosperSum gr2d gr3d gradef gramschmidt graph6_decode graph6_encode graph6_export graph6_import graph_center graph_charpoly graph_eigenvalues graph_flow graph_order graph_periphery graph_product graph_size graph_union great_rhombicosidodecahedron_graph great_rhombicuboctahedron_graph grid_graph grind grobner_basis grotzch_graph hamilton_cycle hamilton_path hankel hankel_1 hankel_2 harmonic harmonic_mean hav heawood_graph hermite hessian hgfred hilbertmap hilbert_matrix hipow histogram histogram_description hodge horner hypergeometric i0 i1 %ibes ic1 ic2 ic_convert ichr1 ichr2 icosahedron_graph icosidodecahedron_graph icurvature ident identfor identity idiff idim idummy ieqn %if ifactors iframes ifs igcdex igeodesic_coords ilt image imagpart imetric implicit implicit_derivative implicit_plot indexed_tensor indices induced_subgraph inferencep inference_result infix info_display init_atensor init_ctensor in_neighbors innerproduct inpart inprod inrt integerp integer_partitions integrate intersect intersection intervalp intopois intosum invariant1 invariant2 inverse_fft inverse_jacobi_cd inverse_jacobi_cn inverse_jacobi_cs inverse_jacobi_dc inverse_jacobi_dn inverse_jacobi_ds inverse_jacobi_nc inverse_jacobi_nd inverse_jacobi_ns inverse_jacobi_sc inverse_jacobi_sd inverse_jacobi_sn invert invert_by_adjoint invert_by_lu inv_mod irr is is_biconnected is_bipartite is_connected is_digraph is_edge_in_graph is_graph is_graph_or_digraph ishow is_isomorphic isolate isomorphism is_planar isqrt isreal_p is_sconnected is_tree is_vertex_in_graph items_inference %j j0 j1 jacobi jacobian jacobi_cd jacobi_cn jacobi_cs jacobi_dc jacobi_dn jacobi_ds jacobi_nc jacobi_nd jacobi_ns jacobi_p jacobi_sc jacobi_sd jacobi_sn JF jn join jordan julia julia_set julia_sin %k kdels kdelta kill killcontext kostka kron_delta kronecker_product kummer_m kummer_u kurtosis kurtosis_bernoulli kurtosis_beta kurtosis_binomial kurtosis_chi2 kurtosis_continuous_uniform kurtosis_discrete_uniform kurtosis_exp kurtosis_f kurtosis_gamma kurtosis_general_finite_discrete kurtosis_geometric kurtosis_gumbel kurtosis_hypergeometric kurtosis_laplace kurtosis_logistic kurtosis_lognormal kurtosis_negative_binomial kurtosis_noncentral_chi2 kurtosis_noncentral_student_t kurtosis_normal kurtosis_pareto kurtosis_poisson kurtosis_rayleigh kurtosis_student_t kurtosis_weibull label labels lagrange laguerre lambda lambert_w laplace laplacian_matrix last lbfgs lc2kdt lcharp lc_l lcm lc_u ldefint ldisp ldisplay legendre_p legendre_q leinstein length let letrules letsimp levi_civita lfreeof lgtreillis lhs li liediff limit Lindstedt linear linearinterpol linear_program linear_regression line_graph linsolve listarray list_correlations listify list_matrix_entries list_nc_monomials listoftens listofvars listp lmax lmin load loadfile local locate_matrix_entry log logcontract log_gamma lopow lorentz_gauge lowercasep lpart lratsubst lreduce lriemann lsquares_estimates lsquares_estimates_approximate lsquares_estimates_exact lsquares_mse lsquares_residual_mse lsquares_residuals lsum ltreillis lu_backsub lucas lu_factor %m macroexpand macroexpand1 make_array makebox makefact makegamma make_graph make_level_picture makelist makeOrders make_poly_continent make_poly_country make_polygon make_random_state make_rgb_picture makeset make_string_input_stream make_string_output_stream make_transform mandelbrot mandelbrot_set map mapatom maplist matchdeclare matchfix mat_cond mat_fullunblocker mat_function mathml_display mat_norm matrix matrixmap matrixp matrix_size mattrace mat_trace mat_unblocker max max_clique max_degree max_flow maximize_lp max_independent_set max_matching maybe md5sum mean mean_bernoulli mean_beta mean_binomial mean_chi2 mean_continuous_uniform mean_deviation mean_discrete_uniform mean_exp mean_f mean_gamma mean_general_finite_discrete mean_geometric mean_gumbel mean_hypergeometric mean_laplace mean_logistic mean_lognormal mean_negative_binomial mean_noncentral_chi2 mean_noncentral_student_t mean_normal mean_pareto mean_poisson mean_rayleigh mean_student_t mean_weibull median median_deviation member mesh metricexpandall mgf1_sha1 min min_degree min_edge_cut minfactorial minimalPoly minimize_lp minimum_spanning_tree minor minpack_lsquares minpack_solve min_vertex_cover min_vertex_cut mkdir mnewton mod mode_declare mode_identity ModeMatrix moebius mon2schur mono monomial_dimensions multibernstein_poly multi_display_for_texinfo multi_elem multinomial multinomial_coeff multi_orbit multiplot_mode multi_pui multsym multthru mycielski_graph nary natural_unit nc_degree ncexpt ncharpoly negative_picture neighbors new newcontext newdet new_graph newline newton new_variable next_prime nicedummies niceindices ninth nofix nonarray noncentral_moment nonmetricity nonnegintegerp nonscalarp nonzeroandfreeof notequal nounify nptetrad npv nroots nterms ntermst nthroot nullity nullspace num numbered_boundaries numberp number_to_octets num_distinct_partitions numerval numfactor num_partitions nusum nzeta nzetai nzetar octets_to_number octets_to_oid odd_girth oddp ode2 ode_check odelin oid_to_octets op opena opena_binary openr openr_binary openw openw_binary operatorp opsubst optimize %or orbit orbits ordergreat ordergreatp orderless orderlessp orthogonal_complement orthopoly_recur orthopoly_weight outermap out_neighbors outofpois pade parabolic_cylinder_d parametric parametric_surface parg parGosper parse_string parse_timedate part part2cont partfrac partition partition_set partpol path_digraph path_graph pathname_directory pathname_name pathname_type pdf_bernoulli pdf_beta pdf_binomial pdf_cauchy pdf_chi2 pdf_continuous_uniform pdf_discrete_uniform pdf_exp pdf_f pdf_gamma pdf_general_finite_discrete pdf_geometric pdf_gumbel pdf_hypergeometric pdf_laplace pdf_logistic pdf_lognormal pdf_negative_binomial pdf_noncentral_chi2 pdf_noncentral_student_t pdf_normal pdf_pareto pdf_poisson pdf_rank_sum pdf_rayleigh pdf_signed_rank pdf_student_t pdf_weibull pearson_skewness permanent permut permutation permutations petersen_graph petrov pickapart picture_equalp picturep piechart piechart_description planar_embedding playback plog plot2d plot3d plotdf ploteq plsquares pochhammer points poisdiff poisexpt poisint poismap poisplus poissimp poissubst poistimes poistrim polar polarform polartorect polar_to_xy poly_add poly_buchberger poly_buchberger_criterion poly_colon_ideal poly_content polydecomp poly_depends_p poly_elimination_ideal poly_exact_divide poly_expand poly_expt poly_gcd polygon poly_grobner poly_grobner_equal poly_grobner_member poly_grobner_subsetp poly_ideal_intersection poly_ideal_polysaturation poly_ideal_polysaturation1 poly_ideal_saturation poly_ideal_saturation1 poly_lcm poly_minimization polymod poly_multiply polynome2ele polynomialp poly_normal_form poly_normalize poly_normalize_list poly_polysaturation_extension poly_primitive_part poly_pseudo_divide poly_reduced_grobner poly_reduction poly_saturation_extension poly_s_polynomial poly_subtract polytocompanion pop postfix potential power_mod powerseries powerset prefix prev_prime primep primes principal_components print printf printfile print_graph printpois printprops prodrac product properties propvars psi psubst ptriangularize pui pui2comp pui2ele pui2polynome pui_direct puireduc push put pv qput qrange qty quad_control quad_qag quad_qagi quad_qagp quad_qags quad_qawc quad_qawf quad_qawo quad_qaws quadrilateral quantile quantile_bernoulli quantile_beta quantile_binomial quantile_cauchy quantile_chi2 quantile_continuous_uniform quantile_discrete_uniform quantile_exp quantile_f quantile_gamma quantile_general_finite_discrete quantile_geometric quantile_gumbel quantile_hypergeometric quantile_laplace quantile_logistic quantile_lognormal quantile_negative_binomial quantile_noncentral_chi2 quantile_noncentral_student_t quantile_normal quantile_pareto quantile_poisson quantile_rayleigh quantile_student_t quantile_weibull quartile_skewness quit qunit quotient racah_v racah_w radcan radius random random_bernoulli random_beta random_binomial random_bipartite_graph random_cauchy random_chi2 random_continuous_uniform random_digraph random_discrete_uniform random_exp random_f random_gamma random_general_finite_discrete random_geometric random_graph random_graph1 random_gumbel random_hypergeometric random_laplace random_logistic random_lognormal random_negative_binomial random_network random_noncentral_chi2 random_noncentral_student_t random_normal random_pareto random_permutation random_poisson random_rayleigh random_regular_graph random_student_t random_tournament random_tree random_weibull range rank rat ratcoef ratdenom ratdiff ratdisrep ratexpand ratinterpol rational rationalize ratnumer ratnump ratp ratsimp ratsubst ratvars ratweight read read_array read_binary_array read_binary_list read_binary_matrix readbyte readchar read_hashed_array readline read_list read_matrix read_nested_list readonly read_xpm real_imagpart_to_conjugate realpart realroots rearray rectangle rectform rectform_log_if_constant recttopolar rediff reduce_consts reduce_order region region_boundaries region_boundaries_plus rem remainder remarray rembox remcomps remcon remcoord remfun remfunction remlet remove remove_constvalue remove_dimensions remove_edge remove_fundamental_dimensions remove_fundamental_units remove_plot_option remove_vertex rempart remrule remsym remvalue rename rename_file reset reset_displays residue resolvante resolvante_alternee1 resolvante_bipartite resolvante_diedrale resolvante_klein resolvante_klein3 resolvante_produit_sym resolvante_unitaire resolvante_vierer rest resultant return reveal reverse revert revert2 rgb2level rhs ricci riemann rinvariant risch rk rmdir rncombine romberg room rootscontract round row rowop rowswap rreduce run_testsuite %s save saving scalarp scaled_bessel_i scaled_bessel_i0 scaled_bessel_i1 scalefactors scanmap scatterplot scatterplot_description scene schur2comp sconcat scopy scsimp scurvature sdowncase sec sech second sequal sequalignore set_alt_display setdifference set_draw_defaults set_edge_weight setelmx setequalp setify setp set_partitions set_plot_option set_prompt set_random_state set_tex_environment set_tex_environment_default setunits setup_autoload set_up_dot_simplifications set_vertex_label seventh sexplode sf sha1sum sha256sum shortest_path shortest_weighted_path show showcomps showratvars sierpinskiale sierpinskimap sign signum similaritytransform simp_inequality simplify_sum simplode simpmetderiv simtran sin sinh sinsert sinvertcase sixth skewness skewness_bernoulli skewness_beta skewness_binomial skewness_chi2 skewness_continuous_uniform skewness_discrete_uniform skewness_exp skewness_f skewness_gamma skewness_general_finite_discrete skewness_geometric skewness_gumbel skewness_hypergeometric skewness_laplace skewness_logistic skewness_lognormal skewness_negative_binomial skewness_noncentral_chi2 skewness_noncentral_student_t skewness_normal skewness_pareto skewness_poisson skewness_rayleigh skewness_student_t skewness_weibull slength smake small_rhombicosidodecahedron_graph small_rhombicuboctahedron_graph smax smin smismatch snowmap snub_cube_graph snub_dodecahedron_graph solve solve_rec solve_rec_rat some somrac sort sparse6_decode sparse6_encode sparse6_export sparse6_import specint spherical spherical_bessel_j spherical_bessel_y spherical_hankel1 spherical_hankel2 spherical_harmonic spherical_to_xyz splice split sposition sprint sqfr sqrt sqrtdenest sremove sremovefirst sreverse ssearch ssort sstatus ssubst ssubstfirst staircase standardize standardize_inverse_trig starplot starplot_description status std std1 std_bernoulli std_beta std_binomial std_chi2 std_continuous_uniform std_discrete_uniform std_exp std_f std_gamma std_general_finite_discrete std_geometric std_gumbel std_hypergeometric std_laplace std_logistic std_lognormal std_negative_binomial std_noncentral_chi2 std_noncentral_student_t std_normal std_pareto std_poisson std_rayleigh std_student_t std_weibull stemplot stirling stirling1 stirling2 strim striml strimr string stringout stringp strong_components struve_h struve_l sublis sublist sublist_indices submatrix subsample subset subsetp subst substinpart subst_parallel substpart substring subvar subvarp sum sumcontract summand_to_rec supcase supcontext symbolp symmdifference symmetricp system take_channel take_inference tan tanh taylor taylorinfo taylorp taylor_simplifier taytorat tcl_output tcontract tellrat tellsimp tellsimpafter tentex tenth test_mean test_means_difference test_normality test_proportion test_proportions_difference test_rank_sum test_sign test_signed_rank test_variance test_variance_ratio tex tex1 tex_display texput %th third throw time timedate timer timer_info tldefint tlimit todd_coxeter toeplitz tokens to_lisp topological_sort to_poly to_poly_solve totaldisrep totalfourier totient tpartpol trace tracematrix trace_options transform_sample translate translate_file transpose treefale tree_reduce treillis treinat triangle triangularize trigexpand trigrat trigreduce trigsimp trunc truncate truncated_cube_graph truncated_dodecahedron_graph truncated_icosahedron_graph truncated_tetrahedron_graph tr_warnings_get tube tutte_graph ueivects uforget ultraspherical underlying_graph undiff union unique uniteigenvectors unitp units unit_step unitvector unorder unsum untellrat untimer untrace uppercasep uricci uriemann uvect vandermonde_matrix var var1 var_bernoulli var_beta var_binomial var_chi2 var_continuous_uniform var_discrete_uniform var_exp var_f var_gamma var_general_finite_discrete var_geometric var_gumbel var_hypergeometric var_laplace var_logistic var_lognormal var_negative_binomial var_noncentral_chi2 var_noncentral_student_t var_normal var_pareto var_poisson var_rayleigh var_student_t var_weibull vector vectorpotential vectorsimp verbify vers vertex_coloring vertex_connectivity vertex_degree vertex_distance vertex_eccentricity vertex_in_degree vertex_out_degree vertices vertices_to_cycle vertices_to_path %w weyl wheel_graph wiener_index wigner_3j wigner_6j wigner_9j with_stdout write_binary_data writebyte write_data writefile wronskian xreduce xthru %y Zeilberger zeroequiv zerofor zeromatrix zeromatrixp zeta zgeev zheev zlange zn_add_table zn_carmichael_lambda zn_characteristic_factors zn_determinant zn_factor_generators zn_invert_by_lu zn_log zn_mult_table absboxchar activecontexts adapt_depth additive adim aform algebraic algepsilon algexact aliases allbut all_dotsimp_denoms allocation allsym alphabetic animation antisymmetric arrays askexp assume_pos assume_pos_pred assumescalar asymbol atomgrad atrig1 axes axis_3d axis_bottom axis_left axis_right axis_top azimuth background background_color backsubst berlefact bernstein_explicit besselexpand beta_args_sum_to_integer beta_expand bftorat bftrunc bindtest border boundaries_array box boxchar breakup %c capping cauchysum cbrange cbtics center cflength cframe_flag cnonmet_flag color color_bar color_bar_tics colorbox columns commutative complex cone context contexts contour contour_levels cosnpiflag ctaypov ctaypt ctayswitch ctayvar ct_coords ctorsion_flag ctrgsimp cube current_let_rule_package cylinder data_file_name debugmode decreasing default_let_rule_package delay dependencies derivabbrev derivsubst detout diagmetric diff dim dimensions dispflag display2d|10 display_format_internal distribute_over doallmxops domain domxexpt domxmxops domxnctimes dontfactor doscmxops doscmxplus dot0nscsimp dot0simp dot1simp dotassoc dotconstrules dotdistrib dotexptsimp dotident dotscrules draw_graph_program draw_realpart edge_color edge_coloring edge_partition edge_type edge_width %edispflag elevation %emode endphi endtheta engineering_format_floats enhanced3d %enumer epsilon_lp erfflag erf_representation errormsg error_size error_syms error_type %e_to_numlog eval even evenfun evflag evfun ev_point expandwrt_denom expintexpand expintrep expon expop exptdispflag exptisolate exptsubst facexpand facsum_combine factlim factorflag factorial_expand factors_only fb feature features file_name file_output_append file_search_demo file_search_lisp file_search_maxima|10 file_search_tests file_search_usage file_type_lisp file_type_maxima|10 fill_color fill_density filled_func fixed_vertices flipflag float2bf font font_size fortindent fortspaces fpprec fpprintprec functions gamma_expand gammalim gdet genindex gensumnum GGFCFMAX GGFINFINITY globalsolve gnuplot_command gnuplot_curve_styles gnuplot_curve_titles gnuplot_default_term_command gnuplot_dumb_term_command gnuplot_file_args gnuplot_file_name gnuplot_out_file gnuplot_pdf_term_command gnuplot_pm3d gnuplot_png_term_command gnuplot_postamble gnuplot_preamble gnuplot_ps_term_command gnuplot_svg_term_command gnuplot_term gnuplot_view_args Gosper_in_Zeilberger gradefs grid grid2d grind halfangles head_angle head_both head_length head_type height hypergeometric_representation %iargs ibase icc1 icc2 icounter idummyx ieqnprint ifb ifc1 ifc2 ifg ifgi ifr iframe_bracket_form ifri igeowedge_flag ikt1 ikt2 imaginary inchar increasing infeval infinity inflag infolists inm inmc1 inmc2 intanalysis integer integervalued integrate_use_rootsof integration_constant integration_constant_counter interpolate_color intfaclim ip_grid ip_grid_in irrational isolate_wrt_times iterations itr julia_parameter %k1 %k2 keepfloat key key_pos kinvariant kt label label_alignment label_orientation labels lassociative lbfgs_ncorrections lbfgs_nfeval_max leftjust legend letrat let_rule_packages lfg lg lhospitallim limsubst linear linear_solver linechar linel|10 linenum line_type linewidth line_width linsolve_params linsolvewarn lispdisp listarith listconstvars listdummyvars lmxchar load_pathname loadprint logabs logarc logcb logconcoeffp logexpand lognegint logsimp logx logx_secondary logy logy_secondary logz lriem m1pbranch macroexpansion macros mainvar manual_demo maperror mapprint matrix_element_add matrix_element_mult matrix_element_transpose maxapplydepth maxapplyheight maxima_tempdir|10 maxima_userdir|10 maxnegex MAX_ORD maxposex maxpsifracdenom maxpsifracnum maxpsinegint maxpsiposint maxtayorder mesh_lines_color method mod_big_prime mode_check_errorp mode_checkp mode_check_warnp mod_test mod_threshold modular_linear_solver modulus multiplicative multiplicities myoptions nary negdistrib negsumdispflag newline newtonepsilon newtonmaxiter nextlayerfactor niceindicespref nm nmc noeval nolabels nonegative_lp noninteger nonscalar noun noundisp nouns np npi nticks ntrig numer numer_pbranch obase odd oddfun opacity opproperties opsubst optimprefix optionset orientation origin orthopoly_returns_intervals outative outchar packagefile palette partswitch pdf_file pfeformat phiresolution %piargs piece pivot_count_sx pivot_max_sx plot_format plot_options plot_realpart png_file pochhammer_max_index points pointsize point_size points_joined point_type poislim poisson poly_coefficient_ring poly_elimination_order polyfactor poly_grobner_algorithm poly_grobner_debug poly_monomial_order poly_primary_elimination_order poly_return_term_list poly_secondary_elimination_order poly_top_reduction_only posfun position powerdisp pred prederror primep_number_of_tests product_use_gamma program programmode promote_float_to_bigfloat prompt proportional_axes props psexpand ps_file radexpand radius radsubstflag rassociative ratalgdenom ratchristof ratdenomdivide rateinstein ratepsilon ratfac rational ratmx ratprint ratriemann ratsimpexpons ratvarswitch ratweights ratweyl ratwtlvl real realonly redraw refcheck resolution restart resultant ric riem rmxchar %rnum_list rombergabs rombergit rombergmin rombergtol rootsconmode rootsepsilon run_viewer same_xy same_xyz savedef savefactors scalar scalarmatrixp scale scale_lp setcheck setcheckbreak setval show_edge_color show_edges show_edge_type show_edge_width show_id show_label showtime show_vertex_color show_vertex_size show_vertex_type show_vertices show_weight simp simplified_output simplify_products simpproduct simpsum sinnpiflag solvedecomposes solveexplicit solvefactors solvenullwarn solveradcan solvetrigwarn space sparse sphere spring_embedding_depth sqrtdispflag stardisp startphi starttheta stats_numer stringdisp structures style sublis_apply_lambda subnumsimp sumexpand sumsplitfact surface surface_hide svg_file symmetric tab taylordepth taylor_logexpand taylor_order_coefficients taylor_truncate_polynomials tensorkill terminal testsuite_files thetaresolution timer_devalue title tlimswitch tr track transcompile transform transform_xy translate_fast_arrays transparent transrun tr_array_as_ref tr_bound_function_applyp tr_file_tty_messagesp tr_float_can_branch_complex tr_function_call_default trigexpandplus trigexpandtimes triginverses trigsign trivial_solutions tr_numer tr_optimize_max_loop tr_semicompile tr_state_vars tr_warn_bad_function_calls tr_warn_fexpr tr_warn_meval tr_warn_mode tr_warn_undeclared tr_warn_undefined_variable tstep ttyoff tube_extremes ufg ug %unitexpand unit_vectors uric uriem use_fast_arrays user_preamble usersetunits values vect_cross verbose vertex_color vertex_coloring vertex_partition vertex_size vertex_type view warnings weyl width windowname windowtitle wired_surface wireframe xaxis xaxis_color xaxis_secondary xaxis_type xaxis_width xlabel xlabel_secondary xlength xrange xrange_secondary xtics xtics_axis xtics_rotate xtics_rotate_secondary xtics_secondary xtics_secondary_axis xu_grid x_voxel xy_file xyplane xy_scale yaxis yaxis_color yaxis_secondary yaxis_type yaxis_width ylabel ylabel_secondary ylength yrange yrange_secondary ytics ytics_axis ytics_rotate ytics_rotate_secondary ytics_secondary ytics_secondary_axis yv_grid y_voxel yx_ratio zaxis zaxis_color zaxis_type zaxis_width zeroa zerob zerobern zeta%pi zlabel zlabel_rotate zlength zmin zn_primroot_limit zn_primroot_pretest",
      C = "_ __ %|0 %%|0";
    return {
      name: "Maxima",
      keywords: {
        $pattern: "[A-Za-z_%][0-9A-Za-z_%]*",
        keyword: "if then else elseif for thru do while unless step in and or not",
        literal: "true false unknown inf minf ind und %e %i %pi %phi %gamma",
        built_in: Z,
        symbol: "_ __ %|0 %%|0"
      },
      contains: [{
        className: "comment",
        begin: "/\\*",
        end: "\\*/",
        contains: ["self"]
      }, I.QUOTE_STRING_MODE, {
        className: "number",
        relevance: 0,
        variants: [{
          begin: "\\b(\\d+|\\d+\\.|\\.\\d+|\\d+\\.\\d+)[Ee][-+]?\\d+\\b"
        }, {
          begin: "\\b(\\d+|\\d+\\.|\\.\\d+|\\d+\\.\\d+)[Bb][-+]?\\d+\\b",
          relevance: 10
        }, {
          begin: "\\b(\\.\\d+|\\d+\\.\\d+)\\b"
        }, {
          begin: "\\b(\\d+|0[0-9A-Za-z]+)\\.?\\b"
        }]
      }],
      illegal: /@/
    }
  }
  EX2.exports = s09
})
// @from(Start 4597629, End 4614278)
LX2 = Y((RF3, SX2) => {
  function o09(I) {
    return {
      name: "MEL",
      keywords: "int float string vector matrix if else switch case default while do for in break continue global proc return about abs addAttr addAttributeEditorNodeHelp addDynamic addNewShelfTab addPP addPanelCategory addPrefixToName advanceToNextDrivenKey affectedNet affects aimConstraint air alias aliasAttr align alignCtx alignCurve alignSurface allViewFit ambientLight angle angleBetween animCone animCurveEditor animDisplay animView annotate appendStringArray applicationName applyAttrPreset applyTake arcLenDimContext arcLengthDimension arclen arrayMapper art3dPaintCtx artAttrCtx artAttrPaintVertexCtx artAttrSkinPaintCtx artAttrTool artBuildPaintMenu artFluidAttrCtx artPuttyCtx artSelectCtx artSetPaintCtx artUserPaintCtx assignCommand assignInputDevice assignViewportFactories attachCurve attachDeviceAttr attachSurface attrColorSliderGrp attrCompatibility attrControlGrp attrEnumOptionMenu attrEnumOptionMenuGrp attrFieldGrp attrFieldSliderGrp attrNavigationControlGrp attrPresetEditWin attributeExists attributeInfo attributeMenu attributeQuery autoKeyframe autoPlace bakeClip bakeFluidShading bakePartialHistory bakeResults bakeSimulation basename basenameEx batchRender bessel bevel bevelPlus binMembership bindSkin blend2 blendShape blendShapeEditor blendShapePanel blendTwoAttr blindDataType boneLattice boundary boxDollyCtx boxZoomCtx bufferCurve buildBookmarkMenu buildKeyframeMenu button buttonManip CBG cacheFile cacheFileCombine cacheFileMerge cacheFileTrack camera cameraView canCreateManip canvas capitalizeString catch catchQuiet ceil changeSubdivComponentDisplayLevel changeSubdivRegion channelBox character characterMap characterOutlineEditor characterize chdir checkBox checkBoxGrp checkDefaultRenderGlobals choice circle circularFillet clamp clear clearCache clip clipEditor clipEditorCurrentTimeCtx clipSchedule clipSchedulerOutliner clipTrimBefore closeCurve closeSurface cluster cmdFileOutput cmdScrollFieldExecuter cmdScrollFieldReporter cmdShell coarsenSubdivSelectionList collision color colorAtPoint colorEditor colorIndex colorIndexSliderGrp colorSliderButtonGrp colorSliderGrp columnLayout commandEcho commandLine commandPort compactHairSystem componentEditor compositingInterop computePolysetVolume condition cone confirmDialog connectAttr connectControl connectDynamic connectJoint connectionInfo constrain constrainValue constructionHistory container containsMultibyte contextInfo control convertFromOldLayers convertIffToPsd convertLightmap convertSolidTx convertTessellation convertUnit copyArray copyFlexor copyKey copySkinWeights cos cpButton cpCache cpClothSet cpCollision cpConstraint cpConvClothToMesh cpForces cpGetSolverAttr cpPanel cpProperty cpRigidCollisionFilter cpSeam cpSetEdit cpSetSolverAttr cpSolver cpSolverTypes cpTool cpUpdateClothUVs createDisplayLayer createDrawCtx createEditor createLayeredPsdFile createMotionField createNewShelf createNode createRenderLayer createSubdivRegion cross crossProduct ctxAbort ctxCompletion ctxEditMode ctxTraverse currentCtx currentTime currentTimeCtx currentUnit curve curveAddPtCtx curveCVCtx curveEPCtx curveEditorCtx curveIntersect curveMoveEPCtx curveOnSurface curveSketchCtx cutKey cycleCheck cylinder dagPose date defaultLightListCheckBox defaultNavigation defineDataServer defineVirtualDevice deformer deg_to_rad delete deleteAttr deleteShadingGroupsAndMaterials deleteShelfTab deleteUI deleteUnusedBrushes delrandstr detachCurve detachDeviceAttr detachSurface deviceEditor devicePanel dgInfo dgdirty dgeval dgtimer dimWhen directKeyCtx directionalLight dirmap dirname disable disconnectAttr disconnectJoint diskCache displacementToPoly displayAffected displayColor displayCull displayLevelOfDetail displayPref displayRGBColor displaySmoothness displayStats displayString displaySurface distanceDimContext distanceDimension doBlur dolly dollyCtx dopeSheetEditor dot dotProduct doubleProfileBirailSurface drag dragAttrContext draggerContext dropoffLocator duplicate duplicateCurve duplicateSurface dynCache dynControl dynExport dynExpression dynGlobals dynPaintEditor dynParticleCtx dynPref dynRelEdPanel dynRelEditor dynamicLoad editAttrLimits editDisplayLayerGlobals editDisplayLayerMembers editRenderLayerAdjustment editRenderLayerGlobals editRenderLayerMembers editor editorTemplate effector emit emitter enableDevice encodeString endString endsWith env equivalent equivalentTol erf error eval evalDeferred evalEcho event exactWorldBoundingBox exclusiveLightCheckBox exec executeForEachObject exists exp expression expressionEditorListen extendCurve extendSurface extrude fcheck fclose feof fflush fgetline fgetword file fileBrowserDialog fileDialog fileExtension fileInfo filetest filletCurve filter filterCurve filterExpand filterStudioImport findAllIntersections findAnimCurves findKeyframe findMenuItem findRelatedSkinCluster finder firstParentOf fitBspline flexor floatEq floatField floatFieldGrp floatScrollBar floatSlider floatSlider2 floatSliderButtonGrp floatSliderGrp floor flow fluidCacheInfo fluidEmitter fluidVoxelInfo flushUndo fmod fontDialog fopen formLayout format fprint frameLayout fread freeFormFillet frewind fromNativePath fwrite gamma gauss geometryConstraint getApplicationVersionAsFloat getAttr getClassification getDefaultBrush getFileList getFluidAttr getInputDeviceRange getMayaPanelTypes getModifiers getPanel getParticleAttr getPluginResource getenv getpid glRender glRenderEditor globalStitch gmatch goal gotoBindPose grabColor gradientControl gradientControlNoAttr graphDollyCtx graphSelectContext graphTrackCtx gravity grid gridLayout group groupObjectsByName HfAddAttractorToAS HfAssignAS HfBuildEqualMap HfBuildFurFiles HfBuildFurImages HfCancelAFR HfConnectASToHF HfCreateAttractor HfDeleteAS HfEditAS HfPerformCreateAS HfRemoveAttractorFromAS HfSelectAttached HfSelectAttractors HfUnAssignAS hardenPointCurve hardware hardwareRenderPanel headsUpDisplay headsUpMessage help helpLine hermite hide hilite hitTest hotBox hotkey hotkeyCheck hsv_to_rgb hudButton hudSlider hudSliderButton hwReflectionMap hwRender hwRenderLoad hyperGraph hyperPanel hyperShade hypot iconTextButton iconTextCheckBox iconTextRadioButton iconTextRadioCollection iconTextScrollList iconTextStaticLabel ikHandle ikHandleCtx ikHandleDisplayScale ikSolver ikSplineHandleCtx ikSystem ikSystemInfo ikfkDisplayMethod illustratorCurves image imfPlugins inheritTransform insertJoint insertJointCtx insertKeyCtx insertKnotCurve insertKnotSurface instance instanceable instancer intField intFieldGrp intScrollBar intSlider intSliderGrp interToUI internalVar intersect iprEngine isAnimCurve isConnected isDirty isParentOf isSameObject isTrue isValidObjectName isValidString isValidUiName isolateSelect itemFilter itemFilterAttr itemFilterRender itemFilterType joint jointCluster jointCtx jointDisplayScale jointLattice keyTangent keyframe keyframeOutliner keyframeRegionCurrentTimeCtx keyframeRegionDirectKeyCtx keyframeRegionDollyCtx keyframeRegionInsertKeyCtx keyframeRegionMoveKeyCtx keyframeRegionScaleKeyCtx keyframeRegionSelectKeyCtx keyframeRegionSetKeyCtx keyframeRegionTrackCtx keyframeStats lassoContext lattice latticeDeformKeyCtx launch launchImageEditor layerButton layeredShaderPort layeredTexturePort layout layoutDialog lightList lightListEditor lightListPanel lightlink lineIntersection linearPrecision linstep listAnimatable listAttr listCameras listConnections listDeviceAttachments listHistory listInputDeviceAxes listInputDeviceButtons listInputDevices listMenuAnnotation listNodeTypes listPanelCategories listRelatives listSets listTransforms listUnselected listerEditor loadFluid loadNewShelf loadPlugin loadPluginLanguageResources loadPrefObjects localizedPanelLabel lockNode loft log longNameOf lookThru ls lsThroughFilter lsType lsUI Mayatomr mag makeIdentity makeLive makePaintable makeRoll makeSingleSurface makeTubeOn makebot manipMoveContext manipMoveLimitsCtx manipOptions manipRotateContext manipRotateLimitsCtx manipScaleContext manipScaleLimitsCtx marker match max memory menu menuBarLayout menuEditor menuItem menuItemToShelf menuSet menuSetPref messageLine min minimizeApp mirrorJoint modelCurrentTimeCtx modelEditor modelPanel mouse movIn movOut move moveIKtoFK moveKeyCtx moveVertexAlongDirection multiProfileBirailSurface mute nParticle nameCommand nameField namespace namespaceInfo newPanelItems newton nodeCast nodeIconButton nodeOutliner nodePreset nodeType noise nonLinear normalConstraint normalize nurbsBoolean nurbsCopyUVSet nurbsCube nurbsEditUV nurbsPlane nurbsSelect nurbsSquare nurbsToPoly nurbsToPolygonsPref nurbsToSubdiv nurbsToSubdivPref nurbsUVSet nurbsViewDirectionVector objExists objectCenter objectLayer objectType objectTypeUI obsoleteProc oceanNurbsPreviewPlane offsetCurve offsetCurveOnSurface offsetSurface openGLExtension openMayaPref optionMenu optionMenuGrp optionVar orbit orbitCtx orientConstraint outlinerEditor outlinerPanel overrideModifier paintEffectsDisplay pairBlend palettePort paneLayout panel panelConfiguration panelHistory paramDimContext paramDimension paramLocator parent parentConstraint particle particleExists particleInstancer particleRenderInfo partition pasteKey pathAnimation pause pclose percent performanceOptions pfxstrokes pickWalk picture pixelMove planarSrf plane play playbackOptions playblast plugAttr plugNode pluginInfo pluginResourceUtil pointConstraint pointCurveConstraint pointLight pointMatrixMult pointOnCurve pointOnSurface pointPosition poleVectorConstraint polyAppend polyAppendFacetCtx polyAppendVertex polyAutoProjection polyAverageNormal polyAverageVertex polyBevel polyBlendColor polyBlindData polyBoolOp polyBridgeEdge polyCacheMonitor polyCheck polyChipOff polyClipboard polyCloseBorder polyCollapseEdge polyCollapseFacet polyColorBlindData polyColorDel polyColorPerVertex polyColorSet polyCompare polyCone polyCopyUV polyCrease polyCreaseCtx polyCreateFacet polyCreateFacetCtx polyCube polyCut polyCutCtx polyCylinder polyCylindricalProjection polyDelEdge polyDelFacet polyDelVertex polyDuplicateAndConnect polyDuplicateEdge polyEditUV polyEditUVShell polyEvaluate polyExtrudeEdge polyExtrudeFacet polyExtrudeVertex polyFlipEdge polyFlipUV polyForceUV polyGeoSampler polyHelix polyInfo polyInstallAction polyLayoutUV polyListComponentConversion polyMapCut polyMapDel polyMapSew polyMapSewMove polyMergeEdge polyMergeEdgeCtx polyMergeFacet polyMergeFacetCtx polyMergeUV polyMergeVertex polyMirrorFace polyMoveEdge polyMoveFacet polyMoveFacetUV polyMoveUV polyMoveVertex polyNormal polyNormalPerVertex polyNormalizeUV polyOptUvs polyOptions polyOutput polyPipe polyPlanarProjection polyPlane polyPlatonicSolid polyPoke polyPrimitive polyPrism polyProjection polyPyramid polyQuad polyQueryBlindData polyReduce polySelect polySelectConstraint polySelectConstraintMonitor polySelectCtx polySelectEditCtx polySeparate polySetToFaceNormal polySewEdge polyShortestPathCtx polySmooth polySoftEdge polySphere polySphericalProjection polySplit polySplitCtx polySplitEdge polySplitRing polySplitVertex polyStraightenUVBorder polySubdivideEdge polySubdivideFacet polyToSubdiv polyTorus polyTransfer polyTriangulate polyUVSet polyUnite polyWedgeFace popen popupMenu pose pow preloadRefEd print progressBar progressWindow projFileViewer projectCurve projectTangent projectionContext projectionManip promptDialog propModCtx propMove psdChannelOutliner psdEditTextureFile psdExport psdTextureFile putenv pwd python querySubdiv quit rad_to_deg radial radioButton radioButtonGrp radioCollection radioMenuItemCollection rampColorPort rand randomizeFollicles randstate rangeControl readTake rebuildCurve rebuildSurface recordAttr recordDevice redo reference referenceEdit referenceQuery refineSubdivSelectionList refresh refreshAE registerPluginResource rehash reloadImage removeJoint removeMultiInstance removePanelCategory rename renameAttr renameSelectionList renameUI render renderGlobalsNode renderInfo renderLayerButton renderLayerParent renderLayerPostProcess renderLayerUnparent renderManip renderPartition renderQualityNode renderSettings renderThumbnailUpdate renderWindowEditor renderWindowSelectContext renderer reorder reorderDeformers requires reroot resampleFluid resetAE resetPfxToPolyCamera resetTool resolutionNode retarget reverseCurve reverseSurface revolve rgb_to_hsv rigidBody rigidSolver roll rollCtx rootOf rot rotate rotationInterpolation roundConstantRadius rowColumnLayout rowLayout runTimeCommand runup sampleImage saveAllShelves saveAttrPreset saveFluid saveImage saveInitialState saveMenu savePrefObjects savePrefs saveShelf saveToolSettings scale scaleBrushBrightness scaleComponents scaleConstraint scaleKey scaleKeyCtx sceneEditor sceneUIReplacement scmh scriptCtx scriptEditorInfo scriptJob scriptNode scriptTable scriptToShelf scriptedPanel scriptedPanelType scrollField scrollLayout sculpt searchPathArray seed selLoadSettings select selectContext selectCurveCV selectKey selectKeyCtx selectKeyframeRegionCtx selectMode selectPref selectPriority selectType selectedNodes selectionConnection separator setAttr setAttrEnumResource setAttrMapping setAttrNiceNameResource setConstraintRestPosition setDefaultShadingGroup setDrivenKeyframe setDynamic setEditCtx setEditor setFluidAttr setFocus setInfinity setInputDeviceMapping setKeyCtx setKeyPath setKeyframe setKeyframeBlendshapeTargetWts setMenuMode setNodeNiceNameResource setNodeTypeFlag setParent setParticleAttr setPfxToPolyCamera setPluginResource setProject setStampDensity setStartupMessage setState setToolTo setUITemplate setXformManip sets shadingConnection shadingGeometryRelCtx shadingLightRelCtx shadingNetworkCompare shadingNode shapeCompare shelfButton shelfLayout shelfTabLayout shellField shortNameOf showHelp showHidden showManipCtx showSelectionInTitle showShadingGroupAttrEditor showWindow sign simplify sin singleProfileBirailSurface size sizeBytes skinCluster skinPercent smoothCurve smoothTangentSurface smoothstep snap2to2 snapKey snapMode snapTogetherCtx snapshot soft softMod softModCtx sort sound soundControl source spaceLocator sphere sphrand spotLight spotLightPreviewPort spreadSheetEditor spring sqrt squareSurface srtContext stackTrace startString startsWith stitchAndExplodeShell stitchSurface stitchSurfacePoints strcmp stringArrayCatenate stringArrayContains stringArrayCount stringArrayInsertAtIndex stringArrayIntersector stringArrayRemove stringArrayRemoveAtIndex stringArrayRemoveDuplicates stringArrayRemoveExact stringArrayToString stringToStringArray strip stripPrefixFromName stroke subdAutoProjection subdCleanTopology subdCollapse subdDuplicateAndConnect subdEditUV subdListComponentConversion subdMapCut subdMapSewMove subdMatchTopology subdMirror subdToBlind subdToPoly subdTransferUVsToCache subdiv subdivCrease subdivDisplaySmoothness substitute substituteAllString substituteGeometry substring surface surfaceSampler surfaceShaderList swatchDisplayPort switchTable symbolButton symbolCheckBox sysFile system tabLayout tan tangentConstraint texLatticeDeformContext texManipContext texMoveContext texMoveUVShellContext texRotateContext texScaleContext texSelectContext texSelectShortestPathCtx texSmudgeUVContext texWinToolCtx text textCurves textField textFieldButtonGrp textFieldGrp textManip textScrollList textToShelf textureDisplacePlane textureHairColor texturePlacementContext textureWindow threadCount threePointArcCtx timeControl timePort timerX toNativePath toggle toggleAxis toggleWindowVisibility tokenize tokenizeList tolerance tolower toolButton toolCollection toolDropped toolHasOptions toolPropertyWindow torus toupper trace track trackCtx transferAttributes transformCompare transformLimits translator trim trunc truncateFluidCache truncateHairCache tumble tumbleCtx turbulence twoPointArcCtx uiRes uiTemplate unassignInputDevice undo undoInfo ungroup uniform unit unloadPlugin untangleUV untitledFileName untrim upAxis updateAE userCtx uvLink uvSnapshot validateShelfName vectorize view2dToolCtx viewCamera viewClipPlane viewFit viewHeadOn viewLookAt viewManip viewPlace viewSet visor volumeAxis vortex waitCursor warning webBrowser webBrowserPrefs whatIs window windowPref wire wireContext workspace wrinkle wrinkleContext writeTake xbmLangPathList xform",
      illegal: "</",
      contains: [I.C_NUMBER_MODE, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, {
        className: "string",
        begin: "`",
        end: "`",
        contains: [I.BACKSLASH_ESCAPE]
      }, {
        begin: /[$%@](\^\w\b|#\w+|[^\s\w{]|\{\w+\}|\w+)/
      }, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE]
    }
  }
  SX2.exports = o09
})
// @from(Start 4614284, End 4616869)
PX2 = Y((UF3, yX2) => {
  function e09(I) {
    let d = {
        keyword: "module use_module import_module include_module end_module initialise mutable initialize finalize finalise interface implementation pred mode func type inst solver any_pred any_func is semidet det nondet multi erroneous failure cc_nondet cc_multi typeclass instance where pragma promise external trace atomic or_else require_complete_switch require_det require_semidet require_multi require_nondet require_cc_multi require_cc_nondet require_erroneous require_failure",
        meta: "inline no_inline type_spec source_file fact_table obsolete memo loop_check minimal_model terminates does_not_terminate check_termination promise_equivalent_clauses foreign_proc foreign_decl foreign_code foreign_type foreign_import_module foreign_export_enum foreign_export foreign_enum may_call_mercury will_not_call_mercury thread_safe not_thread_safe maybe_thread_safe promise_pure promise_semipure tabled_for_io local untrailed trailed attach_to_io_state can_pass_as_mercury_type stable will_not_throw_exception may_modify_trail will_not_modify_trail may_duplicate may_not_duplicate affects_liveness does_not_affect_liveness doesnt_affect_liveness no_sharing unknown_sharing sharing",
        built_in: "some all not if then else true fail false try catch catch_any semidet_true semidet_false semidet_fail impure_true impure semipure"
      },
      G = I.COMMENT("%", "$"),
      Z = {
        className: "number",
        begin: "0'.\\|0[box][0-9a-fA-F]*"
      },
      C = I.inherit(I.APOS_STRING_MODE, {
        relevance: 0
      }),
      W = I.inherit(I.QUOTE_STRING_MODE, {
        relevance: 0
      }),
      w = {
        className: "subst",
        begin: "\\\\[abfnrtv]\\|\\\\x[0-9a-fA-F]*\\\\\\|%[-+# *.0-9]*[dioxXucsfeEgGp]",
        relevance: 0
      };
    return W.contains = W.contains.slice(), W.contains.push(w), {
      name: "Mercury",
      aliases: ["m", "moo"],
      keywords: d,
      contains: [{
        className: "built_in",
        variants: [{
          begin: "<=>"
        }, {
          begin: "<=",
          relevance: 0
        }, {
          begin: "=>",
          relevance: 0
        }, {
          begin: "/\\\\"
        }, {
          begin: "\\\\/"
        }]
      }, {
        className: "built_in",
        variants: [{
          begin: ":-\\|-->"
        }, {
          begin: "=",
          relevance: 0
        }]
      }, G, I.C_BLOCK_COMMENT_MODE, Z, I.NUMBER_MODE, C, W, {
        begin: /:-/
      }, {
        begin: /\.$/
      }]
    }
  }
  yX2.exports = e09
})
// @from(Start 4616875, End 4619761)
uX2 = Y((vF3, $X2) => {
  function t09(I) {
    return {
      name: "MIPS Assembly",
      case_insensitive: !0,
      aliases: ["mips"],
      keywords: {
        $pattern: "\\.?" + I.IDENT_RE,
        meta: ".2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .ltorg ",
        built_in: "$0 $1 $2 $3 $4 $5 $6 $7 $8 $9 $10 $11 $12 $13 $14 $15 $16 $17 $18 $19 $20 $21 $22 $23 $24 $25 $26 $27 $28 $29 $30 $31 zero at v0 v1 a0 a1 a2 a3 a4 a5 a6 a7 t0 t1 t2 t3 t4 t5 t6 t7 t8 t9 s0 s1 s2 s3 s4 s5 s6 s7 s8 k0 k1 gp sp fp ra $f0 $f1 $f2 $f2 $f4 $f5 $f6 $f7 $f8 $f9 $f10 $f11 $f12 $f13 $f14 $f15 $f16 $f17 $f18 $f19 $f20 $f21 $f22 $f23 $f24 $f25 $f26 $f27 $f28 $f29 $f30 $f31 Context Random EntryLo0 EntryLo1 Context PageMask Wired EntryHi HWREna BadVAddr Count Compare SR IntCtl SRSCtl SRSMap Cause EPC PRId EBase Config Config1 Config2 Config3 LLAddr Debug DEPC DESAVE CacheErr ECC ErrorEPC TagLo DataLo TagHi DataHi WatchLo WatchHi PerfCtl PerfCnt "
      },
      contains: [{
        className: "keyword",
        begin: "\\b(addi?u?|andi?|b(al)?|beql?|bgez(al)?l?|bgtzl?|blezl?|bltz(al)?l?|bnel?|cl[oz]|divu?|ext|ins|j(al)?|jalr(\\.hb)?|jr(\\.hb)?|lbu?|lhu?|ll|lui|lw[lr]?|maddu?|mfhi|mflo|movn|movz|move|msubu?|mthi|mtlo|mul|multu?|nop|nor|ori?|rotrv?|sb|sc|se[bh]|sh|sllv?|slti?u?|srav?|srlv?|subu?|sw[lr]?|xori?|wsbh|abs\\.[sd]|add\\.[sd]|alnv.ps|bc1[ft]l?|c\\.(s?f|un|u?eq|[ou]lt|[ou]le|ngle?|seq|l[et]|ng[et])\\.[sd]|(ceil|floor|round|trunc)\\.[lw]\\.[sd]|cfc1|cvt\\.d\\.[lsw]|cvt\\.l\\.[dsw]|cvt\\.ps\\.s|cvt\\.s\\.[dlw]|cvt\\.s\\.p[lu]|cvt\\.w\\.[dls]|div\\.[ds]|ldx?c1|luxc1|lwx?c1|madd\\.[sd]|mfc1|mov[fntz]?\\.[ds]|msub\\.[sd]|mth?c1|mul\\.[ds]|neg\\.[ds]|nmadd\\.[ds]|nmsub\\.[ds]|p[lu][lu]\\.ps|recip\\.fmt|r?sqrt\\.[ds]|sdx?c1|sub\\.[ds]|suxc1|swx?c1|break|cache|d?eret|[de]i|ehb|mfc0|mtc0|pause|prefx?|rdhwr|rdpgpr|sdbbp|ssnop|synci?|syscall|teqi?|tgei?u?|tlb(p|r|w[ir])|tlti?u?|tnei?|wait|wrpgpr)",
        end: "\\s"
      }, I.COMMENT("[;#](?!\\s*$)", "$"), I.C_BLOCK_COMMENT_MODE, I.QUOTE_STRING_MODE, {
        className: "string",
        begin: "'",
        end: "[^\\\\]'",
        relevance: 0
      }, {
        className: "title",
        begin: "\\|",
        end: "\\|",
        illegal: "\\n",
        relevance: 0
      }, {
        className: "number",
        variants: [{
          begin: "0x[0-9a-f]+"
        }, {
          begin: "\\b-?\\d+"
        }],
        relevance: 0
      }, {
        className: "symbol",
        variants: [{
          begin: "^\\s*[a-z_\\.\\$][a-z0-9_\\.\\$]+:"
        }, {
          begin: "^\\s*[0-9]+:"
        }, {
          begin: "[0-9]+[bf]"
        }],
        relevance: 0
      }],
      illegal: /\//
    }
  }
  $X2.exports = t09
})
// @from(Start 4619767, End 4620534)
OX2 = Y((EF3, TX2) => {
  function I29(I) {
    return {
      name: "Mizar",
      keywords: "environ vocabularies notations constructors definitions registrations theorems schemes requirements begin end definition registration cluster existence pred func defpred deffunc theorem proof let take assume then thus hence ex for st holds consider reconsider such that and in provided of as from be being by means equals implies iff redefine define now not or attr is mode suppose per cases set thesis contradiction scheme reserve struct correctness compatibility coherence symmetry assymetry reflexivity irreflexivity connectedness uniqueness commutativity idempotence involutiveness projectivity",
      contains: [I.COMMENT("::", "$")]
    }
  }
  TX2.exports = I29
})
// @from(Start 4620540, End 4626893)
hX2 = Y((MF3, bX2) => {
  function lX2(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function qR(...I) {
    return I.map((G) => lX2(G)).join("")
  }

  function mX2(...I) {
    return "(" + I.map((G) => lX2(G)).join("|") + ")"
  }

  function d29(I) {
    let d = ["abs", "accept", "alarm", "and", "atan2", "bind", "binmode", "bless", "break", "caller", "chdir", "chmod", "chomp", "chop", "chown", "chr", "chroot", "close", "closedir", "connect", "continue", "cos", "crypt", "dbmclose", "dbmopen", "defined", "delete", "die", "do", "dump", "each", "else", "elsif", "endgrent", "endhostent", "endnetent", "endprotoent", "endpwent", "endservent", "eof", "eval", "exec", "exists", "exit", "exp", "fcntl", "fileno", "flock", "for", "foreach", "fork", "format", "formline", "getc", "getgrent", "getgrgid", "getgrnam", "gethostbyaddr", "gethostbyname", "gethostent", "getlogin", "getnetbyaddr", "getnetbyname", "getnetent", "getpeername", "getpgrp", "getpriority", "getprotobyname", "getprotobynumber", "getprotoent", "getpwent", "getpwnam", "getpwuid", "getservbyname", "getservbyport", "getservent", "getsockname", "getsockopt", "given", "glob", "gmtime", "goto", "grep", "gt", "hex", "if", "index", "int", "ioctl", "join", "keys", "kill", "last", "lc", "lcfirst", "length", "link", "listen", "local", "localtime", "log", "lstat", "lt", "ma", "map", "mkdir", "msgctl", "msgget", "msgrcv", "msgsnd", "my", "ne", "next", "no", "not", "oct", "open", "opendir", "or", "ord", "our", "pack", "package", "pipe", "pop", "pos", "print", "printf", "prototype", "push", "q|0", "qq", "quotemeta", "qw", "qx", "rand", "read", "readdir", "readline", "readlink", "readpipe", "recv", "redo", "ref", "rename", "require", "reset", "return", "reverse", "rewinddir", "rindex", "rmdir", "say", "scalar", "seek", "seekdir", "select", "semctl", "semget", "semop", "send", "setgrent", "sethostent", "setnetent", "setpgrp", "setpriority", "setprotoent", "setpwent", "setservent", "setsockopt", "shift", "shmctl", "shmget", "shmread", "shmwrite", "shutdown", "sin", "sleep", "socket", "socketpair", "sort", "splice", "split", "sprintf", "sqrt", "srand", "stat", "state", "study", "sub", "substr", "symlink", "syscall", "sysopen", "sysread", "sysseek", "system", "syswrite", "tell", "telldir", "tie", "tied", "time", "times", "tr", "truncate", "uc", "ucfirst", "umask", "undef", "unless", "unlink", "unpack", "unshift", "untie", "until", "use", "utime", "values", "vec", "wait", "waitpid", "wantarray", "warn", "when", "while", "write", "x|0", "xor", "y|0"],
      G = /[dualxmsipngr]{0,12}/,
      Z = {
        $pattern: /[\w.]+/,
        keyword: d.join(" ")
      },
      C = {
        className: "subst",
        begin: "[$@]\\{",
        end: "\\}",
        keywords: Z
      },
      W = {
        begin: /->\{/,
        end: /\}/
      },
      w = {
        variants: [{
          begin: /\$\d/
        }, {
          begin: qR(/[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/, "(?![A-Za-z])(?![@$%])")
        }, {
          begin: /[$%@][^\s\w{]/,
          relevance: 0
        }]
      },
      B = [I.BACKSLASH_ESCAPE, C, w],
      A = [/!/, /\//, /\|/, /\?/, /'/, /"/, /#/],
      V = (F, g, J = "\\1") => {
        let K = J === "\\1" ? J : qR(J, g);
        return qR(qR("(?:", F, ")"), g, /(?:\\.|[^\\\/])*?/, K, /(?:\\.|[^\\\/])*?/, J, G)
      },
      X = (F, g, J) => {
        return qR(qR("(?:", F, ")"), g, /(?:\\.|[^\\\/])*?/, J, G)
      },
      _ = [w, I.HASH_COMMENT_MODE, I.COMMENT(/^=\w/, /=cut/, {
        endsWithParent: !0
      }), W, {
        className: "string",
        contains: B,
        variants: [{
          begin: "q[qwxr]?\\s*\\(",
          end: "\\)",
          relevance: 5
        }, {
          begin: "q[qwxr]?\\s*\\[",
          end: "\\]",
          relevance: 5
        }, {
          begin: "q[qwxr]?\\s*\\{",
          end: "\\}",
          relevance: 5
        }, {
          begin: "q[qwxr]?\\s*\\|",
          end: "\\|",
          relevance: 5
        }, {
          begin: "q[qwxr]?\\s*<",
          end: ">",
          relevance: 5
        }, {
          begin: "qw\\s+q",
          end: "q",
          relevance: 5
        }, {
          begin: "'",
          end: "'",
          contains: [I.BACKSLASH_ESCAPE]
        }, {
          begin: '"',
          end: '"'
        }, {
          begin: "`",
          end: "`",
          contains: [I.BACKSLASH_ESCAPE]
        }, {
          begin: /\{\w+\}/,
          relevance: 0
        }, {
          begin: "-?\\w+\\s*=>",
          relevance: 0
        }]
      }, {
        className: "number",
        begin: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        relevance: 0
      }, {
        begin: "(\\/\\/|" + I.RE_STARTERS_RE + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
        keywords: "split return print reverse grep",
        relevance: 0,
        contains: [I.HASH_COMMENT_MODE, {
          className: "regexp",
          variants: [{
            begin: V("s|tr|y", mX2(...A))
          }, {
            begin: V("s|tr|y", "\\(", "\\)")
          }, {
            begin: V("s|tr|y", "\\[", "\\]")
          }, {
            begin: V("s|tr|y", "\\{", "\\}")
          }],
          relevance: 2
        }, {
          className: "regexp",
          variants: [{
            begin: /(m|qr)\/\//,
            relevance: 0
          }, {
            begin: X("(?:m|qr)?", /\//, /\//)
          }, {
            begin: X("m|qr", mX2(...A), /\1/)
          }, {
            begin: X("m|qr", /\(/, /\)/)
          }, {
            begin: X("m|qr", /\[/, /\]/)
          }, {
            begin: X("m|qr", /\{/, /\}/)
          }]
        }]
      }, {
        className: "function",
        beginKeywords: "sub",
        end: "(\\s*\\(.*?\\))?[;{]",
        excludeEnd: !0,
        relevance: 5,
        contains: [I.TITLE_MODE]
      }, {
        begin: "-\\w\\b",
        relevance: 0
      }, {
        begin: "^__DATA__$",
        end: "^__END__$",
        subLanguage: "mojolicious",
        contains: [{
          begin: "^@@.*",
          end: "$",
          className: "comment"
        }]
      }];
    return C.contains = _, W.contains = _, {
      name: "Perl",
      aliases: ["pl", "pm"],
      keywords: Z,
      contains: _
    }
  }
  bX2.exports = d29
})
// @from(Start 4626899, End 4627369)
kX2 = Y((SF3, jX2) => {
  function G29(I) {
    return {
      name: "Mojolicious",
      subLanguage: "xml",
      contains: [{
        className: "meta",
        begin: "^__(END|DATA)__$"
      }, {
        begin: "^\\s*%{1,2}={0,2}",
        end: "$",
        subLanguage: "perl"
      }, {
        begin: "<%{1,2}={0,2}",
        end: "={0,1}%>",
        subLanguage: "perl",
        excludeBegin: !0,
        excludeEnd: !0
      }]
    }
  }
  jX2.exports = G29
})
// @from(Start 4627375, End 4629162)
cX2 = Y((LF3, xX2) => {
  function Z29(I) {
    let d = {
      className: "number",
      relevance: 0,
      variants: [{
        begin: "[$][a-fA-F0-9]+"
      }, I.NUMBER_MODE]
    };
    return {
      name: "Monkey",
      case_insensitive: !0,
      keywords: {
        keyword: "public private property continue exit extern new try catch eachin not abstract final select case default const local global field end if then else elseif endif while wend repeat until forever for to step next return module inline throw import",
        built_in: "DebugLog DebugStop Error Print ACos ACosr ASin ASinr ATan ATan2 ATan2r ATanr Abs Abs Ceil Clamp Clamp Cos Cosr Exp Floor Log Max Max Min Min Pow Sgn Sgn Sin Sinr Sqrt Tan Tanr Seed PI HALFPI TWOPI",
        literal: "true false null and or shl shr mod"
      },
      illegal: /\/\*/,
      contains: [I.COMMENT("#rem", "#end"), I.COMMENT("'", "$", {
        relevance: 0
      }), {
        className: "function",
        beginKeywords: "function method",
        end: "[(=:]|$",
        illegal: /\n/,
        contains: [I.UNDERSCORE_TITLE_MODE]
      }, {
        className: "class",
        beginKeywords: "class interface",
        end: "$",
        contains: [{
          beginKeywords: "extends implements"
        }, I.UNDERSCORE_TITLE_MODE]
      }, {
        className: "built_in",
        begin: "\\b(self|super)\\b"
      }, {
        className: "meta",
        begin: "\\s*#",
        end: "$",
        keywords: {
          "meta-keyword": "if else elseif endif end then"
        }
      }, {
        className: "meta",
        begin: "^\\s*strict\\b"
      }, {
        beginKeywords: "alias",
        end: "=",
        contains: [I.UNDERSCORE_TITLE_MODE]
      }, I.QUOTE_STRING_MODE, d]
    }
  }
  xX2.exports = Z29
})
// @from(Start 4629168, End 4631849)
iX2 = Y((yF3, pX2) => {
  function C29(I) {
    let d = {
        keyword: "if then not for in while do return else elseif break continue switch and or unless when class extends super local import export from using",
        literal: "true false nil",
        built_in: "_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table"
      },
      G = "[A-Za-z$_][0-9A-Za-z$_]*",
      Z = {
        className: "subst",
        begin: /#\{/,
        end: /\}/,
        keywords: d
      },
      C = [I.inherit(I.C_NUMBER_MODE, {
        starts: {
          end: "(\\s*/)?",
          relevance: 0
        }
      }), {
        className: "string",
        variants: [{
          begin: /'/,
          end: /'/,
          contains: [I.BACKSLASH_ESCAPE]
        }, {
          begin: /"/,
          end: /"/,
          contains: [I.BACKSLASH_ESCAPE, Z]
        }]
      }, {
        className: "built_in",
        begin: "@__" + I.IDENT_RE
      }, {
        begin: "@" + I.IDENT_RE
      }, {
        begin: I.IDENT_RE + "\\\\" + I.IDENT_RE
      }];
    Z.contains = C;
    let W = I.inherit(I.TITLE_MODE, {
        begin: "[A-Za-z$_][0-9A-Za-z$_]*"
      }),
      w = "(\\(.*\\)\\s*)?\\B[-=]>",
      B = {
        className: "params",
        begin: "\\([^\\(]",
        returnBegin: !0,
        contains: [{
          begin: /\(/,
          end: /\)/,
          keywords: d,
          contains: ["self"].concat(C)
        }]
      };
    return {
      name: "MoonScript",
      aliases: ["moon"],
      keywords: d,
      illegal: /\/\*/,
      contains: C.concat([I.COMMENT("--", "$"), {
        className: "function",
        begin: "^\\s*[A-Za-z$_][0-9A-Za-z$_]*\\s*=\\s*" + w,
        end: "[-=]>",
        returnBegin: !0,
        contains: [W, B]
      }, {
        begin: /[\(,:=]\s*/,
        relevance: 0,
        contains: [{
          className: "function",
          begin: w,
          end: "[-=]>",
          returnBegin: !0,
          contains: [B]
        }]
      }, {
        className: "class",
        beginKeywords: "class",
        end: "$",
        illegal: /[:="\[\]]/,
        contains: [{
          beginKeywords: "extends",
          endsWithParent: !0,
          illegal: /[:="\[\]]/,
          contains: [W]
        }, W]
      }, {
        className: "name",
        begin: "[A-Za-z$_][0-9A-Za-z$_]*:",
        end: ":",
        returnBegin: !0,
        returnEnd: !0,
        relevance: 0
      }])
    }
  }
  pX2.exports = C29
})
// @from(Start 4631855, End 4635179)
rX2 = Y((PF3, nX2) => {
  function W29(I) {
    return {
      name: "N1QL",
      case_insensitive: !0,
      contains: [{
        beginKeywords: "build create index delete drop explain infer|10 insert merge prepare select update upsert|10",
        end: /;/,
        endsWithParent: !0,
        keywords: {
          keyword: "all alter analyze and any array as asc begin between binary boolean break bucket build by call case cast cluster collate collection commit connect continue correlate cover create database dataset datastore declare decrement delete derived desc describe distinct do drop each element else end every except exclude execute exists explain fetch first flatten for force from function grant group gsi having if ignore ilike in include increment index infer inline inner insert intersect into is join key keys keyspace known last left let letting like limit lsm map mapping matched materialized merge minus namespace nest not number object offset on option or order outer over parse partition password path pool prepare primary private privilege procedure public raw realm reduce rename return returning revoke right role rollback satisfies schema select self semi set show some start statistics string system then to transaction trigger truncate under union unique unknown unnest unset update upsert use user using validate value valued values via view when where while with within work xor",
          literal: "true false null missing|5",
          built_in: "array_agg array_append array_concat array_contains array_count array_distinct array_ifnull array_length array_max array_min array_position array_prepend array_put array_range array_remove array_repeat array_replace array_reverse array_sort array_sum avg count max min sum greatest least ifmissing ifmissingornull ifnull missingif nullif ifinf ifnan ifnanorinf naninf neginfif posinfif clock_millis clock_str date_add_millis date_add_str date_diff_millis date_diff_str date_part_millis date_part_str date_trunc_millis date_trunc_str duration_to_str millis str_to_millis millis_to_str millis_to_utc millis_to_zone_name now_millis now_str str_to_duration str_to_utc str_to_zone_name decode_json encode_json encoded_size poly_length base64 base64_encode base64_decode meta uuid abs acos asin atan atan2 ceil cos degrees e exp ln log floor pi power radians random round sign sin sqrt tan trunc object_length object_names object_pairs object_inner_pairs object_values object_inner_values object_add object_put object_remove object_unwrap regexp_contains regexp_like regexp_position regexp_replace contains initcap length lower ltrim position repeat replace rtrim split substr title trim upper isarray isatom isboolean isnumber isobject isstring type toarray toatom toboolean tonumber toobject tostring"
        },
        contains: [{
          className: "string",
          begin: "'",
          end: "'",
          contains: [I.BACKSLASH_ESCAPE]
        }, {
          className: "string",
          begin: '"',
          end: '"',
          contains: [I.BACKSLASH_ESCAPE]
        }, {
          className: "symbol",
          begin: "`",
          end: "`",
          contains: [I.BACKSLASH_ESCAPE],
          relevance: 2
        }, I.C_NUMBER_MODE, I.C_BLOCK_COMMENT_MODE]
      }, I.C_BLOCK_COMMENT_MODE]
    }
  }
  nX2.exports = W29
})
// @from(Start 4635185, End 4637509)
sX2 = Y(($F3, aX2) => {
  function w29(I) {
    let d = {
        className: "variable",
        variants: [{
          begin: /\$\d+/
        }, {
          begin: /\$\{/,
          end: /\}/
        }, {
          begin: /[$@]/ + I.UNDERSCORE_IDENT_RE
        }]
      },
      G = {
        endsWithParent: !0,
        keywords: {
          $pattern: "[a-z/_]+",
          literal: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
        },
        relevance: 0,
        illegal: "=>",
        contains: [I.HASH_COMMENT_MODE, {
          className: "string",
          contains: [I.BACKSLASH_ESCAPE, d],
          variants: [{
            begin: /"/,
            end: /"/
          }, {
            begin: /'/,
            end: /'/
          }]
        }, {
          begin: "([a-z]+):/",
          end: "\\s",
          endsWithParent: !0,
          excludeEnd: !0,
          contains: [d]
        }, {
          className: "regexp",
          contains: [I.BACKSLASH_ESCAPE, d],
          variants: [{
            begin: "\\s\\^",
            end: "\\s|\\{|;",
            returnEnd: !0
          }, {
            begin: "~\\*?\\s+",
            end: "\\s|\\{|;",
            returnEnd: !0
          }, {
            begin: "\\*(\\.[a-z\\-]+)+"
          }, {
            begin: "([a-z\\-]+\\.)+\\*"
          }]
        }, {
          className: "number",
          begin: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
        }, {
          className: "number",
          begin: "\\b\\d+[kKmMgGdshdwy]*\\b",
          relevance: 0
        }, d]
      };
    return {
      name: "Nginx config",
      aliases: ["nginxconf"],
      contains: [I.HASH_COMMENT_MODE, {
        begin: I.UNDERSCORE_IDENT_RE + "\\s+\\{",
        returnBegin: !0,
        end: /\{/,
        contains: [{
          className: "section",
          begin: I.UNDERSCORE_IDENT_RE
        }],
        relevance: 0
      }, {
        begin: I.UNDERSCORE_IDENT_RE + "\\s",
        end: ";|\\{",
        returnBegin: !0,
        contains: [{
          className: "attribute",
          begin: I.UNDERSCORE_IDENT_RE,
          starts: G
        }],
        relevance: 0
      }],
      illegal: "[^\\s\\}]"
    }
  }
  aX2.exports = w29
})
// @from(Start 4637515, End 4639332)
eX2 = Y((uF3, oX2) => {
  function B29(I) {
    return {
      name: "Nim",
      keywords: {
        keyword: "addr and as asm bind block break case cast const continue converter discard distinct div do elif else end enum except export finally for from func generic if import in include interface is isnot iterator let macro method mixin mod nil not notin object of or out proc ptr raise ref return shl shr static template try tuple type using var when while with without xor yield",
        literal: "shared guarded stdin stdout stderr result true false",
        built_in: "int int8 int16 int32 int64 uint uint8 uint16 uint32 uint64 float float32 float64 bool char string cstring pointer expr stmt void auto any range array openarray varargs seq set clong culong cchar cschar cshort cint csize clonglong cfloat cdouble clongdouble cuchar cushort cuint culonglong cstringarray semistatic"
      },
      contains: [{
        className: "meta",
        begin: /\{\./,
        end: /\.\}/,
        relevance: 10
      }, {
        className: "string",
        begin: /[a-zA-Z]\w*"/,
        end: /"/,
        contains: [{
          begin: /""/
        }]
      }, {
        className: "string",
        begin: /([a-zA-Z]\w*)?"""/,
        end: /"""/
      }, I.QUOTE_STRING_MODE, {
        className: "type",
        begin: /\b[A-Z]\w+\b/,
        relevance: 0
      }, {
        className: "number",
        relevance: 0,
        variants: [{
          begin: /\b(0[xX][0-9a-fA-F][_0-9a-fA-F]*)('?[iIuU](8|16|32|64))?/
        }, {
          begin: /\b(0o[0-7][_0-7]*)('?[iIuUfF](8|16|32|64))?/
        }, {
          begin: /\b(0(b|B)[01][_01]*)('?[iIuUfF](8|16|32|64))?/
        }, {
          begin: /\b(\d[_\d]*)('?[iIuUfF](8|16|32|64))?/
        }]
      }, I.HASH_COMMENT_MODE]
    }
  }
  oX2.exports = B29
})
// @from(Start 4639338, End 4640345)
IY2 = Y((TF3, tX2) => {
  function A29(I) {
    let d = {
        keyword: "rec with let in inherit assert if else then",
        literal: "true false or and null",
        built_in: "import abort baseNameOf dirOf isNull builtins map removeAttrs throw toString derivation"
      },
      G = {
        className: "subst",
        begin: /\$\{/,
        end: /\}/,
        keywords: d
      },
      Z = {
        begin: /[a-zA-Z0-9-_]+(\s*=)/,
        returnBegin: !0,
        relevance: 0,
        contains: [{
          className: "attr",
          begin: /\S+/
        }]
      },
      C = {
        className: "string",
        contains: [G],
        variants: [{
          begin: "''",
          end: "''"
        }, {
          begin: '"',
          end: '"'
        }]
      },
      W = [I.NUMBER_MODE, I.HASH_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, C, Z];
    return G.contains = W, {
      name: "Nix",
      aliases: ["nixos"],
      keywords: d,
      contains: W
    }
  }
  tX2.exports = A29
})
// @from(Start 4640351, End 4640775)
GY2 = Y((OF3, dY2) => {
  function V29(I) {
    return {
      name: "Node REPL",
      contains: [{
        className: "meta",
        starts: {
          end: / |$/,
          starts: {
            end: "$",
            subLanguage: "javascript"
          }
        },
        variants: [{
          begin: /^>(?=[ ]|$)/
        }, {
          begin: /^\.\.\.(?=[ ]|$)/
        }]
      }]
    }
  }
  dY2.exports = V29
})
// @from(Start 4640781, End 4646581)
CY2 = Y((mF3, ZY2) => {
  function X29(I) {
    let d = {
        className: "variable",
        begin: /\$(ADMINTOOLS|APPDATA|CDBURN_AREA|CMDLINE|COMMONFILES32|COMMONFILES64|COMMONFILES|COOKIES|DESKTOP|DOCUMENTS|EXEDIR|EXEFILE|EXEPATH|FAVORITES|FONTS|HISTORY|HWNDPARENT|INSTDIR|INTERNET_CACHE|LANGUAGE|LOCALAPPDATA|MUSIC|NETHOOD|OUTDIR|PICTURES|PLUGINSDIR|PRINTHOOD|PROFILE|PROGRAMFILES32|PROGRAMFILES64|PROGRAMFILES|QUICKLAUNCH|RECENT|RESOURCES_LOCALIZED|RESOURCES|SENDTO|SMPROGRAMS|SMSTARTUP|STARTMENU|SYSDIR|TEMP|TEMPLATES|VIDEOS|WINDIR)/
      },
      G = {
        className: "variable",
        begin: /\$+\{[\w.:-]+\}/
      },
      Z = {
        className: "variable",
        begin: /\$+\w+/,
        illegal: /\(\)\{\}/
      },
      C = {
        className: "variable",
        begin: /\$+\([\w^.:-]+\)/
      },
      W = {
        className: "params",
        begin: "(ARCHIVE|FILE_ATTRIBUTE_ARCHIVE|FILE_ATTRIBUTE_NORMAL|FILE_ATTRIBUTE_OFFLINE|FILE_ATTRIBUTE_READONLY|FILE_ATTRIBUTE_SYSTEM|FILE_ATTRIBUTE_TEMPORARY|HKCR|HKCU|HKDD|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_DYN_DATA|HKEY_LOCAL_MACHINE|HKEY_PERFORMANCE_DATA|HKEY_USERS|HKLM|HKPD|HKU|IDABORT|IDCANCEL|IDIGNORE|IDNO|IDOK|IDRETRY|IDYES|MB_ABORTRETRYIGNORE|MB_DEFBUTTON1|MB_DEFBUTTON2|MB_DEFBUTTON3|MB_DEFBUTTON4|MB_ICONEXCLAMATION|MB_ICONINFORMATION|MB_ICONQUESTION|MB_ICONSTOP|MB_OK|MB_OKCANCEL|MB_RETRYCANCEL|MB_RIGHT|MB_RTLREADING|MB_SETFOREGROUND|MB_TOPMOST|MB_USERICON|MB_YESNO|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SYSTEM|TEMPORARY)"
      },
      w = {
        className: "keyword",
        begin: /!(addincludedir|addplugindir|appendfile|cd|define|delfile|echo|else|endif|error|execute|finalize|getdllversion|gettlbversion|if|ifdef|ifmacrodef|ifmacrondef|ifndef|include|insertmacro|macro|macroend|makensis|packhdr|searchparse|searchreplace|system|tempfile|undef|verbose|warning)/
      },
      B = {
        className: "meta",
        begin: /\$(\\[nrt]|\$)/
      },
      A = {
        className: "class",
        begin: /\w+::\w+/
      },
      V = {
        className: "string",
        variants: [{
          begin: '"',
          end: '"'
        }, {
          begin: "'",
          end: "'"
        }, {
          begin: "`",
          end: "`"
        }],
        illegal: /\n/,
        contains: [B, d, G, Z, C]
      };
    return {
      name: "NSIS",
      case_insensitive: !1,
      keywords: {
        keyword: "Abort AddBrandingImage AddSize AllowRootDirInstall AllowSkipFiles AutoCloseWindow BGFont BGGradient BrandingText BringToFront Call CallInstDLL Caption ChangeUI CheckBitmap ClearErrors CompletedText ComponentText CopyFiles CRCCheck CreateDirectory CreateFont CreateShortCut Delete DeleteINISec DeleteINIStr DeleteRegKey DeleteRegValue DetailPrint DetailsButtonText DirText DirVar DirVerify EnableWindow EnumRegKey EnumRegValue Exch Exec ExecShell ExecShellWait ExecWait ExpandEnvStrings File FileBufSize FileClose FileErrorText FileOpen FileRead FileReadByte FileReadUTF16LE FileReadWord FileWriteUTF16LE FileSeek FileWrite FileWriteByte FileWriteWord FindClose FindFirst FindNext FindWindow FlushINI GetCurInstType GetCurrentAddress GetDlgItem GetDLLVersion GetDLLVersionLocal GetErrorLevel GetFileTime GetFileTimeLocal GetFullPathName GetFunctionAddress GetInstDirError GetKnownFolderPath GetLabelAddress GetTempFileName Goto HideWindow Icon IfAbort IfErrors IfFileExists IfRebootFlag IfRtlLanguage IfShellVarContextAll IfSilent InitPluginsDir InstallButtonText InstallColors InstallDir InstallDirRegKey InstProgressFlags InstType InstTypeGetText InstTypeSetText Int64Cmp Int64CmpU Int64Fmt IntCmp IntCmpU IntFmt IntOp IntPtrCmp IntPtrCmpU IntPtrOp IsWindow LangString LicenseBkColor LicenseData LicenseForceSelection LicenseLangString LicenseText LoadAndSetImage LoadLanguageFile LockWindow LogSet LogText ManifestDPIAware ManifestLongPathAware ManifestMaxVersionTested ManifestSupportedOS MessageBox MiscButtonText Name Nop OutFile Page PageCallbacks PEAddResource PEDllCharacteristics PERemoveResource PESubsysVer Pop Push Quit ReadEnvStr ReadINIStr ReadRegDWORD ReadRegStr Reboot RegDLL Rename RequestExecutionLevel ReserveFile Return RMDir SearchPath SectionGetFlags SectionGetInstTypes SectionGetSize SectionGetText SectionIn SectionSetFlags SectionSetInstTypes SectionSetSize SectionSetText SendMessage SetAutoClose SetBrandingImage SetCompress SetCompressor SetCompressorDictSize SetCtlColors SetCurInstType SetDatablockOptimize SetDateSave SetDetailsPrint SetDetailsView SetErrorLevel SetErrors SetFileAttributes SetFont SetOutPath SetOverwrite SetRebootFlag SetRegView SetShellVarContext SetSilent ShowInstDetails ShowUninstDetails ShowWindow SilentInstall SilentUnInstall Sleep SpaceTexts StrCmp StrCmpS StrCpy StrLen SubCaption Unicode UninstallButtonText UninstallCaption UninstallIcon UninstallSubCaption UninstallText UninstPage UnRegDLL Var VIAddVersionKey VIFileVersion VIProductVersion WindowIcon WriteINIStr WriteRegBin WriteRegDWORD WriteRegExpandStr WriteRegMultiStr WriteRegNone WriteRegStr WriteUninstaller XPStyle",
        literal: "admin all auto both bottom bzip2 colored components current custom directory false force hide highest ifdiff ifnewer instfiles lastused leave left license listonly lzma nevershow none normal notset off on open print right show silent silentlog smooth textonly top true try un.components un.custom un.directory un.instfiles un.license uninstConfirm user Win10 Win7 Win8 WinVista zlib"
      },
      contains: [I.HASH_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.COMMENT(";", "$", {
        relevance: 0
      }), {
        className: "function",
        beginKeywords: "Function PageEx Section SectionGroup",
        end: "$"
      }, V, w, G, Z, C, W, A, I.NUMBER_MODE]
    }
  }
  ZY2.exports = X29
})
// @from(Start 4646587, End 4649709)
wY2 = Y((lF3, WY2) => {
  function Y29(I) {
    let d = {
        className: "built_in",
        begin: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
      },
      G = /[a-zA-Z@][a-zA-Z0-9_]*/,
      Z = {
        $pattern: G,
        keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required @encode @package @import @defs @compatibility_alias __bridge __bridge_transfer __bridge_retained __bridge_retain __covariant __contravariant __kindof _Nonnull _Nullable _Null_unspecified __FUNCTION__ __PRETTY_FUNCTION__ __attribute__ getter setter retain unsafe_unretained nonnull nullable null_unspecified null_resettable class instancetype NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN",
        literal: "false true FALSE TRUE nil YES NO NULL",
        built_in: "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
      },
      C = {
        $pattern: G,
        keyword: "@interface @class @protocol @implementation"
      };
    return {
      name: "Objective-C",
      aliases: ["mm", "objc", "obj-c", "obj-c++", "objective-c++"],
      keywords: Z,
      illegal: "</",
      contains: [d, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.C_NUMBER_MODE, I.QUOTE_STRING_MODE, I.APOS_STRING_MODE, {
        className: "string",
        variants: [{
          begin: '@"',
          end: '"',
          illegal: "\\n",
          contains: [I.BACKSLASH_ESCAPE]
        }]
      }, {
        className: "meta",
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: {
          "meta-keyword": "if else elif endif define undef warning error line pragma ifdef ifndef include"
        },
        contains: [{
          begin: /\\\n/,
          relevance: 0
        }, I.inherit(I.QUOTE_STRING_MODE, {
          className: "meta-string"
        }), {
          className: "meta-string",
          begin: /<.*?>/,
          end: /$/,
          illegal: "\\n"
        }, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE]
      }, {
        className: "class",
        begin: "(" + C.keyword.split(" ").join("|") + ")\\b",
        end: /(\{|$)/,
        excludeEnd: !0,
        keywords: C,
        contains: [I.UNDERSCORE_TITLE_MODE]
      }, {
        begin: "\\." + I.UNDERSCORE_IDENT_RE,
        relevance: 0
      }]
    }
  }
  WY2.exports = Y29
})
// @from(Start 4649715, End 4651349)
AY2 = Y((bF3, BY2) => {
  function _29(I) {
    return {
      name: "OCaml",
      aliases: ["ml"],
      keywords: {
        $pattern: "[a-z_]\\w*!?",
        keyword: "and as assert asr begin class constraint do done downto else end exception external for fun function functor if in include inherit! inherit initializer land lazy let lor lsl lsr lxor match method!|10 method mod module mutable new object of open! open or private rec sig struct then to try type val! val virtual when while with parser value",
        built_in: "array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 string unit in_channel out_channel ref",
        literal: "true false"
      },
      illegal: /\/\/|>>/,
      contains: [{
        className: "literal",
        begin: "\\[(\\|\\|)?\\]|\\(\\)",
        relevance: 0
      }, I.COMMENT("\\(\\*", "\\*\\)", {
        contains: ["self"]
      }), {
        className: "symbol",
        begin: "'[A-Za-z_](?!')[\\w']*"
      }, {
        className: "type",
        begin: "`[A-Z][\\w']*"
      }, {
        className: "type",
        begin: "\\b[A-Z][\\w']*",
        relevance: 0
      }, {
        begin: "[a-z_]\\w*'[\\w']*",
        relevance: 0
      }, I.inherit(I.APOS_STRING_MODE, {
        className: "string",
        relevance: 0
      }), I.inherit(I.QUOTE_STRING_MODE, {
        illegal: null
      }), {
        className: "number",
        begin: "\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",
        relevance: 0
      }, {
        begin: /->/
      }]
    }
  }
  BY2.exports = _29
})
// @from(Start 4651355, End 4653120)
XY2 = Y((hF3, VY2) => {
  function D29(I) {
    let d = {
        className: "keyword",
        begin: "\\$(f[asn]|t|vp[rtd]|children)"
      },
      G = {
        className: "literal",
        begin: "false|true|PI|undef"
      },
      Z = {
        className: "number",
        begin: "\\b\\d+(\\.\\d+)?(e-?\\d+)?",
        relevance: 0
      },
      C = I.inherit(I.QUOTE_STRING_MODE, {
        illegal: null
      }),
      W = {
        className: "meta",
        keywords: {
          "meta-keyword": "include use"
        },
        begin: "include|use <",
        end: ">"
      },
      w = {
        className: "params",
        begin: "\\(",
        end: "\\)",
        contains: ["self", Z, C, d, G]
      },
      B = {
        begin: "[*!#%]",
        relevance: 0
      },
      A = {
        className: "function",
        beginKeywords: "module function",
        end: /=|\{/,
        contains: [w, I.UNDERSCORE_TITLE_MODE]
      };
    return {
      name: "OpenSCAD",
      aliases: ["scad"],
      keywords: {
        keyword: "function module include use for intersection_for if else \\%",
        literal: "false true PI undef",
        built_in: "circle square polygon text sphere cube cylinder polyhedron translate rotate scale resize mirror multmatrix color offset hull minkowski union difference intersection abs sign sin cos tan acos asin atan atan2 floor round ceil ln log pow sqrt exp rands min max concat lookup str chr search version version_num norm cross parent_module echo import import_dxf dxf_linear_extrude linear_extrude rotate_extrude surface projection render children dxf_cross dxf_dim let assign"
      },
      contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, Z, W, C, d, B, A]
    }
  }
  VY2.exports = D29
})
// @from(Start 4653126, End 4655526)
_Y2 = Y((jF3, YY2) => {
  function H29(I) {
    let d = {
        $pattern: /\.?\w+/,
        keyword: "abstract add and array as asc aspect assembly async begin break block by case class concat const copy constructor continue create default delegate desc distinct div do downto dynamic each else empty end ensure enum equals event except exit extension external false final finalize finalizer finally flags for forward from function future global group has if implementation implements implies in index inherited inline interface into invariants is iterator join locked locking loop matching method mod module namespace nested new nil not notify nullable of old on operator or order out override parallel params partial pinned private procedure property protected public queryable raise read readonly record reintroduce remove repeat require result reverse sealed select self sequence set shl shr skip static step soft take then to true try tuple type union unit unsafe until uses using var virtual raises volatile where while with write xor yield await mapped deprecated stdcall cdecl pascal register safecall overload library platform reference packed strict published autoreleasepool selector strong weak unretained"
      },
      G = I.COMMENT(/\{/, /\}/, {
        relevance: 0
      }),
      Z = I.COMMENT("\\(\\*", "\\*\\)", {
        relevance: 10
      }),
      C = {
        className: "string",
        begin: "'",
        end: "'",
        contains: [{
          begin: "''"
        }]
      },
      W = {
        className: "string",
        begin: "(#\\d+)+"
      },
      w = {
        className: "function",
        beginKeywords: "function constructor destructor procedure method",
        end: "[:;]",
        keywords: "function constructor|10 destructor|10 procedure|10 method|10",
        contains: [I.TITLE_MODE, {
          className: "params",
          begin: "\\(",
          end: "\\)",
          keywords: d,
          contains: [C, W]
        }, G, Z]
      };
    return {
      name: "Oxygene",
      case_insensitive: !0,
      keywords: d,
      illegal: '("|\\$[G-Zg-z]|\\/\\*|</|=>|->)',
      contains: [G, Z, I.C_LINE_COMMENT_MODE, C, W, I.NUMBER_MODE, w, {
        className: "class",
        begin: "=\\bclass\\b",
        end: "end;",
        keywords: d,
        contains: [C, W, G, Z, I.C_LINE_COMMENT_MODE, w]
      }]
    }
  }
  YY2.exports = H29
})
// @from(Start 4655532, End 4656341)
HY2 = Y((kF3, DY2) => {
  function F29(I) {
    let d = I.COMMENT(/\{/, /\}/, {
      contains: ["self"]
    });
    return {
      name: "Parser3",
      subLanguage: "xml",
      relevance: 0,
      contains: [I.COMMENT("^#", "$"), I.COMMENT(/\^rem\{/, /\}/, {
        relevance: 10,
        contains: [d]
      }), {
        className: "meta",
        begin: "^@(?:BASE|USE|CLASS|OPTIONS)$",
        relevance: 10
      }, {
        className: "title",
        begin: "@[\\w\\-]+\\[[\\w^;\\-]*\\](?:\\[[\\w^;\\-]*\\])?(?:.*)$"
      }, {
        className: "variable",
        begin: /\$\{?[\w\-.:]+\}?/
      }, {
        className: "keyword",
        begin: /\^[\w\-.:]+/
      }, {
        className: "number",
        begin: "\\^#[0-9a-fA-F]+"
      }, I.C_NUMBER_MODE]
    }
  }
  DY2.exports = F29
})
// @from(Start 4656347, End 4657808)
gY2 = Y((xF3, FY2) => {
  function g29(I) {
    let d = {
        className: "variable",
        begin: /\$[\w\d#@][\w\d_]*/
      },
      G = {
        className: "variable",
        begin: /<(?!\/)/,
        end: />/
      };
    return {
      name: "Packet Filter config",
      aliases: ["pf.conf"],
      keywords: {
        $pattern: /[a-z0-9_<>-]+/,
        built_in: "block match pass load anchor|5 antispoof|10 set table",
        keyword: "in out log quick on rdomain inet inet6 proto from port os to route allow-opts divert-packet divert-reply divert-to flags group icmp-type icmp6-type label once probability recieved-on rtable prio queue tos tag tagged user keep fragment for os drop af-to|10 binat-to|10 nat-to|10 rdr-to|10 bitmask least-stats random round-robin source-hash static-port dup-to reply-to route-to parent bandwidth default min max qlimit block-policy debug fingerprints hostid limit loginterface optimization reassemble ruleset-optimization basic none profile skip state-defaults state-policy timeout const counters persist no modulate synproxy state|5 floating if-bound no-sync pflow|10 sloppy source-track global rule max-src-nodes max-src-states max-src-conn max-src-conn-rate overload flush scrub|5 max-mss min-ttl no-df|10 random-id",
        literal: "all any no-route self urpf-failed egress|5 unknown"
      },
      contains: [I.HASH_COMMENT_MODE, I.NUMBER_MODE, I.QUOTE_STRING_MODE, d, G]
    }
  }
  FY2.exports = g29
})
// @from(Start 4657814, End 4679056)
KY2 = Y((cF3, JY2) => {
  function J29(I) {
    let d = I.COMMENT("--", "$"),
      G = "[a-zA-Z_][a-zA-Z_0-9$]*",
      Z = "\\$([a-zA-Z_]?|[a-zA-Z_][a-zA-Z_0-9]*)\\$",
      C = "<<\\s*[a-zA-Z_][a-zA-Z_0-9$]*\\s*>>",
      W = "ABORT ALTER ANALYZE BEGIN CALL CHECKPOINT|10 CLOSE CLUSTER COMMENT COMMIT COPY CREATE DEALLOCATE DECLARE DELETE DISCARD DO DROP END EXECUTE EXPLAIN FETCH GRANT IMPORT INSERT LISTEN LOAD LOCK MOVE NOTIFY PREPARE REASSIGN|10 REFRESH REINDEX RELEASE RESET REVOKE ROLLBACK SAVEPOINT SECURITY SELECT SET SHOW START TRUNCATE UNLISTEN|10 UPDATE VACUUM|10 VALUES AGGREGATE COLLATION CONVERSION|10 DATABASE DEFAULT PRIVILEGES DOMAIN TRIGGER EXTENSION FOREIGN WRAPPER|10 TABLE FUNCTION GROUP LANGUAGE LARGE OBJECT MATERIALIZED VIEW OPERATOR CLASS FAMILY POLICY PUBLICATION|10 ROLE RULE SCHEMA SEQUENCE SERVER STATISTICS SUBSCRIPTION SYSTEM TABLESPACE CONFIGURATION DICTIONARY PARSER TEMPLATE TYPE USER MAPPING PREPARED ACCESS METHOD CAST AS TRANSFORM TRANSACTION OWNED TO INTO SESSION AUTHORIZATION INDEX PROCEDURE ASSERTION ALL ANALYSE AND ANY ARRAY ASC ASYMMETRIC|10 BOTH CASE CHECK COLLATE COLUMN CONCURRENTLY|10 CONSTRAINT CROSS DEFERRABLE RANGE DESC DISTINCT ELSE EXCEPT FOR FREEZE|10 FROM FULL HAVING ILIKE IN INITIALLY INNER INTERSECT IS ISNULL JOIN LATERAL LEADING LIKE LIMIT NATURAL NOT NOTNULL NULL OFFSET ON ONLY OR ORDER OUTER OVERLAPS PLACING PRIMARY REFERENCES RETURNING SIMILAR SOME SYMMETRIC TABLESAMPLE THEN TRAILING UNION UNIQUE USING VARIADIC|10 VERBOSE WHEN WHERE WINDOW WITH BY RETURNS INOUT OUT SETOF|10 IF STRICT CURRENT CONTINUE OWNER LOCATION OVER PARTITION WITHIN BETWEEN ESCAPE EXTERNAL INVOKER DEFINER WORK RENAME VERSION CONNECTION CONNECT TABLES TEMP TEMPORARY FUNCTIONS SEQUENCES TYPES SCHEMAS OPTION CASCADE RESTRICT ADD ADMIN EXISTS VALID VALIDATE ENABLE DISABLE REPLICA|10 ALWAYS PASSING COLUMNS PATH REF VALUE OVERRIDING IMMUTABLE STABLE VOLATILE BEFORE AFTER EACH ROW PROCEDURAL ROUTINE NO HANDLER VALIDATOR OPTIONS STORAGE OIDS|10 WITHOUT INHERIT DEPENDS CALLED INPUT LEAKPROOF|10 COST ROWS NOWAIT SEARCH UNTIL ENCRYPTED|10 PASSWORD CONFLICT|10 INSTEAD INHERITS CHARACTERISTICS WRITE CURSOR ALSO STATEMENT SHARE EXCLUSIVE INLINE ISOLATION REPEATABLE READ COMMITTED SERIALIZABLE UNCOMMITTED LOCAL GLOBAL SQL PROCEDURES RECURSIVE SNAPSHOT ROLLUP CUBE TRUSTED|10 INCLUDE FOLLOWING PRECEDING UNBOUNDED RANGE GROUPS UNENCRYPTED|10 SYSID FORMAT DELIMITER HEADER QUOTE ENCODING FILTER OFF FORCE_QUOTE FORCE_NOT_NULL FORCE_NULL COSTS BUFFERS TIMING SUMMARY DISABLE_PAGE_SKIPPING RESTART CYCLE GENERATED IDENTITY DEFERRED IMMEDIATE LEVEL LOGGED UNLOGGED OF NOTHING NONE EXCLUDE ATTRIBUTE USAGE ROUTINES TRUE FALSE NAN INFINITY ",
      w = "SUPERUSER NOSUPERUSER CREATEDB NOCREATEDB CREATEROLE NOCREATEROLE INHERIT NOINHERIT LOGIN NOLOGIN REPLICATION NOREPLICATION BYPASSRLS NOBYPASSRLS ",
      B = "ALIAS BEGIN CONSTANT DECLARE END EXCEPTION RETURN PERFORM|10 RAISE GET DIAGNOSTICS STACKED|10 FOREACH LOOP ELSIF EXIT WHILE REVERSE SLICE DEBUG LOG INFO NOTICE WARNING ASSERT OPEN ",
      A = "BIGINT INT8 BIGSERIAL SERIAL8 BIT VARYING VARBIT BOOLEAN BOOL BOX BYTEA CHARACTER CHAR VARCHAR CIDR CIRCLE DATE DOUBLE PRECISION FLOAT8 FLOAT INET INTEGER INT INT4 INTERVAL JSON JSONB LINE LSEG|10 MACADDR MACADDR8 MONEY NUMERIC DEC DECIMAL PATH POINT POLYGON REAL FLOAT4 SMALLINT INT2 SMALLSERIAL|10 SERIAL2|10 SERIAL|10 SERIAL4|10 TEXT TIME ZONE TIMETZ|10 TIMESTAMP TIMESTAMPTZ|10 TSQUERY|10 TSVECTOR|10 TXID_SNAPSHOT|10 UUID XML NATIONAL NCHAR INT4RANGE|10 INT8RANGE|10 NUMRANGE|10 TSRANGE|10 TSTZRANGE|10 DATERANGE|10 ANYELEMENT ANYARRAY ANYNONARRAY ANYENUM ANYRANGE CSTRING INTERNAL RECORD PG_DDL_COMMAND VOID UNKNOWN OPAQUE REFCURSOR NAME OID REGPROC|10 REGPROCEDURE|10 REGOPER|10 REGOPERATOR|10 REGCLASS|10 REGTYPE|10 REGROLE|10 REGNAMESPACE|10 REGCONFIG|10 REGDICTIONARY|10 ",
      V = A.trim().split(" ").map(function(K) {
        return K.split("|")[0]
      }).join("|"),
      X = "CURRENT_TIME CURRENT_TIMESTAMP CURRENT_USER CURRENT_CATALOG|10 CURRENT_DATE LOCALTIME LOCALTIMESTAMP CURRENT_ROLE|10 CURRENT_SCHEMA|10 SESSION_USER PUBLIC ",
      _ = "FOUND NEW OLD TG_NAME|10 TG_WHEN|10 TG_LEVEL|10 TG_OP|10 TG_RELID|10 TG_RELNAME|10 TG_TABLE_NAME|10 TG_TABLE_SCHEMA|10 TG_NARGS|10 TG_ARGV|10 TG_EVENT|10 TG_TAG|10 ROW_COUNT RESULT_OID|10 PG_CONTEXT|10 RETURNED_SQLSTATE COLUMN_NAME CONSTRAINT_NAME PG_DATATYPE_NAME|10 MESSAGE_TEXT TABLE_NAME SCHEMA_NAME PG_EXCEPTION_DETAIL|10 PG_EXCEPTION_HINT|10 PG_EXCEPTION_CONTEXT|10 ",
      F = "SQLSTATE SQLERRM|10 SUCCESSFUL_COMPLETION WARNING DYNAMIC_RESULT_SETS_RETURNED IMPLICIT_ZERO_BIT_PADDING NULL_VALUE_ELIMINATED_IN_SET_FUNCTION PRIVILEGE_NOT_GRANTED PRIVILEGE_NOT_REVOKED STRING_DATA_RIGHT_TRUNCATION DEPRECATED_FEATURE NO_DATA NO_ADDITIONAL_DYNAMIC_RESULT_SETS_RETURNED SQL_STATEMENT_NOT_YET_COMPLETE CONNECTION_EXCEPTION CONNECTION_DOES_NOT_EXIST CONNECTION_FAILURE SQLCLIENT_UNABLE_TO_ESTABLISH_SQLCONNECTION SQLSERVER_REJECTED_ESTABLISHMENT_OF_SQLCONNECTION TRANSACTION_RESOLUTION_UNKNOWN PROTOCOL_VIOLATION TRIGGERED_ACTION_EXCEPTION FEATURE_NOT_SUPPORTED INVALID_TRANSACTION_INITIATION LOCATOR_EXCEPTION INVALID_LOCATOR_SPECIFICATION INVALID_GRANTOR INVALID_GRANT_OPERATION INVALID_ROLE_SPECIFICATION DIAGNOSTICS_EXCEPTION STACKED_DIAGNOSTICS_ACCESSED_WITHOUT_ACTIVE_HANDLER CASE_NOT_FOUND CARDINALITY_VIOLATION DATA_EXCEPTION ARRAY_SUBSCRIPT_ERROR CHARACTER_NOT_IN_REPERTOIRE DATETIME_FIELD_OVERFLOW DIVISION_BY_ZERO ERROR_IN_ASSIGNMENT ESCAPE_CHARACTER_CONFLICT INDICATOR_OVERFLOW INTERVAL_FIELD_OVERFLOW INVALID_ARGUMENT_FOR_LOGARITHM INVALID_ARGUMENT_FOR_NTILE_FUNCTION INVALID_ARGUMENT_FOR_NTH_VALUE_FUNCTION INVALID_ARGUMENT_FOR_POWER_FUNCTION INVALID_ARGUMENT_FOR_WIDTH_BUCKET_FUNCTION INVALID_CHARACTER_VALUE_FOR_CAST INVALID_DATETIME_FORMAT INVALID_ESCAPE_CHARACTER INVALID_ESCAPE_OCTET INVALID_ESCAPE_SEQUENCE NONSTANDARD_USE_OF_ESCAPE_CHARACTER INVALID_INDICATOR_PARAMETER_VALUE INVALID_PARAMETER_VALUE INVALID_REGULAR_EXPRESSION INVALID_ROW_COUNT_IN_LIMIT_CLAUSE INVALID_ROW_COUNT_IN_RESULT_OFFSET_CLAUSE INVALID_TABLESAMPLE_ARGUMENT INVALID_TABLESAMPLE_REPEAT INVALID_TIME_ZONE_DISPLACEMENT_VALUE INVALID_USE_OF_ESCAPE_CHARACTER MOST_SPECIFIC_TYPE_MISMATCH NULL_VALUE_NOT_ALLOWED NULL_VALUE_NO_INDICATOR_PARAMETER NUMERIC_VALUE_OUT_OF_RANGE SEQUENCE_GENERATOR_LIMIT_EXCEEDED STRING_DATA_LENGTH_MISMATCH STRING_DATA_RIGHT_TRUNCATION SUBSTRING_ERROR TRIM_ERROR UNTERMINATED_C_STRING ZERO_LENGTH_CHARACTER_STRING FLOATING_POINT_EXCEPTION INVALID_TEXT_REPRESENTATION INVALID_BINARY_REPRESENTATION BAD_COPY_FILE_FORMAT UNTRANSLATABLE_CHARACTER NOT_AN_XML_DOCUMENT INVALID_XML_DOCUMENT INVALID_XML_CONTENT INVALID_XML_COMMENT INVALID_XML_PROCESSING_INSTRUCTION INTEGRITY_CONSTRAINT_VIOLATION RESTRICT_VIOLATION NOT_NULL_VIOLATION FOREIGN_KEY_VIOLATION UNIQUE_VIOLATION CHECK_VIOLATION EXCLUSION_VIOLATION INVALID_CURSOR_STATE INVALID_TRANSACTION_STATE ACTIVE_SQL_TRANSACTION BRANCH_TRANSACTION_ALREADY_ACTIVE HELD_CURSOR_REQUIRES_SAME_ISOLATION_LEVEL INAPPROPRIATE_ACCESS_MODE_FOR_BRANCH_TRANSACTION INAPPROPRIATE_ISOLATION_LEVEL_FOR_BRANCH_TRANSACTION NO_ACTIVE_SQL_TRANSACTION_FOR_BRANCH_TRANSACTION READ_ONLY_SQL_TRANSACTION SCHEMA_AND_DATA_STATEMENT_MIXING_NOT_SUPPORTED NO_ACTIVE_SQL_TRANSACTION IN_FAILED_SQL_TRANSACTION IDLE_IN_TRANSACTION_SESSION_TIMEOUT INVALID_SQL_STATEMENT_NAME TRIGGERED_DATA_CHANGE_VIOLATION INVALID_AUTHORIZATION_SPECIFICATION INVALID_PASSWORD DEPENDENT_PRIVILEGE_DESCRIPTORS_STILL_EXIST DEPENDENT_OBJECTS_STILL_EXIST INVALID_TRANSACTION_TERMINATION SQL_ROUTINE_EXCEPTION FUNCTION_EXECUTED_NO_RETURN_STATEMENT MODIFYING_SQL_DATA_NOT_PERMITTED PROHIBITED_SQL_STATEMENT_ATTEMPTED READING_SQL_DATA_NOT_PERMITTED INVALID_CURSOR_NAME EXTERNAL_ROUTINE_EXCEPTION CONTAINING_SQL_NOT_PERMITTED MODIFYING_SQL_DATA_NOT_PERMITTED PROHIBITED_SQL_STATEMENT_ATTEMPTED READING_SQL_DATA_NOT_PERMITTED EXTERNAL_ROUTINE_INVOCATION_EXCEPTION INVALID_SQLSTATE_RETURNED NULL_VALUE_NOT_ALLOWED TRIGGER_PROTOCOL_VIOLATED SRF_PROTOCOL_VIOLATED EVENT_TRIGGER_PROTOCOL_VIOLATED SAVEPOINT_EXCEPTION INVALID_SAVEPOINT_SPECIFICATION INVALID_CATALOG_NAME INVALID_SCHEMA_NAME TRANSACTION_ROLLBACK TRANSACTION_INTEGRITY_CONSTRAINT_VIOLATION SERIALIZATION_FAILURE STATEMENT_COMPLETION_UNKNOWN DEADLOCK_DETECTED SYNTAX_ERROR_OR_ACCESS_RULE_VIOLATION SYNTAX_ERROR INSUFFICIENT_PRIVILEGE CANNOT_COERCE GROUPING_ERROR WINDOWING_ERROR INVALID_RECURSION INVALID_FOREIGN_KEY INVALID_NAME NAME_TOO_LONG RESERVED_NAME DATATYPE_MISMATCH INDETERMINATE_DATATYPE COLLATION_MISMATCH INDETERMINATE_COLLATION WRONG_OBJECT_TYPE GENERATED_ALWAYS UNDEFINED_COLUMN UNDEFINED_FUNCTION UNDEFINED_TABLE UNDEFINED_PARAMETER UNDEFINED_OBJECT DUPLICATE_COLUMN DUPLICATE_CURSOR DUPLICATE_DATABASE DUPLICATE_FUNCTION DUPLICATE_PREPARED_STATEMENT DUPLICATE_SCHEMA DUPLICATE_TABLE DUPLICATE_ALIAS DUPLICATE_OBJECT AMBIGUOUS_COLUMN AMBIGUOUS_FUNCTION AMBIGUOUS_PARAMETER AMBIGUOUS_ALIAS INVALID_COLUMN_REFERENCE INVALID_COLUMN_DEFINITION INVALID_CURSOR_DEFINITION INVALID_DATABASE_DEFINITION INVALID_FUNCTION_DEFINITION INVALID_PREPARED_STATEMENT_DEFINITION INVALID_SCHEMA_DEFINITION INVALID_TABLE_DEFINITION INVALID_OBJECT_DEFINITION WITH_CHECK_OPTION_VIOLATION INSUFFICIENT_RESOURCES DISK_FULL OUT_OF_MEMORY TOO_MANY_CONNECTIONS CONFIGURATION_LIMIT_EXCEEDED PROGRAM_LIMIT_EXCEEDED STATEMENT_TOO_COMPLEX TOO_MANY_COLUMNS TOO_MANY_ARGUMENTS OBJECT_NOT_IN_PREREQUISITE_STATE OBJECT_IN_USE CANT_CHANGE_RUNTIME_PARAM LOCK_NOT_AVAILABLE OPERATOR_INTERVENTION QUERY_CANCELED ADMIN_SHUTDOWN CRASH_SHUTDOWN CANNOT_CONNECT_NOW DATABASE_DROPPED SYSTEM_ERROR IO_ERROR UNDEFINED_FILE DUPLICATE_FILE SNAPSHOT_TOO_OLD CONFIG_FILE_ERROR LOCK_FILE_EXISTS FDW_ERROR FDW_COLUMN_NAME_NOT_FOUND FDW_DYNAMIC_PARAMETER_VALUE_NEEDED FDW_FUNCTION_SEQUENCE_ERROR FDW_INCONSISTENT_DESCRIPTOR_INFORMATION FDW_INVALID_ATTRIBUTE_VALUE FDW_INVALID_COLUMN_NAME FDW_INVALID_COLUMN_NUMBER FDW_INVALID_DATA_TYPE FDW_INVALID_DATA_TYPE_DESCRIPTORS FDW_INVALID_DESCRIPTOR_FIELD_IDENTIFIER FDW_INVALID_HANDLE FDW_INVALID_OPTION_INDEX FDW_INVALID_OPTION_NAME FDW_INVALID_STRING_LENGTH_OR_BUFFER_LENGTH FDW_INVALID_STRING_FORMAT FDW_INVALID_USE_OF_NULL_POINTER FDW_TOO_MANY_HANDLES FDW_OUT_OF_MEMORY FDW_NO_SCHEMAS FDW_OPTION_NAME_NOT_FOUND FDW_REPLY_HANDLE FDW_SCHEMA_NOT_FOUND FDW_TABLE_NOT_FOUND FDW_UNABLE_TO_CREATE_EXECUTION FDW_UNABLE_TO_CREATE_REPLY FDW_UNABLE_TO_ESTABLISH_CONNECTION PLPGSQL_ERROR RAISE_EXCEPTION NO_DATA_FOUND TOO_MANY_ROWS ASSERT_FAILURE INTERNAL_ERROR DATA_CORRUPTED INDEX_CORRUPTED ",
      J = "ARRAY_AGG AVG BIT_AND BIT_OR BOOL_AND BOOL_OR COUNT EVERY JSON_AGG JSONB_AGG JSON_OBJECT_AGG JSONB_OBJECT_AGG MAX MIN MODE STRING_AGG SUM XMLAGG CORR COVAR_POP COVAR_SAMP REGR_AVGX REGR_AVGY REGR_COUNT REGR_INTERCEPT REGR_R2 REGR_SLOPE REGR_SXX REGR_SXY REGR_SYY STDDEV STDDEV_POP STDDEV_SAMP VARIANCE VAR_POP VAR_SAMP PERCENTILE_CONT PERCENTILE_DISC ROW_NUMBER RANK DENSE_RANK PERCENT_RANK CUME_DIST NTILE LAG LEAD FIRST_VALUE LAST_VALUE NTH_VALUE NUM_NONNULLS NUM_NULLS ABS CBRT CEIL CEILING DEGREES DIV EXP FLOOR LN LOG MOD PI POWER RADIANS ROUND SCALE SIGN SQRT TRUNC WIDTH_BUCKET RANDOM SETSEED ACOS ACOSD ASIN ASIND ATAN ATAND ATAN2 ATAN2D COS COSD COT COTD SIN SIND TAN TAND BIT_LENGTH CHAR_LENGTH CHARACTER_LENGTH LOWER OCTET_LENGTH OVERLAY POSITION SUBSTRING TREAT TRIM UPPER ASCII BTRIM CHR CONCAT CONCAT_WS CONVERT CONVERT_FROM CONVERT_TO DECODE ENCODE INITCAP LEFT LENGTH LPAD LTRIM MD5 PARSE_IDENT PG_CLIENT_ENCODING QUOTE_IDENT|10 QUOTE_LITERAL|10 QUOTE_NULLABLE|10 REGEXP_MATCH REGEXP_MATCHES REGEXP_REPLACE REGEXP_SPLIT_TO_ARRAY REGEXP_SPLIT_TO_TABLE REPEAT REPLACE REVERSE RIGHT RPAD RTRIM SPLIT_PART STRPOS SUBSTR TO_ASCII TO_HEX TRANSLATE OCTET_LENGTH GET_BIT GET_BYTE SET_BIT SET_BYTE TO_CHAR TO_DATE TO_NUMBER TO_TIMESTAMP AGE CLOCK_TIMESTAMP|10 DATE_PART DATE_TRUNC ISFINITE JUSTIFY_DAYS JUSTIFY_HOURS JUSTIFY_INTERVAL MAKE_DATE MAKE_INTERVAL|10 MAKE_TIME MAKE_TIMESTAMP|10 MAKE_TIMESTAMPTZ|10 NOW STATEMENT_TIMESTAMP|10 TIMEOFDAY TRANSACTION_TIMESTAMP|10 ENUM_FIRST ENUM_LAST ENUM_RANGE AREA CENTER DIAMETER HEIGHT ISCLOSED ISOPEN NPOINTS PCLOSE POPEN RADIUS WIDTH BOX BOUND_BOX CIRCLE LINE LSEG PATH POLYGON ABBREV BROADCAST HOST HOSTMASK MASKLEN NETMASK NETWORK SET_MASKLEN TEXT INET_SAME_FAMILY INET_MERGE MACADDR8_SET7BIT ARRAY_TO_TSVECTOR GET_CURRENT_TS_CONFIG NUMNODE PLAINTO_TSQUERY PHRASETO_TSQUERY WEBSEARCH_TO_TSQUERY QUERYTREE SETWEIGHT STRIP TO_TSQUERY TO_TSVECTOR JSON_TO_TSVECTOR JSONB_TO_TSVECTOR TS_DELETE TS_FILTER TS_HEADLINE TS_RANK TS_RANK_CD TS_REWRITE TSQUERY_PHRASE TSVECTOR_TO_ARRAY TSVECTOR_UPDATE_TRIGGER TSVECTOR_UPDATE_TRIGGER_COLUMN XMLCOMMENT XMLCONCAT XMLELEMENT XMLFOREST XMLPI XMLROOT XMLEXISTS XML_IS_WELL_FORMED XML_IS_WELL_FORMED_DOCUMENT XML_IS_WELL_FORMED_CONTENT XPATH XPATH_EXISTS XMLTABLE XMLNAMESPACES TABLE_TO_XML TABLE_TO_XMLSCHEMA TABLE_TO_XML_AND_XMLSCHEMA QUERY_TO_XML QUERY_TO_XMLSCHEMA QUERY_TO_XML_AND_XMLSCHEMA CURSOR_TO_XML CURSOR_TO_XMLSCHEMA SCHEMA_TO_XML SCHEMA_TO_XMLSCHEMA SCHEMA_TO_XML_AND_XMLSCHEMA DATABASE_TO_XML DATABASE_TO_XMLSCHEMA DATABASE_TO_XML_AND_XMLSCHEMA XMLATTRIBUTES TO_JSON TO_JSONB ARRAY_TO_JSON ROW_TO_JSON JSON_BUILD_ARRAY JSONB_BUILD_ARRAY JSON_BUILD_OBJECT JSONB_BUILD_OBJECT JSON_OBJECT JSONB_OBJECT JSON_ARRAY_LENGTH JSONB_ARRAY_LENGTH JSON_EACH JSONB_EACH JSON_EACH_TEXT JSONB_EACH_TEXT JSON_EXTRACT_PATH JSONB_EXTRACT_PATH JSON_OBJECT_KEYS JSONB_OBJECT_KEYS JSON_POPULATE_RECORD JSONB_POPULATE_RECORD JSON_POPULATE_RECORDSET JSONB_POPULATE_RECORDSET JSON_ARRAY_ELEMENTS JSONB_ARRAY_ELEMENTS JSON_ARRAY_ELEMENTS_TEXT JSONB_ARRAY_ELEMENTS_TEXT JSON_TYPEOF JSONB_TYPEOF JSON_TO_RECORD JSONB_TO_RECORD JSON_TO_RECORDSET JSONB_TO_RECORDSET JSON_STRIP_NULLS JSONB_STRIP_NULLS JSONB_SET JSONB_INSERT JSONB_PRETTY CURRVAL LASTVAL NEXTVAL SETVAL COALESCE NULLIF GREATEST LEAST ARRAY_APPEND ARRAY_CAT ARRAY_NDIMS ARRAY_DIMS ARRAY_FILL ARRAY_LENGTH ARRAY_LOWER ARRAY_POSITION ARRAY_POSITIONS ARRAY_PREPEND ARRAY_REMOVE ARRAY_REPLACE ARRAY_TO_STRING ARRAY_UPPER CARDINALITY STRING_TO_ARRAY UNNEST ISEMPTY LOWER_INC UPPER_INC LOWER_INF UPPER_INF RANGE_MERGE GENERATE_SERIES GENERATE_SUBSCRIPTS CURRENT_DATABASE CURRENT_QUERY CURRENT_SCHEMA|10 CURRENT_SCHEMAS|10 INET_CLIENT_ADDR INET_CLIENT_PORT INET_SERVER_ADDR INET_SERVER_PORT ROW_SECURITY_ACTIVE FORMAT_TYPE TO_REGCLASS TO_REGPROC TO_REGPROCEDURE TO_REGOPER TO_REGOPERATOR TO_REGTYPE TO_REGNAMESPACE TO_REGROLE COL_DESCRIPTION OBJ_DESCRIPTION SHOBJ_DESCRIPTION TXID_CURRENT TXID_CURRENT_IF_ASSIGNED TXID_CURRENT_SNAPSHOT TXID_SNAPSHOT_XIP TXID_SNAPSHOT_XMAX TXID_SNAPSHOT_XMIN TXID_VISIBLE_IN_SNAPSHOT TXID_STATUS CURRENT_SETTING SET_CONFIG BRIN_SUMMARIZE_NEW_VALUES BRIN_SUMMARIZE_RANGE BRIN_DESUMMARIZE_RANGE GIN_CLEAN_PENDING_LIST SUPPRESS_REDUNDANT_UPDATES_TRIGGER LO_FROM_BYTEA LO_PUT LO_GET LO_CREAT LO_CREATE LO_UNLINK LO_IMPORT LO_EXPORT LOREAD LOWRITE GROUPING CAST ".trim().split(" ").map(function(K) {
        return K.split("|")[0]
      }).join("|");
    return {
      name: "PostgreSQL",
      aliases: ["postgres", "postgresql"],
      case_insensitive: !0,
      keywords: {
        keyword: W + B + w,
        built_in: X + _ + F
      },
      illegal: /:==|\W\s*\(\*|(^|\s)\$[a-z]|\{\{|[a-z]:\s*$|\.\.\.|TO:|DO:/,
      contains: [{
        className: "keyword",
        variants: [{
          begin: /\bTEXT\s*SEARCH\b/
        }, {
          begin: /\b(PRIMARY|FOREIGN|FOR(\s+NO)?)\s+KEY\b/
        }, {
          begin: /\bPARALLEL\s+(UNSAFE|RESTRICTED|SAFE)\b/
        }, {
          begin: /\bSTORAGE\s+(PLAIN|EXTERNAL|EXTENDED|MAIN)\b/
        }, {
          begin: /\bMATCH\s+(FULL|PARTIAL|SIMPLE)\b/
        }, {
          begin: /\bNULLS\s+(FIRST|LAST)\b/
        }, {
          begin: /\bEVENT\s+TRIGGER\b/
        }, {
          begin: /\b(MAPPING|OR)\s+REPLACE\b/
        }, {
          begin: /\b(FROM|TO)\s+(PROGRAM|STDIN|STDOUT)\b/
        }, {
          begin: /\b(SHARE|EXCLUSIVE)\s+MODE\b/
        }, {
          begin: /\b(LEFT|RIGHT)\s+(OUTER\s+)?JOIN\b/
        }, {
          begin: /\b(FETCH|MOVE)\s+(NEXT|PRIOR|FIRST|LAST|ABSOLUTE|RELATIVE|FORWARD|BACKWARD)\b/
        }, {
          begin: /\bPRESERVE\s+ROWS\b/
        }, {
          begin: /\bDISCARD\s+PLANS\b/
        }, {
          begin: /\bREFERENCING\s+(OLD|NEW)\b/
        }, {
          begin: /\bSKIP\s+LOCKED\b/
        }, {
          begin: /\bGROUPING\s+SETS\b/
        }, {
          begin: /\b(BINARY|INSENSITIVE|SCROLL|NO\s+SCROLL)\s+(CURSOR|FOR)\b/
        }, {
          begin: /\b(WITH|WITHOUT)\s+HOLD\b/
        }, {
          begin: /\bWITH\s+(CASCADED|LOCAL)\s+CHECK\s+OPTION\b/
        }, {
          begin: /\bEXCLUDE\s+(TIES|NO\s+OTHERS)\b/
        }, {
          begin: /\bFORMAT\s+(TEXT|XML|JSON|YAML)\b/
        }, {
          begin: /\bSET\s+((SESSION|LOCAL)\s+)?NAMES\b/
        }, {
          begin: /\bIS\s+(NOT\s+)?UNKNOWN\b/
        }, {
          begin: /\bSECURITY\s+LABEL\b/
        }, {
          begin: /\bSTANDALONE\s+(YES|NO|NO\s+VALUE)\b/
        }, {
          begin: /\bWITH\s+(NO\s+)?DATA\b/
        }, {
          begin: /\b(FOREIGN|SET)\s+DATA\b/
        }, {
          begin: /\bSET\s+(CATALOG|CONSTRAINTS)\b/
        }, {
          begin: /\b(WITH|FOR)\s+ORDINALITY\b/
        }, {
          begin: /\bIS\s+(NOT\s+)?DOCUMENT\b/
        }, {
          begin: /\bXML\s+OPTION\s+(DOCUMENT|CONTENT)\b/
        }, {
          begin: /\b(STRIP|PRESERVE)\s+WHITESPACE\b/
        }, {
          begin: /\bNO\s+(ACTION|MAXVALUE|MINVALUE)\b/
        }, {
          begin: /\bPARTITION\s+BY\s+(RANGE|LIST|HASH)\b/
        }, {
          begin: /\bAT\s+TIME\s+ZONE\b/
        }, {
          begin: /\bGRANTED\s+BY\b/
        }, {
          begin: /\bRETURN\s+(QUERY|NEXT)\b/
        }, {
          begin: /\b(ATTACH|DETACH)\s+PARTITION\b/
        }, {
          begin: /\bFORCE\s+ROW\s+LEVEL\s+SECURITY\b/
        }, {
          begin: /\b(INCLUDING|EXCLUDING)\s+(COMMENTS|CONSTRAINTS|DEFAULTS|IDENTITY|INDEXES|STATISTICS|STORAGE|ALL)\b/
        }, {
          begin: /\bAS\s+(ASSIGNMENT|IMPLICIT|PERMISSIVE|RESTRICTIVE|ENUM|RANGE)\b/
        }]
      }, {
        begin: /\b(FORMAT|FAMILY|VERSION)\s*\(/
      }, {
        begin: /\bINCLUDE\s*\(/,
        keywords: "INCLUDE"
      }, {
        begin: /\bRANGE(?!\s*(BETWEEN|UNBOUNDED|CURRENT|[-0-9]+))/
      }, {
        begin: /\b(VERSION|OWNER|TEMPLATE|TABLESPACE|CONNECTION\s+LIMIT|PROCEDURE|RESTRICT|JOIN|PARSER|COPY|START|END|COLLATION|INPUT|ANALYZE|STORAGE|LIKE|DEFAULT|DELIMITER|ENCODING|COLUMN|CONSTRAINT|TABLE|SCHEMA)\s*=/
      }, {
        begin: /\b(PG_\w+?|HAS_[A-Z_]+_PRIVILEGE)\b/,
        relevance: 10
      }, {
        begin: /\bEXTRACT\s*\(/,
        end: /\bFROM\b/,
        returnEnd: !0,
        keywords: {
          type: "CENTURY DAY DECADE DOW DOY EPOCH HOUR ISODOW ISOYEAR MICROSECONDS MILLENNIUM MILLISECONDS MINUTE MONTH QUARTER SECOND TIMEZONE TIMEZONE_HOUR TIMEZONE_MINUTE WEEK YEAR"
        }
      }, {
        begin: /\b(XMLELEMENT|XMLPI)\s*\(\s*NAME/,
        keywords: {
          keyword: "NAME"
        }
      }, {
        begin: /\b(XMLPARSE|XMLSERIALIZE)\s*\(\s*(DOCUMENT|CONTENT)/,
        keywords: {
          keyword: "DOCUMENT CONTENT"
        }
      }, {
        beginKeywords: "CACHE INCREMENT MAXVALUE MINVALUE",
        end: I.C_NUMBER_RE,
        returnEnd: !0,
        keywords: "BY CACHE INCREMENT MAXVALUE MINVALUE"
      }, {
        className: "type",
        begin: /\b(WITH|WITHOUT)\s+TIME\s+ZONE\b/
      }, {
        className: "type",
        begin: /\bINTERVAL\s+(YEAR|MONTH|DAY|HOUR|MINUTE|SECOND)(\s+TO\s+(MONTH|HOUR|MINUTE|SECOND))?\b/
      }, {
        begin: /\bRETURNS\s+(LANGUAGE_HANDLER|TRIGGER|EVENT_TRIGGER|FDW_HANDLER|INDEX_AM_HANDLER|TSM_HANDLER)\b/,
        keywords: {
          keyword: "RETURNS",
          type: "LANGUAGE_HANDLER TRIGGER EVENT_TRIGGER FDW_HANDLER INDEX_AM_HANDLER TSM_HANDLER"
        }
      }, {
        begin: "\\b(" + J + ")\\s*\\("
      }, {
        begin: "\\.(" + V + ")\\b"
      }, {
        begin: "\\b(" + V + ")\\s+PATH\\b",
        keywords: {
          keyword: "PATH",
          type: A.replace("PATH ", "")
        }
      }, {
        className: "type",
        begin: "\\b(" + V + ")\\b"
      }, {
        className: "string",
        begin: "'",
        end: "'",
        contains: [{
          begin: "''"
        }]
      }, {
        className: "string",
        begin: "(e|E|u&|U&)'",
        end: "'",
        contains: [{
          begin: "\\\\."
        }],
        relevance: 10
      }, I.END_SAME_AS_BEGIN({
        begin: "\\$([a-zA-Z_]?|[a-zA-Z_][a-zA-Z_0-9]*)\\$",
        end: "\\$([a-zA-Z_]?|[a-zA-Z_][a-zA-Z_0-9]*)\\$",
        contains: [{
          subLanguage: ["pgsql", "perl", "python", "tcl", "r", "lua", "java", "php", "ruby", "bash", "scheme", "xml", "json"],
          endsWithParent: !0
        }]
      }), {
        begin: '"',
        end: '"',
        contains: [{
          begin: '""'
        }]
      }, I.C_NUMBER_MODE, I.C_BLOCK_COMMENT_MODE, d, {
        className: "meta",
        variants: [{
          begin: "%(ROW)?TYPE",
          relevance: 10
        }, {
          begin: "\\$\\d+"
        }, {
          begin: "^#\\w",
          end: "$"
        }]
      }, {
        className: "symbol",
        begin: C,
        relevance: 10
      }]
    }
  }
  JY2.exports = J29
})
// @from(Start 4679062, End 4684550)
zY2 = Y((pF3, NY2) => {
  function K29(I) {
    let d = {
        className: "variable",
        begin: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*" + "(?![A-Za-z0-9])(?![$])"
      },
      G = {
        className: "meta",
        variants: [{
          begin: /<\?php/,
          relevance: 10
        }, {
          begin: /<\?[=]?/
        }, {
          begin: /\?>/
        }]
      },
      Z = {
        className: "subst",
        variants: [{
          begin: /\$\w+/
        }, {
          begin: /\{\$/,
          end: /\}/
        }]
      },
      C = I.inherit(I.APOS_STRING_MODE, {
        illegal: null
      }),
      W = I.inherit(I.QUOTE_STRING_MODE, {
        illegal: null,
        contains: I.QUOTE_STRING_MODE.contains.concat(Z)
      }),
      w = I.END_SAME_AS_BEGIN({
        begin: /<<<[ \t]*(\w+)\n/,
        end: /[ \t]*(\w+)\b/,
        contains: I.QUOTE_STRING_MODE.contains.concat(Z)
      }),
      B = {
        className: "string",
        contains: [I.BACKSLASH_ESCAPE, G],
        variants: [I.inherit(C, {
          begin: "b'",
          end: "'"
        }), I.inherit(W, {
          begin: 'b"',
          end: '"'
        }), W, C, w]
      },
      A = {
        className: "number",
        variants: [{
          begin: "\\b0b[01]+(?:_[01]+)*\\b"
        }, {
          begin: "\\b0o[0-7]+(?:_[0-7]+)*\\b"
        }, {
          begin: "\\b0x[\\da-f]+(?:_[\\da-f]+)*\\b"
        }, {
          begin: "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:e[+-]?\\d+)?"
        }],
        relevance: 0
      },
      V = {
        keyword: "__CLASS__ __DIR__ __FILE__ __FUNCTION__ __LINE__ __METHOD__ __NAMESPACE__ __TRAIT__ die echo exit include include_once print require require_once array abstract and as binary bool boolean break callable case catch class clone const continue declare default do double else elseif empty enddeclare endfor endforeach endif endswitch endwhile enum eval extends final finally float for foreach from global goto if implements instanceof insteadof int integer interface isset iterable list match|0 mixed new object or private protected public real return string switch throw trait try unset use var void while xor yield",
        literal: "false null true",
        built_in: "Error|0 AppendIterator ArgumentCountError ArithmeticError ArrayIterator ArrayObject AssertionError BadFunctionCallException BadMethodCallException CachingIterator CallbackFilterIterator CompileError Countable DirectoryIterator DivisionByZeroError DomainException EmptyIterator ErrorException Exception FilesystemIterator FilterIterator GlobIterator InfiniteIterator InvalidArgumentException IteratorIterator LengthException LimitIterator LogicException MultipleIterator NoRewindIterator OutOfBoundsException OutOfRangeException OuterIterator OverflowException ParentIterator ParseError RangeException RecursiveArrayIterator RecursiveCachingIterator RecursiveCallbackFilterIterator RecursiveDirectoryIterator RecursiveFilterIterator RecursiveIterator RecursiveIteratorIterator RecursiveRegexIterator RecursiveTreeIterator RegexIterator RuntimeException SeekableIterator SplDoublyLinkedList SplFileInfo SplFileObject SplFixedArray SplHeap SplMaxHeap SplMinHeap SplObjectStorage SplObserver SplObserver SplPriorityQueue SplQueue SplStack SplSubject SplSubject SplTempFileObject TypeError UnderflowException UnexpectedValueException UnhandledMatchError ArrayAccess Closure Generator Iterator IteratorAggregate Serializable Stringable Throwable Traversable WeakReference WeakMap Directory __PHP_Incomplete_Class parent php_user_filter self static stdClass"
      };
    return {
      aliases: ["php3", "php4", "php5", "php6", "php7", "php8"],
      case_insensitive: !0,
      keywords: V,
      contains: [I.HASH_COMMENT_MODE, I.COMMENT("//", "$", {
        contains: [G]
      }), I.COMMENT("/\\*", "\\*/", {
        contains: [{
          className: "doctag",
          begin: "@[A-Za-z]+"
        }]
      }), I.COMMENT("__halt_compiler.+?;", !1, {
        endsWithParent: !0,
        keywords: "__halt_compiler"
      }), G, {
        className: "keyword",
        begin: /\$this\b/
      }, d, {
        begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
      }, {
        className: "function",
        relevance: 0,
        beginKeywords: "fn function",
        end: /[;{]/,
        excludeEnd: !0,
        illegal: "[$%\\[]",
        contains: [{
          beginKeywords: "use"
        }, I.UNDERSCORE_TITLE_MODE, {
          begin: "=>",
          endsParent: !0
        }, {
          className: "params",
          begin: "\\(",
          end: "\\)",
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: V,
          contains: ["self", d, I.C_BLOCK_COMMENT_MODE, B, A]
        }]
      }, {
        className: "class",
        variants: [{
          beginKeywords: "enum",
          illegal: /[($"]/
        }, {
          beginKeywords: "class interface trait",
          illegal: /[:($"]/
        }],
        relevance: 0,
        end: /\{/,
        excludeEnd: !0,
        contains: [{
          beginKeywords: "extends implements"
        }, I.UNDERSCORE_TITLE_MODE]
      }, {
        beginKeywords: "namespace",
        relevance: 0,
        end: ";",
        illegal: /[.']/,
        contains: [I.UNDERSCORE_TITLE_MODE]
      }, {
        beginKeywords: "use",
        relevance: 0,
        end: ";",
        contains: [I.UNDERSCORE_TITLE_MODE]
      }, B, A]
    }
  }
  NY2.exports = K29
})
// @from(Start 4684556, End 4685337)
fY2 = Y((iF3, QY2) => {
  function N29(I) {
    return {
      name: "PHP template",
      subLanguage: "xml",
      contains: [{
        begin: /<\?(php|=)?/,
        end: /\?>/,
        subLanguage: "php",
        contains: [{
          begin: "/\\*",
          end: "\\*/",
          skip: !0
        }, {
          begin: 'b"',
          end: '"',
          skip: !0
        }, {
          begin: "b'",
          end: "'",
          skip: !0
        }, I.inherit(I.APOS_STRING_MODE, {
          illegal: null,
          className: null,
          contains: null,
          skip: !0
        }), I.inherit(I.QUOTE_STRING_MODE, {
          illegal: null,
          className: null,
          contains: null,
          skip: !0
        })]
      }]
    }
  }
  QY2.exports = N29
})
// @from(Start 4685343, End 4685518)
RY2 = Y((nF3, qY2) => {
  function z29(I) {
    return {
      name: "Plain text",
      aliases: ["text", "txt"],
      disableAutodetect: !0
    }
  }
  qY2.exports = z29
})
// @from(Start 4685524, End 4686894)
vY2 = Y((rF3, UY2) => {
  function Q29(I) {
    let d = {
        keyword: "actor addressof and as be break class compile_error compile_intrinsic consume continue delegate digestof do else elseif embed end error for fun if ifdef in interface is isnt lambda let match new not object or primitive recover repeat return struct then trait try type until use var where while with xor",
        meta: "iso val tag trn box ref",
        literal: "this false true"
      },
      G = {
        className: "string",
        begin: '"""',
        end: '"""',
        relevance: 10
      },
      Z = {
        className: "string",
        begin: '"',
        end: '"',
        contains: [I.BACKSLASH_ESCAPE]
      },
      C = {
        className: "string",
        begin: "'",
        end: "'",
        contains: [I.BACKSLASH_ESCAPE],
        relevance: 0
      },
      W = {
        className: "type",
        begin: "\\b_?[A-Z][\\w]*",
        relevance: 0
      },
      w = {
        begin: I.IDENT_RE + "'",
        relevance: 0
      };
    return {
      name: "Pony",
      keywords: d,
      contains: [W, G, Z, C, w, {
        className: "number",
        begin: "(-?)(\\b0[xX][a-fA-F0-9]+|\\b0[bB][01]+|(\\b\\d+(_\\d+)?(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
        relevance: 0
      }, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE]
    }
  }
  UY2.exports = Q29
})
// @from(Start 4686900, End 4693076)
MY2 = Y((aF3, EY2) => {
  function f29(I) {
    let d = ["string", "char", "byte", "int", "long", "bool", "decimal", "single", "double", "DateTime", "xml", "array", "hashtable", "void"],
      G = "Add|Clear|Close|Copy|Enter|Exit|Find|Format|Get|Hide|Join|Lock|Move|New|Open|Optimize|Pop|Push|Redo|Remove|Rename|Reset|Resize|Search|Select|Set|Show|Skip|Split|Step|Switch|Undo|Unlock|Watch|Backup|Checkpoint|Compare|Compress|Convert|ConvertFrom|ConvertTo|Dismount|Edit|Expand|Export|Group|Import|Initialize|Limit|Merge|Mount|Out|Publish|Restore|Save|Sync|Unpublish|Update|Approve|Assert|Build|Complete|Confirm|Deny|Deploy|Disable|Enable|Install|Invoke|Register|Request|Restart|Resume|Start|Stop|Submit|Suspend|Uninstall|Unregister|Wait|Debug|Measure|Ping|Repair|Resolve|Test|Trace|Connect|Disconnect|Read|Receive|Send|Write|Block|Grant|Protect|Revoke|Unblock|Unprotect|Use|ForEach|Sort|Tee|Where",
      Z = "-and|-as|-band|-bnot|-bor|-bxor|-casesensitive|-ccontains|-ceq|-cge|-cgt|-cle|-clike|-clt|-cmatch|-cne|-cnotcontains|-cnotlike|-cnotmatch|-contains|-creplace|-csplit|-eq|-exact|-f|-file|-ge|-gt|-icontains|-ieq|-ige|-igt|-ile|-ilike|-ilt|-imatch|-in|-ine|-inotcontains|-inotlike|-inotmatch|-ireplace|-is|-isnot|-isplit|-join|-le|-like|-lt|-match|-ne|-not|-notcontains|-notin|-notlike|-notmatch|-or|-regex|-replace|-shl|-shr|-split|-wildcard|-xor",
      C = {
        $pattern: /-?[A-z\.\-]+\b/,
        keyword: "if else foreach return do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch hidden static parameter",
        built_in: "ac asnp cat cd CFS chdir clc clear clhy cli clp cls clv cnsn compare copy cp cpi cpp curl cvpa dbp del diff dir dnsn ebp echo|0 epal epcsv epsn erase etsn exsn fc fhx fl ft fw gal gbp gc gcb gci gcm gcs gdr gerr ghy gi gin gjb gl gm gmo gp gps gpv group gsn gsnp gsv gtz gu gv gwmi h history icm iex ihy ii ipal ipcsv ipmo ipsn irm ise iwmi iwr kill lp ls man md measure mi mount move mp mv nal ndr ni nmo npssc nsn nv ogv oh popd ps pushd pwd r rbp rcjb rcsn rd rdr ren ri rjb rm rmdir rmo rni rnp rp rsn rsnp rujb rv rvpa rwmi sajb sal saps sasv sbp sc scb select set shcm si sl sleep sls sort sp spjb spps spsv start stz sujb sv swmi tee trcm type wget where wjb write"
      },
      W = /\w[\w\d]*((-)[\w\d]+)*/,
      w = {
        begin: "`[\\s\\S]",
        relevance: 0
      },
      B = {
        className: "variable",
        variants: [{
          begin: /\$\B/
        }, {
          className: "keyword",
          begin: /\$this/
        }, {
          begin: /\$[\w\d][\w\d_:]*/
        }]
      },
      A = {
        className: "literal",
        begin: /\$(null|true|false)\b/
      },
      V = {
        className: "string",
        variants: [{
          begin: /"/,
          end: /"/
        }, {
          begin: /@"/,
          end: /^"@/
        }],
        contains: [w, B, {
          className: "variable",
          begin: /\$[A-z]/,
          end: /[^A-z]/
        }]
      },
      X = {
        className: "string",
        variants: [{
          begin: /'/,
          end: /'/
        }, {
          begin: /@'/,
          end: /^'@/
        }]
      },
      _ = {
        className: "doctag",
        variants: [{
          begin: /\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/
        }, {
          begin: /\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/
        }]
      },
      F = I.inherit(I.COMMENT(null, null), {
        variants: [{
          begin: /#/,
          end: /$/
        }, {
          begin: /<#/,
          end: /#>/
        }],
        contains: [_]
      }),
      g = {
        className: "built_in",
        variants: [{
          begin: "(".concat(G, ")+(-)[\\w\\d]+")
        }]
      },
      J = {
        className: "class",
        beginKeywords: "class enum",
        end: /\s*[{]/,
        excludeEnd: !0,
        relevance: 0,
        contains: [I.TITLE_MODE]
      },
      K = {
        className: "function",
        begin: /function\s+/,
        end: /\s*\{|$/,
        excludeEnd: !0,
        returnBegin: !0,
        relevance: 0,
        contains: [{
          begin: "function",
          relevance: 0,
          className: "keyword"
        }, {
          className: "title",
          begin: W,
          relevance: 0
        }, {
          begin: /\(/,
          end: /\)/,
          className: "params",
          relevance: 0,
          contains: [B]
        }]
      },
      Q = {
        begin: /using\s/,
        end: /$/,
        returnBegin: !0,
        contains: [V, X, {
          className: "keyword",
          begin: /(using|assembly|command|module|namespace|type)/
        }]
      },
      E = {
        variants: [{
          className: "operator",
          begin: "(".concat(Z, ")\\b")
        }, {
          className: "literal",
          begin: /(-)[\w\d]+/,
          relevance: 0
        }]
      },
      S = {
        className: "selector-tag",
        begin: /@\B/,
        relevance: 0
      },
      P = {
        className: "function",
        begin: /\[.*\]\s*[\w]+[ ]??\(/,
        end: /$/,
        returnBegin: !0,
        relevance: 0,
        contains: [{
          className: "keyword",
          begin: "(".concat(C.keyword.toString().replace(/\s/g, "|"), ")\\b"),
          endsParent: !0,
          relevance: 0
        }, I.inherit(I.TITLE_MODE, {
          endsParent: !0
        })]
      },
      $ = [P, F, w, I.NUMBER_MODE, V, X, g, B, A, S],
      h = {
        begin: /\[/,
        end: /\]/,
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0,
        contains: [].concat("self", $, {
          begin: "(" + d.join("|") + ")",
          className: "built_in",
          relevance: 0
        }, {
          className: "type",
          begin: /[\.\w\d]+/,
          relevance: 0
        })
      };
    return P.contains.unshift(h), {
      name: "PowerShell",
      aliases: ["ps", "ps1"],
      case_insensitive: !0,
      keywords: C,
      contains: $.concat(J, K, Q, E, h)
    }
  }
  EY2.exports = f29
})
// @from(Start 4693082, End 4696292)
LY2 = Y((sF3, SY2) => {
  function q29(I) {
    return {
      name: "Processing",
      keywords: {
        keyword: "BufferedReader PVector PFont PImage PGraphics HashMap boolean byte char color double float int long String Array FloatDict FloatList IntDict IntList JSONArray JSONObject Object StringDict StringList Table TableRow XML false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",
        literal: "P2D P3D HALF_PI PI QUARTER_PI TAU TWO_PI",
        title: "setup draw",
        built_in: "displayHeight displayWidth mouseY mouseX mousePressed pmouseX pmouseY key keyCode pixels focused frameCount frameRate height width size createGraphics beginDraw createShape loadShape PShape arc ellipse line point quad rect triangle bezier bezierDetail bezierPoint bezierTangent curve curveDetail curvePoint curveTangent curveTightness shape shapeMode beginContour beginShape bezierVertex curveVertex endContour endShape quadraticVertex vertex ellipseMode noSmooth rectMode smooth strokeCap strokeJoin strokeWeight mouseClicked mouseDragged mouseMoved mousePressed mouseReleased mouseWheel keyPressed keyPressedkeyReleased keyTyped print println save saveFrame day hour millis minute month second year background clear colorMode fill noFill noStroke stroke alpha blue brightness color green hue lerpColor red saturation modelX modelY modelZ screenX screenY screenZ ambient emissive shininess specular add createImage beginCamera camera endCamera frustum ortho perspective printCamera printProjection cursor frameRate noCursor exit loop noLoop popStyle pushStyle redraw binary boolean byte char float hex int str unbinary unhex join match matchAll nf nfc nfp nfs split splitTokens trim append arrayCopy concat expand reverse shorten sort splice subset box sphere sphereDetail createInput createReader loadBytes loadJSONArray loadJSONObject loadStrings loadTable loadXML open parseXML saveTable selectFolder selectInput beginRaw beginRecord createOutput createWriter endRaw endRecord PrintWritersaveBytes saveJSONArray saveJSONObject saveStream saveStrings saveXML selectOutput popMatrix printMatrix pushMatrix resetMatrix rotate rotateX rotateY rotateZ scale shearX shearY translate ambientLight directionalLight lightFalloff lights lightSpecular noLights normal pointLight spotLight image imageMode loadImage noTint requestImage tint texture textureMode textureWrap blend copy filter get loadPixels set updatePixels blendMode loadShader PShaderresetShader shader createFont loadFont text textFont textAlign textLeading textMode textSize textWidth textAscent textDescent abs ceil constrain dist exp floor lerp log mag map max min norm pow round sq sqrt acos asin atan atan2 cos degrees radians sin tan noise noiseDetail noiseSeed random randomGaussian randomSeed"
      },
      contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, I.C_NUMBER_MODE]
    }
  }
  SY2.exports = q29
})
// @from(Start 4696298, End 4697034)
PY2 = Y((oF3, yY2) => {
  function R29(I) {
    return {
      name: "Python profiler",
      contains: [I.C_NUMBER_MODE, {
        begin: "[a-zA-Z_][\\da-zA-Z_]+\\.[\\da-zA-Z_]{1,3}",
        end: ":",
        excludeEnd: !0
      }, {
        begin: "(ncalls|tottime|cumtime)",
        end: "$",
        keywords: "ncalls tottime|10 cumtime|10 filename",
        relevance: 10
      }, {
        begin: "function calls",
        end: "$",
        contains: [I.C_NUMBER_MODE],
        relevance: 10
      }, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, {
        className: "string",
        begin: "\\(",
        end: "\\)$",
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0
      }]
    }
  }
  yY2.exports = R29
})
// @from(Start 4697040, End 4698210)
uY2 = Y((eF3, $Y2) => {
  function U29(I) {
    let d = {
        begin: /[a-z][A-Za-z0-9_]*/,
        relevance: 0
      },
      G = {
        className: "symbol",
        variants: [{
          begin: /[A-Z][a-zA-Z0-9_]*/
        }, {
          begin: /_[A-Za-z0-9_]*/
        }],
        relevance: 0
      },
      Z = {
        begin: /\(/,
        end: /\)/,
        relevance: 0
      },
      C = {
        begin: /\[/,
        end: /\]/
      },
      W = {
        className: "comment",
        begin: /%/,
        end: /$/,
        contains: [I.PHRASAL_WORDS_MODE]
      },
      w = {
        className: "string",
        begin: /`/,
        end: /`/,
        contains: [I.BACKSLASH_ESCAPE]
      },
      B = {
        className: "string",
        begin: /0'(\\'|.)/
      },
      A = {
        className: "string",
        begin: /0'\\s/
      },
      X = [d, G, Z, {
        begin: /:-/
      }, C, W, I.C_BLOCK_COMMENT_MODE, I.QUOTE_STRING_MODE, I.APOS_STRING_MODE, w, B, A, I.C_NUMBER_MODE];
    return Z.contains = X, C.contains = X, {
      name: "Prolog",
      contains: X.concat([{
        begin: /\.$/
      }])
    }
  }
  $Y2.exports = U29
})
// @from(Start 4698216, End 4699551)
OY2 = Y((tF3, TY2) => {
  function v29(I) {
    var d = "[ \\t\\f]*",
      G = "[ \\t\\f]+",
      Z = d + "[:=]" + d,
      C = G,
      W = "(" + Z + "|" + C + ")",
      w = "([^\\\\\\W:= \\t\\f\\n]|\\\\.)+",
      B = "([^\\\\:= \\t\\f\\n]|\\\\.)+",
      A = {
        end: W,
        relevance: 0,
        starts: {
          className: "string",
          end: /$/,
          relevance: 0,
          contains: [{
            begin: "\\\\\\\\"
          }, {
            begin: "\\\\\\n"
          }]
        }
      };
    return {
      name: ".properties",
      case_insensitive: !0,
      illegal: /\S/,
      contains: [I.COMMENT("^\\s*[!#]", "$"), {
        returnBegin: !0,
        variants: [{
          begin: w + Z,
          relevance: 1
        }, {
          begin: w + C,
          relevance: 0
        }],
        contains: [{
          className: "attr",
          begin: w,
          endsParent: !0,
          relevance: 0
        }],
        starts: A
      }, {
        begin: B + W,
        returnBegin: !0,
        relevance: 0,
        contains: [{
          className: "meta",
          begin: B,
          endsParent: !0,
          relevance: 0
        }],
        starts: A
      }, {
        className: "attr",
        relevance: 0,
        begin: B + d + "$"
      }]
    }
  }
  TY2.exports = v29
})
// @from(Start 4699557, End 4700523)
lY2 = Y((Ig3, mY2) => {
  function E29(I) {
    return {
      name: "Protocol Buffers",
      keywords: {
        keyword: "package import option optional required repeated group oneof",
        built_in: "double float int32 int64 uint32 uint64 sint32 sint64 fixed32 fixed64 sfixed32 sfixed64 bool string bytes",
        literal: "true false"
      },
      contains: [I.QUOTE_STRING_MODE, I.NUMBER_MODE, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, {
        className: "class",
        beginKeywords: "message enum service",
        end: /\{/,
        illegal: /\n/,
        contains: [I.inherit(I.TITLE_MODE, {
          starts: {
            endsWithParent: !0,
            excludeEnd: !0
          }
        })]
      }, {
        className: "function",
        beginKeywords: "rpc",
        end: /[{;]/,
        excludeEnd: !0,
        keywords: "rpc returns"
      }, {
        begin: /^\s*[A-Z_]+(?=\s*=[^\n]+;$)/
      }]
    }
  }
  mY2.exports = E29
})
// @from(Start 4700529, End 4705407)
hY2 = Y((dg3, bY2) => {
  function M29(I) {
    let d = {
        keyword: "and case default else elsif false if in import enherits node or true undef unless main settings $string ",
        literal: "alias audit before loglevel noop require subscribe tag owner ensure group mode name|0 changes context force incl lens load_path onlyif provider returns root show_diff type_check en_address ip_address realname command environment hour monute month monthday special target weekday creates cwd ogoutput refresh refreshonly tries try_sleep umask backup checksum content ctime force ignore links mtime purge recurse recurselimit replace selinux_ignore_defaults selrange selrole seltype seluser source souirce_permissions sourceselect validate_cmd validate_replacement allowdupe attribute_membership auth_membership forcelocal gid ia_load_module members system host_aliases ip allowed_trunk_vlans description device_url duplex encapsulation etherchannel native_vlan speed principals allow_root auth_class auth_type authenticate_user k_of_n mechanisms rule session_owner shared options device fstype enable hasrestart directory present absent link atboot blockdevice device dump pass remounts poller_tag use message withpath adminfile allow_virtual allowcdrom category configfiles flavor install_options instance package_settings platform responsefile status uninstall_options vendor unless_system_user unless_uid binary control flags hasstatus manifest pattern restart running start stop allowdupe auths expiry gid groups home iterations key_membership keys managehome membership password password_max_age password_min_age profile_membership profiles project purge_ssh_keys role_membership roles salt shell uid baseurl cost descr enabled enablegroups exclude failovermethod gpgcheck gpgkey http_caching include includepkgs keepalive metadata_expire metalink mirrorlist priority protect proxy proxy_password proxy_username repo_gpgcheck s3_enabled skip_if_unavailable sslcacert sslclientcert sslclientkey sslverify mounted",
        built_in: "architecture augeasversion blockdevices boardmanufacturer boardproductname boardserialnumber cfkey dhcp_servers domain ec2_ ec2_userdata facterversion filesystems ldom fqdn gid hardwareisa hardwaremodel hostname id|0 interfaces ipaddress ipaddress_ ipaddress6 ipaddress6_ iphostnumber is_virtual kernel kernelmajversion kernelrelease kernelversion kernelrelease kernelversion lsbdistcodename lsbdistdescription lsbdistid lsbdistrelease lsbmajdistrelease lsbminordistrelease lsbrelease macaddress macaddress_ macosx_buildversion macosx_productname macosx_productversion macosx_productverson_major macosx_productversion_minor manufacturer memoryfree memorysize netmask metmask_ network_ operatingsystem operatingsystemmajrelease operatingsystemrelease osfamily partitions path physicalprocessorcount processor processorcount productname ps puppetversion rubysitedir rubyversion selinux selinux_config_mode selinux_config_policy selinux_current_mode selinux_current_mode selinux_enforced selinux_policyversion serialnumber sp_ sshdsakey sshecdsakey sshrsakey swapencrypted swapfree swapsize timezone type uniqueid uptime uptime_days uptime_hours uptime_seconds uuid virtual vlans xendomains zfs_version zonenae zones zpool_version"
      },
      G = I.COMMENT("#", "$"),
      Z = "([A-Za-z_]|::)(\\w|::)*",
      C = I.inherit(I.TITLE_MODE, {
        begin: "([A-Za-z_]|::)(\\w|::)*"
      }),
      W = {
        className: "variable",
        begin: "\\$([A-Za-z_]|::)(\\w|::)*"
      },
      w = {
        className: "string",
        contains: [I.BACKSLASH_ESCAPE, W],
        variants: [{
          begin: /'/,
          end: /'/
        }, {
          begin: /"/,
          end: /"/
        }]
      };
    return {
      name: "Puppet",
      aliases: ["pp"],
      contains: [G, W, w, {
        beginKeywords: "class",
        end: "\\{|;",
        illegal: /=/,
        contains: [C, G]
      }, {
        beginKeywords: "define",
        end: /\{/,
        contains: [{
          className: "section",
          begin: I.IDENT_RE,
          endsParent: !0
        }]
      }, {
        begin: I.IDENT_RE + "\\s+\\{",
        returnBegin: !0,
        end: /\S/,
        contains: [{
          className: "keyword",
          begin: I.IDENT_RE
        }, {
          begin: /\{/,
          end: /\}/,
          keywords: d,
          relevance: 0,
          contains: [w, G, {
            begin: "[a-zA-Z_]+\\s*=>",
            returnBegin: !0,
            end: "=>",
            contains: [{
              className: "attr",
              begin: I.IDENT_RE
            }]
          }, {
            className: "number",
            begin: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
            relevance: 0
          }, W]
        }],
        relevance: 0
      }]
    }
  }
  bY2.exports = M29
})
// @from(Start 4705413, End 4707326)
kY2 = Y((Gg3, jY2) => {
  function S29(I) {
    let d = {
        className: "string",
        begin: '(~)?"',
        end: '"',
        illegal: "\\n"
      },
      G = {
        className: "symbol",
        begin: "#[a-zA-Z_]\\w*\\$?"
      };
    return {
      name: "PureBASIC",
      aliases: ["pb", "pbi"],
      keywords: "Align And Array As Break CallDebugger Case CompilerCase CompilerDefault CompilerElse CompilerElseIf CompilerEndIf CompilerEndSelect CompilerError CompilerIf CompilerSelect CompilerWarning Continue Data DataSection Debug DebugLevel Declare DeclareC DeclareCDLL DeclareDLL DeclareModule Default Define Dim DisableASM DisableDebugger DisableExplicit Else ElseIf EnableASM EnableDebugger EnableExplicit End EndDataSection EndDeclareModule EndEnumeration EndIf EndImport EndInterface EndMacro EndModule EndProcedure EndSelect EndStructure EndStructureUnion EndWith Enumeration EnumerationBinary Extends FakeReturn For ForEach ForEver Global Gosub Goto If Import ImportC IncludeBinary IncludeFile IncludePath Interface List Macro MacroExpandedCount Map Module NewList NewMap Next Not Or Procedure ProcedureC ProcedureCDLL ProcedureDLL ProcedureReturn Protected Prototype PrototypeC ReDim Read Repeat Restore Return Runtime Select Shared Static Step Structure StructureUnion Swap Threaded To UndefineMacro Until Until  UnuseModule UseModule Wend While With XIncludeFile XOr",
      contains: [I.COMMENT(";", "$", {
        relevance: 0
      }), {
        className: "function",
        begin: "\\b(Procedure|Declare)(C|CDLL|DLL)?\\b",
        end: "\\(",
        excludeEnd: !0,
        returnBegin: !0,
        contains: [{
          className: "keyword",
          begin: "(Procedure|Declare)(C|CDLL|DLL)?",
          excludeEnd: !0
        }, {
          className: "type",
          begin: "\\.\\w*"
        }, I.UNDERSCORE_TITLE_MODE]
      }, d, G]
    }
  }
  jY2.exports = S29
})
// @from(Start 4707332, End 4712679)
cY2 = Y((Zg3, xY2) => {
  function L29(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function y29(I) {
    return P29("(?=", I, ")")
  }

  function P29(...I) {
    return I.map((G) => L29(G)).join("")
  }

  function $29(I) {
    let W = {
        $pattern: /[A-Za-z]\w+|__\w+__/,
        keyword: ["and", "as", "assert", "async", "await", "break", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", "nonlocal|10", "not", "or", "pass", "raise", "return", "try", "while", "with", "yield"],
        built_in: ["__import__", "abs", "all", "any", "ascii", "bin", "bool", "breakpoint", "bytearray", "bytes", "callable", "chr", "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "exec", "filter", "float", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "print", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip"],
        literal: ["__debug__", "Ellipsis", "False", "None", "NotImplemented", "True"],
        type: ["Any", "Callable", "Coroutine", "Dict", "List", "Literal", "Generic", "Optional", "Sequence", "Set", "Tuple", "Type", "Union"]
      },
      w = {
        className: "meta",
        begin: /^(>>>|\.\.\.) /
      },
      B = {
        className: "subst",
        begin: /\{/,
        end: /\}/,
        keywords: W,
        illegal: /#/
      },
      A = {
        begin: /\{\{/,
        relevance: 0
      },
      V = {
        className: "string",
        contains: [I.BACKSLASH_ESCAPE],
        variants: [{
          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
          end: /'''/,
          contains: [I.BACKSLASH_ESCAPE, w],
          relevance: 10
        }, {
          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
          end: /"""/,
          contains: [I.BACKSLASH_ESCAPE, w],
          relevance: 10
        }, {
          begin: /([fF][rR]|[rR][fF]|[fF])'''/,
          end: /'''/,
          contains: [I.BACKSLASH_ESCAPE, w, A, B]
        }, {
          begin: /([fF][rR]|[rR][fF]|[fF])"""/,
          end: /"""/,
          contains: [I.BACKSLASH_ESCAPE, w, A, B]
        }, {
          begin: /([uU]|[rR])'/,
          end: /'/,
          relevance: 10
        }, {
          begin: /([uU]|[rR])"/,
          end: /"/,
          relevance: 10
        }, {
          begin: /([bB]|[bB][rR]|[rR][bB])'/,
          end: /'/
        }, {
          begin: /([bB]|[bB][rR]|[rR][bB])"/,
          end: /"/
        }, {
          begin: /([fF][rR]|[rR][fF]|[fF])'/,
          end: /'/,
          contains: [I.BACKSLASH_ESCAPE, A, B]
        }, {
          begin: /([fF][rR]|[rR][fF]|[fF])"/,
          end: /"/,
          contains: [I.BACKSLASH_ESCAPE, A, B]
        }, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE]
      },
      X = "[0-9](_?[0-9])*",
      _ = "(\\b([0-9](_?[0-9])*))?\\.([0-9](_?[0-9])*)|\\b([0-9](_?[0-9])*)\\.",
      F = {
        className: "number",
        relevance: 0,
        variants: [{
          begin: "(\\b([0-9](_?[0-9])*)|((\\b([0-9](_?[0-9])*))?\\.([0-9](_?[0-9])*)|\\b([0-9](_?[0-9])*)\\.))[eE][+-]?([0-9](_?[0-9])*)[jJ]?\\b"
        }, {
          begin: "((\\b([0-9](_?[0-9])*))?\\.([0-9](_?[0-9])*)|\\b([0-9](_?[0-9])*)\\.)[jJ]?"
        }, {
          begin: "\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?\\b"
        }, {
          begin: "\\b0[bB](_?[01])+[lL]?\\b"
        }, {
          begin: "\\b0[oO](_?[0-7])+[lL]?\\b"
        }, {
          begin: "\\b0[xX](_?[0-9a-fA-F])+[lL]?\\b"
        }, {
          begin: "\\b([0-9](_?[0-9])*)[jJ]\\b"
        }]
      },
      g = {
        className: "comment",
        begin: y29(/# type:/),
        end: /$/,
        keywords: W,
        contains: [{
          begin: /# type:/
        }, {
          begin: /#/,
          end: /\b\B/,
          endsWithParent: !0
        }]
      },
      J = {
        className: "params",
        variants: [{
          className: "",
          begin: /\(\s*\)/,
          skip: !0
        }, {
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: W,
          contains: ["self", w, F, V, I.HASH_COMMENT_MODE]
        }]
      };
    return B.contains = [V, F, w], {
      name: "Python",
      aliases: ["py", "gyp", "ipython"],
      keywords: W,
      illegal: /(<\/|->|\?)|=>/,
      contains: [w, F, {
        begin: /\bself\b/
      }, {
        beginKeywords: "if",
        relevance: 0
      }, V, g, I.HASH_COMMENT_MODE, {
        variants: [{
          className: "function",
          beginKeywords: "def"
        }, {
          className: "class",
          beginKeywords: "class"
        }],
        end: /:/,
        illegal: /[${=;\n,]/,
        contains: [I.UNDERSCORE_TITLE_MODE, J, {
          begin: /->/,
          endsWithParent: !0,
          keywords: W
        }]
      }, {
        className: "meta",
        begin: /^[\t ]*@/,
        end: /(?=#)|$/,
        contains: [F, J, V]
      }]
    }
  }
  xY2.exports = $29
})
// @from(Start 4712685, End 4713108)
iY2 = Y((Cg3, pY2) => {
  function u29(I) {
    return {
      aliases: ["pycon"],
      contains: [{
        className: "meta",
        starts: {
          end: / |$/,
          starts: {
            end: "$",
            subLanguage: "python"
          }
        },
        variants: [{
          begin: /^>>>(?=[ ]|$)/
        }, {
          begin: /^\.\.\.(?=[ ]|$)/
        }]
      }]
    }
  }
  pY2.exports = u29
})
// @from(Start 4713114, End 4714378)
rY2 = Y((Wg3, nY2) => {
  function T29(I) {
    return {
      name: "Q",
      aliases: ["k", "kdb"],
      keywords: {
        $pattern: /(`?)[A-Za-z0-9_]+\b/,
        keyword: "do while select delete by update from",
        literal: "0b 1b",
        built_in: "neg not null string reciprocal floor ceiling signum mod xbar xlog and or each scan over prior mmu lsq inv md5 ltime gtime count first var dev med cov cor all any rand sums prds mins maxs fills deltas ratios avgs differ prev next rank reverse iasc idesc asc desc msum mcount mavg mdev xrank mmin mmax xprev rotate distinct group where flip type key til get value attr cut set upsert raze union inter except cross sv vs sublist enlist read0 read1 hopen hclose hdel hsym hcount peach system ltrim rtrim trim lower upper ssr view tables views cols xcols keys xkey xcol xasc xdesc fkeys meta lj aj aj0 ij pj asof uj ww wj wj1 fby xgroup ungroup ej save load rsave rload show csv parse eval min max avg wavg wsum sin cos tan sum",
        type: "`float `double int `timestamp `timespan `datetime `time `boolean `symbol `char `byte `short `long `real `month `date `minute `second `guid"
      },
      contains: [I.C_LINE_COMMENT_MODE, I.QUOTE_STRING_MODE, I.C_NUMBER_MODE]
    }
  }
  nY2.exports = T29
})
// @from(Start 4714384, End 4718524)
sY2 = Y((wg3, aY2) => {
  function O29(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function m29(...I) {
    return I.map((G) => O29(G)).join("")
  }

  function l29(I) {
    let d = {
        keyword: "in of on if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await import",
        literal: "true false null undefined NaN Infinity",
        built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Behavior bool color coordinate date double enumeration font geocircle georectangle geoshape int list matrix4x4 parent point quaternion real rect size string url variant vector2d vector3d vector4d Promise"
      },
      G = "[a-zA-Z_][a-zA-Z0-9\\._]*",
      Z = {
        className: "keyword",
        begin: "\\bproperty\\b",
        starts: {
          className: "string",
          end: "(:|=|;|,|//|/\\*|$)",
          returnEnd: !0
        }
      },
      C = {
        className: "keyword",
        begin: "\\bsignal\\b",
        starts: {
          className: "string",
          end: "(\\(|:|=|;|,|//|/\\*|$)",
          returnEnd: !0
        }
      },
      W = {
        className: "attribute",
        begin: "\\bid\\s*:",
        starts: {
          className: "string",
          end: "[a-zA-Z_][a-zA-Z0-9\\._]*",
          returnEnd: !1
        }
      },
      w = {
        begin: "[a-zA-Z_][a-zA-Z0-9\\._]*\\s*:",
        returnBegin: !0,
        contains: [{
          className: "attribute",
          begin: "[a-zA-Z_][a-zA-Z0-9\\._]*",
          end: "\\s*:",
          excludeEnd: !0,
          relevance: 0
        }],
        relevance: 0
      },
      B = {
        begin: m29("[a-zA-Z_][a-zA-Z0-9\\._]*", /\s*\{/),
        end: /\{/,
        returnBegin: !0,
        relevance: 0,
        contains: [I.inherit(I.TITLE_MODE, {
          begin: "[a-zA-Z_][a-zA-Z0-9\\._]*"
        })]
      };
    return {
      name: "QML",
      aliases: ["qt"],
      case_insensitive: !1,
      keywords: d,
      contains: [{
        className: "meta",
        begin: /^\s*['"]use (strict|asm)['"]/
      }, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, {
        className: "string",
        begin: "`",
        end: "`",
        contains: [I.BACKSLASH_ESCAPE, {
          className: "subst",
          begin: "\\$\\{",
          end: "\\}"
        }]
      }, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, {
        className: "number",
        variants: [{
          begin: "\\b(0[bB][01]+)"
        }, {
          begin: "\\b(0[oO][0-7]+)"
        }, {
          begin: I.C_NUMBER_RE
        }],
        relevance: 0
      }, {
        begin: "(" + I.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.REGEXP_MODE, {
          begin: /</,
          end: />\s*[);\]]/,
          relevance: 0,
          subLanguage: "xml"
        }],
        relevance: 0
      }, C, Z, {
        className: "function",
        beginKeywords: "function",
        end: /\{/,
        excludeEnd: !0,
        contains: [I.inherit(I.TITLE_MODE, {
          begin: /[A-Za-z$_][0-9A-Za-z$_]*/
        }), {
          className: "params",
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE]
        }],
        illegal: /\[|%/
      }, {
        begin: "\\." + I.IDENT_RE,
        relevance: 0
      }, W, w, B],
      illegal: /#/
    }
  }
  aY2.exports = l29
})
// @from(Start 4718530, End 4723024)
eY2 = Y((Bg3, oY2) => {
  function b29(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function h29(I) {
    return iF1("(?=", I, ")")
  }

  function iF1(...I) {
    return I.map((G) => b29(G)).join("")
  }

  function j29(I) {
    let d = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,
      G = /[a-zA-Z][a-zA-Z_0-9]*/;
    return {
      name: "R",
      illegal: /->/,
      keywords: {
        $pattern: d,
        keyword: "function if in break next repeat else for while",
        literal: "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
        built_in: "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"
      },
      compilerExtensions: [(Z, C) => {
        if (!Z.beforeMatch) return;
        if (Z.starts) throw new Error("beforeMatch cannot be used with starts");
        let W = Object.assign({}, Z);
        Object.keys(Z).forEach((w) => {
          delete Z[w]
        }), Z.begin = iF1(W.beforeMatch, h29(W.begin)), Z.starts = {
          relevance: 0,
          contains: [Object.assign(W, {
            endsParent: !0
          })]
        }, Z.relevance = 0, delete W.beforeMatch
      }],
      contains: [I.COMMENT(/#'/, /$/, {
        contains: [{
          className: "doctag",
          begin: "@examples",
          starts: {
            contains: [{
              begin: /\n/
            }, {
              begin: /#'\s*(?=@[a-zA-Z]+)/,
              endsParent: !0
            }, {
              begin: /#'/,
              end: /$/,
              excludeBegin: !0
            }]
          }
        }, {
          className: "doctag",
          begin: "@param",
          end: /$/,
          contains: [{
            className: "variable",
            variants: [{
              begin: d
            }, {
              begin: /`(?:\\.|[^`\\])+`/
            }],
            endsParent: !0
          }]
        }, {
          className: "doctag",
          begin: /@[a-zA-Z]+/
        }, {
          className: "meta-keyword",
          begin: /\\[a-zA-Z]+/
        }]
      }), I.HASH_COMMENT_MODE, {
        className: "string",
        contains: [I.BACKSLASH_ESCAPE],
        variants: [I.END_SAME_AS_BEGIN({
          begin: /[rR]"(-*)\(/,
          end: /\)(-*)"/
        }), I.END_SAME_AS_BEGIN({
          begin: /[rR]"(-*)\{/,
          end: /\}(-*)"/
        }), I.END_SAME_AS_BEGIN({
          begin: /[rR]"(-*)\[/,
          end: /\](-*)"/
        }), I.END_SAME_AS_BEGIN({
          begin: /[rR]'(-*)\(/,
          end: /\)(-*)'/
        }), I.END_SAME_AS_BEGIN({
          begin: /[rR]'(-*)\{/,
          end: /\}(-*)'/
        }), I.END_SAME_AS_BEGIN({
          begin: /[rR]'(-*)\[/,
          end: /\](-*)'/
        }), {
          begin: '"',
          end: '"',
          relevance: 0
        }, {
          begin: "'",
          end: "'",
          relevance: 0
        }]
      }, {
        className: "number",
        relevance: 0,
        beforeMatch: /([^a-zA-Z0-9._])/,
        variants: [{
          match: /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/
        }, {
          match: /0[xX][0-9a-fA-F]+([pP][+-]?\d+)?[Li]?/
        }, {
          match: /(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[Li]?/
        }]
      }, {
        begin: "%",
        end: "%"
      }, {
        begin: iF1(G, "\\s+<-\\s+")
      }, {
        begin: "`",
        end: "`",
        contains: [{
          begin: /\\./
        }]
      }]
    }
  }
  oY2.exports = j29
})
// @from(Start 4723030, End 4728489)
I_2 = Y((Ag3, tY2) => {
  function k29(I) {
    function d(h) {
      return h.map(function(O) {
        return O.split("").map(function(T) {
          return "\\" + T
        }).join("")
      }).join("|")
    }
    let G = "~?[a-z$_][0-9a-zA-Z$_]*",
      Z = "`?[A-Z$_][0-9a-zA-Z$_]*",
      C = "'?[a-z$_][0-9a-z$_]*",
      W = "\\s*:\\s*[a-z$_][0-9a-z$_]*(\\(\\s*(" + C + "\\s*(," + C + "\\s*)*)?\\))?",
      w = G + "(" + W + "){0,2}",
      B = "(" + d(["||", "++", "**", "+.", "*", "/", "*.", "/.", "..."]) + "|\\|>|&&|==|===)",
      A = "\\s+" + B + "\\s+",
      V = {
        keyword: "and as asr assert begin class constraint do done downto else end exception external for fun function functor if in include inherit initializer land lazy let lor lsl lsr lxor match method mod module mutable new nonrec object of open or private rec sig struct then to try type val virtual when while with",
        built_in: "array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 ref string unit ",
        literal: "true false"
      },
      X = "\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",
      _ = {
        className: "number",
        relevance: 0,
        variants: [{
          begin: X
        }, {
          begin: "\\(-" + X + "\\)"
        }]
      },
      F = {
        className: "operator",
        relevance: 0,
        begin: B
      },
      g = [{
        className: "identifier",
        relevance: 0,
        begin: G
      }, F, _],
      J = [I.QUOTE_STRING_MODE, F, {
        className: "module",
        begin: "\\b" + Z,
        returnBegin: !0,
        end: ".",
        contains: [{
          className: "identifier",
          begin: Z,
          relevance: 0
        }]
      }],
      K = [{
        className: "module",
        begin: "\\b" + Z,
        returnBegin: !0,
        end: ".",
        relevance: 0,
        contains: [{
          className: "identifier",
          begin: Z,
          relevance: 0
        }]
      }],
      Q = {
        begin: G,
        end: "(,|\\n|\\))",
        relevance: 0,
        contains: [F, {
          className: "typing",
          begin: ":",
          end: "(,|\\n)",
          returnBegin: !0,
          relevance: 0,
          contains: K
        }]
      },
      E = {
        className: "function",
        relevance: 0,
        keywords: V,
        variants: [{
          begin: "\\s(\\(\\.?.*?\\)|" + G + ")\\s*=>",
          end: "\\s*=>",
          returnBegin: !0,
          relevance: 0,
          contains: [{
            className: "params",
            variants: [{
              begin: G
            }, {
              begin: w
            }, {
              begin: /\(\s*\)/
            }]
          }]
        }, {
          begin: "\\s\\(\\.?[^;\\|]*\\)\\s*=>",
          end: "\\s=>",
          returnBegin: !0,
          relevance: 0,
          contains: [{
            className: "params",
            relevance: 0,
            variants: [Q]
          }]
        }, {
          begin: "\\(\\.\\s" + G + "\\)\\s*=>"
        }]
      };
    J.push(E);
    let S = {
        className: "constructor",
        begin: Z + "\\(",
        end: "\\)",
        illegal: "\\n",
        keywords: V,
        contains: [I.QUOTE_STRING_MODE, F, {
          className: "params",
          begin: "\\b" + G
        }]
      },
      P = {
        className: "pattern-match",
        begin: "\\|",
        returnBegin: !0,
        keywords: V,
        end: "=>",
        relevance: 0,
        contains: [S, F, {
          relevance: 0,
          className: "constructor",
          begin: Z
        }]
      },
      $ = {
        className: "module-access",
        keywords: V,
        returnBegin: !0,
        variants: [{
          begin: "\\b(" + Z + "\\.)+" + G
        }, {
          begin: "\\b(" + Z + "\\.)+\\(",
          end: "\\)",
          returnBegin: !0,
          contains: [E, {
            begin: "\\(",
            end: "\\)",
            skip: !0
          }].concat(J)
        }, {
          begin: "\\b(" + Z + "\\.)+\\{",
          end: /\}/
        }],
        contains: J
      };
    return K.push($), {
      name: "ReasonML",
      aliases: ["re"],
      keywords: V,
      illegal: "(:-|:=|\\$\\{|\\+=)",
      contains: [I.COMMENT("/\\*", "\\*/", {
        illegal: "^(#,\\/\\/)"
      }), {
        className: "character",
        begin: "'(\\\\[^']+|[^'])'",
        illegal: "\\n",
        relevance: 0
      }, I.QUOTE_STRING_MODE, {
        className: "literal",
        begin: "\\(\\)",
        relevance: 0
      }, {
        className: "literal",
        begin: "\\[\\|",
        end: "\\|\\]",
        relevance: 0,
        contains: g
      }, {
        className: "literal",
        begin: "\\[",
        end: "\\]",
        relevance: 0,
        contains: g
      }, S, {
        className: "operator",
        begin: A,
        illegal: "-->",
        relevance: 0
      }, _, I.C_LINE_COMMENT_MODE, P, E, {
        className: "module-def",
        begin: "\\bmodule\\s+" + G + "\\s+" + Z + "\\s+=\\s+\\{",
        end: /\}/,
        returnBegin: !0,
        keywords: V,
        relevance: 0,
        contains: [{
          className: "module",
          relevance: 0,
          begin: Z
        }, {
          begin: /\{/,
          end: /\}/,
          skip: !0
        }].concat(J)
      }, $]
    }
  }
  tY2.exports = k29
})
// @from(Start 4728495, End 4729853)
G_2 = Y((Vg3, d_2) => {
  function x29(I) {
    return {
      name: "RenderMan RIB",
      keywords: "ArchiveRecord AreaLightSource Atmosphere Attribute AttributeBegin AttributeEnd Basis Begin Blobby Bound Clipping ClippingPlane Color ColorSamples ConcatTransform Cone CoordinateSystem CoordSysTransform CropWindow Curves Cylinder DepthOfField Detail DetailRange Disk Displacement Display End ErrorHandler Exposure Exterior Format FrameAspectRatio FrameBegin FrameEnd GeneralPolygon GeometricApproximation Geometry Hider Hyperboloid Identity Illuminate Imager Interior LightSource MakeCubeFaceEnvironment MakeLatLongEnvironment MakeShadow MakeTexture Matte MotionBegin MotionEnd NuPatch ObjectBegin ObjectEnd ObjectInstance Opacity Option Orientation Paraboloid Patch PatchMesh Perspective PixelFilter PixelSamples PixelVariance Points PointsGeneralPolygons PointsPolygons Polygon Procedural Projection Quantize ReadArchive RelativeDetail ReverseOrientation Rotate Scale ScreenWindow ShadingInterpolation ShadingRate Shutter Sides Skew SolidBegin SolidEnd Sphere SubdivisionMesh Surface TextureCoordinates Torus Transform TransformBegin TransformEnd TransformPoints Translate TrimCurve WorldBegin WorldEnd",
      illegal: "</",
      contains: [I.HASH_COMMENT_MODE, I.C_NUMBER_MODE, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE]
    }
  }
  d_2.exports = x29
})
// @from(Start 4729859, End 4730966)
C_2 = Y((Xg3, Z_2) => {
  function c29(I) {
    let G = {
      className: "attribute",
      begin: /[a-zA-Z-_]+/,
      end: /\s*:/,
      excludeEnd: !0,
      starts: {
        end: ";",
        relevance: 0,
        contains: [{
          className: "variable",
          begin: /\.[a-zA-Z-_]+/
        }, {
          className: "keyword",
          begin: /\(optional\)/
        }]
      }
    };
    return {
      name: "Roboconf",
      aliases: ["graph", "instances"],
      case_insensitive: !0,
      keywords: "import",
      contains: [{
        begin: "^facet [a-zA-Z-_][^\\n{]+\\{",
        end: /\}/,
        keywords: "facet",
        contains: [G, I.HASH_COMMENT_MODE]
      }, {
        begin: "^\\s*instance of [a-zA-Z-_][^\\n{]+\\{",
        end: /\}/,
        keywords: "name count channels instance-data instance-state instance of",
        illegal: /\S/,
        contains: ["self", G, I.HASH_COMMENT_MODE]
      }, {
        begin: "^[a-zA-Z-_][^\\n{]+\\{",
        end: /\}/,
        contains: [G, I.HASH_COMMENT_MODE]
      }, I.HASH_COMMENT_MODE]
    }
  }
  Z_2.exports = c29
})
// @from(Start 4730972, End 4734444)
w_2 = Y((Yg3, W_2) => {
  function p29(I) {
    let w = {
        className: "variable",
        variants: [{
          begin: /\$[\w\d#@][\w\d_]*/
        }, {
          begin: /\$\{(.*?)\}/
        }]
      },
      B = {
        className: "string",
        begin: /"/,
        end: /"/,
        contains: [I.BACKSLASH_ESCAPE, w, {
          className: "variable",
          begin: /\$\(/,
          end: /\)/,
          contains: [I.BACKSLASH_ESCAPE]
        }]
      },
      A = {
        className: "string",
        begin: /'/,
        end: /'/
      };
    return {
      name: "Microtik RouterOS script",
      aliases: ["mikrotik"],
      case_insensitive: !0,
      keywords: {
        $pattern: /:?[\w-]+/,
        literal: "true false yes no nothing nil null",
        keyword: "foreach do while for if from to step else on-error and or not in :" + "foreach do while for if from to step else on-error and or not in".split(" ").join(" :") + " :" + "global local beep delay put len typeof pick log time set find environment terminal error execute parse resolve toarray tobool toid toip toip6 tonum tostr totime".split(" ").join(" :")
      },
      contains: [{
        variants: [{
          begin: /\/\*/,
          end: /\*\//
        }, {
          begin: /\/\//,
          end: /$/
        }, {
          begin: /<\//,
          end: />/
        }],
        illegal: /./
      }, I.COMMENT("^#", "$"), B, A, w, {
        begin: /[\w-]+=([^\s{}[\]()>]+)/,
        relevance: 0,
        returnBegin: !0,
        contains: [{
          className: "attribute",
          begin: /[^=]+/
        }, {
          begin: /=/,
          endsWithParent: !0,
          relevance: 0,
          contains: [B, A, w, {
            className: "literal",
            begin: "\\b(" + "true false yes no nothing nil null".split(" ").join("|") + ")\\b"
          }, {
            begin: /("[^"]*"|[^\s{}[\]]+)/
          }]
        }]
      }, {
        className: "number",
        begin: /\*[0-9a-fA-F]+/
      }, {
        begin: "\\b(" + "add remove enable disable set get print export edit find run debug error info warning".split(" ").join("|") + ")([\\s[(\\]|])",
        returnBegin: !0,
        contains: [{
          className: "builtin-name",
          begin: /\w+/
        }]
      }, {
        className: "built_in",
        variants: [{
          begin: "(\\.\\./|/|\\s)((" + "traffic-flow traffic-generator firewall scheduler aaa accounting address-list address align area bandwidth-server bfd bgp bridge client clock community config connection console customer default dhcp-client dhcp-server discovery dns e-mail ethernet filter firmware gps graphing group hardware health hotspot identity igmp-proxy incoming instance interface ip ipsec ipv6 irq l2tp-server lcd ldp logging mac-server mac-winbox mangle manual mirror mme mpls nat nd neighbor network note ntp ospf ospf-v3 ovpn-server page peer pim ping policy pool port ppp pppoe-client pptp-server prefix profile proposal proxy queue radius resource rip ripng route routing screen script security-profiles server service service-port settings shares smb sms sniffer snmp snooper socks sstp-server system tool tracking type upgrade upnp user-manager users user vlan secret vrrp watchdog web-access wireless pptp pppoe lan wan layer7-protocol lease simple raw".split(" ").join("|") + ");?\\s)+"
        }, {
          begin: /\.\./,
          relevance: 0
        }]
      }]
    }
  }
  W_2.exports = p29
})
// @from(Start 4734450, End 4735705)
A_2 = Y((_g3, B_2) => {
  function i29(I) {
    return {
      name: "RenderMan RSL",
      keywords: {
        keyword: "float color point normal vector matrix while for if do return else break extern continue",
        built_in: "abs acos ambient area asin atan atmosphere attribute calculatenormal ceil cellnoise clamp comp concat cos degrees depth Deriv diffuse distance Du Dv environment exp faceforward filterstep floor format fresnel incident length lightsource log match max min mod noise normalize ntransform opposite option phong pnoise pow printf ptlined radians random reflect refract renderinfo round setcomp setxcomp setycomp setzcomp shadow sign sin smoothstep specular specularbrdf spline sqrt step tan texture textureinfo trace transform vtransform xcomp ycomp zcomp"
      },
      illegal: "</",
      contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.QUOTE_STRING_MODE, I.APOS_STRING_MODE, I.C_NUMBER_MODE, {
        className: "meta",
        begin: "#",
        end: "$"
      }, {
        className: "class",
        beginKeywords: "surface displacement light volume imager",
        end: "\\("
      }, {
        beginKeywords: "illuminate illuminance gather",
        end: "\\("
      }]
    }
  }
  B_2.exports = i29
})
// @from(Start 4735711, End 4739705)
X_2 = Y((Dg3, V_2) => {
  function n29(I) {
    return {
      name: "Oracle Rules Language",
      keywords: {
        keyword: "BILL_PERIOD BILL_START BILL_STOP RS_EFFECTIVE_START RS_EFFECTIVE_STOP RS_JURIS_CODE RS_OPCO_CODE INTDADDATTRIBUTE|5 INTDADDVMSG|5 INTDBLOCKOP|5 INTDBLOCKOPNA|5 INTDCLOSE|5 INTDCOUNT|5 INTDCOUNTSTATUSCODE|5 INTDCREATEMASK|5 INTDCREATEDAYMASK|5 INTDCREATEFACTORMASK|5 INTDCREATEHANDLE|5 INTDCREATEOVERRIDEDAYMASK|5 INTDCREATEOVERRIDEMASK|5 INTDCREATESTATUSCODEMASK|5 INTDCREATETOUPERIOD|5 INTDDELETE|5 INTDDIPTEST|5 INTDEXPORT|5 INTDGETERRORCODE|5 INTDGETERRORMESSAGE|5 INTDISEQUAL|5 INTDJOIN|5 INTDLOAD|5 INTDLOADACTUALCUT|5 INTDLOADDATES|5 INTDLOADHIST|5 INTDLOADLIST|5 INTDLOADLISTDATES|5 INTDLOADLISTENERGY|5 INTDLOADLISTHIST|5 INTDLOADRELATEDCHANNEL|5 INTDLOADSP|5 INTDLOADSTAGING|5 INTDLOADUOM|5 INTDLOADUOMDATES|5 INTDLOADUOMHIST|5 INTDLOADVERSION|5 INTDOPEN|5 INTDREADFIRST|5 INTDREADNEXT|5 INTDRECCOUNT|5 INTDRELEASE|5 INTDREPLACE|5 INTDROLLAVG|5 INTDROLLPEAK|5 INTDSCALAROP|5 INTDSCALE|5 INTDSETATTRIBUTE|5 INTDSETDSTPARTICIPANT|5 INTDSETSTRING|5 INTDSETVALUE|5 INTDSETVALUESTATUS|5 INTDSHIFTSTARTTIME|5 INTDSMOOTH|5 INTDSORT|5 INTDSPIKETEST|5 INTDSUBSET|5 INTDTOU|5 INTDTOURELEASE|5 INTDTOUVALUE|5 INTDUPDATESTATS|5 INTDVALUE|5 STDEV INTDDELETEEX|5 INTDLOADEXACTUAL|5 INTDLOADEXCUT|5 INTDLOADEXDATES|5 INTDLOADEX|5 INTDLOADEXRELATEDCHANNEL|5 INTDSAVEEX|5 MVLOAD|5 MVLOADACCT|5 MVLOADACCTDATES|5 MVLOADACCTHIST|5 MVLOADDATES|5 MVLOADHIST|5 MVLOADLIST|5 MVLOADLISTDATES|5 MVLOADLISTHIST|5 IF FOR NEXT DONE SELECT END CALL ABORT CLEAR CHANNEL FACTOR LIST NUMBER OVERRIDE SET WEEK DISTRIBUTIONNODE ELSE WHEN THEN OTHERWISE IENUM CSV INCLUDE LEAVE RIDER SAVE DELETE NOVALUE SECTION WARN SAVE_UPDATE DETERMINANT LABEL REPORT REVENUE EACH IN FROM TOTAL CHARGE BLOCK AND OR CSV_FILE RATE_CODE AUXILIARY_DEMAND UIDACCOUNT RS BILL_PERIOD_SELECT HOURS_PER_MONTH INTD_ERROR_STOP SEASON_SCHEDULE_NAME ACCOUNTFACTOR ARRAYUPPERBOUND CALLSTOREDPROC GETADOCONNECTION GETCONNECT GETDATASOURCE GETQUALIFIER GETUSERID HASVALUE LISTCOUNT LISTOP LISTUPDATE LISTVALUE PRORATEFACTOR RSPRORATE SETBINPATH SETDBMONITOR WQ_OPEN BILLINGHOURS DATE DATEFROMFLOAT DATETIMEFROMSTRING DATETIMETOSTRING DATETOFLOAT DAY DAYDIFF DAYNAME DBDATETIME HOUR MINUTE MONTH MONTHDIFF MONTHHOURS MONTHNAME ROUNDDATE SAMEWEEKDAYLASTYEAR SECOND WEEKDAY WEEKDIFF YEAR YEARDAY YEARSTR COMPSUM HISTCOUNT HISTMAX HISTMIN HISTMINNZ HISTVALUE MAXNRANGE MAXRANGE MINRANGE COMPIKVA COMPKVA COMPKVARFROMKQKW COMPLF IDATTR FLAG LF2KW LF2KWH MAXKW POWERFACTOR READING2USAGE AVGSEASON MAXSEASON MONTHLYMERGE SEASONVALUE SUMSEASON ACCTREADDATES ACCTTABLELOAD CONFIGADD CONFIGGET CREATEOBJECT CREATEREPORT EMAILCLIENT EXPBLKMDMUSAGE EXPMDMUSAGE EXPORT_USAGE FACTORINEFFECT GETUSERSPECIFIEDSTOP INEFFECT ISHOLIDAY RUNRATE SAVE_PROFILE SETREPORTTITLE USEREXIT WATFORRUNRATE TO TABLE ACOS ASIN ATAN ATAN2 BITAND CEIL COS COSECANT COSH COTANGENT DIVQUOT DIVREM EXP FABS FLOOR FMOD FREPM FREXPN LOG LOG10 MAX MAXN MIN MINNZ MODF POW ROUND ROUND2VALUE ROUNDINT SECANT SIN SINH SQROOT TAN TANH FLOAT2STRING FLOAT2STRINGNC INSTR LEFT LEN LTRIM MID RIGHT RTRIM STRING STRINGNC TOLOWER TOUPPER TRIM NUMDAYS READ_DATE STAGING",
        built_in: "IDENTIFIER OPTIONS XML_ELEMENT XML_OP XML_ELEMENT_OF DOMDOCCREATE DOMDOCLOADFILE DOMDOCLOADXML DOMDOCSAVEFILE DOMDOCGETROOT DOMDOCADDPI DOMNODEGETNAME DOMNODEGETTYPE DOMNODEGETVALUE DOMNODEGETCHILDCT DOMNODEGETFIRSTCHILD DOMNODEGETSIBLING DOMNODECREATECHILDELEMENT DOMNODESETATTRIBUTE DOMNODEGETCHILDELEMENTCT DOMNODEGETFIRSTCHILDELEMENT DOMNODEGETSIBLINGELEMENT DOMNODEGETATTRIBUTECT DOMNODEGETATTRIBUTEI DOMNODEGETATTRIBUTEBYNAME DOMNODEGETBYNAME"
      },
      contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, I.C_NUMBER_MODE, {
        className: "literal",
        variants: [{
          begin: "#\\s+",
          relevance: 0
        }, {
          begin: "#[a-zA-Z .]+"
        }]
      }]
    }
  }
  V_2.exports = n29
})
// @from(Start 4739711, End 4742810)
__2 = Y((Hg3, Y_2) => {
  function r29(I) {
    let G = "abstract as async await become box break const continue crate do dyn else enum extern false final fn for if impl in let loop macro match mod move mut override priv pub ref return self Self static struct super trait true try type typeof unsafe unsized use virtual where while yield",
      Z = "drop i8 i16 i32 i64 i128 isize u8 u16 u32 u64 u128 usize f32 f64 str char bool Box Option Result String Vec Copy Send Sized Sync Drop Fn FnMut FnOnce ToOwned Clone Debug PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator Extend IntoIterator DoubleEndedIterator ExactSizeIterator SliceConcatExt ToString assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! debug_assert! debug_assert_eq! env! panic! file! format! format_args! include_bin! include_str! line! local_data_key! module_path! option_env! print! println! select! stringify! try! unimplemented! unreachable! vec! write! writeln! macro_rules! assert_ne! debug_assert_ne!";
    return {
      name: "Rust",
      aliases: ["rs"],
      keywords: {
        $pattern: I.IDENT_RE + "!?",
        keyword: G,
        literal: "true false Some None Ok Err",
        built_in: Z
      },
      illegal: "</",
      contains: [I.C_LINE_COMMENT_MODE, I.COMMENT("/\\*", "\\*/", {
        contains: ["self"]
      }), I.inherit(I.QUOTE_STRING_MODE, {
        begin: /b?"/,
        illegal: null
      }), {
        className: "string",
        variants: [{
          begin: /r(#*)"(.|\n)*?"\1(?!#)/
        }, {
          begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/
        }]
      }, {
        className: "symbol",
        begin: /'[a-zA-Z_][a-zA-Z0-9_]*/
      }, {
        className: "number",
        variants: [{
          begin: "\\b0b([01_]+)([ui](8|16|32|64|128|size)|f(32|64))?"
        }, {
          begin: "\\b0o([0-7_]+)([ui](8|16|32|64|128|size)|f(32|64))?"
        }, {
          begin: "\\b0x([A-Fa-f0-9_]+)([ui](8|16|32|64|128|size)|f(32|64))?"
        }, {
          begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)([ui](8|16|32|64|128|size)|f(32|64))?"
        }],
        relevance: 0
      }, {
        className: "function",
        beginKeywords: "fn",
        end: "(\\(|<)",
        excludeEnd: !0,
        contains: [I.UNDERSCORE_TITLE_MODE]
      }, {
        className: "meta",
        begin: "#!?\\[",
        end: "\\]",
        contains: [{
          className: "meta-string",
          begin: /"/,
          end: /"/
        }]
      }, {
        className: "class",
        beginKeywords: "type",
        end: ";",
        contains: [I.inherit(I.UNDERSCORE_TITLE_MODE, {
          endsParent: !0
        })],
        illegal: "\\S"
      }, {
        className: "class",
        beginKeywords: "trait enum struct union",
        end: /\{/,
        contains: [I.inherit(I.UNDERSCORE_TITLE_MODE, {
          endsParent: !0
        })],
        illegal: "[\\w\\d]"
      }, {
        begin: I.IDENT_RE + "::",
        keywords: {
          built_in: Z
        }
      }, {
        begin: "->"
      }]
    }
  }
  Y_2.exports = r29
})
// @from(Start 4742816, End 4746793)
H_2 = Y((Fg3, D_2) => {
  function a29(I) {
    let d = "do if then else end until while abort array attrib by call cards cards4 catname continue datalines datalines4 delete delim delimiter display dm drop endsas error file filename footnote format goto in infile informat input keep label leave length libname link list lostcard merge missing modify options output out page put redirect remove rename replace retain return select set skip startsas stop title update waitsas where window x systask add and alter as cascade check create delete describe distinct drop foreign from group having index insert into in key like message modify msgtype not null on or order primary references reset restrict select set table unique update validate view where",
      G = "abs|addr|airy|arcos|arsin|atan|attrc|attrn|band|betainv|blshift|bnot|bor|brshift|bxor|byte|cdf|ceil|cexist|cinv|close|cnonct|collate|compbl|compound|compress|cos|cosh|css|curobs|cv|daccdb|daccdbsl|daccsl|daccsyd|dacctab|dairy|date|datejul|datepart|datetime|day|dclose|depdb|depdbsl|depdbsl|depsl|depsl|depsyd|depsyd|deptab|deptab|dequote|dhms|dif|digamma|dim|dinfo|dnum|dopen|doptname|doptnum|dread|dropnote|dsname|erf|erfc|exist|exp|fappend|fclose|fcol|fdelete|fetch|fetchobs|fexist|fget|fileexist|filename|fileref|finfo|finv|fipname|fipnamel|fipstate|floor|fnonct|fnote|fopen|foptname|foptnum|fpoint|fpos|fput|fread|frewind|frlen|fsep|fuzz|fwrite|gaminv|gamma|getoption|getvarc|getvarn|hbound|hms|hosthelp|hour|ibessel|index|indexc|indexw|input|inputc|inputn|int|intck|intnx|intrr|irr|jbessel|juldate|kurtosis|lag|lbound|left|length|lgamma|libname|libref|log|log10|log2|logpdf|logpmf|logsdf|lowcase|max|mdy|mean|min|minute|mod|month|mopen|mort|n|netpv|nmiss|normal|note|npv|open|ordinal|pathname|pdf|peek|peekc|pmf|point|poisson|poke|probbeta|probbnml|probchi|probf|probgam|probhypr|probit|probnegb|probnorm|probt|put|putc|putn|qtr|quote|ranbin|rancau|ranexp|rangam|range|rank|rannor|ranpoi|rantbl|rantri|ranuni|repeat|resolve|reverse|rewind|right|round|saving|scan|sdf|second|sign|sin|sinh|skewness|soundex|spedis|sqrt|std|stderr|stfips|stname|stnamel|substr|sum|symget|sysget|sysmsg|sysprod|sysrc|system|tan|tanh|time|timepart|tinv|tnonct|today|translate|tranwrd|trigamma|trim|trimn|trunc|uniform|upcase|uss|var|varfmt|varinfmt|varlabel|varlen|varname|varnum|varray|varrayx|vartype|verify|vformat|vformatd|vformatdx|vformatn|vformatnx|vformatw|vformatwx|vformatx|vinarray|vinarrayx|vinformat|vinformatd|vinformatdx|vinformatn|vinformatnx|vinformatw|vinformatwx|vinformatx|vlabel|vlabelx|vlength|vlengthx|vname|vnamex|vtype|vtypex|weekday|year|yyq|zipfips|zipname|zipnamel|zipstate";
    return {
      name: "SAS",
      case_insensitive: !0,
      keywords: {
        literal: "null missing _all_ _automatic_ _character_ _infile_ _n_ _name_ _null_ _numeric_ _user_ _webout_",
        meta: d
      },
      contains: [{
        className: "keyword",
        begin: /^\s*(proc [\w\d_]+|data|run|quit)[\s;]/
      }, {
        className: "variable",
        begin: /&[a-zA-Z_&][a-zA-Z0-9_]*\.?/
      }, {
        className: "emphasis",
        begin: /^\s*datalines|cards.*;/,
        end: /^\s*;\s*$/
      }, {
        className: "built_in",
        begin: "%(" + "bquote|nrbquote|cmpres|qcmpres|compstor|datatyp|display|do|else|end|eval|global|goto|if|index|input|keydef|label|left|length|let|local|lowcase|macro|mend|nrbquote|nrquote|nrstr|put|qcmpres|qleft|qlowcase|qscan|qsubstr|qsysfunc|qtrim|quote|qupcase|scan|str|substr|superq|syscall|sysevalf|sysexec|sysfunc|sysget|syslput|sysprod|sysrc|sysrput|then|to|trim|unquote|until|upcase|verify|while|window" + ")"
      }, {
        className: "name",
        begin: /%[a-zA-Z_][a-zA-Z_0-9]*/
      }, {
        className: "meta",
        begin: "[^%](" + G + ")[(]"
      }, {
        className: "string",
        variants: [I.APOS_STRING_MODE, I.QUOTE_STRING_MODE]
      }, I.COMMENT("\\*", ";"), I.C_BLOCK_COMMENT_MODE]
    }
  }
  D_2.exports = a29
})
// @from(Start 4746799, End 4749279)
g_2 = Y((gg3, F_2) => {
  function s29(I) {
    let d = {
        className: "meta",
        begin: "@[A-Za-z]+"
      },
      G = {
        className: "subst",
        variants: [{
          begin: "\\$[A-Za-z0-9_]+"
        }, {
          begin: /\$\{/,
          end: /\}/
        }]
      },
      Z = {
        className: "string",
        variants: [{
          begin: '"""',
          end: '"""'
        }, {
          begin: '"',
          end: '"',
          illegal: "\\n",
          contains: [I.BACKSLASH_ESCAPE]
        }, {
          begin: '[a-z]+"',
          end: '"',
          illegal: "\\n",
          contains: [I.BACKSLASH_ESCAPE, G]
        }, {
          className: "string",
          begin: '[a-z]+"""',
          end: '"""',
          contains: [G],
          relevance: 10
        }]
      },
      C = {
        className: "symbol",
        begin: "'\\w[\\w\\d_]*(?!')"
      },
      W = {
        className: "type",
        begin: "\\b[A-Z][A-Za-z0-9_]*",
        relevance: 0
      },
      w = {
        className: "title",
        begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
        relevance: 0
      },
      B = {
        className: "class",
        beginKeywords: "class object trait type",
        end: /[:={\[\n;]/,
        excludeEnd: !0,
        contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, {
          beginKeywords: "extends with",
          relevance: 10
        }, {
          begin: /\[/,
          end: /\]/,
          excludeBegin: !0,
          excludeEnd: !0,
          relevance: 0,
          contains: [W]
        }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          relevance: 0,
          contains: [W]
        }, w]
      },
      A = {
        className: "function",
        beginKeywords: "def",
        end: /[:={\[(\n;]/,
        excludeEnd: !0,
        contains: [w]
      };
    return {
      name: "Scala",
      keywords: {
        literal: "true false null",
        keyword: "type yield lazy override def with val var sealed abstract private trait object if forSome for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit"
      },
      contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, Z, C, W, A, B, I.C_NUMBER_MODE, d]
    }
  }
  F_2.exports = s29
})
// @from(Start 4749285, End 4753666)
K_2 = Y((Jg3, J_2) => {
  function o29(I) {
    let Z = "(-|\\+)?\\d+([./]\\d+)?[+\\-](-|\\+)?\\d+([./]\\d+)?i",
      C = {
        $pattern: "[^\\(\\)\\[\\]\\{\\}\",'`;#|\\\\\\s]+",
        "builtin-name": "case-lambda call/cc class define-class exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules ' * + , ,@ - ... / ; < <= = => > >= ` abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?"
      },
      W = {
        className: "literal",
        begin: "(#t|#f|#\\\\[^\\(\\)\\[\\]\\{\\}\",'`;#|\\\\\\s]+|#\\\\.)"
      },
      w = {
        className: "number",
        variants: [{
          begin: "(-|\\+)?\\d+([./]\\d+)?",
          relevance: 0
        }, {
          begin: Z,
          relevance: 0
        }, {
          begin: "#b[0-1]+(/[0-1]+)?"
        }, {
          begin: "#o[0-7]+(/[0-7]+)?"
        }, {
          begin: "#x[0-9a-f]+(/[0-9a-f]+)?"
        }]
      },
      B = I.QUOTE_STRING_MODE,
      A = [I.COMMENT(";", "$", {
        relevance: 0
      }), I.COMMENT("#\\|", "\\|#")],
      V = {
        begin: "[^\\(\\)\\[\\]\\{\\}\",'`;#|\\\\\\s]+",
        relevance: 0
      },
      X = {
        className: "symbol",
        begin: "'[^\\(\\)\\[\\]\\{\\}\",'`;#|\\\\\\s]+"
      },
      _ = {
        endsWithParent: !0,
        relevance: 0
      },
      F = {
        variants: [{
          begin: /'/
        }, {
          begin: "`"
        }],
        contains: [{
          begin: "\\(",
          end: "\\)",
          contains: ["self", W, B, w, V, X]
        }]
      },
      g = {
        className: "name",
        relevance: 0,
        begin: "[^\\(\\)\\[\\]\\{\\}\",'`;#|\\\\\\s]+",
        keywords: C
      },
      K = {
        variants: [{
          begin: "\\(",
          end: "\\)"
        }, {
          begin: "\\[",
          end: "\\]"
        }],
        contains: [{
          begin: /lambda/,
          endsWithParent: !0,
          returnBegin: !0,
          contains: [g, {
            endsParent: !0,
            variants: [{
              begin: /\(/,
              end: /\)/
            }, {
              begin: /\[/,
              end: /\]/
            }],
            contains: [V]
          }]
        }, g, _]
      };
    return _.contains = [W, w, B, V, X, F, K].concat(A), {
      name: "Scheme",
      illegal: /\S/,
      contains: [I.SHEBANG(), w, B, X, F, K].concat(A)
    }
  }
  J_2.exports = o29
})
// @from(Start 4753672, End 4755210)
z_2 = Y((Kg3, N_2) => {
  function e29(I) {
    let d = [I.C_NUMBER_MODE, {
      className: "string",
      begin: `'|"`,
      end: `'|"`,
      contains: [I.BACKSLASH_ESCAPE, {
        begin: "''"
      }]
    }];
    return {
      name: "Scilab",
      aliases: ["sci"],
      keywords: {
        $pattern: /%?\w+/,
        keyword: "abort break case clear catch continue do elseif else endfunction end for function global if pause return resume select try then while",
        literal: "%f %F %t %T %pi %eps %inf %nan %e %i %z %s",
        built_in: "abs and acos asin atan ceil cd chdir clearglobal cosh cos cumprod deff disp error exec execstr exists exp eye gettext floor fprintf fread fsolve imag isdef isempty isinfisnan isvector lasterror length load linspace list listfiles log10 log2 log max min msprintf mclose mopen ones or pathconvert poly printf prod pwd rand real round sinh sin size gsort sprintf sqrt strcat strcmps tring sum system tanh tan type typename warning zeros matrix"
      },
      illegal: '("|#|/\\*|\\s+/\\w+)',
      contains: [{
        className: "function",
        beginKeywords: "function",
        end: "$",
        contains: [I.UNDERSCORE_TITLE_MODE, {
          className: "params",
          begin: "\\(",
          end: "\\)"
        }]
      }, {
        begin: "[a-zA-Z_][a-zA-Z_0-9]*[\\.']+",
        relevance: 0
      }, {
        begin: "\\[",
        end: "\\][\\.']*",
        relevance: 0,
        contains: d
      }, I.COMMENT("//", "$")].concat(d)
    }
  }
  N_2.exports = e29
})
// @from(Start 4755216, End 4764256)
f_2 = Y((Ng3, Q_2) => {
  var t29 = (I) => {
      return {
        IMPORTANT: {
          className: "meta",
          begin: "!important"
        },
        HEXCOLOR: {
          className: "number",
          begin: "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})"
        },
        ATTRIBUTE_SELECTOR_MODE: {
          className: "selector-attr",
          begin: /\[/,
          end: /\]/,
          illegal: "$",
          contains: [I.APOS_STRING_MODE, I.QUOTE_STRING_MODE]
        }
      }
    },
    I49 = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"],
    d49 = ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"],
    G49 = ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"],
    Z49 = ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"],
    C49 = ["align-content", "align-items", "align-self", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "auto", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "clip-path", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-variant", "font-variant-ligatures", "font-variation-settings", "font-weight", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inherit", "initial", "justify-content", "left", "letter-spacing", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "mask", "max-height", "max-width", "min-height", "min-width", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "right", "src", "tab-size", "table-layout", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index"].reverse();

  function W49(I) {
    let d = t29(I),
      G = Z49,
      Z = G49,
      C = "@[a-z-]+",
      W = "and or not only",
      w = "[a-zA-Z-][a-zA-Z0-9_-]*",
      B = {
        className: "variable",
        begin: "(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b"
      };
    return {
      name: "SCSS",
      case_insensitive: !0,
      illegal: "[=/|']",
      contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, {
        className: "selector-id",
        begin: "#[A-Za-z0-9_-]+",
        relevance: 0
      }, {
        className: "selector-class",
        begin: "\\.[A-Za-z0-9_-]+",
        relevance: 0
      }, d.ATTRIBUTE_SELECTOR_MODE, {
        className: "selector-tag",
        begin: "\\b(" + I49.join("|") + ")\\b",
        relevance: 0
      }, {
        className: "selector-pseudo",
        begin: ":(" + Z.join("|") + ")"
      }, {
        className: "selector-pseudo",
        begin: "::(" + G.join("|") + ")"
      }, B, {
        begin: /\(/,
        end: /\)/,
        contains: [I.CSS_NUMBER_MODE]
      }, {
        className: "attribute",
        begin: "\\b(" + C49.join("|") + ")\\b"
      }, {
        begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
      }, {
        begin: ":",
        end: ";",
        contains: [B, d.HEXCOLOR, I.CSS_NUMBER_MODE, I.QUOTE_STRING_MODE, I.APOS_STRING_MODE, d.IMPORTANT]
      }, {
        begin: "@(page|font-face)",
        lexemes: "@[a-z-]+",
        keywords: "@page @font-face"
      }, {
        begin: "@",
        end: "[{;]",
        returnBegin: !0,
        keywords: {
          $pattern: /[a-z-]+/,
          keyword: "and or not only",
          attribute: d49.join(" ")
        },
        contains: [{
          begin: "@[a-z-]+",
          className: "keyword"
        }, {
          begin: /[a-z-]+(?=:)/,
          className: "attribute"
        }, B, I.QUOTE_STRING_MODE, I.APOS_STRING_MODE, d.HEXCOLOR, I.CSS_NUMBER_MODE]
      }]
    }
  }
  Q_2.exports = W49
})
// @from(Start 4764262, End 4764602)
R_2 = Y((zg3, q_2) => {
  function w49(I) {
    return {
      name: "Shell Session",
      aliases: ["console"],
      contains: [{
        className: "meta",
        begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#]/,
        starts: {
          end: /[^\\](?=\s*$)/,
          subLanguage: "bash"
        }
      }]
    }
  }
  q_2.exports = w49
})
// @from(Start 4764608, End 4766215)
v_2 = Y((Qg3, U_2) => {
  function B49(I) {
    let d = ["add", "and", "cmp", "cmpg", "cmpl", "const", "div", "double", "float", "goto", "if", "int", "long", "move", "mul", "neg", "new", "nop", "not", "or", "rem", "return", "shl", "shr", "sput", "sub", "throw", "ushr", "xor"],
      G = ["aget", "aput", "array", "check", "execute", "fill", "filled", "goto/16", "goto/32", "iget", "instance", "invoke", "iput", "monitor", "packed", "sget", "sparse"],
      Z = ["transient", "constructor", "abstract", "final", "synthetic", "public", "private", "protected", "static", "bridge", "system"];
    return {
      name: "Smali",
      contains: [{
        className: "string",
        begin: '"',
        end: '"',
        relevance: 0
      }, I.COMMENT("#", "$", {
        relevance: 0
      }), {
        className: "keyword",
        variants: [{
          begin: "\\s*\\.end\\s[a-zA-Z0-9]*"
        }, {
          begin: "^[ ]*\\.[a-zA-Z]*",
          relevance: 0
        }, {
          begin: "\\s:[a-zA-Z_0-9]*",
          relevance: 0
        }, {
          begin: "\\s(" + Z.join("|") + ")"
        }]
      }, {
        className: "built_in",
        variants: [{
          begin: "\\s(" + d.join("|") + ")\\s"
        }, {
          begin: "\\s(" + d.join("|") + ")((-|/)[a-zA-Z0-9]+)+\\s",
          relevance: 10
        }, {
          begin: "\\s(" + G.join("|") + ")((-|/)[a-zA-Z0-9]+)*\\s",
          relevance: 10
        }]
      }, {
        className: "class",
        begin: `L[^(;:
]*;`,
        relevance: 0
      }, {
        begin: "[vp][0-9]+"
      }]
    }
  }
  U_2.exports = B49
})
// @from(Start 4766221, End 4767185)
M_2 = Y((fg3, E_2) => {
  function A49(I) {
    let G = {
        className: "string",
        begin: "\\$.{1}"
      },
      Z = {
        className: "symbol",
        begin: "#" + I.UNDERSCORE_IDENT_RE
      };
    return {
      name: "Smalltalk",
      aliases: ["st"],
      keywords: "self super nil true false thisContext",
      contains: [I.COMMENT('"', '"'), I.APOS_STRING_MODE, {
        className: "type",
        begin: "\\b[A-Z][A-Za-z0-9_]*",
        relevance: 0
      }, {
        begin: "[a-z][a-zA-Z0-9_]*:",
        relevance: 0
      }, I.C_NUMBER_MODE, Z, G, {
        begin: "\\|[ ]*[a-z][a-zA-Z0-9_]*([ ]+[a-z][a-zA-Z0-9_]*)*[ ]*\\|",
        returnBegin: !0,
        end: /\|/,
        illegal: /\S/,
        contains: [{
          begin: "(\\|[ ]*)?[a-z][a-zA-Z0-9_]*"
        }]
      }, {
        begin: "#\\(",
        end: "\\)",
        contains: [I.APOS_STRING_MODE, G, I.C_NUMBER_MODE, Z]
      }]
    }
  }
  E_2.exports = A49
})
// @from(Start 4767191, End 4768714)
L_2 = Y((qg3, S_2) => {
  function V49(I) {
    return {
      name: "SML (Standard ML)",
      aliases: ["ml"],
      keywords: {
        $pattern: "[a-z_]\\w*!?",
        keyword: "abstype and andalso as case datatype do else end eqtype exception fn fun functor handle if in include infix infixr let local nonfix of op open orelse raise rec sharing sig signature struct structure then type val with withtype where while",
        built_in: "array bool char exn int list option order real ref string substring vector unit word",
        literal: "true false NONE SOME LESS EQUAL GREATER nil"
      },
      illegal: /\/\/|>>/,
      contains: [{
        className: "literal",
        begin: /\[(\|\|)?\]|\(\)/,
        relevance: 0
      }, I.COMMENT("\\(\\*", "\\*\\)", {
        contains: ["self"]
      }), {
        className: "symbol",
        begin: "'[A-Za-z_](?!')[\\w']*"
      }, {
        className: "type",
        begin: "`[A-Z][\\w']*"
      }, {
        className: "type",
        begin: "\\b[A-Z][\\w']*",
        relevance: 0
      }, {
        begin: "[a-z_]\\w*'[\\w']*"
      }, I.inherit(I.APOS_STRING_MODE, {
        className: "string",
        relevance: 0
      }), I.inherit(I.QUOTE_STRING_MODE, {
        illegal: null
      }), {
        className: "number",
        begin: "\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",
        relevance: 0
      }, {
        begin: /[-=]>/
      }]
    }
  }
  S_2.exports = V49
})
// @from(Start 4768720, End 4801522)
P_2 = Y((Rg3, y_2) => {
  function X49(I) {
    let d = {
        className: "variable",
        begin: /\b_+[a-zA-Z]\w*/
      },
      G = {
        className: "title",
        begin: /[a-zA-Z][a-zA-Z0-9]+_fnc_\w*/
      },
      Z = {
        className: "string",
        variants: [{
          begin: '"',
          end: '"',
          contains: [{
            begin: '""',
            relevance: 0
          }]
        }, {
          begin: "'",
          end: "'",
          contains: [{
            begin: "''",
            relevance: 0
          }]
        }]
      },
      C = {
        className: "meta",
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: {
          "meta-keyword": "define undef ifdef ifndef else endif include"
        },
        contains: [{
          begin: /\\\n/,
          relevance: 0
        }, I.inherit(Z, {
          className: "meta-string"
        }), {
          className: "meta-string",
          begin: /<[^\n>]*>/,
          end: /$/,
          illegal: "\\n"
        }, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE]
      };
    return {
      name: "SQF",
      case_insensitive: !0,
      keywords: {
        keyword: "case catch default do else exit exitWith for forEach from if private switch then throw to try waitUntil while with",
        built_in: "abs accTime acos action actionIDs actionKeys actionKeysImages actionKeysNames actionKeysNamesArray actionName actionParams activateAddons activatedAddons activateKey add3DENConnection add3DENEventHandler add3DENLayer addAction addBackpack addBackpackCargo addBackpackCargoGlobal addBackpackGlobal addCamShake addCuratorAddons addCuratorCameraArea addCuratorEditableObjects addCuratorEditingArea addCuratorPoints addEditorObject addEventHandler addForce addGoggles addGroupIcon addHandgunItem addHeadgear addItem addItemCargo addItemCargoGlobal addItemPool addItemToBackpack addItemToUniform addItemToVest addLiveStats addMagazine addMagazineAmmoCargo addMagazineCargo addMagazineCargoGlobal addMagazineGlobal addMagazinePool addMagazines addMagazineTurret addMenu addMenuItem addMissionEventHandler addMPEventHandler addMusicEventHandler addOwnedMine addPlayerScores addPrimaryWeaponItem addPublicVariableEventHandler addRating addResources addScore addScoreSide addSecondaryWeaponItem addSwitchableUnit addTeamMember addToRemainsCollector addTorque addUniform addVehicle addVest addWaypoint addWeapon addWeaponCargo addWeaponCargoGlobal addWeaponGlobal addWeaponItem addWeaponPool addWeaponTurret admin agent agents AGLToASL aimedAtTarget aimPos airDensityRTD airplaneThrottle airportSide AISFinishHeal alive all3DENEntities allAirports allControls allCurators allCutLayers allDead allDeadMen allDisplays allGroups allMapMarkers allMines allMissionObjects allow3DMode allowCrewInImmobile allowCuratorLogicIgnoreAreas allowDamage allowDammage allowFileOperations allowFleeing allowGetIn allowSprint allPlayers allSimpleObjects allSites allTurrets allUnits allUnitsUAV allVariables ammo ammoOnPylon and animate animateBay animateDoor animatePylon animateSource animationNames animationPhase animationSourcePhase animationState append apply armoryPoints arrayIntersect asin ASLToAGL ASLToATL assert assignAsCargo assignAsCargoIndex assignAsCommander assignAsDriver assignAsGunner assignAsTurret assignCurator assignedCargo assignedCommander assignedDriver assignedGunner assignedItems assignedTarget assignedTeam assignedVehicle assignedVehicleRole assignItem assignTeam assignToAirport atan atan2 atg ATLToASL attachedObject attachedObjects attachedTo attachObject attachTo attackEnabled backpack backpackCargo backpackContainer backpackItems backpackMagazines backpackSpaceFor behaviour benchmark binocular boundingBox boundingBoxReal boundingCenter breakOut breakTo briefingName buildingExit buildingPos buttonAction buttonSetAction cadetMode call callExtension camCommand camCommit camCommitPrepared camCommitted camConstuctionSetParams camCreate camDestroy cameraEffect cameraEffectEnableHUD cameraInterest cameraOn cameraView campaignConfigFile camPreload camPreloaded camPrepareBank camPrepareDir camPrepareDive camPrepareFocus camPrepareFov camPrepareFovRange camPreparePos camPrepareRelPos camPrepareTarget camSetBank camSetDir camSetDive camSetFocus camSetFov camSetFovRange camSetPos camSetRelPos camSetTarget camTarget camUseNVG canAdd canAddItemToBackpack canAddItemToUniform canAddItemToVest cancelSimpleTaskDestination canFire canMove canSlingLoad canStand canSuspend canTriggerDynamicSimulation canUnloadInCombat canVehicleCargo captive captiveNum cbChecked cbSetChecked ceil channelEnabled cheatsEnabled checkAIFeature checkVisibility className clearAllItemsFromBackpack clearBackpackCargo clearBackpackCargoGlobal clearGroupIcons clearItemCargo clearItemCargoGlobal clearItemPool clearMagazineCargo clearMagazineCargoGlobal clearMagazinePool clearOverlay clearRadio clearWeaponCargo clearWeaponCargoGlobal clearWeaponPool clientOwner closeDialog closeDisplay closeOverlay collapseObjectTree collect3DENHistory collectiveRTD combatMode commandArtilleryFire commandChat commander commandFire commandFollow commandFSM commandGetOut commandingMenu commandMove commandRadio commandStop commandSuppressiveFire commandTarget commandWatch comment commitOverlay compile compileFinal completedFSM composeText configClasses configFile configHierarchy configName configProperties configSourceAddonList configSourceMod configSourceModList confirmSensorTarget connectTerminalToUAV controlsGroupCtrl copyFromClipboard copyToClipboard copyWaypoints cos count countEnemy countFriendly countSide countType countUnknown create3DENComposition create3DENEntity createAgent createCenter createDialog createDiaryLink createDiaryRecord createDiarySubject createDisplay createGearDialog createGroup createGuardedPoint createLocation createMarker createMarkerLocal createMenu createMine createMissionDisplay createMPCampaignDisplay createSimpleObject createSimpleTask createSite createSoundSource createTask createTeam createTrigger createUnit createVehicle createVehicleCrew createVehicleLocal crew ctAddHeader ctAddRow ctClear ctCurSel ctData ctFindHeaderRows ctFindRowHeader ctHeaderControls ctHeaderCount ctRemoveHeaders ctRemoveRows ctrlActivate ctrlAddEventHandler ctrlAngle ctrlAutoScrollDelay ctrlAutoScrollRewind ctrlAutoScrollSpeed ctrlChecked ctrlClassName ctrlCommit ctrlCommitted ctrlCreate ctrlDelete ctrlEnable ctrlEnabled ctrlFade ctrlHTMLLoaded ctrlIDC ctrlIDD ctrlMapAnimAdd ctrlMapAnimClear ctrlMapAnimCommit ctrlMapAnimDone ctrlMapCursor ctrlMapMouseOver ctrlMapScale ctrlMapScreenToWorld ctrlMapWorldToScreen ctrlModel ctrlModelDirAndUp ctrlModelScale ctrlParent ctrlParentControlsGroup ctrlPosition ctrlRemoveAllEventHandlers ctrlRemoveEventHandler ctrlScale ctrlSetActiveColor ctrlSetAngle ctrlSetAutoScrollDelay ctrlSetAutoScrollRewind ctrlSetAutoScrollSpeed ctrlSetBackgroundColor ctrlSetChecked ctrlSetEventHandler ctrlSetFade ctrlSetFocus ctrlSetFont ctrlSetFontH1 ctrlSetFontH1B ctrlSetFontH2 ctrlSetFontH2B ctrlSetFontH3 ctrlSetFontH3B ctrlSetFontH4 ctrlSetFontH4B ctrlSetFontH5 ctrlSetFontH5B ctrlSetFontH6 ctrlSetFontH6B ctrlSetFontHeight ctrlSetFontHeightH1 ctrlSetFontHeightH2 ctrlSetFontHeightH3 ctrlSetFontHeightH4 ctrlSetFontHeightH5 ctrlSetFontHeightH6 ctrlSetFontHeightSecondary ctrlSetFontP ctrlSetFontPB ctrlSetFontSecondary ctrlSetForegroundColor ctrlSetModel ctrlSetModelDirAndUp ctrlSetModelScale ctrlSetPixelPrecision ctrlSetPosition ctrlSetScale ctrlSetStructuredText ctrlSetText ctrlSetTextColor ctrlSetTooltip ctrlSetTooltipColorBox ctrlSetTooltipColorShade ctrlSetTooltipColorText ctrlShow ctrlShown ctrlText ctrlTextHeight ctrlTextWidth ctrlType ctrlVisible ctRowControls ctRowCount ctSetCurSel ctSetData ctSetHeaderTemplate ctSetRowTemplate ctSetValue ctValue curatorAddons curatorCamera curatorCameraArea curatorCameraAreaCeiling curatorCoef curatorEditableObjects curatorEditingArea curatorEditingAreaType curatorMouseOver curatorPoints curatorRegisteredObjects curatorSelected curatorWaypointCost current3DENOperation currentChannel currentCommand currentMagazine currentMagazineDetail currentMagazineDetailTurret currentMagazineTurret currentMuzzle currentNamespace currentTask currentTasks currentThrowable currentVisionMode currentWaypoint currentWeapon currentWeaponMode currentWeaponTurret currentZeroing cursorObject cursorTarget customChat customRadio cutFadeOut cutObj cutRsc cutText damage date dateToNumber daytime deActivateKey debriefingText debugFSM debugLog deg delete3DENEntities deleteAt deleteCenter deleteCollection deleteEditorObject deleteGroup deleteGroupWhenEmpty deleteIdentity deleteLocation deleteMarker deleteMarkerLocal deleteRange deleteResources deleteSite deleteStatus deleteTeam deleteVehicle deleteVehicleCrew deleteWaypoint detach detectedMines diag_activeMissionFSMs diag_activeScripts diag_activeSQFScripts diag_activeSQSScripts diag_captureFrame diag_captureFrameToFile diag_captureSlowFrame diag_codePerformance diag_drawMode diag_enable diag_enabled diag_fps diag_fpsMin diag_frameNo diag_lightNewLoad diag_list diag_log diag_logSlowFrame diag_mergeConfigFile diag_recordTurretLimits diag_setLightNew diag_tickTime diag_toggle dialog diarySubjectExists didJIP didJIPOwner difficulty difficultyEnabled difficultyEnabledRTD difficultyOption direction directSay disableAI disableCollisionWith disableConversation disableDebriefingStats disableMapIndicators disableNVGEquipment disableRemoteSensors disableSerialization disableTIEquipment disableUAVConnectability disableUserInput displayAddEventHandler displayCtrl displayParent displayRemoveAllEventHandlers displayRemoveEventHandler displaySetEventHandler dissolveTeam distance distance2D distanceSqr distributionRegion do3DENAction doArtilleryFire doFire doFollow doFSM doGetOut doMove doorPhase doStop doSuppressiveFire doTarget doWatch drawArrow drawEllipse drawIcon drawIcon3D drawLine drawLine3D drawLink drawLocation drawPolygon drawRectangle drawTriangle driver drop dynamicSimulationDistance dynamicSimulationDistanceCoef dynamicSimulationEnabled dynamicSimulationSystemEnabled echo edit3DENMissionAttributes editObject editorSetEventHandler effectiveCommander emptyPositions enableAI enableAIFeature enableAimPrecision enableAttack enableAudioFeature enableAutoStartUpRTD enableAutoTrimRTD enableCamShake enableCaustics enableChannel enableCollisionWith enableCopilot enableDebriefingStats enableDiagLegend enableDynamicSimulation enableDynamicSimulationSystem enableEndDialog enableEngineArtillery enableEnvironment enableFatigue enableGunLights enableInfoPanelComponent enableIRLasers enableMimics enablePersonTurret enableRadio enableReload enableRopeAttach enableSatNormalOnDetail enableSaving enableSentences enableSimulation enableSimulationGlobal enableStamina enableTeamSwitch enableTraffic enableUAVConnectability enableUAVWaypoints enableVehicleCargo enableVehicleSensor enableWeaponDisassembly endLoadingScreen endMission engineOn enginesIsOnRTD enginesRpmRTD enginesTorqueRTD entities environmentEnabled estimatedEndServerTime estimatedTimeLeft evalObjectArgument everyBackpack everyContainer exec execEditorScript execFSM execVM exp expectedDestination exportJIPMessages eyeDirection eyePos face faction fadeMusic fadeRadio fadeSound fadeSpeech failMission fillWeaponsFromPool find findCover findDisplay findEditorObject findEmptyPosition findEmptyPositionReady findIf findNearestEnemy finishMissionInit finite fire fireAtTarget firstBackpack flag flagAnimationPhase flagOwner flagSide flagTexture fleeing floor flyInHeight flyInHeightASL fog fogForecast fogParams forceAddUniform forcedMap forceEnd forceFlagTexture forceFollowRoad forceMap forceRespawn forceSpeed forceWalk forceWeaponFire forceWeatherChange forEachMember forEachMemberAgent forEachMemberTeam forgetTarget format formation formationDirection formationLeader formationMembers formationPosition formationTask formatText formLeader freeLook fromEditor fuel fullCrew gearIDCAmmoCount gearSlotAmmoCount gearSlotData get3DENActionState get3DENAttribute get3DENCamera get3DENConnections get3DENEntity get3DENEntityID get3DENGrid get3DENIconsVisible get3DENLayerEntities get3DENLinesVisible get3DENMissionAttribute get3DENMouseOver get3DENSelected getAimingCoef getAllEnvSoundControllers getAllHitPointsDamage getAllOwnedMines getAllSoundControllers getAmmoCargo getAnimAimPrecision getAnimSpeedCoef getArray getArtilleryAmmo getArtilleryComputerSettings getArtilleryETA getAssignedCuratorLogic getAssignedCuratorUnit getBackpackCargo getBleedingRemaining getBurningValue getCameraViewDirection getCargoIndex getCenterOfMass getClientState getClientStateNumber getCompatiblePylonMagazines getConnectedUAV getContainerMaxLoad getCursorObjectParams getCustomAimCoef getDammage getDescription getDir getDirVisual getDLCAssetsUsage getDLCAssetsUsageByName getDLCs getEditorCamera getEditorMode getEditorObjectScope getElevationOffset getEnvSoundController getFatigue getForcedFlagTexture getFriend getFSMVariable getFuelCargo getGroupIcon getGroupIconParams getGroupIcons getHideFrom getHit getHitIndex getHitPointDamage getItemCargo getMagazineCargo getMarkerColor getMarkerPos getMarkerSize getMarkerType getMass getMissionConfig getMissionConfigValue getMissionDLCs getMissionLayerEntities getModelInfo getMousePosition getMusicPlayedTime getNumber getObjectArgument getObjectChildren getObjectDLC getObjectMaterials getObjectProxy getObjectTextures getObjectType getObjectViewDistance getOxygenRemaining getPersonUsedDLCs getPilotCameraDirection getPilotCameraPosition getPilotCameraRotation getPilotCameraTarget getPlateNumber getPlayerChannel getPlayerScores getPlayerUID getPos getPosASL getPosASLVisual getPosASLW getPosATL getPosATLVisual getPosVisual getPosWorld getPylonMagazines getRelDir getRelPos getRemoteSensorsDisabled getRepairCargo getResolution getShadowDistance getShotParents getSlingLoad getSoundController getSoundControllerResult getSpeed getStamina getStatValue getSuppression getTerrainGrid getTerrainHeightASL getText getTotalDLCUsageTime getUnitLoadout getUnitTrait getUserMFDText getUserMFDvalue getVariable getVehicleCargo getWeaponCargo getWeaponSway getWingsOrientationRTD getWingsPositionRTD getWPPos glanceAt globalChat globalRadio goggles goto group groupChat groupFromNetId groupIconSelectable groupIconsVisible groupId groupOwner groupRadio groupSelectedUnits groupSelectUnit gunner gusts halt handgunItems handgunMagazine handgunWeapon handsHit hasInterface hasPilotCamera hasWeapon hcAllGroups hcGroupParams hcLeader hcRemoveAllGroups hcRemoveGroup hcSelected hcSelectGroup hcSetGroup hcShowBar hcShownBar headgear hideBody hideObject hideObjectGlobal hideSelection hint hintC hintCadet hintSilent hmd hostMission htmlLoad HUDMovementLevels humidity image importAllGroups importance in inArea inAreaArray incapacitatedState inflame inflamed infoPanel infoPanelComponentEnabled infoPanelComponents infoPanels inGameUISetEventHandler inheritsFrom initAmbientLife inPolygon inputAction inRangeOfArtillery insertEditorObject intersect is3DEN is3DENMultiplayer isAbleToBreathe isAgent isArray isAutoHoverOn isAutonomous isAutotest isBleeding isBurning isClass isCollisionLightOn isCopilotEnabled isDamageAllowed isDedicated isDLCAvailable isEngineOn isEqualTo isEqualType isEqualTypeAll isEqualTypeAny isEqualTypeArray isEqualTypeParams isFilePatchingEnabled isFlashlightOn isFlatEmpty isForcedWalk isFormationLeader isGroupDeletedWhenEmpty isHidden isInRemainsCollector isInstructorFigureEnabled isIRLaserOn isKeyActive isKindOf isLaserOn isLightOn isLocalized isManualFire isMarkedForCollection isMultiplayer isMultiplayerSolo isNil isNull isNumber isObjectHidden isObjectRTD isOnRoad isPipEnabled isPlayer isRealTime isRemoteExecuted isRemoteExecutedJIP isServer isShowing3DIcons isSimpleObject isSprintAllowed isStaminaEnabled isSteamMission isStreamFriendlyUIEnabled isText isTouchingGround isTurnedOut isTutHintsEnabled isUAVConnectable isUAVConnected isUIContext isUniformAllowed isVehicleCargo isVehicleRadarOn isVehicleSensorEnabled isWalking isWeaponDeployed isWeaponRested itemCargo items itemsWithMagazines join joinAs joinAsSilent joinSilent joinString kbAddDatabase kbAddDatabaseTargets kbAddTopic kbHasTopic kbReact kbRemoveTopic kbTell kbWasSaid keyImage keyName knowsAbout land landAt landResult language laserTarget lbAdd lbClear lbColor lbColorRight lbCurSel lbData lbDelete lbIsSelected lbPicture lbPictureRight lbSelection lbSetColor lbSetColorRight lbSetCurSel lbSetData lbSetPicture lbSetPictureColor lbSetPictureColorDisabled lbSetPictureColorSelected lbSetPictureRight lbSetPictureRightColor lbSetPictureRightColorDisabled lbSetPictureRightColorSelected lbSetSelectColor lbSetSelectColorRight lbSetSelected lbSetText lbSetTextRight lbSetTooltip lbSetValue lbSize lbSort lbSortByValue lbText lbTextRight lbValue leader leaderboardDeInit leaderboardGetRows leaderboardInit leaderboardRequestRowsFriends leaderboardsRequestUploadScore leaderboardsRequestUploadScoreKeepBest leaderboardState leaveVehicle libraryCredits libraryDisclaimers lifeState lightAttachObject lightDetachObject lightIsOn lightnings limitSpeed linearConversion lineIntersects lineIntersectsObjs lineIntersectsSurfaces lineIntersectsWith linkItem list listObjects listRemoteTargets listVehicleSensors ln lnbAddArray lnbAddColumn lnbAddRow lnbClear lnbColor lnbCurSelRow lnbData lnbDeleteColumn lnbDeleteRow lnbGetColumnsPosition lnbPicture lnbSetColor lnbSetColumnsPos lnbSetCurSelRow lnbSetData lnbSetPicture lnbSetText lnbSetValue lnbSize lnbSort lnbSortByValue lnbText lnbValue load loadAbs loadBackpack loadFile loadGame loadIdentity loadMagazine loadOverlay loadStatus loadUniform loadVest local localize locationPosition lock lockCameraTo lockCargo lockDriver locked lockedCargo lockedDriver lockedTurret lockIdentity lockTurret lockWP log logEntities logNetwork logNetworkTerminate lookAt lookAtPos magazineCargo magazines magazinesAllTurrets magazinesAmmo magazinesAmmoCargo magazinesAmmoFull magazinesDetail magazinesDetailBackpack magazinesDetailUniform magazinesDetailVest magazinesTurret magazineTurretAmmo mapAnimAdd mapAnimClear mapAnimCommit mapAnimDone mapCenterOnCamera mapGridPosition markAsFinishedOnSteam markerAlpha markerBrush markerColor markerDir markerPos markerShape markerSize markerText markerType max members menuAction menuAdd menuChecked menuClear menuCollapse menuData menuDelete menuEnable menuEnabled menuExpand menuHover menuPicture menuSetAction menuSetCheck menuSetData menuSetPicture menuSetValue menuShortcut menuShortcutText menuSize menuSort menuText menuURL menuValue min mineActive mineDetectedBy missionConfigFile missionDifficulty missionName missionNamespace missionStart missionVersion mod modelToWorld modelToWorldVisual modelToWorldVisualWorld modelToWorldWorld modParams moonIntensity moonPhase morale move move3DENCamera moveInAny moveInCargo moveInCommander moveInDriver moveInGunner moveInTurret moveObjectToEnd moveOut moveTime moveTo moveToCompleted moveToFailed musicVolume name nameSound nearEntities nearestBuilding nearestLocation nearestLocations nearestLocationWithDubbing nearestObject nearestObjects nearestTerrainObjects nearObjects nearObjectsReady nearRoads nearSupplies nearTargets needReload netId netObjNull newOverlay nextMenuItemIndex nextWeatherChange nMenuItems not numberOfEnginesRTD numberToDate objectCurators objectFromNetId objectParent objStatus onBriefingGroup onBriefingNotes onBriefingPlan onBriefingTeamSwitch onCommandModeChanged onDoubleClick onEachFrame onGroupIconClick onGroupIconOverEnter onGroupIconOverLeave onHCGroupSelectionChanged onMapSingleClick onPlayerConnected onPlayerDisconnected onPreloadFinished onPreloadStarted onShowNewObject onTeamSwitch openCuratorInterface openDLCPage openMap openSteamApp openYoutubeVideo or orderGetIn overcast overcastForecast owner param params parseNumber parseSimpleArray parseText parsingNamespace particlesQuality pickWeaponPool pitch pixelGrid pixelGridBase pixelGridNoUIScale pixelH pixelW playableSlotsNumber playableUnits playAction playActionNow player playerRespawnTime playerSide playersNumber playGesture playMission playMove playMoveNow playMusic playScriptedMission playSound playSound3D position positionCameraToWorld posScreenToWorld posWorldToScreen ppEffectAdjust ppEffectCommit ppEffectCommitted ppEffectCreate ppEffectDestroy ppEffectEnable ppEffectEnabled ppEffectForceInNVG precision preloadCamera preloadObject preloadSound preloadTitleObj preloadTitleRsc preprocessFile preprocessFileLineNumbers primaryWeapon primaryWeaponItems primaryWeaponMagazine priority processDiaryLink productVersion profileName profileNamespace profileNameSteam progressLoadingScreen progressPosition progressSetPosition publicVariable publicVariableClient publicVariableServer pushBack pushBackUnique putWeaponPool queryItemsPool queryMagazinePool queryWeaponPool rad radioChannelAdd radioChannelCreate radioChannelRemove radioChannelSetCallSign radioChannelSetLabel radioVolume rain rainbow random rank rankId rating rectangular registeredTasks registerTask reload reloadEnabled remoteControl remoteExec remoteExecCall remoteExecutedOwner remove3DENConnection remove3DENEventHandler remove3DENLayer removeAction removeAll3DENEventHandlers removeAllActions removeAllAssignedItems removeAllContainers removeAllCuratorAddons removeAllCuratorCameraAreas removeAllCuratorEditingAreas removeAllEventHandlers removeAllHandgunItems removeAllItems removeAllItemsWithMagazines removeAllMissionEventHandlers removeAllMPEventHandlers removeAllMusicEventHandlers removeAllOwnedMines removeAllPrimaryWeaponItems removeAllWeapons removeBackpack removeBackpackGlobal removeCuratorAddons removeCuratorCameraArea removeCuratorEditableObjects removeCuratorEditingArea removeDrawIcon removeDrawLinks removeEventHandler removeFromRemainsCollector removeGoggles removeGroupIcon removeHandgunItem removeHeadgear removeItem removeItemFromBackpack removeItemFromUniform removeItemFromVest removeItems removeMagazine removeMagazineGlobal removeMagazines removeMagazinesTurret removeMagazineTurret removeMenuItem removeMissionEventHandler removeMPEventHandler removeMusicEventHandler removeOwnedMine removePrimaryWeaponItem removeSecondaryWeaponItem removeSimpleTask removeSwitchableUnit removeTeamMember removeUniform removeVest removeWeapon removeWeaponAttachmentCargo removeWeaponCargo removeWeaponGlobal removeWeaponTurret reportRemoteTarget requiredVersion resetCamShake resetSubgroupDirection resize resources respawnVehicle restartEditorCamera reveal revealMine reverse reversedMouseY roadAt roadsConnectedTo roleDescription ropeAttachedObjects ropeAttachedTo ropeAttachEnabled ropeAttachTo ropeCreate ropeCut ropeDestroy ropeDetach ropeEndPosition ropeLength ropes ropeUnwind ropeUnwound rotorsForcesRTD rotorsRpmRTD round runInitScript safeZoneH safeZoneW safeZoneWAbs safeZoneX safeZoneXAbs safeZoneY save3DENInventory saveGame saveIdentity saveJoysticks saveOverlay saveProfileNamespace saveStatus saveVar savingEnabled say say2D say3D scopeName score scoreSide screenshot screenToWorld scriptDone scriptName scudState secondaryWeapon secondaryWeaponItems secondaryWeaponMagazine select selectBestPlaces selectDiarySubject selectedEditorObjects selectEditorObject selectionNames selectionPosition selectLeader selectMax selectMin selectNoPlayer selectPlayer selectRandom selectRandomWeighted selectWeapon selectWeaponTurret sendAUMessage sendSimpleCommand sendTask sendTaskResult sendUDPMessage serverCommand serverCommandAvailable serverCommandExecutable serverName serverTime set set3DENAttribute set3DENAttributes set3DENGrid set3DENIconsVisible set3DENLayer set3DENLinesVisible set3DENLogicType set3DENMissionAttribute set3DENMissionAttributes set3DENModelsVisible set3DENObjectType set3DENSelected setAccTime setActualCollectiveRTD setAirplaneThrottle setAirportSide setAmmo setAmmoCargo setAmmoOnPylon setAnimSpeedCoef setAperture setApertureNew setArmoryPoints setAttributes setAutonomous setBehaviour setBleedingRemaining setBrakesRTD setCameraInterest setCamShakeDefParams setCamShakeParams setCamUseTI setCaptive setCenterOfMass setCollisionLight setCombatMode setCompassOscillation setConvoySeparation setCuratorCameraAreaCeiling setCuratorCoef setCuratorEditingAreaType setCuratorWaypointCost setCurrentChannel setCurrentTask setCurrentWaypoint setCustomAimCoef setCustomWeightRTD setDamage setDammage setDate setDebriefingText setDefaultCamera setDestination setDetailMapBlendPars setDir setDirection setDrawIcon setDriveOnPath setDropInterval setDynamicSimulationDistance setDynamicSimulationDistanceCoef setEditorMode setEditorObjectScope setEffectCondition setEngineRPMRTD setFace setFaceAnimation setFatigue setFeatureType setFlagAnimationPhase setFlagOwner setFlagSide setFlagTexture setFog setFormation setFormationTask setFormDir setFriend setFromEditor setFSMVariable setFuel setFuelCargo setGroupIcon setGroupIconParams setGroupIconsSelectable setGroupIconsVisible setGroupId setGroupIdGlobal setGroupOwner setGusts setHideBehind setHit setHitIndex setHitPointDamage setHorizonParallaxCoef setHUDMovementLevels setIdentity setImportance setInfoPanel setLeader setLightAmbient setLightAttenuation setLightBrightness setLightColor setLightDayLight setLightFlareMaxDistance setLightFlareSize setLightIntensity setLightnings setLightUseFlare setLocalWindParams setMagazineTurretAmmo setMarkerAlpha setMarkerAlphaLocal setMarkerBrush setMarkerBrushLocal setMarkerColor setMarkerColorLocal setMarkerDir setMarkerDirLocal setMarkerPos setMarkerPosLocal setMarkerShape setMarkerShapeLocal setMarkerSize setMarkerSizeLocal setMarkerText setMarkerTextLocal setMarkerType setMarkerTypeLocal setMass setMimic setMousePosition setMusicEffect setMusicEventHandler setName setNameSound setObjectArguments setObjectMaterial setObjectMaterialGlobal setObjectProxy setObjectTexture setObjectTextureGlobal setObjectViewDistance setOvercast setOwner setOxygenRemaining setParticleCircle setParticleClass setParticleFire setParticleParams setParticleRandom setPilotCameraDirection setPilotCameraRotation setPilotCameraTarget setPilotLight setPiPEffect setPitch setPlateNumber setPlayable setPlayerRespawnTime setPos setPosASL setPosASL2 setPosASLW setPosATL setPosition setPosWorld setPylonLoadOut setPylonsPriority setRadioMsg setRain setRainbow setRandomLip setRank setRectangular setRepairCargo setRotorBrakeRTD setShadowDistance setShotParents setSide setSimpleTaskAlwaysVisible setSimpleTaskCustomData setSimpleTaskDescription setSimpleTaskDestination setSimpleTaskTarget setSimpleTaskType setSimulWeatherLayers setSize setSkill setSlingLoad setSoundEffect setSpeaker setSpeech setSpeedMode setStamina setStaminaScheme setStatValue setSuppression setSystemOfUnits setTargetAge setTaskMarkerOffset setTaskResult setTaskState setTerrainGrid setText setTimeMultiplier setTitleEffect setTrafficDensity setTrafficDistance setTrafficGap setTrafficSpeed setTriggerActivation setTriggerArea setTriggerStatements setTriggerText setTriggerTimeout setTriggerType setType setUnconscious setUnitAbility setUnitLoadout setUnitPos setUnitPosWeak setUnitRank setUnitRecoilCoefficient setUnitTrait setUnloadInCombat setUserActionText setUserMFDText setUserMFDvalue setVariable setVectorDir setVectorDirAndUp setVectorUp setVehicleAmmo setVehicleAmmoDef setVehicleArmor setVehicleCargo setVehicleId setVehicleLock setVehiclePosition setVehicleRadar setVehicleReceiveRemoteTargets setVehicleReportOwnPosition setVehicleReportRemoteTargets setVehicleTIPars setVehicleVarName setVelocity setVelocityModelSpace setVelocityTransformation setViewDistance setVisibleIfTreeCollapsed setWantedRPMRTD setWaves setWaypointBehaviour setWaypointCombatMode setWaypointCompletionRadius setWaypointDescription setWaypointForceBehaviour setWaypointFormation setWaypointHousePosition setWaypointLoiterRadius setWaypointLoiterType setWaypointName setWaypointPosition setWaypointScript setWaypointSpeed setWaypointStatements setWaypointTimeout setWaypointType setWaypointVisible setWeaponReloadingTime setWind setWindDir setWindForce setWindStr setWingForceScaleRTD setWPPos show3DIcons showChat showCinemaBorder showCommandingMenu showCompass showCuratorCompass showGPS showHUD showLegend showMap shownArtilleryComputer shownChat shownCompass shownCuratorCompass showNewEditorObject shownGPS shownHUD shownMap shownPad shownRadio shownScoretable shownUAVFeed shownWarrant shownWatch showPad showRadio showScoretable showSubtitles showUAVFeed showWarrant showWatch showWaypoint showWaypoints side sideChat sideEnemy sideFriendly sideRadio simpleTasks simulationEnabled simulCloudDensity simulCloudOcclusion simulInClouds simulWeatherSync sin size sizeOf skill skillFinal skipTime sleep sliderPosition sliderRange sliderSetPosition sliderSetRange sliderSetSpeed sliderSpeed slingLoadAssistantShown soldierMagazines someAmmo sort soundVolume spawn speaker speed speedMode splitString sqrt squadParams stance startLoadingScreen step stop stopEngineRTD stopped str sunOrMoon supportInfo suppressFor surfaceIsWater surfaceNormal surfaceType swimInDepth switchableUnits switchAction switchCamera switchGesture switchLight switchMove synchronizedObjects synchronizedTriggers synchronizedWaypoints synchronizeObjectsAdd synchronizeObjectsRemove synchronizeTrigger synchronizeWaypoint systemChat systemOfUnits tan targetKnowledge targets targetsAggregate targetsQuery taskAlwaysVisible taskChildren taskCompleted taskCustomData taskDescription taskDestination taskHint taskMarkerOffset taskParent taskResult taskState taskType teamMember teamName teams teamSwitch teamSwitchEnabled teamType terminate terrainIntersect terrainIntersectASL terrainIntersectAtASL text textLog textLogFormat tg time timeMultiplier titleCut titleFadeOut titleObj titleRsc titleText toArray toFixed toLower toString toUpper triggerActivated triggerActivation triggerArea triggerAttachedVehicle triggerAttachObject triggerAttachVehicle triggerDynamicSimulation triggerStatements triggerText triggerTimeout triggerTimeoutCurrent triggerType turretLocal turretOwner turretUnit tvAdd tvClear tvCollapse tvCollapseAll tvCount tvCurSel tvData tvDelete tvExpand tvExpandAll tvPicture tvSetColor tvSetCurSel tvSetData tvSetPicture tvSetPictureColor tvSetPictureColorDisabled tvSetPictureColorSelected tvSetPictureRight tvSetPictureRightColor tvSetPictureRightColorDisabled tvSetPictureRightColorSelected tvSetText tvSetTooltip tvSetValue tvSort tvSortByValue tvText tvTooltip tvValue type typeName typeOf UAVControl uiNamespace uiSleep unassignCurator unassignItem unassignTeam unassignVehicle underwater uniform uniformContainer uniformItems uniformMagazines unitAddons unitAimPosition unitAimPositionVisual unitBackpack unitIsUAV unitPos unitReady unitRecoilCoefficient units unitsBelowHeight unlinkItem unlockAchievement unregisterTask updateDrawIcon updateMenuItem updateObjectTree useAISteeringComponent useAudioTimeForMoves userInputDisabled vectorAdd vectorCos vectorCrossProduct vectorDiff vectorDir vectorDirVisual vectorDistance vectorDistanceSqr vectorDotProduct vectorFromTo vectorMagnitude vectorMagnitudeSqr vectorModelToWorld vectorModelToWorldVisual vectorMultiply vectorNormalized vectorUp vectorUpVisual vectorWorldToModel vectorWorldToModelVisual vehicle vehicleCargoEnabled vehicleChat vehicleRadio vehicleReceiveRemoteTargets vehicleReportOwnPosition vehicleReportRemoteTargets vehicles vehicleVarName velocity velocityModelSpace verifySignature vest vestContainer vestItems vestMagazines viewDistance visibleCompass visibleGPS visibleMap visiblePosition visiblePositionASL visibleScoretable visibleWatch waves waypointAttachedObject waypointAttachedVehicle waypointAttachObject waypointAttachVehicle waypointBehaviour waypointCombatMode waypointCompletionRadius waypointDescription waypointForceBehaviour waypointFormation waypointHousePosition waypointLoiterRadius waypointLoiterType waypointName waypointPosition waypoints waypointScript waypointsEnabledUAV waypointShow waypointSpeed waypointStatements waypointTimeout waypointTimeoutCurrent waypointType waypointVisible weaponAccessories weaponAccessoriesCargo weaponCargo weaponDirection weaponInertia weaponLowered weapons weaponsItems weaponsItemsCargo weaponState weaponsTurret weightRTD WFSideText wind ",
        literal: "blufor civilian configNull controlNull displayNull east endl false grpNull independent lineBreak locationNull nil objNull opfor pi resistance scriptNull sideAmbientLife sideEmpty sideLogic sideUnknown taskNull teamMemberNull true west"
      },
      contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.NUMBER_MODE, d, G, Z, C],
      illegal: /#|^\$ /
    }
  }
  y_2.exports = X49
})
// @from(Start 4801528, End 4814199)
u_2 = Y((Ug3, $_2) => {
  function Y49(I) {
    var d = I.COMMENT("--", "$");
    return {
      name: "SQL (more)",
      aliases: ["mysql", "oracle"],
      disableAutodetect: !0,
      case_insensitive: !0,
      illegal: /[<>{}*]/,
      contains: [{
        beginKeywords: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment values with",
        end: /;/,
        endsWithParent: !0,
        keywords: {
          $pattern: /[\w\.]+/,
          keyword: "as abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias all allocate allow alter always analyze ancillary and anti any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound bucket buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain explode export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force foreign form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour hours http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lateral lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minutes minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notnull notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second seconds section securefile security seed segment select self semi sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tablesample tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unnest unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace window with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
          literal: "true false null unknown",
          built_in: "array bigint binary bit blob bool boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text time timestamp tinyint varchar varchar2 varying void"
        },
        contains: [{
          className: "string",
          begin: "'",
          end: "'",
          contains: [{
            begin: "''"
          }]
        }, {
          className: "string",
          begin: '"',
          end: '"',
          contains: [{
            begin: '""'
          }]
        }, {
          className: "string",
          begin: "`",
          end: "`"
        }, I.C_NUMBER_MODE, I.C_BLOCK_COMMENT_MODE, d, I.HASH_COMMENT_MODE]
      }, I.C_BLOCK_COMMENT_MODE, d, I.HASH_COMMENT_MODE]
    }
  }
  $_2.exports = Y49
})
// @from(Start 4814205, End 4822271)
m_2 = Y((vg3, O_2) => {
  function T_2(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function _49(...I) {
    return I.map((G) => T_2(G)).join("")
  }

  function nF1(...I) {
    return "(" + I.map((G) => T_2(G)).join("|") + ")"
  }

  function D49(I) {
    let d = I.COMMENT("--", "$"),
      G = {
        className: "string",
        variants: [{
          begin: /'/,
          end: /'/,
          contains: [{
            begin: /''/
          }]
        }]
      },
      Z = {
        begin: /"/,
        end: /"/,
        contains: [{
          begin: /""/
        }]
      },
      C = ["true", "false", "unknown"],
      W = ["double precision", "large object", "with timezone", "without timezone"],
      w = ["bigint", "binary", "blob", "boolean", "char", "character", "clob", "date", "dec", "decfloat", "decimal", "float", "int", "integer", "interval", "nchar", "nclob", "national", "numeric", "real", "row", "smallint", "time", "timestamp", "varchar", "varying", "varbinary"],
      B = ["add", "asc", "collation", "desc", "final", "first", "last", "view"],
      A = ["abs", "acos", "all", "allocate", "alter", "and", "any", "are", "array", "array_agg", "array_max_cardinality", "as", "asensitive", "asin", "asymmetric", "at", "atan", "atomic", "authorization", "avg", "begin", "begin_frame", "begin_partition", "between", "bigint", "binary", "blob", "boolean", "both", "by", "call", "called", "cardinality", "cascaded", "case", "cast", "ceil", "ceiling", "char", "char_length", "character", "character_length", "check", "classifier", "clob", "close", "coalesce", "collate", "collect", "column", "commit", "condition", "connect", "constraint", "contains", "convert", "copy", "corr", "corresponding", "cos", "cosh", "count", "covar_pop", "covar_samp", "create", "cross", "cube", "cume_dist", "current", "current_catalog", "current_date", "current_default_transform_group", "current_path", "current_role", "current_row", "current_schema", "current_time", "current_timestamp", "current_path", "current_role", "current_transform_group_for_type", "current_user", "cursor", "cycle", "date", "day", "deallocate", "dec", "decimal", "decfloat", "declare", "default", "define", "delete", "dense_rank", "deref", "describe", "deterministic", "disconnect", "distinct", "double", "drop", "dynamic", "each", "element", "else", "empty", "end", "end_frame", "end_partition", "end-exec", "equals", "escape", "every", "except", "exec", "execute", "exists", "exp", "external", "extract", "false", "fetch", "filter", "first_value", "float", "floor", "for", "foreign", "frame_row", "free", "from", "full", "function", "fusion", "get", "global", "grant", "group", "grouping", "groups", "having", "hold", "hour", "identity", "in", "indicator", "initial", "inner", "inout", "insensitive", "insert", "int", "integer", "intersect", "intersection", "interval", "into", "is", "join", "json_array", "json_arrayagg", "json_exists", "json_object", "json_objectagg", "json_query", "json_table", "json_table_primitive", "json_value", "lag", "language", "large", "last_value", "lateral", "lead", "leading", "left", "like", "like_regex", "listagg", "ln", "local", "localtime", "localtimestamp", "log", "log10", "lower", "match", "match_number", "match_recognize", "matches", "max", "member", "merge", "method", "min", "minute", "mod", "modifies", "module", "month", "multiset", "national", "natural", "nchar", "nclob", "new", "no", "none", "normalize", "not", "nth_value", "ntile", "null", "nullif", "numeric", "octet_length", "occurrences_regex", "of", "offset", "old", "omit", "on", "one", "only", "open", "or", "order", "out", "outer", "over", "overlaps", "overlay", "parameter", "partition", "pattern", "per", "percent", "percent_rank", "percentile_cont", "percentile_disc", "period", "portion", "position", "position_regex", "power", "precedes", "precision", "prepare", "primary", "procedure", "ptf", "range", "rank", "reads", "real", "recursive", "ref", "references", "referencing", "regr_avgx", "regr_avgy", "regr_count", "regr_intercept", "regr_r2", "regr_slope", "regr_sxx", "regr_sxy", "regr_syy", "release", "result", "return", "returns", "revoke", "right", "rollback", "rollup", "row", "row_number", "rows", "running", "savepoint", "scope", "scroll", "search", "second", "seek", "select", "sensitive", "session_user", "set", "show", "similar", "sin", "sinh", "skip", "smallint", "some", "specific", "specifictype", "sql", "sqlexception", "sqlstate", "sqlwarning", "sqrt", "start", "static", "stddev_pop", "stddev_samp", "submultiset", "subset", "substring", "substring_regex", "succeeds", "sum", "symmetric", "system", "system_time", "system_user", "table", "tablesample", "tan", "tanh", "then", "time", "timestamp", "timezone_hour", "timezone_minute", "to", "trailing", "translate", "translate_regex", "translation", "treat", "trigger", "trim", "trim_array", "true", "truncate", "uescape", "union", "unique", "unknown", "unnest", "update   ", "upper", "user", "using", "value", "values", "value_of", "var_pop", "var_samp", "varbinary", "varchar", "varying", "versioning", "when", "whenever", "where", "width_bucket", "window", "with", "within", "without", "year"],
      V = ["abs", "acos", "array_agg", "asin", "atan", "avg", "cast", "ceil", "ceiling", "coalesce", "corr", "cos", "cosh", "count", "covar_pop", "covar_samp", "cume_dist", "dense_rank", "deref", "element", "exp", "extract", "first_value", "floor", "json_array", "json_arrayagg", "json_exists", "json_object", "json_objectagg", "json_query", "json_table", "json_table_primitive", "json_value", "lag", "last_value", "lead", "listagg", "ln", "log", "log10", "lower", "max", "min", "mod", "nth_value", "ntile", "nullif", "percent_rank", "percentile_cont", "percentile_disc", "position", "position_regex", "power", "rank", "regr_avgx", "regr_avgy", "regr_count", "regr_intercept", "regr_r2", "regr_slope", "regr_sxx", "regr_sxy", "regr_syy", "row_number", "sin", "sinh", "sqrt", "stddev_pop", "stddev_samp", "substring", "substring_regex", "sum", "tan", "tanh", "translate", "translate_regex", "treat", "trim", "trim_array", "unnest", "upper", "value_of", "var_pop", "var_samp", "width_bucket"],
      X = ["current_catalog", "current_date", "current_default_transform_group", "current_path", "current_role", "current_schema", "current_transform_group_for_type", "current_user", "session_user", "system_time", "system_user", "current_time", "localtime", "current_timestamp", "localtimestamp"],
      _ = ["create table", "insert into", "primary key", "foreign key", "not null", "alter table", "add constraint", "grouping sets", "on overflow", "character set", "respect nulls", "ignore nulls", "nulls first", "nulls last", "depth first", "breadth first"],
      F = V,
      g = [...A, ...B].filter((S) => {
        return !V.includes(S)
      }),
      J = {
        className: "variable",
        begin: /@[a-z0-9]+/
      },
      K = {
        className: "operator",
        begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
        relevance: 0
      },
      Q = {
        begin: _49(/\b/, nF1(...F), /\s*\(/),
        keywords: {
          built_in: F
        }
      };

    function E(S, {
      exceptions: P,
      when: $
    } = {}) {
      let h = $;
      return P = P || [], S.map((O) => {
        if (O.match(/\|\d+$/) || P.includes(O)) return O;
        else if (h(O)) return `${O}|0`;
        else return O
      })
    }
    return {
      name: "SQL",
      case_insensitive: !0,
      illegal: /[{}]|<\//,
      keywords: {
        $pattern: /\b[\w\.]+/,
        keyword: E(g, {
          when: (S) => S.length < 3
        }),
        literal: C,
        type: w,
        built_in: X
      },
      contains: [{
        begin: nF1(..._),
        keywords: {
          $pattern: /[\w\.]+/,
          keyword: g.concat(_),
          literal: C,
          type: w
        }
      }, {
        className: "type",
        begin: nF1(...W)
      }, Q, J, G, Z, I.C_NUMBER_MODE, I.C_BLOCK_COMMENT_MODE, d, K]
    }
  }
  O_2.exports = D49
})
// @from(Start 4822277, End 4830679)
b_2 = Y((Eg3, l_2) => {
  function H49(I) {
    let d = ["functions", "model", "data", "parameters", "quantities", "transformed", "generated"],
      G = ["for", "in", "if", "else", "while", "break", "continue", "return"],
      Z = ["print", "reject", "increment_log_prob|10", "integrate_ode|10", "integrate_ode_rk45|10", "integrate_ode_bdf|10", "algebra_solver"],
      C = ["int", "real", "vector", "ordered", "positive_ordered", "simplex", "unit_vector", "row_vector", "matrix", "cholesky_factor_corr|10", "cholesky_factor_cov|10", "corr_matrix|10", "cov_matrix|10", "void"],
      W = ["Phi", "Phi_approx", "abs", "acos", "acosh", "algebra_solver", "append_array", "append_col", "append_row", "asin", "asinh", "atan", "atan2", "atanh", "bernoulli_cdf", "bernoulli_lccdf", "bernoulli_lcdf", "bernoulli_logit_lpmf", "bernoulli_logit_rng", "bernoulli_lpmf", "bernoulli_rng", "bessel_first_kind", "bessel_second_kind", "beta_binomial_cdf", "beta_binomial_lccdf", "beta_binomial_lcdf", "beta_binomial_lpmf", "beta_binomial_rng", "beta_cdf", "beta_lccdf", "beta_lcdf", "beta_lpdf", "beta_rng", "binary_log_loss", "binomial_cdf", "binomial_coefficient_log", "binomial_lccdf", "binomial_lcdf", "binomial_logit_lpmf", "binomial_lpmf", "binomial_rng", "block", "categorical_logit_lpmf", "categorical_logit_rng", "categorical_lpmf", "categorical_rng", "cauchy_cdf", "cauchy_lccdf", "cauchy_lcdf", "cauchy_lpdf", "cauchy_rng", "cbrt", "ceil", "chi_square_cdf", "chi_square_lccdf", "chi_square_lcdf", "chi_square_lpdf", "chi_square_rng", "cholesky_decompose", "choose", "col", "cols", "columns_dot_product", "columns_dot_self", "cos", "cosh", "cov_exp_quad", "crossprod", "csr_extract_u", "csr_extract_v", "csr_extract_w", "csr_matrix_times_vector", "csr_to_dense_matrix", "cumulative_sum", "determinant", "diag_matrix", "diag_post_multiply", "diag_pre_multiply", "diagonal", "digamma", "dims", "dirichlet_lpdf", "dirichlet_rng", "distance", "dot_product", "dot_self", "double_exponential_cdf", "double_exponential_lccdf", "double_exponential_lcdf", "double_exponential_lpdf", "double_exponential_rng", "e", "eigenvalues_sym", "eigenvectors_sym", "erf", "erfc", "exp", "exp2", "exp_mod_normal_cdf", "exp_mod_normal_lccdf", "exp_mod_normal_lcdf", "exp_mod_normal_lpdf", "exp_mod_normal_rng", "expm1", "exponential_cdf", "exponential_lccdf", "exponential_lcdf", "exponential_lpdf", "exponential_rng", "fabs", "falling_factorial", "fdim", "floor", "fma", "fmax", "fmin", "fmod", "frechet_cdf", "frechet_lccdf", "frechet_lcdf", "frechet_lpdf", "frechet_rng", "gamma_cdf", "gamma_lccdf", "gamma_lcdf", "gamma_lpdf", "gamma_p", "gamma_q", "gamma_rng", "gaussian_dlm_obs_lpdf", "get_lp", "gumbel_cdf", "gumbel_lccdf", "gumbel_lcdf", "gumbel_lpdf", "gumbel_rng", "head", "hypergeometric_lpmf", "hypergeometric_rng", "hypot", "inc_beta", "int_step", "integrate_ode", "integrate_ode_bdf", "integrate_ode_rk45", "inv", "inv_Phi", "inv_chi_square_cdf", "inv_chi_square_lccdf", "inv_chi_square_lcdf", "inv_chi_square_lpdf", "inv_chi_square_rng", "inv_cloglog", "inv_gamma_cdf", "inv_gamma_lccdf", "inv_gamma_lcdf", "inv_gamma_lpdf", "inv_gamma_rng", "inv_logit", "inv_sqrt", "inv_square", "inv_wishart_lpdf", "inv_wishart_rng", "inverse", "inverse_spd", "is_inf", "is_nan", "lbeta", "lchoose", "lgamma", "lkj_corr_cholesky_lpdf", "lkj_corr_cholesky_rng", "lkj_corr_lpdf", "lkj_corr_rng", "lmgamma", "lmultiply", "log", "log10", "log1m", "log1m_exp", "log1m_inv_logit", "log1p", "log1p_exp", "log2", "log_determinant", "log_diff_exp", "log_falling_factorial", "log_inv_logit", "log_mix", "log_rising_factorial", "log_softmax", "log_sum_exp", "logistic_cdf", "logistic_lccdf", "logistic_lcdf", "logistic_lpdf", "logistic_rng", "logit", "lognormal_cdf", "lognormal_lccdf", "lognormal_lcdf", "lognormal_lpdf", "lognormal_rng", "machine_precision", "matrix_exp", "max", "mdivide_left_spd", "mdivide_left_tri_low", "mdivide_right_spd", "mdivide_right_tri_low", "mean", "min", "modified_bessel_first_kind", "modified_bessel_second_kind", "multi_gp_cholesky_lpdf", "multi_gp_lpdf", "multi_normal_cholesky_lpdf", "multi_normal_cholesky_rng", "multi_normal_lpdf", "multi_normal_prec_lpdf", "multi_normal_rng", "multi_student_t_lpdf", "multi_student_t_rng", "multinomial_lpmf", "multinomial_rng", "multiply_log", "multiply_lower_tri_self_transpose", "neg_binomial_2_cdf", "neg_binomial_2_lccdf", "neg_binomial_2_lcdf", "neg_binomial_2_log_lpmf", "neg_binomial_2_log_rng", "neg_binomial_2_lpmf", "neg_binomial_2_rng", "neg_binomial_cdf", "neg_binomial_lccdf", "neg_binomial_lcdf", "neg_binomial_lpmf", "neg_binomial_rng", "negative_infinity", "normal_cdf", "normal_lccdf", "normal_lcdf", "normal_lpdf", "normal_rng", "not_a_number", "num_elements", "ordered_logistic_lpmf", "ordered_logistic_rng", "owens_t", "pareto_cdf", "pareto_lccdf", "pareto_lcdf", "pareto_lpdf", "pareto_rng", "pareto_type_2_cdf", "pareto_type_2_lccdf", "pareto_type_2_lcdf", "pareto_type_2_lpdf", "pareto_type_2_rng", "pi", "poisson_cdf", "poisson_lccdf", "poisson_lcdf", "poisson_log_lpmf", "poisson_log_rng", "poisson_lpmf", "poisson_rng", "positive_infinity", "pow", "print", "prod", "qr_Q", "qr_R", "quad_form", "quad_form_diag", "quad_form_sym", "rank", "rayleigh_cdf", "rayleigh_lccdf", "rayleigh_lcdf", "rayleigh_lpdf", "rayleigh_rng", "reject", "rep_array", "rep_matrix", "rep_row_vector", "rep_vector", "rising_factorial", "round", "row", "rows", "rows_dot_product", "rows_dot_self", "scaled_inv_chi_square_cdf", "scaled_inv_chi_square_lccdf", "scaled_inv_chi_square_lcdf", "scaled_inv_chi_square_lpdf", "scaled_inv_chi_square_rng", "sd", "segment", "sin", "singular_values", "sinh", "size", "skew_normal_cdf", "skew_normal_lccdf", "skew_normal_lcdf", "skew_normal_lpdf", "skew_normal_rng", "softmax", "sort_asc", "sort_desc", "sort_indices_asc", "sort_indices_desc", "sqrt", "sqrt2", "square", "squared_distance", "step", "student_t_cdf", "student_t_lccdf", "student_t_lcdf", "student_t_lpdf", "student_t_rng", "sub_col", "sub_row", "sum", "tail", "tan", "tanh", "target", "tcrossprod", "tgamma", "to_array_1d", "to_array_2d", "to_matrix", "to_row_vector", "to_vector", "trace", "trace_gen_quad_form", "trace_quad_form", "trigamma", "trunc", "uniform_cdf", "uniform_lccdf", "uniform_lcdf", "uniform_lpdf", "uniform_rng", "variance", "von_mises_lpdf", "von_mises_rng", "weibull_cdf", "weibull_lccdf", "weibull_lcdf", "weibull_lpdf", "weibull_rng", "wiener_lpdf", "wishart_lpdf", "wishart_rng"],
      w = ["bernoulli", "bernoulli_logit", "beta", "beta_binomial", "binomial", "binomial_logit", "categorical", "categorical_logit", "cauchy", "chi_square", "dirichlet", "double_exponential", "exp_mod_normal", "exponential", "frechet", "gamma", "gaussian_dlm_obs", "gumbel", "hypergeometric", "inv_chi_square", "inv_gamma", "inv_wishart", "lkj_corr", "lkj_corr_cholesky", "logistic", "lognormal", "multi_gp", "multi_gp_cholesky", "multi_normal", "multi_normal_cholesky", "multi_normal_prec", "multi_student_t", "multinomial", "neg_binomial", "neg_binomial_2", "neg_binomial_2_log", "normal", "ordered_logistic", "pareto", "pareto_type_2", "poisson", "poisson_log", "rayleigh", "scaled_inv_chi_square", "skew_normal", "student_t", "uniform", "von_mises", "weibull", "wiener", "wishart"];
    return {
      name: "Stan",
      aliases: ["stanfuncs"],
      keywords: {
        $pattern: I.IDENT_RE,
        title: d,
        keyword: G.concat(C).concat(Z),
        built_in: W
      },
      contains: [I.C_LINE_COMMENT_MODE, I.COMMENT(/#/, /$/, {
        relevance: 0,
        keywords: {
          "meta-keyword": "include"
        }
      }), I.COMMENT(/\/\*/, /\*\//, {
        relevance: 0,
        contains: [{
          className: "doctag",
          begin: /@(return|param)/
        }]
      }), {
        begin: /<\s*lower\s*=/,
        keywords: "lower"
      }, {
        begin: /[<,]\s*upper\s*=/,
        keywords: "upper"
      }, {
        className: "keyword",
        begin: /\btarget\s*\+=/,
        relevance: 10
      }, {
        begin: "~\\s*(" + I.IDENT_RE + ")\\s*\\(",
        keywords: w
      }, {
        className: "number",
        variants: [{
          begin: /\b\d+(?:\.\d*)?(?:[eE][+-]?\d+)?/
        }, {
          begin: /\.\d+(?:[eE][+-]?\d+)?\b/
        }],
        relevance: 0
      }, {
        className: "string",
        begin: '"',
        end: '"',
        relevance: 0
      }]
    }
  }
  l_2.exports = H49
})
// @from(Start 4830685, End 4847629)
j_2 = Y((Mg3, h_2) => {
  function F49(I) {
    return {
      name: "Stata",
      aliases: ["do", "ado"],
      case_insensitive: !0,
      keywords: "if else in foreach for forv forva forval forvalu forvalue forvalues by bys bysort xi quietly qui capture about ac ac_7 acprplot acprplot_7 adjust ado adopath adoupdate alpha ameans an ano anov anova anova_estat anova_terms anovadef aorder ap app appe appen append arch arch_dr arch_estat arch_p archlm areg areg_p args arima arima_dr arima_estat arima_p as asmprobit asmprobit_estat asmprobit_lf asmprobit_mfx__dlg asmprobit_p ass asse asser assert avplot avplot_7 avplots avplots_7 bcskew0 bgodfrey bias binreg bip0_lf biplot bipp_lf bipr_lf bipr_p biprobit bitest bitesti bitowt blogit bmemsize boot bootsamp bootstrap bootstrap_8 boxco_l boxco_p boxcox boxcox_6 boxcox_p bprobit br break brier bro brow brows browse brr brrstat bs bs_7 bsampl_w bsample bsample_7 bsqreg bstat bstat_7 bstat_8 bstrap bstrap_7 bubble bubbleplot ca ca_estat ca_p cabiplot camat canon canon_8 canon_8_p canon_estat canon_p cap caprojection capt captu captur capture cat cc cchart cchart_7 cci cd censobs_table centile cf char chdir checkdlgfiles checkestimationsample checkhlpfiles checksum chelp ci cii cl class classutil clear cli clis clist clo clog clog_lf clog_p clogi clogi_sw clogit clogit_lf clogit_p clogitp clogl_sw cloglog clonevar clslistarray cluster cluster_measures cluster_stop cluster_tree cluster_tree_8 clustermat cmdlog cnr cnre cnreg cnreg_p cnreg_sw cnsreg codebook collaps4 collapse colormult_nb colormult_nw compare compress conf confi confir confirm conren cons const constr constra constrai constrain constraint continue contract copy copyright copysource cor corc corr corr2data corr_anti corr_kmo corr_smc corre correl correla correlat correlate corrgram cou coun count cox cox_p cox_sw coxbase coxhaz coxvar cprplot cprplot_7 crc cret cretu cretur creturn cross cs cscript cscript_log csi ct ct_is ctset ctst_5 ctst_st cttost cumsp cumsp_7 cumul cusum cusum_7 cutil d|0 datasig datasign datasigna datasignat datasignatu datasignatur datasignature datetof db dbeta de dec deco decod decode deff des desc descr descri describ describe destring dfbeta dfgls dfuller di di_g dir dirstats dis discard disp disp_res disp_s displ displa display distinct do doe doed doedi doedit dotplot dotplot_7 dprobit drawnorm drop ds ds_util dstdize duplicates durbina dwstat dydx e|0 ed edi edit egen eivreg emdef en enc enco encod encode eq erase ereg ereg_lf ereg_p ereg_sw ereghet ereghet_glf ereghet_glf_sh ereghet_gp ereghet_ilf ereghet_ilf_sh ereghet_ip eret eretu eretur ereturn err erro error esize est est_cfexist est_cfname est_clickable est_expand est_hold est_table est_unhold est_unholdok estat estat_default estat_summ estat_vce_only esti estimates etodow etof etomdy ex exi exit expand expandcl fac fact facto factor factor_estat factor_p factor_pca_rotated factor_rotate factormat fcast fcast_compute fcast_graph fdades fdadesc fdadescr fdadescri fdadescrib fdadescribe fdasav fdasave fdause fh_st file open file read file close file filefilter fillin find_hlp_file findfile findit findit_7 fit fl fli flis flist for5_0 forest forestplot form forma format fpredict frac_154 frac_adj frac_chk frac_cox frac_ddp frac_dis frac_dv frac_in frac_mun frac_pp frac_pq frac_pv frac_wgt frac_xo fracgen fracplot fracplot_7 fracpoly fracpred fron_ex fron_hn fron_p fron_tn fron_tn2 frontier ftodate ftoe ftomdy ftowdate funnel funnelplot g|0 gamhet_glf gamhet_gp gamhet_ilf gamhet_ip gamma gamma_d2 gamma_p gamma_sw gammahet gdi_hexagon gdi_spokes ge gen gene gener genera generat generate genrank genstd genvmean gettoken gl gladder gladder_7 glim_l01 glim_l02 glim_l03 glim_l04 glim_l05 glim_l06 glim_l07 glim_l08 glim_l09 glim_l10 glim_l11 glim_l12 glim_lf glim_mu glim_nw1 glim_nw2 glim_nw3 glim_p glim_v1 glim_v2 glim_v3 glim_v4 glim_v5 glim_v6 glim_v7 glm glm_6 glm_p glm_sw glmpred glo glob globa global glogit glogit_8 glogit_p gmeans gnbre_lf gnbreg gnbreg_5 gnbreg_p gomp_lf gompe_sw gomper_p gompertz gompertzhet gomphet_glf gomphet_glf_sh gomphet_gp gomphet_ilf gomphet_ilf_sh gomphet_ip gphdot gphpen gphprint gprefs gprobi_p gprobit gprobit_8 gr gr7 gr_copy gr_current gr_db gr_describe gr_dir gr_draw gr_draw_replay gr_drop gr_edit gr_editviewopts gr_example gr_example2 gr_export gr_print gr_qscheme gr_query gr_read gr_rename gr_replay gr_save gr_set gr_setscheme gr_table gr_undo gr_use graph graph7 grebar greigen greigen_7 greigen_8 grmeanby grmeanby_7 gs_fileinfo gs_filetype gs_graphinfo gs_stat gsort gwood h|0 hadimvo hareg hausman haver he heck_d2 heckma_p heckman heckp_lf heckpr_p heckprob hel help hereg hetpr_lf hetpr_p hetprob hettest hexdump hilite hist hist_7 histogram hlogit hlu hmeans hotel hotelling hprobit hreg hsearch icd9 icd9_ff icd9p iis impute imtest inbase include inf infi infil infile infix inp inpu input ins insheet insp inspe inspec inspect integ inten intreg intreg_7 intreg_p intrg2_ll intrg_ll intrg_ll2 ipolate iqreg ir irf irf_create irfm iri is_svy is_svysum isid istdize ivprob_1_lf ivprob_lf ivprobit ivprobit_p ivreg ivreg_footnote ivtob_1_lf ivtob_lf ivtobit ivtobit_p jackknife jacknife jknife jknife_6 jknife_8 jkstat joinby kalarma1 kap kap_3 kapmeier kappa kapwgt kdensity kdensity_7 keep ksm ksmirnov ktau kwallis l|0 la lab labbe labbeplot labe label labelbook ladder levels levelsof leverage lfit lfit_p li lincom line linktest lis list lloghet_glf lloghet_glf_sh lloghet_gp lloghet_ilf lloghet_ilf_sh lloghet_ip llogi_sw llogis_p llogist llogistic llogistichet lnorm_lf lnorm_sw lnorma_p lnormal lnormalhet lnormhet_glf lnormhet_glf_sh lnormhet_gp lnormhet_ilf lnormhet_ilf_sh lnormhet_ip lnskew0 loadingplot loc loca local log logi logis_lf logistic logistic_p logit logit_estat logit_p loglogs logrank loneway lookfor lookup lowess lowess_7 lpredict lrecomp lroc lroc_7 lrtest ls lsens lsens_7 lsens_x lstat ltable ltable_7 ltriang lv lvr2plot lvr2plot_7 m|0 ma mac macr macro makecns man manova manova_estat manova_p manovatest mantel mark markin markout marksample mat mat_capp mat_order mat_put_rr mat_rapp mata mata_clear mata_describe mata_drop mata_matdescribe mata_matsave mata_matuse mata_memory mata_mlib mata_mosave mata_rename mata_which matalabel matcproc matlist matname matr matri matrix matrix_input__dlg matstrik mcc mcci md0_ md1_ md1debug_ md2_ md2debug_ mds mds_estat mds_p mdsconfig mdslong mdsmat mdsshepard mdytoe mdytof me_derd mean means median memory memsize menl meqparse mer merg merge meta mfp mfx mhelp mhodds minbound mixed_ll mixed_ll_reparm mkassert mkdir mkmat mkspline ml ml_5 ml_adjs ml_bhhhs ml_c_d ml_check ml_clear ml_cnt ml_debug ml_defd ml_e0 ml_e0_bfgs ml_e0_cycle ml_e0_dfp ml_e0i ml_e1 ml_e1_bfgs ml_e1_bhhh ml_e1_cycle ml_e1_dfp ml_e2 ml_e2_cycle ml_ebfg0 ml_ebfr0 ml_ebfr1 ml_ebh0q ml_ebhh0 ml_ebhr0 ml_ebr0i ml_ecr0i ml_edfp0 ml_edfr0 ml_edfr1 ml_edr0i ml_eds ml_eer0i ml_egr0i ml_elf ml_elf_bfgs ml_elf_bhhh ml_elf_cycle ml_elf_dfp ml_elfi ml_elfs ml_enr0i ml_enrr0 ml_erdu0 ml_erdu0_bfgs ml_erdu0_bhhh ml_erdu0_bhhhq ml_erdu0_cycle ml_erdu0_dfp ml_erdu0_nrbfgs ml_exde ml_footnote ml_geqnr ml_grad0 ml_graph ml_hbhhh ml_hd0 ml_hold ml_init ml_inv ml_log ml_max ml_mlout ml_mlout_8 ml_model ml_nb0 ml_opt ml_p ml_plot ml_query ml_rdgrd ml_repor ml_s_e ml_score ml_searc ml_technique ml_unhold mleval mlf_ mlmatbysum mlmatsum mlog mlogi mlogit mlogit_footnote mlogit_p mlopts mlsum mlvecsum mnl0_ mor more mov move mprobit mprobit_lf mprobit_p mrdu0_ mrdu1_ mvdecode mvencode mvreg mvreg_estat n|0 nbreg nbreg_al nbreg_lf nbreg_p nbreg_sw nestreg net newey newey_7 newey_p news nl nl_7 nl_9 nl_9_p nl_p nl_p_7 nlcom nlcom_p nlexp2 nlexp2_7 nlexp2a nlexp2a_7 nlexp3 nlexp3_7 nlgom3 nlgom3_7 nlgom4 nlgom4_7 nlinit nllog3 nllog3_7 nllog4 nllog4_7 nlog_rd nlogit nlogit_p nlogitgen nlogittree nlpred no nobreak noi nois noisi noisil noisily note notes notes_dlg nptrend numlabel numlist odbc old_ver olo olog ologi ologi_sw ologit ologit_p ologitp on one onew onewa oneway op_colnm op_comp op_diff op_inv op_str opr opro oprob oprob_sw oprobi oprobi_p oprobit oprobitp opts_exclusive order orthog orthpoly ou out outf outfi outfil outfile outs outsh outshe outshee outsheet ovtest pac pac_7 palette parse parse_dissim pause pca pca_8 pca_display pca_estat pca_p pca_rotate pcamat pchart pchart_7 pchi pchi_7 pcorr pctile pentium pergram pergram_7 permute permute_8 personal peto_st pkcollapse pkcross pkequiv pkexamine pkexamine_7 pkshape pksumm pksumm_7 pl plo plot plugin pnorm pnorm_7 poisgof poiss_lf poiss_sw poisso_p poisson poisson_estat post postclose postfile postutil pperron pr prais prais_e prais_e2 prais_p predict predictnl preserve print pro prob probi probit probit_estat probit_p proc_time procoverlay procrustes procrustes_estat procrustes_p profiler prog progr progra program prop proportion prtest prtesti pwcorr pwd q\\s qby qbys qchi qchi_7 qladder qladder_7 qnorm qnorm_7 qqplot qqplot_7 qreg qreg_c qreg_p qreg_sw qu quadchk quantile quantile_7 que quer query range ranksum ratio rchart rchart_7 rcof recast reclink recode reg reg3 reg3_p regdw regr regre regre_p2 regres regres_p regress regress_estat regriv_p remap ren rena renam rename renpfix repeat replace report reshape restore ret retu retur return rm rmdir robvar roccomp roccomp_7 roccomp_8 rocf_lf rocfit rocfit_8 rocgold rocplot rocplot_7 roctab roctab_7 rolling rologit rologit_p rot rota rotat rotate rotatemat rreg rreg_p ru run runtest rvfplot rvfplot_7 rvpplot rvpplot_7 sa safesum sample sampsi sav save savedresults saveold sc sca scal scala scalar scatter scm_mine sco scob_lf scob_p scobi_sw scobit scor score scoreplot scoreplot_help scree screeplot screeplot_help sdtest sdtesti se search separate seperate serrbar serrbar_7 serset set set_defaults sfrancia sh she shel shell shewhart shewhart_7 signestimationsample signrank signtest simul simul_7 simulate simulate_8 sktest sleep slogit slogit_d2 slogit_p smooth snapspan so sor sort spearman spikeplot spikeplot_7 spikeplt spline_x split sqreg sqreg_p sret sretu sretur sreturn ssc st st_ct st_hc st_hcd st_hcd_sh st_is st_issys st_note st_promo st_set st_show st_smpl st_subid stack statsby statsby_8 stbase stci stci_7 stcox stcox_estat stcox_fr stcox_fr_ll stcox_p stcox_sw stcoxkm stcoxkm_7 stcstat stcurv stcurve stcurve_7 stdes stem stepwise stereg stfill stgen stir stjoin stmc stmh stphplot stphplot_7 stphtest stphtest_7 stptime strate strate_7 streg streg_sw streset sts sts_7 stset stsplit stsum sttocc sttoct stvary stweib su suest suest_8 sum summ summa summar summari summariz summarize sunflower sureg survcurv survsum svar svar_p svmat svy svy_disp svy_dreg svy_est svy_est_7 svy_estat svy_get svy_gnbreg_p svy_head svy_header svy_heckman_p svy_heckprob_p svy_intreg_p svy_ivreg_p svy_logistic_p svy_logit_p svy_mlogit_p svy_nbreg_p svy_ologit_p svy_oprobit_p svy_poisson_p svy_probit_p svy_regress_p svy_sub svy_sub_7 svy_x svy_x_7 svy_x_p svydes svydes_8 svygen svygnbreg svyheckman svyheckprob svyintreg svyintreg_7 svyintrg svyivreg svylc svylog_p svylogit svymarkout svymarkout_8 svymean svymlog svymlogit svynbreg svyolog svyologit svyoprob svyoprobit svyopts svypois svypois_7 svypoisson svyprobit svyprobt svyprop svyprop_7 svyratio svyreg svyreg_p svyregress svyset svyset_7 svyset_8 svytab svytab_7 svytest svytotal sw sw_8 swcnreg swcox swereg swilk swlogis swlogit swologit swoprbt swpois swprobit swqreg swtobit swweib symmetry symmi symplot symplot_7 syntax sysdescribe sysdir sysuse szroeter ta tab tab1 tab2 tab_or tabd tabdi tabdis tabdisp tabi table tabodds tabodds_7 tabstat tabu tabul tabula tabulat tabulate te tempfile tempname tempvar tes test testnl testparm teststd tetrachoric time_it timer tis tob tobi tobit tobit_p tobit_sw token tokeni tokeniz tokenize tostring total translate translator transmap treat_ll treatr_p treatreg trim trimfill trnb_cons trnb_mean trpoiss_d2 trunc_ll truncr_p truncreg tsappend tset tsfill tsline tsline_ex tsreport tsrevar tsrline tsset tssmooth tsunab ttest ttesti tut_chk tut_wait tutorial tw tware_st two twoway twoway__fpfit_serset twoway__function_gen twoway__histogram_gen twoway__ipoint_serset twoway__ipoints_serset twoway__kdensity_gen twoway__lfit_serset twoway__normgen_gen twoway__pci_serset twoway__qfit_serset twoway__scatteri_serset twoway__sunflower_gen twoway_ksm_serset ty typ type typeof u|0 unab unabbrev unabcmd update us use uselabel var var_mkcompanion var_p varbasic varfcast vargranger varirf varirf_add varirf_cgraph varirf_create varirf_ctable varirf_describe varirf_dir varirf_drop varirf_erase varirf_graph varirf_ograph varirf_rename varirf_set varirf_table varlist varlmar varnorm varsoc varstable varstable_w varstable_w2 varwle vce vec vec_fevd vec_mkphi vec_p vec_p_w vecirf_create veclmar veclmar_w vecnorm vecnorm_w vecrank vecstable verinst vers versi versio version view viewsource vif vwls wdatetof webdescribe webseek webuse weib1_lf weib2_lf weib_lf weib_lf0 weibhet_glf weibhet_glf_sh weibhet_glfa weibhet_glfa_sh weibhet_gp weibhet_ilf weibhet_ilf_sh weibhet_ilfa weibhet_ilfa_sh weibhet_ip weibu_sw weibul_p weibull weibull_c weibull_s weibullhet wh whelp whi which whil while wilc_st wilcoxon win wind windo window winexec wntestb wntestb_7 wntestq xchart xchart_7 xcorr xcorr_7 xi xi_6 xmlsav xmlsave xmluse xpose xsh xshe xshel xshell xt_iis xt_tis xtab_p xtabond xtbin_p xtclog xtcloglog xtcloglog_8 xtcloglog_d2 xtcloglog_pa_p xtcloglog_re_p xtcnt_p xtcorr xtdata xtdes xtfront_p xtfrontier xtgee xtgee_elink xtgee_estat xtgee_makeivar xtgee_p xtgee_plink xtgls xtgls_p xthaus xthausman xtht_p xthtaylor xtile xtint_p xtintreg xtintreg_8 xtintreg_d2 xtintreg_p xtivp_1 xtivp_2 xtivreg xtline xtline_ex xtlogit xtlogit_8 xtlogit_d2 xtlogit_fe_p xtlogit_pa_p xtlogit_re_p xtmixed xtmixed_estat xtmixed_p xtnb_fe xtnb_lf xtnbreg xtnbreg_pa_p xtnbreg_refe_p xtpcse xtpcse_p xtpois xtpoisson xtpoisson_d2 xtpoisson_pa_p xtpoisson_refe_p xtpred xtprobit xtprobit_8 xtprobit_d2 xtprobit_re_p xtps_fe xtps_lf xtps_ren xtps_ren_8 xtrar_p xtrc xtrc_p xtrchh xtrefe_p xtreg xtreg_be xtreg_fe xtreg_ml xtreg_pa_p xtreg_re xtregar xtrere_p xtset xtsf_ll xtsf_llti xtsum xttab xttest0 xttobit xttobit_8 xttobit_p xttrans yx yxview__barlike_draw yxview_area_draw yxview_bar_draw yxview_dot_draw yxview_dropline_draw yxview_function_draw yxview_iarrow_draw yxview_ilabels_draw yxview_normal_draw yxview_pcarrow_draw yxview_pcbarrow_draw yxview_pccapsym_draw yxview_pcscatter_draw yxview_pcspike_draw yxview_rarea_draw yxview_rbar_draw yxview_rbarm_draw yxview_rcap_draw yxview_rcapsym_draw yxview_rconnected_draw yxview_rline_draw yxview_rscatter_draw yxview_rspike_draw yxview_spike_draw yxview_sunflower_draw zap_s zinb zinb_llf zinb_plf zip zip_llf zip_p zip_plf zt_ct_5 zt_hc_5 zt_hcd_5 zt_is_5 zt_iss_5 zt_sho_5 zt_smp_5 ztbase_5 ztcox_5 ztdes_5 ztereg_5 ztfill_5 ztgen_5 ztir_5 ztjoin_5 ztnb ztnb_p ztp ztp_p zts_5 ztset_5 ztspli_5 ztsum_5 zttoct_5 ztvary_5 ztweib_5",
      contains: [{
        className: "symbol",
        begin: /`[a-zA-Z0-9_]+'/
      }, {
        className: "variable",
        begin: /\$\{?[a-zA-Z0-9_]+\}?/
      }, {
        className: "string",
        variants: [{
          begin: `\`"[^\r
]*?"'`
        }, {
          begin: `"[^\r
"]*"`
        }]
      }, {
        className: "built_in",
        variants: [{
          begin: "\\b(abs|acos|asin|atan|atan2|atanh|ceil|cloglog|comb|cos|digamma|exp|floor|invcloglog|invlogit|ln|lnfact|lnfactorial|lngamma|log|log10|max|min|mod|reldif|round|sign|sin|sqrt|sum|tan|tanh|trigamma|trunc|betaden|Binomial|binorm|binormal|chi2|chi2tail|dgammapda|dgammapdada|dgammapdadx|dgammapdx|dgammapdxdx|F|Fden|Ftail|gammaden|gammap|ibeta|invbinomial|invchi2|invchi2tail|invF|invFtail|invgammap|invibeta|invnchi2|invnFtail|invnibeta|invnorm|invnormal|invttail|nbetaden|nchi2|nFden|nFtail|nibeta|norm|normal|normalden|normd|npnchi2|tden|ttail|uniform|abbrev|char|index|indexnot|length|lower|ltrim|match|plural|proper|real|regexm|regexr|regexs|reverse|rtrim|string|strlen|strlower|strltrim|strmatch|strofreal|strpos|strproper|strreverse|strrtrim|strtrim|strupper|subinstr|subinword|substr|trim|upper|word|wordcount|_caller|autocode|byteorder|chop|clip|cond|e|epsdouble|epsfloat|group|inlist|inrange|irecode|matrix|maxbyte|maxdouble|maxfloat|maxint|maxlong|mi|minbyte|mindouble|minfloat|minint|minlong|missing|r|recode|replay|return|s|scalar|d|date|day|dow|doy|halfyear|mdy|month|quarter|week|year|d|daily|dofd|dofh|dofm|dofq|dofw|dofy|h|halfyearly|hofd|m|mofd|monthly|q|qofd|quarterly|tin|twithin|w|weekly|wofd|y|yearly|yh|ym|yofd|yq|yw|cholesky|colnumb|colsof|corr|det|diag|diag0cnt|el|get|hadamard|I|inv|invsym|issym|issymmetric|J|matmissing|matuniform|mreldif|nullmat|rownumb|rowsof|sweep|syminv|trace|vec|vecdiag)(?=\\()"
        }]
      }, I.COMMENT("^[ \t]*\\*.*$", !1), I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE]
    }
  }
  h_2.exports = F49
})
// @from(Start 4847635, End 4848571)
x_2 = Y((Sg3, k_2) => {
  function g49(I) {
    return {
      name: "STEP Part 21",
      aliases: ["p21", "step", "stp"],
      case_insensitive: !0,
      keywords: {
        $pattern: "[A-Z_][A-Z0-9_.]*",
        keyword: "HEADER ENDSEC DATA"
      },
      contains: [{
        className: "meta",
        begin: "ISO-10303-21;",
        relevance: 10
      }, {
        className: "meta",
        begin: "END-ISO-10303-21;",
        relevance: 10
      }, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.COMMENT("/\\*\\*!", "\\*/"), I.C_NUMBER_MODE, I.inherit(I.APOS_STRING_MODE, {
        illegal: null
      }), I.inherit(I.QUOTE_STRING_MODE, {
        illegal: null
      }), {
        className: "string",
        begin: "'",
        end: "'"
      }, {
        className: "symbol",
        variants: [{
          begin: "#",
          end: "\\d+",
          illegal: "\\W"
        }]
      }]
    }
  }
  k_2.exports = g49
})
// @from(Start 4848577, End 4857063)
p_2 = Y((Lg3, c_2) => {
  var J49 = (I) => {
      return {
        IMPORTANT: {
          className: "meta",
          begin: "!important"
        },
        HEXCOLOR: {
          className: "number",
          begin: "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})"
        },
        ATTRIBUTE_SELECTOR_MODE: {
          className: "selector-attr",
          begin: /\[/,
          end: /\]/,
          illegal: "$",
          contains: [I.APOS_STRING_MODE, I.QUOTE_STRING_MODE]
        }
      }
    },
    K49 = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"],
    N49 = ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"],
    z49 = ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"],
    Q49 = ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"],
    f49 = ["align-content", "align-items", "align-self", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "auto", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "clip-path", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-variant", "font-variant-ligatures", "font-variation-settings", "font-weight", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inherit", "initial", "justify-content", "left", "letter-spacing", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "mask", "max-height", "max-width", "min-height", "min-width", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "right", "src", "tab-size", "table-layout", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index"].reverse();

  function q49(I) {
    let d = J49(I),
      G = "and or not only",
      Z = {
        className: "variable",
        begin: "\\$" + I.IDENT_RE
      },
      C = ["charset", "css", "debug", "extend", "font-face", "for", "import", "include", "keyframes", "media", "mixin", "page", "warn", "while"],
      W = "(?=[.\\s\\n[:,(])";
    return {
      name: "Stylus",
      aliases: ["styl"],
      case_insensitive: !1,
      keywords: "if else for in",
      illegal: "(" + ["\\?", "(\\bReturn\\b)", "(\\bEnd\\b)", "(\\bend\\b)", "(\\bdef\\b)", ";", "#\\s", "\\*\\s", "===\\s", "\\|", "%"].join("|") + ")",
      contains: [I.QUOTE_STRING_MODE, I.APOS_STRING_MODE, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, d.HEXCOLOR, {
        begin: "\\.[a-zA-Z][a-zA-Z0-9_-]*(?=[.\\s\\n[:,(])",
        className: "selector-class"
      }, {
        begin: "#[a-zA-Z][a-zA-Z0-9_-]*(?=[.\\s\\n[:,(])",
        className: "selector-id"
      }, {
        begin: "\\b(" + K49.join("|") + ")(?=[.\\s\\n[:,(])",
        className: "selector-tag"
      }, {
        className: "selector-pseudo",
        begin: "&?:(" + z49.join("|") + ")(?=[.\\s\\n[:,(])"
      }, {
        className: "selector-pseudo",
        begin: "&?::(" + Q49.join("|") + ")(?=[.\\s\\n[:,(])"
      }, d.ATTRIBUTE_SELECTOR_MODE, {
        className: "keyword",
        begin: /@media/,
        starts: {
          end: /[{;}]/,
          keywords: {
            $pattern: /[a-z-]+/,
            keyword: "and or not only",
            attribute: N49.join(" ")
          },
          contains: [I.CSS_NUMBER_MODE]
        }
      }, {
        className: "keyword",
        begin: "@((-(o|moz|ms|webkit)-)?(" + C.join("|") + "))\\b"
      }, Z, I.CSS_NUMBER_MODE, {
        className: "function",
        begin: "^[a-zA-Z][a-zA-Z0-9_-]*\\(.*\\)",
        illegal: "[\\n]",
        returnBegin: !0,
        contains: [{
          className: "title",
          begin: "\\b[a-zA-Z][a-zA-Z0-9_-]*"
        }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          contains: [d.HEXCOLOR, Z, I.APOS_STRING_MODE, I.CSS_NUMBER_MODE, I.QUOTE_STRING_MODE]
        }]
      }, {
        className: "attribute",
        begin: "\\b(" + f49.join("|") + ")\\b",
        starts: {
          end: /;|$/,
          contains: [d.HEXCOLOR, Z, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, I.CSS_NUMBER_MODE, I.C_BLOCK_COMMENT_MODE, d.IMPORTANT],
          illegal: /\./,
          relevance: 0
        }
      }]
    }
  }
  c_2.exports = q49
})
// @from(Start 4857069, End 4857842)
n_2 = Y((yg3, i_2) => {
  function R49(I) {
    return {
      name: "SubUnit",
      case_insensitive: !0,
      contains: [{
        className: "string",
        begin: `\\[
(multipart)?`,
        end: `\\]
`
      }, {
        className: "string",
        begin: "\\d{4}-\\d{2}-\\d{2}(\\s+)\\d{2}:\\d{2}:\\d{2}.\\d+Z"
      }, {
        className: "string",
        begin: "(\\+|-)\\d+"
      }, {
        className: "keyword",
        relevance: 10,
        variants: [{
          begin: "^(test|testing|success|successful|failure|error|skip|xfail|uxsuccess)(:?)\\s+(test)?"
        }, {
          begin: "^progress(:?)(\\s+)?(pop|push)?"
        }, {
          begin: "^tags:"
        }, {
          begin: "^time:"
        }]
      }]
    }
  }
  i_2.exports = R49
})
// @from(Start 4857848, End 4868898)
GD2 = Y((Pg3, dD2) => {
  function o_2(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function RR(I) {
    return U9("(?=", I, ")")
  }

  function U9(...I) {
    return I.map((G) => o_2(G)).join("")
  }

  function FI(...I) {
    return "(" + I.map((G) => o_2(G)).join("|") + ")"
  }
  var eF1 = (I) => U9(/\b/, I, /\w$/.test(I) ? /\b/ : /\B/),
    r_2 = ["Protocol", "Type"].map(eF1),
    rF1 = ["init", "self"].map(eF1),
    U49 = ["Any", "Self"],
    aF1 = ["associatedtype", "async", "await", /as\?/, /as!/, "as", "break", "case", "catch", "class", "continue", "convenience", "default", "defer", "deinit", "didSet", "do", "dynamic", "else", "enum", "extension", "fallthrough", /fileprivate\(set\)/, "fileprivate", "final", "for", "func", "get", "guard", "if", "import", "indirect", "infix", /init\?/, /init!/, "inout", /internal\(set\)/, "internal", "in", "is", "lazy", "let", "mutating", "nonmutating", /open\(set\)/, "open", "operator", "optional", "override", "postfix", "precedencegroup", "prefix", /private\(set\)/, "private", "protocol", /public\(set\)/, "public", "repeat", "required", "rethrows", "return", "set", "some", "static", "struct", "subscript", "super", "switch", "throws", "throw", /try\?/, /try!/, "try", "typealias", /unowned\(safe\)/, /unowned\(unsafe\)/, "unowned", "var", "weak", "where", "while", "willSet"],
    a_2 = ["false", "nil", "true"],
    v49 = ["assignment", "associativity", "higherThan", "left", "lowerThan", "none", "right"],
    E49 = ["#colorLiteral", "#column", "#dsohandle", "#else", "#elseif", "#endif", "#error", "#file", "#fileID", "#fileLiteral", "#filePath", "#function", "#if", "#imageLiteral", "#keyPath", "#line", "#selector", "#sourceLocation", "#warn_unqualified_access", "#warning"],
    s_2 = ["abs", "all", "any", "assert", "assertionFailure", "debugPrint", "dump", "fatalError", "getVaList", "isKnownUniquelyReferenced", "max", "min", "numericCast", "pointwiseMax", "pointwiseMin", "precondition", "preconditionFailure", "print", "readLine", "repeatElement", "sequence", "stride", "swap", "swift_unboxFromSwiftValueWithType", "transcode", "type", "unsafeBitCast", "unsafeDowncast", "withExtendedLifetime", "withUnsafeMutablePointer", "withUnsafePointer", "withVaList", "withoutActuallyEscaping", "zip"],
    e_2 = FI(/[/=\-+!*%<>&|^~?]/, /[\u00A1-\u00A7]/, /[\u00A9\u00AB]/, /[\u00AC\u00AE]/, /[\u00B0\u00B1]/, /[\u00B6\u00BB\u00BF\u00D7\u00F7]/, /[\u2016-\u2017]/, /[\u2020-\u2027]/, /[\u2030-\u203E]/, /[\u2041-\u2053]/, /[\u2055-\u205E]/, /[\u2190-\u23FF]/, /[\u2500-\u2775]/, /[\u2794-\u2BFF]/, /[\u2E00-\u2E7F]/, /[\u3001-\u3003]/, /[\u3008-\u3020]/, /[\u3030]/),
    t_2 = FI(e_2, /[\u0300-\u036F]/, /[\u1DC0-\u1DFF]/, /[\u20D0-\u20FF]/, /[\uFE00-\uFE0F]/, /[\uFE20-\uFE2F]/),
    sF1 = U9(e_2, t_2, "*"),
    ID2 = FI(/[a-zA-Z_]/, /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/, /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/, /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/, /[\u1E00-\u1FFF]/, /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/, /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/, /[\u2C00-\u2DFF\u2E80-\u2FFF]/, /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/, /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/, /[\uFE47-\uFEFE\uFF00-\uFFFD]/),
    Oa = FI(ID2, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),
    ZX = U9(ID2, Oa, "*"),
    oF1 = U9(/[A-Z]/, Oa, "*"),
    M49 = ["autoclosure", U9(/convention\(/, FI("swift", "block", "c"), /\)/), "discardableResult", "dynamicCallable", "dynamicMemberLookup", "escaping", "frozen", "GKInspectable", "IBAction", "IBDesignable", "IBInspectable", "IBOutlet", "IBSegueAction", "inlinable", "main", "nonobjc", "NSApplicationMain", "NSCopying", "NSManaged", U9(/objc\(/, ZX, /\)/), "objc", "objcMembers", "propertyWrapper", "requires_stored_property_inits", "testable", "UIApplicationMain", "unknown", "usableFromInline"],
    S49 = ["iOS", "iOSApplicationExtension", "macOS", "macOSApplicationExtension", "macCatalyst", "macCatalystApplicationExtension", "watchOS", "watchOSApplicationExtension", "tvOS", "tvOSApplicationExtension", "swift"];

  function L49(I) {
    let d = {
        match: /\s+/,
        relevance: 0
      },
      G = I.COMMENT("/\\*", "\\*/", {
        contains: ["self"]
      }),
      Z = [I.C_LINE_COMMENT_MODE, G],
      C = {
        className: "keyword",
        begin: U9(/\./, RR(FI(...r_2, ...rF1))),
        end: FI(...r_2, ...rF1),
        excludeBegin: !0
      },
      W = {
        match: U9(/\./, FI(...aF1)),
        relevance: 0
      },
      w = aF1.filter((a) => typeof a === "string").concat(["_|0"]),
      B = aF1.filter((a) => typeof a !== "string").concat(U49).map(eF1),
      A = {
        variants: [{
          className: "keyword",
          match: FI(...B, ...rF1)
        }]
      },
      V = {
        $pattern: FI(/\b\w+/, /#\w+/),
        keyword: w.concat(E49),
        literal: a_2
      },
      X = [C, W, A],
      _ = {
        match: U9(/\./, FI(...s_2)),
        relevance: 0
      },
      F = {
        className: "built_in",
        match: U9(/\b/, FI(...s_2), /(?=\()/)
      },
      g = [_, F],
      J = {
        match: /->/,
        relevance: 0
      },
      K = {
        className: "operator",
        relevance: 0,
        variants: [{
          match: sF1
        }, {
          match: `\\.(\\.|${t_2})+`
        }]
      },
      Q = [J, K],
      E = "([0-9]_*)+",
      S = "([0-9a-fA-F]_*)+",
      P = {
        className: "number",
        relevance: 0,
        variants: [{
          match: "\\b(([0-9]_*)+)(\\.(([0-9]_*)+))?([eE][+-]?(([0-9]_*)+))?\\b"
        }, {
          match: "\\b0x(([0-9a-fA-F]_*)+)(\\.(([0-9a-fA-F]_*)+))?([pP][+-]?(([0-9]_*)+))?\\b"
        }, {
          match: /\b0o([0-7]_*)+\b/
        }, {
          match: /\b0b([01]_*)+\b/
        }]
      },
      $ = (a = "") => ({
        className: "subst",
        variants: [{
          match: U9(/\\/, a, /[0\\tnr"']/)
        }, {
          match: U9(/\\/, a, /u\{[0-9a-fA-F]{1,8}\}/)
        }]
      }),
      h = (a = "") => ({
        className: "subst",
        match: U9(/\\/, a, /[\t ]*(?:[\r\n]|\r\n)/)
      }),
      O = (a = "") => ({
        className: "subst",
        label: "interpol",
        begin: U9(/\\/, a, /\(/),
        end: /\)/
      }),
      T = (a = "") => ({
        begin: U9(a, /"""/),
        end: U9(/"""/, a),
        contains: [$(a), h(a), O(a)]
      }),
      V1 = (a = "") => ({
        begin: U9(a, /"/),
        end: U9(/"/, a),
        contains: [$(a), O(a)]
      }),
      c = {
        className: "string",
        variants: [T(), T("#"), T("##"), T("###"), V1(), V1("#"), V1("##"), V1("###")]
      },
      c1 = {
        match: U9(/`/, ZX, /`/)
      },
      o1 = {
        className: "variable",
        match: /\$\d+/
      },
      a1 = {
        className: "variable",
        match: `\\$${Oa}+`
      },
      f1 = [c1, o1, a1],
      r = {
        match: /(@|#)available/,
        className: "keyword",
        starts: {
          contains: [{
            begin: /\(/,
            end: /\)/,
            keywords: S49,
            contains: [...Q, P, c]
          }]
        }
      },
      A1 = {
        className: "keyword",
        match: U9(/@/, FI(...M49))
      },
      m1 = {
        className: "meta",
        match: U9(/@/, ZX)
      },
      T1 = [r, A1, m1],
      e1 = {
        match: RR(/\b[A-Z]/),
        relevance: 0,
        contains: [{
          className: "type",
          match: U9(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, Oa, "+")
        }, {
          className: "type",
          match: oF1,
          relevance: 0
        }, {
          match: /[?!]+/,
          relevance: 0
        }, {
          match: /\.\.\./,
          relevance: 0
        }, {
          match: U9(/\s+&\s+/, RR(oF1)),
          relevance: 0
        }]
      },
      F0 = {
        begin: /</,
        end: />/,
        keywords: V,
        contains: [...Z, ...X, ...T1, J, e1]
      };
    e1.contains.push(F0);
    let P0 = {
        match: U9(ZX, /\s*:/),
        keywords: "_|0",
        relevance: 0
      },
      B0 = {
        begin: /\(/,
        end: /\)/,
        relevance: 0,
        keywords: V,
        contains: ["self", P0, ...Z, ...X, ...g, ...Q, P, c, ...f1, ...T1, e1]
      },
      a0 = {
        beginKeywords: "func",
        contains: [{
          className: "title",
          match: FI(c1.match, ZX, sF1),
          endsParent: !0,
          relevance: 0
        }, d]
      },
      e = {
        begin: /</,
        end: />/,
        contains: [...Z, e1]
      },
      G0 = {
        begin: FI(RR(U9(ZX, /\s*:/)), RR(U9(ZX, /\s+/, ZX, /\s*:/))),
        end: /:/,
        relevance: 0,
        contains: [{
          className: "keyword",
          match: /\b_\b/
        }, {
          className: "params",
          match: ZX
        }]
      },
      H1 = {
        begin: /\(/,
        end: /\)/,
        keywords: V,
        contains: [G0, ...Z, ...X, ...Q, P, c, ...T1, e1, B0],
        endsParent: !0,
        illegal: /["']/
      },
      j1 = {
        className: "function",
        match: RR(/\bfunc\b/),
        contains: [a0, e, H1, d],
        illegal: [/\[/, /%/]
      },
      i1 = {
        className: "function",
        match: /\b(subscript|init[?!]?)\s*(?=[<(])/,
        keywords: {
          keyword: "subscript init init? init!",
          $pattern: /\w+[?!]?/
        },
        contains: [e, H1, d],
        illegal: /\[|%/
      },
      E0 = {
        beginKeywords: "operator",
        end: I.MATCH_NOTHING_RE,
        contains: [{
          className: "title",
          match: sF1,
          endsParent: !0,
          relevance: 0
        }]
      },
      k = {
        beginKeywords: "precedencegroup",
        end: I.MATCH_NOTHING_RE,
        contains: [{
          className: "title",
          match: oF1,
          relevance: 0
        }, {
          begin: /{/,
          end: /}/,
          relevance: 0,
          endsParent: !0,
          keywords: [...v49, ...a_2],
          contains: [e1]
        }]
      };
    for (let a of c.variants) {
      let Z1 = a.contains.find((N1) => N1.label === "interpol");
      Z1.keywords = V;
      let Q1 = [...X, ...g, ...Q, P, c, ...f1];
      Z1.contains = [...Q1, {
        begin: /\(/,
        end: /\)/,
        contains: ["self", ...Q1]
      }]
    }
    return {
      name: "Swift",
      keywords: V,
      contains: [...Z, j1, i1, {
        className: "class",
        beginKeywords: "struct protocol class extension enum",
        end: "\\{",
        excludeEnd: !0,
        keywords: V,
        contains: [I.inherit(I.TITLE_MODE, {
          begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/
        }), ...X]
      }, E0, k, {
        beginKeywords: "import",
        end: /$/,
        contains: [...Z],
        relevance: 0
      }, ...X, ...g, ...Q, P, c, ...f1, ...T1, e1, B0]
    }
  }
  dD2.exports = L49
})
// @from(Start 4868904, End 4869581)
CD2 = Y(($g3, ZD2) => {
  function y49(I) {
    return {
      name: "Tagger Script",
      contains: [{
        className: "comment",
        begin: /\$noop\(/,
        end: /\)/,
        contains: [{
          begin: /\(/,
          end: /\)/,
          contains: ["self", {
            begin: /\\./
          }]
        }],
        relevance: 10
      }, {
        className: "keyword",
        begin: /\$(?!noop)[a-zA-Z][_a-zA-Z0-9]*/,
        end: /\(/,
        excludeEnd: !0
      }, {
        className: "variable",
        begin: /%[_a-zA-Z0-9:]*/,
        end: "%"
      }, {
        className: "symbol",
        begin: /\\./
      }]
    }
  }
  ZD2.exports = y49
})
// @from(Start 4869587, End 4872625)
wD2 = Y((ug3, WD2) => {
  function P49(I) {
    var d = "true false yes no null",
      G = "[\\w#;/?:@&=+$,.~*'()[\\]]+",
      Z = {
        className: "attr",
        variants: [{
          begin: "\\w[\\w :\\/.-]*:(?=[ \t]|$)"
        }, {
          begin: '"\\w[\\w :\\/.-]*":(?=[ \t]|$)'
        }, {
          begin: "'\\w[\\w :\\/.-]*':(?=[ \t]|$)"
        }]
      },
      C = {
        className: "template-variable",
        variants: [{
          begin: /\{\{/,
          end: /\}\}/
        }, {
          begin: /%\{/,
          end: /\}/
        }]
      },
      W = {
        className: "string",
        relevance: 0,
        variants: [{
          begin: /'/,
          end: /'/
        }, {
          begin: /"/,
          end: /"/
        }, {
          begin: /\S+/
        }],
        contains: [I.BACKSLASH_ESCAPE, C]
      },
      w = I.inherit(W, {
        variants: [{
          begin: /'/,
          end: /'/
        }, {
          begin: /"/,
          end: /"/
        }, {
          begin: /[^\s,{}[\]]+/
        }]
      }),
      B = "[0-9]{4}(-[0-9][0-9]){0,2}",
      A = "([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?",
      V = "(\\.[0-9]*)?",
      X = "([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?",
      _ = {
        className: "number",
        begin: "\\b" + B + A + V + X + "\\b"
      },
      F = {
        end: ",",
        endsWithParent: !0,
        excludeEnd: !0,
        keywords: d,
        relevance: 0
      },
      g = {
        begin: /\{/,
        end: /\}/,
        contains: [F],
        illegal: "\\n",
        relevance: 0
      },
      J = {
        begin: "\\[",
        end: "\\]",
        contains: [F],
        illegal: "\\n",
        relevance: 0
      },
      K = [Z, {
        className: "meta",
        begin: "^---\\s*$",
        relevance: 10
      }, {
        className: "string",
        begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
      }, {
        begin: "<%[%=-]?",
        end: "[%-]?%>",
        subLanguage: "ruby",
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0
      }, {
        className: "type",
        begin: "!\\w+!" + G
      }, {
        className: "type",
        begin: "!<" + G + ">"
      }, {
        className: "type",
        begin: "!" + G
      }, {
        className: "type",
        begin: "!!" + G
      }, {
        className: "meta",
        begin: "&" + I.UNDERSCORE_IDENT_RE + "$"
      }, {
        className: "meta",
        begin: "\\*" + I.UNDERSCORE_IDENT_RE + "$"
      }, {
        className: "bullet",
        begin: "-(?=[ ]|$)",
        relevance: 0
      }, I.HASH_COMMENT_MODE, {
        beginKeywords: d,
        keywords: {
          literal: d
        }
      }, _, {
        className: "number",
        begin: I.C_NUMBER_RE + "\\b",
        relevance: 0
      }, g, J, W],
      Q = [...K];
    return Q.pop(), Q.push(w), F.contains = Q, {
      name: "YAML",
      case_insensitive: !0,
      aliases: ["yml"],
      contains: K
    }
  }
  WD2.exports = P49
})
// @from(Start 4872631, End 4873294)
AD2 = Y((Tg3, BD2) => {
  function $49(I) {
    return {
      name: "Test Anything Protocol",
      case_insensitive: !0,
      contains: [I.HASH_COMMENT_MODE, {
        className: "meta",
        variants: [{
          begin: "^TAP version (\\d+)$"
        }, {
          begin: "^1\\.\\.(\\d+)$"
        }]
      }, {
        begin: /---$/,
        end: "\\.\\.\\.$",
        subLanguage: "yaml",
        relevance: 0
      }, {
        className: "number",
        begin: " (\\d+) "
      }, {
        className: "symbol",
        variants: [{
          begin: "^ok"
        }, {
          begin: "^not ok"
        }]
      }]
    }
  }
  BD2.exports = $49
})
// @from(Start 4873300, End 4875572)
YD2 = Y((Og3, XD2) => {
  function u49(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function T49(I) {
    return VD2("(", I, ")?")
  }

  function VD2(...I) {
    return I.map((G) => u49(G)).join("")
  }

  function O49(I) {
    let d = /[a-zA-Z_][a-zA-Z0-9_]*/,
      G = {
        className: "number",
        variants: [I.BINARY_NUMBER_MODE, I.C_NUMBER_MODE]
      };
    return {
      name: "Tcl",
      aliases: ["tk"],
      keywords: "after append apply array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd chan clock close concat continue dde dict encoding eof error eval exec exit expr fblocked fconfigure fcopy file fileevent filename flush for foreach format gets glob global history http if incr info interp join lappend|10 lassign|10 lindex|10 linsert|10 list llength|10 load lrange|10 lrepeat|10 lreplace|10 lreverse|10 lsearch|10 lset|10 lsort|10 mathfunc mathop memory msgcat namespace open package parray pid pkg::create pkg_mkIndex platform platform::shell proc puts pwd read refchan regexp registry regsub|10 rename return safe scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_startOfPreviousWord tcl_wordBreakAfter tcl_wordBreakBefore tcltest tclvars tell time tm trace unknown unload unset update uplevel upvar variable vwait while",
      contains: [I.COMMENT(";[ \\t]*#", "$"), I.COMMENT("^[ \\t]*#", "$"), {
        beginKeywords: "proc",
        end: "[\\{]",
        excludeEnd: !0,
        contains: [{
          className: "title",
          begin: "[ \\t\\n\\r]+(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*",
          end: "[ \\t\\n\\r]",
          endsWithParent: !0,
          excludeEnd: !0
        }]
      }, {
        className: "variable",
        variants: [{
          begin: VD2(/\$/, T49(/::/), d, "(::", d, ")*")
        }, {
          begin: "\\$\\{(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*",
          end: "\\}",
          contains: [G]
        }]
      }, {
        className: "string",
        contains: [I.BACKSLASH_ESCAPE],
        variants: [I.inherit(I.QUOTE_STRING_MODE, {
          illegal: null
        })]
      }, G]
    }
  }
  XD2.exports = O49
})
// @from(Start 4875578, End 4876473)
DD2 = Y((mg3, _D2) => {
  function m49(I) {
    return {
      name: "Thrift",
      keywords: {
        keyword: "namespace const typedef struct enum service exception void oneway set list map required optional",
        built_in: "bool byte i16 i32 i64 double string binary",
        literal: "true false"
      },
      contains: [I.QUOTE_STRING_MODE, I.NUMBER_MODE, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, {
        className: "class",
        beginKeywords: "struct enum service exception",
        end: /\{/,
        illegal: /\n/,
        contains: [I.inherit(I.TITLE_MODE, {
          starts: {
            endsWithParent: !0,
            excludeEnd: !0
          }
        })]
      }, {
        begin: "\\b(set|list|map)\\s*<",
        end: ">",
        keywords: "bool byte i16 i32 i64 double string binary",
        contains: ["self"]
      }]
    }
  }
  _D2.exports = m49
})
// @from(Start 4876479, End 4878409)
FD2 = Y((lg3, HD2) => {
  function l49(I) {
    let d = {
        className: "number",
        begin: "[1-9][0-9]*",
        relevance: 0
      },
      G = {
        className: "symbol",
        begin: ":[^\\]]+"
      },
      Z = {
        className: "built_in",
        begin: "(AR|P|PAYLOAD|PR|R|SR|RSR|LBL|VR|UALM|MESSAGE|UTOOL|UFRAME|TIMER|TIMER_OVERFLOW|JOINT_MAX_SPEED|RESUME_PROG|DIAG_REC)\\[",
        end: "\\]",
        contains: ["self", d, G]
      },
      C = {
        className: "built_in",
        begin: "(AI|AO|DI|DO|F|RI|RO|UI|UO|GI|GO|SI|SO)\\[",
        end: "\\]",
        contains: ["self", d, I.QUOTE_STRING_MODE, G]
      };
    return {
      name: "TP",
      keywords: {
        keyword: "ABORT ACC ADJUST AND AP_LD BREAK CALL CNT COL CONDITION CONFIG DA DB DIV DETECT ELSE END ENDFOR ERR_NUM ERROR_PROG FINE FOR GP GUARD INC IF JMP LINEAR_MAX_SPEED LOCK MOD MONITOR OFFSET Offset OR OVERRIDE PAUSE PREG PTH RT_LD RUN SELECT SKIP Skip TA TB TO TOOL_OFFSET Tool_Offset UF UT UFRAME_NUM UTOOL_NUM UNLOCK WAIT X Y Z W P R STRLEN SUBSTR FINDSTR VOFFSET PROG ATTR MN POS",
        literal: "ON OFF max_speed LPOS JPOS ENABLE DISABLE START STOP RESET"
      },
      contains: [Z, C, {
        className: "keyword",
        begin: "/(PROG|ATTR|MN|POS|END)\\b"
      }, {
        className: "keyword",
        begin: "(CALL|RUN|POINT_LOGIC|LBL)\\b"
      }, {
        className: "keyword",
        begin: "\\b(ACC|CNT|Skip|Offset|PSPD|RT_LD|AP_LD|Tool_Offset)"
      }, {
        className: "number",
        begin: "\\d+(sec|msec|mm/sec|cm/min|inch/min|deg/sec|mm|in|cm)?\\b",
        relevance: 0
      }, I.COMMENT("//", "[;$]"), I.COMMENT("!", "[;$]"), I.COMMENT("--eg:", "$"), I.QUOTE_STRING_MODE, {
        className: "string",
        begin: "'",
        end: "'"
      }, I.C_NUMBER_MODE, {
        className: "variable",
        begin: "\\$[A-Za-z0-9_]+"
      }]
    }
  }
  HD2.exports = l49
})
// @from(Start 4878415, End 4880064)
JD2 = Y((bg3, gD2) => {
  function b49(I) {
    var d = {
        className: "params",
        begin: "\\(",
        end: "\\)"
      },
      G = "attribute block constant cycle date dump include max min parent random range source template_from_string",
      Z = {
        beginKeywords: G,
        keywords: {
          name: G
        },
        relevance: 0,
        contains: [d]
      },
      C = {
        begin: /\|[A-Za-z_]+:?/,
        keywords: "abs batch capitalize column convert_encoding date date_modify default escape filter first format inky_to_html inline_css join json_encode keys last length lower map markdown merge nl2br number_format raw reduce replace reverse round slice sort spaceless split striptags title trim upper url_encode",
        contains: [Z]
      },
      W = "apply autoescape block deprecated do embed extends filter flush for from if import include macro sandbox set use verbatim with";
    return W = W + " " + W.split(" ").map(function(w) {
      return "end" + w
    }).join(" "), {
      name: "Twig",
      aliases: ["craftcms"],
      case_insensitive: !0,
      subLanguage: "xml",
      contains: [I.COMMENT(/\{#/, /#\}/), {
        className: "template-tag",
        begin: /\{%/,
        end: /%\}/,
        contains: [{
          className: "name",
          begin: /\w+/,
          keywords: W,
          starts: {
            endsWithParent: !0,
            contains: [C, Z],
            relevance: 0
          }
        }]
      }, {
        className: "template-variable",
        begin: /\{\{/,
        end: /\}\}/,
        contains: ["self", C, Z]
      }]
    }
  }
  gD2.exports = b49
})
// @from(Start 4880070, End 4890377)
qD2 = Y((hg3, fD2) => {
  var ND2 = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"],
    zD2 = ["true", "false", "null", "undefined", "NaN", "Infinity"],
    h49 = ["Intl", "DataView", "Number", "Math", "Date", "String", "RegExp", "Object", "Function", "Boolean", "Error", "Symbol", "Set", "Map", "WeakSet", "WeakMap", "Proxy", "Reflect", "JSON", "Promise", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Float32Array", "Array", "Uint8Array", "Uint8ClampedArray", "ArrayBuffer", "BigInt64Array", "BigUint64Array", "BigInt"],
    j49 = ["EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
    k49 = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
    x49 = ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"],
    QD2 = [].concat(k49, x49, h49, j49);

  function c49(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function KD2(I) {
    return tF1("(?=", I, ")")
  }

  function tF1(...I) {
    return I.map((G) => c49(G)).join("")
  }

  function p49(I) {
    let d = ($, {
        after: h
      }) => {
        let O = "</" + $[0].slice(1);
        return $.input.indexOf(O, h) !== -1
      },
      G = "[A-Za-z$_][0-9A-Za-z$_]*",
      Z = {
        begin: "<>",
        end: "</>"
      },
      C = {
        begin: /<[A-Za-z0-9\\._:-]+/,
        end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
        isTrulyOpeningTag: ($, h) => {
          let O = $[0].length + $.index,
            T = $.input[O];
          if (T === "<") {
            h.ignoreMatch();
            return
          }
          if (T === ">") {
            if (!d($, {
                after: O
              })) h.ignoreMatch()
          }
        }
      },
      W = {
        $pattern: "[A-Za-z$_][0-9A-Za-z$_]*",
        keyword: ND2,
        literal: zD2,
        built_in: QD2
      },
      w = "[0-9](_?[0-9])*",
      B = "\\.([0-9](_?[0-9])*)",
      A = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
      V = {
        className: "number",
        variants: [{
          begin: "(\\b(0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*)((\\.([0-9](_?[0-9])*))|\\.)?|(\\.([0-9](_?[0-9])*)))[eE][+-]?([0-9](_?[0-9])*)\\b"
        }, {
          begin: "\\b(0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*)\\b((\\.([0-9](_?[0-9])*))\\b|\\.)?|(\\.([0-9](_?[0-9])*))\\b"
        }, {
          begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
        }, {
          begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
        }, {
          begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
        }, {
          begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"
        }, {
          begin: "\\b0[0-7]+n?\\b"
        }],
        relevance: 0
      },
      X = {
        className: "subst",
        begin: "\\$\\{",
        end: "\\}",
        keywords: W,
        contains: []
      },
      _ = {
        begin: "html`",
        end: "",
        starts: {
          end: "`",
          returnEnd: !1,
          contains: [I.BACKSLASH_ESCAPE, X],
          subLanguage: "xml"
        }
      },
      F = {
        begin: "css`",
        end: "",
        starts: {
          end: "`",
          returnEnd: !1,
          contains: [I.BACKSLASH_ESCAPE, X],
          subLanguage: "css"
        }
      },
      g = {
        className: "string",
        begin: "`",
        end: "`",
        contains: [I.BACKSLASH_ESCAPE, X]
      },
      K = {
        className: "comment",
        variants: [I.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
          relevance: 0,
          contains: [{
            className: "doctag",
            begin: "@[A-Za-z]+",
            contains: [{
              className: "type",
              begin: "\\{",
              end: "\\}",
              relevance: 0
            }, {
              className: "variable",
              begin: "[A-Za-z$_][0-9A-Za-z$_]*(?=\\s*(-)|$)",
              endsParent: !0,
              relevance: 0
            }, {
              begin: /(?=[^\n])\s/,
              relevance: 0
            }]
          }]
        }), I.C_BLOCK_COMMENT_MODE, I.C_LINE_COMMENT_MODE]
      },
      Q = [I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, _, F, g, V, I.REGEXP_MODE];
    X.contains = Q.concat({
      begin: /\{/,
      end: /\}/,
      keywords: W,
      contains: ["self"].concat(Q)
    });
    let E = [].concat(K, X.contains),
      S = E.concat([{
        begin: /\(/,
        end: /\)/,
        keywords: W,
        contains: ["self"].concat(E)
      }]),
      P = {
        className: "params",
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        keywords: W,
        contains: S
      };
    return {
      name: "Javascript",
      aliases: ["js", "jsx", "mjs", "cjs"],
      keywords: W,
      exports: {
        PARAMS_CONTAINS: S
      },
      illegal: /#(?![$_A-z])/,
      contains: [I.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }), {
        label: "use_strict",
        className: "meta",
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/
      }, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, _, F, g, K, V, {
        begin: tF1(/[{,\n]\s*/, KD2(tF1(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/, "[A-Za-z$_][0-9A-Za-z$_]*\\s*:"))),
        relevance: 0,
        contains: [{
          className: "attr",
          begin: "[A-Za-z$_][0-9A-Za-z$_]*" + KD2("\\s*:"),
          relevance: 0
        }]
      }, {
        begin: "(" + I.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        contains: [K, I.REGEXP_MODE, {
          className: "function",
          begin: "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + I.UNDERSCORE_IDENT_RE + ")\\s*=>",
          returnBegin: !0,
          end: "\\s*=>",
          contains: [{
            className: "params",
            variants: [{
              begin: I.UNDERSCORE_IDENT_RE,
              relevance: 0
            }, {
              className: null,
              begin: /\(\s*\)/,
              skip: !0
            }, {
              begin: /\(/,
              end: /\)/,
              excludeBegin: !0,
              excludeEnd: !0,
              keywords: W,
              contains: S
            }]
          }]
        }, {
          begin: /,/,
          relevance: 0
        }, {
          className: "",
          begin: /\s/,
          end: /\s*/,
          skip: !0
        }, {
          variants: [{
            begin: Z.begin,
            end: Z.end
          }, {
            begin: C.begin,
            "on:begin": C.isTrulyOpeningTag,
            end: C.end
          }],
          subLanguage: "xml",
          contains: [{
            begin: C.begin,
            end: C.end,
            skip: !0,
            contains: ["self"]
          }]
        }],
        relevance: 0
      }, {
        className: "function",
        beginKeywords: "function",
        end: /[{;]/,
        excludeEnd: !0,
        keywords: W,
        contains: ["self", I.inherit(I.TITLE_MODE, {
          begin: "[A-Za-z$_][0-9A-Za-z$_]*"
        }), P],
        illegal: /%/
      }, {
        beginKeywords: "while if switch catch for"
      }, {
        className: "function",
        begin: I.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        returnBegin: !0,
        contains: [P, I.inherit(I.TITLE_MODE, {
          begin: "[A-Za-z$_][0-9A-Za-z$_]*"
        })]
      }, {
        variants: [{
          begin: "\\.[A-Za-z$_][0-9A-Za-z$_]*"
        }, {
          begin: "\\$[A-Za-z$_][0-9A-Za-z$_]*"
        }],
        relevance: 0
      }, {
        className: "class",
        beginKeywords: "class",
        end: /[{;=]/,
        excludeEnd: !0,
        illegal: /[:"[\]]/,
        contains: [{
          beginKeywords: "extends"
        }, I.UNDERSCORE_TITLE_MODE]
      }, {
        begin: /\b(?=constructor)/,
        end: /[{;]/,
        excludeEnd: !0,
        contains: [I.inherit(I.TITLE_MODE, {
          begin: "[A-Za-z$_][0-9A-Za-z$_]*"
        }), "self", P]
      }, {
        begin: "(get|set)\\s+(?=[A-Za-z$_][0-9A-Za-z$_]*\\()",
        end: /\{/,
        keywords: "get set",
        contains: [I.inherit(I.TITLE_MODE, {
          begin: "[A-Za-z$_][0-9A-Za-z$_]*"
        }), {
          begin: /\(\)/
        }, P]
      }, {
        begin: /\$[(.]/
      }]
    }
  }

  function i49(I) {
    let G = {
        beginKeywords: "namespace",
        end: /\{/,
        excludeEnd: !0
      },
      Z = {
        beginKeywords: "interface",
        end: /\{/,
        excludeEnd: !0,
        keywords: "interface extends"
      },
      C = {
        className: "meta",
        relevance: 10,
        begin: /^\s*['"]use strict['"]/
      },
      W = ["any", "void", "number", "boolean", "string", "object", "never", "enum"],
      w = ["type", "namespace", "typedef", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly"],
      B = {
        $pattern: "[A-Za-z$_][0-9A-Za-z$_]*",
        keyword: ND2.concat(w),
        literal: zD2,
        built_in: QD2.concat(W)
      },
      A = {
        className: "meta",
        begin: "@[A-Za-z$_][0-9A-Za-z$_]*"
      },
      V = (F, g, J) => {
        let K = F.contains.findIndex((Q) => Q.label === g);
        if (K === -1) throw new Error("can not find mode to replace");
        F.contains.splice(K, 1, J)
      },
      X = p49(I);
    Object.assign(X.keywords, B), X.exports.PARAMS_CONTAINS.push(A), X.contains = X.contains.concat([A, G, Z]), V(X, "shebang", I.SHEBANG()), V(X, "use_strict", C);
    let _ = X.contains.find((F) => F.className === "function");
    return _.relevance = 0, Object.assign(X, {
      name: "TypeScript",
      aliases: ["ts", "tsx"]
    }), X
  }
  fD2.exports = i49
})
// @from(Start 4890383, End 4891555)
UD2 = Y((jg3, RD2) => {
  function n49(I) {
    return {
      name: "Vala",
      keywords: {
        keyword: "char uchar unichar int uint long ulong short ushort int8 int16 int32 int64 uint8 uint16 uint32 uint64 float double bool struct enum string void weak unowned owned async signal static abstract interface override virtual delegate if while do for foreach else switch case break default return try catch public private protected internal using new this get set const stdout stdin stderr var",
        built_in: "DBus GLib CCode Gee Object Gtk Posix",
        literal: "false true null"
      },
      contains: [{
        className: "class",
        beginKeywords: "class interface namespace",
        end: /\{/,
        excludeEnd: !0,
        illegal: "[^,:\\n\\s\\.]",
        contains: [I.UNDERSCORE_TITLE_MODE]
      }, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, {
        className: "string",
        begin: '"""',
        end: '"""',
        relevance: 5
      }, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, I.C_NUMBER_MODE, {
        className: "meta",
        begin: "^#",
        end: "$",
        relevance: 2
      }]
    }
  }
  RD2.exports = n49
})
// @from(Start 4891561, End 4895272)
MD2 = Y((kg3, ED2) => {
  function vD2(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function ma(...I) {
    return I.map((G) => vD2(G)).join("")
  }

  function Ig1(...I) {
    return "(" + I.map((G) => vD2(G)).join("|") + ")"
  }

  function r49(I) {
    let d = {
        className: "string",
        begin: /"(""|[^/n])"C\b/
      },
      G = {
        className: "string",
        begin: /"/,
        end: /"/,
        illegal: /\n/,
        contains: [{
          begin: /""/
        }]
      },
      Z = /\d{1,2}\/\d{1,2}\/\d{4}/,
      C = /\d{4}-\d{1,2}-\d{1,2}/,
      W = /(\d|1[012])(:\d+){0,2} *(AM|PM)/,
      w = /\d{1,2}(:\d{1,2}){1,2}/,
      B = {
        className: "literal",
        variants: [{
          begin: ma(/# */, Ig1(C, Z), / *#/)
        }, {
          begin: ma(/# */, w, / *#/)
        }, {
          begin: ma(/# */, W, / *#/)
        }, {
          begin: ma(/# */, Ig1(C, Z), / +/, Ig1(W, w), / *#/)
        }]
      },
      A = {
        className: "number",
        relevance: 0,
        variants: [{
          begin: /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/
        }, {
          begin: /\b\d[\d_]*((U?[SIL])|[%&])?/
        }, {
          begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/
        }, {
          begin: /&O[0-7_]+((U?[SIL])|[%&])?/
        }, {
          begin: /&B[01_]+((U?[SIL])|[%&])?/
        }]
      },
      V = {
        className: "label",
        begin: /^\w+:/
      },
      X = I.COMMENT(/'''/, /$/, {
        contains: [{
          className: "doctag",
          begin: /<\/?/,
          end: />/
        }]
      }),
      _ = I.COMMENT(null, /$/, {
        variants: [{
          begin: /'/
        }, {
          begin: /([\t ]|^)REM(?=\s)/
        }]
      });
    return {
      name: "Visual Basic .NET",
      aliases: ["vb"],
      case_insensitive: !0,
      classNameAliases: {
        label: "symbol"
      },
      keywords: {
        keyword: "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
        built_in: "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",
        type: "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",
        literal: "true false nothing"
      },
      illegal: "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",
      contains: [d, G, B, A, V, X, _, {
        className: "meta",
        begin: /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
        end: /$/,
        keywords: {
          "meta-keyword": "const disable else elseif enable end externalsource if region then"
        },
        contains: [_]
      }]
    }
  }
  ED2.exports = r49
})
// @from(Start 4895278, End 4897333)
yD2 = Y((xg3, LD2) => {
  function SD2(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function a49(...I) {
    return I.map((G) => SD2(G)).join("")
  }

  function s49(...I) {
    return "(" + I.map((G) => SD2(G)).join("|") + ")"
  }

  function o49(I) {
    let d = "lcase month vartype instrrev ubound setlocale getobject rgb getref string weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency conversions csng timevalue second year space abs clng timeserial fixs len asc isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim strcomp int createobject loadpicture tan formatnumber mid split  cint sin datepart ltrim sqr time derived eval date formatpercent exp inputbox left ascw chrw regexp cstr err".split(" "),
      G = ["server", "response", "request", "scriptengine", "scriptenginebuildversion", "scriptengineminorversion", "scriptenginemajorversion"],
      Z = {
        begin: a49(s49(...d), "\\s*\\("),
        relevance: 0,
        keywords: {
          built_in: d
        }
      };
    return {
      name: "VBScript",
      aliases: ["vbs"],
      case_insensitive: !0,
      keywords: {
        keyword: "call class const dim do loop erase execute executeglobal exit for each next function if then else on error option explicit new private property let get public randomize redim rem select case set stop sub while wend with end to elseif is or xor and not class_initialize class_terminate default preserve in me byval byref step resume goto",
        built_in: G,
        literal: "true false null nothing empty"
      },
      illegal: "//",
      contains: [Z, I.inherit(I.QUOTE_STRING_MODE, {
        contains: [{
          begin: '""'
        }]
      }), I.COMMENT(/'/, /$/, {
        relevance: 0
      }), I.C_NUMBER_MODE]
    }
  }
  LD2.exports = o49
})
// @from(Start 4897339, End 4897586)
$D2 = Y((cg3, PD2) => {
  function e49(I) {
    return {
      name: "VBScript in HTML",
      subLanguage: "xml",
      contains: [{
        begin: "<%",
        end: "%>",
        subLanguage: "vbscript"
      }]
    }
  }
  PD2.exports = e49
})
// @from(Start 4897592, End 4902848)
TD2 = Y((pg3, uD2) => {
  function t49(I) {
    return {
      name: "Verilog",
      aliases: ["v", "sv", "svh"],
      case_insensitive: !1,
      keywords: {
        $pattern: /[\w\$]+/,
        keyword: "accept_on alias always always_comb always_ff always_latch and assert assign assume automatic before begin bind bins binsof bit break buf|0 bufif0 bufif1 byte case casex casez cell chandle checker class clocking cmos config const constraint context continue cover covergroup coverpoint cross deassign default defparam design disable dist do edge else end endcase endchecker endclass endclocking endconfig endfunction endgenerate endgroup endinterface endmodule endpackage endprimitive endprogram endproperty endspecify endsequence endtable endtask enum event eventually expect export extends extern final first_match for force foreach forever fork forkjoin function generate|5 genvar global highz0 highz1 if iff ifnone ignore_bins illegal_bins implements implies import incdir include initial inout input inside instance int integer interconnect interface intersect join join_any join_none large let liblist library local localparam logic longint macromodule matches medium modport module nand negedge nettype new nexttime nmos nor noshowcancelled not notif0 notif1 or output package packed parameter pmos posedge primitive priority program property protected pull0 pull1 pulldown pullup pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos real realtime ref reg reject_on release repeat restrict return rnmos rpmos rtran rtranif0 rtranif1 s_always s_eventually s_nexttime s_until s_until_with scalared sequence shortint shortreal showcancelled signed small soft solve specify specparam static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on sync_reject_on table tagged task this throughout time timeprecision timeunit tran tranif0 tranif1 tri tri0 tri1 triand trior trireg type typedef union unique unique0 unsigned until until_with untyped use uwire var vectored virtual void wait wait_order wand weak weak0 weak1 while wildcard wire with within wor xnor xor",
        literal: "null",
        built_in: "$finish $stop $exit $fatal $error $warning $info $realtime $time $printtimescale $bitstoreal $bitstoshortreal $itor $signed $cast $bits $stime $timeformat $realtobits $shortrealtobits $rtoi $unsigned $asserton $assertkill $assertpasson $assertfailon $assertnonvacuouson $assertoff $assertcontrol $assertpassoff $assertfailoff $assertvacuousoff $isunbounded $sampled $fell $changed $past_gclk $fell_gclk $changed_gclk $rising_gclk $steady_gclk $coverage_control $coverage_get $coverage_save $set_coverage_db_name $rose $stable $past $rose_gclk $stable_gclk $future_gclk $falling_gclk $changing_gclk $display $coverage_get_max $coverage_merge $get_coverage $load_coverage_db $typename $unpacked_dimensions $left $low $increment $clog2 $ln $log10 $exp $sqrt $pow $floor $ceil $sin $cos $tan $countbits $onehot $isunknown $fatal $warning $dimensions $right $high $size $asin $acos $atan $atan2 $hypot $sinh $cosh $tanh $asinh $acosh $atanh $countones $onehot0 $error $info $random $dist_chi_square $dist_erlang $dist_exponential $dist_normal $dist_poisson $dist_t $dist_uniform $q_initialize $q_remove $q_exam $async$and$array $async$nand$array $async$or$array $async$nor$array $sync$and$array $sync$nand$array $sync$or$array $sync$nor$array $q_add $q_full $psprintf $async$and$plane $async$nand$plane $async$or$plane $async$nor$plane $sync$and$plane $sync$nand$plane $sync$or$plane $sync$nor$plane $system $display $displayb $displayh $displayo $strobe $strobeb $strobeh $strobeo $write $readmemb $readmemh $writememh $value$plusargs $dumpvars $dumpon $dumplimit $dumpports $dumpportson $dumpportslimit $writeb $writeh $writeo $monitor $monitorb $monitorh $monitoro $writememb $dumpfile $dumpoff $dumpall $dumpflush $dumpportsoff $dumpportsall $dumpportsflush $fclose $fdisplay $fdisplayb $fdisplayh $fdisplayo $fstrobe $fstrobeb $fstrobeh $fstrobeo $swrite $swriteb $swriteh $swriteo $fscanf $fread $fseek $fflush $feof $fopen $fwrite $fwriteb $fwriteh $fwriteo $fmonitor $fmonitorb $fmonitorh $fmonitoro $sformat $sformatf $fgetc $ungetc $fgets $sscanf $rewind $ftell $ferror"
      },
      contains: [I.C_BLOCK_COMMENT_MODE, I.C_LINE_COMMENT_MODE, I.QUOTE_STRING_MODE, {
        className: "number",
        contains: [I.BACKSLASH_ESCAPE],
        variants: [{
          begin: "\\b((\\d+'(b|h|o|d|B|H|O|D))[0-9xzXZa-fA-F_]+)"
        }, {
          begin: "\\B(('(b|h|o|d|B|H|O|D))[0-9xzXZa-fA-F_]+)"
        }, {
          begin: "\\b([0-9_])+",
          relevance: 0
        }]
      }, {
        className: "variable",
        variants: [{
          begin: "#\\((?!parameter).+\\)"
        }, {
          begin: "\\.\\w+",
          relevance: 0
        }]
      }, {
        className: "meta",
        begin: "`",
        end: "$",
        keywords: {
          "meta-keyword": "define __FILE__ __LINE__ begin_keywords celldefine default_nettype define else elsif end_keywords endcelldefine endif ifdef ifndef include line nounconnected_drive pragma resetall timescale unconnected_drive undef undefineall"
        },
        relevance: 0
      }]
    }
  }
  uD2.exports = t49
})
// @from(Start 4902854, End 4904812)
mD2 = Y((ig3, OD2) => {
  function I59(I) {
    let G = "[eE][-+]?\\d(_|\\d)*",
      Z = "\\d(_|\\d)*(\\.\\d(_|\\d)*)?(" + G + ")?",
      C = "\\w+",
      w = "\\b(" + ("\\d(_|\\d)*#\\w+(\\.\\w+)?#(" + G + ")?") + "|" + Z + ")";
    return {
      name: "VHDL",
      case_insensitive: !0,
      keywords: {
        keyword: "abs access after alias all and architecture array assert assume assume_guarantee attribute begin block body buffer bus case component configuration constant context cover disconnect downto default else elsif end entity exit fairness file for force function generate generic group guarded if impure in inertial inout is label library linkage literal loop map mod nand new next nor not null of on open or others out package parameter port postponed procedure process property protected pure range record register reject release rem report restrict restrict_guarantee return rol ror select sequence severity shared signal sla sll sra srl strong subtype then to transport type unaffected units until use variable view vmode vprop vunit wait when while with xnor xor",
        built_in: "boolean bit character integer time delay_length natural positive string bit_vector file_open_kind file_open_status std_logic std_logic_vector unsigned signed boolean_vector integer_vector std_ulogic std_ulogic_vector unresolved_unsigned u_unsigned unresolved_signed u_signed real_vector time_vector",
        literal: "false true note warning error failure line text side width"
      },
      illegal: /\{/,
      contains: [I.C_BLOCK_COMMENT_MODE, I.COMMENT("--", "$"), I.QUOTE_STRING_MODE, {
        className: "number",
        begin: w,
        relevance: 0
      }, {
        className: "string",
        begin: "'(U|X|0|1|Z|W|L|H|-)'",
        contains: [I.BACKSLASH_ESCAPE]
      }, {
        className: "symbol",
        begin: "'[A-Za-z](_?[A-Za-z0-9])*",
        contains: [I.BACKSLASH_ESCAPE]
      }]
    }
  }
  OD2.exports = I59
})
// @from(Start 4904818, End 4913737)
bD2 = Y((ng3, lD2) => {
  function d59(I) {
    return {
      name: "Vim Script",
      keywords: {
        $pattern: /[!#@\w]+/,
        keyword: "N|0 P|0 X|0 a|0 ab abc abo al am an|0 ar arga argd arge argdo argg argl argu as au aug aun b|0 bN ba bad bd be bel bf bl bm bn bo bp br brea breaka breakd breakl bro bufdo buffers bun bw c|0 cN cNf ca cabc caddb cad caddf cal cat cb cc ccl cd ce cex cf cfir cgetb cgete cg changes chd che checkt cl cla clo cm cmapc cme cn cnew cnf cno cnorea cnoreme co col colo com comc comp con conf cope cp cpf cq cr cs cst cu cuna cunme cw delm deb debugg delc delf dif diffg diffo diffp diffpu diffs diffthis dig di dl dell dj dli do doautoa dp dr ds dsp e|0 ea ec echoe echoh echom echon el elsei em en endfo endf endt endw ene ex exe exi exu f|0 files filet fin fina fini fir fix fo foldc foldd folddoc foldo for fu go gr grepa gu gv ha helpf helpg helpt hi hid his ia iabc if ij il im imapc ime ino inorea inoreme int is isp iu iuna iunme j|0 ju k|0 keepa kee keepj lN lNf l|0 lad laddb laddf la lan lat lb lc lch lcl lcs le lefta let lex lf lfir lgetb lgete lg lgr lgrepa lh ll lla lli lmak lm lmapc lne lnew lnf ln loadk lo loc lockv lol lope lp lpf lr ls lt lu lua luad luaf lv lvimgrepa lw m|0 ma mak map mapc marks mat me menut mes mk mks mksp mkv mkvie mod mz mzf nbc nb nbs new nm nmapc nme nn nnoreme noa no noh norea noreme norm nu nun nunme ol o|0 om omapc ome on ono onoreme opt ou ounme ow p|0 profd prof pro promptr pc ped pe perld po popu pp pre prev ps pt ptN ptf ptj ptl ptn ptp ptr pts pu pw py3 python3 py3d py3f py pyd pyf quita qa rec red redi redr redraws reg res ret retu rew ri rightb rub rubyd rubyf rund ru rv sN san sa sal sav sb sbN sba sbf sbl sbm sbn sbp sbr scrip scripte scs se setf setg setl sf sfir sh sim sig sil sl sla sm smap smapc sme sn sni sno snor snoreme sor so spelld spe spelli spellr spellu spellw sp spr sre st sta startg startr star stopi stj sts sun sunm sunme sus sv sw sy synti sync tN tabN tabc tabdo tabe tabf tabfir tabl tabm tabnew tabn tabo tabp tabr tabs tab ta tags tc tcld tclf te tf th tj tl tm tn to tp tr try ts tu u|0 undoj undol una unh unl unlo unm unme uns up ve verb vert vim vimgrepa vi viu vie vm vmapc vme vne vn vnoreme vs vu vunme windo w|0 wN wa wh wi winc winp wn wp wq wqa ws wu wv x|0 xa xmapc xm xme xn xnoreme xu xunme y|0 z|0 ~ Next Print append abbreviate abclear aboveleft all amenu anoremenu args argadd argdelete argedit argglobal arglocal argument ascii autocmd augroup aunmenu buffer bNext ball badd bdelete behave belowright bfirst blast bmodified bnext botright bprevious brewind break breakadd breakdel breaklist browse bunload bwipeout change cNext cNfile cabbrev cabclear caddbuffer caddexpr caddfile call catch cbuffer cclose center cexpr cfile cfirst cgetbuffer cgetexpr cgetfile chdir checkpath checktime clist clast close cmap cmapclear cmenu cnext cnewer cnfile cnoremap cnoreabbrev cnoremenu copy colder colorscheme command comclear compiler continue confirm copen cprevious cpfile cquit crewind cscope cstag cunmap cunabbrev cunmenu cwindow delete delmarks debug debuggreedy delcommand delfunction diffupdate diffget diffoff diffpatch diffput diffsplit digraphs display deletel djump dlist doautocmd doautoall deletep drop dsearch dsplit edit earlier echo echoerr echohl echomsg else elseif emenu endif endfor endfunction endtry endwhile enew execute exit exusage file filetype find finally finish first fixdel fold foldclose folddoopen folddoclosed foldopen function global goto grep grepadd gui gvim hardcopy help helpfind helpgrep helptags highlight hide history insert iabbrev iabclear ijump ilist imap imapclear imenu inoremap inoreabbrev inoremenu intro isearch isplit iunmap iunabbrev iunmenu join jumps keepalt keepmarks keepjumps lNext lNfile list laddexpr laddbuffer laddfile last language later lbuffer lcd lchdir lclose lcscope left leftabove lexpr lfile lfirst lgetbuffer lgetexpr lgetfile lgrep lgrepadd lhelpgrep llast llist lmake lmap lmapclear lnext lnewer lnfile lnoremap loadkeymap loadview lockmarks lockvar lolder lopen lprevious lpfile lrewind ltag lunmap luado luafile lvimgrep lvimgrepadd lwindow move mark make mapclear match menu menutranslate messages mkexrc mksession mkspell mkvimrc mkview mode mzscheme mzfile nbclose nbkey nbsart next nmap nmapclear nmenu nnoremap nnoremenu noautocmd noremap nohlsearch noreabbrev noremenu normal number nunmap nunmenu oldfiles open omap omapclear omenu only onoremap onoremenu options ounmap ounmenu ownsyntax print profdel profile promptfind promptrepl pclose pedit perl perldo pop popup ppop preserve previous psearch ptag ptNext ptfirst ptjump ptlast ptnext ptprevious ptrewind ptselect put pwd py3do py3file python pydo pyfile quit quitall qall read recover redo redir redraw redrawstatus registers resize retab return rewind right rightbelow ruby rubydo rubyfile rundo runtime rviminfo substitute sNext sandbox sargument sall saveas sbuffer sbNext sball sbfirst sblast sbmodified sbnext sbprevious sbrewind scriptnames scriptencoding scscope set setfiletype setglobal setlocal sfind sfirst shell simalt sign silent sleep slast smagic smapclear smenu snext sniff snomagic snoremap snoremenu sort source spelldump spellgood spellinfo spellrepall spellundo spellwrong split sprevious srewind stop stag startgreplace startreplace startinsert stopinsert stjump stselect sunhide sunmap sunmenu suspend sview swapname syntax syntime syncbind tNext tabNext tabclose tabedit tabfind tabfirst tablast tabmove tabnext tabonly tabprevious tabrewind tag tcl tcldo tclfile tearoff tfirst throw tjump tlast tmenu tnext topleft tprevious trewind tselect tunmenu undo undojoin undolist unabbreviate unhide unlet unlockvar unmap unmenu unsilent update vglobal version verbose vertical vimgrep vimgrepadd visual viusage view vmap vmapclear vmenu vnew vnoremap vnoremenu vsplit vunmap vunmenu write wNext wall while winsize wincmd winpos wnext wprevious wqall wsverb wundo wviminfo xit xall xmapclear xmap xmenu xnoremap xnoremenu xunmap xunmenu yank",
        built_in: "synIDtrans atan2 range matcharg did_filetype asin feedkeys xor argv complete_check add getwinposx getqflist getwinposy screencol clearmatches empty extend getcmdpos mzeval garbagecollect setreg ceil sqrt diff_hlID inputsecret get getfperm getpid filewritable shiftwidth max sinh isdirectory synID system inputrestore winline atan visualmode inputlist tabpagewinnr round getregtype mapcheck hasmapto histdel argidx findfile sha256 exists toupper getcmdline taglist string getmatches bufnr strftime winwidth bufexists strtrans tabpagebuflist setcmdpos remote_read printf setloclist getpos getline bufwinnr float2nr len getcmdtype diff_filler luaeval resolve libcallnr foldclosedend reverse filter has_key bufname str2float strlen setline getcharmod setbufvar index searchpos shellescape undofile foldclosed setqflist buflisted strchars str2nr virtcol floor remove undotree remote_expr winheight gettabwinvar reltime cursor tabpagenr finddir localtime acos getloclist search tanh matchend rename gettabvar strdisplaywidth type abs py3eval setwinvar tolower wildmenumode log10 spellsuggest bufloaded synconcealed nextnonblank server2client complete settabwinvar executable input wincol setmatches getftype hlID inputsave searchpair or screenrow line settabvar histadd deepcopy strpart remote_peek and eval getftime submatch screenchar winsaveview matchadd mkdir screenattr getfontname libcall reltimestr getfsize winnr invert pow getbufline byte2line soundfold repeat fnameescape tagfiles sin strwidth spellbadword trunc maparg log lispindent hostname setpos globpath remote_foreground getchar synIDattr fnamemodify cscope_connection stridx winbufnr indent min complete_add nr2char searchpairpos inputdialog values matchlist items hlexists strridx browsedir expand fmod pathshorten line2byte argc count getwinvar glob foldtextresult getreg foreground cosh matchdelete has char2nr simplify histget searchdecl iconv winrestcmd pumvisible writefile foldlevel haslocaldir keys cos matchstr foldtext histnr tan tempname getcwd byteidx getbufvar islocked escape eventhandler remote_send serverlist winrestview synstack pyeval prevnonblank readfile cindent filereadable changenr exp"
      },
      illegal: /;/,
      contains: [I.NUMBER_MODE, {
        className: "string",
        begin: "'",
        end: "'",
        illegal: "\\n"
      }, {
        className: "string",
        begin: /"(\\"|\n\\|[^"\n])*"/
      }, I.COMMENT('"', "$"), {
        className: "variable",
        begin: /[bwtglsav]:[\w\d_]*/
      }, {
        className: "function",
        beginKeywords: "function function!",
        end: "$",
        relevance: 0,
        contains: [I.TITLE_MODE, {
          className: "params",
          begin: "\\(",
          end: "\\)"
        }]
      }, {
        className: "symbol",
        begin: /<[\w-]+>/
      }]
    }
  }
  lD2.exports = d59
})
// @from(Start 4913743, End 4933325)
jD2 = Y((rg3, hD2) => {
  function G59(I) {
    return {
      name: "Intel x86 Assembly",
      case_insensitive: !0,
      keywords: {
        $pattern: "[.%]?" + I.IDENT_RE,
        keyword: "lock rep repe repz repne repnz xaquire xrelease bnd nobnd aaa aad aam aas adc add and arpl bb0_reset bb1_reset bound bsf bsr bswap bt btc btr bts call cbw cdq cdqe clc cld cli clts cmc cmp cmpsb cmpsd cmpsq cmpsw cmpxchg cmpxchg486 cmpxchg8b cmpxchg16b cpuid cpu_read cpu_write cqo cwd cwde daa das dec div dmint emms enter equ f2xm1 fabs fadd faddp fbld fbstp fchs fclex fcmovb fcmovbe fcmove fcmovnb fcmovnbe fcmovne fcmovnu fcmovu fcom fcomi fcomip fcomp fcompp fcos fdecstp fdisi fdiv fdivp fdivr fdivrp femms feni ffree ffreep fiadd ficom ficomp fidiv fidivr fild fimul fincstp finit fist fistp fisttp fisub fisubr fld fld1 fldcw fldenv fldl2e fldl2t fldlg2 fldln2 fldpi fldz fmul fmulp fnclex fndisi fneni fninit fnop fnsave fnstcw fnstenv fnstsw fpatan fprem fprem1 fptan frndint frstor fsave fscale fsetpm fsin fsincos fsqrt fst fstcw fstenv fstp fstsw fsub fsubp fsubr fsubrp ftst fucom fucomi fucomip fucomp fucompp fxam fxch fxtract fyl2x fyl2xp1 hlt ibts icebp idiv imul in inc incbin insb insd insw int int01 int1 int03 int3 into invd invpcid invlpg invlpga iret iretd iretq iretw jcxz jecxz jrcxz jmp jmpe lahf lar lds lea leave les lfence lfs lgdt lgs lidt lldt lmsw loadall loadall286 lodsb lodsd lodsq lodsw loop loope loopne loopnz loopz lsl lss ltr mfence monitor mov movd movq movsb movsd movsq movsw movsx movsxd movzx mul mwait neg nop not or out outsb outsd outsw packssdw packsswb packuswb paddb paddd paddsb paddsiw paddsw paddusb paddusw paddw pand pandn pause paveb pavgusb pcmpeqb pcmpeqd pcmpeqw pcmpgtb pcmpgtd pcmpgtw pdistib pf2id pfacc pfadd pfcmpeq pfcmpge pfcmpgt pfmax pfmin pfmul pfrcp pfrcpit1 pfrcpit2 pfrsqit1 pfrsqrt pfsub pfsubr pi2fd pmachriw pmaddwd pmagw pmulhriw pmulhrwa pmulhrwc pmulhw pmullw pmvgezb pmvlzb pmvnzb pmvzb pop popa popad popaw popf popfd popfq popfw por prefetch prefetchw pslld psllq psllw psrad psraw psrld psrlq psrlw psubb psubd psubsb psubsiw psubsw psubusb psubusw psubw punpckhbw punpckhdq punpckhwd punpcklbw punpckldq punpcklwd push pusha pushad pushaw pushf pushfd pushfq pushfw pxor rcl rcr rdshr rdmsr rdpmc rdtsc rdtscp ret retf retn rol ror rdm rsdc rsldt rsm rsts sahf sal salc sar sbb scasb scasd scasq scasw sfence sgdt shl shld shr shrd sidt sldt skinit smi smint smintold smsw stc std sti stosb stosd stosq stosw str sub svdc svldt svts swapgs syscall sysenter sysexit sysret test ud0 ud1 ud2b ud2 ud2a umov verr verw fwait wbinvd wrshr wrmsr xadd xbts xchg xlatb xlat xor cmove cmovz cmovne cmovnz cmova cmovnbe cmovae cmovnb cmovb cmovnae cmovbe cmovna cmovg cmovnle cmovge cmovnl cmovl cmovnge cmovle cmovng cmovc cmovnc cmovo cmovno cmovs cmovns cmovp cmovpe cmovnp cmovpo je jz jne jnz ja jnbe jae jnb jb jnae jbe jna jg jnle jge jnl jl jnge jle jng jc jnc jo jno js jns jpo jnp jpe jp sete setz setne setnz seta setnbe setae setnb setnc setb setnae setcset setbe setna setg setnle setge setnl setl setnge setle setng sets setns seto setno setpe setp setpo setnp addps addss andnps andps cmpeqps cmpeqss cmpleps cmpless cmpltps cmpltss cmpneqps cmpneqss cmpnleps cmpnless cmpnltps cmpnltss cmpordps cmpordss cmpunordps cmpunordss cmpps cmpss comiss cvtpi2ps cvtps2pi cvtsi2ss cvtss2si cvttps2pi cvttss2si divps divss ldmxcsr maxps maxss minps minss movaps movhps movlhps movlps movhlps movmskps movntps movss movups mulps mulss orps rcpps rcpss rsqrtps rsqrtss shufps sqrtps sqrtss stmxcsr subps subss ucomiss unpckhps unpcklps xorps fxrstor fxrstor64 fxsave fxsave64 xgetbv xsetbv xsave xsave64 xsaveopt xsaveopt64 xrstor xrstor64 prefetchnta prefetcht0 prefetcht1 prefetcht2 maskmovq movntq pavgb pavgw pextrw pinsrw pmaxsw pmaxub pminsw pminub pmovmskb pmulhuw psadbw pshufw pf2iw pfnacc pfpnacc pi2fw pswapd maskmovdqu clflush movntdq movnti movntpd movdqa movdqu movdq2q movq2dq paddq pmuludq pshufd pshufhw pshuflw pslldq psrldq psubq punpckhqdq punpcklqdq addpd addsd andnpd andpd cmpeqpd cmpeqsd cmplepd cmplesd cmpltpd cmpltsd cmpneqpd cmpneqsd cmpnlepd cmpnlesd cmpnltpd cmpnltsd cmpordpd cmpordsd cmpunordpd cmpunordsd cmppd comisd cvtdq2pd cvtdq2ps cvtpd2dq cvtpd2pi cvtpd2ps cvtpi2pd cvtps2dq cvtps2pd cvtsd2si cvtsd2ss cvtsi2sd cvtss2sd cvttpd2pi cvttpd2dq cvttps2dq cvttsd2si divpd divsd maxpd maxsd minpd minsd movapd movhpd movlpd movmskpd movupd mulpd mulsd orpd shufpd sqrtpd sqrtsd subpd subsd ucomisd unpckhpd unpcklpd xorpd addsubpd addsubps haddpd haddps hsubpd hsubps lddqu movddup movshdup movsldup clgi stgi vmcall vmclear vmfunc vmlaunch vmload vmmcall vmptrld vmptrst vmread vmresume vmrun vmsave vmwrite vmxoff vmxon invept invvpid pabsb pabsw pabsd palignr phaddw phaddd phaddsw phsubw phsubd phsubsw pmaddubsw pmulhrsw pshufb psignb psignw psignd extrq insertq movntsd movntss lzcnt blendpd blendps blendvpd blendvps dppd dpps extractps insertps movntdqa mpsadbw packusdw pblendvb pblendw pcmpeqq pextrb pextrd pextrq phminposuw pinsrb pinsrd pinsrq pmaxsb pmaxsd pmaxud pmaxuw pminsb pminsd pminud pminuw pmovsxbw pmovsxbd pmovsxbq pmovsxwd pmovsxwq pmovsxdq pmovzxbw pmovzxbd pmovzxbq pmovzxwd pmovzxwq pmovzxdq pmuldq pmulld ptest roundpd roundps roundsd roundss crc32 pcmpestri pcmpestrm pcmpistri pcmpistrm pcmpgtq popcnt getsec pfrcpv pfrsqrtv movbe aesenc aesenclast aesdec aesdeclast aesimc aeskeygenassist vaesenc vaesenclast vaesdec vaesdeclast vaesimc vaeskeygenassist vaddpd vaddps vaddsd vaddss vaddsubpd vaddsubps vandpd vandps vandnpd vandnps vblendpd vblendps vblendvpd vblendvps vbroadcastss vbroadcastsd vbroadcastf128 vcmpeq_ospd vcmpeqpd vcmplt_ospd vcmpltpd vcmple_ospd vcmplepd vcmpunord_qpd vcmpunordpd vcmpneq_uqpd vcmpneqpd vcmpnlt_uspd vcmpnltpd vcmpnle_uspd vcmpnlepd vcmpord_qpd vcmpordpd vcmpeq_uqpd vcmpnge_uspd vcmpngepd vcmpngt_uspd vcmpngtpd vcmpfalse_oqpd vcmpfalsepd vcmpneq_oqpd vcmpge_ospd vcmpgepd vcmpgt_ospd vcmpgtpd vcmptrue_uqpd vcmptruepd vcmplt_oqpd vcmple_oqpd vcmpunord_spd vcmpneq_uspd vcmpnlt_uqpd vcmpnle_uqpd vcmpord_spd vcmpeq_uspd vcmpnge_uqpd vcmpngt_uqpd vcmpfalse_ospd vcmpneq_ospd vcmpge_oqpd vcmpgt_oqpd vcmptrue_uspd vcmppd vcmpeq_osps vcmpeqps vcmplt_osps vcmpltps vcmple_osps vcmpleps vcmpunord_qps vcmpunordps vcmpneq_uqps vcmpneqps vcmpnlt_usps vcmpnltps vcmpnle_usps vcmpnleps vcmpord_qps vcmpordps vcmpeq_uqps vcmpnge_usps vcmpngeps vcmpngt_usps vcmpngtps vcmpfalse_oqps vcmpfalseps vcmpneq_oqps vcmpge_osps vcmpgeps vcmpgt_osps vcmpgtps vcmptrue_uqps vcmptrueps vcmplt_oqps vcmple_oqps vcmpunord_sps vcmpneq_usps vcmpnlt_uqps vcmpnle_uqps vcmpord_sps vcmpeq_usps vcmpnge_uqps vcmpngt_uqps vcmpfalse_osps vcmpneq_osps vcmpge_oqps vcmpgt_oqps vcmptrue_usps vcmpps vcmpeq_ossd vcmpeqsd vcmplt_ossd vcmpltsd vcmple_ossd vcmplesd vcmpunord_qsd vcmpunordsd vcmpneq_uqsd vcmpneqsd vcmpnlt_ussd vcmpnltsd vcmpnle_ussd vcmpnlesd vcmpord_qsd vcmpordsd vcmpeq_uqsd vcmpnge_ussd vcmpngesd vcmpngt_ussd vcmpngtsd vcmpfalse_oqsd vcmpfalsesd vcmpneq_oqsd vcmpge_ossd vcmpgesd vcmpgt_ossd vcmpgtsd vcmptrue_uqsd vcmptruesd vcmplt_oqsd vcmple_oqsd vcmpunord_ssd vcmpneq_ussd vcmpnlt_uqsd vcmpnle_uqsd vcmpord_ssd vcmpeq_ussd vcmpnge_uqsd vcmpngt_uqsd vcmpfalse_ossd vcmpneq_ossd vcmpge_oqsd vcmpgt_oqsd vcmptrue_ussd vcmpsd vcmpeq_osss vcmpeqss vcmplt_osss vcmpltss vcmple_osss vcmpless vcmpunord_qss vcmpunordss vcmpneq_uqss vcmpneqss vcmpnlt_usss vcmpnltss vcmpnle_usss vcmpnless vcmpord_qss vcmpordss vcmpeq_uqss vcmpnge_usss vcmpngess vcmpngt_usss vcmpngtss vcmpfalse_oqss vcmpfalsess vcmpneq_oqss vcmpge_osss vcmpgess vcmpgt_osss vcmpgtss vcmptrue_uqss vcmptruess vcmplt_oqss vcmple_oqss vcmpunord_sss vcmpneq_usss vcmpnlt_uqss vcmpnle_uqss vcmpord_sss vcmpeq_usss vcmpnge_uqss vcmpngt_uqss vcmpfalse_osss vcmpneq_osss vcmpge_oqss vcmpgt_oqss vcmptrue_usss vcmpss vcomisd vcomiss vcvtdq2pd vcvtdq2ps vcvtpd2dq vcvtpd2ps vcvtps2dq vcvtps2pd vcvtsd2si vcvtsd2ss vcvtsi2sd vcvtsi2ss vcvtss2sd vcvtss2si vcvttpd2dq vcvttps2dq vcvttsd2si vcvttss2si vdivpd vdivps vdivsd vdivss vdppd vdpps vextractf128 vextractps vhaddpd vhaddps vhsubpd vhsubps vinsertf128 vinsertps vlddqu vldqqu vldmxcsr vmaskmovdqu vmaskmovps vmaskmovpd vmaxpd vmaxps vmaxsd vmaxss vminpd vminps vminsd vminss vmovapd vmovaps vmovd vmovq vmovddup vmovdqa vmovqqa vmovdqu vmovqqu vmovhlps vmovhpd vmovhps vmovlhps vmovlpd vmovlps vmovmskpd vmovmskps vmovntdq vmovntqq vmovntdqa vmovntpd vmovntps vmovsd vmovshdup vmovsldup vmovss vmovupd vmovups vmpsadbw vmulpd vmulps vmulsd vmulss vorpd vorps vpabsb vpabsw vpabsd vpacksswb vpackssdw vpackuswb vpackusdw vpaddb vpaddw vpaddd vpaddq vpaddsb vpaddsw vpaddusb vpaddusw vpalignr vpand vpandn vpavgb vpavgw vpblendvb vpblendw vpcmpestri vpcmpestrm vpcmpistri vpcmpistrm vpcmpeqb vpcmpeqw vpcmpeqd vpcmpeqq vpcmpgtb vpcmpgtw vpcmpgtd vpcmpgtq vpermilpd vpermilps vperm2f128 vpextrb vpextrw vpextrd vpextrq vphaddw vphaddd vphaddsw vphminposuw vphsubw vphsubd vphsubsw vpinsrb vpinsrw vpinsrd vpinsrq vpmaddwd vpmaddubsw vpmaxsb vpmaxsw vpmaxsd vpmaxub vpmaxuw vpmaxud vpminsb vpminsw vpminsd vpminub vpminuw vpminud vpmovmskb vpmovsxbw vpmovsxbd vpmovsxbq vpmovsxwd vpmovsxwq vpmovsxdq vpmovzxbw vpmovzxbd vpmovzxbq vpmovzxwd vpmovzxwq vpmovzxdq vpmulhuw vpmulhrsw vpmulhw vpmullw vpmulld vpmuludq vpmuldq vpor vpsadbw vpshufb vpshufd vpshufhw vpshuflw vpsignb vpsignw vpsignd vpslldq vpsrldq vpsllw vpslld vpsllq vpsraw vpsrad vpsrlw vpsrld vpsrlq vptest vpsubb vpsubw vpsubd vpsubq vpsubsb vpsubsw vpsubusb vpsubusw vpunpckhbw vpunpckhwd vpunpckhdq vpunpckhqdq vpunpcklbw vpunpcklwd vpunpckldq vpunpcklqdq vpxor vrcpps vrcpss vrsqrtps vrsqrtss vroundpd vroundps vroundsd vroundss vshufpd vshufps vsqrtpd vsqrtps vsqrtsd vsqrtss vstmxcsr vsubpd vsubps vsubsd vsubss vtestps vtestpd vucomisd vucomiss vunpckhpd vunpckhps vunpcklpd vunpcklps vxorpd vxorps vzeroall vzeroupper pclmullqlqdq pclmulhqlqdq pclmullqhqdq pclmulhqhqdq pclmulqdq vpclmullqlqdq vpclmulhqlqdq vpclmullqhqdq vpclmulhqhqdq vpclmulqdq vfmadd132ps vfmadd132pd vfmadd312ps vfmadd312pd vfmadd213ps vfmadd213pd vfmadd123ps vfmadd123pd vfmadd231ps vfmadd231pd vfmadd321ps vfmadd321pd vfmaddsub132ps vfmaddsub132pd vfmaddsub312ps vfmaddsub312pd vfmaddsub213ps vfmaddsub213pd vfmaddsub123ps vfmaddsub123pd vfmaddsub231ps vfmaddsub231pd vfmaddsub321ps vfmaddsub321pd vfmsub132ps vfmsub132pd vfmsub312ps vfmsub312pd vfmsub213ps vfmsub213pd vfmsub123ps vfmsub123pd vfmsub231ps vfmsub231pd vfmsub321ps vfmsub321pd vfmsubadd132ps vfmsubadd132pd vfmsubadd312ps vfmsubadd312pd vfmsubadd213ps vfmsubadd213pd vfmsubadd123ps vfmsubadd123pd vfmsubadd231ps vfmsubadd231pd vfmsubadd321ps vfmsubadd321pd vfnmadd132ps vfnmadd132pd vfnmadd312ps vfnmadd312pd vfnmadd213ps vfnmadd213pd vfnmadd123ps vfnmadd123pd vfnmadd231ps vfnmadd231pd vfnmadd321ps vfnmadd321pd vfnmsub132ps vfnmsub132pd vfnmsub312ps vfnmsub312pd vfnmsub213ps vfnmsub213pd vfnmsub123ps vfnmsub123pd vfnmsub231ps vfnmsub231pd vfnmsub321ps vfnmsub321pd vfmadd132ss vfmadd132sd vfmadd312ss vfmadd312sd vfmadd213ss vfmadd213sd vfmadd123ss vfmadd123sd vfmadd231ss vfmadd231sd vfmadd321ss vfmadd321sd vfmsub132ss vfmsub132sd vfmsub312ss vfmsub312sd vfmsub213ss vfmsub213sd vfmsub123ss vfmsub123sd vfmsub231ss vfmsub231sd vfmsub321ss vfmsub321sd vfnmadd132ss vfnmadd132sd vfnmadd312ss vfnmadd312sd vfnmadd213ss vfnmadd213sd vfnmadd123ss vfnmadd123sd vfnmadd231ss vfnmadd231sd vfnmadd321ss vfnmadd321sd vfnmsub132ss vfnmsub132sd vfnmsub312ss vfnmsub312sd vfnmsub213ss vfnmsub213sd vfnmsub123ss vfnmsub123sd vfnmsub231ss vfnmsub231sd vfnmsub321ss vfnmsub321sd rdfsbase rdgsbase rdrand wrfsbase wrgsbase vcvtph2ps vcvtps2ph adcx adox rdseed clac stac xstore xcryptecb xcryptcbc xcryptctr xcryptcfb xcryptofb montmul xsha1 xsha256 llwpcb slwpcb lwpval lwpins vfmaddpd vfmaddps vfmaddsd vfmaddss vfmaddsubpd vfmaddsubps vfmsubaddpd vfmsubaddps vfmsubpd vfmsubps vfmsubsd vfmsubss vfnmaddpd vfnmaddps vfnmaddsd vfnmaddss vfnmsubpd vfnmsubps vfnmsubsd vfnmsubss vfrczpd vfrczps vfrczsd vfrczss vpcmov vpcomb vpcomd vpcomq vpcomub vpcomud vpcomuq vpcomuw vpcomw vphaddbd vphaddbq vphaddbw vphadddq vphaddubd vphaddubq vphaddubw vphaddudq vphadduwd vphadduwq vphaddwd vphaddwq vphsubbw vphsubdq vphsubwd vpmacsdd vpmacsdqh vpmacsdql vpmacssdd vpmacssdqh vpmacssdql vpmacsswd vpmacssww vpmacswd vpmacsww vpmadcsswd vpmadcswd vpperm vprotb vprotd vprotq vprotw vpshab vpshad vpshaq vpshaw vpshlb vpshld vpshlq vpshlw vbroadcasti128 vpblendd vpbroadcastb vpbroadcastw vpbroadcastd vpbroadcastq vpermd vpermpd vpermps vpermq vperm2i128 vextracti128 vinserti128 vpmaskmovd vpmaskmovq vpsllvd vpsllvq vpsravd vpsrlvd vpsrlvq vgatherdpd vgatherqpd vgatherdps vgatherqps vpgatherdd vpgatherqd vpgatherdq vpgatherqq xabort xbegin xend xtest andn bextr blci blcic blsi blsic blcfill blsfill blcmsk blsmsk blsr blcs bzhi mulx pdep pext rorx sarx shlx shrx tzcnt tzmsk t1mskc valignd valignq vblendmpd vblendmps vbroadcastf32x4 vbroadcastf64x4 vbroadcasti32x4 vbroadcasti64x4 vcompresspd vcompressps vcvtpd2udq vcvtps2udq vcvtsd2usi vcvtss2usi vcvttpd2udq vcvttps2udq vcvttsd2usi vcvttss2usi vcvtudq2pd vcvtudq2ps vcvtusi2sd vcvtusi2ss vexpandpd vexpandps vextractf32x4 vextractf64x4 vextracti32x4 vextracti64x4 vfixupimmpd vfixupimmps vfixupimmsd vfixupimmss vgetexppd vgetexpps vgetexpsd vgetexpss vgetmantpd vgetmantps vgetmantsd vgetmantss vinsertf32x4 vinsertf64x4 vinserti32x4 vinserti64x4 vmovdqa32 vmovdqa64 vmovdqu32 vmovdqu64 vpabsq vpandd vpandnd vpandnq vpandq vpblendmd vpblendmq vpcmpltd vpcmpled vpcmpneqd vpcmpnltd vpcmpnled vpcmpd vpcmpltq vpcmpleq vpcmpneqq vpcmpnltq vpcmpnleq vpcmpq vpcmpequd vpcmpltud vpcmpleud vpcmpnequd vpcmpnltud vpcmpnleud vpcmpud vpcmpequq vpcmpltuq vpcmpleuq vpcmpnequq vpcmpnltuq vpcmpnleuq vpcmpuq vpcompressd vpcompressq vpermi2d vpermi2pd vpermi2ps vpermi2q vpermt2d vpermt2pd vpermt2ps vpermt2q vpexpandd vpexpandq vpmaxsq vpmaxuq vpminsq vpminuq vpmovdb vpmovdw vpmovqb vpmovqd vpmovqw vpmovsdb vpmovsdw vpmovsqb vpmovsqd vpmovsqw vpmovusdb vpmovusdw vpmovusqb vpmovusqd vpmovusqw vpord vporq vprold vprolq vprolvd vprolvq vprord vprorq vprorvd vprorvq vpscatterdd vpscatterdq vpscatterqd vpscatterqq vpsraq vpsravq vpternlogd vpternlogq vptestmd vptestmq vptestnmd vptestnmq vpxord vpxorq vrcp14pd vrcp14ps vrcp14sd vrcp14ss vrndscalepd vrndscaleps vrndscalesd vrndscaless vrsqrt14pd vrsqrt14ps vrsqrt14sd vrsqrt14ss vscalefpd vscalefps vscalefsd vscalefss vscatterdpd vscatterdps vscatterqpd vscatterqps vshuff32x4 vshuff64x2 vshufi32x4 vshufi64x2 kandnw kandw kmovw knotw kortestw korw kshiftlw kshiftrw kunpckbw kxnorw kxorw vpbroadcastmb2q vpbroadcastmw2d vpconflictd vpconflictq vplzcntd vplzcntq vexp2pd vexp2ps vrcp28pd vrcp28ps vrcp28sd vrcp28ss vrsqrt28pd vrsqrt28ps vrsqrt28sd vrsqrt28ss vgatherpf0dpd vgatherpf0dps vgatherpf0qpd vgatherpf0qps vgatherpf1dpd vgatherpf1dps vgatherpf1qpd vgatherpf1qps vscatterpf0dpd vscatterpf0dps vscatterpf0qpd vscatterpf0qps vscatterpf1dpd vscatterpf1dps vscatterpf1qpd vscatterpf1qps prefetchwt1 bndmk bndcl bndcu bndcn bndmov bndldx bndstx sha1rnds4 sha1nexte sha1msg1 sha1msg2 sha256rnds2 sha256msg1 sha256msg2 hint_nop0 hint_nop1 hint_nop2 hint_nop3 hint_nop4 hint_nop5 hint_nop6 hint_nop7 hint_nop8 hint_nop9 hint_nop10 hint_nop11 hint_nop12 hint_nop13 hint_nop14 hint_nop15 hint_nop16 hint_nop17 hint_nop18 hint_nop19 hint_nop20 hint_nop21 hint_nop22 hint_nop23 hint_nop24 hint_nop25 hint_nop26 hint_nop27 hint_nop28 hint_nop29 hint_nop30 hint_nop31 hint_nop32 hint_nop33 hint_nop34 hint_nop35 hint_nop36 hint_nop37 hint_nop38 hint_nop39 hint_nop40 hint_nop41 hint_nop42 hint_nop43 hint_nop44 hint_nop45 hint_nop46 hint_nop47 hint_nop48 hint_nop49 hint_nop50 hint_nop51 hint_nop52 hint_nop53 hint_nop54 hint_nop55 hint_nop56 hint_nop57 hint_nop58 hint_nop59 hint_nop60 hint_nop61 hint_nop62 hint_nop63",
        built_in: "ip eip rip al ah bl bh cl ch dl dh sil dil bpl spl r8b r9b r10b r11b r12b r13b r14b r15b ax bx cx dx si di bp sp r8w r9w r10w r11w r12w r13w r14w r15w eax ebx ecx edx esi edi ebp esp eip r8d r9d r10d r11d r12d r13d r14d r15d rax rbx rcx rdx rsi rdi rbp rsp r8 r9 r10 r11 r12 r13 r14 r15 cs ds es fs gs ss st st0 st1 st2 st3 st4 st5 st6 st7 mm0 mm1 mm2 mm3 mm4 mm5 mm6 mm7 xmm0  xmm1  xmm2  xmm3  xmm4  xmm5  xmm6  xmm7  xmm8  xmm9 xmm10  xmm11 xmm12 xmm13 xmm14 xmm15 xmm16 xmm17 xmm18 xmm19 xmm20 xmm21 xmm22 xmm23 xmm24 xmm25 xmm26 xmm27 xmm28 xmm29 xmm30 xmm31 ymm0  ymm1  ymm2  ymm3  ymm4  ymm5  ymm6  ymm7  ymm8  ymm9 ymm10  ymm11 ymm12 ymm13 ymm14 ymm15 ymm16 ymm17 ymm18 ymm19 ymm20 ymm21 ymm22 ymm23 ymm24 ymm25 ymm26 ymm27 ymm28 ymm29 ymm30 ymm31 zmm0  zmm1  zmm2  zmm3  zmm4  zmm5  zmm6  zmm7  zmm8  zmm9 zmm10  zmm11 zmm12 zmm13 zmm14 zmm15 zmm16 zmm17 zmm18 zmm19 zmm20 zmm21 zmm22 zmm23 zmm24 zmm25 zmm26 zmm27 zmm28 zmm29 zmm30 zmm31 k0 k1 k2 k3 k4 k5 k6 k7 bnd0 bnd1 bnd2 bnd3 cr0 cr1 cr2 cr3 cr4 cr8 dr0 dr1 dr2 dr3 dr8 tr3 tr4 tr5 tr6 tr7 r0 r1 r2 r3 r4 r5 r6 r7 r0b r1b r2b r3b r4b r5b r6b r7b r0w r1w r2w r3w r4w r5w r6w r7w r0d r1d r2d r3d r4d r5d r6d r7d r0h r1h r2h r3h r0l r1l r2l r3l r4l r5l r6l r7l r8l r9l r10l r11l r12l r13l r14l r15l db dw dd dq dt ddq do dy dz resb resw resd resq rest resdq reso resy resz incbin equ times byte word dword qword nosplit rel abs seg wrt strict near far a32 ptr",
        meta: "%define %xdefine %+ %undef %defstr %deftok %assign %strcat %strlen %substr %rotate %elif %else %endif %if %ifmacro %ifctx %ifidn %ifidni %ifid %ifnum %ifstr %iftoken %ifempty %ifenv %error %warning %fatal %rep %endrep %include %push %pop %repl %pathsearch %depend %use %arg %stacksize %local %line %comment %endcomment .nolist __FILE__ __LINE__ __SECT__  __BITS__ __OUTPUT_FORMAT__ __DATE__ __TIME__ __DATE_NUM__ __TIME_NUM__ __UTC_DATE__ __UTC_TIME__ __UTC_DATE_NUM__ __UTC_TIME_NUM__  __PASS__ struc endstruc istruc at iend align alignb sectalign daz nodaz up down zero default option assume public bits use16 use32 use64 default section segment absolute extern global common cpu float __utf16__ __utf16le__ __utf16be__ __utf32__ __utf32le__ __utf32be__ __float8__ __float16__ __float32__ __float64__ __float80m__ __float80e__ __float128l__ __float128h__ __Infinity__ __QNaN__ __SNaN__ Inf NaN QNaN SNaN float8 float16 float32 float64 float80m float80e float128l float128h __FLOAT_DAZ__ __FLOAT_ROUND__ __FLOAT__"
      },
      contains: [I.COMMENT(";", "$", {
        relevance: 0
      }), {
        className: "number",
        variants: [{
          begin: "\\b(?:([0-9][0-9_]*)?\\.[0-9_]*(?:[eE][+-]?[0-9_]+)?|(0[Xx])?[0-9][0-9_]*(\\.[0-9_]*)?(?:[pP](?:[+-]?[0-9_]+)?)?)\\b",
          relevance: 0
        }, {
          begin: "\\$[0-9][0-9A-Fa-f]*",
          relevance: 0
        }, {
          begin: "\\b(?:[0-9A-Fa-f][0-9A-Fa-f_]*[Hh]|[0-9][0-9_]*[DdTt]?|[0-7][0-7_]*[QqOo]|[0-1][0-1_]*[BbYy])\\b"
        }, {
          begin: "\\b(?:0[Xx][0-9A-Fa-f_]+|0[DdTt][0-9_]+|0[QqOo][0-7_]+|0[BbYy][0-1_]+)\\b"
        }]
      }, I.QUOTE_STRING_MODE, {
        className: "string",
        variants: [{
          begin: "'",
          end: "[^\\\\]'"
        }, {
          begin: "`",
          end: "[^\\\\]`"
        }],
        relevance: 0
      }, {
        className: "symbol",
        variants: [{
          begin: "^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)"
        }, {
          begin: "^\\s*%%[A-Za-z0-9_$#@~.?]*:"
        }],
        relevance: 0
      }, {
        className: "subst",
        begin: "%[0-9]+",
        relevance: 0
      }, {
        className: "subst",
        begin: "%!S+",
        relevance: 0
      }, {
        className: "meta",
        begin: /^\s*\.[\w_-]+/
      }]
    }
  }
  hD2.exports = G59
})
// @from(Start 4933331, End 4935462)
xD2 = Y((ag3, kD2) => {
  function Z59(I) {
    let G = {
        $pattern: /[a-zA-Z][a-zA-Z0-9_?]*/,
        keyword: "if then else do while until for loop import with is as where when by data constant integer real text name boolean symbol infix prefix postfix block tree",
        literal: "true false nil",
        built_in: "in mod rem and or xor not abs sign floor ceil sqrt sin cos tan asin acos atan exp expm1 log log2 log10 log1p pi at text_length text_range text_find text_replace contains page slide basic_slide title_slide title subtitle fade_in fade_out fade_at clear_color color line_color line_width texture_wrap texture_transform texture scale_?x scale_?y scale_?z? translate_?x translate_?y translate_?z? rotate_?x rotate_?y rotate_?z? rectangle circle ellipse sphere path line_to move_to quad_to curve_to theme background contents locally time mouse_?x mouse_?y mouse_buttons " + "ObjectLoader Animate MovieCredits Slides Filters Shading Materials LensFlare Mapping VLCAudioVideo StereoDecoder PointCloud NetworkAccess RemoteControl RegExp ChromaKey Snowfall NodeJS Speech Charts"
      },
      Z = {
        className: "string",
        begin: '"',
        end: '"',
        illegal: "\\n"
      },
      C = {
        className: "string",
        begin: "'",
        end: "'",
        illegal: "\\n"
      },
      W = {
        className: "string",
        begin: "<<",
        end: ">>"
      },
      w = {
        className: "number",
        begin: "[0-9]+#[0-9A-Z_]+(\\.[0-9-A-Z_]+)?#?([Ee][+-]?[0-9]+)?"
      },
      B = {
        beginKeywords: "import",
        end: "$",
        keywords: G,
        contains: [Z]
      },
      A = {
        className: "function",
        begin: /[a-z][^\n]*->/,
        returnBegin: !0,
        end: /->/,
        contains: [I.inherit(I.TITLE_MODE, {
          starts: {
            endsWithParent: !0,
            keywords: G
          }
        })]
      };
    return {
      name: "XL",
      aliases: ["tao"],
      keywords: G,
      contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, Z, C, W, A, B, w, I.NUMBER_MODE]
    }
  }
  kD2.exports = Z59
})
// @from(Start 4935468, End 4941744)
pD2 = Y((sg3, cD2) => {
  function C59(I) {
    return {
      name: "XQuery",
      aliases: ["xpath", "xq"],
      case_insensitive: !1,
      illegal: /(proc)|(abstract)|(extends)|(until)|(#)/,
      keywords: {
        $pattern: /[a-zA-Z$][a-zA-Z0-9_:-]*/,
        keyword: "module schema namespace boundary-space preserve no-preserve strip default collation base-uri ordering context decimal-format decimal-separator copy-namespaces empty-sequence except exponent-separator external grouping-separator inherit no-inherit lax minus-sign per-mille percent schema-attribute schema-element strict unordered zero-digit declare import option function validate variable for at in let where order group by return if then else tumbling sliding window start when only end previous next stable ascending descending allowing empty greatest least some every satisfies switch case typeswitch try catch and or to union intersect instance of treat as castable cast map array delete insert into replace value rename copy modify update",
        type: "item document-node node attribute document element comment namespace namespace-node processing-instruction text construction xs:anyAtomicType xs:untypedAtomic xs:duration xs:time xs:decimal xs:float xs:double xs:gYearMonth xs:gYear xs:gMonthDay xs:gMonth xs:gDay xs:boolean xs:base64Binary xs:hexBinary xs:anyURI xs:QName xs:NOTATION xs:dateTime xs:dateTimeStamp xs:date xs:string xs:normalizedString xs:token xs:language xs:NMTOKEN xs:Name xs:NCName xs:ID xs:IDREF xs:ENTITY xs:integer xs:nonPositiveInteger xs:negativeInteger xs:long xs:int xs:short xs:byte xs:nonNegativeInteger xs:unisignedLong xs:unsignedInt xs:unsignedShort xs:unsignedByte xs:positiveInteger xs:yearMonthDuration xs:dayTimeDuration",
        literal: "eq ne lt le gt ge is self:: child:: descendant:: descendant-or-self:: attribute:: following:: following-sibling:: parent:: ancestor:: ancestor-or-self:: preceding:: preceding-sibling:: NaN"
      },
      contains: [{
        className: "variable",
        begin: /[$][\w\-:]+/
      }, {
        className: "built_in",
        variants: [{
          begin: /\barray:/,
          end: /(?:append|filter|flatten|fold-(?:left|right)|for-each(?:-pair)?|get|head|insert-before|join|put|remove|reverse|size|sort|subarray|tail)\b/
        }, {
          begin: /\bmap:/,
          end: /(?:contains|entry|find|for-each|get|keys|merge|put|remove|size)\b/
        }, {
          begin: /\bmath:/,
          end: /(?:a(?:cos|sin|tan[2]?)|cos|exp(?:10)?|log(?:10)?|pi|pow|sin|sqrt|tan)\b/
        }, {
          begin: /\bop:/,
          end: /\(/,
          excludeEnd: !0
        }, {
          begin: /\bfn:/,
          end: /\(/,
          excludeEnd: !0
        }, {
          begin: /[^</$:'"-]\b(?:abs|accumulator-(?:after|before)|adjust-(?:date(?:Time)?|time)-to-timezone|analyze-string|apply|available-(?:environment-variables|system-properties)|avg|base-uri|boolean|ceiling|codepoints?-(?:equal|to-string)|collation-key|collection|compare|concat|contains(?:-token)?|copy-of|count|current(?:-)?(?:date(?:Time)?|time|group(?:ing-key)?|output-uri|merge-(?:group|key))?data|dateTime|days?-from-(?:date(?:Time)?|duration)|deep-equal|default-(?:collation|language)|distinct-values|document(?:-uri)?|doc(?:-available)?|element-(?:available|with-id)|empty|encode-for-uri|ends-with|environment-variable|error|escape-html-uri|exactly-one|exists|false|filter|floor|fold-(?:left|right)|for-each(?:-pair)?|format-(?:date(?:Time)?|time|integer|number)|function-(?:arity|available|lookup|name)|generate-id|has-children|head|hours-from-(?:dateTime|duration|time)|id(?:ref)?|implicit-timezone|in-scope-prefixes|index-of|innermost|insert-before|iri-to-uri|json-(?:doc|to-xml)|key|lang|last|load-xquery-module|local-name(?:-from-QName)?|(?:lower|upper)-case|matches|max|minutes-from-(?:dateTime|duration|time)|min|months?-from-(?:date(?:Time)?|duration)|name(?:space-uri-?(?:for-prefix|from-QName)?)?|nilled|node-name|normalize-(?:space|unicode)|not|number|one-or-more|outermost|parse-(?:ietf-date|json)|path|position|(?:prefix-from-)?QName|random-number-generator|regex-group|remove|replace|resolve-(?:QName|uri)|reverse|root|round(?:-half-to-even)?|seconds-from-(?:dateTime|duration|time)|snapshot|sort|starts-with|static-base-uri|stream-available|string-?(?:join|length|to-codepoints)?|subsequence|substring-?(?:after|before)?|sum|system-property|tail|timezone-from-(?:date(?:Time)?|time)|tokenize|trace|trans(?:form|late)|true|type-available|unordered|unparsed-(?:entity|text)?-?(?:public-id|uri|available|lines)?|uri-collection|xml-to-json|years?-from-(?:date(?:Time)?|duration)|zero-or-one)\b/
        }, {
          begin: /\blocal:/,
          end: /\(/,
          excludeEnd: !0
        }, {
          begin: /\bzip:/,
          end: /(?:zip-file|(?:xml|html|text|binary)-entry| (?:update-)?entries)\b/
        }, {
          begin: /\b(?:util|db|functx|app|xdmp|xmldb):/,
          end: /\(/,
          excludeEnd: !0
        }]
      }, {
        className: "string",
        variants: [{
          begin: /"/,
          end: /"/,
          contains: [{
            begin: /""/,
            relevance: 0
          }]
        }, {
          begin: /'/,
          end: /'/,
          contains: [{
            begin: /''/,
            relevance: 0
          }]
        }]
      }, {
        className: "number",
        begin: /(\b0[0-7_]+)|(\b0x[0-9a-fA-F_]+)|(\b[1-9][0-9_]*(\.[0-9_]+)?)|[0_]\b/,
        relevance: 0
      }, {
        className: "comment",
        begin: /\(:/,
        end: /:\)/,
        relevance: 10,
        contains: [{
          className: "doctag",
          begin: /@\w+/
        }]
      }, {
        className: "meta",
        begin: /%[\w\-:]+/
      }, {
        className: "title",
        begin: /\bxquery version "[13]\.[01]"\s?(?:encoding ".+")?/,
        end: /;/
      }, {
        beginKeywords: "element attribute comment document processing-instruction",
        end: /\{/,
        excludeEnd: !0
      }, {
        begin: /<([\w._:-]+)(\s+\S*=('|").*('|"))?>/,
        end: /(\/[\w._:-]+>)/,
        subLanguage: "xml",
        contains: [{
          begin: /\{/,
          end: /\}/,
          subLanguage: "xquery"
        }, "self"]
      }]
    }
  }
  cD2.exports = C59
})
// @from(Start 4941750, End 4943971)
nD2 = Y((og3, iD2) => {
  function W59(I) {
    let d = {
        className: "string",
        contains: [I.BACKSLASH_ESCAPE],
        variants: [I.inherit(I.APOS_STRING_MODE, {
          illegal: null
        }), I.inherit(I.QUOTE_STRING_MODE, {
          illegal: null
        })]
      },
      G = I.UNDERSCORE_TITLE_MODE,
      Z = {
        variants: [I.BINARY_NUMBER_MODE, I.C_NUMBER_MODE]
      },
      C = "namespace class interface use extends function return abstract final public protected private static deprecated throw try catch Exception echo empty isset instanceof unset let var new const self require if else elseif switch case default do while loop for continue break likely unlikely __LINE__ __FILE__ __DIR__ __FUNCTION__ __CLASS__ __TRAIT__ __METHOD__ __NAMESPACE__ array boolean float double integer object resource string char long unsigned bool int uint ulong uchar true false null undefined";
    return {
      name: "Zephir",
      aliases: ["zep"],
      keywords: C,
      contains: [I.C_LINE_COMMENT_MODE, I.COMMENT(/\/\*/, /\*\//, {
        contains: [{
          className: "doctag",
          begin: /@[A-Za-z]+/
        }]
      }), {
        className: "string",
        begin: /<<<['"]?\w+['"]?$/,
        end: /^\w+;/,
        contains: [I.BACKSLASH_ESCAPE]
      }, {
        begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
      }, {
        className: "function",
        beginKeywords: "function fn",
        end: /[;{]/,
        excludeEnd: !0,
        illegal: /\$|\[|%/,
        contains: [G, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: C,
          contains: ["self", I.C_BLOCK_COMMENT_MODE, d, Z]
        }]
      }, {
        className: "class",
        beginKeywords: "class interface",
        end: /\{/,
        excludeEnd: !0,
        illegal: /[:($"]/,
        contains: [{
          beginKeywords: "extends implements"
        }, G]
      }, {
        beginKeywords: "namespace",
        end: /;/,
        illegal: /[.']/,
        contains: [G]
      }, {
        beginKeywords: "use",
        end: /;/,
        contains: [G]
      }, {
        begin: /=>/
      }, d, Z]
    }
  }
  iD2.exports = W59
})
// @from(Start 4943977, End 4951637)
UR = Y((eg3, rD2) => {
  var M1 = Aw2();
  M1.registerLanguage("1c", Xw2());
  M1.registerLanguage("abnf", _w2());
  M1.registerLanguage("accesslog", Fw2());
  M1.registerLanguage("actionscript", Jw2());
  M1.registerLanguage("ada", Nw2());
  M1.registerLanguage("angelscript", Qw2());
  M1.registerLanguage("apache", qw2());
  M1.registerLanguage("applescript", Mw2());
  M1.registerLanguage("arcade", Lw2());
  M1.registerLanguage("arduino", Pw2());
  M1.registerLanguage("armasm", uw2());
  M1.registerLanguage("xml", lw2());
  M1.registerLanguage("asciidoc", jw2());
  M1.registerLanguage("aspectj", xw2());
  M1.registerLanguage("autohotkey", pw2());
  M1.registerLanguage("autoit", nw2());
  M1.registerLanguage("avrasm", aw2());
  M1.registerLanguage("awk", ow2());
  M1.registerLanguage("axapta", tw2());
  M1.registerLanguage("bash", dB2());
  M1.registerLanguage("basic", ZB2());
  M1.registerLanguage("bnf", WB2());
  M1.registerLanguage("brainfuck", BB2());
  M1.registerLanguage("c-like", VB2());
  M1.registerLanguage("c", YB2());
  M1.registerLanguage("cal", DB2());
  M1.registerLanguage("capnproto", FB2());
  M1.registerLanguage("ceylon", JB2());
  M1.registerLanguage("clean", NB2());
  M1.registerLanguage("clojure", QB2());
  M1.registerLanguage("clojure-repl", qB2());
  M1.registerLanguage("cmake", UB2());
  M1.registerLanguage("coffeescript", EB2());
  M1.registerLanguage("coq", SB2());
  M1.registerLanguage("cos", yB2());
  M1.registerLanguage("cpp", $B2());
  M1.registerLanguage("crmsh", TB2());
  M1.registerLanguage("crystal", mB2());
  M1.registerLanguage("csharp", bB2());
  M1.registerLanguage("csp", jB2());
  M1.registerLanguage("css", xB2());
  M1.registerLanguage("d", pB2());
  M1.registerLanguage("markdown", nB2());
  M1.registerLanguage("dart", aB2());
  M1.registerLanguage("delphi", oB2());
  M1.registerLanguage("diff", tB2());
  M1.registerLanguage("django", dA2());
  M1.registerLanguage("dns", ZA2());
  M1.registerLanguage("dockerfile", WA2());
  M1.registerLanguage("dos", BA2());
  M1.registerLanguage("dsconfig", VA2());
  M1.registerLanguage("dts", YA2());
  M1.registerLanguage("dust", DA2());
  M1.registerLanguage("ebnf", FA2());
  M1.registerLanguage("elixir", JA2());
  M1.registerLanguage("elm", NA2());
  M1.registerLanguage("ruby", fA2());
  M1.registerLanguage("erb", RA2());
  M1.registerLanguage("erlang-repl", vA2());
  M1.registerLanguage("erlang", MA2());
  M1.registerLanguage("excel", LA2());
  M1.registerLanguage("fix", PA2());
  M1.registerLanguage("flix", uA2());
  M1.registerLanguage("fortran", OA2());
  M1.registerLanguage("fsharp", lA2());
  M1.registerLanguage("gams", hA2());
  M1.registerLanguage("gauss", kA2());
  M1.registerLanguage("gcode", cA2());
  M1.registerLanguage("gherkin", iA2());
  M1.registerLanguage("glsl", rA2());
  M1.registerLanguage("gml", sA2());
  M1.registerLanguage("go", eA2());
  M1.registerLanguage("golo", IV2());
  M1.registerLanguage("gradle", GV2());
  M1.registerLanguage("groovy", CV2());
  M1.registerLanguage("haml", wV2());
  M1.registerLanguage("handlebars", VV2());
  M1.registerLanguage("haskell", YV2());
  M1.registerLanguage("haxe", DV2());
  M1.registerLanguage("hsp", FV2());
  M1.registerLanguage("htmlbars", KV2());
  M1.registerLanguage("http", zV2());
  M1.registerLanguage("hy", fV2());
  M1.registerLanguage("inform7", RV2());
  M1.registerLanguage("ini", MV2());
  M1.registerLanguage("irpf90", LV2());
  M1.registerLanguage("isbl", PV2());
  M1.registerLanguage("java", uV2());
  M1.registerLanguage("javascript", mV2());
  M1.registerLanguage("jboss-cli", bV2());
  M1.registerLanguage("json", jV2());
  M1.registerLanguage("julia", xV2());
  M1.registerLanguage("julia-repl", pV2());
  M1.registerLanguage("kotlin", nV2());
  M1.registerLanguage("lasso", aV2());
  M1.registerLanguage("latex", oV2());
  M1.registerLanguage("ldif", tV2());
  M1.registerLanguage("leaf", dX2());
  M1.registerLanguage("less", WX2());
  M1.registerLanguage("lisp", BX2());
  M1.registerLanguage("livecodeserver", VX2());
  M1.registerLanguage("livescript", YX2());
  M1.registerLanguage("llvm", DX2());
  M1.registerLanguage("lsl", FX2());
  M1.registerLanguage("lua", JX2());
  M1.registerLanguage("makefile", NX2());
  M1.registerLanguage("mathematica", RX2());
  M1.registerLanguage("matlab", vX2());
  M1.registerLanguage("maxima", MX2());
  M1.registerLanguage("mel", LX2());
  M1.registerLanguage("mercury", PX2());
  M1.registerLanguage("mipsasm", uX2());
  M1.registerLanguage("mizar", OX2());
  M1.registerLanguage("perl", hX2());
  M1.registerLanguage("mojolicious", kX2());
  M1.registerLanguage("monkey", cX2());
  M1.registerLanguage("moonscript", iX2());
  M1.registerLanguage("n1ql", rX2());
  M1.registerLanguage("nginx", sX2());
  M1.registerLanguage("nim", eX2());
  M1.registerLanguage("nix", IY2());
  M1.registerLanguage("node-repl", GY2());
  M1.registerLanguage("nsis", CY2());
  M1.registerLanguage("objectivec", wY2());
  M1.registerLanguage("ocaml", AY2());
  M1.registerLanguage("openscad", XY2());
  M1.registerLanguage("oxygene", _Y2());
  M1.registerLanguage("parser3", HY2());
  M1.registerLanguage("pf", gY2());
  M1.registerLanguage("pgsql", KY2());
  M1.registerLanguage("php", zY2());
  M1.registerLanguage("php-template", fY2());
  M1.registerLanguage("plaintext", RY2());
  M1.registerLanguage("pony", vY2());
  M1.registerLanguage("powershell", MY2());
  M1.registerLanguage("processing", LY2());
  M1.registerLanguage("profile", PY2());
  M1.registerLanguage("prolog", uY2());
  M1.registerLanguage("properties", OY2());
  M1.registerLanguage("protobuf", lY2());
  M1.registerLanguage("puppet", hY2());
  M1.registerLanguage("purebasic", kY2());
  M1.registerLanguage("python", cY2());
  M1.registerLanguage("python-repl", iY2());
  M1.registerLanguage("q", rY2());
  M1.registerLanguage("qml", sY2());
  M1.registerLanguage("r", eY2());
  M1.registerLanguage("reasonml", I_2());
  M1.registerLanguage("rib", G_2());
  M1.registerLanguage("roboconf", C_2());
  M1.registerLanguage("routeros", w_2());
  M1.registerLanguage("rsl", A_2());
  M1.registerLanguage("ruleslanguage", X_2());
  M1.registerLanguage("rust", __2());
  M1.registerLanguage("sas", H_2());
  M1.registerLanguage("scala", g_2());
  M1.registerLanguage("scheme", K_2());
  M1.registerLanguage("scilab", z_2());
  M1.registerLanguage("scss", f_2());
  M1.registerLanguage("shell", R_2());
  M1.registerLanguage("smali", v_2());
  M1.registerLanguage("smalltalk", M_2());
  M1.registerLanguage("sml", L_2());
  M1.registerLanguage("sqf", P_2());
  M1.registerLanguage("sql_more", u_2());
  M1.registerLanguage("sql", m_2());
  M1.registerLanguage("stan", b_2());
  M1.registerLanguage("stata", j_2());
  M1.registerLanguage("step21", x_2());
  M1.registerLanguage("stylus", p_2());
  M1.registerLanguage("subunit", n_2());
  M1.registerLanguage("swift", GD2());
  M1.registerLanguage("taggerscript", CD2());
  M1.registerLanguage("yaml", wD2());
  M1.registerLanguage("tap", AD2());
  M1.registerLanguage("tcl", YD2());
  M1.registerLanguage("thrift", DD2());
  M1.registerLanguage("tp", FD2());
  M1.registerLanguage("twig", JD2());
  M1.registerLanguage("typescript", qD2());
  M1.registerLanguage("vala", UD2());
  M1.registerLanguage("vbnet", MD2());
  M1.registerLanguage("vbscript", yD2());
  M1.registerLanguage("vbscript-html", $D2());
  M1.registerLanguage("verilog", TD2());
  M1.registerLanguage("vhdl", mD2());
  M1.registerLanguage("vim", bD2());
  M1.registerLanguage("x86asm", jD2());
  M1.registerLanguage("xl", xD2());
  M1.registerLanguage("xquery", pD2());
  M1.registerLanguage("zephir", nD2());
  rD2.exports = M1
})
// @from(Start 4951643, End 4953539)
la = Y((B59) => {
  var w59 = [65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111];
  B59.REPLACEMENT_CHARACTER = "�";
  B59.CODE_POINTS = {
    EOF: -1,
    NULL: 0,
    TABULATION: 9,
    CARRIAGE_RETURN: 13,
    LINE_FEED: 10,
    FORM_FEED: 12,
    SPACE: 32,
    EXCLAMATION_MARK: 33,
    QUOTATION_MARK: 34,
    NUMBER_SIGN: 35,
    AMPERSAND: 38,
    APOSTROPHE: 39,
    HYPHEN_MINUS: 45,
    SOLIDUS: 47,
    DIGIT_0: 48,
    DIGIT_9: 57,
    SEMICOLON: 59,
    LESS_THAN_SIGN: 60,
    EQUALS_SIGN: 61,
    GREATER_THAN_SIGN: 62,
    QUESTION_MARK: 63,
    LATIN_CAPITAL_A: 65,
    LATIN_CAPITAL_F: 70,
    LATIN_CAPITAL_X: 88,
    LATIN_CAPITAL_Z: 90,
    RIGHT_SQUARE_BRACKET: 93,
    GRAVE_ACCENT: 96,
    LATIN_SMALL_A: 97,
    LATIN_SMALL_F: 102,
    LATIN_SMALL_X: 120,
    LATIN_SMALL_Z: 122,
    REPLACEMENT_CHARACTER: 65533
  };
  B59.CODE_POINT_SEQUENCES = {
    DASH_DASH_STRING: [45, 45],
    DOCTYPE_STRING: [68, 79, 67, 84, 89, 80, 69],
    CDATA_START_STRING: [91, 67, 68, 65, 84, 65, 91],
    SCRIPT_STRING: [115, 99, 114, 105, 112, 116],
    PUBLIC_STRING: [80, 85, 66, 76, 73, 67],
    SYSTEM_STRING: [83, 89, 83, 84, 69, 77]
  };
  B59.isSurrogate = function(I) {
    return I >= 55296 && I <= 57343
  };
  B59.isSurrogatePair = function(I) {
    return I >= 56320 && I <= 57343
  };
  B59.getSurrogatePairCodePoint = function(I, d) {
    return (I - 55296) * 1024 + 9216 + d
  };
  B59.isControlCodePoint = function(I) {
    return I !== 32 && I !== 10 && I !== 13 && I !== 9 && I !== 12 && I >= 1 && I <= 31 || I >= 127 && I <= 159
  };
  B59.isUndefinedCodePoint = function(I) {
    return I >= 64976 && I <= 65007 || w59.indexOf(I) > -1
  }
})
// @from(Start 4953545, End 4957800)
ba = Y((IJ3, aD2) => {
  aD2.exports = {
    controlCharacterInInputStream: "control-character-in-input-stream",
    noncharacterInInputStream: "noncharacter-in-input-stream",
    surrogateInInputStream: "surrogate-in-input-stream",
    nonVoidHtmlElementStartTagWithTrailingSolidus: "non-void-html-element-start-tag-with-trailing-solidus",
    endTagWithAttributes: "end-tag-with-attributes",
    endTagWithTrailingSolidus: "end-tag-with-trailing-solidus",
    unexpectedSolidusInTag: "unexpected-solidus-in-tag",
    unexpectedNullCharacter: "unexpected-null-character",
    unexpectedQuestionMarkInsteadOfTagName: "unexpected-question-mark-instead-of-tag-name",
    invalidFirstCharacterOfTagName: "invalid-first-character-of-tag-name",
    unexpectedEqualsSignBeforeAttributeName: "unexpected-equals-sign-before-attribute-name",
    missingEndTagName: "missing-end-tag-name",
    unexpectedCharacterInAttributeName: "unexpected-character-in-attribute-name",
    unknownNamedCharacterReference: "unknown-named-character-reference",
    missingSemicolonAfterCharacterReference: "missing-semicolon-after-character-reference",
    unexpectedCharacterAfterDoctypeSystemIdentifier: "unexpected-character-after-doctype-system-identifier",
    unexpectedCharacterInUnquotedAttributeValue: "unexpected-character-in-unquoted-attribute-value",
    eofBeforeTagName: "eof-before-tag-name",
    eofInTag: "eof-in-tag",
    missingAttributeValue: "missing-attribute-value",
    missingWhitespaceBetweenAttributes: "missing-whitespace-between-attributes",
    missingWhitespaceAfterDoctypePublicKeyword: "missing-whitespace-after-doctype-public-keyword",
    missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers: "missing-whitespace-between-doctype-public-and-system-identifiers",
    missingWhitespaceAfterDoctypeSystemKeyword: "missing-whitespace-after-doctype-system-keyword",
    missingQuoteBeforeDoctypePublicIdentifier: "missing-quote-before-doctype-public-identifier",
    missingQuoteBeforeDoctypeSystemIdentifier: "missing-quote-before-doctype-system-identifier",
    missingDoctypePublicIdentifier: "missing-doctype-public-identifier",
    missingDoctypeSystemIdentifier: "missing-doctype-system-identifier",
    abruptDoctypePublicIdentifier: "abrupt-doctype-public-identifier",
    abruptDoctypeSystemIdentifier: "abrupt-doctype-system-identifier",
    cdataInHtmlContent: "cdata-in-html-content",
    incorrectlyOpenedComment: "incorrectly-opened-comment",
    eofInScriptHtmlCommentLikeText: "eof-in-script-html-comment-like-text",
    eofInDoctype: "eof-in-doctype",
    nestedComment: "nested-comment",
    abruptClosingOfEmptyComment: "abrupt-closing-of-empty-comment",
    eofInComment: "eof-in-comment",
    incorrectlyClosedComment: "incorrectly-closed-comment",
    eofInCdata: "eof-in-cdata",
    absenceOfDigitsInNumericCharacterReference: "absence-of-digits-in-numeric-character-reference",
    nullCharacterReference: "null-character-reference",
    surrogateCharacterReference: "surrogate-character-reference",
    characterReferenceOutsideUnicodeRange: "character-reference-outside-unicode-range",
    controlCharacterReference: "control-character-reference",
    noncharacterCharacterReference: "noncharacter-character-reference",
    missingWhitespaceBeforeDoctypeName: "missing-whitespace-before-doctype-name",
    missingDoctypeName: "missing-doctype-name",
    invalidCharacterSequenceAfterDoctypeName: "invalid-character-sequence-after-doctype-name",
    duplicateAttribute: "duplicate-attribute",
    nonConformingDoctype: "non-conforming-doctype",
    missingDoctype: "missing-doctype",
    misplacedDoctype: "misplaced-doctype",
    endTagWithoutMatchingOpenElement: "end-tag-without-matching-open-element",
    closingOfElementWithOpenChildElements: "closing-of-element-with-open-child-elements",
    disallowedContentInNoscriptInHead: "disallowed-content-in-noscript-in-head",
    openElementsLeftAfterEof: "open-elements-left-after-eof",
    abandonedHeadElementChild: "abandoned-head-element-child",
    misplacedStartTagForHeadElement: "misplaced-start-tag-for-head-element",
    nestedNoscriptInHead: "nested-noscript-in-head",
    eofInElementThatCanContainOnlyText: "eof-in-element-that-can-contain-only-text"
  }
})
// @from(Start 4957806, End 4960217)
eD2 = Y((dJ3, oD2) => {
  var vR = la(),
    dg1 = ba(),
    xJ = vR.CODE_POINTS;
  class sD2 {
    constructor() {
      this.html = null, this.pos = -1, this.lastGapPos = -1, this.lastCharPos = -1, this.gapStack = [], this.skipNextNewLine = !1, this.lastChunkWritten = !1, this.endOfChunkHit = !1, this.bufferWaterline = 65536
    }
    _err() {}
    _addGap() {
      this.gapStack.push(this.lastGapPos), this.lastGapPos = this.pos
    }
    _processSurrogate(I) {
      if (this.pos !== this.lastCharPos) {
        let d = this.html.charCodeAt(this.pos + 1);
        if (vR.isSurrogatePair(d)) return this.pos++, this._addGap(), vR.getSurrogatePairCodePoint(I, d)
      } else if (!this.lastChunkWritten) return this.endOfChunkHit = !0, xJ.EOF;
      return this._err(dg1.surrogateInInputStream), I
    }
    dropParsedChunk() {
      if (this.pos > this.bufferWaterline) this.lastCharPos -= this.pos, this.html = this.html.substring(this.pos), this.pos = 0, this.lastGapPos = -1, this.gapStack = []
    }
    write(I, d) {
      if (this.html) this.html += I;
      else this.html = I;
      this.lastCharPos = this.html.length - 1, this.endOfChunkHit = !1, this.lastChunkWritten = d
    }
    insertHtmlAtCurrentPos(I) {
      this.html = this.html.substring(0, this.pos + 1) + I + this.html.substring(this.pos + 1, this.html.length), this.lastCharPos = this.html.length - 1, this.endOfChunkHit = !1
    }
    advance() {
      if (this.pos++, this.pos > this.lastCharPos) return this.endOfChunkHit = !this.lastChunkWritten, xJ.EOF;
      let I = this.html.charCodeAt(this.pos);
      if (this.skipNextNewLine && I === xJ.LINE_FEED) return this.skipNextNewLine = !1, this._addGap(), this.advance();
      if (I === xJ.CARRIAGE_RETURN) return this.skipNextNewLine = !0, xJ.LINE_FEED;
      if (this.skipNextNewLine = !1, vR.isSurrogate(I)) I = this._processSurrogate(I);
      if (!(I > 31 && I < 127 || I === xJ.LINE_FEED || I === xJ.CARRIAGE_RETURN || I > 159 && I < 64976)) this._checkForProblematicCharacters(I);
      return I
    }
    _checkForProblematicCharacters(I) {
      if (vR.isControlCodePoint(I)) this._err(dg1.controlCharacterInInputStream);
      else if (vR.isUndefinedCodePoint(I)) this._err(dg1.noncharacterInInputStream)
    }
    retreat() {
      if (this.pos === this.lastGapPos) this.lastGapPos = this.gapStack.pop(), this.pos--;
      this.pos--
    }
  }
  oD2.exports = sD2
})