
// @from(Start 3473695, End 3484977)
kn = Y((mW3, F02) => {
  var {
    defineProperty: jn,
    getOwnPropertyDescriptor: Q$5,
    getOwnPropertyNames: f$5
  } = Object, q$5 = Object.prototype.hasOwnProperty, L6 = (I, d) => jn(I, "name", {
    value: d,
    configurable: !0
  }), R$5 = (I, d) => {
    for (var G in d) jn(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, U$5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of f$5(d))
        if (!q$5.call(I, C) && C !== G) jn(I, C, {
          get: () => d[C],
          enumerable: !(Z = Q$5(d, C)) || Z.enumerable
        })
    }
    return I
  }, v$5 = (I) => U$5(jn({}, "__esModule", {
    value: !0
  }), I), W02 = {};
  R$5(W02, {
    DEFAULT_MAX_RETRIES: () => V02,
    DEFAULT_TIMEOUT: () => A02,
    ENV_CMDS_AUTH_TOKEN: () => EY1,
    ENV_CMDS_FULL_URI: () => bn,
    ENV_CMDS_RELATIVE_URI: () => hn,
    Endpoint: () => Y02,
    fromContainerMetadata: () => L$5,
    fromInstanceMetadata: () => o$5,
    getInstanceMetadataEndpoint: () => D02,
    httpRequest: () => Uq,
    providerConfigFromInit: () => MY1
  });
  F02.exports = v$5(W02);
  var E$5 = B1("url"),
    DB = x3(),
    M$5 = B1("buffer"),
    S$5 = B1("http");

  function Uq(I) {
    return new Promise((d, G) => {
      var Z;
      let C = S$5.request({
        method: "GET",
        ...I,
        hostname: (Z = I.hostname) == null ? void 0 : Z.replace(/^\[(.+)\]$/, "$1")
      });
      C.on("error", (W) => {
        G(Object.assign(new DB.ProviderError("Unable to connect to instance metadata service"), W)), C.destroy()
      }), C.on("timeout", () => {
        G(new DB.ProviderError("TimeoutError from instance metadata service")), C.destroy()
      }), C.on("response", (W) => {
        let {
          statusCode: w = 400
        } = W;
        if (w < 200 || 300 <= w) G(Object.assign(new DB.ProviderError("Error response received from instance metadata service"), {
          statusCode: w
        })), C.destroy();
        let B = [];
        W.on("data", (A) => {
          B.push(A)
        }), W.on("end", () => {
          d(M$5.Buffer.concat(B)), C.destroy()
        })
      }), C.end()
    })
  }
  L6(Uq, "httpRequest");
  var w02 = L6((I) => Boolean(I) && typeof I === "object" && typeof I.AccessKeyId === "string" && typeof I.SecretAccessKey === "string" && typeof I.Token === "string" && typeof I.Expiration === "string", "isImdsCredentials"),
    B02 = L6((I) => ({
      accessKeyId: I.AccessKeyId,
      secretAccessKey: I.SecretAccessKey,
      sessionToken: I.Token,
      expiration: new Date(I.Expiration)
    }), "fromImdsCredentials"),
    A02 = 1000,
    V02 = 0,
    MY1 = L6(({
      maxRetries: I = V02,
      timeout: d = A02
    }) => ({
      maxRetries: I,
      timeout: d
    }), "providerConfigFromInit"),
    vY1 = L6((I, d) => {
      let G = I();
      for (let Z = 0; Z < d; Z++) G = G.catch(I);
      return G
    }, "retry"),
    bn = "AWS_CONTAINER_CREDENTIALS_FULL_URI",
    hn = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI",
    EY1 = "AWS_CONTAINER_AUTHORIZATION_TOKEN",
    L$5 = L6((I = {}) => {
      let {
        timeout: d,
        maxRetries: G
      } = MY1(I);
      return () => vY1(async () => {
        let Z = await T$5(),
          C = JSON.parse(await y$5(d, Z));
        if (!w02(C)) throw new DB.CredentialsProviderError("Invalid response received from instance metadata service.");
        return B02(C)
      }, G)
    }, "fromContainerMetadata"),
    y$5 = L6(async (I, d) => {
      if (process.env[EY1]) d.headers = {
        ...d.headers,
        Authorization: process.env[EY1]
      };
      return (await Uq({
        ...d,
        timeout: I
      })).toString()
    }, "requestFromEcsImds"),
    P$5 = "169.254.170.2",
    $$5 = {
      localhost: !0,
      "127.0.0.1": !0
    },
    u$5 = {
      "http:": !0,
      "https:": !0
    },
    T$5 = L6(async () => {
      if (process.env[hn]) return {
        hostname: P$5,
        path: process.env[hn]
      };
      if (process.env[bn]) {
        let I = E$5.parse(process.env[bn]);
        if (!I.hostname || !(I.hostname in $$5)) throw new DB.CredentialsProviderError(`${I.hostname} is not a valid container metadata service hostname`, !1);
        if (!I.protocol || !(I.protocol in u$5)) throw new DB.CredentialsProviderError(`${I.protocol} is not a valid container metadata service protocol`, !1);
        return {
          ...I,
          port: I.port ? parseInt(I.port, 10) : void 0
        }
      }
      throw new DB.CredentialsProviderError(`The container metadata credential provider cannot be used unless the ${hn} or ${bn} environment variable is set`, !1)
    }, "getCmdsUri"),
    X02 = class I extends DB.CredentialsProviderError {
      constructor(d, G = !0) {
        super(d, G);
        this.tryNextLink = G, this.name = "InstanceMetadataV1FallbackError", Object.setPrototypeOf(this, I.prototype)
      }
    };
  L6(X02, "InstanceMetadataV1FallbackError");
  var O$5 = X02,
    SY1 = mV(),
    m$5 = qJ(),
    Y02 = ((I) => {
      return I.IPv4 = "http://169.254.169.254", I.IPv6 = "http://[fd00:ec2::254]", I
    })(Y02 || {}),
    l$5 = "AWS_EC2_METADATA_SERVICE_ENDPOINT",
    b$5 = "ec2_metadata_service_endpoint",
    h$5 = {
      environmentVariableSelector: (I) => I[l$5],
      configFileSelector: (I) => I[b$5],
      default: void 0
    },
    _02 = ((I) => {
      return I.IPv4 = "IPv4", I.IPv6 = "IPv6", I
    })(_02 || {}),
    j$5 = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE",
    k$5 = "ec2_metadata_service_endpoint_mode",
    x$5 = {
      environmentVariableSelector: (I) => I[j$5],
      configFileSelector: (I) => I[k$5],
      default: "IPv4"
    },
    D02 = L6(async () => m$5.parseUrl(await c$5() || await p$5()), "getInstanceMetadataEndpoint"),
    c$5 = L6(async () => SY1.loadConfig(h$5)(), "getFromEndpointConfig"),
    p$5 = L6(async () => {
      let I = await SY1.loadConfig(x$5)();
      switch (I) {
        case "IPv4":
          return "http://169.254.169.254";
        case "IPv6":
          return "http://[fd00:ec2::254]";
        default:
          throw new Error(`Unsupported endpoint mode: ${I}. Select from ${Object.values(_02)}`)
      }
    }, "getFromEndpointModeConfig"),
    i$5 = 300,
    n$5 = 300,
    r$5 = "https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html",
    G02 = L6((I, d) => {
      let G = i$5 + Math.floor(Math.random() * n$5),
        Z = new Date(Date.now() + G * 1000);
      d.warn(`Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(Z)}.
For more information, please visit: ` + r$5);
      let C = I.originalExpiration ?? I.expiration;
      return {
        ...I,
        ...C ? {
          originalExpiration: C
        } : {},
        expiration: Z
      }
    }, "getExtendedInstanceMetadataCredentials"),
    a$5 = L6((I, d = {}) => {
      let G = (d == null ? void 0 : d.logger) || console,
        Z;
      return async () => {
        let C;
        try {
          if (C = await I(), C.expiration && C.expiration.getTime() < Date.now()) C = G02(C, G)
        } catch (W) {
          if (Z) G.warn("Credential renew failed: ", W), C = G02(Z, G);
          else throw W
        }
        return Z = C, C
      }
    }, "staticStabilityProvider"),
    H02 = "/latest/meta-data/iam/security-credentials/",
    s$5 = "/latest/api/token",
    UY1 = "AWS_EC2_METADATA_V1_DISABLED",
    Z02 = "ec2_metadata_v1_disabled",
    C02 = "x-aws-ec2-metadata-token",
    o$5 = L6((I = {}) => a$5(e$5(I), {
      logger: I.logger
    }), "fromInstanceMetadata"),
    e$5 = L6((I) => {
      let d = !1,
        {
          logger: G,
          profile: Z
        } = I,
        {
          timeout: C,
          maxRetries: W
        } = MY1(I),
        w = L6(async (B, A) => {
          var V;
          if (d || ((V = A.headers) == null ? void 0 : V[C02]) == null) {
            let F = !1,
              g = !1,
              J = await SY1.loadConfig({
                environmentVariableSelector: (K) => {
                  let Q = K[UY1];
                  if (g = !!Q && Q !== "false", Q === void 0) throw new DB.CredentialsProviderError(`${UY1} not set in env, checking config file next.`);
                  return g
                },
                configFileSelector: (K) => {
                  let Q = K[Z02];
                  return F = !!Q && Q !== "false", F
                },
                default: !1
              }, {
                profile: Z
              })();
            if (I.ec2MetadataV1Disabled || J) {
              let K = [];
              if (I.ec2MetadataV1Disabled) K.push("credential provider initialization (runtime option ec2MetadataV1Disabled)");
              if (F) K.push(`config file profile (${Z02})`);
              if (g) K.push(`process environment variable (${UY1})`);
              throw new O$5(`AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${K.join(", ")}].`)
            }
          }
          let _ = (await vY1(async () => {
            let F;
            try {
              F = await Iu5(A)
            } catch (g) {
              if (g.statusCode === 401) d = !1;
              throw g
            }
            return F
          }, B)).trim();
          return vY1(async () => {
            let F;
            try {
              F = await du5(_, A)
            } catch (g) {
              if (g.statusCode === 401) d = !1;
              throw g
            }
            return F
          }, B)
        }, "getCredentials");
      return async () => {
        let B = await D02();
        if (d) return G == null || G.debug("AWS SDK Instance Metadata", "using v1 fallback (no token fetch)"), w(W, {
          ...B,
          timeout: C
        });
        else {
          let A;
          try {
            A = (await t$5({
              ...B,
              timeout: C
            })).toString()
          } catch (V) {
            if ((V == null ? void 0 : V.statusCode) === 400) throw Object.assign(V, {
              message: "EC2 Metadata token request returned error"
            });
            else if (V.message === "TimeoutError" || [403, 404, 405].includes(V.statusCode)) d = !0;
            return G == null || G.debug("AWS SDK Instance Metadata", "using v1 fallback (initial)"), w(W, {
              ...B,
              timeout: C
            })
          }
          return w(W, {
            ...B,
            headers: {
              [C02]: A
            },
            timeout: C
          })
        }
      }
    }, "getInstanceImdsProvider"),
    t$5 = L6(async (I) => Uq({
      ...I,
      path: s$5,
      method: "PUT",
      headers: {
        "x-aws-ec2-metadata-token-ttl-seconds": "21600"
      }
    }), "getMetadataToken"),
    Iu5 = L6(async (I) => (await Uq({
      ...I,
      path: H02
    })).toString(), "getProfile"),
    du5 = L6(async (I, d) => {
      let G = JSON.parse((await Uq({
        ...d,
        path: H02 + I
      })).toString());
      if (!w02(G)) throw new DB.CredentialsProviderError("Invalid response received from instance metadata service.");
      return B02(G)
    }, "getCredentialsFromProfile")
})
// @from(Start 3484983, End 3485591)
N02 = Y((J02) => {
  Object.defineProperty(J02, "__esModule", {
    value: !0
  });
  J02.resolveCredentialSource = void 0;
  var Gu5 = RY1(),
    g02 = kn(),
    Zu5 = x3(),
    Cu5 = (I, d) => {
      let G = {
        EcsContainer: g02.fromContainerMetadata,
        Ec2InstanceMetadata: g02.fromInstanceMetadata,
        Environment: Gu5.fromEnv
      };
      if (I in G) return G[I]();
      else throw new Zu5.CredentialsProviderError(`Unsupported credential source in profile ${d}. Got ${I}, expected EcsContainer or Ec2InstanceMetadata or Environment.`)
    };
  J02.resolveCredentialSource = Cu5
})
// @from(Start 3485597, End 3487648)
f02 = Y((z02) => {
  Object.defineProperty(z02, "__esModule", {
    value: !0
  });
  z02.resolveAssumeRoleCredentials = z02.isAssumeRoleProfile = void 0;
  var LY1 = x3(),
    Wu5 = rC(),
    wu5 = N02(),
    Bu5 = yY1(),
    Au5 = (I) => Boolean(I) && typeof I === "object" && typeof I.role_arn === "string" && ["undefined", "string"].indexOf(typeof I.role_session_name) > -1 && ["undefined", "string"].indexOf(typeof I.external_id) > -1 && ["undefined", "string"].indexOf(typeof I.mfa_serial) > -1 && (Vu5(I) || Xu5(I));
  z02.isAssumeRoleProfile = Au5;
  var Vu5 = (I) => typeof I.source_profile === "string" && typeof I.credential_source === "undefined",
    Xu5 = (I) => typeof I.credential_source === "string" && typeof I.source_profile === "undefined",
    Yu5 = async (I, d, G, Z = {}) => {
      let C = d[I];
      if (!G.roleAssumer) throw new LY1.CredentialsProviderError(`Profile ${I} requires a role to be assumed, but no role assumption callback was provided.`, !1);
      let {
        source_profile: W
      } = C;
      if (W && W in Z) throw new LY1.CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile ${Wu5.getProfileName(G)}. Profiles visited: ` + Object.keys(Z).join(", "), !1);
      let w = W ? Bu5.resolveProfileData(W, d, G, {
          ...Z,
          [W]: !0
        }) : wu5.resolveCredentialSource(C.credential_source, I)(),
        B = {
          RoleArn: C.role_arn,
          RoleSessionName: C.role_session_name || `aws-sdk-js-${Date.now()}`,
          ExternalId: C.external_id,
          DurationSeconds: parseInt(C.duration_seconds || "3600", 10)
        },
        {
          mfa_serial: A
        } = C;
      if (A) {
        if (!G.mfaCodeProvider) throw new LY1.CredentialsProviderError(`Profile ${I} requires multi-factor authentication, but no MFA code callback was provided.`, !1);
        B.SerialNumber = A, B.TokenCode = await G.mfaCodeProvider(A)
      }
      let V = await w;
      return G.roleAssumer(V, B)
    };
  z02.resolveAssumeRoleCredentials = Yu5
})
// @from(Start 3487654, End 3488519)
U02 = Y((q02) => {
  Object.defineProperty(q02, "__esModule", {
    value: !0
  });
  q02.getValidatedProcessCredentials = void 0;
  var Du5 = (I, d) => {
    if (d.Version !== 1) throw Error(`Profile ${I} credential_process did not return Version 1.`);
    if (d.AccessKeyId === void 0 || d.SecretAccessKey === void 0) throw Error(`Profile ${I} credential_process returned invalid credentials.`);
    if (d.Expiration) {
      let G = new Date;
      if (new Date(d.Expiration) < G) throw Error(`Profile ${I} credential_process returned expired credentials.`)
    }
    return {
      accessKeyId: d.AccessKeyId,
      secretAccessKey: d.SecretAccessKey,
      ...d.SessionToken && {
        sessionToken: d.SessionToken
      },
      ...d.Expiration && {
        expiration: new Date(d.Expiration)
      }
    }
  };
  q02.getValidatedProcessCredentials = Du5
})
// @from(Start 3488525, End 3489610)
M02 = Y((v02) => {
  Object.defineProperty(v02, "__esModule", {
    value: !0
  });
  v02.resolveProcessCredentials = void 0;
  var PY1 = x3(),
    Hu5 = B1("child_process"),
    Fu5 = B1("util"),
    gu5 = U02(),
    Ju5 = async (I, d) => {
      let G = d[I];
      if (d[I]) {
        let Z = G.credential_process;
        if (Z !== void 0) {
          let C = Fu5.promisify(Hu5.exec);
          try {
            let {
              stdout: W
            } = await C(Z), w;
            try {
              w = JSON.parse(W.trim())
            } catch (B) {
              throw Error(`Profile ${I} credential_process returned invalid JSON.`)
            }
            return gu5.getValidatedProcessCredentials(I, w)
          } catch (W) {
            throw new PY1.CredentialsProviderError(W.message)
          }
        } else throw new PY1.CredentialsProviderError(`Profile ${I} did not contain credential_process.`)
      } else throw new PY1.CredentialsProviderError(`Profile ${I} could not be found in shared credentials file.`)
    };
  v02.resolveProcessCredentials = Ju5
})
// @from(Start 3489616, End 3489945)
P02 = Y((L02) => {
  Object.defineProperty(L02, "__esModule", {
    value: !0
  });
  L02.fromProcess = void 0;
  var S02 = rC(),
    Ku5 = M02(),
    Nu5 = (I = {}) => async () => {
      let d = await S02.parseKnownFiles(I);
      return Ku5.resolveProcessCredentials(S02.getProfileName(I), d)
    };
  L02.fromProcess = Nu5
})
// @from(Start 3489951, End 3490086)
uY1 = Y(($Y1) => {
  Object.defineProperty($Y1, "__esModule", {
    value: !0
  });
  var zu5 = x1();
  zu5.__exportStar(P02(), $Y1)
})
// @from(Start 3490092, End 3490507)
T02 = Y(($02) => {
  Object.defineProperty($02, "__esModule", {
    value: !0
  });
  $02.resolveProcessCredentials = $02.isProcessProfile = void 0;
  var Qu5 = uY1(),
    fu5 = (I) => Boolean(I) && typeof I === "object" && typeof I.credential_process === "string";
  $02.isProcessProfile = fu5;
  var qu5 = async (I, d) => Qu5.fromProcess({
    ...I,
    profile: d
  })();
  $02.resolveProcessCredentials = qu5
})
// @from(Start 3490513, End 3490868)
TY1 = Y((O02) => {
  Object.defineProperty(O02, "__esModule", {
    value: !0
  });
  O02.isSsoProfile = void 0;
  var Uu5 = (I) => I && (typeof I.sso_start_url === "string" || typeof I.sso_account_id === "string" || typeof I.sso_session === "string" || typeof I.sso_region === "string" || typeof I.sso_role_name === "string");
  O02.isSsoProfile = Uu5
})
// @from(Start 3490874, End 3491256)
h02 = Y((l02) => {
  Object.defineProperty(l02, "__esModule", {
    value: !0
  });
  l02.resolveClientEndpointParameters = void 0;
  var vu5 = (I) => {
    return {
      ...I,
      useDualstackEndpoint: I.useDualstackEndpoint ?? !1,
      useFipsEndpoint: I.useFipsEndpoint ?? !1,
      defaultSigningName: "awsssoportal"
    }
  };
  l02.resolveClientEndpointParameters = vu5
})
// @from(Start 3491262, End 3494799)
j02 = Y((nW3, Eu5) => {
  Eu5.exports = {
    name: "@aws-sdk/client-sso",
    description: "AWS SDK for JavaScript Sso Client for Node.js, Browser and React Native",
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
      "generate:client": "node ../../scripts/generate-clients/single-service --solo sso"
    },
    main: "./dist-cjs/index.js",
    types: "./dist-types/index.d.ts",
    module: "./dist-es/index.js",
    sideEffects: !1,
    dependencies: {
      "@aws-crypto/sha256-browser": "3.0.0",
      "@aws-crypto/sha256-js": "3.0.0",
      "@aws-sdk/middleware-host-header": "3.418.0",
      "@aws-sdk/middleware-logger": "3.418.0",
      "@aws-sdk/middleware-recursion-detection": "3.418.0",
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
    homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso",
    repository: {
      type: "git",
      url: "https://github.com/aws/aws-sdk-js-v3.git",
      directory: "clients/client-sso"
    }
  }
})
// @from(Start 3494805, End 3495202)
p02 = Y((k02, x02) => {
  Object.defineProperty(k02, "__esModule", {
    value: !0
  });
  k02.isCrtAvailable = void 0;
  var Mu5 = () => {
    try {
      if (typeof x02 !== "undefined" && (() => {
          throw new Error("Cannot require module " + "aws-crt");
        })()) return ["md/crt-avail"];
      return null
    } catch (I) {
      return null
    }
  };
  k02.isCrtAvailable = Mu5
})
// @from(Start 3495208, End 3496368)
zP = Y((n02) => {
  Object.defineProperty(n02, "__esModule", {
    value: !0
  });
  n02.defaultUserAgent = n02.UA_APP_ID_INI_NAME = n02.UA_APP_ID_ENV_NAME = void 0;
  var Su5 = mV(),
    i02 = B1("os"),
    OY1 = B1("process"),
    Lu5 = p02();
  n02.UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
  n02.UA_APP_ID_INI_NAME = "sdk-ua-app-id";
  var yu5 = ({
    serviceId: I,
    clientVersion: d
  }) => {
    let G = [
        ["aws-sdk-js", d],
        ["ua", "2.0"],
        [`os/${i02.platform()}`, i02.release()],
        ["lang/js"],
        ["md/nodejs", `${OY1.versions.node}`]
      ],
      Z = Lu5.isCrtAvailable();
    if (Z) G.push(Z);
    if (I) G.push([`api/${I}`, d]);
    if (OY1.env.AWS_EXECUTION_ENV) G.push([`exec-env/${OY1.env.AWS_EXECUTION_ENV}`]);
    let C = Su5.loadConfig({
        environmentVariableSelector: (w) => w[n02.UA_APP_ID_ENV_NAME],
        configFileSelector: (w) => w[n02.UA_APP_ID_INI_NAME],
        default: void 0
      })(),
      W = void 0;
    return async () => {
      if (!W) {
        let w = await C;
        W = w ? [...G, [`app/${w}`]] : [...G]
      }
      return W
    }
  };
  n02.defaultUserAgent = yu5
})
// @from(Start 3496374, End 3498002)
QP = Y((sW3, d22) => {
  var {
    defineProperty: xn,
    getOwnPropertyDescriptor: Pu5,
    getOwnPropertyNames: $u5
  } = Object, uu5 = Object.prototype.hasOwnProperty, e02 = (I, d) => xn(I, "name", {
    value: d,
    configurable: !0
  }), Tu5 = (I, d) => {
    for (var G in d) xn(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, Ou5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of $u5(d))
        if (!uu5.call(I, C) && C !== G) xn(I, C, {
          get: () => d[C],
          enumerable: !(Z = Pu5(d, C)) || Z.enumerable
        })
    }
    return I
  }, mu5 = (I) => Ou5(xn({}, "__esModule", {
    value: !0
  }), I), t02 = {};
  Tu5(t02, {
    Hash: () => hu5
  });
  d22.exports = mu5(t02);
  var mY1 = Vq(),
    lu5 = SZ(),
    bu5 = B1("buffer"),
    o02 = B1("crypto"),
    I22 = class I {
      constructor(d, G) {
        this.algorithmIdentifier = d, this.secret = G, this.reset()
      }
      update(d, G) {
        this.hash.update(lu5.toUint8Array(lY1(d, G)))
      }
      digest() {
        return Promise.resolve(this.hash.digest())
      }
      reset() {
        this.hash = this.secret ? o02.createHmac(this.algorithmIdentifier, lY1(this.secret)) : o02.createHash(this.algorithmIdentifier)
      }
    };
  e02(I22, "Hash");
  var hu5 = I22;

  function lY1(I, d) {
    if (bu5.Buffer.isBuffer(I)) return I;
    if (typeof I === "string") return mY1.fromString(I, d);
    if (ArrayBuffer.isView(I)) return mY1.fromArrayBuffer(I.buffer, I.byteOffset, I.byteLength);
    return mY1.fromArrayBuffer(I)
  }
  e02(lY1, "castSourceData")
})
// @from(Start 3498008, End 3499428)
fP = Y((oW3, C22) => {
  var {
    defineProperty: cn,
    getOwnPropertyDescriptor: ju5,
    getOwnPropertyNames: ku5
  } = Object, xu5 = Object.prototype.hasOwnProperty, cu5 = (I, d) => cn(I, "name", {
    value: d,
    configurable: !0
  }), pu5 = (I, d) => {
    for (var G in d) cn(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, iu5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of ku5(d))
        if (!xu5.call(I, C) && C !== G) cn(I, C, {
          get: () => d[C],
          enumerable: !(Z = ju5(d, C)) || Z.enumerable
        })
    }
    return I
  }, nu5 = (I) => iu5(cn({}, "__esModule", {
    value: !0
  }), I), Z22 = {};
  pu5(Z22, {
    calculateBodyLength: () => ru5
  });
  C22.exports = nu5(Z22);
  var G22 = B1("fs"),
    ru5 = cu5((I) => {
      if (!I) return 0;
      if (typeof I === "string") return Buffer.byteLength(I);
      else if (typeof I.byteLength === "number") return I.byteLength;
      else if (typeof I.size === "number") return I.size;
      else if (typeof I.start === "number" && typeof I.end === "number") return I.end + 1 - I.start;
      else if (typeof I.path === "string" || Buffer.isBuffer(I.path)) return G22.lstatSync(I.path).size;
      else if (typeof I.fd === "number") return G22.fstatSync(I.fd).size;
      throw new Error(`Body Length computation failed for ${I}`)
    }, "calculateBodyLength")
})
// @from(Start 3499434, End 3504022)
z22 = Y((K22) => {
  Object.defineProperty(K22, "__esModule", {
    value: !0
  });
  K22.ruleSet = void 0;
  var H22 = "required",
    eC = "fn",
    tC = "argv",
    Mq = "ref",
    W22 = "isSet",
    kV = "tree",
    vq = "error",
    Eq = "endpoint",
    bY1 = "PartitionResult",
    hY1 = "getAttr",
    w22 = {
      [H22]: !1,
      type: "String"
    },
    B22 = {
      [H22]: !0,
      default: !1,
      type: "Boolean"
    },
    A22 = {
      [Mq]: "Endpoint"
    },
    F22 = {
      [eC]: "booleanEquals",
      [tC]: [{
        [Mq]: "UseFIPS"
      }, !0]
    },
    g22 = {
      [eC]: "booleanEquals",
      [tC]: [{
        [Mq]: "UseDualStack"
      }, !0]
    },
    $Z = {},
    V22 = {
      [eC]: "booleanEquals",
      [tC]: [!0, {
        [eC]: hY1,
        [tC]: [{
          [Mq]: bY1
        }, "supportsFIPS"]
      }]
    },
    J22 = {
      [Mq]: bY1
    },
    X22 = {
      [eC]: "booleanEquals",
      [tC]: [!0, {
        [eC]: hY1,
        [tC]: [J22, "supportsDualStack"]
      }]
    },
    Y22 = [F22],
    _22 = [g22],
    D22 = [{
      [Mq]: "Region"
    }],
    au5 = {
      version: "1.0",
      parameters: {
        Region: w22,
        UseDualStack: B22,
        UseFIPS: B22,
        Endpoint: w22
      },
      rules: [{
        conditions: [{
          [eC]: W22,
          [tC]: [A22]
        }],
        type: kV,
        rules: [{
          conditions: Y22,
          error: "Invalid Configuration: FIPS and custom endpoint are not supported",
          type: vq
        }, {
          conditions: _22,
          error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
          type: vq
        }, {
          endpoint: {
            url: A22,
            properties: $Z,
            headers: $Z
          },
          type: Eq
        }]
      }, {
        conditions: [{
          [eC]: W22,
          [tC]: D22
        }],
        type: kV,
        rules: [{
          conditions: [{
            [eC]: "aws.partition",
            [tC]: D22,
            assign: bY1
          }],
          type: kV,
          rules: [{
            conditions: [F22, g22],
            type: kV,
            rules: [{
              conditions: [V22, X22],
              type: kV,
              rules: [{
                endpoint: {
                  url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                  properties: $Z,
                  headers: $Z
                },
                type: Eq
              }]
            }, {
              error: "FIPS and DualStack are enabled, but this partition does not support one or both",
              type: vq
            }]
          }, {
            conditions: Y22,
            type: kV,
            rules: [{
              conditions: [V22],
              type: kV,
              rules: [{
                conditions: [{
                  [eC]: "stringEquals",
                  [tC]: ["aws-us-gov", {
                    [eC]: hY1,
                    [tC]: [J22, "name"]
                  }]
                }],
                endpoint: {
                  url: "https://portal.sso.{Region}.amazonaws.com",
                  properties: $Z,
                  headers: $Z
                },
                type: Eq
              }, {
                endpoint: {
                  url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}",
                  properties: $Z,
                  headers: $Z
                },
                type: Eq
              }]
            }, {
              error: "FIPS is enabled but this partition does not support FIPS",
              type: vq
            }]
          }, {
            conditions: _22,
            type: kV,
            rules: [{
              conditions: [X22],
              type: kV,
              rules: [{
                endpoint: {
                  url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}",
                  properties: $Z,
                  headers: $Z
                },
                type: Eq
              }]
            }, {
              error: "DualStack is enabled but this partition does not support DualStack",
              type: vq
            }]
          }, {
            endpoint: {
              url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}",
              properties: $Z,
              headers: $Z
            },
            type: Eq
          }]
        }]
      }, {
        error: "Invalid Configuration: Missing Region",
        type: vq
      }]
    };
  K22.ruleSet = au5
})
// @from(Start 3504028, End 3504368)
q22 = Y((Q22) => {
  Object.defineProperty(Q22, "__esModule", {
    value: !0
  });
  Q22.defaultEndpointResolver = void 0;
  var su5 = zq(),
    ou5 = z22(),
    eu5 = (I, d = {}) => {
      return su5.resolveEndpoint(ou5.ruleSet, {
        endpointParams: I,
        logger: d.logger
      })
    };
  Q22.defaultEndpointResolver = eu5
})
// @from(Start 3504374, End 3505178)
M22 = Y((v22) => {
  Object.defineProperty(v22, "__esModule", {
    value: !0
  });
  v22.getRuntimeConfig = void 0;
  var tu5 = h2(),
    IT5 = qJ(),
    R22 = fD(),
    U22 = SZ(),
    dT5 = q22(),
    GT5 = (I) => ({
      apiVersion: "2019-06-10",
      base64Decoder: I?.base64Decoder ?? R22.fromBase64,
      base64Encoder: I?.base64Encoder ?? R22.toBase64,
      disableHostPrefix: I?.disableHostPrefix ?? !1,
      endpointProvider: I?.endpointProvider ?? dT5.defaultEndpointResolver,
      extensions: I?.extensions ?? [],
      logger: I?.logger ?? new tu5.NoOpLogger,
      serviceId: I?.serviceId ?? "SSO",
      urlParser: I?.urlParser ?? IT5.parseUrl,
      utf8Decoder: I?.utf8Decoder ?? U22.fromUtf8,
      utf8Encoder: I?.utf8Encoder ?? U22.toUtf8
    });
  v22.getRuntimeConfig = GT5
})
// @from(Start 3505184, End 3508245)
RP = Y((dw3, u22) => {
  var {
    create: ZT5,
    defineProperty: qP,
    getOwnPropertyDescriptor: CT5,
    getOwnPropertyNames: WT5,
    getPrototypeOf: wT5
  } = Object, BT5 = Object.prototype.hasOwnProperty, jY1 = (I, d) => qP(I, "name", {
    value: d,
    configurable: !0
  }), AT5 = (I, d) => {
    for (var G in d) qP(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, P22 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of WT5(d))
        if (!BT5.call(I, C) && C !== G) qP(I, C, {
          get: () => d[C],
          enumerable: !(Z = CT5(d, C)) || Z.enumerable
        })
    }
    return I
  }, VT5 = (I, d, G) => (G = I != null ? ZT5(wT5(I)) : {}, P22(d || !I || !I.__esModule ? qP(G, "default", {
    value: I,
    enumerable: !0
  }) : G, I)), XT5 = (I) => P22(qP({}, "__esModule", {
    value: !0
  }), I), $22 = {};
  AT5($22, {
    resolveDefaultsModeConfig: () => zT5
  });
  u22.exports = XT5($22);
  var YT5 = _B(),
    S22 = mV(),
    _T5 = x3(),
    DT5 = "AWS_EXECUTION_ENV",
    L22 = "AWS_REGION",
    y22 = "AWS_DEFAULT_REGION",
    HT5 = "AWS_EC2_METADATA_DISABLED",
    FT5 = ["in-region", "cross-region", "mobile", "standard", "legacy"],
    gT5 = "/latest/meta-data/placement/region",
    JT5 = "AWS_DEFAULTS_MODE",
    KT5 = "defaults_mode",
    NT5 = {
      environmentVariableSelector: (I) => {
        return I[JT5]
      },
      configFileSelector: (I) => {
        return I[KT5]
      },
      default: "legacy"
    },
    zT5 = jY1(({
      region: I = S22.loadConfig(YT5.NODE_REGION_CONFIG_OPTIONS),
      defaultsMode: d = S22.loadConfig(NT5)
    } = {}) => _T5.memoize(async () => {
      let G = typeof d === "function" ? await d() : d;
      switch (G == null ? void 0 : G.toLowerCase()) {
        case "auto":
          return QT5(I);
        case "in-region":
        case "cross-region":
        case "mobile":
        case "standard":
        case "legacy":
          return Promise.resolve(G == null ? void 0 : G.toLocaleLowerCase());
        case void 0:
          return Promise.resolve("legacy");
        default:
          throw new Error(`Invalid parameter for "defaultsMode", expect ${FT5.join(", ")}, got ${G}`)
      }
    }), "resolveDefaultsModeConfig"),
    QT5 = jY1(async (I) => {
      if (I) {
        let d = typeof I === "function" ? await I() : I,
          G = await fT5();
        if (!G) return "standard";
        if (d === G) return "in-region";
        else return "cross-region"
      }
      return "standard"
    }, "resolveNodeDefaultsModeAuto"),
    fT5 = jY1(async () => {
      if (process.env[DT5] && (process.env[L22] || process.env[y22])) return process.env[L22] ?? process.env[y22];
      if (!process.env[HT5]) try {
        let {
          getInstanceMetadataEndpoint: I,
          httpRequest: d
        } = await Promise.resolve().then(() => VT5(kn())), G = await I();
        return (await d({
          ...G,
          path: gT5
        })).toString()
      } catch (I) {}
    }, "inferPhysicalRegion")
})
// @from(Start 3508251, End 3510048)
b22 = Y((m22) => {
  Object.defineProperty(m22, "__esModule", {
    value: !0
  });
  m22.getRuntimeConfig = void 0;
  var qT5 = x1(),
    RT5 = qT5.__importDefault(j02()),
    UT5 = zP(),
    pn = _B(),
    vT5 = QP(),
    T22 = bV(),
    UP = mV(),
    O22 = Yq(),
    ET5 = fP(),
    MT5 = fq(),
    ST5 = M22(),
    LT5 = h2(),
    yT5 = RP(),
    PT5 = h2(),
    $T5 = (I) => {
      PT5.emitWarningIfUnsupportedVersion(process.version);
      let d = yT5.resolveDefaultsModeConfig(I),
        G = () => d().then(LT5.loadConfigsForDefaultMode),
        Z = ST5.getRuntimeConfig(I);
      return {
        ...Z,
        ...I,
        runtime: "node",
        defaultsMode: d,
        bodyLengthChecker: I?.bodyLengthChecker ?? ET5.calculateBodyLength,
        defaultUserAgentProvider: I?.defaultUserAgentProvider ?? UT5.defaultUserAgent({
          serviceId: Z.serviceId,
          clientVersion: RT5.default.version
        }),
        maxAttempts: I?.maxAttempts ?? UP.loadConfig(T22.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: I?.region ?? UP.loadConfig(pn.NODE_REGION_CONFIG_OPTIONS, pn.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: I?.requestHandler ?? new O22.NodeHttpHandler(G),
        retryMode: I?.retryMode ?? UP.loadConfig({
          ...T22.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await G()).retryMode || MT5.DEFAULT_RETRY_MODE
        }),
        sha256: I?.sha256 ?? vT5.Hash.bind(null, "sha256"),
        streamCollector: I?.streamCollector ?? O22.streamCollector,
        useDualstackEndpoint: I?.useDualstackEndpoint ?? UP.loadConfig(pn.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: I?.useFipsEndpoint ?? UP.loadConfig(pn.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
      }
    };
  m22.getRuntimeConfig = $T5
})
// @from(Start 3510054, End 3510741)
k22 = Y((h22) => {
  Object.defineProperty(h22, "__esModule", {
    value: !0
  });
  h22.resolveAwsRegionExtensionConfiguration = h22.getAwsRegionExtensionConfiguration = void 0;
  var uT5 = (I) => {
    let d = async () => {
      if (I.region === void 0) throw new Error("Region is missing from runtimeConfig");
      let G = I.region;
      if (typeof G === "string") return G;
      return G()
    };
    return {
      setRegion(G) {
        d = G
      },
      region() {
        return d
      }
    }
  };
  h22.getAwsRegionExtensionConfiguration = uT5;
  var TT5 = (I) => {
    return {
      region: I.region()
    }
  };
  h22.resolveAwsRegionExtensionConfiguration = TT5
})
// @from(Start 3510747, End 3511340)
n22 = Y((x22) => {
  Object.defineProperty(x22, "__esModule", {
    value: !0
  });
  x22.NODE_REGION_CONFIG_FILE_OPTIONS = x22.NODE_REGION_CONFIG_OPTIONS = x22.REGION_INI_NAME = x22.REGION_ENV_NAME = void 0;
  x22.REGION_ENV_NAME = "AWS_REGION";
  x22.REGION_INI_NAME = "region";
  x22.NODE_REGION_CONFIG_OPTIONS = {
    environmentVariableSelector: (I) => I[x22.REGION_ENV_NAME],
    configFileSelector: (I) => I[x22.REGION_INI_NAME],
    default: () => {
      throw new Error("Region is missing")
    }
  };
  x22.NODE_REGION_CONFIG_FILE_OPTIONS = {
    preferredFile: "credentials"
  }
})
// @from(Start 3511346, End 3511578)
kY1 = Y((r22) => {
  Object.defineProperty(r22, "__esModule", {
    value: !0
  });
  r22.isFipsRegion = void 0;
  var lT5 = (I) => typeof I === "string" && (I.startsWith("fips-") || I.endsWith("-fips"));
  r22.isFipsRegion = lT5
})
// @from(Start 3511584, End 3511891)
e22 = Y((s22) => {
  Object.defineProperty(s22, "__esModule", {
    value: !0
  });
  s22.getRealRegion = void 0;
  var bT5 = kY1(),
    hT5 = (I) => bT5.isFipsRegion(I) ? ["fips-aws-global", "aws-fips"].includes(I) ? "us-east-1" : I.replace(/fips-(dkr-|prod-)?|-fips/, "") : I;
  s22.getRealRegion = hT5
})
// @from(Start 3511897, End 3512669)
G42 = Y((I42) => {
  Object.defineProperty(I42, "__esModule", {
    value: !0
  });
  I42.resolveRegionConfig = void 0;
  var t22 = e22(),
    jT5 = kY1(),
    kT5 = (I) => {
      let {
        region: d,
        useFipsEndpoint: G
      } = I;
      if (!d) throw new Error("Region is missing");
      return {
        ...I,
        region: async () => {
          if (typeof d === "string") return t22.getRealRegion(d);
          let Z = await d();
          return t22.getRealRegion(Z)
        },
        useFipsEndpoint: async () => {
          let Z = typeof d === "string" ? d : await d();
          if (jT5.isFipsRegion(Z)) return !0;
          return typeof G !== "function" ? Promise.resolve(!!G) : G()
        }
      }
    };
  I42.resolveRegionConfig = kT5
})
// @from(Start 3512675, End 3512838)
C42 = Y((nn) => {
  Object.defineProperty(nn, "__esModule", {
    value: !0
  });
  var Z42 = x1();
  Z42.__exportStar(n22(), nn);
  Z42.__exportStar(G42(), nn)
})
// @from(Start 3512844, End 3513006)
an = Y((rn) => {
  Object.defineProperty(rn, "__esModule", {
    value: !0
  });
  var W42 = x1();
  W42.__exportStar(k22(), rn);
  W42.__exportStar(C42(), rn)
})
// @from(Start 3513012, End 3513702)
Y42 = Y((V42) => {
  Object.defineProperty(V42, "__esModule", {
    value: !0
  });
  V42.resolveRuntimeExtensions = void 0;
  var w42 = an(),
    B42 = t8(),
    A42 = h2(),
    xY1 = (I) => I,
    xT5 = (I, d) => {
      let G = {
        ...xY1(w42.getAwsRegionExtensionConfiguration(I)),
        ...xY1(A42.getDefaultExtensionConfiguration(I)),
        ...xY1(B42.getHttpHandlerExtensionConfiguration(I))
      };
      return d.forEach((Z) => Z.configure(G)), {
        ...I,
        ...w42.resolveAwsRegionExtensionConfiguration(G),
        ...A42.resolveDefaultRuntimeConfig(G),
        ...B42.resolveHttpHandlerRuntimeConfig(G)
      }
    };
  V42.resolveRuntimeExtensions = xT5
})
// @from(Start 3513708, End 3515083)
vP = Y((cY1) => {
  Object.defineProperty(cY1, "__esModule", {
    value: !0
  });
  cY1.SSOClient = cY1.__Client = void 0;
  var _42 = ey(),
    cT5 = ty(),
    pT5 = IP(),
    D42 = wP(),
    iT5 = _B(),
    nT5 = BP(),
    rT5 = c3(),
    H42 = bV(),
    F42 = h2();
  Object.defineProperty(cY1, "__Client", {
    enumerable: !0,
    get: function() {
      return F42.Client
    }
  });
  var aT5 = h02(),
    sT5 = b22(),
    oT5 = Y42();
  class g42 extends F42.Client {
    constructor(...[I]) {
      let d = sT5.getRuntimeConfig(I || {}),
        G = aT5.resolveClientEndpointParameters(d),
        Z = iT5.resolveRegionConfig(G),
        C = rT5.resolveEndpointConfig(Z),
        W = H42.resolveRetryConfig(C),
        w = _42.resolveHostHeaderConfig(W),
        B = D42.resolveUserAgentConfig(w),
        A = oT5.resolveRuntimeExtensions(B, I?.extensions || []);
      super(A);
      this.config = A, this.middlewareStack.use(H42.getRetryPlugin(this.config)), this.middlewareStack.use(nT5.getContentLengthPlugin(this.config)), this.middlewareStack.use(_42.getHostHeaderPlugin(this.config)), this.middlewareStack.use(cT5.getLoggerPlugin(this.config)), this.middlewareStack.use(pT5.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(D42.getUserAgentPlugin(this.config))
    }
    destroy() {
      super.destroy()
    }
  }
  cY1.SSOClient = g42
})
// @from(Start 3515089, End 3515565)
sn = Y((iY1) => {
  Object.defineProperty(iY1, "__esModule", {
    value: !0
  });
  iY1.SSOServiceException = iY1.__ServiceException = void 0;
  var K42 = h2();
  Object.defineProperty(iY1, "__ServiceException", {
    enumerable: !0,
    get: function() {
      return K42.ServiceException
    }
  });
  class pY1 extends K42.ServiceException {
    constructor(I) {
      super(I);
      Object.setPrototypeOf(this, pY1.prototype)
    }
  }
  iY1.SSOServiceException = pY1
})
// @from(Start 3515571, End 3518502)
UJ = Y((z42) => {
  Object.defineProperty(z42, "__esModule", {
    value: !0
  });
  z42.LogoutRequestFilterSensitiveLog = z42.ListAccountsRequestFilterSensitiveLog = z42.ListAccountRolesRequestFilterSensitiveLog = z42.GetRoleCredentialsResponseFilterSensitiveLog = z42.RoleCredentialsFilterSensitiveLog = z42.GetRoleCredentialsRequestFilterSensitiveLog = z42.UnauthorizedException = z42.TooManyRequestsException = z42.ResourceNotFoundException = z42.InvalidRequestException = void 0;
  var Sq = h2(),
    on = sn();
  class nY1 extends on.SSOServiceException {
    constructor(I) {
      super({
        name: "InvalidRequestException",
        $fault: "client",
        ...I
      });
      this.name = "InvalidRequestException", this.$fault = "client", Object.setPrototypeOf(this, nY1.prototype)
    }
  }
  z42.InvalidRequestException = nY1;
  class rY1 extends on.SSOServiceException {
    constructor(I) {
      super({
        name: "ResourceNotFoundException",
        $fault: "client",
        ...I
      });
      this.name = "ResourceNotFoundException", this.$fault = "client", Object.setPrototypeOf(this, rY1.prototype)
    }
  }
  z42.ResourceNotFoundException = rY1;
  class aY1 extends on.SSOServiceException {
    constructor(I) {
      super({
        name: "TooManyRequestsException",
        $fault: "client",
        ...I
      });
      this.name = "TooManyRequestsException", this.$fault = "client", Object.setPrototypeOf(this, aY1.prototype)
    }
  }
  z42.TooManyRequestsException = aY1;
  class sY1 extends on.SSOServiceException {
    constructor(I) {
      super({
        name: "UnauthorizedException",
        $fault: "client",
        ...I
      });
      this.name = "UnauthorizedException", this.$fault = "client", Object.setPrototypeOf(this, sY1.prototype)
    }
  }
  z42.UnauthorizedException = sY1;
  var eT5 = (I) => ({
    ...I,
    ...I.accessToken && {
      accessToken: Sq.SENSITIVE_STRING
    }
  });
  z42.GetRoleCredentialsRequestFilterSensitiveLog = eT5;
  var tT5 = (I) => ({
    ...I,
    ...I.secretAccessKey && {
      secretAccessKey: Sq.SENSITIVE_STRING
    },
    ...I.sessionToken && {
      sessionToken: Sq.SENSITIVE_STRING
    }
  });
  z42.RoleCredentialsFilterSensitiveLog = tT5;
  var IO5 = (I) => ({
    ...I,
    ...I.roleCredentials && {
      roleCredentials: z42.RoleCredentialsFilterSensitiveLog(I.roleCredentials)
    }
  });
  z42.GetRoleCredentialsResponseFilterSensitiveLog = IO5;
  var dO5 = (I) => ({
    ...I,
    ...I.accessToken && {
      accessToken: Sq.SENSITIVE_STRING
    }
  });
  z42.ListAccountRolesRequestFilterSensitiveLog = dO5;
  var GO5 = (I) => ({
    ...I,
    ...I.accessToken && {
      accessToken: Sq.SENSITIVE_STRING
    }
  });
  z42.ListAccountsRequestFilterSensitiveLog = GO5;
  var ZO5 = (I) => ({
    ...I,
    ...I.accessToken && {
      accessToken: Sq.SENSITIVE_STRING
    }
  });
  z42.LogoutRequestFilterSensitiveLog = ZO5
})
// @from(Start 3518508, End 3528421)
EP = Y((q42) => {
  Object.defineProperty(q42, "__esModule", {
    value: !0
  });
  q42.de_LogoutCommand = q42.de_ListAccountsCommand = q42.de_ListAccountRolesCommand = q42.de_GetRoleCredentialsCommand = q42.se_LogoutCommand = q42.se_ListAccountsCommand = q42.se_ListAccountRolesCommand = q42.se_GetRoleCredentialsCommand = void 0;
  var en = t8(),
    H4 = h2(),
    tn = UJ(),
    _O5 = sn(),
    DO5 = async (I, d) => {
      let {
        hostname: G,
        protocol: Z = "https",
        port: C,
        path: W
      } = await d.endpoint(), w = H4.map({}, Cr, {
        "x-amz-sso_bearer_token": I.accessToken
      }), B = `${W?.endsWith("/")?W.slice(0,-1):W||""}/federation/credentials`, A = H4.map({
        role_name: [, H4.expectNonNull(I.roleName, "roleName")],
        account_id: [, H4.expectNonNull(I.accountId, "accountId")]
      }), V;
      return new en.HttpRequest({
        protocol: Z,
        hostname: G,
        port: C,
        method: "GET",
        headers: w,
        path: B,
        query: A,
        body: V
      })
    };
  q42.se_GetRoleCredentialsCommand = DO5;
  var HO5 = async (I, d) => {
    let {
      hostname: G,
      protocol: Z = "https",
      port: C,
      path: W
    } = await d.endpoint(), w = H4.map({}, Cr, {
      "x-amz-sso_bearer_token": I.accessToken
    }), B = `${W?.endsWith("/")?W.slice(0,-1):W||""}/assignment/roles`, A = H4.map({
      next_token: [, I.nextToken],
      max_result: [() => I.maxResults !== void 0, () => I.maxResults.toString()],
      account_id: [, H4.expectNonNull(I.accountId, "accountId")]
    }), V;
    return new en.HttpRequest({
      protocol: Z,
      hostname: G,
      port: C,
      method: "GET",
      headers: w,
      path: B,
      query: A,
      body: V
    })
  };
  q42.se_ListAccountRolesCommand = HO5;
  var FO5 = async (I, d) => {
    let {
      hostname: G,
      protocol: Z = "https",
      port: C,
      path: W
    } = await d.endpoint(), w = H4.map({}, Cr, {
      "x-amz-sso_bearer_token": I.accessToken
    }), B = `${W?.endsWith("/")?W.slice(0,-1):W||""}/assignment/accounts`, A = H4.map({
      next_token: [, I.nextToken],
      max_result: [() => I.maxResults !== void 0, () => I.maxResults.toString()]
    }), V;
    return new en.HttpRequest({
      protocol: Z,
      hostname: G,
      port: C,
      method: "GET",
      headers: w,
      path: B,
      query: A,
      body: V
    })
  };
  q42.se_ListAccountsCommand = FO5;
  var gO5 = async (I, d) => {
    let {
      hostname: G,
      protocol: Z = "https",
      port: C,
      path: W
    } = await d.endpoint(), w = H4.map({}, Cr, {
      "x-amz-sso_bearer_token": I.accessToken
    }), B = `${W?.endsWith("/")?W.slice(0,-1):W||""}/logout`, A;
    return new en.HttpRequest({
      protocol: Z,
      hostname: G,
      port: C,
      method: "POST",
      headers: w,
      path: B,
      body: A
    })
  };
  q42.se_LogoutCommand = gO5;
  var JO5 = async (I, d) => {
    if (I.statusCode !== 200 && I.statusCode >= 300) return KO5(I, d);
    let G = H4.map({
        $metadata: lD(I)
      }),
      Z = H4.expectNonNull(H4.expectObject(await Wr(I.body, d)), "body"),
      C = H4.take(Z, {
        roleCredentials: H4._json
      });
    return Object.assign(G, C), G
  };
  q42.de_GetRoleCredentialsCommand = JO5;
  var KO5 = async (I, d) => {
    let G = {
        ...I,
        body: await wr(I.body, d)
      },
      Z = Br(I, G.body);
    switch (Z) {
      case "InvalidRequestException":
      case "com.amazonaws.sso#InvalidRequestException":
        throw await dr(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.sso#ResourceNotFoundException":
        throw await oY1(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.sso#TooManyRequestsException":
        throw await Gr(G, d);
      case "UnauthorizedException":
      case "com.amazonaws.sso#UnauthorizedException":
        throw await Zr(G, d);
      default:
        let C = G.body;
        return Ir({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, NO5 = async (I, d) => {
    if (I.statusCode !== 200 && I.statusCode >= 300) return zO5(I, d);
    let G = H4.map({
        $metadata: lD(I)
      }),
      Z = H4.expectNonNull(H4.expectObject(await Wr(I.body, d)), "body"),
      C = H4.take(Z, {
        nextToken: H4.expectString,
        roleList: H4._json
      });
    return Object.assign(G, C), G
  };
  q42.de_ListAccountRolesCommand = NO5;
  var zO5 = async (I, d) => {
    let G = {
        ...I,
        body: await wr(I.body, d)
      },
      Z = Br(I, G.body);
    switch (Z) {
      case "InvalidRequestException":
      case "com.amazonaws.sso#InvalidRequestException":
        throw await dr(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.sso#ResourceNotFoundException":
        throw await oY1(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.sso#TooManyRequestsException":
        throw await Gr(G, d);
      case "UnauthorizedException":
      case "com.amazonaws.sso#UnauthorizedException":
        throw await Zr(G, d);
      default:
        let C = G.body;
        return Ir({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, QO5 = async (I, d) => {
    if (I.statusCode !== 200 && I.statusCode >= 300) return fO5(I, d);
    let G = H4.map({
        $metadata: lD(I)
      }),
      Z = H4.expectNonNull(H4.expectObject(await Wr(I.body, d)), "body"),
      C = H4.take(Z, {
        accountList: H4._json,
        nextToken: H4.expectString
      });
    return Object.assign(G, C), G
  };
  q42.de_ListAccountsCommand = QO5;
  var fO5 = async (I, d) => {
    let G = {
        ...I,
        body: await wr(I.body, d)
      },
      Z = Br(I, G.body);
    switch (Z) {
      case "InvalidRequestException":
      case "com.amazonaws.sso#InvalidRequestException":
        throw await dr(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.sso#ResourceNotFoundException":
        throw await oY1(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.sso#TooManyRequestsException":
        throw await Gr(G, d);
      case "UnauthorizedException":
      case "com.amazonaws.sso#UnauthorizedException":
        throw await Zr(G, d);
      default:
        let C = G.body;
        return Ir({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, qO5 = async (I, d) => {
    if (I.statusCode !== 200 && I.statusCode >= 300) return RO5(I, d);
    let G = H4.map({
      $metadata: lD(I)
    });
    return await H4.collectBody(I.body, d), G
  };
  q42.de_LogoutCommand = qO5;
  var RO5 = async (I, d) => {
    let G = {
        ...I,
        body: await wr(I.body, d)
      },
      Z = Br(I, G.body);
    switch (Z) {
      case "InvalidRequestException":
      case "com.amazonaws.sso#InvalidRequestException":
        throw await dr(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.sso#TooManyRequestsException":
        throw await Gr(G, d);
      case "UnauthorizedException":
      case "com.amazonaws.sso#UnauthorizedException":
        throw await Zr(G, d);
      default:
        let C = G.body;
        return Ir({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, Ir = H4.withBaseException(_O5.SSOServiceException), dr = async (I, d) => {
    let G = H4.map({}),
      Z = I.body,
      C = H4.take(Z, {
        message: H4.expectString
      });
    Object.assign(G, C);
    let W = new tn.InvalidRequestException({
      $metadata: lD(I),
      ...G
    });
    return H4.decorateServiceException(W, I.body)
  }, oY1 = async (I, d) => {
    let G = H4.map({}),
      Z = I.body,
      C = H4.take(Z, {
        message: H4.expectString
      });
    Object.assign(G, C);
    let W = new tn.ResourceNotFoundException({
      $metadata: lD(I),
      ...G
    });
    return H4.decorateServiceException(W, I.body)
  }, Gr = async (I, d) => {
    let G = H4.map({}),
      Z = I.body,
      C = H4.take(Z, {
        message: H4.expectString
      });
    Object.assign(G, C);
    let W = new tn.TooManyRequestsException({
      $metadata: lD(I),
      ...G
    });
    return H4.decorateServiceException(W, I.body)
  }, Zr = async (I, d) => {
    let G = H4.map({}),
      Z = I.body,
      C = H4.take(Z, {
        message: H4.expectString
      });
    Object.assign(G, C);
    let W = new tn.UnauthorizedException({
      $metadata: lD(I),
      ...G
    });
    return H4.decorateServiceException(W, I.body)
  }, lD = (I) => ({
    httpStatusCode: I.statusCode,
    requestId: I.headers["x-amzn-requestid"] ?? I.headers["x-amzn-request-id"] ?? I.headers["x-amz-request-id"],
    extendedRequestId: I.headers["x-amz-id-2"],
    cfId: I.headers["x-amz-cf-id"]
  }), UO5 = (I, d) => H4.collectBody(I, d).then((G) => d.utf8Encoder(G)), Cr = (I) => I !== void 0 && I !== null && I !== "" && (!Object.getOwnPropertyNames(I).includes("length") || I.length != 0) && (!Object.getOwnPropertyNames(I).includes("size") || I.size != 0), Wr = (I, d) => UO5(I, d).then((G) => {
    if (G.length) return JSON.parse(G);
    return {}
  }), wr = async (I, d) => {
    let G = await Wr(I, d);
    return G.message = G.message ?? G.Message, G
  }, Br = (I, d) => {
    let G = (W, w) => Object.keys(W).find((B) => B.toLowerCase() === w.toLowerCase()),
      Z = (W) => {
        let w = W;
        if (typeof w === "number") w = w.toString();
        if (w.indexOf(",") >= 0) w = w.split(",")[0];
        if (w.indexOf(":") >= 0) w = w.split(":")[0];
        if (w.indexOf("#") >= 0) w = w.split("#")[1];
        return w
      },
      C = G(I.headers, "x-amzn-errortype");
    if (C !== void 0) return Z(I.headers[C]);
    if (d.code !== void 0) return Z(d.code);
    if (d.__type !== void 0) return Z(d.__type)
  }
})
// @from(Start 3528427, End 3530416)
I_1 = Y((tY1) => {
  Object.defineProperty(tY1, "__esModule", {
    value: !0
  });
  tY1.GetRoleCredentialsCommand = tY1.$Command = void 0;
  var $O5 = c3(),
    uO5 = n6(),
    E42 = h2();
  Object.defineProperty(tY1, "$Command", {
    enumerable: !0,
    get: function() {
      return E42.Command
    }
  });
  var TO5 = k3(),
    U42 = UJ(),
    v42 = EP();
  class eY1 extends E42.Command {
    static getEndpointParameterInstructions() {
      return {
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
      this.middlewareStack.use(uO5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use($O5.getEndpointPlugin(d, eY1.getEndpointParameterInstructions()));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "SSOClient",
          commandName: "GetRoleCredentialsCommand",
          inputFilterSensitiveLog: U42.GetRoleCredentialsRequestFilterSensitiveLog,
          outputFilterSensitiveLog: U42.GetRoleCredentialsResponseFilterSensitiveLog,
          [TO5.SMITHY_CONTEXT_KEY]: {
            service: "SWBPortalService",
            operation: "GetRoleCredentials"
          }
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return v42.se_GetRoleCredentialsCommand(I, d)
    }
    deserialize(I, d) {
      return v42.de_GetRoleCredentialsCommand(I, d)
    }
  }
  tY1.GetRoleCredentialsCommand = eY1
})
// @from(Start 3530422, End 3532356)
Ar = Y((G_1) => {
  Object.defineProperty(G_1, "__esModule", {
    value: !0
  });
  G_1.ListAccountRolesCommand = G_1.$Command = void 0;
  var OO5 = c3(),
    mO5 = n6(),
    L42 = h2();
  Object.defineProperty(G_1, "$Command", {
    enumerable: !0,
    get: function() {
      return L42.Command
    }
  });
  var lO5 = k3(),
    bO5 = UJ(),
    S42 = EP();
  class d_1 extends L42.Command {
    static getEndpointParameterInstructions() {
      return {
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
      this.middlewareStack.use(mO5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(OO5.getEndpointPlugin(d, d_1.getEndpointParameterInstructions()));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "SSOClient",
          commandName: "ListAccountRolesCommand",
          inputFilterSensitiveLog: bO5.ListAccountRolesRequestFilterSensitiveLog,
          outputFilterSensitiveLog: (V) => V,
          [lO5.SMITHY_CONTEXT_KEY]: {
            service: "SWBPortalService",
            operation: "ListAccountRoles"
          }
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return S42.se_ListAccountRolesCommand(I, d)
    }
    deserialize(I, d) {
      return S42.de_ListAccountRolesCommand(I, d)
    }
  }
  G_1.ListAccountRolesCommand = d_1
})
// @from(Start 3532362, End 3534268)
Vr = Y((C_1) => {
  Object.defineProperty(C_1, "__esModule", {
    value: !0
  });
  C_1.ListAccountsCommand = C_1.$Command = void 0;
  var hO5 = c3(),
    jO5 = n6(),
    $42 = h2();
  Object.defineProperty(C_1, "$Command", {
    enumerable: !0,
    get: function() {
      return $42.Command
    }
  });
  var kO5 = k3(),
    xO5 = UJ(),
    P42 = EP();
  class Z_1 extends $42.Command {
    static getEndpointParameterInstructions() {
      return {
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
      this.middlewareStack.use(jO5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(hO5.getEndpointPlugin(d, Z_1.getEndpointParameterInstructions()));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "SSOClient",
          commandName: "ListAccountsCommand",
          inputFilterSensitiveLog: xO5.ListAccountsRequestFilterSensitiveLog,
          outputFilterSensitiveLog: (V) => V,
          [kO5.SMITHY_CONTEXT_KEY]: {
            service: "SWBPortalService",
            operation: "ListAccounts"
          }
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return P42.se_ListAccountsCommand(I, d)
    }
    deserialize(I, d) {
      return P42.de_ListAccountsCommand(I, d)
    }
  }
  C_1.ListAccountsCommand = Z_1
})
// @from(Start 3534274, End 3536139)
B_1 = Y((w_1) => {
  Object.defineProperty(w_1, "__esModule", {
    value: !0
  });
  w_1.LogoutCommand = w_1.$Command = void 0;
  var cO5 = c3(),
    pO5 = n6(),
    O42 = h2();
  Object.defineProperty(w_1, "$Command", {
    enumerable: !0,
    get: function() {
      return O42.Command
    }
  });
  var iO5 = k3(),
    nO5 = UJ(),
    T42 = EP();
  class W_1 extends O42.Command {
    static getEndpointParameterInstructions() {
      return {
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
      this.middlewareStack.use(pO5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(cO5.getEndpointPlugin(d, W_1.getEndpointParameterInstructions()));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "SSOClient",
          commandName: "LogoutCommand",
          inputFilterSensitiveLog: nO5.LogoutRequestFilterSensitiveLog,
          outputFilterSensitiveLog: (V) => V,
          [iO5.SMITHY_CONTEXT_KEY]: {
            service: "SWBPortalService",
            operation: "Logout"
          }
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return T42.se_LogoutCommand(I, d)
    }
    deserialize(I, d) {
      return T42.de_LogoutCommand(I, d)
    }
  }
  w_1.LogoutCommand = W_1
})
// @from(Start 3536145, End 3536678)
h42 = Y((l42) => {
  Object.defineProperty(l42, "__esModule", {
    value: !0
  });
  l42.SSO = void 0;
  var rO5 = h2(),
    aO5 = I_1(),
    sO5 = Ar(),
    oO5 = Vr(),
    eO5 = B_1(),
    tO5 = vP(),
    Im5 = {
      GetRoleCredentialsCommand: aO5.GetRoleCredentialsCommand,
      ListAccountRolesCommand: sO5.ListAccountRolesCommand,
      ListAccountsCommand: oO5.ListAccountsCommand,
      LogoutCommand: eO5.LogoutCommand
    };
  class A_1 extends tO5.SSOClient {}
  l42.SSO = A_1;
  rO5.createAggregatedClient(Im5, A_1)
})
// @from(Start 3536684, End 3536902)
j42 = Y((Lq) => {
  Object.defineProperty(Lq, "__esModule", {
    value: !0
  });
  var Xr = x1();
  Xr.__exportStar(I_1(), Lq);
  Xr.__exportStar(Ar(), Lq);
  Xr.__exportStar(Vr(), Lq);
  Xr.__exportStar(B_1(), Lq)
})
// @from(Start 3536908, End 3536993)
x42 = Y((k42) => {
  Object.defineProperty(k42, "__esModule", {
    value: !0
  })
})
// @from(Start 3536999, End 3537736)
i42 = Y((c42) => {
  Object.defineProperty(c42, "__esModule", {
    value: !0
  });
  c42.paginateListAccountRoles = void 0;
  var dm5 = Ar(),
    Gm5 = vP(),
    Zm5 = async (I, d, ...G) => {
      return await I.send(new dm5.ListAccountRolesCommand(d), ...G)
    };
  async function* Cm5(I, d, ...G) {
    let Z = I.startingToken || void 0,
      C = !0,
      W;
    while (C) {
      if (d.nextToken = Z, d.maxResults = I.pageSize, I.client instanceof Gm5.SSOClient) W = await Zm5(I.client, d, ...G);
      else throw new Error("Invalid client, expected SSO | SSOClient");
      yield W;
      let w = Z;
      Z = W.nextToken, C = !!(Z && (!I.stopOnSameToken || Z !== w))
    }
    return
  }
  c42.paginateListAccountRoles = Cm5
})
// @from(Start 3537742, End 3538467)
a42 = Y((n42) => {
  Object.defineProperty(n42, "__esModule", {
    value: !0
  });
  n42.paginateListAccounts = void 0;
  var Wm5 = Vr(),
    wm5 = vP(),
    Bm5 = async (I, d, ...G) => {
      return await I.send(new Wm5.ListAccountsCommand(d), ...G)
    };
  async function* Am5(I, d, ...G) {
    let Z = I.startingToken || void 0,
      C = !0,
      W;
    while (C) {
      if (d.nextToken = Z, d.maxResults = I.pageSize, I.client instanceof wm5.SSOClient) W = await Bm5(I.client, d, ...G);
      else throw new Error("Invalid client, expected SSO | SSOClient");
      yield W;
      let w = Z;
      Z = W.nextToken, C = !!(Z && (!I.stopOnSameToken || Z !== w))
    }
    return
  }
  n42.paginateListAccounts = Am5
})
// @from(Start 3538473, End 3538667)
s42 = Y((MP) => {
  Object.defineProperty(MP, "__esModule", {
    value: !0
  });
  var V_1 = x1();
  V_1.__exportStar(x42(), MP);
  V_1.__exportStar(i42(), MP);
  V_1.__exportStar(a42(), MP)
})
// @from(Start 3538673, End 3538807)
o42 = Y((X_1) => {
  Object.defineProperty(X_1, "__esModule", {
    value: !0
  });
  var Vm5 = x1();
  Vm5.__exportStar(UJ(), X_1)
})
// @from(Start 3538813, End 3539259)
e42 = Y((bD) => {
  Object.defineProperty(bD, "__esModule", {
    value: !0
  });
  bD.SSOServiceException = void 0;
  var SP = x1();
  SP.__exportStar(vP(), bD);
  SP.__exportStar(h42(), bD);
  SP.__exportStar(j42(), bD);
  SP.__exportStar(s42(), bD);
  SP.__exportStar(o42(), bD);
  var Xm5 = sn();
  Object.defineProperty(bD, "SSOServiceException", {
    enumerable: !0,
    get: function() {
      return Xm5.SSOServiceException
    }
  })
})
// @from(Start 3539265, End 3570931)
Dr = Y(($52) => {
  Object.defineProperty($52, "__esModule", {
    value: !0
  });
  $52.UnsupportedGrantTypeException = $52.UnauthorizedClientException = $52.SlowDownException = $52.SSOOIDCClient = $52.InvalidScopeException = $52.InvalidRequestException = $52.InvalidClientException = $52.InternalServerException = $52.ExpiredTokenException = $52.CreateTokenCommand = $52.AuthorizationPendingException = $52.AccessDeniedException = void 0;
  var t42 = ey(),
    _m5 = ty(),
    Dm5 = IP(),
    I52 = wP(),
    Hm5 = _B(),
    Fm5 = BP(),
    gm5 = c3(),
    d52 = bV(),
    Jm5 = h2(),
    Km5 = (I) => {
      var d, G;
      return {
        ...I,
        useDualstackEndpoint: (d = I.useDualstackEndpoint) !== null && d !== void 0 ? d : !1,
        useFipsEndpoint: (G = I.useFipsEndpoint) !== null && G !== void 0 ? G : !1,
        defaultSigningName: "awsssooidc"
      }
    },
    Nm5 = {
      version: "3.387.0"
    },
    zm5 = zP(),
    Yr = _B(),
    Qm5 = QP(),
    G52 = bV(),
    LP = mV(),
    Z52 = Yq(),
    fm5 = fP(),
    qm5 = fq(),
    Rm5 = h2(),
    Um5 = qJ(),
    C52 = fD(),
    W52 = SZ(),
    vm5 = zq(),
    D52 = "required",
    xV = "fn",
    cV = "argv",
    yq = "ref",
    Y_1 = "PartitionResult",
    HB = "tree",
    yP = "error",
    PP = "endpoint",
    w52 = {
      [D52]: !1,
      type: "String"
    },
    B52 = {
      [D52]: !0,
      default: !1,
      type: "Boolean"
    },
    H52 = {
      [yq]: "Endpoint"
    },
    F52 = {
      [xV]: "booleanEquals",
      [cV]: [{
        [yq]: "UseFIPS"
      }, !0]
    },
    g52 = {
      [xV]: "booleanEquals",
      [cV]: [{
        [yq]: "UseDualStack"
      }, !0]
    },
    FB = {},
    A52 = {
      [xV]: "booleanEquals",
      [cV]: [!0, {
        [xV]: "getAttr",
        [cV]: [{
          [yq]: Y_1
        }, "supportsFIPS"]
      }]
    },
    V52 = {
      [xV]: "booleanEquals",
      [cV]: [!0, {
        [xV]: "getAttr",
        [cV]: [{
          [yq]: Y_1
        }, "supportsDualStack"]
      }]
    },
    X52 = [H52],
    Y52 = [F52],
    _52 = [g52],
    Em5 = {
      version: "1.0",
      parameters: {
        Region: w52,
        UseDualStack: B52,
        UseFIPS: B52,
        Endpoint: w52
      },
      rules: [{
        conditions: [{
          [xV]: "aws.partition",
          [cV]: [{
            [yq]: "Region"
          }],
          assign: Y_1
        }],
        type: HB,
        rules: [{
          conditions: [{
            [xV]: "isSet",
            [cV]: X52
          }, {
            [xV]: "parseURL",
            [cV]: X52,
            assign: "url"
          }],
          type: HB,
          rules: [{
            conditions: Y52,
            error: "Invalid Configuration: FIPS and custom endpoint are not supported",
            type: yP
          }, {
            type: HB,
            rules: [{
              conditions: _52,
              error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
              type: yP
            }, {
              endpoint: {
                url: H52,
                properties: FB,
                headers: FB
              },
              type: PP
            }]
          }]
        }, {
          conditions: [F52, g52],
          type: HB,
          rules: [{
            conditions: [A52, V52],
            type: HB,
            rules: [{
              endpoint: {
                url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                properties: FB,
                headers: FB
              },
              type: PP
            }]
          }, {
            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
            type: yP
          }]
        }, {
          conditions: Y52,
          type: HB,
          rules: [{
            conditions: [A52],
            type: HB,
            rules: [{
              type: HB,
              rules: [{
                endpoint: {
                  url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}",
                  properties: FB,
                  headers: FB
                },
                type: PP
              }]
            }]
          }, {
            error: "FIPS is enabled but this partition does not support FIPS",
            type: yP
          }]
        }, {
          conditions: _52,
          type: HB,
          rules: [{
            conditions: [V52],
            type: HB,
            rules: [{
              endpoint: {
                url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}",
                properties: FB,
                headers: FB
              },
              type: PP
            }]
          }, {
            error: "DualStack is enabled but this partition does not support DualStack",
            type: yP
          }]
        }, {
          endpoint: {
            url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}",
            properties: FB,
            headers: FB
          },
          type: PP
        }]
      }]
    },
    Mm5 = Em5,
    Sm5 = (I, d = {}) => {
      return vm5.resolveEndpoint(Mm5, {
        endpointParams: I,
        logger: d.logger
      })
    },
    Lm5 = (I) => {
      var d, G, Z, C, W, w, B, A, V;
      return {
        apiVersion: "2019-06-10",
        base64Decoder: (d = I === null || I === void 0 ? void 0 : I.base64Decoder) !== null && d !== void 0 ? d : C52.fromBase64,
        base64Encoder: (G = I === null || I === void 0 ? void 0 : I.base64Encoder) !== null && G !== void 0 ? G : C52.toBase64,
        disableHostPrefix: (Z = I === null || I === void 0 ? void 0 : I.disableHostPrefix) !== null && Z !== void 0 ? Z : !1,
        endpointProvider: (C = I === null || I === void 0 ? void 0 : I.endpointProvider) !== null && C !== void 0 ? C : Sm5,
        logger: (W = I === null || I === void 0 ? void 0 : I.logger) !== null && W !== void 0 ? W : new Rm5.NoOpLogger,
        serviceId: (w = I === null || I === void 0 ? void 0 : I.serviceId) !== null && w !== void 0 ? w : "SSO OIDC",
        urlParser: (B = I === null || I === void 0 ? void 0 : I.urlParser) !== null && B !== void 0 ? B : Um5.parseUrl,
        utf8Decoder: (A = I === null || I === void 0 ? void 0 : I.utf8Decoder) !== null && A !== void 0 ? A : W52.fromUtf8,
        utf8Encoder: (V = I === null || I === void 0 ? void 0 : I.utf8Encoder) !== null && V !== void 0 ? V : W52.toUtf8
      }
    },
    ym5 = h2(),
    Pm5 = RP(),
    $m5 = h2(),
    um5 = (I) => {
      var d, G, Z, C, W, w, B, A, V, X;
      $m5.emitWarningIfUnsupportedVersion(process.version);
      let _ = Pm5.resolveDefaultsModeConfig(I),
        F = () => _().then(ym5.loadConfigsForDefaultMode),
        g = Lm5(I);
      return {
        ...g,
        ...I,
        runtime: "node",
        defaultsMode: _,
        bodyLengthChecker: (d = I === null || I === void 0 ? void 0 : I.bodyLengthChecker) !== null && d !== void 0 ? d : fm5.calculateBodyLength,
        defaultUserAgentProvider: (G = I === null || I === void 0 ? void 0 : I.defaultUserAgentProvider) !== null && G !== void 0 ? G : zm5.defaultUserAgent({
          serviceId: g.serviceId,
          clientVersion: Nm5.version
        }),
        maxAttempts: (Z = I === null || I === void 0 ? void 0 : I.maxAttempts) !== null && Z !== void 0 ? Z : LP.loadConfig(G52.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: (C = I === null || I === void 0 ? void 0 : I.region) !== null && C !== void 0 ? C : LP.loadConfig(Yr.NODE_REGION_CONFIG_OPTIONS, Yr.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: (W = I === null || I === void 0 ? void 0 : I.requestHandler) !== null && W !== void 0 ? W : new Z52.NodeHttpHandler(F),
        retryMode: (w = I === null || I === void 0 ? void 0 : I.retryMode) !== null && w !== void 0 ? w : LP.loadConfig({
          ...G52.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await F()).retryMode || qm5.DEFAULT_RETRY_MODE
        }),
        sha256: (B = I === null || I === void 0 ? void 0 : I.sha256) !== null && B !== void 0 ? B : Qm5.Hash.bind(null, "sha256"),
        streamCollector: (A = I === null || I === void 0 ? void 0 : I.streamCollector) !== null && A !== void 0 ? A : Z52.streamCollector,
        useDualstackEndpoint: (V = I === null || I === void 0 ? void 0 : I.useDualstackEndpoint) !== null && V !== void 0 ? V : LP.loadConfig(Yr.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: (X = I === null || I === void 0 ? void 0 : I.useFipsEndpoint) !== null && X !== void 0 ? X : LP.loadConfig(Yr.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
      }
    },
    J52 = class extends Jm5.Client {
      constructor(...[I]) {
        let d = um5(I || {}),
          G = Km5(d),
          Z = Hm5.resolveRegionConfig(G),
          C = gm5.resolveEndpointConfig(Z),
          W = d52.resolveRetryConfig(C),
          w = t42.resolveHostHeaderConfig(W),
          B = I52.resolveUserAgentConfig(w);
        super(B);
        this.config = B, this.middlewareStack.use(d52.getRetryPlugin(this.config)), this.middlewareStack.use(Fm5.getContentLengthPlugin(this.config)), this.middlewareStack.use(t42.getHostHeaderPlugin(this.config)), this.middlewareStack.use(_m5.getLoggerPlugin(this.config)), this.middlewareStack.use(Dm5.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(I52.getUserAgentPlugin(this.config))
      }
      destroy() {
        super.destroy()
      }
    };
  $52.SSOOIDCClient = J52;
  var Tm5 = h2(),
    Om5 = c3(),
    mm5 = n6(),
    lm5 = h2(),
    __1 = t8(),
    S0 = h2(),
    bm5 = h2(),
    CG = class I extends bm5.ServiceException {
      constructor(d) {
        super(d);
        Object.setPrototypeOf(this, I.prototype)
      }
    },
    K52 = class I extends CG {
      constructor(d) {
        super({
          name: "AccessDeniedException",
          $fault: "client",
          ...d
        });
        this.name = "AccessDeniedException", this.$fault = "client", Object.setPrototypeOf(this, I.prototype), this.error = d.error, this.error_description = d.error_description
      }
    };
  $52.AccessDeniedException = K52;
  var N52 = class I extends CG {
    constructor(d) {
      super({
        name: "AuthorizationPendingException",
        $fault: "client",
        ...d
      });
      this.name = "AuthorizationPendingException", this.$fault = "client", Object.setPrototypeOf(this, I.prototype), this.error = d.error, this.error_description = d.error_description
    }
  };
  $52.AuthorizationPendingException = N52;
  var z52 = class I extends CG {
    constructor(d) {
      super({
        name: "ExpiredTokenException",
        $fault: "client",
        ...d
      });
      this.name = "ExpiredTokenException", this.$fault = "client", Object.setPrototypeOf(this, I.prototype), this.error = d.error, this.error_description = d.error_description
    }
  };
  $52.ExpiredTokenException = z52;
  var Q52 = class I extends CG {
    constructor(d) {
      super({
        name: "InternalServerException",
        $fault: "server",
        ...d
      });
      this.name = "InternalServerException", this.$fault = "server", Object.setPrototypeOf(this, I.prototype), this.error = d.error, this.error_description = d.error_description
    }
  };
  $52.InternalServerException = Q52;
  var f52 = class I extends CG {
    constructor(d) {
      super({
        name: "InvalidClientException",
        $fault: "client",
        ...d
      });
      this.name = "InvalidClientException", this.$fault = "client", Object.setPrototypeOf(this, I.prototype), this.error = d.error, this.error_description = d.error_description
    }
  };
  $52.InvalidClientException = f52;
  var hm5 = class I extends CG {
      constructor(d) {
        super({
          name: "InvalidGrantException",
          $fault: "client",
          ...d
        });
        this.name = "InvalidGrantException", this.$fault = "client", Object.setPrototypeOf(this, I.prototype), this.error = d.error, this.error_description = d.error_description
      }
    },
    q52 = class I extends CG {
      constructor(d) {
        super({
          name: "InvalidRequestException",
          $fault: "client",
          ...d
        });
        this.name = "InvalidRequestException", this.$fault = "client", Object.setPrototypeOf(this, I.prototype), this.error = d.error, this.error_description = d.error_description
      }
    };
  $52.InvalidRequestException = q52;
  var R52 = class I extends CG {
    constructor(d) {
      super({
        name: "InvalidScopeException",
        $fault: "client",
        ...d
      });
      this.name = "InvalidScopeException", this.$fault = "client", Object.setPrototypeOf(this, I.prototype), this.error = d.error, this.error_description = d.error_description
    }
  };
  $52.InvalidScopeException = R52;
  var U52 = class I extends CG {
    constructor(d) {
      super({
        name: "SlowDownException",
        $fault: "client",
        ...d
      });
      this.name = "SlowDownException", this.$fault = "client", Object.setPrototypeOf(this, I.prototype), this.error = d.error, this.error_description = d.error_description
    }
  };
  $52.SlowDownException = U52;
  var v52 = class I extends CG {
    constructor(d) {
      super({
        name: "UnauthorizedClientException",
        $fault: "client",
        ...d
      });
      this.name = "UnauthorizedClientException", this.$fault = "client", Object.setPrototypeOf(this, I.prototype), this.error = d.error, this.error_description = d.error_description
    }
  };
  $52.UnauthorizedClientException = v52;
  var E52 = class I extends CG {
    constructor(d) {
      super({
        name: "UnsupportedGrantTypeException",
        $fault: "client",
        ...d
      });
      this.name = "UnsupportedGrantTypeException", this.$fault = "client", Object.setPrototypeOf(this, I.prototype), this.error = d.error, this.error_description = d.error_description
    }
  };
  $52.UnsupportedGrantTypeException = E52;
  var jm5 = class I extends CG {
      constructor(d) {
        super({
          name: "InvalidClientMetadataException",
          $fault: "client",
          ...d
        });
        this.name = "InvalidClientMetadataException", this.$fault = "client", Object.setPrototypeOf(this, I.prototype), this.error = d.error, this.error_description = d.error_description
      }
    },
    km5 = async (I, d) => {
      let {
        hostname: G,
        protocol: Z = "https",
        port: C,
        path: W
      } = await d.endpoint(), w = {
        "content-type": "application/json"
      }, B = `${(W===null||W===void 0?void 0:W.endsWith("/"))?W.slice(0,-1):W||""}/token`, A;
      return A = JSON.stringify(S0.take(I, {
        clientId: [],
        clientSecret: [],
        code: [],
        deviceCode: [],
        grantType: [],
        redirectUri: [],
        refreshToken: [],
        scope: (V) => S0._json(V)
      })), new __1.HttpRequest({
        protocol: Z,
        hostname: G,
        port: C,
        method: "POST",
        headers: w,
        path: B,
        body: A
      })
    }, xm5 = async (I, d) => {
      let {
        hostname: G,
        protocol: Z = "https",
        port: C,
        path: W
      } = await d.endpoint(), w = {
        "content-type": "application/json"
      }, B = `${(W===null||W===void 0?void 0:W.endsWith("/"))?W.slice(0,-1):W||""}/client/register`, A;
      return A = JSON.stringify(S0.take(I, {
        clientName: [],
        clientType: [],
        scopes: (V) => S0._json(V)
      })), new __1.HttpRequest({
        protocol: Z,
        hostname: G,
        port: C,
        method: "POST",
        headers: w,
        path: B,
        body: A
      })
    }, cm5 = async (I, d) => {
      let {
        hostname: G,
        protocol: Z = "https",
        port: C,
        path: W
      } = await d.endpoint(), w = {
        "content-type": "application/json"
      }, B = `${(W===null||W===void 0?void 0:W.endsWith("/"))?W.slice(0,-1):W||""}/device_authorization`, A;
      return A = JSON.stringify(S0.take(I, {
        clientId: [],
        clientSecret: [],
        startUrl: []
      })), new __1.HttpRequest({
        protocol: Z,
        hostname: G,
        port: C,
        method: "POST",
        headers: w,
        path: B,
        body: A
      })
    }, pm5 = async (I, d) => {
      if (I.statusCode !== 200 && I.statusCode >= 300) return im5(I, d);
      let G = S0.map({
          $metadata: VI(I)
        }),
        Z = S0.expectNonNull(S0.expectObject(await _r(I.body, d)), "body"),
        C = S0.take(Z, {
          accessToken: S0.expectString,
          expiresIn: S0.expectInt32,
          idToken: S0.expectString,
          refreshToken: S0.expectString,
          tokenType: S0.expectString
        });
      return Object.assign(G, C), G
    }, im5 = async (I, d) => {
      let G = {
          ...I,
          body: await g_1(I.body, d)
        },
        Z = J_1(I, G.body);
      switch (Z) {
        case "AccessDeniedException":
        case "com.amazonaws.ssooidc#AccessDeniedException":
          throw await om5(G, d);
        case "AuthorizationPendingException":
        case "com.amazonaws.ssooidc#AuthorizationPendingException":
          throw await em5(G, d);
        case "ExpiredTokenException":
        case "com.amazonaws.ssooidc#ExpiredTokenException":
          throw await tm5(G, d);
        case "InternalServerException":
        case "com.amazonaws.ssooidc#InternalServerException":
          throw await H_1(G, d);
        case "InvalidClientException":
        case "com.amazonaws.ssooidc#InvalidClientException":
          throw await M52(G, d);
        case "InvalidGrantException":
        case "com.amazonaws.ssooidc#InvalidGrantException":
          throw await dl5(G, d);
        case "InvalidRequestException":
        case "com.amazonaws.ssooidc#InvalidRequestException":
          throw await F_1(G, d);
        case "InvalidScopeException":
        case "com.amazonaws.ssooidc#InvalidScopeException":
          throw await S52(G, d);
        case "SlowDownException":
        case "com.amazonaws.ssooidc#SlowDownException":
          throw await L52(G, d);
        case "UnauthorizedClientException":
        case "com.amazonaws.ssooidc#UnauthorizedClientException":
          throw await y52(G, d);
        case "UnsupportedGrantTypeException":
        case "com.amazonaws.ssooidc#UnsupportedGrantTypeException":
          throw await Gl5(G, d);
        default:
          let C = G.body;
          return D_1({
            output: I,
            parsedBody: C,
            errorCode: Z
          })
      }
    }, nm5 = async (I, d) => {
      if (I.statusCode !== 200 && I.statusCode >= 300) return rm5(I, d);
      let G = S0.map({
          $metadata: VI(I)
        }),
        Z = S0.expectNonNull(S0.expectObject(await _r(I.body, d)), "body"),
        C = S0.take(Z, {
          authorizationEndpoint: S0.expectString,
          clientId: S0.expectString,
          clientIdIssuedAt: S0.expectLong,
          clientSecret: S0.expectString,
          clientSecretExpiresAt: S0.expectLong,
          tokenEndpoint: S0.expectString
        });
      return Object.assign(G, C), G
    }, rm5 = async (I, d) => {
      let G = {
          ...I,
          body: await g_1(I.body, d)
        },
        Z = J_1(I, G.body);
      switch (Z) {
        case "InternalServerException":
        case "com.amazonaws.ssooidc#InternalServerException":
          throw await H_1(G, d);
        case "InvalidClientMetadataException":
        case "com.amazonaws.ssooidc#InvalidClientMetadataException":
          throw await Il5(G, d);
        case "InvalidRequestException":
        case "com.amazonaws.ssooidc#InvalidRequestException":
          throw await F_1(G, d);
        case "InvalidScopeException":
        case "com.amazonaws.ssooidc#InvalidScopeException":
          throw await S52(G, d);
        default:
          let C = G.body;
          return D_1({
            output: I,
            parsedBody: C,
            errorCode: Z
          })
      }
    }, am5 = async (I, d) => {
      if (I.statusCode !== 200 && I.statusCode >= 300) return sm5(I, d);
      let G = S0.map({
          $metadata: VI(I)
        }),
        Z = S0.expectNonNull(S0.expectObject(await _r(I.body, d)), "body"),
        C = S0.take(Z, {
          deviceCode: S0.expectString,
          expiresIn: S0.expectInt32,
          interval: S0.expectInt32,
          userCode: S0.expectString,
          verificationUri: S0.expectString,
          verificationUriComplete: S0.expectString
        });
      return Object.assign(G, C), G
    }, sm5 = async (I, d) => {
      let G = {
          ...I,
          body: await g_1(I.body, d)
        },
        Z = J_1(I, G.body);
      switch (Z) {
        case "InternalServerException":
        case "com.amazonaws.ssooidc#InternalServerException":
          throw await H_1(G, d);
        case "InvalidClientException":
        case "com.amazonaws.ssooidc#InvalidClientException":
          throw await M52(G, d);
        case "InvalidRequestException":
        case "com.amazonaws.ssooidc#InvalidRequestException":
          throw await F_1(G, d);
        case "SlowDownException":
        case "com.amazonaws.ssooidc#SlowDownException":
          throw await L52(G, d);
        case "UnauthorizedClientException":
        case "com.amazonaws.ssooidc#UnauthorizedClientException":
          throw await y52(G, d);
        default:
          let C = G.body;
          return D_1({
            output: I,
            parsedBody: C,
            errorCode: Z
          })
      }
    }, D_1 = S0.withBaseException(CG), om5 = async (I, d) => {
      let G = S0.map({}),
        Z = I.body,
        C = S0.take(Z, {
          error: S0.expectString,
          error_description: S0.expectString
        });
      Object.assign(G, C);
      let W = new K52({
        $metadata: VI(I),
        ...G
      });
      return S0.decorateServiceException(W, I.body)
    }, em5 = async (I, d) => {
      let G = S0.map({}),
        Z = I.body,
        C = S0.take(Z, {
          error: S0.expectString,
          error_description: S0.expectString
        });
      Object.assign(G, C);
      let W = new N52({
        $metadata: VI(I),
        ...G
      });
      return S0.decorateServiceException(W, I.body)
    }, tm5 = async (I, d) => {
      let G = S0.map({}),
        Z = I.body,
        C = S0.take(Z, {
          error: S0.expectString,
          error_description: S0.expectString
        });
      Object.assign(G, C);
      let W = new z52({
        $metadata: VI(I),
        ...G
      });
      return S0.decorateServiceException(W, I.body)
    }, H_1 = async (I, d) => {
      let G = S0.map({}),
        Z = I.body,
        C = S0.take(Z, {
          error: S0.expectString,
          error_description: S0.expectString
        });
      Object.assign(G, C);
      let W = new Q52({
        $metadata: VI(I),
        ...G
      });
      return S0.decorateServiceException(W, I.body)
    }, M52 = async (I, d) => {
      let G = S0.map({}),
        Z = I.body,
        C = S0.take(Z, {
          error: S0.expectString,
          error_description: S0.expectString
        });
      Object.assign(G, C);
      let W = new f52({
        $metadata: VI(I),
        ...G
      });
      return S0.decorateServiceException(W, I.body)
    }, Il5 = async (I, d) => {
      let G = S0.map({}),
        Z = I.body,
        C = S0.take(Z, {
          error: S0.expectString,
          error_description: S0.expectString
        });
      Object.assign(G, C);
      let W = new jm5({
        $metadata: VI(I),
        ...G
      });
      return S0.decorateServiceException(W, I.body)
    }, dl5 = async (I, d) => {
      let G = S0.map({}),
        Z = I.body,
        C = S0.take(Z, {
          error: S0.expectString,
          error_description: S0.expectString
        });
      Object.assign(G, C);
      let W = new hm5({
        $metadata: VI(I),
        ...G
      });
      return S0.decorateServiceException(W, I.body)
    }, F_1 = async (I, d) => {
      let G = S0.map({}),
        Z = I.body,
        C = S0.take(Z, {
          error: S0.expectString,
          error_description: S0.expectString
        });
      Object.assign(G, C);
      let W = new q52({
        $metadata: VI(I),
        ...G
      });
      return S0.decorateServiceException(W, I.body)
    }, S52 = async (I, d) => {
      let G = S0.map({}),
        Z = I.body,
        C = S0.take(Z, {
          error: S0.expectString,
          error_description: S0.expectString
        });
      Object.assign(G, C);
      let W = new R52({
        $metadata: VI(I),
        ...G
      });
      return S0.decorateServiceException(W, I.body)
    }, L52 = async (I, d) => {
      let G = S0.map({}),
        Z = I.body,
        C = S0.take(Z, {
          error: S0.expectString,
          error_description: S0.expectString
        });
      Object.assign(G, C);
      let W = new U52({
        $metadata: VI(I),
        ...G
      });
      return S0.decorateServiceException(W, I.body)
    }, y52 = async (I, d) => {
      let G = S0.map({}),
        Z = I.body,
        C = S0.take(Z, {
          error: S0.expectString,
          error_description: S0.expectString
        });
      Object.assign(G, C);
      let W = new v52({
        $metadata: VI(I),
        ...G
      });
      return S0.decorateServiceException(W, I.body)
    }, Gl5 = async (I, d) => {
      let G = S0.map({}),
        Z = I.body,
        C = S0.take(Z, {
          error: S0.expectString,
          error_description: S0.expectString
        });
      Object.assign(G, C);
      let W = new E52({
        $metadata: VI(I),
        ...G
      });
      return S0.decorateServiceException(W, I.body)
    }, VI = (I) => {
      var d, G;
      return {
        httpStatusCode: I.statusCode,
        requestId: (G = (d = I.headers["x-amzn-requestid"]) !== null && d !== void 0 ? d : I.headers["x-amzn-request-id"]) !== null && G !== void 0 ? G : I.headers["x-amz-request-id"],
        extendedRequestId: I.headers["x-amz-id-2"],
        cfId: I.headers["x-amz-cf-id"]
      }
    }, Zl5 = (I, d) => S0.collectBody(I, d).then((G) => d.utf8Encoder(G)), _r = (I, d) => Zl5(I, d).then((G) => {
      if (G.length) return JSON.parse(G);
      return {}
    }), g_1 = async (I, d) => {
      var G;
      let Z = await _r(I, d);
      return Z.message = (G = Z.message) !== null && G !== void 0 ? G : Z.Message, Z
    }, J_1 = (I, d) => {
      let G = (W, w) => Object.keys(W).find((B) => B.toLowerCase() === w.toLowerCase()),
        Z = (W) => {
          let w = W;
          if (typeof w === "number") w = w.toString();
          if (w.indexOf(",") >= 0) w = w.split(",")[0];
          if (w.indexOf(":") >= 0) w = w.split(":")[0];
          if (w.indexOf("#") >= 0) w = w.split("#")[1];
          return w
        },
        C = G(I.headers, "x-amzn-errortype");
      if (C !== void 0) return Z(I.headers[C]);
      if (d.code !== void 0) return Z(d.code);
      if (d.__type !== void 0) return Z(d.__type)
    }, P52 = class I extends lm5.Command {
      constructor(d) {
        super();
        this.input = d
      }
      static getEndpointParameterInstructions() {
        return {
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
      resolveMiddleware(d, G, Z) {
        this.middlewareStack.use(mm5.getSerdePlugin(G, this.serialize, this.deserialize)), this.middlewareStack.use(Om5.getEndpointPlugin(G, I.getEndpointParameterInstructions()));
        let C = d.concat(this.middlewareStack),
          {
            logger: W
          } = G,
          A = {
            logger: W,
            clientName: "SSOOIDCClient",
            commandName: "CreateTokenCommand",
            inputFilterSensitiveLog: (X) => X,
            outputFilterSensitiveLog: (X) => X
          },
          {
            requestHandler: V
          } = G;
        return C.resolve((X) => V.handle(X.request, Z || {}), A)
      }
      serialize(d, G) {
        return km5(d, G)
      }
      deserialize(d, G) {
        return pm5(d, G)
      }
    };
  $52.CreateTokenCommand = P52;
  var Cl5 = c3(),
    Wl5 = n6(),
    wl5 = h2(),
    Bl5 = class I extends wl5.Command {
      constructor(d) {
        super();
        this.input = d
      }
      static getEndpointParameterInstructions() {
        return {
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
      resolveMiddleware(d, G, Z) {
        this.middlewareStack.use(Wl5.getSerdePlugin(G, this.serialize, this.deserialize)), this.middlewareStack.use(Cl5.getEndpointPlugin(G, I.getEndpointParameterInstructions()));
        let C = d.concat(this.middlewareStack),
          {
            logger: W
          } = G,
          A = {
            logger: W,
            clientName: "SSOOIDCClient",
            commandName: "RegisterClientCommand",
            inputFilterSensitiveLog: (X) => X,
            outputFilterSensitiveLog: (X) => X
          },
          {
            requestHandler: V
          } = G;
        return C.resolve((X) => V.handle(X.request, Z || {}), A)
      }
      serialize(d, G) {
        return xm5(d, G)
      }
      deserialize(d, G) {
        return nm5(d, G)
      }
    },
    Al5 = c3(),
    Vl5 = n6(),
    Xl5 = h2(),
    Yl5 = class I extends Xl5.Command {
      constructor(d) {
        super();
        this.input = d
      }
      static getEndpointParameterInstructions() {
        return {
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
      resolveMiddleware(d, G, Z) {
        this.middlewareStack.use(Vl5.getSerdePlugin(G, this.serialize, this.deserialize)), this.middlewareStack.use(Al5.getEndpointPlugin(G, I.getEndpointParameterInstructions()));
        let C = d.concat(this.middlewareStack),
          {
            logger: W
          } = G,
          A = {
            logger: W,
            clientName: "SSOOIDCClient",
            commandName: "StartDeviceAuthorizationCommand",
            inputFilterSensitiveLog: (X) => X,
            outputFilterSensitiveLog: (X) => X
          },
          {
            requestHandler: V
          } = G;
        return C.resolve((X) => V.handle(X.request, Z || {}), A)
      }
      serialize(d, G) {
        return cm5(d, G)
      }
      deserialize(d, G) {
        return am5(d, G)
      }
    },
    _l5 = {
      CreateTokenCommand: P52,
      RegisterClientCommand: Bl5,
      StartDeviceAuthorizationCommand: Yl5
    },
    Dl5 = class extends J52 {};
  Tm5.createAggregatedClient(_l5, Dl5)
})
// @from(Start 3570937, End 3571216)
Hr = Y((T52) => {
  Object.defineProperty(T52, "__esModule", {
    value: !0
  });
  T52.REFRESH_MESSAGE = T52.EXPIRE_WINDOW_MS = void 0;
  T52.EXPIRE_WINDOW_MS = 300000;
  T52.REFRESH_MESSAGE = "To refresh this SSO session run 'aws sso login' with the corresponding profile."
})
// @from(Start 3571222, End 3571554)
b52 = Y((m52) => {
  Object.defineProperty(m52, "__esModule", {
    value: !0
  });
  m52.getSsoOidcClient = void 0;
  var vl5 = Dr(),
    K_1 = {},
    El5 = (I) => {
      if (K_1[I]) return K_1[I];
      let d = new vl5.SSOOIDCClient({
        region: I
      });
      return K_1[I] = d, d
    };
  m52.getSsoOidcClient = El5
})
// @from(Start 3571560, End 3571998)
k52 = Y((h52) => {
  Object.defineProperty(h52, "__esModule", {
    value: !0
  });
  h52.getNewSsoOidcToken = void 0;
  var Ml5 = Dr(),
    Sl5 = b52(),
    Ll5 = (I, d) => {
      return Sl5.getSsoOidcClient(d).send(new Ml5.CreateTokenCommand({
        clientId: I.clientId,
        clientSecret: I.clientSecret,
        refreshToken: I.refreshToken,
        grantType: "refresh_token"
      }))
    };
  h52.getNewSsoOidcToken = Ll5
})