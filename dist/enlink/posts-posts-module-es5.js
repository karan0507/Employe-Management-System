(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["posts-posts-module"], {
    /***/
    "1XP4":
    /*!***************************************!*\
      !*** ./src/app/posts/posts.module.ts ***!
      \***************************************/

    /*! exports provided: PostsModule */

    /***/
    function XP4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostsModule", function () {
        return PostsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _posts_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./posts-routing.module */
      "uKRR");
      /* harmony import */


      var _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./post-detail/post-detail.component */
      "SPWq");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/select */
      "zAKX");
      /* harmony import */


      var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/table */
      "rMZv");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/avatar */
      "ZE2D");
      /* harmony import */


      var ng_chartjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-chartjs */
      "jdj2");
      /* harmony import */


      var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/badge */
      "SKKP");
      /* harmony import */


      var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-zorro-antd/statistic */
      "A07A");
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");
      /* harmony import */


      var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-zorro-antd/input */
      "PTRe");
      /* harmony import */


      var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-zorro-antd/progress */
      "W9fG");
      /* harmony import */


      var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng-zorro-antd/tag */
      "ZyQt");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ng2-search-filter */
      "cZdB");
      /* harmony import */


      var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ng-zorro-antd/list */
      "Ff2k");
      /* harmony import */


      var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ng-zorro-antd/page-header */
      "jPNr");
      /* harmony import */


      var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ng-zorro-antd/spin */
      "qAZ0");
      /** Import any ng-zorro components as the module required except icon module */

      /** Assign all ng-zorro modules to this array*/


      var antdModule = [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__["NzCardModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__["NzSelectModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__["NzTableModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconModule"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_11__["NzAvatarModule"], ng_chartjs__WEBPACK_IMPORTED_MODULE_12__["NgChartjsModule"], ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_13__["NzBadgeModule"], ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_14__["NzStatisticModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__["NzInputModule"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_17__["NzProgressModule"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_18__["NzTagModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_19__["Ng2SearchPipeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_20__["NzListModule"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_21__["NzPageHeaderModule"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_22__["NzSpinModule"]];

      var PostsModule = /*#__PURE__*/_createClass(function PostsModule() {
        _classCallCheck(this, PostsModule);
      });

      PostsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PostsModule
      });
      PostsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PostsModule_Factory(t) {
          return new (t || PostsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _posts_routing_module__WEBPACK_IMPORTED_MODULE_2__["PostsRoutingModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_15__["NgxPermissionsModule"].forChild()].concat(antdModule)]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PostsModule, {
          declarations: [_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_3__["PostDetailComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _posts_routing_module__WEBPACK_IMPORTED_MODULE_2__["PostsRoutingModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_15__["NgxPermissionsModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__["NzCardModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__["NzSelectModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__["NzTableModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconModule"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_11__["NzAvatarModule"], ng_chartjs__WEBPACK_IMPORTED_MODULE_12__["NgChartjsModule"], ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_13__["NzBadgeModule"], ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_14__["NzStatisticModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__["NzInputModule"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_17__["NzProgressModule"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_18__["NzTagModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_19__["Ng2SearchPipeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_20__["NzListModule"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_21__["NzPageHeaderModule"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_22__["NzSpinModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_3__["PostDetailComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _posts_routing_module__WEBPACK_IMPORTED_MODULE_2__["PostsRoutingModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_15__["NgxPermissionsModule"].forChild()].concat(antdModule)
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "SPWq":
    /*!************************************************************!*\
      !*** ./src/app/posts/post-detail/post-detail.component.ts ***!
      \************************************************************/

    /*! exports provided: PostDetailComponent */

    /***/
    function SPWq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostDetailComponent", function () {
        return PostDetailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/http.service */
      "9NvV");
      /* harmony import */


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "PScX");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/spin */
      "qAZ0");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");
      /* harmony import */


      var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/table */
      "rMZv");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/avatar */
      "ZE2D");
      /* harmony import */


      var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/select */
      "zAKX");
      /* harmony import */


      var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/page-header */
      "jPNr");

      function PostDetailComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PostDetailComponent_img_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 27);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.postDetailData == null ? null : ctx_r2.postDetailData.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PostDetailComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PostDetailComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-card", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-avatar", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var a_data_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", 60)("nzIcon", a_data_r26.icon)("ngClass", a_data_r26["class"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_data_r26.count);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_data_r26.name);
        }
      }

      function PostDetailComponent_ng_template_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Shared List ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-select", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPlaceHolder", ctx_r6._currLanguage == "en" ? "Select Type" : "\u092A\u094D\u0930\u0915\u093E\u0930 \u091A\u0941\u0928\u0947\u0902");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", "Reaction")("nzLabel", "Reaction");
        }
      }

      function PostDetailComponent_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r8.shareTotalCount, " Results Found ");
        }
      }

      function PostDetailComponent_ng_container_39_nz_card_11_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Created By: ", item_r33 == null ? null : item_r33.created_by, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 2, item_r33 == null ? null : item_r33.created_at, "medium"), ")");
        }
      }

      function PostDetailComponent_ng_container_39_nz_card_11_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sub_sec_audit_r38 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", sub_sec_audit_r38.key, " content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sub_sec_audit_r38.old_value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sub_sec_audit_r38.new_value);
        }
      }

      function PostDetailComponent_ng_container_39_nz_card_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-card", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-collapse", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-collapse-panel", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostDetailComponent_ng_container_39_nz_card_11_ng_template_3_Template, 5, 5, "ng-template", null, 51, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostDetailComponent_ng_container_39_nz_card_11_div_5_Template, 9, 3, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r33 = ctx.$implicit;

          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var data_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r30._currentAuditId == data_r28.id ? ctx_r30.api_loader["accordian"] : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzExpandIconPosition", ctx_r30.right);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", _r34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r33 == null ? null : item_r33.key_changes);
        }
      }

      function PostDetailComponent_ng_container_39_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Reshare ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PostDetailComponent_ng_container_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nz-page-header", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PostDetailComponent_ng_container_39_nz_card_11_Template, 6, 4, "nz-card", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PostDetailComponent_ng_container_39_ng_template_12_Template, 3, 0, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var data_r28 = ctx.$implicit;
          var i_r29 = ctx.index;

          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r29 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r28.user_details.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzExpand", ctx_r10.expandSet.has(data_r28.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", data_r28 == null ? null : data_r28.auditDataset);
        }
      }

      function PostDetailComponent_ng_container_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var data_r40 = ctx.$implicit;
          var i_r41 = ctx.index;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r11.sharedList == null ? null : ctx_r11.sharedList.length) + i_r41 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r40 || "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r40 || "-");
        }
      }

      function PostDetailComponent_ng_template_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Liked List ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-select", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPlaceHolder", ctx_r13._currLanguage == "en" ? "Select Type" : "\u092A\u094D\u0930\u0915\u093E\u0930 \u091A\u0941\u0928\u0947\u0902");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", "Reaction")("nzLabel", "Reaction");
        }
      }

      function PostDetailComponent_ng_template_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r15.likeTotalCount, " Results Found ");
        }
      }

      function PostDetailComponent_tr_59_td_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r43 + 1);
        }
      }

      function PostDetailComponent_tr_59_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r45.likePageInd - 1) * ctx_r45.likePageSize + (i_r43 + 1), " ");
        }
      }

      function PostDetailComponent_tr_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostDetailComponent_tr_59_td_1_Template, 2, 1, "td", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostDetailComponent_tr_59_td_2_Template, 2, 1, "td", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r42 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.likePageInd == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.likePageInd > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r42.user_details.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r42.reaction_type);
        }
      }

      function PostDetailComponent_tr_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r48 = ctx.$implicit;
          var i_r49 = ctx.index;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r18.likedList == null ? null : ctx_r18.likedList.length) + i_r49 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r48 || "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r48 || "-");
        }
      }

      function PostDetailComponent_ng_template_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Comments List ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-select", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPlaceHolder", ctx_r20._currLanguage == "en" ? "Select Type" : "\u092A\u094D\u0930\u0915\u093E\u0930 \u091A\u0941\u0928\u0947\u0902");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", "Reaction")("nzLabel", "Reaction");
        }
      }

      function PostDetailComponent_ng_template_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r22.commentTotalCount, " Results Found ");
        }
      }

      function PostDetailComponent_tr_79_td_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r51 + 1);
        }
      }

      function PostDetailComponent_tr_79_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r53.commentPageInd - 1) * ctx_r53.commentPageSize + (i_r51 + 1), " ");
        }
      }

      function PostDetailComponent_tr_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostDetailComponent_tr_79_td_1_Template, 2, 1, "td", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostDetailComponent_tr_79_td_2_Template, 2, 1, "td", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r50 = ctx.$implicit;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.commentPageInd == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.commentPageInd > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r50.user_details.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", data_r50.comment_text ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](7, 5, data_r50.comment_text, 0, 20) : "-", " ", (data_r50.comment_text == null ? null : data_r50.comment_text.length) > 20 ? "..." : "", " ");
        }
      }

      function PostDetailComponent_tr_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r56 = ctx.$implicit;
          var i_r57 = ctx.index;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r25.commentList == null ? null : ctx_r25.commentList.length) + i_r57 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r56 || "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r56 || "-");
        }
      }

      var _c0 = function _c0() {
        return {
          y: "50vh"
        };
      };

      var PostDetailComponent = /*#__PURE__*/function () {
        function PostDetailComponent(http, message, acRoute) {
          _classCallCheck(this, PostDetailComponent);

          this.http = http;
          this.message = message;
          this.acRoute = acRoute;
          this.listMatricsData = [{
            'name': 'Total Likes',
            'icon': 'like',
            'count': 104,
            'class': 'ant-avatar-green'
          }, {
            'name': 'Total Comments',
            'icon': 'comment',
            'count': 96,
            'class': 'ant-avatar-blue'
          }, {
            'name': 'Total Shares',
            'icon': 'share-alt',
            'count': 80,
            'class': 'ant-avatar-purple'
          }];
          this.listOfData = [{
            'name': 'A Data',
            're_share': 3
          }, {
            'name': 'A Data',
            're_share': 3
          }, {
            'name': 'A Data',
            're_share': 3
          }, {
            'name': 'A Data',
            're_share': 3
          }];
          this.shareTableData = [];
          this.likesTableData = [];
          this.commentTableData = [];
          this.emptySharedList = [];
          this.api_loader = {
            'shared': false,
            'liked': false,
            'comments': false
          };
          this.expandSet = new Set(); // Get Shared List 

          this.sharedList = [];
          this.sharePageInd = 1;
          this.shareTotalCount = null;
          this.sharePageSize = 10;
          this.shareTableLoading = false; // Get Shared List 

          this.likedList = [];
          this.emptyLikedList = [];
          this.likePageInd = 1;
          this.likeTotalCount = null;
          this.likePageSize = 10;
          this.likeTableLoading = false; // Get Shared List 

          this.commentList = [];
          this.emptyCommentList = [];
          this.commentPageInd = 1;
          this.commentTotalCount = null;
          this.commentPageSize = 10;
          this.commentTableLoading = false;
        }

        _createClass(PostDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.acRoute.queryParams.subscribe(function (param) {
              if (param["post_id"]) {
                _this._currPostId = param["post_id"];
              }

              if (_this._currPostId) {
                var params_data = {
                  "post_id": _this._currPostId,
                  "end_point": "POST_DETAIL_API_URL",
                  "type": ""
                };

                _this.getBackgroundDataAPIFunction(params_data, "POST_DETAIL_API_URL");

                _this.getSharedList();

                _this.getlikedList();

                _this.getCommentList();
              }
            }); // this.getBackgroundDataAPIFunction(params_data, "POST_DETAIL_TABLE_DATA_API_URL", "Share")
            // this.getBackgroundDataAPIFunction(params_data, "POST_DETAIL_TABLE_DATA_API_URL", "Reaction")
            // this.getBackgroundDataAPIFunction(params_data, "POST_DETAIL_TABLE_DATA_API_URL", "Comments")
          }
        }, {
          key: "getBackgroundDataAPIFunction",
          value: function getBackgroundDataAPIFunction(params_data, section) {
            var _this2 = this;

            var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
            this.http.getDataFromBackgroundFunction(params_data).subscribe(function (res) {
              if (res['data']) {
                if (section == "POST_DETAIL_API_URL") {
                  _this2.postDetailData = res['data'];
                  _this2.listMatricsData[0]['count'] = res['data']['total_likes'];
                  _this2.listMatricsData[1]['count'] = res['data']['total_comments'];
                  _this2.listMatricsData[2]['count'] = res['data']['total_shares'];
                } // if (section == "POST_DETAIL_TABLE_DATA_API_URL" && type == "Share") {
                //   this.shareTableData = res['data']
                // }
                // if (section == "POST_DETAIL_TABLE_DATA_API_URL" && type == "Reaction") {
                //   this.likesTableData = res['data']
                // }


                if (section == "POST_DETAIL_TABLE_DATA_API_URL" && type == "Comments") {
                  _this2.commentTableData = res['data'];
                }
              }
            });
          }
        }, {
          key: "onExpandChange",
          value: function onExpandChange(id, checked, index) {
            if (checked) {
              this.expandSet.add(id);
              this._currReshareId = id; // this.getBackgroundDataAPIFunction();
            } else {
              this.expandSet["delete"](id);
            }
          }
        }, {
          key: "getSharedList",
          value: function getSharedList(tableFilter) {
            var _this3 = this;

            this.api_loader['shared'] = true;
            var params_data = {};
            params_data = {
              "post_id": this._currPostId,
              "end_point": "POST_DETAIL_TABLE_DATA_API_URL",
              "type": "Share"
            };

            if (tableFilter) {
              this.sharePageInd = tableFilter === null || tableFilter === void 0 ? void 0 : tableFilter.pageIndex;
              this.sharePageSize = tableFilter === null || tableFilter === void 0 ? void 0 : tableFilter.pageSize;
              params_data['page'] = this.sharePageInd;
              params_data['limit'] = this.sharePageSize;
            } else {
              params_data['page'] = this.sharePageInd;
              params_data['limit'] = this.sharePageSize;
            }

            this.http.getDataFromBackgroundFunction(params_data).subscribe(function (res) {
              var _a, _b;

              if (res['data']) {
                _this3.emptySharedList = [];
                _this3.sharedList = res['data'];

                for (var i = 0; i < _this3.sharePageSize - ((_a = _this3.sharedList) === null || _a === void 0 ? void 0 : _a.length); i++) {
                  (_b = _this3.emptySharedList) === null || _b === void 0 ? void 0 : _b.push('-');
                }

                _this3.shareTotalCount = res.total_count;
                _this3.api_loader['shared'] = false;
              } else {
                _this3.api_loader['shared'] = false;
              }
            });
          }
        }, {
          key: "getlikedList",
          value: function getlikedList(tableFilter) {
            var _this4 = this;

            this.api_loader['liked'] = true;
            var params_data = {};
            params_data = {
              "post_id": this._currPostId,
              "end_point": "POST_DETAIL_TABLE_DATA_API_URL",
              "type": "Reaction"
            };

            if (tableFilter) {
              this.likePageInd = tableFilter === null || tableFilter === void 0 ? void 0 : tableFilter.pageIndex;
              this.likePageSize = tableFilter === null || tableFilter === void 0 ? void 0 : tableFilter.pageSize;
              params_data['page'] = this.likePageInd;
              params_data['limit'] = this.likePageSize;
            } else {
              params_data['page'] = this.likePageInd;
              params_data['limit'] = this.likePageSize;
            }

            this.http.getDataFromBackgroundFunction(params_data).subscribe(function (res) {
              var _a, _b;

              if (res['data']) {
                _this4.emptyLikedList = [];
                _this4.likedList = res['data'];

                for (var i = 0; i < _this4.likePageSize - ((_a = _this4.likedList) === null || _a === void 0 ? void 0 : _a.length); i++) {
                  (_b = _this4.emptyLikedList) === null || _b === void 0 ? void 0 : _b.push('-');
                }

                _this4.likeTotalCount = res.total_count;
                _this4.api_loader['liked'] = false;
              } else {
                _this4.api_loader['liked'] = false;
              }
            });
          }
        }, {
          key: "getCommentList",
          value: function getCommentList(tableFilter) {
            var _this5 = this;

            this.api_loader['comments'] = true;
            var params_data = {};
            params_data = {
              "post_id": this._currPostId,
              "end_point": "POST_DETAIL_TABLE_DATA_API_URL",
              "type": "Comments"
            }; // params_data = { "post_id": this._currPostId, "end_point": "POST_DETAIL_TABLE_DATA_API_URL", "type": "Reaction" }

            if (tableFilter) {
              this.commentPageInd = tableFilter === null || tableFilter === void 0 ? void 0 : tableFilter.pageIndex;
              this.commentPageSize = tableFilter === null || tableFilter === void 0 ? void 0 : tableFilter.pageSize;
              params_data['page'] = this.commentPageInd;
              params_data['limit'] = this.commentPageSize;
            } else {
              params_data['page'] = this.commentPageInd;
              params_data['limit'] = this.commentPageSize;
            }

            this.http.getDataFromBackgroundFunction(params_data).subscribe(function (res) {
              var _a, _b;

              if (res['data']) {
                _this5.emptyCommentList = [];
                _this5.commentList = res['data'];

                for (var i = 0; i < _this5.commentPageSize - ((_a = _this5.commentList) === null || _a === void 0 ? void 0 : _a.length); i++) {
                  (_b = _this5.emptyCommentList) === null || _b === void 0 ? void 0 : _b.push('-');
                }

                _this5.commentTotalCount = res.total_count;
                _this5.api_loader['comments'] = false;
              } else {
                _this5.api_loader['comments'] = false;
              }
            });
          }
        }]);

        return PostDetailComponent;
      }();

      PostDetailComponent.ɵfac = function PostDetailComponent_Factory(t) {
        return new (t || PostDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
      };

      PostDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PostDetailComponent,
        selectors: [["app-post-detail"]],
        decls: 81,
        vars: 50,
        consts: [[1, "row", "mb-3", "h-100"], [1, "col-md-3", "pb-3", "h-100", "min-200px"], ["nzSimple", "", 3, "nzSpinning", "nzIndicator"], ["indicatorTemplate", ""], ["nz-image", "", "class", "w-100", 3, "src", 4, "ngIf"], ["class", "d-flex post-image-height", 4, "ngIf"], [1, "col-md-9"], [1, "text-muted"], [1, "row"], ["class", "col-md-4 mb-3", 4, "ngFor", "ngForOf"], [1, "col-md-4", "col-12"], [1, "card", 3, "nzTitle"], ["titleShared", ""], [1, "totalCount"], ["botTotalCount", ""], [3, "nzData", "nzTotal", "nzFrontPagination", "nzShowSizeChanger", "nzPageIndex", "nzPageSize", "nzShowTotal", "nzLoading", "nzScroll", "nzQueryParams"], ["rowSelectionTable", ""], ["nzWidth", "70px"], ["nzWidth", "100px"], [4, "ngFor", "ngForOf"], [1, "col-md-4"], ["likedTitle", ""], ["likedFooter", ""], ["nzWidth", "120px"], ["commentTitle", ""], ["comentFooter", ""], ["nz-icon", "", "nzType", "loading", 1, "img-spinner", "font-50px", "m-auto"], ["nz-image", "", 1, "w-100", 3, "src"], [1, "d-flex", "post-image-height"], [1, "m-auto"], [1, "col-md-4", "mb-3"], [1, "h-100", "d-flex", "align-items-center", "pointer"], [1, "media", "align-items-center"], [3, "nzSize", "nzIcon", "ngClass"], [1, "m-l-15"], [1, "m-b-0"], [1, "m-b-0", "text-dark"], [1, "col-md-5"], ["nz-icon", "", "nzType", "notification", "nzTheme", "fill", 1, "mr-3"], [1, "col-md-7"], [1, "w-100", 3, "nzPlaceHolder"], [3, "nzValue", "nzLabel"], [1, "font-weight-semibold"], [3, "nzExpand"], [1, "justify-content-center"], [1, "site-page-header", "header_bg_dark", 3, "nzTitle"], ["class", "mb-md-0 border", 3, "nzLoading", 4, "ngFor", "ngForOf"], ["trailTitle", ""], [1, "mb-md-0", "border", 3, "nzLoading"], ["nzAccordion", "", 3, "nzExpandIconPosition"], [3, "nzHeader"], ["trail_header", ""], ["class", "d-flex flex-column mb-2", 4, "ngFor", "ngForOf"], [1, "text-muted", "ml-3", "font-size-12", "font-weight-normal"], [1, "d-flex", "flex-column", "mb-2"], [1, "d-flex", "align-items-center"], [1, ""], ["nz-icon", "", "nzType", "arrow-right", "nzTheme", "outline", 1, "text-danger", "mx-3"], [1, "mr-3"], [1, "ml-md-2"], [1, "mb-0"], ["nz-icon", "", "nzType", "like", "nzTheme", "fill", 1, "mr-3"], [4, "ngIf"], ["nz-icon", "", "nzType", "message", "nzTheme", "fill", 1, "mr-3"]],
        template: function PostDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-spin", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostDetailComponent_ng_template_5_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PostDetailComponent_img_7_Template, 1, 1, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PostDetailComponent_div_8_Template, 3, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PostDetailComponent_div_18_Template, 9, 5, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nz-card", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PostDetailComponent_ng_template_23_Template, 7, 3, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, PostDetailComponent_ng_template_26_Template, 3, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nz-table", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzQueryParams", function PostDetailComponent_Template_nz_table_nzQueryParams_28_listener($event) {
              return ctx.sharedList[0] ? ctx.getSharedList($event) : null;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Sr No.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Re-Share");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, PostDetailComponent_ng_container_39_Template, 14, 5, "ng-container", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, PostDetailComponent_ng_container_40_Template, 8, 3, "ng-container", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, PostDetailComponent_ng_template_43_Template, 7, 3, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, PostDetailComponent_ng_template_45_Template, 3, 1, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "nz-card", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "nz-table", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzQueryParams", function PostDetailComponent_Template_nz_table_nzQueryParams_48_listener($event) {
              return ctx.likedList[0] ? ctx.getlikedList($event) : null;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Sr No.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Reaction Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, PostDetailComponent_tr_59_Template, 7, 4, "tr", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, PostDetailComponent_tr_60_Template, 7, 3, "tr", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, PostDetailComponent_ng_template_63_Template, 7, 3, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, PostDetailComponent_ng_template_65_Template, 3, 1, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "nz-card", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "nz-table", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzQueryParams", function PostDetailComponent_Template_nz_table_nzQueryParams_68_listener($event) {
              return ctx.commentList[0] ? ctx.getCommentList($event) : null;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Sr No.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, PostDetailComponent_tr_79_Template, 8, 9, "tr", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, PostDetailComponent_tr_80_Template, 7, 3, "tr", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);

            var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);

            var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](64);

            var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpinning", !ctx.postDetailData)("nzIndicator", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.postDetailData == null ? null : ctx.postDetailData.image);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.postDetailData && !(ctx.postDetailData == null ? null : ctx.postDetailData.image));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Post ID - ", ctx.postDetailData == null ? null : ctx.postDetailData.post_id, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Post Date - ", (ctx.postDetailData == null ? null : ctx.postDetailData.post_on) ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 44, ctx.postDetailData == null ? null : ctx.postDetailData.post_on, "medium") : "", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.postDetailData == null ? null : ctx.postDetailData.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listMatricsData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.sharedList)("nzTotal", ctx.shareTotalCount)("nzFrontPagination", false)("nzShowSizeChanger", true)("nzPageIndex", ctx.sharePageInd)("nzPageSize", ctx.sharePageSize)("nzShowTotal", _r7)("nzLoading", ctx.api_loader["shared"])("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](47, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sharedList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.emptySharedList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.likedList)("nzTotal", ctx.likeTotalCount)("nzFrontPagination", false)("nzShowSizeChanger", true)("nzPageIndex", ctx.likePageInd)("nzPageSize", ctx.likePageSize)("nzShowTotal", _r14)("nzLoading", ctx.api_loader["liked"])("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](48, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.likedList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.emptyLikedList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.commentList)("nzTotal", ctx.commentTotalCount)("nzFrontPagination", false)("nzShowSizeChanger", true)("nzPageIndex", ctx.commentPageInd)("nzPageSize", ctx.commentPageSize)("nzShowTotal", _r21)("nzLoading", ctx.api_loader["comments"])("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](49, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.commentList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.emptyCommentList);
          }
        },
        directives: [ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_4__["NzSpinComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__["NzCardComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__["NzTbodyComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconDirective"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_10__["NzAvatarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__["NzSelectComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__["NzOptionComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__["NzTrExpandDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__["NzTableFixedRowComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_12__["NzPageHeaderComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"]],
        styles: [".card[_ngcontent-%COMP%] {\r\n    height: 593px;\r\n}\r\n\r\n.min-200px[_ngcontent-%COMP%] {\r\n    min-height: 250px;\r\n}\r\n\r\n.img-spinner[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    position: absolute;\r\n    top: 20%;\r\n    right: 40%;\r\n}\r\n\r\n@media(max-width: 425px) {\r\n    .card[_ngcontent-%COMP%] {\r\n        height: 500px;\r\n    }\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtBQUNkOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCOztBQUVKIiwiZmlsZSI6InBvc3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDU5M3B4O1xyXG59XHJcblxyXG4ubWluLTIwMHB4IHtcclxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG59XHJcblxyXG4uaW1nLXNwaW5uZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjAlO1xyXG4gICAgcmlnaHQ6IDQwJTtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAgIC5jYXJkIHtcclxuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostDetailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-post-detail',
            templateUrl: './post-detail.component.html',
            styleUrls: ['./post-detail.component.css']
          }]
        }], function () {
          return [{
            type: _service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
          }, {
            type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "uKRR":
    /*!***********************************************!*\
      !*** ./src/app/posts/posts-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: PostsRoutingModule */

    /***/
    function uKRR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostsRoutingModule", function () {
        return PostsRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./post-detail/post-detail.component */
      "SPWq");

      var routes = [{
        path: 'post-detail',
        // canActivate: [NgxPermissionsGuard],
        component: _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_2__["PostDetailComponent"],
        data: {
          parent: 'Dashboard',
          title: 'Post Detail',
          home: {
            isVisible: true,
            url: '/dashboard/home'
          }
        }
      }];

      var PostsRoutingModule = /*#__PURE__*/_createClass(function PostsRoutingModule() {
        _classCallCheck(this, PostsRoutingModule);
      });

      PostsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PostsRoutingModule
      });
      PostsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PostsRoutingModule_Factory(t) {
          return new (t || PostsRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PostsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=posts-posts-module-es5.js.map