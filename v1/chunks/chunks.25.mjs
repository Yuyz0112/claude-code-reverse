
// @from(Start 2904708, End 2906524)
gS0 = Y((_S0) => {
  Object.defineProperty(_S0, "__esModule", {
    value: !0
  });
  _S0.getLoggerPlugin = _S0.loggerMiddlewareOptions = _S0.loggerMiddleware = void 0;
  var Uw5 = () => (I, d) => async (G) => {
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
  _S0.loggerMiddleware = Uw5;
  _S0.loggerMiddlewareOptions = {
    name: "loggerMiddleware",
    tags: ["LOGGER"],
    step: "initialize",
    override: !0
  };
  var vw5 = (I) => ({
    applyToStack: (d) => {
      d.add(_S0.loggerMiddleware(), _S0.loggerMiddlewareOptions)
    }
  });
  _S0.getLoggerPlugin = vw5
})
// @from(Start 2906530, End 2906665)
pw1 = Y((cw1) => {
  Object.defineProperty(cw1, "__esModule", {
    value: !0
  });
  var Ew5 = x1();
  Ew5.__exportStar(gS0(), cw1)
})
// @from(Start 2906671, End 2907845)
iw1 = Y((KS0) => {
  Object.defineProperty(KS0, "__esModule", {
    value: !0
  });
  KS0.getRecursionDetectionPlugin = KS0.addRecursionDetectionMiddlewareOptions = KS0.recursionDetectionMiddleware = void 0;
  var Mw5 = J8(),
    JS0 = "X-Amzn-Trace-Id",
    Sw5 = "AWS_LAMBDA_FUNCTION_NAME",
    Lw5 = "_X_AMZN_TRACE_ID",
    yw5 = (I) => (d) => async (G) => {
      let {
        request: Z
      } = G;
      if (!Mw5.HttpRequest.isInstance(Z) || I.runtime !== "node" || Z.headers.hasOwnProperty(JS0)) return d(G);
      let C = process.env[Sw5],
        W = process.env[Lw5],
        w = (B) => typeof B === "string" && B.length > 0;
      if (w(C) && w(W)) Z.headers[JS0] = W;
      return d({
        ...G,
        request: Z
      })
    };
  KS0.recursionDetectionMiddleware = yw5;
  KS0.addRecursionDetectionMiddlewareOptions = {
    step: "build",
    tags: ["RECURSION_DETECTION"],
    name: "recursionDetectionMiddleware",
    override: !0,
    priority: "low"
  };
  var Pw5 = (I) => ({
    applyToStack: (d) => {
      d.add(KS0.recursionDetectionMiddleware(I), KS0.addRecursionDetectionMiddlewareOptions)
    }
  });
  KS0.getRecursionDetectionPlugin = Pw5
})
// @from(Start 2907851, End 2910855)
US0 = Y((qS0) => {
  Object.defineProperty(qS0, "__esModule", {
    value: !0
  });
  qS0.resolveSigV4AuthConfig = qS0.resolveAwsAuthConfig = void 0;
  var $w5 = W4(),
    nw1 = hI1(),
    af = M_(),
    uw5 = 300000,
    Tw5 = (I) => {
      let d = I.credentials ? fS0(I.credentials) : I.credentialDefaultProvider(I),
        {
          signingEscapePath: G = !0,
          systemClockOffset: Z = I.systemClockOffset || 0,
          sha256: C
        } = I,
        W;
      if (I.signer) W = af.normalizeProvider(I.signer);
      else if (I.regionInfoProvider) W = () => af.normalizeProvider(I.region)().then(async (w) => [await I.regionInfoProvider(w, {
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
        return new(I.signerConstructor || nw1.SignatureV4)(X)
      });
      else W = async (w) => {
        w = Object.assign({}, {
          name: "sigv4",
          signingName: I.signingName || I.defaultSigningName,
          signingRegion: await af.normalizeProvider(I.region)(),
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
        return new(I.signerConstructor || nw1.SignatureV4)(V)
      };
      return {
        ...I,
        systemClockOffset: Z,
        signingEscapePath: G,
        credentials: d,
        signer: W
      }
    };
  qS0.resolveAwsAuthConfig = Tw5;
  var Ow5 = (I) => {
    let d = I.credentials ? fS0(I.credentials) : I.credentialDefaultProvider(I),
      {
        signingEscapePath: G = !0,
        systemClockOffset: Z = I.systemClockOffset || 0,
        sha256: C
      } = I,
      W;
    if (I.signer) W = af.normalizeProvider(I.signer);
    else W = af.normalizeProvider(new nw1.SignatureV4({
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
  qS0.resolveSigV4AuthConfig = Ow5;
  var fS0 = (I) => {
    if (typeof I === "function") return $w5.memoize(I, (d) => d.expiration !== void 0 && d.expiration.getTime() - Date.now() < uw5, (d) => d.expiration !== void 0);
    return af.normalizeProvider(I)
  }
})
// @from(Start 2910861, End 2911062)
rw1 = Y((vS0) => {
  Object.defineProperty(vS0, "__esModule", {
    value: !0
  });
  vS0.getSkewCorrectedDate = void 0;
  var lw5 = (I) => new Date(Date.now() + I);
  vS0.getSkewCorrectedDate = lw5
})
// @from(Start 2911068, End 2911312)
LS0 = Y((MS0) => {
  Object.defineProperty(MS0, "__esModule", {
    value: !0
  });
  MS0.isClockSkewed = void 0;
  var bw5 = rw1(),
    hw5 = (I, d) => Math.abs(bw5.getSkewCorrectedDate(d).getTime() - I) >= 300000;
  MS0.isClockSkewed = hw5
})
// @from(Start 2911318, End 2911638)
$S0 = Y((yS0) => {
  Object.defineProperty(yS0, "__esModule", {
    value: !0
  });
  yS0.getUpdatedSystemClockOffset = void 0;
  var jw5 = LS0(),
    kw5 = (I, d) => {
      let G = Date.parse(I);
      if (jw5.isClockSkewed(G, d)) return G - Date.now();
      return d
    };
  yS0.getUpdatedSystemClockOffset = kw5
})
// @from(Start 2911644, End 2913784)
kS0 = Y((mS0) => {
  Object.defineProperty(mS0, "__esModule", {
    value: !0
  });
  mS0.getSigV4AuthPlugin = mS0.getAwsAuthPlugin = mS0.awsAuthMiddlewareOptions = mS0.awsAuthMiddleware = void 0;
  var OS0 = J8(),
    xw5 = rw1(),
    uS0 = $S0(),
    cw5 = (I) => (d, G) => async function(Z) {
      var C, W, w, B;
      if (!OS0.HttpRequest.isInstance(Z.request)) return d(Z);
      let A = (w = (W = (C = G.endpointV2) === null || C === void 0 ? void 0 : C.properties) === null || W === void 0 ? void 0 : W.authSchemes) === null || w === void 0 ? void 0 : w[0],
        V = (A === null || A === void 0 ? void 0 : A.name) === "sigv4a" ? (B = A === null || A === void 0 ? void 0 : A.signingRegionSet) === null || B === void 0 ? void 0 : B.join(",") : void 0,
        X = await I.signer(A),
        _ = await d({
          ...Z,
          request: await X.sign(Z.request, {
            signingDate: xw5.getSkewCorrectedDate(I.systemClockOffset),
            signingRegion: V || G.signing_region,
            signingService: G.signing_service
          })
        }).catch((g) => {
          var J;
          let K = (J = g.ServerTime) !== null && J !== void 0 ? J : TS0(g.$response);
          if (K) I.systemClockOffset = uS0.getUpdatedSystemClockOffset(K, I.systemClockOffset);
          throw g
        }),
        F = TS0(_.response);
      if (F) I.systemClockOffset = uS0.getUpdatedSystemClockOffset(F, I.systemClockOffset);
      return _
    };
  mS0.awsAuthMiddleware = cw5;
  var TS0 = (I) => {
    var d, G, Z;
    return OS0.HttpResponse.isInstance(I) ? (G = (d = I.headers) === null || d === void 0 ? void 0 : d.date) !== null && G !== void 0 ? G : (Z = I.headers) === null || Z === void 0 ? void 0 : Z.Date : void 0
  };
  mS0.awsAuthMiddlewareOptions = {
    name: "awsAuthMiddleware",
    tags: ["SIGNATURE", "AWSAUTH"],
    relation: "after",
    toMiddleware: "retryMiddleware",
    override: !0
  };
  var pw5 = (I) => ({
    applyToStack: (d) => {
      d.addRelativeTo(mS0.awsAuthMiddleware(I), mS0.awsAuthMiddlewareOptions)
    }
  });
  mS0.getAwsAuthPlugin = pw5;
  mS0.getSigV4AuthPlugin = mS0.getAwsAuthPlugin
})
// @from(Start 2913790, End 2913952)
GD = Y((bp) => {
  Object.defineProperty(bp, "__esModule", {
    value: !0
  });
  var xS0 = x1();
  xS0.__exportStar(US0(), bp);
  xS0.__exportStar(kS0(), bp)
})
// @from(Start 2913958, End 2914251)
iS0 = Y((cS0) => {
  Object.defineProperty(cS0, "__esModule", {
    value: !0
  });
  cS0.resolveStsAuthConfig = void 0;
  var iw5 = GD(),
    nw5 = (I, {
      stsClientCtor: d
    }) => iw5.resolveAwsAuthConfig({
      ...I,
      stsClientCtor: d
    });
  cS0.resolveStsAuthConfig = nw5
})
// @from(Start 2914257, End 2914594)
aS0 = Y((nS0) => {
  Object.defineProperty(nS0, "__esModule", {
    value: !0
  });
  nS0.resolveUserAgentConfig = void 0;

  function rw5(I) {
    return {
      ...I,
      customUserAgent: typeof I.customUserAgent === "string" ? [
        [I.customUserAgent]
      ] : I.customUserAgent
    }
  }
  nS0.resolveUserAgentConfig = rw5
})
// @from(Start 2914600, End 2919638)
sS0 = Y((s33, aw5) => {
  aw5.exports = {
    partitions: [{
      id: "aws",
      outputs: {
        dnsSuffix: "amazonaws.com",
        dualStackDnsSuffix: "api.aws",
        name: "aws",
        supportsDualStack: !0,
        supportsFIPS: !0
      },
      regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
      regions: {
        "af-south-1": {
          description: "Africa (Cape Town)"
        },
        "ap-east-1": {
          description: "Asia Pacific (Hong Kong)"
        },
        "ap-northeast-1": {
          description: "Asia Pacific (Tokyo)"
        },
        "ap-northeast-2": {
          description: "Asia Pacific (Seoul)"
        },
        "ap-northeast-3": {
          description: "Asia Pacific (Osaka)"
        },
        "ap-south-1": {
          description: "Asia Pacific (Mumbai)"
        },
        "ap-south-2": {
          description: "Asia Pacific (Hyderabad)"
        },
        "ap-southeast-1": {
          description: "Asia Pacific (Singapore)"
        },
        "ap-southeast-2": {
          description: "Asia Pacific (Sydney)"
        },
        "ap-southeast-3": {
          description: "Asia Pacific (Jakarta)"
        },
        "ap-southeast-4": {
          description: "Asia Pacific (Melbourne)"
        },
        "aws-global": {
          description: "AWS Standard global region"
        },
        "ca-central-1": {
          description: "Canada (Central)"
        },
        "eu-central-1": {
          description: "Europe (Frankfurt)"
        },
        "eu-central-2": {
          description: "Europe (Zurich)"
        },
        "eu-north-1": {
          description: "Europe (Stockholm)"
        },
        "eu-south-1": {
          description: "Europe (Milan)"
        },
        "eu-south-2": {
          description: "Europe (Spain)"
        },
        "eu-west-1": {
          description: "Europe (Ireland)"
        },
        "eu-west-2": {
          description: "Europe (London)"
        },
        "eu-west-3": {
          description: "Europe (Paris)"
        },
        "me-central-1": {
          description: "Middle East (UAE)"
        },
        "me-south-1": {
          description: "Middle East (Bahrain)"
        },
        "sa-east-1": {
          description: "South America (Sao Paulo)"
        },
        "us-east-1": {
          description: "US East (N. Virginia)"
        },
        "us-east-2": {
          description: "US East (Ohio)"
        },
        "us-west-1": {
          description: "US West (N. California)"
        },
        "us-west-2": {
          description: "US West (Oregon)"
        }
      }
    }, {
      id: "aws-cn",
      outputs: {
        dnsSuffix: "amazonaws.com.cn",
        dualStackDnsSuffix: "api.amazonwebservices.com.cn",
        name: "aws-cn",
        supportsDualStack: !0,
        supportsFIPS: !0
      },
      regionRegex: "^cn\\-\\w+\\-\\d+$",
      regions: {
        "aws-cn-global": {
          description: "AWS China global region"
        },
        "cn-north-1": {
          description: "China (Beijing)"
        },
        "cn-northwest-1": {
          description: "China (Ningxia)"
        }
      }
    }, {
      id: "aws-us-gov",
      outputs: {
        dnsSuffix: "amazonaws.com",
        dualStackDnsSuffix: "api.aws",
        name: "aws-us-gov",
        supportsDualStack: !0,
        supportsFIPS: !0
      },
      regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
      regions: {
        "aws-us-gov-global": {
          description: "AWS GovCloud (US) global region"
        },
        "us-gov-east-1": {
          description: "AWS GovCloud (US-East)"
        },
        "us-gov-west-1": {
          description: "AWS GovCloud (US-West)"
        }
      }
    }, {
      id: "aws-iso",
      outputs: {
        dnsSuffix: "c2s.ic.gov",
        dualStackDnsSuffix: "c2s.ic.gov",
        name: "aws-iso",
        supportsDualStack: !1,
        supportsFIPS: !0
      },
      regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
      regions: {
        "aws-iso-global": {
          description: "AWS ISO (US) global region"
        },
        "us-iso-east-1": {
          description: "US ISO East"
        },
        "us-iso-west-1": {
          description: "US ISO WEST"
        }
      }
    }, {
      id: "aws-iso-b",
      outputs: {
        dnsSuffix: "sc2s.sgov.gov",
        dualStackDnsSuffix: "sc2s.sgov.gov",
        name: "aws-iso-b",
        supportsDualStack: !1,
        supportsFIPS: !0
      },
      regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
      regions: {
        "aws-iso-b-global": {
          description: "AWS ISOB (US) global region"
        },
        "us-isob-east-1": {
          description: "US ISOB East (Ohio)"
        }
      }
    }, {
      id: "aws-iso-e",
      outputs: {
        dnsSuffix: "cloud.adc-e.uk",
        dualStackDnsSuffix: "cloud.adc-e.uk",
        name: "aws-iso-e",
        supportsDualStack: !1,
        supportsFIPS: !0
      },
      regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
      regions: {}
    }],
    version: "1.1"
  }
})
// @from(Start 2919644, End 2920913)
aw1 = Y((IL0) => {
  Object.defineProperty(IL0, "__esModule", {
    value: !0
  });
  IL0.getUserAgentPrefix = IL0.useDefaultPartitionInfo = IL0.setPartitionInfo = IL0.partition = void 0;
  var sw5 = x1(),
    oS0 = sw5.__importDefault(sS0()),
    eS0 = oS0.default,
    tS0 = "",
    ow5 = (I) => {
      let {
        partitions: d
      } = eS0;
      for (let Z of d) {
        let {
          regions: C,
          outputs: W
        } = Z;
        for (let [w, B] of Object.entries(C))
          if (w === I) return {
            ...W,
            ...B
          }
      }
      for (let Z of d) {
        let {
          regionRegex: C,
          outputs: W
        } = Z;
        if (new RegExp(C).test(I)) return {
          ...W
        }
      }
      let G = d.find((Z) => Z.id === "aws");
      if (!G) throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
      return {
        ...G.outputs
      }
    };
  IL0.partition = ow5;
  var ew5 = (I, d = "") => {
    eS0 = I, tS0 = d
  };
  IL0.setPartitionInfo = ew5;
  var tw5 = () => {
    IL0.setPartitionInfo(oS0.default, "")
  };
  IL0.useDefaultPartitionInfo = tw5;
  var IB5 = () => tS0;
  IL0.getUserAgentPrefix = IB5
})
// @from(Start 2920919, End 2921057)
WL0 = Y((ZL0) => {
  Object.defineProperty(ZL0, "__esModule", {
    value: !0
  });
  ZL0.debugId = void 0;
  ZL0.debugId = "endpoints"
})
// @from(Start 2921063, End 2921441)
AL0 = Y((wL0) => {
  Object.defineProperty(wL0, "__esModule", {
    value: !0
  });
  wL0.toDebugString = void 0;

  function sw1(I) {
    if (typeof I !== "object" || I == null) return I;
    if ("ref" in I) return `$${sw1(I.ref)}`;
    if ("fn" in I) return `${I.fn}(${(I.argv||[]).map(sw1).join(", ")})`;
    return JSON.stringify(I, null, 2)
  }
  wL0.toDebugString = sw1
})
// @from(Start 2921447, End 2921609)
Jy = Y((hp) => {
  Object.defineProperty(hp, "__esModule", {
    value: !0
  });
  var VL0 = x1();
  VL0.__exportStar(WL0(), hp);
  VL0.__exportStar(AL0(), hp)
})
// @from(Start 2921615, End 2921866)
DL0 = Y((YL0) => {
  Object.defineProperty(YL0, "__esModule", {
    value: !0
  });
  YL0.EndpointError = void 0;
  class XL0 extends Error {
    constructor(I) {
      super(I);
      this.name = "EndpointError"
    }
  }
  YL0.EndpointError = XL0
})
// @from(Start 2921872, End 2921957)
FL0 = Y((HL0) => {
  Object.defineProperty(HL0, "__esModule", {
    value: !0
  })
})
// @from(Start 2921963, End 2922048)
JL0 = Y((gL0) => {
  Object.defineProperty(gL0, "__esModule", {
    value: !0
  })
})
// @from(Start 2922054, End 2922139)
NL0 = Y((KL0) => {
  Object.defineProperty(KL0, "__esModule", {
    value: !0
  })
})
// @from(Start 2922145, End 2922230)
QL0 = Y((zL0) => {
  Object.defineProperty(zL0, "__esModule", {
    value: !0
  })
})
// @from(Start 2922236, End 2922321)
qL0 = Y((fL0) => {
  Object.defineProperty(fL0, "__esModule", {
    value: !0
  })
})
// @from(Start 2922327, End 2922606)
vZ = Y((ZD) => {
  Object.defineProperty(ZD, "__esModule", {
    value: !0
  });
  var sf = x1();
  sf.__exportStar(DL0(), ZD);
  sf.__exportStar(FL0(), ZD);
  sf.__exportStar(JL0(), ZD);
  sf.__exportStar(NL0(), ZD);
  sf.__exportStar(QL0(), ZD);
  sf.__exportStar(qL0(), ZD)
})
// @from(Start 2922612, End 2922944)
ow1 = Y((RL0) => {
  Object.defineProperty(RL0, "__esModule", {
    value: !0
  });
  RL0.isIpAddress = void 0;
  var ZB5 = new RegExp("^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$"),
    CB5 = (I) => ZB5.test(I) || I.startsWith("[") && I.endsWith("]");
  RL0.isIpAddress = CB5
})
// @from(Start 2922950, End 2923343)
tw1 = Y((vL0) => {
  Object.defineProperty(vL0, "__esModule", {
    value: !0
  });
  vL0.isValidHostLabel = void 0;
  var WB5 = new RegExp("^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$"),
    wB5 = (I, d = !1) => {
      if (!d) return WB5.test(I);
      let G = I.split(".");
      for (let Z of G)
        if (!vL0.isValidHostLabel(Z)) return !1;
      return !0
    };
  vL0.isValidHostLabel = wB5
})
// @from(Start 2923349, End 2923922)
ML0 = Y((EL0) => {
  Object.defineProperty(EL0, "__esModule", {
    value: !0
  });
  EL0.isVirtualHostableS3Bucket = void 0;
  var BB5 = ow1(),
    AB5 = tw1(),
    VB5 = (I, d = !1) => {
      if (d) {
        for (let G of I.split("."))
          if (!EL0.isVirtualHostableS3Bucket(G)) return !1;
        return !0
      }
      if (!AB5.isValidHostLabel(I)) return !1;
      if (I.length < 3 || I.length > 63) return !1;
      if (I !== I.toLowerCase()) return !1;
      if (BB5.isIpAddress(I)) return !1;
      return !0
    };
  EL0.isVirtualHostableS3Bucket = VB5
})
// @from(Start 2923928, End 2924408)
yL0 = Y((SL0) => {
  Object.defineProperty(SL0, "__esModule", {
    value: !0
  });
  SL0.parseArn = void 0;
  var XB5 = (I) => {
    let d = I.split(":");
    if (d.length < 6) return null;
    let [G, Z, C, W, w, ...B] = d;
    if (G !== "arn" || Z === "" || C === "" || B[0] === "") return null;
    return {
      partition: Z,
      service: C,
      region: W,
      accountId: w,
      resourceId: B[0].includes("/") ? B[0].split("/") : B
    }
  };
  SL0.parseArn = XB5
})
// @from(Start 2924414, End 2924608)
PL0 = Y((Ky) => {
  Object.defineProperty(Ky, "__esModule", {
    value: !0
  });
  var dB1 = x1();
  dB1.__exportStar(ML0(), Ky);
  dB1.__exportStar(yL0(), Ky);
  dB1.__exportStar(aw1(), Ky)
})
// @from(Start 2924614, End 2924787)
TL0 = Y(($L0) => {
  Object.defineProperty($L0, "__esModule", {
    value: !0
  });
  $L0.booleanEquals = void 0;
  var YB5 = (I, d) => I === d;
  $L0.booleanEquals = YB5
})
// @from(Start 2924793, End 2925491)
bL0 = Y((mL0) => {
  Object.defineProperty(mL0, "__esModule", {
    value: !0
  });
  mL0.getAttrPathList = void 0;
  var OL0 = vZ(),
    _B5 = (I) => {
      let d = I.split("."),
        G = [];
      for (let Z of d) {
        let C = Z.indexOf("[");
        if (C !== -1) {
          if (Z.indexOf("]") !== Z.length - 1) throw new OL0.EndpointError(`Path: '${I}' does not end with ']'`);
          let W = Z.slice(C + 1, -1);
          if (Number.isNaN(parseInt(W))) throw new OL0.EndpointError(`Invalid array index: '${W}' in path: '${I}'`);
          if (C !== 0) G.push(Z.slice(0, C));
          G.push(W)
        } else G.push(Z)
      }
      return G
    };
  mL0.getAttrPathList = _B5
})
// @from(Start 2925497, End 2925933)
kL0 = Y((hL0) => {
  Object.defineProperty(hL0, "__esModule", {
    value: !0
  });
  hL0.getAttr = void 0;
  var DB5 = vZ(),
    HB5 = bL0(),
    FB5 = (I, d) => HB5.getAttrPathList(d).reduce((G, Z) => {
      if (typeof G !== "object") throw new DB5.EndpointError(`Index '${Z}' in '${d}' not found in '${JSON.stringify(I)}'`);
      else if (Array.isArray(G)) return G[parseInt(Z)];
      return G[Z]
    }, I);
  hL0.getAttr = FB5
})
// @from(Start 2925939, End 2926095)
pL0 = Y((xL0) => {
  Object.defineProperty(xL0, "__esModule", {
    value: !0
  });
  xL0.isSet = void 0;
  var gB5 = (I) => I != null;
  xL0.isSet = gB5
})
// @from(Start 2926101, End 2926246)
rL0 = Y((iL0) => {
  Object.defineProperty(iL0, "__esModule", {
    value: !0
  });
  iL0.not = void 0;
  var JB5 = (I) => !I;
  iL0.not = JB5
})
// @from(Start 2926252, End 2926337)
sL0 = Y((aL0) => {
  Object.defineProperty(aL0, "__esModule", {
    value: !0
  })
})
// @from(Start 2926343, End 2926597)
eL0 = Y((oL0) => {
  Object.defineProperty(oL0, "__esModule", {
    value: !0
  });
  oL0.HttpAuthLocation = void 0;
  var KB5;
  (function(I) {
    I.HEADER = "header", I.QUERY = "query"
  })(KB5 = oL0.HttpAuthLocation || (oL0.HttpAuthLocation = {}))
})
// @from(Start 2926603, End 2926688)
Iy0 = Y((tL0) => {
  Object.defineProperty(tL0, "__esModule", {
    value: !0
  })
})
// @from(Start 2926694, End 2926779)
Gy0 = Y((dy0) => {
  Object.defineProperty(dy0, "__esModule", {
    value: !0
  })
})
// @from(Start 2926785, End 2926870)
Cy0 = Y((Zy0) => {
  Object.defineProperty(Zy0, "__esModule", {
    value: !0
  })
})
// @from(Start 2926876, End 2926961)
wy0 = Y((Wy0) => {
  Object.defineProperty(Wy0, "__esModule", {
    value: !0
  })
})
// @from(Start 2926967, End 2927052)
Ay0 = Y((By0) => {
  Object.defineProperty(By0, "__esModule", {
    value: !0
  })
})
// @from(Start 2927058, End 2927143)
Xy0 = Y((Vy0) => {
  Object.defineProperty(Vy0, "__esModule", {
    value: !0
  })
})
// @from(Start 2927149, End 2927343)
Yy0 = Y((Ny) => {
  Object.defineProperty(Ny, "__esModule", {
    value: !0
  });
  var ZB1 = x1();
  ZB1.__exportStar(wy0(), Ny);
  ZB1.__exportStar(Ay0(), Ny);
  ZB1.__exportStar(Xy0(), Ny)
})
// @from(Start 2927349, End 2927434)
Dy0 = Y((_y0) => {
  Object.defineProperty(_y0, "__esModule", {
    value: !0
  })
})
// @from(Start 2927440, End 2927525)
Fy0 = Y((Hy0) => {
  Object.defineProperty(Hy0, "__esModule", {
    value: !0
  })
})
// @from(Start 2927531, End 2927770)
Jy0 = Y((gy0) => {
  Object.defineProperty(gy0, "__esModule", {
    value: !0
  });
  gy0.HostAddressType = void 0;
  var NB5;
  (function(I) {
    I.AAAA = "AAAA", I.A = "A"
  })(NB5 = gy0.HostAddressType || (gy0.HostAddressType = {}))
})
// @from(Start 2927776, End 2928029)
Ny0 = Y((Ky0) => {
  Object.defineProperty(Ky0, "__esModule", {
    value: !0
  });
  Ky0.EndpointURLScheme = void 0;
  var zB5;
  (function(I) {
    I.HTTP = "http", I.HTTPS = "https"
  })(zB5 = Ky0.EndpointURLScheme || (Ky0.EndpointURLScheme = {}))
})
// @from(Start 2928035, End 2928120)
Qy0 = Y((zy0) => {
  Object.defineProperty(zy0, "__esModule", {
    value: !0
  })
})
// @from(Start 2928126, End 2928211)
qy0 = Y((fy0) => {
  Object.defineProperty(fy0, "__esModule", {
    value: !0
  })
})
// @from(Start 2928217, End 2928302)
Uy0 = Y((Ry0) => {
  Object.defineProperty(Ry0, "__esModule", {
    value: !0
  })
})
// @from(Start 2928308, End 2928393)
Ey0 = Y((vy0) => {
  Object.defineProperty(vy0, "__esModule", {
    value: !0
  })
})
// @from(Start 2928399, End 2928484)
Sy0 = Y((My0) => {
  Object.defineProperty(My0, "__esModule", {
    value: !0
  })
})
// @from(Start 2928490, End 2928575)
yy0 = Y((Ly0) => {
  Object.defineProperty(Ly0, "__esModule", {
    value: !0
  })
})
// @from(Start 2928581, End 2928666)
$y0 = Y((Py0) => {
  Object.defineProperty(Py0, "__esModule", {
    value: !0
  })
})
// @from(Start 2928672, End 2928922)
uy0 = Y((XJ) => {
  Object.defineProperty(XJ, "__esModule", {
    value: !0
  });
  var zy = x1();
  zy.__exportStar(Uy0(), XJ);
  zy.__exportStar(Ey0(), XJ);
  zy.__exportStar(Sy0(), XJ);
  zy.__exportStar(yy0(), XJ);
  zy.__exportStar($y0(), XJ)
})
// @from(Start 2928928, End 2929013)
Oy0 = Y((Ty0) => {
  Object.defineProperty(Ty0, "__esModule", {
    value: !0
  })
})
// @from(Start 2929019, End 2929104)
ly0 = Y((my0) => {
  Object.defineProperty(my0, "__esModule", {
    value: !0
  })
})
// @from(Start 2929110, End 2929195)
hy0 = Y((by0) => {
  Object.defineProperty(by0, "__esModule", {
    value: !0
  })
})
// @from(Start 2929201, End 2929286)
ky0 = Y((jy0) => {
  Object.defineProperty(jy0, "__esModule", {
    value: !0
  })
})
// @from(Start 2929292, End 2929377)
cy0 = Y((xy0) => {
  Object.defineProperty(xy0, "__esModule", {
    value: !0
  })
})
// @from(Start 2929383, End 2929468)
iy0 = Y((py0) => {
  Object.defineProperty(py0, "__esModule", {
    value: !0
  })
})
// @from(Start 2929474, End 2929559)
ry0 = Y((ny0) => {
  Object.defineProperty(ny0, "__esModule", {
    value: !0
  })
})
// @from(Start 2929565, End 2929650)
sy0 = Y((ay0) => {
  Object.defineProperty(ay0, "__esModule", {
    value: !0
  })
})
// @from(Start 2929656, End 2929741)
ey0 = Y((oy0) => {
  Object.defineProperty(oy0, "__esModule", {
    value: !0
  })
})
// @from(Start 2929747, End 2929832)
IP0 = Y((ty0) => {
  Object.defineProperty(ty0, "__esModule", {
    value: !0
  })
})
// @from(Start 2929838, End 2929923)
GP0 = Y((dP0) => {
  Object.defineProperty(dP0, "__esModule", {
    value: !0
  })
})
// @from(Start 2929929, End 2930014)
CP0 = Y((ZP0) => {
  Object.defineProperty(ZP0, "__esModule", {
    value: !0
  })
})
// @from(Start 2930020, End 2930325)
wP0 = Y((WP0) => {
  Object.defineProperty(WP0, "__esModule", {
    value: !0
  });
  WP0.RequestHandlerProtocol = void 0;
  var QB5;
  (function(I) {
    I.HTTP_0_9 = "http/0.9", I.HTTP_1_0 = "http/1.0", I.TDS_8_0 = "tds/8.0"
  })(QB5 = WP0.RequestHandlerProtocol || (WP0.RequestHandlerProtocol = {}))
})
// @from(Start 2930331, End 2930416)
AP0 = Y((BP0) => {
  Object.defineProperty(BP0, "__esModule", {
    value: !0
  })
})
// @from(Start 2930422, End 2930507)
XP0 = Y((VP0) => {
  Object.defineProperty(VP0, "__esModule", {
    value: !0
  })
})
// @from(Start 2930513, End 2931453)
YP0 = Y((i5) => {
  Object.defineProperty(i5, "__esModule", {
    value: !0
  });
  var Y9 = x1();
  Y9.__exportStar(sL0(), i5);
  Y9.__exportStar(eL0(), i5);
  Y9.__exportStar(Iy0(), i5);
  Y9.__exportStar(Gy0(), i5);
  Y9.__exportStar(Cy0(), i5);
  Y9.__exportStar(Yy0(), i5);
  Y9.__exportStar(Dy0(), i5);
  Y9.__exportStar(Fy0(), i5);
  Y9.__exportStar(Jy0(), i5);
  Y9.__exportStar(Ny0(), i5);
  Y9.__exportStar(Qy0(), i5);
  Y9.__exportStar(qy0(), i5);
  Y9.__exportStar(uy0(), i5);
  Y9.__exportStar(Oy0(), i5);
  Y9.__exportStar(ly0(), i5);
  Y9.__exportStar(hy0(), i5);
  Y9.__exportStar(ky0(), i5);
  Y9.__exportStar(cy0(), i5);
  Y9.__exportStar(iy0(), i5);
  Y9.__exportStar(ry0(), i5);
  Y9.__exportStar(sy0(), i5);
  Y9.__exportStar(ey0(), i5);
  Y9.__exportStar(IP0(), i5);
  Y9.__exportStar(GP0(), i5);
  Y9.__exportStar(CP0(), i5);
  Y9.__exportStar(wP0(), i5);
  Y9.__exportStar(AP0(), i5);
  Y9.__exportStar(XP0(), i5)
})
// @from(Start 2931459, End 2933016)
HP0 = Y((_P0) => {
  Object.defineProperty(_P0, "__esModule", {
    value: !0
  });
  _P0.parseURL = void 0;
  var AB1 = YP0(),
    fB5 = ow1(),
    BB1 = {
      [AB1.EndpointURLScheme.HTTP]: 80,
      [AB1.EndpointURLScheme.HTTPS]: 443
    },
    qB5 = (I) => {
      let d = (() => {
        try {
          if (I instanceof URL) return I;
          if (typeof I === "object" && "hostname" in I) {
            let {
              hostname: F,
              port: g,
              protocol: J = "",
              path: K = "",
              query: Q = {}
            } = I, E = new URL(`${J}//${F}${g?`:${g}`:""}${K}`);
            return E.search = Object.entries(Q).map(([S, P]) => `${S}=${P}`).join("&"), E
          }
          return new URL(I)
        } catch (F) {
          return null
        }
      })();
      if (!d) return console.error(`Unable to parse ${JSON.stringify(I)} as a whatwg URL.`), null;
      let G = d.href,
        {
          host: Z,
          hostname: C,
          pathname: W,
          protocol: w,
          search: B
        } = d;
      if (B) return null;
      let A = w.slice(0, -1);
      if (!Object.values(AB1.EndpointURLScheme).includes(A)) return null;
      let V = fB5.isIpAddress(C),
        X = G.includes(`${Z}:${BB1[A]}`) || typeof I === "string" && I.includes(`${Z}:${BB1[A]}`),
        _ = `${Z}${X?`:${BB1[A]}`:""}`;
      return {
        scheme: A,
        authority: _,
        path: W,
        normalizedPath: W.endsWith("/") ? W : `${W}/`,
        isIp: V
      }
    };
  _P0.parseURL = qB5
})
// @from(Start 2933022, End 2933193)
JP0 = Y((FP0) => {
  Object.defineProperty(FP0, "__esModule", {
    value: !0
  });
  FP0.stringEquals = void 0;
  var RB5 = (I, d) => I === d;
  FP0.stringEquals = RB5
})
// @from(Start 2933199, End 2933502)
zP0 = Y((KP0) => {
  Object.defineProperty(KP0, "__esModule", {
    value: !0
  });
  KP0.substring = void 0;
  var UB5 = (I, d, G, Z) => {
    if (d >= G || I.length < G) return null;
    if (!Z) return I.substring(d, G);
    return I.substring(I.length - G, I.length - d)
  };
  KP0.substring = UB5
})
// @from(Start 2933508, End 2933761)
qP0 = Y((QP0) => {
  Object.defineProperty(QP0, "__esModule", {
    value: !0
  });
  QP0.uriEncode = void 0;
  var vB5 = (I) => encodeURIComponent(I).replace(/[!*'()]/g, (d) => `%${d.charCodeAt(0).toString(16).toUpperCase()}`);
  QP0.uriEncode = vB5
})
// @from(Start 2933767, End 2934191)
VB1 = Y((pC) => {
  Object.defineProperty(pC, "__esModule", {
    value: !0
  });
  pC.aws = void 0;
  var wB = x1();
  pC.aws = wB.__importStar(PL0());
  wB.__exportStar(TL0(), pC);
  wB.__exportStar(kL0(), pC);
  wB.__exportStar(pL0(), pC);
  wB.__exportStar(tw1(), pC);
  wB.__exportStar(rL0(), pC);
  wB.__exportStar(HP0(), pC);
  wB.__exportStar(JP0(), pC);
  wB.__exportStar(zP0(), pC);
  wB.__exportStar(qP0(), pC)
})
// @from(Start 2934197, End 2935116)
XB1 = Y((UP0) => {
  Object.defineProperty(UP0, "__esModule", {
    value: !0
  });
  UP0.evaluateTemplate = void 0;
  var EB5 = VB1(),
    MB5 = (I, d) => {
      let G = [],
        Z = {
          ...d.endpointParams,
          ...d.referenceRecord
        },
        C = 0;
      while (C < I.length) {
        let W = I.indexOf("{", C);
        if (W === -1) {
          G.push(I.slice(C));
          break
        }
        G.push(I.slice(C, W));
        let w = I.indexOf("}", W);
        if (w === -1) {
          G.push(I.slice(W));
          break
        }
        if (I[W + 1] === "{" && I[w + 1] === "}") G.push(I.slice(W + 1, w)), C = w + 2;
        let B = I.substring(W + 1, w);
        if (B.includes("#")) {
          let [A, V] = B.split("#");
          G.push(EB5.getAttr(Z[A], V))
        } else G.push(Z[B]);
        C = w + 1
      }
      return G.join("")
    };
  UP0.evaluateTemplate = MB5
})
// @from(Start 2935122, End 2935393)
SP0 = Y((EP0) => {
  Object.defineProperty(EP0, "__esModule", {
    value: !0
  });
  EP0.getReferenceValue = void 0;
  var SB5 = ({
    ref: I
  }, d) => {
    return {
      ...d.endpointParams,
      ...d.referenceRecord
    } [I]
  };
  EP0.getReferenceValue = SB5
})
// @from(Start 2935399, End 2935927)
Qy = Y((LP0) => {
  Object.defineProperty(LP0, "__esModule", {
    value: !0
  });
  LP0.evaluateExpression = void 0;
  var LB5 = vZ(),
    yB5 = YB1(),
    PB5 = XB1(),
    $B5 = SP0(),
    uB5 = (I, d, G) => {
      if (typeof I === "string") return PB5.evaluateTemplate(I, G);
      else if (I.fn) return yB5.callFunction(I, G);
      else if (I.ref) return $B5.getReferenceValue(I, G);
      throw new LB5.EndpointError(`'${d}': ${String(I)} is not a string, function or reference.`)
    };
  LP0.evaluateExpression = uB5
})
// @from(Start 2935933, End 2936376)
YB1 = Y((PP0) => {
  Object.defineProperty(PP0, "__esModule", {
    value: !0
  });
  PP0.callFunction = void 0;
  var TB5 = x1(),
    OB5 = TB5.__importStar(VB1()),
    mB5 = Qy(),
    lB5 = ({
      fn: I,
      argv: d
    }, G) => {
      let Z = d.map((C) => ["boolean", "number"].includes(typeof C) ? C : mB5.evaluateExpression(C, "arg", G));
      return I.split(".").reduce((C, W) => C[W], OB5)(...Z)
    };
  PP0.callFunction = lB5
})
// @from(Start 2936382, End 2937179)
OP0 = Y((uP0) => {
  Object.defineProperty(uP0, "__esModule", {
    value: !0
  });
  uP0.evaluateCondition = void 0;
  var _B1 = Jy(),
    bB5 = vZ(),
    hB5 = YB1(),
    jB5 = ({
      assign: I,
      ...d
    }, G) => {
      var Z, C;
      if (I && I in G.referenceRecord) throw new bB5.EndpointError(`'${I}' is already defined in Reference Record.`);
      let W = hB5.callFunction(d, G);
      return (C = (Z = G.logger) === null || Z === void 0 ? void 0 : Z.debug) === null || C === void 0 || C.call(Z, _B1.debugId, `evaluateCondition: ${_B1.toDebugString(d)} = ${_B1.toDebugString(W)}`), {
        result: W === "" ? !0 : !!W,
        ...I != null && {
          toAssign: {
            name: I,
            value: W
          }
        }
      }
    };
  uP0.evaluateCondition = jB5
})
// @from(Start 2937185, End 2938020)
jp = Y((lP0) => {
  Object.defineProperty(lP0, "__esModule", {
    value: !0
  });
  lP0.evaluateConditions = void 0;
  var mP0 = Jy(),
    kB5 = OP0(),
    xB5 = (I = [], d) => {
      var G, Z;
      let C = {};
      for (let W of I) {
        let {
          result: w,
          toAssign: B
        } = kB5.evaluateCondition(W, {
          ...d,
          referenceRecord: {
            ...d.referenceRecord,
            ...C
          }
        });
        if (!w) return {
          result: w
        };
        if (B) C[B.name] = B.value, (Z = (G = d.logger) === null || G === void 0 ? void 0 : G.debug) === null || Z === void 0 || Z.call(G, mP0.debugId, `assign: ${B.name} := ${mP0.toDebugString(B.value)}`)
      }
      return {
        result: !0,
        referenceRecord: C
      }
    };
  lP0.evaluateConditions = xB5
})
// @from(Start 2938026, End 2938530)
kP0 = Y((hP0) => {
  Object.defineProperty(hP0, "__esModule", {
    value: !0
  });
  hP0.getEndpointHeaders = void 0;
  var cB5 = vZ(),
    pB5 = Qy(),
    iB5 = (I, d) => Object.entries(I).reduce((G, [Z, C]) => ({
      ...G,
      [Z]: C.map((W) => {
        let w = pB5.evaluateExpression(W, "Header value entry", d);
        if (typeof w !== "string") throw new cB5.EndpointError(`Header '${Z}' value '${w}' is not a string`);
        return w
      })
    }), {});
  hP0.getEndpointHeaders = iB5
})
// @from(Start 2938536, End 2939268)
pP0 = Y((cP0) => {
  Object.defineProperty(cP0, "__esModule", {
    value: !0
  });
  cP0.getEndpointProperty = void 0;
  var xP0 = vZ(),
    nB5 = XB1(),
    rB5 = HB1(),
    aB5 = (I, d) => {
      if (Array.isArray(I)) return I.map((G) => cP0.getEndpointProperty(G, d));
      switch (typeof I) {
        case "string":
          return nB5.evaluateTemplate(I, d);
        case "object":
          if (I === null) throw new xP0.EndpointError(`Unexpected endpoint property: ${I}`);
          return rB5.getEndpointProperties(I, d);
        case "boolean":
          return I;
        default:
          throw new xP0.EndpointError(`Unexpected endpoint property type: ${typeof I}`)
      }
    };
  cP0.getEndpointProperty = aB5
})
// @from(Start 2939274, End 2939580)
HB1 = Y((iP0) => {
  Object.defineProperty(iP0, "__esModule", {
    value: !0
  });
  iP0.getEndpointProperties = void 0;
  var sB5 = pP0(),
    oB5 = (I, d) => Object.entries(I).reduce((G, [Z, C]) => ({
      ...G,
      [Z]: sB5.getEndpointProperty(C, d)
    }), {});
  iP0.getEndpointProperties = oB5
})
// @from(Start 2939586, End 2940101)
sP0 = Y((rP0) => {
  Object.defineProperty(rP0, "__esModule", {
    value: !0
  });
  rP0.getEndpointUrl = void 0;
  var eB5 = vZ(),
    tB5 = Qy(),
    IA5 = (I, d) => {
      let G = tB5.evaluateExpression(I, "Endpoint URL", d);
      if (typeof G === "string") try {
        return new URL(G)
      } catch (Z) {
        throw console.error(`Failed to construct URL with ${G}`, Z), Z
      }
      throw new eB5.EndpointError(`Endpoint URL must be a string, got ${typeof G}`)
    };
  rP0.getEndpointUrl = IA5
})
// @from(Start 2940107, End 2941210)
I$0 = Y((eP0) => {
  Object.defineProperty(eP0, "__esModule", {
    value: !0
  });
  eP0.evaluateEndpointRule = void 0;
  var oP0 = Jy(),
    dA5 = jp(),
    GA5 = kP0(),
    ZA5 = HB1(),
    CA5 = sP0(),
    WA5 = (I, d) => {
      var G, Z;
      let {
        conditions: C,
        endpoint: W
      } = I, {
        result: w,
        referenceRecord: B
      } = dA5.evaluateConditions(C, d);
      if (!w) return;
      let A = {
          ...d,
          referenceRecord: {
            ...d.referenceRecord,
            ...B
          }
        },
        {
          url: V,
          properties: X,
          headers: _
        } = W;
      return (Z = (G = d.logger) === null || G === void 0 ? void 0 : G.debug) === null || Z === void 0 || Z.call(G, oP0.debugId, `Resolving endpoint from template: ${oP0.toDebugString(W)}`), {
        ..._ != null && {
          headers: GA5.getEndpointHeaders(_, A)
        },
        ...X != null && {
          properties: ZA5.getEndpointProperties(X, A)
        },
        url: CA5.getEndpointUrl(V, A)
      }
    };
  eP0.evaluateEndpointRule = WA5
})
// @from(Start 2941216, End 2941799)
Z$0 = Y((d$0) => {
  Object.defineProperty(d$0, "__esModule", {
    value: !0
  });
  d$0.evaluateErrorRule = void 0;
  var wA5 = vZ(),
    BA5 = jp(),
    AA5 = Qy(),
    VA5 = (I, d) => {
      let {
        conditions: G,
        error: Z
      } = I, {
        result: C,
        referenceRecord: W
      } = BA5.evaluateConditions(G, d);
      if (!C) return;
      throw new wA5.EndpointError(AA5.evaluateExpression(Z, "Error", {
        ...d,
        referenceRecord: {
          ...d.referenceRecord,
          ...W
        }
      }))
    };
  d$0.evaluateErrorRule = VA5
})
// @from(Start 2941805, End 2942335)
w$0 = Y((C$0) => {
  Object.defineProperty(C$0, "__esModule", {
    value: !0
  });
  C$0.evaluateTreeRule = void 0;
  var XA5 = jp(),
    YA5 = FB1(),
    _A5 = (I, d) => {
      let {
        conditions: G,
        rules: Z
      } = I, {
        result: C,
        referenceRecord: W
      } = XA5.evaluateConditions(G, d);
      if (!C) return;
      return YA5.evaluateRules(Z, {
        ...d,
        referenceRecord: {
          ...d.referenceRecord,
          ...W
        }
      })
    };
  C$0.evaluateTreeRule = _A5
})
// @from(Start 2942341, End 2943023)
FB1 = Y((A$0) => {
  Object.defineProperty(A$0, "__esModule", {
    value: !0
  });
  A$0.evaluateRules = void 0;
  var B$0 = vZ(),
    DA5 = I$0(),
    HA5 = Z$0(),
    FA5 = w$0(),
    gA5 = (I, d) => {
      for (let G of I)
        if (G.type === "endpoint") {
          let Z = DA5.evaluateEndpointRule(G, d);
          if (Z) return Z
        } else if (G.type === "error") HA5.evaluateErrorRule(G, d);
      else if (G.type === "tree") {
        let Z = FA5.evaluateTreeRule(G, d);
        if (Z) return Z
      } else throw new B$0.EndpointError(`Unknown endpoint rule: ${G}`);
      throw new B$0.EndpointError("Rules evaluation failed")
    };
  A$0.evaluateRules = gA5
})
// @from(Start 2943029, End 2943164)
X$0 = Y((gB1) => {
  Object.defineProperty(gB1, "__esModule", {
    value: !0
  });
  var JA5 = x1();
  JA5.__exportStar(FB1(), gB1)
})
// @from(Start 2943170, End 2944701)
D$0 = Y((Y$0) => {
  Object.defineProperty(Y$0, "__esModule", {
    value: !0
  });
  Y$0.resolveEndpoint = void 0;
  var kp = Jy(),
    KA5 = vZ(),
    NA5 = X$0(),
    zA5 = (I, d) => {
      var G, Z, C, W, w, B;
      let {
        endpointParams: A,
        logger: V
      } = d, {
        parameters: X,
        rules: _
      } = I;
      (Z = (G = d.logger) === null || G === void 0 ? void 0 : G.debug) === null || Z === void 0 || Z.call(G, `${kp.debugId} Initial EndpointParams: ${kp.toDebugString(A)}`);
      let F = Object.entries(X).filter(([, K]) => K.default != null).map(([K, Q]) => [K, Q.default]);
      if (F.length > 0)
        for (let [K, Q] of F) A[K] = (C = A[K]) !== null && C !== void 0 ? C : Q;
      let g = Object.entries(X).filter(([, K]) => K.required).map(([K]) => K);
      for (let K of g)
        if (A[K] == null) throw new KA5.EndpointError(`Missing required parameter: '${K}'`);
      let J = NA5.evaluateRules(_, {
        endpointParams: A,
        logger: V,
        referenceRecord: {}
      });
      if ((W = d.endpointParams) === null || W === void 0 ? void 0 : W.Endpoint) try {
        let K = new URL(d.endpointParams.Endpoint),
          {
            protocol: Q,
            port: E
          } = K;
        J.url.protocol = Q, J.url.port = E
      } catch (K) {}
      return (B = (w = d.logger) === null || w === void 0 ? void 0 : w.debug) === null || B === void 0 || B.call(w, `${kp.debugId} Resolved endpoint: ${kp.toDebugString(J)}`), J
    };
  Y$0.resolveEndpoint = zA5
})
// @from(Start 2944707, End 2944899)
xp = Y((fy) => {
  Object.defineProperty(fy, "__esModule", {
    value: !0
  });
  var JB1 = x1();
  JB1.__exportStar(aw1(), fy);
  JB1.__exportStar(D$0(), fy);
  JB1.__exportStar(vZ(), fy)
})
// @from(Start 2944905, End 2945237)
g$0 = Y((H$0) => {
  Object.defineProperty(H$0, "__esModule", {
    value: !0
  });
  H$0.UA_ESCAPE_REGEX = H$0.SPACE = H$0.X_AMZ_USER_AGENT = H$0.USER_AGENT = void 0;
  H$0.USER_AGENT = "user-agent";
  H$0.X_AMZ_USER_AGENT = "x-amz-user-agent";
  H$0.SPACE = " ";
  H$0.UA_ESCAPE_REGEX = /[^\!\#\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g
})
// @from(Start 2945243, End 2947092)
Q$0 = Y((J$0) => {
  Object.defineProperty(J$0, "__esModule", {
    value: !0
  });
  J$0.getUserAgentPlugin = J$0.getUserAgentMiddlewareOptions = J$0.userAgentMiddleware = void 0;
  var RA5 = J8(),
    UA5 = xp(),
    CD = g$0(),
    vA5 = (I) => (d, G) => async (Z) => {
      var C, W;
      let {
        request: w
      } = Z;
      if (!RA5.HttpRequest.isInstance(w)) return d(Z);
      let {
        headers: B
      } = w, A = ((C = G === null || G === void 0 ? void 0 : G.userAgent) === null || C === void 0 ? void 0 : C.map(KB1)) || [], V = (await I.defaultUserAgentProvider()).map(KB1), X = ((W = I === null || I === void 0 ? void 0 : I.customUserAgent) === null || W === void 0 ? void 0 : W.map(KB1)) || [], _ = UA5.getUserAgentPrefix(), F = (_ ? [_] : []).concat([...V, ...A, ...X]).join(CD.SPACE), g = [...V.filter((J) => J.startsWith("aws-sdk-")), ...X].join(CD.SPACE);
      if (I.runtime !== "browser") {
        if (g) B[CD.X_AMZ_USER_AGENT] = B[CD.X_AMZ_USER_AGENT] ? `${B[CD.USER_AGENT]} ${g}` : g;
        B[CD.USER_AGENT] = F
      } else B[CD.X_AMZ_USER_AGENT] = F;
      return d({
        ...Z,
        request: w
      })
    };
  J$0.userAgentMiddleware = vA5;
  var KB1 = ([I, d]) => {
    let G = I.indexOf("/"),
      Z = I.substring(0, G),
      C = I.substring(G + 1);
    if (Z === "api") C = C.toLowerCase();
    return [Z, C, d].filter((W) => W && W.length > 0).map((W) => W === null || W === void 0 ? void 0 : W.replace(CD.UA_ESCAPE_REGEX, "_")).join("/")
  };
  J$0.getUserAgentMiddlewareOptions = {
    name: "getUserAgentMiddleware",
    step: "build",
    priority: "low",
    tags: ["SET_USER_AGENT", "USER_AGENT"],
    override: !0
  };
  var EA5 = (I) => ({
    applyToStack: (d) => {
      d.add(J$0.userAgentMiddleware(I), J$0.getUserAgentMiddlewareOptions)
    }
  });
  J$0.getUserAgentPlugin = EA5
})
// @from(Start 2947098, End 2947261)
NB1 = Y((cp) => {
  Object.defineProperty(cp, "__esModule", {
    value: !0
  });
  var f$0 = x1();
  f$0.__exportStar(aS0(), cp);
  f$0.__exportStar(Q$0(), cp)
})
// @from(Start 2947267, End 2947692)
U$0 = Y((q$0) => {
  Object.defineProperty(q$0, "__esModule", {
    value: !0
  });
  q$0.resolveClientEndpointParameters = void 0;
  var MA5 = (I) => {
    return {
      ...I,
      useDualstackEndpoint: I.useDualstackEndpoint ?? !1,
      useFipsEndpoint: I.useFipsEndpoint ?? !1,
      useGlobalEndpoint: I.useGlobalEndpoint ?? !1,
      defaultSigningName: "sts"
    }
  };
  q$0.resolveClientEndpointParameters = MA5
})
// @from(Start 2947698, End 2951460)
v$0 = Y((E83, SA5) => {
  SA5.exports = {
    name: "@aws-sdk/client-sts",
    description: "AWS SDK for JavaScript Sts Client for Node.js, Browser and React Native",
    version: "3.341.0",
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
      "@aws-sdk/config-resolver": "3.341.0",
      "@aws-sdk/credential-provider-node": "3.341.0",
      "@aws-sdk/fetch-http-handler": "3.341.0",
      "@aws-sdk/hash-node": "3.341.0",
      "@aws-sdk/invalid-dependency": "3.341.0",
      "@aws-sdk/middleware-content-length": "3.341.0",
      "@aws-sdk/middleware-endpoint": "3.341.0",
      "@aws-sdk/middleware-host-header": "3.341.0",
      "@aws-sdk/middleware-logger": "3.341.0",
      "@aws-sdk/middleware-recursion-detection": "3.341.0",
      "@aws-sdk/middleware-retry": "3.341.0",
      "@aws-sdk/middleware-sdk-sts": "3.341.0",
      "@aws-sdk/middleware-serde": "3.341.0",
      "@aws-sdk/middleware-signing": "3.341.0",
      "@aws-sdk/middleware-stack": "3.341.0",
      "@aws-sdk/middleware-user-agent": "3.341.0",
      "@aws-sdk/node-config-provider": "3.341.0",
      "@aws-sdk/node-http-handler": "3.341.0",
      "@aws-sdk/smithy-client": "3.341.0",
      "@aws-sdk/types": "3.341.0",
      "@aws-sdk/url-parser": "3.341.0",
      "@aws-sdk/util-base64": "3.310.0",
      "@aws-sdk/util-body-length-browser": "3.310.0",
      "@aws-sdk/util-body-length-node": "3.310.0",
      "@aws-sdk/util-defaults-mode-browser": "3.341.0",
      "@aws-sdk/util-defaults-mode-node": "3.341.0",
      "@aws-sdk/util-endpoints": "3.341.0",
      "@aws-sdk/util-retry": "3.341.0",
      "@aws-sdk/util-user-agent-browser": "3.341.0",
      "@aws-sdk/util-user-agent-node": "3.341.0",
      "@aws-sdk/util-utf8": "3.310.0",
      "@smithy/protocol-http": "^1.0.1",
      "@smithy/types": "^1.0.0",
      "fast-xml-parser": "4.1.2",
      tslib: "^2.5.0"
    },
    devDependencies: {
      "@aws-sdk/service-client-documentation-generator": "3.310.0",
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
// @from(Start 2951466, End 2951942)
pp = Y((QB1) => {
  Object.defineProperty(QB1, "__esModule", {
    value: !0
  });
  QB1.STSServiceException = QB1.__ServiceException = void 0;
  var E$0 = v0();
  Object.defineProperty(QB1, "__ServiceException", {
    enumerable: !0,
    get: function() {
      return E$0.ServiceException
    }
  });
  class zB1 extends E$0.ServiceException {
    constructor(I) {
      super(I);
      Object.setPrototypeOf(this, zB1.prototype)
    }
  }
  QB1.STSServiceException = zB1
})
// @from(Start 2951948, End 2956997)
wD = Y((S$0) => {
  Object.defineProperty(S$0, "__esModule", {
    value: !0
  });
  S$0.GetSessionTokenResponseFilterSensitiveLog = S$0.GetFederationTokenResponseFilterSensitiveLog = S$0.AssumeRoleWithWebIdentityResponseFilterSensitiveLog = S$0.AssumeRoleWithWebIdentityRequestFilterSensitiveLog = S$0.AssumeRoleWithSAMLResponseFilterSensitiveLog = S$0.AssumeRoleWithSAMLRequestFilterSensitiveLog = S$0.AssumeRoleResponseFilterSensitiveLog = S$0.CredentialsFilterSensitiveLog = S$0.InvalidAuthorizationMessageException = S$0.IDPCommunicationErrorException = S$0.InvalidIdentityTokenException = S$0.IDPRejectedClaimException = S$0.RegionDisabledException = S$0.PackedPolicyTooLargeException = S$0.MalformedPolicyDocumentException = S$0.ExpiredTokenException = void 0;
  var fB1 = v0(),
    WD = pp();
  class qB1 extends WD.STSServiceException {
    constructor(I) {
      super({
        name: "ExpiredTokenException",
        $fault: "client",
        ...I
      });
      this.name = "ExpiredTokenException", this.$fault = "client", Object.setPrototypeOf(this, qB1.prototype)
    }
  }
  S$0.ExpiredTokenException = qB1;
  class RB1 extends WD.STSServiceException {
    constructor(I) {
      super({
        name: "MalformedPolicyDocumentException",
        $fault: "client",
        ...I
      });
      this.name = "MalformedPolicyDocumentException", this.$fault = "client", Object.setPrototypeOf(this, RB1.prototype)
    }
  }
  S$0.MalformedPolicyDocumentException = RB1;
  class UB1 extends WD.STSServiceException {
    constructor(I) {
      super({
        name: "PackedPolicyTooLargeException",
        $fault: "client",
        ...I
      });
      this.name = "PackedPolicyTooLargeException", this.$fault = "client", Object.setPrototypeOf(this, UB1.prototype)
    }
  }
  S$0.PackedPolicyTooLargeException = UB1;
  class vB1 extends WD.STSServiceException {
    constructor(I) {
      super({
        name: "RegionDisabledException",
        $fault: "client",
        ...I
      });
      this.name = "RegionDisabledException", this.$fault = "client", Object.setPrototypeOf(this, vB1.prototype)
    }
  }
  S$0.RegionDisabledException = vB1;
  class EB1 extends WD.STSServiceException {
    constructor(I) {
      super({
        name: "IDPRejectedClaimException",
        $fault: "client",
        ...I
      });
      this.name = "IDPRejectedClaimException", this.$fault = "client", Object.setPrototypeOf(this, EB1.prototype)
    }
  }
  S$0.IDPRejectedClaimException = EB1;
  class MB1 extends WD.STSServiceException {
    constructor(I) {
      super({
        name: "InvalidIdentityTokenException",
        $fault: "client",
        ...I
      });
      this.name = "InvalidIdentityTokenException", this.$fault = "client", Object.setPrototypeOf(this, MB1.prototype)
    }
  }
  S$0.InvalidIdentityTokenException = MB1;
  class SB1 extends WD.STSServiceException {
    constructor(I) {
      super({
        name: "IDPCommunicationErrorException",
        $fault: "client",
        ...I
      });
      this.name = "IDPCommunicationErrorException", this.$fault = "client", Object.setPrototypeOf(this, SB1.prototype)
    }
  }
  S$0.IDPCommunicationErrorException = SB1;
  class LB1 extends WD.STSServiceException {
    constructor(I) {
      super({
        name: "InvalidAuthorizationMessageException",
        $fault: "client",
        ...I
      });
      this.name = "InvalidAuthorizationMessageException", this.$fault = "client", Object.setPrototypeOf(this, LB1.prototype)
    }
  }
  S$0.InvalidAuthorizationMessageException = LB1;
  var LA5 = (I) => ({
    ...I,
    ...I.SecretAccessKey && {
      SecretAccessKey: fB1.SENSITIVE_STRING
    }
  });
  S$0.CredentialsFilterSensitiveLog = LA5;
  var yA5 = (I) => ({
    ...I,
    ...I.Credentials && {
      Credentials: S$0.CredentialsFilterSensitiveLog(I.Credentials)
    }
  });
  S$0.AssumeRoleResponseFilterSensitiveLog = yA5;
  var PA5 = (I) => ({
    ...I,
    ...I.SAMLAssertion && {
      SAMLAssertion: fB1.SENSITIVE_STRING
    }
  });
  S$0.AssumeRoleWithSAMLRequestFilterSensitiveLog = PA5;
  var $A5 = (I) => ({
    ...I,
    ...I.Credentials && {
      Credentials: S$0.CredentialsFilterSensitiveLog(I.Credentials)
    }
  });
  S$0.AssumeRoleWithSAMLResponseFilterSensitiveLog = $A5;
  var uA5 = (I) => ({
    ...I,
    ...I.WebIdentityToken && {
      WebIdentityToken: fB1.SENSITIVE_STRING
    }
  });
  S$0.AssumeRoleWithWebIdentityRequestFilterSensitiveLog = uA5;
  var TA5 = (I) => ({
    ...I,
    ...I.Credentials && {
      Credentials: S$0.CredentialsFilterSensitiveLog(I.Credentials)
    }
  });
  S$0.AssumeRoleWithWebIdentityResponseFilterSensitiveLog = TA5;
  var OA5 = (I) => ({
    ...I,
    ...I.Credentials && {
      Credentials: S$0.CredentialsFilterSensitiveLog(I.Credentials)
    }
  });
  S$0.GetFederationTokenResponseFilterSensitiveLog = OA5;
  var mA5 = (I) => ({
    ...I,
    ...I.Credentials && {
      Credentials: S$0.CredentialsFilterSensitiveLog(I.Credentials)
    }
  });
  S$0.GetSessionTokenResponseFilterSensitiveLog = mA5
})
// @from(Start 2957003, End 2957088)
P$0 = Y((y$0) => {
  Object.defineProperty(y$0, "__esModule", {
    value: !0
  })
})
// @from(Start 2957094, End 2957348)
u$0 = Y(($$0) => {
  Object.defineProperty($$0, "__esModule", {
    value: !0
  });
  $$0.HttpAuthLocation = void 0;
  var eA5;
  (function(I) {
    I.HEADER = "header", I.QUERY = "query"
  })(eA5 = $$0.HttpAuthLocation || ($$0.HttpAuthLocation = {}))
})
// @from(Start 2957354, End 2957439)
O$0 = Y((T$0) => {
  Object.defineProperty(T$0, "__esModule", {
    value: !0
  })
})
// @from(Start 2957445, End 2957530)
l$0 = Y((m$0) => {
  Object.defineProperty(m$0, "__esModule", {
    value: !0
  })
})
// @from(Start 2957536, End 2957621)
h$0 = Y((b$0) => {
  Object.defineProperty(b$0, "__esModule", {
    value: !0
  })
})
// @from(Start 2957627, End 2957712)
k$0 = Y((j$0) => {
  Object.defineProperty(j$0, "__esModule", {
    value: !0
  })
})
// @from(Start 2957718, End 2957803)
c$0 = Y((x$0) => {
  Object.defineProperty(x$0, "__esModule", {
    value: !0
  })
})
// @from(Start 2957809, End 2957894)
i$0 = Y((p$0) => {
  Object.defineProperty(p$0, "__esModule", {
    value: !0
  })
})
// @from(Start 2957900, End 2957985)
r$0 = Y((n$0) => {
  Object.defineProperty(n$0, "__esModule", {
    value: !0
  })
})
// @from(Start 2957991, End 2958185)
a$0 = Y((qy) => {
  Object.defineProperty(qy, "__esModule", {
    value: !0
  });
  var PB1 = x1();
  PB1.__exportStar(c$0(), qy);
  PB1.__exportStar(i$0(), qy);
  PB1.__exportStar(r$0(), qy)
})
// @from(Start 2958191, End 2958276)
o$0 = Y((s$0) => {
  Object.defineProperty(s$0, "__esModule", {
    value: !0
  })
})
// @from(Start 2958282, End 2958367)
t$0 = Y((e$0) => {
  Object.defineProperty(e$0, "__esModule", {
    value: !0
  })
})
// @from(Start 2958373, End 2958626)
du0 = Y((Iu0) => {
  Object.defineProperty(Iu0, "__esModule", {
    value: !0
  });
  Iu0.EndpointURLScheme = void 0;
  var tA5;
  (function(I) {
    I.HTTP = "http", I.HTTPS = "https"
  })(tA5 = Iu0.EndpointURLScheme || (Iu0.EndpointURLScheme = {}))
})
// @from(Start 2958632, End 2958717)
Zu0 = Y((Gu0) => {
  Object.defineProperty(Gu0, "__esModule", {
    value: !0
  })
})
// @from(Start 2958723, End 2958808)
Wu0 = Y((Cu0) => {
  Object.defineProperty(Cu0, "__esModule", {
    value: !0
  })
})
// @from(Start 2958814, End 2958899)
Bu0 = Y((wu0) => {
  Object.defineProperty(wu0, "__esModule", {
    value: !0
  })
})
// @from(Start 2958905, End 2958990)
Vu0 = Y((Au0) => {
  Object.defineProperty(Au0, "__esModule", {
    value: !0
  })
})
// @from(Start 2958996, End 2959081)
Yu0 = Y((Xu0) => {
  Object.defineProperty(Xu0, "__esModule", {
    value: !0
  })
})
// @from(Start 2959087, End 2959337)
_u0 = Y((YJ) => {
  Object.defineProperty(YJ, "__esModule", {
    value: !0
  });
  var Ry = x1();
  Ry.__exportStar(Zu0(), YJ);
  Ry.__exportStar(Wu0(), YJ);
  Ry.__exportStar(Bu0(), YJ);
  Ry.__exportStar(Vu0(), YJ);
  Ry.__exportStar(Yu0(), YJ)
})
// @from(Start 2959343, End 2959428)
Hu0 = Y((Du0) => {
  Object.defineProperty(Du0, "__esModule", {
    value: !0
  })
})
// @from(Start 2959434, End 2959697)
gu0 = Y((Fu0) => {
  Object.defineProperty(Fu0, "__esModule", {
    value: !0
  });
  Fu0.FieldPosition = void 0;
  var IV5;
  (function(I) {
    I[I.HEADER = 0] = "HEADER", I[I.TRAILER = 1] = "TRAILER"
  })(IV5 = Fu0.FieldPosition || (Fu0.FieldPosition = {}))
})
// @from(Start 2959703, End 2959788)
Ku0 = Y((Ju0) => {
  Object.defineProperty(Ju0, "__esModule", {
    value: !0
  })
})
// @from(Start 2959794, End 2959879)
zu0 = Y((Nu0) => {
  Object.defineProperty(Nu0, "__esModule", {
    value: !0
  })
})
// @from(Start 2959885, End 2960048)
fu0 = Y((ip) => {
  Object.defineProperty(ip, "__esModule", {
    value: !0
  });
  var Qu0 = x1();
  Qu0.__exportStar(Ku0(), ip);
  Qu0.__exportStar(zu0(), ip)
})
// @from(Start 2960054, End 2960139)
Ru0 = Y((qu0) => {
  Object.defineProperty(qu0, "__esModule", {
    value: !0
  })
})
// @from(Start 2960145, End 2960230)
vu0 = Y((Uu0) => {
  Object.defineProperty(Uu0, "__esModule", {
    value: !0
  })
})
// @from(Start 2960236, End 2960321)
Mu0 = Y((Eu0) => {
  Object.defineProperty(Eu0, "__esModule", {
    value: !0
  })
})
// @from(Start 2960327, End 2960412)
Lu0 = Y((Su0) => {
  Object.defineProperty(Su0, "__esModule", {
    value: !0
  })
})
// @from(Start 2960418, End 2960503)
Pu0 = Y((yu0) => {
  Object.defineProperty(yu0, "__esModule", {
    value: !0
  })
})
// @from(Start 2960509, End 2960594)
uu0 = Y(($u0) => {
  Object.defineProperty($u0, "__esModule", {
    value: !0
  })
})
// @from(Start 2960600, End 2960685)
Ou0 = Y((Tu0) => {
  Object.defineProperty(Tu0, "__esModule", {
    value: !0
  })
})
// @from(Start 2960691, End 2960776)
lu0 = Y((mu0) => {
  Object.defineProperty(mu0, "__esModule", {
    value: !0
  })
})
// @from(Start 2960782, End 2960867)
hu0 = Y((bu0) => {
  Object.defineProperty(bu0, "__esModule", {
    value: !0
  })
})
// @from(Start 2960873, End 2960958)
ku0 = Y((ju0) => {
  Object.defineProperty(ju0, "__esModule", {
    value: !0
  })
})
// @from(Start 2960964, End 2961049)
cu0 = Y((xu0) => {
  Object.defineProperty(xu0, "__esModule", {
    value: !0
  })
})
// @from(Start 2961055, End 2961140)
iu0 = Y((pu0) => {
  Object.defineProperty(pu0, "__esModule", {
    value: !0
  })
})
// @from(Start 2961146, End 2961231)
ru0 = Y((nu0) => {
  Object.defineProperty(nu0, "__esModule", {
    value: !0
  })
})
// @from(Start 2961237, End 2961542)
su0 = Y((au0) => {
  Object.defineProperty(au0, "__esModule", {
    value: !0
  });
  au0.RequestHandlerProtocol = void 0;
  var dV5;
  (function(I) {
    I.HTTP_0_9 = "http/0.9", I.HTTP_1_0 = "http/1.0", I.TDS_8_0 = "tds/8.0"
  })(dV5 = au0.RequestHandlerProtocol || (au0.RequestHandlerProtocol = {}))
})
// @from(Start 2961548, End 2961633)
eu0 = Y((ou0) => {
  Object.defineProperty(ou0, "__esModule", {
    value: !0
  })
})
// @from(Start 2961639, End 2961724)
IT0 = Y((tu0) => {
  Object.defineProperty(tu0, "__esModule", {
    value: !0
  })
})
// @from(Start 2961730, End 2961815)
GT0 = Y((dT0) => {
  Object.defineProperty(dT0, "__esModule", {
    value: !0
  })
})
// @from(Start 2961821, End 2961906)
CT0 = Y((ZT0) => {
  Object.defineProperty(ZT0, "__esModule", {
    value: !0
  })
})
// @from(Start 2961912, End 2961997)
wT0 = Y((WT0) => {
  Object.defineProperty(WT0, "__esModule", {
    value: !0
  })
})
// @from(Start 2962003, End 2963093)
BT0 = Y((V5) => {
  Object.defineProperty(V5, "__esModule", {
    value: !0
  });
  var q5 = x1();
  q5.__exportStar(P$0(), V5);
  q5.__exportStar(u$0(), V5);
  q5.__exportStar(O$0(), V5);
  q5.__exportStar(l$0(), V5);
  q5.__exportStar(h$0(), V5);
  q5.__exportStar(k$0(), V5);
  q5.__exportStar(a$0(), V5);
  q5.__exportStar(o$0(), V5);
  q5.__exportStar(t$0(), V5);
  q5.__exportStar(du0(), V5);
  q5.__exportStar(_u0(), V5);
  q5.__exportStar(Hu0(), V5);
  q5.__exportStar(gu0(), V5);
  q5.__exportStar(fu0(), V5);
  q5.__exportStar(Ru0(), V5);
  q5.__exportStar(vu0(), V5);
  q5.__exportStar(Mu0(), V5);
  q5.__exportStar(Lu0(), V5);
  q5.__exportStar(Pu0(), V5);
  q5.__exportStar(uu0(), V5);
  q5.__exportStar(Ou0(), V5);
  q5.__exportStar(lu0(), V5);
  q5.__exportStar(hu0(), V5);
  q5.__exportStar(ku0(), V5);
  q5.__exportStar(cu0(), V5);
  q5.__exportStar(iu0(), V5);
  q5.__exportStar(ru0(), V5);
  q5.__exportStar(su0(), V5);
  q5.__exportStar(eu0(), V5);
  q5.__exportStar(IT0(), V5);
  q5.__exportStar(GT0(), V5);
  q5.__exportStar(CT0(), V5);
  q5.__exportStar(wT0(), V5)
})
// @from(Start 2963099, End 2963752)
YT0 = Y((VT0) => {
  Object.defineProperty(VT0, "__esModule", {
    value: !0
  });
  VT0.Field = void 0;
  var GV5 = BT0();
  class AT0 {
    constructor({
      name: I,
      kind: d = GV5.FieldPosition.HEADER,
      values: G = []
    }) {
      this.name = I, this.kind = d, this.values = G
    }
    add(I) {
      this.values.push(I)
    }
    set(I) {
      this.values = I
    }
    remove(I) {
      this.values = this.values.filter((d) => d !== I)
    }
    toString() {
      return this.values.map((I) => I.includes(",") || I.includes(" ") ? `"${I}"` : I).join(", ")
    }
    get() {
      return this.values
    }
  }
  VT0.Field = AT0
})
// @from(Start 2963758, End 2964367)
FT0 = Y((DT0) => {
  Object.defineProperty(DT0, "__esModule", {
    value: !0
  });
  DT0.Fields = void 0;
  class _T0 {
    constructor({
      fields: I = [],
      encoding: d = "utf-8"
    }) {
      this.entries = {}, I.forEach(this.setField.bind(this)), this.encoding = d
    }
    setField(I) {
      this.entries[I.name.toLowerCase()] = I
    }
    getField(I) {
      return this.entries[I.toLowerCase()]
    }
    removeField(I) {
      delete this.entries[I.toLowerCase()]
    }
    getByType(I) {
      return Object.values(this.entries).filter((d) => d.kind === I)
    }
  }
  DT0.Fields = _T0
})
// @from(Start 2964373, End 2964458)
JT0 = Y((gT0) => {
  Object.defineProperty(gT0, "__esModule", {
    value: !0
  })
})
// @from(Start 2964464, End 2965676)
zT0 = Y((KT0) => {
  Object.defineProperty(KT0, "__esModule", {
    value: !0
  });
  KT0.HttpRequest = void 0;
  class OB1 {
    constructor(I) {
      this.method = I.method || "GET", this.hostname = I.hostname || "localhost", this.port = I.port, this.query = I.query || {}, this.headers = I.headers || {}, this.body = I.body, this.protocol = I.protocol ? I.protocol.slice(-1) !== ":" ? `${I.protocol}:` : I.protocol : "https:", this.path = I.path ? I.path.charAt(0) !== "/" ? `/${I.path}` : I.path : "/", this.username = I.username, this.password = I.password, this.fragment = I.fragment
    }
    static isInstance(I) {
      if (!I) return !1;
      let d = I;
      return "method" in d && "protocol" in d && "hostname" in d && "path" in d && typeof d.query === "object" && typeof d.headers === "object"
    }
    clone() {
      let I = new OB1({
        ...this,
        headers: {
          ...this.headers
        }
      });
      if (I.query) I.query = ZV5(I.query);
      return I
    }
  }
  KT0.HttpRequest = OB1;

  function ZV5(I) {
    return Object.keys(I).reduce((d, G) => {
      let Z = I[G];
      return {
        ...d,
        [G]: Array.isArray(Z) ? [...Z] : Z
      }
    }, {})
  }
})
// @from(Start 2965682, End 2966134)
RT0 = Y((fT0) => {
  Object.defineProperty(fT0, "__esModule", {
    value: !0
  });
  fT0.HttpResponse = void 0;
  class QT0 {
    constructor(I) {
      this.statusCode = I.statusCode, this.reason = I.reason, this.headers = I.headers || {}, this.body = I.body
    }
    static isInstance(I) {
      if (!I) return !1;
      let d = I;
      return typeof d.statusCode === "number" && typeof d.headers === "object"
    }
  }
  fT0.HttpResponse = QT0
})
// @from(Start 2966140, End 2966364)
ET0 = Y((UT0) => {
  Object.defineProperty(UT0, "__esModule", {
    value: !0
  });
  UT0.isValidHostname = void 0;

  function CV5(I) {
    return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(I)
  }
  UT0.isValidHostname = CV5
})
// @from(Start 2966370, End 2966455)
ST0 = Y((MT0) => {
  Object.defineProperty(MT0, "__esModule", {
    value: !0
  })
})
// @from(Start 2966461, End 2966771)
mB1 = Y((LV) => {
  Object.defineProperty(LV, "__esModule", {
    value: !0
  });
  var _J = x1();
  _J.__exportStar(YT0(), LV);
  _J.__exportStar(FT0(), LV);
  _J.__exportStar(JT0(), LV);
  _J.__exportStar(zT0(), LV);
  _J.__exportStar(RT0(), LV);
  _J.__exportStar(ET0(), LV);
  _J.__exportStar(ST0(), LV)
})
// @from(Start 2966777, End 2968215)
lB1 = Y((VV5) => {
  var WV5 = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
    LT0 = "[:A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][" + WV5 + "]*",
    wV5 = new RegExp("^" + LT0 + "$"),
    BV5 = function(I, d) {
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
    AV5 = function(I) {
      let d = wV5.exec(I);
      return !(d === null || typeof d === "undefined")
    };
  VV5.isExist = function(I) {
    return typeof I !== "undefined"
  };
  VV5.isEmptyObject = function(I) {
    return Object.keys(I).length === 0
  };
  VV5.merge = function(I, d, G) {
    if (d) {
      let Z = Object.keys(d),
        C = Z.length;
      for (let W = 0; W < C; W++)
        if (G === "strict") I[Z[W]] = [d[Z[W]]];
        else I[Z[W]] = d[Z[W]]
    }
  };
  VV5.getValue = function(I) {
    if (VV5.isExist(I)) return I;
    else return ""
  };
  VV5.isName = AV5;
  VV5.getAllMatches = BV5;
  VV5.nameRegexp = LT0
})
// @from(Start 2968221, End 2975581)
hB1 = Y((UV5) => {
  var bB1 = lB1(),
    gV5 = {
      allowBooleanAttributes: !1,
      unpairedTags: []
    };
  UV5.validate = function(I, d) {
    d = Object.assign({}, gV5, d);
    let G = [],
      Z = !1,
      C = !1;
    if (I[0] === "\uFEFF") I = I.substr(1);
    for (let W = 0; W < I.length; W++)
      if (I[W] === "<" && I[W + 1] === "?") {
        if (W += 2, W = $T0(I, W), W.err) return W
      } else if (I[W] === "<") {
      let w = W;
      if (W++, I[W] === "!") {
        W = uT0(I, W);
        continue
      } else {
        let B = !1;
        if (I[W] === "/") B = !0, W++;
        let A = "";
        for (; W < I.length && I[W] !== ">" && I[W] !== " " && I[W] !== "\t" && I[W] !== `
` && I[W] !== "\r"; W++) A += I[W];
        if (A = A.trim(), A[A.length - 1] === "/") A = A.substring(0, A.length - 1), W--;
        if (!RV5(A)) {
          let _;
          if (A.trim().length === 0) _ = "Invalid space after '<'.";
          else _ = "Tag '" + A + "' is an invalid name.";
          return v6("InvalidTag", _, Bd(I, W))
        }
        let V = NV5(I, W);
        if (V === !1) return v6("InvalidAttr", "Attributes for '" + A + "' have open quote.", Bd(I, W));
        let X = V.value;
        if (W = V.index, X[X.length - 1] === "/") {
          let _ = W - X.length;
          X = X.substring(0, X.length - 1);
          let F = TT0(X, d);
          if (F === !0) Z = !0;
          else return v6(F.err.code, F.err.msg, Bd(I, _ + F.err.line))
        } else if (B)
          if (!V.tagClosed) return v6("InvalidTag", "Closing tag '" + A + "' doesn't have proper closing.", Bd(I, W));
          else if (X.trim().length > 0) return v6("InvalidTag", "Closing tag '" + A + "' can't have attributes or invalid starting.", Bd(I, w));
        else {
          let _ = G.pop();
          if (A !== _.tagName) {
            let F = Bd(I, _.tagStartPos);
            return v6("InvalidTag", "Expected closing tag '" + _.tagName + "' (opened in line " + F.line + ", col " + F.col + ") instead of closing tag '" + A + "'.", Bd(I, w))
          }
          if (G.length == 0) C = !0
        } else {
          let _ = TT0(X, d);
          if (_ !== !0) return v6(_.err.code, _.err.msg, Bd(I, W - X.length + _.err.line));
          if (C === !0) return v6("InvalidXml", "Multiple possible root nodes found.", Bd(I, W));
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
              W++, W = uT0(I, W);
              continue
            } else if (I[W + 1] === "?") {
          if (W = $T0(I, ++W), W.err) return W
        } else break;
        else if (I[W] === "&") {
          let _ = fV5(I, W);
          if (_ == -1) return v6("InvalidChar", "char '&' is not expected.", Bd(I, W));
          W = _
        } else if (C === !0 && !PT0(I[W])) return v6("InvalidXml", "Extra text at the end", Bd(I, W));
        if (I[W] === "<") W--
      }
    } else {
      if (PT0(I[W])) continue;
      return v6("InvalidChar", "char '" + I[W] + "' is not expected.", Bd(I, W))
    }
    if (!Z) return v6("InvalidXml", "Start tag expected.", 1);
    else if (G.length == 1) return v6("InvalidTag", "Unclosed tag '" + G[0].tagName + "'.", Bd(I, G[0].tagStartPos));
    else if (G.length > 0) return v6("InvalidXml", "Invalid '" + JSON.stringify(G.map((W) => W.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", {
      line: 1,
      col: 1
    });
    return !0
  };

  function PT0(I) {
    return I === " " || I === "\t" || I === `
` || I === "\r"
  }

  function $T0(I, d) {
    let G = d;
    for (; d < I.length; d++)
      if (I[d] == "?" || I[d] == " ") {
        let Z = I.substr(G, d - G);
        if (d > 5 && Z === "xml") return v6("InvalidXml", "XML declaration allowed only at the start of the document.", Bd(I, d));
        else if (I[d] == "?" && I[d + 1] == ">") {
          d++;
          break
        } else continue
      } return d
  }

  function uT0(I, d) {
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
  var JV5 = '"',
    KV5 = "'";

  function NV5(I, d) {
    let G = "",
      Z = "",
      C = !1;
    for (; d < I.length; d++) {
      if (I[d] === JV5 || I[d] === KV5)
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
  var zV5 = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");

  function TT0(I, d) {
    let G = bB1.getAllMatches(I, zV5),
      Z = {};
    for (let C = 0; C < G.length; C++) {
      if (G[C][1].length === 0) return v6("InvalidAttr", "Attribute '" + G[C][2] + "' has no space in starting.", Uy(G[C]));
      else if (G[C][3] !== void 0 && G[C][4] === void 0) return v6("InvalidAttr", "Attribute '" + G[C][2] + "' is without value.", Uy(G[C]));
      else if (G[C][3] === void 0 && !d.allowBooleanAttributes) return v6("InvalidAttr", "boolean attribute '" + G[C][2] + "' is not allowed.", Uy(G[C]));
      let W = G[C][2];
      if (!qV5(W)) return v6("InvalidAttr", "Attribute '" + W + "' is an invalid name.", Uy(G[C]));
      if (!Z.hasOwnProperty(W)) Z[W] = 1;
      else return v6("InvalidAttr", "Attribute '" + W + "' is repeated.", Uy(G[C]))
    }
    return !0
  }

  function QV5(I, d) {
    let G = /\d/;
    if (I[d] === "x") d++, G = /[\da-fA-F]/;
    for (; d < I.length; d++) {
      if (I[d] === ";") return d;
      if (!I[d].match(G)) break
    }
    return -1
  }

  function fV5(I, d) {
    if (d++, I[d] === ";") return -1;
    if (I[d] === "#") return d++, QV5(I, d);
    let G = 0;
    for (; d < I.length; d++, G++) {
      if (I[d].match(/\w/) && G < 20) continue;
      if (I[d] === ";") break;
      return -1
    }
    return d
  }

  function v6(I, d, G) {
    return {
      err: {
        code: I,
        msg: d,
        line: G.line || G,
        col: G.col
      }
    }
  }

  function qV5(I) {
    return bB1.isName(I)
  }

  function RV5(I) {
    return bB1.isName(I)
  }

  function Bd(I, d) {
    let G = I.substring(0, d).split(/\r?\n/);
    return {
      line: G.length,
      col: G[G.length - 1].length + 1
    }
  }

  function Uy(I) {
    return I.startIndex + I[1].length
  }
})
// @from(Start 2975587, End 2976599)
mT0 = Y((MV5) => {
  var OT0 = {
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
      transformAttributeName: !1
    },
    EV5 = function(I) {
      return Object.assign({}, OT0, I)
    };
  MV5.buildOptions = EV5;
  MV5.defaultOptions = OT0
})
// @from(Start 2976605, End 2977160)
hT0 = Y((P73, bT0) => {
  class lT0 {
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
  bT0.exports = lT0
})
// @from(Start 2977166, End 2979113)
kT0 = Y(($73, jT0) => {
  function yV5(I, d) {
    let G = {};
    if (I[d + 3] === "O" && I[d + 4] === "C" && I[d + 5] === "T" && I[d + 6] === "Y" && I[d + 7] === "P" && I[d + 8] === "E") {
      d = d + 9;
      let Z = 1,
        C = !1,
        W = !1,
        w = !1,
        B = "";
      for (; d < I.length; d++)
        if (I[d] === "<" && !w) {
          if (C && I[d + 1] === "!" && I[d + 2] === "E" && I[d + 3] === "N" && I[d + 4] === "T" && I[d + 5] === "I" && I[d + 6] === "T" && I[d + 7] === "Y") d += 7, W = !0;
          else if (C && I[d + 1] === "!" && I[d + 2] === "E" && I[d + 3] === "L" && I[d + 4] === "E" && I[d + 5] === "M" && I[d + 6] === "E" && I[d + 7] === "N" && I[d + 8] === "T") d += 8;
          else if (C && I[d + 1] === "!" && I[d + 2] === "A" && I[d + 3] === "T" && I[d + 4] === "T" && I[d + 5] === "L" && I[d + 6] === "I" && I[d + 7] === "S" && I[d + 8] === "T") d += 8;
          else if (C && I[d + 1] === "!" && I[d + 2] === "N" && I[d + 3] === "O" && I[d + 4] === "T" && I[d + 5] === "A" && I[d + 6] === "T" && I[d + 7] === "I" && I[d + 8] === "O" && I[d + 9] === "N") d += 9;
          else if (I[d + 1] === "!" && I[d + 2] === "-" && I[d + 3] === "-") w = !0;
          else throw new Error("Invalid DOCTYPE");
          Z++, B = ""
        } else if (I[d] === ">") {
        if (w) {
          if (I[d - 1] === "-" && I[d - 2] === "-") w = !1, Z--
        } else {
          if (W) $V5(B, G), W = !1;
          Z--
        }
        if (Z === 0) break
      } else if (I[d] === "[") C = !0;
      else B += I[d];
      if (Z !== 0) throw new Error("Unclosed DOCTYPE")
    } else throw new Error("Invalid Tag instead of DOCTYPE");
    return {
      entities: G,
      i: d
    }
  }
  var PV5 = RegExp(`^\\s([a-zA-z0-0]+)[ 	](['"])([^&]+)\\2`);

  function $V5(I, d) {
    let G = PV5.exec(I);
    if (G) d[G[1]] = {
      regx: RegExp(`&${G[1]};`, "g"),
      val: G[3]
    }
  }
  jT0.exports = yV5
})
// @from(Start 2979119, End 2990790)
pT0 = Y((T73, cT0) => {
  var xB1 = lB1(),
    vy = hT0(),
    uV5 = kT0(),
    TV5 = mc(),
    u73 = "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, xB1.nameRegexp);
  class xT0 {
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
      }, this.addExternalEntities = OV5, this.parseXml = jV5, this.parseTextData = mV5, this.resolveNameSpace = lV5, this.buildAttributesMap = hV5, this.isItStopNode = cV5, this.replaceEntitiesValue = kV5, this.readStopNodeData = iV5, this.saveTextToParentTag = xV5
    }
  }

  function OV5(I) {
    let d = Object.keys(I);
    for (let G = 0; G < d.length; G++) {
      let Z = d[G];
      this.lastEntities[Z] = {
        regex: new RegExp("&" + Z + ";", "g"),
        val: I[Z]
      }
    }
  }

  function mV5(I, d, G, Z, C, W, w) {
    if (I !== void 0) {
      if (this.options.trimValues && !Z) I = I.trim();
      if (I.length > 0) {
        if (!w) I = this.replaceEntitiesValue(I);
        let B = this.options.tagValueProcessor(d, I, G, C, W);
        if (B === null || B === void 0) return I;
        else if (typeof B !== typeof I || B !== I) return B;
        else if (this.options.trimValues) return kB1(I, this.options.parseTagValue, this.options.numberParseOptions);
        else if (I.trim() === I) return kB1(I, this.options.parseTagValue, this.options.numberParseOptions);
        else return I
      }
    }
  }

  function lV5(I) {
    if (this.options.removeNSPrefix) {
      let d = I.split(":"),
        G = I.charAt(0) === "/" ? "/" : "";
      if (d[0] === "xmlns") return "";
      if (d.length === 2) I = G + d[1]
    }
    return I
  }
  var bV5 = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");

  function hV5(I, d) {
    if (!this.options.ignoreAttributes && typeof I === "string") {
      let G = xB1.getAllMatches(I, bV5),
        Z = G.length,
        C = {};
      for (let W = 0; W < Z; W++) {
        let w = this.resolveNameSpace(G[W][1]),
          B = G[W][4],
          A = this.options.attributeNamePrefix + w;
        if (w.length) {
          if (this.options.transformAttributeName) A = this.options.transformAttributeName(A);
          if (A === "__proto__") A = "#__proto__";
          if (B !== void 0) {
            if (this.options.trimValues) B = B.trim();
            B = this.replaceEntitiesValue(B);
            let V = this.options.attributeValueProcessor(w, B, d);
            if (V === null || V === void 0) C[A] = B;
            else if (typeof V !== typeof B || V !== B) C[A] = V;
            else C[A] = kB1(B, this.options.parseAttributeValue, this.options.numberParseOptions)
          } else if (this.options.allowBooleanAttributes) C[A] = !0
        }
      }
      if (!Object.keys(C).length) return;
      if (this.options.attributesGroupName) {
        let W = {};
        return W[this.options.attributesGroupName] = C, W
      }
      return C
    }
  }
  var jV5 = function(I) {
      I = I.replace(/\r\n?/g, `
`);
      let d = new vy("!xml"),
        G = d,
        Z = "",
        C = "";
      for (let W = 0; W < I.length; W++)
        if (I[W] === "<")
          if (I[W + 1] === "/") {
            let B = DJ(I, ">", W, "Closing Tag is not closed."),
              A = I.substring(W + 2, B).trim();
            if (this.options.removeNSPrefix) {
              let V = A.indexOf(":");
              if (V !== -1) A = A.substr(V + 1)
            }
            if (this.options.transformTagName) A = this.options.transformTagName(A);
            if (G) Z = this.saveTextToParentTag(Z, G, C);
            C = C.substr(0, C.lastIndexOf(".")), G = this.tagsNodeStack.pop(), Z = "", W = B
          } else if (I[W + 1] === "?") {
        let B = jB1(I, W, !1, "?>");
        if (!B) throw new Error("Pi Tag is not closed.");
        if (Z = this.saveTextToParentTag(Z, G, C), this.options.ignoreDeclaration && B.tagName === "?xml" || this.options.ignorePiTags);
        else {
          let A = new vy(B.tagName);
          if (A.add(this.options.textNodeName, ""), B.tagName !== B.tagExp && B.attrExpPresent) A[":@"] = this.buildAttributesMap(B.tagExp, C);
          G.addChild(A)
        }
        W = B.closeIndex + 1
      } else if (I.substr(W + 1, 3) === "!--") {
        let B = DJ(I, "-->", W + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          let A = I.substring(W + 4, B - 2);
          Z = this.saveTextToParentTag(Z, G, C), G.add(this.options.commentPropName, [{
            [this.options.textNodeName]: A
          }])
        }
        W = B
      } else if (I.substr(W + 1, 2) === "!D") {
        let B = uV5(I, W);
        this.docTypeEntities = B.entities, W = B.i
      } else if (I.substr(W + 1, 2) === "![") {
        let B = DJ(I, "]]>", W, "CDATA is not closed.") - 2,
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
        let B = jB1(I, W, this.options.removeNSPrefix),
          A = B.tagName,
          V = B.tagExp,
          X = B.attrExpPresent,
          _ = B.closeIndex;
        if (this.options.transformTagName) A = this.options.transformTagName(A);
        if (G && Z) {
          if (G.tagname !== "!xml") Z = this.saveTextToParentTag(Z, G, C, !1)
        }
        if (A !== d.tagname) C += C ? "." + A : A;
        let F = G;
        if (F && this.options.unpairedTags.indexOf(F.tagname) !== -1) G = this.tagsNodeStack.pop();
        if (this.isItStopNode(this.options.stopNodes, C, A)) {
          let g = "";
          if (V.length > 0 && V.lastIndexOf("/") === V.length - 1) W = B.closeIndex;
          else if (this.options.unpairedTags.indexOf(A) !== -1) W = B.closeIndex;
          else {
            let K = this.readStopNodeData(I, A, _ + 1);
            if (!K) throw new Error(`Unexpected end of ${A}`);
            W = K.i, g = K.tagContent
          }
          let J = new vy(A);
          if (A !== V && X) J[":@"] = this.buildAttributesMap(V, C);
          if (g) g = this.parseTextData(g, A, C, !0, X, !0, !0);
          C = C.substr(0, C.lastIndexOf(".")), J.add(this.options.textNodeName, g), G.addChild(J)
        } else {
          if (V.length > 0 && V.lastIndexOf("/") === V.length - 1) {
            if (A[A.length - 1] === "/") A = A.substr(0, A.length - 1), V = A;
            else V = V.substr(0, V.length - 1);
            if (this.options.transformTagName) A = this.options.transformTagName(A);
            let g = new vy(A);
            if (A !== V && X) g[":@"] = this.buildAttributesMap(V, C);
            C = C.substr(0, C.lastIndexOf(".")), G.addChild(g)
          } else {
            let g = new vy(A);
            if (this.tagsNodeStack.push(G), A !== V && X) g[":@"] = this.buildAttributesMap(V, C);
            G.addChild(g), G = g
          }
          Z = "", W = _
        }
      } else Z += I[W];
      return d.child
    },
    kV5 = function(I) {
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

  function xV5(I, d, G, Z) {
    if (I) {
      if (Z === void 0) Z = Object.keys(d.child).length === 0;
      if (I = this.parseTextData(I, d.tagname, G, !1, d[":@"] ? Object.keys(d[":@"]).length !== 0 : !1, Z), I !== void 0 && I !== "") d.add(this.options.textNodeName, I);
      I = ""
    }
    return I
  }

  function cV5(I, d, G) {
    let Z = "*." + G;
    for (let C in I) {
      let W = I[C];
      if (Z === W || d === W) return !0
    }
    return !1
  }

  function pV5(I, d, G = ">") {
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

  function DJ(I, d, G, Z) {
    let C = I.indexOf(d, G);
    if (C === -1) throw new Error(Z);
    else return C + d.length - 1
  }

  function jB1(I, d, G, Z = ">") {
    let C = pV5(I, d + 1, Z);
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

  function iV5(I, d, G) {
    let Z = G,
      C = 1;
    for (; G < I.length; G++)
      if (I[G] === "<")
        if (I[G + 1] === "/") {
          let W = DJ(I, ">", G, `${d} is not closed`);
          if (I.substring(G + 2, W).trim() === d) {
            if (C--, C === 0) return {
              tagContent: I.substring(Z, G),
              i: W
            }
          }
          G = W
        } else if (I[G + 1] === "?") G = DJ(I, "?>", G + 1, "StopNode is not closed.");
    else if (I.substr(G + 1, 3) === "!--") G = DJ(I, "-->", G + 3, "StopNode is not closed.");
    else if (I.substr(G + 1, 2) === "![") G = DJ(I, "]]>", G, "StopNode is not closed.") - 2;
    else {
      let W = jB1(I, G, ">");
      if (W) {
        if ((W && W.tagName) === d && W.tagExp[W.tagExp.length - 1] !== "/") C++;
        G = W.closeIndex
      }
    }
  }

  function kB1(I, d, G) {
    if (d && typeof I === "string") {
      let Z = I.trim();
      if (Z === "true") return !0;
      else if (Z === "false") return !1;
      else return TV5(I, G)
    } else if (xB1.isExist(I)) return I;
    else return ""
  }
  cT0.exports = xT0
})
// @from(Start 2990796, End 2992517)
nT0 = Y((oV5) => {
  function nV5(I, d) {
    return iT0(I, d)
  }

  function iT0(I, d, G) {
    let Z, C = {};
    for (let W = 0; W < I.length; W++) {
      let w = I[W],
        B = rV5(w),
        A = "";
      if (G === void 0) A = B;
      else A = G + "." + B;
      if (B === d.textNodeName)
        if (Z === void 0) Z = w[B];
        else Z += "" + w[B];
      else if (B === void 0) continue;
      else if (w[B]) {
        let V = iT0(w[B], d, A),
          X = sV5(V, d);
        if (w[":@"]) aV5(V, w[":@"], A, d);
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

  function rV5(I) {
    let d = Object.keys(I);
    for (let G = 0; G < d.length; G++) {
      let Z = d[G];
      if (Z !== ":@") return Z
    }
  }

  function aV5(I, d, G, Z) {
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

  function sV5(I, d) {
    let G = Object.keys(I).length;
    if (G === 0 || G === 1 && I[d.textNodeName]) return !0;
    return !1
  }
  oV5.prettify = nV5
})
// @from(Start 2992523, End 2993730)
sT0 = Y((m73, aT0) => {
  var {
    buildOptions: tV5
  } = mT0(), IX5 = pT0(), {
    prettify: dX5
  } = nT0(), GX5 = hB1();
  class rT0 {
    constructor(I) {
      this.externalEntities = {}, this.options = tV5(I)
    }
    parse(I, d) {
      if (typeof I === "string");
      else if (I.toString) I = I.toString();
      else throw new Error("XML data is accepted in String or Bytes[] form.");
      if (d) {
        if (d === !0) d = {};
        let C = GX5.validate(I, d);
        if (C !== !0) throw Error(`${C.err.msg}:${C.err.line}:${C.err.col}`)
      }
      let G = new IX5(this.options);
      G.addExternalEntities(this.externalEntities);
      let Z = G.parseXml(I);
      if (this.options.preserveOrder || Z === void 0) return Z;
      else return dX5(Z, this.options)
    }
    addEntity(I, d) {
      if (d.indexOf("&") !== -1) throw new Error("Entity value can't have '&'");
      else if (I.indexOf("&") !== -1 || I.indexOf(";") !== -1) throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
      else if (d === "&") throw new Error("An entity with value '&' is not permitted");
      else this.externalEntities[I] = d
    }
  }
  aT0.exports = rT0
})
// @from(Start 2993736, End 2996437)
dO0 = Y((l73, IO0) => {
  function ZX5(I, d) {
    let G = "";
    if (d.format && d.indentBy.length > 0) G = `
`;
    return eT0(I, d, "", G)
  }

  function eT0(I, d, G, Z) {
    let C = "",
      W = !1;
    for (let w = 0; w < I.length; w++) {
      let B = I[w],
        A = CX5(B),
        V = "";
      if (G.length === 0) V = A;
      else V = `${G}.${A}`;
      if (A === d.textNodeName) {
        let J = B[A];
        if (!WX5(V, d)) J = d.tagValueProcessor(A, J), J = tT0(J, d);
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
        let J = oT0(B[":@"], d),
          K = A === "?xml" ? "" : Z,
          Q = B[A][0][d.textNodeName];
        Q = Q.length !== 0 ? " " + Q : "", C += K + `<${A}${Q}${J}?>`, W = !0;
        continue
      }
      let X = Z;
      if (X !== "") X += d.indentBy;
      let _ = oT0(B[":@"], d),
        F = Z + `<${A}${_}`,
        g = eT0(B[A], d, V, X);
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

  function CX5(I) {
    let d = Object.keys(I);
    for (let G = 0; G < d.length; G++) {
      let Z = d[G];
      if (Z !== ":@") return Z
    }
  }

  function oT0(I, d) {
    let G = "";
    if (I && !d.ignoreAttributes)
      for (let Z in I) {
        let C = d.attributeValueProcessor(Z, I[Z]);
        if (C = tT0(C, d), C === !0 && d.suppressBooleanAttributes) G += ` ${Z.substr(d.attributeNamePrefix.length)}`;
        else G += ` ${Z.substr(d.attributeNamePrefix.length)}="${C}"`
      }
    return G
  }

  function WX5(I, d) {
    I = I.substr(0, I.length - d.textNodeName.length - 1);
    let G = I.substr(I.lastIndexOf(".") + 1);
    for (let Z in d.stopNodes)
      if (d.stopNodes[Z] === I || d.stopNodes[Z] === "*." + G) return !0;
    return !1
  }

  function tT0(I, d) {
    if (I && I.length > 0 && d.processEntities)
      for (let G = 0; G < d.entities.length; G++) {
        let Z = d.entities[G];
        I = I.replace(Z.regex, Z.val)
      }
    return I
  }
  IO0.exports = ZX5
})