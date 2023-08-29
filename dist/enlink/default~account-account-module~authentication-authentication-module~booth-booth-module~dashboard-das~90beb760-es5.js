(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~account-account-module~authentication-authentication-module~booth-booth-module~dashboard-das~90beb760"], {
    /***/
    "W9fG":
    /*!************************************************************************************!*\
      !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-progress.js ***!
      \************************************************************************************/

    /*! exports provided: NzProgressComponent, NzProgressModule */

    /***/
    function W9fG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzProgressComponent", function () {
        return NzProgressComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzProgressModule", function () {
        return NzProgressModule;
      });
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd/core/outlet */
      "pdGh");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/core/config */
      "2Suw");
      /* harmony import */


      var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/core/util */
      "/KA4");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      function NzProgressComponent_ng_template_0_span_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx_r5.icon);
        }
      }

      function NzProgressComponent_ng_template_0_span_0_ng_template_2_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var formatter_r9 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", formatter_r9(ctx_r8.nzPercent), " ");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          $implicit: a0
        };
      };

      function NzProgressComponent_ng_template_0_span_0_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzProgressComponent_ng_template_0_span_0_ng_template_2_ng_container_0_Template, 2, 1, "ng-container", 9);
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r7.formatter)("nzStringTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, ctx_r7.nzPercent));
        }
      }

      function NzProgressComponent_ng_template_0_span_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzProgressComponent_ng_template_0_span_0_ng_container_1_Template, 2, 1, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzProgressComponent_ng_template_0_span_0_ng_template_2_Template, 1, 4, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r4.status === "exception" || ctx_r4.status === "success") && !ctx_r4.nzFormat)("ngIfElse", _r6);
        }
      }

      function NzProgressComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzProgressComponent_ng_template_0_span_0_Template, 4, 2, "span", 4);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.nzShowInfo);
        }
      }

      function NzProgressComponent_div_3_ng_container_1_div_1_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 17);
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx_r14.nzSuccessPercent, "%")("border-radius", ctx_r14.nzStrokeLinecap === "round" ? "100px" : "0")("height", ctx_r14.strokeWidth, "px");
        }
      }

      function NzProgressComponent_div_3_ng_container_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzProgressComponent_div_3_ng_container_1_div_1_div_3_Template, 1, 6, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx_r12.nzPercent, "%")("border-radius", ctx_r12.nzStrokeLinecap === "round" ? "100px" : "0")("background", !ctx_r12.isGradient ? ctx_r12.nzStrokeColor : null)("background-image", ctx_r12.isGradient ? ctx_r12.lineGradient : null)("height", ctx_r12.strokeWidth, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r12.nzSuccessPercent || ctx_r12.nzSuccessPercent === 0);
        }
      }

      function NzProgressComponent_div_3_ng_container_1_ng_template_2_Template(rf, ctx) {}

      function NzProgressComponent_div_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzProgressComponent_div_3_ng_container_1_div_1_Template, 4, 11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzProgressComponent_div_3_ng_container_1_ng_template_2_Template, 0, 0, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r10.isSteps);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r0);
        }
      }

      function NzProgressComponent_div_3_div_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 20);
        }

        if (rf & 2) {
          var step_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", step_r17);
        }
      }

      function NzProgressComponent_div_3_div_2_ng_template_2_Template(rf, ctx) {}

      function NzProgressComponent_div_3_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzProgressComponent_div_3_div_2_div_1_Template, 1, 1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzProgressComponent_div_3_div_2_ng_template_2_Template, 0, 0, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r11.steps);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r0);
        }
      }

      function NzProgressComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzProgressComponent_div_3_ng_container_1_Template, 3, 2, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzProgressComponent_div_3_div_2_Template, 3, 2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.isSteps);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.isSteps);
        }
      }

      function NzProgressComponent_div_4__svg_defs_2__svg_stop_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "stop");
        }

        if (rf & 2) {
          var i_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("offset", i_r23.offset)("stop-color", i_r23.color);
        }
      }

      function NzProgressComponent_div_4__svg_defs_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "linearGradient", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzProgressComponent_div_4__svg_defs_2__svg_stop_2_Template, 1, 2, "stop", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", "gradient-" + ctx_r19.gradientId);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r19.circleGradient);
        }
      }

      function NzProgressComponent_div_4__svg_path_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "path", 26);
        }

        if (rf & 2) {
          var p_r24 = ctx.$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", p_r24.strokePathStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("d", ctx_r20.pathString)("stroke-linecap", ctx_r20.nzStrokeLinecap)("stroke", p_r24.stroke)("stroke-width", ctx_r20.nzPercent ? ctx_r20.strokeWidth : 0);
        }
      }

      function NzProgressComponent_div_4_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        }
      }

      function NzProgressComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzProgressComponent_div_4__svg_defs_2_Template, 3, 2, "defs", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NzProgressComponent_div_4__svg_path_4_Template, 1, 5, "path", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NzProgressComponent_div_4_ng_template_5_Template, 0, 0, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx_r3.nzWidth, "px")("height", ctx_r3.nzWidth, "px")("font-size", ctx_r3.nzWidth * 0.15 + 6, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-progress-circle-gradient", ctx_r3.isGradient);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.isGradient);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r3.trailPathStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("stroke-width", ctx_r3.strokeWidth)("d", ctx_r3.pathString);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.progressCirclePath)("ngForTrackBy", ctx_r3.trackByFn);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r0);
        }
      }

      function stripPercentToNumber(percent) {
        return +percent.replace('%', '');
      }

      var sortGradient = function sortGradient(gradients) {
        var tempArr = [];
        Object.keys(gradients).forEach(function (key) {
          var value = gradients[key];
          var formatKey = stripPercentToNumber(key);

          if (!isNaN(formatKey)) {
            tempArr.push({
              key: formatKey,
              value: value
            });
          }
        });
        tempArr = tempArr.sort(function (a, b) {
          return a.key - b.key;
        });
        return tempArr;
      };

      var handleCircleGradient = function handleCircleGradient(strokeColor) {
        return sortGradient(strokeColor).map(function (_ref) {
          var key = _ref.key,
              value = _ref.value;
          return {
            offset: "".concat(key, "%"),
            color: value
          };
        });
      };

      var handleLinearGradient = function handleLinearGradient(strokeColor) {
        var _strokeColor$from = strokeColor.from,
            from = _strokeColor$from === void 0 ? '#1890ff' : _strokeColor$from,
            _strokeColor$to = strokeColor.to,
            to = _strokeColor$to === void 0 ? '#1890ff' : _strokeColor$to,
            _strokeColor$directio = strokeColor.direction,
            direction = _strokeColor$directio === void 0 ? 'to right' : _strokeColor$directio,
            rest = Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__rest"])(strokeColor, ["from", "to", "direction"]);

        if (Object.keys(rest).length !== 0) {
          var sortedGradients = sortGradient(rest).map(function (_ref2) {
            var key = _ref2.key,
                value = _ref2.value;
            return "".concat(value, " ").concat(key, "%");
          }).join(', ');
          return "linear-gradient(".concat(direction, ", ").concat(sortedGradients, ")");
        }

        return "linear-gradient(".concat(direction, ", ").concat(from, ", ").concat(to, ")");
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var gradientIdSeed = 0;
      var NZ_CONFIG_MODULE_NAME = 'progress';
      var statusIconNameMap = new Map([['success', 'check'], ['exception', 'close']]);
      var statusColorMap = new Map([['normal', '#108ee9'], ['exception', '#ff5500'], ['success', '#87d068']]);

      var defaultFormatter = function defaultFormatter(p) {
        return "".concat(p, "%");
      };

      var ɵ0 = defaultFormatter;

      var NzProgressComponent = /*#__PURE__*/function () {
        function NzProgressComponent(cdr, nzConfigService, directionality) {
          _classCallCheck(this, NzProgressComponent);

          this.cdr = cdr;
          this.nzConfigService = nzConfigService;
          this.directionality = directionality;
          this._nzModuleName = NZ_CONFIG_MODULE_NAME;
          this.nzShowInfo = true;
          this.nzWidth = 132;
          this.nzStrokeColor = undefined;
          this.nzSize = 'default';
          this.nzPercent = 0;
          this.nzStrokeWidth = undefined;
          this.nzGapDegree = undefined;
          this.nzType = 'line';
          this.nzGapPosition = 'top';
          this.nzStrokeLinecap = 'round';
          this.nzSteps = 0;
          this.steps = [];
          /** Gradient style when `nzType` is `line`. */

          this.lineGradient = null;
          /** If user uses gradient color. */

          this.isGradient = false;
          /** If the linear progress is a step progress. */

          this.isSteps = false;
          /**
           * Each progress whose `nzType` is circle or dashboard should have unique id to
           * define `<linearGradient>`.
           */

          this.gradientId = gradientIdSeed++;
          /** Paths to rendered in the template. */

          this.progressCirclePath = [];
          this.trailPathStyle = null;
          this.dir = 'ltr';

          this.trackByFn = function (index) {
            return "".concat(index);
          };

          this.cachedStatus = 'normal';
          this.inferredStatus = 'normal';
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        }

        _createClass(NzProgressComponent, [{
          key: "formatter",
          get: function get() {
            return this.nzFormat || defaultFormatter;
          }
        }, {
          key: "status",
          get: function get() {
            return this.nzStatus || this.inferredStatus;
          }
        }, {
          key: "strokeWidth",
          get: function get() {
            return this.nzStrokeWidth || (this.nzType === 'line' && this.nzSize !== 'small' ? 8 : 6);
          }
        }, {
          key: "isCircleStyle",
          get: function get() {
            return this.nzType === 'circle' || this.nzType === 'dashboard';
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var nzSteps = changes.nzSteps,
                nzGapPosition = changes.nzGapPosition,
                nzStrokeLinecap = changes.nzStrokeLinecap,
                nzStrokeColor = changes.nzStrokeColor,
                nzGapDegree = changes.nzGapDegree,
                nzType = changes.nzType,
                nzStatus = changes.nzStatus,
                nzPercent = changes.nzPercent,
                nzSuccessPercent = changes.nzSuccessPercent,
                nzStrokeWidth = changes.nzStrokeWidth;

            if (nzStatus) {
              this.cachedStatus = this.nzStatus || this.cachedStatus;
            }

            if (nzPercent || nzSuccessPercent) {
              var fillAll = parseInt(this.nzPercent.toString(), 10) >= 100;

              if (fillAll) {
                if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["isNotNil"])(this.nzSuccessPercent) && this.nzSuccessPercent >= 100 || this.nzSuccessPercent === undefined) {
                  this.inferredStatus = 'success';
                }
              } else {
                this.inferredStatus = this.cachedStatus;
              }
            }

            if (nzStatus || nzPercent || nzSuccessPercent || nzStrokeColor) {
              this.updateIcon();
            }

            if (nzStrokeColor) {
              this.setStrokeColor();
            }

            if (nzGapPosition || nzStrokeLinecap || nzGapDegree || nzType || nzPercent || nzStrokeColor || nzStrokeColor) {
              this.getCirclePaths();
            }

            if (nzPercent || nzSteps || nzStrokeWidth) {
              this.isSteps = this.nzSteps > 0;

              if (this.isSteps) {
                this.getSteps();
              }
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var _a;

            this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$)).subscribe(function () {
              _this.updateIcon();

              _this.setStrokeColor();

              _this.getCirclePaths();
            });
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$)).subscribe(function (direction) {
              _this.dir = direction;

              _this.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }, {
          key: "updateIcon",
          value: function updateIcon() {
            var ret = statusIconNameMap.get(this.status);
            this.icon = ret ? ret + (this.isCircleStyle ? '-o' : '-circle-fill') : '';
          }
          /**
           * Calculate step render configs.
           */

        }, {
          key: "getSteps",
          value: function getSteps() {
            var current = Math.floor(this.nzSteps * (this.nzPercent / 100));
            var stepWidth = this.nzSize === 'small' ? 2 : 14;
            var steps = [];

            for (var i = 0; i < this.nzSteps; i++) {
              var color = void 0;

              if (i <= current - 1) {
                color = this.nzStrokeColor;
              }

              var stepStyle = {
                backgroundColor: "".concat(color),
                width: "".concat(stepWidth, "px"),
                height: "".concat(this.strokeWidth, "px")
              };
              steps.push(stepStyle);
            }

            this.steps = steps;
          }
          /**
           * Calculate paths when the type is circle or dashboard.
           */

        }, {
          key: "getCirclePaths",
          value: function getCirclePaths() {
            var _this2 = this;

            if (!this.isCircleStyle) {
              return;
            }

            var values = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["isNotNil"])(this.nzSuccessPercent) ? [this.nzSuccessPercent, this.nzPercent] : [this.nzPercent]; // Calculate shared styles.

            var radius = 50 - this.strokeWidth / 2;
            var gapPosition = this.nzGapPosition || (this.nzType === 'circle' ? 'top' : 'bottom');
            var len = Math.PI * 2 * radius;
            var gapDegree = this.nzGapDegree || (this.nzType === 'circle' ? 0 : 75);
            var beginPositionX = 0;
            var beginPositionY = -radius;
            var endPositionX = 0;
            var endPositionY = radius * -2;

            switch (gapPosition) {
              case 'left':
                beginPositionX = -radius;
                beginPositionY = 0;
                endPositionX = radius * 2;
                endPositionY = 0;
                break;

              case 'right':
                beginPositionX = radius;
                beginPositionY = 0;
                endPositionX = radius * -2;
                endPositionY = 0;
                break;

              case 'bottom':
                beginPositionY = radius;
                endPositionY = radius * 2;
                break;

              default:
            }

            this.pathString = "M 50,50 m ".concat(beginPositionX, ",").concat(beginPositionY, "\n       a ").concat(radius, ",").concat(radius, " 0 1 1 ").concat(endPositionX, ",").concat(-endPositionY, "\n       a ").concat(radius, ",").concat(radius, " 0 1 1 ").concat(-endPositionX, ",").concat(endPositionY);
            this.trailPathStyle = {
              strokeDasharray: "".concat(len - gapDegree, "px ").concat(len, "px"),
              strokeDashoffset: "-".concat(gapDegree / 2, "px"),
              transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
            }; // Calculate styles for each path.

            this.progressCirclePath = values.map(function (value, index) {
              var isSuccessPercent = values.length === 2 && index === 0;
              return {
                stroke: _this2.isGradient && !isSuccessPercent ? "url(#gradient-".concat(_this2.gradientId, ")") : null,
                strokePathStyle: {
                  stroke: !_this2.isGradient ? isSuccessPercent ? statusColorMap.get('success') : _this2.nzStrokeColor : null,
                  transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s',
                  strokeDasharray: "".concat((value || 0) / 100 * (len - gapDegree), "px ").concat(len, "px"),
                  strokeDashoffset: "-".concat(gapDegree / 2, "px")
                }
              };
            }).reverse();
          }
        }, {
          key: "setStrokeColor",
          value: function setStrokeColor() {
            var color = this.nzStrokeColor;
            var isGradient = this.isGradient = !!color && typeof color !== 'string';

            if (isGradient && !this.isCircleStyle) {
              this.lineGradient = handleLinearGradient(color);
            } else if (isGradient && this.isCircleStyle) {
              this.circleGradient = handleCircleGradient(this.nzStrokeColor);
            } else {
              this.lineGradient = null;
              this.circleGradient = [];
            }
          }
        }]);

        return NzProgressComponent;
      }();

      NzProgressComponent.ɵfac = function NzProgressComponent_Factory(t) {
        return new (t || NzProgressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], 8));
      };

      NzProgressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: NzProgressComponent,
        selectors: [["nz-progress"]],
        inputs: {
          nzShowInfo: "nzShowInfo",
          nzWidth: "nzWidth",
          nzStrokeColor: "nzStrokeColor",
          nzSize: "nzSize",
          nzPercent: "nzPercent",
          nzStrokeWidth: "nzStrokeWidth",
          nzGapDegree: "nzGapDegree",
          nzType: "nzType",
          nzGapPosition: "nzGapPosition",
          nzStrokeLinecap: "nzStrokeLinecap",
          nzSteps: "nzSteps",
          nzFormat: "nzFormat",
          nzSuccessPercent: "nzSuccessPercent",
          nzStatus: "nzStatus"
        },
        exportAs: ["nzProgress"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        decls: 5,
        vars: 15,
        consts: [["progressInfoTemplate", ""], [3, "ngClass"], [4, "ngIf"], ["class", "ant-progress-inner", 3, "width", "height", "fontSize", "ant-progress-circle-gradient", 4, "ngIf"], ["class", "ant-progress-text", 4, "ngIf"], [1, "ant-progress-text"], [4, "ngIf", "ngIfElse"], ["formatTemplate", ""], ["nz-icon", "", 3, "nzType"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["class", "ant-progress-steps-outer", 4, "ngIf"], ["class", "ant-progress-outer", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "ant-progress-outer"], [1, "ant-progress-inner"], [1, "ant-progress-bg"], ["class", "ant-progress-success-bg", 3, "width", "border-radius", "height", 4, "ngIf"], [1, "ant-progress-success-bg"], [1, "ant-progress-steps-outer"], ["class", "ant-progress-steps-item", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "ant-progress-steps-item", 3, "ngStyle"], ["viewBox", "0 0 100 100", 1, "ant-progress-circle"], ["stroke", "#f3f3f3", "fill-opacity", "0", 1, "ant-progress-circle-trail", 3, "ngStyle"], ["class", "ant-progress-circle-path", "fill-opacity", "0", 3, "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["x1", "100%", "y1", "0%", "x2", "0%", "y2", "0%", 3, "id"], [4, "ngFor", "ngForOf"], ["fill-opacity", "0", 1, "ant-progress-circle-path", 3, "ngStyle"]],
        template: function NzProgressComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzProgressComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzProgressComponent_div_3_Template, 3, 2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NzProgressComponent_div_4_Template, 6, 15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-progress-line", ctx.nzType == "line")("ant-progress-small", ctx.nzSize == "small")("ant-progress-show-info", ctx.nzShowInfo)("ant-progress-circle", ctx.isCircleStyle)("ant-progress-steps", ctx.isSteps)("ant-progress-rtl", ctx.dir === "rtl");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "ant-progress ant-progress-status-" + ctx.status);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzType === "line");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isCircleStyle);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__["NzStringTemplateOutletDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
        encapsulation: 2,
        changeDetection: 0
      });

      NzProgressComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__["NzConfigService"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }];
      };

      NzProgressComponent.propDecorators = {
        nzShowInfo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzStrokeColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzFormat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzSuccessPercent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzPercent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzStrokeWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzGapDegree: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzGapPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzStrokeLinecap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzSteps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__metadata"])("design:type", Boolean)], NzProgressComponent.prototype, "nzShowInfo", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__metadata"])("design:type", Object)], NzProgressComponent.prototype, "nzStrokeColor", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__metadata"])("design:type", String)], NzProgressComponent.prototype, "nzSize", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputNumber"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__metadata"])("design:type", Number)], NzProgressComponent.prototype, "nzSuccessPercent", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputNumber"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__metadata"])("design:type", Number)], NzProgressComponent.prototype, "nzPercent", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__["WithConfig"])(), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputNumber"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__metadata"])("design:type", Number)], NzProgressComponent.prototype, "nzStrokeWidth", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__["WithConfig"])(), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputNumber"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__metadata"])("design:type", Number)], NzProgressComponent.prototype, "nzGapDegree", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__metadata"])("design:type", String)], NzProgressComponent.prototype, "nzGapPosition", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__metadata"])("design:type", String)], NzProgressComponent.prototype, "nzStrokeLinecap", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputNumber"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__metadata"])("design:type", Number)], NzProgressComponent.prototype, "nzSteps", void 0);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzProgressComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            selector: 'nz-progress',
            exportAs: 'nzProgress',
            preserveWhitespaces: false,
            template: "\n    <ng-template #progressInfoTemplate>\n      <span class=\"ant-progress-text\" *ngIf=\"nzShowInfo\">\n        <ng-container *ngIf=\"(status === 'exception' || status === 'success') && !nzFormat; else formatTemplate\">\n          <i nz-icon [nzType]=\"icon\"></i>\n        </ng-container>\n        <ng-template #formatTemplate>\n          <ng-container *nzStringTemplateOutlet=\"formatter; context: { $implicit: nzPercent }; let formatter\">\n            {{ formatter(nzPercent) }}\n          </ng-container>\n        </ng-template>\n      </span>\n    </ng-template>\n\n    <div\n      [ngClass]=\"'ant-progress ant-progress-status-' + status\"\n      [class.ant-progress-line]=\"nzType == 'line'\"\n      [class.ant-progress-small]=\"nzSize == 'small'\"\n      [class.ant-progress-show-info]=\"nzShowInfo\"\n      [class.ant-progress-circle]=\"isCircleStyle\"\n      [class.ant-progress-steps]=\"isSteps\"\n      [class.ant-progress-rtl]=\"dir === 'rtl'\"\n    >\n      <!-- line progress -->\n      <div *ngIf=\"nzType === 'line'\">\n        <!-- normal line style -->\n        <ng-container *ngIf=\"!isSteps\">\n          <div class=\"ant-progress-outer\" *ngIf=\"!isSteps\">\n            <div class=\"ant-progress-inner\">\n              <div\n                class=\"ant-progress-bg\"\n                [style.width.%]=\"nzPercent\"\n                [style.border-radius]=\"nzStrokeLinecap === 'round' ? '100px' : '0'\"\n                [style.background]=\"!isGradient ? nzStrokeColor : null\"\n                [style.background-image]=\"isGradient ? lineGradient : null\"\n                [style.height.px]=\"strokeWidth\"\n              ></div>\n              <div\n                *ngIf=\"nzSuccessPercent || nzSuccessPercent === 0\"\n                class=\"ant-progress-success-bg\"\n                [style.width.%]=\"nzSuccessPercent\"\n                [style.border-radius]=\"nzStrokeLinecap === 'round' ? '100px' : '0'\"\n                [style.height.px]=\"strokeWidth\"\n              ></div>\n            </div>\n          </div>\n          <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\n        </ng-container>\n        <!-- step style -->\n        <div class=\"ant-progress-steps-outer\" *ngIf=\"isSteps\">\n          <div *ngFor=\"let step of steps; let i = index\" class=\"ant-progress-steps-item\" [ngStyle]=\"step\"></div>\n          <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\n        </div>\n      </div>\n\n      <!-- circle / dashboard progress -->\n      <div\n        [style.width.px]=\"this.nzWidth\"\n        [style.height.px]=\"this.nzWidth\"\n        [style.fontSize.px]=\"this.nzWidth * 0.15 + 6\"\n        class=\"ant-progress-inner\"\n        [class.ant-progress-circle-gradient]=\"isGradient\"\n        *ngIf=\"isCircleStyle\"\n      >\n        <svg class=\"ant-progress-circle \" viewBox=\"0 0 100 100\">\n          <defs *ngIf=\"isGradient\">\n            <linearGradient [id]=\"'gradient-' + gradientId\" x1=\"100%\" y1=\"0%\" x2=\"0%\" y2=\"0%\">\n              <stop *ngFor=\"let i of circleGradient\" [attr.offset]=\"i.offset\" [attr.stop-color]=\"i.color\"></stop>\n            </linearGradient>\n          </defs>\n          <path\n            class=\"ant-progress-circle-trail\"\n            stroke=\"#f3f3f3\"\n            fill-opacity=\"0\"\n            [attr.stroke-width]=\"strokeWidth\"\n            [attr.d]=\"pathString\"\n            [ngStyle]=\"trailPathStyle\"\n          ></path>\n          <path\n            *ngFor=\"let p of progressCirclePath; trackBy: trackByFn\"\n            class=\"ant-progress-circle-path\"\n            fill-opacity=\"0\"\n            [attr.d]=\"pathString\"\n            [attr.stroke-linecap]=\"nzStrokeLinecap\"\n            [attr.stroke]=\"p.stroke\"\n            [attr.stroke-width]=\"nzPercent ? strokeWidth : 0\"\n            [ngStyle]=\"p.strokePathStyle\"\n          ></path>\n        </svg>\n        <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\n      </div>\n    </div>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__["NzConfigService"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }];
        }, {
          nzShowInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzStrokeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzPercent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzStrokeWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzGapDegree: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzGapPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzStrokeLinecap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzSteps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzSuccessPercent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzProgressModule = /*#__PURE__*/_createClass(function NzProgressModule() {
        _classCallCheck(this, NzProgressModule);
      });

      NzProgressModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: NzProgressModule
      });
      NzProgressModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function NzProgressModule_Factory(t) {
          return new (t || NzProgressModule)();
        },
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__["NzOutletModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzProgressModule, {
          declarations: function declarations() {
            return [NzProgressComponent];
          },
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__["NzOutletModule"]];
          },
          exports: function exports() {
            return [NzProgressComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzProgressModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            exports: [NzProgressComponent],
            declarations: [NzProgressComponent],
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__["NzOutletModule"]]
          }]
        }], null, null);
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ng-zorro-antd-progress.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~account-account-module~authentication-authentication-module~booth-booth-module~dashboard-das~90beb760-es5.js.map