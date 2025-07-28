const { generateText } = require("ai");
const { prompts } = require("./learn-chunks");
const { google } = require("./llm");
const fs = require("fs");
const path = require("path");
const marked = require("marked");
const { markedTerminal } = require("marked-terminal");
const readline = require("readline");

marked.use(markedTerminal());

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const mergedChunksDir = path.resolve(__dirname, "../merged-chunks");

(async () => {
  // Prompt the user for a question
  const QUESTION = await new Promise((resolve) => {
    rl.question("Enter your question about the code: ", (answer) => {
      resolve(answer);
    });
  });

  console.log(`Analyzing question: "${QUESTION}"\n`);

  let insight = "";
  let final = "";

  for (const chunk of fs.readdirSync(mergedChunksDir)) {
    if (!chunk.startsWith("improved-")) {
      continue;
    }

    console.log("Processing", chunk);

    prompts.user = (
      code
    ) => `I am analyzing a Node.JS CLI AI program called claude-code, which implements an AI coder by interacting with LLM, using tool calling, ModelContextProtocol and other functions.

The question I want to focus on now is:

<focus_question>
${QUESTION}
</focus_question>

The following is its source code fragment, which has been obfuscated by uglify. Please tell me the code logic that is directly or indirectly related to the problem I want to study.
Only answer me what you read from the code I provided.

The code logic I am more concerned about includes:

1. Its prompt design
2. Its LLM calling method
3. Other related logic

<insight_from_other_code_fragment>
${insight}
</insight_from_other_code_fragment>
  
<current_code_fragment>
${code}
</current_code_fragment>
\`\`\``;

    const { text } = await generateText({
      model: google("gemini-2.0-flash"),
      messages: [
        {
          role: "system",
          content: prompts.system,
        },
        {
          role: "user",
          content: prompts.user(
            fs.readFileSync(path.resolve(mergedChunksDir, chunk), "utf-8")
          ),
        },
      ],
      maxRetries: 5,
    });

    insight += `\n  <insight_from_${chunk}>
${text}
  </insight_from_${chunk}>\n`;
    final = text;
  }

  console.log(`=== Answer ===\n`);
  console.log(marked.parse(final));

  rl.close();
})();
