
// @from(Start 2640396, End 2650454)
jL = Y((yF0) => {
  Object.defineProperty(yF0, "__esModule", {
    value: !0
  });
  yF0.de_LogoutCommand = yF0.de_ListAccountsCommand = yF0.de_ListAccountRolesCommand = yF0.de_GetRoleCredentialsCommand = yF0.se_LogoutCommand = yF0.se_ListAccountsCommand = yF0.se_ListAccountRolesCommand = yF0.se_GetRoleCredentialsCommand = void 0;
  var N4 = v0(),
    Ip = Oc(),
    dp = GJ(),
    d55 = ec(),
    G55 = async (I, d) => {
      let {
        hostname: G,
        protocol: Z = "https",
        port: C,
        path: W
      } = await d.endpoint(), w = N4.map({}, wp, {
        "x-amz-sso_bearer_token": I.accessToken
      }), B = `${W?.endsWith("/")?W.slice(0,-1):W||""}/federation/credentials`, A = N4.map({
        role_name: [, N4.expectNonNull(I.roleName, "roleName")],
        account_id: [, N4.expectNonNull(I.accountId, "accountId")]
      }), V;
      return new Ip.HttpRequest({
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
  yF0.se_GetRoleCredentialsCommand = G55;
  var Z55 = async (I, d) => {
    let {
      hostname: G,
      protocol: Z = "https",
      port: C,
      path: W
    } = await d.endpoint(), w = N4.map({}, wp, {
      "x-amz-sso_bearer_token": I.accessToken
    }), B = `${W?.endsWith("/")?W.slice(0,-1):W||""}/assignment/roles`, A = N4.map({
      next_token: [, I.nextToken],
      max_result: [() => I.maxResults !== void 0, () => I.maxResults.toString()],
      account_id: [, N4.expectNonNull(I.accountId, "accountId")]
    }), V;
    return new Ip.HttpRequest({
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
  yF0.se_ListAccountRolesCommand = Z55;
  var C55 = async (I, d) => {
    let {
      hostname: G,
      protocol: Z = "https",
      port: C,
      path: W
    } = await d.endpoint(), w = N4.map({}, wp, {
      "x-amz-sso_bearer_token": I.accessToken
    }), B = `${W?.endsWith("/")?W.slice(0,-1):W||""}/assignment/accounts`, A = N4.map({
      next_token: [, I.nextToken],
      max_result: [() => I.maxResults !== void 0, () => I.maxResults.toString()]
    }), V;
    return new Ip.HttpRequest({
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
  yF0.se_ListAccountsCommand = C55;
  var W55 = async (I, d) => {
    let {
      hostname: G,
      protocol: Z = "https",
      port: C,
      path: W
    } = await d.endpoint(), w = N4.map({}, wp, {
      "x-amz-sso_bearer_token": I.accessToken
    }), B = `${W?.endsWith("/")?W.slice(0,-1):W||""}/logout`, A;
    return new Ip.HttpRequest({
      protocol: Z,
      hostname: G,
      port: C,
      method: "POST",
      headers: w,
      path: B,
      body: A
    })
  };
  yF0.se_LogoutCommand = W55;
  var w55 = async (I, d) => {
    if (I.statusCode !== 200 && I.statusCode >= 300) return B55(I, d);
    let G = N4.map({
        $metadata: r_(I)
      }),
      Z = N4.expectNonNull(N4.expectObject(await Bp(I.body, d)), "body"),
      C = N4.take(Z, {
        roleCredentials: N4._json
      });
    return Object.assign(G, C), G
  };
  yF0.de_GetRoleCredentialsCommand = w55;
  var B55 = async (I, d) => {
    let G = {
        ...I,
        body: await Ap(I.body, d)
      },
      Z = Vp(I, G.body);
    switch (Z) {
      case "InvalidRequestException":
      case "com.amazonaws.sso#InvalidRequestException":
        throw await Zp(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.sso#ResourceNotFoundException":
        throw await iG1(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.sso#TooManyRequestsException":
        throw await Cp(G, d);
      case "UnauthorizedException":
      case "com.amazonaws.sso#UnauthorizedException":
        throw await Wp(G, d);
      default:
        let C = G.body;
        return Gp({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, A55 = async (I, d) => {
    if (I.statusCode !== 200 && I.statusCode >= 300) return V55(I, d);
    let G = N4.map({
        $metadata: r_(I)
      }),
      Z = N4.expectNonNull(N4.expectObject(await Bp(I.body, d)), "body"),
      C = N4.take(Z, {
        nextToken: N4.expectString,
        roleList: N4._json
      });
    return Object.assign(G, C), G
  };
  yF0.de_ListAccountRolesCommand = A55;
  var V55 = async (I, d) => {
    let G = {
        ...I,
        body: await Ap(I.body, d)
      },
      Z = Vp(I, G.body);
    switch (Z) {
      case "InvalidRequestException":
      case "com.amazonaws.sso#InvalidRequestException":
        throw await Zp(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.sso#ResourceNotFoundException":
        throw await iG1(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.sso#TooManyRequestsException":
        throw await Cp(G, d);
      case "UnauthorizedException":
      case "com.amazonaws.sso#UnauthorizedException":
        throw await Wp(G, d);
      default:
        let C = G.body;
        return Gp({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, X55 = async (I, d) => {
    if (I.statusCode !== 200 && I.statusCode >= 300) return Y55(I, d);
    let G = N4.map({
        $metadata: r_(I)
      }),
      Z = N4.expectNonNull(N4.expectObject(await Bp(I.body, d)), "body"),
      C = N4.take(Z, {
        accountList: N4._json,
        nextToken: N4.expectString
      });
    return Object.assign(G, C), G
  };
  yF0.de_ListAccountsCommand = X55;
  var Y55 = async (I, d) => {
    let G = {
        ...I,
        body: await Ap(I.body, d)
      },
      Z = Vp(I, G.body);
    switch (Z) {
      case "InvalidRequestException":
      case "com.amazonaws.sso#InvalidRequestException":
        throw await Zp(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.sso#ResourceNotFoundException":
        throw await iG1(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.sso#TooManyRequestsException":
        throw await Cp(G, d);
      case "UnauthorizedException":
      case "com.amazonaws.sso#UnauthorizedException":
        throw await Wp(G, d);
      default:
        let C = G.body;
        return Gp({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, _55 = async (I, d) => {
    if (I.statusCode !== 200 && I.statusCode >= 300) return D55(I, d);
    let G = N4.map({
      $metadata: r_(I)
    });
    return await LF0(I.body, d), G
  };
  yF0.de_LogoutCommand = _55;
  var D55 = async (I, d) => {
    let G = {
        ...I,
        body: await Ap(I.body, d)
      },
      Z = Vp(I, G.body);
    switch (Z) {
      case "InvalidRequestException":
      case "com.amazonaws.sso#InvalidRequestException":
        throw await Zp(G, d);
      case "TooManyRequestsException":
      case "com.amazonaws.sso#TooManyRequestsException":
        throw await Cp(G, d);
      case "UnauthorizedException":
      case "com.amazonaws.sso#UnauthorizedException":
        throw await Wp(G, d);
      default:
        let C = G.body;
        return Gp({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, Gp = N4.withBaseException(d55.SSOServiceException), Zp = async (I, d) => {
    let G = N4.map({}),
      Z = I.body,
      C = N4.take(Z, {
        message: N4.expectString
      });
    Object.assign(G, C);
    let W = new dp.InvalidRequestException({
      $metadata: r_(I),
      ...G
    });
    return N4.decorateServiceException(W, I.body)
  }, iG1 = async (I, d) => {
    let G = N4.map({}),
      Z = I.body,
      C = N4.take(Z, {
        message: N4.expectString
      });
    Object.assign(G, C);
    let W = new dp.ResourceNotFoundException({
      $metadata: r_(I),
      ...G
    });
    return N4.decorateServiceException(W, I.body)
  }, Cp = async (I, d) => {
    let G = N4.map({}),
      Z = I.body,
      C = N4.take(Z, {
        message: N4.expectString
      });
    Object.assign(G, C);
    let W = new dp.TooManyRequestsException({
      $metadata: r_(I),
      ...G
    });
    return N4.decorateServiceException(W, I.body)
  }, Wp = async (I, d) => {
    let G = N4.map({}),
      Z = I.body,
      C = N4.take(Z, {
        message: N4.expectString
      });
    Object.assign(G, C);
    let W = new dp.UnauthorizedException({
      $metadata: r_(I),
      ...G
    });
    return N4.decorateServiceException(W, I.body)
  }, r_ = (I) => ({
    httpStatusCode: I.statusCode,
    requestId: I.headers["x-amzn-requestid"] ?? I.headers["x-amzn-request-id"] ?? I.headers["x-amz-request-id"],
    extendedRequestId: I.headers["x-amz-id-2"],
    cfId: I.headers["x-amz-cf-id"]
  }), LF0 = (I = new Uint8Array, d) => {
    if (I instanceof Uint8Array) return Promise.resolve(I);
    return d.streamCollector(I) || Promise.resolve(new Uint8Array)
  }, H55 = (I, d) => LF0(I, d).then((G) => d.utf8Encoder(G)), wp = (I) => I !== void 0 && I !== null && I !== "" && (!Object.getOwnPropertyNames(I).includes("length") || I.length != 0) && (!Object.getOwnPropertyNames(I).includes("size") || I.size != 0), Bp = (I, d) => H55(I, d).then((G) => {
    if (G.length) return JSON.parse(G);
    return {}
  }), Ap = async (I, d) => {
    let G = await Bp(I, d);
    return G.message = G.message ?? G.Message, G
  }, Vp = (I, d) => {
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
// @from(Start 2650460, End 2652297)
aG1 = Y((rG1) => {
  Object.defineProperty(rG1, "__esModule", {
    value: !0
  });
  rG1.GetRoleCredentialsCommand = rG1.$Command = void 0;
  var f55 = u2(),
    q55 = r2(),
    TF0 = v0();
  Object.defineProperty(rG1, "$Command", {
    enumerable: !0,
    get: function() {
      return TF0.Command
    }
  });
  var $F0 = GJ(),
    uF0 = jL();
  class nG1 extends TF0.Command {
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
      this.middlewareStack.use(q55.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(f55.getEndpointPlugin(d, nG1.getEndpointParameterInstructions()));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "SSOClient",
          commandName: "GetRoleCredentialsCommand",
          inputFilterSensitiveLog: $F0.GetRoleCredentialsRequestFilterSensitiveLog,
          outputFilterSensitiveLog: $F0.GetRoleCredentialsResponseFilterSensitiveLog
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return uF0.se_GetRoleCredentialsCommand(I, d)
    }
    deserialize(I, d) {
      return uF0.de_GetRoleCredentialsCommand(I, d)
    }
  }
  rG1.GetRoleCredentialsCommand = nG1
})
// @from(Start 2652303, End 2654087)
Xp = Y((oG1) => {
  Object.defineProperty(oG1, "__esModule", {
    value: !0
  });
  oG1.ListAccountRolesCommand = oG1.$Command = void 0;
  var R55 = u2(),
    U55 = r2(),
    lF0 = v0();
  Object.defineProperty(oG1, "$Command", {
    enumerable: !0,
    get: function() {
      return lF0.Command
    }
  });
  var v55 = GJ(),
    mF0 = jL();
  class sG1 extends lF0.Command {
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
      this.middlewareStack.use(U55.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(R55.getEndpointPlugin(d, sG1.getEndpointParameterInstructions()));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "SSOClient",
          commandName: "ListAccountRolesCommand",
          inputFilterSensitiveLog: v55.ListAccountRolesRequestFilterSensitiveLog,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return mF0.se_ListAccountRolesCommand(I, d)
    }
    deserialize(I, d) {
      return mF0.de_ListAccountRolesCommand(I, d)
    }
  }
  oG1.ListAccountRolesCommand = sG1
})
// @from(Start 2654093, End 2655853)
Yp = Y((tG1) => {
  Object.defineProperty(tG1, "__esModule", {
    value: !0
  });
  tG1.ListAccountsCommand = tG1.$Command = void 0;
  var E55 = u2(),
    M55 = r2(),
    jF0 = v0();
  Object.defineProperty(tG1, "$Command", {
    enumerable: !0,
    get: function() {
      return jF0.Command
    }
  });
  var S55 = GJ(),
    hF0 = jL();
  class eG1 extends jF0.Command {
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
      this.middlewareStack.use(M55.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(E55.getEndpointPlugin(d, eG1.getEndpointParameterInstructions()));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "SSOClient",
          commandName: "ListAccountsCommand",
          inputFilterSensitiveLog: S55.ListAccountsRequestFilterSensitiveLog,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return hF0.se_ListAccountsCommand(I, d)
    }
    deserialize(I, d) {
      return hF0.de_ListAccountsCommand(I, d)
    }
  }
  tG1.ListAccountsCommand = eG1
})
// @from(Start 2655859, End 2657584)
GZ1 = Y((dZ1) => {
  Object.defineProperty(dZ1, "__esModule", {
    value: !0
  });
  dZ1.LogoutCommand = dZ1.$Command = void 0;
  var L55 = u2(),
    y55 = r2(),
    cF0 = v0();
  Object.defineProperty(dZ1, "$Command", {
    enumerable: !0,
    get: function() {
      return cF0.Command
    }
  });
  var P55 = GJ(),
    xF0 = jL();
  class IZ1 extends cF0.Command {
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
      this.middlewareStack.use(y55.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(L55.getEndpointPlugin(d, IZ1.getEndpointParameterInstructions()));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "SSOClient",
          commandName: "LogoutCommand",
          inputFilterSensitiveLog: P55.LogoutRequestFilterSensitiveLog,
          outputFilterSensitiveLog: (V) => V
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return xF0.se_LogoutCommand(I, d)
    }
    deserialize(I, d) {
      return xF0.de_LogoutCommand(I, d)
    }
  }
  dZ1.LogoutCommand = IZ1
})
// @from(Start 2657590, End 2658123)
rF0 = Y((iF0) => {
  Object.defineProperty(iF0, "__esModule", {
    value: !0
  });
  iF0.SSO = void 0;
  var $55 = v0(),
    u55 = aG1(),
    T55 = Xp(),
    O55 = Yp(),
    m55 = GZ1(),
    l55 = hL(),
    b55 = {
      GetRoleCredentialsCommand: u55.GetRoleCredentialsCommand,
      ListAccountRolesCommand: T55.ListAccountRolesCommand,
      ListAccountsCommand: O55.ListAccountsCommand,
      LogoutCommand: m55.LogoutCommand
    };
  class ZZ1 extends l55.SSOClient {}
  iF0.SSO = ZZ1;
  $55.createAggregatedClient(b55, ZZ1)
})
// @from(Start 2658129, End 2658347)
aF0 = Y((kf) => {
  Object.defineProperty(kf, "__esModule", {
    value: !0
  });
  var _p = x1();
  _p.__exportStar(aG1(), kf);
  _p.__exportStar(Xp(), kf);
  _p.__exportStar(Yp(), kf);
  _p.__exportStar(GZ1(), kf)
})
// @from(Start 2658353, End 2658438)
oF0 = Y((sF0) => {
  Object.defineProperty(sF0, "__esModule", {
    value: !0
  })
})
// @from(Start 2658444, End 2659181)
Ig0 = Y((eF0) => {
  Object.defineProperty(eF0, "__esModule", {
    value: !0
  });
  eF0.paginateListAccountRoles = void 0;
  var h55 = Xp(),
    j55 = hL(),
    k55 = async (I, d, ...G) => {
      return await I.send(new h55.ListAccountRolesCommand(d), ...G)
    };
  async function* x55(I, d, ...G) {
    let Z = I.startingToken || void 0,
      C = !0,
      W;
    while (C) {
      if (d.nextToken = Z, d.maxResults = I.pageSize, I.client instanceof j55.SSOClient) W = await k55(I.client, d, ...G);
      else throw new Error("Invalid client, expected SSO | SSOClient");
      yield W;
      let w = Z;
      Z = W.nextToken, C = !!(Z && (!I.stopOnSameToken || Z !== w))
    }
    return
  }
  eF0.paginateListAccountRoles = x55
})
// @from(Start 2659187, End 2659912)
Zg0 = Y((dg0) => {
  Object.defineProperty(dg0, "__esModule", {
    value: !0
  });
  dg0.paginateListAccounts = void 0;
  var c55 = Yp(),
    p55 = hL(),
    i55 = async (I, d, ...G) => {
      return await I.send(new c55.ListAccountsCommand(d), ...G)
    };
  async function* n55(I, d, ...G) {
    let Z = I.startingToken || void 0,
      C = !0,
      W;
    while (C) {
      if (d.nextToken = Z, d.maxResults = I.pageSize, I.client instanceof p55.SSOClient) W = await i55(I.client, d, ...G);
      else throw new Error("Invalid client, expected SSO | SSOClient");
      yield W;
      let w = Z;
      Z = W.nextToken, C = !!(Z && (!I.stopOnSameToken || Z !== w))
    }
    return
  }
  dg0.paginateListAccounts = n55
})
// @from(Start 2659918, End 2660112)
Cg0 = Y((kL) => {
  Object.defineProperty(kL, "__esModule", {
    value: !0
  });
  var CZ1 = x1();
  CZ1.__exportStar(oF0(), kL);
  CZ1.__exportStar(Ig0(), kL);
  CZ1.__exportStar(Zg0(), kL)
})
// @from(Start 2660118, End 2660252)
Wg0 = Y((WZ1) => {
  Object.defineProperty(WZ1, "__esModule", {
    value: !0
  });
  var r55 = x1();
  r55.__exportStar(GJ(), WZ1)
})
// @from(Start 2660258, End 2660704)
wg0 = Y((a_) => {
  Object.defineProperty(a_, "__esModule", {
    value: !0
  });
  a_.SSOServiceException = void 0;
  var xL = x1();
  xL.__exportStar(hL(), a_);
  xL.__exportStar(rF0(), a_);
  xL.__exportStar(aF0(), a_);
  xL.__exportStar(Cg0(), a_);
  xL.__exportStar(Wg0(), a_);
  var a55 = ec();
  Object.defineProperty(a_, "SSOServiceException", {
    enumerable: !0,
    get: function() {
      return a55.SSOServiceException
    }
  })
})
// @from(Start 2660710, End 2660989)
Dp = Y((Bg0) => {
  Object.defineProperty(Bg0, "__esModule", {
    value: !0
  });
  Bg0.REFRESH_MESSAGE = Bg0.EXPIRE_WINDOW_MS = void 0;
  Bg0.EXPIRE_WINDOW_MS = 300000;
  Bg0.REFRESH_MESSAGE = "To refresh this SSO session run 'aws sso login' with the corresponding profile."
})
// @from(Start 2660995, End 2662135)
Dg0 = Y((Vg0) => {
  Object.defineProperty(Vg0, "__esModule", {
    value: !0
  });
  Vg0.getHostHeaderPlugin = Vg0.hostHeaderMiddlewareOptions = Vg0.hostHeaderMiddleware = Vg0.resolveHostHeaderConfig = void 0;
  var e55 = J8();

  function t55(I) {
    return I
  }
  Vg0.resolveHostHeaderConfig = t55;
  var I95 = (I) => (d) => async (G) => {
    if (!e55.HttpRequest.isInstance(G.request)) return d(G);
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
  Vg0.hostHeaderMiddleware = I95;
  Vg0.hostHeaderMiddlewareOptions = {
    name: "hostHeaderMiddleware",
    step: "build",
    priority: "low",
    tags: ["HOST"],
    override: !0
  };
  var d95 = (I) => ({
    applyToStack: (d) => {
      d.add(Vg0.hostHeaderMiddleware(I), Vg0.hostHeaderMiddlewareOptions)
    }
  });
  Vg0.getHostHeaderPlugin = d95
})
// @from(Start 2662141, End 2663957)
Kg0 = Y((Hg0) => {
  Object.defineProperty(Hg0, "__esModule", {
    value: !0
  });
  Hg0.getLoggerPlugin = Hg0.loggerMiddlewareOptions = Hg0.loggerMiddleware = void 0;
  var Z95 = () => (I, d) => async (G) => {
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
  Hg0.loggerMiddleware = Z95;
  Hg0.loggerMiddlewareOptions = {
    name: "loggerMiddleware",
    tags: ["LOGGER"],
    step: "initialize",
    override: !0
  };
  var C95 = (I) => ({
    applyToStack: (d) => {
      d.add(Hg0.loggerMiddleware(), Hg0.loggerMiddlewareOptions)
    }
  });
  Hg0.getLoggerPlugin = C95
})
// @from(Start 2663963, End 2664098)
Ng0 = Y((wZ1) => {
  Object.defineProperty(wZ1, "__esModule", {
    value: !0
  });
  var W95 = x1();
  W95.__exportStar(Kg0(), wZ1)
})
// @from(Start 2664104, End 2665278)
Ug0 = Y((Qg0) => {
  Object.defineProperty(Qg0, "__esModule", {
    value: !0
  });
  Qg0.getRecursionDetectionPlugin = Qg0.addRecursionDetectionMiddlewareOptions = Qg0.recursionDetectionMiddleware = void 0;
  var w95 = J8(),
    zg0 = "X-Amzn-Trace-Id",
    B95 = "AWS_LAMBDA_FUNCTION_NAME",
    A95 = "_X_AMZN_TRACE_ID",
    V95 = (I) => (d) => async (G) => {
      let {
        request: Z
      } = G;
      if (!w95.HttpRequest.isInstance(Z) || I.runtime !== "node" || Z.headers.hasOwnProperty(zg0)) return d(G);
      let C = process.env[B95],
        W = process.env[A95],
        w = (B) => typeof B === "string" && B.length > 0;
      if (w(C) && w(W)) Z.headers[zg0] = W;
      return d({
        ...G,
        request: Z
      })
    };
  Qg0.recursionDetectionMiddleware = V95;
  Qg0.addRecursionDetectionMiddlewareOptions = {
    step: "build",
    tags: ["RECURSION_DETECTION"],
    name: "recursionDetectionMiddleware",
    override: !0,
    priority: "low"
  };
  var X95 = (I) => ({
    applyToStack: (d) => {
      d.add(Qg0.recursionDetectionMiddleware(I), Qg0.addRecursionDetectionMiddlewareOptions)
    }
  });
  Qg0.getRecursionDetectionPlugin = X95
})
// @from(Start 2665284, End 2665621)
Mg0 = Y((vg0) => {
  Object.defineProperty(vg0, "__esModule", {
    value: !0
  });
  vg0.resolveUserAgentConfig = void 0;

  function Y95(I) {
    return {
      ...I,
      customUserAgent: typeof I.customUserAgent === "string" ? [
        [I.customUserAgent]
      ] : I.customUserAgent
    }
  }
  vg0.resolveUserAgentConfig = Y95
})
// @from(Start 2665627, End 2670665)
Sg0 = Y((N03, _95) => {
  _95.exports = {
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
// @from(Start 2670671, End 2671940)
BZ1 = Y(($g0) => {
  Object.defineProperty($g0, "__esModule", {
    value: !0
  });
  $g0.getUserAgentPrefix = $g0.useDefaultPartitionInfo = $g0.setPartitionInfo = $g0.partition = void 0;
  var D95 = x1(),
    Lg0 = D95.__importDefault(Sg0()),
    yg0 = Lg0.default,
    Pg0 = "",
    H95 = (I) => {
      let {
        partitions: d
      } = yg0;
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
  $g0.partition = H95;
  var F95 = (I, d = "") => {
    yg0 = I, Pg0 = d
  };
  $g0.setPartitionInfo = F95;
  var g95 = () => {
    $g0.setPartitionInfo(Lg0.default, "")
  };
  $g0.useDefaultPartitionInfo = g95;
  var J95 = () => Pg0;
  $g0.getUserAgentPrefix = J95
})
// @from(Start 2671946, End 2672084)
lg0 = Y((Og0) => {
  Object.defineProperty(Og0, "__esModule", {
    value: !0
  });
  Og0.debugId = void 0;
  Og0.debugId = "endpoints"
})
// @from(Start 2672090, End 2672468)
jg0 = Y((bg0) => {
  Object.defineProperty(bg0, "__esModule", {
    value: !0
  });
  bg0.toDebugString = void 0;

  function AZ1(I) {
    if (typeof I !== "object" || I == null) return I;
    if ("ref" in I) return `$${AZ1(I.ref)}`;
    if ("fn" in I) return `${I.fn}(${(I.argv||[]).map(AZ1).join(", ")})`;
    return JSON.stringify(I, null, 2)
  }
  bg0.toDebugString = AZ1
})
// @from(Start 2672474, End 2672636)
cL = Y((Hp) => {
  Object.defineProperty(Hp, "__esModule", {
    value: !0
  });
  var kg0 = x1();
  kg0.__exportStar(lg0(), Hp);
  kg0.__exportStar(jg0(), Hp)
})
// @from(Start 2672642, End 2672893)
ig0 = Y((cg0) => {
  Object.defineProperty(cg0, "__esModule", {
    value: !0
  });
  cg0.EndpointError = void 0;
  class xg0 extends Error {
    constructor(I) {
      super(I);
      this.name = "EndpointError"
    }
  }
  cg0.EndpointError = xg0
})
// @from(Start 2672899, End 2672984)
rg0 = Y((ng0) => {
  Object.defineProperty(ng0, "__esModule", {
    value: !0
  })
})
// @from(Start 2672990, End 2673075)
sg0 = Y((ag0) => {
  Object.defineProperty(ag0, "__esModule", {
    value: !0
  })
})
// @from(Start 2673081, End 2673166)
eg0 = Y((og0) => {
  Object.defineProperty(og0, "__esModule", {
    value: !0
  })
})
// @from(Start 2673172, End 2673257)
IJ0 = Y((tg0) => {
  Object.defineProperty(tg0, "__esModule", {
    value: !0
  })
})
// @from(Start 2673263, End 2673348)
GJ0 = Y((dJ0) => {
  Object.defineProperty(dJ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2673354, End 2673633)
fZ = Y((s_) => {
  Object.defineProperty(s_, "__esModule", {
    value: !0
  });
  var xf = x1();
  xf.__exportStar(ig0(), s_);
  xf.__exportStar(rg0(), s_);
  xf.__exportStar(sg0(), s_);
  xf.__exportStar(eg0(), s_);
  xf.__exportStar(IJ0(), s_);
  xf.__exportStar(GJ0(), s_)
})
// @from(Start 2673639, End 2673971)
VZ1 = Y((ZJ0) => {
  Object.defineProperty(ZJ0, "__esModule", {
    value: !0
  });
  ZJ0.isIpAddress = void 0;
  var z95 = new RegExp("^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$"),
    Q95 = (I) => z95.test(I) || I.startsWith("[") && I.endsWith("]");
  ZJ0.isIpAddress = Q95
})
// @from(Start 2673977, End 2674370)
YZ1 = Y((WJ0) => {
  Object.defineProperty(WJ0, "__esModule", {
    value: !0
  });
  WJ0.isValidHostLabel = void 0;
  var f95 = new RegExp("^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$"),
    q95 = (I, d = !1) => {
      if (!d) return f95.test(I);
      let G = I.split(".");
      for (let Z of G)
        if (!WJ0.isValidHostLabel(Z)) return !1;
      return !0
    };
  WJ0.isValidHostLabel = q95
})
// @from(Start 2674376, End 2674949)
BJ0 = Y((wJ0) => {
  Object.defineProperty(wJ0, "__esModule", {
    value: !0
  });
  wJ0.isVirtualHostableS3Bucket = void 0;
  var R95 = VZ1(),
    U95 = YZ1(),
    v95 = (I, d = !1) => {
      if (d) {
        for (let G of I.split("."))
          if (!wJ0.isVirtualHostableS3Bucket(G)) return !1;
        return !0
      }
      if (!U95.isValidHostLabel(I)) return !1;
      if (I.length < 3 || I.length > 63) return !1;
      if (I !== I.toLowerCase()) return !1;
      if (R95.isIpAddress(I)) return !1;
      return !0
    };
  wJ0.isVirtualHostableS3Bucket = v95
})
// @from(Start 2674955, End 2675435)
XJ0 = Y((AJ0) => {
  Object.defineProperty(AJ0, "__esModule", {
    value: !0
  });
  AJ0.parseArn = void 0;
  var E95 = (I) => {
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
  AJ0.parseArn = E95
})
// @from(Start 2675441, End 2675635)
YJ0 = Y((pL) => {
  Object.defineProperty(pL, "__esModule", {
    value: !0
  });
  var DZ1 = x1();
  DZ1.__exportStar(BJ0(), pL);
  DZ1.__exportStar(XJ0(), pL);
  DZ1.__exportStar(BZ1(), pL)
})
// @from(Start 2675641, End 2675814)
HJ0 = Y((_J0) => {
  Object.defineProperty(_J0, "__esModule", {
    value: !0
  });
  _J0.booleanEquals = void 0;
  var M95 = (I, d) => I === d;
  _J0.booleanEquals = M95
})
// @from(Start 2675820, End 2676518)
KJ0 = Y((gJ0) => {
  Object.defineProperty(gJ0, "__esModule", {
    value: !0
  });
  gJ0.getAttrPathList = void 0;
  var FJ0 = fZ(),
    S95 = (I) => {
      let d = I.split("."),
        G = [];
      for (let Z of d) {
        let C = Z.indexOf("[");
        if (C !== -1) {
          if (Z.indexOf("]") !== Z.length - 1) throw new FJ0.EndpointError(`Path: '${I}' does not end with ']'`);
          let W = Z.slice(C + 1, -1);
          if (Number.isNaN(parseInt(W))) throw new FJ0.EndpointError(`Invalid array index: '${W}' in path: '${I}'`);
          if (C !== 0) G.push(Z.slice(0, C));
          G.push(W)
        } else G.push(Z)
      }
      return G
    };
  gJ0.getAttrPathList = S95
})
// @from(Start 2676524, End 2676960)
QJ0 = Y((NJ0) => {
  Object.defineProperty(NJ0, "__esModule", {
    value: !0
  });
  NJ0.getAttr = void 0;
  var L95 = fZ(),
    y95 = KJ0(),
    P95 = (I, d) => y95.getAttrPathList(d).reduce((G, Z) => {
      if (typeof G !== "object") throw new L95.EndpointError(`Index '${Z}' in '${d}' not found in '${JSON.stringify(I)}'`);
      else if (Array.isArray(G)) return G[parseInt(Z)];
      return G[Z]
    }, I);
  NJ0.getAttr = P95
})
// @from(Start 2676966, End 2677122)
RJ0 = Y((fJ0) => {
  Object.defineProperty(fJ0, "__esModule", {
    value: !0
  });
  fJ0.isSet = void 0;
  var $95 = (I) => I != null;
  fJ0.isSet = $95
})
// @from(Start 2677128, End 2677273)
EJ0 = Y((UJ0) => {
  Object.defineProperty(UJ0, "__esModule", {
    value: !0
  });
  UJ0.not = void 0;
  var u95 = (I) => !I;
  UJ0.not = u95
})
// @from(Start 2677279, End 2677364)
SJ0 = Y((MJ0) => {
  Object.defineProperty(MJ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2677370, End 2677624)
yJ0 = Y((LJ0) => {
  Object.defineProperty(LJ0, "__esModule", {
    value: !0
  });
  LJ0.HttpAuthLocation = void 0;
  var T95;
  (function(I) {
    I.HEADER = "header", I.QUERY = "query"
  })(T95 = LJ0.HttpAuthLocation || (LJ0.HttpAuthLocation = {}))
})
// @from(Start 2677630, End 2677715)
$J0 = Y((PJ0) => {
  Object.defineProperty(PJ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2677721, End 2677806)
TJ0 = Y((uJ0) => {
  Object.defineProperty(uJ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2677812, End 2677897)
mJ0 = Y((OJ0) => {
  Object.defineProperty(OJ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2677903, End 2677988)
bJ0 = Y((lJ0) => {
  Object.defineProperty(lJ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2677994, End 2678079)
jJ0 = Y((hJ0) => {
  Object.defineProperty(hJ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2678085, End 2678170)
xJ0 = Y((kJ0) => {
  Object.defineProperty(kJ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2678176, End 2678370)
cJ0 = Y((iL) => {
  Object.defineProperty(iL, "__esModule", {
    value: !0
  });
  var FZ1 = x1();
  FZ1.__exportStar(bJ0(), iL);
  FZ1.__exportStar(jJ0(), iL);
  FZ1.__exportStar(xJ0(), iL)
})
// @from(Start 2678376, End 2678461)
iJ0 = Y((pJ0) => {
  Object.defineProperty(pJ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2678467, End 2678552)
rJ0 = Y((nJ0) => {
  Object.defineProperty(nJ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2678558, End 2678797)
sJ0 = Y((aJ0) => {
  Object.defineProperty(aJ0, "__esModule", {
    value: !0
  });
  aJ0.HostAddressType = void 0;
  var O95;
  (function(I) {
    I.AAAA = "AAAA", I.A = "A"
  })(O95 = aJ0.HostAddressType || (aJ0.HostAddressType = {}))
})
// @from(Start 2678803, End 2679056)
eJ0 = Y((oJ0) => {
  Object.defineProperty(oJ0, "__esModule", {
    value: !0
  });
  oJ0.EndpointURLScheme = void 0;
  var m95;
  (function(I) {
    I.HTTP = "http", I.HTTPS = "https"
  })(m95 = oJ0.EndpointURLScheme || (oJ0.EndpointURLScheme = {}))
})
// @from(Start 2679062, End 2679147)
IK0 = Y((tJ0) => {
  Object.defineProperty(tJ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2679153, End 2679238)
GK0 = Y((dK0) => {
  Object.defineProperty(dK0, "__esModule", {
    value: !0
  })
})
// @from(Start 2679244, End 2679329)
CK0 = Y((ZK0) => {
  Object.defineProperty(ZK0, "__esModule", {
    value: !0
  })
})
// @from(Start 2679335, End 2679420)
wK0 = Y((WK0) => {
  Object.defineProperty(WK0, "__esModule", {
    value: !0
  })
})
// @from(Start 2679426, End 2679511)
AK0 = Y((BK0) => {
  Object.defineProperty(BK0, "__esModule", {
    value: !0
  })
})
// @from(Start 2679517, End 2679602)
XK0 = Y((VK0) => {
  Object.defineProperty(VK0, "__esModule", {
    value: !0
  })
})
// @from(Start 2679608, End 2679693)
_K0 = Y((YK0) => {
  Object.defineProperty(YK0, "__esModule", {
    value: !0
  })
})
// @from(Start 2679699, End 2679949)
DK0 = Y((ZJ) => {
  Object.defineProperty(ZJ, "__esModule", {
    value: !0
  });
  var nL = x1();
  nL.__exportStar(CK0(), ZJ);
  nL.__exportStar(wK0(), ZJ);
  nL.__exportStar(AK0(), ZJ);
  nL.__exportStar(XK0(), ZJ);
  nL.__exportStar(_K0(), ZJ)
})
// @from(Start 2679955, End 2680040)
FK0 = Y((HK0) => {
  Object.defineProperty(HK0, "__esModule", {
    value: !0
  })
})
// @from(Start 2680046, End 2680131)
JK0 = Y((gK0) => {
  Object.defineProperty(gK0, "__esModule", {
    value: !0
  })
})
// @from(Start 2680137, End 2680222)
NK0 = Y((KK0) => {
  Object.defineProperty(KK0, "__esModule", {
    value: !0
  })
})
// @from(Start 2680228, End 2680313)
QK0 = Y((zK0) => {
  Object.defineProperty(zK0, "__esModule", {
    value: !0
  })
})
// @from(Start 2680319, End 2680404)
qK0 = Y((fK0) => {
  Object.defineProperty(fK0, "__esModule", {
    value: !0
  })
})
// @from(Start 2680410, End 2680495)
UK0 = Y((RK0) => {
  Object.defineProperty(RK0, "__esModule", {
    value: !0
  })
})
// @from(Start 2680501, End 2680586)
EK0 = Y((vK0) => {
  Object.defineProperty(vK0, "__esModule", {
    value: !0
  })
})
// @from(Start 2680592, End 2680677)
SK0 = Y((MK0) => {
  Object.defineProperty(MK0, "__esModule", {
    value: !0
  })
})
// @from(Start 2680683, End 2680768)
yK0 = Y((LK0) => {
  Object.defineProperty(LK0, "__esModule", {
    value: !0
  })
})
// @from(Start 2680774, End 2680859)
$K0 = Y((PK0) => {
  Object.defineProperty(PK0, "__esModule", {
    value: !0
  })
})
// @from(Start 2680865, End 2680950)
TK0 = Y((uK0) => {
  Object.defineProperty(uK0, "__esModule", {
    value: !0
  })
})
// @from(Start 2680956, End 2681041)
mK0 = Y((OK0) => {
  Object.defineProperty(OK0, "__esModule", {
    value: !0
  })
})
// @from(Start 2681047, End 2681352)
bK0 = Y((lK0) => {
  Object.defineProperty(lK0, "__esModule", {
    value: !0
  });
  lK0.RequestHandlerProtocol = void 0;
  var l95;
  (function(I) {
    I.HTTP_0_9 = "http/0.9", I.HTTP_1_0 = "http/1.0", I.TDS_8_0 = "tds/8.0"
  })(l95 = lK0.RequestHandlerProtocol || (lK0.RequestHandlerProtocol = {}))
})
// @from(Start 2681358, End 2681443)
jK0 = Y((hK0) => {
  Object.defineProperty(hK0, "__esModule", {
    value: !0
  })
})
// @from(Start 2681449, End 2681534)
xK0 = Y((kK0) => {
  Object.defineProperty(kK0, "__esModule", {
    value: !0
  })
})
// @from(Start 2681540, End 2682480)
cK0 = Y((p5) => {
  Object.defineProperty(p5, "__esModule", {
    value: !0
  });
  var X9 = x1();
  X9.__exportStar(SJ0(), p5);
  X9.__exportStar(yJ0(), p5);
  X9.__exportStar($J0(), p5);
  X9.__exportStar(TJ0(), p5);
  X9.__exportStar(mJ0(), p5);
  X9.__exportStar(cJ0(), p5);
  X9.__exportStar(iJ0(), p5);
  X9.__exportStar(rJ0(), p5);
  X9.__exportStar(sJ0(), p5);
  X9.__exportStar(eJ0(), p5);
  X9.__exportStar(IK0(), p5);
  X9.__exportStar(GK0(), p5);
  X9.__exportStar(DK0(), p5);
  X9.__exportStar(FK0(), p5);
  X9.__exportStar(JK0(), p5);
  X9.__exportStar(NK0(), p5);
  X9.__exportStar(QK0(), p5);
  X9.__exportStar(qK0(), p5);
  X9.__exportStar(UK0(), p5);
  X9.__exportStar(EK0(), p5);
  X9.__exportStar(SK0(), p5);
  X9.__exportStar(yK0(), p5);
  X9.__exportStar($K0(), p5);
  X9.__exportStar(TK0(), p5);
  X9.__exportStar(mK0(), p5);
  X9.__exportStar(bK0(), p5);
  X9.__exportStar(jK0(), p5);
  X9.__exportStar(xK0(), p5)
})
// @from(Start 2682486, End 2684043)
nK0 = Y((pK0) => {
  Object.defineProperty(pK0, "__esModule", {
    value: !0
  });
  pK0.parseURL = void 0;
  var zZ1 = cK0(),
    b95 = VZ1(),
    NZ1 = {
      [zZ1.EndpointURLScheme.HTTP]: 80,
      [zZ1.EndpointURLScheme.HTTPS]: 443
    },
    h95 = (I) => {
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
      if (!Object.values(zZ1.EndpointURLScheme).includes(A)) return null;
      let V = b95.isIpAddress(C),
        X = G.includes(`${Z}:${NZ1[A]}`) || typeof I === "string" && I.includes(`${Z}:${NZ1[A]}`),
        _ = `${Z}${X?`:${NZ1[A]}`:""}`;
      return {
        scheme: A,
        authority: _,
        path: W,
        normalizedPath: W.endsWith("/") ? W : `${W}/`,
        isIp: V
      }
    };
  pK0.parseURL = h95
})
// @from(Start 2684049, End 2684220)
sK0 = Y((rK0) => {
  Object.defineProperty(rK0, "__esModule", {
    value: !0
  });
  rK0.stringEquals = void 0;
  var j95 = (I, d) => I === d;
  rK0.stringEquals = j95
})
// @from(Start 2684226, End 2684529)
tK0 = Y((oK0) => {
  Object.defineProperty(oK0, "__esModule", {
    value: !0
  });
  oK0.substring = void 0;
  var k95 = (I, d, G, Z) => {
    if (d >= G || I.length < G) return null;
    if (!Z) return I.substring(d, G);
    return I.substring(I.length - G, I.length - d)
  };
  oK0.substring = k95
})
// @from(Start 2684535, End 2684788)
GN0 = Y((IN0) => {
  Object.defineProperty(IN0, "__esModule", {
    value: !0
  });
  IN0.uriEncode = void 0;
  var x95 = (I) => encodeURIComponent(I).replace(/[!*'()]/g, (d) => `%${d.charCodeAt(0).toString(16).toUpperCase()}`);
  IN0.uriEncode = x95
})
// @from(Start 2684794, End 2685218)
QZ1 = Y((kC) => {
  Object.defineProperty(kC, "__esModule", {
    value: !0
  });
  kC.aws = void 0;
  var IB = x1();
  kC.aws = IB.__importStar(YJ0());
  IB.__exportStar(HJ0(), kC);
  IB.__exportStar(QJ0(), kC);
  IB.__exportStar(RJ0(), kC);
  IB.__exportStar(YZ1(), kC);
  IB.__exportStar(EJ0(), kC);
  IB.__exportStar(nK0(), kC);
  IB.__exportStar(sK0(), kC);
  IB.__exportStar(tK0(), kC);
  IB.__exportStar(GN0(), kC)
})
// @from(Start 2685224, End 2686143)
fZ1 = Y((CN0) => {
  Object.defineProperty(CN0, "__esModule", {
    value: !0
  });
  CN0.evaluateTemplate = void 0;
  var c95 = QZ1(),
    p95 = (I, d) => {
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
          G.push(c95.getAttr(Z[A], V))
        } else G.push(Z[B]);
        C = w + 1
      }
      return G.join("")
    };
  CN0.evaluateTemplate = p95
})
// @from(Start 2686149, End 2686420)
AN0 = Y((wN0) => {
  Object.defineProperty(wN0, "__esModule", {
    value: !0
  });
  wN0.getReferenceValue = void 0;
  var i95 = ({
    ref: I
  }, d) => {
    return {
      ...d.endpointParams,
      ...d.referenceRecord
    } [I]
  };
  wN0.getReferenceValue = i95
})
// @from(Start 2686426, End 2686954)
rL = Y((VN0) => {
  Object.defineProperty(VN0, "__esModule", {
    value: !0
  });
  VN0.evaluateExpression = void 0;
  var n95 = fZ(),
    r95 = qZ1(),
    a95 = fZ1(),
    s95 = AN0(),
    o95 = (I, d, G) => {
      if (typeof I === "string") return a95.evaluateTemplate(I, G);
      else if (I.fn) return r95.callFunction(I, G);
      else if (I.ref) return s95.getReferenceValue(I, G);
      throw new n95.EndpointError(`'${d}': ${String(I)} is not a string, function or reference.`)
    };
  VN0.evaluateExpression = o95
})
// @from(Start 2686960, End 2687403)
qZ1 = Y((YN0) => {
  Object.defineProperty(YN0, "__esModule", {
    value: !0
  });
  YN0.callFunction = void 0;
  var e95 = x1(),
    t95 = e95.__importStar(QZ1()),
    I35 = rL(),
    d35 = ({
      fn: I,
      argv: d
    }, G) => {
      let Z = d.map((C) => ["boolean", "number"].includes(typeof C) ? C : I35.evaluateExpression(C, "arg", G));
      return I.split(".").reduce((C, W) => C[W], t95)(...Z)
    };
  YN0.callFunction = d35
})
// @from(Start 2687409, End 2688206)
FN0 = Y((DN0) => {
  Object.defineProperty(DN0, "__esModule", {
    value: !0
  });
  DN0.evaluateCondition = void 0;
  var RZ1 = cL(),
    G35 = fZ(),
    Z35 = qZ1(),
    C35 = ({
      assign: I,
      ...d
    }, G) => {
      var Z, C;
      if (I && I in G.referenceRecord) throw new G35.EndpointError(`'${I}' is already defined in Reference Record.`);
      let W = Z35.callFunction(d, G);
      return (C = (Z = G.logger) === null || Z === void 0 ? void 0 : Z.debug) === null || C === void 0 || C.call(Z, RZ1.debugId, `evaluateCondition: ${RZ1.toDebugString(d)} = ${RZ1.toDebugString(W)}`), {
        result: W === "" ? !0 : !!W,
        ...I != null && {
          toAssign: {
            name: I,
            value: W
          }
        }
      }
    };
  DN0.evaluateCondition = C35
})
// @from(Start 2688212, End 2689047)
Fp = Y((JN0) => {
  Object.defineProperty(JN0, "__esModule", {
    value: !0
  });
  JN0.evaluateConditions = void 0;
  var gN0 = cL(),
    W35 = FN0(),
    w35 = (I = [], d) => {
      var G, Z;
      let C = {};
      for (let W of I) {
        let {
          result: w,
          toAssign: B
        } = W35.evaluateCondition(W, {
          ...d,
          referenceRecord: {
            ...d.referenceRecord,
            ...C
          }
        });
        if (!w) return {
          result: w
        };
        if (B) C[B.name] = B.value, (Z = (G = d.logger) === null || G === void 0 ? void 0 : G.debug) === null || Z === void 0 || Z.call(G, gN0.debugId, `assign: ${B.name} := ${gN0.toDebugString(B.value)}`)
      }
      return {
        result: !0,
        referenceRecord: C
      }
    };
  JN0.evaluateConditions = w35
})
// @from(Start 2689053, End 2689557)
QN0 = Y((NN0) => {
  Object.defineProperty(NN0, "__esModule", {
    value: !0
  });
  NN0.getEndpointHeaders = void 0;
  var B35 = fZ(),
    A35 = rL(),
    V35 = (I, d) => Object.entries(I).reduce((G, [Z, C]) => ({
      ...G,
      [Z]: C.map((W) => {
        let w = A35.evaluateExpression(W, "Header value entry", d);
        if (typeof w !== "string") throw new B35.EndpointError(`Header '${Z}' value '${w}' is not a string`);
        return w
      })
    }), {});
  NN0.getEndpointHeaders = V35
})
// @from(Start 2689563, End 2690295)
RN0 = Y((qN0) => {
  Object.defineProperty(qN0, "__esModule", {
    value: !0
  });
  qN0.getEndpointProperty = void 0;
  var fN0 = fZ(),
    X35 = fZ1(),
    Y35 = vZ1(),
    _35 = (I, d) => {
      if (Array.isArray(I)) return I.map((G) => qN0.getEndpointProperty(G, d));
      switch (typeof I) {
        case "string":
          return X35.evaluateTemplate(I, d);
        case "object":
          if (I === null) throw new fN0.EndpointError(`Unexpected endpoint property: ${I}`);
          return Y35.getEndpointProperties(I, d);
        case "boolean":
          return I;
        default:
          throw new fN0.EndpointError(`Unexpected endpoint property type: ${typeof I}`)
      }
    };
  qN0.getEndpointProperty = _35
})
// @from(Start 2690301, End 2690607)
vZ1 = Y((UN0) => {
  Object.defineProperty(UN0, "__esModule", {
    value: !0
  });
  UN0.getEndpointProperties = void 0;
  var D35 = RN0(),
    H35 = (I, d) => Object.entries(I).reduce((G, [Z, C]) => ({
      ...G,
      [Z]: D35.getEndpointProperty(C, d)
    }), {});
  UN0.getEndpointProperties = H35
})
// @from(Start 2690613, End 2691128)
SN0 = Y((EN0) => {
  Object.defineProperty(EN0, "__esModule", {
    value: !0
  });
  EN0.getEndpointUrl = void 0;
  var F35 = fZ(),
    g35 = rL(),
    J35 = (I, d) => {
      let G = g35.evaluateExpression(I, "Endpoint URL", d);
      if (typeof G === "string") try {
        return new URL(G)
      } catch (Z) {
        throw console.error(`Failed to construct URL with ${G}`, Z), Z
      }
      throw new F35.EndpointError(`Endpoint URL must be a string, got ${typeof G}`)
    };
  EN0.getEndpointUrl = J35
})
// @from(Start 2691134, End 2692237)
$N0 = Y((yN0) => {
  Object.defineProperty(yN0, "__esModule", {
    value: !0
  });
  yN0.evaluateEndpointRule = void 0;
  var LN0 = cL(),
    K35 = Fp(),
    N35 = QN0(),
    z35 = vZ1(),
    Q35 = SN0(),
    f35 = (I, d) => {
      var G, Z;
      let {
        conditions: C,
        endpoint: W
      } = I, {
        result: w,
        referenceRecord: B
      } = K35.evaluateConditions(C, d);
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
      return (Z = (G = d.logger) === null || G === void 0 ? void 0 : G.debug) === null || Z === void 0 || Z.call(G, LN0.debugId, `Resolving endpoint from template: ${LN0.toDebugString(W)}`), {
        ..._ != null && {
          headers: N35.getEndpointHeaders(_, A)
        },
        ...X != null && {
          properties: z35.getEndpointProperties(X, A)
        },
        url: Q35.getEndpointUrl(V, A)
      }
    };
  yN0.evaluateEndpointRule = f35
})
// @from(Start 2692243, End 2692826)
ON0 = Y((uN0) => {
  Object.defineProperty(uN0, "__esModule", {
    value: !0
  });
  uN0.evaluateErrorRule = void 0;
  var q35 = fZ(),
    R35 = Fp(),
    U35 = rL(),
    v35 = (I, d) => {
      let {
        conditions: G,
        error: Z
      } = I, {
        result: C,
        referenceRecord: W
      } = R35.evaluateConditions(G, d);
      if (!C) return;
      throw new q35.EndpointError(U35.evaluateExpression(Z, "Error", {
        ...d,
        referenceRecord: {
          ...d.referenceRecord,
          ...W
        }
      }))
    };
  uN0.evaluateErrorRule = v35
})
// @from(Start 2692832, End 2693362)
bN0 = Y((mN0) => {
  Object.defineProperty(mN0, "__esModule", {
    value: !0
  });
  mN0.evaluateTreeRule = void 0;
  var E35 = Fp(),
    M35 = EZ1(),
    S35 = (I, d) => {
      let {
        conditions: G,
        rules: Z
      } = I, {
        result: C,
        referenceRecord: W
      } = E35.evaluateConditions(G, d);
      if (!C) return;
      return M35.evaluateRules(Z, {
        ...d,
        referenceRecord: {
          ...d.referenceRecord,
          ...W
        }
      })
    };
  mN0.evaluateTreeRule = S35
})
// @from(Start 2693368, End 2694050)
EZ1 = Y((jN0) => {
  Object.defineProperty(jN0, "__esModule", {
    value: !0
  });
  jN0.evaluateRules = void 0;
  var hN0 = fZ(),
    L35 = $N0(),
    y35 = ON0(),
    P35 = bN0(),
    $35 = (I, d) => {
      for (let G of I)
        if (G.type === "endpoint") {
          let Z = L35.evaluateEndpointRule(G, d);
          if (Z) return Z
        } else if (G.type === "error") y35.evaluateErrorRule(G, d);
      else if (G.type === "tree") {
        let Z = P35.evaluateTreeRule(G, d);
        if (Z) return Z
      } else throw new hN0.EndpointError(`Unknown endpoint rule: ${G}`);
      throw new hN0.EndpointError("Rules evaluation failed")
    };
  jN0.evaluateRules = $35
})
// @from(Start 2694056, End 2694191)
xN0 = Y((MZ1) => {
  Object.defineProperty(MZ1, "__esModule", {
    value: !0
  });
  var u35 = x1();
  u35.__exportStar(EZ1(), MZ1)
})
// @from(Start 2694197, End 2695728)
iN0 = Y((cN0) => {
  Object.defineProperty(cN0, "__esModule", {
    value: !0
  });
  cN0.resolveEndpoint = void 0;
  var gp = cL(),
    T35 = fZ(),
    O35 = xN0(),
    m35 = (I, d) => {
      var G, Z, C, W, w, B;
      let {
        endpointParams: A,
        logger: V
      } = d, {
        parameters: X,
        rules: _
      } = I;
      (Z = (G = d.logger) === null || G === void 0 ? void 0 : G.debug) === null || Z === void 0 || Z.call(G, `${gp.debugId} Initial EndpointParams: ${gp.toDebugString(A)}`);
      let F = Object.entries(X).filter(([, K]) => K.default != null).map(([K, Q]) => [K, Q.default]);
      if (F.length > 0)
        for (let [K, Q] of F) A[K] = (C = A[K]) !== null && C !== void 0 ? C : Q;
      let g = Object.entries(X).filter(([, K]) => K.required).map(([K]) => K);
      for (let K of g)
        if (A[K] == null) throw new T35.EndpointError(`Missing required parameter: '${K}'`);
      let J = O35.evaluateRules(_, {
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
      return (B = (w = d.logger) === null || w === void 0 ? void 0 : w.debug) === null || B === void 0 || B.call(w, `${gp.debugId} Resolved endpoint: ${gp.toDebugString(J)}`), J
    };
  cN0.resolveEndpoint = m35
})
// @from(Start 2695734, End 2695927)
LZ1 = Y((aL) => {
  Object.defineProperty(aL, "__esModule", {
    value: !0
  });
  var SZ1 = x1();
  SZ1.__exportStar(BZ1(), aL);
  SZ1.__exportStar(iN0(), aL);
  SZ1.__exportStar(fZ(), aL)
})
// @from(Start 2695933, End 2696265)
aN0 = Y((nN0) => {
  Object.defineProperty(nN0, "__esModule", {
    value: !0
  });
  nN0.UA_ESCAPE_REGEX = nN0.SPACE = nN0.X_AMZ_USER_AGENT = nN0.USER_AGENT = void 0;
  nN0.USER_AGENT = "user-agent";
  nN0.X_AMZ_USER_AGENT = "x-amz-user-agent";
  nN0.SPACE = " ";
  nN0.UA_ESCAPE_REGEX = /[^\!\#\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g
})
// @from(Start 2696271, End 2698121)
Iz0 = Y((sN0) => {
  Object.defineProperty(sN0, "__esModule", {
    value: !0
  });
  sN0.getUserAgentPlugin = sN0.getUserAgentMiddlewareOptions = sN0.userAgentMiddleware = void 0;
  var j35 = J8(),
    k35 = LZ1(),
    o_ = aN0(),
    x35 = (I) => (d, G) => async (Z) => {
      var C, W;
      let {
        request: w
      } = Z;
      if (!j35.HttpRequest.isInstance(w)) return d(Z);
      let {
        headers: B
      } = w, A = ((C = G === null || G === void 0 ? void 0 : G.userAgent) === null || C === void 0 ? void 0 : C.map(yZ1)) || [], V = (await I.defaultUserAgentProvider()).map(yZ1), X = ((W = I === null || I === void 0 ? void 0 : I.customUserAgent) === null || W === void 0 ? void 0 : W.map(yZ1)) || [], _ = k35.getUserAgentPrefix(), F = (_ ? [_] : []).concat([...V, ...A, ...X]).join(o_.SPACE), g = [...V.filter((J) => J.startsWith("aws-sdk-")), ...X].join(o_.SPACE);
      if (I.runtime !== "browser") {
        if (g) B[o_.X_AMZ_USER_AGENT] = B[o_.X_AMZ_USER_AGENT] ? `${B[o_.USER_AGENT]} ${g}` : g;
        B[o_.USER_AGENT] = F
      } else B[o_.X_AMZ_USER_AGENT] = F;
      return d({
        ...Z,
        request: w
      })
    };
  sN0.userAgentMiddleware = x35;
  var yZ1 = ([I, d]) => {
    let G = I.indexOf("/"),
      Z = I.substring(0, G),
      C = I.substring(G + 1);
    if (Z === "api") C = C.toLowerCase();
    return [Z, C, d].filter((W) => W && W.length > 0).map((W) => W === null || W === void 0 ? void 0 : W.replace(o_.UA_ESCAPE_REGEX, "_")).join("/")
  };
  sN0.getUserAgentMiddlewareOptions = {
    name: "getUserAgentMiddleware",
    step: "build",
    priority: "low",
    tags: ["SET_USER_AGENT", "USER_AGENT"],
    override: !0
  };
  var c35 = (I) => ({
    applyToStack: (d) => {
      d.add(sN0.userAgentMiddleware(I), sN0.getUserAgentMiddlewareOptions)
    }
  });
  sN0.getUserAgentPlugin = c35
})
// @from(Start 2698127, End 2698290)
Gz0 = Y((Jp) => {
  Object.defineProperty(Jp, "__esModule", {
    value: !0
  });
  var dz0 = x1();
  dz0.__exportStar(Mg0(), Jp);
  dz0.__exportStar(Iz0(), Jp)
})
// @from(Start 2698296, End 2698676)
Wz0 = Y((Zz0) => {
  Object.defineProperty(Zz0, "__esModule", {
    value: !0
  });
  Zz0.resolveClientEndpointParameters = void 0;
  var p35 = (I) => {
    return {
      ...I,
      useDualstackEndpoint: I.useDualstackEndpoint ?? !1,
      useFipsEndpoint: I.useFipsEndpoint ?? !1,
      defaultSigningName: "awsssooidc"
    }
  };
  Zz0.resolveClientEndpointParameters = p35
})
// @from(Start 2698682, End 2702228)
wz0 = Y((s23, i35) => {
  i35.exports = {
    name: "@aws-sdk/client-sso-oidc",
    description: "AWS SDK for JavaScript Sso Oidc Client for Node.js, Browser and React Native",
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
      "generate:client": "node ../../scripts/generate-clients/single-service --solo sso-oidc"
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
    homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso-oidc",
    repository: {
      type: "git",
      url: "https://github.com/aws/aws-sdk-js-v3.git",
      directory: "clients/client-sso-oidc"
    }
  }
})
// @from(Start 2702234, End 2702631)
Xz0 = Y((Bz0, Az0) => {
  Object.defineProperty(Bz0, "__esModule", {
    value: !0
  });
  Bz0.isCrtAvailable = void 0;
  var n35 = () => {
    try {
      if (typeof Az0 !== "undefined" && (() => {
          throw new Error("Cannot require module " + "aws-crt");
        })()) return ["md/crt-avail"];
      return null
    } catch (I) {
      return null
    }
  };
  Bz0.isCrtAvailable = n35
})
// @from(Start 2702637, End 2703775)
gz0 = Y((_z0) => {
  Object.defineProperty(_z0, "__esModule", {
    value: !0
  });
  _z0.defaultUserAgent = _z0.UA_APP_ID_INI_NAME = _z0.UA_APP_ID_ENV_NAME = void 0;
  var r35 = QZ(),
    Yz0 = B1("os"),
    PZ1 = B1("process"),
    a35 = Xz0();
  _z0.UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
  _z0.UA_APP_ID_INI_NAME = "sdk-ua-app-id";
  var s35 = ({
    serviceId: I,
    clientVersion: d
  }) => {
    let G = [
        ["aws-sdk-js", d],
        [`os/${Yz0.platform()}`, Yz0.release()],
        ["lang/js"],
        ["md/nodejs", `${PZ1.versions.node}`]
      ],
      Z = a35.isCrtAvailable();
    if (Z) G.push(Z);
    if (I) G.push([`api/${I}`, d]);
    if (PZ1.env.AWS_EXECUTION_ENV) G.push([`exec-env/${PZ1.env.AWS_EXECUTION_ENV}`]);
    let C = r35.loadConfig({
        environmentVariableSelector: (w) => w[_z0.UA_APP_ID_ENV_NAME],
        configFileSelector: (w) => w[_z0.UA_APP_ID_INI_NAME],
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
  _z0.defaultUserAgent = s35
})
// @from(Start 2703781, End 2707830)
Lz0 = Y((Mz0) => {
  Object.defineProperty(Mz0, "__esModule", {
    value: !0
  });
  Mz0.ruleSet = void 0;
  var Rz0 = "required",
    UV = "fn",
    vV = "argv",
    cf = "ref",
    $Z1 = "PartitionResult",
    dB = "tree",
    sL = "error",
    oL = "endpoint",
    Jz0 = {
      [Rz0]: !1,
      type: "String"
    },
    Kz0 = {
      [Rz0]: !0,
      default: !1,
      type: "Boolean"
    },
    Uz0 = {
      [cf]: "Endpoint"
    },
    vz0 = {
      [UV]: "booleanEquals",
      [vV]: [{
        [cf]: "UseFIPS"
      }, !0]
    },
    Ez0 = {
      [UV]: "booleanEquals",
      [vV]: [{
        [cf]: "UseDualStack"
      }, !0]
    },
    GB = {},
    Nz0 = {
      [UV]: "booleanEquals",
      [vV]: [!0, {
        [UV]: "getAttr",
        [vV]: [{
          [cf]: $Z1
        }, "supportsFIPS"]
      }]
    },
    zz0 = {
      [UV]: "booleanEquals",
      [vV]: [!0, {
        [UV]: "getAttr",
        [vV]: [{
          [cf]: $Z1
        }, "supportsDualStack"]
      }]
    },
    Qz0 = [Uz0],
    fz0 = [vz0],
    qz0 = [Ez0],
    o35 = {
      version: "1.0",
      parameters: {
        Region: Jz0,
        UseDualStack: Kz0,
        UseFIPS: Kz0,
        Endpoint: Jz0
      },
      rules: [{
        conditions: [{
          [UV]: "aws.partition",
          [vV]: [{
            [cf]: "Region"
          }],
          assign: $Z1
        }],
        type: dB,
        rules: [{
          conditions: [{
            [UV]: "isSet",
            [vV]: Qz0
          }, {
            [UV]: "parseURL",
            [vV]: Qz0,
            assign: "url"
          }],
          type: dB,
          rules: [{
            conditions: fz0,
            error: "Invalid Configuration: FIPS and custom endpoint are not supported",
            type: sL
          }, {
            type: dB,
            rules: [{
              conditions: qz0,
              error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
              type: sL
            }, {
              endpoint: {
                url: Uz0,
                properties: GB,
                headers: GB
              },
              type: oL
            }]
          }]
        }, {
          conditions: [vz0, Ez0],
          type: dB,
          rules: [{
            conditions: [Nz0, zz0],
            type: dB,
            rules: [{
              endpoint: {
                url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                properties: GB,
                headers: GB
              },
              type: oL
            }]
          }, {
            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
            type: sL
          }]
        }, {
          conditions: fz0,
          type: dB,
          rules: [{
            conditions: [Nz0],
            type: dB,
            rules: [{
              type: dB,
              rules: [{
                endpoint: {
                  url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}",
                  properties: GB,
                  headers: GB
                },
                type: oL
              }]
            }]
          }, {
            error: "FIPS is enabled but this partition does not support FIPS",
            type: sL
          }]
        }, {
          conditions: qz0,
          type: dB,
          rules: [{
            conditions: [zz0],
            type: dB,
            rules: [{
              endpoint: {
                url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}",
                properties: GB,
                headers: GB
              },
              type: oL
            }]
          }, {
            error: "DualStack is enabled but this partition does not support DualStack",
            type: sL
          }]
        }, {
          endpoint: {
            url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}",
            properties: GB,
            headers: GB
          },
          type: oL
        }]
      }]
    };
  Mz0.ruleSet = o35
})
// @from(Start 2707836, End 2708177)
$z0 = Y((yz0) => {
  Object.defineProperty(yz0, "__esModule", {
    value: !0
  });
  yz0.defaultEndpointResolver = void 0;
  var e35 = LZ1(),
    t35 = Lz0(),
    I65 = (I, d = {}) => {
      return e35.resolveEndpoint(t35.ruleSet, {
        endpointParams: I,
        logger: d.logger
      })
    };
  yz0.defaultEndpointResolver = I65
})
// @from(Start 2708183, End 2708953)
lz0 = Y((Oz0) => {
  Object.defineProperty(Oz0, "__esModule", {
    value: !0
  });
  Oz0.getRuntimeConfig = void 0;
  var d65 = v0(),
    G65 = FV(),
    uz0 = IJ(),
    Tz0 = hC(),
    Z65 = $z0(),
    C65 = (I) => ({
      apiVersion: "2019-06-10",
      base64Decoder: I?.base64Decoder ?? uz0.fromBase64,
      base64Encoder: I?.base64Encoder ?? uz0.toBase64,
      disableHostPrefix: I?.disableHostPrefix ?? !1,
      endpointProvider: I?.endpointProvider ?? Z65.defaultEndpointResolver,
      logger: I?.logger ?? new d65.NoOpLogger,
      serviceId: I?.serviceId ?? "SSO OIDC",
      urlParser: I?.urlParser ?? G65.parseUrl,
      utf8Decoder: I?.utf8Decoder ?? Tz0.fromUtf8,
      utf8Encoder: I?.utf8Encoder ?? Tz0.toUtf8
    });
  Oz0.getRuntimeConfig = C65
})
// @from(Start 2708959, End 2710757)
xz0 = Y((jz0) => {
  Object.defineProperty(jz0, "__esModule", {
    value: !0
  });
  jz0.getRuntimeConfig = void 0;
  var W65 = x1(),
    w65 = W65.__importDefault(wz0()),
    Kp = Cd(),
    B65 = og(),
    bz0 = dG(),
    eL = QZ(),
    hz0 = eg(),
    A65 = tg(),
    V65 = Wd(),
    X65 = gz0(),
    Y65 = lz0(),
    _65 = v0(),
    D65 = dJ(),
    H65 = v0(),
    F65 = (I) => {
      H65.emitWarningIfUnsupportedVersion(process.version);
      let d = D65.resolveDefaultsModeConfig(I),
        G = () => d().then(_65.loadConfigsForDefaultMode),
        Z = Y65.getRuntimeConfig(I);
      return {
        ...Z,
        ...I,
        runtime: "node",
        defaultsMode: d,
        bodyLengthChecker: I?.bodyLengthChecker ?? A65.calculateBodyLength,
        defaultUserAgentProvider: I?.defaultUserAgentProvider ?? X65.defaultUserAgent({
          serviceId: Z.serviceId,
          clientVersion: w65.default.version
        }),
        maxAttempts: I?.maxAttempts ?? eL.loadConfig(bz0.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: I?.region ?? eL.loadConfig(Kp.NODE_REGION_CONFIG_OPTIONS, Kp.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: I?.requestHandler ?? new hz0.NodeHttpHandler(G),
        retryMode: I?.retryMode ?? eL.loadConfig({
          ...bz0.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await G()).retryMode || V65.DEFAULT_RETRY_MODE
        }),
        sha256: I?.sha256 ?? B65.Hash.bind(null, "sha256"),
        streamCollector: I?.streamCollector ?? hz0.streamCollector,
        useDualstackEndpoint: I?.useDualstackEndpoint ?? eL.loadConfig(Kp.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: I?.useFipsEndpoint ?? eL.loadConfig(Kp.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
      }
    };
  jz0.getRuntimeConfig = F65
})
// @from(Start 2710763, End 2712057)
TZ1 = Y((uZ1) => {
  Object.defineProperty(uZ1, "__esModule", {
    value: !0
  });
  uZ1.SSOOIDCClient = uZ1.__Client = void 0;
  var g65 = Cd(),
    J65 = jg(),
    K65 = u2(),
    cz0 = Dg0(),
    N65 = Ng0(),
    z65 = Ug0(),
    pz0 = dG(),
    iz0 = Gz0(),
    nz0 = v0();
  Object.defineProperty(uZ1, "__Client", {
    enumerable: !0,
    get: function() {
      return nz0.Client
    }
  });
  var Q65 = Wz0(),
    f65 = xz0();
  class rz0 extends nz0.Client {
    constructor(I) {
      let d = f65.getRuntimeConfig(I),
        G = Q65.resolveClientEndpointParameters(d),
        Z = g65.resolveRegionConfig(G),
        C = K65.resolveEndpointConfig(Z),
        W = pz0.resolveRetryConfig(C),
        w = cz0.resolveHostHeaderConfig(W),
        B = iz0.resolveUserAgentConfig(w);
      super(B);
      this.config = B, this.middlewareStack.use(pz0.getRetryPlugin(this.config)), this.middlewareStack.use(J65.getContentLengthPlugin(this.config)), this.middlewareStack.use(cz0.getHostHeaderPlugin(this.config)), this.middlewareStack.use(N65.getLoggerPlugin(this.config)), this.middlewareStack.use(z65.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(iz0.getUserAgentPlugin(this.config))
    }
    destroy() {
      super.destroy()
    }
  }
  uZ1.SSOOIDCClient = rz0
})
// @from(Start 2712063, End 2712148)
oz0 = Y((sz0) => {
  Object.defineProperty(sz0, "__esModule", {
    value: !0
  })
})
// @from(Start 2712154, End 2712408)
tz0 = Y((ez0) => {
  Object.defineProperty(ez0, "__esModule", {
    value: !0
  });
  ez0.HttpAuthLocation = void 0;
  var q65;
  (function(I) {
    I.HEADER = "header", I.QUERY = "query"
  })(q65 = ez0.HttpAuthLocation || (ez0.HttpAuthLocation = {}))
})
// @from(Start 2712414, End 2712499)
dQ0 = Y((IQ0) => {
  Object.defineProperty(IQ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2712505, End 2712590)
ZQ0 = Y((GQ0) => {
  Object.defineProperty(GQ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2712596, End 2712681)
WQ0 = Y((CQ0) => {
  Object.defineProperty(CQ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2712687, End 2712772)
BQ0 = Y((wQ0) => {
  Object.defineProperty(wQ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2712778, End 2712863)
VQ0 = Y((AQ0) => {
  Object.defineProperty(AQ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2712869, End 2712954)
YQ0 = Y((XQ0) => {
  Object.defineProperty(XQ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2712960, End 2713045)
DQ0 = Y((_Q0) => {
  Object.defineProperty(_Q0, "__esModule", {
    value: !0
  })
})
// @from(Start 2713051, End 2713245)
HQ0 = Y((tL) => {
  Object.defineProperty(tL, "__esModule", {
    value: !0
  });
  var mZ1 = x1();
  mZ1.__exportStar(VQ0(), tL);
  mZ1.__exportStar(YQ0(), tL);
  mZ1.__exportStar(DQ0(), tL)
})
// @from(Start 2713251, End 2713336)
gQ0 = Y((FQ0) => {
  Object.defineProperty(FQ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2713342, End 2713427)
KQ0 = Y((JQ0) => {
  Object.defineProperty(JQ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2713433, End 2713686)
zQ0 = Y((NQ0) => {
  Object.defineProperty(NQ0, "__esModule", {
    value: !0
  });
  NQ0.EndpointURLScheme = void 0;
  var R65;
  (function(I) {
    I.HTTP = "http", I.HTTPS = "https"
  })(R65 = NQ0.EndpointURLScheme || (NQ0.EndpointURLScheme = {}))
})
// @from(Start 2713692, End 2713777)
fQ0 = Y((QQ0) => {
  Object.defineProperty(QQ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2713783, End 2713868)
RQ0 = Y((qQ0) => {
  Object.defineProperty(qQ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2713874, End 2713959)
vQ0 = Y((UQ0) => {
  Object.defineProperty(UQ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2713965, End 2714050)
MQ0 = Y((EQ0) => {
  Object.defineProperty(EQ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2714056, End 2714141)
LQ0 = Y((SQ0) => {
  Object.defineProperty(SQ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2714147, End 2714397)
yQ0 = Y((CJ) => {
  Object.defineProperty(CJ, "__esModule", {
    value: !0
  });
  var Iy = x1();
  Iy.__exportStar(fQ0(), CJ);
  Iy.__exportStar(RQ0(), CJ);
  Iy.__exportStar(vQ0(), CJ);
  Iy.__exportStar(MQ0(), CJ);
  Iy.__exportStar(LQ0(), CJ)
})
// @from(Start 2714403, End 2714488)
$Q0 = Y((PQ0) => {
  Object.defineProperty(PQ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2714494, End 2714757)
TQ0 = Y((uQ0) => {
  Object.defineProperty(uQ0, "__esModule", {
    value: !0
  });
  uQ0.FieldPosition = void 0;
  var U65;
  (function(I) {
    I[I.HEADER = 0] = "HEADER", I[I.TRAILER = 1] = "TRAILER"
  })(U65 = uQ0.FieldPosition || (uQ0.FieldPosition = {}))
})
// @from(Start 2714763, End 2714848)
mQ0 = Y((OQ0) => {
  Object.defineProperty(OQ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2714854, End 2714939)
bQ0 = Y((lQ0) => {
  Object.defineProperty(lQ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2714945, End 2715108)
jQ0 = Y((Np) => {
  Object.defineProperty(Np, "__esModule", {
    value: !0
  });
  var hQ0 = x1();
  hQ0.__exportStar(mQ0(), Np);
  hQ0.__exportStar(bQ0(), Np)
})
// @from(Start 2715114, End 2715199)
xQ0 = Y((kQ0) => {
  Object.defineProperty(kQ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2715205, End 2715290)
pQ0 = Y((cQ0) => {
  Object.defineProperty(cQ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2715296, End 2715381)
nQ0 = Y((iQ0) => {
  Object.defineProperty(iQ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2715387, End 2715472)
aQ0 = Y((rQ0) => {
  Object.defineProperty(rQ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2715478, End 2715563)
oQ0 = Y((sQ0) => {
  Object.defineProperty(sQ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2715569, End 2715654)
tQ0 = Y((eQ0) => {
  Object.defineProperty(eQ0, "__esModule", {
    value: !0
  })
})
// @from(Start 2715660, End 2715745)
df0 = Y((If0) => {
  Object.defineProperty(If0, "__esModule", {
    value: !0
  })
})
// @from(Start 2715751, End 2715836)
Zf0 = Y((Gf0) => {
  Object.defineProperty(Gf0, "__esModule", {
    value: !0
  })
})
// @from(Start 2715842, End 2715927)
Wf0 = Y((Cf0) => {
  Object.defineProperty(Cf0, "__esModule", {
    value: !0
  })
})
// @from(Start 2715933, End 2716018)
Bf0 = Y((wf0) => {
  Object.defineProperty(wf0, "__esModule", {
    value: !0
  })
})
// @from(Start 2716024, End 2716109)
Vf0 = Y((Af0) => {
  Object.defineProperty(Af0, "__esModule", {
    value: !0
  })
})
// @from(Start 2716115, End 2716200)
Yf0 = Y((Xf0) => {
  Object.defineProperty(Xf0, "__esModule", {
    value: !0
  })
})
// @from(Start 2716206, End 2716291)
Df0 = Y((_f0) => {
  Object.defineProperty(_f0, "__esModule", {
    value: !0
  })
})
// @from(Start 2716297, End 2716602)
Ff0 = Y((Hf0) => {
  Object.defineProperty(Hf0, "__esModule", {
    value: !0
  });
  Hf0.RequestHandlerProtocol = void 0;
  var v65;
  (function(I) {
    I.HTTP_0_9 = "http/0.9", I.HTTP_1_0 = "http/1.0", I.TDS_8_0 = "tds/8.0"
  })(v65 = Hf0.RequestHandlerProtocol || (Hf0.RequestHandlerProtocol = {}))
})
// @from(Start 2716608, End 2716693)
Jf0 = Y((gf0) => {
  Object.defineProperty(gf0, "__esModule", {
    value: !0
  })
})
// @from(Start 2716699, End 2716784)
Nf0 = Y((Kf0) => {
  Object.defineProperty(Kf0, "__esModule", {
    value: !0
  })
})
// @from(Start 2716790, End 2716875)
Qf0 = Y((zf0) => {
  Object.defineProperty(zf0, "__esModule", {
    value: !0
  })
})
// @from(Start 2716881, End 2716966)
qf0 = Y((ff0) => {
  Object.defineProperty(ff0, "__esModule", {
    value: !0
  })
})
// @from(Start 2716972, End 2717057)
Uf0 = Y((Rf0) => {
  Object.defineProperty(Rf0, "__esModule", {
    value: !0
  })
})
// @from(Start 2717063, End 2718153)
vf0 = Y((A5) => {
  Object.defineProperty(A5, "__esModule", {
    value: !0
  });
  var f5 = x1();
  f5.__exportStar(oz0(), A5);
  f5.__exportStar(tz0(), A5);
  f5.__exportStar(dQ0(), A5);
  f5.__exportStar(ZQ0(), A5);
  f5.__exportStar(WQ0(), A5);
  f5.__exportStar(BQ0(), A5);
  f5.__exportStar(HQ0(), A5);
  f5.__exportStar(gQ0(), A5);
  f5.__exportStar(KQ0(), A5);
  f5.__exportStar(zQ0(), A5);
  f5.__exportStar(yQ0(), A5);
  f5.__exportStar($Q0(), A5);
  f5.__exportStar(TQ0(), A5);
  f5.__exportStar(jQ0(), A5);
  f5.__exportStar(xQ0(), A5);
  f5.__exportStar(pQ0(), A5);
  f5.__exportStar(nQ0(), A5);
  f5.__exportStar(aQ0(), A5);
  f5.__exportStar(oQ0(), A5);
  f5.__exportStar(tQ0(), A5);
  f5.__exportStar(df0(), A5);
  f5.__exportStar(Zf0(), A5);
  f5.__exportStar(Wf0(), A5);
  f5.__exportStar(Bf0(), A5);
  f5.__exportStar(Vf0(), A5);
  f5.__exportStar(Yf0(), A5);
  f5.__exportStar(Df0(), A5);
  f5.__exportStar(Ff0(), A5);
  f5.__exportStar(Jf0(), A5);
  f5.__exportStar(Nf0(), A5);
  f5.__exportStar(Qf0(), A5);
  f5.__exportStar(qf0(), A5);
  f5.__exportStar(Uf0(), A5)
})
// @from(Start 2718159, End 2718812)
Lf0 = Y((Mf0) => {
  Object.defineProperty(Mf0, "__esModule", {
    value: !0
  });
  Mf0.Field = void 0;
  var E65 = vf0();
  class Ef0 {
    constructor({
      name: I,
      kind: d = E65.FieldPosition.HEADER,
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
  Mf0.Field = Ef0
})
// @from(Start 2718818, End 2719427)
uf0 = Y((Pf0) => {
  Object.defineProperty(Pf0, "__esModule", {
    value: !0
  });
  Pf0.Fields = void 0;
  class yf0 {
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
  Pf0.Fields = yf0
})
// @from(Start 2719433, End 2719518)
Of0 = Y((Tf0) => {
  Object.defineProperty(Tf0, "__esModule", {
    value: !0
  })
})
// @from(Start 2719524, End 2720736)
bf0 = Y((mf0) => {
  Object.defineProperty(mf0, "__esModule", {
    value: !0
  });
  mf0.HttpRequest = void 0;
  class jZ1 {
    constructor(I) {
      this.method = I.method || "GET", this.hostname = I.hostname || "localhost", this.port = I.port, this.query = I.query || {}, this.headers = I.headers || {}, this.body = I.body, this.protocol = I.protocol ? I.protocol.slice(-1) !== ":" ? `${I.protocol}:` : I.protocol : "https:", this.path = I.path ? I.path.charAt(0) !== "/" ? `/${I.path}` : I.path : "/", this.username = I.username, this.password = I.password, this.fragment = I.fragment
    }
    static isInstance(I) {
      if (!I) return !1;
      let d = I;
      return "method" in d && "protocol" in d && "hostname" in d && "path" in d && typeof d.query === "object" && typeof d.headers === "object"
    }
    clone() {
      let I = new jZ1({
        ...this,
        headers: {
          ...this.headers
        }
      });
      if (I.query) I.query = M65(I.query);
      return I
    }
  }
  mf0.HttpRequest = jZ1;

  function M65(I) {
    return Object.keys(I).reduce((d, G) => {
      let Z = I[G];
      return {
        ...d,
        [G]: Array.isArray(Z) ? [...Z] : Z
      }
    }, {})
  }
})
// @from(Start 2720742, End 2721194)
xf0 = Y((jf0) => {
  Object.defineProperty(jf0, "__esModule", {
    value: !0
  });
  jf0.HttpResponse = void 0;
  class hf0 {
    constructor(I) {
      this.statusCode = I.statusCode, this.reason = I.reason, this.headers = I.headers || {}, this.body = I.body
    }
    static isInstance(I) {
      if (!I) return !1;
      let d = I;
      return typeof d.statusCode === "number" && typeof d.headers === "object"
    }
  }
  jf0.HttpResponse = hf0
})
// @from(Start 2721200, End 2721424)
if0 = Y((cf0) => {
  Object.defineProperty(cf0, "__esModule", {
    value: !0
  });
  cf0.isValidHostname = void 0;

  function S65(I) {
    return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(I)
  }
  cf0.isValidHostname = S65
})
// @from(Start 2721430, End 2721515)
rf0 = Y((nf0) => {
  Object.defineProperty(nf0, "__esModule", {
    value: !0
  })
})
// @from(Start 2721521, End 2721831)
af0 = Y((EV) => {
  Object.defineProperty(EV, "__esModule", {
    value: !0
  });
  var WJ = x1();
  WJ.__exportStar(Lf0(), EV);
  WJ.__exportStar(uf0(), EV);
  WJ.__exportStar(Of0(), EV);
  WJ.__exportStar(bf0(), EV);
  WJ.__exportStar(xf0(), EV);
  WJ.__exportStar(if0(), EV);
  WJ.__exportStar(rf0(), EV)
})
// @from(Start 2721837, End 2722321)
zp = Y((xZ1) => {
  Object.defineProperty(xZ1, "__esModule", {
    value: !0
  });
  xZ1.SSOOIDCServiceException = xZ1.__ServiceException = void 0;
  var sf0 = v0();
  Object.defineProperty(xZ1, "__ServiceException", {
    enumerable: !0,
    get: function() {
      return sf0.ServiceException
    }
  });
  class kZ1 extends sf0.ServiceException {
    constructor(I) {
      super(I);
      Object.setPrototypeOf(this, kZ1.prototype)
    }
  }
  xZ1.SSOOIDCServiceException = kZ1
})
// @from(Start 2722327, End 2727643)
GC1 = Y((ef0) => {
  Object.defineProperty(ef0, "__esModule", {
    value: !0
  });
  ef0.InvalidClientMetadataException = ef0.UnsupportedGrantTypeException = ef0.UnauthorizedClientException = ef0.SlowDownException = ef0.InvalidScopeException = ef0.InvalidRequestException = ef0.InvalidGrantException = ef0.InvalidClientException = ef0.InternalServerException = ef0.ExpiredTokenException = ef0.AuthorizationPendingException = ef0.AccessDeniedException = void 0;
  var qZ = zp();
  class cZ1 extends qZ.SSOOIDCServiceException {
    constructor(I) {
      super({
        name: "AccessDeniedException",
        $fault: "client",
        ...I
      });
      this.name = "AccessDeniedException", this.$fault = "client", Object.setPrototypeOf(this, cZ1.prototype), this.error = I.error, this.error_description = I.error_description
    }
  }
  ef0.AccessDeniedException = cZ1;
  class pZ1 extends qZ.SSOOIDCServiceException {
    constructor(I) {
      super({
        name: "AuthorizationPendingException",
        $fault: "client",
        ...I
      });
      this.name = "AuthorizationPendingException", this.$fault = "client", Object.setPrototypeOf(this, pZ1.prototype), this.error = I.error, this.error_description = I.error_description
    }
  }
  ef0.AuthorizationPendingException = pZ1;
  class iZ1 extends qZ.SSOOIDCServiceException {
    constructor(I) {
      super({
        name: "ExpiredTokenException",
        $fault: "client",
        ...I
      });
      this.name = "ExpiredTokenException", this.$fault = "client", Object.setPrototypeOf(this, iZ1.prototype), this.error = I.error, this.error_description = I.error_description
    }
  }
  ef0.ExpiredTokenException = iZ1;
  class nZ1 extends qZ.SSOOIDCServiceException {
    constructor(I) {
      super({
        name: "InternalServerException",
        $fault: "server",
        ...I
      });
      this.name = "InternalServerException", this.$fault = "server", Object.setPrototypeOf(this, nZ1.prototype), this.error = I.error, this.error_description = I.error_description
    }
  }
  ef0.InternalServerException = nZ1;
  class rZ1 extends qZ.SSOOIDCServiceException {
    constructor(I) {
      super({
        name: "InvalidClientException",
        $fault: "client",
        ...I
      });
      this.name = "InvalidClientException", this.$fault = "client", Object.setPrototypeOf(this, rZ1.prototype), this.error = I.error, this.error_description = I.error_description
    }
  }
  ef0.InvalidClientException = rZ1;
  class aZ1 extends qZ.SSOOIDCServiceException {
    constructor(I) {
      super({
        name: "InvalidGrantException",
        $fault: "client",
        ...I
      });
      this.name = "InvalidGrantException", this.$fault = "client", Object.setPrototypeOf(this, aZ1.prototype), this.error = I.error, this.error_description = I.error_description
    }
  }
  ef0.InvalidGrantException = aZ1;
  class sZ1 extends qZ.SSOOIDCServiceException {
    constructor(I) {
      super({
        name: "InvalidRequestException",
        $fault: "client",
        ...I
      });
      this.name = "InvalidRequestException", this.$fault = "client", Object.setPrototypeOf(this, sZ1.prototype), this.error = I.error, this.error_description = I.error_description
    }
  }
  ef0.InvalidRequestException = sZ1;
  class oZ1 extends qZ.SSOOIDCServiceException {
    constructor(I) {
      super({
        name: "InvalidScopeException",
        $fault: "client",
        ...I
      });
      this.name = "InvalidScopeException", this.$fault = "client", Object.setPrototypeOf(this, oZ1.prototype), this.error = I.error, this.error_description = I.error_description
    }
  }
  ef0.InvalidScopeException = oZ1;
  class eZ1 extends qZ.SSOOIDCServiceException {
    constructor(I) {
      super({
        name: "SlowDownException",
        $fault: "client",
        ...I
      });
      this.name = "SlowDownException", this.$fault = "client", Object.setPrototypeOf(this, eZ1.prototype), this.error = I.error, this.error_description = I.error_description
    }
  }
  ef0.SlowDownException = eZ1;
  class tZ1 extends qZ.SSOOIDCServiceException {
    constructor(I) {
      super({
        name: "UnauthorizedClientException",
        $fault: "client",
        ...I
      });
      this.name = "UnauthorizedClientException", this.$fault = "client", Object.setPrototypeOf(this, tZ1.prototype), this.error = I.error, this.error_description = I.error_description
    }
  }
  ef0.UnauthorizedClientException = tZ1;
  class IC1 extends qZ.SSOOIDCServiceException {
    constructor(I) {
      super({
        name: "UnsupportedGrantTypeException",
        $fault: "client",
        ...I
      });
      this.name = "UnsupportedGrantTypeException", this.$fault = "client", Object.setPrototypeOf(this, IC1.prototype), this.error = I.error, this.error_description = I.error_description
    }
  }
  ef0.UnsupportedGrantTypeException = IC1;
  class dC1 extends qZ.SSOOIDCServiceException {
    constructor(I) {
      super({
        name: "InvalidClientMetadataException",
        $fault: "client",
        ...I
      });
      this.name = "InvalidClientMetadataException", this.$fault = "client", Object.setPrototypeOf(this, dC1.prototype), this.error = I.error, this.error_description = I.error_description
    }
  }
  ef0.InvalidClientMetadataException = dC1
})