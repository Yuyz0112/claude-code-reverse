
// @from(Start 1184116, End 1190212)
il1 = Y((QA4, Ob) => {
  var kl1 = B1("punycode"),
    jl1 = hl1(),
    Lz = {
      TRANSITIONAL: 0,
      NONTRANSITIONAL: 1
    };

  function xl1(I) {
    return I.split("\x00").map(function(d) {
      return d.normalize("NFC")
    }).join("\x00")
  }

  function cl1(I) {
    var d = 0,
      G = jl1.length - 1;
    while (d <= G) {
      var Z = Math.floor((d + G) / 2),
        C = jl1[Z];
      if (C[0][0] <= I && C[0][1] >= I) return C;
      else if (C[0][0] > I) G = Z - 1;
      else d = Z + 1
    }
    return null
  }
  var JA4 = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;

  function pl1(I) {
    return I.replace(JA4, "_").length
  }

  function KA4(I, d, G) {
    var Z = !1,
      C = "",
      W = pl1(I);
    for (var w = 0; w < W; ++w) {
      var B = I.codePointAt(w),
        A = cl1(B);
      switch (A[1]) {
        case "disallowed":
          Z = !0, C += String.fromCodePoint(B);
          break;
        case "ignored":
          break;
        case "mapped":
          C += String.fromCodePoint.apply(String, A[2]);
          break;
        case "deviation":
          if (G === Lz.TRANSITIONAL) C += String.fromCodePoint.apply(String, A[2]);
          else C += String.fromCodePoint(B);
          break;
        case "valid":
          C += String.fromCodePoint(B);
          break;
        case "disallowed_STD3_mapped":
          if (d) Z = !0, C += String.fromCodePoint(B);
          else C += String.fromCodePoint.apply(String, A[2]);
          break;
        case "disallowed_STD3_valid":
          if (d) Z = !0;
          C += String.fromCodePoint(B);
          break
      }
    }
    return {
      string: C,
      error: Z
    }
  }
  var NA4 = /[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E4-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8\u19C9\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFC-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2D]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC7F-\uDC82\uDCB0-\uDCBA\uDD00-\uDD02\uDD27-\uDD34\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDE2C-\uDE37\uDEDF-\uDEEA\uDF01-\uDF03\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDE30-\uDE40\uDEAB-\uDEB7]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF51-\uDF7E\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD83A[\uDCD0-\uDCD6]|\uDB40[\uDD00-\uDDEF]/;

  function zA4(I, d) {
    if (I.substr(0, 4) === "xn--") I = kl1.toUnicode(I), d = Lz.NONTRANSITIONAL;
    var G = !1;
    if (xl1(I) !== I || I[3] === "-" && I[4] === "-" || I[0] === "-" || I[I.length - 1] === "-" || I.indexOf(".") !== -1 || I.search(NA4) === 0) G = !0;
    var Z = pl1(I);
    for (var C = 0; C < Z; ++C) {
      var W = cl1(I.codePointAt(C));
      if (Tb === Lz.TRANSITIONAL && W[1] !== "valid" || Tb === Lz.NONTRANSITIONAL && W[1] !== "valid" && W[1] !== "deviation") {
        G = !0;
        break
      }
    }
    return {
      label: I,
      error: G
    }
  }

  function Tb(I, d, G) {
    var Z = KA4(I, d, G);
    Z.string = xl1(Z.string);
    var C = Z.string.split(".");
    for (var W = 0; W < C.length; ++W) try {
      var w = zA4(C[W]);
      C[W] = w.label, Z.error = Z.error || w.error
    } catch (B) {
      Z.error = !0
    }
    return {
      string: C.join("."),
      error: Z.error
    }
  }
  QA4.toASCII = function(I, d, G, Z) {
    var C = Tb(I, d, G),
      W = C.string.split(".");
    if (W = W.map(function(A) {
        try {
          return kl1.toASCII(A)
        } catch (V) {
          return C.error = !0, A
        }
      }), Z) {
      var w = W.slice(0, W.length - 1).join(".").length;
      if (w.length > 253 || w.length === 0) C.error = !0;
      for (var B = 0; B < W.length; ++B)
        if (W.length > 63 || W.length === 0) {
          C.error = !0;
          break
        }
    }
    if (C.error) return null;
    return W.join(".")
  };
  QA4.toUnicode = function(I, d) {
    var G = Tb(I, d, Lz.NONTRANSITIONAL);
    return {
      domain: G.string,
      error: G.error
    }
  };
  QA4.PROCESSING_OPTIONS = Lz
})
// @from(Start 1190218, End 1213553)
Ew = Y((sA4, nd) => {
  var yz = B1("punycode"),
    nl1 = il1(),
    el1 = {
      ftp: 21,
      file: null,
      gopher: 70,
      http: 80,
      https: 443,
      ws: 80,
      wss: 443
    },
    s4 = Symbol("failure");

  function rl1(I) {
    return yz.ucs2.decode(I).length
  }

  function al1(I, d) {
    let G = I[d];
    return isNaN(G) ? void 0 : String.fromCodePoint(G)
  }

  function mE(I) {
    return I >= 48 && I <= 57
  }

  function lE(I) {
    return I >= 65 && I <= 90 || I >= 97 && I <= 122
  }

  function UA4(I) {
    return lE(I) || mE(I)
  }

  function QC(I) {
    return mE(I) || I >= 65 && I <= 70 || I >= 97 && I <= 102
  }

  function sl1(I) {
    return I === "." || I.toLowerCase() === "%2e"
  }

  function vA4(I) {
    return I = I.toLowerCase(), I === ".." || I === "%2e." || I === ".%2e" || I === "%2e%2e"
  }

  function EA4(I, d) {
    return lE(I) && (d === 58 || d === 124)
  }

  function tl1(I) {
    return I.length === 2 && lE(I.codePointAt(0)) && (I[1] === ":" || I[1] === "|")
  }

  function MA4(I) {
    return I.length === 2 && lE(I.codePointAt(0)) && I[1] === ":"
  }

  function SA4(I) {
    return I.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/) !== -1
  }

  function LA4(I) {
    return I.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|\?|@|\[|\\|\]/) !== -1
  }

  function V41(I) {
    return el1[I] !== void 0
  }

  function c6(I) {
    return V41(I.scheme)
  }

  function yA4(I) {
    return el1[I]
  }

  function Ib1(I) {
    let d = I.toString(16).toUpperCase();
    if (d.length === 1) d = "0" + d;
    return "%" + d
  }

  function PA4(I) {
    let d = new Buffer(I),
      G = "";
    for (let Z = 0; Z < d.length; ++Z) G += Ib1(d[Z]);
    return G
  }

  function $A4(I) {
    let d = new Buffer(I),
      G = [];
    for (let Z = 0; Z < d.length; ++Z)
      if (d[Z] !== 37) G.push(d[Z]);
      else if (d[Z] === 37 && QC(d[Z + 1]) && QC(d[Z + 2])) G.push(parseInt(d.slice(Z + 1, Z + 3).toString(), 16)), Z += 2;
    else G.push(d[Z]);
    return new Buffer(G).toString()
  }

  function mb(I) {
    return I <= 31 || I > 126
  }
  var uA4 = new Set([32, 34, 35, 60, 62, 63, 96, 123, 125]);

  function db1(I) {
    return mb(I) || uA4.has(I)
  }
  var TA4 = new Set([47, 58, 59, 61, 64, 91, 92, 93, 94, 124]);

  function Y41(I) {
    return db1(I) || TA4.has(I)
  }

  function iF(I, d) {
    let G = String.fromCodePoint(I);
    if (d(I)) return PA4(G);
    return G
  }

  function OA4(I) {
    let d = 10;
    if (I.length >= 2 && I.charAt(0) === "0" && I.charAt(1).toLowerCase() === "x") I = I.substring(2), d = 16;
    else if (I.length >= 2 && I.charAt(0) === "0") I = I.substring(1), d = 8;
    if (I === "") return 0;
    if ((d === 10 ? /[^0-9]/ : d === 16 ? /[^0-9A-Fa-f]/ : /[^0-7]/).test(I)) return s4;
    return parseInt(I, d)
  }

  function mA4(I) {
    let d = I.split(".");
    if (d[d.length - 1] === "") {
      if (d.length > 1) d.pop()
    }
    if (d.length > 4) return I;
    let G = [];
    for (let W of d) {
      if (W === "") return I;
      let w = OA4(W);
      if (w === s4) return I;
      G.push(w)
    }
    for (let W = 0; W < G.length - 1; ++W)
      if (G[W] > 255) return s4;
    if (G[G.length - 1] >= Math.pow(256, 5 - G.length)) return s4;
    let Z = G.pop(),
      C = 0;
    for (let W of G) Z += W * Math.pow(256, 3 - C), ++C;
    return Z
  }

  function lA4(I) {
    let d = "",
      G = I;
    for (let Z = 1; Z <= 4; ++Z) {
      if (d = String(G % 256) + d, Z !== 4) d = "." + d;
      G = Math.floor(G / 256)
    }
    return d
  }

  function bA4(I) {
    let d = [0, 0, 0, 0, 0, 0, 0, 0],
      G = 0,
      Z = null,
      C = 0;
    if (I = yz.ucs2.decode(I), I[C] === 58) {
      if (I[C + 1] !== 58) return s4;
      C += 2, ++G, Z = G
    }
    while (C < I.length) {
      if (G === 8) return s4;
      if (I[C] === 58) {
        if (Z !== null) return s4;
        ++C, ++G, Z = G;
        continue
      }
      let W = 0,
        w = 0;
      while (w < 4 && QC(I[C])) W = W * 16 + parseInt(al1(I, C), 16), ++C, ++w;
      if (I[C] === 46) {
        if (w === 0) return s4;
        if (C -= w, G > 6) return s4;
        let B = 0;
        while (I[C] !== void 0) {
          let A = null;
          if (B > 0)
            if (I[C] === 46 && B < 4) ++C;
            else return s4;
          if (!mE(I[C])) return s4;
          while (mE(I[C])) {
            let V = parseInt(al1(I, C));
            if (A === null) A = V;
            else if (A === 0) return s4;
            else A = A * 10 + V;
            if (A > 255) return s4;
            ++C
          }
          if (d[G] = d[G] * 256 + A, ++B, B === 2 || B === 4) ++G
        }
        if (B !== 4) return s4;
        break
      } else if (I[C] === 58) {
        if (++C, I[C] === void 0) return s4
      } else if (I[C] !== void 0) return s4;
      d[G] = W, ++G
    }
    if (Z !== null) {
      let W = G - Z;
      G = 7;
      while (G !== 0 && W > 0) {
        let w = d[Z + W - 1];
        d[Z + W - 1] = d[G], d[G] = w, --G, --W
      }
    } else if (Z === null && G !== 8) return s4;
    return d
  }

  function hA4(I) {
    let d = "",
      Z = kA4(I).idx,
      C = !1;
    for (let W = 0; W <= 7; ++W) {
      if (C && I[W] === 0) continue;
      else if (C) C = !1;
      if (Z === W) {
        d += W === 0 ? "::" : ":", C = !0;
        continue
      }
      if (d += I[W].toString(16), W !== 7) d += ":"
    }
    return d
  }

  function X41(I, d) {
    if (I[0] === "[") {
      if (I[I.length - 1] !== "]") return s4;
      return bA4(I.substring(1, I.length - 1))
    }
    if (!d) return jA4(I);
    let G = $A4(I),
      Z = nl1.toASCII(G, !1, nl1.PROCESSING_OPTIONS.NONTRANSITIONAL, !1);
    if (Z === null) return s4;
    if (SA4(Z)) return s4;
    let C = mA4(Z);
    if (typeof C === "number" || C === s4) return C;
    return Z
  }

  function jA4(I) {
    if (LA4(I)) return s4;
    let d = "",
      G = yz.ucs2.decode(I);
    for (let Z = 0; Z < G.length; ++Z) d += iF(G[Z], mb);
    return d
  }

  function kA4(I) {
    let d = null,
      G = 1,
      Z = null,
      C = 0;
    for (let W = 0; W < I.length; ++W)
      if (I[W] !== 0) {
        if (C > G) d = Z, G = C;
        Z = null, C = 0
      } else {
        if (Z === null) Z = W;
        ++C
      } if (C > G) d = Z, G = C;
    return {
      idx: d,
      len: G
    }
  }

  function _41(I) {
    if (typeof I === "number") return lA4(I);
    if (I instanceof Array) return "[" + hA4(I) + "]";
    return I
  }

  function xA4(I) {
    return I.replace(/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g, "")
  }

  function cA4(I) {
    return I.replace(/\u0009|\u000A|\u000D/g, "")
  }

  function Gb1(I) {
    let d = I.path;
    if (d.length === 0) return;
    if (I.scheme === "file" && d.length === 1 && iA4(d[0])) return;
    d.pop()
  }

  function Zb1(I) {
    return I.username !== "" || I.password !== ""
  }

  function pA4(I) {
    return I.host === null || I.host === "" || I.cannotBeABaseURL || I.scheme === "file"
  }

  function iA4(I) {
    return /^[A-Za-z]:$/.test(I)
  }

  function l3(I, d, G, Z, C) {
    if (this.pointer = 0, this.input = I, this.base = d || null, this.encodingOverride = G || "utf-8", this.stateOverride = C, this.url = Z, this.failure = !1, this.parseError = !1, !this.url) {
      this.url = {
        scheme: "",
        username: "",
        password: "",
        host: null,
        port: null,
        path: [],
        query: null,
        fragment: null,
        cannotBeABaseURL: !1
      };
      let w = xA4(this.input);
      if (w !== this.input) this.parseError = !0;
      this.input = w
    }
    let W = cA4(this.input);
    if (W !== this.input) this.parseError = !0;
    this.input = W, this.state = C || "scheme start", this.buffer = "", this.atFlag = !1, this.arrFlag = !1, this.passwordTokenSeenFlag = !1, this.input = yz.ucs2.decode(this.input);
    for (; this.pointer <= this.input.length; ++this.pointer) {
      let w = this.input[this.pointer],
        B = isNaN(w) ? void 0 : String.fromCodePoint(w),
        A = this["parse " + this.state](w, B);
      if (!A) break;
      else if (A === s4) {
        this.failure = !0;
        break
      }
    }
  }
  l3.prototype["parse scheme start"] = function I(d, G) {
    if (lE(d)) this.buffer += G.toLowerCase(), this.state = "scheme";
    else if (!this.stateOverride) this.state = "no scheme", --this.pointer;
    else return this.parseError = !0, s4;
    return !0
  };
  l3.prototype["parse scheme"] = function I(d, G) {
    if (UA4(d) || d === 43 || d === 45 || d === 46) this.buffer += G.toLowerCase();
    else if (d === 58) {
      if (this.stateOverride) {
        if (c6(this.url) && !V41(this.buffer)) return !1;
        if (!c6(this.url) && V41(this.buffer)) return !1;
        if ((Zb1(this.url) || this.url.port !== null) && this.buffer === "file") return !1;
        if (this.url.scheme === "file" && (this.url.host === "" || this.url.host === null)) return !1
      }
      if (this.url.scheme = this.buffer, this.buffer = "", this.stateOverride) return !1;
      if (this.url.scheme === "file") {
        if (this.input[this.pointer + 1] !== 47 || this.input[this.pointer + 2] !== 47) this.parseError = !0;
        this.state = "file"
      } else if (c6(this.url) && this.base !== null && this.base.scheme === this.url.scheme) this.state = "special relative or authority";
      else if (c6(this.url)) this.state = "special authority slashes";
      else if (this.input[this.pointer + 1] === 47) this.state = "path or authority", ++this.pointer;
      else this.url.cannotBeABaseURL = !0, this.url.path.push(""), this.state = "cannot-be-a-base-URL path"
    } else if (!this.stateOverride) this.buffer = "", this.state = "no scheme", this.pointer = -1;
    else return this.parseError = !0, s4;
    return !0
  };
  l3.prototype["parse no scheme"] = function I(d) {
    if (this.base === null || this.base.cannotBeABaseURL && d !== 35) return s4;
    else if (this.base.cannotBeABaseURL && d === 35) this.url.scheme = this.base.scheme, this.url.path = this.base.path.slice(), this.url.query = this.base.query, this.url.fragment = "", this.url.cannotBeABaseURL = !0, this.state = "fragment";
    else if (this.base.scheme === "file") this.state = "file", --this.pointer;
    else this.state = "relative", --this.pointer;
    return !0
  };
  l3.prototype["parse special relative or authority"] = function I(d) {
    if (d === 47 && this.input[this.pointer + 1] === 47) this.state = "special authority ignore slashes", ++this.pointer;
    else this.parseError = !0, this.state = "relative", --this.pointer;
    return !0
  };
  l3.prototype["parse path or authority"] = function I(d) {
    if (d === 47) this.state = "authority";
    else this.state = "path", --this.pointer;
    return !0
  };
  l3.prototype["parse relative"] = function I(d) {
    if (this.url.scheme = this.base.scheme, isNaN(d)) this.url.username = this.base.username, this.url.password = this.base.password, this.url.host = this.base.host, this.url.port = this.base.port, this.url.path = this.base.path.slice(), this.url.query = this.base.query;
    else if (d === 47) this.state = "relative slash";
    else if (d === 63) this.url.username = this.base.username, this.url.password = this.base.password, this.url.host = this.base.host, this.url.port = this.base.port, this.url.path = this.base.path.slice(), this.url.query = "", this.state = "query";
    else if (d === 35) this.url.username = this.base.username, this.url.password = this.base.password, this.url.host = this.base.host, this.url.port = this.base.port, this.url.path = this.base.path.slice(), this.url.query = this.base.query, this.url.fragment = "", this.state = "fragment";
    else if (c6(this.url) && d === 92) this.parseError = !0, this.state = "relative slash";
    else this.url.username = this.base.username, this.url.password = this.base.password, this.url.host = this.base.host, this.url.port = this.base.port, this.url.path = this.base.path.slice(0, this.base.path.length - 1), this.state = "path", --this.pointer;
    return !0
  };
  l3.prototype["parse relative slash"] = function I(d) {
    if (c6(this.url) && (d === 47 || d === 92)) {
      if (d === 92) this.parseError = !0;
      this.state = "special authority ignore slashes"
    } else if (d === 47) this.state = "authority";
    else this.url.username = this.base.username, this.url.password = this.base.password, this.url.host = this.base.host, this.url.port = this.base.port, this.state = "path", --this.pointer;
    return !0
  };
  l3.prototype["parse special authority slashes"] = function I(d) {
    if (d === 47 && this.input[this.pointer + 1] === 47) this.state = "special authority ignore slashes", ++this.pointer;
    else this.parseError = !0, this.state = "special authority ignore slashes", --this.pointer;
    return !0
  };
  l3.prototype["parse special authority ignore slashes"] = function I(d) {
    if (d !== 47 && d !== 92) this.state = "authority", --this.pointer;
    else this.parseError = !0;
    return !0
  };
  l3.prototype["parse authority"] = function I(d, G) {
    if (d === 64) {
      if (this.parseError = !0, this.atFlag) this.buffer = "%40" + this.buffer;
      this.atFlag = !0;
      let Z = rl1(this.buffer);
      for (let C = 0; C < Z; ++C) {
        let W = this.buffer.codePointAt(C);
        if (W === 58 && !this.passwordTokenSeenFlag) {
          this.passwordTokenSeenFlag = !0;
          continue
        }
        let w = iF(W, Y41);
        if (this.passwordTokenSeenFlag) this.url.password += w;
        else this.url.username += w
      }
      this.buffer = ""
    } else if (isNaN(d) || d === 47 || d === 63 || d === 35 || c6(this.url) && d === 92) {
      if (this.atFlag && this.buffer === "") return this.parseError = !0, s4;
      this.pointer -= rl1(this.buffer) + 1, this.buffer = "", this.state = "host"
    } else this.buffer += G;
    return !0
  };
  l3.prototype["parse hostname"] = l3.prototype["parse host"] = function I(d, G) {
    if (this.stateOverride && this.url.scheme === "file") --this.pointer, this.state = "file host";
    else if (d === 58 && !this.arrFlag) {
      if (this.buffer === "") return this.parseError = !0, s4;
      let Z = X41(this.buffer, c6(this.url));
      if (Z === s4) return s4;
      if (this.url.host = Z, this.buffer = "", this.state = "port", this.stateOverride === "hostname") return !1
    } else if (isNaN(d) || d === 47 || d === 63 || d === 35 || c6(this.url) && d === 92) {
      if (--this.pointer, c6(this.url) && this.buffer === "") return this.parseError = !0, s4;
      else if (this.stateOverride && this.buffer === "" && (Zb1(this.url) || this.url.port !== null)) return this.parseError = !0, !1;
      let Z = X41(this.buffer, c6(this.url));
      if (Z === s4) return s4;
      if (this.url.host = Z, this.buffer = "", this.state = "path start", this.stateOverride) return !1
    } else {
      if (d === 91) this.arrFlag = !0;
      else if (d === 93) this.arrFlag = !1;
      this.buffer += G
    }
    return !0
  };
  l3.prototype["parse port"] = function I(d, G) {
    if (mE(d)) this.buffer += G;
    else if (isNaN(d) || d === 47 || d === 63 || d === 35 || c6(this.url) && d === 92 || this.stateOverride) {
      if (this.buffer !== "") {
        let Z = parseInt(this.buffer);
        if (Z > Math.pow(2, 16) - 1) return this.parseError = !0, s4;
        this.url.port = Z === yA4(this.url.scheme) ? null : Z, this.buffer = ""
      }
      if (this.stateOverride) return !1;
      this.state = "path start", --this.pointer
    } else return this.parseError = !0, s4;
    return !0
  };
  var nA4 = new Set([47, 92, 63, 35]);
  l3.prototype["parse file"] = function I(d) {
    if (this.url.scheme = "file", d === 47 || d === 92) {
      if (d === 92) this.parseError = !0;
      this.state = "file slash"
    } else if (this.base !== null && this.base.scheme === "file")
      if (isNaN(d)) this.url.host = this.base.host, this.url.path = this.base.path.slice(), this.url.query = this.base.query;
      else if (d === 63) this.url.host = this.base.host, this.url.path = this.base.path.slice(), this.url.query = "", this.state = "query";
    else if (d === 35) this.url.host = this.base.host, this.url.path = this.base.path.slice(), this.url.query = this.base.query, this.url.fragment = "", this.state = "fragment";
    else {
      if (this.input.length - this.pointer - 1 === 0 || !EA4(d, this.input[this.pointer + 1]) || this.input.length - this.pointer - 1 >= 2 && !nA4.has(this.input[this.pointer + 2])) this.url.host = this.base.host, this.url.path = this.base.path.slice(), Gb1(this.url);
      else this.parseError = !0;
      this.state = "path", --this.pointer
    } else this.state = "path", --this.pointer;
    return !0
  };
  l3.prototype["parse file slash"] = function I(d) {
    if (d === 47 || d === 92) {
      if (d === 92) this.parseError = !0;
      this.state = "file host"
    } else {
      if (this.base !== null && this.base.scheme === "file")
        if (MA4(this.base.path[0])) this.url.path.push(this.base.path[0]);
        else this.url.host = this.base.host;
      this.state = "path", --this.pointer
    }
    return !0
  };
  l3.prototype["parse file host"] = function I(d, G) {
    if (isNaN(d) || d === 47 || d === 92 || d === 63 || d === 35)
      if (--this.pointer, !this.stateOverride && tl1(this.buffer)) this.parseError = !0, this.state = "path";
      else if (this.buffer === "") {
      if (this.url.host = "", this.stateOverride) return !1;
      this.state = "path start"
    } else {
      let Z = X41(this.buffer, c6(this.url));
      if (Z === s4) return s4;
      if (Z === "localhost") Z = "";
      if (this.url.host = Z, this.stateOverride) return !1;
      this.buffer = "", this.state = "path start"
    } else this.buffer += G;
    return !0
  };
  l3.prototype["parse path start"] = function I(d) {
    if (c6(this.url)) {
      if (d === 92) this.parseError = !0;
      if (this.state = "path", d !== 47 && d !== 92) --this.pointer
    } else if (!this.stateOverride && d === 63) this.url.query = "", this.state = "query";
    else if (!this.stateOverride && d === 35) this.url.fragment = "", this.state = "fragment";
    else if (d !== void 0) {
      if (this.state = "path", d !== 47) --this.pointer
    }
    return !0
  };
  l3.prototype["parse path"] = function I(d) {
    if (isNaN(d) || d === 47 || c6(this.url) && d === 92 || !this.stateOverride && (d === 63 || d === 35)) {
      if (c6(this.url) && d === 92) this.parseError = !0;
      if (vA4(this.buffer)) {
        if (Gb1(this.url), d !== 47 && !(c6(this.url) && d === 92)) this.url.path.push("")
      } else if (sl1(this.buffer) && d !== 47 && !(c6(this.url) && d === 92)) this.url.path.push("");
      else if (!sl1(this.buffer)) {
        if (this.url.scheme === "file" && this.url.path.length === 0 && tl1(this.buffer)) {
          if (this.url.host !== "" && this.url.host !== null) this.parseError = !0, this.url.host = "";
          this.buffer = this.buffer[0] + ":"
        }
        this.url.path.push(this.buffer)
      }
      if (this.buffer = "", this.url.scheme === "file" && (d === void 0 || d === 63 || d === 35))
        while (this.url.path.length > 1 && this.url.path[0] === "") this.parseError = !0, this.url.path.shift();
      if (d === 63) this.url.query = "", this.state = "query";
      if (d === 35) this.url.fragment = "", this.state = "fragment"
    } else {
      if (d === 37 && (!QC(this.input[this.pointer + 1]) || !QC(this.input[this.pointer + 2]))) this.parseError = !0;
      this.buffer += iF(d, db1)
    }
    return !0
  };
  l3.prototype["parse cannot-be-a-base-URL path"] = function I(d) {
    if (d === 63) this.url.query = "", this.state = "query";
    else if (d === 35) this.url.fragment = "", this.state = "fragment";
    else {
      if (!isNaN(d) && d !== 37) this.parseError = !0;
      if (d === 37 && (!QC(this.input[this.pointer + 1]) || !QC(this.input[this.pointer + 2]))) this.parseError = !0;
      if (!isNaN(d)) this.url.path[0] = this.url.path[0] + iF(d, mb)
    }
    return !0
  };
  l3.prototype["parse query"] = function I(d, G) {
    if (isNaN(d) || !this.stateOverride && d === 35) {
      if (!c6(this.url) || this.url.scheme === "ws" || this.url.scheme === "wss") this.encodingOverride = "utf-8";
      let Z = new Buffer(this.buffer);
      for (let C = 0; C < Z.length; ++C)
        if (Z[C] < 33 || Z[C] > 126 || Z[C] === 34 || Z[C] === 35 || Z[C] === 60 || Z[C] === 62) this.url.query += Ib1(Z[C]);
        else this.url.query += String.fromCodePoint(Z[C]);
      if (this.buffer = "", d === 35) this.url.fragment = "", this.state = "fragment"
    } else {
      if (d === 37 && (!QC(this.input[this.pointer + 1]) || !QC(this.input[this.pointer + 2]))) this.parseError = !0;
      this.buffer += G
    }
    return !0
  };
  l3.prototype["parse fragment"] = function I(d) {
    if (isNaN(d));
    else if (d === 0) this.parseError = !0;
    else {
      if (d === 37 && (!QC(this.input[this.pointer + 1]) || !QC(this.input[this.pointer + 2]))) this.parseError = !0;
      this.url.fragment += iF(d, mb)
    }
    return !0
  };

  function rA4(I, d) {
    let G = I.scheme + ":";
    if (I.host !== null) {
      if (G += "//", I.username !== "" || I.password !== "") {
        if (G += I.username, I.password !== "") G += ":" + I.password;
        G += "@"
      }
      if (G += _41(I.host), I.port !== null) G += ":" + I.port
    } else if (I.host === null && I.scheme === "file") G += "//";
    if (I.cannotBeABaseURL) G += I.path[0];
    else
      for (let Z of I.path) G += "/" + Z;
    if (I.query !== null) G += "?" + I.query;
    if (!d && I.fragment !== null) G += "#" + I.fragment;
    return G
  }

  function aA4(I) {
    let d = I.scheme + "://";
    if (d += _41(I.host), I.port !== null) d += ":" + I.port;
    return d
  }
  sA4.serializeURL = rA4;
  sA4.serializeURLOrigin = function(I) {
    switch (I.scheme) {
      case "blob":
        try {
          return sA4.serializeURLOrigin(sA4.parseURL(I.path[0]))
        } catch (d) {
          return "null"
        }
      case "ftp":
      case "gopher":
      case "http":
      case "https":
      case "ws":
      case "wss":
        return aA4({
          scheme: I.scheme,
          host: I.host,
          port: I.port
        });
      case "file":
        return "file://";
      default:
        return "null"
    }
  };
  sA4.basicURLParse = function(I, d) {
    if (d === void 0) d = {};
    let G = new l3(I, d.baseURL, d.encodingOverride, d.url, d.stateOverride);
    if (G.failure) return "failure";
    return G.url
  };
  sA4.setTheUsername = function(I, d) {
    I.username = "";
    let G = yz.ucs2.decode(d);
    for (let Z = 0; Z < G.length; ++Z) I.username += iF(G[Z], Y41)
  };
  sA4.setThePassword = function(I, d) {
    I.password = "";
    let G = yz.ucs2.decode(d);
    for (let Z = 0; Z < G.length; ++Z) I.password += iF(G[Z], Y41)
  };
  sA4.serializeHost = _41;
  sA4.cannotHaveAUsernamePasswordPort = pA4;
  sA4.serializeInteger = function(I) {
    return String(I)
  };
  sA4.parseURL = function(I, d) {
    if (d === void 0) d = {};
    return sA4.basicURLParse(I, {
      baseURL: d.baseURL,
      encodingOverride: d.encodingOverride
    })
  }
})
// @from(Start 1213559, End 1217094)
Wb1 = Y((CV4) => {
  var b3 = Ew();
  CV4.implementation = class I {
    constructor(d) {
      let G = d[0],
        Z = d[1],
        C = null;
      if (Z !== void 0) {
        if (C = b3.basicURLParse(Z), C === "failure") throw new TypeError("Invalid base URL")
      }
      let W = b3.basicURLParse(G, {
        baseURL: C
      });
      if (W === "failure") throw new TypeError("Invalid URL");
      this._url = W
    }
    get href() {
      return b3.serializeURL(this._url)
    }
    set href(d) {
      let G = b3.basicURLParse(d);
      if (G === "failure") throw new TypeError("Invalid URL");
      this._url = G
    }
    get origin() {
      return b3.serializeURLOrigin(this._url)
    }
    get protocol() {
      return this._url.scheme + ":"
    }
    set protocol(d) {
      b3.basicURLParse(d + ":", {
        url: this._url,
        stateOverride: "scheme start"
      })
    }
    get username() {
      return this._url.username
    }
    set username(d) {
      if (b3.cannotHaveAUsernamePasswordPort(this._url)) return;
      b3.setTheUsername(this._url, d)
    }
    get password() {
      return this._url.password
    }
    set password(d) {
      if (b3.cannotHaveAUsernamePasswordPort(this._url)) return;
      b3.setThePassword(this._url, d)
    }
    get host() {
      let d = this._url;
      if (d.host === null) return "";
      if (d.port === null) return b3.serializeHost(d.host);
      return b3.serializeHost(d.host) + ":" + b3.serializeInteger(d.port)
    }
    set host(d) {
      if (this._url.cannotBeABaseURL) return;
      b3.basicURLParse(d, {
        url: this._url,
        stateOverride: "host"
      })
    }
    get hostname() {
      if (this._url.host === null) return "";
      return b3.serializeHost(this._url.host)
    }
    set hostname(d) {
      if (this._url.cannotBeABaseURL) return;
      b3.basicURLParse(d, {
        url: this._url,
        stateOverride: "hostname"
      })
    }
    get port() {
      if (this._url.port === null) return "";
      return b3.serializeInteger(this._url.port)
    }
    set port(d) {
      if (b3.cannotHaveAUsernamePasswordPort(this._url)) return;
      if (d === "") this._url.port = null;
      else b3.basicURLParse(d, {
        url: this._url,
        stateOverride: "port"
      })
    }
    get pathname() {
      if (this._url.cannotBeABaseURL) return this._url.path[0];
      if (this._url.path.length === 0) return "";
      return "/" + this._url.path.join("/")
    }
    set pathname(d) {
      if (this._url.cannotBeABaseURL) return;
      this._url.path = [], b3.basicURLParse(d, {
        url: this._url,
        stateOverride: "path start"
      })
    }
    get search() {
      if (this._url.query === null || this._url.query === "") return "";
      return "?" + this._url.query
    }
    set search(d) {
      let G = this._url;
      if (d === "") {
        G.query = null;
        return
      }
      let Z = d[0] === "?" ? d.substring(1) : d;
      G.query = "", b3.basicURLParse(Z, {
        url: G,
        stateOverride: "query"
      })
    }
    get hash() {
      if (this._url.fragment === null || this._url.fragment === "") return "";
      return "#" + this._url.fragment
    }
    set hash(d) {
      if (d === "") {
        this._url.fragment = null;
        return
      }
      let G = d[0] === "#" ? d.substring(1) : d;
      this._url.fragment = "", b3.basicURLParse(G, {
        url: this._url,
        stateOverride: "fragment"
      })
    }
    toJSON() {
      return this.href
    }
  }
})
// @from(Start 1217100, End 1220909)
Ab1 = Y(($v9, bE) => {
  var IZ = Ol1(),
    Bb1 = bl1(),
    wb1 = Wb1(),
    z9 = Bb1.implSymbol;

  function A8(I) {
    if (!this || this[z9] || !(this instanceof A8)) throw new TypeError("Failed to construct 'URL': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");
    if (arguments.length < 1) throw new TypeError("Failed to construct 'URL': 1 argument required, but only " + arguments.length + " present.");
    let d = [];
    for (let G = 0; G < arguments.length && G < 2; ++G) d[G] = arguments[G];
    if (d[0] = IZ.USVString(d[0]), d[1] !== void 0) d[1] = IZ.USVString(d[1]);
    bE.exports.setup(this, d)
  }
  A8.prototype.toJSON = function I() {
    if (!this || !bE.exports.is(this)) throw new TypeError("Illegal invocation");
    let d = [];
    for (let G = 0; G < arguments.length && G < 0; ++G) d[G] = arguments[G];
    return this[z9].toJSON.apply(this[z9], d)
  };
  Object.defineProperty(A8.prototype, "href", {
    get() {
      return this[z9].href
    },
    set(I) {
      I = IZ.USVString(I), this[z9].href = I
    },
    enumerable: !0,
    configurable: !0
  });
  A8.prototype.toString = function() {
    if (!this || !bE.exports.is(this)) throw new TypeError("Illegal invocation");
    return this.href
  };
  Object.defineProperty(A8.prototype, "origin", {
    get() {
      return this[z9].origin
    },
    enumerable: !0,
    configurable: !0
  });
  Object.defineProperty(A8.prototype, "protocol", {
    get() {
      return this[z9].protocol
    },
    set(I) {
      I = IZ.USVString(I), this[z9].protocol = I
    },
    enumerable: !0,
    configurable: !0
  });
  Object.defineProperty(A8.prototype, "username", {
    get() {
      return this[z9].username
    },
    set(I) {
      I = IZ.USVString(I), this[z9].username = I
    },
    enumerable: !0,
    configurable: !0
  });
  Object.defineProperty(A8.prototype, "password", {
    get() {
      return this[z9].password
    },
    set(I) {
      I = IZ.USVString(I), this[z9].password = I
    },
    enumerable: !0,
    configurable: !0
  });
  Object.defineProperty(A8.prototype, "host", {
    get() {
      return this[z9].host
    },
    set(I) {
      I = IZ.USVString(I), this[z9].host = I
    },
    enumerable: !0,
    configurable: !0
  });
  Object.defineProperty(A8.prototype, "hostname", {
    get() {
      return this[z9].hostname
    },
    set(I) {
      I = IZ.USVString(I), this[z9].hostname = I
    },
    enumerable: !0,
    configurable: !0
  });
  Object.defineProperty(A8.prototype, "port", {
    get() {
      return this[z9].port
    },
    set(I) {
      I = IZ.USVString(I), this[z9].port = I
    },
    enumerable: !0,
    configurable: !0
  });
  Object.defineProperty(A8.prototype, "pathname", {
    get() {
      return this[z9].pathname
    },
    set(I) {
      I = IZ.USVString(I), this[z9].pathname = I
    },
    enumerable: !0,
    configurable: !0
  });
  Object.defineProperty(A8.prototype, "search", {
    get() {
      return this[z9].search
    },
    set(I) {
      I = IZ.USVString(I), this[z9].search = I
    },
    enumerable: !0,
    configurable: !0
  });
  Object.defineProperty(A8.prototype, "hash", {
    get() {
      return this[z9].hash
    },
    set(I) {
      I = IZ.USVString(I), this[z9].hash = I
    },
    enumerable: !0,
    configurable: !0
  });
  bE.exports = {
    is(I) {
      return !!I && I[z9] instanceof wb1.implementation
    },
    create(I, d) {
      let G = Object.create(A8.prototype);
      return this.setup(G, I, d), G
    },
    setup(I, d, G) {
      if (!G) G = {};
      G.wrapper = I, I[z9] = new wb1.implementation(d, G), I[z9][Bb1.wrapperSymbol] = I
    },
    interface: A8,
    expose: {
      Window: {
        URL: A8
      },
      Worker: {
        URL: A8
      }
    }
  }
})
// @from(Start 1220915, End 1221308)
Vb1 = Y((BV4) => {
  BV4.URL = Ab1().interface;
  BV4.serializeURL = Ew().serializeURL;
  BV4.serializeURLOrigin = Ew().serializeURLOrigin;
  BV4.basicURLParse = Ew().basicURLParse;
  BV4.setTheUsername = Ew().setTheUsername;
  BV4.setThePassword = Ew().setThePassword;
  BV4.serializeHost = Ew().serializeHost;
  BV4.serializeInteger = Ew().serializeInteger;
  BV4.parseURL = Ew().parseURL
})
// @from(Start 1221314, End 1249353)
f41 = Y((qC, zb1) => {
  Object.defineProperty(qC, "__esModule", {
    value: !0
  });

  function Oz(I) {
    return I && typeof I === "object" && "default" in I ? I.default : I
  }
  var fC = Oz(B1("stream")),
    Db1 = Oz(B1("http")),
    bb = Oz(B1("url")),
    Hb1 = Oz(Vb1()),
    JV4 = Oz(B1("https")),
    nF = Oz(B1("zlib")),
    KV4 = fC.Readable,
    kA = Symbol("buffer"),
    D41 = Symbol("type");
  class uz {
    constructor() {
      this[D41] = "";
      let I = arguments[0],
        d = arguments[1],
        G = [],
        Z = 0;
      if (I) {
        let W = I,
          w = Number(W.length);
        for (let B = 0; B < w; B++) {
          let A = W[B],
            V;
          if (A instanceof Buffer) V = A;
          else if (ArrayBuffer.isView(A)) V = Buffer.from(A.buffer, A.byteOffset, A.byteLength);
          else if (A instanceof ArrayBuffer) V = Buffer.from(A);
          else if (A instanceof uz) V = A[kA];
          else V = Buffer.from(typeof A === "string" ? A : String(A));
          Z += V.length, G.push(V)
        }
      }
      this[kA] = Buffer.concat(G);
      let C = d && d.type !== void 0 && String(d.type).toLowerCase();
      if (C && !/[^\u0020-\u007E]/.test(C)) this[D41] = C
    }
    get size() {
      return this[kA].length
    }
    get type() {
      return this[D41]
    }
    text() {
      return Promise.resolve(this[kA].toString())
    }
    arrayBuffer() {
      let I = this[kA],
        d = I.buffer.slice(I.byteOffset, I.byteOffset + I.byteLength);
      return Promise.resolve(d)
    }
    stream() {
      let I = new KV4;
      return I._read = function() {}, I.push(this[kA]), I.push(null), I
    }
    toString() {
      return "[object Blob]"
    }
    slice() {
      let I = this.size,
        d = arguments[0],
        G = arguments[1],
        Z, C;
      if (d === void 0) Z = 0;
      else if (d < 0) Z = Math.max(I + d, 0);
      else Z = Math.min(d, I);
      if (G === void 0) C = I;
      else if (G < 0) C = Math.max(I + G, 0);
      else C = Math.min(G, I);
      let W = Math.max(C - Z, 0),
        B = this[kA].slice(Z, Z + W),
        A = new uz([], {
          type: arguments[2]
        });
      return A[kA] = B, A
    }
  }
  Object.defineProperties(uz.prototype, {
    size: {
      enumerable: !0
    },
    type: {
      enumerable: !0
    },
    slice: {
      enumerable: !0
    }
  });
  Object.defineProperty(uz.prototype, Symbol.toStringTag, {
    value: "Blob",
    writable: !1,
    enumerable: !1,
    configurable: !0
  });

  function l8(I, d, G) {
    if (Error.call(this, I), this.message = I, this.type = d, G) this.code = this.errno = G.code;
    Error.captureStackTrace(this, this.constructor)
  }
  l8.prototype = Object.create(Error.prototype);
  l8.prototype.constructor = l8;
  l8.prototype.name = "FetchError";
  var J41;
  try {
    J41 = (() => {
      throw new Error("Cannot require module " + "encoding");
    })().convert
  } catch (I) {}
  var cA = Symbol("Body internals"),
    Xb1 = fC.PassThrough;

  function V8(I) {
    var d = this,
      G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      Z = G.size;
    let C = Z === void 0 ? 0 : Z;
    var W = G.timeout;
    let w = W === void 0 ? 0 : W;
    if (I == null) I = null;
    else if (Fb1(I)) I = Buffer.from(I.toString());
    else if (kE(I));
    else if (Buffer.isBuffer(I));
    else if (Object.prototype.toString.call(I) === "[object ArrayBuffer]") I = Buffer.from(I);
    else if (ArrayBuffer.isView(I)) I = Buffer.from(I.buffer, I.byteOffset, I.byteLength);
    else if (I instanceof fC);
    else I = Buffer.from(String(I));
    if (this[cA] = {
        body: I,
        disturbed: !1,
        error: null
      }, this.size = C, this.timeout = w, I instanceof fC) I.on("error", function(B) {
      let A = B.name === "AbortError" ? B : new l8(`Invalid response body while trying to fetch ${d.url}: ${B.message}`, "system", B);
      d[cA].error = A
    })
  }
  V8.prototype = {
    get body() {
      return this[cA].body
    },
    get bodyUsed() {
      return this[cA].disturbed
    },
    arrayBuffer() {
      return Pz.call(this).then(function(I) {
        return I.buffer.slice(I.byteOffset, I.byteOffset + I.byteLength)
      })
    },
    blob() {
      let I = this.headers && this.headers.get("content-type") || "";
      return Pz.call(this).then(function(d) {
        return Object.assign(new uz([], {
          type: I.toLowerCase()
        }), {
          [kA]: d
        })
      })
    },
    json() {
      var I = this;
      return Pz.call(this).then(function(d) {
        try {
          return JSON.parse(d.toString())
        } catch (G) {
          return V8.Promise.reject(new l8(`invalid json response body at ${I.url} reason: ${G.message}`, "invalid-json"))
        }
      })
    },
    text() {
      return Pz.call(this).then(function(I) {
        return I.toString()
      })
    },
    buffer() {
      return Pz.call(this)
    },
    textConverted() {
      var I = this;
      return Pz.call(this).then(function(d) {
        return NV4(d, I.headers)
      })
    }
  };
  Object.defineProperties(V8.prototype, {
    body: {
      enumerable: !0
    },
    bodyUsed: {
      enumerable: !0
    },
    arrayBuffer: {
      enumerable: !0
    },
    blob: {
      enumerable: !0
    },
    json: {
      enumerable: !0
    },
    text: {
      enumerable: !0
    }
  });
  V8.mixIn = function(I) {
    for (let d of Object.getOwnPropertyNames(V8.prototype))
      if (!(d in I)) {
        let G = Object.getOwnPropertyDescriptor(V8.prototype, d);
        Object.defineProperty(I, d, G)
      }
  };

  function Pz() {
    var I = this;
    if (this[cA].disturbed) return V8.Promise.reject(new TypeError(`body used already for: ${this.url}`));
    if (this[cA].disturbed = !0, this[cA].error) return V8.Promise.reject(this[cA].error);
    let d = this.body;
    if (d === null) return V8.Promise.resolve(Buffer.alloc(0));
    if (kE(d)) d = d.stream();
    if (Buffer.isBuffer(d)) return V8.Promise.resolve(d);
    if (!(d instanceof fC)) return V8.Promise.resolve(Buffer.alloc(0));
    let G = [],
      Z = 0,
      C = !1;
    return new V8.Promise(function(W, w) {
      let B;
      if (I.timeout) B = setTimeout(function() {
        C = !0, w(new l8(`Response timeout while trying to fetch ${I.url} (over ${I.timeout}ms)`, "body-timeout"))
      }, I.timeout);
      d.on("error", function(A) {
        if (A.name === "AbortError") C = !0, w(A);
        else w(new l8(`Invalid response body while trying to fetch ${I.url}: ${A.message}`, "system", A))
      }), d.on("data", function(A) {
        if (C || A === null) return;
        if (I.size && Z + A.length > I.size) {
          C = !0, w(new l8(`content size at ${I.url} over limit: ${I.size}`, "max-size"));
          return
        }
        Z += A.length, G.push(A)
      }), d.on("end", function() {
        if (C) return;
        clearTimeout(B);
        try {
          W(Buffer.concat(G, Z))
        } catch (A) {
          w(new l8(`Could not create Buffer from response body for ${I.url}: ${A.message}`, "system", A))
        }
      })
    })
  }

  function NV4(I, d) {
    if (typeof J41 !== "function") throw new Error("The package `encoding` must be installed to use the textConverted() function");
    let G = d.get("content-type"),
      Z = "utf-8",
      C, W;
    if (G) C = /charset=([^;]*)/i.exec(G);
    if (W = I.slice(0, 1024).toString(), !C && W) C = /<meta.+?charset=(['"])(.+?)\1/i.exec(W);
    if (!C && W) {
      if (C = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(W), !C) {
        if (C = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(W), C) C.pop()
      }
      if (C) C = /charset=(.*)/i.exec(C.pop())
    }
    if (!C && W) C = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(W);
    if (C) {
      if (Z = C.pop(), Z === "gb2312" || Z === "gbk") Z = "gb18030"
    }
    return J41(I, "UTF-8", Z).toString()
  }

  function Fb1(I) {
    if (typeof I !== "object" || typeof I.append !== "function" || typeof I.delete !== "function" || typeof I.get !== "function" || typeof I.getAll !== "function" || typeof I.has !== "function" || typeof I.set !== "function") return !1;
    return I.constructor.name === "URLSearchParams" || Object.prototype.toString.call(I) === "[object URLSearchParams]" || typeof I.sort === "function"
  }

  function kE(I) {
    return typeof I === "object" && typeof I.arrayBuffer === "function" && typeof I.type === "string" && typeof I.stream === "function" && typeof I.constructor === "function" && typeof I.constructor.name === "string" && /^(Blob|File)$/.test(I.constructor.name) && /^(Blob|File)$/.test(I[Symbol.toStringTag])
  }

  function gb1(I) {
    let d, G, Z = I.body;
    if (I.bodyUsed) throw new Error("cannot clone body after it is used");
    if (Z instanceof fC && typeof Z.getBoundary !== "function") d = new Xb1, G = new Xb1, Z.pipe(d), Z.pipe(G), I[cA].body = d, Z = G;
    return Z
  }

  function Jb1(I) {
    if (I === null) return null;
    else if (typeof I === "string") return "text/plain;charset=UTF-8";
    else if (Fb1(I)) return "application/x-www-form-urlencoded;charset=UTF-8";
    else if (kE(I)) return I.type || null;
    else if (Buffer.isBuffer(I)) return null;
    else if (Object.prototype.toString.call(I) === "[object ArrayBuffer]") return null;
    else if (ArrayBuffer.isView(I)) return null;
    else if (typeof I.getBoundary === "function") return `multipart/form-data;boundary=${I.getBoundary()}`;
    else if (I instanceof fC) return null;
    else return "text/plain;charset=UTF-8"
  }

  function Kb1(I) {
    let d = I.body;
    if (d === null) return 0;
    else if (kE(d)) return d.size;
    else if (Buffer.isBuffer(d)) return d.length;
    else if (d && typeof d.getLengthSync === "function") {
      if (d._lengthRetrievers && d._lengthRetrievers.length == 0 || d.hasKnownLength && d.hasKnownLength()) return d.getLengthSync();
      return null
    } else return null
  }

  function zV4(I, d) {
    let G = d.body;
    if (G === null) I.end();
    else if (kE(G)) G.stream().pipe(I);
    else if (Buffer.isBuffer(G)) I.write(G), I.end();
    else G.pipe(I)
  }
  V8.Promise = global.Promise;
  var Nb1 = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,
    K41 = /[^\t\x20-\x7e\x80-\xff]/;

  function hE(I) {
    if (I = `${I}`, Nb1.test(I) || I === "") throw new TypeError(`${I} is not a legal HTTP header name`)
  }

  function Yb1(I) {
    if (I = `${I}`, K41.test(I)) throw new TypeError(`${I} is not a legal HTTP header value`)
  }

  function $z(I, d) {
    d = d.toLowerCase();
    for (let G in I)
      if (G.toLowerCase() === d) return G;
    return
  }
  var G6 = Symbol("map");
  class GZ {
    constructor() {
      let I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
      if (this[G6] = Object.create(null), I instanceof GZ) {
        let d = I.raw(),
          G = Object.keys(d);
        for (let Z of G)
          for (let C of d[Z]) this.append(Z, C);
        return
      }
      if (I == null);
      else if (typeof I === "object") {
        let d = I[Symbol.iterator];
        if (d != null) {
          if (typeof d !== "function") throw new TypeError("Header pairs must be iterable");
          let G = [];
          for (let Z of I) {
            if (typeof Z !== "object" || typeof Z[Symbol.iterator] !== "function") throw new TypeError("Each header pair must be iterable");
            G.push(Array.from(Z))
          }
          for (let Z of G) {
            if (Z.length !== 2) throw new TypeError("Each header pair must be a name/value tuple");
            this.append(Z[0], Z[1])
          }
        } else
          for (let G of Object.keys(I)) {
            let Z = I[G];
            this.append(G, Z)
          }
      } else throw new TypeError("Provided initializer must be an object")
    }
    get(I) {
      I = `${I}`, hE(I);
      let d = $z(this[G6], I);
      if (d === void 0) return null;
      return this[G6][d].join(", ")
    }
    forEach(I) {
      let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0,
        G = N41(this),
        Z = 0;
      while (Z < G.length) {
        var C = G[Z];
        let W = C[0],
          w = C[1];
        I.call(d, w, W, this), G = N41(this), Z++
      }
    }
    set(I, d) {
      I = `${I}`, d = `${d}`, hE(I), Yb1(d);
      let G = $z(this[G6], I);
      this[G6][G !== void 0 ? G : I] = [d]
    }
    append(I, d) {
      I = `${I}`, d = `${d}`, hE(I), Yb1(d);
      let G = $z(this[G6], I);
      if (G !== void 0) this[G6][G].push(d);
      else this[G6][I] = [d]
    }
    has(I) {
      return I = `${I}`, hE(I), $z(this[G6], I) !== void 0
    }
    delete(I) {
      I = `${I}`, hE(I);
      let d = $z(this[G6], I);
      if (d !== void 0) delete this[G6][d]
    }
    raw() {
      return this[G6]
    }
    keys() {
      return H41(this, "key")
    }
    values() {
      return H41(this, "value")
    } [Symbol.iterator]() {
      return H41(this, "key+value")
    }
  }
  GZ.prototype.entries = GZ.prototype[Symbol.iterator];
  Object.defineProperty(GZ.prototype, Symbol.toStringTag, {
    value: "Headers",
    writable: !1,
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperties(GZ.prototype, {
    get: {
      enumerable: !0
    },
    forEach: {
      enumerable: !0
    },
    set: {
      enumerable: !0
    },
    append: {
      enumerable: !0
    },
    has: {
      enumerable: !0
    },
    delete: {
      enumerable: !0
    },
    keys: {
      enumerable: !0
    },
    values: {
      enumerable: !0
    },
    entries: {
      enumerable: !0
    }
  });

  function N41(I) {
    let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "key+value";
    return Object.keys(I[G6]).sort().map(d === "key" ? function(Z) {
      return Z.toLowerCase()
    } : d === "value" ? function(Z) {
      return I[G6][Z].join(", ")
    } : function(Z) {
      return [Z.toLowerCase(), I[G6][Z].join(", ")]
    })
  }
  var z41 = Symbol("internal");

  function H41(I, d) {
    let G = Object.create(Q41);
    return G[z41] = {
      target: I,
      kind: d,
      index: 0
    }, G
  }
  var Q41 = Object.setPrototypeOf({
    next() {
      if (!this || Object.getPrototypeOf(this) !== Q41) throw new TypeError("Value of `this` is not a HeadersIterator");
      var I = this[z41];
      let {
        target: d,
        kind: G,
        index: Z
      } = I, C = N41(d, G), W = C.length;
      if (Z >= W) return {
        value: void 0,
        done: !0
      };
      return this[z41].index = Z + 1, {
        value: C[Z],
        done: !1
      }
    }
  }, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));
  Object.defineProperty(Q41, Symbol.toStringTag, {
    value: "HeadersIterator",
    writable: !1,
    enumerable: !1,
    configurable: !0
  });

  function QV4(I) {
    let d = Object.assign({
        __proto__: null
      }, I[G6]),
      G = $z(I[G6], "Host");
    if (G !== void 0) d[G] = d[G][0];
    return d
  }

  function fV4(I) {
    let d = new GZ;
    for (let G of Object.keys(I)) {
      if (Nb1.test(G)) continue;
      if (Array.isArray(I[G]))
        for (let Z of I[G]) {
          if (K41.test(Z)) continue;
          if (d[G6][G] === void 0) d[G6][G] = [Z];
          else d[G6][G].push(Z)
        } else if (!K41.test(I[G])) d[G6][G] = [I[G]]
    }
    return d
  }
  var fY = Symbol("Response internals"),
    qV4 = Db1.STATUS_CODES;
  class dZ {
    constructor() {
      let I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null,
        d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      V8.call(this, I, d);
      let G = d.status || 200,
        Z = new GZ(d.headers);
      if (I != null && !Z.has("Content-Type")) {
        let C = Jb1(I);
        if (C) Z.append("Content-Type", C)
      }
      this[fY] = {
        url: d.url,
        status: G,
        statusText: d.statusText || qV4[G],
        headers: Z,
        counter: d.counter
      }
    }
    get url() {
      return this[fY].url || ""
    }
    get status() {
      return this[fY].status
    }
    get ok() {
      return this[fY].status >= 200 && this[fY].status < 300
    }
    get redirected() {
      return this[fY].counter > 0
    }
    get statusText() {
      return this[fY].statusText
    }
    get headers() {
      return this[fY].headers
    }
    clone() {
      return new dZ(gb1(this), {
        url: this.url,
        status: this.status,
        statusText: this.statusText,
        headers: this.headers,
        ok: this.ok,
        redirected: this.redirected
      })
    }
  }
  V8.mixIn(dZ.prototype);
  Object.defineProperties(dZ.prototype, {
    url: {
      enumerable: !0
    },
    status: {
      enumerable: !0
    },
    ok: {
      enumerable: !0
    },
    redirected: {
      enumerable: !0
    },
    statusText: {
      enumerable: !0
    },
    headers: {
      enumerable: !0
    },
    clone: {
      enumerable: !0
    }
  });
  Object.defineProperty(dZ.prototype, Symbol.toStringTag, {
    value: "Response",
    writable: !1,
    enumerable: !1,
    configurable: !0
  });
  var xA = Symbol("Request internals"),
    RV4 = bb.URL || Hb1.URL,
    UV4 = bb.parse,
    vV4 = bb.format;

  function F41(I) {
    if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(I)) I = new RV4(I).toString();
    return UV4(I)
  }
  var EV4 = "destroy" in fC.Readable.prototype;

  function lb(I) {
    return typeof I === "object" && typeof I[xA] === "object"
  }

  function MV4(I) {
    let d = I && typeof I === "object" && Object.getPrototypeOf(I);
    return !!(d && d.constructor.name === "AbortSignal")
  }
  class RY {
    constructor(I) {
      let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        G;
      if (!lb(I)) {
        if (I && I.href) G = F41(I.href);
        else G = F41(`${I}`);
        I = {}
      } else G = F41(I.url);
      let Z = d.method || I.method || "GET";
      if (Z = Z.toUpperCase(), (d.body != null || lb(I) && I.body !== null) && (Z === "GET" || Z === "HEAD")) throw new TypeError("Request with GET/HEAD method cannot have body");
      let C = d.body != null ? d.body : lb(I) && I.body !== null ? gb1(I) : null;
      V8.call(this, C, {
        timeout: d.timeout || I.timeout || 0,
        size: d.size || I.size || 0
      });
      let W = new GZ(d.headers || I.headers || {});
      if (C != null && !W.has("Content-Type")) {
        let B = Jb1(C);
        if (B) W.append("Content-Type", B)
      }
      let w = lb(I) ? I.signal : null;
      if ("signal" in d) w = d.signal;
      if (w != null && !MV4(w)) throw new TypeError("Expected signal to be an instanceof AbortSignal");
      this[xA] = {
        method: Z,
        redirect: d.redirect || I.redirect || "follow",
        headers: W,
        parsedURL: G,
        signal: w
      }, this.follow = d.follow !== void 0 ? d.follow : I.follow !== void 0 ? I.follow : 20, this.compress = d.compress !== void 0 ? d.compress : I.compress !== void 0 ? I.compress : !0, this.counter = d.counter || I.counter || 0, this.agent = d.agent || I.agent
    }
    get method() {
      return this[xA].method
    }
    get url() {
      return vV4(this[xA].parsedURL)
    }
    get headers() {
      return this[xA].headers
    }
    get redirect() {
      return this[xA].redirect
    }
    get signal() {
      return this[xA].signal
    }
    clone() {
      return new RY(this)
    }
  }
  V8.mixIn(RY.prototype);
  Object.defineProperty(RY.prototype, Symbol.toStringTag, {
    value: "Request",
    writable: !1,
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperties(RY.prototype, {
    method: {
      enumerable: !0
    },
    url: {
      enumerable: !0
    },
    headers: {
      enumerable: !0
    },
    redirect: {
      enumerable: !0
    },
    clone: {
      enumerable: !0
    },
    signal: {
      enumerable: !0
    }
  });

  function SV4(I) {
    let d = I[xA].parsedURL,
      G = new GZ(I[xA].headers);
    if (!G.has("Accept")) G.set("Accept", "*/*");
    if (!d.protocol || !d.hostname) throw new TypeError("Only absolute URLs are supported");
    if (!/^https?:$/.test(d.protocol)) throw new TypeError("Only HTTP(S) protocols are supported");
    if (I.signal && I.body instanceof fC.Readable && !EV4) throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");
    let Z = null;
    if (I.body == null && /^(POST|PUT)$/i.test(I.method)) Z = "0";
    if (I.body != null) {
      let W = Kb1(I);
      if (typeof W === "number") Z = String(W)
    }
    if (Z) G.set("Content-Length", Z);
    if (!G.has("User-Agent")) G.set("User-Agent", "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)");
    if (I.compress && !G.has("Accept-Encoding")) G.set("Accept-Encoding", "gzip,deflate");
    let C = I.agent;
    if (typeof C === "function") C = C(d);
    return Object.assign({}, d, {
      method: I.method,
      headers: QV4(G),
      agent: C
    })
  }

  function Tz(I) {
    Error.call(this, I), this.type = "aborted", this.message = I, Error.captureStackTrace(this, this.constructor)
  }
  Tz.prototype = Object.create(Error.prototype);
  Tz.prototype.constructor = Tz;
  Tz.prototype.name = "AbortError";
  var jE = bb.URL || Hb1.URL,
    _b1 = fC.PassThrough,
    LV4 = function I(d, G) {
      let Z = new jE(G).hostname,
        C = new jE(d).hostname;
      return Z === C || Z[Z.length - C.length - 1] === "." && Z.endsWith(C)
    },
    yV4 = function I(d, G) {
      let Z = new jE(G).protocol,
        C = new jE(d).protocol;
      return Z === C
    };

  function qY(I, d) {
    if (!qY.Promise) throw new Error("native promise missing, set fetch.Promise to your favorite alternative");
    return V8.Promise = qY.Promise, new qY.Promise(function(G, Z) {
      let C = new RY(I, d),
        W = SV4(C),
        w = (W.protocol === "https:" ? JV4 : Db1).request,
        B = C.signal,
        A = null,
        V = function J() {
          let K = new Tz("The user aborted a request.");
          if (Z(K), C.body && C.body instanceof fC.Readable) g41(C.body, K);
          if (!A || !A.body) return;
          A.body.emit("error", K)
        };
      if (B && B.aborted) {
        V();
        return
      }
      let X = function J() {
          V(), g()
        },
        _ = w(W),
        F;
      if (B) B.addEventListener("abort", X);

      function g() {
        if (_.abort(), B) B.removeEventListener("abort", X);
        clearTimeout(F)
      }
      if (C.timeout) _.once("socket", function(J) {
        F = setTimeout(function() {
          Z(new l8(`network timeout at: ${C.url}`, "request-timeout")), g()
        }, C.timeout)
      });
      if (_.on("error", function(J) {
          if (Z(new l8(`request to ${C.url} failed, reason: ${J.message}`, "system", J)), A && A.body) g41(A.body, J);
          g()
        }), PV4(_, function(J) {
          if (B && B.aborted) return;
          if (A && A.body) g41(A.body, J)
        }), parseInt(process.version.substring(1)) < 14) _.on("socket", function(J) {
        J.addListener("close", function(K) {
          let Q = J.listenerCount("data") > 0;
          if (A && Q && !K && !(B && B.aborted)) {
            let E = new Error("Premature close");
            E.code = "ERR_STREAM_PREMATURE_CLOSE", A.body.emit("error", E)
          }
        })
      });
      _.on("response", function(J) {
        clearTimeout(F);
        let K = fV4(J.headers);
        if (qY.isRedirect(J.statusCode)) {
          let $ = K.get("Location"),
            h = null;
          try {
            h = $ === null ? null : new jE($, C.url).toString()
          } catch (O) {
            if (C.redirect !== "manual") {
              Z(new l8(`uri requested responds with an invalid redirect URL: ${$}`, "invalid-redirect")), g();
              return
            }
          }
          switch (C.redirect) {
            case "error":
              Z(new l8(`uri requested responds with a redirect, redirect mode is set to error: ${C.url}`, "no-redirect")), g();
              return;
            case "manual":
              if (h !== null) try {
                K.set("Location", h)
              } catch (T) {
                Z(T)
              }
              break;
            case "follow":
              if (h === null) break;
              if (C.counter >= C.follow) {
                Z(new l8(`maximum redirect reached at: ${C.url}`, "max-redirect")), g();
                return
              }
              let O = {
                headers: new GZ(C.headers),
                follow: C.follow,
                counter: C.counter + 1,
                agent: C.agent,
                compress: C.compress,
                method: C.method,
                body: C.body,
                signal: C.signal,
                timeout: C.timeout,
                size: C.size
              };
              if (!LV4(C.url, h) || !yV4(C.url, h))
                for (let T of ["authorization", "www-authenticate", "cookie", "cookie2"]) O.headers.delete(T);
              if (J.statusCode !== 303 && C.body && Kb1(C) === null) {
                Z(new l8("Cannot follow redirect with body being a readable stream", "unsupported-redirect")), g();
                return
              }
              if (J.statusCode === 303 || (J.statusCode === 301 || J.statusCode === 302) && C.method === "POST") O.method = "GET", O.body = void 0, O.headers.delete("content-length");
              G(qY(new RY(h, O))), g();
              return
          }
        }
        J.once("end", function() {
          if (B) B.removeEventListener("abort", X)
        });
        let Q = J.pipe(new _b1),
          E = {
            url: C.url,
            status: J.statusCode,
            statusText: J.statusMessage,
            headers: K,
            size: C.size,
            timeout: C.timeout,
            counter: C.counter
          },
          S = K.get("Content-Encoding");
        if (!C.compress || C.method === "HEAD" || S === null || J.statusCode === 204 || J.statusCode === 304) {
          A = new dZ(Q, E), G(A);
          return
        }
        let P = {
          flush: nF.Z_SYNC_FLUSH,
          finishFlush: nF.Z_SYNC_FLUSH
        };
        if (S == "gzip" || S == "x-gzip") {
          Q = Q.pipe(nF.createGunzip(P)), A = new dZ(Q, E), G(A);
          return
        }
        if (S == "deflate" || S == "x-deflate") {
          let $ = J.pipe(new _b1);
          $.once("data", function(h) {
            if ((h[0] & 15) === 8) Q = Q.pipe(nF.createInflate());
            else Q = Q.pipe(nF.createInflateRaw());
            A = new dZ(Q, E), G(A)
          }), $.on("end", function() {
            if (!A) A = new dZ(Q, E), G(A)
          });
          return
        }
        if (S == "br" && typeof nF.createBrotliDecompress === "function") {
          Q = Q.pipe(nF.createBrotliDecompress()), A = new dZ(Q, E), G(A);
          return
        }
        A = new dZ(Q, E), G(A)
      }), zV4(_, C)
    })
  }

  function PV4(I, d) {
    let G;
    I.on("socket", function(Z) {
      G = Z
    }), I.on("response", function(Z) {
      let C = Z.headers;
      if (C["transfer-encoding"] === "chunked" && !C["content-length"]) Z.once("close", function(W) {
        if (G && G.listenerCount("data") > 0 && !W) {
          let B = new Error("Premature close");
          B.code = "ERR_STREAM_PREMATURE_CLOSE", d(B)
        }
      })
    })
  }

  function g41(I, d) {
    if (I.destroy) I.destroy(d);
    else I.emit("error", d), I.end()
  }
  qY.isRedirect = function(I) {
    return I === 301 || I === 302 || I === 303 || I === 307 || I === 308
  };
  qY.Promise = global.Promise;
  zb1.exports = qC = qY;
  Object.defineProperty(qC, "__esModule", {
    value: !0
  });
  qC.default = qC;
  qC.Headers = GZ;
  qC.Request = RY;
  qC.Response = dZ;
  qC.FetchError = l8;
  qC.AbortError = Tz
})
// @from(Start 1249356, End 1249373)
function pb1() {}
// @from(Start 1249375, End 1249463)
function U7(I) {
  return typeof I == "object" && I !== null || typeof I == "function"
}
// @from(Start 1249465, End 1249596)
function M5(I, d) {
  try {
    Object.defineProperty(I, "name", {
      value: d,
      configurable: !0
    })
  } catch (G) {}
}
// @from(Start 1249598, End 1249636)
function II(I) {
  return new T41(I)
}
// @from(Start 1249638, End 1249672)
function P5(I) {
  return uV4(I)
}
// @from(Start 1249674, End 1249708)
function Z4(I) {
  return TV4(I)
}
// @from(Start 1249710, End 1249761)
function iA(I, d, G) {
  return $V4.call(I, d, G)
}
// @from(Start 1249763, End 1249818)
function R7(I, d, G) {
  iA(iA(I, d, G), void 0, ib1)
}
// @from(Start 1249820, End 1249853)
function Qb1(I, d) {
  R7(I, d)
}
// @from(Start 1249855, End 1249896)
function fb1(I, d) {
  R7(I, void 0, d)
}
// @from(Start 1249898, End 1249943)
function RC(I, d, G) {
  return iA(I, d, G)
}
// @from(Start 1249945, End 1249984)
function hz(I) {
  iA(I, void 0, ib1)
}
// @from(Start 1249986, End 1250139)
function Xh(I, d, G) {
  if (typeof I != "function") throw new TypeError("Argument is not a function");
  return Function.prototype.apply.call(I, d, G)
}
// @from(Start 1250141, End 1250237)
function dg(I, d, G) {
  try {
    return P5(Xh(I, d, G))
  } catch (Z) {
    return Z4(Z)
  }
}
// @from(Start 1250238, End 1251280)
class rd {
  constructor() {
    this._cursor = 0, this._size = 0, this._front = {
      _elements: [],
      _next: void 0
    }, this._back = this._front, this._cursor = 0, this._size = 0
  }
  get length() {
    return this._size
  }
  push(I) {
    let d = this._back,
      G = d;
    d._elements.length === 16383 && (G = {
      _elements: [],
      _next: void 0
    }), d._elements.push(I), G !== d && (this._back = G, d._next = G), ++this._size
  }
  shift() {
    let I = this._front,
      d = I,
      G = this._cursor,
      Z = G + 1,
      C = I._elements,
      W = C[G];
    return Z === 16384 && (d = I._next, Z = 0), --this._size, this._cursor = Z, I !== d && (this._front = d), C[G] = void 0, W
  }
  forEach(I) {
    let d = this._cursor,
      G = this._front,
      Z = G._elements;
    for (; !(d === Z.length && G._next === void 0 || d === Z.length && (G = G._next, Z = G._elements, d = 0, Z.length === 0));) I(Z[d]), ++d
  }
  peek() {
    let I = this._front,
      d = this._cursor;
    return I._elements[d]
  }
}
// @from(Start 1251282, End 1251473)
function ab1(I, d) {
  I._ownerReadableStream = d, d._reader = I, d._state === "readable" ? M41(I) : d._state === "closed" ? function(G) {
    M41(G), tb1(G)
  }(I) : eb1(I, d._storedError)
}
// @from(Start 1251475, End 1251537)
function sb1(I, d) {
  return Sh1(I._ownerReadableStream, d)
}
// @from(Start 1251539, End 1251954)
function ob1(I) {
  let d = I._ownerReadableStream;
  d._state === "readable" ? b41(I, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")) : function(G, Z) {
    eb1(G, Z)
  }(I, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")), d._readableStreamController[l41](), d._reader = void 0, I._ownerReadableStream = void 0
}
// @from(Start 1251956, End 1252050)
function jz(I) {
  return new TypeError("Cannot " + I + " a stream using a released reader")
}
// @from(Start 1252052, End 1252174)
function M41(I) {
  I._closedPromise = II((d, G) => {
    I._closedPromise_resolve = d, I._closedPromise_reject = G
  })
}
// @from(Start 1252176, End 1252218)
function eb1(I, d) {
  M41(I), b41(I, d)
}
// @from(Start 1252220, End 1252402)
function b41(I, d) {
  I._closedPromise_reject !== void 0 && (hz(I._closedPromise), I._closedPromise_reject(d), I._closedPromise_resolve = void 0, I._closedPromise_reject = void 0)
}
// @from(Start 1252404, End 1252568)
function tb1(I) {
  I._closedPromise_resolve !== void 0 && (I._closedPromise_resolve(void 0), I._closedPromise_resolve = void 0, I._closedPromise_reject = void 0)
}
// @from(Start 1252570, End 1252723)
function nA(I, d) {
  if (I !== void 0 && (typeof(G = I) != "object" && typeof G != "function")) throw new TypeError(`${d} is not an object.`);
  var G
}
// @from(Start 1252725, End 1252823)
function UC(I, d) {
  if (typeof I != "function") throw new TypeError(`${d} is not a function.`)
}
// @from(Start 1252825, End 1252999)
function Ih1(I, d) {
  if (! function(G) {
      return typeof G == "object" && G !== null || typeof G == "function"
    }(I)) throw new TypeError(`${d} is not an object.`)
}
// @from(Start 1253001, End 1253106)
function rA(I, d, G) {
  if (I === void 0) throw new TypeError(`Parameter ${d} is required in '${G}'.`)
}
// @from(Start 1253108, End 1253204)
function S41(I, d, G) {
  if (I === void 0) throw new TypeError(`${d} is required in '${G}'.`)
}
// @from(Start 1253206, End 1253244)
function h41(I) {
  return Number(I)
}
// @from(Start 1253246, End 1253290)
function Rb1(I) {
  return I === 0 ? 0 : I
}
// @from(Start 1253292, End 1253640)
function dh1(I, d) {
  let G = Number.MAX_SAFE_INTEGER,
    Z = Number(I);
  if (Z = Rb1(Z), !qb1(Z)) throw new TypeError(`${d} is not a finite number`);
  if (Z = function(C) {
      return Rb1(OV4(C))
    }(Z), Z < 0 || Z > G) throw new TypeError(`${d} is outside the accepted range of 0 to ${G}, inclusive`);
  return qb1(Z) && Z !== 0 ? Z : 0
}
// @from(Start 1253642, End 1253818)
function pE(I) {
  if (!U7(I)) return !1;
  if (typeof I.getReader != "function") return !1;
  try {
    return typeof I.locked == "boolean"
  } catch (d) {
    return !1
  }
}
// @from(Start 1253820, End 1253997)
function Gh1(I) {
  if (!U7(I)) return !1;
  if (typeof I.getWriter != "function") return !1;
  try {
    return typeof I.locked == "boolean"
  } catch (d) {
    return !1
  }
}
// @from(Start 1253999, End 1254088)
function Zh1(I, d) {
  if (!tF(I)) throw new TypeError(`${d} is not a ReadableStream.`)
}
// @from(Start 1254090, End 1254146)
function Ch1(I, d) {
  I._reader._readRequests.push(d)
}
// @from(Start 1254148, End 1254257)
function j41(I, d, G) {
  let Z = I._reader._readRequests.shift();
  G ? Z._closeSteps() : Z._chunkSteps(d)
}
// @from(Start 1254259, End 1254317)
function Yh(I) {
  return I._reader._readRequests.length
}
// @from(Start 1254319, End 1254392)
function Wh1(I) {
  let d = I._reader;
  return d !== void 0 && !!oF(d)
}
// @from(Start 1254393, End 1255713)
class UY {
  constructor(I) {
    if (rA(I, 1, "ReadableStreamDefaultReader"), Zh1(I, "First parameter"), xz(I)) throw new TypeError("This stream has already been locked for exclusive reading by another reader");
    ab1(this, I), this._readRequests = new rd
  }
  get closed() {
    return oF(this) ? this._closedPromise : Z4(hb("closed"))
  }
  cancel(I) {
    return oF(this) ? this._ownerReadableStream === void 0 ? Z4(jz("cancel")) : sb1(this, I) : Z4(hb("cancel"))
  }
  read() {
    if (!oF(this)) return Z4(hb("read"));
    if (this._ownerReadableStream === void 0) return Z4(jz("read from"));
    let I, d, G = II((Z, C) => {
      I = Z, d = C
    });
    return function(Z, C) {
      let W = Z._ownerReadableStream;
      W._disturbed = !0, W._state === "closed" ? C._closeSteps() : W._state === "errored" ? C._errorSteps(W._storedError) : W._readableStreamController[m41](C)
    }(this, {
      _chunkSteps: (Z) => I({
        value: Z,
        done: !1
      }),
      _closeSteps: () => I({
        value: void 0,
        done: !0
      }),
      _errorSteps: (Z) => d(Z)
    }), G
  }
  releaseLock() {
    if (!oF(this)) throw hb("releaseLock");
    this._ownerReadableStream !== void 0 && function(I) {
      ob1(I);
      let d = new TypeError("Reader was released");
      wh1(I, d)
    }(this)
  }
}
// @from(Start 1255715, End 1255833)
function oF(I) {
  return !!U7(I) && (!!Object.prototype.hasOwnProperty.call(I, "_readRequests") && I instanceof UY)
}
// @from(Start 1255835, End 1255957)
function wh1(I, d) {
  let G = I._readRequests;
  I._readRequests = new rd, G.forEach((Z) => {
    Z._errorSteps(d)
  })
}
// @from(Start 1255959, End 1256096)
function hb(I) {
  return new TypeError(`ReadableStreamDefaultReader.prototype.${I} can only be used on a ReadableStreamDefaultReader`)
}
// @from(Start 1256097, End 1257589)
class k41 {
  constructor(I, d) {
    this._ongoingPromise = void 0, this._isFinished = !1, this._reader = I, this._preventCancel = d
  }
  next() {
    let I = () => this._nextSteps();
    return this._ongoingPromise = this._ongoingPromise ? RC(this._ongoingPromise, I, I) : I(), this._ongoingPromise
  }
  return (I) {
    let d = () => this._returnSteps(I);
    return this._ongoingPromise ? RC(this._ongoingPromise, d, d) : d()
  }
  _nextSteps() {
    if (this._isFinished) return Promise.resolve({
      value: void 0,
      done: !0
    });
    let I = this._reader;
    return I === void 0 ? Z4(jz("iterate")) : iA(I.read(), (d) => {
      var G;
      return this._ongoingPromise = void 0, d.done && (this._isFinished = !0, (G = this._reader) === null || G === void 0 || G.releaseLock(), this._reader = void 0), d
    }, (d) => {
      var G;
      throw this._ongoingPromise = void 0, this._isFinished = !0, (G = this._reader) === null || G === void 0 || G.releaseLock(), this._reader = void 0, d
    })
  }
  _returnSteps(I) {
    if (this._isFinished) return Promise.resolve({
      value: I,
      done: !0
    });
    this._isFinished = !0;
    let d = this._reader;
    if (d === void 0) return Z4(jz("finish iterating"));
    if (this._reader = void 0, !this._preventCancel) {
      let G = d.cancel(I);
      return d.releaseLock(), RC(G, () => ({
        value: I,
        done: !0
      }))
    }
    return d.releaseLock(), P5({
      value: I,
      done: !0
    })
  }
}
// @from(Start 1257591, End 1257805)
function Ub1(I) {
  if (!U7(I)) return !1;
  if (!Object.prototype.hasOwnProperty.call(I, "_asyncIteratorImpl")) return !1;
  try {
    return I._asyncIteratorImpl instanceof k41
  } catch (d) {
    return !1
  }
}
// @from(Start 1257807, End 1257934)
function vb1(I) {
  return new TypeError(`ReadableStreamAsyncIterator.${I} can only be used on a ReadableSteamAsyncIterator`)
}
// @from(Start 1257936, End 1258019)
function Vh1(I, d, G, Z, C) {
  new Uint8Array(I).set(new Uint8Array(G, Z, C), d)
}
// @from(Start 1258021, End 1258276)
function Eb1(I) {
  let d = function(G, Z, C) {
    if (G.slice) return G.slice(Z, C);
    let W = C - Z,
      w = new ArrayBuffer(W);
    return Vh1(w, 0, G, Z, W), w
  }(I.buffer, I.byteOffset, I.byteOffset + I.byteLength);
  return new Uint8Array(d)
}
// @from(Start 1258278, End 1258421)
function L41(I) {
  let d = I._queue.shift();
  return I._queueTotalSize -= d.size, I._queueTotalSize < 0 && (I._queueTotalSize = 0), d.value
}
// @from(Start 1258423, End 1258675)
function x41(I, d, G) {
  if (typeof(Z = G) != "number" || Ah1(Z) || Z < 0 || G === 1 / 0) throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
  var Z;
  I._queue.push({
    value: d,
    size: G
  }), I._queueTotalSize += G
}
// @from(Start 1258677, End 1258738)
function PY(I) {
  I._queue = new rd, I._queueTotalSize = 0
}
// @from(Start 1258739, End 1261090)
class eF {
  constructor() {
    throw new TypeError("Illegal constructor")
  }
  get view() {
    if (!q41(this)) throw R41("view");
    return this._view
  }
  respond(I) {
    if (!q41(this)) throw R41("respond");
    if (rA(I, 1, "respond"), I = dh1(I, "First parameter"), this._associatedReadableByteStreamController === void 0) throw new TypeError("This BYOB request has been invalidated");
    this._view.buffer,
      function(d, G) {
        let Z = d._pendingPullIntos.peek();
        if (d._controlledReadableByteStream._state === "closed") {
          if (G !== 0) throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream")
        } else {
          if (G === 0) throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
          if (Z.bytesFilled + G > Z.byteLength) throw new RangeError("bytesWritten out of range")
        }
        Z.buffer = Z.buffer, Mb1(d, G)
      }(this._associatedReadableByteStreamController, I)
  }
  respondWithNewView(I) {
    if (!q41(this)) throw R41("respondWithNewView");
    if (rA(I, 1, "respondWithNewView"), !ArrayBuffer.isView(I)) throw new TypeError("You can only respond with array buffer views");
    if (this._associatedReadableByteStreamController === void 0) throw new TypeError("This BYOB request has been invalidated");
    I.buffer,
      function(d, G) {
        let Z = d._pendingPullIntos.peek();
        if (d._controlledReadableByteStream._state === "closed") {
          if (G.byteLength !== 0) throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream")
        } else if (G.byteLength === 0) throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
        if (Z.byteOffset + Z.bytesFilled !== G.byteOffset) throw new RangeError("The region specified by view does not match byobRequest");
        if (Z.bufferByteLength !== G.buffer.byteLength) throw new RangeError("The buffer of view has different capacity than byobRequest");
        if (Z.bytesFilled + G.byteLength > Z.byteLength) throw new RangeError("The region specified by view is larger than byobRequest");
        let C = G.byteLength;
        Z.buffer = G.buffer, Mb1(d, C)
      }(this._associatedReadableByteStreamController, I)
  }
}
// @from(Start 1261092, End 1261226)
function mz(I) {
  return !!U7(I) && (!!Object.prototype.hasOwnProperty.call(I, "_controlledReadableByteStream") && I instanceof vY)
}
// @from(Start 1261228, End 1261373)
function q41(I) {
  return !!U7(I) && (!!Object.prototype.hasOwnProperty.call(I, "_associatedReadableByteStreamController") && I instanceof eF)
}
// @from(Start 1261375, End 1261926)
function Ig(I) {
  if (! function(G) {
      let Z = G._controlledReadableByteStream;
      if (Z._state !== "readable") return !1;
      if (G._closeRequested) return !1;
      if (!G._started) return !1;
      if (Wh1(Z) && Yh(Z) > 0) return !0;
      if (p41(Z) && Kh1(Z) > 0) return !0;
      if (Jh1(G) > 0) return !0;
      return !1
    }(I)) return;
  if (I._pulling) return void(I._pullAgain = !0);
  I._pulling = !0, R7(I._pullAlgorithm(), () => (I._pulling = !1, I._pullAgain && (I._pullAgain = !1, Ig(I)), null), (G) => (kz(I, G), null))
}
// @from(Start 1261928, End 1261986)
function Xh1(I) {
  c41(I), I._pendingPullIntos = new rd
}
// @from(Start 1261988, End 1262251)
function y41(I, d) {
  let G = !1;
  I._state === "closed" && (G = !0);
  let Z = Yh1(d);
  d.readerType === "default" ? j41(I, Z, G) : function(C, W, w) {
    let B = C._reader._readIntoRequests.shift();
    w ? B._closeSteps(W) : B._chunkSteps(W)
  }(I, Z, G)
}
// @from(Start 1262253, End 1262390)
function Yh1(I) {
  let {
    bytesFilled: d,
    elementSize: G
  } = I;
  return new I.viewConstructor(I.buffer, I.byteOffset, d / G)
}
// @from(Start 1262392, End 1262518)
function ab(I, d, G, Z) {
  I._queue.push({
    buffer: d,
    byteOffset: G,
    byteLength: Z
  }), I._queueTotalSize += Z
}
// @from(Start 1262520, End 1262650)
function _h1(I, d, G, Z) {
  let C;
  try {
    C = d.slice(G, G + Z)
  } catch (W) {
    throw kz(I, W), W
  }
  ab(I, C, 0, Z)
}
// @from(Start 1262652, End 1262750)
function Dh1(I, d) {
  d.bytesFilled > 0 && _h1(I, d.buffer, d.byteOffset, d.bytesFilled), bz(I)
}
// @from(Start 1262752, End 1263342)
function Hh1(I, d) {
  let G = d.elementSize,
    Z = d.bytesFilled - d.bytesFilled % G,
    C = Math.min(I._queueTotalSize, d.byteLength - d.bytesFilled),
    W = d.bytesFilled + C,
    w = W - W % G,
    B = C,
    A = !1;
  w > Z && (B = w - d.bytesFilled, A = !0);
  let V = I._queue;
  for (; B > 0;) {
    let X = V.peek(),
      _ = Math.min(B, X.byteLength),
      F = d.byteOffset + d.bytesFilled;
    Vh1(d.buffer, F, X.buffer, X.byteOffset, _), X.byteLength === _ ? V.shift() : (X.byteOffset += _, X.byteLength -= _), I._queueTotalSize -= _, Fh1(I, _, d), B -= _
  }
  return A
}
// @from(Start 1263344, End 1263390)
function Fh1(I, d, G) {
  G.bytesFilled += d
}
// @from(Start 1263392, End 1263513)
function gh1(I) {
  I._queueTotalSize === 0 && I._closeRequested ? (tb(I), oE(I._controlledReadableByteStream)) : Ig(I)
}
// @from(Start 1263515, End 1263681)
function c41(I) {
  I._byobRequest !== null && (I._byobRequest._associatedReadableByteStreamController = void 0, I._byobRequest._view = null, I._byobRequest = null)
}
// @from(Start 1263683, End 1263897)
function P41(I) {
  for (; I._pendingPullIntos.length > 0;) {
    if (I._queueTotalSize === 0) return;
    let d = I._pendingPullIntos.peek();
    Hh1(I, d) && (bz(I), y41(I._controlledReadableByteStream, d))
  }
}
// @from(Start 1263899, End 1264582)
function Mb1(I, d) {
  let G = I._pendingPullIntos.peek();
  c41(I), I._controlledReadableByteStream._state === "closed" ? function(Z, C) {
    C.readerType === "none" && bz(Z);
    let W = Z._controlledReadableByteStream;
    if (p41(W))
      for (; Kh1(W) > 0;) y41(W, bz(Z))
  }(I, G) : function(Z, C, W) {
    if (Fh1(0, C, W), W.readerType === "none") return Dh1(Z, W), void P41(Z);
    if (W.bytesFilled < W.elementSize) return;
    bz(Z);
    let w = W.bytesFilled % W.elementSize;
    if (w > 0) {
      let B = W.byteOffset + W.bytesFilled;
      _h1(Z, W.buffer, B - w, w)
    }
    W.bytesFilled -= w, y41(Z._controlledReadableByteStream, W), P41(Z)
  }(I, d, G), Ig(I)
}
// @from(Start 1264584, End 1264639)
function bz(I) {
  return I._pendingPullIntos.shift()
}
// @from(Start 1264641, End 1264716)
function tb(I) {
  I._pullAlgorithm = void 0, I._cancelAlgorithm = void 0
}
// @from(Start 1264718, End 1264845)
function kz(I, d) {
  let G = I._controlledReadableByteStream;
  G._state === "readable" && (Xh1(I), PY(I), tb(I), Lh1(G, d))
}
// @from(Start 1264847, End 1265025)
function Sb1(I, d) {
  let G = I._queue.shift();
  I._queueTotalSize -= G.byteLength, gh1(I);
  let Z = new Uint8Array(G.buffer, G.byteOffset, G.byteLength);
  d._chunkSteps(Z)
}
// @from(Start 1265027, End 1265186)
function Jh1(I) {
  let d = I._controlledReadableByteStream._state;
  return d === "errored" ? null : d === "closed" ? 0 : I._strategyHWM - I._queueTotalSize
}
// @from(Start 1265188, End 1266047)
function mV4(I, d, G) {
  let Z = Object.create(vY.prototype),
    C, W, w;
  C = d.start !== void 0 ? () => d.start(Z) : () => {}, W = d.pull !== void 0 ? () => d.pull(Z) : () => P5(void 0), w = d.cancel !== void 0 ? (A) => d.cancel(A) : () => P5(void 0);
  let B = d.autoAllocateChunkSize;
  if (B === 0) throw new TypeError("autoAllocateChunkSize must be greater than 0");
  (function(A, V, X, _, F, g, J) {
    V._controlledReadableByteStream = A, V._pullAgain = !1, V._pulling = !1, V._byobRequest = null, V._queue = V._queueTotalSize = void 0, PY(V), V._closeRequested = !1, V._started = !1, V._strategyHWM = g, V._pullAlgorithm = _, V._cancelAlgorithm = F, V._autoAllocateChunkSize = J, V._pendingPullIntos = new rd, A._readableStreamController = V, R7(P5(X()), () => (V._started = !0, Ig(V), null), (K) => (kz(V, K), null))
  })(I, Z, C, W, w, G, B)
}
// @from(Start 1266049, End 1266183)
function R41(I) {
  return new TypeError(`ReadableStreamBYOBRequest.prototype.${I} can only be used on a ReadableStreamBYOBRequest`)
}
// @from(Start 1266185, End 1266324)
function xE(I) {
  return new TypeError(`ReadableByteStreamController.prototype.${I} can only be used on a ReadableByteStreamController`)
}
// @from(Start 1266326, End 1266386)
function Lb1(I, d) {
  I._reader._readIntoRequests.push(d)
}
// @from(Start 1266388, End 1266451)
function Kh1(I) {
  return I._reader._readIntoRequests.length
}
// @from(Start 1266453, End 1266526)
function p41(I) {
  let d = I._reader;
  return d !== void 0 && !!lz(d)
}
// @from(Start 1266527, End 1269450)
class EY {
  constructor(I) {
    if (rA(I, 1, "ReadableStreamBYOBReader"), Zh1(I, "First parameter"), xz(I)) throw new TypeError("This stream has already been locked for exclusive reading by another reader");
    if (!mz(I._readableStreamController)) throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
    ab1(this, I), this._readIntoRequests = new rd
  }
  get closed() {
    return lz(this) ? this._closedPromise : Z4(jb("closed"))
  }
  cancel(I) {
    return lz(this) ? this._ownerReadableStream === void 0 ? Z4(jz("cancel")) : sb1(this, I) : Z4(jb("cancel"))
  }
  read(I) {
    if (!lz(this)) return Z4(jb("read"));
    if (!ArrayBuffer.isView(I)) return Z4(new TypeError("view must be an array buffer view"));
    if (I.byteLength === 0) return Z4(new TypeError("view must have non-zero byteLength"));
    if (I.buffer.byteLength === 0) return Z4(new TypeError("view's buffer must have non-zero byteLength"));
    if (I.buffer, this._ownerReadableStream === void 0) return Z4(jz("read from"));
    let d, G, Z = II((C, W) => {
      d = C, G = W
    });
    return function(C, W, w) {
      let B = C._ownerReadableStream;
      B._disturbed = !0, B._state === "errored" ? w._errorSteps(B._storedError) : function(A, V, X) {
        let _ = A._controlledReadableByteStream,
          F = 1;
        V.constructor !== DataView && (F = V.constructor.BYTES_PER_ELEMENT);
        let {
          constructor: g,
          buffer: J
        } = V, K = {
          buffer: J,
          bufferByteLength: J.byteLength,
          byteOffset: V.byteOffset,
          byteLength: V.byteLength,
          bytesFilled: 0,
          elementSize: F,
          viewConstructor: g,
          readerType: "byob"
        };
        if (A._pendingPullIntos.length > 0) return A._pendingPullIntos.push(K), void Lb1(_, X);
        if (_._state !== "closed") {
          if (A._queueTotalSize > 0) {
            if (Hh1(A, K)) {
              let Q = Yh1(K);
              return gh1(A), void X._chunkSteps(Q)
            }
            if (A._closeRequested) {
              let Q = new TypeError("Insufficient bytes to fill elements in the given buffer");
              return kz(A, Q), void X._errorSteps(Q)
            }
          }
          A._pendingPullIntos.push(K), Lb1(_, X), Ig(A)
        } else {
          let Q = new g(K.buffer, K.byteOffset, 0);
          X._closeSteps(Q)
        }
      }(B._readableStreamController, W, w)
    }(this, I, {
      _chunkSteps: (C) => d({
        value: C,
        done: !1
      }),
      _closeSteps: (C) => d({
        value: C,
        done: !0
      }),
      _errorSteps: (C) => G(C)
    }), Z
  }
  releaseLock() {
    if (!lz(this)) throw jb("releaseLock");
    this._ownerReadableStream !== void 0 && function(I) {
      ob1(I);
      let d = new TypeError("Reader was released");
      Nh1(I, d)
    }(this)
  }
}
// @from(Start 1269452, End 1269574)
function lz(I) {
  return !!U7(I) && (!!Object.prototype.hasOwnProperty.call(I, "_readIntoRequests") && I instanceof EY)
}
// @from(Start 1269576, End 1269706)
function Nh1(I, d) {
  let G = I._readIntoRequests;
  I._readIntoRequests = new rd, G.forEach((Z) => {
    Z._errorSteps(d)
  })
}
// @from(Start 1269708, End 1269839)
function jb(I) {
  return new TypeError(`ReadableStreamBYOBReader.prototype.${I} can only be used on a ReadableStreamBYOBReader`)
}
// @from(Start 1269841, End 1270011)
function aE(I, d) {
  let {
    highWaterMark: G
  } = I;
  if (G === void 0) return d;
  if (Ah1(G) || G < 0) throw new RangeError("Invalid highWaterMark");
  return G
}
// @from(Start 1270013, End 1270084)
function Ih(I) {
  let {
    size: d
  } = I;
  return d || (() => 1)
}
// @from(Start 1270086, End 1270342)
function dh(I, d) {
  nA(I, d);
  let G = I == null ? void 0 : I.highWaterMark,
    Z = I == null ? void 0 : I.size;
  return {
    highWaterMark: G === void 0 ? void 0 : h41(G),
    size: Z === void 0 ? void 0 : lV4(Z, `${d} has member 'size' that`)
  }
}
// @from(Start 1270344, End 1270402)
function lV4(I, d) {
  return UC(I, d), (G) => h41(I(G))
}
// @from(Start 1270404, End 1270469)
function bV4(I, d, G) {
  return UC(I, G), (Z) => dg(I, d, [Z])
}
// @from(Start 1270471, End 1270534)
function hV4(I, d, G) {
  return UC(I, G), () => dg(I, d, [])
}
// @from(Start 1270536, End 1270601)
function jV4(I, d, G) {
  return UC(I, G), (Z) => Xh(I, d, [Z])
}
// @from(Start 1270603, End 1270674)
function kV4(I, d, G) {
  return UC(I, G), (Z, C) => dg(I, d, [Z, C])
}
// @from(Start 1270675, End 1273443)
class MY {
  constructor(I = {}, d = {}) {
    I === void 0 ? I = null : Ih1(I, "First parameter");
    let G = dh(d, "Second parameter"),
      Z = function(w, B) {
        nA(w, B);
        let A = w == null ? void 0 : w.abort,
          V = w == null ? void 0 : w.close,
          X = w == null ? void 0 : w.start,
          _ = w == null ? void 0 : w.type,
          F = w == null ? void 0 : w.write;
        return {
          abort: A === void 0 ? void 0 : bV4(A, w, `${B} has member 'abort' that`),
          close: V === void 0 ? void 0 : hV4(V, w, `${B} has member 'close' that`),
          start: X === void 0 ? void 0 : jV4(X, w, `${B} has member 'start' that`),
          write: F === void 0 ? void 0 : kV4(F, w, `${B} has member 'write' that`),
          type: _
        }
      }(I, "First parameter");
    var C;
    if ((C = this)._state = "writable", C._storedError = void 0, C._writer = void 0, C._writableStreamController = void 0, C._writeRequests = new rd, C._inFlightWriteRequest = void 0, C._closeRequest = void 0, C._inFlightCloseRequest = void 0, C._pendingAbortRequest = void 0, C._backpressure = !1, Z.type !== void 0) throw new RangeError("Invalid type is specified");
    let W = Ih(G);
    (function(w, B, A, V) {
      let X = Object.create(sE.prototype),
        _, F, g, J;
      _ = B.start !== void 0 ? () => B.start(X) : () => {}, F = B.write !== void 0 ? (K) => B.write(K, X) : () => P5(void 0), g = B.close !== void 0 ? () => B.close() : () => P5(void 0), J = B.abort !== void 0 ? (K) => B.abort(K) : () => P5(void 0),
        function(K, Q, E, S, P, $, h, O) {
          Q._controlledWritableStream = K, K._writableStreamController = Q, Q._queue = void 0, Q._queueTotalSize = void 0, PY(Q), Q._abortReason = void 0, Q._abortController = function() {
            if (xV4) return new AbortController
          }(), Q._started = !1, Q._strategySizeAlgorithm = O, Q._strategyHWM = h, Q._writeAlgorithm = S, Q._closeAlgorithm = P, Q._abortAlgorithm = $;
          let T = a41(Q);
          r41(K, T);
          let V1 = E();
          R7(P5(V1), () => (Q._started = !0, _h(Q), null), (c) => (Q._started = !0, $41(K, c), null))
        }(w, X, _, F, g, J, A, V)
    })(this, Z, aE(G, 1), W)
  }
  get locked() {
    if (!Mw(this)) throw xb("locked");
    return sb(this)
  }
  abort(I) {
    return Mw(this) ? sb(this) ? Z4(new TypeError("Cannot abort a stream that already has a writer")) : zh1(this, I) : Z4(xb("abort"))
  }
  close() {
    return Mw(this) ? sb(this) ? Z4(new TypeError("Cannot close a stream that already has a writer")) : yY(this) ? Z4(new TypeError("Cannot close an already-closing stream")) : Qh1(this) : Z4(xb("close"))
  }
  getWriter() {
    if (!Mw(this)) throw xb("getWriter");
    return new pA(this)
  }
}
// @from(Start 1273445, End 1273575)
function Mw(I) {
  return !!U7(I) && (!!Object.prototype.hasOwnProperty.call(I, "_writableStreamController") && I instanceof MY)
}
// @from(Start 1273577, End 1273625)
function sb(I) {
  return I._writer !== void 0
}
// @from(Start 1273627, End 1274330)
function zh1(I, d) {
  var G;
  if (I._state === "closed" || I._state === "errored") return P5(void 0);
  I._writableStreamController._abortReason = d, (G = I._writableStreamController._abortController) === null || G === void 0 || G.abort(d);
  let Z = I._state;
  if (Z === "closed" || Z === "errored") return P5(void 0);
  if (I._pendingAbortRequest !== void 0) return I._pendingAbortRequest._promise;
  let C = !1;
  Z === "erroring" && (C = !0, d = void 0);
  let W = II((w, B) => {
    I._pendingAbortRequest = {
      _promise: void 0,
      _resolve: w,
      _reject: B,
      _reason: d,
      _wasAlreadyErroring: C
    }
  });
  return I._pendingAbortRequest._promise = W, C || i41(I, d), W
}
// @from(Start 1274332, End 1274797)
function Qh1(I) {
  let d = I._state;
  if (d === "closed" || d === "errored") return Z4(new TypeError(`The stream (in ${d} state) is not in the writable state and cannot be closed`));
  let G = II((W, w) => {
      let B = {
        _resolve: W,
        _reject: w
      };
      I._closeRequest = B
    }),
    Z = I._writer;
  var C;
  return Z !== void 0 && I._backpressure && d === "writable" && o41(Z), x41(C = I._writableStreamController, qh1, 0), _h(C), G
}
// @from(Start 1274799, End 1274868)
function $41(I, d) {
  I._state !== "writable" ? n41(I) : i41(I, d)
}
// @from(Start 1274870, End 1275180)
function i41(I, d) {
  let G = I._writableStreamController;
  I._state = "erroring", I._storedError = d;
  let Z = I._writer;
  Z !== void 0 && fh1(Z, d), ! function(C) {
    if (C._inFlightWriteRequest === void 0 && C._inFlightCloseRequest === void 0) return !1;
    return !0
  }(I) && G._started && n41(I)
}
// @from(Start 1275182, End 1275685)
function n41(I) {
  I._state = "errored", I._writableStreamController[rb1]();
  let d = I._storedError;
  if (I._writeRequests.forEach((Z) => {
      Z._reject(d)
    }), I._writeRequests = new rd, I._pendingAbortRequest === void 0) return void kb(I);
  let G = I._pendingAbortRequest;
  if (I._pendingAbortRequest = void 0, G._wasAlreadyErroring) return G._reject(d), void kb(I);
  R7(I._writableStreamController[nb1](G._reason), () => (G._resolve(), kb(I), null), (Z) => (G._reject(Z), kb(I), null))
}
// @from(Start 1275687, End 1275779)
function yY(I) {
  return I._closeRequest !== void 0 || I._inFlightCloseRequest !== void 0
}
// @from(Start 1275781, End 1275962)
function kb(I) {
  I._closeRequest !== void 0 && (I._closeRequest._reject(I._storedError), I._closeRequest = void 0);
  let d = I._writer;
  d !== void 0 && s41(d, I._storedError)
}
// @from(Start 1275964, End 1276117)
function r41(I, d) {
  let G = I._writer;
  G !== void 0 && d !== I._backpressure && (d ? function(Z) {
    Dh(Z)
  }(G) : o41(G)), I._backpressure = d
}
// @from(Start 1276118, End 1279497)
class pA {
  constructor(I) {
    if (rA(I, 1, "WritableStreamDefaultWriter"), function(Z, C) {
        if (!Mw(Z)) throw new TypeError(`${C} is not a WritableStream.`)
      }(I, "First parameter"), sb(I)) throw new TypeError("This stream has already been locked for exclusive writing by another writer");
    this._ownerWritableStream = I, I._writer = this;
    let d = I._state;
    if (d === "writable") !yY(I) && I._backpressure ? Dh(this) : $b1(this), ob(this);
    else if (d === "erroring") u41(this, I._storedError), ob(this);
    else if (d === "closed") $b1(this), ob(G = this), vh1(G);
    else {
      let Z = I._storedError;
      u41(this, Z), Pb1(this, Z)
    }
    var G
  }
  get closed() {
    return rF(this) ? this._closedPromise : Z4(aF("closed"))
  }
  get desiredSize() {
    if (!rF(this)) throw aF("desiredSize");
    if (this._ownerWritableStream === void 0) throw cE("desiredSize");
    return function(I) {
      let d = I._ownerWritableStream,
        G = d._state;
      if (G === "errored" || G === "erroring") return null;
      if (G === "closed") return 0;
      return Rh1(d._writableStreamController)
    }(this)
  }
  get ready() {
    return rF(this) ? this._readyPromise : Z4(aF("ready"))
  }
  abort(I) {
    return rF(this) ? this._ownerWritableStream === void 0 ? Z4(cE("abort")) : function(d, G) {
      return zh1(d._ownerWritableStream, G)
    }(this, I) : Z4(aF("abort"))
  }
  close() {
    if (!rF(this)) return Z4(aF("close"));
    let I = this._ownerWritableStream;
    return I === void 0 ? Z4(cE("close")) : yY(I) ? Z4(new TypeError("Cannot close an already-closing stream")) : Qh1(this._ownerWritableStream)
  }
  releaseLock() {
    if (!rF(this)) throw aF("releaseLock");
    this._ownerWritableStream !== void 0 && function(I) {
      let d = I._ownerWritableStream,
        G = new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");
      fh1(I, G),
        function(Z, C) {
          Z._closedPromiseState === "pending" ? s41(Z, C) : function(W, w) {
            Pb1(W, w)
          }(Z, C)
        }(I, G), d._writer = void 0, I._ownerWritableStream = void 0
    }(this)
  }
  write(I) {
    return rF(this) ? this._ownerWritableStream === void 0 ? Z4(cE("write to")) : function(d, G) {
      let Z = d._ownerWritableStream,
        C = Z._writableStreamController,
        W = function(A, V) {
          try {
            return A._strategySizeAlgorithm(V)
          } catch (X) {
            return yb1(A, X), 1
          }
        }(C, G);
      if (Z !== d._ownerWritableStream) return Z4(cE("write to"));
      let w = Z._state;
      if (w === "errored") return Z4(Z._storedError);
      if (yY(Z) || w === "closed") return Z4(new TypeError("The stream is closing or closed and cannot be written to"));
      if (w === "erroring") return Z4(Z._storedError);
      let B = function(A) {
        return II((V, X) => {
          let _ = {
            _resolve: V,
            _reject: X
          };
          A._writeRequests.push(_)
        })
      }(Z);
      return function(A, V, X) {
        try {
          x41(A, V, X)
        } catch (F) {
          return void yb1(A, F)
        }
        let _ = A._controlledWritableStream;
        if (!yY(_) && _._state === "writable") r41(_, a41(A));
        _h(A)
      }(C, G, W), B
    }(this, I) : Z4(aF("write"))
  }
}
// @from(Start 1279499, End 1279624)
function rF(I) {
  return !!U7(I) && (!!Object.prototype.hasOwnProperty.call(I, "_ownerWritableStream") && I instanceof pA)
}
// @from(Start 1279626, End 1279740)
function fh1(I, d) {
  I._readyPromiseState === "pending" ? Eh1(I, d) : function(G, Z) {
    u41(G, Z)
  }(I, d)
}
// @from(Start 1279742, End 1279873)
function U41(I) {
  return !!U7(I) && (!!Object.prototype.hasOwnProperty.call(I, "_controlledWritableStream") && I instanceof sE)
}
// @from(Start 1279875, End 1280013)
function Gh(I) {
  I._writeAlgorithm = void 0, I._closeAlgorithm = void 0, I._abortAlgorithm = void 0, I._strategySizeAlgorithm = void 0
}
// @from(Start 1280015, End 1280078)
function Rh1(I) {
  return I._strategyHWM - I._queueTotalSize
}