(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "PMIT":
    /*!*****************************************!*\
      !*** ./src/app/ng-zorro-antd.module.ts ***!
      \*****************************************/

    /*! exports provided: DemoNgZorroAntdModule */

    /***/
    function PMIT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DemoNgZorroAntdModule", function () {
        return DemoNgZorroAntdModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng-zorro-antd/avatar */
      "ZE2D");
      /* harmony import */


      var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-zorro-antd/badge */
      "SKKP");
      /* harmony import */


      var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd/breadcrumb */
      "yNE/");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");
      /* harmony import */


      var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/checkbox */
      "TaO5");
      /* harmony import */


      var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/core/no-animation */
      "YF2q");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/date-picker */
      "0lU3");
      /* harmony import */


      var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/divider */
      "5vDB");
      /* harmony import */


      var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/drawer */
      "F6ss");
      /* harmony import */


      var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/dropdown */
      "Nqz0");
      /* harmony import */


      var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/empty */
      "QlLE");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-zorro-antd/i18n */
      "Rm4T");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng-zorro-antd/input */
      "PTRe");
      /* harmony import */


      var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ng-zorro-antd/list */
      "Ff2k");
      /* harmony import */


      var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ng-zorro-antd/menu */
      "Q8cG");
      /* harmony import */


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "PScX");
      /* harmony import */


      var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ng-zorro-antd/modal */
      "dEAy");
      /* harmony import */


      var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ng-zorro-antd/pagination */
      "3/1E");
      /* harmony import */


      var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ng-zorro-antd/progress */
      "W9fG");
      /* harmony import */


      var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ng-zorro-antd/radio */
      "bE2y");
      /* harmony import */


      var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ng-zorro-antd/select */
      "zAKX");
      /* harmony import */


      var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ng-zorro-antd/spin */
      "qAZ0");
      /* harmony import */


      var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ng-zorro-antd/statistic */
      "A07A");
      /* harmony import */


      var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ng-zorro-antd/switch */
      "EGpF");
      /* harmony import */


      var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ng-zorro-antd/table */
      "rMZv");
      /* harmony import */


      var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ng-zorro-antd/tabs */
      "oyxB");
      /* harmony import */


      var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ng-zorro-antd/tag */
      "ZyQt");
      /* harmony import */


      var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ng-zorro-antd/time-picker */
      "ix5O");
      /* harmony import */


      var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ng-zorro-antd/tooltip */
      "nJia");
      /* harmony import */


      var ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ng-zorro-antd/pipes */
      "HSCc");

      var DemoNgZorroAntdModule = /*#__PURE__*/_createClass(function DemoNgZorroAntdModule() {
        _classCallCheck(this, DemoNgZorroAntdModule);
      });

      DemoNgZorroAntdModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DemoNgZorroAntdModule
      });
      DemoNgZorroAntdModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DemoNgZorroAntdModule_Factory(t) {
          return new (t || DemoNgZorroAntdModule)();
        },
        imports: [// NzAffixModule,
        // NzAlertModule,
        // NzAnchorModule,
        // NzAutocompleteModule,
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_1__["NzAvatarModule"], // NzBackTopModule,
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_2__["NzBadgeModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_3__["NzBreadCrumbModule"], // NzCalendarModule,
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__["NzCardModule"], // NzCarouselModule,
        // NzCascaderModule,
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_6__["NzCheckboxModule"], // NzCollapseModule,
        // NzCommentModule,
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_9__["NzDatePickerModule"], // NzDescriptionsModule,
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_10__["NzDividerModule"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_11__["NzDrawerModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_12__["NzDropDownModule"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_13__["NzEmptyModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_14__["NzFormModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__["NzGridModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_16__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__["NzIconModule"], // NzImageModule,
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__["NzInputModule"], // NzInputNumberModule,
        // NzLayoutModule,
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_19__["NzListModule"], // NzMentionModule,
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_20__["NzMenuModule"], ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_21__["NzMessageModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_22__["NzModalModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_7__["NzNoAnimationModule"], // NzNotificationModule,
        // NzPageHeaderModule,
        ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_23__["NzPaginationModule"], // NzPopconfirmModule,
        // NzPopoverModule,
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_24__["NzProgressModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_25__["NzRadioModule"], // NzRateModule,
        // NzResultModule,
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_26__["NzSelectModule"], // NzSkeletonModule,
        // NzSliderModule,
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_27__["NzSpinModule"], ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_28__["NzStatisticModule"], // NzStepsModule,
        ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_29__["NzSwitchModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_30__["NzTableModule"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_31__["NzTabsModule"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_32__["NzTagModule"], ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_33__["NzTimePickerModule"], // NzTimelineModule,
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_34__["NzToolTipModule"], // NzTransButtonModule,
        // NzTransferModule,
        // NzTreeModule,
        // NzTreeViewModule,
        // NzTreeSelectModule,
        // NzTypographyModule,
        // NzUploadModule,
        ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__["NzWaveModule"], // NzResizableModule,
        ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_35__["NzPipesModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoNgZorroAntdModule, {
          exports: [// NzAffixModule,
          // NzAlertModule,
          // NzAnchorModule,
          // NzAutocompleteModule,
          ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_1__["NzAvatarModule"], // NzBackTopModule,
          ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_2__["NzBadgeModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_3__["NzBreadCrumbModule"], // NzCalendarModule,
          ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__["NzCardModule"], // NzCarouselModule,
          // NzCascaderModule,
          ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_6__["NzCheckboxModule"], // NzCollapseModule,
          // NzCommentModule,
          ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_9__["NzDatePickerModule"], // NzDescriptionsModule,
          ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_10__["NzDividerModule"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_11__["NzDrawerModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_12__["NzDropDownModule"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_13__["NzEmptyModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_14__["NzFormModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__["NzGridModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_16__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__["NzIconModule"], // NzImageModule,
          ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__["NzInputModule"], // NzInputNumberModule,
          // NzLayoutModule,
          ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_19__["NzListModule"], // NzMentionModule,
          ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_20__["NzMenuModule"], ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_21__["NzMessageModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_22__["NzModalModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_7__["NzNoAnimationModule"], // NzNotificationModule,
          // NzPageHeaderModule,
          ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_23__["NzPaginationModule"], // NzPopconfirmModule,
          // NzPopoverModule,
          ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_24__["NzProgressModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_25__["NzRadioModule"], // NzRateModule,
          // NzResultModule,
          ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_26__["NzSelectModule"], // NzSkeletonModule,
          // NzSliderModule,
          ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_27__["NzSpinModule"], ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_28__["NzStatisticModule"], // NzStepsModule,
          ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_29__["NzSwitchModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_30__["NzTableModule"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_31__["NzTabsModule"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_32__["NzTagModule"], ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_33__["NzTimePickerModule"], // NzTimelineModule,
          ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_34__["NzToolTipModule"], // NzTransButtonModule,
          // NzTransferModule,
          // NzTreeModule,
          // NzTreeViewModule,
          // NzTreeSelectModule,
          // NzTypographyModule,
          // NzUploadModule,
          ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__["NzWaveModule"], // NzResizableModule,
          ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_35__["NzPipesModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoNgZorroAntdModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [// NzAffixModule,
            // NzAlertModule,
            // NzAnchorModule,
            // NzAutocompleteModule,
            ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_1__["NzAvatarModule"], // NzBackTopModule,
            ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_2__["NzBadgeModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_3__["NzBreadCrumbModule"], // NzCalendarModule,
            ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__["NzCardModule"], // NzCarouselModule,
            // NzCascaderModule,
            ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_6__["NzCheckboxModule"], // NzCollapseModule,
            // NzCommentModule,
            ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_9__["NzDatePickerModule"], // NzDescriptionsModule,
            ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_10__["NzDividerModule"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_11__["NzDrawerModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_12__["NzDropDownModule"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_13__["NzEmptyModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_14__["NzFormModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_15__["NzGridModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_16__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__["NzIconModule"], // NzImageModule,
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__["NzInputModule"], // NzInputNumberModule,
            // NzLayoutModule,
            ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_19__["NzListModule"], // NzMentionModule,
            ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_20__["NzMenuModule"], ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_21__["NzMessageModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_22__["NzModalModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_7__["NzNoAnimationModule"], // NzNotificationModule,
            // NzPageHeaderModule,
            ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_23__["NzPaginationModule"], // NzPopconfirmModule,
            // NzPopoverModule,
            ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_24__["NzProgressModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_25__["NzRadioModule"], // NzRateModule,
            // NzResultModule,
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_26__["NzSelectModule"], // NzSkeletonModule,
            // NzSliderModule,
            ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_27__["NzSpinModule"], ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_28__["NzStatisticModule"], // NzStepsModule,
            ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_29__["NzSwitchModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_30__["NzTableModule"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_31__["NzTabsModule"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_32__["NzTagModule"], ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_33__["NzTimePickerModule"], // NzTimelineModule,
            ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_34__["NzToolTipModule"], // NzTransButtonModule,
            // NzTransferModule,
            // NzTreeModule,
            // NzTreeViewModule,
            // NzTreeSelectModule,
            // NzTypographyModule,
            // NzUploadModule,
            ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__["NzWaveModule"], // NzResizableModule,
            ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_35__["NzPipesModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "cZdB":
    /*!**************************************************************************!*\
      !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
      \**************************************************************************/

    /*! exports provided: Ng2SearchPipeModule, Ng2SearchPipe */

    /***/
    function cZdB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ng2SearchPipeModule", function () {
        return Ng2SearchPipeModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ng2SearchPipe", function () {
        return Ng2SearchPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ng2SearchPipe = /*#__PURE__*/function () {
        function Ng2SearchPipe() {
          _classCallCheck(this, Ng2SearchPipe);
        }

        _createClass(Ng2SearchPipe, [{
          key: "transform",
          value:
          /**
           * @param {?} items object from array
           * @param {?} term term's search
           * @return {?}
           */
          function transform(items, term) {
            if (!term || !items) return items;
            return Ng2SearchPipe.filter(items, term);
          }
          /**
           *
           * @param {?} items List of items to filter
           * @param {?} term  a string term to compare with every property of the list
           *
           * @return {?}
           */

        }], [{
          key: "filter",
          value: function filter(items, term) {
            var
            /** @type {?} */
            toCompare = term.toLowerCase();
            /**
             * @param {?} item
             * @param {?} term
             * @return {?}
             */

            function checkInside(item, term) {
              for (var
              /** @type {?} */
              property in item) {
                if (item[property] === null || item[property] == undefined) {
                  continue;
                }

                if (typeof item[property] === 'object') {
                  if (checkInside(item[property], term)) {
                    return true;
                  }
                }

                if (item[property].toString().toLowerCase().includes(toCompare)) {
                  return true;
                }
              }

              return false;
            }

            return items.filter(function (item) {
              return checkInside(item, term);
            });
          }
        }]);

        return Ng2SearchPipe;
      }();

      Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) {
        return new (t || Ng2SearchPipe)();
      };

      Ng2SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "filter",
        type: Ng2SearchPipe,
        pure: false
      });
      Ng2SearchPipe.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: Ng2SearchPipe,
        factory: Ng2SearchPipe.ɵfac
      });
      /**
       * @nocollapse
       */

      Ng2SearchPipe.ctorParameters = function () {
        return [];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'filter',
            pure: false
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();

      var Ng2SearchPipeModule = /*#__PURE__*/_createClass(function Ng2SearchPipeModule() {
        _classCallCheck(this, Ng2SearchPipeModule);
      });

      Ng2SearchPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: Ng2SearchPipeModule
      });
      Ng2SearchPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function Ng2SearchPipeModule_Factory(t) {
          return new (t || Ng2SearchPipeModule)();
        }
      });
      /**
       * @nocollapse
       */

      Ng2SearchPipeModule.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2SearchPipeModule, {
          declarations: [Ng2SearchPipe],
          exports: [Ng2SearchPipe]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [Ng2SearchPipe],
            exports: [Ng2SearchPipe]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ng2-search-filter.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map