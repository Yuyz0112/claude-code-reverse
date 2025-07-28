
// @from(Start 6413835, End 6416367)
function eK1({
  debug: I,
  isUpdating: d,
  onChangeIsUpdating: G,
  onAutoUpdaterResult: Z,
  autoUpdaterResult: C
}) {
  let W = r1(),
    [w, B] = ao.useState({}),
    A = J9.useCallback(async () => {
      if (d) return;
      let V = {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://docs.anthropic.com/s/claude-code",
          VERSION: "0.2.9"
        }.VERSION,
        X = await zz2(),
        _ = await ql1();
      if (B({
          global: V,
          latest: X
        }), !_ && V && X && !af2.gte(V, X)) {
        let F = Date.now();
        G(!0);
        let g = await rs();
        if (G(!1), g === "success") I0("tengu_auto_updater_success", {
          fromVersion: V,
          toVersion: X,
          durationMs: String(Date.now() - F)
        });
        else I0("tengu_auto_updater_fail", {
          fromVersion: V,
          attemptedVersion: X,
          status: g,
          durationMs: String(Date.now() - F)
        });
        Z({
          version: X,
          status: g
        })
      }
    }, [Z]);
  if (ao.useEffect(() => {
      A()
    }, [A]), Uo(A, 1800000), I) return J9.createElement(p, {
    flexDirection: "row"
  }, J9.createElement(u, {
    dimColor: !0
  }, "globalVersion: ", w.global, " · latestVersion:", " ", w.latest));
  if (!C?.version && (!w.global || !w.latest)) return null;
  if (!C?.version && !d) return null;
  return J9.createElement(p, {
    flexDirection: "row"
  }, I && J9.createElement(u, {
    dimColor: !0
  }, "globalVersion: ", w.global, " · latestVersion:", " ", w.latest), d && J9.createElement(J9.Fragment, null, J9.createElement(p, null, J9.createElement(u, {
    color: W.secondaryText,
    dimColor: !0,
    wrap: "end"
  }, "Auto-updating to v", w.latest, "…"))), C?.status === "success" && C?.version ? J9.createElement(u, {
    color: W.success
  }, "✓ Update installed · Restart to apply") : null, (C?.status === "install_failed" || C?.status === "no_permissions") && J9.createElement(u, {
    color: W.error
  }, "✗ Auto-update failed · Try ", J9.createElement(u, {
    bold: !0
  }, "claude doctor"), " or", " ", J9.createElement(u, {
    bold: !0
  }, "npm i -g ", {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://docs.anthropic.com/s/claude-code",
    VERSION: "0.2.9"
  }.PACKAGE_URL)))
}
// @from(Start 6416372, End 6416388)
pu = J1(u1(), 1)
// @from(Start 6416394, End 6416406)
tK1 = 190000
// @from(Start 6416410, End 6416425)
IN1 = tK1 * 0.6
// @from(Start 6416429, End 6416444)
uA9 = tK1 * 0.8
// @from(Start 6416447, End 6416788)
function dN1({
  tokenUsage: I
}) {
  let d = r1();
  if (I < IN1) return null;
  let G = I >= uA9;
  return pu.createElement(p, {
    flexDirection: "row"
  }, pu.createElement(u, {
    color: G ? d.error : d.warning
  }, "Context low (", Math.max(0, 100 - Math.round(I / tK1 * 100)), "% remaining) · Run /compact to compact & continue"))
}
// @from(Start 6416790, End 6416881)
function sf2(I) {
  return `[Pasted text +${(I.match(/\r\n|\r|\n/g)||[]).length} lines] `
}
// @from(Start 6416883, End 6423729)
function TA9({
  commands: I,
  forkNumber: d,
  messageLogName: G,
  isDisabled: Z,
  isLoading: C,
  onQuery: W,
  debug: w,
  verbose: B,
  messages: A,
  setToolJSX: V,
  onAutoUpdaterResult: X,
  autoUpdaterResult: _,
  tools: F,
  input: g,
  onInputChange: J,
  mode: K,
  onModeChange: Q,
  submitCount: E,
  onSubmitCountChange: S,
  setIsLoading: P,
  setAbortController: $,
  onShowMessageSelector: h,
  setForkConvoWithMessagesOnTheNextRender: O,
  readFileTimestamps: T
}) {
  let [V1, c] = V7.useState(!1), [c1, o1] = V7.useState({
    show: !1
  }), [a1, f1] = V7.useState({
    show: !1
  }), [r, A1] = V7.useState(null), [m1, T1] = V7.useState(""), [e1, F0] = V7.useState(g.length), [P0, B0] = V7.useState(null);
  V7.useEffect(() => {
    no().then((W1) => {
      T1(`Try "${mF(W1)}"`)
    })
  }, []);
  let {
    columns: a0
  } = G9(), e = V7.useMemo(() => Math.max(...I.map((W1) => W1.userFacingName().length)) + 5, [I]), {
    suggestions: G0,
    selectedSuggestion: H1,
    updateSuggestions: j1,
    clearSuggestions: i1
  } = nf2({
    commands: I,
    onInputChange: J,
    onSubmit: F1,
    setCursorOffset: F0
  }), E0 = V7.useCallback((W1) => {
    if (W1.startsWith("!")) {
      Q("bash");
      return
    }
    j1(W1), J(W1)
  }, [Q, J, j1]), {
    resetHistory: k,
    onHistoryUp: a,
    onHistoryDown: Z1
  } = if2((W1, U1) => {
    E0(W1), Q(U1)
  }, g), Q1 = () => {
    if (G0.length <= 1) a()
  }, N1 = () => {
    if (G0.length <= 1) Z1()
  };
  async function F1(W1, U1 = !1) {
    if (W1 === "") return;
    if (Z) return;
    if (C) return;
    if (G0.length > 0 && !U1) return;
    if (["exit", "quit", ":q", ":q!", ":wq", ":wq!"].includes(W1.trim())) OA9();
    let L1 = W1;
    if (P0) {
      let i0 = sf2(P0);
      if (L1.includes(i0)) L1 = L1.replace(i0, P0)
    }
    J(""), Q("prompt"), i1(), A1(null), B0(null), S((i0) => i0 + 1), P(!0);
    let D0 = new AbortController;
    $(D0);
    let O0 = await K6(),
      x0 = await Qo(L1, K, V, {
        options: {
          commands: I,
          forkNumber: d,
          messageLogName: G,
          tools: F,
          verbose: B,
          slowAndCapableModel: O0,
          maxThinkingTokens: 0
        },
        messageId: void 0,
        abortController: D0,
        readFileTimestamps: T,
        setForkConvoWithMessagesOnTheNextRender: O
      }, r ?? null);
    if (x0.length) W(x0, D0);
    else {
      vH(W1), k();
      return
    }
    for (let i0 of x0)
      if (i0.type === "user") {
        let s0 = K === "bash" ? `!${W1}` : W1;
        vH(s0), k()
      }
  }

  function O1(W1) {
    Q("prompt"), A1(W1)
  }

  function K1(W1) {
    let U1 = W1.replace(/\r/g, `
`),
      L1 = sf2(U1),
      D0 = g.slice(0, e1) + L1 + g.slice(e1);
    J(D0), F0(e1 + L1.length), B0(U1)
  }
  C4((W1, U1) => {
    if (g === "" && (U1.escape || U1.backspace || U1.delete)) Q("prompt");
    if (U1.escape && A.length > 0 && !g && !C) h()
  });
  let R1 = G9().columns - 6,
    h1 = V7.useMemo(() => oD(A), [A]),
    j = r1();
  return Y2.createElement(p, {
    flexDirection: "column"
  }, Y2.createElement(p, {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderColor: K === "bash" ? j.bashBorder : j.secondaryBorder,
    borderDimColor: !0,
    borderStyle: "round",
    marginTop: 1,
    width: "100%"
  }, Y2.createElement(p, {
    alignItems: "flex-start",
    alignSelf: "flex-start",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    width: 3
  }, K === "bash" ? Y2.createElement(u, {
    color: j.bashBorder
  }, " ! ") : Y2.createElement(u, {
    color: C ? j.secondaryText : void 0
  }, " > ")), Y2.createElement(p, {
    paddingRight: 1
  }, Y2.createElement(mC, {
    multiline: !0,
    onSubmit: F1,
    onChange: E0,
    value: g,
    onHistoryUp: Q1,
    onHistoryDown: N1,
    onHistoryReset: () => k(),
    placeholder: E > 0 ? void 0 : m1,
    onExit: () => process.exit(0),
    onExitMessage: (W1, U1) => o1({
      show: W1,
      key: U1
    }),
    onMessage: (W1, U1) => f1({
      show: W1,
      text: U1
    }),
    onImagePaste: O1,
    columns: R1,
    isDimmed: Z || C,
    disableCursorMovementForUpDownKeys: G0.length > 0,
    cursorOffset: e1,
    onChangeCursorOffset: F0,
    onPaste: K1
  }))), G0.length === 0 && Y2.createElement(p, {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingX: 2,
    paddingY: 0
  }, Y2.createElement(p, {
    justifyContent: "flex-start",
    gap: 1
  }, c1.show ? Y2.createElement(u, {
    dimColor: !0
  }, "Press ", c1.key, " again to exit") : a1.show ? Y2.createElement(u, {
    dimColor: !0
  }, a1.text) : Y2.createElement(Y2.Fragment, null, Y2.createElement(u, {
    color: K === "bash" ? j.bashBorder : void 0,
    dimColor: K !== "bash"
  }, "! for bash mode"), Y2.createElement(u, {
    dimColor: !0
  }, "· / for commands · esc to undo"))), Y2.createElement(ro, null, Y2.createElement(p, {
    justifyContent: "flex-end",
    gap: 1
  }, !_ && !V1 && !w && h1 < IN1 && Y2.createElement(u, {
    dimColor: !0
  }, NQ.isEnabled && Ai1() ? "shift + ⏎ for newline" : "\\⏎ for newline"), w && Y2.createElement(u, {
    dimColor: !0
  }, `${oD(A)} tokens (${Math.round(1e4*(iC2(A)||1)/(oD(A)||1))/100}% cached)`), Y2.createElement(dN1, {
    tokenUsage: h1
  }), Y2.createElement(eK1, {
    debug: w,
    onAutoUpdaterResult: X,
    autoUpdaterResult: _,
    isUpdating: V1,
    onChangeIsUpdating: c
  })))), G0.length > 0 && Y2.createElement(p, {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingX: 2,
    paddingY: 0
  }, Y2.createElement(p, {
    flexDirection: "column"
  }, G0.map((W1, U1) => {
    let L1 = I.find((D0) => D0.userFacingName() === W1.replace("/", ""));
    return Y2.createElement(p, {
      key: W1,
      flexDirection: a0 < 80 ? "column" : "row"
    }, Y2.createElement(p, {
      width: a0 < 80 ? void 0 : e
    }, Y2.createElement(u, {
      color: U1 === H1 ? j.suggestion : void 0,
      dimColor: U1 !== H1
    }, "/", W1, L1?.aliases && L1.aliases.length > 0 && Y2.createElement(u, {
      dimColor: !0
    }, " (", L1.aliases.join(", "), ")"))), L1 && Y2.createElement(p, {
      width: a0 - (a0 < 80 ? 4 : e + 4),
      paddingLeft: a0 < 80 ? 4 : 0
    }, Y2.createElement(u, {
      color: U1 === H1 ? j.suggestion : void 0,
      dimColor: U1 !== H1,
      wrap: "wrap"
    }, Y2.createElement(u, {
      dimColor: U1 !== H1
    }, L1.description, L1.type === "prompt" && L1.argNames?.length ? ` (arguments: ${L1.argNames.join(", ")})` : null))))
  })), Y2.createElement(ro, null, Y2.createElement(p, {
    justifyContent: "flex-end",
    gap: 1
  }, Y2.createElement(dN1, {
    tokenUsage: oD(A)
  }), Y2.createElement(eK1, {
    debug: w,
    onAutoUpdaterResult: X,
    autoUpdaterResult: _,
    isUpdating: V1,
    onChangeIsUpdating: c
  })))))
}
// @from(Start 6423734, End 6423752)
of2 = V7.memo(TA9)
// @from(Start 6423755, End 6423800)
function OA9() {
  zJ1(""), process.exit(0)
}
// @from(Start 6423805, End 6423822)
ef2 = J1(u1(), 1)
// @from(Start 6423825, End 6424008)
function tf2() {
  ef2.useEffect(() => {
    let I = Math.round(process.uptime() * 1000);
    I0("tengu_timer", {
      event: "startup",
      durationMs: String(I)
    })
  }, [])
}
// @from(Start 6424013, End 6424029)
iu = J1(u1(), 1)
// @from(Start 6424032, End 6424532)
function Iq2() {
  let [I, d] = iu.useState(() => {
    return vw() ? "loading" : "missing"
  }), [G, Z] = iu.useState(null), C = iu.useCallback(async () => {
    if (Lb()) {
      d("valid");
      return
    }
    let W = vw();
    if (!W) {
      d("missing");
      return
    }
    try {
      let B = await nK2(W) ? "valid" : "invalid";
      d(B);
      return
    } catch (w) {
      Z(w), d("error");
      return
    }
  }, []);
  return {
    status: I,
    reverify: C,
    error: G
  }
}
// @from(Start 6424534, End 6424766)
function dq2(I, d, G, Z, C, W, w) {
  C4((B, A) => {
    if (!A.escape) return;
    if (w?.aborted) return;
    if (!w) return;
    if (!C) return;
    if (W) return;
    I0("tengu_cancel", {}), I(null), d(null), G(null), Z()
  })
}
// @from(Start 6424771, End 6424788)
Gq2 = J1(u1(), 1)
// @from(Start 6424791, End 6426820)
function mA9(I) {
  return Gq2.useCallback(async (d, G, Z, C) => {
    return new Promise((W) => {
      function w() {
        I0("tengu_tool_use_cancelled", {
          messageID: C.message.id,
          toolName: d.name
        })
      }

      function B() {
        W({
          result: !1,
          message: fu
        }), Z.abortController.abort()
      }
      if (Z.abortController.signal.aborted) {
        w(), B();
        return
      }
      return UH(d, G, Z, C).then(async (A) => {
        if (A.result) {
          I0("tengu_tool_use_granted_in_config", {
            messageID: C.message.id,
            toolName: d.name
          }), W({
            result: !0
          });
          return
        }
        let [V, X] = await Promise.all([d.description(G), d === G5 ? fa(o$.parse(G).command, Z.abortController.signal) : Promise.resolve(null)]);
        if (Z.abortController.signal.aborted) {
          w(), B();
          return
        }
        I({
          assistantMessage: C,
          tool: d,
          description: V,
          input: G,
          commandPrefix: X,
          riskScore: null,
          onAbort() {
            w(), I0("tengu_tool_use_rejected_in_prompt", {
              messageID: C.message.id,
              toolName: d.name
            }), B()
          },
          onAllow(_) {
            if (_ === "permanent") I0("tengu_tool_use_granted_in_prompt_permanent", {
              messageID: C.message.id,
              toolName: d.name
            });
            else I0("tengu_tool_use_granted_in_prompt_temporary", {
              messageID: C.message.id,
              toolName: d.name
            });
            W({
              result: !0
            })
          },
          onReject() {
            I0("tengu_tool_use_rejected_in_prompt", {
              messageID: C.message.id,
              toolName: d.name
            }), B()
          }
        })
      }).catch((A) => {
        if (A instanceof Ez) w(), B();
        else X0(A)
      })
    })
  }, [I])
}
// @from(Start 6426825, End 6426834)
Zq2 = mA9
// @from(Start 6426840, End 6426857)
Cq2 = J1(u1(), 1)
// @from(Start 6426860, End 6426985)
function Wq2(I, d, G) {
  Cq2.useEffect(() => {
    Wz(DY(d, G, 0), I.filter((Z) => Z.type !== "progress"))
  }, [I, d, G])
}
// @from(Start 6426987, End 6427156)
function so(I) {
  return I.message.content.map((d) => {
    if (d.type === "text") return "text";
    if (d.type === "tool_use") return d.name;
    return d.type
  })
}
// @from(Start 6427157, End 6427865)
async function Aq2(I, d, G) {
  let Z = I.message.model,
    C = d.message.model,
    W = await qb();
  I0("tengu_binary_feedback", {
    msg_id_A: I.message.id,
    msg_id_B: d.message.id,
    choice: {
      "prefer-left": I.message.id,
      "prefer-right": d.message.id,
      neither: void 0,
      "no-preference": void 0
    } [G],
    choiceStr: G,
    gitHead: W?.commitHash,
    gitBranch: W?.branchName,
    gitRepoRemoteUrl: W?.remoteUrl || void 0,
    gitRepoIsHeadOnRemote: W?.isHeadOnRemote?.toString(),
    gitRepoIsClean: W?.isClean?.toString(),
    modelA: Z,
    modelB: C,
    temperatureA: String(t$),
    temperatureB: String(t$),
    seqA: String(so(I)),
    seqB: String(so(d))
  })
}
// @from(Start 6427866, End 6428102)
async function wq2(I, d, G, Z) {
  I0("tengu_binary_feedback_display_decision", {
    decision: I.toString(),
    reason: Z,
    msg_id_A: d.message.id,
    msg_id_B: G.message.id,
    seqA: String(so(d)),
    seqB: String(so(G))
  })
}
// @from(Start 6428104, End 6428153)
function lA9(I, d) {
  return I.text === d.text
}
// @from(Start 6428155, End 6428315)
function bA9(I, d) {
  if (I.type !== d.type) return !1;
  if (I.type === "text") return lA9(I, d);
  return d = d, I.name === d.name && n01(I.input, d.input)
}
// @from(Start 6428317, End 6428427)
function Bq2(I, d) {
  if (I.length !== d.length) return !1;
  return a01(I, d).every(([G, Z]) => bA9(G, Z))
}
// @from(Start 6428429, End 6429022)
function Vq2(I, d) {
  let G = () => wq2(!0, I, d),
    Z = (B) => wq2(!1, I, d, B),
    C = I.message.content.filter((B) => B.type !== "thinking" && B.type !== "redacted_thinking"),
    W = d.message.content.filter((B) => B.type !== "thinking" && B.type !== "redacted_thinking");
  if (!(C.some((B) => B.type === "tool_use") || W.some((B) => B.type === "tool_use"))) {
    if (Bq2(C, W)) return Z("contents_identical"), !1;
    return G(), !0
  }
  if (Bq2(C.filter((B) => B.type === "tool_use"), W.filter((B) => B.type === "tool_use"))) return Z("contents_identical"), !1;
  return G(), !0
}
// @from(Start 6429024, End 6429487)
function Xq2(I, d, G) {
  switch (G) {
    case "prefer-left":
      return {
        message: I, shouldSkipPermissionCheck: !0
      };
    case "prefer-right":
      return {
        message: d, shouldSkipPermissionCheck: !0
      };
    case "no-preference":
      return {
        message: Math.random() < 0.5 ? I : d, shouldSkipPermissionCheck: !1
      };
    case "neither":
      return {
        message: null, shouldSkipPermissionCheck: !1
      }
  }
}
// @from(Start 6429492, End 6429500)
hA9 = 10
// @from(Start 6429502, End 6430192)
async function jA9(I, d, G) {
  {
    let W = await d();
    if (I.abortController.signal.aborted) return {
      message: null,
      shouldSkipPermissionCheck: !1
    };
    return {
      message: W,
      shouldSkipPermissionCheck: !1
    }
  }
  let [Z, C] = await Promise.all([d(), d()]);
  if (I.abortController.signal.aborted) return {
    message: null,
    shouldSkipPermissionCheck: !1
  };
  if (C.isApiErrorMessage) return {
    message: Z,
    shouldSkipPermissionCheck: !1
  };
  if (Z.isApiErrorMessage) return {
    message: C,
    shouldSkipPermissionCheck: !1
  };
  if (!Vq2(Z, C)) return {
    message: Z,
    shouldSkipPermissionCheck: !1
  };
  return await G(Z, C)
}
// @from(Start 6430193, End 6431381)
async function* cB(I, d, G, Z, C, W) {
  let w = aK2(d, G);

  function B() {
    return bs(sR(I), w, C.options.maxThinkingTokens, C.options.tools, C.abortController.signal, {
      dangerouslySkipPermissions: C.options.dangerouslySkipPermissions ?? !1,
      model: C.options.slowAndCapableModel,
      prependCLISysprompt: !0
    })
  }
  let A = await jA9(C, B, W);
  if (A.message === null) {
    yield q8(KW);
    return
  }
  let {
    message: V,
    shouldSkipPermissionCheck: X
  } = A;
  yield V;
  let _ = V.message.content.filter((J) => J.type === "tool_use");
  if (!_.length) return;
  let F = [];
  if (_.every((J) => C.options.tools.find((K) => K.name === J.name)?.isReadOnly())) {
    for await (let J of kA9(_, V, Z, C, X)) if (yield J, J.type === "user") F.push(J)
  } else
    for await (let J of xA9(_, V, Z, C, X)) if (yield J, J.type === "user") F.push(J);
  if (C.abortController.signal.aborted) {
    yield q8(_X);
    return
  }
  let g = F.sort((J, K) => {
    let Q = _.findIndex((S) => S.id === J.message.content[0].id),
      E = _.findIndex((S) => S.id === K.message.content[0].id);
    return Q - E
  });
  yield* await cB([...I, V, ...g], d, G, Z, C, W)
}
// @from(Start 6431382, End 6431501)
async function* kA9(I, d, G, Z, C) {
  yield* IN2(I.map((W) => Yq2(W, new Set(I.map((w) => w.id)), d, G, Z, C)), hA9)
}
// @from(Start 6431502, End 6431614)
async function* xA9(I, d, G, Z, C) {
  for (let W of I) yield* Yq2(W, new Set(I.map((w) => w.id)), d, G, Z, C)
}
// @from(Start 6431615, End 6432362)
async function* Yq2(I, d, G, Z, C, W) {
  let w = I.name,
    B = C.options.tools.find((V) => V.name === w);
  if (!B) {
    I0("tengu_tool_use_error", {
      error: `No such tool available: ${w}`,
      messageID: G.message.id,
      toolName: w,
      toolUseID: I.id
    }), yield p9([{
      type: "tool_result",
      content: `Error: No such tool available: ${w}`,
      is_error: !0,
      tool_use_id: I.id
    }]);
    return
  }
  let A = I.input;
  try {
    if (C.abortController.signal.aborted) {
      I0("tengu_tool_use_cancelled", {
        toolName: B.name,
        toolUseID: I.id
      }), yield p9([zQ2(I.id)]);
      return
    }
    for await (let V of pA9(B, I.id, d, A, C, Z, G, W)) yield V
  } catch (V) {
    X0(V)
  }
}
// @from(Start 6432364, End 6432666)
function cA9(I, d) {
  switch (I) {
    case G5: {
      let {
        command: G,
        timeout: Z
      } = G5.inputSchema.parse(d);
      return {
        command: G.replace(`cd ${R0()} && `, ""),
        ...Z ? {
          timeout: Z
        } : {}
      }
    }
    default:
      return d
  }
}
// @from(Start 6432667, End 6434752)
async function* pA9(I, d, G, Z, C, W, w, B) {
  let A = I.inputSchema.safeParse(Z);
  if (!A.success) {
    I0("tengu_tool_use_error", {
      error: `InputValidationError: ${A.error.message}`,
      messageID: w.message.id,
      toolName: I.name,
      toolInput: JSON.stringify(Z).slice(0, 200)
    }), yield p9([{
      type: "tool_result",
      content: `InputValidationError: ${A.error.message}`,
      is_error: !0,
      tool_use_id: d
    }]);
    return
  }
  let V = cA9(I, Z),
    X = await I.validateInput?.(V, C);
  if (X?.result === !1) {
    I0("tengu_tool_use_error", {
      error: X?.message.slice(0, 2000),
      messageID: w.message.id,
      toolName: I.name,
      toolInput: JSON.stringify(Z).slice(0, 200),
      ...X?.meta ?? {}
    }), yield p9([{
      type: "tool_result",
      content: X.message,
      is_error: !0,
      tool_use_id: d
    }]);
    return
  }
  let _ = B ? {
    result: !0
  } : await W(I, V, C, w);
  if (_.result === !1) {
    yield p9([{
      type: "tool_result",
      content: _.message,
      is_error: !0,
      tool_use_id: d
    }]);
    return
  }
  try {
    let F = I.call(V, C, W);
    for await (let g of F) switch (g.type) {
      case "result":
        I0("tengu_tool_use_success", {
          messageID: w.message.id,
          toolName: I.name
        }), yield p9([{
          type: "tool_result",
          content: g.resultForAssistant,
          tool_use_id: d
        }], {
          data: g.data,
          resultForAssistant: g.resultForAssistant
        });
        return;
      case "progress":
        I0("tengu_tool_use_progress", {
          messageID: w.message.id,
          toolName: I.name
        }), yield NQ2(d, G, g.content, g.normalizedMessages, g.tools)
    }
  } catch (F) {
    let g = iA9(F);
    X0(F), I0("tengu_tool_use_error", {
      error: g.slice(0, 2000),
      messageID: w.message.id,
      toolName: I.name,
      toolInput: JSON.stringify(Z).slice(0, 1000)
    }), yield p9([{
      type: "tool_result",
      content: g,
      is_error: !0,
      tool_use_id: d
    }])
  }
}
// @from(Start 6434754, End 6435187)
function iA9(I) {
  if (!(I instanceof Error)) return String(I);
  let d = [I.message];
  if ("stderr" in I && typeof I.stderr === "string") d.push(I.stderr);
  if ("stdout" in I && typeof I.stdout === "string") d.push(I.stdout);
  let G = d.filter(Boolean).join(`
`);
  if (G.length <= 1e4) return G;
  let Z = 5000,
    C = G.slice(0, Z),
    W = G.slice(-Z);
  return `${C}

... [${G.length-1e4} characters truncated] ...

${W}`
}
// @from(Start 6435192, End 6435208)
oo = J1(u1(), 1)
// @from(Start 6435214, End 6435230)
a3 = J1(u1(), 1)
// @from(Start 6435236, End 6435252)
LW = J1(u1(), 1)
// @from(Start 6435255, End 6435938)
function GN1({
  debug: I,
  erroredToolUseIDs: d,
  inProgressToolUseIDs: G,
  message: Z,
  normalizedMessages: C,
  tools: W,
  unresolvedToolUseIDs: w,
  verbose: B
}) {
  let {
    columns: A
  } = G9();
  return QW([Z]).filter((V) => V.type !== "progress").map((V, X) => LW.createElement(p, {
    flexDirection: "column",
    key: X
  }, LW.createElement(fH, {
    addMargin: !1,
    erroredToolUseIDs: d,
    debug: I,
    inProgressToolUseIDs: G,
    message: V,
    messages: C,
    shouldAnimate: !1,
    shouldShowDot: !0,
    tools: W,
    unresolvedToolUseIDs: w,
    verbose: B,
    width: A / 2 - 6
  }), LW.createElement(nA9, {
    message: V,
    verbose: B
  })))
}
// @from(Start 6435940, End 6436916)
function nA9({
  message: I,
  verbose: d
}) {
  let {
    columns: G
  } = G9();
  if (I.type !== "assistant") return null;
  let Z = I.message.content[0];
  switch (Z.type) {
    case "tool_use":
      switch (Z.name) {
        case p7.name: {
          let C = p7.inputSchema.safeParse(Z.input);
          if (!C.success) return null;
          return LW.createElement(ho, {
            file_path: C.data.file_path,
            new_string: C.data.new_string,
            old_string: C.data.old_string,
            verbose: d,
            width: G / 2 - 12
          })
        }
        case R8.name: {
          let C = R8.inputSchema.safeParse(Z.input);
          if (!C.success) return null;
          return LW.createElement(po, {
            file_path: C.data.file_path,
            content: C.data.content,
            verbose: d,
            width: G / 2 - 12
          })
        }
        default:
          return null
      }
    default:
      return null
  }
}
// @from(Start 6436921, End 6436952)
rA9 = "https://go/cli-feedback"
// @from(Start 6436955, End 6437317)
function aA9() {
  return [{
    label: "Choose for me",
    value: "no-preference"
  }, {
    label: "Left option looks better",
    value: "prefer-left"
  }, {
    label: "Right option looks better",
    value: "prefer-right"
  }, {
    label: `Neither, and tell Claude what to do differently (${j0.bold.hex(r1().warning)("esc")})`,
    value: "neither"
  }]
}
// @from(Start 6437319, End 6439868)
function _q2({
  m1: I,
  m2: d,
  onChoose: G,
  debug: Z,
  erroredToolUseIDs: C,
  inProgressToolUseIDs: W,
  normalizedMessages: w,
  tools: B,
  unresolvedToolUseIDs: A,
  verbose: V
}) {
  let X = r1(),
    [_, F] = a3.useState("no-preference"),
    [g, J] = a3.useState(void 0),
    K = P6(() => process.exit(1));
  return C4((Q, E) => {
    if (E.leftArrow) J("prefer-left");
    else if (E.rightArrow) J("prefer-right");
    else if (E.escape) G?.("neither")
  }), a3.default.createElement(a3.default.Fragment, null, a3.default.createElement(p, {
    flexDirection: "column",
    height: "100%",
    width: "100%",
    borderStyle: "round",
    borderColor: X.permission
  }, a3.default.createElement(p, {
    width: "100%",
    justifyContent: "space-between",
    paddingX: 1
  }, a3.default.createElement(u, {
    bold: !0,
    color: X.permission
  }, "[ANT-ONLY] Help train Claude"), a3.default.createElement(u, null, a3.default.createElement(Pg, {
    url: rA9
  }, "[?]"))), a3.default.createElement(p, {
    flexDirection: "row",
    width: "100%",
    flexGrow: 1,
    paddingTop: 1
  }, a3.default.createElement(p, {
    flexDirection: "column",
    flexGrow: 1,
    flexBasis: 1,
    gap: 1,
    borderStyle: _ === "prefer-left" ? "bold" : "single",
    borderColor: _ === "prefer-left" ? X.success : X.secondaryBorder,
    marginRight: 1,
    padding: 1
  }, a3.default.createElement(GN1, {
    erroredToolUseIDs: C,
    debug: Z,
    inProgressToolUseIDs: W,
    message: I,
    normalizedMessages: w,
    tools: B,
    unresolvedToolUseIDs: A,
    verbose: V
  })), a3.default.createElement(p, {
    flexDirection: "column",
    flexGrow: 1,
    flexBasis: 1,
    gap: 1,
    borderStyle: _ === "prefer-right" ? "bold" : "single",
    borderColor: _ === "prefer-right" ? X.success : X.secondaryBorder,
    marginLeft: 1,
    padding: 1
  }, a3.default.createElement(GN1, {
    erroredToolUseIDs: C,
    debug: Z,
    inProgressToolUseIDs: W,
    message: d,
    normalizedMessages: w,
    tools: B,
    unresolvedToolUseIDs: A,
    verbose: V
  }))), a3.default.createElement(p, {
    flexDirection: "column",
    paddingTop: 1,
    paddingX: 1
  }, a3.default.createElement(u, null, "How do you want to proceed?"), a3.default.createElement(N_, {
    options: aA9(),
    onFocus: F,
    focusValue: g,
    onChange: G
  }))), K.pending ? a3.default.createElement(p, {
    marginLeft: 3
  }, a3.default.createElement(u, {
    dimColor: !0
  }, "Press ", K.keyName, " again to exit")) : a3.default.createElement(u, null, " "))
}
// @from(Start 6439870, End 6440443)
function Dq2({
  m1: I,
  m2: d,
  resolve: G,
  debug: Z,
  erroredToolUseIDs: C,
  inProgressToolUseIDs: W,
  normalizedMessages: w,
  tools: B,
  unresolvedToolUseIDs: A,
  verbose: V
}) {
  let X = oo.useCallback((_) => {
    Aq2(I, d, _), G(Xq2(I, d, _))
  }, [I, d, G]);
  return xo("Claude needs your input on a response comparison"), oo.default.createElement(_q2, {
    debug: Z,
    erroredToolUseIDs: C,
    inProgressToolUseIDs: W,
    m1: I,
    m2: d,
    normalizedMessages: w,
    tools: B,
    unresolvedToolUseIDs: A,
    verbose: V,
    onChoose: X
  })
}
// @from(Start 6440444, End 6442006)
async function nu(I) {
  if (await VK.isEnabled()) return I0("tengu_thinking", {
    method: "scratchpad",
    tokenCount: "0",
    messageId: FG(I),
    provider: b9 ? "bedrock" : h9 ? "vertex" : "1p"
  }), 0;
  let d = lA(I);
  if (d?.type !== "user" || typeof d.message.content !== "string") return I0("tengu_thinking", {
    method: "scratchpad",
    tokenCount: "0",
    messageId: FG(I),
    provider: b9 ? "bedrock" : h9 ? "vertex" : "1p"
  }), 0;
  let G = d.message.content.toLowerCase();
  if (G.includes("think harder") || G.includes("think intensely") || G.includes("think longer") || G.includes("think really hard") || G.includes("think super hard") || G.includes("think very hard") || G.includes("ultrathink")) return I0("tengu_thinking", {
    method: "scratchpad",
    tokenCount: "31999",
    messageId: FG(I),
    provider: b9 ? "bedrock" : h9 ? "vertex" : "1p"
  }), 31999;
  if (G.includes("think about it") || G.includes("think a lot") || G.includes("think hard") || G.includes("think more") || G.includes("megathink")) return I0("tengu_thinking", {
    method: "scratchpad",
    tokenCount: "10000",
    messageId: FG(I),
    provider: b9 ? "bedrock" : h9 ? "vertex" : "1p"
  }), 1e4;
  if (G.includes("think")) return I0("tengu_thinking", {
    method: "scratchpad",
    tokenCount: "4000",
    messageId: FG(I),
    provider: b9 ? "bedrock" : h9 ? "vertex" : "1p"
  }), 4000;
  return I0("tengu_thinking", {
    method: "scratchpad",
    tokenCount: "0",
    messageId: FG(I),
    provider: b9 ? "bedrock" : h9 ? "vertex" : "1p"
  }), 0
}
// @from(Start 6442008, End 6450654)
function kJ1({
  commands: I,
  dangerouslySkipPermissions: d,
  debug: G = !1,
  initialForkNumber: Z = 0,
  initialPrompt: C,
  messageLogName: W,
  shouldShowPromptInput: w,
  tools: B,
  verbose: A,
  initialMessages: V,
  mcpClients: X = [],
  isDefaultModel: _ = !0
}) {
  let F = A ?? q2().verbose,
    [g, J] = h5.useState(w21(W, Z, 0)),
    [K, Q] = h5.useState(null),
    [E, S] = h5.useState(null),
    [P, $] = h5.useState(!1),
    [h, O] = h5.useState(null),
    [T, V1] = h5.useState(null),
    [c, c1] = h5.useState(null),
    [o1, a1] = h5.useState(V ?? []),
    [f1, r] = h5.useState(""),
    [A1, m1] = h5.useState("prompt"),
    [T1, e1] = h5.useState(0),
    [F0, P0] = h5.useState(!1),
    [B0, a0] = h5.useState(!1),
    [e, G0] = h5.useState(q2().hasAcknowledgedCostThreshold),
    [H1, j1] = h5.useState(null),
    i1 = h5.useCallback((U1, L1) => {
      return new Promise((D0) => {
        j1({
          m1: U1,
          m2: L1,
          resolve: D0
        })
      })
    }, []),
    E0 = h5.useRef({}),
    {
      status: k,
      reverify: a
    } = Iq2();

  function Z1() {
    if (!P) return;
    if ($(!1), c) c.onAbort();
    else E?.abort()
  }
  dq2(V1, c1, j1, Z1, P, F0, E?.signal), h5.useEffect(() => {
    if (K) J((U1) => U1 + 1), Q(null), a1(K)
  }, [K]), h5.useEffect(() => {
    if (Da() >= 5 && !B0 && !e) I0("tengu_cost_threshold_reached", {}), a0(!0)
  }, [o1, B0, e]);
  let Q1 = Zq2(c1);
  async function N1() {
    if (a(), !C) return;
    $(!0);
    let U1 = new AbortController;
    S(U1);
    let L1 = await K6(),
      D0 = await Qo(C, "prompt", V1, {
        abortController: U1,
        options: {
          commands: I,
          forkNumber: g,
          messageLogName: W,
          tools: B,
          verbose: F,
          slowAndCapableModel: L1,
          maxThinkingTokens: 0
        },
        messageId: FG(o1),
        setForkConvoWithMessagesOnTheNextRender: Q,
        readFileTimestamps: E0.current
      }, null);
    if (D0.length) {
      for (let r5 of D0)
        if (r5.type === "user") vH(C);
      if (a1((r5) => [...r5, ...D0]), D0[D0.length - 1].type === "assistant") {
        S(null), $(!1);
        return
      }
      let [x0, i0, s0, P2] = await Promise.all([iR(), j7(), K6(), nu([...o1, ...D0])]);
      for await (let r5 of cB([...o1, ...D0], x0, i0, Q1, {
        options: {
          commands: I,
          forkNumber: g,
          messageLogName: W,
          tools: B,
          slowAndCapableModel: s0,
          verbose: F,
          dangerouslySkipPermissions: d,
          maxThinkingTokens: P2
        },
        messageId: FG([...o1, ...D0]),
        readFileTimestamps: E0.current,
        abortController: U1,
        setToolJSX: V1
      }, i1)) a1((n0) => [...n0, r5])
    } else vH(C);
    G0(q2().hasAcknowledgedCostThreshold || !1), $(!1)
  }
  async function F1(U1, L1) {
    a1((P2) => [...P2, ...U1]), zQ();
    let D0 = U1[U1.length - 1];
    if (D0.type === "user" && typeof D0.message.content === "string") ZN2(D0.message.content);
    if (D0.type === "assistant") {
      S(null), $(!1);
      return
    }
    let [O0, x0, i0, s0] = await Promise.all([iR(), j7(), K6(), nu([...o1, D0])]);
    for await (let P2 of cB([...o1, D0], O0, x0, Q1, {
      options: {
        commands: I,
        forkNumber: g,
        messageLogName: W,
        tools: B,
        slowAndCapableModel: i0,
        verbose: F,
        dangerouslySkipPermissions: d,
        maxThinkingTokens: s0
      },
      messageId: FG([...o1, D0]),
      readFileTimestamps: E0.current,
      abortController: L1,
      setToolJSX: V1
    }, i1)) a1((r5) => [...r5, P2]);
    $(!1)
  }
  pC2(), h5.useEffect(() => {
    Z50(() => o1), C50(a1)
  }, [o1]), Wq2(o1, W, g), tf2(), h5.useEffect(() => {
    N1()
  }, []);
  let O1 = h5.useMemo(() => QW(o1).filter(fo), [o1]),
    K1 = h5.useMemo(() => Io(O1), [O1]),
    R1 = h5.useMemo(() => qQ2(O1), [O1]),
    h1 = h5.useMemo(() => new Set(RQ2(O1).map((U1) => U1.message.content[0].id)), [O1]),
    j = h5.useMemo(() => {
      return [{
        type: "static",
        jsx: g4.createElement(p, {
          flexDirection: "column",
          key: `logo${g}`
        }, g4.createElement(I50, {
          mcpClients: X,
          isDefaultModel: _
        }), g4.createElement(i81, {
          workspaceDir: t7()
        }))
      }, ...QQ2(O1).map((U1) => {
        let L1 = KK1(U1),
          D0 = U1.type === "progress" ? U1.content.message.content[0]?.type === "text" && U1.content.message.content[0].text === KW ? g4.createElement(fH, {
            message: U1.content,
            messages: U1.normalizedMessages,
            addMargin: !1,
            tools: U1.tools,
            verbose: F ?? !1,
            debug: G,
            erroredToolUseIDs: new Set,
            inProgressToolUseIDs: new Set,
            unresolvedToolUseIDs: new Set,
            shouldAnimate: !1,
            shouldShowDot: !1
          }) : g4.createElement(Eo, null, g4.createElement(fH, {
            message: U1.content,
            messages: U1.normalizedMessages,
            addMargin: !1,
            tools: U1.tools,
            verbose: F ?? !1,
            debug: G,
            erroredToolUseIDs: new Set,
            inProgressToolUseIDs: new Set,
            unresolvedToolUseIDs: new Set([U1.content.message.content[0].id]),
            shouldAnimate: !1,
            shouldShowDot: !1
          })) : g4.createElement(fH, {
            message: U1,
            messages: O1,
            addMargin: !0,
            tools: B,
            verbose: F,
            debug: G,
            erroredToolUseIDs: h1,
            inProgressToolUseIDs: R1,
            shouldAnimate: !T && !c && !F0 && (!L1 || R1.has(L1)),
            shouldShowDot: !0,
            unresolvedToolUseIDs: K1
          }),
          O0 = sA9(U1, O1, K1) ? "static" : "transient";
        if (G) return {
          type: O0,
          jsx: g4.createElement(p, {
            borderStyle: "single",
            borderColor: O0 === "static" ? "green" : "red",
            key: U1.uuid,
            width: "100%"
          }, D0)
        };
        return {
          type: O0,
          jsx: g4.createElement(p, {
            key: U1.uuid,
            width: "100%"
          }, D0)
        }
      })]
    }, [g, O1, B, F, G, h1, R1, T, c, F0, K1, X, _]),
    W1 = !P && B0;
  return g4.createElement(g4.Fragment, null, g4.createElement(DQ, {
    key: `static-messages-${g}`,
    items: j.filter((U1) => U1.type === "static")
  }, (U1) => U1.jsx), j.filter((U1) => U1.type === "transient").map((U1) => U1.jsx), g4.createElement(p, {
    borderColor: "red",
    borderStyle: G ? "single" : void 0,
    flexDirection: "column",
    width: "100%"
  }, !T && !c && !H1 && P && g4.createElement(ns, null), T ? T.jsx : null, !T && H1 && !F0 && g4.createElement(Dq2, {
    m1: H1.m1,
    m2: H1.m2,
    resolve: (U1) => {
      H1.resolve(U1), setTimeout(() => j1(null), 0)
    },
    verbose: F,
    normalizedMessages: O1,
    tools: B,
    debug: G,
    erroredToolUseIDs: h1,
    inProgressToolUseIDs: R1,
    unresolvedToolUseIDs: K1
  }), !T && c && !F0 && !H1 && g4.createElement(cf2, {
    toolUseConfirm: c,
    onDone: () => c1(null),
    verbose: F
  }), !T && !c && !F0 && !H1 && W1 && g4.createElement(t40, {
    onDone: () => {
      a0(!1), G0(!0);
      let U1 = q2();
      p4({
        ...U1,
        hasAcknowledgedCostThreshold: !0
      }), I0("tengu_cost_threshold_acknowledged", {})
    }
  }), !c && !T?.shouldHidePromptInput && w && !F0 && !H1 && !W1 && g4.createElement(g4.Fragment, null, g4.createElement(of2, {
    commands: I,
    forkNumber: g,
    messageLogName: W,
    tools: B,
    isDisabled: k === "invalid",
    isLoading: P,
    onQuery: F1,
    debug: G,
    verbose: F,
    messages: o1,
    setToolJSX: V1,
    onAutoUpdaterResult: O,
    autoUpdaterResult: h,
    input: f1,
    onInputChange: r,
    mode: A1,
    onModeChange: m1,
    submitCount: T1,
    onSubmitCountChange: e1,
    setIsLoading: $,
    setAbortController: S,
    onShowMessageSelector: () => P0((U1) => !U1),
    setForkConvoWithMessagesOnTheNextRender: Q,
    readFileTimestamps: E0.current
  }))), F0 && g4.createElement(Bf2, {
    erroredToolUseIDs: h1,
    unresolvedToolUseIDs: K1,
    messages: sR(o1),
    onSelect: async (U1) => {
      if (P0(!1), !o1.includes(U1)) return;
      Z1(), setImmediate(async () => {
        if (await $6(), a1([]), Q(o1.slice(0, o1.indexOf(U1))), typeof U1.message.content === "string") r(U1.message.content)
      })
    },
    onEscape: () => P0(!1),
    tools: B
  }), g4.createElement(C6, null))
}
// @from(Start 6450656, End 6451033)
function sA9(I, d, G) {
  switch (I.type) {
    case "user":
    case "assistant": {
      let Z = KK1(I);
      if (!Z) return !0;
      if (G.has(Z)) return !1;
      let C = d.find((W) => W.type === "progress" && W.toolUseID === Z);
      if (!C) return !0;
      return !Hq2(G, C.siblingToolUseIDs)
    }
    case "progress":
      return !Hq2(G, I.siblingToolUseIDs)
  }
}
// @from(Start 6451035, End 6451123)
function Hq2(I, d) {
  return I.size > 0 && d.size > 0 && [...I].some((G) => d.has(G))
}
// @from(Start 6451422, End 6452475)
async function $q2({
  commands: I,
  dangerouslySkipPermissions: d,
  hasPermissionsToUseTool: G,
  messageLogName: Z,
  prompt: C,
  cwd: W,
  tools: w,
  verbose: B = !1
}) {
  await Uw(W);
  let V = [p9(C)],
    [X, _, F] = await Promise.all([iR(), j7(), K6()]);
  for await (let K of cB(V, X, _, G, {
    options: {
      commands: I,
      tools: w,
      verbose: B,
      dangerouslySkipPermissions: d,
      slowAndCapableModel: F,
      forkNumber: 0,
      messageLogName: "unused",
      maxThinkingTokens: 0
    },
    abortController: new AbortController,
    messageId: void 0,
    readFileTimestamps: {}
  })) V.push(K);
  let g = lA(V);
  if (!g || g.type !== "assistant") throw new Error("Expected content to be an assistant message");
  if (g.message.content[0]?.type !== "text") throw new Error(`Expected first content item to be text, but got ${JSON.stringify(g.message.content[0],null,2)}`);
  let J = DY(Z, 0, 0);
  return Wz(J, V), {
    resultText: g.message.content[0].text,
    totalCost: Da(),
    messageHistoryFile: J
  }
}
// @from(Start 6452480, End 6452497)
_N1 = J1(u1(), 1)
// @from(Start 6452534, End 6452629)
async function YN1(I) {
  return (await (I ? to() : Tq2())).filter((d) => d.name !== _U.name)
}
// @from(Start 6452630, End 6454400)
async function uq2(I) {
  return `Launch a new agent that has access to the following tools: ${(await YN1(I)).map((Z)=>Z.name).join(", ")}. When you are searching for a keyword or file and are not confident that you will find the right match on the first try, use the Agent tool to perform the search for you. For example:

- If you are searching for a keyword like "config" or "logger", the Agent tool is appropriate
- If you want to read a specific file path, use the ${Fd.name} or ${A7.name} tool instead of the Agent tool, to find the match more quickly
- If you are searching for a specific class definition like "class Foo", use the ${A7.name} tool instead, to find the match more quickly

Usage notes:
1. Launch multiple agents concurrently whenever possible, to maximize performance; to do that, use a single message with multiple tool uses
2. When the agent is done, it will return a single message back to you. The result returned by the agent is not visible to the user. To show the user the result, you should send a text message back to the user with a concise summary of the result.
3. Each agent invocation is stateless. You will not be able to send additional messages to the agent, nor will the agent be able to communicate with you outside of its final report. Therefore, your prompt should contain a highly detailed task description for the agent to perform autonomously and you should specify exactly what information the agent should return back to you in its final and only message to you.
4. The agent's outputs should generally be trusted${I?"":`
5. IMPORTANT: The agent can not use ${G5.name}, ${R8.name}, ${p7.name}, ${RI.name}, so can not modify files. If you want to use these tools, use them directly instead of going through the agent.`}`
}
// @from(Start 6454405, End 6454495)
hV9 = s.object({
    prompt: s.string().describe("The task for the agent to perform")
  })
