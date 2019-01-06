(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var face_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(142);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_FaceAndLandmarkDetection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(206);
/* harmony import */ var _components_TrackFacesWithLandmarks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(271);
/* harmony import */ var _components_VideoWithOverlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(208);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(157);
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(180);










var _default =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(_default, _React$Component);

  function _default() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    var _this = this;

    if (!(typeof window !== 'undefined' && window.document)) {
      return null;
    }

    return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_Root__WEBPACK_IMPORTED_MODULE_8__[/* Root */ "a"], null, react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_components_VideoWithOverlay__WEBPACK_IMPORTED_MODULE_6__[/* VideoWithOverlay */ "a"], {
      onLoaded: function onLoaded(_ref) {
        var input = _ref.video,
            overlay = _ref.overlay;
        return _this.setState({
          input: input,
          overlay: overlay
        });
      },
      maxVideoWidth: 800,
      src: _const__WEBPACK_IMPORTED_MODULE_7__[/* EXAMPLE_VIDEO */ "e"]
    }), react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_components_FaceAndLandmarkDetection__WEBPACK_IMPORTED_MODULE_4__[/* FaceAndLandmarkDetection */ "a"], Object.assign({}, this.state, {
      initialFaceDetector: _const__WEBPACK_IMPORTED_MODULE_7__[/* FACE_DETECTORS */ "f"][0],
      initialTinyFaceDetectorOptions: new face_api_js__WEBPACK_IMPORTED_MODULE_2__["TinyFaceDetectorOptions"]({
        inputSize: 224
      })
    }), function (detectionOptions, withBoxes, withLandmarks) {
      return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_components_TrackFacesWithLandmarks__WEBPACK_IMPORTED_MODULE_5__[/* TrackFacesWithLandmarks */ "a"], Object.assign({
        detectionOptions: detectionOptions,
        withBoxes: withBoxes,
        withLandmarks: withLandmarks
      }, _this.state));
    }));
  };

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);



/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalLoader; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(141);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var ModalLoader = function ModalLoader(props) {
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* Dialog */ "c"], {
    disableBackdropClick: true,
    disableEscapeKeyDown: true,
    open: true
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* DialogTitle */ "e"], null, props.title), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* DialogContent */ "d"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[/* LinearProgress */ "o"], null)));
};

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(6);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/index.es.js
var index_es = __webpack_require__(141);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./src/const.ts
var src_const = __webpack_require__(157);

// EXTERNAL MODULE: ./node_modules/gatsby/node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/face-api.js/build/es6/index.js + 166 modules
var es6 = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(161);

// EXTERNAL MODULE: ./src/styled/SideBySide.tsx
var SideBySide = __webpack_require__(169);

// CONCATENATED MODULE: ./src/components/AdjustableInput.tsx




var StyledFormControl = Object(styled_components_browser_esm["b" /* default */])(index_es["h" /* FormControl */]).withConfig({
  displayName: "AdjustableInput__StyledFormControl",
  componentId: "hi48c9-0"
})(["margin:10px !important;"]);
var StyledButton = Object(styled_components_browser_esm["b" /* default */])(index_es["a" /* Button */]).withConfig({
  displayName: "AdjustableInput__StyledButton",
  componentId: "hi48c9-1"
})(["width:40px;height:40px;"]);
var AdjustableInput_AdjustableInput = function AdjustableInput(props) {
  return react["createElement"](StyledFormControl, null, react["createElement"](SideBySide["a" /* SideBySide */], null, react["createElement"](index_es["n" /* InputLabel */], {
    htmlFor: props.inputId
  }, props.label), react["createElement"](index_es["m" /* Input */], {
    id: props.inputId,
    value: props.value
  }), react["createElement"](StyledButton, {
    variant: "outlined",
    onClick: function onClick() {
      return props.onChange(Math.max(props.value - props.step, props.minValue));
    }
  }, "-"), react["createElement"](StyledButton, {
    variant: "outlined",
    onClick: function onClick() {
      return props.onChange(Math.min(props.value + props.step, props.maxValue));
    }
  }, "+")));
};
// EXTERNAL MODULE: ./src/styled/CenterContent.tsx
var CenterContent = __webpack_require__(153);

