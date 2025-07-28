
// @from(Start 2546609, End 2569377)
fV = Y((vX0) => {
  Object.defineProperty(vX0, "__esModule", {
    value: !0
  });
  vX0.de_GetSessionTokenCommand = vX0.de_GetFederationTokenCommand = vX0.de_GetCallerIdentityCommand = vX0.de_GetAccessKeyInfoCommand = vX0.de_DecodeAuthorizationMessageCommand = vX0.de_AssumeRoleWithWebIdentityCommand = vX0.de_AssumeRoleWithSAMLCommand = vX0.de_AssumeRoleCommand = vX0.se_GetSessionTokenCommand = vX0.se_GetFederationTokenCommand = vX0.se_GetCallerIdentityCommand = vX0.se_GetAccessKeyInfoCommand = vX0.se_DecodeAuthorizationMessageCommand = vX0.se_AssumeRoleWithWebIdentityCommand = vX0.se_AssumeRoleWithSAMLCommand = vX0.se_AssumeRoleCommand = void 0;
  var e2 = v0(),
    ze4 = Oc(),
    Qe4 = fX0(),
    m_ = T_(),
    fe4 = uc(),
    qe4 = async (I, d) => {
      let G = h_,
        Z;
      return Z = k_({
        ...ae4(I, d),
        Action: "AssumeRole",
        Version: "2011-06-15"
      }), b_(d, G, "/", void 0, Z)
    };
  vX0.se_AssumeRoleCommand = qe4;
  var Re4 = async (I, d) => {
    let G = h_,
      Z;
    return Z = k_({
      ...se4(I, d),
      Action: "AssumeRoleWithSAML",
      Version: "2011-06-15"
    }), b_(d, G, "/", void 0, Z)
  };
  vX0.se_AssumeRoleWithSAMLCommand = Re4;
  var Ue4 = async (I, d) => {
    let G = h_,
      Z;
    return Z = k_({
      ...oe4(I, d),
      Action: "AssumeRoleWithWebIdentity",
      Version: "2011-06-15"
    }), b_(d, G, "/", void 0, Z)
  };
  vX0.se_AssumeRoleWithWebIdentityCommand = Ue4;
  var ve4 = async (I, d) => {
    let G = h_,
      Z;
    return Z = k_({
      ...ee4(I, d),
      Action: "DecodeAuthorizationMessage",
      Version: "2011-06-15"
    }), b_(d, G, "/", void 0, Z)
  };
  vX0.se_DecodeAuthorizationMessageCommand = ve4;
  var Ee4 = async (I, d) => {
    let G = h_,
      Z;
    return Z = k_({
      ...te4(I, d),
      Action: "GetAccessKeyInfo",
      Version: "2011-06-15"
    }), b_(d, G, "/", void 0, Z)
  };
  vX0.se_GetAccessKeyInfoCommand = Ee4;
  var Me4 = async (I, d) => {
    let G = h_,
      Z;
    return Z = k_({
      ...It4(I, d),
      Action: "GetCallerIdentity",
      Version: "2011-06-15"
    }), b_(d, G, "/", void 0, Z)
  };
  vX0.se_GetCallerIdentityCommand = Me4;
  var Se4 = async (I, d) => {
    let G = h_,
      Z;
    return Z = k_({
      ...dt4(I, d),
      Action: "GetFederationToken",
      Version: "2011-06-15"
    }), b_(d, G, "/", void 0, Z)
  };
  vX0.se_GetFederationTokenCommand = Se4;
  var Le4 = async (I, d) => {
    let G = h_,
      Z;
    return Z = k_({
      ...Gt4(I, d),
      Action: "GetSessionToken",
      Version: "2011-06-15"
    }), b_(d, G, "/", void 0, Z)
  };
  vX0.se_GetSessionTokenCommand = Le4;
  var ye4 = async (I, d) => {
    if (I.statusCode >= 300) return Pe4(I, d);
    let G = await QV(I.body, d),
      Z = {};
    return Z = wt4(G.AssumeRoleResult, d), {
      $metadata: y7(I),
      ...Z
    }
  };
  vX0.de_AssumeRoleCommand = ye4;
  var Pe4 = async (I, d) => {
    let G = {
        ...I,
        body: await j_(I.body, d)
      },
      Z = x_(I, G.body);
    switch (Z) {
      case "ExpiredTokenException":
      case "com.amazonaws.sts#ExpiredTokenException":
        throw await od1(G, d);
      case "MalformedPolicyDocument":
      case "com.amazonaws.sts#MalformedPolicyDocumentException":
        throw await lc(G, d);
      case "PackedPolicyTooLarge":
      case "com.amazonaws.sts#PackedPolicyTooLargeException":
        throw await bc(G, d);
      case "RegionDisabledException":
      case "com.amazonaws.sts#RegionDisabledException":
        throw await $L(G, d);
      default:
        let C = G.body;
        return l_({
          output: I,
          parsedBody: C.Error,
          errorCode: Z
        })
    }
  }, $e4 = async (I, d) => {
    if (I.statusCode >= 300) return ue4(I, d);
    let G = await QV(I.body, d),
      Z = {};
    return Z = Bt4(G.AssumeRoleWithSAMLResult, d), {
      $metadata: y7(I),
      ...Z
    }
  };
  vX0.de_AssumeRoleWithSAMLCommand = $e4;
  var ue4 = async (I, d) => {
    let G = {
        ...I,
        body: await j_(I.body, d)
      },
      Z = x_(I, G.body);
    switch (Z) {
      case "ExpiredTokenException":
      case "com.amazonaws.sts#ExpiredTokenException":
        throw await od1(G, d);
      case "IDPRejectedClaim":
      case "com.amazonaws.sts#IDPRejectedClaimException":
        throw await qX0(G, d);
      case "InvalidIdentityToken":
      case "com.amazonaws.sts#InvalidIdentityTokenException":
        throw await RX0(G, d);
      case "MalformedPolicyDocument":
      case "com.amazonaws.sts#MalformedPolicyDocumentException":
        throw await lc(G, d);
      case "PackedPolicyTooLarge":
      case "com.amazonaws.sts#PackedPolicyTooLargeException":
        throw await bc(G, d);
      case "RegionDisabledException":
      case "com.amazonaws.sts#RegionDisabledException":
        throw await $L(G, d);
      default:
        let C = G.body;
        return l_({
          output: I,
          parsedBody: C.Error,
          errorCode: Z
        })
    }
  }, Te4 = async (I, d) => {
    if (I.statusCode >= 300) return Oe4(I, d);
    let G = await QV(I.body, d),
      Z = {};
    return Z = At4(G.AssumeRoleWithWebIdentityResult, d), {
      $metadata: y7(I),
      ...Z
    }
  };
  vX0.de_AssumeRoleWithWebIdentityCommand = Te4;
  var Oe4 = async (I, d) => {
    let G = {
        ...I,
        body: await j_(I.body, d)
      },
      Z = x_(I, G.body);
    switch (Z) {
      case "ExpiredTokenException":
      case "com.amazonaws.sts#ExpiredTokenException":
        throw await od1(G, d);
      case "IDPCommunicationError":
      case "com.amazonaws.sts#IDPCommunicationErrorException":
        throw await ne4(G, d);
      case "IDPRejectedClaim":
      case "com.amazonaws.sts#IDPRejectedClaimException":
        throw await qX0(G, d);
      case "InvalidIdentityToken":
      case "com.amazonaws.sts#InvalidIdentityTokenException":
        throw await RX0(G, d);
      case "MalformedPolicyDocument":
      case "com.amazonaws.sts#MalformedPolicyDocumentException":
        throw await lc(G, d);
      case "PackedPolicyTooLarge":
      case "com.amazonaws.sts#PackedPolicyTooLargeException":
        throw await bc(G, d);
      case "RegionDisabledException":
      case "com.amazonaws.sts#RegionDisabledException":
        throw await $L(G, d);
      default:
        let C = G.body;
        return l_({
          output: I,
          parsedBody: C.Error,
          errorCode: Z
        })
    }
  }, me4 = async (I, d) => {
    if (I.statusCode >= 300) return le4(I, d);
    let G = await QV(I.body, d),
      Z = {};
    return Z = Vt4(G.DecodeAuthorizationMessageResult, d), {
      $metadata: y7(I),
      ...Z
    }
  };
  vX0.de_DecodeAuthorizationMessageCommand = me4;
  var le4 = async (I, d) => {
    let G = {
        ...I,
        body: await j_(I.body, d)
      },
      Z = x_(I, G.body);
    switch (Z) {
      case "InvalidAuthorizationMessageException":
      case "com.amazonaws.sts#InvalidAuthorizationMessageException":
        throw await re4(G, d);
      default:
        let C = G.body;
        return l_({
          output: I,
          parsedBody: C.Error,
          errorCode: Z
        })
    }
  }, be4 = async (I, d) => {
    if (I.statusCode >= 300) return he4(I, d);
    let G = await QV(I.body, d),
      Z = {};
    return Z = _t4(G.GetAccessKeyInfoResult, d), {
      $metadata: y7(I),
      ...Z
    }
  };
  vX0.de_GetAccessKeyInfoCommand = be4;
  var he4 = async (I, d) => {
    let G = {
        ...I,
        body: await j_(I.body, d)
      },
      Z = x_(I, G.body),
      C = G.body;
    return l_({
      output: I,
      parsedBody: C.Error,
      errorCode: Z
    })
  }, je4 = async (I, d) => {
    if (I.statusCode >= 300) return ke4(I, d);
    let G = await QV(I.body, d),
      Z = {};
    return Z = Dt4(G.GetCallerIdentityResult, d), {
      $metadata: y7(I),
      ...Z
    }
  };
  vX0.de_GetCallerIdentityCommand = je4;
  var ke4 = async (I, d) => {
    let G = {
        ...I,
        body: await j_(I.body, d)
      },
      Z = x_(I, G.body),
      C = G.body;
    return l_({
      output: I,
      parsedBody: C.Error,
      errorCode: Z
    })
  }, xe4 = async (I, d) => {
    if (I.statusCode >= 300) return ce4(I, d);
    let G = await QV(I.body, d),
      Z = {};
    return Z = Ht4(G.GetFederationTokenResult, d), {
      $metadata: y7(I),
      ...Z
    }
  };
  vX0.de_GetFederationTokenCommand = xe4;
  var ce4 = async (I, d) => {
    let G = {
        ...I,
        body: await j_(I.body, d)
      },
      Z = x_(I, G.body);
    switch (Z) {
      case "MalformedPolicyDocument":
      case "com.amazonaws.sts#MalformedPolicyDocumentException":
        throw await lc(G, d);
      case "PackedPolicyTooLarge":
      case "com.amazonaws.sts#PackedPolicyTooLargeException":
        throw await bc(G, d);
      case "RegionDisabledException":
      case "com.amazonaws.sts#RegionDisabledException":
        throw await $L(G, d);
      default:
        let C = G.body;
        return l_({
          output: I,
          parsedBody: C.Error,
          errorCode: Z
        })
    }
  }, pe4 = async (I, d) => {
    if (I.statusCode >= 300) return ie4(I, d);
    let G = await QV(I.body, d),
      Z = {};
    return Z = Ft4(G.GetSessionTokenResult, d), {
      $metadata: y7(I),
      ...Z
    }
  };
  vX0.de_GetSessionTokenCommand = pe4;
  var ie4 = async (I, d) => {
    let G = {
        ...I,
        body: await j_(I.body, d)
      },
      Z = x_(I, G.body);
    switch (Z) {
      case "RegionDisabledException":
      case "com.amazonaws.sts#RegionDisabledException":
        throw await $L(G, d);
      default:
        let C = G.body;
        return l_({
          output: I,
          parsedBody: C.Error,
          errorCode: Z
        })
    }
  }, od1 = async (I, d) => {
    let G = I.body,
      Z = Xt4(G.Error, d),
      C = new m_.ExpiredTokenException({
        $metadata: y7(I),
        ...Z
      });
    return e2.decorateServiceException(C, G)
  }, ne4 = async (I, d) => {
    let G = I.body,
      Z = gt4(G.Error, d),
      C = new m_.IDPCommunicationErrorException({
        $metadata: y7(I),
        ...Z
      });
    return e2.decorateServiceException(C, G)
  }, qX0 = async (I, d) => {
    let G = I.body,
      Z = Jt4(G.Error, d),
      C = new m_.IDPRejectedClaimException({
        $metadata: y7(I),
        ...Z
      });
    return e2.decorateServiceException(C, G)
  }, re4 = async (I, d) => {
    let G = I.body,
      Z = Kt4(G.Error, d),
      C = new m_.InvalidAuthorizationMessageException({
        $metadata: y7(I),
        ...Z
      });
    return e2.decorateServiceException(C, G)
  }, RX0 = async (I, d) => {
    let G = I.body,
      Z = Nt4(G.Error, d),
      C = new m_.InvalidIdentityTokenException({
        $metadata: y7(I),
        ...Z
      });
    return e2.decorateServiceException(C, G)
  }, lc = async (I, d) => {
    let G = I.body,
      Z = zt4(G.Error, d),
      C = new m_.MalformedPolicyDocumentException({
        $metadata: y7(I),
        ...Z
      });
    return e2.decorateServiceException(C, G)
  }, bc = async (I, d) => {
    let G = I.body,
      Z = Qt4(G.Error, d),
      C = new m_.PackedPolicyTooLargeException({
        $metadata: y7(I),
        ...Z
      });
    return e2.decorateServiceException(C, G)
  }, $L = async (I, d) => {
    let G = I.body,
      Z = ft4(G.Error, d),
      C = new m_.RegionDisabledException({
        $metadata: y7(I),
        ...Z
      });
    return e2.decorateServiceException(C, G)
  }, ae4 = (I, d) => {
    let G = {};
    if (I.RoleArn != null) G.RoleArn = I.RoleArn;
    if (I.RoleSessionName != null) G.RoleSessionName = I.RoleSessionName;
    if (I.PolicyArns != null) {
      let Z = hc(I.PolicyArns, d);
      if (I.PolicyArns?.length === 0) G.PolicyArns = [];
      Object.entries(Z).forEach(([C, W]) => {
        let w = `PolicyArns.${C}`;
        G[w] = W
      })
    }
    if (I.Policy != null) G.Policy = I.Policy;
    if (I.DurationSeconds != null) G.DurationSeconds = I.DurationSeconds;
    if (I.Tags != null) {
      let Z = UX0(I.Tags, d);
      if (I.Tags?.length === 0) G.Tags = [];
      Object.entries(Z).forEach(([C, W]) => {
        let w = `Tags.${C}`;
        G[w] = W
      })
    }
    if (I.TransitiveTagKeys != null) {
      let Z = Wt4(I.TransitiveTagKeys, d);
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
  }, se4 = (I, d) => {
    let G = {};
    if (I.RoleArn != null) G.RoleArn = I.RoleArn;
    if (I.PrincipalArn != null) G.PrincipalArn = I.PrincipalArn;
    if (I.SAMLAssertion != null) G.SAMLAssertion = I.SAMLAssertion;
    if (I.PolicyArns != null) {
      let Z = hc(I.PolicyArns, d);
      if (I.PolicyArns?.length === 0) G.PolicyArns = [];
      Object.entries(Z).forEach(([C, W]) => {
        let w = `PolicyArns.${C}`;
        G[w] = W
      })
    }
    if (I.Policy != null) G.Policy = I.Policy;
    if (I.DurationSeconds != null) G.DurationSeconds = I.DurationSeconds;
    return G
  }, oe4 = (I, d) => {
    let G = {};
    if (I.RoleArn != null) G.RoleArn = I.RoleArn;
    if (I.RoleSessionName != null) G.RoleSessionName = I.RoleSessionName;
    if (I.WebIdentityToken != null) G.WebIdentityToken = I.WebIdentityToken;
    if (I.ProviderId != null) G.ProviderId = I.ProviderId;
    if (I.PolicyArns != null) {
      let Z = hc(I.PolicyArns, d);
      if (I.PolicyArns?.length === 0) G.PolicyArns = [];
      Object.entries(Z).forEach(([C, W]) => {
        let w = `PolicyArns.${C}`;
        G[w] = W
      })
    }
    if (I.Policy != null) G.Policy = I.Policy;
    if (I.DurationSeconds != null) G.DurationSeconds = I.DurationSeconds;
    return G
  }, ee4 = (I, d) => {
    let G = {};
    if (I.EncodedMessage != null) G.EncodedMessage = I.EncodedMessage;
    return G
  }, te4 = (I, d) => {
    let G = {};
    if (I.AccessKeyId != null) G.AccessKeyId = I.AccessKeyId;
    return G
  }, It4 = (I, d) => {
    return {}
  }, dt4 = (I, d) => {
    let G = {};
    if (I.Name != null) G.Name = I.Name;
    if (I.Policy != null) G.Policy = I.Policy;
    if (I.PolicyArns != null) {
      let Z = hc(I.PolicyArns, d);
      if (I.PolicyArns?.length === 0) G.PolicyArns = [];
      Object.entries(Z).forEach(([C, W]) => {
        let w = `PolicyArns.${C}`;
        G[w] = W
      })
    }
    if (I.DurationSeconds != null) G.DurationSeconds = I.DurationSeconds;
    if (I.Tags != null) {
      let Z = UX0(I.Tags, d);
      if (I.Tags?.length === 0) G.Tags = [];
      Object.entries(Z).forEach(([C, W]) => {
        let w = `Tags.${C}`;
        G[w] = W
      })
    }
    return G
  }, Gt4 = (I, d) => {
    let G = {};
    if (I.DurationSeconds != null) G.DurationSeconds = I.DurationSeconds;
    if (I.SerialNumber != null) G.SerialNumber = I.SerialNumber;
    if (I.TokenCode != null) G.TokenCode = I.TokenCode;
    return G
  }, hc = (I, d) => {
    let G = {},
      Z = 1;
    for (let C of I) {
      if (C === null) continue;
      let W = Zt4(C, d);
      Object.entries(W).forEach(([w, B]) => {
        G[`member.${Z}.${w}`] = B
      }), Z++
    }
    return G
  }, Zt4 = (I, d) => {
    let G = {};
    if (I.arn != null) G.arn = I.arn;
    return G
  }, Ct4 = (I, d) => {
    let G = {};
    if (I.Key != null) G.Key = I.Key;
    if (I.Value != null) G.Value = I.Value;
    return G
  }, Wt4 = (I, d) => {
    let G = {},
      Z = 1;
    for (let C of I) {
      if (C === null) continue;
      G[`member.${Z}`] = C, Z++
    }
    return G
  }, UX0 = (I, d) => {
    let G = {},
      Z = 1;
    for (let C of I) {
      if (C === null) continue;
      let W = Ct4(C, d);
      Object.entries(W).forEach(([w, B]) => {
        G[`member.${Z}.${w}`] = B
      }), Z++
    }
    return G
  }, ed1 = (I, d) => {
    let G = {};
    if (I.AssumedRoleId !== void 0) G.AssumedRoleId = e2.expectString(I.AssumedRoleId);
    if (I.Arn !== void 0) G.Arn = e2.expectString(I.Arn);
    return G
  }, wt4 = (I, d) => {
    let G = {};
    if (I.Credentials !== void 0) G.Credentials = uL(I.Credentials, d);
    if (I.AssumedRoleUser !== void 0) G.AssumedRoleUser = ed1(I.AssumedRoleUser, d);
    if (I.PackedPolicySize !== void 0) G.PackedPolicySize = e2.strictParseInt32(I.PackedPolicySize);
    if (I.SourceIdentity !== void 0) G.SourceIdentity = e2.expectString(I.SourceIdentity);
    return G
  }, Bt4 = (I, d) => {
    let G = {};
    if (I.Credentials !== void 0) G.Credentials = uL(I.Credentials, d);
    if (I.AssumedRoleUser !== void 0) G.AssumedRoleUser = ed1(I.AssumedRoleUser, d);
    if (I.PackedPolicySize !== void 0) G.PackedPolicySize = e2.strictParseInt32(I.PackedPolicySize);
    if (I.Subject !== void 0) G.Subject = e2.expectString(I.Subject);
    if (I.SubjectType !== void 0) G.SubjectType = e2.expectString(I.SubjectType);
    if (I.Issuer !== void 0) G.Issuer = e2.expectString(I.Issuer);
    if (I.Audience !== void 0) G.Audience = e2.expectString(I.Audience);
    if (I.NameQualifier !== void 0) G.NameQualifier = e2.expectString(I.NameQualifier);
    if (I.SourceIdentity !== void 0) G.SourceIdentity = e2.expectString(I.SourceIdentity);
    return G
  }, At4 = (I, d) => {
    let G = {};
    if (I.Credentials !== void 0) G.Credentials = uL(I.Credentials, d);
    if (I.SubjectFromWebIdentityToken !== void 0) G.SubjectFromWebIdentityToken = e2.expectString(I.SubjectFromWebIdentityToken);
    if (I.AssumedRoleUser !== void 0) G.AssumedRoleUser = ed1(I.AssumedRoleUser, d);
    if (I.PackedPolicySize !== void 0) G.PackedPolicySize = e2.strictParseInt32(I.PackedPolicySize);
    if (I.Provider !== void 0) G.Provider = e2.expectString(I.Provider);
    if (I.Audience !== void 0) G.Audience = e2.expectString(I.Audience);
    if (I.SourceIdentity !== void 0) G.SourceIdentity = e2.expectString(I.SourceIdentity);
    return G
  }, uL = (I, d) => {
    let G = {};
    if (I.AccessKeyId !== void 0) G.AccessKeyId = e2.expectString(I.AccessKeyId);
    if (I.SecretAccessKey !== void 0) G.SecretAccessKey = e2.expectString(I.SecretAccessKey);
    if (I.SessionToken !== void 0) G.SessionToken = e2.expectString(I.SessionToken);
    if (I.Expiration !== void 0) G.Expiration = e2.expectNonNull(e2.parseRfc3339DateTimeWithOffset(I.Expiration));
    return G
  }, Vt4 = (I, d) => {
    let G = {};
    if (I.DecodedMessage !== void 0) G.DecodedMessage = e2.expectString(I.DecodedMessage);
    return G
  }, Xt4 = (I, d) => {
    let G = {};
    if (I.message !== void 0) G.message = e2.expectString(I.message);
    return G
  }, Yt4 = (I, d) => {
    let G = {};
    if (I.FederatedUserId !== void 0) G.FederatedUserId = e2.expectString(I.FederatedUserId);
    if (I.Arn !== void 0) G.Arn = e2.expectString(I.Arn);
    return G
  }, _t4 = (I, d) => {
    let G = {};
    if (I.Account !== void 0) G.Account = e2.expectString(I.Account);
    return G
  }, Dt4 = (I, d) => {
    let G = {};
    if (I.UserId !== void 0) G.UserId = e2.expectString(I.UserId);
    if (I.Account !== void 0) G.Account = e2.expectString(I.Account);
    if (I.Arn !== void 0) G.Arn = e2.expectString(I.Arn);
    return G
  }, Ht4 = (I, d) => {
    let G = {};
    if (I.Credentials !== void 0) G.Credentials = uL(I.Credentials, d);
    if (I.FederatedUser !== void 0) G.FederatedUser = Yt4(I.FederatedUser, d);
    if (I.PackedPolicySize !== void 0) G.PackedPolicySize = e2.strictParseInt32(I.PackedPolicySize);
    return G
  }, Ft4 = (I, d) => {
    let G = {};
    if (I.Credentials !== void 0) G.Credentials = uL(I.Credentials, d);
    return G
  }, gt4 = (I, d) => {
    let G = {};
    if (I.message !== void 0) G.message = e2.expectString(I.message);
    return G
  }, Jt4 = (I, d) => {
    let G = {};
    if (I.message !== void 0) G.message = e2.expectString(I.message);
    return G
  }, Kt4 = (I, d) => {
    let G = {};
    if (I.message !== void 0) G.message = e2.expectString(I.message);
    return G
  }, Nt4 = (I, d) => {
    let G = {};
    if (I.message !== void 0) G.message = e2.expectString(I.message);
    return G
  }, zt4 = (I, d) => {
    let G = {};
    if (I.message !== void 0) G.message = e2.expectString(I.message);
    return G
  }, Qt4 = (I, d) => {
    let G = {};
    if (I.message !== void 0) G.message = e2.expectString(I.message);
    return G
  }, ft4 = (I, d) => {
    let G = {};
    if (I.message !== void 0) G.message = e2.expectString(I.message);
    return G
  }, y7 = (I) => ({
    httpStatusCode: I.statusCode,
    requestId: I.headers["x-amzn-requestid"] ?? I.headers["x-amzn-request-id"] ?? I.headers["x-amz-request-id"],
    extendedRequestId: I.headers["x-amz-id-2"],
    cfId: I.headers["x-amz-cf-id"]
  }), qt4 = (I = new Uint8Array, d) => {
    if (I instanceof Uint8Array) return Promise.resolve(I);
    return d.streamCollector(I) || Promise.resolve(new Uint8Array)
  }, Rt4 = (I, d) => qt4(I, d).then((G) => d.utf8Encoder(G)), l_ = e2.withBaseException(fe4.STSServiceException), b_ = async (I, d, G, Z, C) => {
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
    return new ze4.HttpRequest(V)
  }, h_ = {
    "content-type": "application/x-www-form-urlencoded"
  }, QV = (I, d) => Rt4(I, d).then((G) => {
    if (G.length) {
      let Z = new Qe4.XMLParser({
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
      return e2.getValueFromTextNode(B)
    }
    return {}
  }), j_ = async (I, d) => {
    let G = await QV(I, d);
    if (G.Error) G.Error.message = G.Error.message ?? G.Error.Message;
    return G
  }, k_ = (I) => Object.entries(I).map(([d, G]) => e2.extendedEncodeURIComponent(d) + "=" + e2.extendedEncodeURIComponent(G)).join("&"), x_ = (I, d) => {
    if (d.Error?.Code !== void 0) return d.Error.Code;
    if (I.statusCode == 404) return "NotFound"
  }
})
// @from(Start 2569383, End 2571308)
jc = Y((IG1) => {
  Object.defineProperty(IG1, "__esModule", {
    value: !0
  });
  IG1.AssumeRoleCommand = IG1.$Command = void 0;
  var ht4 = u2(),
    jt4 = r2(),
    kt4 = A9(),
    SX0 = v0();
  Object.defineProperty(IG1, "$Command", {
    enumerable: !0,
    get: function() {
      return SX0.Command
    }
  });
  var xt4 = T_(),
    MX0 = fV();
  class td1 extends SX0.Command {
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
      this.middlewareStack.use(jt4.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(ht4.getEndpointPlugin(d, td1.getEndpointParameterInstructions())), this.middlewareStack.use(kt4.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "STSClient",
          commandName: "AssumeRoleCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: xt4.AssumeRoleResponseFilterSensitiveLog
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return MX0.se_AssumeRoleCommand(I, d)
    }
    deserialize(I, d) {
      return MX0.de_AssumeRoleCommand(I, d)
    }
  }
  IG1.AssumeRoleCommand = td1
})
// @from(Start 2571314, End 2573308)
kc = Y((GG1) => {
  Object.defineProperty(GG1, "__esModule", {
    value: !0
  });
  GG1.AssumeRoleWithWebIdentityCommand = GG1.$Command = void 0;
  var ct4 = u2(),
    pt4 = r2(),
    $X0 = v0();
  Object.defineProperty(GG1, "$Command", {
    enumerable: !0,
    get: function() {
      return $X0.Command
    }
  });
  var yX0 = T_(),
    PX0 = fV();
  class dG1 extends $X0.Command {
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
      this.middlewareStack.use(pt4.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(ct4.getEndpointPlugin(d, dG1.getEndpointParameterInstructions()));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "STSClient",
          commandName: "AssumeRoleWithWebIdentityCommand",
          inputFilterSensitiveLog: yX0.AssumeRoleWithWebIdentityRequestFilterSensitiveLog,
          outputFilterSensitiveLog: yX0.AssumeRoleWithWebIdentityResponseFilterSensitiveLog
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return PX0.se_AssumeRoleWithWebIdentityCommand(I, d)
    }
    deserialize(I, d) {
      return PX0.de_AssumeRoleWithWebIdentityCommand(I, d)
    }
  }
  GG1.AssumeRoleWithWebIdentityCommand = dG1
})
// @from(Start 2573314, End 2575796)
ZG1 = Y((mX0) => {
  Object.defineProperty(mX0, "__esModule", {
    value: !0
  });
  mX0.decorateDefaultCredentialProvider = mX0.getDefaultRoleAssumerWithWebIdentity = mX0.getDefaultRoleAssumer = void 0;
  var it4 = jc(),
    nt4 = kc(),
    TX0 = "us-east-1",
    OX0 = (I) => {
      if (typeof I !== "function") return I === void 0 ? TX0 : I;
      return async () => {
        try {
          return await I()
        } catch (d) {
          return TX0
        }
      }
    },
    rt4 = (I, d) => {
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
            region: OX0(A || I.region),
            ...V ? {
              requestHandler: V
            } : {}
          })
        }
        let {
          Credentials: w
        } = await G.send(new it4.AssumeRoleCommand(W));
        if (!w || !w.AccessKeyId || !w.SecretAccessKey) throw new Error(`Invalid response from STS.assumeRole call with role ${W.RoleArn}`);
        return {
          accessKeyId: w.AccessKeyId,
          secretAccessKey: w.SecretAccessKey,
          sessionToken: w.SessionToken,
          expiration: w.Expiration
        }
      }
    };
  mX0.getDefaultRoleAssumer = rt4;
  var at4 = (I, d) => {
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
          region: OX0(w || I.region),
          ...B ? {
            requestHandler: B
          } : {}
        })
      }
      let {
        Credentials: C
      } = await G.send(new nt4.AssumeRoleWithWebIdentityCommand(Z));
      if (!C || !C.AccessKeyId || !C.SecretAccessKey) throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${Z.RoleArn}`);
      return {
        accessKeyId: C.AccessKeyId,
        secretAccessKey: C.SecretAccessKey,
        sessionToken: C.SessionToken,
        expiration: C.Expiration
      }
    }
  };
  mX0.getDefaultRoleAssumerWithWebIdentity = at4;
  var st4 = (I) => (d) => I({
    roleAssumer: mX0.getDefaultRoleAssumer(d, d.stsClientCtor),
    roleAssumerWithWebIdentity: mX0.getDefaultRoleAssumerWithWebIdentity(d, d.stsClientCtor),
    ...d
  });
  mX0.decorateDefaultCredentialProvider = st4
})
// @from(Start 2575802, End 2576671)
nX0 = Y((jX0) => {
  Object.defineProperty(jX0, "__esModule", {
    value: !0
  });
  jX0.fromEnv = jX0.ENV_EXPIRATION = jX0.ENV_SESSION = jX0.ENV_SECRET = jX0.ENV_KEY = void 0;
  var ot4 = W4();
  jX0.ENV_KEY = "AWS_ACCESS_KEY_ID";
  jX0.ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
  jX0.ENV_SESSION = "AWS_SESSION_TOKEN";
  jX0.ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";
  var et4 = () => async () => {
    let I = process.env[jX0.ENV_KEY],
      d = process.env[jX0.ENV_SECRET],
      G = process.env[jX0.ENV_SESSION],
      Z = process.env[jX0.ENV_EXPIRATION];
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
    throw new ot4.CredentialsProviderError("Unable to find environment variable credentials.")
  };
  jX0.fromEnv = et4
})
// @from(Start 2576677, End 2576812)
WG1 = Y((CG1) => {
  Object.defineProperty(CG1, "__esModule", {
    value: !0
  });
  var tt4 = x1();
  tt4.__exportStar(nX0(), CG1)
})
// @from(Start 2576818, End 2577262)
TL = Y((rX0) => {
  Object.defineProperty(rX0, "__esModule", {
    value: !0
  });
  rX0.getHomeDir = void 0;
  var I15 = B1("os"),
    d15 = B1("path"),
    G15 = () => {
      let {
        HOME: I,
        USERPROFILE: d,
        HOMEPATH: G,
        HOMEDRIVE: Z = `C:${d15.sep}`
      } = process.env;
      if (I) return I;
      if (d) return d;
      if (G) return `${Z}${G}`;
      return I15.homedir()
    };
  rX0.getHomeDir = G15
})
// @from(Start 2577268, End 2577607)
IY0 = Y((sX0) => {
  Object.defineProperty(sX0, "__esModule", {
    value: !0
  });
  sX0.getProfileName = sX0.DEFAULT_PROFILE = sX0.ENV_PROFILE = void 0;
  sX0.ENV_PROFILE = "AWS_PROFILE";
  sX0.DEFAULT_PROFILE = "default";
  var Z15 = (I) => I.profile || process.env[sX0.ENV_PROFILE] || sX0.DEFAULT_PROFILE;
  sX0.getProfileName = Z15
})
// @from(Start 2577613, End 2577996)
wG1 = Y((dY0) => {
  Object.defineProperty(dY0, "__esModule", {
    value: !0
  });
  dY0.getSSOTokenFilepath = void 0;
  var C15 = B1("crypto"),
    W15 = B1("path"),
    w15 = TL(),
    B15 = (I) => {
      let G = C15.createHash("sha1").update(I).digest("hex");
      return W15.join(w15.getHomeDir(), ".aws", "sso", "cache", `${G}.json`)
    };
  dY0.getSSOTokenFilepath = B15
})
// @from(Start 2578002, End 2578378)
WY0 = Y((ZY0) => {
  Object.defineProperty(ZY0, "__esModule", {
    value: !0
  });
  ZY0.getSSOTokenFromFile = void 0;
  var A15 = B1("fs"),
    V15 = wG1(),
    {
      readFile: X15
    } = A15.promises,
    Y15 = async (I) => {
      let d = V15.getSSOTokenFilepath(I),
        G = await X15(d, "utf8");
      return JSON.parse(G)
    };
  ZY0.getSSOTokenFromFile = Y15
})
// @from(Start 2578384, End 2578739)
BG1 = Y((wY0) => {
  Object.defineProperty(wY0, "__esModule", {
    value: !0
  });
  wY0.getConfigFilepath = wY0.ENV_CONFIG_PATH = void 0;
  var _15 = B1("path"),
    D15 = TL();
  wY0.ENV_CONFIG_PATH = "AWS_CONFIG_FILE";
  var H15 = () => process.env[wY0.ENV_CONFIG_PATH] || _15.join(D15.getHomeDir(), ".aws", "config");
  wY0.getConfigFilepath = H15
})
// @from(Start 2578745, End 2579142)
_Y0 = Y((VY0) => {
  Object.defineProperty(VY0, "__esModule", {
    value: !0
  });
  VY0.getCredentialsFilepath = VY0.ENV_CREDENTIALS_PATH = void 0;
  var F15 = B1("path"),
    g15 = TL();
  VY0.ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
  var J15 = () => process.env[VY0.ENV_CREDENTIALS_PATH] || F15.join(g15.getHomeDir(), ".aws", "credentials");
  VY0.getCredentialsFilepath = J15
})
// @from(Start 2579148, End 2579540)
gY0 = Y((HY0) => {
  Object.defineProperty(HY0, "__esModule", {
    value: !0
  });
  HY0.getProfileData = void 0;
  var DY0 = /^profile\s(["'])?([^\1]+)\1$/,
    K15 = (I) => Object.entries(I).filter(([d]) => DY0.test(d)).reduce((d, [G, Z]) => ({
      ...d,
      [DY0.exec(G)[2]]: Z
    }), {
      ...I.default && {
        default: I.default
      }
    });
  HY0.getProfileData = K15
})
// @from(Start 2579546, End 2580328)
AG1 = Y((JY0) => {
  Object.defineProperty(JY0, "__esModule", {
    value: !0
  });
  JY0.parseIni = void 0;
  var N15 = ["__proto__", "profile __proto__"],
    z15 = (I) => {
      let d = {},
        G;
      for (let Z of I.split(/\r?\n/))
        if (Z = Z.split(/(^|\s)[;#]/)[0].trim(), Z[0] === "[" && Z[Z.length - 1] === "]") {
          if (G = Z.substring(1, Z.length - 1), N15.includes(G)) throw new Error(`Found invalid profile name "${G}"`)
        } else if (G) {
        let W = Z.indexOf("="),
          w = 0,
          B = Z.length - 1;
        if (W !== -1 && W !== 0 && W !== B) {
          let [V, X] = [Z.substring(0, W).trim(), Z.substring(W + 1).trim()];
          d[G] = d[G] || {}, d[G][V] = X
        }
      }
      return d
    };
  JY0.parseIni = z15
})
// @from(Start 2580334, End 2580702)
XG1 = Y((NY0) => {
  Object.defineProperty(NY0, "__esModule", {
    value: !0
  });
  NY0.slurpFile = void 0;
  var Q15 = B1("fs"),
    {
      readFile: f15
    } = Q15.promises,
    VG1 = {},
    q15 = (I, d) => {
      if (!VG1[I] || (d === null || d === void 0 ? void 0 : d.ignoreCache)) VG1[I] = f15(I, "utf8");
      return VG1[I]
    };
  NY0.slurpFile = q15
})
// @from(Start 2580708, End 2581458)
YG1 = Y((RY0) => {
  Object.defineProperty(RY0, "__esModule", {
    value: !0
  });
  RY0.loadSharedConfigFiles = void 0;
  var R15 = BG1(),
    U15 = _Y0(),
    v15 = gY0(),
    QY0 = AG1(),
    fY0 = XG1(),
    qY0 = () => ({}),
    E15 = async (I = {}) => {
      let {
        filepath: d = U15.getCredentialsFilepath(),
        configFilepath: G = R15.getConfigFilepath()
      } = I, Z = await Promise.all([fY0.slurpFile(G, {
        ignoreCache: I.ignoreCache
      }).then(QY0.parseIni).then(v15.getProfileData).catch(qY0), fY0.slurpFile(d, {
        ignoreCache: I.ignoreCache
      }).then(QY0.parseIni).catch(qY0)]);
      return {
        configFile: Z[0],
        credentialsFile: Z[1]
      }
    };
  RY0.loadSharedConfigFiles = E15
})
// @from(Start 2581464, End 2581802)
SY0 = Y((EY0) => {
  Object.defineProperty(EY0, "__esModule", {
    value: !0
  });
  EY0.getSsoSessionData = void 0;
  var vY0 = /^sso-session\s(["'])?([^\1]+)\1$/,
    M15 = (I) => Object.entries(I).filter(([d]) => vY0.test(d)).reduce((d, [G, Z]) => ({
      ...d,
      [vY0.exec(G)[2]]: Z
    }), {});
  EY0.getSsoSessionData = M15
})
// @from(Start 2581808, End 2582266)
PY0 = Y((LY0) => {
  Object.defineProperty(LY0, "__esModule", {
    value: !0
  });
  LY0.loadSsoSessionData = void 0;
  var S15 = BG1(),
    L15 = SY0(),
    y15 = AG1(),
    P15 = XG1(),
    $15 = () => ({}),
    u15 = async (I = {}) => {
      var d;
      return P15.slurpFile((d = I.configFilepath) !== null && d !== void 0 ? d : S15.getConfigFilepath()).then(y15.parseIni).then(L15.getSsoSessionData).catch($15)
    };
  LY0.loadSsoSessionData = u15
})
// @from(Start 2582272, End 2582619)
TY0 = Y(($Y0) => {
  Object.defineProperty($Y0, "__esModule", {
    value: !0
  });
  $Y0.mergeConfigFiles = void 0;
  var T15 = (...I) => {
    let d = {};
    for (let G of I)
      for (let [Z, C] of Object.entries(G))
        if (d[Z] !== void 0) Object.assign(d[Z], C);
        else d[Z] = C;
    return d
  };
  $Y0.mergeConfigFiles = T15
})
// @from(Start 2582625, End 2582956)
lY0 = Y((OY0) => {
  Object.defineProperty(OY0, "__esModule", {
    value: !0
  });
  OY0.parseKnownFiles = void 0;
  var O15 = YG1(),
    m15 = TY0(),
    l15 = async (I) => {
      let d = await O15.loadSharedConfigFiles(I);
      return m15.mergeConfigFiles(d.configFile, d.credentialsFile)
    };
  OY0.parseKnownFiles = l15
})
// @from(Start 2582962, End 2583047)
hY0 = Y((bY0) => {
  Object.defineProperty(bY0, "__esModule", {
    value: !0
  })
})
// @from(Start 2583053, End 2583391)
K8 = Y((ow) => {
  Object.defineProperty(ow, "__esModule", {
    value: !0
  });
  var c_ = x1();
  c_.__exportStar(TL(), ow);
  c_.__exportStar(IY0(), ow);
  c_.__exportStar(wG1(), ow);
  c_.__exportStar(WY0(), ow);
  c_.__exportStar(YG1(), ow);
  c_.__exportStar(PY0(), ow);
  c_.__exportStar(lY0(), ow);
  c_.__exportStar(hY0(), ow)
})
// @from(Start 2583397, End 2584579)
xc = Y((jY0) => {
  Object.defineProperty(jY0, "__esModule", {
    value: !0
  });
  jY0.httpRequest = void 0;
  var _G1 = W4(),
    b15 = B1("buffer"),
    h15 = B1("http");

  function j15(I) {
    return new Promise((d, G) => {
      var Z;
      let C = h15.request({
        method: "GET",
        ...I,
        hostname: (Z = I.hostname) === null || Z === void 0 ? void 0 : Z.replace(/^\[(.+)\]$/, "$1")
      });
      C.on("error", (W) => {
        G(Object.assign(new _G1.ProviderError("Unable to connect to instance metadata service"), W)), C.destroy()
      }), C.on("timeout", () => {
        G(new _G1.ProviderError("TimeoutError from instance metadata service")), C.destroy()
      }), C.on("response", (W) => {
        let {
          statusCode: w = 400
        } = W;
        if (w < 200 || 300 <= w) G(Object.assign(new _G1.ProviderError("Error response received from instance metadata service"), {
          statusCode: w
        })), C.destroy();
        let B = [];
        W.on("data", (A) => {
          B.push(A)
        }), W.on("end", () => {
          d(b15.Buffer.concat(B)), C.destroy()
        })
      }), C.end()
    })
  }
  jY0.httpRequest = j15
})
// @from(Start 2584585, End 2585161)
DG1 = Y((xY0) => {
  Object.defineProperty(xY0, "__esModule", {
    value: !0
  });
  xY0.fromImdsCredentials = xY0.isImdsCredentials = void 0;
  var k15 = (I) => Boolean(I) && typeof I === "object" && typeof I.AccessKeyId === "string" && typeof I.SecretAccessKey === "string" && typeof I.Token === "string" && typeof I.Expiration === "string";
  xY0.isImdsCredentials = k15;
  var x15 = (I) => ({
    accessKeyId: I.AccessKeyId,
    secretAccessKey: I.SecretAccessKey,
    sessionToken: I.Token,
    expiration: new Date(I.Expiration)
  });
  xY0.fromImdsCredentials = x15
})
// @from(Start 2585167, End 2585583)
cc = Y((pY0) => {
  Object.defineProperty(pY0, "__esModule", {
    value: !0
  });
  pY0.providerConfigFromInit = pY0.DEFAULT_MAX_RETRIES = pY0.DEFAULT_TIMEOUT = void 0;
  pY0.DEFAULT_TIMEOUT = 1000;
  pY0.DEFAULT_MAX_RETRIES = 0;
  var p15 = ({
    maxRetries: I = pY0.DEFAULT_MAX_RETRIES,
    timeout: d = pY0.DEFAULT_TIMEOUT
  }) => ({
    maxRetries: I,
    timeout: d
  });
  pY0.providerConfigFromInit = p15
})
// @from(Start 2585589, End 2585822)
HG1 = Y((aY0) => {
  Object.defineProperty(aY0, "__esModule", {
    value: !0
  });
  aY0.retry = void 0;
  var i15 = (I, d) => {
    let G = I();
    for (let Z = 0; Z < d; Z++) G = G.catch(I);
    return G
  };
  aY0.retry = i15
})
// @from(Start 2585828, End 2588052)
I_0 = Y((eY0) => {
  Object.defineProperty(eY0, "__esModule", {
    value: !0
  });
  eY0.fromContainerMetadata = eY0.ENV_CMDS_AUTH_TOKEN = eY0.ENV_CMDS_RELATIVE_URI = eY0.ENV_CMDS_FULL_URI = void 0;
  var pc = W4(),
    n15 = B1("url"),
    r15 = xc(),
    oY0 = DG1(),
    a15 = cc(),
    s15 = HG1();
  eY0.ENV_CMDS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
  eY0.ENV_CMDS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
  eY0.ENV_CMDS_AUTH_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
  var o15 = (I = {}) => {
    let {
      timeout: d,
      maxRetries: G
    } = a15.providerConfigFromInit(I);
    return () => s15.retry(async () => {
      let Z = await G05(),
        C = JSON.parse(await e15(d, Z));
      if (!oY0.isImdsCredentials(C)) throw new pc.CredentialsProviderError("Invalid response received from instance metadata service.");
      return oY0.fromImdsCredentials(C)
    }, G)
  };
  eY0.fromContainerMetadata = o15;
  var e15 = async (I, d) => {
    if (process.env[eY0.ENV_CMDS_AUTH_TOKEN]) d.headers = {
      ...d.headers,
      Authorization: process.env[eY0.ENV_CMDS_AUTH_TOKEN]
    };
    return (await r15.httpRequest({
      ...d,
      timeout: I
    })).toString()
  }, t15 = "169.254.170.2", I05 = {
    localhost: !0,
    "127.0.0.1": !0
  }, d05 = {
    "http:": !0,
    "https:": !0
  }, G05 = async () => {
    if (process.env[eY0.ENV_CMDS_RELATIVE_URI]) return {
      hostname: t15,
      path: process.env[eY0.ENV_CMDS_RELATIVE_URI]
    };
    if (process.env[eY0.ENV_CMDS_FULL_URI]) {
      let I = n15.parse(process.env[eY0.ENV_CMDS_FULL_URI]);
      if (!I.hostname || !(I.hostname in I05)) throw new pc.CredentialsProviderError(`${I.hostname} is not a valid container metadata service hostname`, !1);
      if (!I.protocol || !(I.protocol in d05)) throw new pc.CredentialsProviderError(`${I.protocol} is not a valid container metadata service protocol`, !1);
      return {
        ...I,
        port: I.port ? parseInt(I.port, 10) : void 0
      }
    }
    throw new pc.CredentialsProviderError(`The container metadata credential provider cannot be used unless the ${eY0.ENV_CMDS_RELATIVE_URI} or ${eY0.ENV_CMDS_FULL_URI} environment variable is set`, !1)
  }
})
// @from(Start 2588058, End 2588503)
Z_0 = Y((d_0) => {
  Object.defineProperty(d_0, "__esModule", {
    value: !0
  });
  d_0.fromEnv = void 0;
  var Z05 = W4(),
    C05 = (I) => async () => {
      try {
        let d = I(process.env);
        if (d === void 0) throw new Error;
        return d
      } catch (d) {
        throw new Z05.CredentialsProviderError(d.message || `Cannot load config from environment variables with getter: ${I}`)
      }
    };
  d_0.fromEnv = C05
})
// @from(Start 2588509, End 2589380)
B_0 = Y((W_0) => {
  Object.defineProperty(W_0, "__esModule", {
    value: !0
  });
  W_0.fromSharedConfigFiles = void 0;
  var W05 = W4(),
    C_0 = K8(),
    w05 = (I, {
      preferredFile: d = "config",
      ...G
    } = {}) => async () => {
      let Z = C_0.getProfileName(G),
        {
          configFile: C,
          credentialsFile: W
        } = await C_0.loadSharedConfigFiles(G),
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
        let V = I(A);
        if (V === void 0) throw new Error;
        return V
      } catch (V) {
        throw new W05.CredentialsProviderError(V.message || `Cannot load config for profile ${Z} in SDK configuration files with getter: ${I}`)
      }
    };
  W_0.fromSharedConfigFiles = w05
})
// @from(Start 2589386, End 2589650)
X_0 = Y((A_0) => {
  Object.defineProperty(A_0, "__esModule", {
    value: !0
  });
  A_0.fromStatic = void 0;
  var B05 = W4(),
    A05 = (I) => typeof I === "function",
    V05 = (I) => A05(I) ? async () => await I(): B05.fromStatic(I);
  A_0.fromStatic = V05
})
// @from(Start 2589656, End 2590068)
H_0 = Y((__0) => {
  Object.defineProperty(__0, "__esModule", {
    value: !0
  });
  __0.loadConfig = void 0;
  var Y_0 = W4(),
    X05 = Z_0(),
    Y05 = B_0(),
    _05 = X_0(),
    D05 = ({
      environmentVariableSelector: I,
      configFileSelector: d,
      default: G
    }, Z = {}) => Y_0.memoize(Y_0.chain(X05.fromEnv(I), Y05.fromSharedConfigFiles(d, Z), _05.fromStatic(G)));
  __0.loadConfig = D05
})
// @from(Start 2590074, End 2590208)
QZ = Y((gG1) => {
  Object.defineProperty(gG1, "__esModule", {
    value: !0
  });
  var H05 = x1();
  H05.__exportStar(H_0(), gG1)
})
// @from(Start 2590214, End 2590474)
g_0 = Y((F_0) => {
  Object.defineProperty(F_0, "__esModule", {
    value: !0
  });
  F_0.Endpoint = void 0;
  var F05;
  (function(I) {
    I.IPv4 = "http://169.254.169.254", I.IPv6 = "http://[fd00:ec2::254]"
  })(F05 = F_0.Endpoint || (F_0.Endpoint = {}))
})
// @from(Start 2590480, End 2590966)
Q_0 = Y((J_0) => {
  Object.defineProperty(J_0, "__esModule", {
    value: !0
  });
  J_0.ENDPOINT_CONFIG_OPTIONS = J_0.CONFIG_ENDPOINT_NAME = J_0.ENV_ENDPOINT_NAME = void 0;
  J_0.ENV_ENDPOINT_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT";
  J_0.CONFIG_ENDPOINT_NAME = "ec2_metadata_service_endpoint";
  J_0.ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (I) => I[J_0.ENV_ENDPOINT_NAME],
    configFileSelector: (I) => I[J_0.CONFIG_ENDPOINT_NAME],
    default: void 0
  }
})
// @from(Start 2590972, End 2591208)
NG1 = Y((f_0) => {
  Object.defineProperty(f_0, "__esModule", {
    value: !0
  });
  f_0.EndpointMode = void 0;
  var g05;
  (function(I) {
    I.IPv4 = "IPv4", I.IPv6 = "IPv6"
  })(g05 = f_0.EndpointMode || (f_0.EndpointMode = {}))
})
// @from(Start 2591214, End 2591784)
E_0 = Y((q_0) => {
  Object.defineProperty(q_0, "__esModule", {
    value: !0
  });
  q_0.ENDPOINT_MODE_CONFIG_OPTIONS = q_0.CONFIG_ENDPOINT_MODE_NAME = q_0.ENV_ENDPOINT_MODE_NAME = void 0;
  var J05 = NG1();
  q_0.ENV_ENDPOINT_MODE_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE";
  q_0.CONFIG_ENDPOINT_MODE_NAME = "ec2_metadata_service_endpoint_mode";
  q_0.ENDPOINT_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (I) => I[q_0.ENV_ENDPOINT_MODE_NAME],
    configFileSelector: (I) => I[q_0.CONFIG_ENDPOINT_MODE_NAME],
    default: J05.EndpointMode.IPv4
  }
})
// @from(Start 2591790, End 2592573)
QG1 = Y((L_0) => {
  Object.defineProperty(L_0, "__esModule", {
    value: !0
  });
  L_0.getInstanceMetadataEndpoint = void 0;
  var S_0 = QZ(),
    K05 = FV(),
    M_0 = g_0(),
    N05 = Q_0(),
    zG1 = NG1(),
    z05 = E_0(),
    Q05 = async () => K05.parseUrl(await f05() || await q05());
  L_0.getInstanceMetadataEndpoint = Q05;
  var f05 = async () => S_0.loadConfig(N05.ENDPOINT_CONFIG_OPTIONS)(), q05 = async () => {
    let I = await S_0.loadConfig(z05.ENDPOINT_MODE_CONFIG_OPTIONS)();
    switch (I) {
      case zG1.EndpointMode.IPv4:
        return M_0.Endpoint.IPv4;
      case zG1.EndpointMode.IPv6:
        return M_0.Endpoint.IPv6;
      default:
        throw new Error(`Unsupported endpoint mode: ${I}. Select from ${Object.values(zG1.EndpointMode)}`)
    }
  }
})
// @from(Start 2592579, End 2593481)
u_0 = Y((P_0) => {
  Object.defineProperty(P_0, "__esModule", {
    value: !0
  });
  P_0.getExtendedInstanceMetadataCredentials = void 0;
  var R05 = 300,
    U05 = 300,
    v05 = "https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html",
    E05 = (I, d) => {
      var G;
      let Z = R05 + Math.floor(Math.random() * U05),
        C = new Date(Date.now() + Z * 1000);
      d.warn("Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(newExpiration)}.\nFor more information, please visit: " + v05);
      let W = (G = I.originalExpiration) !== null && G !== void 0 ? G : I.expiration;
      return {
        ...I,
        ...W ? {
          originalExpiration: W
        } : {},
        expiration: C
      }
    };
  P_0.getExtendedInstanceMetadataCredentials = E05
})
// @from(Start 2593487, End 2594177)
l_0 = Y((O_0) => {
  Object.defineProperty(O_0, "__esModule", {
    value: !0
  });
  O_0.staticStabilityProvider = void 0;
  var T_0 = u_0(),
    M05 = (I, d = {}) => {
      let G = (d === null || d === void 0 ? void 0 : d.logger) || console,
        Z;
      return async () => {
        let C;
        try {
          if (C = await I(), C.expiration && C.expiration.getTime() < Date.now()) C = T_0.getExtendedInstanceMetadataCredentials(C, G)
        } catch (W) {
          if (Z) G.warn("Credential renew failed: ", W), C = T_0.getExtendedInstanceMetadataCredentials(Z, G);
          else throw W
        }
        return Z = C, C
      }
    };
  O_0.staticStabilityProvider = M05
})
// @from(Start 2594183, End 2596842)
c_0 = Y((k_0) => {
  Object.defineProperty(k_0, "__esModule", {
    value: !0
  });
  k_0.fromInstanceMetadata = void 0;
  var S05 = W4(),
    fG1 = xc(),
    b_0 = DG1(),
    L05 = cc(),
    h_0 = HG1(),
    y05 = QG1(),
    P05 = l_0(),
    j_0 = "/latest/meta-data/iam/security-credentials/",
    $05 = "/latest/api/token",
    u05 = (I = {}) => P05.staticStabilityProvider(T05(I), {
      logger: I.logger
    });
  k_0.fromInstanceMetadata = u05;
  var T05 = (I) => {
      let d = !1,
        {
          timeout: G,
          maxRetries: Z
        } = L05.providerConfigFromInit(I),
        C = async (W, w) => {
          let B = (await h_0.retry(async () => {
            let A;
            try {
              A = await m05(w)
            } catch (V) {
              if (V.statusCode === 401) d = !1;
              throw V
            }
            return A
          }, W)).trim();
          return h_0.retry(async () => {
            let A;
            try {
              A = await l05(B, w)
            } catch (V) {
              if (V.statusCode === 401) d = !1;
              throw V
            }
            return A
          }, W)
        };
      return async () => {
        let W = await y05.getInstanceMetadataEndpoint();
        if (d) return C(Z, {
          ...W,
          timeout: G
        });
        else {
          let w;
          try {
            w = (await O05({
              ...W,
              timeout: G
            })).toString()
          } catch (B) {
            if ((B === null || B === void 0 ? void 0 : B.statusCode) === 400) throw Object.assign(B, {
              message: "EC2 Metadata token request returned error"
            });
            else if (B.message === "TimeoutError" || [403, 404, 405].includes(B.statusCode)) d = !0;
            return C(Z, {
              ...W,
              timeout: G
            })
          }
          return C(Z, {
            ...W,
            headers: {
              "x-aws-ec2-metadata-token": w
            },
            timeout: G
          })
        }
      }
    },
    O05 = async (I) => fG1.httpRequest({
      ...I,
      path: $05,
      method: "PUT",
      headers: {
        "x-aws-ec2-metadata-token-ttl-seconds": "21600"
      }
    }), m05 = async (I) => (await fG1.httpRequest({
      ...I,
      path: j_0
    })).toString(), l05 = async (I, d) => {
      let G = JSON.parse((await fG1.httpRequest({
        ...d,
        path: j_0 + I
      })).toString());
      if (!b_0.isImdsCredentials(G)) throw new S05.CredentialsProviderError("Invalid response received from instance metadata service.");
      return b_0.fromImdsCredentials(G)
    }
})
// @from(Start 2596848, End 2596933)
i_0 = Y((p_0) => {
  Object.defineProperty(p_0, "__esModule", {
    value: !0
  })
})
// @from(Start 2596939, End 2597542)
i_ = Y((p_) => {
  Object.defineProperty(p_, "__esModule", {
    value: !0
  });
  p_.getInstanceMetadataEndpoint = p_.httpRequest = void 0;
  var rc = x1();
  rc.__exportStar(I_0(), p_);
  rc.__exportStar(c_0(), p_);
  rc.__exportStar(cc(), p_);
  rc.__exportStar(i_0(), p_);
  var b05 = xc();
  Object.defineProperty(p_, "httpRequest", {
    enumerable: !0,
    get: function() {
      return b05.httpRequest
    }
  });
  var h05 = QG1();
  Object.defineProperty(p_, "getInstanceMetadataEndpoint", {
    enumerable: !0,
    get: function() {
      return h05.getInstanceMetadataEndpoint
    }
  })
})
// @from(Start 2597548, End 2598156)
s_0 = Y((r_0) => {
  Object.defineProperty(r_0, "__esModule", {
    value: !0
  });
  r_0.resolveCredentialSource = void 0;
  var k05 = WG1(),
    n_0 = i_(),
    x05 = W4(),
    c05 = (I, d) => {
      let G = {
        EcsContainer: n_0.fromContainerMetadata,
        Ec2InstanceMetadata: n_0.fromInstanceMetadata,
        Environment: k05.fromEnv
      };
      if (I in G) return G[I]();
      else throw new x05.CredentialsProviderError(`Unsupported credential source in profile ${d}. Got ${I}, expected EcsContainer or Ec2InstanceMetadata or Environment.`)
    };
  r_0.resolveCredentialSource = c05
})
// @from(Start 2598162, End 2600142)
t_0 = Y((o_0) => {
  Object.defineProperty(o_0, "__esModule", {
    value: !0
  });
  o_0.resolveAssumeRoleCredentials = o_0.isAssumeRoleProfile = void 0;
  var qG1 = W4(),
    p05 = K8(),
    i05 = s_0(),
    n05 = RG1(),
    r05 = (I) => Boolean(I) && typeof I === "object" && typeof I.role_arn === "string" && ["undefined", "string"].indexOf(typeof I.role_session_name) > -1 && ["undefined", "string"].indexOf(typeof I.external_id) > -1 && ["undefined", "string"].indexOf(typeof I.mfa_serial) > -1 && (a05(I) || s05(I));
  o_0.isAssumeRoleProfile = r05;
  var a05 = (I) => typeof I.source_profile === "string" && typeof I.credential_source === "undefined",
    s05 = (I) => typeof I.credential_source === "string" && typeof I.source_profile === "undefined",
    o05 = async (I, d, G, Z = {}) => {
      let C = d[I];
      if (!G.roleAssumer) throw new qG1.CredentialsProviderError(`Profile ${I} requires a role to be assumed, but no role assumption callback was provided.`, !1);
      let {
        source_profile: W
      } = C;
      if (W && W in Z) throw new qG1.CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile ${p05.getProfileName(G)}. Profiles visited: ` + Object.keys(Z).join(", "), !1);
      let w = W ? n05.resolveProfileData(W, d, G, {
          ...Z,
          [W]: !0
        }) : i05.resolveCredentialSource(C.credential_source, I)(),
        B = {
          RoleArn: C.role_arn,
          RoleSessionName: C.role_session_name || `aws-sdk-js-${Date.now()}`,
          ExternalId: C.external_id
        },
        {
          mfa_serial: A
        } = C;
      if (A) {
        if (!G.mfaCodeProvider) throw new qG1.CredentialsProviderError(`Profile ${I} requires multi-factor authentication, but no MFA code callback was provided.`, !1);
        B.SerialNumber = A, B.TokenCode = await G.mfaCodeProvider(A)
      }
      let V = await w;
      return G.roleAssumer(V, B)
    };
  o_0.resolveAssumeRoleCredentials = o05
})
// @from(Start 2600148, End 2601013)
GD0 = Y((ID0) => {
  Object.defineProperty(ID0, "__esModule", {
    value: !0
  });
  ID0.getValidatedProcessCredentials = void 0;
  var t05 = (I, d) => {
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
  ID0.getValidatedProcessCredentials = t05
})
// @from(Start 2601019, End 2602104)
WD0 = Y((ZD0) => {
  Object.defineProperty(ZD0, "__esModule", {
    value: !0
  });
  ZD0.resolveProcessCredentials = void 0;
  var UG1 = W4(),
    I25 = B1("child_process"),
    d25 = B1("util"),
    G25 = GD0(),
    Z25 = async (I, d) => {
      let G = d[I];
      if (d[I]) {
        let Z = G.credential_process;
        if (Z !== void 0) {
          let C = d25.promisify(I25.exec);
          try {
            let {
              stdout: W
            } = await C(Z), w;
            try {
              w = JSON.parse(W.trim())
            } catch (B) {
              throw Error(`Profile ${I} credential_process returned invalid JSON.`)
            }
            return G25.getValidatedProcessCredentials(I, w)
          } catch (W) {
            throw new UG1.CredentialsProviderError(W.message)
          }
        } else throw new UG1.CredentialsProviderError(`Profile ${I} did not contain credential_process.`)
      } else throw new UG1.CredentialsProviderError(`Profile ${I} could not be found in shared credentials file.`)
    };
  ZD0.resolveProcessCredentials = Z25
})
// @from(Start 2602110, End 2602439)
VD0 = Y((BD0) => {
  Object.defineProperty(BD0, "__esModule", {
    value: !0
  });
  BD0.fromProcess = void 0;
  var wD0 = K8(),
    C25 = WD0(),
    W25 = (I = {}) => async () => {
      let d = await wD0.parseKnownFiles(I);
      return C25.resolveProcessCredentials(wD0.getProfileName(I), d)
    };
  BD0.fromProcess = W25
})
// @from(Start 2602445, End 2602580)
EG1 = Y((vG1) => {
  Object.defineProperty(vG1, "__esModule", {
    value: !0
  });
  var w25 = x1();
  w25.__exportStar(VD0(), vG1)
})
// @from(Start 2602586, End 2603001)
_D0 = Y((XD0) => {
  Object.defineProperty(XD0, "__esModule", {
    value: !0
  });
  XD0.resolveProcessCredentials = XD0.isProcessProfile = void 0;
  var B25 = EG1(),
    A25 = (I) => Boolean(I) && typeof I === "object" && typeof I.credential_process === "string";
  XD0.isProcessProfile = A25;
  var V25 = async (I, d) => B25.fromProcess({
    ...I,
    profile: d
  })();
  XD0.resolveProcessCredentials = V25
})
// @from(Start 2603007, End 2603362)
MG1 = Y((DD0) => {
  Object.defineProperty(DD0, "__esModule", {
    value: !0
  });
  DD0.isSsoProfile = void 0;
  var Y25 = (I) => I && (typeof I.sso_start_url === "string" || typeof I.sso_account_id === "string" || typeof I.sso_session === "string" || typeof I.sso_region === "string" || typeof I.sso_role_name === "string");
  DD0.isSsoProfile = Y25
})
// @from(Start 2603368, End 2603750)
JD0 = Y((FD0) => {
  Object.defineProperty(FD0, "__esModule", {
    value: !0
  });
  FD0.resolveClientEndpointParameters = void 0;
  var _25 = (I) => {
    return {
      ...I,
      useDualstackEndpoint: I.useDualstackEndpoint ?? !1,
      useFipsEndpoint: I.useFipsEndpoint ?? !1,
      defaultSigningName: "awsssoportal"
    }
  };
  FD0.resolveClientEndpointParameters = _25
})
// @from(Start 2603756, End 2607277)
KD0 = Y((H13, D25) => {
  D25.exports = {
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
// @from(Start 2607283, End 2608165)
og = Y((fD0) => {
  Object.defineProperty(fD0, "__esModule", {
    value: !0
  });
  fD0.Hash = void 0;
  var SG1 = Pf(),
    H25 = hC(),
    F25 = B1("buffer"),
    ND0 = B1("crypto");
  class QD0 {
    constructor(I, d) {
      this.algorithmIdentifier = I, this.secret = d, this.reset()
    }
    update(I, d) {
      this.hash.update(H25.toUint8Array(zD0(I, d)))
    }
    digest() {
      return Promise.resolve(this.hash.digest())
    }
    reset() {
      this.hash = this.secret ? ND0.createHmac(this.algorithmIdentifier, zD0(this.secret)) : ND0.createHash(this.algorithmIdentifier)
    }
  }
  fD0.Hash = QD0;

  function zD0(I, d) {
    if (F25.Buffer.isBuffer(I)) return I;
    if (typeof I === "string") return SG1.fromString(I, d);
    if (ArrayBuffer.isView(I)) return SG1.fromArrayBuffer(I.buffer, I.byteOffset, I.byteLength);
    return SG1.fromArrayBuffer(I)
  }
})
// @from(Start 2608171, End 2608737)
yG1 = Y((RD0) => {
  Object.defineProperty(RD0, "__esModule", {
    value: !0
  });
  RD0.buildQueryString = void 0;
  var LG1 = LI1();

  function g25(I) {
    let d = [];
    for (let G of Object.keys(I).sort()) {
      let Z = I[G];
      if (G = LG1.escapeUri(G), Array.isArray(Z))
        for (let C = 0, W = Z.length; C < W; C++) d.push(`${G}=${LG1.escapeUri(Z[C])}`);
      else {
        let C = G;
        if (Z || typeof Z === "string") C += `=${LG1.escapeUri(Z)}`;
        d.push(C)
      }
    }
    return d.join("&")
  }
  RD0.buildQueryString = g25
})
// @from(Start 2608743, End 2608944)
MD0 = Y((vD0) => {
  Object.defineProperty(vD0, "__esModule", {
    value: !0
  });
  vD0.NODEJS_TIMEOUT_ERROR_CODES = void 0;
  vD0.NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "EPIPE", "ETIMEDOUT"]
})
// @from(Start 2608950, End 2609273)
PG1 = Y((SD0) => {
  Object.defineProperty(SD0, "__esModule", {
    value: !0
  });
  SD0.getTransformedHeaders = void 0;
  var J25 = (I) => {
    let d = {};
    for (let G of Object.keys(I)) {
      let Z = I[G];
      d[G] = Array.isArray(Z) ? Z.join(",") : Z
    }
    return d
  };
  SD0.getTransformedHeaders = J25
})
// @from(Start 2609279, End 2609847)
$D0 = Y((yD0) => {
  Object.defineProperty(yD0, "__esModule", {
    value: !0
  });
  yD0.setConnectionTimeout = void 0;
  var K25 = (I, d, G = 0) => {
    if (!G) return;
    I.on("socket", (Z) => {
      if (Z.connecting) {
        let C = setTimeout(() => {
          I.destroy(), d(Object.assign(new Error(`Socket timed out without establishing a connection within ${G} ms`), {
            name: "TimeoutError"
          }))
        }, G);
        Z.on("connect", () => {
          clearTimeout(C)
        })
      }
    })
  };
  yD0.setConnectionTimeout = K25
})
// @from(Start 2609853, End 2610171)
OD0 = Y((uD0) => {
  Object.defineProperty(uD0, "__esModule", {
    value: !0
  });
  uD0.setSocketKeepAlive = void 0;
  var N25 = (I, {
    keepAlive: d,
    keepAliveMsecs: G
  }) => {
    if (d !== !0) return;
    I.on("socket", (Z) => {
      Z.setKeepAlive(d, G || 0)
    })
  };
  uD0.setSocketKeepAlive = N25
})
// @from(Start 2610177, End 2610521)
bD0 = Y((mD0) => {
  Object.defineProperty(mD0, "__esModule", {
    value: !0
  });
  mD0.setSocketTimeout = void 0;
  var z25 = (I, d, G = 0) => {
    I.setTimeout(G, () => {
      I.destroy(), d(Object.assign(new Error(`Connection timed out after ${G} ms`), {
        name: "TimeoutError"
      }))
    })
  };
  mD0.setSocketTimeout = z25
})
// @from(Start 2610527, End 2611204)
$G1 = Y((jD0) => {
  Object.defineProperty(jD0, "__esModule", {
    value: !0
  });
  jD0.writeRequestBody = void 0;
  var Q25 = B1("stream"),
    hD0 = 1000;
  async function f25(I, d, G = hD0) {
    var Z;
    let C = (Z = d.headers) !== null && Z !== void 0 ? Z : {};
    if ((C.Expect || C.expect) === "100-continue") await Promise.race([new Promise((w) => {
      setTimeout(w, Math.max(hD0, G))
    }), new Promise((w) => {
      I.on("continue", () => {
        w()
      })
    })]);
    q25(I, d.body)
  }
  jD0.writeRequestBody = f25;

  function q25(I, d) {
    if (d instanceof Q25.Readable) d.pipe(I);
    else if (d) I.end(Buffer.from(d));
    else I.end()
  }
})
// @from(Start 2611210, End 2614742)
rD0 = Y((iD0) => {
  Object.defineProperty(iD0, "__esModule", {
    value: !0
  });
  iD0.NodeHttpHandler = iD0.DEFAULT_REQUEST_TIMEOUT = void 0;
  var R25 = J8(),
    U25 = yG1(),
    xD0 = B1("http"),
    cD0 = B1("https"),
    v25 = MD0(),
    E25 = PG1(),
    M25 = $D0(),
    S25 = OD0(),
    L25 = bD0(),
    y25 = $G1();
  iD0.DEFAULT_REQUEST_TIMEOUT = 0;
  class pD0 {
    constructor(I) {
      this.metadata = {
        handlerProtocol: "http/1.1"
      }, this.configProvider = new Promise((d, G) => {
        if (typeof I === "function") I().then((Z) => {
          d(this.resolveDefaultConfig(Z))
        }).catch(G);
        else d(this.resolveDefaultConfig(I))
      })
    }
    resolveDefaultConfig(I) {
      let {
        requestTimeout: d,
        connectionTimeout: G,
        socketTimeout: Z,
        httpAgent: C,
        httpsAgent: W
      } = I || {}, w = !0, B = 50;
      return {
        connectionTimeout: G,
        requestTimeout: d !== null && d !== void 0 ? d : Z,
        httpAgent: C || new xD0.Agent({
          keepAlive: !0,
          maxSockets: 50
        }),
        httpsAgent: W || new cD0.Agent({
          keepAlive: !0,
          maxSockets: 50
        })
      }
    }
    destroy() {
      var I, d, G, Z;
      (d = (I = this.config) === null || I === void 0 ? void 0 : I.httpAgent) === null || d === void 0 || d.destroy(), (Z = (G = this.config) === null || G === void 0 ? void 0 : G.httpsAgent) === null || Z === void 0 || Z.destroy()
    }
    async handle(I, {
      abortSignal: d
    } = {}) {
      if (!this.config) this.config = await this.configProvider;
      return new Promise((G, Z) => {
        let C = void 0,
          W = async (g) => {
            await C, G(g)
          }, w = async (g) => {
            await C, Z(g)
          };
        if (!this.config) throw new Error("Node HTTP request handler config is not resolved");
        if (d === null || d === void 0 ? void 0 : d.aborted) {
          let g = new Error("Request aborted");
          g.name = "AbortError", w(g);
          return
        }
        let B = I.protocol === "https:",
          A = U25.buildQueryString(I.query || {}),
          V = {
            headers: I.headers,
            host: I.hostname,
            method: I.method,
            path: A ? `${I.path}?${A}` : I.path,
            port: I.port,
            agent: B ? this.config.httpsAgent : this.config.httpAgent
          },
          _ = (B ? cD0.request : xD0.request)(V, (g) => {
            let J = new R25.HttpResponse({
              statusCode: g.statusCode || -1,
              headers: E25.getTransformedHeaders(g.headers),
              body: g
            });
            W({
              response: J
            })
          });
        if (_.on("error", (g) => {
            if (v25.NODEJS_TIMEOUT_ERROR_CODES.includes(g.code)) w(Object.assign(g, {
              name: "TimeoutError"
            }));
            else w(g)
          }), M25.setConnectionTimeout(_, w, this.config.connectionTimeout), L25.setSocketTimeout(_, w, this.config.requestTimeout), d) d.onabort = () => {
          _.abort();
          let g = new Error("Request aborted");
          g.name = "AbortError", w(g)
        };
        let F = V.agent;
        if (typeof F === "object" && "keepAlive" in F) S25.setSocketKeepAlive(_, {
          keepAlive: F.keepAlive,
          keepAliveMsecs: F.keepAliveMsecs
        });
        C = y25.writeRequestBody(_, I, this.config.requestTimeout)
      })
    }
  }
  iD0.NodeHttpHandler = pD0
})
// @from(Start 2614748, End 2615519)
eD0 = Y((sD0) => {
  Object.defineProperty(sD0, "__esModule", {
    value: !0
  });
  sD0.NodeHttp2ConnectionPool = void 0;
  class aD0 {
    constructor(I) {
      this.sessions = [], this.sessions = I !== null && I !== void 0 ? I : []
    }
    poll() {
      if (this.sessions.length > 0) return this.sessions.shift()
    }
    offerLast(I) {
      this.sessions.push(I)
    }
    contains(I) {
      return this.sessions.includes(I)
    }
    remove(I) {
      this.sessions = this.sessions.filter((d) => d !== I)
    } [Symbol.iterator]() {
      return this.sessions[Symbol.iterator]()
    }
    destroy(I) {
      for (let d of this.sessions)
        if (d === I) {
          if (!d.destroyed) d.destroy()
        }
    }
  }
  sD0.NodeHttp2ConnectionPool = aD0
})
// @from(Start 2615525, End 2617857)
GH0 = Y((IH0) => {
  Object.defineProperty(IH0, "__esModule", {
    value: !0
  });
  IH0.NodeHttp2ConnectionManager = void 0;
  var $25 = x1(),
    u25 = $25.__importDefault(B1("http2")),
    T25 = eD0();
  class tD0 {
    constructor(I) {
      if (this.sessionCache = new Map, this.config = I, this.config.maxConcurrency && this.config.maxConcurrency <= 0) throw new RangeError("maxConcurrency must be greater than zero.")
    }
    lease(I, d) {
      let G = this.getUrlString(I),
        Z = this.sessionCache.get(G);
      if (Z) {
        let B = Z.poll();
        if (B && !this.config.disableConcurrency) return B
      }
      let C = u25.default.connect(G);
      if (this.config.maxConcurrency) C.settings({
        maxConcurrentStreams: this.config.maxConcurrency
      }, (B) => {
        if (B) throw new Error("Fail to set maxConcurrentStreams to " + this.config.maxConcurrency + "when creating new session for " + I.destination.toString())
      });
      C.unref();
      let W = () => {
        C.destroy(), this.deleteSession(G, C)
      };
      if (C.on("goaway", W), C.on("error", W), C.on("frameError", W), C.on("close", () => this.deleteSession(G, C)), d.requestTimeout) C.setTimeout(d.requestTimeout, W);
      let w = this.sessionCache.get(G) || new T25.NodeHttp2ConnectionPool;
      return w.offerLast(C), this.sessionCache.set(G, w), C
    }
    deleteSession(I, d) {
      let G = this.sessionCache.get(I);
      if (!G) return;
      if (!G.contains(d)) return;
      G.remove(d), this.sessionCache.set(I, G)
    }
    release(I, d) {
      var G;
      let Z = this.getUrlString(I);
      (G = this.sessionCache.get(Z)) === null || G === void 0 || G.offerLast(d)
    }
    destroy() {
      for (let [I, d] of this.sessionCache) {
        for (let G of d) {
          if (!G.destroyed) G.destroy();
          d.remove(G)
        }
        this.sessionCache.delete(I)
      }
    }
    setMaxConcurrentStreams(I) {
      if (this.config.maxConcurrency && this.config.maxConcurrency <= 0) throw new RangeError("maxConcurrentStreams must be greater than zero.");
      this.config.maxConcurrency = I
    }
    setDisableConcurrentStreams(I) {
      this.config.disableConcurrency = I
    }
    getUrlString(I) {
      return I.destination.toString()
    }
  }
  IH0.NodeHttp2ConnectionManager = tD0
})
// @from(Start 2617863, End 2621421)
BH0 = Y((WH0) => {
  Object.defineProperty(WH0, "__esModule", {
    value: !0
  });
  WH0.NodeHttp2Handler = void 0;
  var O25 = J8(),
    m25 = yG1(),
    ZH0 = B1("http2"),
    l25 = PG1(),
    b25 = GH0(),
    h25 = $G1();
  class CH0 {
    constructor(I) {
      this.metadata = {
        handlerProtocol: "h2"
      }, this.connectionManager = new b25.NodeHttp2ConnectionManager({}), this.configProvider = new Promise((d, G) => {
        if (typeof I === "function") I().then((Z) => {
          d(Z || {})
        }).catch(G);
        else d(I || {})
      })
    }
    destroy() {
      this.connectionManager.destroy()
    }
    async handle(I, {
      abortSignal: d
    } = {}) {
      if (!this.config) {
        if (this.config = await this.configProvider, this.connectionManager.setDisableConcurrentStreams(this.config.disableConcurrentStreams || !1), this.config.maxConcurrentStreams) this.connectionManager.setMaxConcurrentStreams(this.config.maxConcurrentStreams)
      }
      let {
        requestTimeout: G,
        disableConcurrentStreams: Z
      } = this.config;
      return new Promise((C, W) => {
        var w;
        let B = !1,
          A = void 0,
          V = async (T) => {
            await A, C(T)
          }, X = async (T) => {
            await A, W(T)
          };
        if (d === null || d === void 0 ? void 0 : d.aborted) {
          B = !0;
          let T = new Error("Request aborted");
          T.name = "AbortError", X(T);
          return
        }
        let {
          hostname: _,
          method: F,
          port: g,
          protocol: J,
          path: K,
          query: Q
        } = I, E = `${J}//${_}${g?`:${g}`:""}`, S = {
          destination: new URL(E)
        }, P = this.connectionManager.lease(S, {
          requestTimeout: (w = this.config) === null || w === void 0 ? void 0 : w.sessionTimeout,
          disableConcurrentStreams: Z || !1
        }), $ = (T) => {
          if (Z) this.destroySession(P);
          B = !0, X(T)
        }, h = m25.buildQueryString(Q || {}), O = P.request({
          ...I.headers,
          [ZH0.constants.HTTP2_HEADER_PATH]: h ? `${K}?${h}` : K,
          [ZH0.constants.HTTP2_HEADER_METHOD]: F
        });
        if (P.ref(), O.on("response", (T) => {
            let V1 = new O25.HttpResponse({
              statusCode: T[":status"] || -1,
              headers: l25.getTransformedHeaders(T),
              body: O
            });
            if (B = !0, V({
                response: V1
              }), Z) P.close(), this.connectionManager.deleteSession(E, P)
          }), G) O.setTimeout(G, () => {
          O.close();
          let T = new Error(`Stream timed out because of no activity for ${G} ms`);
          T.name = "TimeoutError", $(T)
        });
        if (d) d.onabort = () => {
          O.close();
          let T = new Error("Request aborted");
          T.name = "AbortError", $(T)
        };
        O.on("frameError", (T, V1, c) => {
          $(new Error(`Frame type id ${T} in stream id ${c} has failed with code ${V1}.`))
        }), O.on("error", $), O.on("aborted", () => {
          $(new Error(`HTTP/2 stream is abnormally aborted in mid-communication with result code ${O.rstCode}.`))
        }), O.on("close", () => {
          if (P.unref(), Z) P.destroy();
          if (!B) $(new Error("Unexpected error: http2 request did not get a response"))
        }), A = h25.writeRequestBody(O, I, G)
      })
    }
    destroySession(I) {
      if (!I.destroyed) I.destroy()
    }
  }
  WH0.NodeHttp2Handler = CH0
})
// @from(Start 2621427, End 2621775)
YH0 = Y((VH0) => {
  Object.defineProperty(VH0, "__esModule", {
    value: !0
  });
  VH0.Collector = void 0;
  var j25 = B1("stream");
  class AH0 extends j25.Writable {
    constructor() {
      super(...arguments);
      this.bufferedBytes = []
    }
    _write(I, d, G) {
      this.bufferedBytes.push(I), G()
    }
  }
  VH0.Collector = AH0
})
// @from(Start 2621781, End 2622235)
HH0 = Y((_H0) => {
  Object.defineProperty(_H0, "__esModule", {
    value: !0
  });
  _H0.streamCollector = void 0;
  var k25 = YH0(),
    x25 = (I) => new Promise((d, G) => {
      let Z = new k25.Collector;
      I.pipe(Z), I.on("error", (C) => {
        Z.end(), G(C)
      }), Z.on("error", G), Z.on("finish", function() {
        let C = new Uint8Array(Buffer.concat(this.bufferedBytes));
        d(C)
      })
    });
  _H0.streamCollector = x25
})
// @from(Start 2622241, End 2622434)
eg = Y((OL) => {
  Object.defineProperty(OL, "__esModule", {
    value: !0
  });
  var uG1 = x1();
  uG1.__exportStar(rD0(), OL);
  uG1.__exportStar(BH0(), OL);
  uG1.__exportStar(HH0(), OL)
})
// @from(Start 2622440, End 2623101)
KH0 = Y((gH0) => {
  Object.defineProperty(gH0, "__esModule", {
    value: !0
  });
  gH0.calculateBodyLength = void 0;
  var FH0 = B1("fs"),
    c25 = (I) => {
      if (!I) return 0;
      if (typeof I === "string") return Buffer.from(I).length;
      else if (typeof I.byteLength === "number") return I.byteLength;
      else if (typeof I.size === "number") return I.size;
      else if (typeof I.path === "string" || Buffer.isBuffer(I.path)) return FH0.lstatSync(I.path).size;
      else if (typeof I.fd === "number") return FH0.fstatSync(I.fd).size;
      throw new Error(`Body Length computation failed for ${I}`)
    };
  gH0.calculateBodyLength = c25
})
// @from(Start 2623107, End 2623241)
tg = Y((TG1) => {
  Object.defineProperty(TG1, "__esModule", {
    value: !0
  });
  var p25 = x1();
  p25.__exportStar(KH0(), TG1)
})
// @from(Start 2623247, End 2623644)
fH0 = Y((NH0, zH0) => {
  Object.defineProperty(NH0, "__esModule", {
    value: !0
  });
  NH0.isCrtAvailable = void 0;
  var i25 = () => {
    try {
      if (typeof zH0 !== "undefined" && (() => {
          throw new Error("Cannot require module " + "aws-crt");
        })()) return ["md/crt-avail"];
      return null
    } catch (I) {
      return null
    }
  };
  NH0.isCrtAvailable = i25
})
// @from(Start 2623650, End 2624787)
ac = Y((RH0) => {
  Object.defineProperty(RH0, "__esModule", {
    value: !0
  });
  RH0.defaultUserAgent = RH0.UA_APP_ID_INI_NAME = RH0.UA_APP_ID_ENV_NAME = void 0;
  var n25 = QZ(),
    qH0 = B1("os"),
    OG1 = B1("process"),
    r25 = fH0();
  RH0.UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
  RH0.UA_APP_ID_INI_NAME = "sdk-ua-app-id";
  var a25 = ({
    serviceId: I,
    clientVersion: d
  }) => {
    let G = [
        ["aws-sdk-js", d],
        [`os/${qH0.platform()}`, qH0.release()],
        ["lang/js"],
        ["md/nodejs", `${OG1.versions.node}`]
      ],
      Z = r25.isCrtAvailable();
    if (Z) G.push(Z);
    if (I) G.push([`api/${I}`, d]);
    if (OG1.env.AWS_EXECUTION_ENV) G.push([`exec-env/${OG1.env.AWS_EXECUTION_ENV}`]);
    let C = n25.loadConfig({
        environmentVariableSelector: (w) => w[RH0.UA_APP_ID_ENV_NAME],
        configFileSelector: (w) => w[RH0.UA_APP_ID_INI_NAME],
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
  RH0.defaultUserAgent = a25
})
// @from(Start 2624793, End 2625283)
LH0 = Y((MH0) => {
  Object.defineProperty(MH0, "__esModule", {
    value: !0
  });
  MH0.fromBase64 = void 0;
  var s25 = Pf(),
    o25 = /^[A-Za-z0-9+/]*={0,2}$/,
    e25 = (I) => {
      if (I.length * 3 % 4 !== 0) throw new TypeError("Incorrect padding on base64 string.");
      if (!o25.exec(I)) throw new TypeError("Invalid base64 string.");
      let d = s25.fromString(I, "base64");
      return new Uint8Array(d.buffer, d.byteOffset, d.byteLength)
    };
  MH0.fromBase64 = e25
})
// @from(Start 2625289, End 2625534)
$H0 = Y((yH0) => {
  Object.defineProperty(yH0, "__esModule", {
    value: !0
  });
  yH0.toBase64 = void 0;
  var t25 = Pf(),
    I45 = (I) => t25.fromArrayBuffer(I.buffer, I.byteOffset, I.byteLength).toString("base64");
  yH0.toBase64 = I45
})
// @from(Start 2625540, End 2625702)
IJ = Y((sc) => {
  Object.defineProperty(sc, "__esModule", {
    value: !0
  });
  var uH0 = x1();
  uH0.__exportStar(LH0(), sc);
  uH0.__exportStar($H0(), sc)
})
// @from(Start 2625708, End 2629781)
rH0 = Y((iH0) => {
  Object.defineProperty(iH0, "__esModule", {
    value: !0
  });
  iH0.ruleSet = void 0;
  var kH0 = "required",
    qV = "fn",
    RV = "argv",
    hf = "ref",
    mG1 = "PartitionResult",
    ew = "tree",
    mL = "error",
    lL = "endpoint",
    TH0 = {
      [kH0]: !1,
      type: "String"
    },
    OH0 = {
      [kH0]: !0,
      default: !1,
      type: "Boolean"
    },
    xH0 = {
      [hf]: "Endpoint"
    },
    cH0 = {
      [qV]: "booleanEquals",
      [RV]: [{
        [hf]: "UseFIPS"
      }, !0]
    },
    pH0 = {
      [qV]: "booleanEquals",
      [RV]: [{
        [hf]: "UseDualStack"
      }, !0]
    },
    tw = {},
    mH0 = {
      [qV]: "booleanEquals",
      [RV]: [!0, {
        [qV]: "getAttr",
        [RV]: [{
          [hf]: mG1
        }, "supportsFIPS"]
      }]
    },
    lH0 = {
      [qV]: "booleanEquals",
      [RV]: [!0, {
        [qV]: "getAttr",
        [RV]: [{
          [hf]: mG1
        }, "supportsDualStack"]
      }]
    },
    bH0 = [xH0],
    hH0 = [cH0],
    jH0 = [pH0],
    d45 = {
      version: "1.0",
      parameters: {
        Region: TH0,
        UseDualStack: OH0,
        UseFIPS: OH0,
        Endpoint: TH0
      },
      rules: [{
        conditions: [{
          [qV]: "aws.partition",
          [RV]: [{
            [hf]: "Region"
          }],
          assign: mG1
        }],
        type: ew,
        rules: [{
          conditions: [{
            [qV]: "isSet",
            [RV]: bH0
          }, {
            [qV]: "parseURL",
            [RV]: bH0,
            assign: "url"
          }],
          type: ew,
          rules: [{
            conditions: hH0,
            error: "Invalid Configuration: FIPS and custom endpoint are not supported",
            type: mL
          }, {
            type: ew,
            rules: [{
              conditions: jH0,
              error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
              type: mL
            }, {
              endpoint: {
                url: xH0,
                properties: tw,
                headers: tw
              },
              type: lL
            }]
          }]
        }, {
          conditions: [cH0, pH0],
          type: ew,
          rules: [{
            conditions: [mH0, lH0],
            type: ew,
            rules: [{
              endpoint: {
                url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                properties: tw,
                headers: tw
              },
              type: lL
            }]
          }, {
            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
            type: mL
          }]
        }, {
          conditions: hH0,
          type: ew,
          rules: [{
            conditions: [mH0],
            type: ew,
            rules: [{
              type: ew,
              rules: [{
                endpoint: {
                  url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}",
                  properties: tw,
                  headers: tw
                },
                type: lL
              }]
            }]
          }, {
            error: "FIPS is enabled but this partition does not support FIPS",
            type: mL
          }]
        }, {
          conditions: jH0,
          type: ew,
          rules: [{
            conditions: [lH0],
            type: ew,
            rules: [{
              endpoint: {
                url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}",
                properties: tw,
                headers: tw
              },
              type: lL
            }]
          }, {
            error: "DualStack is enabled but this partition does not support DualStack",
            type: mL
          }]
        }, {
          endpoint: {
            url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}",
            properties: tw,
            headers: tw
          },
          type: lL
        }]
      }]
    };
  iH0.ruleSet = d45
})
// @from(Start 2629787, End 2630127)
oH0 = Y((aH0) => {
  Object.defineProperty(aH0, "__esModule", {
    value: !0
  });
  aH0.defaultEndpointResolver = void 0;
  var G45 = qL(),
    Z45 = rH0(),
    C45 = (I, d = {}) => {
      return G45.resolveEndpoint(Z45.ruleSet, {
        endpointParams: I,
        logger: d.logger
      })
    };
  aH0.defaultEndpointResolver = C45
})
// @from(Start 2630133, End 2630898)
GF0 = Y((IF0) => {
  Object.defineProperty(IF0, "__esModule", {
    value: !0
  });
  IF0.getRuntimeConfig = void 0;
  var W45 = v0(),
    w45 = FV(),
    eH0 = IJ(),
    tH0 = hC(),
    B45 = oH0(),
    A45 = (I) => ({
      apiVersion: "2019-06-10",
      base64Decoder: I?.base64Decoder ?? eH0.fromBase64,
      base64Encoder: I?.base64Encoder ?? eH0.toBase64,
      disableHostPrefix: I?.disableHostPrefix ?? !1,
      endpointProvider: I?.endpointProvider ?? B45.defaultEndpointResolver,
      logger: I?.logger ?? new W45.NoOpLogger,
      serviceId: I?.serviceId ?? "SSO",
      urlParser: I?.urlParser ?? w45.parseUrl,
      utf8Decoder: I?.utf8Decoder ?? tH0.fromUtf8,
      utf8Encoder: I?.utf8Encoder ?? tH0.toUtf8
    });
  IF0.getRuntimeConfig = A45
})
// @from(Start 2630904, End 2631496)
WF0 = Y((ZF0) => {
  Object.defineProperty(ZF0, "__esModule", {
    value: !0
  });
  ZF0.IMDS_REGION_PATH = ZF0.DEFAULTS_MODE_OPTIONS = ZF0.ENV_IMDS_DISABLED = ZF0.AWS_DEFAULT_REGION_ENV = ZF0.AWS_REGION_ENV = ZF0.AWS_EXECUTION_ENV = void 0;
  ZF0.AWS_EXECUTION_ENV = "AWS_EXECUTION_ENV";
  ZF0.AWS_REGION_ENV = "AWS_REGION";
  ZF0.AWS_DEFAULT_REGION_ENV = "AWS_DEFAULT_REGION";
  ZF0.ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
  ZF0.DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];
  ZF0.IMDS_REGION_PATH = "/latest/meta-data/placement/region"
})
// @from(Start 2631502, End 2631897)
AF0 = Y((wF0) => {
  Object.defineProperty(wF0, "__esModule", {
    value: !0
  });
  wF0.NODE_DEFAULTS_MODE_CONFIG_OPTIONS = void 0;
  var H45 = "AWS_DEFAULTS_MODE",
    F45 = "defaults_mode";
  wF0.NODE_DEFAULTS_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (I) => {
      return I[H45]
    },
    configFileSelector: (I) => {
      return I[F45]
    },
    default: "legacy"
  }
})
// @from(Start 2631903, End 2633741)
DF0 = Y((YF0) => {
  Object.defineProperty(YF0, "__esModule", {
    value: !0
  });
  YF0.resolveDefaultsModeConfig = void 0;
  var g45 = Cd(),
    VF0 = i_(),
    XF0 = QZ(),
    J45 = W4(),
    n_ = WF0(),
    K45 = AF0(),
    N45 = ({
      region: I = XF0.loadConfig(g45.NODE_REGION_CONFIG_OPTIONS),
      defaultsMode: d = XF0.loadConfig(K45.NODE_DEFAULTS_MODE_CONFIG_OPTIONS)
    } = {}) => J45.memoize(async () => {
      let G = typeof d === "function" ? await d() : d;
      switch (G === null || G === void 0 ? void 0 : G.toLowerCase()) {
        case "auto":
          return z45(I);
        case "in-region":
        case "cross-region":
        case "mobile":
        case "standard":
        case "legacy":
          return Promise.resolve(G === null || G === void 0 ? void 0 : G.toLocaleLowerCase());
        case void 0:
          return Promise.resolve("legacy");
        default:
          throw new Error(`Invalid parameter for "defaultsMode", expect ${n_.DEFAULTS_MODE_OPTIONS.join(", ")}, got ${G}`)
      }
    });
  YF0.resolveDefaultsModeConfig = N45;
  var z45 = async (I) => {
    if (I) {
      let d = typeof I === "function" ? await I() : I,
        G = await Q45();
      if (!G) return "standard";
      if (d === G) return "in-region";
      else return "cross-region"
    }
    return "standard"
  }, Q45 = async () => {
    var I;
    if (process.env[n_.AWS_EXECUTION_ENV] && (process.env[n_.AWS_REGION_ENV] || process.env[n_.AWS_DEFAULT_REGION_ENV])) return (I = process.env[n_.AWS_REGION_ENV]) !== null && I !== void 0 ? I : process.env[n_.AWS_DEFAULT_REGION_ENV];
    if (!process.env[n_.ENV_IMDS_DISABLED]) try {
      let d = await VF0.getInstanceMetadataEndpoint();
      return (await VF0.httpRequest({
        ...d,
        path: n_.IMDS_REGION_PATH
      })).toString()
    } catch (d) {}
  }
})
// @from(Start 2633747, End 2633881)
dJ = Y((lG1) => {
  Object.defineProperty(lG1, "__esModule", {
    value: !0
  });
  var f45 = x1();
  f45.__exportStar(DF0(), lG1)
})
// @from(Start 2633887, End 2635684)
KF0 = Y((gF0) => {
  Object.defineProperty(gF0, "__esModule", {
    value: !0
  });
  gF0.getRuntimeConfig = void 0;
  var q45 = x1(),
    R45 = q45.__importDefault(KD0()),
    oc = Cd(),
    U45 = og(),
    HF0 = dG(),
    bL = QZ(),
    FF0 = eg(),
    v45 = tg(),
    E45 = Wd(),
    M45 = ac(),
    S45 = GF0(),
    L45 = v0(),
    y45 = dJ(),
    P45 = v0(),
    $45 = (I) => {
      P45.emitWarningIfUnsupportedVersion(process.version);
      let d = y45.resolveDefaultsModeConfig(I),
        G = () => d().then(L45.loadConfigsForDefaultMode),
        Z = S45.getRuntimeConfig(I);
      return {
        ...Z,
        ...I,
        runtime: "node",
        defaultsMode: d,
        bodyLengthChecker: I?.bodyLengthChecker ?? v45.calculateBodyLength,
        defaultUserAgentProvider: I?.defaultUserAgentProvider ?? M45.defaultUserAgent({
          serviceId: Z.serviceId,
          clientVersion: R45.default.version
        }),
        maxAttempts: I?.maxAttempts ?? bL.loadConfig(HF0.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: I?.region ?? bL.loadConfig(oc.NODE_REGION_CONFIG_OPTIONS, oc.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: I?.requestHandler ?? new FF0.NodeHttpHandler(G),
        retryMode: I?.retryMode ?? bL.loadConfig({
          ...HF0.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await G()).retryMode || E45.DEFAULT_RETRY_MODE
        }),
        sha256: I?.sha256 ?? U45.Hash.bind(null, "sha256"),
        streamCollector: I?.streamCollector ?? FF0.streamCollector,
        useDualstackEndpoint: I?.useDualstackEndpoint ?? bL.loadConfig(oc.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: I?.useFipsEndpoint ?? bL.loadConfig(oc.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
      }
    };
  gF0.getRuntimeConfig = $45
})
// @from(Start 2635690, End 2636971)
hL = Y((bG1) => {
  Object.defineProperty(bG1, "__esModule", {
    value: !0
  });
  bG1.SSOClient = bG1.__Client = void 0;
  var u45 = Cd(),
    T45 = jg(),
    O45 = u2(),
    NF0 = Xc(),
    m45 = Yc(),
    l45 = _c(),
    zF0 = dG(),
    QF0 = Lc(),
    fF0 = v0();
  Object.defineProperty(bG1, "__Client", {
    enumerable: !0,
    get: function() {
      return fF0.Client
    }
  });
  var b45 = JD0(),
    h45 = KF0();
  class qF0 extends fF0.Client {
    constructor(I) {
      let d = h45.getRuntimeConfig(I),
        G = b45.resolveClientEndpointParameters(d),
        Z = u45.resolveRegionConfig(G),
        C = O45.resolveEndpointConfig(Z),
        W = zF0.resolveRetryConfig(C),
        w = NF0.resolveHostHeaderConfig(W),
        B = QF0.resolveUserAgentConfig(w);
      super(B);
      this.config = B, this.middlewareStack.use(zF0.getRetryPlugin(this.config)), this.middlewareStack.use(T45.getContentLengthPlugin(this.config)), this.middlewareStack.use(NF0.getHostHeaderPlugin(this.config)), this.middlewareStack.use(m45.getLoggerPlugin(this.config)), this.middlewareStack.use(l45.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(QF0.getUserAgentPlugin(this.config))
    }
    destroy() {
      super.destroy()
    }
  }
  bG1.SSOClient = qF0
})
// @from(Start 2636977, End 2637453)
ec = Y((jG1) => {
  Object.defineProperty(jG1, "__esModule", {
    value: !0
  });
  jG1.SSOServiceException = jG1.__ServiceException = void 0;
  var UF0 = v0();
  Object.defineProperty(jG1, "__ServiceException", {
    enumerable: !0,
    get: function() {
      return UF0.ServiceException
    }
  });
  class hG1 extends UF0.ServiceException {
    constructor(I) {
      super(I);
      Object.setPrototypeOf(this, hG1.prototype)
    }
  }
  jG1.SSOServiceException = hG1
})
// @from(Start 2637459, End 2640390)
GJ = Y((EF0) => {
  Object.defineProperty(EF0, "__esModule", {
    value: !0
  });
  EF0.LogoutRequestFilterSensitiveLog = EF0.ListAccountsRequestFilterSensitiveLog = EF0.ListAccountRolesRequestFilterSensitiveLog = EF0.GetRoleCredentialsResponseFilterSensitiveLog = EF0.RoleCredentialsFilterSensitiveLog = EF0.GetRoleCredentialsRequestFilterSensitiveLog = EF0.UnauthorizedException = EF0.TooManyRequestsException = EF0.ResourceNotFoundException = EF0.InvalidRequestException = void 0;
  var jf = v0(),
    tc = ec();
  class kG1 extends tc.SSOServiceException {
    constructor(I) {
      super({
        name: "InvalidRequestException",
        $fault: "client",
        ...I
      });
      this.name = "InvalidRequestException", this.$fault = "client", Object.setPrototypeOf(this, kG1.prototype)
    }
  }
  EF0.InvalidRequestException = kG1;
  class xG1 extends tc.SSOServiceException {
    constructor(I) {
      super({
        name: "ResourceNotFoundException",
        $fault: "client",
        ...I
      });
      this.name = "ResourceNotFoundException", this.$fault = "client", Object.setPrototypeOf(this, xG1.prototype)
    }
  }
  EF0.ResourceNotFoundException = xG1;
  class cG1 extends tc.SSOServiceException {
    constructor(I) {
      super({
        name: "TooManyRequestsException",
        $fault: "client",
        ...I
      });
      this.name = "TooManyRequestsException", this.$fault = "client", Object.setPrototypeOf(this, cG1.prototype)
    }
  }
  EF0.TooManyRequestsException = cG1;
  class pG1 extends tc.SSOServiceException {
    constructor(I) {
      super({
        name: "UnauthorizedException",
        $fault: "client",
        ...I
      });
      this.name = "UnauthorizedException", this.$fault = "client", Object.setPrototypeOf(this, pG1.prototype)
    }
  }
  EF0.UnauthorizedException = pG1;
  var j45 = (I) => ({
    ...I,
    ...I.accessToken && {
      accessToken: jf.SENSITIVE_STRING
    }
  });
  EF0.GetRoleCredentialsRequestFilterSensitiveLog = j45;
  var k45 = (I) => ({
    ...I,
    ...I.secretAccessKey && {
      secretAccessKey: jf.SENSITIVE_STRING
    },
    ...I.sessionToken && {
      sessionToken: jf.SENSITIVE_STRING
    }
  });
  EF0.RoleCredentialsFilterSensitiveLog = k45;
  var x45 = (I) => ({
    ...I,
    ...I.roleCredentials && {
      roleCredentials: EF0.RoleCredentialsFilterSensitiveLog(I.roleCredentials)
    }
  });
  EF0.GetRoleCredentialsResponseFilterSensitiveLog = x45;
  var c45 = (I) => ({
    ...I,
    ...I.accessToken && {
      accessToken: jf.SENSITIVE_STRING
    }
  });
  EF0.ListAccountRolesRequestFilterSensitiveLog = c45;
  var p45 = (I) => ({
    ...I,
    ...I.accessToken && {
      accessToken: jf.SENSITIVE_STRING
    }
  });
  EF0.ListAccountsRequestFilterSensitiveLog = p45;
  var i45 = (I) => ({
    ...I,
    ...I.accessToken && {
      accessToken: jf.SENSITIVE_STRING
    }
  });
  EF0.LogoutRequestFilterSensitiveLog = i45
})