// @from(Start 6454499, End 6457686)
_U = {
    async prompt({
      dangerouslySkipPermissions: I
    }) {
      return await uq2(I)
    },
    name: qa,
    async description() {
      return "Launch a new task"
    },
    inputSchema: hV9,
    async * call({
      prompt: I
    }, {
      abortController: d,
      options: {
        dangerouslySkipPermissions: G = !1,
        forkNumber: Z,
        messageLogName: C,
        verbose: W
      },
      readFileTimestamps: w
    }) {
      let B = Date.now(),
        A = [p9(I)],
        V = await YN1(G);
      yield {
        type: "progress",
        content: q8(j0.dim("Initializing…")),
        normalizedMessages: QW(A),
        tools: V
      };
      let [X, _, F, g] = await Promise.all([cK2(), j7(), K6(), nu(A)]), J = 0, K = a2(() => su1(C, Z));
      for await (let P of cB(A, X, _, UH, {
        abortController: d,
        options: {
          dangerouslySkipPermissions: G,
          forkNumber: Z,
          messageLogName: C,
          tools: V,
          commands: [],
          verbose: W,
          slowAndCapableModel: F,
          maxThinkingTokens: g
        },
        messageId: FG(A),
        readFileTimestamps: w
      })) {
        if (A.push(P), Wz(DY(C, Z, K()), A.filter((h) => h.type !== "progress")), P.type !== "assistant") continue;
        let $ = QW(A);
        for (let h of P.message.content) {
          if (h.type !== "tool_use") continue;
          J++, yield {
            type: "progress",
            content: $.find((O) => O.type === "assistant" && O.message.content[0]?.type === "tool_use" && O.message.content[0].id === h.id),
            normalizedMessages: $,
            tools: V
          }
        }
      }
      let Q = QW(A),
        E = lA(A);
      if (E?.type !== "assistant") throw new Error("Last message was not an assistant message");
      if (E.message.content.some((P) => P.type === "text" && P.text === KW)) yield {
        type: "progress",
        content: E,
        normalizedMessages: Q,
        tools: V
      };
      else {
        let P = [J === 1 ? "1 tool use" : `${J} tool uses`, kC2((E.message.usage.cache_creation_input_tokens ?? 0) + (E.message.usage.cache_read_input_tokens ?? 0) + E.message.usage.input_tokens + E.message.usage.output_tokens) + " tokens", X$(Date.now() - B)];
        yield {
          type: "progress",
          content: q8(`Done (${P.join(" · ")})`),
          normalizedMessages: Q,
          tools: V
        }
      }
      let S = E.message.content.filter((P) => P.type === "text");
      yield {
        type: "result",
        data: S,
        normalizedMessages: Q,
        resultForAssistant: this.renderResultForAssistant(S),
        tools: V
      }
    },
    isReadOnly() {
      return !0
    },
    async isEnabled() {
      return !0
    },
    userFacingName() {
      return "Task"
    },
    needsPermissions() {
      return !1
    },
    renderResultForAssistant(I) {
      return I
    },
    renderToolUseMessage({
      prompt: I
    }, {
      verbose: d
    }) {
      let G = I.split(bV9);
      return VU(!d && G.length > 1 ? G[0] + "…" : I)
    },
    renderToolUseRejectedMessage() {
      return _N1.createElement(A3, null)
    }
  }
