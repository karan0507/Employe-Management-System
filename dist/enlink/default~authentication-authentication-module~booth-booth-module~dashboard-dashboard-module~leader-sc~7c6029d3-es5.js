(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~authentication-authentication-module~booth-booth-module~dashboard-dashboard-module~leader-sc~7c6029d3"], {
    /***/
    "0lU3":
    /*!***************************************************************************************!*\
      !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-date-picker.js ***!
      \***************************************************************************************/

    /*! exports provided: LibPackerModule, NzDatePickerComponent, NzDatePickerModule, NzMonthPickerComponent, NzRangePickerComponent, NzWeekPickerComponent, NzYearPickerComponent, PREFIX_CLASS, getTimeConfig, isAllowedDate, isTimeValid, isTimeValidByConfig, transCompatFormat, ɵAbstractPanelHeader, ɵAbstractTable, ɵCalendarFooterComponent, ɵDateHeaderComponent, ɵDatePickerService, ɵDateRangePopupComponent, ɵDateTableComponent, ɵDecadeHeaderComponent, ɵDecadeTableComponent, ɵInnerPopupComponent, ɵMonthHeaderComponent, ɵMonthTableComponent, ɵYearHeaderComponent, ɵYearTableComponent */

    /***/
    function lU3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LibPackerModule", function () {
        return LibPackerModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzDatePickerComponent", function () {
        return NzDatePickerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzDatePickerModule", function () {
        return NzDatePickerModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzMonthPickerComponent", function () {
        return NzMonthPickerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzRangePickerComponent", function () {
        return NzRangePickerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzWeekPickerComponent", function () {
        return NzWeekPickerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzYearPickerComponent", function () {
        return NzYearPickerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PREFIX_CLASS", function () {
        return PREFIX_CLASS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTimeConfig", function () {
        return getTimeConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isAllowedDate", function () {
        return isAllowedDate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isTimeValid", function () {
        return isTimeValid;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isTimeValidByConfig", function () {
        return isTimeValidByConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "transCompatFormat", function () {
        return transCompatFormat;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵAbstractPanelHeader", function () {
        return AbstractPanelHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵAbstractTable", function () {
        return AbstractTable;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵCalendarFooterComponent", function () {
        return CalendarFooterComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵDateHeaderComponent", function () {
        return DateHeaderComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵDatePickerService", function () {
        return DatePickerService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵDateRangePopupComponent", function () {
        return DateRangePopupComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵDateTableComponent", function () {
        return DateTableComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵDecadeHeaderComponent", function () {
        return DecadeHeaderComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵDecadeTableComponent", function () {
        return DecadeTableComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵInnerPopupComponent", function () {
        return InnerPopupComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵMonthHeaderComponent", function () {
        return MonthHeaderComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵMonthTableComponent", function () {
        return MonthTableComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵYearHeaderComponent", function () {
        return YearHeaderComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵYearTableComponent", function () {
        return YearTableComponent;
      });
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/core/no-animation */
      "YF2q");
      /* harmony import */


      var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/core/outlet */
      "pdGh");
      /* harmony import */


      var ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/core/overlay */
      "JgHy");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/time-picker */
      "ix5O");
      /* harmony import */


      var ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/core/time */
      "n7bz");
      /* harmony import */


      var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/core/util */
      "/KA4");
      /* harmony import */


      var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/i18n */
      "Rm4T");
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-zorro-antd/core/animation */
      "GR68");
      /* harmony import */


      var ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-zorro-antd/core/resize-observers */
      "/Kk4");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ng-zorro-antd/core/config */
      "2Suw");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
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


      function CalendarFooterComponent_div_1_ng_container_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
        }
      }

      function CalendarFooterComponent_div_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CalendarFooterComponent_div_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.extraFooter);
        }
      }

      function CalendarFooterComponent_div_1_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r4.extraFooter, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        }
      }

      function CalendarFooterComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CalendarFooterComponent_div_1_ng_container_2_Template, 2, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CalendarFooterComponent_div_1_ng_container_3_Template, 2, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r0.prefixCls, "-footer-extra");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", ctx_r0.isTemplateRef(ctx_r0.extraFooter));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", ctx_r0.isNonEmptyString(ctx_r0.extraFooter));
        }
      }

      function CalendarFooterComponent_a_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CalendarFooterComponent_a_2_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r6.isTodayDisabled ? null : ctx_r6.onClickToday();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate2"]("", ctx_r1.prefixCls, "-today-btn ", ctx_r1.isTodayDisabled ? ctx_r1.prefixCls + "-today-btn-disabled" : "", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", ctx_r1.todayTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.locale.today, " ");
        }
      }

      function CalendarFooterComponent_ul_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
        }
      }

      function CalendarFooterComponent_ul_3_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CalendarFooterComponent_ul_3_li_2_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r11.isTodayDisabled ? null : ctx_r11.onClickToday();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r9.prefixCls, "-now");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r9.prefixCls, "-now-btn");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r9.locale.now, " ");
        }
      }

      function CalendarFooterComponent_ul_3_li_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CalendarFooterComponent_ul_3_li_3_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r13.okDisabled ? null : ctx_r13.clickOk.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r10.prefixCls, "-ok");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r10.okDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r10.locale.ok, " ");
        }
      }

      function CalendarFooterComponent_ul_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CalendarFooterComponent_ul_3_ng_container_1_Template, 1, 0, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CalendarFooterComponent_ul_3_li_2_Template, 3, 7, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CalendarFooterComponent_ul_3_li_3_Template, 3, 5, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r2.prefixCls, "-ranges");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.rangeQuickSelector);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.showNow);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.hasTimePicker);
        }
      }

      function DateRangePopupComponent_ng_container_0_ng_container_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          partType: a0
        };
      };

      function DateRangePopupComponent_ng_container_0_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DateRangePopupComponent_ng_container_0_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, ctx_r9.datePickerService.activeInput));
        }
      }

      function DateRangePopupComponent_ng_container_0_ng_template_6_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
        }
      }

      function DateRangePopupComponent_ng_container_0_ng_template_6_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
        }
      }

      var _c1 = function _c1() {
        return {
          partType: "left"
        };
      };

      var _c2 = function _c2() {
        return {
          partType: "right"
        };
      };

      function DateRangePopupComponent_ng_container_0_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DateRangePopupComponent_ng_container_0_ng_template_6_ng_container_0_Template, 1, 0, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DateRangePopupComponent_ng_container_0_ng_template_6_ng_container_1_Template, 1, 0, "ng-container", 7);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c2));
        }
      }

      function DateRangePopupComponent_ng_container_0_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
        }
      }

      function DateRangePopupComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DateRangePopupComponent_ng_container_0_ng_container_5_Template, 2, 4, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, DateRangePopupComponent_ng_container_0_ng_template_6_Template, 2, 6, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, DateRangePopupComponent_ng_container_0_ng_container_8_Template, 1, 0, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate2"]("", ctx_r0.prefixCls, "-range-wrapper ", ctx_r0.prefixCls, "-date-range-wrapper");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r0.prefixCls, "-range-arrow");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("left", ctx_r0.datePickerService == null ? null : ctx_r0.datePickerService.arrowLeft, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r0.prefixCls, "-panel-container");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r0.prefixCls, "-panels");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.hasTimePicker)("ngIfElse", _r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r5);
        }
      }

      function DateRangePopupComponent_ng_template_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
        }
      }

      function DateRangePopupComponent_ng_template_1_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
        }
      }

      function DateRangePopupComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DateRangePopupComponent_ng_template_1_ng_container_2_Template, 1, 0, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DateRangePopupComponent_ng_template_1_ng_container_3_Template, 1, 0, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate4"]("", ctx_r2.prefixCls, "-panel-container ", ctx_r2.showWeek ? ctx_r2.prefixCls + "-week-number" : "", " ", ctx_r2.hasTimePicker ? ctx_r2.prefixCls + "-time" : "", " ", ctx_r2.isRange ? ctx_r2.prefixCls + "-range" : "", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r2.prefixCls, "-panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-picker-panel-rtl", ctx_r2.dir === "rtl");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r5);
        }
      }

      function DateRangePopupComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "inner-popup", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("panelModeChange", function DateRangePopupComponent_ng_template_3_Template_inner_popup_panelModeChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);

            var partType_r18 = ctx.partType;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r19.onPanelModeChange($event, partType_r18);
          })("cellHover", function DateRangePopupComponent_ng_template_3_Template_inner_popup_cellHover_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r21.onCellHover($event);
          })("selectDate", function DateRangePopupComponent_ng_template_3_Template_inner_popup_selectDate_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r22.changeValueFromSelect($event, !ctx_r22.showTime);
          })("selectTime", function DateRangePopupComponent_ng_template_3_Template_inner_popup_selectTime_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);

            var partType_r18 = ctx.partType;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r23.onSelectTime($event, partType_r18);
          })("headerChange", function DateRangePopupComponent_ng_template_3_Template_inner_popup_headerChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);

            var partType_r18 = ctx.partType;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r24.onActiveDateChange($event, partType_r18);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var partType_r18 = ctx.partType;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r4.prefixCls, "-panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-picker-panel-rtl", ctx_r4.dir === "rtl");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showWeek", ctx_r4.showWeek)("endPanelMode", ctx_r4.getPanelMode(ctx_r4.endPanelMode, partType_r18))("partType", partType_r18)("locale", ctx_r4.locale)("showTimePicker", ctx_r4.hasTimePicker)("timeOptions", ctx_r4.getTimeOptions(partType_r18))("panelMode", ctx_r4.getPanelMode(ctx_r4.panelMode, partType_r18))("activeDate", ctx_r4.getActiveDate(partType_r18))("value", ctx_r4.getValue(partType_r18))("disabledDate", ctx_r4.disabledDate)("dateRender", ctx_r4.dateRender)("selectedValue", ctx_r4.datePickerService == null ? null : ctx_r4.datePickerService.value)("hoverValue", ctx_r4.hoverValue);
        }
      }

      function DateRangePopupComponent_ng_template_5_calendar_footer_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "calendar-footer", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("clickOk", function DateRangePopupComponent_ng_template_5_calendar_footer_0_Template_calendar_footer_clickOk_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r26.onClickOk();
          })("clickToday", function DateRangePopupComponent_ng_template_5_calendar_footer_0_Template_calendar_footer_clickToday_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r28.onClickToday($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("locale", ctx_r25.locale)("isRange", ctx_r25.isRange)("showToday", ctx_r25.showToday)("showNow", ctx_r25.showNow)("hasTimePicker", ctx_r25.hasTimePicker)("okDisabled", !ctx_r25.isAllowed(ctx_r25.datePickerService == null ? null : ctx_r25.datePickerService.value))("extraFooter", ctx_r25.extraFooter)("rangeQuickSelector", ctx_r25.ranges ? _r7 : null);
        }
      }

      function DateRangePopupComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DateRangePopupComponent_ng_template_5_calendar_footer_0_Template, 1, 8, "calendar-footer", 10);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.hasFooter);
        }
      }

      function DateRangePopupComponent_ng_template_7_li_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DateRangePopupComponent_ng_template_7_li_0_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);

            var name_r30 = ctx.$implicit;

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r31.onClickPresetRange(ctx_r31.ranges[name_r30]);
          })("mouseenter", function DateRangePopupComponent_ng_template_7_li_0_Template_li_mouseenter_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);

            var name_r30 = ctx.$implicit;

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r33.onHoverPresetRange(ctx_r33.ranges[name_r30]);
          })("mouseleave", function DateRangePopupComponent_ng_template_7_li_0_Template_li_mouseleave_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r34.onPresetRangeMouseLeave();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var name_r30 = ctx.$implicit;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r29.prefixCls, "-preset");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](name_r30);
        }
      }

      function DateRangePopupComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DateRangePopupComponent_ng_template_7_li_0_Template, 3, 4, "li", 12);
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r8.getObjectKeys(ctx_r8.ranges));
        }
      }

      var _c3 = ["separatorElement"];
      var _c4 = ["pickerInput"];
      var _c5 = ["rangePickerInput"];

      function NzDatePickerComponent_ng_container_0_div_1_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
        }
      }

      function NzDatePickerComponent_ng_container_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NzDatePickerComponent_ng_container_0_div_1_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r12.inputValue = $event;
          })("focus", function NzDatePickerComponent_ng_container_0_div_1_Template_input_focus_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r14.onFocus($event);
          })("focusout", function NzDatePickerComponent_ng_container_0_div_1_Template_input_focusout_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r15.onFocusout($event);
          })("ngModelChange", function NzDatePickerComponent_ng_container_0_div_1_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r16.onInputChange($event);
          })("keyup.enter", function NzDatePickerComponent_ng_container_0_div_1_Template_input_keyup_enter_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r17.onKeyupEnter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NzDatePickerComponent_ng_container_0_div_1_ng_container_3_Template, 1, 0, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r8.prefixCls, "-input");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-input-disabled", ctx_r8.nzDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", ctx_r8.getPlaceholder());

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r8.nzDisabled)("readOnly", ctx_r8.nzInputReadOnly)("ngModel", ctx_r8.inputValue)("size", ctx_r8.inputSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("id", ctx_r8.nzId);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3);
        }
      }

      function NzDatePickerComponent_ng_container_0_ng_container_2_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
        }
      }

      function NzDatePickerComponent_ng_container_0_ng_container_2_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r20.nzSeparator);
        }
      }

      function NzDatePickerComponent_ng_container_0_ng_container_2_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 13);
        }
      }

      function NzDatePickerComponent_ng_container_0_ng_container_2_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
        }
      }

      function NzDatePickerComponent_ng_container_0_ng_container_2_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
        }
      }

      function NzDatePickerComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzDatePickerComponent_ng_container_0_ng_container_2_ng_container_2_Template, 1, 0, "ng-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", null, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, NzDatePickerComponent_ng_container_0_ng_container_2_ng_container_6_Template, 2, 1, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, NzDatePickerComponent_ng_container_0_ng_container_2_ng_template_7_Template, 1, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, NzDatePickerComponent_ng_container_0_ng_container_2_ng_container_10_Template, 1, 0, "ng-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, NzDatePickerComponent_ng_container_0_ng_container_2_ng_container_11_Template, 1, 0, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r9.prefixCls, "-input");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](19, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r9.prefixCls, "-range-separator");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r9.prefixCls, "-separator");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.nzSeparator)("ngIfElse", _r21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r9.prefixCls, "-input");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](20, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3);
        }
      }

      function NzDatePickerComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzDatePickerComponent_ng_container_0_div_1_Template, 4, 12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzDatePickerComponent_ng_container_0_ng_container_2_Template, 12, 21, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isRange);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isRange);
        }
      }

      function NzDatePickerComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NzDatePickerComponent_ng_template_1_Template_input_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r27.onClickInputBox($event);
          })("focusout", function NzDatePickerComponent_ng_template_1_Template_input_focusout_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r29.onFocusout($event);
          })("focus", function NzDatePickerComponent_ng_template_1_Template_input_focus_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);

            var partType_r25 = ctx.partType;

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r30.onFocus($event, partType_r25);
          })("keyup.enter", function NzDatePickerComponent_ng_template_1_Template_input_keyup_enter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r31.onKeyupEnter($event);
          })("ngModelChange", function NzDatePickerComponent_ng_template_1_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);

            var partType_r25 = ctx.partType;

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r32.inputValue[ctx_r32.datePickerService.getActiveIndex(partType_r25)] = $event;
          })("ngModelChange", function NzDatePickerComponent_ng_template_1_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r33.onInputChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var partType_r25 = ctx.partType;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", ctx_r2.getPlaceholder(partType_r25));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r2.nzDisabled)("readOnly", ctx_r2.nzInputReadOnly)("size", ctx_r2.inputSize)("ngModel", ctx_r2.inputValue[ctx_r2.datePickerService.getActiveIndex(partType_r25)]);
        }
      }

      function NzDatePickerComponent_ng_template_3_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NzDatePickerComponent_ng_template_3_span_1_Template_span_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r36.onClickClear($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r34.prefixCls, "-clear");
        }
      }

      function NzDatePickerComponent_ng_template_3_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var suffixIcon_r38 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", suffixIcon_r38);
        }
      }

      function NzDatePickerComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzDatePickerComponent_ng_template_3_span_1_Template, 2, 3, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NzDatePickerComponent_ng_template_3_ng_container_3_Template, 2, 1, "ng-container", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r4.prefixCls, "-active-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r4.activeBarStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.showClear());

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r4.prefixCls, "-suffix");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r4.nzSuffixIcon);
        }
      }

      function NzDatePickerComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "date-range-popup", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("panelModeChange", function NzDatePickerComponent_ng_template_5_Template_date_range_popup_panelModeChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r40);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r39.onPanelModeChange($event);
          })("calendarChange", function NzDatePickerComponent_ng_template_5_Template_date_range_popup_calendarChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r40);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r41.onCalendarChange($event);
          })("resultOk", function NzDatePickerComponent_ng_template_5_Template_date_range_popup_resultOk_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r40);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r42.onResultOk();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzNoAnimation", !!(ctx_r6.noAnimation == null ? null : ctx_r6.noAnimation.nzNoAnimation))("@slideMotion", "enter");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate2"]("", ctx_r6.prefixCls, "-dropdown ", ctx_r6.nzDropdownClassName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-picker-dropdown-rtl", ctx_r6.dir === "rtl")("ant-picker-dropdown-placement-bottomLeft", ctx_r6.currentPositionY === "bottom" && ctx_r6.currentPositionX === "start")("ant-picker-dropdown-placement-topLeft", ctx_r6.currentPositionY === "top" && ctx_r6.currentPositionX === "start")("ant-picker-dropdown-placement-bottomRight", ctx_r6.currentPositionY === "bottom" && ctx_r6.currentPositionX === "end")("ant-picker-dropdown-placement-topRight", ctx_r6.currentPositionY === "top" && ctx_r6.currentPositionX === "end")("ant-picker-dropdown-range", ctx_r6.isRange)("ant-picker-active-left", ctx_r6.datePickerService.activeInput === "left")("ant-picker-active-right", ctx_r6.datePickerService.activeInput === "right");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r6.nzPopupStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isRange", ctx_r6.isRange)("inline", ctx_r6.nzInline)("defaultPickerValue", ctx_r6.nzDefaultPickerValue)("showWeek", ctx_r6.nzMode === "week")("panelMode", ctx_r6.panelMode)("locale", ctx_r6.nzLocale == null ? null : ctx_r6.nzLocale.lang)("showToday", ctx_r6.nzMode === "date" && ctx_r6.nzShowToday && !ctx_r6.isRange && !ctx_r6.nzShowTime)("showNow", ctx_r6.nzMode === "date" && ctx_r6.nzShowNow && !ctx_r6.isRange && !!ctx_r6.nzShowTime)("showTime", ctx_r6.nzShowTime)("dateRender", ctx_r6.nzDateRender)("disabledDate", ctx_r6.nzDisabledDate)("disabledTime", ctx_r6.nzDisabledTime)("extraFooter", ctx_r6.extraFooter)("ranges", ctx_r6.nzRanges)("dir", ctx_r6.dir);
        }
      }

      function NzDatePickerComponent_ng_template_7_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
        }
      }

      function NzDatePickerComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzDatePickerComponent_ng_template_7_ng_container_0_Template, 1, 0, "ng-container", 9);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r5);
        }
      }

      function InnerPopupComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "decade-header", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function InnerPopupComponent_ng_container_3_Template_decade_header_valueChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r5.activeDate = $event;
          })("panelModeChange", function InnerPopupComponent_ng_container_3_Template_decade_header_panelModeChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r7.panelModeChange.emit($event);
          })("valueChange", function InnerPopupComponent_ng_container_3_Template_decade_header_valueChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r8.headerChange.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "decade-table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function InnerPopupComponent_ng_container_3_Template_decade_table_valueChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r9.onChooseDecade($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r0.activeDate)("locale", ctx_r0.locale)("showSuperPreBtn", ctx_r0.enablePrevNext("prev", "decade"))("showSuperNextBtn", ctx_r0.enablePrevNext("next", "decade"))("showNextBtn", false)("showPreBtn", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r0.prefixCls, "-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("activeDate", ctx_r0.activeDate)("value", ctx_r0.value)("locale", ctx_r0.locale)("disabledDate", ctx_r0.disabledDate);
        }
      }

      function InnerPopupComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "year-header", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function InnerPopupComponent_ng_container_4_Template_year_header_valueChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r10.activeDate = $event;
          })("panelModeChange", function InnerPopupComponent_ng_container_4_Template_year_header_panelModeChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r12.panelModeChange.emit($event);
          })("valueChange", function InnerPopupComponent_ng_container_4_Template_year_header_valueChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r13.headerChange.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "year-table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function InnerPopupComponent_ng_container_4_Template_year_table_valueChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r14.onChooseYear($event);
          })("cellHover", function InnerPopupComponent_ng_container_4_Template_year_table_cellHover_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r15.cellHover.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r1.activeDate)("locale", ctx_r1.locale)("showSuperPreBtn", ctx_r1.enablePrevNext("prev", "year"))("showSuperNextBtn", ctx_r1.enablePrevNext("next", "year"))("showNextBtn", false)("showPreBtn", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r1.prefixCls, "-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("activeDate", ctx_r1.activeDate)("value", ctx_r1.value)("locale", ctx_r1.locale)("disabledDate", ctx_r1.disabledDate)("selectedValue", ctx_r1.selectedValue)("hoverValue", ctx_r1.hoverValue);
        }
      }

      function InnerPopupComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "month-header", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function InnerPopupComponent_ng_container_5_Template_month_header_valueChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r16.activeDate = $event;
          })("panelModeChange", function InnerPopupComponent_ng_container_5_Template_month_header_panelModeChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r18.panelModeChange.emit($event);
          })("valueChange", function InnerPopupComponent_ng_container_5_Template_month_header_valueChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r19.headerChange.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "month-table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function InnerPopupComponent_ng_container_5_Template_month_table_valueChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r20.onChooseMonth($event);
          })("cellHover", function InnerPopupComponent_ng_container_5_Template_month_table_cellHover_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r21.cellHover.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r2.activeDate)("locale", ctx_r2.locale)("showSuperPreBtn", ctx_r2.enablePrevNext("prev", "month"))("showSuperNextBtn", ctx_r2.enablePrevNext("next", "month"))("showNextBtn", false)("showPreBtn", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r2.prefixCls, "-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r2.value)("activeDate", ctx_r2.activeDate)("locale", ctx_r2.locale)("disabledDate", ctx_r2.disabledDate)("selectedValue", ctx_r2.selectedValue)("hoverValue", ctx_r2.hoverValue);
        }
      }

      function InnerPopupComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "date-header", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function InnerPopupComponent_ng_container_6_Template_date_header_valueChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r22.activeDate = $event;
          })("panelModeChange", function InnerPopupComponent_ng_container_6_Template_date_header_panelModeChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r24.panelModeChange.emit($event);
          })("valueChange", function InnerPopupComponent_ng_container_6_Template_date_header_valueChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r25.headerChange.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "date-table", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function InnerPopupComponent_ng_container_6_Template_date_table_valueChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r26.onSelectDate($event);
          })("cellHover", function InnerPopupComponent_ng_container_6_Template_date_table_cellHover_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r27.cellHover.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r3.activeDate)("locale", ctx_r3.locale)("showSuperPreBtn", ctx_r3.showWeek ? ctx_r3.enablePrevNext("prev", "week") : ctx_r3.enablePrevNext("prev", "date"))("showSuperNextBtn", ctx_r3.showWeek ? ctx_r3.enablePrevNext("next", "week") : ctx_r3.enablePrevNext("next", "date"))("showPreBtn", ctx_r3.showWeek ? ctx_r3.enablePrevNext("prev", "week") : ctx_r3.enablePrevNext("prev", "date"))("showNextBtn", ctx_r3.showWeek ? ctx_r3.enablePrevNext("next", "week") : ctx_r3.enablePrevNext("next", "date"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r3.prefixCls, "-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("locale", ctx_r3.locale)("showWeek", ctx_r3.showWeek)("value", ctx_r3.value)("activeDate", ctx_r3.activeDate)("disabledDate", ctx_r3.disabledDate)("cellRender", ctx_r3.dateRender)("selectedValue", ctx_r3.selectedValue)("hoverValue", ctx_r3.hoverValue);
        }
      }

      function InnerPopupComponent_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-time-picker-panel", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function InnerPopupComponent_ng_container_7_Template_nz_time_picker_panel_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r28.onSelectTime($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzInDatePicker", true)("ngModel", ctx_r4.value == null ? null : ctx_r4.value.nativeDate)("format", ctx_r4.timeOptions.nzFormat)("nzHourStep", ctx_r4.timeOptions.nzHourStep)("nzMinuteStep", ctx_r4.timeOptions.nzMinuteStep)("nzSecondStep", ctx_r4.timeOptions.nzSecondStep)("nzDisabledHours", ctx_r4.timeOptions.nzDisabledHours)("nzDisabledMinutes", ctx_r4.timeOptions.nzDisabledMinutes)("nzDisabledSeconds", ctx_r4.timeOptions.nzDisabledSeconds)("nzHideDisabledOptions", !!ctx_r4.timeOptions.nzHideDisabledOptions)("nzDefaultOpenValue", ctx_r4.timeOptions.nzDefaultOpenValue)("nzUse12Hours", !!ctx_r4.timeOptions.nzUse12Hours)("nzAddOn", ctx_r4.timeOptions.nzAddOn);
        }
      }

      function DateHeaderComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DateHeaderComponent_ng_container_6_Template_button_click_1_listener() {
            var selector_r1 = ctx.$implicit;
            return selector_r1.onClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var selector_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](selector_r1.className);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", selector_r1.title || null);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", selector_r1.label, " ");
        }
      }

      function DateTableComponent_thead_1_th_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "th", 6);
        }
      }

      function DateTableComponent_thead_1_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cell_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", cell_r4.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cell_r4.content, " ");
        }
      }

      function DateTableComponent_thead_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DateTableComponent_thead_1_th_2_Template, 1, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DateTableComponent_thead_1_th_3_Template, 2, 2, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.showWeek);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.headRow);
        }
      }

      function DateTableComponent_tr_3_td_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r6.prefixCls, "-cell-week");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r5.weekNum, " ");
        }
      }

      function DateTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
        }
      }

      var _c6 = function _c6(a0) {
        return {
          $implicit: a0
        };
      };

      function DateTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DateTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c6, cell_r9.value));
        }
      }

      function DateTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", cell_r9.cellRender, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        }
      }

      function DateTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r14.prefixCls, "-cell-inner");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-selected", cell_r9.isSelected)("aria-disabled", cell_r9.isDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cell_r9.content, " ");
        }
      }

      function DateTableComponent_tr_3_td_2_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](1, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DateTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DateTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, DateTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template, 3, 6, "ng-container", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", ctx_r10.isTemplateRef(cell_r9.cellRender));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", ctx_r10.isNonEmptyString(cell_r9.cellRender));
        }
      }

      function DateTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
        }
      }

      function DateTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DateTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.fullCellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c6, cell_r9.value));
        }
      }

      function DateTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
        }
      }

      function DateTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DateTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r22.prefixCls, "-date-value");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cell_r9.content);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r22.prefixCls, "-date-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c6, cell_r9.value));
        }
      }

      function DateTableComponent_tr_3_td_2_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DateTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template, 2, 4, "ng-container", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DateTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template, 4, 11, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);

          var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r11.prefixCls, "-date ant-picker-cell-inner");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-picker-calendar-date-today", cell_r9.isToday);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", cell_r9.fullCellRender)("ngIfElse", _r21);
        }
      }

      function DateTableComponent_tr_3_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DateTableComponent_tr_3_td_2_Template_td_click_0_listener() {
            var cell_r9 = ctx.$implicit;
            return cell_r9.isDisabled ? null : cell_r9.onClick();
          })("mouseenter", function DateTableComponent_tr_3_td_2_Template_td_mouseenter_0_listener() {
            var cell_r9 = ctx.$implicit;
            return cell_r9.onMouseEnter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](1, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DateTableComponent_tr_3_td_2_ng_container_2_Template, 5, 3, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DateTableComponent_tr_3_td_2_ng_container_3_Template, 5, 7, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cell_r9 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", cell_r9.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", cell_r9.classMap);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx_r7.prefixCls);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "ant-picker");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "ant-picker-calendar");
        }
      }

      function DateTableComponent_tr_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DateTableComponent_tr_3_td_1_Template, 2, 4, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DateTableComponent_tr_3_td_2_Template, 4, 5, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r5 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", row_r5.classMap);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r5.weekNum);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", row_r5.dateCells)("ngForTrackBy", ctx_r1.trackByBodyColumn);
        }
      }

      function DecadeHeaderComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DecadeHeaderComponent_ng_container_6_Template_button_click_1_listener() {
            var selector_r1 = ctx.$implicit;
            return selector_r1.onClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var selector_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](selector_r1.className);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", selector_r1.title || null);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", selector_r1.label, " ");
        }
      }

      function DecadeTableComponent_thead_1_th_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "th", 6);
        }
      }

      function DecadeTableComponent_thead_1_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cell_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", cell_r4.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cell_r4.content, " ");
        }
      }

      function DecadeTableComponent_thead_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DecadeTableComponent_thead_1_th_2_Template, 1, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DecadeTableComponent_thead_1_th_3_Template, 2, 2, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.showWeek);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.headRow);
        }
      }

      function DecadeTableComponent_tr_3_td_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r6.prefixCls, "-cell-week");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r5.weekNum, " ");
        }
      }

      function DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
        }
      }

      function DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c6, cell_r9.value));
        }
      }

      function DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", cell_r9.cellRender, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        }
      }

      function DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r14.prefixCls, "-cell-inner");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-selected", cell_r9.isSelected)("aria-disabled", cell_r9.isDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cell_r9.content, " ");
        }
      }

      function DecadeTableComponent_tr_3_td_2_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](1, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template, 3, 6, "ng-container", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", ctx_r10.isTemplateRef(cell_r9.cellRender));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", ctx_r10.isNonEmptyString(cell_r9.cellRender));
        }
      }

      function DecadeTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
        }
      }

      function DecadeTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DecadeTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.fullCellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c6, cell_r9.value));
        }
      }

      function DecadeTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
        }
      }

      function DecadeTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DecadeTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r22.prefixCls, "-date-value");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cell_r9.content);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r22.prefixCls, "-date-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c6, cell_r9.value));
        }
      }

      function DecadeTableComponent_tr_3_td_2_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DecadeTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template, 2, 4, "ng-container", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DecadeTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template, 4, 11, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);

          var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r11.prefixCls, "-date ant-picker-cell-inner");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-picker-calendar-date-today", cell_r9.isToday);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", cell_r9.fullCellRender)("ngIfElse", _r21);
        }
      }

      function DecadeTableComponent_tr_3_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DecadeTableComponent_tr_3_td_2_Template_td_click_0_listener() {
            var cell_r9 = ctx.$implicit;
            return cell_r9.isDisabled ? null : cell_r9.onClick();
          })("mouseenter", function DecadeTableComponent_tr_3_td_2_Template_td_mouseenter_0_listener() {
            var cell_r9 = ctx.$implicit;
            return cell_r9.onMouseEnter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](1, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DecadeTableComponent_tr_3_td_2_ng_container_2_Template, 5, 3, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DecadeTableComponent_tr_3_td_2_ng_container_3_Template, 5, 7, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cell_r9 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", cell_r9.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", cell_r9.classMap);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx_r7.prefixCls);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "ant-picker");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "ant-picker-calendar");
        }
      }

      function DecadeTableComponent_tr_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DecadeTableComponent_tr_3_td_1_Template, 2, 4, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DecadeTableComponent_tr_3_td_2_Template, 4, 5, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r5 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", row_r5.classMap);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r5.weekNum);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", row_r5.dateCells)("ngForTrackBy", ctx_r1.trackByBodyColumn);
        }
      }

      function MonthHeaderComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MonthHeaderComponent_ng_container_6_Template_button_click_1_listener() {
            var selector_r1 = ctx.$implicit;
            return selector_r1.onClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var selector_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](selector_r1.className);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", selector_r1.title || null);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", selector_r1.label, " ");
        }
      }

      function MonthTableComponent_thead_1_th_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "th", 6);
        }
      }

      function MonthTableComponent_thead_1_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cell_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", cell_r4.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cell_r4.content, " ");
        }
      }

      function MonthTableComponent_thead_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MonthTableComponent_thead_1_th_2_Template, 1, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MonthTableComponent_thead_1_th_3_Template, 2, 2, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.showWeek);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.headRow);
        }
      }

      function MonthTableComponent_tr_3_td_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r6.prefixCls, "-cell-week");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r5.weekNum, " ");
        }
      }

      function MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
        }
      }

      function MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c6, cell_r9.value));
        }
      }

      function MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", cell_r9.cellRender, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        }
      }

      function MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r14.prefixCls, "-cell-inner");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-selected", cell_r9.isSelected)("aria-disabled", cell_r9.isDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cell_r9.content, " ");
        }
      }

      function MonthTableComponent_tr_3_td_2_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](1, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template, 3, 6, "ng-container", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", ctx_r10.isTemplateRef(cell_r9.cellRender));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", ctx_r10.isNonEmptyString(cell_r9.cellRender));
        }
      }

      function MonthTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
        }
      }

      function MonthTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MonthTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.fullCellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c6, cell_r9.value));
        }
      }

      function MonthTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
        }
      }

      function MonthTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MonthTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r22.prefixCls, "-date-value");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cell_r9.content);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r22.prefixCls, "-date-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c6, cell_r9.value));
        }
      }

      function MonthTableComponent_tr_3_td_2_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MonthTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template, 2, 4, "ng-container", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MonthTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template, 4, 11, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);

          var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r11.prefixCls, "-date ant-picker-cell-inner");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-picker-calendar-date-today", cell_r9.isToday);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", cell_r9.fullCellRender)("ngIfElse", _r21);
        }
      }

      function MonthTableComponent_tr_3_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MonthTableComponent_tr_3_td_2_Template_td_click_0_listener() {
            var cell_r9 = ctx.$implicit;
            return cell_r9.isDisabled ? null : cell_r9.onClick();
          })("mouseenter", function MonthTableComponent_tr_3_td_2_Template_td_mouseenter_0_listener() {
            var cell_r9 = ctx.$implicit;
            return cell_r9.onMouseEnter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](1, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MonthTableComponent_tr_3_td_2_ng_container_2_Template, 5, 3, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MonthTableComponent_tr_3_td_2_ng_container_3_Template, 5, 7, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cell_r9 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", cell_r9.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", cell_r9.classMap);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx_r7.prefixCls);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "ant-picker");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "ant-picker-calendar");
        }
      }

      function MonthTableComponent_tr_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MonthTableComponent_tr_3_td_1_Template, 2, 4, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MonthTableComponent_tr_3_td_2_Template, 4, 5, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r5 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", row_r5.classMap);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r5.weekNum);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", row_r5.dateCells)("ngForTrackBy", ctx_r1.trackByBodyColumn);
        }
      }

      function YearHeaderComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function YearHeaderComponent_ng_container_6_Template_button_click_1_listener() {
            var selector_r1 = ctx.$implicit;
            return selector_r1.onClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var selector_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](selector_r1.className);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", selector_r1.title || null);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", selector_r1.label, " ");
        }
      }

      function YearTableComponent_thead_1_th_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "th", 6);
        }
      }

      function YearTableComponent_thead_1_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cell_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", cell_r4.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cell_r4.content, " ");
        }
      }

      function YearTableComponent_thead_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, YearTableComponent_thead_1_th_2_Template, 1, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, YearTableComponent_thead_1_th_3_Template, 2, 2, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.showWeek);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.headRow);
        }
      }

      function YearTableComponent_tr_3_td_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r6.prefixCls, "-cell-week");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r5.weekNum, " ");
        }
      }

      function YearTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
        }
      }

      function YearTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, YearTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c6, cell_r9.value));
        }
      }

      function YearTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", cell_r9.cellRender, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        }
      }

      function YearTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r14.prefixCls, "-cell-inner");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-selected", cell_r9.isSelected)("aria-disabled", cell_r9.isDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cell_r9.content, " ");
        }
      }

      function YearTableComponent_tr_3_td_2_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](1, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, YearTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, YearTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, YearTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template, 3, 6, "ng-container", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", ctx_r10.isTemplateRef(cell_r9.cellRender));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", ctx_r10.isNonEmptyString(cell_r9.cellRender));
        }
      }

      function YearTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
        }
      }

      function YearTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, YearTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.fullCellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c6, cell_r9.value));
        }
      }

      function YearTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
        }
      }

      function YearTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, YearTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r22.prefixCls, "-date-value");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cell_r9.content);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r22.prefixCls, "-date-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c6, cell_r9.value));
        }
      }

      function YearTableComponent_tr_3_td_2_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, YearTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template, 2, 4, "ng-container", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, YearTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template, 4, 11, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);

          var cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx_r11.prefixCls, "-date ant-picker-cell-inner");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-picker-calendar-date-today", cell_r9.isToday);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", cell_r9.fullCellRender)("ngIfElse", _r21);
        }
      }

      function YearTableComponent_tr_3_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function YearTableComponent_tr_3_td_2_Template_td_click_0_listener() {
            var cell_r9 = ctx.$implicit;
            return cell_r9.isDisabled ? null : cell_r9.onClick();
          })("mouseenter", function YearTableComponent_tr_3_td_2_Template_td_mouseenter_0_listener() {
            var cell_r9 = ctx.$implicit;
            return cell_r9.onMouseEnter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](1, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, YearTableComponent_tr_3_td_2_ng_container_2_Template, 5, 3, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, YearTableComponent_tr_3_td_2_ng_container_3_Template, 5, 7, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cell_r9 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", cell_r9.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", cell_r9.classMap);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx_r7.prefixCls);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "ant-picker");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "ant-picker-calendar");
        }
      }

      function YearTableComponent_tr_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, YearTableComponent_tr_3_td_1_Template, 2, 4, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, YearTableComponent_tr_3_td_2_Template, 4, 5, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r5 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", row_r5.classMap);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", row_r5.weekNum);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", row_r5.dateCells)("ngForTrackBy", ctx_r1.trackByBodyColumn);
        }
      }

      var PREFIX_CLASS = 'ant-picker';
      var defaultDisabledTime = {
        nzDisabledHours: function nzDisabledHours() {
          return [];
        },
        nzDisabledMinutes: function nzDisabledMinutes() {
          return [];
        },
        nzDisabledSeconds: function nzDisabledSeconds() {
          return [];
        }
      };

      function getTimeConfig(value, disabledTime) {
        var disabledTimeConfig = disabledTime ? disabledTime(value && value.nativeDate) : {};
        disabledTimeConfig = Object.assign(Object.assign({}, defaultDisabledTime), disabledTimeConfig);
        return disabledTimeConfig;
      }

      function isTimeValidByConfig(value, disabledTimeConfig) {
        var invalidTime = false;

        if (value) {
          var hour = value.getHours();
          var minutes = value.getMinutes();
          var seconds = value.getSeconds();
          var disabledHours = disabledTimeConfig.nzDisabledHours();

          if (disabledHours.indexOf(hour) === -1) {
            var disabledMinutes = disabledTimeConfig.nzDisabledMinutes(hour);

            if (disabledMinutes.indexOf(minutes) === -1) {
              var disabledSeconds = disabledTimeConfig.nzDisabledSeconds(hour, minutes);
              invalidTime = disabledSeconds.indexOf(seconds) !== -1;
            } else {
              invalidTime = true;
            }
          } else {
            invalidTime = true;
          }
        }

        return !invalidTime;
      }

      function isTimeValid(value, disabledTime) {
        var disabledTimeConfig = getTimeConfig(value, disabledTime);
        return isTimeValidByConfig(value, disabledTimeConfig);
      }

      function isAllowedDate(value, disabledDate, disabledTime) {
        if (!value) {
          return false;
        }

        if (disabledDate) {
          if (disabledDate(value.nativeDate)) {
            return false;
          }
        }

        if (disabledTime) {
          if (!isTimeValid(value, disabledTime)) {
            return false;
          }
        }

        return true;
      }
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      /**
       * Compatible translate the moment-like format pattern to angular's pattern
       * Why? For now, we need to support the existing language formats in AntD, and AntD uses the default temporal syntax.
       *
       * TODO: compare and complete all format patterns
       * Each format docs as below:
       * @link https://momentjs.com/docs/#/displaying/format/
       * @link https://angular.io/api/common/DatePipe#description
       * @param format input format pattern
       */


      function transCompatFormat(format) {
        return format && format.replace(/Y/g, 'y') // only support y, yy, yyy, yyyy
        .replace(/D/g, 'd'); // d, dd represent of D, DD for momentjs, others are not support
      }
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var CalendarFooterComponent = /*#__PURE__*/function () {
        function CalendarFooterComponent(dateHelper) {
          _classCallCheck(this, CalendarFooterComponent);

          this.dateHelper = dateHelper;
          this.showToday = false;
          this.showNow = false;
          this.hasTimePicker = false;
          this.isRange = false;
          this.okDisabled = false;
          this.rangeQuickSelector = null;
          this.clickOk = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.clickToday = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.prefixCls = PREFIX_CLASS;
          this.isTemplateRef = ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["isTemplateRef"];
          this.isNonEmptyString = ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["isNonEmptyString"];
          this.isTodayDisabled = false;
          this.todayTitle = '';
        }

        _createClass(CalendarFooterComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var now = new Date();

            if (changes.disabledDate) {
              this.isTodayDisabled = !!(this.disabledDate && this.disabledDate(now));
            }

            if (changes.locale) {
              // NOTE: Compat for DatePipe formatting rules
              var dateFormat = transCompatFormat(this.locale.dateFormat);
              this.todayTitle = this.dateHelper.format(now, dateFormat);
            }
          }
        }, {
          key: "onClickToday",
          value: function onClickToday() {
            var now = new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_11__["CandyDate"]();
            this.clickToday.emit(now.clone()); // To prevent the "now" being modified from outside, we use clone
          }
        }]);

        return CalendarFooterComponent;
      }();

      CalendarFooterComponent.ɵfac = function CalendarFooterComponent_Factory(t) {
        return new (t || CalendarFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["DateHelperService"]));
      };

      CalendarFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: CalendarFooterComponent,
        selectors: [["calendar-footer"]],
        inputs: {
          showToday: "showToday",
          showNow: "showNow",
          hasTimePicker: "hasTimePicker",
          isRange: "isRange",
          okDisabled: "okDisabled",
          rangeQuickSelector: "rangeQuickSelector",
          locale: "locale",
          disabledDate: "disabledDate",
          extraFooter: "extraFooter"
        },
        outputs: {
          clickOk: "clickOk",
          clickToday: "clickToday"
        },
        exportAs: ["calendarFooter"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
        decls: 4,
        vars: 6,
        consts: [[3, "class", 4, "ngIf"], ["role", "button", 3, "class", "title", "click", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngTemplateOutlet"], [3, "innerHTML"], ["role", "button", 3, "title", "click"], [3, "click"], ["nz-button", "", "type", "button", "nzType", "primary", "nzSize", "small", 3, "disabled", "click"]],
        template: function CalendarFooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CalendarFooterComponent_div_1_Template, 4, 6, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CalendarFooterComponent_a_2_Template, 2, 6, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CalendarFooterComponent_ul_3_Template, 4, 6, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.extraFooter);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showToday);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasTimePicker || ctx.rangeQuickSelector);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_22__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_23__["ɵNzTransitionPatchDirective"]],
        encapsulation: 2,
        changeDetection: 0
      });

      CalendarFooterComponent.ctorParameters = function () {
        return [{
          type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["DateHelperService"]
        }];
      };

      CalendarFooterComponent.propDecorators = {
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        showToday: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        showNow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        hasTimePicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        isRange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        okDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        disabledDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        extraFooter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        rangeQuickSelector: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        clickOk: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        clickToday: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var DatePickerService = /*#__PURE__*/function () {
        function DatePickerService() {
          _classCallCheck(this, DatePickerService);

          this.activeInput = 'left';
          this.arrowLeft = 0;
          this.isRange = false;
          this.valueChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["ReplaySubject"](1);
          this.emitValue$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();
          this.inputPartChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();
        }

        _createClass(DatePickerService, [{
          key: "initValue",
          value: function initValue() {
            var reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (reset) {
              this.initialValue = this.isRange ? [] : null;
            }

            this.setValue(this.initialValue);
          }
        }, {
          key: "hasValue",
          value: function hasValue() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;

            if (Array.isArray(value)) {
              return !!value[0] || !!value[1];
            } else {
              return !!value;
            }
          }
        }, {
          key: "makeValue",
          value: function makeValue(value) {
            if (this.isRange) {
              return value ? value.map(function (val) {
                return new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_11__["CandyDate"](val);
              }) : [];
            } else {
              return value ? new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_11__["CandyDate"](value) : null;
            }
          }
        }, {
          key: "setActiveDate",
          value: function setActiveDate(value) {
            var hasTimePicker = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'month';
            var parentPanels = {
              date: 'month',
              month: 'year',
              year: 'decade'
            };

            if (this.isRange) {
              this.activeDate = Object(ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_11__["normalizeRangeValue"])(value, hasTimePicker, parentPanels[mode], this.activeInput);
            } else {
              this.activeDate = Object(ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_11__["cloneDate"])(value);
            }
          }
        }, {
          key: "setValue",
          value: function setValue(value) {
            this.value = value;
            this.valueChange$.next(this.value);
          }
        }, {
          key: "getActiveIndex",
          value: function getActiveIndex() {
            var part = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.activeInput;
            return {
              left: 0,
              right: 1
            }[part];
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.valueChange$.complete();
            this.emitValue$.complete();
            this.inputPartChange$.complete();
          }
        }]);

        return DatePickerService;
      }();

      DatePickerService.ɵfac = function DatePickerService_Factory(t) {
        return new (t || DatePickerService)();
      };

      DatePickerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: DatePickerService,
        factory: DatePickerService.ɵfac
      });
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var DateRangePopupComponent = /*#__PURE__*/function () {
        function DateRangePopupComponent(datePickerService, cdr) {
          var _this = this;

          _classCallCheck(this, DateRangePopupComponent);

          this.datePickerService = datePickerService;
          this.cdr = cdr;
          this.inline = false;
          this.dir = 'ltr';
          this.panelModeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.calendarChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.resultOk = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](); // Emitted when done with date selecting

          this.prefixCls = PREFIX_CLASS;
          this.endPanelMode = 'date';
          this.timeOptions = null;
          this.hoverValue = []; // Range ONLY

          this.checkedPartArr = [false, false];
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();

          this.disabledStartTime = function (value) {
            return _this.disabledTime && _this.disabledTime(value, 'start');
          };

          this.disabledEndTime = function (value) {
            return _this.disabledTime && _this.disabledTime(value, 'end');
          };
        }

        _createClass(DateRangePopupComponent, [{
          key: "hasTimePicker",
          get: function get() {
            return !!this.showTime;
          }
        }, {
          key: "hasFooter",
          get: function get() {
            return this.showToday || this.hasTimePicker || !!this.extraFooter || !!this.ranges;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["merge"])(this.datePickerService.valueChange$, this.datePickerService.inputPartChange$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe(function () {
              _this2.updateActiveDate();

              _this2.cdr.markForCheck();
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            // Parse showTime options
            if (changes.showTime || changes.disabledTime) {
              if (this.showTime) {
                this.buildTimeOptions();
              }
            }

            if (changes.panelMode) {
              this.endPanelMode = this.panelMode;
            }

            if (changes.defaultPickerValue) {
              this.updateActiveDate();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }, {
          key: "updateActiveDate",
          value: function updateActiveDate() {
            var activeDate = this.datePickerService.hasValue() ? this.datePickerService.value : this.datePickerService.makeValue(this.defaultPickerValue);
            this.datePickerService.setActiveDate(activeDate, this.hasTimePicker, this.getPanelMode(this.endPanelMode));
          }
          /**
           * Prevent input losing focus when click panel
           * @param event
           */

        }, {
          key: "onMousedown",
          value: function onMousedown(event) {
            event.preventDefault();
          }
        }, {
          key: "onClickOk",
          value: function onClickOk() {
            var inputIndex = {
              left: 0,
              right: 1
            }[this.datePickerService.activeInput];
            var value = this.isRange ? this.datePickerService.value[inputIndex] : this.datePickerService.value;
            this.changeValueFromSelect(value);
            this.resultOk.emit();
          }
        }, {
          key: "onClickToday",
          value: function onClickToday(value) {
            this.changeValueFromSelect(value, !this.showTime);
          }
        }, {
          key: "onCellHover",
          value: function onCellHover(value) {
            if (!this.isRange) {
              return;
            }

            var otherInputIndex = {
              left: 1,
              right: 0
            }[this.datePickerService.activeInput];
            var base = this.datePickerService.value[otherInputIndex];

            if (base) {
              if (base.isBeforeDay(value)) {
                this.hoverValue = [base, value];
              } else {
                this.hoverValue = [value, base];
              }
            }
          }
        }, {
          key: "onPanelModeChange",
          value: function onPanelModeChange(mode, partType) {
            if (this.isRange) {
              var index = this.datePickerService.getActiveIndex(partType);

              if (index === 0) {
                this.panelMode = [mode, this.panelMode[1]];
              } else {
                this.panelMode = [this.panelMode[0], mode];
              }
            } else {
              this.panelMode = mode;
            }

            this.panelModeChange.emit(this.panelMode);
          }
        }, {
          key: "onActiveDateChange",
          value: function onActiveDateChange(value, partType) {
            if (this.isRange) {
              var activeDate = [];
              activeDate[this.datePickerService.getActiveIndex(partType)] = value;
              this.datePickerService.setActiveDate(activeDate, this.hasTimePicker, this.getPanelMode(this.endPanelMode, partType));
            } else {
              this.datePickerService.setActiveDate(value);
            }
          }
        }, {
          key: "onSelectTime",
          value: function onSelectTime(value, partType) {
            if (this.isRange) {
              var newValue = Object(ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_11__["cloneDate"])(this.datePickerService.value);
              var index = this.datePickerService.getActiveIndex(partType);
              newValue[index] = this.overrideHms(value, newValue[index]);
              this.datePickerService.setValue(newValue);
            } else {
              var _newValue = this.overrideHms(value, this.datePickerService.value);

              this.datePickerService.setValue(_newValue); // If not select a date currently, use today
            }

            this.datePickerService.inputPartChange$.next();
            this.buildTimeOptions();
          }
        }, {
          key: "changeValueFromSelect",
          value: function changeValueFromSelect(value) {
            var emitValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (this.isRange) {
              var selectedValue = Object(ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_11__["cloneDate"])(this.datePickerService.value);
              var checkedPart = this.datePickerService.activeInput;
              var nextPart = checkedPart;
              selectedValue[this.datePickerService.getActiveIndex(checkedPart)] = value;
              this.checkedPartArr[this.datePickerService.getActiveIndex(checkedPart)] = true;
              this.hoverValue = selectedValue;

              if (emitValue) {
                if (this.inline) {
                  // For UE, Should always be reversed, and clear vaue when next part is right
                  nextPart = this.reversedPart(checkedPart);

                  if (nextPart === 'right') {
                    selectedValue[this.datePickerService.getActiveIndex(nextPart)] = null;
                    this.checkedPartArr[this.datePickerService.getActiveIndex(nextPart)] = false;
                  }

                  this.datePickerService.setValue(selectedValue);
                  this.calendarChange.emit(selectedValue);

                  if (this.isBothAllowed(selectedValue) && this.checkedPartArr[0] && this.checkedPartArr[1]) {
                    this.clearHoverValue();
                    this.datePickerService.emitValue$.next();
                  }
                } else {
                  /**
                   * if sort order is wrong, clear the other part's value
                   */
                  if (Object(ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_11__["wrongSortOrder"])(selectedValue)) {
                    nextPart = this.reversedPart(checkedPart);
                    selectedValue[this.datePickerService.getActiveIndex(nextPart)] = null;
                    this.checkedPartArr[this.datePickerService.getActiveIndex(nextPart)] = false;
                  }

                  this.datePickerService.setValue(selectedValue);
                  /**
                   * range date usually selected paired,
                   * so we emit the date value only both date is allowed and both part are checked
                   */

                  if (this.isBothAllowed(selectedValue) && this.checkedPartArr[0] && this.checkedPartArr[1]) {
                    this.calendarChange.emit(selectedValue);
                    this.clearHoverValue();
                    this.datePickerService.emitValue$.next();
                  } else if (this.isAllowed(selectedValue)) {
                    nextPart = this.reversedPart(checkedPart);
                    this.calendarChange.emit([value.clone()]);
                  }
                }
              } else {
                this.datePickerService.setValue(selectedValue);
              }

              this.datePickerService.inputPartChange$.next(nextPart);
            } else {
              this.datePickerService.setValue(value);
              this.datePickerService.inputPartChange$.next();

              if (emitValue && this.isAllowed(value)) {
                this.datePickerService.emitValue$.next();
              }
            }
          }
        }, {
          key: "reversedPart",
          value: function reversedPart(part) {
            return part === 'left' ? 'right' : 'left';
          }
        }, {
          key: "getPanelMode",
          value: function getPanelMode(panelMode, partType) {
            if (this.isRange) {
              return panelMode[this.datePickerService.getActiveIndex(partType)];
            } else {
              return panelMode;
            }
          } // Get single value or part value of a range

        }, {
          key: "getValue",
          value: function getValue(partType) {
            if (this.isRange) {
              return (this.datePickerService.value || [])[this.datePickerService.getActiveIndex(partType)];
            } else {
              return this.datePickerService.value;
            }
          }
        }, {
          key: "getActiveDate",
          value: function getActiveDate(partType) {
            if (this.isRange) {
              return this.datePickerService.activeDate[this.datePickerService.getActiveIndex(partType)];
            } else {
              return this.datePickerService.activeDate;
            }
          }
        }, {
          key: "isOneAllowed",
          value: function isOneAllowed(selectedValue) {
            var index = this.datePickerService.getActiveIndex();
            var disabledTimeArr = [this.disabledStartTime, this.disabledEndTime];
            return isAllowedDate(selectedValue[index], this.disabledDate, disabledTimeArr[index]);
          }
        }, {
          key: "isBothAllowed",
          value: function isBothAllowed(selectedValue) {
            return isAllowedDate(selectedValue[0], this.disabledDate, this.disabledStartTime) && isAllowedDate(selectedValue[1], this.disabledDate, this.disabledEndTime);
          }
        }, {
          key: "isAllowed",
          value: function isAllowed(value) {
            var isBoth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (this.isRange) {
              return isBoth ? this.isBothAllowed(value) : this.isOneAllowed(value);
            } else {
              return isAllowedDate(value, this.disabledDate, this.disabledTime);
            }
          }
        }, {
          key: "getTimeOptions",
          value: function getTimeOptions(partType) {
            if (this.showTime && this.timeOptions) {
              return this.timeOptions instanceof Array ? this.timeOptions[this.datePickerService.getActiveIndex(partType)] : this.timeOptions;
            }

            return null;
          }
        }, {
          key: "onClickPresetRange",
          value: function onClickPresetRange(val) {
            var value = typeof val === 'function' ? val() : val;

            if (value) {
              this.datePickerService.setValue([new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_11__["CandyDate"](value[0]), new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_11__["CandyDate"](value[1])]);
              this.datePickerService.emitValue$.next();
            }
          }
        }, {
          key: "onPresetRangeMouseLeave",
          value: function onPresetRangeMouseLeave() {
            this.clearHoverValue();
          }
        }, {
          key: "onHoverPresetRange",
          value: function onHoverPresetRange(val) {
            if (typeof val !== 'function') {
              this.hoverValue = [new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_11__["CandyDate"](val[0]), new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_11__["CandyDate"](val[1])];
            }
          }
        }, {
          key: "getObjectKeys",
          value: function getObjectKeys(obj) {
            return obj ? Object.keys(obj) : [];
          }
        }, {
          key: "show",
          value: function show(partType) {
            var hide = this.showTime && this.isRange && this.datePickerService.activeInput !== partType;
            return !hide;
          }
        }, {
          key: "clearHoverValue",
          value: function clearHoverValue() {
            this.hoverValue = [];
          }
        }, {
          key: "buildTimeOptions",
          value: function buildTimeOptions() {
            if (this.showTime) {
              var showTime = typeof this.showTime === 'object' ? this.showTime : {};

              if (this.isRange) {
                var value = this.datePickerService.value;
                this.timeOptions = [this.overrideTimeOptions(showTime, value[0], 'start'), this.overrideTimeOptions(showTime, value[1], 'end')];
              } else {
                this.timeOptions = this.overrideTimeOptions(showTime, this.datePickerService.value);
              }
            } else {
              this.timeOptions = null;
            }
          }
        }, {
          key: "overrideTimeOptions",
          value: function overrideTimeOptions(origin, value, partial) {
            var disabledTimeFn;

            if (partial) {
              disabledTimeFn = partial === 'start' ? this.disabledStartTime : this.disabledEndTime;
            } else {
              disabledTimeFn = this.disabledTime;
            }

            return Object.assign(Object.assign({}, origin), getTimeConfig(value, disabledTimeFn));
          }
        }, {
          key: "overrideHms",
          value: function overrideHms(newValue, oldValue) {
            // tslint:disable-next-line:no-parameter-reassignment
            newValue = newValue || new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_11__["CandyDate"](); // tslint:disable-next-line:no-parameter-reassignment

            oldValue = oldValue || new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_11__["CandyDate"]();
            return oldValue.setHms(newValue.getHours(), newValue.getMinutes(), newValue.getSeconds());
          }
        }]);

        return DateRangePopupComponent;
      }();

      DateRangePopupComponent.ɵfac = function DateRangePopupComponent_Factory(t) {
        return new (t || DateRangePopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](DatePickerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]));
      };

      DateRangePopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: DateRangePopupComponent,
        selectors: [["date-range-popup"]],
        hostBindings: function DateRangePopupComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mousedown", function DateRangePopupComponent_mousedown_HostBindingHandler($event) {
              return ctx.onMousedown($event);
            });
          }
        },
        inputs: {
          inline: "inline",
          dir: "dir",
          panelMode: "panelMode",
          isRange: "isRange",
          showWeek: "showWeek",
          locale: "locale",
          disabledDate: "disabledDate",
          disabledTime: "disabledTime",
          showToday: "showToday",
          showNow: "showNow",
          showTime: "showTime",
          extraFooter: "extraFooter",
          ranges: "ranges",
          dateRender: "dateRender",
          defaultPickerValue: "defaultPickerValue"
        },
        outputs: {
          panelModeChange: "panelModeChange",
          calendarChange: "calendarChange",
          resultOk: "resultOk"
        },
        exportAs: ["dateRangePopup"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
        decls: 9,
        vars: 2,
        consts: [[4, "ngIf", "ngIfElse"], ["singlePanel", ""], ["tplInnerPopup", ""], ["tplFooter", ""], ["tplRangeQuickSelector", ""], ["noTimePicker", ""], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "-1"], [3, "showWeek", "endPanelMode", "partType", "locale", "showTimePicker", "timeOptions", "panelMode", "activeDate", "value", "disabledDate", "dateRender", "selectedValue", "hoverValue", "panelModeChange", "cellHover", "selectDate", "selectTime", "headerChange"], [3, "locale", "isRange", "showToday", "showNow", "hasTimePicker", "okDisabled", "extraFooter", "rangeQuickSelector", "clickOk", "clickToday", 4, "ngIf"], [3, "locale", "isRange", "showToday", "showNow", "hasTimePicker", "okDisabled", "extraFooter", "rangeQuickSelector", "clickOk", "clickToday"], [3, "class", "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [3, "click", "mouseenter", "mouseleave"], [1, "ant-tag", "ant-tag-blue"]],
        template: function DateRangePopupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DateRangePopupComponent_ng_container_0_Template, 9, 18, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DateRangePopupComponent_ng_template_1_Template, 4, 13, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DateRangePopupComponent_ng_template_3_Template, 2, 18, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DateRangePopupComponent_ng_template_5_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, DateRangePopupComponent_ng_template_7_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isRange)("ngIfElse", _r1);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], InnerPopupComponent, CalendarFooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]];
        },
        encapsulation: 2,
        changeDetection: 0
      });

      DateRangePopupComponent.ctorParameters = function () {
        return [{
          type: DatePickerService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      DateRangePopupComponent.propDecorators = {
        isRange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        showWeek: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        disabledDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        disabledTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        showToday: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        showNow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        showTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        extraFooter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        ranges: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dateRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        panelMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        defaultPickerValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dir: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        panelModeChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        calendarChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        resultOk: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var POPUP_STYLE_PATCH = {
        position: 'relative'
      }; // Aim to override antd's style to support overlay's position strategy (position:absolute will cause it not working because the overlay can't get the height/width of it's content)

      var NZ_CONFIG_MODULE_NAME = 'datePicker';
      /**
       * The base picker for all common APIs
       */

      var NzDatePickerComponent = /*#__PURE__*/function () {
        // ------------------------------------------------------------------------
        // Input API End
        // ------------------------------------------------------------------------
        function NzDatePickerComponent(nzConfigService, datePickerService, i18n, cdr, renderer, elementRef, dateHelper, nzResizeObserver, platform, doc, directionality, noAnimation) {
          _classCallCheck(this, NzDatePickerComponent);

          this.nzConfigService = nzConfigService;
          this.datePickerService = datePickerService;
          this.i18n = i18n;
          this.cdr = cdr;
          this.renderer = renderer;
          this.elementRef = elementRef;
          this.dateHelper = dateHelper;
          this.nzResizeObserver = nzResizeObserver;
          this.platform = platform;
          this.directionality = directionality;
          this.noAnimation = noAnimation;
          this._nzModuleName = NZ_CONFIG_MODULE_NAME;
          this.isRange = false; // Indicate whether the value is a range value

          this.dir = 'ltr';
          this.panelMode = 'date';
          this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();
          this.isCustomPlaceHolder = false;
          this.isCustomFormat = false;
          this.showTime = false; // --- Common API

          this.nzAllowClear = true;
          this.nzAutoFocus = false;
          this.nzDisabled = false;
          this.nzBorderless = false;
          this.nzInputReadOnly = false;
          this.nzInline = false;
          this.nzPlaceHolder = '';
          this.nzPopupStyle = POPUP_STYLE_PATCH;
          this.nzSize = 'default';
          this.nzShowToday = true;
          this.nzMode = 'date';
          this.nzShowNow = true;
          this.nzDefaultPickerValue = null;
          this.nzSeparator = undefined;
          this.nzSuffixIcon = 'calendar';
          this.nzBackdrop = false;
          this.nzId = null; // TODO(@wenqi73) The PanelMode need named for each pickers and export

          this.nzOnPanelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.nzOnCalendarChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.nzOnOk = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.nzOnOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.inputSize = 12;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__["Subject"]();
          this.prefixCls = PREFIX_CLASS;
          this.activeBarStyle = {};
          this.overlayOpen = false; // Available when "nzOpen" = undefined

          this.overlayPositions = [{
            offsetY: 2,
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top'
          }, {
            offsetY: -2,
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom'
          }, {
            offsetY: 2,
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top'
          }, {
            offsetY: -2,
            originX: 'end',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'bottom'
          }];
          this.currentPositionX = 'start';
          this.currentPositionY = 'bottom'; // ------------------------------------------------------------------------
          // | Control value accessor implements
          // ------------------------------------------------------------------------
          // NOTE: onChangeFn/onTouchedFn will not be assigned if user not use as ngModel

          this.onChangeFn = function () {
            return void 0;
          };

          this.onTouchedFn = function () {
            return void 0;
          };

          this.document = doc;
          this.origin = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["CdkOverlayOrigin"](this.elementRef);
        }

        _createClass(NzDatePickerComponent, [{
          key: "nzShowTime",
          get: function get() {
            return this.showTime;
          },
          set: function set(value) {
            this.showTime = typeof value === 'object' ? value : Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["toBoolean"])(value);
          }
        }, {
          key: "realOpenState",
          get: function get() {
            // The value that really decide the open state of overlay
            return this.isOpenHandledByUser() ? !!this.nzOpen : this.overlayOpen;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this3 = this;

            if (this.nzAutoFocus) {
              this.focus();
            }

            if (this.isRange && this.platform.isBrowser) {
              this.nzResizeObserver.observe(this.elementRef).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe(function () {
                _this3.updateInputWidthAndArrowLeft();
              });
            }

            this.datePickerService.inputPartChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe(function (partType) {
              if (partType) {
                _this3.datePickerService.activeInput = partType;
              }

              _this3.focus();

              _this3.updateInputWidthAndArrowLeft();
            });
          }
        }, {
          key: "updateInputWidthAndArrowLeft",
          value: function updateInputWidthAndArrowLeft() {
            var _a, _b, _c;

            this.inputWidth = ((_b = (_a = this.rangePickerInputs) === null || _a === void 0 ? void 0 : _a.first) === null || _b === void 0 ? void 0 : _b.nativeElement.offsetWidth) || 0;
            var baseStyle = {
              position: 'absolute',
              width: "".concat(this.inputWidth, "px")
            };
            this.datePickerService.arrowLeft = this.datePickerService.activeInput === 'left' ? 0 : this.inputWidth + ((_c = this.separatorElement) === null || _c === void 0 ? void 0 : _c.nativeElement.offsetWidth) || 0;

            if (this.dir === 'rtl') {
              this.activeBarStyle = Object.assign(Object.assign({}, baseStyle), {
                right: "".concat(this.datePickerService.arrowLeft, "px")
              });
            } else {
              this.activeBarStyle = Object.assign(Object.assign({}, baseStyle), {
                left: "".concat(this.datePickerService.arrowLeft, "px")
              });
            }

            this.cdr.markForCheck();
          }
        }, {
          key: "getInput",
          value: function getInput(partType) {
            var _a, _b;

            if (this.nzInline) {
              return undefined;
            }

            return this.isRange ? partType === 'left' ? (_a = this.rangePickerInputs) === null || _a === void 0 ? void 0 : _a.first.nativeElement : (_b = this.rangePickerInputs) === null || _b === void 0 ? void 0 : _b.last.nativeElement : this.pickerInput.nativeElement;
          }
        }, {
          key: "focus",
          value: function focus() {
            var activeInputElement = this.getInput(this.datePickerService.activeInput);

            if (this.document.activeElement !== activeInputElement) {
              activeInputElement === null || activeInputElement === void 0 ? void 0 : activeInputElement.focus();
            }
          }
        }, {
          key: "onFocus",
          value: function onFocus(event, partType) {
            event.preventDefault();

            if (partType) {
              this.datePickerService.inputPartChange$.next(partType);
            }

            this.renderClass(true);
          } // blur event has not the relatedTarget in IE11, use focusout instead.

        }, {
          key: "onFocusout",
          value: function onFocusout(event) {
            event.preventDefault();

            if (!this.elementRef.nativeElement.contains(event.relatedTarget)) {
              this.checkAndClose();
            }

            this.renderClass(false);
          } // Show overlay content

        }, {
          key: "open",
          value: function open() {
            if (this.nzInline) {
              return;
            }

            if (!this.realOpenState && !this.nzDisabled) {
              this.updateInputWidthAndArrowLeft();
              this.overlayOpen = true;
              this.nzOnOpenChange.emit(true);
              this.cdr.markForCheck();
            }
          }
        }, {
          key: "close",
          value: function close() {
            if (this.nzInline) {
              return;
            }

            if (this.realOpenState) {
              this.overlayOpen = false;
              this.nzOnOpenChange.emit(false);
            }
          }
        }, {
          key: "showClear",
          value: function showClear() {
            return !this.nzDisabled && !this.isEmptyValue(this.datePickerService.value) && this.nzAllowClear;
          }
        }, {
          key: "checkAndClose",
          value: function checkAndClose() {
            if (!this.realOpenState) {
              return;
            }

            if (this.panel.isAllowed(this.datePickerService.value, true)) {
              if (Array.isArray(this.datePickerService.value) && Object(ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_11__["wrongSortOrder"])(this.datePickerService.value)) {
                var index = this.datePickerService.getActiveIndex();
                var value = this.datePickerService.value[index];
                this.panel.changeValueFromSelect(value, true);
                return;
              }

              this.updateInputValue();
              this.datePickerService.emitValue$.next();
            } else {
              this.datePickerService.setValue(this.datePickerService.initialValue);
              this.close();
            }
          }
        }, {
          key: "onClickInputBox",
          value: function onClickInputBox(event) {
            event.stopPropagation();
            this.focus();

            if (!this.isOpenHandledByUser()) {
              this.open();
            }
          }
        }, {
          key: "onOverlayKeydown",
          value: function onOverlayKeydown(event) {
            if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_19__["ESCAPE"]) {
              this.datePickerService.initValue();
            }
          } // NOTE: A issue here, the first time position change, the animation will not be triggered.
          // Because the overlay's "positionChange" event is emitted after the content's full shown up.
          // All other components like "nz-dropdown" which depends on overlay also has the same issue.
          // See: https://github.com/NG-ZORRO/ng-zorro-antd/issues/1429

        }, {
          key: "onPositionChange",
          value: function onPositionChange(position) {
            this.currentPositionX = position.connectionPair.originX;
            this.currentPositionY = position.connectionPair.originY;
            this.cdr.detectChanges(); // Take side-effects to position styles
          }
        }, {
          key: "onClickClear",
          value: function onClickClear(event) {
            event.preventDefault();
            event.stopPropagation();
            this.datePickerService.initValue(true);
            this.datePickerService.emitValue$.next();
          }
        }, {
          key: "updateInputValue",
          value: function updateInputValue() {
            var _this4 = this;

            var newValue = this.datePickerService.value;

            if (this.isRange) {
              this.inputValue = newValue ? newValue.map(function (v) {
                return _this4.formatValue(v);
              }) : ['', ''];
            } else {
              this.inputValue = this.formatValue(newValue);
            }

            this.cdr.markForCheck();
          }
        }, {
          key: "formatValue",
          value: function formatValue(value) {
            return this.dateHelper.format(value && value.nativeDate, this.nzFormat);
          }
        }, {
          key: "onInputChange",
          value: function onInputChange(value) {
            var isEnter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            /**
             * in IE11 focus/blur will trigger ngModelChange if placeholder changes,
             * so we forbidden IE11 to open panel through input change
             */
            if (!this.platform.TRIDENT && this.document.activeElement === this.getInput(this.datePickerService.activeInput) && !this.realOpenState) {
              this.open();
              return;
            }

            var date = this.checkValidDate(value); // Can only change date when it's open

            if (date && this.realOpenState) {
              this.panel.changeValueFromSelect(date, isEnter);
            }
          }
        }, {
          key: "onKeyupEnter",
          value: function onKeyupEnter(event) {
            this.onInputChange(event.target.value, true);
          }
        }, {
          key: "checkValidDate",
          value: function checkValidDate(value) {
            var date = new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_11__["CandyDate"](this.dateHelper.parseDate(value, this.nzFormat));

            if (!date.isValid() || value !== this.dateHelper.format(date.nativeDate, this.nzFormat)) {
              return null;
            }

            return date;
          }
        }, {
          key: "getPlaceholder",
          value: function getPlaceholder(partType) {
            return this.isRange ? this.nzPlaceHolder[this.datePickerService.getActiveIndex(partType)] : this.nzPlaceHolder;
          }
        }, {
          key: "isEmptyValue",
          value: function isEmptyValue(value) {
            if (value === null) {
              return true;
            } else if (this.isRange) {
              return !value || !Array.isArray(value) || value.every(function (val) {
                return !val;
              });
            } else {
              return !value;
            }
          } // Whether open state is permanently controlled by user himself

        }, {
          key: "isOpenHandledByUser",
          value: function isOpenHandledByUser() {
            return this.nzOpen !== undefined;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            var _a; // Subscribe the every locale change if the nzLocale is not handled by user


            if (!this.nzLocale) {
              this.i18n.localeChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroyed$)).subscribe(function () {
                return _this5.setLocale();
              });
            } // Default value


            this.datePickerService.isRange = this.isRange;
            this.datePickerService.initValue(true);
            this.datePickerService.emitValue$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroyed$)).subscribe(function (_) {
              var _a, _b, _c, _d;

              var value = _this5.datePickerService.value;
              _this5.datePickerService.initialValue = Object(ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_11__["cloneDate"])(value);

              if (_this5.isRange) {
                var vAsRange = value;

                if (vAsRange.length) {
                  _this5.onChangeFn([(_b = (_a = vAsRange[0]) === null || _a === void 0 ? void 0 : _a.nativeDate) !== null && _b !== void 0 ? _b : null, (_d = (_c = vAsRange[1]) === null || _c === void 0 ? void 0 : _c.nativeDate) !== null && _d !== void 0 ? _d : null]);
                } else {
                  _this5.onChangeFn([]);
                }
              } else {
                if (value) {
                  _this5.onChangeFn(value.nativeDate);
                } else {
                  _this5.onChangeFn(null);
                }
              }

              _this5.onTouchedFn(); // When value emitted, overlay will be closed


              _this5.close();
            });
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroyed$)).subscribe(function (direction) {
              _this5.dir = direction;

              _this5.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
            this.inputValue = this.isRange ? ['', ''] : '';
            this.setModeAndFormat();
            this.datePickerService.valueChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["takeUntil"])(this.destroy$)).subscribe(function () {
              _this5.updateInputValue();
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _a, _b;

            if (changes.nzPopupStyle) {
              // Always assign the popup style patch
              this.nzPopupStyle = this.nzPopupStyle ? Object.assign(Object.assign({}, this.nzPopupStyle), POPUP_STYLE_PATCH) : POPUP_STYLE_PATCH;
            } // Mark as customized placeholder by user once nzPlaceHolder assigned at the first time


            if ((_a = changes.nzPlaceHolder) === null || _a === void 0 ? void 0 : _a.currentValue) {
              this.isCustomPlaceHolder = true;
            }

            if ((_b = changes.nzFormat) === null || _b === void 0 ? void 0 : _b.currentValue) {
              this.isCustomFormat = true;
            }

            if (changes.nzLocale) {
              // The nzLocale is currently handled by user
              this.setDefaultPlaceHolder();
            }

            if (changes.nzRenderExtraFooter) {
              this.extraFooter = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["valueFunctionProp"])(this.nzRenderExtraFooter);
            }

            if (changes.nzMode) {
              this.setDefaultPlaceHolder();
              this.setModeAndFormat();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed$.next();
            this.destroyed$.complete();
          }
        }, {
          key: "setModeAndFormat",
          value: function setModeAndFormat() {
            var inputFormats = {
              year: 'yyyy',
              month: 'yyyy-MM',
              week: this.i18n.getDateLocale() ? 'RRRR-II' : 'yyyy-ww',
              date: this.nzShowTime ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd'
            };

            if (!this.nzMode) {
              this.nzMode = 'date';
            }

            this.panelMode = this.isRange ? [this.nzMode, this.nzMode] : this.nzMode; // Default format when it's empty

            if (!this.isCustomFormat) {
              this.nzFormat = inputFormats[this.nzMode];
            }

            this.inputSize = Math.max(10, this.nzFormat.length) + 2;
            this.updateInputValue();
          }
          /**
           * Triggered when overlayOpen changes (different with realOpenState)
           * @param open The overlayOpen in picker component
           */

        }, {
          key: "onOpenChange",
          value: function onOpenChange(open) {
            this.nzOnOpenChange.emit(open);
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.setValue(value);
            this.cdr.markForCheck();
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChangeFn = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouchedFn = fn;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.nzDisabled = isDisabled;
            this.cdr.markForCheck();
          } // ------------------------------------------------------------------------
          // | Internal methods
          // ------------------------------------------------------------------------
          // Reload locale from i18n with side effects

        }, {
          key: "setLocale",
          value: function setLocale() {
            this.nzLocale = this.i18n.getLocaleData('DatePicker', {});
            this.setDefaultPlaceHolder();
            this.cdr.markForCheck();
          }
        }, {
          key: "setDefaultPlaceHolder",
          value: function setDefaultPlaceHolder() {
            if (!this.isCustomPlaceHolder && this.nzLocale) {
              var defaultPlaceholder = {
                year: this.getPropertyOfLocale('yearPlaceholder'),
                month: this.getPropertyOfLocale('monthPlaceholder'),
                week: this.getPropertyOfLocale('weekPlaceholder'),
                date: this.getPropertyOfLocale('placeholder')
              };
              var defaultRangePlaceholder = {
                year: this.getPropertyOfLocale('rangeYearPlaceholder'),
                month: this.getPropertyOfLocale('rangeMonthPlaceholder'),
                week: this.getPropertyOfLocale('rangeWeekPlaceholder'),
                date: this.getPropertyOfLocale('rangePlaceholder')
              };
              this.nzPlaceHolder = this.isRange ? defaultRangePlaceholder[this.nzMode] : defaultPlaceholder[this.nzMode];
            }
          }
        }, {
          key: "getPropertyOfLocale",
          value: function getPropertyOfLocale(type) {
            return this.nzLocale.lang[type] || this.i18n.getLocaleData("DatePicker.lang.".concat(type));
          } // Safe way of setting value with default

        }, {
          key: "setValue",
          value: function setValue(value) {
            var newValue = this.datePickerService.makeValue(value);
            this.datePickerService.setValue(newValue);
            this.datePickerService.initialValue = newValue;
          }
        }, {
          key: "renderClass",
          value: function renderClass(value) {
            // TODO: avoid autoFocus cause change after checked error
            if (value) {
              this.renderer.addClass(this.elementRef.nativeElement, 'ant-picker-focused');
            } else {
              this.renderer.removeClass(this.elementRef.nativeElement, 'ant-picker-focused');
            }
          }
        }, {
          key: "onPanelModeChange",
          value: function onPanelModeChange(panelMode) {
            this.nzOnPanelChange.emit(panelMode);
          } // Emit nzOnCalendarChange when select date by nz-range-picker

        }, {
          key: "onCalendarChange",
          value: function onCalendarChange(value) {
            if (this.isRange && Array.isArray(value)) {
              var rangeValue = value.filter(function (x) {
                return x instanceof ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_11__["CandyDate"];
              }).map(function (x) {
                return x.nativeDate;
              });
              this.nzOnCalendarChange.emit(rangeValue);
            }
          }
        }, {
          key: "onResultOk",
          value: function onResultOk() {
            var _a, _b;

            if (this.isRange) {
              var value = this.datePickerService.value;

              if (value.length) {
                this.nzOnOk.emit([((_a = value[0]) === null || _a === void 0 ? void 0 : _a.nativeDate) || null, ((_b = value[1]) === null || _b === void 0 ? void 0 : _b.nativeDate) || null]);
              } else {
                this.nzOnOk.emit([]);
              }
            } else {
              if (this.datePickerService.value) {
                this.nzOnOk.emit(this.datePickerService.value.nativeDate);
              } else {
                this.nzOnOk.emit(null);
              }
            }
          }
        }]);

        return NzDatePickerComponent;
      }();

      NzDatePickerComponent.ɵfac = function NzDatePickerComponent_Factory(t) {
        return new (t || NzDatePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_21__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](DatePickerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["NzI18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["DateHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_16__["NzResizeObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_6__["NzNoAnimationDirective"], 9));
      };

      NzDatePickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: NzDatePickerComponent,
        selectors: [["nz-date-picker"], ["nz-week-picker"], ["nz-month-picker"], ["nz-year-picker"], ["nz-range-picker"]],
        viewQuery: function NzDatePickerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["CdkConnectedOverlay"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](DateRangePopupComponent, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c3, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c4, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c5, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cdkConnectedOverlay = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.separatorElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.pickerInput = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.rangePickerInputs = _t);
          }
        },
        hostVars: 16,
        hostBindings: function NzDatePickerComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NzDatePickerComponent_click_HostBindingHandler($event) {
              return ctx.onClickInputBox($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-picker", true)("ant-picker-range", ctx.isRange)("ant-picker-large", ctx.nzSize === "large")("ant-picker-small", ctx.nzSize === "small")("ant-picker-disabled", ctx.nzDisabled)("ant-picker-rtl", ctx.dir === "rtl")("ant-picker-borderless", ctx.nzBorderless)("ant-picker-inline", ctx.nzInline);
          }
        },
        inputs: {
          nzAllowClear: "nzAllowClear",
          nzAutoFocus: "nzAutoFocus",
          nzDisabled: "nzDisabled",
          nzBorderless: "nzBorderless",
          nzInputReadOnly: "nzInputReadOnly",
          nzInline: "nzInline",
          nzPlaceHolder: "nzPlaceHolder",
          nzPopupStyle: "nzPopupStyle",
          nzSize: "nzSize",
          nzShowToday: "nzShowToday",
          nzMode: "nzMode",
          nzShowNow: "nzShowNow",
          nzDefaultPickerValue: "nzDefaultPickerValue",
          nzSeparator: "nzSeparator",
          nzSuffixIcon: "nzSuffixIcon",
          nzBackdrop: "nzBackdrop",
          nzId: "nzId",
          nzShowTime: "nzShowTime",
          nzFormat: "nzFormat",
          nzLocale: "nzLocale",
          nzOpen: "nzOpen",
          nzDisabledDate: "nzDisabledDate",
          nzDropdownClassName: "nzDropdownClassName",
          nzDateRender: "nzDateRender",
          nzDisabledTime: "nzDisabledTime",
          nzRenderExtraFooter: "nzRenderExtraFooter",
          nzRanges: "nzRanges"
        },
        outputs: {
          nzOnPanelChange: "nzOnPanelChange",
          nzOnCalendarChange: "nzOnCalendarChange",
          nzOnOk: "nzOnOk",
          nzOnOpenChange: "nzOnOpenChange"
        },
        exportAs: ["nzDatePicker"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([DatePickerService, {
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
          multi: true,
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
            return NzDatePickerComponent;
          })
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
        decls: 8,
        vars: 7,
        consts: [[4, "ngIf", "ngIfElse"], ["tplRangeInput", ""], ["tplRightRest", ""], ["inlineMode", ""], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayTransformOriginOn", "positionChange", "detach", "overlayKeydown"], [3, "class", 4, "ngIf"], [4, "ngIf"], [3, "disabled", "readOnly", "ngModel", "placeholder", "size", "ngModelChange", "focus", "focusout", "keyup.enter"], ["pickerInput", ""], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["separatorElement", ""], ["defaultSeparator", ""], ["nz-icon", "", "nzType", "swap-right", "nzTheme", "outline"], [3, "disabled", "readOnly", "size", "ngModel", "placeholder", "click", "focusout", "focus", "keyup.enter", "ngModelChange"], ["rangePickerInput", ""], [3, "ngStyle"], [3, "class", "click", 4, "ngIf"], [4, "nzStringTemplateOutlet"], [3, "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill"], ["nz-icon", "", 3, "nzType"], [1, "ant-picker-wrapper", 2, "position", "relative", 3, "nzNoAnimation"], [3, "isRange", "inline", "defaultPickerValue", "showWeek", "panelMode", "locale", "showToday", "showNow", "showTime", "dateRender", "disabledDate", "disabledTime", "extraFooter", "ranges", "dir", "panelModeChange", "calendarChange", "resultOk"]],
        template: function NzDatePickerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzDatePickerComponent_ng_container_0_Template, 3, 2, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzDatePickerComponent_ng_template_1_Template, 2, 5, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NzDatePickerComponent_ng_template_3_Template, 4, 9, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, NzDatePickerComponent_ng_template_5_Template, 3, 38, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, NzDatePickerComponent_ng_template_7_Template, 1, 1, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("positionChange", function NzDatePickerComponent_Template_ng_template_positionChange_7_listener($event) {
              return ctx.onPositionChange($event);
            })("detach", function NzDatePickerComponent_Template_ng_template_detach_7_listener() {
              return ctx.close();
            })("overlayKeydown", function NzDatePickerComponent_Template_ng_template_overlayKeydown_7_listener($event) {
              return ctx.onOverlayKeydown($event);
            });
          }

          if (rf & 2) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.nzInline)("ngIfElse", _r5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx.realOpenState)("cdkConnectedOverlayPositions", ctx.overlayPositions)("cdkConnectedOverlayTransformOriginOn", ".ant-picker-wrapper");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["CdkConnectedOverlay"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_8__["NzConnectedOverlayDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_23__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzStringTemplateOutletDirective"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_6__["NzNoAnimationDirective"], DateRangePopupComponent, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Dir"]],
        encapsulation: 2,
        data: {
          animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_15__["slideMotion"]]
        },
        changeDetection: 0
      });

      NzDatePickerComponent.ctorParameters = function () {
        return [{
          type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_21__["NzConfigService"]
        }, {
          type: DatePickerService
        }, {
          type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["NzI18nService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["DateHelperService"]
        }, {
          type: ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_16__["NzResizeObserver"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_6__["NzNoAnimationDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      };

      NzDatePickerComponent.propDecorators = {
        nzAllowClear: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzAutoFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzBorderless: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzInputReadOnly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzInline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzDisabledDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzLocale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzPlaceHolder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzPopupStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzDropdownClassName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzFormat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzDateRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzDisabledTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzRenderExtraFooter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzShowToday: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzShowNow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzRanges: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzDefaultPickerValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzSeparator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzSuffixIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzBackdrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        nzOnPanelChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        nzOnCalendarChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        nzOnOk: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        nzOnOpenChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        nzShowTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        cdkConnectedOverlay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["CdkConnectedOverlay"], {
            "static": false
          }]
        }],
        panel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [DateRangePopupComponent, {
            "static": false
          }]
        }],
        separatorElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['separatorElement', {
            "static": false
          }]
        }],
        pickerInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['pickerInput', {
            "static": false
          }]
        }],
        rangePickerInputs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
          args: ['rangePickerInput']
        }]
      };
      Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Boolean)], NzDatePickerComponent.prototype, "nzAllowClear", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Boolean)], NzDatePickerComponent.prototype, "nzAutoFocus", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Boolean)], NzDatePickerComponent.prototype, "nzDisabled", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Boolean)], NzDatePickerComponent.prototype, "nzBorderless", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Boolean)], NzDatePickerComponent.prototype, "nzInputReadOnly", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Boolean)], NzDatePickerComponent.prototype, "nzInline", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Boolean)], NzDatePickerComponent.prototype, "nzOpen", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Boolean)], NzDatePickerComponent.prototype, "nzShowToday", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Boolean)], NzDatePickerComponent.prototype, "nzShowNow", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_21__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", String)], NzDatePickerComponent.prototype, "nzSeparator", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_21__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Object)], NzDatePickerComponent.prototype, "nzSuffixIcon", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_21__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Object)], NzDatePickerComponent.prototype, "nzBackdrop", void 0);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CalendarFooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            // tslint:disable-next-line:component-selector
            selector: 'calendar-footer',
            exportAs: 'calendarFooter',
            template: "\n    <div class=\"{{ prefixCls }}-footer\">\n      <div *ngIf=\"extraFooter\" class=\"{{ prefixCls }}-footer-extra\">\n        <ng-container [ngSwitch]=\"true\">\n          <ng-container *ngSwitchCase=\"isTemplateRef(extraFooter)\">\n            <ng-container *ngTemplateOutlet=\"$any(extraFooter)\"></ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"isNonEmptyString(extraFooter)\">\n            <span [innerHTML]=\"extraFooter\"></span>\n          </ng-container>\n        </ng-container>\n      </div>\n      <a\n        *ngIf=\"showToday\"\n        class=\"{{ prefixCls }}-today-btn {{ isTodayDisabled ? prefixCls + '-today-btn-disabled' : '' }}\"\n        role=\"button\"\n        (click)=\"isTodayDisabled ? null : onClickToday()\"\n        title=\"{{ todayTitle }}\"\n      >\n        {{ locale.today }}\n      </a>\n      <ul *ngIf=\"hasTimePicker || rangeQuickSelector\" class=\"{{ prefixCls }}-ranges\">\n        <ng-container *ngTemplateOutlet=\"rangeQuickSelector\"></ng-container>\n        <li *ngIf=\"showNow\" class=\"{{ prefixCls }}-now\">\n          <a class=\"{{ prefixCls }}-now-btn\" (click)=\"isTodayDisabled ? null : onClickToday()\">\n            {{ locale.now }}\n          </a>\n        </li>\n        <li *ngIf=\"hasTimePicker\" class=\"{{ prefixCls }}-ok\">\n          <button\n            nz-button\n            type=\"button\"\n            nzType=\"primary\"\n            nzSize=\"small\"\n            [disabled]=\"okDisabled\"\n            (click)=\"okDisabled ? null : clickOk.emit()\"\n          >\n            {{ locale.ok }}\n          </button>\n        </li>\n      </ul>\n    </div>\n  "
          }]
        }], function () {
          return [{
            type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["DateHelperService"]
          }];
        }, {
          showToday: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          showNow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          hasTimePicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          isRange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          okDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          rangeQuickSelector: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          clickOk: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          clickToday: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          disabledDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          extraFooter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DatePickerService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DateRangePopupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            // tslint:disable-next-line:component-selector
            selector: 'date-range-popup',
            exportAs: 'dateRangePopup',
            template: "\n    <ng-container *ngIf=\"isRange; else singlePanel\">\n      <div class=\"{{ prefixCls }}-range-wrapper {{ prefixCls }}-date-range-wrapper\">\n        <div class=\"{{ prefixCls }}-range-arrow\" [style.left.px]=\"datePickerService?.arrowLeft\"></div>\n        <div class=\"{{ prefixCls }}-panel-container\">\n          <div class=\"{{ prefixCls }}-panels\">\n            <ng-container *ngIf=\"hasTimePicker; else noTimePicker\">\n              <ng-container *ngTemplateOutlet=\"tplInnerPopup; context: { partType: datePickerService.activeInput }\"></ng-container>\n            </ng-container>\n            <ng-template #noTimePicker>\n              <ng-container *ngTemplateOutlet=\"tplInnerPopup; context: { partType: 'left' }\"></ng-container>\n              <ng-container *ngTemplateOutlet=\"tplInnerPopup; context: { partType: 'right' }\"></ng-container>\n            </ng-template>\n          </div>\n          <ng-container *ngTemplateOutlet=\"tplFooter\"></ng-container>\n        </div>\n      </div>\n    </ng-container>\n    <ng-template #singlePanel>\n      <div\n        class=\"{{ prefixCls }}-panel-container {{ showWeek ? prefixCls + '-week-number' : '' }} {{\n          hasTimePicker ? prefixCls + '-time' : ''\n        }} {{ isRange ? prefixCls + '-range' : '' }}\"\n      >\n        <div class=\"{{ prefixCls }}-panel\" [class.ant-picker-panel-rtl]=\"dir === 'rtl'\" tabindex=\"-1\">\n          <!-- Single ONLY -->\n          <ng-container *ngTemplateOutlet=\"tplInnerPopup\"></ng-container>\n          <ng-container *ngTemplateOutlet=\"tplFooter\"></ng-container>\n        </div>\n      </div>\n    </ng-template>\n\n    <ng-template #tplInnerPopup let-partType=\"partType\">\n      <div class=\"{{ prefixCls }}-panel\" [class.ant-picker-panel-rtl]=\"dir === 'rtl'\">\n        <!-- TODO(@wenqi73) [selectedValue] [hoverValue] types-->\n        <inner-popup\n          [showWeek]=\"showWeek\"\n          [endPanelMode]=\"getPanelMode(endPanelMode, partType)\"\n          [partType]=\"partType\"\n          [locale]=\"locale!\"\n          [showTimePicker]=\"hasTimePicker\"\n          [timeOptions]=\"getTimeOptions(partType)\"\n          [panelMode]=\"getPanelMode(panelMode, partType)\"\n          (panelModeChange)=\"onPanelModeChange($event, partType)\"\n          [activeDate]=\"getActiveDate(partType)\"\n          [value]=\"getValue(partType)\"\n          [disabledDate]=\"disabledDate\"\n          [dateRender]=\"dateRender\"\n          [selectedValue]=\"$any(datePickerService?.value)\"\n          [hoverValue]=\"$any(hoverValue)\"\n          (cellHover)=\"onCellHover($event)\"\n          (selectDate)=\"changeValueFromSelect($event, !showTime)\"\n          (selectTime)=\"onSelectTime($event, partType)\"\n          (headerChange)=\"onActiveDateChange($event, partType)\"\n        ></inner-popup>\n      </div>\n    </ng-template>\n\n    <ng-template #tplFooter>\n      <calendar-footer\n        *ngIf=\"hasFooter\"\n        [locale]=\"locale!\"\n        [isRange]=\"isRange\"\n        [showToday]=\"showToday\"\n        [showNow]=\"showNow\"\n        [hasTimePicker]=\"hasTimePicker\"\n        [okDisabled]=\"!isAllowed($any(datePickerService?.value))\"\n        [extraFooter]=\"extraFooter\"\n        [rangeQuickSelector]=\"ranges ? tplRangeQuickSelector : null\"\n        (clickOk)=\"onClickOk()\"\n        (clickToday)=\"onClickToday($event)\"\n      ></calendar-footer>\n    </ng-template>\n\n    <!-- Range ONLY: Range Quick Selector -->\n    <ng-template #tplRangeQuickSelector>\n      <li\n        *ngFor=\"let name of getObjectKeys(ranges)\"\n        class=\"{{ prefixCls }}-preset\"\n        (click)=\"onClickPresetRange(ranges![name])\"\n        (mouseenter)=\"onHoverPresetRange(ranges![name])\"\n        (mouseleave)=\"onPresetRangeMouseLeave()\"\n      >\n        <span class=\"ant-tag ant-tag-blue\">{{ name }}</span>\n      </li>\n    </ng-template>\n  ",
            host: {
              '(mousedown)': 'onMousedown($event)'
            }
          }]
        }], function () {
          return [{
            type: DatePickerService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
          }];
        }, {
          inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          dir: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          panelModeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          calendarChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          resultOk: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          panelMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          isRange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          showWeek: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          disabledDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          disabledTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          showToday: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          showNow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          showTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          extraFooter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          ranges: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          dateRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          defaultPickerValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzDatePickerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            selector: 'nz-date-picker,nz-week-picker,nz-month-picker,nz-year-picker,nz-range-picker',
            exportAs: 'nzDatePicker',
            template: "\n    <ng-container *ngIf=\"!nzInline; else inlineMode\">\n      <!-- Content of single picker -->\n      <div *ngIf=\"!isRange\" class=\"{{ prefixCls }}-input\">\n        <input\n          #pickerInput\n          [attr.id]=\"nzId\"\n          [class.ant-input-disabled]=\"nzDisabled\"\n          [disabled]=\"nzDisabled\"\n          [readOnly]=\"nzInputReadOnly\"\n          [(ngModel)]=\"inputValue\"\n          placeholder=\"{{ getPlaceholder() }}\"\n          [size]=\"inputSize\"\n          (focus)=\"onFocus($event)\"\n          (focusout)=\"onFocusout($event)\"\n          (ngModelChange)=\"onInputChange($event)\"\n          (keyup.enter)=\"onKeyupEnter($event)\"\n        />\n        <ng-container *ngTemplateOutlet=\"tplRightRest\"></ng-container>\n      </div>\n\n      <!-- Content of range picker -->\n      <ng-container *ngIf=\"isRange\">\n        <div class=\"{{ prefixCls }}-input\">\n          <ng-container *ngTemplateOutlet=\"tplRangeInput; context: { partType: 'left' }\"></ng-container>\n        </div>\n        <div #separatorElement class=\"{{ prefixCls }}-range-separator\">\n          <span class=\"{{ prefixCls }}-separator\">\n            <ng-container *ngIf=\"nzSeparator; else defaultSeparator\">{{ nzSeparator }}</ng-container>\n          </span>\n          <ng-template #defaultSeparator>\n            <i nz-icon nzType=\"swap-right\" nzTheme=\"outline\"></i>\n          </ng-template>\n        </div>\n        <div class=\"{{ prefixCls }}-input\">\n          <ng-container *ngTemplateOutlet=\"tplRangeInput; context: { partType: 'right' }\"></ng-container>\n        </div>\n        <ng-container *ngTemplateOutlet=\"tplRightRest\"></ng-container>\n      </ng-container>\n    </ng-container>\n    <!-- Input for Range ONLY -->\n    <ng-template #tplRangeInput let-partType=\"partType\">\n      <input\n        #rangePickerInput\n        [disabled]=\"nzDisabled\"\n        [readOnly]=\"nzInputReadOnly\"\n        [size]=\"inputSize\"\n        (click)=\"onClickInputBox($event)\"\n        (focusout)=\"onFocusout($event)\"\n        (focus)=\"onFocus($event, partType)\"\n        (keyup.enter)=\"onKeyupEnter($event)\"\n        [(ngModel)]=\"inputValue[datePickerService.getActiveIndex(partType)]\"\n        (ngModelChange)=\"onInputChange($event)\"\n        placeholder=\"{{ getPlaceholder(partType) }}\"\n      />\n    </ng-template>\n\n    <!-- Right operator icons -->\n    <ng-template #tplRightRest>\n      <div class=\"{{ prefixCls }}-active-bar\" [ngStyle]=\"activeBarStyle\"></div>\n      <span *ngIf=\"showClear()\" class=\"{{ prefixCls }}-clear\" (click)=\"onClickClear($event)\">\n        <i nz-icon nzType=\"close-circle\" nzTheme=\"fill\"></i>\n      </span>\n      <span class=\"{{ prefixCls }}-suffix\">\n        <ng-container *nzStringTemplateOutlet=\"nzSuffixIcon; let suffixIcon\">\n          <i nz-icon [nzType]=\"suffixIcon\"></i>\n        </ng-container>\n      </span>\n    </ng-template>\n\n    <ng-template #inlineMode>\n      <div class=\"ant-picker-wrapper\" [nzNoAnimation]=\"!!noAnimation?.nzNoAnimation\" [@slideMotion]=\"'enter'\" style=\"position: relative;\">\n        <div\n          class=\"{{ prefixCls }}-dropdown {{ nzDropdownClassName }}\"\n          [class.ant-picker-dropdown-rtl]=\"dir === 'rtl'\"\n          [class.ant-picker-dropdown-placement-bottomLeft]=\"currentPositionY === 'bottom' && currentPositionX === 'start'\"\n          [class.ant-picker-dropdown-placement-topLeft]=\"currentPositionY === 'top' && currentPositionX === 'start'\"\n          [class.ant-picker-dropdown-placement-bottomRight]=\"currentPositionY === 'bottom' && currentPositionX === 'end'\"\n          [class.ant-picker-dropdown-placement-topRight]=\"currentPositionY === 'top' && currentPositionX === 'end'\"\n          [class.ant-picker-dropdown-range]=\"isRange\"\n          [class.ant-picker-active-left]=\"datePickerService.activeInput === 'left'\"\n          [class.ant-picker-active-right]=\"datePickerService.activeInput === 'right'\"\n          [ngStyle]=\"nzPopupStyle\"\n        >\n          <date-range-popup\n            [isRange]=\"isRange\"\n            [inline]=\"nzInline\"\n            [defaultPickerValue]=\"nzDefaultPickerValue\"\n            [showWeek]=\"nzMode === 'week'\"\n            [panelMode]=\"panelMode\"\n            (panelModeChange)=\"onPanelModeChange($event)\"\n            (calendarChange)=\"onCalendarChange($event)\"\n            [locale]=\"nzLocale?.lang!\"\n            [showToday]=\"nzMode === 'date' && nzShowToday && !isRange && !nzShowTime\"\n            [showNow]=\"nzMode === 'date' && nzShowNow && !isRange && !!nzShowTime\"\n            [showTime]=\"nzShowTime\"\n            [dateRender]=\"nzDateRender\"\n            [disabledDate]=\"nzDisabledDate\"\n            [disabledTime]=\"nzDisabledTime\"\n            [extraFooter]=\"extraFooter\"\n            [ranges]=\"nzRanges\"\n            [dir]=\"dir\"\n            (resultOk)=\"onResultOk()\"\n          ></date-range-popup>\n        </div>\n      </div>\n    </ng-template>\n\n    <!-- Overlay -->\n    <ng-template\n      cdkConnectedOverlay\n      nzConnectedOverlay\n      [cdkConnectedOverlayHasBackdrop]=\"nzBackdrop\"\n      [cdkConnectedOverlayOrigin]=\"origin\"\n      [cdkConnectedOverlayOpen]=\"realOpenState\"\n      [cdkConnectedOverlayPositions]=\"overlayPositions\"\n      [cdkConnectedOverlayTransformOriginOn]=\"'.ant-picker-wrapper'\"\n      (positionChange)=\"onPositionChange($event)\"\n      (detach)=\"close()\"\n      (overlayKeydown)=\"onOverlayKeydown($event)\"\n    >\n      <ng-container *ngTemplateOutlet=\"inlineMode\"></ng-container>\n    </ng-template>\n  ",
            host: {
              '[class.ant-picker]': "true",
              '[class.ant-picker-range]': "isRange",
              '[class.ant-picker-large]': "nzSize === 'large'",
              '[class.ant-picker-small]': "nzSize === 'small'",
              '[class.ant-picker-disabled]': "nzDisabled",
              '[class.ant-picker-rtl]': "dir === 'rtl'",
              '[class.ant-picker-borderless]': "nzBorderless",
              '[class.ant-picker-inline]': "nzInline",
              '(click)': 'onClickInputBox($event)'
            },
            providers: [DatePickerService, {
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
              multi: true,
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
                return NzDatePickerComponent;
              })
            }],
            animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_15__["slideMotion"]]
          }]
        }], function () {
          return [{
            type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_21__["NzConfigService"]
          }, {
            type: DatePickerService
          }, {
            type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["NzI18nService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["DateHelperService"]
          }, {
            type: ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_16__["NzResizeObserver"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_20__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }, {
            type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_6__["NzNoAnimationDirective"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }]
          }];
        }, {
          nzAllowClear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          nzAutoFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          nzBorderless: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          nzInputReadOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          nzInline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          nzPlaceHolder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          nzPopupStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          nzShowToday: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          nzMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          nzShowNow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          nzDefaultPickerValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          nzSeparator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          nzSuffixIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          nzBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          nzId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          nzOnPanelChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          nzOnCalendarChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          nzOnOk: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          nzOnOpenChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          nzShowTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          nzFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          nzLocale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          nzOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          nzDisabledDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          nzDropdownClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          nzDateRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          nzDisabledTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          nzRenderExtraFooter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          nzRanges: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          cdkConnectedOverlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["CdkConnectedOverlay"], {
              "static": false
            }]
          }],
          panel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [DateRangePopupComponent, {
              "static": false
            }]
          }],
          separatorElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['separatorElement', {
              "static": false
            }]
          }],
          pickerInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['pickerInput', {
              "static": false
            }]
          }],
          rangePickerInputs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
            args: ['rangePickerInput']
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var InnerPopupComponent = /*#__PURE__*/function () {
        function InnerPopupComponent() {
          _classCallCheck(this, InnerPopupComponent);

          this.panelModeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](); // TODO: name is not proper

          this.headerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](); // Emitted when user changed the header's value

          this.selectDate = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](); // Emitted when the date is selected by click the date panel

          this.selectTime = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.cellHover = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](); // Emitted when hover on a day by mouse enter

          this.prefixCls = PREFIX_CLASS;
        }
        /**
         * Hide "next" arrow in left panel,
         * hide "prev" arrow in right panel
         * @param direction
         * @param panelMode
         */


        _createClass(InnerPopupComponent, [{
          key: "enablePrevNext",
          value: function enablePrevNext(direction, panelMode) {
            if (!this.showTimePicker && panelMode === this.endPanelMode && (this.partType === 'left' && direction === 'next' || this.partType === 'right' && direction === 'prev')) {
              return false;
            }

            return true;
          }
        }, {
          key: "onSelectTime",
          value: function onSelectTime(date) {
            this.selectTime.emit(new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_11__["CandyDate"](date));
          } // The value real changed to outside

        }, {
          key: "onSelectDate",
          value: function onSelectDate(date) {
            var value = date instanceof ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_11__["CandyDate"] ? date : new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_11__["CandyDate"](date);
            var timeValue = this.timeOptions && this.timeOptions.nzDefaultOpenValue; // Display timeValue when value is null

            if (!this.value && timeValue) {
              value.setHms(timeValue.getHours(), timeValue.getMinutes(), timeValue.getSeconds());
            }

            this.selectDate.emit(value);
          }
        }, {
          key: "onChooseMonth",
          value: function onChooseMonth(value) {
            this.activeDate = this.activeDate.setMonth(value.getMonth());

            if (this.endPanelMode === 'month') {
              this.value = value;
              this.selectDate.emit(value);
            } else {
              this.headerChange.emit(value);
              this.panelModeChange.emit(this.endPanelMode);
            }
          }
        }, {
          key: "onChooseYear",
          value: function onChooseYear(value) {
            this.activeDate = this.activeDate.setYear(value.getYear());

            if (this.endPanelMode === 'year') {
              this.value = value;
              this.selectDate.emit(value);
            } else {
              this.headerChange.emit(value);
              this.panelModeChange.emit(this.endPanelMode);
            }
          }
        }, {
          key: "onChooseDecade",
          value: function onChooseDecade(value) {
            this.activeDate = this.activeDate.setYear(value.getYear());

            if (this.endPanelMode === 'decade') {
              this.value = value;
              this.selectDate.emit(value);
            } else {
              this.headerChange.emit(value);
              this.panelModeChange.emit('year');
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.activeDate && !changes.activeDate.currentValue) {
              this.activeDate = new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_11__["CandyDate"]();
            } // New Antd vesion has merged 'date' ant 'time' to one panel,
            // So there is not 'time' panel


            if (changes.panelMode && changes.panelMode.currentValue === 'time') {
              this.panelMode = 'date';
            }
          }
        }]);

        return InnerPopupComponent;
      }();

      InnerPopupComponent.ɵfac = function InnerPopupComponent_Factory(t) {
        return new (t || InnerPopupComponent)();
      };

      InnerPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: InnerPopupComponent,
        selectors: [["inner-popup"]],
        inputs: {
          activeDate: "activeDate",
          value: "value",
          panelMode: "panelMode",
          endPanelMode: "endPanelMode",
          showWeek: "showWeek",
          locale: "locale",
          showTimePicker: "showTimePicker",
          timeOptions: "timeOptions",
          disabledDate: "disabledDate",
          dateRender: "dateRender",
          selectedValue: "selectedValue",
          hoverValue: "hoverValue",
          partType: "partType"
        },
        outputs: {
          panelModeChange: "panelModeChange",
          headerChange: "headerChange",
          selectDate: "selectDate",
          selectTime: "selectTime",
          cellHover: "cellHover"
        },
        exportAs: ["innerPopup"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
        decls: 8,
        vars: 11,
        consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngIf"], [3, "value", "locale", "showSuperPreBtn", "showSuperNextBtn", "showNextBtn", "showPreBtn", "valueChange", "panelModeChange"], [3, "activeDate", "value", "locale", "disabledDate", "valueChange"], [3, "activeDate", "value", "locale", "disabledDate", "selectedValue", "hoverValue", "valueChange", "cellHover"], [3, "value", "activeDate", "locale", "disabledDate", "selectedValue", "hoverValue", "valueChange", "cellHover"], [3, "value", "locale", "showSuperPreBtn", "showSuperNextBtn", "showPreBtn", "showNextBtn", "valueChange", "panelModeChange"], [3, "locale", "showWeek", "value", "activeDate", "disabledDate", "cellRender", "selectedValue", "hoverValue", "valueChange", "cellHover"], [3, "nzInDatePicker", "ngModel", "format", "nzHourStep", "nzMinuteStep", "nzSecondStep", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzHideDisabledOptions", "nzDefaultOpenValue", "nzUse12Hours", "nzAddOn", "ngModelChange"]],
        template: function InnerPopupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, InnerPopupComponent_ng_container_3_Template, 4, 13, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, InnerPopupComponent_ng_container_4_Template, 4, 15, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, InnerPopupComponent_ng_container_5_Template, 4, 15, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, InnerPopupComponent_ng_container_6_Template, 4, 17, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, InnerPopupComponent_ng_container_7_Template, 2, 13, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-picker-datetime-panel", ctx.showTimePicker);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate2"]("", ctx.prefixCls, "-", ctx.panelMode, "-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx.panelMode);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "decade");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "year");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "month");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showTimePicker && ctx.timeOptions);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], DecadeHeaderComponent, DecadeTableComponent, YearHeaderComponent, YearTableComponent, MonthHeaderComponent, MonthTableComponent, DateHeaderComponent, DateTableComponent, ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_10__["NzTimePickerPanelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]];
        },
        encapsulation: 2,
        changeDetection: 0
      });
      InnerPopupComponent.propDecorators = {
        activeDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        endPanelMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        panelMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        showWeek: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        showTimePicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        timeOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        disabledDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dateRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        selectedValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        hoverValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        partType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        panelModeChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        headerChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        selectDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        selectTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        cellHover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](InnerPopupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            // tslint:disable-next-line:component-selector
            selector: 'inner-popup',
            exportAs: 'innerPopup',
            template: "\n    <div [class.ant-picker-datetime-panel]=\"showTimePicker\">\n      <div class=\"{{ prefixCls }}-{{ panelMode }}-panel\">\n        <ng-container [ngSwitch]=\"panelMode\">\n          <ng-container *ngSwitchCase=\"'decade'\">\n            <decade-header\n              [(value)]=\"activeDate\"\n              [locale]=\"locale\"\n              [showSuperPreBtn]=\"enablePrevNext('prev', 'decade')\"\n              [showSuperNextBtn]=\"enablePrevNext('next', 'decade')\"\n              [showNextBtn]=\"false\"\n              [showPreBtn]=\"false\"\n              (panelModeChange)=\"panelModeChange.emit($event)\"\n              (valueChange)=\"headerChange.emit($event)\"\n            ></decade-header>\n            <div class=\"{{ prefixCls }}-body\">\n              <decade-table\n                [activeDate]=\"activeDate\"\n                [value]=\"value\"\n                [locale]=\"locale\"\n                (valueChange)=\"onChooseDecade($event)\"\n                [disabledDate]=\"disabledDate\"\n              ></decade-table>\n            </div>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'year'\">\n            <year-header\n              [(value)]=\"activeDate\"\n              [locale]=\"locale\"\n              [showSuperPreBtn]=\"enablePrevNext('prev', 'year')\"\n              [showSuperNextBtn]=\"enablePrevNext('next', 'year')\"\n              [showNextBtn]=\"false\"\n              [showPreBtn]=\"false\"\n              (panelModeChange)=\"panelModeChange.emit($event)\"\n              (valueChange)=\"headerChange.emit($event)\"\n            ></year-header>\n            <div class=\"{{ prefixCls }}-body\">\n              <year-table\n                [activeDate]=\"activeDate\"\n                [value]=\"value\"\n                [locale]=\"locale\"\n                [disabledDate]=\"disabledDate\"\n                [selectedValue]=\"selectedValue\"\n                [hoverValue]=\"hoverValue\"\n                (valueChange)=\"onChooseYear($event)\"\n                (cellHover)=\"cellHover.emit($event)\"\n              ></year-table>\n            </div>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'month'\">\n            <month-header\n              [(value)]=\"activeDate\"\n              [locale]=\"locale\"\n              [showSuperPreBtn]=\"enablePrevNext('prev', 'month')\"\n              [showSuperNextBtn]=\"enablePrevNext('next', 'month')\"\n              [showNextBtn]=\"false\"\n              [showPreBtn]=\"false\"\n              (panelModeChange)=\"panelModeChange.emit($event)\"\n              (valueChange)=\"headerChange.emit($event)\"\n            ></month-header>\n            <div class=\"{{ prefixCls }}-body\">\n              <month-table\n                [value]=\"value\"\n                [activeDate]=\"activeDate\"\n                [locale]=\"locale\"\n                [disabledDate]=\"disabledDate\"\n                [selectedValue]=\"selectedValue\"\n                [hoverValue]=\"hoverValue\"\n                (valueChange)=\"onChooseMonth($event)\"\n                (cellHover)=\"cellHover.emit($event)\"\n              ></month-table>\n            </div>\n          </ng-container>\n\n          <ng-container *ngSwitchDefault>\n            <date-header\n              [(value)]=\"activeDate\"\n              [locale]=\"locale\"\n              [showSuperPreBtn]=\"showWeek ? enablePrevNext('prev', 'week') : enablePrevNext('prev', 'date')\"\n              [showSuperNextBtn]=\"showWeek ? enablePrevNext('next', 'week') : enablePrevNext('next', 'date')\"\n              [showPreBtn]=\"showWeek ? enablePrevNext('prev', 'week') : enablePrevNext('prev', 'date')\"\n              [showNextBtn]=\"showWeek ? enablePrevNext('next', 'week') : enablePrevNext('next', 'date')\"\n              (panelModeChange)=\"panelModeChange.emit($event)\"\n              (valueChange)=\"headerChange.emit($event)\"\n            ></date-header>\n            <div class=\"{{ prefixCls }}-body\">\n              <date-table\n                [locale]=\"locale\"\n                [showWeek]=\"showWeek\"\n                [value]=\"value\"\n                [activeDate]=\"activeDate\"\n                [disabledDate]=\"disabledDate\"\n                [cellRender]=\"dateRender\"\n                [selectedValue]=\"selectedValue\"\n                [hoverValue]=\"hoverValue\"\n                (valueChange)=\"onSelectDate($event)\"\n                (cellHover)=\"cellHover.emit($event)\"\n              ></date-table>\n            </div>\n          </ng-container>\n        </ng-container>\n      </div>\n      <ng-container *ngIf=\"showTimePicker && timeOptions\">\n        <nz-time-picker-panel\n          [nzInDatePicker]=\"true\"\n          [ngModel]=\"value?.nativeDate\"\n          (ngModelChange)=\"onSelectTime($event)\"\n          [format]=\"$any(timeOptions.nzFormat)\"\n          [nzHourStep]=\"$any(timeOptions.nzHourStep)\"\n          [nzMinuteStep]=\"$any(timeOptions.nzMinuteStep)\"\n          [nzSecondStep]=\"$any(timeOptions.nzSecondStep)\"\n          [nzDisabledHours]=\"$any(timeOptions.nzDisabledHours)\"\n          [nzDisabledMinutes]=\"$any(timeOptions.nzDisabledMinutes)\"\n          [nzDisabledSeconds]=\"$any(timeOptions.nzDisabledSeconds)\"\n          [nzHideDisabledOptions]=\"!!timeOptions.nzHideDisabledOptions\"\n          [nzDefaultOpenValue]=\"$any(timeOptions.nzDefaultOpenValue)\"\n          [nzUse12Hours]=\"!!timeOptions.nzUse12Hours\"\n          [nzAddOn]=\"$any(timeOptions.nzAddOn)\"\n        ></nz-time-picker-panel>\n        <!-- use [opened] to trigger time panel `initPosition()` -->\n      </ng-container>\n    </div>\n  "
          }]
        }], function () {
          return [];
        }, {
          panelModeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          headerChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          selectDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          selectTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          cellHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          activeDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          panelMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          endPanelMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          showWeek: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          showTimePicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          timeOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          disabledDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          dateRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          selectedValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          hoverValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          partType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */
      // tslint:disable-next-line:directive-class-suffix


      var AbstractPanelHeader = /*#__PURE__*/function () {
        function AbstractPanelHeader() {
          _classCallCheck(this, AbstractPanelHeader);

          this.prefixCls = "ant-picker-header";
          this.selectors = [];
          this.showSuperPreBtn = true;
          this.showSuperNextBtn = true;
          this.showPreBtn = true;
          this.showNextBtn = true;
          this.panelModeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }

        _createClass(AbstractPanelHeader, [{
          key: "superPreviousTitle",
          value: function superPreviousTitle() {
            return this.locale.previousYear;
          }
        }, {
          key: "previousTitle",
          value: function previousTitle() {
            return this.locale.previousMonth;
          }
        }, {
          key: "superNextTitle",
          value: function superNextTitle() {
            return this.locale.nextYear;
          }
        }, {
          key: "nextTitle",
          value: function nextTitle() {
            return this.locale.nextMonth;
          }
        }, {
          key: "superPrevious",
          value: function superPrevious() {
            this.changeValue(this.value.addYears(-1));
          }
        }, {
          key: "superNext",
          value: function superNext() {
            this.changeValue(this.value.addYears(1));
          }
        }, {
          key: "previous",
          value: function previous() {
            this.changeValue(this.value.addMonths(-1));
          }
        }, {
          key: "next",
          value: function next() {
            this.changeValue(this.value.addMonths(1));
          }
        }, {
          key: "changeValue",
          value: function changeValue(value) {
            if (this.value !== value) {
              this.value = value;
              this.valueChange.emit(this.value);
              this.render();
            }
          }
        }, {
          key: "changeMode",
          value: function changeMode(mode) {
            this.panelModeChange.emit(mode);
          }
        }, {
          key: "render",
          value: function render() {
            if (this.value) {
              this.selectors = this.getSelectors();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.value) {
              this.value = new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_11__["CandyDate"](); // Show today by default
            }

            this.selectors = this.getSelectors();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.value || changes.locale) {
              this.render();
            }
          }
        }]);

        return AbstractPanelHeader;
      }();

      AbstractPanelHeader.ɵfac = function AbstractPanelHeader_Factory(t) {
        return new (t || AbstractPanelHeader)();
      };

      AbstractPanelHeader.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: AbstractPanelHeader,
        inputs: {
          showSuperPreBtn: "showSuperPreBtn",
          showSuperNextBtn: "showSuperNextBtn",
          showPreBtn: "showPreBtn",
          showNextBtn: "showNextBtn",
          value: "value",
          locale: "locale"
        },
        outputs: {
          panelModeChange: "panelModeChange",
          valueChange: "valueChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
      });
      AbstractPanelHeader.propDecorators = {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        showSuperPreBtn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        showSuperNextBtn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        showPreBtn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        showNextBtn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        panelModeChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AbstractPanelHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"]
        }], function () {
          return [];
        }, {
          showSuperPreBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          showSuperNextBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          showPreBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          showNextBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          panelModeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var DateHeaderComponent = /*#__PURE__*/function (_AbstractPanelHeader) {
        _inherits(DateHeaderComponent, _AbstractPanelHeader);

        var _super = _createSuper(DateHeaderComponent);

        function DateHeaderComponent(dateHelper) {
          var _this6;

          _classCallCheck(this, DateHeaderComponent);

          _this6 = _super.call(this);
          _this6.dateHelper = dateHelper;
          return _this6;
        }

        _createClass(DateHeaderComponent, [{
          key: "getSelectors",
          value: function getSelectors() {
            var _this7 = this;

            return [{
              className: "".concat(this.prefixCls, "-year-btn"),
              title: this.locale.yearSelect,
              onClick: function onClick() {
                return _this7.changeMode('year');
              },
              label: this.dateHelper.format(this.value.nativeDate, transCompatFormat(this.locale.yearFormat))
            }, {
              className: "".concat(this.prefixCls, "-month-btn"),
              title: this.locale.monthSelect,
              onClick: function onClick() {
                return _this7.changeMode('month');
              },
              label: this.dateHelper.format(this.value.nativeDate, this.locale.monthFormat || 'MMM')
            }];
          }
        }]);

        return DateHeaderComponent;
      }(AbstractPanelHeader);

      DateHeaderComponent.ɵfac = function DateHeaderComponent_Factory(t) {
        return new (t || DateHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["DateHelperService"]));
      };

      DateHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: DateHeaderComponent,
        selectors: [["date-header"]],
        exportAs: ["dateHeader"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        decls: 11,
        vars: 31,
        consts: [["role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-super-prev-icon"], [1, "ant-picker-prev-icon"], [4, "ngFor", "ngForOf"], [1, "ant-picker-next-icon"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "title", "click"]],
        template: function DateHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DateHeaderComponent_Template_button_click_1_listener() {
              return ctx.superPrevious();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DateHeaderComponent_Template_button_click_3_listener() {
              return ctx.previous();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, DateHeaderComponent_ng_container_6_Template, 3, 5, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DateHeaderComponent_Template_button_click_7_listener() {
              return ctx.next();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DateHeaderComponent_Template_button_click_9_listener() {
              return ctx.superNext();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.prefixCls);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-super-prev-btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("visibility", ctx.showSuperPreBtn ? "visible" : "hidden");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", ctx.superPreviousTitle());

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-prev-btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("visibility", ctx.showPreBtn ? "visible" : "hidden");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", ctx.previousTitle());

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-view");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.selectors);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-next-btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("visibility", ctx.showNextBtn ? "visible" : "hidden");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", ctx.nextTitle());

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-super-next-btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("visibility", ctx.showSuperNextBtn ? "visible" : "hidden");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", ctx.superNextTitle());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        encapsulation: 2,
        changeDetection: 0
      });

      DateHeaderComponent.ctorParameters = function () {
        return [{
          type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["DateHelperService"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DateHeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            selector: 'date-header',
            exportAs: 'dateHeader',
            template: "<div class=\"{{ prefixCls }}\">\n  <button\n    [style.visibility]=\"showSuperPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-prev-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superPreviousTitle() }}\"\n    (click)=\"superPrevious()\"\n  >\n    <span class=\"ant-picker-super-prev-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-prev-btn\"\n    role=\"button\"\n    title=\"{{ previousTitle() }}\"\n    tabindex=\"-1\"\n    (click)=\"previous()\"\n  >\n    <span class=\"ant-picker-prev-icon\"></span>\n  </button>\n\n  <div class=\"{{ prefixCls }}-view\">\n    <ng-container *ngFor=\"let selector of selectors\">\n      <button\n        class=\"{{ selector.className }}\"\n        role=\"button\"\n        type=\"button\"\n        title=\"{{ selector.title || null }}\"\n        (click)=\"selector.onClick()\"\n      >\n        {{ selector.label }}\n      </button>\n    </ng-container>\n  </div>\n  <button\n    [style.visibility]=\"showNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ nextTitle() }}\"\n    (click)=\"next()\"\n  >\n    <span class=\"ant-picker-next-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showSuperNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superNextTitle() }}\"\n    (click)=\"superNext()\"\n  >\n    <span class=\"ant-picker-super-next-icon\"></span>\n  </button>\n</div>\n"
          }]
        }], function () {
          return [{
            type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["DateHelperService"]
          }];
        }, null);
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */
      // tslint:disable-next-line:directive-class-suffix


      var AbstractTable = /*#__PURE__*/function () {
        function AbstractTable() {
          _classCallCheck(this, AbstractTable);

          this.isTemplateRef = ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["isTemplateRef"];
          this.isNonEmptyString = ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["isNonEmptyString"];
          this.headRow = [];
          this.bodyRows = [];
          this.MAX_ROW = 6;
          this.MAX_COL = 7;
          this.prefixCls = 'ant-picker';
          this.activeDate = new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_11__["CandyDate"]();
          this.showWeek = false;
          this.selectedValue = []; // Range ONLY

          this.hoverValue = []; // Range ONLY

          this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.cellHover = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](); // Emitted when hover on a day by mouse enter
        }

        _createClass(AbstractTable, [{
          key: "render",
          value: function render() {
            if (this.activeDate) {
              this.headRow = this.makeHeadRow();
              this.bodyRows = this.makeBodyRows();
            }
          }
        }, {
          key: "trackByBodyRow",
          value: function trackByBodyRow(_index, item) {
            return item.trackByIndex;
          }
        }, {
          key: "trackByBodyColumn",
          value: function trackByBodyColumn(_index, item) {
            return item.trackByIndex;
          }
        }, {
          key: "hasRangeValue",
          value: function hasRangeValue() {
            var _a, _b;

            return ((_a = this.selectedValue) === null || _a === void 0 ? void 0 : _a.length) > 0 || ((_b = this.hoverValue) === null || _b === void 0 ? void 0 : _b.length) > 0;
          }
        }, {
          key: "getClassMap",
          value: function getClassMap(cell) {
            var _ref;

            return _ref = {}, _defineProperty(_ref, "ant-picker-cell", true), _defineProperty(_ref, "ant-picker-cell-in-view", true), _defineProperty(_ref, "ant-picker-cell-selected", cell.isSelected), _defineProperty(_ref, "ant-picker-cell-disabled", cell.isDisabled), _defineProperty(_ref, "ant-picker-cell-in-range", !!cell.isInSelectedRange), _defineProperty(_ref, "ant-picker-cell-range-start", !!cell.isSelectedStart), _defineProperty(_ref, "ant-picker-cell-range-end", !!cell.isSelectedEnd), _defineProperty(_ref, "ant-picker-cell-range-start-single", !!cell.isStartSingle), _defineProperty(_ref, "ant-picker-cell-range-end-single", !!cell.isEndSingle), _defineProperty(_ref, "ant-picker-cell-range-hover", !!cell.isInHoverRange), _defineProperty(_ref, "ant-picker-cell-range-hover-start", !!cell.isHoverStart), _defineProperty(_ref, "ant-picker-cell-range-hover-end", !!cell.isHoverEnd), _defineProperty(_ref, "ant-picker-cell-range-hover-edge-start", !!cell.isFirstCellInPanel), _defineProperty(_ref, "ant-picker-cell-range-hover-edge-end", !!cell.isLastCellInPanel), _defineProperty(_ref, "ant-picker-cell-range-start-near-hover", !!cell.isRangeStartNearHover), _defineProperty(_ref, "ant-picker-cell-range-end-near-hover", !!cell.isRangeEndNearHover), _ref;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.render();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.activeDate && !changes.activeDate.currentValue) {
              this.activeDate = new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_11__["CandyDate"]();
            }

            if (changes.disabledDate || changes.locale || changes.showWeek || this.isDateRealChange(changes.activeDate) || this.isDateRealChange(changes.value) || this.isDateRealChange(changes.selectedValue) || this.isDateRealChange(changes.hoverValue)) {
              this.render();
            }
          }
        }, {
          key: "isDateRealChange",
          value: function isDateRealChange(change) {
            if (change) {
              var previousValue = change.previousValue;
              var currentValue = change.currentValue;

              if (Array.isArray(currentValue)) {
                return !Array.isArray(previousValue) || currentValue.length !== previousValue.length || currentValue.some(function (value, index) {
                  var previousCandyDate = previousValue[index];
                  return previousCandyDate instanceof ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_11__["CandyDate"] ? previousCandyDate.isSameDay(value) : previousCandyDate !== value;
                });
              } else {
                return !this.isSameDate(previousValue, currentValue);
              }
            }

            return false;
          }
        }, {
          key: "isSameDate",
          value: function isSameDate(left, right) {
            return !left && !right || left && right && right.isSameDay(left);
          }
        }]);

        return AbstractTable;
      }();

      AbstractTable.ɵfac = function AbstractTable_Factory(t) {
        return new (t || AbstractTable)();
      };

      AbstractTable.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: AbstractTable,
        inputs: {
          prefixCls: "prefixCls",
          activeDate: "activeDate",
          showWeek: "showWeek",
          selectedValue: "selectedValue",
          hoverValue: "hoverValue",
          value: "value",
          locale: "locale",
          disabledDate: "disabledDate",
          cellRender: "cellRender",
          fullCellRender: "fullCellRender"
        },
        outputs: {
          valueChange: "valueChange",
          cellHover: "cellHover"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
      });
      AbstractTable.propDecorators = {
        prefixCls: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        activeDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        showWeek: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        selectedValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        hoverValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        disabledDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        cellRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        fullCellRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        cellHover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AbstractTable, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"]
        }], function () {
          return [];
        }, {
          prefixCls: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          activeDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          showWeek: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          selectedValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          hoverValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          cellHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          disabledDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          cellRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          fullCellRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var DateTableComponent = /*#__PURE__*/function (_AbstractTable) {
        _inherits(DateTableComponent, _AbstractTable);

        var _super2 = _createSuper(DateTableComponent);

        function DateTableComponent(i18n, dateHelper) {
          var _this8;

          _classCallCheck(this, DateTableComponent);

          _this8 = _super2.call(this);
          _this8.i18n = i18n;
          _this8.dateHelper = dateHelper;
          return _this8;
        }

        _createClass(DateTableComponent, [{
          key: "changeValueFromInside",
          value: function changeValueFromInside(value) {
            // Only change date not change time
            this.activeDate = this.activeDate.setYear(value.getYear()).setMonth(value.getMonth()).setDate(value.getDate());
            this.valueChange.emit(this.activeDate);

            if (!this.activeDate.isSameMonth(this.value)) {
              this.render();
            }
          }
        }, {
          key: "makeHeadRow",
          value: function makeHeadRow() {
            var weekDays = [];
            var start = this.activeDate.calendarStart({
              weekStartsOn: this.dateHelper.getFirstDayOfWeek()
            });

            for (var colIndex = 0; colIndex < this.MAX_COL; colIndex++) {
              var day = start.addDays(colIndex);
              weekDays.push({
                trackByIndex: null,
                value: day.nativeDate,
                title: this.dateHelper.format(day.nativeDate, 'E'),
                content: this.dateHelper.format(day.nativeDate, this.getVeryShortWeekFormat()),
                isSelected: false,
                isDisabled: false,
                onClick: function onClick() {},
                onMouseEnter: function onMouseEnter() {}
              });
            }

            return weekDays;
          }
        }, {
          key: "getVeryShortWeekFormat",
          value: function getVeryShortWeekFormat() {
            return this.i18n.getLocaleId().toLowerCase().indexOf('zh') === 0 ? 'EEEEE' : 'EEEEEE'; // Use extreme short for chinese
          }
        }, {
          key: "makeBodyRows",
          value: function makeBodyRows() {
            var _this9 = this;

            var weekRows = [];
            var firstDayOfMonth = this.activeDate.calendarStart({
              weekStartsOn: this.dateHelper.getFirstDayOfWeek()
            });

            for (var week = 0; week < this.MAX_ROW; week++) {
              var _row$classMap;

              var weekStart = firstDayOfMonth.addDays(week * 7);
              var row = {
                isActive: false,
                dateCells: [],
                trackByIndex: week
              };

              var _loop = function _loop() {
                var date = weekStart.addDays(day);
                var dateFormat = transCompatFormat(_this9.i18n.getLocaleData('DatePicker.lang.dateFormat', 'YYYY-MM-DD'));

                var title = _this9.dateHelper.format(date.nativeDate, dateFormat);

                var label = _this9.dateHelper.format(date.nativeDate, 'dd');

                var cell = {
                  trackByIndex: day,
                  value: date.nativeDate,
                  label: label,
                  isSelected: false,
                  isDisabled: false,
                  isToday: false,
                  title: title,
                  cellRender: Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["valueFunctionProp"])(_this9.cellRender, date),
                  fullCellRender: Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["valueFunctionProp"])(_this9.fullCellRender, date),
                  content: "".concat(date.getDate()),
                  onClick: function onClick() {
                    return _this9.changeValueFromInside(date);
                  },
                  onMouseEnter: function onMouseEnter() {
                    return _this9.cellHover.emit(date);
                  }
                };

                _this9.addCellProperty(cell, date);

                if (_this9.showWeek && !row.weekNum) {
                  row.weekNum = _this9.dateHelper.getISOWeek(date.nativeDate);
                }

                if (date.isSameDay(_this9.value)) {
                  row.isActive = date.isSameDay(_this9.value);
                }

                row.dateCells.push(cell);
              };

              for (var day = 0; day < 7; day++) {
                _loop();
              }

              row.classMap = (_row$classMap = {}, _defineProperty(_row$classMap, "ant-picker-week-panel-row", this.showWeek), _defineProperty(_row$classMap, "ant-picker-week-panel-row-selected", this.showWeek && row.isActive), _row$classMap);
              weekRows.push(row);
            }

            return weekRows;
          }
        }, {
          key: "addCellProperty",
          value: function addCellProperty(cell, date) {
            var _a;

            if (this.hasRangeValue() && !this.showWeek) {
              var _this$hoverValue = _slicedToArray(this.hoverValue, 2),
                  startHover = _this$hoverValue[0],
                  endHover = _this$hoverValue[1];

              var _this$selectedValue = _slicedToArray(this.selectedValue, 2),
                  startSelected = _this$selectedValue[0],
                  endSelected = _this$selectedValue[1]; // Selected


              if (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isSameDay(date)) {
                cell.isSelectedStart = true;
                cell.isSelected = true;
              }

              if (endSelected === null || endSelected === void 0 ? void 0 : endSelected.isSameDay(date)) {
                cell.isSelectedEnd = true;
                cell.isSelected = true;
              }

              if (startHover && endHover) {
                cell.isHoverStart = startHover.isSameDay(date);
                cell.isHoverEnd = endHover.isSameDay(date);
                cell.isLastCellInPanel = date.isLastDayOfMonth();
                cell.isFirstCellInPanel = date.isFirstDayOfMonth();
                cell.isInHoverRange = startHover.isBeforeDay(date) && date.isBeforeDay(endHover);
              }

              cell.isStartSingle = startSelected && !endSelected;
              cell.isEndSingle = !startSelected && endSelected;
              cell.isInSelectedRange = (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isBeforeDay(date)) && date.isBeforeDay(endSelected);
              cell.isRangeStartNearHover = startSelected && cell.isInHoverRange;
              cell.isRangeEndNearHover = endSelected && cell.isInHoverRange;
            }

            cell.isToday = date.isToday();
            cell.isSelected = date.isSameDay(this.value);
            cell.isDisabled = !!((_a = this.disabledDate) === null || _a === void 0 ? void 0 : _a.call(this, date.nativeDate));
            cell.classMap = this.getClassMap(cell);
          }
        }, {
          key: "getClassMap",
          value: function getClassMap(cell) {
            var _Object$assign;

            var date = new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_11__["CandyDate"](cell.value);
            return Object.assign(Object.assign({}, _get(_getPrototypeOf(DateTableComponent.prototype), "getClassMap", this).call(this, cell)), (_Object$assign = {}, _defineProperty(_Object$assign, "ant-picker-cell-today", !!cell.isToday), _defineProperty(_Object$assign, "ant-picker-cell-in-view", date.isSameMonth(this.activeDate)), _Object$assign));
          }
        }]);

        return DateTableComponent;
      }(AbstractTable);

      DateTableComponent.ɵfac = function DateTableComponent_Factory(t) {
        return new (t || DateTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["NzI18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["DateHelperService"]));
      };

      DateTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: DateTableComponent,
        selectors: [["date-table"]],
        inputs: {
          locale: "locale"
        },
        exportAs: ["dateTable"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        decls: 4,
        vars: 3,
        consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], [4, "ngIf"], ["role", "row", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row"], ["role", "columnheader", 4, "ngIf"], ["role", "columnheader", 3, "title", 4, "ngFor", "ngForOf"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "row", 3, "ngClass"], ["role", "gridcell", 3, "class", 4, "ngIf"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""]],
        template: function DateTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DateTableComponent_thead_1_Template, 4, 2, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DateTableComponent_tr_3_Template, 3, 4, "tr", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.headRow && ctx.headRow.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.bodyRows)("ngForTrackBy", ctx.trackByBodyRow);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
        encapsulation: 2,
        changeDetection: 0
      });

      DateTableComponent.ctorParameters = function () {
        return [{
          type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["NzI18nService"]
        }, {
          type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["DateHelperService"]
        }];
      };

      DateTableComponent.propDecorators = {
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DateTableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            // tslint:disable-next-line:component-selector
            selector: 'date-table',
            exportAs: 'dateTable',
            template: "<table class=\"ant-picker-content\" cellspacing=\"0\" role=\"grid\">\n  <thead *ngIf=\"headRow && headRow.length > 0\">\n    <tr role=\"row\">\n      <th *ngIf=\"showWeek\" role=\"columnheader\"></th>\n      <th *ngFor=\"let cell of headRow\" role=\"columnheader\" title=\"{{ cell.title }}\">\n        {{ cell.content }}\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let row of bodyRows; trackBy: trackByBodyRow\" [ngClass]=\"row.classMap!\" role=\"row\">\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-cell-week\">\n        {{ row.weekNum }}\n      </td>\n      <td\n        *ngFor=\"let cell of row.dateCells; trackBy: trackByBodyColumn\"\n        title=\"{{ cell.title }}\"\n        role=\"gridcell\"\n        [ngClass]=\"cell.classMap!\"\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\n        (mouseenter)=\"cell.onMouseEnter()\"\n      >\n        <ng-container [ngSwitch]=\"prefixCls\">\n          <ng-container *ngSwitchCase=\"'ant-picker'\">\n            <ng-container [ngSwitch]=\"true\">\n              <ng-container *ngSwitchCase=\"isTemplateRef(cell.cellRender)\">\n                <!--           *ngSwitchCase not has type assertion support, the cellRender type here is TemplateRef -->\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                ></ng-container>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"isNonEmptyString(cell.cellRender)\">\n                <span [innerHTML]=\"cell.cellRender\"></span>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <div\n                  class=\"{{ prefixCls }}-cell-inner\"\n                  [attr.aria-selected]=\"cell.isSelected\"\n                  [attr.aria-disabled]=\"cell.isDisabled\"\n                >\n                  {{ cell.content }}\n                </div>\n              </ng-container>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'ant-picker-calendar'\">\n            <div\n              class=\"{{ prefixCls }}-date ant-picker-cell-inner\"\n              [class.ant-picker-calendar-date-today]=\"cell.isToday\"\n            >\n              <ng-container *ngIf=\"cell.fullCellRender; else defaultCell\">\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.fullCellRender); context: { $implicit: cell.value }\"\n                >\n                </ng-container>\n              </ng-container>\n              <ng-template #defaultCell>\n                <div class=\"{{ prefixCls }}-date-value\">{{ cell.content }}</div>\n                <div class=\"{{ prefixCls }}-date-content\">\n                  <ng-container\n                    *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                  >\n                  </ng-container>\n                </div>\n              </ng-template>\n            </div>\n          </ng-container>\n        </ng-container>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"
          }]
        }], function () {
          return [{
            type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["NzI18nService"]
          }, {
            type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["DateHelperService"]
          }];
        }, {
          locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var DecadeHeaderComponent = /*#__PURE__*/function (_AbstractPanelHeader2) {
        _inherits(DecadeHeaderComponent, _AbstractPanelHeader2);

        var _super3 = _createSuper(DecadeHeaderComponent);

        function DecadeHeaderComponent() {
          _classCallCheck(this, DecadeHeaderComponent);

          return _super3.apply(this, arguments);
        }

        _createClass(DecadeHeaderComponent, [{
          key: "previous",
          value: function previous() {}
        }, {
          key: "next",
          value: function next() {}
        }, {
          key: "startYear",
          get: function get() {
            return parseInt("".concat(this.value.getYear() / 100), 10) * 100;
          }
        }, {
          key: "endYear",
          get: function get() {
            return this.startYear + 99;
          }
        }, {
          key: "superPrevious",
          value: function superPrevious() {
            this.changeValue(this.value.addYears(-100));
          }
        }, {
          key: "superNext",
          value: function superNext() {
            this.changeValue(this.value.addYears(100));
          }
        }, {
          key: "getSelectors",
          value: function getSelectors() {
            return [{
              className: "".concat(this.prefixCls, "-decade-btn"),
              title: '',
              onClick: function onClick() {// noop
              },
              label: "".concat(this.startYear, "-").concat(this.endYear)
            }];
          }
        }]);

        return DecadeHeaderComponent;
      }(AbstractPanelHeader);

      DecadeHeaderComponent.ɵfac = function DecadeHeaderComponent_Factory(t) {
        return ɵDecadeHeaderComponent_BaseFactory(t || DecadeHeaderComponent);
      };

      DecadeHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: DecadeHeaderComponent,
        selectors: [["decade-header"]],
        exportAs: ["decadeHeader"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        decls: 11,
        vars: 31,
        consts: [["role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-super-prev-icon"], [1, "ant-picker-prev-icon"], [4, "ngFor", "ngForOf"], [1, "ant-picker-next-icon"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "title", "click"]],
        template: function DecadeHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DecadeHeaderComponent_Template_button_click_1_listener() {
              return ctx.superPrevious();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DecadeHeaderComponent_Template_button_click_3_listener() {
              return ctx.previous();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, DecadeHeaderComponent_ng_container_6_Template, 3, 5, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DecadeHeaderComponent_Template_button_click_7_listener() {
              return ctx.next();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DecadeHeaderComponent_Template_button_click_9_listener() {
              return ctx.superNext();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.prefixCls);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-super-prev-btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("visibility", ctx.showSuperPreBtn ? "visible" : "hidden");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", ctx.superPreviousTitle());

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-prev-btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("visibility", ctx.showPreBtn ? "visible" : "hidden");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", ctx.previousTitle());

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-view");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.selectors);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-next-btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("visibility", ctx.showNextBtn ? "visible" : "hidden");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", ctx.nextTitle());

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-super-next-btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("visibility", ctx.showSuperNextBtn ? "visible" : "hidden");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", ctx.superNextTitle());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        encapsulation: 2,
        changeDetection: 0
      });

      var ɵDecadeHeaderComponent_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](DecadeHeaderComponent);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DecadeHeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            selector: 'decade-header',
            exportAs: 'decadeHeader',
            template: "<div class=\"{{ prefixCls }}\">\n  <button\n    [style.visibility]=\"showSuperPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-prev-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superPreviousTitle() }}\"\n    (click)=\"superPrevious()\"\n  >\n    <span class=\"ant-picker-super-prev-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-prev-btn\"\n    role=\"button\"\n    title=\"{{ previousTitle() }}\"\n    tabindex=\"-1\"\n    (click)=\"previous()\"\n  >\n    <span class=\"ant-picker-prev-icon\"></span>\n  </button>\n\n  <div class=\"{{ prefixCls }}-view\">\n    <ng-container *ngFor=\"let selector of selectors\">\n      <button\n        class=\"{{ selector.className }}\"\n        role=\"button\"\n        type=\"button\"\n        title=\"{{ selector.title || null }}\"\n        (click)=\"selector.onClick()\"\n      >\n        {{ selector.label }}\n      </button>\n    </ng-container>\n  </div>\n  <button\n    [style.visibility]=\"showNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ nextTitle() }}\"\n    (click)=\"next()\"\n  >\n    <span class=\"ant-picker-next-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showSuperNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superNextTitle() }}\"\n    (click)=\"superNext()\"\n  >\n    <span class=\"ant-picker-super-next-icon\"></span>\n  </button>\n</div>\n"
          }]
        }], null, null);
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var MAX_ROW = 4;
      var MAX_COL = 3;

      var DecadeTableComponent = /*#__PURE__*/function (_AbstractTable2) {
        _inherits(DecadeTableComponent, _AbstractTable2);

        var _super4 = _createSuper(DecadeTableComponent);

        function DecadeTableComponent() {
          _classCallCheck(this, DecadeTableComponent);

          return _super4.apply(this, arguments);
        }

        _createClass(DecadeTableComponent, [{
          key: "startYear",
          get: function get() {
            return parseInt("".concat(this.activeDate.getYear() / 100), 10) * 100;
          }
        }, {
          key: "endYear",
          get: function get() {
            return this.startYear + 99;
          }
        }, {
          key: "makeHeadRow",
          value: function makeHeadRow() {
            return [];
          }
        }, {
          key: "makeBodyRows",
          value: function makeBodyRows() {
            var _this10 = this;

            var decades = [];
            var currentYear = this.value && this.value.getYear();
            var startYear = this.startYear;
            var endYear = this.endYear;
            var previousYear = startYear - 10;
            var index = 0;

            for (var rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
              var row = {
                dateCells: [],
                trackByIndex: rowIndex
              };

              var _loop2 = function _loop2() {
                var start = previousYear + index * 10;
                var end = previousYear + index * 10 + 9;
                var content = "".concat(start, "-").concat(end);
                var cell = {
                  trackByIndex: colIndex,
                  value: _this10.activeDate.setYear(start).nativeDate,
                  content: content,
                  title: content,
                  isDisabled: false,
                  isSelected: currentYear >= start && currentYear <= end,
                  isLowerThanStart: end < startYear,
                  isBiggerThanEnd: start > endYear,
                  classMap: {},
                  onClick: function onClick() {},
                  onMouseEnter: function onMouseEnter() {}
                };
                cell.classMap = _this10.getClassMap(cell);

                cell.onClick = function () {
                  return _this10.chooseDecade(start);
                };

                index++;
                row.dateCells.push(cell);
              };

              for (var colIndex = 0; colIndex < MAX_COL; colIndex++) {
                _loop2();
              }

              decades.push(row);
            }

            return decades;
          }
        }, {
          key: "getClassMap",
          value: function getClassMap(cell) {
            var _ref2;

            return _ref2 = {}, _defineProperty(_ref2, "".concat(this.prefixCls, "-cell"), true), _defineProperty(_ref2, "".concat(this.prefixCls, "-cell-in-view"), !cell.isBiggerThanEnd && !cell.isLowerThanStart), _defineProperty(_ref2, "".concat(this.prefixCls, "-cell-selected"), cell.isSelected), _defineProperty(_ref2, "".concat(this.prefixCls, "-cell-disabled"), cell.isDisabled), _ref2;
          }
        }, {
          key: "chooseDecade",
          value: function chooseDecade(year) {
            this.value = this.activeDate.setYear(year);
            this.valueChange.emit(this.value);
          }
        }]);

        return DecadeTableComponent;
      }(AbstractTable);

      DecadeTableComponent.ɵfac = function DecadeTableComponent_Factory(t) {
        return ɵDecadeTableComponent_BaseFactory(t || DecadeTableComponent);
      };

      DecadeTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: DecadeTableComponent,
        selectors: [["decade-table"]],
        exportAs: ["decadeTable"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        decls: 4,
        vars: 3,
        consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], [4, "ngIf"], ["role", "row", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row"], ["role", "columnheader", 4, "ngIf"], ["role", "columnheader", 3, "title", 4, "ngFor", "ngForOf"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "row", 3, "ngClass"], ["role", "gridcell", 3, "class", 4, "ngIf"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""]],
        template: function DecadeTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DecadeTableComponent_thead_1_Template, 4, 2, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DecadeTableComponent_tr_3_Template, 3, 4, "tr", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.headRow && ctx.headRow.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.bodyRows)("ngForTrackBy", ctx.trackByBodyRow);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
        encapsulation: 2,
        changeDetection: 0
      });

      var ɵDecadeTableComponent_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](DecadeTableComponent);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DecadeTableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            // tslint:disable-next-line:component-selector
            selector: 'decade-table',
            exportAs: 'decadeTable',
            template: "<table class=\"ant-picker-content\" cellspacing=\"0\" role=\"grid\">\n  <thead *ngIf=\"headRow && headRow.length > 0\">\n    <tr role=\"row\">\n      <th *ngIf=\"showWeek\" role=\"columnheader\"></th>\n      <th *ngFor=\"let cell of headRow\" role=\"columnheader\" title=\"{{ cell.title }}\">\n        {{ cell.content }}\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let row of bodyRows; trackBy: trackByBodyRow\" [ngClass]=\"row.classMap!\" role=\"row\">\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-cell-week\">\n        {{ row.weekNum }}\n      </td>\n      <td\n        *ngFor=\"let cell of row.dateCells; trackBy: trackByBodyColumn\"\n        title=\"{{ cell.title }}\"\n        role=\"gridcell\"\n        [ngClass]=\"cell.classMap!\"\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\n        (mouseenter)=\"cell.onMouseEnter()\"\n      >\n        <ng-container [ngSwitch]=\"prefixCls\">\n          <ng-container *ngSwitchCase=\"'ant-picker'\">\n            <ng-container [ngSwitch]=\"true\">\n              <ng-container *ngSwitchCase=\"isTemplateRef(cell.cellRender)\">\n                <!--           *ngSwitchCase not has type assertion support, the cellRender type here is TemplateRef -->\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                ></ng-container>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"isNonEmptyString(cell.cellRender)\">\n                <span [innerHTML]=\"cell.cellRender\"></span>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <div\n                  class=\"{{ prefixCls }}-cell-inner\"\n                  [attr.aria-selected]=\"cell.isSelected\"\n                  [attr.aria-disabled]=\"cell.isDisabled\"\n                >\n                  {{ cell.content }}\n                </div>\n              </ng-container>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'ant-picker-calendar'\">\n            <div\n              class=\"{{ prefixCls }}-date ant-picker-cell-inner\"\n              [class.ant-picker-calendar-date-today]=\"cell.isToday\"\n            >\n              <ng-container *ngIf=\"cell.fullCellRender; else defaultCell\">\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.fullCellRender); context: { $implicit: cell.value }\"\n                >\n                </ng-container>\n              </ng-container>\n              <ng-template #defaultCell>\n                <div class=\"{{ prefixCls }}-date-value\">{{ cell.content }}</div>\n                <div class=\"{{ prefixCls }}-date-content\">\n                  <ng-container\n                    *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                  >\n                  </ng-container>\n                </div>\n              </ng-template>\n            </div>\n          </ng-container>\n        </ng-container>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"
          }]
        }], null, null);
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var MonthHeaderComponent = /*#__PURE__*/function (_AbstractPanelHeader3) {
        _inherits(MonthHeaderComponent, _AbstractPanelHeader3);

        var _super5 = _createSuper(MonthHeaderComponent);

        function MonthHeaderComponent(dateHelper) {
          var _this11;

          _classCallCheck(this, MonthHeaderComponent);

          _this11 = _super5.call(this);
          _this11.dateHelper = dateHelper;
          return _this11;
        }

        _createClass(MonthHeaderComponent, [{
          key: "getSelectors",
          value: function getSelectors() {
            var _this12 = this;

            return [{
              className: "".concat(this.prefixCls, "-month-btn"),
              title: this.locale.yearSelect,
              onClick: function onClick() {
                return _this12.changeMode('year');
              },
              label: this.dateHelper.format(this.value.nativeDate, transCompatFormat(this.locale.yearFormat))
            }];
          }
        }]);

        return MonthHeaderComponent;
      }(AbstractPanelHeader);

      MonthHeaderComponent.ɵfac = function MonthHeaderComponent_Factory(t) {
        return new (t || MonthHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["DateHelperService"]));
      };

      MonthHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MonthHeaderComponent,
        selectors: [["month-header"]],
        exportAs: ["monthHeader"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        decls: 11,
        vars: 31,
        consts: [["role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-super-prev-icon"], [1, "ant-picker-prev-icon"], [4, "ngFor", "ngForOf"], [1, "ant-picker-next-icon"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "title", "click"]],
        template: function MonthHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MonthHeaderComponent_Template_button_click_1_listener() {
              return ctx.superPrevious();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MonthHeaderComponent_Template_button_click_3_listener() {
              return ctx.previous();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MonthHeaderComponent_ng_container_6_Template, 3, 5, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MonthHeaderComponent_Template_button_click_7_listener() {
              return ctx.next();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MonthHeaderComponent_Template_button_click_9_listener() {
              return ctx.superNext();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.prefixCls);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-super-prev-btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("visibility", ctx.showSuperPreBtn ? "visible" : "hidden");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", ctx.superPreviousTitle());

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-prev-btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("visibility", ctx.showPreBtn ? "visible" : "hidden");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", ctx.previousTitle());

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-view");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.selectors);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-next-btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("visibility", ctx.showNextBtn ? "visible" : "hidden");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", ctx.nextTitle());

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-super-next-btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("visibility", ctx.showSuperNextBtn ? "visible" : "hidden");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", ctx.superNextTitle());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        encapsulation: 2,
        changeDetection: 0
      });

      MonthHeaderComponent.ctorParameters = function () {
        return [{
          type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["DateHelperService"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MonthHeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            selector: 'month-header',
            exportAs: 'monthHeader',
            template: "<div class=\"{{ prefixCls }}\">\n  <button\n    [style.visibility]=\"showSuperPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-prev-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superPreviousTitle() }}\"\n    (click)=\"superPrevious()\"\n  >\n    <span class=\"ant-picker-super-prev-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-prev-btn\"\n    role=\"button\"\n    title=\"{{ previousTitle() }}\"\n    tabindex=\"-1\"\n    (click)=\"previous()\"\n  >\n    <span class=\"ant-picker-prev-icon\"></span>\n  </button>\n\n  <div class=\"{{ prefixCls }}-view\">\n    <ng-container *ngFor=\"let selector of selectors\">\n      <button\n        class=\"{{ selector.className }}\"\n        role=\"button\"\n        type=\"button\"\n        title=\"{{ selector.title || null }}\"\n        (click)=\"selector.onClick()\"\n      >\n        {{ selector.label }}\n      </button>\n    </ng-container>\n  </div>\n  <button\n    [style.visibility]=\"showNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ nextTitle() }}\"\n    (click)=\"next()\"\n  >\n    <span class=\"ant-picker-next-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showSuperNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superNextTitle() }}\"\n    (click)=\"superNext()\"\n  >\n    <span class=\"ant-picker-super-next-icon\"></span>\n  </button>\n</div>\n"
          }]
        }], function () {
          return [{
            type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["DateHelperService"]
          }];
        }, null);
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var MonthTableComponent = /*#__PURE__*/function (_AbstractTable3) {
        _inherits(MonthTableComponent, _AbstractTable3);

        var _super6 = _createSuper(MonthTableComponent);

        function MonthTableComponent(dateHelper) {
          var _this13;

          _classCallCheck(this, MonthTableComponent);

          _this13 = _super6.call(this);
          _this13.dateHelper = dateHelper;
          _this13.MAX_ROW = 4;
          _this13.MAX_COL = 3;
          return _this13;
        }

        _createClass(MonthTableComponent, [{
          key: "makeHeadRow",
          value: function makeHeadRow() {
            return [];
          }
        }, {
          key: "makeBodyRows",
          value: function makeBodyRows() {
            var _this14 = this;

            var months = [];
            var monthValue = 0;

            for (var rowIndex = 0; rowIndex < this.MAX_ROW; rowIndex++) {
              var row = {
                dateCells: [],
                trackByIndex: rowIndex
              };

              var _loop3 = function _loop3() {
                var month = _this14.activeDate.setMonth(monthValue);

                var isDisabled = _this14.isDisabledMonth(month);

                var content = _this14.dateHelper.format(month.nativeDate, 'MMM');

                var cell = {
                  trackByIndex: colIndex,
                  value: month.nativeDate,
                  isDisabled: isDisabled,
                  isSelected: month.isSameMonth(_this14.value),
                  content: content,
                  title: content,
                  classMap: {},
                  cellRender: Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["valueFunctionProp"])(_this14.cellRender, month),
                  fullCellRender: Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["valueFunctionProp"])(_this14.fullCellRender, month),
                  onClick: function onClick() {
                    return _this14.chooseMonth(cell.value.getMonth());
                  },
                  onMouseEnter: function onMouseEnter() {
                    return _this14.cellHover.emit(month);
                  }
                };

                _this14.addCellProperty(cell, month);

                row.dateCells.push(cell);
                monthValue++;
              };

              for (var colIndex = 0; colIndex < this.MAX_COL; colIndex++) {
                _loop3();
              }

              months.push(row);
            }

            return months;
          }
        }, {
          key: "isDisabledMonth",
          value: function isDisabledMonth(month) {
            if (!this.disabledDate) {
              return false;
            }

            var firstOfMonth = month.setDate(1);

            for (var date = firstOfMonth; date.getMonth() === month.getMonth(); date = date.addDays(1)) {
              if (!this.disabledDate(date.nativeDate)) {
                return false;
              }
            }

            return true;
          }
        }, {
          key: "addCellProperty",
          value: function addCellProperty(cell, month) {
            if (this.hasRangeValue()) {
              var _this$hoverValue2 = _slicedToArray(this.hoverValue, 2),
                  startHover = _this$hoverValue2[0],
                  endHover = _this$hoverValue2[1];

              var _this$selectedValue2 = _slicedToArray(this.selectedValue, 2),
                  startSelected = _this$selectedValue2[0],
                  endSelected = _this$selectedValue2[1]; // Selected


              if (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isSameMonth(month)) {
                cell.isSelectedStart = true;
                cell.isSelected = true;
              }

              if (endSelected === null || endSelected === void 0 ? void 0 : endSelected.isSameMonth(month)) {
                cell.isSelectedEnd = true;
                cell.isSelected = true;
              }

              if (startHover && endHover) {
                cell.isHoverStart = startHover.isSameMonth(month);
                cell.isHoverEnd = endHover.isSameMonth(month);
                cell.isLastCellInPanel = month.getMonth() === 11;
                cell.isFirstCellInPanel = month.getMonth() === 0;
                cell.isInHoverRange = startHover.isBeforeMonth(month) && month.isBeforeMonth(endHover);
              }

              cell.isStartSingle = startSelected && !endSelected;
              cell.isEndSingle = !startSelected && endSelected;
              cell.isInSelectedRange = (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isBeforeMonth(month)) && (month === null || month === void 0 ? void 0 : month.isBeforeMonth(endSelected));
              cell.isRangeStartNearHover = startSelected && cell.isInHoverRange;
              cell.isRangeEndNearHover = endSelected && cell.isInHoverRange;
            } else if (month.isSameMonth(this.value)) {
              cell.isSelected = true;
            }

            cell.classMap = this.getClassMap(cell);
          }
        }, {
          key: "chooseMonth",
          value: function chooseMonth(month) {
            this.value = this.activeDate.setMonth(month);
            this.valueChange.emit(this.value);
          }
        }]);

        return MonthTableComponent;
      }(AbstractTable);

      MonthTableComponent.ɵfac = function MonthTableComponent_Factory(t) {
        return new (t || MonthTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["DateHelperService"]));
      };

      MonthTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MonthTableComponent,
        selectors: [["month-table"]],
        exportAs: ["monthTable"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        decls: 4,
        vars: 3,
        consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], [4, "ngIf"], ["role", "row", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row"], ["role", "columnheader", 4, "ngIf"], ["role", "columnheader", 3, "title", 4, "ngFor", "ngForOf"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "row", 3, "ngClass"], ["role", "gridcell", 3, "class", 4, "ngIf"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""]],
        template: function MonthTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MonthTableComponent_thead_1_Template, 4, 2, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MonthTableComponent_tr_3_Template, 3, 4, "tr", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.headRow && ctx.headRow.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.bodyRows)("ngForTrackBy", ctx.trackByBodyRow);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
        encapsulation: 2,
        changeDetection: 0
      });

      MonthTableComponent.ctorParameters = function () {
        return [{
          type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["DateHelperService"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MonthTableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            // tslint:disable-next-line:component-selector
            selector: 'month-table',
            exportAs: 'monthTable',
            template: "<table class=\"ant-picker-content\" cellspacing=\"0\" role=\"grid\">\n  <thead *ngIf=\"headRow && headRow.length > 0\">\n    <tr role=\"row\">\n      <th *ngIf=\"showWeek\" role=\"columnheader\"></th>\n      <th *ngFor=\"let cell of headRow\" role=\"columnheader\" title=\"{{ cell.title }}\">\n        {{ cell.content }}\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let row of bodyRows; trackBy: trackByBodyRow\" [ngClass]=\"row.classMap!\" role=\"row\">\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-cell-week\">\n        {{ row.weekNum }}\n      </td>\n      <td\n        *ngFor=\"let cell of row.dateCells; trackBy: trackByBodyColumn\"\n        title=\"{{ cell.title }}\"\n        role=\"gridcell\"\n        [ngClass]=\"cell.classMap!\"\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\n        (mouseenter)=\"cell.onMouseEnter()\"\n      >\n        <ng-container [ngSwitch]=\"prefixCls\">\n          <ng-container *ngSwitchCase=\"'ant-picker'\">\n            <ng-container [ngSwitch]=\"true\">\n              <ng-container *ngSwitchCase=\"isTemplateRef(cell.cellRender)\">\n                <!--           *ngSwitchCase not has type assertion support, the cellRender type here is TemplateRef -->\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                ></ng-container>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"isNonEmptyString(cell.cellRender)\">\n                <span [innerHTML]=\"cell.cellRender\"></span>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <div\n                  class=\"{{ prefixCls }}-cell-inner\"\n                  [attr.aria-selected]=\"cell.isSelected\"\n                  [attr.aria-disabled]=\"cell.isDisabled\"\n                >\n                  {{ cell.content }}\n                </div>\n              </ng-container>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'ant-picker-calendar'\">\n            <div\n              class=\"{{ prefixCls }}-date ant-picker-cell-inner\"\n              [class.ant-picker-calendar-date-today]=\"cell.isToday\"\n            >\n              <ng-container *ngIf=\"cell.fullCellRender; else defaultCell\">\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.fullCellRender); context: { $implicit: cell.value }\"\n                >\n                </ng-container>\n              </ng-container>\n              <ng-template #defaultCell>\n                <div class=\"{{ prefixCls }}-date-value\">{{ cell.content }}</div>\n                <div class=\"{{ prefixCls }}-date-content\">\n                  <ng-container\n                    *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                  >\n                  </ng-container>\n                </div>\n              </ng-template>\n            </div>\n          </ng-container>\n        </ng-container>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"
          }]
        }], function () {
          return [{
            type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["DateHelperService"]
          }];
        }, null);
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var YearHeaderComponent = /*#__PURE__*/function (_AbstractPanelHeader4) {
        _inherits(YearHeaderComponent, _AbstractPanelHeader4);

        var _super7 = _createSuper(YearHeaderComponent);

        function YearHeaderComponent() {
          _classCallCheck(this, YearHeaderComponent);

          return _super7.apply(this, arguments);
        }

        _createClass(YearHeaderComponent, [{
          key: "startYear",
          get: function get() {
            return parseInt("".concat(this.value.getYear() / 10), 10) * 10;
          }
        }, {
          key: "endYear",
          get: function get() {
            return this.startYear + 9;
          }
        }, {
          key: "superPrevious",
          value: function superPrevious() {
            this.changeValue(this.value.addYears(-10));
          }
        }, {
          key: "superNext",
          value: function superNext() {
            this.changeValue(this.value.addYears(10));
          }
        }, {
          key: "getSelectors",
          value: function getSelectors() {
            var _this15 = this;

            return [{
              className: "".concat(this.prefixCls, "-year-btn"),
              title: '',
              onClick: function onClick() {
                return _this15.changeMode('decade');
              },
              label: "".concat(this.startYear, "-").concat(this.endYear)
            }];
          }
        }]);

        return YearHeaderComponent;
      }(AbstractPanelHeader);

      YearHeaderComponent.ɵfac = function YearHeaderComponent_Factory(t) {
        return ɵYearHeaderComponent_BaseFactory(t || YearHeaderComponent);
      };

      YearHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: YearHeaderComponent,
        selectors: [["year-header"]],
        exportAs: ["yearHeader"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        decls: 11,
        vars: 31,
        consts: [["role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-super-prev-icon"], [1, "ant-picker-prev-icon"], [4, "ngFor", "ngForOf"], [1, "ant-picker-next-icon"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "title", "click"]],
        template: function YearHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function YearHeaderComponent_Template_button_click_1_listener() {
              return ctx.superPrevious();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function YearHeaderComponent_Template_button_click_3_listener() {
              return ctx.previous();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, YearHeaderComponent_ng_container_6_Template, 3, 5, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function YearHeaderComponent_Template_button_click_7_listener() {
              return ctx.next();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function YearHeaderComponent_Template_button_click_9_listener() {
              return ctx.superNext();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.prefixCls);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-super-prev-btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("visibility", ctx.showSuperPreBtn ? "visible" : "hidden");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", ctx.superPreviousTitle());

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-prev-btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("visibility", ctx.showPreBtn ? "visible" : "hidden");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", ctx.previousTitle());

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-view");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.selectors);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-next-btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("visibility", ctx.showNextBtn ? "visible" : "hidden");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", ctx.nextTitle());

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-super-next-btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("visibility", ctx.showSuperNextBtn ? "visible" : "hidden");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", ctx.superNextTitle());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        encapsulation: 2,
        changeDetection: 0
      });

      var ɵYearHeaderComponent_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](YearHeaderComponent);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](YearHeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            selector: 'year-header',
            exportAs: 'yearHeader',
            template: "<div class=\"{{ prefixCls }}\">\n  <button\n    [style.visibility]=\"showSuperPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-prev-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superPreviousTitle() }}\"\n    (click)=\"superPrevious()\"\n  >\n    <span class=\"ant-picker-super-prev-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-prev-btn\"\n    role=\"button\"\n    title=\"{{ previousTitle() }}\"\n    tabindex=\"-1\"\n    (click)=\"previous()\"\n  >\n    <span class=\"ant-picker-prev-icon\"></span>\n  </button>\n\n  <div class=\"{{ prefixCls }}-view\">\n    <ng-container *ngFor=\"let selector of selectors\">\n      <button\n        class=\"{{ selector.className }}\"\n        role=\"button\"\n        type=\"button\"\n        title=\"{{ selector.title || null }}\"\n        (click)=\"selector.onClick()\"\n      >\n        {{ selector.label }}\n      </button>\n    </ng-container>\n  </div>\n  <button\n    [style.visibility]=\"showNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ nextTitle() }}\"\n    (click)=\"next()\"\n  >\n    <span class=\"ant-picker-next-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showSuperNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superNextTitle() }}\"\n    (click)=\"superNext()\"\n  >\n    <span class=\"ant-picker-super-next-icon\"></span>\n  </button>\n</div>\n"
          }]
        }], null, null);
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var YearTableComponent = /*#__PURE__*/function (_AbstractTable4) {
        _inherits(YearTableComponent, _AbstractTable4);

        var _super8 = _createSuper(YearTableComponent);

        function YearTableComponent(dateHelper) {
          var _this16;

          _classCallCheck(this, YearTableComponent);

          _this16 = _super8.call(this);
          _this16.dateHelper = dateHelper;
          _this16.MAX_ROW = 4;
          _this16.MAX_COL = 3;
          return _this16;
        }

        _createClass(YearTableComponent, [{
          key: "makeHeadRow",
          value: function makeHeadRow() {
            return [];
          }
        }, {
          key: "makeBodyRows",
          value: function makeBodyRows() {
            var _this17 = this;

            var currentYear = this.activeDate && this.activeDate.getYear();
            var startYear = parseInt("".concat(currentYear / 10), 10) * 10;
            var endYear = startYear + 9;
            var previousYear = startYear - 1;
            var years = [];
            var yearValue = 0;

            for (var rowIndex = 0; rowIndex < this.MAX_ROW; rowIndex++) {
              var row = {
                dateCells: [],
                trackByIndex: rowIndex
              };

              var _loop4 = function _loop4() {
                var yearNum = previousYear + yearValue;

                var year = _this17.activeDate.setYear(yearNum);

                var content = _this17.dateHelper.format(year.nativeDate, 'yyyy');

                var isDisabled = _this17.isDisabledYear(year);

                var cell = {
                  trackByIndex: colIndex,
                  value: year.nativeDate,
                  isDisabled: isDisabled,
                  isSameDecade: yearNum >= startYear && yearNum <= endYear,
                  isSelected: yearNum === (_this17.value && _this17.value.getYear()),
                  content: content,
                  title: content,
                  classMap: {},
                  isLastCellInPanel: year.getYear() === endYear,
                  isFirstCellInPanel: year.getYear() === startYear,
                  cellRender: Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["valueFunctionProp"])(_this17.cellRender, year),
                  fullCellRender: Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["valueFunctionProp"])(_this17.fullCellRender, year),
                  onClick: function onClick() {
                    return _this17.chooseYear(cell.value.getFullYear());
                  },
                  onMouseEnter: function onMouseEnter() {
                    return _this17.cellHover.emit(year);
                  }
                };

                _this17.addCellProperty(cell, year);

                row.dateCells.push(cell);
                yearValue++;
              };

              for (var colIndex = 0; colIndex < this.MAX_COL; colIndex++) {
                _loop4();
              }

              years.push(row);
            }

            return years;
          }
        }, {
          key: "getClassMap",
          value: function getClassMap(cell) {
            return Object.assign(Object.assign({}, _get(_getPrototypeOf(YearTableComponent.prototype), "getClassMap", this).call(this, cell)), _defineProperty({}, "ant-picker-cell-in-view", !!cell.isSameDecade));
          }
        }, {
          key: "isDisabledYear",
          value: function isDisabledYear(year) {
            if (!this.disabledDate) {
              return false;
            }

            var firstOfMonth = year.setMonth(0).setDate(1);

            for (var date = firstOfMonth; date.getYear() === year.getYear(); date = date.addDays(1)) {
              if (!this.disabledDate(date.nativeDate)) {
                return false;
              }
            }

            return true;
          }
        }, {
          key: "addCellProperty",
          value: function addCellProperty(cell, year) {
            if (this.hasRangeValue()) {
              var _this$hoverValue3 = _slicedToArray(this.hoverValue, 2),
                  startHover = _this$hoverValue3[0],
                  endHover = _this$hoverValue3[1];

              var _this$selectedValue3 = _slicedToArray(this.selectedValue, 2),
                  startSelected = _this$selectedValue3[0],
                  endSelected = _this$selectedValue3[1]; // Selected


              if (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isSameYear(year)) {
                cell.isSelectedStart = true;
                cell.isSelected = true;
              }

              if (endSelected === null || endSelected === void 0 ? void 0 : endSelected.isSameYear(year)) {
                cell.isSelectedEnd = true;
                cell.isSelected = true;
              }

              if (startHover && endHover) {
                cell.isHoverStart = startHover.isSameYear(year);
                cell.isHoverEnd = endHover.isSameYear(year);
                cell.isInHoverRange = startHover.isBeforeYear(year) && year.isBeforeYear(endHover);
              }

              cell.isStartSingle = startSelected && !endSelected;
              cell.isEndSingle = !startSelected && endSelected;
              cell.isInSelectedRange = (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isBeforeYear(year)) && (year === null || year === void 0 ? void 0 : year.isBeforeYear(endSelected));
              cell.isRangeStartNearHover = startSelected && cell.isInHoverRange;
              cell.isRangeEndNearHover = endSelected && cell.isInHoverRange;
            } else if (year.isSameYear(this.value)) {
              cell.isSelected = true;
            }

            cell.classMap = this.getClassMap(cell);
          }
        }, {
          key: "chooseYear",
          value: function chooseYear(year) {
            this.value = this.activeDate.setYear(year);
            this.valueChange.emit(this.value);
            this.render();
          }
        }]);

        return YearTableComponent;
      }(AbstractTable);

      YearTableComponent.ɵfac = function YearTableComponent_Factory(t) {
        return new (t || YearTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["DateHelperService"]));
      };

      YearTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: YearTableComponent,
        selectors: [["year-table"]],
        exportAs: ["yearTable"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        decls: 4,
        vars: 3,
        consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], [4, "ngIf"], ["role", "row", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row"], ["role", "columnheader", 4, "ngIf"], ["role", "columnheader", 3, "title", 4, "ngFor", "ngForOf"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "row", 3, "ngClass"], ["role", "gridcell", 3, "class", 4, "ngIf"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""]],
        template: function YearTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, YearTableComponent_thead_1_Template, 4, 2, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, YearTableComponent_tr_3_Template, 3, 4, "tr", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.headRow && ctx.headRow.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.bodyRows)("ngForTrackBy", ctx.trackByBodyRow);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
        encapsulation: 2,
        changeDetection: 0
      });

      YearTableComponent.ctorParameters = function () {
        return [{
          type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["DateHelperService"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](YearTableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            // tslint:disable-next-line:component-selector
            selector: 'year-table',
            exportAs: 'yearTable',
            template: "<table class=\"ant-picker-content\" cellspacing=\"0\" role=\"grid\">\n  <thead *ngIf=\"headRow && headRow.length > 0\">\n    <tr role=\"row\">\n      <th *ngIf=\"showWeek\" role=\"columnheader\"></th>\n      <th *ngFor=\"let cell of headRow\" role=\"columnheader\" title=\"{{ cell.title }}\">\n        {{ cell.content }}\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let row of bodyRows; trackBy: trackByBodyRow\" [ngClass]=\"row.classMap!\" role=\"row\">\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-cell-week\">\n        {{ row.weekNum }}\n      </td>\n      <td\n        *ngFor=\"let cell of row.dateCells; trackBy: trackByBodyColumn\"\n        title=\"{{ cell.title }}\"\n        role=\"gridcell\"\n        [ngClass]=\"cell.classMap!\"\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\n        (mouseenter)=\"cell.onMouseEnter()\"\n      >\n        <ng-container [ngSwitch]=\"prefixCls\">\n          <ng-container *ngSwitchCase=\"'ant-picker'\">\n            <ng-container [ngSwitch]=\"true\">\n              <ng-container *ngSwitchCase=\"isTemplateRef(cell.cellRender)\">\n                <!--           *ngSwitchCase not has type assertion support, the cellRender type here is TemplateRef -->\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                ></ng-container>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"isNonEmptyString(cell.cellRender)\">\n                <span [innerHTML]=\"cell.cellRender\"></span>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <div\n                  class=\"{{ prefixCls }}-cell-inner\"\n                  [attr.aria-selected]=\"cell.isSelected\"\n                  [attr.aria-disabled]=\"cell.isDisabled\"\n                >\n                  {{ cell.content }}\n                </div>\n              </ng-container>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'ant-picker-calendar'\">\n            <div\n              class=\"{{ prefixCls }}-date ant-picker-cell-inner\"\n              [class.ant-picker-calendar-date-today]=\"cell.isToday\"\n            >\n              <ng-container *ngIf=\"cell.fullCellRender; else defaultCell\">\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.fullCellRender); context: { $implicit: cell.value }\"\n                >\n                </ng-container>\n              </ng-container>\n              <ng-template #defaultCell>\n                <div class=\"{{ prefixCls }}-date-value\">{{ cell.content }}</div>\n                <div class=\"{{ prefixCls }}-date-content\">\n                  <ng-container\n                    *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                  >\n                  </ng-container>\n                </div>\n              </ng-template>\n            </div>\n          </ng-container>\n        </ng-container>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"
          }]
        }], function () {
          return [{
            type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["DateHelperService"]
          }];
        }, null);
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var LibPackerModule = /*#__PURE__*/_createClass(function LibPackerModule() {
        _classCallCheck(this, LibPackerModule);
      });

      LibPackerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: LibPackerModule
      });
      LibPackerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function LibPackerModule_Factory(t) {
          return new (t || LibPackerModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["NzI18nModule"], ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_10__["NzTimePickerModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzOutletModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LibPackerModule, {
          declarations: function declarations() {
            return [DateHeaderComponent, DateTableComponent, DecadeHeaderComponent, DecadeTableComponent, MonthHeaderComponent, MonthTableComponent, YearHeaderComponent, YearTableComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["NzI18nModule"], ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_10__["NzTimePickerModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzOutletModule"]];
          },
          exports: function exports() {
            return [DateHeaderComponent, DateTableComponent, DecadeHeaderComponent, DecadeTableComponent, MonthHeaderComponent, MonthTableComponent, YearHeaderComponent, YearTableComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](LibPackerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["NzI18nModule"], ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_10__["NzTimePickerModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzOutletModule"]],
            exports: [DateHeaderComponent, DateTableComponent, DecadeHeaderComponent, DecadeTableComponent, MonthHeaderComponent, MonthTableComponent, YearHeaderComponent, YearTableComponent],
            declarations: [DateHeaderComponent, DateTableComponent, DecadeHeaderComponent, DecadeTableComponent, MonthHeaderComponent, MonthTableComponent, YearHeaderComponent, YearTableComponent]
          }]
        }], null, null);
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */
      // tslint:disable-next-line:directive-class-suffix


      var NzMonthPickerComponent = /*#__PURE__*/_createClass(function NzMonthPickerComponent(datePicker) {
        _classCallCheck(this, NzMonthPickerComponent);

        this.datePicker = datePicker;
        this.datePicker.nzMode = 'month';
      });

      NzMonthPickerComponent.ɵfac = function NzMonthPickerComponent_Factory(t) {
        return new (t || NzMonthPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzDatePickerComponent, 9));
      };

      NzMonthPickerComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: NzMonthPickerComponent,
        selectors: [["nz-month-picker"]],
        exportAs: ["nzMonthPicker"]
      });

      NzMonthPickerComponent.ctorParameters = function () {
        return [{
          type: NzDatePickerComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzMonthPickerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'nz-month-picker',
            exportAs: 'nzMonthPicker'
          }]
        }], function () {
          return [{
            type: NzDatePickerComponent,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
            }]
          }];
        }, null);
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */
      // tslint:disable-next-line:directive-class-suffix


      var NzRangePickerComponent = /*#__PURE__*/_createClass(function NzRangePickerComponent(datePicker) {
        _classCallCheck(this, NzRangePickerComponent);

        this.datePicker = datePicker;
        this.datePicker.isRange = true;
      });

      NzRangePickerComponent.ɵfac = function NzRangePickerComponent_Factory(t) {
        return new (t || NzRangePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzDatePickerComponent, 9));
      };

      NzRangePickerComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: NzRangePickerComponent,
        selectors: [["nz-range-picker"]],
        exportAs: ["nzRangePicker"]
      });

      NzRangePickerComponent.ctorParameters = function () {
        return [{
          type: NzDatePickerComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzRangePickerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'nz-range-picker',
            exportAs: 'nzRangePicker'
          }]
        }], function () {
          return [{
            type: NzDatePickerComponent,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
            }]
          }];
        }, null);
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */
      // tslint:disable-next-line:directive-class-suffix


      var NzWeekPickerComponent = /*#__PURE__*/_createClass(function NzWeekPickerComponent(datePicker) {
        _classCallCheck(this, NzWeekPickerComponent);

        this.datePicker = datePicker;
        this.datePicker.nzMode = 'week';
      });

      NzWeekPickerComponent.ɵfac = function NzWeekPickerComponent_Factory(t) {
        return new (t || NzWeekPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzDatePickerComponent, 9));
      };

      NzWeekPickerComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: NzWeekPickerComponent,
        selectors: [["nz-week-picker"]],
        exportAs: ["nzWeekPicker"]
      });

      NzWeekPickerComponent.ctorParameters = function () {
        return [{
          type: NzDatePickerComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzWeekPickerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'nz-week-picker',
            exportAs: 'nzWeekPicker'
          }]
        }], function () {
          return [{
            type: NzDatePickerComponent,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
            }]
          }];
        }, null);
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */
      // tslint:disable-next-line:directive-class-suffix


      var NzYearPickerComponent = /*#__PURE__*/_createClass(function NzYearPickerComponent(datePicker) {
        _classCallCheck(this, NzYearPickerComponent);

        this.datePicker = datePicker;
        this.datePicker.nzMode = 'year';
      });

      NzYearPickerComponent.ɵfac = function NzYearPickerComponent_Factory(t) {
        return new (t || NzYearPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzDatePickerComponent, 9));
      };

      NzYearPickerComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: NzYearPickerComponent,
        selectors: [["nz-year-picker"]],
        exportAs: ["nzYearPicker"]
      });

      NzYearPickerComponent.ctorParameters = function () {
        return [{
          type: NzDatePickerComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzYearPickerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'nz-year-picker',
            exportAs: 'nzYearPicker'
          }]
        }], function () {
          return [{
            type: NzDatePickerComponent,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
            }]
          }];
        }, null);
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzDatePickerModule = /*#__PURE__*/_createClass(function NzDatePickerModule() {
        _classCallCheck(this, NzDatePickerModule);
      });

      NzDatePickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: NzDatePickerModule
      });
      NzDatePickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function NzDatePickerModule_Factory(t) {
          return new (t || NzDatePickerModule)();
        },
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], LibPackerModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_8__["NzOverlayModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_6__["NzNoAnimationModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzOutletModule"], ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_10__["NzTimePickerModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"], LibPackerModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NzDatePickerModule, {
          declarations: function declarations() {
            return [NzDatePickerComponent, NzMonthPickerComponent, NzYearPickerComponent, NzWeekPickerComponent, NzRangePickerComponent, CalendarFooterComponent, InnerPopupComponent, DateRangePopupComponent];
          },
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], LibPackerModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_8__["NzOverlayModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_6__["NzNoAnimationModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzOutletModule"], ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_10__["NzTimePickerModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"], LibPackerModule];
          },
          exports: function exports() {
            return [NzDatePickerComponent, NzRangePickerComponent, NzMonthPickerComponent, NzYearPickerComponent, NzWeekPickerComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzDatePickerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], LibPackerModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_8__["NzOverlayModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_6__["NzNoAnimationModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzOutletModule"], ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_10__["NzTimePickerModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"], LibPackerModule],
            exports: [NzDatePickerComponent, NzRangePickerComponent, NzMonthPickerComponent, NzYearPickerComponent, NzWeekPickerComponent],
            declarations: [NzDatePickerComponent, NzMonthPickerComponent, NzYearPickerComponent, NzWeekPickerComponent, NzRangePickerComponent, CalendarFooterComponent, InnerPopupComponent, DateRangePopupComponent]
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
      //# sourceMappingURL=ng-zorro-antd-date-picker.js.map

      /***/

    },

    /***/
    "ix5O":
    /*!***************************************************************************************!*\
      !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-time-picker.js ***!
      \***************************************************************************************/

    /*! exports provided: NzTimePickerComponent, NzTimePickerModule, NzTimePickerPanelComponent */

    /***/
    function ix5O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzTimePickerComponent", function () {
        return NzTimePickerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzTimePickerModule", function () {
        return NzTimePickerModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzTimePickerPanelComponent", function () {
        return NzTimePickerPanelComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! date-fns */
      "IDeP");
      /* harmony import */


      var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/core/animation */
      "GR68");
      /* harmony import */


      var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/core/config */
      "2Suw");
      /* harmony import */


      var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/core/logger */
      "79xS");
      /* harmony import */


      var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/core/util */
      "/KA4");
      /* harmony import */


      var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/i18n */
      "Rm4T");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-zorro-antd/core/outlet */
      "pdGh");
      /* harmony import */


      var ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-zorro-antd/core/overlay */
      "JgHy");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ng-zorro-antd/core/polyfill */
      "ejfv");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var _c0 = ["inputElement"];

      function NzTimePickerComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var suffixIcon_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", suffixIcon_r4);
        }
      }

      function NzTimePickerComponent_span_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NzTimePickerComponent_span_6_Template_span_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r5.onClickClearBtn($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", ctx_r2.nzClearText)("title", ctx_r2.nzClearText);
        }
      }

      function NzTimePickerComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nz-time-picker-panel", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NzTimePickerComponent_ng_template_7_Template_nz_time_picker_panel_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r7.value = $event;
          })("ngModelChange", function NzTimePickerComponent_ng_template_7_Template_nz_time_picker_panel_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r9.onPanelValueChange($event);
          })("closePanel", function NzTimePickerComponent_ng_template_7_Template_nz_time_picker_panel_closePanel_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r10.setCurrentValueAndClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@slideMotion", "enter");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.nzPopupClassName)("format", ctx_r3.nzFormat)("nzHourStep", ctx_r3.nzHourStep)("nzMinuteStep", ctx_r3.nzMinuteStep)("nzSecondStep", ctx_r3.nzSecondStep)("nzDisabledHours", ctx_r3.nzDisabledHours)("nzDisabledMinutes", ctx_r3.nzDisabledMinutes)("nzDisabledSeconds", ctx_r3.nzDisabledSeconds)("nzPlaceHolder", ctx_r3.nzPlaceHolder || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 19, ctx_r3.i18nPlaceHolder$))("nzHideDisabledOptions", ctx_r3.nzHideDisabledOptions)("nzUse12Hours", ctx_r3.nzUse12Hours)("nzDefaultOpenValue", ctx_r3.nzDefaultOpenValue)("nzAddOn", ctx_r3.nzAddOn)("nzClearText", ctx_r3.nzClearText)("nzNowText", ctx_r3.nzNowText)("nzOkText", ctx_r3.nzOkText)("nzAllowEmpty", ctx_r3.nzAllowEmpty)("ngModel", ctx_r3.value);
        }
      }

      var _c1 = ["hourListElement"];
      var _c2 = ["minuteListElement"];
      var _c3 = ["secondListElement"];
      var _c4 = ["use12HoursListElement"];

      function NzTimePickerPanelComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.dateHelper.format(ctx_r0.time == null ? null : ctx_r0.time.value, ctx_r0.format) || "\xA0");
        }
      }

      function NzTimePickerPanelComponent_ul_2_ng_container_2_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NzTimePickerPanelComponent_ul_2_ng_container_2_li_1_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var hour_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r10.selectHour(hour_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var hour_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-picker-time-panel-cell-selected", ctx_r9.isSelectedHour(hour_r8))("ant-picker-time-panel-cell-disabled", hour_r8.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 5, hour_r8.index, "2.0-0"));
        }
      }

      function NzTimePickerPanelComponent_ul_2_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTimePickerPanelComponent_ul_2_ng_container_2_li_1_Template, 4, 8, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var hour_r8 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx_r7.nzHideDisabledOptions && hour_r8.disabled));
        }
      }

      function NzTimePickerPanelComponent_ul_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NzTimePickerPanelComponent_ul_2_ng_container_2_Template, 2, 1, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.hourRange)("ngForTrackBy", ctx_r1.trackByFn);
        }
      }

      function NzTimePickerPanelComponent_ul_3_ng_container_2_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NzTimePickerPanelComponent_ul_3_ng_container_2_li_1_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20);

            var minute_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r18.selectMinute(minute_r16);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var minute_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-picker-time-panel-cell-selected", ctx_r17.isSelectedMinute(minute_r16))("ant-picker-time-panel-cell-disabled", minute_r16.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 5, minute_r16.index, "2.0-0"));
        }
      }

      function NzTimePickerPanelComponent_ul_3_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTimePickerPanelComponent_ul_3_ng_container_2_li_1_Template, 4, 8, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var minute_r16 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx_r15.nzHideDisabledOptions && minute_r16.disabled));
        }
      }

      function NzTimePickerPanelComponent_ul_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 6, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NzTimePickerPanelComponent_ul_3_ng_container_2_Template, 2, 1, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.minuteRange)("ngForTrackBy", ctx_r2.trackByFn);
        }
      }

      function NzTimePickerPanelComponent_ul_4_ng_container_2_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NzTimePickerPanelComponent_ul_4_ng_container_2_li_1_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28);

            var second_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r26.selectSecond(second_r24);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var second_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-picker-time-panel-cell-selected", ctx_r25.isSelectedSecond(second_r24))("ant-picker-time-panel-cell-disabled", second_r24.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 5, second_r24.index, "2.0-0"));
        }
      }

      function NzTimePickerPanelComponent_ul_4_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTimePickerPanelComponent_ul_4_ng_container_2_li_1_Template, 4, 8, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var second_r24 = ctx.$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx_r23.nzHideDisabledOptions && second_r24.disabled));
        }
      }

      function NzTimePickerPanelComponent_ul_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 6, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NzTimePickerPanelComponent_ul_4_ng_container_2_Template, 2, 1, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.secondRange)("ngForTrackBy", ctx_r3.trackByFn);
        }
      }

      function NzTimePickerPanelComponent_ul_5_ng_container_2_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NzTimePickerPanelComponent_ul_5_ng_container_2_li_1_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36);

            var range_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r34.select12Hours(range_r32);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var range_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-picker-time-panel-cell-selected", ctx_r33.isSelected12Hours(range_r32));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](range_r32.value);
        }
      }

      function NzTimePickerPanelComponent_ul_5_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTimePickerPanelComponent_ul_5_ng_container_2_li_1_Template, 3, 3, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r31.nzHideDisabledOptions);
        }
      }

      function NzTimePickerPanelComponent_ul_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 6, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NzTimePickerPanelComponent_ul_5_ng_container_2_Template, 2, 1, "ng-container", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.use12HoursRange);
        }
      }

      function NzTimePickerPanelComponent_div_6_div_1_ng_template_1_Template(rf, ctx) {}

      function NzTimePickerPanelComponent_div_6_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTimePickerPanelComponent_div_6_div_1_ng_template_1_Template, 0, 0, "ng-template", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx_r38.nzAddOn);
        }
      }

      function NzTimePickerPanelComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTimePickerPanelComponent_div_6_div_1_Template, 2, 1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ul", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NzTimePickerPanelComponent_div_6_Template_a_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r41);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r40.onClickNow();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "nzI18n");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "li", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NzTimePickerPanelComponent_div_6_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r41);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r42.onClickOk();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "nzI18n");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.nzAddOn);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r5.nzNowText || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 3, "Calendar.lang.now"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r5.nzOkText || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 5, "Calendar.lang.ok"), " ");
        }
      }

      var NZ_CONFIG_MODULE_NAME = 'timePicker';

      var NzTimePickerComponent = /*#__PURE__*/function () {
        function NzTimePickerComponent(nzConfigService, i18n, element, renderer, cdr, dateHelper, platform, elementRef, directionality) {
          _classCallCheck(this, NzTimePickerComponent);

          this.nzConfigService = nzConfigService;
          this.i18n = i18n;
          this.element = element;
          this.renderer = renderer;
          this.cdr = cdr;
          this.dateHelper = dateHelper;
          this.platform = platform;
          this.elementRef = elementRef;
          this.directionality = directionality;
          this._nzModuleName = NZ_CONFIG_MODULE_NAME;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
          this.isInit = false;
          this.focused = false;
          this.inputValue = '';
          this.value = null;
          this.preValue = null;
          this.i18nPlaceHolder$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])(undefined);
          this.overlayPositions = [{
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
            offsetY: 3
          }];
          this.dir = 'ltr';
          this.nzId = null;
          this.nzSize = null;
          this.nzHourStep = 1;
          this.nzMinuteStep = 1;
          this.nzSecondStep = 1;
          this.nzClearText = 'clear';
          this.nzNowText = '';
          this.nzOkText = '';
          this.nzPopupClassName = '';
          this.nzPlaceHolder = '';
          this.nzFormat = 'HH:mm:ss';
          this.nzOpen = false;
          this.nzUse12Hours = false;
          this.nzSuffixIcon = 'clock-circle';
          this.nzOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          this.nzHideDisabledOptions = false;
          this.nzAllowEmpty = true;
          this.nzDisabled = false;
          this.nzAutoFocus = false;
          this.nzBackdrop = false; // TODO: move to host after View Engine deprecation

          this.elementRef.nativeElement.classList.add('ant-picker');
        }

        _createClass(NzTimePickerComponent, [{
          key: "emitValue",
          value: function emitValue(value) {
            this.setValue(value, true);

            if (this._onChange) {
              this._onChange(this.value);
            }

            if (this._onTouched) {
              this._onTouched();
            }
          }
        }, {
          key: "setValue",
          value: function setValue(value) {
            var syncPreValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (syncPreValue) {
              this.preValue = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["isValid"])(value) ? new Date(value) : null;
            }

            this.value = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["isValid"])(value) ? new Date(value) : null;
            this.inputValue = this.dateHelper.format(value, this.nzFormat);
            this.cdr.markForCheck();
          }
        }, {
          key: "open",
          value: function open() {
            if (this.nzDisabled || this.nzOpen) {
              return;
            }

            this.focus();
            this.nzOpen = true;
            this.nzOpenChange.emit(this.nzOpen);
          }
        }, {
          key: "close",
          value: function close() {
            this.nzOpen = false;
            this.cdr.markForCheck();
            this.nzOpenChange.emit(this.nzOpen);
          }
        }, {
          key: "updateAutoFocus",
          value: function updateAutoFocus() {
            if (this.isInit && !this.nzDisabled) {
              if (this.nzAutoFocus) {
                this.renderer.setAttribute(this.inputRef.nativeElement, 'autofocus', 'autofocus');
              } else {
                this.renderer.removeAttribute(this.inputRef.nativeElement, 'autofocus');
              }
            }
          }
        }, {
          key: "onClickClearBtn",
          value: function onClickClearBtn(event) {
            event.stopPropagation();
            this.emitValue(null);
          }
        }, {
          key: "onClickOutside",
          value: function onClickOutside(event) {
            if (!this.element.nativeElement.contains(event.target)) {
              this.setCurrentValueAndClose();
            }
          }
        }, {
          key: "onFocus",
          value: function onFocus(value) {
            this.focused = value;
          }
        }, {
          key: "focus",
          value: function focus() {
            if (this.inputRef.nativeElement) {
              this.inputRef.nativeElement.focus();
            }
          }
        }, {
          key: "blur",
          value: function blur() {
            if (this.inputRef.nativeElement) {
              this.inputRef.nativeElement.blur();
            }
          }
        }, {
          key: "onKeyupEsc",
          value: function onKeyupEsc() {
            this.setValue(this.preValue);
          }
        }, {
          key: "onKeyupEnter",
          value: function onKeyupEnter() {
            if (this.nzOpen && Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["isValid"])(this.value)) {
              this.setCurrentValueAndClose();
            } else if (!this.nzOpen) {
              this.open();
            }
          }
        }, {
          key: "onInputChange",
          value: function onInputChange(str) {
            if (!this.platform.TRIDENT && document.activeElement === this.inputRef.nativeElement) {
              this.open();
              this.parseTimeString(str);
            }
          }
        }, {
          key: "onPanelValueChange",
          value: function onPanelValueChange(value) {
            this.setValue(value);
            this.focus();
          }
        }, {
          key: "setCurrentValueAndClose",
          value: function setCurrentValueAndClose() {
            this.emitValue(this.value);
            this.close();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            var _a;

            this.inputSize = Math.max(8, this.nzFormat.length) + 2;
            this.origin = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["CdkOverlayOrigin"](this.element);
            this.i18nPlaceHolder$ = this.i18n.localeChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function (nzLocale) {
              return nzLocale.TimePicker.placeholder;
            }));
            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this.destroy$)).subscribe(function (direction) {
              _this18.dir = direction;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var nzUse12Hours = changes.nzUse12Hours,
                nzFormat = changes.nzFormat,
                nzDisabled = changes.nzDisabled,
                nzAutoFocus = changes.nzAutoFocus;

            if (nzUse12Hours && !nzUse12Hours.previousValue && nzUse12Hours.currentValue && !nzFormat) {
              this.nzFormat = 'h:mm:ss a';
            }

            if (nzDisabled) {
              var value = nzDisabled.currentValue;
              var input = this.inputRef.nativeElement;

              if (value) {
                this.renderer.setAttribute(input, 'disabled', '');
              } else {
                this.renderer.removeAttribute(input, 'disabled');
              }
            }

            if (nzAutoFocus) {
              this.updateAutoFocus();
            }
          }
        }, {
          key: "parseTimeString",
          value: function parseTimeString(str) {
            var value = this.dateHelper.parseTime(str, this.nzFormat) || null;

            if (Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["isValid"])(value)) {
              this.value = value;
              this.cdr.markForCheck();
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.isInit = true;
            this.updateAutoFocus();
          }
        }, {
          key: "writeValue",
          value: function writeValue(time) {
            var result;

            if (time instanceof Date) {
              result = time;
            } else if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["isNil"])(time)) {
              result = null;
            } else {
              Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_9__["warn"])('Non-Date type is not recommended for time-picker, use "Date" type.');
              result = new Date(time);
            }

            this.setValue(result, true);
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.nzDisabled = isDisabled;
            this.cdr.markForCheck();
          }
        }]);

        return NzTimePickerComponent;
      }();

      NzTimePickerComponent.ɵfac = function NzTimePickerComponent_Factory(t) {
        return new (t || NzTimePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["DateHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], 8));
      };

      NzTimePickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: NzTimePickerComponent,
        selectors: [["nz-time-picker"]],
        viewQuery: function NzTimePickerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.inputRef = _t.first);
          }
        },
        hostVars: 10,
        hostBindings: function NzTimePickerComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NzTimePickerComponent_click_HostBindingHandler() {
              return ctx.open();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-picker-large", ctx.nzSize === "large")("ant-picker-small", ctx.nzSize === "small")("ant-picker-disabled", ctx.nzDisabled)("ant-picker-focused", ctx.focused)("ant-picker-rtl", ctx.dir === "rtl");
          }
        },
        inputs: {
          nzId: "nzId",
          nzSize: "nzSize",
          nzHourStep: "nzHourStep",
          nzMinuteStep: "nzMinuteStep",
          nzSecondStep: "nzSecondStep",
          nzClearText: "nzClearText",
          nzNowText: "nzNowText",
          nzOkText: "nzOkText",
          nzPopupClassName: "nzPopupClassName",
          nzPlaceHolder: "nzPlaceHolder",
          nzFormat: "nzFormat",
          nzOpen: "nzOpen",
          nzUse12Hours: "nzUse12Hours",
          nzSuffixIcon: "nzSuffixIcon",
          nzHideDisabledOptions: "nzHideDisabledOptions",
          nzAllowEmpty: "nzAllowEmpty",
          nzDisabled: "nzDisabled",
          nzAutoFocus: "nzAutoFocus",
          nzBackdrop: "nzBackdrop",
          nzAddOn: "nzAddOn",
          nzDefaultOpenValue: "nzDefaultOpenValue",
          nzDisabledHours: "nzDisabledHours",
          nzDisabledMinutes: "nzDisabledMinutes",
          nzDisabledSeconds: "nzDisabledSeconds"
        },
        outputs: {
          nzOpenChange: "nzOpenChange"
        },
        exportAs: ["nzTimePicker"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
          useExisting: NzTimePickerComponent,
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        decls: 8,
        vars: 15,
        consts: [[1, "ant-picker-input"], ["type", "text", 3, "size", "placeholder", "ngModel", "disabled", "ngModelChange", "focus", "blur", "keyup.enter", "keyup.escape"], ["inputElement", ""], [1, "ant-picker-suffix"], [4, "nzStringTemplateOutlet"], ["class", "ant-picker-clear", 3, "click", 4, "ngIf"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayTransformOriginOn", "detach", "overlayOutsideClick"], ["nz-icon", "", 3, "nzType"], [1, "ant-picker-clear", 3, "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill"], [1, "ant-picker-dropdown"], [1, "ant-picker-panel-container"], ["tabindex", "-1", 1, "ant-picker-panel"], [3, "ngClass", "format", "nzHourStep", "nzMinuteStep", "nzSecondStep", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzPlaceHolder", "nzHideDisabledOptions", "nzUse12Hours", "nzDefaultOpenValue", "nzAddOn", "nzClearText", "nzNowText", "nzOkText", "nzAllowEmpty", "ngModel", "ngModelChange", "closePanel"]],
        template: function NzTimePickerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "input", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NzTimePickerComponent_Template_input_ngModelChange_1_listener($event) {
              return ctx.inputValue = $event;
            })("focus", function NzTimePickerComponent_Template_input_focus_1_listener() {
              return ctx.onFocus(true);
            })("blur", function NzTimePickerComponent_Template_input_blur_1_listener() {
              return ctx.onFocus(false);
            })("keyup.enter", function NzTimePickerComponent_Template_input_keyup_enter_1_listener() {
              return ctx.onKeyupEnter();
            })("keyup.escape", function NzTimePickerComponent_Template_input_keyup_escape_1_listener() {
              return ctx.onKeyupEsc();
            })("ngModelChange", function NzTimePickerComponent_Template_input_ngModelChange_1_listener($event) {
              return ctx.onInputChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, NzTimePickerComponent_ng_container_5_Template, 2, 1, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, NzTimePickerComponent_span_6_Template, 2, 2, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, NzTimePickerComponent_ng_template_7_Template, 5, 21, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("detach", function NzTimePickerComponent_Template_ng_template_detach_7_listener() {
              return ctx.close();
            })("overlayOutsideClick", function NzTimePickerComponent_Template_ng_template_overlayOutsideClick_7_listener($event) {
              return ctx.onClickOutside($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("size", ctx.inputSize)("placeholder", ctx.nzPlaceHolder || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 13, ctx.i18nPlaceHolder$))("ngModel", ctx.inputValue)("disabled", ctx.nzDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("id", ctx.nzId);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzSuffixIcon);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nzAllowEmpty && !ctx.nzDisabled && ctx.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayPositions", ctx.overlayPositions)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx.nzOpen)("cdkConnectedOverlayOffsetY", -2)("cdkConnectedOverlayTransformOriginOn", ".ant-picker-dropdown");
          }
        },
        directives: function directives() {
          return [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_16__["NzStringTemplateOutletDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["CdkConnectedOverlay"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_17__["NzConnectedOverlayDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__["ɵNzTransitionPatchDirective"], NzTimePickerPanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"]];
        },
        pipes: function pipes() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"]];
        },
        encapsulation: 2,
        data: {
          animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_7__["slideMotion"]]
        },
        changeDetection: 0
      });

      NzTimePickerComponent.ctorParameters = function () {
        return [{
          type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["NzConfigService"]
        }, {
          type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["DateHelperService"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }];
      };

      NzTimePickerComponent.propDecorators = {
        inputRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['inputElement', {
            "static": true
          }]
        }],
        nzId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzHourStep: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzMinuteStep: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzSecondStep: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzClearText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzNowText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzOkText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzPopupClassName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzPlaceHolder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzAddOn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzDefaultOpenValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzDisabledHours: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzDisabledMinutes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzDisabledSeconds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzFormat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzUse12Hours: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzSuffixIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzOpenChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        nzHideDisabledOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzAllowEmpty: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzAutoFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzBackdrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], NzTimePickerComponent.prototype, "nzHourStep", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], NzTimePickerComponent.prototype, "nzMinuteStep", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], NzTimePickerComponent.prototype, "nzSecondStep", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NzTimePickerComponent.prototype, "nzClearText", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NzTimePickerComponent.prototype, "nzNowText", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NzTimePickerComponent.prototype, "nzOkText", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NzTimePickerComponent.prototype, "nzPopupClassName", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NzTimePickerComponent.prototype, "nzFormat", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["WithConfig"])(), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], NzTimePickerComponent.prototype, "nzUse12Hours", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzTimePickerComponent.prototype, "nzSuffixIcon", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzTimePickerComponent.prototype, "nzHideDisabledOptions", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["WithConfig"])(), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], NzTimePickerComponent.prototype, "nzAllowEmpty", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzTimePickerComponent.prototype, "nzDisabled", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzTimePickerComponent.prototype, "nzAutoFocus", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzTimePickerComponent.prototype, "nzBackdrop", void 0);
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var TimeHolder = /*#__PURE__*/function () {
        function TimeHolder() {
          _classCallCheck(this, TimeHolder);

          this.selected12Hours = undefined;
          this._use12Hours = false;
          this._changes = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        }

        _createClass(TimeHolder, [{
          key: "setMinutes",
          value: function setMinutes(value, disabled) {
            if (value !== this.minutes && !disabled) {
              this.initValue();
              this.value.setMinutes(value);
              this.update();
            }

            return this;
          }
        }, {
          key: "setHours",
          value: function setHours(value, disabled) {
            if (value !== this.hours && !disabled) {
              this.initValue();

              if (this._use12Hours) {
                if (this.selected12Hours === 'PM' && value !== 12) {
                  this.value.setHours(value + 12);
                } else if (this.selected12Hours === 'AM' && value === 12) {
                  this.value.setHours(0);
                } else {
                  this.value.setHours(value);
                }
              } else {
                this.value.setHours(value);
              }

              this.update();
            }

            return this;
          }
        }, {
          key: "setSeconds",
          value: function setSeconds(value, disabled) {
            if (value !== this.seconds && !disabled) {
              this.initValue();
              this.value.setSeconds(value);
              this.update();
            }

            return this;
          }
        }, {
          key: "setUse12Hours",
          value: function setUse12Hours(value) {
            this._use12Hours = value;
            return this;
          }
        }, {
          key: "changes",
          get: function get() {
            return this._changes.asObservable();
          }
        }, {
          key: "setValue",
          value: function setValue(value, use12Hours) {
            if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["isNotNil"])(use12Hours)) {
              this._use12Hours = use12Hours;
            }

            if (value !== this.value) {
              this._value = value;

              if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["isNotNil"])(this.value)) {
                if (this._use12Hours && Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["isNotNil"])(this.hours)) {
                  this.selected12Hours = this.hours >= 12 ? 'PM' : 'AM';
                }
              } else {
                this._clear();
              }
            }

            return this;
          }
        }, {
          key: "initValue",
          value: function initValue() {
            if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["isNil"])(this.value)) {
              this.setValue(new Date(), this._use12Hours);
            }
          }
        }, {
          key: "clear",
          value: function clear() {
            this._clear();

            this.update();
          }
        }, {
          key: "isEmpty",
          get: function get() {
            return !(Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["isNotNil"])(this.hours) || Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["isNotNil"])(this.minutes) || Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["isNotNil"])(this.seconds));
          }
        }, {
          key: "_clear",
          value: function _clear() {
            this._value = undefined;
            this.selected12Hours = undefined;
          }
        }, {
          key: "update",
          value: function update() {
            if (this.isEmpty) {
              this._value = undefined;
            } else {
              if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["isNotNil"])(this.hours)) {
                this.value.setHours(this.hours);
              }

              if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["isNotNil"])(this.minutes)) {
                this.value.setMinutes(this.minutes);
              }

              if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["isNotNil"])(this.seconds)) {
                this.value.setSeconds(this.seconds);
              }

              if (this._use12Hours) {
                if (this.selected12Hours === 'PM' && this.hours < 12) {
                  this.value.setHours(this.hours + 12);
                }

                if (this.selected12Hours === 'AM' && this.hours >= 12) {
                  this.value.setHours(this.hours - 12);
                }
              }
            }

            this.changed();
          }
        }, {
          key: "changed",
          value: function changed() {
            this._changes.next(this.value);
          }
          /**
           * @description
           * UI view hours
           * Get viewHours which is selected in `time-picker-panel` and its range is [12, 1, 2, ..., 11]
           */

        }, {
          key: "viewHours",
          get: function get() {
            return this._use12Hours && Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["isNotNil"])(this.hours) ? this.calculateViewHour(this.hours) : this.hours;
          }
        }, {
          key: "setSelected12Hours",
          value: function setSelected12Hours(value) {
            if (value.toUpperCase() !== this.selected12Hours) {
              this.selected12Hours = value.toUpperCase();
              this.update();
            }
          }
        }, {
          key: "value",
          get: function get() {
            return this._value || this._defaultOpenValue;
          }
        }, {
          key: "hours",
          get: function get() {
            var _a;

            return (_a = this.value) === null || _a === void 0 ? void 0 : _a.getHours();
          }
        }, {
          key: "minutes",
          get: function get() {
            var _a;

            return (_a = this.value) === null || _a === void 0 ? void 0 : _a.getMinutes();
          }
        }, {
          key: "seconds",
          get: function get() {
            var _a;

            return (_a = this.value) === null || _a === void 0 ? void 0 : _a.getSeconds();
          }
        }, {
          key: "setDefaultOpenValue",
          value: function setDefaultOpenValue(value) {
            this._defaultOpenValue = value;
            return this;
          }
        }, {
          key: "calculateViewHour",
          value: function calculateViewHour(value) {
            var selected12Hours = this.selected12Hours;

            if (selected12Hours === 'PM' && value > 12) {
              return value - 12;
            }

            if (selected12Hours === 'AM' && value === 0) {
              return 12;
            }

            return value;
          }
        }]);

        return TimeHolder;
      }();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      function makeRange(length) {
        var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        return new Array(Math.ceil(length / step)).fill(0).map(function (_, i) {
          return (i + start) * step;
        });
      }

      var NzTimePickerPanelComponent = /*#__PURE__*/function () {
        function NzTimePickerPanelComponent(cdr, dateHelper, elementRef) {
          _classCallCheck(this, NzTimePickerPanelComponent);

          this.cdr = cdr;
          this.dateHelper = dateHelper;
          this.elementRef = elementRef;
          this._nzHourStep = 1;
          this._nzMinuteStep = 1;
          this._nzSecondStep = 1;
          this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
          this._format = 'HH:mm:ss';

          this._disabledHours = function () {
            return [];
          };

          this._disabledMinutes = function () {
            return [];
          };

          this._disabledSeconds = function () {
            return [];
          };

          this._allowEmpty = true;
          this.time = new TimeHolder();
          this.hourEnabled = true;
          this.minuteEnabled = true;
          this.secondEnabled = true;
          this.firstScrolled = false;
          this.enabledColumns = 3;
          this.nzInDatePicker = false; // If inside a date-picker, more diff works need to be done

          this.nzHideDisabledOptions = false;
          this.nzUse12Hours = false;
          this.closePanel = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](); // TODO: move to host after View Engine deprecation

          this.elementRef.nativeElement.classList.add('ant-picker-time-panel');
        }

        _createClass(NzTimePickerPanelComponent, [{
          key: "nzAllowEmpty",
          get: function get() {
            return this._allowEmpty;
          },
          set: function set(value) {
            if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["isNotNil"])(value)) {
              this._allowEmpty = value;
            }
          }
        }, {
          key: "nzDisabledHours",
          get: function get() {
            return this._disabledHours;
          },
          set: function set(value) {
            this._disabledHours = value;

            if (!!this._disabledHours) {
              this.buildHours();
            }
          }
        }, {
          key: "nzDisabledMinutes",
          get: function get() {
            return this._disabledMinutes;
          },
          set: function set(value) {
            if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["isNotNil"])(value)) {
              this._disabledMinutes = value;
              this.buildMinutes();
            }
          }
        }, {
          key: "nzDisabledSeconds",
          get: function get() {
            return this._disabledSeconds;
          },
          set: function set(value) {
            if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["isNotNil"])(value)) {
              this._disabledSeconds = value;
              this.buildSeconds();
            }
          }
        }, {
          key: "format",
          get: function get() {
            return this._format;
          },
          set: function set(value) {
            if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["isNotNil"])(value)) {
              this._format = value;
              this.enabledColumns = 0;
              var charSet = new Set(value);
              this.hourEnabled = charSet.has('H') || charSet.has('h');
              this.minuteEnabled = charSet.has('m');
              this.secondEnabled = charSet.has('s');

              if (this.hourEnabled) {
                this.enabledColumns++;
              }

              if (this.minuteEnabled) {
                this.enabledColumns++;
              }

              if (this.secondEnabled) {
                this.enabledColumns++;
              }

              if (this.nzUse12Hours) {
                this.build12Hours();
              }
            }
          }
        }, {
          key: "nzHourStep",
          get: function get() {
            return this._nzHourStep;
          },
          set: function set(value) {
            if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["isNotNil"])(value)) {
              this._nzHourStep = value;
              this.buildHours();
            }
          }
        }, {
          key: "nzMinuteStep",
          get: function get() {
            return this._nzMinuteStep;
          },
          set: function set(value) {
            if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["isNotNil"])(value)) {
              this._nzMinuteStep = value;
              this.buildMinutes();
            }
          }
        }, {
          key: "nzSecondStep",
          get: function get() {
            return this._nzSecondStep;
          },
          set: function set(value) {
            if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["isNotNil"])(value)) {
              this._nzSecondStep = value;
              this.buildSeconds();
            }
          }
        }, {
          key: "trackByFn",
          value: function trackByFn(index) {
            return index;
          }
        }, {
          key: "buildHours",
          value: function buildHours() {
            var _a;

            var hourRanges = 24;
            var disabledHours = (_a = this.nzDisabledHours) === null || _a === void 0 ? void 0 : _a.call(this);
            var startIndex = 0;

            if (this.nzUse12Hours) {
              hourRanges = 12;

              if (disabledHours) {
                if (this.time.selected12Hours === 'PM') {
                  /**
                   * Filter and transform hours which greater or equal to 12
                   * [0, 1, 2, ..., 12, 13, 14, 15, ..., 23] => [12, 1, 2, 3, ..., 11]
                   */
                  disabledHours = disabledHours.filter(function (i) {
                    return i >= 12;
                  }).map(function (i) {
                    return i > 12 ? i - 12 : i;
                  });
                } else {
                  /**
                   * Filter and transform hours which less than 12
                   * [0, 1, 2,..., 12, 13, 14, 15, ...23] => [12, 1, 2, 3, ..., 11]
                   */
                  disabledHours = disabledHours.filter(function (i) {
                    return i < 12 || i === 24;
                  }).map(function (i) {
                    return i === 24 || i === 0 ? 12 : i;
                  });
                }
              }

              startIndex = 1;
            }

            this.hourRange = makeRange(hourRanges, this.nzHourStep, startIndex).map(function (r) {
              return {
                index: r,
                disabled: !!disabledHours && disabledHours.indexOf(r) !== -1
              };
            });

            if (this.nzUse12Hours && this.hourRange[this.hourRange.length - 1].index === 12) {
              var temp = _toConsumableArray(this.hourRange);

              temp.unshift(temp[temp.length - 1]);
              temp.splice(temp.length - 1, 1);
              this.hourRange = temp;
            }
          }
        }, {
          key: "buildMinutes",
          value: function buildMinutes() {
            var _this19 = this;

            this.minuteRange = makeRange(60, this.nzMinuteStep).map(function (r) {
              return {
                index: r,
                disabled: !!_this19.nzDisabledMinutes && _this19.nzDisabledMinutes(_this19.time.hours).indexOf(r) !== -1
              };
            });
          }
        }, {
          key: "buildSeconds",
          value: function buildSeconds() {
            var _this20 = this;

            this.secondRange = makeRange(60, this.nzSecondStep).map(function (r) {
              return {
                index: r,
                disabled: !!_this20.nzDisabledSeconds && _this20.nzDisabledSeconds(_this20.time.hours, _this20.time.minutes).indexOf(r) !== -1
              };
            });
          }
        }, {
          key: "build12Hours",
          value: function build12Hours() {
            var isUpperFormat = this._format.includes('A');

            this.use12HoursRange = [{
              index: 0,
              value: isUpperFormat ? 'AM' : 'am'
            }, {
              index: 1,
              value: isUpperFormat ? 'PM' : 'pm'
            }];
          }
        }, {
          key: "buildTimes",
          value: function buildTimes() {
            this.buildHours();
            this.buildMinutes();
            this.buildSeconds();
            this.build12Hours();
          }
        }, {
          key: "scrollToTime",
          value: function scrollToTime() {
            var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (this.hourEnabled && this.hourListElement) {
              this.scrollToSelected(this.hourListElement.nativeElement, this.time.viewHours, delay, 'hour');
            }

            if (this.minuteEnabled && this.minuteListElement) {
              this.scrollToSelected(this.minuteListElement.nativeElement, this.time.minutes, delay, 'minute');
            }

            if (this.secondEnabled && this.secondListElement) {
              this.scrollToSelected(this.secondListElement.nativeElement, this.time.seconds, delay, 'second');
            }

            if (this.nzUse12Hours && this.use12HoursListElement) {
              var selectedHours = this.time.selected12Hours;
              var index = selectedHours === 'AM' ? 0 : 1;
              this.scrollToSelected(this.use12HoursListElement.nativeElement, index, delay, '12-hour');
            }
          }
        }, {
          key: "selectHour",
          value: function selectHour(hour) {
            this.time.setHours(hour.index, hour.disabled);

            if (!!this._disabledMinutes) {
              this.buildMinutes();
            }

            if (this._disabledSeconds || this._disabledMinutes) {
              this.buildSeconds();
            }
          }
        }, {
          key: "selectMinute",
          value: function selectMinute(minute) {
            this.time.setMinutes(minute.index, minute.disabled);

            if (!!this._disabledSeconds) {
              this.buildSeconds();
            }
          }
        }, {
          key: "selectSecond",
          value: function selectSecond(second) {
            this.time.setSeconds(second.index, second.disabled);
          }
        }, {
          key: "select12Hours",
          value: function select12Hours(value) {
            this.time.setSelected12Hours(value.value);

            if (!!this._disabledHours) {
              this.buildHours();
            }

            if (!!this._disabledMinutes) {
              this.buildMinutes();
            }

            if (!!this._disabledSeconds) {
              this.buildSeconds();
            }
          }
        }, {
          key: "scrollToSelected",
          value: function scrollToSelected(instance, index) {
            var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var unit = arguments.length > 3 ? arguments[3] : undefined;

            if (!instance) {
              return;
            }

            var transIndex = this.translateIndex(index, unit);
            var currentOption = instance.children[transIndex] || instance.children[0];
            this.scrollTo(instance, currentOption.offsetTop, duration);
          }
        }, {
          key: "translateIndex",
          value: function translateIndex(index, unit) {
            var _a, _b, _c;

            if (unit === 'hour') {
              return this.calcIndex((_a = this.nzDisabledHours) === null || _a === void 0 ? void 0 : _a.call(this), this.hourRange.map(function (item) {
                return item.index;
              }).indexOf(index));
            } else if (unit === 'minute') {
              return this.calcIndex((_b = this.nzDisabledMinutes) === null || _b === void 0 ? void 0 : _b.call(this, this.time.hours), this.minuteRange.map(function (item) {
                return item.index;
              }).indexOf(index));
            } else if (unit === 'second') {
              // second
              return this.calcIndex((_c = this.nzDisabledSeconds) === null || _c === void 0 ? void 0 : _c.call(this, this.time.hours, this.time.minutes), this.secondRange.map(function (item) {
                return item.index;
              }).indexOf(index));
            } else {
              // 12-hour
              return this.calcIndex([], this.use12HoursRange.map(function (item) {
                return item.index;
              }).indexOf(index));
            }
          }
        }, {
          key: "scrollTo",
          value: function scrollTo(element, to, duration) {
            var _this21 = this;

            if (duration <= 0) {
              element.scrollTop = to;
              return;
            }

            var difference = to - element.scrollTop;
            var perTick = difference / duration * 10;
            Object(ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_19__["reqAnimFrame"])(function () {
              element.scrollTop = element.scrollTop + perTick;

              if (element.scrollTop === to) {
                return;
              }

              _this21.scrollTo(element, to, duration - 10);
            });
          }
        }, {
          key: "calcIndex",
          value: function calcIndex(array, index) {
            if ((array === null || array === void 0 ? void 0 : array.length) && this.nzHideDisabledOptions) {
              return index - array.reduce(function (pre, value) {
                return pre + (value < index ? 1 : 0);
              }, 0);
            } else {
              return index;
            }
          }
        }, {
          key: "changed",
          value: function changed() {
            if (this.onChange) {
              this.onChange(this.time.value);
            }
          }
        }, {
          key: "touched",
          value: function touched() {
            if (this.onTouch) {
              this.onTouch();
            }
          }
        }, {
          key: "timeDisabled",
          value: function timeDisabled(value) {
            var _a, _b, _c, _d, _e, _f;

            var hour = value.getHours();
            var minute = value.getMinutes();
            var second = value.getSeconds();
            return ((_b = (_a = this.nzDisabledHours) === null || _a === void 0 ? void 0 : _a.call(this).indexOf(hour)) !== null && _b !== void 0 ? _b : -1) > -1 || ((_d = (_c = this.nzDisabledMinutes) === null || _c === void 0 ? void 0 : _c.call(this, hour).indexOf(minute)) !== null && _d !== void 0 ? _d : -1) > -1 || ((_f = (_e = this.nzDisabledSeconds) === null || _e === void 0 ? void 0 : _e.call(this, hour, minute).indexOf(second)) !== null && _f !== void 0 ? _f : -1) > -1;
          }
        }, {
          key: "onClickNow",
          value: function onClickNow() {
            var now = new Date();

            if (this.timeDisabled(now)) {
              return;
            }

            this.time.setValue(now);
            this.changed();
            this.closePanel.emit();
          }
        }, {
          key: "onClickOk",
          value: function onClickOk() {
            this.closePanel.emit();
          }
        }, {
          key: "isSelectedHour",
          value: function isSelectedHour(hour) {
            return hour.index === this.time.viewHours;
          }
        }, {
          key: "isSelectedMinute",
          value: function isSelectedMinute(minute) {
            return minute.index === this.time.minutes;
          }
        }, {
          key: "isSelectedSecond",
          value: function isSelectedSecond(second) {
            return second.index === this.time.seconds;
          }
        }, {
          key: "isSelected12Hours",
          value: function isSelected12Hours(value) {
            return value.value.toUpperCase() === this.time.selected12Hours;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this22 = this;

            this.time.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this.unsubscribe$)).subscribe(function () {
              _this22.changed();

              _this22.touched();

              _this22.scrollToTime(120);
            });
            this.buildTimes();
            setTimeout(function () {
              _this22.scrollToTime();

              _this22.firstScrolled = true;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var nzUse12Hours = changes.nzUse12Hours,
                nzDefaultOpenValue = changes.nzDefaultOpenValue;

            if (!(nzUse12Hours === null || nzUse12Hours === void 0 ? void 0 : nzUse12Hours.previousValue) && (nzUse12Hours === null || nzUse12Hours === void 0 ? void 0 : nzUse12Hours.currentValue)) {
              this.build12Hours();
              this.enabledColumns++;
            }

            if (nzDefaultOpenValue === null || nzDefaultOpenValue === void 0 ? void 0 : nzDefaultOpenValue.currentValue) {
              this.time.setDefaultOpenValue(this.nzDefaultOpenValue || new Date());
            }
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.time.setValue(value, this.nzUse12Hours);
            this.buildTimes();

            if (value && this.firstScrolled) {
              this.scrollToTime(120);
            } // Mark this component to be checked manually with internal properties changing (see: https://github.com/angular/angular/issues/10816)


            this.cdr.markForCheck();
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouch = fn;
          }
          /**
           * Prevent input losing focus when click panel
           * @param event
           */

        }, {
          key: "onMousedown",
          value: function onMousedown(event) {
            event.preventDefault();
          }
        }]);

        return NzTimePickerPanelComponent;
      }();

      NzTimePickerPanelComponent.ɵfac = function NzTimePickerPanelComponent_Factory(t) {
        return new (t || NzTimePickerPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["DateHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]));
      };

      NzTimePickerPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: NzTimePickerPanelComponent,
        selectors: [["nz-time-picker-panel"]],
        viewQuery: function NzTimePickerPanelComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c3, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c4, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.hourListElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.minuteListElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.secondListElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.use12HoursListElement = _t.first);
          }
        },
        hostVars: 12,
        hostBindings: function NzTimePickerPanelComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mousedown", function NzTimePickerPanelComponent_mousedown_HostBindingHandler($event) {
              return ctx.onMousedown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-picker-time-panel-column-0", ctx.enabledColumns === 0 && !ctx.nzInDatePicker)("ant-picker-time-panel-column-1", ctx.enabledColumns === 1 && !ctx.nzInDatePicker)("ant-picker-time-panel-column-2", ctx.enabledColumns === 2 && !ctx.nzInDatePicker)("ant-picker-time-panel-column-3", ctx.enabledColumns === 3 && !ctx.nzInDatePicker)("ant-picker-time-panel-narrow", ctx.enabledColumns < 3)("ant-picker-time-panel-placement-bottomLeft", !ctx.nzInDatePicker);
          }
        },
        inputs: {
          nzInDatePicker: "nzInDatePicker",
          nzHideDisabledOptions: "nzHideDisabledOptions",
          nzUse12Hours: "nzUse12Hours",
          nzAllowEmpty: "nzAllowEmpty",
          nzDisabledHours: "nzDisabledHours",
          nzDisabledMinutes: "nzDisabledMinutes",
          nzDisabledSeconds: "nzDisabledSeconds",
          format: "format",
          nzHourStep: "nzHourStep",
          nzMinuteStep: "nzMinuteStep",
          nzSecondStep: "nzSecondStep",
          nzAddOn: "nzAddOn",
          nzClearText: "nzClearText",
          nzNowText: "nzNowText",
          nzOkText: "nzOkText",
          nzPlaceHolder: "nzPlaceHolder",
          nzDefaultOpenValue: "nzDefaultOpenValue"
        },
        outputs: {
          closePanel: "closePanel"
        },
        exportAs: ["nzTimePickerPanel"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
          useExisting: NzTimePickerPanelComponent,
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        decls: 7,
        vars: 6,
        consts: [["class", "ant-picker-header", 4, "ngIf"], [1, "ant-picker-content"], ["class", "ant-picker-time-panel-column", "style", "position: relative;", 4, "ngIf"], ["class", "ant-picker-footer", 4, "ngIf"], [1, "ant-picker-header"], [1, "ant-picker-header-view"], [1, "ant-picker-time-panel-column", 2, "position", "relative"], ["hourListElement", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-picker-time-panel-cell", 3, "ant-picker-time-panel-cell-selected", "ant-picker-time-panel-cell-disabled", "click", 4, "ngIf"], [1, "ant-picker-time-panel-cell", 3, "click"], [1, "ant-picker-time-panel-cell-inner"], ["minuteListElement", ""], ["secondListElement", ""], ["use12HoursListElement", ""], [4, "ngFor", "ngForOf"], ["class", "ant-picker-time-panel-cell", 3, "ant-picker-time-panel-cell-selected", "click", 4, "ngIf"], [1, "ant-picker-footer"], ["class", "ant-picker-footer-extra", 4, "ngIf"], [1, "ant-picker-ranges"], [1, "ant-picker-now"], [3, "click"], [1, "ant-picker-ok"], ["nz-button", "", "type", "button", "nzSize", "small", "nzType", "primary", 3, "click"], [1, "ant-picker-footer-extra"], [3, "ngTemplateOutlet"]],
        template: function NzTimePickerPanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NzTimePickerPanelComponent_div_0_Template, 3, 1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NzTimePickerPanelComponent_ul_2_Template, 3, 2, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, NzTimePickerPanelComponent_ul_3_Template, 3, 2, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, NzTimePickerPanelComponent_ul_4_Template, 3, 2, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, NzTimePickerPanelComponent_ul_5_Template, 3, 1, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, NzTimePickerPanelComponent_div_6_Template, 11, 7, "div", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nzInDatePicker);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.hourEnabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.minuteEnabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.secondEnabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nzUse12Hours);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.nzInDatePicker);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_21__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgTemplateOutlet"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DecimalPipe"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nPipe"]],
        encapsulation: 2,
        changeDetection: 0
      });

      NzTimePickerPanelComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["DateHelperService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }];
      };

      NzTimePickerPanelComponent.propDecorators = {
        hourListElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['hourListElement', {
            "static": false
          }]
        }],
        minuteListElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['minuteListElement', {
            "static": false
          }]
        }],
        secondListElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['secondListElement', {
            "static": false
          }]
        }],
        use12HoursListElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['use12HoursListElement', {
            "static": false
          }]
        }],
        nzInDatePicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzAddOn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzHideDisabledOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzClearText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzNowText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzOkText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzPlaceHolder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzUse12Hours: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzDefaultOpenValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        closePanel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        nzAllowEmpty: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzDisabledHours: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzDisabledMinutes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzDisabledSeconds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        format: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzHourStep: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzMinuteStep: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzSecondStep: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzTimePickerPanelComponent.prototype, "nzUse12Hours", void 0);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzTimePickerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            selector: 'nz-time-picker',
            exportAs: 'nzTimePicker',
            template: "\n    <div class=\"ant-picker-input\">\n      <input\n        #inputElement\n        [attr.id]=\"nzId\"\n        type=\"text\"\n        [size]=\"inputSize\"\n        [placeholder]=\"nzPlaceHolder || (i18nPlaceHolder$ | async)\"\n        [(ngModel)]=\"inputValue\"\n        [disabled]=\"nzDisabled\"\n        (focus)=\"onFocus(true)\"\n        (blur)=\"onFocus(false)\"\n        (keyup.enter)=\"onKeyupEnter()\"\n        (keyup.escape)=\"onKeyupEsc()\"\n        (ngModelChange)=\"onInputChange($event)\"\n      />\n      <span class=\"ant-picker-suffix\">\n        <ng-container *nzStringTemplateOutlet=\"nzSuffixIcon; let suffixIcon\">\n          <i nz-icon [nzType]=\"suffixIcon\"></i>\n        </ng-container>\n      </span>\n      <span *ngIf=\"nzAllowEmpty && !nzDisabled && value\" class=\"ant-picker-clear\" (click)=\"onClickClearBtn($event)\">\n        <i nz-icon nzType=\"close-circle\" nzTheme=\"fill\" [attr.aria-label]=\"nzClearText\" [attr.title]=\"nzClearText\"></i>\n      </span>\n    </div>\n\n    <ng-template\n      cdkConnectedOverlay\n      nzConnectedOverlay\n      [cdkConnectedOverlayHasBackdrop]=\"nzBackdrop\"\n      [cdkConnectedOverlayPositions]=\"overlayPositions\"\n      [cdkConnectedOverlayOrigin]=\"origin\"\n      [cdkConnectedOverlayOpen]=\"nzOpen\"\n      [cdkConnectedOverlayOffsetY]=\"-2\"\n      [cdkConnectedOverlayTransformOriginOn]=\"'.ant-picker-dropdown'\"\n      (detach)=\"close()\"\n      (overlayOutsideClick)=\"onClickOutside($event)\"\n    >\n      <div [@slideMotion]=\"'enter'\" class=\"ant-picker-dropdown\">\n        <div class=\"ant-picker-panel-container\">\n          <div tabindex=\"-1\" class=\"ant-picker-panel\">\n            <nz-time-picker-panel\n              [ngClass]=\"nzPopupClassName\"\n              [format]=\"nzFormat\"\n              [nzHourStep]=\"nzHourStep\"\n              [nzMinuteStep]=\"nzMinuteStep\"\n              [nzSecondStep]=\"nzSecondStep\"\n              [nzDisabledHours]=\"nzDisabledHours\"\n              [nzDisabledMinutes]=\"nzDisabledMinutes\"\n              [nzDisabledSeconds]=\"nzDisabledSeconds\"\n              [nzPlaceHolder]=\"nzPlaceHolder || (i18nPlaceHolder$ | async)\"\n              [nzHideDisabledOptions]=\"nzHideDisabledOptions\"\n              [nzUse12Hours]=\"nzUse12Hours\"\n              [nzDefaultOpenValue]=\"nzDefaultOpenValue\"\n              [nzAddOn]=\"nzAddOn\"\n              [nzClearText]=\"nzClearText\"\n              [nzNowText]=\"nzNowText\"\n              [nzOkText]=\"nzOkText\"\n              [nzAllowEmpty]=\"nzAllowEmpty\"\n              [(ngModel)]=\"value\"\n              (ngModelChange)=\"onPanelValueChange($event)\"\n              (closePanel)=\"setCurrentValueAndClose()\"\n            ></nz-time-picker-panel>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  ",
            host: {
              '[class.ant-picker-large]': "nzSize === 'large'",
              '[class.ant-picker-small]': "nzSize === 'small'",
              '[class.ant-picker-disabled]': "nzDisabled",
              '[class.ant-picker-focused]': "focused",
              '[class.ant-picker-rtl]': "dir === 'rtl'",
              '(click)': 'open()'
            },
            animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_7__["slideMotion"]],
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
              useExisting: NzTimePickerComponent,
              multi: true
            }]
          }]
        }], function () {
          return [{
            type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["NzConfigService"]
          }, {
            type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["DateHelperService"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }];
        }, {
          nzId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzHourStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzMinuteStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzSecondStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzClearText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzNowText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzOkText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzPopupClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzPlaceHolder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzUse12Hours: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzSuffixIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzOpenChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          nzHideDisabledOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzAllowEmpty: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzAutoFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          inputRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['inputElement', {
              "static": true
            }]
          }],
          nzAddOn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzDefaultOpenValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzDisabledHours: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzDisabledMinutes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzDisabledSeconds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzTimePickerPanelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            selector: 'nz-time-picker-panel',
            exportAs: 'nzTimePickerPanel',
            template: "\n    <div *ngIf=\"nzInDatePicker\" class=\"ant-picker-header\">\n      <div class=\"ant-picker-header-view\">{{ dateHelper.format($any(time?.value), format) || '&nbsp;' }}</div>\n    </div>\n    <div class=\"ant-picker-content\">\n      <ul *ngIf=\"hourEnabled\" #hourListElement class=\"ant-picker-time-panel-column\" style=\"position: relative;\">\n        <ng-container *ngFor=\"let hour of hourRange; trackBy: trackByFn\">\n          <li\n            *ngIf=\"!(nzHideDisabledOptions && hour.disabled)\"\n            class=\"ant-picker-time-panel-cell\"\n            (click)=\"selectHour(hour)\"\n            [class.ant-picker-time-panel-cell-selected]=\"isSelectedHour(hour)\"\n            [class.ant-picker-time-panel-cell-disabled]=\"hour.disabled\"\n          >\n            <div class=\"ant-picker-time-panel-cell-inner\">{{ hour.index | number: '2.0-0' }}</div>\n          </li>\n        </ng-container>\n      </ul>\n      <ul *ngIf=\"minuteEnabled\" #minuteListElement class=\"ant-picker-time-panel-column\" style=\"position: relative;\">\n        <ng-container *ngFor=\"let minute of minuteRange; trackBy: trackByFn\">\n          <li\n            *ngIf=\"!(nzHideDisabledOptions && minute.disabled)\"\n            class=\"ant-picker-time-panel-cell\"\n            (click)=\"selectMinute(minute)\"\n            [class.ant-picker-time-panel-cell-selected]=\"isSelectedMinute(minute)\"\n            [class.ant-picker-time-panel-cell-disabled]=\"minute.disabled\"\n          >\n            <div class=\"ant-picker-time-panel-cell-inner\">{{ minute.index | number: '2.0-0' }}</div>\n          </li>\n        </ng-container>\n      </ul>\n      <ul *ngIf=\"secondEnabled\" #secondListElement class=\"ant-picker-time-panel-column\" style=\"position: relative;\">\n        <ng-container *ngFor=\"let second of secondRange; trackBy: trackByFn\">\n          <li\n            *ngIf=\"!(nzHideDisabledOptions && second.disabled)\"\n            class=\"ant-picker-time-panel-cell\"\n            (click)=\"selectSecond(second)\"\n            [class.ant-picker-time-panel-cell-selected]=\"isSelectedSecond(second)\"\n            [class.ant-picker-time-panel-cell-disabled]=\"second.disabled\"\n          >\n            <div class=\"ant-picker-time-panel-cell-inner\">{{ second.index | number: '2.0-0' }}</div>\n          </li>\n        </ng-container>\n      </ul>\n      <ul *ngIf=\"nzUse12Hours\" #use12HoursListElement class=\"ant-picker-time-panel-column\" style=\"position: relative;\">\n        <ng-container *ngFor=\"let range of use12HoursRange\">\n          <li\n            *ngIf=\"!nzHideDisabledOptions\"\n            (click)=\"select12Hours(range)\"\n            class=\"ant-picker-time-panel-cell\"\n            [class.ant-picker-time-panel-cell-selected]=\"isSelected12Hours(range)\"\n          >\n            <div class=\"ant-picker-time-panel-cell-inner\">{{ range.value }}</div>\n          </li>\n        </ng-container>\n      </ul>\n    </div>\n    <div *ngIf=\"!nzInDatePicker\" class=\"ant-picker-footer\">\n      <div *ngIf=\"nzAddOn\" class=\"ant-picker-footer-extra\">\n        <ng-template [ngTemplateOutlet]=\"nzAddOn\"></ng-template>\n      </div>\n      <ul class=\"ant-picker-ranges\">\n        <li class=\"ant-picker-now\">\n          <a (click)=\"onClickNow()\">\n            {{ nzNowText || ('Calendar.lang.now' | nzI18n) }}\n          </a>\n        </li>\n        <li class=\"ant-picker-ok\">\n          <button nz-button type=\"button\" nzSize=\"small\" nzType=\"primary\" (click)=\"onClickOk()\">\n            {{ nzOkText || ('Calendar.lang.ok' | nzI18n) }}\n          </button>\n        </li>\n      </ul>\n    </div>\n  ",
            host: {
              '[class.ant-picker-time-panel-column-0]': "enabledColumns === 0 && !nzInDatePicker",
              '[class.ant-picker-time-panel-column-1]': "enabledColumns === 1 && !nzInDatePicker",
              '[class.ant-picker-time-panel-column-2]': "enabledColumns === 2 && !nzInDatePicker",
              '[class.ant-picker-time-panel-column-3]': "enabledColumns === 3 && !nzInDatePicker",
              '[class.ant-picker-time-panel-narrow]': "enabledColumns < 3",
              '[class.ant-picker-time-panel-placement-bottomLeft]': "!nzInDatePicker",
              '(mousedown)': 'onMousedown($event)'
            },
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
              useExisting: NzTimePickerPanelComponent,
              multi: true
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["DateHelperService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }];
        }, {
          nzInDatePicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzHideDisabledOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzUse12Hours: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          closePanel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          nzAllowEmpty: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzDisabledHours: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzDisabledMinutes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzDisabledSeconds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzHourStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzMinuteStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzSecondStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          hourListElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['hourListElement', {
              "static": false
            }]
          }],
          minuteListElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['minuteListElement', {
              "static": false
            }]
          }],
          secondListElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['secondListElement', {
              "static": false
            }]
          }],
          use12HoursListElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['use12HoursListElement', {
              "static": false
            }]
          }],
          nzAddOn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzClearText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzNowText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzOkText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzPlaceHolder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzDefaultOpenValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzTimePickerModule = /*#__PURE__*/_createClass(function NzTimePickerModule() {
        _classCallCheck(this, NzTimePickerModule);
      });

      NzTimePickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: NzTimePickerModule
      });
      NzTimePickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function NzTimePickerModule_Factory(t) {
          return new (t || NzTimePickerModule)();
        },
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__["NzIconModule"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_17__["NzOverlayModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_16__["NzOutletModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NzTimePickerModule, {
          declarations: function declarations() {
            return [NzTimePickerComponent, NzTimePickerPanelComponent];
          },
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__["NzIconModule"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_17__["NzOverlayModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_16__["NzOutletModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonModule"]];
          },
          exports: function exports() {
            return [NzTimePickerPanelComponent, NzTimePickerComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzTimePickerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
          args: [{
            declarations: [NzTimePickerComponent, NzTimePickerPanelComponent],
            exports: [NzTimePickerPanelComponent, NzTimePickerComponent],
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__["NzIconModule"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_17__["NzOverlayModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_16__["NzOutletModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonModule"]]
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
      //# sourceMappingURL=ng-zorro-antd-time-picker.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~authentication-authentication-module~booth-booth-module~dashboard-dashboard-module~leader-sc~7c6029d3-es5.js.map