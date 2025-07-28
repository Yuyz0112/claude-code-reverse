
// @from(Start 4046330, End 4048052)
ZB2 = Y((xD3, GB2) => {
  function oe5(I) {
    return {
      name: "BASIC",
      case_insensitive: !0,
      illegal: "^.",
      keywords: {
        $pattern: "[a-zA-Z][a-zA-Z0-9_$%!#]*",
        keyword: "ABS ASC AND ATN AUTO|0 BEEP BLOAD|10 BSAVE|10 CALL CALLS CDBL CHAIN CHDIR CHR$|10 CINT CIRCLE CLEAR CLOSE CLS COLOR COM COMMON CONT COS CSNG CSRLIN CVD CVI CVS DATA DATE$ DEFDBL DEFINT DEFSNG DEFSTR DEF|0 SEG USR DELETE DIM DRAW EDIT END ENVIRON ENVIRON$ EOF EQV ERASE ERDEV ERDEV$ ERL ERR ERROR EXP FIELD FILES FIX FOR|0 FRE GET GOSUB|10 GOTO HEX$ IF THEN ELSE|0 INKEY$ INP INPUT INPUT# INPUT$ INSTR IMP INT IOCTL IOCTL$ KEY ON OFF LIST KILL LEFT$ LEN LET LINE LLIST LOAD LOC LOCATE LOF LOG LPRINT USING LSET MERGE MID$ MKDIR MKD$ MKI$ MKS$ MOD NAME NEW NEXT NOISE NOT OCT$ ON OR PEN PLAY STRIG OPEN OPTION BASE OUT PAINT PALETTE PCOPY PEEK PMAP POINT POKE POS PRINT PRINT] PSET PRESET PUT RANDOMIZE READ REM RENUM RESET|0 RESTORE RESUME RETURN|0 RIGHT$ RMDIR RND RSET RUN SAVE SCREEN SGN SHELL SIN SOUND SPACE$ SPC SQR STEP STICK STOP STR$ STRING$ SWAP SYSTEM TAB TAN TIME$ TIMER TROFF TRON TO USR VAL VARPTR VARPTR$ VIEW WAIT WHILE WEND WIDTH WINDOW WRITE XOR"
      },
      contains: [I.QUOTE_STRING_MODE, I.COMMENT("REM", "$", {
        relevance: 10
      }), I.COMMENT("'", "$", {
        relevance: 0
      }), {
        className: "symbol",
        begin: "^[0-9]+ ",
        relevance: 10
      }, {
        className: "number",
        begin: "\\b\\d+(\\.\\d+)?([edED]\\d+)?[#!]?",
        relevance: 0
      }, {
        className: "number",
        begin: "(&[hH][0-9a-fA-F]{1,4})"
      }, {
        className: "number",
        begin: "(&[oO][0-7]{1,6})"
      }]
    }
  }
  GB2.exports = oe5
})
// @from(Start 4048058, End 4048488)
WB2 = Y((cD3, CB2) => {
  function ee5(I) {
    return {
      name: "Backus–Naur Form",
      contains: [{
        className: "attribute",
        begin: /</,
        end: />/
      }, {
        begin: /::=/,
        end: /$/,
        contains: [{
          begin: /</,
          end: />/
        }, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE]
      }]
    }
  }
  CB2.exports = ee5
})
// @from(Start 4048494, End 4049099)
BB2 = Y((pD3, wB2) => {
  function te5(I) {
    let d = {
      className: "literal",
      begin: /[+-]/,
      relevance: 0
    };
    return {
      name: "Brainfuck",
      aliases: ["bf"],
      contains: [I.COMMENT(`[^\\[\\]\\.,\\+\\-<> \r
]`, `[\\[\\]\\.,\\+\\-<> \r
]`, {
        returnEnd: !0,
        relevance: 0
      }), {
        className: "title",
        begin: "[\\[\\]]",
        relevance: 0
      }, {
        className: "string",
        begin: "[\\.,]",
        relevance: 0
      }, {
        begin: /(?:\+\+|--)/,
        contains: [d]
      }, d]
    }
  }
  wB2.exports = te5
})
// @from(Start 4049105, End 4056459)
VB2 = Y((iD3, AB2) => {
  function It5(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function dt5(I) {
    return bF1("(?=", I, ")")
  }

  function Ea(I) {
    return bF1("(", I, ")?")
  }

  function bF1(...I) {
    return I.map((G) => It5(G)).join("")
  }

  function Gt5(I) {
    let d = I.COMMENT("//", "$", {
        contains: [{
          begin: /\\\n/
        }]
      }),
      G = "decltype\\(auto\\)",
      Z = "[a-zA-Z_]\\w*::",
      C = "<[^<>]+>",
      W = "(decltype\\(auto\\)|" + Ea("[a-zA-Z_]\\w*::") + "[a-zA-Z_]\\w*" + Ea("<[^<>]+>") + ")",
      w = {
        className: "keyword",
        begin: "\\b[a-z\\d_]*_t\\b"
      },
      B = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",
      A = {
        className: "string",
        variants: [{
          begin: '(u8?|U|L)?"',
          end: '"',
          illegal: "\\n",
          contains: [I.BACKSLASH_ESCAPE]
        }, {
          begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
          end: "'",
          illegal: "."
        }, I.END_SAME_AS_BEGIN({
          begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
          end: /\)([^()\\ ]{0,16})"/
        })]
      },
      V = {
        className: "number",
        variants: [{
          begin: "\\b(0b[01']+)"
        }, {
          begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
        }, {
          begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
        }],
        relevance: 0
      },
      X = {
        className: "meta",
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: {
          "meta-keyword": "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
        },
        contains: [{
          begin: /\\\n/,
          relevance: 0
        }, I.inherit(A, {
          className: "meta-string"
        }), {
          className: "meta-string",
          begin: /<.*?>/
        }, d, I.C_BLOCK_COMMENT_MODE]
      },
      _ = {
        className: "title",
        begin: Ea("[a-zA-Z_]\\w*::") + I.IDENT_RE,
        relevance: 0
      },
      F = Ea("[a-zA-Z_]\\w*::") + I.IDENT_RE + "\\s*\\(",
      J = {
        keyword: "int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",
        built_in: "_Bool _Complex _Imaginary",
        _relevance_hints: ["asin", "atan2", "atan", "calloc", "ceil", "cosh", "cos", "exit", "exp", "fabs", "floor", "fmod", "fprintf", "fputs", "free", "frexp", "auto_ptr", "deque", "list", "queue", "stack", "vector", "map", "set", "pair", "bitset", "multiset", "multimap", "unordered_set", "fscanf", "future", "isalnum", "isalpha", "iscntrl", "isdigit", "isgraph", "islower", "isprint", "ispunct", "isspace", "isupper", "isxdigit", "tolower", "toupper", "labs", "ldexp", "log10", "log", "malloc", "realloc", "memchr", "memcmp", "memcpy", "memset", "modf", "pow", "printf", "putchar", "puts", "scanf", "sinh", "sin", "snprintf", "sprintf", "sqrt", "sscanf", "strcat", "strchr", "strcmp", "strcpy", "strcspn", "strlen", "strncat", "strncmp", "strncpy", "strpbrk", "strrchr", "strspn", "strstr", "tanh", "tan", "unordered_map", "unordered_multiset", "unordered_multimap", "priority_queue", "make_pair", "array", "shared_ptr", "abort", "terminate", "abs", "acos", "vfprintf", "vprintf", "vsprintf", "endl", "initializer_list", "unique_ptr", "complex", "imaginary", "std", "string", "wstring", "cin", "cout", "cerr", "clog", "stdin", "stdout", "stderr", "stringstream", "istringstream", "ostringstream"],
        literal: "true false nullptr NULL"
      },
      K = {
        className: "function.dispatch",
        relevance: 0,
        keywords: J,
        begin: bF1(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!while)/, I.IDENT_RE, dt5(/\s*\(/))
      },
      Q = [K, X, w, d, I.C_BLOCK_COMMENT_MODE, V, A],
      E = {
        variants: [{
          begin: /=/,
          end: /;/
        }, {
          begin: /\(/,
          end: /\)/
        }, {
          beginKeywords: "new throw return else",
          end: /;/
        }],
        keywords: J,
        contains: Q.concat([{
          begin: /\(/,
          end: /\)/,
          keywords: J,
          contains: Q.concat(["self"]),
          relevance: 0
        }]),
        relevance: 0
      },
      S = {
        className: "function",
        begin: "(" + W + "[\\*&\\s]+)+" + F,
        returnBegin: !0,
        end: /[{;=]/,
        excludeEnd: !0,
        keywords: J,
        illegal: /[^\w\s\*&:<>.]/,
        contains: [{
          begin: "decltype\\(auto\\)",
          keywords: J,
          relevance: 0
        }, {
          begin: F,
          returnBegin: !0,
          contains: [_],
          relevance: 0
        }, {
          begin: /::/,
          relevance: 0
        }, {
          begin: /:/,
          endsWithParent: !0,
          contains: [A, V]
        }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: J,
          relevance: 0,
          contains: [d, I.C_BLOCK_COMMENT_MODE, A, V, w, {
            begin: /\(/,
            end: /\)/,
            keywords: J,
            relevance: 0,
            contains: ["self", d, I.C_BLOCK_COMMENT_MODE, A, V, w]
          }]
        }, w, d, I.C_BLOCK_COMMENT_MODE, X]
      };
    return {
      name: "C++",
      aliases: ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"],
      keywords: J,
      illegal: "</",
      classNameAliases: {
        "function.dispatch": "built_in"
      },
      contains: [].concat(E, S, K, Q, [X, {
        begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
        end: ">",
        keywords: J,
        contains: ["self", w]
      }, {
        begin: I.IDENT_RE + "::",
        keywords: J
      }, {
        className: "class",
        beginKeywords: "enum class struct union",
        end: /[{;:<>=]/,
        contains: [{
          beginKeywords: "final class struct"
        }, I.TITLE_MODE]
      }]),
      exports: {
        preprocessor: X,
        strings: A,
        keywords: J
      }
    }
  }

  function Zt5(I) {
    let d = Gt5(I),
      G = ["c", "h"],
      Z = ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"];
    if (d.disableAutodetect = !0, d.aliases = [], !I.getLanguage("c")) d.aliases.push(...G);
    if (!I.getLanguage("cpp")) d.aliases.push(...Z);
    return d
  }
  AB2.exports = Zt5
})
// @from(Start 4056465, End 4062660)
YB2 = Y((nD3, XB2) => {
  function Ct5(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function Ma(I) {
    return Wt5("(", I, ")?")
  }

  function Wt5(...I) {
    return I.map((G) => Ct5(G)).join("")
  }

  function wt5(I) {
    let d = I.COMMENT("//", "$", {
        contains: [{
          begin: /\\\n/
        }]
      }),
      G = "decltype\\(auto\\)",
      Z = "[a-zA-Z_]\\w*::",
      C = "<[^<>]+>",
      W = "(decltype\\(auto\\)|" + Ma("[a-zA-Z_]\\w*::") + "[a-zA-Z_]\\w*" + Ma("<[^<>]+>") + ")",
      w = {
        className: "keyword",
        begin: "\\b[a-z\\d_]*_t\\b"
      },
      B = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",
      A = {
        className: "string",
        variants: [{
          begin: '(u8?|U|L)?"',
          end: '"',
          illegal: "\\n",
          contains: [I.BACKSLASH_ESCAPE]
        }, {
          begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
          end: "'",
          illegal: "."
        }, I.END_SAME_AS_BEGIN({
          begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
          end: /\)([^()\\ ]{0,16})"/
        })]
      },
      V = {
        className: "number",
        variants: [{
          begin: "\\b(0b[01']+)"
        }, {
          begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
        }, {
          begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
        }],
        relevance: 0
      },
      X = {
        className: "meta",
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: {
          "meta-keyword": "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
        },
        contains: [{
          begin: /\\\n/,
          relevance: 0
        }, I.inherit(A, {
          className: "meta-string"
        }), {
          className: "meta-string",
          begin: /<.*?>/
        }, d, I.C_BLOCK_COMMENT_MODE]
      },
      _ = {
        className: "title",
        begin: Ma("[a-zA-Z_]\\w*::") + I.IDENT_RE,
        relevance: 0
      },
      F = Ma("[a-zA-Z_]\\w*::") + I.IDENT_RE + "\\s*\\(",
      g = {
        keyword: "int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",
        built_in: "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr _Bool complex _Complex imaginary _Imaginary",
        literal: "true false nullptr NULL"
      },
      J = [X, w, d, I.C_BLOCK_COMMENT_MODE, V, A],
      K = {
        variants: [{
          begin: /=/,
          end: /;/
        }, {
          begin: /\(/,
          end: /\)/
        }, {
          beginKeywords: "new throw return else",
          end: /;/
        }],
        keywords: g,
        contains: J.concat([{
          begin: /\(/,
          end: /\)/,
          keywords: g,
          contains: J.concat(["self"]),
          relevance: 0
        }]),
        relevance: 0
      },
      Q = {
        className: "function",
        begin: "(" + W + "[\\*&\\s]+)+" + F,
        returnBegin: !0,
        end: /[{;=]/,
        excludeEnd: !0,
        keywords: g,
        illegal: /[^\w\s\*&:<>.]/,
        contains: [{
          begin: "decltype\\(auto\\)",
          keywords: g,
          relevance: 0
        }, {
          begin: F,
          returnBegin: !0,
          contains: [_],
          relevance: 0
        }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: g,
          relevance: 0,
          contains: [d, I.C_BLOCK_COMMENT_MODE, A, V, w, {
            begin: /\(/,
            end: /\)/,
            keywords: g,
            relevance: 0,
            contains: ["self", d, I.C_BLOCK_COMMENT_MODE, A, V, w]
          }]
        }, w, d, I.C_BLOCK_COMMENT_MODE, X]
      };
    return {
      name: "C",
      aliases: ["h"],
      keywords: g,
      disableAutodetect: !0,
      illegal: "</",
      contains: [].concat(K, Q, J, [X, {
        begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
        end: ">",
        keywords: g,
        contains: ["self", w]
      }, {
        begin: I.IDENT_RE + "::",
        keywords: g
      }, {
        className: "class",
        beginKeywords: "enum class struct union",
        end: /[{;:<>=]/,
        contains: [{
          beginKeywords: "final class struct"
        }, I.TITLE_MODE]
      }]),
      exports: {
        preprocessor: X,
        strings: A,
        keywords: g
      }
    }
  }
  XB2.exports = wt5
})
// @from(Start 4062666, End 4064226)
DB2 = Y((rD3, _B2) => {
  function Bt5(I) {
    let d = "div mod in and or not xor asserterror begin case do downto else end exit for if of repeat then to until while with var",
      G = "false true",
      Z = [I.C_LINE_COMMENT_MODE, I.COMMENT(/\{/, /\}/, {
        relevance: 0
      }), I.COMMENT(/\(\*/, /\*\)/, {
        relevance: 10
      })],
      C = {
        className: "string",
        begin: /'/,
        end: /'/,
        contains: [{
          begin: /''/
        }]
      },
      W = {
        className: "string",
        begin: /(#\d+)+/
      },
      w = {
        className: "number",
        begin: "\\b\\d+(\\.\\d+)?(DT|D|T)",
        relevance: 0
      },
      B = {
        className: "string",
        begin: '"',
        end: '"'
      },
      A = {
        className: "function",
        beginKeywords: "procedure",
        end: /[:;]/,
        keywords: "procedure|10",
        contains: [I.TITLE_MODE, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: d,
          contains: [C, W]
        }].concat(Z)
      },
      V = {
        className: "class",
        begin: "OBJECT (Table|Form|Report|Dataport|Codeunit|XMLport|MenuSuite|Page|Query) (\\d+) ([^\\r\\n]+)",
        returnBegin: !0,
        contains: [I.TITLE_MODE, A]
      };
    return {
      name: "C/AL",
      case_insensitive: !0,
      keywords: {
        keyword: d,
        literal: "false true"
      },
      illegal: /\/\*/,
      contains: [C, W, w, B, I.NUMBER_MODE, V, A]
    }
  }
  _B2.exports = Bt5
})
// @from(Start 4064232, End 4065458)
FB2 = Y((aD3, HB2) => {
  function At5(I) {
    return {
      name: "Cap’n Proto",
      aliases: ["capnp"],
      keywords: {
        keyword: "struct enum interface union group import using const annotation extends in of on as with from fixed",
        built_in: "Void Bool Int8 Int16 Int32 Int64 UInt8 UInt16 UInt32 UInt64 Float32 Float64 Text Data AnyPointer AnyStruct Capability List",
        literal: "true false"
      },
      contains: [I.QUOTE_STRING_MODE, I.NUMBER_MODE, I.HASH_COMMENT_MODE, {
        className: "meta",
        begin: /@0x[\w\d]{16};/,
        illegal: /\n/
      }, {
        className: "symbol",
        begin: /@\d+\b/
      }, {
        className: "class",
        beginKeywords: "struct enum",
        end: /\{/,
        illegal: /\n/,
        contains: [I.inherit(I.TITLE_MODE, {
          starts: {
            endsWithParent: !0,
            excludeEnd: !0
          }
        })]
      }, {
        className: "class",
        beginKeywords: "interface",
        end: /\{/,
        illegal: /\n/,
        contains: [I.inherit(I.TITLE_MODE, {
          starts: {
            endsWithParent: !0,
            excludeEnd: !0
          }
        })]
      }]
    }
  }
  HB2.exports = At5
})
// @from(Start 4065464, End 4067026)
JB2 = Y((sD3, gB2) => {
  function Vt5(I) {
    let d = "assembly module package import alias class interface object given value assign void function new of extends satisfies abstracts in out return break continue throw assert dynamic if else switch case for while try catch finally then let this outer super is exists nonempty",
      G = "shared abstract formal default actual variable late native deprecated final sealed annotation suppressWarnings small",
      Z = "doc by license see throws tagged",
      C = {
        className: "subst",
        excludeBegin: !0,
        excludeEnd: !0,
        begin: /``/,
        end: /``/,
        keywords: d,
        relevance: 10
      },
      W = [{
        className: "string",
        begin: '"""',
        end: '"""',
        relevance: 10
      }, {
        className: "string",
        begin: '"',
        end: '"',
        contains: [C]
      }, {
        className: "string",
        begin: "'",
        end: "'"
      }, {
        className: "number",
        begin: "#[0-9a-fA-F_]+|\\$[01_]+|[0-9_]+(?:\\.[0-9_](?:[eE][+-]?\\d+)?)?[kMGTPmunpf]?",
        relevance: 0
      }];
    return C.contains = W, {
      name: "Ceylon",
      keywords: {
        keyword: d + " " + G,
        meta: "doc by license see throws tagged"
      },
      illegal: "\\$[^01]|#[^0-9a-fA-F]",
      contains: [I.C_LINE_COMMENT_MODE, I.COMMENT("/\\*", "\\*/", {
        contains: ["self"]
      }), {
        className: "meta",
        begin: '@[a-z]\\w*(?::"[^"]*")?'
      }].concat(W)
    }
  }
  gB2.exports = Vt5
})
// @from(Start 4067032, End 4067686)
NB2 = Y((oD3, KB2) => {
  function Xt5(I) {
    return {
      name: "Clean",
      aliases: ["icl", "dcl"],
      keywords: {
        keyword: "if let in with where case of class instance otherwise implementation definition system module from import qualified as special code inline foreign export ccall stdcall generic derive infix infixl infixr",
        built_in: "Int Real Char Bool",
        literal: "True False"
      },
      contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, I.C_NUMBER_MODE, {
        begin: "->|<-[|:]?|#!?|>>=|\\{\\||\\|\\}|:==|=:|<>"
      }]
    }
  }
  KB2.exports = Xt5
})
// @from(Start 4067692, End 4072229)
QB2 = Y((eD3, zB2) => {
  function Yt5(I) {
    let G = "[a-zA-Z_\\-!.?+*=<>&#'][a-zA-Z_\\-!.?+*=<>&#'0-9/;:]*",
      Z = "def defonce defprotocol defstruct defmulti defmethod defn- defn defmacro deftype defrecord",
      C = {
        $pattern: G,
        "builtin-name": "def defonce defprotocol defstruct defmulti defmethod defn- defn defmacro deftype defrecord cond apply if-not if-let if not not= =|0 <|0 >|0 <=|0 >=|0 ==|0 +|0 /|0 *|0 -|0 rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy first rest cons cast coll last butlast sigs reify second ffirst fnext nfirst nnext meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"
      },
      W = "[-+]?\\d+(\\.\\d+)?",
      w = {
        begin: G,
        relevance: 0
      },
      B = {
        className: "number",
        begin: "[-+]?\\d+(\\.\\d+)?",
        relevance: 0
      },
      A = I.inherit(I.QUOTE_STRING_MODE, {
        illegal: null
      }),
      V = I.COMMENT(";", "$", {
        relevance: 0
      }),
      X = {
        className: "literal",
        begin: /\b(true|false|nil)\b/
      },
      _ = {
        begin: "[\\[\\{]",
        end: "[\\]\\}]"
      },
      F = {
        className: "comment",
        begin: "\\^" + G
      },
      g = I.COMMENT("\\^\\{", "\\}"),
      J = {
        className: "symbol",
        begin: "[:]{1,2}" + G
      },
      K = {
        begin: "\\(",
        end: "\\)"
      },
      Q = {
        endsWithParent: !0,
        relevance: 0
      },
      E = {
        keywords: C,
        className: "name",
        begin: G,
        relevance: 0,
        starts: Q
      },
      S = [K, A, F, g, V, J, _, B, X, w],
      P = {
        beginKeywords: "def defonce defprotocol defstruct defmulti defmethod defn- defn defmacro deftype defrecord",
        lexemes: G,
        end: '(\\[|#|\\d|"|:|\\{|\\)|\\(|$)',
        contains: [{
          className: "title",
          begin: G,
          relevance: 0,
          excludeEnd: !0,
          endsParent: !0
        }].concat(S)
      };
    return K.contains = [I.COMMENT("comment", ""), P, E, Q], Q.contains = S, _.contains = S, g.contains = [_], {
      name: "Clojure",
      aliases: ["clj"],
      illegal: /\S/,
      contains: [K, A, F, g, V, J, _, B, X]
    }
  }
  zB2.exports = Yt5
})
// @from(Start 4072235, End 4072526)
qB2 = Y((tD3, fB2) => {
  function _t5(I) {
    return {
      name: "Clojure REPL",
      contains: [{
        className: "meta",
        begin: /^([\w.-]+|\s*#_)?=>/,
        starts: {
          end: /$/,
          subLanguage: "clojure"
        }
      }]
    }
  }
  fB2.exports = _t5
})
// @from(Start 4072532, End 4075083)
UB2 = Y((IH3, RB2) => {
  function Dt5(I) {
    return {
      name: "CMake",
      aliases: ["cmake.in"],
      case_insensitive: !0,
      keywords: {
        keyword: "break cmake_host_system_information cmake_minimum_required cmake_parse_arguments cmake_policy configure_file continue elseif else endforeach endfunction endif endmacro endwhile execute_process file find_file find_library find_package find_path find_program foreach function get_cmake_property get_directory_property get_filename_component get_property if include include_guard list macro mark_as_advanced math message option return separate_arguments set_directory_properties set_property set site_name string unset variable_watch while add_compile_definitions add_compile_options add_custom_command add_custom_target add_definitions add_dependencies add_executable add_library add_link_options add_subdirectory add_test aux_source_directory build_command create_test_sourcelist define_property enable_language enable_testing export fltk_wrap_ui get_source_file_property get_target_property get_test_property include_directories include_external_msproject include_regular_expression install link_directories link_libraries load_cache project qt_wrap_cpp qt_wrap_ui remove_definitions set_source_files_properties set_target_properties set_tests_properties source_group target_compile_definitions target_compile_features target_compile_options target_include_directories target_link_directories target_link_libraries target_link_options target_sources try_compile try_run ctest_build ctest_configure ctest_coverage ctest_empty_binary_directory ctest_memcheck ctest_read_custom_files ctest_run_script ctest_sleep ctest_start ctest_submit ctest_test ctest_update ctest_upload build_name exec_program export_library_dependencies install_files install_programs install_targets load_command make_directory output_required_files remove subdir_depends subdirs use_mangled_mesa utility_source variable_requires write_file qt5_use_modules qt5_use_package qt5_wrap_cpp on off true false and or not command policy target test exists is_newer_than is_directory is_symlink is_absolute matches less greater equal less_equal greater_equal strless strgreater strequal strless_equal strgreater_equal version_less version_greater version_equal version_less_equal version_greater_equal in_list defined"
      },
      contains: [{
        className: "variable",
        begin: /\$\{/,
        end: /\}/
      }, I.HASH_COMMENT_MODE, I.QUOTE_STRING_MODE, I.NUMBER_MODE]
    }
  }
  RB2.exports = Dt5
})
// @from(Start 4075089, End 4079650)
EB2 = Y((dH3, vB2) => {
  var Ht5 = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"],
    Ft5 = ["true", "false", "null", "undefined", "NaN", "Infinity"],
    gt5 = ["Intl", "DataView", "Number", "Math", "Date", "String", "RegExp", "Object", "Function", "Boolean", "Error", "Symbol", "Set", "Map", "WeakSet", "WeakMap", "Proxy", "Reflect", "JSON", "Promise", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Float32Array", "Array", "Uint8Array", "Uint8ClampedArray", "ArrayBuffer", "BigInt64Array", "BigUint64Array", "BigInt"],
    Jt5 = ["EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
    Kt5 = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
    Nt5 = ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"],
    zt5 = [].concat(Kt5, Nt5, gt5, Jt5);

  function Qt5(I) {
    let d = ["npm", "print"],
      G = ["yes", "no", "on", "off"],
      Z = ["then", "unless", "until", "loop", "by", "when", "and", "or", "is", "isnt", "not"],
      C = ["var", "const", "let", "function", "static"],
      W = (g) => (J) => !g.includes(J),
      w = {
        keyword: Ht5.concat(Z).filter(W(C)),
        literal: Ft5.concat(G),
        built_in: zt5.concat(d)
      },
      B = "[A-Za-z$_][0-9A-Za-z$_]*",
      A = {
        className: "subst",
        begin: /#\{/,
        end: /\}/,
        keywords: w
      },
      V = [I.BINARY_NUMBER_MODE, I.inherit(I.C_NUMBER_MODE, {
        starts: {
          end: "(\\s*/)?",
          relevance: 0
        }
      }), {
        className: "string",
        variants: [{
          begin: /'''/,
          end: /'''/,
          contains: [I.BACKSLASH_ESCAPE]
        }, {
          begin: /'/,
          end: /'/,
          contains: [I.BACKSLASH_ESCAPE]
        }, {
          begin: /"""/,
          end: /"""/,
          contains: [I.BACKSLASH_ESCAPE, A]
        }, {
          begin: /"/,
          end: /"/,
          contains: [I.BACKSLASH_ESCAPE, A]
        }]
      }, {
        className: "regexp",
        variants: [{
          begin: "///",
          end: "///",
          contains: [A, I.HASH_COMMENT_MODE]
        }, {
          begin: "//[gim]{0,3}(?=\\W)",
          relevance: 0
        }, {
          begin: /\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/
        }]
      }, {
        begin: "@[A-Za-z$_][0-9A-Za-z$_]*"
      }, {
        subLanguage: "javascript",
        excludeBegin: !0,
        excludeEnd: !0,
        variants: [{
          begin: "```",
          end: "```"
        }, {
          begin: "`",
          end: "`"
        }]
      }];
    A.contains = V;
    let X = I.inherit(I.TITLE_MODE, {
        begin: "[A-Za-z$_][0-9A-Za-z$_]*"
      }),
      _ = "(\\(.*\\)\\s*)?\\B[-=]>",
      F = {
        className: "params",
        begin: "\\([^\\(]",
        returnBegin: !0,
        contains: [{
          begin: /\(/,
          end: /\)/,
          keywords: w,
          contains: ["self"].concat(V)
        }]
      };
    return {
      name: "CoffeeScript",
      aliases: ["coffee", "cson", "iced"],
      keywords: w,
      illegal: /\/\*/,
      contains: V.concat([I.COMMENT("###", "###"), I.HASH_COMMENT_MODE, {
        className: "function",
        begin: "^\\s*[A-Za-z$_][0-9A-Za-z$_]*\\s*=\\s*" + _,
        end: "[-=]>",
        returnBegin: !0,
        contains: [X, F]
      }, {
        begin: /[:\(,=]\s*/,
        relevance: 0,
        contains: [{
          className: "function",
          begin: _,
          end: "[-=]>",
          returnBegin: !0,
          contains: [F]
        }]
      }, {
        className: "class",
        beginKeywords: "class",
        end: "$",
        illegal: /[:="\[\]]/,
        contains: [{
          beginKeywords: "extends",
          endsWithParent: !0,
          illegal: /[:="\[\]]/,
          contains: [X]
        }, X]
      }, {
        begin: "[A-Za-z$_][0-9A-Za-z$_]*:",
        end: ":",
        returnBegin: !0,
        returnEnd: !0,
        relevance: 0
      }])
    }
  }
  vB2.exports = Qt5
})
// @from(Start 4079656, End 4083271)
SB2 = Y((GH3, MB2) => {
  function ft5(I) {
    return {
      name: "Coq",
      keywords: {
        keyword: "_|0 as at cofix else end exists exists2 fix for forall fun if IF in let match mod Prop return Set then Type using where with Abort About Add Admit Admitted All Arguments Assumptions Axiom Back BackTo Backtrack Bind Blacklist Canonical Cd Check Class Classes Close Coercion Coercions CoFixpoint CoInductive Collection Combined Compute Conjecture Conjectures Constant constr Constraint Constructors Context Corollary CreateHintDb Cut Declare Defined Definition Delimit Dependencies Dependent Derive Drop eauto End Equality Eval Example Existential Existentials Existing Export exporting Extern Extract Extraction Fact Field Fields File Fixpoint Focus for From Function Functional Generalizable Global Goal Grab Grammar Graph Guarded Heap Hint HintDb Hints Hypotheses Hypothesis ident Identity If Immediate Implicit Import Include Inductive Infix Info Initial Inline Inspect Instance Instances Intro Intros Inversion Inversion_clear Language Left Lemma Let Libraries Library Load LoadPath Local Locate Ltac ML Mode Module Modules Monomorphic Morphism Next NoInline Notation Obligation Obligations Opaque Open Optimize Options Parameter Parameters Parametric Path Paths pattern Polymorphic Preterm Print Printing Program Projections Proof Proposition Pwd Qed Quit Rec Record Recursive Redirect Relation Remark Remove Require Reserved Reset Resolve Restart Rewrite Right Ring Rings Save Scheme Scope Scopes Script Search SearchAbout SearchHead SearchPattern SearchRewrite Section Separate Set Setoid Show Solve Sorted Step Strategies Strategy Structure SubClass Table Tables Tactic Term Test Theorem Time Timeout Transparent Type Typeclasses Types Undelimit Undo Unfocus Unfocused Unfold Universe Universes Unset Unshelve using Variable Variables Variant Verbose Visibility where with",
        built_in: "abstract absurd admit after apply as assert assumption at auto autorewrite autounfold before bottom btauto by case case_eq cbn cbv change classical_left classical_right clear clearbody cofix compare compute congruence constr_eq constructor contradict contradiction cut cutrewrite cycle decide decompose dependent destruct destruction dintuition discriminate discrR do double dtauto eapply eassumption eauto ecase econstructor edestruct ediscriminate eelim eexact eexists einduction einjection eleft elim elimtype enough equality erewrite eright esimplify_eq esplit evar exact exactly_once exfalso exists f_equal fail field field_simplify field_simplify_eq first firstorder fix fold fourier functional generalize generalizing gfail give_up has_evar hnf idtac in induction injection instantiate intro intro_pattern intros intuition inversion inversion_clear is_evar is_var lapply lazy left lia lra move native_compute nia nsatz omega once pattern pose progress proof psatz quote record red refine reflexivity remember rename repeat replace revert revgoals rewrite rewrite_strat right ring ring_simplify rtauto set setoid_reflexivity setoid_replace setoid_rewrite setoid_symmetry setoid_transitivity shelve shelve_unifiable simpl simple simplify_eq solve specialize split split_Rabs split_Rmult stepl stepr subst sum swap symmetry tactic tauto time timeout top transitivity trivial try tryif unfold unify until using vm_compute with"
      },
      contains: [I.QUOTE_STRING_MODE, I.COMMENT("\\(\\*", "\\*\\)"), I.C_NUMBER_MODE, {
        className: "type",
        excludeBegin: !0,
        begin: "\\|\\s*",
        end: "\\w+"
      }, {
        begin: /[-=]>/
      }]
    }
  }
  MB2.exports = ft5
})
// @from(Start 4083277, End 4085154)
yB2 = Y((ZH3, LB2) => {
  function qt5(I) {
    return {
      name: "Caché Object Script",
      case_insensitive: !0,
      aliases: ["cls"],
      keywords: "property parameter class classmethod clientmethod extends as break catch close continue do d|0 else elseif for goto halt hang h|0 if job j|0 kill k|0 lock l|0 merge new open quit q|0 read r|0 return set s|0 tcommit throw trollback try tstart use view while write w|0 xecute x|0 zkill znspace zn ztrap zwrite zw zzdump zzwrite print zbreak zinsert zload zprint zremove zsave zzprint mv mvcall mvcrt mvdim mvprint zquit zsync ascii",
      contains: [{
        className: "number",
        begin: "\\b(\\d+(\\.\\d*)?|\\.\\d+)",
        relevance: 0
      }, {
        className: "string",
        variants: [{
          begin: '"',
          end: '"',
          contains: [{
            begin: '""',
            relevance: 0
          }]
        }]
      }, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, {
        className: "comment",
        begin: /;/,
        end: "$",
        relevance: 0
      }, {
        className: "built_in",
        begin: /(?:\$\$?|\.\.)\^?[a-zA-Z]+/
      }, {
        className: "built_in",
        begin: /\$\$\$[a-zA-Z]+/
      }, {
        className: "built_in",
        begin: /%[a-z]+(?:\.[a-z]+)*/
      }, {
        className: "symbol",
        begin: /\^%?[a-zA-Z][\w]*/
      }, {
        className: "keyword",
        begin: /##class|##super|#define|#dim/
      }, {
        begin: /&sql\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        subLanguage: "sql"
      }, {
        begin: /&(js|jscript|javascript)</,
        end: />/,
        excludeBegin: !0,
        excludeEnd: !0,
        subLanguage: "javascript"
      }, {
        begin: /&html<\s*</,
        end: />\s*>/,
        subLanguage: "xml"
      }]
    }
  }
  LB2.exports = qt5
})
// @from(Start 4085160, End 4092229)
$B2 = Y((CH3, PB2) => {
  function Rt5(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function Ut5(I) {
    return hF1("(?=", I, ")")
  }

  function Sa(I) {
    return hF1("(", I, ")?")
  }

  function hF1(...I) {
    return I.map((G) => Rt5(G)).join("")
  }

  function vt5(I) {
    let d = I.COMMENT("//", "$", {
        contains: [{
          begin: /\\\n/
        }]
      }),
      G = "decltype\\(auto\\)",
      Z = "[a-zA-Z_]\\w*::",
      C = "<[^<>]+>",
      W = "(decltype\\(auto\\)|" + Sa("[a-zA-Z_]\\w*::") + "[a-zA-Z_]\\w*" + Sa("<[^<>]+>") + ")",
      w = {
        className: "keyword",
        begin: "\\b[a-z\\d_]*_t\\b"
      },
      B = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",
      A = {
        className: "string",
        variants: [{
          begin: '(u8?|U|L)?"',
          end: '"',
          illegal: "\\n",
          contains: [I.BACKSLASH_ESCAPE]
        }, {
          begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
          end: "'",
          illegal: "."
        }, I.END_SAME_AS_BEGIN({
          begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
          end: /\)([^()\\ ]{0,16})"/
        })]
      },
      V = {
        className: "number",
        variants: [{
          begin: "\\b(0b[01']+)"
        }, {
          begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
        }, {
          begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
        }],
        relevance: 0
      },
      X = {
        className: "meta",
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: {
          "meta-keyword": "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
        },
        contains: [{
          begin: /\\\n/,
          relevance: 0
        }, I.inherit(A, {
          className: "meta-string"
        }), {
          className: "meta-string",
          begin: /<.*?>/
        }, d, I.C_BLOCK_COMMENT_MODE]
      },
      _ = {
        className: "title",
        begin: Sa("[a-zA-Z_]\\w*::") + I.IDENT_RE,
        relevance: 0
      },
      F = Sa("[a-zA-Z_]\\w*::") + I.IDENT_RE + "\\s*\\(",
      J = {
        keyword: "int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",
        built_in: "_Bool _Complex _Imaginary",
        _relevance_hints: ["asin", "atan2", "atan", "calloc", "ceil", "cosh", "cos", "exit", "exp", "fabs", "floor", "fmod", "fprintf", "fputs", "free", "frexp", "auto_ptr", "deque", "list", "queue", "stack", "vector", "map", "set", "pair", "bitset", "multiset", "multimap", "unordered_set", "fscanf", "future", "isalnum", "isalpha", "iscntrl", "isdigit", "isgraph", "islower", "isprint", "ispunct", "isspace", "isupper", "isxdigit", "tolower", "toupper", "labs", "ldexp", "log10", "log", "malloc", "realloc", "memchr", "memcmp", "memcpy", "memset", "modf", "pow", "printf", "putchar", "puts", "scanf", "sinh", "sin", "snprintf", "sprintf", "sqrt", "sscanf", "strcat", "strchr", "strcmp", "strcpy", "strcspn", "strlen", "strncat", "strncmp", "strncpy", "strpbrk", "strrchr", "strspn", "strstr", "tanh", "tan", "unordered_map", "unordered_multiset", "unordered_multimap", "priority_queue", "make_pair", "array", "shared_ptr", "abort", "terminate", "abs", "acos", "vfprintf", "vprintf", "vsprintf", "endl", "initializer_list", "unique_ptr", "complex", "imaginary", "std", "string", "wstring", "cin", "cout", "cerr", "clog", "stdin", "stdout", "stderr", "stringstream", "istringstream", "ostringstream"],
        literal: "true false nullptr NULL"
      },
      K = {
        className: "function.dispatch",
        relevance: 0,
        keywords: J,
        begin: hF1(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!while)/, I.IDENT_RE, Ut5(/\s*\(/))
      },
      Q = [K, X, w, d, I.C_BLOCK_COMMENT_MODE, V, A],
      E = {
        variants: [{
          begin: /=/,
          end: /;/
        }, {
          begin: /\(/,
          end: /\)/
        }, {
          beginKeywords: "new throw return else",
          end: /;/
        }],
        keywords: J,
        contains: Q.concat([{
          begin: /\(/,
          end: /\)/,
          keywords: J,
          contains: Q.concat(["self"]),
          relevance: 0
        }]),
        relevance: 0
      },
      S = {
        className: "function",
        begin: "(" + W + "[\\*&\\s]+)+" + F,
        returnBegin: !0,
        end: /[{;=]/,
        excludeEnd: !0,
        keywords: J,
        illegal: /[^\w\s\*&:<>.]/,
        contains: [{
          begin: "decltype\\(auto\\)",
          keywords: J,
          relevance: 0
        }, {
          begin: F,
          returnBegin: !0,
          contains: [_],
          relevance: 0
        }, {
          begin: /::/,
          relevance: 0
        }, {
          begin: /:/,
          endsWithParent: !0,
          contains: [A, V]
        }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: J,
          relevance: 0,
          contains: [d, I.C_BLOCK_COMMENT_MODE, A, V, w, {
            begin: /\(/,
            end: /\)/,
            keywords: J,
            relevance: 0,
            contains: ["self", d, I.C_BLOCK_COMMENT_MODE, A, V, w]
          }]
        }, w, d, I.C_BLOCK_COMMENT_MODE, X]
      };
    return {
      name: "C++",
      aliases: ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"],
      keywords: J,
      illegal: "</",
      classNameAliases: {
        "function.dispatch": "built_in"
      },
      contains: [].concat(E, S, K, Q, [X, {
        begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
        end: ">",
        keywords: J,
        contains: ["self", w]
      }, {
        begin: I.IDENT_RE + "::",
        keywords: J
      }, {
        className: "class",
        beginKeywords: "enum class struct union",
        end: /[{;:<>=]/,
        contains: [{
          beginKeywords: "final class struct"
        }, I.TITLE_MODE]
      }]),
      exports: {
        preprocessor: X,
        strings: A,
        keywords: J
      }
    }
  }
  PB2.exports = vt5
})
// @from(Start 4092235, End 4094497)
TB2 = Y((WH3, uB2) => {
  function Et5(I) {
    let G = "group clone ms master location colocation order fencing_topology rsc_ticket acl_target acl_group user role tag xml",
      Z = "property rsc_defaults op_defaults",
      C = "params meta operations op rule attributes utilization",
      W = "read write deny defined not_defined in_range date spec in ref reference attribute type xpath version and or lt gt tag lte gte eq ne \\",
      w = "number string",
      B = "Master Started Slave Stopped start promote demote stop monitor true false";
    return {
      name: "crmsh",
      aliases: ["crm", "pcmk"],
      case_insensitive: !0,
      keywords: {
        keyword: "params meta operations op rule attributes utilization " + W + " number string",
        literal: "Master Started Slave Stopped start promote demote stop monitor true false"
      },
      contains: [I.HASH_COMMENT_MODE, {
        beginKeywords: "node",
        starts: {
          end: "\\s*([\\w_-]+:)?",
          starts: {
            className: "title",
            end: "\\s*[\\$\\w_][\\w_-]*"
          }
        }
      }, {
        beginKeywords: "primitive rsc_template",
        starts: {
          className: "title",
          end: "\\s*[\\$\\w_][\\w_-]*",
          starts: {
            end: "\\s*@?[\\w_][\\w_\\.:-]*"
          }
        }
      }, {
        begin: "\\b(" + G.split(" ").join("|") + ")\\s+",
        keywords: G,
        starts: {
          className: "title",
          end: "[\\$\\w_][\\w_-]*"
        }
      }, {
        beginKeywords: "property rsc_defaults op_defaults",
        starts: {
          className: "title",
          end: "\\s*([\\w_-]+:)?"
        }
      }, I.QUOTE_STRING_MODE, {
        className: "meta",
        begin: "(ocf|systemd|service|lsb):[\\w_:-]+",
        relevance: 0
      }, {
        className: "number",
        begin: "\\b\\d+(\\.\\d+)?(ms|s|h|m)?",
        relevance: 0
      }, {
        className: "literal",
        begin: "[-]?(infinity|inf)",
        relevance: 0
      }, {
        className: "attr",
        begin: /([A-Za-z$_#][\w_-]+)=/,
        relevance: 0
      }, {
        className: "tag",
        begin: "</?",
        end: "/?>",
        relevance: 0
      }]
    }
  }
  uB2.exports = Et5
})
// @from(Start 4094503, End 4100677)
mB2 = Y((wH3, OB2) => {
  function Mt5(I) {
    let w = {
        $pattern: "[a-zA-Z_]\\w*[!?=]?",
        keyword: "abstract alias annotation as as? asm begin break case class def do else elsif end ensure enum extend for fun if include instance_sizeof is_a? lib macro module next nil? of out pointerof private protected rescue responds_to? return require select self sizeof struct super then type typeof union uninitialized unless until verbatim when while with yield __DIR__ __END_LINE__ __FILE__ __LINE__",
        literal: "false nil true"
      },
      B = {
        className: "subst",
        begin: /#\{/,
        end: /\}/,
        keywords: w
      },
      A = {
        className: "template-variable",
        variants: [{
          begin: "\\{\\{",
          end: "\\}\\}"
        }, {
          begin: "\\{%",
          end: "%\\}"
        }],
        keywords: w
      };

    function V(Q, E) {
      let S = [{
        begin: Q,
        end: E
      }];
      return S[0].contains = S, S
    }
    let X = {
        className: "string",
        contains: [I.BACKSLASH_ESCAPE, B],
        variants: [{
          begin: /'/,
          end: /'/
        }, {
          begin: /"/,
          end: /"/
        }, {
          begin: /`/,
          end: /`/
        }, {
          begin: "%[Qwi]?\\(",
          end: "\\)",
          contains: V("\\(", "\\)")
        }, {
          begin: "%[Qwi]?\\[",
          end: "\\]",
          contains: V("\\[", "\\]")
        }, {
          begin: "%[Qwi]?\\{",
          end: /\}/,
          contains: V(/\{/, /\}/)
        }, {
          begin: "%[Qwi]?<",
          end: ">",
          contains: V("<", ">")
        }, {
          begin: "%[Qwi]?\\|",
          end: "\\|"
        }, {
          begin: /<<-\w+$/,
          end: /^\s*\w+$/
        }],
        relevance: 0
      },
      _ = {
        className: "string",
        variants: [{
          begin: "%q\\(",
          end: "\\)",
          contains: V("\\(", "\\)")
        }, {
          begin: "%q\\[",
          end: "\\]",
          contains: V("\\[", "\\]")
        }, {
          begin: "%q\\{",
          end: /\}/,
          contains: V(/\{/, /\}/)
        }, {
          begin: "%q<",
          end: ">",
          contains: V("<", ">")
        }, {
          begin: "%q\\|",
          end: "\\|"
        }, {
          begin: /<<-'\w+'$/,
          end: /^\s*\w+$/
        }],
        relevance: 0
      },
      F = {
        begin: "(?!%\\})(" + I.RE_STARTERS_RE + "|\\n|\\b(case|if|select|unless|until|when|while)\\b)\\s*",
        keywords: "case if select unless until when while",
        contains: [{
          className: "regexp",
          contains: [I.BACKSLASH_ESCAPE, B],
          variants: [{
            begin: "//[a-z]*",
            relevance: 0
          }, {
            begin: "/(?!\\/)",
            end: "/[a-z]*"
          }]
        }],
        relevance: 0
      },
      g = {
        className: "regexp",
        contains: [I.BACKSLASH_ESCAPE, B],
        variants: [{
          begin: "%r\\(",
          end: "\\)",
          contains: V("\\(", "\\)")
        }, {
          begin: "%r\\[",
          end: "\\]",
          contains: V("\\[", "\\]")
        }, {
          begin: "%r\\{",
          end: /\}/,
          contains: V(/\{/, /\}/)
        }, {
          begin: "%r<",
          end: ">",
          contains: V("<", ">")
        }, {
          begin: "%r\\|",
          end: "\\|"
        }],
        relevance: 0
      },
      J = {
        className: "meta",
        begin: "@\\[",
        end: "\\]",
        contains: [I.inherit(I.QUOTE_STRING_MODE, {
          className: "meta-string"
        })]
      },
      K = [A, X, _, g, F, J, I.HASH_COMMENT_MODE, {
        className: "class",
        beginKeywords: "class module struct",
        end: "$|;",
        illegal: /=/,
        contains: [I.HASH_COMMENT_MODE, I.inherit(I.TITLE_MODE, {
          begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|!)?"
        }), {
          begin: "<"
        }]
      }, {
        className: "class",
        beginKeywords: "lib enum union",
        end: "$|;",
        illegal: /=/,
        contains: [I.HASH_COMMENT_MODE, I.inherit(I.TITLE_MODE, {
          begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|!)?"
        })]
      }, {
        beginKeywords: "annotation",
        end: "$|;",
        illegal: /=/,
        contains: [I.HASH_COMMENT_MODE, I.inherit(I.TITLE_MODE, {
          begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|!)?"
        })],
        relevance: 2
      }, {
        className: "function",
        beginKeywords: "def",
        end: /\B\b/,
        contains: [I.inherit(I.TITLE_MODE, {
          begin: "[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|[=!]~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~|]|//|//=|&[-+*]=?|&\\*\\*|\\[\\][=?]?",
          endsParent: !0
        })]
      }, {
        className: "function",
        beginKeywords: "fun macro",
        end: /\B\b/,
        contains: [I.inherit(I.TITLE_MODE, {
          begin: "[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|[=!]~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~|]|//|//=|&[-+*]=?|&\\*\\*|\\[\\][=?]?",
          endsParent: !0
        })],
        relevance: 2
      }, {
        className: "symbol",
        begin: I.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
        relevance: 0
      }, {
        className: "symbol",
        begin: ":",
        contains: [X, {
          begin: "[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|[=!]~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~|]|//|//=|&[-+*]=?|&\\*\\*|\\[\\][=?]?"
        }],
        relevance: 0
      }, {
        className: "number",
        variants: [{
          begin: "\\b0b([01_]+)(_?[ui](8|16|32|64|128))?"
        }, {
          begin: "\\b0o([0-7_]+)(_?[ui](8|16|32|64|128))?"
        }, {
          begin: "\\b0x([A-Fa-f0-9_]+)(_?[ui](8|16|32|64|128))?"
        }, {
          begin: "\\b([1-9][0-9_]*[0-9]|[0-9])(\\.[0-9][0-9_]*)?([eE]_?[-+]?[0-9_]*)?(_?f(32|64))?(?!_)"
        }, {
          begin: "\\b([1-9][0-9_]*|0)(_?[ui](8|16|32|64|128))?"
        }],
        relevance: 0
      }];
    return B.contains = K, A.contains = K.slice(1), {
      name: "Crystal",
      aliases: ["cr"],
      keywords: w,
      contains: K
    }
  }
  OB2.exports = Mt5
})
// @from(Start 4100683, End 4106576)
bB2 = Y((BH3, lB2) => {
  function St5(I) {
    let d = ["bool", "byte", "char", "decimal", "delegate", "double", "dynamic", "enum", "float", "int", "long", "nint", "nuint", "object", "sbyte", "short", "string", "ulong", "uint", "ushort"],
      G = ["public", "private", "protected", "static", "internal", "protected", "abstract", "async", "extern", "override", "unsafe", "virtual", "new", "sealed", "partial"],
      Z = ["default", "false", "null", "true"],
      C = ["abstract", "as", "base", "break", "case", "class", "const", "continue", "do", "else", "event", "explicit", "extern", "finally", "fixed", "for", "foreach", "goto", "if", "implicit", "in", "interface", "internal", "is", "lock", "namespace", "new", "operator", "out", "override", "params", "private", "protected", "public", "readonly", "record", "ref", "return", "sealed", "sizeof", "stackalloc", "static", "struct", "switch", "this", "throw", "try", "typeof", "unchecked", "unsafe", "using", "virtual", "void", "volatile", "while"],
      W = ["add", "alias", "and", "ascending", "async", "await", "by", "descending", "equals", "from", "get", "global", "group", "init", "into", "join", "let", "nameof", "not", "notnull", "on", "or", "orderby", "partial", "remove", "select", "set", "unmanaged", "value|0", "var", "when", "where", "with", "yield"],
      w = {
        keyword: C.concat(W),
        built_in: d,
        literal: Z
      },
      B = I.inherit(I.TITLE_MODE, {
        begin: "[a-zA-Z](\\.?\\w)*"
      }),
      A = {
        className: "number",
        variants: [{
          begin: "\\b(0b[01']+)"
        }, {
          begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
        }, {
          begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
        }],
        relevance: 0
      },
      V = {
        className: "string",
        begin: '@"',
        end: '"',
        contains: [{
          begin: '""'
        }]
      },
      X = I.inherit(V, {
        illegal: /\n/
      }),
      _ = {
        className: "subst",
        begin: /\{/,
        end: /\}/,
        keywords: w
      },
      F = I.inherit(_, {
        illegal: /\n/
      }),
      g = {
        className: "string",
        begin: /\$"/,
        end: '"',
        illegal: /\n/,
        contains: [{
          begin: /\{\{/
        }, {
          begin: /\}\}/
        }, I.BACKSLASH_ESCAPE, F]
      },
      J = {
        className: "string",
        begin: /\$@"/,
        end: '"',
        contains: [{
          begin: /\{\{/
        }, {
          begin: /\}\}/
        }, {
          begin: '""'
        }, _]
      },
      K = I.inherit(J, {
        illegal: /\n/,
        contains: [{
          begin: /\{\{/
        }, {
          begin: /\}\}/
        }, {
          begin: '""'
        }, F]
      });
    _.contains = [J, g, V, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, A, I.C_BLOCK_COMMENT_MODE], F.contains = [K, g, X, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, A, I.inherit(I.C_BLOCK_COMMENT_MODE, {
      illegal: /\n/
    })];
    let Q = {
        variants: [J, g, V, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE]
      },
      E = {
        begin: "<",
        end: ">",
        contains: [{
          beginKeywords: "in out"
        }, B]
      },
      S = I.IDENT_RE + "(<" + I.IDENT_RE + "(\\s*,\\s*" + I.IDENT_RE + ")*>)?(\\[\\])?",
      P = {
        begin: "@" + I.IDENT_RE,
        relevance: 0
      };
    return {
      name: "C#",
      aliases: ["cs", "c#"],
      keywords: w,
      illegal: /::/,
      contains: [I.COMMENT("///", "$", {
        returnBegin: !0,
        contains: [{
          className: "doctag",
          variants: [{
            begin: "///",
            relevance: 0
          }, {
            begin: "<!--|-->"
          }, {
            begin: "</?",
            end: ">"
          }]
        }]
      }), I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, {
        className: "meta",
        begin: "#",
        end: "$",
        keywords: {
          "meta-keyword": "if else elif endif define undef warning error line region endregion pragma checksum"
        }
      }, Q, A, {
        beginKeywords: "class interface",
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:,]/,
        contains: [{
          beginKeywords: "where class"
        }, B, E, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE]
      }, {
        beginKeywords: "namespace",
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:]/,
        contains: [B, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE]
      }, {
        beginKeywords: "record",
        relevance: 0,
        end: /[{;=]/,
        illegal: /[^\s:]/,
        contains: [B, E, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE]
      }, {
        className: "meta",
        begin: "^\\s*\\[",
        excludeBegin: !0,
        end: "\\]",
        excludeEnd: !0,
        contains: [{
          className: "meta-string",
          begin: /"/,
          end: /"/
        }]
      }, {
        beginKeywords: "new return throw await else",
        relevance: 0
      }, {
        className: "function",
        begin: "(" + S + "\\s+)+" + I.IDENT_RE + "\\s*(<.+>\\s*)?\\(",
        returnBegin: !0,
        end: /\s*[{;=]/,
        excludeEnd: !0,
        keywords: w,
        contains: [{
          beginKeywords: G.join(" "),
          relevance: 0
        }, {
          begin: I.IDENT_RE + "\\s*(<.+>\\s*)?\\(",
          returnBegin: !0,
          contains: [I.TITLE_MODE, E],
          relevance: 0
        }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: w,
          relevance: 0,
          contains: [Q, A, I.C_BLOCK_COMMENT_MODE]
        }, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE]
      }, P]
    }
  }
  lB2.exports = St5
})
// @from(Start 4106582, End 4107185)
jB2 = Y((AH3, hB2) => {
  function Lt5(I) {
    return {
      name: "CSP",
      case_insensitive: !1,
      keywords: {
        $pattern: "[a-zA-Z][a-zA-Z0-9_-]*",
        keyword: "base-uri child-src connect-src default-src font-src form-action frame-ancestors frame-src img-src media-src object-src plugin-types report-uri sandbox script-src style-src"
      },
      contains: [{
        className: "string",
        begin: "'",
        end: "'"
      }, {
        className: "attribute",
        begin: "^Content",
        end: ":",
        excludeEnd: !0
      }]
    }
  }
  hB2.exports = Lt5
})
// @from(Start 4107191, End 4115687)
xB2 = Y((VH3, kB2) => {
  var yt5 = (I) => {
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
    Pt5 = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"],
    $t5 = ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"],
    ut5 = ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"],
    Tt5 = ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"],
    Ot5 = ["align-content", "align-items", "align-self", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "auto", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "clip-path", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-variant", "font-variant-ligatures", "font-variation-settings", "font-weight", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inherit", "initial", "justify-content", "left", "letter-spacing", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "mask", "max-height", "max-width", "min-height", "min-width", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "right", "src", "tab-size", "table-layout", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index"].reverse();

  function mt5(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function lt5(I) {
    return bt5("(?=", I, ")")
  }

  function bt5(...I) {
    return I.map((G) => mt5(G)).join("")
  }

  function ht5(I) {
    let d = yt5(I),
      G = {
        className: "built_in",
        begin: /[\w-]+(?=\()/
      },
      Z = {
        begin: /-(webkit|moz|ms|o)-(?=[a-z])/
      },
      C = "and or not only",
      W = /@-?\w[\w]*(-\w+)*/,
      w = "[a-zA-Z-][a-zA-Z0-9_-]*",
      B = [I.APOS_STRING_MODE, I.QUOTE_STRING_MODE];
    return {
      name: "CSS",
      case_insensitive: !0,
      illegal: /[=|'\$]/,
      keywords: {
        keyframePosition: "from to"
      },
      classNameAliases: {
        keyframePosition: "selector-tag"
      },
      contains: [I.C_BLOCK_COMMENT_MODE, Z, I.CSS_NUMBER_MODE, {
        className: "selector-id",
        begin: /#[A-Za-z0-9_-]+/,
        relevance: 0
      }, {
        className: "selector-class",
        begin: "\\.[a-zA-Z-][a-zA-Z0-9_-]*",
        relevance: 0
      }, d.ATTRIBUTE_SELECTOR_MODE, {
        className: "selector-pseudo",
        variants: [{
          begin: ":(" + ut5.join("|") + ")"
        }, {
          begin: "::(" + Tt5.join("|") + ")"
        }]
      }, {
        className: "attribute",
        begin: "\\b(" + Ot5.join("|") + ")\\b"
      }, {
        begin: ":",
        end: "[;}]",
        contains: [d.HEXCOLOR, d.IMPORTANT, I.CSS_NUMBER_MODE, ...B, {
          begin: /(url|data-uri)\(/,
          end: /\)/,
          relevance: 0,
          keywords: {
            built_in: "url data-uri"
          },
          contains: [{
            className: "string",
            begin: /[^)]/,
            endsWithParent: !0,
            excludeEnd: !0
          }]
        }, G]
      }, {
        begin: lt5(/@/),
        end: "[{;]",
        relevance: 0,
        illegal: /:/,
        contains: [{
          className: "keyword",
          begin: W
        }, {
          begin: /\s/,
          endsWithParent: !0,
          excludeEnd: !0,
          relevance: 0,
          keywords: {
            $pattern: /[a-z-]+/,
            keyword: "and or not only",
            attribute: $t5.join(" ")
          },
          contains: [{
            begin: /[a-z-]+(?=:)/,
            className: "attribute"
          }, ...B, I.CSS_NUMBER_MODE]
        }]
      }, {
        className: "selector-tag",
        begin: "\\b(" + Pt5.join("|") + ")\\b"
      }]
    }
  }
  kB2.exports = ht5
})
// @from(Start 4115693, End 4119149)
pB2 = Y((XH3, cB2) => {
  function jt5(I) {
    let d = {
        $pattern: I.UNDERSCORE_IDENT_RE,
        keyword: "abstract alias align asm assert auto body break byte case cast catch class const continue debug default delete deprecated do else enum export extern final finally for foreach foreach_reverse|10 goto if immutable import in inout int interface invariant is lazy macro mixin module new nothrow out override package pragma private protected public pure ref return scope shared static struct super switch synchronized template this throw try typedef typeid typeof union unittest version void volatile while with __FILE__ __LINE__ __gshared|10 __thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__",
        built_in: "bool cdouble cent cfloat char creal dchar delegate double dstring float function idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar wstring",
        literal: "false null true"
      },
      G = "(0|[1-9][\\d_]*)",
      Z = "(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)",
      C = "0[bB][01_]+",
      W = "([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)",
      w = "0[xX]([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)",
      B = "([eE][+-]?(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d))",
      A = "((0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)(\\.\\d*|" + B + ")|\\d+\\.(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)|\\.(0|[1-9][\\d_]*)" + B + "?)",
      V = "(0[xX](([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)\\.([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)|\\.?([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*))[pP][+-]?(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d))",
      X = "((0|[1-9][\\d_]*)|0[bB][01_]+|" + w + ")",
      _ = "(" + V + "|" + A + ")",
      F = `\\\\(['"\\?\\\\abfnrtv]|u[\\dA-Fa-f]{4}|[0-7]{1,3}|x[\\dA-Fa-f]{2}|U[\\dA-Fa-f]{8})|&[a-zA-Z\\d]{2,};`,
      g = {
        className: "number",
        begin: "\\b" + X + "(L|u|U|Lu|LU|uL|UL)?",
        relevance: 0
      },
      J = {
        className: "number",
        begin: "\\b(" + _ + "([fF]|L|i|[fF]i|Li)?|" + X + "(i|[fF]i|Li))",
        relevance: 0
      },
      K = {
        className: "string",
        begin: "'(" + F + "|.)",
        end: "'",
        illegal: "."
      },
      E = {
        className: "string",
        begin: '"',
        contains: [{
          begin: F,
          relevance: 0
        }],
        end: '"[cwd]?'
      },
      S = {
        className: "string",
        begin: '[rq]"',
        end: '"[cwd]?',
        relevance: 5
      },
      P = {
        className: "string",
        begin: "`",
        end: "`[cwd]?"
      },
      $ = {
        className: "string",
        begin: 'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?',
        relevance: 10
      },
      h = {
        className: "string",
        begin: 'q"\\{',
        end: '\\}"'
      },
      O = {
        className: "meta",
        begin: "^#!",
        end: "$",
        relevance: 5
      },
      T = {
        className: "meta",
        begin: "#(line)",
        end: "$",
        relevance: 5
      },
      V1 = {
        className: "keyword",
        begin: "@[a-zA-Z_][a-zA-Z_\\d]*"
      },
      c = I.COMMENT("\\/\\+", "\\+\\/", {
        contains: ["self"],
        relevance: 10
      });
    return {
      name: "D",
      keywords: d,
      contains: [I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, c, $, E, S, P, h, J, g, K, O, T, V1]
    }
  }
  cB2.exports = jt5
})
// @from(Start 4119155, End 4122836)
nB2 = Y((YH3, iB2) => {
  function kt5(I) {
    if (!I) return null;
    if (typeof I === "string") return I;
    return I.source
  }

  function xt5(...I) {
    return I.map((G) => kt5(G)).join("")
  }

  function ct5(I) {
    let d = {
        begin: /<\/?[A-Za-z_]/,
        end: ">",
        subLanguage: "xml",
        relevance: 0
      },
      G = {
        begin: "^[-\\*]{3,}",
        end: "$"
      },
      Z = {
        className: "code",
        variants: [{
          begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*"
        }, {
          begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*"
        }, {
          begin: "```",
          end: "```+[ ]*$"
        }, {
          begin: "~~~",
          end: "~~~+[ ]*$"
        }, {
          begin: "`.+?`"
        }, {
          begin: "(?=^( {4}|\\t))",
          contains: [{
            begin: "^( {4}|\\t)",
            end: "(\\n)$"
          }],
          relevance: 0
        }]
      },
      C = {
        className: "bullet",
        begin: "^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",
        end: "\\s+",
        excludeEnd: !0
      },
      W = {
        begin: /^\[[^\n]+\]:/,
        returnBegin: !0,
        contains: [{
          className: "symbol",
          begin: /\[/,
          end: /\]/,
          excludeBegin: !0,
          excludeEnd: !0
        }, {
          className: "link",
          begin: /:\s*/,
          end: /$/,
          excludeBegin: !0
        }]
      },
      B = {
        variants: [{
          begin: /\[.+?\]\[.*?\]/,
          relevance: 0
        }, {
          begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
          relevance: 2
        }, {
          begin: xt5(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/),
          relevance: 2
        }, {
          begin: /\[.+?\]\([./?&#].*?\)/,
          relevance: 1
        }, {
          begin: /\[.+?\]\(.*?\)/,
          relevance: 0
        }],
        returnBegin: !0,
        contains: [{
          className: "string",
          relevance: 0,
          begin: "\\[",
          end: "\\]",
          excludeBegin: !0,
          returnEnd: !0
        }, {
          className: "link",
          relevance: 0,
          begin: "\\]\\(",
          end: "\\)",
          excludeBegin: !0,
          excludeEnd: !0
        }, {
          className: "symbol",
          relevance: 0,
          begin: "\\]\\[",
          end: "\\]",
          excludeBegin: !0,
          excludeEnd: !0
        }]
      },
      A = {
        className: "strong",
        contains: [],
        variants: [{
          begin: /_{2}/,
          end: /_{2}/
        }, {
          begin: /\*{2}/,
          end: /\*{2}/
        }]
      },
      V = {
        className: "emphasis",
        contains: [],
        variants: [{
          begin: /\*(?!\*)/,
          end: /\*/
        }, {
          begin: /_(?!_)/,
          end: /_/,
          relevance: 0
        }]
      };
    A.contains.push(V), V.contains.push(A);
    let X = [d, B];
    return A.contains = A.contains.concat(X), V.contains = V.contains.concat(X), X = X.concat(A, V), {
      name: "Markdown",
      aliases: ["md", "mkdown", "mkd"],
      contains: [{
        className: "section",
        variants: [{
          begin: "^#{1,6}",
          end: "$",
          contains: X
        }, {
          begin: "(?=^.+?\\n[=-]{2,}$)",
          contains: [{
            begin: "^[=-]*$"
          }, {
            begin: "^",
            end: "\\n",
            contains: X
          }]
        }]
      }, d, C, A, V, {
        className: "quote",
        begin: "^>\\s+",
        contains: X,
        end: "$"
      }, Z, G, B, W]
    }
  }
  iB2.exports = ct5
})
// @from(Start 4122842, End 4125728)
aB2 = Y((_H3, rB2) => {
  function pt5(I) {
    let d = {
        className: "subst",
        variants: [{
          begin: "\\$[A-Za-z0-9_]+"
        }]
      },
      G = {
        className: "subst",
        variants: [{
          begin: /\$\{/,
          end: /\}/
        }],
        keywords: "true false null this is new super"
      },
      Z = {
        className: "string",
        variants: [{
          begin: "r'''",
          end: "'''"
        }, {
          begin: 'r"""',
          end: '"""'
        }, {
          begin: "r'",
          end: "'",
          illegal: "\\n"
        }, {
          begin: 'r"',
          end: '"',
          illegal: "\\n"
        }, {
          begin: "'''",
          end: "'''",
          contains: [I.BACKSLASH_ESCAPE, d, G]
        }, {
          begin: '"""',
          end: '"""',
          contains: [I.BACKSLASH_ESCAPE, d, G]
        }, {
          begin: "'",
          end: "'",
          illegal: "\\n",
          contains: [I.BACKSLASH_ESCAPE, d, G]
        }, {
          begin: '"',
          end: '"',
          illegal: "\\n",
          contains: [I.BACKSLASH_ESCAPE, d, G]
        }]
      };
    G.contains = [I.C_NUMBER_MODE, Z];
    let C = ["Comparable", "DateTime", "Duration", "Function", "Iterable", "Iterator", "List", "Map", "Match", "Object", "Pattern", "RegExp", "Set", "Stopwatch", "String", "StringBuffer", "StringSink", "Symbol", "Type", "Uri", "bool", "double", "int", "num", "Element", "ElementList"],
      W = C.map((B) => `${B}?`);
    return {
      name: "Dart",
      keywords: {
        keyword: "abstract as assert async await break case catch class const continue covariant default deferred do dynamic else enum export extends extension external factory false final finally for Function get hide if implements import in inferface is late library mixin new null on operator part required rethrow return set show static super switch sync this throw true try typedef var void while with yield",
        built_in: C.concat(W).concat(["Never", "Null", "dynamic", "print", "document", "querySelector", "querySelectorAll", "window"]),
        $pattern: /[A-Za-z][A-Za-z0-9_]*\??/
      },
      contains: [Z, I.COMMENT(/\/\*\*(?!\/)/, /\*\//, {
        subLanguage: "markdown",
        relevance: 0
      }), I.COMMENT(/\/{3,} ?/, /$/, {
        contains: [{
          subLanguage: "markdown",
          begin: ".",
          end: "$",
          relevance: 0
        }]
      }), I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, {
        className: "class",
        beginKeywords: "class interface",
        end: /\{/,
        excludeEnd: !0,
        contains: [{
          beginKeywords: "extends implements"
        }, I.UNDERSCORE_TITLE_MODE]
      }, I.C_NUMBER_MODE, {
        className: "meta",
        begin: "@[A-Za-z]+"
      }, {
        begin: "=>"
      }]
    }
  }
  rB2.exports = pt5
})
// @from(Start 4125734, End 4128348)
oB2 = Y((DH3, sB2) => {
  function it5(I) {
    let d = "exports register file shl array record property for mod while set ally label uses raise not stored class safecall var interface or private static exit index inherited to else stdcall override shr asm far resourcestring finalization packed virtual out and protected library do xorwrite goto near function end div overload object unit begin string on inline repeat until destructor write message program with read initialization except default nil if case cdecl in downto threadvar of try pascal const external constructor type public then implementation finally published procedure absolute reintroduce operator as is abstract alias assembler bitpacked break continue cppdecl cvar enumerator experimental platform deprecated unimplemented dynamic export far16 forward generic helper implements interrupt iochecks local name nodefault noreturn nostackframe oldfpccall otherwise saveregisters softfloat specialize strict unaligned varargs ",
      G = [I.C_LINE_COMMENT_MODE, I.COMMENT(/\{/, /\}/, {
        relevance: 0
      }), I.COMMENT(/\(\*/, /\*\)/, {
        relevance: 10
      })],
      Z = {
        className: "meta",
        variants: [{
          begin: /\{\$/,
          end: /\}/
        }, {
          begin: /\(\*\$/,
          end: /\*\)/
        }]
      },
      C = {
        className: "string",
        begin: /'/,
        end: /'/,
        contains: [{
          begin: /''/
        }]
      },
      W = {
        className: "number",
        relevance: 0,
        variants: [{
          begin: "\\$[0-9A-Fa-f]+"
        }, {
          begin: "&[0-7]+"
        }, {
          begin: "%[01]+"
        }]
      },
      w = {
        className: "string",
        begin: /(#\d+)+/
      },
      B = {
        begin: I.IDENT_RE + "\\s*=\\s*class\\s*\\(",
        returnBegin: !0,
        contains: [I.TITLE_MODE]
      },
      A = {
        className: "function",
        beginKeywords: "function constructor destructor procedure",
        end: /[:;]/,
        keywords: "function constructor|10 destructor|10 procedure|10",
        contains: [I.TITLE_MODE, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: d,
          contains: [C, w, Z].concat(G)
        }, Z].concat(G)
      };
    return {
      name: "Delphi",
      aliases: ["dpr", "dfm", "pas", "pascal", "freepascal", "lazarus", "lpr", "lfm"],
      case_insensitive: !0,
      keywords: d,
      illegal: /"|\$[G-Zg-z]|\/\*|<\/|\|/,
      contains: [C, w, I.NUMBER_MODE, W, B, A, Z].concat(G)
    }
  }
  sB2.exports = it5
})
// @from(Start 4128354, End 4129520)
tB2 = Y((HH3, eB2) => {
  function nt5(I) {
    return {
      name: "Diff",
      aliases: ["patch"],
      contains: [{
        className: "meta",
        relevance: 10,
        variants: [{
          begin: /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/
        }, {
          begin: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
        }, {
          begin: /^--- +\d+,\d+ +----$/
        }]
      }, {
        className: "comment",
        variants: [{
          begin: /Index: /,
          end: /$/
        }, {
          begin: /^index/,
          end: /$/
        }, {
          begin: /={3,}/,
          end: /$/
        }, {
          begin: /^-{3}/,
          end: /$/
        }, {
          begin: /^\*{3} /,
          end: /$/
        }, {
          begin: /^\+{3}/,
          end: /$/
        }, {
          begin: /^\*{15}$/
        }, {
          begin: /^diff --git/,
          end: /$/
        }]
      }, {
        className: "addition",
        begin: /^\+/,
        end: /$/
      }, {
        className: "deletion",
        begin: /^-/,
        end: /$/
      }, {
        className: "addition",
        begin: /^!/,
        end: /$/
      }]
    }
  }
  eB2.exports = nt5
})
// @from(Start 4129526, End 4131657)
dA2 = Y((FH3, IA2) => {
  function rt5(I) {
    let d = {
      begin: /\|[A-Za-z]+:?/,
      keywords: {
        name: "truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone"
      },
      contains: [I.QUOTE_STRING_MODE, I.APOS_STRING_MODE]
    };
    return {
      name: "Django",
      aliases: ["jinja"],
      case_insensitive: !0,
      subLanguage: "xml",
      contains: [I.COMMENT(/\{%\s*comment\s*%\}/, /\{%\s*endcomment\s*%\}/), I.COMMENT(/\{#/, /#\}/), {
        className: "template-tag",
        begin: /\{%/,
        end: /%\}/,
        contains: [{
          className: "name",
          begin: /\w+/,
          keywords: {
            name: "comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim"
          },
          starts: {
            endsWithParent: !0,
            keywords: "in by as",
            contains: [d],
            relevance: 0
          }
        }]
      }, {
        className: "template-variable",
        begin: /\{\{/,
        end: /\}\}/,
        contains: [d]
      }]
    }
  }
  IA2.exports = rt5
})
// @from(Start 4131663, End 4133604)
ZA2 = Y((gH3, GA2) => {
  function at5(I) {
    return {
      name: "DNS Zone",
      aliases: ["bind", "zone"],
      keywords: {
        keyword: "IN A AAAA AFSDB APL CAA CDNSKEY CDS CERT CNAME DHCID DLV DNAME DNSKEY DS HIP IPSECKEY KEY KX LOC MX NAPTR NS NSEC NSEC3 NSEC3PARAM PTR RRSIG RP SIG SOA SRV SSHFP TA TKEY TLSA TSIG TXT"
      },
      contains: [I.COMMENT(";", "$", {
        relevance: 0
      }), {
        className: "meta",
        begin: /^\$(TTL|GENERATE|INCLUDE|ORIGIN)\b/
      }, {
        className: "number",
        begin: "((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))\\b"
      }, {
        className: "number",
        begin: "((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\b"
      }, I.inherit(I.NUMBER_MODE, {
        begin: /\b\d+[dhwm]?/
      })]
    }
  }
  GA2.exports = at5
})
// @from(Start 4133610, End 4134156)
WA2 = Y((JH3, CA2) => {
  function st5(I) {
    return {
      name: "Dockerfile",
      aliases: ["docker"],
      case_insensitive: !0,
      keywords: "from maintainer expose env arg user onbuild stopsignal",
      contains: [I.HASH_COMMENT_MODE, I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, I.NUMBER_MODE, {
        beginKeywords: "run cmd entrypoint volume add copy workdir label healthcheck shell",
        starts: {
          end: /[^\\]$/,
          subLanguage: "bash"
        }
      }],
      illegal: "</"
    }
  }
  CA2.exports = st5
})
// @from(Start 4134162, End 4135631)
BA2 = Y((KH3, wA2) => {
  function ot5(I) {
    let d = I.COMMENT(/^\s*@?rem\b/, /$/, {
      relevance: 10
    });
    return {
      name: "Batch file (DOS)",
      aliases: ["bat", "cmd"],
      case_insensitive: !0,
      illegal: /\/\*/,
      keywords: {
        keyword: "if else goto for in do call exit not exist errorlevel defined equ neq lss leq gtr geq",
        built_in: "prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux shift cd dir echo setlocal endlocal set pause copy append assoc at attrib break cacls cd chcp chdir chkdsk chkntfs cls cmd color comp compact convert date dir diskcomp diskcopy doskey erase fs find findstr format ftype graftabl help keyb label md mkdir mode more move path pause print popd pushd promt rd recover rem rename replace restore rmdir shift sort start subst time title tree type ver verify vol ping net ipconfig taskkill xcopy ren del"
      },
      contains: [{
        className: "variable",
        begin: /%%[^ ]|%[^ ]+?%|![^ ]+?!/
      }, {
        className: "function",
        begin: {
          className: "symbol",
          begin: "^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)",
          relevance: 0
        }.begin,
        end: "goto:eof",
        contains: [I.inherit(I.TITLE_MODE, {
          begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"
        }), d]
      }, {
        className: "number",
        begin: "\\b\\d+",
        relevance: 0
      }, d]
    }
  }
  wA2.exports = ot5
})
// @from(Start 4135637, End 4136606)
VA2 = Y((NH3, AA2) => {
  function et5(I) {
    return {
      keywords: "dsconfig",
      contains: [{
        className: "keyword",
        begin: "^dsconfig",
        end: /\s/,
        excludeEnd: !0,
        relevance: 10
      }, {
        className: "built_in",
        begin: /(list|create|get|set|delete)-(\w+)/,
        end: /\s/,
        excludeEnd: !0,
        illegal: "!@#$%^&*()",
        relevance: 10
      }, {
        className: "built_in",
        begin: /--(\w+)/,
        end: /\s/,
        excludeEnd: !0
      }, {
        className: "string",
        begin: /"/,
        end: /"/
      }, {
        className: "string",
        begin: /'/,
        end: /'/
      }, {
        className: "string",
        begin: /[\w\-?]+:\w+/,
        end: /\W/,
        relevance: 0
      }, {
        className: "string",
        begin: /\w+(\-\w+)*/,
        end: /(?=\W)/,
        relevance: 0
      }, I.HASH_COMMENT_MODE]
    }
  }
  AA2.exports = et5
})
// @from(Start 4136612, End 4138871)
YA2 = Y((zH3, XA2) => {
  function tt5(I) {
    let d = {
        className: "string",
        variants: [I.inherit(I.QUOTE_STRING_MODE, {
          begin: '((u8?|U)|L)?"'
        }), {
          begin: '(u8?|U)?R"',
          end: '"',
          contains: [I.BACKSLASH_ESCAPE]
        }, {
          begin: "'\\\\?.",
          end: "'",
          illegal: "."
        }]
      },
      G = {
        className: "number",
        variants: [{
          begin: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
        }, {
          begin: I.C_NUMBER_RE
        }],
        relevance: 0
      },
      Z = {
        className: "meta",
        begin: "#",
        end: "$",
        keywords: {
          "meta-keyword": "if else elif endif define undef ifdef ifndef"
        },
        contains: [{
          begin: /\\\n/,
          relevance: 0
        }, {
          beginKeywords: "include",
          end: "$",
          keywords: {
            "meta-keyword": "include"
          },
          contains: [I.inherit(d, {
            className: "meta-string"
          }), {
            className: "meta-string",
            begin: "<",
            end: ">",
            illegal: "\\n"
          }]
        }, d, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE]
      },
      C = {
        className: "variable",
        begin: /&[a-z\d_]*\b/
      },
      W = {
        className: "meta-keyword",
        begin: "/[a-z][a-z\\d-]*/"
      },
      w = {
        className: "symbol",
        begin: "^\\s*[a-zA-Z_][a-zA-Z\\d_]*:"
      },
      B = {
        className: "params",
        begin: "<",
        end: ">",
        contains: [G, C]
      },
      A = {
        className: "class",
        begin: /[a-zA-Z_][a-zA-Z\d_@]*\s\{/,
        end: /[{;=]/,
        returnBegin: !0,
        excludeEnd: !0
      };
    return {
      name: "Device Tree",
      keywords: "",
      contains: [{
        className: "class",
        begin: "/\\s*\\{",
        end: /\};/,
        relevance: 10,
        contains: [C, W, w, A, B, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, G, d]
      }, C, W, w, A, B, I.C_LINE_COMMENT_MODE, I.C_BLOCK_COMMENT_MODE, G, d, Z, {
        begin: I.IDENT_RE + "::",
        keywords: ""
      }]
    }
  }
  XA2.exports = tt5
})
// @from(Start 4138877, End 4139602)
DA2 = Y((QH3, _A2) => {
  function I19(I) {
    return {
      name: "Dust",
      aliases: ["dst"],
      case_insensitive: !0,
      subLanguage: "xml",
      contains: [{
        className: "template-tag",
        begin: /\{[#\/]/,
        end: /\}/,
        illegal: /;/,
        contains: [{
          className: "name",
          begin: /[a-zA-Z\.-]+/,
          starts: {
            endsWithParent: !0,
            relevance: 0,
            contains: [I.QUOTE_STRING_MODE]
          }
        }]
      }, {
        className: "template-variable",
        begin: /\{/,
        end: /\}/,
        illegal: /;/,
        keywords: "if eq ne lt lte gt gte select default math sep"
      }]
    }
  }
  _A2.exports = I19
})
// @from(Start 4139608, End 4140246)
FA2 = Y((fH3, HA2) => {
  function d19(I) {
    let d = I.COMMENT(/\(\*/, /\*\)/),
      G = {
        className: "attribute",
        begin: /^[ ]*[a-zA-Z]+([\s_-]+[a-zA-Z]+)*/
      },
      C = {
        begin: /=/,
        end: /[.;]/,
        contains: [d, {
          className: "meta",
          begin: /\?.*\?/
        }, {
          className: "string",
          variants: [I.APOS_STRING_MODE, I.QUOTE_STRING_MODE, {
            begin: "`",
            end: "`"
          }]
        }]
      };
    return {
      name: "Extended Backus-Naur Form",
      illegal: /\S/,
      contains: [d, G, C]
    }
  }
  HA2.exports = d19
})
// @from(Start 4140252, End 4144482)
JA2 = Y((qH3, gA2) => {
  function G19(I) {
    let Z = {
        $pattern: "[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?",
        keyword: "and false then defined module in return redo retry end for true self when next until do begin unless nil break not case cond alias while ensure or include use alias fn quote require import with|0"
      },
      C = {
        className: "subst",
        begin: /#\{/,
        end: /\}/,
        keywords: Z
      },
      W = {
        className: "number",
        begin: "(\\b0o[0-7_]+)|(\\b0b[01_]+)|(\\b0x[0-9a-fA-F_]+)|(-?\\b[1-9][0-9_]*(\\.[0-9_]+([eE][-+]?[0-9]+)?)?)",
        relevance: 0
      },
      w = `[/|([{<"']`,
      B = {
        className: "string",
        begin: `~[a-z](?=[/|([{<"'])`,
        contains: [{
          endsParent: !0,
          contains: [{
            contains: [I.BACKSLASH_ESCAPE, C],
            variants: [{
              begin: /"/,
              end: /"/
            }, {
              begin: /'/,
              end: /'/
            }, {
              begin: /\//,
              end: /\//
            }, {
              begin: /\|/,
              end: /\|/
            }, {
              begin: /\(/,
              end: /\)/
            }, {
              begin: /\[/,
              end: /\]/
            }, {
              begin: /\{/,
              end: /\}/
            }, {
              begin: /</,
              end: />/
            }]
          }]
        }]
      },
      A = {
        className: "string",
        begin: `~[A-Z](?=[/|([{<"'])`,
        contains: [{
          begin: /"/,
          end: /"/
        }, {
          begin: /'/,
          end: /'/
        }, {
          begin: /\//,
          end: /\//
        }, {
          begin: /\|/,
          end: /\|/
        }, {
          begin: /\(/,
          end: /\)/
        }, {
          begin: /\[/,
          end: /\]/
        }, {
          begin: /\{/,
          end: /\}/
        }, {
          begin: /</,
          end: />/
        }]
      },
      V = {
        className: "string",
        contains: [I.BACKSLASH_ESCAPE, C],
        variants: [{
          begin: /"""/,
          end: /"""/
        }, {
          begin: /'''/,
          end: /'''/
        }, {
          begin: /~S"""/,
          end: /"""/,
          contains: []
        }, {
          begin: /~S"/,
          end: /"/,
          contains: []
        }, {
          begin: /~S'''/,
          end: /'''/,
          contains: []
        }, {
          begin: /~S'/,
          end: /'/,
          contains: []
        }, {
          begin: /'/,
          end: /'/
        }, {
          begin: /"/,
          end: /"/
        }]
      },
      X = {
        className: "function",
        beginKeywords: "def defp defmacro",
        end: /\B\b/,
        contains: [I.inherit(I.TITLE_MODE, {
          begin: "[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?",
          endsParent: !0
        })]
      },
      _ = I.inherit(X, {
        className: "class",
        beginKeywords: "defimpl defmodule defprotocol defrecord",
        end: /\bdo\b|$|;/
      }),
      F = [V, A, B, I.HASH_COMMENT_MODE, _, X, {
        begin: "::"
      }, {
        className: "symbol",
        begin: ":(?![\\s:])",
        contains: [V, {
          begin: "[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?"
        }],
        relevance: 0
      }, {
        className: "symbol",
        begin: "[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?:(?!:)",
        relevance: 0
      }, W, {
        className: "variable",
        begin: "(\\$\\W)|((\\$|@@?)(\\w+))"
      }, {
        begin: "->"
      }, {
        begin: "(" + I.RE_STARTERS_RE + ")\\s*",
        contains: [I.HASH_COMMENT_MODE, {
          begin: /\/: (?=\d+\s*[,\]])/,
          relevance: 0,
          contains: [W]
        }, {
          className: "regexp",
          illegal: "\\n",
          contains: [I.BACKSLASH_ESCAPE, C],
          variants: [{
            begin: "/",
            end: "/[a-z]*"
          }, {
            begin: "%r\\[",
            end: "\\][a-z]*"
          }]
        }],
        relevance: 0
      }];
    return C.contains = F, {
      name: "Elixir",
      keywords: Z,
      contains: F
    }
  }
  gA2.exports = G19
})