// @from(Start 6457692, End 6457708)
DK = J1(u1(), 1)
// @from(Start 6457714, End 6458602)
Oq2 = `You are an expert software architect. Your role is to analyze technical requirements and produce clear, actionable implementation plans.
These plans will then be carried out by a junior software engineer so you need to be specific and detailed. However do not actually write the code, just explain the plan.

Follow these steps for each request:
1. Carefully analyze requirements to identify core functionality and constraints
2. Define clear technical approach with specific technologies and patterns
3. Break down implementation into concrete, actionable steps at the appropriate level of abstraction

Keep responses focused, specific and actionable. 

IMPORTANT: Do not ask the user if you should implement the changes at the end. Just provide the plan as described above.
IMPORTANT: Do not attempt to write the code or use any string modification tools. Just provide the plan.`
// @from(Start 6458606, End 6458871)
DN1 = "Your go-to tool for any technical or coding task. Analyzes requirements and breaks them down into clear, actionable implementation steps. Use this whenever you need help planning how to implement a feature, solve a technical problem, or structure your code."
// @from(Start 6458877, End 6458907)
jV9 = [G5, zI, Fd, R8, A7, Kd]
// @from(Start 6458911, End 6459129)
kV9 = s.strictObject({
    prompt: s.string().describe("The technical request or coding task to analyze"),
    context: s.string().describe("Optional context from previous conversation or system state").optional()
  })