// CONCATENATED MODULE: ./src/facc/MtcnnControls.tsx






var MtcnnControls_MtcnnParamControls = function MtcnnParamControls(props) {
  var assignOptions = function assignOptions(partial) {
    var _props$detectionParam = props.detectionParams,
        scaleFactor = _props$detectionParam.scaleFactor,
        minFaceSize = _props$detectionParam.minFaceSize;
    return new es6["MtcnnOptions"](Object.assign({
      scaleFactor: scaleFactor,
      minFaceSize: minFaceSize
    }, partial));
  };

  return react["createElement"](CenterContent["a" /* CenterContent */], null, react["createElement"](AdjustableInput_AdjustableInput, {
    inputId: "scaleFactor",
    label: "scaleFactor:",
    value: props.detectionParams.scaleFactor,
    minValue: 0.1,
    maxValue: 0.9,
    step: 0.05,
    onChange: function onChange(scaleFactor) {
      return props.onChange(assignOptions({
        scaleFactor: scaleFactor
      }));
    }
  }), react["createElement"](AdjustableInput_AdjustableInput, {
    inputId: "minFaceSize",
    label: "minFaceSize:",
    value: props.detectionParams.minFaceSize,
    minValue: 40,
    maxValue: 400,
    step: 40,
    onChange: function onChange(minFaceSize) {
      return props.onChange(assignOptions({
        minFaceSize: minFaceSize
      }));
    }
  }));
};
var MtcnnControls_MtcnnControls =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(MtcnnControls, _React$Component);

  function MtcnnControls() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      detectionParams: new es6["MtcnnOptions"]()
    };

    _this.renderControls = function () {
      return react["createElement"](MtcnnControls_MtcnnParamControls, {
        detectionParams: _this.state.detectionParams,
        onChange: function onChange(detectionParams) {
          return _this.setState({
            detectionParams: detectionParams
          });
        }
      });
    };

    return _this;
  }

  var _proto = MtcnnControls.prototype;

  _proto.render = function render() {
    return this.props.children(this.state.detectionParams, this.renderControls);
  };

  return MtcnnControls;
}(react["Component"]);
// CONCATENATED MODULE: ./src/facc/SsdMobilenetv1Controls.tsx






var SsdMobilenetv1Controls_SsdMobilenetv1ParamControls = function SsdMobilenetv1ParamControls(props) {
  var assignOptions = function assignOptions(partial) {
    var minConfidence = props.detectionParams.minConfidence;
    return new es6["SsdMobilenetv1Options"](Object.assign({
      minConfidence: minConfidence
    }, partial));
  };

  return react["createElement"](CenterContent["a" /* CenterContent */], null, react["createElement"](AdjustableInput_AdjustableInput, {
    inputId: "minConfidence",
    label: "minConfidence:",
    value: props.detectionParams.minConfidence,
    minValue: 0.1,
    maxValue: 0.9,
    step: 0.1,
    onChange: function onChange(minConfidence) {
      return props.onChange(assignOptions({
        minConfidence: minConfidence
      }));
    }
  }));
};
var SsdMobilenetv1Controls_SsdMobilenetv1Controls =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(SsdMobilenetv1Controls, _React$Component);

  function SsdMobilenetv1Controls() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      detectionParams: new es6["SsdMobilenetv1Options"]()
    };

    _this.renderControls = function () {
      return react["createElement"](SsdMobilenetv1Controls_SsdMobilenetv1ParamControls, {
        detectionParams: _this.state.detectionParams,
        onChange: function onChange(detectionParams) {
          return _this.setState({
            detectionParams: detectionParams
          });
        }
      });
    };

    return _this;
  }

  var _proto = SsdMobilenetv1Controls.prototype;

  _proto.render = function render() {
    return this.props.children(this.state.detectionParams, this.renderControls);
  };

  return SsdMobilenetv1Controls;
}(react["Component"]);
// CONCATENATED MODULE: ./src/facc/TinyFaceDetectorControls.tsx







