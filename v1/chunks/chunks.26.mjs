
// @from(Start 2996443, End 3002590)
ZO0 = Y((b73, GO0) => {
  var wX5 = dO0(),
    BX5 = {
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
      stopNodes: []
    };

  function BD(I) {
    if (this.options = Object.assign({}, BX5, I), this.options.ignoreAttributes || this.options.attributesGroupName) this.isAttribute = function() {
      return !1
    };
    else this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = XX5;
    if (this.processTextOrObjNode = AX5, this.options.format) this.indentate = VX5, this.tagEndChar = `>
`, this.newLine = `
`;
    else this.indentate = function() {
      return ""
    }, this.tagEndChar = ">", this.newLine = ""
  }
  BD.prototype.build = function(I) {
    if (this.options.preserveOrder) return wX5(I, this.options);
    else {
      if (Array.isArray(I) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) I = {
        [this.options.arrayNodeName]: I
      };
      return this.j2x(I, 0).val
    }
  };
  BD.prototype.j2x = function(I, d) {
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
      let W = I[C].length;
      for (let w = 0; w < W; w++) {
        let B = I[C][w];
        if (typeof B === "undefined");
        else if (B === null)
          if (C[0] === "?") Z += this.indentate(d) + "<" + C + "?" + this.tagEndChar;
          else Z += this.indentate(d) + "<" + C + "/" + this.tagEndChar;
        else if (typeof B === "object") Z += this.processTextOrObjNode(B, C, d);
        else Z += this.buildTextValNode(B, C, "", d)
      }
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
  BD.prototype.buildAttrPairStr = function(I, d) {
    if (d = this.options.attributeValueProcessor(I, "" + d), d = this.replaceEntitiesValue(d), this.options.suppressBooleanAttributes && d === "true") return " " + I;
    else return " " + I + '="' + d + '"'
  };

  function AX5(I, d, G) {
    let Z = this.j2x(I, G + 1);
    if (I[this.options.textNodeName] !== void 0 && Object.keys(I).length === 1) return this.buildTextValNode(I[this.options.textNodeName], d, Z.attrStr, G);
    else return this.buildObjectNode(Z.val, d, Z.attrStr, G)
  }
  BD.prototype.buildObjectNode = function(I, d, G, Z) {
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
  BD.prototype.closeTag = function(I) {
    let d = "";
    if (this.options.unpairedTags.indexOf(I) !== -1) {
      if (!this.options.suppressUnpairedNode) d = "/"
    } else if (this.options.suppressEmptyNode) d = "/";
    else d = `></${I}`;
    return d
  };
  BD.prototype.buildTextValNode = function(I, d, G, Z) {
    if (this.options.cdataPropName !== !1 && d === this.options.cdataPropName) return this.indentate(Z) + `<![CDATA[${I}]]>` + this.newLine;
    else if (this.options.commentPropName !== !1 && d === this.options.commentPropName) return this.indentate(Z) + `<!--${I}-->` + this.newLine;
    else if (d[0] === "?") return this.indentate(Z) + "<" + d + G + "?" + this.tagEndChar;
    else {
      let C = this.options.tagValueProcessor(d, I);
      if (C = this.replaceEntitiesValue(C), C === "") return this.indentate(Z) + "<" + d + G + this.closeTag(d) + this.tagEndChar;
      else return this.indentate(Z) + "<" + d + G + ">" + C + "</" + d + this.tagEndChar
    }
  };
  BD.prototype.replaceEntitiesValue = function(I) {
    if (I && I.length > 0 && this.options.processEntities)
      for (let d = 0; d < this.options.entities.length; d++) {
        let G = this.options.entities[d];
        I = I.replace(G.regex, G.val)
      }
    return I
  };

  function VX5(I) {
    return this.options.indentBy.repeat(I)
  }

  function XX5(I) {
    if (I.startsWith(this.options.attributeNamePrefix)) return I.substr(this.attrPrefixLen);
    else return !1
  }
  GO0.exports = BD
})
// @from(Start 3002596, End 3002760)
WO0 = Y((h73, CO0) => {
  var YX5 = hB1(),
    _X5 = sT0(),
    DX5 = ZO0();
  CO0.exports = {
    XMLParser: _X5,
    XMLValidator: YX5,
    XMLBuilder: DX5
  }
})
// @from(Start 3002766, End 3025535)
PV = Y((VO0) => {
  Object.defineProperty(VO0, "__esModule", {
    value: !0
  });
  VO0.de_GetSessionTokenCommand = VO0.de_GetFederationTokenCommand = VO0.de_GetCallerIdentityCommand = VO0.de_GetAccessKeyInfoCommand = VO0.de_DecodeAuthorizationMessageCommand = VO0.de_AssumeRoleWithWebIdentityCommand = VO0.de_AssumeRoleWithSAMLCommand = VO0.de_AssumeRoleCommand = VO0.se_GetSessionTokenCommand = VO0.se_GetFederationTokenCommand = VO0.se_GetCallerIdentityCommand = VO0.se_GetAccessKeyInfoCommand = VO0.se_DecodeAuthorizationMessageCommand = VO0.se_AssumeRoleWithWebIdentityCommand = VO0.se_AssumeRoleWithSAMLCommand = VO0.se_AssumeRoleCommand = void 0;
  var t2 = v0(),
    HX5 = mB1(),
    FX5 = WO0(),
    AD = wD(),
    gX5 = pp(),
    JX5 = async (I, d) => {
      let G = YD,
        Z;
      return Z = DD({
        ...xX5(I, d),
        Action: "AssumeRole",
        Version: "2011-06-15"
      }), XD(d, G, "/", void 0, Z)
    };
  VO0.se_AssumeRoleCommand = JX5;
  var KX5 = async (I, d) => {
    let G = YD,
      Z;
    return Z = DD({
      ...cX5(I, d),
      Action: "AssumeRoleWithSAML",
      Version: "2011-06-15"
    }), XD(d, G, "/", void 0, Z)
  };
  VO0.se_AssumeRoleWithSAMLCommand = KX5;
  var NX5 = async (I, d) => {
    let G = YD,
      Z;
    return Z = DD({
      ...pX5(I, d),
      Action: "AssumeRoleWithWebIdentity",
      Version: "2011-06-15"
    }), XD(d, G, "/", void 0, Z)
  };
  VO0.se_AssumeRoleWithWebIdentityCommand = NX5;
  var zX5 = async (I, d) => {
    let G = YD,
      Z;
    return Z = DD({
      ...iX5(I, d),
      Action: "DecodeAuthorizationMessage",
      Version: "2011-06-15"
    }), XD(d, G, "/", void 0, Z)
  };
  VO0.se_DecodeAuthorizationMessageCommand = zX5;
  var QX5 = async (I, d) => {
    let G = YD,
      Z;
    return Z = DD({
      ...nX5(I, d),
      Action: "GetAccessKeyInfo",
      Version: "2011-06-15"
    }), XD(d, G, "/", void 0, Z)
  };
  VO0.se_GetAccessKeyInfoCommand = QX5;
  var fX5 = async (I, d) => {
    let G = YD,
      Z;
    return Z = DD({
      ...rX5(I, d),
      Action: "GetCallerIdentity",
      Version: "2011-06-15"
    }), XD(d, G, "/", void 0, Z)
  };
  VO0.se_GetCallerIdentityCommand = fX5;
  var qX5 = async (I, d) => {
    let G = YD,
      Z;
    return Z = DD({
      ...aX5(I, d),
      Action: "GetFederationToken",
      Version: "2011-06-15"
    }), XD(d, G, "/", void 0, Z)
  };
  VO0.se_GetFederationTokenCommand = qX5;
  var RX5 = async (I, d) => {
    let G = YD,
      Z;
    return Z = DD({
      ...sX5(I, d),
      Action: "GetSessionToken",
      Version: "2011-06-15"
    }), XD(d, G, "/", void 0, Z)
  };
  VO0.se_GetSessionTokenCommand = RX5;
  var UX5 = async (I, d) => {
    if (I.statusCode >= 300) return vX5(I, d);
    let G = await yV(I.body, d),
      Z = {};
    return Z = IY5(G.AssumeRoleResult, d), {
      $metadata: u7(I),
      ...Z
    }
  };
  VO0.de_AssumeRoleCommand = UX5;
  var vX5 = async (I, d) => {
    let G = {
        ...I,
        body: await _D(I.body, d)
      },
      Z = HD(I, G.body);
    switch (Z) {
      case "ExpiredTokenException":
      case "com.amazonaws.sts#ExpiredTokenException":
        throw await cB1(G, d);
      case "MalformedPolicyDocument":
      case "com.amazonaws.sts#MalformedPolicyDocumentException":
        throw await np(G, d);
      case "PackedPolicyTooLarge":
      case "com.amazonaws.sts#PackedPolicyTooLargeException":
        throw await rp(G, d);
      case "RegionDisabledException":
      case "com.amazonaws.sts#RegionDisabledException":
        throw await Ey(G, d);
      default:
        let C = G.body;
        return VD({
          output: I,
          parsedBody: C.Error,
          errorCode: Z
        })
    }
  }, EX5 = async (I, d) => {
    if (I.statusCode >= 300) return MX5(I, d);
    let G = await yV(I.body, d),
      Z = {};
    return Z = dY5(G.AssumeRoleWithSAMLResult, d), {
      $metadata: u7(I),
      ...Z
    }
  };
  VO0.de_AssumeRoleWithSAMLCommand = EX5;
  var MX5 = async (I, d) => {
    let G = {
        ...I,
        body: await _D(I.body, d)
      },
      Z = HD(I, G.body);
    switch (Z) {
      case "ExpiredTokenException":
      case "com.amazonaws.sts#ExpiredTokenException":
        throw await cB1(G, d);
      case "IDPRejectedClaim":
      case "com.amazonaws.sts#IDPRejectedClaimException":
        throw await wO0(G, d);
      case "InvalidIdentityToken":
      case "com.amazonaws.sts#InvalidIdentityTokenException":
        throw await BO0(G, d);
      case "MalformedPolicyDocument":
      case "com.amazonaws.sts#MalformedPolicyDocumentException":
        throw await np(G, d);
      case "PackedPolicyTooLarge":
      case "com.amazonaws.sts#PackedPolicyTooLargeException":
        throw await rp(G, d);
      case "RegionDisabledException":
      case "com.amazonaws.sts#RegionDisabledException":
        throw await Ey(G, d);
      default:
        let C = G.body;
        return VD({
          output: I,
          parsedBody: C.Error,
          errorCode: Z
        })
    }
  }, SX5 = async (I, d) => {
    if (I.statusCode >= 300) return LX5(I, d);
    let G = await yV(I.body, d),
      Z = {};
    return Z = GY5(G.AssumeRoleWithWebIdentityResult, d), {
      $metadata: u7(I),
      ...Z
    }
  };
  VO0.de_AssumeRoleWithWebIdentityCommand = SX5;
  var LX5 = async (I, d) => {
    let G = {
        ...I,
        body: await _D(I.body, d)
      },
      Z = HD(I, G.body);
    switch (Z) {
      case "ExpiredTokenException":
      case "com.amazonaws.sts#ExpiredTokenException":
        throw await cB1(G, d);
      case "IDPCommunicationError":
      case "com.amazonaws.sts#IDPCommunicationErrorException":
        throw await jX5(G, d);
      case "IDPRejectedClaim":
      case "com.amazonaws.sts#IDPRejectedClaimException":
        throw await wO0(G, d);
      case "InvalidIdentityToken":
      case "com.amazonaws.sts#InvalidIdentityTokenException":
        throw await BO0(G, d);
      case "MalformedPolicyDocument":
      case "com.amazonaws.sts#MalformedPolicyDocumentException":
        throw await np(G, d);
      case "PackedPolicyTooLarge":
      case "com.amazonaws.sts#PackedPolicyTooLargeException":
        throw await rp(G, d);
      case "RegionDisabledException":
      case "com.amazonaws.sts#RegionDisabledException":
        throw await Ey(G, d);
      default:
        let C = G.body;
        return VD({
          output: I,
          parsedBody: C.Error,
          errorCode: Z
        })
    }
  }, yX5 = async (I, d) => {
    if (I.statusCode >= 300) return PX5(I, d);
    let G = await yV(I.body, d),
      Z = {};
    return Z = ZY5(G.DecodeAuthorizationMessageResult, d), {
      $metadata: u7(I),
      ...Z
    }
  };
  VO0.de_DecodeAuthorizationMessageCommand = yX5;
  var PX5 = async (I, d) => {
    let G = {
        ...I,
        body: await _D(I.body, d)
      },
      Z = HD(I, G.body);
    switch (Z) {
      case "InvalidAuthorizationMessageException":
      case "com.amazonaws.sts#InvalidAuthorizationMessageException":
        throw await kX5(G, d);
      default:
        let C = G.body;
        return VD({
          output: I,
          parsedBody: C.Error,
          errorCode: Z
        })
    }
  }, $X5 = async (I, d) => {
    if (I.statusCode >= 300) return uX5(I, d);
    let G = await yV(I.body, d),
      Z = {};
    return Z = wY5(G.GetAccessKeyInfoResult, d), {
      $metadata: u7(I),
      ...Z
    }
  };
  VO0.de_GetAccessKeyInfoCommand = $X5;
  var uX5 = async (I, d) => {
    let G = {
        ...I,
        body: await _D(I.body, d)
      },
      Z = HD(I, G.body),
      C = G.body;
    return VD({
      output: I,
      parsedBody: C.Error,
      errorCode: Z
    })
  }, TX5 = async (I, d) => {
    if (I.statusCode >= 300) return OX5(I, d);
    let G = await yV(I.body, d),
      Z = {};
    return Z = BY5(G.GetCallerIdentityResult, d), {
      $metadata: u7(I),
      ...Z
    }
  };
  VO0.de_GetCallerIdentityCommand = TX5;
  var OX5 = async (I, d) => {
    let G = {
        ...I,
        body: await _D(I.body, d)
      },
      Z = HD(I, G.body),
      C = G.body;
    return VD({
      output: I,
      parsedBody: C.Error,
      errorCode: Z
    })
  }, mX5 = async (I, d) => {
    if (I.statusCode >= 300) return lX5(I, d);
    let G = await yV(I.body, d),
      Z = {};
    return Z = AY5(G.GetFederationTokenResult, d), {
      $metadata: u7(I),
      ...Z
    }
  };
  VO0.de_GetFederationTokenCommand = mX5;
  var lX5 = async (I, d) => {
    let G = {
        ...I,
        body: await _D(I.body, d)
      },
      Z = HD(I, G.body);
    switch (Z) {
      case "MalformedPolicyDocument":
      case "com.amazonaws.sts#MalformedPolicyDocumentException":
        throw await np(G, d);
      case "PackedPolicyTooLarge":
      case "com.amazonaws.sts#PackedPolicyTooLargeException":
        throw await rp(G, d);
      case "RegionDisabledException":
      case "com.amazonaws.sts#RegionDisabledException":
        throw await Ey(G, d);
      default:
        let C = G.body;
        return VD({
          output: I,
          parsedBody: C.Error,
          errorCode: Z
        })
    }
  }, bX5 = async (I, d) => {
    if (I.statusCode >= 300) return hX5(I, d);
    let G = await yV(I.body, d),
      Z = {};
    return Z = VY5(G.GetSessionTokenResult, d), {
      $metadata: u7(I),
      ...Z
    }
  };
  VO0.de_GetSessionTokenCommand = bX5;
  var hX5 = async (I, d) => {
    let G = {
        ...I,
        body: await _D(I.body, d)
      },
      Z = HD(I, G.body);
    switch (Z) {
      case "RegionDisabledException":
      case "com.amazonaws.sts#RegionDisabledException":
        throw await Ey(G, d);
      default:
        let C = G.body;
        return VD({
          output: I,
          parsedBody: C.Error,
          errorCode: Z
        })
    }
  }, cB1 = async (I, d) => {
    let G = I.body,
      Z = CY5(G.Error, d),
      C = new AD.ExpiredTokenException({
        $metadata: u7(I),
        ...Z
      });
    return t2.decorateServiceException(C, G)
  }, jX5 = async (I, d) => {
    let G = I.body,
      Z = XY5(G.Error, d),
      C = new AD.IDPCommunicationErrorException({
        $metadata: u7(I),
        ...Z
      });
    return t2.decorateServiceException(C, G)
  }, wO0 = async (I, d) => {
    let G = I.body,
      Z = YY5(G.Error, d),
      C = new AD.IDPRejectedClaimException({
        $metadata: u7(I),
        ...Z
      });
    return t2.decorateServiceException(C, G)
  }, kX5 = async (I, d) => {
    let G = I.body,
      Z = _Y5(G.Error, d),
      C = new AD.InvalidAuthorizationMessageException({
        $metadata: u7(I),
        ...Z
      });
    return t2.decorateServiceException(C, G)
  }, BO0 = async (I, d) => {
    let G = I.body,
      Z = DY5(G.Error, d),
      C = new AD.InvalidIdentityTokenException({
        $metadata: u7(I),
        ...Z
      });
    return t2.decorateServiceException(C, G)
  }, np = async (I, d) => {
    let G = I.body,
      Z = HY5(G.Error, d),
      C = new AD.MalformedPolicyDocumentException({
        $metadata: u7(I),
        ...Z
      });
    return t2.decorateServiceException(C, G)
  }, rp = async (I, d) => {
    let G = I.body,
      Z = FY5(G.Error, d),
      C = new AD.PackedPolicyTooLargeException({
        $metadata: u7(I),
        ...Z
      });
    return t2.decorateServiceException(C, G)
  }, Ey = async (I, d) => {
    let G = I.body,
      Z = gY5(G.Error, d),
      C = new AD.RegionDisabledException({
        $metadata: u7(I),
        ...Z
      });
    return t2.decorateServiceException(C, G)
  }, xX5 = (I, d) => {
    let G = {};
    if (I.RoleArn != null) G.RoleArn = I.RoleArn;
    if (I.RoleSessionName != null) G.RoleSessionName = I.RoleSessionName;
    if (I.PolicyArns != null) {
      let Z = ap(I.PolicyArns, d);
      if (I.PolicyArns?.length === 0) G.PolicyArns = [];
      Object.entries(Z).forEach(([C, W]) => {
        let w = `PolicyArns.${C}`;
        G[w] = W
      })
    }
    if (I.Policy != null) G.Policy = I.Policy;
    if (I.DurationSeconds != null) G.DurationSeconds = I.DurationSeconds;
    if (I.Tags != null) {
      let Z = AO0(I.Tags, d);
      if (I.Tags?.length === 0) G.Tags = [];
      Object.entries(Z).forEach(([C, W]) => {
        let w = `Tags.${C}`;
        G[w] = W
      })
    }
    if (I.TransitiveTagKeys != null) {
      let Z = tX5(I.TransitiveTagKeys, d);
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
    return G
  }, cX5 = (I, d) => {
    let G = {};
    if (I.RoleArn != null) G.RoleArn = I.RoleArn;
    if (I.PrincipalArn != null) G.PrincipalArn = I.PrincipalArn;
    if (I.SAMLAssertion != null) G.SAMLAssertion = I.SAMLAssertion;
    if (I.PolicyArns != null) {
      let Z = ap(I.PolicyArns, d);
      if (I.PolicyArns?.length === 0) G.PolicyArns = [];
      Object.entries(Z).forEach(([C, W]) => {
        let w = `PolicyArns.${C}`;
        G[w] = W
      })
    }
    if (I.Policy != null) G.Policy = I.Policy;
    if (I.DurationSeconds != null) G.DurationSeconds = I.DurationSeconds;
    return G
  }, pX5 = (I, d) => {
    let G = {};
    if (I.RoleArn != null) G.RoleArn = I.RoleArn;
    if (I.RoleSessionName != null) G.RoleSessionName = I.RoleSessionName;
    if (I.WebIdentityToken != null) G.WebIdentityToken = I.WebIdentityToken;
    if (I.ProviderId != null) G.ProviderId = I.ProviderId;
    if (I.PolicyArns != null) {
      let Z = ap(I.PolicyArns, d);
      if (I.PolicyArns?.length === 0) G.PolicyArns = [];
      Object.entries(Z).forEach(([C, W]) => {
        let w = `PolicyArns.${C}`;
        G[w] = W
      })
    }
    if (I.Policy != null) G.Policy = I.Policy;
    if (I.DurationSeconds != null) G.DurationSeconds = I.DurationSeconds;
    return G
  }, iX5 = (I, d) => {
    let G = {};
    if (I.EncodedMessage != null) G.EncodedMessage = I.EncodedMessage;
    return G
  }, nX5 = (I, d) => {
    let G = {};
    if (I.AccessKeyId != null) G.AccessKeyId = I.AccessKeyId;
    return G
  }, rX5 = (I, d) => {
    return {}
  }, aX5 = (I, d) => {
    let G = {};
    if (I.Name != null) G.Name = I.Name;
    if (I.Policy != null) G.Policy = I.Policy;
    if (I.PolicyArns != null) {
      let Z = ap(I.PolicyArns, d);
      if (I.PolicyArns?.length === 0) G.PolicyArns = [];
      Object.entries(Z).forEach(([C, W]) => {
        let w = `PolicyArns.${C}`;
        G[w] = W
      })
    }
    if (I.DurationSeconds != null) G.DurationSeconds = I.DurationSeconds;
    if (I.Tags != null) {
      let Z = AO0(I.Tags, d);
      if (I.Tags?.length === 0) G.Tags = [];
      Object.entries(Z).forEach(([C, W]) => {
        let w = `Tags.${C}`;
        G[w] = W
      })
    }
    return G
  }, sX5 = (I, d) => {
    let G = {};
    if (I.DurationSeconds != null) G.DurationSeconds = I.DurationSeconds;
    if (I.SerialNumber != null) G.SerialNumber = I.SerialNumber;
    if (I.TokenCode != null) G.TokenCode = I.TokenCode;
    return G
  }, ap = (I, d) => {
    let G = {},
      Z = 1;
    for (let C of I) {
      if (C === null) continue;
      let W = oX5(C, d);
      Object.entries(W).forEach(([w, B]) => {
        G[`member.${Z}.${w}`] = B
      }), Z++
    }
    return G
  }, oX5 = (I, d) => {
    let G = {};
    if (I.arn != null) G.arn = I.arn;
    return G
  }, eX5 = (I, d) => {
    let G = {};
    if (I.Key != null) G.Key = I.Key;
    if (I.Value != null) G.Value = I.Value;
    return G
  }, tX5 = (I, d) => {
    let G = {},
      Z = 1;
    for (let C of I) {
      if (C === null) continue;
      G[`member.${Z}`] = C, Z++
    }
    return G
  }, AO0 = (I, d) => {
    let G = {},
      Z = 1;
    for (let C of I) {
      if (C === null) continue;
      let W = eX5(C, d);
      Object.entries(W).forEach(([w, B]) => {
        G[`member.${Z}.${w}`] = B
      }), Z++
    }
    return G
  }, pB1 = (I, d) => {
    let G = {};
    if (I.AssumedRoleId !== void 0) G.AssumedRoleId = t2.expectString(I.AssumedRoleId);
    if (I.Arn !== void 0) G.Arn = t2.expectString(I.Arn);
    return G
  }, IY5 = (I, d) => {
    let G = {};
    if (I.Credentials !== void 0) G.Credentials = My(I.Credentials, d);
    if (I.AssumedRoleUser !== void 0) G.AssumedRoleUser = pB1(I.AssumedRoleUser, d);
    if (I.PackedPolicySize !== void 0) G.PackedPolicySize = t2.strictParseInt32(I.PackedPolicySize);
    if (I.SourceIdentity !== void 0) G.SourceIdentity = t2.expectString(I.SourceIdentity);
    return G
  }, dY5 = (I, d) => {
    let G = {};
    if (I.Credentials !== void 0) G.Credentials = My(I.Credentials, d);
    if (I.AssumedRoleUser !== void 0) G.AssumedRoleUser = pB1(I.AssumedRoleUser, d);
    if (I.PackedPolicySize !== void 0) G.PackedPolicySize = t2.strictParseInt32(I.PackedPolicySize);
    if (I.Subject !== void 0) G.Subject = t2.expectString(I.Subject);
    if (I.SubjectType !== void 0) G.SubjectType = t2.expectString(I.SubjectType);
    if (I.Issuer !== void 0) G.Issuer = t2.expectString(I.Issuer);
    if (I.Audience !== void 0) G.Audience = t2.expectString(I.Audience);
    if (I.NameQualifier !== void 0) G.NameQualifier = t2.expectString(I.NameQualifier);
    if (I.SourceIdentity !== void 0) G.SourceIdentity = t2.expectString(I.SourceIdentity);
    return G
  }, GY5 = (I, d) => {
    let G = {};
    if (I.Credentials !== void 0) G.Credentials = My(I.Credentials, d);
    if (I.SubjectFromWebIdentityToken !== void 0) G.SubjectFromWebIdentityToken = t2.expectString(I.SubjectFromWebIdentityToken);
    if (I.AssumedRoleUser !== void 0) G.AssumedRoleUser = pB1(I.AssumedRoleUser, d);
    if (I.PackedPolicySize !== void 0) G.PackedPolicySize = t2.strictParseInt32(I.PackedPolicySize);
    if (I.Provider !== void 0) G.Provider = t2.expectString(I.Provider);
    if (I.Audience !== void 0) G.Audience = t2.expectString(I.Audience);
    if (I.SourceIdentity !== void 0) G.SourceIdentity = t2.expectString(I.SourceIdentity);
    return G
  }, My = (I, d) => {
    let G = {};
    if (I.AccessKeyId !== void 0) G.AccessKeyId = t2.expectString(I.AccessKeyId);
    if (I.SecretAccessKey !== void 0) G.SecretAccessKey = t2.expectString(I.SecretAccessKey);
    if (I.SessionToken !== void 0) G.SessionToken = t2.expectString(I.SessionToken);
    if (I.Expiration !== void 0) G.Expiration = t2.expectNonNull(t2.parseRfc3339DateTimeWithOffset(I.Expiration));
    return G
  }, ZY5 = (I, d) => {
    let G = {};
    if (I.DecodedMessage !== void 0) G.DecodedMessage = t2.expectString(I.DecodedMessage);
    return G
  }, CY5 = (I, d) => {
    let G = {};
    if (I.message !== void 0) G.message = t2.expectString(I.message);
    return G
  }, WY5 = (I, d) => {
    let G = {};
    if (I.FederatedUserId !== void 0) G.FederatedUserId = t2.expectString(I.FederatedUserId);
    if (I.Arn !== void 0) G.Arn = t2.expectString(I.Arn);
    return G
  }, wY5 = (I, d) => {
    let G = {};
    if (I.Account !== void 0) G.Account = t2.expectString(I.Account);
    return G
  }, BY5 = (I, d) => {
    let G = {};
    if (I.UserId !== void 0) G.UserId = t2.expectString(I.UserId);
    if (I.Account !== void 0) G.Account = t2.expectString(I.Account);
    if (I.Arn !== void 0) G.Arn = t2.expectString(I.Arn);
    return G
  }, AY5 = (I, d) => {
    let G = {};
    if (I.Credentials !== void 0) G.Credentials = My(I.Credentials, d);
    if (I.FederatedUser !== void 0) G.FederatedUser = WY5(I.FederatedUser, d);
    if (I.PackedPolicySize !== void 0) G.PackedPolicySize = t2.strictParseInt32(I.PackedPolicySize);
    return G
  }, VY5 = (I, d) => {
    let G = {};
    if (I.Credentials !== void 0) G.Credentials = My(I.Credentials, d);
    return G
  }, XY5 = (I, d) => {
    let G = {};
    if (I.message !== void 0) G.message = t2.expectString(I.message);
    return G
  }, YY5 = (I, d) => {
    let G = {};
    if (I.message !== void 0) G.message = t2.expectString(I.message);
    return G
  }, _Y5 = (I, d) => {
    let G = {};
    if (I.message !== void 0) G.message = t2.expectString(I.message);
    return G
  }, DY5 = (I, d) => {
    let G = {};
    if (I.message !== void 0) G.message = t2.expectString(I.message);
    return G
  }, HY5 = (I, d) => {
    let G = {};
    if (I.message !== void 0) G.message = t2.expectString(I.message);
    return G
  }, FY5 = (I, d) => {
    let G = {};
    if (I.message !== void 0) G.message = t2.expectString(I.message);
    return G
  }, gY5 = (I, d) => {
    let G = {};
    if (I.message !== void 0) G.message = t2.expectString(I.message);
    return G
  }, u7 = (I) => ({
    httpStatusCode: I.statusCode,
    requestId: I.headers["x-amzn-requestid"] ?? I.headers["x-amzn-request-id"] ?? I.headers["x-amz-request-id"],
    extendedRequestId: I.headers["x-amz-id-2"],
    cfId: I.headers["x-amz-cf-id"]
  }), JY5 = (I = new Uint8Array, d) => {
    if (I instanceof Uint8Array) return Promise.resolve(I);
    return d.streamCollector(I) || Promise.resolve(new Uint8Array)
  }, KY5 = (I, d) => JY5(I, d).then((G) => d.utf8Encoder(G)), VD = t2.withBaseException(gX5.STSServiceException), XD = async (I, d, G, Z, C) => {
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
    return new HX5.HttpRequest(V)
  }, YD = {
    "content-type": "application/x-www-form-urlencoded"
  }, yV = (I, d) => KY5(I, d).then((G) => {
    if (G.length) {
      let Z = new FX5.XMLParser({
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
      return t2.getValueFromTextNode(B)
    }
    return {}
  }), _D = async (I, d) => {
    let G = await yV(I, d);
    if (G.Error) G.Error.message = G.Error.message ?? G.Error.Message;
    return G
  }, DD = (I) => Object.entries(I).map(([d, G]) => t2.extendedEncodeURIComponent(d) + "=" + t2.extendedEncodeURIComponent(G)).join("&"), HD = (I, d) => {
    if (d.Error?.Code !== void 0) return d.Error.Code;
    if (I.statusCode == 404) return "NotFound"
  }
})
// @from(Start 3025541, End 3027466)
sp = Y((nB1) => {
  Object.defineProperty(nB1, "__esModule", {
    value: !0
  });
  nB1.AssumeRoleCommand = nB1.$Command = void 0;
  var uY5 = u2(),
    TY5 = r2(),
    OY5 = GD(),
    _O0 = v0();
  Object.defineProperty(nB1, "$Command", {
    enumerable: !0,
    get: function() {
      return _O0.Command
    }
  });
  var mY5 = wD(),
    YO0 = PV();
  class iB1 extends _O0.Command {
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
      this.middlewareStack.use(TY5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(uY5.getEndpointPlugin(d, iB1.getEndpointParameterInstructions())), this.middlewareStack.use(OY5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "STSClient",
          commandName: "AssumeRoleCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: mY5.AssumeRoleResponseFilterSensitiveLog
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return YO0.se_AssumeRoleCommand(I, d)
    }
    deserialize(I, d) {
      return YO0.de_AssumeRoleCommand(I, d)
    }
  }
  nB1.AssumeRoleCommand = iB1
})
// @from(Start 3027472, End 3029466)
op = Y((aB1) => {
  Object.defineProperty(aB1, "__esModule", {
    value: !0
  });
  aB1.AssumeRoleWithWebIdentityCommand = aB1.$Command = void 0;
  var lY5 = u2(),
    bY5 = r2(),
    gO0 = v0();
  Object.defineProperty(aB1, "$Command", {
    enumerable: !0,
    get: function() {
      return gO0.Command
    }
  });
  var HO0 = wD(),
    FO0 = PV();
  class rB1 extends gO0.Command {
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
      this.middlewareStack.use(bY5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(lY5.getEndpointPlugin(d, rB1.getEndpointParameterInstructions()));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "STSClient",
          commandName: "AssumeRoleWithWebIdentityCommand",
          inputFilterSensitiveLog: HO0.AssumeRoleWithWebIdentityRequestFilterSensitiveLog,
          outputFilterSensitiveLog: HO0.AssumeRoleWithWebIdentityResponseFilterSensitiveLog
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return FO0.se_AssumeRoleWithWebIdentityCommand(I, d)
    }
    deserialize(I, d) {
      return FO0.de_AssumeRoleWithWebIdentityCommand(I, d)
    }
  }
  aB1.AssumeRoleWithWebIdentityCommand = rB1
})
// @from(Start 3029472, End 3031954)
sB1 = Y((zO0) => {
  Object.defineProperty(zO0, "__esModule", {
    value: !0
  });
  zO0.decorateDefaultCredentialProvider = zO0.getDefaultRoleAssumerWithWebIdentity = zO0.getDefaultRoleAssumer = void 0;
  var hY5 = sp(),
    jY5 = op(),
    KO0 = "us-east-1",
    NO0 = (I) => {
      if (typeof I !== "function") return I === void 0 ? KO0 : I;
      return async () => {
        try {
          return await I()
        } catch (d) {
          return KO0
        }
      }
    },
    kY5 = (I, d) => {
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
            region: NO0(A || I.region),
            ...V ? {
              requestHandler: V
            } : {}
          })
        }
        let {
          Credentials: w
        } = await G.send(new hY5.AssumeRoleCommand(W));
        if (!w || !w.AccessKeyId || !w.SecretAccessKey) throw new Error(`Invalid response from STS.assumeRole call with role ${W.RoleArn}`);
        return {
          accessKeyId: w.AccessKeyId,
          secretAccessKey: w.SecretAccessKey,
          sessionToken: w.SessionToken,
          expiration: w.Expiration
        }
      }
    };
  zO0.getDefaultRoleAssumer = kY5;
  var xY5 = (I, d) => {
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
          region: NO0(w || I.region),
          ...B ? {
            requestHandler: B
          } : {}
        })
      }
      let {
        Credentials: C
      } = await G.send(new jY5.AssumeRoleWithWebIdentityCommand(Z));
      if (!C || !C.AccessKeyId || !C.SecretAccessKey) throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${Z.RoleArn}`);
      return {
        accessKeyId: C.AccessKeyId,
        secretAccessKey: C.SecretAccessKey,
        sessionToken: C.SessionToken,
        expiration: C.Expiration
      }
    }
  };
  zO0.getDefaultRoleAssumerWithWebIdentity = xY5;
  var cY5 = (I) => (d) => I({
    roleAssumer: zO0.getDefaultRoleAssumer(d, d.stsClientCtor),
    roleAssumerWithWebIdentity: zO0.getDefaultRoleAssumerWithWebIdentity(d, d.stsClientCtor),
    ...d
  });
  zO0.decorateDefaultCredentialProvider = cY5
})
// @from(Start 3031960, End 3032567)
EO0 = Y((UO0) => {
  Object.defineProperty(UO0, "__esModule", {
    value: !0
  });
  UO0.resolveCredentialSource = void 0;
  var pY5 = lp(),
    RO0 = i_(),
    iY5 = W4(),
    nY5 = (I, d) => {
      let G = {
        EcsContainer: RO0.fromContainerMetadata,
        Ec2InstanceMetadata: RO0.fromInstanceMetadata,
        Environment: pY5.fromEnv
      };
      if (I in G) return G[I]();
      else throw new iY5.CredentialsProviderError(`Unsupported credential source in profile ${d}. Got ${I}, expected EcsContainer or Ec2InstanceMetadata or Environment.`)
    };
  UO0.resolveCredentialSource = nY5
})
// @from(Start 3032573, End 3034553)
LO0 = Y((MO0) => {
  Object.defineProperty(MO0, "__esModule", {
    value: !0
  });
  MO0.resolveAssumeRoleCredentials = MO0.isAssumeRoleProfile = void 0;
  var oB1 = W4(),
    rY5 = K8(),
    aY5 = EO0(),
    sY5 = eB1(),
    oY5 = (I) => Boolean(I) && typeof I === "object" && typeof I.role_arn === "string" && ["undefined", "string"].indexOf(typeof I.role_session_name) > -1 && ["undefined", "string"].indexOf(typeof I.external_id) > -1 && ["undefined", "string"].indexOf(typeof I.mfa_serial) > -1 && (eY5(I) || tY5(I));
  MO0.isAssumeRoleProfile = oY5;
  var eY5 = (I) => typeof I.source_profile === "string" && typeof I.credential_source === "undefined",
    tY5 = (I) => typeof I.credential_source === "string" && typeof I.source_profile === "undefined",
    I_5 = async (I, d, G, Z = {}) => {
      let C = d[I];
      if (!G.roleAssumer) throw new oB1.CredentialsProviderError(`Profile ${I} requires a role to be assumed, but no role assumption callback was provided.`, !1);
      let {
        source_profile: W
      } = C;
      if (W && W in Z) throw new oB1.CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile ${rY5.getProfileName(G)}. Profiles visited: ` + Object.keys(Z).join(", "), !1);
      let w = W ? sY5.resolveProfileData(W, d, G, {
          ...Z,
          [W]: !0
        }) : aY5.resolveCredentialSource(C.credential_source, I)(),
        B = {
          RoleArn: C.role_arn,
          RoleSessionName: C.role_session_name || `aws-sdk-js-${Date.now()}`,
          ExternalId: C.external_id
        },
        {
          mfa_serial: A
        } = C;
      if (A) {
        if (!G.mfaCodeProvider) throw new oB1.CredentialsProviderError(`Profile ${I} requires multi-factor authentication, but no MFA code callback was provided.`, !1);
        B.SerialNumber = A, B.TokenCode = await G.mfaCodeProvider(A)
      }
      let V = await w;
      return G.roleAssumer(V, B)
    };
  MO0.resolveAssumeRoleCredentials = I_5
})
// @from(Start 3034559, End 3035424)
$O0 = Y((yO0) => {
  Object.defineProperty(yO0, "__esModule", {
    value: !0
  });
  yO0.getValidatedProcessCredentials = void 0;
  var G_5 = (I, d) => {
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
  yO0.getValidatedProcessCredentials = G_5
})
// @from(Start 3035430, End 3036515)
OO0 = Y((uO0) => {
  Object.defineProperty(uO0, "__esModule", {
    value: !0
  });
  uO0.resolveProcessCredentials = void 0;
  var tB1 = W4(),
    Z_5 = B1("child_process"),
    C_5 = B1("util"),
    W_5 = $O0(),
    w_5 = async (I, d) => {
      let G = d[I];
      if (d[I]) {
        let Z = G.credential_process;
        if (Z !== void 0) {
          let C = C_5.promisify(Z_5.exec);
          try {
            let {
              stdout: W
            } = await C(Z), w;
            try {
              w = JSON.parse(W.trim())
            } catch (B) {
              throw Error(`Profile ${I} credential_process returned invalid JSON.`)
            }
            return W_5.getValidatedProcessCredentials(I, w)
          } catch (W) {
            throw new tB1.CredentialsProviderError(W.message)
          }
        } else throw new tB1.CredentialsProviderError(`Profile ${I} did not contain credential_process.`)
      } else throw new tB1.CredentialsProviderError(`Profile ${I} could not be found in shared credentials file.`)
    };
  uO0.resolveProcessCredentials = w_5
})
// @from(Start 3036521, End 3036850)
hO0 = Y((lO0) => {
  Object.defineProperty(lO0, "__esModule", {
    value: !0
  });
  lO0.fromProcess = void 0;
  var mO0 = K8(),
    B_5 = OO0(),
    A_5 = (I = {}) => async () => {
      let d = await mO0.parseKnownFiles(I);
      return B_5.resolveProcessCredentials(mO0.getProfileName(I), d)
    };
  lO0.fromProcess = A_5
})
// @from(Start 3036856, End 3036990)
ep = Y((IA1) => {
  Object.defineProperty(IA1, "__esModule", {
    value: !0
  });
  var V_5 = x1();
  V_5.__exportStar(hO0(), IA1)
})
// @from(Start 3036996, End 3037410)
xO0 = Y((jO0) => {
  Object.defineProperty(jO0, "__esModule", {
    value: !0
  });
  jO0.resolveProcessCredentials = jO0.isProcessProfile = void 0;
  var X_5 = ep(),
    Y_5 = (I) => Boolean(I) && typeof I === "object" && typeof I.credential_process === "string";
  jO0.isProcessProfile = Y_5;
  var __5 = async (I, d) => X_5.fromProcess({
    ...I,
    profile: d
  })();
  jO0.resolveProcessCredentials = __5
})
// @from(Start 3037416, End 3037771)
dA1 = Y((cO0) => {
  Object.defineProperty(cO0, "__esModule", {
    value: !0
  });
  cO0.isSsoProfile = void 0;
  var H_5 = (I) => I && (typeof I.sso_start_url === "string" || typeof I.sso_account_id === "string" || typeof I.sso_session === "string" || typeof I.sso_region === "string" || typeof I.sso_role_name === "string");
  cO0.isSsoProfile = H_5
})
// @from(Start 3037777, End 3038159)
rO0 = Y((iO0) => {
  Object.defineProperty(iO0, "__esModule", {
    value: !0
  });
  iO0.resolveClientEndpointParameters = void 0;
  var F_5 = (I) => {
    return {
      ...I,
      useDualstackEndpoint: I.useDualstackEndpoint ?? !1,
      useFipsEndpoint: I.useFipsEndpoint ?? !1,
      defaultSigningName: "awsssoportal"
    }
  };
  iO0.resolveClientEndpointParameters = F_5
})
// @from(Start 3038165, End 3041686)
aO0 = Y((GI3, g_5) => {
  g_5.exports = {
    name: "@aws-sdk/client-sso",
    description: "AWS SDK for JavaScript Sso Client for Node.js, Browser and React Native",
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
      "generate:client": "node ../../scripts/generate-clients/single-service --solo sso"
    },
    main: "./dist-cjs/index.js",
    types: "./dist-types/index.d.ts",
    module: "./dist-es/index.js",
    sideEffects: !1,
    dependencies: {
      "@aws-crypto/sha256-browser": "3.0.0",
      "@aws-crypto/sha256-js": "3.0.0",
      "@aws-sdk/config-resolver": "3.341.0",
      "@aws-sdk/fetch-http-handler": "3.341.0",
      "@aws-sdk/hash-node": "3.341.0",
      "@aws-sdk/invalid-dependency": "3.341.0",
      "@aws-sdk/middleware-content-length": "3.341.0",
      "@aws-sdk/middleware-endpoint": "3.341.0",
      "@aws-sdk/middleware-host-header": "3.341.0",
      "@aws-sdk/middleware-logger": "3.341.0",
      "@aws-sdk/middleware-recursion-detection": "3.341.0",
      "@aws-sdk/middleware-retry": "3.341.0",
      "@aws-sdk/middleware-serde": "3.341.0",
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
    homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso",
    repository: {
      type: "git",
      url: "https://github.com/aws/aws-sdk-js-v3.git",
      directory: "clients/client-sso"
    }
  }
})
// @from(Start 3041692, End 3042089)
tO0 = Y((sO0, oO0) => {
  Object.defineProperty(sO0, "__esModule", {
    value: !0
  });
  sO0.isCrtAvailable = void 0;
  var J_5 = () => {
    try {
      if (typeof oO0 !== "undefined" && (() => {
          throw new Error("Cannot require module " + "aws-crt");
        })()) return ["md/crt-avail"];
      return null
    } catch (I) {
      return null
    }
  };
  sO0.isCrtAvailable = J_5
})
// @from(Start 3042095, End 3043233)
ZA1 = Y((dm0) => {
  Object.defineProperty(dm0, "__esModule", {
    value: !0
  });
  dm0.defaultUserAgent = dm0.UA_APP_ID_INI_NAME = dm0.UA_APP_ID_ENV_NAME = void 0;
  var K_5 = QZ(),
    Im0 = B1("os"),
    GA1 = B1("process"),
    N_5 = tO0();
  dm0.UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
  dm0.UA_APP_ID_INI_NAME = "sdk-ua-app-id";
  var z_5 = ({
    serviceId: I,
    clientVersion: d
  }) => {
    let G = [
        ["aws-sdk-js", d],
        [`os/${Im0.platform()}`, Im0.release()],
        ["lang/js"],
        ["md/nodejs", `${GA1.versions.node}`]
      ],
      Z = N_5.isCrtAvailable();
    if (Z) G.push(Z);
    if (I) G.push([`api/${I}`, d]);
    if (GA1.env.AWS_EXECUTION_ENV) G.push([`exec-env/${GA1.env.AWS_EXECUTION_ENV}`]);
    let C = K_5.loadConfig({
        environmentVariableSelector: (w) => w[dm0.UA_APP_ID_ENV_NAME],
        configFileSelector: (w) => w[dm0.UA_APP_ID_INI_NAME],
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
  dm0.defaultUserAgent = z_5
})
// @from(Start 3043239, End 3047312)
Km0 = Y((gm0) => {
  Object.defineProperty(gm0, "__esModule", {
    value: !0
  });
  gm0.ruleSet = void 0;
  var _m0 = "required",
    $V = "fn",
    uV = "argv",
    ef = "ref",
    CA1 = "PartitionResult",
    BB = "tree",
    Sy = "error",
    Ly = "endpoint",
    Wm0 = {
      [_m0]: !1,
      type: "String"
    },
    wm0 = {
      [_m0]: !0,
      default: !1,
      type: "Boolean"
    },
    Dm0 = {
      [ef]: "Endpoint"
    },
    Hm0 = {
      [$V]: "booleanEquals",
      [uV]: [{
        [ef]: "UseFIPS"
      }, !0]
    },
    Fm0 = {
      [$V]: "booleanEquals",
      [uV]: [{
        [ef]: "UseDualStack"
      }, !0]
    },
    AB = {},
    Bm0 = {
      [$V]: "booleanEquals",
      [uV]: [!0, {
        [$V]: "getAttr",
        [uV]: [{
          [ef]: CA1
        }, "supportsFIPS"]
      }]
    },
    Am0 = {
      [$V]: "booleanEquals",
      [uV]: [!0, {
        [$V]: "getAttr",
        [uV]: [{
          [ef]: CA1
        }, "supportsDualStack"]
      }]
    },
    Vm0 = [Dm0],
    Xm0 = [Hm0],
    Ym0 = [Fm0],
    Q_5 = {
      version: "1.0",
      parameters: {
        Region: Wm0,
        UseDualStack: wm0,
        UseFIPS: wm0,
        Endpoint: Wm0
      },
      rules: [{
        conditions: [{
          [$V]: "aws.partition",
          [uV]: [{
            [ef]: "Region"
          }],
          assign: CA1
        }],
        type: BB,
        rules: [{
          conditions: [{
            [$V]: "isSet",
            [uV]: Vm0
          }, {
            [$V]: "parseURL",
            [uV]: Vm0,
            assign: "url"
          }],
          type: BB,
          rules: [{
            conditions: Xm0,
            error: "Invalid Configuration: FIPS and custom endpoint are not supported",
            type: Sy
          }, {
            type: BB,
            rules: [{
              conditions: Ym0,
              error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
              type: Sy
            }, {
              endpoint: {
                url: Dm0,
                properties: AB,
                headers: AB
              },
              type: Ly
            }]
          }]
        }, {
          conditions: [Hm0, Fm0],
          type: BB,
          rules: [{
            conditions: [Bm0, Am0],
            type: BB,
            rules: [{
              endpoint: {
                url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                properties: AB,
                headers: AB
              },
              type: Ly
            }]
          }, {
            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
            type: Sy
          }]
        }, {
          conditions: Xm0,
          type: BB,
          rules: [{
            conditions: [Bm0],
            type: BB,
            rules: [{
              type: BB,
              rules: [{
                endpoint: {
                  url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}",
                  properties: AB,
                  headers: AB
                },
                type: Ly
              }]
            }]
          }, {
            error: "FIPS is enabled but this partition does not support FIPS",
            type: Sy
          }]
        }, {
          conditions: Ym0,
          type: BB,
          rules: [{
            conditions: [Am0],
            type: BB,
            rules: [{
              endpoint: {
                url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}",
                properties: AB,
                headers: AB
              },
              type: Ly
            }]
          }, {
            error: "DualStack is enabled but this partition does not support DualStack",
            type: Sy
          }]
        }, {
          endpoint: {
            url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}",
            properties: AB,
            headers: AB
          },
          type: Ly
        }]
      }]
    };
  gm0.ruleSet = Q_5
})
// @from(Start 3047318, End 3047658)
Qm0 = Y((Nm0) => {
  Object.defineProperty(Nm0, "__esModule", {
    value: !0
  });
  Nm0.defaultEndpointResolver = void 0;
  var f_5 = xp(),
    q_5 = Km0(),
    R_5 = (I, d = {}) => {
      return f_5.resolveEndpoint(q_5.ruleSet, {
        endpointParams: I,
        logger: d.logger
      })
    };
  Nm0.defaultEndpointResolver = R_5
})
// @from(Start 3047664, End 3048429)
vm0 = Y((Rm0) => {
  Object.defineProperty(Rm0, "__esModule", {
    value: !0
  });
  Rm0.getRuntimeConfig = void 0;
  var U_5 = v0(),
    v_5 = FV(),
    fm0 = IJ(),
    qm0 = hC(),
    E_5 = Qm0(),
    M_5 = (I) => ({
      apiVersion: "2019-06-10",
      base64Decoder: I?.base64Decoder ?? fm0.fromBase64,
      base64Encoder: I?.base64Encoder ?? fm0.toBase64,
      disableHostPrefix: I?.disableHostPrefix ?? !1,
      endpointProvider: I?.endpointProvider ?? E_5.defaultEndpointResolver,
      logger: I?.logger ?? new U_5.NoOpLogger,
      serviceId: I?.serviceId ?? "SSO",
      urlParser: I?.urlParser ?? v_5.parseUrl,
      utf8Decoder: I?.utf8Decoder ?? qm0.fromUtf8,
      utf8Encoder: I?.utf8Encoder ?? qm0.toUtf8
    });
  Rm0.getRuntimeConfig = M_5
})
// @from(Start 3048435, End 3050233)
ym0 = Y((Sm0) => {
  Object.defineProperty(Sm0, "__esModule", {
    value: !0
  });
  Sm0.getRuntimeConfig = void 0;
  var S_5 = x1(),
    L_5 = S_5.__importDefault(aO0()),
    tp = Cd(),
    y_5 = og(),
    Em0 = dG(),
    yy = QZ(),
    Mm0 = eg(),
    P_5 = tg(),
    $_5 = Wd(),
    u_5 = ZA1(),
    T_5 = vm0(),
    O_5 = v0(),
    m_5 = dJ(),
    l_5 = v0(),
    b_5 = (I) => {
      l_5.emitWarningIfUnsupportedVersion(process.version);
      let d = m_5.resolveDefaultsModeConfig(I),
        G = () => d().then(O_5.loadConfigsForDefaultMode),
        Z = T_5.getRuntimeConfig(I);
      return {
        ...Z,
        ...I,
        runtime: "node",
        defaultsMode: d,
        bodyLengthChecker: I?.bodyLengthChecker ?? P_5.calculateBodyLength,
        defaultUserAgentProvider: I?.defaultUserAgentProvider ?? u_5.defaultUserAgent({
          serviceId: Z.serviceId,
          clientVersion: L_5.default.version
        }),
        maxAttempts: I?.maxAttempts ?? yy.loadConfig(Em0.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: I?.region ?? yy.loadConfig(tp.NODE_REGION_CONFIG_OPTIONS, tp.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: I?.requestHandler ?? new Mm0.NodeHttpHandler(G),
        retryMode: I?.retryMode ?? yy.loadConfig({
          ...Em0.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await G()).retryMode || $_5.DEFAULT_RETRY_MODE
        }),
        sha256: I?.sha256 ?? y_5.Hash.bind(null, "sha256"),
        streamCollector: I?.streamCollector ?? Mm0.streamCollector,
        useDualstackEndpoint: I?.useDualstackEndpoint ?? yy.loadConfig(tp.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: I?.useFipsEndpoint ?? yy.loadConfig(tp.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
      }
    };
  Sm0.getRuntimeConfig = b_5
})
// @from(Start 3050239, End 3051524)
Py = Y((WA1) => {
  Object.defineProperty(WA1, "__esModule", {
    value: !0
  });
  WA1.SSOClient = WA1.__Client = void 0;
  var h_5 = Cd(),
    j_5 = jg(),
    k_5 = u2(),
    Pm0 = xw1(),
    x_5 = pw1(),
    c_5 = iw1(),
    $m0 = dG(),
    um0 = NB1(),
    Tm0 = v0();
  Object.defineProperty(WA1, "__Client", {
    enumerable: !0,
    get: function() {
      return Tm0.Client
    }
  });
  var p_5 = rO0(),
    i_5 = ym0();
  class Om0 extends Tm0.Client {
    constructor(I) {
      let d = i_5.getRuntimeConfig(I),
        G = p_5.resolveClientEndpointParameters(d),
        Z = h_5.resolveRegionConfig(G),
        C = k_5.resolveEndpointConfig(Z),
        W = $m0.resolveRetryConfig(C),
        w = Pm0.resolveHostHeaderConfig(W),
        B = um0.resolveUserAgentConfig(w);
      super(B);
      this.config = B, this.middlewareStack.use($m0.getRetryPlugin(this.config)), this.middlewareStack.use(j_5.getContentLengthPlugin(this.config)), this.middlewareStack.use(Pm0.getHostHeaderPlugin(this.config)), this.middlewareStack.use(x_5.getLoggerPlugin(this.config)), this.middlewareStack.use(c_5.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(um0.getUserAgentPlugin(this.config))
    }
    destroy() {
      super.destroy()
    }
  }
  WA1.SSOClient = Om0
})
// @from(Start 3051530, End 3052006)
Ii = Y((BA1) => {
  Object.defineProperty(BA1, "__esModule", {
    value: !0
  });
  BA1.SSOServiceException = BA1.__ServiceException = void 0;
  var lm0 = v0();
  Object.defineProperty(BA1, "__ServiceException", {
    enumerable: !0,
    get: function() {
      return lm0.ServiceException
    }
  });
  class wA1 extends lm0.ServiceException {
    constructor(I) {
      super(I);
      Object.setPrototypeOf(this, wA1.prototype)
    }
  }
  BA1.SSOServiceException = wA1
})
// @from(Start 3052012, End 3054943)
HJ = Y((hm0) => {
  Object.defineProperty(hm0, "__esModule", {
    value: !0
  });
  hm0.LogoutRequestFilterSensitiveLog = hm0.ListAccountsRequestFilterSensitiveLog = hm0.ListAccountRolesRequestFilterSensitiveLog = hm0.GetRoleCredentialsResponseFilterSensitiveLog = hm0.RoleCredentialsFilterSensitiveLog = hm0.GetRoleCredentialsRequestFilterSensitiveLog = hm0.UnauthorizedException = hm0.TooManyRequestsException = hm0.ResourceNotFoundException = hm0.InvalidRequestException = void 0;
  var tf = v0(),
    di = Ii();
  class AA1 extends di.SSOServiceException {
    constructor(I) {
      super({
        name: "InvalidRequestException",
        $fault: "client",
        ...I
      });
      this.name = "InvalidRequestException", this.$fault = "client", Object.setPrototypeOf(this, AA1.prototype)
    }
  }
  hm0.InvalidRequestException = AA1;
  class VA1 extends di.SSOServiceException {
    constructor(I) {
      super({
        name: "ResourceNotFoundException",
        $fault: "client",
        ...I
      });
      this.name = "ResourceNotFoundException", this.$fault = "client", Object.setPrototypeOf(this, VA1.prototype)
    }
  }
  hm0.ResourceNotFoundException = VA1;
  class XA1 extends di.SSOServiceException {
    constructor(I) {
      super({
        name: "TooManyRequestsException",
        $fault: "client",
        ...I
      });
      this.name = "TooManyRequestsException", this.$fault = "client", Object.setPrototypeOf(this, XA1.prototype)
    }
  }
  hm0.TooManyRequestsException = XA1;
  class YA1 extends di.SSOServiceException {
    constructor(I) {
      super({
        name: "UnauthorizedException",
        $fault: "client",
        ...I
      });
      this.name = "UnauthorizedException", this.$fault = "client", Object.setPrototypeOf(this, YA1.prototype)
    }
  }
  hm0.UnauthorizedException = YA1;
  var n_5 = (I) => ({
    ...I,
    ...I.accessToken && {
      accessToken: tf.SENSITIVE_STRING
    }
  });
  hm0.GetRoleCredentialsRequestFilterSensitiveLog = n_5;
  var r_5 = (I) => ({
    ...I,
    ...I.secretAccessKey && {
      secretAccessKey: tf.SENSITIVE_STRING
    },
    ...I.sessionToken && {
      sessionToken: tf.SENSITIVE_STRING
    }
  });
  hm0.RoleCredentialsFilterSensitiveLog = r_5;
  var a_5 = (I) => ({
    ...I,
    ...I.roleCredentials && {
      roleCredentials: hm0.RoleCredentialsFilterSensitiveLog(I.roleCredentials)
    }
  });
  hm0.GetRoleCredentialsResponseFilterSensitiveLog = a_5;
  var s_5 = (I) => ({
    ...I,
    ...I.accessToken && {
      accessToken: tf.SENSITIVE_STRING
    }
  });
  hm0.ListAccountRolesRequestFilterSensitiveLog = s_5;
  var o_5 = (I) => ({
    ...I,
    ...I.accessToken && {
      accessToken: tf.SENSITIVE_STRING
    }
  });
  hm0.ListAccountsRequestFilterSensitiveLog = o_5;
  var e_5 = (I) => ({
    ...I,
    ...I.accessToken && {
      accessToken: tf.SENSITIVE_STRING
    }
  });
  hm0.LogoutRequestFilterSensitiveLog = e_5
})
// @from(Start 3054949, End 3065008)
$y = Y((cm0) => {
  Object.defineProperty(cm0, "__esModule", {
    value: !0
  });
  cm0.de_LogoutCommand = cm0.de_ListAccountsCommand = cm0.de_ListAccountRolesCommand = cm0.de_GetRoleCredentialsCommand = cm0.se_LogoutCommand = cm0.se_ListAccountsCommand = cm0.se_ListAccountRolesCommand = cm0.se_GetRoleCredentialsCommand = void 0;
  var z4 = v0(),
    Gi = mB1(),
    Zi = HJ(),
    BD5 = Ii(),
    AD5 = async (I, d) => {
      let {
        hostname: G,
        protocol: Z = "https",
        port: C,
        path: W
      } = await d.endpoint(), w = z4.map({}, Ai, {
        "x-amz-sso_bearer_token": I.accessToken
      }), B = `${W?.endsWith("/")?W.slice(0,-1):W||""}/federation/credentials`, A = z4.map({
        role_name: [, z4.expectNonNull(I.roleName, "roleName")],
        account_id: [, z4.expectNonNull(I.accountId, "accountId")]
      }), V;
      return new Gi.HttpRequest({
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
  cm0.se_GetRoleCredentialsCommand = AD5;
  var VD5 = async (I, d) => {
    let {
      hostname: G,
      protocol: Z = "https",
      port: C,
      path: W
    } = await d.endpoint(), w = z4.map({}, Ai, {
      "x-amz-sso_bearer_token": I.accessToken
    }), B = `${W?.endsWith("/")?W.slice(0,-1):W||""}/assignment/roles`, A = z4.map({
      next_token: [, I.nextToken],
      max_result: [() => I.maxResults !== void 0, () => I.maxResults.toString()],
      account_id: [, z4.expectNonNull(I.accountId, "accountId")]
    }), V;
    return new Gi.HttpRequest({
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
  cm0.se_ListAccountRolesCommand = VD5;
  var XD5 = async (I, d) => {
    let {
      hostname: G,
      protocol: Z = "https",
      port: C,
      path: W
    } = await d.endpoint(), w = z4.map({}, Ai, {
      "x-amz-sso_bearer_token": I.accessToken
    }), B = `${W?.endsWith("/")?W.slice(0,-1):W||""}/assignment/accounts`, A = z4.map({
      next_token: [, I.nextToken],
      max_result: [() => I.maxResults !== void 0, () => I.maxResults.toString()]
    }), V;
    return new Gi.HttpRequest({
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
  cm0.se_ListAccountsCommand = XD5;
  var YD5 = async (I, d) => {
    let {
      hostname: G,
      protocol: Z = "https",
      port: C,
      path: W
    } = await d.endpoint(), w = z4.map({}, Ai, {
      "x-amz-sso_bearer_token": I.accessToken
    }), B = `${W?.endsWith("/")?W.slice(0,-1):W||""}/logout`, A;
    return new Gi.HttpRequest({
      protocol: Z,
      hostname: G,
      port: C,
      method: "POST",
      headers: w,
      path: B,
      body: A
    })
  };
  cm0.se_LogoutCommand = YD5;
  var _D5 = async (I, d) => {
    if (I.statusCode !== 200 && I.statusCode >= 300) return DD5(I, d);
    let G = z4.map({
        $metadata: FD(I)
      }),
      Z = z4.expectNonNull(z4.expectObject(await Vi(I.body, d)), "body"),
      C = z4.take(Z, {
        roleCredentials: z4._json
      });
    return Object.assign(G, C), G
  };
  cm0.de_GetRoleCredentialsCommand = _D5;
  var DD5 = async (I, d) => {
    let G = {
        ...I,
        body: await Xi(I.body, d)
      },
      Z = Yi(I, G.body);
    switch (Z) {
      case "InvalidRequestException":
      case "com.amazonaws.sso#InvalidRequestException":
        throw await Wi(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.sso#ResourceNotFoundException":
        throw await _A1(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.sso#TooManyRequestsException":
        throw await wi(G, d);
      case "UnauthorizedException":
      case "com.amazonaws.sso#UnauthorizedException":
        throw await Bi(G, d);
      default:
        let C = G.body;
        return Ci({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, HD5 = async (I, d) => {
    if (I.statusCode !== 200 && I.statusCode >= 300) return FD5(I, d);
    let G = z4.map({
        $metadata: FD(I)
      }),
      Z = z4.expectNonNull(z4.expectObject(await Vi(I.body, d)), "body"),
      C = z4.take(Z, {
        nextToken: z4.expectString,
        roleList: z4._json
      });
    return Object.assign(G, C), G
  };
  cm0.de_ListAccountRolesCommand = HD5;
  var FD5 = async (I, d) => {
    let G = {
        ...I,
        body: await Xi(I.body, d)
      },
      Z = Yi(I, G.body);
    switch (Z) {
      case "InvalidRequestException":
      case "com.amazonaws.sso#InvalidRequestException":
        throw await Wi(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.sso#ResourceNotFoundException":
        throw await _A1(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.sso#TooManyRequestsException":
        throw await wi(G, d);
      case "UnauthorizedException":
      case "com.amazonaws.sso#UnauthorizedException":
        throw await Bi(G, d);
      default:
        let C = G.body;
        return Ci({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, gD5 = async (I, d) => {
    if (I.statusCode !== 200 && I.statusCode >= 300) return JD5(I, d);
    let G = z4.map({
        $metadata: FD(I)
      }),
      Z = z4.expectNonNull(z4.expectObject(await Vi(I.body, d)), "body"),
      C = z4.take(Z, {
        accountList: z4._json,
        nextToken: z4.expectString
      });
    return Object.assign(G, C), G
  };
  cm0.de_ListAccountsCommand = gD5;
  var JD5 = async (I, d) => {
    let G = {
        ...I,
        body: await Xi(I.body, d)
      },
      Z = Yi(I, G.body);
    switch (Z) {
      case "InvalidRequestException":
      case "com.amazonaws.sso#InvalidRequestException":
        throw await Wi(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.sso#ResourceNotFoundException":
        throw await _A1(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.sso#TooManyRequestsException":
        throw await wi(G, d);
      case "UnauthorizedException":
      case "com.amazonaws.sso#UnauthorizedException":
        throw await Bi(G, d);
      default:
        let C = G.body;
        return Ci({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, KD5 = async (I, d) => {
    if (I.statusCode !== 200 && I.statusCode >= 300) return ND5(I, d);
    let G = z4.map({
      $metadata: FD(I)
    });
    return await xm0(I.body, d), G
  };
  cm0.de_LogoutCommand = KD5;
  var ND5 = async (I, d) => {
    let G = {
        ...I,
        body: await Xi(I.body, d)
      },
      Z = Yi(I, G.body);
    switch (Z) {
      case "InvalidRequestException":
      case "com.amazonaws.sso#InvalidRequestException":
        throw await Wi(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.sso#TooManyRequestsException":
        throw await wi(G, d);
      case "UnauthorizedException":
      case "com.amazonaws.sso#UnauthorizedException":
        throw await Bi(G, d);
      default:
        let C = G.body;
        return Ci({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, Ci = z4.withBaseException(BD5.SSOServiceException), Wi = async (I, d) => {
    let G = z4.map({}),
      Z = I.body,
      C = z4.take(Z, {
        message: z4.expectString
      });
    Object.assign(G, C);
    let W = new Zi.InvalidRequestException({
      $metadata: FD(I),
      ...G
    });
    return z4.decorateServiceException(W, I.body)
  }, _A1 = async (I, d) => {
    let G = z4.map({}),
      Z = I.body,
      C = z4.take(Z, {
        message: z4.expectString
      });
    Object.assign(G, C);
    let W = new Zi.ResourceNotFoundException({
      $metadata: FD(I),
      ...G
    });
    return z4.decorateServiceException(W, I.body)
  }, wi = async (I, d) => {
    let G = z4.map({}),
      Z = I.body,
      C = z4.take(Z, {
        message: z4.expectString
      });
    Object.assign(G, C);
    let W = new Zi.TooManyRequestsException({
      $metadata: FD(I),
      ...G
    });
    return z4.decorateServiceException(W, I.body)
  }, Bi = async (I, d) => {
    let G = z4.map({}),
      Z = I.body,
      C = z4.take(Z, {
        message: z4.expectString
      });
    Object.assign(G, C);
    let W = new Zi.UnauthorizedException({
      $metadata: FD(I),
      ...G
    });
    return z4.decorateServiceException(W, I.body)
  }, FD = (I) => ({
    httpStatusCode: I.statusCode,
    requestId: I.headers["x-amzn-requestid"] ?? I.headers["x-amzn-request-id"] ?? I.headers["x-amz-request-id"],
    extendedRequestId: I.headers["x-amz-id-2"],
    cfId: I.headers["x-amz-cf-id"]
  }), xm0 = (I = new Uint8Array, d) => {
    if (I instanceof Uint8Array) return Promise.resolve(I);
    return d.streamCollector(I) || Promise.resolve(new Uint8Array)
  }, zD5 = (I, d) => xm0(I, d).then((G) => d.utf8Encoder(G)), Ai = (I) => I !== void 0 && I !== null && I !== "" && (!Object.getOwnPropertyNames(I).includes("length") || I.length != 0) && (!Object.getOwnPropertyNames(I).includes("size") || I.size != 0), Vi = (I, d) => zD5(I, d).then((G) => {
    if (G.length) return JSON.parse(G);
    return {}
  }), Xi = async (I, d) => {
    let G = await Vi(I, d);
    return G.message = G.message ?? G.Message, G
  }, Yi = (I, d) => {
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
// @from(Start 3065014, End 3066851)
FA1 = Y((HA1) => {
  Object.defineProperty(HA1, "__esModule", {
    value: !0
  });
  HA1.GetRoleCredentialsCommand = HA1.$Command = void 0;
  var MD5 = u2(),
    SD5 = r2(),
    rm0 = v0();
  Object.defineProperty(HA1, "$Command", {
    enumerable: !0,
    get: function() {
      return rm0.Command
    }
  });
  var im0 = HJ(),
    nm0 = $y();
  class DA1 extends rm0.Command {
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
      this.middlewareStack.use(SD5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(MD5.getEndpointPlugin(d, DA1.getEndpointParameterInstructions()));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "SSOClient",
          commandName: "GetRoleCredentialsCommand",
          inputFilterSensitiveLog: im0.GetRoleCredentialsRequestFilterSensitiveLog,
          outputFilterSensitiveLog: im0.GetRoleCredentialsResponseFilterSensitiveLog
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return nm0.se_GetRoleCredentialsCommand(I, d)
    }
    deserialize(I, d) {
      return nm0.de_GetRoleCredentialsCommand(I, d)
    }
  }
  HA1.GetRoleCredentialsCommand = DA1
})
// @from(Start 3066857, End 3068641)
_i = Y((JA1) => {
  Object.defineProperty(JA1, "__esModule", {
    value: !0
  });
  JA1.ListAccountRolesCommand = JA1.$Command = void 0;
  var LD5 = u2(),
    yD5 = r2(),
    om0 = v0();
  Object.defineProperty(JA1, "$Command", {
    enumerable: !0,
    get: function() {
      return om0.Command
    }
  });
  var PD5 = HJ(),
    sm0 = $y();
  class gA1 extends om0.Command {
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
      this.middlewareStack.use(yD5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(LD5.getEndpointPlugin(d, gA1.getEndpointParameterInstructions()));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "SSOClient",
          commandName: "ListAccountRolesCommand",
          inputFilterSensitiveLog: PD5.ListAccountRolesRequestFilterSensitiveLog,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return sm0.se_ListAccountRolesCommand(I, d)
    }
    deserialize(I, d) {
      return sm0.de_ListAccountRolesCommand(I, d)
    }
  }
  JA1.ListAccountRolesCommand = gA1
})
// @from(Start 3068647, End 3070407)
Di = Y((NA1) => {
  Object.defineProperty(NA1, "__esModule", {
    value: !0
  });
  NA1.ListAccountsCommand = NA1.$Command = void 0;
  var $D5 = u2(),
    uD5 = r2(),
    Il0 = v0();
  Object.defineProperty(NA1, "$Command", {
    enumerable: !0,
    get: function() {
      return Il0.Command
    }
  });
  var TD5 = HJ(),
    tm0 = $y();
  class KA1 extends Il0.Command {
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
      this.middlewareStack.use(uD5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use($D5.getEndpointPlugin(d, KA1.getEndpointParameterInstructions()));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "SSOClient",
          commandName: "ListAccountsCommand",
          inputFilterSensitiveLog: TD5.ListAccountsRequestFilterSensitiveLog,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return tm0.se_ListAccountsCommand(I, d)
    }
    deserialize(I, d) {
      return tm0.de_ListAccountsCommand(I, d)
    }
  }
  NA1.ListAccountsCommand = KA1
})
// @from(Start 3070413, End 3072138)
fA1 = Y((QA1) => {
  Object.defineProperty(QA1, "__esModule", {
    value: !0
  });
  QA1.LogoutCommand = QA1.$Command = void 0;
  var OD5 = u2(),
    mD5 = r2(),
    Zl0 = v0();
  Object.defineProperty(QA1, "$Command", {
    enumerable: !0,
    get: function() {
      return Zl0.Command
    }
  });
  var lD5 = HJ(),
    Gl0 = $y();
  class zA1 extends Zl0.Command {
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
      this.middlewareStack.use(mD5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(OD5.getEndpointPlugin(d, zA1.getEndpointParameterInstructions()));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "SSOClient",
          commandName: "LogoutCommand",
          inputFilterSensitiveLog: lD5.LogoutRequestFilterSensitiveLog,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return Gl0.se_LogoutCommand(I, d)
    }
    deserialize(I, d) {
      return Gl0.de_LogoutCommand(I, d)
    }
  }
  QA1.LogoutCommand = zA1
})
// @from(Start 3072144, End 3072677)
Bl0 = Y((Wl0) => {
  Object.defineProperty(Wl0, "__esModule", {
    value: !0
  });
  Wl0.SSO = void 0;
  var bD5 = v0(),
    hD5 = FA1(),
    jD5 = _i(),
    kD5 = Di(),
    xD5 = fA1(),
    cD5 = Py(),
    pD5 = {
      GetRoleCredentialsCommand: hD5.GetRoleCredentialsCommand,
      ListAccountRolesCommand: jD5.ListAccountRolesCommand,
      ListAccountsCommand: kD5.ListAccountsCommand,
      LogoutCommand: xD5.LogoutCommand
    };
  class qA1 extends cD5.SSOClient {}
  Wl0.SSO = qA1;
  bD5.createAggregatedClient(pD5, qA1)
})
// @from(Start 3072683, End 3072901)
Al0 = Y((Iq) => {
  Object.defineProperty(Iq, "__esModule", {
    value: !0
  });
  var Hi = x1();
  Hi.__exportStar(FA1(), Iq);
  Hi.__exportStar(_i(), Iq);
  Hi.__exportStar(Di(), Iq);
  Hi.__exportStar(fA1(), Iq)
})
// @from(Start 3072907, End 3072992)
Xl0 = Y((Vl0) => {
  Object.defineProperty(Vl0, "__esModule", {
    value: !0
  })
})
// @from(Start 3072998, End 3073735)
Dl0 = Y((Yl0) => {
  Object.defineProperty(Yl0, "__esModule", {
    value: !0
  });
  Yl0.paginateListAccountRoles = void 0;
  var iD5 = _i(),
    nD5 = Py(),
    rD5 = async (I, d, ...G) => {
      return await I.send(new iD5.ListAccountRolesCommand(d), ...G)
    };
  async function* aD5(I, d, ...G) {
    let Z = I.startingToken || void 0,
      C = !0,
      W;
    while (C) {
      if (d.nextToken = Z, d.maxResults = I.pageSize, I.client instanceof nD5.SSOClient) W = await rD5(I.client, d, ...G);
      else throw new Error("Invalid client, expected SSO | SSOClient");
      yield W;
      let w = Z;
      Z = W.nextToken, C = !!(Z && (!I.stopOnSameToken || Z !== w))
    }
    return
  }
  Yl0.paginateListAccountRoles = aD5
})
// @from(Start 3073741, End 3074466)
gl0 = Y((Hl0) => {
  Object.defineProperty(Hl0, "__esModule", {
    value: !0
  });
  Hl0.paginateListAccounts = void 0;
  var sD5 = Di(),
    oD5 = Py(),
    eD5 = async (I, d, ...G) => {
      return await I.send(new sD5.ListAccountsCommand(d), ...G)
    };
  async function* tD5(I, d, ...G) {
    let Z = I.startingToken || void 0,
      C = !0,
      W;
    while (C) {
      if (d.nextToken = Z, d.maxResults = I.pageSize, I.client instanceof oD5.SSOClient) W = await eD5(I.client, d, ...G);
      else throw new Error("Invalid client, expected SSO | SSOClient");
      yield W;
      let w = Z;
      Z = W.nextToken, C = !!(Z && (!I.stopOnSameToken || Z !== w))
    }
    return
  }
  Hl0.paginateListAccounts = tD5
})
// @from(Start 3074472, End 3074666)
Jl0 = Y((uy) => {
  Object.defineProperty(uy, "__esModule", {
    value: !0
  });
  var RA1 = x1();
  RA1.__exportStar(Xl0(), uy);
  RA1.__exportStar(Dl0(), uy);
  RA1.__exportStar(gl0(), uy)
})
// @from(Start 3074672, End 3074806)
Kl0 = Y((UA1) => {
  Object.defineProperty(UA1, "__esModule", {
    value: !0
  });
  var IH5 = x1();
  IH5.__exportStar(HJ(), UA1)
})
// @from(Start 3074812, End 3075258)
vA1 = Y((gD) => {
  Object.defineProperty(gD, "__esModule", {
    value: !0
  });
  gD.SSOServiceException = void 0;
  var Ty = x1();
  Ty.__exportStar(Py(), gD);
  Ty.__exportStar(Bl0(), gD);
  Ty.__exportStar(Al0(), gD);
  Ty.__exportStar(Jl0(), gD);
  Ty.__exportStar(Kl0(), gD);
  var dH5 = Ii();
  Object.defineProperty(gD, "SSOServiceException", {
    enumerable: !0,
    get: function() {
      return dH5.SSOServiceException
    }
  })
})
// @from(Start 3075264, End 3075543)
Fi = Y((Nl0) => {
  Object.defineProperty(Nl0, "__esModule", {
    value: !0
  });
  Nl0.REFRESH_MESSAGE = Nl0.EXPIRE_WINDOW_MS = void 0;
  Nl0.EXPIRE_WINDOW_MS = 300000;
  Nl0.REFRESH_MESSAGE = "To refresh this SSO session run 'aws sso login' with the corresponding profile."
})
// @from(Start 3075549, End 3075881)
ql0 = Y((Ql0) => {
  Object.defineProperty(Ql0, "__esModule", {
    value: !0
  });
  Ql0.getSsoOidcClient = void 0;
  var CH5 = Gy(),
    EA1 = {},
    WH5 = (I) => {
      if (EA1[I]) return EA1[I];
      let d = new CH5.SSOOIDCClient({
        region: I
      });
      return EA1[I] = d, d
    };
  Ql0.getSsoOidcClient = WH5
})
// @from(Start 3075887, End 3076325)
vl0 = Y((Rl0) => {
  Object.defineProperty(Rl0, "__esModule", {
    value: !0
  });
  Rl0.getNewSsoOidcToken = void 0;
  var wH5 = Gy(),
    BH5 = ql0(),
    AH5 = (I, d) => {
      return BH5.getSsoOidcClient(d).send(new wH5.CreateTokenCommand({
        clientId: I.clientId,
        clientSecret: I.clientSecret,
        refreshToken: I.refreshToken,
        grantType: "refresh_token"
      }))
    };
  Rl0.getNewSsoOidcToken = AH5
})
// @from(Start 3076331, End 3076689)
Sl0 = Y((El0) => {
  Object.defineProperty(El0, "__esModule", {
    value: !0
  });
  El0.validateTokenExpiry = void 0;
  var VH5 = W4(),
    XH5 = Fi(),
    YH5 = (I) => {
      if (I.expiration && I.expiration.getTime() < Date.now()) throw new VH5.TokenProviderError(`Token is expired. ${XH5.REFRESH_MESSAGE}`, !1)
    };
  El0.validateTokenExpiry = YH5
})
// @from(Start 3076695, End 3077082)
Pl0 = Y((Ll0) => {
  Object.defineProperty(Ll0, "__esModule", {
    value: !0
  });
  Ll0.validateTokenKey = void 0;
  var _H5 = W4(),
    DH5 = Fi(),
    HH5 = (I, d, G = !1) => {
      if (typeof d === "undefined") throw new _H5.TokenProviderError(`Value not present for '${I}' in SSO Token${G?". Cannot refresh":""}. ${DH5.REFRESH_MESSAGE}`, !1)
    };
  Ll0.validateTokenKey = HH5
})
// @from(Start 3077088, End 3077463)
Tl0 = Y(($l0) => {
  Object.defineProperty($l0, "__esModule", {
    value: !0
  });
  $l0.writeSSOTokenToFile = void 0;
  var FH5 = K8(),
    gH5 = B1("fs"),
    {
      writeFile: JH5
    } = gH5.promises,
    KH5 = (I, d) => {
      let G = FH5.getSSOTokenFilepath(I),
        Z = JSON.stringify(d, null, 2);
      return JH5(G, Z)
    };
  $l0.writeSSOTokenToFile = KH5
})
// @from(Start 3077469, End 3080017)
MA1 = Y((bl0) => {
  Object.defineProperty(bl0, "__esModule", {
    value: !0
  });
  bl0.fromSso = void 0;
  var Oy = W4(),
    gi = K8(),
    Ol0 = Fi(),
    NH5 = vl0(),
    ml0 = Sl0(),
    FJ = Pl0(),
    zH5 = Tl0(),
    ll0 = new Date(0),
    QH5 = (I = {}) => async () => {
      let d = await gi.parseKnownFiles(I),
        G = gi.getProfileName(I),
        Z = d[G];
      if (!Z) throw new Oy.TokenProviderError(`Profile '${G}' could not be found in shared credentials file.`, !1);
      else if (!Z.sso_session) throw new Oy.TokenProviderError(`Profile '${G}' is missing required property 'sso_session'.`);
      let C = Z.sso_session,
        w = (await gi.loadSsoSessionData(I))[C];
      if (!w) throw new Oy.TokenProviderError(`Sso session '${C}' could not be found in shared credentials file.`, !1);
      for (let g of ["sso_start_url", "sso_region"])
        if (!w[g]) throw new Oy.TokenProviderError(`Sso session '${C}' is missing required property '${g}'.`, !1);
      let {
        sso_start_url: B,
        sso_region: A
      } = w, V;
      try {
        V = await gi.getSSOTokenFromFile(C)
      } catch (g) {
        throw new Oy.TokenProviderError(`The SSO session token associated with profile=${G} was not found or is invalid. ${Ol0.REFRESH_MESSAGE}`, !1)
      }
      FJ.validateTokenKey("accessToken", V.accessToken), FJ.validateTokenKey("expiresAt", V.expiresAt);
      let {
        accessToken: X,
        expiresAt: _
      } = V, F = {
        token: X,
        expiration: new Date(_)
      };
      if (F.expiration.getTime() - Date.now() > Ol0.EXPIRE_WINDOW_MS) return F;
      if (Date.now() - ll0.getTime() < 30000) return ml0.validateTokenExpiry(F), F;
      FJ.validateTokenKey("clientId", V.clientId, !0), FJ.validateTokenKey("clientSecret", V.clientSecret, !0), FJ.validateTokenKey("refreshToken", V.refreshToken, !0);
      try {
        ll0.setTime(Date.now());
        let g = await NH5.getNewSsoOidcToken(V, A);
        FJ.validateTokenKey("accessToken", g.accessToken), FJ.validateTokenKey("expiresIn", g.expiresIn);
        let J = new Date(Date.now() + g.expiresIn * 1000);
        try {
          await zH5.writeSSOTokenToFile(C, {
            ...V,
            accessToken: g.accessToken,
            expiresAt: J.toISOString(),
            refreshToken: g.refreshToken
          })
        } catch (K) {}
        return {
          token: g.accessToken,
          expiration: J
        }
      } catch (g) {
        return ml0.validateTokenExpiry(F), F
      }
    };
  bl0.fromSso = QH5
})
// @from(Start 3080023, End 3080358)
xl0 = Y((jl0) => {
  Object.defineProperty(jl0, "__esModule", {
    value: !0
  });
  jl0.fromStatic = void 0;
  var fH5 = W4(),
    qH5 = ({
      token: I
    }) => async () => {
      if (!I || !I.token) throw new fH5.TokenProviderError("Please pass a valid token to fromStatic", !1);
      return I
    };
  jl0.fromStatic = qH5
})
// @from(Start 3080364, End 3080820)
il0 = Y((cl0) => {
  Object.defineProperty(cl0, "__esModule", {
    value: !0
  });
  cl0.nodeProvider = void 0;
  var SA1 = W4(),
    RH5 = MA1(),
    UH5 = (I = {}) => SA1.memoize(SA1.chain(RH5.fromSso(I), async () => {
      throw new SA1.TokenProviderError("Could not load token from any providers", !1)
    }), (d) => d.expiration !== void 0 && d.expiration.getTime() - Date.now() < 300000, (d) => d.expiration !== void 0);
  cl0.nodeProvider = UH5
})
// @from(Start 3080826, End 3081020)
nl0 = Y((my) => {
  Object.defineProperty(my, "__esModule", {
    value: !0
  });
  var LA1 = x1();
  LA1.__exportStar(MA1(), my);
  LA1.__exportStar(xl0(), my);
  LA1.__exportStar(il0(), my)
})
// @from(Start 3081026, End 3083149)
ol0 = Y((al0) => {
  Object.defineProperty(al0, "__esModule", {
    value: !0
  });
  al0.resolveSSOCredentials = void 0;
  var rl0 = vA1(),
    ly = W4(),
    vH5 = K8(),
    EH5 = nl0(),
    MH5 = 900000,
    by = !1,
    SH5 = async ({
      ssoStartUrl: I,
      ssoSession: d,
      ssoAccountId: G,
      ssoRegion: Z,
      ssoRoleName: C,
      ssoClient: W,
      profile: w
    }) => {
      let B, A = "To refresh this SSO session run aws sso login with the corresponding profile.";
      if (d) try {
        let Q = await EH5.fromSso({
          profile: w
        })();
        B = {
          accessToken: Q.token,
          expiresAt: new Date(Q.expiration).toISOString()
        }
      } catch (Q) {
        throw new ly.CredentialsProviderError(Q.message, by)
      } else try {
        B = await vH5.getSSOTokenFromFile(I)
      } catch (Q) {
        throw new ly.CredentialsProviderError("The SSO session associated with this profile is invalid. To refresh this SSO session run aws sso login with the corresponding profile.", by)
      }
      if (new Date(B.expiresAt).getTime() - Date.now() <= MH5) throw new ly.CredentialsProviderError("The SSO session associated with this profile has expired. To refresh this SSO session run aws sso login with the corresponding profile.", by);
      let {
        accessToken: V
      } = B, X = W || new rl0.SSOClient({
        region: Z
      }), _;
      try {
        _ = await X.send(new rl0.GetRoleCredentialsCommand({
          accountId: G,
          roleName: C,
          accessToken: V
        }))
      } catch (Q) {
        throw ly.CredentialsProviderError.from(Q, by)
      }
      let {
        roleCredentials: {
          accessKeyId: F,
          secretAccessKey: g,
          sessionToken: J,
          expiration: K
        } = {}
      } = _;
      if (!F || !g || !J || !K) throw new ly.CredentialsProviderError("SSO returns an invalid temporary credential.", by);
      return {
        accessKeyId: F,
        secretAccessKey: g,
        sessionToken: J,
        expiration: new Date(K)
      }
    };
  al0.resolveSSOCredentials = SH5
})
// @from(Start 3083155, End 3083825)
yA1 = Y((el0) => {
  Object.defineProperty(el0, "__esModule", {
    value: !0
  });
  el0.validateSsoProfile = void 0;
  var LH5 = W4(),
    yH5 = (I) => {
      let {
        sso_start_url: d,
        sso_account_id: G,
        sso_region: Z,
        sso_role_name: C
      } = I;
      if (!d || !G || !Z || !C) throw new LH5.CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(I).join(", ")}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, !1);
      return I
    };
  el0.validateSsoProfile = yH5
})
// @from(Start 3083831, End 3085952)
Zb0 = Y((db0) => {
  Object.defineProperty(db0, "__esModule", {
    value: !0
  });
  db0.fromSSO = void 0;
  var hy = W4(),
    PA1 = K8(),
    PH5 = dA1(),
    Ib0 = ol0(),
    $H5 = yA1(),
    uH5 = (I = {}) => async () => {
      let {
        ssoStartUrl: d,
        ssoAccountId: G,
        ssoRegion: Z,
        ssoRoleName: C,
        ssoClient: W,
        ssoSession: w
      } = I, B = PA1.getProfileName(I);
      if (!d && !G && !Z && !C && !w) {
        let V = (await PA1.parseKnownFiles(I))[B];
        if (!V) throw new hy.CredentialsProviderError(`Profile ${B} was not found.`);
        if (!PH5.isSsoProfile(V)) throw new hy.CredentialsProviderError(`Profile ${B} is not configured with SSO credentials.`);
        if (V === null || V === void 0 ? void 0 : V.sso_session) {
          let Q = (await PA1.loadSsoSessionData(I))[V.sso_session],
            E = ` configurations in profile ${B} and sso-session ${V.sso_session}`;
          if (Z && Z !== Q.sso_region) throw new hy.CredentialsProviderError("Conflicting SSO region" + E, !1);
          if (d && d !== Q.sso_start_url) throw new hy.CredentialsProviderError("Conflicting SSO start_url" + E, !1);
          V.sso_region = Q.sso_region, V.sso_start_url = Q.sso_start_url
        }
        let {
          sso_start_url: X,
          sso_account_id: _,
          sso_region: F,
          sso_role_name: g,
          sso_session: J
        } = $H5.validateSsoProfile(V);
        return Ib0.resolveSSOCredentials({
          ssoStartUrl: X,
          ssoSession: J,
          ssoAccountId: _,
          ssoRegion: F,
          ssoRoleName: g,
          ssoClient: W,
          profile: B
        })
      } else if (!d || !G || !Z || !C) throw new hy.CredentialsProviderError('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"');
      else return Ib0.resolveSSOCredentials({
        ssoStartUrl: d,
        ssoSession: w,
        ssoAccountId: G,
        ssoRegion: Z,
        ssoRoleName: C,
        ssoClient: W,
        profile: B
      })
    };
  db0.fromSSO = uH5
})
// @from(Start 3085958, End 3086043)
Wb0 = Y((Cb0) => {
  Object.defineProperty(Cb0, "__esModule", {
    value: !0
  })
})
// @from(Start 3086049, End 3086268)
jy = Y((dq) => {
  Object.defineProperty(dq, "__esModule", {
    value: !0
  });
  var Ji = x1();
  Ji.__exportStar(Zb0(), dq);
  Ji.__exportStar(dA1(), dq);
  Ji.__exportStar(Wb0(), dq);
  Ji.__exportStar(yA1(), dq)
})
// @from(Start 3086274, End 3086943)
Ab0 = Y(($A1) => {
  Object.defineProperty($A1, "__esModule", {
    value: !0
  });
  $A1.resolveSsoCredentials = $A1.isSsoProfile = void 0;
  var wb0 = jy(),
    TH5 = jy();
  Object.defineProperty($A1, "isSsoProfile", {
    enumerable: !0,
    get: function() {
      return TH5.isSsoProfile
    }
  });
  var OH5 = (I) => {
    let {
      sso_start_url: d,
      sso_account_id: G,
      sso_session: Z,
      sso_region: C,
      sso_role_name: W
    } = wb0.validateSsoProfile(I);
    return wb0.fromSSO({
      ssoStartUrl: d,
      ssoAccountId: G,
      ssoSession: Z,
      ssoRegion: C,
      ssoRoleName: W
    })()
  };
  $A1.resolveSsoCredentials = OH5
})
// @from(Start 3086949, End 3087553)
Yb0 = Y((Vb0) => {
  Object.defineProperty(Vb0, "__esModule", {
    value: !0
  });
  Vb0.resolveStaticCredentials = Vb0.isStaticCredsProfile = void 0;
  var mH5 = (I) => Boolean(I) && typeof I === "object" && typeof I.aws_access_key_id === "string" && typeof I.aws_secret_access_key === "string" && ["undefined", "string"].indexOf(typeof I.aws_session_token) > -1;
  Vb0.isStaticCredsProfile = mH5;
  var lH5 = (I) => Promise.resolve({
    accessKeyId: I.aws_access_key_id,
    secretAccessKey: I.aws_secret_access_key,
    sessionToken: I.aws_session_token
  });
  Vb0.resolveStaticCredentials = lH5
})
// @from(Start 3087559, End 3088405)
uA1 = Y((_b0) => {
  Object.defineProperty(_b0, "__esModule", {
    value: !0
  });
  _b0.fromWebToken = void 0;
  var hH5 = W4(),
    jH5 = (I) => () => {
      let {
        roleArn: d,
        roleSessionName: G,
        webIdentityToken: Z,
        providerId: C,
        policyArns: W,
        policy: w,
        durationSeconds: B,
        roleAssumerWithWebIdentity: A
      } = I;
      if (!A) throw new hH5.CredentialsProviderError(`Role Arn '${d}' needs to be assumed with web identity, but no role assumption callback was provided.`, !1);
      return A({
        RoleArn: d,
        RoleSessionName: G !== null && G !== void 0 ? G : `aws-sdk-js-session-${Date.now()}`,
        WebIdentityToken: Z,
        ProviderId: C,
        PolicyArns: W,
        Policy: w,
        DurationSeconds: B
      })
    };
  _b0.fromWebToken = jH5
})
// @from(Start 3088411, End 3089456)
gb0 = Y((Hb0) => {
  Object.defineProperty(Hb0, "__esModule", {
    value: !0
  });
  Hb0.fromTokenFile = void 0;
  var kH5 = W4(),
    xH5 = B1("fs"),
    cH5 = uA1(),
    pH5 = "AWS_WEB_IDENTITY_TOKEN_FILE",
    iH5 = "AWS_ROLE_ARN",
    nH5 = "AWS_ROLE_SESSION_NAME",
    rH5 = (I = {}) => async () => {
      return aH5(I)
    };
  Hb0.fromTokenFile = rH5;
  var aH5 = (I) => {
    var d, G, Z;
    let C = (d = I === null || I === void 0 ? void 0 : I.webIdentityTokenFile) !== null && d !== void 0 ? d : process.env[pH5],
      W = (G = I === null || I === void 0 ? void 0 : I.roleArn) !== null && G !== void 0 ? G : process.env[iH5],
      w = (Z = I === null || I === void 0 ? void 0 : I.roleSessionName) !== null && Z !== void 0 ? Z : process.env[nH5];
    if (!C || !W) throw new kH5.CredentialsProviderError("Web identity configuration not specified");
    return cH5.fromWebToken({
      ...I,
      webIdentityToken: xH5.readFileSync(C, {
        encoding: "ascii"
      }),
      roleArn: W,
      roleSessionName: w
    })()
  }
})
// @from(Start 3089462, End 3089624)
ky = Y((Ki) => {
  Object.defineProperty(Ki, "__esModule", {
    value: !0
  });
  var Jb0 = x1();
  Jb0.__exportStar(gb0(), Ki);
  Jb0.__exportStar(uA1(), Ki)
})
// @from(Start 3089630, End 3090325)
zb0 = Y((Kb0) => {
  Object.defineProperty(Kb0, "__esModule", {
    value: !0
  });
  Kb0.resolveWebIdentityCredentials = Kb0.isWebIdentityProfile = void 0;
  var sH5 = ky(),
    oH5 = (I) => Boolean(I) && typeof I === "object" && typeof I.web_identity_token_file === "string" && typeof I.role_arn === "string" && ["undefined", "string"].indexOf(typeof I.role_session_name) > -1;
  Kb0.isWebIdentityProfile = oH5;
  var eH5 = async (I, d) => sH5.fromTokenFile({
    webIdentityTokenFile: I.web_identity_token_file,
    roleArn: I.role_arn,
    roleSessionName: I.role_session_name,
    roleAssumerWithWebIdentity: d.roleAssumerWithWebIdentity
  })();
  Kb0.resolveWebIdentityCredentials = eH5
})
// @from(Start 3090331, End 3091277)
eB1 = Y((Ub0) => {
  Object.defineProperty(Ub0, "__esModule", {
    value: !0
  });
  Ub0.resolveProfileData = void 0;
  var IF5 = W4(),
    Qb0 = LO0(),
    fb0 = xO0(),
    qb0 = Ab0(),
    Ni = Yb0(),
    Rb0 = zb0(),
    dF5 = async (I, d, G, Z = {}) => {
      let C = d[I];
      if (Object.keys(Z).length > 0 && Ni.isStaticCredsProfile(C)) return Ni.resolveStaticCredentials(C);
      if (Qb0.isAssumeRoleProfile(C)) return Qb0.resolveAssumeRoleCredentials(I, d, G, Z);
      if (Ni.isStaticCredsProfile(C)) return Ni.resolveStaticCredentials(C);
      if (Rb0.isWebIdentityProfile(C)) return Rb0.resolveWebIdentityCredentials(C, G);
      if (fb0.isProcessProfile(C)) return fb0.resolveProcessCredentials(G, I);
      if (qb0.isSsoProfile(C)) return qb0.resolveSsoCredentials(C);
      throw new IF5.CredentialsProviderError(`Profile ${I} could not be found or parsed in shared credentials file.`)
    };
  Ub0.resolveProfileData = dF5
})
// @from(Start 3091283, End 3091600)
Lb0 = Y((Mb0) => {
  Object.defineProperty(Mb0, "__esModule", {
    value: !0
  });
  Mb0.fromIni = void 0;
  var Eb0 = K8(),
    GF5 = eB1(),
    ZF5 = (I = {}) => async () => {
      let d = await Eb0.parseKnownFiles(I);
      return GF5.resolveProfileData(Eb0.getProfileName(I), d, I)
    };
  Mb0.fromIni = ZF5
})
// @from(Start 3091606, End 3091741)
OA1 = Y((TA1) => {
  Object.defineProperty(TA1, "__esModule", {
    value: !0
  });
  var CF5 = x1();
  CF5.__exportStar(Lb0(), TA1)
})
// @from(Start 3091747, End 3092353)
ub0 = Y((yb0) => {
  Object.defineProperty(yb0, "__esModule", {
    value: !0
  });
  yb0.remoteProvider = yb0.ENV_IMDS_DISABLED = void 0;
  var zi = i_(),
    WF5 = W4();
  yb0.ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
  var wF5 = (I) => {
    if (process.env[zi.ENV_CMDS_RELATIVE_URI] || process.env[zi.ENV_CMDS_FULL_URI]) return zi.fromContainerMetadata(I);
    if (process.env[yb0.ENV_IMDS_DISABLED]) return async () => {
      throw new WF5.CredentialsProviderError("EC2 Instance Metadata Service access disabled")
    };
    return zi.fromInstanceMetadata(I)
  };
  yb0.remoteProvider = wF5
})
// @from(Start 3092359, End 3093080)
mb0 = Y((Tb0) => {
  Object.defineProperty(Tb0, "__esModule", {
    value: !0
  });
  Tb0.defaultProvider = void 0;
  var BF5 = lp(),
    AF5 = OA1(),
    VF5 = ep(),
    XF5 = jy(),
    YF5 = ky(),
    mA1 = W4(),
    _F5 = K8(),
    DF5 = ub0(),
    HF5 = (I = {}) => mA1.memoize(mA1.chain(...I.profile || process.env[_F5.ENV_PROFILE] ? [] : [BF5.fromEnv()], XF5.fromSSO(I), AF5.fromIni(I), VF5.fromProcess(I), YF5.fromTokenFile(I), DF5.remoteProvider(I), async () => {
      throw new mA1.CredentialsProviderError("Could not load credentials from any providers", !1)
    }), (d) => d.expiration !== void 0 && d.expiration.getTime() - Date.now() < 300000, (d) => d.expiration !== void 0);
  Tb0.defaultProvider = HF5
})
// @from(Start 3093086, End 3093221)
bA1 = Y((lA1) => {
  Object.defineProperty(lA1, "__esModule", {
    value: !0
  });
  var FF5 = x1();
  FF5.__exportStar(mb0(), lA1)
})