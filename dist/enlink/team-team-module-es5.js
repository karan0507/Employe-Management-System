(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-team-module"], {
    /***/
    "OMoG":
    /*!*******************************************************************!*\
      !*** ./src/app/team/team-management/team-management.component.ts ***!
      \*******************************************************************/

    /*! exports provided: TeamManagementComponent */

    /***/
    function OMoG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeamManagementComponent", function () {
        return TeamManagementComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/service/http.service */
      "9NvV");
      /* harmony import */


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "PScX");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/input */
      "PTRe");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");
      /* harmony import */


      var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/table */
      "rMZv");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/drawer */
      "F6ss");
      /* harmony import */


      var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-zorro-antd/select */
      "zAKX");

      function TeamManagementComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamManagementComponent_ng_template_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.getTeamList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TeamManagementComponent_ng_container_41_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r10 + 1);
        }
      }

      function TeamManagementComponent_ng_container_41_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r12.page - 1) * ctx_r12.globalPageSize + (i_r10 + 1));
        }
      }

      var _c0 = function _c0() {
        return ["/team-management/edit-team"];
      };

      var _c1 = function _c1(a0) {
        return {
          id: a0
        };
      };

      function TeamManagementComponent_ng_container_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TeamManagementComponent_ng_container_41_td_2_Template, 2, 1, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TeamManagementComponent_ng_container_41_td_3_Template, 2, 1, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var data_r9 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.page == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.page > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c1, data_r9.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3._currLanguage == "en" ? ((data_r9 == null ? null : data_r9.first_name) ? data_r9 == null ? null : data_r9.first_name : " ") + ((data_r9 == null ? null : data_r9.last_name) ? " " + (data_r9 == null ? null : data_r9.last_name) : "") : (data_r9 == null ? null : data_r9.first_name) + (data_r9 == null ? null : data_r9.last_name), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (data_r9 == null ? null : data_r9.user_type == null ? null : data_r9.user_type.name) ? data_r9 == null ? null : data_r9.user_type == null ? null : data_r9.user_type.name : "-", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r9 == null ? null : data_r9.email, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r9 == null ? null : data_r9.mobile, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((data_r9 == null ? null : data_r9.status) ? data_r9 == null ? null : data_r9.status == null ? null : data_r9.status.name : "--");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((data_r9 == null ? null : data_r9.created_at) ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 13, data_r9 == null ? null : data_r9.created_at, "medium") : "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((data_r9 == null ? null : data_r9.updated_at) ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 16, data_r9 == null ? null : data_r9.updated_at, "medium") : "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((data_r9 == null ? null : data_r9.created_by) ? ((data_r9 == null ? null : data_r9.created_by == null ? null : data_r9.created_by.first_name) ? data_r9 == null ? null : data_r9.created_by == null ? null : data_r9.created_by.first_name : "") + ((data_r9 == null ? null : data_r9.created_by == null ? null : data_r9.created_by.username) ? data_r9 == null ? null : data_r9.created_by == null ? null : data_r9.created_by.username : "") : "--");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c1, data_r9 == null ? null : data_r9.id));
        }
      }

      function TeamManagementComponent_ng_template_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r5.total_count, " Results Found ");
        }
      }

      function TeamManagementComponent_section_44_nz_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 42);
        }

        if (rf & 2) {
          var item_r23 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r23.id)("nzLabel", ctx_r15._currLanguage == "en" ? (item_r23 == null ? null : item_r23.name == null ? null : item_r23.name.en) + "/" + (item_r23 == null ? null : item_r23.Ward == null ? null : item_r23.Ward.name == null ? null : item_r23.Ward.name.en) : (item_r23 == null ? null : item_r23.name == null ? null : item_r23.name.hi) + "/" + (item_r23 == null ? null : item_r23.Ward == null ? null : item_r23.Ward.name == null ? null : item_r23.Ward.name.hi));
        }
      }

      function TeamManagementComponent_section_44_nz_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 42);
        }

        if (rf & 2) {
          var item_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r24.id)("nzLabel", item_r24 == null ? null : item_r24.name == null ? null : item_r24.name.en);
        }
      }

      function TeamManagementComponent_section_44_nz_option_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 42);
        }

        if (rf & 2) {
          var item_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r25.id)("nzLabel", item_r25 == null ? null : item_r25.name == null ? null : item_r25.name.en);
        }
      }

      function TeamManagementComponent_section_44_nz_option_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 42);
        }

        if (rf & 2) {
          var item_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r26.id)("nzLabel", item_r26 == null ? null : item_r26.name == null ? null : item_r26.name.en);
        }
      }

      function TeamManagementComponent_section_44_nz_option_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 42);
        }

        if (rf & 2) {
          var item_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r27.id)("nzLabel", item_r27 == null ? null : item_r27.name == null ? null : item_r27.name.en);
        }
      }

      function TeamManagementComponent_section_44_nz_option_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 42);
        }

        if (rf & 2) {
          var item_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r28.id)("nzLabel", item_r28 == null ? null : item_r28.name == null ? null : item_r28.name.en);
        }
      }

      function TeamManagementComponent_section_44_ng_template_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Filters ");
        }
      }

      function TeamManagementComponent_section_44_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-drawer", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function TeamManagementComponent_section_44_Template_nz_drawer_nzOnClose_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r29.quickViewToggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Booth: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-select", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamManagementComponent_section_44_Template_nz_select_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r31._currBooth = $event;
          })("nzFocus", function TeamManagementComponent_section_44_Template_nz_select_nzFocus_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r32.searchStaticDataGlobalFunction("Booth");
          })("keyup", function TeamManagementComponent_section_44_Template_nz_select_keyup_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r33.searchStaticDataGlobalFunction("Booth", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TeamManagementComponent_section_44_nz_option_8_Template, 1, 2, "nz-option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ward: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-select", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamManagementComponent_section_44_Template_nz_select_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r34._currWard = $event;
          })("nzFocus", function TeamManagementComponent_section_44_Template_nz_select_nzFocus_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r35.searchStaticDataGlobalFunction("Ward");
          })("keyup", function TeamManagementComponent_section_44_Template_nz_select_keyup_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r36.searchStaticDataGlobalFunction("Ward", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TeamManagementComponent_section_44_nz_option_13_Template, 1, 2, "nz-option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sector: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nz-select", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamManagementComponent_section_44_Template_nz_select_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r37._currSector = $event;
          })("nzFocus", function TeamManagementComponent_section_44_Template_nz_select_nzFocus_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r38.searchStaticDataGlobalFunction("Sector");
          })("keyup", function TeamManagementComponent_section_44_Template_nz_select_keyup_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r39.searchStaticDataGlobalFunction("Sector", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TeamManagementComponent_section_44_nz_option_18_Template, 1, 2, "nz-option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Assembly: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nz-select", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamManagementComponent_section_44_Template_nz_select_ngModelChange_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r40._crrAssembly = $event;
          })("nzFocus", function TeamManagementComponent_section_44_Template_nz_select_nzFocus_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r41.searchStaticDataGlobalFunction("Assembly");
          })("keyup", function TeamManagementComponent_section_44_Template_nz_select_keyup_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r42.searchStaticDataGlobalFunction("Assembly", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TeamManagementComponent_section_44_nz_option_23_Template, 1, 2, "nz-option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Street: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nz-select", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamManagementComponent_section_44_Template_nz_select_ngModelChange_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r43._currStreet = $event;
          })("nzFocus", function TeamManagementComponent_section_44_Template_nz_select_nzFocus_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r44.searchStaticDataGlobalFunction("Street");
          })("keyup", function TeamManagementComponent_section_44_Template_nz_select_keyup_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r45.searchStaticDataGlobalFunction("Street", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TeamManagementComponent_section_44_nz_option_28_Template, 1, 2, "nz-option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Lane: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nz-select", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamManagementComponent_section_44_Template_nz_select_ngModelChange_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r46._currLane = $event;
          })("nzFocus", function TeamManagementComponent_section_44_Template_nz_select_nzFocus_32_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r47.searchStaticDataGlobalFunction("Lane");
          })("keyup", function TeamManagementComponent_section_44_Template_nz_select_keyup_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r48.searchStaticDataGlobalFunction("Lane", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, TeamManagementComponent_section_44_nz_option_33_Template, 1, 2, "nz-option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Is Benificary: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nz-select", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamManagementComponent_section_44_Template_nz_select_ngModelChange_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r49._currBenificary = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "nz-option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "nz-option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamManagementComponent_section_44_Template_button_click_41_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            ctx_r50.quickViewToggle();
            return ctx_r50.getTeamList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Apply");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamManagementComponent_section_44_Template_button_click_43_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r51.resetFilter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, TeamManagementComponent_section_44_ng_template_45_Template, 1, 0, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzWidth", "350px")("nzTitle", _r21)("nzClosable", false)("nzVisible", ctx_r6.quickViewVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6._currBooth);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.boothList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6._currWard);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.wardList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6._currSector);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.sectorList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6._crrAssembly);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.assemblyList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6._currStreet);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.streetList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6._currLane);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.laneList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6._currBenificary);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", true)("nzLabel", "True");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", false)("nzLabel", "False");
        }
      }

      var _c2 = function _c2() {
        return {
          x: "1500px",
          y: "50vh"
        };
      };

      var TeamManagementComponent = /*#__PURE__*/function () {
        function TeamManagementComponent(http, message) {
          _classCallCheck(this, TeamManagementComponent);

          this.http = http;
          this.message = message; // Table:

          this.quickViewVisible = false;
          this.teamList = [];
          this.page = 1;
          this.globalPageSize = 30;
          this.api_loader = {
            'list': false,
            'button': false
          };
          this.boothList = [];
          this.wardList = [];
          this.sectorList = [];
          this.assemblyList = [];
          this.streetList = [];
          this.laneList = [];
        }

        _createClass(TeamManagementComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._currLanguage = localStorage.getItem("appLanguage") || 'en';
            this.getTeamList();
          }
        }, {
          key: "getTeamList",
          value: function getTeamList(tableFilter) {
            var _this = this;

            this.api_loader['list'] = true;
            var data = {
              'end_point': 'FETCH_VOTER_LIST_API_URL'
            };

            if (tableFilter) {
              this.page = tableFilter === null || tableFilter === void 0 ? void 0 : tableFilter.pageIndex;
              this.globalPageSize = tableFilter === null || tableFilter === void 0 ? void 0 : tableFilter.pageSize;
              data['page'] = this.page;
              data['limit'] = this.globalPageSize;
            } else {
              data['page'] = this.page;
              data['limit'] = this.globalPageSize;
            }

            if (this._currBooth) {
              data['booth'] = this._currBooth;
            }

            if (this._currWard) {
              data['ward'] = this._currWard;
            }

            if (this._currSector) {
              data['sector'] = this._currSector;
            }

            if (this._currLane) {
              data['lane'] = this._currLane;
            }

            if (this._crrAssembly) {
              data['assembly'] = this._crrAssembly;
            }

            if (this._currStreet) {
              data['street'] = this._currStreet;
            }

            if (this._currSearchValue) {
              data['search_param'] = this._currSearchValue;
            }

            this.http.getTeamList(data).subscribe(function (res) {
              if (res.success) {
                console.log(res.data);
                _this.teamList = res.data;
                _this.total_count = res.total_count;
                _this.api_loader['list'] = false;
              } else {
                _this.api_loader['list'] = false;
              }
            });
          }
        }, {
          key: "resetFilter",
          value: function resetFilter() {
            this._currSearchValue = null;
            this._currBooth = null;
            this._currSector = null;
            this._currWard = null;
            this._currLane = null;
            this._crrAssembly = null;
            this._currStreet = null;
            this.page = 1;
            this.quickViewVisible = false;
            this.getTeamList();
          }
        }, {
          key: "searchStaticDataGlobalFunction",
          value: function searchStaticDataGlobalFunction(event, data) {
            var _this2 = this;

            clearTimeout(this.debounce);
            this.debounce = setTimeout(function () {
              var data = {
                model_name: event
              };

              _this2.http.getMasterData(data).subscribe(function (res) {
                if (res.success) {
                  if (event == 'Booth') {
                    _this2.boothList = res.data;
                  } else if (event == 'Ward') {
                    _this2.wardList = res.data;
                  } else if (event == 'Sector') {
                    _this2.sectorList = res.data;
                  } else if (event == 'Street') {
                    _this2.streetList = res.data;
                  } else if (event == 'Lane') {
                    _this2.laneList = res.data;
                  } else if (event == 'Assembly') {
                    _this2.assemblyList = res.data;
                  }
                }
              });
            }, 500);
          }
        }, {
          key: "quickViewToggle",
          value: function quickViewToggle() {
            this.quickViewVisible = !this.quickViewVisible;
          }
        }]);

        return TeamManagementComponent;
      }();

      TeamManagementComponent.ɵfac = function TeamManagementComponent_Factory(t) {
        return new (t || TeamManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]));
      };

      TeamManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TeamManagementComponent,
        selectors: [["app-team-management"]],
        decls: 45,
        vars: 15,
        consts: [[1, "d-block", "align-items-center", "mb-3"], [1, "row"], [1, "col-12", "col-lg-4", "mb-2"], [1, "d-flex"], ["nzSearch", "", 3, "nzAddOnAfter"], ["type", "text", "nz-input", "", "placeholder", "Search By Name & Mobile Number", 3, "ngModel", "ngModelChange", "keyup.enter"], ["suffixIconButton", ""], ["nz-button", "", "nzType", "default", "nzShape", "circle", 1, "ml-3", "mb-2", 3, "click"], ["nz-icon", "", "nzType", "undo"], [1, "col-lg-8", "col-12", "mb-2", "d-flex", "flex-wrap", "justify-content-end"], ["nz-button", "", 1, "border", "px-3", "mx-3", 3, "nzType", "click"], ["nz-button", "", "nzType", "primary", "routerLink", "/team-management/add-team", 1, "mb-2", "mr-3"], [1, "d-flex", "justify-content-end", "mb-3"], [1, "totalCount"], [3, "nzData", "nzTotal", "nzFrontPagination", "nzShowSizeChanger", "nzPageIndex", "nzPageSize", "nzShowTotal", "nzLoading", "nzScroll", "nzQueryParams"], ["rowSelectionTable", ""], ["nzWidth", "4rem"], ["nzWidth", "8rem", 1, "text-left"], ["nzWidth", "8rem"], ["nzWidth", "8rem", "nzRight", ""], [4, "ngFor", "ngForOf"], ["botTotalCount", ""], [4, "ngIf"], ["nz-button", "", "nzType", "secondary", "nzSearch", "", 3, "click"], ["nz-icon", "", "nzType", "search"], ["nzWidth", "4rem", 4, "ngIf"], [3, "routerLink", "queryParams"], [1, "d-flex", "flex-column"], ["for", ""], ["nz-button", "", "nzType", "link", "nzSize", "small", "routerLink", "/team-management/edit-team", 1, "border", 3, "queryParams"], [1, "font-weight-semibold"], ["nzPlacement", "right", 3, "nzWidth", "nzTitle", "nzClosable", "nzVisible", "nzOnClose"], [1, "d-flex", "flex-wrap", "justify-content-start", "align-items-center"], [1, "d-flex", "align-items-start", "flex-column", "mb-3"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select Booth/Ward", 1, "selectFilter", "mb-2", "mr-3", 3, "ngModel", "ngModelChange", "nzFocus", "keyup"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select Ward", 1, "selectFilter", "mb-2", "mr-3", 3, "ngModel", "ngModelChange", "nzFocus", "keyup"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select Sector", 1, "selectFilter", "mb-2", "mr-3", 3, "ngModel", "ngModelChange", "nzFocus", "keyup"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select Assembly", 1, "selectFilter", "mb-2", "mr-3", 3, "ngModel", "ngModelChange", "nzFocus", "keyup"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select Street", 1, "selectFilter", "mb-2", "mr-3", 3, "ngModel", "ngModelChange", "nzFocus", "keyup"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select Lane", 1, "selectFilter", "mb-2", "mr-3", 3, "ngModel", "ngModelChange", "nzFocus", "keyup"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select Is Benificary", 1, "selectFilter", "mb-2", "mr-3", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel"], [1, "d-flex", "justify-content-center", "mt-5", "align-items-center"], ["nz-button", "", "nzType", "primary", 1, "mr-3", 3, "click"], ["nz-button", "", "nzType", "link", 3, "click"], ["filtersTemplate", ""]],
        template: function TeamManagementComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-input-group", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamManagementComponent_Template_input_ngModelChange_5_listener($event) {
              return ctx._currSearchValue = $event;
            })("keyup.enter", function TeamManagementComponent_Template_input_keyup_enter_5_listener() {
              return ctx.getTeamList();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TeamManagementComponent_ng_template_6_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamManagementComponent_Template_button_click_8_listener() {
              return ctx.resetFilter();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamManagementComponent_Template_button_click_11_listener() {
              return ctx.quickViewToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Filters");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "+ Add New Team");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-table", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzQueryParams", function TeamManagementComponent_Template_nz_table_nzQueryParams_18_listener($event) {
              return ctx.teamList[0] ? ctx.getTeamList($event) : null;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sr. No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Full Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "User Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Contact Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Created At");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Updated At");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Created By");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, TeamManagementComponent_ng_container_41_Template, 28, 24, "ng-container", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, TeamManagementComponent_ng_template_42_Template, 3, 1, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, TeamManagementComponent_section_44_Template, 47, 21, "section", 22);
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAddOnAfter", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._currSearchValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.teamList)("nzTotal", ctx.total_count)("nzFrontPagination", false)("nzShowSizeChanger", true)("nzPageIndex", ctx.page)("nzPageSize", ctx.globalPageSize)("nzShowTotal", _r4)("nzLoading", ctx.api_loader["list"])("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.teamList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quickViewVisible);
          }
        },
        directives: [ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__["NzWaveDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__["NzCardComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__["NzCellFixedDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_13__["NzDrawerComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__["NzSelectComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__["NzOptionComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFtLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamManagementComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-team-management',
            templateUrl: './team-management.component.html',
            styleUrls: ['./team-management.component.css']
          }]
        }], function () {
          return [{
            type: src_app_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
          }, {
            type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "VyqO":
    /*!*********************************************!*\
      !*** ./src/app/team/team-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: TeamRoutingModule */

    /***/
    function VyqO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeamRoutingModule", function () {
        return TeamRoutingModule;
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


      var _team_management_team_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./team-management/team-management.component */
      "OMoG");
      /* harmony import */


      var _ad_edit_team_ad_edit_team_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ad-edit-team/ad-edit-team.component */
      "q5P+");

      var routes = [{
        path: '',
        // canActivate: [NgxPermissionsGuard],
        component: _team_management_team_management_component__WEBPACK_IMPORTED_MODULE_2__["TeamManagementComponent"],
        data: {
          title: 'Team Management List',
          parent: 'Team Management',
          isButton: false,
          isHome: false,
          custom_url: '/team-management'
        }
      }, {
        path: '',
        data: {
          title: 'Team Management List',
          parent: 'Team Management',
          isButton: false,
          isHome: false,
          custom_url: '/team-management'
        },
        children: [{
          path: 'add-team',
          component: _ad_edit_team_ad_edit_team_component__WEBPACK_IMPORTED_MODULE_3__["AdEditTeamComponent"],
          data: {
            parent: 'Team Management',
            title: 'Add Team',
            isButton: false,
            isHome: false,
            custom_url: '/team-management/add-team'
          }
        }, {
          path: 'edit-team',
          // canActivate: [NgxPermissionsGuard],
          component: _ad_edit_team_ad_edit_team_component__WEBPACK_IMPORTED_MODULE_3__["AdEditTeamComponent"],
          data: {
            parent: 'Team Management',
            title: 'Edit Team',
            isButton: false,
            isHome: false,
            custom_url: '/team-management/edit-team'
          }
        }]
      }];

      var TeamRoutingModule = /*#__PURE__*/_createClass(function TeamRoutingModule() {
        _classCallCheck(this, TeamRoutingModule);
      });

      TeamRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TeamRoutingModule
      });
      TeamRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TeamRoutingModule_Factory(t) {
          return new (t || TeamRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TeamRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "o5iR":
    /*!*************************************!*\
      !*** ./src/app/team/team.module.ts ***!
      \*************************************/

    /*! exports provided: TeamModule */

    /***/
    function o5iR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeamModule", function () {
        return TeamModule;
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


      var _team_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./team-routing.module */
      "VyqO");
      /* harmony import */


      var _team_management_team_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./team-management/team-management.component */
      "OMoG");
      /* harmony import */


      var _ad_edit_team_ad_edit_team_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ad-edit-team/ad-edit-team.component */
      "q5P+");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/avatar */
      "ZE2D");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");
      /* harmony import */


      var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/date-picker */
      "0lU3");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/input */
      "PTRe");
      /* harmony import */


      var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/select */
      "zAKX");
      /* harmony import */


      var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-zorro-antd/table */
      "rMZv");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-zorro-antd/drawer */
      "F6ss");
      /* harmony import */


      var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-zorro-antd/modal */
      "dEAy");

      var TeamModule = /*#__PURE__*/_createClass(function TeamModule() {
        _classCallCheck(this, TeamModule);
      });

      TeamModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TeamModule
      });
      TeamModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TeamModule_Factory(t) {
          return new (t || TeamModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _team_routing_module__WEBPACK_IMPORTED_MODULE_2__["TeamRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTableModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__["NzCardModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__["NzSelectModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__["NzInputModule"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_9__["NzDatePickerModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconModule"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_6__["NzAvatarModule"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_16__["NzDrawerModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_17__["NzModalModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TeamModule, {
          declarations: [_team_management_team_management_component__WEBPACK_IMPORTED_MODULE_3__["TeamManagementComponent"], _ad_edit_team_ad_edit_team_component__WEBPACK_IMPORTED_MODULE_4__["AdEditTeamComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _team_routing_module__WEBPACK_IMPORTED_MODULE_2__["TeamRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTableModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__["NzCardModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__["NzSelectModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__["NzInputModule"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_9__["NzDatePickerModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconModule"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_6__["NzAvatarModule"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_16__["NzDrawerModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_17__["NzModalModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_team_management_team_management_component__WEBPACK_IMPORTED_MODULE_3__["TeamManagementComponent"], _ad_edit_team_ad_edit_team_component__WEBPACK_IMPORTED_MODULE_4__["AdEditTeamComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _team_routing_module__WEBPACK_IMPORTED_MODULE_2__["TeamRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTableModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__["NzCardModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__["NzSelectModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__["NzInputModule"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_9__["NzDatePickerModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconModule"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_6__["NzAvatarModule"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_16__["NzDrawerModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_17__["NzModalModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "q5P+":
    /*!*************************************************************!*\
      !*** ./src/app/team/ad-edit-team/ad-edit-team.component.ts ***!
      \*************************************************************/

    /*! exports provided: AdEditTeamComponent */

    /***/
    function q5P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdEditTeamComponent", function () {
        return AdEditTeamComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "PScX");
      /* harmony import */


      var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/service/http.service */
      "9NvV");
      /* harmony import */


      var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/modal */
      "dEAy");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/input */
      "PTRe");
      /* harmony import */


      var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/select */
      "zAKX");
      /* harmony import */


      var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/date-picker */
      "0lU3");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");

      function AdEditTeamComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Status: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdEditTeamComponent_div_2_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.isUpdateStatus = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Update Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (ctx_r0._currTeamData == null ? null : ctx_r0._currTeamData.status == null ? null : ctx_r0._currTeamData.status.name) == "APPROVED" ? "text-success" : (ctx_r0._currTeamData == null ? null : ctx_r0._currTeamData.status) == "TO-DO" ? "text-danger" : "text-info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0._currTeamData == null ? null : ctx_r0._currTeamData.status == null ? null : ctx_r0._currTeamData.status.name, " ");
        }
      }

      function AdEditTeamComponent_nz_option_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 29);
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r5.id)("nzLabel", item_r5 == null ? null : item_r5.name);
        }
      }

      function AdEditTeamComponent_ng_container_78_nz_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 29);
        }

        if (rf & 2) {
          var item_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r7.id)("nzLabel", item_r7 == null ? null : item_r7.name);
        }
      }

      function AdEditTeamComponent_ng_container_78_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Select Status: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-select", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdEditTeamComponent_ng_container_78_Template_nz_select_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8._curStatusId = $event;
          })("nzFocus", function AdEditTeamComponent_ng_container_78_Template_nz_select_nzFocus_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.searchStaticDataGlobalFunction("UserStatus");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AdEditTeamComponent_ng_container_78_nz_option_5_Template, 1, 2, "nz-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Remarks: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "textarea", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdEditTeamComponent_ng_container_78_Template_textarea_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.remarks = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2._curStatusId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.statusList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.remarks);
        }
      }

      var AdEditTeamComponent = /*#__PURE__*/function () {
        function AdEditTeamComponent(fb, router, acRoute, message, http, modal) {
          _classCallCheck(this, AdEditTeamComponent);

          this.fb = fb;
          this.router = router;
          this.acRoute = acRoute;
          this.message = message;
          this.http = http;
          this.modal = modal;
          this.isEdit = false;
          this.api_loader = {
            'list': false,
            'button': false
          };
          this.teamDetails = [];
          this.statusList = [];
          this.remarks = "";
          this.isUpdateStatus = false;
          this.boothList = [];
          this.userList = [];
          this.designationList = [];
        }

        _createClass(AdEditTeamComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this._currLanguage = localStorage.getItem("appLanguage") || 'en';
            this.acRoute.queryParams.subscribe(function (params) {
              if (params['id']) {
                _this3._currTeamId = params.id;
                _this3.isEdit = true;

                if (_this3._currTeamId) {
                  _this3.getTeamDetails();
                }
              }

              _this3.createTeam();
            });
          }
        }, {
          key: "getTeamDetails",
          value: function getTeamDetails() {
            var _this4 = this;

            this.api_loader['list'] = true;
            var data = {
              id: this._currTeamId,
              'end_point': 'FETCH_VOTER_LIST_API_URL'
            };
            this.http.getTeamList(data).subscribe(function (res) {
              var _a, _b, _c;

              if (res.success) {
                _this4.searchStaticDataGlobalFunction('UserStatus');

                _this4._currTeamData = res.data[0];
                console.log(_this4._curStatusId = (_b = (_a = res.data[0]) === null || _a === void 0 ? void 0 : _a.status) === null || _b === void 0 ? void 0 : _b.id, (_c = res.data) === null || _c === void 0 ? void 0 : _c.status);

                _this4.getUserType();

                _this4.createTeam(_this4._currTeamData);
              }
            });
          }
        }, {
          key: "createTeam",
          value: function createTeam(data) {
            var _a;

            this.teamForm = this.fb.group({
              first_name: [data ? this._currLanguage == 'en' ? data === null || data === void 0 ? void 0 : data.first_name : data === null || data === void 0 ? void 0 : data.first_name : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              last_name: [data ? this._currLanguage == 'en' ? data === null || data === void 0 ? void 0 : data.last_name : data === null || data === void 0 ? void 0 : data.last_name : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              user_type: [data ? (_a = data === null || data === void 0 ? void 0 : data.user_type) === null || _a === void 0 ? void 0 : _a.id : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              designation: [data ? this._currLanguage == 'en' ? data === null || data === void 0 ? void 0 : data.designation : data === null || data === void 0 ? void 0 : data.designation : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              date_of_birth: [data ? data === null || data === void 0 ? void 0 : data.date_of_birth : ''],
              mobile: [data ? this._currLanguage == 'en' ? data === null || data === void 0 ? void 0 : data.mobile : data === null || data === void 0 ? void 0 : data.mobile : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              email: [data ? this._currLanguage == 'en' ? data === null || data === void 0 ? void 0 : data.email : data === null || data === void 0 ? void 0 : data.email : ''],
              whatsapp_number: [data ? data === null || data === void 0 ? void 0 : data.whatsapp_number : ''],
              landline_number: [(data === null || data === void 0 ? void 0 : data.landline_number) ? data === null || data === void 0 ? void 0 : data.landline_number : ''],
              studies: [(data === null || data === void 0 ? void 0 : data.studies) ? data === null || data === void 0 ? void 0 : data.studies : ''],
              EPIC_NO: [(data === null || data === void 0 ? void 0 : data.speed) ? data === null || data === void 0 ? void 0 : data.speed : ''],
              residential: [(data === null || data === void 0 ? void 0 : data.residential) ? data === null || data === void 0 ? void 0 : data.residential : '']
            });
          }
        }, {
          key: "changeTaskStatus",
          value: function changeTaskStatus(event) {
            var _this5 = this;

            if (this.remarks.length < 3) {
              this.message.warning('Please enter remarks');
              return;
            } // this.quickViewVisible = !this.quickViewVisible;


            this.modal.confirm({
              nzTitle: 'Confirm',
              nzContent: 'Before changing status',
              nzOkText: 'Confirm',
              nzOkType: 'primary',
              nzOkDanger: true,
              nzOnOk: function nzOnOk() {
                return _this5.onCLickStatusChange(event);
              },
              nzCancelText: 'No',
              nzOnCancel: function nzOnCancel() {
                return _this5.modal.closeAll();
              }
            });
          }
        }, {
          key: "onCLickStatusChange",
          value: function onCLickStatusChange(status) {
            var _this6 = this;

            var data = new FormData();
            data.append('status', this._curStatusId), data.append('remarks', this.remarks), data.append('internal_user', this._currTeamId);
            this.http.changeTeamStatus(this._currTeamId, data).subscribe(function (res) {
              if (res.success) {
                _this6.message.success(res.message);

                _this6.isUpdateStatus = false;
                ;
                _this6.remarks = '';
                _this6._curStatusId = '';

                _this6.getTeamDetails();
              } else {
                _this6.message.error(res.message);
              }
            }, function (error) {
              _this6.message.error(error);

              _this6.remarks = '';
              _this6._curStatusId = '';
            });
          }
        }, {
          key: "searchStaticDataGlobalFunction",
          value: function searchStaticDataGlobalFunction(event) {
            var _this7 = this;

            if (event) {
              clearTimeout(this.debounce);
              this.debounce = setTimeout(function () {
                var data = {
                  model_name: event
                };

                _this7.http.getMasterData(data).subscribe(function (res) {
                  if (res.success) {
                    _this7.statusList = res.data;
                  }
                });
              }, 500);
            } else {
              var data = {
                model_name: event
              };
              this.http.getMasterData(data).subscribe(function (res) {
                if (res.success) {
                  _this7.statusList = res.data;
                }
              });
            }
          }
        }, {
          key: "getUserType",
          value: function getUserType() {
            var _this8 = this;

            var data = {
              model_name: 'UserType'
            };
            this.http.getMasterData(data).subscribe(function (res) {
              if (res.success) {
                _this8.userList = res.data;
              }
            });
          }
        }, {
          key: "getdesignationList",
          value: function getdesignationList() {
            var _this9 = this;

            var data = {
              model_name: 'Designation'
            };
            this.http.getMasterData(data).subscribe(function (res) {
              if (res.success) {
                _this9.designationList = res.data;
              }
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this10 = this;

            var data = new FormData();
            data.append('first_name', this.teamForm.get('first_name').value);
            data.append('last_name', this.teamForm.get('last_name').value);
            data.append('user_type', this.teamForm.get('user_type').value);
            data.append('designation', this.teamForm.get('designation').value);
            data.append('mobile', this.teamForm.get('mobile').value);
            data.append('email', this.teamForm.get('email').value);
            data.append('whatsapp_number', this.teamForm.get('whatsapp_number').value);
            data.append('landline_number', this.teamForm.get('landline_number').value);
            data.append('studies', this.teamForm.get('studies').value);
            data.append('date_of_birth', this.teamForm.get('date_of_birth').value ? moment__WEBPACK_IMPORTED_MODULE_2__(this.teamForm.get('date_of_birth').value).format("YYYY-MM-DD") : ""); // data.append('speed', this.teamForm.get('speed').value)

            data.append('residential', this.teamForm.get('residential').value);
            this.api_loader['button'] = true;
            var url = this.isEdit ? this.http.editTeamMember(this._currTeamId, data) : this.http.addTeamMember(data);
            url.subscribe(function (res) {
              if (res.success) {
                if (res.success) {
                  _this10.message.success(res.message);

                  _this10.api_loader['button'] = false;

                  _this10.router.navigateByUrl('/team-management');
                } else {
                  _this10.message.error(res.message);

                  _this10.api_loader['button'] = false;
                }
              }
            }, function (errr) {
              _this10.api_loader['button'] = false;
            });
          }
        }]);

        return AdEditTeamComponent;
      }();

      AdEditTeamComponent.ɵfac = function AdEditTeamComponent_Factory(t) {
        return new (t || AdEditTeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__["NzModalService"]));
      };

      AdEditTeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdEditTeamComponent,
        selectors: [["app-ad-edit-team"]],
        decls: 79,
        vars: 84,
        consts: [[3, "nzLoading"], ["class", "d-flex justify-content-end mb-3 align-items-center", 4, "ngIf"], ["nz-form", "", 3, "formGroup"], [1, "row"], [1, "col-lg-6", "col-12"], ["nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs", "nzErrorTip"], ["type", "text", "nz-input", "", "formControlName", "first_name", 3, "placeholder"], ["type", "text", "nz-input", "", "formControlName", "last_name", 3, "placeholder"], ["type", "text", "nz-input", "", "formControlName", "mobile", 3, "placeholder"], [1, "text-left", 3, "nzSm", "nzXs"], ["type", "text", "nz-input", "", "formControlName", "email", 3, "placeholder"], ["nzShowSearch", "", "formControlName", "user_type", "nzAllowClear", "", 1, "selectFilter", "mb-2", "mr-3", 3, "nzPlaceHolder", "nzFocus"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["type", "text", "nz-input", "", "formControlName", "EPIC_NO", 3, "readOnly", "placeholder"], ["formControlName", "date_of_birth"], ["type", "text", "nz-input", "", "formControlName", "designation", 3, "placeholder"], ["type", "text", "nz-input", "", "formControlName", "landline_number", 3, "placeholder"], ["type", "text", "nz-input", "", "formControlName", "whatsapp_number", 3, "placeholder"], ["type", "text", "nz-input", "", "formControlName", "studies", 3, "placeholder"], [1, "d-flex", "justify-content-center"], ["nz-button", "", "nzType", "primary", 1, "px-5", 3, "disabled", "nzLoading", "click"], ["nz-button", "", "nzType", "link", "routerLink", "/team-management", 1, "ml-3", "px-5", "border"], ["nzTitle", "Update Status", 3, "nzVisible", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], [1, "d-flex", "justify-content-end", "mb-3", "align-items-center"], [1, "mb-0"], [1, "font-weight-normal", "mx-2", 3, "ngClass"], ["nz-button", "", "nzSize", "small", "nzType", "primary", 3, "click"], [3, "nzValue", "nzLabel"], [1, "d-flex", "justify-content-center", "align-items-center", "flex-column", "mb-5"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select Status", 1, "selectFilter", "mb-2", "mx-3", 3, "ngModel", "ngModelChange", "nzFocus"], [1, "d-flex"], ["rows", "4", "nz-input", "", "placeholder", "Enter Remarks", 1, "mx-3", 3, "ngModel", "ngModelChange"]],
        template: function AdEditTeamComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdEditTeamComponent_div_2_Template, 7, 2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-form-label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-form-control", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nz-form-label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nz-form-control", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nz-form-label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nz-form-control", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nz-form-label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nz-form-control", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nz-form-label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nz-form-control", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "nz-select", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFocus", function AdEditTeamComponent_Template_nz_select_nzFocus_34_listener() {
              return ctx.getUserType();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AdEditTeamComponent_nz_option_35_Template, 1, 2, "nz-option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "nz-form-label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nz-form-control", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "nz-form-label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "nz-form-control", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "nz-date-picker", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "nz-form-label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "nz-form-control", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "nz-form-label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "nz-form-control", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "nz-form-label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "nz-form-control", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "nz-form-label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "nz-form-control", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdEditTeamComponent_Template_button_click_73_listener() {
              return ctx.submitForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "nz-modal", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function AdEditTeamComponent_Template_nz_modal_nzVisibleChange_77_listener($event) {
              return ctx.isUpdateStatus = $event;
            })("nzOnCancel", function AdEditTeamComponent_Template_nz_modal_nzOnCancel_77_listener() {
              return ctx.isUpdateStatus = false;
            })("nzOnOk", function AdEditTeamComponent_Template_nz_modal_nzOnOk_77_listener($event) {
              return ctx.changeTaskStatus($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, AdEditTeamComponent_ng_container_78_Template, 9, 3, "ng-container", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.api_loader["card"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEdit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.teamForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "First Name" : "\u092A\u0939\u0932\u093E \u0928\u093E\u092E", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please enter first name" : "\u0915\u0943\u092A\u092F\u093E \u092A\u0939\u0932\u093E \u0928\u093E\u092E \u091C\u094B\u0921\u093C\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx._currLanguage == "en" ? "Enter First Name" : "\u0915\u0943\u092A\u092F\u093E \u092A\u0939\u0932\u093E \u0928\u093E\u092E \u091C\u094B\u0921\u093C\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Last Name" : "\u0905\u0902\u0924\u093F\u092E \u0928\u093E\u092E", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please enter last name" : "\u0915\u0943\u092A\u092F\u093E \u0905\u0902\u0924\u093F\u092E \u0928\u093E\u092E \u091C\u094B\u0921\u093C\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx._currLanguage == "en" ? "Enter Last Name" : "\u0915\u0943\u092A\u092F\u093E \u0905\u0902\u0924\u093F\u092E \u0928\u093E\u092E \u091C\u094B\u0921\u093C\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Mobile" : "\u092E\u094B\u092C\u093E\u0907\u0932", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please enter mobile" : "\u0915\u0943\u092A\u092F\u093E \u092E\u094B\u092C\u093E\u0907\u0932 \u0928\u0902\u092C\u0930 \u091C\u093E\u0902\u091A\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx._currLanguage == "en" ? "Enter Mobile" : "\u0915\u0943\u092A\u092F\u093E \u092E\u094B\u092C\u093E\u0907\u0932 \u0928\u0902\u092C\u0930 \u091C\u093E\u0902\u091A\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Email" : "\u0908\u092E\u0947\u0932", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please enter email" : "\u0915\u0943\u092A\u092F\u093E \u0908\u092E\u0947\u0932 \u091C\u093E\u0902\u091A\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx._currLanguage == "en" ? "Enter email" : "\u0915\u0943\u092A\u092F\u093E \u0908\u092E\u0947\u0932 \u091C\u093E\u0902\u091A\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Team Type" : "\u091F\u0940\u092E \u0915\u093E \u092A\u094D\u0930\u0915\u093E\u0930", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please select Team type" : "\u0915\u0943\u092A\u092F\u093E \u091F\u0940\u092E \u0915\u093E \u092A\u094D\u0930\u0915\u093E\u0930 \u091A\u0941\u0928\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPlaceHolder", ctx._currLanguage == "en" ? "Select Team Type" : "\u0915\u0943\u092A\u092F\u093E \u091F\u0940\u092E \u0915\u093E \u092A\u094D\u0930\u0915\u093E\u0930 \u091A\u0941\u0928\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? " Epic No" : "Epic No", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please enter your Epic No" : "Please enter your Epic No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", ctx.isEdit ? true : false)("placeholder", ctx._currLanguage == "en" ? "Epic No" : " Epic No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Date Of Birth" : "\u091C\u0928\u094D\u092E \u0915\u0940 \u0924\u093E\u0930\u0940\u0916", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please select Date Of Birt" : "\u0915\u0943\u092A\u092F\u093E \u091C\u0928\u094D\u092E \u0915\u0940 \u0924\u093E\u0930\u0940\u0916 \u091A\u0941\u0928\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Designation" : "\u092A\u0926", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please enter Designation" : "\u0915\u0943\u092A\u092F\u093E \u092A\u0926 \u0915\u093E \u092A\u094D\u0930\u0915\u093E\u0930 \u091A\u0941\u0928\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx._currLanguage == "en" ? "Enter Designation" : "\u0915\u0943\u092A\u092F\u093E \u092A\u0926 \u0915\u093E \u092A\u094D\u0930\u0915\u093E\u0930 \u091A\u0941\u0928\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Landline Number" : "\u0932\u0948\u0902\u0921\u0932\u093E\u0907\u0928 \u0928\u0902\u092C\u0930", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please enter Landline Number" : "\u0915\u0943\u092A\u092F\u093E \u0932\u0948\u0902\u0921\u0932\u093E\u0907\u0928 \u0928\u0902\u092C\u0930 \u091C\u093E\u0902\u091A\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx._currLanguage == "en" ? "Enter Landline Number" : "\u0915\u0943\u092A\u092F\u093E \u0932\u0948\u0902\u0921\u0932\u093E\u0907\u0928 \u0928\u0902\u092C\u0930 \u091C\u093E\u0902\u091A\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Whatsapp Number" : "\u0932\u0948\u0902\u0921\u0932\u093E\u0907\u0928 \u0928\u0902\u092C\u0930", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please enter Whatsapp Number" : "\u0915\u0943\u092A\u092F\u093E \u0932\u0948\u0902\u0921\u0932\u093E\u0907\u0928 \u0928\u0902\u092C\u0930 \u091C\u093E\u0902\u091A\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx._currLanguage == "en" ? "Enter Whatsapp Number" : "\u0915\u0943\u092A\u092F\u093E \u0932\u0948\u0902\u0921\u0932\u093E\u0907\u0928 \u0928\u0902\u092C\u0930 \u091C\u093E\u0902\u091A\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Studies" : "\u0905\u0927\u094D\u092F\u092F\u0928 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please enter studies" : "\u0915\u0943\u092A\u092F\u093E \u0905\u0927\u094D\u092F\u092F\u0928 \u091C\u093E\u0902\u091A\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx._currLanguage == "en" ? "Enter studies" : "\u0915\u0943\u092A\u092F\u093E \u0905\u0927\u094D\u092F\u092F\u0928 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902 \u091C\u093E\u0902\u091A\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.teamForm.invalid ? true : false)("nzLoading", ctx.api_loader["button"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isUpdateStatus);
          }
        },
        directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__["NzCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormControlComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_13__["NzDatePickerComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__["NzModalComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__["NzModalContentDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzOptionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZC1lZGl0LXRlYW0uY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdEditTeamComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ad-edit-team',
            templateUrl: './ad-edit-team.component.html',
            styleUrls: ['./ad-edit-team.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]
          }, {
            type: src_app_service_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
          }, {
            type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__["NzModalService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=team-team-module-es5.js.map