var TinyFaceDetectorControls_TinyFaceDetectorParamControls = function TinyFaceDetectorParamControls(props) {
  var assignOptions = function assignOptions(partial) {
    var _props$detectionParam = props.detectionParams,
        inputSize = _props$detectionParam.inputSize,
        scoreThreshold = _props$detectionParam.scoreThreshold;
    return new es6["TinyFaceDetectorOptions"](Object.assign({
      inputSize: inputSize,
      scoreThreshold: scoreThreshold
    }, partial));
  };

  return react["createElement"](CenterContent["a" /* CenterContent */], null, react["createElement"](index_es["n" /* InputLabel */], {
    htmlFor: "selectInputSize"
  }, "Input Size"), react["createElement"](index_es["s" /* Select */], {
    value: props.detectionParams.inputSize,
    onChange: function onChange(e) {
      return props.onChange(assignOptions({
        inputSize: e.target.value
      }));
    },
    input: react["createElement"](index_es["m" /* Input */], null),
    id: "selectInputSize"
  }, props.inputSizes.map(function (size) {
    return react["createElement"](index_es["r" /* MenuItem */], {
      key: size,
      value: size
    }, size);
  })), react["createElement"](AdjustableInput_AdjustableInput, {
    inputId: "scoreThreshold",
    label: "scoreThreshold:",
    value: props.detectionParams.scoreThreshold,
    minValue: 0.1,
    maxValue: 0.9,
    step: 0.1,
    onChange: function onChange(scoreThreshold) {
      return props.onChange(assignOptions({
        scoreThreshold: scoreThreshold
      }));
    }
  }));
};
var TinyFaceDetectorControls_TinyFaceDetectorControls =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(TinyFaceDetectorControls, _React$Component);

  function TinyFaceDetectorControls(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.renderControls = function () {
      return react["createElement"](TinyFaceDetectorControls_TinyFaceDetectorParamControls, {
        inputSizes: _this.props.inputSizes,
        detectionParams: _this.state.detectionParams,
        onChange: function onChange(detectionParams) {
          return _this.setState({
            detectionParams: detectionParams
          });
        }
      });
    };

    _this.state = {
      detectionParams: _this.props.initialDetectionParams
    };
    return _this;
  }

  var _proto = TinyFaceDetectorControls.prototype;

  _proto.render = function render() {
    return this.props.children(this.state.detectionParams, this.renderControls);
  };

  return TinyFaceDetectorControls;
}(react["Component"]);
TinyFaceDetectorControls_TinyFaceDetectorControls.defaultProps = {
  initialDetectionParams: new es6["TinyFaceDetectorOptions"]()
};
// CONCATENATED MODULE: ./src/facc/SelectFaceDetector.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectFaceDetector_SelectFaceDetector; });







var SelectFaceDetector_SelectFaceDetector =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(SelectFaceDetector, _React$Component);

  function SelectFaceDetector(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.renderSelection = function () {
      return react["createElement"]("div", {
        style: {
          marginRight: 10
        }
      }, react["createElement"](index_es["n" /* InputLabel */], {
        htmlFor: "selectFaceDetector"
      }, "Choose face detector:"), react["createElement"](index_es["s" /* Select */], {
        value: _this.state.detector,
        onChange: function onChange(e) {
          return _this.setState({
            detector: e.target.value
          });
        },
        input: react["createElement"](index_es["m" /* Input */], null),
        id: "selectFaceDetector"
      }, src_const["f" /* FACE_DETECTORS */].map(function (item) {
        return react["createElement"](index_es["r" /* MenuItem */], {
          key: item,
          value: item
        }, item);
      })));
    };

    _this.state = {
      detector: props.initialFaceDetector
    };
    return _this;
  }

  var _proto = SelectFaceDetector.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var renderChildren = function renderChildren(options, renderControls) {
      return _this2.props.children(_this2.state.detector, options, _this2.renderSelection, renderControls);
    };

    if (Object(src_const["j" /* isSsdMobilenetv1 */])(this.state.detector)) {
      return react["createElement"](SsdMobilenetv1Controls_SsdMobilenetv1Controls, null, renderChildren);
    } else if (Object(src_const["k" /* isTinyFaceDetector */])(this.state.detector)) {
      return react["createElement"](TinyFaceDetectorControls_TinyFaceDetectorControls, {
        inputSizes: [128, 160, 224, 320, 416, 512, 608],
        initialDetectionParams: this.props.initialTinyFaceDetectorOptions
      }, renderChildren);
    } else if (Object(src_const["i" /* isMtcnn */])(this.state.detector)) {
      return react["createElement"](MtcnnControls_MtcnnControls, null, renderChildren);
    }
  };

  return SelectFaceDetector;
}(react["Component"]);

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaceDetection; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(141);
/* harmony import */ var face_api_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(152);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ModalLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(166);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(157);
/* harmony import */ var _facc_SelectFaceDetector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(172);
/* harmony import */ var _styled_CenterContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(153);