// @from(Start 6459133, End 6460660)
mq2 = {
    name: "Architect",
    async description() {
      return DN1
    },
    inputSchema: kV9,
    isReadOnly() {
      return !0
    },
    userFacingName() {
      return "Architect"
    },
    async isEnabled() {
      return !1
    },
    needsPermissions() {
      return !1
    },
    async * call({
      prompt: I,
      context: d
    }, G, Z) {
      let C = d ? `<context>${d}</context>

${I}` : I,
        w = [p9(C)],
        B = (G.options.tools ?? []).filter((X) => jV9.map((_) => _.name).includes(X.name)),
        A = await gH(cB(w, [Oq2], await j7(), Z, {
          ...G,
          options: {
            ...G.options,
            tools: B
          }
        }));
      if (A.type !== "assistant") throw new Error("Invalid response from Claude API");
      let V = A.message.content.filter((X) => X.type === "text");
      yield {
        type: "result",
        data: V,
        resultForAssistant: this.renderResultForAssistant(V)
      }
    },
    async prompt() {
      return DN1
    },
    renderResultForAssistant(I) {
      return I
    },
    renderToolUseMessage(I) {
      return Object.entries(I).map(([d, G]) => `${d}: ${JSON.stringify(G)}`).join(", ")
    },
    renderToolResultMessage(I) {
      return DK.createElement(p, {
        flexDirection: "column",
        gap: 1
      }, DK.createElement(yB, {
        code: I.map((d) => d.text).join(`
`),
        language: "markdown"
      }))
    },
    renderToolUseRejectedMessage() {
      return DK.createElement(A3, null)
    }
  }
