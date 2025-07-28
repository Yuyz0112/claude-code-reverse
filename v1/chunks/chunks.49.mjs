
// @from(Start 5053230, End 5100588)
E$ = Y((ZJ3, CH2) => {
  var g59 = eD2(),
    D9 = la(),
    iJ = IH2(),
    _0 = ba(),
    g1 = D9.CODE_POINTS,
    cJ = D9.CODE_POINT_SEQUENCES,
    J59 = {
      128: 8364,
      130: 8218,
      131: 402,
      132: 8222,
      133: 8230,
      134: 8224,
      135: 8225,
      136: 710,
      137: 8240,
      138: 352,
      139: 8249,
      140: 338,
      142: 381,
      145: 8216,
      146: 8217,
      147: 8220,
      148: 8221,
      149: 8226,
      150: 8211,
      151: 8212,
      152: 732,
      153: 8482,
      154: 353,
      155: 8250,
      156: 339,
      158: 382,
      159: 376
    };

  function x9(I) {
    return I === g1.SPACE || I === g1.LINE_FEED || I === g1.TABULATION || I === g1.FORM_FEED
  }

  function v$(I) {
    return I >= g1.DIGIT_0 && I <= g1.DIGIT_9
  }

  function DW(I) {
    return I >= g1.LATIN_CAPITAL_A && I <= g1.LATIN_CAPITAL_Z
  }

  function pJ(I) {
    return I >= g1.LATIN_SMALL_A && I <= g1.LATIN_SMALL_Z
  }

  function CH(I) {
    return pJ(I) || DW(I)
  }

  function Gg1(I) {
    return CH(I) || v$(I)
  }

  function GH2(I) {
    return I >= g1.LATIN_CAPITAL_A && I <= g1.LATIN_CAPITAL_F
  }

  function ZH2(I) {
    return I >= g1.LATIN_SMALL_A && I <= g1.LATIN_SMALL_F
  }

  function K59(I) {
    return v$(I) || GH2(I) || ZH2(I)
  }

  function ha(I) {
    return I + 32
  }

  function p3(I) {
    if (I <= 65535) return String.fromCharCode(I);
    return I -= 65536, String.fromCharCode(I >>> 10 & 1023 | 55296) + String.fromCharCode(56320 | I & 1023)
  }

  function ZH(I) {
    return String.fromCharCode(ha(I))
  }

  function dH2(I, d) {
    let G = iJ[++I],
      Z = ++I,
      C = Z + G - 1;
    while (Z <= C) {
      let W = Z + C >>> 1,
        w = iJ[W];
      if (w < d) Z = W + 1;
      else if (w > d) C = W - 1;
      else return iJ[W + G]
    }
    return -1
  }
  class $9 {
    constructor() {
      this.preprocessor = new g59, this.tokenQueue = [], this.allowCDATA = !1, this.state = "DATA_STATE", this.returnState = "", this.charRefCode = -1, this.tempBuff = [], this.lastStartTagName = "", this.consumedAfterSnapshot = -1, this.active = !1, this.currentCharacterToken = null, this.currentToken = null, this.currentAttr = null
    }
    _err() {}
    _errOnNextCodePoint(I) {
      this._consume(), this._err(I), this._unconsume()
    }
    getNextToken() {
      while (!this.tokenQueue.length && this.active) {
        this.consumedAfterSnapshot = 0;
        let I = this._consume();
        if (!this._ensureHibernation()) this[this.state](I)
      }
      return this.tokenQueue.shift()
    }
    write(I, d) {
      this.active = !0, this.preprocessor.write(I, d)
    }
    insertHtmlAtCurrentPos(I) {
      this.active = !0, this.preprocessor.insertHtmlAtCurrentPos(I)
    }
    _ensureHibernation() {
      if (this.preprocessor.endOfChunkHit) {
        for (; this.consumedAfterSnapshot > 0; this.consumedAfterSnapshot--) this.preprocessor.retreat();
        return this.active = !1, this.tokenQueue.push({
          type: $9.HIBERNATION_TOKEN
        }), !0
      }
      return !1
    }
    _consume() {
      return this.consumedAfterSnapshot++, this.preprocessor.advance()
    }
    _unconsume() {
      this.consumedAfterSnapshot--, this.preprocessor.retreat()
    }
    _reconsumeInState(I) {
      this.state = I, this._unconsume()
    }
    _consumeSequenceIfMatch(I, d, G) {
      let Z = 0,
        C = !0,
        W = I.length,
        w = 0,
        B = d,
        A = void 0;
      for (; w < W; w++) {
        if (w > 0) B = this._consume(), Z++;
        if (B === g1.EOF) {
          C = !1;
          break
        }
        if (A = I[w], B !== A && (G || B !== ha(A))) {
          C = !1;
          break
        }
      }
      if (!C)
        while (Z--) this._unconsume();
      return C
    }
    _isTempBufferEqualToScriptString() {
      if (this.tempBuff.length !== cJ.SCRIPT_STRING.length) return !1;
      for (let I = 0; I < this.tempBuff.length; I++)
        if (this.tempBuff[I] !== cJ.SCRIPT_STRING[I]) return !1;
      return !0
    }
    _createStartTagToken() {
      this.currentToken = {
        type: $9.START_TAG_TOKEN,
        tagName: "",
        selfClosing: !1,
        ackSelfClosing: !1,
        attrs: []
      }
    }
    _createEndTagToken() {
      this.currentToken = {
        type: $9.END_TAG_TOKEN,
        tagName: "",
        selfClosing: !1,
        attrs: []
      }
    }
    _createCommentToken() {
      this.currentToken = {
        type: $9.COMMENT_TOKEN,
        data: ""
      }
    }
    _createDoctypeToken(I) {
      this.currentToken = {
        type: $9.DOCTYPE_TOKEN,
        name: I,
        forceQuirks: !1,
        publicId: null,
        systemId: null
      }
    }
    _createCharacterToken(I, d) {
      this.currentCharacterToken = {
        type: I,
        chars: d
      }
    }
    _createEOFToken() {
      this.currentToken = {
        type: $9.EOF_TOKEN
      }
    }
    _createAttr(I) {
      this.currentAttr = {
        name: I,
        value: ""
      }
    }
    _leaveAttrName(I) {
      if ($9.getTokenAttr(this.currentToken, this.currentAttr.name) === null) this.currentToken.attrs.push(this.currentAttr);
      else this._err(_0.duplicateAttribute);
      this.state = I
    }
    _leaveAttrValue(I) {
      this.state = I
    }
    _emitCurrentToken() {
      this._emitCurrentCharacterToken();
      let I = this.currentToken;
      if (this.currentToken = null, I.type === $9.START_TAG_TOKEN) this.lastStartTagName = I.tagName;
      else if (I.type === $9.END_TAG_TOKEN) {
        if (I.attrs.length > 0) this._err(_0.endTagWithAttributes);
        if (I.selfClosing) this._err(_0.endTagWithTrailingSolidus)
      }
      this.tokenQueue.push(I)
    }
    _emitCurrentCharacterToken() {
      if (this.currentCharacterToken) this.tokenQueue.push(this.currentCharacterToken), this.currentCharacterToken = null
    }
    _emitEOFToken() {
      this._createEOFToken(), this._emitCurrentToken()
    }
    _appendCharToCurrentCharacterToken(I, d) {
      if (this.currentCharacterToken && this.currentCharacterToken.type !== I) this._emitCurrentCharacterToken();
      if (this.currentCharacterToken) this.currentCharacterToken.chars += d;
      else this._createCharacterToken(I, d)
    }
    _emitCodePoint(I) {
      let d = $9.CHARACTER_TOKEN;
      if (x9(I)) d = $9.WHITESPACE_CHARACTER_TOKEN;
      else if (I === g1.NULL) d = $9.NULL_CHARACTER_TOKEN;
      this._appendCharToCurrentCharacterToken(d, p3(I))
    }
    _emitSeveralCodePoints(I) {
      for (let d = 0; d < I.length; d++) this._emitCodePoint(I[d])
    }
    _emitChars(I) {
      this._appendCharToCurrentCharacterToken($9.CHARACTER_TOKEN, I)
    }
    _matchNamedCharacterReference(I) {
      let d = null,
        G = 1,
        Z = dH2(0, I);
      this.tempBuff.push(I);
      while (Z > -1) {
        let C = iJ[Z],
          W = C < 7;
        if (W && C & 1) d = C & 2 ? [iJ[++Z], iJ[++Z]] : [iJ[++Z]], G = 0;
        let B = this._consume();
        if (this.tempBuff.push(B), G++, B === g1.EOF) break;
        if (W) Z = C & 4 ? dH2(Z, B) : -1;
        else Z = B === C ? ++Z : -1
      }
      while (G--) this.tempBuff.pop(), this._unconsume();
      return d
    }
    _isCharacterReferenceInAttribute() {
      return this.returnState === "ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE" || this.returnState === "ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE" || this.returnState === "ATTRIBUTE_VALUE_UNQUOTED_STATE"
    }
    _isCharacterReferenceAttributeQuirk(I) {
      if (!I && this._isCharacterReferenceInAttribute()) {
        let d = this._consume();
        return this._unconsume(), d === g1.EQUALS_SIGN || Gg1(d)
      }
      return !1
    }
    _flushCodePointsConsumedAsCharacterReference() {
      if (this._isCharacterReferenceInAttribute())
        for (let I = 0; I < this.tempBuff.length; I++) this.currentAttr.value += p3(this.tempBuff[I]);
      else this._emitSeveralCodePoints(this.tempBuff);
      this.tempBuff = []
    } ["DATA_STATE"](I) {
      if (this.preprocessor.dropParsedChunk(), I === g1.LESS_THAN_SIGN) this.state = "TAG_OPEN_STATE";
      else if (I === g1.AMPERSAND) this.returnState = "DATA_STATE", this.state = "CHARACTER_REFERENCE_STATE";
      else if (I === g1.NULL) this._err(_0.unexpectedNullCharacter), this._emitCodePoint(I);
      else if (I === g1.EOF) this._emitEOFToken();
      else this._emitCodePoint(I)
    } ["RCDATA_STATE"](I) {
      if (this.preprocessor.dropParsedChunk(), I === g1.AMPERSAND) this.returnState = "RCDATA_STATE", this.state = "CHARACTER_REFERENCE_STATE";
      else if (I === g1.LESS_THAN_SIGN) this.state = "RCDATA_LESS_THAN_SIGN_STATE";
      else if (I === g1.NULL) this._err(_0.unexpectedNullCharacter), this._emitChars(D9.REPLACEMENT_CHARACTER);
      else if (I === g1.EOF) this._emitEOFToken();
      else this._emitCodePoint(I)
    } ["RAWTEXT_STATE"](I) {
      if (this.preprocessor.dropParsedChunk(), I === g1.LESS_THAN_SIGN) this.state = "RAWTEXT_LESS_THAN_SIGN_STATE";
      else if (I === g1.NULL) this._err(_0.unexpectedNullCharacter), this._emitChars(D9.REPLACEMENT_CHARACTER);
      else if (I === g1.EOF) this._emitEOFToken();
      else this._emitCodePoint(I)
    } ["SCRIPT_DATA_STATE"](I) {
      if (this.preprocessor.dropParsedChunk(), I === g1.LESS_THAN_SIGN) this.state = "SCRIPT_DATA_LESS_THAN_SIGN_STATE";
      else if (I === g1.NULL) this._err(_0.unexpectedNullCharacter), this._emitChars(D9.REPLACEMENT_CHARACTER);
      else if (I === g1.EOF) this._emitEOFToken();
      else this._emitCodePoint(I)
    } ["PLAINTEXT_STATE"](I) {
      if (this.preprocessor.dropParsedChunk(), I === g1.NULL) this._err(_0.unexpectedNullCharacter), this._emitChars(D9.REPLACEMENT_CHARACTER);
      else if (I === g1.EOF) this._emitEOFToken();
      else this._emitCodePoint(I)
    } ["TAG_OPEN_STATE"](I) {
      if (I === g1.EXCLAMATION_MARK) this.state = "MARKUP_DECLARATION_OPEN_STATE";
      else if (I === g1.SOLIDUS) this.state = "END_TAG_OPEN_STATE";
      else if (CH(I)) this._createStartTagToken(), this._reconsumeInState("TAG_NAME_STATE");
      else if (I === g1.QUESTION_MARK) this._err(_0.unexpectedQuestionMarkInsteadOfTagName), this._createCommentToken(), this._reconsumeInState("BOGUS_COMMENT_STATE");
      else if (I === g1.EOF) this._err(_0.eofBeforeTagName), this._emitChars("<"), this._emitEOFToken();
      else this._err(_0.invalidFirstCharacterOfTagName), this._emitChars("<"), this._reconsumeInState("DATA_STATE")
    } ["END_TAG_OPEN_STATE"](I) {
      if (CH(I)) this._createEndTagToken(), this._reconsumeInState("TAG_NAME_STATE");
      else if (I === g1.GREATER_THAN_SIGN) this._err(_0.missingEndTagName), this.state = "DATA_STATE";
      else if (I === g1.EOF) this._err(_0.eofBeforeTagName), this._emitChars("</"), this._emitEOFToken();
      else this._err(_0.invalidFirstCharacterOfTagName), this._createCommentToken(), this._reconsumeInState("BOGUS_COMMENT_STATE")
    } ["TAG_NAME_STATE"](I) {
      if (x9(I)) this.state = "BEFORE_ATTRIBUTE_NAME_STATE";
      else if (I === g1.SOLIDUS) this.state = "SELF_CLOSING_START_TAG_STATE";
      else if (I === g1.GREATER_THAN_SIGN) this.state = "DATA_STATE", this._emitCurrentToken();
      else if (DW(I)) this.currentToken.tagName += ZH(I);
      else if (I === g1.NULL) this._err(_0.unexpectedNullCharacter), this.currentToken.tagName += D9.REPLACEMENT_CHARACTER;
      else if (I === g1.EOF) this._err(_0.eofInTag), this._emitEOFToken();
      else this.currentToken.tagName += p3(I)
    } ["RCDATA_LESS_THAN_SIGN_STATE"](I) {
      if (I === g1.SOLIDUS) this.tempBuff = [], this.state = "RCDATA_END_TAG_OPEN_STATE";
      else this._emitChars("<"), this._reconsumeInState("RCDATA_STATE")
    } ["RCDATA_END_TAG_OPEN_STATE"](I) {
      if (CH(I)) this._createEndTagToken(), this._reconsumeInState("RCDATA_END_TAG_NAME_STATE");
      else this._emitChars("</"), this._reconsumeInState("RCDATA_STATE")
    } ["RCDATA_END_TAG_NAME_STATE"](I) {
      if (DW(I)) this.currentToken.tagName += ZH(I), this.tempBuff.push(I);
      else if (pJ(I)) this.currentToken.tagName += p3(I), this.tempBuff.push(I);
      else {
        if (this.lastStartTagName === this.currentToken.tagName) {
          if (x9(I)) {
            this.state = "BEFORE_ATTRIBUTE_NAME_STATE";
            return
          }
          if (I === g1.SOLIDUS) {
            this.state = "SELF_CLOSING_START_TAG_STATE";
            return
          }
          if (I === g1.GREATER_THAN_SIGN) {
            this.state = "DATA_STATE", this._emitCurrentToken();
            return
          }
        }
        this._emitChars("</"), this._emitSeveralCodePoints(this.tempBuff), this._reconsumeInState("RCDATA_STATE")
      }
    } ["RAWTEXT_LESS_THAN_SIGN_STATE"](I) {
      if (I === g1.SOLIDUS) this.tempBuff = [], this.state = "RAWTEXT_END_TAG_OPEN_STATE";
      else this._emitChars("<"), this._reconsumeInState("RAWTEXT_STATE")
    } ["RAWTEXT_END_TAG_OPEN_STATE"](I) {
      if (CH(I)) this._createEndTagToken(), this._reconsumeInState("RAWTEXT_END_TAG_NAME_STATE");
      else this._emitChars("</"), this._reconsumeInState("RAWTEXT_STATE")
    } ["RAWTEXT_END_TAG_NAME_STATE"](I) {
      if (DW(I)) this.currentToken.tagName += ZH(I), this.tempBuff.push(I);
      else if (pJ(I)) this.currentToken.tagName += p3(I), this.tempBuff.push(I);
      else {
        if (this.lastStartTagName === this.currentToken.tagName) {
          if (x9(I)) {
            this.state = "BEFORE_ATTRIBUTE_NAME_STATE";
            return
          }
          if (I === g1.SOLIDUS) {
            this.state = "SELF_CLOSING_START_TAG_STATE";
            return
          }
          if (I === g1.GREATER_THAN_SIGN) {
            this._emitCurrentToken(), this.state = "DATA_STATE";
            return
          }
        }
        this._emitChars("</"), this._emitSeveralCodePoints(this.tempBuff), this._reconsumeInState("RAWTEXT_STATE")
      }
    } ["SCRIPT_DATA_LESS_THAN_SIGN_STATE"](I) {
      if (I === g1.SOLIDUS) this.tempBuff = [], this.state = "SCRIPT_DATA_END_TAG_OPEN_STATE";
      else if (I === g1.EXCLAMATION_MARK) this.state = "SCRIPT_DATA_ESCAPE_START_STATE", this._emitChars("<!");
      else this._emitChars("<"), this._reconsumeInState("SCRIPT_DATA_STATE")
    } ["SCRIPT_DATA_END_TAG_OPEN_STATE"](I) {
      if (CH(I)) this._createEndTagToken(), this._reconsumeInState("SCRIPT_DATA_END_TAG_NAME_STATE");
      else this._emitChars("</"), this._reconsumeInState("SCRIPT_DATA_STATE")
    } ["SCRIPT_DATA_END_TAG_NAME_STATE"](I) {
      if (DW(I)) this.currentToken.tagName += ZH(I), this.tempBuff.push(I);
      else if (pJ(I)) this.currentToken.tagName += p3(I), this.tempBuff.push(I);
      else {
        if (this.lastStartTagName === this.currentToken.tagName) {
          if (x9(I)) {
            this.state = "BEFORE_ATTRIBUTE_NAME_STATE";
            return
          } else if (I === g1.SOLIDUS) {
            this.state = "SELF_CLOSING_START_TAG_STATE";
            return
          } else if (I === g1.GREATER_THAN_SIGN) {
            this._emitCurrentToken(), this.state = "DATA_STATE";
            return
          }
        }
        this._emitChars("</"), this._emitSeveralCodePoints(this.tempBuff), this._reconsumeInState("SCRIPT_DATA_STATE")
      }
    } ["SCRIPT_DATA_ESCAPE_START_STATE"](I) {
      if (I === g1.HYPHEN_MINUS) this.state = "SCRIPT_DATA_ESCAPE_START_DASH_STATE", this._emitChars("-");
      else this._reconsumeInState("SCRIPT_DATA_STATE")
    } ["SCRIPT_DATA_ESCAPE_START_DASH_STATE"](I) {
      if (I === g1.HYPHEN_MINUS) this.state = "SCRIPT_DATA_ESCAPED_DASH_DASH_STATE", this._emitChars("-");
      else this._reconsumeInState("SCRIPT_DATA_STATE")
    } ["SCRIPT_DATA_ESCAPED_STATE"](I) {
      if (I === g1.HYPHEN_MINUS) this.state = "SCRIPT_DATA_ESCAPED_DASH_STATE", this._emitChars("-");
      else if (I === g1.LESS_THAN_SIGN) this.state = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE";
      else if (I === g1.NULL) this._err(_0.unexpectedNullCharacter), this._emitChars(D9.REPLACEMENT_CHARACTER);
      else if (I === g1.EOF) this._err(_0.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
      else this._emitCodePoint(I)
    } ["SCRIPT_DATA_ESCAPED_DASH_STATE"](I) {
      if (I === g1.HYPHEN_MINUS) this.state = "SCRIPT_DATA_ESCAPED_DASH_DASH_STATE", this._emitChars("-");
      else if (I === g1.LESS_THAN_SIGN) this.state = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE";
      else if (I === g1.NULL) this._err(_0.unexpectedNullCharacter), this.state = "SCRIPT_DATA_ESCAPED_STATE", this._emitChars(D9.REPLACEMENT_CHARACTER);
      else if (I === g1.EOF) this._err(_0.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
      else this.state = "SCRIPT_DATA_ESCAPED_STATE", this._emitCodePoint(I)
    } ["SCRIPT_DATA_ESCAPED_DASH_DASH_STATE"](I) {
      if (I === g1.HYPHEN_MINUS) this._emitChars("-");
      else if (I === g1.LESS_THAN_SIGN) this.state = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE";
      else if (I === g1.GREATER_THAN_SIGN) this.state = "SCRIPT_DATA_STATE", this._emitChars(">");
      else if (I === g1.NULL) this._err(_0.unexpectedNullCharacter), this.state = "SCRIPT_DATA_ESCAPED_STATE", this._emitChars(D9.REPLACEMENT_CHARACTER);
      else if (I === g1.EOF) this._err(_0.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
      else this.state = "SCRIPT_DATA_ESCAPED_STATE", this._emitCodePoint(I)
    } ["SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE"](I) {
      if (I === g1.SOLIDUS) this.tempBuff = [], this.state = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE";
      else if (CH(I)) this.tempBuff = [], this._emitChars("<"), this._reconsumeInState("SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE");
      else this._emitChars("<"), this._reconsumeInState("SCRIPT_DATA_ESCAPED_STATE")
    } ["SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE"](I) {
      if (CH(I)) this._createEndTagToken(), this._reconsumeInState("SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE");
      else this._emitChars("</"), this._reconsumeInState("SCRIPT_DATA_ESCAPED_STATE")
    } ["SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE"](I) {
      if (DW(I)) this.currentToken.tagName += ZH(I), this.tempBuff.push(I);
      else if (pJ(I)) this.currentToken.tagName += p3(I), this.tempBuff.push(I);
      else {
        if (this.lastStartTagName === this.currentToken.tagName) {
          if (x9(I)) {
            this.state = "BEFORE_ATTRIBUTE_NAME_STATE";
            return
          }
          if (I === g1.SOLIDUS) {
            this.state = "SELF_CLOSING_START_TAG_STATE";
            return
          }
          if (I === g1.GREATER_THAN_SIGN) {
            this._emitCurrentToken(), this.state = "DATA_STATE";
            return
          }
        }
        this._emitChars("</"), this._emitSeveralCodePoints(this.tempBuff), this._reconsumeInState("SCRIPT_DATA_ESCAPED_STATE")
      }
    } ["SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE"](I) {
      if (x9(I) || I === g1.SOLIDUS || I === g1.GREATER_THAN_SIGN) this.state = this._isTempBufferEqualToScriptString() ? "SCRIPT_DATA_DOUBLE_ESCAPED_STATE" : "SCRIPT_DATA_ESCAPED_STATE", this._emitCodePoint(I);
      else if (DW(I)) this.tempBuff.push(ha(I)), this._emitCodePoint(I);
      else if (pJ(I)) this.tempBuff.push(I), this._emitCodePoint(I);
      else this._reconsumeInState("SCRIPT_DATA_ESCAPED_STATE")
    } ["SCRIPT_DATA_DOUBLE_ESCAPED_STATE"](I) {
      if (I === g1.HYPHEN_MINUS) this.state = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE", this._emitChars("-");
      else if (I === g1.LESS_THAN_SIGN) this.state = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE", this._emitChars("<");
      else if (I === g1.NULL) this._err(_0.unexpectedNullCharacter), this._emitChars(D9.REPLACEMENT_CHARACTER);
      else if (I === g1.EOF) this._err(_0.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
      else this._emitCodePoint(I)
    } ["SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE"](I) {
      if (I === g1.HYPHEN_MINUS) this.state = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE", this._emitChars("-");
      else if (I === g1.LESS_THAN_SIGN) this.state = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE", this._emitChars("<");
      else if (I === g1.NULL) this._err(_0.unexpectedNullCharacter), this.state = "SCRIPT_DATA_DOUBLE_ESCAPED_STATE", this._emitChars(D9.REPLACEMENT_CHARACTER);
      else if (I === g1.EOF) this._err(_0.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
      else this.state = "SCRIPT_DATA_DOUBLE_ESCAPED_STATE", this._emitCodePoint(I)
    } ["SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE"](I) {
      if (I === g1.HYPHEN_MINUS) this._emitChars("-");
      else if (I === g1.LESS_THAN_SIGN) this.state = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE", this._emitChars("<");
      else if (I === g1.GREATER_THAN_SIGN) this.state = "SCRIPT_DATA_STATE", this._emitChars(">");
      else if (I === g1.NULL) this._err(_0.unexpectedNullCharacter), this.state = "SCRIPT_DATA_DOUBLE_ESCAPED_STATE", this._emitChars(D9.REPLACEMENT_CHARACTER);
      else if (I === g1.EOF) this._err(_0.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
      else this.state = "SCRIPT_DATA_DOUBLE_ESCAPED_STATE", this._emitCodePoint(I)
    } ["SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE"](I) {
      if (I === g1.SOLIDUS) this.tempBuff = [], this.state = "SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE", this._emitChars("/");
      else this._reconsumeInState("SCRIPT_DATA_DOUBLE_ESCAPED_STATE")
    } ["SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE"](I) {
      if (x9(I) || I === g1.SOLIDUS || I === g1.GREATER_THAN_SIGN) this.state = this._isTempBufferEqualToScriptString() ? "SCRIPT_DATA_ESCAPED_STATE" : "SCRIPT_DATA_DOUBLE_ESCAPED_STATE", this._emitCodePoint(I);
      else if (DW(I)) this.tempBuff.push(ha(I)), this._emitCodePoint(I);
      else if (pJ(I)) this.tempBuff.push(I), this._emitCodePoint(I);
      else this._reconsumeInState("SCRIPT_DATA_DOUBLE_ESCAPED_STATE")
    } ["BEFORE_ATTRIBUTE_NAME_STATE"](I) {
      if (x9(I)) return;
      if (I === g1.SOLIDUS || I === g1.GREATER_THAN_SIGN || I === g1.EOF) this._reconsumeInState("AFTER_ATTRIBUTE_NAME_STATE");
      else if (I === g1.EQUALS_SIGN) this._err(_0.unexpectedEqualsSignBeforeAttributeName), this._createAttr("="), this.state = "ATTRIBUTE_NAME_STATE";
      else this._createAttr(""), this._reconsumeInState("ATTRIBUTE_NAME_STATE")
    } ["ATTRIBUTE_NAME_STATE"](I) {
      if (x9(I) || I === g1.SOLIDUS || I === g1.GREATER_THAN_SIGN || I === g1.EOF) this._leaveAttrName("AFTER_ATTRIBUTE_NAME_STATE"), this._unconsume();
      else if (I === g1.EQUALS_SIGN) this._leaveAttrName("BEFORE_ATTRIBUTE_VALUE_STATE");
      else if (DW(I)) this.currentAttr.name += ZH(I);
      else if (I === g1.QUOTATION_MARK || I === g1.APOSTROPHE || I === g1.LESS_THAN_SIGN) this._err(_0.unexpectedCharacterInAttributeName), this.currentAttr.name += p3(I);
      else if (I === g1.NULL) this._err(_0.unexpectedNullCharacter), this.currentAttr.name += D9.REPLACEMENT_CHARACTER;
      else this.currentAttr.name += p3(I)
    } ["AFTER_ATTRIBUTE_NAME_STATE"](I) {
      if (x9(I)) return;
      if (I === g1.SOLIDUS) this.state = "SELF_CLOSING_START_TAG_STATE";
      else if (I === g1.EQUALS_SIGN) this.state = "BEFORE_ATTRIBUTE_VALUE_STATE";
      else if (I === g1.GREATER_THAN_SIGN) this.state = "DATA_STATE", this._emitCurrentToken();
      else if (I === g1.EOF) this._err(_0.eofInTag), this._emitEOFToken();
      else this._createAttr(""), this._reconsumeInState("ATTRIBUTE_NAME_STATE")
    } ["BEFORE_ATTRIBUTE_VALUE_STATE"](I) {
      if (x9(I)) return;
      if (I === g1.QUOTATION_MARK) this.state = "ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE";
      else if (I === g1.APOSTROPHE) this.state = "ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE";
      else if (I === g1.GREATER_THAN_SIGN) this._err(_0.missingAttributeValue), this.state = "DATA_STATE", this._emitCurrentToken();
      else this._reconsumeInState("ATTRIBUTE_VALUE_UNQUOTED_STATE")
    } ["ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE"](I) {
      if (I === g1.QUOTATION_MARK) this.state = "AFTER_ATTRIBUTE_VALUE_QUOTED_STATE";
      else if (I === g1.AMPERSAND) this.returnState = "ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE", this.state = "CHARACTER_REFERENCE_STATE";
      else if (I === g1.NULL) this._err(_0.unexpectedNullCharacter), this.currentAttr.value += D9.REPLACEMENT_CHARACTER;
      else if (I === g1.EOF) this._err(_0.eofInTag), this._emitEOFToken();
      else this.currentAttr.value += p3(I)
    } ["ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE"](I) {
      if (I === g1.APOSTROPHE) this.state = "AFTER_ATTRIBUTE_VALUE_QUOTED_STATE";
      else if (I === g1.AMPERSAND) this.returnState = "ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE", this.state = "CHARACTER_REFERENCE_STATE";
      else if (I === g1.NULL) this._err(_0.unexpectedNullCharacter), this.currentAttr.value += D9.REPLACEMENT_CHARACTER;
      else if (I === g1.EOF) this._err(_0.eofInTag), this._emitEOFToken();
      else this.currentAttr.value += p3(I)
    } ["ATTRIBUTE_VALUE_UNQUOTED_STATE"](I) {
      if (x9(I)) this._leaveAttrValue("BEFORE_ATTRIBUTE_NAME_STATE");
      else if (I === g1.AMPERSAND) this.returnState = "ATTRIBUTE_VALUE_UNQUOTED_STATE", this.state = "CHARACTER_REFERENCE_STATE";
      else if (I === g1.GREATER_THAN_SIGN) this._leaveAttrValue("DATA_STATE"), this._emitCurrentToken();
      else if (I === g1.NULL) this._err(_0.unexpectedNullCharacter), this.currentAttr.value += D9.REPLACEMENT_CHARACTER;
      else if (I === g1.QUOTATION_MARK || I === g1.APOSTROPHE || I === g1.LESS_THAN_SIGN || I === g1.EQUALS_SIGN || I === g1.GRAVE_ACCENT) this._err(_0.unexpectedCharacterInUnquotedAttributeValue), this.currentAttr.value += p3(I);
      else if (I === g1.EOF) this._err(_0.eofInTag), this._emitEOFToken();
      else this.currentAttr.value += p3(I)
    } ["AFTER_ATTRIBUTE_VALUE_QUOTED_STATE"](I) {
      if (x9(I)) this._leaveAttrValue("BEFORE_ATTRIBUTE_NAME_STATE");
      else if (I === g1.SOLIDUS) this._leaveAttrValue("SELF_CLOSING_START_TAG_STATE");
      else if (I === g1.GREATER_THAN_SIGN) this._leaveAttrValue("DATA_STATE"), this._emitCurrentToken();
      else if (I === g1.EOF) this._err(_0.eofInTag), this._emitEOFToken();
      else this._err(_0.missingWhitespaceBetweenAttributes), this._reconsumeInState("BEFORE_ATTRIBUTE_NAME_STATE")
    } ["SELF_CLOSING_START_TAG_STATE"](I) {
      if (I === g1.GREATER_THAN_SIGN) this.currentToken.selfClosing = !0, this.state = "DATA_STATE", this._emitCurrentToken();
      else if (I === g1.EOF) this._err(_0.eofInTag), this._emitEOFToken();
      else this._err(_0.unexpectedSolidusInTag), this._reconsumeInState("BEFORE_ATTRIBUTE_NAME_STATE")
    } ["BOGUS_COMMENT_STATE"](I) {
      if (I === g1.GREATER_THAN_SIGN) this.state = "DATA_STATE", this._emitCurrentToken();
      else if (I === g1.EOF) this._emitCurrentToken(), this._emitEOFToken();
      else if (I === g1.NULL) this._err(_0.unexpectedNullCharacter), this.currentToken.data += D9.REPLACEMENT_CHARACTER;
      else this.currentToken.data += p3(I)
    } ["MARKUP_DECLARATION_OPEN_STATE"](I) {
      if (this._consumeSequenceIfMatch(cJ.DASH_DASH_STRING, I, !0)) this._createCommentToken(), this.state = "COMMENT_START_STATE";
      else if (this._consumeSequenceIfMatch(cJ.DOCTYPE_STRING, I, !1)) this.state = "DOCTYPE_STATE";
      else if (this._consumeSequenceIfMatch(cJ.CDATA_START_STRING, I, !0))
        if (this.allowCDATA) this.state = "CDATA_SECTION_STATE";
        else this._err(_0.cdataInHtmlContent), this._createCommentToken(), this.currentToken.data = "[CDATA[", this.state = "BOGUS_COMMENT_STATE";
      else if (!this._ensureHibernation()) this._err(_0.incorrectlyOpenedComment), this._createCommentToken(), this._reconsumeInState("BOGUS_COMMENT_STATE")
    } ["COMMENT_START_STATE"](I) {
      if (I === g1.HYPHEN_MINUS) this.state = "COMMENT_START_DASH_STATE";
      else if (I === g1.GREATER_THAN_SIGN) this._err(_0.abruptClosingOfEmptyComment), this.state = "DATA_STATE", this._emitCurrentToken();
      else this._reconsumeInState("COMMENT_STATE")
    } ["COMMENT_START_DASH_STATE"](I) {
      if (I === g1.HYPHEN_MINUS) this.state = "COMMENT_END_STATE";
      else if (I === g1.GREATER_THAN_SIGN) this._err(_0.abruptClosingOfEmptyComment), this.state = "DATA_STATE", this._emitCurrentToken();
      else if (I === g1.EOF) this._err(_0.eofInComment), this._emitCurrentToken(), this._emitEOFToken();
      else this.currentToken.data += "-", this._reconsumeInState("COMMENT_STATE")
    } ["COMMENT_STATE"](I) {
      if (I === g1.HYPHEN_MINUS) this.state = "COMMENT_END_DASH_STATE";
      else if (I === g1.LESS_THAN_SIGN) this.currentToken.data += "<", this.state = "COMMENT_LESS_THAN_SIGN_STATE";
      else if (I === g1.NULL) this._err(_0.unexpectedNullCharacter), this.currentToken.data += D9.REPLACEMENT_CHARACTER;
      else if (I === g1.EOF) this._err(_0.eofInComment), this._emitCurrentToken(), this._emitEOFToken();
      else this.currentToken.data += p3(I)
    } ["COMMENT_LESS_THAN_SIGN_STATE"](I) {
      if (I === g1.EXCLAMATION_MARK) this.currentToken.data += "!", this.state = "COMMENT_LESS_THAN_SIGN_BANG_STATE";
      else if (I === g1.LESS_THAN_SIGN) this.currentToken.data += "!";
      else this._reconsumeInState("COMMENT_STATE")
    } ["COMMENT_LESS_THAN_SIGN_BANG_STATE"](I) {
      if (I === g1.HYPHEN_MINUS) this.state = "COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE";
      else this._reconsumeInState("COMMENT_STATE")
    } ["COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE"](I) {
      if (I === g1.HYPHEN_MINUS) this.state = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE";
      else this._reconsumeInState("COMMENT_END_DASH_STATE")
    } ["COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE"](I) {
      if (I !== g1.GREATER_THAN_SIGN && I !== g1.EOF) this._err(_0.nestedComment);
      this._reconsumeInState("COMMENT_END_STATE")
    } ["COMMENT_END_DASH_STATE"](I) {
      if (I === g1.HYPHEN_MINUS) this.state = "COMMENT_END_STATE";
      else if (I === g1.EOF) this._err(_0.eofInComment), this._emitCurrentToken(), this._emitEOFToken();
      else this.currentToken.data += "-", this._reconsumeInState("COMMENT_STATE")
    } ["COMMENT_END_STATE"](I) {
      if (I === g1.GREATER_THAN_SIGN) this.state = "DATA_STATE", this._emitCurrentToken();
      else if (I === g1.EXCLAMATION_MARK) this.state = "COMMENT_END_BANG_STATE";
      else if (I === g1.HYPHEN_MINUS) this.currentToken.data += "-";
      else if (I === g1.EOF) this._err(_0.eofInComment), this._emitCurrentToken(), this._emitEOFToken();
      else this.currentToken.data += "--", this._reconsumeInState("COMMENT_STATE")
    } ["COMMENT_END_BANG_STATE"](I) {
      if (I === g1.HYPHEN_MINUS) this.currentToken.data += "--!", this.state = "COMMENT_END_DASH_STATE";
      else if (I === g1.GREATER_THAN_SIGN) this._err(_0.incorrectlyClosedComment), this.state = "DATA_STATE", this._emitCurrentToken();
      else if (I === g1.EOF) this._err(_0.eofInComment), this._emitCurrentToken(), this._emitEOFToken();
      else this.currentToken.data += "--!", this._reconsumeInState("COMMENT_STATE")
    } ["DOCTYPE_STATE"](I) {
      if (x9(I)) this.state = "BEFORE_DOCTYPE_NAME_STATE";
      else if (I === g1.GREATER_THAN_SIGN) this._reconsumeInState("BEFORE_DOCTYPE_NAME_STATE");
      else if (I === g1.EOF) this._err(_0.eofInDoctype), this._createDoctypeToken(null), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken();
      else this._err(_0.missingWhitespaceBeforeDoctypeName), this._reconsumeInState("BEFORE_DOCTYPE_NAME_STATE")
    } ["BEFORE_DOCTYPE_NAME_STATE"](I) {
      if (x9(I)) return;
      if (DW(I)) this._createDoctypeToken(ZH(I)), this.state = "DOCTYPE_NAME_STATE";
      else if (I === g1.NULL) this._err(_0.unexpectedNullCharacter), this._createDoctypeToken(D9.REPLACEMENT_CHARACTER), this.state = "DOCTYPE_NAME_STATE";
      else if (I === g1.GREATER_THAN_SIGN) this._err(_0.missingDoctypeName), this._createDoctypeToken(null), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this.state = "DATA_STATE";
      else if (I === g1.EOF) this._err(_0.eofInDoctype), this._createDoctypeToken(null), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken();
      else this._createDoctypeToken(p3(I)), this.state = "DOCTYPE_NAME_STATE"
    } ["DOCTYPE_NAME_STATE"](I) {
      if (x9(I)) this.state = "AFTER_DOCTYPE_NAME_STATE";
      else if (I === g1.GREATER_THAN_SIGN) this.state = "DATA_STATE", this._emitCurrentToken();
      else if (DW(I)) this.currentToken.name += ZH(I);
      else if (I === g1.NULL) this._err(_0.unexpectedNullCharacter), this.currentToken.name += D9.REPLACEMENT_CHARACTER;
      else if (I === g1.EOF) this._err(_0.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken();
      else this.currentToken.name += p3(I)
    } ["AFTER_DOCTYPE_NAME_STATE"](I) {
      if (x9(I)) return;
      if (I === g1.GREATER_THAN_SIGN) this.state = "DATA_STATE", this._emitCurrentToken();
      else if (I === g1.EOF) this._err(_0.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken();
      else if (this._consumeSequenceIfMatch(cJ.PUBLIC_STRING, I, !1)) this.state = "AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE";
      else if (this._consumeSequenceIfMatch(cJ.SYSTEM_STRING, I, !1)) this.state = "AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE";
      else if (!this._ensureHibernation()) this._err(_0.invalidCharacterSequenceAfterDoctypeName), this.currentToken.forceQuirks = !0, this._reconsumeInState("BOGUS_DOCTYPE_STATE")
    } ["AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE"](I) {
      if (x9(I)) this.state = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE";
      else if (I === g1.QUOTATION_MARK) this._err(_0.missingWhitespaceAfterDoctypePublicKeyword), this.currentToken.publicId = "", this.state = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE";
      else if (I === g1.APOSTROPHE) this._err(_0.missingWhitespaceAfterDoctypePublicKeyword), this.currentToken.publicId = "", this.state = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE";
      else if (I === g1.GREATER_THAN_SIGN) this._err(_0.missingDoctypePublicIdentifier), this.currentToken.forceQuirks = !0, this.state = "DATA_STATE", this._emitCurrentToken();
      else if (I === g1.EOF) this._err(_0.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken();
      else this._err(_0.missingQuoteBeforeDoctypePublicIdentifier), this.currentToken.forceQuirks = !0, this._reconsumeInState("BOGUS_DOCTYPE_STATE")
    } ["BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE"](I) {
      if (x9(I)) return;
      if (I === g1.QUOTATION_MARK) this.currentToken.publicId = "", this.state = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE";
      else if (I === g1.APOSTROPHE) this.currentToken.publicId = "", this.state = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE";
      else if (I === g1.GREATER_THAN_SIGN) this._err(_0.missingDoctypePublicIdentifier), this.currentToken.forceQuirks = !0, this.state = "DATA_STATE", this._emitCurrentToken();
      else if (I === g1.EOF) this._err(_0.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken();
      else this._err(_0.missingQuoteBeforeDoctypePublicIdentifier), this.currentToken.forceQuirks = !0, this._reconsumeInState("BOGUS_DOCTYPE_STATE")
    } ["DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE"](I) {
      if (I === g1.QUOTATION_MARK) this.state = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE";
      else if (I === g1.NULL) this._err(_0.unexpectedNullCharacter), this.currentToken.publicId += D9.REPLACEMENT_CHARACTER;
      else if (I === g1.GREATER_THAN_SIGN) this._err(_0.abruptDoctypePublicIdentifier), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this.state = "DATA_STATE";
      else if (I === g1.EOF) this._err(_0.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken();
      else this.currentToken.publicId += p3(I)
    } ["DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE"](I) {
      if (I === g1.APOSTROPHE) this.state = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE";
      else if (I === g1.NULL) this._err(_0.unexpectedNullCharacter), this.currentToken.publicId += D9.REPLACEMENT_CHARACTER;
      else if (I === g1.GREATER_THAN_SIGN) this._err(_0.abruptDoctypePublicIdentifier), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this.state = "DATA_STATE";
      else if (I === g1.EOF) this._err(_0.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken();
      else this.currentToken.publicId += p3(I)
    } ["AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE"](I) {
      if (x9(I)) this.state = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE";
      else if (I === g1.GREATER_THAN_SIGN) this.state = "DATA_STATE", this._emitCurrentToken();
      else if (I === g1.QUOTATION_MARK) this._err(_0.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), this.currentToken.systemId = "", this.state = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE";
      else if (I === g1.APOSTROPHE) this._err(_0.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), this.currentToken.systemId = "", this.state = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE";
      else if (I === g1.EOF) this._err(_0.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken();
      else this._err(_0.missingQuoteBeforeDoctypeSystemIdentifier), this.currentToken.forceQuirks = !0, this._reconsumeInState("BOGUS_DOCTYPE_STATE")
    } ["BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE"](I) {
      if (x9(I)) return;
      if (I === g1.GREATER_THAN_SIGN) this._emitCurrentToken(), this.state = "DATA_STATE";
      else if (I === g1.QUOTATION_MARK) this.currentToken.systemId = "", this.state = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE";
      else if (I === g1.APOSTROPHE) this.currentToken.systemId = "", this.state = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE";
      else if (I === g1.EOF) this._err(_0.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken();
      else this._err(_0.missingQuoteBeforeDoctypeSystemIdentifier), this.currentToken.forceQuirks = !0, this._reconsumeInState("BOGUS_DOCTYPE_STATE")
    } ["AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE"](I) {
      if (x9(I)) this.state = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE";
      else if (I === g1.QUOTATION_MARK) this._err(_0.missingWhitespaceAfterDoctypeSystemKeyword), this.currentToken.systemId = "", this.state = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE";
      else if (I === g1.APOSTROPHE) this._err(_0.missingWhitespaceAfterDoctypeSystemKeyword), this.currentToken.systemId = "", this.state = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE";
      else if (I === g1.GREATER_THAN_SIGN) this._err(_0.missingDoctypeSystemIdentifier), this.currentToken.forceQuirks = !0, this.state = "DATA_STATE", this._emitCurrentToken();
      else if (I === g1.EOF) this._err(_0.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken();
      else this._err(_0.missingQuoteBeforeDoctypeSystemIdentifier), this.currentToken.forceQuirks = !0, this._reconsumeInState("BOGUS_DOCTYPE_STATE")
    } ["BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE"](I) {
      if (x9(I)) return;
      if (I === g1.QUOTATION_MARK) this.currentToken.systemId = "", this.state = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE";
      else if (I === g1.APOSTROPHE) this.currentToken.systemId = "", this.state = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE";
      else if (I === g1.GREATER_THAN_SIGN) this._err(_0.missingDoctypeSystemIdentifier), this.currentToken.forceQuirks = !0, this.state = "DATA_STATE", this._emitCurrentToken();
      else if (I === g1.EOF) this._err(_0.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken();
      else this._err(_0.missingQuoteBeforeDoctypeSystemIdentifier), this.currentToken.forceQuirks = !0, this._reconsumeInState("BOGUS_DOCTYPE_STATE")
    } ["DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE"](I) {
      if (I === g1.QUOTATION_MARK) this.state = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE";
      else if (I === g1.NULL) this._err(_0.unexpectedNullCharacter), this.currentToken.systemId += D9.REPLACEMENT_CHARACTER;
      else if (I === g1.GREATER_THAN_SIGN) this._err(_0.abruptDoctypeSystemIdentifier), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this.state = "DATA_STATE";
      else if (I === g1.EOF) this._err(_0.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken();
      else this.currentToken.systemId += p3(I)
    } ["DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE"](I) {
      if (I === g1.APOSTROPHE) this.state = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE";
      else if (I === g1.NULL) this._err(_0.unexpectedNullCharacter), this.currentToken.systemId += D9.REPLACEMENT_CHARACTER;
      else if (I === g1.GREATER_THAN_SIGN) this._err(_0.abruptDoctypeSystemIdentifier), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this.state = "DATA_STATE";
      else if (I === g1.EOF) this._err(_0.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken();
      else this.currentToken.systemId += p3(I)
    } ["AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE"](I) {
      if (x9(I)) return;
      if (I === g1.GREATER_THAN_SIGN) this._emitCurrentToken(), this.state = "DATA_STATE";
      else if (I === g1.EOF) this._err(_0.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken();
      else this._err(_0.unexpectedCharacterAfterDoctypeSystemIdentifier), this._reconsumeInState("BOGUS_DOCTYPE_STATE")
    } ["BOGUS_DOCTYPE_STATE"](I) {
      if (I === g1.GREATER_THAN_SIGN) this._emitCurrentToken(), this.state = "DATA_STATE";
      else if (I === g1.NULL) this._err(_0.unexpectedNullCharacter);
      else if (I === g1.EOF) this._emitCurrentToken(), this._emitEOFToken()
    } ["CDATA_SECTION_STATE"](I) {
      if (I === g1.RIGHT_SQUARE_BRACKET) this.state = "CDATA_SECTION_BRACKET_STATE";
      else if (I === g1.EOF) this._err(_0.eofInCdata), this._emitEOFToken();
      else this._emitCodePoint(I)
    } ["CDATA_SECTION_BRACKET_STATE"](I) {
      if (I === g1.RIGHT_SQUARE_BRACKET) this.state = "CDATA_SECTION_END_STATE";
      else this._emitChars("]"), this._reconsumeInState("CDATA_SECTION_STATE")
    } ["CDATA_SECTION_END_STATE"](I) {
      if (I === g1.GREATER_THAN_SIGN) this.state = "DATA_STATE";
      else if (I === g1.RIGHT_SQUARE_BRACKET) this._emitChars("]");
      else this._emitChars("]]"), this._reconsumeInState("CDATA_SECTION_STATE")
    } ["CHARACTER_REFERENCE_STATE"](I) {
      if (this.tempBuff = [g1.AMPERSAND], I === g1.NUMBER_SIGN) this.tempBuff.push(I), this.state = "NUMERIC_CHARACTER_REFERENCE_STATE";
      else if (Gg1(I)) this._reconsumeInState("NAMED_CHARACTER_REFERENCE_STATE");
      else this._flushCodePointsConsumedAsCharacterReference(), this._reconsumeInState(this.returnState)
    } ["NAMED_CHARACTER_REFERENCE_STATE"](I) {
      let d = this._matchNamedCharacterReference(I);
      if (this._ensureHibernation()) this.tempBuff = [g1.AMPERSAND];
      else if (d) {
        let G = this.tempBuff[this.tempBuff.length - 1] === g1.SEMICOLON;
        if (!this._isCharacterReferenceAttributeQuirk(G)) {
          if (!G) this._errOnNextCodePoint(_0.missingSemicolonAfterCharacterReference);
          this.tempBuff = d
        }
        this._flushCodePointsConsumedAsCharacterReference(), this.state = this.returnState
      } else this._flushCodePointsConsumedAsCharacterReference(), this.state = "AMBIGUOS_AMPERSAND_STATE"
    } ["AMBIGUOS_AMPERSAND_STATE"](I) {
      if (Gg1(I))
        if (this._isCharacterReferenceInAttribute()) this.currentAttr.value += p3(I);
        else this._emitCodePoint(I);
      else {
        if (I === g1.SEMICOLON) this._err(_0.unknownNamedCharacterReference);
        this._reconsumeInState(this.returnState)
      }
    } ["NUMERIC_CHARACTER_REFERENCE_STATE"](I) {
      if (this.charRefCode = 0, I === g1.LATIN_SMALL_X || I === g1.LATIN_CAPITAL_X) this.tempBuff.push(I), this.state = "HEXADEMICAL_CHARACTER_REFERENCE_START_STATE";
      else this._reconsumeInState("DECIMAL_CHARACTER_REFERENCE_START_STATE")
    } ["HEXADEMICAL_CHARACTER_REFERENCE_START_STATE"](I) {
      if (K59(I)) this._reconsumeInState("HEXADEMICAL_CHARACTER_REFERENCE_STATE");
      else this._err(_0.absenceOfDigitsInNumericCharacterReference), this._flushCodePointsConsumedAsCharacterReference(), this._reconsumeInState(this.returnState)
    } ["DECIMAL_CHARACTER_REFERENCE_START_STATE"](I) {
      if (v$(I)) this._reconsumeInState("DECIMAL_CHARACTER_REFERENCE_STATE");
      else this._err(_0.absenceOfDigitsInNumericCharacterReference), this._flushCodePointsConsumedAsCharacterReference(), this._reconsumeInState(this.returnState)
    } ["HEXADEMICAL_CHARACTER_REFERENCE_STATE"](I) {
      if (GH2(I)) this.charRefCode = this.charRefCode * 16 + I - 55;
      else if (ZH2(I)) this.charRefCode = this.charRefCode * 16 + I - 87;
      else if (v$(I)) this.charRefCode = this.charRefCode * 16 + I - 48;
      else if (I === g1.SEMICOLON) this.state = "NUMERIC_CHARACTER_REFERENCE_END_STATE";
      else this._err(_0.missingSemicolonAfterCharacterReference), this._reconsumeInState("NUMERIC_CHARACTER_REFERENCE_END_STATE")
    } ["DECIMAL_CHARACTER_REFERENCE_STATE"](I) {
      if (v$(I)) this.charRefCode = this.charRefCode * 10 + I - 48;
      else if (I === g1.SEMICOLON) this.state = "NUMERIC_CHARACTER_REFERENCE_END_STATE";
      else this._err(_0.missingSemicolonAfterCharacterReference), this._reconsumeInState("NUMERIC_CHARACTER_REFERENCE_END_STATE")
    } ["NUMERIC_CHARACTER_REFERENCE_END_STATE"]() {
      if (this.charRefCode === g1.NULL) this._err(_0.nullCharacterReference), this.charRefCode = g1.REPLACEMENT_CHARACTER;
      else if (this.charRefCode > 1114111) this._err(_0.characterReferenceOutsideUnicodeRange), this.charRefCode = g1.REPLACEMENT_CHARACTER;
      else if (D9.isSurrogate(this.charRefCode)) this._err(_0.surrogateCharacterReference), this.charRefCode = g1.REPLACEMENT_CHARACTER;
      else if (D9.isUndefinedCodePoint(this.charRefCode)) this._err(_0.noncharacterCharacterReference);
      else if (D9.isControlCodePoint(this.charRefCode) || this.charRefCode === g1.CARRIAGE_RETURN) {
        this._err(_0.controlCharacterReference);
        let I = J59[this.charRefCode];
        if (I) this.charRefCode = I
      }
      this.tempBuff = [this.charRefCode], this._flushCodePointsConsumedAsCharacterReference(), this._reconsumeInState(this.returnState)
    }
  }
  $9.CHARACTER_TOKEN = "CHARACTER_TOKEN";
  $9.NULL_CHARACTER_TOKEN = "NULL_CHARACTER_TOKEN";
  $9.WHITESPACE_CHARACTER_TOKEN = "WHITESPACE_CHARACTER_TOKEN";
  $9.START_TAG_TOKEN = "START_TAG_TOKEN";
  $9.END_TAG_TOKEN = "END_TAG_TOKEN";
  $9.COMMENT_TOKEN = "COMMENT_TOKEN";
  $9.DOCTYPE_TOKEN = "DOCTYPE_TOKEN";
  $9.EOF_TOKEN = "EOF_TOKEN";
  $9.HIBERNATION_TOKEN = "HIBERNATION_TOKEN";
  $9.MODE = {
    DATA: "DATA_STATE",
    RCDATA: "RCDATA_STATE",
    RAWTEXT: "RAWTEXT_STATE",
    SCRIPT_DATA: "SCRIPT_DATA_STATE",
    PLAINTEXT: "PLAINTEXT_STATE"
  };
  $9.getTokenAttr = function(I, d) {
    for (let G = I.attrs.length - 1; G >= 0; G--)
      if (I.attrs[G].name === d) return I.attrs[G].value;
    return null
  };
  CH2.exports = $9
})
// @from(Start 5100594, End 5105673)
WH = Y((N59) => {
  var Zg1 = N59.NAMESPACES = {
    HTML: "http://www.w3.org/1999/xhtml",
    MATHML: "http://www.w3.org/1998/Math/MathML",
    SVG: "http://www.w3.org/2000/svg",
    XLINK: "http://www.w3.org/1999/xlink",
    XML: "http://www.w3.org/XML/1998/namespace",
    XMLNS: "http://www.w3.org/2000/xmlns/"
  };
  N59.ATTRS = {
    TYPE: "type",
    ACTION: "action",
    ENCODING: "encoding",
    PROMPT: "prompt",
    NAME: "name",
    COLOR: "color",
    FACE: "face",
    SIZE: "size"
  };
  N59.DOCUMENT_MODE = {
    NO_QUIRKS: "no-quirks",
    QUIRKS: "quirks",
    LIMITED_QUIRKS: "limited-quirks"
  };
  var l0 = N59.TAG_NAMES = {
    A: "a",
    ADDRESS: "address",
    ANNOTATION_XML: "annotation-xml",
    APPLET: "applet",
    AREA: "area",
    ARTICLE: "article",
    ASIDE: "aside",
    B: "b",
    BASE: "base",
    BASEFONT: "basefont",
    BGSOUND: "bgsound",
    BIG: "big",
    BLOCKQUOTE: "blockquote",
    BODY: "body",
    BR: "br",
    BUTTON: "button",
    CAPTION: "caption",
    CENTER: "center",
    CODE: "code",
    COL: "col",
    COLGROUP: "colgroup",
    DD: "dd",
    DESC: "desc",
    DETAILS: "details",
    DIALOG: "dialog",
    DIR: "dir",
    DIV: "div",
    DL: "dl",
    DT: "dt",
    EM: "em",
    EMBED: "embed",
    FIELDSET: "fieldset",
    FIGCAPTION: "figcaption",
    FIGURE: "figure",
    FONT: "font",
    FOOTER: "footer",
    FOREIGN_OBJECT: "foreignObject",
    FORM: "form",
    FRAME: "frame",
    FRAMESET: "frameset",
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
    HEAD: "head",
    HEADER: "header",
    HGROUP: "hgroup",
    HR: "hr",
    HTML: "html",
    I: "i",
    IMG: "img",
    IMAGE: "image",
    INPUT: "input",
    IFRAME: "iframe",
    KEYGEN: "keygen",
    LABEL: "label",
    LI: "li",
    LINK: "link",
    LISTING: "listing",
    MAIN: "main",
    MALIGNMARK: "malignmark",
    MARQUEE: "marquee",
    MATH: "math",
    MENU: "menu",
    META: "meta",
    MGLYPH: "mglyph",
    MI: "mi",
    MO: "mo",
    MN: "mn",
    MS: "ms",
    MTEXT: "mtext",
    NAV: "nav",
    NOBR: "nobr",
    NOFRAMES: "noframes",
    NOEMBED: "noembed",
    NOSCRIPT: "noscript",
    OBJECT: "object",
    OL: "ol",
    OPTGROUP: "optgroup",
    OPTION: "option",
    P: "p",
    PARAM: "param",
    PLAINTEXT: "plaintext",
    PRE: "pre",
    RB: "rb",
    RP: "rp",
    RT: "rt",
    RTC: "rtc",
    RUBY: "ruby",
    S: "s",
    SCRIPT: "script",
    SECTION: "section",
    SELECT: "select",
    SOURCE: "source",
    SMALL: "small",
    SPAN: "span",
    STRIKE: "strike",
    STRONG: "strong",
    STYLE: "style",
    SUB: "sub",
    SUMMARY: "summary",
    SUP: "sup",
    TABLE: "table",
    TBODY: "tbody",
    TEMPLATE: "template",
    TEXTAREA: "textarea",
    TFOOT: "tfoot",
    TD: "td",
    TH: "th",
    THEAD: "thead",
    TITLE: "title",
    TR: "tr",
    TRACK: "track",
    TT: "tt",
    U: "u",
    UL: "ul",
    SVG: "svg",
    VAR: "var",
    WBR: "wbr",
    XMP: "xmp"
  };
  N59.SPECIAL_ELEMENTS = {
    [Zg1.HTML]: {
      [l0.ADDRESS]: !0,
      [l0.APPLET]: !0,
      [l0.AREA]: !0,
      [l0.ARTICLE]: !0,
      [l0.ASIDE]: !0,
      [l0.BASE]: !0,
      [l0.BASEFONT]: !0,
      [l0.BGSOUND]: !0,
      [l0.BLOCKQUOTE]: !0,
      [l0.BODY]: !0,
      [l0.BR]: !0,
      [l0.BUTTON]: !0,
      [l0.CAPTION]: !0,
      [l0.CENTER]: !0,
      [l0.COL]: !0,
      [l0.COLGROUP]: !0,
      [l0.DD]: !0,
      [l0.DETAILS]: !0,
      [l0.DIR]: !0,
      [l0.DIV]: !0,
      [l0.DL]: !0,
      [l0.DT]: !0,
      [l0.EMBED]: !0,
      [l0.FIELDSET]: !0,
      [l0.FIGCAPTION]: !0,
      [l0.FIGURE]: !0,
      [l0.FOOTER]: !0,
      [l0.FORM]: !0,
      [l0.FRAME]: !0,
      [l0.FRAMESET]: !0,
      [l0.H1]: !0,
      [l0.H2]: !0,
      [l0.H3]: !0,
      [l0.H4]: !0,
      [l0.H5]: !0,
      [l0.H6]: !0,
      [l0.HEAD]: !0,
      [l0.HEADER]: !0,
      [l0.HGROUP]: !0,
      [l0.HR]: !0,
      [l0.HTML]: !0,
      [l0.IFRAME]: !0,
      [l0.IMG]: !0,
      [l0.INPUT]: !0,
      [l0.LI]: !0,
      [l0.LINK]: !0,
      [l0.LISTING]: !0,
      [l0.MAIN]: !0,
      [l0.MARQUEE]: !0,
      [l0.MENU]: !0,
      [l0.META]: !0,
      [l0.NAV]: !0,
      [l0.NOEMBED]: !0,
      [l0.NOFRAMES]: !0,
      [l0.NOSCRIPT]: !0,
      [l0.OBJECT]: !0,
      [l0.OL]: !0,
      [l0.P]: !0,
      [l0.PARAM]: !0,
      [l0.PLAINTEXT]: !0,
      [l0.PRE]: !0,
      [l0.SCRIPT]: !0,
      [l0.SECTION]: !0,
      [l0.SELECT]: !0,
      [l0.SOURCE]: !0,
      [l0.STYLE]: !0,
      [l0.SUMMARY]: !0,
      [l0.TABLE]: !0,
      [l0.TBODY]: !0,
      [l0.TD]: !0,
      [l0.TEMPLATE]: !0,
      [l0.TEXTAREA]: !0,
      [l0.TFOOT]: !0,
      [l0.TH]: !0,
      [l0.THEAD]: !0,
      [l0.TITLE]: !0,
      [l0.TR]: !0,
      [l0.TRACK]: !0,
      [l0.UL]: !0,
      [l0.WBR]: !0,
      [l0.XMP]: !0
    },
    [Zg1.MATHML]: {
      [l0.MI]: !0,
      [l0.MO]: !0,
      [l0.MN]: !0,
      [l0.MS]: !0,
      [l0.MTEXT]: !0,
      [l0.ANNOTATION_XML]: !0
    },
    [Zg1.SVG]: {
      [l0.TITLE]: !0,
      [l0.FOREIGN_OBJECT]: !0,
      [l0.DESC]: !0
    }
  }
})
// @from(Start 5105679, End 5114299)
VH2 = Y((BJ3, AH2) => {
  var wH2 = WH(),
    k0 = wH2.TAG_NAMES,
    H9 = wH2.NAMESPACES;

  function WH2(I) {
    switch (I.length) {
      case 1:
        return I === k0.P;
      case 2:
        return I === k0.RB || I === k0.RP || I === k0.RT || I === k0.DD || I === k0.DT || I === k0.LI;
      case 3:
        return I === k0.RTC;
      case 6:
        return I === k0.OPTION;
      case 8:
        return I === k0.OPTGROUP
    }
    return !1
  }

  function q59(I) {
    switch (I.length) {
      case 1:
        return I === k0.P;
      case 2:
        return I === k0.RB || I === k0.RP || I === k0.RT || I === k0.DD || I === k0.DT || I === k0.LI || I === k0.TD || I === k0.TH || I === k0.TR;
      case 3:
        return I === k0.RTC;
      case 5:
        return I === k0.TBODY || I === k0.TFOOT || I === k0.THEAD;
      case 6:
        return I === k0.OPTION;
      case 7:
        return I === k0.CAPTION;
      case 8:
        return I === k0.OPTGROUP || I === k0.COLGROUP
    }
    return !1
  }

  function ja(I, d) {
    switch (I.length) {
      case 2:
        if (I === k0.TD || I === k0.TH) return d === H9.HTML;
        else if (I === k0.MI || I === k0.MO || I === k0.MN || I === k0.MS) return d === H9.MATHML;
        break;
      case 4:
        if (I === k0.HTML) return d === H9.HTML;
        else if (I === k0.DESC) return d === H9.SVG;
        break;
      case 5:
        if (I === k0.TABLE) return d === H9.HTML;
        else if (I === k0.MTEXT) return d === H9.MATHML;
        else if (I === k0.TITLE) return d === H9.SVG;
        break;
      case 6:
        return (I === k0.APPLET || I === k0.OBJECT) && d === H9.HTML;
      case 7:
        return (I === k0.CAPTION || I === k0.MARQUEE) && d === H9.HTML;
      case 8:
        return I === k0.TEMPLATE && d === H9.HTML;
      case 13:
        return I === k0.FOREIGN_OBJECT && d === H9.SVG;
      case 14:
        return I === k0.ANNOTATION_XML && d === H9.MATHML
    }
    return !1
  }
  class BH2 {
    constructor(I, d) {
      this.stackTop = -1, this.items = [], this.current = I, this.currentTagName = null, this.currentTmplContent = null, this.tmplCount = 0, this.treeAdapter = d
    }
    _indexOf(I) {
      let d = -1;
      for (let G = this.stackTop; G >= 0; G--)
        if (this.items[G] === I) {
          d = G;
          break
        } return d
    }
    _isInTemplate() {
      return this.currentTagName === k0.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === H9.HTML
    }
    _updateCurrentElement() {
      this.current = this.items[this.stackTop], this.currentTagName = this.current && this.treeAdapter.getTagName(this.current), this.currentTmplContent = this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : null
    }
    push(I) {
      if (this.items[++this.stackTop] = I, this._updateCurrentElement(), this._isInTemplate()) this.tmplCount++
    }
    pop() {
      if (this.stackTop--, this.tmplCount > 0 && this._isInTemplate()) this.tmplCount--;
      this._updateCurrentElement()
    }
    replace(I, d) {
      let G = this._indexOf(I);
      if (this.items[G] = d, G === this.stackTop) this._updateCurrentElement()
    }
    insertAfter(I, d) {
      let G = this._indexOf(I) + 1;
      if (this.items.splice(G, 0, d), G === ++this.stackTop) this._updateCurrentElement()
    }
    popUntilTagNamePopped(I) {
      while (this.stackTop > -1) {
        let d = this.currentTagName,
          G = this.treeAdapter.getNamespaceURI(this.current);
        if (this.pop(), d === I && G === H9.HTML) break
      }
    }
    popUntilElementPopped(I) {
      while (this.stackTop > -1) {
        let d = this.current;
        if (this.pop(), d === I) break
      }
    }
    popUntilNumberedHeaderPopped() {
      while (this.stackTop > -1) {
        let I = this.currentTagName,
          d = this.treeAdapter.getNamespaceURI(this.current);
        if (this.pop(), I === k0.H1 || I === k0.H2 || I === k0.H3 || I === k0.H4 || I === k0.H5 || I === k0.H6 && d === H9.HTML) break
      }
    }
    popUntilTableCellPopped() {
      while (this.stackTop > -1) {
        let I = this.currentTagName,
          d = this.treeAdapter.getNamespaceURI(this.current);
        if (this.pop(), I === k0.TD || I === k0.TH && d === H9.HTML) break
      }
    }
    popAllUpToHtmlElement() {
      this.stackTop = 0, this._updateCurrentElement()
    }
    clearBackToTableContext() {
      while (this.currentTagName !== k0.TABLE && this.currentTagName !== k0.TEMPLATE && this.currentTagName !== k0.HTML || this.treeAdapter.getNamespaceURI(this.current) !== H9.HTML) this.pop()
    }
    clearBackToTableBodyContext() {
      while (this.currentTagName !== k0.TBODY && this.currentTagName !== k0.TFOOT && this.currentTagName !== k0.THEAD && this.currentTagName !== k0.TEMPLATE && this.currentTagName !== k0.HTML || this.treeAdapter.getNamespaceURI(this.current) !== H9.HTML) this.pop()
    }
    clearBackToTableRowContext() {
      while (this.currentTagName !== k0.TR && this.currentTagName !== k0.TEMPLATE && this.currentTagName !== k0.HTML || this.treeAdapter.getNamespaceURI(this.current) !== H9.HTML) this.pop()
    }
    remove(I) {
      for (let d = this.stackTop; d >= 0; d--)
        if (this.items[d] === I) {
          this.items.splice(d, 1), this.stackTop--, this._updateCurrentElement();
          break
        }
    }
    tryPeekProperlyNestedBodyElement() {
      let I = this.items[1];
      return I && this.treeAdapter.getTagName(I) === k0.BODY ? I : null
    }
    contains(I) {
      return this._indexOf(I) > -1
    }
    getCommonAncestor(I) {
      let d = this._indexOf(I);
      return --d >= 0 ? this.items[d] : null
    }
    isRootHtmlElementCurrent() {
      return this.stackTop === 0 && this.currentTagName === k0.HTML
    }
    hasInScope(I) {
      for (let d = this.stackTop; d >= 0; d--) {
        let G = this.treeAdapter.getTagName(this.items[d]),
          Z = this.treeAdapter.getNamespaceURI(this.items[d]);
        if (G === I && Z === H9.HTML) return !0;
        if (ja(G, Z)) return !1
      }
      return !0
    }
    hasNumberedHeaderInScope() {
      for (let I = this.stackTop; I >= 0; I--) {
        let d = this.treeAdapter.getTagName(this.items[I]),
          G = this.treeAdapter.getNamespaceURI(this.items[I]);
        if ((d === k0.H1 || d === k0.H2 || d === k0.H3 || d === k0.H4 || d === k0.H5 || d === k0.H6) && G === H9.HTML) return !0;
        if (ja(d, G)) return !1
      }
      return !0
    }
    hasInListItemScope(I) {
      for (let d = this.stackTop; d >= 0; d--) {
        let G = this.treeAdapter.getTagName(this.items[d]),
          Z = this.treeAdapter.getNamespaceURI(this.items[d]);
        if (G === I && Z === H9.HTML) return !0;
        if ((G === k0.UL || G === k0.OL) && Z === H9.HTML || ja(G, Z)) return !1
      }
      return !0
    }
    hasInButtonScope(I) {
      for (let d = this.stackTop; d >= 0; d--) {
        let G = this.treeAdapter.getTagName(this.items[d]),
          Z = this.treeAdapter.getNamespaceURI(this.items[d]);
        if (G === I && Z === H9.HTML) return !0;
        if (G === k0.BUTTON && Z === H9.HTML || ja(G, Z)) return !1
      }
      return !0
    }
    hasInTableScope(I) {
      for (let d = this.stackTop; d >= 0; d--) {
        let G = this.treeAdapter.getTagName(this.items[d]);
        if (this.treeAdapter.getNamespaceURI(this.items[d]) !== H9.HTML) continue;
        if (G === I) return !0;
        if (G === k0.TABLE || G === k0.TEMPLATE || G === k0.HTML) return !1
      }
      return !0
    }
    hasTableBodyContextInTableScope() {
      for (let I = this.stackTop; I >= 0; I--) {
        let d = this.treeAdapter.getTagName(this.items[I]);
        if (this.treeAdapter.getNamespaceURI(this.items[I]) !== H9.HTML) continue;
        if (d === k0.TBODY || d === k0.THEAD || d === k0.TFOOT) return !0;
        if (d === k0.TABLE || d === k0.HTML) return !1
      }
      return !0
    }
    hasInSelectScope(I) {
      for (let d = this.stackTop; d >= 0; d--) {
        let G = this.treeAdapter.getTagName(this.items[d]);
        if (this.treeAdapter.getNamespaceURI(this.items[d]) !== H9.HTML) continue;
        if (G === I) return !0;
        if (G !== k0.OPTION && G !== k0.OPTGROUP) return !1
      }
      return !0
    }
    generateImpliedEndTags() {
      while (WH2(this.currentTagName)) this.pop()
    }
    generateImpliedEndTagsThoroughly() {
      while (q59(this.currentTagName)) this.pop()
    }
    generateImpliedEndTagsWithExclusion(I) {
      while (WH2(this.currentTagName) && this.currentTagName !== I) this.pop()
    }
  }
  AH2.exports = BH2
})
// @from(Start 5114305, End 5117324)
YH2 = Y((AJ3, XH2) => {
  class HW {
    constructor(I) {
      this.length = 0, this.entries = [], this.treeAdapter = I, this.bookmark = null
    }
    _getNoahArkConditionCandidates(I) {
      let d = [];
      if (this.length >= 3) {
        let G = this.treeAdapter.getAttrList(I).length,
          Z = this.treeAdapter.getTagName(I),
          C = this.treeAdapter.getNamespaceURI(I);
        for (let W = this.length - 1; W >= 0; W--) {
          let w = this.entries[W];
          if (w.type === HW.MARKER_ENTRY) break;
          let B = w.element,
            A = this.treeAdapter.getAttrList(B);
          if (this.treeAdapter.getTagName(B) === Z && this.treeAdapter.getNamespaceURI(B) === C && A.length === G) d.push({
            idx: W,
            attrs: A
          })
        }
      }
      return d.length < 3 ? [] : d
    }
    _ensureNoahArkCondition(I) {
      let d = this._getNoahArkConditionCandidates(I),
        G = d.length;
      if (G) {
        let Z = this.treeAdapter.getAttrList(I),
          C = Z.length,
          W = Object.create(null);
        for (let w = 0; w < C; w++) {
          let B = Z[w];
          W[B.name] = B.value
        }
        for (let w = 0; w < C; w++)
          for (let B = 0; B < G; B++) {
            let A = d[B].attrs[w];
            if (W[A.name] !== A.value) d.splice(B, 1), G--;
            if (d.length < 3) return
          }
        for (let w = G - 1; w >= 2; w--) this.entries.splice(d[w].idx, 1), this.length--
      }
    }
    insertMarker() {
      this.entries.push({
        type: HW.MARKER_ENTRY
      }), this.length++
    }
    pushElement(I, d) {
      this._ensureNoahArkCondition(I), this.entries.push({
        type: HW.ELEMENT_ENTRY,
        element: I,
        token: d
      }), this.length++
    }
    insertElementAfterBookmark(I, d) {
      let G = this.length - 1;
      for (; G >= 0; G--)
        if (this.entries[G] === this.bookmark) break;
      this.entries.splice(G + 1, 0, {
        type: HW.ELEMENT_ENTRY,
        element: I,
        token: d
      }), this.length++
    }
    removeEntry(I) {
      for (let d = this.length - 1; d >= 0; d--)
        if (this.entries[d] === I) {
          this.entries.splice(d, 1), this.length--;
          break
        }
    }
    clearToLastMarker() {
      while (this.length) {
        let I = this.entries.pop();
        if (this.length--, I.type === HW.MARKER_ENTRY) break
      }
    }
    getElementEntryInScopeWithTagName(I) {
      for (let d = this.length - 1; d >= 0; d--) {
        let G = this.entries[d];
        if (G.type === HW.MARKER_ENTRY) return null;
        if (this.treeAdapter.getTagName(G.element) === I) return G
      }
      return null
    }
    getElementEntry(I) {
      for (let d = this.length - 1; d >= 0; d--) {
        let G = this.entries[d];
        if (G.type === HW.ELEMENT_ENTRY && G.element === I) return G
      }
      return null
    }
  }
  HW.MARKER_ENTRY = "MARKER_ENTRY";
  HW.ELEMENT_ENTRY = "ELEMENT_ENTRY";
  XH2.exports = HW
})
// @from(Start 5117330, End 5117915)
SB = Y((VJ3, _H2) => {
  class Cg1 {
    constructor(I) {
      let d = {},
        G = this._getOverriddenMethods(this, d);
      for (let Z of Object.keys(G))
        if (typeof G[Z] === "function") d[Z] = I[Z], I[Z] = G[Z]
    }
    _getOverriddenMethods() {
      throw new Error("Not implemented")
    }
  }
  Cg1.install = function(I, d, G) {
    if (!I.__mixins) I.__mixins = [];
    for (let C = 0; C < I.__mixins.length; C++)
      if (I.__mixins[C].constructor === d) return I.__mixins[C];
    let Z = new d(I, G);
    return I.__mixins.push(Z), Z
  };
  _H2.exports = Cg1
})
// @from(Start 5117921, End 5118962)
Wg1 = Y((XJ3, HH2) => {
  var R59 = SB();
  class DH2 extends R59 {
    constructor(I) {
      super(I);
      this.preprocessor = I, this.isEol = !1, this.lineStartPos = 0, this.droppedBufferSize = 0, this.offset = 0, this.col = 0, this.line = 1
    }
    _getOverriddenMethods(I, d) {
      return {
        advance() {
          let G = this.pos + 1,
            Z = this.html[G];
          if (I.isEol) I.isEol = !1, I.line++, I.lineStartPos = G;
          if (Z === `
` || Z === "\r" && this.html[G + 1] !== `
`) I.isEol = !0;
          return I.col = G - I.lineStartPos + 1, I.offset = I.droppedBufferSize + G, d.advance.call(this)
        },
        retreat() {
          d.retreat.call(this), I.isEol = !1, I.col = this.pos - I.lineStartPos + 1
        },
        dropParsedChunk() {
          let G = this.pos;
          d.dropParsedChunk.call(this);
          let Z = G - this.pos;
          I.lineStartPos -= Z, I.droppedBufferSize += Z, I.offset = I.droppedBufferSize + this.pos
        }
      }
    }
  }
  HH2.exports = DH2
})
// @from(Start 5118968, End 5122261)
Bg1 = Y((YJ3, JH2) => {
  var FH2 = SB(),
    wg1 = E$(),
    U59 = Wg1();
  class gH2 extends FH2 {
    constructor(I) {
      super(I);
      this.tokenizer = I, this.posTracker = FH2.install(I.preprocessor, U59), this.currentAttrLocation = null, this.ctLoc = null
    }
    _getCurrentLocation() {
      return {
        startLine: this.posTracker.line,
        startCol: this.posTracker.col,
        startOffset: this.posTracker.offset,
        endLine: -1,
        endCol: -1,
        endOffset: -1
      }
    }
    _attachCurrentAttrLocationInfo() {
      this.currentAttrLocation.endLine = this.posTracker.line, this.currentAttrLocation.endCol = this.posTracker.col, this.currentAttrLocation.endOffset = this.posTracker.offset;
      let I = this.tokenizer.currentToken,
        d = this.tokenizer.currentAttr;
      if (!I.location.attrs) I.location.attrs = Object.create(null);
      I.location.attrs[d.name] = this.currentAttrLocation
    }
    _getOverriddenMethods(I, d) {
      let G = {
        _createStartTagToken() {
          d._createStartTagToken.call(this), this.currentToken.location = I.ctLoc
        },
        _createEndTagToken() {
          d._createEndTagToken.call(this), this.currentToken.location = I.ctLoc
        },
        _createCommentToken() {
          d._createCommentToken.call(this), this.currentToken.location = I.ctLoc
        },
        _createDoctypeToken(Z) {
          d._createDoctypeToken.call(this, Z), this.currentToken.location = I.ctLoc
        },
        _createCharacterToken(Z, C) {
          d._createCharacterToken.call(this, Z, C), this.currentCharacterToken.location = I.ctLoc
        },
        _createEOFToken() {
          d._createEOFToken.call(this), this.currentToken.location = I._getCurrentLocation()
        },
        _createAttr(Z) {
          d._createAttr.call(this, Z), I.currentAttrLocation = I._getCurrentLocation()
        },
        _leaveAttrName(Z) {
          d._leaveAttrName.call(this, Z), I._attachCurrentAttrLocationInfo()
        },
        _leaveAttrValue(Z) {
          d._leaveAttrValue.call(this, Z), I._attachCurrentAttrLocationInfo()
        },
        _emitCurrentToken() {
          let Z = this.currentToken.location;
          if (this.currentCharacterToken) this.currentCharacterToken.location.endLine = Z.startLine, this.currentCharacterToken.location.endCol = Z.startCol, this.currentCharacterToken.location.endOffset = Z.startOffset;
          if (this.currentToken.type === wg1.EOF_TOKEN) Z.endLine = Z.startLine, Z.endCol = Z.startCol, Z.endOffset = Z.startOffset;
          else Z.endLine = I.posTracker.line, Z.endCol = I.posTracker.col + 1, Z.endOffset = I.posTracker.offset + 1;
          d._emitCurrentToken.call(this)
        },
        _emitCurrentCharacterToken() {
          let Z = this.currentCharacterToken && this.currentCharacterToken.location;
          if (Z && Z.endOffset === -1) Z.endLine = I.posTracker.line, Z.endCol = I.posTracker.col, Z.endOffset = I.posTracker.offset;
          d._emitCurrentCharacterToken.call(this)
        }
      };
      return Object.keys(wg1.MODE).forEach((Z) => {
        let C = wg1.MODE[Z];
        G[C] = function(W) {
          I.ctLoc = I._getCurrentLocation(), d[C].call(this, W)
        }
      }), G
    }
  }
  JH2.exports = gH2
})
// @from(Start 5122267, End 5122844)
zH2 = Y((_J3, NH2) => {
  var v59 = SB();
  class KH2 extends v59 {
    constructor(I, d) {
      super(I);
      this.onItemPop = d.onItemPop
    }
    _getOverriddenMethods(I, d) {
      return {
        pop() {
          I.onItemPop(this.current), d.pop.call(this)
        },
        popAllUpToHtmlElement() {
          for (let G = this.stackTop; G > 0; G--) I.onItemPop(this.items[G]);
          d.popAllUpToHtmlElement.call(this)
        },
        remove(G) {
          I.onItemPop(this.current), d.remove.call(this, G)
        }
      }
    }
  }
  NH2.exports = KH2
})
// @from(Start 5122850, End 5127686)
RH2 = Y((DJ3, qH2) => {
  var Ag1 = SB(),
    QH2 = E$(),
    E59 = Bg1(),
    M59 = zH2(),
    S59 = WH(),
    Vg1 = S59.TAG_NAMES;
  class fH2 extends Ag1 {
    constructor(I) {
      super(I);
      this.parser = I, this.treeAdapter = this.parser.treeAdapter, this.posTracker = null, this.lastStartTagToken = null, this.lastFosterParentingLocation = null, this.currentToken = null
    }
    _setStartLocation(I) {
      let d = null;
      if (this.lastStartTagToken) d = Object.assign({}, this.lastStartTagToken.location), d.startTag = this.lastStartTagToken.location;
      this.treeAdapter.setNodeSourceCodeLocation(I, d)
    }
    _setEndLocation(I, d) {
      let G = this.treeAdapter.getNodeSourceCodeLocation(I);
      if (G) {
        if (d.location) {
          let Z = d.location,
            C = this.treeAdapter.getTagName(I);
          if (d.type === QH2.END_TAG_TOKEN && C === d.tagName) G.endTag = Object.assign({}, Z), G.endLine = Z.endLine, G.endCol = Z.endCol, G.endOffset = Z.endOffset;
          else G.endLine = Z.startLine, G.endCol = Z.startCol, G.endOffset = Z.startOffset
        }
      }
    }
    _getOverriddenMethods(I, d) {
      return {
        _bootstrap(G, Z) {
          d._bootstrap.call(this, G, Z), I.lastStartTagToken = null, I.lastFosterParentingLocation = null, I.currentToken = null;
          let C = Ag1.install(this.tokenizer, E59);
          I.posTracker = C.posTracker, Ag1.install(this.openElements, M59, {
            onItemPop: function(W) {
              I._setEndLocation(W, I.currentToken)
            }
          })
        },
        _runParsingLoop(G) {
          d._runParsingLoop.call(this, G);
          for (let Z = this.openElements.stackTop; Z >= 0; Z--) I._setEndLocation(this.openElements.items[Z], I.currentToken)
        },
        _processTokenInForeignContent(G) {
          I.currentToken = G, d._processTokenInForeignContent.call(this, G)
        },
        _processToken(G) {
          if (I.currentToken = G, d._processToken.call(this, G), G.type === QH2.END_TAG_TOKEN && (G.tagName === Vg1.HTML || G.tagName === Vg1.BODY && this.openElements.hasInScope(Vg1.BODY)))
            for (let C = this.openElements.stackTop; C >= 0; C--) {
              let W = this.openElements.items[C];
              if (this.treeAdapter.getTagName(W) === G.tagName) {
                I._setEndLocation(W, G);
                break
              }
            }
        },
        _setDocumentType(G) {
          d._setDocumentType.call(this, G);
          let Z = this.treeAdapter.getChildNodes(this.document),
            C = Z.length;
          for (let W = 0; W < C; W++) {
            let w = Z[W];
            if (this.treeAdapter.isDocumentTypeNode(w)) {
              this.treeAdapter.setNodeSourceCodeLocation(w, G.location);
              break
            }
          }
        },
        _attachElementToTree(G) {
          I._setStartLocation(G), I.lastStartTagToken = null, d._attachElementToTree.call(this, G)
        },
        _appendElement(G, Z) {
          I.lastStartTagToken = G, d._appendElement.call(this, G, Z)
        },
        _insertElement(G, Z) {
          I.lastStartTagToken = G, d._insertElement.call(this, G, Z)
        },
        _insertTemplate(G) {
          I.lastStartTagToken = G, d._insertTemplate.call(this, G);
          let Z = this.treeAdapter.getTemplateContent(this.openElements.current);
          this.treeAdapter.setNodeSourceCodeLocation(Z, null)
        },
        _insertFakeRootElement() {
          d._insertFakeRootElement.call(this), this.treeAdapter.setNodeSourceCodeLocation(this.openElements.current, null)
        },
        _appendCommentNode(G, Z) {
          d._appendCommentNode.call(this, G, Z);
          let C = this.treeAdapter.getChildNodes(Z),
            W = C[C.length - 1];
          this.treeAdapter.setNodeSourceCodeLocation(W, G.location)
        },
        _findFosterParentingLocation() {
          return I.lastFosterParentingLocation = d._findFosterParentingLocation.call(this), I.lastFosterParentingLocation
        },
        _insertCharacters(G) {
          d._insertCharacters.call(this, G);
          let Z = this._shouldFosterParentOnInsertion(),
            C = Z && I.lastFosterParentingLocation.parent || this.openElements.currentTmplContent || this.openElements.current,
            W = this.treeAdapter.getChildNodes(C),
            w = Z && I.lastFosterParentingLocation.beforeElement ? W.indexOf(I.lastFosterParentingLocation.beforeElement) - 1 : W.length - 1,
            B = W[w],
            A = this.treeAdapter.getNodeSourceCodeLocation(B);
          if (A) A.endLine = G.location.endLine, A.endCol = G.location.endCol, A.endOffset = G.location.endOffset;
          else this.treeAdapter.setNodeSourceCodeLocation(B, G.location)
        }
      }
    }
  }
  qH2.exports = fH2
})
// @from(Start 5127692, End 5128454)
ka = Y((HJ3, vH2) => {
  var L59 = SB();
  class UH2 extends L59 {
    constructor(I, d) {
      super(I);
      this.posTracker = null, this.onParseError = d.onParseError
    }
    _setErrorLocation(I) {
      I.startLine = I.endLine = this.posTracker.line, I.startCol = I.endCol = this.posTracker.col, I.startOffset = I.endOffset = this.posTracker.offset
    }
    _reportError(I) {
      let d = {
        code: I,
        startLine: -1,
        startCol: -1,
        startOffset: -1,
        endLine: -1,
        endCol: -1,
        endOffset: -1
      };
      this._setErrorLocation(d), this.onParseError(d)
    }
    _getOverriddenMethods(I) {
      return {
        _err(d) {
          I._reportError(d)
        }
      }
    }
  }
  vH2.exports = UH2
})
// @from(Start 5128460, End 5128857)
SH2 = Y((FJ3, MH2) => {
  var y59 = ka(),
    P59 = Wg1(),
    $59 = SB();
  class EH2 extends y59 {
    constructor(I, d) {
      super(I, d);
      this.posTracker = $59.install(I, P59), this.lastErrOffset = -1
    }
    _reportError(I) {
      if (this.lastErrOffset !== this.posTracker.offset) this.lastErrOffset = this.posTracker.offset, super._reportError(I)
    }
  }
  MH2.exports = EH2
})
// @from(Start 5128863, End 5129127)
PH2 = Y((gJ3, yH2) => {
  var u59 = ka(),
    T59 = SH2(),
    O59 = SB();
  class LH2 extends u59 {
    constructor(I, d) {
      super(I, d);
      let G = O59.install(I.preprocessor, T59, d);
      this.posTracker = G.posTracker
    }
  }
  yH2.exports = LH2
})
// @from(Start 5129133, End 5130214)
OH2 = Y((JJ3, TH2) => {
  var m59 = ka(),
    l59 = PH2(),
    b59 = Bg1(),
    $H2 = SB();
  class uH2 extends m59 {
    constructor(I, d) {
      super(I, d);
      this.opts = d, this.ctLoc = null, this.locBeforeToken = !1
    }
    _setErrorLocation(I) {
      if (this.ctLoc) I.startLine = this.ctLoc.startLine, I.startCol = this.ctLoc.startCol, I.startOffset = this.ctLoc.startOffset, I.endLine = this.locBeforeToken ? this.ctLoc.startLine : this.ctLoc.endLine, I.endCol = this.locBeforeToken ? this.ctLoc.startCol : this.ctLoc.endCol, I.endOffset = this.locBeforeToken ? this.ctLoc.startOffset : this.ctLoc.endOffset
    }
    _getOverriddenMethods(I, d) {
      return {
        _bootstrap(G, Z) {
          d._bootstrap.call(this, G, Z), $H2.install(this.tokenizer, l59, I.opts), $H2.install(this.tokenizer, b59)
        },
        _processInputToken(G) {
          I.ctLoc = G.location, d._processInputToken.call(this, G)
        },
        _err(G, Z) {
          I.locBeforeToken = Z && Z.beforeToken, I._reportError(G)
        }
      }
    }
  }
  TH2.exports = uH2
})
// @from(Start 5130220, End 5133917)
Xg1 = Y((k59) => {
  var {
    DOCUMENT_MODE: h59
  } = WH();
  k59.createDocument = function() {
    return {
      nodeName: "#document",
      mode: h59.NO_QUIRKS,
      childNodes: []
    }
  };
  k59.createDocumentFragment = function() {
    return {
      nodeName: "#document-fragment",
      childNodes: []
    }
  };
  k59.createElement = function(I, d, G) {
    return {
      nodeName: I,
      tagName: I,
      attrs: G,
      namespaceURI: d,
      childNodes: [],
      parentNode: null
    }
  };
  k59.createCommentNode = function(I) {
    return {
      nodeName: "#comment",
      data: I,
      parentNode: null
    }
  };
  var mH2 = function(I) {
      return {
        nodeName: "#text",
        value: I,
        parentNode: null
      }
    },
    lH2 = k59.appendChild = function(I, d) {
      I.childNodes.push(d), d.parentNode = I
    },
    j59 = k59.insertBefore = function(I, d, G) {
      let Z = I.childNodes.indexOf(G);
      I.childNodes.splice(Z, 0, d), d.parentNode = I
    };
  k59.setTemplateContent = function(I, d) {
    I.content = d
  };
  k59.getTemplateContent = function(I) {
    return I.content
  };
  k59.setDocumentType = function(I, d, G, Z) {
    let C = null;
    for (let W = 0; W < I.childNodes.length; W++)
      if (I.childNodes[W].nodeName === "#documentType") {
        C = I.childNodes[W];
        break
      } if (C) C.name = d, C.publicId = G, C.systemId = Z;
    else lH2(I, {
      nodeName: "#documentType",
      name: d,
      publicId: G,
      systemId: Z
    })
  };
  k59.setDocumentMode = function(I, d) {
    I.mode = d
  };
  k59.getDocumentMode = function(I) {
    return I.mode
  };
  k59.detachNode = function(I) {
    if (I.parentNode) {
      let d = I.parentNode.childNodes.indexOf(I);
      I.parentNode.childNodes.splice(d, 1), I.parentNode = null
    }
  };
  k59.insertText = function(I, d) {
    if (I.childNodes.length) {
      let G = I.childNodes[I.childNodes.length - 1];
      if (G.nodeName === "#text") {
        G.value += d;
        return
      }
    }
    lH2(I, mH2(d))
  };
  k59.insertTextBefore = function(I, d, G) {
    let Z = I.childNodes[I.childNodes.indexOf(G) - 1];
    if (Z && Z.nodeName === "#text") Z.value += d;
    else j59(I, mH2(d), G)
  };
  k59.adoptAttributes = function(I, d) {
    let G = [];
    for (let Z = 0; Z < I.attrs.length; Z++) G.push(I.attrs[Z].name);
    for (let Z = 0; Z < d.length; Z++)
      if (G.indexOf(d[Z].name) === -1) I.attrs.push(d[Z])
  };
  k59.getFirstChild = function(I) {
    return I.childNodes[0]
  };
  k59.getChildNodes = function(I) {
    return I.childNodes
  };
  k59.getParentNode = function(I) {
    return I.parentNode
  };
  k59.getAttrList = function(I) {
    return I.attrs
  };
  k59.getTagName = function(I) {
    return I.tagName
  };
  k59.getNamespaceURI = function(I) {
    return I.namespaceURI
  };
  k59.getTextNodeContent = function(I) {
    return I.value
  };
  k59.getCommentNodeContent = function(I) {
    return I.data
  };
  k59.getDocumentTypeNodeName = function(I) {
    return I.name
  };
  k59.getDocumentTypeNodePublicId = function(I) {
    return I.publicId
  };
  k59.getDocumentTypeNodeSystemId = function(I) {
    return I.systemId
  };
  k59.isTextNode = function(I) {
    return I.nodeName === "#text"
  };
  k59.isCommentNode = function(I) {
    return I.nodeName === "#comment"
  };
  k59.isDocumentTypeNode = function(I) {
    return I.nodeName === "#documentType"
  };
  k59.isElementNode = function(I) {
    return !!I.tagName
  };
  k59.setNodeSourceCodeLocation = function(I, d) {
    I.sourceCodeLocation = d
  };
  k59.getNodeSourceCodeLocation = function(I) {
    return I.sourceCodeLocation
  }
})
// @from(Start 5133923, End 5134160)
Yg1 = Y((QJ3, bH2) => {
  bH2.exports = function I(d, G) {
    return G = G || Object.create(null), [d, G].reduce((Z, C) => {
      return Object.keys(C).forEach((W) => {
        Z[W] = C[W]
      }), Z
    }, Object.create(null))
  }
})
// @from(Start 5134166, End 5137954)
_g1 = Y((f99) => {
  var {
    DOCUMENT_MODE: ER
  } = WH(), kH2 = ["+//silmaril//dtd html pro v0r11 19970101//", "-//as//dtd html 3.0 aswedit + extensions//", "-//advasoft ltd//dtd html 3.0 aswedit + extensions//", "-//ietf//dtd html 2.0 level 1//", "-//ietf//dtd html 2.0 level 2//", "-//ietf//dtd html 2.0 strict level 1//", "-//ietf//dtd html 2.0 strict level 2//", "-//ietf//dtd html 2.0 strict//", "-//ietf//dtd html 2.0//", "-//ietf//dtd html 2.1e//", "-//ietf//dtd html 3.0//", "-//ietf//dtd html 3.2 final//", "-//ietf//dtd html 3.2//", "-//ietf//dtd html 3//", "-//ietf//dtd html level 0//", "-//ietf//dtd html level 1//", "-//ietf//dtd html level 2//", "-//ietf//dtd html level 3//", "-//ietf//dtd html strict level 0//", "-//ietf//dtd html strict level 1//", "-//ietf//dtd html strict level 2//", "-//ietf//dtd html strict level 3//", "-//ietf//dtd html strict//", "-//ietf//dtd html//", "-//metrius//dtd metrius presentational//", "-//microsoft//dtd internet explorer 2.0 html strict//", "-//microsoft//dtd internet explorer 2.0 html//", "-//microsoft//dtd internet explorer 2.0 tables//", "-//microsoft//dtd internet explorer 3.0 html strict//", "-//microsoft//dtd internet explorer 3.0 html//", "-//microsoft//dtd internet explorer 3.0 tables//", "-//netscape comm. corp.//dtd html//", "-//netscape comm. corp.//dtd strict html//", "-//o'reilly and associates//dtd html 2.0//", "-//o'reilly and associates//dtd html extended 1.0//", "-//o'reilly and associates//dtd html extended relaxed 1.0//", "-//sq//dtd html 2.0 hotmetal + extensions//", "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//", "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//", "-//spyglass//dtd html 2.0 extended//", "-//sun microsystems corp.//dtd hotjava html//", "-//sun microsystems corp.//dtd hotjava strict html//", "-//w3c//dtd html 3 1995-03-24//", "-//w3c//dtd html 3.2 draft//", "-//w3c//dtd html 3.2 final//", "-//w3c//dtd html 3.2//", "-//w3c//dtd html 3.2s draft//", "-//w3c//dtd html 4.0 frameset//", "-//w3c//dtd html 4.0 transitional//", "-//w3c//dtd html experimental 19960712//", "-//w3c//dtd html experimental 970421//", "-//w3c//dtd w3 html//", "-//w3o//dtd w3 html 3.0//", "-//webtechs//dtd mozilla html 2.0//", "-//webtechs//dtd mozilla html//"], N99 = kH2.concat(["-//w3c//dtd html 4.01 frameset//", "-//w3c//dtd html 4.01 transitional//"]), z99 = ["-//w3o//dtd w3 html strict 3.0//en//", "-/w3c/dtd html 4.0 transitional/en", "html"], xH2 = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"], Q99 = xH2.concat(["-//w3c//dtd html 4.01 frameset//", "-//w3c//dtd html 4.01 transitional//"]);

  function hH2(I) {
    let d = I.indexOf('"') !== -1 ? "'" : '"';
    return d + I + d
  }

  function jH2(I, d) {
    for (let G = 0; G < d.length; G++)
      if (I.indexOf(d[G]) === 0) return !0;
    return !1
  }
  f99.isConforming = function(I) {
    return I.name === "html" && I.publicId === null && (I.systemId === null || I.systemId === "about:legacy-compat")
  };
  f99.getDocumentMode = function(I) {
    if (I.name !== "html") return ER.QUIRKS;
    let d = I.systemId;
    if (d && d.toLowerCase() === "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd") return ER.QUIRKS;
    let G = I.publicId;
    if (G !== null) {
      if (G = G.toLowerCase(), z99.indexOf(G) > -1) return ER.QUIRKS;
      let Z = d === null ? N99 : kH2;
      if (jH2(G, Z)) return ER.QUIRKS;
      if (Z = d === null ? xH2 : Q99, jH2(G, Z)) return ER.LIMITED_QUIRKS
    }
    return ER.NO_QUIRKS
  };
  f99.serializeContent = function(I, d, G) {
    let Z = "!DOCTYPE ";
    if (I) Z += I;
    if (d) Z += " PUBLIC " + hH2(d);
    else if (G) Z += " SYSTEM";
    if (G !== null) Z += " " + hH2(G);
    return Z
  }
})
// @from(Start 5137960, End 5145389)
pH2 = Y((P99) => {
  var Dg1 = E$(),
    Hg1 = WH(),
    k2 = Hg1.TAG_NAMES,
    W7 = Hg1.NAMESPACES,
    xa = Hg1.ATTRS,
    cH2 = {
      TEXT_HTML: "text/html",
      APPLICATION_XML: "application/xhtml+xml"
    },
    v99 = {
      attributename: "attributeName",
      attributetype: "attributeType",
      basefrequency: "baseFrequency",
      baseprofile: "baseProfile",
      calcmode: "calcMode",
      clippathunits: "clipPathUnits",
      diffuseconstant: "diffuseConstant",
      edgemode: "edgeMode",
      filterunits: "filterUnits",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      limitingconeangle: "limitingConeAngle",
      markerheight: "markerHeight",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      numoctaves: "numOctaves",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      refx: "refX",
      refy: "refY",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stitchtiles: "stitchTiles",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textlength: "textLength",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      xchannelselector: "xChannelSelector",
      ychannelselector: "yChannelSelector",
      zoomandpan: "zoomAndPan"
    },
    E99 = {
      "xlink:actuate": {
        prefix: "xlink",
        name: "actuate",
        namespace: W7.XLINK
      },
      "xlink:arcrole": {
        prefix: "xlink",
        name: "arcrole",
        namespace: W7.XLINK
      },
      "xlink:href": {
        prefix: "xlink",
        name: "href",
        namespace: W7.XLINK
      },
      "xlink:role": {
        prefix: "xlink",
        name: "role",
        namespace: W7.XLINK
      },
      "xlink:show": {
        prefix: "xlink",
        name: "show",
        namespace: W7.XLINK
      },
      "xlink:title": {
        prefix: "xlink",
        name: "title",
        namespace: W7.XLINK
      },
      "xlink:type": {
        prefix: "xlink",
        name: "type",
        namespace: W7.XLINK
      },
      "xml:base": {
        prefix: "xml",
        name: "base",
        namespace: W7.XML
      },
      "xml:lang": {
        prefix: "xml",
        name: "lang",
        namespace: W7.XML
      },
      "xml:space": {
        prefix: "xml",
        name: "space",
        namespace: W7.XML
      },
      xmlns: {
        prefix: "",
        name: "xmlns",
        namespace: W7.XMLNS
      },
      "xmlns:xlink": {
        prefix: "xmlns",
        name: "xlink",
        namespace: W7.XMLNS
      }
    },
    M99 = P99.SVG_TAG_NAMES_ADJUSTMENT_MAP = {
      altglyph: "altGlyph",
      altglyphdef: "altGlyphDef",
      altglyphitem: "altGlyphItem",
      animatecolor: "animateColor",
      animatemotion: "animateMotion",
      animatetransform: "animateTransform",
      clippath: "clipPath",
      feblend: "feBlend",
      fecolormatrix: "feColorMatrix",
      fecomponenttransfer: "feComponentTransfer",
      fecomposite: "feComposite",
      feconvolvematrix: "feConvolveMatrix",
      fediffuselighting: "feDiffuseLighting",
      fedisplacementmap: "feDisplacementMap",
      fedistantlight: "feDistantLight",
      feflood: "feFlood",
      fefunca: "feFuncA",
      fefuncb: "feFuncB",
      fefuncg: "feFuncG",
      fefuncr: "feFuncR",
      fegaussianblur: "feGaussianBlur",
      feimage: "feImage",
      femerge: "feMerge",
      femergenode: "feMergeNode",
      femorphology: "feMorphology",
      feoffset: "feOffset",
      fepointlight: "fePointLight",
      fespecularlighting: "feSpecularLighting",
      fespotlight: "feSpotLight",
      fetile: "feTile",
      feturbulence: "feTurbulence",
      foreignobject: "foreignObject",
      glyphref: "glyphRef",
      lineargradient: "linearGradient",
      radialgradient: "radialGradient",
      textpath: "textPath"
    },
    S99 = {
      [k2.B]: !0,
      [k2.BIG]: !0,
      [k2.BLOCKQUOTE]: !0,
      [k2.BODY]: !0,
      [k2.BR]: !0,
      [k2.CENTER]: !0,
      [k2.CODE]: !0,
      [k2.DD]: !0,
      [k2.DIV]: !0,
      [k2.DL]: !0,
      [k2.DT]: !0,
      [k2.EM]: !0,
      [k2.EMBED]: !0,
      [k2.H1]: !0,
      [k2.H2]: !0,
      [k2.H3]: !0,
      [k2.H4]: !0,
      [k2.H5]: !0,
      [k2.H6]: !0,
      [k2.HEAD]: !0,
      [k2.HR]: !0,
      [k2.I]: !0,
      [k2.IMG]: !0,
      [k2.LI]: !0,
      [k2.LISTING]: !0,
      [k2.MENU]: !0,
      [k2.META]: !0,
      [k2.NOBR]: !0,
      [k2.OL]: !0,
      [k2.P]: !0,
      [k2.PRE]: !0,
      [k2.RUBY]: !0,
      [k2.S]: !0,
      [k2.SMALL]: !0,
      [k2.SPAN]: !0,
      [k2.STRONG]: !0,
      [k2.STRIKE]: !0,
      [k2.SUB]: !0,
      [k2.SUP]: !0,
      [k2.TABLE]: !0,
      [k2.TT]: !0,
      [k2.U]: !0,
      [k2.UL]: !0,
      [k2.VAR]: !0
    };
  P99.causesExit = function(I) {
    let d = I.tagName;
    return d === k2.FONT && (Dg1.getTokenAttr(I, xa.COLOR) !== null || Dg1.getTokenAttr(I, xa.SIZE) !== null || Dg1.getTokenAttr(I, xa.FACE) !== null) ? !0 : S99[d]
  };
  P99.adjustTokenMathMLAttrs = function(I) {
    for (let d = 0; d < I.attrs.length; d++)
      if (I.attrs[d].name === "definitionurl") {
        I.attrs[d].name = "definitionURL";
        break
      }
  };
  P99.adjustTokenSVGAttrs = function(I) {
    for (let d = 0; d < I.attrs.length; d++) {
      let G = v99[I.attrs[d].name];
      if (G) I.attrs[d].name = G
    }
  };
  P99.adjustTokenXMLAttrs = function(I) {
    for (let d = 0; d < I.attrs.length; d++) {
      let G = E99[I.attrs[d].name];
      if (G) I.attrs[d].prefix = G.prefix, I.attrs[d].name = G.name, I.attrs[d].namespace = G.namespace
    }
  };
  P99.adjustTokenSVGTagName = function(I) {
    let d = M99[I.tagName];
    if (d) I.tagName = d
  };

  function L99(I, d) {
    return d === W7.MATHML && (I === k2.MI || I === k2.MO || I === k2.MN || I === k2.MS || I === k2.MTEXT)
  }

  function y99(I, d, G) {
    if (d === W7.MATHML && I === k2.ANNOTATION_XML) {
      for (let Z = 0; Z < G.length; Z++)
        if (G[Z].name === xa.ENCODING) {
          let C = G[Z].value.toLowerCase();
          return C === cH2.TEXT_HTML || C === cH2.APPLICATION_XML
        }
    }
    return d === W7.SVG && (I === k2.FOREIGN_OBJECT || I === k2.DESC || I === k2.TITLE)
  }
  P99.isIntegrationPoint = function(I, d, G, Z) {
    if ((!Z || Z === W7.HTML) && y99(I, d, G)) return !0;
    if ((!Z || Z === W7.MATHML) && L99(I, d)) return !0;
    return !1
  }
})