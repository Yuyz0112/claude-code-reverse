
// @from(Start 2806346, End 2848478)
W3 = Y((cv0) => {
  Object.defineProperty(cv0, "__esModule", {
    value: !0
  });
  cv0.de_UpdateIdentityPoolCommand = cv0.de_UntagResourceCommand = cv0.de_UnlinkIdentityCommand = cv0.de_UnlinkDeveloperIdentityCommand = cv0.de_TagResourceCommand = cv0.de_SetPrincipalTagAttributeMapCommand = cv0.de_SetIdentityPoolRolesCommand = cv0.de_MergeDeveloperIdentitiesCommand = cv0.de_LookupDeveloperIdentityCommand = cv0.de_ListTagsForResourceCommand = cv0.de_ListIdentityPoolsCommand = cv0.de_ListIdentitiesCommand = cv0.de_GetPrincipalTagAttributeMapCommand = cv0.de_GetOpenIdTokenForDeveloperIdentityCommand = cv0.de_GetOpenIdTokenCommand = cv0.de_GetIdentityPoolRolesCommand = cv0.de_GetIdCommand = cv0.de_GetCredentialsForIdentityCommand = cv0.de_DescribeIdentityPoolCommand = cv0.de_DescribeIdentityCommand = cv0.de_DeleteIdentityPoolCommand = cv0.de_DeleteIdentitiesCommand = cv0.de_CreateIdentityPoolCommand = cv0.se_UpdateIdentityPoolCommand = cv0.se_UntagResourceCommand = cv0.se_UnlinkIdentityCommand = cv0.se_UnlinkDeveloperIdentityCommand = cv0.se_TagResourceCommand = cv0.se_SetPrincipalTagAttributeMapCommand = cv0.se_SetIdentityPoolRolesCommand = cv0.se_MergeDeveloperIdentitiesCommand = cv0.se_LookupDeveloperIdentityCommand = cv0.se_ListTagsForResourceCommand = cv0.se_ListIdentityPoolsCommand = cv0.se_ListIdentitiesCommand = cv0.se_GetPrincipalTagAttributeMapCommand = cv0.se_GetOpenIdTokenForDeveloperIdentityCommand = cv0.se_GetOpenIdTokenCommand = cv0.se_GetIdentityPoolRolesCommand = cv0.se_GetIdCommand = cv0.se_GetCredentialsForIdentityCommand = cv0.se_DescribeIdentityPoolCommand = cv0.se_DescribeIdentityCommand = cv0.se_DeleteIdentityPoolCommand = cv0.se_DeleteIdentitiesCommand = cv0.se_CreateIdentityPoolCommand = void 0;
  var r0 = v0(),
    ld5 = Oc(),
    bd5 = up(),
    cC = NW1(),
    hd5 = async (I, d) => {
      let G = q3("CreateIdentityPool"),
        Z;
      return Z = JSON.stringify(r0._json(I)), f3(d, G, "/", void 0, Z)
    };
  cv0.se_CreateIdentityPoolCommand = hd5;
  var jd5 = async (I, d) => {
    let G = q3("DeleteIdentities"),
      Z;
    return Z = JSON.stringify(r0._json(I)), f3(d, G, "/", void 0, Z)
  };
  cv0.se_DeleteIdentitiesCommand = jd5;
  var kd5 = async (I, d) => {
    let G = q3("DeleteIdentityPool"),
      Z;
    return Z = JSON.stringify(r0._json(I)), f3(d, G, "/", void 0, Z)
  };
  cv0.se_DeleteIdentityPoolCommand = kd5;
  var xd5 = async (I, d) => {
    let G = q3("DescribeIdentity"),
      Z;
    return Z = JSON.stringify(r0._json(I)), f3(d, G, "/", void 0, Z)
  };
  cv0.se_DescribeIdentityCommand = xd5;
  var cd5 = async (I, d) => {
    let G = q3("DescribeIdentityPool"),
      Z;
    return Z = JSON.stringify(r0._json(I)), f3(d, G, "/", void 0, Z)
  };
  cv0.se_DescribeIdentityPoolCommand = cd5;
  var pd5 = async (I, d) => {
    let G = q3("GetCredentialsForIdentity"),
      Z;
    return Z = JSON.stringify(r0._json(I)), f3(d, G, "/", void 0, Z)
  };
  cv0.se_GetCredentialsForIdentityCommand = pd5;
  var id5 = async (I, d) => {
    let G = q3("GetId"),
      Z;
    return Z = JSON.stringify(r0._json(I)), f3(d, G, "/", void 0, Z)
  };
  cv0.se_GetIdCommand = id5;
  var nd5 = async (I, d) => {
    let G = q3("GetIdentityPoolRoles"),
      Z;
    return Z = JSON.stringify(r0._json(I)), f3(d, G, "/", void 0, Z)
  };
  cv0.se_GetIdentityPoolRolesCommand = nd5;
  var rd5 = async (I, d) => {
    let G = q3("GetOpenIdToken"),
      Z;
    return Z = JSON.stringify(r0._json(I)), f3(d, G, "/", void 0, Z)
  };
  cv0.se_GetOpenIdTokenCommand = rd5;
  var ad5 = async (I, d) => {
    let G = q3("GetOpenIdTokenForDeveloperIdentity"),
      Z;
    return Z = JSON.stringify(r0._json(I)), f3(d, G, "/", void 0, Z)
  };
  cv0.se_GetOpenIdTokenForDeveloperIdentityCommand = ad5;
  var sd5 = async (I, d) => {
    let G = q3("GetPrincipalTagAttributeMap"),
      Z;
    return Z = JSON.stringify(r0._json(I)), f3(d, G, "/", void 0, Z)
  };
  cv0.se_GetPrincipalTagAttributeMapCommand = sd5;
  var od5 = async (I, d) => {
    let G = q3("ListIdentities"),
      Z;
    return Z = JSON.stringify(r0._json(I)), f3(d, G, "/", void 0, Z)
  };
  cv0.se_ListIdentitiesCommand = od5;
  var ed5 = async (I, d) => {
    let G = q3("ListIdentityPools"),
      Z;
    return Z = JSON.stringify(r0._json(I)), f3(d, G, "/", void 0, Z)
  };
  cv0.se_ListIdentityPoolsCommand = ed5;
  var td5 = async (I, d) => {
    let G = q3("ListTagsForResource"),
      Z;
    return Z = JSON.stringify(r0._json(I)), f3(d, G, "/", void 0, Z)
  };
  cv0.se_ListTagsForResourceCommand = td5;
  var IG5 = async (I, d) => {
    let G = q3("LookupDeveloperIdentity"),
      Z;
    return Z = JSON.stringify(r0._json(I)), f3(d, G, "/", void 0, Z)
  };
  cv0.se_LookupDeveloperIdentityCommand = IG5;
  var dG5 = async (I, d) => {
    let G = q3("MergeDeveloperIdentities"),
      Z;
    return Z = JSON.stringify(r0._json(I)), f3(d, G, "/", void 0, Z)
  };
  cv0.se_MergeDeveloperIdentitiesCommand = dG5;
  var GG5 = async (I, d) => {
    let G = q3("SetIdentityPoolRoles"),
      Z;
    return Z = JSON.stringify(r0._json(I)), f3(d, G, "/", void 0, Z)
  };
  cv0.se_SetIdentityPoolRolesCommand = GG5;
  var ZG5 = async (I, d) => {
    let G = q3("SetPrincipalTagAttributeMap"),
      Z;
    return Z = JSON.stringify(r0._json(I)), f3(d, G, "/", void 0, Z)
  };
  cv0.se_SetPrincipalTagAttributeMapCommand = ZG5;
  var CG5 = async (I, d) => {
    let G = q3("TagResource"),
      Z;
    return Z = JSON.stringify(r0._json(I)), f3(d, G, "/", void 0, Z)
  };
  cv0.se_TagResourceCommand = CG5;
  var WG5 = async (I, d) => {
    let G = q3("UnlinkDeveloperIdentity"),
      Z;
    return Z = JSON.stringify(r0._json(I)), f3(d, G, "/", void 0, Z)
  };
  cv0.se_UnlinkDeveloperIdentityCommand = WG5;
  var wG5 = async (I, d) => {
    let G = q3("UnlinkIdentity"),
      Z;
    return Z = JSON.stringify(r0._json(I)), f3(d, G, "/", void 0, Z)
  };
  cv0.se_UnlinkIdentityCommand = wG5;
  var BG5 = async (I, d) => {
    let G = q3("UntagResource"),
      Z;
    return Z = JSON.stringify(r0._json(I)), f3(d, G, "/", void 0, Z)
  };
  cv0.se_UntagResourceCommand = BG5;
  var AG5 = async (I, d) => {
    let G = q3("UpdateIdentityPool"),
      Z;
    return Z = JSON.stringify(r0._json(I)), f3(d, G, "/", void 0, Z)
  };
  cv0.se_UpdateIdentityPoolCommand = AG5;
  var VG5 = async (I, d) => {
    if (I.statusCode >= 300) return XG5(I, d);
    let G = await U6(I.body, d),
      Z = {};
    return Z = r0._json(G), {
      $metadata: J5(I),
      ...Z
    }
  };
  cv0.de_CreateIdentityPoolCommand = VG5;
  var XG5 = async (I, d) => {
    let G = {
        ...I,
        body: await R3(I.body, d)
      },
      Z = U3(I, G.body);
    switch (Z) {
      case "InternalErrorException":
      case "com.amazonaws.cognitoidentity#InternalErrorException":
        throw await K3(G, d);
      case "InvalidParameterException":
      case "com.amazonaws.cognitoidentity#InvalidParameterException":
        throw await N3(G, d);
      case "LimitExceededException":
      case "com.amazonaws.cognitoidentity#LimitExceededException":
        throw await zW1(G, d);
      case "NotAuthorizedException":
      case "com.amazonaws.cognitoidentity#NotAuthorizedException":
        throw await j3(G, d);
      case "ResourceConflictException":
      case "com.amazonaws.cognitoidentity#ResourceConflictException":
        throw await UZ(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.cognitoidentity#TooManyRequestsException":
        throw await z3(G, d);
      default:
        let C = G.body;
        return Q3({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, YG5 = async (I, d) => {
    if (I.statusCode >= 300) return _G5(I, d);
    let G = await U6(I.body, d),
      Z = {};
    return Z = r0._json(G), {
      $metadata: J5(I),
      ...Z
    }
  };
  cv0.de_DeleteIdentitiesCommand = YG5;
  var _G5 = async (I, d) => {
    let G = {
        ...I,
        body: await R3(I.body, d)
      },
      Z = U3(I, G.body);
    switch (Z) {
      case "InternalErrorException":
      case "com.amazonaws.cognitoidentity#InternalErrorException":
        throw await K3(G, d);
      case "InvalidParameterException":
      case "com.amazonaws.cognitoidentity#InvalidParameterException":
        throw await N3(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.cognitoidentity#TooManyRequestsException":
        throw await z3(G, d);
      default:
        let C = G.body;
        return Q3({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, DG5 = async (I, d) => {
    if (I.statusCode >= 300) return HG5(I, d);
    return await Dy(I.body, d), {
      $metadata: J5(I)
    }
  };
  cv0.de_DeleteIdentityPoolCommand = DG5;
  var HG5 = async (I, d) => {
    let G = {
        ...I,
        body: await R3(I.body, d)
      },
      Z = U3(I, G.body);
    switch (Z) {
      case "InternalErrorException":
      case "com.amazonaws.cognitoidentity#InternalErrorException":
        throw await K3(G, d);
      case "InvalidParameterException":
      case "com.amazonaws.cognitoidentity#InvalidParameterException":
        throw await N3(G, d);
      case "NotAuthorizedException":
      case "com.amazonaws.cognitoidentity#NotAuthorizedException":
        throw await j3(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
        throw await w6(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.cognitoidentity#TooManyRequestsException":
        throw await z3(G, d);
      default:
        let C = G.body;
        return Q3({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, FG5 = async (I, d) => {
    if (I.statusCode >= 300) return gG5(I, d);
    let G = await U6(I.body, d),
      Z = {};
    return Z = xv0(G, d), {
      $metadata: J5(I),
      ...Z
    }
  };
  cv0.de_DescribeIdentityCommand = FG5;
  var gG5 = async (I, d) => {
    let G = {
        ...I,
        body: await R3(I.body, d)
      },
      Z = U3(I, G.body);
    switch (Z) {
      case "InternalErrorException":
      case "com.amazonaws.cognitoidentity#InternalErrorException":
        throw await K3(G, d);
      case "InvalidParameterException":
      case "com.amazonaws.cognitoidentity#InvalidParameterException":
        throw await N3(G, d);
      case "NotAuthorizedException":
      case "com.amazonaws.cognitoidentity#NotAuthorizedException":
        throw await j3(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
        throw await w6(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.cognitoidentity#TooManyRequestsException":
        throw await z3(G, d);
      default:
        let C = G.body;
        return Q3({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, JG5 = async (I, d) => {
    if (I.statusCode >= 300) return KG5(I, d);
    let G = await U6(I.body, d),
      Z = {};
    return Z = r0._json(G), {
      $metadata: J5(I),
      ...Z
    }
  };
  cv0.de_DescribeIdentityPoolCommand = JG5;
  var KG5 = async (I, d) => {
    let G = {
        ...I,
        body: await R3(I.body, d)
      },
      Z = U3(I, G.body);
    switch (Z) {
      case "InternalErrorException":
      case "com.amazonaws.cognitoidentity#InternalErrorException":
        throw await K3(G, d);
      case "InvalidParameterException":
      case "com.amazonaws.cognitoidentity#InvalidParameterException":
        throw await N3(G, d);
      case "NotAuthorizedException":
      case "com.amazonaws.cognitoidentity#NotAuthorizedException":
        throw await j3(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
        throw await w6(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.cognitoidentity#TooManyRequestsException":
        throw await z3(G, d);
      default:
        let C = G.body;
        return Q3({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, NG5 = async (I, d) => {
    if (I.statusCode >= 300) return zG5(I, d);
    let G = await U6(I.body, d),
      Z = {};
    return Z = CZ5(G, d), {
      $metadata: J5(I),
      ...Z
    }
  };
  cv0.de_GetCredentialsForIdentityCommand = NG5;
  var zG5 = async (I, d) => {
    let G = {
        ...I,
        body: await R3(I.body, d)
      },
      Z = U3(I, G.body);
    switch (Z) {
      case "ExternalServiceException":
      case "com.amazonaws.cognitoidentity#ExternalServiceException":
        throw await Tp(G, d);
      case "InternalErrorException":
      case "com.amazonaws.cognitoidentity#InternalErrorException":
        throw await K3(G, d);
      case "InvalidIdentityPoolConfigurationException":
      case "com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":
        throw await GZ5(G, d);
      case "InvalidParameterException":
      case "com.amazonaws.cognitoidentity#InvalidParameterException":
        throw await N3(G, d);
      case "NotAuthorizedException":
      case "com.amazonaws.cognitoidentity#NotAuthorizedException":
        throw await j3(G, d);
      case "ResourceConflictException":
      case "com.amazonaws.cognitoidentity#ResourceConflictException":
        throw await UZ(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
        throw await w6(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.cognitoidentity#TooManyRequestsException":
        throw await z3(G, d);
      default:
        let C = G.body;
        return Q3({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, QG5 = async (I, d) => {
    if (I.statusCode >= 300) return fG5(I, d);
    let G = await U6(I.body, d),
      Z = {};
    return Z = r0._json(G), {
      $metadata: J5(I),
      ...Z
    }
  };
  cv0.de_GetIdCommand = QG5;
  var fG5 = async (I, d) => {
    let G = {
        ...I,
        body: await R3(I.body, d)
      },
      Z = U3(I, G.body);
    switch (Z) {
      case "ExternalServiceException":
      case "com.amazonaws.cognitoidentity#ExternalServiceException":
        throw await Tp(G, d);
      case "InternalErrorException":
      case "com.amazonaws.cognitoidentity#InternalErrorException":
        throw await K3(G, d);
      case "InvalidParameterException":
      case "com.amazonaws.cognitoidentity#InvalidParameterException":
        throw await N3(G, d);
      case "LimitExceededException":
      case "com.amazonaws.cognitoidentity#LimitExceededException":
        throw await zW1(G, d);
      case "NotAuthorizedException":
      case "com.amazonaws.cognitoidentity#NotAuthorizedException":
        throw await j3(G, d);
      case "ResourceConflictException":
      case "com.amazonaws.cognitoidentity#ResourceConflictException":
        throw await UZ(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
        throw await w6(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.cognitoidentity#TooManyRequestsException":
        throw await z3(G, d);
      default:
        let C = G.body;
        return Q3({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, qG5 = async (I, d) => {
    if (I.statusCode >= 300) return RG5(I, d);
    let G = await U6(I.body, d),
      Z = {};
    return Z = r0._json(G), {
      $metadata: J5(I),
      ...Z
    }
  };
  cv0.de_GetIdentityPoolRolesCommand = qG5;
  var RG5 = async (I, d) => {
    let G = {
        ...I,
        body: await R3(I.body, d)
      },
      Z = U3(I, G.body);
    switch (Z) {
      case "InternalErrorException":
      case "com.amazonaws.cognitoidentity#InternalErrorException":
        throw await K3(G, d);
      case "InvalidParameterException":
      case "com.amazonaws.cognitoidentity#InvalidParameterException":
        throw await N3(G, d);
      case "NotAuthorizedException":
      case "com.amazonaws.cognitoidentity#NotAuthorizedException":
        throw await j3(G, d);
      case "ResourceConflictException":
      case "com.amazonaws.cognitoidentity#ResourceConflictException":
        throw await UZ(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
        throw await w6(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.cognitoidentity#TooManyRequestsException":
        throw await z3(G, d);
      default:
        let C = G.body;
        return Q3({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, UG5 = async (I, d) => {
    if (I.statusCode >= 300) return vG5(I, d);
    let G = await U6(I.body, d),
      Z = {};
    return Z = r0._json(G), {
      $metadata: J5(I),
      ...Z
    }
  };
  cv0.de_GetOpenIdTokenCommand = UG5;
  var vG5 = async (I, d) => {
    let G = {
        ...I,
        body: await R3(I.body, d)
      },
      Z = U3(I, G.body);
    switch (Z) {
      case "ExternalServiceException":
      case "com.amazonaws.cognitoidentity#ExternalServiceException":
        throw await Tp(G, d);
      case "InternalErrorException":
      case "com.amazonaws.cognitoidentity#InternalErrorException":
        throw await K3(G, d);
      case "InvalidParameterException":
      case "com.amazonaws.cognitoidentity#InvalidParameterException":
        throw await N3(G, d);
      case "NotAuthorizedException":
      case "com.amazonaws.cognitoidentity#NotAuthorizedException":
        throw await j3(G, d);
      case "ResourceConflictException":
      case "com.amazonaws.cognitoidentity#ResourceConflictException":
        throw await UZ(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
        throw await w6(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.cognitoidentity#TooManyRequestsException":
        throw await z3(G, d);
      default:
        let C = G.body;
        return Q3({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, EG5 = async (I, d) => {
    if (I.statusCode >= 300) return MG5(I, d);
    let G = await U6(I.body, d),
      Z = {};
    return Z = r0._json(G), {
      $metadata: J5(I),
      ...Z
    }
  };
  cv0.de_GetOpenIdTokenForDeveloperIdentityCommand = EG5;
  var MG5 = async (I, d) => {
    let G = {
        ...I,
        body: await R3(I.body, d)
      },
      Z = U3(I, G.body);
    switch (Z) {
      case "DeveloperUserAlreadyRegisteredException":
      case "com.amazonaws.cognitoidentity#DeveloperUserAlreadyRegisteredException":
        throw await dZ5(G, d);
      case "InternalErrorException":
      case "com.amazonaws.cognitoidentity#InternalErrorException":
        throw await K3(G, d);
      case "InvalidParameterException":
      case "com.amazonaws.cognitoidentity#InvalidParameterException":
        throw await N3(G, d);
      case "NotAuthorizedException":
      case "com.amazonaws.cognitoidentity#NotAuthorizedException":
        throw await j3(G, d);
      case "ResourceConflictException":
      case "com.amazonaws.cognitoidentity#ResourceConflictException":
        throw await UZ(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
        throw await w6(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.cognitoidentity#TooManyRequestsException":
        throw await z3(G, d);
      default:
        let C = G.body;
        return Q3({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, SG5 = async (I, d) => {
    if (I.statusCode >= 300) return LG5(I, d);
    let G = await U6(I.body, d),
      Z = {};
    return Z = r0._json(G), {
      $metadata: J5(I),
      ...Z
    }
  };
  cv0.de_GetPrincipalTagAttributeMapCommand = SG5;
  var LG5 = async (I, d) => {
    let G = {
        ...I,
        body: await R3(I.body, d)
      },
      Z = U3(I, G.body);
    switch (Z) {
      case "InternalErrorException":
      case "com.amazonaws.cognitoidentity#InternalErrorException":
        throw await K3(G, d);
      case "InvalidParameterException":
      case "com.amazonaws.cognitoidentity#InvalidParameterException":
        throw await N3(G, d);
      case "NotAuthorizedException":
      case "com.amazonaws.cognitoidentity#NotAuthorizedException":
        throw await j3(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
        throw await w6(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.cognitoidentity#TooManyRequestsException":
        throw await z3(G, d);
      default:
        let C = G.body;
        return Q3({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, yG5 = async (I, d) => {
    if (I.statusCode >= 300) return PG5(I, d);
    let G = await U6(I.body, d),
      Z = {};
    return Z = wZ5(G, d), {
      $metadata: J5(I),
      ...Z
    }
  };
  cv0.de_ListIdentitiesCommand = yG5;
  var PG5 = async (I, d) => {
    let G = {
        ...I,
        body: await R3(I.body, d)
      },
      Z = U3(I, G.body);
    switch (Z) {
      case "InternalErrorException":
      case "com.amazonaws.cognitoidentity#InternalErrorException":
        throw await K3(G, d);
      case "InvalidParameterException":
      case "com.amazonaws.cognitoidentity#InvalidParameterException":
        throw await N3(G, d);
      case "NotAuthorizedException":
      case "com.amazonaws.cognitoidentity#NotAuthorizedException":
        throw await j3(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
        throw await w6(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.cognitoidentity#TooManyRequestsException":
        throw await z3(G, d);
      default:
        let C = G.body;
        return Q3({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, $G5 = async (I, d) => {
    if (I.statusCode >= 300) return uG5(I, d);
    let G = await U6(I.body, d),
      Z = {};
    return Z = r0._json(G), {
      $metadata: J5(I),
      ...Z
    }
  };
  cv0.de_ListIdentityPoolsCommand = $G5;
  var uG5 = async (I, d) => {
    let G = {
        ...I,
        body: await R3(I.body, d)
      },
      Z = U3(I, G.body);
    switch (Z) {
      case "InternalErrorException":
      case "com.amazonaws.cognitoidentity#InternalErrorException":
        throw await K3(G, d);
      case "InvalidParameterException":
      case "com.amazonaws.cognitoidentity#InvalidParameterException":
        throw await N3(G, d);
      case "NotAuthorizedException":
      case "com.amazonaws.cognitoidentity#NotAuthorizedException":
        throw await j3(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
        throw await w6(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.cognitoidentity#TooManyRequestsException":
        throw await z3(G, d);
      default:
        let C = G.body;
        return Q3({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, TG5 = async (I, d) => {
    if (I.statusCode >= 300) return OG5(I, d);
    let G = await U6(I.body, d),
      Z = {};
    return Z = r0._json(G), {
      $metadata: J5(I),
      ...Z
    }
  };
  cv0.de_ListTagsForResourceCommand = TG5;
  var OG5 = async (I, d) => {
    let G = {
        ...I,
        body: await R3(I.body, d)
      },
      Z = U3(I, G.body);
    switch (Z) {
      case "InternalErrorException":
      case "com.amazonaws.cognitoidentity#InternalErrorException":
        throw await K3(G, d);
      case "InvalidParameterException":
      case "com.amazonaws.cognitoidentity#InvalidParameterException":
        throw await N3(G, d);
      case "NotAuthorizedException":
      case "com.amazonaws.cognitoidentity#NotAuthorizedException":
        throw await j3(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
        throw await w6(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.cognitoidentity#TooManyRequestsException":
        throw await z3(G, d);
      default:
        let C = G.body;
        return Q3({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, mG5 = async (I, d) => {
    if (I.statusCode >= 300) return lG5(I, d);
    let G = await U6(I.body, d),
      Z = {};
    return Z = r0._json(G), {
      $metadata: J5(I),
      ...Z
    }
  };
  cv0.de_LookupDeveloperIdentityCommand = mG5;
  var lG5 = async (I, d) => {
    let G = {
        ...I,
        body: await R3(I.body, d)
      },
      Z = U3(I, G.body);
    switch (Z) {
      case "InternalErrorException":
      case "com.amazonaws.cognitoidentity#InternalErrorException":
        throw await K3(G, d);
      case "InvalidParameterException":
      case "com.amazonaws.cognitoidentity#InvalidParameterException":
        throw await N3(G, d);
      case "NotAuthorizedException":
      case "com.amazonaws.cognitoidentity#NotAuthorizedException":
        throw await j3(G, d);
      case "ResourceConflictException":
      case "com.amazonaws.cognitoidentity#ResourceConflictException":
        throw await UZ(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
        throw await w6(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.cognitoidentity#TooManyRequestsException":
        throw await z3(G, d);
      default:
        let C = G.body;
        return Q3({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, bG5 = async (I, d) => {
    if (I.statusCode >= 300) return hG5(I, d);
    let G = await U6(I.body, d),
      Z = {};
    return Z = r0._json(G), {
      $metadata: J5(I),
      ...Z
    }
  };
  cv0.de_MergeDeveloperIdentitiesCommand = bG5;
  var hG5 = async (I, d) => {
    let G = {
        ...I,
        body: await R3(I.body, d)
      },
      Z = U3(I, G.body);
    switch (Z) {
      case "InternalErrorException":
      case "com.amazonaws.cognitoidentity#InternalErrorException":
        throw await K3(G, d);
      case "InvalidParameterException":
      case "com.amazonaws.cognitoidentity#InvalidParameterException":
        throw await N3(G, d);
      case "NotAuthorizedException":
      case "com.amazonaws.cognitoidentity#NotAuthorizedException":
        throw await j3(G, d);
      case "ResourceConflictException":
      case "com.amazonaws.cognitoidentity#ResourceConflictException":
        throw await UZ(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
        throw await w6(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.cognitoidentity#TooManyRequestsException":
        throw await z3(G, d);
      default:
        let C = G.body;
        return Q3({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, jG5 = async (I, d) => {
    if (I.statusCode >= 300) return kG5(I, d);
    return await Dy(I.body, d), {
      $metadata: J5(I)
    }
  };
  cv0.de_SetIdentityPoolRolesCommand = jG5;
  var kG5 = async (I, d) => {
    let G = {
        ...I,
        body: await R3(I.body, d)
      },
      Z = U3(I, G.body);
    switch (Z) {
      case "ConcurrentModificationException":
      case "com.amazonaws.cognitoidentity#ConcurrentModificationException":
        throw await kv0(G, d);
      case "InternalErrorException":
      case "com.amazonaws.cognitoidentity#InternalErrorException":
        throw await K3(G, d);
      case "InvalidParameterException":
      case "com.amazonaws.cognitoidentity#InvalidParameterException":
        throw await N3(G, d);
      case "NotAuthorizedException":
      case "com.amazonaws.cognitoidentity#NotAuthorizedException":
        throw await j3(G, d);
      case "ResourceConflictException":
      case "com.amazonaws.cognitoidentity#ResourceConflictException":
        throw await UZ(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
        throw await w6(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.cognitoidentity#TooManyRequestsException":
        throw await z3(G, d);
      default:
        let C = G.body;
        return Q3({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, xG5 = async (I, d) => {
    if (I.statusCode >= 300) return cG5(I, d);
    let G = await U6(I.body, d),
      Z = {};
    return Z = r0._json(G), {
      $metadata: J5(I),
      ...Z
    }
  };
  cv0.de_SetPrincipalTagAttributeMapCommand = xG5;
  var cG5 = async (I, d) => {
    let G = {
        ...I,
        body: await R3(I.body, d)
      },
      Z = U3(I, G.body);
    switch (Z) {
      case "InternalErrorException":
      case "com.amazonaws.cognitoidentity#InternalErrorException":
        throw await K3(G, d);
      case "InvalidParameterException":
      case "com.amazonaws.cognitoidentity#InvalidParameterException":
        throw await N3(G, d);
      case "NotAuthorizedException":
      case "com.amazonaws.cognitoidentity#NotAuthorizedException":
        throw await j3(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
        throw await w6(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.cognitoidentity#TooManyRequestsException":
        throw await z3(G, d);
      default:
        let C = G.body;
        return Q3({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, pG5 = async (I, d) => {
    if (I.statusCode >= 300) return iG5(I, d);
    let G = await U6(I.body, d),
      Z = {};
    return Z = r0._json(G), {
      $metadata: J5(I),
      ...Z
    }
  };
  cv0.de_TagResourceCommand = pG5;
  var iG5 = async (I, d) => {
    let G = {
        ...I,
        body: await R3(I.body, d)
      },
      Z = U3(I, G.body);
    switch (Z) {
      case "InternalErrorException":
      case "com.amazonaws.cognitoidentity#InternalErrorException":
        throw await K3(G, d);
      case "InvalidParameterException":
      case "com.amazonaws.cognitoidentity#InvalidParameterException":
        throw await N3(G, d);
      case "NotAuthorizedException":
      case "com.amazonaws.cognitoidentity#NotAuthorizedException":
        throw await j3(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
        throw await w6(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.cognitoidentity#TooManyRequestsException":
        throw await z3(G, d);
      default:
        let C = G.body;
        return Q3({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, nG5 = async (I, d) => {
    if (I.statusCode >= 300) return rG5(I, d);
    return await Dy(I.body, d), {
      $metadata: J5(I)
    }
  };
  cv0.de_UnlinkDeveloperIdentityCommand = nG5;
  var rG5 = async (I, d) => {
    let G = {
        ...I,
        body: await R3(I.body, d)
      },
      Z = U3(I, G.body);
    switch (Z) {
      case "InternalErrorException":
      case "com.amazonaws.cognitoidentity#InternalErrorException":
        throw await K3(G, d);
      case "InvalidParameterException":
      case "com.amazonaws.cognitoidentity#InvalidParameterException":
        throw await N3(G, d);
      case "NotAuthorizedException":
      case "com.amazonaws.cognitoidentity#NotAuthorizedException":
        throw await j3(G, d);
      case "ResourceConflictException":
      case "com.amazonaws.cognitoidentity#ResourceConflictException":
        throw await UZ(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
        throw await w6(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.cognitoidentity#TooManyRequestsException":
        throw await z3(G, d);
      default:
        let C = G.body;
        return Q3({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, aG5 = async (I, d) => {
    if (I.statusCode >= 300) return sG5(I, d);
    return await Dy(I.body, d), {
      $metadata: J5(I)
    }
  };
  cv0.de_UnlinkIdentityCommand = aG5;
  var sG5 = async (I, d) => {
    let G = {
        ...I,
        body: await R3(I.body, d)
      },
      Z = U3(I, G.body);
    switch (Z) {
      case "ExternalServiceException":
      case "com.amazonaws.cognitoidentity#ExternalServiceException":
        throw await Tp(G, d);
      case "InternalErrorException":
      case "com.amazonaws.cognitoidentity#InternalErrorException":
        throw await K3(G, d);
      case "InvalidParameterException":
      case "com.amazonaws.cognitoidentity#InvalidParameterException":
        throw await N3(G, d);
      case "NotAuthorizedException":
      case "com.amazonaws.cognitoidentity#NotAuthorizedException":
        throw await j3(G, d);
      case "ResourceConflictException":
      case "com.amazonaws.cognitoidentity#ResourceConflictException":
        throw await UZ(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
        throw await w6(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.cognitoidentity#TooManyRequestsException":
        throw await z3(G, d);
      default:
        let C = G.body;
        return Q3({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, oG5 = async (I, d) => {
    if (I.statusCode >= 300) return eG5(I, d);
    let G = await U6(I.body, d),
      Z = {};
    return Z = r0._json(G), {
      $metadata: J5(I),
      ...Z
    }
  };
  cv0.de_UntagResourceCommand = oG5;
  var eG5 = async (I, d) => {
    let G = {
        ...I,
        body: await R3(I.body, d)
      },
      Z = U3(I, G.body);
    switch (Z) {
      case "InternalErrorException":
      case "com.amazonaws.cognitoidentity#InternalErrorException":
        throw await K3(G, d);
      case "InvalidParameterException":
      case "com.amazonaws.cognitoidentity#InvalidParameterException":
        throw await N3(G, d);
      case "NotAuthorizedException":
      case "com.amazonaws.cognitoidentity#NotAuthorizedException":
        throw await j3(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
        throw await w6(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.cognitoidentity#TooManyRequestsException":
        throw await z3(G, d);
      default:
        let C = G.body;
        return Q3({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, tG5 = async (I, d) => {
    if (I.statusCode >= 300) return IZ5(I, d);
    let G = await U6(I.body, d),
      Z = {};
    return Z = r0._json(G), {
      $metadata: J5(I),
      ...Z
    }
  };
  cv0.de_UpdateIdentityPoolCommand = tG5;
  var IZ5 = async (I, d) => {
    let G = {
        ...I,
        body: await R3(I.body, d)
      },
      Z = U3(I, G.body);
    switch (Z) {
      case "ConcurrentModificationException":
      case "com.amazonaws.cognitoidentity#ConcurrentModificationException":
        throw await kv0(G, d);
      case "InternalErrorException":
      case "com.amazonaws.cognitoidentity#InternalErrorException":
        throw await K3(G, d);
      case "InvalidParameterException":
      case "com.amazonaws.cognitoidentity#InvalidParameterException":
        throw await N3(G, d);
      case "LimitExceededException":
      case "com.amazonaws.cognitoidentity#LimitExceededException":
        throw await zW1(G, d);
      case "NotAuthorizedException":
      case "com.amazonaws.cognitoidentity#NotAuthorizedException":
        throw await j3(G, d);
      case "ResourceConflictException":
      case "com.amazonaws.cognitoidentity#ResourceConflictException":
        throw await UZ(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
        throw await w6(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.cognitoidentity#TooManyRequestsException":
        throw await z3(G, d);
      default:
        let C = G.body;
        return Q3({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, kv0 = async (I, d) => {
    let G = I.body,
      Z = r0._json(G),
      C = new cC.ConcurrentModificationException({
        $metadata: J5(I),
        ...Z
      });
    return r0.decorateServiceException(C, G)
  }, dZ5 = async (I, d) => {
    let G = I.body,
      Z = r0._json(G),
      C = new cC.DeveloperUserAlreadyRegisteredException({
        $metadata: J5(I),
        ...Z
      });
    return r0.decorateServiceException(C, G)
  }, Tp = async (I, d) => {
    let G = I.body,
      Z = r0._json(G),
      C = new cC.ExternalServiceException({
        $metadata: J5(I),
        ...Z
      });
    return r0.decorateServiceException(C, G)
  }, K3 = async (I, d) => {
    let G = I.body,
      Z = r0._json(G),
      C = new cC.InternalErrorException({
        $metadata: J5(I),
        ...Z
      });
    return r0.decorateServiceException(C, G)
  }, GZ5 = async (I, d) => {
    let G = I.body,
      Z = r0._json(G),
      C = new cC.InvalidIdentityPoolConfigurationException({
        $metadata: J5(I),
        ...Z
      });
    return r0.decorateServiceException(C, G)
  }, N3 = async (I, d) => {
    let G = I.body,
      Z = r0._json(G),
      C = new cC.InvalidParameterException({
        $metadata: J5(I),
        ...Z
      });
    return r0.decorateServiceException(C, G)
  }, zW1 = async (I, d) => {
    let G = I.body,
      Z = r0._json(G),
      C = new cC.LimitExceededException({
        $metadata: J5(I),
        ...Z
      });
    return r0.decorateServiceException(C, G)
  }, j3 = async (I, d) => {
    let G = I.body,
      Z = r0._json(G),
      C = new cC.NotAuthorizedException({
        $metadata: J5(I),
        ...Z
      });
    return r0.decorateServiceException(C, G)
  }, UZ = async (I, d) => {
    let G = I.body,
      Z = r0._json(G),
      C = new cC.ResourceConflictException({
        $metadata: J5(I),
        ...Z
      });
    return r0.decorateServiceException(C, G)
  }, w6 = async (I, d) => {
    let G = I.body,
      Z = r0._json(G),
      C = new cC.ResourceNotFoundException({
        $metadata: J5(I),
        ...Z
      });
    return r0.decorateServiceException(C, G)
  }, z3 = async (I, d) => {
    let G = I.body,
      Z = r0._json(G),
      C = new cC.TooManyRequestsException({
        $metadata: J5(I),
        ...Z
      });
    return r0.decorateServiceException(C, G)
  }, ZZ5 = (I, d) => {
    return r0.take(I, {
      AccessKeyId: r0.expectString,
      Expiration: (G) => r0.expectNonNull(r0.parseEpochTimestamp(r0.expectNumber(G))),
      SecretKey: r0.expectString,
      SessionToken: r0.expectString
    })
  }, CZ5 = (I, d) => {
    return r0.take(I, {
      Credentials: (G) => ZZ5(G, d),
      IdentityId: r0.expectString
    })
  }, WZ5 = (I, d) => {
    return (I || []).filter((Z) => Z != null).map((Z) => {
      return xv0(Z, d)
    })
  }, xv0 = (I, d) => {
    return r0.take(I, {
      CreationDate: (G) => r0.expectNonNull(r0.parseEpochTimestamp(r0.expectNumber(G))),
      IdentityId: r0.expectString,
      LastModifiedDate: (G) => r0.expectNonNull(r0.parseEpochTimestamp(r0.expectNumber(G))),
      Logins: r0._json
    })
  }, wZ5 = (I, d) => {
    return r0.take(I, {
      Identities: (G) => WZ5(G, d),
      IdentityPoolId: r0.expectString,
      NextToken: r0.expectString
    })
  }, J5 = (I) => ({
    httpStatusCode: I.statusCode,
    requestId: I.headers["x-amzn-requestid"] ?? I.headers["x-amzn-request-id"] ?? I.headers["x-amz-request-id"],
    extendedRequestId: I.headers["x-amz-id-2"],
    cfId: I.headers["x-amz-cf-id"]
  }), Dy = (I = new Uint8Array, d) => {
    if (I instanceof Uint8Array) return Promise.resolve(I);
    return d.streamCollector(I) || Promise.resolve(new Uint8Array)
  }, BZ5 = (I, d) => Dy(I, d).then((G) => d.utf8Encoder(G)), Q3 = r0.withBaseException(bd5.CognitoIdentityServiceException), f3 = async (I, d, G, Z, C) => {
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
    return new ld5.HttpRequest(V)
  };

  function q3(I) {
    return {
      "content-type": "application/x-amz-json-1.1",
      "x-amz-target": `AWSCognitoIdentityService.${I}`
    }
  }
  var U6 = (I, d) => BZ5(I, d).then((G) => {
      if (G.length) return JSON.parse(G);
      return {}
    }),
    R3 = async (I, d) => {
      let G = await U6(I, d);
      return G.message = G.message ?? G.Message, G
    }, U3 = (I, d) => {
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
// @from(Start 2848484, End 2850305)
qW1 = Y((fW1) => {
  Object.defineProperty(fW1, "__esModule", {
    value: !0
  });
  fW1.CreateIdentityPoolCommand = fW1.$Command = void 0;
  var tZ5 = u2(),
    IC5 = r2(),
    dC5 = A9(),
    nv0 = v0();
  Object.defineProperty(fW1, "$Command", {
    enumerable: !0,
    get: function() {
      return nv0.Command
    }
  });
  var iv0 = W3();
  class QW1 extends nv0.Command {
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
      this.middlewareStack.use(IC5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(tZ5.getEndpointPlugin(d, QW1.getEndpointParameterInstructions())), this.middlewareStack.use(dC5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "CognitoIdentityClient",
          commandName: "CreateIdentityPoolCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return iv0.se_CreateIdentityPoolCommand(I, d)
    }
    deserialize(I, d) {
      return iv0.de_CreateIdentityPoolCommand(I, d)
    }
  }
  fW1.CreateIdentityPoolCommand = QW1
})
// @from(Start 2850311, End 2852122)
vW1 = Y((UW1) => {
  Object.defineProperty(UW1, "__esModule", {
    value: !0
  });
  UW1.DeleteIdentitiesCommand = UW1.$Command = void 0;
  var GC5 = u2(),
    ZC5 = r2(),
    CC5 = A9(),
    sv0 = v0();
  Object.defineProperty(UW1, "$Command", {
    enumerable: !0,
    get: function() {
      return sv0.Command
    }
  });
  var av0 = W3();
  class RW1 extends sv0.Command {
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
      this.middlewareStack.use(ZC5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(GC5.getEndpointPlugin(d, RW1.getEndpointParameterInstructions())), this.middlewareStack.use(CC5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "CognitoIdentityClient",
          commandName: "DeleteIdentitiesCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return av0.se_DeleteIdentitiesCommand(I, d)
    }
    deserialize(I, d) {
      return av0.de_DeleteIdentitiesCommand(I, d)
    }
  }
  UW1.DeleteIdentitiesCommand = RW1
})
// @from(Start 2852128, End 2853949)
SW1 = Y((MW1) => {
  Object.defineProperty(MW1, "__esModule", {
    value: !0
  });
  MW1.DeleteIdentityPoolCommand = MW1.$Command = void 0;
  var WC5 = u2(),
    wC5 = r2(),
    BC5 = A9(),
    tv0 = v0();
  Object.defineProperty(MW1, "$Command", {
    enumerable: !0,
    get: function() {
      return tv0.Command
    }
  });
  var ev0 = W3();
  class EW1 extends tv0.Command {
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
      this.middlewareStack.use(wC5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(WC5.getEndpointPlugin(d, EW1.getEndpointParameterInstructions())), this.middlewareStack.use(BC5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "CognitoIdentityClient",
          commandName: "DeleteIdentityPoolCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return ev0.se_DeleteIdentityPoolCommand(I, d)
    }
    deserialize(I, d) {
      return ev0.de_DeleteIdentityPoolCommand(I, d)
    }
  }
  MW1.DeleteIdentityPoolCommand = EW1
})
// @from(Start 2853955, End 2855766)
PW1 = Y((yW1) => {
  Object.defineProperty(yW1, "__esModule", {
    value: !0
  });
  yW1.DescribeIdentityCommand = yW1.$Command = void 0;
  var AC5 = u2(),
    VC5 = r2(),
    XC5 = A9(),
    GE0 = v0();
  Object.defineProperty(yW1, "$Command", {
    enumerable: !0,
    get: function() {
      return GE0.Command
    }
  });
  var dE0 = W3();
  class LW1 extends GE0.Command {
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
      this.middlewareStack.use(VC5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(AC5.getEndpointPlugin(d, LW1.getEndpointParameterInstructions())), this.middlewareStack.use(XC5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "CognitoIdentityClient",
          commandName: "DescribeIdentityCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return dE0.se_DescribeIdentityCommand(I, d)
    }
    deserialize(I, d) {
      return dE0.de_DescribeIdentityCommand(I, d)
    }
  }
  yW1.DescribeIdentityCommand = LW1
})
// @from(Start 2855772, End 2857603)
TW1 = Y((uW1) => {
  Object.defineProperty(uW1, "__esModule", {
    value: !0
  });
  uW1.DescribeIdentityPoolCommand = uW1.$Command = void 0;
  var YC5 = u2(),
    _C5 = r2(),
    DC5 = A9(),
    WE0 = v0();
  Object.defineProperty(uW1, "$Command", {
    enumerable: !0,
    get: function() {
      return WE0.Command
    }
  });
  var CE0 = W3();
  class $W1 extends WE0.Command {
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
      this.middlewareStack.use(_C5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(YC5.getEndpointPlugin(d, $W1.getEndpointParameterInstructions())), this.middlewareStack.use(DC5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "CognitoIdentityClient",
          commandName: "DescribeIdentityPoolCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return CE0.se_DescribeIdentityPoolCommand(I, d)
    }
    deserialize(I, d) {
      return CE0.de_DescribeIdentityPoolCommand(I, d)
    }
  }
  uW1.DescribeIdentityPoolCommand = $W1
})
// @from(Start 2857609, End 2859398)
lW1 = Y((mW1) => {
  Object.defineProperty(mW1, "__esModule", {
    value: !0
  });
  mW1.GetCredentialsForIdentityCommand = mW1.$Command = void 0;
  var HC5 = u2(),
    FC5 = r2(),
    AE0 = v0();
  Object.defineProperty(mW1, "$Command", {
    enumerable: !0,
    get: function() {
      return AE0.Command
    }
  });
  var BE0 = W3();
  class OW1 extends AE0.Command {
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
      this.middlewareStack.use(FC5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(HC5.getEndpointPlugin(d, OW1.getEndpointParameterInstructions()));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "CognitoIdentityClient",
          commandName: "GetCredentialsForIdentityCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return BE0.se_GetCredentialsForIdentityCommand(I, d)
    }
    deserialize(I, d) {
      return BE0.de_GetCredentialsForIdentityCommand(I, d)
    }
  }
  mW1.GetCredentialsForIdentityCommand = OW1
})
// @from(Start 2859404, End 2861093)
jW1 = Y((hW1) => {
  Object.defineProperty(hW1, "__esModule", {
    value: !0
  });
  hW1.GetIdCommand = hW1.$Command = void 0;
  var gC5 = u2(),
    JC5 = r2(),
    YE0 = v0();
  Object.defineProperty(hW1, "$Command", {
    enumerable: !0,
    get: function() {
      return YE0.Command
    }
  });
  var XE0 = W3();
  class bW1 extends YE0.Command {
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
      this.middlewareStack.use(JC5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(gC5.getEndpointPlugin(d, bW1.getEndpointParameterInstructions()));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "CognitoIdentityClient",
          commandName: "GetIdCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return XE0.se_GetIdCommand(I, d)
    }
    deserialize(I, d) {
      return XE0.de_GetIdCommand(I, d)
    }
  }
  hW1.GetIdCommand = bW1
})
// @from(Start 2861099, End 2862930)
cW1 = Y((xW1) => {
  Object.defineProperty(xW1, "__esModule", {
    value: !0
  });
  xW1.GetIdentityPoolRolesCommand = xW1.$Command = void 0;
  var KC5 = u2(),
    NC5 = r2(),
    zC5 = A9(),
    HE0 = v0();
  Object.defineProperty(xW1, "$Command", {
    enumerable: !0,
    get: function() {
      return HE0.Command
    }
  });
  var DE0 = W3();
  class kW1 extends HE0.Command {
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
      this.middlewareStack.use(NC5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(KC5.getEndpointPlugin(d, kW1.getEndpointParameterInstructions())), this.middlewareStack.use(zC5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "CognitoIdentityClient",
          commandName: "GetIdentityPoolRolesCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return DE0.se_GetIdentityPoolRolesCommand(I, d)
    }
    deserialize(I, d) {
      return DE0.de_GetIdentityPoolRolesCommand(I, d)
    }
  }
  xW1.GetIdentityPoolRolesCommand = kW1
})
// @from(Start 2862936, End 2864670)
nW1 = Y((iW1) => {
  Object.defineProperty(iW1, "__esModule", {
    value: !0
  });
  iW1.GetOpenIdTokenCommand = iW1.$Command = void 0;
  var QC5 = u2(),
    fC5 = r2(),
    JE0 = v0();
  Object.defineProperty(iW1, "$Command", {
    enumerable: !0,
    get: function() {
      return JE0.Command
    }
  });
  var gE0 = W3();
  class pW1 extends JE0.Command {
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
      this.middlewareStack.use(fC5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(QC5.getEndpointPlugin(d, pW1.getEndpointParameterInstructions()));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "CognitoIdentityClient",
          commandName: "GetOpenIdTokenCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return gE0.se_GetOpenIdTokenCommand(I, d)
    }
    deserialize(I, d) {
      return gE0.de_GetOpenIdTokenCommand(I, d)
    }
  }
  iW1.GetOpenIdTokenCommand = pW1
})
// @from(Start 2864676, End 2866577)
sW1 = Y((aW1) => {
  Object.defineProperty(aW1, "__esModule", {
    value: !0
  });
  aW1.GetOpenIdTokenForDeveloperIdentityCommand = aW1.$Command = void 0;
  var qC5 = u2(),
    RC5 = r2(),
    UC5 = A9(),
    zE0 = v0();
  Object.defineProperty(aW1, "$Command", {
    enumerable: !0,
    get: function() {
      return zE0.Command
    }
  });
  var NE0 = W3();
  class rW1 extends zE0.Command {
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
      this.middlewareStack.use(RC5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(qC5.getEndpointPlugin(d, rW1.getEndpointParameterInstructions())), this.middlewareStack.use(UC5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "CognitoIdentityClient",
          commandName: "GetOpenIdTokenForDeveloperIdentityCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return NE0.se_GetOpenIdTokenForDeveloperIdentityCommand(I, d)
    }
    deserialize(I, d) {
      return NE0.de_GetOpenIdTokenForDeveloperIdentityCommand(I, d)
    }
  }
  aW1.GetOpenIdTokenForDeveloperIdentityCommand = rW1
})
// @from(Start 2866583, End 2868449)
tW1 = Y((eW1) => {
  Object.defineProperty(eW1, "__esModule", {
    value: !0
  });
  eW1.GetPrincipalTagAttributeMapCommand = eW1.$Command = void 0;
  var vC5 = u2(),
    EC5 = r2(),
    MC5 = A9(),
    qE0 = v0();
  Object.defineProperty(eW1, "$Command", {
    enumerable: !0,
    get: function() {
      return qE0.Command
    }
  });
  var fE0 = W3();
  class oW1 extends qE0.Command {
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
      this.middlewareStack.use(EC5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(vC5.getEndpointPlugin(d, oW1.getEndpointParameterInstructions())), this.middlewareStack.use(MC5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "CognitoIdentityClient",
          commandName: "GetPrincipalTagAttributeMapCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return fE0.se_GetPrincipalTagAttributeMapCommand(I, d)
    }
    deserialize(I, d) {
      return fE0.de_GetPrincipalTagAttributeMapCommand(I, d)
    }
  }
  eW1.GetPrincipalTagAttributeMapCommand = oW1
})
// @from(Start 2868455, End 2870256)
Gw1 = Y((dw1) => {
  Object.defineProperty(dw1, "__esModule", {
    value: !0
  });
  dw1.ListIdentitiesCommand = dw1.$Command = void 0;
  var SC5 = u2(),
    LC5 = r2(),
    yC5 = A9(),
    vE0 = v0();
  Object.defineProperty(dw1, "$Command", {
    enumerable: !0,
    get: function() {
      return vE0.Command
    }
  });
  var UE0 = W3();
  class Iw1 extends vE0.Command {
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
      this.middlewareStack.use(LC5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(SC5.getEndpointPlugin(d, Iw1.getEndpointParameterInstructions())), this.middlewareStack.use(yC5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "CognitoIdentityClient",
          commandName: "ListIdentitiesCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return UE0.se_ListIdentitiesCommand(I, d)
    }
    deserialize(I, d) {
      return UE0.de_ListIdentitiesCommand(I, d)
    }
  }
  dw1.ListIdentitiesCommand = Iw1
})
// @from(Start 2870262, End 2872077)
Op = Y((Cw1) => {
  Object.defineProperty(Cw1, "__esModule", {
    value: !0
  });
  Cw1.ListIdentityPoolsCommand = Cw1.$Command = void 0;
  var PC5 = u2(),
    $C5 = r2(),
    uC5 = A9(),
    SE0 = v0();
  Object.defineProperty(Cw1, "$Command", {
    enumerable: !0,
    get: function() {
      return SE0.Command
    }
  });
  var ME0 = W3();
  class Zw1 extends SE0.Command {
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
      this.middlewareStack.use($C5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(PC5.getEndpointPlugin(d, Zw1.getEndpointParameterInstructions())), this.middlewareStack.use(uC5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "CognitoIdentityClient",
          commandName: "ListIdentityPoolsCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return ME0.se_ListIdentityPoolsCommand(I, d)
    }
    deserialize(I, d) {
      return ME0.de_ListIdentityPoolsCommand(I, d)
    }
  }
  Cw1.ListIdentityPoolsCommand = Zw1
})
// @from(Start 2872083, End 2873909)
Bw1 = Y((ww1) => {
  Object.defineProperty(ww1, "__esModule", {
    value: !0
  });
  ww1.ListTagsForResourceCommand = ww1.$Command = void 0;
  var TC5 = u2(),
    OC5 = r2(),
    mC5 = A9(),
    PE0 = v0();
  Object.defineProperty(ww1, "$Command", {
    enumerable: !0,
    get: function() {
      return PE0.Command
    }
  });
  var yE0 = W3();
  class Ww1 extends PE0.Command {
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
      this.middlewareStack.use(OC5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(TC5.getEndpointPlugin(d, Ww1.getEndpointParameterInstructions())), this.middlewareStack.use(mC5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "CognitoIdentityClient",
          commandName: "ListTagsForResourceCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return yE0.se_ListTagsForResourceCommand(I, d)
    }
    deserialize(I, d) {
      return yE0.de_ListTagsForResourceCommand(I, d)
    }
  }
  ww1.ListTagsForResourceCommand = Ww1
})
// @from(Start 2873915, End 2875761)
Xw1 = Y((Vw1) => {
  Object.defineProperty(Vw1, "__esModule", {
    value: !0
  });
  Vw1.LookupDeveloperIdentityCommand = Vw1.$Command = void 0;
  var lC5 = u2(),
    bC5 = r2(),
    hC5 = A9(),
    TE0 = v0();
  Object.defineProperty(Vw1, "$Command", {
    enumerable: !0,
    get: function() {
      return TE0.Command
    }
  });
  var uE0 = W3();
  class Aw1 extends TE0.Command {
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
      this.middlewareStack.use(bC5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(lC5.getEndpointPlugin(d, Aw1.getEndpointParameterInstructions())), this.middlewareStack.use(hC5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "CognitoIdentityClient",
          commandName: "LookupDeveloperIdentityCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return uE0.se_LookupDeveloperIdentityCommand(I, d)
    }
    deserialize(I, d) {
      return uE0.de_LookupDeveloperIdentityCommand(I, d)
    }
  }
  Vw1.LookupDeveloperIdentityCommand = Aw1
})
// @from(Start 2875767, End 2877618)
Dw1 = Y((_w1) => {
  Object.defineProperty(_w1, "__esModule", {
    value: !0
  });
  _w1.MergeDeveloperIdentitiesCommand = _w1.$Command = void 0;
  var jC5 = u2(),
    kC5 = r2(),
    xC5 = A9(),
    lE0 = v0();
  Object.defineProperty(_w1, "$Command", {
    enumerable: !0,
    get: function() {
      return lE0.Command
    }
  });
  var mE0 = W3();
  class Yw1 extends lE0.Command {
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
      this.middlewareStack.use(kC5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(jC5.getEndpointPlugin(d, Yw1.getEndpointParameterInstructions())), this.middlewareStack.use(xC5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "CognitoIdentityClient",
          commandName: "MergeDeveloperIdentitiesCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return mE0.se_MergeDeveloperIdentitiesCommand(I, d)
    }
    deserialize(I, d) {
      return mE0.de_MergeDeveloperIdentitiesCommand(I, d)
    }
  }
  _w1.MergeDeveloperIdentitiesCommand = Yw1
})
// @from(Start 2877624, End 2879455)
gw1 = Y((Fw1) => {
  Object.defineProperty(Fw1, "__esModule", {
    value: !0
  });
  Fw1.SetIdentityPoolRolesCommand = Fw1.$Command = void 0;
  var cC5 = u2(),
    pC5 = r2(),
    iC5 = A9(),
    jE0 = v0();
  Object.defineProperty(Fw1, "$Command", {
    enumerable: !0,
    get: function() {
      return jE0.Command
    }
  });
  var hE0 = W3();
  class Hw1 extends jE0.Command {
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
      this.middlewareStack.use(pC5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(cC5.getEndpointPlugin(d, Hw1.getEndpointParameterInstructions())), this.middlewareStack.use(iC5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "CognitoIdentityClient",
          commandName: "SetIdentityPoolRolesCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return hE0.se_SetIdentityPoolRolesCommand(I, d)
    }
    deserialize(I, d) {
      return hE0.de_SetIdentityPoolRolesCommand(I, d)
    }
  }
  Fw1.SetIdentityPoolRolesCommand = Hw1
})
// @from(Start 2879461, End 2881327)
Nw1 = Y((Kw1) => {
  Object.defineProperty(Kw1, "__esModule", {
    value: !0
  });
  Kw1.SetPrincipalTagAttributeMapCommand = Kw1.$Command = void 0;
  var nC5 = u2(),
    rC5 = r2(),
    aC5 = A9(),
    cE0 = v0();
  Object.defineProperty(Kw1, "$Command", {
    enumerable: !0,
    get: function() {
      return cE0.Command
    }
  });
  var xE0 = W3();
  class Jw1 extends cE0.Command {
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
      this.middlewareStack.use(rC5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(nC5.getEndpointPlugin(d, Jw1.getEndpointParameterInstructions())), this.middlewareStack.use(aC5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "CognitoIdentityClient",
          commandName: "SetPrincipalTagAttributeMapCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return xE0.se_SetPrincipalTagAttributeMapCommand(I, d)
    }
    deserialize(I, d) {
      return xE0.de_SetPrincipalTagAttributeMapCommand(I, d)
    }
  }
  Kw1.SetPrincipalTagAttributeMapCommand = Jw1
})
// @from(Start 2881333, End 2883119)
fw1 = Y((Qw1) => {
  Object.defineProperty(Qw1, "__esModule", {
    value: !0
  });
  Qw1.TagResourceCommand = Qw1.$Command = void 0;
  var sC5 = u2(),
    oC5 = r2(),
    eC5 = A9(),
    nE0 = v0();
  Object.defineProperty(Qw1, "$Command", {
    enumerable: !0,
    get: function() {
      return nE0.Command
    }
  });
  var iE0 = W3();
  class zw1 extends nE0.Command {
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
      this.middlewareStack.use(oC5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(sC5.getEndpointPlugin(d, zw1.getEndpointParameterInstructions())), this.middlewareStack.use(eC5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "CognitoIdentityClient",
          commandName: "TagResourceCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return iE0.se_TagResourceCommand(I, d)
    }
    deserialize(I, d) {
      return iE0.de_TagResourceCommand(I, d)
    }
  }
  Qw1.TagResourceCommand = zw1
})
// @from(Start 2883125, End 2884971)
Uw1 = Y((Rw1) => {
  Object.defineProperty(Rw1, "__esModule", {
    value: !0
  });
  Rw1.UnlinkDeveloperIdentityCommand = Rw1.$Command = void 0;
  var tC5 = u2(),
    IW5 = r2(),
    dW5 = A9(),
    sE0 = v0();
  Object.defineProperty(Rw1, "$Command", {
    enumerable: !0,
    get: function() {
      return sE0.Command
    }
  });
  var aE0 = W3();
  class qw1 extends sE0.Command {
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
      this.middlewareStack.use(IW5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(tC5.getEndpointPlugin(d, qw1.getEndpointParameterInstructions())), this.middlewareStack.use(dW5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "CognitoIdentityClient",
          commandName: "UnlinkDeveloperIdentityCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return aE0.se_UnlinkDeveloperIdentityCommand(I, d)
    }
    deserialize(I, d) {
      return aE0.de_UnlinkDeveloperIdentityCommand(I, d)
    }
  }
  Rw1.UnlinkDeveloperIdentityCommand = qw1
})
// @from(Start 2884977, End 2886711)
Mw1 = Y((Ew1) => {
  Object.defineProperty(Ew1, "__esModule", {
    value: !0
  });
  Ew1.UnlinkIdentityCommand = Ew1.$Command = void 0;
  var GW5 = u2(),
    ZW5 = r2(),
    tE0 = v0();
  Object.defineProperty(Ew1, "$Command", {
    enumerable: !0,
    get: function() {
      return tE0.Command
    }
  });
  var eE0 = W3();
  class vw1 extends tE0.Command {
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
      this.middlewareStack.use(ZW5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(GW5.getEndpointPlugin(d, vw1.getEndpointParameterInstructions()));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "CognitoIdentityClient",
          commandName: "UnlinkIdentityCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return eE0.se_UnlinkIdentityCommand(I, d)
    }
    deserialize(I, d) {
      return eE0.de_UnlinkIdentityCommand(I, d)
    }
  }
  Ew1.UnlinkIdentityCommand = vw1
})
// @from(Start 2886717, End 2888513)
yw1 = Y((Lw1) => {
  Object.defineProperty(Lw1, "__esModule", {
    value: !0
  });
  Lw1.UntagResourceCommand = Lw1.$Command = void 0;
  var CW5 = u2(),
    WW5 = r2(),
    wW5 = A9(),
    GM0 = v0();
  Object.defineProperty(Lw1, "$Command", {
    enumerable: !0,
    get: function() {
      return GM0.Command
    }
  });
  var dM0 = W3();
  class Sw1 extends GM0.Command {
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
      this.middlewareStack.use(WW5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(CW5.getEndpointPlugin(d, Sw1.getEndpointParameterInstructions())), this.middlewareStack.use(wW5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "CognitoIdentityClient",
          commandName: "UntagResourceCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return dM0.se_UntagResourceCommand(I, d)
    }
    deserialize(I, d) {
      return dM0.de_UntagResourceCommand(I, d)
    }
  }
  Lw1.UntagResourceCommand = Sw1
})
// @from(Start 2888519, End 2890340)
uw1 = Y(($w1) => {
  Object.defineProperty($w1, "__esModule", {
    value: !0
  });
  $w1.UpdateIdentityPoolCommand = $w1.$Command = void 0;
  var BW5 = u2(),
    AW5 = r2(),
    VW5 = A9(),
    WM0 = v0();
  Object.defineProperty($w1, "$Command", {
    enumerable: !0,
    get: function() {
      return WM0.Command
    }
  });
  var CM0 = W3();
  class Pw1 extends WM0.Command {
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
      this.middlewareStack.use(AW5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(BW5.getEndpointPlugin(d, Pw1.getEndpointParameterInstructions())), this.middlewareStack.use(VW5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "CognitoIdentityClient",
          commandName: "UpdateIdentityPoolCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return CM0.se_UpdateIdentityPoolCommand(I, d)
    }
    deserialize(I, d) {
      return CM0.de_UpdateIdentityPoolCommand(I, d)
    }
  }
  $w1.UpdateIdentityPoolCommand = Pw1
})
// @from(Start 2890346, End 2892539)
VM0 = Y((BM0) => {
  Object.defineProperty(BM0, "__esModule", {
    value: !0
  });
  BM0.CognitoIdentity = void 0;
  var XW5 = v0(),
    YW5 = $p(),
    _W5 = qW1(),
    DW5 = vW1(),
    HW5 = SW1(),
    FW5 = PW1(),
    gW5 = TW1(),
    JW5 = lW1(),
    KW5 = jW1(),
    NW5 = cW1(),
    zW5 = nW1(),
    QW5 = sW1(),
    fW5 = tW1(),
    qW5 = Gw1(),
    RW5 = Op(),
    UW5 = Bw1(),
    vW5 = Xw1(),
    EW5 = Dw1(),
    MW5 = gw1(),
    SW5 = Nw1(),
    LW5 = fw1(),
    yW5 = Uw1(),
    PW5 = Mw1(),
    $W5 = yw1(),
    uW5 = uw1(),
    TW5 = {
      CreateIdentityPoolCommand: _W5.CreateIdentityPoolCommand,
      DeleteIdentitiesCommand: DW5.DeleteIdentitiesCommand,
      DeleteIdentityPoolCommand: HW5.DeleteIdentityPoolCommand,
      DescribeIdentityCommand: FW5.DescribeIdentityCommand,
      DescribeIdentityPoolCommand: gW5.DescribeIdentityPoolCommand,
      GetCredentialsForIdentityCommand: JW5.GetCredentialsForIdentityCommand,
      GetIdCommand: KW5.GetIdCommand,
      GetIdentityPoolRolesCommand: NW5.GetIdentityPoolRolesCommand,
      GetOpenIdTokenCommand: zW5.GetOpenIdTokenCommand,
      GetOpenIdTokenForDeveloperIdentityCommand: QW5.GetOpenIdTokenForDeveloperIdentityCommand,
      GetPrincipalTagAttributeMapCommand: fW5.GetPrincipalTagAttributeMapCommand,
      ListIdentitiesCommand: qW5.ListIdentitiesCommand,
      ListIdentityPoolsCommand: RW5.ListIdentityPoolsCommand,
      ListTagsForResourceCommand: UW5.ListTagsForResourceCommand,
      LookupDeveloperIdentityCommand: vW5.LookupDeveloperIdentityCommand,
      MergeDeveloperIdentitiesCommand: EW5.MergeDeveloperIdentitiesCommand,
      SetIdentityPoolRolesCommand: MW5.SetIdentityPoolRolesCommand,
      SetPrincipalTagAttributeMapCommand: SW5.SetPrincipalTagAttributeMapCommand,
      TagResourceCommand: LW5.TagResourceCommand,
      UnlinkDeveloperIdentityCommand: yW5.UnlinkDeveloperIdentityCommand,
      UnlinkIdentityCommand: PW5.UnlinkIdentityCommand,
      UntagResourceCommand: $W5.UntagResourceCommand,
      UpdateIdentityPoolCommand: uW5.UpdateIdentityPoolCommand
    };
  class Tw1 extends YW5.CognitoIdentityClient {}
  BM0.CognitoIdentity = Tw1;
  XW5.createAggregatedClient(TW5, Tw1)
})
// @from(Start 2892545, End 2893334)
XM0 = Y((k9) => {
  Object.defineProperty(k9, "__esModule", {
    value: !0
  });
  var v3 = x1();
  v3.__exportStar(qW1(), k9);
  v3.__exportStar(vW1(), k9);
  v3.__exportStar(SW1(), k9);
  v3.__exportStar(PW1(), k9);
  v3.__exportStar(TW1(), k9);
  v3.__exportStar(lW1(), k9);
  v3.__exportStar(jW1(), k9);
  v3.__exportStar(cW1(), k9);
  v3.__exportStar(nW1(), k9);
  v3.__exportStar(sW1(), k9);
  v3.__exportStar(tW1(), k9);
  v3.__exportStar(Gw1(), k9);
  v3.__exportStar(Op(), k9);
  v3.__exportStar(Bw1(), k9);
  v3.__exportStar(Xw1(), k9);
  v3.__exportStar(Dw1(), k9);
  v3.__exportStar(gw1(), k9);
  v3.__exportStar(Nw1(), k9);
  v3.__exportStar(fw1(), k9);
  v3.__exportStar(Uw1(), k9);
  v3.__exportStar(Mw1(), k9);
  v3.__exportStar(yw1(), k9);
  v3.__exportStar(uw1(), k9)
})
// @from(Start 2893340, End 2893425)
_M0 = Y((YM0) => {
  Object.defineProperty(YM0, "__esModule", {
    value: !0
  })
})
// @from(Start 2893431, End 2894207)
FM0 = Y((DM0) => {
  Object.defineProperty(DM0, "__esModule", {
    value: !0
  });
  DM0.paginateListIdentityPools = void 0;
  var OW5 = $p(),
    mW5 = Op(),
    lW5 = async (I, d, ...G) => {
      return await I.send(new mW5.ListIdentityPoolsCommand(d), ...G)
    };
  async function* bW5(I, d, ...G) {
    let Z = I.startingToken || void 0,
      C = !0,
      W;
    while (C) {
      if (d.NextToken = Z, d.MaxResults = I.pageSize, I.client instanceof OW5.CognitoIdentityClient) W = await lW5(I.client, d, ...G);
      else throw new Error("Invalid client, expected CognitoIdentity | CognitoIdentityClient");
      yield W;
      let w = Z;
      Z = W.NextToken, C = !!(Z && (!I.stopOnSameToken || Z !== w))
    }
    return
  }
  DM0.paginateListIdentityPools = bW5
})
// @from(Start 2894213, End 2894376)
JM0 = Y((mp) => {
  Object.defineProperty(mp, "__esModule", {
    value: !0
  });
  var gM0 = x1();
  gM0.__exportStar(_M0(), mp);
  gM0.__exportStar(FM0(), mp)
})
// @from(Start 2894382, End 2894517)
KM0 = Y((Ow1) => {
  Object.defineProperty(Ow1, "__esModule", {
    value: !0
  });
  var hW5 = x1();
  hW5.__exportStar(NW1(), Ow1)
})
// @from(Start 2894523, End 2895004)
Fy = Y((dD) => {
  Object.defineProperty(dD, "__esModule", {
    value: !0
  });
  dD.CognitoIdentityServiceException = void 0;
  var Hy = x1();
  Hy.__exportStar($p(), dD);
  Hy.__exportStar(VM0(), dD);
  Hy.__exportStar(XM0(), dD);
  Hy.__exportStar(JM0(), dD);
  Hy.__exportStar(KM0(), dD);
  var jW5 = up();
  Object.defineProperty(dD, "CognitoIdentityServiceException", {
    enumerable: !0,
    get: function() {
      return jW5.CognitoIdentityServiceException
    }
  })
})
// @from(Start 2895010, End 2895095)
zM0 = Y((NM0) => {
  Object.defineProperty(NM0, "__esModule", {
    value: !0
  })
})
// @from(Start 2895101, End 2895186)
fM0 = Y((QM0) => {
  Object.defineProperty(QM0, "__esModule", {
    value: !0
  })
})
// @from(Start 2895192, End 2895277)
RM0 = Y((qM0) => {
  Object.defineProperty(qM0, "__esModule", {
    value: !0
  })
})
// @from(Start 2895283, End 2895722)
mw1 = Y((UM0) => {
  Object.defineProperty(UM0, "__esModule", {
    value: !0
  });
  UM0.resolveLogins = void 0;

  function xW5(I) {
    return Promise.all(Object.keys(I).reduce((d, G) => {
      let Z = I[G];
      if (typeof Z === "string") d.push([G, Z]);
      else d.push(Z().then((C) => [G, C]));
      return d
    }, [])).then((d) => d.reduce((G, [Z, C]) => {
      return G[Z] = C, G
    }, {}))
  }
  UM0.resolveLogins = xW5
})
// @from(Start 2895728, End 2896917)
bw1 = Y((EM0) => {
  Object.defineProperty(EM0, "__esModule", {
    value: !0
  });
  EM0.fromCognitoIdentity = void 0;
  var cW5 = Fy(),
    lw1 = W4(),
    pW5 = mw1();

  function iW5(I) {
    return async () => {
      let {
        Credentials: {
          AccessKeyId: d = nW5(),
          Expiration: G,
          SecretKey: Z = aW5(),
          SessionToken: C
        } = rW5()
      } = await I.client.send(new cW5.GetCredentialsForIdentityCommand({
        CustomRoleArn: I.customRoleArn,
        IdentityId: I.identityId,
        Logins: I.logins ? await pW5.resolveLogins(I.logins) : void 0
      }));
      return {
        identityId: I.identityId,
        accessKeyId: d,
        secretAccessKey: Z,
        sessionToken: C,
        expiration: G
      }
    }
  }
  EM0.fromCognitoIdentity = iW5;

  function nW5() {
    throw new lw1.CredentialsProviderError("Response from Amazon Cognito contained no access key ID")
  }

  function rW5() {
    throw new lw1.CredentialsProviderError("Response from Amazon Cognito contained no credentials")
  }

  function aW5() {
    throw new lw1.CredentialsProviderError("Response from Amazon Cognito contained no secret key")
  }
})
// @from(Start 2896923, End 2898844)
PM0 = Y((LM0) => {
  Object.defineProperty(LM0, "__esModule", {
    value: !0
  });
  LM0.IndexedDbStorage = void 0;
  var hw1 = "IdentityIds";
  class SM0 {
    constructor(I = "aws:cognito-identity-ids") {
      this.dbName = I
    }
    getItem(I) {
      return this.withObjectStore("readonly", (d) => {
        let G = d.get(I);
        return new Promise((Z) => {
          G.onerror = () => Z(null), G.onsuccess = () => Z(G.result ? G.result.value : null)
        })
      }).catch(() => null)
    }
    removeItem(I) {
      return this.withObjectStore("readwrite", (d) => {
        let G = d.delete(I);
        return new Promise((Z, C) => {
          G.onerror = () => C(G.error), G.onsuccess = () => Z()
        })
      })
    }
    setItem(I, d) {
      return this.withObjectStore("readwrite", (G) => {
        let Z = G.put({
          id: I,
          value: d
        });
        return new Promise((C, W) => {
          Z.onerror = () => W(Z.error), Z.onsuccess = () => C()
        })
      })
    }
    getDb() {
      let I = self.indexedDB.open(this.dbName, 1);
      return new Promise((d, G) => {
        I.onsuccess = () => {
          d(I.result)
        }, I.onerror = () => {
          G(I.error)
        }, I.onblocked = () => {
          G(new Error("Unable to access DB"))
        }, I.onupgradeneeded = () => {
          let Z = I.result;
          Z.onerror = () => {
            G(new Error("Failed to create object store"))
          }, Z.createObjectStore(hw1, {
            keyPath: "id"
          })
        }
      })
    }
    withObjectStore(I, d) {
      return this.getDb().then((G) => {
        let Z = G.transaction(hw1, I);
        return Z.oncomplete = () => G.close(), new Promise((C, W) => {
          Z.onerror = () => W(Z.error), C(d(Z.objectStore(hw1)))
        }).catch((C) => {
          throw G.close(), C
        })
      })
    }
  }
  LM0.IndexedDbStorage = SM0
})
// @from(Start 2898850, End 2899260)
OM0 = Y((uM0) => {
  Object.defineProperty(uM0, "__esModule", {
    value: !0
  });
  uM0.InMemoryStorage = void 0;
  class $M0 {
    constructor(I = {}) {
      this.store = I
    }
    getItem(I) {
      if (I in this.store) return this.store[I];
      return null
    }
    removeItem(I) {
      delete this.store[I]
    }
    setItem(I, d) {
      this.store[I] = d
    }
  }
  uM0.InMemoryStorage = $M0
})
// @from(Start 2899266, End 2899688)
bM0 = Y((mM0) => {
  Object.defineProperty(mM0, "__esModule", {
    value: !0
  });
  mM0.localStorage = void 0;
  var sW5 = PM0(),
    oW5 = OM0(),
    eW5 = new oW5.InMemoryStorage;

  function tW5() {
    if (typeof self === "object" && self.indexedDB) return new sW5.IndexedDbStorage;
    if (typeof window === "object" && window.localStorage) return window.localStorage;
    return eW5
  }
  mM0.localStorage = tW5
})
// @from(Start 2899694, End 2901063)
kM0 = Y((hM0) => {
  Object.defineProperty(hM0, "__esModule", {
    value: !0
  });
  hM0.fromCognitoIdentityPool = void 0;
  var Iw5 = Fy(),
    dw5 = W4(),
    Gw5 = bw1(),
    Zw5 = bM0(),
    Cw5 = mw1();

  function Ww5({
    accountId: I,
    cache: d = Zw5.localStorage(),
    client: G,
    customRoleArn: Z,
    identityPoolId: C,
    logins: W,
    userIdentifier: w = !W || Object.keys(W).length === 0 ? "ANONYMOUS" : void 0
  }) {
    let B = w ? `aws:cognito-identity-credentials:${C}:${w}` : void 0,
      A = async () => {
        let V = B && await d.getItem(B);
        if (!V) {
          let {
            IdentityId: X = ww5()
          } = await G.send(new Iw5.GetIdCommand({
            AccountId: I,
            IdentityPoolId: C,
            Logins: W ? await Cw5.resolveLogins(W) : void 0
          }));
          if (V = X, B) Promise.resolve(d.setItem(B, V)).catch(() => {})
        }
        return A = Gw5.fromCognitoIdentity({
          client: G,
          customRoleArn: Z,
          logins: W,
          identityId: V
        }), A()
      };
    return () => A().catch(async (V) => {
      if (B) Promise.resolve(d.removeItem(B)).catch(() => {});
      throw V
    })
  }
  hM0.fromCognitoIdentityPool = Ww5;

  function ww5() {
    throw new dw5.CredentialsProviderError("Response from Amazon Cognito contained no identity ID")
  }
})
// @from(Start 2901069, End 2901319)
jw1 = Y((VJ) => {
  Object.defineProperty(VJ, "__esModule", {
    value: !0
  });
  var gy = x1();
  gy.__exportStar(zM0(), VJ);
  gy.__exportStar(fM0(), VJ);
  gy.__exportStar(RM0(), VJ);
  gy.__exportStar(bw1(), VJ);
  gy.__exportStar(kM0(), VJ)
})
// @from(Start 2901325, End 2901717)
pM0 = Y((xM0) => {
  Object.defineProperty(xM0, "__esModule", {
    value: !0
  });
  xM0.fromCognitoIdentity = void 0;
  var Bw5 = Fy(),
    Aw5 = jw1(),
    Vw5 = (I) => {
      var d;
      return Aw5.fromCognitoIdentity({
        ...I,
        client: new Bw5.CognitoIdentityClient((d = I.clientConfig) !== null && d !== void 0 ? d : {})
      })
    };
  xM0.fromCognitoIdentity = Vw5
})
// @from(Start 2901723, End 2902127)
rM0 = Y((iM0) => {
  Object.defineProperty(iM0, "__esModule", {
    value: !0
  });
  iM0.fromCognitoIdentityPool = void 0;
  var Xw5 = Fy(),
    Yw5 = jw1(),
    _w5 = (I) => {
      var d;
      return Yw5.fromCognitoIdentityPool({
        ...I,
        client: new Xw5.CognitoIdentityClient((d = I.clientConfig) !== null && d !== void 0 ? d : {})
      })
    };
  iM0.fromCognitoIdentityPool = _w5
})
// @from(Start 2902133, End 2902356)
oM0 = Y((aM0) => {
  Object.defineProperty(aM0, "__esModule", {
    value: !0
  });
  aM0.fromContainerMetadata = void 0;
  var Dw5 = i_(),
    Hw5 = (I) => Dw5.fromContainerMetadata(I);
  aM0.fromContainerMetadata = Hw5
})
// @from(Start 2902362, End 2903231)
CS0 = Y((eM0) => {
  Object.defineProperty(eM0, "__esModule", {
    value: !0
  });
  eM0.fromEnv = eM0.ENV_EXPIRATION = eM0.ENV_SESSION = eM0.ENV_SECRET = eM0.ENV_KEY = void 0;
  var Fw5 = W4();
  eM0.ENV_KEY = "AWS_ACCESS_KEY_ID";
  eM0.ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
  eM0.ENV_SESSION = "AWS_SESSION_TOKEN";
  eM0.ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";
  var gw5 = () => async () => {
    let I = process.env[eM0.ENV_KEY],
      d = process.env[eM0.ENV_SECRET],
      G = process.env[eM0.ENV_SESSION],
      Z = process.env[eM0.ENV_EXPIRATION];
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
    throw new Fw5.CredentialsProviderError("Unable to find environment variable credentials.")
  };
  eM0.fromEnv = gw5
})
// @from(Start 2903237, End 2903371)
lp = Y((kw1) => {
  Object.defineProperty(kw1, "__esModule", {
    value: !0
  });
  var Jw5 = x1();
  Jw5.__exportStar(CS0(), kw1)
})
// @from(Start 2903377, End 2903556)
BS0 = Y((WS0) => {
  Object.defineProperty(WS0, "__esModule", {
    value: !0
  });
  WS0.fromEnv = void 0;
  var Kw5 = lp(),
    Nw5 = () => Kw5.fromEnv();
  WS0.fromEnv = Nw5
})
// @from(Start 2903562, End 2904702)
xw1 = Y((AS0) => {
  Object.defineProperty(AS0, "__esModule", {
    value: !0
  });
  AS0.getHostHeaderPlugin = AS0.hostHeaderMiddlewareOptions = AS0.hostHeaderMiddleware = AS0.resolveHostHeaderConfig = void 0;
  var zw5 = J8();

  function Qw5(I) {
    return I
  }
  AS0.resolveHostHeaderConfig = Qw5;
  var fw5 = (I) => (d) => async (G) => {
    if (!zw5.HttpRequest.isInstance(G.request)) return d(G);
    let {
      request: Z
    } = G, {
      handlerProtocol: C = ""
    } = I.requestHandler.metadata || {};
    if (C.indexOf("h2") >= 0 && !Z.headers[":authority"]) delete Z.headers.host, Z.headers[":authority"] = "";
    else if (!Z.headers.host) {
      let W = Z.hostname;
      if (Z.port != null) W += `:${Z.port}`;
      Z.headers.host = W
    }
    return d(G)
  };
  AS0.hostHeaderMiddleware = fw5;
  AS0.hostHeaderMiddlewareOptions = {
    name: "hostHeaderMiddleware",
    step: "build",
    priority: "low",
    tags: ["HOST"],
    override: !0
  };
  var qw5 = (I) => ({
    applyToStack: (d) => {
      d.add(AS0.hostHeaderMiddleware(I), AS0.hostHeaderMiddlewareOptions)
    }
  });
  AS0.getHostHeaderPlugin = qw5
})