// @from(Start 6460666, End 6460683)
xV9 = J1(u1(), 1)
// @from(Start 6460689, End 6460809)
bl3 = s.strictObject({
  file_path: s.string().optional().describe("Optional path to a specific memory file to read")
})
// @from(Start 6460815, End 6460832)
cV9 = J1(u1(), 1)
// @from(Start 6460838, End 6460996)
al3 = s.strictObject({
  file_path: s.string().describe("Path to the memory file to write"),
  content: s.string().describe("Content to write to the file")
})
// @from(Start 6461002, End 6461018)
de = J1(u1(), 1)
// @from(Start 6461024, End 6461086)
lq2 = "Sends the user swag stickers with love from Anthropic."
// @from(Start 6461090, End 6462280)
bq2 = `This tool should be used whenever a user expresses interest in receiving Anthropic or Claude stickers, swag, or merchandise. When triggered, it will display a shipping form for the user to enter their mailing address and contact details. Once submitted, Anthropic will process the request and ship stickers to the provided address.

Common trigger phrases to watch for:
- "Can I get some Anthropic stickers please?"
- "How do I get Anthropic swag?"
- "I'd love some Claude stickers"
- "Where can I get merchandise?"
- Any mention of wanting stickers or swag

The tool handles the entire request process by showing an interactive form to collect shipping information.

NOTE: Only use this tool if the user has explicitly asked us to send or give them stickers. If there are other requests that include the word "sticker", but do not explicitly ask us to send them stickers, do not use this tool.
For example:
- "How do I make custom stickers for my project?" - Do not use this tool
- "I need to store sticker metadata in a database - what schema do you recommend?" - Do not use this tool
- "Show me how to implement drag-and-drop sticker placement with React" - Do not use this tool
`
// @from(Start 6462286, End 6462302)
w2 = J1(u1(), 1)
// @from(Start 6462305, End 6464516)
function Ie(I, d) {
  let G = d.trim();
  if (!G && I === "address2") return null;
  if (!G) return {
    message: "This field is required"
  };
  switch (I) {
    case "email": {
      if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(G)) return {
        message: "Please enter a valid email address"
      };
      break
    }
    case "name":
      if (G.length < 2) return {
        message: "Name must be at least 2 characters long"
      };
      break;
    case "address1": {
      if (G.length < 3) return {
        message: "Please enter a valid address"
      };
      let Z = /^P\.?O\.?\s*Box\s+\d+$/i.test(G),
        C = /\d+/.test(G);
      if (!Z && !C) return {
        message: "Please include a number in the street address"
      };
      break
    }
    case "address2":
      break;
    case "city":
      if (G.length < 2) return {
        message: "City name must be at least 2 characters long"
      };
      if (!/^[a-zA-Z\s.-]+$/.test(G)) return {
        message: "City can only contain letters, spaces, periods, and hyphens"
      };
      break;
    case "state": {
      let Z = new Set(["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY", "DC"]),
        C = G.toUpperCase();
      if (!Z.has(C)) return {
        message: "Please enter a valid US state code (e.g. CA)"
      };
      break
    }
    case "usLocation": {
      let Z = G.toLowerCase();
      if (!["y", "yes", "n", "no"].includes(Z)) return {
        message: "Please enter y/yes or n/no"
      };
      break
    }
    case "zip":
      if (!/^\d{5}(-\d{4})?$/.test(G)) return {
        message: "Please enter a valid ZIP code (e.g. 12345 or 12345-6789)"
      };
      break;
    case "phone":
      if (!/^(\+1\s?)?(\d{3}[-.\s]??)?\d{3}[-.\s]??\d{4}$/.test(G)) return {
        message: "Please enter a valid US phone number"
      };
      break
  }
  return null
}
// @from(Start 6464521, End 6464537)
DU = J1(u1(), 1)
// @from(Start 6464543, End 6474224)
hq2 = [`                                                  
              .=#*=.      :==.                    
              -%%%%=.    .#%#=                    
              .=%%%#=    :%%#:    -=+-            
         ...   .=%%%*-   =@%+   :+%%%%.           
        :*%%+=  .=%%%*-  +%%= .=%%%%%=            
        .=#%%%#=..=#%%*: *%#:-*%%%%+:             
          .=*%%%%+==#%%+.%%+=#%%%%=.              
             :=#%%%##%%%*%%%%%%%*-       .        
                -=#%%%%%%%%%%%%+-====+*%%%+.      
     .============-=*%%%%%%%%%%%%%%%%#+===:       
      =======+++****%%%%%%%%%%#+==:.              
                  -=*%%%%%%%%%*+#%%%%%%%#*=.      
              .=+#%#++#%%%%%%%%+-..-==+*##=.      
           .=+%%%+=-+%#=*%+%%%##%+:               
         .+%%%*=. =*%+:-%%:=#%#==#%+:             
         .=+=.  .=%%=. +%#. -*%%=:=*%+-           
               -*%#=  .#%*   :*%%+: :=*.          
             .=%%=.   =%%=    .=%%=.              
              :=.     +%%=     .-=:               
                      =#+.                        
`, `                                                  
              .=*+=.      .==.                    
              -####=.    .*#*=                    
              .=###*-    :##*:    -==-            
         ...   .=###+-   =%#+   :+####.           
        .+##+-  .=###+:  =##= .=*####-            
        .=*###*=..=*##+. +#*::+####=.             
          .=+###*=-=*##+.*#==*###*=.              
             .=*###**###+#######+-                
                :=*############+--====*###=.      
     .===========--=+################*+===.       
      -=========++++##########*+==.               
                  :=*#########*+*#######*+=.      
              .==*#*==*########=-..-===+**=.      
           .==*##+=:=#*-*#+###**#+:               
         .=###+=. -+#+::##:=*#*==*#=:             
         .===.  .=##=. =#*. -+#*=:=+#=-           
               -+#*=  .*#+   :+##+: :=*.          
              =#*=.   =##=    .=##=.              
              :=.     =##=      -=:               
                      =*+.                        
`, `                                                  
              .=+==.      .=-.                    
              :****=     .+*+=                    
              .=***+-    :**+:    -==:            
         ...   .=***+:   -**=   :=****.           
        .+**=-  .=***=:  =**= .=*****-            
        .=+***+=..=+**=. =*+.:=****=.             
           ==****=-=+**=.**==+****=.              
             .=+***++***+*******=:                
                :=+************=:-====+***=.      
     .==========--:-+****************+====.       
      -============+**********+==-.               
                  :=+*********+=+*******+==.      
              .-=+*+==+********=:..:====++=.      
            ==***=-:=*+-+*=***++*=:               
         .=***+=. -+*=::**.-+*+==+*=:             
         .===.  .=**=. =*+. :+**=.=+*=-           
               :+*+-  .+*+   :=**=: :=+.          
              =**=.   -**=    .=**=.              
              :-.     =**-      :=.               
                      =+=.                        
`, `                                                  
              .===-.      .=-.                    
              :++++=      =+=-                    
              .=+++=:    .++=:    :==:            
         ..    .=+++=:   -++=   :=++++            
        .=++=:  .=+++=:  =++= .=+++++:            
        .==+++==..==++=. =+=.:=++++=.             
           -=++++=--=++=.++=-=++++=.              
             .==+++==+++=+++++++=:                
                :==++++++++++++=::=====+++=.      
     .-====---=---:-=++++++++++++++++====-.       
      :=============++++++++++===-.               
                  :==+++++++++===+++++++==-.      
              .-==+===+++++++++=: .:=======.      
            -=+++=-:=+=:=+=+++==+=:               
         .=+++==. :=+=::++.-=+====+=.             
          ===.  .=++=. =++. :=++=.-=+=:           
               :=+=-  .++=   :=++=. .==.          
              -++=.   -++=    .=++=.              
              .-.     =++-      :-.               
                      -==.                        
`, `                                                  
              .===-.      .-:                     
              :====-      ===-                    
              .-====:    .===.    :==:            
         ..    .-====:   :===   .=====            
        .====:  .-====.  ===- .-=====:            
         -=====-..-====. ===..======.             
           -======:-====.===:=====-.              
             .-==================:                
                .===============::-========.      
     .-=---------:::=====================-.       
      :=-========================:.               
                  .=======================-.      
               :================: .:-=====-.      
            -=====:.===:==========.               
         .=====-. :===.:==.:===--===.             
          -=-.  .===-. ===  :====.-===:           
               :===:  .===   .====. .==           
              -==-.   :===    .====.              
              .:.     ===:      ::.               
                      -==.                        
`, `                                                  
              .-==:       .-:                     
              .====:      ===:                    
               :====:    .===.    .--.            
          .    .-====.   :===   .-====            
        .====.   :====.  -==: .:=====:            
         -=====-. :====. ===..=====-.             
           :======::====.==-:=====:               
             .-==================.                
                .-=============-..:---====-.      
     .:-------::::.:===================--:.       
      .---------===============--:.               
                  .-======================:       
               :-===--==========. ..:--===-.      
            :=====:.-==:==-=======.               
         .-====:. .===..==.:===::==-.             
          --:.  .-==-. -==  .===-.:==-.           
               .===:   ===   .====. .-=           
              :==-.   :==-    .-==-.              
              .:.     -==:      .:.               
                      :==                         
`, `                                                  
               :--:       .:.                     
              .===-:      -=-.                    
               :===-.    .==-.    .::.            
          .     :-==-.   .==:   .:-===            
        .-==:.   :-==-.  :=-:  :-===-.            
         :-===-:. :-==-. -=-..-====:.             
           .-===-:.:-==:.-=:.-===-:               
             .:-===---==:-==-=-=-.                
                .:-===========-:..::::--==-.      
      .:::::::::....--========-======-:::..       
      .:::::::::-----========--::..               
                  .:--====-------=======--.       
               .:-=-::---==--=-:.  .:::---:.      
            .:-=-:..:--.-=:-=---=-.               
          :===-:. .-=-..==..-=-::-=:.             
          :::.  .:=-:  :=-  .-=-:.:---.           
               .-=-.   -=-   .-==-. .:-           
              :=-:.   .-=:    .:-=:.              
              ...     :==.      ...               
                      .--                         
`, `                                                  
               .::.        ..                     
              .::::.      :::.                    
               .::::.     :::.    ....            
                .::::.   .::.   ..::::            
         :::..   .:::..  .::.  .:::::.            
         .:::::.  .:::.  .:: ..::::.              
           ..::::...:::. ::..:::::.               
              .:::::::::.:::::::..                
                ..:::::::::::::.......::::.       
      ..............::::::::::::::::::....        
      ...........::::::::::::::...                
                  ..:::::::::::.::::::::::.       
               ..:::..:::::::::..  .....::.       
            ..:::....::.::.::::::..               
          .::::.  .::...:: .:::..::.              
          ...    .::.  .::  .:::. .::..           
               .:::.   ::.   ..::.   .:           
              .::.    .::.     .::.               
               .      .::.      ..                
                      .:.                         
`, `                                                  
                                                  
                                                  
                                                  
                                                  
                                                  
                                                  
                                                  
                                                  
                                                  
                                                  
                                                  
                                                  
                                                  
                                                  
                                                  
                                                  
                                                  
                                                  
                                                  
                                                  
`]
// @from(Start 6474228, End 6474525)
jq2 = [`   @   
@  @  @
  @@@  
@  @  @
   @`, `   *   
*  *  *
  ***  
*  *  *
   *`, `   +   
+  +  +
  +++  
+  +  +
   +`, `   /   
/  /  /
  ///  
/  /  /
   /`, `   |   
|  |  |
  |||  
|  |  |
   |`, `   \\   
\\  \\  \\
  \\\\\\  
\\  \\  \\
   \\`, `   -   
-  -  -
  ---  
-  -  -
   -`]
