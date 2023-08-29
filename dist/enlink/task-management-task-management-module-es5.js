(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["task-management-task-management-module"], {
    /***/
    "/zXh":
    /*!***********************************************************!*\
      !*** ./src/app/task-management/task-management.module.ts ***!
      \***********************************************************/

    /*! exports provided: TaskManagementModule */

    /***/
    function zXh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskManagementModule", function () {
        return TaskManagementModule;
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


      var _task_management_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./task-management-routing.module */
      "rru9");
      /* harmony import */


      var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./task-list/task-list.component */
      "Y/ZK");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/table */
      "rMZv");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");
      /* harmony import */


      var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/select */
      "zAKX");
      /* harmony import */


      var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/input */
      "PTRe");
      /* harmony import */


      var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/date-picker */
      "0lU3");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-zorro-antd/avatar */
      "ZE2D");
      /* harmony import */


      var _add_edit_task_add_edit_task_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./add-edit-task/add-edit-task.component */
      "Blnk");
      /* harmony import */


      var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-zorro-antd/dropdown */
      "Nqz0");
      /* harmony import */


      var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-zorro-antd/drawer */
      "F6ss");
      /* harmony import */


      var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng-zorro-antd/upload */
      "D9mS");
      /* harmony import */


      var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ng-zorro-antd/modal */
      "dEAy");

      var TaskManagementModule = /*#__PURE__*/_createClass(function TaskManagementModule() {
        _classCallCheck(this, TaskManagementModule);
      });

      TaskManagementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TaskManagementModule
      });
      TaskManagementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TaskManagementModule_Factory(t) {
          return new (t || TaskManagementModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _task_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["TaskManagementRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__["NzFormModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__["NzTableModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__["NzCardModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__["NzInputModule"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_12__["NzDatePickerModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_14__["NzAvatarModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_16__["NzDropDownModule"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_17__["NzDrawerModule"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_18__["NzUploadModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__["NzModalModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TaskManagementModule, {
          declarations: [_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_3__["TaskListComponent"], _add_edit_task_add_edit_task_component__WEBPACK_IMPORTED_MODULE_15__["AddEditTaskComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _task_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["TaskManagementRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__["NzFormModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__["NzTableModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__["NzCardModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__["NzInputModule"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_12__["NzDatePickerModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_14__["NzAvatarModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_16__["NzDropDownModule"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_17__["NzDrawerModule"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_18__["NzUploadModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__["NzModalModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskManagementModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_3__["TaskListComponent"], _add_edit_task_add_edit_task_component__WEBPACK_IMPORTED_MODULE_15__["AddEditTaskComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _task_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["TaskManagementRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__["NzFormModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__["NzTableModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__["NzCardModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__["NzInputModule"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_12__["NzDatePickerModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_14__["NzAvatarModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_16__["NzDropDownModule"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_17__["NzDrawerModule"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_18__["NzUploadModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__["NzModalModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Blnk":
    /*!**************************************************************************!*\
      !*** ./src/app/task-management/add-edit-task/add-edit-task.component.ts ***!
      \**************************************************************************/

    /*! exports provided: AddEditTaskComponent */

    /***/
    function Blnk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddEditTaskComponent", function () {
        return AddEditTaskComponent;
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


      var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/select */
      "zAKX");
      /* harmony import */


      var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/input */
      "PTRe");
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
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");

      function AddEditTaskComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Status: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-select", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditTaskComponent_div_2_Template_nz_select_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.changeTaskStatus($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nz-option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nz-option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (ctx_r0.taskDetails == null ? null : ctx_r0.taskDetails.status) == "DONE" ? "text-success" : (ctx_r0.taskDetails == null ? null : ctx_r0.taskDetails.status) == "TO-DO" ? "text-danger" : "text-info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.taskDetails == null ? null : ctx_r0.taskDetails.status, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.taskDetails == null ? null : ctx_r0.taskDetails.status)("nzPlaceHolder", ctx_r0._currLanguage == "en" ? "Change Status" : "\u0905\u0935\u0938\u094D\u0925\u093E \u092C\u0926\u0932\u094B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", "TO-DO")("nzLabel", "TO-DO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", "IN-PROGRESS")("nzLabel", "IN-PROGRESS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", "DONE")("nzLabel", "DONE");
        }
      }

      function AddEditTaskComponent_nz_option_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading Data... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddEditTaskComponent_nz_option_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 29);
        }

        if (rf & 2) {
          var item_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r19.id)("nzLabel", item_r19 == null ? null : item_r19.name == null ? null : item_r19.name.en);
        }
      }

      function AddEditTaskComponent_nz_option_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading Data... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddEditTaskComponent_nz_option_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 32);
        }

        if (rf & 2) {
          var item_r20 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", ctx_r4._currLanguage == "en" ? (item_r20 == null ? null : item_r20.first_name) ? (item_r20 == null ? null : item_r20.first_name) + ((item_r20 == null ? null : item_r20.last_name) ? " " + (item_r20 == null ? null : item_r20.last_name) : "") : "" : ctx_r4.first_name)("nzValue", item_r20.id);
        }
      }

      function AddEditTaskComponent_nz_option_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading Data... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddEditTaskComponent_nz_option_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 29);
        }

        if (rf & 2) {
          var item_r21 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r21.id)("nzLabel", ctx_r6._currLanguage == "en" ? (item_r21 == null ? null : item_r21.first_name_en) + (item_r21 == null ? null : item_r21.last_name_en) + ((item_r21 == null ? null : item_r21.epic_no) ? " " + (item_r21 == null ? null : item_r21.epic_no) : "") : (item_r21 == null ? null : item_r21.last_name_hi) + (item_r21 == null ? null : item_r21.last_name_hi) + ((item_r21 == null ? null : item_r21.epic_no) ? " " + (item_r21 == null ? null : item_r21.epic_no) : ""));
        }
      }

      function AddEditTaskComponent_nz_option_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading Data... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddEditTaskComponent_nz_option_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 29);
        }

        if (rf & 2) {
          var item_r22 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r22.id)("nzLabel", ctx_r8._currLanguage == "en" ? item_r22 == null ? null : item_r22.name == null ? null : item_r22.name.en : item_r22 == null ? null : item_r22.name == null ? null : item_r22.name.hi);
        }
      }

      function AddEditTaskComponent_nz_option_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading Data... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddEditTaskComponent_nz_option_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 29);
        }

        if (rf & 2) {
          var item_r23 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r23.id)("nzLabel", ctx_r10._currLanguage == "en" ? item_r23 == null ? null : item_r23.name == null ? null : item_r23.name.en : item_r23 == null ? null : item_r23.name == null ? null : item_r23.name.hi);
        }
      }

      function AddEditTaskComponent_nz_option_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading Data... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddEditTaskComponent_nz_option_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 29);
        }

        if (rf & 2) {
          var item_r24 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r24.id)("nzLabel", ctx_r12._currLanguage == "en" ? item_r24 == null ? null : item_r24.name == null ? null : item_r24.name.en : item_r24 == null ? null : item_r24.name == null ? null : item_r24.name.hi);
        }
      }

      function AddEditTaskComponent_nz_option_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading Data... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddEditTaskComponent_nz_option_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 29);
        }

        if (rf & 2) {
          var item_r25 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r25.id)("nzLabel", ctx_r14._currLanguage == "en" ? item_r25 == null ? null : item_r25.name == null ? null : item_r25.name.en : item_r25 == null ? null : item_r25.name == null ? null : item_r25.name.hi);
        }
      }

      function AddEditTaskComponent_nz_option_91_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading Data... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddEditTaskComponent_nz_option_92_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 29);
        }

        if (rf & 2) {
          var item_r26 = ctx.$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r26.id)("nzLabel", ctx_r16._currLanguage == "en" ? item_r26 == null ? null : item_r26.name == null ? null : item_r26.name.en : item_r26 == null ? null : item_r26.name == null ? null : item_r26.name.hi);
        }
      }

      var AddEditTaskComponent = /*#__PURE__*/function () {
        function AddEditTaskComponent(fb, router, acRoute, message, http, modal) {
          _classCallCheck(this, AddEditTaskComponent);

          this.fb = fb;
          this.router = router;
          this.acRoute = acRoute;
          this.message = message;
          this.http = http;
          this.modal = modal;
          this.isEdit = false;
          this.api_loading = {
            card: false,
            button: false
          };
          this.isSelectLoader = {
            'task': false,
            'Booth': false,
            'Ward': false,
            'Sector': false,
            'Street': false,
            'Lane': false,
            'Assembly': false,
            'Places': false,
            'internal_user': false,
            'voter': false
          };
          this.taskList = [];
          this.internal_user_list = [];
          this.voters = [];
          this.boothList = [];
          this.wardList = [];
          this.sectorList = [];
          this.assemblyList = [];
          this.streetList = [];
          this.laneList = [];
          this.placeList = [];
        }

        _createClass(AddEditTaskComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this._currLanguage = localStorage.getItem("appLanguage") || 'en';
            this.acRoute.queryParams.subscribe(function (params) {
              if (params['id']) {
                _this._currTaskId = params.id;
                _this.isEdit = true;

                if (_this._currTaskId) {
                  _this.getInternalUser();

                  _this.getVoters();

                  _this.searchMasterData('Sector');

                  _this.searchMasterData('Booth');

                  _this.searchMasterData('Ward');

                  _this.searchMasterData('Street');

                  _this.searchMasterData('Places');

                  _this.gettaskLists();

                  _this.getTaskDetails();
                }
              }

              _this.createTask();
            }); // debugger;
          }
        }, {
          key: "getTaskDetails",
          value: function getTaskDetails() {
            var _this2 = this;

            var data = {
              id: this._currTaskId,
              'end_point': 'FETCH_VOTER_LIST_API_URL'
            };
            this.api_loading['card'] = true;
            this.http.getTaskList(data).subscribe(function (res) {
              var _a, _b, _c, _d, _e;

              if (res.success) {
                _this2.taskDetails = res.data[0];

                if (((_a = _this2.taskDetails['sector']) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                  var sector = [];

                  _this2.taskDetails['sector'].forEach(function (element) {
                    sector.push(element.id);
                  });

                  _this2.taskDetails['sector'] = sector;
                }

                if (((_b = _this2.taskDetails['street']) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                  var street = [];

                  _this2.taskDetails['street'].forEach(function (element) {
                    street.push(element.id);
                  });

                  _this2.taskDetails['street'] = street;
                }

                if (((_c = _this2.taskDetails['places']) === null || _c === void 0 ? void 0 : _c.length) > 0) {
                  var places = [];

                  _this2.taskDetails['places'].forEach(function (element) {
                    places.push(element.id);
                  });

                  _this2.taskDetails['places'] = places;
                }

                if (((_d = _this2.taskDetails['ward']) === null || _d === void 0 ? void 0 : _d.length) > 0) {
                  var ward = [];

                  _this2.taskDetails['ward'].forEach(function (element) {
                    ward.push(element.id);
                  });

                  _this2.taskDetails['ward'] = ward;
                }

                if (((_e = _this2.taskDetails['booth']) === null || _e === void 0 ? void 0 : _e.length) > 0) {
                  var booth = [];

                  _this2.taskDetails['booth'].forEach(function (element) {
                    booth.push(element.id);
                  });

                  _this2.taskDetails['booth'] = booth;
                }

                _this2.createTask(_this2.taskDetails);

                _this2.api_loading['card'] = false;
              } else {
                _this2.api_loading['card'] = false;
              }
            }, function (error) {
              _this2.api_loading['card'] = false;
            });
          }
        }, {
          key: "createTask",
          value: function createTask(data) {
            var _this3 = this;

            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;

            this.taskForm = this.fb.group({
              task_type: [data ? (_a = data === null || data === void 0 ? void 0 : data.task_type) === null || _a === void 0 ? void 0 : _a.id : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              name: [data ? this._currLanguage == 'en' ? (_b = data === null || data === void 0 ? void 0 : data.name) === null || _b === void 0 ? void 0 : _b.en : (_c = data === null || data === void 0 ? void 0 : data.name) === null || _c === void 0 ? void 0 : _c.hi : ''],
              discription: [data ? this._currLanguage == 'en' ? (_d = data === null || data === void 0 ? void 0 : data.discription) === null || _d === void 0 ? void 0 : _d.en : (_e = data === null || data === void 0 ? void 0 : data.discription) === null || _e === void 0 ? void 0 : _e.hi : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              internal_user: [data ? [(_f = data === null || data === void 0 ? void 0 : data.internal_user) === null || _f === void 0 ? void 0 : _f.id] : [], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              voters: [(data === null || data === void 0 ? void 0 : data.voters) ? data === null || data === void 0 ? void 0 : data.voters : []],
              booth: [data ? data === null || data === void 0 ? void 0 : data.booth : [], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              ward: [(data === null || data === void 0 ? void 0 : data.ward) ? data === null || data === void 0 ? void 0 : data.ward : []],
              street: [(data === null || data === void 0 ? void 0 : data.street) ? data === null || data === void 0 ? void 0 : data.street : []],
              places: [(data === null || data === void 0 ? void 0 : data.place) ? (_g = data === null || data === void 0 ? void 0 : data.place) === null || _g === void 0 ? void 0 : _g.id : []],
              sector: [(data === null || data === void 0 ? void 0 : data.sector) ? data === null || data === void 0 ? void 0 : data.sector : []],
              task_date: [(data === null || data === void 0 ? void 0 : data.task_date) ? data === null || data === void 0 ? void 0 : data.task_date : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              task_end_date: [(data === null || data === void 0 ? void 0 : data.task_end_date) ? data === null || data === void 0 ? void 0 : data.task_end_date : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });

            if (((_j = (_h = this.taskDetails) === null || _h === void 0 ? void 0 : _h.voters) === null || _j === void 0 ? void 0 : _j.length) > 0) {
              (_k = this.taskDetails) === null || _k === void 0 ? void 0 : _k.sector.forEach(function (element) {
                _this3.taskForm.get('sector').value.push(element.id);
              });
            } else {
              this.taskForm.controls['sector'].setValue([]);
            }
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this4 = this;

            var _a;

            if (this.taskForm.invalid) {
              this.message.warning("Please check the required fields");
              return;
            }

            this.api_loading['button'] = true;
            var form_data = new FormData();
            form_data.append('model_name', this.taskForm.get('task_type').value);
            form_data.append('name', this.taskForm.get('name').value);
            form_data.append('discription', this.taskForm.get('discription').value);
            form_data.append('internal_user', JSON.stringify(this.taskForm.get('internal_user').value));
            form_data.append('task_date', this.taskForm.get('task_date').value ? moment__WEBPACK_IMPORTED_MODULE_2__(this.taskForm.get('task_date').value).format("YYYY-MM-DD") : '');
            form_data.append('task_end_date', this.taskForm.get('task_end_date').value ? moment__WEBPACK_IMPORTED_MODULE_2__(this.taskForm.get('task_end_date').value).format("YYYY-MM-DD") : '');

            if (this.taskForm.get('voters').value[0]) {
              form_data.append('voters', JSON.stringify(this.taskForm.get('voters').value));
            }

            if (this.taskForm.get('booth').value[0]) {
              form_data.append('booth', JSON.stringify(this.taskForm.get('booth').value));
            }

            if (this.taskForm.get('ward').value[0]) {
              form_data.append('ward', JSON.stringify(this.taskForm.get('ward').value));
            }

            if (this.taskForm.get('street').value[0]) {
              form_data.append('street', JSON.stringify(this.taskForm.get('street').value));
            }

            if (this.taskForm.get('sector').value[0]) {
              form_data.append('sector', JSON.stringify(this.taskForm.get('sector').value));
            }

            if (((_a = this.taskForm.get('places').value) === null || _a === void 0 ? void 0 : _a.length) > 0) {
              form_data.append('place', this.taskForm.get('places').value ? this.taskForm.get('places').value : '');
            }

            var url = this.isEdit == false ? this.http.addTasks(form_data) : this.http.editTasks(this._currTaskId, form_data);
            url.subscribe(function (res) {
              if (res.success) {
                _this4.message.success(res.message);

                _this4.router.navigateByUrl('/task-management');

                _this4.api_loading['button'] = false;
              } else {
                _this4.api_loading['button'] = false;
              }
            }, function (errpr) {
              _this4.api_loading['button'] = false;
            });
          }
        }, {
          key: "gettaskLists",
          value: function gettaskLists(key) {
            var _this5 = this;

            this.isSelectLoader['task'] = true;

            if (key) {
              clearTimeout(this.task_debounce);
              this.task_debounce = setTimeout(function () {
                var data = {
                  model_name: 'Tasks'
                };

                _this5.http.getMasterData(data).subscribe(function (res) {
                  if (res.success) {
                    _this5.taskList = res.data;
                    _this5.isSelectLoader['task'] = false;
                  }
                });
              }, 500);
            } else {
              var data = {
                model_name: 'Tasks'
              };
              this.http.getMasterData(data).subscribe(function (res) {
                if (res.success) {
                  _this5.taskList = res.data;
                  _this5.isSelectLoader['task'] = false;
                }
              });
            }
          }
        }, {
          key: "getInternalUser",
          value: function getInternalUser(key) {
            var _this6 = this;

            this.isSelectLoader['internal_user'] = true;

            if (key) {
              clearTimeout(this.in_user_debounce);
              this.in_user_debounce = setTimeout(function () {
                var data = {
                  'end_point': 'FETCH_VOTER_LIST_API_URL'
                };

                _this6.http.getTeamList(data).subscribe(function (res) {
                  if (res.success) {
                    _this6.internal_user_list = res.data;
                    _this6.isSelectLoader['internal_user'] = false;
                  }
                });
              }, 500);
            } else {
              var data = {
                'end_point': 'FETCH_VOTER_LIST_API_URL'
              };
              this.http.getTeamList(data).subscribe(function (res) {
                if (res.success) {
                  _this6.internal_user_list = res.data;
                  _this6.isSelectLoader['internal_user'] = false;
                }
              });
            }
          }
        }, {
          key: "getVoters",
          value: function getVoters(key) {
            var _this7 = this;

            this.isSelectLoader['voter'] = true;

            if (key) {
              clearTimeout(this.voter_debounce);
              this.voter_debounce = setTimeout(function () {
                var data = {
                  'end_point': 'FETCH_VOTER_LIST_API_URL'
                };

                if (key) {
                  data['search_param'] = key.target.value;
                  _this7.isSelectLoader['voter'] = false;
                }

                _this7.http.getVoterList(data).subscribe(function (res) {
                  if (res.success) {
                    _this7.voters = res.data;
                    _this7.isSelectLoader['voter'] = false;
                  }
                });
              }, 500);
            } else {
              var data = {
                'end_point': 'FETCH_VOTER_LIST_API_URL'
              };
              this.http.getVoterList(data).subscribe(function (res) {
                if (res.success) {
                  _this7.voters = res.data;
                }
              });
            }
          }
        }, {
          key: "changeTaskStatus",
          value: function changeTaskStatus(event) {
            var _this8 = this;

            // this.quickViewVisible = !this.quickViewVisible;
            this.modal.confirm({
              nzTitle: 'Confirm',
              nzContent: 'Before changing status',
              nzOkText: 'Confirm',
              nzOkType: 'primary',
              nzOkDanger: true,
              nzOnOk: function nzOnOk() {
                return _this8.onCLickStatusChange(event);
              },
              nzCancelText: 'No',
              nzOnCancel: function nzOnCancel() {
                return _this8.modal.closeAll();
              }
            });
          }
        }, {
          key: "onCLickStatusChange",
          value: function onCLickStatusChange(status) {
            var _this9 = this;

            var data = {
              'status': status
            };
            this.http.editTasks(this._currTaskId, data).subscribe(function (res) {
              if (res.success) {
                _this9.message.success(res.message);

                _this9.getTaskDetails();
              } else {
                _this9.message.error(res.message);
              }
            }, function (error) {
              _this9.message.error(error);
            });
          }
        }, {
          key: "searchMasterData",
          value: function searchMasterData(event, data) {
            var _this10 = this;

            this.isSelectLoader[event] = true;
            var param = {};

            if (data) {
              clearTimeout(this.debounce);
              this.debounce = setTimeout(function () {
                //  if(event == 'Places'){
                //    param = { master_model: event }
                //  }else{
                //    param = { model_name: event }
                //  }
                param = {
                  model_name: event
                };

                _this10.http.getMasterData(param).subscribe(function (res) {
                  if (res.success) {
                    if (event == 'Booth') {
                      _this10.boothList = res.data;
                    } else if (event == 'Ward') {
                      _this10.wardList = res.data;
                    } else if (event == 'Sector') {
                      _this10.sectorList = res.data;
                    } else if (event == 'Street') {
                      _this10.streetList = res.data;
                    } else if (event == 'Lane') {
                      _this10.laneList = res.data;
                    } else if (event == 'Assembly') {
                      _this10.assemblyList = res.data;
                    } else if (event == 'Places') {
                      _this10.placeList = res.data;
                    }

                    _this10.isSelectLoader[event] = false;
                  }
                });
              }, 500);
            } else {
              param = {
                model_name: event
              };
              this.http.getMasterData(param).subscribe(function (res) {
                console.log(event);

                if (res.success) {
                  if (event == 'Booth') {
                    _this10.boothList = res.data;
                    console.log(res.data, _this10.boothList);
                  } else if (event == 'Ward') {
                    _this10.wardList = res.data;
                  } else if (event == 'Sector') {
                    _this10.sectorList = res.data;
                  } else if (event == 'Street') {
                    _this10.streetList = res.data;
                  } else if (event == 'Lane') {
                    _this10.laneList = res.data;
                  } else if (event == 'Assembly') {
                    _this10.assemblyList = res.data;
                  } else if (event == 'Places') {
                    _this10.placeList = res.data;
                  }
                }
              });
            }
          }
        }]);

        return AddEditTaskComponent;
      }();

      AddEditTaskComponent.ɵfac = function AddEditTaskComponent_Factory(t) {
        return new (t || AddEditTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__["NzModalService"]));
      };

      AddEditTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddEditTaskComponent,
        selectors: [["app-add-edit-task"]],
        decls: 98,
        vars: 116,
        consts: [[3, "nzLoading"], ["class", "d-flex  justify-content-end align-items-center flex-wrap mb-5", 4, "ngIf"], ["nz-form", "", 3, "formGroup"], [1, "row"], [1, "col-lg-6", "col-12"], ["nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs", "nzErrorTip"], ["nzShowSearch", "", "formControlName", "task_type", "nzAllowClear", "", 1, "selectFilter", "mb-2", "mr-3", 3, "nzPlaceHolder", "nzFocus", "keyup", "ngModelChange"], ["nzDisabled", "", "nzCustomContent", "", 4, "ngIf"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["type", "text", "nz-input", "", "formControlName", "discription", 3, "placeholder"], [1, "text-left", 3, "nzSm", "nzXs"], ["type", "text", "nz-input", "", "formControlName", "name", 3, "placeholder"], ["formControlName", "internal_user", "nzAllowClear", "", 1, "selectFilter", "mb-2", "mr-3", 3, "nzMode", "nzMaxTagCount", "nzPlaceHolder", "nzFocus", "keyup", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzInputReadOnly", "true", "formControlName", "task_date", 1, "w-100"], ["nzInputReadOnly", "true", "formControlName", "task_end_date", 1, "w-100"], ["formControlName", "voters", "nzAllowClear", "", 1, "selectFilter", "mb-2", "mr-3", 3, "nzMode", "nzMaxTagCount", "nzPlaceHolder", "nzFocus", "keyup"], ["formControlName", "booth", "nzAllowClear", "", 1, "selectFilter", "mb-2", "mr-3", 3, "nzMode", "nzMaxTagCount", "nzPlaceHolder", "nzFocus", "keyup"], ["formControlName", "ward", "nzAllowClear", "", 1, "selectFilter", "mb-2", "mr-3", 3, "nzMode", "nzMaxTagCount", "nzPlaceHolder", "nzFocus", "keyup"], ["formControlName", "sector", "nzAllowClear", "", 1, "selectFilter", "mb-2", "mr-3", 3, "nzMode", "nzMaxTagCount", "nzPlaceHolder", "nzFocus", "keyup"], ["formControlName", "places", "nzAllowClear", "", 1, "selectFilter", "mb-2", "mr-3", 3, "nzMaxTagCount", "nzPlaceHolder", "nzFocus", "keyup"], ["formControlName", "street", "nzAllowClear", "", 1, "selectFilter", "mb-2", "mr-3", 3, "nzMode", "nzMaxTagCount", "nzPlaceHolder", "nzFocus", "keyup"], [1, "d-flex", "justify-content-center"], ["nz-button", "", "nzType", "primary", 1, "px-5", 3, "disabled", "nzLoading", "click"], ["nz-button", "", "nzType", "link", "routerLink", "/task-management", 1, "ml-3", "px-5", "border"], [1, "d-flex", "justify-content-end", "align-items-center", "flex-wrap", "mb-5"], [1, "font-weight-normal", "mx-2", 3, "ngClass"], ["nzShowSearch", "", 1, "selectFilter", "mb-2", "mr-3", 3, "ngModel", "nzPlaceHolder", "ngModelChange"], [3, "nzValue", "nzLabel"], ["nzDisabled", "", "nzCustomContent", ""], ["nz-icon", "", "nzType", "loading", 1, "loading-icon"], [3, "nzLabel", "nzValue"]],
        template: function AddEditTaskComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddEditTaskComponent_div_2_Template, 9, 10, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-form-label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-form-control", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-select", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFocus", function AddEditTaskComponent_Template_nz_select_nzFocus_10_listener() {
              return ctx.gettaskLists();
            })("keyup", function AddEditTaskComponent_Template_nz_select_keyup_10_listener($event) {
              return ctx.gettaskLists($event);
            })("ngModelChange", function AddEditTaskComponent_Template_nz_select_ngModelChange_10_listener($event) {
              return ctx.gettaskLists($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddEditTaskComponent_nz_option_11_Template, 3, 0, "nz-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddEditTaskComponent_nz_option_12_Template, 1, 2, "nz-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nz-form-label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nz-form-control", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nz-form-label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nz-form-control", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nz-form-label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nz-form-control", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "nz-select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFocus", function AddEditTaskComponent_Template_nz_select_nzFocus_30_listener() {
              return ctx.getInternalUser();
            })("keyup", function AddEditTaskComponent_Template_nz_select_keyup_30_listener($event) {
              return ctx.getInternalUser($event);
            })("ngModelChange", function AddEditTaskComponent_Template_nz_select_ngModelChange_30_listener($event) {
              return ctx.getInternalUser($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AddEditTaskComponent_nz_option_31_Template, 3, 0, "nz-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AddEditTaskComponent_nz_option_32_Template, 1, 2, "nz-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "nz-form-label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nz-form-control", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "nz-date-picker", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nz-form-label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "nz-form-control", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "nz-date-picker", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "nz-form-label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "nz-form-control", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "nz-select", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFocus", function AddEditTaskComponent_Template_nz_select_nzFocus_50_listener() {
              return ctx.getVoters();
            })("keyup", function AddEditTaskComponent_Template_nz_select_keyup_50_listener($event) {
              return ctx.getVoters($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AddEditTaskComponent_nz_option_51_Template, 3, 0, "nz-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, AddEditTaskComponent_nz_option_52_Template, 1, 2, "nz-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "nz-form-label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "nz-form-control", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "nz-select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFocus", function AddEditTaskComponent_Template_nz_select_nzFocus_58_listener() {
              return ctx.searchMasterData("Booth");
            })("keyup", function AddEditTaskComponent_Template_nz_select_keyup_58_listener($event) {
              return ctx.searchMasterData("Booth", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, AddEditTaskComponent_nz_option_59_Template, 3, 0, "nz-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, AddEditTaskComponent_nz_option_60_Template, 1, 2, "nz-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "nz-form-label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "nz-form-control", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "nz-select", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFocus", function AddEditTaskComponent_Template_nz_select_nzFocus_66_listener() {
              return ctx.searchMasterData("Ward");
            })("keyup", function AddEditTaskComponent_Template_nz_select_keyup_66_listener($event) {
              return ctx.searchMasterData("Ward", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, AddEditTaskComponent_nz_option_67_Template, 3, 0, "nz-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, AddEditTaskComponent_nz_option_68_Template, 1, 2, "nz-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "nz-form-label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "nz-form-control", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "nz-select", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFocus", function AddEditTaskComponent_Template_nz_select_nzFocus_74_listener() {
              return ctx.searchMasterData("Sector");
            })("keyup", function AddEditTaskComponent_Template_nz_select_keyup_74_listener($event) {
              return ctx.searchMasterData("Sector", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, AddEditTaskComponent_nz_option_75_Template, 3, 0, "nz-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, AddEditTaskComponent_nz_option_76_Template, 1, 2, "nz-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "nz-form-label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "nz-form-control", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "nz-select", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFocus", function AddEditTaskComponent_Template_nz_select_nzFocus_82_listener() {
              return ctx.searchMasterData("Places");
            })("keyup", function AddEditTaskComponent_Template_nz_select_keyup_82_listener($event) {
              return ctx.searchMasterData("Places", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, AddEditTaskComponent_nz_option_83_Template, 3, 0, "nz-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, AddEditTaskComponent_nz_option_84_Template, 1, 2, "nz-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "nz-form-label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "nz-form-control", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "nz-select", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFocus", function AddEditTaskComponent_Template_nz_select_nzFocus_90_listener() {
              return ctx.searchMasterData("Street");
            })("keyup", function AddEditTaskComponent_Template_nz_select_keyup_90_listener($event) {
              return ctx.searchMasterData("Street", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, AddEditTaskComponent_nz_option_91_Template, 3, 0, "nz-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, AddEditTaskComponent_nz_option_92_Template, 1, 2, "nz-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEditTaskComponent_Template_button_click_94_listener() {
              return ctx.submitForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.api_loading["card"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEdit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.taskForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Task Type" : "\u0915\u093E\u0930\u094D\u092F \u092A\u094D\u0930\u0915\u093E\u0930", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please select task type" : "\u0915\u0943\u092A\u092F\u093E \u0915\u093E\u0930\u094D\u092F \u091A\u0941\u0928\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPlaceHolder", ctx._currLanguage == "en" ? "Select Task Type" : "\u0915\u0943\u092A\u092F\u093E \u0915\u093E\u0930\u094D\u092F \u091A\u0941\u0928\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSelectLoader["task"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.taskList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Description" : "\u0935\u093F\u0935\u0930\u0923", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please enter description" : "\u0915\u0943\u092A\u092F\u093E \u0935\u093F\u0935\u0930\u0923 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx._currLanguage == "en" ? "Enter Description" : "\u0935\u093F\u0935\u0930\u0923 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Enter name" : "\u0928\u093E\u092E \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please enter name" : "\u0915\u0943\u092A\u092F\u093E \u0928\u093E\u092E \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx._currLanguage == "en" ? "Enter name" : "\u0928\u093E\u092E \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Select Internal User" : "\u0906\u0902\u0924\u0930\u093F\u0915 \u0909\u092A\u092F\u094B\u0917\u0915\u0930\u094D\u0924\u093E \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please select internal user" : "\u0915\u0943\u092A\u092F\u093E \u0906\u0902\u0924\u0930\u093F\u0915 \u0909\u092A\u092F\u094B\u0917\u0915\u0930\u094D\u0924\u093E \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMode", "multiple")("nzMaxTagCount", 2)("nzPlaceHolder", ctx._currLanguage == "en" ? "Select Internal User" : "\u092E\u0924\u0926\u093E\u0924\u093E\u0913\u0902 \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSelectLoader["internal_user"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.internal_user_list);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Task Date" : "\u0915\u093E\u0930\u094D\u092F \u0924\u093F\u0925\u093F", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please select  end date" : "\u0915\u0943\u092A\u092F\u093E \u0915\u093E\u0930\u094D\u092F \u0924\u093F\u0925\u093F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "End Date" : "\u0915\u093E\u0930\u094D\u092F \u0924\u093F\u0925\u093F", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please select  end date" : "\u0915\u0943\u092A\u092F\u093E \u0915\u093E\u0930\u094D\u092F \u0924\u093F\u0925\u093F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Select Voters" : "\u092E\u0924\u0926\u093E\u0924\u093E\u0913\u0902 \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please select voters" : "\u0915\u0943\u092A\u092F\u093E \u092E\u0924\u0926\u093E\u0924\u093E\u0913\u0902 \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMode", "multiple")("nzMaxTagCount", 2)("nzPlaceHolder", ctx._currLanguage == "en" ? "Select Voters" : "\u092E\u0924\u0926\u093E\u0924\u093E\u0913\u0902 \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSelectLoader["voter"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.voters);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Select Booth" : "\u092C\u0942\u0925 \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please select Booth" : "\u0915\u0943\u092A\u092F\u093E \u092C\u0942\u0925 \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMode", "multiple")("nzMaxTagCount", 2)("nzPlaceHolder", ctx._currLanguage == "en" ? "Select Booth" : "\u092C\u0942\u0925 \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSelectLoader["Booth"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.boothList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Select Ward" : "\u0935\u093E\u0930\u094D\u0921 \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please select Ward" : "\u0915\u0943\u092A\u092F\u093E \u0935\u093E\u0930\u094D\u0921 \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMode", "multiple")("nzMaxTagCount", 2)("nzPlaceHolder", ctx._currLanguage == "en" ? "Select Ward" : "\u0935\u093E\u0930\u094D\u0921 \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSelectLoader["Ward"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.wardList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Select Sector" : "\u0938\u0947\u0915\u094D\u091F\u0930 \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please select Sector" : "\u0915\u0943\u092A\u092F\u093E \u0938\u0947\u0915\u094D\u091F\u0930 \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMode", "multiple")("nzMaxTagCount", 2)("nzPlaceHolder", ctx._currLanguage == "en" ? "Select Sector" : "\u0938\u0947\u0915\u094D\u091F\u0930 \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSelectLoader["Sector"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sectorList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Select Places" : "\u0938\u094D\u0925\u093E\u0928\u094B\u0902 \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please select Places" : "\u0915\u0943\u092A\u092F\u093E \u0938\u094D\u0925\u093E\u0928\u094B\u0902 \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMaxTagCount", 2)("nzPlaceHolder", ctx._currLanguage == "en" ? "Select Places" : "\u0938\u094D\u0925\u093E\u0928\u094B\u0902 \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSelectLoader["Places"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.placeList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Select Street" : "\u0938\u094D\u0925\u093E\u0928\u094B\u0902 \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please select Street" : "\u0915\u0943\u092A\u092F\u093E \u0938\u094D\u0925\u093E\u0928\u094B\u0902 \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMode", "multiple")("nzMaxTagCount", 2)("nzPlaceHolder", ctx._currLanguage == "en" ? "Select Street" : "\u0938\u094D\u0925\u093E\u0928\u094B\u0902 \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSelectLoader["Street"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.streetList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.taskForm.invalid ? true : false)("nzLoading", ctx.api_loading["button"]);
          }
        },
        directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__["NzCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormControlComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_13__["NzDatePickerComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__["NzOptionComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__["NzIconDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZWRpdC10YXNrLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEditTaskComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-edit-task',
            templateUrl: './add-edit-task.component.html',
            styleUrls: ['./add-edit-task.component.css']
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

    },

    /***/
    "Y/ZK":
    /*!******************************************************************!*\
      !*** ./src/app/task-management/task-list/task-list.component.ts ***!
      \******************************************************************/

    /*! exports provided: TaskListComponent */

    /***/
    function YZK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskListComponent", function () {
        return TaskListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! date-fns */
      "IDeP");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/http.service */
      "9NvV");
      /* harmony import */


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "PScX");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/input */
      "PTRe");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");
      /* harmony import */


      var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-zorro-antd/table */
      "rMZv");
      /* harmony import */


      var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-zorro-antd/modal */
      "dEAy");
      /* harmony import */


      var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-zorro-antd/upload */
      "D9mS");
      /* harmony import */


      var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng-zorro-antd/drawer */
      "F6ss");
      /* harmony import */


      var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ng-zorro-antd/select */
      "zAKX");
      /* harmony import */


      var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ng-zorro-antd/date-picker */
      "0lU3");

      function TaskListComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_ng_template_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.getTaskList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["/task-management/edit-task"];
      };

      var _c1 = function _c1(a0) {
        return {
          id: a0
        };
      };

      function TaskListComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-card", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Task Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Created By: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Created At: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r13 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r2.api_loader["list"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, item_r13.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2._currLanguage == "en" ? item_r13 == null ? null : item_r13.name == null ? null : item_r13.name.en : item_r13 == null ? null : item_r13.name == null ? null : item_r13.name.en, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (item_r13 == null ? null : item_r13.created_by) ? (item_r13 == null ? null : item_r13.created_by == null ? null : item_r13.created_by.first_name) + " " + (item_r13 == null ? null : item_r13.created_by == null ? null : item_r13.created_by.username) : "-", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (item_r13 == null ? null : item_r13.created_at) ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 6, item_r13 == null ? null : item_r13.created_at, "medium") : "-", " ");
        }
      }

      function TaskListComponent_ng_container_50_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r15 + 1);
        }
      }

      function TaskListComponent_ng_container_50_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r17.page - 1) * ctx_r17.globalPageSize + (i_r15 + 1));
        }
      }

      function TaskListComponent_ng_container_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TaskListComponent_ng_container_50_td_2_Template, 2, 1, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TaskListComponent_ng_container_50_td_3_Template, 2, 1, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var data_r14 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.page == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.page > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c1, data_r14.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4._currLanguage == "en" ? data_r14 == null ? null : data_r14.name == null ? null : data_r14.name.en : data_r14 == null ? null : data_r14.name == null ? null : data_r14.name.hi, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4._currLanguage == "en" ? data_r14 == null ? null : data_r14.task_type == null ? null : data_r14.task_type.name == null ? null : data_r14.task_type.name.en : data_r14 == null ? null : data_r14.task_type == null ? null : data_r14.task_type.name == null ? null : data_r14.task_type.name.hi, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4._currLanguage == "en" ? data_r14 == null ? null : data_r14.discription == null ? null : data_r14.discription.en : data_r14 == null ? null : data_r14.discription == null ? null : data_r14.discription.hi, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4._currLanguage == "en" ? (data_r14 == null ? null : data_r14.internal_user == null ? null : data_r14.internal_user.first_name) + (data_r14 == null ? null : data_r14.internal_user == null ? null : data_r14.internal_user.last_name) : (data_r14 == null ? null : data_r14.internal_user == null ? null : data_r14.internal_user.first_name) + (data_r14 == null ? null : data_r14.internal_user == null ? null : data_r14.internal_user.last_name), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((data_r14 == null ? null : data_r14.status) ? data_r14 == null ? null : data_r14.status : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((data_r14 == null ? null : data_r14.created_at) ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 13, data_r14 == null ? null : data_r14.created_at, "medium") : "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((data_r14 == null ? null : data_r14.updated_at) ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 16, data_r14 == null ? null : data_r14.updated_at, "medium") : "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((data_r14 == null ? null : data_r14.created_by) ? (data_r14 == null ? null : data_r14.created_by == null ? null : data_r14.created_by.first_name) + " " + (data_r14 == null ? null : data_r14.created_by == null ? null : data_r14.created_by.username) : "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c1, data_r14 == null ? null : data_r14.id));
        }
      }

      function TaskListComponent_ng_template_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r6.total_count, " Results Found ");
        }
      }

      function TaskListComponent_ng_template_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Confirm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r8.api_loader["button"]);
        }
      }

      function TaskListComponent_ng_container_56_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-upload", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFileListChange", function TaskListComponent_ng_container_56_Template_nz_upload_nzFileListChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.fileList = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzBeforeUpload", ctx_r9.beforeUploadName)("nzMultiple", false)("nzFileList", ctx_r9.fileList);
        }
      }

      function TaskListComponent_section_57_nz_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 63);
        }

        if (rf & 2) {
          var item_r31 = ctx.$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r31.id)("nzLabel", ctx_r22._currLanguage == "en" ? (item_r31 == null ? null : item_r31.name == null ? null : item_r31.name.en) + "/" + (item_r31 == null ? null : item_r31.Ward == null ? null : item_r31.Ward.name == null ? null : item_r31.Ward.name.en) : (item_r31 == null ? null : item_r31.name == null ? null : item_r31.name.hi) + "/" + (item_r31 == null ? null : item_r31.Ward == null ? null : item_r31.Ward.name == null ? null : item_r31.Ward.name.hi));
        }
      }

      function TaskListComponent_section_57_nz_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 63);
        }

        if (rf & 2) {
          var item_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r32.id)("nzLabel", item_r32 == null ? null : item_r32.name == null ? null : item_r32.name.en);
        }
      }

      function TaskListComponent_section_57_nz_option_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 63);
        }

        if (rf & 2) {
          var item_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r33.id)("nzLabel", item_r33 == null ? null : item_r33.name == null ? null : item_r33.name.en);
        }
      }

      function TaskListComponent_section_57_nz_option_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 63);
        }

        if (rf & 2) {
          var item_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r34.id)("nzLabel", item_r34 == null ? null : item_r34.name == null ? null : item_r34.name.en);
        }
      }

      function TaskListComponent_section_57_nz_option_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 63);
        }

        if (rf & 2) {
          var item_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r35.id)("nzLabel", item_r35 == null ? null : item_r35.name == null ? null : item_r35.name.en);
        }
      }

      function TaskListComponent_section_57_nz_option_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 63);
        }

        if (rf & 2) {
          var item_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r36.id)("nzLabel", item_r36 == null ? null : item_r36.name == null ? null : item_r36.name.en);
        }
      }

      function TaskListComponent_section_57_nz_option_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 64);
        }

        if (rf & 2) {
          var item_r37 = ctx.$implicit;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", ctx_r28._currLanguage == "en" ? (item_r37 == null ? null : item_r37.first_name) ? (item_r37 == null ? null : item_r37.first_name) + ((item_r37 == null ? null : item_r37.last_name) ? " " + (item_r37 == null ? null : item_r37.last_name) : "") : "" : ctx_r28.first_name)("nzValue", item_r37.id);
        }
      }

      function TaskListComponent_section_57_ng_template_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Filters ");
        }
      }

      function TaskListComponent_section_57_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-drawer", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function TaskListComponent_section_57_Template_nz_drawer_nzOnClose_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r38.quickViewToggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Booth: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-select", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskListComponent_section_57_Template_nz_select_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r40._currBooth = $event;
          })("nzFocus", function TaskListComponent_section_57_Template_nz_select_nzFocus_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r41.searchStaticDataGlobalFunction("Booth");
          })("keyup", function TaskListComponent_section_57_Template_nz_select_keyup_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r42.searchStaticDataGlobalFunction("Booth", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TaskListComponent_section_57_nz_option_8_Template, 1, 2, "nz-option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ward: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-select", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskListComponent_section_57_Template_nz_select_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r43._currWard = $event;
          })("nzFocus", function TaskListComponent_section_57_Template_nz_select_nzFocus_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r44.searchStaticDataGlobalFunction("Ward");
          })("keyup", function TaskListComponent_section_57_Template_nz_select_keyup_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r45.searchStaticDataGlobalFunction("Ward", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TaskListComponent_section_57_nz_option_13_Template, 1, 2, "nz-option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sector: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nz-select", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskListComponent_section_57_Template_nz_select_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r46._currSector = $event;
          })("nzFocus", function TaskListComponent_section_57_Template_nz_select_nzFocus_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r47.searchStaticDataGlobalFunction("Sector");
          })("keyup", function TaskListComponent_section_57_Template_nz_select_keyup_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r48.searchStaticDataGlobalFunction("Sector", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TaskListComponent_section_57_nz_option_18_Template, 1, 2, "nz-option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Assembly: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nz-select", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskListComponent_section_57_Template_nz_select_ngModelChange_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r49._crrAssembly = $event;
          })("nzFocus", function TaskListComponent_section_57_Template_nz_select_nzFocus_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r50.searchStaticDataGlobalFunction("Assembly");
          })("keyup", function TaskListComponent_section_57_Template_nz_select_keyup_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r51.searchStaticDataGlobalFunction("Sector", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TaskListComponent_section_57_nz_option_23_Template, 1, 2, "nz-option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Street: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nz-select", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskListComponent_section_57_Template_nz_select_ngModelChange_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r52._currStreet = $event;
          })("nzFocus", function TaskListComponent_section_57_Template_nz_select_nzFocus_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r53.searchStaticDataGlobalFunction("Street");
          })("keyup", function TaskListComponent_section_57_Template_nz_select_keyup_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r54.searchStaticDataGlobalFunction("Street", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TaskListComponent_section_57_nz_option_28_Template, 1, 2, "nz-option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Lane: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nz-select", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskListComponent_section_57_Template_nz_select_ngModelChange_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r55._currLane = $event;
          })("nzFocus", function TaskListComponent_section_57_Template_nz_select_nzFocus_32_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r56.searchStaticDataGlobalFunction("Lane");
          })("keyup", function TaskListComponent_section_57_Template_nz_select_keyup_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r57.searchStaticDataGlobalFunction("Lane", $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, TaskListComponent_section_57_nz_option_33_Template, 1, 2, "nz-option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Date: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nz-range-picker", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskListComponent_section_57_Template_nz_range_picker_ngModelChange_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r58.date = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Internal User: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nz-select", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskListComponent_section_57_Template_nz_select_ngModelChange_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r59._currUser = $event;
          })("nzFocus", function TaskListComponent_section_57_Template_nz_select_nzFocus_41_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r60.getInternalUser();
          })("keyup", function TaskListComponent_section_57_Template_nz_select_keyup_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r61.getInternalUser($event);
          })("ngModelChange", function TaskListComponent_section_57_Template_nz_select_ngModelChange_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r62.getInternalUser($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, TaskListComponent_section_57_nz_option_42_Template, 1, 2, "nz-option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_section_57_Template_button_click_44_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            ctx_r63.quickViewToggle();
            return ctx_r63.getTaskList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Apply");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_section_57_Template_button_click_46_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r64.resetFilter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, TaskListComponent_section_57_ng_template_48_Template, 1, 0, "ng-template", null, 62, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzWidth", "350px")("nzTitle", _r29)("nzClosable", false)("nzVisible", ctx_r10.quickViewVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10._currBooth);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.boothList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10._currWard);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.wardList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10._currSector);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.sectorList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10._crrAssembly);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.assemblyList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10._currStreet);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.streetList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10._currLane);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.laneList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.date)("nzDisabledDate", ctx_r10.disabledDate)("nzRanges", ctx_r10.customRanges);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10._currUser)("nzMode", "multiple")("nzMaxTagCount", 2)("nzPlaceHolder", ctx_r10._currLanguage == "en" ? "Select Internal User" : "\u092E\u0924\u0926\u093E\u0924\u093E\u0913\u0902 \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.internal_user_list);
        }
      }

      var _c2 = function _c2() {
        return {
          x: "1500px",
          y: "50vh"
        };
      };

      var TaskListComponent = /*#__PURE__*/function () {
        function TaskListComponent(http, message) {
          var _this11 = this;

          _classCallCheck(this, TaskListComponent);

          this.http = http;
          this.message = message;
          this.quickViewVisible = false;

          this.disabledDate = function (current) {
            return (// Can not select days before today and today
              Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInCalendarDays"])(current, new Date()) > 0
            );
          };

          this.customRanges = {
            Today: [new Date(), new Date()],
            'Last 7 days': [new Date().setDate(new Date().getDate() - 7), new Date()],
            'This Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1), new Date()],
            'Last Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 1), new Date(new Date().getFullYear(), new Date().getMonth(), -1, 30, 31)],
            'Last 3 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 3), new Date(new Date().getFullYear(), new Date().getMonth(), -1, 30, 31)],
            'Last 6 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 6), new Date(new Date().getFullYear(), new Date().getMonth(), -1, 30, 31)],
            'This Year': [new Date(new Date().getFullYear(), 0, 1), new Date()],
            'Last Year': [new Date(new Date().getFullYear() - 1, 0, 1), new Date(new Date().getFullYear() - 1, 11, 31)]
          }; // Table:

          this.taskList = [];
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
          this.isImport = false;
          this.fileList = [];

          this.beforeUploadName = function (file) {
            console.log(file === null || file === void 0 ? void 0 : file.type);

            if (!((file === null || file === void 0 ? void 0 : file.type) == 'xlsx' || (file === null || file === void 0 ? void 0 : file.type) == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')) {
              _this11.fileList = [];
              _this11._currentFileName = null;

              _this11.message.error('Please check the file type');

              return false;
            }

            _this11.fileList = [];
            _this11.fileList = _this11.fileList.concat(file);
            _this11._currentFileName = file;
            return false;
          };

          this.isOkBtn = false;
          this.internal_user_list = [];
        }

        _createClass(TaskListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._currLanguage = localStorage.getItem("appLanguage") || 'en';
            this.getTaskList();
          }
        }, {
          key: "getTaskList",
          value: function getTaskList(tableFilter) {
            var _this12 = this;

            var _a;

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

            if (this._currUser) {
              data['internal_user'] = this._currUser;
            }

            if (((_a = this.date) === null || _a === void 0 ? void 0 : _a.length) > 0) {
              this.page = 1;
              data['start_date'] = moment__WEBPACK_IMPORTED_MODULE_3__(this.date[0]).format("YYYY-MM-DD");
              data['end_date'] = moment__WEBPACK_IMPORTED_MODULE_3__(this.date[1]).format("YYYY-MM-DD");
            }

            if (this._currSearchValue) {
              data['search_param'] = this._currSearchValue;
            }

            this.http.getTaskList(data).subscribe(function (res) {
              if (res.success) {
                _this12.taskList = res.data;
                _this12.total_count = res.total_count;
                _this12.api_loader['list'] = false;
              } else {
                _this12.api_loader['list'] = false;
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
            this._currLane;
            this._crrAssembly;
            this._currStreet;
            this._currUser;
            this.getTaskList();
          }
        }, {
          key: "searchStaticDataGlobalFunction",
          value: function searchStaticDataGlobalFunction(event, data) {
            var _this13 = this;

            clearTimeout(this.debounce);
            this.debounce = setTimeout(function () {
              var data = {
                model_name: event
              };

              _this13.http.getMasterData(data).subscribe(function (res) {
                if (res.success) {
                  if (event == 'Booth') {
                    _this13.boothList = res.data;
                  } else if (event == 'Ward') {
                    _this13.wardList = res.data;
                  } else if (event == 'Sector') {
                    _this13.sectorList = res.data;
                  } else if (event == 'Street') {
                    _this13.streetList = res.data;
                  } else if (event == 'Lane') {
                    _this13.laneList = res.data;
                  } else if (event == 'Assembly') {
                    _this13.assemblyList = res.data;
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
        }, {
          key: "onDownloadSampleFile",
          value: function onDownloadSampleFile() {
            var downloadloader = this.message.loading('Downloading File..', {
              nzDuration: 0
            }).messageId;
            var result = '../assets/static_files/TaskManagement.xlsx';
            file_saver__WEBPACK_IMPORTED_MODULE_2__(result, 'TaskManagement.xlsx');
            this.message.remove(downloadloader);
          }
        }, {
          key: "handleOk",
          value: function handleOk() {
            var _this14 = this;

            this.isOkBtn = true;
            this.api_loader['button'] = true;
            var formData = new FormData();
            formData.append('file', this._currentFileName);
            this.http.importTask(formData).subscribe(function (res) {
              if (res.success) {
                _this14.message.success('File uploaded successfully');

                _this14.api_loader['button'] = false;
                _this14.isOkBtn = false;
                _this14.isImport = false;
                _this14.fileList = [];

                _this14.getTaskList();
              } else {
                _this14.isOkBtn = false;
                _this14.api_loader['button'] = false;
                _this14.isImport = false;
                _this14.fileList = [];

                _this14.message.error(res.message);
              }
            });
          }
        }, {
          key: "getInternalUser",
          value: function getInternalUser(key) {
            var _this15 = this;

            if (key) {
              clearTimeout(this.in_user_debounce);
              this.in_user_debounce = setTimeout(function () {
                var data = {
                  'end_point': 'FETCH_VOTER_LIST_API_URL',
                  'search_param': key.target.value
                };

                _this15.http.getTeamList(data).subscribe(function (res) {
                  if (res.success) {
                    _this15.internal_user_list = res.data;
                    console.log(_this15.internal_user_list);
                  }
                });
              }, 500);
            } else {
              var data = {
                'end_point': 'FETCH_VOTER_LIST_API_URL'
              };
              this.http.getTeamList(data).subscribe(function (res) {
                if (res.success) {
                  _this15.internal_user_list = res.data;
                  console.log(_this15.internal_user_list);
                }
              });
            }
          }
        }]);

        return TaskListComponent;
      }();

      TaskListComponent.ɵfac = function TaskListComponent_Factory(t) {
        return new (t || TaskListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"]));
      };

      TaskListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TaskListComponent,
        selectors: [["app-task-list"]],
        decls: 58,
        vars: 17,
        consts: [[1, "d-block", "align-items-center"], [1, "row"], [1, "col-12", "col-lg-4", "mb-2"], [1, "d-flex"], ["nzSearch", "", 3, "nzAddOnAfter"], ["type", "text", "nz-input", "", "placeholder", "Search By Name", 3, "ngModel", "ngModelChange", "keyup.enter"], ["suffixIconButton", ""], ["nz-button", "", "nzType", "default", "nzShape", "circle", 1, "ml-2", "mb-2", 3, "click"], ["nz-icon", "", "nzType", "undo"], [1, "col-lg-8", "col-12", "mb-2", "d-flex", "flex-wrap", "justify-content-end"], ["nz-button", "", "nzType", "link", 1, "mb-2", "mr-2", "border", 3, "click"], ["nz-icon", "", "nzType", "download", "nzTheme", "outline", 1, "pr-2"], ["nz-button", "", "nzType", "primary", "routerLink", "/task-management/add-task", 1, "mb-2", "mr-2"], [1, "d-flex", "justify-content-end", "mb-3"], [1, "row", "d-lg-none", "d-flex"], ["class", "col-md-6 col-12 ", 4, "ngFor", "ngForOf"], [1, "d-none", "d-lg-flex"], [1, "totalCount"], [3, "nzData", "nzTotal", "nzFrontPagination", "nzShowSizeChanger", "nzPageIndex", "nzPageSize", "nzShowTotal", "nzLoading", "nzScroll", "nzQueryParams"], ["rowSelectionTable", ""], ["nzWidth", "4rem"], ["nzWidth", "8rem", 1, "text-left"], ["nzWidth", "8rem"], ["nzWidth", "8rem", "nzRight", ""], [4, "ngFor", "ngForOf"], ["botTotalCount", ""], ["nzTitle", "Import Tasks", 3, "nzVisible", "nzFooter", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["footerTemplate", ""], [4, "nzModalContent"], [4, "ngIf"], ["nz-button", "", "nzType", "secondary", "nzSearch", "", 3, "click"], ["nz-icon", "", "nzType", "search"], [1, "col-md-6", "col-12"], ["nzHoverable", "", 1, "mr-md-2", 3, "nzLoading"], [1, "d-flex", "my-2", "align-items-center", 3, "routerLink", "queryParams"], [1, "d-flex", "flex-column"], [1, "text-dark"], [1, "mr-2"], [1, "text-primary", "mb-2"], [1, "mr-2", "font-size-12"], ["nzWidth", "4rem", 4, "ngIf"], [3, "routerLink", "queryParams"], ["nz-button", "", "nzType", "link", "routerLink", "/task-management/edit-task", 1, "border", 3, "queryParams"], [1, "font-weight-semibold"], [1, "d-flex", "justify-content-end"], ["nz-button", "", "nzType", "link"], ["nz-button", "", "nzType", "primary", 3, "nzLoading"], ["nzListType", "picture", "nzType", "drag", 3, "nzBeforeUpload", "nzMultiple", "nzFileList", "nzFileListChange"], ["nz-button", "", "nzType", "primary", 1, "my-md-4"], ["nzPlacement", "right", 3, "nzWidth", "nzTitle", "nzClosable", "nzVisible", "nzOnClose"], [1, "d-flex", "flex-wrap", "justify-content-start", "align-items-center"], [1, "d-flex", "align-items-start", "flex-column", "mb-3"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select Booth/Ward", 1, "selectFilter", "mb-2", "mr-3", 3, "ngModel", "ngModelChange", "nzFocus", "keyup"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select Ward", 1, "selectFilter", "mb-2", "mr-3", 3, "ngModel", "ngModelChange", "nzFocus", "keyup"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select Sector", 1, "selectFilter", "mb-2", "mr-3", 3, "ngModel", "ngModelChange", "nzFocus", "keyup"], [1, "mb-2", "me-2", "mr-md-0", 2, "min-width", "10rem", 3, "ngModel", "nzDisabledDate", "nzRanges", "ngModelChange"], ["nzAllowClear", "", 1, "selectFilter", "mb-2", "mr-3", 3, "ngModel", "nzMode", "nzMaxTagCount", "nzPlaceHolder", "ngModelChange", "nzFocus", "keyup"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", "mt-5", "align-items-center"], ["nz-button", "", "nzType", "primary", 1, "mr-3", 3, "click"], ["nz-button", "", "nzType", "link", 3, "click"], ["filtersTemplate", ""], [3, "nzValue", "nzLabel"], [3, "nzLabel", "nzValue"]],
        template: function TaskListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-input-group", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskListComponent_Template_input_ngModelChange_5_listener($event) {
              return ctx._currSearchValue = $event;
            })("keyup.enter", function TaskListComponent_Template_input_keyup_enter_5_listener() {
              return ctx.getTaskList();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TaskListComponent_ng_template_6_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_Template_button_click_8_listener() {
              return ctx.resetFilter();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_Template_button_click_11_listener() {
              return ctx.isImport = true;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Import Task");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_Template_button_click_13_listener() {
              return ctx.onDownloadSampleFile();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Download Sample File ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_Template_button_click_16_listener() {
              return ctx.quickViewVisible = true;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Filters");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "+ Add New Task");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TaskListComponent_div_22_Template, 17, 12, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nz-card", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nz-table", 18, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzQueryParams", function TaskListComponent_Template_nz_table_nzQueryParams_25_listener($event) {
              return ctx.taskList[0] ? ctx.getTaskList($event) : null;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Sr. No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Task Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Internal User");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Created At");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Updated At");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Created By");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, TaskListComponent_ng_container_50_Template, 26, 24, "ng-container", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, TaskListComponent_ng_template_51_Template, 3, 1, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "nz-modal", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function TaskListComponent_Template_nz_modal_nzVisibleChange_53_listener($event) {
              return ctx.isImport = $event;
            })("nzOnCancel", function TaskListComponent_Template_nz_modal_nzOnCancel_53_listener() {
              return ctx.isImport = false;
            })("nzOnOk", function TaskListComponent_Template_nz_modal_nzOnOk_53_listener() {
              return ctx.handleOk();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, TaskListComponent_ng_template_54_Template, 5, 1, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, TaskListComponent_ng_container_56_Template, 4, 3, "ng-container", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, TaskListComponent_section_57_Template, 50, 24, "section", 29);
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAddOnAfter", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._currSearchValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.taskList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.taskList)("nzTotal", ctx.total_count)("nzFrontPagination", false)("nzShowSizeChanger", true)("nzPageIndex", ctx.page)("nzPageSize", ctx.globalPageSize)("nzShowTotal", _r5)("nzLoading", ctx.api_loader["list"])("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.taskList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isImport)("nzFooter", _r7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quickViewVisible);
          }
        },
        directives: [ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__["NzWaveDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__["NzCardComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzCellFixedDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzTbodyComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__["NzModalComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__["NzModalContentDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_17__["NzUploadComponent"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_18__["NzDrawerComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_19__["NzSelectComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_20__["NzDatePickerComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_20__["NzRangePickerComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_19__["NzOptionComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-task-list',
            templateUrl: './task-list.component.html',
            styleUrls: ['./task-list.component.css']
          }]
        }], function () {
          return [{
            type: src_app_service_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
          }, {
            type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "rru9":
    /*!*******************************************************************!*\
      !*** ./src/app/task-management/task-management-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: TaskManagementRoutingModule */

    /***/
    function rru9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskManagementRoutingModule", function () {
        return TaskManagementRoutingModule;
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


      var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./task-list/task-list.component */
      "Y/ZK");
      /* harmony import */


      var _add_edit_task_add_edit_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-edit-task/add-edit-task.component */
      "Blnk");

      var routes = [{
        path: '',
        // canActivate: [NgxPermissionsGuard],
        component: _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_2__["TaskListComponent"],
        data: {
          parent: 'Task',
          title: 'Task List',
          isButton: false,
          isHome: false,
          custom_url: '/task-management'
        }
      }, {
        path: '',
        data: {
          parent: 'Task',
          title: 'Task List',
          custom_url: '/task-management'
        },
        children: [{
          path: 'add-task',
          // redirectTo:'/task-management/add-task',
          // canActivate: [NgxPermissionsGuard],
          component: _add_edit_task_add_edit_task_component__WEBPACK_IMPORTED_MODULE_3__["AddEditTaskComponent"],
          data: {
            parent: 'Task',
            title: 'Add Task',
            isButton: false,
            isHome: false,
            custom_url: '/task-management/add-task'
          }
        }, {
          path: 'edit-task',
          // canActivate: [NgxPermissionsGuard],
          component: _add_edit_task_add_edit_task_component__WEBPACK_IMPORTED_MODULE_3__["AddEditTaskComponent"],
          data: {
            parent: 'Task',
            title: 'Edit Task',
            isButton: false,
            isHome: false,
            custom_url: '/task-management/edit-task'
          }
        }]
      }];

      var TaskManagementRoutingModule = /*#__PURE__*/_createClass(function TaskManagementRoutingModule() {
        _classCallCheck(this, TaskManagementRoutingModule);
      });

      TaskManagementRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TaskManagementRoutingModule
      });
      TaskManagementRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TaskManagementRoutingModule_Factory(t) {
          return new (t || TaskManagementRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TaskManagementRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskManagementRoutingModule, [{
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
//# sourceMappingURL=task-management-task-management-module-es5.js.map