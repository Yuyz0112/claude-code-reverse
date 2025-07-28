
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