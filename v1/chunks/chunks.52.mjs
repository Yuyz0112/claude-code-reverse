
// @from(Start 5338199, End 5344681)
AK2 = Y((aK3, BK2) => {
  var y2 = $B(),
    CK2 = {
      center: 0,
      centre: 0,
      north: 1,
      east: 2,
      south: 3,
      west: 4,
      northeast: 5,
      southeast: 6,
      southwest: 7,
      northwest: 8
    },
    WK2 = {
      top: 1,
      right: 2,
      bottom: 3,
      left: 4,
      "right top": 5,
      "right bottom": 6,
      "left bottom": 7,
      "left top": 8
    },
    ZK2 = {
      background: "background",
      copy: "copy",
      repeat: "repeat",
      mirror: "mirror"
    },
    wK2 = {
      entropy: 16,
      attention: 17
    },
    sg1 = {
      nearest: "nearest",
      linear: "linear",
      cubic: "cubic",
      mitchell: "mitchell",
      lanczos2: "lanczos2",
      lanczos3: "lanczos3"
    },
    ad9 = {
      contain: "contain",
      cover: "cover",
      fill: "fill",
      inside: "inside",
      outside: "outside"
    },
    sd9 = {
      contain: "embed",
      cover: "crop",
      fill: "ignore_aspect",
      inside: "max",
      outside: "min"
    };

  function og1(I) {
    return I.angle % 360 !== 0 || I.useExifOrientation === !0 || I.rotationAngle !== 0
  }

  function Es(I) {
    return I.width !== -1 || I.height !== -1
  }

  function od9(I, d, G) {
    if (Es(this.options)) this.options.debuglog("ignoring previous resize options");
    if (this.options.widthPost !== -1) this.options.debuglog("operation order will be: extract, resize, extract");
    if (y2.defined(I))
      if (y2.object(I) && !y2.defined(G)) G = I;
      else if (y2.integer(I) && I > 0) this.options.width = I;
    else throw y2.invalidParameterError("width", "positive integer", I);
    else this.options.width = -1;
    if (y2.defined(d))
      if (y2.integer(d) && d > 0) this.options.height = d;
      else throw y2.invalidParameterError("height", "positive integer", d);
    else this.options.height = -1;
    if (y2.object(G)) {
      if (y2.defined(G.width))
        if (y2.integer(G.width) && G.width > 0) this.options.width = G.width;
        else throw y2.invalidParameterError("width", "positive integer", G.width);
      if (y2.defined(G.height))
        if (y2.integer(G.height) && G.height > 0) this.options.height = G.height;
        else throw y2.invalidParameterError("height", "positive integer", G.height);
      if (y2.defined(G.fit)) {
        let Z = sd9[G.fit];
        if (y2.string(Z)) this.options.canvas = Z;
        else throw y2.invalidParameterError("fit", "valid fit", G.fit)
      }
      if (y2.defined(G.position)) {
        let Z = y2.integer(G.position) ? G.position : wK2[G.position] || WK2[G.position] || CK2[G.position];
        if (y2.integer(Z) && (y2.inRange(Z, 0, 8) || y2.inRange(Z, 16, 17))) this.options.position = Z;
        else throw y2.invalidParameterError("position", "valid position/gravity/strategy", G.position)
      }
      if (this._setBackgroundColourOption("resizeBackground", G.background), y2.defined(G.kernel))
        if (y2.string(sg1[G.kernel])) this.options.kernel = sg1[G.kernel];
        else throw y2.invalidParameterError("kernel", "valid kernel name", G.kernel);
      if (y2.defined(G.withoutEnlargement)) this._setBooleanOption("withoutEnlargement", G.withoutEnlargement);
      if (y2.defined(G.withoutReduction)) this._setBooleanOption("withoutReduction", G.withoutReduction);
      if (y2.defined(G.fastShrinkOnLoad)) this._setBooleanOption("fastShrinkOnLoad", G.fastShrinkOnLoad)
    }
    if (og1(this.options) && Es(this.options)) this.options.rotateBeforePreExtract = !0;
    return this
  }

  function ed9(I) {
    if (y2.integer(I) && I > 0) this.options.extendTop = I, this.options.extendBottom = I, this.options.extendLeft = I, this.options.extendRight = I;
    else if (y2.object(I)) {
      if (y2.defined(I.top))
        if (y2.integer(I.top) && I.top >= 0) this.options.extendTop = I.top;
        else throw y2.invalidParameterError("top", "positive integer", I.top);
      if (y2.defined(I.bottom))
        if (y2.integer(I.bottom) && I.bottom >= 0) this.options.extendBottom = I.bottom;
        else throw y2.invalidParameterError("bottom", "positive integer", I.bottom);
      if (y2.defined(I.left))
        if (y2.integer(I.left) && I.left >= 0) this.options.extendLeft = I.left;
        else throw y2.invalidParameterError("left", "positive integer", I.left);
      if (y2.defined(I.right))
        if (y2.integer(I.right) && I.right >= 0) this.options.extendRight = I.right;
        else throw y2.invalidParameterError("right", "positive integer", I.right);
      if (this._setBackgroundColourOption("extendBackground", I.background), y2.defined(I.extendWith))
        if (y2.string(ZK2[I.extendWith])) this.options.extendWith = ZK2[I.extendWith];
        else throw y2.invalidParameterError("extendWith", "one of: background, copy, repeat, mirror", I.extendWith)
    } else throw y2.invalidParameterError("extend", "integer or object", I);
    return this
  }

  function td9(I) {
    let d = Es(this.options) || this.options.widthPre !== -1 ? "Post" : "Pre";
    if (this.options[`width${d}`] !== -1) this.options.debuglog("ignoring previous extract options");
    if (["left", "top", "width", "height"].forEach(function(G) {
        let Z = I[G];
        if (y2.integer(Z) && Z >= 0) this.options[G + (G === "left" || G === "top" ? "Offset" : "") + d] = Z;
        else throw y2.invalidParameterError(G, "integer", Z)
      }, this), og1(this.options) && !Es(this.options)) {
      if (this.options.widthPre === -1 || this.options.widthPost === -1) this.options.rotateBeforePreExtract = !0
    }
    return this
  }

  function IG9(I) {
    if (this.options.trimThreshold = 10, y2.defined(I))
      if (y2.object(I)) {
        if (y2.defined(I.background)) this._setBackgroundColourOption("trimBackground", I.background);
        if (y2.defined(I.threshold))
          if (y2.number(I.threshold) && I.threshold >= 0) this.options.trimThreshold = I.threshold;
          else throw y2.invalidParameterError("threshold", "positive number", I.threshold);
        if (y2.defined(I.lineArt)) this._setBooleanOption("trimLineArt", I.lineArt)
      } else throw y2.invalidParameterError("trim", "object", I);
    if (og1(this.options)) this.options.rotateBeforePreExtract = !0;
    return this
  }
  BK2.exports = function(I) {
    Object.assign(I.prototype, {
      resize: od9,
      extend: ed9,
      extract: td9,
      trim: IG9
    }), I.gravity = CK2, I.strategy = wK2, I.kernel = sg1, I.fit = ad9, I.position = WK2
  }
})
// @from(Start 5344687, End 5347518)
XK2 = Y((sK3, VK2) => {
  var F9 = $B(),
    eg1 = {
      clear: "clear",
      source: "source",
      over: "over",
      in: "in",
      out: "out",
      atop: "atop",
      dest: "dest",
      "dest-over": "dest-over",
      "dest-in": "dest-in",
      "dest-out": "dest-out",
      "dest-atop": "dest-atop",
      xor: "xor",
      add: "add",
      saturate: "saturate",
      multiply: "multiply",
      screen: "screen",
      overlay: "overlay",
      darken: "darken",
      lighten: "lighten",
      "colour-dodge": "colour-dodge",
      "color-dodge": "colour-dodge",
      "colour-burn": "colour-burn",
      "color-burn": "colour-burn",
      "hard-light": "hard-light",
      "soft-light": "soft-light",
      difference: "difference",
      exclusion: "exclusion"
    };

  function dG9(I) {
    if (!Array.isArray(I)) throw F9.invalidParameterError("images to composite", "array", I);
    return this.options.composite = I.map((d) => {
      if (!F9.object(d)) throw F9.invalidParameterError("image to composite", "object", d);
      let G = this._inputOptionsFromObject(d),
        Z = {
          input: this._createInputDescriptor(d.input, G, {
            allowStream: !1
          }),
          blend: "over",
          tile: !1,
          left: 0,
          top: 0,
          hasOffset: !1,
          gravity: 0,
          premultiplied: !1
        };
      if (F9.defined(d.blend))
        if (F9.string(eg1[d.blend])) Z.blend = eg1[d.blend];
        else throw F9.invalidParameterError("blend", "valid blend name", d.blend);
      if (F9.defined(d.tile))
        if (F9.bool(d.tile)) Z.tile = d.tile;
        else throw F9.invalidParameterError("tile", "boolean", d.tile);
      if (F9.defined(d.left))
        if (F9.integer(d.left)) Z.left = d.left;
        else throw F9.invalidParameterError("left", "integer", d.left);
      if (F9.defined(d.top))
        if (F9.integer(d.top)) Z.top = d.top;
        else throw F9.invalidParameterError("top", "integer", d.top);
      if (F9.defined(d.top) !== F9.defined(d.left)) throw new Error("Expected both left and top to be set");
      else Z.hasOffset = F9.integer(d.top) && F9.integer(d.left);
      if (F9.defined(d.gravity))
        if (F9.integer(d.gravity) && F9.inRange(d.gravity, 0, 8)) Z.gravity = d.gravity;
        else if (F9.string(d.gravity) && F9.integer(this.constructor.gravity[d.gravity])) Z.gravity = this.constructor.gravity[d.gravity];
      else throw F9.invalidParameterError("gravity", "valid gravity", d.gravity);
      if (F9.defined(d.premultiplied))
        if (F9.bool(d.premultiplied)) Z.premultiplied = d.premultiplied;
        else throw F9.invalidParameterError("premultiplied", "boolean", d.premultiplied);
      return Z
    }), this
  }
  VK2.exports = function(I) {
    I.prototype.composite = dG9, I.blend = eg1
  }
})
// @from(Start 5347524, End 5359612)
DK2 = Y((oK3, _K2) => {
  var GG9 = vs(),
    n1 = $B(),
    YK2 = {
      integer: "integer",
      float: "float",
      approximate: "approximate"
    };

  function ZG9(I, d) {
    if (this.options.useExifOrientation || this.options.angle || this.options.rotationAngle) this.options.debuglog("ignoring previous rotate options");
    if (!n1.defined(I)) this.options.useExifOrientation = !0;
    else if (n1.integer(I) && !(I % 90)) this.options.angle = I;
    else if (n1.number(I)) {
      if (this.options.rotationAngle = I, n1.object(d) && d.background) {
        let G = GG9(d.background);
        this.options.rotationBackground = [G.red(), G.green(), G.blue(), Math.round(G.alpha() * 255)]
      }
    } else throw n1.invalidParameterError("angle", "numeric", I);
    return this
  }

  function CG9(I) {
    return this.options.flip = n1.bool(I) ? I : !0, this
  }

  function WG9(I) {
    return this.options.flop = n1.bool(I) ? I : !0, this
  }

  function wG9(I, d) {
    let G = [].concat(...I);
    if (G.length === 4 && G.every(n1.number)) this.options.affineMatrix = G;
    else throw n1.invalidParameterError("matrix", "1x4 or 2x2 array", I);
    if (n1.defined(d))
      if (n1.object(d)) {
        if (this._setBackgroundColourOption("affineBackground", d.background), n1.defined(d.idx))
          if (n1.number(d.idx)) this.options.affineIdx = d.idx;
          else throw n1.invalidParameterError("options.idx", "number", d.idx);
        if (n1.defined(d.idy))
          if (n1.number(d.idy)) this.options.affineIdy = d.idy;
          else throw n1.invalidParameterError("options.idy", "number", d.idy);
        if (n1.defined(d.odx))
          if (n1.number(d.odx)) this.options.affineOdx = d.odx;
          else throw n1.invalidParameterError("options.odx", "number", d.odx);
        if (n1.defined(d.ody))
          if (n1.number(d.ody)) this.options.affineOdy = d.ody;
          else throw n1.invalidParameterError("options.ody", "number", d.ody);
        if (n1.defined(d.interpolator))
          if (n1.inArray(d.interpolator, Object.values(this.constructor.interpolators))) this.options.affineInterpolator = d.interpolator;
          else throw n1.invalidParameterError("options.interpolator", "valid interpolator name", d.interpolator)
      } else throw n1.invalidParameterError("options", "object", d);
    return this
  }

  function BG9(I, d, G) {
    if (!n1.defined(I)) this.options.sharpenSigma = -1;
    else if (n1.bool(I)) this.options.sharpenSigma = I ? -1 : 0;
    else if (n1.number(I) && n1.inRange(I, 0.01, 1e4)) {
      if (this.options.sharpenSigma = I, n1.defined(d))
        if (n1.number(d) && n1.inRange(d, 0, 1e4)) this.options.sharpenM1 = d;
        else throw n1.invalidParameterError("flat", "number between 0 and 10000", d);
      if (n1.defined(G))
        if (n1.number(G) && n1.inRange(G, 0, 1e4)) this.options.sharpenM2 = G;
        else throw n1.invalidParameterError("jagged", "number between 0 and 10000", G)
    } else if (n1.plainObject(I)) {
      if (n1.number(I.sigma) && n1.inRange(I.sigma, 0.000001, 10)) this.options.sharpenSigma = I.sigma;
      else throw n1.invalidParameterError("options.sigma", "number between 0.000001 and 10", I.sigma);
      if (n1.defined(I.m1))
        if (n1.number(I.m1) && n1.inRange(I.m1, 0, 1e6)) this.options.sharpenM1 = I.m1;
        else throw n1.invalidParameterError("options.m1", "number between 0 and 1000000", I.m1);
      if (n1.defined(I.m2))
        if (n1.number(I.m2) && n1.inRange(I.m2, 0, 1e6)) this.options.sharpenM2 = I.m2;
        else throw n1.invalidParameterError("options.m2", "number between 0 and 1000000", I.m2);
      if (n1.defined(I.x1))
        if (n1.number(I.x1) && n1.inRange(I.x1, 0, 1e6)) this.options.sharpenX1 = I.x1;
        else throw n1.invalidParameterError("options.x1", "number between 0 and 1000000", I.x1);
      if (n1.defined(I.y2))
        if (n1.number(I.y2) && n1.inRange(I.y2, 0, 1e6)) this.options.sharpenY2 = I.y2;
        else throw n1.invalidParameterError("options.y2", "number between 0 and 1000000", I.y2);
      if (n1.defined(I.y3))
        if (n1.number(I.y3) && n1.inRange(I.y3, 0, 1e6)) this.options.sharpenY3 = I.y3;
        else throw n1.invalidParameterError("options.y3", "number between 0 and 1000000", I.y3)
    } else throw n1.invalidParameterError("sigma", "number between 0.01 and 10000", I);
    return this
  }

  function AG9(I) {
    if (!n1.defined(I)) this.options.medianSize = 3;
    else if (n1.integer(I) && n1.inRange(I, 1, 1000)) this.options.medianSize = I;
    else throw n1.invalidParameterError("size", "integer between 1 and 1000", I);
    return this
  }

  function VG9(I) {
    let d;
    if (n1.number(I)) d = I;
    else if (n1.plainObject(I)) {
      if (!n1.number(I.sigma)) throw n1.invalidParameterError("options.sigma", "number between 0.3 and 1000", d);
      if (d = I.sigma, "precision" in I)
        if (n1.string(YK2[I.precision])) this.options.precision = YK2[I.precision];
        else throw n1.invalidParameterError("precision", "one of: integer, float, approximate", I.precision);
      if ("minAmplitude" in I)
        if (n1.number(I.minAmplitude) && n1.inRange(I.minAmplitude, 0.001, 1)) this.options.minAmpl = I.minAmplitude;
        else throw n1.invalidParameterError("minAmplitude", "number between 0.001 and 1", I.minAmplitude)
    }
    if (!n1.defined(I)) this.options.blurSigma = -1;
    else if (n1.bool(I)) this.options.blurSigma = I ? -1 : 0;
    else if (n1.number(d) && n1.inRange(d, 0.3, 1000)) this.options.blurSigma = d;
    else throw n1.invalidParameterError("sigma", "number between 0.3 and 1000", d);
    return this
  }

  function XG9(I) {
    if (this.options.flatten = n1.bool(I) ? I : !0, n1.object(I)) this._setBackgroundColourOption("flattenBackground", I.background);
    return this
  }

  function YG9() {
    return this.options.unflatten = !0, this
  }

  function _G9(I, d) {
    if (!n1.defined(I)) this.options.gamma = 2.2;
    else if (n1.number(I) && n1.inRange(I, 1, 3)) this.options.gamma = I;
    else throw n1.invalidParameterError("gamma", "number between 1.0 and 3.0", I);
    if (!n1.defined(d)) this.options.gammaOut = this.options.gamma;
    else if (n1.number(d) && n1.inRange(d, 1, 3)) this.options.gammaOut = d;
    else throw n1.invalidParameterError("gammaOut", "number between 1.0 and 3.0", d);
    return this
  }

  function DG9(I) {
    if (this.options.negate = n1.bool(I) ? I : !0, n1.plainObject(I) && "alpha" in I)
      if (!n1.bool(I.alpha)) throw n1.invalidParameterError("alpha", "should be boolean value", I.alpha);
      else this.options.negateAlpha = I.alpha;
    return this
  }

  function HG9(I) {
    if (n1.plainObject(I)) {
      if (n1.defined(I.lower))
        if (n1.number(I.lower) && n1.inRange(I.lower, 0, 99)) this.options.normaliseLower = I.lower;
        else throw n1.invalidParameterError("lower", "number between 0 and 99", I.lower);
      if (n1.defined(I.upper))
        if (n1.number(I.upper) && n1.inRange(I.upper, 1, 100)) this.options.normaliseUpper = I.upper;
        else throw n1.invalidParameterError("upper", "number between 1 and 100", I.upper)
    }
    if (this.options.normaliseLower >= this.options.normaliseUpper) throw n1.invalidParameterError("range", "lower to be less than upper", `${this.options.normaliseLower} >= ${this.options.normaliseUpper}`);
    return this.options.normalise = !0, this
  }

  function FG9(I) {
    return this.normalise(I)
  }

  function gG9(I) {
    if (n1.plainObject(I)) {
      if (n1.integer(I.width) && I.width > 0) this.options.claheWidth = I.width;
      else throw n1.invalidParameterError("width", "integer greater than zero", I.width);
      if (n1.integer(I.height) && I.height > 0) this.options.claheHeight = I.height;
      else throw n1.invalidParameterError("height", "integer greater than zero", I.height);
      if (n1.defined(I.maxSlope))
        if (n1.integer(I.maxSlope) && n1.inRange(I.maxSlope, 0, 100)) this.options.claheMaxSlope = I.maxSlope;
        else throw n1.invalidParameterError("maxSlope", "integer between 0 and 100", I.maxSlope)
    } else throw n1.invalidParameterError("options", "plain object", I);
    return this
  }

  function JG9(I) {
    if (!n1.object(I) || !Array.isArray(I.kernel) || !n1.integer(I.width) || !n1.integer(I.height) || !n1.inRange(I.width, 3, 1001) || !n1.inRange(I.height, 3, 1001) || I.height * I.width !== I.kernel.length) throw new Error("Invalid convolution kernel");
    if (!n1.integer(I.scale)) I.scale = I.kernel.reduce(function(d, G) {
      return d + G
    }, 0);
    if (I.scale < 1) I.scale = 1;
    if (!n1.integer(I.offset)) I.offset = 0;
    return this.options.convKernel = I, this
  }

  function KG9(I, d) {
    if (!n1.defined(I)) this.options.threshold = 128;
    else if (n1.bool(I)) this.options.threshold = I ? 128 : 0;
    else if (n1.integer(I) && n1.inRange(I, 0, 255)) this.options.threshold = I;
    else throw n1.invalidParameterError("threshold", "integer between 0 and 255", I);
    if (!n1.object(d) || d.greyscale === !0 || d.grayscale === !0) this.options.thresholdGrayscale = !0;
    else this.options.thresholdGrayscale = !1;
    return this
  }

  function NG9(I, d, G) {
    if (this.options.boolean = this._createInputDescriptor(I, G), n1.string(d) && n1.inArray(d, ["and", "or", "eor"])) this.options.booleanOp = d;
    else throw n1.invalidParameterError("operator", "one of: and, or, eor", d);
    return this
  }

  function zG9(I, d) {
    if (!n1.defined(I) && n1.number(d)) I = 1;
    else if (n1.number(I) && !n1.defined(d)) d = 0;
    if (!n1.defined(I)) this.options.linearA = [];
    else if (n1.number(I)) this.options.linearA = [I];
    else if (Array.isArray(I) && I.length && I.every(n1.number)) this.options.linearA = I;
    else throw n1.invalidParameterError("a", "number or array of numbers", I);
    if (!n1.defined(d)) this.options.linearB = [];
    else if (n1.number(d)) this.options.linearB = [d];
    else if (Array.isArray(d) && d.length && d.every(n1.number)) this.options.linearB = d;
    else throw n1.invalidParameterError("b", "number or array of numbers", d);
    if (this.options.linearA.length !== this.options.linearB.length) throw new Error("Expected a and b to be arrays of the same length");
    return this
  }

  function QG9(I) {
    if (!Array.isArray(I)) throw n1.invalidParameterError("inputMatrix", "array", I);
    if (I.length !== 3 && I.length !== 4) throw n1.invalidParameterError("inputMatrix", "3x3 or 4x4 array", I.length);
    let d = I.flat().map(Number);
    if (d.length !== 9 && d.length !== 16) throw n1.invalidParameterError("inputMatrix", "cardinality of 9 or 16", d.length);
    return this.options.recombMatrix = d, this
  }

  function fG9(I) {
    if (!n1.plainObject(I)) throw n1.invalidParameterError("options", "plain object", I);
    if ("brightness" in I)
      if (n1.number(I.brightness) && I.brightness >= 0) this.options.brightness = I.brightness;
      else throw n1.invalidParameterError("brightness", "number above zero", I.brightness);
    if ("saturation" in I)
      if (n1.number(I.saturation) && I.saturation >= 0) this.options.saturation = I.saturation;
      else throw n1.invalidParameterError("saturation", "number above zero", I.saturation);
    if ("hue" in I)
      if (n1.integer(I.hue)) this.options.hue = I.hue % 360;
      else throw n1.invalidParameterError("hue", "number", I.hue);
    if ("lightness" in I)
      if (n1.number(I.lightness)) this.options.lightness = I.lightness;
      else throw n1.invalidParameterError("lightness", "number", I.lightness);
    return this
  }
  _K2.exports = function(I) {
    Object.assign(I.prototype, {
      rotate: ZG9,
      flip: CG9,
      flop: WG9,
      affine: wG9,
      sharpen: BG9,
      median: AG9,
      blur: VG9,
      flatten: XG9,
      unflatten: YG9,
      gamma: _G9,
      negate: DG9,
      normalise: HG9,
      normalize: FG9,
      clahe: gG9,
      convolve: JG9,
      threshold: KG9,
      boolean: NG9,
      linear: zG9,
      recomb: QG9,
      modulate: fG9
    })
  }
})
// @from(Start 5359618, End 5361078)
gK2 = Y((eK3, FK2) => {
  var qG9 = vs(),
    XX = $B(),
    HK2 = {
      multiband: "multiband",
      "b-w": "b-w",
      bw: "b-w",
      cmyk: "cmyk",
      srgb: "srgb"
    };

  function RG9(I) {
    return this._setBackgroundColourOption("tint", I), this
  }

  function UG9(I) {
    return this.options.greyscale = XX.bool(I) ? I : !0, this
  }

  function vG9(I) {
    return this.greyscale(I)
  }

  function EG9(I) {
    if (!XX.string(I)) throw XX.invalidParameterError("colourspace", "string", I);
    return this.options.colourspacePipeline = I, this
  }

  function MG9(I) {
    return this.pipelineColourspace(I)
  }

  function SG9(I) {
    if (!XX.string(I)) throw XX.invalidParameterError("colourspace", "string", I);
    return this.options.colourspace = I, this
  }

  function LG9(I) {
    return this.toColourspace(I)
  }

  function yG9(I, d) {
    if (XX.defined(d))
      if (XX.object(d) || XX.string(d)) {
        let G = qG9(d);
        this.options[I] = [G.red(), G.green(), G.blue(), Math.round(G.alpha() * 255)]
      } else throw XX.invalidParameterError("background", "object or string", d)
  }
  FK2.exports = function(I) {
    Object.assign(I.prototype, {
      tint: RG9,
      greyscale: UG9,
      grayscale: vG9,
      pipelineColourspace: EG9,
      pipelineColorspace: MG9,
      toColourspace: SG9,
      toColorspace: LG9,
      _setBackgroundColourOption: yG9
    }), I.colourspace = HK2, I.colorspace = HK2
  }
})
// @from(Start 5361084, End 5362551)
KK2 = Y((tK3, JK2) => {
  var OB = $B(),
    PG9 = {
      and: "and",
      or: "or",
      eor: "eor"
    };

  function $G9() {
    return this.options.removeAlpha = !0, this
  }

  function uG9(I) {
    if (OB.defined(I))
      if (OB.number(I) && OB.inRange(I, 0, 1)) this.options.ensureAlpha = I;
      else throw OB.invalidParameterError("alpha", "number between 0 and 1", I);
    else this.options.ensureAlpha = 1;
    return this
  }

  function TG9(I) {
    let d = {
      red: 0,
      green: 1,
      blue: 2,
      alpha: 3
    };
    if (Object.keys(d).includes(I)) I = d[I];
    if (OB.integer(I) && OB.inRange(I, 0, 4)) this.options.extractChannel = I;
    else throw OB.invalidParameterError("channel", "integer or one of: red, green, blue, alpha", I);
    return this
  }

  function OG9(I, d) {
    if (Array.isArray(I)) I.forEach(function(G) {
      this.options.joinChannelIn.push(this._createInputDescriptor(G, d))
    }, this);
    else this.options.joinChannelIn.push(this._createInputDescriptor(I, d));
    return this
  }

  function mG9(I) {
    if (OB.string(I) && OB.inArray(I, ["and", "or", "eor"])) this.options.bandBoolOp = I;
    else throw OB.invalidParameterError("boolOp", "one of: and, or, eor", I);
    return this
  }
  JK2.exports = function(I) {
    Object.assign(I.prototype, {
      removeAlpha: $G9,
      ensureAlpha: uG9,
      extractChannel: TG9,
      joinChannel: OG9,
      bandbool: mG9
    }), I.bool = PG9
  }
})
// @from(Start 5362557, End 5387635)
RK2 = Y((IN3, qK2) => {
  var tg1 = B1("node:path"),
    G1 = $B(),
    xR = c$(),
    NK2 = new Map([
      ["heic", "heif"],
      ["heif", "heif"],
      ["avif", "avif"],
      ["jpeg", "jpeg"],
      ["jpg", "jpeg"],
      ["jpe", "jpeg"],
      ["tile", "tile"],
      ["dz", "tile"],
      ["png", "png"],
      ["raw", "raw"],
      ["tiff", "tiff"],
      ["tif", "tiff"],
      ["webp", "webp"],
      ["gif", "gif"],
      ["jp2", "jp2"],
      ["jpx", "jp2"],
      ["j2k", "jp2"],
      ["j2c", "jp2"],
      ["jxl", "jxl"]
    ]),
    lG9 = /\.(jp[2x]|j2[kc])$/i,
    zK2 = () => new Error("JP2 output requires libvips with support for OpenJPEG"),
    QK2 = (I) => 1 << 31 - Math.clz32(Math.ceil(Math.log2(I)));

  function bG9(I, d) {
    let G;
    if (!G1.string(I)) G = new Error("Missing output file path");
    else if (G1.string(this.options.input.file) && tg1.resolve(this.options.input.file) === tg1.resolve(I)) G = new Error("Cannot use same file for input and output");
    else if (lG9.test(tg1.extname(I)) && !this.constructor.format.jp2k.output.file) G = zK2();
    if (G)
      if (G1.fn(d)) d(G);
      else return Promise.reject(G);
    else {
      this.options.fileOut = I;
      let Z = Error();
      return this._pipeline(d, Z)
    }
    return this
  }

  function hG9(I, d) {
    if (G1.object(I)) this._setBooleanOption("resolveWithObject", I.resolveWithObject);
    else if (this.options.resolveWithObject) this.options.resolveWithObject = !1;
    this.options.fileOut = "";
    let G = Error();
    return this._pipeline(G1.fn(I) ? I : d, G)
  }

  function jG9() {
    return this.options.keepMetadata |= 1, this
  }

  function kG9(I) {
    if (G1.object(I))
      for (let [d, G] of Object.entries(I))
        if (G1.object(G))
          for (let [Z, C] of Object.entries(G))
            if (G1.string(C)) this.options.withExif[`exif-${d.toLowerCase()}-${Z}`] = C;
            else throw G1.invalidParameterError(`${d}.${Z}`, "string", C);
    else throw G1.invalidParameterError(d, "object", G);
    else throw G1.invalidParameterError("exif", "object", I);
    return this.options.withExifMerge = !1, this.keepExif()
  }

  function xG9(I) {
    return this.withExif(I), this.options.withExifMerge = !0, this
  }

  function cG9() {
    return this.options.keepMetadata |= 8, this
  }

  function pG9(I, d) {
    if (G1.string(I)) this.options.withIccProfile = I;
    else throw G1.invalidParameterError("icc", "string", I);
    if (this.keepIccProfile(), G1.object(d)) {
      if (G1.defined(d.attach))
        if (G1.bool(d.attach)) {
          if (!d.attach) this.options.keepMetadata &= -9
        } else throw G1.invalidParameterError("attach", "boolean", d.attach)
    }
    return this
  }

  function iG9() {
    return this.options.keepMetadata = 31, this
  }

  function nG9(I) {
    if (this.keepMetadata(), this.withIccProfile("srgb"), G1.object(I)) {
      if (G1.defined(I.orientation))
        if (G1.integer(I.orientation) && G1.inRange(I.orientation, 1, 8)) this.options.withMetadataOrientation = I.orientation;
        else throw G1.invalidParameterError("orientation", "integer between 1 and 8", I.orientation);
      if (G1.defined(I.density))
        if (G1.number(I.density) && I.density > 0) this.options.withMetadataDensity = I.density;
        else throw G1.invalidParameterError("density", "positive number", I.density);
      if (G1.defined(I.icc)) this.withIccProfile(I.icc);
      if (G1.defined(I.exif)) this.withExifMerge(I.exif)
    }
    return this
  }

  function rG9(I, d) {
    let G = NK2.get((G1.object(I) && G1.string(I.id) ? I.id : I).toLowerCase());
    if (!G) throw G1.invalidParameterError("format", `one of: ${[...NK2.keys()].join(", ")}`, I);
    return this[G](d)
  }

  function aG9(I) {
    if (G1.object(I)) {
      if (G1.defined(I.quality))
        if (G1.integer(I.quality) && G1.inRange(I.quality, 1, 100)) this.options.jpegQuality = I.quality;
        else throw G1.invalidParameterError("quality", "integer between 1 and 100", I.quality);
      if (G1.defined(I.progressive)) this._setBooleanOption("jpegProgressive", I.progressive);
      if (G1.defined(I.chromaSubsampling))
        if (G1.string(I.chromaSubsampling) && G1.inArray(I.chromaSubsampling, ["4:2:0", "4:4:4"])) this.options.jpegChromaSubsampling = I.chromaSubsampling;
        else throw G1.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", I.chromaSubsampling);
      let d = G1.bool(I.optimizeCoding) ? I.optimizeCoding : I.optimiseCoding;
      if (G1.defined(d)) this._setBooleanOption("jpegOptimiseCoding", d);
      if (G1.defined(I.mozjpeg))
        if (G1.bool(I.mozjpeg)) {
          if (I.mozjpeg) this.options.jpegTrellisQuantisation = !0, this.options.jpegOvershootDeringing = !0, this.options.jpegOptimiseScans = !0, this.options.jpegProgressive = !0, this.options.jpegQuantisationTable = 3
        } else throw G1.invalidParameterError("mozjpeg", "boolean", I.mozjpeg);
      let G = G1.bool(I.trellisQuantization) ? I.trellisQuantization : I.trellisQuantisation;
      if (G1.defined(G)) this._setBooleanOption("jpegTrellisQuantisation", G);
      if (G1.defined(I.overshootDeringing)) this._setBooleanOption("jpegOvershootDeringing", I.overshootDeringing);
      let Z = G1.bool(I.optimizeScans) ? I.optimizeScans : I.optimiseScans;
      if (G1.defined(Z)) {
        if (this._setBooleanOption("jpegOptimiseScans", Z), Z) this.options.jpegProgressive = !0
      }
      let C = G1.number(I.quantizationTable) ? I.quantizationTable : I.quantisationTable;
      if (G1.defined(C))
        if (G1.integer(C) && G1.inRange(C, 0, 8)) this.options.jpegQuantisationTable = C;
        else throw G1.invalidParameterError("quantisationTable", "integer between 0 and 8", C)
    }
    return this._updateFormatOut("jpeg", I)
  }

  function sG9(I) {
    if (G1.object(I)) {
      if (G1.defined(I.progressive)) this._setBooleanOption("pngProgressive", I.progressive);
      if (G1.defined(I.compressionLevel))
        if (G1.integer(I.compressionLevel) && G1.inRange(I.compressionLevel, 0, 9)) this.options.pngCompressionLevel = I.compressionLevel;
        else throw G1.invalidParameterError("compressionLevel", "integer between 0 and 9", I.compressionLevel);
      if (G1.defined(I.adaptiveFiltering)) this._setBooleanOption("pngAdaptiveFiltering", I.adaptiveFiltering);
      let d = I.colours || I.colors;
      if (G1.defined(d))
        if (G1.integer(d) && G1.inRange(d, 2, 256)) this.options.pngBitdepth = QK2(d);
        else throw G1.invalidParameterError("colours", "integer between 2 and 256", d);
      if (G1.defined(I.palette)) this._setBooleanOption("pngPalette", I.palette);
      else if ([I.quality, I.effort, I.colours, I.colors, I.dither].some(G1.defined)) this._setBooleanOption("pngPalette", !0);
      if (this.options.pngPalette) {
        if (G1.defined(I.quality))
          if (G1.integer(I.quality) && G1.inRange(I.quality, 0, 100)) this.options.pngQuality = I.quality;
          else throw G1.invalidParameterError("quality", "integer between 0 and 100", I.quality);
        if (G1.defined(I.effort))
          if (G1.integer(I.effort) && G1.inRange(I.effort, 1, 10)) this.options.pngEffort = I.effort;
          else throw G1.invalidParameterError("effort", "integer between 1 and 10", I.effort);
        if (G1.defined(I.dither))
          if (G1.number(I.dither) && G1.inRange(I.dither, 0, 1)) this.options.pngDither = I.dither;
          else throw G1.invalidParameterError("dither", "number between 0.0 and 1.0", I.dither)
      }
    }
    return this._updateFormatOut("png", I)
  }

  function oG9(I) {
    if (G1.object(I)) {
      if (G1.defined(I.quality))
        if (G1.integer(I.quality) && G1.inRange(I.quality, 1, 100)) this.options.webpQuality = I.quality;
        else throw G1.invalidParameterError("quality", "integer between 1 and 100", I.quality);
      if (G1.defined(I.alphaQuality))
        if (G1.integer(I.alphaQuality) && G1.inRange(I.alphaQuality, 0, 100)) this.options.webpAlphaQuality = I.alphaQuality;
        else throw G1.invalidParameterError("alphaQuality", "integer between 0 and 100", I.alphaQuality);
      if (G1.defined(I.lossless)) this._setBooleanOption("webpLossless", I.lossless);
      if (G1.defined(I.nearLossless)) this._setBooleanOption("webpNearLossless", I.nearLossless);
      if (G1.defined(I.smartSubsample)) this._setBooleanOption("webpSmartSubsample", I.smartSubsample);
      if (G1.defined(I.preset))
        if (G1.string(I.preset) && G1.inArray(I.preset, ["default", "photo", "picture", "drawing", "icon", "text"])) this.options.webpPreset = I.preset;
        else throw G1.invalidParameterError("preset", "one of: default, photo, picture, drawing, icon, text", I.preset);
      if (G1.defined(I.effort))
        if (G1.integer(I.effort) && G1.inRange(I.effort, 0, 6)) this.options.webpEffort = I.effort;
        else throw G1.invalidParameterError("effort", "integer between 0 and 6", I.effort);
      if (G1.defined(I.minSize)) this._setBooleanOption("webpMinSize", I.minSize);
      if (G1.defined(I.mixed)) this._setBooleanOption("webpMixed", I.mixed)
    }
    return fK2(I, this.options), this._updateFormatOut("webp", I)
  }

  function eG9(I) {
    if (G1.object(I)) {
      if (G1.defined(I.reuse)) this._setBooleanOption("gifReuse", I.reuse);
      if (G1.defined(I.progressive)) this._setBooleanOption("gifProgressive", I.progressive);
      let d = I.colours || I.colors;
      if (G1.defined(d))
        if (G1.integer(d) && G1.inRange(d, 2, 256)) this.options.gifBitdepth = QK2(d);
        else throw G1.invalidParameterError("colours", "integer between 2 and 256", d);
      if (G1.defined(I.effort))
        if (G1.number(I.effort) && G1.inRange(I.effort, 1, 10)) this.options.gifEffort = I.effort;
        else throw G1.invalidParameterError("effort", "integer between 1 and 10", I.effort);
      if (G1.defined(I.dither))
        if (G1.number(I.dither) && G1.inRange(I.dither, 0, 1)) this.options.gifDither = I.dither;
        else throw G1.invalidParameterError("dither", "number between 0.0 and 1.0", I.dither);
      if (G1.defined(I.interFrameMaxError))
        if (G1.number(I.interFrameMaxError) && G1.inRange(I.interFrameMaxError, 0, 32)) this.options.gifInterFrameMaxError = I.interFrameMaxError;
        else throw G1.invalidParameterError("interFrameMaxError", "number between 0.0 and 32.0", I.interFrameMaxError);
      if (G1.defined(I.interPaletteMaxError))
        if (G1.number(I.interPaletteMaxError) && G1.inRange(I.interPaletteMaxError, 0, 256)) this.options.gifInterPaletteMaxError = I.interPaletteMaxError;
        else throw G1.invalidParameterError("interPaletteMaxError", "number between 0.0 and 256.0", I.interPaletteMaxError)
    }
    return fK2(I, this.options), this._updateFormatOut("gif", I)
  }

  function tG9(I) {
    if (!this.constructor.format.jp2k.output.buffer) throw zK2();
    if (G1.object(I)) {
      if (G1.defined(I.quality))
        if (G1.integer(I.quality) && G1.inRange(I.quality, 1, 100)) this.options.jp2Quality = I.quality;
        else throw G1.invalidParameterError("quality", "integer between 1 and 100", I.quality);
      if (G1.defined(I.lossless))
        if (G1.bool(I.lossless)) this.options.jp2Lossless = I.lossless;
        else throw G1.invalidParameterError("lossless", "boolean", I.lossless);
      if (G1.defined(I.tileWidth))
        if (G1.integer(I.tileWidth) && G1.inRange(I.tileWidth, 1, 32768)) this.options.jp2TileWidth = I.tileWidth;
        else throw G1.invalidParameterError("tileWidth", "integer between 1 and 32768", I.tileWidth);
      if (G1.defined(I.tileHeight))
        if (G1.integer(I.tileHeight) && G1.inRange(I.tileHeight, 1, 32768)) this.options.jp2TileHeight = I.tileHeight;
        else throw G1.invalidParameterError("tileHeight", "integer between 1 and 32768", I.tileHeight);
      if (G1.defined(I.chromaSubsampling))
        if (G1.string(I.chromaSubsampling) && G1.inArray(I.chromaSubsampling, ["4:2:0", "4:4:4"])) this.options.jp2ChromaSubsampling = I.chromaSubsampling;
        else throw G1.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", I.chromaSubsampling)
    }
    return this._updateFormatOut("jp2", I)
  }

  function fK2(I, d) {
    if (G1.object(I) && G1.defined(I.loop))
      if (G1.integer(I.loop) && G1.inRange(I.loop, 0, 65535)) d.loop = I.loop;
      else throw G1.invalidParameterError("loop", "integer between 0 and 65535", I.loop);
    if (G1.object(I) && G1.defined(I.delay))
      if (G1.integer(I.delay) && G1.inRange(I.delay, 0, 65535)) d.delay = [I.delay];
      else if (Array.isArray(I.delay) && I.delay.every(G1.integer) && I.delay.every((G) => G1.inRange(G, 0, 65535))) d.delay = I.delay;
    else throw G1.invalidParameterError("delay", "integer or an array of integers between 0 and 65535", I.delay)
  }

  function IZ9(I) {
    if (G1.object(I)) {
      if (G1.defined(I.quality))
        if (G1.integer(I.quality) && G1.inRange(I.quality, 1, 100)) this.options.tiffQuality = I.quality;
        else throw G1.invalidParameterError("quality", "integer between 1 and 100", I.quality);
      if (G1.defined(I.bitdepth))
        if (G1.integer(I.bitdepth) && G1.inArray(I.bitdepth, [1, 2, 4, 8])) this.options.tiffBitdepth = I.bitdepth;
        else throw G1.invalidParameterError("bitdepth", "1, 2, 4 or 8", I.bitdepth);
      if (G1.defined(I.tile)) this._setBooleanOption("tiffTile", I.tile);
      if (G1.defined(I.tileWidth))
        if (G1.integer(I.tileWidth) && I.tileWidth > 0) this.options.tiffTileWidth = I.tileWidth;
        else throw G1.invalidParameterError("tileWidth", "integer greater than zero", I.tileWidth);
      if (G1.defined(I.tileHeight))
        if (G1.integer(I.tileHeight) && I.tileHeight > 0) this.options.tiffTileHeight = I.tileHeight;
        else throw G1.invalidParameterError("tileHeight", "integer greater than zero", I.tileHeight);
      if (G1.defined(I.miniswhite)) this._setBooleanOption("tiffMiniswhite", I.miniswhite);
      if (G1.defined(I.pyramid)) this._setBooleanOption("tiffPyramid", I.pyramid);
      if (G1.defined(I.xres))
        if (G1.number(I.xres) && I.xres > 0) this.options.tiffXres = I.xres;
        else throw G1.invalidParameterError("xres", "number greater than zero", I.xres);
      if (G1.defined(I.yres))
        if (G1.number(I.yres) && I.yres > 0) this.options.tiffYres = I.yres;
        else throw G1.invalidParameterError("yres", "number greater than zero", I.yres);
      if (G1.defined(I.compression))
        if (G1.string(I.compression) && G1.inArray(I.compression, ["none", "jpeg", "deflate", "packbits", "ccittfax4", "lzw", "webp", "zstd", "jp2k"])) this.options.tiffCompression = I.compression;
        else throw G1.invalidParameterError("compression", "one of: none, jpeg, deflate, packbits, ccittfax4, lzw, webp, zstd, jp2k", I.compression);
      if (G1.defined(I.predictor))
        if (G1.string(I.predictor) && G1.inArray(I.predictor, ["none", "horizontal", "float"])) this.options.tiffPredictor = I.predictor;
        else throw G1.invalidParameterError("predictor", "one of: none, horizontal, float", I.predictor);
      if (G1.defined(I.resolutionUnit))
        if (G1.string(I.resolutionUnit) && G1.inArray(I.resolutionUnit, ["inch", "cm"])) this.options.tiffResolutionUnit = I.resolutionUnit;
        else throw G1.invalidParameterError("resolutionUnit", "one of: inch, cm", I.resolutionUnit)
    }
    return this._updateFormatOut("tiff", I)
  }

  function dZ9(I) {
    return this.heif({
      ...I,
      compression: "av1"
    })
  }

  function GZ9(I) {
    if (G1.object(I)) {
      if (G1.string(I.compression) && G1.inArray(I.compression, ["av1", "hevc"])) this.options.heifCompression = I.compression;
      else throw G1.invalidParameterError("compression", "one of: av1, hevc", I.compression);
      if (G1.defined(I.quality))
        if (G1.integer(I.quality) && G1.inRange(I.quality, 1, 100)) this.options.heifQuality = I.quality;
        else throw G1.invalidParameterError("quality", "integer between 1 and 100", I.quality);
      if (G1.defined(I.lossless))
        if (G1.bool(I.lossless)) this.options.heifLossless = I.lossless;
        else throw G1.invalidParameterError("lossless", "boolean", I.lossless);
      if (G1.defined(I.effort))
        if (G1.integer(I.effort) && G1.inRange(I.effort, 0, 9)) this.options.heifEffort = I.effort;
        else throw G1.invalidParameterError("effort", "integer between 0 and 9", I.effort);
      if (G1.defined(I.chromaSubsampling))
        if (G1.string(I.chromaSubsampling) && G1.inArray(I.chromaSubsampling, ["4:2:0", "4:4:4"])) this.options.heifChromaSubsampling = I.chromaSubsampling;
        else throw G1.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", I.chromaSubsampling);
      if (G1.defined(I.bitdepth))
        if (G1.integer(I.bitdepth) && G1.inArray(I.bitdepth, [8, 10, 12])) {
          if (I.bitdepth !== 8 && this.constructor.versions.heif) throw G1.invalidParameterError("bitdepth when using prebuilt binaries", 8, I.bitdepth);
          this.options.heifBitdepth = I.bitdepth
        } else throw G1.invalidParameterError("bitdepth", "8, 10 or 12", I.bitdepth)
    } else throw G1.invalidParameterError("options", "Object", I);
    return this._updateFormatOut("heif", I)
  }

  function ZZ9(I) {
    if (G1.object(I)) {
      if (G1.defined(I.quality))
        if (G1.integer(I.quality) && G1.inRange(I.quality, 1, 100)) this.options.jxlDistance = I.quality >= 30 ? 0.1 + (100 - I.quality) * 0.09 : 0.017666666666666667 * I.quality * I.quality - 1.15 * I.quality + 25;
        else throw G1.invalidParameterError("quality", "integer between 1 and 100", I.quality);
      else if (G1.defined(I.distance))
        if (G1.number(I.distance) && G1.inRange(I.distance, 0, 15)) this.options.jxlDistance = I.distance;
        else throw G1.invalidParameterError("distance", "number between 0.0 and 15.0", I.distance);
      if (G1.defined(I.decodingTier))
        if (G1.integer(I.decodingTier) && G1.inRange(I.decodingTier, 0, 4)) this.options.jxlDecodingTier = I.decodingTier;
        else throw G1.invalidParameterError("decodingTier", "integer between 0 and 4", I.decodingTier);
      if (G1.defined(I.lossless))
        if (G1.bool(I.lossless)) this.options.jxlLossless = I.lossless;
        else throw G1.invalidParameterError("lossless", "boolean", I.lossless);
      if (G1.defined(I.effort))
        if (G1.integer(I.effort) && G1.inRange(I.effort, 3, 9)) this.options.jxlEffort = I.effort;
        else throw G1.invalidParameterError("effort", "integer between 3 and 9", I.effort)
    }
    return this._updateFormatOut("jxl", I)
  }

  function CZ9(I) {
    if (G1.object(I)) {
      if (G1.defined(I.depth))
        if (G1.string(I.depth) && G1.inArray(I.depth, ["char", "uchar", "short", "ushort", "int", "uint", "float", "complex", "double", "dpcomplex"])) this.options.rawDepth = I.depth;
        else throw G1.invalidParameterError("depth", "one of: char, uchar, short, ushort, int, uint, float, complex, double, dpcomplex", I.depth)
    }
    return this._updateFormatOut("raw")
  }

  function WZ9(I) {
    if (G1.object(I)) {
      if (G1.defined(I.size))
        if (G1.integer(I.size) && G1.inRange(I.size, 1, 8192)) this.options.tileSize = I.size;
        else throw G1.invalidParameterError("size", "integer between 1 and 8192", I.size);
      if (G1.defined(I.overlap))
        if (G1.integer(I.overlap) && G1.inRange(I.overlap, 0, 8192)) {
          if (I.overlap > this.options.tileSize) throw G1.invalidParameterError("overlap", `<= size (${this.options.tileSize})`, I.overlap);
          this.options.tileOverlap = I.overlap
        } else throw G1.invalidParameterError("overlap", "integer between 0 and 8192", I.overlap);
      if (G1.defined(I.container))
        if (G1.string(I.container) && G1.inArray(I.container, ["fs", "zip"])) this.options.tileContainer = I.container;
        else throw G1.invalidParameterError("container", "one of: fs, zip", I.container);
      if (G1.defined(I.layout))
        if (G1.string(I.layout) && G1.inArray(I.layout, ["dz", "google", "iiif", "iiif3", "zoomify"])) this.options.tileLayout = I.layout;
        else throw G1.invalidParameterError("layout", "one of: dz, google, iiif, iiif3, zoomify", I.layout);
      if (G1.defined(I.angle))
        if (G1.integer(I.angle) && !(I.angle % 90)) this.options.tileAngle = I.angle;
        else throw G1.invalidParameterError("angle", "positive/negative multiple of 90", I.angle);
      if (this._setBackgroundColourOption("tileBackground", I.background), G1.defined(I.depth))
        if (G1.string(I.depth) && G1.inArray(I.depth, ["onepixel", "onetile", "one"])) this.options.tileDepth = I.depth;
        else throw G1.invalidParameterError("depth", "one of: onepixel, onetile, one", I.depth);
      if (G1.defined(I.skipBlanks))
        if (G1.integer(I.skipBlanks) && G1.inRange(I.skipBlanks, -1, 65535)) this.options.tileSkipBlanks = I.skipBlanks;
        else throw G1.invalidParameterError("skipBlanks", "integer between -1 and 255/65535", I.skipBlanks);
      else if (G1.defined(I.layout) && I.layout === "google") this.options.tileSkipBlanks = 5;
      let d = G1.bool(I.center) ? I.center : I.centre;
      if (G1.defined(d)) this._setBooleanOption("tileCentre", d);
      if (G1.defined(I.id))
        if (G1.string(I.id)) this.options.tileId = I.id;
        else throw G1.invalidParameterError("id", "string", I.id);
      if (G1.defined(I.basename))
        if (G1.string(I.basename)) this.options.tileBasename = I.basename;
        else throw G1.invalidParameterError("basename", "string", I.basename)
    }
    if (G1.inArray(this.options.formatOut, ["jpeg", "png", "webp"])) this.options.tileFormat = this.options.formatOut;
    else if (this.options.formatOut !== "input") throw G1.invalidParameterError("format", "one of: jpeg, png, webp", this.options.formatOut);
    return this._updateFormatOut("dz")
  }

  function wZ9(I) {
    if (!G1.plainObject(I)) throw G1.invalidParameterError("options", "object", I);
    if (G1.integer(I.seconds) && G1.inRange(I.seconds, 0, 3600)) this.options.timeoutSeconds = I.seconds;
    else throw G1.invalidParameterError("seconds", "integer between 0 and 3600", I.seconds);
    return this
  }

  function BZ9(I, d) {
    if (!(G1.object(d) && d.force === !1)) this.options.formatOut = I;
    return this
  }

  function AZ9(I, d) {
    if (G1.bool(d)) this.options[I] = d;
    else throw G1.invalidParameterError(I, "boolean", d)
  }

  function VZ9() {
    if (!this.options.streamOut) {
      this.options.streamOut = !0;
      let I = Error();
      this._pipeline(void 0, I)
    }
  }

  function XZ9(I, d) {
    if (typeof I === "function") {
      if (this._isStreamInput()) this.on("finish", () => {
        this._flattenBufferIn(), xR.pipeline(this.options, (G, Z, C) => {
          if (G) I(G1.nativeError(G, d));
          else I(null, Z, C)
        })
      });
      else xR.pipeline(this.options, (G, Z, C) => {
        if (G) I(G1.nativeError(G, d));
        else I(null, Z, C)
      });
      return this
    } else if (this.options.streamOut) {
      if (this._isStreamInput()) {
        if (this.once("finish", () => {
            this._flattenBufferIn(), xR.pipeline(this.options, (G, Z, C) => {
              if (G) this.emit("error", G1.nativeError(G, d));
              else this.emit("info", C), this.push(Z);
              this.push(null), this.on("end", () => this.emit("close"))
            })
          }), this.streamInFinished) this.emit("finish")
      } else xR.pipeline(this.options, (G, Z, C) => {
        if (G) this.emit("error", G1.nativeError(G, d));
        else this.emit("info", C), this.push(Z);
        this.push(null), this.on("end", () => this.emit("close"))
      });
      return this
    } else if (this._isStreamInput()) return new Promise((G, Z) => {
      this.once("finish", () => {
        this._flattenBufferIn(), xR.pipeline(this.options, (C, W, w) => {
          if (C) Z(G1.nativeError(C, d));
          else if (this.options.resolveWithObject) G({
            data: W,
            info: w
          });
          else G(W)
        })
      })
    });
    else return new Promise((G, Z) => {
      xR.pipeline(this.options, (C, W, w) => {
        if (C) Z(G1.nativeError(C, d));
        else if (this.options.resolveWithObject) G({
          data: W,
          info: w
        });
        else G(W)
      })
    })
  }
  qK2.exports = function(I) {
    Object.assign(I.prototype, {
      toFile: bG9,
      toBuffer: hG9,
      keepExif: jG9,
      withExif: kG9,
      withExifMerge: xG9,
      keepIccProfile: cG9,
      withIccProfile: pG9,
      keepMetadata: iG9,
      withMetadata: nG9,
      toFormat: rG9,
      jpeg: aG9,
      jp2: tG9,
      png: sG9,
      webp: oG9,
      tiff: IZ9,
      avif: dZ9,
      heif: GZ9,
      jxl: ZZ9,
      gif: eG9,
      raw: CZ9,
      tile: WZ9,
      timeout: wZ9,
      _updateFormatOut: BZ9,
      _setBooleanOption: AZ9,
      _read: VZ9,
      _pipeline: XZ9
    })
  }
})
// @from(Start 5387641, End 5390219)
MK2 = Y((dN3, EK2) => {
  var YZ9 = B1("node:events"),
    Ms = _s(),
    pZ = $B(),
    {
      runtimePlatformArch: _Z9
    } = pg1(),
    KI = c$(),
    UK2 = _Z9(),
    IJ1 = KI.libvipsVersion(),
    HH = KI.format();
  HH.heif.output.alias = ["avif", "heic"];
  HH.jpeg.output.alias = ["jpe", "jpg"];
  HH.tiff.output.alias = ["tif"];
  HH.jp2k.output.alias = ["j2c", "j2k", "jp2", "jpx"];
  var DZ9 = {
      nearest: "nearest",
      bilinear: "bilinear",
      bicubic: "bicubic",
      locallyBoundedBicubic: "lbb",
      nohalo: "nohalo",
      vertexSplitQuadraticBasisSpline: "vsqbs"
    },
    cR = {
      vips: IJ1.semver
    };
  if (!IJ1.isGlobal)
    if (!IJ1.isWasm) try {
      cR = B1(`@img/sharp-${UK2}/versions`)
    } catch (I) {
      try {
        cR = B1(`@img/sharp-libvips-${UK2}/versions`)
      } catch (d) {}
    } else try {
      cR = (() => {
        throw new Error("Cannot require module " + "@img/sharp-wasm32/versions");
      })()
    } catch (I) {}
  cR.sharp = xg1().version;
  if (cR.heif && HH.heif) HH.heif.input.fileSuffix = [".avif"], HH.heif.output.alias = ["avif"];

  function vK2(I) {
    if (pZ.bool(I))
      if (I) return KI.cache(50, 20, 100);
      else return KI.cache(0, 0, 0);
    else if (pZ.object(I)) return KI.cache(I.memory, I.files, I.items);
    else return KI.cache()
  }
  vK2(!0);

  function HZ9(I) {
    return KI.concurrency(pZ.integer(I) ? I : null)
  }
  if (Ms.familySync() === Ms.GLIBC && !KI._isUsingJemalloc()) KI.concurrency(1);
  else if (Ms.familySync() === Ms.MUSL && KI.concurrency() === 1024) KI.concurrency(B1("node:os").availableParallelism());
  var FZ9 = new YZ9.EventEmitter;

  function gZ9() {
    return KI.counters()
  }

  function JZ9(I) {
    return KI.simd(pZ.bool(I) ? I : null)
  }

  function KZ9(I) {
    if (pZ.object(I))
      if (Array.isArray(I.operation) && I.operation.every(pZ.string)) KI.block(I.operation, !0);
      else throw pZ.invalidParameterError("operation", "Array<string>", I.operation);
    else throw pZ.invalidParameterError("options", "object", I)
  }

  function NZ9(I) {
    if (pZ.object(I))
      if (Array.isArray(I.operation) && I.operation.every(pZ.string)) KI.block(I.operation, !1);
      else throw pZ.invalidParameterError("operation", "Array<string>", I.operation);
    else throw pZ.invalidParameterError("options", "object", I)
  }
  EK2.exports = function(I) {
    I.cache = vK2, I.concurrency = HZ9, I.counters = gZ9, I.simd = JZ9, I.format = HH, I.interpolators = DZ9, I.versions = cR, I.queue = FZ9, I.block = KZ9, I.unblock = NZ9
  }
})
// @from(Start 5390225, End 5390392)
LK2 = Y((ZN3, SK2) => {
  var YX = kJ2();
  GK2()(YX);
  AK2()(YX);
  XK2()(YX);
  DK2()(YX);
  gK2()(YX);
  KK2()(YX);
  RK2()(YX);
  MK2()(YX);
  SK2.exports = YX
})
// @from(Start 5390398, End 5390802)
js = Y((_f3, XN2) => {
  var qJ1 = [],
    VN2 = 0,
    k7 = (I, d) => {
      if (VN2 >= d) qJ1.push(I)
    };
  k7.WARN = 1;
  k7.INFO = 2;
  k7.DEBUG = 3;
  k7.reset = () => {
    qJ1 = []
  };
  k7.setDebugLevel = (I) => {
    VN2 = I
  };
  k7.warn = (I) => k7(I, k7.WARN);
  k7.info = (I) => k7(I, k7.INFO);
  k7.debug = (I) => k7(I, k7.DEBUG);
  k7.debugMessages = () => qJ1;
  XN2.exports = k7
})
// @from(Start 5390808, End 5391149)
_N2 = Y((Df3, YN2) => {
  YN2.exports = ({
    onlyFirst: I = !1
  } = {}) => {
    let d = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
    return new RegExp(d, I ? void 0 : "g")
  }
})
// @from(Start 5391155, End 5391272)
HN2 = Y((Hf3, DN2) => {
  var KC9 = _N2();
  DN2.exports = (I) => typeof I === "string" ? I.replace(KC9(), "") : I
})
// @from(Start 5391278, End 5391887)
gN2 = Y((Ff3, RJ1) => {
  var FN2 = (I) => {
    if (Number.isNaN(I)) return !1;
    if (I >= 4352 && (I <= 4447 || I === 9001 || I === 9002 || 11904 <= I && I <= 12871 && I !== 12351 || 12880 <= I && I <= 19903 || 19968 <= I && I <= 42182 || 43360 <= I && I <= 43388 || 44032 <= I && I <= 55203 || 63744 <= I && I <= 64255 || 65040 <= I && I <= 65049 || 65072 <= I && I <= 65131 || 65281 <= I && I <= 65376 || 65504 <= I && I <= 65510 || 110592 <= I && I <= 110593 || 127488 <= I && I <= 127569 || 131072 <= I && I <= 262141)) return !0;
    return !1
  };
  RJ1.exports = FN2;
  RJ1.exports.default = FN2
})
// @from(Start 5391893, End 5402163)
KN2 = Y((gf3, JN2) => {
  JN2.exports = function() {
    return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g
  }
})
// @from(Start 5402169, End 5402738)
zN2 = Y((Jf3, UJ1) => {
  var NC9 = HN2(),
    zC9 = gN2(),
    QC9 = KN2(),
    NN2 = (I) => {
      if (typeof I !== "string" || I.length === 0) return 0;
      if (I = NC9(I), I.length === 0) return 0;
      I = I.replace(QC9(), "  ");
      let d = 0;
      for (let G = 0; G < I.length; G++) {
        let Z = I.codePointAt(G);
        if (Z <= 31 || Z >= 127 && Z <= 159) continue;
        if (Z >= 768 && Z <= 879) continue;
        if (Z > 65535) G++;
        d += zC9(Z) ? 2 : 1
      }
      return d
    };
  UJ1.exports = NN2;
  UJ1.exports.default = NN2
})
// @from(Start 5402744, End 5408292)
vJ1 = Y((Kf3, RN2) => {
  var QN2 = zN2();

  function ks(I) {
    return I ? /\u001b\[((?:\d*;){0,5}\d*)m/g : /\u001b\[(?:\d*;){0,5}\d*m/g
  }

  function mB(I) {
    let d = ks();
    return ("" + I).replace(d, "").split(`
`).reduce(function(C, W) {
      return QN2(W) > C ? QN2(W) : C
    }, 0)
  }

  function du(I, d) {
    return Array(d + 1).join(I)
  }

  function fC9(I, d, G, Z) {
    let C = mB(I);
    if (d + 1 >= C) {
      let W = d - C;
      switch (Z) {
        case "right": {
          I = du(G, W) + I;
          break
        }
        case "center": {
          let w = Math.ceil(W / 2),
            B = W - w;
          I = du(G, B) + I + du(G, w);
          break
        }
        default: {
          I = I + du(G, W);
          break
        }
      }
    }
    return I
  }
  var oR = {};

  function Gu(I, d, G) {
    d = "\x1B[" + d + "m", G = "\x1B[" + G + "m", oR[d] = {
      set: I,
      to: !0
    }, oR[G] = {
      set: I,
      to: !1
    }, oR[I] = {
      on: d,
      off: G
    }
  }
  Gu("bold", 1, 22);
  Gu("italics", 3, 23);
  Gu("underline", 4, 24);
  Gu("inverse", 7, 27);
  Gu("strikethrough", 9, 29);

  function fN2(I, d) {
    let G = d[1] ? parseInt(d[1].split(";")[0]) : 0;
    if (G >= 30 && G <= 39 || G >= 90 && G <= 97) {
      I.lastForegroundAdded = d[0];
      return
    }
    if (G >= 40 && G <= 49 || G >= 100 && G <= 107) {
      I.lastBackgroundAdded = d[0];
      return
    }
    if (G === 0) {
      for (let C in I)
        if (Object.prototype.hasOwnProperty.call(I, C)) delete I[C];
      return
    }
    let Z = oR[d[0]];
    if (Z) I[Z.set] = Z.to
  }

  function qC9(I) {
    let d = ks(!0),
      G = d.exec(I),
      Z = {};
    while (G !== null) fN2(Z, G), G = d.exec(I);
    return Z
  }

  function qN2(I, d) {
    let {
      lastBackgroundAdded: G,
      lastForegroundAdded: Z
    } = I;
    if (delete I.lastBackgroundAdded, delete I.lastForegroundAdded, Object.keys(I).forEach(function(C) {
        if (I[C]) d += oR[C].off
      }), G && G != "\x1B[49m") d += "\x1B[49m";
    if (Z && Z != "\x1B[39m") d += "\x1B[39m";
    return d
  }

  function RC9(I, d) {
    let {
      lastBackgroundAdded: G,
      lastForegroundAdded: Z
    } = I;
    if (delete I.lastBackgroundAdded, delete I.lastForegroundAdded, Object.keys(I).forEach(function(C) {
        if (I[C]) d = oR[C].on + d
      }), G && G != "\x1B[49m") d = G + d;
    if (Z && Z != "\x1B[39m") d = Z + d;
    return d
  }

  function UC9(I, d) {
    if (I.length === mB(I)) return I.substr(0, d);
    while (mB(I) > d) I = I.slice(0, -1);
    return I
  }

  function vC9(I, d) {
    let G = ks(!0),
      Z = I.split(ks()),
      C = 0,
      W = 0,
      w = "",
      B, A = {};
    while (W < d) {
      B = G.exec(I);
      let V = Z[C];
      if (C++, W + mB(V) > d) V = UC9(V, d - W);
      if (w += V, W += mB(V), W < d) {
        if (!B) break;
        w += B[0], fN2(A, B)
      }
    }
    return qN2(A, w)
  }

  function EC9(I, d, G) {
    if (G = G || "…", mB(I) <= d) return I;
    d -= mB(G);
    let C = vC9(I, d);
    C += G;
    let W = "\x1B]8;;\x07";
    if (I.includes(W) && !C.includes(W)) C += W;
    return C
  }

  function MC9() {
    return {
      chars: {
        top: "─",
        "top-mid": "┬",
        "top-left": "┌",
        "top-right": "┐",
        bottom: "─",
        "bottom-mid": "┴",
        "bottom-left": "└",
        "bottom-right": "┘",
        left: "│",
        "left-mid": "├",
        mid: "─",
        "mid-mid": "┼",
        right: "│",
        "right-mid": "┤",
        middle: "│"
      },
      truncate: "…",
      colWidths: [],
      rowHeights: [],
      colAligns: [],
      rowAligns: [],
      style: {
        "padding-left": 1,
        "padding-right": 1,
        head: ["red"],
        border: ["grey"],
        compact: !1
      },
      head: []
    }
  }

  function SC9(I, d) {
    I = I || {}, d = d || MC9();
    let G = Object.assign({}, d, I);
    return G.chars = Object.assign({}, d.chars, I.chars), G.style = Object.assign({}, d.style, I.style), G
  }

  function LC9(I, d) {
    let G = [],
      Z = d.split(/(\s+)/g),
      C = [],
      W = 0,
      w;
    for (let B = 0; B < Z.length; B += 2) {
      let A = Z[B],
        V = W + mB(A);
      if (W > 0 && w) V += w.length;
      if (V > I) {
        if (W !== 0) G.push(C.join(""));
        C = [A], W = mB(A)
      } else C.push(w || "", A), W = V;
      w = Z[B + 1]
    }
    if (W) G.push(C.join(""));
    return G
  }

  function yC9(I, d) {
    let G = [],
      Z = "";

    function C(w, B) {
      if (Z.length && B) Z += B;
      Z += w;
      while (Z.length > I) G.push(Z.slice(0, I)), Z = Z.slice(I)
    }
    let W = d.split(/(\s+)/g);
    for (let w = 0; w < W.length; w += 2) C(W[w], w && W[w - 1]);
    if (Z.length) G.push(Z);
    return G
  }

  function PC9(I, d, G = !0) {
    let Z = [];
    d = d.split(`
`);
    let C = G ? LC9 : yC9;
    for (let W = 0; W < d.length; W++) Z.push.apply(Z, C(I, d[W]));
    return Z
  }

  function $C9(I) {
    let d = {},
      G = [];
    for (let Z = 0; Z < I.length; Z++) {
      let C = RC9(d, I[Z]);
      d = qC9(C);
      let W = Object.assign({}, d);
      G.push(qN2(W, C))
    }
    return G
  }

  function uC9(I, d) {
    return ["\x1B]", "8", ";", ";", I || d, "\x07", d, "\x1B]", "8", ";", ";", "\x07"].join("")
  }
  RN2.exports = {
    strlen: mB,
    repeat: du,
    pad: fC9,
    truncate: EC9,
    mergeOptions: SC9,
    wordWrap: PC9,
    colorizeLines: $C9,
    hyperlink: uC9
  }
})
// @from(Start 5408298, End 5409722)
MN2 = Y((Nf3, EN2) => {
  var vN2 = {};
  EN2.exports = vN2;
  var UN2 = {
    reset: [0, 0],
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29],
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    gray: [90, 39],
    grey: [90, 39],
    brightRed: [91, 39],
    brightGreen: [92, 39],
    brightYellow: [93, 39],
    brightBlue: [94, 39],
    brightMagenta: [95, 39],
    brightCyan: [96, 39],
    brightWhite: [97, 39],
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],
    bgGray: [100, 49],
    bgGrey: [100, 49],
    bgBrightRed: [101, 49],
    bgBrightGreen: [102, 49],
    bgBrightYellow: [103, 49],
    bgBrightBlue: [104, 49],
    bgBrightMagenta: [105, 49],
    bgBrightCyan: [106, 49],
    bgBrightWhite: [107, 49],
    blackBG: [40, 49],
    redBG: [41, 49],
    greenBG: [42, 49],
    yellowBG: [43, 49],
    blueBG: [44, 49],
    magentaBG: [45, 49],
    cyanBG: [46, 49],
    whiteBG: [47, 49]
  };
  Object.keys(UN2).forEach(function(I) {
    var d = UN2[I],
      G = vN2[I] = [];
    G.open = "\x1B[" + d[0] + "m", G.close = "\x1B[" + d[1] + "m"
  })
})
// @from(Start 5409728, End 5409963)
LN2 = Y((zf3, SN2) => {
  SN2.exports = function(I, d) {
    d = d || process.argv;
    var G = d.indexOf("--"),
      Z = /^-{1,2}/.test(I) ? "" : "--",
      C = d.indexOf(Z + I);
    return C !== -1 && (G === -1 ? !0 : C < G)
  }
})
// @from(Start 5409969, End 5411978)
PN2 = Y((Qf3, yN2) => {
  var TC9 = B1("os"),
    NW = LN2(),
    QI = process.env,
    eR = void 0;
  if (NW("no-color") || NW("no-colors") || NW("color=false")) eR = !1;
  else if (NW("color") || NW("colors") || NW("color=true") || NW("color=always")) eR = !0;
  if ("FORCE_COLOR" in QI) eR = QI.FORCE_COLOR.length === 0 || parseInt(QI.FORCE_COLOR, 10) !== 0;

  function OC9(I) {
    if (I === 0) return !1;
    return {
      level: I,
      hasBasic: !0,
      has256: I >= 2,
      has16m: I >= 3
    }
  }

  function mC9(I) {
    if (eR === !1) return 0;
    if (NW("color=16m") || NW("color=full") || NW("color=truecolor")) return 3;
    if (NW("color=256")) return 2;
    if (I && !I.isTTY && eR !== !0) return 0;
    var d = eR ? 1 : 0;
    if (process.platform === "win32") {
      var G = TC9.release().split(".");
      if (Number(process.versions.node.split(".")[0]) >= 8 && Number(G[0]) >= 10 && Number(G[2]) >= 10586) return Number(G[2]) >= 14931 ? 3 : 2;
      return 1
    }
    if ("CI" in QI) {
      if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(function(C) {
          return C in QI
        }) || QI.CI_NAME === "codeship") return 1;
      return d
    }
    if ("TEAMCITY_VERSION" in QI) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(QI.TEAMCITY_VERSION) ? 1 : 0;
    if ("TERM_PROGRAM" in QI) {
      var Z = parseInt((QI.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (QI.TERM_PROGRAM) {
        case "iTerm.app":
          return Z >= 3 ? 3 : 2;
        case "Hyper":
          return 3;
        case "Apple_Terminal":
          return 2
      }
    }
    if (/-256(color)?$/i.test(QI.TERM)) return 2;
    if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(QI.TERM)) return 1;
    if ("COLORTERM" in QI) return 1;
    if (QI.TERM === "dumb") return d;
    return d
  }

  function EJ1(I) {
    var d = mC9(I);
    return OC9(d)
  }
  yN2.exports = {
    supportsColor: EJ1,
    stdout: EJ1(process.stdout),
    stderr: EJ1(process.stderr)
  }
})
// @from(Start 5411984, End 5413144)
uN2 = Y((ff3, $N2) => {
  $N2.exports = function I(d, G) {
    var Z = "";
    d = d || "Run the trap, drop the bass", d = d.split("");
    var C = {
      a: ["@", "Ą", "Ⱥ", "Ʌ", "Δ", "Λ", "Д"],
      b: ["ß", "Ɓ", "Ƀ", "ɮ", "β", "฿"],
      c: ["©", "Ȼ", "Ͼ"],
      d: ["Ð", "Ɗ", "Ԁ", "ԁ", "Ԃ", "ԃ"],
      e: ["Ë", "ĕ", "Ǝ", "ɘ", "Σ", "ξ", "Ҽ", "੬"],
      f: ["Ӻ"],
      g: ["ɢ"],
      h: ["Ħ", "ƕ", "Ң", "Һ", "Ӈ", "Ԋ"],
      i: ["༏"],
      j: ["Ĵ"],
      k: ["ĸ", "Ҡ", "Ӄ", "Ԟ"],
      l: ["Ĺ"],
      m: ["ʍ", "Ӎ", "ӎ", "Ԡ", "ԡ", "൩"],
      n: ["Ñ", "ŋ", "Ɲ", "Ͷ", "Π", "Ҋ"],
      o: ["Ø", "õ", "ø", "Ǿ", "ʘ", "Ѻ", "ם", "۝", "๏"],
      p: ["Ƿ", "Ҏ"],
      q: ["্"],
      r: ["®", "Ʀ", "Ȑ", "Ɍ", "ʀ", "Я"],
      s: ["§", "Ϟ", "ϟ", "Ϩ"],
      t: ["Ł", "Ŧ", "ͳ"],
      u: ["Ʊ", "Ս"],
      v: ["ט"],
      w: ["Ш", "Ѡ", "Ѽ", "൰"],
      x: ["Ҳ", "Ӿ", "Ӽ", "ӽ"],
      y: ["¥", "Ұ", "Ӌ"],
      z: ["Ƶ", "ɀ"]
    };
    return d.forEach(function(W) {
      W = W.toLowerCase();
      var w = C[W] || [" "],
        B = Math.floor(Math.random() * w.length);
      if (typeof C[W] !== "undefined") Z += C[W][B];
      else Z += W
    }), Z
  }
})
// @from(Start 5413150, End 5415148)
ON2 = Y((qf3, TN2) => {
  TN2.exports = function I(d, G) {
    d = d || "   he is here   ";
    var Z = {
        up: ["̍", "̎", "̄", "̅", "̿", "̑", "̆", "̐", "͒", "͗", "͑", "̇", "̈", "̊", "͂", "̓", "̈", "͊", "͋", "͌", "̃", "̂", "̌", "͐", "̀", "́", "̋", "̏", "̒", "̓", "̔", "̽", "̉", "ͣ", "ͤ", "ͥ", "ͦ", "ͧ", "ͨ", "ͩ", "ͪ", "ͫ", "ͬ", "ͭ", "ͮ", "ͯ", "̾", "͛", "͆", "̚"],
        down: ["̖", "̗", "̘", "̙", "̜", "̝", "̞", "̟", "̠", "̤", "̥", "̦", "̩", "̪", "̫", "̬", "̭", "̮", "̯", "̰", "̱", "̲", "̳", "̹", "̺", "̻", "̼", "ͅ", "͇", "͈", "͉", "͍", "͎", "͓", "͔", "͕", "͖", "͙", "͚", "̣"],
        mid: ["̕", "̛", "̀", "́", "͘", "̡", "̢", "̧", "̨", "̴", "̵", "̶", "͜", "͝", "͞", "͟", "͠", "͢", "̸", "̷", "͡", " ҉"]
      },
      C = [].concat(Z.up, Z.down, Z.mid);

    function W(A) {
      var V = Math.floor(Math.random() * A);
      return V
    }

    function w(A) {
      var V = !1;
      return C.filter(function(X) {
        V = X === A
      }), V
    }

    function B(A, V) {
      var X = "",
        _, F;
      V = V || {}, V.up = typeof V.up !== "undefined" ? V.up : !0, V.mid = typeof V.mid !== "undefined" ? V.mid : !0, V.down = typeof V.down !== "undefined" ? V.down : !0, V.size = typeof V.size !== "undefined" ? V.size : "maxi", A = A.split("");
      for (F in A) {
        if (w(F)) continue;
        switch (X = X + A[F], _ = {
            up: 0,
            down: 0,
            mid: 0
          }, V.size) {
          case "mini":
            _.up = W(8), _.mid = W(2), _.down = W(8);
            break;
          case "maxi":
            _.up = W(16) + 3, _.mid = W(4) + 1, _.down = W(64) + 3;
            break;
          default:
            _.up = W(8) + 1, _.mid = W(6) / 2, _.down = W(8) + 1;
            break
        }
        var g = ["up", "mid", "down"];
        for (var J in g) {
          var K = g[J];
          for (var Q = 0; Q <= _[K]; Q++)
            if (V[K]) X = X + Z[K][W(Z[K].length)]
        }
      }
      return X
    }
    return B(d, G)
  }
})
// @from(Start 5415154, End 5415444)
lN2 = Y((Rf3, mN2) => {
  mN2.exports = function(I) {
    return function(d, G, Z) {
      if (d === " ") return d;
      switch (G % 3) {
        case 0:
          return I.red(d);
        case 1:
          return I.white(d);
        case 2:
          return I.blue(d)
      }
    }
  }
})
// @from(Start 5415450, End 5415591)
hN2 = Y((Uf3, bN2) => {
  bN2.exports = function(I) {
    return function(d, G, Z) {
      return G % 2 === 0 ? d : I.inverse(d)
    }
  }
})
// @from(Start 5415597, End 5415826)
kN2 = Y((vf3, jN2) => {
  jN2.exports = function(I) {
    var d = ["red", "yellow", "green", "blue", "magenta"];
    return function(G, Z, C) {
      if (G === " ") return G;
      else return I[d[Z++ % d.length]](G)
    }
  }
})
// @from(Start 5415832, End 5416222)
cN2 = Y((Ef3, xN2) => {
  xN2.exports = function(I) {
    var d = ["underline", "inverse", "grey", "yellow", "red", "green", "blue", "white", "cyan", "magenta", "brightYellow", "brightRed", "brightGreen", "brightBlue", "brightWhite", "brightCyan", "brightMagenta"];
    return function(G, Z, C) {
      return G === " " ? G : I[d[Math.round(Math.random() * (d.length - 2))]](G)
    }
  }
})
// @from(Start 5416228, End 5419446)
sN2 = Y((Sf3, aN2) => {
  var o4 = {};
  aN2.exports = o4;
  o4.themes = {};
  var lC9 = B1("util"),
    ZK = o4.styles = MN2(),
    iN2 = Object.defineProperties,
    bC9 = new RegExp(/[\r\n]+/g);
  o4.supportsColor = PN2().supportsColor;
  if (typeof o4.enabled === "undefined") o4.enabled = o4.supportsColor() !== !1;
  o4.enable = function() {
    o4.enabled = !0
  };
  o4.disable = function() {
    o4.enabled = !1
  };
  o4.stripColors = o4.strip = function(I) {
    return ("" + I).replace(/\x1B\[\d+m/g, "")
  };
  var Mf3 = o4.stylize = function I(d, G) {
      if (!o4.enabled) return d + "";
      var Z = ZK[G];
      if (!Z && G in o4) return o4[G](d);
      return Z.open + d + Z.close
    },
    hC9 = /[|\\{}()[\]^$+*?.]/g,
    jC9 = function(I) {
      if (typeof I !== "string") throw new TypeError("Expected a string");
      return I.replace(hC9, "\\$&")
    };

  function nN2(I) {
    var d = function G() {
      return xC9.apply(G, arguments)
    };
    return d._styles = I, d.__proto__ = kC9, d
  }
  var rN2 = function() {
      var I = {};
      return ZK.grey = ZK.gray, Object.keys(ZK).forEach(function(d) {
        ZK[d].closeRe = new RegExp(jC9(ZK[d].close), "g"), I[d] = {
          get: function() {
            return nN2(this._styles.concat(d))
          }
        }
      }), I
    }(),
    kC9 = iN2(function I() {}, rN2);

  function xC9() {
    var I = Array.prototype.slice.call(arguments),
      d = I.map(function(w) {
        if (w != null && w.constructor === String) return w;
        else return lC9.inspect(w)
      }).join(" ");
    if (!o4.enabled || !d) return d;
    var G = d.indexOf(`
`) != -1,
      Z = this._styles,
      C = Z.length;
    while (C--) {
      var W = ZK[Z[C]];
      if (d = W.open + d.replace(W.closeRe, W.open) + W.close, G) d = d.replace(bC9, function(w) {
        return W.close + w + W.open
      })
    }
    return d
  }
  o4.setTheme = function(I) {
    if (typeof I === "string") {
      console.log("colors.setTheme now only accepts an object, not a string.  If you are trying to set a theme from a file, it is now your (the caller's) responsibility to require the file.  The old syntax looked like colors.setTheme(__dirname + '/../themes/generic-logging.js'); The new syntax looks like colors.setTheme(require(__dirname + '/../themes/generic-logging.js'));");
      return
    }
    for (var d in I)(function(G) {
      o4[G] = function(Z) {
        if (typeof I[G] === "object") {
          var C = Z;
          for (var W in I[G]) C = o4[I[G][W]](C);
          return C
        }
        return o4[I[G]](Z)
      }
    })(d)
  };

  function cC9() {
    var I = {};
    return Object.keys(rN2).forEach(function(d) {
      I[d] = {
        get: function() {
          return nN2([d])
        }
      }
    }), I
  }
  var pC9 = function I(d, G) {
    var Z = G.split("");
    return Z = Z.map(d), Z.join("")
  };
  o4.trap = uN2();
  o4.zalgo = ON2();
  o4.maps = {};
  o4.maps.america = lN2()(o4);
  o4.maps.zebra = hN2()(o4);
  o4.maps.rainbow = kN2()(o4);
  o4.maps.random = cN2()(o4);
  for (pN2 in o4.maps)(function(I) {
    o4[I] = function(d) {
      return pC9(o4.maps[I], d)
    }
  })(pN2);
  var pN2;
  iN2(o4, cC9())
})
// @from(Start 5419452, End 5419517)
eN2 = Y((Lf3, oN2) => {
  var iC9 = sN2();
  oN2.exports = iC9
})
// @from(Start 5419523, End 5427424)
Gz2 = Y((yf3, ps) => {
  var {
    info: nC9,
    debug: dz2
  } = js(), DG = vJ1();
  class Zu {
    constructor(I) {
      this.setOptions(I), this.x = null, this.y = null
    }
    setOptions(I) {
      if (["boolean", "number", "bigint", "string"].indexOf(typeof I) !== -1) I = {
        content: "" + I
      };
      I = I || {}, this.options = I;
      let d = I.content;
      if (["boolean", "number", "bigint", "string"].indexOf(typeof d) !== -1) this.content = String(d);
      else if (!d) this.content = this.options.href || "";
      else throw new Error("Content needs to be a primitive, got: " + typeof d);
      if (this.colSpan = I.colSpan || 1, this.rowSpan = I.rowSpan || 1, this.options.href) Object.defineProperty(this, "href", {
        get() {
          return this.options.href
        }
      })
    }
    mergeTableOptions(I, d) {
      this.cells = d;
      let G = this.options.chars || {},
        Z = I.chars,
        C = this.chars = {};
      aC9.forEach(function(B) {
        MJ1(G, Z, B, C)
      }), this.truncate = this.options.truncate || I.truncate;
      let W = this.options.style = this.options.style || {},
        w = I.style;
      MJ1(W, w, "padding-left", this), MJ1(W, w, "padding-right", this), this.head = W.head || w.head, this.border = W.border || w.border, this.fixedWidth = I.colWidths[this.x], this.lines = this.computeLines(I), this.desiredWidth = DG.strlen(this.content) + this.paddingLeft + this.paddingRight, this.desiredHeight = this.lines.length
    }
    computeLines(I) {
      let d = I.wordWrap || I.textWrap,
        {
          wordWrap: G = d
        } = this.options;
      if (this.fixedWidth && G) {
        if (this.fixedWidth -= this.paddingLeft + this.paddingRight, this.colSpan) {
          let W = 1;
          while (W < this.colSpan) this.fixedWidth += I.colWidths[this.x + W], W++
        }
        let {
          wrapOnWordBoundary: Z = !0
        } = I, {
          wrapOnWordBoundary: C = Z
        } = this.options;
        return this.wrapLines(DG.wordWrap(this.fixedWidth, this.content, C))
      }
      return this.wrapLines(this.content.split(`
`))
    }
    wrapLines(I) {
      let d = DG.colorizeLines(I);
      if (this.href) return d.map((G) => DG.hyperlink(this.href, G));
      return d
    }
    init(I) {
      let d = this.x,
        G = this.y;
      this.widths = I.colWidths.slice(d, d + this.colSpan), this.heights = I.rowHeights.slice(G, G + this.rowSpan), this.width = this.widths.reduce(Iz2, -1), this.height = this.heights.reduce(Iz2, -1), this.hAlign = this.options.hAlign || I.colAligns[d], this.vAlign = this.options.vAlign || I.rowAligns[G], this.drawRight = d + this.colSpan == I.colWidths.length
    }
    draw(I, d) {
      if (I == "top") return this.drawTop(this.drawRight);
      if (I == "bottom") return this.drawBottom(this.drawRight);
      let G = DG.truncate(this.content, 10, this.truncate);
      if (!I) nC9(`${this.y}-${this.x}: ${this.rowSpan-I}x${this.colSpan} Cell ${G}`);
      let Z = Math.max(this.height - this.lines.length, 0),
        C;
      switch (this.vAlign) {
        case "center":
          C = Math.ceil(Z / 2);
          break;
        case "bottom":
          C = Z;
          break;
        default:
          C = 0
      }
      if (I < C || I >= C + this.lines.length) return this.drawEmpty(this.drawRight, d);
      let W = this.lines.length > this.height && I + 1 >= this.height;
      return this.drawLine(I - C, this.drawRight, W, d)
    }
    drawTop(I) {
      let d = [];
      if (this.cells) this.widths.forEach(function(G, Z) {
        d.push(this._topLeftChar(Z)), d.push(DG.repeat(this.chars[this.y == 0 ? "top" : "mid"], G))
      }, this);
      else d.push(this._topLeftChar(0)), d.push(DG.repeat(this.chars[this.y == 0 ? "top" : "mid"], this.width));
      if (I) d.push(this.chars[this.y == 0 ? "topRight" : "rightMid"]);
      return this.wrapWithStyleColors("border", d.join(""))
    }
    _topLeftChar(I) {
      let d = this.x + I,
        G;
      if (this.y == 0) G = d == 0 ? "topLeft" : I == 0 ? "topMid" : "top";
      else if (d == 0) G = "leftMid";
      else if (G = I == 0 ? "midMid" : "bottomMid", this.cells) {
        if (this.cells[this.y - 1][d] instanceof Zu.ColSpanCell) G = I == 0 ? "topMid" : "mid";
        if (I == 0) {
          let C = 1;
          while (this.cells[this.y][d - C] instanceof Zu.ColSpanCell) C++;
          if (this.cells[this.y][d - C] instanceof Zu.RowSpanCell) G = "leftMid"
        }
      }
      return this.chars[G]
    }
    wrapWithStyleColors(I, d) {
      if (this[I] && this[I].length) try {
        let G = eN2();
        for (let Z = this[I].length - 1; Z >= 0; Z--) G = G[this[I][Z]];
        return G(d)
      } catch (G) {
        return d
      } else return d
    }
    drawLine(I, d, G, Z) {
      let C = this.chars[this.x == 0 ? "left" : "middle"];
      if (this.x && Z && this.cells) {
        let _ = this.cells[this.y + Z][this.x - 1];
        while (_ instanceof xs) _ = this.cells[_.y][_.x - 1];
        if (!(_ instanceof cs)) C = this.chars.rightMid
      }
      let W = DG.repeat(" ", this.paddingLeft),
        w = d ? this.chars.right : "",
        B = DG.repeat(" ", this.paddingRight),
        A = this.lines[I],
        V = this.width - (this.paddingLeft + this.paddingRight);
      if (G) A += this.truncate || "…";
      let X = DG.truncate(A, V, this.truncate);
      return X = DG.pad(X, V, " ", this.hAlign), X = W + X + B, this.stylizeLine(C, X, w)
    }
    stylizeLine(I, d, G) {
      if (I = this.wrapWithStyleColors("border", I), G = this.wrapWithStyleColors("border", G), this.y === 0) d = this.wrapWithStyleColors("head", d);
      return I + d + G
    }
    drawBottom(I) {
      let d = this.chars[this.x == 0 ? "bottomLeft" : "bottomMid"],
        G = DG.repeat(this.chars.bottom, this.width),
        Z = I ? this.chars.bottomRight : "";
      return this.wrapWithStyleColors("border", d + G + Z)
    }
    drawEmpty(I, d) {
      let G = this.chars[this.x == 0 ? "left" : "middle"];
      if (this.x && d && this.cells) {
        let W = this.cells[this.y + d][this.x - 1];
        while (W instanceof xs) W = this.cells[W.y][W.x - 1];
        if (!(W instanceof cs)) G = this.chars.rightMid
      }
      let Z = I ? this.chars.right : "",
        C = DG.repeat(" ", this.width);
      return this.stylizeLine(G, C, Z)
    }
  }
  class xs {
    constructor() {}
    draw(I) {
      if (typeof I === "number") dz2(`${this.y}-${this.x}: 1x1 ColSpanCell`);
      return ""
    }
    init() {}
    mergeTableOptions() {}
  }
  class cs {
    constructor(I) {
      this.originalCell = I
    }
    init(I) {
      let d = this.y,
        G = this.originalCell.y;
      this.cellOffset = d - G, this.offset = rC9(I.rowHeights, G, this.cellOffset)
    }
    draw(I) {
      if (I == "top") return this.originalCell.draw(this.offset, this.cellOffset);
      if (I == "bottom") return this.originalCell.draw("bottom");
      return dz2(`${this.y}-${this.x}: 1x${this.colSpan} RowSpanCell for ${this.originalCell.content}`), this.originalCell.draw(this.offset + 1 + I)
    }
    mergeTableOptions() {}
  }

  function tN2(...I) {
    return I.filter((d) => d !== void 0 && d !== null).shift()
  }

  function MJ1(I, d, G, Z) {
    let C = G.split("-");
    if (C.length > 1) C[1] = C[1].charAt(0).toUpperCase() + C[1].substr(1), C = C.join(""), Z[C] = tN2(I[C], I[G], d[C], d[G]);
    else Z[G] = tN2(I[G], d[G])
  }

  function rC9(I, d, G) {
    let Z = I[d];
    for (let C = 1; C < G; C++) Z += 1 + I[d + C];
    return Z
  }

  function Iz2(I, d) {
    return I + d + 1
  }
  var aC9 = ["top", "top-mid", "top-left", "top-right", "bottom", "bottom-mid", "bottom-left", "bottom-right", "left", "left-mid", "mid", "mid-mid", "right", "right-mid", "middle"];
  ps.exports = Zu;
  ps.exports.ColSpanCell = xs;
  ps.exports.RowSpanCell = cs
})
// @from(Start 5427430, End 5432356)
Wz2 = Y((Pf3, Cz2) => {
  var {
    warn: sC9,
    debug: oC9
  } = js(), SJ1 = Gz2(), {
    ColSpanCell: eC9,
    RowSpanCell: tC9
  } = SJ1;
  (function() {
    function I(g, J) {
      if (g[J] > 0) return I(g, J + 1);
      return J
    }

    function d(g) {
      let J = {};
      g.forEach(function(K, Q) {
        let E = 0;
        K.forEach(function(S) {
          S.y = Q, S.x = Q ? I(J, E) : E;
          let P = S.rowSpan || 1,
            $ = S.colSpan || 1;
          if (P > 1)
            for (let h = 0; h < $; h++) J[S.x + h] = P;
          E = S.x + $
        }), Object.keys(J).forEach((S) => {
          if (J[S]--, J[S] < 1) delete J[S]
        })
      })
    }

    function G(g) {
      let J = 0;
      return g.forEach(function(K) {
        K.forEach(function(Q) {
          J = Math.max(J, Q.x + (Q.colSpan || 1))
        })
      }), J
    }

    function Z(g) {
      return g.length
    }

    function C(g, J) {
      let K = g.y,
        Q = g.y - 1 + (g.rowSpan || 1),
        E = J.y,
        S = J.y - 1 + (J.rowSpan || 1),
        P = !(K > S || E > Q),
        $ = g.x,
        h = g.x - 1 + (g.colSpan || 1),
        O = J.x,
        T = J.x - 1 + (J.colSpan || 1),
        V1 = !($ > T || O > h);
      return P && V1
    }

    function W(g, J, K) {
      let Q = Math.min(g.length - 1, K),
        E = {
          x: J,
          y: K
        };
      for (let S = 0; S <= Q; S++) {
        let P = g[S];
        for (let $ = 0; $ < P.length; $++)
          if (C(E, P[$])) return !0
      }
      return !1
    }

    function w(g, J, K, Q) {
      for (let E = K; E < Q; E++)
        if (W(g, E, J)) return !1;
      return !0
    }

    function B(g) {
      g.forEach(function(J, K) {
        J.forEach(function(Q) {
          for (let E = 1; E < Q.rowSpan; E++) {
            let S = new tC9(Q);
            S.x = Q.x, S.y = Q.y + E, S.colSpan = Q.colSpan, V(S, g[K + E])
          }
        })
      })
    }

    function A(g) {
      for (let J = g.length - 1; J >= 0; J--) {
        let K = g[J];
        for (let Q = 0; Q < K.length; Q++) {
          let E = K[Q];
          for (let S = 1; S < E.colSpan; S++) {
            let P = new eC9;
            P.x = E.x + S, P.y = E.y, K.splice(Q + 1, 0, P)
          }
        }
      }
    }

    function V(g, J) {
      let K = 0;
      while (K < J.length && J[K].x < g.x) K++;
      J.splice(K, 0, g)
    }

    function X(g) {
      let J = Z(g),
        K = G(g);
      oC9(`Max rows: ${J}; Max cols: ${K}`);
      for (let Q = 0; Q < J; Q++)
        for (let E = 0; E < K; E++)
          if (!W(g, E, Q)) {
            let S = {
              x: E,
              y: Q,
              colSpan: 1,
              rowSpan: 1
            };
            E++;
            while (E < K && !W(g, E, Q)) S.colSpan++, E++;
            let P = Q + 1;
            while (P < J && w(g, P, S.x, S.x + S.colSpan)) S.rowSpan++, P++;
            let $ = new SJ1(S);
            $.x = S.x, $.y = S.y, sC9(`Missing cell at ${$.y}-${$.x}.`), V($, g[Q])
          }
    }

    function _(g) {
      return g.map(function(J) {
        if (!Array.isArray(J)) {
          let K = Object.keys(J)[0];
          if (J = J[K], Array.isArray(J)) J = J.slice(), J.unshift(K);
          else J = [K, J]
        }
        return J.map(function(K) {
          return new SJ1(K)
        })
      })
    }

    function F(g) {
      let J = _(g);
      return d(J), X(J), B(J), A(J), J
    }
    Cz2.exports = {
      makeTableLayout: F,
      layoutTable: d,
      addRowSpanCells: B,
      maxWidth: G,
      fillInTable: X,
      computeWidths: Zz2("colSpan", "desiredWidth", "x", 1),
      computeHeights: Zz2("rowSpan", "desiredHeight", "y", 1)
    }
  })();

  function Zz2(I, d, G, Z) {
    return function(C, W) {
      let w = [],
        B = [],
        A = {};
      W.forEach(function(V) {
        V.forEach(function(X) {
          if ((X[I] || 1) > 1) B.push(X);
          else w[X[G]] = Math.max(w[X[G]] || 0, X[d] || 0, Z)
        })
      }), C.forEach(function(V, X) {
        if (typeof V === "number") w[X] = V
      });
      for (let V = B.length - 1; V >= 0; V--) {
        let X = B[V],
          _ = X[I],
          F = X[G],
          g = w[F],
          J = typeof C[F] === "number" ? 0 : 1;
        if (typeof g === "number") {
          for (let K = 1; K < _; K++)
            if (g += 1 + w[F + K], typeof C[F + K] !== "number") J++
        } else if (g = d === "desiredWidth" ? X.desiredWidth - 1 : 1, !A[F] || A[F] < g) A[F] = g;
        if (X[d] > g) {
          let K = 0;
          while (J > 0 && X[d] > g) {
            if (typeof C[F + K] !== "number") {
              let Q = Math.round((X[d] - g) / J);
              g += Q, w[F + K] += Q, J--
            }
            K++
          }
        }
      }
      Object.assign(C, w, A);
      for (let V = 0; V < C.length; V++) C[V] = Math.max(Z, C[V] || 0)
    }
  }
})
// @from(Start 5432362, End 5434529)
Bz2 = Y(($f3, wz2) => {
  var DX = js(),
    IW9 = vJ1(),
    LJ1 = Wz2();
  class PJ1 extends Array {
    constructor(I) {
      super();
      let d = IW9.mergeOptions(I);
      if (Object.defineProperty(this, "options", {
          value: d,
          enumerable: d.debug
        }), d.debug) {
        switch (typeof d.debug) {
          case "boolean":
            DX.setDebugLevel(DX.WARN);
            break;
          case "number":
            DX.setDebugLevel(d.debug);
            break;
          case "string":
            DX.setDebugLevel(parseInt(d.debug, 10));
            break;
          default:
            DX.setDebugLevel(DX.WARN), DX.warn(`Debug option is expected to be boolean, number, or string. Received a ${typeof d.debug}`)
        }
        Object.defineProperty(this, "messages", {
          get() {
            return DX.debugMessages()
          }
        })
      }
    }
    toString() {
      let I = this,
        d = this.options.head && this.options.head.length;
      if (d) {
        if (I = [this.options.head], this.length) I.push.apply(I, this)
      } else this.options.style.head = [];
      let G = LJ1.makeTableLayout(I);
      G.forEach(function(C) {
        C.forEach(function(W) {
          W.mergeTableOptions(this.options, G)
        }, this)
      }, this), LJ1.computeWidths(this.options.colWidths, G), LJ1.computeHeights(this.options.rowHeights, G), G.forEach(function(C) {
        C.forEach(function(W) {
          W.init(this.options)
        }, this)
      }, this);
      let Z = [];
      for (let C = 0; C < G.length; C++) {
        let W = G[C],
          w = this.options.rowHeights[C];
        if (C === 0 || !this.options.style.compact || C == 1 && d) yJ1(W, "top", Z);
        for (let B = 0; B < w; B++) yJ1(W, B, Z);
        if (C + 1 == G.length) yJ1(W, "bottom", Z)
      }
      return Z.join(`
`)
    }
    get width() {
      return this.toString().split(`
`)[0].length
    }
  }
  PJ1.reset = () => DX.reset();

  function yJ1(I, d, G) {
    let Z = [];
    I.forEach(function(W) {
      Z.push(W.draw(d))
    });
    let C = Z.join("");
    if (C.length) G.push(C)
  }
  wz2.exports = PJ1
})
// @from(Start 5434535, End 5435041)
ru = Y((oA9) => {
  class ZN1 extends Error {
    constructor(I, d, G) {
      super(G);
      Error.captureStackTrace(this, this.constructor), this.name = this.constructor.name, this.code = d, this.exitCode = I, this.nestedError = void 0
    }
  }
  class Fq2 extends ZN1 {
    constructor(I) {
      super(1, "commander.invalidArgument", I);
      Error.captureStackTrace(this, this.constructor), this.name = this.constructor.name
    }
  }
  oA9.CommanderError = ZN1;
  oA9.InvalidArgumentError = Fq2
})
// @from(Start 5435047, End 5436695)
eo = Y((GV9) => {
  var {
    InvalidArgumentError: IV9
  } = ru();
  class gq2 {
    constructor(I, d) {
      switch (this.description = d || "", this.variadic = !1, this.parseArg = void 0, this.defaultValue = void 0, this.defaultValueDescription = void 0, this.argChoices = void 0, I[0]) {
        case "<":
          this.required = !0, this._name = I.slice(1, -1);
          break;
        case "[":
          this.required = !1, this._name = I.slice(1, -1);
          break;
        default:
          this.required = !0, this._name = I;
          break
      }
      if (this._name.length > 3 && this._name.slice(-3) === "...") this.variadic = !0, this._name = this._name.slice(0, -3)
    }
    name() {
      return this._name
    }
    _concatValue(I, d) {
      if (d === this.defaultValue || !Array.isArray(d)) return [I];
      return d.concat(I)
    }
    default (I, d) {
      return this.defaultValue = I, this.defaultValueDescription = d, this
    }
    argParser(I) {
      return this.parseArg = I, this
    }
    choices(I) {
      return this.argChoices = I.slice(), this.parseArg = (d, G) => {
        if (!this.argChoices.includes(d)) throw new IV9(`Allowed choices are ${this.argChoices.join(", ")}.`);
        if (this.variadic) return this._concatValue(d, G);
        return d
      }, this
    }
    argRequired() {
      return this.required = !0, this
    }
    argOptional() {
      return this.required = !1, this
    }
  }

  function dV9(I) {
    let d = I.name() + (I.variadic === !0 ? "..." : "");
    return I.required ? "<" + d + ">" : "[" + d + "]"
  }
  GV9.Argument = gq2;
  GV9.humanReadableArgName = dV9
})