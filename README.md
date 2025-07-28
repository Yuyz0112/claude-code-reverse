# Claude Code Reverse Engineering: New Version (July 2025)

When Anthropic released Claude Code (February 2025), I couldn't try it directly because registrations were paused due to high load. So, I implemented a solution to reverse engineer static code using LLMs, which became the first version of this repository. The code for the initial version is currently archived in the [v1](./v1) directory.

> At the time, there was another version by someone else that directly restored the source code based on sourcemaps. However, that repository was later taken down, indicating that Anthropic officially does not support this type of reverse engineering.

Actually, the implementation of v1 was less about reverse engineering Claude Code and more an experiment to explore the limits of "analyzing large uglify JS code using LLMs."

When we were able to actually run Claude Code, we found many simpler and more efficient ways to understand how it works. However, I recently noticed a repository gaining popularity that referenced the v1 approach (it mentioned referring to my v1 solution). Yet, a deeper look reveals that this method isn't effective for analyzing the overall architecture and design.

So, I spent a night exploring a reverse engineering approach based on **runtime behavior and API data** (hereafter referred to as v2). I also created a log visualization tool to help researchers interested in Claude Code analyze the parts they care about.

- If you're interested in the implementation ideas behind v2, please read the following sections in order.
- If you're only interested in the results of the v2 reverse engineering analysis, you can jump directly to the "Analysis Results" section.

## Monkey Patching API Request Code

As an agent, Claude Code ultimately needs to interact with LLM APIs. Therefore, the core idea behind v2 is to ignore Claude Code's complex internal processing and instead focus only on the requests and responses that Claude Code ultimately exchanges with the LLM API in different task scenarios.

If you want to develop an agent as powerful as Claude Code, theoretically, you just need to implement your own code to construct similar API requests under the same task scenarios. This type of code is typically application code, with many different implementation methods and styles. Therefore, I believe implementing it from scratch yourself is the most reasonable approach.

What's truly worth learning from Claude Code, however, is the content of its interactions with the LLM API, as this reflects its understanding of LLMs and agents.

To get the API data, there are many methods, but my current approach involves modifying Claude Code's installed files.

First, locate the `cli.js` file:

```shell
which claude
$PATH_TO_CLAUDE
ls -l $PATH_TO_CLAUDE
$PATH_TO_CLAUDE -> $REAL_PATH/cli.js
```

Next, use `js-beautify` to format `cli.js`:

```shell
mv cli.js cli.bak
js-beautify cli.bak > cli.js
```

Upon examining the formatted `cli.js` and referring to Anthropic's [TS SDK](https://github.com/anthropics/anthropic-sdk-typescript), you'll find that Claude Code uses this SDK for all its requests, specifically the `beta.messages.create` method.

We just need to find the bundled TS SDK code within `cli.js` and monkey patch the `beta.messages.create` method. The TS SDK has some intricacies regarding Promise and Stream encapsulation that I won't detail here; please refer to the actual patch code in [cli.js.patch](./cli.js.patch) for specifics.

This patch implements the following logic:

1.  Create a `messages.log` file every time Claude Code starts.
2.  Record corresponding logs whenever an API request is sent and a response is received.

After making this modification, using Claude Code will generate these logs. Based on this, we can use Claude Code to perform various tasks and analyze the logs to understand how it works.

## Log Visualization

Because each conversational request includes lengthy common prompts and tool definitions, the raw logs are difficult to read.

To accelerate the efficiency of reverse engineering analysis, v2 provides a log parsing tool, **[parser.js](./parser.js)**, and a visualization tool, **[visualize.html](./visualize.html)**.

After opening the visualization tool, you can select a recorded log file to view the entire conversation. The tool attempts to automatically identify which prompts are common prompts (injected by the program) based on their frequency and position within the conversation.

## Analysis Results

> This section on analysis results will be continuously updated as more task scenarios are explored.

The internal processes of Claude Code that have been reverse-engineered include:

- Quota check
- Topic detection
- Core Agent workflow
- Context compaction
- IDE integration
- Todo short-term memory management
- TODO: Task/Sub Agent workflow
- TODO: Summarize previous conversations

The analyzed prompts are recorded in the [prompts directory](./results/prompts/), and the analyzed tool definitions are recorded in the [tools directory](./results/tools/).

Prompts and tool designs both contain many highlights and valuable details worth studying. You can read through them at your leisure.

### Quota Check

Each time Claude Code starts, it performs a lightweight conversation, inputting the text `quota`. This is likely used to check if the quota is sufficient; a successful request indicates enough quota.

It uses the Haiku 3.5 model.

### Topic Detection

Whenever a user inputs content, the LLM uses the [check-new-topic prompt](./results/prompts/check-new-topic.prompt.md) to determine if it's a new topic.

It uses the Haiku 3.5 model.

It's important to note that topic detection only considers the current conversation content, without any context. This makes it a very broad check. Currently, it seems to be used solely for updating the terminal title.

### Core Agent Workflow

When there's sufficient context, messages are continuously appended to the current context.

The core process that defines the Agent's workflow is the [system workflow prompt](./results/prompts/system-workflow.prompt.md). It contains a wealth of detail, so reading it directly is recommended.

Before and after the first user message in a context-based conversation, Claude Code also inserts the [system reminder start prompt](./results/prompts/system-reminder-start.prompt.md) and [system reminder end prompt](./results/prompts/system-reminder-end.prompt.md), respectively. The former dynamically loads information based on the current environment, while the latter checks if any short-term memories managed by the Todo tool need to be loaded.

Currently, it appears all tools are consistently loaded within the core Agent workflow.

It uses the Sonnet 4 model.

### Context Compaction

Triggered manually or when context becomes insufficient, this process compresses the current context into a single block of text, which then serves as the initial information for the next conversation. This effectively conserves context space.

During compaction, the system prompt loads the [system compact prompt](./results/prompts/system-compact.prompt.md), and a [compact prompt](./results/prompts/compact.prompt.md) is appended to the end of the current context, instructing the LLM to complete the compression in a specific format.

It uses the Sonnet 4 model.

### IDE Integration

When Claude Code is used within an IDE environment, it reads the paths of currently open files to provide more context for the conversation.

These file paths are then incorporated into the [IDE open file prompt](./results/prompts/ide-opened-file.prompt.md).

### Todo Short-Term Memory Management

Within the "Task Management" section of the [system workflow prompt](./results/prompts/system-workflow.prompt.md), a task management method based on the `TodoWrite` tool is defined.

When `TodoWrite` executes, it actually creates a JSON file in `~/.claude/todos/` to record the Todos from the current conversation, serving as short-term memory. When a Todo is completed, the model also uses this tool to update the JSON file.

As mentioned in the Core Agent Workflow section, the system reminder end prompt dynamically loads the latest Todo list, enabling the model to keep track of its previous progress.
