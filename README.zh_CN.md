# Claude Code 逆向工程，2025-07 新版

在 Anthropic 发布 Claude Code（2025 年 2 月），因为当时负载过高暂停注册，无法直接体验，所以我实现了一套使用 LLM 逆向分析静态代码的方案，也就是这个仓库的第一版。
目前第一版的代码归档在了 [v1](./v1) 目录下。

> 在当时，还有一个其他人基于 sourcemap 直接还原出源代码的版本，但后来该仓库被下架，说明 Anthropic 官方并不支持该种逆向方式。

实际上 v1 版本的实现与其说是为了逆向 Claude Code，其实更像是一个探索「基于 LLM 分析大型 uglify JS 代码」能力上限的实验。在**有条件实际运行 Claude Code**的时候，其实我们还有更多简单、高效的方法探索 Claude Code 的工作方式。但我发现最近一个参考 v1 版本思路的 Repo 广为流传（仓库中也提到了参考了我的 v1 方案），但深入去看，就会发现这种方法对于分析整体架构与设计并不有效。

所以我用了一个晚上的时间探索了基于行为与 API 数据的动态逆向分析方法（以下简称 v2），并制作了日志可视化工具，便于对 Claude Code 感兴趣的研究者自行分析自己感兴趣的部分。

- 如果你关心 v2 的实现思路，请按顺序阅读以下章节。
- 如果你只关心 v2 逆向分析的结果，可以直接从「分析结果」章节开始阅读。

## Monkey Patch API 请求代码

作为一个 Agent，Claude Code 最终也需要和 LLM API 交互。所以 v2 的核心思路是忽略 Claude Code 内部复杂的处理流程，只关注在不同的任务场景下，Claude Code 最终与 LLM API 交互的 request 和 response。

如果你想开发出一个与 Claude Code 一样强大的 Agent，那么理论上你只需要自行实现代码，在同样的任务场景下构建出类似的 API request 即可。这类代码通常是工程代码，有许多种不同的实现方式与代码风格，所以我认为逆向这部分的价值不大，自行从头实现是最合理的方法；而与 LLM API 交互的内容则体现了对 LLM、Agent 的理解，只最值得像 Claude Code 学习的。

要获取 API 数据也有很多方式，我目前的方式是修改 Claude Code 安装后的代码。

首先找到 cli.js 文件：

```shell
which claude
$PATH_TO_CLAUDE
ls -l $PATH_TO_CLAUDE
$PATH_TO_CLAUDE -> $REAL_PATH/cli.js
```

然后通过 js-beautify 将 cli.js 做基本的格式美化：

```shell
mv cli.js cli.bak
js-beautify cli.bak > cli.js
```

观察格式美化之后的 cli.js，以及参考 Anthropic 的 [TS SDK](https://github.com/anthropics/anthropic-sdk-typescript)，我们会发现 Claude Code 均使用这个 SDK 发送请求，并且使用的都是其中的 `beta.messages.create` 方法。

我们只需要在 cli.js 中找到打包在内的 TS SDK 代码，并且 monkey patch `beta.messages.create` 方法即可。此处 TS SDK 对于 Promise、Stream 的封装还有一些细节，不展开描述了，实际 patch 代码请参考 [cli.js.patch](./cli.js.patch)。

在这个 patch 中，实现了以下逻辑：

1. 每次 Claude Code 启动的时候，创建 `messages.log` 文件。
2. 每次 API 请求发出和返回的时候，记录对应的 log。

做完这个修改之后，再使用 Claude Code，就会产生对应的 log。在此基础上，我们就可以使用 Claude Code 执行不同的任务，通过分析 log 来理解它的工作方式了。

## log 可视化

由于每次对话请求都会包含较长的通用 prompt 以及 tools definitions，所以原始的 log 不易阅读。

为了加快逆向分析的效率，v2 版本提供了日志解析工具 [parser.js](./parser.js) 和可视化工具 [visualize.html](./visualize.html)。

打开可视化工具之后，选择一个记录好的 log 文件，就可以查看本次对话的全过程。在工具中，会根据对话中内容出现的频率和位置，尝试自动解析哪些 prompt 是通用 prompt（由程序注入）。

## 分析结果

> 分析结果的部分随着探索的任务场景增多，还会持续更新。

已经逆向分析出的 Claude Code 内部流程包括：

- quota 查询
- topic 检测
- 核心 Agent 流程
- compact
- IDE 集成
- Todo 短时记忆管理
- TODO: Task/Sub Agent 流程
- TODO: 总结过往对话

分析出的 prompt 记录在 [prompts 目录](./results/prompts/)，分析出的 tools definitions 记录在 [tools 目录](./results/tools/)。

prompts 与 tools 的设计中都有不少亮点和值得学习的细节，自行阅读即可。

### quota 查询

每次启动的时候会执行一个轻量级对话，输入文本 `quota`，可能是用于检测 quota 是否足够，请求成功代表足够。

使用的是 Haiku 3.5 模型。

### topic 检测

每次 user 输入内容时，会使用 [check-new-topic prompt](./results/prompts/check-new-topic.prompt.md) 由 LLM 判断是否是一个新的 topic。

使用的是 Haiku 3.5 模型。

需要注意的是，topic 检测仅传入当前对话内容，不包含上下文，所以是一个很宽泛的检测。目前看，也仅用于更新 terminal 标题。

### 核心 Agent 流程

当 context 足够时，会持续在当前 context 中不断 append message。

定义 Agent 工作流程的核心流程的是 [system workflow prompt](./results/prompts/system-workflow.prompt.md)，里面包含了大量细节，建议具体阅读。

在 context 对话的第一条 user message 前后，Claude Code 还会分别插入 [system reminder start prompt](./results/prompts/system-reminder-start.prompt.md) 和 [system reminder end prompt](./results/prompts/system-reminder-end.prompt.md)。前者会根据当前环境，动态加载部分信息，后者则会检测是否有基于 Todo 工具管理的短时记忆需要被加载。

目前看，在核心 Agent 流程中所有的 tools 都会始终被加载。

使用的是 Sonnet 4 模型。

### compact

手动触发或在 context 不足时触发，会将当前上下文压缩为一个文本，并作为下一次对话的初始信息，起到 context 空间压缩的效果。

执行压缩时，system prompt 会加载 [system compact prompt](./results/prompts/system-compact.prompt.md)，并在当前 context 的末尾增加 [compact prompt](./results/prompts/compact.prompt.md) 指导 LLM 基于特定的格式完成压缩。

使用的是 Sonnet 4 模型。

### IDE 集成

在 IDE 环境中使用 Claude Code 时，它会读取当前打开的文件地址，为对话提供更多的上下文。

文件地址会被放入 [IDE open file prompt](./results/prompts/ide-opened-file.prompt.md) 中。

### Todo 短时记忆管理

在 [system workflow prompt](./results/prompts/system-workflow.prompt.md) 的「Task Management」章节中，定义了基于 TodoWrite 工具的任务管理方法。

TodoWrite 执行时会实际向 `~/.claude/todos/` 创建一个 JSON 文件，记录当前对话中的 Todo，作为短时记忆。Todo 完成时，模型也会使用该工具更新 JSON 文件。

在核心 Agent 流程中已经讲到，system reminder end prompt 会实时加载最新的 Todo 列表，促使模型跟随之前的进度。
