
// @from(Start 3289428, End 3291568)
Yn0 = Y((wn0) => {
  Object.defineProperty(wn0, "__esModule", {
    value: !0
  });
  wn0.getSigV4AuthPlugin = wn0.getAwsAuthPlugin = wn0.awsAuthMiddlewareOptions = wn0.awsAuthMiddleware = void 0;
  var Wn0 = t8(),
    $q5 = AX1(),
    Zn0 = Gn0(),
    uq5 = (I) => (d, G) => async function(Z) {
      var C, W, w, B;
      if (!Wn0.HttpRequest.isInstance(Z.request)) return d(Z);
      let A = (w = (W = (C = G.endpointV2) === null || C === void 0 ? void 0 : C.properties) === null || W === void 0 ? void 0 : W.authSchemes) === null || w === void 0 ? void 0 : w[0],
        V = (A === null || A === void 0 ? void 0 : A.name) === "sigv4a" ? (B = A === null || A === void 0 ? void 0 : A.signingRegionSet) === null || B === void 0 ? void 0 : B.join(",") : void 0,
        X = await I.signer(A),
        _ = await d({
          ...Z,
          request: await X.sign(Z.request, {
            signingDate: $q5.getSkewCorrectedDate(I.systemClockOffset),
            signingRegion: V || G.signing_region,
            signingService: G.signing_service
          })
        }).catch((g) => {
          var J;
          let K = (J = g.ServerTime) !== null && J !== void 0 ? J : Cn0(g.$response);
          if (K) I.systemClockOffset = Zn0.getUpdatedSystemClockOffset(K, I.systemClockOffset);
          throw g
        }),
        F = Cn0(_.response);
      if (F) I.systemClockOffset = Zn0.getUpdatedSystemClockOffset(F, I.systemClockOffset);
      return _
    };
  wn0.awsAuthMiddleware = uq5;
  var Cn0 = (I) => {
    var d, G, Z;
    return Wn0.HttpResponse.isInstance(I) ? (G = (d = I.headers) === null || d === void 0 ? void 0 : d.date) !== null && G !== void 0 ? G : (Z = I.headers) === null || Z === void 0 ? void 0 : Z.Date : void 0
  };
  wn0.awsAuthMiddlewareOptions = {
    name: "awsAuthMiddleware",
    tags: ["SIGNATURE", "AWSAUTH"],
    relation: "after",
    toMiddleware: "retryMiddleware",
    override: !0
  };
  var Tq5 = (I) => ({
    applyToStack: (d) => {
      d.addRelativeTo(wn0.awsAuthMiddleware(I), wn0.awsAuthMiddlewareOptions)
    }
  });
  wn0.getAwsAuthPlugin = Tq5;
  wn0.getSigV4AuthPlugin = wn0.getAwsAuthPlugin
})
// @from(Start 3291574, End 3291736)
OV = Y((An) => {
  Object.defineProperty(An, "__esModule", {
    value: !0
  });
  var _n0 = x1();
  _n0.__exportStar(ri0(), An);
  _n0.__exportStar(Yn0(), An)
})
// @from(Start 3291742, End 3292079)
Fn0 = Y((Dn0) => {
  Object.defineProperty(Dn0, "__esModule", {
    value: !0
  });
  Dn0.resolveUserAgentConfig = void 0;

  function Oq5(I) {
    return {
      ...I,
      customUserAgent: typeof I.customUserAgent === "string" ? [
        [I.customUserAgent]
      ] : I.customUserAgent
    }
  }
  Dn0.resolveUserAgentConfig = Oq5
})
// @from(Start 3292085, End 3297826)
gn0 = Y((aG3, mq5) => {
  mq5.exports = {
    partitions: [{
      id: "aws",
      outputs: {
        dnsSuffix: "amazonaws.com",
        dualStackDnsSuffix: "api.aws",
        implicitGlobalRegion: "us-east-1",
        name: "aws",
        supportsDualStack: !0,
        supportsFIPS: !0
      },
      regionRegex: "^(us|eu|ap|sa|ca|me|af|il)\\-\\w+\\-\\d+$",
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
        "il-central-1": {
          description: "Israel (Tel Aviv)"
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
        implicitGlobalRegion: "cn-northwest-1",
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
        implicitGlobalRegion: "us-gov-west-1",
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
        implicitGlobalRegion: "us-iso-east-1",
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
        implicitGlobalRegion: "us-isob-east-1",
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
        implicitGlobalRegion: "eu-isoe-west-1",
        name: "aws-iso-e",
        supportsDualStack: !1,
        supportsFIPS: !0
      },
      regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
      regions: {}
    }, {
      id: "aws-iso-f",
      outputs: {
        dnsSuffix: "csp.hci.ic.gov",
        dualStackDnsSuffix: "csp.hci.ic.gov",
        implicitGlobalRegion: "us-isof-south-1",
        name: "aws-iso-f",
        supportsDualStack: !1,
        supportsFIPS: !0
      },
      regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
      regions: {}
    }],
    version: "1.1"
  }
})
// @from(Start 3297832, End 3299101)
VX1 = Y((zn0) => {
  Object.defineProperty(zn0, "__esModule", {
    value: !0
  });
  zn0.getUserAgentPrefix = zn0.useDefaultPartitionInfo = zn0.setPartitionInfo = zn0.partition = void 0;
  var lq5 = x1(),
    Jn0 = lq5.__importDefault(gn0()),
    Kn0 = Jn0.default,
    Nn0 = "",
    bq5 = (I) => {
      let {
        partitions: d
      } = Kn0;
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
  zn0.partition = bq5;
  var hq5 = (I, d = "") => {
    Kn0 = I, Nn0 = d
  };
  zn0.setPartitionInfo = hq5;
  var jq5 = () => {
    zn0.setPartitionInfo(Jn0.default, "")
  };
  zn0.useDefaultPartitionInfo = jq5;
  var kq5 = () => Nn0;
  zn0.getUserAgentPrefix = kq5
})
// @from(Start 3299107, End 3299438)
Vn = Y((qn0) => {
  Object.defineProperty(qn0, "__esModule", {
    value: !0
  });
  qn0.isIpAddress = void 0;
  var pq5 = new RegExp("^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$"),
    iq5 = (I) => pq5.test(I) || I.startsWith("[") && I.endsWith("]");
  qn0.isIpAddress = iq5
})
// @from(Start 3299444, End 3299582)
En0 = Y((Un0) => {
  Object.defineProperty(Un0, "__esModule", {
    value: !0
  });
  Un0.debugId = void 0;
  Un0.debugId = "endpoints"
})
// @from(Start 3299588, End 3299966)
Ln0 = Y((Mn0) => {
  Object.defineProperty(Mn0, "__esModule", {
    value: !0
  });
  Mn0.toDebugString = void 0;

  function XX1(I) {
    if (typeof I !== "object" || I == null) return I;
    if ("ref" in I) return `$${XX1(I.ref)}`;
    if ("fn" in I) return `${I.fn}(${(I.argv||[]).map(XX1).join(", ")})`;
    return JSON.stringify(I, null, 2)
  }
  Mn0.toDebugString = XX1
})
// @from(Start 3299972, End 3300134)
GP = Y((Xn) => {
  Object.defineProperty(Xn, "__esModule", {
    value: !0
  });
  var yn0 = x1();
  yn0.__exportStar(En0(), Xn);
  yn0.__exportStar(Ln0(), Xn)
})
// @from(Start 3300140, End 3300391)
Tn0 = Y(($n0) => {
  Object.defineProperty($n0, "__esModule", {
    value: !0
  });
  $n0.EndpointError = void 0;
  class Pn0 extends Error {
    constructor(I) {
      super(I);
      this.name = "EndpointError"
    }
  }
  $n0.EndpointError = Pn0
})
// @from(Start 3300397, End 3300482)
mn0 = Y((On0) => {
  Object.defineProperty(On0, "__esModule", {
    value: !0
  })
})
// @from(Start 3300488, End 3300573)
bn0 = Y((ln0) => {
  Object.defineProperty(ln0, "__esModule", {
    value: !0
  })
})
// @from(Start 3300579, End 3300664)
jn0 = Y((hn0) => {
  Object.defineProperty(hn0, "__esModule", {
    value: !0
  })
})
// @from(Start 3300670, End 3300755)
xn0 = Y((kn0) => {
  Object.defineProperty(kn0, "__esModule", {
    value: !0
  })
})
// @from(Start 3300761, End 3300846)
pn0 = Y((cn0) => {
  Object.defineProperty(cn0, "__esModule", {
    value: !0
  })
})
// @from(Start 3300852, End 3301131)
yZ = Y((UD) => {
  Object.defineProperty(UD, "__esModule", {
    value: !0
  });
  var Kq = x1();
  Kq.__exportStar(Tn0(), UD);
  Kq.__exportStar(mn0(), UD);
  Kq.__exportStar(bn0(), UD);
  Kq.__exportStar(jn0(), UD);
  Kq.__exportStar(xn0(), UD);
  Kq.__exportStar(pn0(), UD)
})
// @from(Start 3301137, End 3301530)
_X1 = Y((in0) => {
  Object.defineProperty(in0, "__esModule", {
    value: !0
  });
  in0.isValidHostLabel = void 0;
  var nq5 = new RegExp("^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$"),
    rq5 = (I, d = !1) => {
      if (!d) return nq5.test(I);
      let G = I.split(".");
      for (let Z of G)
        if (!in0.isValidHostLabel(Z)) return !1;
      return !0
    };
  in0.isValidHostLabel = rq5
})
// @from(Start 3301536, End 3302108)
rn0 = Y((nn0) => {
  Object.defineProperty(nn0, "__esModule", {
    value: !0
  });
  nn0.isVirtualHostableS3Bucket = void 0;
  var aq5 = Vn(),
    sq5 = _X1(),
    oq5 = (I, d = !1) => {
      if (d) {
        for (let G of I.split("."))
          if (!nn0.isVirtualHostableS3Bucket(G)) return !1;
        return !0
      }
      if (!sq5.isValidHostLabel(I)) return !1;
      if (I.length < 3 || I.length > 63) return !1;
      if (I !== I.toLowerCase()) return !1;
      if (aq5.isIpAddress(I)) return !1;
      return !0
    };
  nn0.isVirtualHostableS3Bucket = oq5
})
// @from(Start 3302114, End 3302594)
on0 = Y((an0) => {
  Object.defineProperty(an0, "__esModule", {
    value: !0
  });
  an0.parseArn = void 0;
  var eq5 = (I) => {
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
  an0.parseArn = eq5
})
// @from(Start 3302600, End 3302794)
en0 = Y((ZP) => {
  Object.defineProperty(ZP, "__esModule", {
    value: !0
  });
  var HX1 = x1();
  HX1.__exportStar(rn0(), ZP);
  HX1.__exportStar(on0(), ZP);
  HX1.__exportStar(VX1(), ZP)
})
// @from(Start 3302800, End 3302973)
dr0 = Y((tn0) => {
  Object.defineProperty(tn0, "__esModule", {
    value: !0
  });
  tn0.booleanEquals = void 0;
  var tq5 = (I, d) => I === d;
  tn0.booleanEquals = tq5
})
// @from(Start 3302979, End 3303677)
Wr0 = Y((Zr0) => {
  Object.defineProperty(Zr0, "__esModule", {
    value: !0
  });
  Zr0.getAttrPathList = void 0;
  var Gr0 = yZ(),
    IR5 = (I) => {
      let d = I.split("."),
        G = [];
      for (let Z of d) {
        let C = Z.indexOf("[");
        if (C !== -1) {
          if (Z.indexOf("]") !== Z.length - 1) throw new Gr0.EndpointError(`Path: '${I}' does not end with ']'`);
          let W = Z.slice(C + 1, -1);
          if (Number.isNaN(parseInt(W))) throw new Gr0.EndpointError(`Invalid array index: '${W}' in path: '${I}'`);
          if (C !== 0) G.push(Z.slice(0, C));
          G.push(W)
        } else G.push(Z)
      }
      return G
    };
  Zr0.getAttrPathList = IR5
})
// @from(Start 3303683, End 3304119)
Ar0 = Y((wr0) => {
  Object.defineProperty(wr0, "__esModule", {
    value: !0
  });
  wr0.getAttr = void 0;
  var dR5 = yZ(),
    GR5 = Wr0(),
    ZR5 = (I, d) => GR5.getAttrPathList(d).reduce((G, Z) => {
      if (typeof G !== "object") throw new dR5.EndpointError(`Index '${Z}' in '${d}' not found in '${JSON.stringify(I)}'`);
      else if (Array.isArray(G)) return G[parseInt(Z)];
      return G[Z]
    }, I);
  wr0.getAttr = ZR5
})
// @from(Start 3304125, End 3304281)
Yr0 = Y((Vr0) => {
  Object.defineProperty(Vr0, "__esModule", {
    value: !0
  });
  Vr0.isSet = void 0;
  var CR5 = (I) => I != null;
  Vr0.isSet = CR5
})
// @from(Start 3304287, End 3304432)
Hr0 = Y((_r0) => {
  Object.defineProperty(_r0, "__esModule", {
    value: !0
  });
  _r0.not = void 0;
  var WR5 = (I) => !I;
  _r0.not = WR5
})
// @from(Start 3304438, End 3304523)
gr0 = Y((Fr0) => {
  Object.defineProperty(Fr0, "__esModule", {
    value: !0
  })
})
// @from(Start 3304529, End 3304804)
Jr0 = Y((FX1) => {
  Object.defineProperty(FX1, "__esModule", {
    value: !0
  });
  FX1.HttpAuthLocation = void 0;
  var wR5 = k3();
  Object.defineProperty(FX1, "HttpAuthLocation", {
    enumerable: !0,
    get: function() {
      return wR5.HttpAuthLocation
    }
  })
})
// @from(Start 3304810, End 3304895)
Nr0 = Y((Kr0) => {
  Object.defineProperty(Kr0, "__esModule", {
    value: !0
  })
})
// @from(Start 3304901, End 3304986)
Qr0 = Y((zr0) => {
  Object.defineProperty(zr0, "__esModule", {
    value: !0
  })
})
// @from(Start 3304992, End 3305077)
qr0 = Y((fr0) => {
  Object.defineProperty(fr0, "__esModule", {
    value: !0
  })
})
// @from(Start 3305083, End 3305168)
Ur0 = Y((Rr0) => {
  Object.defineProperty(Rr0, "__esModule", {
    value: !0
  })
})
// @from(Start 3305174, End 3305259)
Er0 = Y((vr0) => {
  Object.defineProperty(vr0, "__esModule", {
    value: !0
  })
})
// @from(Start 3305265, End 3305350)
Sr0 = Y((Mr0) => {
  Object.defineProperty(Mr0, "__esModule", {
    value: !0
  })
})
// @from(Start 3305356, End 3305441)
yr0 = Y((Lr0) => {
  Object.defineProperty(Lr0, "__esModule", {
    value: !0
  })
})
// @from(Start 3305447, End 3305686)
$r0 = Y((Pr0) => {
  Object.defineProperty(Pr0, "__esModule", {
    value: !0
  });
  Pr0.HostAddressType = void 0;
  var AR5;
  (function(I) {
    I.AAAA = "AAAA", I.A = "A"
  })(AR5 = Pr0.HostAddressType || (Pr0.HostAddressType = {}))
})
// @from(Start 3305692, End 3305777)
Tr0 = Y((ur0) => {
  Object.defineProperty(ur0, "__esModule", {
    value: !0
  })
})
// @from(Start 3305783, End 3306061)
Or0 = Y((JX1) => {
  Object.defineProperty(JX1, "__esModule", {
    value: !0
  });
  JX1.EndpointURLScheme = void 0;
  var VR5 = k3();
  Object.defineProperty(JX1, "EndpointURLScheme", {
    enumerable: !0,
    get: function() {
      return VR5.EndpointURLScheme
    }
  })
})
// @from(Start 3306067, End 3306152)
lr0 = Y((mr0) => {
  Object.defineProperty(mr0, "__esModule", {
    value: !0
  })
})
// @from(Start 3306158, End 3306243)
hr0 = Y((br0) => {
  Object.defineProperty(br0, "__esModule", {
    value: !0
  })
})
// @from(Start 3306249, End 3306334)
kr0 = Y((jr0) => {
  Object.defineProperty(jr0, "__esModule", {
    value: !0
  })
})
// @from(Start 3306340, End 3306425)
cr0 = Y((xr0) => {
  Object.defineProperty(xr0, "__esModule", {
    value: !0
  })
})
// @from(Start 3306431, End 3306516)
ir0 = Y((pr0) => {
  Object.defineProperty(pr0, "__esModule", {
    value: !0
  })
})
// @from(Start 3306522, End 3306607)
rr0 = Y((nr0) => {
  Object.defineProperty(nr0, "__esModule", {
    value: !0
  })
})
// @from(Start 3306613, End 3306698)
sr0 = Y((ar0) => {
  Object.defineProperty(ar0, "__esModule", {
    value: !0
  })
})
// @from(Start 3306704, End 3306789)
er0 = Y((or0) => {
  Object.defineProperty(or0, "__esModule", {
    value: !0
  })
})
// @from(Start 3306795, End 3307045)
tr0 = Y((QJ) => {
  Object.defineProperty(QJ, "__esModule", {
    value: !0
  });
  var CP = x1();
  CP.__exportStar(cr0(), QJ);
  CP.__exportStar(ir0(), QJ);
  CP.__exportStar(rr0(), QJ);
  CP.__exportStar(sr0(), QJ);
  CP.__exportStar(er0(), QJ)
})
// @from(Start 3307051, End 3307136)
da0 = Y((Ia0) => {
  Object.defineProperty(Ia0, "__esModule", {
    value: !0
  })
})
// @from(Start 3307142, End 3307227)
Za0 = Y((Ga0) => {
  Object.defineProperty(Ga0, "__esModule", {
    value: !0
  })
})
// @from(Start 3307233, End 3307318)
Wa0 = Y((Ca0) => {
  Object.defineProperty(Ca0, "__esModule", {
    value: !0
  })
})
// @from(Start 3307324, End 3307409)
Ba0 = Y((wa0) => {
  Object.defineProperty(wa0, "__esModule", {
    value: !0
  })
})
// @from(Start 3307415, End 3307500)
Va0 = Y((Aa0) => {
  Object.defineProperty(Aa0, "__esModule", {
    value: !0
  })
})
// @from(Start 3307506, End 3307591)
Ya0 = Y((Xa0) => {
  Object.defineProperty(Xa0, "__esModule", {
    value: !0
  })
})
// @from(Start 3307597, End 3307682)
Da0 = Y((_a0) => {
  Object.defineProperty(_a0, "__esModule", {
    value: !0
  })
})
// @from(Start 3307688, End 3307773)
Fa0 = Y((Ha0) => {
  Object.defineProperty(Ha0, "__esModule", {
    value: !0
  })
})
// @from(Start 3307779, End 3307864)
Ja0 = Y((ga0) => {
  Object.defineProperty(ga0, "__esModule", {
    value: !0
  })
})
// @from(Start 3307870, End 3307955)
Na0 = Y((Ka0) => {
  Object.defineProperty(Ka0, "__esModule", {
    value: !0
  })
})
// @from(Start 3307961, End 3308046)
Qa0 = Y((za0) => {
  Object.defineProperty(za0, "__esModule", {
    value: !0
  })
})
// @from(Start 3308052, End 3308137)
qa0 = Y((fa0) => {
  Object.defineProperty(fa0, "__esModule", {
    value: !0
  })
})
// @from(Start 3308143, End 3308436)
Ra0 = Y((KX1) => {
  Object.defineProperty(KX1, "__esModule", {
    value: !0
  });
  KX1.RequestHandlerProtocol = void 0;
  var YR5 = k3();
  Object.defineProperty(KX1, "RequestHandlerProtocol", {
    enumerable: !0,
    get: function() {
      return YR5.RequestHandlerProtocol
    }
  })
})
// @from(Start 3308442, End 3308527)
va0 = Y((Ua0) => {
  Object.defineProperty(Ua0, "__esModule", {
    value: !0
  })
})
// @from(Start 3308533, End 3308618)
Ma0 = Y((Ea0) => {
  Object.defineProperty(Ea0, "__esModule", {
    value: !0
  })
})
// @from(Start 3308624, End 3308709)
La0 = Y((Sa0) => {
  Object.defineProperty(Sa0, "__esModule", {
    value: !0
  })
})
// @from(Start 3308715, End 3309775)
ya0 = Y((K5) => {
  Object.defineProperty(K5, "__esModule", {
    value: !0
  });
  var S5 = x1();
  S5.__exportStar(gr0(), K5);
  S5.__exportStar(Jr0(), K5);
  S5.__exportStar(Nr0(), K5);
  S5.__exportStar(Qr0(), K5);
  S5.__exportStar(qr0(), K5);
  S5.__exportStar(Ur0(), K5);
  S5.__exportStar(Er0(), K5);
  S5.__exportStar(Sr0(), K5);
  S5.__exportStar(yr0(), K5);
  S5.__exportStar($r0(), K5);
  S5.__exportStar(Tr0(), K5);
  S5.__exportStar(Or0(), K5);
  S5.__exportStar(lr0(), K5);
  S5.__exportStar(hr0(), K5);
  S5.__exportStar(kr0(), K5);
  S5.__exportStar(tr0(), K5);
  S5.__exportStar(da0(), K5);
  S5.__exportStar(Za0(), K5);
  S5.__exportStar(Wa0(), K5);
  S5.__exportStar(Ba0(), K5);
  S5.__exportStar(Va0(), K5);
  S5.__exportStar(Ya0(), K5);
  S5.__exportStar(Da0(), K5);
  S5.__exportStar(Fa0(), K5);
  S5.__exportStar(Ja0(), K5);
  S5.__exportStar(Na0(), K5);
  S5.__exportStar(Qa0(), K5);
  S5.__exportStar(qa0(), K5);
  S5.__exportStar(Ra0(), K5);
  S5.__exportStar(va0(), K5);
  S5.__exportStar(Ma0(), K5);
  S5.__exportStar(La0(), K5)
})
// @from(Start 3309781, End 3311337)
ua0 = Y((Pa0) => {
  Object.defineProperty(Pa0, "__esModule", {
    value: !0
  });
  Pa0.parseURL = void 0;
  var zX1 = ya0(),
    DR5 = Vn(),
    NX1 = {
      [zX1.EndpointURLScheme.HTTP]: 80,
      [zX1.EndpointURLScheme.HTTPS]: 443
    },
    HR5 = (I) => {
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
      if (!Object.values(zX1.EndpointURLScheme).includes(A)) return null;
      let V = DR5.isIpAddress(C),
        X = G.includes(`${Z}:${NX1[A]}`) || typeof I === "string" && I.includes(`${Z}:${NX1[A]}`),
        _ = `${Z}${X?`:${NX1[A]}`:""}`;
      return {
        scheme: A,
        authority: _,
        path: W,
        normalizedPath: W.endsWith("/") ? W : `${W}/`,
        isIp: V
      }
    };
  Pa0.parseURL = HR5
})
// @from(Start 3311343, End 3311514)
ma0 = Y((Ta0) => {
  Object.defineProperty(Ta0, "__esModule", {
    value: !0
  });
  Ta0.stringEquals = void 0;
  var FR5 = (I, d) => I === d;
  Ta0.stringEquals = FR5
})
// @from(Start 3311520, End 3311823)
ha0 = Y((la0) => {
  Object.defineProperty(la0, "__esModule", {
    value: !0
  });
  la0.substring = void 0;
  var gR5 = (I, d, G, Z) => {
    if (d >= G || I.length < G) return null;
    if (!Z) return I.substring(d, G);
    return I.substring(I.length - G, I.length - d)
  };
  la0.substring = gR5
})
// @from(Start 3311829, End 3312082)
xa0 = Y((ja0) => {
  Object.defineProperty(ja0, "__esModule", {
    value: !0
  });
  ja0.uriEncode = void 0;
  var JR5 = (I) => encodeURIComponent(I).replace(/[!*'()]/g, (d) => `%${d.charCodeAt(0).toString(16).toUpperCase()}`);
  ja0.uriEncode = JR5
})
// @from(Start 3312088, End 3312512)
QX1 = Y((iC) => {
  Object.defineProperty(iC, "__esModule", {
    value: !0
  });
  iC.aws = void 0;
  var YB = x1();
  iC.aws = YB.__importStar(en0());
  YB.__exportStar(dr0(), iC);
  YB.__exportStar(Ar0(), iC);
  YB.__exportStar(Yr0(), iC);
  YB.__exportStar(_X1(), iC);
  YB.__exportStar(Hr0(), iC);
  YB.__exportStar(ua0(), iC);
  YB.__exportStar(ma0(), iC);
  YB.__exportStar(ha0(), iC);
  YB.__exportStar(xa0(), iC)
})
// @from(Start 3312518, End 3313437)
fX1 = Y((pa0) => {
  Object.defineProperty(pa0, "__esModule", {
    value: !0
  });
  pa0.evaluateTemplate = void 0;
  var KR5 = QX1(),
    NR5 = (I, d) => {
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
          G.push(KR5.getAttr(Z[A], V))
        } else G.push(Z[B]);
        C = w + 1
      }
      return G.join("")
    };
  pa0.evaluateTemplate = NR5
})
// @from(Start 3313443, End 3313714)
aa0 = Y((na0) => {
  Object.defineProperty(na0, "__esModule", {
    value: !0
  });
  na0.getReferenceValue = void 0;
  var zR5 = ({
    ref: I
  }, d) => {
    return {
      ...d.endpointParams,
      ...d.referenceRecord
    } [I]
  };
  na0.getReferenceValue = zR5
})
// @from(Start 3313720, End 3314248)
WP = Y((sa0) => {
  Object.defineProperty(sa0, "__esModule", {
    value: !0
  });
  sa0.evaluateExpression = void 0;
  var QR5 = yZ(),
    fR5 = qX1(),
    qR5 = fX1(),
    RR5 = aa0(),
    UR5 = (I, d, G) => {
      if (typeof I === "string") return qR5.evaluateTemplate(I, G);
      else if (I.fn) return fR5.callFunction(I, G);
      else if (I.ref) return RR5.getReferenceValue(I, G);
      throw new QR5.EndpointError(`'${d}': ${String(I)} is not a string, function or reference.`)
    };
  sa0.evaluateExpression = UR5
})
// @from(Start 3314254, End 3314697)
qX1 = Y((ea0) => {
  Object.defineProperty(ea0, "__esModule", {
    value: !0
  });
  ea0.callFunction = void 0;
  var vR5 = x1(),
    ER5 = vR5.__importStar(QX1()),
    MR5 = WP(),
    SR5 = ({
      fn: I,
      argv: d
    }, G) => {
      let Z = d.map((C) => ["boolean", "number"].includes(typeof C) ? C : MR5.evaluateExpression(C, "arg", G));
      return I.split(".").reduce((C, W) => C[W], ER5)(...Z)
    };
  ea0.callFunction = SR5
})
// @from(Start 3314703, End 3315500)
Gs0 = Y((Is0) => {
  Object.defineProperty(Is0, "__esModule", {
    value: !0
  });
  Is0.evaluateCondition = void 0;
  var RX1 = GP(),
    LR5 = yZ(),
    yR5 = qX1(),
    PR5 = ({
      assign: I,
      ...d
    }, G) => {
      var Z, C;
      if (I && I in G.referenceRecord) throw new LR5.EndpointError(`'${I}' is already defined in Reference Record.`);
      let W = yR5.callFunction(d, G);
      return (C = (Z = G.logger) === null || Z === void 0 ? void 0 : Z.debug) === null || C === void 0 || C.call(Z, RX1.debugId, `evaluateCondition: ${RX1.toDebugString(d)} = ${RX1.toDebugString(W)}`), {
        result: W === "" ? !0 : !!W,
        ...I != null && {
          toAssign: {
            name: I,
            value: W
          }
        }
      }
    };
  Is0.evaluateCondition = PR5
})
// @from(Start 3315506, End 3316341)
Yn = Y((Cs0) => {
  Object.defineProperty(Cs0, "__esModule", {
    value: !0
  });
  Cs0.evaluateConditions = void 0;
  var Zs0 = GP(),
    $R5 = Gs0(),
    uR5 = (I = [], d) => {
      var G, Z;
      let C = {};
      for (let W of I) {
        let {
          result: w,
          toAssign: B
        } = $R5.evaluateCondition(W, {
          ...d,
          referenceRecord: {
            ...d.referenceRecord,
            ...C
          }
        });
        if (!w) return {
          result: w
        };
        if (B) C[B.name] = B.value, (Z = (G = d.logger) === null || G === void 0 ? void 0 : G.debug) === null || Z === void 0 || Z.call(G, Zs0.debugId, `assign: ${B.name} := ${Zs0.toDebugString(B.value)}`)
      }
      return {
        result: !0,
        referenceRecord: C
      }
    };
  Cs0.evaluateConditions = uR5
})
// @from(Start 3316347, End 3316851)
As0 = Y((ws0) => {
  Object.defineProperty(ws0, "__esModule", {
    value: !0
  });
  ws0.getEndpointHeaders = void 0;
  var TR5 = yZ(),
    OR5 = WP(),
    mR5 = (I, d) => Object.entries(I).reduce((G, [Z, C]) => ({
      ...G,
      [Z]: C.map((W) => {
        let w = OR5.evaluateExpression(W, "Header value entry", d);
        if (typeof w !== "string") throw new TR5.EndpointError(`Header '${Z}' value '${w}' is not a string`);
        return w
      })
    }), {});
  ws0.getEndpointHeaders = mR5
})
// @from(Start 3316857, End 3317589)
Ys0 = Y((Xs0) => {
  Object.defineProperty(Xs0, "__esModule", {
    value: !0
  });
  Xs0.getEndpointProperty = void 0;
  var Vs0 = yZ(),
    lR5 = fX1(),
    bR5 = vX1(),
    hR5 = (I, d) => {
      if (Array.isArray(I)) return I.map((G) => Xs0.getEndpointProperty(G, d));
      switch (typeof I) {
        case "string":
          return lR5.evaluateTemplate(I, d);
        case "object":
          if (I === null) throw new Vs0.EndpointError(`Unexpected endpoint property: ${I}`);
          return bR5.getEndpointProperties(I, d);
        case "boolean":
          return I;
        default:
          throw new Vs0.EndpointError(`Unexpected endpoint property type: ${typeof I}`)
      }
    };
  Xs0.getEndpointProperty = hR5
})
// @from(Start 3317595, End 3317901)
vX1 = Y((_s0) => {
  Object.defineProperty(_s0, "__esModule", {
    value: !0
  });
  _s0.getEndpointProperties = void 0;
  var jR5 = Ys0(),
    kR5 = (I, d) => Object.entries(I).reduce((G, [Z, C]) => ({
      ...G,
      [Z]: jR5.getEndpointProperty(C, d)
    }), {});
  _s0.getEndpointProperties = kR5
})
// @from(Start 3317907, End 3318422)
gs0 = Y((Hs0) => {
  Object.defineProperty(Hs0, "__esModule", {
    value: !0
  });
  Hs0.getEndpointUrl = void 0;
  var xR5 = yZ(),
    cR5 = WP(),
    pR5 = (I, d) => {
      let G = cR5.evaluateExpression(I, "Endpoint URL", d);
      if (typeof G === "string") try {
        return new URL(G)
      } catch (Z) {
        throw console.error(`Failed to construct URL with ${G}`, Z), Z
      }
      throw new xR5.EndpointError(`Endpoint URL must be a string, got ${typeof G}`)
    };
  Hs0.getEndpointUrl = pR5
})
// @from(Start 3318428, End 3319531)
zs0 = Y((Ks0) => {
  Object.defineProperty(Ks0, "__esModule", {
    value: !0
  });
  Ks0.evaluateEndpointRule = void 0;
  var Js0 = GP(),
    iR5 = Yn(),
    nR5 = As0(),
    rR5 = vX1(),
    aR5 = gs0(),
    sR5 = (I, d) => {
      var G, Z;
      let {
        conditions: C,
        endpoint: W
      } = I, {
        result: w,
        referenceRecord: B
      } = iR5.evaluateConditions(C, d);
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
      return (Z = (G = d.logger) === null || G === void 0 ? void 0 : G.debug) === null || Z === void 0 || Z.call(G, Js0.debugId, `Resolving endpoint from template: ${Js0.toDebugString(W)}`), {
        ..._ != null && {
          headers: nR5.getEndpointHeaders(_, A)
        },
        ...X != null && {
          properties: rR5.getEndpointProperties(X, A)
        },
        url: aR5.getEndpointUrl(V, A)
      }
    };
  Ks0.evaluateEndpointRule = sR5
})
// @from(Start 3319537, End 3320120)
qs0 = Y((Qs0) => {
  Object.defineProperty(Qs0, "__esModule", {
    value: !0
  });
  Qs0.evaluateErrorRule = void 0;
  var oR5 = yZ(),
    eR5 = Yn(),
    tR5 = WP(),
    IU5 = (I, d) => {
      let {
        conditions: G,
        error: Z
      } = I, {
        result: C,
        referenceRecord: W
      } = eR5.evaluateConditions(G, d);
      if (!C) return;
      throw new oR5.EndpointError(tR5.evaluateExpression(Z, "Error", {
        ...d,
        referenceRecord: {
          ...d.referenceRecord,
          ...W
        }
      }))
    };
  Qs0.evaluateErrorRule = IU5
})
// @from(Start 3320126, End 3320656)
vs0 = Y((Rs0) => {
  Object.defineProperty(Rs0, "__esModule", {
    value: !0
  });
  Rs0.evaluateTreeRule = void 0;
  var dU5 = Yn(),
    GU5 = EX1(),
    ZU5 = (I, d) => {
      let {
        conditions: G,
        rules: Z
      } = I, {
        result: C,
        referenceRecord: W
      } = dU5.evaluateConditions(G, d);
      if (!C) return;
      return GU5.evaluateRules(Z, {
        ...d,
        referenceRecord: {
          ...d.referenceRecord,
          ...W
        }
      })
    };
  Rs0.evaluateTreeRule = ZU5
})
// @from(Start 3320662, End 3321344)
EX1 = Y((Ms0) => {
  Object.defineProperty(Ms0, "__esModule", {
    value: !0
  });
  Ms0.evaluateRules = void 0;
  var Es0 = yZ(),
    CU5 = zs0(),
    WU5 = qs0(),
    wU5 = vs0(),
    BU5 = (I, d) => {
      for (let G of I)
        if (G.type === "endpoint") {
          let Z = CU5.evaluateEndpointRule(G, d);
          if (Z) return Z
        } else if (G.type === "error") WU5.evaluateErrorRule(G, d);
      else if (G.type === "tree") {
        let Z = wU5.evaluateTreeRule(G, d);
        if (Z) return Z
      } else throw new Es0.EndpointError(`Unknown endpoint rule: ${G}`);
      throw new Es0.EndpointError("Rules evaluation failed")
    };
  Ms0.evaluateRules = BU5
})
// @from(Start 3321350, End 3321485)
Ls0 = Y((MX1) => {
  Object.defineProperty(MX1, "__esModule", {
    value: !0
  });
  var AU5 = x1();
  AU5.__exportStar(EX1(), MX1)
})
// @from(Start 3321491, End 3323022)
$s0 = Y((ys0) => {
  Object.defineProperty(ys0, "__esModule", {
    value: !0
  });
  ys0.resolveEndpoint = void 0;
  var _n = GP(),
    VU5 = yZ(),
    XU5 = Ls0(),
    YU5 = (I, d) => {
      var G, Z, C, W, w, B;
      let {
        endpointParams: A,
        logger: V
      } = d, {
        parameters: X,
        rules: _
      } = I;
      (Z = (G = d.logger) === null || G === void 0 ? void 0 : G.debug) === null || Z === void 0 || Z.call(G, `${_n.debugId} Initial EndpointParams: ${_n.toDebugString(A)}`);
      let F = Object.entries(X).filter(([, K]) => K.default != null).map(([K, Q]) => [K, Q.default]);
      if (F.length > 0)
        for (let [K, Q] of F) A[K] = (C = A[K]) !== null && C !== void 0 ? C : Q;
      let g = Object.entries(X).filter(([, K]) => K.required).map(([K]) => K);
      for (let K of g)
        if (A[K] == null) throw new VU5.EndpointError(`Missing required parameter: '${K}'`);
      let J = XU5.evaluateRules(_, {
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
      return (B = (w = d.logger) === null || w === void 0 ? void 0 : w.debug) === null || B === void 0 || B.call(w, `${_n.debugId} Resolved endpoint: ${_n.toDebugString(J)}`), J
    };
  ys0.resolveEndpoint = YU5
})
// @from(Start 3323028, End 3323245)
zq = Y((Nq) => {
  Object.defineProperty(Nq, "__esModule", {
    value: !0
  });
  var Dn = x1();
  Dn.__exportStar(VX1(), Nq);
  Dn.__exportStar(Vn(), Nq);
  Dn.__exportStar($s0(), Nq);
  Dn.__exportStar(yZ(), Nq)
})
// @from(Start 3323251, End 3323795)
Os0 = Y((us0) => {
  Object.defineProperty(us0, "__esModule", {
    value: !0
  });
  us0.UA_ESCAPE_CHAR = us0.UA_VALUE_ESCAPE_REGEX = us0.UA_NAME_ESCAPE_REGEX = us0.UA_NAME_SEPARATOR = us0.SPACE = us0.X_AMZ_USER_AGENT = us0.USER_AGENT = void 0;
  us0.USER_AGENT = "user-agent";
  us0.X_AMZ_USER_AGENT = "x-amz-user-agent";
  us0.SPACE = " ";
  us0.UA_NAME_SEPARATOR = "/";
  us0.UA_NAME_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;
  us0.UA_VALUE_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g;
  us0.UA_ESCAPE_CHAR = "-"
})
// @from(Start 3323801, End 3326016)
js0 = Y((ms0) => {
  Object.defineProperty(ms0, "__esModule", {
    value: !0
  });
  ms0.getUserAgentPlugin = ms0.getUserAgentMiddlewareOptions = ms0.userAgentMiddleware = void 0;
  var KU5 = zq(),
    NU5 = t8(),
    Vd = Os0(),
    zU5 = (I) => (d, G) => async (Z) => {
      var C, W;
      let {
        request: w
      } = Z;
      if (!NU5.HttpRequest.isInstance(w)) return d(Z);
      let {
        headers: B
      } = w, A = ((C = G === null || G === void 0 ? void 0 : G.userAgent) === null || C === void 0 ? void 0 : C.map(SX1)) || [], V = (await I.defaultUserAgentProvider()).map(SX1), X = ((W = I === null || I === void 0 ? void 0 : I.customUserAgent) === null || W === void 0 ? void 0 : W.map(SX1)) || [], _ = KU5.getUserAgentPrefix(), F = (_ ? [_] : []).concat([...V, ...A, ...X]).join(Vd.SPACE), g = [...V.filter((J) => J.startsWith("aws-sdk-")), ...X].join(Vd.SPACE);
      if (I.runtime !== "browser") {
        if (g) B[Vd.X_AMZ_USER_AGENT] = B[Vd.X_AMZ_USER_AGENT] ? `${B[Vd.USER_AGENT]} ${g}` : g;
        B[Vd.USER_AGENT] = F
      } else B[Vd.X_AMZ_USER_AGENT] = F;
      return d({
        ...Z,
        request: w
      })
    };
  ms0.userAgentMiddleware = zU5;
  var SX1 = (I) => {
    var d;
    let G = I[0].split(Vd.UA_NAME_SEPARATOR).map((B) => B.replace(Vd.UA_NAME_ESCAPE_REGEX, Vd.UA_ESCAPE_CHAR)).join(Vd.UA_NAME_SEPARATOR),
      Z = (d = I[1]) === null || d === void 0 ? void 0 : d.replace(Vd.UA_VALUE_ESCAPE_REGEX, Vd.UA_ESCAPE_CHAR),
      C = G.indexOf(Vd.UA_NAME_SEPARATOR),
      W = G.substring(0, C),
      w = G.substring(C + 1);
    if (W === "api") w = w.toLowerCase();
    return [W, w, Z].filter((B) => B && B.length > 0).reduce((B, A, V) => {
      switch (V) {
        case 0:
          return A;
        case 1:
          return `${B}/${A}`;
        default:
          return `${B}#${A}`
      }
    }, "")
  };
  ms0.getUserAgentMiddlewareOptions = {
    name: "getUserAgentMiddleware",
    step: "build",
    priority: "low",
    tags: ["SET_USER_AGENT", "USER_AGENT"],
    override: !0
  };
  var QU5 = (I) => ({
    applyToStack: (d) => {
      d.add(ms0.userAgentMiddleware(I), ms0.getUserAgentMiddlewareOptions)
    }
  });
  ms0.getUserAgentPlugin = QU5
})
// @from(Start 3326022, End 3326184)
wP = Y((Hn) => {
  Object.defineProperty(Hn, "__esModule", {
    value: !0
  });
  var ks0 = x1();
  ks0.__exportStar(Fn0(), Hn);
  ks0.__exportStar(js0(), Hn)
})
// @from(Start 3326190, End 3327631)
ns0 = Y((vC3, is0) => {
  var {
    defineProperty: Fn,
    getOwnPropertyDescriptor: fU5,
    getOwnPropertyNames: qU5
  } = Object, RU5 = Object.prototype.hasOwnProperty, xs0 = (I, d) => Fn(I, "name", {
    value: d,
    configurable: !0
  }), UU5 = (I, d) => {
    for (var G in d) Fn(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, vU5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of qU5(d))
        if (!RU5.call(I, C) && C !== G) Fn(I, C, {
          get: () => d[C],
          enumerable: !(Z = fU5(d, C)) || Z.enumerable
        })
    }
    return I
  }, EU5 = (I) => vU5(Fn({}, "__esModule", {
    value: !0
  }), I), cs0 = {};
  UU5(cs0, {
    SelectorType: () => ps0,
    booleanSelector: () => MU5,
    numberSelector: () => SU5
  });
  is0.exports = EU5(cs0);
  var MU5 = xs0((I, d, G) => {
      if (!(d in I)) return;
      if (I[d] === "true") return !0;
      if (I[d] === "false") return !1;
      throw new Error(`Cannot load ${G} "${d}". Expected "true" or "false", got ${I[d]}.`)
    }, "booleanSelector"),
    SU5 = xs0((I, d, G) => {
      if (!(d in I)) return;
      let Z = parseInt(I[d], 10);
      if (Number.isNaN(Z)) throw new TypeError(`Cannot load ${G} '${d}'. Expected number, got '${I[d]}'.`);
      return Z
    }, "numberSelector"),
    ps0 = ((I) => {
      return I.ENV = "env", I.CONFIG = "shared config entry", I
    })(ps0 || {})
})
// @from(Start 3327637, End 3334524)
_B = Y((EC3, Co0) => {
  var {
    defineProperty: Jn,
    getOwnPropertyDescriptor: LU5,
    getOwnPropertyNames: yU5
  } = Object, PU5 = Object.prototype.hasOwnProperty, nC = (I, d) => Jn(I, "name", {
    value: d,
    configurable: !0
  }), $U5 = (I, d) => {
    for (var G in d) Jn(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, uU5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of yU5(d))
        if (!PU5.call(I, C) && C !== G) Jn(I, C, {
          get: () => d[C],
          enumerable: !(Z = LU5(d, C)) || Z.enumerable
        })
    }
    return I
  }, TU5 = (I) => uU5(Jn({}, "__esModule", {
    value: !0
  }), I), ss0 = {};
  $U5(ss0, {
    CONFIG_USE_DUALSTACK_ENDPOINT: () => es0,
    CONFIG_USE_FIPS_ENDPOINT: () => Io0,
    DEFAULT_USE_DUALSTACK_ENDPOINT: () => OU5,
    DEFAULT_USE_FIPS_ENDPOINT: () => lU5,
    ENV_USE_DUALSTACK_ENDPOINT: () => os0,
    ENV_USE_FIPS_ENDPOINT: () => ts0,
    NODE_REGION_CONFIG_FILE_OPTIONS: () => cU5,
    NODE_REGION_CONFIG_OPTIONS: () => xU5,
    NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS: () => mU5,
    NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS: () => bU5,
    REGION_ENV_NAME: () => do0,
    REGION_INI_NAME: () => Go0,
    getRegionInfo: () => aU5,
    resolveCustomEndpointsConfig: () => hU5,
    resolveEndpointsConfig: () => kU5,
    resolveRegionConfig: () => pU5
  });
  Co0.exports = TU5(ss0);
  var vD = ns0(),
    os0 = "AWS_USE_DUALSTACK_ENDPOINT",
    es0 = "use_dualstack_endpoint",
    OU5 = !1,
    mU5 = {
      environmentVariableSelector: (I) => vD.booleanSelector(I, os0, vD.SelectorType.ENV),
      configFileSelector: (I) => vD.booleanSelector(I, es0, vD.SelectorType.CONFIG),
      default: !1
    },
    ts0 = "AWS_USE_FIPS_ENDPOINT",
    Io0 = "use_fips_endpoint",
    lU5 = !1,
    bU5 = {
      environmentVariableSelector: (I) => vD.booleanSelector(I, ts0, vD.SelectorType.ENV),
      configFileSelector: (I) => vD.booleanSelector(I, Io0, vD.SelectorType.CONFIG),
      default: !1
    },
    gn = Fq(),
    hU5 = nC((I) => {
      let {
        endpoint: d,
        urlParser: G
      } = I;
      return {
        ...I,
        tls: I.tls ?? !0,
        endpoint: gn.normalizeProvider(typeof d === "string" ? G(d) : d),
        isCustomEndpoint: !0,
        useDualstackEndpoint: gn.normalizeProvider(I.useDualstackEndpoint ?? !1)
      }
    }, "resolveCustomEndpointsConfig"),
    jU5 = nC(async (I) => {
      let {
        tls: d = !0
      } = I, G = await I.region();
      if (!new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/).test(G)) throw new Error("Invalid region in client config");
      let C = await I.useDualstackEndpoint(),
        W = await I.useFipsEndpoint(),
        {
          hostname: w
        } = await I.regionInfoProvider(G, {
          useDualstackEndpoint: C,
          useFipsEndpoint: W
        }) ?? {};
      if (!w) throw new Error("Cannot resolve hostname from client config");
      return I.urlParser(`${d?"https:":"http:"}//${w}`)
    }, "getEndpointFromRegion"),
    kU5 = nC((I) => {
      let d = gn.normalizeProvider(I.useDualstackEndpoint ?? !1),
        {
          endpoint: G,
          useFipsEndpoint: Z,
          urlParser: C
        } = I;
      return {
        ...I,
        tls: I.tls ?? !0,
        endpoint: G ? gn.normalizeProvider(typeof G === "string" ? C(G) : G) : () => jU5({
          ...I,
          useDualstackEndpoint: d,
          useFipsEndpoint: Z
        }),
        isCustomEndpoint: !!G,
        useDualstackEndpoint: d
      }
    }, "resolveEndpointsConfig"),
    do0 = "AWS_REGION",
    Go0 = "region",
    xU5 = {
      environmentVariableSelector: (I) => I[do0],
      configFileSelector: (I) => I[Go0],
      default: () => {
        throw new Error("Region is missing")
      }
    },
    cU5 = {
      preferredFile: "credentials"
    },
    Zo0 = nC((I) => typeof I === "string" && (I.startsWith("fips-") || I.endsWith("-fips")), "isFipsRegion"),
    rs0 = nC((I) => Zo0(I) ? ["fips-aws-global", "aws-fips"].includes(I) ? "us-east-1" : I.replace(/fips-(dkr-|prod-)?|-fips/, "") : I, "getRealRegion"),
    pU5 = nC((I) => {
      let {
        region: d,
        useFipsEndpoint: G
      } = I;
      if (!d) throw new Error("Region is missing");
      return {
        ...I,
        region: async () => {
          if (typeof d === "string") return rs0(d);
          let Z = await d();
          return rs0(Z)
        },
        useFipsEndpoint: async () => {
          let Z = typeof d === "string" ? d : await d();
          if (Zo0(Z)) return !0;
          return typeof G !== "function" ? Promise.resolve(!!G) : G()
        }
      }
    }, "resolveRegionConfig"),
    as0 = nC((I = [], {
      useFipsEndpoint: d,
      useDualstackEndpoint: G
    }) => {
      var Z;
      return (Z = I.find(({
        tags: C
      }) => d === C.includes("fips") && G === C.includes("dualstack"))) == null ? void 0 : Z.hostname
    }, "getHostnameFromVariants"),
    iU5 = nC((I, {
      regionHostname: d,
      partitionHostname: G
    }) => d ? d : G ? G.replace("{region}", I) : void 0, "getResolvedHostname"),
    nU5 = nC((I, {
      partitionHash: d
    }) => Object.keys(d || {}).find((G) => d[G].regions.includes(I)) ?? "aws", "getResolvedPartition"),
    rU5 = nC((I, {
      signingRegion: d,
      regionRegex: G,
      useFipsEndpoint: Z
    }) => {
      if (d) return d;
      else if (Z) {
        let C = G.replace("\\\\", "\\").replace(/^\^/g, "\\.").replace(/\$$/g, "\\."),
          W = I.match(C);
        if (W) return W[0].slice(1, -1)
      }
    }, "getResolvedSigningRegion"),
    aU5 = nC((I, {
      useFipsEndpoint: d = !1,
      useDualstackEndpoint: G = !1,
      signingService: Z,
      regionHash: C,
      partitionHash: W
    }) => {
      var w, B, A, V, X;
      let _ = nU5(I, {
          partitionHash: W
        }),
        F = I in C ? I : ((w = W[_]) == null ? void 0 : w.endpoint) ?? I,
        g = {
          useFipsEndpoint: d,
          useDualstackEndpoint: G
        },
        J = as0((B = C[F]) == null ? void 0 : B.variants, g),
        K = as0((A = W[_]) == null ? void 0 : A.variants, g),
        Q = iU5(F, {
          regionHostname: J,
          partitionHostname: K
        });
      if (Q === void 0) throw new Error(`Endpoint resolution failed for: ${{resolvedRegion:F,useFipsEndpoint:d,useDualstackEndpoint:G}}`);
      let E = rU5(Q, {
        signingRegion: (V = C[F]) == null ? void 0 : V.signingRegion,
        regionRegex: W[_].regionRegex,
        useFipsEndpoint: d
      });
      return {
        partition: _,
        signingService: Z,
        hostname: Q,
        ...E && {
          signingRegion: E
        },
        ...((X = C[F]) == null ? void 0 : X.signingService) && {
          signingService: C[F].signingService
        }
      }
    }, "getRegionInfo")
})
// @from(Start 3334530, End 3334799)
Bo0 = Y((Wo0) => {
  Object.defineProperty(Wo0, "__esModule", {
    value: !0
  });
  Wo0.resolveEventStreamSerdeConfig = void 0;
  var sU5 = (I) => ({
    ...I,
    eventStreamMarshaller: I.eventStreamSerdeProvider(I)
  });
  Wo0.resolveEventStreamSerdeConfig = sU5
})
// @from(Start 3334805, End 3334940)
Ao0 = Y((LX1) => {
  Object.defineProperty(LX1, "__esModule", {
    value: !0
  });
  var oU5 = x1();
  oU5.__exportStar(Bo0(), LX1)
})
// @from(Start 3334946, End 3336694)
BP = Y((LC3, Do0) => {
  var {
    defineProperty: Kn,
    getOwnPropertyDescriptor: eU5,
    getOwnPropertyNames: tU5
  } = Object, Iv5 = Object.prototype.hasOwnProperty, Xo0 = (I, d) => Kn(I, "name", {
    value: d,
    configurable: !0
  }), dv5 = (I, d) => {
    for (var G in d) Kn(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, Gv5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of tU5(d))
        if (!Iv5.call(I, C) && C !== G) Kn(I, C, {
          get: () => d[C],
          enumerable: !(Z = eU5(d, C)) || Z.enumerable
        })
    }
    return I
  }, Zv5 = (I) => Gv5(Kn({}, "__esModule", {
    value: !0
  }), I), Yo0 = {};
  dv5(Yo0, {
    contentLengthMiddleware: () => yX1,
    contentLengthMiddlewareOptions: () => _o0,
    getContentLengthPlugin: () => Wv5
  });
  Do0.exports = Zv5(Yo0);
  var Cv5 = t8(),
    Vo0 = "content-length";

  function yX1(I) {
    return (d) => async (G) => {
      let Z = G.request;
      if (Cv5.HttpRequest.isInstance(Z)) {
        let {
          body: C,
          headers: W
        } = Z;
        if (C && Object.keys(W).map((w) => w.toLowerCase()).indexOf(Vo0) === -1) try {
          let w = I(C);
          Z.headers = {
            ...Z.headers,
            [Vo0]: String(w)
          }
        } catch (w) {}
      }
      return d({
        ...G,
        request: Z
      })
    }
  }
  Xo0(yX1, "contentLengthMiddleware");
  var _o0 = {
      step: "build",
      tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
      name: "contentLengthMiddleware",
      override: !0
    },
    Wv5 = Xo0((I) => ({
      applyToStack: (d) => {
        d.add(yX1(I.bodyLengthChecker), _o0)
      }
    }), "getContentLengthPlugin")
})
// @from(Start 3336700, End 3337332)
AP = Y((Ho0) => {
  Object.defineProperty(Ho0, "__esModule", {
    value: !0
  });
  Ho0.getHomeDir = void 0;
  var wv5 = B1("os"),
    Bv5 = B1("path"),
    PX1 = {},
    Av5 = () => {
      if (process && process.geteuid) return `${process.geteuid()}`;
      return "DEFAULT"
    },
    Vv5 = () => {
      let {
        HOME: I,
        USERPROFILE: d,
        HOMEPATH: G,
        HOMEDRIVE: Z = `C:${Bv5.sep}`
      } = process.env;
      if (I) return I;
      if (d) return d;
      if (G) return `${Z}${G}`;
      let C = Av5();
      if (!PX1[C]) PX1[C] = wv5.homedir();
      return PX1[C]
    };
  Ho0.getHomeDir = Vv5
})
// @from(Start 3337338, End 3337721)
$X1 = Y((go0) => {
  Object.defineProperty(go0, "__esModule", {
    value: !0
  });
  go0.getSSOTokenFilepath = void 0;
  var Xv5 = B1("crypto"),
    Yv5 = B1("path"),
    _v5 = AP(),
    Dv5 = (I) => {
      let G = Xv5.createHash("sha1").update(I).digest("hex");
      return Yv5.join(_v5.getHomeDir(), ".aws", "sso", "cache", `${G}.json`)
    };
  go0.getSSOTokenFilepath = Dv5
})
// @from(Start 3337727, End 3338103)
zo0 = Y((Ko0) => {
  Object.defineProperty(Ko0, "__esModule", {
    value: !0
  });
  Ko0.getSSOTokenFromFile = void 0;
  var Hv5 = B1("fs"),
    Fv5 = $X1(),
    {
      readFile: gv5
    } = Hv5.promises,
    Jv5 = async (I) => {
      let d = Fv5.getSSOTokenFilepath(I),
        G = await gv5(d, "utf8");
      return JSON.parse(G)
    };
  Ko0.getSSOTokenFromFile = Jv5
})
// @from(Start 3338109, End 3338477)
TX1 = Y((Qo0) => {
  Object.defineProperty(Qo0, "__esModule", {
    value: !0
  });
  Qo0.slurpFile = void 0;
  var Kv5 = B1("fs"),
    {
      readFile: Nv5
    } = Kv5.promises,
    uX1 = {},
    zv5 = (I, d) => {
      if (!uX1[I] || (d === null || d === void 0 ? void 0 : d.ignoreCache)) uX1[I] = Nv5(I, "utf8");
      return uX1[I]
    };
  Qo0.slurpFile = zv5
})
// @from(Start 3338483, End 3342964)
rC = Y((TC3, XP) => {
  var {
    defineProperty: zn,
    getOwnPropertyDescriptor: Qv5,
    getOwnPropertyNames: fv5
  } = Object, qv5 = Object.prototype.hasOwnProperty, PZ = (I, d) => zn(I, "name", {
    value: d,
    configurable: !0
  }), Rv5 = (I, d) => {
    for (var G in d) zn(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, OX1 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of fv5(d))
        if (!qv5.call(I, C) && C !== G) zn(I, C, {
          get: () => d[C],
          enumerable: !(Z = Qv5(d, C)) || Z.enumerable
        })
    }
    return I
  }, lX1 = (I, d, G) => (OX1(I, d, "default"), G && OX1(G, d, "default")), Uv5 = (I) => OX1(zn({}, "__esModule", {
    value: !0
  }), I), VP = {};
  Rv5(VP, {
    CONFIG_PREFIX_SEPARATOR: () => fJ,
    DEFAULT_PROFILE: () => vo0,
    ENV_PROFILE: () => Uo0,
    getProfileName: () => vv5,
    loadSharedConfigFiles: () => So0,
    loadSsoSessionData: () => lv5,
    parseKnownFiles: () => hv5
  });
  XP.exports = Uv5(VP);
  lX1(VP, AP(), XP.exports);
  var Uo0 = "AWS_PROFILE",
    vo0 = "default",
    vv5 = PZ((I) => I.profile || process.env[Uo0] || vo0, "getProfileName");
  lX1(VP, $X1(), XP.exports);
  lX1(VP, zo0(), XP.exports);
  var Nn = k3(),
    Ev5 = PZ((I) => Object.entries(I).filter(([d]) => {
      let G = d.indexOf(fJ);
      if (G === -1) return !1;
      return Object.values(Nn.IniSectionType).includes(d.substring(0, G))
    }).reduce((d, [G, Z]) => {
      let C = G.indexOf(fJ),
        W = G.substring(0, C) === Nn.IniSectionType.PROFILE ? G.substring(C + 1) : G;
      return d[W] = Z, d
    }, {
      ...I.default && {
        default: I.default
      }
    }), "getConfigData"),
    Eo0 = B1("path"),
    Mv5 = AP(),
    Sv5 = "AWS_CONFIG_FILE",
    Mo0 = PZ(() => process.env[Sv5] || Eo0.join(Mv5.getHomeDir(), ".aws", "config"), "getConfigFilepath"),
    Lv5 = AP(),
    yv5 = "AWS_SHARED_CREDENTIALS_FILE",
    Pv5 = PZ(() => process.env[yv5] || Eo0.join(Lv5.getHomeDir(), ".aws", "credentials"), "getCredentialsFilepath"),
    $v5 = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/,
    uv5 = ["__proto__", "profile __proto__"],
    mX1 = PZ((I) => {
      let d = {},
        G, Z;
      for (let C of I.split(/\r?\n/)) {
        let W = C.split(/(^|\s)[;#]/)[0].trim();
        if (W[0] === "[" && W[W.length - 1] === "]") {
          G = void 0, Z = void 0;
          let B = W.substring(1, W.length - 1),
            A = $v5.exec(B);
          if (A) {
            let [, V, , X] = A;
            if (Object.values(Nn.IniSectionType).includes(V)) G = [V, X].join(fJ)
          } else G = B;
          if (uv5.includes(B)) throw new Error(`Found invalid profile name "${B}"`)
        } else if (G) {
          let B = W.indexOf("=");
          if (![0, -1].includes(B)) {
            let [A, V] = [W.substring(0, B).trim(), W.substring(B + 1).trim()];
            if (V === "") Z = A;
            else {
              if (Z && C.trimStart() === C) Z = void 0;
              d[G] = d[G] || {};
              let X = Z ? [Z, A].join(fJ) : A;
              d[G][X] = V
            }
          }
        }
      }
      return d
    }, "parseIni"),
    qo0 = TX1(),
    Ro0 = PZ(() => ({}), "swallowError"),
    fJ = ".",
    So0 = PZ(async (I = {}) => {
      let {
        filepath: d = Pv5(),
        configFilepath: G = Mo0()
      } = I, Z = await Promise.all([qo0.slurpFile(G, {
        ignoreCache: I.ignoreCache
      }).then(mX1).then(Ev5).catch(Ro0), qo0.slurpFile(d, {
        ignoreCache: I.ignoreCache
      }).then(mX1).catch(Ro0)]);
      return {
        configFile: Z[0],
        credentialsFile: Z[1]
      }
    }, "loadSharedConfigFiles"),
    Tv5 = PZ((I) => Object.entries(I).filter(([d]) => d.startsWith(Nn.IniSectionType.SSO_SESSION + fJ)).reduce((d, [G, Z]) => ({
      ...d,
      [G.substring(G.indexOf(fJ) + 1)]: Z
    }), {}), "getSsoSessionData"),
    Ov5 = TX1(),
    mv5 = PZ(() => ({}), "swallowError"),
    lv5 = PZ(async (I = {}) => Ov5.slurpFile(I.configFilepath ?? Mo0()).then(mX1).then(Tv5).catch(mv5), "loadSsoSessionData"),
    bv5 = PZ((...I) => {
      let d = {};
      for (let G of I)
        for (let [Z, C] of Object.entries(G))
          if (d[Z] !== void 0) Object.assign(d[Z], C);
          else d[Z] = C;
      return d
    }, "mergeConfigFiles"),
    hv5 = PZ(async (I) => {
      let d = await So0(I);
      return bv5(d.configFile, d.credentialsFile)
    }, "parseKnownFiles")
})
// @from(Start 3342970, End 3345147)
mV = Y((OC3, Po0) => {
  var {
    defineProperty: Qn,
    getOwnPropertyDescriptor: jv5,
    getOwnPropertyNames: kv5
  } = Object, xv5 = Object.prototype.hasOwnProperty, _P = (I, d) => Qn(I, "name", {
    value: d,
    configurable: !0
  }), cv5 = (I, d) => {
    for (var G in d) Qn(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, pv5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of kv5(d))
        if (!xv5.call(I, C) && C !== G) Qn(I, C, {
          get: () => d[C],
          enumerable: !(Z = jv5(d, C)) || Z.enumerable
        })
    }
    return I
  }, iv5 = (I) => pv5(Qn({}, "__esModule", {
    value: !0
  }), I), yo0 = {};
  cv5(yo0, {
    loadConfig: () => ov5
  });
  Po0.exports = iv5(yo0);
  var YP = x3(),
    nv5 = _P((I) => async () => {
      try {
        let d = I(process.env);
        if (d === void 0) throw new Error;
        return d
      } catch (d) {
        throw new YP.CredentialsProviderError(d.message || `Cannot load config from environment variables with getter: ${I}`)
      }
    }, "fromEnv"),
    Lo0 = rC(),
    rv5 = _P((I, {
      preferredFile: d = "config",
      ...G
    } = {}) => async () => {
      let Z = Lo0.getProfileName(G),
        {
          configFile: C,
          credentialsFile: W
        } = await Lo0.loadSharedConfigFiles(G),
        w = W[Z] || {},
        B = C[Z] || {},
        A = d === "config" ? {
          ...w,
          ...B
        } : {
          ...B,
          ...w
        };
      try {
        let X = I(A, d === "config" ? C : W);
        if (X === void 0) throw new Error;
        return X
      } catch (V) {
        throw new YP.CredentialsProviderError(V.message || `Cannot load config for profile ${Z} in SDK configuration files with getter: ${I}`)
      }
    }, "fromSharedConfigFiles"),
    av5 = _P((I) => typeof I === "function", "isFunction"),
    sv5 = _P((I) => av5(I) ? async () => await I(): YP.fromStatic(I), "fromStatic"),
    ov5 = _P(({
      environmentVariableSelector: I,
      configFileSelector: d,
      default: G
    }, Z = {}) => YP.memoize(YP.chain(nv5(I), rv5(d, Z), sv5(G))), "loadConfig")
})
// @from(Start 3345153, End 3346102)
lo0 = Y((Oo0) => {
  Object.defineProperty(Oo0, "__esModule", {
    value: !0
  });
  Oo0.getEndpointUrlConfig = void 0;
  var $o0 = rC(),
    uo0 = "AWS_ENDPOINT_URL",
    To0 = "endpoint_url",
    ev5 = (I) => ({
      environmentVariableSelector: (d) => {
        let G = I.split(" ").map((W) => W.toUpperCase()),
          Z = d[[uo0, ...G].join("_")];
        if (Z) return Z;
        let C = d[uo0];
        if (C) return C;
        return
      },
      configFileSelector: (d, G) => {
        if (G && d.services) {
          let C = G[["services", d.services].join($o0.CONFIG_PREFIX_SEPARATOR)];
          if (C) {
            let W = I.split(" ").map((B) => B.toLowerCase()),
              w = C[[W.join("_"), To0].join($o0.CONFIG_PREFIX_SEPARATOR)];
            if (w) return w
          }
        }
        let Z = d[To0];
        if (Z) return Z;
        return
      },
      default: void 0
    });
  Oo0.getEndpointUrlConfig = ev5
})
// @from(Start 3346108, End 3346371)
jo0 = Y((bo0) => {
  Object.defineProperty(bo0, "__esModule", {
    value: !0
  });
  bo0.getEndpointFromConfig = void 0;
  var tv5 = mV(),
    IE5 = lo0(),
    dE5 = async (I) => tv5.loadConfig(IE5.getEndpointUrlConfig(I))();
  bo0.getEndpointFromConfig = dE5
})
// @from(Start 3346377, End 3347553)
po0 = Y((bC3, co0) => {
  var {
    defineProperty: fn,
    getOwnPropertyDescriptor: GE5,
    getOwnPropertyNames: ZE5
  } = Object, CE5 = Object.prototype.hasOwnProperty, WE5 = (I, d) => fn(I, "name", {
    value: d,
    configurable: !0
  }), wE5 = (I, d) => {
    for (var G in d) fn(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, BE5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of ZE5(d))
        if (!CE5.call(I, C) && C !== G) fn(I, C, {
          get: () => d[C],
          enumerable: !(Z = GE5(d, C)) || Z.enumerable
        })
    }
    return I
  }, AE5 = (I) => BE5(fn({}, "__esModule", {
    value: !0
  }), I), ko0 = {};
  wE5(ko0, {
    parseQueryString: () => xo0
  });
  co0.exports = AE5(ko0);

  function xo0(I) {
    let d = {};
    if (I = I.replace(/^\?/, ""), I)
      for (let G of I.split("&")) {
        let [Z, C = null] = G.split("=");
        if (Z = decodeURIComponent(Z), C) C = decodeURIComponent(C);
        if (!(Z in d)) d[Z] = C;
        else if (Array.isArray(d[Z])) d[Z].push(C);
        else d[Z] = [d[Z], C]
      }
    return d
  }
  WE5(xo0, "parseQueryString")
})
// @from(Start 3347559, End 3348759)
qJ = Y((hC3, ro0) => {
  var {
    defineProperty: qn,
    getOwnPropertyDescriptor: VE5,
    getOwnPropertyNames: XE5
  } = Object, YE5 = Object.prototype.hasOwnProperty, _E5 = (I, d) => qn(I, "name", {
    value: d,
    configurable: !0
  }), DE5 = (I, d) => {
    for (var G in d) qn(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, HE5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of XE5(d))
        if (!YE5.call(I, C) && C !== G) qn(I, C, {
          get: () => d[C],
          enumerable: !(Z = VE5(d, C)) || Z.enumerable
        })
    }
    return I
  }, FE5 = (I) => HE5(qn({}, "__esModule", {
    value: !0
  }), I), io0 = {};
  DE5(io0, {
    parseUrl: () => no0
  });
  ro0.exports = FE5(io0);
  var gE5 = po0(),
    no0 = _E5((I) => {
      if (typeof I === "string") return no0(new URL(I));
      let {
        hostname: d,
        pathname: G,
        port: Z,
        protocol: C,
        search: W
      } = I, w;
      if (W) w = gE5.parseQueryString(W);
      return {
        hostname: d,
        port: Z ? parseInt(Z) : void 0,
        protocol: C,
        path: G,
        query: w
      }
    }, "parseUrl")
})
// @from(Start 3348765, End 3351255)
n6 = Y((jC3, de0) => {
  var {
    defineProperty: Rn,
    getOwnPropertyDescriptor: JE5,
    getOwnPropertyNames: KE5
  } = Object, NE5 = Object.prototype.hasOwnProperty, bX1 = (I, d) => Rn(I, "name", {
    value: d,
    configurable: !0
  }), zE5 = (I, d) => {
    for (var G in d) Rn(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, QE5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of KE5(d))
        if (!NE5.call(I, C) && C !== G) Rn(I, C, {
          get: () => d[C],
          enumerable: !(Z = JE5(d, C)) || Z.enumerable
        })
    }
    return I
  }, fE5 = (I) => QE5(Rn({}, "__esModule", {
    value: !0
  }), I), ao0 = {};
  zE5(ao0, {
    deserializerMiddleware: () => so0,
    deserializerMiddlewareOption: () => eo0,
    getSerdePlugin: () => Ie0,
    serializerMiddleware: () => oo0,
    serializerMiddlewareOption: () => to0
  });
  de0.exports = fE5(ao0);
  var so0 = bX1((I, d) => (G, Z) => async (C) => {
      let {
        response: W
      } = await G(C);
      try {
        let w = await d(W, I);
        return {
          response: W,
          output: w
        }
      } catch (w) {
        if (Object.defineProperty(w, "$response", {
            value: W
          }), !("$metadata" in w)) {
          if (w.message += `
  Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`, typeof w.$responseBodyText !== "undefined") {
            if (w.$response) w.$response.body = w.$responseBodyText
          }
        }
        throw w
      }
    }, "deserializerMiddleware"),
    oo0 = bX1((I, d) => (G, Z) => async (C) => {
      var W;
      let w = ((W = Z.endpointV2) == null ? void 0 : W.url) && I.urlParser ? async () => I.urlParser(Z.endpointV2.url): I.endpoint;
      if (!w) throw new Error("No valid endpoint provider available.");
      let B = await d(C.input, {
        ...I,
        endpoint: w
      });
      return G({
        ...C,
        request: B
      })
    }, "serializerMiddleware"),
    eo0 = {
      name: "deserializerMiddleware",
      step: "deserialize",
      tags: ["DESERIALIZER"],
      override: !0
    },
    to0 = {
      name: "serializerMiddleware",
      step: "serialize",
      tags: ["SERIALIZER"],
      override: !0
    };

  function Ie0(I, d, G) {
    return {
      applyToStack: (Z) => {
        Z.add(so0(I, G), eo0), Z.add(oo0(I, d), to0)
      }
    }
  }
  bX1(Ie0, "getSerdePlugin")
})
// @from(Start 3351261, End 3357819)
c3 = Y((kC3, Ae0) => {
  var {
    defineProperty: vn,
    getOwnPropertyDescriptor: qE5,
    getOwnPropertyNames: RE5
  } = Object, UE5 = Object.prototype.hasOwnProperty, aC = (I, d) => vn(I, "name", {
    value: d,
    configurable: !0
  }), vE5 = (I, d) => {
    for (var G in d) vn(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, EE5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of RE5(d))
        if (!UE5.call(I, C) && C !== G) vn(I, C, {
          get: () => d[C],
          enumerable: !(Z = qE5(d, C)) || Z.enumerable
        })
    }
    return I
  }, ME5 = (I) => EE5(vn({}, "__esModule", {
    value: !0
  }), I), Ze0 = {};
  vE5(Ze0, {
    endpointMiddleware: () => we0,
    endpointMiddlewareOptions: () => Be0,
    getEndpointFromInstructions: () => Ce0,
    getEndpointPlugin: () => lE5,
    resolveEndpointConfig: () => bE5,
    resolveParams: () => We0,
    toEndpointV1: () => hX1
  });
  Ae0.exports = ME5(Ze0);
  var SE5 = aC(async (I) => {
      let d = (I == null ? void 0 : I.Bucket) || "";
      if (typeof I.Bucket === "string") I.Bucket = d.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
      if (uE5(d)) {
        if (I.ForcePathStyle === !0) throw new Error("Path-style addressing cannot be used with ARN buckets")
      } else if (!$E5(d) || d.indexOf(".") !== -1 && !String(I.Endpoint).startsWith("http:") || d.toLowerCase() !== d || d.length < 3) I.ForcePathStyle = !0;
      if (I.DisableMultiRegionAccessPoints) I.disableMultiRegionAccessPoints = !0, I.DisableMRAP = !0;
      return I
    }, "resolveParamsForS3"),
    LE5 = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/,
    yE5 = /(\d+\.){3}\d+/,
    PE5 = /\.\./,
    $E5 = aC((I) => LE5.test(I) && !yE5.test(I) && !PE5.test(I), "isDnsCompatibleBucketName"),
    uE5 = aC((I) => {
      let [d, G, Z, , , C] = I.split(":"), W = d === "arn" && I.split(":").length >= 6, w = Boolean(W && G && Z && C);
      if (W && !w) throw new Error(`Invalid ARN: ${I} was an invalid ARN.`);
      return w
    }, "isArnBucketName"),
    TE5 = aC((I, d, G) => {
      let Z = aC(async () => {
        let C = G[I] ?? G[d];
        if (typeof C === "function") return C();
        return C
      }, "configProvider");
      if (I === "credentialScope" || d === "CredentialScope") return async () => {
        let C = typeof G.credentials === "function" ? await G.credentials() : G.credentials;
        return (C == null ? void 0 : C.credentialScope) ?? (C == null ? void 0 : C.CredentialScope)
      };
      if (I === "endpoint" || d === "endpoint") return async () => {
        let C = await Z();
        if (C && typeof C === "object") {
          if ("url" in C) return C.url.href;
          if ("hostname" in C) {
            let {
              protocol: W,
              hostname: w,
              port: B,
              path: A
            } = C;
            return `${W}//${w}${B?":"+B:""}${A}`
          }
        }
        return C
      };
      return Z
    }, "createConfigValueProvider"),
    OE5 = jo0(),
    Ge0 = qJ(),
    hX1 = aC((I) => {
      if (typeof I === "object") {
        if ("url" in I) return Ge0.parseUrl(I.url);
        return I
      }
      return Ge0.parseUrl(I)
    }, "toEndpointV1"),
    Ce0 = aC(async (I, d, G, Z) => {
      if (!G.endpoint) {
        let w = await OE5.getEndpointFromConfig(G.serviceId || "");
        if (w) G.endpoint = () => Promise.resolve(hX1(w))
      }
      let C = await We0(I, d, G);
      if (typeof G.endpointProvider !== "function") throw new Error("config.endpointProvider is not set.");
      return G.endpointProvider(C, Z)
    }, "getEndpointFromInstructions"),
    We0 = aC(async (I, d, G) => {
      var Z;
      let C = {},
        W = ((Z = d == null ? void 0 : d.getEndpointParameterInstructions) == null ? void 0 : Z.call(d)) || {};
      for (let [w, B] of Object.entries(W)) switch (B.type) {
        case "staticContextParams":
          C[w] = B.value;
          break;
        case "contextParams":
          C[w] = I[B.name];
          break;
        case "clientContextParams":
        case "builtInParams":
          C[w] = await TE5(B.name, w, G)();
          break;
        default:
          throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(B))
      }
      if (Object.keys(W).length === 0) Object.assign(C, G);
      if (String(G.serviceId).toLowerCase() === "s3") await SE5(C);
      return C
    }, "resolveParams"),
    Un = Fq(),
    we0 = aC(({
      config: I,
      instructions: d
    }) => {
      return (G, Z) => async (C) => {
        var W, w, B;
        let A = await Ce0(C.input, {
          getEndpointParameterInstructions() {
            return d
          }
        }, {
          ...I
        }, Z);
        Z.endpointV2 = A, Z.authSchemes = (W = A.properties) == null ? void 0 : W.authSchemes;
        let V = (w = Z.authSchemes) == null ? void 0 : w[0];
        if (V) {
          Z.signing_region = V.signingRegion, Z.signing_service = V.signingName;
          let X = Un.getSmithyContext(Z),
            _ = (B = X == null ? void 0 : X.selectedHttpAuthScheme) == null ? void 0 : B.httpAuthOption;
          if (_) _.signingProperties = Object.assign(_.signingProperties || {}, {
            signing_region: V.signingRegion,
            signingRegion: V.signingRegion,
            signing_service: V.signingName,
            signingName: V.signingName,
            signingRegionSet: V.signingRegionSet
          }, V.properties)
        }
        return G({
          ...C
        })
      }
    }, "endpointMiddleware"),
    mE5 = n6(),
    Be0 = {
      step: "serialize",
      tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
      name: "endpointV2Middleware",
      override: !0,
      relation: "before",
      toMiddleware: mE5.serializerMiddlewareOption.name
    },
    lE5 = aC((I, d) => ({
      applyToStack: (G) => {
        G.addRelativeTo(we0({
          config: I,
          instructions: d
        }), Be0)
      }
    }), "getEndpointPlugin"),
    bE5 = aC((I) => {
      let d = I.tls ?? !0,
        {
          endpoint: G
        } = I,
        Z = G != null ? async () => hX1(await Un.normalizeProvider(G)()): void 0;
      return {
        ...I,
        endpoint: Z,
        tls: d,
        isCustomEndpoint: !!G,
        useDualstackEndpoint: Un.normalizeProvider(I.useDualstackEndpoint ?? !1),
        useFipsEndpoint: Un.normalizeProvider(I.useFipsEndpoint ?? !1)
      }
    }, "resolveEndpointConfig")
})
// @from(Start 3357825, End 3358227)
jX1 = Y((Ve0) => {
  Object.defineProperty(Ve0, "__esModule", {
    value: !0
  });
  Ve0.default = kE5;
  var hE5 = jE5(B1("crypto"));

  function jE5(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }
  var Mn = new Uint8Array(256),
    En = Mn.length;

  function kE5() {
    if (En > Mn.length - 16) hE5.default.randomFillSync(Mn), En = 0;
    return Mn.slice(En, En += 16)
  }
})
// @from(Start 3358233, End 3358494)
_e0 = Y((Xe0) => {
  Object.defineProperty(Xe0, "__esModule", {
    value: !0
  });
  Xe0.default = void 0;
  var cE5 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  Xe0.default = cE5
})
// @from(Start 3358500, End 3358836)
DP = Y((De0) => {
  Object.defineProperty(De0, "__esModule", {
    value: !0
  });
  De0.default = void 0;
  var pE5 = iE5(_e0());

  function iE5(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }

  function nE5(I) {
    return typeof I === "string" && pE5.default.test(I)
  }
  var rE5 = nE5;
  De0.default = rE5
})
// @from(Start 3358842, End 3359666)
HP = Y((ge0) => {
  Object.defineProperty(ge0, "__esModule", {
    value: !0
  });
  ge0.default = void 0;
  ge0.unsafeStringify = Fe0;
  var aE5 = sE5(DP());

  function sE5(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }
  var I7 = [];
  for (let I = 0; I < 256; ++I) I7.push((I + 256).toString(16).slice(1));

  function Fe0(I, d = 0) {
    return I7[I[d + 0]] + I7[I[d + 1]] + I7[I[d + 2]] + I7[I[d + 3]] + "-" + I7[I[d + 4]] + I7[I[d + 5]] + "-" + I7[I[d + 6]] + I7[I[d + 7]] + "-" + I7[I[d + 8]] + I7[I[d + 9]] + "-" + I7[I[d + 10]] + I7[I[d + 11]] + I7[I[d + 12]] + I7[I[d + 13]] + I7[I[d + 14]] + I7[I[d + 15]]
  }

  function oE5(I, d = 0) {
    let G = Fe0(I, d);
    if (!aE5.default(G)) throw TypeError("Stringified UUID is invalid");
    return G
  }
  var eE5 = oE5;
  ge0.default = eE5
})
// @from(Start 3359672, End 3361209)
Qe0 = Y((Ne0) => {
  Object.defineProperty(Ne0, "__esModule", {
    value: !0
  });
  Ne0.default = void 0;
  var IM5 = GM5(jX1()),
    dM5 = HP();

  function GM5(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }
  var Ke0, kX1, xX1 = 0,
    cX1 = 0;

  function ZM5(I, d, G) {
    let Z = d && G || 0,
      C = d || new Array(16);
    I = I || {};
    let W = I.node || Ke0,
      w = I.clockseq !== void 0 ? I.clockseq : kX1;
    if (W == null || w == null) {
      let F = I.random || (I.rng || IM5.default)();
      if (W == null) W = Ke0 = [F[0] | 1, F[1], F[2], F[3], F[4], F[5]];
      if (w == null) w = kX1 = (F[6] << 8 | F[7]) & 16383
    }
    let B = I.msecs !== void 0 ? I.msecs : Date.now(),
      A = I.nsecs !== void 0 ? I.nsecs : cX1 + 1,
      V = B - xX1 + (A - cX1) / 1e4;
    if (V < 0 && I.clockseq === void 0) w = w + 1 & 16383;
    if ((V < 0 || B > xX1) && I.nsecs === void 0) A = 0;
    if (A >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    xX1 = B, cX1 = A, kX1 = w, B += 12219292800000;
    let X = ((B & 268435455) * 1e4 + A) % 4294967296;
    C[Z++] = X >>> 24 & 255, C[Z++] = X >>> 16 & 255, C[Z++] = X >>> 8 & 255, C[Z++] = X & 255;
    let _ = B / 4294967296 * 1e4 & 268435455;
    C[Z++] = _ >>> 8 & 255, C[Z++] = _ & 255, C[Z++] = _ >>> 24 & 15 | 16, C[Z++] = _ >>> 16 & 255, C[Z++] = w >>> 8 | 128, C[Z++] = w & 255;
    for (let F = 0; F < 6; ++F) C[Z + F] = W[F];
    return d || dM5.unsafeStringify(C)
  }
  var CM5 = ZM5;
  Ne0.default = CM5
})
// @from(Start 3361215, End 3362093)
pX1 = Y((fe0) => {
  Object.defineProperty(fe0, "__esModule", {
    value: !0
  });
  fe0.default = void 0;
  var WM5 = wM5(DP());

  function wM5(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }

  function BM5(I) {
    if (!WM5.default(I)) throw TypeError("Invalid UUID");
    let d, G = new Uint8Array(16);
    return G[0] = (d = parseInt(I.slice(0, 8), 16)) >>> 24, G[1] = d >>> 16 & 255, G[2] = d >>> 8 & 255, G[3] = d & 255, G[4] = (d = parseInt(I.slice(9, 13), 16)) >>> 8, G[5] = d & 255, G[6] = (d = parseInt(I.slice(14, 18), 16)) >>> 8, G[7] = d & 255, G[8] = (d = parseInt(I.slice(19, 23), 16)) >>> 8, G[9] = d & 255, G[10] = (d = parseInt(I.slice(24, 36), 16)) / 1099511627776 & 255, G[11] = d / 4294967296 & 255, G[12] = d >>> 24 & 255, G[13] = d >>> 16 & 255, G[14] = d >>> 8 & 255, G[15] = d & 255, G
  }
  var AM5 = BM5;
  fe0.default = AM5
})
// @from(Start 3362099, End 3363359)
iX1 = Y((ve0) => {
  Object.defineProperty(ve0, "__esModule", {
    value: !0
  });
  ve0.URL = ve0.DNS = void 0;
  ve0.default = DM5;
  var VM5 = HP(),
    XM5 = YM5(pX1());

  function YM5(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }

  function _M5(I) {
    I = unescape(encodeURIComponent(I));
    let d = [];
    for (let G = 0; G < I.length; ++G) d.push(I.charCodeAt(G));
    return d
  }
  var Re0 = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  ve0.DNS = Re0;
  var Ue0 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  ve0.URL = Ue0;

  function DM5(I, d, G) {
    function Z(C, W, w, B) {
      var A;
      if (typeof C === "string") C = _M5(C);
      if (typeof W === "string") W = XM5.default(W);
      if (((A = W) === null || A === void 0 ? void 0 : A.length) !== 16) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let V = new Uint8Array(16 + C.length);
      if (V.set(W), V.set(C, W.length), V = G(V), V[6] = V[6] & 15 | d, V[8] = V[8] & 63 | 128, w) {
        B = B || 0;
        for (let X = 0; X < 16; ++X) w[B + X] = V[X];
        return w
      }
      return VM5.unsafeStringify(V)
    }
    try {
      Z.name = I
    } catch (C) {}
    return Z.DNS = Re0, Z.URL = Ue0, Z
  }
})
// @from(Start 3363365, End 3363823)
Le0 = Y((Me0) => {
  Object.defineProperty(Me0, "__esModule", {
    value: !0
  });
  Me0.default = void 0;
  var gM5 = JM5(B1("crypto"));

  function JM5(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }

  function KM5(I) {
    if (Array.isArray(I)) I = Buffer.from(I);
    else if (typeof I === "string") I = Buffer.from(I, "utf8");
    return gM5.default.createHash("md5").update(I).digest()
  }
  var NM5 = KM5;
  Me0.default = NM5
})
// @from(Start 3363829, End 3364153)
ue0 = Y((Pe0) => {
  Object.defineProperty(Pe0, "__esModule", {
    value: !0
  });
  Pe0.default = void 0;
  var zM5 = ye0(iX1()),
    QM5 = ye0(Le0());

  function ye0(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }
  var fM5 = zM5.default("v3", 48, QM5.default),
    qM5 = fM5;
  Pe0.default = qM5
})
// @from(Start 3364159, End 3364463)
me0 = Y((Te0) => {
  Object.defineProperty(Te0, "__esModule", {
    value: !0
  });
  Te0.default = void 0;
  var RM5 = UM5(B1("crypto"));

  function UM5(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }
  var vM5 = {
    randomUUID: RM5.default.randomUUID
  };
  Te0.default = vM5
})
// @from(Start 3364469, End 3365123)
ke0 = Y((he0) => {
  Object.defineProperty(he0, "__esModule", {
    value: !0
  });
  he0.default = void 0;
  var le0 = be0(me0()),
    EM5 = be0(jX1()),
    MM5 = HP();

  function be0(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }

  function SM5(I, d, G) {
    if (le0.default.randomUUID && !d && !I) return le0.default.randomUUID();
    I = I || {};
    let Z = I.random || (I.rng || EM5.default)();
    if (Z[6] = Z[6] & 15 | 64, Z[8] = Z[8] & 63 | 128, d) {
      G = G || 0;
      for (let C = 0; C < 16; ++C) d[G + C] = Z[C];
      return d
    }
    return MM5.unsafeStringify(Z)
  }
  var LM5 = SM5;
  he0.default = LM5
})
// @from(Start 3365129, End 3365588)
pe0 = Y((xe0) => {
  Object.defineProperty(xe0, "__esModule", {
    value: !0
  });
  xe0.default = void 0;
  var yM5 = PM5(B1("crypto"));

  function PM5(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }

  function $M5(I) {
    if (Array.isArray(I)) I = Buffer.from(I);
    else if (typeof I === "string") I = Buffer.from(I, "utf8");
    return yM5.default.createHash("sha1").update(I).digest()
  }
  var uM5 = $M5;
  xe0.default = uM5
})
// @from(Start 3365594, End 3365918)
ae0 = Y((ne0) => {
  Object.defineProperty(ne0, "__esModule", {
    value: !0
  });
  ne0.default = void 0;
  var TM5 = ie0(iX1()),
    OM5 = ie0(pe0());

  function ie0(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }
  var mM5 = TM5.default("v5", 80, OM5.default),
    lM5 = mM5;
  ne0.default = lM5
})
// @from(Start 3365924, End 3366106)
ee0 = Y((se0) => {
  Object.defineProperty(se0, "__esModule", {
    value: !0
  });
  se0.default = void 0;
  var bM5 = "00000000-0000-0000-0000-000000000000";
  se0.default = bM5
})
// @from(Start 3366112, End 3366491)
dt0 = Y((te0) => {
  Object.defineProperty(te0, "__esModule", {
    value: !0
  });
  te0.default = void 0;
  var hM5 = jM5(DP());

  function jM5(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }

  function kM5(I) {
    if (!hM5.default(I)) throw TypeError("Invalid UUID");
    return parseInt(I.slice(14, 15), 16)
  }
  var xM5 = kM5;
  te0.default = xM5
})
// @from(Start 3366497, End 3367911)
Gt0 = Y((sC) => {
  Object.defineProperty(sC, "__esModule", {
    value: !0
  });
  Object.defineProperty(sC, "NIL", {
    enumerable: !0,
    get: function() {
      return rM5.default
    }
  });
  Object.defineProperty(sC, "parse", {
    enumerable: !0,
    get: function() {
      return eM5.default
    }
  });
  Object.defineProperty(sC, "stringify", {
    enumerable: !0,
    get: function() {
      return oM5.default
    }
  });
  Object.defineProperty(sC, "v1", {
    enumerable: !0,
    get: function() {
      return cM5.default
    }
  });
  Object.defineProperty(sC, "v3", {
    enumerable: !0,
    get: function() {
      return pM5.default
    }
  });
  Object.defineProperty(sC, "v4", {
    enumerable: !0,
    get: function() {
      return iM5.default
    }
  });
  Object.defineProperty(sC, "v5", {
    enumerable: !0,
    get: function() {
      return nM5.default
    }
  });
  Object.defineProperty(sC, "validate", {
    enumerable: !0,
    get: function() {
      return sM5.default
    }
  });
  Object.defineProperty(sC, "version", {
    enumerable: !0,
    get: function() {
      return aM5.default
    }
  });
  var cM5 = lV(Qe0()),
    pM5 = lV(ue0()),
    iM5 = lV(ke0()),
    nM5 = lV(ae0()),
    rM5 = lV(ee0()),
    aM5 = lV(dt0()),
    sM5 = lV(DP()),
    oM5 = lV(HP()),
    eM5 = lV(pX1());

  function lV(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }
})
// @from(Start 3367917, End 3370577)
nX1 = Y((WW3, wt0) => {
  var {
    defineProperty: Sn,
    getOwnPropertyDescriptor: tM5,
    getOwnPropertyNames: IS5
  } = Object, dS5 = Object.prototype.hasOwnProperty, Qq = (I, d) => Sn(I, "name", {
    value: d,
    configurable: !0
  }), GS5 = (I, d) => {
    for (var G in d) Sn(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, ZS5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of IS5(d))
        if (!dS5.call(I, C) && C !== G) Sn(I, C, {
          get: () => d[C],
          enumerable: !(Z = tM5(d, C)) || Z.enumerable
        })
    }
    return I
  }, CS5 = (I) => ZS5(Sn({}, "__esModule", {
    value: !0
  }), I), Zt0 = {};
  GS5(Zt0, {
    isClockSkewCorrectedError: () => Ct0,
    isClockSkewError: () => YS5,
    isRetryableByTrait: () => XS5,
    isServerError: () => DS5,
    isThrottlingError: () => _S5,
    isTransientError: () => Wt0
  });
  wt0.exports = CS5(Zt0);
  var WS5 = ["AuthFailure", "InvalidSignatureException", "RequestExpired", "RequestInTheFuture", "RequestTimeTooSkewed", "SignatureDoesNotMatch"],
    wS5 = ["BandwidthLimitExceeded", "EC2ThrottledException", "LimitExceededException", "PriorRequestNotComplete", "ProvisionedThroughputExceededException", "RequestLimitExceeded", "RequestThrottled", "RequestThrottledException", "SlowDown", "ThrottledException", "Throttling", "ThrottlingException", "TooManyRequestsException", "TransactionInProgressException"],
    BS5 = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"],
    AS5 = [500, 502, 503, 504],
    VS5 = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"],
    XS5 = Qq((I) => I.$retryable !== void 0, "isRetryableByTrait"),
    YS5 = Qq((I) => WS5.includes(I.name), "isClockSkewError"),
    Ct0 = Qq((I) => {
      var d;
      return (d = I.$metadata) == null ? void 0 : d.clockSkewCorrected
    }, "isClockSkewCorrectedError"),
    _S5 = Qq((I) => {
      var d, G;
      return ((d = I.$metadata) == null ? void 0 : d.httpStatusCode) === 429 || wS5.includes(I.name) || ((G = I.$retryable) == null ? void 0 : G.throttling) == !0
    }, "isThrottlingError"),
    Wt0 = Qq((I) => {
      var d;
      return Ct0(I) || BS5.includes(I.name) || VS5.includes((I == null ? void 0 : I.code) || "") || AS5.includes(((d = I.$metadata) == null ? void 0 : d.httpStatusCode) || 0)
    }, "isTransientError"),
    DS5 = Qq((I) => {
      var d;
      if (((d = I.$metadata) == null ? void 0 : d.httpStatusCode) !== void 0) {
        let G = I.$metadata.httpStatusCode;
        if (500 <= G && G <= 599 && !Wt0(I)) return !0;
        return !1
      }
      return !1
    }, "isServerError")
})
// @from(Start 3370583, End 3379466)
fq = Y((wW3, Nt0) => {
  var {
    defineProperty: Ln,
    getOwnPropertyDescriptor: HS5,
    getOwnPropertyNames: FS5
  } = Object, gS5 = Object.prototype.hasOwnProperty, oC = (I, d) => Ln(I, "name", {
    value: d,
    configurable: !0
  }), JS5 = (I, d) => {
    for (var G in d) Ln(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, KS5 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of FS5(d))
        if (!gS5.call(I, C) && C !== G) Ln(I, C, {
          get: () => d[C],
          enumerable: !(Z = HS5(d, C)) || Z.enumerable
        })
    }
    return I
  }, NS5 = (I) => KS5(Ln({}, "__esModule", {
    value: !0
  }), I), At0 = {};
  JS5(At0, {
    AdaptiveRetryStrategy: () => US5,
    ConfiguredRetryStrategy: () => vS5,
    DEFAULT_MAX_ATTEMPTS: () => rX1,
    DEFAULT_RETRY_DELAY_BASE: () => FP,
    DEFAULT_RETRY_MODE: () => zS5,
    DefaultRateLimiter: () => Yt0,
    INITIAL_RETRY_TOKENS: () => aX1,
    INVOCATION_ID_HEADER: () => fS5,
    MAXIMUM_RETRY_DELAY: () => sX1,
    NO_RETRY_INCREMENT: () => Ft0,
    REQUEST_HEADER: () => qS5,
    RETRY_COST: () => Dt0,
    RETRY_MODES: () => Vt0,
    StandardRetryStrategy: () => oX1,
    THROTTLING_RETRY_DELAY_BASE: () => _t0,
    TIMEOUT_RETRY_COST: () => Ht0
  });
  Nt0.exports = NS5(At0);
  var Vt0 = ((I) => {
      return I.STANDARD = "standard", I.ADAPTIVE = "adaptive", I
    })(Vt0 || {}),
    rX1 = 3,
    zS5 = "standard",
    QS5 = nX1(),
    Xt0 = class I {
      constructor(d) {
        this.currentCapacity = 0, this.enabled = !1, this.lastMaxRate = 0, this.measuredTxRate = 0, this.requestCount = 0, this.lastTimestamp = 0, this.timeWindow = 0, this.beta = (d == null ? void 0 : d.beta) ?? 0.7, this.minCapacity = (d == null ? void 0 : d.minCapacity) ?? 1, this.minFillRate = (d == null ? void 0 : d.minFillRate) ?? 0.5, this.scaleConstant = (d == null ? void 0 : d.scaleConstant) ?? 0.4, this.smooth = (d == null ? void 0 : d.smooth) ?? 0.8;
        let G = this.getCurrentTimeInSeconds();
        this.lastThrottleTime = G, this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds()), this.fillRate = this.minFillRate, this.maxCapacity = this.minCapacity
      }
      getCurrentTimeInSeconds() {
        return Date.now() / 1000
      }
      async getSendToken() {
        return this.acquireTokenBucket(1)
      }
      async acquireTokenBucket(d) {
        if (!this.enabled) return;
        if (this.refillTokenBucket(), d > this.currentCapacity) {
          let G = (d - this.currentCapacity) / this.fillRate * 1000;
          await new Promise((Z) => setTimeout(Z, G))
        }
        this.currentCapacity = this.currentCapacity - d
      }
      refillTokenBucket() {
        let d = this.getCurrentTimeInSeconds();
        if (!this.lastTimestamp) {
          this.lastTimestamp = d;
          return
        }
        let G = (d - this.lastTimestamp) * this.fillRate;
        this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + G), this.lastTimestamp = d
      }
      updateClientSendingRate(d) {
        let G;
        if (this.updateMeasuredRate(), QS5.isThrottlingError(d)) {
          let C = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
          this.lastMaxRate = C, this.calculateTimeWindow(), this.lastThrottleTime = this.getCurrentTimeInSeconds(), G = this.cubicThrottle(C), this.enableTokenBucket()
        } else this.calculateTimeWindow(), G = this.cubicSuccess(this.getCurrentTimeInSeconds());
        let Z = Math.min(G, 2 * this.measuredTxRate);
        this.updateTokenBucketRate(Z)
      }
      calculateTimeWindow() {
        this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 0.3333333333333333))
      }
      cubicThrottle(d) {
        return this.getPrecise(d * this.beta)
      }
      cubicSuccess(d) {
        return this.getPrecise(this.scaleConstant * Math.pow(d - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate)
      }
      enableTokenBucket() {
        this.enabled = !0
      }
      updateTokenBucketRate(d) {
        this.refillTokenBucket(), this.fillRate = Math.max(d, this.minFillRate), this.maxCapacity = Math.max(d, this.minCapacity), this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity)
      }
      updateMeasuredRate() {
        let d = this.getCurrentTimeInSeconds(),
          G = Math.floor(d * 2) / 2;
        if (this.requestCount++, G > this.lastTxRateBucket) {
          let Z = this.requestCount / (G - this.lastTxRateBucket);
          this.measuredTxRate = this.getPrecise(Z * this.smooth + this.measuredTxRate * (1 - this.smooth)), this.requestCount = 0, this.lastTxRateBucket = G
        }
      }
      getPrecise(d) {
        return parseFloat(d.toFixed(8))
      }
    };
  oC(Xt0, "DefaultRateLimiter");
  var Yt0 = Xt0,
    FP = 100,
    sX1 = 20000,
    _t0 = 500,
    aX1 = 500,
    Dt0 = 5,
    Ht0 = 10,
    Ft0 = 1,
    fS5 = "amz-sdk-invocation-id",
    qS5 = "amz-sdk-request",
    RS5 = oC(() => {
      let I = FP;
      return {
        computeNextBackoffDelay: oC((Z) => {
          return Math.floor(Math.min(sX1, Math.random() * 2 ** Z * I))
        }, "computeNextBackoffDelay"),
        setDelayBase: oC((Z) => {
          I = Z
        }, "setDelayBase")
      }
    }, "getDefaultRetryBackoffStrategy"),
    Bt0 = oC(({
      retryDelay: I,
      retryCount: d,
      retryCost: G
    }) => {
      return {
        getRetryCount: oC(() => d, "getRetryCount"),
        getRetryDelay: oC(() => Math.min(sX1, I), "getRetryDelay"),
        getRetryCost: oC(() => G, "getRetryCost")
      }
    }, "createDefaultRetryToken"),
    gt0 = class I {
      constructor(d) {
        this.maxAttempts = d, this.mode = "standard", this.capacity = aX1, this.retryBackoffStrategy = RS5(), this.maxAttemptsProvider = typeof d === "function" ? d : async () => d
      }
      async acquireInitialRetryToken(d) {
        return Bt0({
          retryDelay: FP,
          retryCount: 0
        })
      }
      async refreshRetryTokenForRetry(d, G) {
        let Z = await this.getMaxAttempts();
        if (this.shouldRetry(d, G, Z)) {
          let C = G.errorType;
          this.retryBackoffStrategy.setDelayBase(C === "THROTTLING" ? _t0 : FP);
          let W = this.retryBackoffStrategy.computeNextBackoffDelay(d.getRetryCount()),
            w = G.retryAfterHint ? Math.max(G.retryAfterHint.getTime() - Date.now() || 0, W) : W,
            B = this.getCapacityCost(C);
          return this.capacity -= B, Bt0({
            retryDelay: w,
            retryCount: d.getRetryCount() + 1,
            retryCost: B
          })
        }
        throw new Error("No retry token available")
      }
      recordSuccess(d) {
        this.capacity = Math.max(aX1, this.capacity + (d.getRetryCost() ?? Ft0))
      }
      getCapacity() {
        return this.capacity
      }
      async getMaxAttempts() {
        try {
          return await this.maxAttemptsProvider()
        } catch (d) {
          return console.warn(`Max attempts provider could not resolve. Using default of ${rX1}`), rX1
        }
      }
      shouldRetry(d, G, Z) {
        return d.getRetryCount() + 1 < Z && this.capacity >= this.getCapacityCost(G.errorType) && this.isRetryableError(G.errorType)
      }
      getCapacityCost(d) {
        return d === "TRANSIENT" ? Ht0 : Dt0
      }
      isRetryableError(d) {
        return d === "THROTTLING" || d === "TRANSIENT"
      }
    };
  oC(gt0, "StandardRetryStrategy");
  var oX1 = gt0,
    Jt0 = class I {
      constructor(d, G) {
        this.maxAttemptsProvider = d, this.mode = "adaptive";
        let {
          rateLimiter: Z
        } = G ?? {};
        this.rateLimiter = Z ?? new Yt0, this.standardRetryStrategy = new oX1(d)
      }
      async acquireInitialRetryToken(d) {
        return await this.rateLimiter.getSendToken(), this.standardRetryStrategy.acquireInitialRetryToken(d)
      }
      async refreshRetryTokenForRetry(d, G) {
        return this.rateLimiter.updateClientSendingRate(G), this.standardRetryStrategy.refreshRetryTokenForRetry(d, G)
      }
      recordSuccess(d) {
        this.rateLimiter.updateClientSendingRate({}), this.standardRetryStrategy.recordSuccess(d)
      }
    };
  oC(Jt0, "AdaptiveRetryStrategy");
  var US5 = Jt0,
    Kt0 = class I extends oX1 {
      constructor(d, G = FP) {
        super(typeof d === "function" ? d : async () => d);
        if (typeof G === "number") this.computeNextBackoffDelay = () => G;
        else this.computeNextBackoffDelay = G
      }
      async refreshRetryTokenForRetry(d, G) {
        let Z = await super.refreshRetryTokenForRetry(d, G);
        return Z.getRetryDelay = () => this.computeNextBackoffDelay(Z.getRetryCount()), Z
      }
    };
  oC(Kt0, "ConfiguredRetryStrategy");
  var vS5 = Kt0
})
// @from(Start 3379472, End 3379856)
ft0 = Y((zt0) => {
  Object.defineProperty(zt0, "__esModule", {
    value: !0
  });
  zt0.isStreamingPayload = void 0;
  var ES5 = B1("stream"),
    MS5 = (I) => (I === null || I === void 0 ? void 0 : I.body) instanceof ES5.Readable || typeof ReadableStream !== "undefined" && (I === null || I === void 0 ? void 0 : I.body) instanceof ReadableStream;
  zt0.isStreamingPayload = MS5
})