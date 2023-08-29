(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~authentication-authentication-module~booth-booth-module~home-home-module~leader-schedule-lea~4fe6adaf"], {
    /***/
    "oyxB":
    /*!********************************************************************************!*\
      !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tabs.js ***!
      \********************************************************************************/

    /*! exports provided: NZ_TAB_SET, NzTabChangeEvent, NzTabComponent, NzTabDirective, NzTabLinkDirective, NzTabLinkTemplateDirective, NzTabSetComponent, NzTabsModule, ɵNzTabAddButtonComponent, ɵNzTabBodyComponent, ɵNzTabCloseButtonComponent, ɵNzTabNavBarComponent, ɵNzTabNavItemDirective, ɵNzTabNavOperationComponent, ɵNzTabScrollListDirective, ɵNzTabsInkBarDirective */

    /***/
    function oyxB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NZ_TAB_SET", function () {
        return NZ_TAB_SET;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzTabChangeEvent", function () {
        return NzTabChangeEvent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzTabComponent", function () {
        return NzTabComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzTabDirective", function () {
        return NzTabDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzTabLinkDirective", function () {
        return NzTabLinkDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzTabLinkTemplateDirective", function () {
        return NzTabLinkTemplateDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzTabSetComponent", function () {
        return NzTabSetComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzTabsModule", function () {
        return NzTabsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵNzTabAddButtonComponent", function () {
        return NzTabAddButtonComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵNzTabBodyComponent", function () {
        return NzTabBodyComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵNzTabCloseButtonComponent", function () {
        return NzTabCloseButtonComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵNzTabNavBarComponent", function () {
        return NzTabNavBarComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵNzTabNavItemDirective", function () {
        return NzTabNavItemDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵNzTabNavOperationComponent", function () {
        return NzTabNavOperationComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵNzTabScrollListDirective", function () {
        return NzTabScrollListDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵNzTabsInkBarDirective", function () {
        return NzTabsInkBarDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-zorro-antd/core/polyfill */
      "ejfv");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/core/resize-observers */
      "/Kk4");
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/core/util */
      "/KA4");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "GU7r");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng-zorro-antd/core/outlet */
      "pdGh");
      /* harmony import */


      var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ng-zorro-antd/dropdown */
      "Nqz0");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ng-zorro-antd/core/config */
      "2Suw");
      /* harmony import */


      var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ng-zorro-antd/core/logger */
      "79xS");
      /* harmony import */


      var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ng-zorro-antd/menu */
      "Q8cG");
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      function NzTabAddButtonComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var icon_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", icon_r1);
        }
      }

      var _c0 = ["contentTemplate"];

      function NzTabComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      }

      function NzTabComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 1);
        }
      }

      var _c1 = [[["", "nz-tab-link", ""]], "*"];
      var _c2 = ["[nz-tab-link]", "*"];

      function NzTabNavOperationComponent_ul_5_li_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.tab.label);
        }
      }

      var _c3 = function _c3() {
        return {
          visible: false
        };
      };

      function NzTabNavOperationComponent_ul_5_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTabNavOperationComponent_ul_5_li_1_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var item_r5 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.onSelect(item_r5);
          })("contextmenu", function NzTabNavOperationComponent_ul_5_li_1_Template_li_contextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var item_r5 = ctx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r10.onContextmenu(item_r5, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTabNavOperationComponent_ul_5_li_1_ng_container_1_Template, 2, 1, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-dropdown-menu-item-disabled", item_r5.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSelected", item_r5.active)("nzDisabled", item_r5.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", item_r5.tab.label)("nzStringTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c3));
        }
      }

      function NzTabNavOperationComponent_ul_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTabNavOperationComponent_ul_5_li_1_Template, 2, 7, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.items);
        }
      }

      function NzTabNavOperationComponent_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTabNavOperationComponent_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.addClicked.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("addIcon", ctx_r3.addIcon);
        }
      }

      var _c4 = function _c4() {
        return {
          minWidth: "46px"
        };
      };

      var _c5 = ["navWarp"];
      var _c6 = ["navList"];

      function NzTabNavBarComponent_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTabNavBarComponent_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.addClicked.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("addIcon", ctx_r2.addIcon);
        }
      }

      function NzTabNavBarComponent_div_8_ng_template_1_Template(rf, ctx) {}

      function NzTabNavBarComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTabNavBarComponent_div_8_ng_template_1_Template, 0, 0, "ng-template", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.extraTemplate);
        }
      }

      var _c7 = ["*"];
      var _c8 = ["nz-tab-body", ""];

      function NzTabBodyComponent_ng_container_0_ng_template_1_Template(rf, ctx) {}

      function NzTabBodyComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTabBodyComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.content);
        }
      }

      function NzTabCloseButtonComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var icon_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", icon_r1);
        }
      }

      function NzTabSetComponent_nz_tabs_nav_0_div_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var tab_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r3.label);
        }
      }

      function NzTabSetComponent_nz_tabs_nav_0_div_1_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTabSetComponent_nz_tabs_nav_0_div_1_button_3_Template_button_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.onClose(i_r4, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tab_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closeIcon", tab_r3.nzCloseIcon);
        }
      }

      var _c9 = function _c9() {
        return {
          visible: true
        };
      };

      function NzTabSetComponent_nz_tabs_nav_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTabSetComponent_nz_tabs_nav_0_div_1_Template_div_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var tab_r3 = ctx.$implicit;
            var i_r4 = ctx.index;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r12.clickNavItem(tab_r3, i_r4, $event);
          })("contextmenu", function NzTabSetComponent_nz_tabs_nav_0_div_1_Template_div_contextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var tab_r3 = ctx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r14.contextmenuNavItem(tab_r3, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTabSetComponent_nz_tabs_nav_0_div_1_ng_container_2_Template, 2, 1, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzTabSetComponent_nz_tabs_nav_0_div_1_button_3_Template, 1, 1, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tab_r3 = ctx.$implicit;
          var i_r4 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-right", ctx_r2.position === "horizontal" ? ctx_r2.nzTabBarGutter : null, "px")("margin-bottom", ctx_r2.position === "vertical" ? ctx_r2.nzTabBarGutter : null, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-tab-active", ctx_r2.nzSelectedIndex === i_r4)("ant-tabs-tab-disabled", tab_r3.nzDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", tab_r3.nzDisabled)("tab", tab_r3)("active", ctx_r2.nzSelectedIndex === i_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabIndex", ctx_r2.getTabIndex(tab_r3, i_r4))("aria-disabled", tab_r3.nzDisabled)("aria-selected", ctx_r2.nzSelectedIndex === i_r4 && !ctx_r2.nzHideAll)("aria-controls", ctx_r2.getTabContentId(i_r4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", tab_r3.label)("nzStringTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c9));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r3.nzClosable && ctx_r2.closable && !tab_r3.nzDisabled);
        }
      }

      function NzTabSetComponent_nz_tabs_nav_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tabs-nav", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tabScroll", function NzTabSetComponent_nz_tabs_nav_0_Template_nz_tabs_nav_tabScroll_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.nzTabListScroll.emit($event);
          })("selectFocusedIndex", function NzTabSetComponent_nz_tabs_nav_0_Template_nz_tabs_nav_selectFocusedIndex_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.setSelectedIndex($event);
          })("addClicked", function NzTabSetComponent_nz_tabs_nav_0_Template_nz_tabs_nav_addClicked_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.onAdd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTabSetComponent_nz_tabs_nav_0_div_1_Template, 4, 19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.nzTabBarStyle)("selectedIndex", ctx_r0.nzSelectedIndex || 0)("inkBarAnimated", ctx_r0.inkBarAnimated)("addable", ctx_r0.addable)("addIcon", ctx_r0.nzAddIcon)("hideBar", ctx_r0.nzHideAll)("position", ctx_r0.position)("extraTemplate", ctx_r0.nzTabBarExtraContent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.tabs);
        }
      }

      function NzTabSetComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 11);
        }

        if (rf & 2) {
          var tab_r19 = ctx.$implicit;
          var i_r20 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx_r1.nzSelectedIndex == i_r20 && !ctx_r1.nzHideAll)("content", tab_r19.content)("forceRender", tab_r19.nzForceRender)("tabPaneAnimated", ctx_r1.tabPaneAnimated);
        }
      }

      var NzTabAddButtonComponent = /*#__PURE__*/function () {
        function NzTabAddButtonComponent(elementRef) {
          _classCallCheck(this, NzTabAddButtonComponent);

          this.elementRef = elementRef;
          this.addIcon = 'plus';
          this.element = this.elementRef.nativeElement;
        }

        _createClass(NzTabAddButtonComponent, [{
          key: "getElementWidth",
          value: function getElementWidth() {
            var _a;

            return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0;
          }
        }, {
          key: "getElementHeight",
          value: function getElementHeight() {
            var _a;

            return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
          }
        }]);

        return NzTabAddButtonComponent;
      }();

      NzTabAddButtonComponent.ɵfac = function NzTabAddButtonComponent_Factory(t) {
        return new (t || NzTabAddButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      NzTabAddButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NzTabAddButtonComponent,
        selectors: [["nz-tab-add-button"], ["button", "nz-tab-add-button", ""]],
        hostAttrs: ["aria-label", "Add tab", "type", "button", 1, "ant-tabs-nav-add"],
        inputs: {
          addIcon: "addIcon"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"]],
        template: function NzTabAddButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTabAddButtonComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.addIcon);
          }
        },
        directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_18__["NzStringTemplateOutletDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconDirective"]],
        encapsulation: 2
      });

      NzTabAddButtonComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      NzTabAddButtonComponent.propDecorators = {
        addIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var NzTabsInkBarDirective = /*#__PURE__*/function () {
        function NzTabsInkBarDirective(elementRef, ngZone, animationMode) {
          _classCallCheck(this, NzTabsInkBarDirective);

          this.elementRef = elementRef;
          this.ngZone = ngZone;
          this.animationMode = animationMode;
          this.position = 'horizontal';
          this.animated = true;
        }

        _createClass(NzTabsInkBarDirective, [{
          key: "_animated",
          get: function get() {
            return this.animationMode !== 'NoopAnimations' && this.animated;
          }
        }, {
          key: "alignToElement",
          value: function alignToElement(element) {
            var _this = this;

            this.ngZone.runOutsideAngular(function () {
              Object(ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_2__["reqAnimFrame"])(function () {
                return _this.setStyles(element);
              });
            });
          }
        }, {
          key: "setStyles",
          value: function setStyles(element) {
            var inkBar = this.elementRef.nativeElement;

            if (this.position === 'horizontal') {
              inkBar.style.top = '';
              inkBar.style.height = '';
              inkBar.style.left = this.getLeftPosition(element);
              inkBar.style.width = this.getElementWidth(element);
            } else {
              inkBar.style.left = '';
              inkBar.style.width = '';
              inkBar.style.top = this.getTopPosition(element);
              inkBar.style.height = this.getElementHeight(element);
            }
          }
        }, {
          key: "getLeftPosition",
          value: function getLeftPosition(element) {
            return element ? (element.offsetLeft || 0) + 'px' : '0';
          }
        }, {
          key: "getElementWidth",
          value: function getElementWidth(element) {
            return element ? (element.offsetWidth || 0) + 'px' : '0';
          }
        }, {
          key: "getTopPosition",
          value: function getTopPosition(element) {
            return element ? (element.offsetTop || 0) + 'px' : '0';
          }
        }, {
          key: "getElementHeight",
          value: function getElementHeight(element) {
            return element ? (element.offsetHeight || 0) + 'px' : '0';
          }
        }]);

        return NzTabsInkBarDirective;
      }();

      NzTabsInkBarDirective.ɵfac = function NzTabsInkBarDirective_Factory(t) {
        return new (t || NzTabsInkBarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"], 8));
      };

      NzTabsInkBarDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NzTabsInkBarDirective,
        selectors: [["nz-tabs-ink-bar"], ["", "nz-tabs-ink-bar", ""]],
        hostAttrs: [1, "ant-tabs-ink-bar"],
        hostVars: 2,
        hostBindings: function NzTabsInkBarDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-ink-bar-animated", ctx._animated);
          }
        },
        inputs: {
          position: "position",
          animated: "animated"
        }
      });

      NzTabsInkBarDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      NzTabsInkBarDirective.propDecorators = {
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        animated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      /**
       * Fix https://github.com/angular/angular/issues/8563
       */

      var NzTabLinkTemplateDirective = /*#__PURE__*/_createClass(function NzTabLinkTemplateDirective(templateRef) {
        _classCallCheck(this, NzTabLinkTemplateDirective);

        this.templateRef = templateRef;
      });

      NzTabLinkTemplateDirective.ɵfac = function NzTabLinkTemplateDirective_Factory(t) {
        return new (t || NzTabLinkTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], 1));
      };

      NzTabLinkTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NzTabLinkTemplateDirective,
        selectors: [["ng-template", "nzTabLink", ""]],
        exportAs: ["nzTabLinkTemplate"]
      });

      NzTabLinkTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }]
        }];
      };
      /**
       * This component is for catching `routerLink` directive.
       */


      var NzTabLinkDirective = /*#__PURE__*/_createClass(function NzTabLinkDirective(elementRef, routerLink, routerLinkWithHref) {
        _classCallCheck(this, NzTabLinkDirective);

        this.elementRef = elementRef;
        this.routerLink = routerLink;
        this.routerLinkWithHref = routerLinkWithHref;
      });

      NzTabLinkDirective.ɵfac = function NzTabLinkDirective_Factory(t) {
        return new (t || NzTabLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLink"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], 10));
      };

      NzTabLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NzTabLinkDirective,
        selectors: [["a", "nz-tab-link", ""]],
        exportAs: ["nzTabLink"]
      });

      NzTabLinkDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLink"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }]
        }];
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      /** Decorates the `ng-template` tags and reads out the template from it. */


      var NzTabDirective = /*#__PURE__*/_createClass(function NzTabDirective() {
        _classCallCheck(this, NzTabDirective);
      });

      NzTabDirective.ɵfac = function NzTabDirective_Factory(t) {
        return new (t || NzTabDirective)();
      };

      NzTabDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NzTabDirective,
        selectors: [["", "nz-tab", ""]],
        exportAs: ["nzTab"]
      });
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      /**
       * Used to provide a tab set to a tab without causing a circular dependency.
       */

      var NZ_TAB_SET = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NZ_TAB_SET');

      var NzTabComponent = /*#__PURE__*/function () {
        function NzTabComponent(closestTabSet) {
          _classCallCheck(this, NzTabComponent);

          this.closestTabSet = closestTabSet;
          this.nzTitle = '';
          this.nzClosable = false;
          this.nzCloseIcon = 'close';
          this.nzDisabled = false;
          this.nzForceRender = false;
          this.nzSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.nzDeselect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.nzClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.nzContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.template = null;
          this.isActive = false;
          this.position = null;
          this.origin = null;
          this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        }

        _createClass(NzTabComponent, [{
          key: "content",
          get: function get() {
            return this.template || this.contentTemplate;
          }
        }, {
          key: "label",
          get: function get() {
            var _a;

            return this.nzTitle || ((_a = this.nzTabLinkTemplateDirective) === null || _a === void 0 ? void 0 : _a.templateRef);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var nzTitle = changes.nzTitle,
                nzDisabled = changes.nzDisabled,
                nzForceRender = changes.nzForceRender;

            if (nzTitle || nzDisabled || nzForceRender) {
              this.stateChanges.next();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.stateChanges.complete();
          }
        }]);

        return NzTabComponent;
      }();

      NzTabComponent.ɵfac = function NzTabComponent_Factory(t) {
        return new (t || NzTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NZ_TAB_SET));
      };

      NzTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NzTabComponent,
        selectors: [["nz-tab"]],
        contentQueries: function NzTabComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTabDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTabLinkTemplateDirective, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTabLinkDirective, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzTabLinkTemplateDirective = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.linkDirective = _t.first);
          }
        },
        viewQuery: function NzTabComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentTemplate = _t.first);
          }
        },
        inputs: {
          nzTitle: "nzTitle",
          nzClosable: "nzClosable",
          nzCloseIcon: "nzCloseIcon",
          nzDisabled: "nzDisabled",
          nzForceRender: "nzForceRender"
        },
        outputs: {
          nzSelect: "nzSelect",
          nzDeselect: "nzDeselect",
          nzClick: "nzClick",
          nzContextmenu: "nzContextmenu"
        },
        exportAs: ["nzTab"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c2,
        decls: 4,
        vars: 0,
        consts: [["tabLinkTemplate", ""], ["contentTemplate", ""]],
        template: function NzTabComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTabComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTabComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });

      NzTabComponent.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NZ_TAB_SET]
          }]
        }];
      };

      NzTabComponent.propDecorators = {
        nzTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzClosable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzCloseIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzForceRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nzDeselect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nzClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nzContextmenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nzTabLinkTemplateDirective: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NzTabLinkTemplateDirective, {
            "static": false
          }]
        }],
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NzTabDirective, {
            "static": false,
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }]
        }],
        linkDirective: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NzTabLinkDirective, {
            "static": false
          }]
        }],
        contentTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['contentTemplate', {
            "static": true
          }]
        }]
      };
      Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)], NzTabComponent.prototype, "nzClosable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)], NzTabComponent.prototype, "nzDisabled", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)], NzTabComponent.prototype, "nzForceRender", void 0);
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var NzTabNavItemDirective = /*#__PURE__*/function () {
        function NzTabNavItemDirective(elementRef) {
          _classCallCheck(this, NzTabNavItemDirective);

          this.elementRef = elementRef;
          this.disabled = false;
          this.active = false;
          this.el = elementRef.nativeElement;
          this.parentElement = this.el.parentElement;
        }

        _createClass(NzTabNavItemDirective, [{
          key: "focus",
          value: function focus() {
            this.el.focus();
          }
        }, {
          key: "width",
          get: function get() {
            return this.parentElement.offsetWidth;
          }
        }, {
          key: "height",
          get: function get() {
            return this.parentElement.offsetHeight;
          }
        }, {
          key: "left",
          get: function get() {
            return this.parentElement.offsetLeft;
          }
        }, {
          key: "top",
          get: function get() {
            return this.parentElement.offsetTop;
          }
        }]);

        return NzTabNavItemDirective;
      }();

      NzTabNavItemDirective.ɵfac = function NzTabNavItemDirective_Factory(t) {
        return new (t || NzTabNavItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      NzTabNavItemDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NzTabNavItemDirective,
        selectors: [["", "nzTabNavItem", ""]],
        inputs: {
          disabled: "disabled",
          active: "active",
          tab: "tab"
        }
      });

      NzTabNavItemDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      NzTabNavItemDirective.propDecorators = {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tab: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var NzTabNavOperationComponent = /*#__PURE__*/function () {
        function NzTabNavOperationComponent(cdr, elementRef) {
          _classCallCheck(this, NzTabNavOperationComponent);

          this.cdr = cdr;
          this.elementRef = elementRef;
          this.items = [];
          this.addable = false;
          this.addIcon = 'plus';
          this.addClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.closeAnimationWaitTimeoutId = -1;
          this.menuOpened = false;
          this.element = this.elementRef.nativeElement;
        }

        _createClass(NzTabNavOperationComponent, [{
          key: "onSelect",
          value: function onSelect(item) {
            if (!item.disabled) {
              // ignore nzCanDeactivate
              item.tab.nzClick.emit();
              this.selected.emit(item);
            }
          }
        }, {
          key: "onContextmenu",
          value: function onContextmenu(item, e) {
            if (!item.disabled) {
              item.tab.nzContextmenu.emit(e);
            }
          }
        }, {
          key: "showItems",
          value: function showItems() {
            clearTimeout(this.closeAnimationWaitTimeoutId);
            this.menuOpened = true;
            this.cdr.markForCheck();
          }
        }, {
          key: "menuVisChange",
          value: function menuVisChange(visible) {
            var _this2 = this;

            if (!visible) {
              this.closeAnimationWaitTimeoutId = setTimeout(function () {
                _this2.menuOpened = false;

                _this2.cdr.markForCheck();
              }, 150);
            }
          }
        }, {
          key: "getElementWidth",
          value: function getElementWidth() {
            var _a;

            return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0;
          }
        }, {
          key: "getElementHeight",
          value: function getElementHeight() {
            var _a;

            return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            clearTimeout(this.closeAnimationWaitTimeoutId);
          }
        }]);

        return NzTabNavOperationComponent;
      }();

      NzTabNavOperationComponent.ɵfac = function NzTabNavOperationComponent_Factory(t) {
        return new (t || NzTabNavOperationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      NzTabNavOperationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NzTabNavOperationComponent,
        selectors: [["nz-tab-nav-operation"]],
        hostAttrs: [1, "ant-tabs-nav-operations"],
        hostVars: 2,
        hostBindings: function NzTabNavOperationComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-nav-operations-hidden", ctx.items.length === 0);
          }
        },
        inputs: {
          items: "items",
          addable: "addable",
          addIcon: "addIcon"
        },
        outputs: {
          addClicked: "addClicked",
          selected: "selected"
        },
        exportAs: ["nzTabNavOperation"],
        decls: 7,
        vars: 6,
        consts: [["nz-dropdown", "", "type", "button", "tabindex", "-1", "aria-hidden", "true", "nzOverlayClassName", "nz-tabs-dropdown", 1, "ant-tabs-nav-more", 3, "nzDropdownMenu", "nzOverlayStyle", "nzMatchWidthElement", "nzVisibleChange", "mouseenter"], ["dropdownTrigger", "nzDropdown"], ["nz-icon", "", "nzType", "ellipsis"], ["menu", "nzDropdownMenu"], ["nz-menu", "", 4, "ngIf"], ["nz-tab-add-button", "", 3, "addIcon", "click", 4, "ngIf"], ["nz-menu", ""], ["nz-menu-item", "", "class", "ant-tabs-dropdown-menu-item", 3, "ant-tabs-dropdown-menu-item-disabled", "nzSelected", "nzDisabled", "click", "contextmenu", 4, "ngFor", "ngForOf"], ["nz-menu-item", "", 1, "ant-tabs-dropdown-menu-item", 3, "nzSelected", "nzDisabled", "click", "contextmenu"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["nz-tab-add-button", "", 3, "addIcon", "click"]],
        template: function NzTabNavOperationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function NzTabNavOperationComponent_Template_button_nzVisibleChange_0_listener($event) {
              return ctx.menuVisChange($event);
            })("mouseenter", function NzTabNavOperationComponent_Template_button_mouseenter_0_listener() {
              return ctx.showItems();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-dropdown-menu", null, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzTabNavOperationComponent_ul_5_Template, 2, 1, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzTabNavOperationComponent_button_6_Template, 1, 1, "button", 5);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownMenu", _r1)("nzOverlayStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c4))("nzMatchWidthElement", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuOpened);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addable);
          }
        },
        directives: [ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_19__["NzDropDownDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_19__["NzDropdownMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_23__["NzMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_23__["NzMenuItemDirective"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_18__["NzStringTemplateOutletDirective"], NzTabAddButtonComponent],
        encapsulation: 2,
        changeDetection: 0
      });

      NzTabNavOperationComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      NzTabNavOperationComponent.propDecorators = {
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        addable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        addIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        addClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var RESIZE_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_8__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_8__["asapScheduler"];
      var CSS_TRANSFORM_TIME = 150;

      var NzTabNavBarComponent = /*#__PURE__*/function () {
        function NzTabNavBarComponent(cdr, ngZone, viewportRuler, nzResizeObserver, dir) {
          _classCallCheck(this, NzTabNavBarComponent);

          this.cdr = cdr;
          this.ngZone = ngZone;
          this.viewportRuler = viewportRuler;
          this.nzResizeObserver = nzResizeObserver;
          this.dir = dir;
          this.indexFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.selectFocusedIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.addClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.tabScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.position = 'horizontal';
          this.addable = false;
          this.hideBar = false;
          this.addIcon = 'plus';
          this.inkBarAnimated = true;
          this.translate = null;
          this.transformX = 0;
          this.transformY = 0;
          this.pingLeft = false;
          this.pingRight = false;
          this.pingTop = false;
          this.pingBottom = false;
          this.hiddenItems = [];
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
          this._selectedIndex = 0;
          this.wrapperWidth = 0;
          this.wrapperHeight = 0;
          this.scrollListWidth = 0;
          this.scrollListHeight = 0;
          this.operationWidth = 0;
          this.operationHeight = 0;
          this.addButtonWidth = 0;
          this.addButtonHeight = 0;
          this.selectedIndexChanged = false;
          this.lockAnimationTimeoutId = -1;
          this.cssTransformTimeWaitingId = -1;
        }

        _createClass(NzTabNavBarComponent, [{
          key: "selectedIndex",
          get: function get() {
            return this._selectedIndex;
          },
          set: function set(value) {
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value);

            if (this._selectedIndex !== newValue) {
              this._selectedIndex = value;
              this.selectedIndexChanged = true;

              if (this.keyManager) {
                this.keyManager.updateActiveItem(value);
              }
            }
          }
          /** Tracks which element has focus; used for keyboard navigation */

        }, {
          key: "focusIndex",
          get: function get() {
            return this.keyManager ? this.keyManager.activeItemIndex : 0;
          }
          /** When the focus index is set, we must manually send focus to the correct label */
          ,
          set: function set(value) {
            if (!this.isValidIndex(value) || this.focusIndex === value || !this.keyManager) {
              return;
            }

            this.keyManager.setActiveItem(value);
          }
        }, {
          key: "showAddButton",
          get: function get() {
            return this.hiddenItems.length === 0 && this.addable;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this3 = this;

            var dirChange = this.dir ? this.dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(null);
            var resize = this.viewportRuler.change(150);

            var realign = function realign() {
              _this3.updateScrollListPosition();

              _this3.alignInkBarToSelectedTab();
            };

            this.keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusKeyManager"](this.items).withHorizontalOrientation(this.getLayoutDirection()).withWrap();
            this.keyManager.updateActiveItem(this.selectedIndex);
            Object(ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_2__["reqAnimFrame"])(realign);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(this.nzResizeObserver.observe(this.navWarpRef), this.nzResizeObserver.observe(this.navListRef)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["auditTime"])(16, RESIZE_SCHEDULER)).subscribe(function () {
              realign();
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(dirChange, resize, this.items.changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$)).subscribe(function () {
              Promise.resolve().then(realign);

              _this3.keyManager.withHorizontalOrientation(_this3.getLayoutDirection());
            });
            this.keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$)).subscribe(function (newFocusIndex) {
              _this3.indexFocused.emit(newFocusIndex);

              _this3.setTabFocus(newFocusIndex);

              _this3.scrollToTab(_this3.keyManager.activeItem);
            });
          }
        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            if (this.selectedIndexChanged) {
              this.updateScrollListPosition();
              this.alignInkBarToSelectedTab();
              this.selectedIndexChanged = false;
              this.cdr.markForCheck();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            clearTimeout(this.lockAnimationTimeoutId);
            clearTimeout(this.cssTransformTimeWaitingId);
            this.destroy$.next();
            this.destroy$.complete();
          }
        }, {
          key: "onSelectedFromMenu",
          value: function onSelectedFromMenu(tab) {
            var tabIndex = this.items.toArray().findIndex(function (e) {
              return e === tab;
            });

            if (tabIndex !== -1) {
              this.keyManager.updateActiveItem(tabIndex);

              if (this.focusIndex !== this.selectedIndex) {
                this.selectFocusedIndex.emit(this.focusIndex);
                this.scrollToTab(tab);
              }
            }
          }
        }, {
          key: "onOffsetChange",
          value: function onOffsetChange(e) {
            if (this.position === 'horizontal') {
              if (this.lockAnimationTimeoutId === -1) {
                if (this.transformX >= 0 && e.x > 0) {
                  return;
                }

                if (this.transformX <= this.wrapperWidth - this.scrollListWidth && e.x < 0) {
                  return;
                }
              }

              e.event.preventDefault();
              this.transformX = this.clampTransformX(this.transformX + e.x);
              this.setTransform(this.transformX, 0);
            } else {
              if (this.lockAnimationTimeoutId === -1) {
                if (this.transformY >= 0 && e.y > 0) {
                  return;
                }

                if (this.transformY <= this.wrapperHeight - this.scrollListHeight && e.y < 0) {
                  return;
                }
              }

              e.event.preventDefault();
              this.transformY = this.clampTransformY(this.transformY + e.y);
              this.setTransform(0, this.transformY);
            }

            this.lockAnimation();
            this.setVisibleRange();
            this.setPingStatus();
          }
        }, {
          key: "handleKeydown",
          value: function handleKeydown(event) {
            var inNavigationList = this.navWarpRef.nativeElement.contains(event.target);

            if (Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["hasModifierKey"])(event) || !inNavigationList) {
              return;
            }

            switch (event.keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["LEFT_ARROW"]:
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["UP_ARROW"]:
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["RIGHT_ARROW"]:
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["DOWN_ARROW"]:
                this.lockAnimation();
                this.keyManager.onKeydown(event);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ENTER"]:
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["SPACE"]:
                if (this.focusIndex !== this.selectedIndex) {
                  this.selectFocusedIndex.emit(this.focusIndex);
                }

                break;

              default:
                this.keyManager.onKeydown(event);
            }
          }
        }, {
          key: "isValidIndex",
          value: function isValidIndex(index) {
            if (!this.items) {
              return true;
            }

            var tab = this.items ? this.items.toArray()[index] : null;
            return !!tab && !tab.disabled;
          }
        }, {
          key: "scrollToTab",
          value: function scrollToTab(tab) {
            var _this4 = this;

            if (!this.items.find(function (e) {
              return e === tab;
            })) {
              return;
            }

            var tabs = this.items.toArray();

            if (this.position === 'horizontal') {
              var newTransform = this.transformX;

              if (this.getLayoutDirection() === 'rtl') {
                var right = tabs[0].left + tabs[0].width - tab.left - tab.width;

                if (right < this.transformX) {
                  newTransform = right;
                } else if (right + tab.width > this.transformX + this.wrapperWidth) {
                  newTransform = right + tab.width - this.wrapperWidth;
                }
              } else if (tab.left < -this.transformX) {
                newTransform = -tab.left;
              } else if (tab.left + tab.width > -this.transformX + this.wrapperWidth) {
                newTransform = -(tab.left + tab.width - this.wrapperWidth);
              }

              this.transformX = newTransform;
              this.transformY = 0;
              this.setTransform(newTransform, 0);
            } else {
              var _newTransform = this.transformY;

              if (tab.top < -this.transformY) {
                _newTransform = -tab.top;
              } else if (tab.top + tab.height > -this.transformY + this.wrapperHeight) {
                _newTransform = -(tab.top + tab.height - this.wrapperHeight);
              }

              this.transformY = _newTransform;
              this.transformX = 0;
              this.setTransform(0, _newTransform);
            }

            clearTimeout(this.cssTransformTimeWaitingId);
            this.cssTransformTimeWaitingId = setTimeout(function () {
              _this4.setVisibleRange();
            }, CSS_TRANSFORM_TIME);
          }
        }, {
          key: "lockAnimation",
          value: function lockAnimation() {
            var _this5 = this;

            if (this.lockAnimationTimeoutId === -1) {
              this.ngZone.runOutsideAngular(function () {
                _this5.navListRef.nativeElement.style.transition = 'none';
                _this5.lockAnimationTimeoutId = setTimeout(function () {
                  _this5.navListRef.nativeElement.style.transition = '';
                  _this5.lockAnimationTimeoutId = -1;
                }, CSS_TRANSFORM_TIME);
              });
            }
          }
        }, {
          key: "setTransform",
          value: function setTransform(x, y) {
            this.navListRef.nativeElement.style.transform = "translate(".concat(x, "px, ").concat(y, "px)");
          }
        }, {
          key: "clampTransformX",
          value: function clampTransformX(transform) {
            var scrollWidth = this.wrapperWidth - this.scrollListWidth;

            if (this.getLayoutDirection() === 'rtl') {
              return Math.max(Math.min(scrollWidth, transform), 0);
            } else {
              return Math.min(Math.max(scrollWidth, transform), 0);
            }
          }
        }, {
          key: "clampTransformY",
          value: function clampTransformY(transform) {
            return Math.min(Math.max(this.wrapperHeight - this.scrollListHeight, transform), 0);
          }
        }, {
          key: "updateScrollListPosition",
          value: function updateScrollListPosition() {
            this.resetSizes();
            this.transformX = this.clampTransformX(this.transformX);
            this.transformY = this.clampTransformY(this.transformY);
            this.setVisibleRange();
            this.setPingStatus();

            if (this.keyManager) {
              this.keyManager.updateActiveItem(this.keyManager.activeItemIndex);

              if (this.keyManager.activeItem) {
                this.scrollToTab(this.keyManager.activeItem);
              }
            }
          }
        }, {
          key: "resetSizes",
          value: function resetSizes() {
            this.addButtonWidth = this.addBtnRef ? this.addBtnRef.getElementWidth() : 0;
            this.addButtonHeight = this.addBtnRef ? this.addBtnRef.getElementHeight() : 0;
            this.operationWidth = this.operationRef.getElementWidth();
            this.operationHeight = this.operationRef.getElementHeight();
            this.wrapperWidth = this.navWarpRef.nativeElement.offsetWidth || 0;
            this.wrapperHeight = this.navWarpRef.nativeElement.offsetHeight || 0;
            this.scrollListHeight = this.navListRef.nativeElement.offsetHeight || 0;
            this.scrollListWidth = this.navListRef.nativeElement.offsetWidth || 0;
          }
        }, {
          key: "alignInkBarToSelectedTab",
          value: function alignInkBarToSelectedTab() {
            var selectedItem = this.items && this.items.length ? this.items.toArray()[this.selectedIndex] : null;
            var selectedItemElement = selectedItem ? selectedItem.elementRef.nativeElement : null;

            if (selectedItemElement) {
              /**
               * .ant-tabs-nav-list - Target offset parent element
               *   └──.ant-tabs-tab
               *        └──.ant-tabs-tab-btn - Currently focused element
               */
              this.inkBar.alignToElement(selectedItemElement.parentElement);
            }
          }
        }, {
          key: "setPingStatus",
          value: function setPingStatus() {
            var ping = {
              top: false,
              right: false,
              bottom: false,
              left: false
            };
            var navWarp = this.navWarpRef.nativeElement;

            if (this.position === 'horizontal') {
              if (this.getLayoutDirection() === 'rtl') {
                ping.right = this.transformX > 0;
                ping.left = this.transformX + this.wrapperWidth < this.scrollListWidth;
              } else {
                ping.left = this.transformX < 0;
                ping.right = -this.transformX + this.wrapperWidth < this.scrollListWidth;
              }
            } else {
              ping.top = this.transformY < 0;
              ping.bottom = -this.transformY + this.wrapperHeight < this.scrollListHeight;
            }

            Object.keys(ping).forEach(function (pos) {
              var className = "ant-tabs-nav-wrap-ping-".concat(pos);

              if (ping[pos]) {
                navWarp.classList.add(className);
              } else {
                navWarp.classList.remove(className);
              }
            });
          }
        }, {
          key: "setVisibleRange",
          value: function setVisibleRange() {
            var unit;
            var position;
            var transformSize;
            var basicSize;
            var tabContentSize;
            var addSize;
            var tabs = this.items.toArray();
            var DEFAULT_SIZE = {
              width: 0,
              height: 0,
              left: 0,
              top: 0,
              right: 0
            };

            var getOffset = function getOffset(index) {
              var offset;
              var size = tabs[index] || DEFAULT_SIZE;

              if (position === 'right') {
                offset = tabs[0].left + tabs[0].width - tabs[index].left - tabs[index].width;
              } else {
                offset = size[position];
              }

              return offset;
            };

            if (this.position === 'horizontal') {
              unit = 'width';
              basicSize = this.wrapperWidth;
              tabContentSize = this.scrollListWidth - (this.hiddenItems.length ? this.operationWidth : 0);
              addSize = this.addButtonWidth;
              transformSize = Math.abs(this.transformX);

              if (this.getLayoutDirection() === 'rtl') {
                position = 'right';
                this.pingRight = this.transformX > 0;
                this.pingLeft = this.transformX + this.wrapperWidth < this.scrollListWidth;
              } else {
                this.pingLeft = this.transformX < 0;
                this.pingRight = -this.transformX + this.wrapperWidth < this.scrollListWidth;
                position = 'left';
              }
            } else {
              unit = 'height';
              basicSize = this.wrapperHeight;
              tabContentSize = this.scrollListHeight - (this.hiddenItems.length ? this.operationHeight : 0);
              addSize = this.addButtonHeight;
              position = 'top';
              transformSize = -this.transformY;
              this.pingTop = this.transformY < 0;
              this.pingBottom = -this.transformY + this.wrapperHeight < this.scrollListHeight;
            }

            var mergedBasicSize = basicSize;

            if (tabContentSize + addSize > basicSize) {
              mergedBasicSize = basicSize - addSize;
            }

            if (!tabs.length) {
              this.hiddenItems = [];
              this.cdr.markForCheck();
              return;
            }

            var len = tabs.length;
            var endIndex = len;

            for (var i = 0; i < len; i += 1) {
              var offset = getOffset(i);
              var size = tabs[i] || DEFAULT_SIZE;

              if (offset + size[unit] > transformSize + mergedBasicSize) {
                endIndex = i - 1;
                break;
              }
            }

            var startIndex = 0;

            for (var _i = len - 1; _i >= 0; _i -= 1) {
              var _offset = getOffset(_i);

              if (_offset < transformSize) {
                startIndex = _i + 1;
                break;
              }
            }

            var startHiddenTabs = tabs.slice(0, startIndex);
            var endHiddenTabs = tabs.slice(endIndex + 1);
            this.hiddenItems = [].concat(_toConsumableArray(startHiddenTabs), _toConsumableArray(endHiddenTabs));
            this.cdr.markForCheck();
          }
        }, {
          key: "getLayoutDirection",
          value: function getLayoutDirection() {
            return this.dir && this.dir.value === 'rtl' ? 'rtl' : 'ltr';
          }
        }, {
          key: "setTabFocus",
          value: function setTabFocus(_tabIndex) {}
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var position = changes.position; // The first will be aligning in ngAfterViewInit

            if (position && !position.isFirstChange()) {
              this.alignInkBarToSelectedTab();
              this.lockAnimation();
              this.updateScrollListPosition();
            }
          }
        }]);

        return NzTabNavBarComponent;
      }();

      NzTabNavBarComponent.ɵfac = function NzTabNavBarComponent_Factory(t) {
        return new (t || NzTabNavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_10__["NzResizeObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8));
      };

      NzTabNavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NzTabNavBarComponent,
        selectors: [["nz-tabs-nav"]],
        contentQueries: function NzTabNavBarComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTabNavItemDirective, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.items = _t);
          }
        },
        viewQuery: function NzTabNavBarComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c5, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c6, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](NzTabNavOperationComponent, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzTabAddButtonComponent, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](NzTabsInkBarDirective, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navWarpRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navListRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.operationRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.addBtnRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inkBar = _t.first);
          }
        },
        hostAttrs: ["role", "tablist", 1, "ant-tabs-nav"],
        hostBindings: function NzTabNavBarComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NzTabNavBarComponent_keydown_HostBindingHandler($event) {
              return ctx.handleKeydown($event);
            });
          }
        },
        inputs: {
          position: "position",
          addable: "addable",
          hideBar: "hideBar",
          addIcon: "addIcon",
          inkBarAnimated: "inkBarAnimated",
          selectedIndex: "selectedIndex",
          extraTemplate: "extraTemplate"
        },
        outputs: {
          indexFocused: "indexFocused",
          selectFocusedIndex: "selectFocusedIndex",
          addClicked: "addClicked",
          tabScroll: "tabScroll"
        },
        exportAs: ["nzTabsNav"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c7,
        decls: 9,
        vars: 16,
        consts: [[1, "ant-tabs-nav-wrap"], ["navWarp", ""], ["nzTabScrollList", "", 1, "ant-tabs-nav-list", 3, "offsetChange", "tabScroll"], ["navList", ""], ["nz-tab-add-button", "", 3, "addIcon", "click", 4, "ngIf"], ["nz-tabs-ink-bar", "", 3, "hidden", "position", "animated"], [3, "addIcon", "addable", "items", "addClicked", "selected"], ["class", "ant-tabs-extra-content", 4, "ngIf"], ["nz-tab-add-button", "", 3, "addIcon", "click"], [1, "ant-tabs-extra-content"], [3, "ngTemplateOutlet"]],
        template: function NzTabNavBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("offsetChange", function NzTabNavBarComponent_Template_div_offsetChange_2_listener($event) {
              return ctx.onOffsetChange($event);
            })("tabScroll", function NzTabNavBarComponent_Template_div_tabScroll_2_listener($event) {
              return ctx.tabScroll.emit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzTabNavBarComponent_button_5_Template, 1, 1, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-tab-nav-operation", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addClicked", function NzTabNavBarComponent_Template_nz_tab_nav_operation_addClicked_7_listener() {
              return ctx.addClicked.emit();
            })("selected", function NzTabNavBarComponent_Template_nz_tab_nav_operation_selected_7_listener($event) {
              return ctx.onSelectedFromMenu($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NzTabNavBarComponent_div_8_Template, 2, 1, "div", 7);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-nav-wrap-ping-left", ctx.pingLeft)("ant-tabs-nav-wrap-ping-right", ctx.pingRight)("ant-tabs-nav-wrap-ping-top", ctx.pingTop)("ant-tabs-nav-wrap-ping-bottom", ctx.pingBottom);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAddButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hideBar)("position", ctx.position)("animated", ctx.inkBarAnimated);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("addIcon", ctx.addIcon)("addable", ctx.addable)("items", ctx.hiddenItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.extraTemplate);
          }
        },
        directives: function directives() {
          return [NzTabScrollListDirective, _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], NzTabsInkBarDirective, NzTabNavOperationComponent, NzTabAddButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgTemplateOutlet"]];
        },
        encapsulation: 2,
        changeDetection: 0
      });

      NzTabNavBarComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"]
        }, {
          type: ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_10__["NzResizeObserver"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      };

      NzTabNavBarComponent.propDecorators = {
        indexFocused: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        selectFocusedIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        addClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        tabScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        addable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hideBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        addIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inkBarAnimated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        extraTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectedIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        navWarpRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['navWarp', {
            "static": true
          }]
        }],
        navListRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['navList', {
            "static": true
          }]
        }],
        operationRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [NzTabNavOperationComponent, {
            "static": true
          }]
        }],
        addBtnRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [NzTabAddButtonComponent, {
            "static": false
          }]
        }],
        inkBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [NzTabsInkBarDirective, {
            "static": true
          }]
        }],
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [NzTabNavItemDirective, {
            descendants: true
          }]
        }]
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var NzTabBodyComponent = /*#__PURE__*/_createClass(function NzTabBodyComponent() {
        _classCallCheck(this, NzTabBodyComponent);

        this.content = null;
        this.active = false;
        this.tabPaneAnimated = true;
        this.forceRender = false;
      });

      NzTabBodyComponent.ɵfac = function NzTabBodyComponent_Factory(t) {
        return new (t || NzTabBodyComponent)();
      };

      NzTabBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NzTabBodyComponent,
        selectors: [["", "nz-tab-body", ""]],
        hostAttrs: [1, "ant-tabs-tabpane"],
        hostVars: 12,
        hostBindings: function NzTabBodyComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.active ? 0 : -1)("aria-hidden", !ctx.active);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.tabPaneAnimated ? ctx.active ? null : "hidden" : null)("height", ctx.tabPaneAnimated ? ctx.active ? null : 0 : null)("overflow-y", ctx.tabPaneAnimated ? ctx.active ? null : "none" : null)("display", !ctx.tabPaneAnimated ? ctx.active ? null : "none" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-tabpane-active", ctx.active);
          }
        },
        inputs: {
          content: "content",
          active: "active",
          tabPaneAnimated: "tabPaneAnimated",
          forceRender: "forceRender"
        },
        exportAs: ["nzTabBody"],
        attrs: _c8,
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [3, "ngTemplateOutlet"]],
        template: function NzTabBodyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTabBodyComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.active || ctx.forceRender);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgTemplateOutlet"]],
        encapsulation: 2,
        changeDetection: 0
      });
      NzTabBodyComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tabPaneAnimated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        forceRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var MIN_SWIPE_DISTANCE = 0.1;
      var STOP_SWIPE_DISTANCE = 0.01;
      var REFRESH_INTERVAL = 20;
      var SPEED_OFF_MULTIPLE = Math.pow(0.995, REFRESH_INTERVAL);

      var NzTabScrollListDirective = /*#__PURE__*/function () {
        function NzTabScrollListDirective(ngZone, elementRef) {
          var _this6 = this;

          _classCallCheck(this, NzTabScrollListDirective);

          this.ngZone = ngZone;
          this.elementRef = elementRef;
          this.lastWheelDirection = null;
          this.lastWheelTimestamp = 0;
          this.lastTimestamp = 0;
          this.lastTimeDiff = 0;
          this.lastMixedWheel = 0;
          this.lastWheelPrevent = false;
          this.touchPosition = null;
          this.lastOffset = null;
          this.motion = -1;

          this.unsubscribe = function () {
            return void 0;
          };

          this.offsetChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.tabScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

          this.onTouchEnd = function (e) {
            if (!_this6.touchPosition) {
              return;
            }

            var lastOffset = _this6.lastOffset;
            var lastTimeDiff = _this6.lastTimeDiff;
            _this6.lastOffset = _this6.touchPosition = null;

            if (lastOffset) {
              var distanceX = lastOffset.x / lastTimeDiff;
              var distanceY = lastOffset.y / lastTimeDiff;
              var absX = Math.abs(distanceX);
              var absY = Math.abs(distanceY); // Skip swipe if low distance

              if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE) {
                return;
              }

              var currentX = distanceX;
              var currentY = distanceY;
              _this6.motion = window.setInterval(function () {
                if (Math.abs(currentX) < STOP_SWIPE_DISTANCE && Math.abs(currentY) < STOP_SWIPE_DISTANCE) {
                  window.clearInterval(_this6.motion);
                  return;
                }

                currentX *= SPEED_OFF_MULTIPLE;
                currentY *= SPEED_OFF_MULTIPLE;

                _this6.onOffset(currentX * REFRESH_INTERVAL, currentY * REFRESH_INTERVAL, e);
              }, REFRESH_INTERVAL);
            }
          };

          this.onTouchMove = function (e) {
            if (!_this6.touchPosition) {
              return;
            }

            e.preventDefault();
            var _e$touches$ = e.touches[0],
                screenX = _e$touches$.screenX,
                screenY = _e$touches$.screenY;
            var offsetX = screenX - _this6.touchPosition.x;
            var offsetY = screenY - _this6.touchPosition.y;

            _this6.onOffset(offsetX, offsetY, e);

            var now = Date.now();
            _this6.lastTimeDiff = now - _this6.lastTimestamp;
            _this6.lastTimestamp = now;
            _this6.lastOffset = {
              x: offsetX,
              y: offsetY
            };
            _this6.touchPosition = {
              x: screenX,
              y: screenY
            };
          };

          this.onTouchStart = function (e) {
            var _e$touches$2 = e.touches[0],
                screenX = _e$touches$2.screenX,
                screenY = _e$touches$2.screenY;
            _this6.touchPosition = {
              x: screenX,
              y: screenY
            };
            window.clearInterval(_this6.motion);
          };

          this.onWheel = function (e) {
            var deltaX = e.deltaX,
                deltaY = e.deltaY;
            var mixed;
            var absX = Math.abs(deltaX);
            var absY = Math.abs(deltaY);

            if (absX === absY) {
              mixed = _this6.lastWheelDirection === 'x' ? deltaX : deltaY;
            } else if (absX > absY) {
              mixed = deltaX;
              _this6.lastWheelDirection = 'x';
            } else {
              mixed = deltaY;
              _this6.lastWheelDirection = 'y';
            } // Optimize mac touch scroll


            var now = Date.now();
            var absMixed = Math.abs(mixed);

            if (now - _this6.lastWheelTimestamp > 100 || absMixed - _this6.lastMixedWheel > 10) {
              _this6.lastWheelPrevent = false;
            }

            _this6.onOffset(-mixed, -mixed, e);

            if (e.defaultPrevented || _this6.lastWheelPrevent) {
              _this6.lastWheelPrevent = true;
            }

            _this6.lastWheelTimestamp = now;
            _this6.lastMixedWheel = absMixed;
          };
        }

        _createClass(NzTabScrollListDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.unsubscribe = this.ngZone.runOutsideAngular(function () {
              var el = _this7.elementRef.nativeElement;
              var wheel$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(el, 'wheel');
              var touchstart$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(el, 'touchstart');
              var touchmove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(el, 'touchmove');
              var touchend$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(el, 'touchend');
              var subscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"]();
              subscription.add(_this7.subscribeWrap('wheel', wheel$, _this7.onWheel));
              subscription.add(_this7.subscribeWrap('touchstart', touchstart$, _this7.onTouchStart));
              subscription.add(_this7.subscribeWrap('touchmove', touchmove$, _this7.onTouchMove));
              subscription.add(_this7.subscribeWrap('touchend', touchend$, _this7.onTouchEnd));
              return function () {
                subscription.unsubscribe();
              };
            });
          }
        }, {
          key: "subscribeWrap",
          value: function subscribeWrap(type, observable, handler) {
            var _this8 = this;

            return observable.subscribe(function (event) {
              _this8.tabScroll.emit({
                type: type,
                event: event
              });

              if (!event.defaultPrevented) {
                handler(event);
              }
            });
          }
        }, {
          key: "onOffset",
          value: function onOffset(x, y, event) {
            var _this9 = this;

            this.ngZone.run(function () {
              _this9.offsetChange.emit({
                x: x,
                y: y,
                event: event
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribe();
          }
        }]);

        return NzTabScrollListDirective;
      }();

      NzTabScrollListDirective.ɵfac = function NzTabScrollListDirective_Factory(t) {
        return new (t || NzTabScrollListDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      NzTabScrollListDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NzTabScrollListDirective,
        selectors: [["", "nzTabScrollList", ""]],
        outputs: {
          offsetChange: "offsetChange",
          tabScroll: "tabScroll"
        }
      });

      NzTabScrollListDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      NzTabScrollListDirective.propDecorators = {
        offsetChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        tabScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var NzTabCloseButtonComponent = /*#__PURE__*/_createClass(function NzTabCloseButtonComponent() {
        _classCallCheck(this, NzTabCloseButtonComponent);

        this.closeIcon = 'close';
      });

      NzTabCloseButtonComponent.ɵfac = function NzTabCloseButtonComponent_Factory(t) {
        return new (t || NzTabCloseButtonComponent)();
      };

      NzTabCloseButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NzTabCloseButtonComponent,
        selectors: [["nz-tab-close-button"], ["button", "nz-tab-close-button", ""]],
        hostAttrs: ["aria-label", "Close tab", "type", "button", 1, "ant-tabs-tab-remove"],
        inputs: {
          closeIcon: "closeIcon"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"]],
        template: function NzTabCloseButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTabCloseButtonComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.closeIcon);
          }
        },
        directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_18__["NzStringTemplateOutletDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconDirective"]],
        encapsulation: 2
      });

      NzTabCloseButtonComponent.ctorParameters = function () {
        return [];
      };

      NzTabCloseButtonComponent.propDecorators = {
        closeIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var NzTabChangeEvent = /*#__PURE__*/_createClass(function NzTabChangeEvent() {
        _classCallCheck(this, NzTabChangeEvent);
      });
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NZ_CONFIG_MODULE_NAME = 'tabs';
      var nextId = 0;

      var NzTabSetComponent = /*#__PURE__*/function () {
        function NzTabSetComponent(nzConfigService, cdr, directionality, router) {
          _classCallCheck(this, NzTabSetComponent);

          this.nzConfigService = nzConfigService;
          this.cdr = cdr;
          this.directionality = directionality;
          this.router = router;
          this._nzModuleName = NZ_CONFIG_MODULE_NAME;
          this.nzTabPosition = 'top';
          this.nzCanDeactivate = null;
          this.nzAddIcon = 'plus';
          this.nzTabBarStyle = null;
          this.nzType = 'line';
          this.nzSize = 'default';
          this.nzAnimated = true;
          this.nzTabBarGutter = undefined;
          this.nzHideAdd = false;
          this.nzCentered = false;
          this.nzHideAll = false;
          this.nzLinkRouter = false;
          this.nzLinkExact = true;
          this.nzSelectChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
          this.nzSelectedIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.nzTabListScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.nzClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.nzAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // Pick up only direct descendants under ivy rendering engine
          // We filter out only the tabs that belong to this tab set in `tabs`.

          this.allTabs = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"](); // All the direct tabs for this tab set

          this.tabs = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"]();
          this.dir = 'ltr';
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
          this.indexToSelect = 0;
          this.selectedIndex = null;
          this.tabLabelSubscription = rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"].EMPTY;
          this.tabsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"].EMPTY;
          this.canDeactivateSubscription = rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"].EMPTY;
          this.tabSetId = nextId++;
        }

        _createClass(NzTabSetComponent, [{
          key: "nzSelectedIndex",
          get: function get() {
            return this.selectedIndex;
          },
          set: function set(value) {
            this.indexToSelect = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value, null);
          }
        }, {
          key: "position",
          get: function get() {
            return ['top', 'bottom'].indexOf(this.nzTabPosition) === -1 ? 'vertical' : 'horizontal';
          }
        }, {
          key: "addable",
          get: function get() {
            return this.nzType === 'editable-card' && !this.nzHideAdd;
          }
        }, {
          key: "closable",
          get: function get() {
            return this.nzType === 'editable-card';
          }
        }, {
          key: "line",
          get: function get() {
            return this.nzType === 'line';
          }
        }, {
          key: "inkBarAnimated",
          get: function get() {
            return this.line && (typeof this.nzAnimated === 'boolean' ? this.nzAnimated : this.nzAnimated.inkBar);
          }
        }, {
          key: "tabPaneAnimated",
          get: function get() {
            return this.position === 'horizontal' && this.line && (typeof this.nzAnimated === 'boolean' ? this.nzAnimated : this.nzAnimated.tabPane);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            var _a;

            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$)).subscribe(function (direction) {
              _this10.dir = direction;

              _this10.cdr.detectChanges();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
            this.tabs.destroy();
            this.tabLabelSubscription.unsubscribe();
            this.tabsSubscription.unsubscribe();
            this.canDeactivateSubscription.unsubscribe();
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this11 = this;

            Promise.resolve().then(function () {
              _this11.setUpRouter();
            });
            this.subscribeToTabLabels();
            this.subscribeToAllTabChanges(); // Subscribe to changes in the amount of tabs, in order to be
            // able to re-render the content as new tabs are added or removed.

            this.tabsSubscription = this.tabs.changes.subscribe(function () {
              var indexToSelect = _this11.clampTabIndex(_this11.indexToSelect); // Maintain the previously-selected tab if a new tab is added or removed and there is no
              // explicit change that selects a different tab.


              if (indexToSelect === _this11.selectedIndex) {
                var tabs = _this11.tabs.toArray();

                for (var i = 0; i < tabs.length; i++) {
                  if (tabs[i].isActive) {
                    // Assign both to the `indexToSelect` and `selectedIndex` so we don't fire a changed
                    // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                    // adding a tab within the `nzSelectedIndexChange` event.
                    _this11.indexToSelect = _this11.selectedIndex = i;
                    break;
                  }
                }
              }

              _this11.subscribeToTabLabels();

              _this11.cdr.markForCheck();
            });
          }
        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            var _this12 = this;

            // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
            // the amount of tabs changes before the actual change detection runs.
            var indexToSelect = this.indexToSelect = this.clampTabIndex(this.indexToSelect); // If there is a change in selected index, emit a change event. Should not trigger if
            // the selected index has not yet been initialized.

            if (this.selectedIndex !== indexToSelect) {
              var isFirstRun = this.selectedIndex == null;

              if (!isFirstRun) {
                this.nzSelectChange.emit(this.createChangeEvent(indexToSelect));
              } // Changing these values after change detection has run
              // since the checked content may contain references to them.


              Promise.resolve().then(function () {
                _this12.tabs.forEach(function (tab, index) {
                  return tab.isActive = index === indexToSelect;
                });

                if (!isFirstRun) {
                  _this12.nzSelectedIndexChange.emit(indexToSelect);
                }
              });
            } // Setup the position for each tab and optionally setup an origin on the next selected tab.


            this.tabs.forEach(function (tab, index) {
              tab.position = index - indexToSelect; // If there is already a selected tab, then set up an origin for the next selected tab
              // if it doesn't have one already.

              if (_this12.selectedIndex != null && tab.position === 0 && !tab.origin) {
                tab.origin = indexToSelect - _this12.selectedIndex;
              }
            });

            if (this.selectedIndex !== indexToSelect) {
              this.selectedIndex = indexToSelect;
              this.cdr.markForCheck();
            }
          }
        }, {
          key: "onClose",
          value: function onClose(index, e) {
            e.preventDefault();
            e.stopPropagation();
            this.nzClose.emit({
              index: index
            });
          }
        }, {
          key: "onAdd",
          value: function onAdd() {
            this.nzAdd.emit();
          }
        }, {
          key: "clampTabIndex",
          value: function clampTabIndex(index) {
            return Math.min(this.tabs.length - 1, Math.max(index || 0, 0));
          }
        }, {
          key: "createChangeEvent",
          value: function createChangeEvent(index) {
            var event = new NzTabChangeEvent();
            event.index = index;

            if (this.tabs && this.tabs.length) {
              event.tab = this.tabs.toArray()[index];
              this.tabs.forEach(function (tab, i) {
                if (i !== index) {
                  tab.nzDeselect.emit();
                }
              });
              event.tab.nzSelect.emit();
            }

            return event;
          }
        }, {
          key: "subscribeToTabLabels",
          value: function subscribeToTabLabels() {
            var _this13 = this;

            if (this.tabLabelSubscription) {
              this.tabLabelSubscription.unsubscribe();
            }

            this.tabLabelSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"]).apply(void 0, _toConsumableArray(this.tabs.map(function (tab) {
              return tab.stateChanges;
            }))).subscribe(function () {
              return _this13.cdr.markForCheck();
            });
          }
        }, {
          key: "subscribeToAllTabChanges",
          value: function subscribeToAllTabChanges() {
            var _this14 = this;

            this.allTabs.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(this.allTabs)).subscribe(function (tabs) {
              _this14.tabs.reset(tabs.filter(function (tab) {
                return tab.closestTabSet === _this14;
              }));

              _this14.tabs.notifyOnChanges();
            });
          }
        }, {
          key: "canDeactivateFun",
          value: function canDeactivateFun(pre, next) {
            if (typeof this.nzCanDeactivate === 'function') {
              var observable = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["wrapIntoObservable"])(this.nzCanDeactivate(pre, next));
              return observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$));
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(true);
            }
          }
        }, {
          key: "clickNavItem",
          value: function clickNavItem(tab, index, e) {
            if (!tab.nzDisabled) {
              // ignore nzCanDeactivate
              tab.nzClick.emit();

              if (!this.isRouterLinkClickEvent(index, e)) {
                this.setSelectedIndex(index);
              }
            }
          }
        }, {
          key: "isRouterLinkClickEvent",
          value: function isRouterLinkClickEvent(index, event) {
            var _a, _b;

            var target = event.target;

            if (this.nzLinkRouter) {
              return !!((_b = (_a = this.tabs.toArray()[index]) === null || _a === void 0 ? void 0 : _a.linkDirective) === null || _b === void 0 ? void 0 : _b.elementRef.nativeElement.contains(target));
            } else {
              return false;
            }
          }
        }, {
          key: "contextmenuNavItem",
          value: function contextmenuNavItem(tab, e) {
            if (!tab.nzDisabled) {
              // ignore nzCanDeactivate
              tab.nzContextmenu.emit(e);
            }
          }
        }, {
          key: "setSelectedIndex",
          value: function setSelectedIndex(index) {
            var _this15 = this;

            this.canDeactivateSubscription.unsubscribe();
            this.canDeactivateSubscription = this.canDeactivateFun(this.selectedIndex, index).subscribe(function (can) {
              if (can) {
                _this15.nzSelectedIndex = index;
                _this15.tabNavBarRef.focusIndex = index;

                _this15.cdr.markForCheck();
              }
            });
          }
        }, {
          key: "getTabIndex",
          value: function getTabIndex(tab, index) {
            if (tab.nzDisabled) {
              return null;
            }

            return this.selectedIndex === index ? 0 : -1;
          }
        }, {
          key: "getTabContentId",
          value: function getTabContentId(i) {
            return "nz-tabs-".concat(this.tabSetId, "-tab-").concat(i);
          }
        }, {
          key: "setUpRouter",
          value: function setUpRouter() {
            var _this16 = this;

            if (this.nzLinkRouter) {
              if (!this.router) {
                throw new Error("".concat(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_22__["PREFIX"], " you should import 'RouterModule' if you want to use 'nzLinkRouter'!"));
              }

              this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(function (e) {
                return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_13__["NavigationEnd"];
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["delay"])(0)).subscribe(function () {
                _this16.updateRouterActive();

                _this16.cdr.markForCheck();
              });
            }
          }
        }, {
          key: "updateRouterActive",
          value: function updateRouterActive() {
            if (this.router.navigated) {
              var index = this.findShouldActiveTabIndex();

              if (index !== this.selectedIndex) {
                this.setSelectedIndex(index);
              }

              this.nzHideAll = index === -1;
            }
          }
        }, {
          key: "findShouldActiveTabIndex",
          value: function findShouldActiveTabIndex() {
            var tabs = this.tabs.toArray();
            var isActive = this.isLinkActive(this.router);
            return tabs.findIndex(function (tab) {
              var c = tab.linkDirective;
              return c ? isActive(c.routerLink) || isActive(c.routerLinkWithHref) : false;
            });
          }
        }, {
          key: "isLinkActive",
          value: function isLinkActive(router) {
            var _this17 = this;

            return function (link) {
              return link ? router.isActive(link.urlTree, _this17.nzLinkExact) : false;
            };
          }
        }, {
          key: "getTabContentMarginValue",
          value: function getTabContentMarginValue() {
            return -(this.nzSelectedIndex || 0) * 100;
          }
        }, {
          key: "getTabContentMarginLeft",
          value: function getTabContentMarginLeft() {
            if (this.tabPaneAnimated) {
              if (this.dir !== 'rtl') {
                return this.getTabContentMarginValue() + '%';
              }
            }

            return '';
          }
        }, {
          key: "getTabContentMarginRight",
          value: function getTabContentMarginRight() {
            if (this.tabPaneAnimated) {
              if (this.dir === 'rtl') {
                return this.getTabContentMarginValue() + '%';
              }
            }

            return '';
          }
        }]);

        return NzTabSetComponent;
      }();

      NzTabSetComponent.ɵfac = function NzTabSetComponent_Factory(t) {
        return new (t || NzTabSetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_21__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], 8));
      };

      NzTabSetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NzTabSetComponent,
        selectors: [["nz-tabset"]],
        contentQueries: function NzTabSetComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTabComponent, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.allTabs = _t);
          }
        },
        viewQuery: function NzTabSetComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzTabNavBarComponent, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabNavBarRef = _t.first);
          }
        },
        hostAttrs: [1, "ant-tabs"],
        hostVars: 24,
        hostBindings: function NzTabSetComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-card", ctx.nzType === "card" || ctx.nzType === "editable-card")("ant-tabs-editable", ctx.nzType === "editable-card")("ant-tabs-editable-card", ctx.nzType === "editable-card")("ant-tabs-centered", ctx.nzCentered)("ant-tabs-rtl", ctx.dir === "rtl")("ant-tabs-top", ctx.nzTabPosition === "top")("ant-tabs-bottom", ctx.nzTabPosition === "bottom")("ant-tabs-left", ctx.nzTabPosition === "left")("ant-tabs-right", ctx.nzTabPosition === "right")("ant-tabs-default", ctx.nzSize === "default")("ant-tabs-small", ctx.nzSize === "small")("ant-tabs-large", ctx.nzSize === "large");
          }
        },
        inputs: {
          nzTabPosition: "nzTabPosition",
          nzCanDeactivate: "nzCanDeactivate",
          nzAddIcon: "nzAddIcon",
          nzTabBarStyle: "nzTabBarStyle",
          nzType: "nzType",
          nzSize: "nzSize",
          nzAnimated: "nzAnimated",
          nzTabBarGutter: "nzTabBarGutter",
          nzHideAdd: "nzHideAdd",
          nzCentered: "nzCentered",
          nzHideAll: "nzHideAll",
          nzLinkRouter: "nzLinkRouter",
          nzLinkExact: "nzLinkExact",
          nzSelectedIndex: "nzSelectedIndex",
          nzTabBarExtraContent: "nzTabBarExtraContent"
        },
        outputs: {
          nzSelectChange: "nzSelectChange",
          nzSelectedIndexChange: "nzSelectedIndexChange",
          nzTabListScroll: "nzTabListScroll",
          nzClose: "nzClose",
          nzAdd: "nzAdd"
        },
        exportAs: ["nzTabset"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: NZ_TAB_SET,
          useExisting: NzTabSetComponent
        }])],
        decls: 4,
        vars: 16,
        consts: [[3, "ngStyle", "selectedIndex", "inkBarAnimated", "addable", "addIcon", "hideBar", "position", "extraTemplate", "tabScroll", "selectFocusedIndex", "addClicked", 4, "ngIf"], [1, "ant-tabs-content-holder"], [1, "ant-tabs-content"], ["nz-tab-body", "", 3, "active", "content", "forceRender", "tabPaneAnimated", 4, "ngFor", "ngForOf"], [3, "ngStyle", "selectedIndex", "inkBarAnimated", "addable", "addIcon", "hideBar", "position", "extraTemplate", "tabScroll", "selectFocusedIndex", "addClicked"], ["class", "ant-tabs-tab", 3, "margin-right", "margin-bottom", "ant-tabs-tab-active", "ant-tabs-tab-disabled", "click", "contextmenu", 4, "ngFor", "ngForOf"], [1, "ant-tabs-tab", 3, "click", "contextmenu"], ["role", "tab", "nzTabNavItem", "", "cdkMonitorElementFocus", "", 1, "ant-tabs-tab-btn", 3, "disabled", "tab", "active"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["nz-tab-close-button", "", 3, "closeIcon", "click", 4, "ngIf"], ["nz-tab-close-button", "", 3, "closeIcon", "click"], ["nz-tab-body", "", 3, "active", "content", "forceRender", "tabPaneAnimated"]],
        template: function NzTabSetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTabSetComponent_nz_tabs_nav_0_Template, 2, 9, "nz-tabs-nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzTabSetComponent_div_3_Template, 1, 4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tabs.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", ctx.getTabContentMarginLeft())("margin-right", ctx.getTabContentMarginRight());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-content-top", ctx.nzTabPosition === "top")("ant-tabs-content-bottom", ctx.nzTabPosition === "bottom")("ant-tabs-content-left", ctx.nzTabPosition === "left")("ant-tabs-content-right", ctx.nzTabPosition === "right")("ant-tabs-content-animated", ctx.tabPaneAnimated);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], NzTabNavBarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgStyle"], NzTabNavItemDirective, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["CdkMonitorFocus"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_18__["NzStringTemplateOutletDirective"], NzTabCloseButtonComponent, NzTabBodyComponent],
        encapsulation: 2
      });

      NzTabSetComponent.ctorParameters = function () {
        return [{
          type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_21__["NzConfigService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      };

      NzTabSetComponent.propDecorators = {
        nzSelectedIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzTabPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzTabBarExtraContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzCanDeactivate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzAddIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzTabBarStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzAnimated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzTabBarGutter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzHideAdd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzCentered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzHideAll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzLinkRouter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzLinkExact: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzSelectChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nzSelectedIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nzTabListScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nzClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nzAdd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        allTabs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [NzTabComponent, {
            descendants: true
          }]
        }],
        tabNavBarRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [NzTabNavBarComponent, {
            "static": false
          }]
        }]
      };
      Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_21__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", String)], NzTabSetComponent.prototype, "nzType", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_21__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", String)], NzTabSetComponent.prototype, "nzSize", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_21__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)], NzTabSetComponent.prototype, "nzAnimated", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_21__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Number)], NzTabSetComponent.prototype, "nzTabBarGutter", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Boolean)], NzTabSetComponent.prototype, "nzHideAdd", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Boolean)], NzTabSetComponent.prototype, "nzCentered", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)], NzTabSetComponent.prototype, "nzHideAll", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)], NzTabSetComponent.prototype, "nzLinkRouter", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)], NzTabSetComponent.prototype, "nzLinkExact", void 0);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabAddButtonComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'nz-tab-add-button, button[nz-tab-add-button]',
            template: "\n    <ng-container *nzStringTemplateOutlet=\"addIcon; let icon\">\n      <i nz-icon [nzType]=\"icon\" nzTheme=\"outline\"></i>\n    </ng-container>\n  ",
            host: {
              "class": 'ant-tabs-nav-add',
              'aria-label': 'Add tab',
              type: 'button'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          addIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabsInkBarDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'nz-tabs-ink-bar, [nz-tabs-ink-bar]',
            host: {
              "class": 'ant-tabs-ink-bar',
              '[class.ant-tabs-ink-bar-animated]': '_animated'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          animated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabLinkTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'ng-template[nzTabLink]',
            exportAs: 'nzTabLinkTemplate'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }]
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabLinkDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'a[nz-tab-link]',
            exportAs: 'nzTabLink'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLink"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }]
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[nz-tab]',
            exportAs: 'nzTab'
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'nz-tab',
            exportAs: 'nzTab',
            preserveWhitespaces: false,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <ng-template #tabLinkTemplate>\n      <ng-content select=\"[nz-tab-link]\"></ng-content>\n    </ng-template>\n    <ng-template #contentTemplate><ng-content></ng-content></ng-template>\n  "
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NZ_TAB_SET]
            }]
          }];
        }, {
          nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzClosable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzCloseIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzForceRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          nzDeselect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          nzClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          nzContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NzTabDirective, {
              "static": false,
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
            }]
          }],
          nzTabLinkTemplateDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NzTabLinkTemplateDirective, {
              "static": false
            }]
          }],
          linkDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NzTabLinkDirective, {
              "static": false
            }]
          }],
          contentTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['contentTemplate', {
              "static": true
            }]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabNavItemDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[nzTabNavItem]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          tab: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabNavOperationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'nz-tab-nav-operation',
            exportAs: 'nzTabNavOperation',
            preserveWhitespaces: false,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n    <button\n      nz-dropdown\n      class=\"ant-tabs-nav-more\"\n      type=\"button\"\n      tabindex=\"-1\"\n      aria-hidden=\"true\"\n      nzOverlayClassName=\"nz-tabs-dropdown\"\n      #dropdownTrigger=\"nzDropdown\"\n      [nzDropdownMenu]=\"menu\"\n      [nzOverlayStyle]=\"{ minWidth: '46px' }\"\n      [nzMatchWidthElement]=\"null\"\n      (nzVisibleChange)=\"menuVisChange($event)\"\n      (mouseenter)=\"showItems()\"\n    >\n      <i nz-icon nzType=\"ellipsis\"></i>\n    </button>\n    <nz-dropdown-menu #menu=\"nzDropdownMenu\">\n      <ul nz-menu *ngIf=\"menuOpened\">\n        <li\n          nz-menu-item\n          *ngFor=\"let item of items\"\n          class=\"ant-tabs-dropdown-menu-item\"\n          [class.ant-tabs-dropdown-menu-item-disabled]=\"item.disabled\"\n          [nzSelected]=\"item.active\"\n          [nzDisabled]=\"item.disabled\"\n          (click)=\"onSelect(item)\"\n          (contextmenu)=\"onContextmenu(item, $event)\"\n        >\n          <ng-container *nzStringTemplateOutlet=\"item.tab.label; context: { visible: false }\">{{ item.tab.label }}</ng-container>\n        </li>\n      </ul>\n    </nz-dropdown-menu>\n    <button *ngIf=\"addable\" nz-tab-add-button [addIcon]=\"addIcon\" (click)=\"addClicked.emit()\"></button>\n  ",
            host: {
              "class": 'ant-tabs-nav-operations',
              '[class.ant-tabs-nav-operations-hidden]': 'items.length === 0'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          addable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          addIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          addClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabNavBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'nz-tabs-nav',
            exportAs: 'nzTabsNav',
            preserveWhitespaces: false,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n    <div\n      class=\"ant-tabs-nav-wrap\"\n      [class.ant-tabs-nav-wrap-ping-left]=\"pingLeft\"\n      [class.ant-tabs-nav-wrap-ping-right]=\"pingRight\"\n      [class.ant-tabs-nav-wrap-ping-top]=\"pingTop\"\n      [class.ant-tabs-nav-wrap-ping-bottom]=\"pingBottom\"\n      #navWarp\n    >\n      <div class=\"ant-tabs-nav-list\" #navList nzTabScrollList (offsetChange)=\"onOffsetChange($event)\" (tabScroll)=\"tabScroll.emit($event)\">\n        <ng-content></ng-content>\n        <button *ngIf=\"showAddButton\" nz-tab-add-button [addIcon]=\"addIcon\" (click)=\"addClicked.emit()\"></button>\n        <div nz-tabs-ink-bar [hidden]=\"hideBar\" [position]=\"position\" [animated]=\"inkBarAnimated\"></div>\n      </div>\n    </div>\n    <nz-tab-nav-operation\n      (addClicked)=\"addClicked.emit()\"\n      (selected)=\"onSelectedFromMenu($event)\"\n      [addIcon]=\"addIcon\"\n      [addable]=\"addable\"\n      [items]=\"hiddenItems\"\n    ></nz-tab-nav-operation>\n    <div class=\"ant-tabs-extra-content\" *ngIf=\"extraTemplate\">\n      <ng-template [ngTemplateOutlet]=\"extraTemplate\"></ng-template>\n    </div>\n  ",
            host: {
              role: 'tablist',
              "class": 'ant-tabs-nav',
              '(keydown)': 'handleKeydown($event)'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"]
          }, {
            type: ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_10__["NzResizeObserver"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, {
          indexFocused: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          selectFocusedIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          addClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          tabScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          addable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          hideBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          addIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          inkBarAnimated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          selectedIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          extraTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          navWarpRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['navWarp', {
              "static": true
            }]
          }],
          navListRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['navList', {
              "static": true
            }]
          }],
          operationRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [NzTabNavOperationComponent, {
              "static": true
            }]
          }],
          addBtnRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [NzTabAddButtonComponent, {
              "static": false
            }]
          }],
          inkBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [NzTabsInkBarDirective, {
              "static": true
            }]
          }],
          items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [NzTabNavItemDirective, {
              descendants: true
            }]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabBodyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: '[nz-tab-body]',
            exportAs: 'nzTabBody',
            preserveWhitespaces: false,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <ng-container *ngIf=\"active || forceRender\">\n      <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n    </ng-container>\n  ",
            host: {
              "class": 'ant-tabs-tabpane',
              '[class.ant-tabs-tabpane-active]': 'active',
              '[attr.tabindex]': 'active ? 0 : -1',
              '[attr.aria-hidden]': '!active',
              '[style.visibility]': 'tabPaneAnimated ? active ? null : "hidden" : null',
              '[style.height]': 'tabPaneAnimated ? active ? null : 0 : null',
              '[style.overflow-y]': 'tabPaneAnimated ? active ? null : "none" : null',
              '[style.display]': '!tabPaneAnimated ? active ? null : "none" : null'
            }
          }]
        }], function () {
          return [];
        }, {
          content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          tabPaneAnimated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          forceRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabScrollListDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[nzTabScrollList]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          offsetChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          tabScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabCloseButtonComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'nz-tab-close-button, button[nz-tab-close-button]',
            template: "\n    <ng-container *nzStringTemplateOutlet=\"closeIcon; let icon\">\n      <i nz-icon [nzType]=\"icon\" nzTheme=\"outline\"></i>\n    </ng-container>\n  ",
            host: {
              "class": 'ant-tabs-tab-remove',
              'aria-label': 'Close tab',
              type: 'button'
            }
          }]
        }], function () {
          return [];
        }, {
          closeIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabSetComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'nz-tabset',
            exportAs: 'nzTabset',
            preserveWhitespaces: false,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
            providers: [{
              provide: NZ_TAB_SET,
              useExisting: NzTabSetComponent
            }],
            template: "\n    <nz-tabs-nav\n      *ngIf=\"tabs.length\"\n      [ngStyle]=\"nzTabBarStyle\"\n      [selectedIndex]=\"nzSelectedIndex || 0\"\n      [inkBarAnimated]=\"inkBarAnimated\"\n      [addable]=\"addable\"\n      [addIcon]=\"nzAddIcon\"\n      [hideBar]=\"nzHideAll\"\n      [position]=\"position\"\n      [extraTemplate]=\"nzTabBarExtraContent\"\n      (tabScroll)=\"nzTabListScroll.emit($event)\"\n      (selectFocusedIndex)=\"setSelectedIndex($event)\"\n      (addClicked)=\"onAdd()\"\n    >\n      <div\n        class=\"ant-tabs-tab\"\n        [style.margin-right.px]=\"position === 'horizontal' ? nzTabBarGutter : null\"\n        [style.margin-bottom.px]=\"position === 'vertical' ? nzTabBarGutter : null\"\n        [class.ant-tabs-tab-active]=\"nzSelectedIndex === i\"\n        [class.ant-tabs-tab-disabled]=\"tab.nzDisabled\"\n        (click)=\"clickNavItem(tab, i, $event)\"\n        (contextmenu)=\"contextmenuNavItem(tab, $event)\"\n        *ngFor=\"let tab of tabs; let i = index\"\n      >\n        <div\n          role=\"tab\"\n          [attr.tabIndex]=\"getTabIndex(tab, i)\"\n          [attr.aria-disabled]=\"tab.nzDisabled\"\n          [attr.aria-selected]=\"nzSelectedIndex === i && !nzHideAll\"\n          [attr.aria-controls]=\"getTabContentId(i)\"\n          [disabled]=\"tab.nzDisabled\"\n          [tab]=\"tab\"\n          [active]=\"nzSelectedIndex === i\"\n          class=\"ant-tabs-tab-btn\"\n          nzTabNavItem\n          cdkMonitorElementFocus\n        >\n          <ng-container *nzStringTemplateOutlet=\"tab.label; context: { visible: true }\">{{ tab.label }}</ng-container>\n          <button\n            nz-tab-close-button\n            *ngIf=\"tab.nzClosable && closable && !tab.nzDisabled\"\n            [closeIcon]=\"tab.nzCloseIcon\"\n            (click)=\"onClose(i, $event)\"\n          ></button>\n        </div>\n      </div>\n    </nz-tabs-nav>\n    <div class=\"ant-tabs-content-holder\">\n      <div\n        class=\"ant-tabs-content\"\n        [class.ant-tabs-content-top]=\"nzTabPosition === 'top'\"\n        [class.ant-tabs-content-bottom]=\"nzTabPosition === 'bottom'\"\n        [class.ant-tabs-content-left]=\"nzTabPosition === 'left'\"\n        [class.ant-tabs-content-right]=\"nzTabPosition === 'right'\"\n        [class.ant-tabs-content-animated]=\"tabPaneAnimated\"\n        [style.margin-left]=\"getTabContentMarginLeft()\"\n        [style.margin-right]=\"getTabContentMarginRight()\"\n      >\n        <div\n          nz-tab-body\n          *ngFor=\"let tab of tabs; let i = index\"\n          [active]=\"nzSelectedIndex == i && !nzHideAll\"\n          [content]=\"tab.content\"\n          [forceRender]=\"tab.nzForceRender\"\n          [tabPaneAnimated]=\"tabPaneAnimated\"\n        ></div>\n      </div>\n    </div>\n  ",
            host: {
              "class": 'ant-tabs',
              '[class.ant-tabs-card]': "nzType === 'card' || nzType === 'editable-card'",
              '[class.ant-tabs-editable]': "nzType === 'editable-card'",
              '[class.ant-tabs-editable-card]': "nzType === 'editable-card'",
              '[class.ant-tabs-centered]': "nzCentered",
              '[class.ant-tabs-rtl]': "dir === 'rtl'",
              '[class.ant-tabs-top]': "nzTabPosition === 'top'",
              '[class.ant-tabs-bottom]': "nzTabPosition === 'bottom'",
              '[class.ant-tabs-left]': "nzTabPosition === 'left'",
              '[class.ant-tabs-right]': "nzTabPosition === 'right'",
              '[class.ant-tabs-default]': "nzSize === 'default'",
              '[class.ant-tabs-small]': "nzSize === 'small'",
              '[class.ant-tabs-large]': "nzSize === 'large'"
            }
          }]
        }], function () {
          return [{
            type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_21__["NzConfigService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, {
          nzTabPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzCanDeactivate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzAddIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzTabBarStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzAnimated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzTabBarGutter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzHideAdd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzCentered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzHideAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzLinkRouter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzLinkExact: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzSelectChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          nzSelectedIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          nzTabListScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          nzClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          nzAdd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          allTabs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [NzTabComponent, {
              descendants: true
            }]
          }],
          nzSelectedIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzTabBarExtraContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          tabNavBarRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [NzTabNavBarComponent, {
              "static": false
            }]
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var DIRECTIVES = [NzTabSetComponent, NzTabComponent, NzTabNavBarComponent, NzTabNavItemDirective, NzTabsInkBarDirective, NzTabScrollListDirective, NzTabNavOperationComponent, NzTabAddButtonComponent, NzTabCloseButtonComponent, NzTabDirective, NzTabBodyComponent, NzTabLinkDirective, NzTabLinkTemplateDirective];

      var NzTabsModule = /*#__PURE__*/_createClass(function NzTabsModule() {
        _classCallCheck(this, NzTabsModule);
      });

      NzTabsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NzTabsModule
      });
      NzTabsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NzTabsModule_Factory(t) {
          return new (t || NzTabsModule)();
        },
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["ObserversModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_18__["NzOutletModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["PlatformModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["CdkScrollableModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_19__["NzDropDownModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzTabsModule, {
          declarations: function declarations() {
            return [NzTabSetComponent, NzTabComponent, NzTabNavBarComponent, NzTabNavItemDirective, NzTabsInkBarDirective, NzTabScrollListDirective, NzTabNavOperationComponent, NzTabAddButtonComponent, NzTabCloseButtonComponent, NzTabDirective, NzTabBodyComponent, NzTabLinkDirective, NzTabLinkTemplateDirective];
          },
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["ObserversModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_18__["NzOutletModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["PlatformModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["CdkScrollableModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_19__["NzDropDownModule"]];
          },
          exports: function exports() {
            return [NzTabSetComponent, NzTabComponent, NzTabNavBarComponent, NzTabNavItemDirective, NzTabsInkBarDirective, NzTabScrollListDirective, NzTabNavOperationComponent, NzTabAddButtonComponent, NzTabCloseButtonComponent, NzTabDirective, NzTabBodyComponent, NzTabLinkDirective, NzTabLinkTemplateDirective];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [DIRECTIVES],
            exports: [DIRECTIVES],
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["ObserversModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_18__["NzOutletModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["PlatformModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["CdkScrollableModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_19__["NzDropDownModule"]]
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
      //# sourceMappingURL=ng-zorro-antd-tabs.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~authentication-authentication-module~booth-booth-module~home-home-module~leader-schedule-lea~4fe6adaf-es5.js.map