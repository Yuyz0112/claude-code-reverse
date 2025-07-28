
// @from(Start 2266582, End 2269853)
o20 = Y((s20, Dx) => {
  s20.formatArgs = Hl4;
  s20.save = Fl4;
  s20.load = gl4;
  s20.useColors = Dl4;
  s20.storage = Jl4();
  s20.destroy = (() => {
    let I = !1;
    return () => {
      if (!I) I = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
    }
  })();
  s20.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];

  function Dl4() {
    if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) return !0;
    if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
    let I;
    return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && (I = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(I[1], 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
  }

  function Hl4(I) {
    if (I[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + I[0] + (this.useColors ? "%c " : " ") + "+" + Dx.exports.humanize(this.diff), !this.useColors) return;
    let d = "color: " + this.color;
    I.splice(1, 0, d, "color: inherit");
    let G = 0,
      Z = 0;
    I[0].replace(/%[a-zA-Z%]/g, (C) => {
      if (C === "%%") return;
      if (G++, C === "%c") Z = G
    }), I.splice(Z, 0, d)
  }
  s20.log = console.debug || console.log || (() => {});

  function Fl4(I) {
    try {
      if (I) s20.storage.setItem("debug", I);
      else s20.storage.removeItem("debug")
    } catch (d) {}
  }

  function gl4() {
    let I;
    try {
      I = s20.storage.getItem("debug")
    } catch (d) {}
    if (!I && typeof process !== "undefined" && "env" in process) I = process.env.DEBUG;
    return I
  }

  function Jl4() {
    try {
      return localStorage
    } catch (I) {}
  }
  Dx.exports = m81()(s20);
  var {
    formatters: Kl4
  } = Dx.exports;
  Kl4.j = function(I) {
    try {
      return JSON.stringify(I)
    } catch (d) {
      return "[UnexpectedJSONParseError]: " + d.message
    }
  }
})
// @from(Start 2269859, End 2270096)
l81 = Y((wc9, e20) => {
  e20.exports = (I, d = process.argv) => {
    let G = I.startsWith("-") ? "" : I.length === 1 ? "-" : "--",
      Z = d.indexOf(G + I),
      C = d.indexOf("--");
    return Z !== -1 && (C === -1 || Z < C)
  }
})
// @from(Start 2270102, End 2272252)
Hx = Y((Bc9, I40) => {
  var vl4 = B1("os"),
    t20 = B1("tty"),
    HZ = l81(),
    {
      env: g8
    } = process,
    J_;
  if (HZ("no-color") || HZ("no-colors") || HZ("color=false") || HZ("color=never")) J_ = 0;
  else if (HZ("color") || HZ("colors") || HZ("color=true") || HZ("color=always")) J_ = 1;
  if ("FORCE_COLOR" in g8)
    if (g8.FORCE_COLOR === "true") J_ = 1;
    else if (g8.FORCE_COLOR === "false") J_ = 0;
  else J_ = g8.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(g8.FORCE_COLOR, 10), 3);

  function b81(I) {
    if (I === 0) return !1;
    return {
      level: I,
      hasBasic: !0,
      has256: I >= 2,
      has16m: I >= 3
    }
  }

  function h81(I, d) {
    if (J_ === 0) return 0;
    if (HZ("color=16m") || HZ("color=full") || HZ("color=truecolor")) return 3;
    if (HZ("color=256")) return 2;
    if (I && !d && J_ === void 0) return 0;
    let G = J_ || 0;
    if (g8.TERM === "dumb") return G;
    if (process.platform === "win32") {
      let Z = vl4.release().split(".");
      if (Number(Z[0]) >= 10 && Number(Z[2]) >= 10586) return Number(Z[2]) >= 14931 ? 3 : 2;
      return 1
    }
    if ("CI" in g8) {
      if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((Z) => (Z in g8)) || g8.CI_NAME === "codeship") return 1;
      return G
    }
    if ("TEAMCITY_VERSION" in g8) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(g8.TEAMCITY_VERSION) ? 1 : 0;
    if (g8.COLORTERM === "truecolor") return 3;
    if ("TERM_PROGRAM" in g8) {
      let Z = parseInt((g8.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (g8.TERM_PROGRAM) {
        case "iTerm.app":
          return Z >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2
      }
    }
    if (/-256(color)?$/i.test(g8.TERM)) return 2;
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(g8.TERM)) return 1;
    if ("COLORTERM" in g8) return 1;
    return G
  }

  function El4(I) {
    let d = h81(I, I && I.isTTY);
    return b81(d)
  }
  I40.exports = {
    supportsColor: El4,
    stdout: b81(h81(!0, t20.isatty(1))),
    stderr: b81(h81(!0, t20.isatty(2)))
  }
})
// @from(Start 2272258, End 2274941)
C40 = Y((G40, gx) => {
  var Ml4 = B1("tty"),
    Fx = B1("util");
  G40.init = Tl4;
  G40.log = Pl4;
  G40.formatArgs = Ll4;
  G40.save = $l4;
  G40.load = ul4;
  G40.useColors = Sl4;
  G40.destroy = Fx.deprecate(() => {}, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  G40.colors = [6, 2, 3, 4, 5, 1];
  try {
    let I = Hx();
    if (I && (I.stderr || I).level >= 2) G40.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221]
  } catch (I) {}
  G40.inspectOpts = Object.keys(process.env).filter((I) => {
    return /^debug_/i.test(I)
  }).reduce((I, d) => {
    let G = d.substring(6).toLowerCase().replace(/_([a-z])/g, (C, W) => {
        return W.toUpperCase()
      }),
      Z = process.env[d];
    if (/^(yes|on|true|enabled)$/i.test(Z)) Z = !0;
    else if (/^(no|off|false|disabled)$/i.test(Z)) Z = !1;
    else if (Z === "null") Z = null;
    else Z = Number(Z);
    return I[G] = Z, I
  }, {});

  function Sl4() {
    return "colors" in G40.inspectOpts ? Boolean(G40.inspectOpts.colors) : Ml4.isatty(process.stderr.fd)
  }

  function Ll4(I) {
    let {
      namespace: d,
      useColors: G
    } = this;
    if (G) {
      let Z = this.color,
        C = "\x1B[3" + (Z < 8 ? Z : "8;5;" + Z),
        W = `  ${C};1m${d} \x1B[0m`;
      I[0] = W + I[0].split(`
`).join(`
` + W), I.push(C + "m+" + gx.exports.humanize(this.diff) + "\x1B[0m")
    } else I[0] = yl4() + d + " " + I[0]
  }

  function yl4() {
    if (G40.inspectOpts.hideDate) return "";
    return new Date().toISOString() + " "
  }

  function Pl4(...I) {
    return process.stderr.write(Fx.formatWithOptions(G40.inspectOpts, ...I) + `
`)
  }

  function $l4(I) {
    if (I) process.env.DEBUG = I;
    else delete process.env.DEBUG
  }

  function ul4() {
    return process.env.DEBUG
  }

  function Tl4(I) {
    I.inspectOpts = {};
    let d = Object.keys(G40.inspectOpts);
    for (let G = 0; G < d.length; G++) I.inspectOpts[d[G]] = G40.inspectOpts[d[G]]
  }
  gx.exports = m81()(G40);
  var {
    formatters: d40
  } = gx.exports;
  d40.o = function(I) {
    return this.inspectOpts.colors = this.useColors, Fx.inspect(I, this.inspectOpts).split(`
`).map((d) => d.trim()).join(" ")
  };
  d40.O = function(I) {
    return this.inspectOpts.colors = this.useColors, Fx.inspect(I, this.inspectOpts)
  }
})
// @from(Start 2274947, End 2275113)
qS = Y((Vc9, j81) => {
  if (typeof process === "undefined" || process.type === "renderer" || !1 || process.__nwjs) j81.exports = o20();
  else j81.exports = C40()
})
// @from(Start 2275119, End 2283325)
Y40 = Y((ed) => {
  var __dirname = "/Users/boris/code/claude-cli/node_modules/spawn-rx/lib/src",
    FZ = ed && ed.__assign || function() {
      return FZ = Object.assign || function(I) {
        for (var d, G = 1, Z = arguments.length; G < Z; G++) {
          d = arguments[G];
          for (var C in d)
            if (Object.prototype.hasOwnProperty.call(d, C)) I[C] = d[C]
        }
        return I
      }, FZ.apply(this, arguments)
    },
    xl4 = ed && ed.__rest || function(I, d) {
      var G = {};
      for (var Z in I)
        if (Object.prototype.hasOwnProperty.call(I, Z) && d.indexOf(Z) < 0) G[Z] = I[Z];
      if (I != null && typeof Object.getOwnPropertySymbols === "function") {
        for (var C = 0, Z = Object.getOwnPropertySymbols(I); C < Z.length; C++)
          if (d.indexOf(Z[C]) < 0 && Object.prototype.propertyIsEnumerable.call(I, Z[C])) G[Z[C]] = I[Z[C]]
      }
      return G
    },
    cl4 = ed && ed.__spreadArray || function(I, d, G) {
      if (G || arguments.length === 2) {
        for (var Z = 0, C = d.length, W; Z < C; Z++)
          if (W || !(Z in d)) {
            if (!W) W = Array.prototype.slice.call(d, 0, Z);
            W[Z] = d[Z]
          }
      }
      return I.concat(W || Array.prototype.slice.call(d))
    };
  Object.defineProperty(ed, "__esModule", {
    value: !0
  });
  ed.findActualExecutable = Jx;
  ed.spawnDetached = k81;
  ed.spawn = vS;
  ed.spawnDetachedPromise = rl4;
  ed.spawnPromise = al4;
  var RS = B1("path"),
    pl4 = B1("net"),
    US = B1("fs"),
    K_ = k20(),
    W40 = r20(),
    il4 = B1("child_process"),
    nl4 = qS(),
    A40 = process.platform === "win32",
    Vf = nl4.default("spawn-rx");

  function w40(I) {
    try {
      return US.statSync(I)
    } catch (d) {
      return null
    }
  }

  function B40(I) {
    if (I.match(/[\\/]/)) return Vf("Path has slash in directory, bailing"), I;
    var d = RS.join(".", I);
    if (w40(d)) return Vf("Found executable in currect directory: ".concat(d)), US.realpathSync(d);
    var G = process.env.PATH.split(A40 ? ";" : ":");
    for (var Z = 0, C = G; Z < C.length; Z++) {
      var W = C[Z],
        w = RS.join(W, I);
      if (w40(w)) return US.realpathSync(w)
    }
    return Vf("Failed to find executable anywhere in path"), I
  }

  function Jx(I, d) {
    if (process.platform !== "win32") return {
      cmd: B40(I),
      args: d
    };
    if (!US.existsSync(I)) {
      var G = [".exe", ".bat", ".cmd", ".ps1"];
      for (var Z = 0, C = G; Z < C.length; Z++) {
        var W = C[Z],
          w = B40("".concat(I).concat(W));
        if (US.existsSync(w)) return Jx(w, d)
      }
    }
    if (I.match(/\.ps1$/i)) {
      var B = RS.join(process.env.SYSTEMROOT, "System32", "WindowsPowerShell", "v1.0", "PowerShell.exe"),
        A = ["-ExecutionPolicy", "Unrestricted", "-NoLogo", "-NonInteractive", "-File", I];
      return {
        cmd: B,
        args: A.concat(d)
      }
    }
    if (I.match(/\.(bat|cmd)$/i)) {
      var B = RS.join(process.env.SYSTEMROOT, "System32", "cmd.exe"),
        V = cl4(["/C", I], d, !0);
      return {
        cmd: B,
        args: V
      }
    }
    if (I.match(/\.(js)$/i)) {
      var B = process.execPath,
        X = [I];
      return {
        cmd: B,
        args: X.concat(d)
      }
    }
    return {
      cmd: I,
      args: d
    }
  }

  function k81(I, d, G) {
    var Z = Jx(I, d !== null && d !== void 0 ? d : []),
      C = Z.cmd,
      W = Z.args;
    if (!A40) return vS(C, W, Object.assign({}, G || {}, {
      detached: !0
    }));
    var w = [C].concat(W),
      B = RS.join(__dirname, "..", "..", "vendor", "jobber", "Jobber.exe"),
      A = FZ(FZ({}, G !== null && G !== void 0 ? G : {}), {
        detached: !0,
        jobber: !0
      });
    return Vf("spawnDetached: ".concat(B, ", ").concat(w)), vS(B, w, A)
  }

  function vS(I, d, G) {
    G = G !== null && G !== void 0 ? G : {};
    var Z = new K_.Observable(function(C) {
      var {
        stdin: W,
        jobber: w,
        split: B,
        encoding: A
      } = G, V = xl4(G, ["stdin", "jobber", "split", "encoding"]), X = Jx(I, d), _ = X.cmd, F = X.args;
      Vf("spawning process: ".concat(_, " ").concat(F.join(), ", ").concat(JSON.stringify(V)));
      var g = il4.spawn(_, F, V),
        J = function(P) {
          return function($) {
            if ($.length < 1) return;
            if (G.echoOutput)(P === "stdout" ? process.stdout : process.stderr).write($);
            var h = "<< String sent back was too long >>";
            try {
              if (typeof $ === "string") h = $.toString();
              else h = $.toString(A || "utf8")
            } catch (O) {
              h = "<< Lost chunk of process output for ".concat(I, " - length was ").concat($.length, ">>")
            }
            C.next({
              source: P,
              text: h
            })
          }
        },
        K = new K_.Subscription;
      if (G.stdin)
        if (g.stdin) K.add(G.stdin.subscribe({
          next: function(P) {
            return g.stdin.write(P)
          },
          error: C.error.bind(C),
          complete: function() {
            return g.stdin.end()
          }
        }));
        else C.error(new Error("opts.stdio conflicts with provided spawn opts.stdin observable, 'pipe' is required"));
      var Q = null,
        E = null,
        S = !1;
      if (g.stdout) E = new K_.AsyncSubject, g.stdout.on("data", J("stdout")), g.stdout.on("close", function() {
        E.next(!0), E.complete()
      });
      else E = K_.of(!0);
      if (g.stderr) Q = new K_.AsyncSubject, g.stderr.on("data", J("stderr")), g.stderr.on("close", function() {
        Q.next(!0), Q.complete()
      });
      else Q = K_.of(!0);
      return g.on("error", function(P) {
        S = !0, C.error(P)
      }), g.on("close", function(P) {
        S = !0;
        var $ = K_.merge(E, Q).pipe(W40.reduce(function(h) {
          return h
        }, !0));
        if (P === 0) $.subscribe(function() {
          return C.complete()
        });
        else $.subscribe(function() {
          var h = new Error("Failed with exit code: ".concat(P));
          h.exitCode = P, h.code = P, C.error(h)
        })
      }), K.add(new K_.Subscription(function() {
        if (S) return;
        if (Vf("Killing process: ".concat(_, " ").concat(F.join())), G.jobber) pl4.connect("\\\\.\\pipe\\jobber-".concat(g.pid)), setTimeout(function() {
          return g.kill()
        }, 5000);
        else g.kill()
      })), K
    });
    return G.split ? Z : Z.pipe(W40.map(function(C) {
      return C === null || C === void 0 ? void 0 : C.text
    }))
  }

  function V40(I) {
    return new Promise(function(d, G) {
      var Z = "";
      I.subscribe({
        next: function(C) {
          return Z += C
        },
        error: function(C) {
          var W = new Error("".concat(Z, `
`).concat(C.message));
          if ("exitCode" in C) W.exitCode = C.exitCode, W.code = C.exitCode;
          G(W)
        },
        complete: function() {
          return d(Z)
        }
      })
    })
  }

  function X40(I) {
    return new Promise(function(d, G) {
      var Z = "",
        C = "";
      I.subscribe({
        next: function(W) {
          return W.source === "stdout" ? Z += W.text : C += W.text
        },
        error: function(W) {
          var w = new Error("".concat(Z, `
`).concat(W.message));
          if ("exitCode" in W) w.exitCode = W.exitCode, w.code = W.exitCode, w.stdout = Z, w.stderr = C;
          G(w)
        },
        complete: function() {
          return d([Z, C])
        }
      })
    })
  }

  function rl4(I, d, G) {
    if (G === null || G === void 0 ? void 0 : G.split) return X40(k81(I, d, FZ(FZ({}, G !== null && G !== void 0 ? G : {}), {
      split: !0
    })));
    else return V40(k81(I, d, FZ(FZ({}, G !== null && G !== void 0 ? G : {}), {
      split: !1
    })))
  }

  function al4(I, d, G) {
    if (G === null || G === void 0 ? void 0 : G.split) return X40(vS(I, d, FZ(FZ({}, G !== null && G !== void 0 ? G : {}), {
      split: !0
    })));
    else return V40(vS(I, d, FZ(FZ({}, G !== null && G !== void 0 ? G : {}), {
      split: !1
    })))
  }
})
// @from(Start 2283331, End 2283437)
h40 = Y((Gp9, b40) => {
  var zb4 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  b40.exports = zb4
})
// @from(Start 2283443, End 2284410)
c40 = Y((Zp9, x40) => {
  var Qb4 = h40();

  function j40() {}

  function k40() {}
  k40.resetWarningCache = j40;
  x40.exports = function() {
    function I(Z, C, W, w, B, A) {
      if (A === Qb4) return;
      var V = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      throw V.name = "Invariant Violation", V
    }
    I.isRequired = I;

    function d() {
      return I
    }
    var G = {
      array: I,
      bigint: I,
      bool: I,
      func: I,
      number: I,
      object: I,
      string: I,
      symbol: I,
      any: I,
      arrayOf: d,
      element: I,
      elementType: I,
      instanceOf: d,
      node: I,
      objectOf: d,
      oneOf: d,
      oneOfType: d,
      shape: d,
      exact: d,
      checkPropTypes: k40,
      resetWarningCache: j40
    };
    return G.PropTypes = G, G
  }
})
// @from(Start 2284416, End 2284482)
i40 = Y((wp9, p40) => {
  p40.exports = c40()();
  var Cp9, Wp9
})
// @from(Start 2284488, End 2286154)
o40 = Y((Ap9, s40) => {
  var fb4 = Hx(),
    Hf = l81();

  function a40(I) {
    if (/^\d{3,4}$/.test(I)) {
      let G = /(\d{1,2})(\d{2})/.exec(I);
      return {
        major: 0,
        minor: parseInt(G[1], 10),
        patch: parseInt(G[2], 10)
      }
    }
    let d = (I || "").split(".").map((G) => parseInt(G, 10));
    return {
      major: d[0],
      minor: d[1],
      patch: d[2]
    }
  }

  function n81(I) {
    let {
      env: d
    } = process;
    if ("FORCE_HYPERLINK" in d) return !(d.FORCE_HYPERLINK.length > 0 && parseInt(d.FORCE_HYPERLINK, 10) === 0);
    if (Hf("no-hyperlink") || Hf("no-hyperlinks") || Hf("hyperlink=false") || Hf("hyperlink=never")) return !1;
    if (Hf("hyperlink=true") || Hf("hyperlink=always")) return !0;
    if ("NETLIFY" in d) return !0;
    if (!fb4.supportsColor(I)) return !1;
    if (I && !I.isTTY) return !1;
    if (process.platform === "win32") return !1;
    if ("CI" in d) return !1;
    if ("TEAMCITY_VERSION" in d) return !1;
    if ("TERM_PROGRAM" in d) {
      let G = a40(d.TERM_PROGRAM_VERSION);
      switch (d.TERM_PROGRAM) {
        case "iTerm.app":
          if (G.major === 3) return G.minor >= 1;
          return G.major > 3;
        case "WezTerm":
          return G.major >= 20200620;
        case "vscode":
          return G.major > 1 || G.major === 1 && G.minor >= 72
      }
    }
    if ("VTE_VERSION" in d) {
      if (d.VTE_VERSION === "0.50.0") return !1;
      let G = a40(d.VTE_VERSION);
      return G.major > 0 || G.minor >= 50
    }
    return !1
  }
  s40.exports = {
    supportsHyperlink: n81,
    stdout: n81(process.stdout),
    stderr: n81(process.stderr)
  }
})
// @from(Start 2286160, End 2289053)
x50 = Y((Kn9, k50) => {
  var {
    defineProperty: xx,
    getOwnPropertyDescriptor: Zh4,
    getOwnPropertyNames: Ch4
  } = Object, Wh4 = Object.prototype.hasOwnProperty, cx = (I, d) => xx(I, "name", {
    value: d,
    configurable: !0
  }), wh4 = (I, d) => {
    for (var G in d) xx(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, Bh4 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of Ch4(d))
        if (!Wh4.call(I, C) && C !== G) xx(I, C, {
          get: () => d[C],
          enumerable: !(Z = Zh4(d, C)) || Z.enumerable
        })
    }
    return I
  }, Ah4 = (I) => Bh4(xx({}, "__esModule", {
    value: !0
  }), I), u50 = {};
  wh4(u50, {
    AlgorithmId: () => l50,
    EndpointURLScheme: () => m50,
    FieldPosition: () => b50,
    HttpApiKeyAuthLocation: () => O50,
    HttpAuthLocation: () => T50,
    IniSectionType: () => h50,
    RequestHandlerProtocol: () => j50,
    SMITHY_CONTEXT_KEY: () => Dh4,
    getDefaultClientConfiguration: () => Yh4,
    resolveDefaultRuntimeConfig: () => _h4
  });
  k50.exports = Ah4(u50);
  var T50 = ((I) => {
      return I.HEADER = "header", I.QUERY = "query", I
    })(T50 || {}),
    O50 = ((I) => {
      return I.HEADER = "header", I.QUERY = "query", I
    })(O50 || {}),
    m50 = ((I) => {
      return I.HTTP = "http", I.HTTPS = "https", I
    })(m50 || {}),
    l50 = ((I) => {
      return I.MD5 = "md5", I.CRC32 = "crc32", I.CRC32C = "crc32c", I.SHA1 = "sha1", I.SHA256 = "sha256", I
    })(l50 || {}),
    Vh4 = cx((I) => {
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
    Xh4 = cx((I) => {
      let d = {};
      return I.checksumAlgorithms().forEach((G) => {
        d[G.algorithmId()] = G.checksumConstructor()
      }), d
    }, "resolveChecksumRuntimeConfig"),
    Yh4 = cx((I) => {
      return {
        ...Vh4(I)
      }
    }, "getDefaultClientConfiguration"),
    _h4 = cx((I) => {
      return {
        ...Xh4(I)
      }
    }, "resolveDefaultRuntimeConfig"),
    b50 = ((I) => {
      return I[I.HEADER = 0] = "HEADER", I[I.TRAILER = 1] = "TRAILER", I
    })(b50 || {}),
    Dh4 = "__smithy_context",
    h50 = ((I) => {
      return I.PROFILE = "profile", I.SSO_SESSION = "sso-session", I.SERVICES = "services", I
    })(h50 || {}),
    j50 = ((I) => {
      return I.HTTP_0_9 = "http/0.9", I.HTTP_1_0 = "http/1.0", I.TDS_8_0 = "tds/8.0", I
    })(j50 || {})
})
// @from(Start 2289059, End 2290152)
r50 = Y((Nn9, n50) => {
  var {
    defineProperty: px,
    getOwnPropertyDescriptor: Hh4,
    getOwnPropertyNames: Fh4
  } = Object, gh4 = Object.prototype.hasOwnProperty, p50 = (I, d) => px(I, "name", {
    value: d,
    configurable: !0
  }), Jh4 = (I, d) => {
    for (var G in d) px(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, Kh4 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of Fh4(d))
        if (!gh4.call(I, C) && C !== G) px(I, C, {
          get: () => d[C],
          enumerable: !(Z = Hh4(d, C)) || Z.enumerable
        })
    }
    return I
  }, Nh4 = (I) => Kh4(px({}, "__esModule", {
    value: !0
  }), I), i50 = {};
  Jh4(i50, {
    getSmithyContext: () => zh4,
    normalizeProvider: () => Qh4
  });
  n50.exports = Nh4(i50);
  var c50 = x50(),
    zh4 = p50((I) => I[c50.SMITHY_CONTEXT_KEY] || (I[c50.SMITHY_CONTEXT_KEY] = {}), "getSmithyContext"),
    Qh4 = p50((I) => {
      if (typeof I === "function") return I;
      let d = Promise.resolve(I);
      return () => d
    }, "normalizeProvider")
})
// @from(Start 2290158, End 2291106)
K71 = Y((zn9, s50) => {
  var {
    defineProperty: ix,
    getOwnPropertyDescriptor: fh4,
    getOwnPropertyNames: qh4
  } = Object, Rh4 = Object.prototype.hasOwnProperty, Uh4 = (I, d) => ix(I, "name", {
    value: d,
    configurable: !0
  }), vh4 = (I, d) => {
    for (var G in d) ix(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, Eh4 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of qh4(d))
        if (!Rh4.call(I, C) && C !== G) ix(I, C, {
          get: () => d[C],
          enumerable: !(Z = fh4(d, C)) || Z.enumerable
        })
    }
    return I
  }, Mh4 = (I) => Eh4(ix({}, "__esModule", {
    value: !0
  }), I), a50 = {};
  vh4(a50, {
    isArrayBuffer: () => Sh4
  });
  s50.exports = Mh4(a50);
  var Sh4 = Uh4((I) => typeof ArrayBuffer === "function" && I instanceof ArrayBuffer || Object.prototype.toString.call(I) === "[object ArrayBuffer]", "isArrayBuffer")
})
// @from(Start 2291112, End 2292456)
I90 = Y((Qn9, t50) => {
  var {
    defineProperty: nx,
    getOwnPropertyDescriptor: Lh4,
    getOwnPropertyNames: yh4
  } = Object, Ph4 = Object.prototype.hasOwnProperty, o50 = (I, d) => nx(I, "name", {
    value: d,
    configurable: !0
  }), $h4 = (I, d) => {
    for (var G in d) nx(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, uh4 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of yh4(d))
        if (!Ph4.call(I, C) && C !== G) nx(I, C, {
          get: () => d[C],
          enumerable: !(Z = Lh4(d, C)) || Z.enumerable
        })
    }
    return I
  }, Th4 = (I) => uh4(nx({}, "__esModule", {
    value: !0
  }), I), e50 = {};
  $h4(e50, {
    fromArrayBuffer: () => mh4,
    fromString: () => lh4
  });
  t50.exports = Th4(e50);
  var Oh4 = K71(),
    N71 = B1("buffer"),
    mh4 = o50((I, d = 0, G = I.byteLength - d) => {
      if (!Oh4.isArrayBuffer(I)) throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof I} (${I})`);
      return N71.Buffer.from(I, d, G)
    }, "fromArrayBuffer"),
    lh4 = o50((I, d) => {
      if (typeof I !== "string") throw new TypeError(`The "input" argument must be of type string. Received type ${typeof I} (${I})`);
      return d ? N71.Buffer.from(I, d) : N71.Buffer.from(I)
    }, "fromString")
})
// @from(Start 2292462, End 2294113)
WL = Y((fn9, C90) => {
  var {
    defineProperty: rx,
    getOwnPropertyDescriptor: bh4,
    getOwnPropertyNames: hh4
  } = Object, jh4 = Object.prototype.hasOwnProperty, z71 = (I, d) => rx(I, "name", {
    value: d,
    configurable: !0
  }), kh4 = (I, d) => {
    for (var G in d) rx(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, xh4 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of hh4(d))
        if (!jh4.call(I, C) && C !== G) rx(I, C, {
          get: () => d[C],
          enumerable: !(Z = bh4(d, C)) || Z.enumerable
        })
    }
    return I
  }, ch4 = (I) => xh4(rx({}, "__esModule", {
    value: !0
  }), I), d90 = {};
  kh4(d90, {
    fromUtf8: () => Z90,
    toUint8Array: () => ph4,
    toUtf8: () => ih4
  });
  C90.exports = ch4(d90);
  var G90 = I90(),
    Z90 = z71((I) => {
      let d = G90.fromString(I, "utf8");
      return new Uint8Array(d.buffer, d.byteOffset, d.byteLength / Uint8Array.BYTES_PER_ELEMENT)
    }, "fromUtf8"),
    ph4 = z71((I) => {
      if (typeof I === "string") return Z90(I);
      if (ArrayBuffer.isView(I)) return new Uint8Array(I.buffer, I.byteOffset, I.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      return new Uint8Array(I)
    }, "toUint8Array"),
    ih4 = z71((I) => {
      if (typeof I === "string") return I;
      if (typeof I !== "object" || typeof I.byteOffset !== "number" || typeof I.byteLength !== "number") throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
      return G90.fromArrayBuffer(I.buffer, I.byteOffset, I.byteLength).toString("utf8")
    }, "toUtf8")
})
// @from(Start 2294119, End 2295648)
Y90 = Y((qn9, X90) => {
  var {
    defineProperty: ax,
    getOwnPropertyDescriptor: nh4,
    getOwnPropertyNames: rh4
  } = Object, ah4 = Object.prototype.hasOwnProperty, W90 = (I, d) => ax(I, "name", {
    value: d,
    configurable: !0
  }), sh4 = (I, d) => {
    for (var G in d) ax(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, oh4 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of rh4(d))
        if (!ah4.call(I, C) && C !== G) ax(I, C, {
          get: () => d[C],
          enumerable: !(Z = nh4(d, C)) || Z.enumerable
        })
    }
    return I
  }, eh4 = (I) => oh4(ax({}, "__esModule", {
    value: !0
  }), I), w90 = {};
  sh4(w90, {
    fromHex: () => A90,
    toHex: () => V90
  });
  X90.exports = eh4(w90);
  var B90 = {},
    Q71 = {};
  for (let I = 0; I < 256; I++) {
    let d = I.toString(16).toLowerCase();
    if (d.length === 1) d = `0${d}`;
    B90[I] = d, Q71[d] = I
  }

  function A90(I) {
    if (I.length % 2 !== 0) throw new Error("Hex encoded strings must have an even number length");
    let d = new Uint8Array(I.length / 2);
    for (let G = 0; G < I.length; G += 2) {
      let Z = I.slice(G, G + 2).toLowerCase();
      if (Z in Q71) d[G / 2] = Q71[Z];
      else throw new Error(`Cannot decode unrecognized sequence ${Z} as hexadecimal`)
    }
    return d
  }
  W90(A90, "fromHex");

  function V90(I) {
    let d = "";
    for (let G = 0; G < I.byteLength; G++) d += B90[I[G]];
    return d
  }
  W90(V90, "toHex")
})
// @from(Start 2295654, End 2296702)
F90 = Y((Rn9, H90) => {
  var {
    defineProperty: sx,
    getOwnPropertyDescriptor: th4,
    getOwnPropertyNames: Ij4
  } = Object, dj4 = Object.prototype.hasOwnProperty, f71 = (I, d) => sx(I, "name", {
    value: d,
    configurable: !0
  }), Gj4 = (I, d) => {
    for (var G in d) sx(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, Zj4 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of Ij4(d))
        if (!dj4.call(I, C) && C !== G) sx(I, C, {
          get: () => d[C],
          enumerable: !(Z = th4(d, C)) || Z.enumerable
        })
    }
    return I
  }, Cj4 = (I) => Zj4(sx({}, "__esModule", {
    value: !0
  }), I), _90 = {};
  Gj4(_90, {
    escapeUri: () => D90,
    escapeUriPath: () => wj4
  });
  H90.exports = Cj4(_90);
  var D90 = f71((I) => encodeURIComponent(I).replace(/[!'()*]/g, Wj4), "escapeUri"),
    Wj4 = f71((I) => `%${I.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode"),
    wj4 = f71((I) => I.split("/").map(D90).join("/"), "escapeUriPath")
})
// @from(Start 2296708, End 2312103)
T90 = Y((Un9, u90) => {
  var {
    defineProperty: dc,
    getOwnPropertyDescriptor: Bj4,
    getOwnPropertyNames: Aj4
  } = Object, Vj4 = Object.prototype.hasOwnProperty, f6 = (I, d) => dc(I, "name", {
    value: d,
    configurable: !0
  }), Xj4 = (I, d) => {
    for (var G in d) dc(I, G, {
      get: d[G],
      enumerable: !0
    })
  }, Yj4 = (I, d, G, Z) => {
    if (d && typeof d === "object" || typeof d === "function") {
      for (let C of Aj4(d))
        if (!Vj4.call(I, C) && C !== G) dc(I, C, {
          get: () => d[C],
          enumerable: !(Z = Bj4(d, C)) || Z.enumerable
        })
    }
    return I
  }, _j4 = (I) => Yj4(dc({}, "__esModule", {
    value: !0
  }), I), z90 = {};
  Xj4(z90, {
    SignatureV4: () => bj4,
    clearCredentialCache: () => Sj4,
    createScope: () => tx,
    getCanonicalHeaders: () => v71,
    getCanonicalQuery: () => M90,
    getPayloadHash: () => Ic,
    getSigningKey: () => E90,
    moveHeadersToQuery: () => P90,
    prepareRequest: () => M71
  });
  u90.exports = _j4(z90);
  var g90 = r50(),
    q71 = WL(),
    Dj4 = "X-Amz-Algorithm",
    Hj4 = "X-Amz-Credential",
    Q90 = "X-Amz-Date",
    Fj4 = "X-Amz-SignedHeaders",
    gj4 = "X-Amz-Expires",
    f90 = "X-Amz-Signature",
    q90 = "X-Amz-Security-Token",
    R90 = "authorization",
    U90 = Q90.toLowerCase(),
    Jj4 = "date",
    Kj4 = [R90, U90, Jj4],
    Nj4 = f90.toLowerCase(),
    U71 = "x-amz-content-sha256",
    zj4 = q90.toLowerCase(),
    Qj4 = {
      authorization: !0,
      "cache-control": !0,
      connection: !0,
      expect: !0,
      from: !0,
      "keep-alive": !0,
      "max-forwards": !0,
      pragma: !0,
      referer: !0,
      te: !0,
      trailer: !0,
      "transfer-encoding": !0,
      upgrade: !0,
      "user-agent": !0,
      "x-amzn-trace-id": !0
    },
    fj4 = /^proxy-/,
    qj4 = /^sec-/,
    R71 = "AWS4-HMAC-SHA256",
    Rj4 = "AWS4-HMAC-SHA256-PAYLOAD",
    Uj4 = "UNSIGNED-PAYLOAD",
    vj4 = 50,
    v90 = "aws4_request",
    Ej4 = 604800,
    E_ = Y90(),
    Mj4 = WL(),
    vf = {},
    ex = [],
    tx = f6((I, d, G) => `${I}/${d}/${G}/${v90}`, "createScope"),
    E90 = f6(async (I, d, G, Z, C) => {
      let W = await J90(I, d.secretAccessKey, d.accessKeyId),
        w = `${G}:${Z}:${C}:${E_.toHex(W)}:${d.sessionToken}`;
      if (w in vf) return vf[w];
      ex.push(w);
      while (ex.length > vj4) delete vf[ex.shift()];
      let B = `AWS4${d.secretAccessKey}`;
      for (let A of [G, Z, C, v90]) B = await J90(I, B, A);
      return vf[w] = B
    }, "getSigningKey"),
    Sj4 = f6(() => {
      ex.length = 0, Object.keys(vf).forEach((I) => {
        delete vf[I]
      })
    }, "clearCredentialCache"),
    J90 = f6((I, d, G) => {
      let Z = new I(d);
      return Z.update(Mj4.toUint8Array(G)), Z.digest()
    }, "hmac"),
    v71 = f6(({
      headers: I
    }, d, G) => {
      let Z = {};
      for (let C of Object.keys(I).sort()) {
        if (I[C] == null) continue;
        let W = C.toLowerCase();
        if (W in Qj4 || (d == null ? void 0 : d.has(W)) || fj4.test(W) || qj4.test(W)) {
          if (!G || G && !G.has(W)) continue
        }
        Z[W] = I[C].trim().replace(/\s+/g, " ")
      }
      return Z
    }, "getCanonicalHeaders"),
    wL = F90(),
    M90 = f6(({
      query: I = {}
    }) => {
      let d = [],
        G = {};
      for (let Z of Object.keys(I).sort()) {
        if (Z.toLowerCase() === Nj4) continue;
        d.push(Z);
        let C = I[Z];
        if (typeof C === "string") G[Z] = `${wL.escapeUri(Z)}=${wL.escapeUri(C)}`;
        else if (Array.isArray(C)) G[Z] = C.slice(0).reduce((W, w) => W.concat([`${wL.escapeUri(Z)}=${wL.escapeUri(w)}`]), []).sort().join("&")
      }
      return d.map((Z) => G[Z]).filter((Z) => Z).join("&")
    }, "getCanonicalQuery"),
    Lj4 = K71(),
    yj4 = WL(),
    Ic = f6(async ({
      headers: I,
      body: d
    }, G) => {
      for (let Z of Object.keys(I))
        if (Z.toLowerCase() === U71) return I[Z];
      if (d == null) return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
      else if (typeof d === "string" || ArrayBuffer.isView(d) || Lj4.isArrayBuffer(d)) {
        let Z = new G;
        return Z.update(yj4.toUint8Array(d)), E_.toHex(await Z.digest())
      }
      return Uj4
    }, "getPayloadHash"),
    K90 = WL(),
    S90 = class I {
      format(d) {
        let G = [];
        for (let W of Object.keys(d)) {
          let w = K90.fromUtf8(W);
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
            let B = K90.fromUtf8(d.value),
              A = new DataView(new ArrayBuffer(3 + B.byteLength));
            A.setUint8(0, 7), A.setUint16(1, B.byteLength, !1);
            let V = new Uint8Array(A.buffer);
            return V.set(B, 3), V;
          case "timestamp":
            let X = new Uint8Array(9);
            return X[0] = 8, X.set(uj4.fromNumber(d.value.valueOf()).bytes, 1), X;
          case "uuid":
            if (!$j4.test(d.value)) throw new Error(`Invalid UUID received: ${d.value}`);
            let _ = new Uint8Array(17);
            return _[0] = 9, _.set(E_.fromHex(d.value.replace(/\-/g, "")), 1), _
        }
      }
    };
  f6(S90, "HeaderFormatter");
  var Pj4 = S90,
    $j4 = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
    L90 = class I {
      constructor(d) {
        if (this.bytes = d, d.byteLength !== 8) throw new Error("Int64 buffers must be exactly 8 bytes")
      }
      static fromNumber(d) {
        if (d > 9223372036854776000 || d < -9223372036854776000) throw new Error(`${d} is too large (or, if negative, too small) to represent as an Int64`);
        let G = new Uint8Array(8);
        for (let Z = 7, C = Math.abs(Math.round(d)); Z > -1 && C > 0; Z--, C /= 256) G[Z] = C;
        if (d < 0) E71(G);
        return new I(G)
      }
      valueOf() {
        let d = this.bytes.slice(0),
          G = d[0] & 128;
        if (G) E71(d);
        return parseInt(E_.toHex(d), 16) * (G ? -1 : 1)
      }
      toString() {
        return String(this.valueOf())
      }
    };
  f6(L90, "Int64");
  var uj4 = L90;

  function E71(I) {
    for (let d = 0; d < 8; d++) I[d] ^= 255;
    for (let d = 7; d > -1; d--)
      if (I[d]++, I[d] !== 0) break
  }
  f6(E71, "negate");
  var Tj4 = f6((I, d) => {
      I = I.toLowerCase();
      for (let G of Object.keys(d))
        if (I === G.toLowerCase()) return !0;
      return !1
    }, "hasHeader"),
    y90 = f6(({
      headers: I,
      query: d,
      ...G
    }) => ({
      ...G,
      headers: {
        ...I
      },
      query: d ? Oj4(d) : void 0
    }), "cloneRequest"),
    Oj4 = f6((I) => Object.keys(I).reduce((d, G) => {
      let Z = I[G];
      return {
        ...d,
        [G]: Array.isArray(Z) ? [...Z] : Z
      }
    }, {}), "cloneQuery"),
    P90 = f6((I, d = {}) => {
      var G;
      let {
        headers: Z,
        query: C = {}
      } = typeof I.clone === "function" ? I.clone() : y90(I);
      for (let W of Object.keys(Z)) {
        let w = W.toLowerCase();
        if (w.slice(0, 6) === "x-amz-" && !((G = d.unhoistableHeaders) == null ? void 0 : G.has(w))) C[W] = Z[W], delete Z[W]
      }
      return {
        ...I,
        headers: Z,
        query: C
      }
    }, "moveHeadersToQuery"),
    M71 = f6((I) => {
      I = typeof I.clone === "function" ? I.clone() : y90(I);
      for (let d of Object.keys(I.headers))
        if (Kj4.indexOf(d.toLowerCase()) > -1) delete I.headers[d];
      return I
    }, "prepareRequest"),
    mj4 = f6((I) => lj4(I).toISOString().replace(/\.\d{3}Z$/, "Z"), "iso8601"),
    lj4 = f6((I) => {
      if (typeof I === "number") return new Date(I * 1000);
      if (typeof I === "string") {
        if (Number(I)) return new Date(Number(I) * 1000);
        return new Date(I)
      }
      return I
    }, "toDate"),
    $90 = class I {
      constructor({
        applyChecksum: d,
        credentials: G,
        region: Z,
        service: C,
        sha256: W,
        uriEscapePath: w = !0
      }) {
        this.headerFormatter = new Pj4, this.service = C, this.sha256 = W, this.uriEscapePath = w, this.applyChecksum = typeof d === "boolean" ? d : !0, this.regionProvider = g90.normalizeProvider(Z), this.credentialProvider = g90.normalizeProvider(G)
      }
      async presign(d, G = {}) {
        let {
          signingDate: Z = new Date,
          expiresIn: C = 3600,
          unsignableHeaders: W,
          unhoistableHeaders: w,
          signableHeaders: B,
          signingRegion: A,
          signingService: V
        } = G, X = await this.credentialProvider();
        this.validateResolvedCredentials(X);
        let _ = A ?? await this.regionProvider(),
          {
            longDate: F,
            shortDate: g
          } = ox(Z);
        if (C > Ej4) return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
        let J = tx(g, _, V ?? this.service),
          K = P90(M71(d), {
            unhoistableHeaders: w
          });
        if (X.sessionToken) K.query[q90] = X.sessionToken;
        K.query[Dj4] = R71, K.query[Hj4] = `${X.accessKeyId}/${J}`, K.query[Q90] = F, K.query[gj4] = C.toString(10);
        let Q = v71(K, W, B);
        return K.query[Fj4] = N90(Q), K.query[f90] = await this.getSignature(F, J, this.getSigningKey(X, _, g, V), this.createCanonicalRequest(K, Q, await Ic(d, this.sha256))), K
      }
      async sign(d, G) {
        if (typeof d === "string") return this.signString(d, G);
        else if (d.headers && d.payload) return this.signEvent(d, G);
        else if (d.message) return this.signMessage(d, G);
        else return this.signRequest(d, G)
      }
      async signEvent({
        headers: d,
        payload: G
      }, {
        signingDate: Z = new Date,
        priorSignature: C,
        signingRegion: W,
        signingService: w
      }) {
        let B = W ?? await this.regionProvider(),
          {
            shortDate: A,
            longDate: V
          } = ox(Z),
          X = tx(A, B, w ?? this.service),
          _ = await Ic({
            headers: {},
            body: G
          }, this.sha256),
          F = new this.sha256;
        F.update(d);
        let g = E_.toHex(await F.digest()),
          J = [Rj4, V, X, C, g, _].join(`
`);
        return this.signString(J, {
          signingDate: Z,
          signingRegion: B,
          signingService: w
        })
      }
      async signMessage(d, {
        signingDate: G = new Date,
        signingRegion: Z,
        signingService: C
      }) {
        return this.signEvent({
          headers: this.headerFormatter.format(d.message.headers),
          payload: d.message.body
        }, {
          signingDate: G,
          signingRegion: Z,
          signingService: C,
          priorSignature: d.priorSignature
        }).then((w) => {
          return {
            message: d.message,
            signature: w
          }
        })
      }
      async signString(d, {
        signingDate: G = new Date,
        signingRegion: Z,
        signingService: C
      } = {}) {
        let W = await this.credentialProvider();
        this.validateResolvedCredentials(W);
        let w = Z ?? await this.regionProvider(),
          {
            shortDate: B
          } = ox(G),
          A = new this.sha256(await this.getSigningKey(W, w, B, C));
        return A.update(q71.toUint8Array(d)), E_.toHex(await A.digest())
      }
      async signRequest(d, {
        signingDate: G = new Date,
        signableHeaders: Z,
        unsignableHeaders: C,
        signingRegion: W,
        signingService: w
      } = {}) {
        let B = await this.credentialProvider();
        this.validateResolvedCredentials(B);
        let A = W ?? await this.regionProvider(),
          V = M71(d),
          {
            longDate: X,
            shortDate: _
          } = ox(G),
          F = tx(_, A, w ?? this.service);
        if (V.headers[U90] = X, B.sessionToken) V.headers[zj4] = B.sessionToken;
        let g = await Ic(V, this.sha256);
        if (!Tj4(U71, V.headers) && this.applyChecksum) V.headers[U71] = g;
        let J = v71(V, C, Z),
          K = await this.getSignature(X, F, this.getSigningKey(B, A, _, w), this.createCanonicalRequest(V, J, g));
        return V.headers[R90] = `${R71} Credential=${B.accessKeyId}/${F}, SignedHeaders=${N90(J)}, Signature=${K}`, V
      }
      createCanonicalRequest(d, G, Z) {
        let C = Object.keys(G).sort();
        return `${d.method}
${this.getCanonicalPath(d)}
${M90(d)}
${C.map((W)=>`${W}:${G[W]}`).join(`
`)}

${C.join(";")}
${Z}`
      }
      async createStringToSign(d, G, Z) {
        let C = new this.sha256;
        C.update(q71.toUint8Array(Z));
        let W = await C.digest();
        return `${R71}
${d}
${G}
${E_.toHex(W)}`
      }
      getCanonicalPath({
        path: d
      }) {
        if (this.uriEscapePath) {
          let G = [];
          for (let W of d.split("/")) {
            if ((W == null ? void 0 : W.length) === 0) continue;
            if (W === ".") continue;
            if (W === "..") G.pop();
            else G.push(W)
          }
          let Z = `${(d==null?void 0:d.startsWith("/"))?"/":""}${G.join("/")}${G.length>0&&(d==null?void 0:d.endsWith("/"))?"/":""}`;
          return wL.escapeUri(Z).replace(/%2F/g, "/")
        }
        return d
      }
      async getSignature(d, G, Z, C) {
        let W = await this.createStringToSign(d, G, C),
          w = new this.sha256(await Z);
        return w.update(q71.toUint8Array(W)), E_.toHex(await w.digest())
      }
      getSigningKey(d, G, Z, C) {
        return E90(this.sha256, d, Z, G, C || this.service)
      }
      validateResolvedCredentials(d) {
        if (typeof d !== "object" || typeof d.accessKeyId !== "string" || typeof d.secretAccessKey !== "string") throw new Error("Resolved credential object is not valid")
      }
    };
  f6($90, "SignatureV4");
  var bj4 = $90,
    ox = f6((I) => {
      let d = mj4(I).replace(/[\-:]/g, "");
      return {
        longDate: d,
        shortDate: d.slice(0, 8)
      }
    }, "formatDate"),
    N90 = f6((I) => Object.keys(I).sort().join(";"), "getCanonicalHeaderList")
})
// @from(Start 2312109, End 2329416)
x1 = Y((vn9, Cc) => {
  var O90, m90, l90, b90, h90, j90, k90, x90, c90, p90, i90, n90, r90, Gc, S71, a90, s90, o90, Ef, e90, t90, I30, d30, G30, Z30, C30, W30, w30, Zc, B30, A30, V30;
  (function(I) {
    var d = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) define("tslib", ["exports"], function(Z) {
      I(G(d, G(Z)))
    });
    else if (typeof Cc === "object" && typeof vn9 === "object") I(G(d, G(vn9)));
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
    instanceof Array && function(W, w) {
      W.__proto__ = w
    } || function(W, w) {
      for (var B in w)
        if (Object.prototype.hasOwnProperty.call(w, B)) W[B] = w[B]
    };
    O90 = function(W, w) {
      if (typeof w !== "function" && w !== null) throw new TypeError("Class extends value " + String(w) + " is not a constructor or null");
      d(W, w);

      function B() {
        this.constructor = W
      }
      W.prototype = w === null ? Object.create(w) : (B.prototype = w.prototype, new B)
    }, m90 = Object.assign || function(W) {
      for (var w, B = 1, A = arguments.length; B < A; B++) {
        w = arguments[B];
        for (var V in w)
          if (Object.prototype.hasOwnProperty.call(w, V)) W[V] = w[V]
      }
      return W
    }, l90 = function(W, w) {
      var B = {};
      for (var A in W)
        if (Object.prototype.hasOwnProperty.call(W, A) && w.indexOf(A) < 0) B[A] = W[A];
      if (W != null && typeof Object.getOwnPropertySymbols === "function") {
        for (var V = 0, A = Object.getOwnPropertySymbols(W); V < A.length; V++)
          if (w.indexOf(A[V]) < 0 && Object.prototype.propertyIsEnumerable.call(W, A[V])) B[A[V]] = W[A[V]]
      }
      return B
    }, b90 = function(W, w, B, A) {
      var V = arguments.length,
        X = V < 3 ? w : A === null ? A = Object.getOwnPropertyDescriptor(w, B) : A,
        _;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") X = Reflect.decorate(W, w, B, A);
      else
        for (var F = W.length - 1; F >= 0; F--)
          if (_ = W[F]) X = (V < 3 ? _(X) : V > 3 ? _(w, B, X) : _(w, B)) || X;
      return V > 3 && X && Object.defineProperty(w, B, X), X
    }, h90 = function(W, w) {
      return function(B, A) {
        w(B, A, W)
      }
    }, j90 = function(W, w, B, A, V, X) {
      function _(O) {
        if (O !== void 0 && typeof O !== "function") throw new TypeError("Function expected");
        return O
      }
      var F = A.kind,
        g = F === "getter" ? "get" : F === "setter" ? "set" : "value",
        J = !w && W ? A.static ? W : W.prototype : null,
        K = w || (J ? Object.getOwnPropertyDescriptor(J, A.name) : {}),
        Q, E = !1;
      for (var S = B.length - 1; S >= 0; S--) {
        var P = {};
        for (var $ in A) P[$] = $ === "access" ? {} : A[$];
        for (var $ in A.access) P.access[$] = A.access[$];
        P.addInitializer = function(O) {
          if (E) throw new TypeError("Cannot add initializers after decoration has completed");
          X.push(_(O || null))
        };
        var h = B[S](F === "accessor" ? {
          get: K.get,
          set: K.set
        } : K[g], P);
        if (F === "accessor") {
          if (h === void 0) continue;
          if (h === null || typeof h !== "object") throw new TypeError("Object expected");
          if (Q = _(h.get)) K.get = Q;
          if (Q = _(h.set)) K.set = Q;
          if (Q = _(h.init)) V.unshift(Q)
        } else if (Q = _(h))
          if (F === "field") V.unshift(Q);
          else K[g] = Q
      }
      if (J) Object.defineProperty(J, A.name, K);
      E = !0
    }, k90 = function(W, w, B) {
      var A = arguments.length > 2;
      for (var V = 0; V < w.length; V++) B = A ? w[V].call(W, B) : w[V].call(W);
      return A ? B : void 0
    }, x90 = function(W) {
      return typeof W === "symbol" ? W : "".concat(W)
    }, c90 = function(W, w, B) {
      if (typeof w === "symbol") w = w.description ? "[".concat(w.description, "]") : "";
      return Object.defineProperty(W, "name", {
        configurable: !0,
        value: B ? "".concat(B, " ", w) : w
      })
    }, p90 = function(W, w) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(W, w)
    }, i90 = function(W, w, B, A) {
      function V(X) {
        return X instanceof B ? X : new B(function(_) {
          _(X)
        })
      }
      return new(B || (B = Promise))(function(X, _) {
        function F(K) {
          try {
            J(A.next(K))
          } catch (Q) {
            _(Q)
          }
        }

        function g(K) {
          try {
            J(A.throw(K))
          } catch (Q) {
            _(Q)
          }
        }

        function J(K) {
          K.done ? X(K.value) : V(K.value).then(F, g)
        }
        J((A = A.apply(W, w || [])).next())
      })
    }, n90 = function(W, w) {
      var B = {
          label: 0,
          sent: function() {
            if (X[0] & 1) throw X[1];
            return X[1]
          },
          trys: [],
          ops: []
        },
        A, V, X, _ = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
      return _.next = F(0), _.throw = F(1), _.return = F(2), typeof Symbol === "function" && (_[Symbol.iterator] = function() {
        return this
      }), _;

      function F(J) {
        return function(K) {
          return g([J, K])
        }
      }

      function g(J) {
        if (A) throw new TypeError("Generator is already executing.");
        while (_ && (_ = 0, J[0] && (B = 0)), B) try {
          if (A = 1, V && (X = J[0] & 2 ? V.return : J[0] ? V.throw || ((X = V.return) && X.call(V), 0) : V.next) && !(X = X.call(V, J[1])).done) return X;
          if (V = 0, X) J = [J[0] & 2, X.value];
          switch (J[0]) {
            case 0:
            case 1:
              X = J;
              break;
            case 4:
              return B.label++, {
                value: J[1],
                done: !1
              };
            case 5:
              B.label++, V = J[1], J = [0];
              continue;
            case 7:
              J = B.ops.pop(), B.trys.pop();
              continue;
            default:
              if ((X = B.trys, !(X = X.length > 0 && X[X.length - 1])) && (J[0] === 6 || J[0] === 2)) {
                B = 0;
                continue
              }
              if (J[0] === 3 && (!X || J[1] > X[0] && J[1] < X[3])) {
                B.label = J[1];
                break
              }
              if (J[0] === 6 && B.label < X[1]) {
                B.label = X[1], X = J;
                break
              }
              if (X && B.label < X[2]) {
                B.label = X[2], B.ops.push(J);
                break
              }
              if (X[2]) B.ops.pop();
              B.trys.pop();
              continue
          }
          J = w.call(W, B)
        } catch (K) {
          J = [6, K], V = 0
        } finally {
          A = X = 0
        }
        if (J[0] & 5) throw J[1];
        return {
          value: J[0] ? J[1] : void 0,
          done: !0
        }
      }
    }, r90 = function(W, w) {
      for (var B in W)
        if (B !== "default" && !Object.prototype.hasOwnProperty.call(w, B)) Zc(w, W, B)
    }, Zc = Object.create ? function(W, w, B, A) {
      if (A === void 0) A = B;
      var V = Object.getOwnPropertyDescriptor(w, B);
      if (!V || ("get" in V ? !w.__esModule : V.writable || V.configurable)) V = {
        enumerable: !0,
        get: function() {
          return w[B]
        }
      };
      Object.defineProperty(W, A, V)
    } : function(W, w, B, A) {
      if (A === void 0) A = B;
      W[A] = w[B]
    }, Gc = function(W) {
      var w = typeof Symbol === "function" && Symbol.iterator,
        B = w && W[w],
        A = 0;
      if (B) return B.call(W);
      if (W && typeof W.length === "number") return {
        next: function() {
          if (W && A >= W.length) W = void 0;
          return {
            value: W && W[A++],
            done: !W
          }
        }
      };
      throw new TypeError(w ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }, S71 = function(W, w) {
      var B = typeof Symbol === "function" && W[Symbol.iterator];
      if (!B) return W;
      var A = B.call(W),
        V, X = [],
        _;
      try {
        while ((w === void 0 || w-- > 0) && !(V = A.next()).done) X.push(V.value)
      } catch (F) {
        _ = {
          error: F
        }
      } finally {
        try {
          if (V && !V.done && (B = A.return)) B.call(A)
        } finally {
          if (_) throw _.error
        }
      }
      return X
    }, a90 = function() {
      for (var W = [], w = 0; w < arguments.length; w++) W = W.concat(S71(arguments[w]));
      return W
    }, s90 = function() {
      for (var W = 0, w = 0, B = arguments.length; w < B; w++) W += arguments[w].length;
      for (var A = Array(W), V = 0, w = 0; w < B; w++)
        for (var X = arguments[w], _ = 0, F = X.length; _ < F; _++, V++) A[V] = X[_];
      return A
    }, o90 = function(W, w, B) {
      if (B || arguments.length === 2) {
        for (var A = 0, V = w.length, X; A < V; A++)
          if (X || !(A in w)) {
            if (!X) X = Array.prototype.slice.call(w, 0, A);
            X[A] = w[A]
          }
      }
      return W.concat(X || Array.prototype.slice.call(w))
    }, Ef = function(W) {
      return this instanceof Ef ? (this.v = W, this) : new Ef(W)
    }, e90 = function(W, w, B) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var A = B.apply(W, w || []),
        V, X = [];
      return V = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), F("next"), F("throw"), F("return", _), V[Symbol.asyncIterator] = function() {
        return this
      }, V;

      function _(S) {
        return function(P) {
          return Promise.resolve(P).then(S, Q)
        }
      }

      function F(S, P) {
        if (A[S]) {
          if (V[S] = function($) {
              return new Promise(function(h, O) {
                X.push([S, $, h, O]) > 1 || g(S, $)
              })
            }, P) V[S] = P(V[S])
        }
      }

      function g(S, P) {
        try {
          J(A[S](P))
        } catch ($) {
          E(X[0][3], $)
        }
      }

      function J(S) {
        S.value instanceof Ef ? Promise.resolve(S.value.v).then(K, Q) : E(X[0][2], S)
      }

      function K(S) {
        g("next", S)
      }

      function Q(S) {
        g("throw", S)
      }

      function E(S, P) {
        if (S(P), X.shift(), X.length) g(X[0][0], X[0][1])
      }
    }, t90 = function(W) {
      var w, B;
      return w = {}, A("next"), A("throw", function(V) {
        throw V
      }), A("return"), w[Symbol.iterator] = function() {
        return this
      }, w;

      function A(V, X) {
        w[V] = W[V] ? function(_) {
          return (B = !B) ? {
            value: Ef(W[V](_)),
            done: !1
          } : X ? X(_) : _
        } : X
      }
    }, I30 = function(W) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var w = W[Symbol.asyncIterator],
        B;
      return w ? w.call(W) : (W = typeof Gc === "function" ? Gc(W) : W[Symbol.iterator](), B = {}, A("next"), A("throw"), A("return"), B[Symbol.asyncIterator] = function() {
        return this
      }, B);

      function A(X) {
        B[X] = W[X] && function(_) {
          return new Promise(function(F, g) {
            _ = W[X](_), V(F, g, _.done, _.value)
          })
        }
      }

      function V(X, _, F, g) {
        Promise.resolve(g).then(function(J) {
          X({
            value: J,
            done: F
          })
        }, _)
      }
    }, d30 = function(W, w) {
      if (Object.defineProperty) Object.defineProperty(W, "raw", {
        value: w
      });
      else W.raw = w;
      return W
    };
    var G = Object.create ? function(W, w) {
        Object.defineProperty(W, "default", {
          enumerable: !0,
          value: w
        })
      } : function(W, w) {
        W.default = w
      },
      Z = function(W) {
        return Z = Object.getOwnPropertyNames || function(w) {
          var B = [];
          for (var A in w)
            if (Object.prototype.hasOwnProperty.call(w, A)) B[B.length] = A;
          return B
        }, Z(W)
      };
    G30 = function(W) {
      if (W && W.__esModule) return W;
      var w = {};
      if (W != null) {
        for (var B = Z(W), A = 0; A < B.length; A++)
          if (B[A] !== "default") Zc(w, W, B[A])
      }
      return G(w, W), w
    }, Z30 = function(W) {
      return W && W.__esModule ? W : {
        default: W
      }
    }, C30 = function(W, w, B, A) {
      if (B === "a" && !A) throw new TypeError("Private accessor was defined without a getter");
      if (typeof w === "function" ? W !== w || !A : !w.has(W)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return B === "m" ? A : B === "a" ? A.call(W) : A ? A.value : w.get(W)
    }, W30 = function(W, w, B, A, V) {
      if (A === "m") throw new TypeError("Private method is not writable");
      if (A === "a" && !V) throw new TypeError("Private accessor was defined without a setter");
      if (typeof w === "function" ? W !== w || !V : !w.has(W)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return A === "a" ? V.call(W, B) : V ? V.value = B : w.set(W, B), B
    }, w30 = function(W, w) {
      if (w === null || typeof w !== "object" && typeof w !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
      return typeof W === "function" ? w === W : W.has(w)
    }, B30 = function(W, w, B) {
      if (w !== null && w !== void 0) {
        if (typeof w !== "object" && typeof w !== "function") throw new TypeError("Object expected.");
        var A, V;
        if (B) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          A = w[Symbol.asyncDispose]
        }
        if (A === void 0) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          if (A = w[Symbol.dispose], B) V = A
        }
        if (typeof A !== "function") throw new TypeError("Object not disposable.");
        if (V) A = function() {
          try {
            V.call(this)
          } catch (X) {
            return Promise.reject(X)
          }
        };
        W.stack.push({
          value: w,
          dispose: A,
          async: B
        })
      } else if (B) W.stack.push({
        async: !0
      });
      return w
    };
    var C = typeof SuppressedError === "function" ? SuppressedError : function(W, w, B) {
      var A = new Error(B);
      return A.name = "SuppressedError", A.error = W, A.suppressed = w, A
    };
    A30 = function(W) {
      function w(X) {
        W.error = W.hasError ? new C(X, W.error, "An error was suppressed during disposal.") : X, W.hasError = !0
      }
      var B, A = 0;

      function V() {
        while (B = W.stack.pop()) try {
          if (!B.async && A === 1) return A = 0, W.stack.push(B), Promise.resolve().then(V);
          if (B.dispose) {
            var X = B.dispose.call(B.value);
            if (B.async) return A |= 2, Promise.resolve(X).then(V, function(_) {
              return w(_), V()
            })
          } else A |= 1
        } catch (_) {
          w(_)
        }
        if (A === 1) return W.hasError ? Promise.reject(W.error) : Promise.resolve();
        if (W.hasError) throw W.error
      }
      return V()
    }, V30 = function(W, w) {
      if (typeof W === "string" && /^\.\.?\//.test(W)) return W.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(B, A, V, X, _) {
        return A ? w ? ".jsx" : ".js" : V && (!X || !_) ? B : V + X + "." + _.toLowerCase() + "js"
      });
      return W
    }, I("__extends", O90), I("__assign", m90), I("__rest", l90), I("__decorate", b90), I("__param", h90), I("__esDecorate", j90), I("__runInitializers", k90), I("__propKey", x90), I("__setFunctionName", c90), I("__metadata", p90), I("__awaiter", i90), I("__generator", n90), I("__exportStar", r90), I("__createBinding", Zc), I("__values", Gc), I("__read", S71), I("__spread", a90), I("__spreadArrays", s90), I("__spreadArray", o90), I("__await", Ef), I("__asyncGenerator", e90), I("__asyncDelegator", t90), I("__asyncValues", I30), I("__makeTemplateObject", d30), I("__importStar", G30), I("__importDefault", Z30), I("__classPrivateFieldGet", C30), I("__classPrivateFieldSet", W30), I("__classPrivateFieldIn", w30), I("__addDisposableResource", B30), I("__disposeResources", A30), I("__rewriteRelativeImportExtension", V30)
  })
})
// @from(Start 2329422, End 2329945)
D30 = Y((Y30) => {
  Object.defineProperty(Y30, "__esModule", {
    value: !0
  });
  Y30.booleanSelector = Y30.SelectorType = void 0;
  var hj4;
  (function(I) {
    I.ENV = "env", I.CONFIG = "shared config entry"
  })(hj4 = Y30.SelectorType || (Y30.SelectorType = {}));
  var jj4 = (I, d, G) => {
    if (!(d in I)) return;
    if (I[d] === "true") return !0;
    if (I[d] === "false") return !1;
    throw new Error(`Cannot load ${G} "${d}". Expected "true" or "false", got ${I[d]}.`)
  };
  Y30.booleanSelector = jj4
})
// @from(Start 2329951, End 2330086)
y71 = Y((L71) => {
  Object.defineProperty(L71, "__esModule", {
    value: !0
  });
  var kj4 = x1();
  kj4.__exportStar(D30(), L71)
})
// @from(Start 2330092, End 2330835)
K30 = Y((H30) => {
  Object.defineProperty(H30, "__esModule", {
    value: !0
  });
  H30.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = H30.DEFAULT_USE_DUALSTACK_ENDPOINT = H30.CONFIG_USE_DUALSTACK_ENDPOINT = H30.ENV_USE_DUALSTACK_ENDPOINT = void 0;
  var Wc = y71();
  H30.ENV_USE_DUALSTACK_ENDPOINT = "AWS_USE_DUALSTACK_ENDPOINT";
  H30.CONFIG_USE_DUALSTACK_ENDPOINT = "use_dualstack_endpoint";
  H30.DEFAULT_USE_DUALSTACK_ENDPOINT = !1;
  H30.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (I) => Wc.booleanSelector(I, H30.ENV_USE_DUALSTACK_ENDPOINT, Wc.SelectorType.ENV),
    configFileSelector: (I) => Wc.booleanSelector(I, H30.CONFIG_USE_DUALSTACK_ENDPOINT, Wc.SelectorType.CONFIG),
    default: !1
  }
})
// @from(Start 2330841, End 2331524)
q30 = Y((N30) => {
  Object.defineProperty(N30, "__esModule", {
    value: !0
  });
  N30.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = N30.DEFAULT_USE_FIPS_ENDPOINT = N30.CONFIG_USE_FIPS_ENDPOINT = N30.ENV_USE_FIPS_ENDPOINT = void 0;
  var wc = y71();
  N30.ENV_USE_FIPS_ENDPOINT = "AWS_USE_FIPS_ENDPOINT";
  N30.CONFIG_USE_FIPS_ENDPOINT = "use_fips_endpoint";
  N30.DEFAULT_USE_FIPS_ENDPOINT = !1;
  N30.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (I) => wc.booleanSelector(I, N30.ENV_USE_FIPS_ENDPOINT, wc.SelectorType.ENV),
    configFileSelector: (I) => wc.booleanSelector(I, N30.CONFIG_USE_FIPS_ENDPOINT, wc.SelectorType.CONFIG),
    default: !1
  }
})
// @from(Start 2331530, End 2331800)
v30 = Y((R30) => {
  Object.defineProperty(R30, "__esModule", {
    value: !0
  });
  R30.normalizeProvider = void 0;
  var pj4 = (I) => {
    if (typeof I === "function") return I;
    let d = Promise.resolve(I);
    return () => d
  };
  R30.normalizeProvider = pj4
})
// @from(Start 2331806, End 2331940)
M_ = Y((P71) => {
  Object.defineProperty(P71, "__esModule", {
    value: !0
  });
  var ij4 = x1();
  ij4.__exportStar(v30(), P71)
})
// @from(Start 2331946, End 2332563)
L30 = Y((M30) => {
  Object.defineProperty(M30, "__esModule", {
    value: !0
  });
  M30.resolveCustomEndpointsConfig = void 0;
  var E30 = M_(),
    nj4 = (I) => {
      var d, G;
      let {
        endpoint: Z,
        urlParser: C
      } = I;
      return {
        ...I,
        tls: (d = I.tls) !== null && d !== void 0 ? d : !0,
        endpoint: E30.normalizeProvider(typeof Z === "string" ? C(Z) : Z),
        isCustomEndpoint: !0,
        useDualstackEndpoint: E30.normalizeProvider((G = I.useDualstackEndpoint) !== null && G !== void 0 ? G : !1)
      }
    };
  M30.resolveCustomEndpointsConfig = nj4
})
// @from(Start 2332569, End 2333362)
$30 = Y((y30) => {
  Object.defineProperty(y30, "__esModule", {
    value: !0
  });
  y30.getEndpointFromRegion = void 0;
  var rj4 = async (I) => {
    var d;
    let {
      tls: G = !0
    } = I, Z = await I.region();
    if (!new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/).test(Z)) throw new Error("Invalid region in client config");
    let W = await I.useDualstackEndpoint(),
      w = await I.useFipsEndpoint(),
      {
        hostname: B
      } = (d = await I.regionInfoProvider(Z, {
        useDualstackEndpoint: W,
        useFipsEndpoint: w
      })) !== null && d !== void 0 ? d : {};
    if (!B) throw new Error("Cannot resolve hostname from client config");
    return I.urlParser(`${G?"https:":"http:"}//${B}`)
  };
  y30.getEndpointFromRegion = rj4
})
// @from(Start 2333368, End 2334173)
m30 = Y((T30) => {
  Object.defineProperty(T30, "__esModule", {
    value: !0
  });
  T30.resolveEndpointsConfig = void 0;
  var u30 = M_(),
    aj4 = $30(),
    sj4 = (I) => {
      var d, G;
      let Z = u30.normalizeProvider((d = I.useDualstackEndpoint) !== null && d !== void 0 ? d : !1),
        {
          endpoint: C,
          useFipsEndpoint: W,
          urlParser: w
        } = I;
      return {
        ...I,
        tls: (G = I.tls) !== null && G !== void 0 ? G : !0,
        endpoint: C ? u30.normalizeProvider(typeof C === "string" ? w(C) : C) : () => aj4.getEndpointFromRegion({
          ...I,
          useDualstackEndpoint: Z,
          useFipsEndpoint: W
        }),
        isCustomEndpoint: !!C,
        useDualstackEndpoint: Z
      }
    };
  T30.resolveEndpointsConfig = sj4
})
// @from(Start 2334179, End 2334399)
l30 = Y((Mf) => {
  Object.defineProperty(Mf, "__esModule", {
    value: !0
  });
  var Bc = x1();
  Bc.__exportStar(K30(), Mf);
  Bc.__exportStar(q30(), Mf);
  Bc.__exportStar(L30(), Mf);
  Bc.__exportStar(m30(), Mf)
})
// @from(Start 2334405, End 2334998)
x30 = Y((b30) => {
  Object.defineProperty(b30, "__esModule", {
    value: !0
  });
  b30.NODE_REGION_CONFIG_FILE_OPTIONS = b30.NODE_REGION_CONFIG_OPTIONS = b30.REGION_INI_NAME = b30.REGION_ENV_NAME = void 0;
  b30.REGION_ENV_NAME = "AWS_REGION";
  b30.REGION_INI_NAME = "region";
  b30.NODE_REGION_CONFIG_OPTIONS = {
    environmentVariableSelector: (I) => I[b30.REGION_ENV_NAME],
    configFileSelector: (I) => I[b30.REGION_INI_NAME],
    default: () => {
      throw new Error("Region is missing")
    }
  };
  b30.NODE_REGION_CONFIG_FILE_OPTIONS = {
    preferredFile: "credentials"
  }
})
// @from(Start 2335004, End 2335236)
$71 = Y((c30) => {
  Object.defineProperty(c30, "__esModule", {
    value: !0
  });
  c30.isFipsRegion = void 0;
  var ej4 = (I) => typeof I === "string" && (I.startsWith("fips-") || I.endsWith("-fips"));
  c30.isFipsRegion = ej4
})
// @from(Start 2335242, End 2335549)
r30 = Y((i30) => {
  Object.defineProperty(i30, "__esModule", {
    value: !0
  });
  i30.getRealRegion = void 0;
  var tj4 = $71(),
    Ik4 = (I) => tj4.isFipsRegion(I) ? ["fips-aws-global", "aws-fips"].includes(I) ? "us-east-1" : I.replace(/fips-(dkr-|prod-)?|-fips/, "") : I;
  i30.getRealRegion = Ik4
})
// @from(Start 2335555, End 2336327)
e30 = Y((s30) => {
  Object.defineProperty(s30, "__esModule", {
    value: !0
  });
  s30.resolveRegionConfig = void 0;
  var a30 = r30(),
    dk4 = $71(),
    Gk4 = (I) => {
      let {
        region: d,
        useFipsEndpoint: G
      } = I;
      if (!d) throw new Error("Region is missing");
      return {
        ...I,
        region: async () => {
          if (typeof d === "string") return a30.getRealRegion(d);
          let Z = await d();
          return a30.getRealRegion(Z)
        },
        useFipsEndpoint: async () => {
          let Z = typeof d === "string" ? d : await d();
          if (dk4.isFipsRegion(Z)) return !0;
          return typeof G !== "function" ? Promise.resolve(!!G) : G()
        }
      }
    };
  s30.resolveRegionConfig = Gk4
})
// @from(Start 2336333, End 2336496)
I60 = Y((Ac) => {
  Object.defineProperty(Ac, "__esModule", {
    value: !0
  });
  var t30 = x1();
  t30.__exportStar(x30(), Ac);
  t30.__exportStar(e30(), Ac)
})
// @from(Start 2336502, End 2336587)
G60 = Y((d60) => {
  Object.defineProperty(d60, "__esModule", {
    value: !0
  })
})
// @from(Start 2336593, End 2336678)
C60 = Y((Z60) => {
  Object.defineProperty(Z60, "__esModule", {
    value: !0
  })
})
// @from(Start 2336684, End 2337104)
B60 = Y((W60) => {
  Object.defineProperty(W60, "__esModule", {
    value: !0
  });
  W60.getHostnameFromVariants = void 0;
  var Zk4 = (I = [], {
    useFipsEndpoint: d,
    useDualstackEndpoint: G
  }) => {
    var Z;
    return (Z = I.find(({
      tags: C
    }) => d === C.includes("fips") && G === C.includes("dualstack"))) === null || Z === void 0 ? void 0 : Z.hostname
  };
  W60.getHostnameFromVariants = Zk4
})
// @from(Start 2337110, End 2337385)
X60 = Y((A60) => {
  Object.defineProperty(A60, "__esModule", {
    value: !0
  });
  A60.getResolvedHostname = void 0;
  var Ck4 = (I, {
    regionHostname: d,
    partitionHostname: G
  }) => d ? d : G ? G.replace("{region}", I) : void 0;
  A60.getResolvedHostname = Ck4
})
// @from(Start 2337391, End 2337725)
D60 = Y((Y60) => {
  Object.defineProperty(Y60, "__esModule", {
    value: !0
  });
  Y60.getResolvedPartition = void 0;
  var Wk4 = (I, {
    partitionHash: d
  }) => {
    var G;
    return (G = Object.keys(d || {}).find((Z) => d[Z].regions.includes(I))) !== null && G !== void 0 ? G : "aws"
  };
  Y60.getResolvedPartition = Wk4
})
// @from(Start 2337731, End 2338185)
g60 = Y((H60) => {
  Object.defineProperty(H60, "__esModule", {
    value: !0
  });
  H60.getResolvedSigningRegion = void 0;
  var wk4 = (I, {
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
  };
  H60.getResolvedSigningRegion = wk4
})
// @from(Start 2338191, End 2339853)
z60 = Y((K60) => {
  Object.defineProperty(K60, "__esModule", {
    value: !0
  });
  K60.getRegionInfo = void 0;
  var J60 = B60(),
    Bk4 = X60(),
    Ak4 = D60(),
    Vk4 = g60(),
    Xk4 = (I, {
      useFipsEndpoint: d = !1,
      useDualstackEndpoint: G = !1,
      signingService: Z,
      regionHash: C,
      partitionHash: W
    }) => {
      var w, B, A, V, X, _;
      let F = Ak4.getResolvedPartition(I, {
          partitionHash: W
        }),
        g = I in C ? I : (B = (w = W[F]) === null || w === void 0 ? void 0 : w.endpoint) !== null && B !== void 0 ? B : I,
        J = {
          useFipsEndpoint: d,
          useDualstackEndpoint: G
        },
        K = J60.getHostnameFromVariants((A = C[g]) === null || A === void 0 ? void 0 : A.variants, J),
        Q = J60.getHostnameFromVariants((V = W[F]) === null || V === void 0 ? void 0 : V.variants, J),
        E = Bk4.getResolvedHostname(g, {
          regionHostname: K,
          partitionHostname: Q
        });
      if (E === void 0) throw new Error(`Endpoint resolution failed for: ${{resolvedRegion:g,useFipsEndpoint:d,useDualstackEndpoint:G}}`);
      let S = Vk4.getResolvedSigningRegion(E, {
        signingRegion: (X = C[g]) === null || X === void 0 ? void 0 : X.signingRegion,
        regionRegex: W[F].regionRegex,
        useFipsEndpoint: d
      });
      return {
        partition: F,
        signingService: Z,
        hostname: E,
        ...S && {
          signingRegion: S
        },
        ...((_ = C[g]) === null || _ === void 0 ? void 0 : _.signingService) && {
          signingService: C[g].signingService
        }
      }
    };
  K60.getRegionInfo = Xk4
})
// @from(Start 2339859, End 2340053)
Q60 = Y((BL) => {
  Object.defineProperty(BL, "__esModule", {
    value: !0
  });
  var u71 = x1();
  u71.__exportStar(G60(), BL);
  u71.__exportStar(C60(), BL);
  u71.__exportStar(z60(), BL)
})
// @from(Start 2340059, End 2340252)
Cd = Y((AL) => {
  Object.defineProperty(AL, "__esModule", {
    value: !0
  });
  var T71 = x1();
  T71.__exportStar(l30(), AL);
  T71.__exportStar(I60(), AL);
  T71.__exportStar(Q60(), AL)
})
// @from(Start 2340258, End 2340521)
m71 = Y((f60) => {
  Object.defineProperty(f60, "__esModule", {
    value: !0
  });
  f60.FieldPosition = void 0;
  var Yk4;
  (function(I) {
    I[I.HEADER = 0] = "HEADER", I[I.TRAILER = 1] = "TRAILER"
  })(Yk4 = f60.FieldPosition || (f60.FieldPosition = {}))
})
// @from(Start 2340527, End 2341180)
v60 = Y((R60) => {
  Object.defineProperty(R60, "__esModule", {
    value: !0
  });
  R60.Field = void 0;
  var _k4 = m71();
  class q60 {
    constructor({
      name: I,
      kind: d = _k4.FieldPosition.HEADER,
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
  R60.Field = q60
})
// @from(Start 2341186, End 2341795)
L60 = Y((M60) => {
  Object.defineProperty(M60, "__esModule", {
    value: !0
  });
  M60.Fields = void 0;
  class E60 {
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
  M60.Fields = E60
})
// @from(Start 2341801, End 2341886)
P60 = Y((y60) => {
  Object.defineProperty(y60, "__esModule", {
    value: !0
  })
})
// @from(Start 2341892, End 2343020)
T60 = Y(($60) => {
  Object.defineProperty($60, "__esModule", {
    value: !0
  });
  $60.HttpRequest = void 0;
  class l71 {
    constructor(I) {
      this.method = I.method || "GET", this.hostname = I.hostname || "localhost", this.port = I.port, this.query = I.query || {}, this.headers = I.headers || {}, this.body = I.body, this.protocol = I.protocol ? I.protocol.slice(-1) !== ":" ? `${I.protocol}:` : I.protocol : "https:", this.path = I.path ? I.path.charAt(0) !== "/" ? `/${I.path}` : I.path : "/"
    }
    static isInstance(I) {
      if (!I) return !1;
      let d = I;
      return "method" in d && "protocol" in d && "hostname" in d && "path" in d && typeof d.query === "object" && typeof d.headers === "object"
    }
    clone() {
      let I = new l71({
        ...this,
        headers: {
          ...this.headers
        }
      });
      if (I.query) I.query = Dk4(I.query);
      return I
    }
  }
  $60.HttpRequest = l71;

  function Dk4(I) {
    return Object.keys(I).reduce((d, G) => {
      let Z = I[G];
      return {
        ...d,
        [G]: Array.isArray(Z) ? [...Z] : Z
      }
    }, {})
  }
})
// @from(Start 2343026, End 2343454)
b60 = Y((m60) => {
  Object.defineProperty(m60, "__esModule", {
    value: !0
  });
  m60.HttpResponse = void 0;
  class O60 {
    constructor(I) {
      this.statusCode = I.statusCode, this.headers = I.headers || {}, this.body = I.body
    }
    static isInstance(I) {
      if (!I) return !1;
      let d = I;
      return typeof d.statusCode === "number" && typeof d.headers === "object"
    }
  }
  m60.HttpResponse = O60
})
// @from(Start 2343460, End 2343684)
k60 = Y((h60) => {
  Object.defineProperty(h60, "__esModule", {
    value: !0
  });
  h60.isValidHostname = void 0;

  function Hk4(I) {
    return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(I)
  }
  h60.isValidHostname = Hk4
})
// @from(Start 2343690, End 2343999)
J8 = Y((HV) => {
  Object.defineProperty(HV, "__esModule", {
    value: !0
  });
  var hg = x1();
  hg.__exportStar(v60(), HV);
  hg.__exportStar(m71(), HV);
  hg.__exportStar(L60(), HV);
  hg.__exportStar(P60(), HV);
  hg.__exportStar(T60(), HV);
  hg.__exportStar(b60(), HV);
  hg.__exportStar(k60(), HV)
})
// @from(Start 2344005, End 2345113)
jg = Y((p60) => {
  Object.defineProperty(p60, "__esModule", {
    value: !0
  });
  p60.getContentLengthPlugin = p60.contentLengthMiddlewareOptions = p60.contentLengthMiddleware = void 0;
  var Fk4 = J8(),
    x60 = "content-length";

  function c60(I) {
    return (d) => async (G) => {
      let Z = G.request;
      if (Fk4.HttpRequest.isInstance(Z)) {
        let {
          body: C,
          headers: W
        } = Z;
        if (C && Object.keys(W).map((w) => w.toLowerCase()).indexOf(x60) === -1) try {
          let w = I(C);
          Z.headers = {
            ...Z.headers,
            [x60]: String(w)
          }
        } catch (w) {}
      }
      return d({
        ...G,
        request: Z
      })
    }
  }
  p60.contentLengthMiddleware = c60;
  p60.contentLengthMiddlewareOptions = {
    step: "build",
    tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
    name: "contentLengthMiddleware",
    override: !0
  };
  var gk4 = (I) => ({
    applyToStack: (d) => {
      d.add(c60(I.bodyLengthChecker), p60.contentLengthMiddlewareOptions)
    }
  });
  p60.getContentLengthPlugin = gk4
})
// @from(Start 2345119, End 2346665)
s60 = Y((r60) => {
  Object.defineProperty(r60, "__esModule", {
    value: !0
  });
  r60.isArnBucketName = r60.isDnsCompatibleBucketName = r60.S3_HOSTNAME_PATTERN = r60.DOT_PATTERN = r60.resolveParamsForS3 = void 0;
  var Kk4 = async (I) => {
    let d = (I === null || I === void 0 ? void 0 : I.Bucket) || "";
    if (typeof I.Bucket === "string") I.Bucket = d.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
    if (r60.isArnBucketName(d)) {
      if (I.ForcePathStyle === !0) throw new Error("Path-style addressing cannot be used with ARN buckets")
    } else if (!r60.isDnsCompatibleBucketName(d) || d.indexOf(".") !== -1 && !String(I.Endpoint).startsWith("http:") || d.toLowerCase() !== d || d.length < 3) I.ForcePathStyle = !0;
    if (I.DisableMultiRegionAccessPoints) I.disableMultiRegionAccessPoints = !0, I.DisableMRAP = !0;
    return I
  };
  r60.resolveParamsForS3 = Kk4;
  var Nk4 = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/,
    zk4 = /(\d+\.){3}\d+/,
    Qk4 = /\.\./;
  r60.DOT_PATTERN = /\./;
  r60.S3_HOSTNAME_PATTERN = /^(.+\.)?s3(-fips)?(\.dualstack)?[.-]([a-z0-9-]+)\./;
  var fk4 = (I) => Nk4.test(I) && !zk4.test(I) && !Qk4.test(I);
  r60.isDnsCompatibleBucketName = fk4;
  var qk4 = (I) => {
    let [d, G, Z, C, W, w] = I.split(":"), B = d === "arn" && I.split(":").length >= 6, A = [d, G, Z, W, w].filter(Boolean).length === 5;
    if (B && !A) throw new Error(`Invalid ARN: ${I} was an invalid ARN.`);
    return d === "arn" && !!G && !!Z && !!W && !!w
  };
  r60.isArnBucketName = qk4
})
// @from(Start 2346671, End 2346806)
o60 = Y((h71) => {
  Object.defineProperty(h71, "__esModule", {
    value: !0
  });
  var Ek4 = x1();
  Ek4.__exportStar(s60(), h71)
})
// @from(Start 2346812, End 2347610)
I80 = Y((e60) => {
  Object.defineProperty(e60, "__esModule", {
    value: !0
  });
  e60.createConfigValueProvider = void 0;
  var Mk4 = (I, d, G) => {
    let Z = async () => {
      var C;
      let W = (C = G[I]) !== null && C !== void 0 ? C : G[d];
      if (typeof W === "function") return W();
      return W
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
  };
  e60.createConfigValueProvider = Mk4
})
// @from(Start 2347616, End 2348930)
k71 = Y((d80) => {
  Object.defineProperty(d80, "__esModule", {
    value: !0
  });
  d80.resolveParams = d80.getEndpointFromInstructions = void 0;
  var Sk4 = o60(),
    Lk4 = I80(),
    yk4 = async (I, d, G, Z) => {
      let C = await d80.resolveParams(I, d, G);
      if (typeof G.endpointProvider !== "function") throw new Error("config.endpointProvider is not set.");
      return G.endpointProvider(C, Z)
    };
  d80.getEndpointFromInstructions = yk4;
  var Pk4 = async (I, d, G) => {
    var Z;
    let C = {},
      W = ((Z = d === null || d === void 0 ? void 0 : d.getEndpointParameterInstructions) === null || Z === void 0 ? void 0 : Z.call(d)) || {};
    for (let [w, B] of Object.entries(W)) switch (B.type) {
      case "staticContextParams":
        C[w] = B.value;
        break;
      case "contextParams":
        C[w] = I[B.name];
        break;
      case "clientContextParams":
      case "builtInParams":
        C[w] = await Lk4.createConfigValueProvider(B.name, w, G)();
        break;
      default:
        throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(B))
    }
    if (Object.keys(W).length === 0) Object.assign(C, G);
    if (String(G.serviceId).toLowerCase() === "s3") await Sk4.resolveParamsForS3(C);
    return C
  };
  d80.resolveParams = Pk4
})
// @from(Start 2348936, End 2349445)
C80 = Y((G80) => {
  Object.defineProperty(G80, "__esModule", {
    value: !0
  });
  G80.parseQueryString = void 0;

  function uk4(I) {
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
  G80.parseQueryString = uk4
})
// @from(Start 2349451, End 2350000)
FV = Y((W80) => {
  Object.defineProperty(W80, "__esModule", {
    value: !0
  });
  W80.parseUrl = void 0;
  var Tk4 = C80(),
    Ok4 = (I) => {
      if (typeof I === "string") return W80.parseUrl(new URL(I));
      let {
        hostname: d,
        pathname: G,
        port: Z,
        protocol: C,
        search: W
      } = I, w;
      if (W) w = Tk4.parseQueryString(W);
      return {
        hostname: d,
        port: Z ? parseInt(Z) : void 0,
        protocol: C,
        path: G,
        query: w
      }
    };
  W80.parseUrl = Ok4
})
// @from(Start 2350006, End 2350331)
c71 = Y((B80) => {
  Object.defineProperty(B80, "__esModule", {
    value: !0
  });
  B80.toEndpointV1 = void 0;
  var w80 = FV(),
    mk4 = (I) => {
      if (typeof I === "object") {
        if ("url" in I) return w80.parseUrl(I.url);
        return I
      }
      return w80.parseUrl(I)
    };
  B80.toEndpointV1 = mk4
})
// @from(Start 2350337, End 2350500)
X80 = Y((Vc) => {
  Object.defineProperty(Vc, "__esModule", {
    value: !0
  });
  var V80 = x1();
  V80.__exportStar(k71(), Vc);
  V80.__exportStar(c71(), Vc)
})
// @from(Start 2350506, End 2351321)
p71 = Y((Y80) => {
  Object.defineProperty(Y80, "__esModule", {
    value: !0
  });
  Y80.endpointMiddleware = void 0;
  var lk4 = k71(),
    bk4 = ({
      config: I,
      instructions: d
    }) => {
      return (G, Z) => async (C) => {
        var W, w;
        let B = await lk4.getEndpointFromInstructions(C.input, {
          getEndpointParameterInstructions() {
            return d
          }
        }, {
          ...I
        }, Z);
        Z.endpointV2 = B, Z.authSchemes = (W = B.properties) === null || W === void 0 ? void 0 : W.authSchemes;
        let A = (w = Z.authSchemes) === null || w === void 0 ? void 0 : w[0];
        if (A) Z.signing_region = A.signingRegion, Z.signing_service = A.signingName;
        return G({
          ...C
        })
      }
    };
  Y80.endpointMiddleware = bk4
})
// @from(Start 2351327, End 2351954)
i71 = Y((D80) => {
  Object.defineProperty(D80, "__esModule", {
    value: !0
  });
  D80.deserializerMiddleware = void 0;
  var hk4 = (I, d) => (G, Z) => async (C) => {
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
        }), !("$metadata" in w)) w.message += `
  Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
      throw w
    }
  };
  D80.deserializerMiddleware = hk4
})
// @from(Start 2351960, End 2352516)
n71 = Y((F80) => {
  Object.defineProperty(F80, "__esModule", {
    value: !0
  });
  F80.serializerMiddleware = void 0;
  var jk4 = (I, d) => (G, Z) => async (C) => {
    var W;
    let w = ((W = Z.endpointV2) === null || W === void 0 ? void 0 : W.url) && I.urlParser ? async () => I.urlParser(Z.endpointV2.url): I.endpoint;
    if (!w) throw new Error("No valid endpoint provider available.");
    let B = await d(C.input, {
      ...I,
      endpoint: w
    });
    return G({
      ...C,
      request: B
    })
  };
  F80.serializerMiddleware = jk4
})
// @from(Start 2352522, End 2353302)
Q80 = Y((J80) => {
  Object.defineProperty(J80, "__esModule", {
    value: !0
  });
  J80.getSerdePlugin = J80.serializerMiddlewareOption = J80.deserializerMiddlewareOption = void 0;
  var kk4 = i71(),
    xk4 = n71();
  J80.deserializerMiddlewareOption = {
    name: "deserializerMiddleware",
    step: "deserialize",
    tags: ["DESERIALIZER"],
    override: !0
  };
  J80.serializerMiddlewareOption = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: ["SERIALIZER"],
    override: !0
  };

  function ck4(I, d, G) {
    return {
      applyToStack: (Z) => {
        Z.add(kk4.deserializerMiddleware(I, G), J80.deserializerMiddlewareOption), Z.add(xk4.serializerMiddleware(I, d), J80.serializerMiddlewareOption)
      }
    }
  }
  J80.getSerdePlugin = ck4
})
// @from(Start 2353308, End 2353501)
r2 = Y((VL) => {
  Object.defineProperty(VL, "__esModule", {
    value: !0
  });
  var r71 = x1();
  r71.__exportStar(i71(), VL);
  r71.__exportStar(Q80(), VL);
  r71.__exportStar(n71(), VL)
})
// @from(Start 2353507, End 2354175)
U80 = Y((f80) => {
  Object.defineProperty(f80, "__esModule", {
    value: !0
  });
  f80.getEndpointPlugin = f80.endpointMiddlewareOptions = void 0;
  var pk4 = r2(),
    ik4 = p71();
  f80.endpointMiddlewareOptions = {
    step: "serialize",
    tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
    name: "endpointV2Middleware",
    override: !0,
    relation: "before",
    toMiddleware: pk4.serializerMiddlewareOption.name
  };
  var nk4 = (I, d) => ({
    applyToStack: (G) => {
      G.addRelativeTo(ik4.endpointMiddleware({
        config: I,
        instructions: d
      }), f80.endpointMiddlewareOptions)
    }
  });
  f80.getEndpointPlugin = nk4
})
// @from(Start 2354181, End 2354951)
M80 = Y((v80) => {
  Object.defineProperty(v80, "__esModule", {
    value: !0
  });
  v80.resolveEndpointConfig = void 0;
  var a71 = M_(),
    rk4 = c71(),
    ak4 = (I) => {
      var d, G, Z;
      let C = (d = I.tls) !== null && d !== void 0 ? d : !0,
        {
          endpoint: W
        } = I,
        w = W != null ? async () => rk4.toEndpointV1(await a71.normalizeProvider(W)()): void 0;
      return {
        ...I,
        endpoint: w,
        tls: C,
        isCustomEndpoint: !!W,
        useDualstackEndpoint: a71.normalizeProvider((G = I.useDualstackEndpoint) !== null && G !== void 0 ? G : !1),
        useFipsEndpoint: a71.normalizeProvider((Z = I.useFipsEndpoint) !== null && Z !== void 0 ? Z : !1)
      }
    };
  v80.resolveEndpointConfig = ak4
})
// @from(Start 2354957, End 2355042)
L80 = Y((S80) => {
  Object.defineProperty(S80, "__esModule", {
    value: !0
  })
})
// @from(Start 2355048, End 2355297)
u2 = Y((kg) => {
  Object.defineProperty(kg, "__esModule", {
    value: !0
  });
  var XL = x1();
  XL.__exportStar(X80(), kg);
  XL.__exportStar(p71(), kg);
  XL.__exportStar(U80(), kg);
  XL.__exportStar(M80(), kg);
  XL.__exportStar(L80(), kg)
})
// @from(Start 2355303, End 2356442)
Xc = Y((y80) => {
  Object.defineProperty(y80, "__esModule", {
    value: !0
  });
  y80.getHostHeaderPlugin = y80.hostHeaderMiddlewareOptions = y80.hostHeaderMiddleware = y80.resolveHostHeaderConfig = void 0;
  var sk4 = J8();

  function ok4(I) {
    return I
  }
  y80.resolveHostHeaderConfig = ok4;
  var ek4 = (I) => (d) => async (G) => {
    if (!sk4.HttpRequest.isInstance(G.request)) return d(G);
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
  y80.hostHeaderMiddleware = ek4;
  y80.hostHeaderMiddlewareOptions = {
    name: "hostHeaderMiddleware",
    step: "build",
    priority: "low",
    tags: ["HOST"],
    override: !0
  };
  var tk4 = (I) => ({
    applyToStack: (d) => {
      d.add(y80.hostHeaderMiddleware(I), y80.hostHeaderMiddlewareOptions)
    }
  });
  y80.getHostHeaderPlugin = tk4
})
// @from(Start 2356448, End 2358264)
b80 = Y((T80) => {
  Object.defineProperty(T80, "__esModule", {
    value: !0
  });
  T80.getLoggerPlugin = T80.loggerMiddlewareOptions = T80.loggerMiddleware = void 0;
  var dx4 = () => (I, d) => async (G) => {
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
  T80.loggerMiddleware = dx4;
  T80.loggerMiddlewareOptions = {
    name: "loggerMiddleware",
    tags: ["LOGGER"],
    step: "initialize",
    override: !0
  };
  var Gx4 = (I) => ({
    applyToStack: (d) => {
      d.add(T80.loggerMiddleware(), T80.loggerMiddlewareOptions)
    }
  });
  T80.getLoggerPlugin = Gx4
})
// @from(Start 2358270, End 2358404)
Yc = Y((s71) => {
  Object.defineProperty(s71, "__esModule", {
    value: !0
  });
  var Zx4 = x1();
  Zx4.__exportStar(b80(), s71)
})
// @from(Start 2358410, End 2359583)
_c = Y((j80) => {
  Object.defineProperty(j80, "__esModule", {
    value: !0
  });
  j80.getRecursionDetectionPlugin = j80.addRecursionDetectionMiddlewareOptions = j80.recursionDetectionMiddleware = void 0;
  var Cx4 = J8(),
    h80 = "X-Amzn-Trace-Id",
    Wx4 = "AWS_LAMBDA_FUNCTION_NAME",
    wx4 = "_X_AMZN_TRACE_ID",
    Bx4 = (I) => (d) => async (G) => {
      let {
        request: Z
      } = G;
      if (!Cx4.HttpRequest.isInstance(Z) || I.runtime !== "node" || Z.headers.hasOwnProperty(h80)) return d(G);
      let C = process.env[Wx4],
        W = process.env[wx4],
        w = (B) => typeof B === "string" && B.length > 0;
      if (w(C) && w(W)) Z.headers[h80] = W;
      return d({
        ...G,
        request: Z
      })
    };
  j80.recursionDetectionMiddleware = Bx4;
  j80.addRecursionDetectionMiddlewareOptions = {
    step: "build",
    tags: ["RECURSION_DETECTION"],
    name: "recursionDetectionMiddleware",
    override: !0,
    priority: "low"
  };
  var Ax4 = (I) => ({
    applyToStack: (d) => {
      d.add(j80.recursionDetectionMiddleware(I), j80.addRecursionDetectionMiddlewareOptions)
    }
  });
  j80.getRecursionDetectionPlugin = Ax4
})
// @from(Start 2359589, End 2359962)
Dc = Y((n80) => {
  Object.defineProperty(n80, "__esModule", {
    value: !0
  });
  n80.DEFAULT_RETRY_MODE = n80.DEFAULT_MAX_ATTEMPTS = n80.RETRY_MODES = void 0;
  var i80;
  (function(I) {
    I.STANDARD = "standard", I.ADAPTIVE = "adaptive"
  })(i80 = n80.RETRY_MODES || (n80.RETRY_MODES = {}));
  n80.DEFAULT_MAX_ATTEMPTS = 3;
  n80.DEFAULT_RETRY_MODE = i80.STANDARD
})
// @from(Start 2359968, End 2361023)
o80 = Y((a80) => {
  Object.defineProperty(a80, "__esModule", {
    value: !0
  });
  a80.NODEJS_TIMEOUT_ERROR_CODES = a80.TRANSIENT_ERROR_STATUS_CODES = a80.TRANSIENT_ERROR_CODES = a80.THROTTLING_ERROR_CODES = a80.CLOCK_SKEW_ERROR_CODES = void 0;
  a80.CLOCK_SKEW_ERROR_CODES = ["AuthFailure", "InvalidSignatureException", "RequestExpired", "RequestInTheFuture", "RequestTimeTooSkewed", "SignatureDoesNotMatch"];
  a80.THROTTLING_ERROR_CODES = ["BandwidthLimitExceeded", "EC2ThrottledException", "LimitExceededException", "PriorRequestNotComplete", "ProvisionedThroughputExceededException", "RequestLimitExceeded", "RequestThrottled", "RequestThrottledException", "SlowDown", "ThrottledException", "Throttling", "ThrottlingException", "TooManyRequestsException", "TransactionInProgressException"];
  a80.TRANSIENT_ERROR_CODES = ["AbortError", "TimeoutError", "RequestTimeout", "RequestTimeoutException"];
  a80.TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
  a80.NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"]
})
// @from(Start 2361029, End 2362358)
_L = Y((e80) => {
  Object.defineProperty(e80, "__esModule", {
    value: !0
  });
  e80.isServerError = e80.isTransientError = e80.isThrottlingError = e80.isClockSkewError = e80.isRetryableByTrait = void 0;
  var YL = o80(),
    Hx4 = (I) => I.$retryable !== void 0;
  e80.isRetryableByTrait = Hx4;
  var Fx4 = (I) => YL.CLOCK_SKEW_ERROR_CODES.includes(I.name);
  e80.isClockSkewError = Fx4;
  var gx4 = (I) => {
    var d, G;
    return ((d = I.$metadata) === null || d === void 0 ? void 0 : d.httpStatusCode) === 429 || YL.THROTTLING_ERROR_CODES.includes(I.name) || ((G = I.$retryable) === null || G === void 0 ? void 0 : G.throttling) == !0
  };
  e80.isThrottlingError = gx4;
  var Jx4 = (I) => {
    var d;
    return YL.TRANSIENT_ERROR_CODES.includes(I.name) || YL.NODEJS_TIMEOUT_ERROR_CODES.includes((I === null || I === void 0 ? void 0 : I.code) || "") || YL.TRANSIENT_ERROR_STATUS_CODES.includes(((d = I.$metadata) === null || d === void 0 ? void 0 : d.httpStatusCode) || 0)
  };
  e80.isTransientError = Jx4;
  var Kx4 = (I) => {
    var d;
    if (((d = I.$metadata) === null || d === void 0 ? void 0 : d.httpStatusCode) !== void 0) {
      let G = I.$metadata.httpStatusCode;
      if (500 <= G && G <= 599 && !e80.isTransientError(I)) return !0;
      return !1
    }
    return !1
  };
  e80.isServerError = Kx4
})