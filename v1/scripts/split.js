const acorn = require("acorn");
const walk = require("acorn-walk");
const fs = require("fs");
const path = require("path");

const CHUNK_THRESHOLD = 100_000;
const currentChunk = {
  pathCount: 1,
  content: "",
};

const source = fs.readFileSync(
  path.resolve(__dirname, "../cli.beautify.mjs"),
  "utf-8"
);

const ast = acorn.parse(source, {
  allowHashBang: true,
  sourceType: "module",
  ecmaVersion: "latest",
});

const chunksDir = path.resolve(__dirname, "../chunks");

const chunksEntry = path.resolve(chunksDir, "cli.chunks.mjs");
fs.writeFileSync(chunksEntry, "");

// help Mac users
const namedSet = new Set();
function namer(value) {
  let count = 0;
  let newValue = `${value.toLowerCase()}_${count}`;
  while (namedSet.has(newValue)) {
    count++;
    newValue = `${value.toLowerCase()}_${count}`;
  }
  namedSet.add(newValue);
  return newValue;
}

const chunksIndex = {};

walk.fullAncestor(ast, (node, _state, ancestors) => {
  if (node.type === "Program") {
    return;
  }

  const lastAncestor = ancestors[ancestors.length - 2]; // exclude current
  if (lastAncestor.type !== "Program") {
    // only split top level
    return;
  }

  let splited = false;
  switch (node.type) {
    case "FunctionDeclaration":
      splited = writeWithCheck(getContent(node), node.id.name);
      return;
    case "ExportNamedDeclaration": {
      let exportName = node.specifiers.find((s) => s.type === "ExportSpecifier")
        .exported.name;
      splited = writeWithCheck(getContent(node), exportName);
      return;
    }
    case "VariableDeclaration":
      if (node.declarations.some((decl) => decl.id.type !== "Identifier")) {
        return;
      }
      node.declarations.forEach((decl) => {
        declSplited = writeWithCheck(getContent(decl), decl.id.name);
      });
      return;
    case "ClassDeclaration":
      splited = writeWithCheck(getContent(node), node.id.name);
      return;
    default:
  }

  if (!splited) {
    appendToEntry(node);
  }
});

// flush last chunk
fs.writeFileSync(
  path.resolve(chunksDir, `chunks.${currentChunk.pathCount}.mjs`),
  currentChunk.content
);

fs.writeFileSync(
  path.resolve(chunksDir, `chunks.index.json`),
  JSON.stringify(chunksIndex, null, 2)
);

function getContent(node) {
  return `\n// @from(${getPositionInfo(node)})\n${source.slice(
    node.start,
    node.end
  )}`;
}

function writeWithCheck(content, name) {
  const chunkPath = path.resolve(chunksDir, `chunks.${currentChunk.pathCount}.mjs`);
  if (currentChunk.content.length + content.length > CHUNK_THRESHOLD) {
    // flush
    fs.writeFileSync(chunkPath, currentChunk.content);
    currentChunk.content = "";
    currentChunk.pathCount++;
  }

  // keep small chunks inline
  // if (content.length < 2000) {
  //   return false;
  // }

  if (chunksIndex[name]) {
    throw new Error("name conflict", { name });
  }
  chunksIndex[name] = path.relative(chunksDir, chunkPath);

  currentChunk.content += content;
  return true;
}

function appendToEntry(node) {
  fs.appendFileSync(
    chunksEntry,
    `\n// @from(${getPositionInfo(node)})\n` + getContent(node) + "\n"
  );
}

function getPositionInfo(node) {
  return node.loc
    ? `Ln ${node.loc.start.line}, Col ${node.loc.start.column}`
    : `Start ${node.start}, End ${node.end}`;
}