var FaceDetection =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(FaceDetection, _React$Component);

  function FaceDetection() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      withBoxes: true
    };
    return _this;
  }

  var _proto = FaceDetection.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_facc_SelectFaceDetector__WEBPACK_IMPORTED_MODULE_7__[/* SelectFaceDetector */ "a"], {
      initialFaceDetector: this.props.initialFaceDetector,
      initialTinyFaceDetectorOptions: this.props.initialTinyFaceDetectorOptions
    }, function (detectorName, detectionOptions, renderFaceDetectorSelection, renderFaceDetectorControls) {
      return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](face_api_js_react__WEBPACK_IMPORTED_MODULE_3__["LoadModels"], Object.assign({}, Object(_const__WEBPACK_IMPORTED_MODULE_6__[/* getFaceDetectionModelUri */ "h"])(detectorName, _const__WEBPACK_IMPORTED_MODULE_6__[/* MODELS_URI */ "g"]), {
        faceLandmarkModelUrl: _const__WEBPACK_IMPORTED_MODULE_6__[/* MODELS_URI */ "g"],
        renderBusyComponent: function renderBusyComponent() {
          return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_components_ModalLoader__WEBPACK_IMPORTED_MODULE_5__[/* ModalLoader */ "a"], {
            title: "Loading " + detectorName + " Model"
          });
        }
      }), function () {
        return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_styled_CenterContent__WEBPACK_IMPORTED_MODULE_8__[/* CenterContent */ "a"], null, renderFaceDetectorSelection(), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_styled_CenterContent__WEBPACK_IMPORTED_MODULE_8__[/* CenterContent */ "a"], {
          flexDirection: "column",
          alignItems: "baseline"
        }, _this2.props.renderCheckboxes ? _this2.props.renderCheckboxes() : null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* FormControlLabel */ "i"], {
          control: react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* Checkbox */ "b"], {
            checked: !_this2.state.withBoxes,
            onChange: function onChange() {
              return _this2.setState({
                withBoxes: !_this2.state.withBoxes
              });
            },
            color: "primary"
          }),
          label: "Hide Bounding Boxes"
        }))), renderFaceDetectorControls(), _this2.props.children ? _this2.props.children(detectionOptions, _this2.state.withBoxes) : null);
      });
    });
  };

  return FaceDetection;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaceAndLandmarkDetection; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(141);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FaceDetection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(183);





var FaceAndLandmarkDetection =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(FaceAndLandmarkDetection, _React$Component);

  function FaceAndLandmarkDetection() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      withLandmarks: false
    };
    return _this;
  }

  var _proto = FaceAndLandmarkDetection.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_FaceDetection__WEBPACK_IMPORTED_MODULE_4__[/* FaceDetection */ "a"], Object.assign({}, this.props, {
      renderCheckboxes: function renderCheckboxes() {
        return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* FormControlLabel */ "i"], {
          control: react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* Checkbox */ "b"], {
            checked: _this2.state.withLandmarks,
            onChange: function onChange() {
              return _this2.setState({
                withLandmarks: !_this2.state.withLandmarks
              });
            },
            color: "primary"
          }),
          label: "Detect Face Landmarks"
        });
      }
    }), function (detectionOptions, withBoxes) {
      return _this2.props.children(detectionOptions, withBoxes, _this2.state.withLandmarks);
    });
  };

  return FaceAndLandmarkDetection;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackFaces; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(159);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(158);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(160);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _face_api_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(152);






