
// @from(Start 6313259, End 6316990)
class Pu {
  options;
  parser;
  constructor(I) {
    this.options = I || YK
  }
  space(I) {
    return ""
  }
  code({
    text: I,
    lang: d,
    escaped: G
  }) {
    let Z = (d || "").match(fI.notSpaceStart)?.[0],
      C = I.replace(fI.endingNewline, "") + `
`;
    if (!Z) return "<pre><code>" + (G ? C : bB(C, !0)) + `</code></pre>
`;
    return '<pre><code class="language-' + bB(Z) + '">' + (G ? C : bB(C, !0)) + `</code></pre>
`
  }
  blockquote({
    tokens: I
  }) {
    return `<blockquote>
${this.parser.parse(I)}</blockquote>
`
  }
  html({
    text: I
  }) {
    return I
  }
  heading({
    tokens: I,
    depth: d
  }) {
    return `<h${d}>${this.parser.parseInline(I)}</h${d}>
`
  }
  hr(I) {
    return `<hr>
`
  }
  list(I) {
    let {
      ordered: d,
      start: G
    } = I, Z = "";
    for (let w = 0; w < I.items.length; w++) {
      let B = I.items[w];
      Z += this.listitem(B)
    }
    let C = d ? "ol" : "ul",
      W = d && G !== 1 ? ' start="' + G + '"' : "";
    return "<" + C + W + `>
` + Z + "</" + C + `>
`
  }
  listitem(I) {
    let d = "";
    if (I.task) {
      let G = this.checkbox({
        checked: !!I.checked
      });
      if (I.loose)
        if (I.tokens[0]?.type === "paragraph") {
          if (I.tokens[0].text = G + " " + I.tokens[0].text, I.tokens[0].tokens && I.tokens[0].tokens.length > 0 && I.tokens[0].tokens[0].type === "text") I.tokens[0].tokens[0].text = G + " " + bB(I.tokens[0].tokens[0].text), I.tokens[0].tokens[0].escaped = !0
        } else I.tokens.unshift({
          type: "text",
          raw: G + " ",
          text: G + " ",
          escaped: !0
        });
      else d += G + " "
    }
    return d += this.parser.parse(I.tokens, !!I.loose), `<li>${d}</li>
`
  }
  checkbox({
    checked: I
  }) {
    return "<input " + (I ? 'checked="" ' : "") + 'disabled="" type="checkbox">'
  }
  paragraph({
    tokens: I
  }) {
    return `<p>${this.parser.parseInline(I)}</p>
`
  }
  table(I) {
    let d = "",
      G = "";
    for (let C = 0; C < I.header.length; C++) G += this.tablecell(I.header[C]);
    d += this.tablerow({
      text: G
    });
    let Z = "";
    for (let C = 0; C < I.rows.length; C++) {
      let W = I.rows[C];
      G = "";
      for (let w = 0; w < W.length; w++) G += this.tablecell(W[w]);
      Z += this.tablerow({
        text: G
      })
    }
    if (Z) Z = `<tbody>${Z}</tbody>`;
    return `<table>
<thead>
` + d + `</thead>
` + Z + `</table>
`
  }
  tablerow({
    text: I
  }) {
    return `<tr>
${I}</tr>
`
  }
  tablecell(I) {
    let d = this.parser.parseInline(I.tokens),
      G = I.header ? "th" : "td";
    return (I.align ? `<${G} align="${I.align}">` : `<${G}>`) + d + `</${G}>
`
  }
  strong({
    tokens: I
  }) {
    return `<strong>${this.parser.parseInline(I)}</strong>`
  }
  em({
    tokens: I
  }) {
    return `<em>${this.parser.parseInline(I)}</em>`
  }
  codespan({
    text: I
  }) {
    return `<code>${bB(I,!0)}</code>`
  }
  br(I) {
    return "<br>"
  }
  del({
    tokens: I
  }) {
    return `<del>${this.parser.parseInline(I)}</del>`
  }
  link({
    href: I,
    title: d,
    tokens: G
  }) {
    let Z = this.parser.parseInline(G),
      C = mQ2(I);
    if (C === null) return Z;
    I = C;
    let W = '<a href="' + I + '"';
    if (d) W += ' title="' + bB(d) + '"';
    return W += ">" + Z + "</a>", W
  }
  image({
    href: I,
    title: d,
    text: G
  }) {
    let Z = mQ2(I);
    if (Z === null) return bB(G);
    I = Z;
    let C = `<img src="${I}" alt="${G}"`;
    if (d) C += ` title="${bB(d)}"`;
    return C += ">", C
  }
  text(I) {
    return "tokens" in I && I.tokens ? this.parser.parseInline(I.tokens) : ("escaped" in I) && I.escaped ? I.text : bB(I.text)
  }
}
// @from(Start 6316991, End 6317404)
class Po {
  strong({
    text: I
  }) {
    return I
  }
  em({
    text: I
  }) {
    return I
  }
  codespan({
    text: I
  }) {
    return I
  }
  del({
    text: I
  }) {
    return I
  }
  html({
    text: I
  }) {
    return I
  }
  text({
    text: I
  }) {
    return I
  }
  link({
    text: I
  }) {
    return "" + I
  }
  image({
    text: I
  }) {
    return "" + I
  }
  br() {
    return ""
  }
}
// @from(Start 6317405, End 6321416)
class aZ {
  options;
  renderer;
  textRenderer;
  constructor(I) {
    this.options = I || YK, this.options.renderer = this.options.renderer || new Pu, this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Po
  }
  static parse(I, d) {
    return new aZ(d).parse(I)
  }
  static parseInline(I, d) {
    return new aZ(d).parseInline(I)
  }
  parse(I, d = !0) {
    let G = "";
    for (let Z = 0; Z < I.length; Z++) {
      let C = I[Z];
      if (this.options.extensions?.renderers?.[C.type]) {
        let w = C,
          B = this.options.extensions.renderers[w.type].call({
            parser: this
          }, w);
        if (B !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(w.type)) {
          G += B || "";
          continue
        }
      }
      let W = C;
      switch (W.type) {
        case "space": {
          G += this.renderer.space(W);
          continue
        }
        case "hr": {
          G += this.renderer.hr(W);
          continue
        }
        case "heading": {
          G += this.renderer.heading(W);
          continue
        }
        case "code": {
          G += this.renderer.code(W);
          continue
        }
        case "table": {
          G += this.renderer.table(W);
          continue
        }
        case "blockquote": {
          G += this.renderer.blockquote(W);
          continue
        }
        case "list": {
          G += this.renderer.list(W);
          continue
        }
        case "html": {
          G += this.renderer.html(W);
          continue
        }
        case "paragraph": {
          G += this.renderer.paragraph(W);
          continue
        }
        case "text": {
          let w = W,
            B = this.renderer.text(w);
          while (Z + 1 < I.length && I[Z + 1].type === "text") w = I[++Z], B += `
` + this.renderer.text(w);
          if (d) G += this.renderer.paragraph({
            type: "paragraph",
            raw: B,
            text: B,
            tokens: [{
              type: "text",
              raw: B,
              text: B,
              escaped: !0
            }]
          });
          else G += B;
          continue
        }
        default: {
          let w = 'Token with "' + W.type + '" type was not found.';
          if (this.options.silent) return console.error(w), "";
          else throw new Error(w)
        }
      }
    }
    return G
  }
  parseInline(I, d = this.renderer) {
    let G = "";
    for (let Z = 0; Z < I.length; Z++) {
      let C = I[Z];
      if (this.options.extensions?.renderers?.[C.type]) {
        let w = this.options.extensions.renderers[C.type].call({
          parser: this
        }, C);
        if (w !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(C.type)) {
          G += w || "";
          continue
        }
      }
      let W = C;
      switch (W.type) {
        case "escape": {
          G += d.text(W);
          break
        }
        case "html": {
          G += d.html(W);
          break
        }
        case "link": {
          G += d.link(W);
          break
        }
        case "image": {
          G += d.image(W);
          break
        }
        case "strong": {
          G += d.strong(W);
          break
        }
        case "em": {
          G += d.em(W);
          break
        }
        case "codespan": {
          G += d.codespan(W);
          break
        }
        case "br": {
          G += d.br(W);
          break
        }
        case "del": {
          G += d.del(W);
          break
        }
        case "text": {
          G += d.text(W);
          break
        }
        default: {
          let w = 'Token with "' + W.type + '" type was not found.';
          if (this.options.silent) return console.error(w), "";
          else throw new Error(w)
        }
      }
    }
    return G
  }
}
// @from(Start 6321417, End 6321842)
class Lu {
  options;
  block;
  constructor(I) {
    this.options = I || YK
  }
  static passThroughHooks = new Set(["preprocess", "postprocess", "processAllTokens"]);
  preprocess(I) {
    return I
  }
  postprocess(I) {
    return I
  }
  processAllTokens(I) {
    return I
  }
  provideLexer() {
    return this.block ? rZ.lex : rZ.lexInline
  }
  provideParser() {
    return this.block ? aZ.parse : aZ.parseInline
  }
}
// @from(Start 6321843, End 6328640)
class oQ2 {
  defaults = RK1();
  options = this.setOptions;
  parse = this.parseMarkdown(!0);
  parseInline = this.parseMarkdown(!1);
  Parser = aZ;
  Renderer = Pu;
  TextRenderer = Po;
  Lexer = rZ;
  Tokenizer = yu;
  Hooks = Lu;
  constructor(...I) {
    this.use(...I)
  }
  walkTokens(I, d) {
    let G = [];
    for (let Z of I) switch (G = G.concat(d.call(this, Z)), Z.type) {
      case "table": {
        let C = Z;
        for (let W of C.header) G = G.concat(this.walkTokens(W.tokens, d));
        for (let W of C.rows)
          for (let w of W) G = G.concat(this.walkTokens(w.tokens, d));
        break
      }
      case "list": {
        let C = Z;
        G = G.concat(this.walkTokens(C.items, d));
        break
      }
      default: {
        let C = Z;
        if (this.defaults.extensions?.childTokens?.[C.type]) this.defaults.extensions.childTokens[C.type].forEach((W) => {
          let w = C[W].flat(1 / 0);
          G = G.concat(this.walkTokens(w, d))
        });
        else if (C.tokens) G = G.concat(this.walkTokens(C.tokens, d))
      }
    }
    return G
  }
  use(...I) {
    let d = this.defaults.extensions || {
      renderers: {},
      childTokens: {}
    };
    return I.forEach((G) => {
      let Z = {
        ...G
      };
      if (Z.async = this.defaults.async || Z.async || !1, G.extensions) G.extensions.forEach((C) => {
        if (!C.name) throw new Error("extension name required");
        if ("renderer" in C) {
          let W = d.renderers[C.name];
          if (W) d.renderers[C.name] = function(...w) {
            let B = C.renderer.apply(this, w);
            if (B === !1) B = W.apply(this, w);
            return B
          };
          else d.renderers[C.name] = C.renderer
        }
        if ("tokenizer" in C) {
          if (!C.level || C.level !== "block" && C.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let W = d[C.level];
          if (W) W.unshift(C.tokenizer);
          else d[C.level] = [C.tokenizer];
          if (C.start) {
            if (C.level === "block")
              if (d.startBlock) d.startBlock.push(C.start);
              else d.startBlock = [C.start];
            else if (C.level === "inline")
              if (d.startInline) d.startInline.push(C.start);
              else d.startInline = [C.start]
          }
        }
        if ("childTokens" in C && C.childTokens) d.childTokens[C.name] = C.childTokens
      }), Z.extensions = d;
      if (G.renderer) {
        let C = this.defaults.renderer || new Pu(this.defaults);
        for (let W in G.renderer) {
          if (!(W in C)) throw new Error(`renderer '${W}' does not exist`);
          if (["options", "parser"].includes(W)) continue;
          let w = W,
            B = G.renderer[w],
            A = C[w];
          C[w] = (...V) => {
            let X = B.apply(C, V);
            if (X === !1) X = A.apply(C, V);
            return X || ""
          }
        }
        Z.renderer = C
      }
      if (G.tokenizer) {
        let C = this.defaults.tokenizer || new yu(this.defaults);
        for (let W in G.tokenizer) {
          if (!(W in C)) throw new Error(`tokenizer '${W}' does not exist`);
          if (["options", "rules", "lexer"].includes(W)) continue;
          let w = W,
            B = G.tokenizer[w],
            A = C[w];
          C[w] = (...V) => {
            let X = B.apply(C, V);
            if (X === !1) X = A.apply(C, V);
            return X
          }
        }
        Z.tokenizer = C
      }
      if (G.hooks) {
        let C = this.defaults.hooks || new Lu;
        for (let W in G.hooks) {
          if (!(W in C)) throw new Error(`hook '${W}' does not exist`);
          if (["options", "block"].includes(W)) continue;
          let w = W,
            B = G.hooks[w],
            A = C[w];
          if (Lu.passThroughHooks.has(W)) C[w] = (V) => {
            if (this.defaults.async) return Promise.resolve(B.call(C, V)).then((_) => {
              return A.call(C, _)
            });
            let X = B.call(C, V);
            return A.call(C, X)
          };
          else C[w] = (...V) => {
            let X = B.apply(C, V);
            if (X === !1) X = A.apply(C, V);
            return X
          }
        }
        Z.hooks = C
      }
      if (G.walkTokens) {
        let C = this.defaults.walkTokens,
          W = G.walkTokens;
        Z.walkTokens = function(w) {
          let B = [];
          if (B.push(W.call(this, w)), C) B = B.concat(C.call(this, w));
          return B
        }
      }
      this.defaults = {
        ...this.defaults,
        ...Z
      }
    }), this
  }
  setOptions(I) {
    return this.defaults = {
      ...this.defaults,
      ...I
    }, this
  }
  lexer(I, d) {
    return rZ.lex(I, d ?? this.defaults)
  }
  parser(I, d) {
    return aZ.parse(I, d ?? this.defaults)
  }
  parseMarkdown(I) {
    return (G, Z) => {
      let C = {
          ...Z
        },
        W = {
          ...this.defaults,
          ...C
        },
        w = this.onError(!!W.silent, !!W.async);
      if (this.defaults.async === !0 && C.async === !1) return w(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof G === "undefined" || G === null) return w(new Error("marked(): input parameter is undefined or null"));
      if (typeof G !== "string") return w(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(G) + ", string expected"));
      if (W.hooks) W.hooks.options = W, W.hooks.block = I;
      let B = W.hooks ? W.hooks.provideLexer() : I ? rZ.lex : rZ.lexInline,
        A = W.hooks ? W.hooks.provideParser() : I ? aZ.parse : aZ.parseInline;
      if (W.async) return Promise.resolve(W.hooks ? W.hooks.preprocess(G) : G).then((V) => B(V, W)).then((V) => W.hooks ? W.hooks.processAllTokens(V) : V).then((V) => W.walkTokens ? Promise.all(this.walkTokens(V, W.walkTokens)).then(() => V) : V).then((V) => A(V, W)).then((V) => W.hooks ? W.hooks.postprocess(V) : V).catch(w);
      try {
        if (W.hooks) G = W.hooks.preprocess(G);
        let V = B(G, W);
        if (W.hooks) V = W.hooks.processAllTokens(V);
        if (W.walkTokens) this.walkTokens(V, W.walkTokens);
        let X = A(V, W);
        if (W.hooks) X = W.hooks.postprocess(X);
        return X
      } catch (V) {
        return w(V)
      }
    }
  }
  onError(I, d) {
    return (G) => {
      if (G.message += `
Please report this to https://github.com/markedjs/marked.`, I) {
        let Z = "<p>An error occurred:</p><pre>" + bB(G.message + "", !0) + "</pre>";
        if (d) return Promise.resolve(Z);
        return Z
      }
      if (d) return Promise.reject(G);
      throw G
    }
  }
}
// @from(Start 6328645, End 6328657)
XK = new oQ2
// @from(Start 6328660, End 6328705)
function n5(I, d) {
  return XK.parse(I, d)
}
// @from(Start 6329329, End 6329343)
rM3 = aZ.parse
// @from(Start 6329347, End 6329359)
aM3 = rZ.lex
// @from(Start 6329365, End 6329382)
uu = J1($g1(), 1)
// @from(Start 6329419, End 6329497)
function VU(I) {
  return n5.lexer(JK1(I)).map((d) => EW(d)).join("").trim()
}
// @from(Start 6329499, End 6331238)
function EW(I, d = 0, G = null, Z = null) {
  switch (I.type) {
    case "blockquote":
      return j0.dim.italic((I.tokens ?? []).map((C) => EW(C)).join(""));
    case "code":
      if (I.lang && uu.supportsLanguage(I.lang)) return uu.highlight(I.text, {
        language: I.lang
      }) + vW;
      else return X0(`Language not supported while highlighting code, falling back to markdown: ${I.lang}`), uu.highlight(I.text, {
        language: "markdown"
      }) + vW;
    case "codespan":
      return j0.blue(I.text);
    case "em":
      return j0.italic((I.tokens ?? []).map((C) => EW(C)).join(""));
    case "strong":
      return j0.bold((I.tokens ?? []).map((C) => EW(C)).join(""));
    case "heading":
      switch (I.depth) {
        case 1:
          return j0.bold.italic.underline((I.tokens ?? []).map((C) => EW(C)).join("")) + vW + vW;
        case 2:
          return j0.bold((I.tokens ?? []).map((C) => EW(C)).join("")) + vW + vW;
        default:
          return j0.bold.dim((I.tokens ?? []).map((C) => EW(C)).join("")) + vW + vW
      }
    case "hr":
      return "---";
    case "image":
      return `[Image: ${I.title}: ${I.href}]`;
    case "link":
      return j0.blue(I.href);
    case "list":
      return I.items.map((C, W) => EW(C, d, I.ordered ? I.start + W : null, I)).join("");
    case "list_item":
      return (I.tokens ?? []).map((C) => `${"  ".repeat(d)}${EW(C,d+1,G,I)}`).join("");
    case "paragraph":
      return (I.tokens ?? []).map((C) => EW(C)).join("") + vW;
    case "space":
      return vW;
    case "text":
      if (Z?.type === "list_item") return `${G===null?"-":KB9(d,G)+"."} ${I.tokens?I.tokens.map((C)=>EW(C,d,G,I)).join(""):I.text}${vW}`;
      else return I.text
  }
  return ""
}
// @from(Start 6331243, End 6331535)
gB9 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "aa", "ab", "ac", "ad", "ae", "af", "ag", "ah", "ai", "aj", "ak", "al", "am", "an", "ao", "ap", "aq", "ar", "as", "at", "au", "av", "aw", "ax", "ay", "az"]
// @from(Start 6331539, End 6331847)
JB9 = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii", "xiii", "xiv", "xv", "xvi", "xvii", "xviii", "xix", "xx", "xxi", "xxii", "xxiii", "xxiv", "xxv", "xxvi", "xxvii", "xxviii", "xxix", "xxx", "xxxi", "xxxii", "xxxiii", "xxxiv", "xxxv", "xxxvi", "xxxvii", "xxxviii", "xxxix", "xl"]
// @from(Start 6331850, End 6332055)
function KB9(I, d) {
  switch (I) {
    case 0:
    case 1:
      return d.toString();
    case 2:
      return gB9[d - 1];
    case 3:
      return JB9[d - 1];
    default:
      return d.toString()
  }
}
// @from(Start 6332057, End 6332522)
function $o({
  param: {
    thinking: I
  },
  addMargin: d = !1
}) {
  if (!I) return null;
  return Tu.default.createElement(p, {
    flexDirection: "column",
    gap: 1,
    marginTop: d ? 1 : 0,
    width: "100%"
  }, Tu.default.createElement(u, {
    color: r1().secondaryText,
    italic: !0
  }, "✻ Thinking…"), Tu.default.createElement(p, {
    paddingLeft: 2
  }, Tu.default.createElement(u, {
    color: r1().secondaryText,
    italic: !0
  }, VU(I))))
}
// @from(Start 6332524, End 6334153)
function eQ2({
  param: I,
  costUSD: d,
  durationMs: G,
  addMargin: Z,
  tools: C,
  debug: W,
  verbose: w,
  erroredToolUseIDs: B,
  inProgressToolUseIDs: A,
  unresolvedToolUseIDs: V,
  shouldAnimate: X,
  shouldShowDot: _
}) {
  let F = C.find((Q) => Q.name === I.name);
  if (!F) return X0(`Tool ${I.name} not found`), null;
  let g = !A.has(I.id) && V.has(I.id),
    J = g ? r1().secondaryText : void 0;
  if (F === VK) {
    let {
      thought: Q
    } = VK.inputSchema.parse(I.input);
    return gG.default.createElement($o, {
      param: {
        thinking: Q,
        signature: "",
        type: "thinking"
      },
      addMargin: Z
    })
  }
  let K = F.userFacingName(I.input);
  return gG.default.createElement(p, {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Z ? 1 : 0,
    width: "100%"
  }, gG.default.createElement(p, null, gG.default.createElement(p, {
    flexWrap: "nowrap",
    minWidth: K.length + (_ ? 2 : 0)
  }, _ && (g ? gG.default.createElement(p, {
    minWidth: 2
  }, gG.default.createElement(u, {
    color: J
  }, AU)) : gG.default.createElement(PQ2, {
    shouldAnimate: X,
    isUnresolved: V.has(I.id),
    isError: B.has(I.id)
  })), gG.default.createElement(u, {
    color: J,
    bold: !g
  }, K)), gG.default.createElement(p, {
    flexWrap: "nowrap"
  }, Object.keys(I.input).length > 0 && gG.default.createElement(u, {
    color: J
  }, "(", F.renderToolUseMessage(I.input, {
    verbose: w
  }), ")"), gG.default.createElement(u, {
    color: J
  }, "…"))), gG.default.createElement(NH, {
    costUSD: d,
    durationMs: G,
    debug: W
  }))
}
// @from(Start 6334158, End 6334174)
u6 = J1(u1(), 1)
// @from(Start 6334180, End 6334197)
yK1 = J1(u1(), 1)
// @from(Start 6334200, End 6334534)
function tQ2({
  content: I,
  verbose: d
}) {
  let G = XG(I, "bash-stdout") ?? "",
    Z = XG(I, "bash-stderr") ?? "",
    C = G.split(`
`).length,
    W = Z.split(`
`).length;
  return yK1.createElement($s, {
    content: {
      stdout: G,
      stdoutLines: C,
      stderr: Z,
      stderrLines: W
    },
    verbose: !!d
  })
}
// @from(Start 6334539, End 6334555)
JG = J1(u1(), 1)
// @from(Start 6334558, End 6335119)
function df2({
  content: I
}) {
  let d = XG(I, "local-command-stdout"),
    G = XG(I, "local-command-stderr");
  if (!d && !G) return [];
  let Z = r1(),
    C = [If2(d?.trim(), Z.text), If2(G?.trim(), Z.error)].filter(Boolean);
  if (C.length === 0) C = [JG.createElement(u, {
    key: "0"
  }, "(No output)")];
  return [JG.createElement(p, {
    key: "0",
    gap: 1
  }, JG.createElement(p, null, JG.createElement(u, {
    color: Z.secondaryText
  }, "  ", "⎿ ")), C.map((W, w) => JG.createElement(p, {
    key: w,
    flexDirection: "column"
  }, W)))]
}
// @from(Start 6335121, End 6335218)
function If2(I, d) {
  if (!I) return null;
  return JG.createElement(u, {
    color: d
  }, I)
}
// @from(Start 6335220, End 6337356)
function Gf2({
  param: {
    text: I
  },
  costUSD: d,
  durationMs: G,
  debug: Z,
  addMargin: C,
  shouldShowDot: W,
  verbose: w
}) {
  let {
    columns: B
  } = G9();
  if (qo(I)) return null;
  if (I.startsWith("<bash-stdout") || I.startsWith("<bash-stderr")) return u6.default.createElement(tQ2, {
    content: I,
    verbose: w
  });
  if (I.startsWith("<local-command-stdout") || I.startsWith("<local-command-stderr")) return u6.default.createElement(df2, {
    content: I
  });
  if (I.startsWith(hZ)) return u6.default.createElement(u, null, "  ⎿  ", u6.default.createElement(u, {
    color: r1().error
  }, I === hZ ? `${hZ}: Please wait a moment and try again.` : I));
  switch (I) {
    case Xu:
    case _X:
      return null;
    case KW:
    case BU:
      return u6.default.createElement(u, null, "  ⎿  ", u6.default.createElement(u, {
        color: r1().error
      }, "Interrupted by user"));
    case HJ1:
      return u6.default.createElement(u, null, "  ⎿  ", u6.default.createElement(u, {
        color: r1().error
      }, "Context low · Run /compact to compact & continue"));
    case FJ1:
      return u6.default.createElement(u, null, "  ⎿  ", u6.default.createElement(u, {
        color: r1().error
      }, "Credit balance too low · Add funds: https://console.anthropic.com/settings/billing"));
    case Os:
      return u6.default.createElement(u, null, "  ⎿  ", u6.default.createElement(u, {
        color: r1().error
      }, Os));
    default:
      return u6.default.createElement(p, {
        alignItems: "flex-start",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: C ? 1 : 0,
        width: "100%"
      }, u6.default.createElement(p, {
        flexDirection: "row"
      }, W && u6.default.createElement(p, {
        minWidth: 2
      }, u6.default.createElement(u, {
        color: r1().text
      }, AU)), u6.default.createElement(p, {
        flexDirection: "column",
        width: B - 6
      }, u6.default.createElement(u, null, VU(I)))), u6.default.createElement(NH, {
        costUSD: d,
        durationMs: G,
        debug: Z
      }))
  }
}
// @from(Start 6337361, End 6337377)
Ou = J1(u1(), 1)
// @from(Start 6337380, End 6337732)
function Zf2({
  addMargin: I,
  param: {
    text: d
  }
}) {
  let G = XG(d, "command-message"),
    Z = XG(d, "command-args");
  if (!G) return null;
  let C = r1();
  return Ou.createElement(p, {
    flexDirection: "column",
    marginTop: I ? 1 : 0,
    width: "100%"
  }, Ou.createElement(u, {
    color: C.secondaryText
  }, "> /", G, " ", Z))
}
// @from(Start 6337737, End 6337753)
XU = J1(u1(), 1)
// @from(Start 6337756, End 6338345)
function Cf2({
  addMargin: I,
  param: {
    text: d
  }
}) {
  let {
    columns: G
  } = G9();
  if (!d) return X0("No content found in user prompt message"), null;
  return XU.default.createElement(p, {
    flexDirection: "row",
    marginTop: I ? 1 : 0,
    width: "100%"
  }, XU.default.createElement(p, {
    minWidth: 2,
    width: 2
  }, XU.default.createElement(u, {
    color: r1().secondaryText
  }, ">")), XU.default.createElement(p, {
    flexDirection: "column",
    width: G - 4
  }, XU.default.createElement(u, {
    color: r1().secondaryText,
    wrap: "wrap"
  }, d)))
}
// @from(Start 6338350, End 6338366)
_K = J1(u1(), 1)
// @from(Start 6338369, End 6338782)
function Wf2({
  addMargin: I,
  param: d
}) {
  if (d.text.trim() === FH) return null;
  if (d.text.includes("<bash-input>")) return _K.createElement(zo, {
    addMargin: I,
    param: d
  });
  if (d.text.includes("<command-name>") || d.text.includes("<command-message>")) return _K.createElement(Zf2, {
    addMargin: I,
    param: d
  });
  return _K.createElement(Cf2, {
    addMargin: I,
    param: d
  })
}
// @from(Start 6338787, End 6338804)
PK1 = J1(u1(), 1)
// @from(Start 6338807, End 6339016)
function wf2({
  addMargin: I = !1
}) {
  return PK1.default.createElement(p, {
    marginTop: I ? 1 : 0
  }, PK1.default.createElement(u, {
    color: r1().secondaryText,
    italic: !0
  }, "✻ Thinking…"))
}
// @from(Start 6339018, End 6340115)
function fH({
  message: I,
  messages: d,
  addMargin: G,
  tools: Z,
  verbose: C,
  debug: W,
  erroredToolUseIDs: w,
  inProgressToolUseIDs: B,
  unresolvedToolUseIDs: A,
  shouldAnimate: V,
  shouldShowDot: X,
  width: _
}) {
  if (I.type === "assistant") return B6.createElement(p, {
    flexDirection: "column",
    width: "100%"
  }, I.message.content.map((g, J) => B6.createElement(zB9, {
    key: J,
    param: g,
    costUSD: I.costUSD,
    durationMs: I.durationMs,
    addMargin: G,
    tools: Z,
    debug: W,
    options: {
      verbose: C
    },
    erroredToolUseIDs: w,
    inProgressToolUseIDs: B,
    unresolvedToolUseIDs: A,
    shouldAnimate: V,
    shouldShowDot: X,
    width: _
  })));
  let F = typeof I.message.content === "string" ? [{
    type: "text",
    text: I.message.content
  }] : I.message.content;
  return B6.createElement(p, {
    flexDirection: "column",
    width: "100%"
  }, F.map((g, J) => B6.createElement(NB9, {
    key: J,
    message: I,
    messages: d,
    addMargin: G,
    tools: Z,
    param: g,
    options: {
      verbose: C
    }
  })))
}
// @from(Start 6340117, End 6340589)
function NB9({
  message: I,
  messages: d,
  addMargin: G,
  tools: Z,
  param: C,
  options: {
    verbose: W
  }
}) {
  let {
    columns: w
  } = G9();
  switch (C.type) {
    case "text":
      return B6.createElement(Wf2, {
        addMargin: G,
        param: C
      });
    case "tool_result":
      return B6.createElement(yQ2, {
        param: C,
        message: I,
        messages: d,
        tools: Z,
        verbose: W,
        width: w - 5
      })
  }
}
// @from(Start 6340591, End 6341746)
function zB9({
  param: I,
  costUSD: d,
  durationMs: G,
  addMargin: Z,
  tools: C,
  debug: W,
  options: {
    verbose: w
  },
  erroredToolUseIDs: B,
  inProgressToolUseIDs: A,
  unresolvedToolUseIDs: V,
  shouldAnimate: X,
  shouldShowDot: _,
  width: F
}) {
  switch (I.type) {
    case "tool_use":
      return B6.createElement(eQ2, {
        param: I,
        costUSD: d,
        durationMs: G,
        addMargin: Z,
        tools: C,
        debug: W,
        verbose: w,
        erroredToolUseIDs: B,
        inProgressToolUseIDs: A,
        unresolvedToolUseIDs: V,
        shouldAnimate: X,
        shouldShowDot: _
      });
    case "text":
      return B6.createElement(Gf2, {
        param: I,
        costUSD: d,
        durationMs: G,
        debug: W,
        addMargin: Z,
        shouldShowDot: _,
        verbose: w,
        width: F
      });
    case "redacted_thinking":
      return B6.createElement(wf2, {
        addMargin: Z
      });
    case "thinking":
      return B6.createElement($o, {
        addMargin: Z,
        param: I
      });
    default:
      return X0(`Unable to render message type: ${I.type}`), null
  }
}
// @from(Start 6341751, End 6341767)
q4 = J1(u1(), 1)
// @from(Start 6341771, End 6341787)
qH = J1(u1(), 1)
// @from(Start 6341839, End 6341845)
uo = 7
// @from(Start 6341848, End 6345221)
function Bf2({
  erroredToolUseIDs: I,
  messages: d,
  onSelect: G,
  onEscape: Z,
  tools: C,
  unresolvedToolUseIDs: W
}) {
  let w = qH.useMemo(QB9, []);
  qH.useEffect(() => {
    I0("tengu_message_selector_opened", {})
  }, []);

  function B(K) {
    let Q = d.length - 1 - d.indexOf(K);
    I0("tengu_message_selector_selected", {
      index_from_end: Q.toString(),
      message_type: K.type,
      is_current_prompt: (K.uuid === w).toString()
    }), G(K)
  }

  function A() {
    I0("tengu_message_selector_cancelled", {}), Z()
  }
  let V = qH.useMemo(() => [...d.filter((K) => !(K.type === "user" && Array.isArray(K.message.content) && K.message.content[0]?.type === "tool_result")).filter((K) => K.type !== "assistant"), {
      ...p9(""),
      uuid: w
    }], [d, w]),
    [X, _] = qH.useState(V.length - 1),
    F = P6(() => process.exit(0));
  C4((K, Q) => {
    if (Q.tab || Q.escape) {
      A();
      return
    }
    if (Q.return) {
      B(V[X]);
      return
    }
    if (Q.upArrow)
      if (Q.ctrl || Q.shift || Q.meta) _(0);
      else _((S) => Math.max(0, S - 1));
    if (Q.downArrow)
      if (Q.ctrl || Q.shift || Q.meta) _(V.length - 1);
      else _((S) => Math.min(V.length - 1, S + 1));
    let E = Number(K);
    if (!isNaN(E) && E >= 1 && E <= Math.min(9, V.length)) {
      if (!V[E - 1]) return;
      B(V[E - 1])
    }
  });
  let g = Math.max(0, Math.min(X - Math.floor(uo / 2), V.length - uo)),
    J = qH.useMemo(() => QW(d).filter(fo), [d]);
  return q4.createElement(q4.Fragment, null, q4.createElement(p, {
    flexDirection: "column",
    borderStyle: "round",
    borderColor: r1().secondaryBorder,
    height: 4 + Math.min(uo, V.length) * 2,
    paddingX: 1,
    marginTop: 1
  }, q4.createElement(p, {
    flexDirection: "column",
    minHeight: 2,
    marginBottom: 1
  }, q4.createElement(u, {
    bold: !0
  }, "Jump to a previous message"), q4.createElement(u, {
    dimColor: !0
  }, "This will fork the conversation")), V.slice(g, g + uo).map((K, Q) => {
    let S = g + Q === X,
      P = K.uuid === w;
    return q4.createElement(p, {
      key: K.uuid,
      flexDirection: "row",
      height: 2,
      minHeight: 2
    }, q4.createElement(p, {
      width: 7
    }, S ? q4.createElement(u, {
      color: "blue",
      bold: !0
    }, I9.pointer, " ", g + Q + 1, " ") : q4.createElement(u, null, "  ", g + Q + 1, " ")), q4.createElement(p, {
      height: 1,
      overflow: "hidden",
      width: 100
    }, P ? q4.createElement(p, {
      width: "100%"
    }, q4.createElement(u, {
      dimColor: !0,
      italic: !0
    }, "(current)")) : Array.isArray(K.message.content) && K.message.content[0]?.type === "text" && qo(K.message.content[0].text) ? q4.createElement(u, {
      dimColor: !0,
      italic: !0
    }, "(empty message)") : q4.createElement(fH, {
      message: K,
      messages: J,
      addMargin: !1,
      tools: C,
      verbose: !1,
      debug: !1,
      erroredToolUseIDs: I,
      inProgressToolUseIDs: new Set,
      unresolvedToolUseIDs: W,
      shouldAnimate: !1,
      shouldShowDot: !1
    })))
  })), q4.createElement(p, {
    marginLeft: 3
  }, q4.createElement(u, {
    dimColor: !0
  }, F.pending ? q4.createElement(q4.Fragment, null, "Press ", F.keyName, " again to exit") : q4.createElement(q4.Fragment, null, "↑/↓ to select · Enter to confirm · Tab/Esc to cancel"))))
}
// @from(Start 6345226, End 6345243)
aK1 = J1(u1(), 1)
// @from(Start 6345352, End 6345368)
y3 = J1(u1(), 1)
// @from(Start 6345486, End 6345502)
g9 = J1(u1(), 1)
// @from(Start 6345505, End 6345576)
function hB(I, d) {
  return I.flatMap((G, Z) => Z ? [d(Z), G] : [G])
}
// @from(Start 6345620, End 6346730)
function To({
  filePath: I,
  structuredPatch: d,
  verbose: G
}) {
  let {
    columns: Z
  } = G9(), C = d.reduce((w, B) => w + B.lines.filter((A) => A.startsWith("+")).length, 0), W = d.reduce((w, B) => w + B.lines.filter((A) => A.startsWith("-")).length, 0);
  return g9.createElement(p, {
    flexDirection: "column"
  }, g9.createElement(u, null, "  ", "⎿ Updated", " ", g9.createElement(u, {
    bold: !0
  }, G ? I : fB9(R0(), I)), C > 0 || W > 0 ? " with " : "", C > 0 ? g9.createElement(g9.Fragment, null, g9.createElement(u, {
    bold: !0
  }, C), " ", C > 1 ? "additions" : "addition") : null, C > 0 && W > 0 ? " and " : null, W > 0 ? g9.createElement(g9.Fragment, null, g9.createElement(u, {
    bold: !0
  }, W), " ", W > 1 ? "removals" : "removal") : null), hB(d.map((w) => g9.createElement(p, {
    flexDirection: "column",
    paddingLeft: 5,
    key: w.newStart
  }, g9.createElement(nZ, {
    patch: w,
    dim: !1,
    width: Z - 12
  }))), (w) => g9.createElement(p, {
    paddingLeft: 5,
    key: `ellipsis-${w}`
  }, g9.createElement(u, {
    color: r1().secondaryText
  }, "..."))))
}
// @from(Start 6346800, End 6346816)
qI = J1(u1(), 1)
// @from(Start 6346921, End 6346991)
Af2 = "Replace the contents of a specific cell in a Jupyter notebook."
// @from(Start 6346995, End 6347516)
Vf2 = "Completely replaces the contents of a specific cell in a Jupyter notebook (.ipynb file) with new source. Jupyter notebooks are interactive documents that combine code, text, and visualizations, commonly used for data analysis and scientific computing. The notebook_path parameter must be an absolute path, not a relative path. The cell_number is 0-indexed. Use edit_mode=insert to add a new cell at the index specified by cell_number. Use edit_mode=delete to delete the cell at the index specified by cell_number."
// @from(Start 6347522, End 6348161)
vB9 = s.strictObject({
    notebook_path: s.string().describe("The absolute path to the Jupyter notebook file to edit (must be absolute, not relative)"),
    cell_number: s.number().describe("The index of the cell to edit (0-based)"),
    new_source: s.string().describe("The new source for the cell"),
    cell_type: s.enum(["code", "markdown"]).optional().describe("The type of the cell (code or markdown). If not specified, it defaults to the current cell type. If using edit_mode=insert, this is required."),
    edit_mode: s.string().optional().describe("The type of edit to make (replace, insert, delete). Defaults to replace.")
  })
