
// @from(Start 5668555, End 5674252)
class tj extends tA.PureComponent {
  static displayName = "InternalApp";
  static getDerivedStateFromError(I) {
    return {
      error: I
    }
  }
  state = {
    isFocusEnabled: !0,
    activeFocusId: void 0,
    focusables: [],
    error: void 0
  };
  rawModeEnabledCount = 0;
  internal_eventEmitter = new mH4;
  isRawModeSupported() {
    return this.props.stdin.isTTY
  }
  render() {
    return tA.default.createElement(U91.Provider, {
      value: {
        exit: this.handleExit
      }
    }, tA.default.createElement(aj.Provider, {
      value: {
        stdin: this.props.stdin,
        setRawMode: this.handleSetRawMode,
        isRawModeSupported: this.isRawModeSupported(),
        internal_exitOnCtrlC: this.props.exitOnCtrlC,
        internal_eventEmitter: this.internal_eventEmitter
      }
    }, tA.default.createElement(v91.Provider, {
      value: {
        stdout: this.props.stdout,
        write: this.props.writeToStdout
      }
    }, tA.default.createElement(E91.Provider, {
      value: {
        stderr: this.props.stderr,
        write: this.props.writeToStderr
      }
    }, tA.default.createElement(sj.Provider, {
      value: {
        activeId: this.state.activeFocusId,
        add: this.addFocusable,
        remove: this.removeFocusable,
        activate: this.activateFocusable,
        deactivate: this.deactivateFocusable,
        enableFocus: this.enableFocus,
        disableFocus: this.disableFocus,
        focusNext: this.focusNext,
        focusPrevious: this.focusPrevious,
        focus: this.focus
      }
    }, this.state.error ? tA.default.createElement(y91, {
      error: this.state.error
    }) : this.props.children)))))
  }
  componentDidMount() {
    YQ.hide(this.props.stdout)
  }
  componentWillUnmount() {
    if (YQ.show(this.props.stdout), this.isRawModeSupported()) this.handleSetRawMode(!1)
  }
  componentDidCatch(I) {
    this.handleExit(I)
  }
  handleSetRawMode = (I) => {
    let {
      stdin: d
    } = this.props;
    if (!this.isRawModeSupported())
      if (d === lH4.stdin) throw new Error(`Raw mode is not supported on the current process.stdin, which Ink uses as input stream by default.
Read about how to prevent this error on https://github.com/vadimdemedes/ink/#israwmodesupported`);
      else throw new Error(`Raw mode is not supported on the stdin provided to Ink.
Read about how to prevent this error on https://github.com/vadimdemedes/ink/#israwmodesupported`);
    if (d.setEncoding("utf8"), I) {
      if (this.rawModeEnabledCount === 0) d.ref(), d.setRawMode(!0), d.addListener("readable", this.handleReadable);
      this.rawModeEnabledCount++;
      return
    }
    if (--this.rawModeEnabledCount === 0) d.setRawMode(!1), d.removeListener("readable", this.handleReadable), d.unref()
  };
  handleReadable = () => {
    let I;
    while ((I = this.props.stdin.read()) !== null) this.handleInput(I), this.internal_eventEmitter.emit("input", I)
  };
  handleInput = (I) => {
    if (I === "\x03" && this.props.exitOnCtrlC) this.handleExit();
    if (I === jH4 && this.state.activeFocusId) this.setState({
      activeFocusId: void 0
    });
    if (this.state.isFocusEnabled && this.state.focusables.length > 0) {
      if (I === bH4) this.focusNext();
      if (I === hH4) this.focusPrevious()
    }
  };
  handleExit = (I) => {
    if (this.isRawModeSupported()) this.handleSetRawMode(!1);
    this.props.onExit(I)
  };
  enableFocus = () => {
    this.setState({
      isFocusEnabled: !0
    })
  };
  disableFocus = () => {
    this.setState({
      isFocusEnabled: !1
    })
  };
  focus = (I) => {
    this.setState((d) => {
      if (!d.focusables.some((Z) => Z?.id === I)) return d;
      return {
        activeFocusId: I
      }
    })
  };
  focusNext = () => {
    this.setState((I) => {
      let d = I.focusables.find((Z) => Z.isActive)?.id;
      return {
        activeFocusId: this.findNextFocusable(I) ?? d
      }
    })
  };
  focusPrevious = () => {
    this.setState((I) => {
      let d = I.focusables.findLast((Z) => Z.isActive)?.id;
      return {
        activeFocusId: this.findPreviousFocusable(I) ?? d
      }
    })
  };
  addFocusable = (I, {
    autoFocus: d
  }) => {
    this.setState((G) => {
      let Z = G.activeFocusId;
      if (!Z && d) Z = I;
      return {
        activeFocusId: Z,
        focusables: [...G.focusables, {
          id: I,
          isActive: !0
        }]
      }
    })
  };
  removeFocusable = (I) => {
    this.setState((d) => ({
      activeFocusId: d.activeFocusId === I ? void 0 : d.activeFocusId,
      focusables: d.focusables.filter((G) => {
        return G.id !== I
      })
    }))
  };
  activateFocusable = (I) => {
    this.setState((d) => ({
      focusables: d.focusables.map((G) => {
        if (G.id !== I) return G;
        return {
          id: I,
          isActive: !0
        }
      })
    }))
  };
  deactivateFocusable = (I) => {
    this.setState((d) => ({
      activeFocusId: d.activeFocusId === I ? void 0 : d.activeFocusId,
      focusables: d.focusables.map((G) => {
        if (G.id !== I) return G;
        return {
          id: I,
          isActive: !1
        }
      })
    }))
  };
  findNextFocusable = (I) => {
    let d = I.focusables.findIndex((G) => {
      return G.id === I.activeFocusId
    });
    for (let G = d + 1; G < I.focusables.length; G++) {
      let Z = I.focusables[G];
      if (Z?.isActive) return Z.id
    }
    return
  };
  findPreviousFocusable = (I) => {
    let d = I.focusables.findIndex((G) => {
      return G.id === I.activeFocusId
    });
    for (let G = d - 1; G >= 0; G--) {
      let Z = I.focusables[G];
      if (Z?.isActive) return Z.id
    }
    return
  }
}
// @from(Start 5674257, End 5674271)
Qp1 = () => {}
// @from(Start 5674273, End 5679358)
class Ik {
  options;
  log;
  throttledLog;
  isUnmounted;
  lastOutput;
  lastOutputHeight;
  container;
  rootNode = null;
  fullStaticOutput;
  exitPromise;
  restoreConsole;
  unsubscribeResize;
  constructor(I) {
    if (U51(this), this.options = I, this.log = ec1.create(I.stdout), this.throttledLog = I.debug ? this.log : $h(this.log, void 0, {
        leading: !0,
        trailing: !0
      }), this.isUnmounted = !1, this.lastOutput = "", this.lastOutputHeight = 0, this.fullStaticOutput = "", this.unsubscribeExit = qp1.default(this.unmount, {
        alwaysLast: !1
      }), I.patchConsole) this.patchConsole();
    if (!Vg) I.stdout.on("resize", this.resized), this.unsubscribeResize = () => {
      I.stdout.off("resize", this.resized)
    };
    if (this.rootNode = Qj("ink-root"), this.rootNode.onComputeLayout = this.calculateLayout, this.rootNode.onRender = I.debug ? this.onRender : $h(this.onRender, 32, {
        leading: !0,
        trailing: !0
      }), this.rootNode.onImmediateRender = this.onRender, this.container = Jg.createContainer(this.rootNode, 0, null, !1, null, "id", () => {}, null), kH4.env.DEV === "true") Jg.injectIntoDevTools({
      bundleType: 0,
      version: "16.13.1",
      rendererPackageName: "ink"
    })
  }
  resized = () => {
    this.calculateLayout(), this.onRender(!0)
  };
  resolveExitPromise = () => {};
  rejectExitPromise = () => {};
  unsubscribeExit = () => {};
  calculateLayout = () => {
    let I = this.options.stdout.columns || 80;
    if (!this.rootNode) return;
    this.rootNode.yogaNode.setWidth(I), this.rootNode.yogaNode.calculateLayout(void 0, void 0, Dj.DIRECTION_LTR)
  };
  onRender(I = !1) {
    if (this.isUnmounted) return;
    if (!this.rootNode) return;
    let {
      output: d,
      outputHeight: G,
      staticOutput: Z
    } = mc1(this.rootNode), C = Z && Z !== `
`;
    if (this.options.debug) {
      if (C) this.fullStaticOutput += Z;
      this.options.stdout.write(this.fullStaticOutput + d);
      return
    }
    if (Vg) {
      if (C) this.options.stdout.write(Z);
      this.lastOutput = d, this.lastOutputHeight = G;
      return
    }
    if (C) this.fullStaticOutput += Z;
    if (G >= this.options.stdout.rows || this.lastOutputHeight >= this.options.stdout.rows) {
      if (this.options.onFlicker) this.options.onFlicker();
      this.options.stdout.write(OY.clearTerminal + this.fullStaticOutput + d + `
`), this.lastOutput = d, this.lastOutputHeight = G, this.log.updateLineCount(d + `
`);
      return
    }
    if (I) {
      this.options.stdout.write(OY.clearTerminal + this.fullStaticOutput + d + `
`), this.lastOutput = d, this.lastOutputHeight = G, this.log.updateLineCount(d + `
`);
      return
    }
    if (C) this.log.clear(), this.options.stdout.write(Z), this.throttledLog(d);
    if (!C && d !== this.lastOutput) this.throttledLog(d);
    this.lastOutput = d, this.lastOutputHeight = G
  }
  render(I) {
    let d = fp1.default.createElement(tj, {
      stdin: this.options.stdin,
      stdout: this.options.stdout,
      stderr: this.options.stderr,
      writeToStdout: this.writeToStdout,
      writeToStderr: this.writeToStderr,
      exitOnCtrlC: this.options.exitOnCtrlC,
      onExit: this.unmount
    }, I);
    Jg.updateContainer(d, this.container, null, Qp1)
  }
  writeToStdout(I) {
    if (this.isUnmounted) return;
    if (this.options.debug) {
      this.options.stdout.write(I + this.fullStaticOutput + this.lastOutput);
      return
    }
    if (Vg) {
      this.options.stdout.write(I);
      return
    }
    this.log.clear(), this.options.stdout.write(I), this.log(this.lastOutput)
  }
  writeToStderr(I) {
    if (this.isUnmounted) return;
    if (this.options.debug) {
      this.options.stderr.write(I), this.options.stdout.write(this.fullStaticOutput + this.lastOutput);
      return
    }
    if (Vg) {
      this.options.stderr.write(I);
      return
    }
    this.log.clear(), this.options.stderr.write(I), this.log(this.lastOutput)
  }
  unmount(I) {
    if (this.isUnmounted) return;
    if (this.calculateLayout(), this.onRender(), this.unsubscribeExit(), typeof this.restoreConsole === "function") this.restoreConsole();
    if (typeof this.unsubscribeResize === "function") this.unsubscribeResize();
    if (Vg) this.options.stdout.write(this.lastOutput + `
`);
    else if (!this.options.debug) this.log.done();
    if (this.isUnmounted = !0, Jg.updateContainer(null, this.container, null, Qp1), _Q.delete(this.options.stdout), I instanceof Error) this.rejectExitPromise(I);
    else this.resolveExitPromise()
  }
  async waitUntilExit() {
    return this.exitPromise ||= new Promise((I, d) => {
      this.resolveExitPromise = I, this.rejectExitPromise = d
    }), this.exitPromise
  }
  clear() {
    if (!Vg && !this.options.debug) this.log.clear()
  }
  patchConsole() {
    if (this.options.debug) return;
    this.restoreConsole = oj1((I, d) => {
      if (I === "stdout") this.writeToStdout(d);
      if (I === "stderr") {
        if (!d.startsWith("The above error occurred")) this.writeToStderr(d)
      }
    })
  }
}
// @from(Start 5679363, End 5679822)
cH4 = (I, d) => {
    let G = {
        stdout: dk.stdout,
        stdin: dk.stdin,
        stderr: dk.stderr,
        debug: !1,
        exitOnCtrlC: !0,
        patchConsole: !0,
        ...pH4(d)
      },
      Z = iH4(G.stdout, () => new Ik(G));
    return Z.render(I), {
      rerender: Z.render,
      unmount() {
        Z.unmount()
      },
      waitUntilExit: Z.waitUntilExit,
      cleanup: () => _Q.delete(G.stdout),
      clear: Z.clear
    }
  }