// @from(Start 6474528, End 6475205)
function kq2({
  size: I = "small",
  cycles: d,
  color: G,
  intervalMs: Z
}) {
  let [C, W] = DU.default.useState(0), w = DU.default.useRef(1), B = DU.default.useRef(0), A = r1(), V = I === "large" ? hq2 : jq2;
  return DU.default.useEffect(() => {
    let X = setInterval(() => {
      W((_) => {
        if (d !== void 0 && d !== null && B.current >= d) return 0;
        if (_ === V.length - 1) w.current = -1, B.current += 1;
        if (_ === 0) w.current = 1;
        return _ + w.current
      })
    }, Z || (I === "large" ? 100 : 200));
    return () => clearInterval(X)
  }, [V.length, d, Z, I]), DU.default.createElement(u, {
    color: G || A.claude
  }, V[C])
}
// @from(Start 6475207, End 6486019)
function xq2({
  onSubmit: I,
  onClose: d
}) {
  let [G, Z] = w2.default.useState(""), {
    rows: C
  } = G9(), W = () => {
    if (C >= 50) return "large";
    else if (C >= 35) return "medium";
    else return "small"
  }, w = (T1) => {
    let e1 = encodeURIComponent(T1.name || ""),
      F0 = encodeURIComponent(T1.email || ""),
      P0 = encodeURIComponent(T1.phone || ""),
      B0 = encodeURIComponent(T1.address1 || ""),
      a0 = encodeURIComponent(T1.address2 || ""),
      e = encodeURIComponent(T1.city || ""),
      G0 = encodeURIComponent(T1.state || ""),
      H1 = encodeURIComponent("USA");
    return `https://docs.google.com/forms/d/e/1FAIpQLSfYhWr1a-t4IsvS2FKyEH45HRmHKiPUycvAlFKaD0NugqvfDA/viewform?usp=pp_url&entry.2124017765=${e1}&entry.1522143766=${F0}&entry.1730584532=${P0}&entry.1700407131=${B0}&entry.109484232=${a0}&entry.1209468849=${e}&entry.222866183=${G0}&entry.1042966503=${H1}`
  }, [B, A] = w2.default.useState({}), [V, X] = w2.default.useState("name"), [_, F] = w2.default.useState(""), [g, J] = w2.default.useState(0), [K, Q] = w2.default.useState(null), [E, S] = w2.default.useState(!1), [P, $] = w2.default.useState(!1), [h, O] = w2.default.useState("yes"), T = r1(), V1 = [{
    key: "name",
    label: "Name"
  }, {
    key: "usLocation",
    label: "Are you in the United States? (y/n)"
  }, {
    key: "email",
    label: "Email"
  }, {
    key: "phone",
    label: "Phone Number"
  }, {
    key: "address1",
    label: "Address Line 1"
  }, {
    key: "address2",
    label: "Address Line 2 (optional)"
  }, {
    key: "city",
    label: "City"
  }, {
    key: "state",
    label: "State"
  }, {
    key: "zip",
    label: "ZIP Code"
  }], c = (T1) => {
    let e1 = V1.findIndex((a0) => a0.key === T1),
      F0 = e1 + 1;
    if (e1 === -1) throw new Error("Invalid field state");
    let P0 = V1[F0];
    if (!P0) throw new Error("Invalid field state");
    I0("sticker_form_field_completed", {
      field_name: T1,
      field_index: e1.toString(),
      next_field: P0.key,
      form_progress: `${F0}/${V1.length}`
    }), X(P0.key);
    let B0 = B[P0.key]?.toString() || "";
    F(B0), J(B0.length), Q(null)
  };
  C4((T1, e1) => {
    if (e1.escape || e1.ctrl && (T1 === "c" || T1 === "d")) {
      d();
      return
    }
    if (P && e1.return) {
      d();
      return
    }
    if (V === "usLocation" && !E) {
      if (e1.leftArrow || e1.rightArrow) {
        O((P0) => P0 === "yes" ? "no" : "yes");
        return
      }
      if (e1.return) {
        if (h === "yes") {
          let P0 = {
            ...B,
            [V]: !0
          };
          A(P0), c(V)
        } else $(!0);
        return
      }
      let F0 = T1.toLowerCase();
      if (["y", "yes"].includes(F0)) {
        let P0 = {
          ...B,
          [V]: !0
        };
        A(P0), c(V);
        return
      }
      if (["n", "no"].includes(F0)) {
        $(!0);
        return
      }
    }
    if (!E) {
      if (e1.tab) {
        if (e1.shift) {
          let e = V1.findIndex((i1) => i1.key === V);
          if (e === -1) throw new Error("Invalid field state");
          let G0 = (e - 1 + V1.length) % V1.length,
            H1 = V1[G0];
          if (!H1) throw new Error("Invalid field index");
          X(H1.key);
          let j1 = B[H1.key]?.toString() || "";
          F(j1), J(j1.length), Q(null);
          return
        }
        if (V !== "address2" && V !== "usLocation") {
          let e = _.trim();
          if (Ie(V, e)) {
            Q({
              message: "Please fill out this field before continuing"
            });
            return
          }
          let H1 = {
            ...B,
            [V]: e
          };
          A(H1)
        }
        let F0 = V1.findIndex((e) => e.key === V);
        if (F0 === -1) throw new Error("Invalid field state");
        let P0 = (F0 + 1) % V1.length,
          B0 = V1[P0];
        if (!B0) throw new Error("Invalid field index");
        X(B0.key);
        let a0 = B[B0.key]?.toString() || "";
        F(a0), J(a0.length), Q(null);
        return
      }
    }
    if (E) {
      if (e1.return) I(B)
    }
  });
  let c1 = (T1) => {
      if (!T1 && V === "address2") {
        let B0 = {
          ...B,
          [V]: ""
        };
        A(B0), c(V);
        return
      }
      let e1 = Ie(V, T1);
      if (e1) {
        Q(e1);
        return
      }
      if (V === "state" && B.zip) {
        if (Ie("zip", B.zip)) {
          Q({
            message: "The existing ZIP code is not valid for this state"
          });
          return
        }
      }
      let F0 = {
        ...B,
        [V]: T1
      };
      A(F0), Q(null);
      let P0 = V1.findIndex((B0) => B0.key === V);
      if (P0 === -1) throw new Error("Invalid field state");
      if (P0 < V1.length - 1) c(V);
      else S(!0)
    },
    o1 = V1.find((T1) => T1.key === V);
  if (!o1) throw new Error("Invalid field state");
  if (E && !G) {
    let T1 = w(B);
    Z(T1), I0("sticker_form_summary_reached", {
      fields_completed: Object.keys(B).length.toString()
    }), rR(T1).catch((e1) => {
      X0(e1)
    })
  }
  let a1 = `╔══════════════════════════════╗
║         CLASSIFIED           ║
╚══════════════════════════════╝`,
    f1 = "You've discovered Claude's top secret sticker distribution operation!",
    r = () => w2.default.createElement(w2.default.Fragment, null, w2.default.createElement(p, {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }, w2.default.createElement(u, null, a1), w2.default.createElement(u, {
      bold: !0,
      color: T.claude
    }, f1)), !E && w2.default.createElement(p, {
      justifyContent: "center"
    }, w2.default.createElement(kq2, {
      size: W(),
      cycles: W() === "large" ? 4 : void 0
    }))),
    A1 = () => w2.default.createElement(p, {
      marginLeft: 1
    }, P || E ? w2.default.createElement(u, {
      color: T.suggestion,
      bold: !0
    }, "Press Enter to return to base") : w2.default.createElement(u, {
      color: T.secondaryText
    }, V === "usLocation" ? w2.default.createElement(w2.default.Fragment, null, "←/→ arrows to select · Enter to confirm · Y/N keys also work · Esc Esc to abort mission") : w2.default.createElement(w2.default.Fragment, null, "Enter to continue · Tab/Shift+Tab to navigate · Esc to abort mission"))),
    m1 = () => {
      if (E) return w2.default.createElement(w2.default.Fragment, null, w2.default.createElement(p, null, w2.default.createElement(u, {
        color: T.suggestion,
        bold: !0
      }, "Please review your shipping information:")), w2.default.createElement(p, {
        flexDirection: "column"
      }, V1.filter((T1) => T1.key !== "usLocation").map((T1) => w2.default.createElement(p, {
        key: T1.key,
        marginLeft: 3
      }, w2.default.createElement(u, null, w2.default.createElement(u, {
        bold: !0,
        color: T.text
      }, T1.label, ":"), " ", w2.default.createElement(u, {
        color: !B[T1.key] ? T.secondaryText : T.text
      }, B[T1.key] || "(empty)"))))), w2.default.createElement(p, {
        marginTop: 1,
        marginBottom: 1,
        flexDirection: "column"
      }, w2.default.createElement(p, null, w2.default.createElement(u, {
        color: T.text
      }, "Submit your sticker request:")), w2.default.createElement(p, {
        marginTop: 1
      }, w2.default.createElement(Pg, {
        url: G
      }, w2.default.createElement(u, {
        color: T.success,
        underline: !0
      }, "➜ Click here to open Google Form"))), w2.default.createElement(p, {
        marginTop: 1
      }, w2.default.createElement(u, {
        color: T.secondaryText,
        italic: !0
      }, "(You can still edit your info on the form)"))));
      else if (P) return w2.default.createElement(w2.default.Fragment, null, w2.default.createElement(p, {
        marginY: 1
      }, w2.default.createElement(u, {
        color: T.error,
        bold: !0
      }, "Mission Not Available")), w2.default.createElement(p, {
        flexDirection: "column",
        marginY: 1
      }, w2.default.createElement(u, {
        color: T.text
      }, "We're sorry, but the Claude sticker deployment mission is only available within the United States."), w2.default.createElement(p, {
        marginTop: 1
      }, w2.default.createElement(u, {
        color: T.text
      }, "Future missions may expand to other territories. Stay tuned for updates."))));
      else return w2.default.createElement(w2.default.Fragment, null, w2.default.createElement(p, {
        flexDirection: "column"
      }, w2.default.createElement(u, {
        color: T.text
      }, "Please provide your coordinates for the sticker deployment mission."), w2.default.createElement(u, {
        color: T.secondaryText
      }, "Currently only shipping within the United States.")), w2.default.createElement(p, {
        flexDirection: "column"
      }, w2.default.createElement(p, {
        flexDirection: "row",
        marginLeft: 2
      }, V1.map((T1, e1) => w2.default.createElement(w2.default.Fragment, {
        key: T1.key
      }, w2.default.createElement(u, {
        color: T1.key === V ? T.suggestion : T.secondaryText
      }, T1.key === V ? `[${T1.label}]` : B[T1.key] ? w2.default.createElement(u, {
        color: T.secondaryText
      }, "●") : "○"), e1 < V1.length - 1 && w2.default.createElement(u, null, " ")))), w2.default.createElement(p, {
        marginLeft: 2
      }, w2.default.createElement(u, {
        color: T.secondaryText
      }, "Field ", V1.findIndex((T1) => T1.key === V) + 1, " of", " ", V1.length))), w2.default.createElement(p, {
        flexDirection: "column",
        marginX: 2
      }, V === "usLocation" ? w2.default.createElement(p, {
        flexDirection: "row"
      }, w2.default.createElement(u, {
        color: h === "yes" ? T.success : T.secondaryText,
        bold: !0
      }, h === "yes" ? "●" : "○", " YES"), w2.default.createElement(u, null, " "), w2.default.createElement(u, {
        color: h === "no" ? T.error : T.secondaryText,
        bold: !0
      }, h === "no" ? "●" : "○", " NO")) : w2.default.createElement(mC, {
        value: _,
        onChange: F,
        onSubmit: c1,
        placeholder: o1.label,
        cursorOffset: g,
        onChangeCursorOffset: J,
        columns: 40
      }), K && w2.default.createElement(p, {
        marginTop: 1
      }, w2.default.createElement(u, {
        color: T.error,
        bold: !0
      }, "✗ ", K.message))))
    };
  return w2.default.createElement(p, {
    flexDirection: "column",
    paddingLeft: 1
  }, w2.default.createElement(p, {
    borderColor: T.claude,
    borderStyle: "round",
    flexDirection: "column",
    gap: 1,
    padding: 1,
    paddingLeft: 2,
    width: 100
  }, r(), m1()), A1())
}
// @from(Start 6486024, End 6486069)
pV9 = s.object({
    trigger: s.string()
  })
