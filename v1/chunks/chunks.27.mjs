
// @from(Start 3093227, End 3101965)
Bh0 = Y((Wh0) => {
  Object.defineProperty(Wh0, "__esModule", {
    value: !0
  });
  Wh0.ruleSet = void 0;
  var ab0 = "required",
    D4 = "type",
    O5 = "fn",
    m5 = "argv",
    JD = "ref",
    lb0 = !1,
    gF5 = !0,
    gJ = "booleanEquals",
    T7 = "tree",
    o8 = "stringEquals",
    sb0 = "sigv4",
    ob0 = "sts",
    eb0 = "us-east-1",
    w3 = "endpoint",
    bb0 = "https://sts.{Region}.{PartitionResult#dnsSuffix}",
    Gq = "error",
    jA1 = "getAttr",
    hb0 = {
      [ab0]: !1,
      [D4]: "String"
    },
    hA1 = {
      [ab0]: !0,
      default: !1,
      [D4]: "Boolean"
    },
    tb0 = {
      [JD]: "Endpoint"
    },
    jb0 = {
      [O5]: "isSet",
      [m5]: [{
        [JD]: "Region"
      }]
    },
    e8 = {
      [JD]: "Region"
    },
    kb0 = {
      [O5]: "aws.partition",
      [m5]: [e8],
      assign: "PartitionResult"
    },
    Ih0 = {
      [JD]: "UseFIPS"
    },
    dh0 = {
      [JD]: "UseDualStack"
    },
    O7 = {
      url: "https://sts.amazonaws.com",
      properties: {
        authSchemes: [{
          name: sb0,
          signingName: ob0,
          signingRegion: eb0
        }]
      },
      headers: {}
    },
    ZG = {},
    xb0 = {
      conditions: [{
        [O5]: o8,
        [m5]: [e8, "aws-global"]
      }],
      [w3]: O7,
      [D4]: w3
    },
    Gh0 = {
      [O5]: gJ,
      [m5]: [Ih0, !0]
    },
    Zh0 = {
      [O5]: gJ,
      [m5]: [dh0, !0]
    },
    cb0 = {
      [O5]: gJ,
      [m5]: [!0, {
        [O5]: jA1,
        [m5]: [{
          [JD]: "PartitionResult"
        }, "supportsFIPS"]
      }]
    },
    Ch0 = {
      [JD]: "PartitionResult"
    },
    pb0 = {
      [O5]: gJ,
      [m5]: [!0, {
        [O5]: jA1,
        [m5]: [Ch0, "supportsDualStack"]
      }]
    },
    ib0 = [{
      [O5]: "isSet",
      [m5]: [tb0]
    }],
    nb0 = [Gh0],
    rb0 = [Zh0],
    JF5 = {
      version: "1.0",
      parameters: {
        Region: hb0,
        UseDualStack: hA1,
        UseFIPS: hA1,
        Endpoint: hb0,
        UseGlobalEndpoint: hA1
      },
      rules: [{
        conditions: [{
          [O5]: gJ,
          [m5]: [{
            [JD]: "UseGlobalEndpoint"
          }, gF5]
        }, {
          [O5]: "not",
          [m5]: ib0
        }, jb0, kb0, {
          [O5]: gJ,
          [m5]: [Ih0, lb0]
        }, {
          [O5]: gJ,
          [m5]: [dh0, lb0]
        }],
        [D4]: T7,
        rules: [{
          conditions: [{
            [O5]: o8,
            [m5]: [e8, "ap-northeast-1"]
          }],
          endpoint: O7,
          [D4]: w3
        }, {
          conditions: [{
            [O5]: o8,
            [m5]: [e8, "ap-south-1"]
          }],
          endpoint: O7,
          [D4]: w3
        }, {
          conditions: [{
            [O5]: o8,
            [m5]: [e8, "ap-southeast-1"]
          }],
          endpoint: O7,
          [D4]: w3
        }, {
          conditions: [{
            [O5]: o8,
            [m5]: [e8, "ap-southeast-2"]
          }],
          endpoint: O7,
          [D4]: w3
        }, xb0, {
          conditions: [{
            [O5]: o8,
            [m5]: [e8, "ca-central-1"]
          }],
          endpoint: O7,
          [D4]: w3
        }, {
          conditions: [{
            [O5]: o8,
            [m5]: [e8, "eu-central-1"]
          }],
          endpoint: O7,
          [D4]: w3
        }, {
          conditions: [{
            [O5]: o8,
            [m5]: [e8, "eu-north-1"]
          }],
          endpoint: O7,
          [D4]: w3
        }, {
          conditions: [{
            [O5]: o8,
            [m5]: [e8, "eu-west-1"]
          }],
          endpoint: O7,
          [D4]: w3
        }, {
          conditions: [{
            [O5]: o8,
            [m5]: [e8, "eu-west-2"]
          }],
          endpoint: O7,
          [D4]: w3
        }, {
          conditions: [{
            [O5]: o8,
            [m5]: [e8, "eu-west-3"]
          }],
          endpoint: O7,
          [D4]: w3
        }, {
          conditions: [{
            [O5]: o8,
            [m5]: [e8, "sa-east-1"]
          }],
          endpoint: O7,
          [D4]: w3
        }, {
          conditions: [{
            [O5]: o8,
            [m5]: [e8, eb0]
          }],
          endpoint: O7,
          [D4]: w3
        }, {
          conditions: [{
            [O5]: o8,
            [m5]: [e8, "us-east-2"]
          }],
          endpoint: O7,
          [D4]: w3
        }, {
          conditions: [{
            [O5]: o8,
            [m5]: [e8, "us-west-1"]
          }],
          endpoint: O7,
          [D4]: w3
        }, {
          conditions: [{
            [O5]: o8,
            [m5]: [e8, "us-west-2"]
          }],
          endpoint: O7,
          [D4]: w3
        }, {
          endpoint: {
            url: bb0,
            properties: {
              authSchemes: [{
                name: sb0,
                signingName: ob0,
                signingRegion: "{Region}"
              }]
            },
            headers: ZG
          },
          [D4]: w3
        }]
      }, {
        conditions: ib0,
        [D4]: T7,
        rules: [{
          conditions: nb0,
          error: "Invalid Configuration: FIPS and custom endpoint are not supported",
          [D4]: Gq
        }, {
          [D4]: T7,
          rules: [{
            conditions: rb0,
            error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
            [D4]: Gq
          }, {
            endpoint: {
              url: tb0,
              properties: ZG,
              headers: ZG
            },
            [D4]: w3
          }]
        }]
      }, {
        [D4]: T7,
        rules: [{
          conditions: [jb0],
          [D4]: T7,
          rules: [{
            conditions: [kb0],
            [D4]: T7,
            rules: [{
              conditions: [Gh0, Zh0],
              [D4]: T7,
              rules: [{
                conditions: [cb0, pb0],
                [D4]: T7,
                rules: [{
                  [D4]: T7,
                  rules: [{
                    endpoint: {
                      url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                      properties: ZG,
                      headers: ZG
                    },
                    [D4]: w3
                  }]
                }]
              }, {
                error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                [D4]: Gq
              }]
            }, {
              conditions: nb0,
              [D4]: T7,
              rules: [{
                conditions: [cb0],
                [D4]: T7,
                rules: [{
                  [D4]: T7,
                  rules: [{
                    conditions: [{
                      [O5]: o8,
                      [m5]: ["aws-us-gov", {
                        [O5]: jA1,
                        [m5]: [Ch0, "name"]
                      }]
                    }],
                    endpoint: {
                      url: "https://sts.{Region}.amazonaws.com",
                      properties: ZG,
                      headers: ZG
                    },
                    [D4]: w3
                  }, {
                    endpoint: {
                      url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",
                      properties: ZG,
                      headers: ZG
                    },
                    [D4]: w3
                  }]
                }]
              }, {
                error: "FIPS is enabled but this partition does not support FIPS",
                [D4]: Gq
              }]
            }, {
              conditions: rb0,
              [D4]: T7,
              rules: [{
                conditions: [pb0],
                [D4]: T7,
                rules: [{
                  [D4]: T7,
                  rules: [{
                    endpoint: {
                      url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",
                      properties: ZG,
                      headers: ZG
                    },
                    [D4]: w3
                  }]
                }]
              }, {
                error: "DualStack is enabled but this partition does not support DualStack",
                [D4]: Gq
              }]
            }, {
              [D4]: T7,
              rules: [xb0, {
                endpoint: {
                  url: bb0,
                  properties: ZG,
                  headers: ZG
                },
                [D4]: w3
              }]
            }]
          }]
        }, {
          error: "Invalid Configuration: Missing Region",
          [D4]: Gq
        }]
      }]
    };
  Wh0.ruleSet = JF5
})
// @from(Start 3101971, End 3102311)
Xh0 = Y((Ah0) => {
  Object.defineProperty(Ah0, "__esModule", {
    value: !0
  });
  Ah0.defaultEndpointResolver = void 0;
  var KF5 = xp(),
    NF5 = Bh0(),
    zF5 = (I, d = {}) => {
      return KF5.resolveEndpoint(NF5.ruleSet, {
        endpointParams: I,
        logger: d.logger
      })
    };
  Ah0.defaultEndpointResolver = zF5
})
// @from(Start 3102317, End 3103082)
Fh0 = Y((Dh0) => {
  Object.defineProperty(Dh0, "__esModule", {
    value: !0
  });
  Dh0.getRuntimeConfig = void 0;
  var QF5 = v0(),
    fF5 = FV(),
    Yh0 = IJ(),
    _h0 = hC(),
    qF5 = Xh0(),
    RF5 = (I) => ({
      apiVersion: "2011-06-15",
      base64Decoder: I?.base64Decoder ?? Yh0.fromBase64,
      base64Encoder: I?.base64Encoder ?? Yh0.toBase64,
      disableHostPrefix: I?.disableHostPrefix ?? !1,
      endpointProvider: I?.endpointProvider ?? qF5.defaultEndpointResolver,
      logger: I?.logger ?? new QF5.NoOpLogger,
      serviceId: I?.serviceId ?? "STS",
      urlParser: I?.urlParser ?? fF5.parseUrl,
      utf8Decoder: I?.utf8Decoder ?? _h0.fromUtf8,
      utf8Encoder: I?.utf8Encoder ?? _h0.toUtf8
    });
  Dh0.getRuntimeConfig = RF5
})
// @from(Start 3103088, End 3105047)
zh0 = Y((Kh0) => {
  Object.defineProperty(Kh0, "__esModule", {
    value: !0
  });
  Kh0.getRuntimeConfig = void 0;
  var UF5 = x1(),
    vF5 = UF5.__importDefault(v$0()),
    EF5 = sB1(),
    Qi = Cd(),
    MF5 = bA1(),
    SF5 = og(),
    gh0 = dG(),
    xy = QZ(),
    Jh0 = eg(),
    LF5 = tg(),
    yF5 = Wd(),
    PF5 = ZA1(),
    $F5 = Fh0(),
    uF5 = v0(),
    TF5 = dJ(),
    OF5 = v0(),
    mF5 = (I) => {
      OF5.emitWarningIfUnsupportedVersion(process.version);
      let d = TF5.resolveDefaultsModeConfig(I),
        G = () => d().then(uF5.loadConfigsForDefaultMode),
        Z = $F5.getRuntimeConfig(I);
      return {
        ...Z,
        ...I,
        runtime: "node",
        defaultsMode: d,
        bodyLengthChecker: I?.bodyLengthChecker ?? LF5.calculateBodyLength,
        credentialDefaultProvider: I?.credentialDefaultProvider ?? EF5.decorateDefaultCredentialProvider(MF5.defaultProvider),
        defaultUserAgentProvider: I?.defaultUserAgentProvider ?? PF5.defaultUserAgent({
          serviceId: Z.serviceId,
          clientVersion: vF5.default.version
        }),
        maxAttempts: I?.maxAttempts ?? xy.loadConfig(gh0.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: I?.region ?? xy.loadConfig(Qi.NODE_REGION_CONFIG_OPTIONS, Qi.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: I?.requestHandler ?? new Jh0.NodeHttpHandler(G),
        retryMode: I?.retryMode ?? xy.loadConfig({
          ...gh0.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await G()).retryMode || yF5.DEFAULT_RETRY_MODE
        }),
        sha256: I?.sha256 ?? SF5.Hash.bind(null, "sha256"),
        streamCollector: I?.streamCollector ?? Jh0.streamCollector,
        useDualstackEndpoint: I?.useDualstackEndpoint ?? xy.loadConfig(Qi.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: I?.useFipsEndpoint ?? xy.loadConfig(Qi.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
      }
    };
  Kh0.getRuntimeConfig = mF5
})
// @from(Start 3105053, End 3106438)
fi = Y((xA1) => {
  Object.defineProperty(xA1, "__esModule", {
    value: !0
  });
  xA1.STSClient = xA1.__Client = void 0;
  var lF5 = Cd(),
    bF5 = jg(),
    hF5 = u2(),
    Qh0 = xw1(),
    jF5 = pw1(),
    kF5 = iw1(),
    fh0 = dG(),
    xF5 = iS0(),
    qh0 = NB1(),
    Rh0 = v0();
  Object.defineProperty(xA1, "__Client", {
    enumerable: !0,
    get: function() {
      return Rh0.Client
    }
  });
  var cF5 = U$0(),
    pF5 = zh0();
  class kA1 extends Rh0.Client {
    constructor(I) {
      let d = pF5.getRuntimeConfig(I),
        G = cF5.resolveClientEndpointParameters(d),
        Z = lF5.resolveRegionConfig(G),
        C = hF5.resolveEndpointConfig(Z),
        W = fh0.resolveRetryConfig(C),
        w = Qh0.resolveHostHeaderConfig(W),
        B = xF5.resolveStsAuthConfig(w, {
          stsClientCtor: kA1
        }),
        A = qh0.resolveUserAgentConfig(B);
      super(A);
      this.config = A, this.middlewareStack.use(fh0.getRetryPlugin(this.config)), this.middlewareStack.use(bF5.getContentLengthPlugin(this.config)), this.middlewareStack.use(Qh0.getHostHeaderPlugin(this.config)), this.middlewareStack.use(jF5.getLoggerPlugin(this.config)), this.middlewareStack.use(kF5.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(qh0.getUserAgentPlugin(this.config))
    }
    destroy() {
      super.destroy()
    }
  }
  xA1.STSClient = kA1
})
// @from(Start 3106444, End 3108390)
iA1 = Y((pA1) => {
  Object.defineProperty(pA1, "__esModule", {
    value: !0
  });
  pA1.AssumeRoleWithSAMLCommand = pA1.$Command = void 0;
  var iF5 = u2(),
    nF5 = r2(),
    Mh0 = v0();
  Object.defineProperty(pA1, "$Command", {
    enumerable: !0,
    get: function() {
      return Mh0.Command
    }
  });
  var vh0 = wD(),
    Eh0 = PV();
  class cA1 extends Mh0.Command {
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
      this.middlewareStack.use(nF5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(iF5.getEndpointPlugin(d, cA1.getEndpointParameterInstructions()));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "STSClient",
          commandName: "AssumeRoleWithSAMLCommand",
          inputFilterSensitiveLog: vh0.AssumeRoleWithSAMLRequestFilterSensitiveLog,
          outputFilterSensitiveLog: vh0.AssumeRoleWithSAMLResponseFilterSensitiveLog
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return Eh0.se_AssumeRoleWithSAMLCommand(I, d)
    }
    deserialize(I, d) {
      return Eh0.de_AssumeRoleWithSAMLCommand(I, d)
    }
  }
  pA1.AssumeRoleWithSAMLCommand = cA1
})
// @from(Start 3108396, End 3110354)
aA1 = Y((rA1) => {
  Object.defineProperty(rA1, "__esModule", {
    value: !0
  });
  rA1.DecodeAuthorizationMessageCommand = rA1.$Command = void 0;
  var rF5 = u2(),
    aF5 = r2(),
    sF5 = GD(),
    yh0 = v0();
  Object.defineProperty(rA1, "$Command", {
    enumerable: !0,
    get: function() {
      return yh0.Command
    }
  });
  var Lh0 = PV();
  class nA1 extends yh0.Command {
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
      this.middlewareStack.use(aF5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(rF5.getEndpointPlugin(d, nA1.getEndpointParameterInstructions())), this.middlewareStack.use(sF5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "STSClient",
          commandName: "DecodeAuthorizationMessageCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return Lh0.se_DecodeAuthorizationMessageCommand(I, d)
    }
    deserialize(I, d) {
      return Lh0.de_DecodeAuthorizationMessageCommand(I, d)
    }
  }
  rA1.DecodeAuthorizationMessageCommand = nA1
})
// @from(Start 3110360, End 3112268)
eA1 = Y((oA1) => {
  Object.defineProperty(oA1, "__esModule", {
    value: !0
  });
  oA1.GetAccessKeyInfoCommand = oA1.$Command = void 0;
  var oF5 = u2(),
    eF5 = r2(),
    tF5 = GD(),
    uh0 = v0();
  Object.defineProperty(oA1, "$Command", {
    enumerable: !0,
    get: function() {
      return uh0.Command
    }
  });
  var $h0 = PV();
  class sA1 extends uh0.Command {
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
      this.middlewareStack.use(eF5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(oF5.getEndpointPlugin(d, sA1.getEndpointParameterInstructions())), this.middlewareStack.use(tF5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "STSClient",
          commandName: "GetAccessKeyInfoCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return $h0.se_GetAccessKeyInfoCommand(I, d)
    }
    deserialize(I, d) {
      return $h0.de_GetAccessKeyInfoCommand(I, d)
    }
  }
  oA1.GetAccessKeyInfoCommand = sA1
})
// @from(Start 3112274, End 3114187)
dV1 = Y((IV1) => {
  Object.defineProperty(IV1, "__esModule", {
    value: !0
  });
  IV1.GetCallerIdentityCommand = IV1.$Command = void 0;
  var Ig5 = u2(),
    dg5 = r2(),
    Gg5 = GD(),
    mh0 = v0();
  Object.defineProperty(IV1, "$Command", {
    enumerable: !0,
    get: function() {
      return mh0.Command
    }
  });
  var Oh0 = PV();
  class tA1 extends mh0.Command {
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
      this.middlewareStack.use(dg5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(Ig5.getEndpointPlugin(d, tA1.getEndpointParameterInstructions())), this.middlewareStack.use(Gg5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "STSClient",
          commandName: "GetCallerIdentityCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return Oh0.se_GetCallerIdentityCommand(I, d)
    }
    deserialize(I, d) {
      return Oh0.de_GetCallerIdentityCommand(I, d)
    }
  }
  IV1.GetCallerIdentityCommand = tA1
})
// @from(Start 3114193, End 3116167)
CV1 = Y((ZV1) => {
  Object.defineProperty(ZV1, "__esModule", {
    value: !0
  });
  ZV1.GetFederationTokenCommand = ZV1.$Command = void 0;
  var Zg5 = u2(),
    Cg5 = r2(),
    Wg5 = GD(),
    hh0 = v0();
  Object.defineProperty(ZV1, "$Command", {
    enumerable: !0,
    get: function() {
      return hh0.Command
    }
  });
  var wg5 = wD(),
    bh0 = PV();
  class GV1 extends hh0.Command {
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
      this.middlewareStack.use(Cg5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(Zg5.getEndpointPlugin(d, GV1.getEndpointParameterInstructions())), this.middlewareStack.use(Wg5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "STSClient",
          commandName: "GetFederationTokenCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: wg5.GetFederationTokenResponseFilterSensitiveLog
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return bh0.se_GetFederationTokenCommand(I, d)
    }
    deserialize(I, d) {
      return bh0.de_GetFederationTokenCommand(I, d)
    }
  }
  ZV1.GetFederationTokenCommand = GV1
})
// @from(Start 3116173, End 3118129)
BV1 = Y((wV1) => {
  Object.defineProperty(wV1, "__esModule", {
    value: !0
  });
  wV1.GetSessionTokenCommand = wV1.$Command = void 0;
  var Bg5 = u2(),
    Ag5 = r2(),
    Vg5 = GD(),
    xh0 = v0();
  Object.defineProperty(wV1, "$Command", {
    enumerable: !0,
    get: function() {
      return xh0.Command
    }
  });
  var Xg5 = wD(),
    kh0 = PV();
  class WV1 extends xh0.Command {
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
      this.middlewareStack.use(Ag5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(Bg5.getEndpointPlugin(d, WV1.getEndpointParameterInstructions())), this.middlewareStack.use(Vg5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "STSClient",
          commandName: "GetSessionTokenCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: Xg5.GetSessionTokenResponseFilterSensitiveLog
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return kh0.se_GetSessionTokenCommand(I, d)
    }
    deserialize(I, d) {
      return kh0.de_GetSessionTokenCommand(I, d)
    }
  }
  wV1.GetSessionTokenCommand = WV1
})
// @from(Start 3118135, End 3119034)
nh0 = Y((ph0) => {
  Object.defineProperty(ph0, "__esModule", {
    value: !0
  });
  ph0.STS = void 0;
  var Yg5 = v0(),
    _g5 = sp(),
    Dg5 = iA1(),
    Hg5 = op(),
    Fg5 = aA1(),
    gg5 = eA1(),
    Jg5 = dV1(),
    Kg5 = CV1(),
    Ng5 = BV1(),
    zg5 = fi(),
    Qg5 = {
      AssumeRoleCommand: _g5.AssumeRoleCommand,
      AssumeRoleWithSAMLCommand: Dg5.AssumeRoleWithSAMLCommand,
      AssumeRoleWithWebIdentityCommand: Hg5.AssumeRoleWithWebIdentityCommand,
      DecodeAuthorizationMessageCommand: Fg5.DecodeAuthorizationMessageCommand,
      GetAccessKeyInfoCommand: gg5.GetAccessKeyInfoCommand,
      GetCallerIdentityCommand: Jg5.GetCallerIdentityCommand,
      GetFederationTokenCommand: Kg5.GetFederationTokenCommand,
      GetSessionTokenCommand: Ng5.GetSessionTokenCommand
    };
  class AV1 extends zg5.STSClient {}
  ph0.STS = AV1;
  Yg5.createAggregatedClient(Qg5, AV1)
})
// @from(Start 3119040, End 3119378)
rh0 = Y((VB) => {
  Object.defineProperty(VB, "__esModule", {
    value: !0
  });
  var KD = x1();
  KD.__exportStar(sp(), VB);
  KD.__exportStar(iA1(), VB);
  KD.__exportStar(op(), VB);
  KD.__exportStar(aA1(), VB);
  KD.__exportStar(eA1(), VB);
  KD.__exportStar(dV1(), VB);
  KD.__exportStar(CV1(), VB);
  KD.__exportStar(BV1(), VB)
})
// @from(Start 3119384, End 3119518)
ah0 = Y((VV1) => {
  Object.defineProperty(VV1, "__esModule", {
    value: !0
  });
  var fg5 = x1();
  fg5.__exportStar(wD(), VV1)
})
// @from(Start 3119524, End 3120448)
Zj0 = Y((th0) => {
  Object.defineProperty(th0, "__esModule", {
    value: !0
  });
  th0.decorateDefaultCredentialProvider = th0.getDefaultRoleAssumerWithWebIdentity = th0.getDefaultRoleAssumer = void 0;
  var sh0 = sB1(),
    oh0 = fi(),
    eh0 = (I, d) => {
      if (!d) return I;
      else return class G extends I {
        constructor(Z) {
          super(Z);
          for (let C of d) this.middlewareStack.use(C)
        }
      }
    },
    qg5 = (I = {}, d) => sh0.getDefaultRoleAssumer(I, eh0(oh0.STSClient, d));
  th0.getDefaultRoleAssumer = qg5;
  var Rg5 = (I = {}, d) => sh0.getDefaultRoleAssumerWithWebIdentity(I, eh0(oh0.STSClient, d));
  th0.getDefaultRoleAssumerWithWebIdentity = Rg5;
  var Ug5 = (I) => (d) => I({
    roleAssumer: th0.getDefaultRoleAssumer(d),
    roleAssumerWithWebIdentity: th0.getDefaultRoleAssumerWithWebIdentity(d),
    ...d
  });
  th0.decorateDefaultCredentialProvider = Ug5
})
// @from(Start 3120454, End 3120899)
Zq = Y((ND) => {
  Object.defineProperty(ND, "__esModule", {
    value: !0
  });
  ND.STSServiceException = void 0;
  var cy = x1();
  cy.__exportStar(fi(), ND);
  cy.__exportStar(nh0(), ND);
  cy.__exportStar(rh0(), ND);
  cy.__exportStar(ah0(), ND);
  cy.__exportStar(Zj0(), ND);
  var vg5 = pp();
  Object.defineProperty(ND, "STSServiceException", {
    enumerable: !0,
    get: function() {
      return vg5.STSServiceException
    }
  })
})
// @from(Start 3120905, End 3121475)
Bj0 = Y((Wj0) => {
  Object.defineProperty(Wj0, "__esModule", {
    value: !0
  });
  Wj0.fromIni = void 0;
  var Cj0 = Zq(),
    Mg5 = OA1(),
    Sg5 = (I = {}) => {
      var d, G;
      return Mg5.fromIni({
        ...I,
        roleAssumer: (d = I.roleAssumer) !== null && d !== void 0 ? d : Cj0.getDefaultRoleAssumer(I.clientConfig, I.clientPlugins),
        roleAssumerWithWebIdentity: (G = I.roleAssumerWithWebIdentity) !== null && G !== void 0 ? G : Cj0.getDefaultRoleAssumerWithWebIdentity(I.clientConfig, I.clientPlugins)
      })
    };
  Wj0.fromIni = Sg5
})
// @from(Start 3121481, End 3121701)
Xj0 = Y((Aj0) => {
  Object.defineProperty(Aj0, "__esModule", {
    value: !0
  });
  Aj0.fromInstanceMetadata = void 0;
  var Lg5 = i_(),
    yg5 = (I) => Lg5.fromInstanceMetadata(I);
  Aj0.fromInstanceMetadata = yg5
})
// @from(Start 3121707, End 3122313)
Hj0 = Y((_j0) => {
  Object.defineProperty(_j0, "__esModule", {
    value: !0
  });
  _j0.fromNodeProviderChain = void 0;
  var Yj0 = Zq(),
    Pg5 = bA1(),
    $g5 = (I = {}) => {
      var d, G;
      return Pg5.defaultProvider({
        ...I,
        roleAssumer: (d = I.roleAssumer) !== null && d !== void 0 ? d : Yj0.getDefaultRoleAssumer(I.clientConfig, I.clientPlugins),
        roleAssumerWithWebIdentity: (G = I.roleAssumerWithWebIdentity) !== null && G !== void 0 ? G : Yj0.getDefaultRoleAssumerWithWebIdentity(I.clientConfig, I.clientPlugins)
      })
    };
  _j0.fromNodeProviderChain = $g5
})
// @from(Start 3122319, End 3122512)
Jj0 = Y((Fj0) => {
  Object.defineProperty(Fj0, "__esModule", {
    value: !0
  });
  Fj0.fromProcess = void 0;
  var ug5 = ep(),
    Tg5 = (I) => ug5.fromProcess(I);
  Fj0.fromProcess = Tg5
})
// @from(Start 3122518, End 3122837)
zj0 = Y((Kj0) => {
  Object.defineProperty(Kj0, "__esModule", {
    value: !0
  });
  Kj0.fromSSO = void 0;
  var Og5 = vA1(),
    mg5 = jy(),
    lg5 = (I = {}) => mg5.fromSSO({
      ...{
        ssoClient: I.clientConfig ? new Og5.SSOClient(I.clientConfig) : void 0
      },
      ...I
    });
  Kj0.fromSSO = lg5
})
// @from(Start 3122843, End 3124322)
Uj0 = Y((qj0) => {
  Object.defineProperty(qj0, "__esModule", {
    value: !0
  });
  qj0.fromTemporaryCredentials = void 0;
  var Qj0 = Zq(),
    fj0 = W4(),
    bg5 = (I) => {
      let d;
      return async () => {
        var G;
        let Z = {
          ...I.params,
          RoleSessionName: (G = I.params.RoleSessionName) !== null && G !== void 0 ? G : "aws-sdk-js-" + Date.now()
        };
        if (Z === null || Z === void 0 ? void 0 : Z.SerialNumber) {
          if (!I.mfaCodeProvider) throw new fj0.CredentialsProviderError("Temporary credential requires multi-factor authentication, but no MFA code callback was provided.", !1);
          Z.TokenCode = await I.mfaCodeProvider(Z === null || Z === void 0 ? void 0 : Z.SerialNumber)
        }
        if (!d) d = new Qj0.STSClient({
          ...I.clientConfig,
          credentials: I.masterCredentials
        });
        if (I.clientPlugins)
          for (let W of I.clientPlugins) d.middlewareStack.use(W);
        let {
          Credentials: C
        } = await d.send(new Qj0.AssumeRoleCommand(Z));
        if (!C || !C.AccessKeyId || !C.SecretAccessKey) throw new fj0.CredentialsProviderError(`Invalid response from STS.assumeRole call with role ${Z.RoleArn}`);
        return {
          accessKeyId: C.AccessKeyId,
          secretAccessKey: C.SecretAccessKey,
          sessionToken: C.SessionToken,
          expiration: C.Expiration
        }
      }
    };
  qj0.fromTemporaryCredentials = bg5
})
// @from(Start 3124328, End 3124780)
Mj0 = Y((vj0) => {
  Object.defineProperty(vj0, "__esModule", {
    value: !0
  });
  vj0.fromTokenFile = void 0;
  var hg5 = Zq(),
    jg5 = ky(),
    kg5 = (I = {}) => {
      var d;
      return jg5.fromTokenFile({
        ...I,
        roleAssumerWithWebIdentity: (d = I.roleAssumerWithWebIdentity) !== null && d !== void 0 ? d : hg5.getDefaultRoleAssumerWithWebIdentity(I.clientConfig, I.clientPlugins)
      })
    };
  vj0.fromTokenFile = kg5
})
// @from(Start 3124786, End 3125230)
yj0 = Y((Sj0) => {
  Object.defineProperty(Sj0, "__esModule", {
    value: !0
  });
  Sj0.fromWebToken = void 0;
  var xg5 = Zq(),
    cg5 = ky(),
    pg5 = (I) => {
      var d;
      return cg5.fromWebToken({
        ...I,
        roleAssumerWithWebIdentity: (d = I.roleAssumerWithWebIdentity) !== null && d !== void 0 ? d : xg5.getDefaultRoleAssumerWithWebIdentity(I.clientConfig, I.clientPlugins)
      })
    };
  Sj0.fromWebToken = pg5
})
// @from(Start 3125236, End 3125696)
Pj0 = Y((Ad) => {
  Object.defineProperty(Ad, "__esModule", {
    value: !0
  });
  var EZ = x1();
  EZ.__exportStar(pM0(), Ad);
  EZ.__exportStar(rM0(), Ad);
  EZ.__exportStar(oM0(), Ad);
  EZ.__exportStar(BS0(), Ad);
  EZ.__exportStar(Bj0(), Ad);
  EZ.__exportStar(Xj0(), Ad);
  EZ.__exportStar(Hj0(), Ad);
  EZ.__exportStar(Jj0(), Ad);
  EZ.__exportStar(zj0(), Ad);
  EZ.__exportStar(Uj0(), Ad);
  EZ.__exportStar(Mj0(), Ad);
  EZ.__exportStar(yj0(), Ad)
})
// @from(Start 3125702, End 3128594)
k3 = Y((md3, jj0) => {
  var {
    defineProperty: qi,
    getOwnPropertyDescriptor: ig5,
    getOwnPropertyNames: ng5
  } = Object, rg5 = Object.prototype.hasOwnProperty, Ri = (I, d) => qi(I, "name", {
    value: d,
    configurable: !0
  }), ag5 = (I, d) => {
    for (var G in d) qi(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, sg5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of ng5(d))
        if (!rg5.call(I, C) && C !== G) qi(I, C, {
          get: () => d[C],
          enumerable: !(Z = ig5(d, C)) || Z.enumerable
        })
    }
    return I
  }, og5 = (I) => sg5(qi({}, "__esModule", {
    value: !0
  }), I), $j0 = {};
  ag5($j0, {
    AlgorithmId: () => mj0,
    EndpointURLScheme: () => Oj0,
    FieldPosition: () => lj0,
    HttpApiKeyAuthLocation: () => Tj0,
    HttpAuthLocation: () => uj0,
    IniSectionType: () => bj0,
    RequestHandlerProtocol: () => hj0,
    SMITHY_CONTEXT_KEY: () => GJ5,
    getDefaultClientConfiguration: () => IJ5,
    resolveDefaultRuntimeConfig: () => dJ5
  });
  jj0.exports = og5($j0);
  var uj0 = ((I) => {
      return I.HEADER = "header", I.QUERY = "query", I
    })(uj0 || {}),
    Tj0 = ((I) => {
      return I.HEADER = "header", I.QUERY = "query", I
    })(Tj0 || {}),
    Oj0 = ((I) => {
      return I.HTTP = "http", I.HTTPS = "https", I
    })(Oj0 || {}),
    mj0 = ((I) => {
      return I.MD5 = "md5", I.CRC32 = "crc32", I.CRC32C = "crc32c", I.SHA1 = "sha1", I.SHA256 = "sha256", I
    })(mj0 || {}),
    eg5 = Ri((I) => {
      let d = [];
      if (I.sha256 !== void 0) d.push({
        algorithmId: () => "sha256",
        checksumConstructor: () => I.sha256
      });
      if (I.md5 != null) d.push({
        algorithmId: () => "md5",
        checksumConstructor: () => I.md5
      });
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
    tg5 = Ri((I) => {
      let d = {};
      return I.checksumAlgorithms().forEach((G) => {
        d[G.algorithmId()] = G.checksumConstructor()
      }), d
    }, "resolveChecksumRuntimeConfig"),
    IJ5 = Ri((I) => {
      return {
        ...eg5(I)
      }
    }, "getDefaultClientConfiguration"),
    dJ5 = Ri((I) => {
      return {
        ...tg5(I)
      }
    }, "resolveDefaultRuntimeConfig"),
    lj0 = ((I) => {
      return I[I.HEADER = 0] = "HEADER", I[I.TRAILER = 1] = "TRAILER", I
    })(lj0 || {}),
    GJ5 = "__smithy_context",
    bj0 = ((I) => {
      return I.PROFILE = "profile", I.SSO_SESSION = "sso-session", I.SERVICES = "services", I
    })(bj0 || {}),
    hj0 = ((I) => {
      return I.HTTP_0_9 = "http/0.9", I.HTTP_1_0 = "http/1.0", I.TDS_8_0 = "tds/8.0", I
    })(hj0 || {})
})
// @from(Start 3128600, End 3132948)
t8 = Y((ld3, aj0) => {
  var {
    defineProperty: Ui,
    getOwnPropertyDescriptor: ZJ5,
    getOwnPropertyNames: CJ5
  } = Object, WJ5 = Object.prototype.hasOwnProperty, zD = (I, d) => Ui(I, "name", {
    value: d,
    configurable: !0
  }), wJ5 = (I, d) => {
    for (var G in d) Ui(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, BJ5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of CJ5(d))
        if (!WJ5.call(I, C) && C !== G) Ui(I, C, {
          get: () => d[C],
          enumerable: !(Z = ZJ5(d, C)) || Z.enumerable
        })
    }
    return I
  }, AJ5 = (I) => BJ5(Ui({}, "__esModule", {
    value: !0
  }), I), kj0 = {};
  wJ5(kj0, {
    Field: () => _J5,
    Fields: () => DJ5,
    HttpRequest: () => HJ5,
    HttpResponse: () => FJ5,
    getHttpHandlerExtensionConfiguration: () => VJ5,
    isValidHostname: () => rj0,
    resolveHttpHandlerRuntimeConfig: () => XJ5
  });
  aj0.exports = AJ5(kj0);
  var VJ5 = zD((I) => {
      let d = I.httpHandler;
      return {
        setHttpHandler(G) {
          d = G
        },
        httpHandler() {
          return d
        },
        updateHttpClientConfig(G, Z) {
          d.updateHttpClientConfig(G, Z)
        },
        httpHandlerConfigs() {
          return d.httpHandlerConfigs()
        }
      }
    }, "getHttpHandlerExtensionConfiguration"),
    XJ5 = zD((I) => {
      return {
        httpHandler: I.httpHandler()
      }
    }, "resolveHttpHandlerRuntimeConfig"),
    YJ5 = k3(),
    xj0 = class I {
      constructor({
        name: d,
        kind: G = YJ5.FieldPosition.HEADER,
        values: Z = []
      }) {
        this.name = d, this.kind = G, this.values = Z
      }
      add(d) {
        this.values.push(d)
      }
      set(d) {
        this.values = d
      }
      remove(d) {
        this.values = this.values.filter((G) => G !== d)
      }
      toString() {
        return this.values.map((d) => d.includes(",") || d.includes(" ") ? `"${d}"` : d).join(", ")
      }
      get() {
        return this.values
      }
    };
  zD(xj0, "Field");
  var _J5 = xj0,
    cj0 = class I {
      constructor({
        fields: d = [],
        encoding: G = "utf-8"
      }) {
        this.entries = {}, d.forEach(this.setField.bind(this)), this.encoding = G
      }
      setField(d) {
        this.entries[d.name.toLowerCase()] = d
      }
      getField(d) {
        return this.entries[d.toLowerCase()]
      }
      removeField(d) {
        delete this.entries[d.toLowerCase()]
      }
      getByType(d) {
        return Object.values(this.entries).filter((G) => G.kind === d)
      }
    };
  zD(cj0, "Fields");
  var DJ5 = cj0,
    pj0 = class I {
      constructor(d) {
        this.method = d.method || "GET", this.hostname = d.hostname || "localhost", this.port = d.port, this.query = d.query || {}, this.headers = d.headers || {}, this.body = d.body, this.protocol = d.protocol ? d.protocol.slice(-1) !== ":" ? `${d.protocol}:` : d.protocol : "https:", this.path = d.path ? d.path.charAt(0) !== "/" ? `/${d.path}` : d.path : "/", this.username = d.username, this.password = d.password, this.fragment = d.fragment
      }
      static isInstance(d) {
        if (!d) return !1;
        let G = d;
        return "method" in G && "protocol" in G && "hostname" in G && "path" in G && typeof G.query === "object" && typeof G.headers === "object"
      }
      clone() {
        let d = new I({
          ...this,
          headers: {
            ...this.headers
          }
        });
        if (d.query) d.query = ij0(d.query);
        return d
      }
    };
  zD(pj0, "HttpRequest");
  var HJ5 = pj0;

  function ij0(I) {
    return Object.keys(I).reduce((d, G) => {
      let Z = I[G];
      return {
        ...d,
        [G]: Array.isArray(Z) ? [...Z] : Z
      }
    }, {})
  }
  zD(ij0, "cloneQuery");
  var nj0 = class I {
    constructor(d) {
      this.statusCode = d.statusCode, this.reason = d.reason, this.headers = d.headers || {}, this.body = d.body
    }
    static isInstance(d) {
      if (!d) return !1;
      let G = d;
      return typeof G.statusCode === "number" && typeof G.headers === "object"
    }
  };
  zD(nj0, "HttpResponse");
  var FJ5 = nj0;

  function rj0(I) {
    return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(I)
  }
  zD(rj0, "isValidHostname")
})
// @from(Start 3132954, End 3144310)
YV1 = Y((bd3, Ei) => {
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  var sj0, oj0, ej0, tj0, Ik0, dk0, Gk0, Zk0, Ck0, vi, XV1, Wk0, wk0, Cq, Bk0, Ak0, Vk0, Xk0, Yk0, _k0, Dk0, Hk0, Fk0;
  (function(I) {
    var d = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) define("tslib", ["exports"], function(Z) {
      I(G(d, G(Z)))
    });
    else if (typeof Ei === "object" && typeof bd3 === "object") I(G(d, G(bd3)));
    else I(G(d));

    function G(Z, C) {
      if (Z !== d)
        if (typeof Object.create === "function") Object.defineProperty(Z, "__esModule", {
          value: !0
        });
        else Z.__esModule = !0;
      return function(W, w) {
        return Z[W] = C ? C(W, w) : w
      }
    }
  })(function(I) {
    var d = Object.setPrototypeOf || {
      __proto__: []
    }
    instanceof Array && function(G, Z) {
      G.__proto__ = Z
    } || function(G, Z) {
      for (var C in Z)
        if (Z.hasOwnProperty(C)) G[C] = Z[C]
    };
    sj0 = function(G, Z) {
      d(G, Z);

      function C() {
        this.constructor = G
      }
      G.prototype = Z === null ? Object.create(Z) : (C.prototype = Z.prototype, new C)
    }, oj0 = Object.assign || function(G) {
      for (var Z, C = 1, W = arguments.length; C < W; C++) {
        Z = arguments[C];
        for (var w in Z)
          if (Object.prototype.hasOwnProperty.call(Z, w)) G[w] = Z[w]
      }
      return G
    }, ej0 = function(G, Z) {
      var C = {};
      for (var W in G)
        if (Object.prototype.hasOwnProperty.call(G, W) && Z.indexOf(W) < 0) C[W] = G[W];
      if (G != null && typeof Object.getOwnPropertySymbols === "function") {
        for (var w = 0, W = Object.getOwnPropertySymbols(G); w < W.length; w++)
          if (Z.indexOf(W[w]) < 0 && Object.prototype.propertyIsEnumerable.call(G, W[w])) C[W[w]] = G[W[w]]
      }
      return C
    }, tj0 = function(G, Z, C, W) {
      var w = arguments.length,
        B = w < 3 ? Z : W === null ? W = Object.getOwnPropertyDescriptor(Z, C) : W,
        A;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") B = Reflect.decorate(G, Z, C, W);
      else
        for (var V = G.length - 1; V >= 0; V--)
          if (A = G[V]) B = (w < 3 ? A(B) : w > 3 ? A(Z, C, B) : A(Z, C)) || B;
      return w > 3 && B && Object.defineProperty(Z, C, B), B
    }, Ik0 = function(G, Z) {
      return function(C, W) {
        Z(C, W, G)
      }
    }, dk0 = function(G, Z) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(G, Z)
    }, Gk0 = function(G, Z, C, W) {
      function w(B) {
        return B instanceof C ? B : new C(function(A) {
          A(B)
        })
      }
      return new(C || (C = Promise))(function(B, A) {
        function V(F) {
          try {
            _(W.next(F))
          } catch (g) {
            A(g)
          }
        }

        function X(F) {
          try {
            _(W.throw(F))
          } catch (g) {
            A(g)
          }
        }

        function _(F) {
          F.done ? B(F.value) : w(F.value).then(V, X)
        }
        _((W = W.apply(G, Z || [])).next())
      })
    }, Zk0 = function(G, Z) {
      var C = {
          label: 0,
          sent: function() {
            if (B[0] & 1) throw B[1];
            return B[1]
          },
          trys: [],
          ops: []
        },
        W, w, B, A;
      return A = {
        next: V(0),
        throw: V(1),
        return: V(2)
      }, typeof Symbol === "function" && (A[Symbol.iterator] = function() {
        return this
      }), A;

      function V(_) {
        return function(F) {
          return X([_, F])
        }
      }

      function X(_) {
        if (W) throw new TypeError("Generator is already executing.");
        while (C) try {
          if (W = 1, w && (B = _[0] & 2 ? w.return : _[0] ? w.throw || ((B = w.return) && B.call(w), 0) : w.next) && !(B = B.call(w, _[1])).done) return B;
          if (w = 0, B) _ = [_[0] & 2, B.value];
          switch (_[0]) {
            case 0:
            case 1:
              B = _;
              break;
            case 4:
              return C.label++, {
                value: _[1],
                done: !1
              };
            case 5:
              C.label++, w = _[1], _ = [0];
              continue;
            case 7:
              _ = C.ops.pop(), C.trys.pop();
              continue;
            default:
              if ((B = C.trys, !(B = B.length > 0 && B[B.length - 1])) && (_[0] === 6 || _[0] === 2)) {
                C = 0;
                continue
              }
              if (_[0] === 3 && (!B || _[1] > B[0] && _[1] < B[3])) {
                C.label = _[1];
                break
              }
              if (_[0] === 6 && C.label < B[1]) {
                C.label = B[1], B = _;
                break
              }
              if (B && C.label < B[2]) {
                C.label = B[2], C.ops.push(_);
                break
              }
              if (B[2]) C.ops.pop();
              C.trys.pop();
              continue
          }
          _ = Z.call(G, C)
        } catch (F) {
          _ = [6, F], w = 0
        } finally {
          W = B = 0
        }
        if (_[0] & 5) throw _[1];
        return {
          value: _[0] ? _[1] : void 0,
          done: !0
        }
      }
    }, Fk0 = function(G, Z, C, W) {
      if (W === void 0) W = C;
      G[W] = Z[C]
    }, Ck0 = function(G, Z) {
      for (var C in G)
        if (C !== "default" && !Z.hasOwnProperty(C)) Z[C] = G[C]
    }, vi = function(G) {
      var Z = typeof Symbol === "function" && Symbol.iterator,
        C = Z && G[Z],
        W = 0;
      if (C) return C.call(G);
      if (G && typeof G.length === "number") return {
        next: function() {
          if (G && W >= G.length) G = void 0;
          return {
            value: G && G[W++],
            done: !G
          }
        }
      };
      throw new TypeError(Z ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }, XV1 = function(G, Z) {
      var C = typeof Symbol === "function" && G[Symbol.iterator];
      if (!C) return G;
      var W = C.call(G),
        w, B = [],
        A;
      try {
        while ((Z === void 0 || Z-- > 0) && !(w = W.next()).done) B.push(w.value)
      } catch (V) {
        A = {
          error: V
        }
      } finally {
        try {
          if (w && !w.done && (C = W.return)) C.call(W)
        } finally {
          if (A) throw A.error
        }
      }
      return B
    }, Wk0 = function() {
      for (var G = [], Z = 0; Z < arguments.length; Z++) G = G.concat(XV1(arguments[Z]));
      return G
    }, wk0 = function() {
      for (var G = 0, Z = 0, C = arguments.length; Z < C; Z++) G += arguments[Z].length;
      for (var W = Array(G), w = 0, Z = 0; Z < C; Z++)
        for (var B = arguments[Z], A = 0, V = B.length; A < V; A++, w++) W[w] = B[A];
      return W
    }, Cq = function(G) {
      return this instanceof Cq ? (this.v = G, this) : new Cq(G)
    }, Bk0 = function(G, Z, C) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var W = C.apply(G, Z || []),
        w, B = [];
      return w = {}, A("next"), A("throw"), A("return"), w[Symbol.asyncIterator] = function() {
        return this
      }, w;

      function A(J) {
        if (W[J]) w[J] = function(K) {
          return new Promise(function(Q, E) {
            B.push([J, K, Q, E]) > 1 || V(J, K)
          })
        }
      }

      function V(J, K) {
        try {
          X(W[J](K))
        } catch (Q) {
          g(B[0][3], Q)
        }
      }

      function X(J) {
        J.value instanceof Cq ? Promise.resolve(J.value.v).then(_, F) : g(B[0][2], J)
      }

      function _(J) {
        V("next", J)
      }

      function F(J) {
        V("throw", J)
      }

      function g(J, K) {
        if (J(K), B.shift(), B.length) V(B[0][0], B[0][1])
      }
    }, Ak0 = function(G) {
      var Z, C;
      return Z = {}, W("next"), W("throw", function(w) {
        throw w
      }), W("return"), Z[Symbol.iterator] = function() {
        return this
      }, Z;

      function W(w, B) {
        Z[w] = G[w] ? function(A) {
          return (C = !C) ? {
            value: Cq(G[w](A)),
            done: w === "return"
          } : B ? B(A) : A
        } : B
      }
    }, Vk0 = function(G) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var Z = G[Symbol.asyncIterator],
        C;
      return Z ? Z.call(G) : (G = typeof vi === "function" ? vi(G) : G[Symbol.iterator](), C = {}, W("next"), W("throw"), W("return"), C[Symbol.asyncIterator] = function() {
        return this
      }, C);

      function W(B) {
        C[B] = G[B] && function(A) {
          return new Promise(function(V, X) {
            A = G[B](A), w(V, X, A.done, A.value)
          })
        }
      }

      function w(B, A, V, X) {
        Promise.resolve(X).then(function(_) {
          B({
            value: _,
            done: V
          })
        }, A)
      }
    }, Xk0 = function(G, Z) {
      if (Object.defineProperty) Object.defineProperty(G, "raw", {
        value: Z
      });
      else G.raw = Z;
      return G
    }, Yk0 = function(G) {
      if (G && G.__esModule) return G;
      var Z = {};
      if (G != null) {
        for (var C in G)
          if (Object.hasOwnProperty.call(G, C)) Z[C] = G[C]
      }
      return Z.default = G, Z
    }, _k0 = function(G) {
      return G && G.__esModule ? G : {
        default: G
      }
    }, Dk0 = function(G, Z) {
      if (!Z.has(G)) throw new TypeError("attempted to get private field on non-instance");
      return Z.get(G)
    }, Hk0 = function(G, Z, C) {
      if (!Z.has(G)) throw new TypeError("attempted to set private field on non-instance");
      return Z.set(G, C), C
    }, I("__extends", sj0), I("__assign", oj0), I("__rest", ej0), I("__decorate", tj0), I("__param", Ik0), I("__metadata", dk0), I("__awaiter", Gk0), I("__generator", Zk0), I("__exportStar", Ck0), I("__createBinding", Fk0), I("__values", vi), I("__read", XV1), I("__spread", Wk0), I("__spreadArrays", wk0), I("__await", Cq), I("__asyncGenerator", Bk0), I("__asyncDelegator", Ak0), I("__asyncValues", Vk0), I("__makeTemplateObject", Xk0), I("__importStar", Yk0), I("__importDefault", _k0), I("__classPrivateFieldGet", Dk0), I("__classPrivateFieldSet", Hk0)
  })
})
// @from(Start 3144316, End 3145486)
_V1 = Y((gk0) => {
  Object.defineProperty(gk0, "__esModule", {
    value: !0
  });
  gk0.MAX_HASHABLE_LENGTH = gk0.INIT = gk0.KEY = gk0.DIGEST_LENGTH = gk0.BLOCK_SIZE = void 0;
  gk0.BLOCK_SIZE = 64;
  gk0.DIGEST_LENGTH = 32;
  gk0.KEY = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
  gk0.INIT = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
  gk0.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1
})
// @from(Start 3145492, End 3148644)
zk0 = Y((Kk0) => {
  Object.defineProperty(Kk0, "__esModule", {
    value: !0
  });
  Kk0.RawSha256 = void 0;
  var MZ = _V1(),
    zJ5 = function() {
      function I() {
        this.state = Int32Array.from(MZ.INIT), this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1
      }
      return I.prototype.update = function(d) {
        if (this.finished) throw new Error("Attempted to update an already finished hash.");
        var G = 0,
          Z = d.byteLength;
        if (this.bytesHashed += Z, this.bytesHashed * 8 > MZ.MAX_HASHABLE_LENGTH) throw new Error("Cannot hash more than 2^53 - 1 bits");
        while (Z > 0)
          if (this.buffer[this.bufferLength++] = d[G++], Z--, this.bufferLength === MZ.BLOCK_SIZE) this.hashBuffer(), this.bufferLength = 0
      }, I.prototype.digest = function() {
        if (!this.finished) {
          var d = this.bytesHashed * 8,
            G = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength),
            Z = this.bufferLength;
          if (G.setUint8(this.bufferLength++, 128), Z % MZ.BLOCK_SIZE >= MZ.BLOCK_SIZE - 8) {
            for (var C = this.bufferLength; C < MZ.BLOCK_SIZE; C++) G.setUint8(C, 0);
            this.hashBuffer(), this.bufferLength = 0
          }
          for (var C = this.bufferLength; C < MZ.BLOCK_SIZE - 8; C++) G.setUint8(C, 0);
          G.setUint32(MZ.BLOCK_SIZE - 8, Math.floor(d / 4294967296), !0), G.setUint32(MZ.BLOCK_SIZE - 4, d), this.hashBuffer(), this.finished = !0
        }
        var W = new Uint8Array(MZ.DIGEST_LENGTH);
        for (var C = 0; C < 8; C++) W[C * 4] = this.state[C] >>> 24 & 255, W[C * 4 + 1] = this.state[C] >>> 16 & 255, W[C * 4 + 2] = this.state[C] >>> 8 & 255, W[C * 4 + 3] = this.state[C] >>> 0 & 255;
        return W
      }, I.prototype.hashBuffer = function() {
        var d = this,
          G = d.buffer,
          Z = d.state,
          C = Z[0],
          W = Z[1],
          w = Z[2],
          B = Z[3],
          A = Z[4],
          V = Z[5],
          X = Z[6],
          _ = Z[7];
        for (var F = 0; F < MZ.BLOCK_SIZE; F++) {
          if (F < 16) this.temp[F] = (G[F * 4] & 255) << 24 | (G[F * 4 + 1] & 255) << 16 | (G[F * 4 + 2] & 255) << 8 | G[F * 4 + 3] & 255;
          else {
            var g = this.temp[F - 2],
              J = (g >>> 17 | g << 15) ^ (g >>> 19 | g << 13) ^ g >>> 10;
            g = this.temp[F - 15];
            var K = (g >>> 7 | g << 25) ^ (g >>> 18 | g << 14) ^ g >>> 3;
            this.temp[F] = (J + this.temp[F - 7] | 0) + (K + this.temp[F - 16] | 0)
          }
          var Q = (((A >>> 6 | A << 26) ^ (A >>> 11 | A << 21) ^ (A >>> 25 | A << 7)) + (A & V ^ ~A & X) | 0) + (_ + (MZ.KEY[F] + this.temp[F] | 0) | 0) | 0,
            E = ((C >>> 2 | C << 30) ^ (C >>> 13 | C << 19) ^ (C >>> 22 | C << 10)) + (C & W ^ C & w ^ W & w) | 0;
          _ = X, X = V, V = A, A = B + Q | 0, B = w, w = W, W = C, C = Q + E | 0
        }
        Z[0] += C, Z[1] += W, Z[2] += w, Z[3] += B, Z[4] += A, Z[5] += V, Z[6] += X, Z[7] += _
      }, I
    }();
  Kk0.RawSha256 = zJ5
})
// @from(Start 3148650, End 3149938)
qk0 = Y((Qk0) => {
  Object.defineProperty(Qk0, "__esModule", {
    value: !0
  });
  Qk0.toUtf8 = Qk0.fromUtf8 = void 0;
  var QJ5 = (I) => {
    let d = [];
    for (let G = 0, Z = I.length; G < Z; G++) {
      let C = I.charCodeAt(G);
      if (C < 128) d.push(C);
      else if (C < 2048) d.push(C >> 6 | 192, C & 63 | 128);
      else if (G + 1 < I.length && (C & 64512) === 55296 && (I.charCodeAt(G + 1) & 64512) === 56320) {
        let W = 65536 + ((C & 1023) << 10) + (I.charCodeAt(++G) & 1023);
        d.push(W >> 18 | 240, W >> 12 & 63 | 128, W >> 6 & 63 | 128, W & 63 | 128)
      } else d.push(C >> 12 | 224, C >> 6 & 63 | 128, C & 63 | 128)
    }
    return Uint8Array.from(d)
  };
  Qk0.fromUtf8 = QJ5;
  var fJ5 = (I) => {
    let d = "";
    for (let G = 0, Z = I.length; G < Z; G++) {
      let C = I[G];
      if (C < 128) d += String.fromCharCode(C);
      else if (192 <= C && C < 224) {
        let W = I[++G];
        d += String.fromCharCode((C & 31) << 6 | W & 63)
      } else if (240 <= C && C < 365) {
        let w = "%" + [C, I[++G], I[++G], I[++G]].map((B) => B.toString(16)).join("%");
        d += decodeURIComponent(w)
      } else d += String.fromCharCode((C & 15) << 12 | (I[++G] & 63) << 6 | I[++G] & 63)
    }
    return d
  };
  Qk0.toUtf8 = fJ5
})
// @from(Start 3149944, End 3150244)
vk0 = Y((Rk0) => {
  Object.defineProperty(Rk0, "__esModule", {
    value: !0
  });
  Rk0.toUtf8 = Rk0.fromUtf8 = void 0;

  function RJ5(I) {
    return new TextEncoder().encode(I)
  }
  Rk0.fromUtf8 = RJ5;

  function UJ5(I) {
    return new TextDecoder("utf-8").decode(I)
  }
  Rk0.toUtf8 = UJ5
})
// @from(Start 3150250, End 3150625)
DV1 = Y((Sk0) => {
  Object.defineProperty(Sk0, "__esModule", {
    value: !0
  });
  Sk0.toUtf8 = Sk0.fromUtf8 = void 0;
  var Ek0 = qk0(),
    Mk0 = vk0(),
    EJ5 = (I) => typeof TextEncoder === "function" ? Mk0.fromUtf8(I) : Ek0.fromUtf8(I);
  Sk0.fromUtf8 = EJ5;
  var MJ5 = (I) => typeof TextDecoder === "function" ? Mk0.toUtf8(I) : Ek0.toUtf8(I);
  Sk0.toUtf8 = MJ5
})
// @from(Start 3150631, End 3151191)
$k0 = Y((yk0) => {
  Object.defineProperty(yk0, "__esModule", {
    value: !0
  });
  yk0.convertToBuffer = void 0;
  var LJ5 = DV1(),
    yJ5 = typeof Buffer !== "undefined" && Buffer.from ? function(I) {
      return Buffer.from(I, "utf8")
    } : LJ5.fromUtf8;

  function PJ5(I) {
    if (I instanceof Uint8Array) return I;
    if (typeof I === "string") return yJ5(I);
    if (ArrayBuffer.isView(I)) return new Uint8Array(I.buffer, I.byteOffset, I.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    return new Uint8Array(I)
  }
  yk0.convertToBuffer = PJ5
})
// @from(Start 3151197, End 3151444)
Ok0 = Y((uk0) => {
  Object.defineProperty(uk0, "__esModule", {
    value: !0
  });
  uk0.isEmptyData = void 0;

  function $J5(I) {
    if (typeof I === "string") return I.length === 0;
    return I.byteLength === 0
  }
  uk0.isEmptyData = $J5
})
// @from(Start 3151450, End 3151712)
bk0 = Y((mk0) => {
  Object.defineProperty(mk0, "__esModule", {
    value: !0
  });
  mk0.numToUint8 = void 0;

  function uJ5(I) {
    return new Uint8Array([(I & 4278190080) >> 24, (I & 16711680) >> 16, (I & 65280) >> 8, I & 255])
  }
  mk0.numToUint8 = uJ5
})
// @from(Start 3151718, End 3152074)
kk0 = Y((hk0) => {
  Object.defineProperty(hk0, "__esModule", {
    value: !0
  });
  hk0.uint32ArrayFrom = void 0;

  function TJ5(I) {
    if (!Uint32Array.from) {
      var d = new Uint32Array(I.length),
        G = 0;
      while (G < I.length) d[G] = I[G], G += 1;
      return d
    }
    return Uint32Array.from(I)
  }
  hk0.uint32ArrayFrom = TJ5
})
// @from(Start 3152080, End 3152850)
xk0 = Y((Wq) => {
  Object.defineProperty(Wq, "__esModule", {
    value: !0
  });
  Wq.uint32ArrayFrom = Wq.numToUint8 = Wq.isEmptyData = Wq.convertToBuffer = void 0;
  var OJ5 = $k0();
  Object.defineProperty(Wq, "convertToBuffer", {
    enumerable: !0,
    get: function() {
      return OJ5.convertToBuffer
    }
  });
  var mJ5 = Ok0();
  Object.defineProperty(Wq, "isEmptyData", {
    enumerable: !0,
    get: function() {
      return mJ5.isEmptyData
    }
  });
  var lJ5 = bk0();
  Object.defineProperty(Wq, "numToUint8", {
    enumerable: !0,
    get: function() {
      return lJ5.numToUint8
    }
  });
  var bJ5 = kk0();
  Object.defineProperty(Wq, "uint32ArrayFrom", {
    enumerable: !0,
    get: function() {
      return bJ5.uint32ArrayFrom
    }
  })
})
// @from(Start 3152856, End 3154592)
nk0 = Y((pk0) => {
  Object.defineProperty(pk0, "__esModule", {
    value: !0
  });
  pk0.Sha256 = void 0;
  var ck0 = YV1(),
    Si = _V1(),
    Mi = zk0(),
    HV1 = xk0(),
    jJ5 = function() {
      function I(d) {
        this.secret = d, this.hash = new Mi.RawSha256, this.reset()
      }
      return I.prototype.update = function(d) {
        if (HV1.isEmptyData(d) || this.error) return;
        try {
          this.hash.update(HV1.convertToBuffer(d))
        } catch (G) {
          this.error = G
        }
      }, I.prototype.digestSync = function() {
        if (this.error) throw this.error;
        if (this.outer) {
          if (!this.outer.finished) this.outer.update(this.hash.digest());
          return this.outer.digest()
        }
        return this.hash.digest()
      }, I.prototype.digest = function() {
        return ck0.__awaiter(this, void 0, void 0, function() {
          return ck0.__generator(this, function(d) {
            return [2, this.digestSync()]
          })
        })
      }, I.prototype.reset = function() {
        if (this.hash = new Mi.RawSha256, this.secret) {
          this.outer = new Mi.RawSha256;
          var d = kJ5(this.secret),
            G = new Uint8Array(Si.BLOCK_SIZE);
          G.set(d);
          for (var Z = 0; Z < Si.BLOCK_SIZE; Z++) d[Z] ^= 54, G[Z] ^= 92;
          this.hash.update(d), this.outer.update(G);
          for (var Z = 0; Z < d.byteLength; Z++) d[Z] = 0
        }
      }, I
    }();
  pk0.Sha256 = jJ5;

  function kJ5(I) {
    var d = HV1.convertToBuffer(I);
    if (d.byteLength > Si.BLOCK_SIZE) {
      var G = new Mi.RawSha256;
      G.update(d), d = G.digest()
    }
    var Z = new Uint8Array(Si.BLOCK_SIZE);
    return Z.set(d), Z
  }
})
// @from(Start 3154598, End 3154734)
rk0 = Y((FV1) => {
  Object.defineProperty(FV1, "__esModule", {
    value: !0
  });
  var xJ5 = YV1();
  xJ5.__exportStar(nk0(), FV1)
})
// @from(Start 3154740, End 3166096)
JV1 = Y((ZG3, yi) => {
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  var Ix0, dx0, Gx0, Zx0, Cx0, Wx0, wx0, Bx0, Ax0, Li, gV1, Vx0, Xx0, wq, Yx0, _x0, Dx0, Hx0, Fx0, gx0, Jx0, Kx0, Nx0;
  (function(I) {
    var d = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) define("tslib", ["exports"], function(Z) {
      I(G(d, G(Z)))
    });
    else if (typeof yi === "object" && typeof ZG3 === "object") I(G(d, G(ZG3)));
    else I(G(d));

    function G(Z, C) {
      if (Z !== d)
        if (typeof Object.create === "function") Object.defineProperty(Z, "__esModule", {
          value: !0
        });
        else Z.__esModule = !0;
      return function(W, w) {
        return Z[W] = C ? C(W, w) : w
      }
    }
  })(function(I) {
    var d = Object.setPrototypeOf || {
      __proto__: []
    }
    instanceof Array && function(G, Z) {
      G.__proto__ = Z
    } || function(G, Z) {
      for (var C in Z)
        if (Z.hasOwnProperty(C)) G[C] = Z[C]
    };
    Ix0 = function(G, Z) {
      d(G, Z);

      function C() {
        this.constructor = G
      }
      G.prototype = Z === null ? Object.create(Z) : (C.prototype = Z.prototype, new C)
    }, dx0 = Object.assign || function(G) {
      for (var Z, C = 1, W = arguments.length; C < W; C++) {
        Z = arguments[C];
        for (var w in Z)
          if (Object.prototype.hasOwnProperty.call(Z, w)) G[w] = Z[w]
      }
      return G
    }, Gx0 = function(G, Z) {
      var C = {};
      for (var W in G)
        if (Object.prototype.hasOwnProperty.call(G, W) && Z.indexOf(W) < 0) C[W] = G[W];
      if (G != null && typeof Object.getOwnPropertySymbols === "function") {
        for (var w = 0, W = Object.getOwnPropertySymbols(G); w < W.length; w++)
          if (Z.indexOf(W[w]) < 0 && Object.prototype.propertyIsEnumerable.call(G, W[w])) C[W[w]] = G[W[w]]
      }
      return C
    }, Zx0 = function(G, Z, C, W) {
      var w = arguments.length,
        B = w < 3 ? Z : W === null ? W = Object.getOwnPropertyDescriptor(Z, C) : W,
        A;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") B = Reflect.decorate(G, Z, C, W);
      else
        for (var V = G.length - 1; V >= 0; V--)
          if (A = G[V]) B = (w < 3 ? A(B) : w > 3 ? A(Z, C, B) : A(Z, C)) || B;
      return w > 3 && B && Object.defineProperty(Z, C, B), B
    }, Cx0 = function(G, Z) {
      return function(C, W) {
        Z(C, W, G)
      }
    }, Wx0 = function(G, Z) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(G, Z)
    }, wx0 = function(G, Z, C, W) {
      function w(B) {
        return B instanceof C ? B : new C(function(A) {
          A(B)
        })
      }
      return new(C || (C = Promise))(function(B, A) {
        function V(F) {
          try {
            _(W.next(F))
          } catch (g) {
            A(g)
          }
        }

        function X(F) {
          try {
            _(W.throw(F))
          } catch (g) {
            A(g)
          }
        }

        function _(F) {
          F.done ? B(F.value) : w(F.value).then(V, X)
        }
        _((W = W.apply(G, Z || [])).next())
      })
    }, Bx0 = function(G, Z) {
      var C = {
          label: 0,
          sent: function() {
            if (B[0] & 1) throw B[1];
            return B[1]
          },
          trys: [],
          ops: []
        },
        W, w, B, A;
      return A = {
        next: V(0),
        throw: V(1),
        return: V(2)
      }, typeof Symbol === "function" && (A[Symbol.iterator] = function() {
        return this
      }), A;

      function V(_) {
        return function(F) {
          return X([_, F])
        }
      }

      function X(_) {
        if (W) throw new TypeError("Generator is already executing.");
        while (C) try {
          if (W = 1, w && (B = _[0] & 2 ? w.return : _[0] ? w.throw || ((B = w.return) && B.call(w), 0) : w.next) && !(B = B.call(w, _[1])).done) return B;
          if (w = 0, B) _ = [_[0] & 2, B.value];
          switch (_[0]) {
            case 0:
            case 1:
              B = _;
              break;
            case 4:
              return C.label++, {
                value: _[1],
                done: !1
              };
            case 5:
              C.label++, w = _[1], _ = [0];
              continue;
            case 7:
              _ = C.ops.pop(), C.trys.pop();
              continue;
            default:
              if ((B = C.trys, !(B = B.length > 0 && B[B.length - 1])) && (_[0] === 6 || _[0] === 2)) {
                C = 0;
                continue
              }
              if (_[0] === 3 && (!B || _[1] > B[0] && _[1] < B[3])) {
                C.label = _[1];
                break
              }
              if (_[0] === 6 && C.label < B[1]) {
                C.label = B[1], B = _;
                break
              }
              if (B && C.label < B[2]) {
                C.label = B[2], C.ops.push(_);
                break
              }
              if (B[2]) C.ops.pop();
              C.trys.pop();
              continue
          }
          _ = Z.call(G, C)
        } catch (F) {
          _ = [6, F], w = 0
        } finally {
          W = B = 0
        }
        if (_[0] & 5) throw _[1];
        return {
          value: _[0] ? _[1] : void 0,
          done: !0
        }
      }
    }, Nx0 = function(G, Z, C, W) {
      if (W === void 0) W = C;
      G[W] = Z[C]
    }, Ax0 = function(G, Z) {
      for (var C in G)
        if (C !== "default" && !Z.hasOwnProperty(C)) Z[C] = G[C]
    }, Li = function(G) {
      var Z = typeof Symbol === "function" && Symbol.iterator,
        C = Z && G[Z],
        W = 0;
      if (C) return C.call(G);
      if (G && typeof G.length === "number") return {
        next: function() {
          if (G && W >= G.length) G = void 0;
          return {
            value: G && G[W++],
            done: !G
          }
        }
      };
      throw new TypeError(Z ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }, gV1 = function(G, Z) {
      var C = typeof Symbol === "function" && G[Symbol.iterator];
      if (!C) return G;
      var W = C.call(G),
        w, B = [],
        A;
      try {
        while ((Z === void 0 || Z-- > 0) && !(w = W.next()).done) B.push(w.value)
      } catch (V) {
        A = {
          error: V
        }
      } finally {
        try {
          if (w && !w.done && (C = W.return)) C.call(W)
        } finally {
          if (A) throw A.error
        }
      }
      return B
    }, Vx0 = function() {
      for (var G = [], Z = 0; Z < arguments.length; Z++) G = G.concat(gV1(arguments[Z]));
      return G
    }, Xx0 = function() {
      for (var G = 0, Z = 0, C = arguments.length; Z < C; Z++) G += arguments[Z].length;
      for (var W = Array(G), w = 0, Z = 0; Z < C; Z++)
        for (var B = arguments[Z], A = 0, V = B.length; A < V; A++, w++) W[w] = B[A];
      return W
    }, wq = function(G) {
      return this instanceof wq ? (this.v = G, this) : new wq(G)
    }, Yx0 = function(G, Z, C) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var W = C.apply(G, Z || []),
        w, B = [];
      return w = {}, A("next"), A("throw"), A("return"), w[Symbol.asyncIterator] = function() {
        return this
      }, w;

      function A(J) {
        if (W[J]) w[J] = function(K) {
          return new Promise(function(Q, E) {
            B.push([J, K, Q, E]) > 1 || V(J, K)
          })
        }
      }

      function V(J, K) {
        try {
          X(W[J](K))
        } catch (Q) {
          g(B[0][3], Q)
        }
      }

      function X(J) {
        J.value instanceof wq ? Promise.resolve(J.value.v).then(_, F) : g(B[0][2], J)
      }

      function _(J) {
        V("next", J)
      }

      function F(J) {
        V("throw", J)
      }

      function g(J, K) {
        if (J(K), B.shift(), B.length) V(B[0][0], B[0][1])
      }
    }, _x0 = function(G) {
      var Z, C;
      return Z = {}, W("next"), W("throw", function(w) {
        throw w
      }), W("return"), Z[Symbol.iterator] = function() {
        return this
      }, Z;

      function W(w, B) {
        Z[w] = G[w] ? function(A) {
          return (C = !C) ? {
            value: wq(G[w](A)),
            done: w === "return"
          } : B ? B(A) : A
        } : B
      }
    }, Dx0 = function(G) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var Z = G[Symbol.asyncIterator],
        C;
      return Z ? Z.call(G) : (G = typeof Li === "function" ? Li(G) : G[Symbol.iterator](), C = {}, W("next"), W("throw"), W("return"), C[Symbol.asyncIterator] = function() {
        return this
      }, C);

      function W(B) {
        C[B] = G[B] && function(A) {
          return new Promise(function(V, X) {
            A = G[B](A), w(V, X, A.done, A.value)
          })
        }
      }

      function w(B, A, V, X) {
        Promise.resolve(X).then(function(_) {
          B({
            value: _,
            done: V
          })
        }, A)
      }
    }, Hx0 = function(G, Z) {
      if (Object.defineProperty) Object.defineProperty(G, "raw", {
        value: Z
      });
      else G.raw = Z;
      return G
    }, Fx0 = function(G) {
      if (G && G.__esModule) return G;
      var Z = {};
      if (G != null) {
        for (var C in G)
          if (Object.hasOwnProperty.call(G, C)) Z[C] = G[C]
      }
      return Z.default = G, Z
    }, gx0 = function(G) {
      return G && G.__esModule ? G : {
        default: G
      }
    }, Jx0 = function(G, Z) {
      if (!Z.has(G)) throw new TypeError("attempted to get private field on non-instance");
      return Z.get(G)
    }, Kx0 = function(G, Z, C) {
      if (!Z.has(G)) throw new TypeError("attempted to set private field on non-instance");
      return Z.set(G, C), C
    }, I("__extends", Ix0), I("__assign", dx0), I("__rest", Gx0), I("__decorate", Zx0), I("__param", Cx0), I("__metadata", Wx0), I("__awaiter", wx0), I("__generator", Bx0), I("__exportStar", Ax0), I("__createBinding", Nx0), I("__values", Li), I("__read", gV1), I("__spread", Vx0), I("__spreadArrays", Xx0), I("__await", wq), I("__asyncGenerator", Yx0), I("__asyncDelegator", _x0), I("__asyncValues", Dx0), I("__makeTemplateObject", Hx0), I("__importStar", Fx0), I("__importDefault", gx0), I("__classPrivateFieldGet", Jx0), I("__classPrivateFieldSet", Kx0)
  })
})
// @from(Start 3166102, End 3166662)
fx0 = Y((zx0) => {
  Object.defineProperty(zx0, "__esModule", {
    value: !0
  });
  zx0.convertToBuffer = void 0;
  var iJ5 = DV1(),
    nJ5 = typeof Buffer !== "undefined" && Buffer.from ? function(I) {
      return Buffer.from(I, "utf8")
    } : iJ5.fromUtf8;

  function rJ5(I) {
    if (I instanceof Uint8Array) return I;
    if (typeof I === "string") return nJ5(I);
    if (ArrayBuffer.isView(I)) return new Uint8Array(I.buffer, I.byteOffset, I.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    return new Uint8Array(I)
  }
  zx0.convertToBuffer = rJ5
})
// @from(Start 3166668, End 3166915)
Ux0 = Y((qx0) => {
  Object.defineProperty(qx0, "__esModule", {
    value: !0
  });
  qx0.isEmptyData = void 0;

  function aJ5(I) {
    if (typeof I === "string") return I.length === 0;
    return I.byteLength === 0
  }
  qx0.isEmptyData = aJ5
})
// @from(Start 3166921, End 3167183)
Mx0 = Y((vx0) => {
  Object.defineProperty(vx0, "__esModule", {
    value: !0
  });
  vx0.numToUint8 = void 0;

  function sJ5(I) {
    return new Uint8Array([(I & 4278190080) >> 24, (I & 16711680) >> 16, (I & 65280) >> 8, I & 255])
  }
  vx0.numToUint8 = sJ5
})
// @from(Start 3167189, End 3167545)
yx0 = Y((Sx0) => {
  Object.defineProperty(Sx0, "__esModule", {
    value: !0
  });
  Sx0.uint32ArrayFrom = void 0;

  function oJ5(I) {
    if (!Uint32Array.from) {
      var d = new Uint32Array(I.length),
        G = 0;
      while (G < I.length) d[G] = I[G], G += 1;
      return d
    }
    return Uint32Array.from(I)
  }
  Sx0.uint32ArrayFrom = oJ5
})
// @from(Start 3167551, End 3168321)
KV1 = Y((Bq) => {
  Object.defineProperty(Bq, "__esModule", {
    value: !0
  });
  Bq.uint32ArrayFrom = Bq.numToUint8 = Bq.isEmptyData = Bq.convertToBuffer = void 0;
  var eJ5 = fx0();
  Object.defineProperty(Bq, "convertToBuffer", {
    enumerable: !0,
    get: function() {
      return eJ5.convertToBuffer
    }
  });
  var tJ5 = Ux0();
  Object.defineProperty(Bq, "isEmptyData", {
    enumerable: !0,
    get: function() {
      return tJ5.isEmptyData
    }
  });
  var IK5 = Mx0();
  Object.defineProperty(Bq, "numToUint8", {
    enumerable: !0,
    get: function() {
      return IK5.numToUint8
    }
  });
  var dK5 = yx0();
  Object.defineProperty(Bq, "uint32ArrayFrom", {
    enumerable: !0,
    get: function() {
      return dK5.uint32ArrayFrom
    }
  })
})
// @from(Start 3168327, End 3169077)
Ox0 = Y((ux0) => {
  Object.defineProperty(ux0, "__esModule", {
    value: !0
  });
  ux0.AwsCrc32 = void 0;
  var Px0 = JV1(),
    NV1 = KV1(),
    $x0 = Pi(),
    ZK5 = function() {
      function I() {
        this.crc32 = new $x0.Crc32
      }
      return I.prototype.update = function(d) {
        if (NV1.isEmptyData(d)) return;
        this.crc32.update(NV1.convertToBuffer(d))
      }, I.prototype.digest = function() {
        return Px0.__awaiter(this, void 0, void 0, function() {
          return Px0.__generator(this, function(d) {
            return [2, NV1.numToUint8(this.crc32.digest())]
          })
        })
      }, I.prototype.reset = function() {
        this.crc32 = new $x0.Crc32
      }, I
    }();
  ux0.AwsCrc32 = ZK5
})
// @from(Start 3169083, End 3173237)
Pi = Y((zV1) => {
  Object.defineProperty(zV1, "__esModule", {
    value: !0
  });
  zV1.AwsCrc32 = zV1.Crc32 = zV1.crc32 = void 0;
  var CK5 = JV1(),
    WK5 = KV1();

  function wK5(I) {
    return new mx0().update(I).digest()
  }
  zV1.crc32 = wK5;
  var mx0 = function() {
    function I() {
      this.checksum = 4294967295
    }
    return I.prototype.update = function(d) {
      var G, Z;
      try {
        for (var C = CK5.__values(d), W = C.next(); !W.done; W = C.next()) {
          var w = W.value;
          this.checksum = this.checksum >>> 8 ^ AK5[(this.checksum ^ w) & 255]
        }
      } catch (B) {
        G = {
          error: B
        }
      } finally {
        try {
          if (W && !W.done && (Z = C.return)) Z.call(C)
        } finally {
          if (G) throw G.error
        }
      }
      return this
    }, I.prototype.digest = function() {
      return (this.checksum ^ 4294967295) >>> 0
    }, I
  }();
  zV1.Crc32 = mx0;
  var BK5 = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918000, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117],
    AK5 = WK5.uint32ArrayFrom(BK5),
    VK5 = Ox0();
  Object.defineProperty(zV1, "AwsCrc32", {
    enumerable: !0,
    get: function() {
      return VK5.AwsCrc32
    }
  })
})
// @from(Start 3173243, End 3174772)
fV1 = Y((HG3, xx0) => {
  var {
    defineProperty: $i,
    getOwnPropertyDescriptor: DK5,
    getOwnPropertyNames: HK5
  } = Object, FK5 = Object.prototype.hasOwnProperty, lx0 = (I, d) => $i(I, "name", {
    value: d,
    configurable: !0
  }), gK5 = (I, d) => {
    for (var G in d) $i(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, JK5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of HK5(d))
        if (!FK5.call(I, C) && C !== G) $i(I, C, {
          get: () => d[C],
          enumerable: !(Z = DK5(d, C)) || Z.enumerable
        })
    }
    return I
  }, KK5 = (I) => JK5($i({}, "__esModule", {
    value: !0
  }), I), bx0 = {};
  gK5(bx0, {
    fromHex: () => jx0,
    toHex: () => kx0
  });
  xx0.exports = KK5(bx0);
  var hx0 = {},
    QV1 = {};
  for (let I = 0; I < 256; I++) {
    let d = I.toString(16).toLowerCase();
    if (d.length === 1) d = `0${d}`;
    hx0[I] = d, QV1[d] = I
  }

  function jx0(I) {
    if (I.length % 2 !== 0) throw new Error("Hex encoded strings must have an even number length");
    let d = new Uint8Array(I.length / 2);
    for (let G = 0; G < I.length; G += 2) {
      let Z = I.slice(G, G + 2).toLowerCase();
      if (Z in QV1) d[G / 2] = QV1[Z];
      else throw new Error(`Cannot decode unrecognized sequence ${Z} as hexadecimal`)
    }
    return d
  }
  lx0(jx0, "fromHex");

  function kx0(I) {
    let d = "";
    for (let G = 0; G < I.byteLength; G++) d += hx0[I[G]];
    return d
  }
  lx0(kx0, "toHex")
})
// @from(Start 3174778, End 3185453)
Zc0 = Y((FG3, Gc0) => {
  var {
    defineProperty: Ti,
    getOwnPropertyDescriptor: NK5,
    getOwnPropertyNames: zK5
  } = Object, QK5 = Object.prototype.hasOwnProperty, TV = (I, d) => Ti(I, "name", {
    value: d,
    configurable: !0
  }), fK5 = (I, d) => {
    for (var G in d) Ti(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, qK5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of zK5(d))
        if (!QK5.call(I, C) && C !== G) Ti(I, C, {
          get: () => d[C],
          enumerable: !(Z = NK5(d, C)) || Z.enumerable
        })
    }
    return I
  }, RK5 = (I) => qK5(Ti({}, "__esModule", {
    value: !0
  }), I), px0 = {};
  fK5(px0, {
    EventStreamCodec: () => mK5,
    HeaderMarshaller: () => rx0,
    Int64: () => ui,
    MessageDecoderStream: () => lK5,
    MessageEncoderStream: () => bK5,
    SmithyMessageDecoderStream: () => hK5,
    SmithyMessageEncoderStream: () => jK5
  });
  Gc0.exports = RK5(px0);
  var UK5 = Pi(),
    JJ = fV1(),
    ix0 = class I {
      constructor(d) {
        if (this.bytes = d, d.byteLength !== 8) throw new Error("Int64 buffers must be exactly 8 bytes")
      }
      static fromNumber(d) {
        if (d > 9223372036854776000 || d < -9223372036854776000) throw new Error(`${d} is too large (or, if negative, too small) to represent as an Int64`);
        let G = new Uint8Array(8);
        for (let Z = 7, C = Math.abs(Math.round(d)); Z > -1 && C > 0; Z--, C /= 256) G[Z] = C;
        if (d < 0) qV1(G);
        return new I(G)
      }
      valueOf() {
        let d = this.bytes.slice(0),
          G = d[0] & 128;
        if (G) qV1(d);
        return parseInt(JJ.toHex(d), 16) * (G ? -1 : 1)
      }
      toString() {
        return String(this.valueOf())
      }
    };
  TV(ix0, "Int64");
  var ui = ix0;

  function qV1(I) {
    for (let d = 0; d < 8; d++) I[d] ^= 255;
    for (let d = 7; d > -1; d--)
      if (I[d]++, I[d] !== 0) break
  }
  TV(qV1, "negate");
  var nx0 = class I {
    constructor(d, G) {
      this.toUtf8 = d, this.fromUtf8 = G
    }
    format(d) {
      let G = [];
      for (let W of Object.keys(d)) {
        let w = this.fromUtf8(W);
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
          let B = this.fromUtf8(d.value),
            A = new DataView(new ArrayBuffer(3 + B.byteLength));
          A.setUint8(0, 7), A.setUint16(1, B.byteLength, !1);
          let V = new Uint8Array(A.buffer);
          return V.set(B, 3), V;
        case "timestamp":
          let X = new Uint8Array(9);
          return X[0] = 8, X.set(ui.fromNumber(d.value.valueOf()).bytes, 1), X;
        case "uuid":
          if (!uK5.test(d.value)) throw new Error(`Invalid UUID received: ${d.value}`);
          let _ = new Uint8Array(17);
          return _[0] = 9, _.set(JJ.fromHex(d.value.replace(/\-/g, "")), 1), _
      }
    }
    parse(d) {
      let G = {},
        Z = 0;
      while (Z < d.byteLength) {
        let C = d.getUint8(Z++),
          W = this.toUtf8(new Uint8Array(d.buffer, d.byteOffset + Z, C));
        switch (Z += C, d.getUint8(Z++)) {
          case 0:
            G[W] = {
              type: cx0,
              value: !0
            };
            break;
          case 1:
            G[W] = {
              type: cx0,
              value: !1
            };
            break;
          case 2:
            G[W] = {
              type: vK5,
              value: d.getInt8(Z++)
            };
            break;
          case 3:
            G[W] = {
              type: EK5,
              value: d.getInt16(Z, !1)
            }, Z += 2;
            break;
          case 4:
            G[W] = {
              type: MK5,
              value: d.getInt32(Z, !1)
            }, Z += 4;
            break;
          case 5:
            G[W] = {
              type: SK5,
              value: new ui(new Uint8Array(d.buffer, d.byteOffset + Z, 8))
            }, Z += 8;
            break;
          case 6:
            let w = d.getUint16(Z, !1);
            Z += 2, G[W] = {
              type: LK5,
              value: new Uint8Array(d.buffer, d.byteOffset + Z, w)
            }, Z += w;
            break;
          case 7:
            let B = d.getUint16(Z, !1);
            Z += 2, G[W] = {
              type: yK5,
              value: this.toUtf8(new Uint8Array(d.buffer, d.byteOffset + Z, B))
            }, Z += B;
            break;
          case 8:
            G[W] = {
              type: PK5,
              value: new Date(new ui(new Uint8Array(d.buffer, d.byteOffset + Z, 8)).valueOf())
            }, Z += 8;
            break;
          case 9:
            let A = new Uint8Array(d.buffer, d.byteOffset + Z, 16);
            Z += 16, G[W] = {
              type: $K5,
              value: `${JJ.toHex(A.subarray(0,4))}-${JJ.toHex(A.subarray(4,6))}-${JJ.toHex(A.subarray(6,8))}-${JJ.toHex(A.subarray(8,10))}-${JJ.toHex(A.subarray(10))}`
            };
            break;
          default:
            throw new Error("Unrecognized header type tag")
        }
      }
      return G
    }
  };
  TV(nx0, "HeaderMarshaller");
  var rx0 = nx0,
    cx0 = "boolean",
    vK5 = "byte",
    EK5 = "short",
    MK5 = "integer",
    SK5 = "long",
    LK5 = "binary",
    yK5 = "string",
    PK5 = "timestamp",
    $K5 = "uuid",
    uK5 = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
    TK5 = Pi(),
    ax0 = 4,
    QD = ax0 * 2,
    KJ = 4,
    OK5 = QD + KJ * 2;

  function sx0({
    byteLength: I,
    byteOffset: d,
    buffer: G
  }) {
    if (I < OK5) throw new Error("Provided message too short to accommodate event stream message overhead");
    let Z = new DataView(G, d, I),
      C = Z.getUint32(0, !1);
    if (I !== C) throw new Error("Reported message length does not match received message length");
    let W = Z.getUint32(ax0, !1),
      w = Z.getUint32(QD, !1),
      B = Z.getUint32(I - KJ, !1),
      A = new TK5.Crc32().update(new Uint8Array(G, d, QD));
    if (w !== A.digest()) throw new Error(`The prelude checksum specified in the message (${w}) does not match the calculated CRC32 checksum (${A.digest()})`);
    if (A.update(new Uint8Array(G, d + QD, I - (QD + KJ))), B !== A.digest()) throw new Error(`The message checksum (${A.digest()}) did not match the expected value of ${B}`);
    return {
      headers: new DataView(G, d + QD + KJ, W),
      body: new Uint8Array(G, d + QD + KJ + W, C - W - (QD + KJ + KJ))
    }
  }
  TV(sx0, "splitMessage");
  var ox0 = class I {
    constructor(d, G) {
      this.headerMarshaller = new rx0(d, G), this.messageBuffer = [], this.isEndOfStream = !1
    }
    feed(d) {
      this.messageBuffer.push(this.decode(d))
    }
    endOfStream() {
      this.isEndOfStream = !0
    }
    getMessage() {
      let d = this.messageBuffer.pop(),
        G = this.isEndOfStream;
      return {
        getMessage() {
          return d
        },
        isEndOfStream() {
          return G
        }
      }
    }
    getAvailableMessages() {
      let d = this.messageBuffer;
      this.messageBuffer = [];
      let G = this.isEndOfStream;
      return {
        getMessages() {
          return d
        },
        isEndOfStream() {
          return G
        }
      }
    }
    encode({
      headers: d,
      body: G
    }) {
      let Z = this.headerMarshaller.format(d),
        C = Z.byteLength + G.byteLength + 16,
        W = new Uint8Array(C),
        w = new DataView(W.buffer, W.byteOffset, W.byteLength),
        B = new UK5.Crc32;
      return w.setUint32(0, C, !1), w.setUint32(4, Z.byteLength, !1), w.setUint32(8, B.update(W.subarray(0, 8)).digest(), !1), W.set(Z, 12), W.set(G, Z.byteLength + 12), w.setUint32(C - 4, B.update(W.subarray(8, C - 4)).digest(), !1), W
    }
    decode(d) {
      let {
        headers: G,
        body: Z
      } = sx0(d);
      return {
        headers: this.headerMarshaller.parse(G),
        body: Z
      }
    }
    formatHeaders(d) {
      return this.headerMarshaller.format(d)
    }
  };
  TV(ox0, "EventStreamCodec");
  var mK5 = ox0,
    ex0 = class I {
      constructor(d) {
        this.options = d
      } [Symbol.asyncIterator]() {
        return this.asyncIterator()
      }
      async * asyncIterator() {
        for await (let d of this.options.inputStream) yield this.options.decoder.decode(d)
      }
    };
  TV(ex0, "MessageDecoderStream");
  var lK5 = ex0,
    tx0 = class I {
      constructor(d) {
        this.options = d
      } [Symbol.asyncIterator]() {
        return this.asyncIterator()
      }
      async * asyncIterator() {
        for await (let d of this.options.messageStream) yield this.options.encoder.encode(d);
        if (this.options.includeEndFrame) yield new Uint8Array(0)
      }
    };
  TV(tx0, "MessageEncoderStream");
  var bK5 = tx0,
    Ic0 = class I {
      constructor(d) {
        this.options = d
      } [Symbol.asyncIterator]() {
        return this.asyncIterator()
      }
      async * asyncIterator() {
        for await (let d of this.options.messageStream) {
          let G = await this.options.deserializer(d);
          if (G === void 0) continue;
          yield G
        }
      }
    };
  TV(Ic0, "SmithyMessageDecoderStream");
  var hK5 = Ic0,
    dc0 = class I {
      constructor(d) {
        this.options = d
      } [Symbol.asyncIterator]() {
        return this.asyncIterator()
      }
      async * asyncIterator() {
        for await (let d of this.options.inputStream) yield this.options.serializer(d)
      }
    };
  TV(dc0, "SmithyMessageEncoderStream");
  var jK5 = dc0
})
// @from(Start 3185459, End 3189430)
Xc0 = Y((gG3, Vc0) => {
  var {
    defineProperty: Oi,
    getOwnPropertyDescriptor: kK5,
    getOwnPropertyNames: xK5
  } = Object, cK5 = Object.prototype.hasOwnProperty, Aq = (I, d) => Oi(I, "name", {
    value: d,
    configurable: !0
  }), pK5 = (I, d) => {
    for (var G in d) Oi(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, iK5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of xK5(d))
        if (!cK5.call(I, C) && C !== G) Oi(I, C, {
          get: () => d[C],
          enumerable: !(Z = kK5(d, C)) || Z.enumerable
        })
    }
    return I
  }, nK5 = (I) => iK5(Oi({}, "__esModule", {
    value: !0
  }), I), Cc0 = {};
  pK5(Cc0, {
    EventStreamMarshaller: () => Ac0,
    eventStreamSerdeProvider: () => rK5
  });
  Vc0.exports = nK5(Cc0);
  var py = Zc0();

  function Wc0(I) {
    let d = 0,
      G = 0,
      Z = null,
      C = null,
      W = Aq((B) => {
        if (typeof B !== "number") throw new Error("Attempted to allocate an event message where size was not a number: " + B);
        d = B, G = 4, Z = new Uint8Array(B), new DataView(Z.buffer).setUint32(0, B, !1)
      }, "allocateMessage"),
      w = Aq(async function*() {
        let B = I[Symbol.asyncIterator]();
        while (!0) {
          let {
            value: A,
            done: V
          } = await B.next();
          if (V) {
            if (!d) return;
            else if (d === G) yield Z;
            else throw new Error("Truncated event message received.");
            return
          }
          let X = A.length,
            _ = 0;
          while (_ < X) {
            if (!Z) {
              let g = X - _;
              if (!C) C = new Uint8Array(4);
              let J = Math.min(4 - G, g);
              if (C.set(A.slice(_, _ + J), G), G += J, _ += J, G < 4) break;
              W(new DataView(C.buffer).getUint32(0, !1)), C = null
            }
            let F = Math.min(d - G, X - _);
            if (Z.set(A.slice(_, _ + F), G), G += F, _ += F, d && d === G) yield Z, Z = null, d = 0, G = 0
          }
        }
      }, "iterator");
    return {
      [Symbol.asyncIterator]: w
    }
  }
  Aq(Wc0, "getChunkedStream");

  function wc0(I, d) {
    return async function(G) {
      let {
        value: Z
      } = G.headers[":message-type"];
      if (Z === "error") {
        let C = new Error(G.headers[":error-message"].value || "UnknownError");
        throw C.name = G.headers[":error-code"].value, C
      } else if (Z === "exception") {
        let C = G.headers[":exception-type"].value,
          W = {
            [C]: G
          },
          w = await I(W);
        if (w.$unknown) {
          let B = new Error(d(G.body));
          throw B.name = C, B
        }
        throw w[C]
      } else if (Z === "event") {
        let C = {
            [G.headers[":event-type"].value]: G
          },
          W = await I(C);
        if (W.$unknown) return;
        return W
      } else throw Error(`Unrecognizable event type: ${G.headers[":event-type"].value}`)
    }
  }
  Aq(wc0, "getMessageUnmarshaller");
  var Bc0 = class I {
    constructor({
      utf8Encoder: d,
      utf8Decoder: G
    }) {
      this.eventStreamCodec = new py.EventStreamCodec(d, G), this.utfEncoder = d
    }
    deserialize(d, G) {
      let Z = Wc0(d);
      return new py.SmithyMessageDecoderStream({
        messageStream: new py.MessageDecoderStream({
          inputStream: Z,
          decoder: this.eventStreamCodec
        }),
        deserializer: wc0(G, this.utfEncoder)
      })
    }
    serialize(d, G) {
      return new py.MessageEncoderStream({
        messageStream: new py.SmithyMessageEncoderStream({
          inputStream: d,
          serializer: G
        }),
        encoder: this.eventStreamCodec,
        includeEndFrame: !0
      })
    }
  };
  Aq(Bc0, "EventStreamMarshaller");
  var Ac0 = Bc0,
    rK5 = Aq((I) => new Ac0(I), "eventStreamSerdeProvider")
})
// @from(Start 3189436, End 3191340)
UV1 = Y((JG3, Fc0) => {
  var {
    defineProperty: mi,
    getOwnPropertyDescriptor: aK5,
    getOwnPropertyNames: sK5
  } = Object, oK5 = Object.prototype.hasOwnProperty, RV1 = (I, d) => mi(I, "name", {
    value: d,
    configurable: !0
  }), eK5 = (I, d) => {
    for (var G in d) mi(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, tK5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of sK5(d))
        if (!oK5.call(I, C) && C !== G) mi(I, C, {
          get: () => d[C],
          enumerable: !(Z = aK5(d, C)) || Z.enumerable
        })
    }
    return I
  }, IN5 = (I) => tK5(mi({}, "__esModule", {
    value: !0
  }), I), Yc0 = {};
  eK5(Yc0, {
    EventStreamMarshaller: () => Hc0,
    eventStreamSerdeProvider: () => ZN5
  });
  Fc0.exports = IN5(Yc0);
  var dN5 = Xc0(),
    GN5 = B1("stream");
  async function* _c0(I) {
    let d = !1,
      G = !1,
      Z = new Array;
    I.on("error", (C) => {
      if (!d) d = !0;
      if (C) throw C
    }), I.on("data", (C) => {
      Z.push(C)
    }), I.on("end", () => {
      d = !0
    });
    while (!G) {
      let C = await new Promise((W) => setTimeout(() => W(Z.shift()), 0));
      if (C) yield C;
      G = d && Z.length === 0
    }
  }
  RV1(_c0, "readabletoIterable");
  var Dc0 = class I {
    constructor({
      utf8Encoder: d,
      utf8Decoder: G
    }) {
      this.universalMarshaller = new dN5.EventStreamMarshaller({
        utf8Decoder: G,
        utf8Encoder: d
      })
    }
    deserialize(d, G) {
      let Z = typeof d[Symbol.asyncIterator] === "function" ? d : _c0(d);
      return this.universalMarshaller.deserialize(Z, G)
    }
    serialize(d, G) {
      return GN5.Readable.from(this.universalMarshaller.serialize(d, G))
    }
  };
  RV1(Dc0, "EventStreamMarshaller");
  var Hc0 = Dc0,
    ZN5 = RV1((I) => new Hc0(I), "eventStreamSerdeProvider")
})