// @from(Start 6348165, End 6353349)
RI = {
    name: "NotebookEditCell",
    async description() {
      return Af2
    },
    async prompt() {
      return Vf2
    },
    inputSchema: vB9,
    userFacingName() {
      return "Edit Notebook"
    },
    async isEnabled() {
      return !0
    },
    isReadOnly() {
      return !1
    },
    needsPermissions({
      notebook_path: I
    }) {
      return !OR(I)
    },
    renderResultForAssistant({
      cell_number: I,
      edit_mode: d,
      new_source: G,
      error: Z
    }) {
      if (Z) return Z;
      switch (d) {
        case "replace":
          return `Updated cell ${I} with ${G}`;
        case "insert":
          return `Inserted cell ${I} with ${G}`;
        case "delete":
          return `Deleted cell ${I}`
      }
    },
    renderToolUseMessage(I, {
      verbose: d
    }) {
      return `notebook_path: ${d?I.notebook_path:UB9(R0(),I.notebook_path)}, cell: ${I.cell_number}, content: ${I.new_source.slice(0,30)}…, cell_type: ${I.cell_type}, edit_mode: ${I.edit_mode??"replace"}`
    },
    renderToolUseRejectedMessage() {
      return qI.createElement(A3, null)
    },
    renderToolResultMessage({
      cell_number: I,
      new_source: d,
      language: G,
      error: Z
    }) {
      if (Z) return qI.createElement(p, {
        flexDirection: "column"
      }, qI.createElement(u, {
        color: "red"
      }, Z));
      return qI.createElement(p, {
        flexDirection: "column"
      }, qI.createElement(u, null, "Updated cell ", I, ":"), qI.createElement(p, {
        marginLeft: 2
      }, qI.createElement(yB, {
        code: d,
        language: G
      })))
    },
    async validateInput({
      notebook_path: I,
      cell_number: d,
      cell_type: G,
      edit_mode: Z = "replace"
    }) {
      let C = Yf2(I) ? I : _f2(R0(), I);
      if (!qB9(C)) return {
        result: !1,
        message: "Notebook file does not exist."
      };
      if (RB9(C) !== ".ipynb") return {
        result: !1,
        message: "File must be a Jupyter notebook (.ipynb file). For editing other file types, use the FileEdit tool."
      };
      if (d < 0) return {
        result: !1,
        message: "Cell number must be non-negative."
      };
      if (Z !== "replace" && Z !== "insert" && Z !== "delete") return {
        result: !1,
        message: "Edit mode must be replace, insert, or delete."
      };
      if (Z === "insert" && !G) return {
        result: !1,
        message: "Cell type is required when using edit_mode=insert."
      };
      let W = dd(C),
        w = Xf2(C, W),
        B = tG(w);
      if (!B) return {
        result: !1,
        message: "Notebook is not valid JSON."
      };
      if (Z === "insert" && d > B.cells.length) return {
        result: !1,
        message: `Cell number is out of bounds. For insert mode, the maximum value is ${B.cells.length} (to append at the end).`
      };
      else if ((Z === "replace" || Z === "delete") && (d >= B.cells.length || !B.cells[d])) return {
        result: !1,
        message: `Cell number is out of bounds. Notebook has ${B.cells.length} cells.`
      };
      return {
        result: !0
      }
    },
    async * call({
      notebook_path: I,
      cell_number: d,
      new_source: G,
      cell_type: Z,
      edit_mode: C
    }) {
      let W = Yf2(I) ? I : _f2(R0(), I);
      try {
        let w = dd(W),
          B = Xf2(W, w),
          A = JSON.parse(B),
          V = A.metadata.language_info?.name ?? "python";
        if (C === "delete") A.cells.splice(d, 1);
        else if (C === "insert") {
          let F = {
            cell_type: Z,
            source: G,
            metadata: {}
          };
          A.cells.splice(d, 0, Z == "markdown" ? F : {
            ...F,
            outputs: []
          })
        } else {
          let F = A.cells[d];
          if (F.source = G, F.execution_count = void 0, F.outputs = [], Z && Z !== F.cell_type) F.cell_type = Z
        }
        let X = Sg(W);
        Xf(W, JSON.stringify(A, null, 1), w, X);
        let _ = {
          cell_number: d,
          new_source: G,
          cell_type: Z ?? "code",
          language: V,
          edit_mode: C ?? "replace",
          error: ""
        };
        yield {
          type: "result",
          data: _,
          resultForAssistant: this.renderResultForAssistant(_)
        }
      } catch (w) {
        if (w instanceof Error) {
          let A = {
            cell_number: d,
            new_source: G,
            cell_type: Z ?? "code",
            language: "python",
            edit_mode: "replace",
            error: w.message
          };
          yield {
            type: "result",
            data: A,
            resultForAssistant: this.renderResultForAssistant(A)
          };
          return
        }
        let B = {
          cell_number: d,
          new_source: G,
          cell_type: Z ?? "code",
          language: "python",
          edit_mode: "replace",
          error: "Unknown error occurred while editing notebook"
        };
        yield {
          type: "result",
          data: B,
          resultForAssistant: this.renderResultForAssistant(B)
        }
      }
    }
  }
