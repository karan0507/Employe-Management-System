(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~account-account-module~authentication-authentication-module~booth-booth-module~dashboard-das~d3403784"], {
    /***/
    "/Kk4":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-resize-observers.js ***!
      \*************************************************************************************************/

    /*! exports provided: NzResizeObserver, NzResizeObserversModule, ɵNzResizeObserverFactory */

    /***/
    function Kk4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzResizeObserver", function () {
        return NzResizeObserver;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzResizeObserversModule", function () {
        return NzResizeObserversModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵNzResizeObserverFactory", function () {
        return NzResizeObserverFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! resize-observer-polyfill */
      "bdgK");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      /**
       * Factory that creates a new ResizeObserver and allows us to stub it out in unit tests.
       */


      var NzResizeObserverFactory = /*#__PURE__*/function () {
        function NzResizeObserverFactory() {
          _classCallCheck(this, NzResizeObserverFactory);
        }

        _createClass(NzResizeObserverFactory, [{
          key: "create",
          value: function create(callback) {
            return typeof resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__["default"] === 'undefined' ? null : new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__["default"](callback);
          }
        }]);

        return NzResizeObserverFactory;
      }();

      NzResizeObserverFactory.ɵfac = function NzResizeObserverFactory_Factory(t) {
        return new (t || NzResizeObserverFactory)();
      };

      NzResizeObserverFactory.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function NzResizeObserverFactory_Factory() {
          return new NzResizeObserverFactory();
        },
        token: NzResizeObserverFactory,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzResizeObserverFactory, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /** An injectable service that allows watching elements for changes to their content. */


      var NzResizeObserver = /*#__PURE__*/function () {
        function NzResizeObserver(nzResizeObserverFactory) {
          _classCallCheck(this, NzResizeObserver);

          this.nzResizeObserverFactory = nzResizeObserverFactory;
          /** Keeps track of the existing ResizeObservers so they can be reused. */

          this.observedElements = new Map();
        }

        _createClass(NzResizeObserver, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this = this;

            this.observedElements.forEach(function (_, element) {
              return _this.cleanupObserver(element);
            });
          }
        }, {
          key: "observe",
          value: function observe(elementOrRef) {
            var _this2 = this;

            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(elementOrRef);
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
              var stream = _this2.observeElement(element);

              var subscription = stream.subscribe(observer);
              return function () {
                subscription.unsubscribe();

                _this2.unobserveElement(element);
              };
            });
          }
          /**
           * Observes the given element by using the existing ResizeObserver if available, or creating a
           * new one if not.
           */

        }, {
          key: "observeElement",
          value: function observeElement(element) {
            if (!this.observedElements.has(element)) {
              var stream = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
              var observer = this.nzResizeObserverFactory.create(function (mutations) {
                return stream.next(mutations);
              });

              if (observer) {
                observer.observe(element);
              }

              this.observedElements.set(element, {
                observer: observer,
                stream: stream,
                count: 1
              });
            } else {
              this.observedElements.get(element).count++;
            }

            return this.observedElements.get(element).stream;
          }
          /**
           * Un-observes the given element and cleans up the underlying ResizeObserver if nobody else is
           * observing this element.
           */

        }, {
          key: "unobserveElement",
          value: function unobserveElement(element) {
            if (this.observedElements.has(element)) {
              this.observedElements.get(element).count--;

              if (!this.observedElements.get(element).count) {
                this.cleanupObserver(element);
              }
            }
          }
          /** Clean up the underlying ResizeObserver for the specified element. */

        }, {
          key: "cleanupObserver",
          value: function cleanupObserver(element) {
            if (this.observedElements.has(element)) {
              var _this$observedElement = this.observedElements.get(element),
                  observer = _this$observedElement.observer,
                  stream = _this$observedElement.stream;

              if (observer) {
                observer.disconnect();
              }

              stream.complete();
              this.observedElements["delete"](element);
            }
          }
        }]);

        return NzResizeObserver;
      }();

      NzResizeObserver.ɵfac = function NzResizeObserver_Factory(t) {
        return new (t || NzResizeObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NzResizeObserverFactory));
      };

      NzResizeObserver.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function NzResizeObserver_Factory() {
          return new NzResizeObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(NzResizeObserverFactory));
        },
        token: NzResizeObserver,
        providedIn: "root"
      });

      NzResizeObserver.ctorParameters = function () {
        return [{
          type: NzResizeObserverFactory
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzResizeObserver, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: NzResizeObserverFactory
          }];
        }, null);
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzResizeObserversModule = /*#__PURE__*/_createClass(function NzResizeObserversModule() {
        _classCallCheck(this, NzResizeObserversModule);
      });

      NzResizeObserversModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NzResizeObserversModule
      });
      NzResizeObserversModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NzResizeObserversModule_Factory(t) {
          return new (t || NzResizeObserversModule)();
        },
        providers: [NzResizeObserverFactory]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzResizeObserversModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            providers: [NzResizeObserverFactory]
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
      //# sourceMappingURL=ng-zorro-antd-core-resize-observers.js.map

      /***/

    },

    /***/
    "3/1E":
    /*!**************************************************************************************!*\
      !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-pagination.js ***!
      \**************************************************************************************/

    /*! exports provided: NzPaginationComponent, NzPaginationDefaultComponent, NzPaginationItemComponent, NzPaginationModule, NzPaginationOptionsComponent, NzPaginationSimpleComponent */

    /***/
    function E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzPaginationComponent", function () {
        return NzPaginationComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzPaginationDefaultComponent", function () {
        return NzPaginationDefaultComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzPaginationItemComponent", function () {
        return NzPaginationItemComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzPaginationModule", function () {
        return NzPaginationModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzPaginationOptionsComponent", function () {
        return NzPaginationOptionsComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzPaginationSimpleComponent", function () {
        return NzPaginationSimpleComponent;
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd/core/config */
      "2Suw");
      /* harmony import */


      var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/core/services */
      "JwMs");
      /* harmony import */


      var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/core/util */
      "/KA4");
      /* harmony import */


      var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/i18n */
      "Rm4T");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/select */
      "zAKX");
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      function NzPaginationComponent_ng_container_0_ng_container_1_ng_template_1_Template(rf, ctx) {}

      function NzPaginationComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzPaginationComponent_ng_container_0_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1.template);
        }
      }

      function NzPaginationComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzPaginationComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.nzSimple)("ngIfElse", _r2.template);
        }
      }

      var _c0 = ["containerTemplate"];

      function NzPaginationDefaultComponent_ng_template_0_li_0_ng_template_1_Template(rf, ctx) {}

      var _c1 = function _c1(a0, a1) {
        return {
          $implicit: a0,
          range: a1
        };
      };

      function NzPaginationDefaultComponent_ng_template_0_li_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzPaginationDefaultComponent_ng_template_0_li_0_ng_template_1_Template, 0, 0, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.showTotal)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c1, ctx_r2.total, ctx_r2.ranges));
        }
      }

      function NzPaginationDefaultComponent_ng_template_0_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("gotoIndex", function NzPaginationDefaultComponent_ng_template_0_li_1_Template_li_gotoIndex_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r7.jumpPage($event);
          })("diffIndex", function NzPaginationDefaultComponent_ng_template_0_li_1_Template_li_diffIndex_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r9.jumpDiff($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var page_r6 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("locale", ctx_r3.locale)("type", page_r6.type)("index", page_r6.index)("disabled", !!page_r6.disabled)("itemRender", ctx_r3.itemRender)("active", ctx_r3.pageIndex === page_r6.index)("direction", ctx_r3.dir);
        }
      }

      function NzPaginationDefaultComponent_ng_template_0_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pageIndexChange", function NzPaginationDefaultComponent_ng_template_0_div_2_Template_div_pageIndexChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r10.onPageIndexChange($event);
          })("pageSizeChange", function NzPaginationDefaultComponent_ng_template_0_div_2_Template_div_pageSizeChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r12.onPageSizeChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("total", ctx_r4.total)("locale", ctx_r4.locale)("disabled", ctx_r4.disabled)("nzSize", ctx_r4.nzSize)("showSizeChanger", ctx_r4.showSizeChanger)("showQuickJumper", ctx_r4.showQuickJumper)("pageIndex", ctx_r4.pageIndex)("pageSize", ctx_r4.pageSize)("pageSizeOptions", ctx_r4.pageSizeOptions);
        }
      }

      function NzPaginationDefaultComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzPaginationDefaultComponent_ng_template_0_li_0_Template, 2, 5, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzPaginationDefaultComponent_ng_template_0_li_1_Template, 1, 7, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzPaginationDefaultComponent_ng_template_0_div_2_Template, 1, 9, "div", 3);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.showTotal);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.listOfPageItem)("ngForTrackBy", ctx_r1.trackByPageItem);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.showQuickJumper || ctx_r1.showSizeChanger);
        }
      }

      var _c2 = ["nz-pagination-item", ""];

      function NzPaginationItemComponent_ng_template_0_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var page_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().page;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](page_r4);
        }
      }

      function NzPaginationItemComponent_ng_template_0_button_2_i_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 9);
        }
      }

      function NzPaginationItemComponent_ng_template_0_button_2_i_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 10);
        }
      }

      function NzPaginationItemComponent_ng_template_0_button_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_0_button_2_i_2_Template, 1, 0, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzPaginationItemComponent_ng_template_0_button_2_i_3_Template, 1, 0, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r6.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx_r6.direction);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "rtl");
        }
      }

      function NzPaginationItemComponent_ng_template_0_button_3_i_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 10);
        }
      }

      function NzPaginationItemComponent_ng_template_0_button_3_i_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 9);
        }
      }

      function NzPaginationItemComponent_ng_template_0_button_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_0_button_3_i_2_Template, 1, 0, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzPaginationItemComponent_ng_template_0_button_3_i_3_Template, 1, 0, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r7.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx_r7.direction);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "rtl");
        }
      }

      function NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_2_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 20);
        }
      }

      function NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_2_i_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 21);
        }
      }

      function NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_2_i_1_Template, 1, 0, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_2_i_2_Template, 1, 0, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx_r15.direction);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "rtl");
        }
      }

      function NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_3_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 21);
        }
      }

      function NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_3_i_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 20);
        }
      }

      function NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_3_i_1_Template, 1, 0, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_3_i_2_Template, 1, 0, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx_r16.direction);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "rtl");
        }
      }

      function NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_2_Template, 3, 2, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_ng_container_3_Template, 3, 2, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u2022\u2022\u2022");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var type_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", type_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "prev_5");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "next_5");
        }
      }

      function NzPaginationItemComponent_ng_template_0_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_0_ng_container_4_div_2_Template, 6, 3, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var type_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", type_r3);
        }
      }

      function NzPaginationItemComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzPaginationItemComponent_ng_template_0_a_1_Template, 2, 1, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_0_button_2_Template, 4, 3, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzPaginationItemComponent_ng_template_0_button_3_Template, 4, 3, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NzPaginationItemComponent_ng_template_0_ng_container_4_Template, 3, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var type_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", type_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "page");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "prev");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "next");
        }
      }

      function NzPaginationItemComponent_ng_template_2_Template(rf, ctx) {}

      var _c3 = function _c3(a0, a1) {
        return {
          $implicit: a0,
          page: a1
        };
      };

      var _c4 = ["nz-pagination-options", ""];

      function NzPaginationOptionsComponent_nz_select_0_nz_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 4);
        }

        if (rf & 2) {
          var option_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzLabel", option_r3.label)("nzValue", option_r3.value);
        }
      }

      function NzPaginationOptionsComponent_nz_select_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-select", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NzPaginationOptionsComponent_nz_select_0_Template_nz_select_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r4.onPageSizeChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzPaginationOptionsComponent_nz_select_0_nz_option_1_Template, 1, 2, "nz-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzDisabled", ctx_r0.disabled)("nzSize", ctx_r0.nzSize)("ngModel", ctx_r0.pageSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.listOfPageSizeOption)("ngForTrackBy", ctx_r0.trackByOption);
        }
      }

      function NzPaginationOptionsComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.enter", function NzPaginationOptionsComponent_div_1_Template_input_keydown_enter_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r6.jumpToPageViaInput($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.locale.jump_to, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.locale.page, " ");
        }
      }

      function NzPaginationSimpleComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzPaginationSimpleComponent_ng_template_0_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r2.prePage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.enter", function NzPaginationSimpleComponent_ng_template_0_Template_input_keydown_enter_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r4.jumpToPageViaInput($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "/");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzPaginationSimpleComponent_ng_template_0_Template_li_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r5.nextPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.isFirstIndex)("direction", ctx_r1.dir)("itemRender", ctx_r1.itemRender);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("title", ctx_r1.locale.prev_page);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("title", ctx_r1.pageIndex + "/" + ctx_r1.lastIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.disabled)("value", ctx_r1.pageIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.lastIndex, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.isLastIndex)("direction", ctx_r1.dir)("itemRender", ctx_r1.itemRender);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("title", ctx_r1.locale == null ? null : ctx_r1.locale.next_page);
        }
      }

      var NZ_CONFIG_MODULE_NAME = 'pagination';

      var NzPaginationComponent = /*#__PURE__*/function () {
        function NzPaginationComponent(i18n, cdr, breakpointService, nzConfigService, directionality, elementRef) {
          _classCallCheck(this, NzPaginationComponent);

          this.i18n = i18n;
          this.cdr = cdr;
          this.breakpointService = breakpointService;
          this.nzConfigService = nzConfigService;
          this.directionality = directionality;
          this.elementRef = elementRef;
          this._nzModuleName = NZ_CONFIG_MODULE_NAME;
          this.nzPageSizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.nzPageIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.nzShowTotal = null;
          this.nzItemRender = null;
          this.nzSize = 'default';
          this.nzPageSizeOptions = [10, 20, 30, 40];
          this.nzShowSizeChanger = false;
          this.nzShowQuickJumper = false;
          this.nzSimple = false;
          this.nzDisabled = false;
          this.nzResponsive = false;
          this.nzHideOnSinglePage = false;
          this.nzTotal = 0;
          this.nzPageIndex = 1;
          this.nzPageSize = 10;
          this.showPagination = true;
          this.size = 'default';
          this.dir = 'ltr';
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          this.total$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["ReplaySubject"](1); // TODO: move to host after View Engine deprecation

          this.elementRef.nativeElement.classList.add('ant-pagination');
        }

        _createClass(NzPaginationComponent, [{
          key: "validatePageIndex",
          value: function validatePageIndex(value, lastIndex) {
            if (value > lastIndex) {
              return lastIndex;
            } else if (value < 1) {
              return 1;
            } else {
              return value;
            }
          }
        }, {
          key: "onPageIndexChange",
          value: function onPageIndexChange(index) {
            var lastIndex = this.getLastIndex(this.nzTotal, this.nzPageSize);
            var validIndex = this.validatePageIndex(index, lastIndex);

            if (validIndex !== this.nzPageIndex && !this.nzDisabled) {
              this.nzPageIndex = validIndex;
              this.nzPageIndexChange.emit(this.nzPageIndex);
            }
          }
        }, {
          key: "onPageSizeChange",
          value: function onPageSizeChange(size) {
            this.nzPageSize = size;
            this.nzPageSizeChange.emit(size);
            var lastIndex = this.getLastIndex(this.nzTotal, this.nzPageSize);

            if (this.nzPageIndex > lastIndex) {
              this.onPageIndexChange(lastIndex);
            }
          }
        }, {
          key: "onTotalChange",
          value: function onTotalChange(total) {
            var _this3 = this;

            var lastIndex = this.getLastIndex(total, this.nzPageSize);

            if (this.nzPageIndex > lastIndex) {
              Promise.resolve().then(function () {
                return _this3.onPageIndexChange(lastIndex);
              });
            }
          }
        }, {
          key: "getLastIndex",
          value: function getLastIndex(total, pageSize) {
            return Math.ceil(total / pageSize);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            var _a;

            this.i18n.localeChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$)).subscribe(function () {
              _this4.locale = _this4.i18n.getLocaleData('Pagination');

              _this4.cdr.markForCheck();
            });
            this.total$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$)).subscribe(function (total) {
              _this4.onTotalChange(total);
            });
            this.breakpointService.subscribe(ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_4__["gridResponsiveMap"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$)).subscribe(function (bp) {
              if (_this4.nzResponsive) {
                _this4.size = bp === ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_4__["NzBreakpointEnum"].xs ? 'small' : 'default';

                _this4.cdr.markForCheck();
              }
            });
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$)).subscribe(function (direction) {
              _this4.dir = direction;

              _this4.cdr.detectChanges();
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
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var nzHideOnSinglePage = changes.nzHideOnSinglePage,
                nzTotal = changes.nzTotal,
                nzPageSize = changes.nzPageSize,
                nzSize = changes.nzSize;

            if (nzTotal) {
              this.total$.next(this.nzTotal);
            }

            if (nzHideOnSinglePage || nzTotal || nzPageSize) {
              this.showPagination = this.nzHideOnSinglePage && this.nzTotal > this.nzPageSize || this.nzTotal > 0 && !this.nzHideOnSinglePage;
            }

            if (nzSize) {
              this.size = nzSize.currentValue;
            }
          }
        }]);

        return NzPaginationComponent;
      }();

      NzPaginationComponent.ɵfac = function NzPaginationComponent_Factory(t) {
        return new (t || NzPaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_6__["NzI18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_4__["NzBreakpointService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]));
      };

      NzPaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: NzPaginationComponent,
        selectors: [["nz-pagination"]],
        hostVars: 8,
        hostBindings: function NzPaginationComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-pagination-simple", ctx.nzSimple)("ant-pagination-disabled", ctx.nzDisabled)("mini", !ctx.nzSimple && ctx.size === "small")("ant-pagination-rtl", ctx.dir === "rtl");
          }
        },
        inputs: {
          nzShowTotal: "nzShowTotal",
          nzItemRender: "nzItemRender",
          nzSize: "nzSize",
          nzPageSizeOptions: "nzPageSizeOptions",
          nzShowSizeChanger: "nzShowSizeChanger",
          nzShowQuickJumper: "nzShowQuickJumper",
          nzSimple: "nzSimple",
          nzDisabled: "nzDisabled",
          nzResponsive: "nzResponsive",
          nzHideOnSinglePage: "nzHideOnSinglePage",
          nzTotal: "nzTotal",
          nzPageIndex: "nzPageIndex",
          nzPageSize: "nzPageSize"
        },
        outputs: {
          nzPageSizeChange: "nzPageSizeChange",
          nzPageIndexChange: "nzPageIndexChange"
        },
        exportAs: ["nzPagination"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        decls: 5,
        vars: 18,
        consts: [[4, "ngIf"], [3, "disabled", "itemRender", "locale", "pageSize", "total", "pageIndex", "pageIndexChange"], ["simplePagination", ""], [3, "nzSize", "itemRender", "showTotal", "disabled", "locale", "showSizeChanger", "showQuickJumper", "total", "pageIndex", "pageSize", "pageSizeOptions", "pageIndexChange", "pageSizeChange"], ["defaultPagination", ""], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet"]],
        template: function NzPaginationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzPaginationComponent_ng_container_0_Template, 2, 2, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-pagination-simple", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pageIndexChange", function NzPaginationComponent_Template_nz_pagination_simple_pageIndexChange_1_listener($event) {
              return ctx.onPageIndexChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nz-pagination-default", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pageIndexChange", function NzPaginationComponent_Template_nz_pagination_default_pageIndexChange_3_listener($event) {
              return ctx.onPageIndexChange($event);
            })("pageSizeChange", function NzPaginationComponent_Template_nz_pagination_default_pageSizeChange_3_listener($event) {
              return ctx.onPageSizeChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showPagination);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.nzDisabled)("itemRender", ctx.nzItemRender)("locale", ctx.locale)("pageSize", ctx.nzPageSize)("total", ctx.nzTotal)("pageIndex", ctx.nzPageIndex);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSize", ctx.size)("itemRender", ctx.nzItemRender)("showTotal", ctx.nzShowTotal)("disabled", ctx.nzDisabled)("locale", ctx.locale)("showSizeChanger", ctx.nzShowSizeChanger)("showQuickJumper", ctx.nzShowQuickJumper)("total", ctx.nzTotal)("pageIndex", ctx.nzPageIndex)("pageSize", ctx.nzPageSize)("pageSizeOptions", ctx.nzPageSizeOptions);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], NzPaginationSimpleComponent, NzPaginationDefaultComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgTemplateOutlet"]];
        },
        encapsulation: 2,
        changeDetection: 0
      });

      NzPaginationComponent.ctorParameters = function () {
        return [{
          type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_6__["NzI18nService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_4__["NzBreakpointService"]
        }, {
          type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }];
      };

      NzPaginationComponent.propDecorators = {
        nzPageSizeChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzPageIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzShowTotal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzItemRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzPageSizeOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzShowSizeChanger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzShowQuickJumper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzSimple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzResponsive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzHideOnSinglePage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzTotal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzPageIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzPageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NzPaginationComponent.prototype, "nzSize", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], NzPaginationComponent.prototype, "nzPageSizeOptions", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzPaginationComponent.prototype, "nzShowSizeChanger", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzPaginationComponent.prototype, "nzShowQuickJumper", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzPaginationComponent.prototype, "nzSimple", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzPaginationComponent.prototype, "nzDisabled", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzPaginationComponent.prototype, "nzResponsive", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzPaginationComponent.prototype, "nzHideOnSinglePage", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputNumber"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzPaginationComponent.prototype, "nzTotal", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputNumber"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzPaginationComponent.prototype, "nzPageIndex", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputNumber"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzPaginationComponent.prototype, "nzPageSize", void 0);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzPaginationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'nz-pagination',
            exportAs: 'nzPagination',
            preserveWhitespaces: false,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <ng-container *ngIf=\"showPagination\">\n      <ng-container *ngIf=\"nzSimple; else defaultPagination.template\">\n        <ng-template [ngTemplateOutlet]=\"simplePagination.template\"></ng-template>\n      </ng-container>\n    </ng-container>\n    <nz-pagination-simple\n      #simplePagination\n      [disabled]=\"nzDisabled\"\n      [itemRender]=\"nzItemRender\"\n      [locale]=\"locale\"\n      [pageSize]=\"nzPageSize\"\n      [total]=\"nzTotal\"\n      [pageIndex]=\"nzPageIndex\"\n      (pageIndexChange)=\"onPageIndexChange($event)\"\n    ></nz-pagination-simple>\n    <nz-pagination-default\n      #defaultPagination\n      [nzSize]=\"size\"\n      [itemRender]=\"nzItemRender\"\n      [showTotal]=\"nzShowTotal\"\n      [disabled]=\"nzDisabled\"\n      [locale]=\"locale\"\n      [showSizeChanger]=\"nzShowSizeChanger\"\n      [showQuickJumper]=\"nzShowQuickJumper\"\n      [total]=\"nzTotal\"\n      [pageIndex]=\"nzPageIndex\"\n      [pageSize]=\"nzPageSize\"\n      [pageSizeOptions]=\"nzPageSizeOptions\"\n      (pageIndexChange)=\"onPageIndexChange($event)\"\n      (pageSizeChange)=\"onPageSizeChange($event)\"\n    ></nz-pagination-default>\n  ",
            host: {
              '[class.ant-pagination-simple]': 'nzSimple',
              '[class.ant-pagination-disabled]': 'nzDisabled',
              '[class.mini]': "!nzSimple && size === 'small'",
              '[class.ant-pagination-rtl]': "dir === 'rtl'"
            }
          }]
        }], function () {
          return [{
            type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_6__["NzI18nService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_4__["NzBreakpointService"]
          }, {
            type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }];
        }, {
          nzPageSizeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          nzPageIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          nzShowTotal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzItemRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzPageSizeOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzShowSizeChanger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzShowQuickJumper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzSimple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzResponsive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzHideOnSinglePage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzTotal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzPageIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          nzPageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzPaginationDefaultComponent = /*#__PURE__*/function () {
        function NzPaginationDefaultComponent(cdr, renderer, elementRef, directionality) {
          _classCallCheck(this, NzPaginationDefaultComponent);

          this.cdr = cdr;
          this.renderer = renderer;
          this.elementRef = elementRef;
          this.directionality = directionality;
          this.nzSize = 'default';
          this.itemRender = null;
          this.showTotal = null;
          this.disabled = false;
          this.showSizeChanger = false;
          this.showQuickJumper = false;
          this.total = 0;
          this.pageIndex = 1;
          this.pageSize = 10;
          this.pageSizeOptions = [10, 20, 30, 40];
          this.pageIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.pageSizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.ranges = [0, 0];
          this.listOfPageItem = [];
          this.dir = 'ltr';
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          renderer.removeChild(renderer.parentNode(elementRef.nativeElement), elementRef.nativeElement);
        }

        _createClass(NzPaginationDefaultComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            var _a;

            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$)).subscribe(function (direction) {
              _this5.dir = direction;

              _this5.updateRtlStyle();

              _this5.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
            this.updateRtlStyle();
          }
        }, {
          key: "updateRtlStyle",
          value: function updateRtlStyle() {
            if (this.dir === 'rtl') {
              this.renderer.addClass(this.elementRef.nativeElement, 'ant-pagination-rtl');
            } else {
              this.renderer.removeClass(this.elementRef.nativeElement, 'ant-pagination-rtl');
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }, {
          key: "jumpPage",
          value: function jumpPage(index) {
            this.onPageIndexChange(index);
          }
        }, {
          key: "jumpDiff",
          value: function jumpDiff(diff) {
            this.jumpPage(this.pageIndex + diff);
          }
        }, {
          key: "trackByPageItem",
          value: function trackByPageItem(_, value) {
            return "".concat(value.type, "-").concat(value.index);
          }
        }, {
          key: "onPageIndexChange",
          value: function onPageIndexChange(index) {
            this.pageIndexChange.next(index);
          }
        }, {
          key: "onPageSizeChange",
          value: function onPageSizeChange(size) {
            this.pageSizeChange.next(size);
          }
        }, {
          key: "getLastIndex",
          value: function getLastIndex(total, pageSize) {
            return Math.ceil(total / pageSize);
          }
        }, {
          key: "buildIndexes",
          value: function buildIndexes() {
            var lastIndex = this.getLastIndex(this.total, this.pageSize);
            this.listOfPageItem = this.getListOfPageItem(this.pageIndex, lastIndex);
          }
        }, {
          key: "getListOfPageItem",
          value: function getListOfPageItem(pageIndex, lastIndex) {
            var concatWithPrevNext = function concatWithPrevNext(listOfPage) {
              var prevItem = {
                type: 'prev',
                disabled: pageIndex === 1
              };
              var nextItem = {
                type: 'next',
                disabled: pageIndex === lastIndex
              };
              return [prevItem].concat(_toConsumableArray(listOfPage), [nextItem]);
            };

            var generatePage = function generatePage(start, end) {
              var list = [];

              for (var i = start; i <= end; i++) {
                list.push({
                  index: i,
                  type: 'page'
                });
              }

              return list;
            };

            if (lastIndex <= 9) {
              return concatWithPrevNext(generatePage(1, lastIndex));
            } else {
              var generateRangeItem = function generateRangeItem(selected, last) {
                var listOfRange = [];
                var prevFiveItem = {
                  type: 'prev_5'
                };
                var nextFiveItem = {
                  type: 'next_5'
                };
                var firstPageItem = generatePage(1, 1);
                var lastPageItem = generatePage(lastIndex, lastIndex);

                if (selected < 4) {
                  listOfRange = [].concat(_toConsumableArray(generatePage(2, 5)), [nextFiveItem]);
                } else if (selected < last - 3) {
                  listOfRange = [prevFiveItem].concat(_toConsumableArray(generatePage(selected - 2, selected + 2)), [nextFiveItem]);
                } else {
                  listOfRange = [prevFiveItem].concat(_toConsumableArray(generatePage(last - 4, last - 1)));
                }

                return [].concat(_toConsumableArray(firstPageItem), _toConsumableArray(listOfRange), _toConsumableArray(lastPageItem));
              };

              return concatWithPrevNext(generateRangeItem(pageIndex, lastIndex));
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var pageIndex = changes.pageIndex,
                pageSize = changes.pageSize,
                total = changes.total;

            if (pageIndex || pageSize || total) {
              this.ranges = [(this.pageIndex - 1) * this.pageSize + 1, Math.min(this.pageIndex * this.pageSize, this.total)];
              this.buildIndexes();
            }
          }
        }]);

        return NzPaginationDefaultComponent;
      }();

      NzPaginationDefaultComponent.ɵfac = function NzPaginationDefaultComponent_Factory(t) {
        return new (t || NzPaginationDefaultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], 8));
      };

      NzPaginationDefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: NzPaginationDefaultComponent,
        selectors: [["nz-pagination-default"]],
        viewQuery: function NzPaginationDefaultComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
          }
        },
        inputs: {
          nzSize: "nzSize",
          itemRender: "itemRender",
          showTotal: "showTotal",
          disabled: "disabled",
          showSizeChanger: "showSizeChanger",
          showQuickJumper: "showQuickJumper",
          total: "total",
          pageIndex: "pageIndex",
          pageSize: "pageSize",
          pageSizeOptions: "pageSizeOptions",
          locale: "locale"
        },
        outputs: {
          pageIndexChange: "pageIndexChange",
          pageSizeChange: "pageSizeChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        decls: 2,
        vars: 0,
        consts: [["containerTemplate", ""], ["class", "ant-pagination-total-text", 4, "ngIf"], ["nz-pagination-item", "", 3, "locale", "type", "index", "disabled", "itemRender", "active", "direction", "gotoIndex", "diffIndex", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-pagination-options", "", 3, "total", "locale", "disabled", "nzSize", "showSizeChanger", "showQuickJumper", "pageIndex", "pageSize", "pageSizeOptions", "pageIndexChange", "pageSizeChange", 4, "ngIf"], [1, "ant-pagination-total-text"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nz-pagination-item", "", 3, "locale", "type", "index", "disabled", "itemRender", "active", "direction", "gotoIndex", "diffIndex"], ["nz-pagination-options", "", 3, "total", "locale", "disabled", "nzSize", "showSizeChanger", "showQuickJumper", "pageIndex", "pageSize", "pageSizeOptions", "pageIndexChange", "pageSizeChange"]],
        template: function NzPaginationDefaultComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzPaginationDefaultComponent_ng_template_0_Template, 3, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgTemplateOutlet"], NzPaginationItemComponent, NzPaginationOptionsComponent];
        },
        encapsulation: 2,
        changeDetection: 0
      });

      NzPaginationDefaultComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }];
      };

      NzPaginationDefaultComponent.propDecorators = {
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['containerTemplate', {
            "static": true
          }]
        }],
        nzSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        itemRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        showTotal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        showSizeChanger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        showQuickJumper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        total: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        pageIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        pageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        pageSizeOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        pageIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        pageSizeChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzPaginationDefaultComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'nz-pagination-default',
            preserveWhitespaces: false,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <ng-template #containerTemplate>\n      <li class=\"ant-pagination-total-text\" *ngIf=\"showTotal\">\n        <ng-template [ngTemplateOutlet]=\"showTotal\" [ngTemplateOutletContext]=\"{ $implicit: total, range: ranges }\"></ng-template>\n      </li>\n      <li\n        *ngFor=\"let page of listOfPageItem; trackBy: trackByPageItem\"\n        nz-pagination-item\n        [locale]=\"locale\"\n        [type]=\"page.type\"\n        [index]=\"page.index\"\n        [disabled]=\"!!page.disabled\"\n        [itemRender]=\"itemRender\"\n        [active]=\"pageIndex === page.index\"\n        (gotoIndex)=\"jumpPage($event)\"\n        (diffIndex)=\"jumpDiff($event)\"\n        [direction]=\"dir\"\n      ></li>\n      <div\n        nz-pagination-options\n        *ngIf=\"showQuickJumper || showSizeChanger\"\n        [total]=\"total\"\n        [locale]=\"locale\"\n        [disabled]=\"disabled\"\n        [nzSize]=\"nzSize\"\n        [showSizeChanger]=\"showSizeChanger\"\n        [showQuickJumper]=\"showQuickJumper\"\n        [pageIndex]=\"pageIndex\"\n        [pageSize]=\"pageSize\"\n        [pageSizeOptions]=\"pageSizeOptions\"\n        (pageIndexChange)=\"onPageIndexChange($event)\"\n        (pageSizeChange)=\"onPageSizeChange($event)\"\n      ></div>\n    </ng-template>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }];
        }, {
          nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          itemRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          showTotal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          showSizeChanger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          showQuickJumper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          total: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          pageIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          pageSizeOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          pageIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          pageSizeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['containerTemplate', {
              "static": true
            }]
          }],
          locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzPaginationItemComponent = /*#__PURE__*/function () {
        function NzPaginationItemComponent() {
          _classCallCheck(this, NzPaginationItemComponent);

          this.active = false;
          this.index = null;
          this.disabled = false;
          this.direction = 'ltr';
          this.type = null;
          this.itemRender = null;
          this.diffIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.gotoIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.title = null;
        }

        _createClass(NzPaginationItemComponent, [{
          key: "clickItem",
          value: function clickItem() {
            if (!this.disabled) {
              if (this.type === 'page') {
                this.gotoIndex.emit(this.index);
              } else {
                this.diffIndex.emit({
                  next: 1,
                  prev: -1,
                  prev_5: -5,
                  next_5: 5
                }[this.type]);
              }
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _a, _b, _c, _d;

            var locale = changes.locale,
                index = changes.index,
                type = changes.type;

            if (locale || index || type) {
              this.title = {
                page: "".concat(this.index),
                next: (_a = this.locale) === null || _a === void 0 ? void 0 : _a.next_page,
                prev: (_b = this.locale) === null || _b === void 0 ? void 0 : _b.prev_page,
                prev_5: (_c = this.locale) === null || _c === void 0 ? void 0 : _c.prev_5,
                next_5: (_d = this.locale) === null || _d === void 0 ? void 0 : _d.next_5
              }[this.type];
            }
          }
        }]);

        return NzPaginationItemComponent;
      }();

      NzPaginationItemComponent.ɵfac = function NzPaginationItemComponent_Factory(t) {
        return new (t || NzPaginationItemComponent)();
      };

      NzPaginationItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: NzPaginationItemComponent,
        selectors: [["li", "nz-pagination-item", ""]],
        hostVars: 19,
        hostBindings: function NzPaginationItemComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzPaginationItemComponent_click_HostBindingHandler() {
              return ctx.clickItem();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("title", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-pagination-prev", ctx.type === "prev")("ant-pagination-next", ctx.type === "next")("ant-pagination-item", ctx.type === "page")("ant-pagination-jump-prev", ctx.type === "prev_5")("ant-pagination-jump-prev-custom-icon", ctx.type === "prev_5")("ant-pagination-jump-next", ctx.type === "next_5")("ant-pagination-jump-next-custom-icon", ctx.type === "next_5")("ant-pagination-disabled", ctx.disabled)("ant-pagination-item-active", ctx.active);
          }
        },
        inputs: {
          active: "active",
          index: "index",
          disabled: "disabled",
          direction: "direction",
          type: "type",
          itemRender: "itemRender",
          locale: "locale"
        },
        outputs: {
          diffIndex: "diffIndex",
          gotoIndex: "gotoIndex"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        attrs: _c2,
        decls: 3,
        vars: 5,
        consts: [["renderItemTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "ant-pagination-item-link", 3, "disabled", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "ant-pagination-item-link", 3, "disabled"], ["nz-icon", "", "nzType", "right", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "left", 4, "ngSwitchDefault"], ["nz-icon", "", "nzType", "right"], ["nz-icon", "", "nzType", "left"], ["nz-icon", "", "nzType", "left", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "right", 4, "ngSwitchDefault"], [1, "ant-pagination-item-link", 3, "ngSwitch"], ["class", "ant-pagination-item-container", 4, "ngSwitchDefault"], [1, "ant-pagination-item-container"], [3, "ngSwitch", 4, "ngSwitchCase"], [1, "ant-pagination-item-ellipsis"], ["nz-icon", "", "nzType", "double-right", "class", "ant-pagination-item-link-icon", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "double-left", "class", "ant-pagination-item-link-icon", 4, "ngSwitchDefault"], ["nz-icon", "", "nzType", "double-right", 1, "ant-pagination-item-link-icon"], ["nz-icon", "", "nzType", "double-left", 1, "ant-pagination-item-link-icon"], ["nz-icon", "", "nzType", "double-left", "class", "ant-pagination-item-link-icon", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "double-right", "class", "ant-pagination-item-link-icon", 4, "ngSwitchDefault"]],
        template: function NzPaginationItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzPaginationItemComponent_ng_template_0_Template, 5, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzPaginationItemComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.itemRender || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c3, ctx.type, ctx.index));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchDefault"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconDirective"]],
        encapsulation: 2,
        changeDetection: 0
      });
      NzPaginationItemComponent.propDecorators = {
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        direction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        itemRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        diffIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        gotoIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzPaginationItemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'li[nz-pagination-item]',
            preserveWhitespaces: false,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <ng-template #renderItemTemplate let-type let-page=\"page\">\n      <ng-container [ngSwitch]=\"type\">\n        <a *ngSwitchCase=\"'page'\">{{ page }}</a>\n        <button [disabled]=\"disabled\" class=\"ant-pagination-item-link\" *ngSwitchCase=\"'prev'\">\n          <ng-container [ngSwitch]=\"direction\">\n            <i *ngSwitchCase=\"'rtl'\" nz-icon nzType=\"right\"></i>\n            <i *ngSwitchDefault nz-icon nzType=\"left\"></i>\n          </ng-container>\n        </button>\n        <button [disabled]=\"disabled\" class=\"ant-pagination-item-link\" *ngSwitchCase=\"'next'\">\n          <ng-container [ngSwitch]=\"direction\">\n            <i *ngSwitchCase=\"'rtl'\" nz-icon nzType=\"left\"></i>\n            <i *ngSwitchDefault nz-icon nzType=\"right\"></i>\n          </ng-container>\n        </button>\n        <ng-container *ngSwitchDefault>\n          <a class=\"ant-pagination-item-link\" [ngSwitch]=\"type\">\n            <div class=\"ant-pagination-item-container\" *ngSwitchDefault>\n              <ng-container [ngSwitch]=\"type\">\n                <ng-container *ngSwitchCase=\"'prev_5'\" [ngSwitch]=\"direction\">\n                  <i *ngSwitchCase=\"'rtl'\" nz-icon nzType=\"double-right\" class=\"ant-pagination-item-link-icon\"></i>\n                  <i *ngSwitchDefault nz-icon nzType=\"double-left\" class=\"ant-pagination-item-link-icon\"></i>\n                </ng-container>\n                <ng-container *ngSwitchCase=\"'next_5'\" [ngSwitch]=\"direction\">\n                  <i *ngSwitchCase=\"'rtl'\" nz-icon nzType=\"double-left\" class=\"ant-pagination-item-link-icon\"></i>\n                  <i *ngSwitchDefault nz-icon nzType=\"double-right\" class=\"ant-pagination-item-link-icon\"></i>\n                </ng-container>\n              </ng-container>\n              <span class=\"ant-pagination-item-ellipsis\">\u2022\u2022\u2022</span>\n            </div>\n          </a>\n        </ng-container>\n      </ng-container>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"itemRender || renderItemTemplate\"\n      [ngTemplateOutletContext]=\"{ $implicit: type, page: index }\"\n    ></ng-template>\n  ",
            host: {
              '[class.ant-pagination-prev]': "type === 'prev'",
              '[class.ant-pagination-next]': "type === 'next'",
              '[class.ant-pagination-item]': "type === 'page'",
              '[class.ant-pagination-jump-prev]': "type === 'prev_5'",
              '[class.ant-pagination-jump-prev-custom-icon]': "type === 'prev_5'",
              '[class.ant-pagination-jump-next]': "type === 'next_5'",
              '[class.ant-pagination-jump-next-custom-icon]': "type === 'next_5'",
              '[class.ant-pagination-disabled]': 'disabled',
              '[class.ant-pagination-item-active]': 'active',
              '[attr.title]': 'title',
              '(click)': 'clickItem()'
            }
          }]
        }], function () {
          return [];
        }, {
          active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          itemRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          diffIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          gotoIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzPaginationOptionsComponent = /*#__PURE__*/function () {
        function NzPaginationOptionsComponent(elementRef) {
          _classCallCheck(this, NzPaginationOptionsComponent);

          this.elementRef = elementRef;
          this.nzSize = 'default';
          this.disabled = false;
          this.showSizeChanger = false;
          this.showQuickJumper = false;
          this.total = 0;
          this.pageIndex = 1;
          this.pageSize = 10;
          this.pageSizeOptions = [];
          this.pageIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.pageSizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.listOfPageSizeOption = []; // TODO: move to host after View Engine deprecation

          this.elementRef.nativeElement.classList.add('ant-pagination-options');
        }

        _createClass(NzPaginationOptionsComponent, [{
          key: "onPageSizeChange",
          value: function onPageSizeChange(size) {
            if (this.pageSize !== size) {
              this.pageSizeChange.next(size);
            }
          }
        }, {
          key: "jumpToPageViaInput",
          value: function jumpToPageViaInput($event) {
            var target = $event.target;
            var index = Math.floor(Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["toNumber"])(target.value, this.pageIndex));
            this.pageIndexChange.next(index);
            target.value = '';
          }
        }, {
          key: "trackByOption",
          value: function trackByOption(_, option) {
            return option.value;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this6 = this;

            var pageSize = changes.pageSize,
                pageSizeOptions = changes.pageSizeOptions,
                locale = changes.locale;

            if (pageSize || pageSizeOptions || locale) {
              this.listOfPageSizeOption = _toConsumableArray(new Set([].concat(_toConsumableArray(this.pageSizeOptions), [this.pageSize]))).map(function (item) {
                return {
                  value: item,
                  label: "".concat(item, " ").concat(_this6.locale.items_per_page)
                };
              });
            }
          }
        }]);

        return NzPaginationOptionsComponent;
      }();

      NzPaginationOptionsComponent.ɵfac = function NzPaginationOptionsComponent_Factory(t) {
        return new (t || NzPaginationOptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]));
      };

      NzPaginationOptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: NzPaginationOptionsComponent,
        selectors: [["div", "nz-pagination-options", ""]],
        inputs: {
          nzSize: "nzSize",
          disabled: "disabled",
          showSizeChanger: "showSizeChanger",
          showQuickJumper: "showQuickJumper",
          total: "total",
          pageIndex: "pageIndex",
          pageSize: "pageSize",
          pageSizeOptions: "pageSizeOptions",
          locale: "locale"
        },
        outputs: {
          pageIndexChange: "pageIndexChange",
          pageSizeChange: "pageSizeChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        attrs: _c4,
        decls: 2,
        vars: 2,
        consts: [["class", "ant-pagination-options-size-changer", 3, "nzDisabled", "nzSize", "ngModel", "ngModelChange", 4, "ngIf"], ["class", "ant-pagination-options-quick-jumper", 4, "ngIf"], [1, "ant-pagination-options-size-changer", 3, "nzDisabled", "nzSize", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "nzLabel", "nzValue"], [1, "ant-pagination-options-quick-jumper"], [3, "disabled", "keydown.enter"]],
        template: function NzPaginationOptionsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzPaginationOptionsComponent_nz_select_0_Template, 2, 5, "nz-select", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzPaginationOptionsComponent_div_1_Template, 4, 3, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showSizeChanger);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showQuickJumper);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzOptionComponent"]],
        encapsulation: 2,
        changeDetection: 0
      });

      NzPaginationOptionsComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }];
      };

      NzPaginationOptionsComponent.propDecorators = {
        nzSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        showSizeChanger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        showQuickJumper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        total: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        pageIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        pageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        pageSizeOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        pageIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        pageSizeChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzPaginationOptionsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'div[nz-pagination-options]',
            preserveWhitespaces: false,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <nz-select\n      class=\"ant-pagination-options-size-changer\"\n      *ngIf=\"showSizeChanger\"\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"nzSize\"\n      [ngModel]=\"pageSize\"\n      (ngModelChange)=\"onPageSizeChange($event)\"\n    >\n      <nz-option\n        *ngFor=\"let option of listOfPageSizeOption; trackBy: trackByOption\"\n        [nzLabel]=\"option.label\"\n        [nzValue]=\"option.value\"\n      ></nz-option>\n    </nz-select>\n    <div class=\"ant-pagination-options-quick-jumper\" *ngIf=\"showQuickJumper\">\n      {{ locale.jump_to }}\n      <input [disabled]=\"disabled\" (keydown.enter)=\"jumpToPageViaInput($event)\" />\n      {{ locale.page }}\n    </div>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }];
        }, {
          nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          showSizeChanger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          showQuickJumper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          total: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          pageIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          pageSizeOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          pageIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          pageSizeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzPaginationSimpleComponent = /*#__PURE__*/function () {
        function NzPaginationSimpleComponent(cdr, renderer, elementRef, directionality) {
          _classCallCheck(this, NzPaginationSimpleComponent);

          this.cdr = cdr;
          this.renderer = renderer;
          this.elementRef = elementRef;
          this.directionality = directionality;
          this.itemRender = null;
          this.disabled = false;
          this.total = 0;
          this.pageIndex = 1;
          this.pageSize = 10;
          this.pageIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.lastIndex = 0;
          this.isFirstIndex = false;
          this.isLastIndex = false;
          this.dir = 'ltr';
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          renderer.removeChild(renderer.parentNode(elementRef.nativeElement), elementRef.nativeElement);
        }

        _createClass(NzPaginationSimpleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            var _a;

            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$)).subscribe(function (direction) {
              _this7.dir = direction;

              _this7.updateRtlStyle();

              _this7.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
            this.updateRtlStyle();
          }
        }, {
          key: "updateRtlStyle",
          value: function updateRtlStyle() {
            if (this.dir === 'rtl') {
              this.renderer.addClass(this.elementRef.nativeElement, 'ant-pagination-rtl');
            } else {
              this.renderer.removeClass(this.elementRef.nativeElement, 'ant-pagination-rtl');
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }, {
          key: "jumpToPageViaInput",
          value: function jumpToPageViaInput($event) {
            var target = $event.target;
            var index = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["toNumber"])(target.value, this.pageIndex);
            this.onPageIndexChange(index);
            target.value = "".concat(this.pageIndex);
          }
        }, {
          key: "prePage",
          value: function prePage() {
            this.onPageIndexChange(this.pageIndex - 1);
          }
        }, {
          key: "nextPage",
          value: function nextPage() {
            this.onPageIndexChange(this.pageIndex + 1);
          }
        }, {
          key: "onPageIndexChange",
          value: function onPageIndexChange(index) {
            this.pageIndexChange.next(index);
          }
        }, {
          key: "updateBindingValue",
          value: function updateBindingValue() {
            this.lastIndex = Math.ceil(this.total / this.pageSize);
            this.isFirstIndex = this.pageIndex === 1;
            this.isLastIndex = this.pageIndex === this.lastIndex;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var pageIndex = changes.pageIndex,
                total = changes.total,
                pageSize = changes.pageSize;

            if (pageIndex || total || pageSize) {
              this.updateBindingValue();
            }
          }
        }]);

        return NzPaginationSimpleComponent;
      }();

      NzPaginationSimpleComponent.ɵfac = function NzPaginationSimpleComponent_Factory(t) {
        return new (t || NzPaginationSimpleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], 8));
      };

      NzPaginationSimpleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: NzPaginationSimpleComponent,
        selectors: [["nz-pagination-simple"]],
        viewQuery: function NzPaginationSimpleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
          }
        },
        inputs: {
          itemRender: "itemRender",
          disabled: "disabled",
          total: "total",
          pageIndex: "pageIndex",
          pageSize: "pageSize",
          locale: "locale"
        },
        outputs: {
          pageIndexChange: "pageIndexChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        decls: 2,
        vars: 0,
        consts: [["containerTemplate", ""], ["nz-pagination-item", "", "type", "prev", 3, "disabled", "direction", "itemRender", "click"], [1, "ant-pagination-simple-pager"], ["size", "3", 3, "disabled", "value", "keydown.enter"], [1, "ant-pagination-slash"], ["nz-pagination-item", "", "type", "next", 3, "disabled", "direction", "itemRender", "click"]],
        template: function NzPaginationSimpleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzPaginationSimpleComponent_ng_template_0_Template, 7, 12, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          }
        },
        directives: [NzPaginationItemComponent],
        encapsulation: 2,
        changeDetection: 0
      });

      NzPaginationSimpleComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }];
      };

      NzPaginationSimpleComponent.propDecorators = {
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['containerTemplate', {
            "static": true
          }]
        }],
        itemRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        total: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        pageIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        pageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        pageIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzPaginationSimpleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'nz-pagination-simple',
            preserveWhitespaces: false,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <ng-template #containerTemplate>\n      <li\n        nz-pagination-item\n        [attr.title]=\"locale.prev_page\"\n        [disabled]=\"isFirstIndex\"\n        [direction]=\"dir\"\n        (click)=\"prePage()\"\n        type=\"prev\"\n        [itemRender]=\"itemRender\"\n      ></li>\n      <li [attr.title]=\"pageIndex + '/' + lastIndex\" class=\"ant-pagination-simple-pager\">\n        <input [disabled]=\"disabled\" [value]=\"pageIndex\" (keydown.enter)=\"jumpToPageViaInput($event)\" size=\"3\" />\n        <span class=\"ant-pagination-slash\">/</span>\n        {{ lastIndex }}\n      </li>\n      <li\n        nz-pagination-item\n        [attr.title]=\"locale?.next_page\"\n        [disabled]=\"isLastIndex\"\n        [direction]=\"dir\"\n        (click)=\"nextPage()\"\n        type=\"next\"\n        [itemRender]=\"itemRender\"\n      ></li>\n    </ng-template>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }];
        }, {
          itemRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          total: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          pageIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          pageIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['containerTemplate', {
              "static": true
            }]
          }],
          locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzPaginationModule = /*#__PURE__*/_createClass(function NzPaginationModule() {
        _classCallCheck(this, NzPaginationModule);
      });

      NzPaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: NzPaginationModule
      });
      NzPaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function NzPaginationModule_Factory(t) {
          return new (t || NzPaginationModule)();
        },
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzSelectModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_6__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzPaginationModule, {
          declarations: function declarations() {
            return [NzPaginationComponent, NzPaginationSimpleComponent, NzPaginationOptionsComponent, NzPaginationItemComponent, NzPaginationDefaultComponent];
          },
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzSelectModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_6__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconModule"]];
          },
          exports: function exports() {
            return [NzPaginationComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzPaginationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [NzPaginationComponent, NzPaginationSimpleComponent, NzPaginationOptionsComponent, NzPaginationItemComponent, NzPaginationDefaultComponent],
            exports: [NzPaginationComponent],
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzSelectModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_6__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconModule"]]
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
      //# sourceMappingURL=ng-zorro-antd-pagination.js.map

      /***/

    },

    /***/
    "JA5x":
    /*!********************************************************************************!*\
      !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-card.js ***!
      \********************************************************************************/

    /*! exports provided: NzCardComponent, NzCardGridDirective, NzCardLoadingComponent, NzCardMetaComponent, NzCardModule, NzCardTabComponent */

    /***/
    function JA5x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzCardComponent", function () {
        return NzCardComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzCardGridDirective", function () {
        return NzCardGridDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzCardLoadingComponent", function () {
        return NzCardLoadingComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzCardMetaComponent", function () {
        return NzCardMetaComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzCardModule", function () {
        return NzCardModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzCardTabComponent", function () {
        return NzCardTabComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-zorro-antd/core/util */
      "/KA4");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/core/config */
      "2Suw");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/core/outlet */
      "pdGh");
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      function NzCardTabComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      }

      var _c0 = ["*"];

      function NzCardComponent_div_0_div_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.nzTitle);
        }
      }

      function NzCardComponent_div_0_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCardComponent_div_0_div_2_ng_container_1_Template, 2, 1, "ng-container", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r6.nzTitle);
        }
      }

      function NzCardComponent_div_0_div_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.nzExtra);
        }
      }

      function NzCardComponent_div_0_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCardComponent_div_0_div_3_ng_container_1_Template, 2, 1, "ng-container", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r7.nzExtra);
        }
      }

      function NzCardComponent_div_0_ng_container_4_ng_template_1_Template(rf, ctx) {}

      function NzCardComponent_div_0_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCardComponent_div_0_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r8.listOfNzCardTabComponent.template);
        }
      }

      function NzCardComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzCardComponent_div_0_div_2_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NzCardComponent_div_0_div_3_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NzCardComponent_div_0_ng_container_4_Template, 2, 1, "ng-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.nzTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.nzExtra);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.listOfNzCardTabComponent);
        }
      }

      function NzCardComponent_div_1_ng_template_1_Template(rf, ctx) {}

      function NzCardComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCardComponent_div_1_ng_template_1_Template, 0, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.nzCover);
        }
      }

      function NzCardComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }
      }

      function NzCardComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-card-loading");
        }
      }

      function NzCardComponent_ul_6_li_1_ng_template_2_Template(rf, ctx) {}

      function NzCardComponent_ul_6_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzCardComponent_ul_6_li_1_ng_template_2_Template, 0, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var action_r14 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", 100 / ctx_r13.nzActions.length, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", action_r14);
        }
      }

      function NzCardComponent_ul_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCardComponent_ul_6_li_1_Template, 3, 3, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.nzActions);
        }
      }

      function NzCardLoadingComponent_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var className_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", className_r3);
        }
      }

      function NzCardLoadingComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCardLoadingComponent_div_1_div_1_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var listOfClassName_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", listOfClassName_r1);
        }
      }

      function NzCardMetaComponent_div_0_ng_template_1_Template(rf, ctx) {}

      function NzCardMetaComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCardMetaComponent_div_0_ng_template_1_Template, 0, 0, "ng-template", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.nzAvatar);
        }
      }

      function NzCardMetaComponent_div_1_div_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.nzTitle);
        }
      }

      function NzCardMetaComponent_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCardMetaComponent_div_1_div_1_ng_container_1_Template, 2, 1, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r3.nzTitle);
        }
      }

      function NzCardMetaComponent_div_1_div_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.nzDescription);
        }
      }

      function NzCardMetaComponent_div_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCardMetaComponent_div_1_div_2_ng_container_1_Template, 2, 1, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r4.nzDescription);
        }
      }

      function NzCardMetaComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCardMetaComponent_div_1_div_1_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzCardMetaComponent_div_1_div_2_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.nzTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.nzDescription);
        }
      }

      var NzCardGridDirective = /*#__PURE__*/_createClass(function NzCardGridDirective(elementRef) {
        _classCallCheck(this, NzCardGridDirective);

        this.elementRef = elementRef;
        this.nzHoverable = true; // TODO: move to host after View Engine deprecation

        this.elementRef.nativeElement.classList.add('ant-card-grid');
      });

      NzCardGridDirective.ɵfac = function NzCardGridDirective_Factory(t) {
        return new (t || NzCardGridDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
      };

      NzCardGridDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: NzCardGridDirective,
        selectors: [["", "nz-card-grid", ""]],
        hostVars: 2,
        hostBindings: function NzCardGridDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-card-hoverable", ctx.nzHoverable);
          }
        },
        inputs: {
          nzHoverable: "nzHoverable"
        },
        exportAs: ["nzCardGrid"]
      });

      NzCardGridDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };

      NzCardGridDirective.propDecorators = {
        nzHoverable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzCardGridDirective.prototype, "nzHoverable", void 0);
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var NzCardTabComponent = /*#__PURE__*/_createClass(function NzCardTabComponent() {
        _classCallCheck(this, NzCardTabComponent);
      });

      NzCardTabComponent.ɵfac = function NzCardTabComponent_Factory(t) {
        return new (t || NzCardTabComponent)();
      };

      NzCardTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: NzCardTabComponent,
        selectors: [["nz-card-tab"]],
        viewQuery: function NzCardTabComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
          }
        },
        exportAs: ["nzCardTab"],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function NzCardTabComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzCardTabComponent_ng_template_0_Template, 1, 0, "ng-template");
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });
      NzCardTabComponent.propDecorators = {
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], {
            "static": true
          }]
        }]
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var NZ_CONFIG_MODULE_NAME = 'card';

      var NzCardComponent = /*#__PURE__*/function () {
        function NzCardComponent(nzConfigService, cdr, elementRef, directionality) {
          var _this8 = this;

          _classCallCheck(this, NzCardComponent);

          this.nzConfigService = nzConfigService;
          this.cdr = cdr;
          this.elementRef = elementRef;
          this.directionality = directionality;
          this._nzModuleName = NZ_CONFIG_MODULE_NAME;
          this.nzBordered = true;
          this.nzBorderless = false;
          this.nzLoading = false;
          this.nzHoverable = false;
          this.nzBodyStyle = null;
          this.nzActions = [];
          this.nzType = null;
          this.nzSize = 'default';
          this.dir = 'ltr';
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"](); // TODO: move to host after View Engine deprecation

          this.elementRef.nativeElement.classList.add('ant-card');
          this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe(function () {
            _this8.cdr.markForCheck();
          });
        }

        _createClass(NzCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            var _a;

            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe(function (direction) {
              _this9.dir = direction;

              _this9.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }]);

        return NzCardComponent;
      }();

      NzCardComponent.ɵfac = function NzCardComponent_Factory(t) {
        return new (t || NzCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], 8));
      };

      NzCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: NzCardComponent,
        selectors: [["nz-card"]],
        contentQueries: function NzCardComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NzCardTabComponent, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NzCardGridDirective, false);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.listOfNzCardTabComponent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.listOfNzCardGridDirective = _t);
          }
        },
        hostVars: 16,
        hostBindings: function NzCardComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-card-loading", ctx.nzLoading)("ant-card-bordered", ctx.nzBorderless === false && ctx.nzBordered)("ant-card-hoverable", ctx.nzHoverable)("ant-card-small", ctx.nzSize === "small")("ant-card-contain-grid", ctx.listOfNzCardGridDirective && ctx.listOfNzCardGridDirective.length)("ant-card-type-inner", ctx.nzType === "inner")("ant-card-contain-tabs", !!ctx.listOfNzCardTabComponent)("ant-card-rtl", ctx.dir === "rtl");
          }
        },
        inputs: {
          nzBordered: "nzBordered",
          nzBorderless: "nzBorderless",
          nzLoading: "nzLoading",
          nzHoverable: "nzHoverable",
          nzBodyStyle: "nzBodyStyle",
          nzActions: "nzActions",
          nzType: "nzType",
          nzSize: "nzSize",
          nzCover: "nzCover",
          nzTitle: "nzTitle",
          nzExtra: "nzExtra"
        },
        exportAs: ["nzCard"],
        ngContentSelectors: _c0,
        decls: 7,
        vars: 6,
        consts: [["class", "ant-card-head", 4, "ngIf"], ["class", "ant-card-cover", 4, "ngIf"], [1, "ant-card-body", 3, "ngStyle"], [4, "ngIf", "ngIfElse"], ["loadingTemplate", ""], ["class", "ant-card-actions", 4, "ngIf"], [1, "ant-card-head"], [1, "ant-card-head-wrapper"], ["class", "ant-card-head-title", 4, "ngIf"], ["class", "ant-card-extra", 4, "ngIf"], [4, "ngIf"], [1, "ant-card-head-title"], [4, "nzStringTemplateOutlet"], [1, "ant-card-extra"], [3, "ngTemplateOutlet"], [1, "ant-card-cover"], [1, "ant-card-actions"], [3, "width", 4, "ngFor", "ngForOf"]],
        template: function NzCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzCardComponent_div_0_Template, 5, 3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCardComponent_div_1_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NzCardComponent_ng_container_3_Template, 2, 0, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NzCardComponent_ng_template_4_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NzCardComponent_ul_6_Template, 2, 1, "ul", 5);
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzTitle || ctx.nzExtra || ctx.listOfNzCardTabComponent);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzCover);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.nzBodyStyle);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.nzLoading)("ngIfElse", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzActions.length);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzStringTemplateOutletDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], NzCardLoadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]];
        },
        encapsulation: 2,
        changeDetection: 0
      });

      NzCardComponent.ctorParameters = function () {
        return [{
          type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["NzConfigService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      };

      NzCardComponent.propDecorators = {
        nzBordered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzBorderless: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzLoading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzHoverable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzBodyStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzCover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzActions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzExtra: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        listOfNzCardTabComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [NzCardTabComponent, {
            "static": false
          }]
        }],
        listOfNzCardGridDirective: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [NzCardGridDirective]
        }]
      };
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["WithConfig"])(), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], NzCardComponent.prototype, "nzBordered", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["WithConfig"])(), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], NzCardComponent.prototype, "nzBorderless", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzCardComponent.prototype, "nzLoading", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["WithConfig"])(), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], NzCardComponent.prototype, "nzHoverable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NzCardComponent.prototype, "nzSize", void 0);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzCardGridDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[nz-card-grid]',
            exportAs: 'nzCardGrid',
            host: {
              '[class.ant-card-hoverable]': 'nzHoverable'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }];
        }, {
          nzHoverable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzCardTabComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'nz-card-tab',
            exportAs: 'nzCardTab',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <ng-template>\n      <ng-content></ng-content>\n    </ng-template>\n  "
          }]
        }], null, {
          template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], {
              "static": true
            }]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'nz-card',
            exportAs: 'nzCard',
            preserveWhitespaces: false,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            template: "\n    <div class=\"ant-card-head\" *ngIf=\"nzTitle || nzExtra || listOfNzCardTabComponent\">\n      <div class=\"ant-card-head-wrapper\">\n        <div class=\"ant-card-head-title\" *ngIf=\"nzTitle\">\n          <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n        </div>\n        <div class=\"ant-card-extra\" *ngIf=\"nzExtra\">\n          <ng-container *nzStringTemplateOutlet=\"nzExtra\">{{ nzExtra }}</ng-container>\n        </div>\n      </div>\n      <ng-container *ngIf=\"listOfNzCardTabComponent\">\n        <ng-template [ngTemplateOutlet]=\"listOfNzCardTabComponent.template\"></ng-template>\n      </ng-container>\n    </div>\n    <div class=\"ant-card-cover\" *ngIf=\"nzCover\">\n      <ng-template [ngTemplateOutlet]=\"nzCover\"></ng-template>\n    </div>\n    <div class=\"ant-card-body\" [ngStyle]=\"nzBodyStyle\">\n      <ng-container *ngIf=\"!nzLoading; else loadingTemplate\">\n        <ng-content></ng-content>\n      </ng-container>\n      <ng-template #loadingTemplate>\n        <nz-card-loading></nz-card-loading>\n      </ng-template>\n    </div>\n    <ul class=\"ant-card-actions\" *ngIf=\"nzActions.length\">\n      <li *ngFor=\"let action of nzActions\" [style.width.%]=\"100 / nzActions.length\">\n        <span><ng-template [ngTemplateOutlet]=\"action\"></ng-template></span>\n      </li>\n    </ul>\n  ",
            host: {
              '[class.ant-card-loading]': 'nzLoading',
              '[class.ant-card-bordered]': 'nzBorderless === false && nzBordered',
              '[class.ant-card-hoverable]': 'nzHoverable',
              '[class.ant-card-small]': 'nzSize === "small"',
              '[class.ant-card-contain-grid]': 'listOfNzCardGridDirective && listOfNzCardGridDirective.length',
              '[class.ant-card-type-inner]': 'nzType === "inner"',
              '[class.ant-card-contain-tabs]': '!!listOfNzCardTabComponent',
              '[class.ant-card-rtl]': "dir === 'rtl'"
            }
          }]
        }], function () {
          return [{
            type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["NzConfigService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }];
        }, {
          nzBordered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          nzBorderless: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          nzLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          nzHoverable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          nzBodyStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          nzActions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          nzType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          nzCover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          nzExtra: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          listOfNzCardTabComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [NzCardTabComponent, {
              "static": false
            }]
          }],
          listOfNzCardGridDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [NzCardGridDirective]
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzCardLoadingComponent = /*#__PURE__*/_createClass(function NzCardLoadingComponent(elementRef) {
        _classCallCheck(this, NzCardLoadingComponent);

        this.elementRef = elementRef;
        this.listOfLoading = [['ant-col-22'], ['ant-col-8', 'ant-col-15'], ['ant-col-6', 'ant-col-18'], ['ant-col-13', 'ant-col-9'], ['ant-col-4', 'ant-col-3', 'ant-col-16'], ['ant-col-8', 'ant-col-6', 'ant-col-8']]; // TODO: move to host after View Engine deprecation

        this.elementRef.nativeElement.classList.add('ant-card-loading-content');
      });

      NzCardLoadingComponent.ɵfac = function NzCardLoadingComponent_Factory(t) {
        return new (t || NzCardLoadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
      };

      NzCardLoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: NzCardLoadingComponent,
        selectors: [["nz-card-loading"]],
        exportAs: ["nzCardLoading"],
        decls: 2,
        vars: 1,
        consts: [[1, "ant-card-loading-content"], ["class", "ant-row", "style", "margin-left: -4px; margin-right: -4px;", 4, "ngFor", "ngForOf"], [1, "ant-row", 2, "margin-left", "-4px", "margin-right", "-4px"], ["style", "padding-left: 4px; padding-right: 4px;", 3, "ngClass", 4, "ngFor", "ngForOf"], [2, "padding-left", "4px", "padding-right", "4px", 3, "ngClass"], [1, "ant-card-loading-block"]],
        template: function NzCardLoadingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCardLoadingComponent_div_1_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listOfLoading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]],
        encapsulation: 2,
        changeDetection: 0
      });

      NzCardLoadingComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzCardLoadingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'nz-card-loading',
            exportAs: 'nzCardLoading',
            template: "\n    <div class=\"ant-card-loading-content\">\n      <div class=\"ant-row\" style=\"margin-left: -4px; margin-right: -4px;\" *ngFor=\"let listOfClassName of listOfLoading\">\n        <div *ngFor=\"let className of listOfClassName\" [ngClass]=\"className\" style=\"padding-left: 4px; padding-right: 4px;\">\n          <div class=\"ant-card-loading-block\"></div>\n        </div>\n      </div>\n    </div>\n  ",
            preserveWhitespaces: false,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzCardMetaComponent = /*#__PURE__*/_createClass(function NzCardMetaComponent(elementRef) {
        _classCallCheck(this, NzCardMetaComponent);

        this.elementRef = elementRef;
        this.nzTitle = null;
        this.nzDescription = null;
        this.nzAvatar = null; // TODO: move to host after View Engine deprecation

        this.elementRef.nativeElement.classList.add('ant-card-meta');
      });

      NzCardMetaComponent.ɵfac = function NzCardMetaComponent_Factory(t) {
        return new (t || NzCardMetaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
      };

      NzCardMetaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: NzCardMetaComponent,
        selectors: [["nz-card-meta"]],
        inputs: {
          nzTitle: "nzTitle",
          nzDescription: "nzDescription",
          nzAvatar: "nzAvatar"
        },
        exportAs: ["nzCardMeta"],
        decls: 2,
        vars: 2,
        consts: [["class", "ant-card-meta-avatar", 4, "ngIf"], ["class", "ant-card-meta-detail", 4, "ngIf"], [1, "ant-card-meta-avatar"], [3, "ngTemplateOutlet"], [1, "ant-card-meta-detail"], ["class", "ant-card-meta-title", 4, "ngIf"], ["class", "ant-card-meta-description", 4, "ngIf"], [1, "ant-card-meta-title"], [4, "nzStringTemplateOutlet"], [1, "ant-card-meta-description"]],
        template: function NzCardMetaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzCardMetaComponent_div_0_Template, 2, 1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCardMetaComponent_div_1_Template, 3, 2, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzAvatar);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzTitle || ctx.nzDescription);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzStringTemplateOutletDirective"]],
        encapsulation: 2,
        changeDetection: 0
      });

      NzCardMetaComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };

      NzCardMetaComponent.propDecorators = {
        nzTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzDescription: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        nzAvatar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzCardMetaComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'nz-card-meta',
            exportAs: 'nzCardMeta',
            preserveWhitespaces: false,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            template: "\n    <div class=\"ant-card-meta-avatar\" *ngIf=\"nzAvatar\">\n      <ng-template [ngTemplateOutlet]=\"nzAvatar\"></ng-template>\n    </div>\n    <div class=\"ant-card-meta-detail\" *ngIf=\"nzTitle || nzDescription\">\n      <div class=\"ant-card-meta-title\" *ngIf=\"nzTitle\">\n        <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n      </div>\n      <div class=\"ant-card-meta-description\" *ngIf=\"nzDescription\">\n        <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\n      </div>\n    </div>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }];
        }, {
          nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          nzDescription: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          nzAvatar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzCardModule = /*#__PURE__*/_createClass(function NzCardModule() {
        _classCallCheck(this, NzCardModule);
      });

      NzCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: NzCardModule
      });
      NzCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function NzCardModule_Factory(t) {
          return new (t || NzCardModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzOutletModule"]], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzCardModule, {
          declarations: function declarations() {
            return [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzOutletModule"]];
          },
          exports: function exports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzCardModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzOutletModule"]],
            declarations: [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent],
            exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent]
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
      //# sourceMappingURL=ng-zorro-antd-card.js.map

      /***/

    },

    /***/
    "ocnv":
    /*!********************************************************************************!*\
      !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-form.js ***!
      \********************************************************************************/

    /*! exports provided: DefaultTooltipIcon, NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent, NzFormModule, NzFormSplitComponent, NzFormTextComponent */

    /***/
    function ocnv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultTooltipIcon", function () {
        return DefaultTooltipIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzFormControlComponent", function () {
        return NzFormControlComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzFormDirective", function () {
        return NzFormDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzFormItemComponent", function () {
        return NzFormItemComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzFormLabelComponent", function () {
        return NzFormLabelComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzFormModule", function () {
        return NzFormModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzFormSplitComponent", function () {
        return NzFormSplitComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzFormTextComponent", function () {
        return NzFormTextComponent;
      });
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "0MNC");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/core/outlet */
      "pdGh");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/tooltip */
      "nJia");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/core/animation */
      "GR68");
      /* harmony import */


      var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/core/util */
      "/KA4");
      /* harmony import */


      var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/i18n */
      "Rm4T");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-zorro-antd/core/config */
      "2Suw");
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var _c0 = ["*"];

      function NzFormControlComponent_i_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 6);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r0.iconType);
        }
      }

      function NzFormControlComponent_div_5_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.innerTip);
        }
      }

      var _c1 = function _c1(a1) {
        return ["ant-form-item-explain", a1];
      };

      var _c2 = function _c2(a0) {
        return {
          $implicit: a0
        };
      };

      function NzFormControlComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NzFormControlComponent_div_5_ng_container_2_Template, 2, 1, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c1, "ant-form-item-explain-" + ctx_r1.status));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@helpMotion", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r1.innerTip)("nzStringTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c2, ctx_r1.validateControl));
        }
      }

      function NzFormControlComponent_div_6_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.nzExtra);
        }
      }

      function NzFormControlComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzFormControlComponent_div_6_ng_container_1_Template, 2, 1, "ng-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r2.nzExtra);
        }
      }

      function NzFormLabelComponent_span_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var tooltipIconType_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", tooltipIconType_r2)("nzTheme", ctx_r1.tooltipIcon.theme);
        }
      }

      function NzFormLabelComponent_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzFormLabelComponent_span_2_ng_container_1_Template, 2, 2, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTooltipTitle", ctx_r0.nzTooltipTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.tooltipIcon.type);
        }
      }

      var NZ_CONFIG_MODULE_NAME = 'form';
      var DefaultTooltipIcon = {
        type: 'question-circle',
        theme: 'outline'
      };

      var NzFormDirective = /*#__PURE__*/function () {
        function NzFormDirective(nzConfigService, elementRef, renderer, directionality) {
          var _this10 = this;

          _classCallCheck(this, NzFormDirective);

          var _a;

          this.nzConfigService = nzConfigService;
          this.renderer = renderer;
          this.directionality = directionality;
          this._nzModuleName = NZ_CONFIG_MODULE_NAME;
          this.nzLayout = 'horizontal';
          this.nzNoColon = false;
          this.nzAutoTips = {};
          this.nzDisableAutoTips = false;
          this.nzTooltipIcon = DefaultTooltipIcon;
          this.dir = 'ltr';
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
          this.inputChanges$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
          this.renderer.addClass(elementRef.nativeElement, 'ant-form');
          this.dir = this.directionality.value;
          (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this.destroy$)).subscribe(function (direction) {
            _this10.dir = direction;
          });
        }

        _createClass(NzFormDirective, [{
          key: "getInputObservable",
          value: function getInputObservable(changeType) {
            return this.inputChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(function (changes) {
              return changeType in changes;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(function (value) {
              return value[changeType];
            }));
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this.inputChanges$.next(changes);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.inputChanges$.complete();
            this.destroy$.next();
            this.destroy$.complete();
          }
        }]);

        return NzFormDirective;
      }();

      NzFormDirective.ɵfac = function NzFormDirective_Factory(t) {
        return new (t || NzFormDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_16__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], 8));
      };

      NzFormDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: NzFormDirective,
        selectors: [["", "nz-form", ""]],
        hostVars: 8,
        hostBindings: function NzFormDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-form-horizontal", ctx.nzLayout === "horizontal")("ant-form-vertical", ctx.nzLayout === "vertical")("ant-form-inline", ctx.nzLayout === "inline")("ant-form-rtl", ctx.dir === "rtl");
          }
        },
        inputs: {
          nzLayout: "nzLayout",
          nzNoColon: "nzNoColon",
          nzAutoTips: "nzAutoTips",
          nzDisableAutoTips: "nzDisableAutoTips",
          nzTooltipIcon: "nzTooltipIcon"
        },
        exportAs: ["nzForm"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
      });

      NzFormDirective.ctorParameters = function () {
        return [{
          type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_16__["NzConfigService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }];
      };

      NzFormDirective.propDecorators = {
        nzLayout: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzNoColon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzAutoTips: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzDisableAutoTips: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzTooltipIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      Object(tslib__WEBPACK_IMPORTED_MODULE_15__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_16__["WithConfig"])(), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_15__["__metadata"])("design:type", Boolean)], NzFormDirective.prototype, "nzNoColon", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_15__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_16__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_15__["__metadata"])("design:type", Object)], NzFormDirective.prototype, "nzAutoTips", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_15__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_15__["__metadata"])("design:type", Object)], NzFormDirective.prototype, "nzDisableAutoTips", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_15__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_16__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_15__["__metadata"])("design:type", Object)], NzFormDirective.prototype, "nzTooltipIcon", void 0);
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      /** should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 **/

      var NzFormItemComponent = /*#__PURE__*/function () {
        function NzFormItemComponent(elementRef, renderer, cdr) {
          _classCallCheck(this, NzFormItemComponent);

          this.cdr = cdr;
          this.status = null;
          this.hasFeedback = false;
          this.withHelpClass = false;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
          renderer.addClass(elementRef.nativeElement, 'ant-form-item');
        }

        _createClass(NzFormItemComponent, [{
          key: "setWithHelpViaTips",
          value: function setWithHelpViaTips(value) {
            this.withHelpClass = value;
            this.cdr.markForCheck();
          }
        }, {
          key: "setStatus",
          value: function setStatus(status) {
            this.status = status;
            this.cdr.markForCheck();
          }
        }, {
          key: "setHasFeedback",
          value: function setHasFeedback(hasFeedback) {
            this.hasFeedback = hasFeedback;
            this.cdr.markForCheck();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }]);

        return NzFormItemComponent;
      }();

      NzFormItemComponent.ɵfac = function NzFormItemComponent_Factory(t) {
        return new (t || NzFormItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
      };

      NzFormItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: NzFormItemComponent,
        selectors: [["nz-form-item"]],
        hostVars: 12,
        hostBindings: function NzFormItemComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-form-item-has-success", ctx.status === "success")("ant-form-item-has-warning", ctx.status === "warning")("ant-form-item-has-error", ctx.status === "error")("ant-form-item-is-validating", ctx.status === "validating")("ant-form-item-has-feedback", ctx.hasFeedback && ctx.status)("ant-form-item-with-help", ctx.withHelpClass);
          }
        },
        exportAs: ["nzFormItem"],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function NzFormItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });

      NzFormItemComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }];
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var iconTypeMap = {
        error: 'close-circle-fill',
        validating: 'loading',
        success: 'check-circle-fill',
        warning: 'exclamation-circle-fill'
      };

      var NzFormControlComponent = /*#__PURE__*/function () {
        function NzFormControlComponent(elementRef, nzFormItemComponent, cdr, renderer, i18n, nzFormDirective) {
          var _this11 = this;

          _classCallCheck(this, NzFormControlComponent);

          var _a, _b;

          this.nzFormItemComponent = nzFormItemComponent;
          this.cdr = cdr;
          this.nzFormDirective = nzFormDirective;
          this._hasFeedback = false;
          this.validateChanges = rxjs__WEBPACK_IMPORTED_MODULE_13__["Subscription"].EMPTY;
          this.validateString = null;
          this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
          this.status = null;
          this.validateControl = null;
          this.iconType = null;
          this.innerTip = null;
          this.nzAutoTips = {};
          this.nzDisableAutoTips = 'default';
          renderer.addClass(elementRef.nativeElement, 'ant-form-item-control');
          this.subscribeAutoTips(i18n.localeChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(function (locale) {
            return _this11.localeId = locale.locale;
          })));
          this.subscribeAutoTips((_a = this.nzFormDirective) === null || _a === void 0 ? void 0 : _a.getInputObservable('nzAutoTips'));
          this.subscribeAutoTips((_b = this.nzFormDirective) === null || _b === void 0 ? void 0 : _b.getInputObservable('nzDisableAutoTips').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(function () {
            return _this11.nzDisableAutoTips === 'default';
          })));
        }

        _createClass(NzFormControlComponent, [{
          key: "disableAutoTips",
          get: function get() {
            var _a;

            return this.nzDisableAutoTips !== 'default' ? Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["toBoolean"])(this.nzDisableAutoTips) : (_a = this.nzFormDirective) === null || _a === void 0 ? void 0 : _a.nzDisableAutoTips;
          }
        }, {
          key: "nzHasFeedback",
          get: function get() {
            return this._hasFeedback;
          },
          set: function set(value) {
            this._hasFeedback = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["toBoolean"])(value);

            if (this.nzFormItemComponent) {
              this.nzFormItemComponent.setHasFeedback(this._hasFeedback);
            }
          }
        }, {
          key: "nzValidateStatus",
          set: function set(value) {
            if (value instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_9__["AbstractControl"] || value instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]) {
              this.validateControl = value;
              this.validateString = null;
              this.watchControl();
            } else if (value instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlName"]) {
              this.validateControl = value.control;
              this.validateString = null;
              this.watchControl();
            } else {
              this.validateString = value;
              this.validateControl = null;
              this.setStatus();
            }
          }
        }, {
          key: "watchControl",
          value: function watchControl() {
            var _this12 = this;

            this.validateChanges.unsubscribe();
            /** miss detect https://github.com/angular/angular/issues/10887 **/

            if (this.validateControl && this.validateControl.statusChanges) {
              this.validateChanges = this.validateControl.statusChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this.destroyed$)).subscribe(function (_) {
                if (!_this12.disableAutoTips) {
                  _this12.updateAutoErrorTip();
                }

                _this12.setStatus();

                _this12.cdr.markForCheck();
              });
            }
          }
        }, {
          key: "setStatus",
          value: function setStatus() {
            this.status = this.getControlStatus(this.validateString);
            this.iconType = this.status ? iconTypeMap[this.status] : null;
            this.innerTip = this.getInnerTip(this.status);

            if (this.nzFormItemComponent) {
              this.nzFormItemComponent.setWithHelpViaTips(!!this.innerTip);
              this.nzFormItemComponent.setStatus(this.status);
            }
          }
        }, {
          key: "getControlStatus",
          value: function getControlStatus(validateString) {
            var status;

            if (validateString === 'warning' || this.validateControlStatus('INVALID', 'warning')) {
              status = 'warning';
            } else if (validateString === 'error' || this.validateControlStatus('INVALID')) {
              status = 'error';
            } else if (validateString === 'validating' || validateString === 'pending' || this.validateControlStatus('PENDING')) {
              status = 'validating';
            } else if (validateString === 'success' || this.validateControlStatus('VALID')) {
              status = 'success';
            } else {
              status = null;
            }

            return status;
          }
        }, {
          key: "validateControlStatus",
          value: function validateControlStatus(validStatus, statusType) {
            if (!this.validateControl) {
              return false;
            } else {
              var _this$validateControl = this.validateControl,
                  dirty = _this$validateControl.dirty,
                  touched = _this$validateControl.touched,
                  status = _this$validateControl.status;
              return (!!dirty || !!touched) && (statusType ? this.validateControl.hasError(statusType) : status === validStatus);
            }
          }
        }, {
          key: "getInnerTip",
          value: function getInnerTip(status) {
            switch (status) {
              case 'error':
                return !this.disableAutoTips && this.autoErrorTip || this.nzErrorTip || null;

              case 'validating':
                return this.nzValidatingTip || null;

              case 'success':
                return this.nzSuccessTip || null;

              case 'warning':
                return this.nzWarningTip || null;

              default:
                return null;
            }
          }
        }, {
          key: "updateAutoErrorTip",
          value: function updateAutoErrorTip() {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;

            if (this.validateControl) {
              var errors = this.validateControl.errors || {};
              var autoErrorTip = '';

              for (var key in errors) {
                if (errors.hasOwnProperty(key)) {
                  autoErrorTip = (_l = (_g = (_e = (_b = (_a = errors[key]) === null || _a === void 0 ? void 0 : _a[this.localeId]) !== null && _b !== void 0 ? _b : (_d = (_c = this.nzAutoTips) === null || _c === void 0 ? void 0 : _c[this.localeId]) === null || _d === void 0 ? void 0 : _d[key]) !== null && _e !== void 0 ? _e : (_f = this.nzAutoTips["default"]) === null || _f === void 0 ? void 0 : _f[key]) !== null && _g !== void 0 ? _g : (_k = (_j = (_h = this.nzFormDirective) === null || _h === void 0 ? void 0 : _h.nzAutoTips) === null || _j === void 0 ? void 0 : _j[this.localeId]) === null || _k === void 0 ? void 0 : _k[key]) !== null && _l !== void 0 ? _l : (_o = (_m = this.nzFormDirective) === null || _m === void 0 ? void 0 : _m.nzAutoTips["default"]) === null || _o === void 0 ? void 0 : _o[key];
                }

                if (!!autoErrorTip) {
                  break;
                }
              }

              this.autoErrorTip = autoErrorTip;
            }
          }
        }, {
          key: "subscribeAutoTips",
          value: function subscribeAutoTips(observable) {
            var _this13 = this;

            observable === null || observable === void 0 ? void 0 : observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this.destroyed$)).subscribe(function () {
              if (!_this13.disableAutoTips) {
                _this13.updateAutoErrorTip();

                _this13.setStatus();

                _this13.cdr.markForCheck();
              }
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var nzDisableAutoTips = changes.nzDisableAutoTips,
                nzAutoTips = changes.nzAutoTips,
                nzSuccessTip = changes.nzSuccessTip,
                nzWarningTip = changes.nzWarningTip,
                nzErrorTip = changes.nzErrorTip,
                nzValidatingTip = changes.nzValidatingTip;

            if (nzDisableAutoTips || nzAutoTips) {
              this.updateAutoErrorTip();
              this.setStatus();
            } else if (nzSuccessTip || nzWarningTip || nzErrorTip || nzValidatingTip) {
              this.setStatus();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setStatus();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed$.next();
            this.destroyed$.complete();
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            if (!this.validateControl && !this.validateString) {
              if (this.defaultValidateControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlDirective"]) {
                this.nzValidateStatus = this.defaultValidateControl.control;
              } else {
                this.nzValidateStatus = this.defaultValidateControl;
              }
            }
          }
        }]);

        return NzFormControlComponent;
      }();

      NzFormControlComponent.ɵfac = function NzFormControlComponent_Factory(t) {
        return new (t || NzFormControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](NzFormItemComponent, 9), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](NzFormDirective, 8));
      };

      NzFormControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: NzFormControlComponent,
        selectors: [["nz-form-control"]],
        contentQueries: function NzFormControlComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.defaultValidateControl = _t.first);
          }
        },
        inputs: {
          nzAutoTips: "nzAutoTips",
          nzDisableAutoTips: "nzDisableAutoTips",
          nzHasFeedback: "nzHasFeedback",
          nzValidateStatus: "nzValidateStatus",
          nzSuccessTip: "nzSuccessTip",
          nzWarningTip: "nzWarningTip",
          nzErrorTip: "nzErrorTip",
          nzValidatingTip: "nzValidatingTip",
          nzExtra: "nzExtra"
        },
        exportAs: ["nzFormControl"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 7,
        vars: 3,
        consts: [[1, "ant-form-item-control-input"], [1, "ant-form-item-control-input-content"], [1, "ant-form-item-children-icon"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["class", "ant-form-item-extra", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], [3, "ngClass"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [1, "ant-form-item-extra"], [4, "nzStringTemplateOutlet"]],
        template: function NzFormControlComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, NzFormControlComponent_i_4_Template, 1, 1, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, NzFormControlComponent_div_5_Template, 3, 8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, NzFormControlComponent_div_6_Template, 2, 1, "div", 5);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nzHasFeedback && ctx.iconType);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.innerTip);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nzExtra);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzStringTemplateOutletDirective"]],
        encapsulation: 2,
        data: {
          animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_10__["helpMotion"]]
        },
        changeDetection: 0
      });

      NzFormControlComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: NzFormItemComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Host"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
        }, {
          type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nService"]
        }, {
          type: NzFormDirective,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }];
      };

      NzFormControlComponent.propDecorators = {
        defaultValidateControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
          args: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"], {
            "static": false
          }]
        }],
        nzSuccessTip: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzWarningTip: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzErrorTip: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzValidatingTip: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzExtra: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzAutoTips: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzDisableAutoTips: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzHasFeedback: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzValidateStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      function toTooltipIcon(value) {
        var icon = typeof value === 'string' ? {
          type: value
        } : value;
        return Object.assign(Object.assign({}, DefaultTooltipIcon), icon);
      }

      var NzFormLabelComponent = /*#__PURE__*/function () {
        function NzFormLabelComponent(elementRef, renderer, cdr, nzFormDirective) {
          var _this14 = this;

          _classCallCheck(this, NzFormLabelComponent);

          this.cdr = cdr;
          this.nzFormDirective = nzFormDirective;
          this.nzRequired = false;
          this.noColon = 'default';
          this._tooltipIcon = 'default';
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
          renderer.addClass(elementRef.nativeElement, 'ant-form-item-label');

          if (this.nzFormDirective) {
            this.nzFormDirective.getInputObservable('nzNoColon').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(function () {
              return _this14.noColon === 'default';
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this.destroy$)).subscribe(function () {
              return _this14.cdr.markForCheck();
            });
            this.nzFormDirective.getInputObservable('nzTooltipIcon').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(function () {
              return _this14._tooltipIcon === 'default';
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this.destroy$)).subscribe(function () {
              return _this14.cdr.markForCheck();
            });
          }
        }

        _createClass(NzFormLabelComponent, [{
          key: "nzNoColon",
          get: function get() {
            var _a;

            return this.noColon !== 'default' ? this.noColon : (_a = this.nzFormDirective) === null || _a === void 0 ? void 0 : _a.nzNoColon;
          },
          set: function set(value) {
            this.noColon = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["toBoolean"])(value);
          }
        }, {
          key: "nzTooltipIcon",
          set: function set(value) {
            this._tooltipIcon = toTooltipIcon(value);
          } // due to 'get' and 'set' accessor must have the same type, so it was renamed to `tooltipIcon`

        }, {
          key: "tooltipIcon",
          get: function get() {
            var _a;

            return this._tooltipIcon !== 'default' ? this._tooltipIcon : toTooltipIcon(((_a = this.nzFormDirective) === null || _a === void 0 ? void 0 : _a.nzTooltipIcon) || DefaultTooltipIcon);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }]);

        return NzFormLabelComponent;
      }();

      NzFormLabelComponent.ɵfac = function NzFormLabelComponent_Factory(t) {
        return new (t || NzFormLabelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](NzFormDirective, 12));
      };

      NzFormLabelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: NzFormLabelComponent,
        selectors: [["nz-form-label"]],
        inputs: {
          nzRequired: "nzRequired",
          nzNoColon: "nzNoColon",
          nzTooltipIcon: "nzTooltipIcon",
          nzFor: "nzFor",
          nzTooltipTitle: "nzTooltipTitle"
        },
        exportAs: ["nzFormLabel"],
        ngContentSelectors: _c0,
        decls: 3,
        vars: 6,
        consts: [["class", "ant-form-item-tooltip", "nz-tooltip", "", 3, "nzTooltipTitle", 4, "ngIf"], ["nz-tooltip", "", 1, "ant-form-item-tooltip", 3, "nzTooltipTitle"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType", "nzTheme"]],
        template: function NzFormLabelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NzFormLabelComponent_span_2_Template, 2, 2, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-form-item-no-colon", ctx.nzNoColon)("ant-form-item-required", ctx.nzRequired);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("for", ctx.nzFor);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nzTooltipTitle);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__["NzTooltipDirective"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzStringTemplateOutletDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"]],
        encapsulation: 2,
        changeDetection: 0
      });

      NzFormLabelComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: NzFormDirective,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"]
          }]
        }];
      };

      NzFormLabelComponent.propDecorators = {
        nzFor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzRequired: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzNoColon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzTooltipTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzTooltipIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      Object(tslib__WEBPACK_IMPORTED_MODULE_15__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_15__["__metadata"])("design:type", Object)], NzFormLabelComponent.prototype, "nzRequired", void 0);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzFormDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: '[nz-form]',
            exportAs: 'nzForm',
            host: {
              '[class.ant-form-horizontal]': "nzLayout === 'horizontal'",
              '[class.ant-form-vertical]': "nzLayout === 'vertical'",
              '[class.ant-form-inline]': "nzLayout === 'inline'",
              '[class.ant-form-rtl]': "dir === 'rtl'"
            }
          }]
        }], function () {
          return [{
            type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_16__["NzConfigService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }];
        }, {
          nzLayout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzNoColon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzAutoTips: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzDisableAutoTips: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzTooltipIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzFormItemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'nz-form-item',
            exportAs: 'nzFormItem',
            preserveWhitespaces: false,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            host: {
              '[class.ant-form-item-has-success]': 'status === "success"',
              '[class.ant-form-item-has-warning]': 'status === "warning"',
              '[class.ant-form-item-has-error]': 'status === "error"',
              '[class.ant-form-item-is-validating]': 'status === "validating"',
              '[class.ant-form-item-has-feedback]': 'hasFeedback && status',
              '[class.ant-form-item-with-help]': 'withHelpClass'
            },
            template: "\n    <ng-content></ng-content>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzFormControlComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'nz-form-control',
            exportAs: 'nzFormControl',
            preserveWhitespaces: false,
            animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_10__["helpMotion"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <div class=\"ant-form-item-control-input\">\n      <div class=\"ant-form-item-control-input-content\">\n        <ng-content></ng-content>\n      </div>\n      <span class=\"ant-form-item-children-icon\">\n        <i *ngIf=\"nzHasFeedback && iconType\" nz-icon [nzType]=\"iconType\"></i>\n      </span>\n    </div>\n    <div [ngClass]=\"['ant-form-item-explain', 'ant-form-item-explain-' + status]\" *ngIf=\"innerTip\">\n      <div @helpMotion>\n        <ng-container *nzStringTemplateOutlet=\"innerTip; context: { $implicit: validateControl }\">{{ innerTip }}</ng-container>\n      </div>\n    </div>\n    <div class=\"ant-form-item-extra\" *ngIf=\"nzExtra\">\n      <ng-container *nzStringTemplateOutlet=\"nzExtra\">{{ nzExtra }}</ng-container>\n    </div>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: NzFormItemComponent,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Host"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
          }, {
            type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nService"]
          }, {
            type: NzFormDirective,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }];
        }, {
          nzAutoTips: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzDisableAutoTips: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzHasFeedback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzValidateStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          defaultValidateControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
            args: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"], {
              "static": false
            }]
          }],
          nzSuccessTip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzWarningTip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzErrorTip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzValidatingTip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzExtra: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzFormLabelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'nz-form-label',
            exportAs: 'nzFormLabel',
            preserveWhitespaces: false,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <label [attr.for]=\"nzFor\" [class.ant-form-item-no-colon]=\"nzNoColon\" [class.ant-form-item-required]=\"nzRequired\">\n      <ng-content></ng-content>\n      <span *ngIf=\"nzTooltipTitle\" class=\"ant-form-item-tooltip\" nz-tooltip [nzTooltipTitle]=\"nzTooltipTitle\">\n        <ng-container *nzStringTemplateOutlet=\"tooltipIcon.type; let tooltipIconType\">\n          <i nz-icon [nzType]=\"tooltipIconType\" [nzTheme]=\"tooltipIcon.theme\"></i>\n        </ng-container>\n      </span>\n    </label>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: NzFormDirective,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"]
            }]
          }];
        }, {
          nzRequired: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzNoColon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzTooltipIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzTooltipTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzFormSplitComponent = /*#__PURE__*/_createClass(function NzFormSplitComponent(elementRef, renderer) {
        _classCallCheck(this, NzFormSplitComponent);

        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-split');
      });

      NzFormSplitComponent.ɵfac = function NzFormSplitComponent_Factory(t) {
        return new (t || NzFormSplitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]));
      };

      NzFormSplitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: NzFormSplitComponent,
        selectors: [["nz-form-split"]],
        exportAs: ["nzFormSplit"],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function NzFormSplitComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });

      NzFormSplitComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzFormSplitComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'nz-form-split',
            exportAs: 'nzFormSplit',
            preserveWhitespaces: false,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            template: " <ng-content></ng-content> "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
          }];
        }, null);
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzFormTextComponent = /*#__PURE__*/_createClass(function NzFormTextComponent(elementRef, renderer) {
        _classCallCheck(this, NzFormTextComponent);

        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-text');
      });

      NzFormTextComponent.ɵfac = function NzFormTextComponent_Factory(t) {
        return new (t || NzFormTextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]));
      };

      NzFormTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: NzFormTextComponent,
        selectors: [["nz-form-text"]],
        exportAs: ["nzFormText"],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function NzFormTextComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });

      NzFormTextComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzFormTextComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'nz-form-text',
            exportAs: 'nzFormText',
            preserveWhitespaces: false,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            template: " <ng-content></ng-content> "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
          }];
        }, null);
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzFormModule = /*#__PURE__*/_createClass(function NzFormModule() {
        _classCallCheck(this, NzFormModule);
      });

      NzFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: NzFormModule
      });
      NzFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function NzFormModule_Factory(t) {
          return new (t || NzFormModule)();
        },
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzGridModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__["NzToolTipModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzOutletModule"]], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzGridModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NzFormModule, {
          declarations: function declarations() {
            return [NzFormDirective, NzFormItemComponent, NzFormLabelComponent, NzFormControlComponent, NzFormTextComponent, NzFormSplitComponent];
          },
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzGridModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__["NzToolTipModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzOutletModule"]];
          },
          exports: function exports() {
            return [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzGridModule"], NzFormDirective, NzFormItemComponent, NzFormLabelComponent, NzFormControlComponent, NzFormTextComponent, NzFormSplitComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzFormModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
          args: [{
            declarations: [NzFormDirective, NzFormItemComponent, NzFormLabelComponent, NzFormControlComponent, NzFormTextComponent, NzFormSplitComponent],
            exports: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzGridModule"], NzFormDirective, NzFormItemComponent, NzFormLabelComponent, NzFormControlComponent, NzFormTextComponent, NzFormSplitComponent],
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzGridModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__["NzToolTipModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzOutletModule"]]
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
      //# sourceMappingURL=ng-zorro-antd-form.js.map

      /***/

    },

    /***/
    "rMZv":
    /*!*********************************************************************************!*\
      !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-table.js ***!
      \*********************************************************************************/

    /*! exports provided: NzCellAlignDirective, NzCellBreakWordDirective, NzCellEllipsisDirective, NzCellFixedDirective, NzFilterTriggerComponent, NzRowExpandButtonDirective, NzRowIndentDirective, NzTableCellDirective, NzTableComponent, NzTableContentComponent, NzTableDataService, NzTableFilterComponent, NzTableFixedRowComponent, NzTableInnerDefaultComponent, NzTableInnerScrollComponent, NzTableModule, NzTableSelectionComponent, NzTableSortersComponent, NzTableStyleService, NzTableTitleFooterComponent, NzTableVirtualScrollDirective, NzTbodyComponent, NzTdAddOnComponent, NzThAddOnComponent, NzThMeasureDirective, NzThSelectionComponent, NzTheadComponent, NzTrDirective, NzTrExpandDirective, NzTrMeasureComponent */

    /***/
    function rMZv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzCellAlignDirective", function () {
        return NzCellAlignDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzCellBreakWordDirective", function () {
        return NzCellBreakWordDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzCellEllipsisDirective", function () {
        return NzCellEllipsisDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzCellFixedDirective", function () {
        return NzCellFixedDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzFilterTriggerComponent", function () {
        return NzFilterTriggerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzRowExpandButtonDirective", function () {
        return NzRowExpandButtonDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzRowIndentDirective", function () {
        return NzRowIndentDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzTableCellDirective", function () {
        return NzTableCellDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzTableComponent", function () {
        return NzTableComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzTableContentComponent", function () {
        return NzTableContentComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzTableDataService", function () {
        return NzTableDataService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzTableFilterComponent", function () {
        return NzTableFilterComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzTableFixedRowComponent", function () {
        return NzTableFixedRowComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzTableInnerDefaultComponent", function () {
        return NzTableInnerDefaultComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzTableInnerScrollComponent", function () {
        return NzTableInnerScrollComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzTableModule", function () {
        return NzTableModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzTableSelectionComponent", function () {
        return NzTableSelectionComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzTableSortersComponent", function () {
        return NzTableSortersComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzTableStyleService", function () {
        return NzTableStyleService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzTableTitleFooterComponent", function () {
        return NzTableTitleFooterComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzTableVirtualScrollDirective", function () {
        return NzTableVirtualScrollDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzTbodyComponent", function () {
        return NzTbodyComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzTdAddOnComponent", function () {
        return NzTdAddOnComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzThAddOnComponent", function () {
        return NzThAddOnComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzThMeasureDirective", function () {
        return NzThMeasureDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzThSelectionComponent", function () {
        return NzThSelectionComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzTheadComponent", function () {
        return NzTheadComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzTrDirective", function () {
        return NzTrDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzTrExpandDirective", function () {
        return NzTrExpandDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzTrMeasureComponent", function () {
        return NzTrMeasureComponent;
      });
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/checkbox */
      "TaO5");
      /* harmony import */


      var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/core/outlet */
      "pdGh");
      /* harmony import */


      var ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/core/resize-observers */
      "/Kk4");
      /* harmony import */


      var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/dropdown */
      "Nqz0");
      /* harmony import */


      var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/empty */
      "QlLE");
      /* harmony import */


      var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/i18n */
      "Rm4T");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-zorro-antd/menu */
      "Q8cG");
      /* harmony import */


      var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-zorro-antd/pagination */
      "3/1E");
      /* harmony import */


      var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-zorro-antd/radio */
      "bE2y");
      /* harmony import */


      var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-zorro-antd/spin */
      "qAZ0");
      /* harmony import */


      var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng-zorro-antd/core/util */
      "/KA4");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ng-zorro-antd/core/services */
      "JwMs");
      /* harmony import */


      var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ng-zorro-antd/core/config */
      "2Suw");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var _c0 = ["*"];

      function NzTableFilterComponent_ng_template_1_Template(rf, ctx) {}

      function NzTableFilterComponent_ng_container_2_li_7_label_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NzTableFilterComponent_ng_container_2_li_7_label_1_Template_label_ngModelChange_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);

            var f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r7.check(f_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", f_r4.checked);
        }
      }

      function NzTableFilterComponent_ng_container_2_li_7_label_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NzTableFilterComponent_ng_container_2_li_7_label_2_Template_label_ngModelChange_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);

            var f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r11.check(f_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", f_r4.checked);
        }
      }

      function NzTableFilterComponent_ng_container_2_li_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NzTableFilterComponent_ng_container_2_li_7_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);

            var f_r4 = ctx.$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r15.check(f_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTableFilterComponent_ng_container_2_li_7_label_1_Template, 1, 1, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NzTableFilterComponent_ng_container_2_li_7_label_2_Template, 1, 1, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var f_r4 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSelected", f_r4.checked);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r3.filterMultiple);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.filterMultiple);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](f_r4.text);
        }
      }

      function NzTableFilterComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nz-filter-trigger", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzVisibleChange", function NzTableFilterComponent_ng_container_2_Template_nz_filter_trigger_nzVisibleChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r17.onVisibleChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nz-dropdown-menu", null, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, NzTableFilterComponent_ng_container_2_li_7_Template, 5, 4, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NzTableFilterComponent_ng_container_2_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r19.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NzTableFilterComponent_ng_container_2_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r20.confirm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzVisible", ctx_r1.isVisible)("nzActive", ctx_r1.isChecked)("nzDropdownMenu", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.listOfParsedFilter)("ngForTrackBy", ctx_r1.trackByValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.isChecked);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.locale.filterReset);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.locale.filterConfirm);
        }
      }

      function NzTableSelectionComponent_label_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NzTableSelectionComponent_label_0_Template_label_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r2.onCheckedChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-table-selection-select-all-custom", ctx_r0.showRowSelection);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r0.checked)("nzDisabled", ctx_r0.disabled)("nzIndeterminate", ctx_r0.indeterminate);
        }
      }

      function NzTableSelectionComponent_div_1_li_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NzTableSelectionComponent_div_1_li_6_Template_li_click_0_listener() {
            var selection_r6 = ctx.$implicit;
            return selection_r6.onSelect();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var selection_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", selection_r6.text, " ");
        }
      }

      function NzTableSelectionComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nz-dropdown-menu", null, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, NzTableSelectionComponent_div_1_li_6_Template, 2, 1, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzDropdownMenu", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.listOfSelections);
        }
      }

      function NzTableSortersComponent_ng_template_1_Template(rf, ctx) {}

      function NzTableSortersComponent_i_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 5);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r1.sortOrder == "ascend");
        }
      }

      function NzTableSortersComponent_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 6);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r2.sortOrder == "descend");
        }
      }

      var _c1 = ["nzChecked", ""];

      function NzTdAddOnComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "nz-row-indent", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("expandChange", function NzTdAddOnComponent_ng_container_0_Template_button_expandChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r2.onExpandChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("indentSize", ctx_r0.nzIndentSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("expand", ctx_r0.nzExpand)("spaceMode", !ctx_r0.nzShowExpand);
        }
      }

      function NzTdAddOnComponent_label_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NzTdAddOnComponent_label_1_Template_label_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r4.onCheckedChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzDisabled", ctx_r1.nzDisabled)("ngModel", ctx_r1.nzChecked)("nzIndeterminate", ctx_r1.nzIndeterminate);
        }
      }

      var _c2 = ["nzColumnKey", ""];

      function NzThAddOnComponent_nz_table_filter_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-table-filter", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("filterChange", function NzThAddOnComponent_nz_table_filter_0_Template_nz_table_filter_filterChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r9.onFilterValueChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("contentTemplate", _r1)("extraTemplate", _r3)("customFilter", ctx_r0.nzCustomFilter)("filterMultiple", ctx_r0.nzFilterMultiple)("listOfFilter", ctx_r0.nzFilters);
        }
      }

      function NzThAddOnComponent_ng_template_1_ng_template_0_Template(rf, ctx) {}

      function NzThAddOnComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NzThAddOnComponent_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", 6);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.nzShowSort ? _r5 : _r7);
        }
      }

      function NzThAddOnComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](1, 1);
        }
      }

      function NzThAddOnComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-table-sorters", 7);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("sortOrder", ctx_r6.sortOrder)("sortDirections", ctx_r6.sortDirections)("contentTemplate", _r7);
        }
      }

      function NzThAddOnComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0, 2);
        }
      }

      var _c3 = [[["", "nz-th-extra", ""]], [["nz-filter-trigger"]], "*"];
      var _c4 = ["[nz-th-extra]", "nz-filter-trigger", "*"];
      var _c5 = ["nzSelections", ""];
      var _c6 = ["nz-table-content", ""];

      function NzTableContentComponent_col_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "col");
        }

        if (rf & 2) {
          var width_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", width_r3)("min-width", width_r3);
        }
      }

      function NzTableContentComponent_thead_1_ng_template_1_Template(rf, ctx) {}

      function NzTableContentComponent_thead_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "thead", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTableContentComponent_thead_1_ng_template_1_Template, 0, 0, "ng-template", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.theadTemplate);
        }
      }

      function NzTableContentComponent_ng_template_2_Template(rf, ctx) {}

      var _c7 = ["tdElement"];
      var _c8 = ["nz-table-fixed-row", ""];

      function NzTableFixedRowComponent_div_2_ng_template_2_Template(rf, ctx) {}

      function NzTableFixedRowComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NzTableFixedRowComponent_div_2_ng_template_2_Template, 0, 0, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 3, ctx_r1.hostWidth$), "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r2);
        }
      }

      function NzTableFixedRowComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
        }
      }

      var _c9 = ["tableHeaderElement"];
      var _c10 = ["tableBodyElement"];

      function NzTableInnerScrollComponent_ng_container_0_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "table", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx_r3.bodyStyleMap);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("scrollX", ctx_r3.scrollX)("listOfColWidth", ctx_r3.listOfColWidth)("contentTemplate", ctx_r3.contentTemplate);
        }
      }

      function NzTableInnerScrollComponent_ng_container_0_cdk_virtual_scroll_viewport_5_ng_container_4_ng_template_1_Template(rf, ctx) {}

      var _c11 = function _c11(a0, a1) {
        return {
          $implicit: a0,
          index: a1
        };
      };

      function NzTableInnerScrollComponent_ng_container_0_cdk_virtual_scroll_viewport_5_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTableInnerScrollComponent_ng_container_0_cdk_virtual_scroll_viewport_5_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r8 = ctx.$implicit;
          var i_r9 = ctx.index;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.virtualTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](2, _c11, item_r8, i_r9));
        }
      }

      function NzTableInnerScrollComponent_ng_container_0_cdk_virtual_scroll_viewport_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "cdk-virtual-scroll-viewport", 10, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "table", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, NzTableInnerScrollComponent_ng_container_0_cdk_virtual_scroll_viewport_5_ng_container_4_Template, 2, 5, "ng-container", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("height", ctx_r4.data.length ? ctx_r4.scrollY : ctx_r4.noDateVirtualHeight);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("itemSize", ctx_r4.virtualItemSize)("maxBufferPx", ctx_r4.virtualMaxBufferPx)("minBufferPx", ctx_r4.virtualMinBufferPx);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("scrollX", ctx_r4.scrollX)("listOfColWidth", ctx_r4.listOfColWidth);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkVirtualForOf", ctx_r4.data)("cdkVirtualForTrackBy", ctx_r4.virtualForTrackBy);
        }
      }

      function NzTableInnerScrollComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, NzTableInnerScrollComponent_ng_container_0_div_4_Template, 3, 4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, NzTableInnerScrollComponent_ng_container_0_cdk_virtual_scroll_viewport_5_Template, 5, 9, "cdk-virtual-scroll-viewport", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx_r0.headerStyleMap);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("scrollX", ctx_r0.scrollX)("listOfColWidth", ctx_r0.listOfColWidth)("theadTemplate", ctx_r0.theadTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.virtualTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.virtualTemplate);
        }
      }

      function NzTableInnerScrollComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx_r1.bodyStyleMap);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("scrollX", ctx_r1.scrollX)("listOfColWidth", ctx_r1.listOfColWidth)("theadTemplate", ctx_r1.theadTemplate)("contentTemplate", ctx_r1.contentTemplate);
        }
      }

      function NzTableComponent_ng_container_1_ng_template_1_Template(rf, ctx) {}

      function NzTableComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTableComponent_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r8);
        }
      }

      function NzTableComponent_nz_table_title_footer_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-table-title-footer", 11);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx_r2.nzTitle);
        }
      }

      function NzTableComponent_nz_table_inner_scroll_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-table-inner-scroll", 12);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx_r3.data)("scrollX", ctx_r3.scrollX)("scrollY", ctx_r3.scrollY)("contentTemplate", _r10)("listOfColWidth", ctx_r3.listOfAutoColWidth)("theadTemplate", ctx_r3.theadTemplate)("verticalScrollBarWidth", ctx_r3.verticalScrollBarWidth)("virtualTemplate", ctx_r3.nzVirtualScrollDirective ? ctx_r3.nzVirtualScrollDirective.templateRef : null)("virtualItemSize", ctx_r3.nzVirtualItemSize)("virtualMaxBufferPx", ctx_r3.nzVirtualMaxBufferPx)("virtualMinBufferPx", ctx_r3.nzVirtualMinBufferPx)("tableMainElement", _r1)("virtualForTrackBy", ctx_r3.nzVirtualForTrackBy);
        }
      }

      function NzTableComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-table-inner-default", 13);
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tableLayout", ctx_r5.nzTableLayout)("listOfColWidth", ctx_r5.listOfManualColWidth)("theadTemplate", ctx_r5.theadTemplate)("contentTemplate", _r10);
        }
      }

      function NzTableComponent_nz_table_title_footer_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-table-title-footer", 14);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("footer", ctx_r6.nzFooter);
        }
      }

      function NzTableComponent_ng_container_9_ng_template_1_Template(rf, ctx) {}

      function NzTableComponent_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTableComponent_ng_container_9_ng_template_1_Template, 0, 0, "ng-template", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r8);
        }
      }

      function NzTableComponent_ng_template_10_nz_pagination_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-pagination", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzPageSizeChange", function NzTableComponent_ng_template_10_nz_pagination_0_Template_nz_pagination_nzPageSizeChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r15.onPageSizeChange($event);
          })("nzPageIndexChange", function NzTableComponent_ng_template_10_nz_pagination_0_Template_nz_pagination_nzPageIndexChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r17.onPageIndexChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", !ctx_r14.showPagination)("nzShowSizeChanger", ctx_r14.nzShowSizeChanger)("nzPageSizeOptions", ctx_r14.nzPageSizeOptions)("nzItemRender", ctx_r14.nzItemRender)("nzShowQuickJumper", ctx_r14.nzShowQuickJumper)("nzHideOnSinglePage", ctx_r14.nzHideOnSinglePage)("nzShowTotal", ctx_r14.nzShowTotal)("nzSize", ctx_r14.nzPaginationType === "small" ? "small" : ctx_r14.nzSize === "default" ? "default" : "small")("nzPageSize", ctx_r14.nzPageSize)("nzTotal", ctx_r14.nzTotal)("nzSimple", ctx_r14.nzSimple)("nzPageIndex", ctx_r14.nzPageIndex);
        }
      }

      function NzTableComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NzTableComponent_ng_template_10_nz_pagination_0_Template, 1, 12, "nz-pagination", 15);
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r9.nzShowPagination && ctx_r9.data.length);
        }
      }

      function NzTableComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
        }
      }

      function NzTbodyComponent_ng_container_0_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("listOfAutoWidth", function NzTbodyComponent_ng_container_0_tr_1_Template_tr_listOfAutoWidth_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r4.onListOfAutoWidthChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var listOfMeasureColumn_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("listOfMeasureColumn", listOfMeasureColumn_r2);
        }
      }

      function NzTbodyComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTbodyComponent_ng_container_0_tr_1_Template, 1, 1, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var listOfMeasureColumn_r2 = ctx.ngIf;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.isInsideTable && listOfMeasureColumn_r2.length);
        }
      }

      function NzTbodyComponent_tr_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "nz-embed-empty", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("specificContent", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r1.noResult$));
        }
      }

      var _c12 = ["contentTemplate"];

      function NzTheadComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
        }
      }

      function NzTheadComponent_ng_container_2_ng_template_1_Template(rf, ctx) {}

      function NzTheadComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTheadComponent_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r0);
        }
      }

      function NzTableTitleFooterComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.title);
        }
      }

      function NzTableTitleFooterComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.footer);
        }
      }

      var _c13 = ["nz-table-measure-row", ""];

      function NzTrMeasureComponent_td_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "td", 1, 2);
        }
      }

      var NzFilterTriggerComponent = /*#__PURE__*/function () {
        function NzFilterTriggerComponent(cdr, elementRef) {
          _classCallCheck(this, NzFilterTriggerComponent);

          this.cdr = cdr;
          this.elementRef = elementRef;
          this.nzActive = false;
          this.nzVisible = false;
          this.nzHasBackdrop = false;
          this.nzVisibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](); // TODO: move to host after View Engine deprecation

          this.elementRef.nativeElement.classList.add('ant-table-filter-trigger-container');
        }

        _createClass(NzFilterTriggerComponent, [{
          key: "onVisibleChange",
          value: function onVisibleChange(visible) {
            this.nzVisible = visible;
            this.nzVisibleChange.next(visible);
          }
        }, {
          key: "onFilterClick",
          value: function onFilterClick($event) {
            $event.stopPropagation();
          }
        }, {
          key: "hide",
          value: function hide() {
            this.nzVisible = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "show",
          value: function show() {
            this.nzVisible = true;
            this.cdr.markForCheck();
          }
        }]);

        return NzFilterTriggerComponent;
      }();

      NzFilterTriggerComponent.ɵfac = function NzFilterTriggerComponent_Factory(t) {
        return new (t || NzFilterTriggerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]));
      };

      NzFilterTriggerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: NzFilterTriggerComponent,
        selectors: [["nz-filter-trigger"]],
        hostVars: 2,
        hostBindings: function NzFilterTriggerComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-table-filter-trigger-container-open", ctx.nzVisible);
          }
        },
        inputs: {
          nzActive: "nzActive",
          nzVisible: "nzVisible",
          nzHasBackdrop: "nzHasBackdrop",
          nzDropdownMenu: "nzDropdownMenu"
        },
        outputs: {
          nzVisibleChange: "nzVisibleChange"
        },
        exportAs: ["nzFilterTrigger"],
        ngContentSelectors: _c0,
        decls: 2,
        vars: 8,
        consts: [["nz-dropdown", "", "nzTrigger", "click", "nzPlacement", "bottomRight", 1, "ant-table-filter-trigger", 3, "nzHasBackdrop", "nzClickHide", "nzDropdownMenu", "nzVisible", "nzVisibleChange", "click"]],
        template: function NzFilterTriggerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzVisibleChange", function NzFilterTriggerComponent_Template_span_nzVisibleChange_0_listener($event) {
              return ctx.onVisibleChange($event);
            })("click", function NzFilterTriggerComponent_Template_span_click_0_listener($event) {
              return ctx.onFilterClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.nzActive)("ant-table-filter-open", ctx.nzVisible);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzHasBackdrop", ctx.nzHasBackdrop)("nzClickHide", false)("nzDropdownMenu", ctx.nzDropdownMenu)("nzVisible", ctx.nzVisible);
          }
        },
        directives: [ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropDownDirective"]],
        encapsulation: 2,
        changeDetection: 0
      });

      NzFilterTriggerComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }];
      };

      NzFilterTriggerComponent.propDecorators = {
        nzActive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzDropdownMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzVisible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzHasBackdrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzVisibleChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }]
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var NzTableFilterComponent = /*#__PURE__*/function () {
        function NzTableFilterComponent(cdr, i18n, elementRef) {
          _classCallCheck(this, NzTableFilterComponent);

          this.cdr = cdr;
          this.i18n = i18n;
          this.elementRef = elementRef;
          this.contentTemplate = null;
          this.customFilter = false;
          this.extraTemplate = null;
          this.filterMultiple = true;
          this.listOfFilter = [];
          this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["Subject"]();
          this.isChecked = false;
          this.isVisible = false;
          this.listOfParsedFilter = [];
          this.listOfChecked = []; // TODO: move to host after View Engine deprecation

          this.elementRef.nativeElement.classList.add('ant-table-filter-column');
        }

        _createClass(NzTableFilterComponent, [{
          key: "trackByValue",
          value: function trackByValue(_, item) {
            return item.value;
          }
        }, {
          key: "check",
          value: function check(filter) {
            if (this.filterMultiple) {
              this.listOfParsedFilter = this.listOfParsedFilter.map(function (item) {
                if (item === filter) {
                  return Object.assign(Object.assign({}, item), {
                    checked: !filter.checked
                  });
                } else {
                  return item;
                }
              });
              filter.checked = !filter.checked;
            } else {
              this.listOfParsedFilter = this.listOfParsedFilter.map(function (item) {
                return Object.assign(Object.assign({}, item), {
                  checked: item === filter
                });
              });
            }

            this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
          }
        }, {
          key: "confirm",
          value: function confirm() {
            this.isVisible = false;
            this.emitFilterData();
          }
        }, {
          key: "reset",
          value: function reset() {
            this.isVisible = false;
            this.listOfParsedFilter = this.parseListOfFilter(this.listOfFilter, true);
            this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
            this.emitFilterData();
          }
        }, {
          key: "onVisibleChange",
          value: function onVisibleChange(value) {
            this.isVisible = value;

            if (!value) {
              this.emitFilterData();
            } else {
              this.listOfChecked = this.listOfParsedFilter.filter(function (item) {
                return item.checked;
              }).map(function (item) {
                return item.value;
              });
            }
          }
        }, {
          key: "emitFilterData",
          value: function emitFilterData() {
            var listOfChecked = this.listOfParsedFilter.filter(function (item) {
              return item.checked;
            }).map(function (item) {
              return item.value;
            });

            if (!Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_18__["arraysEqual"])(this.listOfChecked, listOfChecked)) {
              if (this.filterMultiple) {
                this.filterChange.emit(listOfChecked);
              } else {
                this.filterChange.emit(listOfChecked.length > 0 ? listOfChecked[0] : null);
              }
            }
          }
        }, {
          key: "parseListOfFilter",
          value: function parseListOfFilter(listOfFilter, reset) {
            return listOfFilter.map(function (item) {
              var checked = reset ? false : !!item.byDefault;
              return {
                text: item.text,
                value: item.value,
                checked: checked
              };
            });
          }
        }, {
          key: "getCheckedStatus",
          value: function getCheckedStatus(listOfParsedFilter) {
            return listOfParsedFilter.some(function (item) {
              return item.checked;
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.i18n.localeChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$)).subscribe(function () {
              _this15.locale = _this15.i18n.getLocaleData('Table');

              _this15.cdr.markForCheck();
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var listOfFilter = changes.listOfFilter;

            if (listOfFilter && this.listOfFilter && this.listOfFilter.length) {
              this.listOfParsedFilter = this.parseListOfFilter(this.listOfFilter);
              this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }]);

        return NzTableFilterComponent;
      }();

      NzTableFilterComponent.ɵfac = function NzTableFilterComponent_Factory(t) {
        return new (t || NzTableFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]));
      };

      NzTableFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: NzTableFilterComponent,
        selectors: [["nz-table-filter"]],
        inputs: {
          contentTemplate: "contentTemplate",
          customFilter: "customFilter",
          extraTemplate: "extraTemplate",
          filterMultiple: "filterMultiple",
          listOfFilter: "listOfFilter"
        },
        outputs: {
          filterChange: "filterChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        decls: 3,
        vars: 3,
        consts: [[1, "ant-table-filter-column-title"], [3, "ngTemplateOutlet"], [4, "ngIf", "ngIfElse"], [3, "nzVisible", "nzActive", "nzDropdownMenu", "nzVisibleChange"], ["nz-icon", "", "nzType", "filter", "nzTheme", "fill"], ["filterMenu", "nzDropdownMenu"], [1, "ant-table-filter-dropdown"], ["nz-menu", ""], ["nz-menu-item", "", 3, "nzSelected", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-table-filter-dropdown-btns"], ["nz-button", "", "nzType", "link", "nzSize", "small", 3, "disabled", "click"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 3, "click"], ["nz-menu-item", "", 3, "nzSelected", "click"], ["nz-radio", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["nz-radio", "", 3, "ngModel", "ngModelChange"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange"]],
        template: function NzTableFilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTableFilterComponent_ng_template_1_Template, 0, 0, "ng-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NzTableFilterComponent_ng_container_2_Template, 13, 8, "ng-container", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.customFilter)("ngIfElse", ctx.extraTemplate);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], NzFilterTriggerComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_24__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_14__["NzMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_25__["NzWaveDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_14__["NzMenuItemDirective"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__["NzRadioComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_7__["NzCheckboxComponent"]],
        encapsulation: 2,
        changeDetection: 0
      });

      NzTableFilterComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }];
      };

      NzTableFilterComponent.propDecorators = {
        contentTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        customFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        extraTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        filterMultiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        listOfFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        filterChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }]
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var NzRowExpandButtonDirective = /*#__PURE__*/function () {
        function NzRowExpandButtonDirective(elementRef) {
          _classCallCheck(this, NzRowExpandButtonDirective);

          this.elementRef = elementRef;
          this.expand = false;
          this.spaceMode = false;
          this.expandChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](); // TODO: move to host after View Engine deprecation

          this.elementRef.nativeElement.classList.add('ant-table-row-expand-icon');
        }

        _createClass(NzRowExpandButtonDirective, [{
          key: "onHostClick",
          value: function onHostClick() {
            if (!this.spaceMode) {
              this.expand = !this.expand;
              this.expandChange.next(this.expand);
            }
          }
        }]);

        return NzRowExpandButtonDirective;
      }();

      NzRowExpandButtonDirective.ɵfac = function NzRowExpandButtonDirective_Factory(t) {
        return new (t || NzRowExpandButtonDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]));
      };

      NzRowExpandButtonDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: NzRowExpandButtonDirective,
        selectors: [["button", "nz-row-expand-button", ""]],
        hostVars: 7,
        hostBindings: function NzRowExpandButtonDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NzRowExpandButtonDirective_click_HostBindingHandler() {
              return ctx.onHostClick();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵhostProperty"]("type", "button");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-table-row-expand-icon-expanded", !ctx.spaceMode && ctx.expand === true)("ant-table-row-expand-icon-collapsed", !ctx.spaceMode && ctx.expand === false)("ant-table-row-expand-icon-spaced", ctx.spaceMode);
          }
        },
        inputs: {
          expand: "expand",
          spaceMode: "spaceMode"
        },
        outputs: {
          expandChange: "expandChange"
        }
      });

      NzRowExpandButtonDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }];
      };

      NzRowExpandButtonDirective.propDecorators = {
        expand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        spaceMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        expandChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }]
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var NzRowIndentDirective = /*#__PURE__*/_createClass(function NzRowIndentDirective(elementRef) {
        _classCallCheck(this, NzRowIndentDirective);

        this.elementRef = elementRef;
        this.indentSize = 0; // TODO: move to host after View Engine deprecation

        this.elementRef.nativeElement.classList.add('ant-table-row-indent');
      });

      NzRowIndentDirective.ɵfac = function NzRowIndentDirective_Factory(t) {
        return new (t || NzRowIndentDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]));
      };

      NzRowIndentDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: NzRowIndentDirective,
        selectors: [["nz-row-indent"]],
        hostVars: 2,
        hostBindings: function NzRowIndentDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("padding-left", ctx.indentSize, "px");
          }
        },
        inputs: {
          indentSize: "indentSize"
        }
      });

      NzRowIndentDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }];
      };

      NzRowIndentDirective.propDecorators = {
        indentSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var NzTableSelectionComponent = /*#__PURE__*/function () {
        function NzTableSelectionComponent(elementRef) {
          _classCallCheck(this, NzTableSelectionComponent);

          this.elementRef = elementRef;
          this.listOfSelections = [];
          this.checked = false;
          this.disabled = false;
          this.indeterminate = false;
          this.showCheckbox = false;
          this.showRowSelection = false;
          this.checkedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](); // TODO: move to host after View Engine deprecation

          this.elementRef.nativeElement.classList.add('ant-table-selection');
        }

        _createClass(NzTableSelectionComponent, [{
          key: "onCheckedChange",
          value: function onCheckedChange(checked) {
            this.checked = checked;
            this.checkedChange.emit(checked);
          }
        }]);

        return NzTableSelectionComponent;
      }();

      NzTableSelectionComponent.ɵfac = function NzTableSelectionComponent_Factory(t) {
        return new (t || NzTableSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]));
      };

      NzTableSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: NzTableSelectionComponent,
        selectors: [["nz-table-selection"]],
        inputs: {
          listOfSelections: "listOfSelections",
          checked: "checked",
          disabled: "disabled",
          indeterminate: "indeterminate",
          showCheckbox: "showCheckbox",
          showRowSelection: "showRowSelection"
        },
        outputs: {
          checkedChange: "checkedChange"
        },
        decls: 2,
        vars: 2,
        consts: [["nz-checkbox", "", 3, "ant-table-selection-select-all-custom", "ngModel", "nzDisabled", "nzIndeterminate", "ngModelChange", 4, "ngIf"], ["class", "ant-table-selection-extra", 4, "ngIf"], ["nz-checkbox", "", 3, "ngModel", "nzDisabled", "nzIndeterminate", "ngModelChange"], [1, "ant-table-selection-extra"], ["nz-dropdown", "", "nzPlacement", "bottomLeft", 1, "ant-table-selection-down", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["selectionMenu", "nzDropdownMenu"], ["nz-menu", "", 1, "ant-table-selection-menu"], ["nz-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["nz-menu-item", "", 3, "click"]],
        template: function NzTableSelectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NzTableSelectionComponent_label_0_Template, 1, 5, "label", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTableSelectionComponent_div_1_Template, 7, 2, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showCheckbox);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showRowSelection);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_7__["NzCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropDownDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_24__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_14__["NzMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_14__["NzMenuItemDirective"]],
        encapsulation: 2,
        changeDetection: 0
      });

      NzTableSelectionComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }];
      };

      NzTableSelectionComponent.propDecorators = {
        listOfSelections: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        checked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        indeterminate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        showCheckbox: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        showRowSelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        checkedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }]
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var NzTableSortersComponent = /*#__PURE__*/function () {
        function NzTableSortersComponent(elementRef) {
          _classCallCheck(this, NzTableSortersComponent);

          this.elementRef = elementRef;
          this.sortDirections = ['ascend', 'descend', null];
          this.sortOrder = null;
          this.contentTemplate = null;
          this.isUp = false;
          this.isDown = false; // TODO: move to host after View Engine deprecation

          this.elementRef.nativeElement.classList.add('ant-table-column-sorters');
        }

        _createClass(NzTableSortersComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var sortDirections = changes.sortDirections;

            if (sortDirections) {
              this.isUp = this.sortDirections.indexOf('ascend') !== -1;
              this.isDown = this.sortDirections.indexOf('descend') !== -1;
            }
          }
        }]);

        return NzTableSortersComponent;
      }();

      NzTableSortersComponent.ɵfac = function NzTableSortersComponent_Factory(t) {
        return new (t || NzTableSortersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]));
      };

      NzTableSortersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: NzTableSortersComponent,
        selectors: [["nz-table-sorters"]],
        inputs: {
          sortDirections: "sortDirections",
          sortOrder: "sortOrder",
          contentTemplate: "contentTemplate"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        decls: 6,
        vars: 5,
        consts: [[3, "ngTemplateOutlet"], [1, "ant-table-column-sorter"], [1, "ant-table-column-sorter-inner"], ["nz-icon", "", "nzType", "caret-up", "class", "ant-table-column-sorter-up", 3, "active", 4, "ngIf"], ["nz-icon", "", "nzType", "caret-down", "class", "ant-table-column-sorter-down", 3, "active", 4, "ngIf"], ["nz-icon", "", "nzType", "caret-up", 1, "ant-table-column-sorter-up"], ["nz-icon", "", "nzType", "caret-down", 1, "ant-table-column-sorter-down"]],
        template: function NzTableSortersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTableSortersComponent_ng_template_1_Template, 0, 0, "ng-template", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, NzTableSortersComponent_i_4_Template, 1, 2, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, NzTableSortersComponent_i_5_Template, 1, 2, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-table-column-sorter-full", ctx.isDown && ctx.isUp);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isUp);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isDown);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_24__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconDirective"]],
        encapsulation: 2,
        changeDetection: 0
      });

      NzTableSortersComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }];
      };

      NzTableSortersComponent.propDecorators = {
        sortDirections: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        sortOrder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        contentTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var NzCellFixedDirective = /*#__PURE__*/function () {
        function NzCellFixedDirective(renderer, elementRef) {
          _classCallCheck(this, NzCellFixedDirective);

          this.renderer = renderer;
          this.elementRef = elementRef;
          this.nzRight = false;
          this.nzLeft = false;
          this.colspan = null;
          this.colSpan = null;
          this.changes$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["Subject"]();
          this.isAutoLeft = false;
          this.isAutoRight = false;
          this.isFixedLeft = false;
          this.isFixedRight = false;
          this.isFixed = false;
        }

        _createClass(NzCellFixedDirective, [{
          key: "setAutoLeftWidth",
          value: function setAutoLeftWidth(autoLeft) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'left', autoLeft);
          }
        }, {
          key: "setAutoRightWidth",
          value: function setAutoRightWidth(autoRight) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'right', autoRight);
          }
        }, {
          key: "setIsFirstRight",
          value: function setIsFirstRight(isFirstRight) {
            this.setFixClass(isFirstRight, 'ant-table-cell-fix-right-first');
          }
        }, {
          key: "setIsLastLeft",
          value: function setIsLastLeft(isLastLeft) {
            this.setFixClass(isLastLeft, 'ant-table-cell-fix-left-last');
          }
        }, {
          key: "setFixClass",
          value: function setFixClass(flag, className) {
            // the setFixClass function may call many times, so remove it first.
            this.renderer.removeClass(this.elementRef.nativeElement, className);

            if (flag) {
              this.renderer.addClass(this.elementRef.nativeElement, className);
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.setIsFirstRight(false);
            this.setIsLastLeft(false);
            this.isAutoLeft = this.nzLeft === '' || this.nzLeft === true;
            this.isAutoRight = this.nzRight === '' || this.nzRight === true;
            this.isFixedLeft = this.nzLeft !== false;
            this.isFixedRight = this.nzRight !== false;
            this.isFixed = this.isFixedLeft || this.isFixedRight;

            var validatePx = function validatePx(value) {
              if (typeof value === 'string' && value !== '') {
                return value;
              } else {
                return null;
              }
            };

            this.setAutoLeftWidth(validatePx(this.nzLeft));
            this.setAutoRightWidth(validatePx(this.nzRight));
            this.changes$.next();
          }
        }]);

        return NzCellFixedDirective;
      }();

      NzCellFixedDirective.ɵfac = function NzCellFixedDirective_Factory(t) {
        return new (t || NzCellFixedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]));
      };

      NzCellFixedDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: NzCellFixedDirective,
        selectors: [["td", "nzRight", ""], ["th", "nzRight", ""], ["td", "nzLeft", ""], ["th", "nzLeft", ""]],
        hostVars: 6,
        hostBindings: function NzCellFixedDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("position", ctx.isFixed ? "sticky" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-table-cell-fix-right", ctx.isFixedRight)("ant-table-cell-fix-left", ctx.isFixedLeft);
          }
        },
        inputs: {
          nzRight: "nzRight",
          nzLeft: "nzLeft",
          colspan: "colspan",
          colSpan: "colSpan"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
      });

      NzCellFixedDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }];
      };

      NzCellFixedDirective.propDecorators = {
        nzRight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzLeft: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        colspan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        colSpan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var NzTableStyleService = /*#__PURE__*/function () {
        function NzTableStyleService() {
          _classCallCheck(this, NzTableStyleService);

          this.theadTemplate$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["ReplaySubject"](1);
          this.hasFixLeft$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["ReplaySubject"](1);
          this.hasFixRight$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["ReplaySubject"](1);
          this.hostWidth$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["ReplaySubject"](1);
          this.columnCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["ReplaySubject"](1);
          this.showEmpty$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["ReplaySubject"](1);
          this.noResult$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["ReplaySubject"](1);
          this.listOfThWidthConfigPx$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["BehaviorSubject"]([]);
          this.tableWidthConfigPx$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["BehaviorSubject"]([]);
          this.manualWidthConfigPx$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_19__["combineLatest"])([this.tableWidthConfigPx$, this.listOfThWidthConfigPx$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["map"])(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                widthConfig = _ref2[0],
                listOfWidth = _ref2[1];

            return widthConfig.length ? widthConfig : listOfWidth;
          }));
          this.listOfAutoWidthPx$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["ReplaySubject"](1);
          this.listOfListOfThWidthPx$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_19__["merge"])(
          /** init with manual width **/
          this.manualWidthConfigPx$, Object(rxjs__WEBPACK_IMPORTED_MODULE_19__["combineLatest"])([this.listOfAutoWidthPx$, this.manualWidthConfigPx$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["map"])(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                autoWidth = _ref4[0],
                manualWidth = _ref4[1];

            /** use autoWidth until column length match **/
            if (autoWidth.length === manualWidth.length) {
              return autoWidth.map(function (width, index) {
                if (width === '0px') {
                  return manualWidth[index] || null;
                } else {
                  return manualWidth[index] || width;
                }
              });
            } else {
              return manualWidth;
            }
          })));
          this.listOfMeasureColumn$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["ReplaySubject"](1);
          this.listOfListOfThWidth$ = this.listOfAutoWidthPx$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["map"])(function (list) {
            return list.map(function (width) {
              return parseInt(width, 10);
            });
          }));
          this.enableAutoMeasure$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["ReplaySubject"](1);
        }

        _createClass(NzTableStyleService, [{
          key: "setTheadTemplate",
          value: function setTheadTemplate(template) {
            this.theadTemplate$.next(template);
          }
        }, {
          key: "setHasFixLeft",
          value: function setHasFixLeft(hasFixLeft) {
            this.hasFixLeft$.next(hasFixLeft);
          }
        }, {
          key: "setHasFixRight",
          value: function setHasFixRight(hasFixRight) {
            this.hasFixRight$.next(hasFixRight);
          }
        }, {
          key: "setTableWidthConfig",
          value: function setTableWidthConfig(widthConfig) {
            this.tableWidthConfigPx$.next(widthConfig);
          }
        }, {
          key: "setListOfTh",
          value: function setListOfTh(listOfTh) {
            var columnCount = 0;
            listOfTh.forEach(function (th) {
              columnCount += th.colspan && +th.colspan || th.colSpan && +th.colSpan || 1;
            });
            var listOfThPx = listOfTh.map(function (item) {
              return item.nzWidth;
            });
            this.columnCount$.next(columnCount);
            this.listOfThWidthConfigPx$.next(listOfThPx);
          }
        }, {
          key: "setListOfMeasureColumn",
          value: function setListOfMeasureColumn(listOfTh) {
            var listOfKeys = [];
            listOfTh.forEach(function (th) {
              var length = th.colspan && +th.colspan || th.colSpan && +th.colSpan || 1;

              for (var i = 0; i < length; i++) {
                listOfKeys.push("measure_key_".concat(i));
              }
            });
            this.listOfMeasureColumn$.next(listOfKeys);
          }
        }, {
          key: "setListOfAutoWidth",
          value: function setListOfAutoWidth(listOfAutoWidth) {
            this.listOfAutoWidthPx$.next(listOfAutoWidth.map(function (width) {
              return "".concat(width, "px");
            }));
          }
        }, {
          key: "setShowEmpty",
          value: function setShowEmpty(showEmpty) {
            this.showEmpty$.next(showEmpty);
          }
        }, {
          key: "setNoResult",
          value: function setNoResult(noResult) {
            this.noResult$.next(noResult);
          }
        }, {
          key: "setScroll",
          value: function setScroll(scrollX, scrollY) {
            var enableAutoMeasure = !!(scrollX || scrollY);

            if (!enableAutoMeasure) {
              this.setListOfAutoWidth([]);
            }

            this.enableAutoMeasure$.next(enableAutoMeasure);
          }
        }]);

        return NzTableStyleService;
      }();

      NzTableStyleService.ɵfac = function NzTableStyleService_Factory(t) {
        return new (t || NzTableStyleService)();
      };

      NzTableStyleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: NzTableStyleService,
        factory: NzTableStyleService.ɵfac
      });

      NzTableStyleService.ctorParameters = function () {
        return [];
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzTableCellDirective = /*#__PURE__*/_createClass(function NzTableCellDirective(nzTableStyleService) {
        _classCallCheck(this, NzTableCellDirective);

        this.isInsideTable = false;
        this.isInsideTable = !!nzTableStyleService;
      });

      NzTableCellDirective.ɵfac = function NzTableCellDirective_Factory(t) {
        return new (t || NzTableCellDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](NzTableStyleService, 8));
      };

      NzTableCellDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: NzTableCellDirective,
        selectors: [["th", 9, "nz-disable-th", 3, "mat-cell", ""], ["td", 9, "nz-disable-td", 3, "mat-cell", ""]],
        hostVars: 2,
        hostBindings: function NzTableCellDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-table-cell", ctx.isInsideTable);
          }
        }
      });

      NzTableCellDirective.ctorParameters = function () {
        return [{
          type: NzTableStyleService,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }];
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzTdAddOnComponent = /*#__PURE__*/function () {
        function NzTdAddOnComponent() {
          _classCallCheck(this, NzTdAddOnComponent);

          this.nzChecked = false;
          this.nzDisabled = false;
          this.nzIndeterminate = false;
          this.nzIndentSize = 0;
          this.nzShowExpand = false;
          this.nzShowCheckbox = false;
          this.nzExpand = false;
          this.nzCheckedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          this.nzExpandChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          this.isNzShowExpandChanged = false;
          this.isNzShowCheckboxChanged = false;
        }

        _createClass(NzTdAddOnComponent, [{
          key: "onCheckedChange",
          value: function onCheckedChange(checked) {
            this.nzChecked = checked;
            this.nzCheckedChange.emit(checked);
          }
        }, {
          key: "onExpandChange",
          value: function onExpandChange(expand) {
            this.nzExpand = expand;
            this.nzExpandChange.emit(expand);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var isFirstChange = function isFirstChange(value) {
              return value && value.firstChange && value.currentValue !== undefined;
            };

            var nzExpand = changes.nzExpand,
                nzChecked = changes.nzChecked,
                nzShowExpand = changes.nzShowExpand,
                nzShowCheckbox = changes.nzShowCheckbox;

            if (nzShowExpand) {
              this.isNzShowExpandChanged = true;
            }

            if (nzShowCheckbox) {
              this.isNzShowCheckboxChanged = true;
            }

            if (isFirstChange(nzExpand) && !this.isNzShowExpandChanged) {
              this.nzShowExpand = true;
            }

            if (isFirstChange(nzChecked) && !this.isNzShowCheckboxChanged) {
              this.nzShowCheckbox = true;
            }
          }
        }]);

        return NzTdAddOnComponent;
      }();

      NzTdAddOnComponent.ɵfac = function NzTdAddOnComponent_Factory(t) {
        return new (t || NzTdAddOnComponent)();
      };

      NzTdAddOnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: NzTdAddOnComponent,
        selectors: [["td", "nzChecked", ""], ["td", "nzDisabled", ""], ["td", "nzIndeterminate", ""], ["td", "nzIndentSize", ""], ["td", "nzExpand", ""], ["td", "nzShowExpand", ""], ["td", "nzShowCheckbox", ""]],
        hostVars: 4,
        hostBindings: function NzTdAddOnComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-table-cell-with-append", ctx.nzShowExpand || ctx.nzIndentSize > 0)("ant-table-selection-column", ctx.nzShowCheckbox);
          }
        },
        inputs: {
          nzChecked: "nzChecked",
          nzDisabled: "nzDisabled",
          nzIndeterminate: "nzIndeterminate",
          nzIndentSize: "nzIndentSize",
          nzShowExpand: "nzShowExpand",
          nzShowCheckbox: "nzShowCheckbox",
          nzExpand: "nzExpand"
        },
        outputs: {
          nzCheckedChange: "nzCheckedChange",
          nzExpandChange: "nzExpandChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        attrs: _c1,
        ngContentSelectors: _c0,
        decls: 3,
        vars: 2,
        consts: [[4, "ngIf"], ["nz-checkbox", "", 3, "nzDisabled", "ngModel", "nzIndeterminate", "ngModelChange", 4, "ngIf"], [3, "indentSize"], ["nz-row-expand-button", "", 3, "expand", "spaceMode", "expandChange"], ["nz-checkbox", "", 3, "nzDisabled", "ngModel", "nzIndeterminate", "ngModelChange"]],
        template: function NzTdAddOnComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NzTdAddOnComponent_ng_container_0_Template, 3, 3, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTdAddOnComponent_label_1_Template, 1, 3, "label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nzShowExpand || ctx.nzIndentSize > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nzShowCheckbox);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], NzRowIndentDirective, NzRowExpandButtonDirective, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_7__["NzCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
        encapsulation: 2,
        changeDetection: 0
      });
      NzTdAddOnComponent.propDecorators = {
        nzChecked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzIndeterminate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzIndentSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzShowExpand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzShowCheckbox: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzExpand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzCheckedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        nzExpandChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }]
      };
      Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_18__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__metadata"])("design:type", Object)], NzTdAddOnComponent.prototype, "nzShowExpand", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_18__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__metadata"])("design:type", Object)], NzTdAddOnComponent.prototype, "nzShowCheckbox", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_18__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__metadata"])("design:type", Object)], NzTdAddOnComponent.prototype, "nzExpand", void 0);

      var NzThAddOnComponent = /*#__PURE__*/function () {
        function NzThAddOnComponent(cdr) {
          _classCallCheck(this, NzThAddOnComponent);

          this.cdr = cdr;
          this.manualClickOrder$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["Subject"]();
          this.calcOperatorChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["Subject"]();
          this.nzFilterValue = null;
          this.sortOrder = null;
          this.sortDirections = ['ascend', 'descend', null];
          this.sortOrderChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["Subject"]();
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["Subject"]();
          this.isNzShowSortChanged = false;
          this.isNzShowFilterChanged = false;
          this.nzFilterMultiple = true;
          this.nzSortOrder = null;
          this.nzSortPriority = false;
          this.nzSortDirections = ['ascend', 'descend', null];
          this.nzFilters = [];
          this.nzSortFn = null;
          this.nzFilterFn = null;
          this.nzShowSort = false;
          this.nzShowFilter = false;
          this.nzCustomFilter = false;
          this.nzCheckedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          this.nzSortOrderChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          this.nzFilterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        }

        _createClass(NzThAddOnComponent, [{
          key: "getNextSortDirection",
          value: function getNextSortDirection(sortDirections, current) {
            var index = sortDirections.indexOf(current);

            if (index === sortDirections.length - 1) {
              return sortDirections[0];
            } else {
              return sortDirections[index + 1];
            }
          }
        }, {
          key: "emitNextSortValue",
          value: function emitNextSortValue() {
            if (this.nzShowSort) {
              var nextOrder = this.getNextSortDirection(this.sortDirections, this.sortOrder);
              this.setSortOrder(nextOrder);
              this.manualClickOrder$.next(this);
            }
          }
        }, {
          key: "setSortOrder",
          value: function setSortOrder(order) {
            this.sortOrderChange$.next(order);
          }
        }, {
          key: "clearSortOrder",
          value: function clearSortOrder() {
            if (this.sortOrder !== null) {
              this.setSortOrder(null);
            }
          }
        }, {
          key: "onFilterValueChange",
          value: function onFilterValueChange(value) {
            this.nzFilterChange.emit(value);
            this.nzFilterValue = value;
            this.updateCalcOperator();
          }
        }, {
          key: "updateCalcOperator",
          value: function updateCalcOperator() {
            this.calcOperatorChange$.next();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.sortOrderChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$)).subscribe(function (order) {
              if (_this16.sortOrder !== order) {
                _this16.sortOrder = order;

                _this16.nzSortOrderChange.emit(order);
              }

              _this16.updateCalcOperator();

              _this16.cdr.markForCheck();
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var nzSortDirections = changes.nzSortDirections,
                nzFilters = changes.nzFilters,
                nzSortOrder = changes.nzSortOrder,
                nzSortFn = changes.nzSortFn,
                nzFilterFn = changes.nzFilterFn,
                nzSortPriority = changes.nzSortPriority,
                nzFilterMultiple = changes.nzFilterMultiple,
                nzShowSort = changes.nzShowSort,
                nzShowFilter = changes.nzShowFilter;

            if (nzSortDirections) {
              if (this.nzSortDirections && this.nzSortDirections.length) {
                this.sortDirections = this.nzSortDirections;
              }
            }

            if (nzSortOrder) {
              this.sortOrder = this.nzSortOrder;
              this.setSortOrder(this.nzSortOrder);
            }

            if (nzShowSort) {
              this.isNzShowSortChanged = true;
            }

            if (nzShowFilter) {
              this.isNzShowFilterChanged = true;
            }

            var isFirstChange = function isFirstChange(value) {
              return value && value.firstChange && value.currentValue !== undefined;
            };

            if ((isFirstChange(nzSortOrder) || isFirstChange(nzSortFn)) && !this.isNzShowSortChanged) {
              this.nzShowSort = true;
            }

            if (isFirstChange(nzFilters) && !this.isNzShowFilterChanged) {
              this.nzShowFilter = true;
            }

            if ((nzFilters || nzFilterMultiple) && this.nzShowFilter) {
              var listOfValue = this.nzFilters.filter(function (item) {
                return item.byDefault;
              }).map(function (item) {
                return item.value;
              });
              this.nzFilterValue = this.nzFilterMultiple ? listOfValue : listOfValue[0] || null;
            }

            if (nzSortFn || nzFilterFn || nzSortPriority || nzFilters) {
              this.updateCalcOperator();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }]);

        return NzThAddOnComponent;
      }();

      NzThAddOnComponent.ɵfac = function NzThAddOnComponent_Factory(t) {
        return new (t || NzThAddOnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
      };

      NzThAddOnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: NzThAddOnComponent,
        selectors: [["th", "nzColumnKey", ""], ["th", "nzSortFn", ""], ["th", "nzSortOrder", ""], ["th", "nzFilters", ""], ["th", "nzShowSort", ""], ["th", "nzShowFilter", ""], ["th", "nzCustomFilter", ""]],
        hostVars: 4,
        hostBindings: function NzThAddOnComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NzThAddOnComponent_click_HostBindingHandler() {
              return ctx.emitNextSortValue();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-table-column-has-sorters", ctx.nzShowSort)("ant-table-column-sort", ctx.sortOrder === "descend" || ctx.sortOrder === "ascend");
          }
        },
        inputs: {
          nzFilterMultiple: "nzFilterMultiple",
          nzSortOrder: "nzSortOrder",
          nzSortPriority: "nzSortPriority",
          nzSortDirections: "nzSortDirections",
          nzFilters: "nzFilters",
          nzSortFn: "nzSortFn",
          nzFilterFn: "nzFilterFn",
          nzShowSort: "nzShowSort",
          nzShowFilter: "nzShowFilter",
          nzCustomFilter: "nzCustomFilter",
          nzColumnKey: "nzColumnKey"
        },
        outputs: {
          nzCheckedChange: "nzCheckedChange",
          nzSortOrderChange: "nzSortOrderChange",
          nzFilterChange: "nzFilterChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        attrs: _c2,
        ngContentSelectors: _c4,
        decls: 9,
        vars: 2,
        consts: [[3, "contentTemplate", "extraTemplate", "customFilter", "filterMultiple", "listOfFilter", "filterChange", 4, "ngIf", "ngIfElse"], ["notFilterTemplate", ""], ["extraTemplate", ""], ["sortTemplate", ""], ["contentTemplate", ""], [3, "contentTemplate", "extraTemplate", "customFilter", "filterMultiple", "listOfFilter", "filterChange"], [3, "ngTemplateOutlet"], [3, "sortOrder", "sortDirections", "contentTemplate"]],
        template: function NzThAddOnComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"](_c3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NzThAddOnComponent_nz_table_filter_0_Template, 1, 5, "nz-table-filter", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzThAddOnComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, NzThAddOnComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, NzThAddOnComponent_ng_template_5_Template, 1, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, NzThAddOnComponent_ng_template_7_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nzShowFilter || ctx.nzCustomFilter)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], NzTableFilterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], NzTableSortersComponent],
        encapsulation: 2,
        changeDetection: 0
      });

      NzThAddOnComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }];
      };

      NzThAddOnComponent.propDecorators = {
        nzColumnKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzFilterMultiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzSortOrder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzSortPriority: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzSortDirections: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzFilters: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzSortFn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzFilterFn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzShowSort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzShowFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzCustomFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzCheckedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        nzSortOrderChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        nzFilterChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }]
      };
      Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_18__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__metadata"])("design:type", Object)], NzThAddOnComponent.prototype, "nzShowSort", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_18__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__metadata"])("design:type", Object)], NzThAddOnComponent.prototype, "nzShowFilter", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_18__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__metadata"])("design:type", Object)], NzThAddOnComponent.prototype, "nzCustomFilter", void 0);
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var NzThMeasureDirective = /*#__PURE__*/function () {
        function NzThMeasureDirective(renderer, elementRef) {
          _classCallCheck(this, NzThMeasureDirective);

          this.renderer = renderer;
          this.elementRef = elementRef;
          this.changes$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["Subject"]();
          this.nzWidth = null;
          this.colspan = null;
          this.colSpan = null;
          this.rowspan = null;
          this.rowSpan = null;
        }

        _createClass(NzThMeasureDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var nzWidth = changes.nzWidth,
                colspan = changes.colspan,
                rowspan = changes.rowspan,
                colSpan = changes.colSpan,
                rowSpan = changes.rowSpan;

            if (colspan || colSpan) {
              var col = this.colspan || this.colSpan;

              if (!Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_18__["isNil"])(col)) {
                this.renderer.setAttribute(this.elementRef.nativeElement, 'colspan', "".concat(col));
              } else {
                this.renderer.removeAttribute(this.elementRef.nativeElement, 'colspan');
              }
            }

            if (rowspan || rowSpan) {
              var row = this.rowspan || this.rowSpan;

              if (!Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_18__["isNil"])(row)) {
                this.renderer.setAttribute(this.elementRef.nativeElement, 'rowspan', "".concat(row));
              } else {
                this.renderer.removeAttribute(this.elementRef.nativeElement, 'rowspan');
              }
            }

            if (nzWidth || colspan) {
              this.changes$.next();
            }
          }
        }]);

        return NzThMeasureDirective;
      }();

      NzThMeasureDirective.ɵfac = function NzThMeasureDirective_Factory(t) {
        return new (t || NzThMeasureDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]));
      };

      NzThMeasureDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: NzThMeasureDirective,
        selectors: [["th"]],
        inputs: {
          nzWidth: "nzWidth",
          colspan: "colspan",
          colSpan: "colSpan",
          rowspan: "rowspan",
          rowSpan: "rowSpan"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
      });

      NzThMeasureDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }];
      };

      NzThMeasureDirective.propDecorators = {
        nzWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        colspan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        colSpan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        rowspan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        rowSpan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };

      var NzThSelectionComponent = /*#__PURE__*/function () {
        function NzThSelectionComponent(elementRef) {
          _classCallCheck(this, NzThSelectionComponent);

          this.elementRef = elementRef;
          this.nzSelections = [];
          this.nzChecked = false;
          this.nzDisabled = false;
          this.nzIndeterminate = false;
          this.nzShowCheckbox = false;
          this.nzShowRowSelection = false;
          this.nzCheckedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          this.isNzShowExpandChanged = false;
          this.isNzShowCheckboxChanged = false; // TODO: move to host after View Engine deprecation

          this.elementRef.nativeElement.classList.add('ant-table-selection-column');
        }

        _createClass(NzThSelectionComponent, [{
          key: "onCheckedChange",
          value: function onCheckedChange(checked) {
            this.nzChecked = checked;
            this.nzCheckedChange.emit(checked);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var isFirstChange = function isFirstChange(value) {
              return value && value.firstChange && value.currentValue !== undefined;
            };

            var nzChecked = changes.nzChecked,
                nzSelections = changes.nzSelections,
                nzShowExpand = changes.nzShowExpand,
                nzShowCheckbox = changes.nzShowCheckbox;

            if (nzShowExpand) {
              this.isNzShowExpandChanged = true;
            }

            if (nzShowCheckbox) {
              this.isNzShowCheckboxChanged = true;
            }

            if (isFirstChange(nzSelections) && !this.isNzShowExpandChanged) {
              this.nzShowRowSelection = true;
            }

            if (isFirstChange(nzChecked) && !this.isNzShowCheckboxChanged) {
              this.nzShowCheckbox = true;
            }
          }
        }]);

        return NzThSelectionComponent;
      }();

      NzThSelectionComponent.ɵfac = function NzThSelectionComponent_Factory(t) {
        return new (t || NzThSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]));
      };

      NzThSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: NzThSelectionComponent,
        selectors: [["th", "nzSelections", ""], ["th", "nzChecked", ""], ["th", "nzShowCheckbox", ""], ["th", "nzShowRowSelection", ""]],
        inputs: {
          nzSelections: "nzSelections",
          nzChecked: "nzChecked",
          nzDisabled: "nzDisabled",
          nzIndeterminate: "nzIndeterminate",
          nzShowCheckbox: "nzShowCheckbox",
          nzShowRowSelection: "nzShowRowSelection"
        },
        outputs: {
          nzCheckedChange: "nzCheckedChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        attrs: _c5,
        ngContentSelectors: _c0,
        decls: 2,
        vars: 6,
        consts: [[3, "checked", "disabled", "indeterminate", "listOfSelections", "showCheckbox", "showRowSelection", "checkedChange"]],
        template: function NzThSelectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-table-selection", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("checkedChange", function NzThSelectionComponent_Template_nz_table_selection_checkedChange_0_listener($event) {
              return ctx.onCheckedChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.nzChecked)("disabled", ctx.nzDisabled)("indeterminate", ctx.nzIndeterminate)("listOfSelections", ctx.nzSelections)("showCheckbox", ctx.nzShowCheckbox)("showRowSelection", ctx.nzShowRowSelection);
          }
        },
        directives: [NzTableSelectionComponent],
        encapsulation: 2,
        changeDetection: 0
      });

      NzThSelectionComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }];
      };

      NzThSelectionComponent.propDecorators = {
        nzSelections: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzChecked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzIndeterminate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzShowCheckbox: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzShowRowSelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzCheckedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }]
      };
      Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_18__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__metadata"])("design:type", Object)], NzThSelectionComponent.prototype, "nzShowCheckbox", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_18__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__metadata"])("design:type", Object)], NzThSelectionComponent.prototype, "nzShowRowSelection", void 0);
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var NzCellAlignDirective = /*#__PURE__*/_createClass(function NzCellAlignDirective() {
        _classCallCheck(this, NzCellAlignDirective);

        this.nzAlign = null;
      });

      NzCellAlignDirective.ɵfac = function NzCellAlignDirective_Factory(t) {
        return new (t || NzCellAlignDirective)();
      };

      NzCellAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: NzCellAlignDirective,
        selectors: [["th", "nzAlign", ""], ["td", "nzAlign", ""]],
        hostVars: 2,
        hostBindings: function NzCellAlignDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("text-align", ctx.nzAlign);
          }
        },
        inputs: {
          nzAlign: "nzAlign"
        }
      });
      NzCellAlignDirective.propDecorators = {
        nzAlign: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var NzCellEllipsisDirective = /*#__PURE__*/_createClass(function NzCellEllipsisDirective() {
        _classCallCheck(this, NzCellEllipsisDirective);

        this.nzEllipsis = true;
      });

      NzCellEllipsisDirective.ɵfac = function NzCellEllipsisDirective_Factory(t) {
        return new (t || NzCellEllipsisDirective)();
      };

      NzCellEllipsisDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: NzCellEllipsisDirective,
        selectors: [["th", "nzEllipsis", ""], ["td", "nzEllipsis", ""]],
        hostVars: 2,
        hostBindings: function NzCellEllipsisDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-table-cell-ellipsis", ctx.nzEllipsis);
          }
        },
        inputs: {
          nzEllipsis: "nzEllipsis"
        }
      });
      NzCellEllipsisDirective.propDecorators = {
        nzEllipsis: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_18__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__metadata"])("design:type", Object)], NzCellEllipsisDirective.prototype, "nzEllipsis", void 0);
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var NzCellBreakWordDirective = /*#__PURE__*/_createClass(function NzCellBreakWordDirective() {
        _classCallCheck(this, NzCellBreakWordDirective);

        this.nzBreakWord = true;
      });

      NzCellBreakWordDirective.ɵfac = function NzCellBreakWordDirective_Factory(t) {
        return new (t || NzCellBreakWordDirective)();
      };

      NzCellBreakWordDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: NzCellBreakWordDirective,
        selectors: [["th", "nzBreakWord", ""], ["td", "nzBreakWord", ""]],
        hostVars: 2,
        hostBindings: function NzCellBreakWordDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("word-break", ctx.nzBreakWord ? "break-all" : "");
          }
        },
        inputs: {
          nzBreakWord: "nzBreakWord"
        }
      });
      NzCellBreakWordDirective.propDecorators = {
        nzBreakWord: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_18__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__metadata"])("design:type", Object)], NzCellBreakWordDirective.prototype, "nzBreakWord", void 0);
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var NzTableContentComponent = /*#__PURE__*/_createClass(function NzTableContentComponent() {
        _classCallCheck(this, NzTableContentComponent);

        this.tableLayout = 'auto';
        this.theadTemplate = null;
        this.contentTemplate = null;
        this.listOfColWidth = [];
        this.scrollX = null;
      });

      NzTableContentComponent.ɵfac = function NzTableContentComponent_Factory(t) {
        return new (t || NzTableContentComponent)();
      };

      NzTableContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: NzTableContentComponent,
        selectors: [["table", "nz-table-content", ""]],
        hostVars: 8,
        hostBindings: function NzTableContentComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("table-layout", ctx.tableLayout)("width", ctx.scrollX)("min-width", ctx.scrollX ? "100%" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-table-fixed", ctx.scrollX);
          }
        },
        inputs: {
          tableLayout: "tableLayout",
          theadTemplate: "theadTemplate",
          contentTemplate: "contentTemplate",
          listOfColWidth: "listOfColWidth",
          scrollX: "scrollX"
        },
        attrs: _c6,
        ngContentSelectors: _c0,
        decls: 4,
        vars: 3,
        consts: [[3, "width", "minWidth", 4, "ngFor", "ngForOf"], ["class", "ant-table-thead", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "ant-table-thead"]],
        template: function NzTableContentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NzTableContentComponent_col_0_Template, 1, 4, "col", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTableContentComponent_thead_1_Template, 2, 1, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NzTableContentComponent_ng_template_2_Template, 0, 0, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.listOfColWidth);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.theadTemplate);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]],
        encapsulation: 2,
        changeDetection: 0
      });
      NzTableContentComponent.propDecorators = {
        tableLayout: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        theadTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        contentTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        listOfColWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        scrollX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var NzTableFixedRowComponent = /*#__PURE__*/function () {
        function NzTableFixedRowComponent(nzTableStyleService, renderer) {
          _classCallCheck(this, NzTableFixedRowComponent);

          this.nzTableStyleService = nzTableStyleService;
          this.renderer = renderer;
          this.hostWidth$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["BehaviorSubject"](null);
          this.enableAutoMeasure$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["BehaviorSubject"](false);
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["Subject"]();
        }

        _createClass(NzTableFixedRowComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.nzTableStyleService) {
              var _this$nzTableStyleSer = this.nzTableStyleService,
                  enableAutoMeasure$ = _this$nzTableStyleSer.enableAutoMeasure$,
                  hostWidth$ = _this$nzTableStyleSer.hostWidth$;
              enableAutoMeasure$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$)).subscribe(this.enableAutoMeasure$);
              hostWidth$.subscribe(this.hostWidth$);
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this17 = this;

            this.nzTableStyleService.columnCount$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$)).subscribe(function (count) {
              _this17.renderer.setAttribute(_this17.tdElement.nativeElement, 'colspan', "".concat(count));
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }]);

        return NzTableFixedRowComponent;
      }();

      NzTableFixedRowComponent.ɵfac = function NzTableFixedRowComponent_Factory(t) {
        return new (t || NzTableFixedRowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](NzTableStyleService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]));
      };

      NzTableFixedRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: NzTableFixedRowComponent,
        selectors: [["tr", "nz-table-fixed-row", ""], ["tr", "nzExpand", ""]],
        viewQuery: function NzTableFixedRowComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c7, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.tdElement = _t.first);
          }
        },
        attrs: _c8,
        ngContentSelectors: _c0,
        decls: 6,
        vars: 4,
        consts: [[1, "nz-disable-td", "ant-table-cell"], ["tdElement", ""], ["class", "ant-table-expanded-row-fixed", "style", "position: sticky; left: 0px; overflow: hidden;", 3, "width", 4, "ngIf", "ngIfElse"], ["contentTemplate", ""], [1, "ant-table-expanded-row-fixed", 2, "position", "sticky", "left", "0px", "overflow", "hidden"], [3, "ngTemplateOutlet"]],
        template: function NzTableFixedRowComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NzTableFixedRowComponent_div_2_Template, 3, 5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, NzTableFixedRowComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, ctx.enableAutoMeasure$))("ngIfElse", _r2);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
        encapsulation: 2,
        changeDetection: 0
      });

      NzTableFixedRowComponent.ctorParameters = function () {
        return [{
          type: NzTableStyleService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
        }];
      };

      NzTableFixedRowComponent.propDecorators = {
        tdElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tdElement']
        }]
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var NzTableInnerDefaultComponent = /*#__PURE__*/_createClass(function NzTableInnerDefaultComponent(elementRef) {
        _classCallCheck(this, NzTableInnerDefaultComponent);

        this.elementRef = elementRef;
        this.tableLayout = 'auto';
        this.listOfColWidth = [];
        this.theadTemplate = null;
        this.contentTemplate = null; // TODO: move to host after View Engine deprecation

        this.elementRef.nativeElement.classList.add('ant-table-container');
      });

      NzTableInnerDefaultComponent.ɵfac = function NzTableInnerDefaultComponent_Factory(t) {
        return new (t || NzTableInnerDefaultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]));
      };

      NzTableInnerDefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: NzTableInnerDefaultComponent,
        selectors: [["nz-table-inner-default"]],
        inputs: {
          tableLayout: "tableLayout",
          listOfColWidth: "listOfColWidth",
          theadTemplate: "theadTemplate",
          contentTemplate: "contentTemplate"
        },
        decls: 2,
        vars: 4,
        consts: [[1, "ant-table-content"], ["nz-table-content", "", 3, "contentTemplate", "tableLayout", "listOfColWidth", "theadTemplate"]],
        template: function NzTableInnerDefaultComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("contentTemplate", ctx.contentTemplate)("tableLayout", ctx.tableLayout)("listOfColWidth", ctx.listOfColWidth)("theadTemplate", ctx.theadTemplate);
          }
        },
        directives: [NzTableContentComponent],
        encapsulation: 2,
        changeDetection: 0
      });

      NzTableInnerDefaultComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }];
      };

      NzTableInnerDefaultComponent.propDecorators = {
        tableLayout: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        listOfColWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        theadTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        contentTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var NzTableInnerScrollComponent = /*#__PURE__*/function () {
        function NzTableInnerScrollComponent(renderer, ngZone, platform, resizeService, elementRef) {
          _classCallCheck(this, NzTableInnerScrollComponent);

          this.renderer = renderer;
          this.ngZone = ngZone;
          this.platform = platform;
          this.resizeService = resizeService;
          this.elementRef = elementRef;
          this.data = [];
          this.scrollX = null;
          this.scrollY = null;
          this.contentTemplate = null;
          this.widthConfig = [];
          this.listOfColWidth = [];
          this.theadTemplate = null;
          this.virtualTemplate = null;
          this.virtualItemSize = 0;
          this.virtualMaxBufferPx = 200;
          this.virtualMinBufferPx = 100;

          this.virtualForTrackBy = function (index) {
            return index;
          };

          this.headerStyleMap = {};
          this.bodyStyleMap = {};
          this.verticalScrollBarWidth = 0;
          this.noDateVirtualHeight = '182px';
          this.data$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["Subject"]();
          this.scroll$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["Subject"]();
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["Subject"](); // TODO: move to host after View Engine deprecation

          this.elementRef.nativeElement.classList.add('ant-table-container');
        }

        _createClass(NzTableInnerScrollComponent, [{
          key: "setScrollPositionClassName",
          value: function setScrollPositionClassName() {
            var clear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var _this$tableBodyElemen = this.tableBodyElement.nativeElement,
                scrollWidth = _this$tableBodyElemen.scrollWidth,
                scrollLeft = _this$tableBodyElemen.scrollLeft,
                clientWidth = _this$tableBodyElemen.clientWidth;
            var leftClassName = 'ant-table-ping-left';
            var rightClassName = 'ant-table-ping-right';

            if (scrollWidth === clientWidth && scrollWidth !== 0 || clear) {
              this.renderer.removeClass(this.tableMainElement, leftClassName);
              this.renderer.removeClass(this.tableMainElement, rightClassName);
            } else if (scrollLeft === 0) {
              this.renderer.removeClass(this.tableMainElement, leftClassName);
              this.renderer.addClass(this.tableMainElement, rightClassName);
            } else if (scrollWidth === scrollLeft + clientWidth) {
              this.renderer.removeClass(this.tableMainElement, rightClassName);
              this.renderer.addClass(this.tableMainElement, leftClassName);
            } else {
              this.renderer.addClass(this.tableMainElement, leftClassName);
              this.renderer.addClass(this.tableMainElement, rightClassName);
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var scrollX = changes.scrollX,
                scrollY = changes.scrollY,
                data = changes.data;

            if (scrollX || scrollY) {
              var hasVerticalScrollBar = this.verticalScrollBarWidth !== 0;
              this.headerStyleMap = {
                overflowX: 'hidden',
                overflowY: this.scrollY && hasVerticalScrollBar ? 'scroll' : 'hidden'
              };
              this.bodyStyleMap = {
                overflowY: this.scrollY ? 'scroll' : 'hidden',
                overflowX: this.scrollX ? 'auto' : null,
                maxHeight: this.scrollY
              };
              this.scroll$.next();
            }

            if (data) {
              this.data$.next();
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this18 = this;

            if (this.platform.isBrowser) {
              this.ngZone.runOutsideAngular(function () {
                var scrollEvent$ = _this18.scroll$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["switchMap"])(function () {
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_19__["fromEvent"])(_this18.tableBodyElement.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["startWith"])(true));
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(_this18.destroy$));

                var resize$ = _this18.resizeService.subscribe().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(_this18.destroy$));

                var data$ = _this18.data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(_this18.destroy$));

                var setClassName$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_19__["merge"])(scrollEvent$, resize$, data$, _this18.scroll$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["startWith"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(_this18.destroy$));
                setClassName$.subscribe(function () {
                  return _this18.setScrollPositionClassName();
                });
                scrollEvent$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["filter"])(function () {
                  return !!_this18.scrollY;
                })).subscribe(function () {
                  return _this18.tableHeaderElement.nativeElement.scrollLeft = _this18.tableBodyElement.nativeElement.scrollLeft;
                });
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.setScrollPositionClassName(true);
            this.destroy$.next();
            this.destroy$.complete();
          }
        }]);

        return NzTableInnerScrollComponent;
      }();

      NzTableInnerScrollComponent.ɵfac = function NzTableInnerScrollComponent_Factory(t) {
        return new (t || NzTableInnerScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_22__["NzResizeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]));
      };

      NzTableInnerScrollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: NzTableInnerScrollComponent,
        selectors: [["nz-table-inner-scroll"]],
        viewQuery: function NzTableInnerScrollComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c9, true, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c10, true, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"], true, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.tableHeaderElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.tableBodyElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.cdkVirtualScrollViewport = _t.first);
          }
        },
        inputs: {
          data: "data",
          scrollX: "scrollX",
          scrollY: "scrollY",
          contentTemplate: "contentTemplate",
          widthConfig: "widthConfig",
          listOfColWidth: "listOfColWidth",
          theadTemplate: "theadTemplate",
          virtualTemplate: "virtualTemplate",
          virtualItemSize: "virtualItemSize",
          virtualMaxBufferPx: "virtualMaxBufferPx",
          virtualMinBufferPx: "virtualMinBufferPx",
          virtualForTrackBy: "virtualForTrackBy",
          verticalScrollBarWidth: "verticalScrollBarWidth",
          tableMainElement: "tableMainElement"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], ["class", "ant-table-content", 3, "ngStyle", 4, "ngIf"], [1, "ant-table-header", "nz-table-hide-scrollbar", 3, "ngStyle"], ["tableHeaderElement", ""], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth", "theadTemplate"], ["class", "ant-table-body", 3, "ngStyle", 4, "ngIf"], [3, "itemSize", "maxBufferPx", "minBufferPx", "height", 4, "ngIf"], [1, "ant-table-body", 3, "ngStyle"], ["tableBodyElement", ""], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth", "contentTemplate"], [3, "itemSize", "maxBufferPx", "minBufferPx"], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth"], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-table-content", 3, "ngStyle"], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth", "theadTemplate", "contentTemplate"]],
        template: function NzTableInnerScrollComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NzTableInnerScrollComponent_ng_container_0_Template, 6, 6, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTableInnerScrollComponent_div_1_Template, 3, 5, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.scrollY);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.scrollY);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], NzTableContentComponent, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkFixedSizeVirtualScroll"], NzTbodyComponent, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]];
        },
        encapsulation: 2,
        changeDetection: 0
      });

      NzTableInnerScrollComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]
        }, {
          type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_22__["NzResizeService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }];
      };

      NzTableInnerScrollComponent.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        scrollX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        scrollY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        contentTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        widthConfig: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        listOfColWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        theadTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        virtualTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        virtualItemSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        virtualMaxBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        virtualMinBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        tableMainElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        virtualForTrackBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        tableHeaderElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tableHeaderElement', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }]
        }],
        tableBodyElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tableBodyElement', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }]
        }],
        cdkVirtualScrollViewport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"], {
            read: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"]
          }]
        }],
        verticalScrollBarWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var NzTableVirtualScrollDirective = /*#__PURE__*/_createClass(function NzTableVirtualScrollDirective(templateRef) {
        _classCallCheck(this, NzTableVirtualScrollDirective);

        this.templateRef = templateRef;
      });

      NzTableVirtualScrollDirective.ɵfac = function NzTableVirtualScrollDirective_Factory(t) {
        return new (t || NzTableVirtualScrollDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]));
      };

      NzTableVirtualScrollDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: NzTableVirtualScrollDirective,
        selectors: [["", "nz-virtual-scroll", ""]],
        exportAs: ["nzVirtualScroll"]
      });

      NzTableVirtualScrollDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
        }];
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzTableDataService = /*#__PURE__*/function () {
        function NzTableDataService() {
          var _this19 = this;

          _classCallCheck(this, NzTableDataService);

          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["Subject"]();
          this.pageIndex$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["BehaviorSubject"](1);
          this.frontPagination$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["BehaviorSubject"](true);
          this.pageSize$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["BehaviorSubject"](10);
          this.listOfData$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["BehaviorSubject"]([]);
          this.pageIndexDistinct$ = this.pageIndex$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["distinctUntilChanged"])());
          this.pageSizeDistinct$ = this.pageSize$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["distinctUntilChanged"])());
          this.listOfCalcOperator$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["BehaviorSubject"]([]);
          this.queryParams$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_19__["combineLatest"])([this.pageIndexDistinct$, this.pageSizeDistinct$, this.listOfCalcOperator$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["debounceTime"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["map"])(function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 3),
                pageIndex = _ref6[0],
                pageSize = _ref6[1],
                listOfCalc = _ref6[2];

            return {
              pageIndex: pageIndex,
              pageSize: pageSize,
              sort: listOfCalc.filter(function (item) {
                return item.sortFn;
              }).map(function (item) {
                return {
                  key: item.key,
                  value: item.sortOrder
                };
              }),
              filter: listOfCalc.filter(function (item) {
                return item.filterFn;
              }).map(function (item) {
                return {
                  key: item.key,
                  value: item.filterValue
                };
              })
            };
          }));
          this.listOfDataAfterCalc$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_19__["combineLatest"])([this.listOfData$, this.listOfCalcOperator$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["map"])(function (_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2),
                listOfData = _ref8[0],
                listOfCalcOperator = _ref8[1];

            var listOfDataAfterCalc = _toConsumableArray(listOfData);

            var listOfFilterOperator = listOfCalcOperator.filter(function (item) {
              var filterValue = item.filterValue,
                  filterFn = item.filterFn;
              var isReset = filterValue === null || filterValue === undefined || Array.isArray(filterValue) && filterValue.length === 0;
              return !isReset && typeof filterFn === 'function';
            });

            var _iterator = _createForOfIteratorHelper(listOfFilterOperator),
                _step;

            try {
              var _loop = function _loop() {
                var item = _step.value;
                var filterFn = item.filterFn,
                    filterValue = item.filterValue;
                listOfDataAfterCalc = listOfDataAfterCalc.filter(function (data) {
                  return filterFn(filterValue, data);
                });
              };

              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            var listOfSortOperator = listOfCalcOperator.filter(function (item) {
              return item.sortOrder !== null && typeof item.sortFn === 'function';
            }).sort(function (a, b) {
              return +b.sortPriority - +a.sortPriority;
            });

            if (listOfCalcOperator.length) {
              listOfDataAfterCalc.sort(function (record1, record2) {
                var _iterator2 = _createForOfIteratorHelper(listOfSortOperator),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var item = _step2.value;
                    var sortFn = item.sortFn,
                        sortOrder = item.sortOrder;

                    if (sortFn && sortOrder) {
                      var compareResult = sortFn(record1, record2, sortOrder);

                      if (compareResult !== 0) {
                        return sortOrder === 'ascend' ? compareResult : -compareResult;
                      }
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }

                return 0;
              });
            }

            return listOfDataAfterCalc;
          }));
          this.listOfFrontEndCurrentPageData$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_19__["combineLatest"])([this.pageIndexDistinct$, this.pageSizeDistinct$, this.listOfDataAfterCalc$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["filter"])(function (value) {
            var _value = _slicedToArray(value, 3),
                pageIndex = _value[0],
                pageSize = _value[1],
                listOfData = _value[2];

            var maxPageIndex = Math.ceil(listOfData.length / pageSize) || 1;
            return pageIndex <= maxPageIndex;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["map"])(function (_ref9) {
            var _ref10 = _slicedToArray(_ref9, 3),
                pageIndex = _ref10[0],
                pageSize = _ref10[1],
                listOfData = _ref10[2];

            return listOfData.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
          }));
          this.listOfCurrentPageData$ = this.frontPagination$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["switchMap"])(function (pagination) {
            return pagination ? _this19.listOfFrontEndCurrentPageData$ : _this19.listOfDataAfterCalc$;
          }));
          this.total$ = this.frontPagination$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["switchMap"])(function (pagination) {
            return pagination ? _this19.listOfDataAfterCalc$ : _this19.listOfData$;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["map"])(function (list) {
            return list.length;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["distinctUntilChanged"])());
        }

        _createClass(NzTableDataService, [{
          key: "updatePageSize",
          value: function updatePageSize(size) {
            this.pageSize$.next(size);
          }
        }, {
          key: "updateFrontPagination",
          value: function updateFrontPagination(pagination) {
            this.frontPagination$.next(pagination);
          }
        }, {
          key: "updatePageIndex",
          value: function updatePageIndex(index) {
            this.pageIndex$.next(index);
          }
        }, {
          key: "updateListOfData",
          value: function updateListOfData(list) {
            this.listOfData$.next(list);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }]);

        return NzTableDataService;
      }();

      NzTableDataService.ɵfac = function NzTableDataService_Factory(t) {
        return new (t || NzTableDataService)();
      };

      NzTableDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: NzTableDataService,
        factory: NzTableDataService.ɵfac
      });

      NzTableDataService.ctorParameters = function () {
        return [];
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NZ_CONFIG_MODULE_NAME = 'table';

      var NzTableComponent = /*#__PURE__*/function () {
        function NzTableComponent(elementRef, nzResizeObserver, nzConfigService, cdr, nzTableStyleService, nzTableDataService, directionality) {
          var _this20 = this;

          _classCallCheck(this, NzTableComponent);

          this.elementRef = elementRef;
          this.nzResizeObserver = nzResizeObserver;
          this.nzConfigService = nzConfigService;
          this.cdr = cdr;
          this.nzTableStyleService = nzTableStyleService;
          this.nzTableDataService = nzTableDataService;
          this.directionality = directionality;
          this._nzModuleName = NZ_CONFIG_MODULE_NAME;
          this.nzTableLayout = 'auto';
          this.nzShowTotal = null;
          this.nzItemRender = null;
          this.nzTitle = null;
          this.nzFooter = null;
          this.nzNoResult = undefined;
          this.nzPageSizeOptions = [10, 20, 30, 40, 50];
          this.nzVirtualItemSize = 0;
          this.nzVirtualMaxBufferPx = 200;
          this.nzVirtualMinBufferPx = 100;

          this.nzVirtualForTrackBy = function (index) {
            return index;
          };

          this.nzLoadingDelay = 0;
          this.nzPageIndex = 1;
          this.nzPageSize = 10;
          this.nzTotal = 0;
          this.nzWidthConfig = [];
          this.nzData = [];
          this.nzPaginationPosition = 'bottom';
          this.nzScroll = {
            x: null,
            y: null
          };
          this.nzPaginationType = 'default';
          this.nzFrontPagination = true;
          this.nzTemplateMode = false;
          this.nzShowPagination = true;
          this.nzLoading = false;
          this.nzOuterBordered = false;
          this.nzLoadingIndicator = null;
          this.nzBordered = false;
          this.nzSize = 'default';
          this.nzShowSizeChanger = false;
          this.nzHideOnSinglePage = false;
          this.nzShowQuickJumper = false;
          this.nzSimple = false;
          this.nzPageSizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          this.nzPageIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          this.nzQueryParams = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          this.nzCurrentPageDataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** public data for ngFor tr */

          this.data = [];
          this.scrollX = null;
          this.scrollY = null;
          this.theadTemplate = null;
          this.listOfAutoColWidth = [];
          this.listOfManualColWidth = [];
          this.hasFixLeft = false;
          this.hasFixRight = false;
          this.showPagination = true;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["Subject"]();
          this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["BehaviorSubject"](false);
          this.templateMode$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["BehaviorSubject"](false);
          this.dir = 'ltr';
          this.verticalScrollBarWidth = 0; // TODO: move to host after View Engine deprecation

          this.elementRef.nativeElement.classList.add('ant-table-wrapper');
          this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$)).subscribe(function () {
            _this20.cdr.markForCheck();
          });
        }

        _createClass(NzTableComponent, [{
          key: "onPageSizeChange",
          value: function onPageSizeChange(size) {
            this.nzTableDataService.updatePageSize(size);
          }
        }, {
          key: "onPageIndexChange",
          value: function onPageIndexChange(index) {
            this.nzTableDataService.updatePageIndex(index);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this21 = this;

            var _a;

            var _this$nzTableDataServ = this.nzTableDataService,
                pageIndexDistinct$ = _this$nzTableDataServ.pageIndexDistinct$,
                pageSizeDistinct$ = _this$nzTableDataServ.pageSizeDistinct$,
                listOfCurrentPageData$ = _this$nzTableDataServ.listOfCurrentPageData$,
                total$ = _this$nzTableDataServ.total$,
                queryParams$ = _this$nzTableDataServ.queryParams$;
            var _this$nzTableStyleSer2 = this.nzTableStyleService,
                theadTemplate$ = _this$nzTableStyleSer2.theadTemplate$,
                hasFixLeft$ = _this$nzTableStyleSer2.hasFixLeft$,
                hasFixRight$ = _this$nzTableStyleSer2.hasFixRight$;
            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$)).subscribe(function (direction) {
              _this21.dir = direction;

              _this21.cdr.detectChanges();
            });
            queryParams$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$)).subscribe(this.nzQueryParams);
            pageIndexDistinct$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$)).subscribe(function (pageIndex) {
              if (pageIndex !== _this21.nzPageIndex) {
                _this21.nzPageIndex = pageIndex;

                _this21.nzPageIndexChange.next(pageIndex);
              }
            });
            pageSizeDistinct$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$)).subscribe(function (pageSize) {
              if (pageSize !== _this21.nzPageSize) {
                _this21.nzPageSize = pageSize;

                _this21.nzPageSizeChange.next(pageSize);
              }
            });
            total$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["filter"])(function () {
              return _this21.nzFrontPagination;
            })).subscribe(function (total) {
              if (total !== _this21.nzTotal) {
                _this21.nzTotal = total;

                _this21.cdr.markForCheck();
              }
            });
            listOfCurrentPageData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$)).subscribe(function (data) {
              _this21.data = data;

              _this21.nzCurrentPageDataChange.next(data);

              _this21.cdr.markForCheck();
            });
            theadTemplate$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$)).subscribe(function (theadTemplate) {
              _this21.theadTemplate = theadTemplate;

              _this21.cdr.markForCheck();
            });
            hasFixLeft$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$)).subscribe(function (hasFixLeft) {
              _this21.hasFixLeft = hasFixLeft;

              _this21.cdr.markForCheck();
            });
            hasFixRight$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$)).subscribe(function (hasFixRight) {
              _this21.hasFixRight = hasFixRight;

              _this21.cdr.markForCheck();
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_19__["combineLatest"])([total$, this.loading$, this.templateMode$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["map"])(function (_ref11) {
              var _ref12 = _slicedToArray(_ref11, 3),
                  total = _ref12[0],
                  loading = _ref12[1],
                  templateMode = _ref12[2];

              return total === 0 && !loading && !templateMode;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$)).subscribe(function (empty) {
              _this21.nzTableStyleService.setShowEmpty(empty);
            });
            this.verticalScrollBarWidth = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_18__["measureScrollbar"])('vertical');
            this.nzTableStyleService.listOfListOfThWidthPx$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$)).subscribe(function (listOfWidth) {
              _this21.listOfAutoColWidth = listOfWidth;

              _this21.cdr.markForCheck();
            });
            this.nzTableStyleService.manualWidthConfigPx$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$)).subscribe(function (listOfWidth) {
              _this21.listOfManualColWidth = listOfWidth;

              _this21.cdr.markForCheck();
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var nzScroll = changes.nzScroll,
                nzPageIndex = changes.nzPageIndex,
                nzPageSize = changes.nzPageSize,
                nzFrontPagination = changes.nzFrontPagination,
                nzData = changes.nzData,
                nzWidthConfig = changes.nzWidthConfig,
                nzNoResult = changes.nzNoResult,
                nzLoading = changes.nzLoading,
                nzTemplateMode = changes.nzTemplateMode;

            if (nzPageIndex) {
              this.nzTableDataService.updatePageIndex(this.nzPageIndex);
            }

            if (nzPageSize) {
              this.nzTableDataService.updatePageSize(this.nzPageSize);
            }

            if (nzData) {
              this.nzData = this.nzData || [];
              this.nzTableDataService.updateListOfData(this.nzData);
            }

            if (nzFrontPagination) {
              this.nzTableDataService.updateFrontPagination(this.nzFrontPagination);
            }

            if (nzScroll) {
              this.setScrollOnChanges();
            }

            if (nzWidthConfig) {
              this.nzTableStyleService.setTableWidthConfig(this.nzWidthConfig);
            }

            if (nzLoading) {
              this.loading$.next(this.nzLoading);
            }

            if (nzTemplateMode) {
              this.templateMode$.next(this.nzTemplateMode);
            }

            if (nzNoResult) {
              this.nzTableStyleService.setNoResult(this.nzNoResult);
            }

            this.updateShowPagination();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this22 = this;

            this.nzResizeObserver.observe(this.elementRef).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["map"])(function (_ref13) {
              var _ref14 = _slicedToArray(_ref13, 1),
                  entry = _ref14[0];

              var _entry$target$getBoun = entry.target.getBoundingClientRect(),
                  width = _entry$target$getBoun.width;

              var scrollBarWidth = _this22.scrollY ? _this22.verticalScrollBarWidth : 0;
              return Math.floor(width - scrollBarWidth);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$)).subscribe(this.nzTableStyleService.hostWidth$);

            if (this.nzTableInnerScrollComponent && this.nzTableInnerScrollComponent.cdkVirtualScrollViewport) {
              this.cdkVirtualScrollViewport = this.nzTableInnerScrollComponent.cdkVirtualScrollViewport;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }, {
          key: "setScrollOnChanges",
          value: function setScrollOnChanges() {
            this.scrollX = this.nzScroll && this.nzScroll.x || null;
            this.scrollY = this.nzScroll && this.nzScroll.y || null;
            this.nzTableStyleService.setScroll(this.scrollX, this.scrollY);
          }
        }, {
          key: "updateShowPagination",
          value: function updateShowPagination() {
            this.showPagination = this.nzHideOnSinglePage && this.nzData.length > this.nzPageSize || this.nzData.length > 0 && !this.nzHideOnSinglePage || !this.nzFrontPagination && this.nzTotal > this.nzPageSize;
          }
        }]);

        return NzTableComponent;
      }();

      NzTableComponent.ɵfac = function NzTableComponent_Factory(t) {
        return new (t || NzTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_9__["NzResizeObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](NzTableStyleService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](NzTableDataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], 8));
      };

      NzTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: NzTableComponent,
        selectors: [["nz-table"]],
        contentQueries: function NzTableComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, NzTableVirtualScrollDirective, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.nzVirtualScrollDirective = _t.first);
          }
        },
        viewQuery: function NzTableComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](NzTableInnerScrollComponent, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.nzTableInnerScrollComponent = _t.first);
          }
        },
        hostVars: 2,
        hostBindings: function NzTableComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-table-wrapper-rtl", ctx.dir === "rtl");
          }
        },
        inputs: {
          nzTableLayout: "nzTableLayout",
          nzShowTotal: "nzShowTotal",
          nzItemRender: "nzItemRender",
          nzTitle: "nzTitle",
          nzFooter: "nzFooter",
          nzNoResult: "nzNoResult",
          nzPageSizeOptions: "nzPageSizeOptions",
          nzVirtualItemSize: "nzVirtualItemSize",
          nzVirtualMaxBufferPx: "nzVirtualMaxBufferPx",
          nzVirtualMinBufferPx: "nzVirtualMinBufferPx",
          nzVirtualForTrackBy: "nzVirtualForTrackBy",
          nzLoadingDelay: "nzLoadingDelay",
          nzPageIndex: "nzPageIndex",
          nzPageSize: "nzPageSize",
          nzTotal: "nzTotal",
          nzWidthConfig: "nzWidthConfig",
          nzData: "nzData",
          nzPaginationPosition: "nzPaginationPosition",
          nzScroll: "nzScroll",
          nzPaginationType: "nzPaginationType",
          nzFrontPagination: "nzFrontPagination",
          nzTemplateMode: "nzTemplateMode",
          nzShowPagination: "nzShowPagination",
          nzLoading: "nzLoading",
          nzOuterBordered: "nzOuterBordered",
          nzLoadingIndicator: "nzLoadingIndicator",
          nzBordered: "nzBordered",
          nzSize: "nzSize",
          nzShowSizeChanger: "nzShowSizeChanger",
          nzHideOnSinglePage: "nzHideOnSinglePage",
          nzShowQuickJumper: "nzShowQuickJumper",
          nzSimple: "nzSimple"
        },
        outputs: {
          nzPageSizeChange: "nzPageSizeChange",
          nzPageIndexChange: "nzPageIndexChange",
          nzQueryParams: "nzQueryParams",
          nzCurrentPageDataChange: "nzCurrentPageDataChange"
        },
        exportAs: ["nzTable"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([NzTableStyleService, NzTableDataService]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 14,
        vars: 27,
        consts: [[3, "nzDelay", "nzSpinning", "nzIndicator"], [4, "ngIf"], [1, "ant-table"], ["tableMainElement", ""], [3, "title", 4, "ngIf"], [3, "data", "scrollX", "scrollY", "contentTemplate", "listOfColWidth", "theadTemplate", "verticalScrollBarWidth", "virtualTemplate", "virtualItemSize", "virtualMaxBufferPx", "virtualMinBufferPx", "tableMainElement", "virtualForTrackBy", 4, "ngIf", "ngIfElse"], ["defaultTemplate", ""], [3, "footer", 4, "ngIf"], ["paginationTemplate", ""], ["contentTemplate", ""], [3, "ngTemplateOutlet"], [3, "title"], [3, "data", "scrollX", "scrollY", "contentTemplate", "listOfColWidth", "theadTemplate", "verticalScrollBarWidth", "virtualTemplate", "virtualItemSize", "virtualMaxBufferPx", "virtualMinBufferPx", "tableMainElement", "virtualForTrackBy"], [3, "tableLayout", "listOfColWidth", "theadTemplate", "contentTemplate"], [3, "footer"], ["class", "ant-table-pagination ant-table-pagination-right", 3, "hidden", "nzShowSizeChanger", "nzPageSizeOptions", "nzItemRender", "nzShowQuickJumper", "nzHideOnSinglePage", "nzShowTotal", "nzSize", "nzPageSize", "nzTotal", "nzSimple", "nzPageIndex", "nzPageSizeChange", "nzPageIndexChange", 4, "ngIf"], [1, "ant-table-pagination", "ant-table-pagination-right", 3, "hidden", "nzShowSizeChanger", "nzPageSizeOptions", "nzItemRender", "nzShowQuickJumper", "nzHideOnSinglePage", "nzShowTotal", "nzSize", "nzPageSize", "nzTotal", "nzSimple", "nzPageIndex", "nzPageSizeChange", "nzPageIndexChange"]],
        template: function NzTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-spin", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTableComponent_ng_container_1_Template, 2, 1, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, NzTableComponent_nz_table_title_footer_4_Template, 1, 1, "nz-table-title-footer", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, NzTableComponent_nz_table_inner_scroll_5_Template, 1, 13, "nz-table-inner-scroll", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, NzTableComponent_ng_template_6_Template, 1, 4, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, NzTableComponent_nz_table_title_footer_8_Template, 1, 1, "nz-table-title-footer", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, NzTableComponent_ng_container_9_Template, 2, 1, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, NzTableComponent_ng_template_10_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, NzTableComponent_ng_template_12_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzDelay", ctx.nzLoadingDelay)("nzSpinning", ctx.nzLoading)("nzIndicator", ctx.nzLoadingIndicator);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nzPaginationPosition === "both" || ctx.nzPaginationPosition === "top");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-table-rtl", ctx.dir === "rtl")("ant-table-fixed-header", ctx.nzData.length && ctx.scrollY)("ant-table-fixed-column", ctx.scrollX)("ant-table-has-fix-left", ctx.hasFixLeft)("ant-table-has-fix-right", ctx.hasFixRight)("ant-table-bordered", ctx.nzBordered)("nz-table-out-bordered", ctx.nzOuterBordered && !ctx.nzBordered)("ant-table-middle", ctx.nzSize === "middle")("ant-table-small", ctx.nzSize === "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nzTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.scrollY || ctx.scrollX)("ngIfElse", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nzFooter);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nzPaginationPosition === "both" || ctx.nzPaginationPosition === "bottom");
          }
        },
        directives: function directives() {
          return [ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_17__["NzSpinComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], NzTableTitleFooterComponent, NzTableInnerScrollComponent, NzTableInnerDefaultComponent, ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_15__["NzPaginationComponent"]];
        },
        encapsulation: 2,
        changeDetection: 0
      });

      NzTableComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_9__["NzResizeObserver"]
        }, {
          type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["NzConfigService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: NzTableStyleService
        }, {
          type: NzTableDataService
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }];
      };

      NzTableComponent.propDecorators = {
        nzTableLayout: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzShowTotal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzItemRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzFooter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzNoResult: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzPageSizeOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzVirtualItemSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzVirtualMaxBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzVirtualMinBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzVirtualForTrackBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzLoadingDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzPageIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzPageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzTotal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzWidthConfig: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzPaginationPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzPaginationType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzFrontPagination: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzTemplateMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzShowPagination: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzLoading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzOuterBordered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzLoadingIndicator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzBordered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzShowSizeChanger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzHideOnSinglePage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzShowQuickJumper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzSimple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        nzPageSizeChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        nzPageIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        nzQueryParams: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        nzCurrentPageDataChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        nzVirtualScrollDirective: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
          args: [NzTableVirtualScrollDirective, {
            "static": false
          }]
        }],
        nzTableInnerScrollComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [NzTableInnerScrollComponent]
        }]
      };
      Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_18__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__metadata"])("design:type", Object)], NzTableComponent.prototype, "nzFrontPagination", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_18__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__metadata"])("design:type", Object)], NzTableComponent.prototype, "nzTemplateMode", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_18__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__metadata"])("design:type", Object)], NzTableComponent.prototype, "nzShowPagination", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_18__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__metadata"])("design:type", Object)], NzTableComponent.prototype, "nzLoading", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_18__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__metadata"])("design:type", Object)], NzTableComponent.prototype, "nzOuterBordered", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__metadata"])("design:type", Object)], NzTableComponent.prototype, "nzLoadingIndicator", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["WithConfig"])(), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_18__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__metadata"])("design:type", Boolean)], NzTableComponent.prototype, "nzBordered", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__metadata"])("design:type", String)], NzTableComponent.prototype, "nzSize", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["WithConfig"])(), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_18__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__metadata"])("design:type", Boolean)], NzTableComponent.prototype, "nzShowSizeChanger", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["WithConfig"])(), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_18__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__metadata"])("design:type", Boolean)], NzTableComponent.prototype, "nzHideOnSinglePage", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["WithConfig"])(), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_18__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__metadata"])("design:type", Boolean)], NzTableComponent.prototype, "nzShowQuickJumper", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["WithConfig"])(), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_18__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_21__["__metadata"])("design:type", Boolean)], NzTableComponent.prototype, "nzSimple", void 0);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzFilterTriggerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'nz-filter-trigger',
            exportAs: "nzFilterTrigger",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            preserveWhitespaces: false,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            template: "\n    <span\n      nz-dropdown\n      class=\"ant-table-filter-trigger\"\n      nzTrigger=\"click\"\n      nzPlacement=\"bottomRight\"\n      [nzHasBackdrop]=\"nzHasBackdrop\"\n      [nzClickHide]=\"false\"\n      [nzDropdownMenu]=\"nzDropdownMenu\"\n      [class.active]=\"nzActive\"\n      [class.ant-table-filter-open]=\"nzVisible\"\n      [nzVisible]=\"nzVisible\"\n      (nzVisibleChange)=\"onVisibleChange($event)\"\n      (click)=\"onFilterClick($event)\"\n    >\n      <ng-content></ng-content>\n    </span>\n  ",
            host: {
              '[class.ant-table-filter-trigger-container-open]': 'nzVisible'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }];
        }, {
          nzActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzHasBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzVisibleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          nzDropdownMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzTableFilterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'nz-table-filter',
            preserveWhitespaces: false,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            template: "\n    <span class=\"ant-table-filter-column-title\">\n      <ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template>\n    </span>\n    <ng-container *ngIf=\"!customFilter; else extraTemplate\">\n      <nz-filter-trigger\n        [nzVisible]=\"isVisible\"\n        [nzActive]=\"isChecked\"\n        [nzDropdownMenu]=\"filterMenu\"\n        (nzVisibleChange)=\"onVisibleChange($event)\"\n      >\n        <i nz-icon nzType=\"filter\" nzTheme=\"fill\"></i>\n      </nz-filter-trigger>\n      <nz-dropdown-menu #filterMenu=\"nzDropdownMenu\">\n        <div class=\"ant-table-filter-dropdown\">\n          <ul nz-menu>\n            <li nz-menu-item [nzSelected]=\"f.checked\" *ngFor=\"let f of listOfParsedFilter; trackBy: trackByValue\" (click)=\"check(f)\">\n              <label nz-radio *ngIf=\"!filterMultiple\" [ngModel]=\"f.checked\" (ngModelChange)=\"check(f)\"></label>\n              <label nz-checkbox *ngIf=\"filterMultiple\" [ngModel]=\"f.checked\" (ngModelChange)=\"check(f)\"></label>\n              <span>{{ f.text }}</span>\n            </li>\n          </ul>\n          <div class=\"ant-table-filter-dropdown-btns\">\n            <button nz-button nzType=\"link\" nzSize=\"small\" (click)=\"reset()\" [disabled]=\"!isChecked\">{{ locale.filterReset }}</button>\n            <button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"confirm()\">{{ locale.filterConfirm }}</button>\n          </div>\n        </div>\n      </nz-dropdown-menu>\n    </ng-container>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }];
        }, {
          contentTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          customFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          extraTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          filterMultiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          listOfFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          filterChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzRowExpandButtonDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: 'button[nz-row-expand-button]',
            host: {
              '[type]': "'button'",
              '[class.ant-table-row-expand-icon-expanded]': "!spaceMode && expand === true",
              '[class.ant-table-row-expand-icon-collapsed]': "!spaceMode && expand === false",
              '[class.ant-table-row-expand-icon-spaced]': 'spaceMode',
              '(click)': 'onHostClick()'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }];
        }, {
          expand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          spaceMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          expandChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzRowIndentDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: 'nz-row-indent',
            host: {
              '[style.padding-left.px]': 'indentSize'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }];
        }, {
          indentSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzTableSelectionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'nz-table-selection',
            preserveWhitespaces: false,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            template: "\n    <label\n      *ngIf=\"showCheckbox\"\n      nz-checkbox\n      [class.ant-table-selection-select-all-custom]=\"showRowSelection\"\n      [ngModel]=\"checked\"\n      [nzDisabled]=\"disabled\"\n      [nzIndeterminate]=\"indeterminate\"\n      (ngModelChange)=\"onCheckedChange($event)\"\n    ></label>\n    <div class=\"ant-table-selection-extra\" *ngIf=\"showRowSelection\">\n      <span nz-dropdown class=\"ant-table-selection-down\" nzPlacement=\"bottomLeft\" [nzDropdownMenu]=\"selectionMenu\">\n        <i nz-icon nzType=\"down\"></i>\n      </span>\n      <nz-dropdown-menu #selectionMenu=\"nzDropdownMenu\">\n        <ul nz-menu class=\"ant-table-selection-menu\">\n          <li nz-menu-item *ngFor=\"let selection of listOfSelections\" (click)=\"selection.onSelect()\">\n            {{ selection.text }}\n          </li>\n        </ul>\n      </nz-dropdown-menu>\n    </div>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }];
        }, {
          listOfSelections: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          indeterminate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          showCheckbox: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          showRowSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          checkedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzTableSortersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'nz-table-sorters',
            preserveWhitespaces: false,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            template: "\n    <span><ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template></span>\n    <span class=\"ant-table-column-sorter\" [class.ant-table-column-sorter-full]=\"isDown && isUp\">\n      <span class=\"ant-table-column-sorter-inner\">\n        <i nz-icon nzType=\"caret-up\" *ngIf=\"isUp\" class=\"ant-table-column-sorter-up\" [class.active]=\"sortOrder == 'ascend'\"></i>\n        <i nz-icon nzType=\"caret-down\" *ngIf=\"isDown\" class=\"ant-table-column-sorter-down\" [class.active]=\"sortOrder == 'descend'\"></i>\n      </span>\n    </span>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }];
        }, {
          sortDirections: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          sortOrder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          contentTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzCellFixedDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: 'td[nzRight],th[nzRight],td[nzLeft],th[nzLeft]',
            host: {
              '[class.ant-table-cell-fix-right]': "isFixedRight",
              '[class.ant-table-cell-fix-left]': "isFixedLeft",
              '[style.position]': "isFixed? 'sticky' : null"
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }];
        }, {
          nzRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          colspan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          colSpan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzTableStyleService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzTableCellDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: 'th:not(.nz-disable-th):not([mat-cell]), td:not(.nz-disable-td):not([mat-cell])',
            host: {
              '[class.ant-table-cell]': 'isInsideTable'
            }
          }]
        }], function () {
          return [{
            type: NzTableStyleService,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzTdAddOnComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'td[nzChecked], td[nzDisabled], td[nzIndeterminate], td[nzIndentSize], td[nzExpand], td[nzShowExpand], td[nzShowCheckbox]',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            preserveWhitespaces: false,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            template: "\n    <ng-container *ngIf=\"nzShowExpand || nzIndentSize > 0\">\n      <nz-row-indent [indentSize]=\"nzIndentSize\"></nz-row-indent>\n      <button nz-row-expand-button [expand]=\"nzExpand\" (expandChange)=\"onExpandChange($event)\" [spaceMode]=\"!nzShowExpand\"></button>\n    </ng-container>\n    <label\n      nz-checkbox\n      *ngIf=\"nzShowCheckbox\"\n      [nzDisabled]=\"nzDisabled\"\n      [ngModel]=\"nzChecked\"\n      [nzIndeterminate]=\"nzIndeterminate\"\n      (ngModelChange)=\"onCheckedChange($event)\"\n    >\n    </label>\n    <ng-content></ng-content>\n  ",
            host: {
              '[class.ant-table-cell-with-append]': "nzShowExpand || nzIndentSize > 0",
              '[class.ant-table-selection-column]': "nzShowCheckbox"
            }
          }]
        }], function () {
          return [];
        }, {
          nzChecked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzIndeterminate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzIndentSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzShowExpand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzShowCheckbox: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzExpand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzCheckedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          nzExpandChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzThAddOnComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'th[nzColumnKey], th[nzSortFn], th[nzSortOrder], th[nzFilters], th[nzShowSort], th[nzShowFilter], th[nzCustomFilter]',
            preserveWhitespaces: false,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <nz-table-filter\n      *ngIf=\"nzShowFilter || nzCustomFilter; else notFilterTemplate\"\n      [contentTemplate]=\"notFilterTemplate\"\n      [extraTemplate]=\"extraTemplate\"\n      [customFilter]=\"nzCustomFilter\"\n      [filterMultiple]=\"nzFilterMultiple\"\n      [listOfFilter]=\"nzFilters\"\n      (filterChange)=\"onFilterValueChange($event)\"\n    ></nz-table-filter>\n    <ng-template #notFilterTemplate>\n      <ng-template [ngTemplateOutlet]=\"nzShowSort ? sortTemplate : contentTemplate\"></ng-template>\n    </ng-template>\n    <ng-template #extraTemplate>\n      <ng-content select=\"[nz-th-extra]\"></ng-content>\n      <ng-content select=\"nz-filter-trigger\"></ng-content>\n    </ng-template>\n    <ng-template #sortTemplate>\n      <nz-table-sorters [sortOrder]=\"sortOrder\" [sortDirections]=\"sortDirections\" [contentTemplate]=\"contentTemplate\"></nz-table-sorters>\n    </ng-template>\n    <ng-template #contentTemplate>\n      <ng-content></ng-content>\n    </ng-template>\n  ",
            host: {
              '[class.ant-table-column-has-sorters]': 'nzShowSort',
              '[class.ant-table-column-sort]': "sortOrder === 'descend' || sortOrder === 'ascend'",
              '(click)': 'emitNextSortValue()'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }];
        }, {
          nzFilterMultiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzSortOrder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzSortPriority: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzSortDirections: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzFilters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzSortFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzFilterFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzShowSort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzShowFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzCustomFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzCheckedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          nzSortOrderChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          nzFilterChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          nzColumnKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzThMeasureDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: 'th'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }];
        }, {
          nzWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          colspan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          colSpan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          rowspan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          rowSpan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzThSelectionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'th[nzSelections],th[nzChecked],th[nzShowCheckbox],th[nzShowRowSelection]',
            preserveWhitespaces: false,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <nz-table-selection\n      [checked]=\"nzChecked\"\n      [disabled]=\"nzDisabled\"\n      [indeterminate]=\"nzIndeterminate\"\n      [listOfSelections]=\"nzSelections\"\n      [showCheckbox]=\"nzShowCheckbox\"\n      [showRowSelection]=\"nzShowRowSelection\"\n      (checkedChange)=\"onCheckedChange($event)\"\n    ></nz-table-selection>\n    <ng-content></ng-content>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }];
        }, {
          nzSelections: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzChecked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzIndeterminate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzShowCheckbox: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzShowRowSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzCheckedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzCellAlignDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: 'th[nzAlign],td[nzAlign]',
            host: {
              '[style.text-align]': 'nzAlign'
            }
          }]
        }], function () {
          return [];
        }, {
          nzAlign: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzCellEllipsisDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: 'th[nzEllipsis],td[nzEllipsis]',
            host: {
              '[class.ant-table-cell-ellipsis]': 'nzEllipsis'
            }
          }]
        }], function () {
          return [];
        }, {
          nzEllipsis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzCellBreakWordDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: 'th[nzBreakWord],td[nzBreakWord]',
            host: {
              '[style.word-break]': "nzBreakWord ? 'break-all' : ''"
            }
          }]
        }], function () {
          return [];
        }, {
          nzBreakWord: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzTableContentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'table[nz-table-content]',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            template: "\n    <col [style.width]=\"width\" [style.minWidth]=\"width\" *ngFor=\"let width of listOfColWidth\" />\n    <thead class=\"ant-table-thead\" *ngIf=\"theadTemplate\">\n      <ng-template [ngTemplateOutlet]=\"theadTemplate\"></ng-template>\n    </thead>\n    <ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template>\n    <ng-content></ng-content>\n  ",
            host: {
              '[style.table-layout]': 'tableLayout',
              '[class.ant-table-fixed]': 'scrollX',
              '[style.width]': 'scrollX',
              '[style.min-width]': "scrollX ? '100%': null"
            }
          }]
        }], function () {
          return [];
        }, {
          tableLayout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          theadTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          contentTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          listOfColWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          scrollX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzTableFixedRowComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'tr[nz-table-fixed-row], tr[nzExpand]',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            template: "\n    <td class=\"nz-disable-td ant-table-cell\" #tdElement>\n      <div\n        class=\"ant-table-expanded-row-fixed\"\n        *ngIf=\"enableAutoMeasure$ | async; else contentTemplate\"\n        style=\"position: sticky; left: 0px; overflow: hidden;\"\n        [style.width.px]=\"hostWidth$ | async\"\n      >\n        <ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template>\n      </div>\n    </td>\n    <ng-template #contentTemplate><ng-content></ng-content></ng-template>\n  "
          }]
        }], function () {
          return [{
            type: NzTableStyleService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
          }];
        }, {
          tdElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['tdElement']
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzTableInnerDefaultComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'nz-table-inner-default',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            template: "\n    <div class=\"ant-table-content\">\n      <table\n        nz-table-content\n        [contentTemplate]=\"contentTemplate\"\n        [tableLayout]=\"tableLayout\"\n        [listOfColWidth]=\"listOfColWidth\"\n        [theadTemplate]=\"theadTemplate\"\n      ></table>\n    </div>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }];
        }, {
          tableLayout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          listOfColWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          theadTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          contentTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzTableInnerScrollComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'nz-table-inner-scroll',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            template: "\n    <ng-container *ngIf=\"scrollY\">\n      <div #tableHeaderElement [ngStyle]=\"headerStyleMap\" class=\"ant-table-header nz-table-hide-scrollbar\">\n        <table\n          nz-table-content\n          tableLayout=\"fixed\"\n          [scrollX]=\"scrollX\"\n          [listOfColWidth]=\"listOfColWidth\"\n          [theadTemplate]=\"theadTemplate\"\n        ></table>\n      </div>\n      <div #tableBodyElement *ngIf=\"!virtualTemplate\" class=\"ant-table-body\" [ngStyle]=\"bodyStyleMap\">\n        <table\n          nz-table-content\n          tableLayout=\"fixed\"\n          [scrollX]=\"scrollX\"\n          [listOfColWidth]=\"listOfColWidth\"\n          [contentTemplate]=\"contentTemplate\"\n        ></table>\n      </div>\n      <cdk-virtual-scroll-viewport\n        #tableBodyElement\n        *ngIf=\"virtualTemplate\"\n        [itemSize]=\"virtualItemSize\"\n        [maxBufferPx]=\"virtualMaxBufferPx\"\n        [minBufferPx]=\"virtualMinBufferPx\"\n        [style.height]=\"data.length ? scrollY : noDateVirtualHeight\"\n      >\n        <table nz-table-content tableLayout=\"fixed\" [scrollX]=\"scrollX\" [listOfColWidth]=\"listOfColWidth\">\n          <tbody>\n            <ng-container *cdkVirtualFor=\"let item of data; let i = index; trackBy: virtualForTrackBy\">\n              <ng-template [ngTemplateOutlet]=\"virtualTemplate\" [ngTemplateOutletContext]=\"{ $implicit: item, index: i }\"></ng-template>\n            </ng-container>\n          </tbody>\n        </table>\n      </cdk-virtual-scroll-viewport>\n    </ng-container>\n    <div class=\"ant-table-content\" #tableBodyElement *ngIf=\"!scrollY\" [ngStyle]=\"bodyStyleMap\">\n      <table\n        nz-table-content\n        tableLayout=\"fixed\"\n        [scrollX]=\"scrollX\"\n        [listOfColWidth]=\"listOfColWidth\"\n        [theadTemplate]=\"theadTemplate\"\n        [contentTemplate]=\"contentTemplate\"\n      ></table>\n    </div>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]
          }, {
            type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_22__["NzResizeService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          scrollX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          scrollY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          contentTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          widthConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          listOfColWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          theadTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          virtualTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          virtualItemSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          virtualMaxBufferPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          virtualMinBufferPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          virtualForTrackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          verticalScrollBarWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          tableMainElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          tableHeaderElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['tableHeaderElement', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
            }]
          }],
          tableBodyElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['tableBodyElement', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
            }]
          }],
          cdkVirtualScrollViewport: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"], {
              read: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"]
            }]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzTableVirtualScrollDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: '[nz-virtual-scroll]',
            exportAs: 'nzVirtualScroll'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzTableDataService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzTableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'nz-table',
            exportAs: 'nzTable',
            providers: [NzTableStyleService, NzTableDataService],
            preserveWhitespaces: false,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            template: "\n    <nz-spin [nzDelay]=\"nzLoadingDelay\" [nzSpinning]=\"nzLoading\" [nzIndicator]=\"nzLoadingIndicator\">\n      <ng-container *ngIf=\"nzPaginationPosition === 'both' || nzPaginationPosition === 'top'\">\n        <ng-template [ngTemplateOutlet]=\"paginationTemplate\"></ng-template>\n      </ng-container>\n      <div\n        #tableMainElement\n        class=\"ant-table\"\n        [class.ant-table-rtl]=\"dir === 'rtl'\"\n        [class.ant-table-fixed-header]=\"nzData.length && scrollY\"\n        [class.ant-table-fixed-column]=\"scrollX\"\n        [class.ant-table-has-fix-left]=\"hasFixLeft\"\n        [class.ant-table-has-fix-right]=\"hasFixRight\"\n        [class.ant-table-bordered]=\"nzBordered\"\n        [class.nz-table-out-bordered]=\"nzOuterBordered && !nzBordered\"\n        [class.ant-table-middle]=\"nzSize === 'middle'\"\n        [class.ant-table-small]=\"nzSize === 'small'\"\n      >\n        <nz-table-title-footer [title]=\"nzTitle\" *ngIf=\"nzTitle\"></nz-table-title-footer>\n        <nz-table-inner-scroll\n          *ngIf=\"scrollY || scrollX; else defaultTemplate\"\n          [data]=\"data\"\n          [scrollX]=\"scrollX\"\n          [scrollY]=\"scrollY\"\n          [contentTemplate]=\"contentTemplate\"\n          [listOfColWidth]=\"listOfAutoColWidth\"\n          [theadTemplate]=\"theadTemplate\"\n          [verticalScrollBarWidth]=\"verticalScrollBarWidth\"\n          [virtualTemplate]=\"nzVirtualScrollDirective ? nzVirtualScrollDirective.templateRef : null\"\n          [virtualItemSize]=\"nzVirtualItemSize\"\n          [virtualMaxBufferPx]=\"nzVirtualMaxBufferPx\"\n          [virtualMinBufferPx]=\"nzVirtualMinBufferPx\"\n          [tableMainElement]=\"tableMainElement\"\n          [virtualForTrackBy]=\"nzVirtualForTrackBy\"\n        ></nz-table-inner-scroll>\n        <ng-template #defaultTemplate>\n          <nz-table-inner-default\n            [tableLayout]=\"nzTableLayout\"\n            [listOfColWidth]=\"listOfManualColWidth\"\n            [theadTemplate]=\"theadTemplate\"\n            [contentTemplate]=\"contentTemplate\"\n          ></nz-table-inner-default>\n        </ng-template>\n        <nz-table-title-footer [footer]=\"nzFooter\" *ngIf=\"nzFooter\"></nz-table-title-footer>\n      </div>\n      <ng-container *ngIf=\"nzPaginationPosition === 'both' || nzPaginationPosition === 'bottom'\">\n        <ng-template [ngTemplateOutlet]=\"paginationTemplate\"></ng-template>\n      </ng-container>\n    </nz-spin>\n    <ng-template #paginationTemplate>\n      <nz-pagination\n        *ngIf=\"nzShowPagination && data.length\"\n        [hidden]=\"!showPagination\"\n        class=\"ant-table-pagination ant-table-pagination-right\"\n        [nzShowSizeChanger]=\"nzShowSizeChanger\"\n        [nzPageSizeOptions]=\"nzPageSizeOptions\"\n        [nzItemRender]=\"nzItemRender!\"\n        [nzShowQuickJumper]=\"nzShowQuickJumper\"\n        [nzHideOnSinglePage]=\"nzHideOnSinglePage\"\n        [nzShowTotal]=\"nzShowTotal\"\n        [nzSize]=\"nzPaginationType === 'small' ? 'small' : nzSize === 'default' ? 'default' : 'small'\"\n        [nzPageSize]=\"nzPageSize\"\n        [nzTotal]=\"nzTotal\"\n        [nzSimple]=\"nzSimple\"\n        [nzPageIndex]=\"nzPageIndex\"\n        (nzPageSizeChange)=\"onPageSizeChange($event)\"\n        (nzPageIndexChange)=\"onPageIndexChange($event)\"\n      ></nz-pagination>\n    </ng-template>\n    <ng-template #contentTemplate>\n      <ng-content></ng-content>\n    </ng-template>\n  ",
            host: {
              '[class.ant-table-wrapper-rtl]': 'dir === "rtl"'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_9__["NzResizeObserver"]
          }, {
            type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_23__["NzConfigService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: NzTableStyleService
          }, {
            type: NzTableDataService
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }];
        }, {
          nzTableLayout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzShowTotal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzItemRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzFooter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzNoResult: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzPageSizeOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzVirtualItemSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzVirtualMaxBufferPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzVirtualMinBufferPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzVirtualForTrackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzLoadingDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzPageIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzPageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzTotal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzWidthConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzPaginationPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzPaginationType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzFrontPagination: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzTemplateMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzShowPagination: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzOuterBordered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzLoadingIndicator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzBordered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzShowSizeChanger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzHideOnSinglePage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzShowQuickJumper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzSimple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          nzPageSizeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          nzPageIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          nzQueryParams: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          nzCurrentPageDataChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          nzVirtualScrollDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
            args: [NzTableVirtualScrollDirective, {
              "static": false
            }]
          }],
          nzTableInnerScrollComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [NzTableInnerScrollComponent]
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzTbodyComponent = /*#__PURE__*/function () {
        function NzTbodyComponent(nzTableStyleService) {
          _classCallCheck(this, NzTbodyComponent);

          this.nzTableStyleService = nzTableStyleService;
          this.isInsideTable = false;
          this.showEmpty$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["BehaviorSubject"](false);
          this.noResult$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["BehaviorSubject"](undefined);
          this.listOfMeasureColumn$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["BehaviorSubject"]([]);
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["Subject"]();
          this.isInsideTable = !!this.nzTableStyleService;

          if (this.nzTableStyleService) {
            var _this$nzTableStyleSer3 = this.nzTableStyleService,
                showEmpty$ = _this$nzTableStyleSer3.showEmpty$,
                noResult$ = _this$nzTableStyleSer3.noResult$,
                listOfMeasureColumn$ = _this$nzTableStyleSer3.listOfMeasureColumn$;
            noResult$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$)).subscribe(this.noResult$);
            listOfMeasureColumn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$)).subscribe(this.listOfMeasureColumn$);
            showEmpty$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$)).subscribe(this.showEmpty$);
          }
        }

        _createClass(NzTbodyComponent, [{
          key: "onListOfAutoWidthChange",
          value: function onListOfAutoWidthChange(listOfAutoWidth) {
            this.nzTableStyleService.setListOfAutoWidth(listOfAutoWidth);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }]);

        return NzTbodyComponent;
      }();

      NzTbodyComponent.ɵfac = function NzTbodyComponent_Factory(t) {
        return new (t || NzTbodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](NzTableStyleService, 8));
      };

      NzTbodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: NzTbodyComponent,
        selectors: [["tbody"]],
        hostVars: 2,
        hostBindings: function NzTbodyComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-table-tbody", ctx.isInsideTable);
          }
        },
        ngContentSelectors: _c0,
        decls: 5,
        vars: 6,
        consts: [[4, "ngIf"], ["class", "ant-table-placeholder", "nz-table-fixed-row", "", 4, "ngIf"], ["nz-table-measure-row", "", 3, "listOfMeasureColumn", "listOfAutoWidth", 4, "ngIf"], ["nz-table-measure-row", "", 3, "listOfMeasureColumn", "listOfAutoWidth"], ["nz-table-fixed-row", "", 1, "ant-table-placeholder"], ["nzComponentName", "table", 3, "specificContent"]],
        template: function NzTbodyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NzTbodyComponent_ng_container_0_Template, 2, 1, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, NzTbodyComponent_tr_3_Template, 3, 3, "tr", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, ctx.listOfMeasureColumn$));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, ctx.showEmpty$));
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], NzTrMeasureComponent, NzTableFixedRowComponent, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_11__["NzEmbedEmptyComponent"]];
        },
        pipes: function pipes() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]];
        },
        encapsulation: 2,
        changeDetection: 0
      });

      NzTbodyComponent.ctorParameters = function () {
        return [{
          type: NzTableStyleService,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzTbodyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'tbody',
            preserveWhitespaces: false,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            template: "\n    <ng-container *ngIf=\"listOfMeasureColumn$ | async as listOfMeasureColumn\">\n      <tr\n        nz-table-measure-row\n        *ngIf=\"isInsideTable && listOfMeasureColumn.length\"\n        [listOfMeasureColumn]=\"listOfMeasureColumn\"\n        (listOfAutoWidth)=\"onListOfAutoWidthChange($event)\"\n      ></tr>\n    </ng-container>\n    <ng-content></ng-content>\n    <tr class=\"ant-table-placeholder\" nz-table-fixed-row *ngIf=\"showEmpty$ | async\">\n      <nz-embed-empty nzComponentName=\"table\" [specificContent]=\"(noResult$ | async)!\"></nz-embed-empty>\n    </tr>\n  ",
            host: {
              '[class.ant-table-tbody]': 'isInsideTable'
            }
          }]
        }], function () {
          return [{
            type: NzTableStyleService,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }];
        }, null);
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzTrDirective = /*#__PURE__*/function () {
        function NzTrDirective(nzTableStyleService) {
          var _this23 = this;

          _classCallCheck(this, NzTrDirective);

          this.nzTableStyleService = nzTableStyleService;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["Subject"]();
          this.listOfFixedColumns$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["ReplaySubject"](1);
          this.listOfColumns$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["ReplaySubject"](1);
          this.listOfFixedColumnsChanges$ = this.listOfFixedColumns$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["switchMap"])(function (list) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_19__["merge"]).apply(void 0, [_this23.listOfFixedColumns$].concat(_toConsumableArray(list.map(function (c) {
              return c.changes$;
            })))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["mergeMap"])(function () {
              return _this23.listOfFixedColumns$;
            }));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$));
          this.listOfFixedLeftColumnChanges$ = this.listOfFixedColumnsChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["map"])(function (list) {
            return list.filter(function (item) {
              return item.nzLeft !== false;
            });
          }));
          this.listOfFixedRightColumnChanges$ = this.listOfFixedColumnsChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["map"])(function (list) {
            return list.filter(function (item) {
              return item.nzRight !== false;
            });
          }));
          this.listOfColumnsChanges$ = this.listOfColumns$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["switchMap"])(function (list) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_19__["merge"]).apply(void 0, [_this23.listOfColumns$].concat(_toConsumableArray(list.map(function (c) {
              return c.changes$;
            })))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["mergeMap"])(function () {
              return _this23.listOfColumns$;
            }));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$));
          this.isInsideTable = false;
          this.isInsideTable = !!nzTableStyleService;
        }

        _createClass(NzTrDirective, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            if (this.nzTableStyleService) {
              this.listOfCellFixedDirective.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["startWith"])(this.listOfCellFixedDirective), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$)).subscribe(this.listOfFixedColumns$);
              this.listOfNzThDirective.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["startWith"])(this.listOfNzThDirective), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$)).subscribe(this.listOfColumns$);
              /** set last left and first right **/

              this.listOfFixedLeftColumnChanges$.subscribe(function (listOfFixedLeft) {
                listOfFixedLeft.forEach(function (cell) {
                  return cell.setIsLastLeft(cell === listOfFixedLeft[listOfFixedLeft.length - 1]);
                });
              });
              this.listOfFixedRightColumnChanges$.subscribe(function (listOfFixedRight) {
                listOfFixedRight.forEach(function (cell) {
                  return cell.setIsFirstRight(cell === listOfFixedRight[0]);
                });
              });
              /** calculate fixed nzLeft and nzRight **/

              Object(rxjs__WEBPACK_IMPORTED_MODULE_19__["combineLatest"])([this.nzTableStyleService.listOfListOfThWidth$, this.listOfFixedLeftColumnChanges$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$)).subscribe(function (_ref15) {
                var _ref16 = _slicedToArray(_ref15, 2),
                    listOfAutoWidth = _ref16[0],
                    listOfLeftCell = _ref16[1];

                listOfLeftCell.forEach(function (cell, index) {
                  if (cell.isAutoLeft) {
                    var currentArray = listOfLeftCell.slice(0, index);
                    var count = currentArray.reduce(function (pre, cur) {
                      return pre + (cur.colspan || cur.colSpan || 1);
                    }, 0);
                    var width = listOfAutoWidth.slice(0, count).reduce(function (pre, cur) {
                      return pre + cur;
                    }, 0);
                    cell.setAutoLeftWidth("".concat(width, "px"));
                  }
                });
              });
              Object(rxjs__WEBPACK_IMPORTED_MODULE_19__["combineLatest"])([this.nzTableStyleService.listOfListOfThWidth$, this.listOfFixedRightColumnChanges$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$)).subscribe(function (_ref17) {
                var _ref18 = _slicedToArray(_ref17, 2),
                    listOfAutoWidth = _ref18[0],
                    listOfRightCell = _ref18[1];

                listOfRightCell.forEach(function (_, index) {
                  var cell = listOfRightCell[listOfRightCell.length - index - 1];

                  if (cell.isAutoRight) {
                    var currentArray = listOfRightCell.slice(listOfRightCell.length - index, listOfRightCell.length);
                    var count = currentArray.reduce(function (pre, cur) {
                      return pre + (cur.colspan || cur.colSpan || 1);
                    }, 0);
                    var width = listOfAutoWidth.slice(listOfAutoWidth.length - count, listOfAutoWidth.length).reduce(function (pre, cur) {
                      return pre + cur;
                    }, 0);
                    cell.setAutoRightWidth("".concat(width, "px"));
                  }
                });
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }]);

        return NzTrDirective;
      }();

      NzTrDirective.ɵfac = function NzTrDirective_Factory(t) {
        return new (t || NzTrDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](NzTableStyleService, 8));
      };

      NzTrDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: NzTrDirective,
        selectors: [["tr", 3, "mat-row", "", 3, "mat-header-row", "", 3, "nz-table-measure-row", "", 3, "nzExpand", "", 3, "nz-table-fixed-row", ""]],
        contentQueries: function NzTrDirective_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, NzThMeasureDirective, false);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, NzCellFixedDirective, false);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.listOfNzThDirective = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.listOfCellFixedDirective = _t);
          }
        },
        hostVars: 2,
        hostBindings: function NzTrDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-table-row", ctx.isInsideTable);
          }
        }
      });

      NzTrDirective.ctorParameters = function () {
        return [{
          type: NzTableStyleService,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }];
      };

      NzTrDirective.propDecorators = {
        listOfNzThDirective: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
          args: [NzThMeasureDirective]
        }],
        listOfCellFixedDirective: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
          args: [NzCellFixedDirective]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzTrDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: 'tr:not([mat-row]):not([mat-header-row]):not([nz-table-measure-row]):not([nzExpand]):not([nz-table-fixed-row])',
            host: {
              '[class.ant-table-row]': 'isInsideTable'
            }
          }]
        }], function () {
          return [{
            type: NzTableStyleService,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }];
        }, {
          listOfNzThDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
            args: [NzThMeasureDirective]
          }],
          listOfCellFixedDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
            args: [NzCellFixedDirective]
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzTheadComponent = /*#__PURE__*/function () {
        function NzTheadComponent(elementRef, renderer, nzTableStyleService, nzTableDataService) {
          _classCallCheck(this, NzTheadComponent);

          this.elementRef = elementRef;
          this.renderer = renderer;
          this.nzTableStyleService = nzTableStyleService;
          this.nzTableDataService = nzTableDataService;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["Subject"]();
          this.isInsideTable = false;
          this.nzSortOrderChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          this.isInsideTable = !!this.nzTableStyleService;
        }

        _createClass(NzTheadComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.nzTableStyleService) {
              this.nzTableStyleService.setTheadTemplate(this.templateRef);
            }
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this24 = this;

            if (this.nzTableStyleService) {
              var firstTableRow$ = this.listOfNzTrDirective.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["startWith"])(this.listOfNzTrDirective), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["map"])(function (item) {
                return item && item.first;
              }));
              var listOfColumnsChanges$ = firstTableRow$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["switchMap"])(function (firstTableRow) {
                return firstTableRow ? firstTableRow.listOfColumnsChanges$ : rxjs__WEBPACK_IMPORTED_MODULE_19__["EMPTY"];
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$));
              listOfColumnsChanges$.subscribe(function (data) {
                return _this24.nzTableStyleService.setListOfTh(data);
              });
              /** TODO: need reset the measure row when scrollX change **/

              this.nzTableStyleService.enableAutoMeasure$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["switchMap"])(function (enable) {
                return enable ? listOfColumnsChanges$ : Object(rxjs__WEBPACK_IMPORTED_MODULE_19__["of"])([]);
              })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$)).subscribe(function (data) {
                return _this24.nzTableStyleService.setListOfMeasureColumn(data);
              });
              var listOfFixedLeftColumnChanges$ = firstTableRow$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["switchMap"])(function (firstTr) {
                return firstTr ? firstTr.listOfFixedLeftColumnChanges$ : rxjs__WEBPACK_IMPORTED_MODULE_19__["EMPTY"];
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$));
              var listOfFixedRightColumnChanges$ = firstTableRow$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["switchMap"])(function (firstTr) {
                return firstTr ? firstTr.listOfFixedRightColumnChanges$ : rxjs__WEBPACK_IMPORTED_MODULE_19__["EMPTY"];
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$));
              listOfFixedLeftColumnChanges$.subscribe(function (listOfFixedLeftColumn) {
                _this24.nzTableStyleService.setHasFixLeft(listOfFixedLeftColumn.length !== 0);
              });
              listOfFixedRightColumnChanges$.subscribe(function (listOfFixedRightColumn) {
                _this24.nzTableStyleService.setHasFixRight(listOfFixedRightColumn.length !== 0);
              });
            }

            if (this.nzTableDataService) {
              var listOfColumn$ = this.listOfNzThAddOnComponent.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["startWith"])(this.listOfNzThAddOnComponent));
              var manualSort$ = listOfColumn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["switchMap"])(function () {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_19__["merge"]).apply(void 0, _toConsumableArray(_this24.listOfNzThAddOnComponent.map(function (th) {
                  return th.manualClickOrder$;
                })));
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$));
              manualSort$.subscribe(function (data) {
                var emitValue = {
                  key: data.nzColumnKey,
                  value: data.sortOrder
                };

                _this24.nzSortOrderChange.emit(emitValue);

                if (data.nzSortFn && data.nzSortPriority === false) {
                  _this24.listOfNzThAddOnComponent.filter(function (th) {
                    return th !== data;
                  }).forEach(function (th) {
                    return th.clearSortOrder();
                  });
                }
              });
              var listOfCalcOperator$ = listOfColumn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["switchMap"])(function (list) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_19__["merge"]).apply(void 0, [listOfColumn$].concat(_toConsumableArray(list.map(function (c) {
                  return c.calcOperatorChange$;
                })))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["mergeMap"])(function () {
                  return listOfColumn$;
                }));
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["map"])(function (list) {
                return list.filter(function (item) {
                  return !!item.nzSortFn || !!item.nzFilterFn;
                }).map(function (item) {
                  var nzSortFn = item.nzSortFn,
                      sortOrder = item.sortOrder,
                      nzFilterFn = item.nzFilterFn,
                      nzFilterValue = item.nzFilterValue,
                      nzSortPriority = item.nzSortPriority,
                      nzColumnKey = item.nzColumnKey;
                  return {
                    key: nzColumnKey,
                    sortFn: nzSortFn,
                    sortPriority: nzSortPriority,
                    sortOrder: sortOrder,
                    filterFn: nzFilterFn,
                    filterValue: nzFilterValue
                  };
                });
              }), // TODO: after checked error here
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$));
              listOfCalcOperator$.subscribe(function (list) {
                _this24.nzTableDataService.listOfCalcOperator$.next(list);
              });
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.nzTableStyleService) {
              this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }]);

        return NzTheadComponent;
      }();

      NzTheadComponent.ɵfac = function NzTheadComponent_Factory(t) {
        return new (t || NzTheadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](NzTableStyleService, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](NzTableDataService, 8));
      };

      NzTheadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: NzTheadComponent,
        selectors: [["thead", 9, "ant-table-thead"]],
        contentQueries: function NzTheadComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, NzTrDirective, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, NzThAddOnComponent, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.listOfNzTrDirective = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.listOfNzThAddOnComponent = _t);
          }
        },
        viewQuery: function NzTheadComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_c12, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
          }
        },
        outputs: {
          nzSortOrderChange: "nzSortOrderChange"
        },
        ngContentSelectors: _c0,
        decls: 3,
        vars: 1,
        consts: [["contentTemplate", ""], [4, "ngIf"], [3, "ngTemplateOutlet"]],
        template: function NzTheadComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NzTheadComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NzTheadComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isInsideTable);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]],
        encapsulation: 2,
        changeDetection: 0
      });

      NzTheadComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
        }, {
          type: NzTableStyleService,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: NzTableDataService,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }];
      };

      NzTheadComponent.propDecorators = {
        templateRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['contentTemplate', {
            "static": true
          }]
        }],
        listOfNzTrDirective: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
          args: [NzTrDirective, {
            descendants: true
          }]
        }],
        listOfNzThAddOnComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
          args: [NzThAddOnComponent, {
            descendants: true
          }]
        }],
        nzSortOrderChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzTheadComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'thead:not(.ant-table-thead)',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            template: "\n    <ng-template #contentTemplate>\n      <ng-content></ng-content>\n    </ng-template>\n    <ng-container *ngIf=\"!isInsideTable\">\n      <ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template>\n    </ng-container>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
          }, {
            type: NzTableStyleService,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: NzTableDataService,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }];
        }, {
          nzSortOrderChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          templateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['contentTemplate', {
              "static": true
            }]
          }],
          listOfNzTrDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
            args: [NzTrDirective, {
              descendants: true
            }]
          }],
          listOfNzThAddOnComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
            args: [NzThAddOnComponent, {
              descendants: true
            }]
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzTableTitleFooterComponent = /*#__PURE__*/_createClass(function NzTableTitleFooterComponent() {
        _classCallCheck(this, NzTableTitleFooterComponent);

        this.title = null;
        this.footer = null;
      });

      NzTableTitleFooterComponent.ɵfac = function NzTableTitleFooterComponent_Factory(t) {
        return new (t || NzTableTitleFooterComponent)();
      };

      NzTableTitleFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: NzTableTitleFooterComponent,
        selectors: [["nz-table-title-footer"]],
        hostVars: 4,
        hostBindings: function NzTableTitleFooterComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-table-title", ctx.title !== null)("ant-table-footer", ctx.footer !== null);
          }
        },
        inputs: {
          title: "title",
          footer: "footer"
        },
        decls: 2,
        vars: 2,
        consts: [[4, "nzStringTemplateOutlet"]],
        template: function NzTableTitleFooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NzTableTitleFooterComponent_ng_container_0_Template, 2, 1, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzTableTitleFooterComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.footer);
          }
        },
        directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzStringTemplateOutletDirective"]],
        encapsulation: 2,
        changeDetection: 0
      });
      NzTableTitleFooterComponent.propDecorators = {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        footer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzTableTitleFooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'nz-table-title-footer',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            template: "\n    <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n    <ng-container *nzStringTemplateOutlet=\"footer\">{{ footer }}</ng-container>\n  ",
            host: {
              '[class.ant-table-title]': "title !== null",
              '[class.ant-table-footer]': "footer !== null"
            }
          }]
        }], function () {
          return [];
        }, {
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          footer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzTrExpandDirective = /*#__PURE__*/_createClass(function NzTrExpandDirective(elementRef) {
        _classCallCheck(this, NzTrExpandDirective);

        this.elementRef = elementRef;
        this.nzExpand = true; // TODO: move to host after View Engine deprecation

        this.elementRef.nativeElement.classList.add('ant-table-expanded-row');
      });

      NzTrExpandDirective.ɵfac = function NzTrExpandDirective_Factory(t) {
        return new (t || NzTrExpandDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]));
      };

      NzTrExpandDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: NzTrExpandDirective,
        selectors: [["tr", "nzExpand", ""]],
        hostVars: 1,
        hostBindings: function NzTrExpandDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵhostProperty"]("hidden", !ctx.nzExpand);
          }
        },
        inputs: {
          nzExpand: "nzExpand"
        }
      });

      NzTrExpandDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }];
      };

      NzTrExpandDirective.propDecorators = {
        nzExpand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzTrExpandDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: 'tr[nzExpand]',
            host: {
              '[hidden]': "!nzExpand"
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }];
        }, {
          nzExpand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzTrMeasureComponent = /*#__PURE__*/function () {
        function NzTrMeasureComponent(nzResizeObserver, ngZone, elementRef) {
          _classCallCheck(this, NzTrMeasureComponent);

          this.nzResizeObserver = nzResizeObserver;
          this.ngZone = ngZone;
          this.elementRef = elementRef;
          this.listOfMeasureColumn = [];
          this.listOfAutoWidth = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__["Subject"](); // TODO: move to host after View Engine deprecation

          this.elementRef.nativeElement.classList.add('ant-table-measure-now');
        }

        _createClass(NzTrMeasureComponent, [{
          key: "trackByFunc",
          value: function trackByFunc(_, key) {
            return key;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this25 = this;

            this.listOfTdElement.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["startWith"])(this.listOfTdElement)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["switchMap"])(function (list) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_19__["combineLatest"])(list.toArray().map(function (item) {
                return _this25.nzResizeObserver.observe(item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["map"])(function (_ref19) {
                  var _ref20 = _slicedToArray(_ref19, 1),
                      entry = _ref20[0];

                  var _entry$target$getBoun2 = entry.target.getBoundingClientRect(),
                      width = _entry$target$getBoun2.width;

                  return Math.floor(width);
                }));
              }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["debounceTime"])(16), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this.destroy$)).subscribe(function (data) {
              _this25.ngZone.run(function () {
                _this25.listOfAutoWidth.next(data);
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }]);

        return NzTrMeasureComponent;
      }();

      NzTrMeasureComponent.ɵfac = function NzTrMeasureComponent_Factory(t) {
        return new (t || NzTrMeasureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_9__["NzResizeObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]));
      };

      NzTrMeasureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: NzTrMeasureComponent,
        selectors: [["tr", "nz-table-measure-row", ""]],
        viewQuery: function NzTrMeasureComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c7, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.listOfTdElement = _t);
          }
        },
        inputs: {
          listOfMeasureColumn: "listOfMeasureColumn"
        },
        outputs: {
          listOfAutoWidth: "listOfAutoWidth"
        },
        attrs: _c13,
        decls: 1,
        vars: 2,
        consts: [["class", "nz-disable-td", "style", "padding: 0px; border: 0px; height: 0px;", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "nz-disable-td", 2, "padding", "0px", "border", "0px", "height", "0px"], ["tdElement", ""]],
        template: function NzTrMeasureComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NzTrMeasureComponent_td_0_Template, 2, 0, "td", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.listOfMeasureColumn)("ngForTrackBy", ctx.trackByFunc);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        encapsulation: 2,
        changeDetection: 0
      });

      NzTrMeasureComponent.ctorParameters = function () {
        return [{
          type: ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_9__["NzResizeObserver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }];
      };

      NzTrMeasureComponent.propDecorators = {
        listOfMeasureColumn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        listOfAutoWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        listOfTdElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChildren"],
          args: ['tdElement']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzTrMeasureComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'tr[nz-table-measure-row]',
            preserveWhitespaces: false,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            template: "\n    <td\n      #tdElement\n      class=\"nz-disable-td\"\n      style=\"padding: 0px; border: 0px; height: 0px;\"\n      *ngFor=\"let th of listOfMeasureColumn; trackBy: trackByFunc\"\n    ></td>\n  "
          }]
        }], function () {
          return [{
            type: ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_9__["NzResizeObserver"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }];
        }, {
          listOfMeasureColumn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          listOfAutoWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          listOfTdElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChildren"],
            args: ['tdElement']
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzTableModule = /*#__PURE__*/_createClass(function NzTableModule() {
        _classCallCheck(this, NzTableModule);
      });

      NzTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: NzTableModule
      });
      NzTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function NzTableModule_Factory(t) {
          return new (t || NzTableModule)();
        },
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_14__["NzMenuModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzOutletModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__["NzRadioModule"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_7__["NzCheckboxModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropDownModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"], ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_15__["NzPaginationModule"], ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_9__["NzResizeObserversModule"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_17__["NzSpinModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_11__["NzEmptyModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NzTableModule, {
          declarations: function declarations() {
            return [NzTableComponent, NzThAddOnComponent, NzTableCellDirective, NzThMeasureDirective, NzTdAddOnComponent, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTrExpandDirective, NzTableVirtualScrollDirective, NzCellFixedDirective, NzTableContentComponent, NzTableTitleFooterComponent, NzTableInnerDefaultComponent, NzTableInnerScrollComponent, NzTrMeasureComponent, NzRowIndentDirective, NzRowExpandButtonDirective, NzCellBreakWordDirective, NzCellAlignDirective, NzTableSortersComponent, NzTableFilterComponent, NzTableSelectionComponent, NzCellEllipsisDirective, NzFilterTriggerComponent, NzTableFixedRowComponent, NzThSelectionComponent];
          },
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_14__["NzMenuModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzOutletModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__["NzRadioModule"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_7__["NzCheckboxModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropDownModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"], ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_15__["NzPaginationModule"], ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_9__["NzResizeObserversModule"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_17__["NzSpinModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_11__["NzEmptyModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"]];
          },
          exports: function exports() {
            return [NzTableComponent, NzThAddOnComponent, NzTableCellDirective, NzThMeasureDirective, NzTdAddOnComponent, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTableVirtualScrollDirective, NzCellFixedDirective, NzFilterTriggerComponent, NzTrExpandDirective, NzCellBreakWordDirective, NzCellAlignDirective, NzCellEllipsisDirective, NzTableFixedRowComponent, NzThSelectionComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzTableModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
          args: [{
            declarations: [NzTableComponent, NzThAddOnComponent, NzTableCellDirective, NzThMeasureDirective, NzTdAddOnComponent, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTrExpandDirective, NzTableVirtualScrollDirective, NzCellFixedDirective, NzTableContentComponent, NzTableTitleFooterComponent, NzTableInnerDefaultComponent, NzTableInnerScrollComponent, NzTrMeasureComponent, NzRowIndentDirective, NzRowExpandButtonDirective, NzCellBreakWordDirective, NzCellAlignDirective, NzTableSortersComponent, NzTableFilterComponent, NzTableSelectionComponent, NzCellEllipsisDirective, NzFilterTriggerComponent, NzTableFixedRowComponent, NzThSelectionComponent],
            exports: [NzTableComponent, NzThAddOnComponent, NzTableCellDirective, NzThMeasureDirective, NzTdAddOnComponent, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTableVirtualScrollDirective, NzCellFixedDirective, NzFilterTriggerComponent, NzTrExpandDirective, NzCellBreakWordDirective, NzCellAlignDirective, NzCellEllipsisDirective, NzTableFixedRowComponent, NzThSelectionComponent],
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_14__["NzMenuModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_8__["NzOutletModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__["NzRadioModule"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_7__["NzCheckboxModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropDownModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"], ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_15__["NzPaginationModule"], ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_9__["NzResizeObserversModule"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_17__["NzSpinModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_11__["NzEmptyModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"]]
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
      //# sourceMappingURL=ng-zorro-antd-table.js.map

      /***/

    },

    /***/
    "zAKX":
    /*!**********************************************************************************!*\
      !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js ***!
      \**********************************************************************************/

    /*! exports provided: NzOptionComponent, NzOptionContainerComponent, NzOptionGroupComponent, NzOptionItemComponent, NzOptionItemGroupComponent, NzSelectArrowComponent, NzSelectClearComponent, NzSelectComponent, NzSelectItemComponent, NzSelectModule, NzSelectPlaceholderComponent, NzSelectSearchComponent, NzSelectTopControlComponent, ɵ0 */

    /***/
    function zAKX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzOptionComponent", function () {
        return NzOptionComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzOptionContainerComponent", function () {
        return NzOptionContainerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzOptionGroupComponent", function () {
        return NzOptionGroupComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzOptionItemComponent", function () {
        return NzOptionItemComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzOptionItemGroupComponent", function () {
        return NzOptionItemGroupComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzSelectArrowComponent", function () {
        return NzSelectArrowComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzSelectClearComponent", function () {
        return NzSelectClearComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzSelectComponent", function () {
        return NzSelectComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzSelectItemComponent", function () {
        return NzSelectItemComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzSelectModule", function () {
        return NzSelectModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzSelectPlaceholderComponent", function () {
        return NzSelectPlaceholderComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzSelectSearchComponent", function () {
        return NzSelectSearchComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NzSelectTopControlComponent", function () {
        return NzSelectTopControlComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/core/util */
      "/KA4");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/core/animation */
      "GR68");
      /* harmony import */


      var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/core/config */
      "2Suw");
      /* harmony import */


      var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-zorro-antd/core/no-animation */
      "YF2q");
      /* harmony import */


      var ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-zorro-antd/core/polyfill */
      "ejfv");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-zorro-antd/core/outlet */
      "pdGh");
      /* harmony import */


      var ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng-zorro-antd/core/overlay */
      "JgHy");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ng-zorro-antd/empty */
      "QlLE");
      /* harmony import */


      var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ng-zorro-antd/i18n */
      "Rm4T");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var _c0 = ["*"];

      function NzOptionContainerComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-embed-empty", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("specificContent", ctx_r0.notFoundContent);
        }
      }

      function NzOptionContainerComponent_ng_template_3_nz_option_item_group_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option-item-group", 9);
        }

        if (rf & 2) {
          var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", item_r3.groupLabel);
        }
      }

      function NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option-item", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemHover", function NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template_nz_option_item_itemHover_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.onItemHover($event);
          })("itemClick", function NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template_nz_option_item_itemClick_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r9.onItemClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r5.menuItemSelectedIcon)("customContent", item_r3.nzCustomContent)("template", item_r3.template)("grouped", !!item_r3.groupLabel)("disabled", item_r3.nzDisabled)("showState", ctx_r5.mode === "tags" || ctx_r5.mode === "multiple")("label", item_r3.nzLabel)("compareWith", ctx_r5.compareWith)("activatedValue", ctx_r5.activatedValue)("listOfSelectedValue", ctx_r5.listOfSelectedValue)("value", item_r3.nzValue);
        }
      }

      function NzOptionContainerComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzOptionContainerComponent_ng_template_3_nz_option_item_group_1_Template, 1, 1, "nz-option-item-group", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template, 1, 11, "nz-option-item", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", item_r3.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "item");
        }
      }

      function NzOptionContainerComponent_ng_template_4_Template(rf, ctx) {}

      function NzOptionComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      }

      var _c1 = ["inputElement"];
      var _c2 = ["mirrorElement"];

      function NzSelectSearchComponent_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 3, 4);
        }
      }

      function NzSelectTopControlComponent_ng_container_1_nz_select_item_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-select-item", 6);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("deletable", false)("disabled", false)("removeIcon", ctx_r3.removeIcon)("label", ctx_r3.listOfTopItem[0].nzLabel)("contentTemplateOutlet", ctx_r3.customTemplate)("contentTemplateOutletContext", ctx_r3.listOfTopItem[0]);
        }
      }

      function NzSelectTopControlComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-select-search", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isComposingChange", function NzSelectTopControlComponent_ng_container_1_Template_nz_select_search_isComposingChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.isComposingChange($event);
          })("valueChange", function NzSelectTopControlComponent_ng_container_1_Template_nz_select_search_valueChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.onInputValueChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectTopControlComponent_ng_container_1_nz_select_item_2_Template, 1, 6, "nz-select-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", ctx_r0.nzId)("disabled", ctx_r0.disabled)("value", ctx_r0.inputValue)("showInput", ctx_r0.showSearch)("mirrorSync", false)("autofocus", ctx_r0.autofocus)("focusTrigger", ctx_r0.open);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isShowSingleLabel);
        }
      }

      function NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("delete", function NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template_nz_select_item_delete_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var item_r8 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r9.onDeleteItem(item_r8.contentTemplateOutletContext);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r8 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("removeIcon", ctx_r7.removeIcon)("label", item_r8.nzLabel)("disabled", item_r8.nzDisabled || ctx_r7.disabled)("contentTemplateOutlet", item_r8.contentTemplateOutlet)("deletable", true)("contentTemplateOutletContext", item_r8.contentTemplateOutletContext);
        }
      }

      function NzSelectTopControlComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template, 1, 6, "nz-select-item", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-select-search", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isComposingChange", function NzSelectTopControlComponent_ng_container_2_Template_nz_select_search_isComposingChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.isComposingChange($event);
          })("valueChange", function NzSelectTopControlComponent_ng_container_2_Template_nz_select_search_valueChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.onInputValueChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.listOfSlicedItem)("ngForTrackBy", ctx_r1.trackValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", ctx_r1.nzId)("disabled", ctx_r1.disabled)("value", ctx_r1.inputValue)("autofocus", ctx_r1.autofocus)("showInput", true)("mirrorSync", true)("focusTrigger", ctx_r1.open);
        }
      }

      function NzSelectTopControlComponent_nz_select_placeholder_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-select-placeholder", 10);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r2.placeHolder);
        }
      }

      function NzSelectComponent_nz_select_arrow_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-select-arrow", 5);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx_r1.nzLoading)("search", ctx_r1.nzOpen && ctx_r1.nzShowSearch)("suffixIcon", ctx_r1.nzSuffixIcon);
        }
      }

      function NzSelectComponent_nz_select_clear_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select-clear", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clear", function NzSelectComponent_nz_select_clear_3_Template_nz_select_clear_clear_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.onClearSelection();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clearIcon", ctx_r2.nzClearIcon);
        }
      }

      function NzSelectComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NzSelectComponent_ng_template_4_Template_nz_option_container_keydown_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.onKeyDown($event);
          })("itemClick", function NzSelectComponent_ng_template_4_Template_nz_option_container_itemClick_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.onItemClick($event);
          })("scrollToBottom", function NzSelectComponent_ng_template_4_Template_nz_option_container_scrollToBottom_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.nzScrollToBottom.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-dropdown-placement-bottomLeft", ctx_r3.dropDownPosition === "bottom")("ant-select-dropdown-placement-topLeft", ctx_r3.dropDownPosition === "top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r3.nzDropdownStyle)("itemSize", ctx_r3.nzOptionHeightPx)("maxItemLength", ctx_r3.nzOptionOverflowSize)("matchWidth", ctx_r3.nzDropdownMatchSelectWidth)("@slideMotion", "enter")("@.disabled", ctx_r3.noAnimation == null ? null : ctx_r3.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r3.noAnimation == null ? null : ctx_r3.noAnimation.nzNoAnimation)("listOfContainerItem", ctx_r3.listOfContainerItem)("menuItemSelectedIcon", ctx_r3.nzMenuItemSelectedIcon)("notFoundContent", ctx_r3.nzNotFoundContent)("activatedValue", ctx_r3.activatedValue)("listOfSelectedValue", ctx_r3.listOfValue)("dropdownRender", ctx_r3.nzDropdownRender)("compareWith", ctx_r3.compareWith)("mode", ctx_r3.nzMode);
        }
      }

      function NzOptionItemGroupComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.nzLabel);
        }
      }

      function NzOptionItemComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.label);
        }
      }

      function NzOptionItemComponent_ng_container_2_ng_template_1_Template(rf, ctx) {}

      function NzOptionItemComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzOptionItemComponent_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.template);
        }
      }

      function NzOptionItemComponent_div_3_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 6);
        }
      }

      function NzOptionItemComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzOptionItemComponent_div_3_i_1_Template, 1, 0, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.icon)("ngIfElse", ctx_r2.icon);
        }
      }

      function NzSelectArrowComponent_i_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 2);
        }
      }

      function NzSelectArrowComponent_ng_template_1_ng_container_0_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 7);
        }
      }

      function NzSelectArrowComponent_ng_template_1_ng_container_0_i_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 8);
        }
      }

      function NzSelectArrowComponent_ng_template_1_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectArrowComponent_ng_template_1_ng_container_0_i_1_Template, 1, 0, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectArrowComponent_ng_template_1_ng_container_0_i_2_Template, 1, 0, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.search);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.search);
        }
      }

      function NzSelectArrowComponent_ng_template_1_ng_template_1_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var suffixIcon_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", suffixIcon_r9);
        }
      }

      function NzSelectArrowComponent_ng_template_1_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectArrowComponent_ng_template_1_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 9);
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r5.suffixIcon);
        }
      }

      function NzSelectArrowComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectArrowComponent_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectArrowComponent_ng_template_1_ng_template_1_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.suffixIcon)("ngIfElse", _r4);
        }
      }

      function NzSelectClearComponent_i_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 1);
        }
      }

      function NzSelectItemComponent_ng_container_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.label);
        }
      }

      function NzSelectItemComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.label);
        }
      }

      function NzSelectItemComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectItemComponent_ng_container_0_div_1_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectItemComponent_ng_container_0_ng_template_2_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.deletable)("ngIfElse", _r3);
        }
      }

      function NzSelectItemComponent_span_1_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 7);
        }
      }

      function NzSelectItemComponent_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzSelectItemComponent_span_1_Template_span_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.onDelete($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectItemComponent_span_1_i_1_Template, 1, 0, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.removeIcon)("ngIfElse", ctx_r1.removeIcon);
        }
      }

      var _c3 = function _c3(a0) {
        return {
          $implicit: a0
        };
      };

      function NzSelectPlaceholderComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.placeholder, " ");
        }
      }

      var NzOptionGroupComponent = /*#__PURE__*/function () {
        function NzOptionGroupComponent() {
          _classCallCheck(this, NzOptionGroupComponent);

          this.nzLabel = null;
          this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(NzOptionGroupComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.changes.next();
          }
        }]);

        return NzOptionGroupComponent;
      }();

      NzOptionGroupComponent.ɵfac = function NzOptionGroupComponent_Factory(t) {
        return new (t || NzOptionGroupComponent)();
      };

      NzOptionGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NzOptionGroupComponent,
        selectors: [["nz-option-group"]],
        inputs: {
          nzLabel: "nzLabel"
        },
        exportAs: ["nzOptionGroup"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function NzOptionGroupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });
      NzOptionGroupComponent.propDecorators = {
        nzLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var NzOptionContainerComponent = /*#__PURE__*/function () {
        function NzOptionContainerComponent(elementRef) {
          _classCallCheck(this, NzOptionContainerComponent);

          this.elementRef = elementRef;
          this.notFoundContent = undefined;
          this.menuItemSelectedIcon = null;
          this.dropdownRender = null;
          this.activatedValue = null;
          this.listOfSelectedValue = [];
          this.mode = 'default';
          this.matchWidth = true;
          this.itemSize = 32;
          this.maxItemLength = 8;
          this.listOfContainerItem = [];
          this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.scrollToBottom = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.scrolledIndex = 0; // TODO: move to host after View Engine deprecation

          this.elementRef.nativeElement.classList.add('ant-select-dropdown');
        }

        _createClass(NzOptionContainerComponent, [{
          key: "onItemClick",
          value: function onItemClick(value) {
            this.itemClick.emit(value);
          }
        }, {
          key: "onItemHover",
          value: function onItemHover(value) {
            // TODO: keydown.enter won't activate this value
            this.activatedValue = value;
          }
        }, {
          key: "trackValue",
          value: function trackValue(_index, option) {
            return option.key;
          }
        }, {
          key: "onScrolledIndexChange",
          value: function onScrolledIndexChange(index) {
            this.scrolledIndex = index;

            if (index === this.listOfContainerItem.length - this.maxItemLength) {
              this.scrollToBottom.emit();
            }
          }
        }, {
          key: "scrollToActivatedValue",
          value: function scrollToActivatedValue() {
            var _this26 = this;

            var index = this.listOfContainerItem.findIndex(function (item) {
              return _this26.compareWith(item.key, _this26.activatedValue);
            });

            if (index < this.scrolledIndex || index >= this.scrolledIndex + this.maxItemLength) {
              this.cdkVirtualScrollViewport.scrollToIndex(index || 0);
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var listOfContainerItem = changes.listOfContainerItem,
                activatedValue = changes.activatedValue;

            if (listOfContainerItem || activatedValue) {
              this.scrollToActivatedValue();
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this27 = this;

            setTimeout(function () {
              return _this27.scrollToActivatedValue();
            });
          }
        }]);

        return NzOptionContainerComponent;
      }();

      NzOptionContainerComponent.ɵfac = function NzOptionContainerComponent_Factory(t) {
        return new (t || NzOptionContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      NzOptionContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NzOptionContainerComponent,
        selectors: [["nz-option-container"]],
        viewQuery: function NzOptionContainerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cdkVirtualScrollViewport = _t.first);
          }
        },
        inputs: {
          notFoundContent: "notFoundContent",
          menuItemSelectedIcon: "menuItemSelectedIcon",
          dropdownRender: "dropdownRender",
          activatedValue: "activatedValue",
          listOfSelectedValue: "listOfSelectedValue",
          mode: "mode",
          matchWidth: "matchWidth",
          itemSize: "itemSize",
          maxItemLength: "maxItemLength",
          listOfContainerItem: "listOfContainerItem",
          compareWith: "compareWith"
        },
        outputs: {
          itemClick: "itemClick",
          scrollToBottom: "scrollToBottom"
        },
        exportAs: ["nzOptionContainer"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 5,
        vars: 14,
        consts: [["class", "ant-select-item-empty", 4, "ngIf"], [3, "itemSize", "maxBufferPx", "minBufferPx", "scrolledIndexChange"], ["cdkVirtualFor", "", 3, "cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplateCacheSize"], [3, "ngTemplateOutlet"], [1, "ant-select-item-empty"], ["nzComponentName", "select", 3, "specificContent"], [3, "ngSwitch"], [3, "nzLabel", 4, "ngSwitchCase"], [3, "icon", "customContent", "template", "grouped", "disabled", "showState", "label", "compareWith", "activatedValue", "listOfSelectedValue", "value", "itemHover", "itemClick", 4, "ngSwitchCase"], [3, "nzLabel"], [3, "icon", "customContent", "template", "grouped", "disabled", "showState", "label", "compareWith", "activatedValue", "listOfSelectedValue", "value", "itemHover", "itemClick"]],
        template: function NzOptionContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzOptionContainerComponent_div_1_Template, 2, 1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "cdk-virtual-scroll-viewport", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrolledIndexChange", function NzOptionContainerComponent_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_2_listener($event) {
              return ctx.onScrolledIndexChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzOptionContainerComponent_ng_template_3_Template, 3, 3, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzOptionContainerComponent_ng_template_4_Template, 0, 0, "ng-template", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listOfContainerItem.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.listOfContainerItem.length * ctx.itemSize, "px")("max-height", ctx.itemSize * ctx.maxItemLength, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("full-width", !ctx.matchWidth);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemSize", ctx.itemSize)("maxBufferPx", ctx.itemSize * ctx.maxItemLength)("minBufferPx", ctx.itemSize * ctx.maxItemLength);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkVirtualForOf", ctx.listOfContainerItem)("cdkVirtualForTrackBy", ctx.trackValue)("cdkVirtualForTemplateCacheSize", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.dropdownRender);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkFixedSizeVirtualScroll"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgTemplateOutlet"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_20__["NzEmbedEmptyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgSwitchCase"], NzOptionItemGroupComponent, NzOptionItemComponent];
        },
        encapsulation: 2,
        changeDetection: 0
      });

      NzOptionContainerComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      NzOptionContainerComponent.propDecorators = {
        notFoundContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        menuItemSelectedIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dropdownRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        activatedValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        listOfSelectedValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        matchWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        itemSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxItemLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        listOfContainerItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        itemClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        scrollToBottom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        cdkVirtualScrollViewport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"], {
            "static": true
          }]
        }]
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var NzOptionComponent = /*#__PURE__*/function () {
        function NzOptionComponent(nzOptionGroupComponent) {
          _classCallCheck(this, NzOptionComponent);

          this.nzOptionGroupComponent = nzOptionGroupComponent;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.groupLabel = null;
          this.nzLabel = null;
          this.nzValue = null;
          this.nzDisabled = false;
          this.nzHide = false;
          this.nzCustomContent = false;
        }

        _createClass(NzOptionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this28 = this;

            if (this.nzOptionGroupComponent) {
              this.nzOptionGroupComponent.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function () {
                _this28.groupLabel = _this28.nzOptionGroupComponent.nzLabel;
              });
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.changes.next();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }]);

        return NzOptionComponent;
      }();

      NzOptionComponent.ɵfac = function NzOptionComponent_Factory(t) {
        return new (t || NzOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzOptionGroupComponent, 8));
      };

      NzOptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NzOptionComponent,
        selectors: [["nz-option"]],
        viewQuery: function NzOptionComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
          }
        },
        inputs: {
          nzLabel: "nzLabel",
          nzValue: "nzValue",
          nzDisabled: "nzDisabled",
          nzHide: "nzHide",
          nzCustomContent: "nzCustomContent"
        },
        exportAs: ["nzOption"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function NzOptionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzOptionComponent_ng_template_0_Template, 1, 0, "ng-template");
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });

      NzOptionComponent.ctorParameters = function () {
        return [{
          type: NzOptionGroupComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      };

      NzOptionComponent.propDecorators = {
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], {
            "static": true
          }]
        }],
        nzLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzHide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzCustomContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], NzOptionComponent.prototype, "nzDisabled", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], NzOptionComponent.prototype, "nzHide", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], NzOptionComponent.prototype, "nzCustomContent", void 0);
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var NzSelectSearchComponent = /*#__PURE__*/function () {
        function NzSelectSearchComponent(elementRef, renderer, focusMonitor) {
          _classCallCheck(this, NzSelectSearchComponent);

          this.elementRef = elementRef;
          this.renderer = renderer;
          this.focusMonitor = focusMonitor;
          this.nzId = null;
          this.disabled = false;
          this.mirrorSync = false;
          this.showInput = true;
          this.focusTrigger = false;
          this.value = '';
          this.autofocus = false;
          this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.isComposingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // TODO: move to host after View Engine deprecation

          this.elementRef.nativeElement.classList.add('ant-select-selection-search');
        }

        _createClass(NzSelectSearchComponent, [{
          key: "setCompositionState",
          value: function setCompositionState(isComposing) {
            this.isComposingChange.next(isComposing);
          }
        }, {
          key: "onValueChange",
          value: function onValueChange(value) {
            this.value = value;
            this.valueChange.next(value);

            if (this.mirrorSync) {
              this.syncMirrorWidth();
            }
          }
        }, {
          key: "clearInputValue",
          value: function clearInputValue() {
            var inputDOM = this.inputElement.nativeElement;
            inputDOM.value = '';
            this.onValueChange('');
          }
        }, {
          key: "syncMirrorWidth",
          value: function syncMirrorWidth() {
            var mirrorDOM = this.mirrorElement.nativeElement;
            var hostDOM = this.elementRef.nativeElement;
            var inputDOM = this.inputElement.nativeElement;
            this.renderer.removeStyle(hostDOM, 'width');
            mirrorDOM.innerHTML = this.renderer.createText("".concat(inputDOM.value, "&nbsp;"));
            this.renderer.setStyle(hostDOM, 'width', "".concat(mirrorDOM.scrollWidth, "px"));
          }
        }, {
          key: "focus",
          value: function focus() {
            this.focusMonitor.focusVia(this.inputElement, 'keyboard');
          }
        }, {
          key: "blur",
          value: function blur() {
            this.inputElement.nativeElement.blur();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var inputDOM = this.inputElement.nativeElement;
            var focusTrigger = changes.focusTrigger,
                showInput = changes.showInput;

            if (showInput) {
              if (this.showInput) {
                this.renderer.removeAttribute(inputDOM, 'readonly');
              } else {
                this.renderer.setAttribute(inputDOM, 'readonly', 'readonly');
              }
            } // IE11 cannot input value if focused before removing readonly


            if (focusTrigger && focusTrigger.currentValue === true && focusTrigger.previousValue === false) {
              inputDOM.focus();
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.mirrorSync) {
              this.syncMirrorWidth();
            }

            if (this.autofocus) {
              this.focus();
            }
          }
        }]);

        return NzSelectSearchComponent;
      }();

      NzSelectSearchComponent.ɵfac = function NzSelectSearchComponent_Factory(t) {
        return new (t || NzSelectSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]));
      };

      NzSelectSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NzSelectSearchComponent,
        selectors: [["nz-select-search"]],
        viewQuery: function NzSelectSearchComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mirrorElement = _t.first);
          }
        },
        inputs: {
          nzId: "nzId",
          disabled: "disabled",
          mirrorSync: "mirrorSync",
          showInput: "showInput",
          focusTrigger: "focusTrigger",
          value: "value",
          autofocus: "autofocus"
        },
        outputs: {
          valueChange: "valueChange",
          isComposingChange: "isComposingChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["COMPOSITION_BUFFER_MODE"],
          useValue: false
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 3,
        vars: 7,
        consts: [["autocomplete", "off", 1, "ant-select-selection-search-input", 3, "ngModel", "disabled", "ngModelChange", "compositionstart", "compositionend"], ["inputElement", ""], ["class", "ant-select-selection-search-mirror", 4, "ngIf"], [1, "ant-select-selection-search-mirror"], ["mirrorElement", ""]],
        template: function NzSelectSearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzSelectSearchComponent_Template_input_ngModelChange_0_listener($event) {
              return ctx.onValueChange($event);
            })("compositionstart", function NzSelectSearchComponent_Template_input_compositionstart_0_listener() {
              return ctx.setCompositionState(true);
            })("compositionend", function NzSelectSearchComponent_Template_input_compositionend_0_listener() {
              return ctx.setCompositionState(false);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectSearchComponent_span_2_Template, 2, 0, "span", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", ctx.showInput ? null : 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.nzId)("autofocus", ctx.autofocus ? "autofocus" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mirrorSync);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"]],
        encapsulation: 2,
        changeDetection: 0
      });

      NzSelectSearchComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]
        }];
      };

      NzSelectSearchComponent.propDecorators = {
        nzId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        mirrorSync: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        focusTrigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        autofocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        isComposingChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        inputElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['inputElement', {
            "static": true
          }]
        }],
        mirrorElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['mirrorElement', {
            "static": false
          }]
        }]
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var NzSelectTopControlComponent = /*#__PURE__*/function () {
        function NzSelectTopControlComponent(elementRef, noAnimation) {
          _classCallCheck(this, NzSelectTopControlComponent);

          this.elementRef = elementRef;
          this.noAnimation = noAnimation;
          this.nzId = null;
          this.showSearch = false;
          this.placeHolder = null;
          this.open = false;
          this.maxTagCount = Infinity;
          this.autofocus = false;
          this.disabled = false;
          this.mode = 'default';
          this.customTemplate = null;
          this.maxTagPlaceholder = null;
          this.removeIcon = null;
          this.listOfTopItem = [];
          this.tokenSeparators = [];
          this.tokenize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.inputValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.deleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.listOfSlicedItem = [];
          this.isShowPlaceholder = true;
          this.isShowSingleLabel = false;
          this.isComposing = false;
          this.inputValue = null; // TODO: move to host after View Engine deprecation

          this.elementRef.nativeElement.classList.add('ant-select-selector');
        }

        _createClass(NzSelectTopControlComponent, [{
          key: "onHostKeydown",
          value: function onHostKeydown(e) {
            var inputValue = e.target.value;

            if (e.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["BACKSPACE"] && this.mode !== 'default' && !inputValue && this.listOfTopItem.length > 0) {
              e.preventDefault();
              this.onDeleteItem(this.listOfTopItem[this.listOfTopItem.length - 1]);
            }
          }
        }, {
          key: "updateTemplateVariable",
          value: function updateTemplateVariable() {
            var isSelectedValueEmpty = this.listOfTopItem.length === 0;
            this.isShowPlaceholder = isSelectedValueEmpty && !this.isComposing && !this.inputValue;
            this.isShowSingleLabel = !isSelectedValueEmpty && !this.isComposing && !this.inputValue;
          }
        }, {
          key: "isComposingChange",
          value: function isComposingChange(isComposing) {
            this.isComposing = isComposing;
            this.updateTemplateVariable();
          }
        }, {
          key: "onInputValueChange",
          value: function onInputValueChange(value) {
            if (value !== this.inputValue) {
              this.inputValue = value;
              this.updateTemplateVariable();
              this.inputValueChange.emit(value);
              this.tokenSeparate(value, this.tokenSeparators);
            }
          }
        }, {
          key: "tokenSeparate",
          value: function tokenSeparate(inputValue, tokenSeparators) {
            var includesSeparators = function includesSeparators(str, separators) {
              // tslint:disable-next-line:prefer-for-of
              for (var i = 0; i < separators.length; ++i) {
                if (str.lastIndexOf(separators[i]) > 0) {
                  return true;
                }
              }

              return false;
            };

            var splitBySeparators = function splitBySeparators(str, separators) {
              var reg = new RegExp("[".concat(separators.join(), "]"));
              var array = str.split(reg).filter(function (token) {
                return token;
              });
              return _toConsumableArray(new Set(array));
            };

            if (inputValue && inputValue.length && tokenSeparators.length && this.mode !== 'default' && includesSeparators(inputValue, tokenSeparators)) {
              var listOfLabel = splitBySeparators(inputValue, tokenSeparators);
              this.tokenize.next(listOfLabel);
            }
          }
        }, {
          key: "clearInputValue",
          value: function clearInputValue() {
            if (this.nzSelectSearchComponent) {
              this.nzSelectSearchComponent.clearInputValue();
            }
          }
        }, {
          key: "focus",
          value: function focus() {
            if (this.nzSelectSearchComponent) {
              this.nzSelectSearchComponent.focus();
            }
          }
        }, {
          key: "blur",
          value: function blur() {
            if (this.nzSelectSearchComponent) {
              this.nzSelectSearchComponent.blur();
            }
          }
        }, {
          key: "trackValue",
          value: function trackValue(_index, option) {
            return option.nzValue;
          }
        }, {
          key: "onDeleteItem",
          value: function onDeleteItem(item) {
            if (!this.disabled && !item.nzDisabled) {
              this.deleteItem.next(item);
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this29 = this;

            var listOfTopItem = changes.listOfTopItem,
                maxTagCount = changes.maxTagCount,
                customTemplate = changes.customTemplate,
                maxTagPlaceholder = changes.maxTagPlaceholder;

            if (listOfTopItem) {
              this.updateTemplateVariable();
            }

            if (listOfTopItem || maxTagCount || customTemplate || maxTagPlaceholder) {
              var listOfSlicedItem = this.listOfTopItem.slice(0, this.maxTagCount).map(function (o) {
                return {
                  nzLabel: o.nzLabel,
                  nzValue: o.nzValue,
                  nzDisabled: o.nzDisabled,
                  contentTemplateOutlet: _this29.customTemplate,
                  contentTemplateOutletContext: o
                };
              });

              if (this.listOfTopItem.length > this.maxTagCount) {
                var exceededLabel = "+ ".concat(this.listOfTopItem.length - this.maxTagCount, " ...");
                var listOfSelectedValue = this.listOfTopItem.map(function (item) {
                  return item.nzValue;
                });
                var exceededItem = {
                  nzLabel: exceededLabel,
                  nzValue: '$$__nz_exceeded_item',
                  nzDisabled: true,
                  contentTemplateOutlet: this.maxTagPlaceholder,
                  contentTemplateOutletContext: listOfSelectedValue.slice(this.maxTagCount)
                };
                listOfSlicedItem.push(exceededItem);
              }

              this.listOfSlicedItem = listOfSlicedItem;
            }
          }
        }]);

        return NzSelectTopControlComponent;
      }();

      NzSelectTopControlComponent.ɵfac = function NzSelectTopControlComponent_Factory(t) {
        return new (t || NzSelectTopControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_14__["NzNoAnimationDirective"], 9));
      };

      NzSelectTopControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NzSelectTopControlComponent,
        selectors: [["nz-select-top-control"]],
        viewQuery: function NzSelectTopControlComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzSelectSearchComponent, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzSelectSearchComponent = _t.first);
          }
        },
        hostBindings: function NzSelectTopControlComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NzSelectTopControlComponent_keydown_HostBindingHandler($event) {
              return ctx.onHostKeydown($event);
            });
          }
        },
        inputs: {
          nzId: "nzId",
          showSearch: "showSearch",
          placeHolder: "placeHolder",
          open: "open",
          maxTagCount: "maxTagCount",
          autofocus: "autofocus",
          disabled: "disabled",
          mode: "mode",
          customTemplate: "customTemplate",
          maxTagPlaceholder: "maxTagPlaceholder",
          removeIcon: "removeIcon",
          listOfTopItem: "listOfTopItem",
          tokenSeparators: "tokenSeparators"
        },
        outputs: {
          tokenize: "tokenize",
          inputValueChange: "inputValueChange",
          deleteItem: "deleteItem"
        },
        exportAs: ["nzSelectTopControl"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 4,
        vars: 3,
        consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "placeholder", 4, "ngIf"], [3, "nzId", "disabled", "value", "showInput", "mirrorSync", "autofocus", "focusTrigger", "isComposingChange", "valueChange"], [3, "deletable", "disabled", "removeIcon", "label", "contentTemplateOutlet", "contentTemplateOutletContext", 4, "ngIf"], [3, "deletable", "disabled", "removeIcon", "label", "contentTemplateOutlet", "contentTemplateOutletContext"], [3, "removeIcon", "label", "disabled", "contentTemplateOutlet", "deletable", "contentTemplateOutletContext", "delete", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "nzId", "disabled", "value", "autofocus", "showInput", "mirrorSync", "focusTrigger", "isComposingChange", "valueChange"], [3, "removeIcon", "label", "disabled", "contentTemplateOutlet", "deletable", "contentTemplateOutletContext", "delete"], [3, "placeholder"]],
        template: function NzSelectTopControlComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectTopControlComponent_ng_container_1_Template, 3, 8, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectTopControlComponent_ng_container_2_Template, 3, 9, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzSelectTopControlComponent_nz_select_placeholder_3_Template, 1, 1, "nz-select-placeholder", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.mode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowPlaceholder);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_16__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], NzSelectSearchComponent, NzSelectItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__["ɵNzTransitionPatchDirective"], NzSelectPlaceholderComponent];
        },
        encapsulation: 2,
        changeDetection: 0
      });

      NzSelectTopControlComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_14__["NzNoAnimationDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      };

      NzSelectTopControlComponent.propDecorators = {
        nzId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showSearch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        placeHolder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        open: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxTagCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        autofocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxTagPlaceholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        removeIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        listOfTopItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tokenSeparators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tokenize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        inputValueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        deleteItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nzSelectSearchComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [NzSelectSearchComponent]
        }]
      };
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */

      var defaultFilterOption = function defaultFilterOption(searchValue, item) {
        if (item && item.nzLabel) {
          return item.nzLabel.toString().toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        } else {
          return false;
        }
      };

      var ɵ0 = defaultFilterOption;
      var NZ_CONFIG_MODULE_NAME = 'select';

      var NzSelectComponent = /*#__PURE__*/function () {
        function NzSelectComponent(nzConfigService, cdr, elementRef, platform, focusMonitor, directionality, noAnimation) {
          _classCallCheck(this, NzSelectComponent);

          this.nzConfigService = nzConfigService;
          this.cdr = cdr;
          this.elementRef = elementRef;
          this.platform = platform;
          this.focusMonitor = focusMonitor;
          this.directionality = directionality;
          this.noAnimation = noAnimation;
          this._nzModuleName = NZ_CONFIG_MODULE_NAME;
          this.nzId = null;
          this.nzSize = 'default';
          this.nzOptionHeightPx = 32;
          this.nzOptionOverflowSize = 8;
          this.nzDropdownClassName = null;
          this.nzDropdownMatchSelectWidth = true;
          this.nzDropdownStyle = null;
          this.nzNotFoundContent = undefined;
          this.nzPlaceHolder = null;
          this.nzMaxTagCount = Infinity;
          this.nzDropdownRender = null;
          this.nzCustomTemplate = null;
          this.nzSuffixIcon = null;
          this.nzClearIcon = null;
          this.nzRemoveIcon = null;
          this.nzMenuItemSelectedIcon = null;
          this.nzTokenSeparators = [];
          this.nzMaxTagPlaceholder = null;
          this.nzMaxMultipleCount = Infinity;
          this.nzMode = 'default';
          this.nzFilterOption = defaultFilterOption;

          this.compareWith = function (o1, o2) {
            return o1 === o2;
          };

          this.nzAllowClear = false;
          this.nzBorderless = false;
          this.nzShowSearch = false;
          this.nzLoading = false;
          this.nzAutoFocus = false;
          this.nzAutoClearSearchValue = true;
          this.nzServerSearch = false;
          this.nzDisabled = false;
          this.nzOpen = false;
          this.nzBackdrop = false;
          this.nzOptions = [];
          this.nzOnSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.nzScrollToBottom = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.nzOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.nzBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.nzFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.listOfValue$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
          this.listOfTemplateItem$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
          this.listOfTagAndTemplateItem = [];
          this.searchValue = '';
          this.isReactiveDriven = false;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();

          this.onChange = function () {};

          this.onTouched = function () {};

          this.dropDownPosition = 'bottom';
          this.triggerWidth = null;
          this.listOfContainerItem = [];
          this.listOfTopItem = [];
          this.activatedValue = null;
          this.listOfValue = [];
          this.focused = false;
          this.dir = 'ltr'; // TODO: move to host after View Engine deprecation

          this.elementRef.nativeElement.classList.add('ant-select');
        }

        _createClass(NzSelectComponent, [{
          key: "nzShowArrow",
          get: function get() {
            return this._nzShowArrow === undefined ? this.nzMode === 'default' : this._nzShowArrow;
          },
          set: function set(value) {
            this._nzShowArrow = value;
          }
        }, {
          key: "generateTagItem",
          value: function generateTagItem(value) {
            return {
              nzValue: value,
              nzLabel: value,
              type: 'item'
            };
          }
        }, {
          key: "onItemClick",
          value: function onItemClick(value) {
            var _this30 = this;

            this.activatedValue = value;

            if (this.nzMode === 'default') {
              if (this.listOfValue.length === 0 || !this.compareWith(this.listOfValue[0], value)) {
                this.updateListOfValue([value]);
              }

              this.setOpenState(false);
            } else {
              var targetIndex = this.listOfValue.findIndex(function (o) {
                return _this30.compareWith(o, value);
              });

              if (targetIndex !== -1) {
                var listOfValueAfterRemoved = this.listOfValue.filter(function (_, i) {
                  return i !== targetIndex;
                });
                this.updateListOfValue(listOfValueAfterRemoved);
              } else if (this.listOfValue.length < this.nzMaxMultipleCount) {
                var listOfValueAfterAdded = [].concat(_toConsumableArray(this.listOfValue), [value]);
                this.updateListOfValue(listOfValueAfterAdded);
              }

              this.focus();

              if (this.nzAutoClearSearchValue) {
                this.clearInput();
              }
            }
          }
        }, {
          key: "onItemDelete",
          value: function onItemDelete(item) {
            var _this31 = this;

            var listOfSelectedValue = this.listOfValue.filter(function (v) {
              return !_this31.compareWith(v, item.nzValue);
            });
            this.updateListOfValue(listOfSelectedValue);
            this.clearInput();
          }
        }, {
          key: "onHostClick",
          value: function onHostClick() {
            if (this.nzOpen && this.nzShowSearch || this.nzDisabled) {
              return;
            }

            this.setOpenState(!this.nzOpen);
          }
        }, {
          key: "updateListOfContainerItem",
          value: function updateListOfContainerItem() {
            var _this32 = this;

            var listOfContainerItem = this.listOfTagAndTemplateItem.filter(function (item) {
              return !item.nzHide;
            }).filter(function (item) {
              if (!_this32.nzServerSearch && _this32.searchValue) {
                return _this32.nzFilterOption(_this32.searchValue, item);
              } else {
                return true;
              }
            });

            if (this.nzMode === 'tags' && this.searchValue) {
              var matchedItem = this.listOfTagAndTemplateItem.find(function (item) {
                return item.nzLabel === _this32.searchValue;
              });

              if (!matchedItem) {
                var tagItem = this.generateTagItem(this.searchValue);
                listOfContainerItem = [tagItem].concat(_toConsumableArray(listOfContainerItem));
                this.activatedValue = tagItem.nzValue;
              } else {
                this.activatedValue = matchedItem.nzValue;
              }
            }

            var activatedItem = listOfContainerItem.find(function (item) {
              return _this32.compareWith(item.nzValue, _this32.listOfValue[0]);
            }) || listOfContainerItem[0];
            this.activatedValue = activatedItem && activatedItem.nzValue || null;
            var listOfGroupLabel = [];

            if (this.isReactiveDriven) {
              listOfGroupLabel = _toConsumableArray(new Set(this.nzOptions.filter(function (o) {
                return o.groupLabel;
              }).map(function (o) {
                return o.groupLabel;
              })));
            } else {
              if (this.listOfNzOptionGroupComponent) {
                listOfGroupLabel = this.listOfNzOptionGroupComponent.map(function (o) {
                  return o.nzLabel;
                });
              }
            }
            /** insert group item **/


            listOfGroupLabel.forEach(function (label) {
              var index = listOfContainerItem.findIndex(function (item) {
                return label === item.groupLabel;
              });

              if (index > -1) {
                var groupItem = {
                  groupLabel: label,
                  type: 'group',
                  key: label
                };
                listOfContainerItem.splice(index, 0, groupItem);
              }
            });
            this.listOfContainerItem = _toConsumableArray(listOfContainerItem);
            this.updateCdkConnectedOverlayPositions();
          }
        }, {
          key: "clearInput",
          value: function clearInput() {
            this.nzSelectTopControlComponent.clearInputValue();
          }
        }, {
          key: "updateListOfValue",
          value: function updateListOfValue(listOfValue) {
            var covertListToModel = function covertListToModel(list, mode) {
              if (mode === 'default') {
                if (list.length > 0) {
                  return list[0];
                } else {
                  return null;
                }
              } else {
                return list;
              }
            };

            var model = covertListToModel(listOfValue, this.nzMode);

            if (this.value !== model) {
              this.listOfValue = listOfValue;
              this.listOfValue$.next(listOfValue);
              this.value = model;
              this.onChange(this.value);
            }
          }
        }, {
          key: "onTokenSeparate",
          value: function onTokenSeparate(listOfLabel) {
            var _this33 = this;

            var listOfMatchedValue = this.listOfTagAndTemplateItem.filter(function (item) {
              return listOfLabel.findIndex(function (label) {
                return label === item.nzLabel;
              }) !== -1;
            }).map(function (item) {
              return item.nzValue;
            }).filter(function (item) {
              return _this33.listOfValue.findIndex(function (v) {
                return _this33.compareWith(v, item);
              }) === -1;
            });

            if (this.nzMode === 'multiple') {
              this.updateListOfValue([].concat(_toConsumableArray(this.listOfValue), _toConsumableArray(listOfMatchedValue)));
            } else if (this.nzMode === 'tags') {
              var listOfUnMatchedLabel = listOfLabel.filter(function (label) {
                return _this33.listOfTagAndTemplateItem.findIndex(function (item) {
                  return item.nzLabel === label;
                }) === -1;
              });
              this.updateListOfValue([].concat(_toConsumableArray(this.listOfValue), _toConsumableArray(listOfMatchedValue), _toConsumableArray(listOfUnMatchedLabel)));
            }

            this.clearInput();
          }
        }, {
          key: "onOverlayKeyDown",
          value: function onOverlayKeyDown(e) {
            if (e.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ESCAPE"]) {
              this.setOpenState(false);
            }
          }
        }, {
          key: "onKeyDown",
          value: function onKeyDown(e) {
            var _this34 = this;

            if (this.nzDisabled) {
              return;
            }

            var listOfFilteredOptionNotDisabled = this.listOfContainerItem.filter(function (item) {
              return item.type === 'item';
            }).filter(function (item) {
              return !item.nzDisabled;
            });
            var activatedIndex = listOfFilteredOptionNotDisabled.findIndex(function (item) {
              return _this34.compareWith(item.nzValue, _this34.activatedValue);
            });

            switch (e.keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["UP_ARROW"]:
                e.preventDefault();

                if (this.nzOpen) {
                  var preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionNotDisabled.length - 1;
                  this.activatedValue = listOfFilteredOptionNotDisabled[preIndex].nzValue;
                }

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["DOWN_ARROW"]:
                e.preventDefault();

                if (this.nzOpen) {
                  var nextIndex = activatedIndex < listOfFilteredOptionNotDisabled.length - 1 ? activatedIndex + 1 : 0;
                  this.activatedValue = listOfFilteredOptionNotDisabled[nextIndex].nzValue;
                } else {
                  this.setOpenState(true);
                }

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ENTER"]:
                e.preventDefault();

                if (this.nzOpen) {
                  if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["isNotNil"])(this.activatedValue)) {
                    this.onItemClick(this.activatedValue);
                  }
                } else {
                  this.setOpenState(true);
                }

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["SPACE"]:
                if (!this.nzOpen) {
                  this.setOpenState(true);
                  e.preventDefault();
                }

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["TAB"]:
                this.setOpenState(false);
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ESCAPE"]:
                /**
                 * Skip the ESCAPE processing, it will be handled in {@link onOverlayKeyDown}.
                 */
                break;

              default:
                if (!this.nzOpen) {
                  this.setOpenState(true);
                }

            }
          }
        }, {
          key: "setOpenState",
          value: function setOpenState(value) {
            if (this.nzOpen !== value) {
              this.nzOpen = value;
              this.nzOpenChange.emit(value);
              this.onOpenChange();
              this.cdr.markForCheck();
            }
          }
        }, {
          key: "onOpenChange",
          value: function onOpenChange() {
            this.updateCdkConnectedOverlayStatus();
            this.clearInput();
          }
        }, {
          key: "onInputValueChange",
          value: function onInputValueChange(value) {
            this.searchValue = value;
            this.updateListOfContainerItem();
            this.nzOnSearch.emit(value);
            this.updateCdkConnectedOverlayPositions();
          }
        }, {
          key: "onClearSelection",
          value: function onClearSelection() {
            this.updateListOfValue([]);
          }
        }, {
          key: "onClickOutside",
          value: function onClickOutside(event) {
            if (!this.elementRef.nativeElement.contains(event.target)) {
              this.setOpenState(false);
            }
          }
        }, {
          key: "focus",
          value: function focus() {
            this.nzSelectTopControlComponent.focus();
          }
        }, {
          key: "blur",
          value: function blur() {
            this.nzSelectTopControlComponent.blur();
          }
        }, {
          key: "onPositionChange",
          value: function onPositionChange(position) {
            this.dropDownPosition = position.connectionPair.originY;
          }
        }, {
          key: "updateCdkConnectedOverlayStatus",
          value: function updateCdkConnectedOverlayStatus() {
            var _this35 = this;

            if (this.platform.isBrowser && this.originElement.nativeElement) {
              Object(ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_15__["reqAnimFrame"])(function () {
                _this35.triggerWidth = _this35.originElement.nativeElement.getBoundingClientRect().width;

                _this35.cdr.markForCheck();
              });
            }
          }
        }, {
          key: "updateCdkConnectedOverlayPositions",
          value: function updateCdkConnectedOverlayPositions() {
            var _this36 = this;

            Object(ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_15__["reqAnimFrame"])(function () {
              var _a, _b;

              (_b = (_a = _this36.cdkConnectedOverlay) === null || _a === void 0 ? void 0 : _a.overlayRef) === null || _b === void 0 ? void 0 : _b.updatePosition();
            });
          }
        }, {
          key: "writeValue",
          value: function writeValue(modelValue) {
            /** https://github.com/angular/angular/issues/14988 **/
            if (this.value !== modelValue) {
              this.value = modelValue;

              var covertModelToList = function covertModelToList(model, mode) {
                if (model === null || model === undefined) {
                  return [];
                } else if (mode === 'default') {
                  return [model];
                } else {
                  return model;
                }
              };

              var listOfValue = covertModelToList(modelValue, this.nzMode);
              this.listOfValue = listOfValue;
              this.listOfValue$.next(listOfValue);
              this.cdr.markForCheck();
            }
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(disabled) {
            this.nzDisabled = disabled;

            if (disabled) {
              this.setOpenState(false);
            }

            this.cdr.markForCheck();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var nzOpen = changes.nzOpen,
                nzDisabled = changes.nzDisabled,
                nzOptions = changes.nzOptions;

            if (nzOpen) {
              this.onOpenChange();
            }

            if (nzDisabled && this.nzDisabled) {
              this.setOpenState(false);
            }

            if (nzOptions) {
              this.isReactiveDriven = true;
              var listOfOptions = this.nzOptions || [];
              var listOfTransformedItem = listOfOptions.map(function (item) {
                return {
                  template: item.label instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] ? item.label : null,
                  nzLabel: typeof item.label === 'string' || typeof item.label === 'number' ? item.label : null,
                  nzValue: item.value,
                  nzDisabled: item.disabled || false,
                  nzHide: item.hide || false,
                  nzCustomContent: item.label instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
                  groupLabel: item.groupLabel || null,
                  type: 'item',
                  key: item.value
                };
              });
              this.listOfTemplateItem$.next(listOfTransformedItem);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this37 = this;

            var _a;

            this.focusMonitor.monitor(this.elementRef, true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (focusOrigin) {
              if (!focusOrigin) {
                _this37.focused = false;

                _this37.cdr.markForCheck();

                _this37.nzBlur.emit();

                Promise.resolve().then(function () {
                  _this37.onTouched();
                });
              } else {
                _this37.focused = true;

                _this37.cdr.markForCheck();

                _this37.nzFocus.emit();
              }
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.listOfValue$, this.listOfTemplateItem$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (_ref21) {
              var _ref22 = _slicedToArray(_ref21, 2),
                  listOfSelectedValue = _ref22[0],
                  listOfTemplateItem = _ref22[1];

              var listOfTagItem = listOfSelectedValue.filter(function () {
                return _this37.nzMode === 'tags';
              }).filter(function (value) {
                return listOfTemplateItem.findIndex(function (o) {
                  return _this37.compareWith(o.nzValue, value);
                }) === -1;
              }).map(function (value) {
                return _this37.listOfTopItem.find(function (o) {
                  return _this37.compareWith(o.nzValue, value);
                }) || _this37.generateTagItem(value);
              });
              _this37.listOfTagAndTemplateItem = [].concat(_toConsumableArray(listOfTemplateItem), _toConsumableArray(listOfTagItem));
              _this37.listOfTopItem = _this37.listOfValue.map(function (v) {
                return [].concat(_toConsumableArray(_this37.listOfTagAndTemplateItem), _toConsumableArray(_this37.listOfTopItem)).find(function (item) {
                  return _this37.compareWith(v, item.nzValue);
                });
              }).filter(function (item) {
                return !!item;
              });

              _this37.updateListOfContainerItem();
            });
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (direction) {
              _this37.dir = direction;

              _this37.cdr.detectChanges();
            });
            this.nzConfigService.getConfigChangeEventForComponent('select').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function () {
              _this37.cdr.markForCheck();
            });
            this.dir = this.directionality.value;
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this38 = this;

            if (!this.isReactiveDriven) {
              Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.listOfNzOptionGroupComponent.changes, this.listOfNzOptionComponent.changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"]).apply(void 0, [_this38.listOfNzOptionComponent.changes, _this38.listOfNzOptionGroupComponent.changes].concat(_toConsumableArray(_this38.listOfNzOptionComponent.map(function (option) {
                  return option.changes;
                })), _toConsumableArray(_this38.listOfNzOptionGroupComponent.map(function (option) {
                  return option.changes;
                })))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(true));
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function () {
                var listOfOptionInterface = _this38.listOfNzOptionComponent.toArray().map(function (item) {
                  var template = item.template,
                      nzLabel = item.nzLabel,
                      nzValue = item.nzValue,
                      nzDisabled = item.nzDisabled,
                      nzHide = item.nzHide,
                      nzCustomContent = item.nzCustomContent,
                      groupLabel = item.groupLabel;
                  return {
                    template: template,
                    nzLabel: nzLabel,
                    nzValue: nzValue,
                    nzDisabled: nzDisabled,
                    nzHide: nzHide,
                    nzCustomContent: nzCustomContent,
                    groupLabel: groupLabel,
                    type: 'item',
                    key: nzValue
                  };
                });

                _this38.listOfTemplateItem$.next(listOfOptionInterface);

                _this38.cdr.markForCheck();
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.focusMonitor.stopMonitoring(this.elementRef);
            this.destroy$.next();
            this.destroy$.complete();
          }
        }]);

        return NzSelectComponent;
      }();

      NzSelectComponent.ɵfac = function NzSelectComponent_Factory(t) {
        return new (t || NzSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_14__["NzNoAnimationDirective"], 9));
      };

      NzSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NzSelectComponent,
        selectors: [["nz-select"]],
        contentQueries: function NzSelectComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzOptionComponent, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzOptionGroupComponent, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfNzOptionComponent = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfNzOptionGroupComponent = _t);
          }
        },
        viewQuery: function NzSelectComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["CdkOverlayOrigin"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["CdkConnectedOverlay"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](NzSelectTopControlComponent, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](NzOptionGroupComponent, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](NzSelectTopControlComponent, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.originElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cdkConnectedOverlay = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzSelectTopControlComponent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzOptionGroupComponentElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzSelectTopControlComponentElement = _t.first);
          }
        },
        hostVars: 24,
        hostBindings: function NzSelectComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzSelectComponent_click_HostBindingHandler() {
              return ctx.onHostClick();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-lg", ctx.nzSize === "large")("ant-select-sm", ctx.nzSize === "small")("ant-select-show-arrow", ctx.nzShowArrow)("ant-select-disabled", ctx.nzDisabled)("ant-select-show-search", (ctx.nzShowSearch || ctx.nzMode !== "default") && !ctx.nzDisabled)("ant-select-allow-clear", ctx.nzAllowClear)("ant-select-borderless", ctx.nzBorderless)("ant-select-open", ctx.nzOpen)("ant-select-focused", ctx.nzOpen || ctx.focused)("ant-select-single", ctx.nzMode === "default")("ant-select-multiple", ctx.nzMode !== "default")("ant-select-rtl", ctx.dir === "rtl");
          }
        },
        inputs: {
          nzId: "nzId",
          nzSize: "nzSize",
          nzOptionHeightPx: "nzOptionHeightPx",
          nzOptionOverflowSize: "nzOptionOverflowSize",
          nzDropdownClassName: "nzDropdownClassName",
          nzDropdownMatchSelectWidth: "nzDropdownMatchSelectWidth",
          nzDropdownStyle: "nzDropdownStyle",
          nzNotFoundContent: "nzNotFoundContent",
          nzPlaceHolder: "nzPlaceHolder",
          nzMaxTagCount: "nzMaxTagCount",
          nzDropdownRender: "nzDropdownRender",
          nzCustomTemplate: "nzCustomTemplate",
          nzSuffixIcon: "nzSuffixIcon",
          nzClearIcon: "nzClearIcon",
          nzRemoveIcon: "nzRemoveIcon",
          nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon",
          nzTokenSeparators: "nzTokenSeparators",
          nzMaxTagPlaceholder: "nzMaxTagPlaceholder",
          nzMaxMultipleCount: "nzMaxMultipleCount",
          nzMode: "nzMode",
          nzFilterOption: "nzFilterOption",
          compareWith: "compareWith",
          nzAllowClear: "nzAllowClear",
          nzBorderless: "nzBorderless",
          nzShowSearch: "nzShowSearch",
          nzLoading: "nzLoading",
          nzAutoFocus: "nzAutoFocus",
          nzAutoClearSearchValue: "nzAutoClearSearchValue",
          nzServerSearch: "nzServerSearch",
          nzDisabled: "nzDisabled",
          nzOpen: "nzOpen",
          nzBackdrop: "nzBackdrop",
          nzOptions: "nzOptions",
          nzShowArrow: "nzShowArrow"
        },
        outputs: {
          nzOnSearch: "nzOnSearch",
          nzScrollToBottom: "nzScrollToBottom",
          nzOpenChange: "nzOpenChange",
          nzBlur: "nzBlur",
          nzFocus: "nzFocus"
        },
        exportAs: ["nzSelect"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
            return NzSelectComponent;
          }),
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 5,
        vars: 24,
        consts: [["cdkOverlayOrigin", "", 3, "nzId", "open", "disabled", "mode", "nzNoAnimation", "maxTagPlaceholder", "removeIcon", "placeHolder", "maxTagCount", "customTemplate", "tokenSeparators", "showSearch", "autofocus", "listOfTopItem", "inputValueChange", "tokenize", "deleteItem", "keydown"], ["origin", "cdkOverlayOrigin"], [3, "loading", "search", "suffixIcon", 4, "ngIf"], [3, "clearIcon", "clear", 4, "ngIf"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayOpen", "overlayKeydown", "overlayOutsideClick", "detach", "positionChange"], [3, "loading", "search", "suffixIcon"], [3, "clearIcon", "clear"], [3, "ngStyle", "itemSize", "maxItemLength", "matchWidth", "nzNoAnimation", "listOfContainerItem", "menuItemSelectedIcon", "notFoundContent", "activatedValue", "listOfSelectedValue", "dropdownRender", "compareWith", "mode", "keydown", "itemClick", "scrollToBottom"]],
        template: function NzSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select-top-control", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("inputValueChange", function NzSelectComponent_Template_nz_select_top_control_inputValueChange_0_listener($event) {
              return ctx.onInputValueChange($event);
            })("tokenize", function NzSelectComponent_Template_nz_select_top_control_tokenize_0_listener($event) {
              return ctx.onTokenSeparate($event);
            })("deleteItem", function NzSelectComponent_Template_nz_select_top_control_deleteItem_0_listener($event) {
              return ctx.onItemDelete($event);
            })("keydown", function NzSelectComponent_Template_nz_select_top_control_keydown_0_listener($event) {
              return ctx.onKeyDown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectComponent_nz_select_arrow_2_Template, 1, 3, "nz-select-arrow", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzSelectComponent_nz_select_clear_3_Template, 1, 1, "nz-select-clear", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzSelectComponent_ng_template_4_Template, 1, 19, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("overlayKeydown", function NzSelectComponent_Template_ng_template_overlayKeydown_4_listener($event) {
              return ctx.onOverlayKeyDown($event);
            })("overlayOutsideClick", function NzSelectComponent_Template_ng_template_overlayOutsideClick_4_listener($event) {
              return ctx.onClickOutside($event);
            })("detach", function NzSelectComponent_Template_ng_template_detach_4_listener() {
              return ctx.setOpenState(false);
            })("positionChange", function NzSelectComponent_Template_ng_template_positionChange_4_listener($event) {
              return ctx.onPositionChange($event);
            });
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", ctx.nzId)("open", ctx.nzOpen)("disabled", ctx.nzDisabled)("mode", ctx.nzMode)("@.disabled", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation)("nzNoAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation)("maxTagPlaceholder", ctx.nzMaxTagPlaceholder)("removeIcon", ctx.nzRemoveIcon)("placeHolder", ctx.nzPlaceHolder)("maxTagCount", ctx.nzMaxTagCount)("customTemplate", ctx.nzCustomTemplate)("tokenSeparators", ctx.nzTokenSeparators)("showSearch", ctx.nzShowSearch)("autofocus", ctx.nzAutoFocus)("listOfTopItem", ctx.listOfTopItem);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzShowArrow);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzAllowClear && !ctx.nzDisabled && ctx.listOfValue.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayMinWidth", ctx.nzDropdownMatchSelectWidth ? null : ctx.triggerWidth)("cdkConnectedOverlayWidth", ctx.nzDropdownMatchSelectWidth ? ctx.triggerWidth : null)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayTransformOriginOn", ".ant-select-dropdown")("cdkConnectedOverlayPanelClass", ctx.nzDropdownClassName)("cdkConnectedOverlayOpen", ctx.nzOpen);
          }
        },
        directives: function directives() {
          return [ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__["ɵNzTransitionPatchDirective"], NzSelectTopControlComponent, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["CdkOverlayOrigin"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_14__["NzNoAnimationDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["CdkConnectedOverlay"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_18__["NzConnectedOverlayDirective"], NzSelectArrowComponent, NzSelectClearComponent, NzOptionContainerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgStyle"]];
        },
        encapsulation: 2,
        data: {
          animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_12__["slideMotion"]]
        },
        changeDetection: 0
      });

      NzSelectComponent.ctorParameters = function () {
        return [{
          type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__["NzConfigService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_14__["NzNoAnimationDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      };

      NzSelectComponent.propDecorators = {
        nzId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzOptionHeightPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzOptionOverflowSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzDropdownClassName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzDropdownMatchSelectWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzDropdownStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzNotFoundContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzPlaceHolder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzMaxTagCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzDropdownRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzCustomTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzSuffixIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzClearIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzRemoveIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzMenuItemSelectedIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzTokenSeparators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzMaxTagPlaceholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzMaxMultipleCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzFilterOption: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzAllowClear: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzBorderless: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzShowSearch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzLoading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzAutoFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzAutoClearSearchValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzServerSearch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzBackdrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzShowArrow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nzOnSearch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nzScrollToBottom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nzOpenChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nzBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nzFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        originElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["CdkOverlayOrigin"], {
            "static": true,
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }]
        }],
        cdkConnectedOverlay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["CdkConnectedOverlay"], {
            "static": true
          }]
        }],
        nzSelectTopControlComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [NzSelectTopControlComponent, {
            "static": true
          }]
        }],
        listOfNzOptionComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [NzOptionComponent, {
            descendants: true
          }]
        }],
        listOfNzOptionGroupComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [NzOptionGroupComponent, {
            descendants: true
          }]
        }],
        nzOptionGroupComponentElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [NzOptionGroupComponent, {
            "static": true,
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }]
        }],
        nzSelectTopControlComponentElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [NzSelectTopControlComponent, {
            "static": true,
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }]
        }]
      };
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__["WithConfig"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], NzSelectComponent.prototype, "nzSuffixIcon", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], NzSelectComponent.prototype, "nzAllowClear", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__["WithConfig"])(), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], NzSelectComponent.prototype, "nzBorderless", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], NzSelectComponent.prototype, "nzShowSearch", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], NzSelectComponent.prototype, "nzLoading", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], NzSelectComponent.prototype, "nzAutoFocus", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], NzSelectComponent.prototype, "nzAutoClearSearchValue", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], NzSelectComponent.prototype, "nzServerSearch", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], NzSelectComponent.prototype, "nzDisabled", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], NzSelectComponent.prototype, "nzOpen", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__["WithConfig"])(), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)], NzSelectComponent.prototype, "nzBackdrop", void 0);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzOptionGroupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'nz-option-group',
            exportAs: 'nzOptionGroup',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <ng-content></ng-content>\n  "
          }]
        }], function () {
          return [];
        }, {
          nzLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzOptionContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'nz-option-container',
            exportAs: 'nzOptionContainer',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            preserveWhitespaces: false,
            template: "\n    <div>\n      <div *ngIf=\"listOfContainerItem.length === 0\" class=\"ant-select-item-empty\">\n        <nz-embed-empty nzComponentName=\"select\" [specificContent]=\"notFoundContent!\"></nz-embed-empty>\n      </div>\n      <cdk-virtual-scroll-viewport\n        [class.full-width]=\"!matchWidth\"\n        [itemSize]=\"itemSize\"\n        [maxBufferPx]=\"itemSize * maxItemLength\"\n        [minBufferPx]=\"itemSize * maxItemLength\"\n        (scrolledIndexChange)=\"onScrolledIndexChange($event)\"\n        [style.height.px]=\"listOfContainerItem.length * itemSize\"\n        [style.max-height.px]=\"itemSize * maxItemLength\"\n      >\n        <ng-template\n          cdkVirtualFor\n          [cdkVirtualForOf]=\"listOfContainerItem\"\n          [cdkVirtualForTrackBy]=\"trackValue\"\n          [cdkVirtualForTemplateCacheSize]=\"0\"\n          let-item\n        >\n          <ng-container [ngSwitch]=\"item.type\">\n            <nz-option-item-group *ngSwitchCase=\"'group'\" [nzLabel]=\"item.groupLabel\"></nz-option-item-group>\n            <nz-option-item\n              *ngSwitchCase=\"'item'\"\n              [icon]=\"menuItemSelectedIcon\"\n              [customContent]=\"item.nzCustomContent\"\n              [template]=\"item.template\"\n              [grouped]=\"!!item.groupLabel\"\n              [disabled]=\"item.nzDisabled\"\n              [showState]=\"mode === 'tags' || mode === 'multiple'\"\n              [label]=\"item.nzLabel\"\n              [compareWith]=\"compareWith\"\n              [activatedValue]=\"activatedValue\"\n              [listOfSelectedValue]=\"listOfSelectedValue\"\n              [value]=\"item.nzValue\"\n              (itemHover)=\"onItemHover($event)\"\n              (itemClick)=\"onItemClick($event)\"\n            ></nz-option-item>\n          </ng-container>\n        </ng-template>\n      </cdk-virtual-scroll-viewport>\n      <ng-template [ngTemplateOutlet]=\"dropdownRender\"></ng-template>\n    </div>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          notFoundContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          menuItemSelectedIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          dropdownRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          activatedValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          listOfSelectedValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          matchWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          itemSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          maxItemLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          listOfContainerItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          itemClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          scrollToBottom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cdkVirtualScrollViewport: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"], {
              "static": true
            }]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzOptionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'nz-option',
            exportAs: 'nzOption',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <ng-template>\n      <ng-content></ng-content>\n    </ng-template>\n  "
          }]
        }], function () {
          return [{
            type: NzOptionGroupComponent,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, {
          nzLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzHide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzCustomContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], {
              "static": true
            }]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectSearchComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'nz-select-search',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <input\n      #inputElement\n      [attr.id]=\"nzId\"\n      autocomplete=\"off\"\n      class=\"ant-select-selection-search-input\"\n      [ngModel]=\"value\"\n      [attr.autofocus]=\"autofocus ? 'autofocus' : null\"\n      [disabled]=\"disabled\"\n      [style.opacity]=\"showInput ? null : 0\"\n      (ngModelChange)=\"onValueChange($event)\"\n      (compositionstart)=\"setCompositionState(true)\"\n      (compositionend)=\"setCompositionState(false)\"\n    />\n    <span #mirrorElement *ngIf=\"mirrorSync\" class=\"ant-select-selection-search-mirror\"></span>\n  ",
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["COMPOSITION_BUFFER_MODE"],
              useValue: false
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]
          }];
        }, {
          nzId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          mirrorSync: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          focusTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          autofocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          isComposingChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['inputElement', {
              "static": true
            }]
          }],
          mirrorElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mirrorElement', {
              "static": false
            }]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectTopControlComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'nz-select-top-control',
            exportAs: 'nzSelectTopControl',
            preserveWhitespaces: false,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n    <!--single mode-->\n    <ng-container [ngSwitch]=\"mode\">\n      <ng-container *ngSwitchCase=\"'default'\">\n        <nz-select-search\n          [nzId]=\"nzId\"\n          [disabled]=\"disabled\"\n          [value]=\"inputValue!\"\n          [showInput]=\"showSearch\"\n          [mirrorSync]=\"false\"\n          [autofocus]=\"autofocus\"\n          [focusTrigger]=\"open\"\n          (isComposingChange)=\"isComposingChange($event)\"\n          (valueChange)=\"onInputValueChange($event)\"\n        ></nz-select-search>\n        <nz-select-item\n          *ngIf=\"isShowSingleLabel\"\n          [deletable]=\"false\"\n          [disabled]=\"false\"\n          [removeIcon]=\"removeIcon\"\n          [label]=\"listOfTopItem[0].nzLabel\"\n          [contentTemplateOutlet]=\"customTemplate\"\n          [contentTemplateOutletContext]=\"listOfTopItem[0]\"\n        ></nz-select-item>\n      </ng-container>\n      <ng-container *ngSwitchDefault>\n        <!--multiple or tags mode-->\n        <nz-select-item\n          *ngFor=\"let item of listOfSlicedItem; trackBy: trackValue\"\n          [removeIcon]=\"removeIcon\"\n          [label]=\"item.nzLabel\"\n          [disabled]=\"item.nzDisabled || disabled\"\n          [contentTemplateOutlet]=\"item.contentTemplateOutlet\"\n          [deletable]=\"true\"\n          [contentTemplateOutletContext]=\"item.contentTemplateOutletContext\"\n          (delete)=\"onDeleteItem(item.contentTemplateOutletContext)\"\n        ></nz-select-item>\n        <nz-select-search\n          [nzId]=\"nzId\"\n          [disabled]=\"disabled\"\n          [value]=\"inputValue!\"\n          [autofocus]=\"autofocus\"\n          [showInput]=\"true\"\n          [mirrorSync]=\"true\"\n          [focusTrigger]=\"open\"\n          (isComposingChange)=\"isComposingChange($event)\"\n          (valueChange)=\"onInputValueChange($event)\"\n        ></nz-select-search>\n      </ng-container>\n    </ng-container>\n    <nz-select-placeholder *ngIf=\"isShowPlaceholder\" [placeholder]=\"placeHolder\"></nz-select-placeholder>\n  ",
            host: {
              '(keydown)': 'onHostKeydown($event)'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_14__["NzNoAnimationDirective"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, {
          nzId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          placeHolder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          maxTagCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          autofocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          maxTagPlaceholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          removeIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          listOfTopItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          tokenSeparators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          tokenize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          inputValueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          deleteItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          nzSelectSearchComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [NzSelectSearchComponent]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'nz-select',
            exportAs: 'nzSelect',
            preserveWhitespaces: false,
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"],
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
                return NzSelectComponent;
              }),
              multi: true
            }],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_12__["slideMotion"]],
            template: "\n    <nz-select-top-control\n      cdkOverlayOrigin\n      #origin=\"cdkOverlayOrigin\"\n      [nzId]=\"nzId\"\n      [open]=\"nzOpen\"\n      [disabled]=\"nzDisabled\"\n      [mode]=\"nzMode\"\n      [@.disabled]=\"noAnimation?.nzNoAnimation\"\n      [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n      [maxTagPlaceholder]=\"nzMaxTagPlaceholder\"\n      [removeIcon]=\"nzRemoveIcon\"\n      [placeHolder]=\"nzPlaceHolder\"\n      [maxTagCount]=\"nzMaxTagCount\"\n      [customTemplate]=\"nzCustomTemplate\"\n      [tokenSeparators]=\"nzTokenSeparators\"\n      [showSearch]=\"nzShowSearch\"\n      [autofocus]=\"nzAutoFocus\"\n      [listOfTopItem]=\"listOfTopItem\"\n      (inputValueChange)=\"onInputValueChange($event)\"\n      (tokenize)=\"onTokenSeparate($event)\"\n      (deleteItem)=\"onItemDelete($event)\"\n      (keydown)=\"onKeyDown($event)\"\n    ></nz-select-top-control>\n    <nz-select-arrow\n      *ngIf=\"nzShowArrow\"\n      [loading]=\"nzLoading\"\n      [search]=\"nzOpen && nzShowSearch\"\n      [suffixIcon]=\"nzSuffixIcon\"\n    ></nz-select-arrow>\n    <nz-select-clear\n      *ngIf=\"nzAllowClear && !nzDisabled && listOfValue.length\"\n      [clearIcon]=\"nzClearIcon\"\n      (clear)=\"onClearSelection()\"\n    ></nz-select-clear>\n    <ng-template\n      cdkConnectedOverlay\n      nzConnectedOverlay\n      [cdkConnectedOverlayHasBackdrop]=\"nzBackdrop\"\n      [cdkConnectedOverlayMinWidth]=\"$any(nzDropdownMatchSelectWidth ? null : triggerWidth)\"\n      [cdkConnectedOverlayWidth]=\"$any(nzDropdownMatchSelectWidth ? triggerWidth : null)\"\n      [cdkConnectedOverlayOrigin]=\"origin\"\n      [cdkConnectedOverlayTransformOriginOn]=\"'.ant-select-dropdown'\"\n      [cdkConnectedOverlayPanelClass]=\"nzDropdownClassName!\"\n      [cdkConnectedOverlayOpen]=\"nzOpen\"\n      (overlayKeydown)=\"onOverlayKeyDown($event)\"\n      (overlayOutsideClick)=\"onClickOutside($event)\"\n      (detach)=\"setOpenState(false)\"\n      (positionChange)=\"onPositionChange($event)\"\n    >\n      <nz-option-container\n        [ngStyle]=\"nzDropdownStyle\"\n        [itemSize]=\"nzOptionHeightPx\"\n        [maxItemLength]=\"nzOptionOverflowSize\"\n        [matchWidth]=\"nzDropdownMatchSelectWidth\"\n        [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\n        [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\n        [@slideMotion]=\"'enter'\"\n        [@.disabled]=\"noAnimation?.nzNoAnimation\"\n        [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n        [listOfContainerItem]=\"listOfContainerItem\"\n        [menuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\n        [notFoundContent]=\"nzNotFoundContent\"\n        [activatedValue]=\"activatedValue\"\n        [listOfSelectedValue]=\"listOfValue\"\n        [dropdownRender]=\"nzDropdownRender\"\n        [compareWith]=\"compareWith\"\n        [mode]=\"nzMode\"\n        (keydown)=\"onKeyDown($event)\"\n        (itemClick)=\"onItemClick($event)\"\n        (scrollToBottom)=\"nzScrollToBottom.emit()\"\n      ></nz-option-container>\n    </ng-template>\n  ",
            host: {
              '[class.ant-select-lg]': 'nzSize === "large"',
              '[class.ant-select-sm]': 'nzSize === "small"',
              '[class.ant-select-show-arrow]': "nzShowArrow",
              '[class.ant-select-disabled]': 'nzDisabled',
              '[class.ant-select-show-search]': "(nzShowSearch || nzMode !== 'default') && !nzDisabled",
              '[class.ant-select-allow-clear]': 'nzAllowClear',
              '[class.ant-select-borderless]': 'nzBorderless',
              '[class.ant-select-open]': 'nzOpen',
              '[class.ant-select-focused]': 'nzOpen || focused',
              '[class.ant-select-single]': "nzMode === 'default'",
              '[class.ant-select-multiple]': "nzMode !== 'default'",
              '[class.ant-select-rtl]': "dir === 'rtl'",
              '(click)': 'onHostClick()'
            }
          }]
        }], function () {
          return [{
            type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_13__["NzConfigService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }, {
            type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_14__["NzNoAnimationDirective"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, {
          nzId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzOptionHeightPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzOptionOverflowSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzDropdownClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzDropdownMatchSelectWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzDropdownStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzNotFoundContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzPlaceHolder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzMaxTagCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzDropdownRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzCustomTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzSuffixIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzClearIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzRemoveIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzMenuItemSelectedIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzTokenSeparators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzMaxTagPlaceholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzMaxMultipleCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzFilterOption: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzAllowClear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzBorderless: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzShowSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzAutoFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzAutoClearSearchValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzServerSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nzOnSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          nzScrollToBottom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          nzOpenChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          nzBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          nzFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          nzShowArrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          originElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["CdkOverlayOrigin"], {
              "static": true,
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
            }]
          }],
          cdkConnectedOverlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["CdkConnectedOverlay"], {
              "static": true
            }]
          }],
          nzSelectTopControlComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [NzSelectTopControlComponent, {
              "static": true
            }]
          }],
          listOfNzOptionComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [NzOptionComponent, {
              descendants: true
            }]
          }],
          listOfNzOptionGroupComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [NzOptionGroupComponent, {
              descendants: true
            }]
          }],
          nzOptionGroupComponentElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [NzOptionGroupComponent, {
              "static": true,
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
            }]
          }],
          nzSelectTopControlComponentElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [NzSelectTopControlComponent, {
              "static": true,
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
            }]
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzOptionItemGroupComponent = /*#__PURE__*/_createClass(function NzOptionItemGroupComponent(elementRef) {
        _classCallCheck(this, NzOptionItemGroupComponent);

        this.elementRef = elementRef;
        this.nzLabel = null; // TODO: move to host after View Engine deprecation

        this.elementRef.nativeElement.classList.add('ant-select-item', 'ant-select-item-group');
      });

      NzOptionItemGroupComponent.ɵfac = function NzOptionItemGroupComponent_Factory(t) {
        return new (t || NzOptionItemGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      NzOptionItemGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NzOptionItemGroupComponent,
        selectors: [["nz-option-item-group"]],
        inputs: {
          nzLabel: "nzLabel"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "nzStringTemplateOutlet"]],
        template: function NzOptionItemGroupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzOptionItemGroupComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzLabel);
          }
        },
        directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__["NzStringTemplateOutletDirective"]],
        encapsulation: 2,
        changeDetection: 0
      });

      NzOptionItemGroupComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      NzOptionItemGroupComponent.propDecorators = {
        nzLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzOptionItemGroupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'nz-option-item-group',
            template: "\n    <ng-container *nzStringTemplateOutlet=\"nzLabel\">{{ nzLabel }}</ng-container>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          nzLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzOptionItemComponent = /*#__PURE__*/function () {
        function NzOptionItemComponent(elementRef) {
          _classCallCheck(this, NzOptionItemComponent);

          this.elementRef = elementRef;
          this.selected = false;
          this.activated = false;
          this.grouped = false;
          this.customContent = false;
          this.template = null;
          this.disabled = false;
          this.showState = false;
          this.label = null;
          this.value = null;
          this.activatedValue = null;
          this.listOfSelectedValue = [];
          this.icon = null;
          this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.itemHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // TODO: move to host after View Engine deprecation

          this.elementRef.nativeElement.classList.add('ant-select-item', 'ant-select-item-option');
        }

        _createClass(NzOptionItemComponent, [{
          key: "onHostMouseEnter",
          value: function onHostMouseEnter() {
            if (!this.disabled) {
              this.itemHover.next(this.value);
            }
          }
        }, {
          key: "onHostClick",
          value: function onHostClick() {
            if (!this.disabled) {
              this.itemClick.next(this.value);
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this39 = this;

            var value = changes.value,
                activatedValue = changes.activatedValue,
                listOfSelectedValue = changes.listOfSelectedValue;

            if (value || listOfSelectedValue) {
              this.selected = this.listOfSelectedValue.some(function (v) {
                return _this39.compareWith(v, _this39.value);
              });
            }

            if (value || activatedValue) {
              this.activated = this.compareWith(this.activatedValue, this.value);
            }
          }
        }]);

        return NzOptionItemComponent;
      }();

      NzOptionItemComponent.ɵfac = function NzOptionItemComponent_Factory(t) {
        return new (t || NzOptionItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      NzOptionItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NzOptionItemComponent,
        selectors: [["nz-option-item"]],
        hostVars: 9,
        hostBindings: function NzOptionItemComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function NzOptionItemComponent_mouseenter_HostBindingHandler() {
              return ctx.onHostMouseEnter();
            })("click", function NzOptionItemComponent_click_HostBindingHandler() {
              return ctx.onHostClick();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx.label);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-item-option-grouped", ctx.grouped)("ant-select-item-option-selected", ctx.selected && !ctx.disabled)("ant-select-item-option-disabled", ctx.disabled)("ant-select-item-option-active", ctx.activated && !ctx.disabled);
          }
        },
        inputs: {
          grouped: "grouped",
          customContent: "customContent",
          template: "template",
          disabled: "disabled",
          showState: "showState",
          label: "label",
          value: "value",
          activatedValue: "activatedValue",
          listOfSelectedValue: "listOfSelectedValue",
          icon: "icon",
          compareWith: "compareWith"
        },
        outputs: {
          itemClick: "itemClick",
          itemHover: "itemHover"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 4,
        vars: 3,
        consts: [[1, "ant-select-item-option-content"], [4, "ngIf"], ["class", "ant-select-item-option-state", "style", "user-select: none", "unselectable", "on", 4, "ngIf"], [3, "ngTemplateOutlet"], ["unselectable", "on", 1, "ant-select-item-option-state", 2, "user-select", "none"], ["nz-icon", "", "nzType", "check", "class", "ant-select-selected-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "check", 1, "ant-select-selected-icon"]],
        template: function NzOptionItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzOptionItemComponent_ng_container_1_Template, 2, 1, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzOptionItemComponent_ng_container_2_Template, 2, 1, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzOptionItemComponent_div_3_Template, 2, 2, "div", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.customContent);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customContent);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showState && ctx.selected);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgTemplateOutlet"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_22__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__["ɵNzTransitionPatchDirective"]],
        encapsulation: 2,
        changeDetection: 0
      });

      NzOptionItemComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      NzOptionItemComponent.propDecorators = {
        grouped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showState: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        activatedValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        listOfSelectedValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        itemClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        itemHover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzOptionItemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'nz-option-item',
            template: "\n    <div class=\"ant-select-item-option-content\">\n      <ng-container *ngIf=\"!customContent\">{{ label }}</ng-container>\n      <ng-container *ngIf=\"customContent\">\n        <ng-template [ngTemplateOutlet]=\"template\"></ng-template>\n      </ng-container>\n    </div>\n    <div *ngIf=\"showState && selected\" class=\"ant-select-item-option-state\" style=\"user-select: none\" unselectable=\"on\">\n      <i nz-icon nzType=\"check\" class=\"ant-select-selected-icon\" *ngIf=\"!icon; else icon\"></i>\n    </div>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
              '[attr.title]': 'label',
              '[class.ant-select-item-option-grouped]': 'grouped',
              '[class.ant-select-item-option-selected]': 'selected && !disabled',
              '[class.ant-select-item-option-disabled]': 'disabled',
              '[class.ant-select-item-option-active]': 'activated && !disabled',
              '(mouseenter)': 'onHostMouseEnter()',
              '(click)': 'onHostClick()'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          grouped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          activatedValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          listOfSelectedValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          itemClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          itemHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzSelectArrowComponent = /*#__PURE__*/_createClass(function NzSelectArrowComponent(elementRef) {
        _classCallCheck(this, NzSelectArrowComponent);

        this.elementRef = elementRef;
        this.loading = false;
        this.search = false;
        this.suffixIcon = null; // TODO: move to host after View Engine deprecation

        this.elementRef.nativeElement.classList.add('ant-select-arrow');
      });

      NzSelectArrowComponent.ɵfac = function NzSelectArrowComponent_Factory(t) {
        return new (t || NzSelectArrowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      NzSelectArrowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NzSelectArrowComponent,
        selectors: [["nz-select-arrow"]],
        hostVars: 2,
        hostBindings: function NzSelectArrowComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-arrow-loading", ctx.loading);
          }
        },
        inputs: {
          loading: "loading",
          search: "search",
          suffixIcon: "suffixIcon"
        },
        decls: 3,
        vars: 2,
        consts: [["nz-icon", "", "nzType", "loading", 4, "ngIf", "ngIfElse"], ["defaultArrow", ""], ["nz-icon", "", "nzType", "loading"], [4, "ngIf", "ngIfElse"], ["suffixTemplate", ""], ["nz-icon", "", "nzType", "down", 4, "ngIf"], ["nz-icon", "", "nzType", "search", 4, "ngIf"], ["nz-icon", "", "nzType", "down"], ["nz-icon", "", "nzType", "search"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"]],
        template: function NzSelectArrowComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectArrowComponent_i_0_Template, 1, 0, "i", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectArrowComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_22__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__["NzStringTemplateOutletDirective"]],
        encapsulation: 2,
        changeDetection: 0
      });

      NzSelectArrowComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      NzSelectArrowComponent.propDecorators = {
        loading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        search: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        suffixIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectArrowComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'nz-select-arrow',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <i nz-icon nzType=\"loading\" *ngIf=\"loading; else defaultArrow\"></i>\n    <ng-template #defaultArrow>\n      <ng-container *ngIf=\"!suffixIcon; else suffixTemplate\">\n        <i nz-icon nzType=\"down\" *ngIf=\"!search\"></i>\n        <i nz-icon nzType=\"search\" *ngIf=\"search\"></i>\n      </ng-container>\n      <ng-template #suffixTemplate>\n        <ng-container *nzStringTemplateOutlet=\"suffixIcon; let suffixIcon\">\n          <i nz-icon [nzType]=\"suffixIcon\"></i>\n        </ng-container>\n      </ng-template>\n    </ng-template>\n  ",
            host: {
              '[class.ant-select-arrow-loading]': 'loading'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          search: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          suffixIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzSelectClearComponent = /*#__PURE__*/function () {
        function NzSelectClearComponent(elementRef) {
          _classCallCheck(this, NzSelectClearComponent);

          this.elementRef = elementRef;
          this.clearIcon = null;
          this.clear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // TODO: move to host after View Engine deprecation

          this.elementRef.nativeElement.classList.add('ant-select-clear');
        }

        _createClass(NzSelectClearComponent, [{
          key: "onClick",
          value: function onClick(e) {
            e.preventDefault();
            e.stopPropagation();
            this.clear.emit(e);
          }
        }]);

        return NzSelectClearComponent;
      }();

      NzSelectClearComponent.ɵfac = function NzSelectClearComponent_Factory(t) {
        return new (t || NzSelectClearComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      NzSelectClearComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NzSelectClearComponent,
        selectors: [["nz-select-clear"]],
        hostBindings: function NzSelectClearComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzSelectClearComponent_click_HostBindingHandler($event) {
              return ctx.onClick($event);
            });
          }
        },
        inputs: {
          clearIcon: "clearIcon"
        },
        outputs: {
          clear: "clear"
        },
        decls: 1,
        vars: 2,
        consts: [["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "class", "ant-select-close-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 1, "ant-select-close-icon"]],
        template: function NzSelectClearComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectClearComponent_i_0_Template, 1, 0, "i", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.clearIcon)("ngIfElse", ctx.clearIcon);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_22__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__["ɵNzTransitionPatchDirective"]],
        encapsulation: 2,
        changeDetection: 0
      });

      NzSelectClearComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      NzSelectClearComponent.propDecorators = {
        clearIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clear: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectClearComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'nz-select-clear',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <i nz-icon nzType=\"close-circle\" nzTheme=\"fill\" *ngIf=\"!clearIcon; else clearIcon\" class=\"ant-select-close-icon\"></i>\n  ",
            host: {
              '(click)': 'onClick($event)'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          clearIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          clear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzSelectItemComponent = /*#__PURE__*/function () {
        function NzSelectItemComponent(elementRef) {
          _classCallCheck(this, NzSelectItemComponent);

          this.elementRef = elementRef;
          this.disabled = false;
          this.label = null;
          this.deletable = false;
          this.removeIcon = null;
          this.contentTemplateOutletContext = null;
          this.contentTemplateOutlet = null;
          this["delete"] = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // TODO: move to host after View Engine deprecation

          this.elementRef.nativeElement.classList.add('ant-select-selection-item');
        }

        _createClass(NzSelectItemComponent, [{
          key: "onDelete",
          value: function onDelete(e) {
            e.preventDefault();
            e.stopPropagation();

            if (!this.disabled) {
              this["delete"].next(e);
            }
          }
        }]);

        return NzSelectItemComponent;
      }();

      NzSelectItemComponent.ɵfac = function NzSelectItemComponent_Factory(t) {
        return new (t || NzSelectItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      NzSelectItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NzSelectItemComponent,
        selectors: [["nz-select-item"]],
        hostVars: 3,
        hostBindings: function NzSelectItemComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx.label);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-selection-item-disabled", ctx.disabled);
          }
        },
        inputs: {
          disabled: "disabled",
          label: "label",
          deletable: "deletable",
          removeIcon: "removeIcon",
          contentTemplateOutletContext: "contentTemplateOutletContext",
          contentTemplateOutlet: "contentTemplateOutlet"
        },
        outputs: {
          "delete": "delete"
        },
        decls: 2,
        vars: 5,
        consts: [[4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["class", "ant-select-selection-item-remove", 3, "click", 4, "ngIf"], ["class", "ant-select-selection-item-content", 4, "ngIf", "ngIfElse"], ["labelTemplate", ""], [1, "ant-select-selection-item-content"], [1, "ant-select-selection-item-remove", 3, "click"], ["nz-icon", "", "nzType", "close", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close"]],
        template: function NzSelectItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectItemComponent_ng_container_0_Template, 4, 2, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectItemComponent_span_1_Template, 2, 2, "span", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.contentTemplateOutlet)("nzStringTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c3, ctx.contentTemplateOutletContext));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deletable && !ctx.disabled);
          }
        },
        directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__["NzStringTemplateOutletDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_22__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__["ɵNzTransitionPatchDirective"]],
        encapsulation: 2,
        changeDetection: 0
      });

      NzSelectItemComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      NzSelectItemComponent.propDecorators = {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        deletable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        removeIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        contentTemplateOutletContext: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        contentTemplateOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        "delete": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectItemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'nz-select-item',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <ng-container *nzStringTemplateOutlet=\"contentTemplateOutlet; context: { $implicit: contentTemplateOutletContext }\">\n      <div class=\"ant-select-selection-item-content\" *ngIf=\"deletable; else labelTemplate\">{{ label }}</div>\n      <ng-template #labelTemplate>{{ label }}</ng-template>\n    </ng-container>\n    <span *ngIf=\"deletable && !disabled\" class=\"ant-select-selection-item-remove\" (click)=\"onDelete($event)\">\n      <i nz-icon nzType=\"close\" *ngIf=\"!removeIcon; else removeIcon\"></i>\n    </span>\n  ",
            host: {
              '[attr.title]': 'label',
              '[class.ant-select-selection-item-disabled]': 'disabled'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          deletable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          removeIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          contentTemplateOutletContext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          contentTemplateOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          "delete": [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzSelectPlaceholderComponent = /*#__PURE__*/_createClass(function NzSelectPlaceholderComponent(elementRef) {
        _classCallCheck(this, NzSelectPlaceholderComponent);

        this.elementRef = elementRef;
        this.placeholder = null; // TODO: move to host after View Engine deprecation

        this.elementRef.nativeElement.classList.add('ant-select-selection-placeholder');
      });

      NzSelectPlaceholderComponent.ɵfac = function NzSelectPlaceholderComponent_Factory(t) {
        return new (t || NzSelectPlaceholderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      NzSelectPlaceholderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NzSelectPlaceholderComponent,
        selectors: [["nz-select-placeholder"]],
        inputs: {
          placeholder: "placeholder"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "nzStringTemplateOutlet"]],
        template: function NzSelectPlaceholderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectPlaceholderComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.placeholder);
          }
        },
        directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__["NzStringTemplateOutletDirective"]],
        encapsulation: 2,
        changeDetection: 0
      });

      NzSelectPlaceholderComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      NzSelectPlaceholderComponent.propDecorators = {
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectPlaceholderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'nz-select-placeholder',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <ng-container *nzStringTemplateOutlet=\"placeholder\">\n      {{ placeholder }}\n    </ng-container>\n  "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
       */


      var NzSelectModule = /*#__PURE__*/_createClass(function NzSelectModule() {
        _classCallCheck(this, NzSelectModule);
      });

      NzSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NzSelectModule
      });
      NzSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NzSelectModule_Factory(t) {
          return new (t || NzSelectModule)();
        },
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["CommonModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_21__["NzI18nModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["PlatformModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_22__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__["NzOutletModule"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_20__["NzEmptyModule"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_18__["NzOverlayModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_14__["NzNoAnimationModule"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__["ɵNzTransitionPatchModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["A11yModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzSelectModule, {
          declarations: function declarations() {
            return [NzOptionComponent, NzSelectComponent, NzOptionContainerComponent, NzOptionGroupComponent, NzOptionItemComponent, NzSelectTopControlComponent, NzSelectSearchComponent, NzSelectItemComponent, NzSelectClearComponent, NzSelectArrowComponent, NzSelectPlaceholderComponent, NzOptionItemGroupComponent];
          },
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["CommonModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_21__["NzI18nModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["PlatformModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_22__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__["NzOutletModule"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_20__["NzEmptyModule"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_18__["NzOverlayModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_14__["NzNoAnimationModule"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__["ɵNzTransitionPatchModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["A11yModule"]];
          },
          exports: function exports() {
            return [NzOptionComponent, NzSelectComponent, NzOptionGroupComponent, NzSelectArrowComponent, NzSelectClearComponent, NzSelectItemComponent, NzSelectPlaceholderComponent, NzSelectSearchComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["CommonModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_21__["NzI18nModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["PlatformModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_22__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__["NzOutletModule"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_20__["NzEmptyModule"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_18__["NzOverlayModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_14__["NzNoAnimationModule"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__["ɵNzTransitionPatchModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["A11yModule"]],
            declarations: [NzOptionComponent, NzSelectComponent, NzOptionContainerComponent, NzOptionGroupComponent, NzOptionItemComponent, NzSelectTopControlComponent, NzSelectSearchComponent, NzSelectItemComponent, NzSelectClearComponent, NzSelectArrowComponent, NzSelectPlaceholderComponent, NzOptionItemGroupComponent],
            exports: [NzOptionComponent, NzSelectComponent, NzOptionGroupComponent, NzSelectArrowComponent, NzSelectClearComponent, NzSelectItemComponent, NzSelectPlaceholderComponent, NzSelectSearchComponent]
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
      //# sourceMappingURL=ng-zorro-antd-select.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~account-account-module~authentication-authentication-module~booth-booth-module~dashboard-das~d3403784-es5.js.map