// @from(Start 6486073, End 6487668)
cq2 = {
    name: "StickerRequest",
    userFacingName: () => "Stickers",
    description: async () => lq2,
    inputSchema: pV9,
    isEnabled: async () => {
      return await NY("tengu_sticker_easter_egg")
    },
    isReadOnly: () => !1,
    needsPermissions: () => !1,
    prompt: async () => bq2,
    async * call(I, d) {
      I0("sticker_request_form_opened", {});
      let G, Z = new Promise((W) => {
        G = (w) => W(w)
      });
      d.setToolJSX?.({
        jsx: de.default.createElement(xq2, {
          onSubmit: (W) => {
            I0("sticker_request_form_completed", {
              has_address: Boolean(W.address1).toString(),
              has_optional_address: Boolean(W.address2).toString()
            }), G(!0), d.setToolJSX?.(null)
          },
          onClose: () => {
            I0("sticker_request_form_cancelled", {}), G(!1), d.setToolJSX?.(null)
          }
        }),
        shouldHidePromptInput: !0
      });
      let C = await Z;
      if (!C) throw d.abortController.abort(), new Error("Sticker request cancelled");
      yield {
        type: "result",
        resultForAssistant: "Sticker request completed! Please tell the user that they will receive stickers in the mail if they have submitted the form!",
        data: {
          success: C
        }
      }
    },
    renderToolUseMessage(I) {
      return ""
    },
    renderToolUseRejectedMessage: (I) => de.default.createElement(u, null, "  ⎿  ", de.default.createElement(u, {
      color: r1().error
    }, "No (Sticker request cancelled)")),
    renderResultForAssistant: (I) => I
  }
// @from(Start 6487674, End 6487759)
pq2 = () => {
    return [_U, G5, A7, Kd, zI, Fd, p7, R8, VH, RI, cq2, VK, ...[]]
  }
// @from(Start 6487763, End 6487950)
to = a2(async (I) => {
    let d = [...pq2(), ...await HQ2()];
    if (I) d.push(mq2);
    let G = await Promise.all(d.map((Z) => Z.isEnabled()));
    return d.filter((Z, C) => G[C])
  })
// @from(Start 6487954, End 6488124)
Tq2 = a2(async () => {
    let I = pq2().filter((G) => G.isReadOnly()),
      d = await Promise.all(I.map((G) => G.isEnabled()));
    return I.filter((G, Z) => d[Z])
  })
// @from(Start 6488169, End 6488185)
U8 = J1(u1(), 1)
// @from(Start 6488227, End 6490182)
function iq2({
  onDone: I
}) {
  let d = r1();
  U8.default.useEffect(() => {
    I0("trust_dialog_shown", {})
  }, []);

  function G(C) {
    let W = I5();
    switch (C) {
      case "yes": {
        let w = iV9() === R0();
        if (I0("trust_dialog_accept", {
            isHomeDir: String(w)
          }), !w) o9({
          ...W,
          hasTrustDialogAccepted: !0
        });
        I();
        break
      }
      case "no": {
        process.exit(1);
        break
      }
    }
  }
  let Z = P6(() => process.exit(0));
  return C4((C, W) => {
    if (W.escape) {
      process.exit(0);
      return
    }
  }), U8.default.createElement(U8.default.Fragment, null, U8.default.createElement(p, {
    flexDirection: "column",
    gap: 1,
    padding: 1,
    borderStyle: "round",
    borderColor: d.warning
  }, U8.default.createElement(u, {
    bold: !0,
    color: d.warning
  }, "Do you trust the files in this folder?"), U8.default.createElement(u, {
    bold: !0
  }, process.cwd()), U8.default.createElement(p, {
    flexDirection: "column",
    gap: 1
  }, U8.default.createElement(u, null, K4, " may read files in this folder. Reading untrusted files may lead to ", K4, " to behave in an unexpected ways."), U8.default.createElement(u, null, "With your permission ", K4, " may execute files in this folder. Executing untrusted code is unsafe."), U8.default.createElement(z_, {
    url: "https://docs.anthropic.com/s/claude-code-security"
  })), U8.default.createElement(Q6, {
    options: [{
      label: "Yes, proceed",
      value: "yes"
    }, {
      label: "No, exit",
      value: "no"
    }],
    onChange: (C) => G(C)
  })), U8.default.createElement(p, {
    marginLeft: 3
  }, U8.default.createElement(u, {
    dimColor: !0
  }, Z.pending ? U8.default.createElement(U8.default.Fragment, null, "Press ", Z.keyName, " again to exit") : U8.default.createElement(U8.default.Fragment, null, "Enter to confirm · Esc to exit"))))
}
// @from(Start 6490187, End 6490204)
HN1 = J1(u1(), 1)
// @from(Start 6490206, End 6494980)
class FN1 extends gu {
  constructor(I, d) {
    var G;
    super(d);
    this._serverInfo = I, this._capabilities = (G = d === null || d === void 0 ? void 0 : d.capabilities) !== null && G !== void 0 ? G : {}, this._instructions = d === null || d === void 0 ? void 0 : d.instructions, this.setRequestHandler(xJ1, (Z) => this._oninitialize(Z)), this.setNotificationHandler(pJ1, () => {
      var Z;
      return (Z = this.oninitialized) === null || Z === void 0 ? void 0 : Z.call(this)
    })
  }
  registerCapabilities(I) {
    if (this.transport) throw new Error("Cannot register capabilities after connecting to transport");
    this._capabilities = Do(this._capabilities, I)
  }
  assertCapabilityForMethod(I) {
    var d, G;
    switch (I) {
      case "sampling/createMessage":
        if (!((d = this._clientCapabilities) === null || d === void 0 ? void 0 : d.sampling)) throw new Error(`Client does not support sampling (required for ${I})`);
        break;
      case "roots/list":
        if (!((G = this._clientCapabilities) === null || G === void 0 ? void 0 : G.roots)) throw new Error(`Client does not support listing roots (required for ${I})`);
        break;
      case "ping":
        break
    }
  }
  assertNotificationCapability(I) {
    switch (I) {
      case "notifications/message":
        if (!this._capabilities.logging) throw new Error(`Server does not support logging (required for ${I})`);
        break;
      case "notifications/resources/updated":
      case "notifications/resources/list_changed":
        if (!this._capabilities.resources) throw new Error(`Server does not support notifying about resources (required for ${I})`);
        break;
      case "notifications/tools/list_changed":
        if (!this._capabilities.tools) throw new Error(`Server does not support notifying of tool list changes (required for ${I})`);
        break;
      case "notifications/prompts/list_changed":
        if (!this._capabilities.prompts) throw new Error(`Server does not support notifying of prompt list changes (required for ${I})`);
        break;
      case "notifications/cancelled":
        break;
      case "notifications/progress":
        break
    }
  }
  assertRequestHandlerCapability(I) {
    switch (I) {
      case "sampling/createMessage":
        if (!this._capabilities.sampling) throw new Error(`Server does not support sampling (required for ${I})`);
        break;
      case "logging/setLevel":
        if (!this._capabilities.logging) throw new Error(`Server does not support logging (required for ${I})`);
        break;
      case "prompts/get":
      case "prompts/list":
        if (!this._capabilities.prompts) throw new Error(`Server does not support prompts (required for ${I})`);
        break;
      case "resources/list":
      case "resources/templates/list":
      case "resources/read":
        if (!this._capabilities.resources) throw new Error(`Server does not support resources (required for ${I})`);
        break;
      case "tools/call":
      case "tools/list":
        if (!this._capabilities.tools) throw new Error(`Server does not support tools (required for ${I})`);
        break;
      case "ping":
      case "initialize":
        break
    }
  }
  async _oninitialize(I) {
    let d = I.params.protocolVersion;
    return this._clientCapabilities = I.params.capabilities, this._clientVersion = I.params.clientInfo, {
      protocolVersion: Go.includes(d) ? d : Yu,
      capabilities: this.getCapabilities(),
      serverInfo: this._serverInfo,
      ...this._instructions && {
        instructions: this._instructions
      }
    }
  }
  getClientCapabilities() {
    return this._clientCapabilities
  }
  getClientVersion() {
    return this._clientVersion
  }
  getCapabilities() {
    return this._capabilities
  }
  async ping() {
    return this.request({
      method: "ping"
    }, HX)
  }
  async createMessage(I, d) {
    return this.request({
      method: "sampling/createMessage",
      params: I
    }, eJ1, d)
  }
  async listRoots(I, d) {
    return this.request({
      method: "roots/list",
      params: I
    }, IK1, d)
  }
  async sendLoggingMessage(I) {
    return this.notification({
      method: "notifications/message",
      params: I
    })
  }
  async sendResourceUpdated(I) {
    return this.notification({
      method: "notifications/resources/updated",
      params: I
    })
  }
  async sendResourceListChanged() {
    return this.notification({
      method: "notifications/resources/list_changed"
    })
  }
  async sendToolListChanged() {
    return this.notification({
      method: "notifications/tools/list_changed"
    })
  }
  async sendPromptListChanged() {
    return this.notification({
      method: "notifications/prompts/list_changed"
    })
  }
}
// @from(Start 6495013, End 6496372)
class gN1 {
  constructor(I = nq2.stdin, d = nq2.stdout) {
    this._stdin = I, this._stdout = d, this._readBuffer = new Ju, this._started = !1, this._ondata = (G) => {
      this._readBuffer.append(G), this.processReadBuffer()
    }, this._onerror = (G) => {
      var Z;
      (Z = this.onerror) === null || Z === void 0 || Z.call(this, G)
    }
  }
  async start() {
    if (this._started) throw new Error("StdioServerTransport already started! If using Server class, note that connect() calls start() automatically.");
    this._started = !0, this._stdin.on("data", this._ondata), this._stdin.on("error", this._onerror)
  }
  processReadBuffer() {
    var I, d;
    while (!0) try {
      let G = this._readBuffer.readMessage();
      if (G === null) break;
      (I = this.onmessage) === null || I === void 0 || I.call(this, G)
    } catch (G) {
      (d = this.onerror) === null || d === void 0 || d.call(this, G)
    }
  }
  async close() {
    var I;
    if (this._stdin.off("data", this._ondata), this._stdin.off("error", this._onerror), this._stdin.listenerCount("data") === 0) this._stdin.pause();
    this._readBuffer.clear(), (I = this.onclose) === null || I === void 0 || I.call(this)
  }
  send(I) {
    return new Promise((d) => {
      let G = Ho(I);
      if (this._stdout.write(G)) d();
      else this._stdout.once("drain", d)
    })
  }
}
// @from(Start 6496377, End 6496415)
rq2 = {
    readFileTimestamps: {}
  }