var TrackFaces =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default()(TrackFaces, _React$Component);

  function TrackFaces() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.isActive = false;
    _this.run =
    /*#__PURE__*/
    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var withBoxes, results;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_this.isActive) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              if (_this.props.input) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", setTimeout(_this.run, 0));

            case 4:
              withBoxes = _this.props.withBoxes;
              _context.next = 7;
              return _this.props.runTask();

            case 7:
              results = _context.sent;
              Object(_face_api_js_react__WEBPACK_IMPORTED_MODULE_5__["displayResults"])(_this.props.input, _this.props.overlay, results, {
                withBoxes: withBoxes
              });
              setTimeout(_this.run, 0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    return _this;
  }

  var _proto = TrackFaces.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.isActive = true;
    this.run();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.isActive = false;
  };

  _proto.render = function render() {
    return null;
  };

  return TrackFaces;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoWithOverlay; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var face_api_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(152);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




var VideoWithOverlay =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(VideoWithOverlay, _React$Component);

  function VideoWithOverlay(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.isLoaded = false;
    _this.onChange = _this.onChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this)));
    _this.onVideoRef = _this.onVideoRef.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this)));
    _this.onCanvasRef = _this.onCanvasRef.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this)));
    _this.onPlay = _this.onPlay.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this)));
    return _this;
  }

  var _proto = VideoWithOverlay.prototype;

  _proto.onChange = function onChange() {
    var video = this.video,
        overlay = this.overlay,
        isLoaded = this.isLoaded;

    if (video && overlay && isLoaded) {
      var _this$video$getBoundi = this.video.getBoundingClientRect(),
          width = _this$video$getBoundi.width,
          height = _this$video$getBoundi.height;

      this.overlay.width = width, this.overlay.height = height;
      this.props.onLoaded({
        video: new face_api_js_react__WEBPACK_IMPORTED_MODULE_2__["MediaElement"](video),
        overlay: overlay
      });
    }
  };

  _proto.onVideoRef = function onVideoRef(el) {
    this.video = el;
    this.props.onVideoRef && this.props.onVideoRef();
    this.onChange();
  };

  _proto.onCanvasRef = function onCanvasRef(el) {
    this.overlay = el;
    this.onChange();
  };

  _proto.onPlay = function onPlay() {
    this.isLoaded = true;
    this.onChange();
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var srcObject = nextProps.srcObject;

    if (srcObject && this.props.srcObject !== srcObject) {
      this.video.srcObject = srcObject;
    }
  };

  _proto.shouldComponentUpdate = function shouldComponentUpdate() {
    return false;
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.onChange();
  };

  _proto.componentDidMount = function componentDidMount() {
    this.onChange();
  };

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      style: {
        position: 'relative'
      }
    }, react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("video", {
      muted: true,
      autoPlay: true,
      style: {
        width: '100%',
        maxWidth: this.props.maxVideoWidth
      },
      ref: this.onVideoRef,
      onPlay: this.onPlay,
      src: this.props.src
    }), react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("canvas", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0
      },
      ref: this.onCanvasRef
    }));
  };

  return VideoWithOverlay;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackFacesWithLandmarks; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(159);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(158);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(160);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var face_api_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(142);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _TrackFaces__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(207);








var TrackFacesWithLandmarks =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default()(TrackFacesWithLandmarks, _React$Component);

  function TrackFacesWithLandmarks() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = TrackFacesWithLandmarks.prototype;

  _proto.render = function render() {
    var _this = this;

    var runTask =
    /*#__PURE__*/
    function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var task;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                task = face_api_js__WEBPACK_IMPORTED_MODULE_5__["detectAllFaces"](_this.props.input.element, _this.props.detectionOptions);

                if (!_this.props.withLandmarks) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", task.withFaceLandmarks());

              case 3:
                return _context.abrupt("return", task);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function runTask() {
        return _ref.apply(this, arguments);
      };
    }();

    return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_TrackFaces__WEBPACK_IMPORTED_MODULE_7__[/* TrackFaces */ "a"], Object.assign({}, this.props, {
      withBoxes: this.props.withBoxes,
      runTask: runTask
    }));
  };

  return TrackFacesWithLandmarks;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/***/ })

}]);
//# sourceMappingURL=component---src-pages-video-face-tracking-tsx-b2d03515389367d0c0af.js.map