/* Some variables in the code import from the following projects
* zx, Gd, Nb4, Df, T40, Q_ import from OSS "npm"
* C4, Q9, p, u, Gk, r1, UM, wZ import from OSS "ink"
* J1 import from OSS "sentry"
* u1 import from OSS "statsig"
* i40, o40, T90, Pj0, t8, rk0, UV1, fD, ac0, h2, n82 import from OSS "aws-sdk"
* K2, R0, vw, Lb, K4, j0, B41, Pb, w41, A41, pF, I0, I5, t21, gU, Rl1, Ul1, vl1, El1, R51 import from OSS "yoga"
* vH, UH import from OSS "marked.js"
* ll import from OSS "commander.js"
*/

// @from(Start 5837330, End 5838753)
Nb4 = (I, d) => {
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
        return d.state;
      case "set-focus":
        return {
          ...I, focusedValue: d.value
        }
    }
  }
// @from(Start 5838757, End 5839128)
O40 = ({
    visibleOptionCount: I,
    defaultValue: d,
    options: G
  }) => {
    let Z = typeof I === "number" ? Math.min(I, G.length) : G.length,
      C = new zx(G);
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
// @from(Start 5839132, End 5840723)
m40 = ({
    visibleOptionCount: I = 5,
    options: d,
    defaultValue: G,
    onChange: Z,
    onFocus: C,
    focusValue: W
  }) => {
    let [w, B] = Gd.useReducer(Nb4, {
      visibleOptionCount: I,
      defaultValue: G,
      options: d
    }, O40), [A, V] = Gd.useState(d);
    if (d !== A && !Kb4(d, A)) B({
      type: "reset",
      state: O40({
        visibleOptionCount: I,
        defaultValue: G,
        options: d
      })
    }), V(d);
    let X = Gd.useCallback(() => {
        B({
          type: "focus-next-option"
        })
      }, []),
      _ = Gd.useCallback(() => {
        B({
          type: "focus-previous-option"
        })
      }, []),
      F = Gd.useCallback(() => {
        B({
          type: "select-focused-option"
        })
      }, []),
      g = Gd.useMemo(() => {
        return d.map((J, K) => ({
          ...J,
          index: K
        })).slice(w.visibleFromIndex, w.visibleToIndex)
      }, [d, w.visibleFromIndex, w.visibleToIndex]);
    return Gd.useEffect(() => {
      if (w.value && w.previousValue !== w.value) Z?.(w.value)
    }, [w.previousValue, w.value, d, Z]), Gd.useEffect(() => {
      if (w.focusedValue) C?.(w.focusedValue)
    }, [w.focusedValue, C]), Gd.useEffect(() => {
      if (W) B({
        type: "set-focus",
        value: W
      })
    }, [W]), {
      focusedValue: w.focusedValue,
      visibleFromIndex: w.visibleFromIndex,
      visibleToIndex: w.visibleToIndex,
      value: w.value,
      visibleOptions: g,
      focusNextOption: X,
      focusPreviousOption: _,
      selectFocusedOption: F
    }
  }
// @from(Start 5840729, End 5840954)
l40 = ({
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
// @from(Start 5840957, End 5841886)
function N_({
  isDisabled: I = !1,
  visibleOptionCount: d = 5,
  highlightText: G,
  options: Z,
  defaultValue: C,
  onChange: W,
  onFocus: w,
  focusValue: B
}) {
  let A = m40({
    visibleOptionCount: d,
    options: Z,
    defaultValue: C,
    onChange: W,
    onFocus: w,
    focusValue: B
  });
  l40({
    isDisabled: I,
    state: A
  });
  let {
    styles: V
  } = Q9("Select");
  return Df.default.createElement(p, {
    ...V.container()
  }, A.visibleOptions.map((X) => {
    let _ = X.label,
      F = _;
    if (G && _.includes(G)) {
      let g = _.indexOf(G);
      F = Df.default.createElement(Df.default.Fragment, null, _.slice(0, g), Df.default.createElement(u, {
        ...V.highlightedText()
      }, G), _.slice(g + G.length))
    }
    return Df.default.createElement(T40, {
      key: X.value,
      isFocused: !I && A.focusedValue === X.value,
      isSelected: A.value === X.value
    }, F)
  }))
}
// @from(Start 5841891, End 5841908)
r81 = J1(u1(), 1)
// @from(Start 5841914, End 5841931)
yg = J1(i40(), 1)
// @from(Start 5841937, End 5841988)
n40 = process.env.TERM_PROGRAM === "Apple_Terminal"
// @from(Start 5841992, End 5841999)
w5 = {}
// @from(Start 5844490, End 5844498)
r40 = w5
// @from(Start 5844504, End 5844521)
Qx = J1(o40(), 1)
// @from(Start 5844524, End 5844756)
function Lg(I, d, {
  target: G = "stdout",
  ...Z
} = {}) {
  if (!Qx.default[G]) {
    if (Z.fallback === !1) return I;
    return typeof Z.fallback === "function" ? Z.fallback(I, d) : `${I} (​${d}​)`
  }
  return r40.link(I, d)
}
// @from(Start 5844912, End 5845096)
e40 = ({
  children: I,
  url: d,
  fallback: G = !0
}) => r81.default.createElement(Gk, {
  transform: (Z) => Lg(Z, d, {
    fallback: G
  })
}, r81.default.createElement(u, null, I))
// @from(Start 5845289, End 5845297)
Pg = e40
// @from(Start 5845303, End 5845319)
fx = J1(u1(), 1)
// @from(Start 5845325, End 5845374)
qb4 = ["iTerm.app", "WezTerm", "Hyper", "VSCode"]
// @from(Start 5845377, End 5845663)
function z_({
  url: I,
  children: d
}) {
  let G = qb4.includes(K2.terminal ?? ""),
    Z = d || I;
  if (G || Z !== I) return fx.default.createElement(Pg, {
    url: I
  }, fx.default.createElement(u, null, Z));
  else return fx.default.createElement(u, {
    underline: !0
  }, Z)
}
// @from(Start 5845665, End 5846461)
function t40({
  onDone: I
}) {
  return C4((d, G) => {
    if (G.ctrl && (d === "c" || d === "d") || G.escape) I()
  }), Q_.default.createElement(p, {
    flexDirection: "column",
    borderStyle: "round",
    padding: 1,
    borderColor: r1().secondaryBorder
  }, Q_.default.createElement(p, {
    marginBottom: 1,
    flexDirection: "column"
  }, Q_.default.createElement(u, {
    bold: !0
  }, "You've spent $5 on the Anthropic API this session."), Q_.default.createElement(u, null, "Learn more about how to monitor your spending:"), Q_.default.createElement(z_, {
    url: "https://docs.anthropic.com/s/claude-code-cost"
  })), Q_.default.createElement(p, null, Q_.default.createElement(N_, {
    options: [{
      value: "ok",
      label: "Got it, thanks!"
    }],
    onChange: I
  })))
}
// @from(Start 5846466, End 5846482)
g4 = J1(u1(), 1)
// @from(Start 5846486, End 5846502)
h5 = J1(u1(), 1)
// @from(Start 5846508, End 5846524)
n4 = J1(u1(), 1)
// @from(Start 5846530, End 5846538)
a81 = 46
// @from(Start 5846541, End 5848204)
function I50({
  mcpClients: I,
  isDefaultModel: d = !1
}) {
  let G = Math.max(a81, R0().length + 12),
    Z = r1(),
    C = process.env.ANTHROPIC_MODEL,
    W = vw(),
    w = !Lb(),
    B = !d && Boolean(C),
    A = !1;
  return n4.createElement(p, {
    flexDirection: "column"
  }, n4.createElement(p, {
    borderColor: Z.claude,
    borderStyle: "round",
    flexDirection: "column",
    gap: 1,
    paddingLeft: 1,
    width: G
  }, n4.createElement(u, null, n4.createElement(u, {
    color: Z.claude
  }, "✻"), " Welcome to", " ", n4.createElement(u, {
    bold: !0
  }, K4), " ", n4.createElement(u, null, "research preview!")), n4.createElement(n4.Fragment, null, n4.createElement(p, {
    paddingLeft: 2,
    flexDirection: "column",
    gap: 1
  }, n4.createElement(u, {
    color: Z.secondaryText,
    italic: !0
  }, "/help for help", !1), n4.createElement(u, {
    color: Z.secondaryText
  }, "cwd: ", R0())), !1), I.length ? n4.createElement(p, {
    borderColor: Z.secondaryBorder,
    borderStyle: "single",
    borderBottom: !1,
    borderLeft: !1,
    borderRight: !1,
    borderTop: !0,
    flexDirection: "column",
    marginLeft: 2,
    marginRight: 1,
    paddingTop: 1
  }, n4.createElement(p, {
    marginBottom: 1
  }, n4.createElement(u, {
    color: Z.secondaryText
  }, "MCP Servers:")), I.map((V, X) => n4.createElement(p, {
    key: X,
    width: G - 6
  }, n4.createElement(u, {
    color: Z.secondaryText
  }, "• ", V.name), n4.createElement(p, {
    flexGrow: 1
  }), n4.createElement(u, {
    bold: !0,
    color: V.type === "connected" ? Z.success : Z.error
  }, V.type === "connected" ? "connected" : "failed")))) : null))
}
// @from(Start 5848209, End 5848225)
B6 = J1(u1(), 1)
// @from(Start 5848231, End 5848247)
JX = J1(u1(), 1)
// @from(Start 5848298, End 5848314)
p0 = J1(u1(), 1)
// @from(Start 5848318, End 5848334)
iZ = J1(u1(), 1)
// @from(Start 5848340, End 5848354)
d50 = () => []
// @from(Start 5848358, End 5848372)
G50 = () => {}
// @from(Start 5848375, End 5848404)
function Z50(I) {
  d50 = I
}
// @from(Start 5848406, End 5848436)
function yS() {
  return d50
}
// @from(Start 5848438, End 5848467)
function C50(I) {
  G50 = I
}
// @from(Start 5848469, End 5848499)
function qx() {
  return G50
}
// @from(Start 5848504, End 5848521)
t81 = J1(u1(), 1)
// @from(Start 5848527, End 5848544)
X50 = J1(u1(), 1)
// @from(Start 5848550, End 5848567)
s81 = J1(u1(), 1)
// @from(Start 5848571, End 5848581)
W50 = 2000
// @from(Start 5848584, End 5848913)
function $g(I, d, G) {
  let Z = s81.useRef(0),
    C = s81.useRef();
  return () => {
    let W = Date.now();
    if (W - Z.current <= W50 && C.current) {
      if (C.current) clearTimeout(C.current), C.current = void 0;
      d(), I(!1)
    } else G?.(), I(!0), C.current = setTimeout(() => I(!1), W50);
    Z.current = W
  }
}
// @from(Start 5848914, End 5852597)
class Zd {
  measuredText;
  selection;
  offset;
  constructor(I, d = 0, G = 0) {
    this.measuredText = I;
    this.selection = G;
    this.offset = Math.max(0, Math.min(this.measuredText.text.length, d))
  }
  static fromText(I, d, G = 0, Z = 0) {
    return new Zd(new w50(I, d - 1), G, Z)
  }
  render(I, d, G) {
    let {
      line: Z,
      column: C
    } = this.getPosition();
    return this.measuredText.getWrappedText().map((W, w, B) => {
      let A = W;
      if (d && w === B.length - 1) {
        let V = Math.max(0, W.length - 6);
        A = d.repeat(V) + W.slice(V)
      }
      if (Z != w) return A.trimEnd();
      return A.slice(0, C) + G(A[C] || I) + A.trimEnd().slice(C + 1)
    }).join(`
`)
  }
  left() {
    return new Zd(this.measuredText, this.offset - 1)
  }
  right() {
    return new Zd(this.measuredText, this.offset + 1)
  }
  up() {
    let {
      line: I,
      column: d
    } = this.getPosition();
    if (I == 0) return new Zd(this.measuredText, 0, 0);
    let G = this.getOffset({
      line: I - 1,
      column: d
    });
    return new Zd(this.measuredText, G, 0)
  }
  down() {
    let {
      line: I,
      column: d
    } = this.getPosition();
    if (I >= this.measuredText.lineCount - 1) return new Zd(this.measuredText, this.text.length, 0);
    let G = this.getOffset({
      line: I + 1,
      column: d
    });
    return new Zd(this.measuredText, G, 0)
  }
  startOfLine() {
    let {
      line: I
    } = this.getPosition();
    return new Zd(this.measuredText, this.getOffset({
      line: I,
      column: 0
    }), 0)
  }
  endOfLine() {
    let {
      line: I
    } = this.getPosition(), d = this.measuredText.getLineLength(I), G = this.getOffset({
      line: I,
      column: d
    });
    return new Zd(this.measuredText, G, 0)
  }
  nextWord() {
    let I = this;
    while (I.isOverWordChar() && !I.isAtEnd()) I = I.right();
    while (!I.isOverWordChar() && !I.isAtEnd()) I = I.right();
    return I
  }
  prevWord() {
    let I = this;
    if (!I.left().isOverWordChar()) I = I.left();
    while (!I.isOverWordChar() && !I.isAtStart()) I = I.left();
    if (I.isOverWordChar())
      while (I.left().isOverWordChar() && !I.isAtStart()) I = I.left();
    return I
  }
  modifyText(I, d = "") {
    let G = this.offset,
      Z = I.offset,
      C = this.text.slice(0, G) + d + this.text.slice(Z);
    return Zd.fromText(C, this.columns, G + d.length)
  }
  insert(I) {
    return this.modifyText(this, I)
  }
  del() {
    if (this.isAtEnd()) return this;
    return this.modifyText(this.right())
  }
  backspace() {
    if (this.isAtStart()) return this;
    return this.left().modifyText(this)
  }
  deleteToLineStart() {
    return this.startOfLine().modifyText(this)
  }
  deleteToLineEnd() {
    if (this.text[this.offset] === `
`) return this.modifyText(this.right());
    return this.modifyText(this.endOfLine())
  }
  deleteWordBefore() {
    if (this.isAtStart()) return this;
    return this.prevWord().modifyText(this)
  }
  deleteWordAfter() {
    if (this.isAtEnd()) return this;
    return this.modifyText(this.nextWord())
  }
  isOverWordChar() {
    let I = this.text[this.offset] ?? "";
    return /\w/.test(I)
  }
  equals(I) {
    return this.offset === I.offset && this.measuredText == I.measuredText
  }
  isAtStart() {
    return this.offset == 0
  }
  isAtEnd() {
    return this.offset == this.text.length
  }
  get text() {
    return this.measuredText.text
  }
  get columns() {
    return this.measuredText.columns + 1
  }
  getPosition() {
    return this.measuredText.getPositionFromOffset(this.offset)
  }
  getOffset(I) {
    return this.measuredText.getOffsetFromPosition(I)
  }
}
// @from(Start 5852598, End 5852990)
class Rx {
  text;
  startOffset;
  isPrecededByNewline;
  endsWithNewline;
  constructor(I, d, G, Z = !1) {
    this.text = I;
    this.startOffset = d;
    this.isPrecededByNewline = G;
    this.endsWithNewline = Z
  }
  equals(I) {
    return this.text === I.text && this.startOffset === I.startOffset
  }
  get length() {
    return this.text.length + (this.endsWithNewline ? 1 : 0)
  }
}
// @from(Start 5852991, End 5855716)
class w50 {
  text;
  columns;
  wrappedLines;
  constructor(I, d) {
    this.text = I;
    this.columns = d;
    this.wrappedLines = this.measureWrappedText()
  }
  measureWrappedText() {
    let I = UM(this.text, this.columns, {
        hard: !0,
        trim: !1
      }),
      d = [],
      G = 0,
      Z = -1,
      C = I.split(`
`);
    for (let W = 0; W < C.length; W++) {
      let w = C[W],
        B = (A) => W == 0 || A > 0 && this.text[A - 1] === `
`;
      if (w.length === 0)
        if (Z = this.text.indexOf(`
`, Z + 1), Z !== -1) {
          let A = Z,
            V = !0;
          d.push(new Rx(w, A, B(A), !0))
        } else {
          let A = this.text.length;
          d.push(new Rx(w, A, B(A), !1))
        }
      else {
        let A = this.text.indexOf(w, G);
        if (A === -1) throw console.log("Debug: Failed to find wrapped line in original text"), console.log("Debug: Current text:", w), console.log("Debug: Full original text:", this.text), console.log("Debug: Search offset:", G), console.log("Debug: Wrapped text:", I), new Error("Failed to find wrapped line in original text");
        G = A + w.length;
        let V = A + w.length,
          X = V < this.text.length && this.text[V] === `
`;
        if (X) Z = V;
        d.push(new Rx(w, A, B(A), X))
      }
    }
    return d
  }
  getWrappedText() {
    return this.wrappedLines.map((I) => I.isPrecededByNewline ? I.text : I.text.trimStart())
  }
  getLine(I) {
    return this.wrappedLines[Math.max(0, Math.min(I, this.wrappedLines.length - 1))]
  }
  getOffsetFromPosition(I) {
    let d = this.getLine(I.line),
      G = d.startOffset + I.column;
    if (d.text.length === 0 && d.endsWithNewline) return d.startOffset;
    let Z = d.startOffset + d.text.length,
      C = d.endsWithNewline ? Z + 1 : Z;
    return Math.min(G, C)
  }
  getLineLength(I) {
    let d = this.getLine(I),
      G = this.getLine(I + 1);
    if (G.equals(d)) return this.text.length - d.startOffset;
    return G.startOffset - d.startOffset - 1
  }
  getPositionFromOffset(I) {
    let d = this.wrappedLines;
    for (let Z = 0; Z < d.length; Z++) {
      let C = d[Z],
        W = d[Z + 1];
      if (I >= C.startOffset && (!W || I < W.startOffset)) {
        let w = C.isPrecededByNewline ? 0 : C.text.length - C.text.trimStart().length,
          B = Math.max(0, Math.min(I - C.startOffset - w, C.text.length));
        return {
          line: Z,
          column: B
        }
      }
    }
    let G = d.length - 1;
    return {
      line: G,
      column: this.wrappedLines[G].text.length
    }
  }
  get lineCount() {
    return this.wrappedLines.length
  }
  equals(I) {
    return this.text === I.text && this.columns === I.columns
  }
}
// @from(Start 5855816, End 5855861)
e81 = "/tmp/claude_cli_latest_screenshot.png"
// @from(Start 5855865, End 5855963)
B50 = "No image found in clipboard. Use Cmd + Ctrl + Shift + 4 to copy a screenshot to clipboard."
// @from(Start 5855966, End 5856492)
function A50() {
  if (process.platform !== "darwin") return null;
  try {
    o81("osascript -e 'the clipboard as «class PNGf»'", {
      stdio: "ignore"
    }), o81(`osascript -e 'set png_data to (the clipboard as «class PNGf»)' -e 'set fp to open for access POSIX file "${e81}" with write permission' -e 'write png_data to fp' -e 'close access fp'`, {
      stdio: "ignore"
    });
    let d = Rb4(e81).toString("base64");
    return o81(`rm -f "${e81}"`, {
      stdio: "ignore"
    }), d
  } catch {
    return null
  }
}
// @from(Start 5856497, End 5856519)
Ub4 = "[Image pasted]"
// @from(Start 5856522, End 5856616)
function V50(I) {
  return function(d) {
    return (new Map(I).get(d) ?? (() => {}))(d)
  }
}
// @from(Start 5856618, End 5860412)
function Y50({
  value: I,
  onChange: d,
  onSubmit: G,
  onExit: Z,
  onExitMessage: C,
  onMessage: W,
  onHistoryUp: w,
  onHistoryDown: B,
  onHistoryReset: A,
  mask: V = "",
  multiline: X = !1,
  cursorChar: _,
  invert: F,
  columns: g,
  onImagePaste: J,
  disableCursorMovementForUpDownKeys: K = !1,
  externalOffset: Q,
  onOffsetChange: E
}) {
  let S = Q,
    P = E,
    $ = Zd.fromText(I, g, S),
    [h, O] = X50.useState(null);

  function T() {
    if (!h) return;
    clearTimeout(h), O(null), W?.(!1)
  }
  let V1 = $g((B0) => {
      T(), C?.(B0, "Ctrl-C")
    }, () => Z?.(), () => {
      if (I) d(""), A?.()
    }),
    c = $g((B0) => {
      T(), W?.(!!I && B0, "Press Escape again to clear")
    }, () => {
      if (I) d("")
    });

  function c1() {
    return Zd.fromText("", g, 0)
  }
  let o1 = $g((B0) => C?.(B0, "Ctrl-D"), () => Z?.());

  function a1() {
    if (T(), $.text === "") return o1(), $;
    return $.del()
  }

  function f1() {
    let B0 = A50();
    if (B0 === null) {
      if (process.platform !== "darwin") return $;
      return W?.(!0, B50), T(), O(setTimeout(() => {
        W?.(!1)
      }, 4000)), $
    }
    return J?.(B0), $.insert(Ub4)
  }
  let r = V50([
      ["a", () => $.startOfLine()],
      ["b", () => $.left()],
      ["c", V1],
      ["d", a1],
      ["e", () => $.endOfLine()],
      ["f", () => $.right()],
      ["h", () => $.backspace()],
      ["k", () => $.deleteToLineEnd()],
      ["l", () => c1()],
      ["n", () => e1()],
      ["p", () => T1()],
      ["u", () => $.deleteToLineStart()],
      ["v", f1],
      ["w", () => $.deleteWordBefore()]
    ]),
    A1 = V50([
      ["b", () => $.prevWord()],
      ["f", () => $.nextWord()],
      ["d", () => $.deleteWordAfter()]
    ]);

  function m1(B0) {
    if (X && $.offset > 0 && $.text[$.offset - 1] === "\\") return $.backspace().insert(`
`);
    if (B0.meta) return $.insert(`
`);
    G?.(I)
  }

  function T1() {
    if (K) return w?.(), $;
    let B0 = $.up();
    if (B0.equals($)) w?.();
    return B0
  }

  function e1() {
    if (K) return B?.(), $;
    let B0 = $.down();
    if (B0.equals($)) B?.();
    return B0
  }

  function F0(B0) {
    switch (!0) {
      case B0.escape:
        return c;
      case (B0.leftArrow && (B0.ctrl || B0.meta || B0.fn)):
        return () => $.prevWord();
      case (B0.rightArrow && (B0.ctrl || B0.meta || B0.fn)):
        return () => $.nextWord();
      case B0.backspace:
        return B0.meta ? () => $.deleteWordBefore() : () => $.backspace();
      case B0.delete:
        return B0.meta ? () => $.deleteToLineEnd() : () => $.del();
      case B0.ctrl:
        return r;
      case B0.home:
        return () => $.startOfLine();
      case B0.end:
        return () => $.endOfLine();
      case B0.pageDown:
        return () => $.endOfLine();
      case B0.pageUp:
        return () => $.startOfLine();
      case B0.meta:
        return A1;
      case B0.return:
        return () => m1(B0);
      case B0.tab:
        return () => {};
      case B0.upArrow:
        return T1;
      case B0.downArrow:
        return e1;
      case B0.leftArrow:
        return () => $.left();
      case B0.rightArrow:
        return () => $.right()
    }
    return function(a0) {
      switch (!0) {
        case (a0 == "\x1B[H" || a0 == "\x1B[1~"):
          return $.startOfLine();
        case (a0 == "\x1B[F" || a0 == "\x1B[4~"):
          return $.endOfLine();
        default:
          return $.insert(a0.replace(/\r/g, `
`))
      }
    }
  }

  function P0(B0, a0) {
    let e = F0(a0)(B0);
    if (e) {
      if (!$.equals(e)) {
        if (P(e.offset), $.text != e.text) d(e.text)
      }
    }
  }
  return {
    onInput: P0,
    renderedValue: $.render(_, V, F),
    offset: S,
    setOffset: P
  }
}
// @from(Start 5860414, End 5862340)
function mC({
  value: I,
  placeholder: d = "",
  focus: G = !0,
  mask: Z,
  multiline: C = !1,
  highlightPastedText: W = !1,
  showCursor: w = !0,
  onChange: B,
  onSubmit: A,
  onExit: V,
  onHistoryUp: X,
  onHistoryDown: _,
  onExitMessage: F,
  onMessage: g,
  onHistoryReset: J,
  columns: K,
  onImagePaste: Q,
  onPaste: E,
  isDimmed: S = !1,
  disableCursorMovementForUpDownKeys: P = !1,
  cursorOffset: $,
  onChangeCursorOffset: h
}) {
  let {
    onInput: O,
    renderedValue: T
  } = Y50({
    value: I,
    onChange: B,
    onSubmit: A,
    onExit: V,
    onExitMessage: F,
    onMessage: g,
    onHistoryReset: J,
    onHistoryUp: X,
    onHistoryDown: _,
    focus: G,
    mask: Z,
    multiline: C,
    cursorChar: w ? " " : "",
    highlightPastedText: W,
    invert: j0.inverse,
    themeText: (r) => j0.hex(r1().text)(r),
    columns: K,
    onImagePaste: Q,
    disableCursorMovementForUpDownKeys: P,
    externalOffset: $,
    onOffsetChange: h
  }), [V1, c] = t81.default.useState({
    chunks: [],
    timeoutId: null
  }), c1 = (r) => {
    if (r) clearTimeout(r);
    return setTimeout(() => {
      c(({
        chunks: A1
      }) => {
        let m1 = A1.join("");
        return Promise.resolve().then(() => E(m1)), {
          chunks: [],
          timeoutId: null
        }
      })
    }, 100)
  };
  C4((r, A1) => {
    if (E && (r.length > 800 || V1.timeoutId)) {
      c(({
        chunks: m1,
        timeoutId: T1
      }) => {
        return {
          chunks: [...m1, r],
          timeoutId: c1(T1)
        }
      });
      return
    }
    O(r, A1)
  }, {
    isActive: G
  });
  let a1 = d ? j0.hex(r1().secondaryText)(d) : void 0;
  if (w && G) a1 = d.length > 0 ? j0.inverse(d[0]) + j0.hex(r1().secondaryText)(d.slice(1)) : j0.inverse(" ");
  let f1 = I.length == 0 && d;
  return t81.default.createElement(u, {
    wrap: "truncate-end",
    dimColor: S
  }, f1 ? a1 : T)
}
// @from(Start 5862345, End 5862361)
Ux = J1(u1(), 1)
// @from(Start 5862364, End 5862763)
function G9() {
  let [I, d] = Ux.useState({
    columns: process.stdout.columns || 80,
    rows: process.stdout.rows || 24
  });
  return Ux.useEffect(() => {
    function G() {
      d({
        columns: process.stdout.columns || 80,
        rows: process.stdout.rows || 24
      })
    }
    return process.stdout.on("resize", G), () => {
      process.stdout.off("resize", G)
    }
  }, []), I
}
// @from(Start 5862768, End 5863007)
PS = `claude-cli/${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.anthropic.com/s/claude-code",VERSION:"0.2.9"}.VERSION} (external)`
// @from(Start 5863013, End 5863026)
ug = "0.36.3"
// @from(Start 5863063, End 5863088)
class Y4 extends Error {}
// @from(Start 5863089, End 5864104)
class f9 extends Y4 {
  constructor(I, d, G, Z) {
    super(`${f9.makeMessage(I,d,G)}`);
    this.status = I, this.headers = Z, this.request_id = Z?.["request-id"], this.error = d
  }
  static makeMessage(I, d, G) {
    let Z = d?.message ? typeof d.message === "string" ? d.message : JSON.stringify(d.message) : d ? JSON.stringify(d) : G;
    if (I && Z) return `${I} ${Z}`;
    if (I) return `${I} status code (no body)`;
    if (Z) return Z;
    return "(no status code or body)"
  }
  static generate(I, d, G, Z) {
    if (!I || !Z) return new rw({
      message: G,
      cause: vx(d)
    });
    let C = d;
    if (I === 400) return new $S(I, C, G, Z);
    if (I === 401) return new uS(I, C, G, Z);
    if (I === 403) return new TS(I, C, G, Z);
    if (I === 404) return new OS(I, C, G, Z);
    if (I === 409) return new mS(I, C, G, Z);
    if (I === 422) return new lS(I, C, G, Z);
    if (I === 429) return new bS(I, C, G, Z);
    if (I >= 500) return new hS(I, C, G, Z);
    return new f9(I, C, G, Z)
  }
}
// @from(Start 5864105, End 5864238)
class p8 extends f9 {
  constructor({
    message: I
  } = {}) {
    super(void 0, void 0, I || "Request was aborted.", void 0)
  }
}
// @from(Start 5864239, End 5864405)
class rw extends f9 {
  constructor({
    message: I,
    cause: d
  }) {
    super(void 0, void 0, I || "Connection error.", void 0);
    if (d) this.cause = d
  }
}
// @from(Start 5864406, End 5864536)
class Ff extends rw {
  constructor({
    message: I
  } = {}) {
    super({
      message: I ?? "Request timed out."
    })
  }
}
// @from(Start 5864537, End 5864559)
class $S extends f9 {}
// @from(Start 5864560, End 5864582)
class uS extends f9 {}
// @from(Start 5864583, End 5864605)
class TS extends f9 {}
// @from(Start 5864606, End 5864628)
class OS extends f9 {}
// @from(Start 5864629, End 5864651)
class mS extends f9 {}
// @from(Start 5864652, End 5864674)
class lS extends f9 {}
// @from(Start 5864675, End 5864697)
class bS extends f9 {}
// @from(Start 5864698, End 5864720)
class hS extends f9 {}
// @from(Start 5864725, End 5865156)
Ex = function(I, d, G, Z, C) {
    if (Z === "m") throw new TypeError("Private method is not writable");
    if (Z === "a" && !C) throw new TypeError("Private accessor was defined without a setter");
    if (typeof d === "function" ? I !== d || !C : !d.has(I)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return Z === "a" ? C.call(I, G) : C ? C.value = G : d.set(I, G), G
  }
// @from(Start 5865160, End 5865518)
Tg = function(I, d, G, Z) {
    if (G === "a" && !Z) throw new TypeError("Private accessor was defined without a getter");
    if (typeof d === "function" ? I !== d || !Z : !d.has(I)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return G === "m" ? Z : G === "a" ? Z.call(I) : Z ? Z.value : d.get(I)
  }
// @from(Start 5865522, End 5865524)
td
// @from(Start 5865526, End 5867662)
class f_ {
  constructor() {
    td.set(this, void 0), this.buffer = new Uint8Array, Ex(this, td, null, "f")
  }
  decode(I) {
    if (I == null) return [];
    let d = I instanceof ArrayBuffer ? new Uint8Array(I) : typeof I === "string" ? new TextEncoder().encode(I) : I,
      G = new Uint8Array(this.buffer.length + d.length);
    G.set(this.buffer), G.set(d, this.buffer.length), this.buffer = G;
    let Z = [],
      C;
    while ((C = Eb4(this.buffer, Tg(this, td, "f"))) != null) {
      if (C.carriage && Tg(this, td, "f") == null) {
        Ex(this, td, C.index, "f");
        continue
      }
      if (Tg(this, td, "f") != null && (C.index !== Tg(this, td, "f") + 1 || C.carriage)) {
        Z.push(this.decodeText(this.buffer.slice(0, Tg(this, td, "f") - 1))), this.buffer = this.buffer.slice(Tg(this, td, "f")), Ex(this, td, null, "f");
        continue
      }
      let W = Tg(this, td, "f") !== null ? C.preceding - 1 : C.preceding,
        w = this.decodeText(this.buffer.slice(0, W));
      Z.push(w), this.buffer = this.buffer.slice(C.index), Ex(this, td, null, "f")
    }
    return Z
  }
  decodeText(I) {
    if (I == null) return "";
    if (typeof I === "string") return I;
    if (typeof Buffer !== "undefined") {
      if (I instanceof Buffer) return I.toString();
      if (I instanceof Uint8Array) return Buffer.from(I).toString();
      throw new Y4(`Unexpected: received non-Uint8Array (${I.constructor.name}) stream chunk in an environment with a global "Buffer" defined, which this library assumes to be Node. Please report this error.`)
    }
    if (typeof TextDecoder !== "undefined") {
      if (I instanceof Uint8Array || I instanceof ArrayBuffer) return this.textDecoder ?? (this.textDecoder = new TextDecoder("utf8")), this.textDecoder.decode(I);
      throw new Y4(`Unexpected: received non-Uint8Array/ArrayBuffer (${I.constructor.name}) in a web platform. Please report this error.`)
    }
    throw new Y4("Unexpected: neither Buffer nor TextDecoder are available as globals. Please report this error.")
  }
  flush() {
    if (!this.buffer.length) return [];
    return this.decode(`
`)
  }
}
// @from(Start 5867759, End 5868034)
function Eb4(I, d) {
  for (let C = d ?? 0; C < I.length; C++) {
    if (I[C] === 10) return {
      preceding: C,
      index: C + 1,
      carriage: !1
    };
    if (I[C] === 13) return {
      preceding: C,
      index: C + 1,
      carriage: !0
    }
  }
  return null
}
// @from(Start 5868036, End 5868520)
function Og(I) {
  if (I[Symbol.asyncIterator]) return I;
  let d = I.getReader();
  return {
    async next() {
      try {
        let G = await d.read();
        if (G?.done) d.releaseLock();
        return G
      } catch (G) {
        throw d.releaseLock(), G
      }
    },
    async return () {
      let G = d.cancel();
      return d.releaseLock(), await G, {
        done: !0,
        value: void 0
      }
    },
    [Symbol.asyncIterator]() {
      return this
    }
  }
}
// @from(Start 5868521, End 5871577)
class BI {
  constructor(I, d) {
    this.iterator = I, this.controller = d
  }
  static fromSSEResponse(I, d) {
    let G = !1;
    async function* Z() {
      if (G) throw new Error("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
      G = !0;
      let C = !1;
      try {
        for await (let W of Mb4(I, d)) {
          if (W.event === "completion") try {
            yield JSON.parse(W.data)
          } catch (w) {
            throw console.error("Could not parse message into JSON:", W.data), console.error("From chunk:", W.raw), w
          }
          if (W.event === "message_start" || W.event === "message_delta" || W.event === "message_stop" || W.event === "content_block_start" || W.event === "content_block_delta" || W.event === "content_block_stop") try {
            yield JSON.parse(W.data)
          } catch (w) {
            throw console.error("Could not parse message into JSON:", W.data), console.error("From chunk:", W.raw), w
          }
          if (W.event === "ping") continue;
          if (W.event === "error") throw f9.generate(void 0, `SSE Error: ${W.data}`, W.data, jS(I.headers))
        }
        C = !0
      } catch (W) {
        if (W instanceof Error && W.name === "AbortError") return;
        throw W
      } finally {
        if (!C) d.abort()
      }
    }
    return new BI(Z, d)
  }
  static fromReadableStream(I, d) {
    let G = !1;
    async function* Z() {
      let W = new f_,
        w = Og(I);
      for await (let B of w) for (let A of W.decode(B)) yield A;
      for (let B of W.flush()) yield B
    }
    async function* C() {
      if (G) throw new Error("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
      G = !0;
      let W = !1;
      try {
        for await (let w of Z()) {
          if (W) continue;
          if (w) yield JSON.parse(w)
        }
        W = !0
      } catch (w) {
        if (w instanceof Error && w.name === "AbortError") return;
        throw w
      } finally {
        if (!W) d.abort()
      }
    }
    return new BI(C, d)
  } [Symbol.asyncIterator]() {
    return this.iterator()
  }
  tee() {
    let I = [],
      d = [],
      G = this.iterator(),
      Z = (C) => {
        return {
          next: () => {
            if (C.length === 0) {
              let W = G.next();
              I.push(W), d.push(W)
            }
            return C.shift()
          }
        }
      };
    return [new BI(() => Z(I), this.controller), new BI(() => Z(d), this.controller)]
  }
  toReadableStream() {
    let I = this,
      d, G = new TextEncoder;
    return new B41({
      async start() {
        d = I[Symbol.asyncIterator]()
      },
      async pull(Z) {
        try {
          let {
            value: C,
            done: W
          } = await d.next();
          if (W) return Z.close();
          let w = G.encode(JSON.stringify(C) + `
`);
          Z.enqueue(w)
        } catch (C) {
          Z.error(C)
        }
      },
      async cancel() {
        await d.return?.()
      }
    })
  }
}
// @from(Start 5871578, End 5871939)
async function* Mb4(I, d) {
  if (!I.body) throw d.abort(), new Y4("Attempted to iterate over a response with no body");
  let G = new _50,
    Z = new f_,
    C = Og(I.body);
  for await (let W of Sb4(C)) for (let w of Z.decode(W)) {
    let B = G.decode(w);
    if (B) yield B
  }
  for (let W of Z.flush()) {
    let w = G.decode(W);
    if (w) yield w
  }
}
// @from(Start 5871940, End 5872363)
async function* Sb4(I) {
  let d = new Uint8Array;
  for await (let G of I) {
    if (G == null) continue;
    let Z = G instanceof ArrayBuffer ? new Uint8Array(G) : typeof G === "string" ? new TextEncoder().encode(G) : G,
      C = new Uint8Array(d.length + Z.length);
    C.set(d), C.set(Z, d.length), d = C;
    let W;
    while ((W = Lb4(d)) !== -1) yield d.slice(0, W), d = d.slice(W)
  }
  if (d.length > 0) yield d
}
// @from(Start 5872365, End 5872662)
function Lb4(I) {
  for (let Z = 0; Z < I.length - 2; Z++) {
    if (I[Z] === 10 && I[Z + 1] === 10) return Z + 2;
    if (I[Z] === 13 && I[Z + 1] === 13) return Z + 2;
    if (I[Z] === 13 && I[Z + 1] === 10 && Z + 3 < I.length && I[Z + 2] === 13 && I[Z + 3] === 10) return Z + 4
  }
  return -1
}
// @from(Start 5872663, End 5873331)
class _50 {
  constructor() {
    this.event = null, this.data = [], this.chunks = []
  }
  decode(I) {
    if (I.endsWith("\r")) I = I.substring(0, I.length - 1);
    if (!I) {
      if (!this.event && !this.data.length) return null;
      let C = {
        event: this.event,
        data: this.data.join(`
`),
        raw: this.chunks
      };
      return this.event = null, this.data = [], this.chunks = [], C
    }
    if (this.chunks.push(I), I.startsWith(":")) return null;
    let [d, G, Z] = yb4(I, ":");
    if (Z.startsWith(" ")) Z = Z.substring(1);
    if (d === "event") this.event = Z;
    else if (d === "data") this.data.push(Z);
    return null
  }
}
// @from(Start 5873333, End 5873474)
function yb4(I, d) {
  let G = I.indexOf(d);
  if (G !== -1) return [I.substring(0, G), d, I.substring(G + d.length)];
  return [I, "", ""]
}
// @from(Start 5873479, End 5873587)
Pb4 = (I) => I != null && typeof I === "object" && typeof I.url === "string" && typeof I.blob === "function"
// @from(Start 5873591, End 5873715)
$b4 = (I) => I != null && typeof I === "object" && typeof I.name === "string" && typeof I.lastModified === "number" && kS(I)
// @from(Start 5873719, End 5873929)
kS = (I) => I != null && typeof I === "object" && typeof I.size === "number" && typeof I.type === "string" && typeof I.text === "function" && typeof I.slice === "function" && typeof I.arrayBuffer === "function"
// @from(Start 5873931, End 5874405)
async function D50(I, d, G) {
  if (I = await I, $b4(I)) return I;
  if (Pb4(I)) {
    let C = await I.blob();
    d || (d = new URL(I.url).pathname.split(/[\\/]/).pop() ?? "unknown_file");
    let W = kS(C) ? [await C.arrayBuffer()] : [C];
    return new Pb(W, d, G)
  }
  let Z = await ub4(I);
  if (d || (d = Ob4(I) ?? "unknown_file"), !G?.type) {
    let C = Z[0]?.type;
    if (typeof C === "string") G = {
      ...G,
      type: C
    }
  }
  return new Pb(Z, d, G)
}
// @from(Start 5874406, End 5874772)
async function ub4(I) {
  let d = [];
  if (typeof I === "string" || ArrayBuffer.isView(I) || I instanceof ArrayBuffer) d.push(I);
  else if (kS(I)) d.push(await I.arrayBuffer());
  else if (mb4(I))
    for await (let G of I) d.push(G);
  else throw new Error(`Unexpected data type: ${typeof I}; constructor: ${I?.constructor?.name}; props: ${Tb4(I)}`);
  return d
}
// @from(Start 5874774, End 5874869)
function Tb4(I) {
  return `[${Object.getOwnPropertyNames(I).map((G)=>`"${G}"`).join(", ")}]`
}
// @from(Start 5874871, End 5874967)
function Ob4(I) {
  return I71(I.name) || I71(I.filename) || I71(I.path)?.split(/[\\/]/).pop()
}
// @from(Start 5874972, End 5875122)
I71 = (I) => {
    if (typeof I === "string") return I;
    if (typeof Buffer !== "undefined" && I instanceof Buffer) return String(I);
    return
  }
// @from(Start 5875126, End 5875222)
mb4 = (I) => I != null && typeof I === "object" && typeof I[Symbol.asyncIterator] === "function"
// @from(Start 5875226, End 5875320)
d71 = (I) => I && typeof I === "object" && I.body && I[Symbol.toStringTag] === "MultipartBody"
// @from(Start 5875326, End 5875758)
bb4 = function(I, d, G, Z, C) {
    if (Z === "m") throw new TypeError("Private method is not writable");
    if (Z === "a" && !C) throw new TypeError("Private accessor was defined without a setter");
    if (typeof d === "function" ? I !== d || !C : !d.has(I)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return Z === "a" ? C.call(I, G) : C ? C.value = G : d.set(I, G), G
  }
// @from(Start 5875762, End 5876121)
hb4 = function(I, d, G, Z) {
    if (G === "a" && !Z) throw new TypeError("Private accessor was defined without a getter");
    if (typeof d === "function" ? I !== d || !Z : !d.has(I)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return G === "m" ? Z : G === "a" ? Z.call(I) : Z ? Z.value : d.get(I)
  }
// @from(Start 5876125, End 5876127)
Mx
// @from(Start 5876129, End 5876804)
async function K50(I) {
  let {
    response: d
  } = I;
  if (I.options.stream) {
    if (Jf("response", d.status, d.url, d.headers, d.body), I.options.__streamClass) return I.options.__streamClass.fromSSEResponse(d, I.controller);
    return BI.fromSSEResponse(d, I.controller)
  }
  if (d.status === 204) return null;
  if (I.options.__binaryResponse) return d;
  let G = d.headers.get("content-type");
  if (G?.includes("application/json") || G?.includes("application/vnd.api+json")) {
    let W = await d.json();
    return Jf("response", d.status, d.url, d.headers, W), N50(W, d)
  }
  let C = await d.text();
  return Jf("response", d.status, d.url, d.headers, C), C
}
// @from(Start 5876806, End 5877008)
function N50(I, d) {
  if (!I || typeof I !== "object" || Array.isArray(I)) return I;
  return Object.defineProperty(I, "_request_id", {
    value: d.headers.get("request-id"),
    enumerable: !1
  })
}
// @from(Start 5877009, End 5877865)
class Sx extends Promise {
  constructor(I, d = K50) {
    super((G) => {
      G(null)
    });
    this.responsePromise = I, this.parseResponse = d
  }
  _thenUnwrap(I) {
    return new Sx(this.responsePromise, async (d) => N50(I(await this.parseResponse(d), d), d.response))
  }
  asResponse() {
    return this.responsePromise.then((I) => I.response)
  }
  async withResponse() {
    let [I, d] = await Promise.all([this.parse(), this.asResponse()]);
    return {
      data: I,
      response: d,
      request_id: d.headers.get("request-id")
    }
  }
  parse() {
    if (!this.parsedPromise) this.parsedPromise = this.responsePromise.then(this.parseResponse);
    return this.parsedPromise
  }
  then(I, d) {
    return this.parse().then(I, d)
  } catch (I) {
    return this.parse().catch(I)
  } finally(I) {
    return this.parse().finally(I)
  }
}
// @from(Start 5877866, End 5885794)
class mg {
  constructor({
    baseURL: I,
    maxRetries: d = 2,
    timeout: G = 600000,
    httpAgent: Z,
    fetch: C
  }) {
    this.baseURL = I, this.maxRetries = G71("maxRetries", d), this.timeout = G71("timeout", G), this.httpAgent = Z, this.fetch = C ?? w41
  }
  authHeaders(I) {
    return {}
  }
  defaultHeaders(I) {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": this.getUserAgent(),
      ...cb4(),
      ...this.authHeaders(I)
    }
  }
  validateHeaders(I, d) {}
  defaultIdempotencyKey() {
    return `stainless-node-retry-${rb4()}`
  }
  get(I, d) {
    return this.methodRequest("get", I, d)
  }
  post(I, d) {
    return this.methodRequest("post", I, d)
  }
  patch(I, d) {
    return this.methodRequest("patch", I, d)
  }
  put(I, d) {
    return this.methodRequest("put", I, d)
  }
  delete(I, d) {
    return this.methodRequest("delete", I, d)
  }
  methodRequest(I, d, G) {
    return this.request(Promise.resolve(G).then(async (Z) => {
      let C = Z && kS(Z?.body) ? new DataView(await Z.body.arrayBuffer()) : Z?.body instanceof DataView ? Z.body : Z?.body instanceof ArrayBuffer ? new DataView(Z.body) : Z && ArrayBuffer.isView(Z?.body) ? new DataView(Z.body.buffer) : Z?.body;
      return {
        method: I,
        path: d,
        ...Z,
        body: C
      }
    }))
  }
  getAPIList(I, d, G) {
    return this.requestAPIList(d, {
      method: "get",
      path: I,
      ...G
    })
  }
  calculateContentLength(I) {
    if (typeof I === "string") {
      if (typeof Buffer !== "undefined") return Buffer.byteLength(I, "utf8").toString();
      if (typeof TextEncoder !== "undefined") return new TextEncoder().encode(I).length.toString()
    } else if (ArrayBuffer.isView(I)) return I.byteLength.toString();
    return null
  }
  buildRequest(I, {
    retryCount: d = 0
  } = {}) {
    I = {
      ...I
    };
    let {
      method: G,
      path: Z,
      query: C,
      headers: W = {}
    } = I, w = ArrayBuffer.isView(I.body) || I.__binaryRequest && typeof I.body === "string" ? I.body : d71(I.body) ? I.body.body : I.body ? JSON.stringify(I.body, null, 2) : null, B = this.calculateContentLength(w), A = this.buildURL(Z, C);
    if ("timeout" in I) G71("timeout", I.timeout);
    I.timeout = I.timeout ?? this.timeout;
    let V = I.httpAgent ?? this.httpAgent ?? A41(A),
      X = I.timeout + 1000;
    if (typeof V?.options?.timeout === "number" && X > (V.options.timeout ?? 0)) V.options.timeout = X;
    if (this.idempotencyHeader && G !== "get") {
      if (!I.idempotencyKey) I.idempotencyKey = this.defaultIdempotencyKey();
      W[this.idempotencyHeader] = I.idempotencyKey
    }
    let _ = this.buildHeaders({
      options: I,
      headers: W,
      contentLength: B,
      retryCount: d
    });
    return {
      req: {
        method: G,
        ...w && {
          body: w
        },
        headers: _,
        ...V && {
          agent: V
        },
        signal: I.signal ?? null
      },
      url: A,
      timeout: I.timeout
    }
  }
  buildHeaders({
    options: I,
    headers: d,
    contentLength: G,
    retryCount: Z
  }) {
    let C = {};
    if (G) C["content-length"] = G;
    let W = this.defaultHeaders(I);
    if (J50(C, W), J50(C, d), d71(I.body) && pF !== "node") delete C["content-type"];
    if (gf(W, "x-stainless-retry-count") === void 0 && gf(d, "x-stainless-retry-count") === void 0) C["x-stainless-retry-count"] = String(Z);
    if (gf(W, "x-stainless-timeout") === void 0 && gf(d, "x-stainless-timeout") === void 0 && I.timeout) C["x-stainless-timeout"] = String(I.timeout);
    return this.validateHeaders(C, d), C
  }
  async prepareOptions(I) {}
  async prepareRequest(I, {
    url: d,
    options: G
  }) {}
  parseHeaders(I) {
    return !I ? {} : (Symbol.iterator in I) ? Object.fromEntries(Array.from(I).map((d) => [...d])) : {
      ...I
    }
  }
  makeStatusError(I, d, G, Z) {
    return f9.generate(I, d, G, Z)
  }
  request(I, d = null) {
    return new Sx(this.makeRequest(I, d))
  }
  async makeRequest(I, d) {
    let G = await I,
      Z = G.maxRetries ?? this.maxRetries;
    if (d == null) d = Z;
    await this.prepareOptions(G);
    let {
      req: C,
      url: W,
      timeout: w
    } = this.buildRequest(G, {
      retryCount: Z - d
    });
    if (await this.prepareRequest(C, {
        url: W,
        options: G
      }), Jf("request", W, G, C.headers), G.signal?.aborted) throw new p8;
    let B = new AbortController,
      A = await this.fetchWithTimeout(W, C, w, B).catch(vx);
    if (A instanceof Error) {
      if (G.signal?.aborted) throw new p8;
      if (d) return this.retryRequest(G, d);
      if (A.name === "AbortError") throw new Ff;
      throw new rw({
        cause: A
      })
    }
    let V = jS(A.headers);
    if (!A.ok) {
      if (d && this.shouldRetry(A)) {
        let K = `retrying, ${d} attempts remaining`;
        return Jf(`response (error; ${K})`, A.status, W, V), this.retryRequest(G, d, V)
      }
      let X = await A.text().catch((K) => vx(K).message),
        _ = C71(X),
        F = _ ? void 0 : X;
      throw Jf(`response (error; ${d?"(error; no more retries left)":"(error; not retryable)"})`, A.status, W, V, F), this.makeStatusError(A.status, _, F, V)
    }
    return {
      response: A,
      options: G,
      controller: B
    }
  }
  requestAPIList(I, d) {
    let G = this.makeRequest(d, null);
    return new z50(this, G, I)
  }
  buildURL(I, d) {
    let G = ib4(I) ? new URL(I) : new URL(this.baseURL + (this.baseURL.endsWith("/") && I.startsWith("/") ? I.slice(1) : I)),
      Z = this.defaultQuery();
    if (!xS(Z)) d = {
      ...Z,
      ...d
    };
    if (typeof d === "object" && d && !Array.isArray(d)) G.search = this.stringifyQuery(d);
    return G.toString()
  }
  stringifyQuery(I) {
    return Object.entries(I).filter(([d, G]) => typeof G !== "undefined").map(([d, G]) => {
      if (typeof G === "string" || typeof G === "number" || typeof G === "boolean") return `${encodeURIComponent(d)}=${encodeURIComponent(G)}`;
      if (G === null) return `${encodeURIComponent(d)}=`;
      throw new Y4(`Cannot stringify type ${typeof G}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`)
    }).join("&")
  }
  async fetchWithTimeout(I, d, G, Z) {
    let {
      signal: C,
      ...W
    } = d || {};
    if (C) C.addEventListener("abort", () => Z.abort());
    let w = setTimeout(() => Z.abort(), G),
      B = {
        signal: Z.signal,
        ...W
      };
    if (B.method) B.method = B.method.toUpperCase();
    return this.fetch.call(void 0, I, B).finally(() => {
      clearTimeout(w)
    })
  }
  shouldRetry(I) {
    let d = I.headers.get("x-should-retry");
    if (d === "true") return !0;
    if (d === "false") return !1;
    if (I.status === 408) return !0;
    if (I.status === 409) return !0;
    if (I.status === 429) return !0;
    if (I.status >= 500) return !0;
    return !1
  }
  async retryRequest(I, d, G) {
    let Z, C = G?.["retry-after-ms"];
    if (C) {
      let w = parseFloat(C);
      if (!Number.isNaN(w)) Z = w
    }
    let W = G?.["retry-after"];
    if (W && !Z) {
      let w = parseFloat(W);
      if (!Number.isNaN(w)) Z = w * 1000;
      else Z = Date.parse(W) - Date.now()
    }
    if (!(Z && 0 <= Z && Z < 60000)) {
      let w = I.maxRetries ?? this.maxRetries;
      Z = this.calculateDefaultRetryTimeoutMillis(d, w)
    }
    return await nb4(Z), this.makeRequest(I, d - 1)
  }
  calculateDefaultRetryTimeoutMillis(I, d) {
    let C = d - I,
      W = Math.min(0.5 * Math.pow(2, C), 8),
      w = 1 - Math.random() * 0.25;
    return W * w * 1000
  }
  getUserAgent() {
    return `${this.constructor.name}/JS ${ug}`
  }
}
// @from(Start 5885795, End 5886948)
class Z71 {
  constructor(I, d, G, Z) {
    Mx.set(this, void 0), bb4(this, Mx, I, "f"), this.options = Z, this.response = d, this.body = G
  }
  hasNextPage() {
    if (!this.getPaginatedItems().length) return !1;
    return this.nextPageInfo() != null
  }
  async getNextPage() {
    let I = this.nextPageInfo();
    if (!I) throw new Y4("No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.");
    let d = {
      ...this.options
    };
    if ("params" in I && typeof d.query === "object") d.query = {
      ...d.query,
      ...I.params
    };
    else if ("url" in I) {
      let G = [...Object.entries(d.query || {}), ...I.url.searchParams.entries()];
      for (let [Z, C] of G) I.url.searchParams.set(Z, C);
      d.query = void 0, d.path = I.url.toString()
    }
    return await hb4(this, Mx, "f").requestAPIList(this.constructor, d)
  }
  async * iterPages() {
    let I = this;
    yield I;
    while (I.hasNextPage()) I = await I.getNextPage(), yield I
  }
  async * [(Mx = new WeakMap, Symbol.asyncIterator)]() {
    for await (let I of this.iterPages()) for (let d of I.getPaginatedItems()) yield d
  }
}
// @from(Start 5886949, End 5887175)
class z50 extends Sx {
  constructor(I, d, G) {
    super(d, async (Z) => new G(I, Z.response, await K50(Z), Z.options))
  }
  async * [Symbol.asyncIterator]() {
    let I = await this;
    for await (let d of I) yield d
  }
}
// @from(Start 5887180, End 5887358)
jS = (I) => {
    return new Proxy(Object.fromEntries(I.entries()), {
      get(d, G) {
        let Z = G.toString();
        return d[Z.toLowerCase()] || d[Z]
      }
    })
  }
// @from(Start 5887362, End 5887634)
jb4 = {
    method: !0,
    path: !0,
    query: !0,
    body: !0,
    headers: !0,
    maxRetries: !0,
    stream: !0,
    timeout: !0,
    httpAgent: !0,
    signal: !0,
    idempotencyKey: !0,
    __binaryRequest: !0,
    __binaryResponse: !0,
    __streamClass: !0
  }
// @from(Start 5887638, End 5887756)
gZ = (I) => {
    return typeof I === "object" && I !== null && !xS(I) && Object.keys(I).every((d) => Q50(jb4, d))
  }
// @from(Start 5887760, End 5889403)
kb4 = () => {
    if (typeof Deno !== "undefined" && Deno.build != null) return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": ug,
      "X-Stainless-OS": F50(Deno.build.os),
      "X-Stainless-Arch": H50(Deno.build.arch),
      "X-Stainless-Runtime": "deno",
      "X-Stainless-Runtime-Version": typeof Deno.version === "string" ? Deno.version : Deno.version?.deno ?? "unknown"
    };
    if (typeof EdgeRuntime !== "undefined") return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": ug,
      "X-Stainless-OS": "Unknown",
      "X-Stainless-Arch": `other:${EdgeRuntime}`,
      "X-Stainless-Runtime": "edge",
      "X-Stainless-Runtime-Version": process.version
    };
    if (Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]") return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": ug,
      "X-Stainless-OS": F50(process.platform),
      "X-Stainless-Arch": H50(process.arch),
      "X-Stainless-Runtime": "node",
      "X-Stainless-Runtime-Version": process.version
    };
    let I = xb4();
    if (I) return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": ug,
      "X-Stainless-OS": "Unknown",
      "X-Stainless-Arch": "unknown",
      "X-Stainless-Runtime": `browser:${I.browser}`,
      "X-Stainless-Runtime-Version": I.version
    };
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": ug,
      "X-Stainless-OS": "Unknown",
      "X-Stainless-Arch": "unknown",
      "X-Stainless-Runtime": "unknown",
      "X-Stainless-Runtime-Version": "unknown"
    }
  }
// @from(Start 5889406, End 5890290)
function xb4() {
  if (typeof navigator === "undefined" || !navigator) return null;
  let I = [{
    key: "edge",
    pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
  }, {
    key: "ie",
    pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
  }, {
    key: "ie",
    pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/
  }, {
    key: "chrome",
    pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
  }, {
    key: "firefox",
    pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
  }, {
    key: "safari",
    pattern: /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/
  }];
  for (let {
      key: d,
      pattern: G
    }
    of I) {
    let Z = G.exec(navigator.userAgent);
    if (Z) {
      let C = Z[1] || 0,
        W = Z[2] || 0,
        w = Z[3] || 0;
      return {
        browser: d,
        version: `${C}.${W}.${w}`
      }
    }
  }
  return null
}
// @from(Start 5890295, End 5890547)
H50 = (I) => {
    if (I === "x32") return "x32";
    if (I === "x86_64" || I === "x64") return "x64";
    if (I === "arm") return "arm";
    if (I === "aarch64" || I === "arm64") return "arm64";
    if (I) return `other:${I}`;
    return "unknown"
  }
// @from(Start 5890551, End 5890933)
F50 = (I) => {
    if (I = I.toLowerCase(), I.includes("ios")) return "iOS";
    if (I === "android") return "Android";
    if (I === "darwin") return "MacOS";
    if (I === "win32") return "Windows";
    if (I === "freebsd") return "FreeBSD";
    if (I === "openbsd") return "OpenBSD";
    if (I === "linux") return "Linux";
    if (I) return `Other:${I}`;
    return "Unknown"
  }
// @from(Start 5890937, End 5890940)
g50
// @from(Start 5890942, End 5890991)
cb4 = () => {
    return g50 ?? (g50 = kb4())
  }
// @from(Start 5890995, End 5891087)
C71 = (I) => {
    try {
      return JSON.parse(I)
    } catch (d) {
      return
    }
  }
// @from(Start 5891091, End 5891119)
pb4 = /^[a-z][a-z0-9+.-]*:/i
// @from(Start 5891123, End 5891164)
ib4 = (I) => {
    return pb4.test(I)
  }
// @from(Start 5891168, End 5891217)
nb4 = (I) => new Promise((d) => setTimeout(d, I))
// @from(Start 5891221, End 5891415)
G71 = (I, d) => {
    if (typeof d !== "number" || !Number.isInteger(d)) throw new Y4(`${I} must be an integer`);
    if (d < 0) throw new Y4(`${I} must be a positive integer`);
    return d
  }
// @from(Start 5891419, End 5891614)
vx = (I) => {
    if (I instanceof Error) return I;
    if (typeof I === "object" && I !== null) try {
      return new Error(JSON.stringify(I))
    } catch {}
    return new Error(String(I))
  }
// @from(Start 5891620, End 5891795)
lC = (I) => {
  if (typeof process !== "undefined") return process.env?.[I]?.trim() ?? void 0;
  if (typeof Deno !== "undefined") return Deno.env?.get?.(I)?.trim();
  return
}
// @from(Start 5891798, End 5891879)
function xS(I) {
  if (!I) return !0;
  for (let d in I) return !1;
  return !0
}
// @from(Start 5891881, End 5891955)
function Q50(I, d) {
  return Object.prototype.hasOwnProperty.call(I, d)
}
// @from(Start 5891957, End 5892172)
function J50(I, d) {
  for (let G in d) {
    if (!Q50(d, G)) continue;
    let Z = G.toLowerCase();
    if (!Z) continue;
    let C = d[G];
    if (C === null) delete I[Z];
    else if (C !== void 0) I[Z] = C
  }
}
// @from(Start 5892174, End 5892312)
function Jf(I, ...d) {
  if (typeof process !== "undefined" && process?.env?.DEBUG === "true") console.log(`Anthropic:DEBUG:${I}`, ...d)
}
// @from(Start 5892317, End 5892509)
rb4 = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (I) => {
      let d = Math.random() * 16 | 0;
      return (I === "x" ? d : d & 3 | 8).toString(16)
    })
  }
// @from(Start 5892513, End 5892649)
f50 = () => {
    return typeof window !== "undefined" && typeof window.document !== "undefined" && typeof navigator !== "undefined"
  }
// @from(Start 5892653, End 5892711)
ab4 = (I) => {
    return typeof I?.get === "function"
  }
// @from(Start 5892717, End 5893279)
gf = (I, d) => {
  let G = d.toLowerCase();
  if (ab4(I)) {
    let Z = d[0]?.toUpperCase() + d.substring(1).replace(/([^\w])(\w)/g, (C, W, w) => W + w.toUpperCase());
    for (let C of [d, G, d.toUpperCase(), Z]) {
      let W = I.get(C);
      if (W) return W
    }
  }
  for (let [Z, C] of Object.entries(I))
    if (Z.toLowerCase() === G) {
      if (Array.isArray(C)) {
        if (C.length <= 1) return C[0];
        return console.warn(`Received ${C.length} entries for the ${d} header, using the first entry.`), C[0]
      }
      return C
    } return
}
// @from(Start 5893282, End 5893365)
function q_(I) {
  return I != null && typeof I === "object" && !Array.isArray(I)
}
// @from(Start 5893366, End 5894274)
class YV extends Z71 {
  constructor(I, d, G, Z) {
    super(I, d, G, Z);
    this.data = G.data || [], this.has_more = G.has_more || !1, this.first_id = G.first_id || null, this.last_id = G.last_id || null
  }
  getPaginatedItems() {
    return this.data ?? []
  }
  hasNextPage() {
    if (this.has_more === !1) return !1;
    return super.hasNextPage()
  }
  nextPageParams() {
    let I = this.nextPageInfo();
    if (!I) return null;
    if ("params" in I) return I.params;
    let d = Object.fromEntries(I.url.searchParams);
    if (!Object.keys(d).length) return null;
    return d
  }
  nextPageInfo() {
    if (this.options.query?.before_id) {
      let d = this.first_id;
      if (!d) return null;
      return {
        params: {
          before_id: d
        }
      }
    }
    let I = this.last_id;
    if (!I) return null;
    return {
      params: {
        after_id: I
      }
    }
  }
}
// @from(Start 5894275, End 5894331)
class i8 {
  constructor(I) {
    this._client = I
  }
}
// @from(Start 5894332, End 5894601)
class Kf extends i8 {
  retrieve(I, d) {
    return this._client.get(`/v1/models/${I}?beta=true`, d)
  }
  list(I = {}, d) {
    if (gZ(I)) return this.list({}, I);
    return this._client.getAPIList("/v1/models?beta=true", cS, {
      query: I,
      ...d
    })
  }
}
// @from(Start 5894602, End 5894624)
class cS extends YV {}
// @from(Start 5894653, End 5895135)
class Nf {
  constructor(I, d) {
    this.iterator = I, this.controller = d
  }
  async * decoder() {
    let I = new f_;
    for await (let d of this.iterator) for (let G of I.decode(d)) yield JSON.parse(G);
    for (let d of I.flush()) yield JSON.parse(d)
  } [Symbol.asyncIterator]() {
    return this.decoder()
  }
  static fromResponse(I, d) {
    if (!I.body) throw d.abort(), new Y4("Attempted to iterate over a response with no body");
    return new Nf(Og(I.body), d)
  }
}
// @from(Start 5895136, End 5897403)
class zf extends i8 {
  create(I, d) {
    let {
      betas: G,
      ...Z
    } = I;
    return this._client.post("/v1/messages/batches?beta=true", {
      body: Z,
      ...d,
      headers: {
        "anthropic-beta": [...G ?? [], "message-batches-2024-09-24"].toString(),
        ...d?.headers
      }
    })
  }
  retrieve(I, d = {}, G) {
    if (gZ(d)) return this.retrieve(I, {}, d);
    let {
      betas: Z
    } = d;
    return this._client.get(`/v1/messages/batches/${I}?beta=true`, {
      ...G,
      headers: {
        "anthropic-beta": [...Z ?? [], "message-batches-2024-09-24"].toString(),
        ...G?.headers
      }
    })
  }
  list(I = {}, d) {
    if (gZ(I)) return this.list({}, I);
    let {
      betas: G,
      ...Z
    } = I;
    return this._client.getAPIList("/v1/messages/batches?beta=true", pS, {
      query: Z,
      ...d,
      headers: {
        "anthropic-beta": [...G ?? [], "message-batches-2024-09-24"].toString(),
        ...d?.headers
      }
    })
  }
  delete(I, d = {}, G) {
    if (gZ(d)) return this.delete(I, {}, d);
    let {
      betas: Z
    } = d;
    return this._client.delete(`/v1/messages/batches/${I}?beta=true`, {
      ...G,
      headers: {
        "anthropic-beta": [...Z ?? [], "message-batches-2024-09-24"].toString(),
        ...G?.headers
      }
    })
  }
  cancel(I, d = {}, G) {
    if (gZ(d)) return this.cancel(I, {}, d);
    let {
      betas: Z
    } = d;
    return this._client.post(`/v1/messages/batches/${I}/cancel?beta=true`, {
      ...G,
      headers: {
        "anthropic-beta": [...Z ?? [], "message-batches-2024-09-24"].toString(),
        ...G?.headers
      }
    })
  }
  async results(I, d = {}, G) {
    if (gZ(d)) return this.results(I, {}, d);
    let Z = await this.retrieve(I);
    if (!Z.results_url) throw new Y4(`No batch \`results_url\`; Has it finished processing? ${Z.processing_status} - ${Z.id}`);
    let {
      betas: C
    } = d;
    return this._client.get(Z.results_url, {
      ...G,
      headers: {
        "anthropic-beta": [...C ?? [], "message-batches-2024-09-24"].toString(),
        Accept: "application/binary",
        ...G?.headers
      },
      __binaryResponse: !0
    })._thenUnwrap((W, w) => Nf.fromResponse(w.response, w.controller))
  }
}
// @from(Start 5897404, End 5897426)
class pS extends YV {}
// @from(Start 5897463, End 5899699)
eb4 = (I) => {
    let d = 0,
      G = [];
    while (d < I.length) {
      let Z = I[d];
      if (Z === "\\") {
        d++;
        continue
      }
      if (Z === "{") {
        G.push({
          type: "brace",
          value: "{"
        }), d++;
        continue
      }
      if (Z === "}") {
        G.push({
          type: "brace",
          value: "}"
        }), d++;
        continue
      }
      if (Z === "[") {
        G.push({
          type: "paren",
          value: "["
        }), d++;
        continue
      }
      if (Z === "]") {
        G.push({
          type: "paren",
          value: "]"
        }), d++;
        continue
      }
      if (Z === ":") {
        G.push({
          type: "separator",
          value: ":"
        }), d++;
        continue
      }
      if (Z === ",") {
        G.push({
          type: "delimiter",
          value: ","
        }), d++;
        continue
      }
      if (Z === '"') {
        let B = "",
          A = !1;
        Z = I[++d];
        while (Z !== '"') {
          if (d === I.length) {
            A = !0;
            break
          }
          if (Z === "\\") {
            if (d++, d === I.length) {
              A = !0;
              break
            }
            B += Z + I[d], Z = I[++d]
          } else B += Z, Z = I[++d]
        }
        if (Z = I[++d], !A) G.push({
          type: "string",
          value: B
        });
        continue
      }
      if (Z && /\s/.test(Z)) {
        d++;
        continue
      }
      let W = /[0-9]/;
      if (Z && W.test(Z) || Z === "-" || Z === ".") {
        let B = "";
        if (Z === "-") B += Z, Z = I[++d];
        while (Z && W.test(Z) || Z === ".") B += Z, Z = I[++d];
        G.push({
          type: "number",
          value: B
        });
        continue
      }
      let w = /[a-z]/i;
      if (Z && w.test(Z)) {
        let B = "";
        while (Z && w.test(Z)) {
          if (d === I.length) break;
          B += Z, Z = I[++d]
        }
        if (B == "true" || B == "false" || B === "null") G.push({
          type: "name",
          value: B
        });
        else {
          d++;
          continue
        }
        continue
      }
      d++
    }
    return G
  }
// @from(Start 5899703, End 5900402)
Qf = (I) => {
    if (I.length === 0) return I;
    let d = I[I.length - 1];
    switch (d.type) {
      case "separator":
        return I = I.slice(0, I.length - 1), Qf(I);
        break;
      case "number":
        let G = d.value[d.value.length - 1];
        if (G === "." || G === "-") return I = I.slice(0, I.length - 1), Qf(I);
      case "string":
        let Z = I[I.length - 2];
        if (Z?.type === "delimiter") return I = I.slice(0, I.length - 1), Qf(I);
        else if (Z?.type === "brace" && Z.value === "{") return I = I.slice(0, I.length - 1), Qf(I);
        break;
      case "delimiter":
        return I = I.slice(0, I.length - 1), Qf(I);
        break
    }
    return I
  }
// @from(Start 5900406, End 5900948)
tb4 = (I) => {
    let d = [];
    if (I.map((G) => {
        if (G.type === "brace")
          if (G.value === "{") d.push("}");
          else d.splice(d.lastIndexOf("}"), 1);
        if (G.type === "paren")
          if (G.value === "[") d.push("]");
          else d.splice(d.lastIndexOf("]"), 1)
      }), d.length > 0) d.reverse().map((G) => {
      if (G === "}") I.push({
        type: "brace",
        value: "}"
      });
      else if (G === "]") I.push({
        type: "paren",
        value: "]"
      })
    });
    return I
  }
// @from(Start 5900952, End 5901187)
Ih4 = (I) => {
    let d = "";
    return I.map((G) => {
      switch (G.type) {
        case "string":
          d += '"' + G.value + '"';
          break;
        default:
          d += G.value;
          break
      }
    }), d
  }
// @from(Start 5901191, End 5901235)
Lx = (I) => JSON.parse(Ih4(tb4(Qf(eb4(I)))))
// @from(Start 5901241, End 5901672)
S7 = function(I, d, G, Z, C) {
    if (Z === "m") throw new TypeError("Private method is not writable");
    if (Z === "a" && !C) throw new TypeError("Private accessor was defined without a setter");
    if (typeof d === "function" ? I !== d || !C : !d.has(I)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return Z === "a" ? C.call(I, G) : C ? C.value = G : d.set(I, G), G
  }
// @from(Start 5901676, End 5902034)
b4 = function(I, d, G, Z) {
    if (G === "a" && !Z) throw new TypeError("Private accessor was defined without a getter");
    if (typeof d === "function" ? I !== d || !Z : !d.has(I)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return G === "m" ? Z : G === "a" ? Z.call(I) : Z ? Z.value : d.get(I)
  }
// @from(Start 5902038, End 5902040)
JZ
// @from(Start 5902042, End 5902044)
R_
// @from(Start 5902046, End 5902048)
iS
// @from(Start 5902050, End 5902052)
yx
// @from(Start 5902054, End 5902056)
nS
// @from(Start 5902058, End 5902060)
rS
// @from(Start 5902062, End 5902064)
Px
// @from(Start 5902066, End 5902068)
aS
// @from(Start 5902070, End 5902072)
_V
// @from(Start 5902074, End 5902076)
sS
// @from(Start 5902078, End 5902080)
$x
// @from(Start 5902082, End 5902084)
ux
// @from(Start 5902086, End 5902088)
ff
// @from(Start 5902090, End 5902092)
Tx
// @from(Start 5902094, End 5902096)
Ox
// @from(Start 5902098, End 5902101)
w71
// @from(Start 5902103, End 5902106)
q50
// @from(Start 5902108, End 5902111)
B71
// @from(Start 5902113, End 5902116)
A71
// @from(Start 5902118, End 5902121)
V71
// @from(Start 5902123, End 5902126)
X71
// @from(Start 5902128, End 5902131)
R50
// @from(Start 5902133, End 5902151)
U50 = "__json_buf"
// @from(Start 5902153, End 5913121)
class oS {
  constructor() {
    JZ.add(this), this.messages = [], this.receivedMessages = [], R_.set(this, void 0), this.controller = new AbortController, iS.set(this, void 0), yx.set(this, () => {}), nS.set(this, () => {}), rS.set(this, void 0), Px.set(this, () => {}), aS.set(this, () => {}), _V.set(this, {}), sS.set(this, !1), $x.set(this, !1), ux.set(this, !1), ff.set(this, !1), Tx.set(this, void 0), Ox.set(this, void 0), B71.set(this, (I) => {
      if (S7(this, $x, !0, "f"), I instanceof Error && I.name === "AbortError") I = new p8;
      if (I instanceof p8) return S7(this, ux, !0, "f"), this._emit("abort", I);
      if (I instanceof Y4) return this._emit("error", I);
      if (I instanceof Error) {
        let d = new Y4(I.message);
        return d.cause = I, this._emit("error", d)
      }
      return this._emit("error", new Y4(String(I)))
    }), S7(this, iS, new Promise((I, d) => {
      S7(this, yx, I, "f"), S7(this, nS, d, "f")
    }), "f"), S7(this, rS, new Promise((I, d) => {
      S7(this, Px, I, "f"), S7(this, aS, d, "f")
    }), "f"), b4(this, iS, "f").catch(() => {}), b4(this, rS, "f").catch(() => {})
  }
  get response() {
    return b4(this, Tx, "f")
  }
  get request_id() {
    return b4(this, Ox, "f")
  }
  async withResponse() {
    let I = await b4(this, iS, "f");
    if (!I) throw new Error("Could not resolve a `Response` object");
    return {
      data: this,
      response: I,
      request_id: I.headers.get("request-id")
    }
  }
  static fromReadableStream(I) {
    let d = new oS;
    return d._run(() => d._fromReadableStream(I)), d
  }
  static createMessage(I, d, G) {
    let Z = new oS;
    for (let C of d.messages) Z._addMessageParam(C);
    return Z._run(() => Z._createMessage(I, {
      ...d,
      stream: !0
    }, {
      ...G,
      headers: {
        ...G?.headers,
        "X-Stainless-Helper-Method": "stream"
      }
    })), Z
  }
  _run(I) {
    I().then(() => {
      this._emitFinal(), this._emit("end")
    }, b4(this, B71, "f"))
  }
  _addMessageParam(I) {
    this.messages.push(I)
  }
  _addMessage(I, d = !0) {
    if (this.receivedMessages.push(I), d) this._emit("message", I)
  }
  async _createMessage(I, d, G) {
    let Z = G?.signal;
    if (Z) {
      if (Z.aborted) this.controller.abort();
      Z.addEventListener("abort", () => this.controller.abort())
    }
    b4(this, JZ, "m", A71).call(this);
    let {
      response: C,
      data: W
    } = await I.create({
      ...d,
      stream: !0
    }, {
      ...G,
      signal: this.controller.signal
    }).withResponse();
    this._connected(C);
    for await (let w of W) b4(this, JZ, "m", V71).call(this, w);
    if (W.controller.signal?.aborted) throw new p8;
    b4(this, JZ, "m", X71).call(this)
  }
  _connected(I) {
    if (this.ended) return;
    S7(this, Tx, I, "f"), S7(this, Ox, I?.headers.get("request-id"), "f"), b4(this, yx, "f").call(this, I), this._emit("connect")
  }
  get ended() {
    return b4(this, sS, "f")
  }
  get errored() {
    return b4(this, $x, "f")
  }
  get aborted() {
    return b4(this, ux, "f")
  }
  abort() {
    this.controller.abort()
  }
  on(I, d) {
    return (b4(this, _V, "f")[I] || (b4(this, _V, "f")[I] = [])).push({
      listener: d
    }), this
  }
  off(I, d) {
    let G = b4(this, _V, "f")[I];
    if (!G) return this;
    let Z = G.findIndex((C) => C.listener === d);
    if (Z >= 0) G.splice(Z, 1);
    return this
  }
  once(I, d) {
    return (b4(this, _V, "f")[I] || (b4(this, _V, "f")[I] = [])).push({
      listener: d,
      once: !0
    }), this
  }
  emitted(I) {
    return new Promise((d, G) => {
      if (S7(this, ff, !0, "f"), I !== "error") this.once("error", G);
      this.once(I, d)
    })
  }
  async done() {
    S7(this, ff, !0, "f"), await b4(this, rS, "f")
  }
  get currentMessage() {
    return b4(this, R_, "f")
  }
  async finalMessage() {
    return await this.done(), b4(this, JZ, "m", w71).call(this)
  }
  async finalText() {
    return await this.done(), b4(this, JZ, "m", q50).call(this)
  }
  _emit(I, ...d) {
    if (b4(this, sS, "f")) return;
    if (I === "end") S7(this, sS, !0, "f"), b4(this, Px, "f").call(this);
    let G = b4(this, _V, "f")[I];
    if (G) b4(this, _V, "f")[I] = G.filter((Z) => !Z.once), G.forEach(({
      listener: Z
    }) => Z(...d));
    if (I === "abort") {
      let Z = d[0];
      if (!b4(this, ff, "f") && !G?.length) Promise.reject(Z);
      b4(this, nS, "f").call(this, Z), b4(this, aS, "f").call(this, Z), this._emit("end");
      return
    }
    if (I === "error") {
      let Z = d[0];
      if (!b4(this, ff, "f") && !G?.length) Promise.reject(Z);
      b4(this, nS, "f").call(this, Z), b4(this, aS, "f").call(this, Z), this._emit("end")
    }
  }
  _emitFinal() {
    if (this.receivedMessages.at(-1)) this._emit("finalMessage", b4(this, JZ, "m", w71).call(this))
  }
  async _fromReadableStream(I, d) {
    let G = d?.signal;
    if (G) {
      if (G.aborted) this.controller.abort();
      G.addEventListener("abort", () => this.controller.abort())
    }
    b4(this, JZ, "m", A71).call(this), this._connected(null);
    let Z = BI.fromReadableStream(I, this.controller);
    for await (let C of Z) b4(this, JZ, "m", V71).call(this, C);
    if (Z.controller.signal?.aborted) throw new p8;
    b4(this, JZ, "m", X71).call(this)
  } [(R_ = new WeakMap, iS = new WeakMap, yx = new WeakMap, nS = new WeakMap, rS = new WeakMap, Px = new WeakMap, aS = new WeakMap, _V = new WeakMap, sS = new WeakMap, $x = new WeakMap, ux = new WeakMap, ff = new WeakMap, Tx = new WeakMap, Ox = new WeakMap, B71 = new WeakMap, JZ = new WeakSet, w71 = function I() {
    if (this.receivedMessages.length === 0) throw new Y4("stream ended without producing a Message with role=assistant");
    return this.receivedMessages.at(-1)
  }, q50 = function I() {
    if (this.receivedMessages.length === 0) throw new Y4("stream ended without producing a Message with role=assistant");
    let d = this.receivedMessages.at(-1).content.filter((G) => G.type === "text").map((G) => G.text);
    if (d.length === 0) throw new Y4("stream ended without producing a content block with type=text");
    return d.join(" ")
  }, A71 = function I() {
    if (this.ended) return;
    S7(this, R_, void 0, "f")
  }, V71 = function I(d) {
    if (this.ended) return;
    let G = b4(this, JZ, "m", R50).call(this, d);
    switch (this._emit("streamEvent", d, G), d.type) {
      case "content_block_delta": {
        let Z = G.content.at(-1);
        switch (d.delta.type) {
          case "text_delta": {
            if (Z.type === "text") this._emit("text", d.delta.text, Z.text || "");
            break
          }
          case "citations_delta": {
            if (Z.type === "text") this._emit("citation", d.delta.citation, Z.citations ?? []);
            break
          }
          case "input_json_delta": {
            if (Z.type === "tool_use" && Z.input) this._emit("inputJson", d.delta.partial_json, Z.input);
            break
          }
          case "thinking_delta": {
            if (Z.type === "thinking") this._emit("thinking", d.delta.thinking, Z.thinking);
            break
          }
          case "signature_delta":
            break;
          default:
            v50(d.delta)
        }
        break
      }
      case "message_stop": {
        this._addMessageParam(G), this._addMessage(G, !0);
        break
      }
      case "content_block_stop": {
        this._emit("contentBlock", G.content.at(-1));
        break
      }
      case "message_start": {
        S7(this, R_, G, "f");
        break
      }
      case "content_block_start":
      case "message_delta":
        break
    }
  }, X71 = function I() {
    if (this.ended) throw new Y4("stream has ended, this shouldn't happen");
    let d = b4(this, R_, "f");
    if (!d) throw new Y4("request ended without sending any chunks");
    return S7(this, R_, void 0, "f"), d
  }, R50 = function I(d) {
    let G = b4(this, R_, "f");
    if (d.type === "message_start") {
      if (G) throw new Y4(`Unexpected event order, got ${d.type} before receiving "message_stop"`);
      return d.message
    }
    if (!G) throw new Y4(`Unexpected event order, got ${d.type} before "message_start"`);
    switch (d.type) {
      case "message_stop":
        return G;
      case "message_delta":
        return G.stop_reason = d.delta.stop_reason, G.stop_sequence = d.delta.stop_sequence, G.usage.output_tokens = d.usage.output_tokens, G;
      case "content_block_start":
        return G.content.push(d.content_block), G;
      case "content_block_delta": {
        let Z = G.content.at(d.index);
        switch (d.delta.type) {
          case "text_delta": {
            if (Z?.type === "text") Z.text += d.delta.text;
            break
          }
          case "citations_delta": {
            if (Z?.type === "text") Z.citations ?? (Z.citations = []), Z.citations.push(d.delta.citation);
            break
          }
          case "input_json_delta": {
            if (Z?.type === "tool_use") {
              let C = Z[U50] || "";
              if (C += d.delta.partial_json, Object.defineProperty(Z, U50, {
                  value: C,
                  enumerable: !1,
                  writable: !0
                }), C) Z.input = Lx(C)
            }
            break
          }
          case "thinking_delta": {
            if (Z?.type === "thinking") Z.thinking += d.delta.thinking;
            break
          }
          case "signature_delta": {
            if (Z?.type === "thinking") Z.signature += d.delta.signature;
            break
          }
          default:
            v50(d.delta)
        }
        return G
      }
      case "content_block_stop":
        return G
    }
  }, Symbol.asyncIterator)]() {
    let I = [],
      d = [],
      G = !1;
    return this.on("streamEvent", (Z) => {
      let C = d.shift();
      if (C) C.resolve(Z);
      else I.push(Z)
    }), this.on("end", () => {
      G = !0;
      for (let Z of d) Z.resolve(void 0);
      d.length = 0
    }), this.on("abort", (Z) => {
      G = !0;
      for (let C of d) C.reject(Z);
      d.length = 0
    }), this.on("error", (Z) => {
      G = !0;
      for (let C of d) C.reject(Z);
      d.length = 0
    }), {
      next: async () => {
        if (!I.length) {
          if (G) return {
            value: void 0,
            done: !0
          };
          return new Promise((C, W) => d.push({
            resolve: C,
            reject: W
          })).then((C) => C ? {
            value: C,
            done: !1
          } : {
            value: void 0,
            done: !0
          })
        }
        return {
          value: I.shift(),
          done: !1
        }
      },
      return: async () => {
        return this.abort(), {
          value: void 0,
          done: !0
        }
      }
    }
  }
  toReadableStream() {
    return new BI(this[Symbol.asyncIterator].bind(this), this.controller).toReadableStream()
  }
}
// @from(Start 5913123, End 5913141)
function v50(I) {}
// @from(Start 5913146, End 5913497)
E50 = {
  "claude-1.3": "November 6th, 2024",
  "claude-1.3-100k": "November 6th, 2024",
  "claude-instant-1.1": "November 6th, 2024",
  "claude-instant-1.1-100k": "November 6th, 2024",
  "claude-instant-1.2": "November 6th, 2024",
  "claude-3-sonnet-20240229": "July 21st, 2025",
  "claude-2.1": "July 21st, 2025",
  "claude-2.0": "July 21st, 2025"
}
// @from(Start 5913499, End 5914616)
class lg extends i8 {
  constructor() {
    super(...arguments);
    this.batches = new zf(this._client)
  }
  create(I, d) {
    let {
      betas: G,
      ...Z
    } = I;
    if (Z.model in E50) console.warn(`The model '${Z.model}' is deprecated and will reach end-of-life on ${E50[Z.model]}
Please migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`);
    return this._client.post("/v1/messages?beta=true", {
      body: Z,
      timeout: this._client._options.timeout ?? 600000,
      ...d,
      headers: {
        ...G?.toString() != null ? {
          "anthropic-beta": G?.toString()
        } : void 0,
        ...d?.headers
      },
      stream: I.stream ?? !1
    })
  }
  stream(I, d) {
    return oS.createMessage(this, I, d)
  }
  countTokens(I, d) {
    let {
      betas: G,
      ...Z
    } = I;
    return this._client.post("/v1/messages/count_tokens?beta=true", {
      body: Z,
      ...d,
      headers: {
        "anthropic-beta": [...G ?? [], "token-counting-2024-11-01"].toString(),
        ...d?.headers
      }
    })
  }
}
// @from(Start 5914666, End 5914813)
class IG extends i8 {
  constructor() {
    super(...arguments);
    this.models = new Kf(this._client), this.messages = new lg(this._client)
  }
}
// @from(Start 5914876, End 5915086)
class U_ extends i8 {
  create(I, d) {
    return this._client.post("/v1/complete", {
      body: I,
      timeout: this._client._options.timeout ?? 600000,
      ...d,
      stream: I.stream ?? !1
    })
  }
}
// @from(Start 5915087, End 5916072)
class qf extends i8 {
  create(I, d) {
    return this._client.post("/v1/messages/batches", {
      body: I,
      ...d
    })
  }
  retrieve(I, d) {
    return this._client.get(`/v1/messages/batches/${I}`, d)
  }
  list(I = {}, d) {
    if (gZ(I)) return this.list({}, I);
    return this._client.getAPIList("/v1/messages/batches", eS, {
      query: I,
      ...d
    })
  }
  delete(I, d) {
    return this._client.delete(`/v1/messages/batches/${I}`, d)
  }
  cancel(I, d) {
    return this._client.post(`/v1/messages/batches/${I}/cancel`, d)
  }
  async results(I, d) {
    let G = await this.retrieve(I);
    if (!G.results_url) throw new Y4(`No batch \`results_url\`; Has it finished processing? ${G.processing_status} - ${G.id}`);
    return this._client.get(G.results_url, {
      ...d,
      headers: {
        Accept: "application/binary",
        ...d?.headers
      },
      __binaryResponse: !0
    })._thenUnwrap((Z, C) => Nf.fromResponse(C.response, C.controller))
  }
}
// @from(Start 5916073, End 5916095)
class eS extends YV {}
// @from(Start 5916128, End 5916559)
L7 = function(I, d, G, Z, C) {
    if (Z === "m") throw new TypeError("Private method is not writable");
    if (Z === "a" && !C) throw new TypeError("Private accessor was defined without a setter");
    if (typeof d === "function" ? I !== d || !C : !d.has(I)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return Z === "a" ? C.call(I, G) : C ? C.value = G : d.set(I, G), G
  }
// @from(Start 5916563, End 5916921)
h4 = function(I, d, G, Z) {
    if (G === "a" && !Z) throw new TypeError("Private accessor was defined without a getter");
    if (typeof d === "function" ? I !== d || !Z : !d.has(I)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return G === "m" ? Z : G === "a" ? Z.call(I) : Z ? Z.value : d.get(I)
  }
// @from(Start 5916925, End 5916927)
KZ
// @from(Start 5916929, End 5916931)
v_
// @from(Start 5916933, End 5916935)
tS
// @from(Start 5916937, End 5916939)
mx
// @from(Start 5916941, End 5916943)
IL
// @from(Start 5916945, End 5916947)
dL
// @from(Start 5916949, End 5916951)
lx
// @from(Start 5916953, End 5916955)
GL
// @from(Start 5916957, End 5916959)
DV
// @from(Start 5916961, End 5916963)
ZL
// @from(Start 5916965, End 5916967)
bx
// @from(Start 5916969, End 5916971)
hx
// @from(Start 5916973, End 5916975)
Rf
// @from(Start 5916977, End 5916979)
jx
// @from(Start 5916981, End 5916983)
kx
// @from(Start 5916985, End 5916988)
Y71
// @from(Start 5916990, End 5916993)
M50
// @from(Start 5916995, End 5916998)
_71
// @from(Start 5917000, End 5917003)
D71
// @from(Start 5917005, End 5917008)
H71
// @from(Start 5917010, End 5917013)
F71
// @from(Start 5917015, End 5917018)
S50
// @from(Start 5917020, End 5917038)
L50 = "__json_buf"
// @from(Start 5917040, End 5928008)
class CL {
  constructor() {
    KZ.add(this), this.messages = [], this.receivedMessages = [], v_.set(this, void 0), this.controller = new AbortController, tS.set(this, void 0), mx.set(this, () => {}), IL.set(this, () => {}), dL.set(this, void 0), lx.set(this, () => {}), GL.set(this, () => {}), DV.set(this, {}), ZL.set(this, !1), bx.set(this, !1), hx.set(this, !1), Rf.set(this, !1), jx.set(this, void 0), kx.set(this, void 0), _71.set(this, (I) => {
      if (L7(this, bx, !0, "f"), I instanceof Error && I.name === "AbortError") I = new p8;
      if (I instanceof p8) return L7(this, hx, !0, "f"), this._emit("abort", I);
      if (I instanceof Y4) return this._emit("error", I);
      if (I instanceof Error) {
        let d = new Y4(I.message);
        return d.cause = I, this._emit("error", d)
      }
      return this._emit("error", new Y4(String(I)))
    }), L7(this, tS, new Promise((I, d) => {
      L7(this, mx, I, "f"), L7(this, IL, d, "f")
    }), "f"), L7(this, dL, new Promise((I, d) => {
      L7(this, lx, I, "f"), L7(this, GL, d, "f")
    }), "f"), h4(this, tS, "f").catch(() => {}), h4(this, dL, "f").catch(() => {})
  }
  get response() {
    return h4(this, jx, "f")
  }
  get request_id() {
    return h4(this, kx, "f")
  }
  async withResponse() {
    let I = await h4(this, tS, "f");
    if (!I) throw new Error("Could not resolve a `Response` object");
    return {
      data: this,
      response: I,
      request_id: I.headers.get("request-id")
    }
  }
  static fromReadableStream(I) {
    let d = new CL;
    return d._run(() => d._fromReadableStream(I)), d
  }
  static createMessage(I, d, G) {
    let Z = new CL;
    for (let C of d.messages) Z._addMessageParam(C);
    return Z._run(() => Z._createMessage(I, {
      ...d,
      stream: !0
    }, {
      ...G,
      headers: {
        ...G?.headers,
        "X-Stainless-Helper-Method": "stream"
      }
    })), Z
  }
  _run(I) {
    I().then(() => {
      this._emitFinal(), this._emit("end")
    }, h4(this, _71, "f"))
  }
  _addMessageParam(I) {
    this.messages.push(I)
  }
  _addMessage(I, d = !0) {
    if (this.receivedMessages.push(I), d) this._emit("message", I)
  }
  async _createMessage(I, d, G) {
    let Z = G?.signal;
    if (Z) {
      if (Z.aborted) this.controller.abort();
      Z.addEventListener("abort", () => this.controller.abort())
    }
    h4(this, KZ, "m", D71).call(this);
    let {
      response: C,
      data: W
    } = await I.create({
      ...d,
      stream: !0
    }, {
      ...G,
      signal: this.controller.signal
    }).withResponse();
    this._connected(C);
    for await (let w of W) h4(this, KZ, "m", H71).call(this, w);
    if (W.controller.signal?.aborted) throw new p8;
    h4(this, KZ, "m", F71).call(this)
  }
  _connected(I) {
    if (this.ended) return;
    L7(this, jx, I, "f"), L7(this, kx, I?.headers.get("request-id"), "f"), h4(this, mx, "f").call(this, I), this._emit("connect")
  }
  get ended() {
    return h4(this, ZL, "f")
  }
  get errored() {
    return h4(this, bx, "f")
  }
  get aborted() {
    return h4(this, hx, "f")
  }
  abort() {
    this.controller.abort()
  }
  on(I, d) {
    return (h4(this, DV, "f")[I] || (h4(this, DV, "f")[I] = [])).push({
      listener: d
    }), this
  }
  off(I, d) {
    let G = h4(this, DV, "f")[I];
    if (!G) return this;
    let Z = G.findIndex((C) => C.listener === d);
    if (Z >= 0) G.splice(Z, 1);
    return this
  }
  once(I, d) {
    return (h4(this, DV, "f")[I] || (h4(this, DV, "f")[I] = [])).push({
      listener: d,
      once: !0
    }), this
  }
  emitted(I) {
    return new Promise((d, G) => {
      if (L7(this, Rf, !0, "f"), I !== "error") this.once("error", G);
      this.once(I, d)
    })
  }
  async done() {
    L7(this, Rf, !0, "f"), await h4(this, dL, "f")
  }
  get currentMessage() {
    return h4(this, v_, "f")
  }
  async finalMessage() {
    return await this.done(), h4(this, KZ, "m", Y71).call(this)
  }
  async finalText() {
    return await this.done(), h4(this, KZ, "m", M50).call(this)
  }
  _emit(I, ...d) {
    if (h4(this, ZL, "f")) return;
    if (I === "end") L7(this, ZL, !0, "f"), h4(this, lx, "f").call(this);
    let G = h4(this, DV, "f")[I];
    if (G) h4(this, DV, "f")[I] = G.filter((Z) => !Z.once), G.forEach(({
      listener: Z
    }) => Z(...d));
    if (I === "abort") {
      let Z = d[0];
      if (!h4(this, Rf, "f") && !G?.length) Promise.reject(Z);
      h4(this, IL, "f").call(this, Z), h4(this, GL, "f").call(this, Z), this._emit("end");
      return
    }
    if (I === "error") {
      let Z = d[0];
      if (!h4(this, Rf, "f") && !G?.length) Promise.reject(Z);
      h4(this, IL, "f").call(this, Z), h4(this, GL, "f").call(this, Z), this._emit("end")
    }
  }
  _emitFinal() {
    if (this.receivedMessages.at(-1)) this._emit("finalMessage", h4(this, KZ, "m", Y71).call(this))
  }
  async _fromReadableStream(I, d) {
    let G = d?.signal;
    if (G) {
      if (G.aborted) this.controller.abort();
      G.addEventListener("abort", () => this.controller.abort())
    }
    h4(this, KZ, "m", D71).call(this), this._connected(null);
    let Z = BI.fromReadableStream(I, this.controller);
    for await (let C of Z) h4(this, KZ, "m", H71).call(this, C);
    if (Z.controller.signal?.aborted) throw new p8;
    h4(this, KZ, "m", F71).call(this)
  } [(v_ = new WeakMap, tS = new WeakMap, mx = new WeakMap, IL = new WeakMap, dL = new WeakMap, lx = new WeakMap, GL = new WeakMap, DV = new WeakMap, ZL = new WeakMap, bx = new WeakMap, hx = new WeakMap, Rf = new WeakMap, jx = new WeakMap, kx = new WeakMap, _71 = new WeakMap, KZ = new WeakSet, Y71 = function I() {
    if (this.receivedMessages.length === 0) throw new Y4("stream ended without producing a Message with role=assistant");
    return this.receivedMessages.at(-1)
  }, M50 = function I() {
    if (this.receivedMessages.length === 0) throw new Y4("stream ended without producing a Message with role=assistant");
    let d = this.receivedMessages.at(-1).content.filter((G) => G.type === "text").map((G) => G.text);
    if (d.length === 0) throw new Y4("stream ended without producing a content block with type=text");
    return d.join(" ")
  }, D71 = function I() {
    if (this.ended) return;
    L7(this, v_, void 0, "f")
  }, H71 = function I(d) {
    if (this.ended) return;
    let G = h4(this, KZ, "m", S50).call(this, d);
    switch (this._emit("streamEvent", d, G), d.type) {
      case "content_block_delta": {
        let Z = G.content.at(-1);
        switch (d.delta.type) {
          case "text_delta": {
            if (Z.type === "text") this._emit("text", d.delta.text, Z.text || "");
            break
          }
          case "citations_delta": {
            if (Z.type === "text") this._emit("citation", d.delta.citation, Z.citations ?? []);
            break
          }
          case "input_json_delta": {
            if (Z.type === "tool_use" && Z.input) this._emit("inputJson", d.delta.partial_json, Z.input);
            break
          }
          case "thinking_delta": {
            if (Z.type === "thinking") this._emit("thinking", d.delta.thinking, Z.thinking);
            break
          }
          case "signature_delta":
            break;
          default:
            y50(d.delta)
        }
        break
      }
      case "message_stop": {
        this._addMessageParam(G), this._addMessage(G, !0);
        break
      }
      case "content_block_stop": {
        this._emit("contentBlock", G.content.at(-1));
        break
      }
      case "message_start": {
        L7(this, v_, G, "f");
        break
      }
      case "content_block_start":
      case "message_delta":
        break
    }
  }, F71 = function I() {
    if (this.ended) throw new Y4("stream has ended, this shouldn't happen");
    let d = h4(this, v_, "f");
    if (!d) throw new Y4("request ended without sending any chunks");
    return L7(this, v_, void 0, "f"), d
  }, S50 = function I(d) {
    let G = h4(this, v_, "f");
    if (d.type === "message_start") {
      if (G) throw new Y4(`Unexpected event order, got ${d.type} before receiving "message_stop"`);
      return d.message
    }
    if (!G) throw new Y4(`Unexpected event order, got ${d.type} before "message_start"`);
    switch (d.type) {
      case "message_stop":
        return G;
      case "message_delta":
        return G.stop_reason = d.delta.stop_reason, G.stop_sequence = d.delta.stop_sequence, G.usage.output_tokens = d.usage.output_tokens, G;
      case "content_block_start":
        return G.content.push(d.content_block), G;
      case "content_block_delta": {
        let Z = G.content.at(d.index);
        switch (d.delta.type) {
          case "text_delta": {
            if (Z?.type === "text") Z.text += d.delta.text;
            break
          }
          case "citations_delta": {
            if (Z?.type === "text") Z.citations ?? (Z.citations = []), Z.citations.push(d.delta.citation);
            break
          }
          case "input_json_delta": {
            if (Z?.type === "tool_use") {
              let C = Z[L50] || "";
              if (C += d.delta.partial_json, Object.defineProperty(Z, L50, {
                  value: C,
                  enumerable: !1,
                  writable: !0
                }), C) Z.input = Lx(C)
            }
            break
          }
          case "thinking_delta": {
            if (Z?.type === "thinking") Z.thinking += d.delta.thinking;
            break
          }
          case "signature_delta": {
            if (Z?.type === "thinking") Z.signature += d.delta.signature;
            break
          }
          default:
            y50(d.delta)
        }
        return G
      }
      case "content_block_stop":
        return G
    }
  }, Symbol.asyncIterator)]() {
    let I = [],
      d = [],
      G = !1;
    return this.on("streamEvent", (Z) => {
      let C = d.shift();
      if (C) C.resolve(Z);
      else I.push(Z)
    }), this.on("end", () => {
      G = !0;
      for (let Z of d) Z.resolve(void 0);
      d.length = 0
    }), this.on("abort", (Z) => {
      G = !0;
      for (let C of d) C.reject(Z);
      d.length = 0
    }), this.on("error", (Z) => {
      G = !0;
      for (let C of d) C.reject(Z);
      d.length = 0
    }), {
      next: async () => {
        if (!I.length) {
          if (G) return {
            value: void 0,
            done: !0
          };
          return new Promise((C, W) => d.push({
            resolve: C,
            reject: W
          })).then((C) => C ? {
            value: C,
            done: !1
          } : {
            value: void 0,
            done: !0
          })
        }
        return {
          value: I.shift(),
          done: !1
        }
      },
      return: async () => {
        return this.abort(), {
          value: void 0,
          done: !0
        }
      }
    }
  }
  toReadableStream() {
    return new BI(this[Symbol.asyncIterator].bind(this), this.controller).toReadableStream()
  }
}
// @from(Start 5928010, End 5928028)
function y50(I) {}
// @from(Start 5928029, End 5928755)
class NZ extends i8 {
  constructor() {
    super(...arguments);
    this.batches = new qf(this._client)
  }
  create(I, d) {
    if (I.model in P50) console.warn(`The model '${I.model}' is deprecated and will reach end-of-life on ${P50[I.model]}
Please migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`);
    return this._client.post("/v1/messages", {
      body: I,
      timeout: this._client._options.timeout ?? 600000,
      ...d,
      stream: I.stream ?? !1
    })
  }
  stream(I, d) {
    return CL.createMessage(this, I, d)
  }
  countTokens(I, d) {
    return this._client.post("/v1/messages/count_tokens", {
      body: I,
      ...d
    })
  }
}
// @from(Start 5928760, End 5929111)
P50 = {
  "claude-1.3": "November 6th, 2024",
  "claude-1.3-100k": "November 6th, 2024",
  "claude-instant-1.1": "November 6th, 2024",
  "claude-instant-1.1-100k": "November 6th, 2024",
  "claude-instant-1.2": "November 6th, 2024",
  "claude-3-sonnet-20240229": "July 21st, 2025",
  "claude-2.1": "July 21st, 2025",
  "claude-2.0": "July 21st, 2025"
}
// @from(Start 5929158, End 5929407)
class bg extends i8 {
  retrieve(I, d) {
    return this._client.get(`/v1/models/${I}`, d)
  }
  list(I = {}, d) {
    if (gZ(I)) return this.list({}, I);
    return this._client.getAPIList("/v1/models", Uf, {
      query: I,
      ...d
    })
  }
}
// @from(Start 5929408, End 5929430)
class Uf extends YV {}
// @from(Start 5929459, End 5929462)
$50
// @from(Start 5929464, End 5931723)
class q9 extends mg {
  constructor({
    baseURL: I = lC("ANTHROPIC_BASE_URL"),
    apiKey: d = lC("ANTHROPIC_API_KEY") ?? null,
    authToken: G = lC("ANTHROPIC_AUTH_TOKEN") ?? null,
    ...Z
  } = {}) {
    let C = {
      apiKey: d,
      authToken: G,
      ...Z,
      baseURL: I || "https://api.anthropic.com"
    };
    if (!C.dangerouslyAllowBrowser && f50()) throw new Y4(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new Anthropic({ apiKey, dangerouslyAllowBrowser: true });
`);
    super({
      baseURL: C.baseURL,
      timeout: C.timeout ?? 600000,
      httpAgent: C.httpAgent,
      maxRetries: C.maxRetries,
      fetch: C.fetch
    });
    this.completions = new U_(this), this.messages = new NZ(this), this.models = new bg(this), this.beta = new IG(this), this._options = C, this.apiKey = d, this.authToken = G
  }
  defaultQuery() {
    return this._options.defaultQuery
  }
  defaultHeaders(I) {
    return {
      ...super.defaultHeaders(I),
      ...this._options.dangerouslyAllowBrowser ? {
        "anthropic-dangerous-direct-browser-access": "true"
      } : void 0,
      "anthropic-version": "2023-06-01",
      ...this._options.defaultHeaders
    }
  }
  validateHeaders(I, d) {
    if (this.apiKey && I["x-api-key"]) return;
    if (d["x-api-key"] === null) return;
    if (this.authToken && I.authorization) return;
    if (d.authorization === null) return;
    throw new Error('Could not resolve authentication method. Expected either apiKey or authToken to be set. Or for one of the "X-Api-Key" or "Authorization" headers to be explicitly omitted')
  }
  authHeaders(I) {
    let d = this.apiKeyAuth(I),
      G = this.bearerAuth(I);
    if (d != null && !xS(d)) return d;
    if (G != null && !xS(G)) return G;
    return {}
  }
  apiKeyAuth(I) {
    if (this.apiKey == null) return {};
    return {
      "X-Api-Key": this.apiKey
    }
  }
  bearerAuth(I) {
    if (this.authToken == null) return {};
    return {
      Authorization: `Bearer ${this.authToken}`
    }
  }
}
// @from(Start 5932330, End 5932338)
J71 = q9
// @from(Start 5932344, End 5932362)
ak0 = J1(T90(), 1)
// @from(Start 5932366, End 5932384)
sk0 = J1(Pj0(), 1)
// @from(Start 5932388, End 5932405)
ok0 = J1(t8(), 1)
// @from(Start 5932409, End 5932427)
ek0 = J1(rk0(), 1)
// @from(Start 5932459, End 5933409)
tk0 = async (I, d) => {
  cJ5(I.method, "Expected request method property to be set");
  let G = sk0.fromNodeProviderChain(),
    Z = await pJ5(() => {
      if (d.awsAccessKey) process.env.AWS_ACCESS_KEY_ID = d.awsAccessKey;
      if (d.awsSecretKey) process.env.AWS_SECRET_ACCESS_KEY = d.awsSecretKey;
      if (d.awsSessionToken) process.env.AWS_SESSION_TOKEN = d.awsSessionToken
    }, () => G()),
    C = new ak0.SignatureV4({
      service: "bedrock",
      region: d.regionName,
      credentials: Z,
      sha256: ek0.Sha256
    }),
    W = new URL(d.url),
    w = !I.headers ? {} : (Symbol.iterator in I.headers) ? Object.fromEntries(Array.from(I.headers).map((V) => [...V])) : {
      ...I.headers
    };
  delete w.connection, w.host = W.hostname;
  let B = new ok0.HttpRequest({
    method: I.method.toUpperCase(),
    protocol: W.protocol,
    path: W.pathname,
    headers: w,
    body: I.body
  });
  return (await C.sign(B)).headers
}
// @from(Start 5933411, End 5933544)
pJ5 = async (I, d) => {
  let G = {
    ...process.env
  };
  try {
    return I(), await d()
  } finally {
    process.env = G
  }
}
// @from(Start 5933550, End 5933568)
s82 = J1(UV1(), 1)
// @from(Start 5933572, End 5933588)
Sr = J1(fD(), 1)
// @from(Start 5933592, End 5933610)
o82 = J1(ac0(), 1)
// @from(Start 5933616, End 5933632)
P9 = J1(h2(), 1)
// @from(Start 5933636, End 5933653)
xD = J1(n82(), 1)
// @from(Start 6505574, End 6513298)
async function YX9(I, d) {
  let G = new Pq2,
    Z = {
      ...d,
      exitOnCtrlC: !0
    },
    C = await gQ2(),
    W = C.filter((V) => !V.isHidden).map((V) => `/${V.name} - ${V.description}`).join(`
`);
  G.name("claude").description(`${K4} - starts an interactive session by default, use -p/--print for non-interactive output

Slash commands available during an interactive session:
${W}`).argument("[prompt]", "Your prompt", String).option("-c, --cwd <cwd>", "The current working directory", String, HU()).option("-d, --debug", "Enable debug mode", () => !0).option("--verbose", "Override verbose mode setting from config", () => !0).option("-ea, --enable-architect", "Enable the Architect tool", () => !0).option("-p, --print", "Print response and exit (useful for pipes)", () => !0).option("--dangerously-skip-permissions", "Skip all permission checks. Only works in Docker containers with no internet access. Will crash otherwise.", () => !0).action(async (V, {
    cwd: X,
    debug: _,
    verbose: F,
    enableArchitect: g,
    print: J,
    dangerouslySkipPermissions: K
  }) => {
    await AX9(K, J), I0("tengu_init", {
      entrypoint: "claude",
      hasInitialPrompt: Boolean(V).toString(),
      hasStdin: Boolean(I).toString(),
      enableArchitect: g?.toString() ?? "false",
      verbose: F?.toString() ?? "false",
      debug: _?.toString() ?? "false",
      print: J?.toString() ?? "false"
    }), await FU(X, K), Hz2();
    let [Q, E] = await Promise.all([to(g ?? I5().enableArchitectTool), gK1()]);
    VX9();
    let S = [V, I].filter(Boolean).join(`
`);
    if (J) {
      if (!S) console.error("Error: Input must be provided either through stdin or as a prompt argument when using --print"), process.exit(1);
      vH(S);
      let {
        resultText: P
      } = await $q2({
        commands: C,
        hasPermissionsToUseTool: UH,
        messageLogName: ll(new Date),
        prompt: S,
        cwd: X,
        tools: Q,
        dangerouslySkipPermissions: K
      });
      console.log(P), process.exit(0)
    } else {
      let P = await t21();
      wZ(gU.default.createElement(kJ1, {
        commands: C,
        debug: _,
        initialPrompt: S,
        messageLogName: ll(new Date),
        shouldShowPromptInput: !0,
        verbose: F,
        tools: Q,
        dangerouslySkipPermissions: K,
        mcpClients: E,
        isDefaultModel: P
      }), d)
    }
  }).version({
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://docs.anthropic.com/s/claude-code",
    VERSION: "0.2.9"
  }.VERSION, "-v, --version");
  let w = G.command("config").description("Manage configuration (eg. claude config set -g theme dark)");
  w.command("get <key>").description("Get a config value").option("-c, --cwd <cwd>", "The current working directory", String, HU()).option("-g, --global", "Use global config").action(async (V, {
    cwd: X,
    global: _
  }) => {
    await FU(X, !1), console.log(Rl1(V, _ ?? !1)), process.exit(0)
  }), w.command("set <key> <value>").description("Set a config value").option("-c, --cwd <cwd>", "The current working directory", String, HU()).option("-g, --global", "Use global config").action(async (V, X, {
    cwd: _,
    global: F
  }) => {
    await FU(_, !1), Ul1(V, X, F ?? !1), console.log(`Set ${V} to ${X}`), process.exit(0)
  }), w.command("remove <key>").description("Remove a config value").option("-c, --cwd <cwd>", "The current working directory", String, HU()).option("-g, --global", "Use global config").action(async (V, {
    cwd: X,
    global: _
  }) => {
    await FU(X, !1), vl1(V, _ ?? !1), console.log(`Removed ${V}`), process.exit(0)
  }), w.command("list").description("List all config values").option("-c, --cwd <cwd>", "The current working directory", String, HU()).option("-g, --global", "Use global config", !1).action(async ({
    cwd: V,
    global: X
  }) => {
    await FU(V, !1), console.log(JSON.stringify(El1(X ?? !1), null, 2)), process.exit(0)
  });
  let B = G.command("approved-tools").description("Manage approved tools");
  B.command("list").description("List all approved tools").action(async () => {
    let V = IR2(R0());
    console.log(V), process.exit(0)
  }), B.command("remove <tool>").description("Remove a tool from the list of approved tools").action(async (V) => {
    let X = dR2(V);
    I0("tengu_approved_tool_remove", {
      tool: V,
      success: String(X.success)
    }), console.log(X.message), process.exit(X.success ? 0 : 1)
  });
  let A = G.command("mcp").description("Configure and manage MCP servers");
  return A.command("serve").description(`Start the ${K4} MCP server`).action(async () => {
    let V = G.opts().cwd ?? HU();
    if (I0("tengu_mcp_start", {
        providedCwd: V
      }), !wX9(V)) console.error(`Error: Directory ${V} does not exist`), process.exit(1);
    try {
      await FU(V, !1), await sq2(V)
    } catch (X) {
      console.error("Error: Failed to start MCP server:", X), process.exit(1)
    }
  }), A.command("add <name> <command> [args...]").description("Add a stdio server").option("-s, --scope <scope>", "Configuration scope (project or global)", "project").option("-e, --env <env...>", "Set environment variables (e.g. -e KEY=value)").action(async (V, X, _, F) => {
    try {
      let g = FK1(F.scope);
      I0("tengu_mcp_add", {
        name: V,
        type: "stdio",
        scope: g
      });
      let J = BQ2(F.env);
      AQ2(V, {
        type: "stdio",
        command: X,
        args: _ || [],
        env: J
      }, g), console.log(`Added stdio MCP server ${V} with command: ${X} ${(_||[]).join(" ")} to ${g} config`), process.exit(0)
    } catch (g) {
      console.error(g.message), process.exit(1)
    }
  }), A.command("remove <name>").description("Remove an MCP server").option("-s, --scope <scope>", "Configuration scope (project, global, or mcprc)", "project").action(async (V, X) => {
    try {
      let _ = FK1(X.scope);
      I0("tengu_mcp_delete", {
        name: V,
        scope: _
      }), VQ2(V, _), console.log(`Removed MCP server ${V} from ${_} config`), process.exit(0)
    } catch (_) {
      console.error(_.message), process.exit(1)
    }
  }), A.command("list").description("List configured MCP servers").action(() => {
    I0("tengu_mcp_list", {});
    let V = XQ2();
    if (Object.keys(V).length === 0) console.log("No MCP servers configured. Use `claude mcp add` to add a server.");
    else
      for (let [X, _] of Object.entries(V))
        if (_.type === "sse") console.log(`${X}: ${_.url} (SSE)`);
        else console.log(`${X}: ${_.command} ${_.args.join(" ")}`);
    process.exit(0)
  }), A.command("get <name>").description("Get details about an MCP server").action((V) => {
    I0("tengu_mcp_get", {
      name: V
    });
    let X = YQ2(V);
    if (!X) console.error(`No MCP server found with name: ${V}`), process.exit(1);
    if (console.log(`${V}:`), console.log(`  Scope: ${X.scope}`), X.type === "sse") console.log("  Type: sse"), console.log(`  URL: ${X.url}`);
    else if (console.log("  Type: stdio"), console.log(`  Command: ${X.command}`), console.log(`  Args: ${X.args.join(" ")}`), X.env) {
      console.log("  Environment:");
      for (let [_, F] of Object.entries(X.env)) console.log(`    ${_}=${F}`)
    }
    process.exit(0)
  }), G.command("doctor").description("Check the health of your Claude Code auto-updater").action(async () => {
    I0("tengu_doctor_command", {}), await new Promise((V) => {
      wZ(gU.default.createElement(Au, {
        onDone: () => V(),
        doctorMode: !0
      }))
    }), process.exit(0)
  }), await G.parseAsync(process.argv), G
}
// @from(Start 6513299, End 6513431)
async function _X9() {
  if (process.stdin.isTTY) return "";
  let I = "";
  for await (let d of process.stdin) I += d;
  return I
}
// @from(Start 6513549, End 6513684)
function DX9() {
  (process.stderr.isTTY ? process.stderr : process.stdout.isTTY ? process.stdout : void 0)?.write(`\x1B[?25h${R51}`)
}
// @from(Start 6513692, End 6513731)
export {
  BX9 as completeOnboarding
};