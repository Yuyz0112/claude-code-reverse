
// @from(Start 3379862, End 3390673)
bV = Y((AW3, bt0) => {
  var {
    defineProperty: yn,
    getOwnPropertyDescriptor: SS5,
    getOwnPropertyNames: LS5
  } = Object, yS5 = Object.prototype.hasOwnProperty, M6 = (I, d) => yn(I, "name", {
    value: d,
    configurable: !0
  }), PS5 = (I, d) => {
    for (var G in d) yn(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, $S5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of LS5(d))
        if (!yS5.call(I, C) && C !== G) yn(I, C, {
          get: () => d[C],
          enumerable: !(Z = SS5(d, C)) || Z.enumerable
        })
    }
    return I
  }, uS5 = (I) => $S5(yn({}, "__esModule", {
    value: !0
  }), I), Rt0 = {};
  PS5(Rt0, {
    AdaptiveRetryStrategy: () => mS5,
    CONFIG_MAX_ATTEMPTS: () => tX1,
    CONFIG_RETRY_MODE: () => $t0,
    ENV_MAX_ATTEMPTS: () => eX1,
    ENV_RETRY_MODE: () => Pt0,
    NODE_MAX_ATTEMPT_CONFIG_OPTIONS: () => lS5,
    NODE_RETRY_MODE_CONFIG_OPTIONS: () => hS5,
    StandardRetryStrategy: () => Lt0,
    defaultDelayDecider: () => vt0,
    defaultRetryDecider: () => Et0,
    getOmitRetryHeadersPlugin: () => jS5,
    getRetryAfterHint: () => lt0,
    getRetryPlugin: () => nS5,
    omitRetryHeadersMiddleware: () => ut0,
    omitRetryHeadersMiddlewareOptions: () => Tt0,
    resolveRetryConfig: () => bS5,
    retryMiddleware: () => Ot0,
    retryMiddlewareOptions: () => mt0
  });
  bt0.exports = uS5(Rt0);
  var qq = t8(),
    Ut0 = Gt0(),
    E3 = fq(),
    TS5 = M6((I, d) => {
      let G = I,
        Z = (d == null ? void 0 : d.noRetryIncrement) ?? E3.NO_RETRY_INCREMENT,
        C = (d == null ? void 0 : d.retryCost) ?? E3.RETRY_COST,
        W = (d == null ? void 0 : d.timeoutRetryCost) ?? E3.TIMEOUT_RETRY_COST,
        w = I,
        B = M6((_) => _.name === "TimeoutError" ? W : C, "getCapacityAmount"),
        A = M6((_) => B(_) <= w, "hasRetryTokens");
      return Object.freeze({
        hasRetryTokens: A,
        retrieveRetryTokens: M6((_) => {
          if (!A(_)) throw new Error("No retry token available");
          let F = B(_);
          return w -= F, F
        }, "retrieveRetryTokens"),
        releaseRetryTokens: M6((_) => {
          w += _ ?? Z, w = Math.min(w, G)
        }, "releaseRetryTokens")
      })
    }, "getDefaultRetryQuota"),
    vt0 = M6((I, d) => Math.floor(Math.min(E3.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** d * I)), "defaultDelayDecider"),
    ED = nX1(),
    Et0 = M6((I) => {
      if (!I) return !1;
      return ED.isRetryableByTrait(I) || ED.isClockSkewError(I) || ED.isThrottlingError(I) || ED.isTransientError(I)
    }, "defaultRetryDecider"),
    Mt0 = M6((I) => {
      if (I instanceof Error) return I;
      if (I instanceof Object) return Object.assign(new Error, I);
      if (typeof I === "string") return new Error(I);
      return new Error(`AWS SDK error wrapper for ${I}`)
    }, "asSdkError"),
    St0 = class I {
      constructor(d, G) {
        this.maxAttemptsProvider = d, this.mode = E3.RETRY_MODES.STANDARD, this.retryDecider = (G == null ? void 0 : G.retryDecider) ?? Et0, this.delayDecider = (G == null ? void 0 : G.delayDecider) ?? vt0, this.retryQuota = (G == null ? void 0 : G.retryQuota) ?? TS5(E3.INITIAL_RETRY_TOKENS)
      }
      shouldRetry(d, G, Z) {
        return G < Z && this.retryDecider(d) && this.retryQuota.hasRetryTokens(d)
      }
      async getMaxAttempts() {
        let d;
        try {
          d = await this.maxAttemptsProvider()
        } catch (G) {
          d = E3.DEFAULT_MAX_ATTEMPTS
        }
        return d
      }
      async retry(d, G, Z) {
        let C, W = 0,
          w = 0,
          B = await this.getMaxAttempts(),
          {
            request: A
          } = G;
        if (qq.HttpRequest.isInstance(A)) A.headers[E3.INVOCATION_ID_HEADER] = Ut0.v4();
        while (!0) try {
          if (qq.HttpRequest.isInstance(A)) A.headers[E3.REQUEST_HEADER] = `attempt=${W+1}; max=${B}`;
          if (Z == null ? void 0 : Z.beforeRequest) await Z.beforeRequest();
          let {
            response: V,
            output: X
          } = await d(G);
          if (Z == null ? void 0 : Z.afterRequest) Z.afterRequest(V);
          return this.retryQuota.releaseRetryTokens(C), X.$metadata.attempts = W + 1, X.$metadata.totalRetryDelay = w, {
            response: V,
            output: X
          }
        } catch (V) {
          let X = Mt0(V);
          if (W++, this.shouldRetry(X, W, B)) {
            C = this.retryQuota.retrieveRetryTokens(X);
            let _ = this.delayDecider(ED.isThrottlingError(X) ? E3.THROTTLING_RETRY_DELAY_BASE : E3.DEFAULT_RETRY_DELAY_BASE, W),
              F = OS5(X.$response),
              g = Math.max(F || 0, _);
            w += g, await new Promise((J) => setTimeout(J, g));
            continue
          }
          if (!X.$metadata) X.$metadata = {};
          throw X.$metadata.attempts = W, X.$metadata.totalRetryDelay = w, X
        }
      }
    };
  M6(St0, "StandardRetryStrategy");
  var Lt0 = St0,
    OS5 = M6((I) => {
      if (!qq.HttpResponse.isInstance(I)) return;
      let d = Object.keys(I.headers).find((W) => W.toLowerCase() === "retry-after");
      if (!d) return;
      let G = I.headers[d],
        Z = Number(G);
      if (!Number.isNaN(Z)) return Z * 1000;
      return new Date(G).getTime() - Date.now()
    }, "getDelayFromRetryAfterHeader"),
    yt0 = class I extends Lt0 {
      constructor(d, G) {
        let {
          rateLimiter: Z,
          ...C
        } = G ?? {};
        super(d, C);
        this.rateLimiter = Z ?? new E3.DefaultRateLimiter, this.mode = E3.RETRY_MODES.ADAPTIVE
      }
      async retry(d, G) {
        return super.retry(d, G, {
          beforeRequest: async () => {
            return this.rateLimiter.getSendToken()
          },
          afterRequest: (Z) => {
            this.rateLimiter.updateClientSendingRate(Z)
          }
        })
      }
    };
  M6(yt0, "AdaptiveRetryStrategy");
  var mS5 = yt0,
    qt0 = Fq(),
    eX1 = "AWS_MAX_ATTEMPTS",
    tX1 = "max_attempts",
    lS5 = {
      environmentVariableSelector: (I) => {
        let d = I[eX1];
        if (!d) return;
        let G = parseInt(d);
        if (Number.isNaN(G)) throw new Error(`Environment variable ${eX1} mast be a number, got "${d}"`);
        return G
      },
      configFileSelector: (I) => {
        let d = I[tX1];
        if (!d) return;
        let G = parseInt(d);
        if (Number.isNaN(G)) throw new Error(`Shared config file entry ${tX1} mast be a number, got "${d}"`);
        return G
      },
      default: E3.DEFAULT_MAX_ATTEMPTS
    },
    bS5 = M6((I) => {
      let {
        retryStrategy: d
      } = I, G = qt0.normalizeProvider(I.maxAttempts ?? E3.DEFAULT_MAX_ATTEMPTS);
      return {
        ...I,
        maxAttempts: G,
        retryStrategy: async () => {
          if (d) return d;
          if (await qt0.normalizeProvider(I.retryMode)() === E3.RETRY_MODES.ADAPTIVE) return new E3.AdaptiveRetryStrategy(G);
          return new E3.StandardRetryStrategy(G)
        }
      }
    }, "resolveRetryConfig"),
    Pt0 = "AWS_RETRY_MODE",
    $t0 = "retry_mode",
    hS5 = {
      environmentVariableSelector: (I) => I[Pt0],
      configFileSelector: (I) => I[$t0],
      default: E3.DEFAULT_RETRY_MODE
    },
    ut0 = M6(() => (I) => async (d) => {
      let {
        request: G
      } = d;
      if (qq.HttpRequest.isInstance(G)) delete G.headers[E3.INVOCATION_ID_HEADER], delete G.headers[E3.REQUEST_HEADER];
      return I(d)
    }, "omitRetryHeadersMiddleware"),
    Tt0 = {
      name: "omitRetryHeadersMiddleware",
      tags: ["RETRY", "HEADERS", "OMIT_RETRY_HEADERS"],
      relation: "before",
      toMiddleware: "awsAuthMiddleware",
      override: !0
    },
    jS5 = M6((I) => ({
      applyToStack: (d) => {
        d.addRelativeTo(ut0(), Tt0)
      }
    }), "getOmitRetryHeadersPlugin"),
    kS5 = h2(),
    xS5 = ft0(),
    Ot0 = M6((I) => (d, G) => async (Z) => {
      var C;
      let W = await I.retryStrategy(),
        w = await I.maxAttempts();
      if (cS5(W)) {
        W = W;
        let B = await W.acquireInitialRetryToken(G.partition_id),
          A = new Error,
          V = 0,
          X = 0,
          {
            request: _
          } = Z,
          F = qq.HttpRequest.isInstance(_);
        if (F) _.headers[E3.INVOCATION_ID_HEADER] = Ut0.v4();
        while (!0) try {
          if (F) _.headers[E3.REQUEST_HEADER] = `attempt=${V+1}; max=${w}`;
          let {
            response: g,
            output: J
          } = await d(Z);
          return W.recordSuccess(B), J.$metadata.attempts = V + 1, J.$metadata.totalRetryDelay = X, {
            response: g,
            output: J
          }
        } catch (g) {
          let J = pS5(g);
          if (A = Mt0(g), F && xS5.isStreamingPayload(_)) throw (C = G.logger instanceof kS5.NoOpLogger ? console : G.logger) == null || C.warn("An error was encountered in a non-retryable streaming request."), A;
          try {
            B = await W.refreshRetryTokenForRetry(B, J)
          } catch (Q) {
            if (!A.$metadata) A.$metadata = {};
            throw A.$metadata.attempts = V + 1, A.$metadata.totalRetryDelay = X, A
          }
          V = B.getRetryCount();
          let K = B.getRetryDelay();
          X += K, await new Promise((Q) => setTimeout(Q, K))
        }
      } else {
        if (W = W, W == null ? void 0 : W.mode) G.userAgent = [...G.userAgent || [],
          ["cfg/retry-mode", W.mode]
        ];
        return W.retry(d, Z)
      }
    }, "retryMiddleware"),
    cS5 = M6((I) => typeof I.acquireInitialRetryToken !== "undefined" && typeof I.refreshRetryTokenForRetry !== "undefined" && typeof I.recordSuccess !== "undefined", "isRetryStrategyV2"),
    pS5 = M6((I) => {
      let d = {
          error: I,
          errorType: iS5(I)
        },
        G = lt0(I.$response);
      if (G) d.retryAfterHint = G;
      return d
    }, "getRetryErrorInfo"),
    iS5 = M6((I) => {
      if (ED.isThrottlingError(I)) return "THROTTLING";
      if (ED.isTransientError(I)) return "TRANSIENT";
      if (ED.isServerError(I)) return "SERVER_ERROR";
      return "CLIENT_ERROR"
    }, "getRetryErrorType"),
    mt0 = {
      name: "retryMiddleware",
      tags: ["RETRY"],
      step: "finalizeRequest",
      priority: "high",
      override: !0
    },
    nS5 = M6((I) => ({
      applyToStack: (d) => {
        d.add(Ot0(I), mt0)
      }
    }), "getRetryPlugin"),
    lt0 = M6((I) => {
      if (!qq.HttpResponse.isInstance(I)) return;
      let d = Object.keys(I.headers).find((W) => W.toLowerCase() === "retry-after");
      if (!d) return;
      let G = I.headers[d],
        Z = Number(G);
      if (!Number.isNaN(Z)) return new Date(Z * 1000);
      return new Date(G)
    }, "getRetryAfterHint")
})
// @from(Start 3390679, End 3391056)
kt0 = Y((ht0) => {
  Object.defineProperty(ht0, "__esModule", {
    value: !0
  });
  ht0.resolveClientEndpointParameters = void 0;
  var rS5 = (I) => {
    return {
      ...I,
      useDualstackEndpoint: I.useDualstackEndpoint ?? !1,
      useFipsEndpoint: I.useFipsEndpoint ?? !1,
      defaultSigningName: "bedrock"
    }
  };
  ht0.resolveClientEndpointParameters = rS5
})
// @from(Start 3391062, End 3395005)
xt0 = Y((XW3, aS5) => {
  aS5.exports = {
    name: "@aws-sdk/client-bedrock-runtime",
    description: "AWS SDK for JavaScript Bedrock Runtime Client for Node.js, Browser and React Native",
    version: "3.423.0",
    scripts: {
      build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
      "build:cjs": "tsc -p tsconfig.cjs.json",
      "build:docs": "typedoc",
      "build:es": "tsc -p tsconfig.es.json",
      "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
      "build:types": "tsc -p tsconfig.types.json",
      "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
      clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
      "extract:docs": "api-extractor run --local",
      "generate:client": "node ../../scripts/generate-clients/single-service --solo bedrock-runtime"
    },
    main: "./dist-cjs/index.js",
    types: "./dist-types/index.d.ts",
    module: "./dist-es/index.js",
    sideEffects: !1,
    dependencies: {
      "@aws-crypto/sha256-browser": "3.0.0",
      "@aws-crypto/sha256-js": "3.0.0",
      "@aws-sdk/client-sts": "3.423.0",
      "@aws-sdk/credential-provider-node": "3.423.0",
      "@aws-sdk/middleware-host-header": "3.418.0",
      "@aws-sdk/middleware-logger": "3.418.0",
      "@aws-sdk/middleware-recursion-detection": "3.418.0",
      "@aws-sdk/middleware-signing": "3.418.0",
      "@aws-sdk/middleware-user-agent": "3.418.0",
      "@aws-sdk/region-config-resolver": "3.418.0",
      "@aws-sdk/types": "3.418.0",
      "@aws-sdk/util-endpoints": "3.418.0",
      "@aws-sdk/util-user-agent-browser": "3.418.0",
      "@aws-sdk/util-user-agent-node": "3.418.0",
      "@smithy/config-resolver": "^2.0.10",
      "@smithy/eventstream-serde-browser": "^2.0.9",
      "@smithy/eventstream-serde-config-resolver": "^2.0.9",
      "@smithy/eventstream-serde-node": "^2.0.9",
      "@smithy/fetch-http-handler": "^2.1.5",
      "@smithy/hash-node": "^2.0.9",
      "@smithy/invalid-dependency": "^2.0.9",
      "@smithy/middleware-content-length": "^2.0.11",
      "@smithy/middleware-endpoint": "^2.0.9",
      "@smithy/middleware-retry": "^2.0.12",
      "@smithy/middleware-serde": "^2.0.9",
      "@smithy/middleware-stack": "^2.0.2",
      "@smithy/node-config-provider": "^2.0.12",
      "@smithy/node-http-handler": "^2.1.5",
      "@smithy/protocol-http": "^3.0.5",
      "@smithy/smithy-client": "^2.1.6",
      "@smithy/types": "^2.3.3",
      "@smithy/url-parser": "^2.0.9",
      "@smithy/util-base64": "^2.0.0",
      "@smithy/util-body-length-browser": "^2.0.0",
      "@smithy/util-body-length-node": "^2.1.0",
      "@smithy/util-defaults-mode-browser": "^2.0.10",
      "@smithy/util-defaults-mode-node": "^2.0.12",
      "@smithy/util-retry": "^2.0.2",
      "@smithy/util-stream": "^2.0.12",
      "@smithy/util-utf8": "^2.0.0",
      tslib: "^2.5.0"
    },
    devDependencies: {
      "@smithy/service-client-documentation-generator": "^2.0.0",
      "@tsconfig/node14": "1.0.3",
      "@types/node": "^14.14.31",
      concurrently: "7.0.0",
      "downlevel-dts": "0.10.1",
      rimraf: "3.0.2",
      typedoc: "0.23.23",
      typescript: "~4.9.5"
    },
    engines: {
      node: ">=14.0.0"
    },
    typesVersions: {
      "<4.0": {
        "dist-types/*": ["dist-types/ts3.4/*"]
      }
    },
    files: ["dist-*/**"],
    author: {
      name: "AWS SDK for JavaScript Team",
      url: "https://aws.amazon.com/javascript/"
    },
    license: "Apache-2.0",
    browser: {
      "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
    },
    "react-native": {
      "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
    },
    homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-bedrock-runtime",
    repository: {
      type: "git",
      url: "https://github.com/aws/aws-sdk-js-v3.git",
      directory: "clients/client-bedrock-runtime"
    }
  }
})
// @from(Start 3395011, End 3395304)
it0 = Y((ct0) => {
  Object.defineProperty(ct0, "__esModule", {
    value: !0
  });
  ct0.resolveStsAuthConfig = void 0;
  var sS5 = OV(),
    oS5 = (I, {
      stsClientCtor: d
    }) => sS5.resolveAwsAuthConfig({
      ...I,
      stsClientCtor: d
    });
  ct0.resolveStsAuthConfig = oS5
})
// @from(Start 3395310, End 3395735)
at0 = Y((nt0) => {
  Object.defineProperty(nt0, "__esModule", {
    value: !0
  });
  nt0.resolveClientEndpointParameters = void 0;
  var eS5 = (I) => {
    return {
      ...I,
      useDualstackEndpoint: I.useDualstackEndpoint ?? !1,
      useFipsEndpoint: I.useFipsEndpoint ?? !1,
      useGlobalEndpoint: I.useGlobalEndpoint ?? !1,
      defaultSigningName: "sts"
    }
  };
  nt0.resolveClientEndpointParameters = eS5
})
// @from(Start 3395741, End 3399519)
st0 = Y((DW3, tS5) => {
  tS5.exports = {
    name: "@aws-sdk/client-sts",
    description: "AWS SDK for JavaScript Sts Client for Node.js, Browser and React Native",
    version: "3.423.0",
    scripts: {
      build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
      "build:cjs": "tsc -p tsconfig.cjs.json",
      "build:docs": "typedoc",
      "build:es": "tsc -p tsconfig.es.json",
      "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
      "build:types": "tsc -p tsconfig.types.json",
      "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
      clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
      "extract:docs": "api-extractor run --local",
      "generate:client": "node ../../scripts/generate-clients/single-service --solo sts",
      test: "yarn test:unit",
      "test:unit": "jest"
    },
    main: "./dist-cjs/index.js",
    types: "./dist-types/index.d.ts",
    module: "./dist-es/index.js",
    sideEffects: !1,
    dependencies: {
      "@aws-crypto/sha256-browser": "3.0.0",
      "@aws-crypto/sha256-js": "3.0.0",
      "@aws-sdk/credential-provider-node": "3.423.0",
      "@aws-sdk/middleware-host-header": "3.418.0",
      "@aws-sdk/middleware-logger": "3.418.0",
      "@aws-sdk/middleware-recursion-detection": "3.418.0",
      "@aws-sdk/middleware-sdk-sts": "3.418.0",
      "@aws-sdk/middleware-signing": "3.418.0",
      "@aws-sdk/middleware-user-agent": "3.418.0",
      "@aws-sdk/region-config-resolver": "3.418.0",
      "@aws-sdk/types": "3.418.0",
      "@aws-sdk/util-endpoints": "3.418.0",
      "@aws-sdk/util-user-agent-browser": "3.418.0",
      "@aws-sdk/util-user-agent-node": "3.418.0",
      "@smithy/config-resolver": "^2.0.10",
      "@smithy/fetch-http-handler": "^2.1.5",
      "@smithy/hash-node": "^2.0.9",
      "@smithy/invalid-dependency": "^2.0.9",
      "@smithy/middleware-content-length": "^2.0.11",
      "@smithy/middleware-endpoint": "^2.0.9",
      "@smithy/middleware-retry": "^2.0.12",
      "@smithy/middleware-serde": "^2.0.9",
      "@smithy/middleware-stack": "^2.0.2",
      "@smithy/node-config-provider": "^2.0.12",
      "@smithy/node-http-handler": "^2.1.5",
      "@smithy/protocol-http": "^3.0.5",
      "@smithy/smithy-client": "^2.1.6",
      "@smithy/types": "^2.3.3",
      "@smithy/url-parser": "^2.0.9",
      "@smithy/util-base64": "^2.0.0",
      "@smithy/util-body-length-browser": "^2.0.0",
      "@smithy/util-body-length-node": "^2.1.0",
      "@smithy/util-defaults-mode-browser": "^2.0.10",
      "@smithy/util-defaults-mode-node": "^2.0.12",
      "@smithy/util-retry": "^2.0.2",
      "@smithy/util-utf8": "^2.0.0",
      "fast-xml-parser": "4.2.5",
      tslib: "^2.5.0"
    },
    devDependencies: {
      "@smithy/service-client-documentation-generator": "^2.0.0",
      "@tsconfig/node14": "1.0.3",
      "@types/node": "^14.14.31",
      concurrently: "7.0.0",
      "downlevel-dts": "0.10.1",
      rimraf: "3.0.2",
      typedoc: "0.23.23",
      typescript: "~4.9.5"
    },
    engines: {
      node: ">=14.0.0"
    },
    typesVersions: {
      "<4.0": {
        "dist-types/*": ["dist-types/ts3.4/*"]
      }
    },
    files: ["dist-*/**"],
    author: {
      name: "AWS SDK for JavaScript Team",
      url: "https://aws.amazon.com/javascript/"
    },
    license: "Apache-2.0",
    browser: {
      "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
    },
    "react-native": {
      "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
    },
    homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sts",
    repository: {
      type: "git",
      url: "https://github.com/aws/aws-sdk-js-v3.git",
      directory: "clients/client-sts"
    }
  }
})
// @from(Start 3399525, End 3400001)
Pn = Y((dY1) => {
  Object.defineProperty(dY1, "__esModule", {
    value: !0
  });
  dY1.STSServiceException = dY1.__ServiceException = void 0;
  var ot0 = h2();
  Object.defineProperty(dY1, "__ServiceException", {
    enumerable: !0,
    get: function() {
      return ot0.ServiceException
    }
  });
  class IY1 extends ot0.ServiceException {
    constructor(I) {
      super(I);
      Object.setPrototypeOf(this, IY1.prototype)
    }
  }
  dY1.STSServiceException = IY1
})
// @from(Start 3400007, End 3405056)
SD = Y((tt0) => {
  Object.defineProperty(tt0, "__esModule", {
    value: !0
  });
  tt0.GetSessionTokenResponseFilterSensitiveLog = tt0.GetFederationTokenResponseFilterSensitiveLog = tt0.AssumeRoleWithWebIdentityResponseFilterSensitiveLog = tt0.AssumeRoleWithWebIdentityRequestFilterSensitiveLog = tt0.AssumeRoleWithSAMLResponseFilterSensitiveLog = tt0.AssumeRoleWithSAMLRequestFilterSensitiveLog = tt0.AssumeRoleResponseFilterSensitiveLog = tt0.CredentialsFilterSensitiveLog = tt0.InvalidAuthorizationMessageException = tt0.IDPCommunicationErrorException = tt0.InvalidIdentityTokenException = tt0.IDPRejectedClaimException = tt0.RegionDisabledException = tt0.PackedPolicyTooLargeException = tt0.MalformedPolicyDocumentException = tt0.ExpiredTokenException = void 0;
  var GY1 = h2(),
    MD = Pn();
  class ZY1 extends MD.STSServiceException {
    constructor(I) {
      super({
        name: "ExpiredTokenException",
        $fault: "client",
        ...I
      });
      this.name = "ExpiredTokenException", this.$fault = "client", Object.setPrototypeOf(this, ZY1.prototype)
    }
  }
  tt0.ExpiredTokenException = ZY1;
  class CY1 extends MD.STSServiceException {
    constructor(I) {
      super({
        name: "MalformedPolicyDocumentException",
        $fault: "client",
        ...I
      });
      this.name = "MalformedPolicyDocumentException", this.$fault = "client", Object.setPrototypeOf(this, CY1.prototype)
    }
  }
  tt0.MalformedPolicyDocumentException = CY1;
  class WY1 extends MD.STSServiceException {
    constructor(I) {
      super({
        name: "PackedPolicyTooLargeException",
        $fault: "client",
        ...I
      });
      this.name = "PackedPolicyTooLargeException", this.$fault = "client", Object.setPrototypeOf(this, WY1.prototype)
    }
  }
  tt0.PackedPolicyTooLargeException = WY1;
  class wY1 extends MD.STSServiceException {
    constructor(I) {
      super({
        name: "RegionDisabledException",
        $fault: "client",
        ...I
      });
      this.name = "RegionDisabledException", this.$fault = "client", Object.setPrototypeOf(this, wY1.prototype)
    }
  }
  tt0.RegionDisabledException = wY1;
  class BY1 extends MD.STSServiceException {
    constructor(I) {
      super({
        name: "IDPRejectedClaimException",
        $fault: "client",
        ...I
      });
      this.name = "IDPRejectedClaimException", this.$fault = "client", Object.setPrototypeOf(this, BY1.prototype)
    }
  }
  tt0.IDPRejectedClaimException = BY1;
  class AY1 extends MD.STSServiceException {
    constructor(I) {
      super({
        name: "InvalidIdentityTokenException",
        $fault: "client",
        ...I
      });
      this.name = "InvalidIdentityTokenException", this.$fault = "client", Object.setPrototypeOf(this, AY1.prototype)
    }
  }
  tt0.InvalidIdentityTokenException = AY1;
  class VY1 extends MD.STSServiceException {
    constructor(I) {
      super({
        name: "IDPCommunicationErrorException",
        $fault: "client",
        ...I
      });
      this.name = "IDPCommunicationErrorException", this.$fault = "client", Object.setPrototypeOf(this, VY1.prototype)
    }
  }
  tt0.IDPCommunicationErrorException = VY1;
  class XY1 extends MD.STSServiceException {
    constructor(I) {
      super({
        name: "InvalidAuthorizationMessageException",
        $fault: "client",
        ...I
      });
      this.name = "InvalidAuthorizationMessageException", this.$fault = "client", Object.setPrototypeOf(this, XY1.prototype)
    }
  }
  tt0.InvalidAuthorizationMessageException = XY1;
  var IL5 = (I) => ({
    ...I,
    ...I.SecretAccessKey && {
      SecretAccessKey: GY1.SENSITIVE_STRING
    }
  });
  tt0.CredentialsFilterSensitiveLog = IL5;
  var dL5 = (I) => ({
    ...I,
    ...I.Credentials && {
      Credentials: tt0.CredentialsFilterSensitiveLog(I.Credentials)
    }
  });
  tt0.AssumeRoleResponseFilterSensitiveLog = dL5;
  var GL5 = (I) => ({
    ...I,
    ...I.SAMLAssertion && {
      SAMLAssertion: GY1.SENSITIVE_STRING
    }
  });
  tt0.AssumeRoleWithSAMLRequestFilterSensitiveLog = GL5;
  var ZL5 = (I) => ({
    ...I,
    ...I.Credentials && {
      Credentials: tt0.CredentialsFilterSensitiveLog(I.Credentials)
    }
  });
  tt0.AssumeRoleWithSAMLResponseFilterSensitiveLog = ZL5;
  var CL5 = (I) => ({
    ...I,
    ...I.WebIdentityToken && {
      WebIdentityToken: GY1.SENSITIVE_STRING
    }
  });
  tt0.AssumeRoleWithWebIdentityRequestFilterSensitiveLog = CL5;
  var WL5 = (I) => ({
    ...I,
    ...I.Credentials && {
      Credentials: tt0.CredentialsFilterSensitiveLog(I.Credentials)
    }
  });
  tt0.AssumeRoleWithWebIdentityResponseFilterSensitiveLog = WL5;
  var wL5 = (I) => ({
    ...I,
    ...I.Credentials && {
      Credentials: tt0.CredentialsFilterSensitiveLog(I.Credentials)
    }
  });
  tt0.GetFederationTokenResponseFilterSensitiveLog = wL5;
  var BL5 = (I) => ({
    ...I,
    ...I.Credentials && {
      Credentials: tt0.CredentialsFilterSensitiveLog(I.Credentials)
    }
  });
  tt0.GetSessionTokenResponseFilterSensitiveLog = BL5
})
// @from(Start 3405062, End 3406499)
$n = Y((vL5) => {
  var fL5 = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
    d12 = "[:A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][" + fL5 + "]*",
    qL5 = new RegExp("^" + d12 + "$"),
    RL5 = function(I, d) {
      let G = [],
        Z = d.exec(I);
      while (Z) {
        let C = [];
        C.startIndex = d.lastIndex - Z[0].length;
        let W = Z.length;
        for (let w = 0; w < W; w++) C.push(Z[w]);
        G.push(C), Z = d.exec(I)
      }
      return G
    },
    UL5 = function(I) {
      let d = qL5.exec(I);
      return !(d === null || typeof d === "undefined")
    };
  vL5.isExist = function(I) {
    return typeof I !== "undefined"
  };
  vL5.isEmptyObject = function(I) {
    return Object.keys(I).length === 0
  };
  vL5.merge = function(I, d, G) {
    if (d) {
      let Z = Object.keys(d),
        C = Z.length;
      for (let W = 0; W < C; W++)
        if (G === "strict") I[Z[W]] = [d[Z[W]]];
        else I[Z[W]] = d[Z[W]]
    }
  };
  vL5.getValue = function(I) {
    if (vL5.isExist(I)) return I;
    else return ""
  };
  vL5.isName = UL5;
  vL5.getAllMatches = RL5;
  vL5.nameRegexp = d12
})
// @from(Start 3406505, End 3413864)
_Y1 = Y((kL5) => {
  var YY1 = $n(),
    $L5 = {
      allowBooleanAttributes: !1,
      unpairedTags: []
    };
  kL5.validate = function(I, d) {
    d = Object.assign({}, $L5, d);
    let G = [],
      Z = !1,
      C = !1;
    if (I[0] === "\uFEFF") I = I.substr(1);
    for (let W = 0; W < I.length; W++)
      if (I[W] === "<" && I[W + 1] === "?") {
        if (W += 2, W = C12(I, W), W.err) return W
      } else if (I[W] === "<") {
      let w = W;
      if (W++, I[W] === "!") {
        W = W12(I, W);
        continue
      } else {
        let B = !1;
        if (I[W] === "/") B = !0, W++;
        let A = "";
        for (; W < I.length && I[W] !== ">" && I[W] !== " " && I[W] !== "\t" && I[W] !== `
` && I[W] !== "\r"; W++) A += I[W];
        if (A = A.trim(), A[A.length - 1] === "/") A = A.substring(0, A.length - 1), W--;
        if (!jL5(A)) {
          let _;
          if (A.trim().length === 0) _ = "Invalid space after '<'.";
          else _ = "Tag '" + A + "' is an invalid name.";
          return S6("InvalidTag", _, Xd(I, W))
        }
        let V = OL5(I, W);
        if (V === !1) return S6("InvalidAttr", "Attributes for '" + A + "' have open quote.", Xd(I, W));
        let X = V.value;
        if (W = V.index, X[X.length - 1] === "/") {
          let _ = W - X.length;
          X = X.substring(0, X.length - 1);
          let F = w12(X, d);
          if (F === !0) Z = !0;
          else return S6(F.err.code, F.err.msg, Xd(I, _ + F.err.line))
        } else if (B)
          if (!V.tagClosed) return S6("InvalidTag", "Closing tag '" + A + "' doesn't have proper closing.", Xd(I, W));
          else if (X.trim().length > 0) return S6("InvalidTag", "Closing tag '" + A + "' can't have attributes or invalid starting.", Xd(I, w));
        else {
          let _ = G.pop();
          if (A !== _.tagName) {
            let F = Xd(I, _.tagStartPos);
            return S6("InvalidTag", "Expected closing tag '" + _.tagName + "' (opened in line " + F.line + ", col " + F.col + ") instead of closing tag '" + A + "'.", Xd(I, w))
          }
          if (G.length == 0) C = !0
        } else {
          let _ = w12(X, d);
          if (_ !== !0) return S6(_.err.code, _.err.msg, Xd(I, W - X.length + _.err.line));
          if (C === !0) return S6("InvalidXml", "Multiple possible root nodes found.", Xd(I, W));
          else if (d.unpairedTags.indexOf(A) !== -1);
          else G.push({
            tagName: A,
            tagStartPos: w
          });
          Z = !0
        }
        for (W++; W < I.length; W++)
          if (I[W] === "<")
            if (I[W + 1] === "!") {
              W++, W = W12(I, W);
              continue
            } else if (I[W + 1] === "?") {
          if (W = C12(I, ++W), W.err) return W
        } else break;
        else if (I[W] === "&") {
          let _ = bL5(I, W);
          if (_ == -1) return S6("InvalidChar", "char '&' is not expected.", Xd(I, W));
          W = _
        } else if (C === !0 && !Z12(I[W])) return S6("InvalidXml", "Extra text at the end", Xd(I, W));
        if (I[W] === "<") W--
      }
    } else {
      if (Z12(I[W])) continue;
      return S6("InvalidChar", "char '" + I[W] + "' is not expected.", Xd(I, W))
    }
    if (!Z) return S6("InvalidXml", "Start tag expected.", 1);
    else if (G.length == 1) return S6("InvalidTag", "Unclosed tag '" + G[0].tagName + "'.", Xd(I, G[0].tagStartPos));
    else if (G.length > 0) return S6("InvalidXml", "Invalid '" + JSON.stringify(G.map((W) => W.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", {
      line: 1,
      col: 1
    });
    return !0
  };

  function Z12(I) {
    return I === " " || I === "\t" || I === `
` || I === "\r"
  }

  function C12(I, d) {
    let G = d;
    for (; d < I.length; d++)
      if (I[d] == "?" || I[d] == " ") {
        let Z = I.substr(G, d - G);
        if (d > 5 && Z === "xml") return S6("InvalidXml", "XML declaration allowed only at the start of the document.", Xd(I, d));
        else if (I[d] == "?" && I[d + 1] == ">") {
          d++;
          break
        } else continue
      } return d
  }

  function W12(I, d) {
    if (I.length > d + 5 && I[d + 1] === "-" && I[d + 2] === "-") {
      for (d += 3; d < I.length; d++)
        if (I[d] === "-" && I[d + 1] === "-" && I[d + 2] === ">") {
          d += 2;
          break
        }
    } else if (I.length > d + 8 && I[d + 1] === "D" && I[d + 2] === "O" && I[d + 3] === "C" && I[d + 4] === "T" && I[d + 5] === "Y" && I[d + 6] === "P" && I[d + 7] === "E") {
      let G = 1;
      for (d += 8; d < I.length; d++)
        if (I[d] === "<") G++;
        else if (I[d] === ">") {
        if (G--, G === 0) break
      }
    } else if (I.length > d + 9 && I[d + 1] === "[" && I[d + 2] === "C" && I[d + 3] === "D" && I[d + 4] === "A" && I[d + 5] === "T" && I[d + 6] === "A" && I[d + 7] === "[") {
      for (d += 8; d < I.length; d++)
        if (I[d] === "]" && I[d + 1] === "]" && I[d + 2] === ">") {
          d += 2;
          break
        }
    }
    return d
  }
  var uL5 = '"',
    TL5 = "'";

  function OL5(I, d) {
    let G = "",
      Z = "",
      C = !1;
    for (; d < I.length; d++) {
      if (I[d] === uL5 || I[d] === TL5)
        if (Z === "") Z = I[d];
        else if (Z !== I[d]);
      else Z = "";
      else if (I[d] === ">") {
        if (Z === "") {
          C = !0;
          break
        }
      }
      G += I[d]
    }
    if (Z !== "") return !1;
    return {
      value: G,
      index: d,
      tagClosed: C
    }
  }
  var mL5 = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");

  function w12(I, d) {
    let G = YY1.getAllMatches(I, mL5),
      Z = {};
    for (let C = 0; C < G.length; C++) {
      if (G[C][1].length === 0) return S6("InvalidAttr", "Attribute '" + G[C][2] + "' has no space in starting.", gP(G[C]));
      else if (G[C][3] !== void 0 && G[C][4] === void 0) return S6("InvalidAttr", "Attribute '" + G[C][2] + "' is without value.", gP(G[C]));
      else if (G[C][3] === void 0 && !d.allowBooleanAttributes) return S6("InvalidAttr", "boolean attribute '" + G[C][2] + "' is not allowed.", gP(G[C]));
      let W = G[C][2];
      if (!hL5(W)) return S6("InvalidAttr", "Attribute '" + W + "' is an invalid name.", gP(G[C]));
      if (!Z.hasOwnProperty(W)) Z[W] = 1;
      else return S6("InvalidAttr", "Attribute '" + W + "' is repeated.", gP(G[C]))
    }
    return !0
  }

  function lL5(I, d) {
    let G = /\d/;
    if (I[d] === "x") d++, G = /[\da-fA-F]/;
    for (; d < I.length; d++) {
      if (I[d] === ";") return d;
      if (!I[d].match(G)) break
    }
    return -1
  }

  function bL5(I, d) {
    if (d++, I[d] === ";") return -1;
    if (I[d] === "#") return d++, lL5(I, d);
    let G = 0;
    for (; d < I.length; d++, G++) {
      if (I[d].match(/\w/) && G < 20) continue;
      if (I[d] === ";") break;
      return -1
    }
    return d
  }

  function S6(I, d, G) {
    return {
      err: {
        code: I,
        msg: d,
        line: G.line || G,
        col: G.col
      }
    }
  }

  function hL5(I) {
    return YY1.isName(I)
  }

  function jL5(I) {
    return YY1.isName(I)
  }

  function Xd(I, d) {
    let G = I.substring(0, d).split(/\r?\n/);
    return {
      line: G.length,
      col: G[G.length - 1].length + 1
    }
  }

  function gP(I) {
    return I.startIndex + I[1].length
  }
})
// @from(Start 3413870, End 3414945)
A12 = Y((pL5) => {
  var B12 = {
      preserveOrder: !1,
      attributeNamePrefix: "@_",
      attributesGroupName: !1,
      textNodeName: "#text",
      ignoreAttributes: !0,
      removeNSPrefix: !1,
      allowBooleanAttributes: !1,
      parseTagValue: !0,
      parseAttributeValue: !1,
      trimValues: !0,
      cdataPropName: !1,
      numberParseOptions: {
        hex: !0,
        leadingZeros: !0,
        eNotation: !0
      },
      tagValueProcessor: function(I, d) {
        return d
      },
      attributeValueProcessor: function(I, d) {
        return d
      },
      stopNodes: [],
      alwaysCreateTextNode: !1,
      isArray: () => !1,
      commentPropName: !1,
      unpairedTags: [],
      processEntities: !0,
      htmlEntities: !1,
      ignoreDeclaration: !1,
      ignorePiTags: !1,
      transformTagName: !1,
      transformAttributeName: !1,
      updateTag: function(I, d, G) {
        return I
      }
    },
    cL5 = function(I) {
      return Object.assign({}, B12, I)
    };
  pL5.buildOptions = cL5;
  pL5.defaultOptions = B12
})
// @from(Start 3414951, End 3415506)
Y12 = Y((zW3, X12) => {
  class V12 {
    constructor(I) {
      this.tagname = I, this.child = [], this[":@"] = {}
    }
    add(I, d) {
      if (I === "__proto__") I = "#__proto__";
      this.child.push({
        [I]: d
      })
    }
    addChild(I) {
      if (I.tagname === "__proto__") I.tagname = "#__proto__";
      if (I[":@"] && Object.keys(I[":@"]).length > 0) this.child.push({
        [I.tagname]: I.child,
        [":@"]: I[":@"]
      });
      else this.child.push({
        [I.tagname]: I.child
      })
    }
  }
  X12.exports = V12
})
// @from(Start 3415512, End 3418183)
D12 = Y((QW3, _12) => {
  var rL5 = $n();

  function aL5(I, d) {
    let G = {};
    if (I[d + 3] === "O" && I[d + 4] === "C" && I[d + 5] === "T" && I[d + 6] === "Y" && I[d + 7] === "P" && I[d + 8] === "E") {
      d = d + 9;
      let Z = 1,
        C = !1,
        W = !1,
        w = "";
      for (; d < I.length; d++)
        if (I[d] === "<" && !W) {
          if (C && eL5(I, d)) {
            if (d += 7, [entityName, val, d] = sL5(I, d + 1), val.indexOf("&") === -1) G[Gy5(entityName)] = {
              regx: RegExp(`&${entityName};`, "g"),
              val
            }
          } else if (C && tL5(I, d)) d += 8;
          else if (C && Iy5(I, d)) d += 8;
          else if (C && dy5(I, d)) d += 9;
          else if (oL5) W = !0;
          else throw new Error("Invalid DOCTYPE");
          Z++, w = ""
        } else if (I[d] === ">") {
        if (W) {
          if (I[d - 1] === "-" && I[d - 2] === "-") W = !1, Z--
        } else Z--;
        if (Z === 0) break
      } else if (I[d] === "[") C = !0;
      else w += I[d];
      if (Z !== 0) throw new Error("Unclosed DOCTYPE")
    } else throw new Error("Invalid Tag instead of DOCTYPE");
    return {
      entities: G,
      i: d
    }
  }

  function sL5(I, d) {
    let G = "";
    for (; d < I.length && (I[d] !== "'" && I[d] !== '"'); d++) G += I[d];
    if (G = G.trim(), G.indexOf(" ") !== -1) throw new Error("External entites are not supported");
    let Z = I[d++],
      C = "";
    for (; d < I.length && I[d] !== Z; d++) C += I[d];
    return [G, C, d]
  }

  function oL5(I, d) {
    if (I[d + 1] === "!" && I[d + 2] === "-" && I[d + 3] === "-") return !0;
    return !1
  }

  function eL5(I, d) {
    if (I[d + 1] === "!" && I[d + 2] === "E" && I[d + 3] === "N" && I[d + 4] === "T" && I[d + 5] === "I" && I[d + 6] === "T" && I[d + 7] === "Y") return !0;
    return !1
  }

  function tL5(I, d) {
    if (I[d + 1] === "!" && I[d + 2] === "E" && I[d + 3] === "L" && I[d + 4] === "E" && I[d + 5] === "M" && I[d + 6] === "E" && I[d + 7] === "N" && I[d + 8] === "T") return !0;
    return !1
  }

  function Iy5(I, d) {
    if (I[d + 1] === "!" && I[d + 2] === "A" && I[d + 3] === "T" && I[d + 4] === "T" && I[d + 5] === "L" && I[d + 6] === "I" && I[d + 7] === "S" && I[d + 8] === "T") return !0;
    return !1
  }

  function dy5(I, d) {
    if (I[d + 1] === "!" && I[d + 2] === "N" && I[d + 3] === "O" && I[d + 4] === "T" && I[d + 5] === "A" && I[d + 6] === "T" && I[d + 7] === "I" && I[d + 8] === "O" && I[d + 9] === "N") return !0;
    return !1
  }

  function Gy5(I) {
    if (rL5.isName(I)) return I;
    else throw new Error(`Invalid entity name ${I}`)
  }
  _12.exports = aL5
})
// @from(Start 3418189, End 3430329)
g12 = Y((qW3, F12) => {
  var FY1 = $n(),
    JP = Y12(),
    Zy5 = D12(),
    Cy5 = mc(),
    fW3 = "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, FY1.nameRegexp);
  class H12 {
    constructor(I) {
      this.options = I, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
        apos: {
          regex: /&(apos|#39|#x27);/g,
          val: "'"
        },
        gt: {
          regex: /&(gt|#62|#x3E);/g,
          val: ">"
        },
        lt: {
          regex: /&(lt|#60|#x3C);/g,
          val: "<"
        },
        quot: {
          regex: /&(quot|#34|#x22);/g,
          val: '"'
        }
      }, this.ampEntity = {
        regex: /&(amp|#38|#x26);/g,
        val: "&"
      }, this.htmlEntities = {
        space: {
          regex: /&(nbsp|#160);/g,
          val: " "
        },
        cent: {
          regex: /&(cent|#162);/g,
          val: "¢"
        },
        pound: {
          regex: /&(pound|#163);/g,
          val: "£"
        },
        yen: {
          regex: /&(yen|#165);/g,
          val: "¥"
        },
        euro: {
          regex: /&(euro|#8364);/g,
          val: "€"
        },
        copyright: {
          regex: /&(copy|#169);/g,
          val: "©"
        },
        reg: {
          regex: /&(reg|#174);/g,
          val: "®"
        },
        inr: {
          regex: /&(inr|#8377);/g,
          val: "₹"
        }
      }, this.addExternalEntities = Wy5, this.parseXml = Xy5, this.parseTextData = wy5, this.resolveNameSpace = By5, this.buildAttributesMap = Vy5, this.isItStopNode = Hy5, this.replaceEntitiesValue = _y5, this.readStopNodeData = gy5, this.saveTextToParentTag = Dy5, this.addChild = Yy5
    }
  }

  function Wy5(I) {
    let d = Object.keys(I);
    for (let G = 0; G < d.length; G++) {
      let Z = d[G];
      this.lastEntities[Z] = {
        regex: new RegExp("&" + Z + ";", "g"),
        val: I[Z]
      }
    }
  }

  function wy5(I, d, G, Z, C, W, w) {
    if (I !== void 0) {
      if (this.options.trimValues && !Z) I = I.trim();
      if (I.length > 0) {
        if (!w) I = this.replaceEntitiesValue(I);
        let B = this.options.tagValueProcessor(d, I, G, C, W);
        if (B === null || B === void 0) return I;
        else if (typeof B !== typeof I || B !== I) return B;
        else if (this.options.trimValues) return HY1(I, this.options.parseTagValue, this.options.numberParseOptions);
        else if (I.trim() === I) return HY1(I, this.options.parseTagValue, this.options.numberParseOptions);
        else return I
      }
    }
  }

  function By5(I) {
    if (this.options.removeNSPrefix) {
      let d = I.split(":"),
        G = I.charAt(0) === "/" ? "/" : "";
      if (d[0] === "xmlns") return "";
      if (d.length === 2) I = G + d[1]
    }
    return I
  }
  var Ay5 = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");

  function Vy5(I, d, G) {
    if (!this.options.ignoreAttributes && typeof I === "string") {
      let Z = FY1.getAllMatches(I, Ay5),
        C = Z.length,
        W = {};
      for (let w = 0; w < C; w++) {
        let B = this.resolveNameSpace(Z[w][1]),
          A = Z[w][4],
          V = this.options.attributeNamePrefix + B;
        if (B.length) {
          if (this.options.transformAttributeName) V = this.options.transformAttributeName(V);
          if (V === "__proto__") V = "#__proto__";
          if (A !== void 0) {
            if (this.options.trimValues) A = A.trim();
            A = this.replaceEntitiesValue(A);
            let X = this.options.attributeValueProcessor(B, A, d);
            if (X === null || X === void 0) W[V] = A;
            else if (typeof X !== typeof A || X !== A) W[V] = X;
            else W[V] = HY1(A, this.options.parseAttributeValue, this.options.numberParseOptions)
          } else if (this.options.allowBooleanAttributes) W[V] = !0
        }
      }
      if (!Object.keys(W).length) return;
      if (this.options.attributesGroupName) {
        let w = {};
        return w[this.options.attributesGroupName] = W, w
      }
      return W
    }
  }
  var Xy5 = function(I) {
    I = I.replace(/\r\n?/g, `
`);
    let d = new JP("!xml"),
      G = d,
      Z = "",
      C = "";
    for (let W = 0; W < I.length; W++)
      if (I[W] === "<")
        if (I[W + 1] === "/") {
          let B = RJ(I, ">", W, "Closing Tag is not closed."),
            A = I.substring(W + 2, B).trim();
          if (this.options.removeNSPrefix) {
            let _ = A.indexOf(":");
            if (_ !== -1) A = A.substr(_ + 1)
          }
          if (this.options.transformTagName) A = this.options.transformTagName(A);
          if (G) Z = this.saveTextToParentTag(Z, G, C);
          let V = C.substring(C.lastIndexOf(".") + 1);
          if (A && this.options.unpairedTags.indexOf(A) !== -1) throw new Error(`Unpaired tag can not be used as closing tag: </${A}>`);
          let X = 0;
          if (V && this.options.unpairedTags.indexOf(V) !== -1) X = C.lastIndexOf(".", C.lastIndexOf(".") - 1), this.tagsNodeStack.pop();
          else X = C.lastIndexOf(".");
          C = C.substring(0, X), G = this.tagsNodeStack.pop(), Z = "", W = B
        } else if (I[W + 1] === "?") {
      let B = DY1(I, W, !1, "?>");
      if (!B) throw new Error("Pi Tag is not closed.");
      if (Z = this.saveTextToParentTag(Z, G, C), this.options.ignoreDeclaration && B.tagName === "?xml" || this.options.ignorePiTags);
      else {
        let A = new JP(B.tagName);
        if (A.add(this.options.textNodeName, ""), B.tagName !== B.tagExp && B.attrExpPresent) A[":@"] = this.buildAttributesMap(B.tagExp, C, B.tagName);
        this.addChild(G, A, C)
      }
      W = B.closeIndex + 1
    } else if (I.substr(W + 1, 3) === "!--") {
      let B = RJ(I, "-->", W + 4, "Comment is not closed.");
      if (this.options.commentPropName) {
        let A = I.substring(W + 4, B - 2);
        Z = this.saveTextToParentTag(Z, G, C), G.add(this.options.commentPropName, [{
          [this.options.textNodeName]: A
        }])
      }
      W = B
    } else if (I.substr(W + 1, 2) === "!D") {
      let B = Zy5(I, W);
      this.docTypeEntities = B.entities, W = B.i
    } else if (I.substr(W + 1, 2) === "![") {
      let B = RJ(I, "]]>", W, "CDATA is not closed.") - 2,
        A = I.substring(W + 9, B);
      if (Z = this.saveTextToParentTag(Z, G, C), this.options.cdataPropName) G.add(this.options.cdataPropName, [{
        [this.options.textNodeName]: A
      }]);
      else {
        let V = this.parseTextData(A, G.tagname, C, !0, !1, !0);
        if (V == null) V = "";
        G.add(this.options.textNodeName, V)
      }
      W = B + 2
    } else {
      let B = DY1(I, W, this.options.removeNSPrefix),
        A = B.tagName,
        V = B.tagExp,
        X = B.attrExpPresent,
        _ = B.closeIndex;
      if (this.options.transformTagName) A = this.options.transformTagName(A);
      if (G && Z) {
        if (G.tagname !== "!xml") Z = this.saveTextToParentTag(Z, G, C, !1)
      }
      let F = G;
      if (F && this.options.unpairedTags.indexOf(F.tagname) !== -1) G = this.tagsNodeStack.pop(), C = C.substring(0, C.lastIndexOf("."));
      if (A !== d.tagname) C += C ? "." + A : A;
      if (this.isItStopNode(this.options.stopNodes, C, A)) {
        let g = "";
        if (V.length > 0 && V.lastIndexOf("/") === V.length - 1) W = B.closeIndex;
        else if (this.options.unpairedTags.indexOf(A) !== -1) W = B.closeIndex;
        else {
          let K = this.readStopNodeData(I, A, _ + 1);
          if (!K) throw new Error(`Unexpected end of ${A}`);
          W = K.i, g = K.tagContent
        }
        let J = new JP(A);
        if (A !== V && X) J[":@"] = this.buildAttributesMap(V, C, A);
        if (g) g = this.parseTextData(g, A, C, !0, X, !0, !0);
        C = C.substr(0, C.lastIndexOf(".")), J.add(this.options.textNodeName, g), this.addChild(G, J, C)
      } else {
        if (V.length > 0 && V.lastIndexOf("/") === V.length - 1) {
          if (A[A.length - 1] === "/") A = A.substr(0, A.length - 1), V = A;
          else V = V.substr(0, V.length - 1);
          if (this.options.transformTagName) A = this.options.transformTagName(A);
          let g = new JP(A);
          if (A !== V && X) g[":@"] = this.buildAttributesMap(V, C, A);
          this.addChild(G, g, C), C = C.substr(0, C.lastIndexOf("."))
        } else {
          let g = new JP(A);
          if (this.tagsNodeStack.push(G), A !== V && X) g[":@"] = this.buildAttributesMap(V, C, A);
          this.addChild(G, g, C), G = g
        }
        Z = "", W = _
      }
    } else Z += I[W];
    return d.child
  };

  function Yy5(I, d, G) {
    let Z = this.options.updateTag(d.tagname, G, d[":@"]);
    if (Z === !1);
    else if (typeof Z === "string") d.tagname = Z, I.addChild(d);
    else I.addChild(d)
  }
  var _y5 = function(I) {
    if (this.options.processEntities) {
      for (let d in this.docTypeEntities) {
        let G = this.docTypeEntities[d];
        I = I.replace(G.regx, G.val)
      }
      for (let d in this.lastEntities) {
        let G = this.lastEntities[d];
        I = I.replace(G.regex, G.val)
      }
      if (this.options.htmlEntities)
        for (let d in this.htmlEntities) {
          let G = this.htmlEntities[d];
          I = I.replace(G.regex, G.val)
        }
      I = I.replace(this.ampEntity.regex, this.ampEntity.val)
    }
    return I
  };

  function Dy5(I, d, G, Z) {
    if (I) {
      if (Z === void 0) Z = Object.keys(d.child).length === 0;
      if (I = this.parseTextData(I, d.tagname, G, !1, d[":@"] ? Object.keys(d[":@"]).length !== 0 : !1, Z), I !== void 0 && I !== "") d.add(this.options.textNodeName, I);
      I = ""
    }
    return I
  }

  function Hy5(I, d, G) {
    let Z = "*." + G;
    for (let C in I) {
      let W = I[C];
      if (Z === W || d === W) return !0
    }
    return !1
  }

  function Fy5(I, d, G = ">") {
    let Z, C = "";
    for (let W = d; W < I.length; W++) {
      let w = I[W];
      if (Z) {
        if (w === Z) Z = ""
      } else if (w === '"' || w === "'") Z = w;
      else if (w === G[0])
        if (G[1]) {
          if (I[W + 1] === G[1]) return {
            data: C,
            index: W
          }
        } else return {
          data: C,
          index: W
        };
      else if (w === "\t") w = " ";
      C += w
    }
  }

  function RJ(I, d, G, Z) {
    let C = I.indexOf(d, G);
    if (C === -1) throw new Error(Z);
    else return C + d.length - 1
  }

  function DY1(I, d, G, Z = ">") {
    let C = Fy5(I, d + 1, Z);
    if (!C) return;
    let {
      data: W,
      index: w
    } = C, B = W.search(/\s/), A = W, V = !0;
    if (B !== -1) A = W.substr(0, B).replace(/\s\s*$/, ""), W = W.substr(B + 1);
    if (G) {
      let X = A.indexOf(":");
      if (X !== -1) A = A.substr(X + 1), V = A !== C.data.substr(X + 1)
    }
    return {
      tagName: A,
      tagExp: W,
      closeIndex: w,
      attrExpPresent: V
    }
  }

  function gy5(I, d, G) {
    let Z = G,
      C = 1;
    for (; G < I.length; G++)
      if (I[G] === "<")
        if (I[G + 1] === "/") {
          let W = RJ(I, ">", G, `${d} is not closed`);
          if (I.substring(G + 2, W).trim() === d) {
            if (C--, C === 0) return {
              tagContent: I.substring(Z, G),
              i: W
            }
          }
          G = W
        } else if (I[G + 1] === "?") G = RJ(I, "?>", G + 1, "StopNode is not closed.");
    else if (I.substr(G + 1, 3) === "!--") G = RJ(I, "-->", G + 3, "StopNode is not closed.");
    else if (I.substr(G + 1, 2) === "![") G = RJ(I, "]]>", G, "StopNode is not closed.") - 2;
    else {
      let W = DY1(I, G, ">");
      if (W) {
        if ((W && W.tagName) === d && W.tagExp[W.tagExp.length - 1] !== "/") C++;
        G = W.closeIndex
      }
    }
  }

  function HY1(I, d, G) {
    if (d && typeof I === "string") {
      let Z = I.trim();
      if (Z === "true") return !0;
      else if (Z === "false") return !1;
      else return Cy5(I, G)
    } else if (FY1.isExist(I)) return I;
    else return ""
  }
  F12.exports = H12
})
// @from(Start 3430335, End 3432140)
K12 = Y((Qy5) => {
  function Jy5(I, d) {
    return J12(I, d)
  }

  function J12(I, d, G) {
    let Z, C = {};
    for (let W = 0; W < I.length; W++) {
      let w = I[W],
        B = Ky5(w),
        A = "";
      if (G === void 0) A = B;
      else A = G + "." + B;
      if (B === d.textNodeName)
        if (Z === void 0) Z = w[B];
        else Z += "" + w[B];
      else if (B === void 0) continue;
      else if (w[B]) {
        let V = J12(w[B], d, A),
          X = zy5(V, d);
        if (w[":@"]) Ny5(V, w[":@"], A, d);
        else if (Object.keys(V).length === 1 && V[d.textNodeName] !== void 0 && !d.alwaysCreateTextNode) V = V[d.textNodeName];
        else if (Object.keys(V).length === 0)
          if (d.alwaysCreateTextNode) V[d.textNodeName] = "";
          else V = "";
        if (C[B] !== void 0 && C.hasOwnProperty(B)) {
          if (!Array.isArray(C[B])) C[B] = [C[B]];
          C[B].push(V)
        } else if (d.isArray(B, A, X)) C[B] = [V];
        else C[B] = V
      }
    }
    if (typeof Z === "string") {
      if (Z.length > 0) C[d.textNodeName] = Z
    } else if (Z !== void 0) C[d.textNodeName] = Z;
    return C
  }

  function Ky5(I) {
    let d = Object.keys(I);
    for (let G = 0; G < d.length; G++) {
      let Z = d[G];
      if (Z !== ":@") return Z
    }
  }

  function Ny5(I, d, G, Z) {
    if (d) {
      let C = Object.keys(d),
        W = C.length;
      for (let w = 0; w < W; w++) {
        let B = C[w];
        if (Z.isArray(B, G + "." + B, !0, !0)) I[B] = [d[B]];
        else I[B] = d[B]
      }
    }
  }

  function zy5(I, d) {
    let {
      textNodeName: G
    } = d, Z = Object.keys(I).length;
    if (Z === 0) return !0;
    if (Z === 1 && (I[G] || typeof I[G] === "boolean" || I[G] === 0)) return !0;
    return !1
  }
  Qy5.prettify = Jy5
})
// @from(Start 3432146, End 3433353)
Q12 = Y((UW3, z12) => {
  var {
    buildOptions: qy5
  } = A12(), Ry5 = g12(), {
    prettify: Uy5
  } = K12(), vy5 = _Y1();
  class N12 {
    constructor(I) {
      this.externalEntities = {}, this.options = qy5(I)
    }
    parse(I, d) {
      if (typeof I === "string");
      else if (I.toString) I = I.toString();
      else throw new Error("XML data is accepted in String or Bytes[] form.");
      if (d) {
        if (d === !0) d = {};
        let C = vy5.validate(I, d);
        if (C !== !0) throw Error(`${C.err.msg}:${C.err.line}:${C.err.col}`)
      }
      let G = new Ry5(this.options);
      G.addExternalEntities(this.externalEntities);
      let Z = G.parseXml(I);
      if (this.options.preserveOrder || Z === void 0) return Z;
      else return Uy5(Z, this.options)
    }
    addEntity(I, d) {
      if (d.indexOf("&") !== -1) throw new Error("Entity value can't have '&'");
      else if (I.indexOf("&") !== -1 || I.indexOf(";") !== -1) throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
      else if (d === "&") throw new Error("An entity with value '&' is not permitted");
      else this.externalEntities[I] = d
    }
  }
  z12.exports = N12
})
// @from(Start 3433359, End 3436060)
v12 = Y((vW3, U12) => {
  function Ey5(I, d) {
    let G = "";
    if (d.format && d.indentBy.length > 0) G = `
`;
    return q12(I, d, "", G)
  }

  function q12(I, d, G, Z) {
    let C = "",
      W = !1;
    for (let w = 0; w < I.length; w++) {
      let B = I[w],
        A = My5(B),
        V = "";
      if (G.length === 0) V = A;
      else V = `${G}.${A}`;
      if (A === d.textNodeName) {
        let J = B[A];
        if (!Sy5(V, d)) J = d.tagValueProcessor(A, J), J = R12(J, d);
        if (W) C += Z;
        C += J, W = !1;
        continue
      } else if (A === d.cdataPropName) {
        if (W) C += Z;
        C += `<![CDATA[${B[A][0][d.textNodeName]}]]>`, W = !1;
        continue
      } else if (A === d.commentPropName) {
        C += Z + `<!--${B[A][0][d.textNodeName]}-->`, W = !0;
        continue
      } else if (A[0] === "?") {
        let J = f12(B[":@"], d),
          K = A === "?xml" ? "" : Z,
          Q = B[A][0][d.textNodeName];
        Q = Q.length !== 0 ? " " + Q : "", C += K + `<${A}${Q}${J}?>`, W = !0;
        continue
      }
      let X = Z;
      if (X !== "") X += d.indentBy;
      let _ = f12(B[":@"], d),
        F = Z + `<${A}${_}`,
        g = q12(B[A], d, V, X);
      if (d.unpairedTags.indexOf(A) !== -1)
        if (d.suppressUnpairedNode) C += F + ">";
        else C += F + "/>";
      else if ((!g || g.length === 0) && d.suppressEmptyNode) C += F + "/>";
      else if (g && g.endsWith(">")) C += F + `>${g}${Z}</${A}>`;
      else {
        if (C += F + ">", g && Z !== "" && (g.includes("/>") || g.includes("</"))) C += Z + d.indentBy + g + Z;
        else C += g;
        C += `</${A}>`
      }
      W = !0
    }
    return C
  }

  function My5(I) {
    let d = Object.keys(I);
    for (let G = 0; G < d.length; G++) {
      let Z = d[G];
      if (Z !== ":@") return Z
    }
  }

  function f12(I, d) {
    let G = "";
    if (I && !d.ignoreAttributes)
      for (let Z in I) {
        let C = d.attributeValueProcessor(Z, I[Z]);
        if (C = R12(C, d), C === !0 && d.suppressBooleanAttributes) G += ` ${Z.substr(d.attributeNamePrefix.length)}`;
        else G += ` ${Z.substr(d.attributeNamePrefix.length)}="${C}"`
      }
    return G
  }

  function Sy5(I, d) {
    I = I.substr(0, I.length - d.textNodeName.length - 1);
    let G = I.substr(I.lastIndexOf(".") + 1);
    for (let Z in d.stopNodes)
      if (d.stopNodes[Z] === I || d.stopNodes[Z] === "*." + G) return !0;
    return !1
  }

  function R12(I, d) {
    if (I && I.length > 0 && d.processEntities)
      for (let G = 0; G < d.entities.length; G++) {
        let Z = d.entities[G];
        I = I.replace(Z.regex, Z.val)
      }
    return I
  }
  U12.exports = Ey5
})
// @from(Start 3436066, End 3442427)
M12 = Y((EW3, E12) => {
  var Ly5 = v12(),
    yy5 = {
      attributeNamePrefix: "@_",
      attributesGroupName: !1,
      textNodeName: "#text",
      ignoreAttributes: !0,
      cdataPropName: !1,
      format: !1,
      indentBy: "  ",
      suppressEmptyNode: !1,
      suppressUnpairedNode: !0,
      suppressBooleanAttributes: !0,
      tagValueProcessor: function(I, d) {
        return d
      },
      attributeValueProcessor: function(I, d) {
        return d
      },
      preserveOrder: !1,
      commentPropName: !1,
      unpairedTags: [],
      entities: [{
        regex: new RegExp("&", "g"),
        val: "&amp;"
      }, {
        regex: new RegExp(">", "g"),
        val: "&gt;"
      }, {
        regex: new RegExp("<", "g"),
        val: "&lt;"
      }, {
        regex: new RegExp("'", "g"),
        val: "&apos;"
      }, {
        regex: new RegExp('"', "g"),
        val: "&quot;"
      }],
      processEntities: !0,
      stopNodes: [],
      oneListGroup: !1
    };

  function LD(I) {
    if (this.options = Object.assign({}, yy5, I), this.options.ignoreAttributes || this.options.attributesGroupName) this.isAttribute = function() {
      return !1
    };
    else this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = uy5;
    if (this.processTextOrObjNode = Py5, this.options.format) this.indentate = $y5, this.tagEndChar = `>
`, this.newLine = `
`;
    else this.indentate = function() {
      return ""
    }, this.tagEndChar = ">", this.newLine = ""
  }
  LD.prototype.build = function(I) {
    if (this.options.preserveOrder) return Ly5(I, this.options);
    else {
      if (Array.isArray(I) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) I = {
        [this.options.arrayNodeName]: I
      };
      return this.j2x(I, 0).val
    }
  };
  LD.prototype.j2x = function(I, d) {
    let G = "",
      Z = "";
    for (let C in I)
      if (typeof I[C] === "undefined");
      else if (I[C] === null)
      if (C[0] === "?") Z += this.indentate(d) + "<" + C + "?" + this.tagEndChar;
      else Z += this.indentate(d) + "<" + C + "/" + this.tagEndChar;
    else if (I[C] instanceof Date) Z += this.buildTextValNode(I[C], C, "", d);
    else if (typeof I[C] !== "object") {
      let W = this.isAttribute(C);
      if (W) G += this.buildAttrPairStr(W, "" + I[C]);
      else if (C === this.options.textNodeName) {
        let w = this.options.tagValueProcessor(C, "" + I[C]);
        Z += this.replaceEntitiesValue(w)
      } else Z += this.buildTextValNode(I[C], C, "", d)
    } else if (Array.isArray(I[C])) {
      let W = I[C].length,
        w = "";
      for (let B = 0; B < W; B++) {
        let A = I[C][B];
        if (typeof A === "undefined");
        else if (A === null)
          if (C[0] === "?") Z += this.indentate(d) + "<" + C + "?" + this.tagEndChar;
          else Z += this.indentate(d) + "<" + C + "/" + this.tagEndChar;
        else if (typeof A === "object")
          if (this.options.oneListGroup) w += this.j2x(A, d + 1).val;
          else w += this.processTextOrObjNode(A, C, d);
        else w += this.buildTextValNode(A, C, "", d)
      }
      if (this.options.oneListGroup) w = this.buildObjectNode(w, C, "", d);
      Z += w
    } else if (this.options.attributesGroupName && C === this.options.attributesGroupName) {
      let W = Object.keys(I[C]),
        w = W.length;
      for (let B = 0; B < w; B++) G += this.buildAttrPairStr(W[B], "" + I[C][W[B]])
    } else Z += this.processTextOrObjNode(I[C], C, d);
    return {
      attrStr: G,
      val: Z
    }
  };
  LD.prototype.buildAttrPairStr = function(I, d) {
    if (d = this.options.attributeValueProcessor(I, "" + d), d = this.replaceEntitiesValue(d), this.options.suppressBooleanAttributes && d === "true") return " " + I;
    else return " " + I + '="' + d + '"'
  };

  function Py5(I, d, G) {
    let Z = this.j2x(I, G + 1);
    if (I[this.options.textNodeName] !== void 0 && Object.keys(I).length === 1) return this.buildTextValNode(I[this.options.textNodeName], d, Z.attrStr, G);
    else return this.buildObjectNode(Z.val, d, Z.attrStr, G)
  }
  LD.prototype.buildObjectNode = function(I, d, G, Z) {
    if (I === "")
      if (d[0] === "?") return this.indentate(Z) + "<" + d + G + "?" + this.tagEndChar;
      else return this.indentate(Z) + "<" + d + G + this.closeTag(d) + this.tagEndChar;
    else {
      let C = "</" + d + this.tagEndChar,
        W = "";
      if (d[0] === "?") W = "?", C = "";
      if (G && I.indexOf("<") === -1) return this.indentate(Z) + "<" + d + G + W + ">" + I + C;
      else if (this.options.commentPropName !== !1 && d === this.options.commentPropName && W.length === 0) return this.indentate(Z) + `<!--${I}-->` + this.newLine;
      else return this.indentate(Z) + "<" + d + G + W + this.tagEndChar + I + this.indentate(Z) + C
    }
  };
  LD.prototype.closeTag = function(I) {
    let d = "";
    if (this.options.unpairedTags.indexOf(I) !== -1) {
      if (!this.options.suppressUnpairedNode) d = "/"
    } else if (this.options.suppressEmptyNode) d = "/";
    else d = `></${I}`;
    return d
  };
  LD.prototype.buildTextValNode = function(I, d, G, Z) {
    if (this.options.cdataPropName !== !1 && d === this.options.cdataPropName) return this.indentate(Z) + `<![CDATA[${I}]]>` + this.newLine;
    else if (this.options.commentPropName !== !1 && d === this.options.commentPropName) return this.indentate(Z) + `<!--${I}-->` + this.newLine;
    else if (d[0] === "?") return this.indentate(Z) + "<" + d + G + "?" + this.tagEndChar;
    else {
      let C = this.options.tagValueProcessor(d, I);
      if (C = this.replaceEntitiesValue(C), C === "") return this.indentate(Z) + "<" + d + G + this.closeTag(d) + this.tagEndChar;
      else return this.indentate(Z) + "<" + d + G + ">" + C + "</" + d + this.tagEndChar
    }
  };
  LD.prototype.replaceEntitiesValue = function(I) {
    if (I && I.length > 0 && this.options.processEntities)
      for (let d = 0; d < this.options.entities.length; d++) {
        let G = this.options.entities[d];
        I = I.replace(G.regex, G.val)
      }
    return I
  };

  function $y5(I) {
    return this.options.indentBy.repeat(I)
  }

  function uy5(I) {
    if (I.startsWith(this.options.attributeNamePrefix)) return I.substr(this.attrPrefixLen);
    else return !1
  }
  E12.exports = LD
})
// @from(Start 3442433, End 3442597)
L12 = Y((MW3, S12) => {
  var Ty5 = _Y1(),
    Oy5 = Q12(),
    my5 = M12();
  S12.exports = {
    XMLParser: Oy5,
    XMLValidator: Ty5,
    XMLBuilder: my5
  }
})
// @from(Start 3442603, End 3465919)
jV = Y((u12) => {
  Object.defineProperty(u12, "__esModule", {
    value: !0
  });
  u12.de_GetSessionTokenCommand = u12.de_GetFederationTokenCommand = u12.de_GetCallerIdentityCommand = u12.de_GetAccessKeyInfoCommand = u12.de_DecodeAuthorizationMessageCommand = u12.de_AssumeRoleWithWebIdentityCommand = u12.de_AssumeRoleWithSAMLCommand = u12.de_AssumeRoleCommand = u12.se_GetSessionTokenCommand = u12.se_GetFederationTokenCommand = u12.se_GetCallerIdentityCommand = u12.se_GetAccessKeyInfoCommand = u12.se_DecodeAuthorizationMessageCommand = u12.se_AssumeRoleWithWebIdentityCommand = u12.se_AssumeRoleWithSAMLCommand = u12.se_AssumeRoleCommand = void 0;
  var ly5 = t8(),
    s2 = h2(),
    by5 = L12(),
    yD = SD(),
    hy5 = Pn(),
    jy5 = async (I, d) => {
      let G = uD,
        Z;
      return Z = OD({
        ...DP5(I, d),
        Action: "AssumeRole",
        Version: "2011-06-15"
      }), $D(d, G, "/", void 0, Z)
    };
  u12.se_AssumeRoleCommand = jy5;
  var ky5 = async (I, d) => {
    let G = uD,
      Z;
    return Z = OD({
      ...HP5(I, d),
      Action: "AssumeRoleWithSAML",
      Version: "2011-06-15"
    }), $D(d, G, "/", void 0, Z)
  };
  u12.se_AssumeRoleWithSAMLCommand = ky5;
  var xy5 = async (I, d) => {
    let G = uD,
      Z;
    return Z = OD({
      ...FP5(I, d),
      Action: "AssumeRoleWithWebIdentity",
      Version: "2011-06-15"
    }), $D(d, G, "/", void 0, Z)
  };
  u12.se_AssumeRoleWithWebIdentityCommand = xy5;
  var cy5 = async (I, d) => {
    let G = uD,
      Z;
    return Z = OD({
      ...gP5(I, d),
      Action: "DecodeAuthorizationMessage",
      Version: "2011-06-15"
    }), $D(d, G, "/", void 0, Z)
  };
  u12.se_DecodeAuthorizationMessageCommand = cy5;
  var py5 = async (I, d) => {
    let G = uD,
      Z;
    return Z = OD({
      ...JP5(I, d),
      Action: "GetAccessKeyInfo",
      Version: "2011-06-15"
    }), $D(d, G, "/", void 0, Z)
  };
  u12.se_GetAccessKeyInfoCommand = py5;
  var iy5 = async (I, d) => {
    let G = uD,
      Z;
    return Z = OD({
      ...KP5(I, d),
      Action: "GetCallerIdentity",
      Version: "2011-06-15"
    }), $D(d, G, "/", void 0, Z)
  };
  u12.se_GetCallerIdentityCommand = iy5;
  var ny5 = async (I, d) => {
    let G = uD,
      Z;
    return Z = OD({
      ...NP5(I, d),
      Action: "GetFederationToken",
      Version: "2011-06-15"
    }), $D(d, G, "/", void 0, Z)
  };
  u12.se_GetFederationTokenCommand = ny5;
  var ry5 = async (I, d) => {
    let G = uD,
      Z;
    return Z = OD({
      ...zP5(I, d),
      Action: "GetSessionToken",
      Version: "2011-06-15"
    }), $D(d, G, "/", void 0, Z)
  };
  u12.se_GetSessionTokenCommand = ry5;
  var ay5 = async (I, d) => {
    if (I.statusCode >= 300) return sy5(I, d);
    let G = await hV(I.body, d),
      Z = {};
    return Z = vP5(G.AssumeRoleResult, d), {
      $metadata: m7(I),
      ...Z
    }
  };
  u12.de_AssumeRoleCommand = ay5;
  var sy5 = async (I, d) => {
    let G = {
        ...I,
        body: await TD(I.body, d)
      },
      Z = mD(I, G.body);
    switch (Z) {
      case "ExpiredTokenException":
      case "com.amazonaws.sts#ExpiredTokenException":
        throw await gY1(G, d);
      case "MalformedPolicyDocument":
      case "com.amazonaws.sts#MalformedPolicyDocumentException":
        throw await un(G, d);
      case "PackedPolicyTooLarge":
      case "com.amazonaws.sts#PackedPolicyTooLargeException":
        throw await Tn(G, d);
      case "RegionDisabledException":
      case "com.amazonaws.sts#RegionDisabledException":
        throw await KP(G, d);
      default:
        let C = G.body;
        return PD({
          output: I,
          parsedBody: C.Error,
          errorCode: Z
        })
    }
  }, oy5 = async (I, d) => {
    if (I.statusCode >= 300) return ey5(I, d);
    let G = await hV(I.body, d),
      Z = {};
    return Z = EP5(G.AssumeRoleWithSAMLResult, d), {
      $metadata: m7(I),
      ...Z
    }
  };
  u12.de_AssumeRoleWithSAMLCommand = oy5;
  var ey5 = async (I, d) => {
    let G = {
        ...I,
        body: await TD(I.body, d)
      },
      Z = mD(I, G.body);
    switch (Z) {
      case "ExpiredTokenException":
      case "com.amazonaws.sts#ExpiredTokenException":
        throw await gY1(G, d);
      case "IDPRejectedClaim":
      case "com.amazonaws.sts#IDPRejectedClaimException":
        throw await y12(G, d);
      case "InvalidIdentityToken":
      case "com.amazonaws.sts#InvalidIdentityTokenException":
        throw await P12(G, d);
      case "MalformedPolicyDocument":
      case "com.amazonaws.sts#MalformedPolicyDocumentException":
        throw await un(G, d);
      case "PackedPolicyTooLarge":
      case "com.amazonaws.sts#PackedPolicyTooLargeException":
        throw await Tn(G, d);
      case "RegionDisabledException":
      case "com.amazonaws.sts#RegionDisabledException":
        throw await KP(G, d);
      default:
        let C = G.body;
        return PD({
          output: I,
          parsedBody: C.Error,
          errorCode: Z
        })
    }
  }, ty5 = async (I, d) => {
    if (I.statusCode >= 300) return IP5(I, d);
    let G = await hV(I.body, d),
      Z = {};
    return Z = MP5(G.AssumeRoleWithWebIdentityResult, d), {
      $metadata: m7(I),
      ...Z
    }
  };
  u12.de_AssumeRoleWithWebIdentityCommand = ty5;
  var IP5 = async (I, d) => {
    let G = {
        ...I,
        body: await TD(I.body, d)
      },
      Z = mD(I, G.body);
    switch (Z) {
      case "ExpiredTokenException":
      case "com.amazonaws.sts#ExpiredTokenException":
        throw await gY1(G, d);
      case "IDPCommunicationError":
      case "com.amazonaws.sts#IDPCommunicationErrorException":
        throw await YP5(G, d);
      case "IDPRejectedClaim":
      case "com.amazonaws.sts#IDPRejectedClaimException":
        throw await y12(G, d);
      case "InvalidIdentityToken":
      case "com.amazonaws.sts#InvalidIdentityTokenException":
        throw await P12(G, d);
      case "MalformedPolicyDocument":
      case "com.amazonaws.sts#MalformedPolicyDocumentException":
        throw await un(G, d);
      case "PackedPolicyTooLarge":
      case "com.amazonaws.sts#PackedPolicyTooLargeException":
        throw await Tn(G, d);
      case "RegionDisabledException":
      case "com.amazonaws.sts#RegionDisabledException":
        throw await KP(G, d);
      default:
        let C = G.body;
        return PD({
          output: I,
          parsedBody: C.Error,
          errorCode: Z
        })
    }
  }, dP5 = async (I, d) => {
    if (I.statusCode >= 300) return GP5(I, d);
    let G = await hV(I.body, d),
      Z = {};
    return Z = SP5(G.DecodeAuthorizationMessageResult, d), {
      $metadata: m7(I),
      ...Z
    }
  };
  u12.de_DecodeAuthorizationMessageCommand = dP5;
  var GP5 = async (I, d) => {
    let G = {
        ...I,
        body: await TD(I.body, d)
      },
      Z = mD(I, G.body);
    switch (Z) {
      case "InvalidAuthorizationMessageException":
      case "com.amazonaws.sts#InvalidAuthorizationMessageException":
        throw await _P5(G, d);
      default:
        let C = G.body;
        return PD({
          output: I,
          parsedBody: C.Error,
          errorCode: Z
        })
    }
  }, ZP5 = async (I, d) => {
    if (I.statusCode >= 300) return CP5(I, d);
    let G = await hV(I.body, d),
      Z = {};
    return Z = PP5(G.GetAccessKeyInfoResult, d), {
      $metadata: m7(I),
      ...Z
    }
  };
  u12.de_GetAccessKeyInfoCommand = ZP5;
  var CP5 = async (I, d) => {
    let G = {
        ...I,
        body: await TD(I.body, d)
      },
      Z = mD(I, G.body),
      C = G.body;
    return PD({
      output: I,
      parsedBody: C.Error,
      errorCode: Z
    })
  }, WP5 = async (I, d) => {
    if (I.statusCode >= 300) return wP5(I, d);
    let G = await hV(I.body, d),
      Z = {};
    return Z = $P5(G.GetCallerIdentityResult, d), {
      $metadata: m7(I),
      ...Z
    }
  };
  u12.de_GetCallerIdentityCommand = WP5;
  var wP5 = async (I, d) => {
    let G = {
        ...I,
        body: await TD(I.body, d)
      },
      Z = mD(I, G.body),
      C = G.body;
    return PD({
      output: I,
      parsedBody: C.Error,
      errorCode: Z
    })
  }, BP5 = async (I, d) => {
    if (I.statusCode >= 300) return AP5(I, d);
    let G = await hV(I.body, d),
      Z = {};
    return Z = uP5(G.GetFederationTokenResult, d), {
      $metadata: m7(I),
      ...Z
    }
  };
  u12.de_GetFederationTokenCommand = BP5;
  var AP5 = async (I, d) => {
    let G = {
        ...I,
        body: await TD(I.body, d)
      },
      Z = mD(I, G.body);
    switch (Z) {
      case "MalformedPolicyDocument":
      case "com.amazonaws.sts#MalformedPolicyDocumentException":
        throw await un(G, d);
      case "PackedPolicyTooLarge":
      case "com.amazonaws.sts#PackedPolicyTooLargeException":
        throw await Tn(G, d);
      case "RegionDisabledException":
      case "com.amazonaws.sts#RegionDisabledException":
        throw await KP(G, d);
      default:
        let C = G.body;
        return PD({
          output: I,
          parsedBody: C.Error,
          errorCode: Z
        })
    }
  }, VP5 = async (I, d) => {
    if (I.statusCode >= 300) return XP5(I, d);
    let G = await hV(I.body, d),
      Z = {};
    return Z = TP5(G.GetSessionTokenResult, d), {
      $metadata: m7(I),
      ...Z
    }
  };
  u12.de_GetSessionTokenCommand = VP5;
  var XP5 = async (I, d) => {
    let G = {
        ...I,
        body: await TD(I.body, d)
      },
      Z = mD(I, G.body);
    switch (Z) {
      case "RegionDisabledException":
      case "com.amazonaws.sts#RegionDisabledException":
        throw await KP(G, d);
      default:
        let C = G.body;
        return PD({
          output: I,
          parsedBody: C.Error,
          errorCode: Z
        })
    }
  }, gY1 = async (I, d) => {
    let G = I.body,
      Z = LP5(G.Error, d),
      C = new yD.ExpiredTokenException({
        $metadata: m7(I),
        ...Z
      });
    return s2.decorateServiceException(C, G)
  }, YP5 = async (I, d) => {
    let G = I.body,
      Z = OP5(G.Error, d),
      C = new yD.IDPCommunicationErrorException({
        $metadata: m7(I),
        ...Z
      });
    return s2.decorateServiceException(C, G)
  }, y12 = async (I, d) => {
    let G = I.body,
      Z = mP5(G.Error, d),
      C = new yD.IDPRejectedClaimException({
        $metadata: m7(I),
        ...Z
      });
    return s2.decorateServiceException(C, G)
  }, _P5 = async (I, d) => {
    let G = I.body,
      Z = lP5(G.Error, d),
      C = new yD.InvalidAuthorizationMessageException({
        $metadata: m7(I),
        ...Z
      });
    return s2.decorateServiceException(C, G)
  }, P12 = async (I, d) => {
    let G = I.body,
      Z = bP5(G.Error, d),
      C = new yD.InvalidIdentityTokenException({
        $metadata: m7(I),
        ...Z
      });
    return s2.decorateServiceException(C, G)
  }, un = async (I, d) => {
    let G = I.body,
      Z = hP5(G.Error, d),
      C = new yD.MalformedPolicyDocumentException({
        $metadata: m7(I),
        ...Z
      });
    return s2.decorateServiceException(C, G)
  }, Tn = async (I, d) => {
    let G = I.body,
      Z = jP5(G.Error, d),
      C = new yD.PackedPolicyTooLargeException({
        $metadata: m7(I),
        ...Z
      });
    return s2.decorateServiceException(C, G)
  }, KP = async (I, d) => {
    let G = I.body,
      Z = kP5(G.Error, d),
      C = new yD.RegionDisabledException({
        $metadata: m7(I),
        ...Z
      });
    return s2.decorateServiceException(C, G)
  }, DP5 = (I, d) => {
    let G = {};
    if (I.RoleArn != null) G.RoleArn = I.RoleArn;
    if (I.RoleSessionName != null) G.RoleSessionName = I.RoleSessionName;
    if (I.PolicyArns != null) {
      let Z = On(I.PolicyArns, d);
      if (I.PolicyArns?.length === 0) G.PolicyArns = [];
      Object.entries(Z).forEach(([C, W]) => {
        let w = `PolicyArns.${C}`;
        G[w] = W
      })
    }
    if (I.Policy != null) G.Policy = I.Policy;
    if (I.DurationSeconds != null) G.DurationSeconds = I.DurationSeconds;
    if (I.Tags != null) {
      let Z = $12(I.Tags, d);
      if (I.Tags?.length === 0) G.Tags = [];
      Object.entries(Z).forEach(([C, W]) => {
        let w = `Tags.${C}`;
        G[w] = W
      })
    }
    if (I.TransitiveTagKeys != null) {
      let Z = UP5(I.TransitiveTagKeys, d);
      if (I.TransitiveTagKeys?.length === 0) G.TransitiveTagKeys = [];
      Object.entries(Z).forEach(([C, W]) => {
        let w = `TransitiveTagKeys.${C}`;
        G[w] = W
      })
    }
    if (I.ExternalId != null) G.ExternalId = I.ExternalId;
    if (I.SerialNumber != null) G.SerialNumber = I.SerialNumber;
    if (I.TokenCode != null) G.TokenCode = I.TokenCode;
    if (I.SourceIdentity != null) G.SourceIdentity = I.SourceIdentity;
    if (I.ProvidedContexts != null) {
      let Z = qP5(I.ProvidedContexts, d);
      if (I.ProvidedContexts?.length === 0) G.ProvidedContexts = [];
      Object.entries(Z).forEach(([C, W]) => {
        let w = `ProvidedContexts.${C}`;
        G[w] = W
      })
    }
    return G
  }, HP5 = (I, d) => {
    let G = {};
    if (I.RoleArn != null) G.RoleArn = I.RoleArn;
    if (I.PrincipalArn != null) G.PrincipalArn = I.PrincipalArn;
    if (I.SAMLAssertion != null) G.SAMLAssertion = I.SAMLAssertion;
    if (I.PolicyArns != null) {
      let Z = On(I.PolicyArns, d);
      if (I.PolicyArns?.length === 0) G.PolicyArns = [];
      Object.entries(Z).forEach(([C, W]) => {
        let w = `PolicyArns.${C}`;
        G[w] = W
      })
    }
    if (I.Policy != null) G.Policy = I.Policy;
    if (I.DurationSeconds != null) G.DurationSeconds = I.DurationSeconds;
    return G
  }, FP5 = (I, d) => {
    let G = {};
    if (I.RoleArn != null) G.RoleArn = I.RoleArn;
    if (I.RoleSessionName != null) G.RoleSessionName = I.RoleSessionName;
    if (I.WebIdentityToken != null) G.WebIdentityToken = I.WebIdentityToken;
    if (I.ProviderId != null) G.ProviderId = I.ProviderId;
    if (I.PolicyArns != null) {
      let Z = On(I.PolicyArns, d);
      if (I.PolicyArns?.length === 0) G.PolicyArns = [];
      Object.entries(Z).forEach(([C, W]) => {
        let w = `PolicyArns.${C}`;
        G[w] = W
      })
    }
    if (I.Policy != null) G.Policy = I.Policy;
    if (I.DurationSeconds != null) G.DurationSeconds = I.DurationSeconds;
    return G
  }, gP5 = (I, d) => {
    let G = {};
    if (I.EncodedMessage != null) G.EncodedMessage = I.EncodedMessage;
    return G
  }, JP5 = (I, d) => {
    let G = {};
    if (I.AccessKeyId != null) G.AccessKeyId = I.AccessKeyId;
    return G
  }, KP5 = (I, d) => {
    return {}
  }, NP5 = (I, d) => {
    let G = {};
    if (I.Name != null) G.Name = I.Name;
    if (I.Policy != null) G.Policy = I.Policy;
    if (I.PolicyArns != null) {
      let Z = On(I.PolicyArns, d);
      if (I.PolicyArns?.length === 0) G.PolicyArns = [];
      Object.entries(Z).forEach(([C, W]) => {
        let w = `PolicyArns.${C}`;
        G[w] = W
      })
    }
    if (I.DurationSeconds != null) G.DurationSeconds = I.DurationSeconds;
    if (I.Tags != null) {
      let Z = $12(I.Tags, d);
      if (I.Tags?.length === 0) G.Tags = [];
      Object.entries(Z).forEach(([C, W]) => {
        let w = `Tags.${C}`;
        G[w] = W
      })
    }
    return G
  }, zP5 = (I, d) => {
    let G = {};
    if (I.DurationSeconds != null) G.DurationSeconds = I.DurationSeconds;
    if (I.SerialNumber != null) G.SerialNumber = I.SerialNumber;
    if (I.TokenCode != null) G.TokenCode = I.TokenCode;
    return G
  }, On = (I, d) => {
    let G = {},
      Z = 1;
    for (let C of I) {
      if (C === null) continue;
      let W = QP5(C, d);
      Object.entries(W).forEach(([w, B]) => {
        G[`member.${Z}.${w}`] = B
      }), Z++
    }
    return G
  }, QP5 = (I, d) => {
    let G = {};
    if (I.arn != null) G.arn = I.arn;
    return G
  }, fP5 = (I, d) => {
    let G = {};
    if (I.ProviderArn != null) G.ProviderArn = I.ProviderArn;
    if (I.ContextAssertion != null) G.ContextAssertion = I.ContextAssertion;
    return G
  }, qP5 = (I, d) => {
    let G = {},
      Z = 1;
    for (let C of I) {
      if (C === null) continue;
      let W = fP5(C, d);
      Object.entries(W).forEach(([w, B]) => {
        G[`member.${Z}.${w}`] = B
      }), Z++
    }
    return G
  }, RP5 = (I, d) => {
    let G = {};
    if (I.Key != null) G.Key = I.Key;
    if (I.Value != null) G.Value = I.Value;
    return G
  }, UP5 = (I, d) => {
    let G = {},
      Z = 1;
    for (let C of I) {
      if (C === null) continue;
      G[`member.${Z}`] = C, Z++
    }
    return G
  }, $12 = (I, d) => {
    let G = {},
      Z = 1;
    for (let C of I) {
      if (C === null) continue;
      let W = RP5(C, d);
      Object.entries(W).forEach(([w, B]) => {
        G[`member.${Z}.${w}`] = B
      }), Z++
    }
    return G
  }, JY1 = (I, d) => {
    let G = {};
    if (I.AssumedRoleId !== void 0) G.AssumedRoleId = s2.expectString(I.AssumedRoleId);
    if (I.Arn !== void 0) G.Arn = s2.expectString(I.Arn);
    return G
  }, vP5 = (I, d) => {
    let G = {};
    if (I.Credentials !== void 0) G.Credentials = NP(I.Credentials, d);
    if (I.AssumedRoleUser !== void 0) G.AssumedRoleUser = JY1(I.AssumedRoleUser, d);
    if (I.PackedPolicySize !== void 0) G.PackedPolicySize = s2.strictParseInt32(I.PackedPolicySize);
    if (I.SourceIdentity !== void 0) G.SourceIdentity = s2.expectString(I.SourceIdentity);
    return G
  }, EP5 = (I, d) => {
    let G = {};
    if (I.Credentials !== void 0) G.Credentials = NP(I.Credentials, d);
    if (I.AssumedRoleUser !== void 0) G.AssumedRoleUser = JY1(I.AssumedRoleUser, d);
    if (I.PackedPolicySize !== void 0) G.PackedPolicySize = s2.strictParseInt32(I.PackedPolicySize);
    if (I.Subject !== void 0) G.Subject = s2.expectString(I.Subject);
    if (I.SubjectType !== void 0) G.SubjectType = s2.expectString(I.SubjectType);
    if (I.Issuer !== void 0) G.Issuer = s2.expectString(I.Issuer);
    if (I.Audience !== void 0) G.Audience = s2.expectString(I.Audience);
    if (I.NameQualifier !== void 0) G.NameQualifier = s2.expectString(I.NameQualifier);
    if (I.SourceIdentity !== void 0) G.SourceIdentity = s2.expectString(I.SourceIdentity);
    return G
  }, MP5 = (I, d) => {
    let G = {};
    if (I.Credentials !== void 0) G.Credentials = NP(I.Credentials, d);
    if (I.SubjectFromWebIdentityToken !== void 0) G.SubjectFromWebIdentityToken = s2.expectString(I.SubjectFromWebIdentityToken);
    if (I.AssumedRoleUser !== void 0) G.AssumedRoleUser = JY1(I.AssumedRoleUser, d);
    if (I.PackedPolicySize !== void 0) G.PackedPolicySize = s2.strictParseInt32(I.PackedPolicySize);
    if (I.Provider !== void 0) G.Provider = s2.expectString(I.Provider);
    if (I.Audience !== void 0) G.Audience = s2.expectString(I.Audience);
    if (I.SourceIdentity !== void 0) G.SourceIdentity = s2.expectString(I.SourceIdentity);
    return G
  }, NP = (I, d) => {
    let G = {};
    if (I.AccessKeyId !== void 0) G.AccessKeyId = s2.expectString(I.AccessKeyId);
    if (I.SecretAccessKey !== void 0) G.SecretAccessKey = s2.expectString(I.SecretAccessKey);
    if (I.SessionToken !== void 0) G.SessionToken = s2.expectString(I.SessionToken);
    if (I.Expiration !== void 0) G.Expiration = s2.expectNonNull(s2.parseRfc3339DateTimeWithOffset(I.Expiration));
    return G
  }, SP5 = (I, d) => {
    let G = {};
    if (I.DecodedMessage !== void 0) G.DecodedMessage = s2.expectString(I.DecodedMessage);
    return G
  }, LP5 = (I, d) => {
    let G = {};
    if (I.message !== void 0) G.message = s2.expectString(I.message);
    return G
  }, yP5 = (I, d) => {
    let G = {};
    if (I.FederatedUserId !== void 0) G.FederatedUserId = s2.expectString(I.FederatedUserId);
    if (I.Arn !== void 0) G.Arn = s2.expectString(I.Arn);
    return G
  }, PP5 = (I, d) => {
    let G = {};
    if (I.Account !== void 0) G.Account = s2.expectString(I.Account);
    return G
  }, $P5 = (I, d) => {
    let G = {};
    if (I.UserId !== void 0) G.UserId = s2.expectString(I.UserId);
    if (I.Account !== void 0) G.Account = s2.expectString(I.Account);
    if (I.Arn !== void 0) G.Arn = s2.expectString(I.Arn);
    return G
  }, uP5 = (I, d) => {
    let G = {};
    if (I.Credentials !== void 0) G.Credentials = NP(I.Credentials, d);
    if (I.FederatedUser !== void 0) G.FederatedUser = yP5(I.FederatedUser, d);
    if (I.PackedPolicySize !== void 0) G.PackedPolicySize = s2.strictParseInt32(I.PackedPolicySize);
    return G
  }, TP5 = (I, d) => {
    let G = {};
    if (I.Credentials !== void 0) G.Credentials = NP(I.Credentials, d);
    return G
  }, OP5 = (I, d) => {
    let G = {};
    if (I.message !== void 0) G.message = s2.expectString(I.message);
    return G
  }, mP5 = (I, d) => {
    let G = {};
    if (I.message !== void 0) G.message = s2.expectString(I.message);
    return G
  }, lP5 = (I, d) => {
    let G = {};
    if (I.message !== void 0) G.message = s2.expectString(I.message);
    return G
  }, bP5 = (I, d) => {
    let G = {};
    if (I.message !== void 0) G.message = s2.expectString(I.message);
    return G
  }, hP5 = (I, d) => {
    let G = {};
    if (I.message !== void 0) G.message = s2.expectString(I.message);
    return G
  }, jP5 = (I, d) => {
    let G = {};
    if (I.message !== void 0) G.message = s2.expectString(I.message);
    return G
  }, kP5 = (I, d) => {
    let G = {};
    if (I.message !== void 0) G.message = s2.expectString(I.message);
    return G
  }, m7 = (I) => ({
    httpStatusCode: I.statusCode,
    requestId: I.headers["x-amzn-requestid"] ?? I.headers["x-amzn-request-id"] ?? I.headers["x-amz-request-id"],
    extendedRequestId: I.headers["x-amz-id-2"],
    cfId: I.headers["x-amz-cf-id"]
  }), xP5 = (I, d) => s2.collectBody(I, d).then((G) => d.utf8Encoder(G)), PD = s2.withBaseException(hy5.STSServiceException), $D = async (I, d, G, Z, C) => {
    let {
      hostname: W,
      protocol: w = "https",
      port: B,
      path: A
    } = await I.endpoint(), V = {
      protocol: w,
      hostname: W,
      port: B,
      method: "POST",
      path: A.endsWith("/") ? A.slice(0, -1) + G : A + G,
      headers: d
    };
    if (Z !== void 0) V.hostname = Z;
    if (C !== void 0) V.body = C;
    return new ly5.HttpRequest(V)
  }, uD = {
    "content-type": "application/x-www-form-urlencoded"
  }, hV = (I, d) => xP5(I, d).then((G) => {
    if (G.length) {
      let Z = new by5.XMLParser({
        attributeNamePrefix: "",
        htmlEntities: !0,
        ignoreAttributes: !1,
        ignoreDeclaration: !0,
        parseTagValue: !1,
        trimValues: !1,
        tagValueProcessor: (A, V) => V.trim() === "" && V.includes(`
`) ? "" : void 0
      });
      Z.addEntity("#xD", "\r"), Z.addEntity("#10", `
`);
      let C = Z.parse(G),
        W = "#text",
        w = Object.keys(C)[0],
        B = C[w];
      if (B[W]) B[w] = B[W], delete B[W];
      return s2.getValueFromTextNode(B)
    }
    return {}
  }), TD = async (I, d) => {
    let G = await hV(I, d);
    if (G.Error) G.Error.message = G.Error.message ?? G.Error.Message;
    return G
  }, OD = (I) => Object.entries(I).map(([d, G]) => s2.extendedEncodeURIComponent(d) + "=" + s2.extendedEncodeURIComponent(G)).join("&"), mD = (I, d) => {
    if (d.Error?.Code !== void 0) return d.Error.Code;
    if (I.statusCode == 404) return "NotFound"
  }
})
// @from(Start 3465925, End 3468010)
mn = Y((NY1) => {
  Object.defineProperty(NY1, "__esModule", {
    value: !0
  });
  NY1.AssumeRoleCommand = NY1.$Command = void 0;
  var W$5 = OV(),
    w$5 = c3(),
    B$5 = n6(),
    m12 = h2();
  Object.defineProperty(NY1, "$Command", {
    enumerable: !0,
    get: function() {
      return m12.Command
    }
  });
  var A$5 = k3(),
    V$5 = SD(),
    O12 = jV();
  class KY1 extends m12.Command {
    static getEndpointParameterInstructions() {
      return {
        UseGlobalEndpoint: {
          type: "builtInParams",
          name: "useGlobalEndpoint"
        },
        UseFIPS: {
          type: "builtInParams",
          name: "useFipsEndpoint"
        },
        Endpoint: {
          type: "builtInParams",
          name: "endpoint"
        },
        Region: {
          type: "builtInParams",
          name: "region"
        },
        UseDualStack: {
          type: "builtInParams",
          name: "useDualstackEndpoint"
        }
      }
    }
    constructor(I) {
      super();
      this.input = I
    }
    resolveMiddleware(I, d, G) {
      this.middlewareStack.use(B$5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(w$5.getEndpointPlugin(d, KY1.getEndpointParameterInstructions())), this.middlewareStack.use(W$5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "STSClient",
          commandName: "AssumeRoleCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: V$5.AssumeRoleResponseFilterSensitiveLog,
          [A$5.SMITHY_CONTEXT_KEY]: {
            service: "AWSSecurityTokenServiceV20110615",
            operation: "AssumeRole"
          }
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return O12.se_AssumeRoleCommand(I, d)
    }
    deserialize(I, d) {
      return O12.de_AssumeRoleCommand(I, d)
    }
  }
  NY1.AssumeRoleCommand = KY1
})
// @from(Start 3468016, End 3470185)
ln = Y((QY1) => {
  Object.defineProperty(QY1, "__esModule", {
    value: !0
  });
  QY1.AssumeRoleWithWebIdentityCommand = QY1.$Command = void 0;
  var X$5 = c3(),
    Y$5 = n6(),
    j12 = h2();
  Object.defineProperty(QY1, "$Command", {
    enumerable: !0,
    get: function() {
      return j12.Command
    }
  });
  var _$5 = k3(),
    b12 = SD(),
    h12 = jV();
  class zY1 extends j12.Command {
    static getEndpointParameterInstructions() {
      return {
        UseGlobalEndpoint: {
          type: "builtInParams",
          name: "useGlobalEndpoint"
        },
        UseFIPS: {
          type: "builtInParams",
          name: "useFipsEndpoint"
        },
        Endpoint: {
          type: "builtInParams",
          name: "endpoint"
        },
        Region: {
          type: "builtInParams",
          name: "region"
        },
        UseDualStack: {
          type: "builtInParams",
          name: "useDualstackEndpoint"
        }
      }
    }
    constructor(I) {
      super();
      this.input = I
    }
    resolveMiddleware(I, d, G) {
      this.middlewareStack.use(Y$5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(X$5.getEndpointPlugin(d, zY1.getEndpointParameterInstructions()));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "STSClient",
          commandName: "AssumeRoleWithWebIdentityCommand",
          inputFilterSensitiveLog: b12.AssumeRoleWithWebIdentityRequestFilterSensitiveLog,
          outputFilterSensitiveLog: b12.AssumeRoleWithWebIdentityResponseFilterSensitiveLog,
          [_$5.SMITHY_CONTEXT_KEY]: {
            service: "AWSSecurityTokenServiceV20110615",
            operation: "AssumeRoleWithWebIdentity"
          }
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return h12.se_AssumeRoleWithWebIdentityCommand(I, d)
    }
    deserialize(I, d) {
      return h12.de_AssumeRoleWithWebIdentityCommand(I, d)
    }
  }
  QY1.AssumeRoleWithWebIdentityCommand = zY1
})
// @from(Start 3470191, End 3472673)
fY1 = Y((p12) => {
  Object.defineProperty(p12, "__esModule", {
    value: !0
  });
  p12.decorateDefaultCredentialProvider = p12.getDefaultRoleAssumerWithWebIdentity = p12.getDefaultRoleAssumer = void 0;
  var D$5 = mn(),
    H$5 = ln(),
    x12 = "us-east-1",
    c12 = (I) => {
      if (typeof I !== "function") return I === void 0 ? x12 : I;
      return async () => {
        try {
          return await I()
        } catch (d) {
          return x12
        }
      }
    },
    F$5 = (I, d) => {
      let G, Z;
      return async (C, W) => {
        if (Z = C, !G) {
          let {
            logger: B,
            region: A,
            requestHandler: V
          } = I;
          G = new d({
            logger: B,
            credentialDefaultProvider: () => async () => Z,
            region: c12(A || I.region),
            ...V ? {
              requestHandler: V
            } : {}
          })
        }
        let {
          Credentials: w
        } = await G.send(new D$5.AssumeRoleCommand(W));
        if (!w || !w.AccessKeyId || !w.SecretAccessKey) throw new Error(`Invalid response from STS.assumeRole call with role ${W.RoleArn}`);
        return {
          accessKeyId: w.AccessKeyId,
          secretAccessKey: w.SecretAccessKey,
          sessionToken: w.SessionToken,
          expiration: w.Expiration
        }
      }
    };
  p12.getDefaultRoleAssumer = F$5;
  var g$5 = (I, d) => {
    let G;
    return async (Z) => {
      if (!G) {
        let {
          logger: W,
          region: w,
          requestHandler: B
        } = I;
        G = new d({
          logger: W,
          region: c12(w || I.region),
          ...B ? {
            requestHandler: B
          } : {}
        })
      }
      let {
        Credentials: C
      } = await G.send(new H$5.AssumeRoleWithWebIdentityCommand(Z));
      if (!C || !C.AccessKeyId || !C.SecretAccessKey) throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${Z.RoleArn}`);
      return {
        accessKeyId: C.AccessKeyId,
        secretAccessKey: C.SecretAccessKey,
        sessionToken: C.SessionToken,
        expiration: C.Expiration
      }
    }
  };
  p12.getDefaultRoleAssumerWithWebIdentity = g$5;
  var J$5 = (I) => (d) => I({
    roleAssumer: p12.getDefaultRoleAssumer(d, d.stsClientCtor),
    roleAssumerWithWebIdentity: p12.getDefaultRoleAssumerWithWebIdentity(d, d.stsClientCtor),
    ...d
  });
  p12.decorateDefaultCredentialProvider = J$5
})
// @from(Start 3472679, End 3473548)
d02 = Y((a12) => {
  Object.defineProperty(a12, "__esModule", {
    value: !0
  });
  a12.fromEnv = a12.ENV_EXPIRATION = a12.ENV_SESSION = a12.ENV_SECRET = a12.ENV_KEY = void 0;
  var K$5 = x3();
  a12.ENV_KEY = "AWS_ACCESS_KEY_ID";
  a12.ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
  a12.ENV_SESSION = "AWS_SESSION_TOKEN";
  a12.ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";
  var N$5 = () => async () => {
    let I = process.env[a12.ENV_KEY],
      d = process.env[a12.ENV_SECRET],
      G = process.env[a12.ENV_SESSION],
      Z = process.env[a12.ENV_EXPIRATION];
    if (I && d) return {
      accessKeyId: I,
      secretAccessKey: d,
      ...G && {
        sessionToken: G
      },
      ...Z && {
        expiration: new Date(Z)
      }
    };
    throw new K$5.CredentialsProviderError("Unable to find environment variable credentials.")
  };
  a12.fromEnv = N$5
})
// @from(Start 3473554, End 3473689)
RY1 = Y((qY1) => {
  Object.defineProperty(qY1, "__esModule", {
    value: !0
  });
  var z$5 = x1();
  z$5.__exportStar(d02(), qY1)
})