// @from(Start 5679826, End 5679834)
wZ = cH4
// @from(Start 5679838, End 5679955)
pH4 = (I = {}) => {
    if (I instanceof xH4) return {
      stdout: I,
      stdin: dk.stdin
    };
    return I
  }
// @from(Start 5679959, End 5680051)
iH4 = (I, d) => {
    let G = _Q.get(I);
    if (!G) G = d(), _Q.set(I, G);
    return G
  }
// @from(Start 5680057, End 5680073)
IV = J1(u1(), 1)
// @from(Start 5680076, End 5680568)
function DQ(I) {
  let {
    items: d,
    children: G,
    style: Z
  } = I, [C, W] = IV.useState(0), w = IV.useMemo(() => {
    return d.slice(C)
  }, [d, C]);
  IV.useLayoutEffect(() => {
    W(d.length)
  }, [d.length]);
  let B = w.map((V, X) => {
      return G(V, C + X)
    }),
    A = IV.useMemo(() => ({
      position: "absolute",
      flexDirection: "column",
      ...Z
    }), [Z]);
  return IV.default.createElement("ink-box", {
    internal_static: !0,
    style: A
  }, B)
}
// @from(Start 5680573, End 5680590)
Rp1 = J1(u1(), 1)
// @from(Start 5680593, End 5680860)
function Gk({
  children: I,
  transform: d
}) {
  if (I === void 0 || I === null) return null;
  return Rp1.default.createElement("ink-text", {
    style: {
      flexGrow: 0,
      flexShrink: 1,
      flexDirection: "row"
    },
    internal_transform: d
  }, I)
}
// @from(Start 5680865, End 5680882)
Up1 = J1(u1(), 1)
// @from(Start 5680885, End 5680988)
function C6({
  count: I = 1
}) {
  return Up1.default.createElement("ink-text", null, `
`.repeat(I))
}
// @from(Start 5680993, End 5681010)
nH4 = J1(u1(), 1)
// @from(Start 5681016, End 5681033)
P91 = J1(u1(), 1)
// @from(Start 5681086, End 5681117)
aH4 = /^(?:\x1b)([a-zA-Z0-9])$/
// @from(Start 5681121, End 5681203)
sH4 = /^(?:\x1b+)(O|N|\[|\[\[)(?:(\d+)(?:;(\d+))?([~^$])|(?:1;)?(\d+)?([a-zA-Z]))/
// @from(Start 5681207, End 5682452)
vp1 = {
    OP: "f1",
    OQ: "f2",
    OR: "f3",
    OS: "f4",
    "[11~": "f1",
    "[12~": "f2",
    "[13~": "f3",
    "[14~": "f4",
    "[[A": "f1",
    "[[B": "f2",
    "[[C": "f3",
    "[[D": "f4",
    "[[E": "f5",
    "[15~": "f5",
    "[17~": "f6",
    "[18~": "f7",
    "[19~": "f8",
    "[20~": "f9",
    "[21~": "f10",
    "[23~": "f11",
    "[24~": "f12",
    "[A": "up",
    "[B": "down",
    "[C": "right",
    "[D": "left",
    "[E": "clear",
    "[F": "end",
    "[H": "home",
    OA: "up",
    OB: "down",
    OC: "right",
    OD: "left",
    OE: "clear",
    OF: "end",
    OH: "home",
    "[1~": "home",
    "[2~": "insert",
    "[3~": "delete",
    "[4~": "end",
    "[5~": "pageup",
    "[6~": "pagedown",
    "[[5~": "pageup",
    "[[6~": "pagedown",
    "[7~": "home",
    "[8~": "end",
    "[a": "up",
    "[b": "down",
    "[c": "right",
    "[d": "left",
    "[e": "clear",
    "[2$": "insert",
    "[3$": "delete",
    "[5$": "pageup",
    "[6$": "pagedown",
    "[7$": "home",
    "[8$": "end",
    Oa: "up",
    Ob: "down",
    Oc: "right",
    Od: "left",
    Oe: "clear",
    "[2^": "insert",
    "[3^": "delete",
    "[5^": "pageup",
    "[6^": "pagedown",
    "[7^": "home",
    "[8^": "end",
    "[Z": "tab"
  }
// @from(Start 5682456, End 5682498)
Ep1 = [...Object.values(vp1), "backspace"]
// @from(Start 5682502, End 5682622)
oH4 = (I) => {
    return ["[a", "[b", "[c", "[d", "[e", "[2$", "[3$", "[5$", "[6$", "[7$", "[8$", "[Z"].includes(I)
  }
// @from(Start 5682626, End 5682740)
eH4 = (I) => {
    return ["Oa", "Ob", "Oc", "Od", "Oe", "[2^", "[3^", "[5^", "[6^", "[7^", "[8^"].includes(I)
  }
// @from(Start 5682744, End 5685814)
tH4 = (I = "") => {
    let d;
    if (rH4.isBuffer(I))
      if (I[0] > 127 && I[1] === void 0) I[0] -= 128, I = "\x1B" + String(I);
      else I = String(I);
    else if (I !== void 0 && typeof I !== "string") I = String(I);
    else if (!I) I = "";
    let G = {
      name: "",
      fn: !1,
      ctrl: !1,
      meta: !1,
      shift: !1,
      option: !1,
      sequence: I,
      raw: I
    };
    if (G.sequence = G.sequence || I || G.name, I === "\r") G.raw = void 0, G.name = "return";
    else if (I === `
`) G.name = "enter";
    else if (I === "\t") G.name = "tab";
    else if (I === "\b" || I === "\x1B\b") G.name = "backspace", G.meta = I.charAt(0) === "\x1B";
    else if (I === "" || I === "\x1B") G.name = "backspace", G.meta = I.charAt(0) === "\x1B";
    else if (I === "\x1B" || I === "\x1B\x1B") G.name = "escape", G.meta = I.length === 2;
    else if (I === " " || I === "\x1B ") G.name = "space", G.meta = I.length === 2;
    else if (I <= "\x1A" && I.length == 1) G.name = String.fromCharCode(I.charCodeAt(0) + 97 - 1), G.ctrl = !0;
    else if (I.length === 1 && I >= "0" && I <= "9") G.name = "number";
    else if (I.length === 1 && I >= "a" && I <= "z") G.name = I;
    else if (I.length === 1 && I >= "A" && I <= "Z") G.name = I.toLowerCase(), G.shift = !0;
    else if (d = aH4.exec(I)) G.meta = !0, G.shift = /^[A-Z]$/.test(d[1]);
    else if (d = sH4.exec(I)) {
      let Z = [...I];
      if (Z[0] === "\x1B" && Z[1] === "\x1B") G.option = !0;
      let C = [d[1], d[2], d[4], d[6]].filter(Boolean).join(""),
        W = (d[3] || d[5] || 1) - 1;
      G.ctrl = !!(W & 4), G.meta = !!(W & 10), G.shift = !!(W & 1), G.code = C, G.name = vp1[C], G.shift = oH4(C) || G.shift, G.ctrl = eH4(C) || G.ctrl
    }
    if (G.raw === "\x1Bb") G.meta = !0, G.name = "left";
    else if (G.raw === "\x1Bf") G.meta = !0, G.name = "right";
    switch (I) {
      case "\x1B[1~":
        return {
          name: "home", ctrl: !1, meta: !1, shift: !1, option: !1, fn: !1, sequence: I, raw: I
        };
      case "\x1B[4~":
        return {
          name: "end", ctrl: !1, meta: !1, shift: !1, option: !1, fn: !1, sequence: I, raw: I
        };
      case "\x1B[5~":
        return {
          name: "pageup", ctrl: !1, meta: !1, shift: !1, option: !1, fn: !1, sequence: I, raw: I
        };
      case "\x1B[6~":
        return {
          name: "pagedown", ctrl: !1, meta: !1, shift: !1, option: !1, fn: !1, sequence: I, raw: I
        };
      case "\x1B[1;5D":
        return {
          name: "left", ctrl: !0, meta: !1, shift: !1, option: !1, fn: !1, sequence: I, raw: I
        };
      case "\x1B[1;5C":
        return {
          name: "right", ctrl: !0, meta: !1, shift: !1, option: !1, fn: !1, sequence: I, raw: I
        };
      case "\x1B[1~":
        return {
          name: "left", ctrl: !0, fn: !0, meta: !1, shift: !1, option: !1, sequence: I, raw: I
        };
      case "\x1B[4~":
        return {
          name: "right", ctrl: !0, fn: !0, meta: !1, shift: !1, option: !1, sequence: I, raw: I
        }
    }
    return G
  }
// @from(Start 5685818, End 5685827)
Mp1 = tH4
// @from(Start 5685833, End 5685850)
Sp1 = J1(u1(), 1)
// @from(Start 5685856, End 5685886)
IF4 = () => Sp1.useContext(aj)
// @from(Start 5685890, End 5685898)
Zk = IF4
// @from(Start 5685904, End 5687468)
dF4 = (I, d = {}) => {
    let {
      stdin: G,
      setRawMode: Z,
      internal_exitOnCtrlC: C,
      internal_eventEmitter: W
    } = Zk();
    P91.useEffect(() => {
      if (d.isActive === !1) return;
      return Z(!0), () => {
        Z(!1)
      }
    }, [d.isActive, Z]), P91.useEffect(() => {
      if (d.isActive === !1) return;
      let w = (B) => {
        let A = Mp1(B);
        A.name;
        let V = {
            upArrow: A.name === "up",
            downArrow: A.name === "down",
            leftArrow: A.name === "left",
            rightArrow: A.name === "right",
            pageDown: A.name === "pagedown",
            pageUp: A.name === "pageup",
            home: A.name === "home",
            end: A.name === "end",
            return: A.name === "return",
            escape: A.name === "escape",
            fn: A.fn,
            ctrl: A.ctrl,
            shift: A.shift,
            tab: A.name === "tab",
            backspace: A.name === "backspace",
            delete: A.name === "delete",
            meta: A.meta || A.name === "escape" || A.option
          },
          X = A.ctrl ? A.name : A.sequence;
        if (Ep1.includes(A.name)) X = "";
        if (X.startsWith("\x1B")) X = X.slice(1);
        if (X.length === 1 && typeof X[0] === "string" && X[0].toUpperCase() === X[0]) V.shift = !0;
        if (!(X === "c" && V.ctrl) || !C) Jg.batchedUpdates(() => {
          I(X, V)
        })
      };
      return W?.on("input", w), () => {
        W?.removeListener("input", w)
      }
    }, [d.isActive, G, C, I])
  }
// @from(Start 5687472, End 5687480)
C4 = dF4
// @from(Start 5687486, End 5687503)
GF4 = J1(u1(), 1)
// @from(Start 5687509, End 5687526)
ZF4 = J1(u1(), 1)
// @from(Start 5687532, End 5687549)
CF4 = J1(u1(), 1)
// @from(Start 5687555, End 5687572)
$91 = J1(u1(), 1)
// @from(Start 5687578, End 5687595)
WF4 = J1(u1(), 1)
// @from(Start 5687601, End 5687617)
T2 = J1(u1(), 1)
// @from(Start 5687623, End 5687640)
xF4 = J1(u1(), 1)
// @from(Start 5687646, End 5687662)
kM = J1(u1(), 1)
// @from(Start 5687666, End 5687684)
hF4 = J1($p1(), 1)
// @from(Start 5687719, End 5688160)
function u91() {
  let {
    env: I
  } = up1, {
    TERM: d,
    TERM_PROGRAM: G
  } = I;
  if (up1.platform !== "win32") return d !== "linux";
  return Boolean(I.WT_SESSION) || Boolean(I.TERMINUS_SUBLIME) || I.ConEmuTask === "{cmd::Cmder}" || G === "Terminus-Sublime" || G === "vscode" || d === "xterm-256color" || d === "alacritty" || d === "rxvt-unicode" || d === "rxvt-unicode-256color" || I.TERMINAL_EMULATOR === "JetBrains-JediTerm"
}
// @from(Start 5688165, End 5693601)
Tp1 = {
    circleQuestionMark: "(?)",
    questionMarkPrefix: "(?)",
    square: "█",
    squareDarkShade: "▓",
    squareMediumShade: "▒",
    squareLightShade: "░",
    squareTop: "▀",
    squareBottom: "▄",
    squareLeft: "▌",
    squareRight: "▐",
    squareCenter: "■",
    bullet: "●",
    dot: "․",
    ellipsis: "…",
    pointerSmall: "›",
    triangleUp: "▲",
    triangleUpSmall: "▴",
    triangleDown: "▼",
    triangleDownSmall: "▾",
    triangleLeftSmall: "◂",
    triangleRightSmall: "▸",
    home: "⌂",
    heart: "♥",
    musicNote: "♪",
    musicNoteBeamed: "♫",
    arrowUp: "↑",
    arrowDown: "↓",
    arrowLeft: "←",
    arrowRight: "→",
    arrowLeftRight: "↔",
    arrowUpDown: "↕",
    almostEqual: "≈",
    notEqual: "≠",
    lessOrEqual: "≤",
    greaterOrEqual: "≥",
    identical: "≡",
    infinity: "∞",
    subscriptZero: "₀",
    subscriptOne: "₁",
    subscriptTwo: "₂",
    subscriptThree: "₃",
    subscriptFour: "₄",
    subscriptFive: "₅",
    subscriptSix: "₆",
    subscriptSeven: "₇",
    subscriptEight: "₈",
    subscriptNine: "₉",
    oneHalf: "½",
    oneThird: "⅓",
    oneQuarter: "¼",
    oneFifth: "⅕",
    oneSixth: "⅙",
    oneEighth: "⅛",
    twoThirds: "⅔",
    twoFifths: "⅖",
    threeQuarters: "¾",
    threeFifths: "⅗",
    threeEighths: "⅜",
    fourFifths: "⅘",
    fiveSixths: "⅚",
    fiveEighths: "⅝",
    sevenEighths: "⅞",
    line: "─",
    lineBold: "━",
    lineDouble: "═",
    lineDashed0: "┄",
    lineDashed1: "┅",
    lineDashed2: "┈",
    lineDashed3: "┉",
    lineDashed4: "╌",
    lineDashed5: "╍",
    lineDashed6: "╴",
    lineDashed7: "╶",
    lineDashed8: "╸",
    lineDashed9: "╺",
    lineDashed10: "╼",
    lineDashed11: "╾",
    lineDashed12: "−",
    lineDashed13: "–",
    lineDashed14: "‐",
    lineDashed15: "⁃",
    lineVertical: "│",
    lineVerticalBold: "┃",
    lineVerticalDouble: "║",
    lineVerticalDashed0: "┆",
    lineVerticalDashed1: "┇",
    lineVerticalDashed2: "┊",
    lineVerticalDashed3: "┋",
    lineVerticalDashed4: "╎",
    lineVerticalDashed5: "╏",
    lineVerticalDashed6: "╵",
    lineVerticalDashed7: "╷",
    lineVerticalDashed8: "╹",
    lineVerticalDashed9: "╻",
    lineVerticalDashed10: "╽",
    lineVerticalDashed11: "╿",
    lineDownLeft: "┐",
    lineDownLeftArc: "╮",
    lineDownBoldLeftBold: "┓",
    lineDownBoldLeft: "┒",
    lineDownLeftBold: "┑",
    lineDownDoubleLeftDouble: "╗",
    lineDownDoubleLeft: "╖",
    lineDownLeftDouble: "╕",
    lineDownRight: "┌",
    lineDownRightArc: "╭",
    lineDownBoldRightBold: "┏",
    lineDownBoldRight: "┎",
    lineDownRightBold: "┍",
    lineDownDoubleRightDouble: "╔",
    lineDownDoubleRight: "╓",
    lineDownRightDouble: "╒",
    lineUpLeft: "┘",
    lineUpLeftArc: "╯",
    lineUpBoldLeftBold: "┛",
    lineUpBoldLeft: "┚",
    lineUpLeftBold: "┙",
    lineUpDoubleLeftDouble: "╝",
    lineUpDoubleLeft: "╜",
    lineUpLeftDouble: "╛",
    lineUpRight: "└",
    lineUpRightArc: "╰",
    lineUpBoldRightBold: "┗",
    lineUpBoldRight: "┖",
    lineUpRightBold: "┕",
    lineUpDoubleRightDouble: "╚",
    lineUpDoubleRight: "╙",
    lineUpRightDouble: "╘",
    lineUpDownLeft: "┤",
    lineUpBoldDownBoldLeftBold: "┫",
    lineUpBoldDownBoldLeft: "┨",
    lineUpDownLeftBold: "┥",
    lineUpBoldDownLeftBold: "┩",
    lineUpDownBoldLeftBold: "┪",
    lineUpDownBoldLeft: "┧",
    lineUpBoldDownLeft: "┦",
    lineUpDoubleDownDoubleLeftDouble: "╣",
    lineUpDoubleDownDoubleLeft: "╢",
    lineUpDownLeftDouble: "╡",
    lineUpDownRight: "├",
    lineUpBoldDownBoldRightBold: "┣",
    lineUpBoldDownBoldRight: "┠",
    lineUpDownRightBold: "┝",
    lineUpBoldDownRightBold: "┡",
    lineUpDownBoldRightBold: "┢",
    lineUpDownBoldRight: "┟",
    lineUpBoldDownRight: "┞",
    lineUpDoubleDownDoubleRightDouble: "╠",
    lineUpDoubleDownDoubleRight: "╟",
    lineUpDownRightDouble: "╞",
    lineDownLeftRight: "┬",
    lineDownBoldLeftBoldRightBold: "┳",
    lineDownLeftBoldRightBold: "┯",
    lineDownBoldLeftRight: "┰",
    lineDownBoldLeftBoldRight: "┱",
    lineDownBoldLeftRightBold: "┲",
    lineDownLeftRightBold: "┮",
    lineDownLeftBoldRight: "┭",
    lineDownDoubleLeftDoubleRightDouble: "╦",
    lineDownDoubleLeftRight: "╥",
    lineDownLeftDoubleRightDouble: "╤",
    lineUpLeftRight: "┴",
    lineUpBoldLeftBoldRightBold: "┻",
    lineUpLeftBoldRightBold: "┷",
    lineUpBoldLeftRight: "┸",
    lineUpBoldLeftBoldRight: "┹",
    lineUpBoldLeftRightBold: "┺",
    lineUpLeftRightBold: "┶",
    lineUpLeftBoldRight: "┵",
    lineUpDoubleLeftDoubleRightDouble: "╩",
    lineUpDoubleLeftRight: "╨",
    lineUpLeftDoubleRightDouble: "╧",
    lineUpDownLeftRight: "┼",
    lineUpBoldDownBoldLeftBoldRightBold: "╋",
    lineUpDownBoldLeftBoldRightBold: "╈",
    lineUpBoldDownLeftBoldRightBold: "╇",
    lineUpBoldDownBoldLeftRightBold: "╊",
    lineUpBoldDownBoldLeftBoldRight: "╉",
    lineUpBoldDownLeftRight: "╀",
    lineUpDownBoldLeftRight: "╁",
    lineUpDownLeftBoldRight: "┽",
    lineUpDownLeftRightBold: "┾",
    lineUpBoldDownBoldLeftRight: "╂",
    lineUpDownLeftBoldRightBold: "┿",
    lineUpBoldDownLeftBoldRight: "╃",
    lineUpBoldDownLeftRightBold: "╄",
    lineUpDownBoldLeftBoldRight: "╅",
    lineUpDownBoldLeftRightBold: "╆",
    lineUpDoubleDownDoubleLeftDoubleRightDouble: "╬",
    lineUpDoubleDownDoubleLeftRight: "╫",
    lineUpDownLeftDoubleRightDouble: "╪",
    lineCross: "╳",
    lineBackslash: "╲",
    lineSlash: "╱"
  }
// @from(Start 5693605, End 5694314)
Op1 = {
    tick: "✔",
    info: "ℹ",
    warning: "⚠",
    cross: "✘",
    squareSmall: "◻",
    squareSmallFilled: "◼",
    circle: "◯",
    circleFilled: "◉",
    circleDotted: "◌",
    circleDouble: "◎",
    circleCircle: "ⓞ",
    circleCross: "ⓧ",
    circlePipe: "Ⓘ",
    radioOn: "◉",
    radioOff: "◯",
    checkboxOn: "☒",
    checkboxOff: "☐",
    checkboxCircleOn: "ⓧ",
    checkboxCircleOff: "Ⓘ",
    pointer: "❯",
    triangleUpOutline: "△",
    triangleLeft: "◀",
    triangleRight: "▶",
    lozenge: "◆",
    lozengeOutline: "◇",
    hamburger: "☰",
    smiley: "㋡",
    mustache: "෴",
    star: "★",
    play: "▶",
    nodejs: "⬢",
    oneSeventh: "⅐",
    oneNinth: "⅑",
    oneTenth: "⅒"
  }
// @from(Start 5694318, End 5695062)
zF4 = {
    tick: "√",
    info: "i",
    warning: "‼",
    cross: "×",
    squareSmall: "□",
    squareSmallFilled: "■",
    circle: "( )",
    circleFilled: "(*)",
    circleDotted: "( )",
    circleDouble: "( )",
    circleCircle: "(○)",
    circleCross: "(×)",
    circlePipe: "(│)",
    radioOn: "(*)",
    radioOff: "( )",
    checkboxOn: "[×]",
    checkboxOff: "[ ]",
    checkboxCircleOn: "(×)",
    checkboxCircleOff: "( )",
    pointer: ">",
    triangleUpOutline: "∆",
    triangleLeft: "◄",
    triangleRight: "►",
    lozenge: "♦",
    lozengeOutline: "◊",
    hamburger: "≡",
    smiley: "☺",
    mustache: "┌─┐",
    star: "✶",
    play: "►",
    nodejs: "♦",
    oneSeventh: "1/7",
    oneNinth: "1/9",
    oneTenth: "1/10"
  }
// @from(Start 5695066, End 5695100)
QF4 = {
    ...Tp1,
    ...Op1
  }
// @from(Start 5695104, End 5695138)
fF4 = {
    ...Tp1,
    ...zF4
  }
// @from(Start 5695142, End 5695153)
qF4 = u91()
// @from(Start 5695157, End 5695178)
RF4 = qF4 ? QF4 : fF4
// @from(Start 5695182, End 5695190)
I9 = RF4
// @from(Start 5695194, End 5695219)
oP9 = Object.entries(Op1)
// @from(Start 5695225, End 5695316)
mp1 = {
    info: "blue",
    success: "green",
    error: "red",
    warning: "yellow"
  }
// @from(Start 5695320, End 5696153)
UF4 = {
    styles: {
      container: ({
        variant: I
      }) => ({
        flexGrow: 1,
        borderStyle: "round",
        borderColor: mp1[I],
        gap: 1,
        paddingX: 1
      }),
      iconContainer: () => ({
        flexShrink: 0
      }),
      icon: ({
        variant: I
      }) => ({
        color: mp1[I]
      }),
      content: () => ({
        flexShrink: 1,
        flexGrow: 1,
        minWidth: 0,
        flexDirection: "column",
        gap: 1
      }),
      title: () => ({
        bold: !0
      }),
      message: () => ({})
    },
    config({
      variant: I
    }) {
      let d;
      if (I === "info") d = I9.info;
      if (I === "success") d = I9.tick;
      if (I === "error") d = I9.cross;
      if (I === "warning") d = I9.warning;
      return {
        icon: d
      }
    }
  }
// @from(Start 5696157, End 5696166)
lp1 = UF4
// @from(Start 5696172, End 5696346)
vF4 = {
    styles: {
      container: ({
        color: I
      }) => ({
        backgroundColor: I
      }),
      label: () => ({
        color: "black"
      })
    }
  }
// @from(Start 5696350, End 5696359)
bp1 = vF4
// @from(Start 5696365, End 5696478)
EF4 = {
    styles: {
      input: ({
        isFocused: I
      }) => ({
        dimColor: !I
      })
    }
  }
// @from(Start 5696482, End 5696491)
hp1 = EF4
// @from(Start 5696497, End 5697088)
MF4 = {
    styles: {
      container: () => ({
        flexDirection: "column"
      }),
      option: ({
        isFocused: I
      }) => ({
        gap: 1,
        paddingLeft: I ? 0 : 2
      }),
      selectedIndicator: () => ({
        color: "green"
      }),
      focusIndicator: () => ({
        color: "blue"
      }),
      label({
        isFocused: I,
        isSelected: d
      }) {
        let G;
        if (d) G = "green";
        if (I) G = "blue";
        return {
          color: G
        }
      },
      highlightedText: () => ({
        bold: !0
      })
    }
  }
// @from(Start 5697092, End 5697101)
jp1 = MF4
// @from(Start 5697107, End 5697370)
SF4 = {
    styles: {
      list: () => ({
        flexDirection: "column"
      }),
      listItem: () => ({
        gap: 1
      }),
      marker: () => ({
        dimColor: !0
      }),
      content: () => ({
        flexDirection: "column"
      })
    }
  }
// @from(Start 5697374, End 5697383)
kp1 = SF4
// @from(Start 5697389, End 5697726)
LF4 = {
    styles: {
      container: () => ({
        flexGrow: 1,
        minWidth: 0
      }),
      completed: () => ({
        color: "magenta"
      }),
      remaining: () => ({
        dimColor: !0
      })
    },
    config: () => ({
      completedCharacter: I9.square,
      remainingCharacter: I9.squareLightShade
    })
  }
// @from(Start 5697730, End 5697739)
xp1 = LF4
// @from(Start 5697745, End 5698336)
yF4 = {
    styles: {
      container: () => ({
        flexDirection: "column"
      }),
      option: ({
        isFocused: I
      }) => ({
        gap: 1,
        paddingLeft: I ? 0 : 2
      }),
      selectedIndicator: () => ({
        color: "green"
      }),
      focusIndicator: () => ({
        color: "blue"
      }),
      label({
        isFocused: I,
        isSelected: d
      }) {
        let G;
        if (d) G = "green";
        if (I) G = "blue";
        return {
          color: G
        }
      },
      highlightedText: () => ({
        bold: !0
      })
    }
  }
// @from(Start 5698340, End 5698349)
cp1 = yF4
// @from(Start 5698355, End 5698515)
PF4 = {
    styles: {
      container: () => ({
        gap: 1
      }),
      frame: () => ({
        color: "blue"
      }),
      label: () => ({})
    }
  }
// @from(Start 5698519, End 5698528)
pp1 = PF4
// @from(Start 5698534, End 5698625)
$F4 = {
    success: "green",
    error: "red",
    warning: "yellow",
    info: "blue"
  }
// @from(Start 5698629, End 5698726)
uF4 = {
    success: I9.tick,
    error: I9.cross,
    warning: I9.warning,
    info: I9.info
  }
// @from(Start 5698730, End 5699053)
TF4 = {
    styles: {
      container: () => ({
        gap: 1
      }),
      iconContainer: () => ({
        flexShrink: 0
      }),
      icon: ({
        variant: I
      }) => ({
        color: $F4[I]
      }),
      message: () => ({})
    },
    config: ({
      variant: I
    }) => ({
      icon: uF4[I]
    })
  }
// @from(Start 5699057, End 5699066)
ip1 = TF4
// @from(Start 5699072, End 5699386)
OF4 = {
    styles: {
      list: () => ({
        flexDirection: "column"
      }),
      listItem: () => ({
        gap: 1
      }),
      marker: () => ({
        dimColor: !0
      }),
      content: () => ({
        flexDirection: "column"
      })
    },
    config: () => ({
      marker: I9.line
    })
  }
// @from(Start 5699390, End 5699399)
np1 = OF4
// @from(Start 5699405, End 5699460)
mF4 = {
    styles: {
      value: () => ({})
    }
  }
// @from(Start 5699464, End 5699473)
rp1 = mF4
// @from(Start 5699479, End 5699534)
lF4 = {
    styles: {
      value: () => ({})
    }
  }
// @from(Start 5699538, End 5699547)
ap1 = lF4
// @from(Start 5699553, End 5699608)
bF4 = {
    styles: {
      value: () => ({})
    }
  }
// @from(Start 5699612, End 5699621)
sp1 = bF4
// @from(Start 5699627, End 5699956)
jF4 = {
    components: {
      Alert: lp1,
      Badge: bp1,
      ConfirmInput: hp1,
      MultiSelect: jp1,
      OrderedList: kp1,
      ProgressBar: xp1,
      Select: cp1,
      Spinner: pp1,
      StatusMessage: ip1,
      UnorderedList: np1,
      TextInput: rp1,
      EmailInput: ap1,
      PasswordInput: sp1
    }
  }
// @from(Start 5699960, End 5699987)
kF4 = kM.createContext(jF4)
// @from(Start 5699993, End 5700050)
Q9 = (I) => {
  return kM.useContext(kF4).components[I]
}
// @from(Start 5700056, End 5700073)
cF4 = J1(u1(), 1)
// @from(Start 5700079, End 5700095)
dV = J1(u1(), 1)
// @from(Start 5700101, End 5700117)
FQ = J1(u1(), 1)
// @from(Start 5700123, End 5700140)
op1 = J1(u1(), 1)
// @from(Start 5700146, End 5700158)
xM = I9.line
// @from(Start 5700164, End 5700204)
Ck = op1.createContext({
  marker: xM
})
// @from(Start 5700207, End 5700511)
function ep1({
  children: I
}) {
  let {
    marker: d
  } = FQ.useContext(Ck), {
    styles: G
  } = Q9("UnorderedList");
  return FQ.default.createElement(p, {
    ...G.listItem()
  }, FQ.default.createElement(u, {
    ...G.marker()
  }, d), FQ.default.createElement(p, {
    ...G.content()
  }, I))
}
// @from(Start 5700516, End 5700533)
tp1 = J1(u1(), 1)
// @from(Start 5700537, End 5700580)
T91 = tp1.createContext({
    depth: 0
  })
// @from(Start 5700583, End 5701212)
function pF4({
  children: I
}) {
  let {
    depth: d
  } = dV.useContext(T91), {
    styles: G,
    config: Z
  } = Q9("UnorderedList"), C = dV.useMemo(() => ({
    depth: d + 1
  }), [d]), W = dV.useMemo(() => {
    let {
      marker: w
    } = Z();
    if (typeof w === "string") return {
      marker: w
    };
    if (Array.isArray(w)) return {
      marker: w[d] ?? w.at(-1) ?? xM
    };
    return {
      marker: xM
    }
  }, [Z, d]);
  return dV.default.createElement(T91.Provider, {
    value: C
  }, dV.default.createElement(Ck.Provider, {
    value: W
  }, dV.default.createElement(p, {
    ...G.list()
  }, I)))
}
// @from(Start 5701233, End 5701250)
nF4 = J1(u1(), 1)
// @from(Start 5701256, End 5701273)
iF4 = J1(u1(), 1)
// @from(Start 5701279, End 5701295)
pM = J1(u1(), 1)
// @from(Start 5701297, End 5701622)
class cM extends Map {
  first;
  constructor(I) {
    let d = [],
      G, Z, C = 0;
    for (let W of I) {
      let w = {
        ...W,
        previous: Z,
        next: void 0,
        index: C
      };
      if (Z) Z.next = w;
      G ||= w, d.push([W.value, w]), C++, Z = w
    }
    super(d);
    this.first = G
  }
}
// @from(Start 5701627, End 5701644)
Ii1 = J1(u1(), 1)
// @from(Start 5701650, End 5701666)
gQ = J1(u1(), 1)
// @from(Start 5701672, End 5701688)
iM = J1(u1(), 1)
// @from(Start 5701691, End 5702150)
function di1({
  isFocused: I,
  isSelected: d,
  children: G
}) {
  let {
    styles: Z
  } = Q9("Select");
  return iM.default.createElement(p, {
    ...Z.option({
      isFocused: I
    })
  }, I && iM.default.createElement(u, {
    ...Z.focusIndicator()
  }, I9.pointer), iM.default.createElement(u, {
    ...Z.label({
      isFocused: I,
      isSelected: d
    })
  }, G), d && iM.default.createElement(u, {
    ...Z.selectedIndicator()
  }, I9.tick))
}
// @from(Start 5702155, End 5702171)
BZ = J1(u1(), 1)
// @from(Start 5702233, End 5703566)
aF4 = (I, d) => {
    switch (d.type) {
      case "focus-next-option": {
        if (!I.focusedValue) return I;
        let G = I.optionMap.get(I.focusedValue);
        if (!G) return I;
        let Z = G.next;
        if (!Z) return I;
        if (!(Z.index >= I.visibleToIndex)) return {
          ...I,
          focusedValue: Z.value
        };
        let W = Math.min(I.optionMap.size, I.visibleToIndex + 1),
          w = W - I.visibleOptionCount;
        return {
          ...I,
          focusedValue: Z.value,
          visibleFromIndex: w,
          visibleToIndex: W
        }
      }
      case "focus-previous-option": {
        if (!I.focusedValue) return I;
        let G = I.optionMap.get(I.focusedValue);
        if (!G) return I;
        let Z = G.previous;
        if (!Z) return I;
        if (!(Z.index <= I.visibleFromIndex)) return {
          ...I,
          focusedValue: Z.value
        };
        let W = Math.max(0, I.visibleFromIndex - 1),
          w = W + I.visibleOptionCount;
        return {
          ...I,
          focusedValue: Z.value,
          visibleFromIndex: W,
          visibleToIndex: w
        }
      }
      case "select-focused-option":
        return {
          ...I, previousValue: I.value, value: I.focusedValue
        };
      case "reset":
        return d.state
    }
  }
// @from(Start 5703570, End 5703941)
Gi1 = ({
    visibleOptionCount: I,
    defaultValue: d,
    options: G
  }) => {
    let Z = typeof I === "number" ? Math.min(I, G.length) : G.length,
      C = new cM(G);
    return {
      optionMap: C,
      visibleOptionCount: Z,
      focusedValue: C.first?.value,
      visibleFromIndex: 0,
      visibleToIndex: Z,
      previousValue: d,
      value: d
    }
  }
// @from(Start 5703945, End 5705301)
Zi1 = ({
    visibleOptionCount: I = 5,
    options: d,
    defaultValue: G,
    onChange: Z
  }) => {
    let [C, W] = BZ.useReducer(aF4, {
      visibleOptionCount: I,
      defaultValue: G,
      options: d
    }, Gi1), [w, B] = BZ.useState(d);
    if (d !== w && !rF4(d, w)) W({
      type: "reset",
      state: Gi1({
        visibleOptionCount: I,
        defaultValue: G,
        options: d
      })
    }), B(d);
    let A = BZ.useCallback(() => {
        W({
          type: "focus-next-option"
        })
      }, []),
      V = BZ.useCallback(() => {
        W({
          type: "focus-previous-option"
        })
      }, []),
      X = BZ.useCallback(() => {
        W({
          type: "select-focused-option"
        })
      }, []),
      _ = BZ.useMemo(() => {
        return d.map((F, g) => ({
          ...F,
          index: g
        })).slice(C.visibleFromIndex, C.visibleToIndex)
      }, [d, C.visibleFromIndex, C.visibleToIndex]);
    return BZ.useEffect(() => {
      if (C.value && C.previousValue !== C.value) Z?.(C.value)
    }, [C.previousValue, C.value, d, Z]), {
      focusedValue: C.focusedValue,
      visibleFromIndex: C.visibleFromIndex,
      visibleToIndex: C.visibleToIndex,
      value: C.value,
      visibleOptions: _,
      focusNextOption: A,
      focusPreviousOption: V,
      selectFocusedOption: X
    }
  }
// @from(Start 5705307, End 5705532)
Ci1 = ({
  isDisabled: I = !1,
  state: d
}) => {
  C4((G, Z) => {
    if (Z.downArrow) d.focusNextOption();
    if (Z.upArrow) d.focusPreviousOption();
    if (Z.return) d.selectFocusedOption()
  }, {
    isActive: !I
  })
}
// @from(Start 5705535, End 5706409)
function Q6({
  isDisabled: I = !1,
  visibleOptionCount: d = 5,
  highlightText: G,
  options: Z,
  defaultValue: C,
  onChange: W
}) {
  let w = Zi1({
    visibleOptionCount: d,
    options: Z,
    defaultValue: C,
    onChange: W
  });
  Ci1({
    isDisabled: I,
    state: w
  });
  let {
    styles: B
  } = Q9("Select");
  return gQ.default.createElement(p, {
    ...B.container()
  }, w.visibleOptions.map((A) => {
    let V = A.label;
    if (G && A.label.includes(G)) {
      let X = A.label.indexOf(G);
      V = gQ.default.createElement(gQ.default.Fragment, null, A.label.slice(0, X), gQ.default.createElement(u, {
        ...B.highlightedText()
      }, G), A.label.slice(X + G.length))
    }
    return gQ.default.createElement(di1, {
      key: A.value,
      isFocused: !I && w.focusedValue === A.value,
      isSelected: w.value === A.value
    }, V)
  }))
}
// @from(Start 5706414, End 5706431)
sF4 = J1(u1(), 1)
// @from(Start 5706437, End 5706454)
Wi1 = J1(u1(), 1)
// @from(Start 5706460, End 5706477)
eF4 = J1(u1(), 1)
// @from(Start 5706483, End 5706499)
Wk = J1(u1(), 1)
// @from(Start 5706505, End 5706522)
oF4 = J1(u1(), 1)
// @from(Start 5706528, End 5706549)
dT9 = j0.inverse(" ")
// @from(Start 5706555, End 5706571)
LC = J1(u1(), 1)
// @from(Start 5706577, End 5706593)
JQ = J1(u1(), 1)
// @from(Start 5706599, End 5706616)
wi1 = J1(u1(), 1)
// @from(Start 5706622, End 5706667)
wk = wi1.createContext({
  marker: I9.line
})
// @from(Start 5706670, End 5706971)
function Bk({
  children: I
}) {
  let {
    marker: d
  } = JQ.useContext(wk), {
    styles: G
  } = Q9("OrderedList");
  return JQ.default.createElement(p, {
    ...G.listItem()
  }, JQ.default.createElement(u, {
    ...G.marker()
  }, d), JQ.default.createElement(p, {
    ...G.content()
  }, I))
}
// @from(Start 5706976, End 5706993)
Bi1 = J1(u1(), 1)
// @from(Start 5706997, End 5707042)
O91 = Bi1.createContext({
    marker: ""
  })
// @from(Start 5707045, End 5707743)
function b8({
  children: I
}) {
  let {
    marker: d
  } = LC.useContext(O91), {
    styles: G
  } = Q9("OrderedList"), Z = 0;
  for (let W of LC.default.Children.toArray(I)) {
    if (!LC.isValidElement(W) || W.type !== Bk) continue;
    Z++
  }
  let C = String(Z).length;
  return LC.default.createElement(p, {
    ...G.list()
  }, LC.default.Children.map(I, (W, w) => {
    if (!LC.isValidElement(W) || W.type !== Bk) return W;
    let B = `${String(w+1).padStart(C)}.`,
      A = `${d}${B}`;
    return LC.default.createElement(O91.Provider, {
      value: {
        marker: A
      }
    }, LC.default.createElement(wk.Provider, {
      value: {
        marker: A
      }
    }, W))
  }))
}
// @from(Start 5707762, End 5707779)
Ig4 = J1(u1(), 1)
// @from(Start 5707785, End 5707802)
m91 = J1(u1(), 1)
// @from(Start 5707808, End 5707825)
tF4 = J1(u1(), 1)
// @from(Start 5707831, End 5707852)
LT9 = j0.inverse(" ")
// @from(Start 5707858, End 5707875)
dg4 = J1(u1(), 1)
// @from(Start 5707881, End 5707898)
Gg4 = J1(u1(), 1)
// @from(Start 5707904, End 5707921)
Cg4 = J1(u1(), 1)
// @from(Start 5707927, End 5707943)
Ak = J1(u1(), 1)
// @from(Start 5707949, End 5707966)
Zg4 = J1(u1(), 1)
// @from(Start 5707972, End 5707993)
IO9 = j0.inverse(" ")
// @from(Start 5708189, End 5708577)
Wg4 = {
    bashBorder: "#ff0087",
    claude: "#D97757",
    permission: "#5769f7",
    secondaryBorder: "#999",
    text: "#000",
    secondaryText: "#666",
    suggestion: "#5769f7",
    success: "#2c7a39",
    error: "#ab2b3f",
    warning: "#966c1e",
    diff: {
      added: "#69db7c",
      removed: "#ffa8b4",
      addedDimmed: "#c7e1cb",
      removedDimmed: "#fdd2d8"
    }
  }
// @from(Start 5708581, End 5708969)
wg4 = {
    bashBorder: "#0066cc",
    claude: "#ff9933",
    permission: "#3366ff",
    secondaryBorder: "#999",
    text: "#000",
    secondaryText: "#666",
    suggestion: "#3366ff",
    success: "#006699",
    error: "#cc0000",
    warning: "#ff9900",
    diff: {
      added: "#99ccff",
      removed: "#ffcccc",
      addedDimmed: "#d1e7fd",
      removedDimmed: "#ffe9e9"
    }
  }
// @from(Start 5708973, End 5709361)
Bg4 = {
    bashBorder: "#fd5db1",
    claude: "#D97757",
    permission: "#b1b9f9",
    secondaryBorder: "#888",
    text: "#fff",
    secondaryText: "#999",
    suggestion: "#b1b9f9",
    success: "#4eba65",
    error: "#ff6b80",
    warning: "#ffc107",
    diff: {
      added: "#225c2b",
      removed: "#7a2936",
      addedDimmed: "#47584a",
      removedDimmed: "#69484d"
    }
  }
// @from(Start 5709365, End 5709753)
Ag4 = {
    bashBorder: "#3399ff",
    claude: "#ff9933",
    permission: "#99ccff",
    secondaryBorder: "#888",
    text: "#fff",
    secondaryText: "#999",
    suggestion: "#99ccff",
    success: "#3399ff",
    error: "#ff6666",
    warning: "#ffcc00",
    diff: {
      added: "#004466",
      removed: "#660000",
      addedDimmed: "#3e515b",
      removedDimmed: "#3e2c2c"
    }
  }
// @from(Start 5709756, End 5709979)
function r1(I) {
  let d = q2();
  switch (I ?? d.theme) {
    case "light":
      return Wg4;
    case "light-daltonized":
      return wg4;
    case "dark-daltonized":
      return Ag4;
    default:
      return Bg4
  }
}
// @from(Start 5710089, End 5710661)
_g4 = {
  type: "local",
  name: "terminal-setup",
  userFacingName() {
    return "terminal-setup"
  },
  description: "Install Shift+Enter key binding for newlines (iTerm2 and VSCode only)",
  isEnabled: l91() === "darwin" && K2.terminal === "iTerm.app" || K2.terminal === "vscode",
  isHidden: !1,
  async call() {
    let I = "";
    switch (K2.terminal) {
      case "iTerm.app":
        I = await Dg4();
        break;
      case "vscode":
        I = Hg4();
        break
    }
    let d = q2();
    return d.shiftEnterKeyBindingInstalled = !0, p4(d), zQ(), I
  }
}
// @from(Start 5710664, End 5710733)
function Ai1() {
  return q2().shiftEnterKeyBindingInstalled === !0
}
// @from(Start 5710738, End 5710746)
NQ = _g4
// @from(Start 5710748, End 5711409)
async function Dg4() {
  let {
    code: I
  } = await E5("defaults", ["write", "com.googlecode.iterm2", "GlobalKeyMap", "-dict-add", "0xd-0x20000-0x24", `<dict>
      <key>Text</key>
      <string>\\n</string>
      <key>Action</key>
      <integer>12</integer>
      <key>Version</key>
      <integer>1</integer>
      <key>Keycode</key>
      <integer>13</integer>
      <key>Modifiers</key>
      <integer>131072</integer>
    </dict>`]);
  if (I !== 0) throw new Error("Failed to install iTerm2 Shift+Enter key binding");
  return `${j0.hex(r1().success)("Installed iTerm2 Shift+Enter key binding")}${KQ}${j0.dim("See iTerm2 → Preferences → Keys")}${KQ}`
}
// @from(Start 5711411, End 5712430)
function Hg4() {
  let I = Vk(Vg4(), l91() === "win32" ? Vk("AppData", "Roaming", "Code", "User") : l91() === "darwin" ? Vk("Library", "Application Support", "Code", "User") : Vk(".config", "Code", "User"), "keybindings.json");
  try {
    let d = Xg4(I, "utf-8"),
      G = tG(d) ?? [];
    if (G.find((C) => C.key === "shift+enter" && C.command === "workbench.action.terminal.sendSequence" && C.when === "terminalFocus")) return `${j0.hex(r1().warning)("Found existing VSCode terminal Shift+Enter key binding. Remove it to continue.")}${KQ}${j0.dim(`See ${I}`)}${KQ}`;
    return G.push({
      key: "shift+enter",
      command: "workbench.action.terminal.sendSequence",
      args: {
        text: `\\\r
`
      },
      when: "terminalFocus"
    }), Yg4(I, JSON.stringify(G, null, 4), "utf-8"), `${j0.hex(r1().success)("Installed VSCode terminal Shift+Enter key binding")}${KQ}${j0.dim(`See ${I}`)}${KQ}`
  } catch (d) {
    throw X0(d), new Error("Failed to install VSCode terminal Shift+Enter key binding")
  }
}
// @from(Start 5712435, End 5712530)
Xk = {
  "0.1.178": ["New release notes now show you what's changed since you last launched"]
}
// @from(Start 5712536, End 5712553)
u40 = J1(Fk(), 1)
// @from(Start 5712951, End 5712969)
ui1 = J1(vi1(), 1)
// @from(Start 5712975, End 5713126)
oM = (I) => {
  if (typeof I !== "string") throw new TypeError("invalid pattern");
  if (I.length > 65536) throw new TypeError("pattern is too long")
}
// @from(Start 5713132, End 5713687)
WJ4 = {
    "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", !0],
    "[:alpha:]": ["\\p{L}\\p{Nl}", !0],
    "[:ascii:]": ["\\x00-\\x7f", !1],
    "[:blank:]": ["\\p{Zs}\\t", !0],
    "[:cntrl:]": ["\\p{Cc}", !0],
    "[:digit:]": ["\\p{Nd}", !0],
    "[:graph:]": ["\\p{Z}\\p{C}", !0, !0],
    "[:lower:]": ["\\p{Ll}", !0],
    "[:print:]": ["\\p{C}", !0],
    "[:punct:]": ["\\p{P}", !0],
    "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", !0],
    "[:upper:]": ["\\p{Lu}", !0],
    "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", !0],
    "[:xdigit:]": ["A-Fa-f0-9", !1]
  }
