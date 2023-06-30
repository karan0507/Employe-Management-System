(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~task-management-task-management-module~voter-voter-module"], {
    /***/
    "D9mS":
    /*!**********************************************************************************!*\
      !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-upload.js ***!
      \**********************************************************************************/

    /*! exports provided: NzUploadBtnComponent, NzUploadComponent, NzUploadListComponent, NzUploadModule, ɵ0 */

    /***/
    function D9mS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzUploadBtnComponent", function () {
        return NzUploadBtnComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzUploadComponent", function () {
        return NzUploadComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzUploadListComponent", function () {
        return NzUploadListComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzUploadModule", function () {
        return NzUploadModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0;
      });
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd/core/logger */
      "79xS");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/core/util */
      "/KA4");
      /* harmony import */


      var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/i18n */
      "Rm4T");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-zorro-antd/progress */
      "W9fG");
      /* harmony import */


      var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-zorro-antd/tooltip */
      "nJia");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var _c0 = ["file"];
      var _c1 = ["nz-upload-btn", ""];
      var _c2 = ["*"];

      function NzUploadListComponent_div_0_ng_template_2_div_1_ng_template_1_Template(rf, ctx) {}

      var _c3 = function _c3(a0) {
        return {
          $implicit: a0
        };
      };

      function NzUploadListComponent_div_0_ng_template_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_2_div_1_ng_template_1_Template, 0, 0, "ng-template", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-upload-list-item-file", !file_r1.isUploading);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c3, file_r1));
        }
      }

      function NzUploadListComponent_div_0_ng_template_2_a_2_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 22);
        }

        if (rf & 2) {
          var file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", file_r1.thumbUrl || file_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("alt", file_r1.name);
        }
      }

      function NzUploadListComponent_div_0_ng_template_2_a_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzUploadListComponent_div_0_ng_template_2_a_2_Template_a_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29);

            var file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r27.handlePreview(file_r1, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_2_a_2_img_1_Template, 1, 2, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);

          var file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-upload-list-item-file", !file_r1.isImageUrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", file_r1.url || file_r1.thumbUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", file_r1.isImageUrl)("ngIfElse", _r21);
        }
      }

      function NzUploadListComponent_div_0_ng_template_2_div_3_ng_template_1_Template(rf, ctx) {}

      function NzUploadListComponent_div_0_ng_template_2_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_2_div_3_ng_template_1_Template, 0, 0, "ng-template", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c3, file_r1));
        }
      }

      function NzUploadListComponent_div_0_ng_template_2_ng_template_4_ng_template_0_Template(rf, ctx) {}

      function NzUploadListComponent_div_0_ng_template_2_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadListComponent_div_0_ng_template_2_ng_template_4_ng_template_0_Template, 0, 0, "ng-template", 19);
        }

        if (rf & 2) {
          var file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c3, file_r1));
        }
      }

      function NzUploadListComponent_div_0_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_2_div_1_Template, 2, 6, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzUploadListComponent_div_0_ng_template_2_a_2_Template, 2, 5, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzUploadListComponent_div_0_ng_template_2_div_3_Template, 2, 4, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NzUploadListComponent_div_0_ng_template_2_ng_template_4_Template, 1, 4, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", file_r1.iconType);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "uploading");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "thumbnail");
        }
      }

      function NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }
      }

      function NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_2_ng_container_1_Template, 2, 0, "ng-container", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var file_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;

          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", file_r36.isUploading)("ngIfElse", _r40);
        }
      }

      function NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r47.locale.uploading, " ");
        }
      }

      function NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var file_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;

          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", file_r36.isUploading)("ngIfElse", _r40);
        }
      }

      function NzUploadListComponent_div_0_ng_template_4_ng_container_0_i_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 30);
        }

        if (rf & 2) {
          var file_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", file_r36.isUploading ? "loading" : "paper-clip");
        }
      }

      function NzUploadListComponent_div_0_ng_template_4_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_2_Template, 2, 2, "ng-container", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_3_Template, 2, 2, "ng-container", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NzUploadListComponent_div_0_ng_template_4_ng_container_0_i_4_Template, 1, 1, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx_r37.listType);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "picture");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "picture-card");
        }
      }

      function NzUploadListComponent_div_0_ng_template_4_ng_template_1_Template(rf, ctx) {}

      function NzUploadListComponent_div_0_ng_template_4_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 31);
        }

        if (rf & 2) {
          var file_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", file_r36.isImageUrl ? "picture" : "file");
        }
      }

      function NzUploadListComponent_div_0_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadListComponent_div_0_ng_template_4_ng_container_0_Template, 5, 3, "ng-container", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_4_ng_template_1_Template, 0, 0, "ng-template", 19, 25, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzUploadListComponent_div_0_ng_template_4_ng_template_3_Template, 1, 1, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var file_r36 = ctx.$implicit;

          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r5.iconRender)("ngIfElse", _r38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.iconRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c3, file_r36));
        }
      }

      function NzUploadListComponent_div_0_ng_template_6_button_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzUploadListComponent_div_0_ng_template_6_button_0_Template_button_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r54);

            var file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r52.handleRemove(file_r1, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("title", ctx_r51.locale.removeFile);
        }
      }

      function NzUploadListComponent_div_0_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadListComponent_div_0_ng_template_6_button_0_Template, 2, 1, "button", 32);
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.icons.showRemoveIcon);
        }
      }

      function NzUploadListComponent_div_0_ng_template_8_button_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzUploadListComponent_div_0_ng_template_8_button_0_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58);

            var file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r56.handleDownload(file_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("title", ctx_r55.locale.downloadFile);
        }
      }

      function NzUploadListComponent_div_0_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadListComponent_div_0_ng_template_8_button_0_Template, 2, 1, "button", 32);
        }

        if (rf & 2) {
          var file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", file_r1.showDownload);
        }
      }

      function NzUploadListComponent_div_0_ng_template_10_span_0_ng_template_1_Template(rf, ctx) {}

      function NzUploadListComponent_div_0_ng_template_10_span_0_ng_template_2_Template(rf, ctx) {}

      function NzUploadListComponent_div_0_ng_template_10_span_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_10_span_0_ng_template_1_Template, 0, 0, "ng-template", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzUploadListComponent_div_0_ng_template_10_span_0_ng_template_2_Template, 0, 0, "ng-template", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("ant-upload-list-item-card-actions ", ctx_r60.listType === "picture" ? "picture" : "", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r6);
        }
      }

      function NzUploadListComponent_div_0_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadListComponent_div_0_ng_template_10_span_0_Template, 3, 5, "span", 36);
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.listType !== "picture-card");
        }
      }

      function NzUploadListComponent_div_0_ng_template_12_a_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzUploadListComponent_div_0_ng_template_12_a_0_Template_a_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r68);

            var file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;

            var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r66.handlePreview(file_r1, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", file_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("title", file_r1.name)("download", file_r1.linkProps && file_r1.linkProps.download);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", file_r1.name, " ");
        }
      }

      function NzUploadListComponent_div_0_ng_template_12_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzUploadListComponent_div_0_ng_template_12_span_1_Template_span_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r72);

            var file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;

            var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r70.handlePreview(file_r1, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("title", file_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", file_r1.name, " ");
        }
      }

      function NzUploadListComponent_div_0_ng_template_12_ng_template_2_Template(rf, ctx) {}

      function NzUploadListComponent_div_0_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadListComponent_div_0_ng_template_12_a_0_Template, 2, 4, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_12_span_1_Template, 2, 2, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzUploadListComponent_div_0_ng_template_12_ng_template_2_Template, 0, 0, "ng-template", 10);
        }

        if (rf & 2) {
          var file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", file_r1.url);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !file_r1.url);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r10);
        }
      }

      function NzUploadListComponent_div_0_ng_template_16_Template(rf, ctx) {}

      function NzUploadListComponent_div_0_ng_template_17_Template(rf, ctx) {}

      var _c4 = function _c4() {
        return {
          opacity: 0.5,
          "pointer-events": "none"
        };
      };

      function NzUploadListComponent_div_0_span_18_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzUploadListComponent_div_0_span_18_a_1_Template_a_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r80);

            var file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;

            var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r78.handlePreview(file_r1, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", file_r1.url || file_r1.thumbUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("ngStyle", !(file_r1.url || file_r1.thumbUrl) ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c4) : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("title", ctx_r75.locale.previewFile);
        }
      }

      function NzUploadListComponent_div_0_span_18_ng_container_2_ng_template_1_Template(rf, ctx) {}

      function NzUploadListComponent_div_0_span_18_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_span_18_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r8);
        }
      }

      function NzUploadListComponent_div_0_span_18_ng_template_3_Template(rf, ctx) {}

      function NzUploadListComponent_div_0_span_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_span_18_a_1_Template, 2, 4, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzUploadListComponent_div_0_span_18_ng_container_2_Template, 2, 1, "ng-container", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzUploadListComponent_div_0_span_18_ng_template_3_Template, 0, 0, "ng-template", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r16.icons.showPreviewIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", file_r1.status === "done");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r6);
        }
      }

      function NzUploadListComponent_div_0_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "nz-progress", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzPercent", file_r1.percent)("nzShowInfo", false)("nzStrokeWidth", 2);
        }
      }

      function NzUploadListComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzUploadListComponent_div_0_ng_template_2_Template, 6, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NzUploadListComponent_div_0_ng_template_4_Template, 5, 6, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NzUploadListComponent_div_0_ng_template_6_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, NzUploadListComponent_div_0_ng_template_8_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, NzUploadListComponent_div_0_ng_template_10_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, NzUploadListComponent_div_0_ng_template_12_Template, 3, 3, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, NzUploadListComponent_div_0_ng_template_16_Template, 0, 0, "ng-template", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, NzUploadListComponent_div_0_ng_template_17_Template, 0, 0, "ng-template", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, NzUploadListComponent_div_0_span_18_Template, 4, 3, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, NzUploadListComponent_div_0_div_19_Template, 2, 3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var file_r1 = ctx.$implicit;

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);

          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("ant-upload-list-", ctx_r0.listType, "-container");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate2"]("ant-upload-list-item ant-upload-list-item-", file_r1.status, " ant-upload-list-item-list-type-", ctx_r0.listType, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@itemState", undefined)("nzTooltipTitle", file_r1.status === "error" ? file_r1.message : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-key", file_r1.key);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.listType === "picture-card" && !file_r1.isUploading);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", file_r1.isUploading);
        }
      }

      var _c5 = ["uploadComp"];
      var _c6 = ["listComp"];

      var _c7 = function _c7() {
        return [];
      };

      function NzUploadComponent_ng_template_0_nz_upload_list_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-upload-list", 8, 9);
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx_r11.nzShowUploadList ? "" : "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("locale", ctx_r11.locale)("listType", ctx_r11.nzListType)("items", ctx_r11.nzFileList || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](13, _c7))("icons", ctx_r11.nzShowUploadList)("iconRender", ctx_r11.nzIconRender)("previewFile", ctx_r11.nzPreviewFile)("previewIsImage", ctx_r11.nzPreviewIsImage)("onPreview", ctx_r11.nzPreview)("onRemove", ctx_r11.onRemove)("onDownload", ctx_r11.nzDownload)("dir", ctx_r11.dir);
        }
      }

      function NzUploadComponent_ng_template_0_ng_container_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
        }
      }

      function NzUploadComponent_ng_template_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadComponent_ng_template_0_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r12.nzFileListRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c3, ctx_r12.nzFileList));
        }
      }

      function NzUploadComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadComponent_ng_template_0_nz_upload_list_0_Template, 2, 14, "nz-upload-list", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadComponent_ng_template_0_ng_container_1_Template, 2, 4, "ng-container", 7);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.locale && !ctx_r1.nzFileListRender);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.nzFileListRender);
        }
      }

      function NzUploadComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
        }
      }

      function NzUploadComponent_ng_template_4_ng_template_3_Template(rf, ctx) {}

      function NzUploadComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzUploadComponent_ng_template_4_ng_template_3_Template, 0, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx_r5.nzShowButton ? "" : "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r5.classList);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r5._btnOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r2);
        }
      }

      function NzUploadComponent_ng_container_6_ng_template_5_Template(rf, ctx) {}

      function NzUploadComponent_ng_container_6_ng_template_6_Template(rf, ctx) {}

      function NzUploadComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("drop", function NzUploadComponent_ng_container_6_Template_div_drop_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r20.fileDrop($event);
          })("dragover", function NzUploadComponent_ng_container_6_Template_div_dragover_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r22.fileDrop($event);
          })("dragleave", function NzUploadComponent_ng_container_6_Template_div_dragleave_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r23.fileDrop($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 16, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NzUploadComponent_ng_container_6_ng_template_5_Template, 0, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NzUploadComponent_ng_container_6_ng_template_6_Template, 0, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r6.classList);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r6._btnOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r0);
        }
      }

      function NzUploadComponent_ng_template_7_ng_container_0_ng_template_1_Template(rf, ctx) {}

      function NzUploadComponent_ng_template_7_ng_container_0_ng_template_2_Template(rf, ctx) {}

      function NzUploadComponent_ng_template_7_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadComponent_ng_template_7_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzUploadComponent_ng_template_7_ng_container_0_ng_template_2_Template, 0, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r4);
        }
      }

      function NzUploadComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadComponent_ng_template_7_ng_container_0_Template, 3, 2, "ng-container", 3);
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.nzListType === "picture-card")("ngIfElse", _r9);
        }
      }

      function NzUploadComponent_ng_template_9_ng_template_0_Template(rf, ctx) {}

      function NzUploadComponent_ng_template_9_ng_template_1_Template(rf, ctx) {}

      function NzUploadComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadComponent_ng_template_9_ng_template_0_Template, 0, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadComponent_ng_template_9_ng_template_1_Template, 0, 0, "ng-template", 14);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r0);
        }
      }

      var NzUploadBtnComponent = /*#__PURE__*/function () {
        function NzUploadBtnComponent(http, elementRef) {
          _classCallCheck(this, NzUploadBtnComponent);

          this.http = http;
          this.elementRef = elementRef;
          this.reqs = {};
          this.destroy = false; // TODO: move to host after View Engine deprecation

          this.elementRef.nativeElement.classList.add('ant-upload');

          if (!http) {
            throw new Error("Not found 'HttpClient', You can import 'HttpClientModule' in your root module.");
          }
        }

        _createClass(NzUploadBtnComponent, [{
          key: "onClick",
          value: function onClick() {
            if (this.options.disabled || !this.options.openFileDialogOnClick) {
              return;
            }

            this.file.nativeElement.click();
          }
        }, {
          key: "onKeyDown",
          value: function onKeyDown(e) {
            if (this.options.disabled) {
              return;
            }

            if (e.key === 'Enter' || e.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"]) {
              this.onClick();
            }
          } // skip safari bug

        }, {
          key: "onFileDrop",
          value: function onFileDrop(e) {
            var _this = this;

            if (this.options.disabled || e.type === 'dragover') {
              e.preventDefault();
              return;
            }

            if (this.options.directory) {
              this.traverseFileTree(e.dataTransfer.items);
            } else {
              var files = Array.prototype.slice.call(e.dataTransfer.files).filter(function (file) {
                return _this.attrAccept(file, _this.options.accept);
              });

              if (files.length) {
                this.uploadFiles(files);
              }
            }

            e.preventDefault();
          }
        }, {
          key: "onChange",
          value: function onChange(e) {
            if (this.options.disabled) {
              return;
            }

            var hie = e.target;
            this.uploadFiles(hie.files);
            hie.value = '';
          }
        }, {
          key: "traverseFileTree",
          value: function traverseFileTree(files) {
            var _this2 = this;

            var _traverseFileTree = function _traverseFileTree(item, path) {
              if (item.isFile) {
                item.file(function (file) {
                  if (_this2.attrAccept(file, _this2.options.accept)) {
                    _this2.uploadFiles([file]);
                  }
                });
              } else if (item.isDirectory) {
                var dirReader = item.createReader();
                dirReader.readEntries(function (entries) {
                  var _iterator = _createForOfIteratorHelper(entries),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var entrieItem = _step.value;

                      _traverseFileTree(entrieItem, "".concat(path).concat(item.name, "/"));
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }
                });
              }
            };

            var _iterator2 = _createForOfIteratorHelper(files),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var file = _step2.value;

                _traverseFileTree(file.webkitGetAsEntry(), '');
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }, {
          key: "attrAccept",
          value: function attrAccept(file, acceptedFiles) {
            if (file && acceptedFiles) {
              var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
              var fileName = '' + file.name;
              var mimeType = '' + file.type;
              var baseMimeType = mimeType.replace(/\/.*$/, '');
              return acceptedFilesArray.some(function (type) {
                var validType = type.trim();

                if (validType.charAt(0) === '.') {
                  return fileName.toLowerCase().indexOf(validType.toLowerCase(), fileName.toLowerCase().length - validType.toLowerCase().length) !== -1;
                } else if (/\/\*$/.test(validType)) {
                  // This is something like a image/* mime type
                  return baseMimeType === validType.replace(/\/.*$/, '');
                }

                return mimeType === validType;
              });
            }

            return true;
          }
        }, {
          key: "attachUid",
          value: function attachUid(file) {
            if (!file.uid) {
              file.uid = Math.random().toString(36).substring(2);
            }

            return file;
          }
        }, {
          key: "uploadFiles",
          value: function uploadFiles(fileList) {
            var _this3 = this;

            var filters$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Array.prototype.slice.call(fileList));

            if (this.options.filters) {
              this.options.filters.forEach(function (f) {
                filters$ = filters$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (list) {
                  var fnRes = f.fn(list);
                  return fnRes instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"] ? fnRes : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(fnRes);
                }));
              });
            }

            filters$.subscribe(function (list) {
              list.forEach(function (file) {
                _this3.attachUid(file);

                _this3.upload(file, list);
              });
            }, function (e) {
              Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_3__["warn"])("Unhandled upload filter error", e);
            });
          }
        }, {
          key: "upload",
          value: function upload(file, fileList) {
            var _this4 = this;

            if (!this.options.beforeUpload) {
              return this.post(file);
            }

            var before = this.options.beforeUpload(file, fileList);

            if (before instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]) {
              before.subscribe(function (processedFile) {
                var processedFileType = Object.prototype.toString.call(processedFile);

                if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
                  _this4.attachUid(processedFile);

                  _this4.post(processedFile);
                } else if (typeof processedFile === 'boolean' && processedFile !== false) {
                  _this4.post(file);
                }
              }, function (e) {
                Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_3__["warn"])("Unhandled upload beforeUpload error", e);
              });
            } else if (before !== false) {
              return this.post(file);
            }
          }
        }, {
          key: "post",
          value: function post(file) {
            var _this5 = this;

            if (this.destroy) {
              return;
            }

            var process$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(file);
            var opt = this.options;
            var uid = file.uid;
            var action = opt.action,
                data = opt.data,
                headers = opt.headers,
                transformFile = opt.transformFile;
            var args = {
              action: typeof action === 'string' ? action : '',
              name: opt.name,
              headers: headers,
              file: file,
              postFile: file,
              data: data,
              withCredentials: opt.withCredentials,
              onProgress: opt.onProgress ? function (e) {
                opt.onProgress(e, file);
              } : undefined,
              onSuccess: function onSuccess(ret, xhr) {
                _this5.clean(uid);

                opt.onSuccess(ret, file, xhr);
              },
              onError: function onError(xhr) {
                _this5.clean(uid);

                opt.onError(xhr, file);
              }
            };

            if (typeof action === 'function') {
              var actionResult = action(file);

              if (actionResult instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]) {
                process$ = process$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
                  return actionResult;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
                  args.action = res;
                  return file;
                }));
              } else {
                args.action = actionResult;
              }
            }

            if (typeof transformFile === 'function') {
              var transformResult = transformFile(file);
              process$ = process$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
                return transformResult instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"] ? transformResult : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(transformResult);
              }));
            }

            if (typeof data === 'function') {
              var dataResult = data(file);

              if (dataResult instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]) {
                process$ = process$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
                  return dataResult;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
                  args.data = res;
                  return file;
                }));
              } else {
                args.data = dataResult;
              }
            }

            if (typeof headers === 'function') {
              var headersResult = headers(file);

              if (headersResult instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]) {
                process$ = process$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
                  return headersResult;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
                  args.headers = res;
                  return file;
                }));
              } else {
                args.headers = headersResult;
              }
            }

            process$.subscribe(function (newFile) {
              args.postFile = newFile;

              var req$ = (opt.customRequest || _this5.xhr).call(_this5, args);

              if (!(req$ instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"])) {
                Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_3__["warn"])("Must return Subscription type in '[nzCustomRequest]' property");
              }

              _this5.reqs[uid] = req$;
              opt.onStart(file);
            });
          }
        }, {
          key: "xhr",
          value: function xhr(args) {
            var _this6 = this;

            var formData = new FormData();

            if (args.data) {
              Object.keys(args.data).map(function (key) {
                formData.append(key, args.data[key]);
              });
            }

            formData.append(args.name, args.postFile);

            if (!args.headers) {
              args.headers = {};
            }

            if (args.headers['X-Requested-With'] !== null) {
              args.headers['X-Requested-With'] = "XMLHttpRequest";
            } else {
              delete args.headers['X-Requested-With'];
            }

            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', args.action, formData, {
              reportProgress: true,
              withCredentials: args.withCredentials,
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](args.headers)
            });
            return this.http.request(req).subscribe(function (event) {
              if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                if (event.total > 0) {
                  event.percent = event.loaded / event.total * 100;
                }

                args.onProgress(event, args.file);
              } else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                args.onSuccess(event.body, args.file, event);
              }
            }, function (err) {
              _this6.abort(args.file);

              args.onError(err, args.file);
            });
          }
        }, {
          key: "clean",
          value: function clean(uid) {
            var req$ = this.reqs[uid];

            if (req$ instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]) {
              req$.unsubscribe();
            }

            delete this.reqs[uid];
          }
        }, {
          key: "abort",
          value: function abort(file) {
            var _this7 = this;

            if (file) {
              this.clean(file && file.uid);
            } else {
              Object.keys(this.reqs).forEach(function (uid) {
                return _this7.clean(uid);
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy = true;
            this.abort();
          }
        }]);

        return NzUploadBtnComponent;
      }();

      NzUploadBtnComponent.ɵfac = function NzUploadBtnComponent_Factory(t) {
        return new (t || NzUploadBtnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]));
      };

      NzUploadBtnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: NzUploadBtnComponent,
        selectors: [["", "nz-upload-btn", ""]],
        viewQuery: function NzUploadBtnComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.file = _t.first);
          }
        },
        hostVars: 4,
        hostBindings: function NzUploadBtnComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzUploadBtnComponent_click_HostBindingHandler() {
              return ctx.onClick();
            })("keydown", function NzUploadBtnComponent_keydown_HostBindingHandler($event) {
              return ctx.onKeyDown($event);
            })("drop", function NzUploadBtnComponent_drop_HostBindingHandler($event) {
              return ctx.onFileDrop($event);
            })("dragover", function NzUploadBtnComponent_dragover_HostBindingHandler($event) {
              return ctx.onFileDrop($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("tabindex", "0")("role", "button");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-upload-disabled", ctx.options.disabled);
          }
        },
        inputs: {
          options: "options"
        },
        exportAs: ["nzUploadBtn"],
        attrs: _c1,
        ngContentSelectors: _c2,
        decls: 3,
        vars: 4,
        consts: [["type", "file", 2, "display", "none", 3, "multiple", "change"], ["file", ""]],
        template: function NzUploadBtnComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function NzUploadBtnComponent_Template_input_change_0_listener($event) {
              return ctx.onChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("multiple", ctx.options.multiple);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("accept", ctx.options.accept)("directory", ctx.options.directory ? "directory" : null)("webkitdirectory", ctx.options.directory ? "webkitdirectory" : null);
          }
        },
        encapsulation: 2
      });

      NzUploadBtnComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }];
      };

      NzUploadBtnComponent.propDecorators = {
        file: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['file', {
            "static": false
          }]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var isImageFileType = function isImageFileType(type) {
        return !!type && type.indexOf('image/') === 0;
      };

      var ɵ0 = isImageFileType;
      var MEASURE_SIZE = 200;

      var NzUploadListComponent = /*#__PURE__*/function () {
        // #endregion
        function NzUploadListComponent(cdr, doc, ngZone, platform, elementRef) {
          _classCallCheck(this, NzUploadListComponent);

          this.cdr = cdr;
          this.doc = doc;
          this.ngZone = ngZone;
          this.platform = platform;
          this.elementRef = elementRef;
          this.list = [];
          this.locale = {};
          this.iconRender = null;
          this.dir = 'ltr'; // TODO: move to host after View Engine deprecation

          this.elementRef.nativeElement.classList.add('ant-upload-list');
        }

        _createClass(NzUploadListComponent, [{
          key: "showPic",
          get: function get() {
            return this.listType === 'picture' || this.listType === 'picture-card';
          }
        }, {
          key: "items",
          set: function set(list) {
            this.list = list;
          }
        }, {
          key: "genErr",
          value: function genErr(file) {
            if (file.response && typeof file.response === 'string') {
              return file.response;
            }

            return file.error && file.error.statusText || this.locale.uploadError;
          }
        }, {
          key: "extname",
          value: function extname(url) {
            var temp = url.split('/');
            var filename = temp[temp.length - 1];
            var filenameWithoutSuffix = filename.split(/#|\?/)[0];
            return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
          }
        }, {
          key: "isImageUrl",
          value: function isImageUrl(file) {
            if (isImageFileType(file.type)) {
              return true;
            }

            var url = file.thumbUrl || file.url || '';

            if (!url) {
              return false;
            }

            var extension = this.extname(url);

            if (/^data:image\//.test(url) || /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg)$/i.test(extension)) {
              return true;
            } else if (/^data:/.test(url)) {
              // other file types of base64
              return false;
            } else if (extension) {
              // other file types which have extension
              return false;
            }

            return true;
          }
        }, {
          key: "getIconType",
          value: function getIconType(file) {
            if (!this.showPic) {
              return '';
            }

            if (file.isUploading || !file.thumbUrl && !file.url) {
              return 'uploading';
            } else {
              return 'thumbnail';
            }
          }
        }, {
          key: "previewImage",
          value: function previewImage(file) {
            var _this8 = this;

            return new Promise(function (resolve) {
              if (!isImageFileType(file.type) || !_this8.platform.isBrowser) {
                resolve('');
                return;
              }

              _this8.ngZone.runOutsideAngular(function () {
                var canvas = _this8.doc.createElement('canvas');

                canvas.width = MEASURE_SIZE;
                canvas.height = MEASURE_SIZE;
                canvas.style.cssText = "position: fixed; left: 0; top: 0; width: ".concat(MEASURE_SIZE, "px; height: ").concat(MEASURE_SIZE, "px; z-index: 9999; display: none;");

                _this8.doc.body.appendChild(canvas);

                var ctx = canvas.getContext('2d');
                var img = new Image();

                img.onload = function () {
                  var width = img.width,
                      height = img.height;
                  var drawWidth = MEASURE_SIZE;
                  var drawHeight = MEASURE_SIZE;
                  var offsetX = 0;
                  var offsetY = 0;

                  if (width < height) {
                    drawHeight = height * (MEASURE_SIZE / width);
                    offsetY = -(drawHeight - drawWidth) / 2;
                  } else {
                    drawWidth = width * (MEASURE_SIZE / height);
                    offsetX = -(drawWidth - drawHeight) / 2;
                  }

                  try {
                    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
                  } catch (_a) {}

                  var dataURL = canvas.toDataURL();

                  _this8.doc.body.removeChild(canvas);

                  resolve(dataURL);
                };

                img.src = window.URL.createObjectURL(file);
              });
            });
          }
        }, {
          key: "genThumb",
          value: function genThumb() {
            var _this9 = this;

            if (!this.platform.isBrowser) {
              return;
            }

            var win = window;

            if (!this.showPic || typeof document === 'undefined' || typeof win === 'undefined' || !win.FileReader || !win.File) {
              return;
            }

            this.list.filter(function (file) {
              return file.originFileObj instanceof File && file.thumbUrl === undefined;
            }).forEach(function (file) {
              file.thumbUrl = '';
              (_this9.previewFile ? _this9.previewFile(file).toPromise() : _this9.previewImage(file.originFileObj)).then(function (dataUrl) {
                file.thumbUrl = dataUrl;

                _this9.detectChanges();
              });
            });
          }
        }, {
          key: "showDownload",
          value: function showDownload(file) {
            return !!(this.icons.showDownloadIcon && file.status === 'done');
          }
        }, {
          key: "fixData",
          value: function fixData() {
            var _this10 = this;

            this.list.forEach(function (file) {
              file.isUploading = file.status === 'uploading';
              file.message = _this10.genErr(file);
              file.linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
              file.isImageUrl = _this10.previewIsImage ? _this10.previewIsImage(file) : _this10.isImageUrl(file);
              file.iconType = _this10.getIconType(file);
              file.showDownload = _this10.showDownload(file);
            });
          }
        }, {
          key: "handlePreview",
          value: function handlePreview(file, e) {
            if (!this.onPreview) {
              return;
            }

            e.preventDefault();
            return this.onPreview(file);
          }
        }, {
          key: "handleRemove",
          value: function handleRemove(file, e) {
            e.preventDefault();

            if (this.onRemove) {
              this.onRemove(file);
            }

            return;
          }
        }, {
          key: "handleDownload",
          value: function handleDownload(file) {
            if (typeof this.onDownload === 'function') {
              this.onDownload(file);
            } else if (file.url) {
              window.open(file.url);
            }
          }
        }, {
          key: "detectChanges",
          value: function detectChanges() {
            this.fixData();
            this.cdr.detectChanges();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.fixData();
            this.genThumb();
          }
        }]);

        return NzUploadListComponent;
      }();

      NzUploadListComponent.ɵfac = function NzUploadListComponent_Factory(t) {
        return new (t || NzUploadListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]));
      };

      NzUploadListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: NzUploadListComponent,
        selectors: [["nz-upload-list"]],
        hostVars: 8,
        hostBindings: function NzUploadListComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-upload-list-rtl", ctx.dir === "rtl")("ant-upload-list-text", ctx.listType === "text")("ant-upload-list-picture", ctx.listType === "picture")("ant-upload-list-picture-card", ctx.listType === "picture-card");
          }
        },
        inputs: {
          locale: "locale",
          iconRender: "iconRender",
          dir: "dir",
          items: "items",
          listType: "listType",
          icons: "icons",
          onPreview: "onPreview",
          onRemove: "onRemove",
          onDownload: "onDownload",
          previewFile: "previewFile",
          previewIsImage: "previewIsImage"
        },
        exportAs: ["nzUploadList"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        decls: 1,
        vars: 1,
        consts: [[3, "class", 4, "ngFor", "ngForOf"], ["nz-tooltip", "", 3, "nzTooltipTitle"], ["icon", ""], ["iconNode", ""], ["removeIcon", ""], ["downloadIcon", ""], ["downloadOrDelete", ""], ["preview", ""], [1, "ant-upload-list-item-info"], [1, "ant-upload-span"], [3, "ngTemplateOutlet"], ["class", "ant-upload-list-item-actions", 4, "ngIf"], ["class", "ant-upload-list-item-progress", 4, "ngIf"], [3, "ngSwitch"], ["class", "ant-upload-list-item-thumbnail", 3, "ant-upload-list-item-file", 4, "ngSwitchCase"], ["class", "ant-upload-list-item-thumbnail", "target", "_blank", "rel", "noopener noreferrer", 3, "ant-upload-list-item-file", "href", "click", 4, "ngSwitchCase"], ["class", "ant-upload-text-icon", 4, "ngSwitchDefault"], ["noImageThumbTpl", ""], [1, "ant-upload-list-item-thumbnail"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["target", "_blank", "rel", "noopener noreferrer", 1, "ant-upload-list-item-thumbnail", 3, "href", "click"], ["class", "ant-upload-list-item-image", 3, "src", 4, "ngIf", "ngIfElse"], [1, "ant-upload-list-item-image", 3, "src"], [1, "ant-upload-text-icon"], [4, "ngIf", "ngIfElse"], ["customIconRender", ""], ["iconNodeFileIcon", ""], [4, "ngSwitchCase"], ["nz-icon", "", 3, "nzType", 4, "ngSwitchDefault"], ["nz-icon", "", "nzType", "loading"], ["nz-icon", "", 3, "nzType"], ["nz-icon", "", "nzTheme", "twotone", 3, "nzType"], ["type", "button", "nz-button", "", "nzType", "text", "nzSize", "small", "class", "ant-upload-list-item-card-actions-btn", 3, "click", 4, "ngIf"], ["type", "button", "nz-button", "", "nzType", "text", "nzSize", "small", 1, "ant-upload-list-item-card-actions-btn", 3, "click"], ["nz-icon", "", "nzType", "delete"], ["nz-icon", "", "nzType", "download"], [3, "class", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", "class", "ant-upload-list-item-name", 3, "href", "click", 4, "ngIf"], ["class", "ant-upload-list-item-name", 3, "click", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 1, "ant-upload-list-item-name", 3, "href", "click"], [1, "ant-upload-list-item-name", 3, "click"], [1, "ant-upload-list-item-actions"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href", "ngStyle", "click", 4, "ngIf"], [4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href", "ngStyle", "click"], ["nz-icon", "", "nzType", "eye"], [1, "ant-upload-list-item-progress"], ["nzType", "line", 3, "nzPercent", "nzShowInfo", "nzStrokeWidth"]],
        template: function NzUploadListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadListComponent_div_0_Template, 20, 14, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.list);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_17__["NzTooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchDefault"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_18__["ɵNzTransitionPatchDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__["NzButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_16__["NzProgressComponent"]],
        encapsulation: 2,
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('itemState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
            height: '0',
            width: '0',
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(150, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
            height: '*',
            width: '*',
            opacity: 1
          }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(150, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
            height: '0',
            width: '0',
            opacity: 0
          }))])])]
        },
        changeDetection: 0
      });

      NzUploadListComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }];
      };

      NzUploadListComponent.propDecorators = {
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        listType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        icons: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        onPreview: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        onRemove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        onDownload: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        previewFile: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        previewIsImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        iconRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        dir: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };

      var NzUploadComponent = /*#__PURE__*/function () {
        // #endregion
        function NzUploadComponent(cdr, i18n, directionality) {
          var _this11 = this;

          _classCallCheck(this, NzUploadComponent);

          this.cdr = cdr;
          this.i18n = i18n;
          this.directionality = directionality;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.dir = 'ltr'; // #region fields

          this.nzType = 'select';
          this.nzLimit = 0;
          this.nzSize = 0;
          this.nzDirectory = false;
          this.nzOpenFileDialogOnClick = true;
          this.nzFilter = [];
          this.nzFileList = [];
          this.nzDisabled = false;
          this.nzListType = 'text';
          this.nzMultiple = false;
          this.nzName = 'file';
          this._showUploadList = true;
          this.nzShowButton = true;
          this.nzWithCredentials = false;
          this.nzIconRender = null;
          this.nzFileListRender = null;
          this.nzChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.nzFileListChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();

          this.onStart = function (file) {
            if (!_this11.nzFileList) {
              _this11.nzFileList = [];
            }

            var targetItem = _this11.fileToObject(file);

            targetItem.status = 'uploading';
            _this11.nzFileList = _this11.nzFileList.concat(targetItem);

            _this11.nzFileListChange.emit(_this11.nzFileList);

            _this11.nzChange.emit({
              file: targetItem,
              fileList: _this11.nzFileList,
              type: 'start'
            });

            _this11.detectChangesList();
          };

          this.onProgress = function (e, file) {
            var fileList = _this11.nzFileList;

            var targetItem = _this11.getFileItem(file, fileList);

            targetItem.percent = e.percent;

            _this11.nzChange.emit({
              event: e,
              file: Object.assign({}, targetItem),
              fileList: _this11.nzFileList,
              type: 'progress'
            });

            _this11.detectChangesList();
          };

          this.onSuccess = function (res, file) {
            var fileList = _this11.nzFileList;

            var targetItem = _this11.getFileItem(file, fileList);

            targetItem.status = 'done';
            targetItem.response = res;

            _this11.nzChange.emit({
              file: Object.assign({}, targetItem),
              fileList: fileList,
              type: 'success'
            });

            _this11.detectChangesList();
          };

          this.onError = function (err, file) {
            var fileList = _this11.nzFileList;

            var targetItem = _this11.getFileItem(file, fileList);

            targetItem.error = err;
            targetItem.status = 'error';

            _this11.nzChange.emit({
              file: Object.assign({}, targetItem),
              fileList: fileList,
              type: 'error'
            });

            _this11.detectChangesList();
          };

          this.onRemove = function (file) {
            _this11.uploadComp.abort(file);

            file.status = 'removed';
            var fnRes = typeof _this11.nzRemove === 'function' ? _this11.nzRemove(file) : _this11.nzRemove == null ? true : _this11.nzRemove;
            (fnRes instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"] ? fnRes : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(fnRes)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (res) {
              return res;
            })).subscribe(function () {
              _this11.nzFileList = _this11.removeFileItem(file, _this11.nzFileList);

              _this11.nzChange.emit({
                file: file,
                fileList: _this11.nzFileList,
                type: 'removed'
              });

              _this11.nzFileListChange.emit(_this11.nzFileList);

              _this11.cdr.detectChanges();
            });
          }; // #endregion
          // #region styles


          this.prefixCls = 'ant-upload';
          this.classList = [];
        }

        _createClass(NzUploadComponent, [{
          key: "nzShowUploadList",
          get: function get() {
            return this._showUploadList;
          },
          set: function set(value) {
            this._showUploadList = typeof value === 'boolean' ? Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["toBoolean"])(value) : value;
          }
        }, {
          key: "zipOptions",
          value: function zipOptions() {
            var _this12 = this;

            if (typeof this.nzShowUploadList === 'boolean' && this.nzShowUploadList) {
              this.nzShowUploadList = {
                showPreviewIcon: true,
                showRemoveIcon: true,
                showDownloadIcon: true
              };
            } // filters


            var filters = this.nzFilter.slice();

            if (this.nzMultiple && this.nzLimit > 0 && filters.findIndex(function (w) {
              return w.name === 'limit';
            }) === -1) {
              filters.push({
                name: 'limit',
                fn: function fn(fileList) {
                  return fileList.slice(-_this12.nzLimit);
                }
              });
            }

            if (this.nzSize > 0 && filters.findIndex(function (w) {
              return w.name === 'size';
            }) === -1) {
              filters.push({
                name: 'size',
                fn: function fn(fileList) {
                  return fileList.filter(function (w) {
                    return w.size / 1024 <= _this12.nzSize;
                  });
                }
              });
            }

            if (this.nzFileType && this.nzFileType.length > 0 && filters.findIndex(function (w) {
              return w.name === 'type';
            }) === -1) {
              var types = this.nzFileType.split(',');
              filters.push({
                name: 'type',
                fn: function fn(fileList) {
                  return fileList.filter(function (w) {
                    return ~types.indexOf(w.type);
                  });
                }
              });
            }

            this._btnOptions = {
              disabled: this.nzDisabled,
              accept: this.nzAccept,
              action: this.nzAction,
              directory: this.nzDirectory,
              openFileDialogOnClick: this.nzOpenFileDialogOnClick,
              beforeUpload: this.nzBeforeUpload,
              customRequest: this.nzCustomRequest,
              data: this.nzData,
              headers: this.nzHeaders,
              name: this.nzName,
              multiple: this.nzMultiple,
              withCredentials: this.nzWithCredentials,
              filters: filters,
              transformFile: this.nzTransformFile,
              onStart: this.onStart,
              onProgress: this.onProgress,
              onSuccess: this.onSuccess,
              onError: this.onError
            };
            return this;
          } // #region upload

        }, {
          key: "fileToObject",
          value: function fileToObject(file) {
            return {
              lastModified: file.lastModified,
              lastModifiedDate: file.lastModifiedDate,
              name: file.filename || file.name,
              size: file.size,
              type: file.type,
              uid: file.uid,
              response: file.response,
              error: file.error,
              percent: 0,
              originFileObj: file
            };
          }
        }, {
          key: "getFileItem",
          value: function getFileItem(file, fileList) {
            return fileList.filter(function (item) {
              return item.uid === file.uid;
            })[0];
          }
        }, {
          key: "removeFileItem",
          value: function removeFileItem(file, fileList) {
            return fileList.filter(function (item) {
              return item.uid !== file.uid;
            });
          } // skip safari bug

        }, {
          key: "fileDrop",
          value: function fileDrop(e) {
            if (e.type === this.dragState) {
              return;
            }

            this.dragState = e.type;
            this.setClassMap();
          } // #endregion
          // #region list

        }, {
          key: "detectChangesList",
          value: function detectChangesList() {
            var _a;

            this.cdr.detectChanges();
            (_a = this.listComp) === null || _a === void 0 ? void 0 : _a.detectChanges();
          }
        }, {
          key: "setClassMap",
          value: function setClassMap() {
            var subCls = [];

            if (this.nzType === 'drag') {
              if (this.nzFileList.some(function (file) {
                return file.status === 'uploading';
              })) {
                subCls.push("".concat(this.prefixCls, "-drag-uploading"));
              }

              if (this.dragState === 'dragover') {
                subCls.push("".concat(this.prefixCls, "-drag-hover"));
              }
            } else {
              subCls = ["".concat(this.prefixCls, "-select-").concat(this.nzListType)];
            }

            this.classList = [this.prefixCls, "".concat(this.prefixCls, "-").concat(this.nzType)].concat(_toConsumableArray(subCls), [this.nzDisabled && "".concat(this.prefixCls, "-disabled") || '', this.dir === 'rtl' && "".concat(this.prefixCls, "-rtl") || '']).filter(function (item) {
              return !!item;
            });
            this.cdr.detectChanges();
          } // #endregion

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            var _a;

            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (direction) {
              _this13.dir = direction;

              _this13.setClassMap();

              _this13.cdr.detectChanges();
            });
            this.i18n.localeChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function () {
              _this13.locale = _this13.i18n.getLocaleData('Upload');

              _this13.detectChangesList();
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.zipOptions().setClassMap();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }]);

        return NzUploadComponent;
      }();

      NzUploadComponent.ɵfac = function NzUploadComponent_Factory(t) {
        return new (t || NzUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8));
      };

      NzUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: NzUploadComponent,
        selectors: [["nz-upload"]],
        viewQuery: function NzUploadComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c5, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c6, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.uploadComp = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.listComp = _t.first);
          }
        },
        hostVars: 2,
        hostBindings: function NzUploadComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-upload-picture-card-wrapper", ctx.nzListType === "picture-card");
          }
        },
        inputs: {
          nzType: "nzType",
          nzLimit: "nzLimit",
          nzSize: "nzSize",
          nzDirectory: "nzDirectory",
          nzOpenFileDialogOnClick: "nzOpenFileDialogOnClick",
          nzFilter: "nzFilter",
          nzFileList: "nzFileList",
          nzDisabled: "nzDisabled",
          nzListType: "nzListType",
          nzMultiple: "nzMultiple",
          nzName: "nzName",
          nzShowButton: "nzShowButton",
          nzWithCredentials: "nzWithCredentials",
          nzIconRender: "nzIconRender",
          nzFileListRender: "nzFileListRender",
          nzShowUploadList: "nzShowUploadList",
          nzFileType: "nzFileType",
          nzAccept: "nzAccept",
          nzAction: "nzAction",
          nzBeforeUpload: "nzBeforeUpload",
          nzCustomRequest: "nzCustomRequest",
          nzData: "nzData",
          nzHeaders: "nzHeaders",
          nzRemove: "nzRemove",
          nzPreview: "nzPreview",
          nzPreviewFile: "nzPreviewFile",
          nzPreviewIsImage: "nzPreviewIsImage",
          nzTransformFile: "nzTransformFile",
          nzDownload: "nzDownload"
        },
        outputs: {
          nzChange: "nzChange",
          nzFileListChange: "nzFileListChange"
        },
        exportAs: ["nzUpload"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c2,
        decls: 11,
        vars: 2,
        consts: [["list", ""], ["con", ""], ["btn", ""], [4, "ngIf", "ngIfElse"], ["select", ""], ["pic", ""], [3, "display", "locale", "listType", "items", "icons", "iconRender", "previewFile", "previewIsImage", "onPreview", "onRemove", "onDownload", "dir", 4, "ngIf"], [4, "ngIf"], [3, "locale", "listType", "items", "icons", "iconRender", "previewFile", "previewIsImage", "onPreview", "onRemove", "onDownload", "dir"], ["listComp", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], ["nz-upload-btn", "", 3, "options"], ["uploadComp", ""], [3, "ngTemplateOutlet"], [3, "ngClass", "drop", "dragover", "dragleave"], ["nz-upload-btn", "", 1, "ant-upload-btn", 3, "options"], [1, "ant-upload-drag-container"]],
        template: function NzUploadComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzUploadComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NzUploadComponent_ng_template_4_Template, 4, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NzUploadComponent_ng_container_6_Template, 7, 4, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, NzUploadComponent_ng_template_7_Template, 1, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, NzUploadComponent_ng_template_9_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzType === "drag")("ngIfElse", _r7);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], NzUploadListComponent, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Dir"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], NzUploadBtnComponent],
        encapsulation: 2,
        changeDetection: 0
      });

      NzUploadComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nService"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }];
      };

      NzUploadComponent.propDecorators = {
        uploadComp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['uploadComp', {
            "static": false
          }]
        }],
        listComp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['listComp', {
            "static": false
          }]
        }],
        nzType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzLimit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzFileType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzAccept: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzAction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzDirectory: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzOpenFileDialogOnClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzBeforeUpload: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzCustomRequest: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzFileList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzHeaders: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzListType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzMultiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzShowUploadList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzShowButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzWithCredentials: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzRemove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzPreview: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzPreviewFile: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzPreviewIsImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzTransformFile: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzDownload: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzIconRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzFileListRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzFileListChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }]
      };
      Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["InputNumber"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], NzUploadComponent.prototype, "nzLimit", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["InputNumber"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], NzUploadComponent.prototype, "nzSize", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], NzUploadComponent.prototype, "nzDirectory", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], NzUploadComponent.prototype, "nzOpenFileDialogOnClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], NzUploadComponent.prototype, "nzDisabled", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], NzUploadComponent.prototype, "nzMultiple", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], NzUploadComponent.prototype, "nzShowButton", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], NzUploadComponent.prototype, "nzWithCredentials", void 0);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzUploadBtnComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: '[nz-upload-btn]',
            exportAs: 'nzUploadBtn',
            template: "<input\n  type=\"file\"\n  #file\n  (change)=\"onChange($event)\"\n  [attr.accept]=\"options.accept\"\n  [attr.directory]=\"options.directory ? 'directory' : null\"\n  [attr.webkitdirectory]=\"options.directory ? 'webkitdirectory' : null\"\n  [multiple]=\"options.multiple\"\n  style=\"display: none;\"\n/>\n<ng-content></ng-content>\n",
            host: {
              '[attr.tabindex]': '"0"',
              '[attr.role]': '"button"',
              '[class.ant-upload-disabled]': 'options.disabled',
              '(click)': 'onClick()',
              '(keydown)': 'onKeyDown($event)',
              '(drop)': 'onFileDrop($event)',
              '(dragover)': 'onFileDrop($event)'
            },
            preserveWhitespaces: false,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }];
        }, {
          file: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['file', {
              "static": false
            }]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzUploadListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'nz-upload-list',
            exportAs: 'nzUploadList',
            template: "<div *ngFor=\"let file of list\" class=\"ant-upload-list-{{ listType }}-container\">\n  <div\n    class=\"ant-upload-list-item ant-upload-list-item-{{\n      file.status\n    }} ant-upload-list-item-list-type-{{ listType }}\"\n    [attr.data-key]=\"file.key\"\n    @itemState\n    nz-tooltip\n    [nzTooltipTitle]=\"file.status === 'error' ? file.message : null\"\n  >\n    <ng-template #icon>\n      <ng-container [ngSwitch]=\"file.iconType\">\n        <div\n          *ngSwitchCase=\"'uploading'\"\n          class=\"ant-upload-list-item-thumbnail\"\n          [class.ant-upload-list-item-file]=\"!file.isUploading\"\n        >\n          <ng-template\n            [ngTemplateOutlet]=\"iconNode\"\n            [ngTemplateOutletContext]=\"{ $implicit: file }\"\n          ></ng-template>\n        </div>\n        <a\n          *ngSwitchCase=\"'thumbnail'\"\n          class=\"ant-upload-list-item-thumbnail\"\n          [class.ant-upload-list-item-file]=\"!file.isImageUrl\"\n          target=\"_blank\"\n          rel=\"noopener noreferrer\"\n          [href]=\"file.url || file.thumbUrl\"\n          (click)=\"handlePreview(file, $event)\"\n        >\n          <img\n            *ngIf=\"file.isImageUrl; else noImageThumbTpl\"\n            class=\"ant-upload-list-item-image\"\n            [src]=\"file.thumbUrl || file.url\"\n            [attr.alt]=\"file.name\"\n          />\n        </a>\n        <div *ngSwitchDefault class=\"ant-upload-text-icon\">\n          <ng-template\n            [ngTemplateOutlet]=\"iconNode\"\n            [ngTemplateOutletContext]=\"{ $implicit: file }\"\n          ></ng-template>\n        </div>\n      </ng-container>\n      <ng-template #noImageThumbTpl>\n        <ng-template\n          [ngTemplateOutlet]=\"iconNode\"\n          [ngTemplateOutletContext]=\"{ $implicit: file }\"\n        ></ng-template>\n      </ng-template>\n    </ng-template>\n    <ng-template #iconNode let-file>\n      <ng-container *ngIf=\"!iconRender; else customIconRender\">\n        <ng-container [ngSwitch]=\"listType\">\n          <ng-container *ngSwitchCase=\"'picture'\">\n            <ng-container *ngIf=\"file.isUploading; else iconNodeFileIcon\">\n              <i nz-icon nzType=\"loading\"></i>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'picture-card'\">\n            <ng-container *ngIf=\"file.isUploading; else iconNodeFileIcon\">\n              {{ locale.uploading }}\n            </ng-container>\n          </ng-container>\n          <i *ngSwitchDefault nz-icon [nzType]=\"file.isUploading ? 'loading' : 'paper-clip'\"></i>\n        </ng-container>\n      </ng-container>\n      <ng-template\n        #customIconRender\n        [ngTemplateOutlet]=\"iconRender\"\n        [ngTemplateOutletContext]=\"{ $implicit: file }\"\n      ></ng-template>\n      <ng-template #iconNodeFileIcon>\n        <i nz-icon [nzType]=\"file.isImageUrl ? 'picture' : 'file'\" nzTheme=\"twotone\"></i>\n      </ng-template>\n    </ng-template>\n    <ng-template #removeIcon>\n      <button\n        *ngIf=\"icons.showRemoveIcon\"\n        type=\"button\"\n        nz-button\n        nzType=\"text\"\n        nzSize=\"small\"\n        (click)=\"handleRemove(file, $event)\"\n        [attr.title]=\"locale.removeFile\"\n        class=\"ant-upload-list-item-card-actions-btn\"\n      >\n        <i nz-icon nzType=\"delete\"></i>\n      </button>\n    </ng-template>\n    <ng-template #downloadIcon>\n      <button\n        *ngIf=\"file.showDownload\"\n        type=\"button\"\n        nz-button\n        nzType=\"text\"\n        nzSize=\"small\"\n        (click)=\"handleDownload(file)\"\n        [attr.title]=\"locale.downloadFile\"\n        class=\"ant-upload-list-item-card-actions-btn\"\n      >\n        <i nz-icon nzType=\"download\"></i>\n      </button>\n    </ng-template>\n    <ng-template #downloadOrDelete>\n      <span\n        *ngIf=\"listType !== 'picture-card'\"\n        class=\"ant-upload-list-item-card-actions {{ listType === 'picture' ? 'picture' : '' }}\"\n      >\n        <ng-template [ngTemplateOutlet]=\"downloadIcon\"></ng-template>\n        <ng-template [ngTemplateOutlet]=\"removeIcon\"></ng-template>\n      </span>\n    </ng-template>\n    <ng-template #preview>\n      <a\n        *ngIf=\"file.url\"\n        target=\"_blank\"\n        rel=\"noopener noreferrer\"\n        class=\"ant-upload-list-item-name\"\n        [attr.title]=\"file.name\"\n        [href]=\"file.url\"\n        [attr.download]=\"file.linkProps && file.linkProps.download\"\n        (click)=\"handlePreview(file, $event)\"\n      >\n        {{ file.name }}\n      </a>\n      <span\n        *ngIf=\"!file.url\"\n        class=\"ant-upload-list-item-name\"\n        [attr.title]=\"file.name\"\n        (click)=\"handlePreview(file, $event)\"\n      >\n        {{ file.name }}\n      </span>\n      <ng-template [ngTemplateOutlet]=\"downloadOrDelete\"></ng-template>\n    </ng-template>\n    <div class=\"ant-upload-list-item-info\">\n      <span class=\"ant-upload-span\">\n        <ng-template [ngTemplateOutlet]=\"icon\"></ng-template>\n        <ng-template [ngTemplateOutlet]=\"preview\"></ng-template>\n      </span>\n    </div>\n    <span\n      *ngIf=\"listType === 'picture-card' && !file.isUploading\"\n      class=\"ant-upload-list-item-actions\"\n    >\n      <a\n        *ngIf=\"icons.showPreviewIcon\"\n        [href]=\"file.url || file.thumbUrl\"\n        target=\"_blank\"\n        rel=\"noopener noreferrer\"\n        [attr.title]=\"locale.previewFile\"\n        [ngStyle]=\"!(file.url || file.thumbUrl) ? { opacity: 0.5, 'pointer-events': 'none' } : null\"\n        (click)=\"handlePreview(file, $event)\"\n      >\n        <i nz-icon nzType=\"eye\"></i>\n      </a>\n      <ng-container *ngIf=\"file.status === 'done'\">\n        <ng-template [ngTemplateOutlet]=\"downloadIcon\"></ng-template>\n      </ng-container>\n      <ng-template [ngTemplateOutlet]=\"removeIcon\"></ng-template>\n    </span>\n    <div *ngIf=\"file.isUploading\" class=\"ant-upload-list-item-progress\">\n      <nz-progress\n        [nzPercent]=\"file.percent!\"\n        nzType=\"line\"\n        [nzShowInfo]=\"false\"\n        [nzStrokeWidth]=\"2\"\n      ></nz-progress>\n    </div>\n  </div>\n</div>\n",
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('itemState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
              height: '0',
              width: '0',
              opacity: 0
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(150, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
              height: '*',
              width: '*',
              opacity: 1
            }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(150, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
              height: '0',
              width: '0',
              opacity: 0
            }))])])],
            host: {
              '[class.ant-upload-list-rtl]': "dir === 'rtl'",
              '[class.ant-upload-list-text]': "listType === 'text'",
              '[class.ant-upload-list-picture]': "listType === 'picture'",
              '[class.ant-upload-list-picture-card]': "listType === 'picture-card'"
            },
            preserveWhitespaces: false,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }];
        }, {
          locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          iconRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          dir: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          listType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          icons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          onPreview: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          onRemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          onDownload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          previewFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          previewIsImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzUploadComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'nz-upload',
            exportAs: 'nzUpload',
            template: "<ng-template #list>\n  <nz-upload-list\n    *ngIf=\"locale && !nzFileListRender\"\n    #listComp\n    [style.display]=\"nzShowUploadList ? '' : 'none'\"\n    [locale]=\"locale\"\n    [listType]=\"nzListType\"\n    [items]=\"nzFileList || []\"\n    [icons]=\"$any(nzShowUploadList)\"\n    [iconRender]=\"nzIconRender\"\n    [previewFile]=\"nzPreviewFile\"\n    [previewIsImage]=\"nzPreviewIsImage\"\n    [onPreview]=\"nzPreview\"\n    [onRemove]=\"onRemove\"\n    [onDownload]=\"nzDownload\"\n    [dir]=\"dir\"\n  ></nz-upload-list>\n  <ng-container *ngIf=\"nzFileListRender\">\n    <ng-container\n      *ngTemplateOutlet=\"nzFileListRender; context: { $implicit: nzFileList }\"\n    ></ng-container>\n  </ng-container>\n</ng-template>\n<ng-template #con><ng-content></ng-content></ng-template>\n<ng-template #btn>\n  <div [ngClass]=\"classList\" [style.display]=\"nzShowButton ? '' : 'none'\">\n    <div nz-upload-btn #uploadComp [options]=\"_btnOptions!\">\n      <ng-template [ngTemplateOutlet]=\"con\"></ng-template>\n    </div>\n  </div>\n</ng-template>\n<ng-container *ngIf=\"nzType === 'drag'; else select\">\n  <div\n    [ngClass]=\"classList\"\n    (drop)=\"fileDrop($event)\"\n    (dragover)=\"fileDrop($event)\"\n    (dragleave)=\"fileDrop($event)\"\n  >\n    <div nz-upload-btn #uploadComp [options]=\"_btnOptions!\" class=\"ant-upload-btn\">\n      <div class=\"ant-upload-drag-container\">\n        <ng-template [ngTemplateOutlet]=\"con\"></ng-template>\n      </div>\n    </div>\n  </div>\n  <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n</ng-container>\n<ng-template #select>\n  <ng-container *ngIf=\"nzListType === 'picture-card'; else pic\">\n    <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n    <ng-template [ngTemplateOutlet]=\"btn\"></ng-template>\n  </ng-container>\n</ng-template>\n<ng-template #pic>\n  <ng-template [ngTemplateOutlet]=\"btn\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n</ng-template>\n",
            preserveWhitespaces: false,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            host: {
              '[class.ant-upload-picture-card-wrapper]': 'nzListType === "picture-card"'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nService"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }];
        }, {
          nzType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzLimit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzDirectory: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzOpenFileDialogOnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzFileList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzListType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzMultiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzShowButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzWithCredentials: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzIconRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzFileListRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          nzFileListChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          nzShowUploadList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          uploadComp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['uploadComp', {
              "static": false
            }]
          }],
          listComp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['listComp', {
              "static": false
            }]
          }],
          nzFileType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzAccept: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzBeforeUpload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzCustomRequest: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzHeaders: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzRemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzPreview: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzPreviewFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzPreviewIsImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzTransformFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzDownload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzUploadModule = /*#__PURE__*/_createClass(function NzUploadModule() {
        _classCallCheck(this, NzUploadModule);
      });

      NzUploadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: NzUploadModule
      });
      NzUploadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function NzUploadModule_Factory(t) {
          return new (t || NzUploadModule)();
        },
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_17__["NzToolTipModule"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_16__["NzProgressModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__["NzIconModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__["NzButtonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzUploadModule, {
          declarations: function declarations() {
            return [NzUploadComponent, NzUploadBtnComponent, NzUploadListComponent];
          },
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_17__["NzToolTipModule"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_16__["NzProgressModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__["NzIconModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__["NzButtonModule"]];
          },
          exports: function exports() {
            return [NzUploadComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzUploadModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_17__["NzToolTipModule"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_16__["NzProgressModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__["NzIconModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__["NzButtonModule"]],
            declarations: [NzUploadComponent, NzUploadBtnComponent, NzUploadListComponent],
            exports: [NzUploadComponent]
          }]
        }], null, null);
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ng-zorro-antd-upload.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~task-management-task-management-module~voter-voter-module-es5.js.map