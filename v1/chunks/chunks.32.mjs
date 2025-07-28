
// @from(Start 3572004, End 3572362)
p52 = Y((x52) => {
  Object.defineProperty(x52, "__esModule", {
    value: !0
  });
  x52.validateTokenExpiry = void 0;
  var yl5 = x3(),
    Pl5 = Hr(),
    $l5 = (I) => {
      if (I.expiration && I.expiration.getTime() < Date.now()) throw new yl5.TokenProviderError(`Token is expired. ${Pl5.REFRESH_MESSAGE}`, !1)
    };
  x52.validateTokenExpiry = $l5
})
// @from(Start 3572368, End 3572755)
r52 = Y((i52) => {
  Object.defineProperty(i52, "__esModule", {
    value: !0
  });
  i52.validateTokenKey = void 0;
  var ul5 = x3(),
    Tl5 = Hr(),
    Ol5 = (I, d, G = !1) => {
      if (typeof d === "undefined") throw new ul5.TokenProviderError(`Value not present for '${I}' in SSO Token${G?". Cannot refresh":""}. ${Tl5.REFRESH_MESSAGE}`, !1)
    };
  i52.validateTokenKey = Ol5
})
// @from(Start 3572761, End 3573136)
o52 = Y((a52) => {
  Object.defineProperty(a52, "__esModule", {
    value: !0
  });
  a52.writeSSOTokenToFile = void 0;
  var ml5 = rC(),
    ll5 = B1("fs"),
    {
      writeFile: bl5
    } = ll5.promises,
    hl5 = (I, d) => {
      let G = ml5.getSSOTokenFilepath(I),
        Z = JSON.stringify(d, null, 2);
      return bl5(G, Z)
    };
  a52.writeSSOTokenToFile = hl5
})
// @from(Start 3573142, End 3575690)
N_1 = Y((d92) => {
  Object.defineProperty(d92, "__esModule", {
    value: !0
  });
  d92.fromSso = void 0;
  var $P = x3(),
    Fr = rC(),
    e52 = Hr(),
    jl5 = k52(),
    t52 = p52(),
    vJ = r52(),
    kl5 = o52(),
    I92 = new Date(0),
    xl5 = (I = {}) => async () => {
      let d = await Fr.parseKnownFiles(I),
        G = Fr.getProfileName(I),
        Z = d[G];
      if (!Z) throw new $P.TokenProviderError(`Profile '${G}' could not be found in shared credentials file.`, !1);
      else if (!Z.sso_session) throw new $P.TokenProviderError(`Profile '${G}' is missing required property 'sso_session'.`);
      let C = Z.sso_session,
        w = (await Fr.loadSsoSessionData(I))[C];
      if (!w) throw new $P.TokenProviderError(`Sso session '${C}' could not be found in shared credentials file.`, !1);
      for (let g of ["sso_start_url", "sso_region"])
        if (!w[g]) throw new $P.TokenProviderError(`Sso session '${C}' is missing required property '${g}'.`, !1);
      let {
        sso_start_url: B,
        sso_region: A
      } = w, V;
      try {
        V = await Fr.getSSOTokenFromFile(C)
      } catch (g) {
        throw new $P.TokenProviderError(`The SSO session token associated with profile=${G} was not found or is invalid. ${e52.REFRESH_MESSAGE}`, !1)
      }
      vJ.validateTokenKey("accessToken", V.accessToken), vJ.validateTokenKey("expiresAt", V.expiresAt);
      let {
        accessToken: X,
        expiresAt: _
      } = V, F = {
        token: X,
        expiration: new Date(_)
      };
      if (F.expiration.getTime() - Date.now() > e52.EXPIRE_WINDOW_MS) return F;
      if (Date.now() - I92.getTime() < 30000) return t52.validateTokenExpiry(F), F;
      vJ.validateTokenKey("clientId", V.clientId, !0), vJ.validateTokenKey("clientSecret", V.clientSecret, !0), vJ.validateTokenKey("refreshToken", V.refreshToken, !0);
      try {
        I92.setTime(Date.now());
        let g = await jl5.getNewSsoOidcToken(V, A);
        vJ.validateTokenKey("accessToken", g.accessToken), vJ.validateTokenKey("expiresIn", g.expiresIn);
        let J = new Date(Date.now() + g.expiresIn * 1000);
        try {
          await kl5.writeSSOTokenToFile(C, {
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
        return t52.validateTokenExpiry(F), F
      }
    };
  d92.fromSso = xl5
})
// @from(Start 3575696, End 3576031)
W92 = Y((Z92) => {
  Object.defineProperty(Z92, "__esModule", {
    value: !0
  });
  Z92.fromStatic = void 0;
  var cl5 = x3(),
    pl5 = ({
      token: I
    }) => async () => {
      if (!I || !I.token) throw new cl5.TokenProviderError("Please pass a valid token to fromStatic", !1);
      return I
    };
  Z92.fromStatic = pl5
})
// @from(Start 3576037, End 3576493)
A92 = Y((w92) => {
  Object.defineProperty(w92, "__esModule", {
    value: !0
  });
  w92.nodeProvider = void 0;
  var z_1 = x3(),
    il5 = N_1(),
    nl5 = (I = {}) => z_1.memoize(z_1.chain(il5.fromSso(I), async () => {
      throw new z_1.TokenProviderError("Could not load token from any providers", !1)
    }), (d) => d.expiration !== void 0 && d.expiration.getTime() - Date.now() < 300000, (d) => d.expiration !== void 0);
  w92.nodeProvider = nl5
})
// @from(Start 3576499, End 3576718)
V92 = Y((Pq) => {
  Object.defineProperty(Pq, "__esModule", {
    value: !0
  });
  var gr = x1();
  gr.__exportStar(Dr(), Pq);
  gr.__exportStar(N_1(), Pq);
  gr.__exportStar(W92(), Pq);
  gr.__exportStar(A92(), Pq)
})
// @from(Start 3576724, End 3578827)
D92 = Y((Y92) => {
  Object.defineProperty(Y92, "__esModule", {
    value: !0
  });
  Y92.resolveSSOCredentials = void 0;
  var X92 = e42(),
    rl5 = V92(),
    uP = x3(),
    al5 = rC(),
    TP = !1,
    sl5 = async ({
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
        let Q = await rl5.fromSso({
          profile: w
        })();
        B = {
          accessToken: Q.token,
          expiresAt: new Date(Q.expiration).toISOString()
        }
      } catch (Q) {
        throw new uP.CredentialsProviderError(Q.message, TP)
      } else try {
        B = await al5.getSSOTokenFromFile(I)
      } catch (Q) {
        throw new uP.CredentialsProviderError("The SSO session associated with this profile is invalid. To refresh this SSO session run aws sso login with the corresponding profile.", TP)
      }
      if (new Date(B.expiresAt).getTime() - Date.now() <= 0) throw new uP.CredentialsProviderError("The SSO session associated with this profile has expired. To refresh this SSO session run aws sso login with the corresponding profile.", TP);
      let {
        accessToken: V
      } = B, X = W || new X92.SSOClient({
        region: Z
      }), _;
      try {
        _ = await X.send(new X92.GetRoleCredentialsCommand({
          accountId: G,
          roleName: C,
          accessToken: V
        }))
      } catch (Q) {
        throw uP.CredentialsProviderError.from(Q, TP)
      }
      let {
        roleCredentials: {
          accessKeyId: F,
          secretAccessKey: g,
          sessionToken: J,
          expiration: K
        } = {}
      } = _;
      if (!F || !g || !J || !K) throw new uP.CredentialsProviderError("SSO returns an invalid temporary credential.", TP);
      return {
        accessKeyId: F,
        secretAccessKey: g,
        sessionToken: J,
        expiration: new Date(K)
      }
    };
  Y92.resolveSSOCredentials = sl5
})
// @from(Start 3578833, End 3579503)
Q_1 = Y((H92) => {
  Object.defineProperty(H92, "__esModule", {
    value: !0
  });
  H92.validateSsoProfile = void 0;
  var ol5 = x3(),
    el5 = (I) => {
      let {
        sso_start_url: d,
        sso_account_id: G,
        sso_region: Z,
        sso_role_name: C
      } = I;
      if (!d || !G || !Z || !C) throw new ol5.CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(I).join(", ")}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, !1);
      return I
    };
  H92.validateSsoProfile = el5
})
// @from(Start 3579509, End 3581630)
N92 = Y((J92) => {
  Object.defineProperty(J92, "__esModule", {
    value: !0
  });
  J92.fromSSO = void 0;
  var OP = x3(),
    f_1 = rC(),
    tl5 = TY1(),
    g92 = D92(),
    Ib5 = Q_1(),
    db5 = (I = {}) => async () => {
      let {
        ssoStartUrl: d,
        ssoAccountId: G,
        ssoRegion: Z,
        ssoRoleName: C,
        ssoClient: W,
        ssoSession: w
      } = I, B = f_1.getProfileName(I);
      if (!d && !G && !Z && !C && !w) {
        let V = (await f_1.parseKnownFiles(I))[B];
        if (!V) throw new OP.CredentialsProviderError(`Profile ${B} was not found.`);
        if (!tl5.isSsoProfile(V)) throw new OP.CredentialsProviderError(`Profile ${B} is not configured with SSO credentials.`);
        if (V === null || V === void 0 ? void 0 : V.sso_session) {
          let Q = (await f_1.loadSsoSessionData(I))[V.sso_session],
            E = ` configurations in profile ${B} and sso-session ${V.sso_session}`;
          if (Z && Z !== Q.sso_region) throw new OP.CredentialsProviderError("Conflicting SSO region" + E, !1);
          if (d && d !== Q.sso_start_url) throw new OP.CredentialsProviderError("Conflicting SSO start_url" + E, !1);
          V.sso_region = Q.sso_region, V.sso_start_url = Q.sso_start_url
        }
        let {
          sso_start_url: X,
          sso_account_id: _,
          sso_region: F,
          sso_role_name: g,
          sso_session: J
        } = Ib5.validateSsoProfile(V);
        return g92.resolveSSOCredentials({
          ssoStartUrl: X,
          ssoSession: J,
          ssoAccountId: _,
          ssoRegion: F,
          ssoRoleName: g,
          ssoClient: W,
          profile: B
        })
      } else if (!d || !G || !Z || !C) throw new OP.CredentialsProviderError('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"');
      else return g92.resolveSSOCredentials({
        ssoStartUrl: d,
        ssoSession: w,
        ssoAccountId: G,
        ssoRegion: Z,
        ssoRoleName: C,
        ssoClient: W,
        profile: B
      })
    };
  J92.fromSSO = db5
})
// @from(Start 3581636, End 3581721)
Q92 = Y((z92) => {
  Object.defineProperty(z92, "__esModule", {
    value: !0
  })
})
// @from(Start 3581727, End 3581946)
Kr = Y(($q) => {
  Object.defineProperty($q, "__esModule", {
    value: !0
  });
  var Jr = x1();
  Jr.__exportStar(N92(), $q);
  Jr.__exportStar(TY1(), $q);
  Jr.__exportStar(Q92(), $q);
  Jr.__exportStar(Q_1(), $q)
})
// @from(Start 3581952, End 3582621)
R92 = Y((q_1) => {
  Object.defineProperty(q_1, "__esModule", {
    value: !0
  });
  q_1.resolveSsoCredentials = q_1.isSsoProfile = void 0;
  var f92 = Kr(),
    Gb5 = Kr();
  Object.defineProperty(q_1, "isSsoProfile", {
    enumerable: !0,
    get: function() {
      return Gb5.isSsoProfile
    }
  });
  var Zb5 = (I) => {
    let {
      sso_start_url: d,
      sso_account_id: G,
      sso_session: Z,
      sso_region: C,
      sso_role_name: W
    } = f92.validateSsoProfile(I);
    return f92.fromSSO({
      ssoStartUrl: d,
      ssoAccountId: G,
      ssoSession: Z,
      ssoRegion: C,
      ssoRoleName: W
    })()
  };
  q_1.resolveSsoCredentials = Zb5
})
// @from(Start 3582627, End 3583231)
E92 = Y((U92) => {
  Object.defineProperty(U92, "__esModule", {
    value: !0
  });
  U92.resolveStaticCredentials = U92.isStaticCredsProfile = void 0;
  var Cb5 = (I) => Boolean(I) && typeof I === "object" && typeof I.aws_access_key_id === "string" && typeof I.aws_secret_access_key === "string" && ["undefined", "string"].indexOf(typeof I.aws_session_token) > -1;
  U92.isStaticCredsProfile = Cb5;
  var Wb5 = (I) => Promise.resolve({
    accessKeyId: I.aws_access_key_id,
    secretAccessKey: I.aws_secret_access_key,
    sessionToken: I.aws_session_token
  });
  U92.resolveStaticCredentials = Wb5
})
// @from(Start 3583237, End 3584083)
R_1 = Y((M92) => {
  Object.defineProperty(M92, "__esModule", {
    value: !0
  });
  M92.fromWebToken = void 0;
  var Bb5 = x3(),
    Ab5 = (I) => () => {
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
      if (!A) throw new Bb5.CredentialsProviderError(`Role Arn '${d}' needs to be assumed with web identity, but no role assumption callback was provided.`, !1);
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
  M92.fromWebToken = Ab5
})
// @from(Start 3584089, End 3585114)
P92 = Y((L92) => {
  Object.defineProperty(L92, "__esModule", {
    value: !0
  });
  L92.fromTokenFile = void 0;
  var Vb5 = x3(),
    Xb5 = B1("fs"),
    Yb5 = R_1(),
    _b5 = "AWS_WEB_IDENTITY_TOKEN_FILE",
    Db5 = "AWS_ROLE_ARN",
    Hb5 = "AWS_ROLE_SESSION_NAME",
    Fb5 = (I = {}) => async () => {
      var d, G, Z;
      let C = (d = I === null || I === void 0 ? void 0 : I.webIdentityTokenFile) !== null && d !== void 0 ? d : process.env[_b5],
        W = (G = I === null || I === void 0 ? void 0 : I.roleArn) !== null && G !== void 0 ? G : process.env[Db5],
        w = (Z = I === null || I === void 0 ? void 0 : I.roleSessionName) !== null && Z !== void 0 ? Z : process.env[Hb5];
      if (!C || !W) throw new Vb5.CredentialsProviderError("Web identity configuration not specified");
      return Yb5.fromWebToken({
        ...I,
        webIdentityToken: Xb5.readFileSync(C, {
          encoding: "ascii"
        }),
        roleArn: W,
        roleSessionName: w
      })()
    };
  L92.fromTokenFile = Fb5
})
// @from(Start 3585120, End 3585283)
U_1 = Y((Nr) => {
  Object.defineProperty(Nr, "__esModule", {
    value: !0
  });
  var $92 = x1();
  $92.__exportStar(P92(), Nr);
  $92.__exportStar(R_1(), Nr)
})
// @from(Start 3585289, End 3585985)
O92 = Y((u92) => {
  Object.defineProperty(u92, "__esModule", {
    value: !0
  });
  u92.resolveWebIdentityCredentials = u92.isWebIdentityProfile = void 0;
  var gb5 = U_1(),
    Jb5 = (I) => Boolean(I) && typeof I === "object" && typeof I.web_identity_token_file === "string" && typeof I.role_arn === "string" && ["undefined", "string"].indexOf(typeof I.role_session_name) > -1;
  u92.isWebIdentityProfile = Jb5;
  var Kb5 = async (I, d) => gb5.fromTokenFile({
    webIdentityTokenFile: I.web_identity_token_file,
    roleArn: I.role_arn,
    roleSessionName: I.role_session_name,
    roleAssumerWithWebIdentity: d.roleAssumerWithWebIdentity
  })();
  u92.resolveWebIdentityCredentials = Kb5
})
// @from(Start 3585991, End 3586937)
yY1 = Y((j92) => {
  Object.defineProperty(j92, "__esModule", {
    value: !0
  });
  j92.resolveProfileData = void 0;
  var zb5 = x3(),
    m92 = f02(),
    l92 = T02(),
    b92 = R92(),
    zr = E92(),
    h92 = O92(),
    Qb5 = async (I, d, G, Z = {}) => {
      let C = d[I];
      if (Object.keys(Z).length > 0 && zr.isStaticCredsProfile(C)) return zr.resolveStaticCredentials(C);
      if (m92.isAssumeRoleProfile(C)) return m92.resolveAssumeRoleCredentials(I, d, G, Z);
      if (zr.isStaticCredsProfile(C)) return zr.resolveStaticCredentials(C);
      if (h92.isWebIdentityProfile(C)) return h92.resolveWebIdentityCredentials(C, G);
      if (l92.isProcessProfile(C)) return l92.resolveProcessCredentials(G, I);
      if (b92.isSsoProfile(C)) return b92.resolveSsoCredentials(C);
      throw new zb5.CredentialsProviderError(`Profile ${I} could not be found or parsed in shared credentials file.`)
    };
  j92.resolveProfileData = Qb5
})
// @from(Start 3586943, End 3587260)
i92 = Y((c92) => {
  Object.defineProperty(c92, "__esModule", {
    value: !0
  });
  c92.fromIni = void 0;
  var x92 = rC(),
    fb5 = yY1(),
    qb5 = (I = {}) => async () => {
      let d = await x92.parseKnownFiles(I);
      return fb5.resolveProfileData(x92.getProfileName(I), d, I)
    };
  c92.fromIni = qb5
})
// @from(Start 3587266, End 3587401)
n92 = Y((v_1) => {
  Object.defineProperty(v_1, "__esModule", {
    value: !0
  });
  var Rb5 = x1();
  Rb5.__exportStar(i92(), v_1)
})
// @from(Start 3587407, End 3588013)
o92 = Y((r92) => {
  Object.defineProperty(r92, "__esModule", {
    value: !0
  });
  r92.remoteProvider = r92.ENV_IMDS_DISABLED = void 0;
  var Qr = kn(),
    Ub5 = x3();
  r92.ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
  var vb5 = (I) => {
    if (process.env[Qr.ENV_CMDS_RELATIVE_URI] || process.env[Qr.ENV_CMDS_FULL_URI]) return Qr.fromContainerMetadata(I);
    if (process.env[r92.ENV_IMDS_DISABLED]) return async () => {
      throw new Ub5.CredentialsProviderError("EC2 Instance Metadata Service access disabled")
    };
    return Qr.fromInstanceMetadata(I)
  };
  r92.remoteProvider = vb5
})
// @from(Start 3588019, End 3588743)
I32 = Y((e92) => {
  Object.defineProperty(e92, "__esModule", {
    value: !0
  });
  e92.defaultProvider = void 0;
  var Eb5 = RY1(),
    Mb5 = n92(),
    Sb5 = uY1(),
    Lb5 = Kr(),
    yb5 = U_1(),
    E_1 = x3(),
    Pb5 = rC(),
    $b5 = o92(),
    ub5 = (I = {}) => E_1.memoize(E_1.chain(...I.profile || process.env[Pb5.ENV_PROFILE] ? [] : [Eb5.fromEnv()], Lb5.fromSSO(I), Mb5.fromIni(I), Sb5.fromProcess(I), yb5.fromTokenFile(I), $b5.remoteProvider(I), async () => {
      throw new E_1.CredentialsProviderError("Could not load credentials from any providers", !1)
    }), (d) => d.expiration !== void 0 && d.expiration.getTime() - Date.now() < 300000, (d) => d.expiration !== void 0);
  e92.defaultProvider = ub5
})
// @from(Start 3588749, End 3588884)
S_1 = Y((M_1) => {
  Object.defineProperty(M_1, "__esModule", {
    value: !0
  });
  var Tb5 = x1();
  Tb5.__exportStar(I32(), M_1)
})
// @from(Start 3588890, End 3596966)
R32 = Y((f32) => {
  Object.defineProperty(f32, "__esModule", {
    value: !0
  });
  f32.ruleSet = void 0;
  var _32 = "required",
    y4 = "type",
    l5 = "fn",
    b5 = "argv",
    hD = "ref",
    d32 = !1,
    Ob5 = !0,
    EJ = "booleanEquals",
    gB = "tree",
    d7 = "stringEquals",
    D32 = "sigv4",
    H32 = "sts",
    F32 = "us-east-1",
    B3 = "endpoint",
    G32 = "https://sts.{Region}.{PartitionResult#dnsSuffix}",
    uq = "error",
    y_1 = "getAttr",
    Z32 = {
      [_32]: !1,
      [y4]: "String"
    },
    L_1 = {
      [_32]: !0,
      default: !1,
      [y4]: "Boolean"
    },
    g32 = {
      [hD]: "Endpoint"
    },
    C32 = {
      [l5]: "isSet",
      [b5]: [{
        [hD]: "Region"
      }]
    },
    G7 = {
      [hD]: "Region"
    },
    W32 = {
      [l5]: "aws.partition",
      [b5]: [G7],
      assign: "PartitionResult"
    },
    J32 = {
      [hD]: "UseFIPS"
    },
    K32 = {
      [hD]: "UseDualStack"
    },
    l7 = {
      url: "https://sts.amazonaws.com",
      properties: {
        authSchemes: [{
          name: D32,
          signingName: H32,
          signingRegion: F32
        }]
      },
      headers: {}
    },
    WG = {},
    w32 = {
      conditions: [{
        [l5]: d7,
        [b5]: [G7, "aws-global"]
      }],
      [B3]: l7,
      [y4]: B3
    },
    N32 = {
      [l5]: EJ,
      [b5]: [J32, !0]
    },
    z32 = {
      [l5]: EJ,
      [b5]: [K32, !0]
    },
    B32 = {
      [l5]: EJ,
      [b5]: [!0, {
        [l5]: y_1,
        [b5]: [{
          [hD]: "PartitionResult"
        }, "supportsFIPS"]
      }]
    },
    Q32 = {
      [hD]: "PartitionResult"
    },
    A32 = {
      [l5]: EJ,
      [b5]: [!0, {
        [l5]: y_1,
        [b5]: [Q32, "supportsDualStack"]
      }]
    },
    V32 = [{
      [l5]: "isSet",
      [b5]: [g32]
    }],
    X32 = [N32],
    Y32 = [z32],
    mb5 = {
      version: "1.0",
      parameters: {
        Region: Z32,
        UseDualStack: L_1,
        UseFIPS: L_1,
        Endpoint: Z32,
        UseGlobalEndpoint: L_1
      },
      rules: [{
        conditions: [{
          [l5]: EJ,
          [b5]: [{
            [hD]: "UseGlobalEndpoint"
          }, Ob5]
        }, {
          [l5]: "not",
          [b5]: V32
        }, C32, W32, {
          [l5]: EJ,
          [b5]: [J32, d32]
        }, {
          [l5]: EJ,
          [b5]: [K32, d32]
        }],
        [y4]: gB,
        rules: [{
          conditions: [{
            [l5]: d7,
            [b5]: [G7, "ap-northeast-1"]
          }],
          endpoint: l7,
          [y4]: B3
        }, {
          conditions: [{
            [l5]: d7,
            [b5]: [G7, "ap-south-1"]
          }],
          endpoint: l7,
          [y4]: B3
        }, {
          conditions: [{
            [l5]: d7,
            [b5]: [G7, "ap-southeast-1"]
          }],
          endpoint: l7,
          [y4]: B3
        }, {
          conditions: [{
            [l5]: d7,
            [b5]: [G7, "ap-southeast-2"]
          }],
          endpoint: l7,
          [y4]: B3
        }, w32, {
          conditions: [{
            [l5]: d7,
            [b5]: [G7, "ca-central-1"]
          }],
          endpoint: l7,
          [y4]: B3
        }, {
          conditions: [{
            [l5]: d7,
            [b5]: [G7, "eu-central-1"]
          }],
          endpoint: l7,
          [y4]: B3
        }, {
          conditions: [{
            [l5]: d7,
            [b5]: [G7, "eu-north-1"]
          }],
          endpoint: l7,
          [y4]: B3
        }, {
          conditions: [{
            [l5]: d7,
            [b5]: [G7, "eu-west-1"]
          }],
          endpoint: l7,
          [y4]: B3
        }, {
          conditions: [{
            [l5]: d7,
            [b5]: [G7, "eu-west-2"]
          }],
          endpoint: l7,
          [y4]: B3
        }, {
          conditions: [{
            [l5]: d7,
            [b5]: [G7, "eu-west-3"]
          }],
          endpoint: l7,
          [y4]: B3
        }, {
          conditions: [{
            [l5]: d7,
            [b5]: [G7, "sa-east-1"]
          }],
          endpoint: l7,
          [y4]: B3
        }, {
          conditions: [{
            [l5]: d7,
            [b5]: [G7, F32]
          }],
          endpoint: l7,
          [y4]: B3
        }, {
          conditions: [{
            [l5]: d7,
            [b5]: [G7, "us-east-2"]
          }],
          endpoint: l7,
          [y4]: B3
        }, {
          conditions: [{
            [l5]: d7,
            [b5]: [G7, "us-west-1"]
          }],
          endpoint: l7,
          [y4]: B3
        }, {
          conditions: [{
            [l5]: d7,
            [b5]: [G7, "us-west-2"]
          }],
          endpoint: l7,
          [y4]: B3
        }, {
          endpoint: {
            url: G32,
            properties: {
              authSchemes: [{
                name: D32,
                signingName: H32,
                signingRegion: "{Region}"
              }]
            },
            headers: WG
          },
          [y4]: B3
        }]
      }, {
        conditions: V32,
        [y4]: gB,
        rules: [{
          conditions: X32,
          error: "Invalid Configuration: FIPS and custom endpoint are not supported",
          [y4]: uq
        }, {
          conditions: Y32,
          error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
          [y4]: uq
        }, {
          endpoint: {
            url: g32,
            properties: WG,
            headers: WG
          },
          [y4]: B3
        }]
      }, {
        conditions: [C32],
        [y4]: gB,
        rules: [{
          conditions: [W32],
          [y4]: gB,
          rules: [{
            conditions: [N32, z32],
            [y4]: gB,
            rules: [{
              conditions: [B32, A32],
              [y4]: gB,
              rules: [{
                endpoint: {
                  url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                  properties: WG,
                  headers: WG
                },
                [y4]: B3
              }]
            }, {
              error: "FIPS and DualStack are enabled, but this partition does not support one or both",
              [y4]: uq
            }]
          }, {
            conditions: X32,
            [y4]: gB,
            rules: [{
              conditions: [B32],
              [y4]: gB,
              rules: [{
                conditions: [{
                  [l5]: d7,
                  [b5]: ["aws-us-gov", {
                    [l5]: y_1,
                    [b5]: [Q32, "name"]
                  }]
                }],
                endpoint: {
                  url: "https://sts.{Region}.amazonaws.com",
                  properties: WG,
                  headers: WG
                },
                [y4]: B3
              }, {
                endpoint: {
                  url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",
                  properties: WG,
                  headers: WG
                },
                [y4]: B3
              }]
            }, {
              error: "FIPS is enabled but this partition does not support FIPS",
              [y4]: uq
            }]
          }, {
            conditions: Y32,
            [y4]: gB,
            rules: [{
              conditions: [A32],
              [y4]: gB,
              rules: [{
                endpoint: {
                  url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",
                  properties: WG,
                  headers: WG
                },
                [y4]: B3
              }]
            }, {
              error: "DualStack is enabled but this partition does not support DualStack",
              [y4]: uq
            }]
          }, w32, {
            endpoint: {
              url: G32,
              properties: WG,
              headers: WG
            },
            [y4]: B3
          }]
        }]
      }, {
        error: "Invalid Configuration: Missing Region",
        [y4]: uq
      }]
    };
  f32.ruleSet = mb5
})
// @from(Start 3596972, End 3597312)
E32 = Y((U32) => {
  Object.defineProperty(U32, "__esModule", {
    value: !0
  });
  U32.defaultEndpointResolver = void 0;
  var lb5 = zq(),
    bb5 = R32(),
    hb5 = (I, d = {}) => {
      return lb5.resolveEndpoint(bb5.ruleSet, {
        endpointParams: I,
        logger: d.logger
      })
    };
  U32.defaultEndpointResolver = hb5
})
// @from(Start 3597318, End 3598122)
P32 = Y((L32) => {
  Object.defineProperty(L32, "__esModule", {
    value: !0
  });
  L32.getRuntimeConfig = void 0;
  var jb5 = h2(),
    kb5 = qJ(),
    M32 = fD(),
    S32 = SZ(),
    xb5 = E32(),
    cb5 = (I) => ({
      apiVersion: "2011-06-15",
      base64Decoder: I?.base64Decoder ?? M32.fromBase64,
      base64Encoder: I?.base64Encoder ?? M32.toBase64,
      disableHostPrefix: I?.disableHostPrefix ?? !1,
      endpointProvider: I?.endpointProvider ?? xb5.defaultEndpointResolver,
      extensions: I?.extensions ?? [],
      logger: I?.logger ?? new jb5.NoOpLogger,
      serviceId: I?.serviceId ?? "STS",
      urlParser: I?.urlParser ?? kb5.parseUrl,
      utf8Decoder: I?.utf8Decoder ?? S32.fromUtf8,
      utf8Encoder: I?.utf8Encoder ?? S32.toUtf8
    });
  L32.getRuntimeConfig = cb5
})
// @from(Start 3598128, End 3600086)
m32 = Y((T32) => {
  Object.defineProperty(T32, "__esModule", {
    value: !0
  });
  T32.getRuntimeConfig = void 0;
  var pb5 = x1(),
    ib5 = pb5.__importDefault(st0()),
    nb5 = fY1(),
    rb5 = S_1(),
    ab5 = zP(),
    fr = _B(),
    sb5 = QP(),
    $32 = bV(),
    mP = mV(),
    u32 = Yq(),
    ob5 = fP(),
    eb5 = fq(),
    tb5 = P32(),
    Ih5 = h2(),
    dh5 = RP(),
    Gh5 = h2(),
    Zh5 = (I) => {
      Gh5.emitWarningIfUnsupportedVersion(process.version);
      let d = dh5.resolveDefaultsModeConfig(I),
        G = () => d().then(Ih5.loadConfigsForDefaultMode),
        Z = tb5.getRuntimeConfig(I);
      return {
        ...Z,
        ...I,
        runtime: "node",
        defaultsMode: d,
        bodyLengthChecker: I?.bodyLengthChecker ?? ob5.calculateBodyLength,
        credentialDefaultProvider: I?.credentialDefaultProvider ?? nb5.decorateDefaultCredentialProvider(rb5.defaultProvider),
        defaultUserAgentProvider: I?.defaultUserAgentProvider ?? ab5.defaultUserAgent({
          serviceId: Z.serviceId,
          clientVersion: ib5.default.version
        }),
        maxAttempts: I?.maxAttempts ?? mP.loadConfig($32.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: I?.region ?? mP.loadConfig(fr.NODE_REGION_CONFIG_OPTIONS, fr.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: I?.requestHandler ?? new u32.NodeHttpHandler(G),
        retryMode: I?.retryMode ?? mP.loadConfig({
          ...$32.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await G()).retryMode || eb5.DEFAULT_RETRY_MODE
        }),
        sha256: I?.sha256 ?? sb5.Hash.bind(null, "sha256"),
        streamCollector: I?.streamCollector ?? u32.streamCollector,
        useDualstackEndpoint: I?.useDualstackEndpoint ?? mP.loadConfig(fr.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: I?.useFipsEndpoint ?? mP.loadConfig(fr.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
      }
    };
  T32.getRuntimeConfig = Zh5
})
// @from(Start 3600092, End 3600782)
x32 = Y((j32) => {
  Object.defineProperty(j32, "__esModule", {
    value: !0
  });
  j32.resolveRuntimeExtensions = void 0;
  var l32 = an(),
    b32 = t8(),
    h32 = h2(),
    P_1 = (I) => I,
    Ch5 = (I, d) => {
      let G = {
        ...P_1(l32.getAwsRegionExtensionConfiguration(I)),
        ...P_1(h32.getDefaultExtensionConfiguration(I)),
        ...P_1(b32.getHttpHandlerExtensionConfiguration(I))
      };
      return d.forEach((Z) => Z.configure(G)), {
        ...I,
        ...l32.resolveAwsRegionExtensionConfiguration(G),
        ...h32.resolveDefaultRuntimeConfig(G),
        ...b32.resolveHttpHandlerRuntimeConfig(G)
      }
    };
  j32.resolveRuntimeExtensions = Ch5
})
// @from(Start 3600788, End 3602263)
qr = Y((u_1) => {
  Object.defineProperty(u_1, "__esModule", {
    value: !0
  });
  u_1.STSClient = u_1.__Client = void 0;
  var c32 = ey(),
    Wh5 = ty(),
    wh5 = IP(),
    Bh5 = it0(),
    p32 = wP(),
    Ah5 = _B(),
    Vh5 = BP(),
    Xh5 = c3(),
    i32 = bV(),
    n32 = h2();
  Object.defineProperty(u_1, "__Client", {
    enumerable: !0,
    get: function() {
      return n32.Client
    }
  });
  var Yh5 = at0(),
    _h5 = m32(),
    Dh5 = x32();
  class $_1 extends n32.Client {
    constructor(...[I]) {
      let d = _h5.getRuntimeConfig(I || {}),
        G = Yh5.resolveClientEndpointParameters(d),
        Z = Ah5.resolveRegionConfig(G),
        C = Xh5.resolveEndpointConfig(Z),
        W = i32.resolveRetryConfig(C),
        w = c32.resolveHostHeaderConfig(W),
        B = Bh5.resolveStsAuthConfig(w, {
          stsClientCtor: $_1
        }),
        A = p32.resolveUserAgentConfig(B),
        V = Dh5.resolveRuntimeExtensions(A, I?.extensions || []);
      super(V);
      this.config = V, this.middlewareStack.use(i32.getRetryPlugin(this.config)), this.middlewareStack.use(Vh5.getContentLengthPlugin(this.config)), this.middlewareStack.use(c32.getHostHeaderPlugin(this.config)), this.middlewareStack.use(Wh5.getLoggerPlugin(this.config)), this.middlewareStack.use(wh5.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(p32.getUserAgentPlugin(this.config))
    }
    destroy() {
      super.destroy()
    }
  }
  u_1.STSClient = $_1
})
// @from(Start 3602269, End 3604383)
m_1 = Y((O_1) => {
  Object.defineProperty(O_1, "__esModule", {
    value: !0
  });
  O_1.AssumeRoleWithSAMLCommand = O_1.$Command = void 0;
  var Hh5 = c3(),
    Fh5 = n6(),
    o32 = h2();
  Object.defineProperty(O_1, "$Command", {
    enumerable: !0,
    get: function() {
      return o32.Command
    }
  });
  var gh5 = k3(),
    a32 = SD(),
    s32 = jV();
  class T_1 extends o32.Command {
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
      this.middlewareStack.use(Fh5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(Hh5.getEndpointPlugin(d, T_1.getEndpointParameterInstructions()));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "STSClient",
          commandName: "AssumeRoleWithSAMLCommand",
          inputFilterSensitiveLog: a32.AssumeRoleWithSAMLRequestFilterSensitiveLog,
          outputFilterSensitiveLog: a32.AssumeRoleWithSAMLResponseFilterSensitiveLog,
          [gh5.SMITHY_CONTEXT_KEY]: {
            service: "AWSSecurityTokenServiceV20110615",
            operation: "AssumeRoleWithSAML"
          }
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return s32.se_AssumeRoleWithSAMLCommand(I, d)
    }
    deserialize(I, d) {
      return s32.de_AssumeRoleWithSAMLCommand(I, d)
    }
  }
  O_1.AssumeRoleWithSAMLCommand = T_1
})
// @from(Start 3604389, End 3606523)
h_1 = Y((b_1) => {
  Object.defineProperty(b_1, "__esModule", {
    value: !0
  });
  b_1.DecodeAuthorizationMessageCommand = b_1.$Command = void 0;
  var Jh5 = OV(),
    Kh5 = c3(),
    Nh5 = n6(),
    I62 = h2();
  Object.defineProperty(b_1, "$Command", {
    enumerable: !0,
    get: function() {
      return I62.Command
    }
  });
  var zh5 = k3(),
    t32 = jV();
  class l_1 extends I62.Command {
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
      this.middlewareStack.use(Nh5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(Kh5.getEndpointPlugin(d, l_1.getEndpointParameterInstructions())), this.middlewareStack.use(Jh5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "STSClient",
          commandName: "DecodeAuthorizationMessageCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V,
          [zh5.SMITHY_CONTEXT_KEY]: {
            service: "AWSSecurityTokenServiceV20110615",
            operation: "DecodeAuthorizationMessage"
          }
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return t32.se_DecodeAuthorizationMessageCommand(I, d)
    }
    deserialize(I, d) {
      return t32.de_DecodeAuthorizationMessageCommand(I, d)
    }
  }
  b_1.DecodeAuthorizationMessageCommand = l_1
})
// @from(Start 3606529, End 3608603)
x_1 = Y((k_1) => {
  Object.defineProperty(k_1, "__esModule", {
    value: !0
  });
  k_1.GetAccessKeyInfoCommand = k_1.$Command = void 0;
  var Qh5 = OV(),
    fh5 = c3(),
    qh5 = n6(),
    Z62 = h2();
  Object.defineProperty(k_1, "$Command", {
    enumerable: !0,
    get: function() {
      return Z62.Command
    }
  });
  var Rh5 = k3(),
    G62 = jV();
  class j_1 extends Z62.Command {
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
      this.middlewareStack.use(qh5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(fh5.getEndpointPlugin(d, j_1.getEndpointParameterInstructions())), this.middlewareStack.use(Qh5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "STSClient",
          commandName: "GetAccessKeyInfoCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V,
          [Rh5.SMITHY_CONTEXT_KEY]: {
            service: "AWSSecurityTokenServiceV20110615",
            operation: "GetAccessKeyInfo"
          }
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return G62.se_GetAccessKeyInfoCommand(I, d)
    }
    deserialize(I, d) {
      return G62.de_GetAccessKeyInfoCommand(I, d)
    }
  }
  k_1.GetAccessKeyInfoCommand = j_1
})
// @from(Start 3608609, End 3610689)
i_1 = Y((p_1) => {
  Object.defineProperty(p_1, "__esModule", {
    value: !0
  });
  p_1.GetCallerIdentityCommand = p_1.$Command = void 0;
  var Uh5 = OV(),
    vh5 = c3(),
    Eh5 = n6(),
    w62 = h2();
  Object.defineProperty(p_1, "$Command", {
    enumerable: !0,
    get: function() {
      return w62.Command
    }
  });
  var Mh5 = k3(),
    W62 = jV();
  class c_1 extends w62.Command {
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
      this.middlewareStack.use(Eh5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(vh5.getEndpointPlugin(d, c_1.getEndpointParameterInstructions())), this.middlewareStack.use(Uh5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "STSClient",
          commandName: "GetCallerIdentityCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: (V) => V,
          [Mh5.SMITHY_CONTEXT_KEY]: {
            service: "AWSSecurityTokenServiceV20110615",
            operation: "GetCallerIdentity"
          }
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return W62.se_GetCallerIdentityCommand(I, d)
    }
    deserialize(I, d) {
      return W62.de_GetCallerIdentityCommand(I, d)
    }
  }
  p_1.GetCallerIdentityCommand = c_1
})
// @from(Start 3610695, End 3612837)
a_1 = Y((r_1) => {
  Object.defineProperty(r_1, "__esModule", {
    value: !0
  });
  r_1.GetFederationTokenCommand = r_1.$Command = void 0;
  var Sh5 = OV(),
    Lh5 = c3(),
    yh5 = n6(),
    V62 = h2();
  Object.defineProperty(r_1, "$Command", {
    enumerable: !0,
    get: function() {
      return V62.Command
    }
  });
  var Ph5 = k3(),
    $h5 = SD(),
    A62 = jV();
  class n_1 extends V62.Command {
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
      this.middlewareStack.use(yh5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(Lh5.getEndpointPlugin(d, n_1.getEndpointParameterInstructions())), this.middlewareStack.use(Sh5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "STSClient",
          commandName: "GetFederationTokenCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: $h5.GetFederationTokenResponseFilterSensitiveLog,
          [Ph5.SMITHY_CONTEXT_KEY]: {
            service: "AWSSecurityTokenServiceV20110615",
            operation: "GetFederationToken"
          }
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return A62.se_GetFederationTokenCommand(I, d)
    }
    deserialize(I, d) {
      return A62.de_GetFederationTokenCommand(I, d)
    }
  }
  r_1.GetFederationTokenCommand = n_1
})
// @from(Start 3612843, End 3614964)
e_1 = Y((o_1) => {
  Object.defineProperty(o_1, "__esModule", {
    value: !0
  });
  o_1.GetSessionTokenCommand = o_1.$Command = void 0;
  var uh5 = OV(),
    Th5 = c3(),
    Oh5 = n6(),
    _62 = h2();
  Object.defineProperty(o_1, "$Command", {
    enumerable: !0,
    get: function() {
      return _62.Command
    }
  });
  var mh5 = k3(),
    lh5 = SD(),
    Y62 = jV();
  class s_1 extends _62.Command {
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
      this.middlewareStack.use(Oh5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(Th5.getEndpointPlugin(d, s_1.getEndpointParameterInstructions())), this.middlewareStack.use(uh5.getAwsAuthPlugin(d));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "STSClient",
          commandName: "GetSessionTokenCommand",
          inputFilterSensitiveLog: (V) => V,
          outputFilterSensitiveLog: lh5.GetSessionTokenResponseFilterSensitiveLog,
          [mh5.SMITHY_CONTEXT_KEY]: {
            service: "AWSSecurityTokenServiceV20110615",
            operation: "GetSessionToken"
          }
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return Y62.se_GetSessionTokenCommand(I, d)
    }
    deserialize(I, d) {
      return Y62.de_GetSessionTokenCommand(I, d)
    }
  }
  o_1.GetSessionTokenCommand = s_1
})
// @from(Start 3614970, End 3615869)
g62 = Y((H62) => {
  Object.defineProperty(H62, "__esModule", {
    value: !0
  });
  H62.STS = void 0;
  var bh5 = h2(),
    hh5 = mn(),
    jh5 = m_1(),
    kh5 = ln(),
    xh5 = h_1(),
    ch5 = x_1(),
    ph5 = i_1(),
    ih5 = a_1(),
    nh5 = e_1(),
    rh5 = qr(),
    ah5 = {
      AssumeRoleCommand: hh5.AssumeRoleCommand,
      AssumeRoleWithSAMLCommand: jh5.AssumeRoleWithSAMLCommand,
      AssumeRoleWithWebIdentityCommand: kh5.AssumeRoleWithWebIdentityCommand,
      DecodeAuthorizationMessageCommand: xh5.DecodeAuthorizationMessageCommand,
      GetAccessKeyInfoCommand: ch5.GetAccessKeyInfoCommand,
      GetCallerIdentityCommand: ph5.GetCallerIdentityCommand,
      GetFederationTokenCommand: ih5.GetFederationTokenCommand,
      GetSessionTokenCommand: nh5.GetSessionTokenCommand
    };
  class t_1 extends rh5.STSClient {}
  H62.STS = t_1;
  bh5.createAggregatedClient(ah5, t_1)
})
// @from(Start 3615875, End 3616213)
J62 = Y((JB) => {
  Object.defineProperty(JB, "__esModule", {
    value: !0
  });
  var jD = x1();
  jD.__exportStar(mn(), JB);
  jD.__exportStar(m_1(), JB);
  jD.__exportStar(ln(), JB);
  jD.__exportStar(h_1(), JB);
  jD.__exportStar(x_1(), JB);
  jD.__exportStar(i_1(), JB);
  jD.__exportStar(a_1(), JB);
  jD.__exportStar(e_1(), JB)
})
// @from(Start 3616219, End 3616353)
K62 = Y((ID1) => {
  Object.defineProperty(ID1, "__esModule", {
    value: !0
  });
  var sh5 = x1();
  sh5.__exportStar(SD(), ID1)
})
// @from(Start 3616359, End 3617283)
v62 = Y((f62) => {
  Object.defineProperty(f62, "__esModule", {
    value: !0
  });
  f62.decorateDefaultCredentialProvider = f62.getDefaultRoleAssumerWithWebIdentity = f62.getDefaultRoleAssumer = void 0;
  var N62 = fY1(),
    z62 = qr(),
    Q62 = (I, d) => {
      if (!d) return I;
      else return class G extends I {
        constructor(Z) {
          super(Z);
          for (let C of d) this.middlewareStack.use(C)
        }
      }
    },
    oh5 = (I = {}, d) => N62.getDefaultRoleAssumer(I, Q62(z62.STSClient, d));
  f62.getDefaultRoleAssumer = oh5;
  var eh5 = (I = {}, d) => N62.getDefaultRoleAssumerWithWebIdentity(I, Q62(z62.STSClient, d));
  f62.getDefaultRoleAssumerWithWebIdentity = eh5;
  var th5 = (I) => (d) => I({
    roleAssumer: f62.getDefaultRoleAssumer(d),
    roleAssumerWithWebIdentity: f62.getDefaultRoleAssumerWithWebIdentity(d),
    ...d
  });
  f62.decorateDefaultCredentialProvider = th5
})
// @from(Start 3617289, End 3617735)
E62 = Y((kD) => {
  Object.defineProperty(kD, "__esModule", {
    value: !0
  });
  kD.STSServiceException = void 0;
  var lP = x1();
  lP.__exportStar(qr(), kD);
  lP.__exportStar(g62(), kD);
  lP.__exportStar(J62(), kD);
  lP.__exportStar(K62(), kD);
  lP.__exportStar(v62(), kD);
  var Ij5 = Pn();
  Object.defineProperty(kD, "STSServiceException", {
    enumerable: !0,
    get: function() {
      return Ij5.STSServiceException
    }
  })
})
// @from(Start 3617741, End 3622506)
k62 = Y((h62) => {
  Object.defineProperty(h62, "__esModule", {
    value: !0
  });
  h62.ruleSet = void 0;
  var m62 = "required",
    pV = "fn",
    iV = "argv",
    Oq = "ref",
    M62 = "isSet",
    XI = "tree",
    Tq = "error",
    bP = "endpoint",
    dD1 = "PartitionResult",
    S62 = {
      [m62]: !1,
      type: "String"
    },
    L62 = {
      [m62]: !0,
      default: !1,
      type: "Boolean"
    },
    y62 = {
      [Oq]: "Endpoint"
    },
    l62 = {
      [pV]: "booleanEquals",
      [iV]: [{
        [Oq]: "UseFIPS"
      }, !0]
    },
    b62 = {
      [pV]: "booleanEquals",
      [iV]: [{
        [Oq]: "UseDualStack"
      }, !0]
    },
    KB = {},
    P62 = {
      [pV]: "booleanEquals",
      [iV]: [!0, {
        [pV]: "getAttr",
        [iV]: [{
          [Oq]: dD1
        }, "supportsFIPS"]
      }]
    },
    $62 = {
      [pV]: "booleanEquals",
      [iV]: [!0, {
        [pV]: "getAttr",
        [iV]: [{
          [Oq]: dD1
        }, "supportsDualStack"]
      }]
    },
    u62 = [l62],
    T62 = [b62],
    O62 = [{
      [Oq]: "Region"
    }],
    Gj5 = {
      version: "1.0",
      parameters: {
        Region: S62,
        UseDualStack: L62,
        UseFIPS: L62,
        Endpoint: S62
      },
      rules: [{
        conditions: [{
          [pV]: M62,
          [iV]: [y62]
        }],
        type: XI,
        rules: [{
          conditions: u62,
          error: "Invalid Configuration: FIPS and custom endpoint are not supported",
          type: Tq
        }, {
          type: XI,
          rules: [{
            conditions: T62,
            error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
            type: Tq
          }, {
            endpoint: {
              url: y62,
              properties: KB,
              headers: KB
            },
            type: bP
          }]
        }]
      }, {
        type: XI,
        rules: [{
          conditions: [{
            [pV]: M62,
            [iV]: O62
          }],
          type: XI,
          rules: [{
            conditions: [{
              [pV]: "aws.partition",
              [iV]: O62,
              assign: dD1
            }],
            type: XI,
            rules: [{
              conditions: [l62, b62],
              type: XI,
              rules: [{
                conditions: [P62, $62],
                type: XI,
                rules: [{
                  type: XI,
                  rules: [{
                    endpoint: {
                      url: "https://bedrock-runtime-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                      properties: KB,
                      headers: KB
                    },
                    type: bP
                  }]
                }]
              }, {
                error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                type: Tq
              }]
            }, {
              conditions: u62,
              type: XI,
              rules: [{
                conditions: [P62],
                type: XI,
                rules: [{
                  type: XI,
                  rules: [{
                    endpoint: {
                      url: "https://bedrock-runtime-fips.{Region}.{PartitionResult#dnsSuffix}",
                      properties: KB,
                      headers: KB
                    },
                    type: bP
                  }]
                }]
              }, {
                error: "FIPS is enabled but this partition does not support FIPS",
                type: Tq
              }]
            }, {
              conditions: T62,
              type: XI,
              rules: [{
                conditions: [$62],
                type: XI,
                rules: [{
                  type: XI,
                  rules: [{
                    endpoint: {
                      url: "https://bedrock-runtime.{Region}.{PartitionResult#dualStackDnsSuffix}",
                      properties: KB,
                      headers: KB
                    },
                    type: bP
                  }]
                }]
              }, {
                error: "DualStack is enabled but this partition does not support DualStack",
                type: Tq
              }]
            }, {
              type: XI,
              rules: [{
                endpoint: {
                  url: "https://bedrock-runtime.{Region}.{PartitionResult#dnsSuffix}",
                  properties: KB,
                  headers: KB
                },
                type: bP
              }]
            }]
          }]
        }, {
          error: "Invalid Configuration: Missing Region",
          type: Tq
        }]
      }]
    };
  h62.ruleSet = Gj5
})
// @from(Start 3622512, End 3622852)
p62 = Y((x62) => {
  Object.defineProperty(x62, "__esModule", {
    value: !0
  });
  x62.defaultEndpointResolver = void 0;
  var Zj5 = zq(),
    Cj5 = k62(),
    Wj5 = (I, d = {}) => {
      return Zj5.resolveEndpoint(Cj5.ruleSet, {
        endpointParams: I,
        logger: d.logger
      })
    };
  x62.defaultEndpointResolver = Wj5
})
// @from(Start 3622858, End 3623674)
s62 = Y((r62) => {
  Object.defineProperty(r62, "__esModule", {
    value: !0
  });
  r62.getRuntimeConfig = void 0;
  var wj5 = h2(),
    Bj5 = qJ(),
    i62 = fD(),
    n62 = SZ(),
    Aj5 = p62(),
    Vj5 = (I) => ({
      apiVersion: "2023-09-30",
      base64Decoder: I?.base64Decoder ?? i62.fromBase64,
      base64Encoder: I?.base64Encoder ?? i62.toBase64,
      disableHostPrefix: I?.disableHostPrefix ?? !1,
      endpointProvider: I?.endpointProvider ?? Aj5.defaultEndpointResolver,
      extensions: I?.extensions ?? [],
      logger: I?.logger ?? new wj5.NoOpLogger,
      serviceId: I?.serviceId ?? "Bedrock Runtime",
      urlParser: I?.urlParser ?? Bj5.parseUrl,
      utf8Decoder: I?.utf8Decoder ?? n62.fromUtf8,
      utf8Encoder: I?.utf8Encoder ?? n62.toUtf8
    });
  r62.getRuntimeConfig = Vj5
})
// @from(Start 3623680, End 3625750)
d82 = Y((t62) => {
  Object.defineProperty(t62, "__esModule", {
    value: !0
  });
  t62.getRuntimeConfig = void 0;
  var Xj5 = x1(),
    Yj5 = Xj5.__importDefault(xt0()),
    _j5 = E62(),
    Dj5 = S_1(),
    Hj5 = zP(),
    Rr = _B(),
    Fj5 = UV1(),
    gj5 = QP(),
    o62 = bV(),
    hP = mV(),
    e62 = Yq(),
    Jj5 = fP(),
    Kj5 = fq(),
    Nj5 = s62(),
    zj5 = h2(),
    Qj5 = RP(),
    fj5 = h2(),
    qj5 = (I) => {
      fj5.emitWarningIfUnsupportedVersion(process.version);
      let d = Qj5.resolveDefaultsModeConfig(I),
        G = () => d().then(zj5.loadConfigsForDefaultMode),
        Z = Nj5.getRuntimeConfig(I);
      return {
        ...Z,
        ...I,
        runtime: "node",
        defaultsMode: d,
        bodyLengthChecker: I?.bodyLengthChecker ?? Jj5.calculateBodyLength,
        credentialDefaultProvider: I?.credentialDefaultProvider ?? _j5.decorateDefaultCredentialProvider(Dj5.defaultProvider),
        defaultUserAgentProvider: I?.defaultUserAgentProvider ?? Hj5.defaultUserAgent({
          serviceId: Z.serviceId,
          clientVersion: Yj5.default.version
        }),
        eventStreamSerdeProvider: I?.eventStreamSerdeProvider ?? Fj5.eventStreamSerdeProvider,
        maxAttempts: I?.maxAttempts ?? hP.loadConfig(o62.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: I?.region ?? hP.loadConfig(Rr.NODE_REGION_CONFIG_OPTIONS, Rr.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: I?.requestHandler ?? new e62.NodeHttpHandler(G),
        retryMode: I?.retryMode ?? hP.loadConfig({
          ...o62.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await G()).retryMode || Kj5.DEFAULT_RETRY_MODE
        }),
        sha256: I?.sha256 ?? gj5.Hash.bind(null, "sha256"),
        streamCollector: I?.streamCollector ?? e62.streamCollector,
        useDualstackEndpoint: I?.useDualstackEndpoint ?? hP.loadConfig(Rr.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: I?.useFipsEndpoint ?? hP.loadConfig(Rr.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
      }
    };
  t62.getRuntimeConfig = qj5
})
// @from(Start 3625756, End 3626446)
B82 = Y((W82) => {
  Object.defineProperty(W82, "__esModule", {
    value: !0
  });
  W82.resolveRuntimeExtensions = void 0;
  var G82 = an(),
    Z82 = t8(),
    C82 = h2(),
    GD1 = (I) => I,
    Rj5 = (I, d) => {
      let G = {
        ...GD1(G82.getAwsRegionExtensionConfiguration(I)),
        ...GD1(C82.getDefaultExtensionConfiguration(I)),
        ...GD1(Z82.getHttpHandlerExtensionConfiguration(I))
      };
      return d.forEach((Z) => Z.configure(G)), {
        ...I,
        ...G82.resolveAwsRegionExtensionConfiguration(G),
        ...C82.resolveDefaultRuntimeConfig(G),
        ...Z82.resolveHttpHandlerRuntimeConfig(G)
      }
    };
  W82.resolveRuntimeExtensions = Rj5
})
// @from(Start 3626452, End 3628035)
CD1 = Y((ZD1) => {
  Object.defineProperty(ZD1, "__esModule", {
    value: !0
  });
  ZD1.BedrockRuntimeClient = ZD1.__Client = void 0;
  var A82 = ey(),
    Uj5 = ty(),
    vj5 = IP(),
    V82 = OV(),
    X82 = wP(),
    Ej5 = _B(),
    Mj5 = Ao0(),
    Sj5 = BP(),
    Lj5 = c3(),
    Y82 = bV(),
    _82 = h2();
  Object.defineProperty(ZD1, "__Client", {
    enumerable: !0,
    get: function() {
      return _82.Client
    }
  });
  var yj5 = kt0(),
    Pj5 = d82(),
    $j5 = B82();
  class D82 extends _82.Client {
    constructor(...[I]) {
      let d = Pj5.getRuntimeConfig(I || {}),
        G = yj5.resolveClientEndpointParameters(d),
        Z = Ej5.resolveRegionConfig(G),
        C = Lj5.resolveEndpointConfig(Z),
        W = Y82.resolveRetryConfig(C),
        w = A82.resolveHostHeaderConfig(W),
        B = V82.resolveAwsAuthConfig(w),
        A = X82.resolveUserAgentConfig(B),
        V = Mj5.resolveEventStreamSerdeConfig(A),
        X = $j5.resolveRuntimeExtensions(V, I?.extensions || []);
      super(X);
      this.config = X, this.middlewareStack.use(Y82.getRetryPlugin(this.config)), this.middlewareStack.use(Sj5.getContentLengthPlugin(this.config)), this.middlewareStack.use(A82.getHostHeaderPlugin(this.config)), this.middlewareStack.use(Uj5.getLoggerPlugin(this.config)), this.middlewareStack.use(vj5.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(V82.getAwsAuthPlugin(this.config)), this.middlewareStack.use(X82.getUserAgentPlugin(this.config))
    }
    destroy() {
      super.destroy()
    }
  }
  ZD1.BedrockRuntimeClient = D82
})
// @from(Start 3628041, End 3628539)
Ur = Y((wD1) => {
  Object.defineProperty(wD1, "__esModule", {
    value: !0
  });
  wD1.BedrockRuntimeServiceException = wD1.__ServiceException = void 0;
  var F82 = h2();
  Object.defineProperty(wD1, "__ServiceException", {
    enumerable: !0,
    get: function() {
      return F82.ServiceException
    }
  });
  class WD1 extends F82.ServiceException {
    constructor(I) {
      super(I);
      Object.setPrototypeOf(this, WD1.prototype)
    }
  }
  wD1.BedrockRuntimeServiceException = WD1
})
// @from(Start 3628545, End 3635124)
kP = Y((K82) => {
  Object.defineProperty(K82, "__esModule", {
    value: !0
  });
  K82.InvokeModelWithResponseStreamResponseFilterSensitiveLog = K82.ResponseStreamFilterSensitiveLog = K82.PayloadPartFilterSensitiveLog = K82.InvokeModelWithResponseStreamRequestFilterSensitiveLog = K82.InvokeModelResponseFilterSensitiveLog = K82.InvokeModelRequestFilterSensitiveLog = K82.ResponseStream = K82.ModelStreamErrorException = K82.ValidationException = K82.ThrottlingException = K82.ServiceQuotaExceededException = K82.ResourceNotFoundException = K82.ModelTimeoutException = K82.ModelNotReadyException = K82.ModelErrorException = K82.InternalServerException = K82.AccessDeniedException = void 0;
  var jP = h2(),
    NB = Ur();
  class BD1 extends NB.BedrockRuntimeServiceException {
    constructor(I) {
      super({
        name: "AccessDeniedException",
        $fault: "client",
        ...I
      });
      this.name = "AccessDeniedException", this.$fault = "client", Object.setPrototypeOf(this, BD1.prototype)
    }
  }
  K82.AccessDeniedException = BD1;
  class AD1 extends NB.BedrockRuntimeServiceException {
    constructor(I) {
      super({
        name: "InternalServerException",
        $fault: "server",
        ...I
      });
      this.name = "InternalServerException", this.$fault = "server", Object.setPrototypeOf(this, AD1.prototype)
    }
  }
  K82.InternalServerException = AD1;
  class VD1 extends NB.BedrockRuntimeServiceException {
    constructor(I) {
      super({
        name: "ModelErrorException",
        $fault: "client",
        ...I
      });
      this.name = "ModelErrorException", this.$fault = "client", Object.setPrototypeOf(this, VD1.prototype), this.originalStatusCode = I.originalStatusCode, this.resourceName = I.resourceName
    }
  }
  K82.ModelErrorException = VD1;
  class XD1 extends NB.BedrockRuntimeServiceException {
    constructor(I) {
      super({
        name: "ModelNotReadyException",
        $fault: "client",
        ...I
      });
      this.name = "ModelNotReadyException", this.$fault = "client", Object.setPrototypeOf(this, XD1.prototype)
    }
  }
  K82.ModelNotReadyException = XD1;
  class YD1 extends NB.BedrockRuntimeServiceException {
    constructor(I) {
      super({
        name: "ModelTimeoutException",
        $fault: "client",
        ...I
      });
      this.name = "ModelTimeoutException", this.$fault = "client", Object.setPrototypeOf(this, YD1.prototype)
    }
  }
  K82.ModelTimeoutException = YD1;
  class _D1 extends NB.BedrockRuntimeServiceException {
    constructor(I) {
      super({
        name: "ResourceNotFoundException",
        $fault: "client",
        ...I
      });
      this.name = "ResourceNotFoundException", this.$fault = "client", Object.setPrototypeOf(this, _D1.prototype)
    }
  }
  K82.ResourceNotFoundException = _D1;
  class DD1 extends NB.BedrockRuntimeServiceException {
    constructor(I) {
      super({
        name: "ServiceQuotaExceededException",
        $fault: "client",
        ...I
      });
      this.name = "ServiceQuotaExceededException", this.$fault = "client", Object.setPrototypeOf(this, DD1.prototype)
    }
  }
  K82.ServiceQuotaExceededException = DD1;
  class HD1 extends NB.BedrockRuntimeServiceException {
    constructor(I) {
      super({
        name: "ThrottlingException",
        $fault: "client",
        ...I
      });
      this.name = "ThrottlingException", this.$fault = "client", Object.setPrototypeOf(this, HD1.prototype)
    }
  }
  K82.ThrottlingException = HD1;
  class FD1 extends NB.BedrockRuntimeServiceException {
    constructor(I) {
      super({
        name: "ValidationException",
        $fault: "client",
        ...I
      });
      this.name = "ValidationException", this.$fault = "client", Object.setPrototypeOf(this, FD1.prototype)
    }
  }
  K82.ValidationException = FD1;
  class gD1 extends NB.BedrockRuntimeServiceException {
    constructor(I) {
      super({
        name: "ModelStreamErrorException",
        $fault: "client",
        ...I
      });
      this.name = "ModelStreamErrorException", this.$fault = "client", Object.setPrototypeOf(this, gD1.prototype), this.originalStatusCode = I.originalStatusCode, this.originalMessage = I.originalMessage
    }
  }
  K82.ModelStreamErrorException = gD1;
  var uj5;
  (function(I) {
    I.visit = (d, G) => {
      if (d.chunk !== void 0) return G.chunk(d.chunk);
      if (d.internalServerException !== void 0) return G.internalServerException(d.internalServerException);
      if (d.modelStreamErrorException !== void 0) return G.modelStreamErrorException(d.modelStreamErrorException);
      if (d.validationException !== void 0) return G.validationException(d.validationException);
      if (d.throttlingException !== void 0) return G.throttlingException(d.throttlingException);
      if (d.modelTimeoutException !== void 0) return G.modelTimeoutException(d.modelTimeoutException);
      return G._(d.$unknown[0], d.$unknown[1])
    }
  })(uj5 = K82.ResponseStream || (K82.ResponseStream = {}));
  var Tj5 = (I) => ({
    ...I,
    ...I.body && {
      body: jP.SENSITIVE_STRING
    }
  });
  K82.InvokeModelRequestFilterSensitiveLog = Tj5;
  var Oj5 = (I) => ({
    ...I,
    ...I.body && {
      body: jP.SENSITIVE_STRING
    }
  });
  K82.InvokeModelResponseFilterSensitiveLog = Oj5;
  var mj5 = (I) => ({
    ...I,
    ...I.body && {
      body: jP.SENSITIVE_STRING
    }
  });
  K82.InvokeModelWithResponseStreamRequestFilterSensitiveLog = mj5;
  var lj5 = (I) => ({
    ...I,
    ...I.bytes && {
      bytes: jP.SENSITIVE_STRING
    }
  });
  K82.PayloadPartFilterSensitiveLog = lj5;
  var bj5 = (I) => {
    if (I.chunk !== void 0) return {
      chunk: jP.SENSITIVE_STRING
    };
    if (I.internalServerException !== void 0) return {
      internalServerException: I.internalServerException
    };
    if (I.modelStreamErrorException !== void 0) return {
      modelStreamErrorException: I.modelStreamErrorException
    };
    if (I.validationException !== void 0) return {
      validationException: I.validationException
    };
    if (I.throttlingException !== void 0) return {
      throttlingException: I.throttlingException
    };
    if (I.modelTimeoutException !== void 0) return {
      modelTimeoutException: I.modelTimeoutException
    };
    if (I.$unknown !== void 0) return {
      [I.$unknown[0]]: "UNKNOWN"
    }
  };
  K82.ResponseStreamFilterSensitiveLog = bj5;
  var hj5 = (I) => ({
    ...I,
    ...I.body && {
      body: "STREAMING_CONTENT"
    }
  });
  K82.InvokeModelWithResponseStreamResponseFilterSensitiveLog = hj5
})
// @from(Start 3635130, End 3646816)
QD1 = Y((y82) => {
  Object.defineProperty(y82, "__esModule", {
    value: !0
  });
  y82.de_InvokeModelWithResponseStreamCommand = y82.de_InvokeModelCommand = y82.se_InvokeModelWithResponseStreamCommand = y82.se_InvokeModelCommand = void 0;
  var z82 = t8(),
    j2 = h2(),
    Gk5 = Ur(),
    zB = kP(),
    Zk5 = async (I, d) => {
      let {
        hostname: G,
        protocol: Z = "https",
        port: C,
        path: W
      } = await d.endpoint(), w = j2.map({}, M82, {
        "content-type": I.contentType || "application/octet-stream",
        accept: I.accept
      }), B = `${W?.endsWith("/")?W.slice(0,-1):W||""}/model/{modelId}/invoke`;
      B = j2.resolvedPath(B, I, "modelId", () => I.modelId, "{modelId}", !1);
      let A;
      if (I.body !== void 0) A = I.body;
      return new z82.HttpRequest({
        protocol: Z,
        hostname: G,
        port: C,
        method: "POST",
        headers: w,
        path: B,
        body: A
      })
    };
  y82.se_InvokeModelCommand = Zk5;
  var Ck5 = async (I, d) => {
    let {
      hostname: G,
      protocol: Z = "https",
      port: C,
      path: W
    } = await d.endpoint(), w = j2.map({}, M82, {
      "content-type": I.contentType || "application/octet-stream",
      "x-amzn-bedrock-accept": I.accept
    }), B = `${W?.endsWith("/")?W.slice(0,-1):W||""}/model/{modelId}/invoke-with-response-stream`;
    B = j2.resolvedPath(B, I, "modelId", () => I.modelId, "{modelId}", !1);
    let A;
    if (I.body !== void 0) A = I.body;
    return new z82.HttpRequest({
      protocol: Z,
      hostname: G,
      port: C,
      method: "POST",
      headers: w,
      path: B,
      body: A
    })
  };
  y82.se_InvokeModelWithResponseStreamCommand = Ck5;
  var Wk5 = async (I, d) => {
    if (I.statusCode !== 200 && I.statusCode >= 300) return wk5(I, d);
    let G = j2.map({
        $metadata: uZ(I),
        contentType: [, I.headers["content-type"]]
      }),
      Z = await j2.collectBody(I.body, d);
    return G.body = Z, G
  };
  y82.de_InvokeModelCommand = Wk5;
  var wk5 = async (I, d) => {
    let G = {
        ...I,
        body: await S82(I.body, d)
      },
      Z = L82(I, G.body);
    switch (Z) {
      case "AccessDeniedException":
      case "com.amazonaws.bedrockruntime#AccessDeniedException":
        throw await f82(G, d);
      case "InternalServerException":
      case "com.amazonaws.bedrockruntime#InternalServerException":
        throw await JD1(G, d);
      case "ModelErrorException":
      case "com.amazonaws.bedrockruntime#ModelErrorException":
        throw await q82(G, d);
      case "ModelNotReadyException":
      case "com.amazonaws.bedrockruntime#ModelNotReadyException":
        throw await R82(G, d);
      case "ModelTimeoutException":
      case "com.amazonaws.bedrockruntime#ModelTimeoutException":
        throw await KD1(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.bedrockruntime#ResourceNotFoundException":
        throw await v82(G, d);
      case "ServiceQuotaExceededException":
      case "com.amazonaws.bedrockruntime#ServiceQuotaExceededException":
        throw await E82(G, d);
      case "ThrottlingException":
      case "com.amazonaws.bedrockruntime#ThrottlingException":
        throw await ND1(G, d);
      case "ValidationException":
      case "com.amazonaws.bedrockruntime#ValidationException":
        throw await zD1(G, d);
      default:
        let C = G.body;
        return Q82({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, Bk5 = async (I, d) => {
    if (I.statusCode !== 200 && I.statusCode >= 300) return Ak5(I, d);
    let G = j2.map({
        $metadata: uZ(I),
        contentType: [, I.headers["x-amzn-bedrock-content-type"]]
      }),
      Z = I.body;
    return G.body = Vk5(Z, d), G
  };
  y82.de_InvokeModelWithResponseStreamCommand = Bk5;
  var Ak5 = async (I, d) => {
    let G = {
        ...I,
        body: await S82(I.body, d)
      },
      Z = L82(I, G.body);
    switch (Z) {
      case "AccessDeniedException":
      case "com.amazonaws.bedrockruntime#AccessDeniedException":
        throw await f82(G, d);
      case "InternalServerException":
      case "com.amazonaws.bedrockruntime#InternalServerException":
        throw await JD1(G, d);
      case "ModelErrorException":
      case "com.amazonaws.bedrockruntime#ModelErrorException":
        throw await q82(G, d);
      case "ModelNotReadyException":
      case "com.amazonaws.bedrockruntime#ModelNotReadyException":
        throw await R82(G, d);
      case "ModelStreamErrorException":
      case "com.amazonaws.bedrockruntime#ModelStreamErrorException":
        throw await U82(G, d);
      case "ModelTimeoutException":
      case "com.amazonaws.bedrockruntime#ModelTimeoutException":
        throw await KD1(G, d);
      case "ResourceNotFoundException":
      case "com.amazonaws.bedrockruntime#ResourceNotFoundException":
        throw await v82(G, d);
      case "ServiceQuotaExceededException":
      case "com.amazonaws.bedrockruntime#ServiceQuotaExceededException":
        throw await E82(G, d);
      case "ThrottlingException":
      case "com.amazonaws.bedrockruntime#ThrottlingException":
        throw await ND1(G, d);
      case "ValidationException":
      case "com.amazonaws.bedrockruntime#ValidationException":
        throw await zD1(G, d);
      default:
        let C = G.body;
        return Q82({
          output: I,
          parsedBody: C,
          errorCode: Z
        })
    }
  }, Q82 = j2.withBaseException(Gk5.BedrockRuntimeServiceException), f82 = async (I, d) => {
    let G = j2.map({}),
      Z = I.body,
      C = j2.take(Z, {
        message: j2.expectString
      });
    Object.assign(G, C);
    let W = new zB.AccessDeniedException({
      $metadata: uZ(I),
      ...G
    });
    return j2.decorateServiceException(W, I.body)
  }, JD1 = async (I, d) => {
    let G = j2.map({}),
      Z = I.body,
      C = j2.take(Z, {
        message: j2.expectString
      });
    Object.assign(G, C);
    let W = new zB.InternalServerException({
      $metadata: uZ(I),
      ...G
    });
    return j2.decorateServiceException(W, I.body)
  }, q82 = async (I, d) => {
    let G = j2.map({}),
      Z = I.body,
      C = j2.take(Z, {
        message: j2.expectString,
        originalStatusCode: j2.expectInt32,
        resourceName: j2.expectString
      });
    Object.assign(G, C);
    let W = new zB.ModelErrorException({
      $metadata: uZ(I),
      ...G
    });
    return j2.decorateServiceException(W, I.body)
  }, R82 = async (I, d) => {
    let G = j2.map({}),
      Z = I.body,
      C = j2.take(Z, {
        message: j2.expectString
      });
    Object.assign(G, C);
    let W = new zB.ModelNotReadyException({
      $metadata: uZ(I),
      ...G
    });
    return j2.decorateServiceException(W, I.body)
  }, U82 = async (I, d) => {
    let G = j2.map({}),
      Z = I.body,
      C = j2.take(Z, {
        message: j2.expectString,
        originalMessage: j2.expectString,
        originalStatusCode: j2.expectInt32
      });
    Object.assign(G, C);
    let W = new zB.ModelStreamErrorException({
      $metadata: uZ(I),
      ...G
    });
    return j2.decorateServiceException(W, I.body)
  }, KD1 = async (I, d) => {
    let G = j2.map({}),
      Z = I.body,
      C = j2.take(Z, {
        message: j2.expectString
      });
    Object.assign(G, C);
    let W = new zB.ModelTimeoutException({
      $metadata: uZ(I),
      ...G
    });
    return j2.decorateServiceException(W, I.body)
  }, v82 = async (I, d) => {
    let G = j2.map({}),
      Z = I.body,
      C = j2.take(Z, {
        message: j2.expectString
      });
    Object.assign(G, C);
    let W = new zB.ResourceNotFoundException({
      $metadata: uZ(I),
      ...G
    });
    return j2.decorateServiceException(W, I.body)
  }, E82 = async (I, d) => {
    let G = j2.map({}),
      Z = I.body,
      C = j2.take(Z, {
        message: j2.expectString
      });
    Object.assign(G, C);
    let W = new zB.ServiceQuotaExceededException({
      $metadata: uZ(I),
      ...G
    });
    return j2.decorateServiceException(W, I.body)
  }, ND1 = async (I, d) => {
    let G = j2.map({}),
      Z = I.body,
      C = j2.take(Z, {
        message: j2.expectString
      });
    Object.assign(G, C);
    let W = new zB.ThrottlingException({
      $metadata: uZ(I),
      ...G
    });
    return j2.decorateServiceException(W, I.body)
  }, zD1 = async (I, d) => {
    let G = j2.map({}),
      Z = I.body,
      C = j2.take(Z, {
        message: j2.expectString
      });
    Object.assign(G, C);
    let W = new zB.ValidationException({
      $metadata: uZ(I),
      ...G
    });
    return j2.decorateServiceException(W, I.body)
  }, Vk5 = (I, d) => {
    return d.eventStreamMarshaller.deserialize(I, async (G) => {
      if (G.chunk != null) return {
        chunk: await Dk5(G.chunk, d)
      };
      if (G.internalServerException != null) return {
        internalServerException: await Xk5(G.internalServerException, d)
      };
      if (G.modelStreamErrorException != null) return {
        modelStreamErrorException: await Yk5(G.modelStreamErrorException, d)
      };
      if (G.validationException != null) return {
        validationException: await Fk5(G.validationException, d)
      };
      if (G.throttlingException != null) return {
        throttlingException: await Hk5(G.throttlingException, d)
      };
      if (G.modelTimeoutException != null) return {
        modelTimeoutException: await _k5(G.modelTimeoutException, d)
      };
      return {
        $unknown: I
      }
    })
  }, Xk5 = async (I, d) => {
    let G = {
      ...I,
      body: await MJ(I.body, d)
    };
    return JD1(G, d)
  }, Yk5 = async (I, d) => {
    let G = {
      ...I,
      body: await MJ(I.body, d)
    };
    return U82(G, d)
  }, _k5 = async (I, d) => {
    let G = {
      ...I,
      body: await MJ(I.body, d)
    };
    return KD1(G, d)
  }, Dk5 = async (I, d) => {
    let G = {},
      Z = await MJ(I.body, d);
    return Object.assign(G, gk5(Z, d)), G
  }, Hk5 = async (I, d) => {
    let G = {
      ...I,
      body: await MJ(I.body, d)
    };
    return ND1(G, d)
  }, Fk5 = async (I, d) => {
    let G = {
      ...I,
      body: await MJ(I.body, d)
    };
    return zD1(G, d)
  }, gk5 = (I, d) => {
    return j2.take(I, {
      bytes: d.base64Decoder
    })
  }, uZ = (I) => ({
    httpStatusCode: I.statusCode,
    requestId: I.headers["x-amzn-requestid"] ?? I.headers["x-amzn-request-id"] ?? I.headers["x-amz-request-id"],
    extendedRequestId: I.headers["x-amz-id-2"],
    cfId: I.headers["x-amz-cf-id"]
  }), Jk5 = (I, d) => j2.collectBody(I, d).then((G) => d.utf8Encoder(G)), M82 = (I) => I !== void 0 && I !== null && I !== "" && (!Object.getOwnPropertyNames(I).includes("length") || I.length != 0) && (!Object.getOwnPropertyNames(I).includes("size") || I.size != 0), MJ = (I, d) => Jk5(I, d).then((G) => {
    if (G.length) return JSON.parse(G);
    return {}
  }), S82 = async (I, d) => {
    let G = await MJ(I, d);
    return G.message = G.message ?? G.Message, G
  }, L82 = (I, d) => {
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
// @from(Start 3646822, End 3648779)
RD1 = Y((qD1) => {
  Object.defineProperty(qD1, "__esModule", {
    value: !0
  });
  qD1.InvokeModelCommand = qD1.$Command = void 0;
  var Qk5 = c3(),
    fk5 = n6(),
    T82 = h2();
  Object.defineProperty(qD1, "$Command", {
    enumerable: !0,
    get: function() {
      return T82.Command
    }
  });
  var qk5 = k3(),
    $82 = kP(),
    u82 = QD1();
  class fD1 extends T82.Command {
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
      this.middlewareStack.use(fk5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(Qk5.getEndpointPlugin(d, fD1.getEndpointParameterInstructions()));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "BedrockRuntimeClient",
          commandName: "InvokeModelCommand",
          inputFilterSensitiveLog: $82.InvokeModelRequestFilterSensitiveLog,
          outputFilterSensitiveLog: $82.InvokeModelResponseFilterSensitiveLog,
          [qk5.SMITHY_CONTEXT_KEY]: {
            service: "AmazonBedrockFrontendService",
            operation: "InvokeModel"
          }
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return u82.se_InvokeModelCommand(I, d)
    }
    deserialize(I, d) {
      return u82.de_InvokeModelCommand(I, d)
    }
  }
  qD1.InvokeModelCommand = fD1
})
// @from(Start 3648785, End 3650886)
ED1 = Y((vD1) => {
  Object.defineProperty(vD1, "__esModule", {
    value: !0
  });
  vD1.InvokeModelWithResponseStreamCommand = vD1.$Command = void 0;
  var Rk5 = c3(),
    Uk5 = n6(),
    b82 = h2();
  Object.defineProperty(vD1, "$Command", {
    enumerable: !0,
    get: function() {
      return b82.Command
    }
  });
  var vk5 = k3(),
    m82 = kP(),
    l82 = QD1();
  class UD1 extends b82.Command {
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
      this.middlewareStack.use(Uk5.getSerdePlugin(d, this.serialize, this.deserialize)), this.middlewareStack.use(Rk5.getEndpointPlugin(d, UD1.getEndpointParameterInstructions()));
      let Z = I.concat(this.middlewareStack),
        {
          logger: C
        } = d,
        B = {
          logger: C,
          clientName: "BedrockRuntimeClient",
          commandName: "InvokeModelWithResponseStreamCommand",
          inputFilterSensitiveLog: m82.InvokeModelWithResponseStreamRequestFilterSensitiveLog,
          outputFilterSensitiveLog: m82.InvokeModelWithResponseStreamResponseFilterSensitiveLog,
          [vk5.SMITHY_CONTEXT_KEY]: {
            service: "AmazonBedrockFrontendService",
            operation: "InvokeModelWithResponseStream"
          }
        },
        {
          requestHandler: A
        } = d;
      return Z.resolve((V) => A.handle(V.request, G || {}), B)
    }
    serialize(I, d) {
      return l82.se_InvokeModelWithResponseStreamCommand(I, d)
    }
    deserialize(I, d) {
      return l82.de_InvokeModelWithResponseStreamCommand(I, d)
    }
  }
  vD1.InvokeModelWithResponseStreamCommand = UD1
})
// @from(Start 3650892, End 3651347)
x82 = Y((j82) => {
  Object.defineProperty(j82, "__esModule", {
    value: !0
  });
  j82.BedrockRuntime = void 0;
  var Ek5 = h2(),
    Mk5 = CD1(),
    Sk5 = RD1(),
    Lk5 = ED1(),
    yk5 = {
      InvokeModelCommand: Sk5.InvokeModelCommand,
      InvokeModelWithResponseStreamCommand: Lk5.InvokeModelWithResponseStreamCommand
    };
  class MD1 extends Mk5.BedrockRuntimeClient {}
  j82.BedrockRuntime = MD1;
  Ek5.createAggregatedClient(yk5, MD1)
})
// @from(Start 3651353, End 3651516)
p82 = Y((vr) => {
  Object.defineProperty(vr, "__esModule", {
    value: !0
  });
  var c82 = x1();
  c82.__exportStar(RD1(), vr);
  c82.__exportStar(ED1(), vr)
})
// @from(Start 3651522, End 3651656)
i82 = Y((SD1) => {
  Object.defineProperty(SD1, "__esModule", {
    value: !0
  });
  var Pk5 = x1();
  Pk5.__exportStar(kP(), SD1)
})
// @from(Start 3651662, End 3652112)
n82 = Y((SJ) => {
  Object.defineProperty(SJ, "__esModule", {
    value: !0
  });
  SJ.BedrockRuntimeServiceException = void 0;
  var Er = x1();
  Er.__exportStar(CD1(), SJ);
  Er.__exportStar(x82(), SJ);
  Er.__exportStar(p82(), SJ);
  Er.__exportStar(i82(), SJ);
  var $k5 = Ur();
  Object.defineProperty(SJ, "BedrockRuntimeServiceException", {
    enumerable: !0,
    get: function() {
      return $k5.BedrockRuntimeServiceException
    }
  })
})
// @from(Start 3652118, End 3654071)
yD1 = Y((_A3, W72) => {
  var Pr = Object.prototype.hasOwnProperty,
    C72 = Object.prototype.toString,
    e82 = Object.defineProperty,
    t82 = Object.getOwnPropertyDescriptor,
    I72 = function I(d) {
      if (typeof Array.isArray === "function") return Array.isArray(d);
      return C72.call(d) === "[object Array]"
    },
    d72 = function I(d) {
      if (!d || C72.call(d) !== "[object Object]") return !1;
      var G = Pr.call(d, "constructor"),
        Z = d.constructor && d.constructor.prototype && Pr.call(d.constructor.prototype, "isPrototypeOf");
      if (d.constructor && !G && !Z) return !1;
      var C;
      for (C in d);
      return typeof C === "undefined" || Pr.call(d, C)
    },
    G72 = function I(d, G) {
      if (e82 && G.name === "__proto__") e82(d, G.name, {
        enumerable: !0,
        configurable: !0,
        value: G.newValue,
        writable: !0
      });
      else d[G.name] = G.newValue
    },
    Z72 = function I(d, G) {
      if (G === "__proto__") {
        if (!Pr.call(d, G)) return;
        else if (t82) return t82(d, G).value
      }
      return d[G]
    };
  W72.exports = function I() {
    var d, G, Z, C, W, w, B = arguments[0],
      A = 1,
      V = arguments.length,
      X = !1;
    if (typeof B === "boolean") X = B, B = arguments[1] || {}, A = 2;
    if (B == null || typeof B !== "object" && typeof B !== "function") B = {};
    for (; A < V; ++A)
      if (d = arguments[A], d != null) {
        for (G in d)
          if (Z = Z72(B, G), C = Z72(d, G), B !== C) {
            if (X && C && (d72(C) || (W = I72(C)))) {
              if (W) W = !1, w = Z && I72(Z) ? Z : [];
              else w = Z && d72(Z) ? Z : {};
              G72(B, {
                name: G,
                newValue: I(X, w, C)
              })
            } else if (typeof C !== "undefined") G72(B, {
              name: G,
              newValue: C
            })
          }
      } return B
  }
})
// @from(Start 3654077, End 3654589)
B72 = Y((DA3, w72) => {
  var QB = (I) => I !== null && typeof I === "object" && typeof I.pipe === "function";
  QB.writable = (I) => QB(I) && I.writable !== !1 && typeof I._write === "function" && typeof I._writableState === "object";
  QB.readable = (I) => QB(I) && I.readable !== !1 && typeof I._read === "function" && typeof I._readableState === "object";
  QB.duplex = (I) => QB.writable(I) && QB.readable(I);
  QB.transform = (I) => QB.duplex(I) && typeof I._transform === "function";
  w72.exports = QB
})
// @from(Start 3654595, End 3657421)
A72 = Y((HA3, ok5) => {
  ok5.exports = {
    name: "gaxios",
    version: "6.7.1",
    description: "A simple common HTTP client specifically for Google APIs and services.",
    main: "build/src/index.js",
    types: "build/src/index.d.ts",
    files: ["build/src"],
    scripts: {
      lint: "gts check",
      test: "c8 mocha build/test",
      "presystem-test": "npm run compile",
      "system-test": "mocha build/system-test --timeout 80000",
      compile: "tsc -p .",
      fix: "gts fix",
      prepare: "npm run compile",
      pretest: "npm run compile",
      webpack: "webpack",
      "prebrowser-test": "npm run compile",
      "browser-test": "node build/browser-test/browser-test-runner.js",
      docs: "compodoc src/",
      "docs-test": "linkinator docs",
      "predocs-test": "npm run docs",
      "samples-test": "cd samples/ && npm link ../ && npm test && cd ../",
      prelint: "cd samples; npm link ../; npm install",
      clean: "gts clean",
      precompile: "gts clean"
    },
    repository: "googleapis/gaxios",
    keywords: ["google"],
    engines: {
      node: ">=14"
    },
    author: "Google, LLC",
    license: "Apache-2.0",
    devDependencies: {
      "@babel/plugin-proposal-private-methods": "^7.18.6",
      "@compodoc/compodoc": "1.1.19",
      "@types/cors": "^2.8.6",
      "@types/express": "^4.16.1",
      "@types/extend": "^3.0.1",
      "@types/mocha": "^9.0.0",
      "@types/multiparty": "0.0.36",
      "@types/mv": "^2.1.0",
      "@types/ncp": "^2.0.1",
      "@types/node": "^20.0.0",
      "@types/node-fetch": "^2.5.7",
      "@types/sinon": "^17.0.0",
      "@types/tmp": "0.2.6",
      "@types/uuid": "^10.0.0",
      "abort-controller": "^3.0.0",
      assert: "^2.0.0",
      browserify: "^17.0.0",
      c8: "^8.0.0",
      cheerio: "1.0.0-rc.10",
      cors: "^2.8.5",
      execa: "^5.0.0",
      express: "^4.16.4",
      "form-data": "^4.0.0",
      gts: "^5.0.0",
      "is-docker": "^2.0.0",
      karma: "^6.0.0",
      "karma-chrome-launcher": "^3.0.0",
      "karma-coverage": "^2.0.0",
      "karma-firefox-launcher": "^2.0.0",
      "karma-mocha": "^2.0.0",
      "karma-remap-coverage": "^0.1.5",
      "karma-sourcemap-loader": "^0.4.0",
      "karma-webpack": "5.0.0",
      linkinator: "^3.0.0",
      mocha: "^8.0.0",
      multiparty: "^4.2.1",
      mv: "^2.1.1",
      ncp: "^2.0.0",
      nock: "^13.0.0",
      "null-loader": "^4.0.0",
      puppeteer: "^19.0.0",
      sinon: "^18.0.0",
      "stream-browserify": "^3.0.0",
      tmp: "0.2.3",
      "ts-loader": "^8.0.0",
      typescript: "^5.1.6",
      webpack: "^5.35.0",
      "webpack-cli": "^4.0.0"
    },
    dependencies: {
      extend: "^3.0.2",
      "https-proxy-agent": "^7.0.1",
      "is-stream": "^2.0.0",
      "node-fetch": "^2.6.9",
      uuid: "^9.0.1"
    }
  }
})
// @from(Start 3657427, End 3657551)
Y72 = Y((V72) => {
  Object.defineProperty(V72, "__esModule", {
    value: !0
  });
  V72.pkg = void 0;
  V72.pkg = A72()
})
// @from(Start 3657557, End 3661269)
uD1 = Y((TZ) => {
  var ek5 = TZ && TZ.__importDefault || function(I) {
      return I && I.__esModule ? I : {
        default: I
      }
    },
    _72;
  Object.defineProperty(TZ, "__esModule", {
    value: !0
  });
  TZ.GaxiosError = TZ.GAXIOS_ERROR_SYMBOL = void 0;
  TZ.defaultErrorRedactor = H72;
  var tk5 = B1("url"),
    PD1 = Y72(),
    D72 = ek5(yD1());
  TZ.GAXIOS_ERROR_SYMBOL = Symbol.for(`${PD1.pkg.name}-gaxios-error`);
  class $D1 extends Error {
    static[(_72 = TZ.GAXIOS_ERROR_SYMBOL, Symbol.hasInstance)](I) {
      if (I && typeof I === "object" && TZ.GAXIOS_ERROR_SYMBOL in I && I[TZ.GAXIOS_ERROR_SYMBOL] === PD1.pkg.version) return !0;
      return Function.prototype[Symbol.hasInstance].call($D1, I)
    }
    constructor(I, d, G, Z) {
      var C;
      super(I);
      if (this.config = d, this.response = G, this.error = Z, this[_72] = PD1.pkg.version, this.config = D72.default(!0, {}, d), this.response) this.response.config = D72.default(!0, {}, this.response.config);
      if (this.response) {
        try {
          this.response.data = Ix5(this.config.responseType, (C = this.response) === null || C === void 0 ? void 0 : C.data)
        } catch (W) {}
        this.status = this.response.status
      }
      if (Z && "code" in Z && Z.code) this.code = Z.code;
      if (d.errorRedactor) d.errorRedactor({
        config: this.config,
        response: this.response
      })
    }
  }
  TZ.GaxiosError = $D1;

  function Ix5(I, d) {
    switch (I) {
      case "stream":
        return d;
      case "json":
        return JSON.parse(JSON.stringify(d));
      case "arraybuffer":
        return JSON.parse(Buffer.from(d).toString("utf8"));
      case "blob":
        return JSON.parse(d.text());
      default:
        return d
    }
  }

  function H72(I) {
    function G(W) {
      if (!W) return;
      for (let w of Object.keys(W)) {
        if (/^authentication$/i.test(w)) W[w] = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
        if (/^authorization$/i.test(w)) W[w] = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
        if (/secret/i.test(w)) W[w] = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>."
      }
    }

    function Z(W, w) {
      if (typeof W === "object" && W !== null && typeof W[w] === "string") {
        let B = W[w];
        if (/grant_type=/i.test(B) || /assertion=/i.test(B) || /secret/i.test(B)) W[w] = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>."
      }
    }

    function C(W) {
      if (typeof W === "object" && W !== null) {
        if ("grant_type" in W) W.grant_type = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
        if ("assertion" in W) W.assertion = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
        if ("client_secret" in W) W.client_secret = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>."
      }
    }
    if (I.config) {
      G(I.config.headers), Z(I.config, "data"), C(I.config.data), Z(I.config, "body"), C(I.config.body);
      try {
        let W = new tk5.URL("", I.config.url);
        if (W.searchParams.has("token")) W.searchParams.set("token", "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.");
        if (W.searchParams.has("client_secret")) W.searchParams.set("client_secret", "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.");
        I.config.url = W.toString()
      } catch (W) {}
    }
    if (I.response) H72({
      config: I.response.config
    }), G(I.response.headers), Z(I.response, "data"), C(I.response.data);
    return I
  }
})
// @from(Start 3661275, End 3663961)
J72 = Y((g72) => {
  Object.defineProperty(g72, "__esModule", {
    value: !0
  });
  g72.getRetryConfig = dx5;
  async function dx5(I) {
    let d = F72(I);
    if (!I || !I.config || !d && !I.config.retry) return {
      shouldRetry: !1
    };
    d = d || {}, d.currentRetryAttempt = d.currentRetryAttempt || 0, d.retry = d.retry === void 0 || d.retry === null ? 3 : d.retry, d.httpMethodsToRetry = d.httpMethodsToRetry || ["GET", "HEAD", "PUT", "OPTIONS", "DELETE"], d.noResponseRetries = d.noResponseRetries === void 0 || d.noResponseRetries === null ? 2 : d.noResponseRetries, d.retryDelayMultiplier = d.retryDelayMultiplier ? d.retryDelayMultiplier : 2, d.timeOfFirstRequest = d.timeOfFirstRequest ? d.timeOfFirstRequest : Date.now(), d.totalTimeout = d.totalTimeout ? d.totalTimeout : Number.MAX_SAFE_INTEGER, d.maxRetryDelay = d.maxRetryDelay ? d.maxRetryDelay : Number.MAX_SAFE_INTEGER;
    let G = [
      [100, 199],
      [408, 408],
      [429, 429],
      [500, 599]
    ];
    if (d.statusCodesToRetry = d.statusCodesToRetry || G, I.config.retryConfig = d, !await (d.shouldRetry || Gx5)(I)) return {
      shouldRetry: !1,
      config: I.config
    };
    let C = Zx5(d);
    I.config.retryConfig.currentRetryAttempt += 1;
    let W = d.retryBackoff ? d.retryBackoff(I, C) : new Promise((w) => {
      setTimeout(w, C)
    });
    if (d.onRetryAttempt) d.onRetryAttempt(I);
    return await W, {
      shouldRetry: !0,
      config: I.config
    }
  }

  function Gx5(I) {
    var d;
    let G = F72(I);
    if (I.name === "AbortError" || ((d = I.error) === null || d === void 0 ? void 0 : d.name) === "AbortError") return !1;
    if (!G || G.retry === 0) return !1;
    if (!I.response && (G.currentRetryAttempt || 0) >= G.noResponseRetries) return !1;
    if (!I.config.method || G.httpMethodsToRetry.indexOf(I.config.method.toUpperCase()) < 0) return !1;
    if (I.response && I.response.status) {
      let Z = !1;
      for (let [C, W] of G.statusCodesToRetry) {
        let w = I.response.status;
        if (w >= C && w <= W) {
          Z = !0;
          break
        }
      }
      if (!Z) return !1
    }
    if (G.currentRetryAttempt = G.currentRetryAttempt || 0, G.currentRetryAttempt >= G.retry) return !1;
    return !0
  }

  function F72(I) {
    if (I && I.config && I.config.retryConfig) return I.config.retryConfig;
    return
  }

  function Zx5(I) {
    var d;
    let Z = (I.currentRetryAttempt ? 0 : (d = I.retryDelay) !== null && d !== void 0 ? d : 100) + (Math.pow(I.retryDelayMultiplier, I.currentRetryAttempt) - 1) / 2 * 1000,
      C = I.totalTimeout - (Date.now() - I.timeOfFirstRequest);
    return Math.min(Z, C, I.maxRetryDelay)
  }
})
// @from(Start 3663967, End 3664369)
TD1 = Y((K72) => {
  Object.defineProperty(K72, "__esModule", {
    value: !0
  });
  K72.default = Bx5;
  var Wx5 = wx5(B1("crypto"));

  function wx5(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }
  var ur = new Uint8Array(256),
    $r = ur.length;

  function Bx5() {
    if ($r > ur.length - 16) Wx5.default.randomFillSync(ur), $r = 0;
    return ur.slice($r, $r += 16)
  }
})
// @from(Start 3664375, End 3664636)
Q72 = Y((N72) => {
  Object.defineProperty(N72, "__esModule", {
    value: !0
  });
  N72.default = void 0;
  var Vx5 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  N72.default = Vx5
})
// @from(Start 3664642, End 3664978)
cP = Y((f72) => {
  Object.defineProperty(f72, "__esModule", {
    value: !0
  });
  f72.default = void 0;
  var Xx5 = Yx5(Q72());

  function Yx5(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }

  function _x5(I) {
    return typeof I === "string" && Xx5.default.test(I)
  }
  var Dx5 = _x5;
  f72.default = Dx5
})
// @from(Start 3664984, End 3665808)
pP = Y((U72) => {
  Object.defineProperty(U72, "__esModule", {
    value: !0
  });
  U72.default = void 0;
  U72.unsafeStringify = R72;
  var Hx5 = Fx5(cP());

  function Fx5(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }
  var Z7 = [];
  for (let I = 0; I < 256; ++I) Z7.push((I + 256).toString(16).slice(1));

  function R72(I, d = 0) {
    return Z7[I[d + 0]] + Z7[I[d + 1]] + Z7[I[d + 2]] + Z7[I[d + 3]] + "-" + Z7[I[d + 4]] + Z7[I[d + 5]] + "-" + Z7[I[d + 6]] + Z7[I[d + 7]] + "-" + Z7[I[d + 8]] + Z7[I[d + 9]] + "-" + Z7[I[d + 10]] + Z7[I[d + 11]] + Z7[I[d + 12]] + Z7[I[d + 13]] + Z7[I[d + 14]] + Z7[I[d + 15]]
  }

  function gx5(I, d = 0) {
    let G = R72(I, d);
    if (!Hx5.default(G)) throw TypeError("Stringified UUID is invalid");
    return G
  }
  var Jx5 = gx5;
  U72.default = Jx5
})
// @from(Start 3665814, End 3667351)
L72 = Y((M72) => {
  Object.defineProperty(M72, "__esModule", {
    value: !0
  });
  M72.default = void 0;
  var Nx5 = Qx5(TD1()),
    zx5 = pP();

  function Qx5(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }
  var E72, OD1, mD1 = 0,
    lD1 = 0;

  function fx5(I, d, G) {
    let Z = d && G || 0,
      C = d || new Array(16);
    I = I || {};
    let W = I.node || E72,
      w = I.clockseq !== void 0 ? I.clockseq : OD1;
    if (W == null || w == null) {
      let F = I.random || (I.rng || Nx5.default)();
      if (W == null) W = E72 = [F[0] | 1, F[1], F[2], F[3], F[4], F[5]];
      if (w == null) w = OD1 = (F[6] << 8 | F[7]) & 16383
    }
    let B = I.msecs !== void 0 ? I.msecs : Date.now(),
      A = I.nsecs !== void 0 ? I.nsecs : lD1 + 1,
      V = B - mD1 + (A - lD1) / 1e4;
    if (V < 0 && I.clockseq === void 0) w = w + 1 & 16383;
    if ((V < 0 || B > mD1) && I.nsecs === void 0) A = 0;
    if (A >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    mD1 = B, lD1 = A, OD1 = w, B += 12219292800000;
    let X = ((B & 268435455) * 1e4 + A) % 4294967296;
    C[Z++] = X >>> 24 & 255, C[Z++] = X >>> 16 & 255, C[Z++] = X >>> 8 & 255, C[Z++] = X & 255;
    let _ = B / 4294967296 * 1e4 & 268435455;
    C[Z++] = _ >>> 8 & 255, C[Z++] = _ & 255, C[Z++] = _ >>> 24 & 15 | 16, C[Z++] = _ >>> 16 & 255, C[Z++] = w >>> 8 | 128, C[Z++] = w & 255;
    for (let F = 0; F < 6; ++F) C[Z + F] = W[F];
    return d || zx5.unsafeStringify(C)
  }
  var qx5 = fx5;
  M72.default = qx5
})
// @from(Start 3667357, End 3668235)
bD1 = Y((y72) => {
  Object.defineProperty(y72, "__esModule", {
    value: !0
  });
  y72.default = void 0;
  var Rx5 = Ux5(cP());

  function Ux5(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }

  function vx5(I) {
    if (!Rx5.default(I)) throw TypeError("Invalid UUID");
    let d, G = new Uint8Array(16);
    return G[0] = (d = parseInt(I.slice(0, 8), 16)) >>> 24, G[1] = d >>> 16 & 255, G[2] = d >>> 8 & 255, G[3] = d & 255, G[4] = (d = parseInt(I.slice(9, 13), 16)) >>> 8, G[5] = d & 255, G[6] = (d = parseInt(I.slice(14, 18), 16)) >>> 8, G[7] = d & 255, G[8] = (d = parseInt(I.slice(19, 23), 16)) >>> 8, G[9] = d & 255, G[10] = (d = parseInt(I.slice(24, 36), 16)) / 1099511627776 & 255, G[11] = d / 4294967296 & 255, G[12] = d >>> 24 & 255, G[13] = d >>> 16 & 255, G[14] = d >>> 8 & 255, G[15] = d & 255, G
  }
  var Ex5 = vx5;
  y72.default = Ex5
})
// @from(Start 3668241, End 3669501)
hD1 = Y((T72) => {
  Object.defineProperty(T72, "__esModule", {
    value: !0
  });
  T72.URL = T72.DNS = void 0;
  T72.default = Px5;
  var Mx5 = pP(),
    Sx5 = Lx5(bD1());

  function Lx5(I) {
    return I && I.__esModule ? I : {
      default: I
    }
  }

  function yx5(I) {
    I = unescape(encodeURIComponent(I));
    let d = [];
    for (let G = 0; G < I.length; ++G) d.push(I.charCodeAt(G));
    return d
  }
  var $72 = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  T72.DNS = $72;
  var u72 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  T72.URL = u72;

  function Px5(I, d, G) {
    function Z(C, W, w, B) {
      var A;
      if (typeof C === "string") C = yx5(C);
      if (typeof W === "string") W = Sx5.default(W);
      if (((A = W) === null || A === void 0 ? void 0 : A.length) !== 16) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let V = new Uint8Array(16 + C.length);
      if (V.set(W), V.set(C, W.length), V = G(V), V[6] = V[6] & 15 | d, V[8] = V[8] & 63 | 128, w) {
        B = B || 0;
        for (let X = 0; X < 16; ++X) w[B + X] = V[X];
        return w
      }
      return Mx5.unsafeStringify(V)
    }
    try {
      Z.name = I
    } catch (C) {}
    return Z.DNS = $72, Z.URL = u72, Z
  }
})