// @from(Start 6353355, End 6356017)
Df2 = `This is a tool for editing files. For moving or renaming files, you should generally use the Bash tool with the 'mv' command instead. For larger edits, use the Write tool to overwrite files. For Jupyter notebooks (.ipynb files), use the ${RI.name} instead.

Before using this tool:

1. Use the View tool to understand the file's contents and context

2. Verify the directory path is correct (only applicable when creating new files):
   - Use the LS tool to verify the parent directory exists and is the correct location

To make a file edit, provide the following:
1. file_path: The absolute path to the file to modify (must be absolute, not relative)
2. old_string: The text to replace (must be unique within the file, and must match the file contents exactly, including all whitespace and indentation)
3. new_string: The edited text to replace the old_string

The tool will replace ONE occurrence of old_string with new_string in the specified file.

CRITICAL REQUIREMENTS FOR USING THIS TOOL:

1. UNIQUENESS: The old_string MUST uniquely identify the specific instance you want to change. This means:
   - Include AT LEAST 3-5 lines of context BEFORE the change point
   - Include AT LEAST 3-5 lines of context AFTER the change point
   - Include all whitespace, indentation, and surrounding code exactly as it appears in the file

2. SINGLE INSTANCE: This tool can only change ONE instance at a time. If you need to change multiple instances:
   - Make separate calls to this tool for each instance
   - Each call must uniquely identify its specific instance using extensive context

3. VERIFICATION: Before using this tool:
   - Check how many instances of the target text exist in the file
   - If multiple instances exist, gather enough context to uniquely identify each one
   - Plan separate tool calls for each instance

WARNING: If you do not follow these requirements:
   - The tool will fail if old_string matches multiple locations
   - The tool will fail if old_string doesn't match exactly (including whitespace)
   - You may change the wrong instance if you don't include enough context

When making edits:
   - Ensure the edit results in idiomatic, correct code
   - Do not leave the code in a broken state
   - Always use absolute file paths (starting with /)

If you want to create a new file, use:
   - A new file path, including dir name if needed
   - An empty old_string
   - The new file's contents as new_string

Remember: when making multiple file edits in a row to the same file, you should prefer to send all edits in a single message with multiple calls to this tool, rather than multiple messages with a single call each.
`
// @from(Start 6356126, End 6356142)
function MW() {}
// @from(Start 6359845, End 6360504)
function Hf2(I, d, G, Z, C) {
  var W = [],
    w;
  while (d) W.push(d), w = d.previousComponent, delete d.previousComponent, d = w;
  W.reverse();
  var B = 0,
    A = W.length,
    V = 0,
    X = 0;
  for (; B < A; B++) {
    var _ = W[B];
    if (!_.removed) {
      if (!_.added && C) {
        var F = G.slice(V, V + _.count);
        F = F.map(function(g, J) {
          var K = Z[X + J];
          return K.length > g.length ? K : g
        }), _.value = I.join(F)
      } else _.value = I.join(G.slice(V, V + _.count));
      if (V += _.count, !_.added) X += _.count
    } else _.value = I.join(Z.slice(X, X + _.count)), X += _.count
  }
  return W
}
// @from(Start 6360509, End 6360521)
jL3 = new MW
// @from(Start 6360524, End 6360671)
function Ff2(I, d) {
  var G;
  for (G = 0; G < I.length && G < d.length; G++)
    if (I[G] != d[G]) return I.slice(0, G);
  return I.slice(0, G)
}
// @from(Start 6360673, End 6360915)
function gf2(I, d) {
  var G;
  if (!I || !d || I[I.length - 1] != d[d.length - 1]) return "";
  for (G = 0; G < I.length && G < d.length; G++)
    if (I[I.length - (G + 1)] != d[d.length - (G + 1)]) return I.slice(-G);
  return I.slice(-G)
}
// @from(Start 6360917, End 6361132)
function uK1(I, d, G) {
  if (I.slice(0, d.length) != d) throw Error("string ".concat(JSON.stringify(I), " doesn't start with prefix ").concat(JSON.stringify(d), "; this is a bug"));
  return G + I.slice(d.length)
}
// @from(Start 6361134, End 6361373)
function TK1(I, d, G) {
  if (!d) return I + G;
  if (I.slice(-d.length) != d) throw Error("string ".concat(JSON.stringify(I), " doesn't end with suffix ").concat(JSON.stringify(d), "; this is a bug"));
  return I.slice(0, -d.length) + G
}
// @from(Start 6361375, End 6361419)
function mu(I, d) {
  return uK1(I, d, "")
}
// @from(Start 6361421, End 6361465)
function Oo(I, d) {
  return TK1(I, d, "")
}
// @from(Start 6361467, End 6361520)
function Jf2(I, d) {
  return d.slice(0, EB9(I, d))
}
// @from(Start 6361522, End 6362006)
function EB9(I, d) {
  var G = 0;
  if (I.length > d.length) G = I.length - d.length;
  var Z = d.length;
  if (I.length < d.length) Z = I.length;
  var C = Array(Z),
    W = 0;
  C[0] = 0;
  for (var w = 1; w < Z; w++) {
    if (d[w] == d[W]) C[w] = C[W];
    else C[w] = W;
    while (W > 0 && d[w] != d[W]) W = C[W];
    if (d[w] == d[W]) W++
  }
  W = 0;
  for (var B = G; B < I.length; B++) {
    while (W > 0 && I[B] != d[W]) W = C[W];
    if (I[B] == d[W]) W++
  }
  return W
}
// @from(Start 6362011, End 6362127)
mo = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}"
// @from(Start 6362131, End 6362199)
MB9 = new RegExp("[".concat(mo, "]+|\\s+|[^").concat(mo, "]"), "ug")
// @from(Start 6362203, End 6362214)
lo = new MW
// @from(Start 6363531, End 6364721)
function Kf2(I, d, G, Z) {
  if (d && G) {
    var C = d.value.match(/^\s*/)[0],
      W = d.value.match(/\s*$/)[0],
      w = G.value.match(/^\s*/)[0],
      B = G.value.match(/\s*$/)[0];
    if (I) {
      var A = Ff2(C, w);
      I.value = TK1(I.value, w, A), d.value = mu(d.value, A), G.value = mu(G.value, A)
    }
    if (Z) {
      var V = gf2(W, B);
      Z.value = uK1(Z.value, B, V), d.value = Oo(d.value, V), G.value = Oo(G.value, V)
    }
  } else if (G) {
    if (I) G.value = G.value.replace(/^\s*/, "");
    if (Z) Z.value = Z.value.replace(/^\s*/, "")
  } else if (I && Z) {
    var X = Z.value.match(/^\s*/)[0],
      _ = d.value.match(/^\s*/)[0],
      F = d.value.match(/\s*$/)[0],
      g = Ff2(X, _);
    d.value = mu(d.value, g);
    var J = gf2(mu(X, g), F);
    d.value = Oo(d.value, J), Z.value = uK1(Z.value, X, J), I.value = TK1(I.value, X, X.slice(0, X.length - J.length))
  } else if (Z) {
    var K = Z.value.match(/^\s*/)[0],
      Q = d.value.match(/\s*$/)[0],
      E = Jf2(Q, K);
    d.value = Oo(d.value, E)
  } else if (I) {
    var S = I.value.match(/\s*$/)[0],
      P = d.value.match(/^\s*/)[0],
      $ = Jf2(S, P);
    d.value = mu(d.value, $)
  }
}
// @from(Start 6364726, End 6364738)
SB9 = new MW
// @from(Start 6364895, End 6364906)
bo = new MW
// @from(Start 6365607, End 6365658)
function Nf2(I, d, G) {
  return bo.diff(I, d, G)
}
// @from(Start 6365663, End 6365675)
LB9 = new MW
// @from(Start 6365755, End 6365767)
yB9 = new MW
// @from(Start 6365836, End 6366109)
function zf2(I, d) {
  var G = Object.keys(I);
  if (Object.getOwnPropertySymbols) {
    var Z = Object.getOwnPropertySymbols(I);
    d && (Z = Z.filter(function(C) {
      return Object.getOwnPropertyDescriptor(I, C).enumerable
    })), G.push.apply(G, Z)
  }
  return G
}
// @from(Start 6366111, End 6366548)
function Qf2(I) {
  for (var d = 1; d < arguments.length; d++) {
    var G = arguments[d] != null ? arguments[d] : {};
    d % 2 ? zf2(Object(G), !0).forEach(function(Z) {
      uB9(I, Z, G[Z])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(I, Object.getOwnPropertyDescriptors(G)) : zf2(Object(G)).forEach(function(Z) {
      Object.defineProperty(I, Z, Object.getOwnPropertyDescriptor(G, Z))
    })
  }
  return I
}
// @from(Start 6366550, End 6366873)
function PB9(I, d) {
  if (typeof I != "object" || !I) return I;
  var G = I[Symbol.toPrimitive];
  if (G !== void 0) {
    var Z = G.call(I, d || "default");
    if (typeof Z != "object") return Z;
    throw new TypeError("@@toPrimitive must return a primitive value.")
  }
  return (d === "string" ? String : Number)(I)
}
// @from(Start 6366875, End 6366965)
function $B9(I) {
  var d = PB9(I, "string");
  return typeof d == "symbol" ? d : d + ""
}
// @from(Start 6366967, End 6367255)
function OK1(I) {
  return OK1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(d) {
    return typeof d
  } : function(d) {
    return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d
  }, OK1(I)
}
// @from(Start 6367257, End 6367445)
function uB9(I, d, G) {
  if (d = $B9(d), d in I) Object.defineProperty(I, d, {
    value: G,
    enumerable: !0,
    configurable: !0,
    writable: !0
  });
  else I[d] = G;
  return I
}
// @from(Start 6367447, End 6367511)
function $K1(I) {
  return TB9(I) || OB9(I) || mB9(I) || lB9()
}
// @from(Start 6367513, End 6367570)
function TB9(I) {
  if (Array.isArray(I)) return mK1(I)
}
// @from(Start 6367572, End 6367706)
function OB9(I) {
  if (typeof Symbol !== "undefined" && I[Symbol.iterator] != null || I["@@iterator"] != null) return Array.from(I)
}
// @from(Start 6367708, End 6368068)
function mB9(I, d) {
  if (!I) return;
  if (typeof I === "string") return mK1(I, d);
  var G = Object.prototype.toString.call(I).slice(8, -1);
  if (G === "Object" && I.constructor) G = I.constructor.name;
  if (G === "Map" || G === "Set") return Array.from(I);
  if (G === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(G)) return mK1(I, d)
}
// @from(Start 6368070, End 6368211)
function mK1(I, d) {
  if (d == null || d > I.length) d = I.length;
  for (var G = 0, Z = new Array(d); G < d; G++) Z[G] = I[G];
  return Z
}
// @from(Start 6368213, End 6368388)
function lB9() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
// @from(Start 6368393, End 6368404)
lu = new MW
// @from(Start 6368876, End 6369621)
function lK1(I, d, G, Z, C) {
  if (d = d || [], G = G || [], Z) I = Z(C, I);
  var W;
  for (W = 0; W < d.length; W += 1)
    if (d[W] === I) return G[W];
  var w;
  if (Object.prototype.toString.call(I) === "[object Array]") {
    d.push(I), w = new Array(I.length), G.push(w);
    for (W = 0; W < I.length; W += 1) w[W] = lK1(I[W], d, G, Z, C);
    return d.pop(), G.pop(), w
  }
  if (I && I.toJSON) I = I.toJSON();
  if (OK1(I) === "object" && I !== null) {
    d.push(I), w = {}, G.push(w);
    var B = [],
      A;
    for (A in I)
      if (Object.prototype.hasOwnProperty.call(I, A)) B.push(A);
    B.sort();
    for (W = 0; W < B.length; W += 1) A = B[W], w[A] = lK1(I[A], d, G, Z, A);
    d.pop(), G.pop()
  } else w = I;
  return w
}
// @from(Start 6369626, End 6369638)
bK1 = new MW
// @from(Start 6369749, End 6372120)
function ff2(I, d, G, Z, C, W, w) {
  if (!w) w = {};
  if (typeof w === "function") w = {
    callback: w
  };
  if (typeof w.context === "undefined") w.context = 4;
  if (w.newlineIsToken) throw new Error("newlineIsToken may not be used with patch-generation functions, only with diffing functions");
  if (!w.callback) return V(Nf2(G, Z, w));
  else {
    var B = w,
      A = B.callback;
    Nf2(G, Z, Qf2(Qf2({}, w), {}, {
      callback: function X(_) {
        var F = V(_);
        A(F)
      }
    }))
  }

  function V(X) {
    if (!X) return;
    X.push({
      value: "",
      lines: []
    });

    function _(V1) {
      return V1.map(function(c) {
        return " " + c
      })
    }
    var F = [],
      g = 0,
      J = 0,
      K = [],
      Q = 1,
      E = 1,
      S = function V1() {
        var c = X[P],
          c1 = c.lines || bB9(c.value);
        if (c.lines = c1, c.added || c.removed) {
          var o1;
          if (!g) {
            var a1 = X[P - 1];
            if (g = Q, J = E, a1) K = w.context > 0 ? _(a1.lines.slice(-w.context)) : [], g -= K.length, J -= K.length
          }
          if ((o1 = K).push.apply(o1, $K1(c1.map(function(T1) {
              return (c.added ? "+" : "-") + T1
            }))), c.added) E += c1.length;
          else Q += c1.length
        } else {
          if (g)
            if (c1.length <= w.context * 2 && P < X.length - 2) {
              var f1;
              (f1 = K).push.apply(f1, $K1(_(c1)))
            } else {
              var r, A1 = Math.min(c1.length, w.context);
              (r = K).push.apply(r, $K1(_(c1.slice(0, A1))));
              var m1 = {
                oldStart: g,
                oldLines: Q - g + A1,
                newStart: J,
                newLines: E - J + A1,
                lines: K
              };
              F.push(m1), g = 0, J = 0, K = []
            } Q += c1.length, E += c1.length
        }
      };
    for (var P = 0; P < X.length; P++) S();
    for (var $ = 0, h = F; $ < h.length; $++) {
      var O = h[$];
      for (var T = 0; T < O.lines.length; T++)
        if (O.lines[T].endsWith(`
`)) O.lines[T] = O.lines[T].slice(0, -1);
        else O.lines.splice(T + 1, 0, "\\ No newline at end of file"), T++
    }
    return {
      oldFileName: I,
      newFileName: d,
      oldHeader: C,
      newHeader: W,
      hunks: F
    }
  }
}
// @from(Start 6372122, End 6372302)
function bB9(I) {
  var d = I.endsWith(`
`),
    G = I.split(`
`).map(function(Z) {
      return Z + `
`
    });
  if (d) G.pop();
  else G.push(G.pop().slice(0, -1));
  return G
}
// @from(Start 6372307, End 6372314)
hB9 = 3
// @from(Start 6372318, End 6372346)
bu = "<<:AMPERSAND_TOKEN:>>"
// @from(Start 6372350, End 6372375)
hu = "<<:DOLLAR_TOKEN:>>"
// @from(Start 6372378, End 6372805)
function KX({
  filePath: I,
  fileContents: d,
  oldStr: G,
  newStr: Z
}) {
  return ff2(I, I, d.replaceAll("&", bu).replaceAll("$", hu), d.replaceAll("&", bu).replaceAll("$", hu).replace(G.replaceAll("&", bu).replaceAll("$", hu), Z.replaceAll("&", bu).replaceAll("$", hu)), void 0, void 0, {
    context: hB9
  }).hunks.map((C) => ({
    ...C,
    lines: C.lines.map((W) => W.replaceAll(bu, "&").replaceAll(hu, "$"))
  }))
}
// @from(Start 6372807, End 6373364)
function hK1(I, d, G) {
  let Z = jB9(I) ? I : kB9(R0(), I),
    C, W;
  if (d === "") C = "", W = G;
  else {
    let B = dd(Z);
    if (C = xB9(Z, B), G === "")
      if (!d.endsWith(`
`) && C.includes(d + `
`)) W = C.replace(d + `
`, () => G);
      else W = C.replace(d, () => G);
    else W = C.replace(d, () => G);
    if (W === C) throw new Error("Original and edited file match exactly. Failed to apply edit.")
  }
  return {
    patch: KX({
      filePath: I,
      fileContents: C,
      oldStr: C,
      newStr: W
    }),
    updatedFile: W
  }
}
// @from(Start 6373369, End 6373602)
nB9 = s.strictObject({
    file_path: s.string().describe("The absolute path to the file to modify"),
    old_string: s.string().describe("The text to replace"),
    new_string: s.string().describe("The text to replace it with")
  })
// @from(Start 6373606, End 6373613)
Ef2 = 4
// @from(Start 6373617, End 6378756)
p7 = {
    name: "Edit",
    async description() {
      return "A tool for editing files"
    },
    async prompt() {
      return Df2
    },
    inputSchema: nB9,
    userFacingName({
      old_string: I,
      new_string: d
    }) {
      if (I === "") return "Create";
      if (d === "") return "Delete";
      return "Update"
    },
    async isEnabled() {
      return !0
    },
    needsPermissions({
      file_path: I
    }) {
      return !OR(I)
    },
    isReadOnly() {
      return !1
    },
    renderToolUseMessage(I, {
      verbose: d
    }) {
      return `file_path: ${d?I.file_path:Uf2(R0(),I.file_path)}`
    },
    renderToolResultMessage({
      filePath: I,
      structuredPatch: d
    }, {
      verbose: G
    }) {
      return y3.createElement(To, {
        filePath: I,
        structuredPatch: d,
        verbose: G
      })
    },
    renderToolUseRejectedMessage({
      file_path: I,
      old_string: d,
      new_string: G
    }, {
      columns: Z,
      verbose: C
    }) {
      try {
        let {
          patch: W
        } = hK1(I, d, G);
        return y3.createElement(p, {
          flexDirection: "column"
        }, y3.createElement(u, null, "  ", "⎿", " ", y3.createElement(u, {
          color: r1().error
        }, "User rejected ", d === "" ? "write" : "update", " to", " "), y3.createElement(u, {
          bold: !0
        }, C ? I : Uf2(R0(), I))), hB(W.map((w) => y3.createElement(p, {
          flexDirection: "column",
          paddingLeft: 5,
          key: w.newStart
        }, y3.createElement(nZ, {
          patch: w,
          dim: !0,
          width: Z - 12
        }))), (w) => y3.createElement(p, {
          paddingLeft: 5,
          key: `ellipsis-${w}`
        }, y3.createElement(u, {
          color: r1().secondaryText
        }, "..."))))
      } catch (W) {
        return X0(W), y3.createElement(p, {
          flexDirection: "column"
        }, y3.createElement(u, null, "  ", "⎿ (No changes)"))
      }
    },
    async validateInput({
      file_path: I,
      old_string: d,
      new_string: G
    }, {
      readFileTimestamps: Z
    }) {
      if (d === G) return {
        result: !1,
        message: "No changes to make: old_string and new_string are exactly the same.",
        meta: {
          old_string: d
        }
      };
      let C = ju(I) ? I : vf2(R0(), I);
      if (YU(C) && d === "") return {
        result: !1,
        message: "Cannot create new file - file already exists."
      };
      if (!YU(C) && d === "") return {
        result: !0
      };
      if (!YU(C)) {
        let _ = Yf(C),
          F = "File does not exist.";
        if (_) F += ` Did you mean ${_}?`;
        return {
          result: !1,
          message: F
        }
      }
      if (C.endsWith(".ipynb")) return {
        result: !1,
        message: `File is a Jupyter Notebook. Use the ${RI.name} to edit this file.`
      };
      let W = Z[C];
      if (!W) return {
        result: !1,
        message: "File has not been read yet. Read it first before writing to it.",
        meta: {
          isFilePathAbsolute: String(ju(I))
        }
      };
      if (Rf2(C).mtimeMs > W) return {
        result: !1,
        message: "File has been modified since read, either by the user or by a linter. Read it again before attempting to write it."
      };
      let A = dd(C),
        V = qf2(C, A);
      if (!V.includes(d)) return {
        result: !1,
        message: "String to replace not found in file.",
        meta: {
          isFilePathAbsolute: String(ju(I))
        }
      };
      let X = V.split(d).length - 1;
      if (X > 1) return {
        result: !1,
        message: `Found ${X} matches of the string to replace. For safety, this tool only supports replacing exactly one occurrence at a time. Add more lines of context to your edit and try again.`,
        meta: {
          isFilePathAbsolute: String(ju(I))
        }
      };
      return {
        result: !0
      }
    },
    async * call({
      file_path: I,
      old_string: d,
      new_string: G
    }, {
      readFileTimestamps: Z
    }) {
      let {
        patch: C,
        updatedFile: W
      } = hK1(I, d, G), w = ju(I) ? I : vf2(R0(), I), B = pB9(w);
      cB9(B, {
        recursive: !0
      });
      let A = YU(w) ? dd(w) : "utf8",
        V = YU(w) ? Sg(w) : "LF",
        X = YU(w) ? qf2(w, A) : "";
      if (Xf(w, W, A, V), Z[w] = Rf2(w).mtimeMs, w.endsWith(`${iB9}CLAUDE.md`)) I0("tengu_write_claudemd", {});
      let _ = {
        filePath: I,
        oldString: d,
        newString: G,
        originalFile: X,
        structuredPatch: C
      };
      yield {
        type: "result",
        data: _,
        resultForAssistant: this.renderResultForAssistant(_)
      }
    },
    renderResultForAssistant({
      filePath: I,
      originalFile: d,
      oldString: G,
      newString: Z
    }) {
      let {
        snippet: C,
        startLine: W
      } = rB9(d || "", G, Z);
      return `The file ${I} has been updated. Here's the result of running \`cat -n\` on a snippet of the edited file:
${_f({content:C,startLine:W})}`
    }
  }
// @from(Start 6378759, End 6379034)
function rB9(I, d, G) {
  let C = (I.split(d)[0] ?? "").split(/\r?\n/).length - 1,
    W = I.replace(d, G).split(/\r?\n/),
    w = Math.max(0, C - Ef2),
    B = C + Ef2 + G.split(/\r?\n/).length;
  return {
    snippet: W.slice(w, B + 1).join(`
`),
    startLine: w + 1
  }
}
// @from(Start 6379143, End 6379159)
Y5 = J1(u1(), 1)
// @from(Start 6379331, End 6379676)
Mf2 = `Write a file to the local filesystem. Overwrites the existing file if there is one.

Before using this tool:

1. Use the ReadFile tool to understand the file's contents and context

2. Directory Verification (only applicable when creating new files):
   - Use the LS tool to verify the parent directory exists and is the correct location`
// @from(Start 6379682, End 6379690)
pK1 = 10
// @from(Start 6379694, End 6379705)
yf2 = 16000
// @from(Start 6379709, End 6379952)
IA9 = "<response clipped><NOTE>To save on context only part of this file has been shown to you. You should retry this tool after you have searched inside the file with Grep in order to find the line numbers of what you are looking for.</NOTE>"
// @from(Start 6379956, End 6380163)
dA9 = s.strictObject({
    file_path: s.string().describe("The absolute path to the file to write (must be absolute, not relative)"),
    content: s.string().describe("The content to write to the file")
  })
// @from(Start 6380167, End 6385307)
R8 = {
    name: "Replace",
    async description() {
      return "Write a file to the local filesystem."
    },
    userFacingName: () => "Write",
    async prompt() {
      return Mf2
    },
    inputSchema: dA9,
    async isEnabled() {
      return !0
    },
    isReadOnly() {
      return !1
    },
    needsPermissions({
      file_path: I
    }) {
      return !OR(I)
    },
    renderToolUseMessage(I, {
      verbose: d
    }) {
      return `file_path: ${d?I.file_path:xK1(R0(),I.file_path)}`
    },
    renderToolUseRejectedMessage({
      file_path: I,
      content: d
    }, {
      columns: G,
      verbose: Z
    }) {
      try {
        let C = kK1(I) ? I : cK1(R0(), I),
          W = jK1(C),
          w = W ? dd(C) : "utf-8",
          B = W ? Sf2(C, w) : null,
          A = B ? "update" : "create",
          V = KX({
            filePath: I,
            fileContents: B ?? "",
            oldStr: B ?? "",
            newStr: d
          });
        return Y5.createElement(p, {
          flexDirection: "column"
        }, Y5.createElement(u, null, "  ", "⎿", " ", Y5.createElement(u, {
          color: r1().error
        }, "User rejected ", A === "update" ? "update" : "write", " to", " "), Y5.createElement(u, {
          bold: !0
        }, Z ? I : xK1(R0(), I))), hB(V.map((X) => Y5.createElement(p, {
          flexDirection: "column",
          paddingLeft: 5,
          key: X.newStart
        }, Y5.createElement(nZ, {
          patch: X,
          dim: !0,
          width: G - 12
        }))), (X) => Y5.createElement(p, {
          paddingLeft: 5,
          key: `ellipsis-${X}`
        }, Y5.createElement(u, {
          color: r1().secondaryText
        }, "..."))))
      } catch (C) {
        return X0(C), Y5.createElement(p, {
          flexDirection: "column"
        }, Y5.createElement(u, null, "  ", "⎿ (No changes)"))
      }
    },
    renderToolResultMessage({
      filePath: I,
      content: d,
      structuredPatch: G,
      type: Z
    }, {
      verbose: C
    }) {
      switch (Z) {
        case "create": {
          let W = d || "(No content)",
            w = d.split(sB9).length;
          return Y5.createElement(p, {
            flexDirection: "column"
          }, Y5.createElement(u, null, "  ", "⎿ Wrote ", w, " lines to", " ", Y5.createElement(u, {
            bold: !0
          }, C ? I : xK1(R0(), I))), Y5.createElement(p, {
            flexDirection: "column",
            paddingLeft: 5
          }, Y5.createElement(yB, {
            code: C ? W : W.split(`
`).slice(0, pK1).filter((B) => B.trim() !== "").join(`
`),
            language: eB9(I).slice(1)
          }), !C && w > pK1 && Y5.createElement(u, {
            color: r1().secondaryText
          }, "... (+", w - pK1, " lines)")))
        }
        case "update":
          return Y5.createElement(To, {
            filePath: I,
            structuredPatch: G,
            verbose: C
          })
      }
    },
    async validateInput({
      file_path: I
    }, {
      readFileTimestamps: d
    }) {
      let G = kK1(I) ? I : cK1(R0(), I);
      if (!jK1(G)) return {
        result: !0
      };
      let Z = d[G];
      if (!Z) return {
        result: !1,
        message: "File has not been read yet. Read it first before writing to it."
      };
      if (Lf2(G).mtimeMs > Z) return {
        result: !1,
        message: "File has been modified since read, either by the user or by a linter. Read it again before attempting to write it."
      };
      return {
        result: !0
      }
    },
    async * call({
      file_path: I,
      content: d
    }, {
      readFileTimestamps: G
    }) {
      let Z = kK1(I) ? I : cK1(R0(), I),
        C = oB9(Z),
        W = jK1(Z),
        w = W ? dd(Z) : "utf-8",
        B = W ? Sf2(Z, w) : null,
        A = W ? Sg(Z) : await M40(R0());
      if (aB9(C, {
          recursive: !0
        }), Xf(Z, d, w, A), G[Z] = Lf2(Z).mtimeMs, Z.endsWith(`${tB9}CLAUDE.md`)) I0("tengu_write_claudemd", {});
      if (B) {
        let X = KX({
            filePath: I,
            fileContents: B,
            oldStr: B,
            newStr: d
          }),
          _ = {
            type: "update",
            filePath: I,
            content: d,
            structuredPatch: X
          };
        yield {
          type: "result",
          data: _,
          resultForAssistant: this.renderResultForAssistant(_)
        };
        return
      }
      let V = {
        type: "create",
        filePath: I,
        content: d,
        structuredPatch: []
      };
      yield {
        type: "result",
        data: V,
        resultForAssistant: this.renderResultForAssistant(V)
      }
    },
    renderResultForAssistant({
      filePath: I,
      content: d,
      type: G
    }) {
      switch (G) {
        case "create":
          return `File created successfully at: ${I}`;
        case "update":
          return `The file ${I} has been updated. Here's the result of running \`cat -n\` on a snippet of the edited file:
${_f({content:d.split(/\r?\n/).length>yf2?d.split(/\r?\n/).slice(0,yf2).join(`
`)+IA9:d,startLine:1})}`
      }
    }
  }
// @from(Start 6385313, End 6385329)
kB = J1(u1(), 1)
// @from(Start 6385395, End 6385412)
Pf2 = J1(u1(), 1)
// @from(Start 6385415, End 6385644)
function r3(I) {
  I0("tengu_unary_event", {
    event: I.event,
    completion_type: I.completion_type,
    language_name: I.metadata.language_name,
    message_id: I.metadata.message_id,
    platform: I.metadata.platform
  })
}
// @from(Start 6385646, End 6386127)
function RH(I, d) {
  Pf2.useEffect(() => {
    I0("tengu_tool_use_show_permission_request", {
      messageID: I.assistantMessage.message.id,
      toolName: I.tool.name
    }), Promise.resolve(d.language_name).then((Z) => {
      r3({
        completion_type: d.completion_type,
        event: "response",
        metadata: {
          language_name: Z,
          message_id: I.assistantMessage.message.id,
          platform: K2.platform
        }
      })
    })
  }, [I, d])
}
// @from(Start 6386132, End 6386230)
GA9 = new Set(["git status", "git diff", "git log", "git branch", "pwd", "tree", "date", "which"])
// @from(Start 6386234, End 6386448)
iK1 = (I, d, G) => {
    if (GA9.has(d)) return !0;
    if (G.includes(ku(I, {
        command: d
      }, null))) return !0;
    if (G.includes(ku(I, {
        command: d
      }, d))) return !0;
    return !1
  }
// @from(Start 6386452, End 6386570)
$f2 = (I, d, G, Z) => {
    if (iK1(I, d, Z)) return !0;
    return Z.includes(ku(I, {
      command: d
    }, G))
  }
// @from(Start 6386574, End 6387889)
ZA9 = async (I, d, G, Z, C = fa) => {
    if (iK1(I, d, Z)) return {
      result: !0
    };
    let W = NR(d).filter((B) => {
        if (B === `cd ${R0()}`) return !1;
        return !0
      }),
      w = await C(d, G.abortController.signal);
    if (G.abortController.signal.aborted) throw new Ez;
    if (w === null) return {
      result: !1,
      message: `Claude requested permissions to use ${I.name}, but you haven't granted it yet.`
    };
    if (w.commandInjectionDetected)
      if (iK1(I, d, Z)) return {
        result: !0
      };
      else return {
        result: !1,
        message: `Claude requested permissions to use ${I.name}, but you haven't granted it yet.`
      };
    if (W.length < 2)
      if ($f2(I, d, w.commandPrefix, Z)) return {
        result: !0
      };
      else return {
        result: !1,
        message: `Claude requested permissions to use ${I.name}, but you haven't granted it yet.`
      };
    if (W.every((B) => {
        let A = w.subcommandPrefixes.get(B);
        if (A === void 0 || A.commandInjectionDetected) return !1;
        return $f2(I, B, A ? A.commandPrefix : null, Z)
      })) return {
      result: !0
    };
    return {
      result: !1,
      message: `Claude requested permissions to use ${I.name}, but you haven't granted it yet.`
    }
  }
// @from(Start 6387891, End 6389102)
UH = async (I, d, G, Z) => {
    if (G.options.dangerouslySkipPermissions) return {
      result: !0
    };
    if (G.abortController.signal.aborted) throw new Ez;
    try {
      if (!I.needsPermissions(d)) return {
        result: !0
      }
    } catch (w) {
      return X0(`Error checking permissions: ${w}`), {
        result: !1,
        message: "Error checking permissions"
      }
    }
    let W = I5().allowedTools ?? [];
    if (I === G5 && W.includes(G5.name)) return {
      result: !0
    };
    switch (I) {
      case G5: {
        let {
          command: w
        } = o$.parse(d);
        return await ZA9(I, w, G, W)
      }
      case p7:
      case R8:
      case RI: {
        if (!I.needsPermissions(d)) return {
          result: !0
        };
        return {
          result: !1,
          message: `Claude requested permissions to use ${I.name}, but you haven't granted it yet.`
        }
      }
      default: {
        let w = ku(I, d, null);
        if (W.includes(w)) return {
          result: !0
        };
        return {
          result: !1,
          message: `Claude requested permissions to use ${I.name}, but you haven't granted it yet.`
        }
      }
    }
  }
// @from(Start 6389104, End 6389337)
async function NX(I, d, G) {
  let Z = ku(I, d, G);
  if (I === p7 || I === R8 || I === RI) {
    Vs();
    return
  }
  let C = I5();
  if (C.allowedTools.includes(Z)) return;
  C.allowedTools.push(Z), C.allowedTools.sort(), o9(C)
}
// @from(Start 6389339, End 6389528)
function ku(I, d, G) {
  switch (I) {
    case G5:
      if (G) return `${G5.name}(${G}:*)`;
      return `${G5.name}(${G5.renderToolUseMessage(d)})`;
    default:
      return I.name
  }
}
// @from(Start 6389533, End 6389549)
zX = J1(u1(), 1)
// @from(Start 6389552, End 6389628)
function uf2(I) {
  return I >= 70 ? "high" : I >= 30 ? "moderate" : "low"
}
// @from(Start 6389630, End 6389976)
function CA9(I) {
  let d = r1();
  switch (I) {
    case "low":
      return {
        highlightColor: d.success, textColor: d.permission
      };
    case "moderate":
      return {
        highlightColor: d.warning, textColor: d.warning
      };
    case "high":
      return {
        highlightColor: d.error, textColor: d.error
      }
  }
}
// @from(Start 6389978, End 6390082)
function QX(I) {
  if (I === null) return r1().permission;
  let d = uf2(I);
  return CA9(d).textColor
}
// @from(Start 6390084, End 6390204)
function WA9({
  riskScore: I
}) {
  let d = uf2(I);
  return zX.createElement(u, {
    color: QX(I)
  }, "Risk: ", d)
}
// @from(Start 6390206, End 6390450)
function jB({
  title: I,
  riskScore: d
}) {
  return zX.createElement(p, {
    flexDirection: "column"
  }, zX.createElement(u, {
    bold: !0,
    color: r1().permission
  }, I), d !== null && zX.createElement(WA9, {
    riskScore: d
  }))
}
// @from(Start 6390455, End 6390471)
KG = J1(u1(), 1)
// @from(Start 6390475, End 6390492)
nK1 = J1(u1(), 1)
// @from(Start 6390602, End 6391444)
function ho({
  file_path: I,
  new_string: d,
  old_string: G,
  verbose: Z,
  useBorder: C = !0,
  width: W
}) {
  let w = nK1.useMemo(() => wA9(I) ? BA9(I, "utf8") : "", [I]),
    B = nK1.useMemo(() => KX({
      filePath: I,
      fileContents: w,
      oldStr: G,
      newStr: d
    }), [I, w, G, d]);
  return KG.createElement(p, {
    flexDirection: "column"
  }, KG.createElement(p, {
    borderColor: r1().secondaryBorder,
    borderStyle: C ? "round" : void 0,
    flexDirection: "column",
    paddingX: 1
  }, KG.createElement(p, {
    paddingBottom: 1
  }, KG.createElement(u, {
    bold: !0
  }, Z ? I : AA9(R0(), I))), hB(B.map((A) => KG.createElement(nZ, {
    key: A.newStart,
    patch: A,
    dim: !1,
    width: W
  })), (A) => KG.createElement(u, {
    color: r1().secondaryText,
    key: `ellipsis-${A}`
  }, "..."))))
}
// @from(Start 6391446, End 6391757)
function YA9(I) {
  let d = As(I) ? [{
    label: "Yes, and don't ask again this session",
    value: "yes-dont-ask-again"
  }] : [];
  return [{
    label: "Yes",
    value: "yes"
  }, ...d, {
    label: `No, and tell Claude what to do differently (${j0.bold.hex(r1().warning)("esc")})`,
    value: "no"
  }]
}
// @from(Start 6391759, End 6394057)
function Tf2({
  toolUseConfirm: I,
  onDone: d,
  verbose: G
}) {
  let {
    columns: Z
  } = G9(), {
    file_path: C,
    new_string: W,
    old_string: w
  } = I.input, B = kB.useMemo(() => ({
    completion_type: "str_replace_single",
    language_name: jo(C)
  }), [C]);
  return RH(I, B), kB.default.createElement(p, {
    flexDirection: "column",
    borderStyle: "round",
    borderColor: QX(I.riskScore),
    marginTop: 1,
    paddingLeft: 1,
    paddingRight: 1,
    paddingBottom: 1
  }, kB.default.createElement(jB, {
    title: "Edit file",
    riskScore: I.riskScore
  }), kB.default.createElement(ho, {
    file_path: C,
    new_string: W,
    old_string: w,
    verbose: G,
    width: Z - 12
  }), kB.default.createElement(p, {
    flexDirection: "column"
  }, kB.default.createElement(u, null, "Do you want to make this edit to", " ", kB.default.createElement(u, {
    bold: !0
  }, VA9(C)), "?"), kB.default.createElement(Q6, {
    options: YA9(C),
    onChange: (A) => {
      switch (A) {
        case "yes":
          jo(C).then((V) => {
            r3({
              completion_type: "str_replace_single",
              event: "accept",
              metadata: {
                language_name: V,
                message_id: I.assistantMessage.message.id,
                platform: K2.platform
              }
            })
          }), d(), I.onAllow("temporary");
          break;
        case "yes-dont-ask-again":
          jo(C).then((V) => {
            r3({
              completion_type: "str_replace_single",
              event: "accept",
              metadata: {
                language_name: V,
                message_id: I.assistantMessage.message.id,
                platform: K2.platform
              }
            })
          }), NX(I.tool, I.input, xB(I)).then(() => {
            d(), I.onAllow("permanent")
          });
          break;
        case "no":
          jo(C).then((V) => {
            r3({
              completion_type: "str_replace_single",
              event: "reject",
              metadata: {
                language_name: V,
                message_id: I.assistantMessage.message.id,
                platform: K2.platform
              }
            })
          }), d(), I.onReject();
          break
      }
    }
  })))
}
// @from(Start 6394058, End 6394238)
async function jo(I) {
  let d = XA9(I);
  if (!d) return "unknown";
  return (await Promise.resolve().then(() => J1(UR(), 1))).default.getLanguage(d.slice(1))?.name ?? "unknown"
}
// @from(Start 6394243, End 6394259)
SW = J1(u1(), 1)
// @from(Start 6394265, End 6394282)
Of2 = J1(u1(), 1)
// @from(Start 6394285, End 6394767)
function mf2(I, d) {
  Of2.useEffect(() => {
    I0("tengu_tool_use_show_permission_request", {
      messageID: I.assistantMessage.message.id,
      toolName: I.tool.name
    }), Promise.resolve(d.language_name).then((Z) => {
      r3({
        completion_type: d.completion_type,
        event: "response",
        metadata: {
          language_name: Z,
          message_id: I.assistantMessage.message.id,
          platform: K2.platform
        }
      })
    })
  }, [I, d])
}
// @from(Start 6394769, End 6395004)
function xu(I, {
  assistantMessage: {
    message: {
      id: d
    }
  }
}, G) {
  r3({
    completion_type: I,
    event: G,
    metadata: {
      language_name: "none",
      message_id: d,
      platform: K2.platform
    }
  })
}
// @from(Start 6395006, End 6395669)
function lf2({
  toolUseConfirm: I,
  command: d
}) {
  let G = !pW2(d) && I.commandPrefix && !I.commandPrefix.commandInjectionDetected,
    Z = xB(I),
    C = G && Z !== null,
    W = [];
  if (C) W = [{
    label: `Yes, and don't ask again for ${j0.bold(Z)} commands in ${j0.bold(R0())}`,
    value: "yes-dont-ask-again-prefix"
  }];
  else if (G) W = [{
    label: `Yes, and don't ask again for ${j0.bold(d)} commands in ${j0.bold(R0())}`,
    value: "yes-dont-ask-again-full"
  }];
  return [{
    label: "Yes",
    value: "yes"
  }, ...W, {
    label: `No, and tell Claude what to do differently (${j0.bold.hex(r1().warning)("esc")})`,
    value: "no"
  }]
}
// @from(Start 6395671, End 6397427)
function bf2({
  toolUseConfirm: I,
  onDone: d
}) {
  let G = r1(),
    {
      command: Z
    } = G5.inputSchema.parse(I.input),
    C = SW.useMemo(() => ({
      completion_type: "tool_use_single",
      language_name: "none"
    }), []);
  return mf2(I, C), SW.default.createElement(p, {
    flexDirection: "column",
    borderStyle: "round",
    borderColor: G.permission,
    marginTop: 1,
    paddingLeft: 1,
    paddingRight: 1,
    paddingBottom: 1
  }, SW.default.createElement(jB, {
    title: "Bash command",
    riskScore: I.riskScore
  }), SW.default.createElement(p, {
    flexDirection: "column",
    paddingX: 2,
    paddingY: 1
  }, SW.default.createElement(u, null, G5.renderToolUseMessage({
    command: Z
  })), SW.default.createElement(u, {
    color: G.secondaryText
  }, I.description)), SW.default.createElement(p, {
    flexDirection: "column"
  }, SW.default.createElement(u, null, "Do you want to proceed?"), SW.default.createElement(N_, {
    options: lf2({
      toolUseConfirm: I,
      command: Z
    }),
    onChange: (W) => {
      switch (W) {
        case "yes":
          xu("tool_use_single", I, "accept"), I.onAllow("temporary"), d();
          break;
        case "yes-dont-ask-again-prefix": {
          let w = xB(I);
          if (w !== null) xu("tool_use_single", I, "accept"), NX(I.tool, I.input, w).then(() => {
            I.onAllow("permanent"), d()
          });
          break
        }
        case "yes-dont-ask-again-full":
          xu("tool_use_single", I, "accept"), NX(I.tool, I.input, null).then(() => {
            I.onAllow("permanent"), d()
          });
          break;
        case "no":
          xu("tool_use_single", I, "reject"), I.onReject(), d();
          break
      }
    }
  })))
}
// @from(Start 6397432, End 6397448)
sZ = J1(u1(), 1)
// @from(Start 6397451, End 6400056)
function ko({
  toolUseConfirm: I,
  onDone: d,
  verbose: G
}) {
  let Z = r1(),
    C = I.tool.userFacingName(I.input),
    W = C.endsWith(" (MCP)") ? C.slice(0, -6) : C,
    w = sZ.useMemo(() => ({
      completion_type: "tool_use_single",
      language_name: "none"
    }), []);
  return RH(I, w), sZ.default.createElement(p, {
    flexDirection: "column",
    borderStyle: "round",
    borderColor: QX(I.riskScore),
    marginTop: 1,
    paddingLeft: 1,
    paddingRight: 1,
    paddingBottom: 1
  }, sZ.default.createElement(jB, {
    title: "Tool use",
    riskScore: I.riskScore
  }), sZ.default.createElement(p, {
    flexDirection: "column",
    paddingX: 2,
    paddingY: 1
  }, sZ.default.createElement(u, null, W, "(", I.tool.renderToolUseMessage(I.input, {
    verbose: G
  }), ")", C.endsWith(" (MCP)") ? sZ.default.createElement(u, {
    color: Z.secondaryText
  }, " (MCP)") : ""), sZ.default.createElement(u, {
    color: Z.secondaryText
  }, I.description)), sZ.default.createElement(p, {
    flexDirection: "column"
  }, sZ.default.createElement(u, null, "Do you want to proceed?"), sZ.default.createElement(Q6, {
    options: [{
      label: "Yes",
      value: "yes"
    }, {
      label: `Yes, and don't ask again for ${j0.bold(W)} commands in ${j0.bold(R0())}`,
      value: "yes-dont-ask-again"
    }, {
      label: `No, and tell Claude what to do differently (${j0.bold.hex(r1().warning)("esc")})`,
      value: "no"
    }],
    onChange: (B) => {
      switch (B) {
        case "yes":
          r3({
            completion_type: "tool_use_single",
            event: "accept",
            metadata: {
              language_name: "none",
              message_id: I.assistantMessage.message.id,
              platform: K2.platform
            }
          }), I.onAllow("temporary"), d();
          break;
        case "yes-dont-ask-again":
          r3({
            completion_type: "tool_use_single",
            event: "accept",
            metadata: {
              language_name: "none",
              message_id: I.assistantMessage.message.id,
              platform: K2.platform
            }
          }), NX(I.tool, I.input, xB(I)).then(() => {
            I.onAllow("permanent"), d()
          });
          break;
        case "no":
          r3({
            completion_type: "tool_use_single",
            event: "reject",
            metadata: {
              language_name: "none",
              message_id: I.assistantMessage.message.id,
              platform: K2.platform
            }
          }), I.onReject(), d();
          break
      }
    }
  })))
}
// @from(Start 6400061, End 6400078)
rK1 = J1(u1(), 1)
// @from(Start 6400084, End 6400094)
_A9 = 6000
// @from(Start 6400098, End 6400145)
hf2 = {
    lastInteractionTime: Date.now()
  }
// @from(Start 6400148, End 6400205)
function jf2() {
  hf2.lastInteractionTime = Date.now()
}
// @from(Start 6400207, End 6400271)
function DA9() {
  return Date.now() - hf2.lastInteractionTime
}
// @from(Start 6400273, End 6400311)
function HA9(I) {
  return DA9() < I
}
// @from(Start 6400313, End 6400349)
function FA9(I) {
  return !HA9(I)
}
// @from(Start 6400354, End 6400399)
gA9 = a2(() => process.stdin.on("data", jf2))
// @from(Start 6400402, End 6400678)
function xo(I, d = _A9) {
  rK1.useEffect(() => {
    gA9(), jf2()
  }, []), rK1.useEffect(() => {
    let G = !1,
      Z = setInterval(() => {
        if (FA9(d) && !G) G = !0, es({
          message: I
        })
      }, d);
    return () => clearTimeout(Z)
  }, [I, d])
}
// @from(Start 6400683, End 6400699)
oZ = J1(u1(), 1)
// @from(Start 6400807, End 6400823)
NG = J1(u1(), 1)
// @from(Start 6400827, End 6400843)
co = J1(u1(), 1)
// @from(Start 6400971, End 6401944)
function po({
  file_path: I,
  content: d,
  verbose: G,
  width: Z
}) {
  let C = co.useMemo(() => JA9(I), [I]),
    W = co.useMemo(() => {
      if (!C) return "";
      let B = dd(I);
      return KA9(I, B)
    }, [I, C]),
    w = co.useMemo(() => {
      if (!C) return null;
      return KX({
        filePath: I,
        fileContents: W,
        oldStr: W,
        newStr: d
      })
    }, [C, I, W, d]);
  return NG.createElement(p, {
    borderColor: r1().secondaryBorder,
    borderStyle: "round",
    flexDirection: "column",
    paddingX: 1
  }, NG.createElement(p, {
    paddingBottom: 1
  }, NG.createElement(u, {
    bold: !0
  }, G ? I : zA9(R0(), I))), w ? hB(w.map((B) => NG.createElement(nZ, {
    key: B.newStart,
    patch: B,
    dim: !1,
    width: Z
  })), (B) => NG.createElement(u, {
    color: r1().secondaryText,
    key: `ellipsis-${B}`
  }, "...")) : NG.createElement(yB, {
    code: d || "(No content)",
    language: NA9(I).slice(1)
  }))
}
// @from(Start 6401946, End 6404593)
function kf2({
  toolUseConfirm: I,
  onDone: d,
  verbose: G
}) {
  let {
    file_path: Z,
    content: C
  } = I.input, W = oZ.useMemo(() => qA9(Z), [Z]), w = oZ.useMemo(() => ({
    completion_type: "write_file_single",
    language_name: io(Z)
  }), [Z]), {
    columns: B
  } = G9();
  return RH(I, w), oZ.default.createElement(p, {
    flexDirection: "column",
    borderStyle: "round",
    borderColor: QX(I.riskScore),
    marginTop: 1,
    paddingLeft: 1,
    paddingRight: 1,
    paddingBottom: 1
  }, oZ.default.createElement(jB, {
    title: `${W?"Edit":"Create"} file`,
    riskScore: I.riskScore
  }), oZ.default.createElement(p, {
    flexDirection: "column"
  }, oZ.default.createElement(po, {
    file_path: Z,
    content: C,
    verbose: G,
    width: B - 12
  })), oZ.default.createElement(p, {
    flexDirection: "column"
  }, oZ.default.createElement(u, null, "Do you want to ", W ? "make this edit to" : "create", " ", oZ.default.createElement(u, {
    bold: !0
  }, QA9(Z)), "?"), oZ.default.createElement(Q6, {
    options: [{
      label: "Yes",
      value: "yes"
    }, {
      label: "Yes, and don't ask again this session",
      value: "yes-dont-ask-again"
    }, {
      label: `No, and tell Claude what to do differently (${j0.bold.hex(r1().warning)("esc")})`,
      value: "no"
    }],
    onChange: (A) => {
      switch (A) {
        case "yes":
          io(Z).then((V) => {
            r3({
              completion_type: "write_file_single",
              event: "accept",
              metadata: {
                language_name: V,
                message_id: I.assistantMessage.message.id,
                platform: K2.platform
              }
            })
          }), I.onAllow("temporary"), d();
          break;
        case "yes-dont-ask-again":
          io(Z).then((V) => {
            r3({
              completion_type: "write_file_single",
              event: "accept",
              metadata: {
                language_name: V,
                message_id: I.assistantMessage.message.id,
                platform: K2.platform
              }
            })
          }), NX(I.tool, I.input, xB(I)).then(() => {
            I.onAllow("permanent"), d()
          });
          break;
        case "no":
          io(Z).then((V) => {
            r3({
              completion_type: "write_file_single",
              event: "reject",
              metadata: {
                language_name: V,
                message_id: I.assistantMessage.message.id,
                platform: K2.platform
              }
            })
          }), I.onReject(), d();
          break
      }
    }
  })))
}
// @from(Start 6404594, End 6404774)
async function io(I) {
  let d = fA9(I);
  if (!d) return "unknown";
  return (await Promise.resolve().then(() => J1(UR(), 1))).default.getLanguage(d.slice(1))?.name ?? "unknown"
}
// @from(Start 6404779, End 6404795)
eZ = J1(u1(), 1)
// @from(Start 6404798, End 6405035)
function RA9(I) {
  switch (I.tool) {
    case R8:
    case p7:
    case Fd:
      return "file_path";
    case A7:
    case Kd:
    case zI:
      return "path";
    case RI:
    case VH:
      return "notebook_path"
  }
  return null
}
// @from(Start 6405037, End 6405147)
function UA9(I) {
  switch (I.tool) {
    case A7:
    case Kd:
    case zI:
      return !0
  }
  return !1
}
// @from(Start 6405149, End 6405313)
function vA9(I) {
  let d = RA9(I),
    G = I.input;
  if (d && d in G)
    if (typeof G[d] === "string") return BX(G[d]);
    else return BX(R0());
  return null
}
// @from(Start 6405315, End 6405620)
function xf2({
  toolUseConfirm: I,
  onDone: d,
  verbose: G
}) {
  let Z = vA9(I);
  if (!Z) return eZ.default.createElement(ko, {
    toolUseConfirm: I,
    onDone: d,
    verbose: G
  });
  return eZ.default.createElement(MA9, {
    toolUseConfirm: I,
    path: Z,
    onDone: d,
    verbose: G
  })
}
// @from(Start 6405622, End 6405811)
function EA9(I, d) {
  if (I.tool.isReadOnly()) return [];
  return As(d) ? [{
    label: "Yes, and don't ask again for file edits this session",
    value: "yes-dont-ask-again"
  }] : []
}
// @from(Start 6405813, End 6408074)
function MA9({
  toolUseConfirm: I,
  path: d,
  onDone: G,
  verbose: Z
}) {
  let C = I.tool.userFacingName(I.input),
    w = `${I.tool.isReadOnly()?"Read":"Edit"} ${UA9(I)?"files":"file"}`,
    B = eZ.useMemo(() => ({
      completion_type: "tool_use_single",
      language_name: "none"
    }), []);
  return RH(I, B), eZ.default.createElement(p, {
    flexDirection: "column",
    borderStyle: "round",
    borderColor: QX(I.riskScore),
    marginTop: 1,
    paddingLeft: 1,
    paddingRight: 1,
    paddingBottom: 1
  }, eZ.default.createElement(jB, {
    title: w,
    riskScore: I.riskScore
  }), eZ.default.createElement(p, {
    flexDirection: "column",
    paddingX: 2,
    paddingY: 1
  }, eZ.default.createElement(u, null, C, "(", I.tool.renderToolUseMessage(I.input, {
    verbose: Z
  }), ")")), eZ.default.createElement(p, {
    flexDirection: "column"
  }, eZ.default.createElement(u, null, "Do you want to proceed?"), eZ.default.createElement(Q6, {
    options: [{
      label: "Yes",
      value: "yes"
    }, ...EA9(I, d), {
      label: `No, and tell Claude what to do differently (${j0.bold.hex(r1().warning)("esc")})`,
      value: "no"
    }],
    onChange: (A) => {
      switch (A) {
        case "yes":
          r3({
            completion_type: "tool_use_single",
            event: "accept",
            metadata: {
              language_name: "none",
              message_id: I.assistantMessage.message.id,
              platform: K2.platform
            }
          }), I.onAllow("temporary"), G();
          break;
        case "yes-dont-ask-again":
          r3({
            completion_type: "tool_use_single",
            event: "accept",
            metadata: {
              language_name: "none",
              message_id: I.assistantMessage.message.id,
              platform: K2.platform
            }
          }), Vs(), I.onAllow("permanent"), G();
          break;
        case "no":
          r3({
            completion_type: "tool_use_single",
            event: "reject",
            metadata: {
              language_name: "none",
              message_id: I.assistantMessage.message.id,
              platform: K2.platform
            }
          }), I.onReject(), G();
          break
      }
    }
  })))
}
// @from(Start 6408076, End 6408332)
function SA9(I) {
  switch (I) {
    case p7:
      return Tf2;
    case R8:
      return kf2;
    case G5:
      return bf2;
    case A7:
    case Kd:
    case zI:
    case Fd:
    case VH:
    case RI:
      return xf2;
    default:
      return ko
  }
}
// @from(Start 6408334, End 6408463)
function xB(I) {
  return I.commandPrefix && !I.commandPrefix.commandInjectionDetected && I.commandPrefix.commandPrefix || null
}
// @from(Start 6408465, End 6408808)
function cf2({
  toolUseConfirm: I,
  onDone: d,
  verbose: G
}) {
  C4((W, w) => {
    if (w.ctrl && W === "c") d(), I.onReject()
  });
  let Z = I.tool.userFacingName(I.input);
  xo(`Claude needs your permission to use ${Z}`);
  let C = SA9(I.tool);
  return aK1.createElement(C, {
    toolUseConfirm: I,
    onDone: d,
    verbose: G
  })
}
// @from(Start 6408903, End 6408917)
pf2 = yA9(LA9)
// @from(Start 6408919, End 6410340)
async function PA9() {
  if (K2.platform === "windows") return [];
  if (!await eG()) return [];
  try {
    let I = "",
      {
        stdout: d
      } = await pf2("git log -n 1000 --pretty=format: --name-only --diff-filter=M --author=$(git config user.email) | sort | uniq -c | sort -nr | head -n 20", {
        cwd: R0(),
        encoding: "utf8"
      });
    if (I = `Files modified by user:
` + d, d.split(`
`).length < 10) {
      let {
        stdout: W
      } = await pf2("git log -n 1000 --pretty=format: --name-only --diff-filter=M | sort | uniq -c | sort -nr | head -n 20", {
        cwd: R0(),
        encoding: "utf8"
      });
      I += `

Files modified by other users:
` + W
    }
    let Z = (await jZ({
      systemPrompt: ["You are an expert at analyzing git history. Given a list of files and their modification counts, return exactly five filenames that are frequently modified and represent core application logic (not auto-generated files, dependencies, or configuration). Make sure filenames are diverse, not all in the same folder, and are a mix of user and other users. Return only the filenames' basenames (without the path) separated by newlines with no explanation."],
      userPrompt: I
    })).message.content[0];
    if (!Z || Z.type !== "text") return [];
    let C = Z.text.trim().split(`
`);
    if (C.length < 5) return [];
    return C
  } catch (I) {
    return X0(I), []
  }
}
// @from(Start 6410345, End 6411036)
no = a2(async () => {
  let I = q2(),
    d = I5(),
    G = Date.now(),
    Z = d.exampleFilesGeneratedAt ?? 0,
    C = 604800000;
  if (G - Z > 604800000) d.exampleFiles = [];
  let W = {
    ...I,
    numStartups: (I.numStartups ?? 0) + 1
  };
  if (p4(W), !d.exampleFiles?.length) PA9().then((B) => {
    if (B.length) o9({
      ...I5(),
      exampleFiles: B,
      exampleFilesGeneratedAt: Date.now()
    })
  });
  let w = d.exampleFiles?.length ? mF(d.exampleFiles) : "<filepath>";
  return ["fix lint errors", "fix typecheck errors", `how does ${w} work?`, `refactor ${w}`, "how do I log an error?", `edit ${w} to...`, `write a test for ${w}`, "create a util logging.py that..."]
})
// @from(Start 6411042, End 6411058)
Y2 = J1(u1(), 1)
// @from(Start 6411064, End 6411081)
oK1 = J1(u1(), 1)
// @from(Start 6411087, End 6411096)
$A9 = 100
// @from(Start 6411099, End 6411145)
function sK1() {
  return I5().history ?? []
}
// @from(Start 6411147, End 6411297)
function vH(I) {
  let d = I5(),
    G = d.history ?? [];
  if (G[0] === I) return;
  G.unshift(I), o9({
    ...d,
    history: G.slice(0, $A9)
  })
}
// @from(Start 6411299, End 6411992)
function if2(I, d) {
  let [G, Z] = oK1.useState(0), [C, W] = oK1.useState(""), w = (X) => {
    if (X !== void 0) {
      let _ = X.startsWith("!") ? "bash" : "prompt",
        F = _ === "bash" ? X.slice(1) : X;
      I(F, _)
    }
  };

  function B() {
    let X = sK1();
    if (G < X.length) {
      if (G === 0 && d.trim() !== "") W(d);
      let _ = G + 1;
      Z(_), w(X[G])
    }
  }

  function A() {
    let X = sK1();
    if (G > 1) {
      let _ = G - 1;
      Z(_), w(X[_ - 1])
    } else if (G === 1) Z(0), w(C)
  }

  function V() {
    W(""), Z(0)
  }
  return {
    historyIndex: G,
    setHistoryIndex: Z,
    onHistoryUp: B,
    onHistoryDown: A,
    resetHistory: V
  }
}
// @from(Start 6411997, End 6412013)
cu = J1(u1(), 1)
// @from(Start 6412016, End 6413398)
function nf2({
  commands: I,
  onInputChange: d,
  onSubmit: G,
  setCursorOffset: Z
}) {
  let [C, W] = cu.useState([]), [w, B] = cu.useState(-1);

  function A(X) {
    if (X.startsWith("/")) {
      let _ = X.slice(1).toLowerCase(),
        g = I.filter((K) => !K.isHidden).filter((K) => {
          let Q = [K.userFacingName()];
          if (K.aliases) Q.push(...K.aliases);
          return Q.some((E) => E.toLowerCase().startsWith(_))
        }).map((K) => K.userFacingName());
      W(g);
      let J = w > -1 ? g.indexOf(C[w]) : 0;
      if (J > -1) B(J);
      else B(0)
    } else W([]), B(-1)
  }
  C4((X, _) => {
    if (C.length > 0) {
      if (_.downArrow) return B((F) => F >= C.length - 1 ? 0 : F + 1), !0;
      else if (_.upArrow) return B((F) => F <= 0 ? C.length - 1 : F - 1), !0;
      else if (_.tab || _.return && w >= 0) {
        if (w === -1 && _.tab) B(0);
        let F = w >= 0 ? w : 0,
          g = C[F];
        if (!g) return !0;
        let J = "/" + g + " ";
        if (d(J), Z(J.length), W([]), B(-1), _.return) {
          let K = No(g, I);
          if (K.type !== "prompt" || (K.argNames ?? []).length === 0) G(J, !0)
        }
        return !0
      }
    }
  });
  let V = cu.useCallback(() => {
    W([]), B(-1)
  }, []);
  return {
    suggestions: C,
    selectedSuggestion: w,
    updateSuggestions: A,
    clearSuggestions: V
  }
}
// @from(Start 6413403, End 6413419)
V7 = J1(u1(), 1)
// @from(Start 6413425, End 6413442)
rf2 = J1(u1(), 1)
// @from(Start 6413444, End 6413768)
class ro extends rf2.Component {
  constructor(I) {
    super(I);
    this.state = {
      hasError: !1
    }
  }
  static getDerivedStateFromError() {
    return {
      hasError: !0
    }
  }
  componentDidCatch(I) {
    bl(I)
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children
  }
}
// @from(Start 6413773, End 6413789)
J9 = J1(u1(), 1)
// @from(Start 6413795, End 6413812)
af2 = J1(Fk(), 1)
// @from(Start 6413816, End 6413832)
ao = J1(u1(), 1)