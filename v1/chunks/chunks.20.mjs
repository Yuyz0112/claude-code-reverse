
// @from(Start 2454971, End 2460217)
qw0 = Y((fw0) => {
  Object.defineProperty(fw0, "__esModule", {
    value: !0
  });
  fw0.constructStack = void 0;
  var cr4 = () => {
    let I = [],
      d = [],
      G = new Set,
      Z = (X) => X.sort((_, F) => zw0[F.step] - zw0[_.step] || Qw0[F.priority || "normal"] - Qw0[_.priority || "normal"]),
      C = (X) => {
        let _ = !1,
          F = (g) => {
            if (g.name && g.name === X) return _ = !0, G.delete(X), !1;
            return !0
          };
        return I = I.filter(F), d = d.filter(F), _
      },
      W = (X) => {
        let _ = !1,
          F = (g) => {
            if (g.middleware === X) {
              if (_ = !0, g.name) G.delete(g.name);
              return !1
            }
            return !0
          };
        return I = I.filter(F), d = d.filter(F), _
      },
      w = (X) => {
        return I.forEach((_) => {
          X.add(_.middleware, {
            ..._
          })
        }), d.forEach((_) => {
          X.addRelativeTo(_.middleware, {
            ..._
          })
        }), X
      },
      B = (X) => {
        let _ = [];
        return X.before.forEach((F) => {
          if (F.before.length === 0 && F.after.length === 0) _.push(F);
          else _.push(...B(F))
        }), _.push(X), X.after.reverse().forEach((F) => {
          if (F.before.length === 0 && F.after.length === 0) _.push(F);
          else _.push(...B(F))
        }), _
      },
      A = (X = !1) => {
        let _ = [],
          F = [],
          g = {};
        return I.forEach((K) => {
          let Q = {
            ...K,
            before: [],
            after: []
          };
          if (Q.name) g[Q.name] = Q;
          _.push(Q)
        }), d.forEach((K) => {
          let Q = {
            ...K,
            before: [],
            after: []
          };
          if (Q.name) g[Q.name] = Q;
          F.push(Q)
        }), F.forEach((K) => {
          if (K.toMiddleware) {
            let Q = g[K.toMiddleware];
            if (Q === void 0) {
              if (X) return;
              throw new Error(`${K.toMiddleware} is not found when adding ${K.name||"anonymous"} middleware ${K.relation} ${K.toMiddleware}`)
            }
            if (K.relation === "after") Q.after.push(K);
            if (K.relation === "before") Q.before.push(K)
          }
        }), Z(_).map(B).reduce((K, Q) => {
          return K.push(...Q), K
        }, [])
      },
      V = {
        add: (X, _ = {}) => {
          let {
            name: F,
            override: g
          } = _, J = {
            step: "initialize",
            priority: "normal",
            middleware: X,
            ..._
          };
          if (F) {
            if (G.has(F)) {
              if (!g) throw new Error(`Duplicate middleware name '${F}'`);
              let K = I.findIndex((E) => E.name === F),
                Q = I[K];
              if (Q.step !== J.step || Q.priority !== J.priority) throw new Error(`"${F}" middleware with ${Q.priority} priority in ${Q.step} step cannot be overridden by same-name middleware with ${J.priority} priority in ${J.step} step.`);
              I.splice(K, 1)
            }
            G.add(F)
          }
          I.push(J)
        },
        addRelativeTo: (X, _) => {
          let {
            name: F,
            override: g
          } = _, J = {
            middleware: X,
            ..._
          };
          if (F) {
            if (G.has(F)) {
              if (!g) throw new Error(`Duplicate middleware name '${F}'`);
              let K = d.findIndex((E) => E.name === F),
                Q = d[K];
              if (Q.toMiddleware !== J.toMiddleware || Q.relation !== J.relation) throw new Error(`"${F}" middleware ${Q.relation} "${Q.toMiddleware}" middleware cannot be overridden by same-name middleware ${J.relation} "${J.toMiddleware}" middleware.`);
              d.splice(K, 1)
            }
            G.add(F)
          }
          d.push(J)
        },
        clone: () => w(fw0.constructStack()),
        use: (X) => {
          X.applyToStack(V)
        },
        remove: (X) => {
          if (typeof X === "string") return C(X);
          else return W(X)
        },
        removeByTag: (X) => {
          let _ = !1,
            F = (g) => {
              let {
                tags: J,
                name: K
              } = g;
              if (J && J.includes(X)) {
                if (K) G.delete(K);
                return _ = !0, !1
              }
              return !0
            };
          return I = I.filter(F), d = d.filter(F), _
        },
        concat: (X) => {
          let _ = w(fw0.constructStack());
          return _.use(X), _
        },
        applyToStack: w,
        identify: () => {
          return A(!0).map((X) => {
            return X.name + ": " + (X.tags || []).join(",")
          })
        },
        resolve: (X, _) => {
          for (let F of A().map((g) => g.middleware).reverse()) X = F(X, _);
          return X
        }
      };
    return V
  };
  fw0.constructStack = cr4;
  var zw0 = {
      initialize: 5,
      serialize: 4,
      build: 3,
      finalizeRequest: 2,
      deserialize: 1
    },
    Qw0 = {
      high: 3,
      normal: 2,
      low: 1
    }
})
// @from(Start 2460223, End 2460358)
Hd1 = Y((Dd1) => {
  Object.defineProperty(Dd1, "__esModule", {
    value: !0
  });
  var pr4 = x1();
  pr4.__exportStar(qw0(), Dd1)
})
// @from(Start 2460364, End 2461046)
Ew0 = Y((Uw0) => {
  Object.defineProperty(Uw0, "__esModule", {
    value: !0
  });
  Uw0.Client = void 0;
  var ir4 = Hd1();
  class Rw0 {
    constructor(I) {
      this.middlewareStack = ir4.constructStack(), this.config = I
    }
    send(I, d, G) {
      let Z = typeof d !== "function" ? d : void 0,
        C = typeof d === "function" ? d : G,
        W = I.resolveMiddleware(this.middlewareStack, this.config, Z);
      if (C) W(I).then((w) => C(null, w.output), (w) => C(w)).catch(() => {});
      else return W(I).then((w) => w.output)
    }
    destroy() {
      if (this.config.requestHandler.destroy) this.config.requestHandler.destroy()
    }
  }
  Uw0.Client = Rw0
})
// @from(Start 2461052, End 2461295)
yw0 = Y((Sw0) => {
  Object.defineProperty(Sw0, "__esModule", {
    value: !0
  });
  Sw0.Command = void 0;
  var nr4 = Hd1();
  class Mw0 {
    constructor() {
      this.middlewareStack = nr4.constructStack()
    }
  }
  Sw0.Command = Mw0
})
// @from(Start 2461301, End 2461474)
uw0 = Y((Pw0) => {
  Object.defineProperty(Pw0, "__esModule", {
    value: !0
  });
  Pw0.SENSITIVE_STRING = void 0;
  Pw0.SENSITIVE_STRING = "***SensitiveInformation***"
})
// @from(Start 2461480, End 2462176)
mw0 = Y((Tw0) => {
  Object.defineProperty(Tw0, "__esModule", {
    value: !0
  });
  Tw0.createAggregatedClient = void 0;
  var rr4 = (I, d) => {
    for (let G of Object.keys(I)) {
      let Z = I[G],
        C = async function(w, B, A) {
          let V = new Z(w);
          if (typeof B === "function") this.send(V, B);
          else if (typeof A === "function") {
            if (typeof B !== "object") throw new Error(`Expected http options but got ${typeof B}`);
            this.send(V, B || {}, A)
          } else return this.send(V, B)
        }, W = (G[0].toLowerCase() + G.slice(1)).replace(/Command$/, "");
      d.prototype[W] = C
    }
  };
  Tw0.createAggregatedClient = rr4
})
// @from(Start 2462182, End 2468674)
zd1 = Y((bw0) => {
  Object.defineProperty(bw0, "__esModule", {
    value: !0
  });
  bw0.logger = bw0.strictParseByte = bw0.strictParseShort = bw0.strictParseInt32 = bw0.strictParseInt = bw0.strictParseLong = bw0.limitedParseFloat32 = bw0.limitedParseFloat = bw0.handleFloat = bw0.limitedParseDouble = bw0.strictParseFloat32 = bw0.strictParseFloat = bw0.strictParseDouble = bw0.expectUnion = bw0.expectString = bw0.expectObject = bw0.expectNonNull = bw0.expectByte = bw0.expectShort = bw0.expectInt32 = bw0.expectInt = bw0.expectLong = bw0.expectFloat32 = bw0.expectNumber = bw0.expectBoolean = bw0.parseBoolean = void 0;
  var ar4 = (I) => {
    switch (I) {
      case "true":
        return !0;
      case "false":
        return !1;
      default:
        throw new Error(`Unable to parse boolean value "${I}"`)
    }
  };
  bw0.parseBoolean = ar4;
  var sr4 = (I) => {
    if (I === null || I === void 0) return;
    if (typeof I === "number") {
      if (I === 0 || I === 1) bw0.logger.warn(Pc(`Expected boolean, got ${typeof I}: ${I}`));
      if (I === 0) return !1;
      if (I === 1) return !0
    }
    if (typeof I === "string") {
      let d = I.toLowerCase();
      if (d === "false" || d === "true") bw0.logger.warn(Pc(`Expected boolean, got ${typeof I}: ${I}`));
      if (d === "false") return !1;
      if (d === "true") return !0
    }
    if (typeof I === "boolean") return I;
    throw new TypeError(`Expected boolean, got ${typeof I}: ${I}`)
  };
  bw0.expectBoolean = sr4;
  var or4 = (I) => {
    if (I === null || I === void 0) return;
    if (typeof I === "string") {
      let d = parseFloat(I);
      if (!Number.isNaN(d)) {
        if (String(d) !== String(I)) bw0.logger.warn(Pc(`Expected number but observed string: ${I}`));
        return d
      }
    }
    if (typeof I === "number") return I;
    throw new TypeError(`Expected number, got ${typeof I}: ${I}`)
  };
  bw0.expectNumber = or4;
  var er4 = Math.ceil(340282346638528860000000000000000000000),
    tr4 = (I) => {
      let d = bw0.expectNumber(I);
      if (d !== void 0 && !Number.isNaN(d) && d !== 1 / 0 && d !== -1 / 0) {
        if (Math.abs(d) > er4) throw new TypeError(`Expected 32-bit float, got ${I}`)
      }
      return d
    };
  bw0.expectFloat32 = tr4;
  var Ia4 = (I) => {
    if (I === null || I === void 0) return;
    if (Number.isInteger(I) && !Number.isNaN(I)) return I;
    throw new TypeError(`Expected integer, got ${typeof I}: ${I}`)
  };
  bw0.expectLong = Ia4;
  bw0.expectInt = bw0.expectLong;
  var da4 = (I) => Kd1(I, 32);
  bw0.expectInt32 = da4;
  var Ga4 = (I) => Kd1(I, 16);
  bw0.expectShort = Ga4;
  var Za4 = (I) => Kd1(I, 8);
  bw0.expectByte = Za4;
  var Kd1 = (I, d) => {
      let G = bw0.expectLong(I);
      if (G !== void 0 && Ca4(G, d) !== G) throw new TypeError(`Expected ${d}-bit integer, got ${I}`);
      return G
    },
    Ca4 = (I, d) => {
      switch (d) {
        case 32:
          return Int32Array.of(I)[0];
        case 16:
          return Int16Array.of(I)[0];
        case 8:
          return Int8Array.of(I)[0]
      }
    },
    Wa4 = (I, d) => {
      if (I === null || I === void 0) {
        if (d) throw new TypeError(`Expected a non-null value for ${d}`);
        throw new TypeError("Expected a non-null value")
      }
      return I
    };
  bw0.expectNonNull = Wa4;
  var wa4 = (I) => {
    if (I === null || I === void 0) return;
    if (typeof I === "object" && !Array.isArray(I)) return I;
    let d = Array.isArray(I) ? "array" : typeof I;
    throw new TypeError(`Expected object, got ${d}: ${I}`)
  };
  bw0.expectObject = wa4;
  var Ba4 = (I) => {
    if (I === null || I === void 0) return;
    if (typeof I === "string") return I;
    if (["boolean", "number", "bigint"].includes(typeof I)) return bw0.logger.warn(Pc(`Expected string, got ${typeof I}: ${I}`)), String(I);
    throw new TypeError(`Expected string, got ${typeof I}: ${I}`)
  };
  bw0.expectString = Ba4;
  var Aa4 = (I) => {
    if (I === null || I === void 0) return;
    let d = bw0.expectObject(I),
      G = Object.entries(d).filter(([, Z]) => Z != null).map(([Z]) => Z);
    if (G.length === 0) throw new TypeError("Unions must have exactly one non-null member. None were found.");
    if (G.length > 1) throw new TypeError(`Unions must have exactly one non-null member. Keys ${G} were not null.`);
    return d
  };
  bw0.expectUnion = Aa4;
  var Va4 = (I) => {
    if (typeof I == "string") return bw0.expectNumber(mf(I));
    return bw0.expectNumber(I)
  };
  bw0.strictParseDouble = Va4;
  bw0.strictParseFloat = bw0.strictParseDouble;
  var Xa4 = (I) => {
    if (typeof I == "string") return bw0.expectFloat32(mf(I));
    return bw0.expectFloat32(I)
  };
  bw0.strictParseFloat32 = Xa4;
  var Ya4 = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g,
    mf = (I) => {
      let d = I.match(Ya4);
      if (d === null || d[0].length !== I.length) throw new TypeError("Expected real number, got implicit NaN");
      return parseFloat(I)
    },
    _a4 = (I) => {
      if (typeof I == "string") return lw0(I);
      return bw0.expectNumber(I)
    };
  bw0.limitedParseDouble = _a4;
  bw0.handleFloat = bw0.limitedParseDouble;
  bw0.limitedParseFloat = bw0.limitedParseDouble;
  var Da4 = (I) => {
    if (typeof I == "string") return lw0(I);
    return bw0.expectFloat32(I)
  };
  bw0.limitedParseFloat32 = Da4;
  var lw0 = (I) => {
      switch (I) {
        case "NaN":
          return NaN;
        case "Infinity":
          return 1 / 0;
        case "-Infinity":
          return -1 / 0;
        default:
          throw new Error(`Unable to parse float value: ${I}`)
      }
    },
    Ha4 = (I) => {
      if (typeof I === "string") return bw0.expectLong(mf(I));
      return bw0.expectLong(I)
    };
  bw0.strictParseLong = Ha4;
  bw0.strictParseInt = bw0.strictParseLong;
  var Fa4 = (I) => {
    if (typeof I === "string") return bw0.expectInt32(mf(I));
    return bw0.expectInt32(I)
  };
  bw0.strictParseInt32 = Fa4;
  var ga4 = (I) => {
    if (typeof I === "string") return bw0.expectShort(mf(I));
    return bw0.expectShort(I)
  };
  bw0.strictParseShort = ga4;
  var Ja4 = (I) => {
    if (typeof I === "string") return bw0.expectByte(mf(I));
    return bw0.expectByte(I)
  };
  bw0.strictParseByte = Ja4;
  var Pc = (I) => {
    return String(new TypeError(I).stack || I).split(`
`).slice(0, 5).filter((d) => !d.includes("stackTraceWarning")).join(`
`)
  };
  bw0.logger = {
    warn: console.warn
  }
})
// @from(Start 2468680, End 2475072)
pw0 = Y((xw0) => {
  Object.defineProperty(xw0, "__esModule", {
    value: !0
  });
  xw0.parseEpochTimestamp = xw0.parseRfc7231DateTime = xw0.parseRfc3339DateTimeWithOffset = xw0.parseRfc3339DateTime = xw0.dateToUtcString = void 0;
  var $_ = zd1(),
    $a4 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    fd1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function ua4(I) {
    let d = I.getUTCFullYear(),
      G = I.getUTCMonth(),
      Z = I.getUTCDay(),
      C = I.getUTCDate(),
      W = I.getUTCHours(),
      w = I.getUTCMinutes(),
      B = I.getUTCSeconds(),
      A = C < 10 ? `0${C}` : `${C}`,
      V = W < 10 ? `0${W}` : `${W}`,
      X = w < 10 ? `0${w}` : `${w}`,
      _ = B < 10 ? `0${B}` : `${B}`;
    return `${$a4[Z]}, ${A} ${fd1[G]} ${d} ${V}:${X}:${_} GMT`
  }
  xw0.dateToUtcString = ua4;
  var Ta4 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/),
    Oa4 = (I) => {
      if (I === null || I === void 0) return;
      if (typeof I !== "string") throw new TypeError("RFC-3339 date-times must be expressed as strings");
      let d = Ta4.exec(I);
      if (!d) throw new TypeError("Invalid RFC-3339 date-time value");
      let [G, Z, C, W, w, B, A, V] = d, X = $_.strictParseShort(lf(Z)), _ = sw(C, "month", 1, 12), F = sw(W, "day", 1, 31);
      return vL(X, _, F, {
        hours: w,
        minutes: B,
        seconds: A,
        fractionalMilliseconds: V
      })
    };
  xw0.parseRfc3339DateTime = Oa4;
  var ma4 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/),
    la4 = (I) => {
      if (I === null || I === void 0) return;
      if (typeof I !== "string") throw new TypeError("RFC-3339 date-times must be expressed as strings");
      let d = ma4.exec(I);
      if (!d) throw new TypeError("Invalid RFC-3339 date-time value");
      let [G, Z, C, W, w, B, A, V, X] = d, _ = $_.strictParseShort(lf(Z)), F = sw(C, "month", 1, 12), g = sw(W, "day", 1, 31), J = vL(_, F, g, {
        hours: w,
        minutes: B,
        seconds: A,
        fractionalMilliseconds: V
      });
      if (X.toUpperCase() != "Z") J.setTime(J.getTime() - oa4(X));
      return J
    };
  xw0.parseRfc3339DateTimeWithOffset = la4;
  var ba4 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/),
    ha4 = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/),
    ja4 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/),
    ka4 = (I) => {
      if (I === null || I === void 0) return;
      if (typeof I !== "string") throw new TypeError("RFC-7231 date-times must be expressed as strings");
      let d = ba4.exec(I);
      if (d) {
        let [G, Z, C, W, w, B, A, V] = d;
        return vL($_.strictParseShort(lf(W)), Qd1(C), sw(Z, "day", 1, 31), {
          hours: w,
          minutes: B,
          seconds: A,
          fractionalMilliseconds: V
        })
      }
      if (d = ha4.exec(I), d) {
        let [G, Z, C, W, w, B, A, V] = d;
        return ia4(vL(ca4(W), Qd1(C), sw(Z, "day", 1, 31), {
          hours: w,
          minutes: B,
          seconds: A,
          fractionalMilliseconds: V
        }))
      }
      if (d = ja4.exec(I), d) {
        let [G, Z, C, W, w, B, A, V] = d;
        return vL($_.strictParseShort(lf(V)), Qd1(Z), sw(C.trimLeft(), "day", 1, 31), {
          hours: W,
          minutes: w,
          seconds: B,
          fractionalMilliseconds: A
        })
      }
      throw new TypeError("Invalid RFC-7231 date-time value")
    };
  xw0.parseRfc7231DateTime = ka4;
  var xa4 = (I) => {
    if (I === null || I === void 0) return;
    let d;
    if (typeof I === "number") d = I;
    else if (typeof I === "string") d = $_.strictParseDouble(I);
    else throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
    if (Number.isNaN(d) || d === 1 / 0 || d === -1 / 0) throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
    return new Date(Math.round(d * 1000))
  };
  xw0.parseEpochTimestamp = xa4;
  var vL = (I, d, G, Z) => {
      let C = d - 1;
      return ra4(I, C, G), new Date(Date.UTC(I, C, G, sw(Z.hours, "hour", 0, 23), sw(Z.minutes, "minute", 0, 59), sw(Z.seconds, "seconds", 0, 60), sa4(Z.fractionalMilliseconds)))
    },
    ca4 = (I) => {
      let d = new Date().getUTCFullYear(),
        G = Math.floor(d / 100) * 100 + $_.strictParseShort(lf(I));
      if (G < d) return G + 100;
      return G
    },
    pa4 = 1576800000000,
    ia4 = (I) => {
      if (I.getTime() - new Date().getTime() > pa4) return new Date(Date.UTC(I.getUTCFullYear() - 100, I.getUTCMonth(), I.getUTCDate(), I.getUTCHours(), I.getUTCMinutes(), I.getUTCSeconds(), I.getUTCMilliseconds()));
      return I
    },
    Qd1 = (I) => {
      let d = fd1.indexOf(I);
      if (d < 0) throw new TypeError(`Invalid month: ${I}`);
      return d + 1
    },
    na4 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    ra4 = (I, d, G) => {
      let Z = na4[d];
      if (d === 1 && aa4(I)) Z = 29;
      if (G > Z) throw new TypeError(`Invalid day for ${fd1[d]} in ${I}: ${G}`)
    },
    aa4 = (I) => {
      return I % 4 === 0 && (I % 100 !== 0 || I % 400 === 0)
    },
    sw = (I, d, G, Z) => {
      let C = $_.strictParseByte(lf(I));
      if (C < G || C > Z) throw new TypeError(`${d} must be between ${G} and ${Z}, inclusive`);
      return C
    },
    sa4 = (I) => {
      if (I === null || I === void 0) return 0;
      return $_.strictParseFloat32("0." + I) * 1000
    },
    oa4 = (I) => {
      let d = I[0],
        G = 1;
      if (d == "+") G = 1;
      else if (d == "-") G = -1;
      else throw new TypeError(`Offset direction, ${d}, must be "+" or "-"`);
      let Z = Number(I.substring(1, 3)),
        C = Number(I.substring(4, 6));
      return G * (Z * 60 + C) * 60 * 1000
    },
    lf = (I) => {
      let d = 0;
      while (d < I.length - 1 && I.charAt(d) === "0") d++;
      if (d === 0) return I;
      return I.slice(d)
    }
})
// @from(Start 2475078, End 2475767)
Rd1 = Y((iw0) => {
  Object.defineProperty(iw0, "__esModule", {
    value: !0
  });
  iw0.decorateServiceException = iw0.ServiceException = void 0;
  class qd1 extends Error {
    constructor(I) {
      super(I.message);
      Object.setPrototypeOf(this, qd1.prototype), this.name = I.name, this.$fault = I.$fault, this.$metadata = I.$metadata
    }
  }
  iw0.ServiceException = qd1;
  var Gs4 = (I, d = {}) => {
    Object.entries(d).filter(([, Z]) => Z !== void 0).forEach(([Z, C]) => {
      if (I[Z] == null || I[Z] === "") I[Z] = C
    });
    let G = I.message || I.Message || "UnknownError";
    return I.message = G, delete I.Message, I
  };
  iw0.decorateServiceException = Gs4
})
// @from(Start 2475773, End 2477075)
ow0 = Y((rw0) => {
  Object.defineProperty(rw0, "__esModule", {
    value: !0
  });
  rw0.withBaseException = rw0.throwDefaultError = void 0;
  var Cs4 = Rd1(),
    Ws4 = ({
      output: I,
      parsedBody: d,
      exceptionCtor: G,
      errorCode: Z
    }) => {
      let C = Bs4(I),
        W = C.httpStatusCode ? C.httpStatusCode + "" : void 0,
        w = new G({
          name: (d === null || d === void 0 ? void 0 : d.code) || (d === null || d === void 0 ? void 0 : d.Code) || Z || W || "UnknownError",
          $fault: "client",
          $metadata: C
        });
      throw Cs4.decorateServiceException(w, d)
    };
  rw0.throwDefaultError = Ws4;
  var ws4 = (I) => {
    return ({
      output: d,
      parsedBody: G,
      errorCode: Z
    }) => {
      rw0.throwDefaultError({
        output: d,
        parsedBody: G,
        exceptionCtor: I,
        errorCode: Z
      })
    }
  };
  rw0.withBaseException = ws4;
  var Bs4 = (I) => {
    var d, G;
    return {
      httpStatusCode: I.statusCode,
      requestId: (G = (d = I.headers["x-amzn-requestid"]) !== null && d !== void 0 ? d : I.headers["x-amzn-request-id"]) !== null && G !== void 0 ? G : I.headers["x-amz-request-id"],
      extendedRequestId: I.headers["x-amz-id-2"],
      cfId: I.headers["x-amz-cf-id"]
    }
  }
})
// @from(Start 2477081, End 2477765)
IB0 = Y((ew0) => {
  Object.defineProperty(ew0, "__esModule", {
    value: !0
  });
  ew0.loadConfigsForDefaultMode = void 0;
  var As4 = (I) => {
    switch (I) {
      case "standard":
        return {
          retryMode: "standard", connectionTimeout: 3100
        };
      case "in-region":
        return {
          retryMode: "standard", connectionTimeout: 1100
        };
      case "cross-region":
        return {
          retryMode: "standard", connectionTimeout: 3100
        };
      case "mobile":
        return {
          retryMode: "standard", connectionTimeout: 30000
        };
      default:
        return {}
    }
  };
  ew0.loadConfigsForDefaultMode = As4
})
// @from(Start 2477771, End 2478070)
CB0 = Y((GB0) => {
  Object.defineProperty(GB0, "__esModule", {
    value: !0
  });
  GB0.emitWarningIfUnsupportedVersion = void 0;
  var dB0 = !1,
    Vs4 = (I) => {
      if (I && !dB0 && parseInt(I.substring(1, I.indexOf("."))) < 14) dB0 = !0
    };
  GB0.emitWarningIfUnsupportedVersion = Vs4
})
// @from(Start 2478076, End 2478405)
Ud1 = Y((WB0) => {
  Object.defineProperty(WB0, "__esModule", {
    value: !0
  });
  WB0.extendedEncodeURIComponent = void 0;

  function Xs4(I) {
    return encodeURIComponent(I).replace(/[!'()*]/g, function(d) {
      return "%" + d.charCodeAt(0).toString(16).toUpperCase()
    })
  }
  WB0.extendedEncodeURIComponent = Xs4
})
// @from(Start 2478411, End 2478614)
VB0 = Y((BB0) => {
  Object.defineProperty(BB0, "__esModule", {
    value: !0
  });
  BB0.getArrayIfSingleItem = void 0;
  var Ys4 = (I) => Array.isArray(I) ? I : [I];
  BB0.getArrayIfSingleItem = Ys4
})
// @from(Start 2478620, End 2479014)
YB0 = Y((XB0) => {
  Object.defineProperty(XB0, "__esModule", {
    value: !0
  });
  XB0.getValueFromTextNode = void 0;
  var _s4 = (I) => {
    for (let G in I)
      if (I.hasOwnProperty(G) && I[G]["#text"] !== void 0) I[G] = I[G]["#text"];
      else if (typeof I[G] === "object" && I[G] !== null) I[G] = XB0.getValueFromTextNode(I[G]);
    return I
  };
  XB0.getValueFromTextNode = _s4
})
// @from(Start 2479020, End 2480011)
HB0 = Y((_B0) => {
  Object.defineProperty(_B0, "__esModule", {
    value: !0
  });
  _B0.LazyJsonString = _B0.StringWrapper = void 0;
  var Ds4 = function() {
    let I = Object.getPrototypeOf(this).constructor,
      G = new(Function.bind.apply(String, [null, ...arguments]));
    return Object.setPrototypeOf(G, I.prototype), G
  };
  _B0.StringWrapper = Ds4;
  _B0.StringWrapper.prototype = Object.create(String.prototype, {
    constructor: {
      value: _B0.StringWrapper,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  });
  Object.setPrototypeOf(_B0.StringWrapper, String);
  class EL extends _B0.StringWrapper {
    deserializeJSON() {
      return JSON.parse(super.toString())
    }
    toJSON() {
      return super.toString()
    }
    static fromObject(I) {
      if (I instanceof EL) return I;
      else if (I instanceof String || typeof I === "string") return new EL(I);
      return new EL(JSON.stringify(I))
    }
  }
  _B0.LazyJsonString = EL
})
// @from(Start 2480017, End 2481836)
NB0 = Y((JB0) => {
  Object.defineProperty(JB0, "__esModule", {
    value: !0
  });
  JB0.take = JB0.convertMap = JB0.map = void 0;

  function FB0(I, d, G) {
    let Z, C, W;
    if (typeof d === "undefined" && typeof G === "undefined") Z = {}, W = I;
    else if (Z = I, typeof d === "function") return C = d, W = G, gs4(Z, C, W);
    else W = d;
    for (let w of Object.keys(W)) {
      if (!Array.isArray(W[w])) {
        Z[w] = W[w];
        continue
      }
      gB0(Z, null, W, w)
    }
    return Z
  }
  JB0.map = FB0;
  var Hs4 = (I) => {
    let d = {};
    for (let [G, Z] of Object.entries(I || {})) d[G] = [, Z];
    return d
  };
  JB0.convertMap = Hs4;
  var Fs4 = (I, d) => {
    let G = {};
    for (let Z in d) gB0(G, I, d, Z);
    return G
  };
  JB0.take = Fs4;
  var gs4 = (I, d, G) => {
      return FB0(I, Object.entries(G).reduce((Z, [C, W]) => {
        if (Array.isArray(W)) Z[C] = W;
        else if (typeof W === "function") Z[C] = [d, W()];
        else Z[C] = [d, W];
        return Z
      }, {}))
    },
    gB0 = (I, d, G, Z) => {
      if (d !== null) {
        let w = G[Z];
        if (typeof w === "function") w = [, w];
        let [B = Js4, A = Ks4, V = Z] = w;
        if (typeof B === "function" && B(d[V]) || typeof B !== "function" && !!B) I[Z] = A(d[V]);
        return
      }
      let [C, W] = G[Z];
      if (typeof W === "function") {
        let w, B = C === void 0 && (w = W()) != null,
          A = typeof C === "function" && !!C(void 0) || typeof C !== "function" && !!C;
        if (B) I[Z] = w;
        else if (A) I[Z] = W()
      } else {
        let w = C === void 0 && W != null,
          B = typeof C === "function" && !!C(W) || typeof C !== "function" && !!C;
        if (w || B) I[Z] = W
      }
    },
    Js4 = (I) => I != null,
    Ks4 = (I) => I
})
// @from(Start 2481842, End 2482440)
qB0 = Y((QB0) => {
  Object.defineProperty(QB0, "__esModule", {
    value: !0
  });
  QB0.resolvedPath = void 0;
  var zB0 = Ud1(),
    Qs4 = (I, d, G, Z, C, W) => {
      if (d != null && d[G] !== void 0) {
        let w = Z();
        if (w.length <= 0) throw new Error("Empty value provided for input HTTP label: " + G + ".");
        I = I.replace(C, W ? w.split("/").map((B) => zB0.extendedEncodeURIComponent(B)).join("/") : zB0.extendedEncodeURIComponent(w))
      } else throw new Error("No value provided for input HTTP label: " + G + ".");
      return I
    };
  QB0.resolvedPath = Qs4
})
// @from(Start 2482446, End 2482794)
vB0 = Y((RB0) => {
  Object.defineProperty(RB0, "__esModule", {
    value: !0
  });
  RB0.serializeFloat = void 0;
  var fs4 = (I) => {
    if (I !== I) return "NaN";
    switch (I) {
      case 1 / 0:
        return "Infinity";
      case -1 / 0:
        return "-Infinity";
      default:
        return I
    }
  };
  RB0.serializeFloat = fs4
})
// @from(Start 2482800, End 2483241)
MB0 = Y((EB0) => {
  Object.defineProperty(EB0, "__esModule", {
    value: !0
  });
  EB0._json = void 0;
  var qs4 = (I) => {
    if (I == null) return {};
    if (Array.isArray(I)) return I.filter((d) => d != null);
    if (typeof I === "object") {
      let d = {};
      for (let G of Object.keys(I)) {
        if (I[G] == null) continue;
        d[G] = EB0._json(I[G])
      }
      return d
    }
    return I
  };
  EB0._json = qs4
})
// @from(Start 2483247, End 2483804)
yB0 = Y((SB0) => {
  Object.defineProperty(SB0, "__esModule", {
    value: !0
  });
  SB0.splitEvery = void 0;

  function Rs4(I, d, G) {
    if (G <= 0 || !Number.isInteger(G)) throw new Error("Invalid number of delimiters (" + G + ") for splitEvery.");
    let Z = I.split(d);
    if (G === 1) return Z;
    let C = [],
      W = "";
    for (let w = 0; w < Z.length; w++) {
      if (W === "") W = Z[w];
      else W += d + Z[w];
      if ((w + 1) % G === 0) C.push(W), W = ""
    }
    if (W !== "") C.push(W);
    return C
  }
  SB0.splitEvery = Rs4
})
// @from(Start 2483810, End 2484509)
v0 = Y((h3) => {
  Object.defineProperty(h3, "__esModule", {
    value: !0
  });
  var q6 = x1();
  q6.__exportStar(Nw0(), h3);
  q6.__exportStar(Ew0(), h3);
  q6.__exportStar(yw0(), h3);
  q6.__exportStar(uw0(), h3);
  q6.__exportStar(mw0(), h3);
  q6.__exportStar(pw0(), h3);
  q6.__exportStar(ow0(), h3);
  q6.__exportStar(IB0(), h3);
  q6.__exportStar(CB0(), h3);
  q6.__exportStar(Rd1(), h3);
  q6.__exportStar(Ud1(), h3);
  q6.__exportStar(VB0(), h3);
  q6.__exportStar(YB0(), h3);
  q6.__exportStar(HB0(), h3);
  q6.__exportStar(NB0(), h3);
  q6.__exportStar(zd1(), h3);
  q6.__exportStar(qB0(), h3);
  q6.__exportStar(vB0(), h3);
  q6.__exportStar(MB0(), h3);
  q6.__exportStar(yB0(), h3)
})
// @from(Start 2484515, End 2484901)
uB0 = Y((PB0) => {
  Object.defineProperty(PB0, "__esModule", {
    value: !0
  });
  PB0.resolveClientEndpointParameters = void 0;
  var Us4 = (I) => {
    return {
      ...I,
      useDualstackEndpoint: I.useDualstackEndpoint ?? !1,
      useFipsEndpoint: I.useFipsEndpoint ?? !1,
      defaultSigningName: "cognito-identity"
    }
  };
  PB0.resolveClientEndpointParameters = Us4
})
// @from(Start 2484907, End 2488817)
TB0 = Y((so9, vs4) => {
  vs4.exports = {
    name: "@aws-sdk/client-cognito-identity",
    description: "AWS SDK for JavaScript Cognito Identity Client for Node.js, Browser and React Native",
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
      "generate:client": "node ../../scripts/generate-clients/single-service --solo cognito-identity",
      "test:e2e": "ts-mocha test/**/*.ispec.ts && karma start karma.conf.js"
    },
    main: "./dist-cjs/index.js",
    types: "./dist-types/index.d.ts",
    module: "./dist-es/index.js",
    sideEffects: !1,
    dependencies: {
      "@aws-crypto/sha256-browser": "3.0.0",
      "@aws-crypto/sha256-js": "3.0.0",
      "@aws-sdk/client-sts": "3.341.0",
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
      tslib: "^2.5.0"
    },
    devDependencies: {
      "@aws-sdk/client-iam": "3.341.0",
      "@aws-sdk/service-client-documentation-generator": "3.310.0",
      "@tsconfig/node14": "1.0.3",
      "@types/chai": "^4.2.11",
      "@types/mocha": "^8.0.4",
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
    homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cognito-identity",
    repository: {
      type: "git",
      url: "https://github.com/aws/aws-sdk-js-v3.git",
      directory: "clients/client-cognito-identity"
    }
  }
})
// @from(Start 2488823, End 2489116)
lB0 = Y((OB0) => {
  Object.defineProperty(OB0, "__esModule", {
    value: !0
  });
  OB0.resolveStsAuthConfig = void 0;
  var Es4 = A9(),
    Ms4 = (I, {
      stsClientCtor: d
    }) => Es4.resolveAwsAuthConfig({
      ...I,
      stsClientCtor: d
    });
  OB0.resolveStsAuthConfig = Ms4
})
// @from(Start 2489122, End 2489547)
jB0 = Y((bB0) => {
  Object.defineProperty(bB0, "__esModule", {
    value: !0
  });
  bB0.resolveClientEndpointParameters = void 0;
  var Ss4 = (I) => {
    return {
      ...I,
      useDualstackEndpoint: I.useDualstackEndpoint ?? !1,
      useFipsEndpoint: I.useFipsEndpoint ?? !1,
      useGlobalEndpoint: I.useGlobalEndpoint ?? !1,
      defaultSigningName: "sts"
    }
  };
  bB0.resolveClientEndpointParameters = Ss4
})
// @from(Start 2489553, End 2493315)
kB0 = Y((to9, Ls4) => {
  Ls4.exports = {
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
// @from(Start 2493321, End 2493797)
uc = Y((Sd1) => {
  Object.defineProperty(Sd1, "__esModule", {
    value: !0
  });
  Sd1.STSServiceException = Sd1.__ServiceException = void 0;
  var xB0 = v0();
  Object.defineProperty(Sd1, "__ServiceException", {
    enumerable: !0,
    get: function() {
      return xB0.ServiceException
    }
  });
  class Md1 extends xB0.ServiceException {
    constructor(I) {
      super(I);
      Object.setPrototypeOf(this, Md1.prototype)
    }
  }
  Sd1.STSServiceException = Md1
})
// @from(Start 2493803, End 2498852)
T_ = Y((pB0) => {
  Object.defineProperty(pB0, "__esModule", {
    value: !0
  });
  pB0.GetSessionTokenResponseFilterSensitiveLog = pB0.GetFederationTokenResponseFilterSensitiveLog = pB0.AssumeRoleWithWebIdentityResponseFilterSensitiveLog = pB0.AssumeRoleWithWebIdentityRequestFilterSensitiveLog = pB0.AssumeRoleWithSAMLResponseFilterSensitiveLog = pB0.AssumeRoleWithSAMLRequestFilterSensitiveLog = pB0.AssumeRoleResponseFilterSensitiveLog = pB0.CredentialsFilterSensitiveLog = pB0.InvalidAuthorizationMessageException = pB0.IDPCommunicationErrorException = pB0.InvalidIdentityTokenException = pB0.IDPRejectedClaimException = pB0.RegionDisabledException = pB0.PackedPolicyTooLargeException = pB0.MalformedPolicyDocumentException = pB0.ExpiredTokenException = void 0;
  var Ld1 = v0(),
    u_ = uc();
  class yd1 extends u_.STSServiceException {
    constructor(I) {
      super({
        name: "ExpiredTokenException",
        $fault: "client",
        ...I
      });
      this.name = "ExpiredTokenException", this.$fault = "client", Object.setPrototypeOf(this, yd1.prototype)
    }
  }
  pB0.ExpiredTokenException = yd1;
  class Pd1 extends u_.STSServiceException {
    constructor(I) {
      super({
        name: "MalformedPolicyDocumentException",
        $fault: "client",
        ...I
      });
      this.name = "MalformedPolicyDocumentException", this.$fault = "client", Object.setPrototypeOf(this, Pd1.prototype)
    }
  }
  pB0.MalformedPolicyDocumentException = Pd1;
  class $d1 extends u_.STSServiceException {
    constructor(I) {
      super({
        name: "PackedPolicyTooLargeException",
        $fault: "client",
        ...I
      });
      this.name = "PackedPolicyTooLargeException", this.$fault = "client", Object.setPrototypeOf(this, $d1.prototype)
    }
  }
  pB0.PackedPolicyTooLargeException = $d1;
  class ud1 extends u_.STSServiceException {
    constructor(I) {
      super({
        name: "RegionDisabledException",
        $fault: "client",
        ...I
      });
      this.name = "RegionDisabledException", this.$fault = "client", Object.setPrototypeOf(this, ud1.prototype)
    }
  }
  pB0.RegionDisabledException = ud1;
  class Td1 extends u_.STSServiceException {
    constructor(I) {
      super({
        name: "IDPRejectedClaimException",
        $fault: "client",
        ...I
      });
      this.name = "IDPRejectedClaimException", this.$fault = "client", Object.setPrototypeOf(this, Td1.prototype)
    }
  }
  pB0.IDPRejectedClaimException = Td1;
  class Od1 extends u_.STSServiceException {
    constructor(I) {
      super({
        name: "InvalidIdentityTokenException",
        $fault: "client",
        ...I
      });
      this.name = "InvalidIdentityTokenException", this.$fault = "client", Object.setPrototypeOf(this, Od1.prototype)
    }
  }
  pB0.InvalidIdentityTokenException = Od1;
  class md1 extends u_.STSServiceException {
    constructor(I) {
      super({
        name: "IDPCommunicationErrorException",
        $fault: "client",
        ...I
      });
      this.name = "IDPCommunicationErrorException", this.$fault = "client", Object.setPrototypeOf(this, md1.prototype)
    }
  }
  pB0.IDPCommunicationErrorException = md1;
  class ld1 extends u_.STSServiceException {
    constructor(I) {
      super({
        name: "InvalidAuthorizationMessageException",
        $fault: "client",
        ...I
      });
      this.name = "InvalidAuthorizationMessageException", this.$fault = "client", Object.setPrototypeOf(this, ld1.prototype)
    }
  }
  pB0.InvalidAuthorizationMessageException = ld1;
  var ys4 = (I) => ({
    ...I,
    ...I.SecretAccessKey && {
      SecretAccessKey: Ld1.SENSITIVE_STRING
    }
  });
  pB0.CredentialsFilterSensitiveLog = ys4;
  var Ps4 = (I) => ({
    ...I,
    ...I.Credentials && {
      Credentials: pB0.CredentialsFilterSensitiveLog(I.Credentials)
    }
  });
  pB0.AssumeRoleResponseFilterSensitiveLog = Ps4;
  var $s4 = (I) => ({
    ...I,
    ...I.SAMLAssertion && {
      SAMLAssertion: Ld1.SENSITIVE_STRING
    }
  });
  pB0.AssumeRoleWithSAMLRequestFilterSensitiveLog = $s4;
  var us4 = (I) => ({
    ...I,
    ...I.Credentials && {
      Credentials: pB0.CredentialsFilterSensitiveLog(I.Credentials)
    }
  });
  pB0.AssumeRoleWithSAMLResponseFilterSensitiveLog = us4;
  var Ts4 = (I) => ({
    ...I,
    ...I.WebIdentityToken && {
      WebIdentityToken: Ld1.SENSITIVE_STRING
    }
  });
  pB0.AssumeRoleWithWebIdentityRequestFilterSensitiveLog = Ts4;
  var Os4 = (I) => ({
    ...I,
    ...I.Credentials && {
      Credentials: pB0.CredentialsFilterSensitiveLog(I.Credentials)
    }
  });
  pB0.AssumeRoleWithWebIdentityResponseFilterSensitiveLog = Os4;
  var ms4 = (I) => ({
    ...I,
    ...I.Credentials && {
      Credentials: pB0.CredentialsFilterSensitiveLog(I.Credentials)
    }
  });
  pB0.GetFederationTokenResponseFilterSensitiveLog = ms4;
  var ls4 = (I) => ({
    ...I,
    ...I.Credentials && {
      Credentials: pB0.CredentialsFilterSensitiveLog(I.Credentials)
    }
  });
  pB0.GetSessionTokenResponseFilterSensitiveLog = ls4
})
// @from(Start 2498858, End 2498943)
rB0 = Y((nB0) => {
  Object.defineProperty(nB0, "__esModule", {
    value: !0
  })
})
// @from(Start 2498949, End 2499203)
sB0 = Y((aB0) => {
  Object.defineProperty(aB0, "__esModule", {
    value: !0
  });
  aB0.HttpAuthLocation = void 0;
  var ts4;
  (function(I) {
    I.HEADER = "header", I.QUERY = "query"
  })(ts4 = aB0.HttpAuthLocation || (aB0.HttpAuthLocation = {}))
})
// @from(Start 2499209, End 2499294)
eB0 = Y((oB0) => {
  Object.defineProperty(oB0, "__esModule", {
    value: !0
  })
})
// @from(Start 2499300, End 2499385)
IA0 = Y((tB0) => {
  Object.defineProperty(tB0, "__esModule", {
    value: !0
  })
})
// @from(Start 2499391, End 2499476)
GA0 = Y((dA0) => {
  Object.defineProperty(dA0, "__esModule", {
    value: !0
  })
})
// @from(Start 2499482, End 2499567)
CA0 = Y((ZA0) => {
  Object.defineProperty(ZA0, "__esModule", {
    value: !0
  })
})
// @from(Start 2499573, End 2499658)
wA0 = Y((WA0) => {
  Object.defineProperty(WA0, "__esModule", {
    value: !0
  })
})
// @from(Start 2499664, End 2499749)
AA0 = Y((BA0) => {
  Object.defineProperty(BA0, "__esModule", {
    value: !0
  })
})
// @from(Start 2499755, End 2499840)
XA0 = Y((VA0) => {
  Object.defineProperty(VA0, "__esModule", {
    value: !0
  })
})
// @from(Start 2499846, End 2500040)
YA0 = Y((SL) => {
  Object.defineProperty(SL, "__esModule", {
    value: !0
  });
  var hd1 = x1();
  hd1.__exportStar(wA0(), SL);
  hd1.__exportStar(AA0(), SL);
  hd1.__exportStar(XA0(), SL)
})
// @from(Start 2500046, End 2500131)
DA0 = Y((_A0) => {
  Object.defineProperty(_A0, "__esModule", {
    value: !0
  })
})
// @from(Start 2500137, End 2500222)
FA0 = Y((HA0) => {
  Object.defineProperty(HA0, "__esModule", {
    value: !0
  })
})
// @from(Start 2500228, End 2500481)
JA0 = Y((gA0) => {
  Object.defineProperty(gA0, "__esModule", {
    value: !0
  });
  gA0.EndpointURLScheme = void 0;
  var Io4;
  (function(I) {
    I.HTTP = "http", I.HTTPS = "https"
  })(Io4 = gA0.EndpointURLScheme || (gA0.EndpointURLScheme = {}))
})
// @from(Start 2500487, End 2500572)
NA0 = Y((KA0) => {
  Object.defineProperty(KA0, "__esModule", {
    value: !0
  })
})
// @from(Start 2500578, End 2500663)
QA0 = Y((zA0) => {
  Object.defineProperty(zA0, "__esModule", {
    value: !0
  })
})
// @from(Start 2500669, End 2500754)
qA0 = Y((fA0) => {
  Object.defineProperty(fA0, "__esModule", {
    value: !0
  })
})
// @from(Start 2500760, End 2500845)
UA0 = Y((RA0) => {
  Object.defineProperty(RA0, "__esModule", {
    value: !0
  })
})
// @from(Start 2500851, End 2500936)
EA0 = Y((vA0) => {
  Object.defineProperty(vA0, "__esModule", {
    value: !0
  })
})
// @from(Start 2500942, End 2501192)
MA0 = Y((rg) => {
  Object.defineProperty(rg, "__esModule", {
    value: !0
  });
  var LL = x1();
  LL.__exportStar(NA0(), rg);
  LL.__exportStar(QA0(), rg);
  LL.__exportStar(qA0(), rg);
  LL.__exportStar(UA0(), rg);
  LL.__exportStar(EA0(), rg)
})
// @from(Start 2501198, End 2501283)
LA0 = Y((SA0) => {
  Object.defineProperty(SA0, "__esModule", {
    value: !0
  })
})
// @from(Start 2501289, End 2501552)
PA0 = Y((yA0) => {
  Object.defineProperty(yA0, "__esModule", {
    value: !0
  });
  yA0.FieldPosition = void 0;
  var do4;
  (function(I) {
    I[I.HEADER = 0] = "HEADER", I[I.TRAILER = 1] = "TRAILER"
  })(do4 = yA0.FieldPosition || (yA0.FieldPosition = {}))
})
// @from(Start 2501558, End 2501643)
uA0 = Y(($A0) => {
  Object.defineProperty($A0, "__esModule", {
    value: !0
  })
})
// @from(Start 2501649, End 2501734)
OA0 = Y((TA0) => {
  Object.defineProperty(TA0, "__esModule", {
    value: !0
  })
})
// @from(Start 2501740, End 2501903)
lA0 = Y((Tc) => {
  Object.defineProperty(Tc, "__esModule", {
    value: !0
  });
  var mA0 = x1();
  mA0.__exportStar(uA0(), Tc);
  mA0.__exportStar(OA0(), Tc)
})
// @from(Start 2501909, End 2501994)
hA0 = Y((bA0) => {
  Object.defineProperty(bA0, "__esModule", {
    value: !0
  })
})
// @from(Start 2502000, End 2502085)
kA0 = Y((jA0) => {
  Object.defineProperty(jA0, "__esModule", {
    value: !0
  })
})
// @from(Start 2502091, End 2502176)
cA0 = Y((xA0) => {
  Object.defineProperty(xA0, "__esModule", {
    value: !0
  })
})
// @from(Start 2502182, End 2502267)
iA0 = Y((pA0) => {
  Object.defineProperty(pA0, "__esModule", {
    value: !0
  })
})
// @from(Start 2502273, End 2502358)
rA0 = Y((nA0) => {
  Object.defineProperty(nA0, "__esModule", {
    value: !0
  })
})
// @from(Start 2502364, End 2502449)
sA0 = Y((aA0) => {
  Object.defineProperty(aA0, "__esModule", {
    value: !0
  })
})
// @from(Start 2502455, End 2502540)
eA0 = Y((oA0) => {
  Object.defineProperty(oA0, "__esModule", {
    value: !0
  })
})
// @from(Start 2502546, End 2502631)
IV0 = Y((tA0) => {
  Object.defineProperty(tA0, "__esModule", {
    value: !0
  })
})
// @from(Start 2502637, End 2502722)
GV0 = Y((dV0) => {
  Object.defineProperty(dV0, "__esModule", {
    value: !0
  })
})
// @from(Start 2502728, End 2502813)
CV0 = Y((ZV0) => {
  Object.defineProperty(ZV0, "__esModule", {
    value: !0
  })
})
// @from(Start 2502819, End 2502904)
wV0 = Y((WV0) => {
  Object.defineProperty(WV0, "__esModule", {
    value: !0
  })
})
// @from(Start 2502910, End 2502995)
AV0 = Y((BV0) => {
  Object.defineProperty(BV0, "__esModule", {
    value: !0
  })
})
// @from(Start 2503001, End 2503086)
XV0 = Y((VV0) => {
  Object.defineProperty(VV0, "__esModule", {
    value: !0
  })
})
// @from(Start 2503092, End 2503397)
_V0 = Y((YV0) => {
  Object.defineProperty(YV0, "__esModule", {
    value: !0
  });
  YV0.RequestHandlerProtocol = void 0;
  var Go4;
  (function(I) {
    I.HTTP_0_9 = "http/0.9", I.HTTP_1_0 = "http/1.0", I.TDS_8_0 = "tds/8.0"
  })(Go4 = YV0.RequestHandlerProtocol || (YV0.RequestHandlerProtocol = {}))
})
// @from(Start 2503403, End 2503488)
HV0 = Y((DV0) => {
  Object.defineProperty(DV0, "__esModule", {
    value: !0
  })
})
// @from(Start 2503494, End 2503579)
gV0 = Y((FV0) => {
  Object.defineProperty(FV0, "__esModule", {
    value: !0
  })
})
// @from(Start 2503585, End 2503670)
KV0 = Y((JV0) => {
  Object.defineProperty(JV0, "__esModule", {
    value: !0
  })
})
// @from(Start 2503676, End 2503761)
zV0 = Y((NV0) => {
  Object.defineProperty(NV0, "__esModule", {
    value: !0
  })
})
// @from(Start 2503767, End 2503852)
fV0 = Y((QV0) => {
  Object.defineProperty(QV0, "__esModule", {
    value: !0
  })
})
// @from(Start 2503858, End 2504948)
qV0 = Y((B5) => {
  Object.defineProperty(B5, "__esModule", {
    value: !0
  });
  var Q5 = x1();
  Q5.__exportStar(rB0(), B5);
  Q5.__exportStar(sB0(), B5);
  Q5.__exportStar(eB0(), B5);
  Q5.__exportStar(IA0(), B5);
  Q5.__exportStar(GA0(), B5);
  Q5.__exportStar(CA0(), B5);
  Q5.__exportStar(YA0(), B5);
  Q5.__exportStar(DA0(), B5);
  Q5.__exportStar(FA0(), B5);
  Q5.__exportStar(JA0(), B5);
  Q5.__exportStar(MA0(), B5);
  Q5.__exportStar(LA0(), B5);
  Q5.__exportStar(PA0(), B5);
  Q5.__exportStar(lA0(), B5);
  Q5.__exportStar(hA0(), B5);
  Q5.__exportStar(kA0(), B5);
  Q5.__exportStar(cA0(), B5);
  Q5.__exportStar(iA0(), B5);
  Q5.__exportStar(rA0(), B5);
  Q5.__exportStar(sA0(), B5);
  Q5.__exportStar(eA0(), B5);
  Q5.__exportStar(IV0(), B5);
  Q5.__exportStar(GV0(), B5);
  Q5.__exportStar(CV0(), B5);
  Q5.__exportStar(wV0(), B5);
  Q5.__exportStar(AV0(), B5);
  Q5.__exportStar(XV0(), B5);
  Q5.__exportStar(_V0(), B5);
  Q5.__exportStar(HV0(), B5);
  Q5.__exportStar(gV0(), B5);
  Q5.__exportStar(KV0(), B5);
  Q5.__exportStar(zV0(), B5);
  Q5.__exportStar(fV0(), B5)
})
// @from(Start 2504954, End 2505607)
EV0 = Y((UV0) => {
  Object.defineProperty(UV0, "__esModule", {
    value: !0
  });
  UV0.Field = void 0;
  var Zo4 = qV0();
  class RV0 {
    constructor({
      name: I,
      kind: d = Zo4.FieldPosition.HEADER,
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
  UV0.Field = RV0
})
// @from(Start 2505613, End 2506222)
yV0 = Y((SV0) => {
  Object.defineProperty(SV0, "__esModule", {
    value: !0
  });
  SV0.Fields = void 0;
  class MV0 {
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
  SV0.Fields = MV0
})
// @from(Start 2506228, End 2506313)
$V0 = Y((PV0) => {
  Object.defineProperty(PV0, "__esModule", {
    value: !0
  })
})
// @from(Start 2506319, End 2507531)
OV0 = Y((uV0) => {
  Object.defineProperty(uV0, "__esModule", {
    value: !0
  });
  uV0.HttpRequest = void 0;
  class cd1 {
    constructor(I) {
      this.method = I.method || "GET", this.hostname = I.hostname || "localhost", this.port = I.port, this.query = I.query || {}, this.headers = I.headers || {}, this.body = I.body, this.protocol = I.protocol ? I.protocol.slice(-1) !== ":" ? `${I.protocol}:` : I.protocol : "https:", this.path = I.path ? I.path.charAt(0) !== "/" ? `/${I.path}` : I.path : "/", this.username = I.username, this.password = I.password, this.fragment = I.fragment
    }
    static isInstance(I) {
      if (!I) return !1;
      let d = I;
      return "method" in d && "protocol" in d && "hostname" in d && "path" in d && typeof d.query === "object" && typeof d.headers === "object"
    }
    clone() {
      let I = new cd1({
        ...this,
        headers: {
          ...this.headers
        }
      });
      if (I.query) I.query = Co4(I.query);
      return I
    }
  }
  uV0.HttpRequest = cd1;

  function Co4(I) {
    return Object.keys(I).reduce((d, G) => {
      let Z = I[G];
      return {
        ...d,
        [G]: Array.isArray(Z) ? [...Z] : Z
      }
    }, {})
  }
})
// @from(Start 2507537, End 2507989)
hV0 = Y((lV0) => {
  Object.defineProperty(lV0, "__esModule", {
    value: !0
  });
  lV0.HttpResponse = void 0;
  class mV0 {
    constructor(I) {
      this.statusCode = I.statusCode, this.reason = I.reason, this.headers = I.headers || {}, this.body = I.body
    }
    static isInstance(I) {
      if (!I) return !1;
      let d = I;
      return typeof d.statusCode === "number" && typeof d.headers === "object"
    }
  }
  lV0.HttpResponse = mV0
})
// @from(Start 2507995, End 2508219)
xV0 = Y((jV0) => {
  Object.defineProperty(jV0, "__esModule", {
    value: !0
  });
  jV0.isValidHostname = void 0;

  function Wo4(I) {
    return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(I)
  }
  jV0.isValidHostname = Wo4
})
// @from(Start 2508225, End 2508310)
pV0 = Y((cV0) => {
  Object.defineProperty(cV0, "__esModule", {
    value: !0
  })
})
// @from(Start 2508316, End 2508625)
Oc = Y((zV) => {
  Object.defineProperty(zV, "__esModule", {
    value: !0
  });
  var ag = x1();
  ag.__exportStar(EV0(), zV);
  ag.__exportStar(yV0(), zV);
  ag.__exportStar($V0(), zV);
  ag.__exportStar(OV0(), zV);
  ag.__exportStar(hV0(), zV);
  ag.__exportStar(xV0(), zV);
  ag.__exportStar(pV0(), zV)
})
// @from(Start 2508631, End 2510069)
pd1 = Y((Xo4) => {
  var wo4 = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
    iV0 = "[:A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][" + wo4 + "]*",
    Bo4 = new RegExp("^" + iV0 + "$"),
    Ao4 = function(I, d) {
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
    Vo4 = function(I) {
      let d = Bo4.exec(I);
      return !(d === null || typeof d === "undefined")
    };
  Xo4.isExist = function(I) {
    return typeof I !== "undefined"
  };
  Xo4.isEmptyObject = function(I) {
    return Object.keys(I).length === 0
  };
  Xo4.merge = function(I, d, G) {
    if (d) {
      let Z = Object.keys(d),
        C = Z.length;
      for (let W = 0; W < C; W++)
        if (G === "strict") I[Z[W]] = [d[Z[W]]];
        else I[Z[W]] = d[Z[W]]
    }
  };
  Xo4.getValue = function(I) {
    if (Xo4.isExist(I)) return I;
    else return ""
  };
  Xo4.isName = Vo4;
  Xo4.getAllMatches = Ao4;
  Xo4.nameRegexp = iV0
})
// @from(Start 2510075, End 2517435)
nd1 = Y((vo4) => {
  var id1 = pd1(),
    Jo4 = {
      allowBooleanAttributes: !1,
      unpairedTags: []
    };
  vo4.validate = function(I, d) {
    d = Object.assign({}, Jo4, d);
    let G = [],
      Z = !1,
      C = !1;
    if (I[0] === "\uFEFF") I = I.substr(1);
    for (let W = 0; W < I.length; W++)
      if (I[W] === "<" && I[W + 1] === "?") {
        if (W += 2, W = aV0(I, W), W.err) return W
      } else if (I[W] === "<") {
      let w = W;
      if (W++, I[W] === "!") {
        W = sV0(I, W);
        continue
      } else {
        let B = !1;
        if (I[W] === "/") B = !0, W++;
        let A = "";
        for (; W < I.length && I[W] !== ">" && I[W] !== " " && I[W] !== "\t" && I[W] !== `
` && I[W] !== "\r"; W++) A += I[W];
        if (A = A.trim(), A[A.length - 1] === "/") A = A.substring(0, A.length - 1), W--;
        if (!Uo4(A)) {
          let _;
          if (A.trim().length === 0) _ = "Invalid space after '<'.";
          else _ = "Tag '" + A + "' is an invalid name.";
          return R6("InvalidTag", _, wd(I, W))
        }
        let V = zo4(I, W);
        if (V === !1) return R6("InvalidAttr", "Attributes for '" + A + "' have open quote.", wd(I, W));
        let X = V.value;
        if (W = V.index, X[X.length - 1] === "/") {
          let _ = W - X.length;
          X = X.substring(0, X.length - 1);
          let F = oV0(X, d);
          if (F === !0) Z = !0;
          else return R6(F.err.code, F.err.msg, wd(I, _ + F.err.line))
        } else if (B)
          if (!V.tagClosed) return R6("InvalidTag", "Closing tag '" + A + "' doesn't have proper closing.", wd(I, W));
          else if (X.trim().length > 0) return R6("InvalidTag", "Closing tag '" + A + "' can't have attributes or invalid starting.", wd(I, w));
        else {
          let _ = G.pop();
          if (A !== _.tagName) {
            let F = wd(I, _.tagStartPos);
            return R6("InvalidTag", "Expected closing tag '" + _.tagName + "' (opened in line " + F.line + ", col " + F.col + ") instead of closing tag '" + A + "'.", wd(I, w))
          }
          if (G.length == 0) C = !0
        } else {
          let _ = oV0(X, d);
          if (_ !== !0) return R6(_.err.code, _.err.msg, wd(I, W - X.length + _.err.line));
          if (C === !0) return R6("InvalidXml", "Multiple possible root nodes found.", wd(I, W));
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
              W++, W = sV0(I, W);
              continue
            } else if (I[W + 1] === "?") {
          if (W = aV0(I, ++W), W.err) return W
        } else break;
        else if (I[W] === "&") {
          let _ = qo4(I, W);
          if (_ == -1) return R6("InvalidChar", "char '&' is not expected.", wd(I, W));
          W = _
        } else if (C === !0 && !rV0(I[W])) return R6("InvalidXml", "Extra text at the end", wd(I, W));
        if (I[W] === "<") W--
      }
    } else {
      if (rV0(I[W])) continue;
      return R6("InvalidChar", "char '" + I[W] + "' is not expected.", wd(I, W))
    }
    if (!Z) return R6("InvalidXml", "Start tag expected.", 1);
    else if (G.length == 1) return R6("InvalidTag", "Unclosed tag '" + G[0].tagName + "'.", wd(I, G[0].tagStartPos));
    else if (G.length > 0) return R6("InvalidXml", "Invalid '" + JSON.stringify(G.map((W) => W.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", {
      line: 1,
      col: 1
    });
    return !0
  };

  function rV0(I) {
    return I === " " || I === "\t" || I === `
` || I === "\r"
  }

  function aV0(I, d) {
    let G = d;
    for (; d < I.length; d++)
      if (I[d] == "?" || I[d] == " ") {
        let Z = I.substr(G, d - G);
        if (d > 5 && Z === "xml") return R6("InvalidXml", "XML declaration allowed only at the start of the document.", wd(I, d));
        else if (I[d] == "?" && I[d + 1] == ">") {
          d++;
          break
        } else continue
      } return d
  }

  function sV0(I, d) {
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
  var Ko4 = '"',
    No4 = "'";

  function zo4(I, d) {
    let G = "",
      Z = "",
      C = !1;
    for (; d < I.length; d++) {
      if (I[d] === Ko4 || I[d] === No4)
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
  var Qo4 = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");

  function oV0(I, d) {
    let G = id1.getAllMatches(I, Qo4),
      Z = {};
    for (let C = 0; C < G.length; C++) {
      if (G[C][1].length === 0) return R6("InvalidAttr", "Attribute '" + G[C][2] + "' has no space in starting.", yL(G[C]));
      else if (G[C][3] !== void 0 && G[C][4] === void 0) return R6("InvalidAttr", "Attribute '" + G[C][2] + "' is without value.", yL(G[C]));
      else if (G[C][3] === void 0 && !d.allowBooleanAttributes) return R6("InvalidAttr", "boolean attribute '" + G[C][2] + "' is not allowed.", yL(G[C]));
      let W = G[C][2];
      if (!Ro4(W)) return R6("InvalidAttr", "Attribute '" + W + "' is an invalid name.", yL(G[C]));
      if (!Z.hasOwnProperty(W)) Z[W] = 1;
      else return R6("InvalidAttr", "Attribute '" + W + "' is repeated.", yL(G[C]))
    }
    return !0
  }

  function fo4(I, d) {
    let G = /\d/;
    if (I[d] === "x") d++, G = /[\da-fA-F]/;
    for (; d < I.length; d++) {
      if (I[d] === ";") return d;
      if (!I[d].match(G)) break
    }
    return -1
  }

  function qo4(I, d) {
    if (d++, I[d] === ";") return -1;
    if (I[d] === "#") return d++, fo4(I, d);
    let G = 0;
    for (; d < I.length; d++, G++) {
      if (I[d].match(/\w/) && G < 20) continue;
      if (I[d] === ";") break;
      return -1
    }
    return d
  }

  function R6(I, d, G) {
    return {
      err: {
        code: I,
        msg: d,
        line: G.line || G,
        col: G.col
      }
    }
  }

  function Ro4(I) {
    return id1.isName(I)
  }

  function Uo4(I) {
    return id1.isName(I)
  }

  function wd(I, d) {
    let G = I.substring(0, d).split(/\r?\n/);
    return {
      line: G.length,
      col: G[G.length - 1].length + 1
    }
  }

  function yL(I) {
    return I.startIndex + I[1].length
  }
})
// @from(Start 2517441, End 2518453)
tV0 = Y((So4) => {
  var eV0 = {
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
    Mo4 = function(I) {
      return Object.assign({}, eV0, I)
    };
  So4.buildOptions = Mo4;
  So4.defaultOptions = eV0
})
// @from(Start 2518459, End 2519014)
GX0 = Y((Ct9, dX0) => {
  class IX0 {
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
  dX0.exports = IX0
})
// @from(Start 2519020, End 2520967)
CX0 = Y((Wt9, ZX0) => {
  function Po4(I, d) {
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
          if (W) uo4(B, G), W = !1;
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
  var $o4 = RegExp(`^\\s([a-zA-z0-0]+)[ 	](['"])([^&]+)\\2`);

  function uo4(I, d) {
    let G = $o4.exec(I);
    if (G) d[G[1]] = {
      regx: RegExp(`&${G[1]};`, "g"),
      val: G[3]
    }
  }
  ZX0.exports = Po4
})
// @from(Start 2520973, End 2522956)
mc = Y((wt9, WX0) => {
  var To4 = /^[-+]?0x[a-fA-F0-9]+$/,
    Oo4 = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
  if (!Number.parseInt && window.parseInt) Number.parseInt = window.parseInt;
  if (!Number.parseFloat && window.parseFloat) Number.parseFloat = window.parseFloat;
  var mo4 = {
    hex: !0,
    leadingZeros: !0,
    decimalPoint: ".",
    eNotation: !0
  };

  function lo4(I, d = {}) {
    if (d = Object.assign({}, mo4, d), !I || typeof I !== "string") return I;
    let G = I.trim();
    if (d.skipLike !== void 0 && d.skipLike.test(G)) return I;
    else if (d.hex && To4.test(G)) return Number.parseInt(G, 16);
    else {
      let Z = Oo4.exec(G);
      if (Z) {
        let C = Z[1],
          W = Z[2],
          w = bo4(Z[3]),
          B = Z[4] || Z[6];
        if (!d.leadingZeros && W.length > 0 && C && G[2] !== ".") return I;
        else if (!d.leadingZeros && W.length > 0 && !C && G[1] !== ".") return I;
        else {
          let A = Number(G),
            V = "" + A;
          if (V.search(/[eE]/) !== -1)
            if (d.eNotation) return A;
            else return I;
          else if (B)
            if (d.eNotation) return A;
            else return I;
          else if (G.indexOf(".") !== -1)
            if (V === "0" && w === "") return A;
            else if (V === w) return A;
          else if (C && V === "-" + w) return A;
          else return I;
          if (W)
            if (w === V) return A;
            else if (C + w === V) return A;
          else return I;
          if (G === V) return A;
          else if (G === C + V) return A;
          return I
        }
      } else return I
    }
  }

  function bo4(I) {
    if (I && I.indexOf(".") !== -1) {
      if (I = I.replace(/0+$/, ""), I === ".") I = "0";
      else if (I[0] === ".") I = "0" + I;
      else if (I[I.length - 1] === ".") I = I.substr(0, I.length - 1);
      return I
    }
    return I
  }
  WX0.exports = lo4
})
// @from(Start 2522962, End 2534633)
AX0 = Y((At9, BX0) => {
  var sd1 = pd1(),
    PL = GX0(),
    ho4 = CX0(),
    jo4 = mc(),
    Bt9 = "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, sd1.nameRegexp);
  class wX0 {
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
      }, this.addExternalEntities = ko4, this.parseXml = no4, this.parseTextData = xo4, this.resolveNameSpace = co4, this.buildAttributesMap = io4, this.isItStopNode = so4, this.replaceEntitiesValue = ro4, this.readStopNodeData = eo4, this.saveTextToParentTag = ao4
    }
  }

  function ko4(I) {
    let d = Object.keys(I);
    for (let G = 0; G < d.length; G++) {
      let Z = d[G];
      this.lastEntities[Z] = {
        regex: new RegExp("&" + Z + ";", "g"),
        val: I[Z]
      }
    }
  }

  function xo4(I, d, G, Z, C, W, w) {
    if (I !== void 0) {
      if (this.options.trimValues && !Z) I = I.trim();
      if (I.length > 0) {
        if (!w) I = this.replaceEntitiesValue(I);
        let B = this.options.tagValueProcessor(d, I, G, C, W);
        if (B === null || B === void 0) return I;
        else if (typeof B !== typeof I || B !== I) return B;
        else if (this.options.trimValues) return ad1(I, this.options.parseTagValue, this.options.numberParseOptions);
        else if (I.trim() === I) return ad1(I, this.options.parseTagValue, this.options.numberParseOptions);
        else return I
      }
    }
  }

  function co4(I) {
    if (this.options.removeNSPrefix) {
      let d = I.split(":"),
        G = I.charAt(0) === "/" ? "/" : "";
      if (d[0] === "xmlns") return "";
      if (d.length === 2) I = G + d[1]
    }
    return I
  }
  var po4 = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");

  function io4(I, d) {
    if (!this.options.ignoreAttributes && typeof I === "string") {
      let G = sd1.getAllMatches(I, po4),
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
            else C[A] = ad1(B, this.options.parseAttributeValue, this.options.numberParseOptions)
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
  var no4 = function(I) {
      I = I.replace(/\r\n?/g, `
`);
      let d = new PL("!xml"),
        G = d,
        Z = "",
        C = "";
      for (let W = 0; W < I.length; W++)
        if (I[W] === "<")
          if (I[W + 1] === "/") {
            let B = sg(I, ">", W, "Closing Tag is not closed."),
              A = I.substring(W + 2, B).trim();
            if (this.options.removeNSPrefix) {
              let V = A.indexOf(":");
              if (V !== -1) A = A.substr(V + 1)
            }
            if (this.options.transformTagName) A = this.options.transformTagName(A);
            if (G) Z = this.saveTextToParentTag(Z, G, C);
            C = C.substr(0, C.lastIndexOf(".")), G = this.tagsNodeStack.pop(), Z = "", W = B
          } else if (I[W + 1] === "?") {
        let B = rd1(I, W, !1, "?>");
        if (!B) throw new Error("Pi Tag is not closed.");
        if (Z = this.saveTextToParentTag(Z, G, C), this.options.ignoreDeclaration && B.tagName === "?xml" || this.options.ignorePiTags);
        else {
          let A = new PL(B.tagName);
          if (A.add(this.options.textNodeName, ""), B.tagName !== B.tagExp && B.attrExpPresent) A[":@"] = this.buildAttributesMap(B.tagExp, C);
          G.addChild(A)
        }
        W = B.closeIndex + 1
      } else if (I.substr(W + 1, 3) === "!--") {
        let B = sg(I, "-->", W + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          let A = I.substring(W + 4, B - 2);
          Z = this.saveTextToParentTag(Z, G, C), G.add(this.options.commentPropName, [{
            [this.options.textNodeName]: A
          }])
        }
        W = B
      } else if (I.substr(W + 1, 2) === "!D") {
        let B = ho4(I, W);
        this.docTypeEntities = B.entities, W = B.i
      } else if (I.substr(W + 1, 2) === "![") {
        let B = sg(I, "]]>", W, "CDATA is not closed.") - 2,
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
        let B = rd1(I, W, this.options.removeNSPrefix),
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
          let J = new PL(A);
          if (A !== V && X) J[":@"] = this.buildAttributesMap(V, C);
          if (g) g = this.parseTextData(g, A, C, !0, X, !0, !0);
          C = C.substr(0, C.lastIndexOf(".")), J.add(this.options.textNodeName, g), G.addChild(J)
        } else {
          if (V.length > 0 && V.lastIndexOf("/") === V.length - 1) {
            if (A[A.length - 1] === "/") A = A.substr(0, A.length - 1), V = A;
            else V = V.substr(0, V.length - 1);
            if (this.options.transformTagName) A = this.options.transformTagName(A);
            let g = new PL(A);
            if (A !== V && X) g[":@"] = this.buildAttributesMap(V, C);
            C = C.substr(0, C.lastIndexOf(".")), G.addChild(g)
          } else {
            let g = new PL(A);
            if (this.tagsNodeStack.push(G), A !== V && X) g[":@"] = this.buildAttributesMap(V, C);
            G.addChild(g), G = g
          }
          Z = "", W = _
        }
      } else Z += I[W];
      return d.child
    },
    ro4 = function(I) {
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

  function ao4(I, d, G, Z) {
    if (I) {
      if (Z === void 0) Z = Object.keys(d.child).length === 0;
      if (I = this.parseTextData(I, d.tagname, G, !1, d[":@"] ? Object.keys(d[":@"]).length !== 0 : !1, Z), I !== void 0 && I !== "") d.add(this.options.textNodeName, I);
      I = ""
    }
    return I
  }

  function so4(I, d, G) {
    let Z = "*." + G;
    for (let C in I) {
      let W = I[C];
      if (Z === W || d === W) return !0
    }
    return !1
  }

  function oo4(I, d, G = ">") {
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

  function sg(I, d, G, Z) {
    let C = I.indexOf(d, G);
    if (C === -1) throw new Error(Z);
    else return C + d.length - 1
  }

  function rd1(I, d, G, Z = ">") {
    let C = oo4(I, d + 1, Z);
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

  function eo4(I, d, G) {
    let Z = G,
      C = 1;
    for (; G < I.length; G++)
      if (I[G] === "<")
        if (I[G + 1] === "/") {
          let W = sg(I, ">", G, `${d} is not closed`);
          if (I.substring(G + 2, W).trim() === d) {
            if (C--, C === 0) return {
              tagContent: I.substring(Z, G),
              i: W
            }
          }
          G = W
        } else if (I[G + 1] === "?") G = sg(I, "?>", G + 1, "StopNode is not closed.");
    else if (I.substr(G + 1, 3) === "!--") G = sg(I, "-->", G + 3, "StopNode is not closed.");
    else if (I.substr(G + 1, 2) === "![") G = sg(I, "]]>", G, "StopNode is not closed.") - 2;
    else {
      let W = rd1(I, G, ">");
      if (W) {
        if ((W && W.tagName) === d && W.tagExp[W.tagExp.length - 1] !== "/") C++;
        G = W.closeIndex
      }
    }
  }

  function ad1(I, d, G) {
    if (d && typeof I === "string") {
      let Z = I.trim();
      if (Z === "true") return !0;
      else if (Z === "false") return !1;
      else return jo4(I, G)
    } else if (sd1.isExist(I)) return I;
    else return ""
  }
  BX0.exports = wX0
})
// @from(Start 2534639, End 2536360)
XX0 = Y((Ze4) => {
  function to4(I, d) {
    return VX0(I, d)
  }

  function VX0(I, d, G) {
    let Z, C = {};
    for (let W = 0; W < I.length; W++) {
      let w = I[W],
        B = Ie4(w),
        A = "";
      if (G === void 0) A = B;
      else A = G + "." + B;
      if (B === d.textNodeName)
        if (Z === void 0) Z = w[B];
        else Z += "" + w[B];
      else if (B === void 0) continue;
      else if (w[B]) {
        let V = VX0(w[B], d, A),
          X = Ge4(V, d);
        if (w[":@"]) de4(V, w[":@"], A, d);
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

  function Ie4(I) {
    let d = Object.keys(I);
    for (let G = 0; G < d.length; G++) {
      let Z = d[G];
      if (Z !== ":@") return Z
    }
  }

  function de4(I, d, G, Z) {
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

  function Ge4(I, d) {
    let G = Object.keys(I).length;
    if (G === 0 || G === 1 && I[d.textNodeName]) return !0;
    return !1
  }
  Ze4.prettify = to4
})
// @from(Start 2536366, End 2537573)
DX0 = Y((Xt9, _X0) => {
  var {
    buildOptions: We4
  } = tV0(), we4 = AX0(), {
    prettify: Be4
  } = XX0(), Ae4 = nd1();
  class YX0 {
    constructor(I) {
      this.externalEntities = {}, this.options = We4(I)
    }
    parse(I, d) {
      if (typeof I === "string");
      else if (I.toString) I = I.toString();
      else throw new Error("XML data is accepted in String or Bytes[] form.");
      if (d) {
        if (d === !0) d = {};
        let C = Ae4.validate(I, d);
        if (C !== !0) throw Error(`${C.err.msg}:${C.err.line}:${C.err.col}`)
      }
      let G = new we4(this.options);
      G.addExternalEntities(this.externalEntities);
      let Z = G.parseXml(I);
      if (this.options.preserveOrder || Z === void 0) return Z;
      else return Be4(Z, this.options)
    }
    addEntity(I, d) {
      if (d.indexOf("&") !== -1) throw new Error("Entity value can't have '&'");
      else if (I.indexOf("&") !== -1 || I.indexOf(";") !== -1) throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
      else if (d === "&") throw new Error("An entity with value '&' is not permitted");
      else this.externalEntities[I] = d
    }
  }
  _X0.exports = YX0
})
// @from(Start 2537579, End 2540280)
KX0 = Y((Yt9, JX0) => {
  function Ve4(I, d) {
    let G = "";
    if (d.format && d.indentBy.length > 0) G = `
`;
    return FX0(I, d, "", G)
  }

  function FX0(I, d, G, Z) {
    let C = "",
      W = !1;
    for (let w = 0; w < I.length; w++) {
      let B = I[w],
        A = Xe4(B),
        V = "";
      if (G.length === 0) V = A;
      else V = `${G}.${A}`;
      if (A === d.textNodeName) {
        let J = B[A];
        if (!Ye4(V, d)) J = d.tagValueProcessor(A, J), J = gX0(J, d);
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
        let J = HX0(B[":@"], d),
          K = A === "?xml" ? "" : Z,
          Q = B[A][0][d.textNodeName];
        Q = Q.length !== 0 ? " " + Q : "", C += K + `<${A}${Q}${J}?>`, W = !0;
        continue
      }
      let X = Z;
      if (X !== "") X += d.indentBy;
      let _ = HX0(B[":@"], d),
        F = Z + `<${A}${_}`,
        g = FX0(B[A], d, V, X);
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

  function Xe4(I) {
    let d = Object.keys(I);
    for (let G = 0; G < d.length; G++) {
      let Z = d[G];
      if (Z !== ":@") return Z
    }
  }

  function HX0(I, d) {
    let G = "";
    if (I && !d.ignoreAttributes)
      for (let Z in I) {
        let C = d.attributeValueProcessor(Z, I[Z]);
        if (C = gX0(C, d), C === !0 && d.suppressBooleanAttributes) G += ` ${Z.substr(d.attributeNamePrefix.length)}`;
        else G += ` ${Z.substr(d.attributeNamePrefix.length)}="${C}"`
      }
    return G
  }

  function Ye4(I, d) {
    I = I.substr(0, I.length - d.textNodeName.length - 1);
    let G = I.substr(I.lastIndexOf(".") + 1);
    for (let Z in d.stopNodes)
      if (d.stopNodes[Z] === I || d.stopNodes[Z] === "*." + G) return !0;
    return !1
  }

  function gX0(I, d) {
    if (I && I.length > 0 && d.processEntities)
      for (let G = 0; G < d.entities.length; G++) {
        let Z = d.entities[G];
        I = I.replace(Z.regex, Z.val)
      }
    return I
  }
  JX0.exports = Ve4
})
// @from(Start 2540286, End 2546433)
zX0 = Y((_t9, NX0) => {
  var _e4 = KX0(),
    De4 = {
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

  function O_(I) {
    if (this.options = Object.assign({}, De4, I), this.options.ignoreAttributes || this.options.attributesGroupName) this.isAttribute = function() {
      return !1
    };
    else this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = ge4;
    if (this.processTextOrObjNode = He4, this.options.format) this.indentate = Fe4, this.tagEndChar = `>
`, this.newLine = `
`;
    else this.indentate = function() {
      return ""
    }, this.tagEndChar = ">", this.newLine = ""
  }
  O_.prototype.build = function(I) {
    if (this.options.preserveOrder) return _e4(I, this.options);
    else {
      if (Array.isArray(I) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) I = {
        [this.options.arrayNodeName]: I
      };
      return this.j2x(I, 0).val
    }
  };
  O_.prototype.j2x = function(I, d) {
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
  O_.prototype.buildAttrPairStr = function(I, d) {
    if (d = this.options.attributeValueProcessor(I, "" + d), d = this.replaceEntitiesValue(d), this.options.suppressBooleanAttributes && d === "true") return " " + I;
    else return " " + I + '="' + d + '"'
  };

  function He4(I, d, G) {
    let Z = this.j2x(I, G + 1);
    if (I[this.options.textNodeName] !== void 0 && Object.keys(I).length === 1) return this.buildTextValNode(I[this.options.textNodeName], d, Z.attrStr, G);
    else return this.buildObjectNode(Z.val, d, Z.attrStr, G)
  }
  O_.prototype.buildObjectNode = function(I, d, G, Z) {
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
  O_.prototype.closeTag = function(I) {
    let d = "";
    if (this.options.unpairedTags.indexOf(I) !== -1) {
      if (!this.options.suppressUnpairedNode) d = "/"
    } else if (this.options.suppressEmptyNode) d = "/";
    else d = `></${I}`;
    return d
  };
  O_.prototype.buildTextValNode = function(I, d, G, Z) {
    if (this.options.cdataPropName !== !1 && d === this.options.cdataPropName) return this.indentate(Z) + `<![CDATA[${I}]]>` + this.newLine;
    else if (this.options.commentPropName !== !1 && d === this.options.commentPropName) return this.indentate(Z) + `<!--${I}-->` + this.newLine;
    else if (d[0] === "?") return this.indentate(Z) + "<" + d + G + "?" + this.tagEndChar;
    else {
      let C = this.options.tagValueProcessor(d, I);
      if (C = this.replaceEntitiesValue(C), C === "") return this.indentate(Z) + "<" + d + G + this.closeTag(d) + this.tagEndChar;
      else return this.indentate(Z) + "<" + d + G + ">" + C + "</" + d + this.tagEndChar
    }
  };
  O_.prototype.replaceEntitiesValue = function(I) {
    if (I && I.length > 0 && this.options.processEntities)
      for (let d = 0; d < this.options.entities.length; d++) {
        let G = this.options.entities[d];
        I = I.replace(G.regex, G.val)
      }
    return I
  };

  function Fe4(I) {
    return this.options.indentBy.repeat(I)
  }

  function ge4(I) {
    if (I.startsWith(this.options.attributeNamePrefix)) return I.substr(this.attrPrefixLen);
    else return !1
  }
  NX0.exports = O_
})
// @from(Start 2546439, End 2546603)
fX0 = Y((Dt9, QX0) => {
  var Je4 = nd1(),
    Ke4 = DX0(),
    Ne4 = zX0();
  QX0.exports = {
    XMLParser: Ke4,
    XMLValidator: Je4,
    XMLBuilder: Ne4
  }
})