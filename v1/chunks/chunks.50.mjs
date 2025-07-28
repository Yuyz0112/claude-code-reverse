
// @from(Start 5145395, End 5204225)
VF2 = Y((UJ3, AF2) => {
  var z1 = E$(),
    b99 = VH2(),
    iH2 = YH2(),
    h99 = RH2(),
    j99 = OH2(),
    nH2 = SB(),
    k99 = Xg1(),
    x99 = Yg1(),
    rH2 = _g1(),
    LB = pH2(),
    w7 = ba(),
    c99 = la(),
    rJ = WH(),
    L = rJ.TAG_NAMES,
    N2 = rJ.NAMESPACES,
    ZF2 = rJ.ATTRS,
    p99 = {
      scriptingEnabled: !0,
      sourceCodeLocationInfo: !1,
      onParseError: null,
      treeAdapter: k99
    },
    i99 = {
      [L.TR]: "IN_ROW_MODE",
      [L.TBODY]: "IN_TABLE_BODY_MODE",
      [L.THEAD]: "IN_TABLE_BODY_MODE",
      [L.TFOOT]: "IN_TABLE_BODY_MODE",
      [L.CAPTION]: "IN_CAPTION_MODE",
      [L.COLGROUP]: "IN_COLUMN_GROUP_MODE",
      [L.TABLE]: "IN_TABLE_MODE",
      [L.BODY]: "IN_BODY_MODE",
      [L.FRAMESET]: "IN_FRAMESET_MODE"
    },
    n99 = {
      [L.CAPTION]: "IN_TABLE_MODE",
      [L.COLGROUP]: "IN_TABLE_MODE",
      [L.TBODY]: "IN_TABLE_MODE",
      [L.TFOOT]: "IN_TABLE_MODE",
      [L.THEAD]: "IN_TABLE_MODE",
      [L.COL]: "IN_COLUMN_GROUP_MODE",
      [L.TR]: "IN_TABLE_BODY_MODE",
      [L.TD]: "IN_ROW_MODE",
      [L.TH]: "IN_ROW_MODE"
    },
    Fg1 = {
      ["INITIAL_MODE"]: {
        [z1.CHARACTER_TOKEN]: S$,
        [z1.NULL_CHARACTER_TOKEN]: S$,
        [z1.WHITESPACE_CHARACTER_TOKEN]: d5,
        [z1.COMMENT_TOKEN]: a6,
        [z1.DOCTYPE_TOKEN]: d39,
        [z1.START_TAG_TOKEN]: S$,
        [z1.END_TAG_TOKEN]: S$,
        [z1.EOF_TOKEN]: S$
      },
      ["BEFORE_HTML_MODE"]: {
        [z1.CHARACTER_TOKEN]: y$,
        [z1.NULL_CHARACTER_TOKEN]: y$,
        [z1.WHITESPACE_CHARACTER_TOKEN]: d5,
        [z1.COMMENT_TOKEN]: a6,
        [z1.DOCTYPE_TOKEN]: d5,
        [z1.START_TAG_TOKEN]: G39,
        [z1.END_TAG_TOKEN]: Z39,
        [z1.EOF_TOKEN]: y$
      },
      ["BEFORE_HEAD_MODE"]: {
        [z1.CHARACTER_TOKEN]: P$,
        [z1.NULL_CHARACTER_TOKEN]: P$,
        [z1.WHITESPACE_CHARACTER_TOKEN]: d5,
        [z1.COMMENT_TOKEN]: a6,
        [z1.DOCTYPE_TOKEN]: ca,
        [z1.START_TAG_TOKEN]: C39,
        [z1.END_TAG_TOKEN]: W39,
        [z1.EOF_TOKEN]: P$
      },
      ["IN_HEAD_MODE"]: {
        [z1.CHARACTER_TOKEN]: $$,
        [z1.NULL_CHARACTER_TOKEN]: $$,
        [z1.WHITESPACE_CHARACTER_TOKEN]: _d,
        [z1.COMMENT_TOKEN]: a6,
        [z1.DOCTYPE_TOKEN]: ca,
        [z1.START_TAG_TOKEN]: Q8,
        [z1.END_TAG_TOKEN]: aJ,
        [z1.EOF_TOKEN]: $$
      },
      ["IN_HEAD_NO_SCRIPT_MODE"]: {
        [z1.CHARACTER_TOKEN]: u$,
        [z1.NULL_CHARACTER_TOKEN]: u$,
        [z1.WHITESPACE_CHARACTER_TOKEN]: _d,
        [z1.COMMENT_TOKEN]: a6,
        [z1.DOCTYPE_TOKEN]: ca,
        [z1.START_TAG_TOKEN]: w39,
        [z1.END_TAG_TOKEN]: B39,
        [z1.EOF_TOKEN]: u$
      },
      ["AFTER_HEAD_MODE"]: {
        [z1.CHARACTER_TOKEN]: T$,
        [z1.NULL_CHARACTER_TOKEN]: T$,
        [z1.WHITESPACE_CHARACTER_TOKEN]: _d,
        [z1.COMMENT_TOKEN]: a6,
        [z1.DOCTYPE_TOKEN]: ca,
        [z1.START_TAG_TOKEN]: A39,
        [z1.END_TAG_TOKEN]: V39,
        [z1.EOF_TOKEN]: T$
      },
      ["IN_BODY_MODE"]: {
        [z1.CHARACTER_TOKEN]: pa,
        [z1.NULL_CHARACTER_TOKEN]: d5,
        [z1.WHITESPACE_CHARACTER_TOKEN]: nJ,
        [z1.COMMENT_TOKEN]: a6,
        [z1.DOCTYPE_TOKEN]: d5,
        [z1.START_TAG_TOKEN]: Dd,
        [z1.END_TAG_TOKEN]: gg1,
        [z1.EOF_TOKEN]: WX
      },
      ["TEXT_MODE"]: {
        [z1.CHARACTER_TOKEN]: _d,
        [z1.NULL_CHARACTER_TOKEN]: _d,
        [z1.WHITESPACE_CHARACTER_TOKEN]: _d,
        [z1.COMMENT_TOKEN]: d5,
        [z1.DOCTYPE_TOKEN]: d5,
        [z1.START_TAG_TOKEN]: d5,
        [z1.END_TAG_TOKEN]: h39,
        [z1.EOF_TOKEN]: j39
      },
      ["IN_TABLE_MODE"]: {
        [z1.CHARACTER_TOKEN]: wX,
        [z1.NULL_CHARACTER_TOKEN]: wX,
        [z1.WHITESPACE_CHARACTER_TOKEN]: wX,
        [z1.COMMENT_TOKEN]: a6,
        [z1.DOCTYPE_TOKEN]: d5,
        [z1.START_TAG_TOKEN]: Jg1,
        [z1.END_TAG_TOKEN]: Kg1,
        [z1.EOF_TOKEN]: WX
      },
      ["IN_TABLE_TEXT_MODE"]: {
        [z1.CHARACTER_TOKEN]: o39,
        [z1.NULL_CHARACTER_TOKEN]: d5,
        [z1.WHITESPACE_CHARACTER_TOKEN]: s39,
        [z1.COMMENT_TOKEN]: L$,
        [z1.DOCTYPE_TOKEN]: L$,
        [z1.START_TAG_TOKEN]: L$,
        [z1.END_TAG_TOKEN]: L$,
        [z1.EOF_TOKEN]: L$
      },
      ["IN_CAPTION_MODE"]: {
        [z1.CHARACTER_TOKEN]: pa,
        [z1.NULL_CHARACTER_TOKEN]: d5,
        [z1.WHITESPACE_CHARACTER_TOKEN]: nJ,
        [z1.COMMENT_TOKEN]: a6,
        [z1.DOCTYPE_TOKEN]: d5,
        [z1.START_TAG_TOKEN]: e39,
        [z1.END_TAG_TOKEN]: t39,
        [z1.EOF_TOKEN]: WX
      },
      ["IN_COLUMN_GROUP_MODE"]: {
        [z1.CHARACTER_TOKEN]: na,
        [z1.NULL_CHARACTER_TOKEN]: na,
        [z1.WHITESPACE_CHARACTER_TOKEN]: _d,
        [z1.COMMENT_TOKEN]: a6,
        [z1.DOCTYPE_TOKEN]: d5,
        [z1.START_TAG_TOKEN]: I69,
        [z1.END_TAG_TOKEN]: d69,
        [z1.EOF_TOKEN]: WX
      },
      ["IN_TABLE_BODY_MODE"]: {
        [z1.CHARACTER_TOKEN]: wX,
        [z1.NULL_CHARACTER_TOKEN]: wX,
        [z1.WHITESPACE_CHARACTER_TOKEN]: wX,
        [z1.COMMENT_TOKEN]: a6,
        [z1.DOCTYPE_TOKEN]: d5,
        [z1.START_TAG_TOKEN]: G69,
        [z1.END_TAG_TOKEN]: Z69,
        [z1.EOF_TOKEN]: WX
      },
      ["IN_ROW_MODE"]: {
        [z1.CHARACTER_TOKEN]: wX,
        [z1.NULL_CHARACTER_TOKEN]: wX,
        [z1.WHITESPACE_CHARACTER_TOKEN]: wX,
        [z1.COMMENT_TOKEN]: a6,
        [z1.DOCTYPE_TOKEN]: d5,
        [z1.START_TAG_TOKEN]: C69,
        [z1.END_TAG_TOKEN]: W69,
        [z1.EOF_TOKEN]: WX
      },
      ["IN_CELL_MODE"]: {
        [z1.CHARACTER_TOKEN]: pa,
        [z1.NULL_CHARACTER_TOKEN]: d5,
        [z1.WHITESPACE_CHARACTER_TOKEN]: nJ,
        [z1.COMMENT_TOKEN]: a6,
        [z1.DOCTYPE_TOKEN]: d5,
        [z1.START_TAG_TOKEN]: w69,
        [z1.END_TAG_TOKEN]: B69,
        [z1.EOF_TOKEN]: WX
      },
      ["IN_SELECT_MODE"]: {
        [z1.CHARACTER_TOKEN]: _d,
        [z1.NULL_CHARACTER_TOKEN]: d5,
        [z1.WHITESPACE_CHARACTER_TOKEN]: _d,
        [z1.COMMENT_TOKEN]: a6,
        [z1.DOCTYPE_TOKEN]: d5,
        [z1.START_TAG_TOKEN]: WF2,
        [z1.END_TAG_TOKEN]: wF2,
        [z1.EOF_TOKEN]: WX
      },
      ["IN_SELECT_IN_TABLE_MODE"]: {
        [z1.CHARACTER_TOKEN]: _d,
        [z1.NULL_CHARACTER_TOKEN]: d5,
        [z1.WHITESPACE_CHARACTER_TOKEN]: _d,
        [z1.COMMENT_TOKEN]: a6,
        [z1.DOCTYPE_TOKEN]: d5,
        [z1.START_TAG_TOKEN]: A69,
        [z1.END_TAG_TOKEN]: V69,
        [z1.EOF_TOKEN]: WX
      },
      ["IN_TEMPLATE_MODE"]: {
        [z1.CHARACTER_TOKEN]: pa,
        [z1.NULL_CHARACTER_TOKEN]: d5,
        [z1.WHITESPACE_CHARACTER_TOKEN]: nJ,
        [z1.COMMENT_TOKEN]: a6,
        [z1.DOCTYPE_TOKEN]: d5,
        [z1.START_TAG_TOKEN]: X69,
        [z1.END_TAG_TOKEN]: Y69,
        [z1.EOF_TOKEN]: BF2
      },
      ["AFTER_BODY_MODE"]: {
        [z1.CHARACTER_TOKEN]: ra,
        [z1.NULL_CHARACTER_TOKEN]: ra,
        [z1.WHITESPACE_CHARACTER_TOKEN]: nJ,
        [z1.COMMENT_TOKEN]: I39,
        [z1.DOCTYPE_TOKEN]: d5,
        [z1.START_TAG_TOKEN]: _69,
        [z1.END_TAG_TOKEN]: D69,
        [z1.EOF_TOKEN]: M$
      },
      ["IN_FRAMESET_MODE"]: {
        [z1.CHARACTER_TOKEN]: d5,
        [z1.NULL_CHARACTER_TOKEN]: d5,
        [z1.WHITESPACE_CHARACTER_TOKEN]: _d,
        [z1.COMMENT_TOKEN]: a6,
        [z1.DOCTYPE_TOKEN]: d5,
        [z1.START_TAG_TOKEN]: H69,
        [z1.END_TAG_TOKEN]: F69,
        [z1.EOF_TOKEN]: M$
      },
      ["AFTER_FRAMESET_MODE"]: {
        [z1.CHARACTER_TOKEN]: d5,
        [z1.NULL_CHARACTER_TOKEN]: d5,
        [z1.WHITESPACE_CHARACTER_TOKEN]: _d,
        [z1.COMMENT_TOKEN]: a6,
        [z1.DOCTYPE_TOKEN]: d5,
        [z1.START_TAG_TOKEN]: g69,
        [z1.END_TAG_TOKEN]: J69,
        [z1.EOF_TOKEN]: M$
      },
      ["AFTER_AFTER_BODY_MODE"]: {
        [z1.CHARACTER_TOKEN]: ia,
        [z1.NULL_CHARACTER_TOKEN]: ia,
        [z1.WHITESPACE_CHARACTER_TOKEN]: nJ,
        [z1.COMMENT_TOKEN]: aH2,
        [z1.DOCTYPE_TOKEN]: d5,
        [z1.START_TAG_TOKEN]: K69,
        [z1.END_TAG_TOKEN]: ia,
        [z1.EOF_TOKEN]: M$
      },
      ["AFTER_AFTER_FRAMESET_MODE"]: {
        [z1.CHARACTER_TOKEN]: d5,
        [z1.NULL_CHARACTER_TOKEN]: d5,
        [z1.WHITESPACE_CHARACTER_TOKEN]: nJ,
        [z1.COMMENT_TOKEN]: aH2,
        [z1.DOCTYPE_TOKEN]: d5,
        [z1.START_TAG_TOKEN]: N69,
        [z1.END_TAG_TOKEN]: d5,
        [z1.EOF_TOKEN]: M$
      }
    };
  class CF2 {
    constructor(I) {
      if (this.options = x99(p99, I), this.treeAdapter = this.options.treeAdapter, this.pendingScript = null, this.options.sourceCodeLocationInfo) nH2.install(this, h99);
      if (this.options.onParseError) nH2.install(this, j99, {
        onParseError: this.options.onParseError
      })
    }
    parse(I) {
      let d = this.treeAdapter.createDocument();
      return this._bootstrap(d, null), this.tokenizer.write(I, !0), this._runParsingLoop(null), d
    }
    parseFragment(I, d) {
      if (!d) d = this.treeAdapter.createElement(L.TEMPLATE, N2.HTML, []);
      let G = this.treeAdapter.createElement("documentmock", N2.HTML, []);
      if (this._bootstrap(G, d), this.treeAdapter.getTagName(d) === L.TEMPLATE) this._pushTmplInsertionMode("IN_TEMPLATE_MODE");
      this._initTokenizerForFragmentParsing(), this._insertFakeRootElement(), this._resetInsertionMode(), this._findFormInFragmentContext(), this.tokenizer.write(I, !0), this._runParsingLoop(null);
      let Z = this.treeAdapter.getFirstChild(G),
        C = this.treeAdapter.createDocumentFragment();
      return this._adoptNodes(Z, C), C
    }
    _bootstrap(I, d) {
      this.tokenizer = new z1(this.options), this.stopped = !1, this.insertionMode = "INITIAL_MODE", this.originalInsertionMode = "", this.document = I, this.fragmentContext = d, this.headElement = null, this.formElement = null, this.openElements = new b99(this.document, this.treeAdapter), this.activeFormattingElements = new iH2(this.treeAdapter), this.tmplInsertionModeStack = [], this.tmplInsertionModeStackTop = -1, this.currentTmplInsertionMode = null, this.pendingCharacterTokens = [], this.hasNonWhitespacePendingCharacterToken = !1, this.framesetOk = !0, this.skipNextNewLine = !1, this.fosterParentingEnabled = !1
    }
    _err() {}
    _runParsingLoop(I) {
      while (!this.stopped) {
        this._setupTokenizerCDATAMode();
        let d = this.tokenizer.getNextToken();
        if (d.type === z1.HIBERNATION_TOKEN) break;
        if (this.skipNextNewLine) {
          if (this.skipNextNewLine = !1, d.type === z1.WHITESPACE_CHARACTER_TOKEN && d.chars[0] === `
`) {
            if (d.chars.length === 1) continue;
            d.chars = d.chars.substr(1)
          }
        }
        if (this._processInputToken(d), I && this.pendingScript) break
      }
    }
    runParsingLoopForCurrentChunk(I, d) {
      if (this._runParsingLoop(d), d && this.pendingScript) {
        let G = this.pendingScript;
        this.pendingScript = null, d(G);
        return
      }
      if (I) I()
    }
    _setupTokenizerCDATAMode() {
      let I = this._getAdjustedCurrentElement();
      this.tokenizer.allowCDATA = I && I !== this.document && this.treeAdapter.getNamespaceURI(I) !== N2.HTML && !this._isIntegrationPoint(I)
    }
    _switchToTextParsing(I, d) {
      this._insertElement(I, N2.HTML), this.tokenizer.state = d, this.originalInsertionMode = this.insertionMode, this.insertionMode = "TEXT_MODE"
    }
    switchToPlaintextParsing() {
      this.insertionMode = "TEXT_MODE", this.originalInsertionMode = "IN_BODY_MODE", this.tokenizer.state = z1.MODE.PLAINTEXT
    }
    _getAdjustedCurrentElement() {
      return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current
    }
    _findFormInFragmentContext() {
      let I = this.fragmentContext;
      do {
        if (this.treeAdapter.getTagName(I) === L.FORM) {
          this.formElement = I;
          break
        }
        I = this.treeAdapter.getParentNode(I)
      } while (I)
    }
    _initTokenizerForFragmentParsing() {
      if (this.treeAdapter.getNamespaceURI(this.fragmentContext) === N2.HTML) {
        let I = this.treeAdapter.getTagName(this.fragmentContext);
        if (I === L.TITLE || I === L.TEXTAREA) this.tokenizer.state = z1.MODE.RCDATA;
        else if (I === L.STYLE || I === L.XMP || I === L.IFRAME || I === L.NOEMBED || I === L.NOFRAMES || I === L.NOSCRIPT) this.tokenizer.state = z1.MODE.RAWTEXT;
        else if (I === L.SCRIPT) this.tokenizer.state = z1.MODE.SCRIPT_DATA;
        else if (I === L.PLAINTEXT) this.tokenizer.state = z1.MODE.PLAINTEXT
      }
    }
    _setDocumentType(I) {
      let d = I.name || "",
        G = I.publicId || "",
        Z = I.systemId || "";
      this.treeAdapter.setDocumentType(this.document, d, G, Z)
    }
    _attachElementToTree(I) {
      if (this._shouldFosterParentOnInsertion()) this._fosterParentElement(I);
      else {
        let d = this.openElements.currentTmplContent || this.openElements.current;
        this.treeAdapter.appendChild(d, I)
      }
    }
    _appendElement(I, d) {
      let G = this.treeAdapter.createElement(I.tagName, d, I.attrs);
      this._attachElementToTree(G)
    }
    _insertElement(I, d) {
      let G = this.treeAdapter.createElement(I.tagName, d, I.attrs);
      this._attachElementToTree(G), this.openElements.push(G)
    }
    _insertFakeElement(I) {
      let d = this.treeAdapter.createElement(I, N2.HTML, []);
      this._attachElementToTree(d), this.openElements.push(d)
    }
    _insertTemplate(I) {
      let d = this.treeAdapter.createElement(I.tagName, N2.HTML, I.attrs),
        G = this.treeAdapter.createDocumentFragment();
      this.treeAdapter.setTemplateContent(d, G), this._attachElementToTree(d), this.openElements.push(d)
    }
    _insertFakeRootElement() {
      let I = this.treeAdapter.createElement(L.HTML, N2.HTML, []);
      this.treeAdapter.appendChild(this.openElements.current, I), this.openElements.push(I)
    }
    _appendCommentNode(I, d) {
      let G = this.treeAdapter.createCommentNode(I.data);
      this.treeAdapter.appendChild(d, G)
    }
    _insertCharacters(I) {
      if (this._shouldFosterParentOnInsertion()) this._fosterParentText(I.chars);
      else {
        let d = this.openElements.currentTmplContent || this.openElements.current;
        this.treeAdapter.insertText(d, I.chars)
      }
    }
    _adoptNodes(I, d) {
      for (let G = this.treeAdapter.getFirstChild(I); G; G = this.treeAdapter.getFirstChild(I)) this.treeAdapter.detachNode(G), this.treeAdapter.appendChild(d, G)
    }
    _shouldProcessTokenInForeignContent(I) {
      let d = this._getAdjustedCurrentElement();
      if (!d || d === this.document) return !1;
      let G = this.treeAdapter.getNamespaceURI(d);
      if (G === N2.HTML) return !1;
      if (this.treeAdapter.getTagName(d) === L.ANNOTATION_XML && G === N2.MATHML && I.type === z1.START_TAG_TOKEN && I.tagName === L.SVG) return !1;
      let Z = I.type === z1.CHARACTER_TOKEN || I.type === z1.NULL_CHARACTER_TOKEN || I.type === z1.WHITESPACE_CHARACTER_TOKEN;
      if ((I.type === z1.START_TAG_TOKEN && I.tagName !== L.MGLYPH && I.tagName !== L.MALIGNMARK || Z) && this._isIntegrationPoint(d, N2.MATHML)) return !1;
      if ((I.type === z1.START_TAG_TOKEN || Z) && this._isIntegrationPoint(d, N2.HTML)) return !1;
      return I.type !== z1.EOF_TOKEN
    }
    _processToken(I) {
      Fg1[this.insertionMode][I.type](this, I)
    }
    _processTokenInBodyMode(I) {
      Fg1.IN_BODY_MODE[I.type](this, I)
    }
    _processTokenInForeignContent(I) {
      if (I.type === z1.CHARACTER_TOKEN) Q69(this, I);
      else if (I.type === z1.NULL_CHARACTER_TOKEN) z69(this, I);
      else if (I.type === z1.WHITESPACE_CHARACTER_TOKEN) _d(this, I);
      else if (I.type === z1.COMMENT_TOKEN) a6(this, I);
      else if (I.type === z1.START_TAG_TOKEN) f69(this, I);
      else if (I.type === z1.END_TAG_TOKEN) q69(this, I)
    }
    _processInputToken(I) {
      if (this._shouldProcessTokenInForeignContent(I)) this._processTokenInForeignContent(I);
      else this._processToken(I);
      if (I.type === z1.START_TAG_TOKEN && I.selfClosing && !I.ackSelfClosing) this._err(w7.nonVoidHtmlElementStartTagWithTrailingSolidus)
    }
    _isIntegrationPoint(I, d) {
      let G = this.treeAdapter.getTagName(I),
        Z = this.treeAdapter.getNamespaceURI(I),
        C = this.treeAdapter.getAttrList(I);
      return LB.isIntegrationPoint(G, Z, C, d)
    }
    _reconstructActiveFormattingElements() {
      let I = this.activeFormattingElements.length;
      if (I) {
        let d = I,
          G = null;
        do
          if (d--, G = this.activeFormattingElements.entries[d], G.type === iH2.MARKER_ENTRY || this.openElements.contains(G.element)) {
            d++;
            break
          } while (d > 0);
        for (let Z = d; Z < I; Z++) G = this.activeFormattingElements.entries[Z], this._insertElement(G.token, this.treeAdapter.getNamespaceURI(G.element)), G.element = this.openElements.current
      }
    }
    _closeTableCell() {
      this.openElements.generateImpliedEndTags(), this.openElements.popUntilTableCellPopped(), this.activeFormattingElements.clearToLastMarker(), this.insertionMode = "IN_ROW_MODE"
    }
    _closePElement() {
      this.openElements.generateImpliedEndTagsWithExclusion(L.P), this.openElements.popUntilTagNamePopped(L.P)
    }
    _resetInsertionMode() {
      for (let I = this.openElements.stackTop, d = !1; I >= 0; I--) {
        let G = this.openElements.items[I];
        if (I === 0) {
          if (d = !0, this.fragmentContext) G = this.fragmentContext
        }
        let Z = this.treeAdapter.getTagName(G),
          C = i99[Z];
        if (C) {
          this.insertionMode = C;
          break
        } else if (!d && (Z === L.TD || Z === L.TH)) {
          this.insertionMode = "IN_CELL_MODE";
          break
        } else if (!d && Z === L.HEAD) {
          this.insertionMode = "IN_HEAD_MODE";
          break
        } else if (Z === L.SELECT) {
          this._resetInsertionModeForSelect(I);
          break
        } else if (Z === L.TEMPLATE) {
          this.insertionMode = this.currentTmplInsertionMode;
          break
        } else if (Z === L.HTML) {
          this.insertionMode = this.headElement ? "AFTER_HEAD_MODE" : "BEFORE_HEAD_MODE";
          break
        } else if (d) {
          this.insertionMode = "IN_BODY_MODE";
          break
        }
      }
    }
    _resetInsertionModeForSelect(I) {
      if (I > 0)
        for (let d = I - 1; d > 0; d--) {
          let G = this.openElements.items[d],
            Z = this.treeAdapter.getTagName(G);
          if (Z === L.TEMPLATE) break;
          else if (Z === L.TABLE) {
            this.insertionMode = "IN_SELECT_IN_TABLE_MODE";
            return
          }
        }
      this.insertionMode = "IN_SELECT_MODE"
    }
    _pushTmplInsertionMode(I) {
      this.tmplInsertionModeStack.push(I), this.tmplInsertionModeStackTop++, this.currentTmplInsertionMode = I
    }
    _popTmplInsertionMode() {
      this.tmplInsertionModeStack.pop(), this.tmplInsertionModeStackTop--, this.currentTmplInsertionMode = this.tmplInsertionModeStack[this.tmplInsertionModeStackTop]
    }
    _isElementCausesFosterParenting(I) {
      let d = this.treeAdapter.getTagName(I);
      return d === L.TABLE || d === L.TBODY || d === L.TFOOT || d === L.THEAD || d === L.TR
    }
    _shouldFosterParentOnInsertion() {
      return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.current)
    }
    _findFosterParentingLocation() {
      let I = {
        parent: null,
        beforeElement: null
      };
      for (let d = this.openElements.stackTop; d >= 0; d--) {
        let G = this.openElements.items[d],
          Z = this.treeAdapter.getTagName(G),
          C = this.treeAdapter.getNamespaceURI(G);
        if (Z === L.TEMPLATE && C === N2.HTML) {
          I.parent = this.treeAdapter.getTemplateContent(G);
          break
        } else if (Z === L.TABLE) {
          if (I.parent = this.treeAdapter.getParentNode(G), I.parent) I.beforeElement = G;
          else I.parent = this.openElements.items[d - 1];
          break
        }
      }
      if (!I.parent) I.parent = this.openElements.items[0];
      return I
    }
    _fosterParentElement(I) {
      let d = this._findFosterParentingLocation();
      if (d.beforeElement) this.treeAdapter.insertBefore(d.parent, I, d.beforeElement);
      else this.treeAdapter.appendChild(d.parent, I)
    }
    _fosterParentText(I) {
      let d = this._findFosterParentingLocation();
      if (d.beforeElement) this.treeAdapter.insertTextBefore(d.parent, I, d.beforeElement);
      else this.treeAdapter.insertText(d.parent, I)
    }
    _isSpecialElement(I) {
      let d = this.treeAdapter.getTagName(I),
        G = this.treeAdapter.getNamespaceURI(I);
      return rJ.SPECIAL_ELEMENTS[G][d]
    }
  }
  AF2.exports = CF2;

  function r99(I, d) {
    let G = I.activeFormattingElements.getElementEntryInScopeWithTagName(d.tagName);
    if (G) {
      if (!I.openElements.contains(G.element)) I.activeFormattingElements.removeEntry(G), G = null;
      else if (!I.openElements.hasInScope(d.tagName)) G = null
    } else FW(I, d);
    return G
  }

  function a99(I, d) {
    let G = null;
    for (let Z = I.openElements.stackTop; Z >= 0; Z--) {
      let C = I.openElements.items[Z];
      if (C === d.element) break;
      if (I._isSpecialElement(C)) G = C
    }
    if (!G) I.openElements.popUntilElementPopped(d.element), I.activeFormattingElements.removeEntry(d);
    return G
  }

  function s99(I, d, G) {
    let Z = d,
      C = I.openElements.getCommonAncestor(d);
    for (let W = 0, w = C; w !== G; W++, w = C) {
      C = I.openElements.getCommonAncestor(w);
      let B = I.activeFormattingElements.getElementEntry(w),
        A = B && W >= 3;
      if (!B || A) {
        if (A) I.activeFormattingElements.removeEntry(B);
        I.openElements.remove(w)
      } else {
        if (w = o99(I, B), Z === d) I.activeFormattingElements.bookmark = B;
        I.treeAdapter.detachNode(Z), I.treeAdapter.appendChild(w, Z), Z = w
      }
    }
    return Z
  }

  function o99(I, d) {
    let G = I.treeAdapter.getNamespaceURI(d.element),
      Z = I.treeAdapter.createElement(d.token.tagName, G, d.token.attrs);
    return I.openElements.replace(d.element, Z), d.element = Z, Z
  }

  function e99(I, d, G) {
    if (I._isElementCausesFosterParenting(d)) I._fosterParentElement(G);
    else {
      let Z = I.treeAdapter.getTagName(d),
        C = I.treeAdapter.getNamespaceURI(d);
      if (Z === L.TEMPLATE && C === N2.HTML) d = I.treeAdapter.getTemplateContent(d);
      I.treeAdapter.appendChild(d, G)
    }
  }

  function t99(I, d, G) {
    let Z = I.treeAdapter.getNamespaceURI(G.element),
      C = G.token,
      W = I.treeAdapter.createElement(C.tagName, Z, C.attrs);
    I._adoptNodes(d, W), I.treeAdapter.appendChild(d, W), I.activeFormattingElements.insertElementAfterBookmark(W, G.token), I.activeFormattingElements.removeEntry(G), I.openElements.remove(G.element), I.openElements.insertAfter(d, W)
  }

  function BH(I, d) {
    let G;
    for (let Z = 0; Z < 8; Z++) {
      if (G = r99(I, d, G), !G) break;
      let C = a99(I, G);
      if (!C) break;
      I.activeFormattingElements.bookmark = G;
      let W = s99(I, C, G.element),
        w = I.openElements.getCommonAncestor(G.element);
      I.treeAdapter.detachNode(W), e99(I, w, W), t99(I, C, G)
    }
  }

  function d5() {}

  function ca(I) {
    I._err(w7.misplacedDoctype)
  }

  function a6(I, d) {
    I._appendCommentNode(d, I.openElements.currentTmplContent || I.openElements.current)
  }

  function I39(I, d) {
    I._appendCommentNode(d, I.openElements.items[0])
  }

  function aH2(I, d) {
    I._appendCommentNode(d, I.document)
  }

  function _d(I, d) {
    I._insertCharacters(d)
  }

  function M$(I) {
    I.stopped = !0
  }

  function d39(I, d) {
    I._setDocumentType(d);
    let G = d.forceQuirks ? rJ.DOCUMENT_MODE.QUIRKS : rH2.getDocumentMode(d);
    if (!rH2.isConforming(d)) I._err(w7.nonConformingDoctype);
    I.treeAdapter.setDocumentMode(I.document, G), I.insertionMode = "BEFORE_HTML_MODE"
  }

  function S$(I, d) {
    I._err(w7.missingDoctype, {
      beforeToken: !0
    }), I.treeAdapter.setDocumentMode(I.document, rJ.DOCUMENT_MODE.QUIRKS), I.insertionMode = "BEFORE_HTML_MODE", I._processToken(d)
  }

  function G39(I, d) {
    if (d.tagName === L.HTML) I._insertElement(d, N2.HTML), I.insertionMode = "BEFORE_HEAD_MODE";
    else y$(I, d)
  }

  function Z39(I, d) {
    let G = d.tagName;
    if (G === L.HTML || G === L.HEAD || G === L.BODY || G === L.BR) y$(I, d)
  }

  function y$(I, d) {
    I._insertFakeRootElement(), I.insertionMode = "BEFORE_HEAD_MODE", I._processToken(d)
  }

  function C39(I, d) {
    let G = d.tagName;
    if (G === L.HTML) Dd(I, d);
    else if (G === L.HEAD) I._insertElement(d, N2.HTML), I.headElement = I.openElements.current, I.insertionMode = "IN_HEAD_MODE";
    else P$(I, d)
  }

  function W39(I, d) {
    let G = d.tagName;
    if (G === L.HEAD || G === L.BODY || G === L.HTML || G === L.BR) P$(I, d);
    else I._err(w7.endTagWithoutMatchingOpenElement)
  }

  function P$(I, d) {
    I._insertFakeElement(L.HEAD), I.headElement = I.openElements.current, I.insertionMode = "IN_HEAD_MODE", I._processToken(d)
  }

  function Q8(I, d) {
    let G = d.tagName;
    if (G === L.HTML) Dd(I, d);
    else if (G === L.BASE || G === L.BASEFONT || G === L.BGSOUND || G === L.LINK || G === L.META) I._appendElement(d, N2.HTML), d.ackSelfClosing = !0;
    else if (G === L.TITLE) I._switchToTextParsing(d, z1.MODE.RCDATA);
    else if (G === L.NOSCRIPT)
      if (I.options.scriptingEnabled) I._switchToTextParsing(d, z1.MODE.RAWTEXT);
      else I._insertElement(d, N2.HTML), I.insertionMode = "IN_HEAD_NO_SCRIPT_MODE";
    else if (G === L.NOFRAMES || G === L.STYLE) I._switchToTextParsing(d, z1.MODE.RAWTEXT);
    else if (G === L.SCRIPT) I._switchToTextParsing(d, z1.MODE.SCRIPT_DATA);
    else if (G === L.TEMPLATE) I._insertTemplate(d, N2.HTML), I.activeFormattingElements.insertMarker(), I.framesetOk = !1, I.insertionMode = "IN_TEMPLATE_MODE", I._pushTmplInsertionMode("IN_TEMPLATE_MODE");
    else if (G === L.HEAD) I._err(w7.misplacedStartTagForHeadElement);
    else $$(I, d)
  }

  function aJ(I, d) {
    let G = d.tagName;
    if (G === L.HEAD) I.openElements.pop(), I.insertionMode = "AFTER_HEAD_MODE";
    else if (G === L.BODY || G === L.BR || G === L.HTML) $$(I, d);
    else if (G === L.TEMPLATE)
      if (I.openElements.tmplCount > 0) {
        if (I.openElements.generateImpliedEndTagsThoroughly(), I.openElements.currentTagName !== L.TEMPLATE) I._err(w7.closingOfElementWithOpenChildElements);
        I.openElements.popUntilTagNamePopped(L.TEMPLATE), I.activeFormattingElements.clearToLastMarker(), I._popTmplInsertionMode(), I._resetInsertionMode()
      } else I._err(w7.endTagWithoutMatchingOpenElement);
    else I._err(w7.endTagWithoutMatchingOpenElement)
  }

  function $$(I, d) {
    I.openElements.pop(), I.insertionMode = "AFTER_HEAD_MODE", I._processToken(d)
  }

  function w39(I, d) {
    let G = d.tagName;
    if (G === L.HTML) Dd(I, d);
    else if (G === L.BASEFONT || G === L.BGSOUND || G === L.HEAD || G === L.LINK || G === L.META || G === L.NOFRAMES || G === L.STYLE) Q8(I, d);
    else if (G === L.NOSCRIPT) I._err(w7.nestedNoscriptInHead);
    else u$(I, d)
  }

  function B39(I, d) {
    let G = d.tagName;
    if (G === L.NOSCRIPT) I.openElements.pop(), I.insertionMode = "IN_HEAD_MODE";
    else if (G === L.BR) u$(I, d);
    else I._err(w7.endTagWithoutMatchingOpenElement)
  }

  function u$(I, d) {
    let G = d.type === z1.EOF_TOKEN ? w7.openElementsLeftAfterEof : w7.disallowedContentInNoscriptInHead;
    I._err(G), I.openElements.pop(), I.insertionMode = "IN_HEAD_MODE", I._processToken(d)
  }

  function A39(I, d) {
    let G = d.tagName;
    if (G === L.HTML) Dd(I, d);
    else if (G === L.BODY) I._insertElement(d, N2.HTML), I.framesetOk = !1, I.insertionMode = "IN_BODY_MODE";
    else if (G === L.FRAMESET) I._insertElement(d, N2.HTML), I.insertionMode = "IN_FRAMESET_MODE";
    else if (G === L.BASE || G === L.BASEFONT || G === L.BGSOUND || G === L.LINK || G === L.META || G === L.NOFRAMES || G === L.SCRIPT || G === L.STYLE || G === L.TEMPLATE || G === L.TITLE) I._err(w7.abandonedHeadElementChild), I.openElements.push(I.headElement), Q8(I, d), I.openElements.remove(I.headElement);
    else if (G === L.HEAD) I._err(w7.misplacedStartTagForHeadElement);
    else T$(I, d)
  }

  function V39(I, d) {
    let G = d.tagName;
    if (G === L.BODY || G === L.HTML || G === L.BR) T$(I, d);
    else if (G === L.TEMPLATE) aJ(I, d);
    else I._err(w7.endTagWithoutMatchingOpenElement)
  }

  function T$(I, d) {
    I._insertFakeElement(L.BODY), I.insertionMode = "IN_BODY_MODE", I._processToken(d)
  }

  function nJ(I, d) {
    I._reconstructActiveFormattingElements(), I._insertCharacters(d)
  }

  function pa(I, d) {
    I._reconstructActiveFormattingElements(), I._insertCharacters(d), I.framesetOk = !1
  }

  function X39(I, d) {
    if (I.openElements.tmplCount === 0) I.treeAdapter.adoptAttributes(I.openElements.items[0], d.attrs)
  }

  function Y39(I, d) {
    let G = I.openElements.tryPeekProperlyNestedBodyElement();
    if (G && I.openElements.tmplCount === 0) I.framesetOk = !1, I.treeAdapter.adoptAttributes(G, d.attrs)
  }

  function _39(I, d) {
    let G = I.openElements.tryPeekProperlyNestedBodyElement();
    if (I.framesetOk && G) I.treeAdapter.detachNode(G), I.openElements.popAllUpToHtmlElement(), I._insertElement(d, N2.HTML), I.insertionMode = "IN_FRAMESET_MODE"
  }

  function CX(I, d) {
    if (I.openElements.hasInButtonScope(L.P)) I._closePElement();
    I._insertElement(d, N2.HTML)
  }

  function D39(I, d) {
    if (I.openElements.hasInButtonScope(L.P)) I._closePElement();
    let G = I.openElements.currentTagName;
    if (G === L.H1 || G === L.H2 || G === L.H3 || G === L.H4 || G === L.H5 || G === L.H6) I.openElements.pop();
    I._insertElement(d, N2.HTML)
  }

  function sH2(I, d) {
    if (I.openElements.hasInButtonScope(L.P)) I._closePElement();
    I._insertElement(d, N2.HTML), I.skipNextNewLine = !0, I.framesetOk = !1
  }

  function H39(I, d) {
    let G = I.openElements.tmplCount > 0;
    if (!I.formElement || G) {
      if (I.openElements.hasInButtonScope(L.P)) I._closePElement();
      if (I._insertElement(d, N2.HTML), !G) I.formElement = I.openElements.current
    }
  }

  function F39(I, d) {
    I.framesetOk = !1;
    let G = d.tagName;
    for (let Z = I.openElements.stackTop; Z >= 0; Z--) {
      let C = I.openElements.items[Z],
        W = I.treeAdapter.getTagName(C),
        w = null;
      if (G === L.LI && W === L.LI) w = L.LI;
      else if ((G === L.DD || G === L.DT) && (W === L.DD || W === L.DT)) w = W;
      if (w) {
        I.openElements.generateImpliedEndTagsWithExclusion(w), I.openElements.popUntilTagNamePopped(w);
        break
      }
      if (W !== L.ADDRESS && W !== L.DIV && W !== L.P && I._isSpecialElement(C)) break
    }
    if (I.openElements.hasInButtonScope(L.P)) I._closePElement();
    I._insertElement(d, N2.HTML)
  }

  function g39(I, d) {
    if (I.openElements.hasInButtonScope(L.P)) I._closePElement();
    I._insertElement(d, N2.HTML), I.tokenizer.state = z1.MODE.PLAINTEXT
  }

  function J39(I, d) {
    if (I.openElements.hasInScope(L.BUTTON)) I.openElements.generateImpliedEndTags(), I.openElements.popUntilTagNamePopped(L.BUTTON);
    I._reconstructActiveFormattingElements(), I._insertElement(d, N2.HTML), I.framesetOk = !1
  }

  function K39(I, d) {
    let G = I.activeFormattingElements.getElementEntryInScopeWithTagName(L.A);
    if (G) BH(I, d), I.openElements.remove(G.element), I.activeFormattingElements.removeEntry(G);
    I._reconstructActiveFormattingElements(), I._insertElement(d, N2.HTML), I.activeFormattingElements.pushElement(I.openElements.current, d)
  }

  function MR(I, d) {
    I._reconstructActiveFormattingElements(), I._insertElement(d, N2.HTML), I.activeFormattingElements.pushElement(I.openElements.current, d)
  }

  function N39(I, d) {
    if (I._reconstructActiveFormattingElements(), I.openElements.hasInScope(L.NOBR)) BH(I, d), I._reconstructActiveFormattingElements();
    I._insertElement(d, N2.HTML), I.activeFormattingElements.pushElement(I.openElements.current, d)
  }

  function oH2(I, d) {
    I._reconstructActiveFormattingElements(), I._insertElement(d, N2.HTML), I.activeFormattingElements.insertMarker(), I.framesetOk = !1
  }

  function z39(I, d) {
    if (I.treeAdapter.getDocumentMode(I.document) !== rJ.DOCUMENT_MODE.QUIRKS && I.openElements.hasInButtonScope(L.P)) I._closePElement();
    I._insertElement(d, N2.HTML), I.framesetOk = !1, I.insertionMode = "IN_TABLE_MODE"
  }

  function SR(I, d) {
    I._reconstructActiveFormattingElements(), I._appendElement(d, N2.HTML), I.framesetOk = !1, d.ackSelfClosing = !0
  }

  function Q39(I, d) {
    I._reconstructActiveFormattingElements(), I._appendElement(d, N2.HTML);
    let G = z1.getTokenAttr(d, ZF2.TYPE);
    if (!G || G.toLowerCase() !== "hidden") I.framesetOk = !1;
    d.ackSelfClosing = !0
  }

  function eH2(I, d) {
    I._appendElement(d, N2.HTML), d.ackSelfClosing = !0
  }

  function f39(I, d) {
    if (I.openElements.hasInButtonScope(L.P)) I._closePElement();
    I._appendElement(d, N2.HTML), I.framesetOk = !1, I.ackSelfClosing = !0
  }

  function q39(I, d) {
    d.tagName = L.IMG, SR(I, d)
  }

  function R39(I, d) {
    I._insertElement(d, N2.HTML), I.skipNextNewLine = !0, I.tokenizer.state = z1.MODE.RCDATA, I.originalInsertionMode = I.insertionMode, I.framesetOk = !1, I.insertionMode = "TEXT_MODE"
  }

  function U39(I, d) {
    if (I.openElements.hasInButtonScope(L.P)) I._closePElement();
    I._reconstructActiveFormattingElements(), I.framesetOk = !1, I._switchToTextParsing(d, z1.MODE.RAWTEXT)
  }

  function v39(I, d) {
    I.framesetOk = !1, I._switchToTextParsing(d, z1.MODE.RAWTEXT)
  }

  function tH2(I, d) {
    I._switchToTextParsing(d, z1.MODE.RAWTEXT)
  }

  function E39(I, d) {
    if (I._reconstructActiveFormattingElements(), I._insertElement(d, N2.HTML), I.framesetOk = !1, I.insertionMode === "IN_TABLE_MODE" || I.insertionMode === "IN_CAPTION_MODE" || I.insertionMode === "IN_TABLE_BODY_MODE" || I.insertionMode === "IN_ROW_MODE" || I.insertionMode === "IN_CELL_MODE") I.insertionMode = "IN_SELECT_IN_TABLE_MODE";
    else I.insertionMode = "IN_SELECT_MODE"
  }

  function IF2(I, d) {
    if (I.openElements.currentTagName === L.OPTION) I.openElements.pop();
    I._reconstructActiveFormattingElements(), I._insertElement(d, N2.HTML)
  }

  function dF2(I, d) {
    if (I.openElements.hasInScope(L.RUBY)) I.openElements.generateImpliedEndTags();
    I._insertElement(d, N2.HTML)
  }

  function M39(I, d) {
    if (I.openElements.hasInScope(L.RUBY)) I.openElements.generateImpliedEndTagsWithExclusion(L.RTC);
    I._insertElement(d, N2.HTML)
  }

  function S39(I, d) {
    if (I.openElements.hasInButtonScope(L.P)) I._closePElement();
    I._insertElement(d, N2.HTML)
  }

  function L39(I, d) {
    if (I._reconstructActiveFormattingElements(), LB.adjustTokenMathMLAttrs(d), LB.adjustTokenXMLAttrs(d), d.selfClosing) I._appendElement(d, N2.MATHML);
    else I._insertElement(d, N2.MATHML);
    d.ackSelfClosing = !0
  }

  function y39(I, d) {
    if (I._reconstructActiveFormattingElements(), LB.adjustTokenSVGAttrs(d), LB.adjustTokenXMLAttrs(d), d.selfClosing) I._appendElement(d, N2.SVG);
    else I._insertElement(d, N2.SVG);
    d.ackSelfClosing = !0
  }

  function xZ(I, d) {
    I._reconstructActiveFormattingElements(), I._insertElement(d, N2.HTML)
  }

  function Dd(I, d) {
    let G = d.tagName;
    switch (G.length) {
      case 1:
        if (G === L.I || G === L.S || G === L.B || G === L.U) MR(I, d);
        else if (G === L.P) CX(I, d);
        else if (G === L.A) K39(I, d);
        else xZ(I, d);
        break;
      case 2:
        if (G === L.DL || G === L.OL || G === L.UL) CX(I, d);
        else if (G === L.H1 || G === L.H2 || G === L.H3 || G === L.H4 || G === L.H5 || G === L.H6) D39(I, d);
        else if (G === L.LI || G === L.DD || G === L.DT) F39(I, d);
        else if (G === L.EM || G === L.TT) MR(I, d);
        else if (G === L.BR) SR(I, d);
        else if (G === L.HR) f39(I, d);
        else if (G === L.RB) dF2(I, d);
        else if (G === L.RT || G === L.RP) M39(I, d);
        else if (G !== L.TH && G !== L.TD && G !== L.TR) xZ(I, d);
        break;
      case 3:
        if (G === L.DIV || G === L.DIR || G === L.NAV) CX(I, d);
        else if (G === L.PRE) sH2(I, d);
        else if (G === L.BIG) MR(I, d);
        else if (G === L.IMG || G === L.WBR) SR(I, d);
        else if (G === L.XMP) U39(I, d);
        else if (G === L.SVG) y39(I, d);
        else if (G === L.RTC) dF2(I, d);
        else if (G !== L.COL) xZ(I, d);
        break;
      case 4:
        if (G === L.HTML) X39(I, d);
        else if (G === L.BASE || G === L.LINK || G === L.META) Q8(I, d);
        else if (G === L.BODY) Y39(I, d);
        else if (G === L.MAIN || G === L.MENU) CX(I, d);
        else if (G === L.FORM) H39(I, d);
        else if (G === L.CODE || G === L.FONT) MR(I, d);
        else if (G === L.NOBR) N39(I, d);
        else if (G === L.AREA) SR(I, d);
        else if (G === L.MATH) L39(I, d);
        else if (G === L.MENU) S39(I, d);
        else if (G !== L.HEAD) xZ(I, d);
        break;
      case 5:
        if (G === L.STYLE || G === L.TITLE) Q8(I, d);
        else if (G === L.ASIDE) CX(I, d);
        else if (G === L.SMALL) MR(I, d);
        else if (G === L.TABLE) z39(I, d);
        else if (G === L.EMBED) SR(I, d);
        else if (G === L.INPUT) Q39(I, d);
        else if (G === L.PARAM || G === L.TRACK) eH2(I, d);
        else if (G === L.IMAGE) q39(I, d);
        else if (G !== L.FRAME && G !== L.TBODY && G !== L.TFOOT && G !== L.THEAD) xZ(I, d);
        break;
      case 6:
        if (G === L.SCRIPT) Q8(I, d);
        else if (G === L.CENTER || G === L.FIGURE || G === L.FOOTER || G === L.HEADER || G === L.HGROUP || G === L.DIALOG) CX(I, d);
        else if (G === L.BUTTON) J39(I, d);
        else if (G === L.STRIKE || G === L.STRONG) MR(I, d);
        else if (G === L.APPLET || G === L.OBJECT) oH2(I, d);
        else if (G === L.KEYGEN) SR(I, d);
        else if (G === L.SOURCE) eH2(I, d);
        else if (G === L.IFRAME) v39(I, d);
        else if (G === L.SELECT) E39(I, d);
        else if (G === L.OPTION) IF2(I, d);
        else xZ(I, d);
        break;
      case 7:
        if (G === L.BGSOUND) Q8(I, d);
        else if (G === L.DETAILS || G === L.ADDRESS || G === L.ARTICLE || G === L.SECTION || G === L.SUMMARY) CX(I, d);
        else if (G === L.LISTING) sH2(I, d);
        else if (G === L.MARQUEE) oH2(I, d);
        else if (G === L.NOEMBED) tH2(I, d);
        else if (G !== L.CAPTION) xZ(I, d);
        break;
      case 8:
        if (G === L.BASEFONT) Q8(I, d);
        else if (G === L.FRAMESET) _39(I, d);
        else if (G === L.FIELDSET) CX(I, d);
        else if (G === L.TEXTAREA) R39(I, d);
        else if (G === L.TEMPLATE) Q8(I, d);
        else if (G === L.NOSCRIPT)
          if (I.options.scriptingEnabled) tH2(I, d);
          else xZ(I, d);
        else if (G === L.OPTGROUP) IF2(I, d);
        else if (G !== L.COLGROUP) xZ(I, d);
        break;
      case 9:
        if (G === L.PLAINTEXT) g39(I, d);
        else xZ(I, d);
        break;
      case 10:
        if (G === L.BLOCKQUOTE || G === L.FIGCAPTION) CX(I, d);
        else xZ(I, d);
        break;
      default:
        xZ(I, d)
    }
  }

  function P39(I) {
    if (I.openElements.hasInScope(L.BODY)) I.insertionMode = "AFTER_BODY_MODE"
  }

  function $39(I, d) {
    if (I.openElements.hasInScope(L.BODY)) I.insertionMode = "AFTER_BODY_MODE", I._processToken(d)
  }

  function wH(I, d) {
    let G = d.tagName;
    if (I.openElements.hasInScope(G)) I.openElements.generateImpliedEndTags(), I.openElements.popUntilTagNamePopped(G)
  }

  function u39(I) {
    let d = I.openElements.tmplCount > 0,
      G = I.formElement;
    if (!d) I.formElement = null;
    if ((G || d) && I.openElements.hasInScope(L.FORM))
      if (I.openElements.generateImpliedEndTags(), d) I.openElements.popUntilTagNamePopped(L.FORM);
      else I.openElements.remove(G)
  }

  function T39(I) {
    if (!I.openElements.hasInButtonScope(L.P)) I._insertFakeElement(L.P);
    I._closePElement()
  }

  function O39(I) {
    if (I.openElements.hasInListItemScope(L.LI)) I.openElements.generateImpliedEndTagsWithExclusion(L.LI), I.openElements.popUntilTagNamePopped(L.LI)
  }

  function m39(I, d) {
    let G = d.tagName;
    if (I.openElements.hasInScope(G)) I.openElements.generateImpliedEndTagsWithExclusion(G), I.openElements.popUntilTagNamePopped(G)
  }

  function l39(I) {
    if (I.openElements.hasNumberedHeaderInScope()) I.openElements.generateImpliedEndTags(), I.openElements.popUntilNumberedHeaderPopped()
  }

  function GF2(I, d) {
    let G = d.tagName;
    if (I.openElements.hasInScope(G)) I.openElements.generateImpliedEndTags(), I.openElements.popUntilTagNamePopped(G), I.activeFormattingElements.clearToLastMarker()
  }

  function b39(I) {
    I._reconstructActiveFormattingElements(), I._insertFakeElement(L.BR), I.openElements.pop(), I.framesetOk = !1
  }

  function FW(I, d) {
    let G = d.tagName;
    for (let Z = I.openElements.stackTop; Z > 0; Z--) {
      let C = I.openElements.items[Z];
      if (I.treeAdapter.getTagName(C) === G) {
        I.openElements.generateImpliedEndTagsWithExclusion(G), I.openElements.popUntilElementPopped(C);
        break
      }
      if (I._isSpecialElement(C)) break
    }
  }

  function gg1(I, d) {
    let G = d.tagName;
    switch (G.length) {
      case 1:
        if (G === L.A || G === L.B || G === L.I || G === L.S || G === L.U) BH(I, d);
        else if (G === L.P) T39(I, d);
        else FW(I, d);
        break;
      case 2:
        if (G === L.DL || G === L.UL || G === L.OL) wH(I, d);
        else if (G === L.LI) O39(I, d);
        else if (G === L.DD || G === L.DT) m39(I, d);
        else if (G === L.H1 || G === L.H2 || G === L.H3 || G === L.H4 || G === L.H5 || G === L.H6) l39(I, d);
        else if (G === L.BR) b39(I, d);
        else if (G === L.EM || G === L.TT) BH(I, d);
        else FW(I, d);
        break;
      case 3:
        if (G === L.BIG) BH(I, d);
        else if (G === L.DIR || G === L.DIV || G === L.NAV || G === L.PRE) wH(I, d);
        else FW(I, d);
        break;
      case 4:
        if (G === L.BODY) P39(I, d);
        else if (G === L.HTML) $39(I, d);
        else if (G === L.FORM) u39(I, d);
        else if (G === L.CODE || G === L.FONT || G === L.NOBR) BH(I, d);
        else if (G === L.MAIN || G === L.MENU) wH(I, d);
        else FW(I, d);
        break;
      case 5:
        if (G === L.ASIDE) wH(I, d);
        else if (G === L.SMALL) BH(I, d);
        else FW(I, d);
        break;
      case 6:
        if (G === L.CENTER || G === L.FIGURE || G === L.FOOTER || G === L.HEADER || G === L.HGROUP || G === L.DIALOG) wH(I, d);
        else if (G === L.APPLET || G === L.OBJECT) GF2(I, d);
        else if (G === L.STRIKE || G === L.STRONG) BH(I, d);
        else FW(I, d);
        break;
      case 7:
        if (G === L.ADDRESS || G === L.ARTICLE || G === L.DETAILS || G === L.SECTION || G === L.SUMMARY || G === L.LISTING) wH(I, d);
        else if (G === L.MARQUEE) GF2(I, d);
        else FW(I, d);
        break;
      case 8:
        if (G === L.FIELDSET) wH(I, d);
        else if (G === L.TEMPLATE) aJ(I, d);
        else FW(I, d);
        break;
      case 10:
        if (G === L.BLOCKQUOTE || G === L.FIGCAPTION) wH(I, d);
        else FW(I, d);
        break;
      default:
        FW(I, d)
    }
  }

  function WX(I, d) {
    if (I.tmplInsertionModeStackTop > -1) BF2(I, d);
    else I.stopped = !0
  }

  function h39(I, d) {
    if (d.tagName === L.SCRIPT) I.pendingScript = I.openElements.current;
    I.openElements.pop(), I.insertionMode = I.originalInsertionMode
  }

  function j39(I, d) {
    I._err(w7.eofInElementThatCanContainOnlyText), I.openElements.pop(), I.insertionMode = I.originalInsertionMode, I._processToken(d)
  }

  function wX(I, d) {
    let G = I.openElements.currentTagName;
    if (G === L.TABLE || G === L.TBODY || G === L.TFOOT || G === L.THEAD || G === L.TR) I.pendingCharacterTokens = [], I.hasNonWhitespacePendingCharacterToken = !1, I.originalInsertionMode = I.insertionMode, I.insertionMode = "IN_TABLE_TEXT_MODE", I._processToken(d);
    else cZ(I, d)
  }

  function k39(I, d) {
    I.openElements.clearBackToTableContext(), I.activeFormattingElements.insertMarker(), I._insertElement(d, N2.HTML), I.insertionMode = "IN_CAPTION_MODE"
  }

  function x39(I, d) {
    I.openElements.clearBackToTableContext(), I._insertElement(d, N2.HTML), I.insertionMode = "IN_COLUMN_GROUP_MODE"
  }

  function c39(I, d) {
    I.openElements.clearBackToTableContext(), I._insertFakeElement(L.COLGROUP), I.insertionMode = "IN_COLUMN_GROUP_MODE", I._processToken(d)
  }

  function p39(I, d) {
    I.openElements.clearBackToTableContext(), I._insertElement(d, N2.HTML), I.insertionMode = "IN_TABLE_BODY_MODE"
  }

  function i39(I, d) {
    I.openElements.clearBackToTableContext(), I._insertFakeElement(L.TBODY), I.insertionMode = "IN_TABLE_BODY_MODE", I._processToken(d)
  }

  function n39(I, d) {
    if (I.openElements.hasInTableScope(L.TABLE)) I.openElements.popUntilTagNamePopped(L.TABLE), I._resetInsertionMode(), I._processToken(d)
  }

  function r39(I, d) {
    let G = z1.getTokenAttr(d, ZF2.TYPE);
    if (G && G.toLowerCase() === "hidden") I._appendElement(d, N2.HTML);
    else cZ(I, d);
    d.ackSelfClosing = !0
  }

  function a39(I, d) {
    if (!I.formElement && I.openElements.tmplCount === 0) I._insertElement(d, N2.HTML), I.formElement = I.openElements.current, I.openElements.pop()
  }

  function Jg1(I, d) {
    let G = d.tagName;
    switch (G.length) {
      case 2:
        if (G === L.TD || G === L.TH || G === L.TR) i39(I, d);
        else cZ(I, d);
        break;
      case 3:
        if (G === L.COL) c39(I, d);
        else cZ(I, d);
        break;
      case 4:
        if (G === L.FORM) a39(I, d);
        else cZ(I, d);
        break;
      case 5:
        if (G === L.TABLE) n39(I, d);
        else if (G === L.STYLE) Q8(I, d);
        else if (G === L.TBODY || G === L.TFOOT || G === L.THEAD) p39(I, d);
        else if (G === L.INPUT) r39(I, d);
        else cZ(I, d);
        break;
      case 6:
        if (G === L.SCRIPT) Q8(I, d);
        else cZ(I, d);
        break;
      case 7:
        if (G === L.CAPTION) k39(I, d);
        else cZ(I, d);
        break;
      case 8:
        if (G === L.COLGROUP) x39(I, d);
        else if (G === L.TEMPLATE) Q8(I, d);
        else cZ(I, d);
        break;
      default:
        cZ(I, d)
    }
  }

  function Kg1(I, d) {
    let G = d.tagName;
    if (G === L.TABLE) {
      if (I.openElements.hasInTableScope(L.TABLE)) I.openElements.popUntilTagNamePopped(L.TABLE), I._resetInsertionMode()
    } else if (G === L.TEMPLATE) aJ(I, d);
    else if (G !== L.BODY && G !== L.CAPTION && G !== L.COL && G !== L.COLGROUP && G !== L.HTML && G !== L.TBODY && G !== L.TD && G !== L.TFOOT && G !== L.TH && G !== L.THEAD && G !== L.TR) cZ(I, d)
  }

  function cZ(I, d) {
    let G = I.fosterParentingEnabled;
    I.fosterParentingEnabled = !0, I._processTokenInBodyMode(d), I.fosterParentingEnabled = G
  }

  function s39(I, d) {
    I.pendingCharacterTokens.push(d)
  }

  function o39(I, d) {
    I.pendingCharacterTokens.push(d), I.hasNonWhitespacePendingCharacterToken = !0
  }

  function L$(I, d) {
    let G = 0;
    if (I.hasNonWhitespacePendingCharacterToken)
      for (; G < I.pendingCharacterTokens.length; G++) cZ(I, I.pendingCharacterTokens[G]);
    else
      for (; G < I.pendingCharacterTokens.length; G++) I._insertCharacters(I.pendingCharacterTokens[G]);
    I.insertionMode = I.originalInsertionMode, I._processToken(d)
  }

  function e39(I, d) {
    let G = d.tagName;
    if (G === L.CAPTION || G === L.COL || G === L.COLGROUP || G === L.TBODY || G === L.TD || G === L.TFOOT || G === L.TH || G === L.THEAD || G === L.TR) {
      if (I.openElements.hasInTableScope(L.CAPTION)) I.openElements.generateImpliedEndTags(), I.openElements.popUntilTagNamePopped(L.CAPTION), I.activeFormattingElements.clearToLastMarker(), I.insertionMode = "IN_TABLE_MODE", I._processToken(d)
    } else Dd(I, d)
  }

  function t39(I, d) {
    let G = d.tagName;
    if (G === L.CAPTION || G === L.TABLE) {
      if (I.openElements.hasInTableScope(L.CAPTION)) {
        if (I.openElements.generateImpliedEndTags(), I.openElements.popUntilTagNamePopped(L.CAPTION), I.activeFormattingElements.clearToLastMarker(), I.insertionMode = "IN_TABLE_MODE", G === L.TABLE) I._processToken(d)
      }
    } else if (G !== L.BODY && G !== L.COL && G !== L.COLGROUP && G !== L.HTML && G !== L.TBODY && G !== L.TD && G !== L.TFOOT && G !== L.TH && G !== L.THEAD && G !== L.TR) gg1(I, d)
  }

  function I69(I, d) {
    let G = d.tagName;
    if (G === L.HTML) Dd(I, d);
    else if (G === L.COL) I._appendElement(d, N2.HTML), d.ackSelfClosing = !0;
    else if (G === L.TEMPLATE) Q8(I, d);
    else na(I, d)
  }

  function d69(I, d) {
    let G = d.tagName;
    if (G === L.COLGROUP) {
      if (I.openElements.currentTagName === L.COLGROUP) I.openElements.pop(), I.insertionMode = "IN_TABLE_MODE"
    } else if (G === L.TEMPLATE) aJ(I, d);
    else if (G !== L.COL) na(I, d)
  }

  function na(I, d) {
    if (I.openElements.currentTagName === L.COLGROUP) I.openElements.pop(), I.insertionMode = "IN_TABLE_MODE", I._processToken(d)
  }

  function G69(I, d) {
    let G = d.tagName;
    if (G === L.TR) I.openElements.clearBackToTableBodyContext(), I._insertElement(d, N2.HTML), I.insertionMode = "IN_ROW_MODE";
    else if (G === L.TH || G === L.TD) I.openElements.clearBackToTableBodyContext(), I._insertFakeElement(L.TR), I.insertionMode = "IN_ROW_MODE", I._processToken(d);
    else if (G === L.CAPTION || G === L.COL || G === L.COLGROUP || G === L.TBODY || G === L.TFOOT || G === L.THEAD) {
      if (I.openElements.hasTableBodyContextInTableScope()) I.openElements.clearBackToTableBodyContext(), I.openElements.pop(), I.insertionMode = "IN_TABLE_MODE", I._processToken(d)
    } else Jg1(I, d)
  }

  function Z69(I, d) {
    let G = d.tagName;
    if (G === L.TBODY || G === L.TFOOT || G === L.THEAD) {
      if (I.openElements.hasInTableScope(G)) I.openElements.clearBackToTableBodyContext(), I.openElements.pop(), I.insertionMode = "IN_TABLE_MODE"
    } else if (G === L.TABLE) {
      if (I.openElements.hasTableBodyContextInTableScope()) I.openElements.clearBackToTableBodyContext(), I.openElements.pop(), I.insertionMode = "IN_TABLE_MODE", I._processToken(d)
    } else if (G !== L.BODY && G !== L.CAPTION && G !== L.COL && G !== L.COLGROUP || G !== L.HTML && G !== L.TD && G !== L.TH && G !== L.TR) Kg1(I, d)
  }

  function C69(I, d) {
    let G = d.tagName;
    if (G === L.TH || G === L.TD) I.openElements.clearBackToTableRowContext(), I._insertElement(d, N2.HTML), I.insertionMode = "IN_CELL_MODE", I.activeFormattingElements.insertMarker();
    else if (G === L.CAPTION || G === L.COL || G === L.COLGROUP || G === L.TBODY || G === L.TFOOT || G === L.THEAD || G === L.TR) {
      if (I.openElements.hasInTableScope(L.TR)) I.openElements.clearBackToTableRowContext(), I.openElements.pop(), I.insertionMode = "IN_TABLE_BODY_MODE", I._processToken(d)
    } else Jg1(I, d)
  }

  function W69(I, d) {
    let G = d.tagName;
    if (G === L.TR) {
      if (I.openElements.hasInTableScope(L.TR)) I.openElements.clearBackToTableRowContext(), I.openElements.pop(), I.insertionMode = "IN_TABLE_BODY_MODE"
    } else if (G === L.TABLE) {
      if (I.openElements.hasInTableScope(L.TR)) I.openElements.clearBackToTableRowContext(), I.openElements.pop(), I.insertionMode = "IN_TABLE_BODY_MODE", I._processToken(d)
    } else if (G === L.TBODY || G === L.TFOOT || G === L.THEAD) {
      if (I.openElements.hasInTableScope(G) || I.openElements.hasInTableScope(L.TR)) I.openElements.clearBackToTableRowContext(), I.openElements.pop(), I.insertionMode = "IN_TABLE_BODY_MODE", I._processToken(d)
    } else if (G !== L.BODY && G !== L.CAPTION && G !== L.COL && G !== L.COLGROUP || G !== L.HTML && G !== L.TD && G !== L.TH) Kg1(I, d)
  }

  function w69(I, d) {
    let G = d.tagName;
    if (G === L.CAPTION || G === L.COL || G === L.COLGROUP || G === L.TBODY || G === L.TD || G === L.TFOOT || G === L.TH || G === L.THEAD || G === L.TR) {
      if (I.openElements.hasInTableScope(L.TD) || I.openElements.hasInTableScope(L.TH)) I._closeTableCell(), I._processToken(d)
    } else Dd(I, d)
  }

  function B69(I, d) {
    let G = d.tagName;
    if (G === L.TD || G === L.TH) {
      if (I.openElements.hasInTableScope(G)) I.openElements.generateImpliedEndTags(), I.openElements.popUntilTagNamePopped(G), I.activeFormattingElements.clearToLastMarker(), I.insertionMode = "IN_ROW_MODE"
    } else if (G === L.TABLE || G === L.TBODY || G === L.TFOOT || G === L.THEAD || G === L.TR) {
      if (I.openElements.hasInTableScope(G)) I._closeTableCell(), I._processToken(d)
    } else if (G !== L.BODY && G !== L.CAPTION && G !== L.COL && G !== L.COLGROUP && G !== L.HTML) gg1(I, d)
  }

  function WF2(I, d) {
    let G = d.tagName;
    if (G === L.HTML) Dd(I, d);
    else if (G === L.OPTION) {
      if (I.openElements.currentTagName === L.OPTION) I.openElements.pop();
      I._insertElement(d, N2.HTML)
    } else if (G === L.OPTGROUP) {
      if (I.openElements.currentTagName === L.OPTION) I.openElements.pop();
      if (I.openElements.currentTagName === L.OPTGROUP) I.openElements.pop();
      I._insertElement(d, N2.HTML)
    } else if (G === L.INPUT || G === L.KEYGEN || G === L.TEXTAREA || G === L.SELECT) {
      if (I.openElements.hasInSelectScope(L.SELECT)) {
        if (I.openElements.popUntilTagNamePopped(L.SELECT), I._resetInsertionMode(), G !== L.SELECT) I._processToken(d)
      }
    } else if (G === L.SCRIPT || G === L.TEMPLATE) Q8(I, d)
  }

  function wF2(I, d) {
    let G = d.tagName;
    if (G === L.OPTGROUP) {
      let Z = I.openElements.items[I.openElements.stackTop - 1],
        C = Z && I.treeAdapter.getTagName(Z);
      if (I.openElements.currentTagName === L.OPTION && C === L.OPTGROUP) I.openElements.pop();
      if (I.openElements.currentTagName === L.OPTGROUP) I.openElements.pop()
    } else if (G === L.OPTION) {
      if (I.openElements.currentTagName === L.OPTION) I.openElements.pop()
    } else if (G === L.SELECT && I.openElements.hasInSelectScope(L.SELECT)) I.openElements.popUntilTagNamePopped(L.SELECT), I._resetInsertionMode();
    else if (G === L.TEMPLATE) aJ(I, d)
  }

  function A69(I, d) {
    let G = d.tagName;
    if (G === L.CAPTION || G === L.TABLE || G === L.TBODY || G === L.TFOOT || G === L.THEAD || G === L.TR || G === L.TD || G === L.TH) I.openElements.popUntilTagNamePopped(L.SELECT), I._resetInsertionMode(), I._processToken(d);
    else WF2(I, d)
  }

  function V69(I, d) {
    let G = d.tagName;
    if (G === L.CAPTION || G === L.TABLE || G === L.TBODY || G === L.TFOOT || G === L.THEAD || G === L.TR || G === L.TD || G === L.TH) {
      if (I.openElements.hasInTableScope(G)) I.openElements.popUntilTagNamePopped(L.SELECT), I._resetInsertionMode(), I._processToken(d)
    } else wF2(I, d)
  }

  function X69(I, d) {
    let G = d.tagName;
    if (G === L.BASE || G === L.BASEFONT || G === L.BGSOUND || G === L.LINK || G === L.META || G === L.NOFRAMES || G === L.SCRIPT || G === L.STYLE || G === L.TEMPLATE || G === L.TITLE) Q8(I, d);
    else {
      let Z = n99[G] || "IN_BODY_MODE";
      I._popTmplInsertionMode(), I._pushTmplInsertionMode(Z), I.insertionMode = Z, I._processToken(d)
    }
  }

  function Y69(I, d) {
    if (d.tagName === L.TEMPLATE) aJ(I, d)
  }

  function BF2(I, d) {
    if (I.openElements.tmplCount > 0) I.openElements.popUntilTagNamePopped(L.TEMPLATE), I.activeFormattingElements.clearToLastMarker(), I._popTmplInsertionMode(), I._resetInsertionMode(), I._processToken(d);
    else I.stopped = !0
  }

  function _69(I, d) {
    if (d.tagName === L.HTML) Dd(I, d);
    else ra(I, d)
  }

  function D69(I, d) {
    if (d.tagName === L.HTML) {
      if (!I.fragmentContext) I.insertionMode = "AFTER_AFTER_BODY_MODE"
    } else ra(I, d)
  }

  function ra(I, d) {
    I.insertionMode = "IN_BODY_MODE", I._processToken(d)
  }

  function H69(I, d) {
    let G = d.tagName;
    if (G === L.HTML) Dd(I, d);
    else if (G === L.FRAMESET) I._insertElement(d, N2.HTML);
    else if (G === L.FRAME) I._appendElement(d, N2.HTML), d.ackSelfClosing = !0;
    else if (G === L.NOFRAMES) Q8(I, d)
  }

  function F69(I, d) {
    if (d.tagName === L.FRAMESET && !I.openElements.isRootHtmlElementCurrent()) {
      if (I.openElements.pop(), !I.fragmentContext && I.openElements.currentTagName !== L.FRAMESET) I.insertionMode = "AFTER_FRAMESET_MODE"
    }
  }

  function g69(I, d) {
    let G = d.tagName;
    if (G === L.HTML) Dd(I, d);
    else if (G === L.NOFRAMES) Q8(I, d)
  }

  function J69(I, d) {
    if (d.tagName === L.HTML) I.insertionMode = "AFTER_AFTER_FRAMESET_MODE"
  }

  function K69(I, d) {
    if (d.tagName === L.HTML) Dd(I, d);
    else ia(I, d)
  }

  function ia(I, d) {
    I.insertionMode = "IN_BODY_MODE", I._processToken(d)
  }

  function N69(I, d) {
    let G = d.tagName;
    if (G === L.HTML) Dd(I, d);
    else if (G === L.NOFRAMES) Q8(I, d)
  }

  function z69(I, d) {
    d.chars = c99.REPLACEMENT_CHARACTER, I._insertCharacters(d)
  }

  function Q69(I, d) {
    I._insertCharacters(d), I.framesetOk = !1
  }

  function f69(I, d) {
    if (LB.causesExit(d) && !I.fragmentContext) {
      while (I.treeAdapter.getNamespaceURI(I.openElements.current) !== N2.HTML && !I._isIntegrationPoint(I.openElements.current)) I.openElements.pop();
      I._processToken(d)
    } else {
      let G = I._getAdjustedCurrentElement(),
        Z = I.treeAdapter.getNamespaceURI(G);
      if (Z === N2.MATHML) LB.adjustTokenMathMLAttrs(d);
      else if (Z === N2.SVG) LB.adjustTokenSVGTagName(d), LB.adjustTokenSVGAttrs(d);
      if (LB.adjustTokenXMLAttrs(d), d.selfClosing) I._appendElement(d, Z);
      else I._insertElement(d, Z);
      d.ackSelfClosing = !0
    }
  }

  function q69(I, d) {
    for (let G = I.openElements.stackTop; G > 0; G--) {
      let Z = I.openElements.items[G];
      if (I.treeAdapter.getNamespaceURI(Z) === N2.HTML) {
        I._processToken(d);
        break
      }
      if (I.treeAdapter.getTagName(Z).toLowerCase() === d.tagName) {
        I.openElements.popUntilElementPopped(Z);
        break
      }
    }
  }
})
// @from(Start 5204231, End 5207580)
_F2 = Y((vJ3, YF2) => {
  var R69 = Xg1(),
    U69 = Yg1(),
    v69 = _g1(),
    XF2 = WH(),
    v9 = XF2.TAG_NAMES,
    aa = XF2.NAMESPACES,
    E69 = {
      treeAdapter: R69
    },
    M69 = /&/g,
    S69 = /\u00a0/g,
    L69 = /"/g,
    y69 = /</g,
    P69 = />/g;
  class O$ {
    constructor(I, d) {
      this.options = U69(E69, d), this.treeAdapter = this.options.treeAdapter, this.html = "", this.startNode = I
    }
    serialize() {
      return this._serializeChildNodes(this.startNode), this.html
    }
    _serializeChildNodes(I) {
      let d = this.treeAdapter.getChildNodes(I);
      if (d)
        for (let G = 0, Z = d.length; G < Z; G++) {
          let C = d[G];
          if (this.treeAdapter.isElementNode(C)) this._serializeElement(C);
          else if (this.treeAdapter.isTextNode(C)) this._serializeTextNode(C);
          else if (this.treeAdapter.isCommentNode(C)) this._serializeCommentNode(C);
          else if (this.treeAdapter.isDocumentTypeNode(C)) this._serializeDocumentTypeNode(C)
        }
    }
    _serializeElement(I) {
      let d = this.treeAdapter.getTagName(I),
        G = this.treeAdapter.getNamespaceURI(I);
      if (this.html += "<" + d, this._serializeAttributes(I), this.html += ">", d !== v9.AREA && d !== v9.BASE && d !== v9.BASEFONT && d !== v9.BGSOUND && d !== v9.BR && d !== v9.COL && d !== v9.EMBED && d !== v9.FRAME && d !== v9.HR && d !== v9.IMG && d !== v9.INPUT && d !== v9.KEYGEN && d !== v9.LINK && d !== v9.META && d !== v9.PARAM && d !== v9.SOURCE && d !== v9.TRACK && d !== v9.WBR) {
        let Z = d === v9.TEMPLATE && G === aa.HTML ? this.treeAdapter.getTemplateContent(I) : I;
        this._serializeChildNodes(Z), this.html += "</" + d + ">"
      }
    }
    _serializeAttributes(I) {
      let d = this.treeAdapter.getAttrList(I);
      for (let G = 0, Z = d.length; G < Z; G++) {
        let C = d[G],
          W = O$.escapeString(C.value, !0);
        if (this.html += " ", !C.namespace) this.html += C.name;
        else if (C.namespace === aa.XML) this.html += "xml:" + C.name;
        else if (C.namespace === aa.XMLNS) {
          if (C.name !== "xmlns") this.html += "xmlns:";
          this.html += C.name
        } else if (C.namespace === aa.XLINK) this.html += "xlink:" + C.name;
        else this.html += C.prefix + ":" + C.name;
        this.html += '="' + W + '"'
      }
    }
    _serializeTextNode(I) {
      let d = this.treeAdapter.getTextNodeContent(I),
        G = this.treeAdapter.getParentNode(I),
        Z = void 0;
      if (G && this.treeAdapter.isElementNode(G)) Z = this.treeAdapter.getTagName(G);
      if (Z === v9.STYLE || Z === v9.SCRIPT || Z === v9.XMP || Z === v9.IFRAME || Z === v9.NOEMBED || Z === v9.NOFRAMES || Z === v9.PLAINTEXT || Z === v9.NOSCRIPT) this.html += d;
      else this.html += O$.escapeString(d, !1)
    }
    _serializeCommentNode(I) {
      this.html += "<!--" + this.treeAdapter.getCommentNodeContent(I) + "-->"
    }
    _serializeDocumentTypeNode(I) {
      let d = this.treeAdapter.getDocumentTypeNodeName(I);
      this.html += "<" + v69.serializeContent(d, null, null) + ">"
    }
  }
  O$.escapeString = function(I, d) {
    if (I = I.replace(M69, "&amp;").replace(S69, "&nbsp;"), d) I = I.replace(L69, "&quot;");
    else I = I.replace(y69, "&lt;").replace(P69, "&gt;");
    return I
  };
  YF2.exports = O$
})
// @from(Start 5207586, End 5207934)
HF2 = Y((u69) => {
  var DF2 = VF2(),
    $69 = _F2();
  u69.parse = function I(d, G) {
    return new DF2(G).parse(d)
  };
  u69.parseFragment = function I(d, G, Z) {
    if (typeof d === "string") Z = G, G = d, d = null;
    return new DF2(Z).parseFragment(G, d)
  };
  u69.serialize = function(I, d) {
    return new $69(I, d).serialize()
  }
})
// @from(Start 5207940, End 5213020)
zg1 = Y((l69) => {
  var Ng1 = l69.NAMESPACES = {
    HTML: "http://www.w3.org/1999/xhtml",
    MATHML: "http://www.w3.org/1998/Math/MathML",
    SVG: "http://www.w3.org/2000/svg",
    XLINK: "http://www.w3.org/1999/xlink",
    XML: "http://www.w3.org/XML/1998/namespace",
    XMLNS: "http://www.w3.org/2000/xmlns/"
  };
  l69.ATTRS = {
    TYPE: "type",
    ACTION: "action",
    ENCODING: "encoding",
    PROMPT: "prompt",
    NAME: "name",
    COLOR: "color",
    FACE: "face",
    SIZE: "size"
  };
  l69.DOCUMENT_MODE = {
    NO_QUIRKS: "no-quirks",
    QUIRKS: "quirks",
    LIMITED_QUIRKS: "limited-quirks"
  };
  var b0 = l69.TAG_NAMES = {
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
  l69.SPECIAL_ELEMENTS = {
    [Ng1.HTML]: {
      [b0.ADDRESS]: !0,
      [b0.APPLET]: !0,
      [b0.AREA]: !0,
      [b0.ARTICLE]: !0,
      [b0.ASIDE]: !0,
      [b0.BASE]: !0,
      [b0.BASEFONT]: !0,
      [b0.BGSOUND]: !0,
      [b0.BLOCKQUOTE]: !0,
      [b0.BODY]: !0,
      [b0.BR]: !0,
      [b0.BUTTON]: !0,
      [b0.CAPTION]: !0,
      [b0.CENTER]: !0,
      [b0.COL]: !0,
      [b0.COLGROUP]: !0,
      [b0.DD]: !0,
      [b0.DETAILS]: !0,
      [b0.DIR]: !0,
      [b0.DIV]: !0,
      [b0.DL]: !0,
      [b0.DT]: !0,
      [b0.EMBED]: !0,
      [b0.FIELDSET]: !0,
      [b0.FIGCAPTION]: !0,
      [b0.FIGURE]: !0,
      [b0.FOOTER]: !0,
      [b0.FORM]: !0,
      [b0.FRAME]: !0,
      [b0.FRAMESET]: !0,
      [b0.H1]: !0,
      [b0.H2]: !0,
      [b0.H3]: !0,
      [b0.H4]: !0,
      [b0.H5]: !0,
      [b0.H6]: !0,
      [b0.HEAD]: !0,
      [b0.HEADER]: !0,
      [b0.HGROUP]: !0,
      [b0.HR]: !0,
      [b0.HTML]: !0,
      [b0.IFRAME]: !0,
      [b0.IMG]: !0,
      [b0.INPUT]: !0,
      [b0.LI]: !0,
      [b0.LINK]: !0,
      [b0.LISTING]: !0,
      [b0.MAIN]: !0,
      [b0.MARQUEE]: !0,
      [b0.MENU]: !0,
      [b0.META]: !0,
      [b0.NAV]: !0,
      [b0.NOEMBED]: !0,
      [b0.NOFRAMES]: !0,
      [b0.NOSCRIPT]: !0,
      [b0.OBJECT]: !0,
      [b0.OL]: !0,
      [b0.P]: !0,
      [b0.PARAM]: !0,
      [b0.PLAINTEXT]: !0,
      [b0.PRE]: !0,
      [b0.SCRIPT]: !0,
      [b0.SECTION]: !0,
      [b0.SELECT]: !0,
      [b0.SOURCE]: !0,
      [b0.STYLE]: !0,
      [b0.SUMMARY]: !0,
      [b0.TABLE]: !0,
      [b0.TBODY]: !0,
      [b0.TD]: !0,
      [b0.TEMPLATE]: !0,
      [b0.TEXTAREA]: !0,
      [b0.TFOOT]: !0,
      [b0.TH]: !0,
      [b0.THEAD]: !0,
      [b0.TITLE]: !0,
      [b0.TR]: !0,
      [b0.TRACK]: !0,
      [b0.UL]: !0,
      [b0.WBR]: !0,
      [b0.XMP]: !0
    },
    [Ng1.MATHML]: {
      [b0.MI]: !0,
      [b0.MO]: !0,
      [b0.MN]: !0,
      [b0.MS]: !0,
      [b0.MTEXT]: !0,
      [b0.ANNOTATION_XML]: !0
    },
    [Ng1.SVG]: {
      [b0.TITLE]: !0,
      [b0.FOREIGN_OBJECT]: !0,
      [b0.DESC]: !0
    }
  }
})
// @from(Start 5213026, End 5216815)
NF2 = Y((p69) => {
  var {
    DOCUMENT_MODE: LR
  } = zg1(), JF2 = ["+//silmaril//dtd html pro v0r11 19970101//", "-//as//dtd html 3.0 aswedit + extensions//", "-//advasoft ltd//dtd html 3.0 aswedit + extensions//", "-//ietf//dtd html 2.0 level 1//", "-//ietf//dtd html 2.0 level 2//", "-//ietf//dtd html 2.0 strict level 1//", "-//ietf//dtd html 2.0 strict level 2//", "-//ietf//dtd html 2.0 strict//", "-//ietf//dtd html 2.0//", "-//ietf//dtd html 2.1e//", "-//ietf//dtd html 3.0//", "-//ietf//dtd html 3.2 final//", "-//ietf//dtd html 3.2//", "-//ietf//dtd html 3//", "-//ietf//dtd html level 0//", "-//ietf//dtd html level 1//", "-//ietf//dtd html level 2//", "-//ietf//dtd html level 3//", "-//ietf//dtd html strict level 0//", "-//ietf//dtd html strict level 1//", "-//ietf//dtd html strict level 2//", "-//ietf//dtd html strict level 3//", "-//ietf//dtd html strict//", "-//ietf//dtd html//", "-//metrius//dtd metrius presentational//", "-//microsoft//dtd internet explorer 2.0 html strict//", "-//microsoft//dtd internet explorer 2.0 html//", "-//microsoft//dtd internet explorer 2.0 tables//", "-//microsoft//dtd internet explorer 3.0 html strict//", "-//microsoft//dtd internet explorer 3.0 html//", "-//microsoft//dtd internet explorer 3.0 tables//", "-//netscape comm. corp.//dtd html//", "-//netscape comm. corp.//dtd strict html//", "-//o'reilly and associates//dtd html 2.0//", "-//o'reilly and associates//dtd html extended 1.0//", "-//o'reilly and associates//dtd html extended relaxed 1.0//", "-//sq//dtd html 2.0 hotmetal + extensions//", "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//", "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//", "-//spyglass//dtd html 2.0 extended//", "-//sun microsystems corp.//dtd hotjava html//", "-//sun microsystems corp.//dtd hotjava strict html//", "-//w3c//dtd html 3 1995-03-24//", "-//w3c//dtd html 3.2 draft//", "-//w3c//dtd html 3.2 final//", "-//w3c//dtd html 3.2//", "-//w3c//dtd html 3.2s draft//", "-//w3c//dtd html 4.0 frameset//", "-//w3c//dtd html 4.0 transitional//", "-//w3c//dtd html experimental 19960712//", "-//w3c//dtd html experimental 970421//", "-//w3c//dtd w3 html//", "-//w3o//dtd w3 html 3.0//", "-//webtechs//dtd mozilla html 2.0//", "-//webtechs//dtd mozilla html//"], k69 = JF2.concat(["-//w3c//dtd html 4.01 frameset//", "-//w3c//dtd html 4.01 transitional//"]), x69 = ["-//w3o//dtd w3 html strict 3.0//en//", "-/w3c/dtd html 4.0 transitional/en", "html"], KF2 = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"], c69 = KF2.concat(["-//w3c//dtd html 4.01 frameset//", "-//w3c//dtd html 4.01 transitional//"]);

  function FF2(I) {
    let d = I.indexOf('"') !== -1 ? "'" : '"';
    return d + I + d
  }

  function gF2(I, d) {
    for (let G = 0; G < d.length; G++)
      if (I.indexOf(d[G]) === 0) return !0;
    return !1
  }
  p69.isConforming = function(I) {
    return I.name === "html" && I.publicId === null && (I.systemId === null || I.systemId === "about:legacy-compat")
  };
  p69.getDocumentMode = function(I) {
    if (I.name !== "html") return LR.QUIRKS;
    let d = I.systemId;
    if (d && d.toLowerCase() === "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd") return LR.QUIRKS;
    let G = I.publicId;
    if (G !== null) {
      if (G = G.toLowerCase(), x69.indexOf(G) > -1) return LR.QUIRKS;
      let Z = d === null ? k69 : JF2;
      if (gF2(G, Z)) return LR.QUIRKS;
      if (Z = d === null ? KF2 : c69, gF2(G, Z)) return LR.LIMITED_QUIRKS
    }
    return LR.NO_QUIRKS
  };
  p69.serializeContent = function(I, d, G) {
    let Z = "!DOCTYPE ";
    if (I) Z += I;
    if (d) Z += " PUBLIC " + FF2(d);
    else if (G) Z += " SYSTEM";
    if (G !== null) Z += " " + FF2(G);
    return Z
  }
})
// @from(Start 5216821, End 5222660)
qF2 = Y((e69) => {
  var a69 = NF2(),
    {
      DOCUMENT_MODE: s69
    } = zg1(),
    zF2 = {
      element: 1,
      text: 3,
      cdata: 4,
      comment: 8
    },
    QF2 = {
      tagName: "name",
      childNodes: "children",
      parentNode: "parent",
      previousSibling: "prev",
      nextSibling: "next",
      nodeValue: "data"
    };
  class AH {
    constructor(I) {
      for (let d of Object.keys(I)) this[d] = I[d]
    }
    get firstChild() {
      let I = this.children;
      return I && I[0] || null
    }
    get lastChild() {
      let I = this.children;
      return I && I[I.length - 1] || null
    }
    get nodeType() {
      return zF2[this.type] || zF2.element
    }
  }
  Object.keys(QF2).forEach((I) => {
    let d = QF2[I];
    Object.defineProperty(AH.prototype, I, {
      get: function() {
        return this[d] || null
      },
      set: function(G) {
        return this[d] = G, G
      }
    })
  });
  e69.createDocument = function() {
    return new AH({
      type: "root",
      name: "root",
      parent: null,
      prev: null,
      next: null,
      children: [],
      "x-mode": s69.NO_QUIRKS
    })
  };
  e69.createDocumentFragment = function() {
    return new AH({
      type: "root",
      name: "root",
      parent: null,
      prev: null,
      next: null,
      children: []
    })
  };
  e69.createElement = function(I, d, G) {
    let Z = Object.create(null),
      C = Object.create(null),
      W = Object.create(null);
    for (let w = 0; w < G.length; w++) {
      let B = G[w].name;
      Z[B] = G[w].value, C[B] = G[w].namespace, W[B] = G[w].prefix
    }
    return new AH({
      type: I === "script" || I === "style" ? I : "tag",
      name: I,
      namespace: d,
      attribs: Z,
      "x-attribsNamespace": C,
      "x-attribsPrefix": W,
      children: [],
      parent: null,
      prev: null,
      next: null
    })
  };
  e69.createCommentNode = function(I) {
    return new AH({
      type: "comment",
      data: I,
      parent: null,
      prev: null,
      next: null
    })
  };
  var fF2 = function(I) {
      return new AH({
        type: "text",
        data: I,
        parent: null,
        prev: null,
        next: null
      })
    },
    Qg1 = e69.appendChild = function(I, d) {
      let G = I.children[I.children.length - 1];
      if (G) G.next = d, d.prev = G;
      I.children.push(d), d.parent = I
    },
    o69 = e69.insertBefore = function(I, d, G) {
      let Z = I.children.indexOf(G),
        C = G.prev;
      if (C) C.next = d, d.prev = C;
      G.prev = d, d.next = G, I.children.splice(Z, 0, d), d.parent = I
    };
  e69.setTemplateContent = function(I, d) {
    Qg1(I, d)
  };
  e69.getTemplateContent = function(I) {
    return I.children[0]
  };
  e69.setDocumentType = function(I, d, G, Z) {
    let C = a69.serializeContent(d, G, Z),
      W = null;
    for (let w = 0; w < I.children.length; w++)
      if (I.children[w].type === "directive" && I.children[w].name === "!doctype") {
        W = I.children[w];
        break
      } if (W) W.data = C, W["x-name"] = d, W["x-publicId"] = G, W["x-systemId"] = Z;
    else Qg1(I, new AH({
      type: "directive",
      name: "!doctype",
      data: C,
      "x-name": d,
      "x-publicId": G,
      "x-systemId": Z
    }))
  };
  e69.setDocumentMode = function(I, d) {
    I["x-mode"] = d
  };
  e69.getDocumentMode = function(I) {
    return I["x-mode"]
  };
  e69.detachNode = function(I) {
    if (I.parent) {
      let d = I.parent.children.indexOf(I),
        G = I.prev,
        Z = I.next;
      if (I.prev = null, I.next = null, G) G.next = Z;
      if (Z) Z.prev = G;
      I.parent.children.splice(d, 1), I.parent = null
    }
  };
  e69.insertText = function(I, d) {
    let G = I.children[I.children.length - 1];
    if (G && G.type === "text") G.data += d;
    else Qg1(I, fF2(d))
  };
  e69.insertTextBefore = function(I, d, G) {
    let Z = I.children[I.children.indexOf(G) - 1];
    if (Z && Z.type === "text") Z.data += d;
    else o69(I, fF2(d), G)
  };
  e69.adoptAttributes = function(I, d) {
    for (let G = 0; G < d.length; G++) {
      let Z = d[G].name;
      if (typeof I.attribs[Z] === "undefined") I.attribs[Z] = d[G].value, I["x-attribsNamespace"][Z] = d[G].namespace, I["x-attribsPrefix"][Z] = d[G].prefix
    }
  };
  e69.getFirstChild = function(I) {
    return I.children[0]
  };
  e69.getChildNodes = function(I) {
    return I.children
  };
  e69.getParentNode = function(I) {
    return I.parent
  };
  e69.getAttrList = function(I) {
    let d = [];
    for (let G in I.attribs) d.push({
      name: G,
      value: I.attribs[G],
      namespace: I["x-attribsNamespace"][G],
      prefix: I["x-attribsPrefix"][G]
    });
    return d
  };
  e69.getTagName = function(I) {
    return I.name
  };
  e69.getNamespaceURI = function(I) {
    return I.namespace
  };
  e69.getTextNodeContent = function(I) {
    return I.data
  };
  e69.getCommentNodeContent = function(I) {
    return I.data
  };
  e69.getDocumentTypeNodeName = function(I) {
    return I["x-name"]
  };
  e69.getDocumentTypeNodePublicId = function(I) {
    return I["x-publicId"]
  };
  e69.getDocumentTypeNodeSystemId = function(I) {
    return I["x-systemId"]
  };
  e69.isTextNode = function(I) {
    return I.type === "text"
  };
  e69.isCommentNode = function(I) {
    return I.type === "comment"
  };
  e69.isDocumentTypeNode = function(I) {
    return I.type === "directive" && I.name === "!doctype"
  };
  e69.isElementNode = function(I) {
    return !!I.attribs
  };
  e69.setNodeSourceCodeLocation = function(I, d) {
    I.sourceCodeLocation = d
  };
  e69.getNodeSourceCodeLocation = function(I) {
    return I.sourceCodeLocation
  };
  e69.updateNodeSourceCodeLocation = function(I, d) {
    I.sourceCodeLocation = Object.assign(I.sourceCodeLocation, d)
  }
})
// @from(Start 5222666, End 5227291)
fg1 = Y((TJ3, RF2) => {
  RF2.exports = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  }
})
// @from(Start 5227297, End 5241727)
qg1 = Y((OJ3, vF2) => {
  var m$ = fg1(),
    UF2 = {};
  for (let I of Object.keys(m$)) UF2[m$[I]] = I;
  var v2 = {
    rgb: {
      channels: 3,
      labels: "rgb"
    },
    hsl: {
      channels: 3,
      labels: "hsl"
    },
    hsv: {
      channels: 3,
      labels: "hsv"
    },
    hwb: {
      channels: 3,
      labels: "hwb"
    },
    cmyk: {
      channels: 4,
      labels: "cmyk"
    },
    xyz: {
      channels: 3,
      labels: "xyz"
    },
    lab: {
      channels: 3,
      labels: "lab"
    },
    lch: {
      channels: 3,
      labels: "lch"
    },
    hex: {
      channels: 1,
      labels: ["hex"]
    },
    keyword: {
      channels: 1,
      labels: ["keyword"]
    },
    ansi16: {
      channels: 1,
      labels: ["ansi16"]
    },
    ansi256: {
      channels: 1,
      labels: ["ansi256"]
    },
    hcg: {
      channels: 3,
      labels: ["h", "c", "g"]
    },
    apple: {
      channels: 3,
      labels: ["r16", "g16", "b16"]
    },
    gray: {
      channels: 1,
      labels: ["gray"]
    }
  };
  vF2.exports = v2;
  for (let I of Object.keys(v2)) {
    if (!("channels" in v2[I])) throw new Error("missing channels property: " + I);
    if (!("labels" in v2[I])) throw new Error("missing channel labels property: " + I);
    if (v2[I].labels.length !== v2[I].channels) throw new Error("channel and label counts mismatch: " + I);
    let {
      channels: d,
      labels: G
    } = v2[I];
    delete v2[I].channels, delete v2[I].labels, Object.defineProperty(v2[I], "channels", {
      value: d
    }), Object.defineProperty(v2[I], "labels", {
      value: G
    })
  }
  v2.rgb.hsl = function(I) {
    let d = I[0] / 255,
      G = I[1] / 255,
      Z = I[2] / 255,
      C = Math.min(d, G, Z),
      W = Math.max(d, G, Z),
      w = W - C,
      B, A;
    if (W === C) B = 0;
    else if (d === W) B = (G - Z) / w;
    else if (G === W) B = 2 + (Z - d) / w;
    else if (Z === W) B = 4 + (d - G) / w;
    if (B = Math.min(B * 60, 360), B < 0) B += 360;
    let V = (C + W) / 2;
    if (W === C) A = 0;
    else if (V <= 0.5) A = w / (W + C);
    else A = w / (2 - W - C);
    return [B, A * 100, V * 100]
  };
  v2.rgb.hsv = function(I) {
    let d, G, Z, C, W, w = I[0] / 255,
      B = I[1] / 255,
      A = I[2] / 255,
      V = Math.max(w, B, A),
      X = V - Math.min(w, B, A),
      _ = function(F) {
        return (V - F) / 6 / X + 0.5
      };
    if (X === 0) C = 0, W = 0;
    else {
      if (W = X / V, d = _(w), G = _(B), Z = _(A), w === V) C = Z - G;
      else if (B === V) C = 0.3333333333333333 + d - Z;
      else if (A === V) C = 0.6666666666666666 + G - d;
      if (C < 0) C += 1;
      else if (C > 1) C -= 1
    }
    return [C * 360, W * 100, V * 100]
  };
  v2.rgb.hwb = function(I) {
    let d = I[0],
      G = I[1],
      Z = I[2],
      C = v2.rgb.hsl(I)[0],
      W = 0.00392156862745098 * Math.min(d, Math.min(G, Z));
    return Z = 1 - 0.00392156862745098 * Math.max(d, Math.max(G, Z)), [C, W * 100, Z * 100]
  };
  v2.rgb.cmyk = function(I) {
    let d = I[0] / 255,
      G = I[1] / 255,
      Z = I[2] / 255,
      C = Math.min(1 - d, 1 - G, 1 - Z),
      W = (1 - d - C) / (1 - C) || 0,
      w = (1 - G - C) / (1 - C) || 0,
      B = (1 - Z - C) / (1 - C) || 0;
    return [W * 100, w * 100, B * 100, C * 100]
  };

  function L89(I, d) {
    return (I[0] - d[0]) ** 2 + (I[1] - d[1]) ** 2 + (I[2] - d[2]) ** 2
  }
  v2.rgb.keyword = function(I) {
    let d = UF2[I];
    if (d) return d;
    let G = 1 / 0,
      Z;
    for (let C of Object.keys(m$)) {
      let W = m$[C],
        w = L89(I, W);
      if (w < G) G = w, Z = C
    }
    return Z
  };
  v2.keyword.rgb = function(I) {
    return m$[I]
  };
  v2.rgb.xyz = function(I) {
    let d = I[0] / 255,
      G = I[1] / 255,
      Z = I[2] / 255;
    d = d > 0.04045 ? ((d + 0.055) / 1.055) ** 2.4 : d / 12.92, G = G > 0.04045 ? ((G + 0.055) / 1.055) ** 2.4 : G / 12.92, Z = Z > 0.04045 ? ((Z + 0.055) / 1.055) ** 2.4 : Z / 12.92;
    let C = d * 0.4124 + G * 0.3576 + Z * 0.1805,
      W = d * 0.2126 + G * 0.7152 + Z * 0.0722,
      w = d * 0.0193 + G * 0.1192 + Z * 0.9505;
    return [C * 100, W * 100, w * 100]
  };
  v2.rgb.lab = function(I) {
    let d = v2.rgb.xyz(I),
      G = d[0],
      Z = d[1],
      C = d[2];
    G /= 95.047, Z /= 100, C /= 108.883, G = G > 0.008856 ? G ** 0.3333333333333333 : 7.787 * G + 0.13793103448275862, Z = Z > 0.008856 ? Z ** 0.3333333333333333 : 7.787 * Z + 0.13793103448275862, C = C > 0.008856 ? C ** 0.3333333333333333 : 7.787 * C + 0.13793103448275862;
    let W = 116 * Z - 16,
      w = 500 * (G - Z),
      B = 200 * (Z - C);
    return [W, w, B]
  };
  v2.hsl.rgb = function(I) {
    let d = I[0] / 360,
      G = I[1] / 100,
      Z = I[2] / 100,
      C, W, w;
    if (G === 0) return w = Z * 255, [w, w, w];
    if (Z < 0.5) C = Z * (1 + G);
    else C = Z + G - Z * G;
    let B = 2 * Z - C,
      A = [0, 0, 0];
    for (let V = 0; V < 3; V++) {
      if (W = d + 0.3333333333333333 * -(V - 1), W < 0) W++;
      if (W > 1) W--;
      if (6 * W < 1) w = B + (C - B) * 6 * W;
      else if (2 * W < 1) w = C;
      else if (3 * W < 2) w = B + (C - B) * (0.6666666666666666 - W) * 6;
      else w = B;
      A[V] = w * 255
    }
    return A
  };
  v2.hsl.hsv = function(I) {
    let d = I[0],
      G = I[1] / 100,
      Z = I[2] / 100,
      C = G,
      W = Math.max(Z, 0.01);
    Z *= 2, G *= Z <= 1 ? Z : 2 - Z, C *= W <= 1 ? W : 2 - W;
    let w = (Z + G) / 2,
      B = Z === 0 ? 2 * C / (W + C) : 2 * G / (Z + G);
    return [d, B * 100, w * 100]
  };
  v2.hsv.rgb = function(I) {
    let d = I[0] / 60,
      G = I[1] / 100,
      Z = I[2] / 100,
      C = Math.floor(d) % 6,
      W = d - Math.floor(d),
      w = 255 * Z * (1 - G),
      B = 255 * Z * (1 - G * W),
      A = 255 * Z * (1 - G * (1 - W));
    switch (Z *= 255, C) {
      case 0:
        return [Z, A, w];
      case 1:
        return [B, Z, w];
      case 2:
        return [w, Z, A];
      case 3:
        return [w, B, Z];
      case 4:
        return [A, w, Z];
      case 5:
        return [Z, w, B]
    }
  };
  v2.hsv.hsl = function(I) {
    let d = I[0],
      G = I[1] / 100,
      Z = I[2] / 100,
      C = Math.max(Z, 0.01),
      W, w;
    w = (2 - G) * Z;
    let B = (2 - G) * C;
    return W = G * C, W /= B <= 1 ? B : 2 - B, W = W || 0, w /= 2, [d, W * 100, w * 100]
  };
  v2.hwb.rgb = function(I) {
    let d = I[0] / 360,
      G = I[1] / 100,
      Z = I[2] / 100,
      C = G + Z,
      W;
    if (C > 1) G /= C, Z /= C;
    let w = Math.floor(6 * d),
      B = 1 - Z;
    if (W = 6 * d - w, (w & 1) !== 0) W = 1 - W;
    let A = G + W * (B - G),
      V, X, _;
    switch (w) {
      default:
      case 6:
      case 0:
        V = B, X = A, _ = G;
        break;
      case 1:
        V = A, X = B, _ = G;
        break;
      case 2:
        V = G, X = B, _ = A;
        break;
      case 3:
        V = G, X = A, _ = B;
        break;
      case 4:
        V = A, X = G, _ = B;
        break;
      case 5:
        V = B, X = G, _ = A;
        break
    }
    return [V * 255, X * 255, _ * 255]
  };
  v2.cmyk.rgb = function(I) {
    let d = I[0] / 100,
      G = I[1] / 100,
      Z = I[2] / 100,
      C = I[3] / 100,
      W = 1 - Math.min(1, d * (1 - C) + C),
      w = 1 - Math.min(1, G * (1 - C) + C),
      B = 1 - Math.min(1, Z * (1 - C) + C);
    return [W * 255, w * 255, B * 255]
  };
  v2.xyz.rgb = function(I) {
    let d = I[0] / 100,
      G = I[1] / 100,
      Z = I[2] / 100,
      C, W, w;
    return C = d * 3.2406 + G * -1.5372 + Z * -0.4986, W = d * -0.9689 + G * 1.8758 + Z * 0.0415, w = d * 0.0557 + G * -0.204 + Z * 1.057, C = C > 0.0031308 ? 1.055 * C ** 0.4166666666666667 - 0.055 : C * 12.92, W = W > 0.0031308 ? 1.055 * W ** 0.4166666666666667 - 0.055 : W * 12.92, w = w > 0.0031308 ? 1.055 * w ** 0.4166666666666667 - 0.055 : w * 12.92, C = Math.min(Math.max(0, C), 1), W = Math.min(Math.max(0, W), 1), w = Math.min(Math.max(0, w), 1), [C * 255, W * 255, w * 255]
  };
  v2.xyz.lab = function(I) {
    let d = I[0],
      G = I[1],
      Z = I[2];
    d /= 95.047, G /= 100, Z /= 108.883, d = d > 0.008856 ? d ** 0.3333333333333333 : 7.787 * d + 0.13793103448275862, G = G > 0.008856 ? G ** 0.3333333333333333 : 7.787 * G + 0.13793103448275862, Z = Z > 0.008856 ? Z ** 0.3333333333333333 : 7.787 * Z + 0.13793103448275862;
    let C = 116 * G - 16,
      W = 500 * (d - G),
      w = 200 * (G - Z);
    return [C, W, w]
  };
  v2.lab.xyz = function(I) {
    let d = I[0],
      G = I[1],
      Z = I[2],
      C, W, w;
    W = (d + 16) / 116, C = G / 500 + W, w = W - Z / 200;
    let B = W ** 3,
      A = C ** 3,
      V = w ** 3;
    return W = B > 0.008856 ? B : (W - 0.13793103448275862) / 7.787, C = A > 0.008856 ? A : (C - 0.13793103448275862) / 7.787, w = V > 0.008856 ? V : (w - 0.13793103448275862) / 7.787, C *= 95.047, W *= 100, w *= 108.883, [C, W, w]
  };
  v2.lab.lch = function(I) {
    let d = I[0],
      G = I[1],
      Z = I[2],
      C;
    if (C = Math.atan2(Z, G) * 360 / 2 / Math.PI, C < 0) C += 360;
    let w = Math.sqrt(G * G + Z * Z);
    return [d, w, C]
  };
  v2.lch.lab = function(I) {
    let d = I[0],
      G = I[1],
      C = I[2] / 360 * 2 * Math.PI,
      W = G * Math.cos(C),
      w = G * Math.sin(C);
    return [d, W, w]
  };
  v2.rgb.ansi16 = function(I, d = null) {
    let [G, Z, C] = I, W = d === null ? v2.rgb.hsv(I)[2] : d;
    if (W = Math.round(W / 50), W === 0) return 30;
    let w = 30 + (Math.round(C / 255) << 2 | Math.round(Z / 255) << 1 | Math.round(G / 255));
    if (W === 2) w += 60;
    return w
  };
  v2.hsv.ansi16 = function(I) {
    return v2.rgb.ansi16(v2.hsv.rgb(I), I[2])
  };
  v2.rgb.ansi256 = function(I) {
    let d = I[0],
      G = I[1],
      Z = I[2];
    if (d === G && G === Z) {
      if (d < 8) return 16;
      if (d > 248) return 231;
      return Math.round((d - 8) / 247 * 24) + 232
    }
    return 16 + 36 * Math.round(d / 255 * 5) + 6 * Math.round(G / 255 * 5) + Math.round(Z / 255 * 5)
  };
  v2.ansi16.rgb = function(I) {
    let d = I % 10;
    if (d === 0 || d === 7) {
      if (I > 50) d += 3.5;
      return d = d / 10.5 * 255, [d, d, d]
    }
    let G = (~~(I > 50) + 1) * 0.5,
      Z = (d & 1) * G * 255,
      C = (d >> 1 & 1) * G * 255,
      W = (d >> 2 & 1) * G * 255;
    return [Z, C, W]
  };
  v2.ansi256.rgb = function(I) {
    if (I >= 232) {
      let W = (I - 232) * 10 + 8;
      return [W, W, W]
    }
    I -= 16;
    let d, G = Math.floor(I / 36) / 5 * 255,
      Z = Math.floor((d = I % 36) / 6) / 5 * 255,
      C = d % 6 / 5 * 255;
    return [G, Z, C]
  };
  v2.rgb.hex = function(I) {
    let G = (((Math.round(I[0]) & 255) << 16) + ((Math.round(I[1]) & 255) << 8) + (Math.round(I[2]) & 255)).toString(16).toUpperCase();
    return "000000".substring(G.length) + G
  };
  v2.hex.rgb = function(I) {
    let d = I.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!d) return [0, 0, 0];
    let G = d[0];
    if (d[0].length === 3) G = G.split("").map((B) => {
      return B + B
    }).join("");
    let Z = parseInt(G, 16),
      C = Z >> 16 & 255,
      W = Z >> 8 & 255,
      w = Z & 255;
    return [C, W, w]
  };
  v2.rgb.hcg = function(I) {
    let d = I[0] / 255,
      G = I[1] / 255,
      Z = I[2] / 255,
      C = Math.max(Math.max(d, G), Z),
      W = Math.min(Math.min(d, G), Z),
      w = C - W,
      B, A;
    if (w < 1) B = W / (1 - w);
    else B = 0;
    if (w <= 0) A = 0;
    else if (C === d) A = (G - Z) / w % 6;
    else if (C === G) A = 2 + (Z - d) / w;
    else A = 4 + (d - G) / w;
    return A /= 6, A %= 1, [A * 360, w * 100, B * 100]
  };
  v2.hsl.hcg = function(I) {
    let d = I[1] / 100,
      G = I[2] / 100,
      Z = G < 0.5 ? 2 * d * G : 2 * d * (1 - G),
      C = 0;
    if (Z < 1) C = (G - 0.5 * Z) / (1 - Z);
    return [I[0], Z * 100, C * 100]
  };
  v2.hsv.hcg = function(I) {
    let d = I[1] / 100,
      G = I[2] / 100,
      Z = d * G,
      C = 0;
    if (Z < 1) C = (G - Z) / (1 - Z);
    return [I[0], Z * 100, C * 100]
  };
  v2.hcg.rgb = function(I) {
    let d = I[0] / 360,
      G = I[1] / 100,
      Z = I[2] / 100;
    if (G === 0) return [Z * 255, Z * 255, Z * 255];
    let C = [0, 0, 0],
      W = d % 1 * 6,
      w = W % 1,
      B = 1 - w,
      A = 0;
    switch (Math.floor(W)) {
      case 0:
        C[0] = 1, C[1] = w, C[2] = 0;
        break;
      case 1:
        C[0] = B, C[1] = 1, C[2] = 0;
        break;
      case 2:
        C[0] = 0, C[1] = 1, C[2] = w;
        break;
      case 3:
        C[0] = 0, C[1] = B, C[2] = 1;
        break;
      case 4:
        C[0] = w, C[1] = 0, C[2] = 1;
        break;
      default:
        C[0] = 1, C[1] = 0, C[2] = B
    }
    return A = (1 - G) * Z, [(G * C[0] + A) * 255, (G * C[1] + A) * 255, (G * C[2] + A) * 255]
  };
  v2.hcg.hsv = function(I) {
    let d = I[1] / 100,
      G = I[2] / 100,
      Z = d + G * (1 - d),
      C = 0;
    if (Z > 0) C = d / Z;
    return [I[0], C * 100, Z * 100]
  };
  v2.hcg.hsl = function(I) {
    let d = I[1] / 100,
      Z = I[2] / 100 * (1 - d) + 0.5 * d,
      C = 0;
    if (Z > 0 && Z < 0.5) C = d / (2 * Z);
    else if (Z >= 0.5 && Z < 1) C = d / (2 * (1 - Z));
    return [I[0], C * 100, Z * 100]
  };
  v2.hcg.hwb = function(I) {
    let d = I[1] / 100,
      G = I[2] / 100,
      Z = d + G * (1 - d);
    return [I[0], (Z - d) * 100, (1 - Z) * 100]
  };
  v2.hwb.hcg = function(I) {
    let d = I[1] / 100,
      Z = 1 - I[2] / 100,
      C = Z - d,
      W = 0;
    if (C < 1) W = (Z - C) / (1 - C);
    return [I[0], C * 100, W * 100]
  };
  v2.apple.rgb = function(I) {
    return [I[0] / 65535 * 255, I[1] / 65535 * 255, I[2] / 65535 * 255]
  };
  v2.rgb.apple = function(I) {
    return [I[0] / 255 * 65535, I[1] / 255 * 65535, I[2] / 255 * 65535]
  };
  v2.gray.rgb = function(I) {
    return [I[0] / 100 * 255, I[0] / 100 * 255, I[0] / 100 * 255]
  };
  v2.gray.hsl = function(I) {
    return [0, 0, I[0]]
  };
  v2.gray.hsv = v2.gray.hsl;
  v2.gray.hwb = function(I) {
    return [0, 100, I[0]]
  };
  v2.gray.cmyk = function(I) {
    return [0, 0, 0, I[0]]
  };
  v2.gray.lab = function(I) {
    return [I[0], 0, 0]
  };
  v2.gray.hex = function(I) {
    let d = Math.round(I[0] / 100 * 255) & 255,
      Z = ((d << 16) + (d << 8) + d).toString(16).toUpperCase();
    return "000000".substring(Z.length) + Z
  };
  v2.rgb.gray = function(I) {
    return [(I[0] + I[1] + I[2]) / 3 / 255 * 100]
  }
})
// @from(Start 5241733, End 5242895)
MF2 = Y((mJ3, EF2) => {
  var sa = qg1();

  function y89() {
    let I = {},
      d = Object.keys(sa);
    for (let G = d.length, Z = 0; Z < G; Z++) I[d[Z]] = {
      distance: -1,
      parent: null
    };
    return I
  }

  function P89(I) {
    let d = y89(),
      G = [I];
    d[I].distance = 0;
    while (G.length) {
      let Z = G.pop(),
        C = Object.keys(sa[Z]);
      for (let W = C.length, w = 0; w < W; w++) {
        let B = C[w],
          A = d[B];
        if (A.distance === -1) A.distance = d[Z].distance + 1, A.parent = Z, G.unshift(B)
      }
    }
    return d
  }

  function $89(I, d) {
    return function(G) {
      return d(I(G))
    }
  }

  function u89(I, d) {
    let G = [d[I].parent, I],
      Z = sa[d[I].parent][I],
      C = d[I].parent;
    while (d[C].parent) G.unshift(d[C].parent), Z = $89(sa[d[C].parent][C], Z), C = d[C].parent;
    return Z.conversion = G, Z
  }
  EF2.exports = function(I) {
    let d = P89(I),
      G = {},
      Z = Object.keys(d);
    for (let C = Z.length, W = 0; W < C; W++) {
      let w = Z[W];
      if (d[w].parent === null) continue;
      G[w] = u89(w, d)
    }
    return G
  }
})
// @from(Start 5242901, End 5243973)
Ug1 = Y((lJ3, SF2) => {
  var Rg1 = qg1(),
    T89 = MF2(),
    yR = {},
    O89 = Object.keys(Rg1);

  function m89(I) {
    let d = function(...G) {
      let Z = G[0];
      if (Z === void 0 || Z === null) return Z;
      if (Z.length > 1) G = Z;
      return I(G)
    };
    if ("conversion" in I) d.conversion = I.conversion;
    return d
  }

  function l89(I) {
    let d = function(...G) {
      let Z = G[0];
      if (Z === void 0 || Z === null) return Z;
      if (Z.length > 1) G = Z;
      let C = I(G);
      if (typeof C === "object")
        for (let W = C.length, w = 0; w < W; w++) C[w] = Math.round(C[w]);
      return C
    };
    if ("conversion" in I) d.conversion = I.conversion;
    return d
  }
  O89.forEach((I) => {
    yR[I] = {}, Object.defineProperty(yR[I], "channels", {
      value: Rg1[I].channels
    }), Object.defineProperty(yR[I], "labels", {
      value: Rg1[I].labels
    });
    let d = T89(I);
    Object.keys(d).forEach((Z) => {
      let C = d[Z];
      yR[I][Z] = l89(C), yR[I][Z].raw = m89(C)
    })
  });
  SF2.exports = yR
})