# V1 Legacy

[中文版](./README.zh_CN.md)

After Anthropic released [Claude Code](https://www.anthropic.com/news/claude-3-7-sonnet), I immediately wanted to test this "AI agent from the company that's best at coding with AI".

Unfortunately, Claude Code paused registrations due to high traffic load. However, both documentation and installation methods reveal it's built on Node.JS and distributed as an NPM package. Though the code repository isn't open source, JavaScript development means: NO SECRETS!

While Claude Code's uglified code can't be directly fed into LLM context, this repo demonstrates how we reverse-engineered it step-by-step using LLMs with some techniques. More importantly, these methods apply to reversing other JS code too.

- If you wish to use the reverse-engineered code directly for question answering, please read the "How to Use" section.
- If you wish to see the effects of the reverse engineering, please read the "Question Answering Examples" section.
- If you wish to understand the reverse engineering methods and details, please read the "Implementation Details" section.

> https://github.com/dnakov/claude-code
> If you are more interested in the real source code of Claude Code, you can check out this Repo restored based on the source map.

## How to Use

First ensure [Node.JS](https://nodejs.org/en) and [yarn](https://classic.yarnpkg.com/) are installed.

Install dependencies:

```shell
yarn
```

Add `GOOGLE_GENERATIVE_AI_API_KEY`:

```shell
export GOOGLE_GENERATIVE_AI_API_KEY=...
```

### Using Other LLMs

Modify [llm.js](./scripts/llm.js) to use other Vercel AI SDK supported providers.

### Ask Questions

```shell
node scripts/ask.js
```

Enter questions in CLI. The LLM will analyze reversed code to answer.

If you are not satisfied with the results, you can also refer to the "Implementation Details" section and improve from a certain step in the middle.

## Question Answering Examples

<details>

<summary>Provide a comprehensive overview of Claude Code's code architecture</summary>

Based on the provided code fragment, here's a breakdown of the Claude Code architecture, focusing on prompt design, LLM calling, and related logic:

1. Auto-Updater (eK1 function):

   - The `eK1` function checks for updates to the CLI. It fetches the latest version from `zz2()` and compares it to the current version.
   - If an update is available, it triggers the auto-updater (`rs()`).
   - Telemetry events (`I0`) are logged for successful and failed auto-updates.
   - The component displays update status messages to the user.

2. Token Usage Warning (dN1 function):

   - The `dN1` function displays a warning message when the token usage is high, prompting the user to run `/compact`.
   - The token usage threshold is determined by `IN1` and `uA9`, which are based on `tK1` (190000).

3. Main Interactive Component (TA9 function):

   - This is the core component for the interactive CLI.
   - It manages the input field, command suggestions, message history, and tool execution.
   - **Prompt Design:**

     - The component handles both "prompt" and "bash" modes.

     - It supports pasting text from the clipboard (`K1` function), which is then included in the prompt.

     - It uses command suggestions (`nf2`) to help the user construct prompts.

   - **LLM Calling:**

     - The `F1` function sends the user's input to the LLM.

     - It uses an `AbortController` to allow the user to cancel the request.

     - It calls the `Qo` function (likely responsible for LLM interaction) to execute the prompt.

     - The `Qo` function takes `commands`, `tools`, `verbose`, `slowAndCapableModel`, and `maxThinkingTokens` as options.

     - The response from the LLM is streamed back to the user.

   - **Other Logic:**

     - It uses the `ink` library for terminal UI.

     - It manages the input mode (prompt or bash).

     - It handles command history.

     - It displays auto-update status.

     - It tracks token usage.

     - It handles "exit" and "quit" commands.

4. Utility Functions:

   - `sf2`: Creates a string "[Pasted text +{number} lines] "
   - `OA9`: Exits the CLI.
   - `tf2`: Logs a telemetry event for startup time.
   - `Iq2`: Checks the status of the API key.
   - `dq2`: Handles cancelling requests using the escape key.

5. Tool Use Permission Check (mA9 function):

   - The `mA9` function checks whether the user has granted permission to use a tool.
   - It uses the `UH` function (likely for checking configuration) to determine if the tool is already approved.
   - If the tool is not approved, it displays a prompt to the user asking for permission.
   - Telemetry events are logged for granted and rejected tool uses.

6. Message History Management (Wq2 function):

   - The `Wq2` function updates the message history in `yoga` layout.

7. Binary Feedback (Aq2, wq2, Vq2, Xq2 functions):

   - These functions handle binary feedback for LLM responses, allowing users to compare two responses and choose the better one.
   - Telemetry events are logged for feedback decisions.

8. LLM Calling Pipeline (cB function):

   - This function seems to be the core LLM calling pipeline.
   - It takes a list of messages, a system prompt, and a set of tools as input.
   - It calls the `bs` function (likely for constructing the prompt) and the `jA9` function (likely for calling the LLM).
   - It handles tool use by calling the `kA9` or `xA9` functions.
   - It yields messages to the user as they are received.

9. Tool Execution (Yq2, pA9 functions):

   - The `Yq2` function executes a tool.
   - It finds the tool definition based on the tool name.
   - It validates the tool input using the tool's input schema.
   - It calls the tool's `call` method.
   - The `pA9` function handles the actual execution of the tool.
   - It parses the tool input, validates it, and then calls the tool's `call` method.
   - It yields progress messages and result messages to the user.

10. Tool Input Sanitization (cA9 function):

    - The `cA9` function sanitizes the input to certain tools, such as the `Bash` tool.

11. Error Handling (iA9 function):

    - The `iA9` function formats error messages for display to the user.

12. Message Rendering (GN1, nA9 functions):

    - The `GN1` function renders a message in the terminal.
    - The `nA9` function renders tool-specific messages.

13. Binary Feedback UI (\_q2, Dq2 functions):

    - These functions implement the UI for binary feedback, allowing users to compare two LLM responses and choose the better one.

14. Thinking Indicator (nu function):

    - The `nu` function determines the number of "thinking" tokens to use based on the user's input.

15. Main Application Component (kJ1 function):

    - This is the main application component.
    - It manages the overall state of the CLI, including the message history, input mode, and loading state.
    - It calls the `N1` function to send the initial prompt to the LLM.
    - It calls the `F1` function to send subsequent prompts to the LLM.
    - It renders the message history and the input field.

16. MCP (Model Context Protocol) Integration:

    - The code includes extensive logic for interacting with MCP servers.
    - The `FN1` class implements an MCP client.
    - The `gN1` class implements a transport for communicating with MCP servers over stdio.
    - The code includes functions for discovering and connecting to MCP servers.
    - The code includes functions for retrieving prompts and tools from MCP servers.

17. Tool Definitions:

    - The code defines several tools, including `Task` (`_U`), `Architect` (`mq2`), and `StickerRequest` (`cq2`).
    - The `Task` tool allows the LLM to launch a new task.
    - The `Architect` tool allows the LLM to analyze technical requirements and produce implementation plans.
    - The `StickerRequest` tool allows the LLM to request stickers from Anthropic.

18. Configuration:

    - The code uses the `q2` function to access configuration settings.
    - The code includes logic for managing API keys and other settings.

19. Telemetry:

    - The code uses the `I0` function to log telemetry events.

20. Security:

    - The code includes various security measures, such as permission checks and restrictions on certain commands.

In summary, this code fragment reveals a sophisticated architecture for interacting with LLMs, including dynamic prompt construction, streaming support, tool calling, and extensive context management. The code also includes various features for improving the user experience, such as configuration management, error reporting, and auto-updating. The MCP integration suggests that the CLI can be extended with additional functionality via external servers.

</details>

<details>
<summary>What system prompts are defined in Claude Code?</summary>

Based on the provided code, here's what I can tell you about the Claude Code CLI program, focusing on aspects relevant to prompt design, LLM calling, and related logic:

### System Prompts

The code defines several system prompts used in different parts of the application:

1. **`uq2` function (Agent tool prompt):**

   - This function constructs a system prompt for the Agent tool.

   - The prompt instructs the LLM on how to use the available tools effectively, especially when searching for keywords or files.

   - It emphasizes the importance of launching multiple agents concurrently for performance and provides guidelines on how to interact with the agent.

   - It also specifies that the agent cannot use certain tools like `Bash`, `R8`, `p7`, and `RI` and that the agent's outputs should generally be trusted.

2. **`Oq2` variable (Architect tool prompt):**

   - This variable defines the system prompt for the Architect tool.

   - The prompt instructs the LLM to act as an expert software architect, analyzing technical requirements and producing clear, actionable implementation plans.

   - It emphasizes the need for specific and detailed plans that can be carried out by a junior software engineer.

   - It also instructs the LLM not to write the code or use any string modification tools and not to ask the user if it should implement the changes.

3. **`bq2` variable (StickerRequest tool prompt):**

   - This variable defines the system prompt for the StickerRequest tool.

   - The prompt instructs the LLM on when to use the tool, specifically when a user expresses interest in receiving Anthropic or Claude stickers, swag, or merchandise.

   - It provides common trigger phrases to watch for and specifies that the tool handles the entire request process by showing an interactive form to collect shipping information.

   - It also includes a NOTE that the tool should only be used if the user has explicitly asked to send or give them stickers.

4. **`FN1` class (MCP server):**

   - This class handles communication with MCP servers.

   - The `_oninitialize` method returns the server capabilities and instructions to the client.

### LLM Calling Method

The code uses different methods for calling the LLM, depending on the context:

1. **`cB` function (main LLM call):**

   - This function appears to be the primary method for calling the LLM.

   - It takes a list of messages, a system prompt, a tool list, and other options.

   - It calls the LLM and returns the result text.

   - It also handles tool usage and retries.

2. **`sq2` function (MCP server):**

   - This function creates an MCP server that can be used to call the LLM.

   - The MCP server handles requests for tools and prompts.

   - The MCP server calls the LLM and returns the result text.

3. **`gN1` class (stdio transport):**

   - This class handles communication with MCP servers using stdio transport.

   - It reads messages from stdin and writes messages to stdout.

4. **`FN1` class (MCP client):**

   - This class handles communication with MCP servers.

   - It uses the `request` method to send requests to the MCP server and receive responses.

   - It uses the `notification` method to send notifications to the MCP server.

### Other Related Logic

1. **Tool Definitions:**

   - The code defines several tools, including `Task` (`_U`), `Architect` (`mq2`), and `StickerRequest` (`cq2`).

   - Each tool has a `description`, `prompt`, `inputSchema`, `call` function, and other properties.

   - The `prompt` property is used to provide a description of the tool to the LLM.

   - The `inputSchema` property defines the schema for the tool's input parameters.

   - The `call` function is called when the LLM uses the tool.

2. **MCP (Model Context Protocol):**

   - The code includes classes and functions for implementing the Model Context Protocol (`FN1`, `gN1`).

   - The `FN1` class handles communication with an MCP server, including sending requests, receiving responses, and managing notifications.

3. **Feature Flags:**

   - The code uses feature flags to control the availability of certain features.

   - The `NY` function retrieves feature flag configurations from the server.

4. **Telemetry:**

   - The code uses the `I0` function to log telemetry events.

   - The telemetry events are used to track the usage of the CLI program.

5. **Error Handling:**

   - The code includes error handling for LLM calls and other operations.

   - The `ls` function retries LLM calls if they fail with a retriable error.

6. **Code Style:**
   - The code includes logic for enforcing code style guidelines.
7. **Permissions:**

   - The code includes permission checks for tool usage.

   - The `needsPermissions` property in the tool definitions specifies whether the tool requires permissions.

8. **Data Validation:**

   - The code uses the `zod` library to validate the input to the tools.

   - The `inputSchema` property in the tool definitions specifies the schema for the tool's input parameters.

This analysis should give you a solid foundation for understanding the Claude Code CLI program and how it interacts with LLMs. Remember that this is based solely on the provided code fragment, and a full understanding would require analyzing the entire codebase.

</details>

<details>
<summary>How does the /compact command work?</summary>

Based on the provided code, here's an analysis of how the /compact instruction works, focusing on prompt design, LLM calling, and related logic:

- The code confirms that `/compact` is a "local" command (meaning it's handled directly by the CLI and doesn't necessarily involve a separate service).
- The `FC9` object defines the behavior of the `/compact` command.

Prompt Design:

- The core of the `/compact` command is to generate a summary of the conversation.
- The prompt used for summarization is defined within the `FC9.call` function:

      w = p9("Provide a detailed but concise summary of our conversation above. Focus on information that would be helpful for continuing the conversation, including what we did, what we're doing, which files we're working on, and what we're going to do next.")

  This prompt instructs the LLM to:

  - Provide a detailed but concise summary.

  - Focus on helpful information for continuing the conversation.

  - Include what was done, what is currently being done, files being worked on, and what the next steps are.

- The summarized conversation is then used to set the context for future interactions.

LLM Calling Method:

- The `bs` function is used to call the LLM to generate the summary.

      B = await bs(sR([...W, w]), ["You are a helpful AI assistant tasked with summarizing conversations."], 0, d, Z.signal, {
                dangerouslySkipPermissions: !1,
                model: G,
                prependCLISysprompt: !0
              })

  - `sR([...W, w])`: This likely prepares the messages for the LLM. `W` probably represents the existing conversation history, and `w` is the summarization prompt. `sR` is likely a function that formats the messages into the structure expected by the LLM API.

  - `["You are a helpful AI assistant tasked with summarizing conversations."]`: This is the system prompt provided to the LLM, setting its role for this specific call.

  - `0`: This argument is not clear from the context, but it might be related to retry attempts or some other configuration.

  - `d`: Likely represents the available tools.

  - `Z.signal`: An AbortSignal, allowing the operation to be cancelled.

  - `{ dangerouslySkipPermissions: !1, model: G, prependCLISysprompt: !0 }`: Options for the LLM call:

    - `dangerouslySkipPermissions: !1`: Indicates that permission checks should be performed (related to tool usage, perhaps).

    - `model: G`: Specifies the LLM model to use.

    - `prependCLISysprompt: !0`: Indicates that a CLI-specific system prompt should be prepended to the messages.

- The response from the LLM is stored in the `B` variable.

Post-Processing and Context Update:

- After receiving the LLM's response, the code extracts the summary from `B.message.content`.
- Error handling is present to check for invalid responses or error messages.
- The code then clears the existing conversation history (`qx()([])`) and sets up a new conversation with the summary as the initial context:

      C([p9("Use the /compact command to clear the conversation history, and start a new conversation with the summary in context."), B])

  - `C`: This is the `setForkConvoWithMessagesOnTheNextRender` function, which updates the conversation history.

  - `p9("Use the /compact command to clear the conversation history, and start a new conversation with the summary in context.")`: This is a message informing the user that the `/compact` command was used and that the conversation has been summarized.

  - `B`: This is the LLM's response containing the summary.

- The `j7.cache.clear?.()` and `aR.cache.clear?.()` lines clear the caches related to file system information and code style, respectively. This ensures that the context is refreshed after the conversation is compacted.

</details>

<details>
<summary>Why does Claude Code depend on aws-sdk?</summary>

Based on the provided code and the insights from previous code fragments, here's what I can tell you about Claude Code's dependency on aws-sdk:

Why aws-sdk is likely used:

The code doesn't directly show the usage of aws-sdk in this fragment. However, the previous fragments suggest that the dependency on aws-sdk stems from interacting with AWS Bedrock.

Related Code Logic:

1. **LLM Calling Method:**

   - The code uses a Model Context Protocol (MCP) to interact with different LLM providers. The `JJ1` function (from previous fragments) initializes different LLM clients based on environment variables (`b9`, `h9`). If `b9` is true, it initializes a Bedrock client (`yr`). If `h9` is true, it initializes a Vertex AI client (`Xa`). Otherwise, it initializes a default Claude client (`J71`).

2. **Prompt Design:**

   - The code uses a technique to prepend a CLI-specific system prompt (`kK2`) to the main system prompt if `W.prependCLISysprompt` is true.

   - The code includes logic to add context to the prompt using `<context>` tags, based on the `d` argument in `aK2`.

3. **Other Related Logic:**

   - The code defines functions for managing MCP server configurations (`AQ2`, `VQ2`, `XQ2`, `YQ2`).

   - The code defines functions for approving or rejecting MCP servers (`_Q2`).

   - The code includes error handling for MCP server connections and requests.

   - The code uses feature flags (`NY`) to control certain behaviors.

   - The code defines functions to transform messages into the format expected by the API (`nZ9`).

   - The code defines functions to transform user and assistant messages (`cZ9`, `pZ9`).

   - The code defines functions to validate the API key (`nK2`).

   - The code defines functions to handle API errors and return user-friendly error messages (`KJ1`).

   - The code defines functions to calculate the retry delay based on the attempt number and the `retry-after` header (`kZ9`).

   - The code defines functions to determine whether an API call should be retried based on the error status and headers (`xZ9`).

   - The code defines functions to log API call information using the `I0` function.

   - The code defines functions to retrieve beta features using the `fb` function and includes them in the API call.

   - The code defines functions to set the `max_tokens` parameter for the API call based on the model and the requested number of tokens.

   - The code defines functions to include tool descriptions in the API call.

   - The code defines functions to set the `metadata` parameter for the API call, including user ID.

   - The code defines functions to set the `signal` parameter for the API call, allowing it to be aborted.

   - The code defines functions to log API call success and error events using the `I0` function.

   - The code defines functions to calculate the cost of the API call based on token usage and pricing information.

   - The code defines functions to transform the content of the API response using the `hs` function.

   - The code defines functions to return the API response with additional information, such as cost and duration.

   - The code defines functions to handle API errors and return a user-friendly error message (`KJ1`).

   - The code defines functions to transform the messages into the format expected by the API (`nZ9`).

   - The code defines functions to call the LLM without tool calling (`rZ9`).

In summary, this code fragment provides further evidence that Claude Code interacts with different LLM providers, including the potential use of AWS Bedrock, which would explain the aws-sdk dependency. The code also reveals details about prompt construction, API calling, error handling, and pricing.

</details>

## Implementation Details

### Initial Attempt

After executing `npm install -g @anthropic-ai/claude-code` as per the documentation, the `@anthropic-ai/claude-code` NPM package is saved locally. The location varies depending on your Node.js installation method.

Navigating to the NPM package folder reveals the following contents:

```
├── LICENSE.md
├── README.md
├── cli.mjs // here we go
├── node_modules // only @img/sharp
├── package.json
├── vendor // @anthropic-ai/sdk
└── yoga.wasm // Ink(the React-based CLI framework)'s layout engine
```

Our task is "simple": analyze the single file `cli.mjs`.

However, there are challenges:

- All code is processed by [uglify](<https://en.wikipedia.org/wiki/Minification_(programming)>), making it largely unreadable.
- The file is 4.6MB. Attempts to directly analyze it with ChatGPT, Gemini, or Claude resulted in either warnings about excessive content length or UI freezes.

Without LLMs, reverse-engineering the details of such large codebases often takes weeks. With LLM assistance, we can complete this task within an hour, with better results.

The idea of [using LLMs for reverse engineering](https://thejunkland.com/blog/using-llms-to-reverse-javascript-minification) is not new, but conducting this experiment on Claude Code (code tool developed by the AI company most proficient in code) is worthwhile to implement step by step from scratch.

Before starting, remember our approach: LLMs possess strong "lossy compression/decompression" capabilities. Our task is to correct some of the lost information and produce the final, accurate result.

### Code Splitting

Anthropic obviously did not write every line of the 4.6MB minified `cli.mjs`. This file includes all its external dependencies.

We first beautify the code using [js-beautify](https://github.com/beautifier/js-beautify). This adds indentation and line breaks, which, while not greatly improving readability, separates code blocks.

The beautified [cli.beautify.mjs](./cli.beautify.mjs) contains 190,000 lines of code. Our first step is to separate the external dependencies, as their functionality is documented publicly. Our focus is on the non-open-source code of Claude Code.

Here, I started using LLMs to identify external dependencies. These dependencies (e.g., React) are well-known to LLMs, so I assumed they could reverse-identify them from the uglified version through code behavior patterns.

Before that, we need to split the single file into small chunks that fit into the LLM context.

I used [acorn](https://github.com/acornjs/acorn/tree/master/acorn/) to parse the JS file, splitting it by top-level scope code block ASTs (e.g., `FunctionDeclaration`, `ExportNamedDeclaration`, ...). Initially, I split each AST into a separate chunk, but this proved ineffective. For example, React code would be split into dozens of AST chunks, none of which had enough features for LLMs to recognize it. I then switched to length-based splitting, creating a chunk when the cumulative string length of multiple AST chunks exceeded `100_000`.

> If you want to try this yourself, adjust this threshold and observe the differences in recognition.

The splitting code is in [split.js](./scripts/split.js), and the output is in the [chunks](./chunks/) directory as `chunks.$num.mjs` files.

### Identifying External Dependencies

After splitting, each chunk can be placed in the LLM context. I wrote a simple LLM invocation script, [learn-chunks.js](./scripts/learn-chunks.js), to have the LLM identify the chunk's content and return two pieces of information:

1.  The corresponding open-source project name.
2.  The code's purpose.

The results are in the [chunks](./chunks/) directory as `chunks.$num.json` files.

We also generated a [chunks.index.json](./chunks/chunks.index.json) index file to record the mapping between AST block names and chunk files.

At this stage, the LLM extracted the following open-source projects from all chunks:

```
[
 'Sentry',
 'web-streams-polyfill',
 'node-fetch',
 'undici',
 'React',
 'ws',
 'React DevTools',
 'rxjs',
 'aws-sdk-js-v3',
 '@aws-sdk/signature-v4',
 '@smithy/smithy-client',
 'googleapis/gaxios',
 'uuid',
 'google-auth-library-nodejs',
 'highlight.js',
 'dotenv',
 'jsdom',
 'Fabric.js',
 'htmlparser2',
 'sentry-javascript',
 'sharp',
 'commander.js',
 'yoga',
 'Ink',
 'Yoga',
 'ink',
 'vscode',
 'npm',
 'Claude-code',
 'AWS SDK for Javascript',
 'LangChain.js',
 'Zod',
 'Claude Code',
 'Continue Code',
 'Tengu',
 'Marked.js',
 '@anthropic-ai/claude-code',
 'claude-code',
 'statsig-js',
 'Statsig',
 'icu4x'
]
```

Some may be unfamiliar (e.g., Tengu), and some may seem counterintuitive (e.g., LangChain.js). This is where we need human intervention for review and correction.

### Human Correction and Re-Merging

I did not audit all recognition results, as some were obviously correct (e.g., React, Ink), and others were unreasonable but inconsequential (e.g., vscode, Fabric.js). I focused on reviewing recognition results that were unreasonable and relevant to Claude Code's core functionality, also correcting some inconsistent capitalization.

My audit resulted in a renaming map:

```js
{
 "sentry-javascript": "sentry",
 "react devtools": "react",
 "aws-sdk-js-v3": "aws-sdk",
 "@aws-sdk/signature-v4": "aws-sdk",
 "@smithy/smithy-client": "aws-sdk",
 "aws sdk for javascript": "aws-sdk",
 "statsig-js": "statsig",
 "claude-code": "claude-code-1",
 "langchain.js": 'claude-code-2',
 zod: 'claude-code-3',
 "claude code": "claude-code-4",
 "continue code": "claude-code-5",
 tengu: "claude-code-5",
 "@anthropic-ai/claude-code": "claude-code-6",
}[lowerCaseProject] || lowerCaseProject
```

Here, we mapped Claude Code related code to six names: `claude-code-1` to `claude-code-6`. This is because merging these six chunk types would again exceed the LLM context limit.

After correction, we re-merged the code related to the same project based on the recognition results. The results are stored in the [merged-chunks](./merged-chunks/) directory as `$project.mjs` files. This process inevitably involves issues like chunk boundaries spanning two projects, but LLMs excel at ignoring such boundary cases.

During merging, we also generated a [chunks.index.json](./merged-chunks/chunks.index.json) index file, recording the mapping between `chunks.$num.json` and project names.

The merging code is implemented in [merge-again.js](./scripts/merge-again.js).

### Optimizing Merged Claude Code Code

After merging, we have six fragments of Claude Code. These fragments can now be placed in the LLM context for further processing. However, each fragment contains numerous unreadable variable names and functions defined in external code, which might hinder LLM understanding.

Therefore, we used Acorn again to roughly identify undefined variable names in the Claude Code fragments and queried the corresponding variables' origin through the two-layer index file. This allowed us to add comments like this to the top of the Claude Code fragments:

```js
/* Some variables in the code import from the following projects
 * i40, o40, T90, Pj0, t8, rk0, UV1, fD, ac0, h2, n82 import from OSS "aws-sdk"
 * K2, R0, vw, Lb, K4, j0, B41, Pb, w41, A41, pF, I0, I5, t21, gU, Rl1, Ul1, vl1, El1, R51 import from OSS "yoga"
 */
```

I believe this provides some insight for LLMs to understand code behavior.

The implementation of this optimization process is in [improve-merged-chunks.js](./scripts/improve-merged-chunks.js).

### Collecting Answers from Multiple Code Fragments

Finally, we can start asking questions. However, the answers we seek might exist in one or more of the six Claude Code fragments. Since the LLM context cannot simultaneously accommodate all six fragments, I chose to ask each fragment sequentially, accumulating the information collected by the LLM from previous fragments into the context of the next fragment. By the sixth fragment, our context looked like this:

```xml
<system_prompt></system_prompt>

<focus_question></focus_question>

<insight_from_other_code_fragment>
 <insight_from_1><insight_from_1>
 <insight_from_2><insight_from_2>
 <insight_from_3><insight_from_3>
 <insight_from_4><insight_from_4>
 <insight_from_5><insight_from_5>
</insight_from_other_code_fragment>

<current_code_fragment></current_code_fragment>
```

Essentially, we compressed each code fragment into text information more relevant to the current question, allowing the LLM context to ultimately accommodate relevant content spanning multiple code fragments.

Finally, we obtained reverse-engineering results capable of achieving the level of detail shown in the "Question Answering Examples" section.
