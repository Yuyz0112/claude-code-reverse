const fs = require("fs");
const path = require("path");
const acorn = require("acorn-loose");
const walk = require("acorn-walk");

const chunksDir = path.resolve(__dirname, "../chunks");
const mergedChunksDir = path.resolve(__dirname, "../merged-chunks");
const chunksIndex = JSON.parse(
  fs.readFileSync(path.resolve(chunksDir, "chunks.index.json"), "utf-8")
);
const mergedIndex = JSON.parse(
  fs.readFileSync(path.resolve(mergedChunksDir, "chunks.index.json"), "utf-8")
);

for (const chunk of fs.readdirSync(mergedChunksDir)) {
  if (chunk.startsWith("claude-code-")) {
    const content = fs.readFileSync(
      path.resolve(mergedChunksDir, chunk),
      "utf-8"
    );

    let depsSummary =
      "/* Some variables in the code import from the following projects\n";
    const deps = {};
    for (const v of roughFindUndefinedVariables(content)) {
      if (chunksIndex[v]) {
        const project = mergedIndex[chunksIndex[v].replace(".mjs", ".json")];
        if (project.startsWith("claude-code")) {
          continue;
        }
        deps[project] = deps[project] || [];
        deps[project].push(v);
      }
    }
    for (const project in deps) {
      depsSummary += `* ${deps[project].join(
        ", "
      )} import from OSS "${project}"\n`;
    }
    depsSummary += "*/";

    fs.writeFileSync(
      path.resolve(mergedChunksDir, `improved-${chunk}`),
      `${depsSummary}\n${content}`
    );
  }
}

function roughFindUndefinedVariables(code) {
  const ast = acorn.parse(code, {
    allowHashBang: true,
    sourceType: "module",
    ecmaVersion: "latest",
  });

  const defined = new Set();
  const used = new Set();

  walk.simple(ast, {
    VariableDeclarator(node) {
      if (node.id.type === "Identifier") {
        defined.add(node.id.name);
      }
    },
    FunctionDeclaration(node) {
      if (node.id && node.id.type === "Identifier") {
        defined.add(node.id.name);
      }
    },
    ClassExpression(node) {
      if (node.id && node.id.type === "Identifier") {
        defined.add(node.id.name);
      }
    },
    Identifier(node) {
      used.add(node.name);
    },
  });

  const undefinedVars = [...used].filter((name) => !defined.has(name));
  return undefinedVars;
}
