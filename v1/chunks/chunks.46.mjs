
// @from(Start 4848577, End 4857063)
p_2 = Y((Lg3, c_2) => {
  var J49 = (I) => {
      return {
        IMPORTANT: {
          className: "meta",
          begin: "!important"
        },
        HEXCOLOR: {
          className: "number",
          begin: "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})"
        },
        ATTRIBUTE_SELECTOR_MODE: {
          className: "selector-attr",
          begin: /\[/,
          end: /\]/,
          illegal: "$",
          contains: [I.APOS_STRING_MODE, I.QUOTE_STRING_MODE]
        }
      }
    },
    K49 = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"],
    N49 = ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"],
    z49 = ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"],
    Q49 = ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"],
    f49 = ["align-content", "align-items", "align-self", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "auto", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "clip-path", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-variant", "font-variant-ligatures", "font-variation-settings", "font-weight", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inherit", "initial", "justify-content", "left", "letter-spacing", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "mask", "max-height", "max-width", "min-height", "min-width", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "right", "src", "tab-size", "table-layout", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index"].reverse();

  function q49(I) {
    let d = J49(I),
      G = "and or not only",
      Z = {
        className: "variable",
        begin: "\\$" + I.IDENT_RE
      },
      C = ["charset", "css", "debug", "extend", "font-face", "for", "import", "include", "keyframes", "media", "mixin", "page", "warn", "while"],
      W = "(?=[.\\s\\n[:,(])";
    return {
      name: "Stylus",
      aliases: ["styl"],
      case_insensitive: !1,
      keywords: "if else for in",
      illegal: "(" + ["\\?", "(\\bReturn\\b)", "(\\bEnd\\b)", "(\\bend\\b)", "(\\bdef\\b)", ";", "#\\s", "\\*\\s", "===\\s", "\\|", "%"].join("|") + ")",
      contains: [I.QUOTE_STRING_MODE, I.APOS_STRING_MODE, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, d.HEXCOLOR, {
        begin: "\\.[a-zA-Z][a-zA-Z0-9_-]*(?=[.\\s\\n[:,(])",
        className: "selector-class"
      }, {
        begin: "#[a-zA-Z][a-zA-Z0-9_-]*(?=[.\\s\\n[:,(])",
        className: "selector-id"
      }, {
        begin: "\\b(" + K49.join("|") + ")(?=[.\\s\\n[:,(])",
        className: "selector-tag"
      }, {
        className: "selector-pseudo",
        begin: "&?:(" + z49.join("|") + ")(?=[.\\s\\n[:,(])"
      }, {
        className: "selector-pseudo",
        begin: "&?::(" + Q49.join("|") + ")(?=[.\\s\\n[:,(])"
      }, d.ATTRIBUTE_SELECTOR_MODE, {
        className: "keyword",
        begin: /@media/,
        starts: {
          end: /[{;}]/,
          keywords: {
            $pattern: /[a-z-]+/,
            keyword: "and or not only",
            attribute: N49.join(" ")
          },
          contains: [I.CSS_NUMBER_MODE]
        }
      }, {
        className: "keyword",
        begin: "@((-(o|moz|ms|webkit)-)?(" + C.join("|") + "))\\b"
      }, Z, I.CSS_NUMBER_MODE, {
        className: "function",
        begin: "^[a-zA-Z][a-zA-Z0-9_-]*\\(.*\\)",
        illegal: "[\\n]",
        returnBegin: !0,
        contains: [{
          className: "title",
          begin: "\\b[a-zA-Z][a-zA-Z0-9_-]*"
        }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          contains: [d.HEXCOLOR, Z, I.APOS_STRING_MODE, I.CSS_NUMBER_MODE, I.QUOTE_STRING_MODE]
        }]
      }, {
        className: "attribute",
        begin: "\\b(" + f49.join("|") + ")\\b",
        starts: {
          end: /;|$/,
          contains: [d.HEXCOLOR, Z, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, I.CSS_NUMBER_MODE, I.C_BLOCK_COMMENT_MODE, d.IMPORTANT],
          illegal: /\./,
          relevance: 0
        }
      }]
    }
  }
  c_2.exports = q49
})
// @from(Start 4857069, End 4857842)
n_2 = Y((yg3, i_2) => {
  function R49(I) {
    return {
      name: "SubUnit",
      case_insensitive: !0,
      contains: [{
        className: "string",
        begin: `\\[
(multipart)?`,
        end: `\\]
`
      }, {
        className: "string",
        begin: "\\d{4}-\\d{2}-\\d{2}(\\s+)\\d{2}:\\d{2}:\\d{2}.\\d+Z"
      }, {
        className: "string",
        begin: "(\\+|-)\\d+"
      }, {
        className: "keyword",
        relevance: 10,
        variants: [{
          begin: "^(test|testing|success|successful|failure|error|skip|xfail|uxsuccess)(:?)\\s+(test)?"
        }, {
          begin: "^progress(:?)(\\s+)?(pop|push)?"
        }, {
          begin: "^tags:"
        }, {
          begin: "^time:"
        }]
      }]
    }
  }
  i_2.exports = R49
})
// @from(Start 4857848, End 4868898)
GD2 = Y((Pg3, dD2) => {
  function o_2(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function RR(I) {
    return U9("(?=", I, ")")
  }

  function U9(...I) {
    return I.map((G) => o_2(G)).join("")
  }

  function FI(...I) {
    return "(" + I.map((G) => o_2(G)).join("|") + ")"
  }
  var eF1 = (I) => U9(/\b/, I, /\w$/.test(I) ? /\b/ : /\B/),
    r_2 = ["Protocol", "Type"].map(eF1),
    rF1 = ["init", "self"].map(eF1),
    U49 = ["Any", "Self"],
    aF1 = ["associatedtype", "async", "await", /as\?/, /as!/, "as", "break", "case", "catch", "class", "continue", "convenience", "default", "defer", "deinit", "didSet", "do", "dynamic", "else", "enum", "extension", "fallthrough", /fileprivate\(set\)/, "fileprivate", "final", "for", "func", "get", "guard", "if", "import", "indirect", "infix", /init\?/, /init!/, "inout", /internal\(set\)/, "internal", "in", "is", "lazy", "let", "mutating", "nonmutating", /open\(set\)/, "open", "operator", "optional", "override", "postfix", "precedencegroup", "prefix", /private\(set\)/, "private", "protocol", /public\(set\)/, "public", "repeat", "required", "rethrows", "return", "set", "some", "static", "struct", "subscript", "super", "switch", "throws", "throw", /try\?/, /try!/, "try", "typealias", /unowned\(safe\)/, /unowned\(unsafe\)/, "unowned", "var", "weak", "where", "while", "willSet"],
    a_2 = ["false", "nil", "true"],
    v49 = ["assignment", "associativity", "higherThan", "left", "lowerThan", "none", "right"],
    E49 = ["#colorLiteral", "#column", "#dsohandle", "#else", "#elseif", "#endif", "#error", "#file", "#fileID", "#fileLiteral", "#filePath", "#function", "#if", "#imageLiteral", "#keyPath", "#line", "#selector", "#sourceLocation", "#warn_unqualified_access", "#warning"],
    s_2 = ["abs", "all", "any", "assert", "assertionFailure", "debugPrint", "dump", "fatalError", "getVaList", "isKnownUniquelyReferenced", "max", "min", "numericCast", "pointwiseMax", "pointwiseMin", "precondition", "preconditionFailure", "print", "readLine", "repeatElement", "sequence", "stride", "swap", "swift_unboxFromSwiftValueWithType", "transcode", "type", "unsafeBitCast", "unsafeDowncast", "withExtendedLifetime", "withUnsafeMutablePointer", "withUnsafePointer", "withVaList", "withoutActuallyEscaping", "zip"],
    e_2 = FI(/[/=\-+!*%<>&|^~?]/, /[\u00A1-\u00A7]/, /[\u00A9\u00AB]/, /[\u00AC\u00AE]/, /[\u00B0\u00B1]/, /[\u00B6\u00BB\u00BF\u00D7\u00F7]/, /[\u2016-\u2017]/, /[\u2020-\u2027]/, /[\u2030-\u203E]/, /[\u2041-\u2053]/, /[\u2055-\u205E]/, /[\u2190-\u23FF]/, /[\u2500-\u2775]/, /[\u2794-\u2BFF]/, /[\u2E00-\u2E7F]/, /[\u3001-\u3003]/, /[\u3008-\u3020]/, /[\u3030]/),
    t_2 = FI(e_2, /[\u0300-\u036F]/, /[\u1DC0-\u1DFF]/, /[\u20D0-\u20FF]/, /[\uFE00-\uFE0F]/, /[\uFE20-\uFE2F]/),
    sF1 = U9(e_2, t_2, "*"),
    ID2 = FI(/[a-zA-Z_]/, /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/, /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/, /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/, /[\u1E00-\u1FFF]/, /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/, /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/, /[\u2C00-\u2DFF\u2E80-\u2FFF]/, /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/, /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/, /[\uFE47-\uFEFE\uFF00-\uFFFD]/),
    Oa = FI(ID2, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),
    ZX = U9(ID2, Oa, "*"),
    oF1 = U9(/[A-Z]/, Oa, "*"),
    M49 = ["autoclosure", U9(/convention\(/, FI("swift", "block", "c"), /\)/), "discardableResult", "dynamicCallable", "dynamicMemberLookup", "escaping", "frozen", "GKInspectable", "IBAction", "IBDesignable", "IBInspectable", "IBOutlet", "IBSegueAction", "inlinable", "main", "nonobjc", "NSApplicationMain", "NSCopying", "NSManaged", U9(/objc\(/, ZX, /\)/), "objc", "objcMembers", "propertyWrapper", "requires_stored_property_inits", "testable", "UIApplicationMain", "unknown", "usableFromInline"],
    S49 = ["iOS", "iOSApplicationExtension", "macOS", "macOSApplicationExtension", "macCatalyst", "macCatalystApplicationExtension", "watchOS", "watchOSApplicationExtension", "tvOS", "tvOSApplicationExtension", "swift"];

  function L49(I) {
    let d = {
        match: /\s+/,
        relevance: 0
      },
      G = I.COMMENT("/\\*", "\\*/", {
        contains: ["self"]
      }),
      Z = [I.C_LINE_COMMENT_MODE, G],
      C = {
        className: "keyword",
        begin: U9(/\./, RR(FI(...r_2, ...rF1))),
        end: FI(...r_2, ...rF1),
        excludeBegin: !0
      },
      W = {
        match: U9(/\./, FI(...aF1)),
        relevance: 0
      },
      w = aF1.filter((a) => typeof a === "string").concat(["_|0"]),
      B = aF1.filter((a) => typeof a !== "string").concat(U49).map(eF1),
      A = {
        variants: [{
          className: "keyword",
          match: FI(...B, ...rF1)
        }]
      },
      V = {
        $pattern: FI(/\b\w+/, /#\w+/),
        keyword: w.concat(E49),
        literal: a_2
      },
      X = [C, W, A],
      _ = {
        match: U9(/\./, FI(...s_2)),
        relevance: 0
      },
      F = {
        className: "built_in",
        match: U9(/\b/, FI(...s_2), /(?=\()/)
      },
      g = [_, F],
      J = {
        match: /->/,
        relevance: 0
      },
      K = {
        className: "operator",
        relevance: 0,
        variants: [{
          match: sF1
        }, {
          match: `\\.(\\.|${t_2})+`
        }]
      },
      Q = [J, K],
      E = "([0-9]_*)+",
      S = "([0-9a-fA-F]_*)+",
      P = {
        className: "number",
        relevance: 0,
        variants: [{
          match: "\\b(([0-9]_*)+)(\\.(([0-9]_*)+))?([eE][+-]?(([0-9]_*)+))?\\b"
        }, {
          match: "\\b0x(([0-9a-fA-F]_*)+)(\\.(([0-9a-fA-F]_*)+))?([pP][+-]?(([0-9]_*)+))?\\b"
        }, {
          match: /\b0o([0-7]_*)+\b/
        }, {
          match: /\b0b([01]_*)+\b/
        }]
      },
      $ = (a = "") => ({
        className: "subst",
        variants: [{
          match: U9(/\\/, a, /[0\\tnr"']/)
        }, {
          match: U9(/\\/, a, /u\{[0-9a-fA-F]{1,8}\}/)
        }]
      }),
      h = (a = "") => ({
        className: "subst",
        match: U9(/\\/, a, /[\t ]*(?:[\r\n]|\r\n)/)
      }),
      O = (a = "") => ({
        className: "subst",
        label: "interpol",
        begin: U9(/\\/, a, /\(/),
        end: /\)/
      }),
      T = (a = "") => ({
        begin: U9(a, /"""/),
        end: U9(/"""/, a),
        contains: [$(a), h(a), O(a)]
      }),
      V1 = (a = "") => ({
        begin: U9(a, /"/),
        end: U9(/"/, a),
        contains: [$(a), O(a)]
      }),
      c = {
        className: "string",
        variants: [T(), T("#"), T("##"), T("###"), V1(), V1("#"), V1("##"), V1("###")]
      },
      c1 = {
        match: U9(/`/, ZX, /`/)
      },
      o1 = {
        className: "variable",
        match: /\$\d+/
      },
      a1 = {
        className: "variable",
        match: `\\$${Oa}+`
      },
      f1 = [c1, o1, a1],
      r = {
        match: /(@|#)available/,
        className: "keyword",
        starts: {
          contains: [{
            begin: /\(/,
            end: /\)/,
            keywords: S49,
            contains: [...Q, P, c]
          }]
        }
      },
      A1 = {
        className: "keyword",
        match: U9(/@/, FI(...M49))
      },
      m1 = {
        className: "meta",
        match: U9(/@/, ZX)
      },
      T1 = [r, A1, m1],
      e1 = {
        match: RR(/\b[A-Z]/),
        relevance: 0,
        contains: [{
          className: "type",
          match: U9(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, Oa, "+")
        }, {
          className: "type",
          match: oF1,
          relevance: 0
        }, {
          match: /[?!]+/,
          relevance: 0
        }, {
          match: /\.\.\./,
          relevance: 0
        }, {
          match: U9(/\s+&\s+/, RR(oF1)),
          relevance: 0
        }]
      },
      F0 = {
        begin: /</,
        end: />/,
        keywords: V,
        contains: [...Z, ...X, ...T1, J, e1]
      };
    e1.contains.push(F0);
    let P0 = {
        match: U9(ZX, /\s*:/),
        keywords: "_|0",
        relevance: 0
      },
      B0 = {
        begin: /\(/,
        end: /\)/,
        relevance: 0,
        keywords: V,
        contains: ["self", P0, ...Z, ...X, ...g, ...Q, P, c, ...f1, ...T1, e1]
      },
      a0 = {
        beginKeywords: "func",
        contains: [{
          className: "title",
          match: FI(c1.match, ZX, sF1),
          endsParent: !0,
          relevance: 0
        }, d]
      },
      e = {
        begin: /</,
        end: />/,
        contains: [...Z, e1]
      },
      G0 = {
        begin: FI(RR(U9(ZX, /\s*:/)), RR(U9(ZX, /\s+/, ZX, /\s*:/))),
        end: /:/,
        relevance: 0,
        contains: [{
          className: "keyword",
          match: /\b_\b/
        }, {
          className: "params",
          match: ZX
        }]
      },
      H1 = {
        begin: /\(/,
        end: /\)/,
        keywords: V,
        contains: [G0, ...Z, ...X, ...Q, P, c, ...T1, e1, B0],
        endsParent: !0,
        illegal: /["']/
      },
      j1 = {
        className: "function",
        match: RR(/\bfunc\b/),
        contains: [a0, e, H1, d],
        illegal: [/\[/, /%/]
      },
      i1 = {
        className: "function",
        match: /\b(subscript|init[?!]?)\s*(?=[<(])/,
        keywords: {
          keyword: "subscript init init? init!",
          $pattern: /\w+[?!]?/
        },
        contains: [e, H1, d],
        illegal: /\[|%/
      },
      E0 = {
        beginKeywords: "operator",
        end: I.MATCH_NOTHING_RE,
        contains: [{
          className: "title",
          match: sF1,
          endsParent: !0,
          relevance: 0
        }]
      },
      k = {
        beginKeywords: "precedencegroup",
        end: I.MATCH_NOTHING_RE,
        contains: [{
          className: "title",
          match: oF1,
          relevance: 0
        }, {
          begin: /{/,
          end: /}/,
          relevance: 0,
          endsParent: !0,
          keywords: [...v49, ...a_2],
          contains: [e1]
        }]
      };
    for (let a of c.variants) {
      let Z1 = a.contains.find((N1) => N1.label === "interpol");
      Z1.keywords = V;
      let Q1 = [...X, ...g, ...Q, P, c, ...f1];
      Z1.contains = [...Q1, {
        begin: /\(/,
        end: /\)/,
        contains: ["self", ...Q1]
      }]
    }
    return {
      name: "Swift",
      keywords: V,
      contains: [...Z, j1, i1, {
        className: "class",
        beginKeywords: "struct protocol class extension enum",
        end: "\\{",
        excludeEnd: !0,
        keywords: V,
        contains: [I.inherit(I.TITLE_MODE, {
          begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/
        }), ...X]
      }, E0, k, {
        beginKeywords: "import",
        end: /$/,
        contains: [...Z],
        relevance: 0
      }, ...X, ...g, ...Q, P, c, ...f1, ...T1, e1, B0]
    }
  }
  dD2.exports = L49
})
// @from(Start 4868904, End 4869581)
CD2 = Y(($g3, ZD2) => {
  function y49(I) {
    return {
      name: "Tagger Script",
      contains: [{
        className: "comment",
        begin: /\$noop\(/,
        end: /\)/,
        contains: [{
          begin: /\(/,
          end: /\)/,
          contains: ["self", {
            begin: /\\./
          }]
        }],
        relevance: 10
      }, {
        className: "keyword",
        begin: /\$(?!noop)[a-zA-Z][_a-zA-Z0-9]*/,
        end: /\(/,
        excludeEnd: !0
      }, {
        className: "variable",
        begin: /%[_a-zA-Z0-9:]*/,
        end: "%"
      }, {
        className: "symbol",
        begin: /\\./
      }]
    }
  }
  ZD2.exports = y49
})
// @from(Start 4869587, End 4872625)
wD2 = Y((ug3, WD2) => {
  function P49(I) {
    var d = "true false yes no null",
      G = "[\\w#;/?:@&=+$,.~*'()[\\]]+",
      Z = {
        className: "attr",
        variants: [{
          begin: "\\w[\\w :\\/.-]*:(?=[ \t]|$)"
        }, {
          begin: '"\\w[\\w :\\/.-]*":(?=[ \t]|$)'
        }, {
          begin: "'\\w[\\w :\\/.-]*':(?=[ \t]|$)"
        }]
      },
      C = {
        className: "template-variable",
        variants: [{
          begin: /\{\{/,
          end: /\}\}/
        }, {
          begin: /%\{/,
          end: /\}/
        }]
      },
      W = {
        className: "string",
        relevance: 0,
        variants: [{
          begin: /'/,
          end: /'/
        }, {
          begin: /"/,
          end: /"/
        }, {
          begin: /\S+/
        }],
        contains: [I.BACKSLASH_ESCAPE, C]
      },
      w = I.inherit(W, {
        variants: [{
          begin: /'/,
          end: /'/
        }, {
          begin: /"/,
          end: /"/
        }, {
          begin: /[^\s,{}[\]]+/
        }]
      }),
      B = "[0-9]{4}(-[0-9][0-9]){0,2}",
      A = "([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?",
      V = "(\\.[0-9]*)?",
      X = "([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?",
      _ = {
        className: "number",
        begin: "\\b" + B + A + V + X + "\\b"
      },
      F = {
        end: ",",
        endsWithParent: !0,
        excludeEnd: !0,
        keywords: d,
        relevance: 0
      },
      g = {
        begin: /\{/,
        end: /\}/,
        contains: [F],
        illegal: "\\n",
        relevance: 0
      },
      J = {
        begin: "\\[",
        end: "\\]",
        contains: [F],
        illegal: "\\n",
        relevance: 0
      },
      K = [Z, {
        className: "meta",
        begin: "^---\\s*$",
        relevance: 10
      }, {
        className: "string",
        begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
      }, {
        begin: "<%[%=-]?",
        end: "[%-]?%>",
        subLanguage: "ruby",
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0
      }, {
        className: "type",
        begin: "!\\w+!" + G
      }, {
        className: "type",
        begin: "!<" + G + ">"
      }, {
        className: "type",
        begin: "!" + G
      }, {
        className: "type",
        begin: "!!" + G
      }, {
        className: "meta",
        begin: "&" + I.UNDERSCORE_IDENT_RE + "$"
      }, {
        className: "meta",
        begin: "\\*" + I.UNDERSCORE_IDENT_RE + "$"
      }, {
        className: "bullet",
        begin: "-(?=[ ]|$)",
        relevance: 0
      }, I.HASH_COMMENT_MODE, {
        beginKeywords: d,
        keywords: {
          literal: d
        }
      }, _, {
        className: "number",
        begin: I.C_NUMBER_RE + "\\b",
        relevance: 0
      }, g, J, W],
      Q = [...K];
    return Q.pop(), Q.push(w), F.contains = Q, {
      name: "YAML",
      case_insensitive: !0,
      aliases: ["yml"],
      contains: K
    }
  }
  WD2.exports = P49
})
// @from(Start 4872631, End 4873294)
AD2 = Y((Tg3, BD2) => {
  function $49(I) {
    return {
      name: "Test Anything Protocol",
      case_insensitive: !0,
      contains: [I.HASH_COMMENT_MODE, {
        className: "meta",
        variants: [{
          begin: "^TAP version (\\d+)$"
        }, {
          begin: "^1\\.\\.(\\d+)$"
        }]
      }, {
        begin: /---$/,
        end: "\\.\\.\\.$",
        subLanguage: "yaml",
        relevance: 0
      }, {
        className: "number",
        begin: " (\\d+) "
      }, {
        className: "symbol",
        variants: [{
          begin: "^ok"
        }, {
          begin: "^not ok"
        }]
      }]
    }
  }
  BD2.exports = $49
})
// @from(Start 4873300, End 4875572)
YD2 = Y((Og3, XD2) => {
  function u49(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function T49(I) {
    return VD2("(", I, ")?")
  }

  function VD2(...I) {
    return I.map((G) => u49(G)).join("")
  }

  function O49(I) {
    let d = /[a-zA-Z_][a-zA-Z0-9_]*/,
      G = {
        className: "number",
        variants: [I.BINARY_NUMBER_MODE, I.C_NUMBER_MODE]
      };
    return {
      name: "Tcl",
      aliases: ["tk"],
      keywords: "after append apply array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd chan clock close concat continue dde dict encoding eof error eval exec exit expr fblocked fconfigure fcopy file fileevent filename flush for foreach format gets glob global history http if incr info interp join lappend|10 lassign|10 lindex|10 linsert|10 list llength|10 load lrange|10 lrepeat|10 lreplace|10 lreverse|10 lsearch|10 lset|10 lsort|10 mathfunc mathop memory msgcat namespace open package parray pid pkg::create pkg_mkIndex platform platform::shell proc puts pwd read refchan regexp registry regsub|10 rename return safe scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_startOfPreviousWord tcl_wordBreakAfter tcl_wordBreakBefore tcltest tclvars tell time tm trace unknown unload unset update uplevel upvar variable vwait while",
      contains: [I.COMMENT(";[ \\t]*#", "$"), I.COMMENT("^[ \\t]*#", "$"), {
        beginKeywords: "proc",
        end: "[\\{]",
        excludeEnd: !0,
        contains: [{
          className: "title",
          begin: "[ \\t\\n\\r]+(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*",
          end: "[ \\t\\n\\r]",
          endsWithParent: !0,
          excludeEnd: !0
        }]
      }, {
        className: "variable",
        variants: [{
          begin: VD2(/\$/, T49(/::/), d, "(::", d, ")*")
        }, {
          begin: "\\$\\{(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*",
          end: "\\}",
          contains: [G]
        }]
      }, {
        className: "string",
        contains: [I.BACKSLASH_ESCAPE],
        variants: [I.inherit(I.QUOTE_STRING_MODE, {
          illegal: null
        })]
      }, G]
    }
  }
  XD2.exports = O49
})
// @from(Start 4875578, End 4876473)
DD2 = Y((mg3, _D2) => {
  function m49(I) {
    return {
      name: "Thrift",
      keywords: {
        keyword: "namespace const typedef struct enum service exception void oneway set list map required optional",
        built_in: "bool byte i16 i32 i64 double string binary",
        literal: "true false"
      },
      contains: [I.QUOTE_STRING_MODE, I.NUMBER_MODE, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, {
        className: "class",
        beginKeywords: "struct enum service exception",
        end: /\{/,
        illegal: /\n/,
        contains: [I.inherit(I.TITLE_MODE, {
          starts: {
            endsWithParent: !0,
            excludeEnd: !0
          }
        })]
      }, {
        begin: "\\b(set|list|map)\\s*<",
        end: ">",
        keywords: "bool byte i16 i32 i64 double string binary",
        contains: ["self"]
      }]
    }
  }
  _D2.exports = m49
})
// @from(Start 4876479, End 4878409)
FD2 = Y((lg3, HD2) => {
  function l49(I) {
    let d = {
        className: "number",
        begin: "[1-9][0-9]*",
        relevance: 0
      },
      G = {
        className: "symbol",
        begin: ":[^\\]]+"
      },
      Z = {
        className: "built_in",
        begin: "(AR|P|PAYLOAD|PR|R|SR|RSR|LBL|VR|UALM|MESSAGE|UTOOL|UFRAME|TIMER|TIMER_OVERFLOW|JOINT_MAX_SPEED|RESUME_PROG|DIAG_REC)\\[",
        end: "\\]",
        contains: ["self", d, G]
      },
      C = {
        className: "built_in",
        begin: "(AI|AO|DI|DO|F|RI|RO|UI|UO|GI|GO|SI|SO)\\[",
        end: "\\]",
        contains: ["self", d, I.QUOTE_STRING_MODE, G]
      };
    return {
      name: "TP",
      keywords: {
        keyword: "ABORT ACC ADJUST AND AP_LD BREAK CALL CNT COL CONDITION CONFIG DA DB DIV DETECT ELSE END ENDFOR ERR_NUM ERROR_PROG FINE FOR GP GUARD INC IF JMP LINEAR_MAX_SPEED LOCK MOD MONITOR OFFSET Offset OR OVERRIDE PAUSE PREG PTH RT_LD RUN SELECT SKIP Skip TA TB TO TOOL_OFFSET Tool_Offset UF UT UFRAME_NUM UTOOL_NUM UNLOCK WAIT X Y Z W P R STRLEN SUBSTR FINDSTR VOFFSET PROG ATTR MN POS",
        literal: "ON OFF max_speed LPOS JPOS ENABLE DISABLE START STOP RESET"
      },
      contains: [Z, C, {
        className: "keyword",
        begin: "/(PROG|ATTR|MN|POS|END)\\b"
      }, {
        className: "keyword",
        begin: "(CALL|RUN|POINT_LOGIC|LBL)\\b"
      }, {
        className: "keyword",
        begin: "\\b(ACC|CNT|Skip|Offset|PSPD|RT_LD|AP_LD|Tool_Offset)"
      }, {
        className: "number",
        begin: "\\d+(sec|msec|mm/sec|cm/min|inch/min|deg/sec|mm|in|cm)?\\b",
        relevance: 0
      }, I.COMMENT("//", "[;$]"), I.COMMENT("!", "[;$]"), I.COMMENT("--eg:", "$"), I.QUOTE_STRING_MODE, {
        className: "string",
        begin: "'",
        end: "'"
      }, I.C_NUMBER_MODE, {
        className: "variable",
        begin: "\\$[A-Za-z0-9_]+"
      }]
    }
  }
  HD2.exports = l49
})
// @from(Start 4878415, End 4880064)
JD2 = Y((bg3, gD2) => {
  function b49(I) {
    var d = {
        className: "params",
        begin: "\\(",
        end: "\\)"
      },
      G = "attribute block constant cycle date dump include max min parent random range source template_from_string",
      Z = {
        beginKeywords: G,
        keywords: {
          name: G
        },
        relevance: 0,
        contains: [d]
      },
      C = {
        begin: /\|[A-Za-z_]+:?/,
        keywords: "abs batch capitalize column convert_encoding date date_modify default escape filter first format inky_to_html inline_css join json_encode keys last length lower map markdown merge nl2br number_format raw reduce replace reverse round slice sort spaceless split striptags title trim upper url_encode",
        contains: [Z]
      },
      W = "apply autoescape block deprecated do embed extends filter flush for from if import include macro sandbox set use verbatim with";
    return W = W + " " + W.split(" ").map(function(w) {
      return "end" + w
    }).join(" "), {
      name: "Twig",
      aliases: ["craftcms"],
      case_insensitive: !0,
      subLanguage: "xml",
      contains: [I.COMMENT(/\{#/, /#\}/), {
        className: "template-tag",
        begin: /\{%/,
        end: /%\}/,
        contains: [{
          className: "name",
          begin: /\w+/,
          keywords: W,
          starts: {
            endsWithParent: !0,
            contains: [C, Z],
            relevance: 0
          }
        }]
      }, {
        className: "template-variable",
        begin: /\{\{/,
        end: /\}\}/,
        contains: ["self", C, Z]
      }]
    }
  }
  gD2.exports = b49
})
// @from(Start 4880070, End 4890377)
qD2 = Y((hg3, fD2) => {
  var ND2 = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"],
    zD2 = ["true", "false", "null", "undefined", "NaN", "Infinity"],
    h49 = ["Intl", "DataView", "Number", "Math", "Date", "String", "RegExp", "Object", "Function", "Boolean", "Error", "Symbol", "Set", "Map", "WeakSet", "WeakMap", "Proxy", "Reflect", "JSON", "Promise", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Float32Array", "Array", "Uint8Array", "Uint8ClampedArray", "ArrayBuffer", "BigInt64Array", "BigUint64Array", "BigInt"],
    j49 = ["EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
    k49 = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
    x49 = ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"],
    QD2 = [].concat(k49, x49, h49, j49);

  function c49(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function KD2(I) {
    return tF1("(?=", I, ")")
  }

  function tF1(...I) {
    return I.map((G) => c49(G)).join("")
  }

  function p49(I) {
    let d = ($, {
        after: h
      }) => {
        let O = "</" + $[0].slice(1);
        return $.input.indexOf(O, h) !== -1
      },
      G = "[A-Za-z$_][0-9A-Za-z$_]*",
      Z = {
        begin: "<>",
        end: "</>"
      },
      C = {
        begin: /<[A-Za-z0-9\\._:-]+/,
        end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
        isTrulyOpeningTag: ($, h) => {
          let O = $[0].length + $.index,
            T = $.input[O];
          if (T === "<") {
            h.ignoreMatch();
            return
          }
          if (T === ">") {
            if (!d($, {
                after: O
              })) h.ignoreMatch()
          }
        }
      },
      W = {
        $pattern: "[A-Za-z$_][0-9A-Za-z$_]*",
        keyword: ND2,
        literal: zD2,
        built_in: QD2
      },
      w = "[0-9](_?[0-9])*",
      B = "\\.([0-9](_?[0-9])*)",
      A = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
      V = {
        className: "number",
        variants: [{
          begin: "(\\b(0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*)((\\.([0-9](_?[0-9])*))|\\.)?|(\\.([0-9](_?[0-9])*)))[eE][+-]?([0-9](_?[0-9])*)\\b"
        }, {
          begin: "\\b(0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*)\\b((\\.([0-9](_?[0-9])*))\\b|\\.)?|(\\.([0-9](_?[0-9])*))\\b"
        }, {
          begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
        }, {
          begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
        }, {
          begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
        }, {
          begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"
        }, {
          begin: "\\b0[0-7]+n?\\b"
        }],
        relevance: 0
      },
      X = {
        className: "subst",
        begin: "\\$\\{",
        end: "\\}",
        keywords: W,
        contains: []
      },
      _ = {
        begin: "html`",
        end: "",
        starts: {
          end: "`",
          returnEnd: !1,
          contains: [I.BACKSLASH_ESCAPE, X],
          subLanguage: "xml"
        }
      },
      F = {
        begin: "css`",
        end: "",
        starts: {
          end: "`",
          returnEnd: !1,
          contains: [I.BACKSLASH_ESCAPE, X],
          subLanguage: "css"
        }
      },
      g = {
        className: "string",
        begin: "`",
        end: "`",
        contains: [I.BACKSLASH_ESCAPE, X]
      },
      K = {
        className: "comment",
        variants: [I.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
          relevance: 0,
          contains: [{
            className: "doctag",
            begin: "@[A-Za-z]+",
            contains: [{
              className: "type",
              begin: "\\{",
              end: "\\}",
              relevance: 0
            }, {
              className: "variable",
              begin: "[A-Za-z$_][0-9A-Za-z$_]*(?=\\s*(-)|$)",
              endsParent: !0,
              relevance: 0
            }, {
              begin: /(?=[^\n])\s/,
              relevance: 0
            }]
          }]
        }), I.C_BLOCK_COMMENT_MODE, I.C_LINE_COMMENT_MODE]
      },
      Q = [I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, _, F, g, V, I.REGEXP_MODE];
    X.contains = Q.concat({
      begin: /\{/,
      end: /\}/,
      keywords: W,
      contains: ["self"].concat(Q)
    });
    let E = [].concat(K, X.contains),
      S = E.concat([{
        begin: /\(/,
        end: /\)/,
        keywords: W,
        contains: ["self"].concat(E)
      }]),
      P = {
        className: "params",
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        keywords: W,
        contains: S
      };
    return {
      name: "Javascript",
      aliases: ["js", "jsx", "mjs", "cjs"],
      keywords: W,
      exports: {
        PARAMS_CONTAINS: S
      },
      illegal: /#(?![$_A-z])/,
      contains: [I.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }), {
        label: "use_strict",
        className: "meta",
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/
      }, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, _, F, g, K, V, {
        begin: tF1(/[{,\n]\s*/, KD2(tF1(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/, "[A-Za-z$_][0-9A-Za-z$_]*\\s*:"))),
        relevance: 0,
        contains: [{
          className: "attr",
          begin: "[A-Za-z$_][0-9A-Za-z$_]*" + KD2("\\s*:"),
          relevance: 0
        }]
      }, {
        begin: "(" + I.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        contains: [K, I.REGEXP_MODE, {
          className: "function",
          begin: "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + I.UNDERSCORE_IDENT_RE + ")\\s*=>",
          returnBegin: !0,
          end: "\\s*=>",
          contains: [{
            className: "params",
            variants: [{
              begin: I.UNDERSCORE_IDENT_RE,
              relevance: 0
            }, {
              className: null,
              begin: /\(\s*\)/,
              skip: !0
            }, {
              begin: /\(/,
              end: /\)/,
              excludeBegin: !0,
              excludeEnd: !0,
              keywords: W,
              contains: S
            }]
          }]
        }, {
          begin: /,/,
          relevance: 0
        }, {
          className: "",
          begin: /\s/,
          end: /\s*/,
          skip: !0
        }, {
          variants: [{
            begin: Z.begin,
            end: Z.end
          }, {
            begin: C.begin,
            "on:begin": C.isTrulyOpeningTag,
            end: C.end
          }],
          subLanguage: "xml",
          contains: [{
            begin: C.begin,
            end: C.end,
            skip: !0,
            contains: ["self"]
          }]
        }],
        relevance: 0
      }, {
        className: "function",
        beginKeywords: "function",
        end: /[{;]/,
        excludeEnd: !0,
        keywords: W,
        contains: ["self", I.inherit(I.TITLE_MODE, {
          begin: "[A-Za-z$_][0-9A-Za-z$_]*"
        }), P],
        illegal: /%/
      }, {
        beginKeywords: "while if switch catch for"
      }, {
        className: "function",
        begin: I.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        returnBegin: !0,
        contains: [P, I.inherit(I.TITLE_MODE, {
          begin: "[A-Za-z$_][0-9A-Za-z$_]*"
        })]
      }, {
        variants: [{
          begin: "\\.[A-Za-z$_][0-9A-Za-z$_]*"
        }, {
          begin: "\\$[A-Za-z$_][0-9A-Za-z$_]*"
        }],
        relevance: 0
      }, {
        className: "class",
        beginKeywords: "class",
        end: /[{;=]/,
        excludeEnd: !0,
        illegal: /[:"[\]]/,
        contains: [{
          beginKeywords: "extends"
        }, I.UNDERSCORE_TITLE_MODE]
      }, {
        begin: /\b(?=constructor)/,
        end: /[{;]/,
        excludeEnd: !0,
        contains: [I.inherit(I.TITLE_MODE, {
          begin: "[A-Za-z$_][0-9A-Za-z$_]*"
        }), "self", P]
      }, {
        begin: "(get|set)\\s+(?=[A-Za-z$_][0-9A-Za-z$_]*\\()",
        end: /\{/,
        keywords: "get set",
        contains: [I.inherit(I.TITLE_MODE, {
          begin: "[A-Za-z$_][0-9A-Za-z$_]*"
        }), {
          begin: /\(\)/
        }, P]
      }, {
        begin: /\$[(.]/
      }]
    }
  }

  function i49(I) {
    let G = {
        beginKeywords: "namespace",
        end: /\{/,
        excludeEnd: !0
      },
      Z = {
        beginKeywords: "interface",
        end: /\{/,
        excludeEnd: !0,
        keywords: "interface extends"
      },
      C = {
        className: "meta",
        relevance: 10,
        begin: /^\s*['"]use strict['"]/
      },
      W = ["any", "void", "number", "boolean", "string", "object", "never", "enum"],
      w = ["type", "namespace", "typedef", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly"],
      B = {
        $pattern: "[A-Za-z$_][0-9A-Za-z$_]*",
        keyword: ND2.concat(w),
        literal: zD2,
        built_in: QD2.concat(W)
      },
      A = {
        className: "meta",
        begin: "@[A-Za-z$_][0-9A-Za-z$_]*"
      },
      V = (F, g, J) => {
        let K = F.contains.findIndex((Q) => Q.label === g);
        if (K === -1) throw new Error("can not find mode to replace");
        F.contains.splice(K, 1, J)
      },
      X = p49(I);
    Object.assign(X.keywords, B), X.exports.PARAMS_CONTAINS.push(A), X.contains = X.contains.concat([A, G, Z]), V(X, "shebang", I.SHEBANG()), V(X, "use_strict", C);
    let _ = X.contains.find((F) => F.className === "function");
    return _.relevance = 0, Object.assign(X, {
      name: "TypeScript",
      aliases: ["ts", "tsx"]
    }), X
  }
  fD2.exports = i49
})
// @from(Start 4890383, End 4891555)
UD2 = Y((jg3, RD2) => {
  function n49(I) {
    return {
      name: "Vala",
      keywords: {
        keyword: "char uchar unichar int uint long ulong short ushort int8 int16 int32 int64 uint8 uint16 uint32 uint64 float double bool struct enum string void weak unowned owned async signal static abstract interface override virtual delegate if while do for foreach else switch case break default return try catch public private protected internal using new this get set const stdout stdin stderr var",
        built_in: "DBus GLib CCode Gee Object Gtk Posix",
        literal: "false true null"
      },
      contains: [{
        className: "class",
        beginKeywords: "class interface namespace",
        end: /\{/,
        excludeEnd: !0,
        illegal: "[^,:\\n\\s\\.]",
        contains: [I.UNDERSCORE_TITLE_MODE]
      }, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, {
        className: "string",
        begin: '"""',
        end: '"""',
        relevance: 5
      }, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, I.C_NUMBER_MODE, {
        className: "meta",
        begin: "^#",
        end: "$",
        relevance: 2
      }]
    }
  }
  RD2.exports = n49
})
// @from(Start 4891561, End 4895272)
MD2 = Y((kg3, ED2) => {
  function vD2(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function ma(...I) {
    return I.map((G) => vD2(G)).join("")
  }

  function Ig1(...I) {
    return "(" + I.map((G) => vD2(G)).join("|") + ")"
  }

  function r49(I) {
    let d = {
        className: "string",
        begin: /"(""|[^/n])"C\b/
      },
      G = {
        className: "string",
        begin: /"/,
        end: /"/,
        illegal: /\n/,
        contains: [{
          begin: /""/
        }]
      },
      Z = /\d{1,2}\/\d{1,2}\/\d{4}/,
      C = /\d{4}-\d{1,2}-\d{1,2}/,
      W = /(\d|1[012])(:\d+){0,2} *(AM|PM)/,
      w = /\d{1,2}(:\d{1,2}){1,2}/,
      B = {
        className: "literal",
        variants: [{
          begin: ma(/# */, Ig1(C, Z), / *#/)
        }, {
          begin: ma(/# */, w, / *#/)
        }, {
          begin: ma(/# */, W, / *#/)
        }, {
          begin: ma(/# */, Ig1(C, Z), / +/, Ig1(W, w), / *#/)
        }]
      },
      A = {
        className: "number",
        relevance: 0,
        variants: [{
          begin: /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/
        }, {
          begin: /\b\d[\d_]*((U?[SIL])|[%&])?/
        }, {
          begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/
        }, {
          begin: /&O[0-7_]+((U?[SIL])|[%&])?/
        }, {
          begin: /&B[01_]+((U?[SIL])|[%&])?/
        }]
      },
      V = {
        className: "label",
        begin: /^\w+:/
      },
      X = I.COMMENT(/'''/, /$/, {
        contains: [{
          className: "doctag",
          begin: /<\/?/,
          end: />/
        }]
      }),
      _ = I.COMMENT(null, /$/, {
        variants: [{
          begin: /'/
        }, {
          begin: /([\t ]|^)REM(?=\s)/
        }]
      });
    return {
      name: "Visual Basic .NET",
      aliases: ["vb"],
      case_insensitive: !0,
      classNameAliases: {
        label: "symbol"
      },
      keywords: {
        keyword: "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
        built_in: "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",
        type: "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",
        literal: "true false nothing"
      },
      illegal: "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",
      contains: [d, G, B, A, V, X, _, {
        className: "meta",
        begin: /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
        end: /$/,
        keywords: {
          "meta-keyword": "const disable else elseif enable end externalsource if region then"
        },
        contains: [_]
      }]
    }
  }
  ED2.exports = r49
})
// @from(Start 4895278, End 4897333)
yD2 = Y((xg3, LD2) => {
  function SD2(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function a49(...I) {
    return I.map((G) => SD2(G)).join("")
  }

  function s49(...I) {
    return "(" + I.map((G) => SD2(G)).join("|") + ")"
  }

  function o49(I) {
    let d = "lcase month vartype instrrev ubound setlocale getobject rgb getref string weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency conversions csng timevalue second year space abs clng timeserial fixs len asc isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim strcomp int createobject loadpicture tan formatnumber mid split  cint sin datepart ltrim sqr time derived eval date formatpercent exp inputbox left ascw chrw regexp cstr err".split(" "),
      G = ["server", "response", "request", "scriptengine", "scriptenginebuildversion", "scriptengineminorversion", "scriptenginemajorversion"],
      Z = {
        begin: a49(s49(...d), "\\s*\\("),
        relevance: 0,
        keywords: {
          built_in: d
        }
      };
    return {
      name: "VBScript",
      aliases: ["vbs"],
      case_insensitive: !0,
      keywords: {
        keyword: "call class const dim do loop erase execute executeglobal exit for each next function if then else on error option explicit new private property let get public randomize redim rem select case set stop sub while wend with end to elseif is or xor and not class_initialize class_terminate default preserve in me byval byref step resume goto",
        built_in: G,
        literal: "true false null nothing empty"
      },
      illegal: "//",
      contains: [Z, I.inherit(I.QUOTE_STRING_MODE, {
        contains: [{
          begin: '""'
        }]
      }), I.COMMENT(/'/, /$/, {
        relevance: 0
      }), I.C_NUMBER_MODE]
    }
  }
  LD2.exports = o49
})
// @from(Start 4897339, End 4897586)
$D2 = Y((cg3, PD2) => {
  function e49(I) {
    return {
      name: "VBScript in HTML",
      subLanguage: "xml",
      contains: [{
        begin: "<%",
        end: "%>",
        subLanguage: "vbscript"
      }]
    }
  }
  PD2.exports = e49
})
// @from(Start 4897592, End 4902848)
TD2 = Y((pg3, uD2) => {
  function t49(I) {
    return {
      name: "Verilog",
      aliases: ["v", "sv", "svh"],
      case_insensitive: !1,
      keywords: {
        $pattern: /[\w\$]+/,
        keyword: "accept_on alias always always_comb always_ff always_latch and assert assign assume automatic before begin bind bins binsof bit break buf|0 bufif0 bufif1 byte case casex casez cell chandle checker class clocking cmos config const constraint context continue cover covergroup coverpoint cross deassign default defparam design disable dist do edge else end endcase endchecker endclass endclocking endconfig endfunction endgenerate endgroup endinterface endmodule endpackage endprimitive endprogram endproperty endspecify endsequence endtable endtask enum event eventually expect export extends extern final first_match for force foreach forever fork forkjoin function generate|5 genvar global highz0 highz1 if iff ifnone ignore_bins illegal_bins implements implies import incdir include initial inout input inside instance int integer interconnect interface intersect join join_any join_none large let liblist library local localparam logic longint macromodule matches medium modport module nand negedge nettype new nexttime nmos nor noshowcancelled not notif0 notif1 or output package packed parameter pmos posedge primitive priority program property protected pull0 pull1 pulldown pullup pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos real realtime ref reg reject_on release repeat restrict return rnmos rpmos rtran rtranif0 rtranif1 s_always s_eventually s_nexttime s_until s_until_with scalared sequence shortint shortreal showcancelled signed small soft solve specify specparam static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on sync_reject_on table tagged task this throughout time timeprecision timeunit tran tranif0 tranif1 tri tri0 tri1 triand trior trireg type typedef union unique unique0 unsigned until until_with untyped use uwire var vectored virtual void wait wait_order wand weak weak0 weak1 while wildcard wire with within wor xnor xor",
        literal: "null",
        built_in: "$finish $stop $exit $fatal $error $warning $info $realtime $time $printtimescale $bitstoreal $bitstoshortreal $itor $signed $cast $bits $stime $timeformat $realtobits $shortrealtobits $rtoi $unsigned $asserton $assertkill $assertpasson $assertfailon $assertnonvacuouson $assertoff $assertcontrol $assertpassoff $assertfailoff $assertvacuousoff $isunbounded $sampled $fell $changed $past_gclk $fell_gclk $changed_gclk $rising_gclk $steady_gclk $coverage_control $coverage_get $coverage_save $set_coverage_db_name $rose $stable $past $rose_gclk $stable_gclk $future_gclk $falling_gclk $changing_gclk $display $coverage_get_max $coverage_merge $get_coverage $load_coverage_db $typename $unpacked_dimensions $left $low $increment $clog2 $ln $log10 $exp $sqrt $pow $floor $ceil $sin $cos $tan $countbits $onehot $isunknown $fatal $warning $dimensions $right $high $size $asin $acos $atan $atan2 $hypot $sinh $cosh $tanh $asinh $acosh $atanh $countones $onehot0 $error $info $random $dist_chi_square $dist_erlang $dist_exponential $dist_normal $dist_poisson $dist_t $dist_uniform $q_initialize $q_remove $q_exam $async$and$array $async$nand$array $async$or$array $async$nor$array $sync$and$array $sync$nand$array $sync$or$array $sync$nor$array $q_add $q_full $psprintf $async$and$plane $async$nand$plane $async$or$plane $async$nor$plane $sync$and$plane $sync$nand$plane $sync$or$plane $sync$nor$plane $system $display $displayb $displayh $displayo $strobe $strobeb $strobeh $strobeo $write $readmemb $readmemh $writememh $value$plusargs $dumpvars $dumpon $dumplimit $dumpports $dumpportson $dumpportslimit $writeb $writeh $writeo $monitor $monitorb $monitorh $monitoro $writememb $dumpfile $dumpoff $dumpall $dumpflush $dumpportsoff $dumpportsall $dumpportsflush $fclose $fdisplay $fdisplayb $fdisplayh $fdisplayo $fstrobe $fstrobeb $fstrobeh $fstrobeo $swrite $swriteb $swriteh $swriteo $fscanf $fread $fseek $fflush $feof $fopen $fwrite $fwriteb $fwriteh $fwriteo $fmonitor $fmonitorb $fmonitorh $fmonitoro $sformat $sformatf $fgetc $ungetc $fgets $sscanf $rewind $ftell $ferror"
      },
      contains: [I.C_BLOCK_COMMENT_MODE, I.C_LINE_COMMENT_MODE, I.QUOTE_STRING_MODE, {
        className: "number",
        contains: [I.BACKSLASH_ESCAPE],
        variants: [{
          begin: "\\b((\\d+'(b|h|o|d|B|H|O|D))[0-9xzXZa-fA-F_]+)"
        }, {
          begin: "\\B(('(b|h|o|d|B|H|O|D))[0-9xzXZa-fA-F_]+)"
        }, {
          begin: "\\b([0-9_])+",
          relevance: 0
        }]
      }, {
        className: "variable",
        variants: [{
          begin: "#\\((?!parameter).+\\)"
        }, {
          begin: "\\.\\w+",
          relevance: 0
        }]
      }, {
        className: "meta",
        begin: "`",
        end: "$",
        keywords: {
          "meta-keyword": "define __FILE__ __LINE__ begin_keywords celldefine default_nettype define else elsif end_keywords endcelldefine endif ifdef ifndef include line nounconnected_drive pragma resetall timescale unconnected_drive undef undefineall"
        },
        relevance: 0
      }]
    }
  }
  uD2.exports = t49
})
// @from(Start 4902854, End 4904812)
mD2 = Y((ig3, OD2) => {
  function I59(I) {
    let G = "[eE][-+]?\\d(_|\\d)*",
      Z = "\\d(_|\\d)*(\\.\\d(_|\\d)*)?(" + G + ")?",
      C = "\\w+",
      w = "\\b(" + ("\\d(_|\\d)*#\\w+(\\.\\w+)?#(" + G + ")?") + "|" + Z + ")";
    return {
      name: "VHDL",
      case_insensitive: !0,
      keywords: {
        keyword: "abs access after alias all and architecture array assert assume assume_guarantee attribute begin block body buffer bus case component configuration constant context cover disconnect downto default else elsif end entity exit fairness file for force function generate generic group guarded if impure in inertial inout is label library linkage literal loop map mod nand new next nor not null of on open or others out package parameter port postponed procedure process property protected pure range record register reject release rem report restrict restrict_guarantee return rol ror select sequence severity shared signal sla sll sra srl strong subtype then to transport type unaffected units until use variable view vmode vprop vunit wait when while with xnor xor",
        built_in: "boolean bit character integer time delay_length natural positive string bit_vector file_open_kind file_open_status std_logic std_logic_vector unsigned signed boolean_vector integer_vector std_ulogic std_ulogic_vector unresolved_unsigned u_unsigned unresolved_signed u_signed real_vector time_vector",
        literal: "false true note warning error failure line text side width"
      },
      illegal: /\{/,
      contains: [I.C_BLOCK_COMMENT_MODE, I.COMMENT("--", "$"), I.QUOTE_STRING_MODE, {
        className: "number",
        begin: w,
        relevance: 0
      }, {
        className: "string",
        begin: "'(U|X|0|1|Z|W|L|H|-)'",
        contains: [I.BACKSLASH_ESCAPE]
      }, {
        className: "symbol",
        begin: "'[A-Za-z](_?[A-Za-z0-9])*",
        contains: [I.BACKSLASH_ESCAPE]
      }]
    }
  }
  OD2.exports = I59
})
// @from(Start 4904818, End 4913737)
bD2 = Y((ng3, lD2) => {
  function d59(I) {
    return {
      name: "Vim Script",
      keywords: {
        $pattern: /[!#@\w]+/,
        keyword: "N|0 P|0 X|0 a|0 ab abc abo al am an|0 ar arga argd arge argdo argg argl argu as au aug aun b|0 bN ba bad bd be bel bf bl bm bn bo bp br brea breaka breakd breakl bro bufdo buffers bun bw c|0 cN cNf ca cabc caddb cad caddf cal cat cb cc ccl cd ce cex cf cfir cgetb cgete cg changes chd che checkt cl cla clo cm cmapc cme cn cnew cnf cno cnorea cnoreme co col colo com comc comp con conf cope cp cpf cq cr cs cst cu cuna cunme cw delm deb debugg delc delf dif diffg diffo diffp diffpu diffs diffthis dig di dl dell dj dli do doautoa dp dr ds dsp e|0 ea ec echoe echoh echom echon el elsei em en endfo endf endt endw ene ex exe exi exu f|0 files filet fin fina fini fir fix fo foldc foldd folddoc foldo for fu go gr grepa gu gv ha helpf helpg helpt hi hid his ia iabc if ij il im imapc ime ino inorea inoreme int is isp iu iuna iunme j|0 ju k|0 keepa kee keepj lN lNf l|0 lad laddb laddf la lan lat lb lc lch lcl lcs le lefta let lex lf lfir lgetb lgete lg lgr lgrepa lh ll lla lli lmak lm lmapc lne lnew lnf ln loadk lo loc lockv lol lope lp lpf lr ls lt lu lua luad luaf lv lvimgrepa lw m|0 ma mak map mapc marks mat me menut mes mk mks mksp mkv mkvie mod mz mzf nbc nb nbs new nm nmapc nme nn nnoreme noa no noh norea noreme norm nu nun nunme ol o|0 om omapc ome on ono onoreme opt ou ounme ow p|0 profd prof pro promptr pc ped pe perld po popu pp pre prev ps pt ptN ptf ptj ptl ptn ptp ptr pts pu pw py3 python3 py3d py3f py pyd pyf quita qa rec red redi redr redraws reg res ret retu rew ri rightb rub rubyd rubyf rund ru rv sN san sa sal sav sb sbN sba sbf sbl sbm sbn sbp sbr scrip scripte scs se setf setg setl sf sfir sh sim sig sil sl sla sm smap smapc sme sn sni sno snor snoreme sor so spelld spe spelli spellr spellu spellw sp spr sre st sta startg startr star stopi stj sts sun sunm sunme sus sv sw sy synti sync tN tabN tabc tabdo tabe tabf tabfir tabl tabm tabnew tabn tabo tabp tabr tabs tab ta tags tc tcld tclf te tf th tj tl tm tn to tp tr try ts tu u|0 undoj undol una unh unl unlo unm unme uns up ve verb vert vim vimgrepa vi viu vie vm vmapc vme vne vn vnoreme vs vu vunme windo w|0 wN wa wh wi winc winp wn wp wq wqa ws wu wv x|0 xa xmapc xm xme xn xnoreme xu xunme y|0 z|0 ~ Next Print append abbreviate abclear aboveleft all amenu anoremenu args argadd argdelete argedit argglobal arglocal argument ascii autocmd augroup aunmenu buffer bNext ball badd bdelete behave belowright bfirst blast bmodified bnext botright bprevious brewind break breakadd breakdel breaklist browse bunload bwipeout change cNext cNfile cabbrev cabclear caddbuffer caddexpr caddfile call catch cbuffer cclose center cexpr cfile cfirst cgetbuffer cgetexpr cgetfile chdir checkpath checktime clist clast close cmap cmapclear cmenu cnext cnewer cnfile cnoremap cnoreabbrev cnoremenu copy colder colorscheme command comclear compiler continue confirm copen cprevious cpfile cquit crewind cscope cstag cunmap cunabbrev cunmenu cwindow delete delmarks debug debuggreedy delcommand delfunction diffupdate diffget diffoff diffpatch diffput diffsplit digraphs display deletel djump dlist doautocmd doautoall deletep drop dsearch dsplit edit earlier echo echoerr echohl echomsg else elseif emenu endif endfor endfunction endtry endwhile enew execute exit exusage file filetype find finally finish first fixdel fold foldclose folddoopen folddoclosed foldopen function global goto grep grepadd gui gvim hardcopy help helpfind helpgrep helptags highlight hide history insert iabbrev iabclear ijump ilist imap imapclear imenu inoremap inoreabbrev inoremenu intro isearch isplit iunmap iunabbrev iunmenu join jumps keepalt keepmarks keepjumps lNext lNfile list laddexpr laddbuffer laddfile last language later lbuffer lcd lchdir lclose lcscope left leftabove lexpr lfile lfirst lgetbuffer lgetexpr lgetfile lgrep lgrepadd lhelpgrep llast llist lmake lmap lmapclear lnext lnewer lnfile lnoremap loadkeymap loadview lockmarks lockvar lolder lopen lprevious lpfile lrewind ltag lunmap luado luafile lvimgrep lvimgrepadd lwindow move mark make mapclear match menu menutranslate messages mkexrc mksession mkspell mkvimrc mkview mode mzscheme mzfile nbclose nbkey nbsart next nmap nmapclear nmenu nnoremap nnoremenu noautocmd noremap nohlsearch noreabbrev noremenu normal number nunmap nunmenu oldfiles open omap omapclear omenu only onoremap onoremenu options ounmap ounmenu ownsyntax print profdel profile promptfind promptrepl pclose pedit perl perldo pop popup ppop preserve previous psearch ptag ptNext ptfirst ptjump ptlast ptnext ptprevious ptrewind ptselect put pwd py3do py3file python pydo pyfile quit quitall qall read recover redo redir redraw redrawstatus registers resize retab return rewind right rightbelow ruby rubydo rubyfile rundo runtime rviminfo substitute sNext sandbox sargument sall saveas sbuffer sbNext sball sbfirst sblast sbmodified sbnext sbprevious sbrewind scriptnames scriptencoding scscope set setfiletype setglobal setlocal sfind sfirst shell simalt sign silent sleep slast smagic smapclear smenu snext sniff snomagic snoremap snoremenu sort source spelldump spellgood spellinfo spellrepall spellundo spellwrong split sprevious srewind stop stag startgreplace startreplace startinsert stopinsert stjump stselect sunhide sunmap sunmenu suspend sview swapname syntax syntime syncbind tNext tabNext tabclose tabedit tabfind tabfirst tablast tabmove tabnext tabonly tabprevious tabrewind tag tcl tcldo tclfile tearoff tfirst throw tjump tlast tmenu tnext topleft tprevious trewind tselect tunmenu undo undojoin undolist unabbreviate unhide unlet unlockvar unmap unmenu unsilent update vglobal version verbose vertical vimgrep vimgrepadd visual viusage view vmap vmapclear vmenu vnew vnoremap vnoremenu vsplit vunmap vunmenu write wNext wall while winsize wincmd winpos wnext wprevious wqall wsverb wundo wviminfo xit xall xmapclear xmap xmenu xnoremap xnoremenu xunmap xunmenu yank",
        built_in: "synIDtrans atan2 range matcharg did_filetype asin feedkeys xor argv complete_check add getwinposx getqflist getwinposy screencol clearmatches empty extend getcmdpos mzeval garbagecollect setreg ceil sqrt diff_hlID inputsecret get getfperm getpid filewritable shiftwidth max sinh isdirectory synID system inputrestore winline atan visualmode inputlist tabpagewinnr round getregtype mapcheck hasmapto histdel argidx findfile sha256 exists toupper getcmdline taglist string getmatches bufnr strftime winwidth bufexists strtrans tabpagebuflist setcmdpos remote_read printf setloclist getpos getline bufwinnr float2nr len getcmdtype diff_filler luaeval resolve libcallnr foldclosedend reverse filter has_key bufname str2float strlen setline getcharmod setbufvar index searchpos shellescape undofile foldclosed setqflist buflisted strchars str2nr virtcol floor remove undotree remote_expr winheight gettabwinvar reltime cursor tabpagenr finddir localtime acos getloclist search tanh matchend rename gettabvar strdisplaywidth type abs py3eval setwinvar tolower wildmenumode log10 spellsuggest bufloaded synconcealed nextnonblank server2client complete settabwinvar executable input wincol setmatches getftype hlID inputsave searchpair or screenrow line settabvar histadd deepcopy strpart remote_peek and eval getftime submatch screenchar winsaveview matchadd mkdir screenattr getfontname libcall reltimestr getfsize winnr invert pow getbufline byte2line soundfold repeat fnameescape tagfiles sin strwidth spellbadword trunc maparg log lispindent hostname setpos globpath remote_foreground getchar synIDattr fnamemodify cscope_connection stridx winbufnr indent min complete_add nr2char searchpairpos inputdialog values matchlist items hlexists strridx browsedir expand fmod pathshorten line2byte argc count getwinvar glob foldtextresult getreg foreground cosh matchdelete has char2nr simplify histget searchdecl iconv winrestcmd pumvisible writefile foldlevel haslocaldir keys cos matchstr foldtext histnr tan tempname getcwd byteidx getbufvar islocked escape eventhandler remote_send serverlist winrestview synstack pyeval prevnonblank readfile cindent filereadable changenr exp"
      },
      illegal: /;/,
      contains: [I.NUMBER_MODE, {
        className: "string",
        begin: "'",
        end: "'",
        illegal: "\\n"
      }, {
        className: "string",
        begin: /"(\\"|\n\\|[^"\n])*"/
      }, I.COMMENT('"', "$"), {
        className: "variable",
        begin: /[bwtglsav]:[\w\d_]*/
      }, {
        className: "function",
        beginKeywords: "function function!",
        end: "$",
        relevance: 0,
        contains: [I.TITLE_MODE, {
          className: "params",
          begin: "\\(",
          end: "\\)"
        }]
      }, {
        className: "symbol",
        begin: /<[\w-]+>/
      }]
    }
  }
  lD2.exports = d59
})
// @from(Start 4913743, End 4933325)
jD2 = Y((rg3, hD2) => {
  function G59(I) {
    return {
      name: "Intel x86 Assembly",
      case_insensitive: !0,
      keywords: {
        $pattern: "[.%]?" + I.IDENT_RE,
        keyword: "lock rep repe repz repne repnz xaquire xrelease bnd nobnd aaa aad aam aas adc add and arpl bb0_reset bb1_reset bound bsf bsr bswap bt btc btr bts call cbw cdq cdqe clc cld cli clts cmc cmp cmpsb cmpsd cmpsq cmpsw cmpxchg cmpxchg486 cmpxchg8b cmpxchg16b cpuid cpu_read cpu_write cqo cwd cwde daa das dec div dmint emms enter equ f2xm1 fabs fadd faddp fbld fbstp fchs fclex fcmovb fcmovbe fcmove fcmovnb fcmovnbe fcmovne fcmovnu fcmovu fcom fcomi fcomip fcomp fcompp fcos fdecstp fdisi fdiv fdivp fdivr fdivrp femms feni ffree ffreep fiadd ficom ficomp fidiv fidivr fild fimul fincstp finit fist fistp fisttp fisub fisubr fld fld1 fldcw fldenv fldl2e fldl2t fldlg2 fldln2 fldpi fldz fmul fmulp fnclex fndisi fneni fninit fnop fnsave fnstcw fnstenv fnstsw fpatan fprem fprem1 fptan frndint frstor fsave fscale fsetpm fsin fsincos fsqrt fst fstcw fstenv fstp fstsw fsub fsubp fsubr fsubrp ftst fucom fucomi fucomip fucomp fucompp fxam fxch fxtract fyl2x fyl2xp1 hlt ibts icebp idiv imul in inc incbin insb insd insw int int01 int1 int03 int3 into invd invpcid invlpg invlpga iret iretd iretq iretw jcxz jecxz jrcxz jmp jmpe lahf lar lds lea leave les lfence lfs lgdt lgs lidt lldt lmsw loadall loadall286 lodsb lodsd lodsq lodsw loop loope loopne loopnz loopz lsl lss ltr mfence monitor mov movd movq movsb movsd movsq movsw movsx movsxd movzx mul mwait neg nop not or out outsb outsd outsw packssdw packsswb packuswb paddb paddd paddsb paddsiw paddsw paddusb paddusw paddw pand pandn pause paveb pavgusb pcmpeqb pcmpeqd pcmpeqw pcmpgtb pcmpgtd pcmpgtw pdistib pf2id pfacc pfadd pfcmpeq pfcmpge pfcmpgt pfmax pfmin pfmul pfrcp pfrcpit1 pfrcpit2 pfrsqit1 pfrsqrt pfsub pfsubr pi2fd pmachriw pmaddwd pmagw pmulhriw pmulhrwa pmulhrwc pmulhw pmullw pmvgezb pmvlzb pmvnzb pmvzb pop popa popad popaw popf popfd popfq popfw por prefetch prefetchw pslld psllq psllw psrad psraw psrld psrlq psrlw psubb psubd psubsb psubsiw psubsw psubusb psubusw psubw punpckhbw punpckhdq punpckhwd punpcklbw punpckldq punpcklwd push pusha pushad pushaw pushf pushfd pushfq pushfw pxor rcl rcr rdshr rdmsr rdpmc rdtsc rdtscp ret retf retn rol ror rdm rsdc rsldt rsm rsts sahf sal salc sar sbb scasb scasd scasq scasw sfence sgdt shl shld shr shrd sidt sldt skinit smi smint smintold smsw stc std sti stosb stosd stosq stosw str sub svdc svldt svts swapgs syscall sysenter sysexit sysret test ud0 ud1 ud2b ud2 ud2a umov verr verw fwait wbinvd wrshr wrmsr xadd xbts xchg xlatb xlat xor cmove cmovz cmovne cmovnz cmova cmovnbe cmovae cmovnb cmovb cmovnae cmovbe cmovna cmovg cmovnle cmovge cmovnl cmovl cmovnge cmovle cmovng cmovc cmovnc cmovo cmovno cmovs cmovns cmovp cmovpe cmovnp cmovpo je jz jne jnz ja jnbe jae jnb jb jnae jbe jna jg jnle jge jnl jl jnge jle jng jc jnc jo jno js jns jpo jnp jpe jp sete setz setne setnz seta setnbe setae setnb setnc setb setnae setcset setbe setna setg setnle setge setnl setl setnge setle setng sets setns seto setno setpe setp setpo setnp addps addss andnps andps cmpeqps cmpeqss cmpleps cmpless cmpltps cmpltss cmpneqps cmpneqss cmpnleps cmpnless cmpnltps cmpnltss cmpordps cmpordss cmpunordps cmpunordss cmpps cmpss comiss cvtpi2ps cvtps2pi cvtsi2ss cvtss2si cvttps2pi cvttss2si divps divss ldmxcsr maxps maxss minps minss movaps movhps movlhps movlps movhlps movmskps movntps movss movups mulps mulss orps rcpps rcpss rsqrtps rsqrtss shufps sqrtps sqrtss stmxcsr subps subss ucomiss unpckhps unpcklps xorps fxrstor fxrstor64 fxsave fxsave64 xgetbv xsetbv xsave xsave64 xsaveopt xsaveopt64 xrstor xrstor64 prefetchnta prefetcht0 prefetcht1 prefetcht2 maskmovq movntq pavgb pavgw pextrw pinsrw pmaxsw pmaxub pminsw pminub pmovmskb pmulhuw psadbw pshufw pf2iw pfnacc pfpnacc pi2fw pswapd maskmovdqu clflush movntdq movnti movntpd movdqa movdqu movdq2q movq2dq paddq pmuludq pshufd pshufhw pshuflw pslldq psrldq psubq punpckhqdq punpcklqdq addpd addsd andnpd andpd cmpeqpd cmpeqsd cmplepd cmplesd cmpltpd cmpltsd cmpneqpd cmpneqsd cmpnlepd cmpnlesd cmpnltpd cmpnltsd cmpordpd cmpordsd cmpunordpd cmpunordsd cmppd comisd cvtdq2pd cvtdq2ps cvtpd2dq cvtpd2pi cvtpd2ps cvtpi2pd cvtps2dq cvtps2pd cvtsd2si cvtsd2ss cvtsi2sd cvtss2sd cvttpd2pi cvttpd2dq cvttps2dq cvttsd2si divpd divsd maxpd maxsd minpd minsd movapd movhpd movlpd movmskpd movupd mulpd mulsd orpd shufpd sqrtpd sqrtsd subpd subsd ucomisd unpckhpd unpcklpd xorpd addsubpd addsubps haddpd haddps hsubpd hsubps lddqu movddup movshdup movsldup clgi stgi vmcall vmclear vmfunc vmlaunch vmload vmmcall vmptrld vmptrst vmread vmresume vmrun vmsave vmwrite vmxoff vmxon invept invvpid pabsb pabsw pabsd palignr phaddw phaddd phaddsw phsubw phsubd phsubsw pmaddubsw pmulhrsw pshufb psignb psignw psignd extrq insertq movntsd movntss lzcnt blendpd blendps blendvpd blendvps dppd dpps extractps insertps movntdqa mpsadbw packusdw pblendvb pblendw pcmpeqq pextrb pextrd pextrq phminposuw pinsrb pinsrd pinsrq pmaxsb pmaxsd pmaxud pmaxuw pminsb pminsd pminud pminuw pmovsxbw pmovsxbd pmovsxbq pmovsxwd pmovsxwq pmovsxdq pmovzxbw pmovzxbd pmovzxbq pmovzxwd pmovzxwq pmovzxdq pmuldq pmulld ptest roundpd roundps roundsd roundss crc32 pcmpestri pcmpestrm pcmpistri pcmpistrm pcmpgtq popcnt getsec pfrcpv pfrsqrtv movbe aesenc aesenclast aesdec aesdeclast aesimc aeskeygenassist vaesenc vaesenclast vaesdec vaesdeclast vaesimc vaeskeygenassist vaddpd vaddps vaddsd vaddss vaddsubpd vaddsubps vandpd vandps vandnpd vandnps vblendpd vblendps vblendvpd vblendvps vbroadcastss vbroadcastsd vbroadcastf128 vcmpeq_ospd vcmpeqpd vcmplt_ospd vcmpltpd vcmple_ospd vcmplepd vcmpunord_qpd vcmpunordpd vcmpneq_uqpd vcmpneqpd vcmpnlt_uspd vcmpnltpd vcmpnle_uspd vcmpnlepd vcmpord_qpd vcmpordpd vcmpeq_uqpd vcmpnge_uspd vcmpngepd vcmpngt_uspd vcmpngtpd vcmpfalse_oqpd vcmpfalsepd vcmpneq_oqpd vcmpge_ospd vcmpgepd vcmpgt_ospd vcmpgtpd vcmptrue_uqpd vcmptruepd vcmplt_oqpd vcmple_oqpd vcmpunord_spd vcmpneq_uspd vcmpnlt_uqpd vcmpnle_uqpd vcmpord_spd vcmpeq_uspd vcmpnge_uqpd vcmpngt_uqpd vcmpfalse_ospd vcmpneq_ospd vcmpge_oqpd vcmpgt_oqpd vcmptrue_uspd vcmppd vcmpeq_osps vcmpeqps vcmplt_osps vcmpltps vcmple_osps vcmpleps vcmpunord_qps vcmpunordps vcmpneq_uqps vcmpneqps vcmpnlt_usps vcmpnltps vcmpnle_usps vcmpnleps vcmpord_qps vcmpordps vcmpeq_uqps vcmpnge_usps vcmpngeps vcmpngt_usps vcmpngtps vcmpfalse_oqps vcmpfalseps vcmpneq_oqps vcmpge_osps vcmpgeps vcmpgt_osps vcmpgtps vcmptrue_uqps vcmptrueps vcmplt_oqps vcmple_oqps vcmpunord_sps vcmpneq_usps vcmpnlt_uqps vcmpnle_uqps vcmpord_sps vcmpeq_usps vcmpnge_uqps vcmpngt_uqps vcmpfalse_osps vcmpneq_osps vcmpge_oqps vcmpgt_oqps vcmptrue_usps vcmpps vcmpeq_ossd vcmpeqsd vcmplt_ossd vcmpltsd vcmple_ossd vcmplesd vcmpunord_qsd vcmpunordsd vcmpneq_uqsd vcmpneqsd vcmpnlt_ussd vcmpnltsd vcmpnle_ussd vcmpnlesd vcmpord_qsd vcmpordsd vcmpeq_uqsd vcmpnge_ussd vcmpngesd vcmpngt_ussd vcmpngtsd vcmpfalse_oqsd vcmpfalsesd vcmpneq_oqsd vcmpge_ossd vcmpgesd vcmpgt_ossd vcmpgtsd vcmptrue_uqsd vcmptruesd vcmplt_oqsd vcmple_oqsd vcmpunord_ssd vcmpneq_ussd vcmpnlt_uqsd vcmpnle_uqsd vcmpord_ssd vcmpeq_ussd vcmpnge_uqsd vcmpngt_uqsd vcmpfalse_ossd vcmpneq_ossd vcmpge_oqsd vcmpgt_oqsd vcmptrue_ussd vcmpsd vcmpeq_osss vcmpeqss vcmplt_osss vcmpltss vcmple_osss vcmpless vcmpunord_qss vcmpunordss vcmpneq_uqss vcmpneqss vcmpnlt_usss vcmpnltss vcmpnle_usss vcmpnless vcmpord_qss vcmpordss vcmpeq_uqss vcmpnge_usss vcmpngess vcmpngt_usss vcmpngtss vcmpfalse_oqss vcmpfalsess vcmpneq_oqss vcmpge_osss vcmpgess vcmpgt_osss vcmpgtss vcmptrue_uqss vcmptruess vcmplt_oqss vcmple_oqss vcmpunord_sss vcmpneq_usss vcmpnlt_uqss vcmpnle_uqss vcmpord_sss vcmpeq_usss vcmpnge_uqss vcmpngt_uqss vcmpfalse_osss vcmpneq_osss vcmpge_oqss vcmpgt_oqss vcmptrue_usss vcmpss vcomisd vcomiss vcvtdq2pd vcvtdq2ps vcvtpd2dq vcvtpd2ps vcvtps2dq vcvtps2pd vcvtsd2si vcvtsd2ss vcvtsi2sd vcvtsi2ss vcvtss2sd vcvtss2si vcvttpd2dq vcvttps2dq vcvttsd2si vcvttss2si vdivpd vdivps vdivsd vdivss vdppd vdpps vextractf128 vextractps vhaddpd vhaddps vhsubpd vhsubps vinsertf128 vinsertps vlddqu vldqqu vldmxcsr vmaskmovdqu vmaskmovps vmaskmovpd vmaxpd vmaxps vmaxsd vmaxss vminpd vminps vminsd vminss vmovapd vmovaps vmovd vmovq vmovddup vmovdqa vmovqqa vmovdqu vmovqqu vmovhlps vmovhpd vmovhps vmovlhps vmovlpd vmovlps vmovmskpd vmovmskps vmovntdq vmovntqq vmovntdqa vmovntpd vmovntps vmovsd vmovshdup vmovsldup vmovss vmovupd vmovups vmpsadbw vmulpd vmulps vmulsd vmulss vorpd vorps vpabsb vpabsw vpabsd vpacksswb vpackssdw vpackuswb vpackusdw vpaddb vpaddw vpaddd vpaddq vpaddsb vpaddsw vpaddusb vpaddusw vpalignr vpand vpandn vpavgb vpavgw vpblendvb vpblendw vpcmpestri vpcmpestrm vpcmpistri vpcmpistrm vpcmpeqb vpcmpeqw vpcmpeqd vpcmpeqq vpcmpgtb vpcmpgtw vpcmpgtd vpcmpgtq vpermilpd vpermilps vperm2f128 vpextrb vpextrw vpextrd vpextrq vphaddw vphaddd vphaddsw vphminposuw vphsubw vphsubd vphsubsw vpinsrb vpinsrw vpinsrd vpinsrq vpmaddwd vpmaddubsw vpmaxsb vpmaxsw vpmaxsd vpmaxub vpmaxuw vpmaxud vpminsb vpminsw vpminsd vpminub vpminuw vpminud vpmovmskb vpmovsxbw vpmovsxbd vpmovsxbq vpmovsxwd vpmovsxwq vpmovsxdq vpmovzxbw vpmovzxbd vpmovzxbq vpmovzxwd vpmovzxwq vpmovzxdq vpmulhuw vpmulhrsw vpmulhw vpmullw vpmulld vpmuludq vpmuldq vpor vpsadbw vpshufb vpshufd vpshufhw vpshuflw vpsignb vpsignw vpsignd vpslldq vpsrldq vpsllw vpslld vpsllq vpsraw vpsrad vpsrlw vpsrld vpsrlq vptest vpsubb vpsubw vpsubd vpsubq vpsubsb vpsubsw vpsubusb vpsubusw vpunpckhbw vpunpckhwd vpunpckhdq vpunpckhqdq vpunpcklbw vpunpcklwd vpunpckldq vpunpcklqdq vpxor vrcpps vrcpss vrsqrtps vrsqrtss vroundpd vroundps vroundsd vroundss vshufpd vshufps vsqrtpd vsqrtps vsqrtsd vsqrtss vstmxcsr vsubpd vsubps vsubsd vsubss vtestps vtestpd vucomisd vucomiss vunpckhpd vunpckhps vunpcklpd vunpcklps vxorpd vxorps vzeroall vzeroupper pclmullqlqdq pclmulhqlqdq pclmullqhqdq pclmulhqhqdq pclmulqdq vpclmullqlqdq vpclmulhqlqdq vpclmullqhqdq vpclmulhqhqdq vpclmulqdq vfmadd132ps vfmadd132pd vfmadd312ps vfmadd312pd vfmadd213ps vfmadd213pd vfmadd123ps vfmadd123pd vfmadd231ps vfmadd231pd vfmadd321ps vfmadd321pd vfmaddsub132ps vfmaddsub132pd vfmaddsub312ps vfmaddsub312pd vfmaddsub213ps vfmaddsub213pd vfmaddsub123ps vfmaddsub123pd vfmaddsub231ps vfmaddsub231pd vfmaddsub321ps vfmaddsub321pd vfmsub132ps vfmsub132pd vfmsub312ps vfmsub312pd vfmsub213ps vfmsub213pd vfmsub123ps vfmsub123pd vfmsub231ps vfmsub231pd vfmsub321ps vfmsub321pd vfmsubadd132ps vfmsubadd132pd vfmsubadd312ps vfmsubadd312pd vfmsubadd213ps vfmsubadd213pd vfmsubadd123ps vfmsubadd123pd vfmsubadd231ps vfmsubadd231pd vfmsubadd321ps vfmsubadd321pd vfnmadd132ps vfnmadd132pd vfnmadd312ps vfnmadd312pd vfnmadd213ps vfnmadd213pd vfnmadd123ps vfnmadd123pd vfnmadd231ps vfnmadd231pd vfnmadd321ps vfnmadd321pd vfnmsub132ps vfnmsub132pd vfnmsub312ps vfnmsub312pd vfnmsub213ps vfnmsub213pd vfnmsub123ps vfnmsub123pd vfnmsub231ps vfnmsub231pd vfnmsub321ps vfnmsub321pd vfmadd132ss vfmadd132sd vfmadd312ss vfmadd312sd vfmadd213ss vfmadd213sd vfmadd123ss vfmadd123sd vfmadd231ss vfmadd231sd vfmadd321ss vfmadd321sd vfmsub132ss vfmsub132sd vfmsub312ss vfmsub312sd vfmsub213ss vfmsub213sd vfmsub123ss vfmsub123sd vfmsub231ss vfmsub231sd vfmsub321ss vfmsub321sd vfnmadd132ss vfnmadd132sd vfnmadd312ss vfnmadd312sd vfnmadd213ss vfnmadd213sd vfnmadd123ss vfnmadd123sd vfnmadd231ss vfnmadd231sd vfnmadd321ss vfnmadd321sd vfnmsub132ss vfnmsub132sd vfnmsub312ss vfnmsub312sd vfnmsub213ss vfnmsub213sd vfnmsub123ss vfnmsub123sd vfnmsub231ss vfnmsub231sd vfnmsub321ss vfnmsub321sd rdfsbase rdgsbase rdrand wrfsbase wrgsbase vcvtph2ps vcvtps2ph adcx adox rdseed clac stac xstore xcryptecb xcryptcbc xcryptctr xcryptcfb xcryptofb montmul xsha1 xsha256 llwpcb slwpcb lwpval lwpins vfmaddpd vfmaddps vfmaddsd vfmaddss vfmaddsubpd vfmaddsubps vfmsubaddpd vfmsubaddps vfmsubpd vfmsubps vfmsubsd vfmsubss vfnmaddpd vfnmaddps vfnmaddsd vfnmaddss vfnmsubpd vfnmsubps vfnmsubsd vfnmsubss vfrczpd vfrczps vfrczsd vfrczss vpcmov vpcomb vpcomd vpcomq vpcomub vpcomud vpcomuq vpcomuw vpcomw vphaddbd vphaddbq vphaddbw vphadddq vphaddubd vphaddubq vphaddubw vphaddudq vphadduwd vphadduwq vphaddwd vphaddwq vphsubbw vphsubdq vphsubwd vpmacsdd vpmacsdqh vpmacsdql vpmacssdd vpmacssdqh vpmacssdql vpmacsswd vpmacssww vpmacswd vpmacsww vpmadcsswd vpmadcswd vpperm vprotb vprotd vprotq vprotw vpshab vpshad vpshaq vpshaw vpshlb vpshld vpshlq vpshlw vbroadcasti128 vpblendd vpbroadcastb vpbroadcastw vpbroadcastd vpbroadcastq vpermd vpermpd vpermps vpermq vperm2i128 vextracti128 vinserti128 vpmaskmovd vpmaskmovq vpsllvd vpsllvq vpsravd vpsrlvd vpsrlvq vgatherdpd vgatherqpd vgatherdps vgatherqps vpgatherdd vpgatherqd vpgatherdq vpgatherqq xabort xbegin xend xtest andn bextr blci blcic blsi blsic blcfill blsfill blcmsk blsmsk blsr blcs bzhi mulx pdep pext rorx sarx shlx shrx tzcnt tzmsk t1mskc valignd valignq vblendmpd vblendmps vbroadcastf32x4 vbroadcastf64x4 vbroadcasti32x4 vbroadcasti64x4 vcompresspd vcompressps vcvtpd2udq vcvtps2udq vcvtsd2usi vcvtss2usi vcvttpd2udq vcvttps2udq vcvttsd2usi vcvttss2usi vcvtudq2pd vcvtudq2ps vcvtusi2sd vcvtusi2ss vexpandpd vexpandps vextractf32x4 vextractf64x4 vextracti32x4 vextracti64x4 vfixupimmpd vfixupimmps vfixupimmsd vfixupimmss vgetexppd vgetexpps vgetexpsd vgetexpss vgetmantpd vgetmantps vgetmantsd vgetmantss vinsertf32x4 vinsertf64x4 vinserti32x4 vinserti64x4 vmovdqa32 vmovdqa64 vmovdqu32 vmovdqu64 vpabsq vpandd vpandnd vpandnq vpandq vpblendmd vpblendmq vpcmpltd vpcmpled vpcmpneqd vpcmpnltd vpcmpnled vpcmpd vpcmpltq vpcmpleq vpcmpneqq vpcmpnltq vpcmpnleq vpcmpq vpcmpequd vpcmpltud vpcmpleud vpcmpnequd vpcmpnltud vpcmpnleud vpcmpud vpcmpequq vpcmpltuq vpcmpleuq vpcmpnequq vpcmpnltuq vpcmpnleuq vpcmpuq vpcompressd vpcompressq vpermi2d vpermi2pd vpermi2ps vpermi2q vpermt2d vpermt2pd vpermt2ps vpermt2q vpexpandd vpexpandq vpmaxsq vpmaxuq vpminsq vpminuq vpmovdb vpmovdw vpmovqb vpmovqd vpmovqw vpmovsdb vpmovsdw vpmovsqb vpmovsqd vpmovsqw vpmovusdb vpmovusdw vpmovusqb vpmovusqd vpmovusqw vpord vporq vprold vprolq vprolvd vprolvq vprord vprorq vprorvd vprorvq vpscatterdd vpscatterdq vpscatterqd vpscatterqq vpsraq vpsravq vpternlogd vpternlogq vptestmd vptestmq vptestnmd vptestnmq vpxord vpxorq vrcp14pd vrcp14ps vrcp14sd vrcp14ss vrndscalepd vrndscaleps vrndscalesd vrndscaless vrsqrt14pd vrsqrt14ps vrsqrt14sd vrsqrt14ss vscalefpd vscalefps vscalefsd vscalefss vscatterdpd vscatterdps vscatterqpd vscatterqps vshuff32x4 vshuff64x2 vshufi32x4 vshufi64x2 kandnw kandw kmovw knotw kortestw korw kshiftlw kshiftrw kunpckbw kxnorw kxorw vpbroadcastmb2q vpbroadcastmw2d vpconflictd vpconflictq vplzcntd vplzcntq vexp2pd vexp2ps vrcp28pd vrcp28ps vrcp28sd vrcp28ss vrsqrt28pd vrsqrt28ps vrsqrt28sd vrsqrt28ss vgatherpf0dpd vgatherpf0dps vgatherpf0qpd vgatherpf0qps vgatherpf1dpd vgatherpf1dps vgatherpf1qpd vgatherpf1qps vscatterpf0dpd vscatterpf0dps vscatterpf0qpd vscatterpf0qps vscatterpf1dpd vscatterpf1dps vscatterpf1qpd vscatterpf1qps prefetchwt1 bndmk bndcl bndcu bndcn bndmov bndldx bndstx sha1rnds4 sha1nexte sha1msg1 sha1msg2 sha256rnds2 sha256msg1 sha256msg2 hint_nop0 hint_nop1 hint_nop2 hint_nop3 hint_nop4 hint_nop5 hint_nop6 hint_nop7 hint_nop8 hint_nop9 hint_nop10 hint_nop11 hint_nop12 hint_nop13 hint_nop14 hint_nop15 hint_nop16 hint_nop17 hint_nop18 hint_nop19 hint_nop20 hint_nop21 hint_nop22 hint_nop23 hint_nop24 hint_nop25 hint_nop26 hint_nop27 hint_nop28 hint_nop29 hint_nop30 hint_nop31 hint_nop32 hint_nop33 hint_nop34 hint_nop35 hint_nop36 hint_nop37 hint_nop38 hint_nop39 hint_nop40 hint_nop41 hint_nop42 hint_nop43 hint_nop44 hint_nop45 hint_nop46 hint_nop47 hint_nop48 hint_nop49 hint_nop50 hint_nop51 hint_nop52 hint_nop53 hint_nop54 hint_nop55 hint_nop56 hint_nop57 hint_nop58 hint_nop59 hint_nop60 hint_nop61 hint_nop62 hint_nop63",
        built_in: "ip eip rip al ah bl bh cl ch dl dh sil dil bpl spl r8b r9b r10b r11b r12b r13b r14b r15b ax bx cx dx si di bp sp r8w r9w r10w r11w r12w r13w r14w r15w eax ebx ecx edx esi edi ebp esp eip r8d r9d r10d r11d r12d r13d r14d r15d rax rbx rcx rdx rsi rdi rbp rsp r8 r9 r10 r11 r12 r13 r14 r15 cs ds es fs gs ss st st0 st1 st2 st3 st4 st5 st6 st7 mm0 mm1 mm2 mm3 mm4 mm5 mm6 mm7 xmm0  xmm1  xmm2  xmm3  xmm4  xmm5  xmm6  xmm7  xmm8  xmm9 xmm10  xmm11 xmm12 xmm13 xmm14 xmm15 xmm16 xmm17 xmm18 xmm19 xmm20 xmm21 xmm22 xmm23 xmm24 xmm25 xmm26 xmm27 xmm28 xmm29 xmm30 xmm31 ymm0  ymm1  ymm2  ymm3  ymm4  ymm5  ymm6  ymm7  ymm8  ymm9 ymm10  ymm11 ymm12 ymm13 ymm14 ymm15 ymm16 ymm17 ymm18 ymm19 ymm20 ymm21 ymm22 ymm23 ymm24 ymm25 ymm26 ymm27 ymm28 ymm29 ymm30 ymm31 zmm0  zmm1  zmm2  zmm3  zmm4  zmm5  zmm6  zmm7  zmm8  zmm9 zmm10  zmm11 zmm12 zmm13 zmm14 zmm15 zmm16 zmm17 zmm18 zmm19 zmm20 zmm21 zmm22 zmm23 zmm24 zmm25 zmm26 zmm27 zmm28 zmm29 zmm30 zmm31 k0 k1 k2 k3 k4 k5 k6 k7 bnd0 bnd1 bnd2 bnd3 cr0 cr1 cr2 cr3 cr4 cr8 dr0 dr1 dr2 dr3 dr8 tr3 tr4 tr5 tr6 tr7 r0 r1 r2 r3 r4 r5 r6 r7 r0b r1b r2b r3b r4b r5b r6b r7b r0w r1w r2w r3w r4w r5w r6w r7w r0d r1d r2d r3d r4d r5d r6d r7d r0h r1h r2h r3h r0l r1l r2l r3l r4l r5l r6l r7l r8l r9l r10l r11l r12l r13l r14l r15l db dw dd dq dt ddq do dy dz resb resw resd resq rest resdq reso resy resz incbin equ times byte word dword qword nosplit rel abs seg wrt strict near far a32 ptr",
        meta: "%define %xdefine %+ %undef %defstr %deftok %assign %strcat %strlen %substr %rotate %elif %else %endif %if %ifmacro %ifctx %ifidn %ifidni %ifid %ifnum %ifstr %iftoken %ifempty %ifenv %error %warning %fatal %rep %endrep %include %push %pop %repl %pathsearch %depend %use %arg %stacksize %local %line %comment %endcomment .nolist __FILE__ __LINE__ __SECT__  __BITS__ __OUTPUT_FORMAT__ __DATE__ __TIME__ __DATE_NUM__ __TIME_NUM__ __UTC_DATE__ __UTC_TIME__ __UTC_DATE_NUM__ __UTC_TIME_NUM__  __PASS__ struc endstruc istruc at iend align alignb sectalign daz nodaz up down zero default option assume public bits use16 use32 use64 default section segment absolute extern global common cpu float __utf16__ __utf16le__ __utf16be__ __utf32__ __utf32le__ __utf32be__ __float8__ __float16__ __float32__ __float64__ __float80m__ __float80e__ __float128l__ __float128h__ __Infinity__ __QNaN__ __SNaN__ Inf NaN QNaN SNaN float8 float16 float32 float64 float80m float80e float128l float128h __FLOAT_DAZ__ __FLOAT_ROUND__ __FLOAT__"
      },
      contains: [I.COMMENT(";", "$", {
        relevance: 0
      }), {
        className: "number",
        variants: [{
          begin: "\\b(?:([0-9][0-9_]*)?\\.[0-9_]*(?:[eE][+-]?[0-9_]+)?|(0[Xx])?[0-9][0-9_]*(\\.[0-9_]*)?(?:[pP](?:[+-]?[0-9_]+)?)?)\\b",
          relevance: 0
        }, {
          begin: "\\$[0-9][0-9A-Fa-f]*",
          relevance: 0
        }, {
          begin: "\\b(?:[0-9A-Fa-f][0-9A-Fa-f_]*[Hh]|[0-9][0-9_]*[DdTt]?|[0-7][0-7_]*[QqOo]|[0-1][0-1_]*[BbYy])\\b"
        }, {
          begin: "\\b(?:0[Xx][0-9A-Fa-f_]+|0[DdTt][0-9_]+|0[QqOo][0-7_]+|0[BbYy][0-1_]+)\\b"
        }]
      }, I.QUOTE_STRING_MODE, {
        className: "string",
        variants: [{
          begin: "'",
          end: "[^\\\\]'"
        }, {
          begin: "`",
          end: "[^\\\\]`"
        }],
        relevance: 0
      }, {
        className: "symbol",
        variants: [{
          begin: "^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)"
        }, {
          begin: "^\\s*%%[A-Za-z0-9_$#@~.?]*:"
        }],
        relevance: 0
      }, {
        className: "subst",
        begin: "%[0-9]+",
        relevance: 0
      }, {
        className: "subst",
        begin: "%!S+",
        relevance: 0
      }, {
        className: "meta",
        begin: /^\s*\.[\w_-]+/
      }]
    }
  }
  hD2.exports = G59
})
// @from(Start 4933331, End 4935462)
xD2 = Y((ag3, kD2) => {
  function Z59(I) {
    let G = {
        $pattern: /[a-zA-Z][a-zA-Z0-9_?]*/,
        keyword: "if then else do while until for loop import with is as where when by data constant integer real text name boolean symbol infix prefix postfix block tree",
        literal: "true false nil",
        built_in: "in mod rem and or xor not abs sign floor ceil sqrt sin cos tan asin acos atan exp expm1 log log2 log10 log1p pi at text_length text_range text_find text_replace contains page slide basic_slide title_slide title subtitle fade_in fade_out fade_at clear_color color line_color line_width texture_wrap texture_transform texture scale_?x scale_?y scale_?z? translate_?x translate_?y translate_?z? rotate_?x rotate_?y rotate_?z? rectangle circle ellipse sphere path line_to move_to quad_to curve_to theme background contents locally time mouse_?x mouse_?y mouse_buttons " + "ObjectLoader Animate MovieCredits Slides Filters Shading Materials LensFlare Mapping VLCAudioVideo StereoDecoder PointCloud NetworkAccess RemoteControl RegExp ChromaKey Snowfall NodeJS Speech Charts"
      },
      Z = {
        className: "string",
        begin: '"',
        end: '"',
        illegal: "\\n"
      },
      C = {
        className: "string",
        begin: "'",
        end: "'",
        illegal: "\\n"
      },
      W = {
        className: "string",
        begin: "<<",
        end: ">>"
      },
      w = {
        className: "number",
        begin: "[0-9]+#[0-9A-Z_]+(\\.[0-9-A-Z_]+)?#?([Ee][+-]?[0-9]+)?"
      },
      B = {
        beginKeywords: "import",
        end: "$",
        keywords: G,
        contains: [Z]
      },
      A = {
        className: "function",
        begin: /[a-z][^\n]*->/,
        returnBegin: !0,
        end: /->/,
        contains: [I.inherit(I.TITLE_MODE, {
          starts: {
            endsWithParent: !0,
            keywords: G
          }
        })]
      };
    return {
      name: "XL",
      aliases: ["tao"],
      keywords: G,
      contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, Z, C, W, A, B, w, I.NUMBER_MODE]
    }
  }
  kD2.exports = Z59
})
// @from(Start 4935468, End 4941744)
pD2 = Y((sg3, cD2) => {
  function C59(I) {
    return {
      name: "XQuery",
      aliases: ["xpath", "xq"],
      case_insensitive: !1,
      illegal: /(proc)|(abstract)|(extends)|(until)|(#)/,
      keywords: {
        $pattern: /[a-zA-Z$][a-zA-Z0-9_:-]*/,
        keyword: "module schema namespace boundary-space preserve no-preserve strip default collation base-uri ordering context decimal-format decimal-separator copy-namespaces empty-sequence except exponent-separator external grouping-separator inherit no-inherit lax minus-sign per-mille percent schema-attribute schema-element strict unordered zero-digit declare import option function validate variable for at in let where order group by return if then else tumbling sliding window start when only end previous next stable ascending descending allowing empty greatest least some every satisfies switch case typeswitch try catch and or to union intersect instance of treat as castable cast map array delete insert into replace value rename copy modify update",
        type: "item document-node node attribute document element comment namespace namespace-node processing-instruction text construction xs:anyAtomicType xs:untypedAtomic xs:duration xs:time xs:decimal xs:float xs:double xs:gYearMonth xs:gYear xs:gMonthDay xs:gMonth xs:gDay xs:boolean xs:base64Binary xs:hexBinary xs:anyURI xs:QName xs:NOTATION xs:dateTime xs:dateTimeStamp xs:date xs:string xs:normalizedString xs:token xs:language xs:NMTOKEN xs:Name xs:NCName xs:ID xs:IDREF xs:ENTITY xs:integer xs:nonPositiveInteger xs:negativeInteger xs:long xs:int xs:short xs:byte xs:nonNegativeInteger xs:unisignedLong xs:unsignedInt xs:unsignedShort xs:unsignedByte xs:positiveInteger xs:yearMonthDuration xs:dayTimeDuration",
        literal: "eq ne lt le gt ge is self:: child:: descendant:: descendant-or-self:: attribute:: following:: following-sibling:: parent:: ancestor:: ancestor-or-self:: preceding:: preceding-sibling:: NaN"
      },
      contains: [{
        className: "variable",
        begin: /[$][\w\-:]+/
      }, {
        className: "built_in",
        variants: [{
          begin: /\barray:/,
          end: /(?:append|filter|flatten|fold-(?:left|right)|for-each(?:-pair)?|get|head|insert-before|join|put|remove|reverse|size|sort|subarray|tail)\b/
        }, {
          begin: /\bmap:/,
          end: /(?:contains|entry|find|for-each|get|keys|merge|put|remove|size)\b/
        }, {
          begin: /\bmath:/,
          end: /(?:a(?:cos|sin|tan[2]?)|cos|exp(?:10)?|log(?:10)?|pi|pow|sin|sqrt|tan)\b/
        }, {
          begin: /\bop:/,
          end: /\(/,
          excludeEnd: !0
        }, {
          begin: /\bfn:/,
          end: /\(/,
          excludeEnd: !0
        }, {
          begin: /[^</$:'"-]\b(?:abs|accumulator-(?:after|before)|adjust-(?:date(?:Time)?|time)-to-timezone|analyze-string|apply|available-(?:environment-variables|system-properties)|avg|base-uri|boolean|ceiling|codepoints?-(?:equal|to-string)|collation-key|collection|compare|concat|contains(?:-token)?|copy-of|count|current(?:-)?(?:date(?:Time)?|time|group(?:ing-key)?|output-uri|merge-(?:group|key))?data|dateTime|days?-from-(?:date(?:Time)?|duration)|deep-equal|default-(?:collation|language)|distinct-values|document(?:-uri)?|doc(?:-available)?|element-(?:available|with-id)|empty|encode-for-uri|ends-with|environment-variable|error|escape-html-uri|exactly-one|exists|false|filter|floor|fold-(?:left|right)|for-each(?:-pair)?|format-(?:date(?:Time)?|time|integer|number)|function-(?:arity|available|lookup|name)|generate-id|has-children|head|hours-from-(?:dateTime|duration|time)|id(?:ref)?|implicit-timezone|in-scope-prefixes|index-of|innermost|insert-before|iri-to-uri|json-(?:doc|to-xml)|key|lang|last|load-xquery-module|local-name(?:-from-QName)?|(?:lower|upper)-case|matches|max|minutes-from-(?:dateTime|duration|time)|min|months?-from-(?:date(?:Time)?|duration)|name(?:space-uri-?(?:for-prefix|from-QName)?)?|nilled|node-name|normalize-(?:space|unicode)|not|number|one-or-more|outermost|parse-(?:ietf-date|json)|path|position|(?:prefix-from-)?QName|random-number-generator|regex-group|remove|replace|resolve-(?:QName|uri)|reverse|root|round(?:-half-to-even)?|seconds-from-(?:dateTime|duration|time)|snapshot|sort|starts-with|static-base-uri|stream-available|string-?(?:join|length|to-codepoints)?|subsequence|substring-?(?:after|before)?|sum|system-property|tail|timezone-from-(?:date(?:Time)?|time)|tokenize|trace|trans(?:form|late)|true|type-available|unordered|unparsed-(?:entity|text)?-?(?:public-id|uri|available|lines)?|uri-collection|xml-to-json|years?-from-(?:date(?:Time)?|duration)|zero-or-one)\b/
        }, {
          begin: /\blocal:/,
          end: /\(/,
          excludeEnd: !0
        }, {
          begin: /\bzip:/,
          end: /(?:zip-file|(?:xml|html|text|binary)-entry| (?:update-)?entries)\b/
        }, {
          begin: /\b(?:util|db|functx|app|xdmp|xmldb):/,
          end: /\(/,
          excludeEnd: !0
        }]
      }, {
        className: "string",
        variants: [{
          begin: /"/,
          end: /"/,
          contains: [{
            begin: /""/,
            relevance: 0
          }]
        }, {
          begin: /'/,
          end: /'/,
          contains: [{
            begin: /''/,
            relevance: 0
          }]
        }]
      }, {
        className: "number",
        begin: /(\b0[0-7_]+)|(\b0x[0-9a-fA-F_]+)|(\b[1-9][0-9_]*(\.[0-9_]+)?)|[0_]\b/,
        relevance: 0
      }, {
        className: "comment",
        begin: /\(:/,
        end: /:\)/,
        relevance: 10,
        contains: [{
          className: "doctag",
          begin: /@\w+/
        }]
      }, {
        className: "meta",
        begin: /%[\w\-:]+/
      }, {
        className: "title",
        begin: /\bxquery version "[13]\.[01]"\s?(?:encoding ".+")?/,
        end: /;/
      }, {
        beginKeywords: "element attribute comment document processing-instruction",
        end: /\{/,
        excludeEnd: !0
      }, {
        begin: /<([\w._:-]+)(\s+\S*=('|").*('|"))?>/,
        end: /(\/[\w._:-]+>)/,
        subLanguage: "xml",
        contains: [{
          begin: /\{/,
          end: /\}/,
          subLanguage: "xquery"
        }, "self"]
      }]
    }
  }
  cD2.exports = C59
})
// @from(Start 4941750, End 4943971)
nD2 = Y((og3, iD2) => {
  function W59(I) {
    let d = {
        className: "string",
        contains: [I.BACKSLASH_ESCAPE],
        variants: [I.inherit(I.APOS_STRING_MODE, {
          illegal: null
        }), I.inherit(I.QUOTE_STRING_MODE, {
          illegal: null
        })]
      },
      G = I.UNDERSCORE_TITLE_MODE,
      Z = {
        variants: [I.BINARY_NUMBER_MODE, I.C_NUMBER_MODE]
      },
      C = "namespace class interface use extends function return abstract final public protected private static deprecated throw try catch Exception echo empty isset instanceof unset let var new const self require if else elseif switch case default do while loop for continue break likely unlikely __LINE__ __FILE__ __DIR__ __FUNCTION__ __CLASS__ __TRAIT__ __METHOD__ __NAMESPACE__ array boolean float double integer object resource string char long unsigned bool int uint ulong uchar true false null undefined";
    return {
      name: "Zephir",
      aliases: ["zep"],
      keywords: C,
      contains: [I.C_LINE_COMMENT_MODE, I.COMMENT(/\/\*/, /\*\//, {
        contains: [{
          className: "doctag",
          begin: /@[A-Za-z]+/
        }]
      }), {
        className: "string",
        begin: /<<<['"]?\w+['"]?$/,
        end: /^\w+;/,
        contains: [I.BACKSLASH_ESCAPE]
      }, {
        begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
      }, {
        className: "function",
        beginKeywords: "function fn",
        end: /[;{]/,
        excludeEnd: !0,
        illegal: /\$|\[|%/,
        contains: [G, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: C,
          contains: ["self", I.C_BLOCK_COMMENT_MODE, d, Z]
        }]
      }, {
        className: "class",
        beginKeywords: "class interface",
        end: /\{/,
        excludeEnd: !0,
        illegal: /[:($"]/,
        contains: [{
          beginKeywords: "extends implements"
        }, G]
      }, {
        beginKeywords: "namespace",
        end: /;/,
        illegal: /[.']/,
        contains: [G]
      }, {
        beginKeywords: "use",
        end: /;/,
        contains: [G]
      }, {
        begin: /=>/
      }, d, Z]
    }
  }
  iD2.exports = W59
})