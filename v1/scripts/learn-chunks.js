const { generateText } = require("ai");
const { google } = require('./llm')
const fs = require("fs");
const path = require("path");


const prompts = {
  system:
    "You are a JS and opensource-software specialist, going to explain some uglified JS code.",
  user: (
    code
  ) => `Here are some uglified codes. Read and answer the following questions

1. Is it part of several open source projects code you know? If it is likely, tell me the name of the open source project.
2. The purpose of the code snippet.

Response JSON Format:
{
  "ossProjects": ["$name_1", "$name_2"],
  "purpose": "$description"
}

\`\`\`
${code}
\`\`\``,
};

const chunksDir = path.resolve(__dirname, "../chunks");

(async () => {
  for (const chunk of fs.readdirSync(chunksDir)) {
    const mjsPath = path.resolve(chunksDir, chunk);
    if (!mjsPath.endsWith(".mjs") || chunk === 'cli.chunks.mjs') {
      continue;
    }

    const jsonPath = mjsPath.replace(".mjs", ".json");
    if (fs.existsSync(jsonPath)) {
      continue
    }

    const content = fs.readFileSync(mjsPath, "utf-8");

    const { text } = await generateText({
      model: google("gemini-2.0-flash"),
      messages: [
        {
          role: "system",
          content: prompts.system,
        },
        {
          role: "user",
          content: prompts.user(content),
        },
      ],
      maxRetries: 5
    });

    const struct = parseMessageToJson(text)
    fs.writeFileSync(jsonPath, JSON.stringify(struct, null, 2));
  }
})();

function parseMessageToJson(input) {
  // Regular expression to match JSON code blocks
  const jsonCodeBlockRegex = /```json\n([\s\S]*?)\n```/g;

  // Find all matches for JSON code blocks
  const matches = Array.from(input.matchAll(jsonCodeBlockRegex));

  if (matches.length > 1) {
    throw new Error("Multiple JSON code blocks found in the input string.");
  }

  let jsonString;

  if (matches.length === 1) {
    // Extract JSON content from the code block, trimming whitespace
    jsonString = matches[0][1].trim();
  } else {
    // No JSON code block found, use the entire input
    jsonString = input.trim();
  }

  try {
    // Parse the JSON string into an object
    return JSON.parse(jsonString);
  } catch (error) {
    throw new Error("Failed to parse JSON: " + error + "\n\n" + jsonString);
  }
}

module.exports = {
  google,
  parseMessageToJson,
  prompts
}