// @from(Start 6496419, End 6496429)
aq2 = [ts]
// @from(Start 6496433, End 6496470)
Ge = [_U, G5, p7, Fd, A7, Kd, R8, zI]
// @from(Start 6496472, End 6498989)
async function sq2(I) {
  await Uw(I);
  let d = new FN1({
    name: "claude/tengu",
    version: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://docs.anthropic.com/s/claude-code",
      VERSION: "0.2.9"
    }.VERSION
  }, {
    capabilities: {
      tools: {}
    }
  });
  d.setRequestHandler(sJ1, async () => {
    return {
      tools: await Promise.all(Ge.map(async (C) => ({
        ...C,
        description: await C.description(s.object({})),
        inputSchema: KR(C.inputSchema)
      })))
    }
  }), d.setRequestHandler(oJ1, async (Z) => {
    let {
      name: C,
      arguments: W
    } = Z.params, w = Ge.find((B) => B.name === C);
    if (!w) throw new Error(`Tool ${C} not found`);
    try {
      if (!await w.isEnabled()) throw new Error(`Tool ${C} is not enabled`);
      let B = await K6(),
        A = await w.validateInput?.(W ?? {}, {
          abortController: new AbortController,
          options: {
            commands: aq2,
            tools: Ge,
            slowAndCapableModel: B,
            forkNumber: 0,
            messageLogName: "unused",
            maxThinkingTokens: 0
          },
          messageId: void 0,
          readFileTimestamps: rq2.readFileTimestamps
        });
      if (A && !A.result) throw new Error(`Tool ${C} input is invalid: ${A.message}`);
      let V = w.call(W ?? {}, {
          abortController: new AbortController,
          messageId: void 0,
          options: {
            commands: aq2,
            tools: Ge,
            slowAndCapableModel: await K6(),
            forkNumber: 0,
            messageLogName: "unused",
            maxThinkingTokens: 0
          },
          readFileTimestamps: rq2.readFileTimestamps
        }, UH),
        X = await gH(V);
      if (X.type !== "result") throw new Error(`Tool ${C} did not return a result`);
      return {
        content: Array.isArray(X) ? X.map((_) => ({
          type: "text",
          text: "text" in _ ? _.text : JSON.stringify(_)
        })) : [{
          type: "text",
          text: typeof X === "string" ? X : JSON.stringify(X.data)
        }]
      }
    } catch (B) {
      return X0(B), {
        isError: !0,
        content: [{
          type: "text",
          text: `Error: ${B instanceof Error?B.message:String(B)}`
        }]
      }
    }
  });
  async function G() {
    let Z = new gN1;
    await d.connect(Z)
  }
  return await G()
}
// @from(Start 6499072, End 6499088)
rV9 = 2592000000
// @from(Start 6499091, End 6499220)
function aV9(I) {
  let d = I.split(".")[0].replace(/T(\d{2})-(\d{2})-(\d{2})-(\d{3})Z/, "T$1:$2:$3.$4Z");
  return new Date(d)
}
// @from(Start 6499221, End 6499866)
async function sV9() {
  let I = _Y.messages(),
    d = _Y.errors(),
    G = new Date(Date.now() - rV9),
    Z = {
      messages: 0,
      errors: 0
    };
  for (let C of [I, d]) try {
    let W = await oq2.readdir(C);
    for (let w of W) try {
      if (aV9(w) < G)
        if (await oq2.unlink(nV9(C, w)), C === I) Z.messages++;
        else Z.errors++
    } catch (B) {
      X0(`Failed to process file ${w}: ${B instanceof Error?B.message:String(B)}`)
    }
  } catch (W) {
    if (W instanceof Error && "code" in W && W.code !== "ENOENT") X0(`Failed to cleanup directory ${C}: ${W instanceof Error?W.message:String(W)}`)
  }
  return Z
}
// @from(Start 6499868, End 6499914)
function eq2() {
  setImmediate(sV9).unref()
}
// @from(Start 6499919, End 6499990)
tq2 = {
  getCurrentProjectConfig: I5,
  saveCurrentProjectConfig: o9
}
// @from(Start 6499993, End 6500123)
function IR2(I, d = tq2) {
  let G = d.getCurrentProjectConfig();
  return `Allowed tools for ${I}:
${G.allowedTools.join(`
`)}`
}
// @from(Start 6500125, End 6500529)
function dR2(I, d = tq2) {
  let G = d.getCurrentProjectConfig(),
    Z = G.allowedTools.length,
    C = G.allowedTools.filter((W) => W !== I);
  if (Z !== C.length) return G.allowedTools = C, d.saveCurrentProjectConfig(G), {
    success: !0,
    message: `Removed ${I} from the list of approved tools`
  };
  else return {
    success: !1,
    message: `${I} was not in the list of approved tools`
  }
}
// @from(Start 6500534, End 6500551)
dX9 = J1(u1(), 1)
// @from(Start 6500557, End 6500574)
tV9 = J1(u1(), 1)
// @from(Start 6500580, End 6500597)
oV9 = J1(u1(), 1)
// @from(Start 6500603, End 6500620)
IX9 = J1(u1(), 1)
// @from(Start 6500626, End 6500642)
UI = J1(u1(), 1)
// @from(Start 6500690, End 6501980)
function ZX9({
  filePath: I,
  errorDescription: d,
  onExit: G,
  onReset: Z
}) {
  let C = r1();
  C4((B, A) => {
    if (A.escape) G()
  });
  let W = P6(() => process.exit(0)),
    w = (B) => {
      if (B === "exit") G();
      else Z()
    };
  return UI.default.createElement(UI.default.Fragment, null, UI.default.createElement(p, {
    flexDirection: "column",
    borderColor: C.error,
    borderStyle: "round",
    padding: 1,
    width: 70,
    gap: 1
  }, UI.default.createElement(u, {
    bold: !0
  }, "Configuration Error"), UI.default.createElement(p, {
    flexDirection: "column",
    gap: 1
  }, UI.default.createElement(u, null, "The configuration file at ", UI.default.createElement(u, {
    bold: !0
  }, I), " contains invalid JSON."), UI.default.createElement(u, null, d)), UI.default.createElement(p, {
    flexDirection: "column"
  }, UI.default.createElement(u, {
    bold: !0
  }, "Choose an option:"), UI.default.createElement(Q6, {
    options: [{
      label: "Exit and fix manually",
      value: "exit"
    }, {
      label: "Reset with default configuration",
      value: "reset"
    }],
    onChange: w
  }))), W.pending ? UI.default.createElement(u, {
    dimColor: !0
  }, "Press ", W.keyName, " again to exit") : UI.default.createElement(C6, null))
}
// @from(Start 6501982, End 6502369)
function GR2({
  error: I
}) {
  return new Promise((d) => {
    wZ(UI.default.createElement(ZX9, {
      filePath: I.filePath,
      errorDescription: I.message,
      onExit: () => {
        d(), process.exit(1)
      },
      onReset: () => {
        GX9(I.filePath, JSON.stringify(I.defaultConfig, null, 2)), d(), process.exit(0)
      }
    }), {
      exitOnCtrlC: !1
    })
  })
}
// @from(Start 6502396, End 6502756)
function BX9() {
  let I = q2();
  p4({
    ...I,
    hasCompletedOnboarding: !0,
    lastOnboardingVersion: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://docs.anthropic.com/s/claude-code",
      VERSION: "0.2.9"
    }.VERSION
  })
}
// @from(Start 6502757, End 6503248)
async function AX9(I, d) {
  let G = q2();
  if (!G.theme || !G.hasCompletedOnboarding) await $6(), await new Promise((Z) => {
    wZ(gU.default.createElement(ss, {
      onDone: async () => {
        BX9(), await $6(), Z()
      }
    }), {
      exitOnCtrlC: !1
    })
  });
  if (!d && !I) {
    if (!Kl1()) await new Promise((Z) => {
      wZ(gU.default.createElement(iq2, {
        onDone: () => {
          ug1(), Z()
        }
      }), {
        exitOnCtrlC: !1
      })
    })
  }
}
// @from(Start 6503250, End 6503348)
function VX9() {
  let I = q2();
  p4({
    ...I,
    numStartups: (I.numStartups ?? 0) + 1
  })
}
// @from(Start 6503349, End 6504978)
async function FU(I, d) {
  let G = process.version.match(/^v(\d+)\./)?.[1];
  if (!G || parseInt(G) < 18) console.error(j0.bold.red("Error: Claude Code requires Node.js version 18 or higher.")), process.exit(1);
  if (Uw(I), ug1(), d) {
    if (process.platform !== "win32" && typeof process.getuid === "function" && process.getuid() === 0) console.error("--dangerously-skip-permissions cannot be used with root/sudo privileges for security reasons"), process.exit(1);
    let [w, B] = await Promise.all([K2.getIsDocker(), K2.hasInternetAccess()]);
    if (!w || B) console.error(`--dangerously-skip-permissions can only be used in Docker containers with no internet access but got Docker: ${w} and hasInternet: ${B}`), process.exit(1)
  }
  eq2(), no(), j7(), Uz();
  let Z = q2();
  if (Z.iterm2KeyBindingInstalled === !0 && Z.shiftEnterKeyBindingInstalled !== !0) {
    let w = {
      ...Z,
      shiftEnterKeyBindingInstalled: !0
    };
    delete w.iterm2KeyBindingInstalled, p4(w)
  }
  let C = I5();
  if (C.lastCost !== void 0 && C.lastDuration !== void 0) I0("tengu_exit", {
    last_session_cost: String(C.lastCost),
    last_session_api_duration: String(C.lastAPIDuration),
    last_session_duration: String(C.lastDuration),
    last_session_id: C.lastSessionId
  }), o9({
    ...C,
    lastCost: void 0,
    lastAPIDuration: void 0,
    lastDuration: void 0,
    lastSessionId: void 0
  });
  if ((Z.autoUpdaterStatus ?? "not_configured") === "not_configured") I0("tengu_setup_auto_updater_not_configured", {}), await new Promise((w) => {
    wZ(gU.default.createElement(Au, {
      onDone: () => w()
    }))
  })
}
// @from(Start 6504979, End 6505573)
async function XX9() {
  try {
    fl1()
  } catch (G) {
    if (G instanceof Mz) {
      await GR2({
        error: G
      });
      return
    }
  }
  let I = "",
    d = {
      exitOnCtrlC: !1,
      onFlicker() {
        I0("tengu_flicker", {})
      }
    };
  if (!process.stdin.isTTY && !process.env.CI && !process.argv.includes("mcp")) {
    if (I = await _X9(), process.platform !== "win32") try {
      let G = WX9("/dev/tty", "r");
      d = {
        ...d,
        stdin: new CX9(G)
      }
    } catch (G) {
      X0(`Could not open /dev/tty: ${G}`)
    }
  }
  await YX9(I, d)
}