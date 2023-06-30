(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["task-management-task-management-module"],{

/***/ "/zXh":
/*!***********************************************************!*\
  !*** ./src/app/task-management/task-management.module.ts ***!
  \***********************************************************/
/*! exports provided: TaskManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskManagementModule", function() { return TaskManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _task_management_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-management-routing.module */ "rru9");
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-list/task-list.component */ "Y/ZK");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var _add_edit_task_add_edit_task_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-edit-task/add-edit-task.component */ "Blnk");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/drawer */ "F6ss");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/upload */ "D9mS");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");





















class TaskManagementModule {
}
TaskManagementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TaskManagementModule });
TaskManagementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TaskManagementModule_Factory(t) { return new (t || TaskManagementModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _task_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["TaskManagementRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__["NzFormModule"],
            ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__["NzTableModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"],
            ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__["NzCardModule"],
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__["NzInputModule"],
            ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_12__["NzDatePickerModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"],
            ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_14__["NzAvatarModule"],
            ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_16__["NzDropDownModule"],
            ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_17__["NzDrawerModule"],
            ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_18__["NzUploadModule"],
            ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__["NzModalModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TaskManagementModule, { declarations: [_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_3__["TaskListComponent"], _add_edit_task_add_edit_task_component__WEBPACK_IMPORTED_MODULE_15__["AddEditTaskComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _task_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["TaskManagementRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__["NzFormModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__["NzTableModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__["NzCardModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__["NzInputModule"],
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_12__["NzDatePickerModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"],
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_14__["NzAvatarModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_16__["NzDropDownModule"],
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_17__["NzDrawerModule"],
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_18__["NzUploadModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__["NzModalModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskManagementModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_3__["TaskListComponent"], _add_edit_task_add_edit_task_component__WEBPACK_IMPORTED_MODULE_15__["AddEditTaskComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _task_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["TaskManagementRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__["NzFormModule"],
                    ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__["NzTableModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"],
                    ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__["NzCardModule"],
                    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectModule"],
                    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__["NzInputModule"],
                    ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_12__["NzDatePickerModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"],
                    ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_14__["NzAvatarModule"],
                    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_16__["NzDropDownModule"],
                    ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_17__["NzDrawerModule"],
                    ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_18__["NzUploadModule"],
                    ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__["NzModalModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Blnk":
/*!**************************************************************************!*\
  !*** ./src/app/task-management/add-edit-task/add-edit-task.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddEditTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditTaskComponent", function() { return AddEditTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/http.service */ "9NvV");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");



















function AddEditTaskComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditTaskComponent_div_2_Template_nz_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.changeTaskStatus($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nz-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nz-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
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
} }
function AddEditTaskComponent_nz_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 28);
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r11.id)("nzLabel", item_r11 == null ? null : item_r11.name == null ? null : item_r11.name.en);
} }
function AddEditTaskComponent_nz_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 29);
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", ctx_r2._currLanguage == "en" ? (item_r12 == null ? null : item_r12.first_name) ? (item_r12 == null ? null : item_r12.first_name) + ((item_r12 == null ? null : item_r12.last_name) ? " " + (item_r12 == null ? null : item_r12.last_name) : "") : "" : ctx_r2.first_name)("nzValue", item_r12.id);
} }
function AddEditTaskComponent_nz_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 28);
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r13.id)("nzLabel", ctx_r3._currLanguage == "en" ? item_r13 == null ? null : item_r13.full_name_en : ctx_r3.full_name_hi);
} }
function AddEditTaskComponent_nz_option_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 28);
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r14.id)("nzLabel", ctx_r4._currLanguage == "en" ? item_r14 == null ? null : item_r14.name == null ? null : item_r14.name.en : item_r14 == null ? null : item_r14.name == null ? null : item_r14.name.hi);
} }
function AddEditTaskComponent_nz_option_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 28);
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r15.id)("nzLabel", ctx_r5._currLanguage == "en" ? item_r15 == null ? null : item_r15.name == null ? null : item_r15.name.en : item_r15 == null ? null : item_r15.name == null ? null : item_r15.name.hi);
} }
function AddEditTaskComponent_nz_option_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 28);
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r16.id)("nzLabel", ctx_r6._currLanguage == "en" ? item_r16 == null ? null : item_r16.name == null ? null : item_r16.name.en : item_r16 == null ? null : item_r16.name == null ? null : item_r16.name.hi);
} }
function AddEditTaskComponent_nz_option_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 28);
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r17.id)("nzLabel", ctx_r7._currLanguage == "en" ? item_r17 == null ? null : item_r17.name == null ? null : item_r17.name.en : item_r17 == null ? null : item_r17.name == null ? null : item_r17.name.hi);
} }
function AddEditTaskComponent_nz_option_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 28);
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r18.id)("nzLabel", ctx_r8._currLanguage == "en" ? item_r18 == null ? null : item_r18.name == null ? null : item_r18.name.en : item_r18 == null ? null : item_r18.name == null ? null : item_r18.name.hi);
} }
class AddEditTaskComponent {
    constructor(fb, router, acRoute, message, http, modal) {
        this.fb = fb;
        this.router = router;
        this.acRoute = acRoute;
        this.message = message;
        this.http = http;
        this.modal = modal;
        this.isEdit = false;
        this.api_loading = { card: false, button: false };
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
    ngOnInit() {
        this._currLanguage = localStorage.getItem("appLanguage") || 'en';
        this.acRoute.queryParams.subscribe((params) => {
            if (params['id']) {
                this._currTaskId = params.id;
                this.isEdit = true;
                if (this._currTaskId) {
                    this.getInternalUser();
                    this.getVoters();
                    this.searchMasterData('Sector');
                    this.searchMasterData('Booth');
                    this.searchMasterData('Ward');
                    this.searchMasterData('Street');
                    this.searchMasterData('Places');
                    this.gettaskLists();
                    this.getTaskDetails();
                }
            }
            this.createTask();
        });
        // debugger;
    }
    getTaskDetails() {
        let data = { id: this._currTaskId, 'end_point': 'FETCH_VOTER_LIST_API_URL' };
        this.api_loading['card'] = true;
        this.http.getTaskList(data).subscribe((res) => {
            var _a, _b, _c, _d, _e;
            if (res.success) {
                this.taskDetails = res.data[0];
                if (((_a = this.taskDetails['sector']) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                    let sector = [];
                    this.taskDetails['sector'].forEach(element => {
                        sector.push(element.id);
                    });
                    this.taskDetails['sector'] = sector;
                }
                if (((_b = this.taskDetails['street']) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                    let street = [];
                    this.taskDetails['street'].forEach(element => {
                        street.push(element.id);
                    });
                    this.taskDetails['street'] = street;
                }
                if (((_c = this.taskDetails['places']) === null || _c === void 0 ? void 0 : _c.length) > 0) {
                    let places = [];
                    this.taskDetails['places'].forEach(element => {
                        places.push(element.id);
                    });
                    this.taskDetails['places'] = places;
                }
                if (((_d = this.taskDetails['ward']) === null || _d === void 0 ? void 0 : _d.length) > 0) {
                    let ward = [];
                    this.taskDetails['ward'].forEach(element => {
                        ward.push(element.id);
                    });
                    this.taskDetails['ward'] = ward;
                }
                if (((_e = this.taskDetails['booth']) === null || _e === void 0 ? void 0 : _e.length) > 0) {
                    let booth = [];
                    this.taskDetails['booth'].forEach(element => {
                        booth.push(element.id);
                    });
                    this.taskDetails['booth'] = booth;
                }
                this.createTask(this.taskDetails);
                this.api_loading['card'] = false;
            }
            else {
                this.api_loading['card'] = false;
            }
        }, error => { this.api_loading['card'] = false; });
    }
    createTask(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.taskForm = this.fb.group({
            task_type: [(data ? (_a = data === null || data === void 0 ? void 0 : data.task_type) === null || _a === void 0 ? void 0 : _a.id : ''), [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            name: [(data ? (this._currLanguage == 'en' ? (_b = data === null || data === void 0 ? void 0 : data.name) === null || _b === void 0 ? void 0 : _b.en : (_c = data === null || data === void 0 ? void 0 : data.name) === null || _c === void 0 ? void 0 : _c.hi) : '')],
            discription: [(data ? (this._currLanguage == 'en' ? (_d = data === null || data === void 0 ? void 0 : data.discription) === null || _d === void 0 ? void 0 : _d.en : (_e = data === null || data === void 0 ? void 0 : data.discription) === null || _e === void 0 ? void 0 : _e.hi) : ''), [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            internal_user: [data ? [(_f = data === null || data === void 0 ? void 0 : data.internal_user) === null || _f === void 0 ? void 0 : _f.id] : [], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            voters: [(data === null || data === void 0 ? void 0 : data.voters) ? data === null || data === void 0 ? void 0 : data.voters : []],
            booth: [data ? data === null || data === void 0 ? void 0 : data.booth : [], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            ward: [(data === null || data === void 0 ? void 0 : data.ward) ? data === null || data === void 0 ? void 0 : data.ward : [],],
            street: [(data === null || data === void 0 ? void 0 : data.street) ? data === null || data === void 0 ? void 0 : data.street : []],
            places: [(data === null || data === void 0 ? void 0 : data.place) ? (_g = data === null || data === void 0 ? void 0 : data.place) === null || _g === void 0 ? void 0 : _g.id : []],
            sector: [(data === null || data === void 0 ? void 0 : data.sector) ? data === null || data === void 0 ? void 0 : data.sector : [],],
            task_date: [(data === null || data === void 0 ? void 0 : data.task_date) ? data === null || data === void 0 ? void 0 : data.task_date : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            task_end_date: [(data === null || data === void 0 ? void 0 : data.task_end_date) ? data === null || data === void 0 ? void 0 : data.task_end_date : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        if (((_j = (_h = this.taskDetails) === null || _h === void 0 ? void 0 : _h.voters) === null || _j === void 0 ? void 0 : _j.length) > 0) {
            (_k = this.taskDetails) === null || _k === void 0 ? void 0 : _k.sector.forEach(element => {
                this.taskForm.get('sector').value.push(element.id);
            });
        }
        else {
            this.taskForm.controls['sector'].setValue([]);
        }
    }
    submitForm() {
        var _a;
        if (this.taskForm.invalid) {
            this.message.warning("Please check the required fields");
            return;
        }
        this.api_loading['button'] = true;
        var form_data = new FormData();
        form_data.append('task_type', this.taskForm.get('task_type').value);
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
        let url = this.isEdit == false ? this.http.addTasks(form_data) : this.http.editTasks(this._currTaskId, form_data);
        url.subscribe((res) => {
            if (res.success) {
                this.message.success(res.message);
                this.router.navigateByUrl('/task-management');
                this.api_loading['button'] = false;
            }
            else {
                this.api_loading['button'] = false;
            }
        }, errpr => {
            this.api_loading['button'] = false;
        });
    }
    gettaskLists(key) {
        if (key) {
            clearTimeout(this.task_debounce);
            this.task_debounce = setTimeout(() => {
                let data = { model_name: 'Tasks' };
                this.http.getMasterData(data).subscribe((res) => {
                    if (res.success) {
                        this.taskList = res.data;
                    }
                });
            }, 500);
        }
        else {
            let data = { model_name: 'Tasks' };
            this.http.getMasterData(data).subscribe((res) => {
                if (res.success) {
                    this.taskList = res.data;
                }
            });
        }
    }
    getInternalUser(key) {
        if (key) {
            clearTimeout(this.in_user_debounce);
            this.in_user_debounce = setTimeout(() => {
                let data = { 'end_point': 'FETCH_VOTER_LIST_API_URL' };
                this.http.getTeamList(data).subscribe((res) => {
                    if (res.success) {
                        this.internal_user_list = res.data;
                    }
                });
            }, 500);
        }
        else {
            let data = { 'end_point': 'FETCH_VOTER_LIST_API_URL' };
            this.http.getTeamList(data).subscribe((res) => {
                if (res.success) {
                    this.internal_user_list = res.data;
                }
            });
        }
    }
    getVoters(key) {
        if (key) {
            clearTimeout(this.voter_debounce);
            this.voter_debounce = setTimeout(() => {
                let data = { 'end_point': 'FETCH_VOTER_LIST_API_URL' };
                if (key) {
                    data['search_param'] = key.target.value;
                }
                this.http.getVoterList(data).subscribe((res) => {
                    if (res.success) {
                        this.voters = res.data;
                    }
                });
            }, 500);
        }
        else {
            let data = { 'end_point': 'FETCH_VOTER_LIST_API_URL' };
            this.http.getVoterList(data).subscribe((res) => {
                if (res.success) {
                    this.voters = res.data;
                }
            });
        }
    }
    changeTaskStatus(event) {
        // this.quickViewVisible = !this.quickViewVisible;
        this.modal.confirm({
            nzTitle: 'Confirm',
            nzContent: 'Before changing status',
            nzOkText: 'Confirm',
            nzOkType: 'primary',
            nzOkDanger: true,
            nzOnOk: () => this.onCLickStatusChange(event),
            nzCancelText: 'No',
            nzOnCancel: () => this.modal.closeAll()
        });
    }
    onCLickStatusChange(status) {
        let data = { 'status': status };
        this.http.editTasks(this._currTaskId, data).subscribe((res) => {
            if (res.success) {
                this.message.success(res.message);
                this.getTaskDetails();
            }
            else {
                this.message.error(res.message);
            }
        }, error => {
            this.message.error(error);
        });
    }
    searchMasterData(event, data) {
        let param = {};
        if (data) {
            clearTimeout(this.debounce);
            this.debounce = setTimeout(() => {
                //  if(event == 'Places'){
                //    param = { master_model: event }
                //  }else{
                //    param = { model_name: event }
                //  }
                param = { model_name: event };
                this.http.getMasterData(param).subscribe((res) => {
                    if (res.success) {
                        if (event == 'Booth') {
                            this.boothList = res.data;
                        }
                        else if (event == 'Ward') {
                            this.wardList = res.data;
                        }
                        else if (event == 'Sector') {
                            this.sectorList = res.data;
                        }
                        else if (event == 'Street') {
                            this.streetList = res.data;
                        }
                        else if (event == 'Lane') {
                            this.laneList = res.data;
                        }
                        else if (event == 'Assembly') {
                            this.assemblyList = res.data;
                        }
                        else if (event == 'Places') {
                            this.placeList = res.data;
                        }
                    }
                });
            }, 500);
        }
        else {
            param = { model_name: event };
            this.http.getMasterData(param).subscribe((res) => {
                console.log(event);
                if (res.success) {
                    if (event == 'Booth') {
                        this.boothList = res.data;
                        console.log(res.data, this.boothList);
                    }
                    else if (event == 'Ward') {
                        this.wardList = res.data;
                    }
                    else if (event == 'Sector') {
                        this.sectorList = res.data;
                    }
                    else if (event == 'Street') {
                        this.streetList = res.data;
                    }
                    else if (event == 'Lane') {
                        this.laneList = res.data;
                    }
                    else if (event == 'Assembly') {
                        this.assemblyList = res.data;
                    }
                    else if (event == 'Places') {
                        this.placeList = res.data;
                    }
                }
            });
        }
    }
}
AddEditTaskComponent.ɵfac = function AddEditTaskComponent_Factory(t) { return new (t || AddEditTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__["NzModalService"])); };
AddEditTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddEditTaskComponent, selectors: [["app-add-edit-task"]], decls: 90, vars: 108, consts: [[3, "nzLoading"], ["class", "d-flex  justify-content-end align-items-center flex-wrap mb-5", 4, "ngIf"], ["nz-form", "", 3, "formGroup"], [1, "row"], [1, "col-lg-6", "col-12"], ["nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs", "nzErrorTip"], ["nzShowSearch", "", "formControlName", "task_type", "nzAllowClear", "", 1, "selectFilter", "mb-2", "mr-3", 3, "nzPlaceHolder", "nzFocus", "keyup", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["type", "text", "nz-input", "", "formControlName", "discription", 3, "placeholder"], [1, "text-left", 3, "nzSm", "nzXs"], ["type", "text", "nz-input", "", "formControlName", "name", 3, "placeholder"], ["formControlName", "internal_user", "nzAllowClear", "", 1, "selectFilter", "mb-2", "mr-3", 3, "nzMode", "nzMaxTagCount", "nzPlaceHolder", "nzFocus", "keyup", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzInputReadOnly", "true", "formControlName", "task_date", 1, "w-100"], ["nzInputReadOnly", "true", "formControlName", "task_end_date", 1, "w-100"], ["formControlName", "voters", "nzAllowClear", "", 1, "selectFilter", "mb-2", "mr-3", 3, "nzMode", "nzMaxTagCount", "nzPlaceHolder", "nzFocus", "keyup"], ["formControlName", "booth", "nzAllowClear", "", 1, "selectFilter", "mb-2", "mr-3", 3, "nzMode", "nzMaxTagCount", "nzPlaceHolder", "nzFocus", "keyup"], ["formControlName", "ward", "nzAllowClear", "", 1, "selectFilter", "mb-2", "mr-3", 3, "nzMode", "nzMaxTagCount", "nzPlaceHolder", "nzFocus", "keyup"], ["formControlName", "sector", "nzAllowClear", "", 1, "selectFilter", "mb-2", "mr-3", 3, "nzMode", "nzMaxTagCount", "nzPlaceHolder", "nzFocus", "keyup"], ["formControlName", "places", "nzAllowClear", "", 1, "selectFilter", "mb-2", "mr-3", 3, "nzMaxTagCount", "nzPlaceHolder", "nzFocus", "keyup"], ["formControlName", "street", "nzAllowClear", "", 1, "selectFilter", "mb-2", "mr-3", 3, "nzMode", "nzMaxTagCount", "nzPlaceHolder", "nzFocus", "keyup"], [1, "d-flex", "justify-content-center"], ["nz-button", "", "nzType", "primary", 1, "px-5", 3, "disabled", "nzLoading", "click"], ["nz-button", "", "nzType", "link", "routerLink", "/task-management", 1, "ml-3", "px-5", "border"], [1, "d-flex", "justify-content-end", "align-items-center", "flex-wrap", "mb-5"], [1, "font-weight-normal", "mx-2", 3, "ngClass"], ["nzShowSearch", "", 1, "selectFilter", "mb-2", "mr-3", 3, "ngModel", "nzPlaceHolder", "ngModelChange"], [3, "nzValue", "nzLabel"], [3, "nzLabel", "nzValue"]], template: function AddEditTaskComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFocus", function AddEditTaskComponent_Template_nz_select_nzFocus_10_listener() { return ctx.gettaskLists(); })("keyup", function AddEditTaskComponent_Template_nz_select_keyup_10_listener($event) { return ctx.gettaskLists($event); })("ngModelChange", function AddEditTaskComponent_Template_nz_select_ngModelChange_10_listener($event) { return ctx.gettaskLists($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddEditTaskComponent_nz_option_11_Template, 1, 2, "nz-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-form-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nz-form-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nz-form-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nz-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFocus", function AddEditTaskComponent_Template_nz_select_nzFocus_29_listener() { return ctx.getInternalUser(); })("keyup", function AddEditTaskComponent_Template_nz_select_keyup_29_listener($event) { return ctx.getInternalUser($event); })("ngModelChange", function AddEditTaskComponent_Template_nz_select_ngModelChange_29_listener($event) { return ctx.getInternalUser($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AddEditTaskComponent_nz_option_30_Template, 1, 2, "nz-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nz-form-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "nz-date-picker", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "nz-form-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "nz-date-picker", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "nz-form-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "nz-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFocus", function AddEditTaskComponent_Template_nz_select_nzFocus_48_listener() { return ctx.getVoters(); })("keyup", function AddEditTaskComponent_Template_nz_select_keyup_48_listener($event) { return ctx.getVoters($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, AddEditTaskComponent_nz_option_49_Template, 1, 2, "nz-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "nz-form-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "nz-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFocus", function AddEditTaskComponent_Template_nz_select_nzFocus_55_listener() { return ctx.searchMasterData("Booth"); })("keyup", function AddEditTaskComponent_Template_nz_select_keyup_55_listener($event) { return ctx.searchMasterData("Booth", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, AddEditTaskComponent_nz_option_56_Template, 1, 2, "nz-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "nz-form-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "nz-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFocus", function AddEditTaskComponent_Template_nz_select_nzFocus_62_listener() { return ctx.searchMasterData("Ward"); })("keyup", function AddEditTaskComponent_Template_nz_select_keyup_62_listener($event) { return ctx.searchMasterData("Ward", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, AddEditTaskComponent_nz_option_63_Template, 1, 2, "nz-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "nz-form-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "nz-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFocus", function AddEditTaskComponent_Template_nz_select_nzFocus_69_listener() { return ctx.searchMasterData("Sector"); })("keyup", function AddEditTaskComponent_Template_nz_select_keyup_69_listener($event) { return ctx.searchMasterData("Sector", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, AddEditTaskComponent_nz_option_70_Template, 1, 2, "nz-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "nz-form-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "nz-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFocus", function AddEditTaskComponent_Template_nz_select_nzFocus_76_listener() { return ctx.searchMasterData("Places"); })("keyup", function AddEditTaskComponent_Template_nz_select_keyup_76_listener($event) { return ctx.searchMasterData("Places", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, AddEditTaskComponent_nz_option_77_Template, 1, 2, "nz-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "nz-form-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "nz-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFocus", function AddEditTaskComponent_Template_nz_select_nzFocus_83_listener() { return ctx.searchMasterData("Street"); })("keyup", function AddEditTaskComponent_Template_nz_select_keyup_83_listener($event) { return ctx.searchMasterData("Street", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, AddEditTaskComponent_nz_option_84_Template, 1, 2, "nz-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEditTaskComponent_Template_button_click_86_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.streetList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.taskForm.invalid ? true : false)("nzLoading", ctx.api_loading["button"]);
    } }, directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__["NzCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormControlComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_13__["NzDatePickerComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__["NzOptionComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZWRpdC10YXNrLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEditTaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-edit-task',
                templateUrl: './add-edit-task.component.html',
                styleUrls: ['./add-edit-task.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] }, { type: src_app_service_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] }, { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__["NzModalService"] }]; }, null); })();


/***/ }),

/***/ "Y/ZK":
/*!******************************************************************!*\
  !*** ./src/app/task-management/task-list/task-list.component.ts ***!
  \******************************************************************/
/*! exports provided: TaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/http.service */ "9NvV");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/upload */ "D9mS");
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/drawer */ "F6ss");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");






















function TaskListComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_ng_template_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.getTaskList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskListComponent_ng_container_48_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r11 + 1);
} }
function TaskListComponent_ng_container_48_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r13.page - 1) * ctx_r13.globalPageSize + (i_r11 + 1));
} }
const _c0 = function () { return ["/task-management/edit-task"]; };
const _c1 = function (a0) { return { id: a0 }; };
function TaskListComponent_ng_container_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TaskListComponent_ng_container_48_td_2_Template, 2, 1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TaskListComponent_ng_container_48_td_3_Template, 2, 1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r10 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.page == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.page > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c1, data_r10.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3._currLanguage == "en" ? data_r10 == null ? null : data_r10.name == null ? null : data_r10.name.en : data_r10 == null ? null : data_r10.name == null ? null : data_r10.name.hi, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3._currLanguage == "en" ? data_r10 == null ? null : data_r10.task_type == null ? null : data_r10.task_type.name == null ? null : data_r10.task_type.name.en : data_r10 == null ? null : data_r10.task_type == null ? null : data_r10.task_type.name == null ? null : data_r10.task_type.name.hi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3._currLanguage == "en" ? data_r10 == null ? null : data_r10.discription == null ? null : data_r10.discription.en : data_r10 == null ? null : data_r10.discription == null ? null : data_r10.discription.hi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3._currLanguage == "en" ? (data_r10 == null ? null : data_r10.internal_user == null ? null : data_r10.internal_user.first_name) + (data_r10 == null ? null : data_r10.internal_user == null ? null : data_r10.internal_user.last_name) : (data_r10 == null ? null : data_r10.internal_user == null ? null : data_r10.internal_user.first_name) + (data_r10 == null ? null : data_r10.internal_user == null ? null : data_r10.internal_user.last_name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((data_r10 == null ? null : data_r10.status) ? data_r10 == null ? null : data_r10.status : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((data_r10 == null ? null : data_r10.created_at) ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 13, data_r10 == null ? null : data_r10.created_at, "medium") : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((data_r10 == null ? null : data_r10.updated_at) ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 16, data_r10 == null ? null : data_r10.updated_at, "medium") : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((data_r10 == null ? null : data_r10.created_by) ? (data_r10 == null ? null : data_r10.created_by == null ? null : data_r10.created_by.first_name) + " " + (data_r10 == null ? null : data_r10.created_by == null ? null : data_r10.created_by.username) : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c1, data_r10 == null ? null : data_r10.id));
} }
function TaskListComponent_ng_template_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r5.total_count, " Results Found ");
} }
function TaskListComponent_ng_container_52_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-upload", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFileListChange", function TaskListComponent_ng_container_52_Template_nz_upload_nzFileListChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.fileList = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzBeforeUpload", ctx_r6.beforeUploadName)("nzMultiple", false)("nzFileList", ctx_r6.fileList);
} }
function TaskListComponent_section_53_nz_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 49);
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r27.id)("nzLabel", ctx_r18._currLanguage == "en" ? (item_r27 == null ? null : item_r27.name == null ? null : item_r27.name.en) + "/" + (item_r27 == null ? null : item_r27.Ward == null ? null : item_r27.Ward.name == null ? null : item_r27.Ward.name.en) : (item_r27 == null ? null : item_r27.name == null ? null : item_r27.name.hi) + "/" + (item_r27 == null ? null : item_r27.Ward == null ? null : item_r27.Ward.name == null ? null : item_r27.Ward.name.hi));
} }
function TaskListComponent_section_53_nz_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 49);
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r28.id)("nzLabel", item_r28 == null ? null : item_r28.name == null ? null : item_r28.name.en);
} }
function TaskListComponent_section_53_nz_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 49);
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r29.id)("nzLabel", item_r29 == null ? null : item_r29.name == null ? null : item_r29.name.en);
} }
function TaskListComponent_section_53_nz_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 49);
} if (rf & 2) {
    const item_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r30.id)("nzLabel", item_r30 == null ? null : item_r30.name == null ? null : item_r30.name.en);
} }
function TaskListComponent_section_53_nz_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 49);
} if (rf & 2) {
    const item_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r31.id)("nzLabel", item_r31 == null ? null : item_r31.name == null ? null : item_r31.name.en);
} }
function TaskListComponent_section_53_nz_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 49);
} if (rf & 2) {
    const item_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r32.id)("nzLabel", item_r32 == null ? null : item_r32.name == null ? null : item_r32.name.en);
} }
function TaskListComponent_section_53_nz_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 50);
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", ctx_r24._currLanguage == "en" ? (item_r33 == null ? null : item_r33.first_name) ? (item_r33 == null ? null : item_r33.first_name) + ((item_r33 == null ? null : item_r33.last_name) ? " " + (item_r33 == null ? null : item_r33.last_name) : "") : "" : ctx_r24.first_name)("nzValue", item_r33.id);
} }
function TaskListComponent_section_53_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Filters ");
} }
function TaskListComponent_section_53_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-drawer", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function TaskListComponent_section_53_Template_nz_drawer_nzOnClose_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.quickViewToggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Booth: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskListComponent_section_53_Template_nz_select_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36._currBooth = $event; })("nzFocus", function TaskListComponent_section_53_Template_nz_select_nzFocus_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.searchStaticDataGlobalFunction("Booth"); })("keyup", function TaskListComponent_section_53_Template_nz_select_keyup_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.searchStaticDataGlobalFunction("Booth", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TaskListComponent_section_53_nz_option_8_Template, 1, 2, "nz-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ward: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskListComponent_section_53_Template_nz_select_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39._currWard = $event; })("nzFocus", function TaskListComponent_section_53_Template_nz_select_nzFocus_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.searchStaticDataGlobalFunction("Ward"); })("keyup", function TaskListComponent_section_53_Template_nz_select_keyup_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.searchStaticDataGlobalFunction("Ward", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TaskListComponent_section_53_nz_option_13_Template, 1, 2, "nz-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sector: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nz-select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskListComponent_section_53_Template_nz_select_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42._currSector = $event; })("nzFocus", function TaskListComponent_section_53_Template_nz_select_nzFocus_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.searchStaticDataGlobalFunction("Sector"); })("keyup", function TaskListComponent_section_53_Template_nz_select_keyup_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.searchStaticDataGlobalFunction("Sector", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TaskListComponent_section_53_nz_option_18_Template, 1, 2, "nz-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Assembly: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nz-select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskListComponent_section_53_Template_nz_select_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45._crrAssembly = $event; })("nzFocus", function TaskListComponent_section_53_Template_nz_select_nzFocus_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.searchStaticDataGlobalFunction("Assembly"); })("keyup", function TaskListComponent_section_53_Template_nz_select_keyup_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.searchStaticDataGlobalFunction("Sector", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TaskListComponent_section_53_nz_option_23_Template, 1, 2, "nz-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Street: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nz-select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskListComponent_section_53_Template_nz_select_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48._currStreet = $event; })("nzFocus", function TaskListComponent_section_53_Template_nz_select_nzFocus_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.searchStaticDataGlobalFunction("Street"); })("keyup", function TaskListComponent_section_53_Template_nz_select_keyup_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.searchStaticDataGlobalFunction("Street", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TaskListComponent_section_53_nz_option_28_Template, 1, 2, "nz-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Lane: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nz-select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskListComponent_section_53_Template_nz_select_ngModelChange_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51._currLane = $event; })("nzFocus", function TaskListComponent_section_53_Template_nz_select_nzFocus_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.searchStaticDataGlobalFunction("Lane"); })("keyup", function TaskListComponent_section_53_Template_nz_select_keyup_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.searchStaticDataGlobalFunction("Lane", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, TaskListComponent_section_53_nz_option_33_Template, 1, 2, "nz-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nz-range-picker", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskListComponent_section_53_Template_nz_range_picker_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Internal User: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nz-select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskListComponent_section_53_Template_nz_select_ngModelChange_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55._currUser = $event; })("nzFocus", function TaskListComponent_section_53_Template_nz_select_nzFocus_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.getInternalUser(); })("keyup", function TaskListComponent_section_53_Template_nz_select_keyup_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r57.getInternalUser($event); })("ngModelChange", function TaskListComponent_section_53_Template_nz_select_ngModelChange_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.getInternalUser($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, TaskListComponent_section_53_nz_option_42_Template, 1, 2, "nz-option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_section_53_Template_button_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r59.quickViewToggle(); return ctx_r59.getTaskList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_section_53_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.resetFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, TaskListComponent_section_53_ng_template_48_Template, 1, 0, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzWidth", "350px")("nzTitle", _r25)("nzClosable", false)("nzVisible", ctx_r7.quickViewVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7._currBooth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.boothList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7._currWard);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.wardList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7._currSector);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.sectorList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7._crrAssembly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.assemblyList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7._currStreet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.streetList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7._currLane);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.laneList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.date)("nzDisabledDate", ctx_r7.disabledDate)("nzRanges", ctx_r7.customRanges);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7._currUser)("nzMode", "multiple")("nzMaxTagCount", 2)("nzPlaceHolder", ctx_r7._currLanguage == "en" ? "Select Internal User" : "\u092E\u0924\u0926\u093E\u0924\u093E\u0913\u0902 \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.internal_user_list);
} }
const _c2 = function () { return { x: "1500px", y: "50vh" }; };
class TaskListComponent {
    constructor(http, message) {
        this.http = http;
        this.message = message;
        this.quickViewVisible = false;
        this.disabledDate = (current) => 
        // Can not select days before today and today
        Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInCalendarDays"])(current, new Date()) > 0;
        this.customRanges = {
            Today: [new Date(), new Date()],
            'Last 7 days': [new Date().setDate(new Date().getDate() - 7), new Date()],
            'This Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1), new Date()],
            'Last Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 1), new Date(new Date().getFullYear(), new Date().getMonth(), -1, 30, 31)],
            'Last 3 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 3), new Date(new Date().getFullYear(), new Date().getMonth(), -1, 30, 31)],
            'Last 6 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 6), new Date(new Date().getFullYear(), new Date().getMonth(), -1, 30, 31)],
            'This Year': [new Date(new Date().getFullYear(), 0, 1), new Date()],
            'Last Year': [new Date(new Date().getFullYear() - 1, 0, 1), new Date(new Date().getFullYear() - 1, 11, 31)],
        };
        // Table:
        this.taskList = [];
        this.page = 1;
        this.globalPageSize = 30;
        this.api_loader = { 'list': false, 'button': false };
        this.boothList = [];
        this.wardList = [];
        this.sectorList = [];
        this.assemblyList = [];
        this.streetList = [];
        this.laneList = [];
        this.isImport = false;
        this.fileList = [];
        this.beforeUploadName = (file) => {
            console.log(file === null || file === void 0 ? void 0 : file.type);
            if (!(((file === null || file === void 0 ? void 0 : file.type) == 'xlsx' || (file === null || file === void 0 ? void 0 : file.type) == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'))) {
                this.fileList = [];
                this._currentFileName = null;
                this.message.error('Please check the file type');
                return false;
            }
            this.fileList = [];
            this.fileList = this.fileList.concat(file);
            this._currentFileName = file;
            return false;
        };
        this.isOkBtn = false;
        this.internal_user_list = [];
    }
    ngOnInit() {
        this._currLanguage = localStorage.getItem("appLanguage") || 'en';
        this.getTaskList();
    }
    getTaskList(tableFilter) {
        var _a;
        this.api_loader['list'] = true;
        let data = { 'end_point': 'FETCH_VOTER_LIST_API_URL' };
        if (tableFilter) {
            this.page = tableFilter === null || tableFilter === void 0 ? void 0 : tableFilter.pageIndex;
            this.globalPageSize = tableFilter === null || tableFilter === void 0 ? void 0 : tableFilter.pageSize;
            data['page'] = this.page;
            data['limit'] = this.globalPageSize;
        }
        else {
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
        this.http.getTaskList(data).subscribe((res) => {
            if (res.success) {
                this.taskList = res.data;
                this.total_count = res.total_count;
                this.api_loader['list'] = false;
            }
            else {
                this.api_loader['list'] = false;
            }
        });
    }
    resetFilter() {
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
    searchStaticDataGlobalFunction(event, data) {
        clearTimeout(this.debounce);
        this.debounce = setTimeout(() => {
            let data = { model_name: event };
            this.http.getMasterData(data).subscribe((res) => {
                if (res.success) {
                    if (event == 'Booth') {
                        this.boothList = res.data;
                    }
                    else if (event == 'Ward') {
                        this.wardList = res.data;
                    }
                    else if (event == 'Sector') {
                        this.sectorList = res.data;
                    }
                    else if (event == 'Street') {
                        this.streetList = res.data;
                    }
                    else if (event == 'Lane') {
                        this.laneList = res.data;
                    }
                    else if (event == 'Assembly') {
                        this.assemblyList = res.data;
                    }
                }
            });
        }, 500);
    }
    quickViewToggle() {
        this.quickViewVisible = !this.quickViewVisible;
    }
    onDownloadSampleFile() {
        const downloadloader = this.message.loading('Downloading File..', { nzDuration: 0 }).messageId;
        let result = '../assets/static_files/TaskManagement.xlsx';
        file_saver__WEBPACK_IMPORTED_MODULE_2__(result, 'TaskManagement.xlsx');
        this.message.remove(downloadloader);
    }
    handleOk() {
        this.isOkBtn = true;
        let formData = new FormData();
        formData.append('file', this._currentFileName);
        this.http.importTask(formData).subscribe((res) => {
            if (res.success) {
                this.message.success('File uploaded successfully');
                this.isOkBtn = false;
                this.isImport = false;
                this.fileList = [];
                this.getTaskList();
            }
            else {
                this.isOkBtn = false;
                this.isImport = false;
                this.fileList = [];
                this.message.error(res.message);
            }
        });
    }
    getInternalUser(key) {
        if (key) {
            clearTimeout(this.in_user_debounce);
            this.in_user_debounce = setTimeout(() => {
                let data = { 'end_point': 'FETCH_VOTER_LIST_API_URL', 'search_param': key.target.value };
                this.http.getTeamList(data).subscribe((res) => {
                    if (res.success) {
                        this.internal_user_list = res.data;
                        console.log(this.internal_user_list);
                    }
                });
            }, 500);
        }
        else {
            let data = { 'end_point': 'FETCH_VOTER_LIST_API_URL' };
            this.http.getTeamList(data).subscribe((res) => {
                if (res.success) {
                    this.internal_user_list = res.data;
                    console.log(this.internal_user_list);
                }
            });
        }
    }
}
TaskListComponent.ɵfac = function TaskListComponent_Factory(t) { return new (t || TaskListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"])); };
TaskListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskListComponent, selectors: [["app-task-list"]], decls: 54, vars: 15, consts: [[1, "d-block", "align-items-center", "mb-3"], [1, "row"], [1, "col-12", "col-lg-4", "mb-2"], [1, "d-flex"], ["nzSearch", "", 3, "nzAddOnAfter"], ["type", "text", "nz-input", "", "placeholder", "Search By Name", 3, "ngModel", "ngModelChange", "keyup.enter"], ["suffixIconButton", ""], ["nz-button", "", "nzType", "default", "nzShape", "circle", 1, "ml-3", "mb-2", 3, "click"], ["nz-icon", "", "nzType", "undo"], [1, "col-lg-8", "col-12", "mb-2", "d-flex", "flex-wrap", "justify-content-end"], ["nz-button", "", "nzType", "link", 1, "mb-2", "mr-3", "border", 3, "click"], ["nz-icon", "", "nzType", "download", "nzTheme", "outline", 1, "pr-2"], ["nz-button", "", "nzType", "primary", "routerLink", "/task-management/add-task", 1, "mb-2", "mr-3"], [1, "d-flex", "justify-content-end", "mb-3"], [1, "totalCount"], [3, "nzData", "nzTotal", "nzFrontPagination", "nzShowSizeChanger", "nzPageIndex", "nzPageSize", "nzShowTotal", "nzLoading", "nzScroll", "nzQueryParams"], ["rowSelectionTable", ""], ["nzWidth", "4rem"], ["nzWidth", "8rem", 1, "text-left"], ["nzWidth", "8rem"], ["nzWidth", "8rem", "nzRight", ""], [4, "ngFor", "ngForOf"], ["botTotalCount", ""], ["nzTitle", "Import Tasks", 3, "nzVisible", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], [4, "ngIf"], ["nz-button", "", "nzType", "secondary", "nzSearch", "", 3, "click"], ["nz-icon", "", "nzType", "search"], ["nzWidth", "4rem", 4, "ngIf"], [3, "routerLink", "queryParams"], ["nz-button", "", "nzType", "link", "routerLink", "/task-management/edit-task", 1, "border", 3, "queryParams"], [1, "font-weight-semibold"], ["nzListType", "picture", "nzType", "drag", 3, "nzBeforeUpload", "nzMultiple", "nzFileList", "nzFileListChange"], ["nz-button", "", "nzType", "primary", 1, "my-md-4"], ["nzPlacement", "right", 3, "nzWidth", "nzTitle", "nzClosable", "nzVisible", "nzOnClose"], [1, "d-flex", "flex-wrap", "justify-content-start", "align-items-center"], [1, "d-flex", "flex-column"], [1, "d-flex", "align-items-start", "flex-column", "mb-3"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select Booth/Ward", 1, "selectFilter", "mb-2", "mr-3", 3, "ngModel", "ngModelChange", "nzFocus", "keyup"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select Ward", 1, "selectFilter", "mb-2", "mr-3", 3, "ngModel", "ngModelChange", "nzFocus", "keyup"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select Sector", 1, "selectFilter", "mb-2", "mr-3", 3, "ngModel", "ngModelChange", "nzFocus", "keyup"], [1, "mb-2", "me-2", "mr-md-0", 2, "min-width", "10rem", 3, "ngModel", "nzDisabledDate", "nzRanges", "ngModelChange"], ["nzAllowClear", "", 1, "selectFilter", "mb-2", "mr-3", 3, "ngModel", "nzMode", "nzMaxTagCount", "nzPlaceHolder", "ngModelChange", "nzFocus", "keyup"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", "mt-5", "align-items-center"], ["nz-button", "", "nzType", "primary", 1, "mr-3", 3, "click"], ["nz-button", "", "nzType", "link", 3, "click"], ["filtersTemplate", ""], [3, "nzValue", "nzLabel"], [3, "nzLabel", "nzValue"]], template: function TaskListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-input-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskListComponent_Template_input_ngModelChange_5_listener($event) { return ctx._currSearchValue = $event; })("keyup.enter", function TaskListComponent_Template_input_keyup_enter_5_listener() { return ctx.getTaskList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TaskListComponent_ng_template_6_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_Template_button_click_8_listener() { return ctx.resetFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_Template_button_click_11_listener() { return ctx.isImport = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Import Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_Template_button_click_13_listener() { return ctx.onDownloadSampleFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Download Sample File ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_Template_button_click_16_listener() { return ctx.quickViewVisible = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "+ Add New Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nz-table", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzQueryParams", function TaskListComponent_Template_nz_table_nzQueryParams_23_listener($event) { return ctx.taskList[0] ? ctx.getTaskList($event) : null; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sr. No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Task Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Internal User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Created At");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Updated At");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Created By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, TaskListComponent_ng_container_48_Template, 26, 24, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, TaskListComponent_ng_template_49_Template, 3, 1, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "nz-modal", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function TaskListComponent_Template_nz_modal_nzVisibleChange_51_listener($event) { return ctx.isImport = $event; })("nzOnCancel", function TaskListComponent_Template_nz_modal_nzOnCancel_51_listener() { return ctx.isImport = false; })("nzOnOk", function TaskListComponent_Template_nz_modal_nzOnOk_51_listener() { return ctx.handleOk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, TaskListComponent_ng_container_52_Template, 4, 3, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, TaskListComponent_section_53_Template, 50, 24, "section", 25);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAddOnAfter", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._currSearchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.taskList)("nzTotal", ctx.total_count)("nzFrontPagination", false)("nzShowSizeChanger", true)("nzPageIndex", ctx.page)("nzPageSize", ctx.globalPageSize)("nzShowTotal", _r4)("nzLoading", ctx.api_loader["list"])("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.taskList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isImport);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quickViewVisible);
    } }, directives: [ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__["NzWaveDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLink"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_13__["NzCardComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzCellFixedDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__["NzModalComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__["NzModalContentDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_17__["NzUploadComponent"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_18__["NzDrawerComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_19__["NzSelectComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_20__["NzDatePickerComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_20__["NzRangePickerComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_19__["NzOptionComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task-list',
                templateUrl: './task-list.component.html',
                styleUrls: ['./task-list.component.css']
            }]
    }], function () { return [{ type: src_app_service_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }, { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] }]; }, null); })();


/***/ }),

/***/ "rru9":
/*!*******************************************************************!*\
  !*** ./src/app/task-management/task-management-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: TaskManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskManagementRoutingModule", function() { return TaskManagementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-list/task-list.component */ "Y/ZK");
/* harmony import */ var _add_edit_task_add_edit_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-task/add-edit-task.component */ "Blnk");






const routes = [
    {
        path: '',
        // canActivate: [NgxPermissionsGuard],
        component: _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_2__["TaskListComponent"],
        data: {
            parent: 'Task',
            title: 'Task List',
            isButton: false,
            isHome: false,
            custom_url: '/task-management',
        }
    },
    {
        path: '',
        data: {
            parent: 'Task',
            title: 'Task List',
            custom_url: '/task-management',
        },
        children: [
            {
                path: 'add-task',
                // redirectTo:'/task-management/add-task',
                // canActivate: [NgxPermissionsGuard],
                component: _add_edit_task_add_edit_task_component__WEBPACK_IMPORTED_MODULE_3__["AddEditTaskComponent"],
                data: {
                    parent: 'Task',
                    title: 'Add Task',
                    isButton: false,
                    isHome: false,
                    custom_url: '/task-management/add-task',
                }
            },
            {
                path: 'edit-task',
                // canActivate: [NgxPermissionsGuard],
                component: _add_edit_task_add_edit_task_component__WEBPACK_IMPORTED_MODULE_3__["AddEditTaskComponent"],
                data: {
                    parent: 'Task',
                    title: 'Edit Task',
                    isButton: false,
                    isHome: false,
                    custom_url: '/task-management/edit-task',
                }
            },
        ]
    },
];
class TaskManagementRoutingModule {
}
TaskManagementRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TaskManagementRoutingModule });
TaskManagementRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TaskManagementRoutingModule_Factory(t) { return new (t || TaskManagementRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TaskManagementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskManagementRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=task-management-task-management-module-es2015.js.map