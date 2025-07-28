# V1 旧版

Anthropic 发布 [Claude Code](https://www.anthropic.com/news/claude-3-7-sonnet) 之后我第一时间想尝试一下，看看「最会用 AI 写代码的」AI 公司做的 AI agent 会是什么样子。

但是可惜从下午开始 Claude Code 就因为负载过高暂停注册。不过从文档和安装方式上都可以看出 Claude Code 基于 Node.JS 开发，以 NPM package 的形式发布。虽然对应的代码仓库中没有开源代码，但是用 JS 开发就意味着——没有秘密！

当然 Claude Code 打包并 Uglify 之后的代码没法直接传入 LLM context 中，所以在这个 Repo 中你会看到我们如何一步步用 LLM + 一点点技巧完成 Claude Code 的源代码逆向分析，进一步从 LLM 中获取你所想知道 Claude Code 设计与代码细节。更重要的是这里面的方法也适用于逆向其他 JS 代码。

- 如果你希望直接使用逆向之后的代码进行问答，请阅读「如何使用」章节。
- 如果你希望查看逆向之后的效果，请阅读「问答示例」章节。
- 如果你希望了解逆向的方法与细节，请阅读「实现细节」章节。

> https://github.com/dnakov/claude-code
>
> 如果对 Claude Code 的真实源代码更感兴趣，可以查看这个基于 source map 还原出来的 Repo。

> [B 站讲解视频](https://www.bilibili.com/video/BV1cKPjeUEPN/)

## 如何使用

首先确保你的环境中安装了 [Node.JS](https://nodejs.org/en) 和 [yarn](https://classic.yarnpkg.com/)。

安装依赖：

```shell
yarn
```

添加 `GOOGLE_GENERATIVE_AI_API_KEY` API key 以使用 Gemini API。

```shell
export GOOGLE_GENERATIVE_AI_API_KEY=...
```

### 使用其他 LLM

你可以在 [llm.js](https://github.com/Yuyz0112/claude-code-reverse/blob/main/scripts/llm.js) 使用其他的 Vercel AI SDK 支持的 provider。

### 提问

```shell
node scripts/ask.js
```

运行之后，请在 CLI 中输入你的问题，回车后 LLM 将开始从逆向后的代码中分析并给出你想要的答案。

如果对结果不满意，你也可以参考「实现细节」章节，从中间的某一步开始进行改进。

## 问答示例

<details>

<summary>完整梳理一下 Claude Code 的代码架构</summary>

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

<summary>Claude Code 中定义了哪些 system prompt</summary>

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

<summary>/compact 指令是怎么工作的</summary>

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

<summary>Claude Code 为什么会依赖 aws-sdk</summary>

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

## 实现细节

### 首次尝试

在按照文档执行 `npm install -g @anthropic-ai/claude-code` 之后，`@anthropic-ai/claude-code` 的 NPM 包会保存到本地，根据你的 Node.js 安装方式不同，位置也略有不同。

进入 NPM 包文件夹，包含的内容如下：

```
├── LICENSE.md
├── README.md
├── cli.mjs // here we go
├── node_modules // only @img/sharp
├── package.json
├── vendor // @anthropic-ai/sdk
└── yoga.wasm // Ink(the React-based CLI framework)'s layout engine
```

我们的任务非常「简单」，只需要分析 `cli.mjs` 这一个文件即可。

但问题是：

- 所有的代码都经过 [uglify](<https://en.wikipedia.org/wiki/Minification_(programming)>) 处理，使得代码已经不太可读。
- 文件有 4.6MB 大，我尝试放入 ChatGPT、Gemini、Claude 直接分析，有的提示我内容过长，有的则直接将 UI 界面卡住。

没有 LLM 时，逆向分析这样巨大的代码中的细节，往往需要数周的时间，但在 LLM 的帮助下，我们会在一小时内完成这项工作，并且结果比以往更好。

[使用 LLM 进行逆向的思路](https://thejunkland.com/blog/using-llms-to-reverse-javascript-minification)并不新鲜，但考虑到能在 Claude Code（最会写代码的 AI 公司开发的代码工具）进行这项实验，还是值得我们从零开始一步步实现一遍。

在正式开始之前记住我们的思路：LLM 具有极强的「有损压缩/解压缩」能力，而我们要做的是从它损失的部分中做一点纠正，完成最终的正确结果。

### 分割代码

显然 Anthropic 没有开发 `cli.mjs` 4.6MB 压缩后代码中的每一行，这个代码文件还包含了它的所有外部依赖代码。

我们首先使用 [js-beautify](https://github.com/beautifier/js-beautify) 将代码进行美化，它的作用是为代码添加缩进、换行，虽然不能提升多少可读性，但是能让代码区块更分离。

美化之后的 [cli.beautify.mjs](https://github.com/Yuyz0112/claude-code-reverse/blob/main/cli.beautify.mjs) 有多达 19 万行代码。我们首先要做的是从这些代码中分离出外部依赖代码，因为他们的功能我们可以通过公开的文档了解，逆向分析的重点是 Claude Code 未开源的代码。

在这里我开始使用 LLM，让它识别代码中的外部依赖。这些外部依赖（比如 React）对于 LLM 来说是十分熟悉的知识，因此我认为它有从 uglify 之后的版本通过一些代码行为特征反向识别它们的能力。

但在此之前，我们还是需要把单个代码文件切分为 LLM context 可以容纳的那小。

在这里我使用了 [acorn](https://github.com/acornjs/acorn/tree/master/acorn/) 解析 JS 文件，按照 top-level scope 中的代码 block AST（例如 `FunctionDeclaration`, `ExportNamedDeclaration`, ...）进行分割。起初我选择每个 AST 一个代码分割文件（chunk），但后来发现这样并不好，同样以 React 为例，一份 React 代码可能被切分为数十个 AST chunk，这导致任何一个 chunk 都不具备足够的特征让 LLM 认出它。之后我改为了按照长度切分，当多个 AST chunk 的字符串长度累加超过 `100_000` 时进行一次切分。

> 如果你想自己动手试试。可以调整这个阈值，观察识别效果的差异。

切分的代码在 [split.js](https://github.com/Yuyz0112/claude-code-reverse/blob/main/scripts/split.js) 中，切分的产物是 [chunks](https://github.com/Yuyz0112/claude-code-reverse/blob/main/chunks/) 目录中的 `chunks.$num.mjs` 文件。

### 识别外部依赖

切分之后，每个 chunk 都可以放入 LLM context 中，我们编写了一个简单的 LLM 调用脚本 [learn-chunks.js](https://github.com/Yuyz0112/claude-code-reverse/blob/main/scripts/learn-chunks.js) 让 LLM 识别 chunk 的内容，并返回两个信息：

1. 代码中对应的开源项目名称
2. 代码的意图

识别的结果在 [chunks](https://github.com/Yuyz0112/claude-code-reverse/blob/main/chunks/) 目录中的 `chunks.$num.json` 文件中。

我们还额外生成了一个 [chunks.index.json](https://github.com/Yuyz0112/claude-code-reverse/blob/main/chunks/chunks.index.json) 索引文件，用于记录每个 chunk 文件中 AST block 名称与 chunk 文件的映射关系。

在这个阶段，LLM 从所有 chunk 中提取出了以下开源项目：

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

有一些你很可能没有见过（例如 Tengu），有一些你觉得不符合直觉（例如 LangChain.js），这就是我们需要人为介入，做一些审查与纠错的阶段了。

### 人为纠错与重新合并

实际上我没有审计所有的识别结果，因为有的显然正确（例如 React、Ink），有的不合理但无关紧要（例如 vscode、Farbic.js），我将重点放在了与 Claude Code 核心功能相关且不合理的识别结果审查上，顺带纠正了几个大小写不统一的问题。

我的审计结果最终体现为一个用于重命名的映射：

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

这里我们将 Claude Code 相关的代码映射到了 `claude-code-1` ~ `claude-code-6` 6 个命名中，是因为如果将它们 6 类 chunk 再次合并到一起，又会超过 LLM context 的上限。

纠错之后，我们按照识别结果重新将同一个项目相关的代码按项目进行合并，结果保存在 [merged-chunks](https://github.com/Yuyz0112/claude-code-reverse/blob/main/merged-chunks/) 目录的 `$project.mjs` 文件中。这个过程肯定存在 chunk 的边界跨越两个项目之类的问题，但 LLM 很擅长忽略这些边界情况。

合并时我们同样生成了 [chunks.index.json](https://github.com/Yuyz0112/claude-code-reverse/blob/main/merged-chunks/chunks.index.json) 索引文件，记录 `chunks.$num.json` 与项目名称的映射关系。

合并的代码实现在 [merge-again.js](https://github.com/Yuyz0112/claude-code-reverse/blob/main/scripts/merge-again.js) 中。

### 优化合并后的 Claude Code 代码

在合并之后，我们得到了 Claude Code 代码的 6 个碎片，这些代码已经可以放入 LLM context 中进行下一步处理，但考虑到切分之后每个代码碎片中都包含大量命名不可读的变量、函数是定义在外部代码中的，这可能会让 LLM 的理解结果不及预期。

所以我们再次使用 acorn 粗略识别了 Claude Code 代码碎片中的未定义变量名，并通过两层索引文件查询对应的变量是从哪个外部依赖中引入的。这让我们可以在 Claude Code 碎片顶部添加这样的注释：

```js
/* Some variables in the code import from the following projects
 * i40, o40, T90, Pj0, t8, rk0, UV1, fD, ac0, h2, n82 import from OSS "aws-sdk"
 * K2, R0, vw, Lb, K4, j0, B41, Pb, w41, A41, pF, I0, I5, t21, gU, Rl1, Ul1, vl1, El1, R51 import from OSS "yoga"
 */
```

我详细这对 LLM 理解代码行为会有一些启发。

这一优化过程的实现在 [improve-merged-chunks.js](https://github.com/Yuyz0112/claude-code-reverse/blob/main/scripts/improve-merged-chunks.js) 中。

### 在多个代码碎片中收集答案

终于，我们可以开始问答了。但我们想知道的答案可能存在于 Claude Code 6 个代码碎片的 1 个或多个中，LLM context 又不能同时容纳 6 个代码碎片，所以我选择将问题依次提给每一个代码碎片，并将 LLM 在之前代码碎片中收集到的信息累积到下一个碎片的提问上下文中，到第 6 个碎片时，我们的上下文变成了这样：

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

可以理解为我们把每个代码碎片压缩为了与当前问题更相关的文本信息，使 LLM context 最终容纳了跨越多个代码碎片的相关内容。

最终我们就得到了能够完成「问答示例」章节中所展现出的细节水平的逆向分析结果。
