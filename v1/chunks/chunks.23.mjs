
// @from(Start 2727649, End 2740492)
fp = Y((Cq0) => {
  Object.defineProperty(Cq0, "__esModule", {
    value: !0
  });
  Cq0.de_StartDeviceAuthorizationCommand = Cq0.de_RegisterClientCommand = Cq0.de_CreateTokenCommand = Cq0.se_StartDeviceAuthorizationCommand = Cq0.se_RegisterClientCommand = Cq0.se_CreateTokenCommand = void 0;
  var L0 = v0(),
    ZC1 = af0(),
    RZ = GC1(),
    j65 = zp(),
    k65 = async (I, d) => {
      let {
        hostname: G,
        protocol: Z = "https",
        port: C,
        path: W
      } = await d.endpoint(), w = {
        "content-type": "application/json"
      }, B = `${W?.endsWith("/")?W.slice(0,-1):W||""}/token`, A;
      return A = JSON.stringify(L0.take(I, {
        clientId: [],
        clientSecret: [],
        code: [],
        deviceCode: [],
        grantType: [],
        redirectUri: [],
        refreshToken: [],
        scope: (V) => L0._json(V)
      })), new ZC1.HttpRequest({
        protocol: Z,
        hostname: G,
        port: C,
        method: "POST",
        headers: w,
        path: B,
        body: A
      })
    };
  Cq0.se_CreateTokenCommand = k65;
  var x65 = async (I, d) => {
    let {
      hostname: G,
      protocol: Z = "https",
      port: C,
      path: W
    } = await d.endpoint(), w = {
      "content-type": "application/json"
    }, B = `${W?.endsWith("/")?W.slice(0,-1):W||""}/client/register`, A;
    return A = JSON.stringify(L0.take(I, {
      clientName: [],
      clientType: [],
      scopes: (V) => L0._json(V)
    })), new ZC1.HttpRequest({
      protocol: Z,
      hostname: G,
      port: C,
      method: "POST",
      headers: w,
      path: B,
      body: A
    })
  };
  Cq0.se_RegisterClientCommand = x65;
  var c65 = async (I, d) => {
    let {
      hostname: G,
      protocol: Z = "https",
      port: C,
      path: W
    } = await d.endpoint(), w = {
      "content-type": "application/json"
    }, B = `${W?.endsWith("/")?W.slice(0,-1):W||""}/device_authorization`, A;
    return A = JSON.stringify(L0.take(I, {
      clientId: [],
      clientSecret: [],
      startUrl: []
    })), new ZC1.HttpRequest({
      protocol: Z,
      hostname: G,
      port: C,
      method: "POST",
      headers: w,
      path: B,
      body: A
    })
  };
  Cq0.se_StartDeviceAuthorizationCommand = c65;
  var p65 = async (I, d) => {
    if (I.statusCode !== 200 && I.statusCode >= 300) return i65(I, d);
    let G = L0.map({
        $metadata: AI(I)
      }),
      Z = L0.expectNonNull(L0.expectObject(await Qp(I.body, d)), "body"),
      C = L0.take(Z, {
        accessToken: L0.expectString,
        expiresIn: L0.expectInt32,
        idToken: L0.expectString,
        refreshToken: L0.expectString,
        tokenType: L0.expectString
      });
    return Object.assign(G, C), G
  };
  Cq0.de_CreateTokenCommand = p65;
  var i65 = async (I, d) => {
    let G = {
        ...I,
        body: await BC1(I.body, d)
      },
      Z = AC1(I, G.body);
    switch (Z) {
      case "AccessDeniedException":
      case "com.amazonaws.ssooidc#AccessDeniedException":
        throw await o65(G, d);
      case "AuthorizationPendingException":
      case "com.amazonaws.ssooidc#AuthorizationPendingException":
        throw await e65(G, d);
      case "ExpiredTokenException":
      case "com.amazonaws.ssooidc#ExpiredTokenException":
        throw await t65(G, d);
      case "InternalServerException":
      case "com.amazonaws.ssooidc#InternalServerException":
        throw await WC1(G, d);
      case "InvalidClientException":
      case "com.amazonaws.ssooidc#InvalidClientException":
        throw await Iq0(G, d);
      case "InvalidGrantException":
      case "com.amazonaws.ssooidc#InvalidGrantException":
        throw await d85(G, d);
      case "InvalidRequestException":
      case "com.amazonaws.ssooidc#InvalidRequestException":
        throw await wC1(G, d);
      case "InvalidScopeException":
      case "com.amazonaws.ssooidc#InvalidScopeException":
        throw await dq0(G, d);
      case "SlowDownException":
      case "com.amazonaws.ssooidc#SlowDownException":
        throw await Gq0(G, d);
      case "UnauthorizedClientException":
      case "com.amazonaws.ssooidc#UnauthorizedClientException":
        throw await Zq0(G, d);
      case "UnsupportedGrantTypeException":
      case "com.amazonaws.ssooidc#UnsupportedGrantTypeException":
        throw await G85(G, d);
      default:
        let C = G.body;
        return CC1({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, n65 = async (I, d) => {
    if (I.statusCode !== 200 && I.statusCode >= 300) return r65(I, d);
    let G = L0.map({
        $metadata: AI(I)
      }),
      Z = L0.expectNonNull(L0.expectObject(await Qp(I.body, d)), "body"),
      C = L0.take(Z, {
        authorizationEndpoint: L0.expectString,
        clientId: L0.expectString,
        clientIdIssuedAt: L0.expectLong,
        clientSecret: L0.expectString,
        clientSecretExpiresAt: L0.expectLong,
        tokenEndpoint: L0.expectString
      });
    return Object.assign(G, C), G
  };
  Cq0.de_RegisterClientCommand = n65;
  var r65 = async (I, d) => {
    let G = {
        ...I,
        body: await BC1(I.body, d)
      },
      Z = AC1(I, G.body);
    switch (Z) {
      case "InternalServerException":
      case "com.amazonaws.ssooidc#InternalServerException":
        throw await WC1(G, d);
      case "InvalidClientMetadataException":
      case "com.amazonaws.ssooidc#InvalidClientMetadataException":
        throw await I85(G, d);
      case "InvalidRequestException":
      case "com.amazonaws.ssooidc#InvalidRequestException":
        throw await wC1(G, d);
      case "InvalidScopeException":
      case "com.amazonaws.ssooidc#InvalidScopeException":
        throw await dq0(G, d);
      default:
        let C = G.body;
        return CC1({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, a65 = async (I, d) => {
    if (I.statusCode !== 200 && I.statusCode >= 300) return s65(I, d);
    let G = L0.map({
        $metadata: AI(I)
      }),
      Z = L0.expectNonNull(L0.expectObject(await Qp(I.body, d)), "body"),
      C = L0.take(Z, {
        deviceCode: L0.expectString,
        expiresIn: L0.expectInt32,
        interval: L0.expectInt32,
        userCode: L0.expectString,
        verificationUri: L0.expectString,
        verificationUriComplete: L0.expectString
      });
    return Object.assign(G, C), G
  };
  Cq0.de_StartDeviceAuthorizationCommand = a65;
  var s65 = async (I, d) => {
    let G = {
        ...I,
        body: await BC1(I.body, d)
      },
      Z = AC1(I, G.body);
    switch (Z) {
      case "InternalServerException":
      case "com.amazonaws.ssooidc#InternalServerException":
        throw await WC1(G, d);
      case "InvalidClientException":
      case "com.amazonaws.ssooidc#InvalidClientException":
        throw await Iq0(G, d);
      case "InvalidRequestException":
      case "com.amazonaws.ssooidc#InvalidRequestException":
        throw await wC1(G, d);
      case "SlowDownException":
      case "com.amazonaws.ssooidc#SlowDownException":
        throw await Gq0(G, d);
      case "UnauthorizedClientException":
      case "com.amazonaws.ssooidc#UnauthorizedClientException":
        throw await Zq0(G, d);
      default:
        let C = G.body;
        return CC1({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, CC1 = L0.withBaseException(j65.SSOOIDCServiceException), o65 = async (I, d) => {
    let G = L0.map({}),
      Z = I.body,
      C = L0.take(Z, {
        error: L0.expectString,
        error_description: L0.expectString
      });
    Object.assign(G, C);
    let W = new RZ.AccessDeniedException({
      $metadata: AI(I),
      ...G
    });
    return L0.decorateServiceException(W, I.body)
  }, e65 = async (I, d) => {
    let G = L0.map({}),
      Z = I.body,
      C = L0.take(Z, {
        error: L0.expectString,
        error_description: L0.expectString
      });
    Object.assign(G, C);
    let W = new RZ.AuthorizationPendingException({
      $metadata: AI(I),
      ...G
    });
    return L0.decorateServiceException(W, I.body)
  }, t65 = async (I, d) => {
    let G = L0.map({}),
      Z = I.body,
      C = L0.take(Z, {
        error: L0.expectString,
        error_description: L0.expectString
      });
    Object.assign(G, C);
    let W = new RZ.ExpiredTokenException({
      $metadata: AI(I),
      ...G
    });
    return L0.decorateServiceException(W, I.body)
  }, WC1 = async (I, d) => {
    let G = L0.map({}),
      Z = I.body,
      C = L0.take(Z, {
        error: L0.expectString,
        error_description: L0.expectString
      });
    Object.assign(G, C);
    let W = new RZ.InternalServerException({
      $metadata: AI(I),
      ...G
    });
    return L0.decorateServiceException(W, I.body)
  }, Iq0 = async (I, d) => {
    let G = L0.map({}),
      Z = I.body,
      C = L0.take(Z, {
        error: L0.expectString,
        error_description: L0.expectString
      });
    Object.assign(G, C);
    let W = new RZ.InvalidClientException({
      $metadata: AI(I),
      ...G
    });
    return L0.decorateServiceException(W, I.body)
  }, I85 = async (I, d) => {
    let G = L0.map({}),
      Z = I.body,
      C = L0.take(Z, {
        error: L0.expectString,
        error_description: L0.expectString
      });
    Object.assign(G, C);
    let W = new RZ.InvalidClientMetadataException({
      $metadata: AI(I),
      ...G
    });
    return L0.decorateServiceException(W, I.body)
  }, d85 = async (I, d) => {
    let G = L0.map({}),
      Z = I.body,
      C = L0.take(Z, {
        error: L0.expectString,
        error_description: L0.expectString
      });
    Object.assign(G, C);
    let W = new RZ.InvalidGrantException({
      $metadata: AI(I),
      ...G
    });
    return L0.decorateServiceException(W, I.body)
  }, wC1 = async (I, d) => {
    let G = L0.map({}),
      Z = I.body,
      C = L0.take(Z, {
        error: L0.expectString,
        error_description: L0.expectString
      });
    Object.assign(G, C);
    let W = new RZ.InvalidRequestException({
      $metadata: AI(I),
      ...G
    });
    return L0.decorateServiceException(W, I.body)
  }, dq0 = async (I, d) => {
    let G = L0.map({}),
      Z = I.body,
      C = L0.take(Z, {
        error: L0.expectString,
        error_description: L0.expectString
      });
    Object.assign(G, C);
    let W = new RZ.InvalidScopeException({
      $metadata: AI(I),
      ...G
    });
    return L0.decorateServiceException(W, I.body)
  }, Gq0 = async (I, d) => {
    let G = L0.map({}),
      Z = I.body,
      C = L0.take(Z, {
        error: L0.expectString,
        error_description: L0.expectString
      });
    Object.assign(G, C);
    let W = new RZ.SlowDownException({
      $metadata: AI(I),
      ...G
    });
    return L0.decorateServiceException(W, I.body)
  }, Zq0 = async (I, d) => {
    let G = L0.map({}),
      Z = I.body,
      C = L0.take(Z, {
        error: L0.expectString,
        error_description: L0.expectString
      });
    Object.assign(G, C);
    let W = new RZ.UnauthorizedClientException({
      $metadata: AI(I),
      ...G
    });
    return L0.decorateServiceException(W, I.body)
  }, G85 = async (I, d) => {
    let G = L0.map({}),
      Z = I.body,
      C = L0.take(Z, {
        error: L0.expectString,
        error_description: L0.expectString
      });
    Object.assign(G, C);
    let W = new RZ.UnsupportedGrantTypeException({
      $metadata: AI(I),
      ...G
    });
    return L0.decorateServiceException(W, I.body)
  }, AI = (I) => ({
    httpStatusCode: I.statusCode,
    requestId: I.headers["x-amzn-requestid"] ?? I.headers["x-amzn-request-id"] ?? I.headers["x-amz-request-id"],
    extendedRequestId: I.headers["x-amz-id-2"],
    cfId: I.headers["x-amz-cf-id"]
  }), Z85 = (I = new Uint8Array, d) => {
    if (I instanceof Uint8Array) return Promise.resolve(I);
    return d.streamCollector(I) || Promise.resolve(new Uint8Array)
  }, C85 = (I, d) => Z85(I, d).then((G) => d.utf8Encoder(G)), Qp = (I, d) => C85(I, d).then((G) => {
    if (G.length) return JSON.parse(G);
    return {}
  }), BC1 = async (I, d) => {
    let G = await Qp(I, d);
    return G.message = G.message ?? G.Message, G
  }, AC1 = (I, d) => {
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
// @from(Start 2740498, End 2742209)
YC1 = Y((XC1) => {
  Object.defineProperty(XC1, "__esModule", {
    value: !0
  });
  XC1.CreateTokenCommand = XC1.$Command = void 0;
  var X85 = u2(),
    Y85 = r2(),
    Bq0 = v0();
  Object.defineProperty(XC1, "$Command", {
    enumerable: !0,
    get: function() {
      return Bq0.Command
    }
  });
  var wq0 = fp();
  class VC1 extends Bq0.Command {
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
      this.middlewareStack.use(Y85.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(X85.getEndpointPlugin(d, VC1.getEndpointParameterInstructions()));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "SSOOIDCClient",
          commandName: "CreateTokenCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return wq0.se_CreateTokenCommand(I, d)
    }
    deserialize(I, d) {
      return wq0.de_CreateTokenCommand(I, d)
    }
  }
  XC1.CreateTokenCommand = VC1
})
// @from(Start 2742215, End 2743941)
HC1 = Y((DC1) => {
  Object.defineProperty(DC1, "__esModule", {
    value: !0
  });
  DC1.RegisterClientCommand = DC1.$Command = void 0;
  var _85 = u2(),
    D85 = r2(),
    Xq0 = v0();
  Object.defineProperty(DC1, "$Command", {
    enumerable: !0,
    get: function() {
      return Xq0.Command
    }
  });
  var Vq0 = fp();
  class _C1 extends Xq0.Command {
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
      this.middlewareStack.use(D85.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(_85.getEndpointPlugin(d, _C1.getEndpointParameterInstructions()));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "SSOOIDCClient",
          commandName: "RegisterClientCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return Vq0.se_RegisterClientCommand(I, d)
    }
    deserialize(I, d) {
      return Vq0.de_RegisterClientCommand(I, d)
    }
  }
  DC1.RegisterClientCommand = _C1
})
// @from(Start 2743947, End 2745723)
JC1 = Y((gC1) => {
  Object.defineProperty(gC1, "__esModule", {
    value: !0
  });
  gC1.StartDeviceAuthorizationCommand = gC1.$Command = void 0;
  var H85 = u2(),
    F85 = r2(),
    Dq0 = v0();
  Object.defineProperty(gC1, "$Command", {
    enumerable: !0,
    get: function() {
      return Dq0.Command
    }
  });
  var _q0 = fp();
  class FC1 extends Dq0.Command {
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
      this.middlewareStack.use(F85.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(H85.getEndpointPlugin(d, FC1.getEndpointParameterInstructions()));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "SSOOIDCClient",
          commandName: "StartDeviceAuthorizationCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return _q0.se_StartDeviceAuthorizationCommand(I, d)
    }
    deserialize(I, d) {
      return _q0.de_StartDeviceAuthorizationCommand(I, d)
    }
  }
  gC1.StartDeviceAuthorizationCommand = FC1
})
// @from(Start 2745729, End 2746226)
Jq0 = Y((Fq0) => {
  Object.defineProperty(Fq0, "__esModule", {
    value: !0
  });
  Fq0.SSOOIDC = void 0;
  var g85 = v0(),
    J85 = YC1(),
    K85 = HC1(),
    N85 = JC1(),
    z85 = TZ1(),
    Q85 = {
      CreateTokenCommand: J85.CreateTokenCommand,
      RegisterClientCommand: K85.RegisterClientCommand,
      StartDeviceAuthorizationCommand: N85.StartDeviceAuthorizationCommand
    };
  class KC1 extends z85.SSOOIDCClient {}
  Fq0.SSOOIDC = KC1;
  g85.createAggregatedClient(Q85, KC1)
})
// @from(Start 2746232, End 2746426)
Kq0 = Y((dy) => {
  Object.defineProperty(dy, "__esModule", {
    value: !0
  });
  var NC1 = x1();
  NC1.__exportStar(YC1(), dy);
  NC1.__exportStar(HC1(), dy);
  NC1.__exportStar(JC1(), dy)
})
// @from(Start 2746432, End 2746567)
Nq0 = Y((zC1) => {
  Object.defineProperty(zC1, "__esModule", {
    value: !0
  });
  var f85 = x1();
  f85.__exportStar(GC1(), zC1)
})
// @from(Start 2746573, End 2747001)
Gy = Y((wJ) => {
  Object.defineProperty(wJ, "__esModule", {
    value: !0
  });
  wJ.SSOOIDCServiceException = void 0;
  var qp = x1();
  qp.__exportStar(TZ1(), wJ);
  qp.__exportStar(Jq0(), wJ);
  qp.__exportStar(Kq0(), wJ);
  qp.__exportStar(Nq0(), wJ);
  var q85 = zp();
  Object.defineProperty(wJ, "SSOOIDCServiceException", {
    enumerable: !0,
    get: function() {
      return q85.SSOOIDCServiceException
    }
  })
})
// @from(Start 2747007, End 2747339)
fq0 = Y((zq0) => {
  Object.defineProperty(zq0, "__esModule", {
    value: !0
  });
  zq0.getSsoOidcClient = void 0;
  var U85 = Gy(),
    QC1 = {},
    v85 = (I) => {
      if (QC1[I]) return QC1[I];
      let d = new U85.SSOOIDCClient({
        region: I
      });
      return QC1[I] = d, d
    };
  zq0.getSsoOidcClient = v85
})
// @from(Start 2747345, End 2747783)
Uq0 = Y((qq0) => {
  Object.defineProperty(qq0, "__esModule", {
    value: !0
  });
  qq0.getNewSsoOidcToken = void 0;
  var E85 = Gy(),
    M85 = fq0(),
    S85 = (I, d) => {
      return M85.getSsoOidcClient(d).send(new E85.CreateTokenCommand({
        clientId: I.clientId,
        clientSecret: I.clientSecret,
        refreshToken: I.refreshToken,
        grantType: "refresh_token"
      }))
    };
  qq0.getNewSsoOidcToken = S85
})
// @from(Start 2747789, End 2748147)
Mq0 = Y((vq0) => {
  Object.defineProperty(vq0, "__esModule", {
    value: !0
  });
  vq0.validateTokenExpiry = void 0;
  var L85 = W4(),
    y85 = Dp(),
    P85 = (I) => {
      if (I.expiration && I.expiration.getTime() < Date.now()) throw new L85.TokenProviderError(`Token is expired. ${y85.REFRESH_MESSAGE}`, !1)
    };
  vq0.validateTokenExpiry = P85
})
// @from(Start 2748153, End 2748540)
yq0 = Y((Sq0) => {
  Object.defineProperty(Sq0, "__esModule", {
    value: !0
  });
  Sq0.validateTokenKey = void 0;
  var $85 = W4(),
    u85 = Dp(),
    T85 = (I, d, G = !1) => {
      if (typeof d === "undefined") throw new $85.TokenProviderError(`Value not present for '${I}' in SSO Token${G?". Cannot refresh":""}. ${u85.REFRESH_MESSAGE}`, !1)
    };
  Sq0.validateTokenKey = T85
})
// @from(Start 2748546, End 2748921)
uq0 = Y((Pq0) => {
  Object.defineProperty(Pq0, "__esModule", {
    value: !0
  });
  Pq0.writeSSOTokenToFile = void 0;
  var O85 = K8(),
    m85 = B1("fs"),
    {
      writeFile: l85
    } = m85.promises,
    b85 = (I, d) => {
      let G = O85.getSSOTokenFilepath(I),
        Z = JSON.stringify(d, null, 2);
      return l85(G, Z)
    };
  Pq0.writeSSOTokenToFile = b85
})
// @from(Start 2748927, End 2751475)
fC1 = Y((lq0) => {
  Object.defineProperty(lq0, "__esModule", {
    value: !0
  });
  lq0.fromSso = void 0;
  var Zy = W4(),
    Rp = K8(),
    Tq0 = Dp(),
    h85 = Uq0(),
    Oq0 = Mq0(),
    BJ = yq0(),
    j85 = uq0(),
    mq0 = new Date(0),
    k85 = (I = {}) => async () => {
      let d = await Rp.parseKnownFiles(I),
        G = Rp.getProfileName(I),
        Z = d[G];
      if (!Z) throw new Zy.TokenProviderError(`Profile '${G}' could not be found in shared credentials file.`, !1);
      else if (!Z.sso_session) throw new Zy.TokenProviderError(`Profile '${G}' is missing required property 'sso_session'.`);
      let C = Z.sso_session,
        w = (await Rp.loadSsoSessionData(I))[C];
      if (!w) throw new Zy.TokenProviderError(`Sso session '${C}' could not be found in shared credentials file.`, !1);
      for (let g of ["sso_start_url", "sso_region"])
        if (!w[g]) throw new Zy.TokenProviderError(`Sso session '${C}' is missing required property '${g}'.`, !1);
      let {
        sso_start_url: B,
        sso_region: A
      } = w, V;
      try {
        V = await Rp.getSSOTokenFromFile(C)
      } catch (g) {
        throw new Zy.TokenProviderError(`The SSO session token associated with profile=${G} was not found or is invalid. ${Tq0.REFRESH_MESSAGE}`, !1)
      }
      BJ.validateTokenKey("accessToken", V.accessToken), BJ.validateTokenKey("expiresAt", V.expiresAt);
      let {
        accessToken: X,
        expiresAt: _
      } = V, F = {
        token: X,
        expiration: new Date(_)
      };
      if (F.expiration.getTime() - Date.now() > Tq0.EXPIRE_WINDOW_MS) return F;
      if (Date.now() - mq0.getTime() < 30000) return Oq0.validateTokenExpiry(F), F;
      BJ.validateTokenKey("clientId", V.clientId, !0), BJ.validateTokenKey("clientSecret", V.clientSecret, !0), BJ.validateTokenKey("refreshToken", V.refreshToken, !0);
      try {
        mq0.setTime(Date.now());
        let g = await h85.getNewSsoOidcToken(V, A);
        BJ.validateTokenKey("accessToken", g.accessToken), BJ.validateTokenKey("expiresIn", g.expiresIn);
        let J = new Date(Date.now() + g.expiresIn * 1000);
        try {
          await j85.writeSSOTokenToFile(C, {
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
        return Oq0.validateTokenExpiry(F), F
      }
    };
  lq0.fromSso = k85
})
// @from(Start 2751481, End 2751816)
kq0 = Y((hq0) => {
  Object.defineProperty(hq0, "__esModule", {
    value: !0
  });
  hq0.fromStatic = void 0;
  var x85 = W4(),
    c85 = ({
      token: I
    }) => async () => {
      if (!I || !I.token) throw new x85.TokenProviderError("Please pass a valid token to fromStatic", !1);
      return I
    };
  hq0.fromStatic = c85
})
// @from(Start 2751822, End 2752278)
pq0 = Y((xq0) => {
  Object.defineProperty(xq0, "__esModule", {
    value: !0
  });
  xq0.nodeProvider = void 0;
  var qC1 = W4(),
    p85 = fC1(),
    i85 = (I = {}) => qC1.memoize(qC1.chain(p85.fromSso(I), async () => {
      throw new qC1.TokenProviderError("Could not load token from any providers", !1)
    }), (d) => d.expiration !== void 0 && d.expiration.getTime() - Date.now() < 300000, (d) => d.expiration !== void 0);
  xq0.nodeProvider = i85
})
// @from(Start 2752284, End 2752478)
iq0 = Y((Cy) => {
  Object.defineProperty(Cy, "__esModule", {
    value: !0
  });
  var RC1 = x1();
  RC1.__exportStar(fC1(), Cy);
  RC1.__exportStar(kq0(), Cy);
  RC1.__exportStar(pq0(), Cy)
})
// @from(Start 2752484, End 2754607)
sq0 = Y((rq0) => {
  Object.defineProperty(rq0, "__esModule", {
    value: !0
  });
  rq0.resolveSSOCredentials = void 0;
  var nq0 = wg0(),
    Wy = W4(),
    n85 = K8(),
    r85 = iq0(),
    a85 = 900000,
    wy = !1,
    s85 = async ({
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
        let Q = await r85.fromSso({
          profile: w
        })();
        B = {
          accessToken: Q.token,
          expiresAt: new Date(Q.expiration).toISOString()
        }
      } catch (Q) {
        throw new Wy.CredentialsProviderError(Q.message, wy)
      } else try {
        B = await n85.getSSOTokenFromFile(I)
      } catch (Q) {
        throw new Wy.CredentialsProviderError("The SSO session associated with this profile is invalid. To refresh this SSO session run aws sso login with the corresponding profile.", wy)
      }
      if (new Date(B.expiresAt).getTime() - Date.now() <= a85) throw new Wy.CredentialsProviderError("The SSO session associated with this profile has expired. To refresh this SSO session run aws sso login with the corresponding profile.", wy);
      let {
        accessToken: V
      } = B, X = W || new nq0.SSOClient({
        region: Z
      }), _;
      try {
        _ = await X.send(new nq0.GetRoleCredentialsCommand({
          accountId: G,
          roleName: C,
          accessToken: V
        }))
      } catch (Q) {
        throw Wy.CredentialsProviderError.from(Q, wy)
      }
      let {
        roleCredentials: {
          accessKeyId: F,
          secretAccessKey: g,
          sessionToken: J,
          expiration: K
        } = {}
      } = _;
      if (!F || !g || !J || !K) throw new Wy.CredentialsProviderError("SSO returns an invalid temporary credential.", wy);
      return {
        accessKeyId: F,
        secretAccessKey: g,
        sessionToken: J,
        expiration: new Date(K)
      }
    };
  rq0.resolveSSOCredentials = s85
})
// @from(Start 2754613, End 2755283)
UC1 = Y((oq0) => {
  Object.defineProperty(oq0, "__esModule", {
    value: !0
  });
  oq0.validateSsoProfile = void 0;
  var o85 = W4(),
    e85 = (I) => {
      let {
        sso_start_url: d,
        sso_account_id: G,
        sso_region: Z,
        sso_role_name: C
      } = I;
      if (!d || !G || !Z || !C) throw new o85.CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(I).join(", ")}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, !1);
      return I
    };
  oq0.validateSsoProfile = e85
})
// @from(Start 2755289, End 2757410)
GR0 = Y((IR0) => {
  Object.defineProperty(IR0, "__esModule", {
    value: !0
  });
  IR0.fromSSO = void 0;
  var By = W4(),
    vC1 = K8(),
    t85 = MG1(),
    tq0 = sq0(),
    I75 = UC1(),
    d75 = (I = {}) => async () => {
      let {
        ssoStartUrl: d,
        ssoAccountId: G,
        ssoRegion: Z,
        ssoRoleName: C,
        ssoClient: W,
        ssoSession: w
      } = I, B = vC1.getProfileName(I);
      if (!d && !G && !Z && !C && !w) {
        let V = (await vC1.parseKnownFiles(I))[B];
        if (!V) throw new By.CredentialsProviderError(`Profile ${B} was not found.`);
        if (!t85.isSsoProfile(V)) throw new By.CredentialsProviderError(`Profile ${B} is not configured with SSO credentials.`);
        if (V === null || V === void 0 ? void 0 : V.sso_session) {
          let Q = (await vC1.loadSsoSessionData(I))[V.sso_session],
            E = ` configurations in profile ${B} and sso-session ${V.sso_session}`;
          if (Z && Z !== Q.sso_region) throw new By.CredentialsProviderError("Conflicting SSO region" + E, !1);
          if (d && d !== Q.sso_start_url) throw new By.CredentialsProviderError("Conflicting SSO start_url" + E, !1);
          V.sso_region = Q.sso_region, V.sso_start_url = Q.sso_start_url
        }
        let {
          sso_start_url: X,
          sso_account_id: _,
          sso_region: F,
          sso_role_name: g,
          sso_session: J
        } = I75.validateSsoProfile(V);
        return tq0.resolveSSOCredentials({
          ssoStartUrl: X,
          ssoSession: J,
          ssoAccountId: _,
          ssoRegion: F,
          ssoRoleName: g,
          ssoClient: W,
          profile: B
        })
      } else if (!d || !G || !Z || !C) throw new By.CredentialsProviderError('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"');
      else return tq0.resolveSSOCredentials({
        ssoStartUrl: d,
        ssoSession: w,
        ssoAccountId: G,
        ssoRegion: Z,
        ssoRoleName: C,
        ssoClient: W,
        profile: B
      })
    };
  IR0.fromSSO = d75
})
// @from(Start 2757416, End 2757501)
CR0 = Y((ZR0) => {
  Object.defineProperty(ZR0, "__esModule", {
    value: !0
  })
})
// @from(Start 2757507, End 2757726)
vp = Y((pf) => {
  Object.defineProperty(pf, "__esModule", {
    value: !0
  });
  var Up = x1();
  Up.__exportStar(GR0(), pf);
  Up.__exportStar(MG1(), pf);
  Up.__exportStar(CR0(), pf);
  Up.__exportStar(UC1(), pf)
})
// @from(Start 2757732, End 2758401)
BR0 = Y((EC1) => {
  Object.defineProperty(EC1, "__esModule", {
    value: !0
  });
  EC1.resolveSsoCredentials = EC1.isSsoProfile = void 0;
  var WR0 = vp(),
    G75 = vp();
  Object.defineProperty(EC1, "isSsoProfile", {
    enumerable: !0,
    get: function() {
      return G75.isSsoProfile
    }
  });
  var Z75 = (I) => {
    let {
      sso_start_url: d,
      sso_account_id: G,
      sso_session: Z,
      sso_region: C,
      sso_role_name: W
    } = WR0.validateSsoProfile(I);
    return WR0.fromSSO({
      ssoStartUrl: d,
      ssoAccountId: G,
      ssoSession: Z,
      ssoRegion: C,
      ssoRoleName: W
    })()
  };
  EC1.resolveSsoCredentials = Z75
})
// @from(Start 2758407, End 2759011)
XR0 = Y((AR0) => {
  Object.defineProperty(AR0, "__esModule", {
    value: !0
  });
  AR0.resolveStaticCredentials = AR0.isStaticCredsProfile = void 0;
  var C75 = (I) => Boolean(I) && typeof I === "object" && typeof I.aws_access_key_id === "string" && typeof I.aws_secret_access_key === "string" && ["undefined", "string"].indexOf(typeof I.aws_session_token) > -1;
  AR0.isStaticCredsProfile = C75;
  var W75 = (I) => Promise.resolve({
    accessKeyId: I.aws_access_key_id,
    secretAccessKey: I.aws_secret_access_key,
    sessionToken: I.aws_session_token
  });
  AR0.resolveStaticCredentials = W75
})
// @from(Start 2759017, End 2759863)
MC1 = Y((YR0) => {
  Object.defineProperty(YR0, "__esModule", {
    value: !0
  });
  YR0.fromWebToken = void 0;
  var B75 = W4(),
    A75 = (I) => () => {
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
      if (!A) throw new B75.CredentialsProviderError(`Role Arn '${d}' needs to be assumed with web identity, but no role assumption callback was provided.`, !1);
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
  YR0.fromWebToken = A75
})
// @from(Start 2759869, End 2760914)
FR0 = Y((DR0) => {
  Object.defineProperty(DR0, "__esModule", {
    value: !0
  });
  DR0.fromTokenFile = void 0;
  var V75 = W4(),
    X75 = B1("fs"),
    Y75 = MC1(),
    _75 = "AWS_WEB_IDENTITY_TOKEN_FILE",
    D75 = "AWS_ROLE_ARN",
    H75 = "AWS_ROLE_SESSION_NAME",
    F75 = (I = {}) => async () => {
      return g75(I)
    };
  DR0.fromTokenFile = F75;
  var g75 = (I) => {
    var d, G, Z;
    let C = (d = I === null || I === void 0 ? void 0 : I.webIdentityTokenFile) !== null && d !== void 0 ? d : process.env[_75],
      W = (G = I === null || I === void 0 ? void 0 : I.roleArn) !== null && G !== void 0 ? G : process.env[D75],
      w = (Z = I === null || I === void 0 ? void 0 : I.roleSessionName) !== null && Z !== void 0 ? Z : process.env[H75];
    if (!C || !W) throw new V75.CredentialsProviderError("Web identity configuration not specified");
    return Y75.fromWebToken({
      ...I,
      webIdentityToken: X75.readFileSync(C, {
        encoding: "ascii"
      }),
      roleArn: W,
      roleSessionName: w
    })()
  }
})
// @from(Start 2760920, End 2761083)
SC1 = Y((Ep) => {
  Object.defineProperty(Ep, "__esModule", {
    value: !0
  });
  var gR0 = x1();
  gR0.__exportStar(FR0(), Ep);
  gR0.__exportStar(MC1(), Ep)
})
// @from(Start 2761089, End 2761785)
NR0 = Y((JR0) => {
  Object.defineProperty(JR0, "__esModule", {
    value: !0
  });
  JR0.resolveWebIdentityCredentials = JR0.isWebIdentityProfile = void 0;
  var J75 = SC1(),
    K75 = (I) => Boolean(I) && typeof I === "object" && typeof I.web_identity_token_file === "string" && typeof I.role_arn === "string" && ["undefined", "string"].indexOf(typeof I.role_session_name) > -1;
  JR0.isWebIdentityProfile = K75;
  var N75 = async (I, d) => J75.fromTokenFile({
    webIdentityTokenFile: I.web_identity_token_file,
    roleArn: I.role_arn,
    roleSessionName: I.role_session_name,
    roleAssumerWithWebIdentity: d.roleAssumerWithWebIdentity
  })();
  JR0.resolveWebIdentityCredentials = N75
})
// @from(Start 2761791, End 2762737)
RG1 = Y((RR0) => {
  Object.defineProperty(RR0, "__esModule", {
    value: !0
  });
  RR0.resolveProfileData = void 0;
  var Q75 = W4(),
    zR0 = t_0(),
    QR0 = _D0(),
    fR0 = BR0(),
    Mp = XR0(),
    qR0 = NR0(),
    f75 = async (I, d, G, Z = {}) => {
      let C = d[I];
      if (Object.keys(Z).length > 0 && Mp.isStaticCredsProfile(C)) return Mp.resolveStaticCredentials(C);
      if (zR0.isAssumeRoleProfile(C)) return zR0.resolveAssumeRoleCredentials(I, d, G, Z);
      if (Mp.isStaticCredsProfile(C)) return Mp.resolveStaticCredentials(C);
      if (qR0.isWebIdentityProfile(C)) return qR0.resolveWebIdentityCredentials(C, G);
      if (QR0.isProcessProfile(C)) return QR0.resolveProcessCredentials(G, I);
      if (fR0.isSsoProfile(C)) return fR0.resolveSsoCredentials(C);
      throw new Q75.CredentialsProviderError(`Profile ${I} could not be found or parsed in shared credentials file.`)
    };
  RR0.resolveProfileData = f75
})
// @from(Start 2762743, End 2763060)
SR0 = Y((ER0) => {
  Object.defineProperty(ER0, "__esModule", {
    value: !0
  });
  ER0.fromIni = void 0;
  var vR0 = K8(),
    q75 = RG1(),
    R75 = (I = {}) => async () => {
      let d = await vR0.parseKnownFiles(I);
      return q75.resolveProfileData(vR0.getProfileName(I), d, I)
    };
  ER0.fromIni = R75
})
// @from(Start 2763066, End 2763201)
LR0 = Y((LC1) => {
  Object.defineProperty(LC1, "__esModule", {
    value: !0
  });
  var U75 = x1();
  U75.__exportStar(SR0(), LC1)
})
// @from(Start 2763207, End 2763813)
uR0 = Y((yR0) => {
  Object.defineProperty(yR0, "__esModule", {
    value: !0
  });
  yR0.remoteProvider = yR0.ENV_IMDS_DISABLED = void 0;
  var Sp = i_(),
    v75 = W4();
  yR0.ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
  var E75 = (I) => {
    if (process.env[Sp.ENV_CMDS_RELATIVE_URI] || process.env[Sp.ENV_CMDS_FULL_URI]) return Sp.fromContainerMetadata(I);
    if (process.env[yR0.ENV_IMDS_DISABLED]) return async () => {
      throw new v75.CredentialsProviderError("EC2 Instance Metadata Service access disabled")
    };
    return Sp.fromInstanceMetadata(I)
  };
  yR0.remoteProvider = E75
})
// @from(Start 2763819, End 2764543)
mR0 = Y((TR0) => {
  Object.defineProperty(TR0, "__esModule", {
    value: !0
  });
  TR0.defaultProvider = void 0;
  var M75 = WG1(),
    S75 = LR0(),
    L75 = EG1(),
    y75 = vp(),
    P75 = SC1(),
    yC1 = W4(),
    $75 = K8(),
    u75 = uR0(),
    T75 = (I = {}) => yC1.memoize(yC1.chain(...I.profile || process.env[$75.ENV_PROFILE] ? [] : [M75.fromEnv()], y75.fromSSO(I), S75.fromIni(I), L75.fromProcess(I), P75.fromTokenFile(I), u75.remoteProvider(I), async () => {
      throw new yC1.CredentialsProviderError("Could not load credentials from any providers", !1)
    }), (d) => d.expiration !== void 0 && d.expiration.getTime() - Date.now() < 300000, (d) => d.expiration !== void 0);
  TR0.defaultProvider = T75
})
// @from(Start 2764549, End 2764684)
$C1 = Y((PC1) => {
  Object.defineProperty(PC1, "__esModule", {
    value: !0
  });
  var O75 = x1();
  O75.__exportStar(mR0(), PC1)
})
// @from(Start 2764690, End 2773428)
BU0 = Y((WU0) => {
  Object.defineProperty(WU0, "__esModule", {
    value: !0
  });
  WU0.ruleSet = void 0;
  var aR0 = "required",
    _4 = "type",
    u5 = "fn",
    T5 = "argv",
    e_ = "ref",
    lR0 = !1,
    m75 = !0,
    AJ = "booleanEquals",
    P7 = "tree",
    a8 = "stringEquals",
    sR0 = "sigv4",
    oR0 = "sts",
    eR0 = "us-east-1",
    C3 = "endpoint",
    bR0 = "https://sts.{Region}.{PartitionResult#dnsSuffix}",
    nf = "error",
    TC1 = "getAttr",
    hR0 = {
      [aR0]: !1,
      [_4]: "String"
    },
    uC1 = {
      [aR0]: !0,
      default: !1,
      [_4]: "Boolean"
    },
    tR0 = {
      [e_]: "Endpoint"
    },
    jR0 = {
      [u5]: "isSet",
      [T5]: [{
        [e_]: "Region"
      }]
    },
    s8 = {
      [e_]: "Region"
    },
    kR0 = {
      [u5]: "aws.partition",
      [T5]: [s8],
      assign: "PartitionResult"
    },
    IU0 = {
      [e_]: "UseFIPS"
    },
    dU0 = {
      [e_]: "UseDualStack"
    },
    $7 = {
      url: "https://sts.amazonaws.com",
      properties: {
        authSchemes: [{
          name: sR0,
          signingName: oR0,
          signingRegion: eR0
        }]
      },
      headers: {}
    },
    GG = {},
    xR0 = {
      conditions: [{
        [u5]: a8,
        [T5]: [s8, "aws-global"]
      }],
      [C3]: $7,
      [_4]: C3
    },
    GU0 = {
      [u5]: AJ,
      [T5]: [IU0, !0]
    },
    ZU0 = {
      [u5]: AJ,
      [T5]: [dU0, !0]
    },
    cR0 = {
      [u5]: AJ,
      [T5]: [!0, {
        [u5]: TC1,
        [T5]: [{
          [e_]: "PartitionResult"
        }, "supportsFIPS"]
      }]
    },
    CU0 = {
      [e_]: "PartitionResult"
    },
    pR0 = {
      [u5]: AJ,
      [T5]: [!0, {
        [u5]: TC1,
        [T5]: [CU0, "supportsDualStack"]
      }]
    },
    iR0 = [{
      [u5]: "isSet",
      [T5]: [tR0]
    }],
    nR0 = [GU0],
    rR0 = [ZU0],
    l75 = {
      version: "1.0",
      parameters: {
        Region: hR0,
        UseDualStack: uC1,
        UseFIPS: uC1,
        Endpoint: hR0,
        UseGlobalEndpoint: uC1
      },
      rules: [{
        conditions: [{
          [u5]: AJ,
          [T5]: [{
            [e_]: "UseGlobalEndpoint"
          }, m75]
        }, {
          [u5]: "not",
          [T5]: iR0
        }, jR0, kR0, {
          [u5]: AJ,
          [T5]: [IU0, lR0]
        }, {
          [u5]: AJ,
          [T5]: [dU0, lR0]
        }],
        [_4]: P7,
        rules: [{
          conditions: [{
            [u5]: a8,
            [T5]: [s8, "ap-northeast-1"]
          }],
          endpoint: $7,
          [_4]: C3
        }, {
          conditions: [{
            [u5]: a8,
            [T5]: [s8, "ap-south-1"]
          }],
          endpoint: $7,
          [_4]: C3
        }, {
          conditions: [{
            [u5]: a8,
            [T5]: [s8, "ap-southeast-1"]
          }],
          endpoint: $7,
          [_4]: C3
        }, {
          conditions: [{
            [u5]: a8,
            [T5]: [s8, "ap-southeast-2"]
          }],
          endpoint: $7,
          [_4]: C3
        }, xR0, {
          conditions: [{
            [u5]: a8,
            [T5]: [s8, "ca-central-1"]
          }],
          endpoint: $7,
          [_4]: C3
        }, {
          conditions: [{
            [u5]: a8,
            [T5]: [s8, "eu-central-1"]
          }],
          endpoint: $7,
          [_4]: C3
        }, {
          conditions: [{
            [u5]: a8,
            [T5]: [s8, "eu-north-1"]
          }],
          endpoint: $7,
          [_4]: C3
        }, {
          conditions: [{
            [u5]: a8,
            [T5]: [s8, "eu-west-1"]
          }],
          endpoint: $7,
          [_4]: C3
        }, {
          conditions: [{
            [u5]: a8,
            [T5]: [s8, "eu-west-2"]
          }],
          endpoint: $7,
          [_4]: C3
        }, {
          conditions: [{
            [u5]: a8,
            [T5]: [s8, "eu-west-3"]
          }],
          endpoint: $7,
          [_4]: C3
        }, {
          conditions: [{
            [u5]: a8,
            [T5]: [s8, "sa-east-1"]
          }],
          endpoint: $7,
          [_4]: C3
        }, {
          conditions: [{
            [u5]: a8,
            [T5]: [s8, eR0]
          }],
          endpoint: $7,
          [_4]: C3
        }, {
          conditions: [{
            [u5]: a8,
            [T5]: [s8, "us-east-2"]
          }],
          endpoint: $7,
          [_4]: C3
        }, {
          conditions: [{
            [u5]: a8,
            [T5]: [s8, "us-west-1"]
          }],
          endpoint: $7,
          [_4]: C3
        }, {
          conditions: [{
            [u5]: a8,
            [T5]: [s8, "us-west-2"]
          }],
          endpoint: $7,
          [_4]: C3
        }, {
          endpoint: {
            url: bR0,
            properties: {
              authSchemes: [{
                name: sR0,
                signingName: oR0,
                signingRegion: "{Region}"
              }]
            },
            headers: GG
          },
          [_4]: C3
        }]
      }, {
        conditions: iR0,
        [_4]: P7,
        rules: [{
          conditions: nR0,
          error: "Invalid Configuration: FIPS and custom endpoint are not supported",
          [_4]: nf
        }, {
          [_4]: P7,
          rules: [{
            conditions: rR0,
            error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
            [_4]: nf
          }, {
            endpoint: {
              url: tR0,
              properties: GG,
              headers: GG
            },
            [_4]: C3
          }]
        }]
      }, {
        [_4]: P7,
        rules: [{
          conditions: [jR0],
          [_4]: P7,
          rules: [{
            conditions: [kR0],
            [_4]: P7,
            rules: [{
              conditions: [GU0, ZU0],
              [_4]: P7,
              rules: [{
                conditions: [cR0, pR0],
                [_4]: P7,
                rules: [{
                  [_4]: P7,
                  rules: [{
                    endpoint: {
                      url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                      properties: GG,
                      headers: GG
                    },
                    [_4]: C3
                  }]
                }]
              }, {
                error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                [_4]: nf
              }]
            }, {
              conditions: nR0,
              [_4]: P7,
              rules: [{
                conditions: [cR0],
                [_4]: P7,
                rules: [{
                  [_4]: P7,
                  rules: [{
                    conditions: [{
                      [u5]: a8,
                      [T5]: ["aws-us-gov", {
                        [u5]: TC1,
                        [T5]: [CU0, "name"]
                      }]
                    }],
                    endpoint: {
                      url: "https://sts.{Region}.amazonaws.com",
                      properties: GG,
                      headers: GG
                    },
                    [_4]: C3
                  }, {
                    endpoint: {
                      url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",
                      properties: GG,
                      headers: GG
                    },
                    [_4]: C3
                  }]
                }]
              }, {
                error: "FIPS is enabled but this partition does not support FIPS",
                [_4]: nf
              }]
            }, {
              conditions: rR0,
              [_4]: P7,
              rules: [{
                conditions: [pR0],
                [_4]: P7,
                rules: [{
                  [_4]: P7,
                  rules: [{
                    endpoint: {
                      url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",
                      properties: GG,
                      headers: GG
                    },
                    [_4]: C3
                  }]
                }]
              }, {
                error: "DualStack is enabled but this partition does not support DualStack",
                [_4]: nf
              }]
            }, {
              [_4]: P7,
              rules: [xR0, {
                endpoint: {
                  url: bR0,
                  properties: GG,
                  headers: GG
                },
                [_4]: C3
              }]
            }]
          }]
        }, {
          error: "Invalid Configuration: Missing Region",
          [_4]: nf
        }]
      }]
    };
  WU0.ruleSet = l75
})
// @from(Start 2773434, End 2773774)
XU0 = Y((AU0) => {
  Object.defineProperty(AU0, "__esModule", {
    value: !0
  });
  AU0.defaultEndpointResolver = void 0;
  var b75 = qL(),
    h75 = BU0(),
    j75 = (I, d = {}) => {
      return b75.resolveEndpoint(h75.ruleSet, {
        endpointParams: I,
        logger: d.logger
      })
    };
  AU0.defaultEndpointResolver = j75
})
// @from(Start 2773780, End 2774545)
FU0 = Y((DU0) => {
  Object.defineProperty(DU0, "__esModule", {
    value: !0
  });
  DU0.getRuntimeConfig = void 0;
  var k75 = v0(),
    x75 = FV(),
    YU0 = IJ(),
    _U0 = hC(),
    c75 = XU0(),
    p75 = (I) => ({
      apiVersion: "2011-06-15",
      base64Decoder: I?.base64Decoder ?? YU0.fromBase64,
      base64Encoder: I?.base64Encoder ?? YU0.toBase64,
      disableHostPrefix: I?.disableHostPrefix ?? !1,
      endpointProvider: I?.endpointProvider ?? c75.defaultEndpointResolver,
      logger: I?.logger ?? new k75.NoOpLogger,
      serviceId: I?.serviceId ?? "STS",
      urlParser: I?.urlParser ?? x75.parseUrl,
      utf8Decoder: I?.utf8Decoder ?? _U0.fromUtf8,
      utf8Encoder: I?.utf8Encoder ?? _U0.toUtf8
    });
  DU0.getRuntimeConfig = p75
})
// @from(Start 2774551, End 2776509)
zU0 = Y((KU0) => {
  Object.defineProperty(KU0, "__esModule", {
    value: !0
  });
  KU0.getRuntimeConfig = void 0;
  var i75 = x1(),
    n75 = i75.__importDefault(kB0()),
    r75 = ZG1(),
    Lp = Cd(),
    a75 = $C1(),
    s75 = og(),
    gU0 = dG(),
    Ay = QZ(),
    JU0 = eg(),
    o75 = tg(),
    e75 = Wd(),
    t75 = ac(),
    II5 = FU0(),
    dI5 = v0(),
    GI5 = dJ(),
    ZI5 = v0(),
    CI5 = (I) => {
      ZI5.emitWarningIfUnsupportedVersion(process.version);
      let d = GI5.resolveDefaultsModeConfig(I),
        G = () => d().then(dI5.loadConfigsForDefaultMode),
        Z = II5.getRuntimeConfig(I);
      return {
        ...Z,
        ...I,
        runtime: "node",
        defaultsMode: d,
        bodyLengthChecker: I?.bodyLengthChecker ?? o75.calculateBodyLength,
        credentialDefaultProvider: I?.credentialDefaultProvider ?? r75.decorateDefaultCredentialProvider(a75.defaultProvider),
        defaultUserAgentProvider: I?.defaultUserAgentProvider ?? t75.defaultUserAgent({
          serviceId: Z.serviceId,
          clientVersion: n75.default.version
        }),
        maxAttempts: I?.maxAttempts ?? Ay.loadConfig(gU0.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: I?.region ?? Ay.loadConfig(Lp.NODE_REGION_CONFIG_OPTIONS, Lp.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: I?.requestHandler ?? new JU0.NodeHttpHandler(G),
        retryMode: I?.retryMode ?? Ay.loadConfig({
          ...gU0.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await G()).retryMode || e75.DEFAULT_RETRY_MODE
        }),
        sha256: I?.sha256 ?? s75.Hash.bind(null, "sha256"),
        streamCollector: I?.streamCollector ?? JU0.streamCollector,
        useDualstackEndpoint: I?.useDualstackEndpoint ?? Ay.loadConfig(Lp.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: I?.useFipsEndpoint ?? Ay.loadConfig(Lp.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
      }
    };
  KU0.getRuntimeConfig = CI5
})
// @from(Start 2776515, End 2777896)
yp = Y((mC1) => {
  Object.defineProperty(mC1, "__esModule", {
    value: !0
  });
  mC1.STSClient = mC1.__Client = void 0;
  var WI5 = Cd(),
    wI5 = jg(),
    BI5 = u2(),
    QU0 = Xc(),
    AI5 = Yc(),
    VI5 = _c(),
    fU0 = dG(),
    XI5 = lB0(),
    qU0 = Lc(),
    RU0 = v0();
  Object.defineProperty(mC1, "__Client", {
    enumerable: !0,
    get: function() {
      return RU0.Client
    }
  });
  var YI5 = jB0(),
    _I5 = zU0();
  class OC1 extends RU0.Client {
    constructor(I) {
      let d = _I5.getRuntimeConfig(I),
        G = YI5.resolveClientEndpointParameters(d),
        Z = WI5.resolveRegionConfig(G),
        C = BI5.resolveEndpointConfig(Z),
        W = fU0.resolveRetryConfig(C),
        w = QU0.resolveHostHeaderConfig(W),
        B = XI5.resolveStsAuthConfig(w, {
          stsClientCtor: OC1
        }),
        A = qU0.resolveUserAgentConfig(B);
      super(A);
      this.config = A, this.middlewareStack.use(fU0.getRetryPlugin(this.config)), this.middlewareStack.use(wI5.getContentLengthPlugin(this.config)), this.middlewareStack.use(QU0.getHostHeaderPlugin(this.config)), this.middlewareStack.use(AI5.getLoggerPlugin(this.config)), this.middlewareStack.use(VI5.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(qU0.getUserAgentPlugin(this.config))
    }
    destroy() {
      super.destroy()
    }
  }
  mC1.STSClient = OC1
})
// @from(Start 2777902, End 2779848)
hC1 = Y((bC1) => {
  Object.defineProperty(bC1, "__esModule", {
    value: !0
  });
  bC1.AssumeRoleWithSAMLCommand = bC1.$Command = void 0;
  var DI5 = u2(),
    HI5 = r2(),
    MU0 = v0();
  Object.defineProperty(bC1, "$Command", {
    enumerable: !0,
    get: function() {
      return MU0.Command
    }
  });
  var vU0 = T_(),
    EU0 = fV();
  class lC1 extends MU0.Command {
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
      this.middlewareStack.use(HI5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(DI5.getEndpointPlugin(d, lC1.getEndpointParameterInstructions()));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "STSClient",
          commandName: "AssumeRoleWithSAMLCommand",
          inputFilterSensitiveLog: vU0.AssumeRoleWithSAMLRequestFilterSensitiveLog,
          outputFilterSensitiveLog: vU0.AssumeRoleWithSAMLResponseFilterSensitiveLog
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return EU0.se_AssumeRoleWithSAMLCommand(I, d)
    }
    deserialize(I, d) {
      return EU0.de_AssumeRoleWithSAMLCommand(I, d)
    }
  }
  bC1.AssumeRoleWithSAMLCommand = lC1
})
// @from(Start 2779854, End 2781812)
xC1 = Y((kC1) => {
  Object.defineProperty(kC1, "__esModule", {
    value: !0
  });
  kC1.DecodeAuthorizationMessageCommand = kC1.$Command = void 0;
  var FI5 = u2(),
    gI5 = r2(),
    JI5 = A9(),
    yU0 = v0();
  Object.defineProperty(kC1, "$Command", {
    enumerable: !0,
    get: function() {
      return yU0.Command
    }
  });
  var LU0 = fV();
  class jC1 extends yU0.Command {
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
      this.middlewareStack.use(gI5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(FI5.getEndpointPlugin(d, jC1.getEndpointParameterInstructions())), this.middlewareStack.use(JI5.getAwsAuthPlugin(d));
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
      return LU0.se_DecodeAuthorizationMessageCommand(I, d)
    }
    deserialize(I, d) {
      return LU0.de_DecodeAuthorizationMessageCommand(I, d)
    }
  }
  kC1.DecodeAuthorizationMessageCommand = jC1
})
// @from(Start 2781818, End 2783726)
iC1 = Y((pC1) => {
  Object.defineProperty(pC1, "__esModule", {
    value: !0
  });
  pC1.GetAccessKeyInfoCommand = pC1.$Command = void 0;
  var KI5 = u2(),
    NI5 = r2(),
    zI5 = A9(),
    uU0 = v0();
  Object.defineProperty(pC1, "$Command", {
    enumerable: !0,
    get: function() {
      return uU0.Command
    }
  });
  var $U0 = fV();
  class cC1 extends uU0.Command {
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
      this.middlewareStack.use(NI5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(KI5.getEndpointPlugin(d, cC1.getEndpointParameterInstructions())), this.middlewareStack.use(zI5.getAwsAuthPlugin(d));
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
      return $U0.se_GetAccessKeyInfoCommand(I, d)
    }
    deserialize(I, d) {
      return $U0.de_GetAccessKeyInfoCommand(I, d)
    }
  }
  pC1.GetAccessKeyInfoCommand = cC1
})
// @from(Start 2783732, End 2785645)
aC1 = Y((rC1) => {
  Object.defineProperty(rC1, "__esModule", {
    value: !0
  });
  rC1.GetCallerIdentityCommand = rC1.$Command = void 0;
  var QI5 = u2(),
    fI5 = r2(),
    qI5 = A9(),
    mU0 = v0();
  Object.defineProperty(rC1, "$Command", {
    enumerable: !0,
    get: function() {
      return mU0.Command
    }
  });
  var OU0 = fV();
  class nC1 extends mU0.Command {
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
      this.middlewareStack.use(fI5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(QI5.getEndpointPlugin(d, nC1.getEndpointParameterInstructions())), this.middlewareStack.use(qI5.getAwsAuthPlugin(d));
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
      return OU0.se_GetCallerIdentityCommand(I, d)
    }
    deserialize(I, d) {
      return OU0.de_GetCallerIdentityCommand(I, d)
    }
  }
  rC1.GetCallerIdentityCommand = nC1
})
// @from(Start 2785651, End 2787625)
eC1 = Y((oC1) => {
  Object.defineProperty(oC1, "__esModule", {
    value: !0
  });
  oC1.GetFederationTokenCommand = oC1.$Command = void 0;
  var RI5 = u2(),
    UI5 = r2(),
    vI5 = A9(),
    hU0 = v0();
  Object.defineProperty(oC1, "$Command", {
    enumerable: !0,
    get: function() {
      return hU0.Command
    }
  });
  var EI5 = T_(),
    bU0 = fV();
  class sC1 extends hU0.Command {
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
      this.middlewareStack.use(UI5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(RI5.getEndpointPlugin(d, sC1.getEndpointParameterInstructions())), this.middlewareStack.use(vI5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "STSClient",
          commandName: "GetFederationTokenCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: EI5.GetFederationTokenResponseFilterSensitiveLog
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return bU0.se_GetFederationTokenCommand(I, d)
    }
    deserialize(I, d) {
      return bU0.de_GetFederationTokenCommand(I, d)
    }
  }
  oC1.GetFederationTokenCommand = sC1
})
// @from(Start 2787631, End 2789587)
dW1 = Y((IW1) => {
  Object.defineProperty(IW1, "__esModule", {
    value: !0
  });
  IW1.GetSessionTokenCommand = IW1.$Command = void 0;
  var MI5 = u2(),
    SI5 = r2(),
    LI5 = A9(),
    xU0 = v0();
  Object.defineProperty(IW1, "$Command", {
    enumerable: !0,
    get: function() {
      return xU0.Command
    }
  });
  var yI5 = T_(),
    kU0 = fV();
  class tC1 extends xU0.Command {
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
      this.middlewareStack.use(SI5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(MI5.getEndpointPlugin(d, tC1.getEndpointParameterInstructions())), this.middlewareStack.use(LI5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "STSClient",
          commandName: "GetSessionTokenCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: yI5.GetSessionTokenResponseFilterSensitiveLog
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return kU0.se_GetSessionTokenCommand(I, d)
    }
    deserialize(I, d) {
      return kU0.de_GetSessionTokenCommand(I, d)
    }
  }
  IW1.GetSessionTokenCommand = tC1
})
// @from(Start 2789593, End 2790492)
nU0 = Y((pU0) => {
  Object.defineProperty(pU0, "__esModule", {
    value: !0
  });
  pU0.STS = void 0;
  var PI5 = v0(),
    $I5 = jc(),
    uI5 = hC1(),
    TI5 = kc(),
    OI5 = xC1(),
    mI5 = iC1(),
    lI5 = aC1(),
    bI5 = eC1(),
    hI5 = dW1(),
    jI5 = yp(),
    kI5 = {
      AssumeRoleCommand: $I5.AssumeRoleCommand,
      AssumeRoleWithSAMLCommand: uI5.AssumeRoleWithSAMLCommand,
      AssumeRoleWithWebIdentityCommand: TI5.AssumeRoleWithWebIdentityCommand,
      DecodeAuthorizationMessageCommand: OI5.DecodeAuthorizationMessageCommand,
      GetAccessKeyInfoCommand: mI5.GetAccessKeyInfoCommand,
      GetCallerIdentityCommand: lI5.GetCallerIdentityCommand,
      GetFederationTokenCommand: bI5.GetFederationTokenCommand,
      GetSessionTokenCommand: hI5.GetSessionTokenCommand
    };
  class GW1 extends jI5.STSClient {}
  pU0.STS = GW1;
  PI5.createAggregatedClient(kI5, GW1)
})
// @from(Start 2790498, End 2790836)
rU0 = Y((ZB) => {
  Object.defineProperty(ZB, "__esModule", {
    value: !0
  });
  var t_ = x1();
  t_.__exportStar(jc(), ZB);
  t_.__exportStar(hC1(), ZB);
  t_.__exportStar(kc(), ZB);
  t_.__exportStar(xC1(), ZB);
  t_.__exportStar(iC1(), ZB);
  t_.__exportStar(aC1(), ZB);
  t_.__exportStar(eC1(), ZB);
  t_.__exportStar(dW1(), ZB)
})
// @from(Start 2790842, End 2790976)
aU0 = Y((ZW1) => {
  Object.defineProperty(ZW1, "__esModule", {
    value: !0
  });
  var xI5 = x1();
  xI5.__exportStar(T_(), ZW1)
})
// @from(Start 2790982, End 2791906)
Zv0 = Y((tU0) => {
  Object.defineProperty(tU0, "__esModule", {
    value: !0
  });
  tU0.decorateDefaultCredentialProvider = tU0.getDefaultRoleAssumerWithWebIdentity = tU0.getDefaultRoleAssumer = void 0;
  var sU0 = ZG1(),
    oU0 = yp(),
    eU0 = (I, d) => {
      if (!d) return I;
      else return class G extends I {
        constructor(Z) {
          super(Z);
          for (let C of d) this.middlewareStack.use(C)
        }
      }
    },
    cI5 = (I = {}, d) => sU0.getDefaultRoleAssumer(I, eU0(oU0.STSClient, d));
  tU0.getDefaultRoleAssumer = cI5;
  var pI5 = (I = {}, d) => sU0.getDefaultRoleAssumerWithWebIdentity(I, eU0(oU0.STSClient, d));
  tU0.getDefaultRoleAssumerWithWebIdentity = pI5;
  var iI5 = (I) => (d) => I({
    roleAssumer: tU0.getDefaultRoleAssumer(d),
    roleAssumerWithWebIdentity: tU0.getDefaultRoleAssumerWithWebIdentity(d),
    ...d
  });
  tU0.decorateDefaultCredentialProvider = iI5
})
// @from(Start 2791912, End 2792358)
Cv0 = Y((ID) => {
  Object.defineProperty(ID, "__esModule", {
    value: !0
  });
  ID.STSServiceException = void 0;
  var Vy = x1();
  Vy.__exportStar(yp(), ID);
  Vy.__exportStar(nU0(), ID);
  Vy.__exportStar(rU0(), ID);
  Vy.__exportStar(aU0(), ID);
  Vy.__exportStar(Zv0(), ID);
  var nI5 = uc();
  Object.defineProperty(ID, "STSServiceException", {
    enumerable: !0,
    get: function() {
      return nI5.STSServiceException
    }
  })
})
// @from(Start 2792364, End 2796461)
Kv0 = Y((gv0) => {
  Object.defineProperty(gv0, "__esModule", {
    value: !0
  });
  gv0.ruleSet = void 0;
  var _v0 = "required",
    MV = "fn",
    SV = "argv",
    rf = "ref",
    CW1 = "PartitionResult",
    CB = "tree",
    Xy = "error",
    Yy = "endpoint",
    Wv0 = {
      [_v0]: !1,
      type: "String"
    },
    wv0 = {
      [_v0]: !0,
      default: !1,
      type: "Boolean"
    },
    Dv0 = {
      [rf]: "Endpoint"
    },
    Hv0 = {
      [MV]: "booleanEquals",
      [SV]: [{
        [rf]: "UseFIPS"
      }, !0]
    },
    Fv0 = {
      [MV]: "booleanEquals",
      [SV]: [{
        [rf]: "UseDualStack"
      }, !0]
    },
    WB = {},
    Bv0 = {
      [MV]: "booleanEquals",
      [SV]: [!0, {
        [MV]: "getAttr",
        [SV]: [{
          [rf]: CW1
        }, "supportsFIPS"]
      }]
    },
    Av0 = {
      [MV]: "booleanEquals",
      [SV]: [!0, {
        [MV]: "getAttr",
        [SV]: [{
          [rf]: CW1
        }, "supportsDualStack"]
      }]
    },
    Vv0 = [Dv0],
    Xv0 = [Hv0],
    Yv0 = [Fv0],
    aI5 = {
      version: "1.0",
      parameters: {
        Region: Wv0,
        UseDualStack: wv0,
        UseFIPS: wv0,
        Endpoint: Wv0
      },
      rules: [{
        conditions: [{
          [MV]: "aws.partition",
          [SV]: [{
            [rf]: "Region"
          }],
          assign: CW1
        }],
        type: CB,
        rules: [{
          conditions: [{
            [MV]: "isSet",
            [SV]: Vv0
          }, {
            [MV]: "parseURL",
            [SV]: Vv0,
            assign: "url"
          }],
          type: CB,
          rules: [{
            conditions: Xv0,
            error: "Invalid Configuration: FIPS and custom endpoint are not supported",
            type: Xy
          }, {
            type: CB,
            rules: [{
              conditions: Yv0,
              error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
              type: Xy
            }, {
              endpoint: {
                url: Dv0,
                properties: WB,
                headers: WB
              },
              type: Yy
            }]
          }]
        }, {
          conditions: [Hv0, Fv0],
          type: CB,
          rules: [{
            conditions: [Bv0, Av0],
            type: CB,
            rules: [{
              endpoint: {
                url: "https://cognito-identity-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                properties: WB,
                headers: WB
              },
              type: Yy
            }]
          }, {
            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
            type: Xy
          }]
        }, {
          conditions: Xv0,
          type: CB,
          rules: [{
            conditions: [Bv0],
            type: CB,
            rules: [{
              type: CB,
              rules: [{
                endpoint: {
                  url: "https://cognito-identity-fips.{Region}.{PartitionResult#dnsSuffix}",
                  properties: WB,
                  headers: WB
                },
                type: Yy
              }]
            }]
          }, {
            error: "FIPS is enabled but this partition does not support FIPS",
            type: Xy
          }]
        }, {
          conditions: Yv0,
          type: CB,
          rules: [{
            conditions: [Av0],
            type: CB,
            rules: [{
              endpoint: {
                url: "https://cognito-identity.{Region}.{PartitionResult#dualStackDnsSuffix}",
                properties: WB,
                headers: WB
              },
              type: Yy
            }]
          }, {
            error: "DualStack is enabled but this partition does not support DualStack",
            type: Xy
          }]
        }, {
          endpoint: {
            url: "https://cognito-identity.{Region}.{PartitionResult#dnsSuffix}",
            properties: WB,
            headers: WB
          },
          type: Yy
        }]
      }]
    };
  gv0.ruleSet = aI5
})
// @from(Start 2796467, End 2796807)
Qv0 = Y((Nv0) => {
  Object.defineProperty(Nv0, "__esModule", {
    value: !0
  });
  Nv0.defaultEndpointResolver = void 0;
  var sI5 = qL(),
    oI5 = Kv0(),
    eI5 = (I, d = {}) => {
      return sI5.resolveEndpoint(oI5.ruleSet, {
        endpointParams: I,
        logger: d.logger
      })
    };
  Nv0.defaultEndpointResolver = eI5
})
// @from(Start 2796813, End 2797591)
vv0 = Y((Rv0) => {
  Object.defineProperty(Rv0, "__esModule", {
    value: !0
  });
  Rv0.getRuntimeConfig = void 0;
  var tI5 = v0(),
    Id5 = FV(),
    fv0 = IJ(),
    qv0 = hC(),
    dd5 = Qv0(),
    Gd5 = (I) => ({
      apiVersion: "2014-06-30",
      base64Decoder: I?.base64Decoder ?? fv0.fromBase64,
      base64Encoder: I?.base64Encoder ?? fv0.toBase64,
      disableHostPrefix: I?.disableHostPrefix ?? !1,
      endpointProvider: I?.endpointProvider ?? dd5.defaultEndpointResolver,
      logger: I?.logger ?? new tI5.NoOpLogger,
      serviceId: I?.serviceId ?? "Cognito Identity",
      urlParser: I?.urlParser ?? Id5.parseUrl,
      utf8Decoder: I?.utf8Decoder ?? qv0.fromUtf8,
      utf8Encoder: I?.utf8Encoder ?? qv0.toUtf8
    });
  Rv0.getRuntimeConfig = Gd5
})
// @from(Start 2797597, End 2799555)
yv0 = Y((Sv0) => {
  Object.defineProperty(Sv0, "__esModule", {
    value: !0
  });
  Sv0.getRuntimeConfig = void 0;
  var Zd5 = x1(),
    Cd5 = Zd5.__importDefault(TB0()),
    Wd5 = Cv0(),
    Pp = Cd(),
    wd5 = $C1(),
    Bd5 = og(),
    Ev0 = dG(),
    _y = QZ(),
    Mv0 = eg(),
    Ad5 = tg(),
    Vd5 = Wd(),
    Xd5 = ac(),
    Yd5 = vv0(),
    _d5 = v0(),
    Dd5 = dJ(),
    Hd5 = v0(),
    Fd5 = (I) => {
      Hd5.emitWarningIfUnsupportedVersion(process.version);
      let d = Dd5.resolveDefaultsModeConfig(I),
        G = () => d().then(_d5.loadConfigsForDefaultMode),
        Z = Yd5.getRuntimeConfig(I);
      return {
        ...Z,
        ...I,
        runtime: "node",
        defaultsMode: d,
        bodyLengthChecker: I?.bodyLengthChecker ?? Ad5.calculateBodyLength,
        credentialDefaultProvider: I?.credentialDefaultProvider ?? Wd5.decorateDefaultCredentialProvider(wd5.defaultProvider),
        defaultUserAgentProvider: I?.defaultUserAgentProvider ?? Xd5.defaultUserAgent({
          serviceId: Z.serviceId,
          clientVersion: Cd5.default.version
        }),
        maxAttempts: I?.maxAttempts ?? _y.loadConfig(Ev0.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: I?.region ?? _y.loadConfig(Pp.NODE_REGION_CONFIG_OPTIONS, Pp.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: I?.requestHandler ?? new Mv0.NodeHttpHandler(G),
        retryMode: I?.retryMode ?? _y.loadConfig({
          ...Ev0.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await G()).retryMode || Vd5.DEFAULT_RETRY_MODE
        }),
        sha256: I?.sha256 ?? Bd5.Hash.bind(null, "sha256"),
        streamCollector: I?.streamCollector ?? Mv0.streamCollector,
        useDualstackEndpoint: I?.useDualstackEndpoint ?? _y.loadConfig(Pp.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: I?.useFipsEndpoint ?? _y.loadConfig(Pp.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
      }
    };
  Sv0.getRuntimeConfig = Fd5
})
// @from(Start 2799561, End 2800923)
$p = Y((WW1) => {
  Object.defineProperty(WW1, "__esModule", {
    value: !0
  });
  WW1.CognitoIdentityClient = WW1.__Client = void 0;
  var gd5 = Cd(),
    Jd5 = jg(),
    Kd5 = u2(),
    Pv0 = Xc(),
    Nd5 = Yc(),
    zd5 = _c(),
    $v0 = dG(),
    Qd5 = A9(),
    uv0 = Lc(),
    Tv0 = v0();
  Object.defineProperty(WW1, "__Client", {
    enumerable: !0,
    get: function() {
      return Tv0.Client
    }
  });
  var fd5 = uB0(),
    qd5 = yv0();
  class Ov0 extends Tv0.Client {
    constructor(I) {
      let d = qd5.getRuntimeConfig(I),
        G = fd5.resolveClientEndpointParameters(d),
        Z = gd5.resolveRegionConfig(G),
        C = Kd5.resolveEndpointConfig(Z),
        W = $v0.resolveRetryConfig(C),
        w = Pv0.resolveHostHeaderConfig(W),
        B = Qd5.resolveAwsAuthConfig(w),
        A = uv0.resolveUserAgentConfig(B);
      super(A);
      this.config = A, this.middlewareStack.use($v0.getRetryPlugin(this.config)), this.middlewareStack.use(Jd5.getContentLengthPlugin(this.config)), this.middlewareStack.use(Pv0.getHostHeaderPlugin(this.config)), this.middlewareStack.use(Nd5.getLoggerPlugin(this.config)), this.middlewareStack.use(zd5.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(uv0.getUserAgentPlugin(this.config))
    }
    destroy() {
      super.destroy()
    }
  }
  WW1.CognitoIdentityClient = Ov0
})
// @from(Start 2800929, End 2801429)
up = Y((BW1) => {
  Object.defineProperty(BW1, "__esModule", {
    value: !0
  });
  BW1.CognitoIdentityServiceException = BW1.__ServiceException = void 0;
  var lv0 = v0();
  Object.defineProperty(BW1, "__ServiceException", {
    enumerable: !0,
    get: function() {
      return lv0.ServiceException
    }
  });
  class wW1 extends lv0.ServiceException {
    constructor(I) {
      super(I);
      Object.setPrototypeOf(this, wW1.prototype)
    }
  }
  BW1.CognitoIdentityServiceException = wW1
})
// @from(Start 2801435, End 2806340)
NW1 = Y((hv0) => {
  Object.defineProperty(hv0, "__esModule", {
    value: !0
  });
  hv0.ConcurrentModificationException = hv0.DeveloperUserAlreadyRegisteredException = hv0.RoleMappingType = hv0.MappingRuleMatchType = hv0.InvalidIdentityPoolConfigurationException = hv0.ExternalServiceException = hv0.ResourceNotFoundException = hv0.ErrorCode = hv0.TooManyRequestsException = hv0.ResourceConflictException = hv0.NotAuthorizedException = hv0.LimitExceededException = hv0.InvalidParameterException = hv0.InternalErrorException = hv0.AmbiguousRoleResolutionType = void 0;
  var xC = up();
  hv0.AmbiguousRoleResolutionType = {
    AUTHENTICATED_ROLE: "AuthenticatedRole",
    DENY: "Deny"
  };
  class AW1 extends xC.CognitoIdentityServiceException {
    constructor(I) {
      super({
        name: "InternalErrorException",
        $fault: "server",
        ...I
      });
      this.name = "InternalErrorException", this.$fault = "server", Object.setPrototypeOf(this, AW1.prototype)
    }
  }
  hv0.InternalErrorException = AW1;
  class VW1 extends xC.CognitoIdentityServiceException {
    constructor(I) {
      super({
        name: "InvalidParameterException",
        $fault: "client",
        ...I
      });
      this.name = "InvalidParameterException", this.$fault = "client", Object.setPrototypeOf(this, VW1.prototype)
    }
  }
  hv0.InvalidParameterException = VW1;
  class XW1 extends xC.CognitoIdentityServiceException {
    constructor(I) {
      super({
        name: "LimitExceededException",
        $fault: "client",
        ...I
      });
      this.name = "LimitExceededException", this.$fault = "client", Object.setPrototypeOf(this, XW1.prototype)
    }
  }
  hv0.LimitExceededException = XW1;
  class YW1 extends xC.CognitoIdentityServiceException {
    constructor(I) {
      super({
        name: "NotAuthorizedException",
        $fault: "client",
        ...I
      });
      this.name = "NotAuthorizedException", this.$fault = "client", Object.setPrototypeOf(this, YW1.prototype)
    }
  }
  hv0.NotAuthorizedException = YW1;
  class _W1 extends xC.CognitoIdentityServiceException {
    constructor(I) {
      super({
        name: "ResourceConflictException",
        $fault: "client",
        ...I
      });
      this.name = "ResourceConflictException", this.$fault = "client", Object.setPrototypeOf(this, _W1.prototype)
    }
  }
  hv0.ResourceConflictException = _W1;
  class DW1 extends xC.CognitoIdentityServiceException {
    constructor(I) {
      super({
        name: "TooManyRequestsException",
        $fault: "client",
        ...I
      });
      this.name = "TooManyRequestsException", this.$fault = "client", Object.setPrototypeOf(this, DW1.prototype)
    }
  }
  hv0.TooManyRequestsException = DW1;
  hv0.ErrorCode = {
    ACCESS_DENIED: "AccessDenied",
    INTERNAL_SERVER_ERROR: "InternalServerError"
  };
  class HW1 extends xC.CognitoIdentityServiceException {
    constructor(I) {
      super({
        name: "ResourceNotFoundException",
        $fault: "client",
        ...I
      });
      this.name = "ResourceNotFoundException", this.$fault = "client", Object.setPrototypeOf(this, HW1.prototype)
    }
  }
  hv0.ResourceNotFoundException = HW1;
  class FW1 extends xC.CognitoIdentityServiceException {
    constructor(I) {
      super({
        name: "ExternalServiceException",
        $fault: "client",
        ...I
      });
      this.name = "ExternalServiceException", this.$fault = "client", Object.setPrototypeOf(this, FW1.prototype)
    }
  }
  hv0.ExternalServiceException = FW1;
  class gW1 extends xC.CognitoIdentityServiceException {
    constructor(I) {
      super({
        name: "InvalidIdentityPoolConfigurationException",
        $fault: "client",
        ...I
      });
      this.name = "InvalidIdentityPoolConfigurationException", this.$fault = "client", Object.setPrototypeOf(this, gW1.prototype)
    }
  }
  hv0.InvalidIdentityPoolConfigurationException = gW1;
  hv0.MappingRuleMatchType = {
    CONTAINS: "Contains",
    EQUALS: "Equals",
    NOT_EQUAL: "NotEqual",
    STARTS_WITH: "StartsWith"
  };
  hv0.RoleMappingType = {
    RULES: "Rules",
    TOKEN: "Token"
  };
  class JW1 extends xC.CognitoIdentityServiceException {
    constructor(I) {
      super({
        name: "DeveloperUserAlreadyRegisteredException",
        $fault: "client",
        ...I
      });
      this.name = "DeveloperUserAlreadyRegisteredException", this.$fault = "client", Object.setPrototypeOf(this, JW1.prototype)
    }
  }
  hv0.DeveloperUserAlreadyRegisteredException = JW1;
  class KW1 extends xC.CognitoIdentityServiceException {
    constructor(I) {
      super({
        name: "ConcurrentModificationException",
        $fault: "client",
        ...I
      });
      this.name = "ConcurrentModificationException", this.$fault = "client", Object.setPrototypeOf(this, KW1.prototype)
    }
  }
  hv0.ConcurrentModificationException = KW1
})