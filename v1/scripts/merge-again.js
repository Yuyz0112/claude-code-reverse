const fs = require("fs");
const path = require("path");

const chunksDir = path.resolve(__dirname, "../chunks");
const mergedChunksDir = path.resolve(__dirname, "../merged-chunks");

const mergedIndex = {};

function manualFixNaming(project) {
  // fix LLM naming issue
  let lowerCaseProject = project.toLowerCase();

  return (
    {
      "sentry-javascript": "sentry",
      "react devtools": "react",
      "aws-sdk-js-v3": "aws-sdk",
      "@aws-sdk/signature-v4": "aws-sdk",
      "@smithy/smithy-client": "aws-sdk",
      "aws sdk for javascript": "aws-sdk",
      "statsig-js": "statsig",
      // 58
      "claude-code": "claude-code-1",
      // 59
      "langchain.js": 'claude-code-2',
      // 60
      zod: 'claude-code-3',
      // 61
      "claude code": "claude-code-4",
      // 62
      "continue code": "claude-code-5",
      tengu: "claude-code-5",
      // 64
      "@anthropic-ai/claude-code": "claude-code-6",
    }[lowerCaseProject] || lowerCaseProject
  );
}

for (const chunk of fs.readdirSync(chunksDir)) {
  const chunkPath = path.resolve(chunksDir, chunk);
  if (!chunkPath.endsWith(".json")) {
    continue;
  }

  const { ossProjects = [] } = JSON.parse(
    fs.readFileSync(chunkPath, "utf-8")
  );

  for (const prpject of ossProjects) {
    const projectName = manualFixNaming(prpject);
    mergedIndex[projectName] = mergedIndex[projectName] || [];
    mergedIndex[projectName].push(path.relative(chunksDir, chunkPath));
  }
}

for (const project in mergedIndex) {
  let content = "";
  for (const chunkPath of new Set(mergedIndex[project])) {
    content += fs.readFileSync(
      path.resolve(chunksDir, chunkPath.replace(".json", ".mjs")),
      "utf-8"
    );
  }

  fs.writeFileSync(
    path.resolve(mergedChunksDir, `${project.replaceAll("/", "__")}.mjs`),
    content
  );
}

fs.writeFileSync(
  path.resolve(mergedChunksDir, "chunks.index.json"),
  JSON.stringify(Object.keys(mergedIndex).reduce((prev, cur) => {
    for (const chunk of mergedIndex[cur]) {
      prev[chunk] = cur;
    }
    return prev;
  }, {}), null, 2)
);