// @from(Start 5713691, End 5713733)
eM = (I) => I.replace(/[[\]\\-]/g, "\\$&")
// @from(Start 5713737, End 5713795)
wJ4 = (I) => I.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
// @from(Start 5713799, End 5713822)
Ei1 = (I) => I.join("")
// @from(Start 5713826, End 5715571)
Mi1 = (I, d) => {
    let G = d;
    if (I.charAt(G) !== "[") throw new Error("not in a brace expression");
    let Z = [],
      C = [],
      W = G + 1,
      w = !1,
      B = !1,
      A = !1,
      V = !1,
      X = G,
      _ = "";
    I: while (W < I.length) {
      let K = I.charAt(W);
      if ((K === "!" || K === "^") && W === G + 1) {
        V = !0, W++;
        continue
      }
      if (K === "]" && w && !A) {
        X = W + 1;
        break
      }
      if (w = !0, K === "\\") {
        if (!A) {
          A = !0, W++;
          continue
        }
      }
      if (K === "[" && !A) {
        for (let [Q, [E, S, P]] of Object.entries(WJ4))
          if (I.startsWith(Q, W)) {
            if (_) return ["$.", !1, I.length - G, !0];
            if (W += Q.length, P) C.push(E);
            else Z.push(E);
            B = B || S;
            continue I
          }
      }
      if (A = !1, _) {
        if (K > _) Z.push(eM(_) + "-" + eM(K));
        else if (K === _) Z.push(eM(K));
        _ = "", W++;
        continue
      }
      if (I.startsWith("-]", W + 1)) {
        Z.push(eM(K + "-")), W += 2;
        continue
      }
      if (I.startsWith("-", W + 1)) {
        _ = K, W += 2;
        continue
      }
      Z.push(eM(K)), W++
    }
    if (X < W) return ["", !1, 0, !1];
    if (!Z.length && !C.length) return ["$.", !1, I.length - G, !0];
    if (C.length === 0 && Z.length === 1 && /^\\?.$/.test(Z[0]) && !V) {
      let K = Z[0].length === 2 ? Z[0].slice(-1) : Z[0];
      return [wJ4(K), !1, X - G, !1]
    }
    let F = "[" + (V ? "^" : "") + Ei1(Z) + "]",
      g = "[" + (V ? "" : "^") + Ei1(C) + "]";
    return [Z.length && C.length ? "(" + F + "|" + g + ")" : Z.length ? F : g, B, X - G, !0]
  }
