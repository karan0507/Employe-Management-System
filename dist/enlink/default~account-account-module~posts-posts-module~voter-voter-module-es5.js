(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~account-account-module~posts-posts-module~voter-voter-module"], {
    /***/
    "jPNr":
    /*!***************************************************************************************!*\
      !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-page-header.js ***!
      \***************************************************************************************/

    /*! exports provided: NzPageHeaderAvatarDirective, NzPageHeaderBreadcrumbDirective, NzPageHeaderComponent, NzPageHeaderContentDirective, NzPageHeaderExtraDirective, NzPageHeaderFooterDirective, NzPageHeaderModule, NzPageHeaderSubtitleDirective, NzPageHeaderTagDirective, NzPageHeaderTitleDirective */

    /***/
    function jPNr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzPageHeaderAvatarDirective", function () {
        return NzPageHeaderAvatarDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzPageHeaderBreadcrumbDirective", function () {
        return NzPageHeaderBreadcrumbDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzPageHeaderComponent", function () {
        return NzPageHeaderComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzPageHeaderContentDirective", function () {
        return NzPageHeaderContentDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzPageHeaderExtraDirective", function () {
        return NzPageHeaderExtraDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzPageHeaderFooterDirective", function () {
        return NzPageHeaderFooterDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzPageHeaderModule", function () {
        return NzPageHeaderModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzPageHeaderSubtitleDirective", function () {
        return NzPageHeaderSubtitleDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzPageHeaderTagDirective", function () {
        return NzPageHeaderTagDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzPageHeaderTitleDirective", function () {
        return NzPageHeaderTitleDirective;
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


      var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/core/logger */
      "79xS");
      /* harmony import */


      var ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/core/resize-observers */
      "/Kk4");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      function NzPageHeaderComponent_div_3_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var backIcon_r6 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", backIcon_r6 || ctx_r5.getBackIcon());
        }
      }

      function NzPageHeaderComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzPageHeaderComponent_div_3_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r7.onBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzPageHeaderComponent_div_3_ng_container_2_Template, 2, 1, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.nzBackIcon);
        }
      }

      function NzPageHeaderComponent_span_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.nzTitle);
        }
      }

      function NzPageHeaderComponent_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzPageHeaderComponent_span_5_ng_container_1_Template, 2, 1, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r1.nzTitle);
        }
      }

      function NzPageHeaderComponent_ng_content_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 6, ["*ngIf", "!nzTitle"]);
        }
      }

      function NzPageHeaderComponent_span_7_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.nzSubtitle);
        }
      }

      function NzPageHeaderComponent_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzPageHeaderComponent_span_7_ng_container_1_Template, 2, 1, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r3.nzSubtitle);
        }
      }

      function NzPageHeaderComponent_ng_content_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 7, ["*ngIf", "!nzSubtitle"]);
        }
      }

      var _c0 = [[["nz-breadcrumb", "nz-page-header-breadcrumb", ""]], [["nz-avatar", "nz-page-header-avatar", ""]], [["nz-page-header-tags"], ["", "nz-page-header-tags", ""]], [["nz-page-header-extra"], ["", "nz-page-header-extra", ""]], [["nz-page-header-content"], ["", "nz-page-header-content", ""]], [["nz-page-header-footer"], ["", "nz-page-header-footer", ""]], [["nz-page-header-title"], ["", "nz-page-header-title", ""]], [["nz-page-header-subtitle"], ["", "nz-page-header-subtitle", ""]]];
      var _c1 = ["nz-breadcrumb[nz-page-header-breadcrumb]", "nz-avatar[nz-page-header-avatar]", "nz-page-header-tags, [nz-page-header-tags]", "nz-page-header-extra, [nz-page-header-extra]", "nz-page-header-content, [nz-page-header-content]", "nz-page-header-footer, [nz-page-header-footer]", "nz-page-header-title, [nz-page-header-title]", "nz-page-header-subtitle, [nz-page-header-subtitle]"];

      var NzPageHeaderTitleDirective = /*#__PURE__*/_createClass(function NzPageHeaderTitleDirective() {
        _classCallCheck(this, NzPageHeaderTitleDirective);
      });

      NzPageHeaderTitleDirective.ɵfac = function NzPageHeaderTitleDirective_Factory(t) {
        return new (t || NzPageHeaderTitleDirective)();
      };

      NzPageHeaderTitleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: NzPageHeaderTitleDirective,
        selectors: [["nz-page-header-title"], ["", "nz-page-header-title", ""]],
        hostAttrs: [1, "ant-page-header-heading-title"],
        exportAs: ["nzPageHeaderTitle"]
      });

      var NzPageHeaderSubtitleDirective = /*#__PURE__*/_createClass(function NzPageHeaderSubtitleDirective() {
        _classCallCheck(this, NzPageHeaderSubtitleDirective);
      });

      NzPageHeaderSubtitleDirective.ɵfac = function NzPageHeaderSubtitleDirective_Factory(t) {
        return new (t || NzPageHeaderSubtitleDirective)();
      };

      NzPageHeaderSubtitleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: NzPageHeaderSubtitleDirective,
        selectors: [["nz-page-header-subtitle"], ["", "nz-page-header-subtitle", ""]],
        hostAttrs: [1, "ant-page-header-heading-sub-title"],
        exportAs: ["nzPageHeaderSubtitle"]
      });

      var NzPageHeaderContentDirective = /*#__PURE__*/_createClass(function NzPageHeaderContentDirective() {
        _classCallCheck(this, NzPageHeaderContentDirective);
      });

      NzPageHeaderContentDirective.ɵfac = function NzPageHeaderContentDirective_Factory(t) {
        return new (t || NzPageHeaderContentDirective)();
      };

      NzPageHeaderContentDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: NzPageHeaderContentDirective,
        selectors: [["nz-page-header-content"], ["", "nz-page-header-content", ""]],
        hostAttrs: [1, "ant-page-header-content"],
        exportAs: ["nzPageHeaderContent"]
      });

      var NzPageHeaderTagDirective = /*#__PURE__*/_createClass(function NzPageHeaderTagDirective() {
        _classCallCheck(this, NzPageHeaderTagDirective);
      });

      NzPageHeaderTagDirective.ɵfac = function NzPageHeaderTagDirective_Factory(t) {
        return new (t || NzPageHeaderTagDirective)();
      };

      NzPageHeaderTagDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: NzPageHeaderTagDirective,
        selectors: [["nz-page-header-tags"], ["", "nz-page-header-tags", ""]],
        hostAttrs: [1, "ant-page-header-heading-tags"],
        exportAs: ["nzPageHeaderTags"]
      });

      var NzPageHeaderExtraDirective = /*#__PURE__*/_createClass(function NzPageHeaderExtraDirective() {
        _classCallCheck(this, NzPageHeaderExtraDirective);
      });

      NzPageHeaderExtraDirective.ɵfac = function NzPageHeaderExtraDirective_Factory(t) {
        return new (t || NzPageHeaderExtraDirective)();
      };

      NzPageHeaderExtraDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: NzPageHeaderExtraDirective,
        selectors: [["nz-page-header-extra"], ["", "nz-page-header-extra", ""]],
        hostAttrs: [1, "ant-page-header-heading-extra"],
        exportAs: ["nzPageHeaderExtra"]
      });

      var NzPageHeaderFooterDirective = /*#__PURE__*/_createClass(function NzPageHeaderFooterDirective() {
        _classCallCheck(this, NzPageHeaderFooterDirective);
      });

      NzPageHeaderFooterDirective.ɵfac = function NzPageHeaderFooterDirective_Factory(t) {
        return new (t || NzPageHeaderFooterDirective)();
      };

      NzPageHeaderFooterDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: NzPageHeaderFooterDirective,
        selectors: [["nz-page-header-footer"], ["", "nz-page-header-footer", ""]],
        hostAttrs: [1, "ant-page-header-footer"],
        exportAs: ["nzPageHeaderFooter"]
      });

      var NzPageHeaderBreadcrumbDirective = /*#__PURE__*/_createClass(function NzPageHeaderBreadcrumbDirective() {
        _classCallCheck(this, NzPageHeaderBreadcrumbDirective);
      });

      NzPageHeaderBreadcrumbDirective.ɵfac = function NzPageHeaderBreadcrumbDirective_Factory(t) {
        return new (t || NzPageHeaderBreadcrumbDirective)();
      };

      NzPageHeaderBreadcrumbDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: NzPageHeaderBreadcrumbDirective,
        selectors: [["nz-breadcrumb", "nz-page-header-breadcrumb", ""]],
        exportAs: ["nzPageHeaderBreadcrumb"]
      });

      var NzPageHeaderAvatarDirective = /*#__PURE__*/_createClass(function NzPageHeaderAvatarDirective() {
        _classCallCheck(this, NzPageHeaderAvatarDirective);
      });

      NzPageHeaderAvatarDirective.ɵfac = function NzPageHeaderAvatarDirective_Factory(t) {
        return new (t || NzPageHeaderAvatarDirective)();
      };

      NzPageHeaderAvatarDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: NzPageHeaderAvatarDirective,
        selectors: [["nz-avatar", "nz-page-header-avatar", ""]],
        exportAs: ["nzPageHeaderAvatar"]
      });
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var NZ_CONFIG_MODULE_NAME = 'pageHeader';

      var NzPageHeaderComponent = /*#__PURE__*/function () {
        function NzPageHeaderComponent(location, nzConfigService, elementRef, nzResizeObserver, cdr, directionality) {
          _classCallCheck(this, NzPageHeaderComponent);

          this.location = location;
          this.nzConfigService = nzConfigService;
          this.elementRef = elementRef;
          this.nzResizeObserver = nzResizeObserver;
          this.cdr = cdr;
          this.directionality = directionality;
          this._nzModuleName = NZ_CONFIG_MODULE_NAME;
          this.nzBackIcon = null;
          this.nzGhost = true;
          this.nzBack = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.compact = false;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          this.dir = 'ltr';
        }

        _createClass(NzPageHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var _a;

            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.destroy$)).subscribe(function (direction) {
              _this.dir = direction;

              _this.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            this.nzResizeObserver.observe(this.elementRef).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 1),
                  entry = _ref2[0];

              return entry.contentRect.width;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.destroy$)).subscribe(function (width) {
              _this2.compact = width < 768;

              _this2.cdr.markForCheck();
            });
          }
        }, {
          key: "onBack",
          value: function onBack() {
            if (this.nzBack.observers.length) {
              this.nzBack.emit();
            } else {
              if (!this.location) {
                throw new Error("".concat(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_7__["PREFIX"], " you should import 'RouterModule' or register 'Location' if you want to use 'nzBack' default event!"));
              }

              this.location.back();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }, {
          key: "getBackIcon",
          value: function getBackIcon() {
            if (this.dir === 'rtl') {
              return 'arrow-right';
            }

            return 'arrow-left';
          }
        }]);

        return NzPageHeaderComponent;
      }();

      NzPageHeaderComponent.ɵfac = function NzPageHeaderComponent_Factory(t) {
        return new (t || NzPageHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_8__["NzResizeObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], 8));
      };

      NzPageHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: NzPageHeaderComponent,
        selectors: [["nz-page-header"]],
        contentQueries: function NzPageHeaderComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, NzPageHeaderFooterDirective, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, NzPageHeaderBreadcrumbDirective, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.nzPageHeaderFooter = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.nzPageHeaderBreadcrumb = _t.first);
          }
        },
        hostAttrs: [1, "ant-page-header"],
        hostVars: 10,
        hostBindings: function NzPageHeaderComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("has-footer", ctx.nzPageHeaderFooter)("ant-page-header-ghost", ctx.nzGhost)("has-breadcrumb", ctx.nzPageHeaderBreadcrumb)("ant-page-header-compact", ctx.compact)("ant-page-header-rtl", ctx.dir === "rtl");
          }
        },
        inputs: {
          nzBackIcon: "nzBackIcon",
          nzGhost: "nzGhost",
          nzTitle: "nzTitle",
          nzSubtitle: "nzSubtitle"
        },
        outputs: {
          nzBack: "nzBack"
        },
        exportAs: ["nzPageHeader"],
        ngContentSelectors: _c1,
        decls: 13,
        vars: 5,
        consts: [[1, "ant-page-header-heading"], [1, "ant-page-header-heading-left"], ["class", "ant-page-header-back", 3, "click", 4, "ngIf"], ["class", "ant-page-header-heading-title", 4, "ngIf"], [4, "ngIf"], ["class", "ant-page-header-heading-sub-title", 4, "ngIf"], [1, "ant-page-header-back", 3, "click"], ["role", "button", "tabindex", "0", 1, "ant-page-header-back-button"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], [1, "ant-page-header-heading-title"], [1, "ant-page-header-heading-sub-title"]],
        template: function NzPageHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzPageHeaderComponent_div_3_Template, 3, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NzPageHeaderComponent_span_5_Template, 2, 1, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NzPageHeaderComponent_ng_content_6_Template, 1, 0, "ng-content", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, NzPageHeaderComponent_span_7_Template, 2, 1, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, NzPageHeaderComponent_ng_content_8_Template, 1, 0, "ng-content", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](9, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](10, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](11, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](12, 5);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzBackIcon !== null);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.nzTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzSubtitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.nzSubtitle);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__["NzStringTemplateOutletDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"]],
        encapsulation: 2,
        changeDetection: 0
      });

      NzPageHeaderComponent.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__["NzConfigService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_8__["NzResizeObserver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }];
      };

      NzPageHeaderComponent.propDecorators = {
        nzBackIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzSubtitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzGhost: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzBack: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzPageHeaderFooter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [NzPageHeaderFooterDirective, {
            "static": false
          }]
        }],
        nzPageHeaderBreadcrumb: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [NzPageHeaderBreadcrumbDirective, {
            "static": false
          }]
        }]
      };
      Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__metadata"])("design:type", Boolean)], NzPageHeaderComponent.prototype, "nzGhost", void 0);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzPageHeaderTitleDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'nz-page-header-title, [nz-page-header-title]',
            exportAs: 'nzPageHeaderTitle',
            host: {
              "class": 'ant-page-header-heading-title'
            }
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzPageHeaderSubtitleDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'nz-page-header-subtitle, [nz-page-header-subtitle]',
            exportAs: 'nzPageHeaderSubtitle',
            host: {
              "class": 'ant-page-header-heading-sub-title'
            }
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzPageHeaderContentDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'nz-page-header-content, [nz-page-header-content]',
            exportAs: 'nzPageHeaderContent',
            host: {
              "class": 'ant-page-header-content'
            }
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzPageHeaderTagDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'nz-page-header-tags, [nz-page-header-tags]',
            exportAs: 'nzPageHeaderTags',
            host: {
              "class": 'ant-page-header-heading-tags'
            }
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzPageHeaderExtraDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'nz-page-header-extra, [nz-page-header-extra]',
            exportAs: 'nzPageHeaderExtra',
            host: {
              "class": 'ant-page-header-heading-extra'
            }
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzPageHeaderFooterDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'nz-page-header-footer, [nz-page-header-footer]',
            exportAs: 'nzPageHeaderFooter',
            host: {
              "class": 'ant-page-header-footer'
            }
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzPageHeaderBreadcrumbDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'nz-breadcrumb[nz-page-header-breadcrumb]',
            exportAs: 'nzPageHeaderBreadcrumb'
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzPageHeaderAvatarDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'nz-avatar[nz-page-header-avatar]',
            exportAs: 'nzPageHeaderAvatar'
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzPageHeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'nz-page-header',
            exportAs: 'nzPageHeader',
            template: "\n    <ng-content select=\"nz-breadcrumb[nz-page-header-breadcrumb]\"></ng-content>\n\n    <div class=\"ant-page-header-heading\">\n      <div class=\"ant-page-header-heading-left\">\n        <!--back-->\n        <div *ngIf=\"nzBackIcon !== null\" (click)=\"onBack()\" class=\"ant-page-header-back\">\n          <div role=\"button\" tabindex=\"0\" class=\"ant-page-header-back-button\">\n            <ng-container *nzStringTemplateOutlet=\"nzBackIcon; let backIcon\">\n              <i nz-icon [nzType]=\"backIcon || getBackIcon()\" nzTheme=\"outline\"></i>\n            </ng-container>\n          </div>\n        </div>\n        <!--avatar-->\n        <ng-content select=\"nz-avatar[nz-page-header-avatar]\"></ng-content>\n        <!--title-->\n        <span class=\"ant-page-header-heading-title\" *ngIf=\"nzTitle\">\n          <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n        </span>\n        <ng-content *ngIf=\"!nzTitle\" select=\"nz-page-header-title, [nz-page-header-title]\"></ng-content>\n        <!--subtitle-->\n        <span class=\"ant-page-header-heading-sub-title\" *ngIf=\"nzSubtitle\">\n          <ng-container *nzStringTemplateOutlet=\"nzSubtitle\">{{ nzSubtitle }}</ng-container>\n        </span>\n        <ng-content *ngIf=\"!nzSubtitle\" select=\"nz-page-header-subtitle, [nz-page-header-subtitle]\"></ng-content>\n        <ng-content select=\"nz-page-header-tags, [nz-page-header-tags]\"></ng-content>\n      </div>\n\n      <ng-content select=\"nz-page-header-extra, [nz-page-header-extra]\"></ng-content>\n    </div>\n\n    <ng-content select=\"nz-page-header-content, [nz-page-header-content]\"></ng-content>\n    <ng-content select=\"nz-page-header-footer, [nz-page-header-footer]\"></ng-content>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            host: {
              "class": 'ant-page-header',
              '[class.has-footer]': 'nzPageHeaderFooter',
              '[class.ant-page-header-ghost]': 'nzGhost',
              '[class.has-breadcrumb]': 'nzPageHeaderBreadcrumb',
              '[class.ant-page-header-compact]': 'compact',
              '[class.ant-page-header-rtl]': "dir === 'rtl'"
            }
          }]
        }], function () {
          return [{
            type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__["NzConfigService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_8__["NzResizeObserver"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }];
        }, {
          nzBackIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzGhost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzBack: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzSubtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzPageHeaderFooter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [NzPageHeaderFooterDirective, {
              "static": false
            }]
          }],
          nzPageHeaderBreadcrumb: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [NzPageHeaderBreadcrumbDirective, {
              "static": false
            }]
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzPageHeaderCells = [NzPageHeaderTitleDirective, NzPageHeaderSubtitleDirective, NzPageHeaderContentDirective, NzPageHeaderTagDirective, NzPageHeaderExtraDirective, NzPageHeaderFooterDirective, NzPageHeaderBreadcrumbDirective, NzPageHeaderAvatarDirective];

      var NzPageHeaderModule = /*#__PURE__*/_createClass(function NzPageHeaderModule() {
        _classCallCheck(this, NzPageHeaderModule);
      });

      NzPageHeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: NzPageHeaderModule
      });
      NzPageHeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function NzPageHeaderModule_Factory(t) {
          return new (t || NzPageHeaderModule)();
        },
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__["NzOutletModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzPageHeaderModule, {
          declarations: function declarations() {
            return [NzPageHeaderComponent, NzPageHeaderTitleDirective, NzPageHeaderSubtitleDirective, NzPageHeaderContentDirective, NzPageHeaderTagDirective, NzPageHeaderExtraDirective, NzPageHeaderFooterDirective, NzPageHeaderBreadcrumbDirective, NzPageHeaderAvatarDirective];
          },
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__["NzOutletModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"]];
          },
          exports: function exports() {
            return [NzPageHeaderComponent, NzPageHeaderTitleDirective, NzPageHeaderSubtitleDirective, NzPageHeaderContentDirective, NzPageHeaderTagDirective, NzPageHeaderExtraDirective, NzPageHeaderFooterDirective, NzPageHeaderBreadcrumbDirective, NzPageHeaderAvatarDirective];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzPageHeaderModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__["NzOutletModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"]],
            exports: [NzPageHeaderComponent, NzPageHeaderCells],
            declarations: [NzPageHeaderComponent, NzPageHeaderCells]
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
      //# sourceMappingURL=ng-zorro-antd-page-header.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~account-account-module~posts-posts-module~voter-voter-module-es5.js.map