// @from(Start 5715577, End 5715757)
yC = (I, {
  windowsPathsNoEscape: d = !1
} = {}) => {
  return d ? I.replace(/\[([^\/\\])\]/g, "$1") : I.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1")
}
// @from(Start 5715763, End 5715803)
BJ4 = new Set(["!", "?", "+", "*", "@"])
// @from(Start 5715807, End 5715830)
Si1 = (I) => BJ4.has(I)
// @from(Start 5715834, End 5715867)
AJ4 = "(?!(?:^|/)\\.\\.?(?:$|/))"
// @from(Start 5715871, End 5715885)
gk = "(?!\\.)"
// @from(Start 5715889, End 5715914)
VJ4 = new Set(["[", "."])
// @from(Start 5715918, End 5715944)
XJ4 = new Set(["..", "."])
// @from(Start 5715948, End 5715980)
YJ4 = new Set("().*{}+?[]^$\\!")
// @from(Start 5715984, End 5716042)
_J4 = (I) => I.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
// @from(Start 5716046, End 5716058)
r91 = "[^/]"
// @from(Start 5716062, End 5716078)
Li1 = r91 + "*?"
// @from(Start 5716082, End 5716098)
yi1 = r91 + "+?"
// @from(Start 5716100, End 5724091)
class h8 {
  type;
  #I;
  #d;
  #W = !1;
  #Z = [];
  #w;
  #z;
  #V;
  #Y = !1;
  #B;
  #A;
  #C = !1;
  constructor(I, d, G = {}) {
    if (this.type = I, I) this.#d = !0;
    if (this.#w = d, this.#I = this.#w ? this.#w.#I : this, this.#B = this.#I === this ? G : this.#I.#B, this.#V = this.#I === this ? [] : this.#I.#V, I === "!" && !this.#I.#Y) this.#V.push(this);
    this.#z = this.#w ? this.#w.#Z.length : 0
  }
  get hasMagic() {
    if (this.#d !== void 0) return this.#d;
    for (let I of this.#Z) {
      if (typeof I === "string") continue;
      if (I.type || I.hasMagic) return this.#d = !0
    }
    return this.#d
  }
  toString() {
    if (this.#A !== void 0) return this.#A;
    if (!this.type) return this.#A = this.#Z.map((I) => String(I)).join("");
    else return this.#A = this.type + "(" + this.#Z.map((I) => String(I)).join("|") + ")"
  }
  #g() {
    if (this !== this.#I) throw new Error("should only call on root");
    if (this.#Y) return this;
    this.toString(), this.#Y = !0;
    let I;
    while (I = this.#V.pop()) {
      if (I.type !== "!") continue;
      let d = I,
        G = d.#w;
      while (G) {
        for (let Z = d.#z + 1; !G.type && Z < G.#Z.length; Z++)
          for (let C of I.#Z) {
            if (typeof C === "string") throw new Error("string part in extglob AST??");
            C.copyIn(G.#Z[Z])
          }
        d = G, G = d.#w
      }
    }
    return this
  }
  push(...I) {
    for (let d of I) {
      if (d === "") continue;
      if (typeof d !== "string" && !(d instanceof h8 && d.#w === this)) throw new Error("invalid part: " + d);
      this.#Z.push(d)
    }
  }
  toJSON() {
    let I = this.type === null ? this.#Z.slice().map((d) => typeof d === "string" ? d : d.toJSON()) : [this.type, ...this.#Z.map((d) => d.toJSON())];
    if (this.isStart() && !this.type) I.unshift([]);
    if (this.isEnd() && (this === this.#I || this.#I.#Y && this.#w?.type === "!")) I.push({});
    return I
  }
  isStart() {
    if (this.#I === this) return !0;
    if (!this.#w?.isStart()) return !1;
    if (this.#z === 0) return !0;
    let I = this.#w;
    for (let d = 0; d < this.#z; d++) {
      let G = I.#Z[d];
      if (!(G instanceof h8 && G.type === "!")) return !1
    }
    return !0
  }
  isEnd() {
    if (this.#I === this) return !0;
    if (this.#w?.type === "!") return !0;
    if (!this.#w?.isEnd()) return !1;
    if (!this.type) return this.#w?.isEnd();
    let I = this.#w ? this.#w.#Z.length : 0;
    return this.#z === I - 1
  }
  copyIn(I) {
    if (typeof I === "string") this.push(I);
    else this.push(I.clone(this))
  }
  clone(I) {
    let d = new h8(this.type, I);
    for (let G of this.#Z) d.copyIn(G);
    return d
  }
  static #J(I, d, G, Z) {
    let C = !1,
      W = !1,
      w = -1,
      B = !1;
    if (d.type === null) {
      let F = G,
        g = "";
      while (F < I.length) {
        let J = I.charAt(F++);
        if (C || J === "\\") {
          C = !C, g += J;
          continue
        }
        if (W) {
          if (F === w + 1) {
            if (J === "^" || J === "!") B = !0
          } else if (J === "]" && !(F === w + 2 && B)) W = !1;
          g += J;
          continue
        } else if (J === "[") {
          W = !0, w = F, B = !1, g += J;
          continue
        }
        if (!Z.noext && Si1(J) && I.charAt(F) === "(") {
          d.push(g), g = "";
          let K = new h8(J, d);
          F = h8.#J(I, K, F, Z), d.push(K);
          continue
        }
        g += J
      }
      return d.push(g), F
    }
    let A = G + 1,
      V = new h8(null, d),
      X = [],
      _ = "";
    while (A < I.length) {
      let F = I.charAt(A++);
      if (C || F === "\\") {
        C = !C, _ += F;
        continue
      }
      if (W) {
        if (A === w + 1) {
          if (F === "^" || F === "!") B = !0
        } else if (F === "]" && !(A === w + 2 && B)) W = !1;
        _ += F;
        continue
      } else if (F === "[") {
        W = !0, w = A, B = !1, _ += F;
        continue
      }
      if (Si1(F) && I.charAt(A) === "(") {
        V.push(_), _ = "";
        let g = new h8(F, V);
        V.push(g), A = h8.#J(I, g, A, Z);
        continue
      }
      if (F === "|") {
        V.push(_), _ = "", X.push(V), V = new h8(null, d);
        continue
      }
      if (F === ")") {
        if (_ === "" && d.#Z.length === 0) d.#C = !0;
        return V.push(_), _ = "", d.push(...X, V), A
      }
      _ += F
    }
    return d.type = null, d.#d = void 0, d.#Z = [I.substring(G - 1)], A
  }
  static fromGlob(I, d = {}) {
    let G = new h8(null, void 0, d);
    return h8.#J(I, G, 0, d), G
  }
  toMMPattern() {
    if (this !== this.#I) return this.#I.toMMPattern();
    let I = this.toString(),
      [d, G, Z, C] = this.toRegExpSource();
    if (!(Z || this.#d || this.#B.nocase && !this.#B.nocaseMagicOnly && I.toUpperCase() !== I.toLowerCase())) return G;
    let w = (this.#B.nocase ? "i" : "") + (C ? "u" : "");
    return Object.assign(new RegExp(`^${d}$`, w), {
      _src: d,
      _glob: I
    })
  }
  get options() {
    return this.#B
  }
  toRegExpSource(I) {
    let d = I ?? !!this.#B.dot;
    if (this.#I === this) this.#g();
    if (!this.type) {
      let B = this.isStart() && this.isEnd(),
        A = this.#Z.map((F) => {
          let [g, J, K, Q] = typeof F === "string" ? h8.#_(F, this.#d, B) : F.toRegExpSource(I);
          return this.#d = this.#d || K, this.#W = this.#W || Q, g
        }).join(""),
        V = "";
      if (this.isStart()) {
        if (typeof this.#Z[0] === "string") {
          if (!(this.#Z.length === 1 && XJ4.has(this.#Z[0]))) {
            let g = VJ4,
              J = d && g.has(A.charAt(0)) || A.startsWith("\\.") && g.has(A.charAt(2)) || A.startsWith("\\.\\.") && g.has(A.charAt(4)),
              K = !d && !I && g.has(A.charAt(0));
            V = J ? AJ4 : K ? gk : ""
          }
        }
      }
      let X = "";
      if (this.isEnd() && this.#I.#Y && this.#w?.type === "!") X = "(?:$|\\/)";
      return [V + A + X, yC(A), this.#d = !!this.#d, this.#W]
    }
    let G = this.type === "*" || this.type === "+",
      Z = this.type === "!" ? "(?:(?!(?:" : "(?:",
      C = this.#D(d);
    if (this.isStart() && this.isEnd() && !C && this.type !== "!") {
      let B = this.toString();
      return this.#Z = [B], this.type = null, this.#d = void 0, [B, yC(this.toString()), !1, !1]
    }
    let W = !G || I || d || !gk ? "" : this.#D(!0);
    if (W === C) W = "";
    if (W) C = `(?:${C})(?:${W})*?`;
    let w = "";
    if (this.type === "!" && this.#C) w = (this.isStart() && !d ? gk : "") + yi1;
    else {
      let B = this.type === "!" ? "))" + (this.isStart() && !d && !I ? gk : "") + Li1 + ")" : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && W ? ")" : this.type === "*" && W ? ")?" : `)${this.type}`;
      w = Z + C + B
    }
    return [w, yC(C), this.#d = !!this.#d, this.#W]
  }
  #D(I) {
    return this.#Z.map((d) => {
      if (typeof d === "string") throw new Error("string type in extglob ast??");
      let [G, Z, C, W] = d.toRegExpSource(I);
      return this.#W = this.#W || W, G
    }).filter((d) => !(this.isStart() && this.isEnd()) || !!d).join("|")
  }
  static #_(I, d, G = !1) {
    let Z = !1,
      C = "",
      W = !1;
    for (let w = 0; w < I.length; w++) {
      let B = I.charAt(w);
      if (Z) {
        Z = !1, C += (YJ4.has(B) ? "\\" : "") + B;
        continue
      }
      if (B === "\\") {
        if (w === I.length - 1) C += "\\\\";
        else Z = !0;
        continue
      }
      if (B === "[") {
        let [A, V, X, _] = Mi1(I, w);
        if (X) {
          C += A, W = W || V, w += X - 1, d = d || _;
          continue
        }
      }
      if (B === "*") {
        if (G && I === "*") C += yi1;
        else C += Li1;
        d = !0;
        continue
      }
      if (B === "?") {
        C += r91, d = !0;
        continue
      }
      C += _J4(B)
    }
    return [C, yC(I), !!d, W]
  }
}
// @from(Start 5724096, End 5724233)
qQ = (I, {
  windowsPathsNoEscape: d = !1
} = {}) => {
  return d ? I.replace(/[?*()[\]]/g, "[$&]") : I.replace(/[?*()[\]\\]/g, "\\$&")
}
// @from(Start 5724239, End 5724363)
ZI = (I, d, G = {}) => {
    if (oM(d), !G.nocomment && d.charAt(0) === "#") return !1;
    return new XZ(d, G).match(I)
  }
// @from(Start 5724367, End 5724396)
DJ4 = /^\*+([^+@!?\*\[\(]*)$/
// @from(Start 5724400, End 5724455)
HJ4 = (I) => (d) => !d.startsWith(".") && d.endsWith(I)
// @from(Start 5724459, End 5724492)
FJ4 = (I) => (d) => d.endsWith(I)
// @from(Start 5724496, End 5724603)
gJ4 = (I) => {
    return I = I.toLowerCase(), (d) => !d.startsWith(".") && d.toLowerCase().endsWith(I)
  }
// @from(Start 5724607, End 5724692)
JJ4 = (I) => {
    return I = I.toLowerCase(), (d) => d.toLowerCase().endsWith(I)
  }
// @from(Start 5724696, End 5724714)
KJ4 = /^\*+\.\*+$/
// @from(Start 5724718, End 5724768)
NJ4 = (I) => !I.startsWith(".") && I.includes(".")
// @from(Start 5724772, End 5724827)
zJ4 = (I) => I !== "." && I !== ".." && I.includes(".")
// @from(Start 5724831, End 5724846)
QJ4 = /^\.\*+$/
// @from(Start 5724850, End 5724907)
fJ4 = (I) => I !== "." && I !== ".." && I.startsWith(".")
// @from(Start 5724911, End 5724924)
qJ4 = /^\*+$/
// @from(Start 5724928, End 5724977)
RJ4 = (I) => I.length !== 0 && !I.startsWith(".")
// @from(Start 5724981, End 5725035)
UJ4 = (I) => I.length !== 0 && I !== "." && I !== ".."
// @from(Start 5725039, End 5725069)
vJ4 = /^\?+([^+@!?\*\[\(]*)?$/
// @from(Start 5725073, End 5725220)
EJ4 = ([I, d = ""]) => {
    let G = Ti1([I]);
    if (!d) return G;
    return d = d.toLowerCase(), (Z) => G(Z) && Z.toLowerCase().endsWith(d)
  }
// @from(Start 5725224, End 5725371)
MJ4 = ([I, d = ""]) => {
    let G = Oi1([I]);
    if (!d) return G;
    return d = d.toLowerCase(), (Z) => G(Z) && Z.toLowerCase().endsWith(d)
  }
// @from(Start 5725375, End 5725474)
SJ4 = ([I, d = ""]) => {
    let G = Oi1([I]);
    return !d ? G : (Z) => G(Z) && Z.endsWith(d)
  }
// @from(Start 5725478, End 5725577)
LJ4 = ([I, d = ""]) => {
    let G = Ti1([I]);
    return !d ? G : (Z) => G(Z) && Z.endsWith(d)
  }
// @from(Start 5725581, End 5725678)
Ti1 = ([I]) => {
    let d = I.length;
    return (G) => G.length === d && !G.startsWith(".")
  }
// @from(Start 5725682, End 5725784)
Oi1 = ([I]) => {
    let d = I.length;
    return (G) => G.length === d && G !== "." && G !== ".."
  }
// @from(Start 5725788, End 5725957)
mi1 = typeof process === "object" && process ? typeof process.env === "object" && process.env && process.env.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix"
// @from(Start 5725961, End 5726042)
Pi1 = {
    win32: {
      sep: "\\"
    },
    posix: {
      sep: "/"
    }
  }
// @from(Start 5726046, End 5726099)
yJ4 = mi1 === "win32" ? Pi1.win32.sep : Pi1.posix.sep
// @from(Start 5726119, End 5726145)
j8 = Symbol("globstar **")
// @from(Start 5726169, End 5726181)
PJ4 = "[^/]"
// @from(Start 5726185, End 5726201)
$J4 = PJ4 + "*?"
// @from(Start 5726205, End 5726252)
uJ4 = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?"
// @from(Start 5726256, End 5726287)
TJ4 = "(?:(?!(?:\\/|^)\\.).)*?"
// @from(Start 5726291, End 5726330)
OJ4 = (I, d = {}) => (G) => ZI(G, I, d)
// @from(Start 5726353, End 5726396)
VZ = (I, d = {}) => Object.assign({}, I, d)
// @from(Start 5726400, End 5727420)
mJ4 = (I) => {
    if (!I || typeof I !== "object" || !Object.keys(I).length) return ZI;
    let d = ZI;
    return Object.assign((Z, C, W = {}) => d(Z, C, VZ(I, W)), {
      Minimatch: class Z extends d.Minimatch {
        constructor(C, W = {}) {
          super(C, VZ(I, W))
        }
        static defaults(C) {
          return d.defaults(VZ(I, C)).Minimatch
        }
      },
      AST: class Z extends d.AST {
        constructor(C, W, w = {}) {
          super(C, W, VZ(I, w))
        }
        static fromGlob(C, W = {}) {
          return d.AST.fromGlob(C, VZ(I, W))
        }
      },
      unescape: (Z, C = {}) => d.unescape(Z, VZ(I, C)),
      escape: (Z, C = {}) => d.escape(Z, VZ(I, C)),
      filter: (Z, C = {}) => d.filter(Z, VZ(I, C)),
      defaults: (Z) => d.defaults(VZ(I, Z)),
      makeRe: (Z, C = {}) => d.makeRe(Z, VZ(I, C)),
      braceExpand: (Z, C = {}) => d.braceExpand(Z, VZ(I, C)),
      match: (Z, C, W = {}) => d.match(Z, C, VZ(I, W)),
      sep: d.sep,
      GLOBSTAR: j8
    })
  }
// @from(Start 5727445, End 5727560)
li1 = (I, d = {}) => {
  if (oM(I), d.nobrace || !/\{(?:(?!\{).)*\}/.test(I)) return [I];
  return ui1.default(I)
}
// @from(Start 5727588, End 5727630)
lJ4 = (I, d = {}) => new XZ(I, d).makeRe()
// @from(Start 5727653, End 5727796)
bJ4 = (I, d, G = {}) => {
  let Z = new XZ(d, G);
  if (I = I.filter((C) => Z.match(C)), Z.options.nonull && !I.length) I.push(d);
  return I
}
// @from(Start 5727818, End 5727849)
$i1 = /[?*]|[+@!]\(.*?\)|\[|\]/
// @from(Start 5727853, End 5727911)
hJ4 = (I) => I.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
// @from(Start 5727913, End 5740406)
class XZ {
  options;
  set;
  pattern;
  windowsPathsNoEscape;
  nonegate;
  negate;
  comment;
  empty;
  preserveMultipleSlashes;
  partial;
  globSet;
  globParts;
  nocase;
  isWindows;
  platform;
  windowsNoMagicRoot;
  regexp;
  constructor(I, d = {}) {
    if (oM(I), d = d || {}, this.options = d, this.pattern = I, this.platform = d.platform || mi1, this.isWindows = this.platform === "win32", this.windowsPathsNoEscape = !!d.windowsPathsNoEscape || d.allowWindowsEscape === !1, this.windowsPathsNoEscape) this.pattern = this.pattern.replace(/\\/g, "/");
    this.preserveMultipleSlashes = !!d.preserveMultipleSlashes, this.regexp = null, this.negate = !1, this.nonegate = !!d.nonegate, this.comment = !1, this.empty = !1, this.partial = !!d.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = d.windowsNoMagicRoot !== void 0 ? d.windowsNoMagicRoot : !!(this.isWindows && this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make()
  }
  hasMagic() {
    if (this.options.magicalBraces && this.set.length > 1) return !0;
    for (let I of this.set)
      for (let d of I)
        if (typeof d !== "string") return !0;
    return !1
  }
  debug(...I) {}
  make() {
    let I = this.pattern,
      d = this.options;
    if (!d.nocomment && I.charAt(0) === "#") {
      this.comment = !0;
      return
    }
    if (!I) {
      this.empty = !0;
      return
    }
    if (this.parseNegate(), this.globSet = [...new Set(this.braceExpand())], d.debug) this.debug = (...C) => console.error(...C);
    this.debug(this.pattern, this.globSet);
    let G = this.globSet.map((C) => this.slashSplit(C));
    this.globParts = this.preprocess(G), this.debug(this.pattern, this.globParts);
    let Z = this.globParts.map((C, W, w) => {
      if (this.isWindows && this.windowsNoMagicRoot) {
        let B = C[0] === "" && C[1] === "" && (C[2] === "?" || !$i1.test(C[2])) && !$i1.test(C[3]),
          A = /^[a-z]:/i.test(C[0]);
        if (B) return [...C.slice(0, 4), ...C.slice(4).map((V) => this.parse(V))];
        else if (A) return [C[0], ...C.slice(1).map((V) => this.parse(V))]
      }
      return C.map((B) => this.parse(B))
    });
    if (this.debug(this.pattern, Z), this.set = Z.filter((C) => C.indexOf(!1) === -1), this.isWindows)
      for (let C = 0; C < this.set.length; C++) {
        let W = this.set[C];
        if (W[0] === "" && W[1] === "" && this.globParts[C][2] === "?" && typeof W[3] === "string" && /^[a-z]:$/i.test(W[3])) W[2] = "?"
      }
    this.debug(this.pattern, this.set)
  }
  preprocess(I) {
    if (this.options.noglobstar) {
      for (let G = 0; G < I.length; G++)
        for (let Z = 0; Z < I[G].length; Z++)
          if (I[G][Z] === "**") I[G][Z] = "*"
    }
    let {
      optimizationLevel: d = 1
    } = this.options;
    if (d >= 2) I = this.firstPhasePreProcess(I), I = this.secondPhasePreProcess(I);
    else if (d >= 1) I = this.levelOneOptimize(I);
    else I = this.adjascentGlobstarOptimize(I);
    return I
  }
  adjascentGlobstarOptimize(I) {
    return I.map((d) => {
      let G = -1;
      while ((G = d.indexOf("**", G + 1)) !== -1) {
        let Z = G;
        while (d[Z + 1] === "**") Z++;
        if (Z !== G) d.splice(G, Z - G)
      }
      return d
    })
  }
  levelOneOptimize(I) {
    return I.map((d) => {
      return d = d.reduce((G, Z) => {
        let C = G[G.length - 1];
        if (Z === "**" && C === "**") return G;
        if (Z === "..") {
          if (C && C !== ".." && C !== "." && C !== "**") return G.pop(), G
        }
        return G.push(Z), G
      }, []), d.length === 0 ? [""] : d
    })
  }
  levelTwoFileOptimize(I) {
    if (!Array.isArray(I)) I = this.slashSplit(I);
    let d = !1;
    do {
      if (d = !1, !this.preserveMultipleSlashes) {
        for (let Z = 1; Z < I.length - 1; Z++) {
          let C = I[Z];
          if (Z === 1 && C === "" && I[0] === "") continue;
          if (C === "." || C === "") d = !0, I.splice(Z, 1), Z--
        }
        if (I[0] === "." && I.length === 2 && (I[1] === "." || I[1] === "")) d = !0, I.pop()
      }
      let G = 0;
      while ((G = I.indexOf("..", G + 1)) !== -1) {
        let Z = I[G - 1];
        if (Z && Z !== "." && Z !== ".." && Z !== "**") d = !0, I.splice(G - 1, 2), G -= 2
      }
    } while (d);
    return I.length === 0 ? [""] : I
  }
  firstPhasePreProcess(I) {
    let d = !1;
    do {
      d = !1;
      for (let G of I) {
        let Z = -1;
        while ((Z = G.indexOf("**", Z + 1)) !== -1) {
          let W = Z;
          while (G[W + 1] === "**") W++;
          if (W > Z) G.splice(Z + 1, W - Z);
          let w = G[Z + 1],
            B = G[Z + 2],
            A = G[Z + 3];
          if (w !== "..") continue;
          if (!B || B === "." || B === ".." || !A || A === "." || A === "..") continue;
          d = !0, G.splice(Z, 1);
          let V = G.slice(0);
          V[Z] = "**", I.push(V), Z--
        }
        if (!this.preserveMultipleSlashes) {
          for (let W = 1; W < G.length - 1; W++) {
            let w = G[W];
            if (W === 1 && w === "" && G[0] === "") continue;
            if (w === "." || w === "") d = !0, G.splice(W, 1), W--
          }
          if (G[0] === "." && G.length === 2 && (G[1] === "." || G[1] === "")) d = !0, G.pop()
        }
        let C = 0;
        while ((C = G.indexOf("..", C + 1)) !== -1) {
          let W = G[C - 1];
          if (W && W !== "." && W !== ".." && W !== "**") {
            d = !0;
            let B = C === 1 && G[C + 1] === "**" ? ["."] : [];
            if (G.splice(C - 1, 2, ...B), G.length === 0) G.push("");
            C -= 2
          }
        }
      }
    } while (d);
    return I
  }
  secondPhasePreProcess(I) {
    for (let d = 0; d < I.length - 1; d++)
      for (let G = d + 1; G < I.length; G++) {
        let Z = this.partsMatch(I[d], I[G], !this.preserveMultipleSlashes);
        if (Z) {
          I[d] = [], I[G] = Z;
          break
        }
      }
    return I.filter((d) => d.length)
  }
  partsMatch(I, d, G = !1) {
    let Z = 0,
      C = 0,
      W = [],
      w = "";
    while (Z < I.length && C < d.length)
      if (I[Z] === d[C]) W.push(w === "b" ? d[C] : I[Z]), Z++, C++;
      else if (G && I[Z] === "**" && d[C] === I[Z + 1]) W.push(I[Z]), Z++;
    else if (G && d[C] === "**" && I[Z] === d[C + 1]) W.push(d[C]), C++;
    else if (I[Z] === "*" && d[C] && (this.options.dot || !d[C].startsWith(".")) && d[C] !== "**") {
      if (w === "b") return !1;
      w = "a", W.push(I[Z]), Z++, C++
    } else if (d[C] === "*" && I[Z] && (this.options.dot || !I[Z].startsWith(".")) && I[Z] !== "**") {
      if (w === "a") return !1;
      w = "b", W.push(d[C]), Z++, C++
    } else return !1;
    return I.length === d.length && W
  }
  parseNegate() {
    if (this.nonegate) return;
    let I = this.pattern,
      d = !1,
      G = 0;
    for (let Z = 0; Z < I.length && I.charAt(Z) === "!"; Z++) d = !d, G++;
    if (G) this.pattern = I.slice(G);
    this.negate = d
  }
  matchOne(I, d, G = !1) {
    let Z = this.options;
    if (this.isWindows) {
      let J = typeof I[0] === "string" && /^[a-z]:$/i.test(I[0]),
        K = !J && I[0] === "" && I[1] === "" && I[2] === "?" && /^[a-z]:$/i.test(I[3]),
        Q = typeof d[0] === "string" && /^[a-z]:$/i.test(d[0]),
        E = !Q && d[0] === "" && d[1] === "" && d[2] === "?" && typeof d[3] === "string" && /^[a-z]:$/i.test(d[3]),
        S = K ? 3 : J ? 0 : void 0,
        P = E ? 3 : Q ? 0 : void 0;
      if (typeof S === "number" && typeof P === "number") {
        let [$, h] = [I[S], d[P]];
        if ($.toLowerCase() === h.toLowerCase()) {
          if (d[P] = $, P > S) d = d.slice(P);
          else if (S > P) I = I.slice(S)
        }
      }
    }
    let {
      optimizationLevel: C = 1
    } = this.options;
    if (C >= 2) I = this.levelTwoFileOptimize(I);
    this.debug("matchOne", this, {
      file: I,
      pattern: d
    }), this.debug("matchOne", I.length, d.length);
    for (var W = 0, w = 0, B = I.length, A = d.length; W < B && w < A; W++, w++) {
      this.debug("matchOne loop");
      var V = d[w],
        X = I[W];
      if (this.debug(d, V, X), V === !1) return !1;
      if (V === j8) {
        this.debug("GLOBSTAR", [d, V, X]);
        var _ = W,
          F = w + 1;
        if (F === A) {
          this.debug("** at the end");
          for (; W < B; W++)
            if (I[W] === "." || I[W] === ".." || !Z.dot && I[W].charAt(0) === ".") return !1;
          return !0
        }
        while (_ < B) {
          var g = I[_];
          if (this.debug(`
globstar while`, I, _, d, F, g), this.matchOne(I.slice(_), d.slice(F), G)) return this.debug("globstar found match!", _, B, g), !0;
          else {
            if (g === "." || g === ".." || !Z.dot && g.charAt(0) === ".") {
              this.debug("dot detected!", I, _, d, F);
              break
            }
            this.debug("globstar swallow a segment, and continue"), _++
          }
        }
        if (G) {
          if (this.debug(`
>>> no match, partial?`, I, _, d, F), _ === B) return !0
        }
        return !1
      }
      let J;
      if (typeof V === "string") J = X === V, this.debug("string match", V, X, J);
      else J = V.test(X), this.debug("pattern match", V, X, J);
      if (!J) return !1
    }
    if (W === B && w === A) return !0;
    else if (W === B) return G;
    else if (w === A) return W === B - 1 && I[W] === "";
    else throw new Error("wtf?")
  }
  braceExpand() {
    return li1(this.pattern, this.options)
  }
  parse(I) {
    oM(I);
    let d = this.options;
    if (I === "**") return j8;
    if (I === "") return "";
    let G, Z = null;
    if (G = I.match(qJ4)) Z = d.dot ? UJ4 : RJ4;
    else if (G = I.match(DJ4)) Z = (d.nocase ? d.dot ? JJ4 : gJ4 : d.dot ? FJ4 : HJ4)(G[1]);
    else if (G = I.match(vJ4)) Z = (d.nocase ? d.dot ? MJ4 : EJ4 : d.dot ? SJ4 : LJ4)(G);
    else if (G = I.match(KJ4)) Z = d.dot ? zJ4 : NJ4;
    else if (G = I.match(QJ4)) Z = fJ4;
    let C = h8.fromGlob(I, this.options).toMMPattern();
    if (Z && typeof C === "object") Reflect.defineProperty(C, "test", {
      value: Z
    });
    return C
  }
  makeRe() {
    if (this.regexp || this.regexp === !1) return this.regexp;
    let I = this.set;
    if (!I.length) return this.regexp = !1, this.regexp;
    let d = this.options,
      G = d.noglobstar ? $J4 : d.dot ? uJ4 : TJ4,
      Z = new Set(d.nocase ? ["i"] : []),
      C = I.map((B) => {
        let A = B.map((V) => {
          if (V instanceof RegExp)
            for (let X of V.flags.split("")) Z.add(X);
          return typeof V === "string" ? hJ4(V) : V === j8 ? j8 : V._src
        });
        return A.forEach((V, X) => {
          let _ = A[X + 1],
            F = A[X - 1];
          if (V !== j8 || F === j8) return;
          if (F === void 0)
            if (_ !== void 0 && _ !== j8) A[X + 1] = "(?:\\/|" + G + "\\/)?" + _;
            else A[X] = G;
          else if (_ === void 0) A[X - 1] = F + "(?:\\/|" + G + ")?";
          else if (_ !== j8) A[X - 1] = F + "(?:\\/|\\/" + G + "\\/)" + _, A[X + 1] = j8
        }), A.filter((V) => V !== j8).join("/")
      }).join("|"),
      [W, w] = I.length > 1 ? ["(?:", ")"] : ["", ""];
    if (C = "^" + W + C + w + "$", this.negate) C = "^(?!" + C + ").+$";
    try {
      this.regexp = new RegExp(C, [...Z].join(""))
    } catch (B) {
      this.regexp = !1
    }
    return this.regexp
  }
  slashSplit(I) {
    if (this.preserveMultipleSlashes) return I.split("/");
    else if (this.isWindows && /^\/\/[^\/]+/.test(I)) return ["", ...I.split(/\/+/)];
    else return I.split(/\/+/)
  }
  match(I, d = this.partial) {
    if (this.debug("match", I, this.pattern), this.comment) return !1;
    if (this.empty) return I === "";
    if (I === "/" && d) return !0;
    let G = this.options;
    if (this.isWindows) I = I.split("\\").join("/");
    let Z = this.slashSplit(I);
    this.debug(this.pattern, "split", Z);
    let C = this.set;
    this.debug(this.pattern, "set", C);
    let W = Z[Z.length - 1];
    if (!W)
      for (let w = Z.length - 2; !W && w >= 0; w--) W = Z[w];
    for (let w = 0; w < C.length; w++) {
      let B = C[w],
        A = Z;
      if (G.matchBase && B.length === 1) A = [W];
      if (this.matchOne(A, B, d)) {
        if (G.flipNegate) return !0;
        return !this.negate
      }
    }
    if (G.flipNegate) return !1;
    return this.negate
  }
  static defaults(I) {
    return ZI.defaults(I).Minimatch
  }
}
// @from(Start 5740528, End 5740641)
RQ = typeof performance === "object" && performance && typeof performance.now === "function" ? performance : Date
// @from(Start 5740645, End 5740658)
hi1 = new Set
// @from(Start 5740662, End 5740723)
a91 = typeof process === "object" && !!process ? process : {}
// @from(Start 5740727, End 5740863)
ji1 = (I, d, G, Z) => {
    typeof a91.emitWarning === "function" ? a91.emitWarning(I, d, G, Z) : console.error(`[${G}] ${d}: ${I}`)
  }
// @from(Start 5740867, End 5740898)
Jk = globalThis.AbortController
// @from(Start 5740902, End 5740930)
bi1 = globalThis.AbortSignal
// @from(Start 5741967, End 5741991)
jJ4 = (I) => !hi1.has(I)
// @from(Start 5741995, End 5742015)
Wm9 = Symbol("type")
// @from(Start 5742019, End 5742079)
iY = (I) => I && I === Math.floor(I) && I > 0 && isFinite(I)
// @from(Start 5742083, End 5742261)
ki1 = (I) => !iY(I) ? null : I <= Math.pow(2, 8) ? Uint8Array : I <= Math.pow(2, 16) ? Uint16Array : I <= Math.pow(2, 32) ? Uint32Array : I <= Number.MAX_SAFE_INTEGER ? tM : null
// @from(Start 5742263, End 5742343)
class tM extends Array {
  constructor(I) {
    super(I);
    this.fill(0)
  }
}
// @from(Start 5742344, End 5742774)
class UQ {
  heap;
  length;
  static #I = !1;
  static create(I) {
    let d = ki1(I);
    if (!d) return [];
    UQ.#I = !0;
    let G = new UQ(I, d);
    return UQ.#I = !1, G
  }
  constructor(I, d) {
    if (!UQ.#I) throw new TypeError("instantiate Stack using Stack.create(n)");
    this.heap = new d(I), this.length = 0
  }
  push(I) {
    this.heap[this.length++] = I
  }
  pop() {
    return this.heap[--this.length]
  }
}