(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["voter-voter-module"],{

/***/ "4bBO":
/*!**********************************************************!*\
  !*** ./src/app/voter/voter-list/voter-list.component.ts ***!
  \**********************************************************/
/*! exports provided: VoterListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoterListComponent", function() { return VoterListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ "JcrP");
/* harmony import */ var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/global.service */ "0ZK0");
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/http.service */ "9NvV");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "IvDN");
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/drawer */ "F6ss");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/upload */ "D9mS");
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ "ix5O");

































function VoterListComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterListComponent_ng_template_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.getVotersList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoterListComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 36);
} }
const _c0 = function (a0) { return { id: a0 }; };
function VoterListComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-card", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-avatar", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-tag", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-tag", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ward No J");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r3.api_loader["list"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/voter/view-profile")("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, item_r12 == null ? null : item_r12.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzText", ctx_r3.getPipeValue(item_r12 == null ? null : item_r12.full_name_en));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((item_r12 == null ? null : item_r12.full_name_en) ? ctx_r3._currLanguage == "en" ? item_r12 == null ? null : item_r12.full_name_en : item_r12 == null ? null : item_r12.full_name_hi : "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("EPIC_NO: ", item_r12 == null ? null : item_r12.epic_no, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Booth No ", item_r12 == null ? null : item_r12.booth, "");
} }
function VoterListComponent_ng_container_64_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r14 + 1);
} }
function VoterListComponent_ng_container_64_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r16.pageIndex - 1) * ctx_r16.globalPageSize + (i_r14 + 1), " ");
} }
function VoterListComponent_ng_container_64_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 66);
} }
function VoterListComponent_ng_container_64_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 67);
} }
function VoterListComponent_ng_container_64_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Not updated ");
} }
function VoterListComponent_ng_container_64_nz_card_52_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Created By: ", item_r27 == null ? null : item_r27.created_by, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 2, item_r27 == null ? null : item_r27.created_at, "medium"), ")");
} }
function VoterListComponent_ng_container_64_nz_card_52_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_sec_audit_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", sub_sec_audit_r32.key, " content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sub_sec_audit_r32.key == "Updated at" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 3, sub_sec_audit_r32.old_value, "medium") : sub_sec_audit_r32.old_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sub_sec_audit_r32.key == "Updated at" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 6, sub_sec_audit_r32.new_value, "medium") : sub_sec_audit_r32.new_value, " ");
} }
function VoterListComponent_ng_container_64_nz_card_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-card", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-collapse", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-collapse-panel", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VoterListComponent_ng_container_64_nz_card_52_ng_template_3_Template, 5, 5, "ng-template", null, 71, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VoterListComponent_ng_container_64_nz_card_52_div_5_Template, 11, 9, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const data_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r22._currentAuditId == data_r13.id ? ctx_r22.api_loader["accordian"] : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzExpandIconPosition", ctx_r22.right);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", _r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r27 == null ? null : item_r27.key_changes);
} }
function VoterListComponent_ng_container_64_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Audit Trail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["/voter/view-profile"]; };
const _c2 = function () { return ["/voter/edit-voter"]; };
function VoterListComponent_ng_container_64_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzExpandChange", function VoterListComponent_ng_container_64_Template_td_nzExpandChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const data_r13 = ctx.$implicit; const i_r14 = ctx.index; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.onExpandChange(data_r13.id, $event, i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCheckedChange", function VoterListComponent_ng_container_64_Template_td_nzCheckedChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const data_r13 = ctx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.onItemChecked(data_r13.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VoterListComponent_ng_container_64_td_4_Template, 2, 1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VoterListComponent_ng_container_64_td_5_Template, 2, 1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, VoterListComponent_ng_container_64_span_20_Template, 1, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, VoterListComponent_ng_container_64_span_21_Template, 1, 0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, VoterListComponent_ng_container_64_ng_template_22_Template, 1, 0, "ng-template", null, 53, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterListComponent_ng_container_64_Template_a_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const data_r13 = ctx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.getSwitchValue(data_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nz-dropdown-menu", null, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ul", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "View Voter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "nz-page-header", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, VoterListComponent_ng_container_64_nz_card_52_Template, 6, 4, "nz-card", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, VoterListComponent_ng_container_64_ng_template_53_Template, 3, 0, "ng-template", null, 65, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r13 = ctx.$implicit;
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](54);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzExpand", ctx_r5.expandSet.has(data_r13.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzChecked", ctx_r5.setOfCheckedId.has(data_r13.id))("nzDisabled", data_r13.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.pageIndex == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.pageIndex > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzWidth", "12rem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](41, _c0, data_r13.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5._currLanguage == "en" ? (data_r13 == null ? null : data_r13.first_name_en) + " " + (data_r13 == null ? null : data_r13.last_name_en) : (data_r13 == null ? null : data_r13.first_name_hi) + " " + (data_r13 == null ? null : data_r13.last_name_hi), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzWidth", "10rem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((data_r13 == null ? null : data_r13.mobile) ? data_r13 == null ? null : data_r13.mobile : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((data_r13 == null ? null : data_r13.facebook_link) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((data_r13 == null ? null : data_r13.caste) ? data_r13 == null ? null : data_r13.caste : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzWidth", "10rem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r13 == null ? null : data_r13.epic_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (data_r13 == null ? null : data_r13.age) + ((data_r13 == null ? null : data_r13.gender) ? " / " + (data_r13 == null ? null : data_r13.gender) : ""), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r13 == null ? null : data_r13.is_benificary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(data_r13 == null ? null : data_r13.is_benificary))("ngIfElse", _r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((data_r13 == null ? null : data_r13.gali) ? data_r13 == null ? null : data_r13.gali : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((data_r13 == null ? null : data_r13.booth) ? data_r13 == null ? null : data_r13.booth : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r13 == null ? null : data_r13.part_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", data_r13.stockist_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5._currLanguage == "en" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](33, 36, data_r13 == null ? null : data_r13.section_name_en, 0, 18) : ctx_r5.ata == null ? null : ctx_r5.ata.section_name_hi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5._currLanguage == "en" ? data_r13 == null ? null : data_r13.section_no : data_r13 == null ? null : data_r13.section_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzClickHide", false)("nzTrigger", "click")("nzPlacement", "bottomRight")("nzDropdownMenu", _r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](44, _c0, data_r13.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](46, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](47, _c0, data_r13.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzExpand", ctx_r5.expandSet.has(data_r13.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", data_r13 == null ? null : data_r13.auditDataset);
} }
function VoterListComponent_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r7.total_count, " Results Found ");
} }
function VoterListComponent_section_67_section_2_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterListComponent_section_67_section_2_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r43.createNewFollow("activity"); return ctx_r43.isActivityModal = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Activity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterListComponent_section_67_section_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r45.createNewFollow("followUp"); return ctx_r45.isActivityModal = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add FollowUp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "link");
} }
function VoterListComponent_section_67_ng_template_3_nz_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading Data... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoterListComponent_section_67_ng_template_3_nz_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 98);
} if (rf & 2) {
    const item_r58 = ctx.$implicit;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r58.id)("nzLabel", ctx_r47._currLanguage == "en" ? (item_r58 == null ? null : item_r58.name == null ? null : item_r58.name.en) + ((item_r58 == null ? null : item_r58.Ward) ? "/" + (item_r58 == null ? null : item_r58.Ward == null ? null : item_r58.Ward.name == null ? null : item_r58.Ward.name.en) : "NA") : (item_r58 == null ? null : item_r58.name == null ? null : item_r58.name.hi) + ((item_r58 == null ? null : item_r58.Ward) ? "/" + (item_r58 == null ? null : item_r58.Ward == null ? null : item_r58.Ward.name == null ? null : item_r58.Ward.name.hi) : "NA"));
} }
function VoterListComponent_section_67_ng_template_3_nz_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading Data... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoterListComponent_section_67_ng_template_3_nz_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 98);
} if (rf & 2) {
    const item_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r59.id)("nzLabel", item_r59 == null ? null : item_r59.name == null ? null : item_r59.name.en);
} }
function VoterListComponent_section_67_ng_template_3_nz_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading Data... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoterListComponent_section_67_ng_template_3_nz_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 98);
} if (rf & 2) {
    const item_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r60.id)("nzLabel", item_r60 == null ? null : item_r60.name == null ? null : item_r60.name.en);
} }
function VoterListComponent_section_67_ng_template_3_nz_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading Data... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoterListComponent_section_67_ng_template_3_nz_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 98);
} if (rf & 2) {
    const item_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r61.id)("nzLabel", item_r61 == null ? null : item_r61.name == null ? null : item_r61.name.en);
} }
function VoterListComponent_section_67_ng_template_3_nz_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading Data... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoterListComponent_section_67_ng_template_3_nz_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 98);
} if (rf & 2) {
    const item_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r62.id)("nzLabel", item_r62 == null ? null : item_r62.name == null ? null : item_r62.name.en);
} }
function VoterListComponent_section_67_ng_template_3_nz_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading Data... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoterListComponent_section_67_ng_template_3_nz_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 98);
} if (rf & 2) {
    const item_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r63.id)("nzLabel", item_r63 == null ? null : item_r63.name == null ? null : item_r63.name.en);
} }
function VoterListComponent_section_67_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Booth: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-select", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoterListComponent_section_67_ng_template_3_Template_nz_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r64._currBooth = $event; })("nzFocus", function VoterListComponent_section_67_ng_template_3_Template_nz_select_nzFocus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r66.searchStaticDataGlobalFunction("Booth"); })("keyup", function VoterListComponent_section_67_ng_template_3_Template_nz_select_keyup_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r67.searchStaticDataGlobalFunction("Booth", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VoterListComponent_section_67_ng_template_3_nz_option_6_Template, 3, 0, "nz-option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VoterListComponent_section_67_ng_template_3_nz_option_7_Template, 1, 2, "nz-option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ward: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-select", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoterListComponent_section_67_ng_template_3_Template_nz_select_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r68._currWard = $event; })("nzFocus", function VoterListComponent_section_67_ng_template_3_Template_nz_select_nzFocus_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r69.searchStaticDataGlobalFunction("Ward"); })("keyup", function VoterListComponent_section_67_ng_template_3_Template_nz_select_keyup_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r70.searchStaticDataGlobalFunction("Ward", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, VoterListComponent_section_67_ng_template_3_nz_option_12_Template, 3, 0, "nz-option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, VoterListComponent_section_67_ng_template_3_nz_option_13_Template, 1, 2, "nz-option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sector: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nz-select", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoterListComponent_section_67_ng_template_3_Template_nz_select_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r71._currSector = $event; })("nzFocus", function VoterListComponent_section_67_ng_template_3_Template_nz_select_nzFocus_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r72.searchStaticDataGlobalFunction("Sector"); })("keyup", function VoterListComponent_section_67_ng_template_3_Template_nz_select_keyup_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r73.searchStaticDataGlobalFunction("Sector", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, VoterListComponent_section_67_ng_template_3_nz_option_18_Template, 3, 0, "nz-option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, VoterListComponent_section_67_ng_template_3_nz_option_19_Template, 1, 2, "nz-option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Assembly: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nz-select", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoterListComponent_section_67_ng_template_3_Template_nz_select_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r74._crrAssembly = $event; })("nzFocus", function VoterListComponent_section_67_ng_template_3_Template_nz_select_nzFocus_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r75.searchStaticDataGlobalFunction("Assembly"); })("keyup", function VoterListComponent_section_67_ng_template_3_Template_nz_select_keyup_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r76.searchStaticDataGlobalFunction("Assembly", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, VoterListComponent_section_67_ng_template_3_nz_option_24_Template, 3, 0, "nz-option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, VoterListComponent_section_67_ng_template_3_nz_option_25_Template, 1, 2, "nz-option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Street: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nz-select", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoterListComponent_section_67_ng_template_3_Template_nz_select_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r77._currStreet = $event; })("nzFocus", function VoterListComponent_section_67_ng_template_3_Template_nz_select_nzFocus_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r78.searchStaticDataGlobalFunction("Street"); })("keyup", function VoterListComponent_section_67_ng_template_3_Template_nz_select_keyup_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r79.searchStaticDataGlobalFunction("Street", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, VoterListComponent_section_67_ng_template_3_nz_option_30_Template, 3, 0, "nz-option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, VoterListComponent_section_67_ng_template_3_nz_option_31_Template, 1, 2, "nz-option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Lane: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "nz-select", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoterListComponent_section_67_ng_template_3_Template_nz_select_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r80._currLane = $event; })("nzFocus", function VoterListComponent_section_67_ng_template_3_Template_nz_select_nzFocus_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r81.searchStaticDataGlobalFunction("Lane"); })("keyup", function VoterListComponent_section_67_ng_template_3_Template_nz_select_keyup_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r82.searchStaticDataGlobalFunction("Lane", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, VoterListComponent_section_67_ng_template_3_nz_option_36_Template, 3, 0, "nz-option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, VoterListComponent_section_67_ng_template_3_nz_option_37_Template, 1, 2, "nz-option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Is Benificary: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nz-select", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoterListComponent_section_67_ng_template_3_Template_nz_select_ngModelChange_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r83._currBenificary = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "nz-option", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "nz-option", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterListComponent_section_67_ng_template_3_Template_button_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r84.quickViewToggle(); return ctx_r84.getVotersList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterListComponent_section_67_ng_template_3_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r85.resetFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r40._currBooth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r40.isSelectLoader["Booth"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r40.boothList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r40._currWard);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r40.isSelectLoader["Ward"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r40.wardList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r40._currSector);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r40.isSelectLoader["Sector"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r40.sectorList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r40._crrAssembly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r40.isSelectLoader["Assembly"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r40.assemblyList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r40._currStreet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r40.isSelectLoader["Street"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r40.streetList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r40._currLane);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r40.isSelectLoader["Lane"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r40.laneList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r40._currBenificary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", true)("nzLabel", "True");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", false)("nzLabel", "False");
} }
function VoterListComponent_section_67_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterListComponent_section_67_ng_template_5_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r86.quickViewToggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42._currToggleActions == "multipleAction" ? "Multiple Actions" : "Filters");
} }
function VoterListComponent_section_67_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-drawer", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function VoterListComponent_section_67_Template_nz_drawer_nzOnClose_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r88.quickViewToggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VoterListComponent_section_67_section_2_Template, 6, 2, "section", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VoterListComponent_section_67_ng_template_3_Template, 49, 23, "ng-template", null, 84, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VoterListComponent_section_67_ng_template_5_Template, 4, 1, "ng-template", null, 85, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzWidth", "350px")("nzTitle", _r41)("nzClosable", false)("nzVisible", ctx_r8.quickViewVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8._currToggleActions == "multipleAction")("ngIfElse", _r39);
} }
function VoterListComponent_section_68_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-form-label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-form-control", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-time-picker", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", "Please select Date");
} }
function VoterListComponent_section_68_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterListComponent_section_68_div_21_div_1_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100); const i_r98 = ctx.index; const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r99.deleteEmployee(i_r98); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r97 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r97 == null ? null : item_r97.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "delete")("nzTheme", "outline");
} }
function VoterListComponent_section_68_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VoterListComponent_section_68_div_21_div_1_Template, 4, 3, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r91.fileList);
} }
function VoterListComponent_section_68_div_22_nz_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 98);
} if (rf & 2) {
    const item_r102 = ctx.$implicit;
    const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r102 == null ? null : item_r102.id)("nzLabel", ctx_r101._currLanguage == "en" ? item_r102 == null ? null : item_r102.name == null ? null : item_r102.name.en : item_r102 == null ? null : item_r102.name == null ? null : item_r102.name.hi);
} }
function VoterListComponent_section_68_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-form-label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mark Activity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-form-control", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-select", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFocus", function VoterListComponent_section_68_div_22_Template_nz_select_nzFocus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r103.getActivityList(); })("click", function VoterListComponent_section_68_div_22_Template_nz_select_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r105.isDirty = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VoterListComponent_section_68_div_22_nz_option_6_Template, 1, 2, "nz-option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r92.activityList);
} }
function VoterListComponent_section_68_div_23_nz_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 98);
} if (rf & 2) {
    const item_r107 = ctx.$implicit;
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r107 == null ? null : item_r107.id)("nzLabel", ctx_r106._currLanguage == "en" ? item_r107 == null ? null : item_r107.name == null ? null : item_r107.name.en : item_r107 == null ? null : item_r107.name == null ? null : item_r107.name.hi);
} }
function VoterListComponent_section_68_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-form-label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mark Followup ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-form-control", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-select", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFocus", function VoterListComponent_section_68_div_23_Template_nz_select_nzFocus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r108.getFolloupList(); })("click", function VoterListComponent_section_68_div_23_Template_nz_select_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r110.isDirty = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VoterListComponent_section_68_div_23_nz_option_6_Template, 1, 2, "nz-option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r93.followUpList);
} }
function VoterListComponent_section_68_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c3 = function () { return { height: "85vh" }; };
function VoterListComponent_section_68_Template(rf, ctx) { if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-drawer", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function VoterListComponent_section_68_Template_nz_drawer_nzOnClose_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r111.quickViewToggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-form-label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-form-control", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nz-date-picker", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, VoterListComponent_section_68_div_12_Template, 7, 5, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nz-form-label", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Upload Files ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-upload", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, VoterListComponent_section_68_div_21_Template, 2, 1, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, VoterListComponent_section_68_div_22_Template, 7, 5, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, VoterListComponent_section_68_div_23_Template, 7, 5, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nz-form-label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Comments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nz-form-control", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "textarea", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterListComponent_section_68_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r113.submitForm(ctx_r113.loginForm); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, VoterListComponent_section_68_ng_template_33_Template, 3, 0, "ng-template", null, 85, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzWidth", 280)("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c3))("nzTitle", null)("nzClosable", false)("nzVisible", ctx_r9.quickViewVisible)("nzHeight", 600);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r9.followUpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", "Please select Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.currFormType == "followUp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzBeforeUpload", ctx_r9.beforeUploadName)("nzMultiple", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r9.fileList == null ? null : ctx_r9.fileList.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.currFormType == "activity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.currFormType == "followUp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "primary")("disabled", ctx_r9.followUpForm.invalid ? true : false)("nzLoading", ctx_r9.api_loader["button_markActivity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9._currLanguage == "en" ? "Submit" : "\u0926\u0930\u094D\u091C \u0915\u0930\u0928\u093E");
} }
const _c4 = function () { return { x: "1500px", y: "50vh" }; };
class VoterListComponent {
    constructor(global, fb, http, message) {
        this.global = global;
        this.fb = fb;
        this.http = http;
        this.message = message;
        this.quickViewVisible = false;
        this.isSelectLoader = {
            "Booth": false,
            "Ward": false,
            "Street": false,
            "Lane": false,
            "Sector": false,
            "Assembly": false,
        };
        this.activityList = [];
        this.followUpList = [];
        this.api_loader = { 'list': false, 'accordian': false, 'button_markActivity': false };
        this.votersist = [
            { user_name: 'Amit Jain', epic_no: '1685419', url: '../.././../assets/images/avatars/dy_post_image.jpg', tags: [{ value: 'Booth no 5' }, { value: 'Ward No 8' }] },
            { user_name: 'Ayesha', epic_no: '1685419', url: '../.././../assets/images/avatars/thumb-9.jpg', tags: [{ value: 'Booth no 5' }, { value: 'Ward No 8' }] },
            { user_name: 'Amit Jain', epic_no: '1685419', url: '../.././../assets/images/avatars/thumb-10.jpg', tags: [{ value: 'Booth no 5' }, { value: 'Ward No 8' }] },
            { user_name: 'Amit Jain', epic_no: '1685419', url: '../.././../assets/images/avatars/thumb-8.jpg', tags: [{ value: 'Booth no 5' }, { value: 'Ward No 8' }] }
        ];
        this.isBannerVisible = true;
        // Multiple Voter activity and followup add
        this.isActivityModal = false;
        this.isFollowUpModal = false;
        this.isEdit = false;
        this.votersList_Array = [];
        this.dateFormat = "YYYY-MM-dd";
        this.tempTrail = [{
                "key_changes": [
                    {
                        "key": "Updated at",
                        "old_value": "2023-06-14T09:39:31.001Z",
                        "new_value": "2023-06-14T09:42:06.283Z"
                    },
                    {
                        "key": "Rating",
                        "old_value": null,
                        "new_value": 5
                    }
                ],
                "created_at": "2023-06-14T09:42:06.283156Z",
                "created_by": "8828349328"
            },
            {
                "key_changes": [
                    {
                        "key": "Age",
                        "old_value": "18",
                        "new_value": "25"
                    },
                    {
                        "key": "Updated at",
                        "old_value": "2023-06-13T11:33:41.009Z",
                        "new_value": "2023-06-13T11:34:48.903Z"
                    }
                ],
                "created_at": "2023-06-13T11:34:48.902754Z",
                "created_by": "8828349328"
            },];
        this.votersList = [];
        this.pageIndex = 1;
        this.globalPageSize = 30;
        this.boothList = [];
        this.wardList = [];
        this.sectorList = [];
        this.assemblyList = [];
        this.streetList = [];
        this.laneList = [];
        this.checked = false;
        this.indeterminate = false;
        this.listOfCurrentPageData = [];
        this.setOfCheckedId = new Set();
        // Table Dropdowns functions
        this.expandSet = new Set();
        // Var for activit and followup
        this.fileList = [];
    }
    ngOnInit() {
        this._currLanguage = localStorage.getItem("appLanguage") || 'en';
        this.global.globalAccountData.subscribe((res) => {
            if (res) {
                this.globalData = res;
                this.getVotersList();
            }
        });
    }
    exportExcel() {
        const ws = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].json_to_sheet(this.votersList);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_4__["write"](wb, { bookType: 'xlsx', type: 'array' });
        this.saveExcelFile(excelBuffer, '.xlsx');
    }
    saveExcelFile(buffer, fileName) {
        const data = new Blob([buffer], { type: '.xlsx' });
        file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](data, fileName + '.xlsx');
    }
    getVotersList(tableFilter) {
        this.api_loader['list'] = true;
        this.votersList = [];
        let data = { 'end_point': 'FETCH_VOTER_LIST_API_URL' };
        if (tableFilter) {
            this.pageIndex = tableFilter === null || tableFilter === void 0 ? void 0 : tableFilter.pageIndex;
            this.globalPageSize = tableFilter === null || tableFilter === void 0 ? void 0 : tableFilter.pageSize;
            data['page'] = this.pageIndex;
            data['limit'] = this.globalPageSize;
        }
        else {
            data['page'] = this.pageIndex;
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
        if (this._currBenificary) {
            data['is_benificary'] = this._currBenificary;
        }
        if (this._currSearchValue) {
            let temp = this._currLanguage == 'en' ? 'search_param' : 'search_param';
            data[temp] = this._currSearchValue;
        }
        this.http.getVoterList(data).subscribe((res) => {
            if (res.success) {
                this.votersList = res.data;
                this.total_count = res.total_count;
                this.api_loader['list'] = false;
            }
            else {
                this.api_loader['list'] = false;
            }
        });
    }
    quickViewToggle() {
        this.isActivityModal = false;
        this.quickViewVisible = !this.quickViewVisible;
    }
    searchStaticDataGlobalFunction(event, data) {
        this.isSelectLoader[event] = true;
        if (event == 'Booth') {
        }
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
                    this.isSelectLoader[event] = false;
                }
            });
        }, 500);
    }
    resetFilter() {
        this._currSearchValue = null;
        this._currBooth = null;
        this._currSector = null;
        this._currWard = null;
        this._currLane = null;
        this._currStreet = null;
        this._crrAssembly = null;
        this.pageIndex = 1;
        this.quickViewVisible = false;
        this.getVotersList();
    }
    getPipeValue(data) {
        let temp;
        if (data) {
            temp = data.split(' ');
        }
        else {
            return;
        }
        let value;
        if (temp.length > 0) {
            for (let i = 0; i < temp.length; i++) {
                if (temp[i] == 0) {
                    value = temp[0].substring(0, 1) + (temp[temp.length - 1].substring(0, 1) ? temp[temp.length - 1].substring(0, 1) : '--');
                }
            }
        }
        return value;
    }
    getSwitchValue(data) {
        if ((data === null || data === void 0 ? void 0 : data.status) == 'Inactive') {
            this.switchValue = false;
        }
        else if ((data === null || data === void 0 ? void 0 : data.status) == 'Active') {
            this.switchValue = true;
        }
        this.currVoterDetails = data;
        return this.switchValue;
    }
    onExpandChange(id, checked, index) {
        if (checked) {
            this.expandSet.add(id);
            this._currentAuditId = id;
            this.getAuditTrail(index);
        }
        else {
            this.expandSet.delete(id);
        }
    }
    updateCheckedSet(id, checked) {
        if (checked) {
            this.setOfCheckedId.add(id);
        }
        else {
            this.setOfCheckedId.delete(id);
        }
        console.log(this.setOfCheckedId);
    }
    onCurrentPageDataChange(listOfCurrentPageData) {
        this.listOfCurrentPageData = listOfCurrentPageData;
        this.refreshCheckedStatus();
    }
    onItemChecked(id, checked) {
        this.updateCheckedSet(id, checked);
        this.refreshCheckedStatus();
    }
    onAllChecked(checked) {
        this.listOfCurrentPageData
            .filter(({ disabled }) => !disabled)
            .forEach(({ id }) => this.updateCheckedSet(id, checked));
        this.refreshCheckedStatus();
    }
    refreshCheckedStatus() {
        const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
        this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
        this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
    }
    getAuditTrail(arrayIndex) {
        this.api_loader['accordian'] = true;
        this.votersList[arrayIndex]['auditDataset'] = [];
        console.log(this.votersList[arrayIndex]);
        let data = { id: this._currentAuditId, model_name: 'electoralchattdataset' };
        this.http.getAuditTrail(data).subscribe((res) => {
            if (res.success) {
                this.votersList[arrayIndex]['auditDataset'] = res.data;
                this.api_loader['accordian'] = false;
            }
            else {
                this.api_loader['accordian'] = false;
            }
            console.log(this.votersList[arrayIndex]['auditDataset']);
        }, error => {
        });
    }
    // Activity and FollowUp:
    createNewFollow(type) {
        this.currFormType = type;
        this.quickViewVisible = true;
        this.fileList = [];
        if (type == 'activity') {
            // console.log( moment(JSON.stringify(data?.followup_datetime)).format("HH:mm:ss"))
            this.followUpForm = this.fb.group({
                followup_datetime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                activity_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                comments: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
        }
        else {
            this.followUpForm = this.fb.group({
                followup_datetime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                followup_time: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                followup_type: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                comments: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
        }
    }
    getActivityList() {
        let data = { 'model_name': 'Activity' };
        this.http.getMasterData(data).subscribe((res) => {
            if (res.success) {
                this.activityList = res.data;
            }
        });
    }
    getFolloupList() {
        let data = { 'model_name': 'FollowUp' };
        this.http.getMasterData(data).subscribe((res) => {
            if (res.success) {
                this.followUpList = res.data;
            }
        });
    }
    submitForm(form) {
        this.votersList_Array = this.setOfCheckedId;
        let formDatta = new FormData();
        formDatta.append('voters', this.votersList_Array);
        // return 
        if (this.followUpForm.invalid) {
            return;
        }
        this.api_loader['button_markActivity'] = true;
        let data = new FormData();
        data.append('voter_id', JSON.stringify(Array.from(this.votersList_Array)));
        this.currFormType == 'activity' ? data.append('activity_type', this.followUpForm.get('activity_type').value) : data.append('followup_type', this.followUpForm.get('followup_type').value);
        data.append('comments', this.followUpForm.get('comments').value);
        this.currFormType == 'activity' ?
            data.append('activity_date', moment__WEBPACK_IMPORTED_MODULE_3__(this.followUpForm.get('followup_datetime').value).format("YYYY-MM-DD")) :
            data.append('followup_datetime', moment__WEBPACK_IMPORTED_MODULE_3__(this.followUpForm.get('followup_datetime').value).format("YYYY-MM-DD") + ' ' + moment__WEBPACK_IMPORTED_MODULE_3__(this.followUpForm.get('followup_datetime').value).format("HH:mm:ss"));
        this.fileList.forEach((file, index) => {
            data.append(`file_set`, file); // Assuming file is a File object
        });
        // data.append('file_set', JSON.stringify(Array.from(this.fileList)))
        // this.currFormType == 'followUp' ? data.append('followup_time',moment(this.followUpForm.get('followup_datetime').value).format("HH:mm:ss")):'';
        // if(this.currFormType == 'activity'){console.log('Activity')}else{console.log('FollowUp')}
        let url = (this.currFormType == 'activity' ? this.http.addVoterActivity(data) : this.http.addVoterFollowup(data));
        url.subscribe((res) => {
            if (res.success) {
                this.message.success(res.message);
                this.isActivityModal = false;
                this.quickViewToggle();
                this.followUpForm.reset();
                this.api_loader['button_markActivity'] = false;
            }
            else {
                this.message.error(res.message);
                this.api_loader['button_markActivity'] = false;
            }
        }, error => {
            this.api_loader['button_markActivity'] = false;
        });
    }
}
VoterListComponent.ɵfac = function VoterListComponent_Factory(t) { return new (t || VoterListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__["NzMessageService"])); };
VoterListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoterListComponent, selectors: [["app-voter-list"]], decls: 69, vars: 27, consts: [[1, "d-block", "align-items-center", "mb-3"], [1, "row"], [1, "col-12", "col-lg-4", "mb-2"], [1, "d-flex"], ["nzSearch", "", 3, "nzAddOnAfter"], ["type", "text", "nz-input", "", "placeholder", "Search By Full Name & Table details", 3, "ngModel", "ngModelChange", "keyup.enter"], ["suffixIconButton", ""], ["nz-button", "", "nzType", "default", "nzShape", "circle", 1, "ml-3", "mb-2", 3, "click"], ["nz-icon", "", "nzType", "undo"], [1, "col-lg-8", "col-12", "mb-2", "d-flex", "flex-wrap", "justify-content-end"], ["nz-button", "", 1, "mr-2", 3, "click"], ["nz-button", "", 1, "border", "px-3", "mb-2", 3, "nzType", "nz-tooltip", "disabled", "click"], ["nz-button", "", 1, "border", "px-3", "mx-2", "mb-2", 3, "nzType", "click"], ["nz-button", "", "nzType", "primary", "routerLink", "/voter/add-voter", 1, "mb-2"], ["class", "container bannerContext", 4, "ngIf"], [1, "row", "d-lg-none", "d-flex"], ["class", "col-md-6 col-12 ", 4, "ngFor", "ngForOf"], [1, "d-lg-flex", "d-none"], [1, "col-md-12"], [3, "nzLoading"], [1, "totalCount"], [3, "nzData", "nzTotal", "nzFrontPagination", "nzShowSizeChanger", "nzPageIndex", "nzPageSize", "nzShowTotal", "nzLoading", "nzScroll", "nzQueryParams", "nzCurrentPageDataChange"], ["rowSelectionTable", ""], ["nzWidth", "3rem"], ["nzWidth", "3rem", 3, "nzChecked", "nzIndeterminate", "nzCheckedChange"], ["nzWidth", "4rem"], [1, "text-left", 3, "nzWidth"], [3, "nzWidth"], ["nzWidth", "5rem"], ["nzWidth", "14rem"], ["nzRight", ""], [4, "ngFor", "ngForOf"], ["botTotalCount", ""], [4, "ngIf"], ["nz-button", "", "nzType", "secondary", "nzSearch", "", 3, "click"], ["nz-icon", "", "nzType", "search"], [1, "container", "bannerContext"], [1, "col-md-6", "col-12"], ["nzHoverable", "", 1, "mr-md-2", 3, "nzLoading"], [1, "d-flex", "my-2", "align-items-center", 3, "routerLink", "queryParams"], ["nzSize", "large", 1, "mr-4", "text-center", 2, "background-color", "#2a4550", 3, "nzText"], [1, "d-flex", "flex-column"], [1, "text-dark"], [1, "text-primary", "mb-2"], [1, "d-flex", "justify-content-start", "flex-wrap"], [1, "mr-2", 2, "max-width", "fit-content"], [2, "max-width", "fit-content"], ["nzWidth", "3rem", 3, "nzExpand", "nzExpandChange"], ["nzWidth", "3rem", 3, "nzChecked", "nzDisabled", "nzCheckedChange"], ["nzWidth", "4rem", 4, "ngIf"], [3, "routerLink", "queryParams"], ["nz-icon", "", "nzType", "check-circle", "class", "text-success", "nzTheme", "outline", 4, "ngIf"], ["nz-icon", "", "nzType", "close-circle", "class", "text-danger", "nzTheme", "outline", 4, "ngIf", "ngIfElse"], ["noBenificary", ""], ["nz-tooltip", "", 3, "nzTooltipTitle"], ["nz-dropdown", "", 1, "text-dark", "font-size-20", 3, "nzClickHide", "nzTrigger", "nzPlacement", "nzDropdownMenu", "click"], ["nz-icon", "", "nzType", "ellipsis", "nzTheme", "outline"], ["latestUploadDropDown", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "routerLink", "queryParams"], [1, "m-l-5"], [3, "nzExpand"], [1, "justify-content-center"], [1, "site-page-header", "header_bg_dark", 3, "nzTitle"], ["class", "mb-md-0 border", 3, "nzLoading", 4, "ngFor", "ngForOf"], ["trailTitle", ""], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "outline", 1, "text-success"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "outline", 1, "text-danger"], [1, "mb-md-0", "border", 3, "nzLoading"], ["nzAccordion", "", 3, "nzExpandIconPosition"], [3, "nzHeader"], ["trail_header", ""], ["class", "d-flex flex-column mb-2", 4, "ngFor", "ngForOf"], [1, "text-muted", "ml-3", "font-size-12", "font-weight-normal"], [1, "d-flex", "flex-column", "mb-2"], [1, "d-flex", "align-items-center"], [1, ""], ["nz-icon", "", "nzType", "arrow-right", "nzTheme", "outline", 1, "text-danger", "mx-3"], [1, "mr-3"], [1, "ml-md-2"], [1, "mb-0"], [1, "font-weight-semibold"], ["nzPlacement", "right", 3, "nzWidth", "nzTitle", "nzClosable", "nzVisible", "nzOnClose"], [4, "ngIf", "ngIfElse"], ["filters", ""], ["filtersTemplate", ""], ["nz-button", "", 1, "border", "px-3", "mx-3", "mb-3", 3, "nzType", "click"], [1, "d-flex", "flex-wrap", "justify-content-start", "align-items-center"], [1, "d-flex", "align-items-start", "flex-column", "mb-3"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select Booth/Ward", 1, "selectFilter", "mb-2", "mr-3", 3, "ngModel", "ngModelChange", "nzFocus", "keyup"], ["nzDisabled", "", "nzCustomContent", "", 4, "ngIf"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select Ward", 1, "selectFilter", "mb-2", "mr-3", 3, "ngModel", "ngModelChange", "nzFocus", "keyup"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select Sector", 1, "selectFilter", "mb-2", "mr-3", 3, "ngModel", "ngModelChange", "nzFocus", "keyup"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select Assembly", 1, "selectFilter", "mb-2", "mr-3", 3, "ngModel", "ngModelChange", "nzFocus", "keyup"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select Street", 1, "selectFilter", "mb-2", "mr-3", 3, "ngModel", "ngModelChange", "nzFocus", "keyup"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select Lane", 1, "selectFilter", "mb-2", "mr-3", 3, "ngModel", "ngModelChange", "nzFocus", "keyup"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select Is Benificary", 1, "selectFilter", "mb-2", "mr-3", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel"], [1, "d-flex", "justify-content-center", "mt-5", "align-items-center"], ["nz-button", "", "nzType", "primary", 1, "mr-3", 3, "click"], ["nz-button", "", "nzType", "link", 3, "click"], ["nzDisabled", "", "nzCustomContent", ""], ["nz-icon", "", "nzType", "loading", 1, "loading-icon"], [1, "d-flex", "justify-content-between", "align-items-center"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "twotone", 3, "click"], ["height", "500", "nzPlacement", "bottom", 3, "nzWidth", "nzBodyStyle", "nzTitle", "nzClosable", "nzVisible", "nzHeight", "nzOnClose"], [1, "row", "mx-3"], ["nz-form", "", 3, "formGroup"], [1, "row", "mt-3"], ["nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs", "nzErrorTip"], ["formControlName", "followup_datetime"], ["class", "col-md-12", 4, "ngIf"], [1, "text-left", 3, "nzSm", "nzXs"], [1, "d-flex", "flex-wrap", "justify-content-between"], ["nzListType", "text", 3, "nzBeforeUpload", "nzMultiple"], ["nz-button", "", "nzType", "primary", 1, "my-md-4"], ["class", "d-flex flex-column mt-3 w-100", "style", " height: auto; max-height: 10rem; overflow-y: scroll;", 4, "ngIf"], ["class", "col-md-12 mt-5", 4, "ngIf"], ["nzErrorTip", "Please enter comments!", 3, "nzSm", "nzXs"], ["rows", "4", "nz-input", "", "formControlName", "comments", "placeholder", "Enter Comments"], [1, "d-flex", "justify-content-center"], ["nz-button", "", "nzBlock", "", "nzSize", "large", 1, "login-form-button", "font-size-16", "font-weight-semibold", "px-5", 2, "max-width", "30rem", 3, "nzType", "disabled", "nzLoading", "click"], ["formControlName", "followup_time"], [1, "d-flex", "flex-column", "mt-3", "w-100", 2, "height", "auto", "max-height", "10rem", "overflow-y", "scroll"], ["class", "d-flex justify-content-between text-muted align-items-center px-2", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "text-muted", "align-items-center", "px-2"], [1, "m-2"], ["nz-icon", "", 1, "text-danger", "ml-2", 3, "nzType", "nzTheme", "click"], ["nzErrorTip", "Please select your activity!", 3, "nzSm", "nzXs"], ["nzPlaceHolder", "Select Actvity", "formControlName", "activity_type", "nzShowSearch", "", "nzAllowClear", "", 3, "nzFocus", "click"], [1, "col-md-12", "mt-5"], ["nzErrorTip", "Please select your followup type!", 3, "nzSm", "nzXs"], ["nzPlaceHolder", "Select Follow up", "formControlName", "followup_type", "nzShowSearch", "", "nzAllowClear", "", 3, "nzFocus", "click"]], template: function VoterListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-input-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoterListComponent_Template_input_ngModelChange_5_listener($event) { return ctx._currSearchValue = $event; })("keyup.enter", function VoterListComponent_Template_input_keyup_enter_5_listener() { return ctx.getVotersList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VoterListComponent_ng_template_6_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterListComponent_Template_button_click_8_listener() { return ctx.resetFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterListComponent_Template_button_click_11_listener() { return ctx.exportExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Export");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterListComponent_Template_button_click_13_listener() { ctx.quickViewToggle(); return ctx._currToggleActions = "multipleAction"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Multiple Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterListComponent_Template_button_click_15_listener() { ctx.quickViewToggle(); return ctx._currToggleActions = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "+ Add Voter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, VoterListComponent_div_20_Template, 1, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, VoterListComponent_div_22_Template, 14, 9, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nz-card", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nz-table", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzQueryParams", function VoterListComponent_Template_nz_table_nzQueryParams_28_listener($event) { return ctx.votersList[0] ? ctx.getVotersList($event) : null; })("nzCurrentPageDataChange", function VoterListComponent_Template_nz_table_nzCurrentPageDataChange_28_listener($event) { return ctx.onCurrentPageDataChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCheckedChange", function VoterListComponent_Template_th_nzCheckedChange_34_listener($event) { return ctx.votersList[0] ? ctx.onAllChecked($event) : false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Sr. No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Facebook Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Caste");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Epic No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Age/ Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Benificary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Gali");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Booth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Part No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Section Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Section No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, VoterListComponent_ng_container_64_Template, 55, 49, "ng-container", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, VoterListComponent_ng_template_65_Template, 3, 1, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, VoterListComponent_section_67_Template, 7, 6, "section", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, VoterListComponent_section_68_Template, 35, 29, "section", 33);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAddOnAfter", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._currSearchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "link")("nz-tooltip", "Choose Activity / Follow Up")("disabled", ctx.setOfCheckedId.size == 0 ? true : false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isBannerVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.votersList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.api_loader["list"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.votersList)("nzTotal", ctx.total_count)("nzFrontPagination", false)("nzShowSizeChanger", true)("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.globalPageSize)("nzShowTotal", _r6)("nzLoading", ctx.api_loader["card"])("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzChecked", ctx.votersList[0] ? ctx.checked : false)("nzIndeterminate", ctx.votersList[0] ? ctx.indeterminate : false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzWidth", "12rem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzWidth", "10rem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzWidth", "10rem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.votersList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quickViewVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isActivityModal);
    } }, directives: [ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__["NzWaveDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_13__["NzTooltipDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_16__["NzCardComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__["NzThSelectionComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__["NzCellFixedDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__["NzTbodyComponent"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_18__["NzAvatarComponent"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_19__["NzTagComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__["NzTdAddOnComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkWithHref"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_20__["NzDropDownADirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_20__["NzDropDownDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_20__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_21__["NzMenuDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_21__["NzMenuItemDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__["NzTrExpandDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__["NzTableFixedRowComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_22__["NzPageHeaderComponent"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_23__["NzCollapseComponent"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_23__["NzCollapsePanelComponent"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_24__["NzDrawerComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_25__["NzSelectComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_25__["NzOptionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_27__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_27__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__["NzFormControlComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_28__["NzDatePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_29__["NzUploadComponent"], ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_30__["NzTimePickerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"]], styles: [".ant-checkbox {\r\n    border: 1px solid #3C0480 !important;\r\n    border-radius: 6px;\r\n}\r\n\r\n .ant-checkbox-wrapper {\r\n    border: none !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvdGVyLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoidm90ZXItbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwLmFudC1jaGVja2JveCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM0MwNDgwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5hbnQtY2hlY2tib3gtd3JhcHBlciB7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoterListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-voter-list',
                templateUrl: './voter-list.component.html',
                styleUrls: ['./voter-list.component.css']
            }]
    }], function () { return [{ type: src_app_service_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] }, { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__["NzMessageService"] }]; }, null); })();


/***/ }),

/***/ "9StV":
/*!***********************************************!*\
  !*** ./src/app/voter/voter-routing.module.ts ***!
  \***********************************************/
/*! exports provided: VoterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoterRoutingModule", function() { return VoterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _voter_profile_voter_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./voter-profile/voter-profile.component */ "TSwT");
/* harmony import */ var _add_edit_voter_add_edit_voter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-voter/add-edit-voter.component */ "k7L/");
/* harmony import */ var _voter_list_voter_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./voter-list/voter-list.component */ "4bBO");







const routes = [
    {
        path: '',
        // canActivate: [NgxPermissionsGuard],
        component: _voter_list_voter_list_component__WEBPACK_IMPORTED_MODULE_4__["VoterListComponent"],
        data: {
            parent: 'Voters',
            title: 'Voter List ',
            isButton: false,
            isHome: false,
            custom_url: '/voter'
            // headerDisplay: "none",
        }
    },
    {
        path: '',
        // canActivate: [NgxPermissionsGuard],
        data: {
            parent: 'Voters',
            title: 'Voter List ',
            custom_url: '/voter'
        },
        children: [
            {
                path: 'add-voter',
                // canActivate: [NgxPermissionsGuard],
                component: _add_edit_voter_add_edit_voter_component__WEBPACK_IMPORTED_MODULE_3__["AddEditVoterComponent"],
                data: {
                    parent: 'Voter',
                    title: 'Add Voter',
                    isButton: true,
                    isHome: false,
                    custom_url: '/add-voter'
                }
            },
            {
                path: 'edit-voter',
                // canActivate: [NgxPermissionsGuard],
                component: _add_edit_voter_add_edit_voter_component__WEBPACK_IMPORTED_MODULE_3__["AddEditVoterComponent"],
                data: {
                    title: 'Edit Voter',
                    parent: 'Voter',
                    isButton: false,
                    isHome: false,
                    custom_url: '/edit-voter'
                }
            },
            {
                path: 'view-profile',
                // canActivate: [NgxPermissionsGuard],
                component: _voter_profile_voter_profile_component__WEBPACK_IMPORTED_MODULE_2__["VoterProfileComponent"],
                data: {
                    title: 'Voter Profile',
                    parent: 'Voter',
                    isButton: true,
                    isHome: false,
                    custom_url: '/view-profile'
                    // headerDisplay: "none",
                }
            },
        ]
    },
];
class VoterRoutingModule {
}
VoterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VoterRoutingModule });
VoterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VoterRoutingModule_Factory(t) { return new (t || VoterRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VoterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "IvDN":
/*!************************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-collapse.js ***!
  \************************************************************************************/
/*! exports provided: NzCollapseComponent, NzCollapseModule, NzCollapsePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCollapseComponent", function() { return NzCollapseComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCollapseModule", function() { return NzCollapseModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCollapsePanelComponent", function() { return NzCollapsePanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ "GR68");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "2Suw");
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ "YF2q");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");













/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */








const _c0 = ["*"];
function NzCollapsePanelComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const expandedIcon_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", expandedIcon_r4 || "right")("nzRotate", ctx_r3.nzActive ? 90 : 0);
} }
function NzCollapsePanelComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCollapsePanelComponent_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.nzExpandedIcon);
} }
function NzCollapsePanelComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.nzHeader);
} }
function NzCollapsePanelComponent_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.nzExtra);
} }
function NzCollapsePanelComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCollapsePanelComponent_div_3_ng_container_1_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r2.nzExtra);
} }
const NZ_CONFIG_MODULE_NAME = 'collapse';
class NzCollapseComponent {
    constructor(nzConfigService, cdr, elementRef, directionality) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzAccordion = false;
        this.nzBordered = true;
        this.nzGhost = false;
        this.nzExpandIconPosition = 'left';
        this.dir = 'ltr';
        this.listOfNzCollapsePanelComponent = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-collapse');
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$))
            .subscribe(() => {
            this.cdr.markForCheck();
        });
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    addPanel(value) {
        this.listOfNzCollapsePanelComponent.push(value);
    }
    removePanel(value) {
        this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(value), 1);
    }
    click(collapse) {
        if (this.nzAccordion && !collapse.nzActive) {
            this.listOfNzCollapsePanelComponent
                .filter(item => item !== collapse)
                .forEach(item => {
                if (item.nzActive) {
                    item.nzActive = false;
                    item.nzActiveChange.emit(item.nzActive);
                    item.markForCheck();
                }
            });
        }
        collapse.nzActive = !collapse.nzActive;
        collapse.nzActiveChange.emit(collapse.nzActive);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzCollapseComponent.ɵfac = function NzCollapseComponent_Factory(t) { return new (t || NzCollapseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8)); };
NzCollapseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzCollapseComponent, selectors: [["nz-collapse"]], hostVars: 10, hostBindings: function NzCollapseComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-collapse-icon-position-left", ctx.nzExpandIconPosition === "left")("ant-collapse-icon-position-right", ctx.nzExpandIconPosition === "right")("ant-collapse-ghost", ctx.nzGhost)("ant-collapse-borderless", !ctx.nzBordered)("ant-collapse-rtl", ctx.dir === "rtl");
    } }, inputs: { nzAccordion: "nzAccordion", nzBordered: "nzBordered", nzGhost: "nzGhost", nzExpandIconPosition: "nzExpandIconPosition" }, exportAs: ["nzCollapse"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzCollapseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
NzCollapseComponent.ctorParameters = () => [
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
NzCollapseComponent.propDecorators = {
    nzAccordion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzBordered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzGhost: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzExpandIconPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(),
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzCollapseComponent.prototype, "nzAccordion", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(),
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzCollapseComponent.prototype, "nzBordered", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(),
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzCollapseComponent.prototype, "nzGhost", void 0);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_CONFIG_MODULE_NAME$1 = 'collapsePanel';
class NzCollapsePanelComponent {
    constructor(nzConfigService, cdr, nzCollapseComponent, elementRef, noAnimation) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.nzCollapseComponent = nzCollapseComponent;
        this.elementRef = elementRef;
        this.noAnimation = noAnimation;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME$1;
        this.nzActive = false;
        this.nzDisabled = false;
        this.nzShowArrow = true;
        this.nzActiveChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-collapse-item');
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME$1)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$))
            .subscribe(() => {
            this.cdr.markForCheck();
        });
    }
    clickHeader() {
        if (!this.nzDisabled) {
            this.nzCollapseComponent.click(this);
        }
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
    ngOnInit() {
        this.nzCollapseComponent.addPanel(this);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.nzCollapseComponent.removePanel(this);
    }
}
NzCollapsePanelComponent.ɵfac = function NzCollapsePanelComponent_Factory(t) { return new (t || NzCollapsePanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NzCollapseComponent, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__["NzNoAnimationDirective"], 8)); };
NzCollapsePanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzCollapsePanelComponent, selectors: [["nz-collapse-panel"]], hostVars: 6, hostBindings: function NzCollapsePanelComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-collapse-no-arrow", !ctx.nzShowArrow)("ant-collapse-item-active", ctx.nzActive)("ant-collapse-item-disabled", ctx.nzDisabled);
    } }, inputs: { nzActive: "nzActive", nzDisabled: "nzDisabled", nzShowArrow: "nzShowArrow", nzExtra: "nzExtra", nzHeader: "nzHeader", nzExpandedIcon: "nzExpandedIcon" }, outputs: { nzActiveChange: "nzActiveChange" }, exportAs: ["nzCollapsePanel"], ngContentSelectors: _c0, decls: 7, vars: 8, consts: [["role", "tab", 1, "ant-collapse-header", 3, "click"], [4, "ngIf"], [4, "nzStringTemplateOutlet"], ["class", "ant-collapse-extra", 4, "ngIf"], [1, "ant-collapse-content"], [1, "ant-collapse-content-box"], ["nz-icon", "", 1, "ant-collapse-arrow", 3, "nzType", "nzRotate"], [1, "ant-collapse-extra"]], template: function NzCollapsePanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NzCollapsePanelComponent_Template_div_click_0_listener() { return ctx.clickHeader(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCollapsePanelComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzCollapsePanelComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NzCollapsePanelComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", ctx.nzActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzShowArrow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzExtra);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-collapse-content-active", ctx.nzActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@.disabled", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation)("@collapseMotion", ctx.nzActive ? "expanded" : "hidden");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__["NzStringTemplateOutletDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconDirective"]], encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_2__["collapseMotion"]] }, changeDetection: 0 });
NzCollapsePanelComponent.ctorParameters = () => [
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: NzCollapseComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__["NzNoAnimationDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
NzCollapsePanelComponent.propDecorators = {
    nzActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzShowArrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzExtra: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzExpandedIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzActiveChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzCollapsePanelComponent.prototype, "nzActive", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzCollapsePanelComponent.prototype, "nzDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["WithConfig"])(),
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzCollapsePanelComponent.prototype, "nzShowArrow", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzCollapseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'nz-collapse',
                exportAs: 'nzCollapse',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                template: `
    <ng-content></ng-content>
  `,
                host: {
                    '[class.ant-collapse-icon-position-left]': `nzExpandIconPosition === 'left'`,
                    '[class.ant-collapse-icon-position-right]': `nzExpandIconPosition === 'right'`,
                    '[class.ant-collapse-ghost]': `nzGhost`,
                    '[class.ant-collapse-borderless]': '!nzBordered',
                    '[class.ant-collapse-rtl]': "dir === 'rtl'"
                }
            }]
    }], function () { return [{ type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, { nzAccordion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzBordered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzGhost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzExpandIconPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzCollapsePanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'nz-collapse-panel',
                exportAs: 'nzCollapsePanel',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_2__["collapseMotion"]],
                template: `
    <div role="tab" [attr.aria-expanded]="nzActive" class="ant-collapse-header" (click)="clickHeader()">
      <ng-container *ngIf="nzShowArrow">
        <ng-container *nzStringTemplateOutlet="nzExpandedIcon; let expandedIcon">
          <i nz-icon [nzType]="expandedIcon || 'right'" class="ant-collapse-arrow" [nzRotate]="nzActive ? 90 : 0"></i>
        </ng-container>
      </ng-container>
      <ng-container *nzStringTemplateOutlet="nzHeader">{{ nzHeader }}</ng-container>
      <div class="ant-collapse-extra" *ngIf="nzExtra">
        <ng-container *nzStringTemplateOutlet="nzExtra">{{ nzExtra }}</ng-container>
      </div>
    </div>
    <div
      class="ant-collapse-content"
      [class.ant-collapse-content-active]="nzActive"
      [@.disabled]="noAnimation?.nzNoAnimation"
      [@collapseMotion]="nzActive ? 'expanded' : 'hidden'"
    >
      <div class="ant-collapse-content-box">
        <ng-content></ng-content>
      </div>
    </div>
  `,
                host: {
                    '[class.ant-collapse-no-arrow]': '!nzShowArrow',
                    '[class.ant-collapse-item-active]': 'nzActive',
                    '[class.ant-collapse-item-disabled]': 'nzDisabled'
                }
            }]
    }], function () { return [{ type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: NzCollapseComponent, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__["NzNoAnimationDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, { nzActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzShowArrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzActiveChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], nzExtra: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzExpandedIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzCollapseModule {
}
NzCollapseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzCollapseModule });
NzCollapseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzCollapseModule_Factory(t) { return new (t || NzCollapseModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__["NzOutletModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__["NzNoAnimationModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzCollapseModule, { declarations: function () { return [NzCollapsePanelComponent, NzCollapseComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__["NzOutletModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__["NzNoAnimationModule"]]; }, exports: function () { return [NzCollapsePanelComponent, NzCollapseComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzCollapseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [NzCollapsePanelComponent, NzCollapseComponent],
                exports: [NzCollapsePanelComponent, NzCollapseComponent],
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__["NzOutletModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__["NzNoAnimationModule"]]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-collapse.js.map

/***/ }),

/***/ "TSwT":
/*!****************************************************************!*\
  !*** ./src/app/voter/voter-profile/voter-profile.component.ts ***!
  \****************************************************************/
/*! exports provided: VoterProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoterProfileComponent", function() { return VoterProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/global.service */ "0ZK0");
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/http.service */ "9NvV");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "oyxB");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/steps */ "OEtX");
/* harmony import */ var _primary_attributes_primary_attributes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./primary-attributes/primary-attributes.component */ "b4ET");
/* harmony import */ var _relationship_mapping_relationship_mapping_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./relationship-mapping/relationship-mapping.component */ "zLDN");
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/drawer */ "F6ss");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/upload */ "D9mS");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ "ix5O");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/slider */ "tAs6");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");


































function VoterProfileComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 29);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "star")("nzTheme", "fill");
} }
function VoterProfileComponent_label_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (ctx_r1.voterDetails == null ? null : ctx_r1.voterDetails.rating) > 3 ? "text-success" : (ctx_r1.voterDetails == null ? null : ctx_r1.voterDetails.rating) < 3 ? "text-danger" : "text-secondary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](" (" + ctx_r1.formatter(ctx_r1.voterDetails == null ? null : ctx_r1.voterDetails.rating) + ") ");
} }
function VoterProfileComponent_nz_tab_57_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r7 == null ? null : tab_r7.name);
} }
function VoterProfileComponent_nz_tab_57_section_3_ng_container_1_div_1_div_1_h4_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Political Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoterProfileComponent_nz_tab_57_section_3_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, VoterProfileComponent_nz_tab_57_section_3_ng_container_1_div_1_div_1_h4_8_Template, 2, 0, "h4", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nz-divider", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r21 == null ? null : item_r21.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r21 == null ? null : item_r21.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r21 == null ? null : item_r21.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r22 == ctx_r20.profileLogs.length - 1);
} }
function VoterProfileComponent_nz_tab_57_section_3_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VoterProfileComponent_nz_tab_57_section_3_ng_container_1_div_1_div_1_Template, 10, 4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r18.profileLogs);
} }
function VoterProfileComponent_nz_tab_57_section_3_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nz-divider", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r24 == null ? null : item_r24.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((item_r24 == null ? null : item_r24.title) ? item_r24 == null ? null : item_r24.title : "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((item_r24 == null ? null : item_r24.value) ? item_r24 == null ? null : item_r24.value : "--");
} }
function VoterProfileComponent_nz_tab_57_section_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VoterProfileComponent_nz_tab_57_section_3_ng_container_1_div_1_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VoterProfileComponent_nz_tab_57_section_3_ng_container_1_div_3_Template, 9, 3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r17 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r16 == null ? null : item_r16.politicalList);
} }
function VoterProfileComponent_nz_tab_57_section_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VoterProfileComponent_nz_tab_57_section_3_ng_container_1_Template, 4, 2, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.profileLogs);
} }
function VoterProfileComponent_nz_tab_57_section_4_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterProfileComponent_nz_tab_57_section_4_ng_container_23_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const data_r31 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r33.createNewFollow("activity", data_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r31 = ctx.$implicit;
    const i_r32 = ctx.index;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r32 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r26._currLanguage == "en" ? data_r31 == null ? null : data_r31.activity_type == null ? null : data_r31.activity_type.name == null ? null : data_r31.activity_type.name.en : data_r31 == null ? null : data_r31.activity_type == null ? null : data_r31.activity_type.name == null ? null : data_r31.activity_type.name.hi);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 6, data_r31 == null ? null : data_r31.activity_date, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r26._currLanguage == "en" ? (data_r31 == null ? null : data_r31.created_by == null ? null : data_r31.created_by.first_name) + (data_r31 == null ? null : data_r31.created_by == null ? null : data_r31.created_by.last_name) : (data_r31 == null ? null : data_r31.created_by == null ? null : data_r31.created_by.first_name) + (data_r31 == null ? null : data_r31.created_by == null ? null : data_r31.created_by.last_name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r26._currLanguage == "en" ? data_r31 == null ? null : data_r31.created_by == null ? null : data_r31.created_by.mobile : data_r31 == null ? null : data_r31.created_by == null ? null : data_r31.created_by.mobile, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r26._currLanguage == "en" ? data_r31 == null ? null : data_r31.comments == null ? null : data_r31.comments.en : data_r31 == null ? null : data_r31.comments == null ? null : data_r31.comments.hi);
} }
function VoterProfileComponent_nz_tab_57_section_4_div_24_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 61);
} }
function VoterProfileComponent_nz_tab_57_section_4_div_24_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Created At");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Updated At");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Activity Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterProfileComponent_nz_tab_57_section_4_div_24_ng_template_8_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const item_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r41.createNewFollow("activity", item_r35); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nz-dropdown-menu", null, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    const item_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownMenu", _r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (item_r35.created_by == null ? null : item_r35.created_by.first_name) + (item_r35.created_by == null ? null : item_r35.created_by.last_name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 6, item_r35 == null ? null : item_r35.created_at, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 9, item_r35 == null ? null : item_r35.updated_at, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r35 == null ? null : item_r35.activity_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r39._currLanguage == "en" ? item_r35 == null ? null : item_r35.comments == null ? null : item_r35.comments.en : item_r35 == null ? null : item_r35.comments == null ? null : item_r35.comments.hi);
} }
function VoterProfileComponent_nz_tab_57_section_4_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-card", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-steps", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nz-step", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VoterProfileComponent_nz_tab_57_section_4_div_24_ng_template_6_Template, 1, 0, "ng-template", null, 59, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, VoterProfileComponent_nz_tab_57_section_4_div_24_ng_template_8_Template, 29, 12, "ng-template", null, 60, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = ctx.$implicit;
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27._currLanguage == "en" ? item_r35 == null ? null : item_r35.activity_type == null ? null : item_r35.activity_type.name == null ? null : item_r35.activity_type.name.en : item_r35 == null ? null : item_r35.activity_type == null ? null : item_r35.activity_type.name == null ? null : item_r35.activity_type.name.hi);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzProgressDot", true)("nzCurrent", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r38)("nzDescription", _r36);
} }
function VoterProfileComponent_nz_tab_57_section_4_ng_container_47_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterProfileComponent_nz_tab_57_section_4_ng_container_47_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const data_r45 = ctx.$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r47.createNewFollow("followUp", data_r45); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r45 = ctx.$implicit;
    const i_r46 = ctx.index;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r46 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29._currLanguage == "en" ? data_r45 == null ? null : data_r45.followup_type == null ? null : data_r45.followup_type.name == null ? null : data_r45.followup_type.name.en : data_r45 == null ? null : data_r45.followup_type == null ? null : data_r45.followup_type.name == null ? null : data_r45.followup_type.name.hi);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 6, data_r45 == null ? null : data_r45.followup_datetime, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r29._currLanguage == "en" ? (data_r45 == null ? null : data_r45.created_by == null ? null : data_r45.created_by.first_name) + (data_r45 == null ? null : data_r45.created_by == null ? null : data_r45.created_by.last_name) : (data_r45 == null ? null : data_r45.created_by == null ? null : data_r45.created_by.first_name) + (data_r45 == null ? null : data_r45.created_by == null ? null : data_r45.created_by.last_name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r29._currLanguage == "en" ? data_r45 == null ? null : data_r45.created_by == null ? null : data_r45.created_by.mobile : data_r45 == null ? null : data_r45.created_by == null ? null : data_r45.created_by.mobile, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29._currLanguage == "en" ? data_r45 == null ? null : data_r45.comments == null ? null : data_r45.comments.en : data_r45 == null ? null : data_r45.comments == null ? null : data_r45.comments.hi);
} }
function VoterProfileComponent_nz_tab_57_section_4_div_48_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 61);
} }
function VoterProfileComponent_nz_tab_57_section_4_div_48_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Created At");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Updated At");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Followup Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterProfileComponent_nz_tab_57_section_4_div_48_ng_template_8_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const item_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r55.createNewFollow("followUp", item_r49); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nz-dropdown-menu", null, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
    const item_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownMenu", _r54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (item_r49.created_by == null ? null : item_r49.created_by.first_name) + (item_r49.created_by == null ? null : item_r49.created_by.last_name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 6, item_r49 == null ? null : item_r49.created_at, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 9, item_r49 == null ? null : item_r49.updated_at, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 12, item_r49 == null ? null : item_r49.followup_datetime, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r53._currLanguage == "en" ? item_r49 == null ? null : item_r49.comments == null ? null : item_r49.comments.en : item_r49 == null ? null : item_r49.comments == null ? null : item_r49.comments.hi);
} }
function VoterProfileComponent_nz_tab_57_section_4_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-card", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-steps", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nz-step", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VoterProfileComponent_nz_tab_57_section_4_div_48_ng_template_6_Template, 1, 0, "ng-template", null, 59, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, VoterProfileComponent_nz_tab_57_section_4_div_48_ng_template_8_Template, 30, 15, "ng-template", null, 60, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r49 = ctx.$implicit;
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r30._currLanguage == "en" ? item_r49 == null ? null : item_r49.followup_type == null ? null : item_r49.followup_type.name == null ? null : item_r49.followup_type.name.en : item_r49 == null ? null : item_r49.followup_type == null ? null : item_r49.followup_type.name == null ? null : item_r49.followup_type.name.hi);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzProgressDot", true)("nzCurrent", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r52)("nzDescription", _r50);
} }
const _c0 = function () { return { x: "1000px", y: "50vh" }; };
function VoterProfileComponent_nz_tab_57_section_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-card", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-table", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sr. No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Activity Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Time Stamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Created By");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, VoterProfileComponent_nz_tab_57_section_4_ng_container_23_Template, 20, 9, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, VoterProfileComponent_nz_tab_57_section_4_div_24_Template, 10, 5, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nz-card", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "nz-table", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Sr. No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Followup Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Time Stamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Created By");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, VoterProfileComponent_nz_tab_57_section_4_ng_container_47_Template, 20, 9, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, VoterProfileComponent_nz_tab_57_section_4_div_48_Template, 10, 5, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r11.api_loading["cardActvity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx_r11.listOfActivity)("nzTotal", ctx_r11.listOfActivity.length)("nzFrontPagination", false)("nzShowSizeChanger", false)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.listOfActivity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.listOfActivity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r11.api_loading["cardFollowup"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx_r11.followUpList)("nzTotal", ctx_r11.followUpList.length)("nzFrontPagination", false)("nzShowSizeChanger", false)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.followUpList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.followUpList);
} }
function VoterProfileComponent_nz_tab_57_section_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-primary-attributes", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("voterId", ctx_r12._currVoterId)("attributeList", ctx_r12.attributeList);
} }
function VoterProfileComponent_nz_tab_57_section_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-relationship-mapping", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("voterId", ctx_r13._currVoterId);
} }
function VoterProfileComponent_nz_tab_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tab", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VoterProfileComponent_nz_tab_57_ng_template_1_Template, 2, 1, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VoterProfileComponent_nz_tab_57_section_3_Template, 2, 1, "section", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VoterProfileComponent_nz_tab_57_section_4_Template, 49, 18, "section", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VoterProfileComponent_nz_tab_57_section_5_Template, 2, 2, "section", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VoterProfileComponent_nz_tab_57_section_6_Template, 2, 1, "section", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDisabled", ctx_r3.isEdit ? true : false)("nzTitle", _r8)("nzForceRender", "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3._currTabName == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3._currTabName == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3._currTabName == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3._currTabName == 3);
} }
function VoterProfileComponent_section_58_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-form-label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-form-control", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-time-picker", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", "Please select Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzFormat", "HH:mm:ss");
} }
function VoterProfileComponent_section_58_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterProfileComponent_section_58_div_21_div_1_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const i_r67 = ctx.index; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r68.deleteEmployee(i_r67); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r66 == null ? null : item_r66.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "delete")("nzTheme", "outline");
} }
function VoterProfileComponent_section_58_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VoterProfileComponent_section_58_div_21_div_1_Template, 4, 3, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r60.fileList);
} }
function VoterProfileComponent_section_58_div_22_nz_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 98);
} if (rf & 2) {
    const item_r71 = ctx.$implicit;
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r71 == null ? null : item_r71.id)("nzLabel", ctx_r70._currLanguage == "en" ? item_r71 == null ? null : item_r71.name == null ? null : item_r71.name.en : item_r71 == null ? null : item_r71.name == null ? null : item_r71.name.hi);
} }
function VoterProfileComponent_section_58_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-form-label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mark Activity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-form-control", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-select", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFocus", function VoterProfileComponent_section_58_div_22_Template_nz_select_nzFocus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r72.getActivityList(); })("click", function VoterProfileComponent_section_58_div_22_Template_nz_select_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r74.isDirty = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VoterProfileComponent_section_58_div_22_nz_option_6_Template, 1, 2, "nz-option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r61.activityList);
} }
function VoterProfileComponent_section_58_div_23_nz_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 98);
} if (rf & 2) {
    const item_r76 = ctx.$implicit;
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r76 == null ? null : item_r76.id)("nzLabel", ctx_r75._currLanguage == "en" ? item_r76 == null ? null : item_r76.name == null ? null : item_r76.name.en : item_r76 == null ? null : item_r76.name == null ? null : item_r76.name.hi);
} }
function VoterProfileComponent_section_58_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-form-label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mark Followup ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-form-control", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-select", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFocus", function VoterProfileComponent_section_58_div_23_Template_nz_select_nzFocus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r77.getFolloupList(); })("click", function VoterProfileComponent_section_58_div_23_Template_nz_select_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r79.isDirty = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VoterProfileComponent_section_58_div_23_nz_option_6_Template, 1, 2, "nz-option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r62.followUpList);
} }
function VoterProfileComponent_section_58_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { height: "85vh" }; };
function VoterProfileComponent_section_58_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-drawer", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function VoterProfileComponent_section_58_Template_nz_drawer_nzOnClose_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r80.callMultipleAPI(); return ctx_r80.quickViewToggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-form-label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-form-control", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nz-date-picker", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, VoterProfileComponent_section_58_div_12_Template, 7, 6, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nz-form-label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Upload Files ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-upload", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, VoterProfileComponent_section_58_div_21_Template, 2, 1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, VoterProfileComponent_section_58_div_22_Template, 7, 5, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, VoterProfileComponent_section_58_div_23_Template, 7, 5, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nz-form-label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Comments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nz-form-control", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "textarea", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterProfileComponent_section_58_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r82.submitForm(ctx_r82.loginForm); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, VoterProfileComponent_section_58_ng_template_33_Template, 3, 0, "ng-template", null, 88, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzWidth", 280)("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c1))("nzTitle", null)("nzClosable", false)("nzVisible", ctx_r4.quickViewVisible)("nzHeight", 600);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.followUpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", "Please select Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.currFormType == "followUp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzBeforeUpload", ctx_r4.beforeUploadName)("nzMultiple", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r4.fileList == null ? null : ctx_r4.fileList.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.currFormType == "activity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.currFormType == "followUp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "primary")("disabled", ctx_r4.followUpForm.invalid ? true : false)("nzLoading", ctx_r4.api_loading["button_markActivity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4._currLanguage == "en" ? "Submit" : "\u0926\u0930\u094D\u091C \u0915\u0930\u0928\u093E");
} }
const _c2 = function () { return { height: "50vh" }; };
function VoterProfileComponent_section_59_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-drawer", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function VoterProfileComponent_section_59_Template_nz_drawer_nzOnClose_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r83.isRatingDrawer = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Rate Voter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-slider", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VoterProfileComponent_section_59_Template_nz_slider_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r85.rating = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterProfileComponent_section_59_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r86.rateVoter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzWidth", 300)("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c2))("nzTitle", null)("nzClosable", false)("nzVisible", ctx_r5.isRatingDrawer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.rating)("nzMarks", ctx_r5.marks)("nzMin", 1)("nzMax", 5)("nzTipFormatter", ctx_r5.formatter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.rating + "/5", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.rating ? " (" + ctx_r5.formatter(ctx_r5.rating) + ")" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r5.api_loading["btn_Rating"]);
} }
function VoterProfileComponent_section_60_ng_container_2_ng_template_8_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r91._currLanguage == "en" ? "Please enter facebook link" : "\u0915\u0943\u092A\u092F\u093E \u092B\u0947\u0938\u092C\u0941\u0915 \u0932\u093F\u0902\u0915 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902", " ");
} }
function VoterProfileComponent_section_60_ng_container_2_ng_template_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r92._currLanguage == "en" ? "Please enter a valid facebook link" : "\u0915\u0943\u092A\u092F\u093E \u090F\u0915 \u0935\u0948\u0927 \u092B\u0947\u0938\u092C\u0941\u0915 \u0932\u093F\u0902\u0915 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902", " ");
} }
function VoterProfileComponent_section_60_ng_container_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VoterProfileComponent_section_60_ng_container_2_ng_template_8_ng_container_0_Template, 2, 1, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VoterProfileComponent_section_60_ng_container_2_ng_template_8_ng_container_1_Template, 2, 1, "ng-container", 28);
} if (rf & 2) {
    const control_r90 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r90.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r90.hasError("pattern"));
} }
function VoterProfileComponent_section_60_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-form-label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-form-control", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, VoterProfileComponent_section_60_ng_container_2_ng_template_8_Template, 2, 2, "ng-template", null, 116, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterProfileComponent_section_60_ng_container_2_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r93.handleCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterProfileComponent_section_60_ng_container_2_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r95.putVoterFacebookLink(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r87.facebookForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r87._currLanguage == "en" ? "House No" : "\u092E\u0915\u093E\u0928 \u0928\u0902\u092C\u0930", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", _r88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r87._currLanguage == "en" ? "Add facebook link" : "\u092B\u0947\u0938\u092C\u0941\u0915 \u0932\u093F\u0902\u0915 \u0921\u093E\u0932\u094B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r87.facebookForm == null ? null : ctx_r87.facebookForm.invalid)("nzLoading", ctx_r87.isFacebook);
} }
function VoterProfileComponent_section_60_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-modal", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function VoterProfileComponent_section_60_Template_nz_modal_nzVisibleChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r97); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r96.isVisible = $event; })("nzOnCancel", function VoterProfileComponent_section_60_Template_nz_modal_nzOnCancel_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r97); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r98.handleCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VoterProfileComponent_section_60_ng_container_2_Template, 15, 10, "ng-container", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx_r6.isVisible)("nzTitle", "Facebook link")("nzFooter", null);
} }
const _c3 = function (a0) { return { id: a0 }; };
class VoterProfileComponent {
    constructor(router, acRoute, message, global, http, fb) {
        this.router = router;
        this.acRoute = acRoute;
        this.message = message;
        this.global = global;
        this.http = http;
        this.fb = fb;
        this.isEdit = false;
        this.api_loading = {
            'card': false,
            'cardActvity': false,
            'cardFollowup': false,
            'button_markActivity': false,
            'button_markFolloup': false,
            'btn_Rating': false
        };
        this.partyTabs = [
            { id: 1, name: 'General' },
            // { id: 2, name: 'Political' },
            { id: 2, name: 'Activity' },
            { id: 3, name: 'Primary Attribute' },
            { id: 4, name: 'Relationship' },
        ];
        this.profileLogs = [
            { title: 'Name', icon: '../../../assets/images/icons/Framevoter_profile.svg', value: 'Amit Jain' },
            { title: 'Gender', icon: '../../../assets/images/icons/Framegender.svg', value: 'Male' },
            { title: 'Date of Birth', icon: '../../../assets/images/icons/Vectorbirthday.svg', value: '22 April 1998' },
            { title: 'Mobile Number', icon: '../../../assets/images/icons/Vectormobile.svg', value: '+91 7081235894' },
            { title: 'Occupatio', icon: '../../../assets/images/icons/Frameorg.svg', value: 'IT Employee' },
            { title: 'Area', icon: '../../../assets/images/icons/Vectorlocation.svg', value: 'DSL' },
            { title: 'Street', icon: '../../../assets/images/icons/Vectorlocation.svg', value: 'ABS' },
            { title: 'School', icon: '../../../assets/images/icons/Vectorschool.svg', value: 'ABC School' },
            { title: 'College', icon: '../../../assets/images/icons/Vectorschool.svg', value: 'ABC College' },
            { title: 'Relatives', icon: '../../../assets/images/icons/Vectorrelatives.svg', value: 'prashanthshah@gmail.com' },
            { politicalList: [
                    { title: 'Part Name', icon: '../../../assets/images/icons/Framevoter_profile.svg', value: 'Amit Jain' },
                    { title: 'Account Number', icon: '../../../assets/images/icons/Vectoracc.svg', value: '1685419' },
                    { title: 'Part Number :', icon: '../../../assets/images/icons/Vectoracc.svg', value: '0236511' },
                    { title: 'Ward', icon: '../../../assets/images/icons/Vectorward.svg', value: 'Andheri Ward Office' },
                    { title: 'Booth', icon: '../../../assets/images/icons/Vectorward.svg', value: 'Zilha Parishad School Kondhve Dhawade South Facing West Side Room no 2' },
                    { title: 'Societies', icon: '../../../assets/images/icons/Vectorlocation.svg', value: 'DSL' },
                    { title: 'Associations :', icon: '../../../assets/images/icons/Vectorschool.svg', value: 'ABS' },
                    { title: 'Affiliation % :', icon: '../../../assets/images/icons/Vectorschool.svg', value: 'ABC School' },
                    { title: 'Rating :', icon: '../../../assets/images/icons/Vectorrating.svg', value: 'ABC College', isDark: true },
                ],
                isPolitical: true
            }
        ];
        this.listOfActivity = [];
        this.dateFormat = "YYYY-MM-dd";
        this.quickViewVisible = false;
        this.followUpList = [];
        this.activityList = [];
        this.currFormType = '';
        this.rating = 1;
        this.isRatingDrawer = false;
        this.marks = {
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
        };
        this.fileList = [];
        this._currentFileName = [];
        this.beforeUploadName = (file) => {
            // if (!((file?.type == 'pdf') || (file?.type == 'application/pdf') || (file?.type == 'img') || (file?.type == 'jpeg') || (file?.type == 'png') || (file?.type == 'image/jpeg') || (file?.type == 'image/png'))) {
            //   this.fileList = [];
            //   this._currentFileName = null;
            //   this.message.error('Please check the file type')
            //   return false
            // }
            // this.fileList = [];
            this.fileList = this.fileList.concat(file);
            this._currentFileName.push(file);
            return false;
        };
        this.attributeList = [];
        this.relationshipList = [];
        this.isFacebook = false;
        this.isVisible = false;
    }
    ngOnInit() {
        this._currLanguage = localStorage.getItem("appLanguage") || 'en';
        this.facebookForm = this.fb.group({
            facebook_link: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(https?:\/\/)?(www\.)?facebook\.com\/.+/i)]]
        });
        this.acRoute.queryParams.subscribe((param) => {
            if (param['tabSection']) {
                this._currTabName = param['tabSection'];
            }
            else {
                this._currTabName = 0;
            }
            if (param['id']) {
                this._currVoterId = param['id'];
                this.getVoterDetals();
            }
            if (this._currTabName == 1 && param['id']) {
                this.getActivityDetails();
                this.getFollowUpDetails();
            }
            if (this._currTabName == 2 && param['id']) {
                this.getAttributeList();
            }
            if (this._currTabName == 3 && param['id']) {
                this.getRelationshipList();
            }
        });
    }
    onTabChange(data) {
        this._currTabName = data === null || data === void 0 ? void 0 : data.index;
        this.router.navigate([this.router.url.split('?')[0]], { queryParams: { id: this._currVoterId, tabSection: this._currTabName } });
    }
    getActivityDetails() {
        this.api_loading['cardActvity'] = true;
        let data = { 'voter_id': this._currVoterId };
        this.http.getVoterActivity(data).subscribe((res) => {
            if (res.success) {
                this.listOfActivity = res.data;
                this.api_loading['cardActvity'] = false;
            }
            else {
                this.api_loading['cardActvity'] = false;
            }
        });
    }
    getFollowUpDetails() {
        this.api_loading['cardFollowup'] = true;
        this.followUpList = [];
        let data = { 'voter_id': this._currVoterId };
        this.http.getVoterFollowUp(data).subscribe((res) => {
            if (res.success) {
                this.followUpList = res.data;
                this.api_loading['cardFollowup'] = false;
            }
            else {
                this.api_loading['cardFollowup'] = false;
            }
        }, error => {
            this.api_loading['cardFollowup'] = false;
        });
    }
    getVoterDetals() {
        let data = { id: this._currVoterId, 'end_point': 'FETCH_VOTER_LIST_API_URL' };
        this.api_loading['card'] = true;
        this.http.getVoterDetails(data).subscribe((res) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
            if (res.success) {
                this.voterDetails = res.data[0];
                this.profileLogs = [
                    {
                        title: 'Name', icon: '../../../assets/images/icons/Framevoter_profile.svg',
                        value: this._currLanguage == 'en' ? (_a = this.voterDetails) === null || _a === void 0 ? void 0 : _a.full_name_en : (_b = this.voterDetails) === null || _b === void 0 ? void 0 : _b.full_name_hi,
                    },
                    {
                        title: 'Gender', icon: '../../../assets/images/icons/Framegender.svg',
                        value: this._currLanguage == 'en' ? (_c = this.voterDetails) === null || _c === void 0 ? void 0 : _c.gender : (_d = this.voterDetails) === null || _d === void 0 ? void 0 : _d.gender
                    },
                    { title: 'Date of Birth', icon: '../../../assets/images/icons/Vectorbirthday.svg', value: '22 April 1998' },
                    { title: 'Mobile Number', icon: '../../../assets/images/icons/Vectormobile.svg', value: ((_e = this.voterDetails) === null || _e === void 0 ? void 0 : _e.mobile) ? (_f = this.voterDetails) === null || _f === void 0 ? void 0 : _f.mobile : '-' },
                    { title: 'Occupation', icon: '../../../assets/images/icons/Frameorg.svg', value: 'IT Employee' },
                    { title: 'Area', icon: '../../../assets/images/icons/Vectorlocation.svg', value: 'DSL' },
                    { title: 'Street', icon: '../../../assets/images/icons/Vectorlocation.svg', value: 'ABS' },
                    { title: 'School', icon: '../../../assets/images/icons/Vectorschool.svg', value: 'ABC School' },
                    { title: 'College', icon: '../../../assets/images/icons/Vectorschool.svg', value: 'ABC College' },
                    {
                        title: 'Relatives', icon: '../../../assets/images/icons/Vectorrelatives.svg',
                        value: this._currLanguage == 'en' ? (_g = this.voterDetails) === null || _g === void 0 ? void 0 : _g.rln_first_name_en : (_h = this.voterDetails) === null || _h === void 0 ? void 0 : _h.rln_first_name_hi
                    },
                    {
                        politicalList: [
                            {
                                title: 'Party Name', icon: '../../../assets/images/icons/Framevoter_profile.svg',
                                value: this._currLanguage == 'en' ? (_j = this.voterDetails) === null || _j === void 0 ? void 0 : _j.part_name_en : (_k = this.voterDetails) === null || _k === void 0 ? void 0 : _k.part_name_hi
                            },
                            {
                                title: 'Account Number', icon: '../../../assets/images/icons/Vectoracc.svg',
                                value: this._currLanguage == 'en' ? (_l = this.voterDetails) === null || _l === void 0 ? void 0 : _l.ac_no : (_m = this.voterDetails) === null || _m === void 0 ? void 0 : _m.ac_no
                            },
                            {
                                title: 'Part Number :', icon: '../../../assets/images/icons/Vectoracc.svg',
                                value: this._currLanguage == 'en' ? (_o = this.voterDetails) === null || _o === void 0 ? void 0 : _o.part_no : (_p = this.voterDetails) === null || _p === void 0 ? void 0 : _p.part_no
                            },
                            {
                                title: 'Ward', icon: '../../../assets/images/icons/Vectorward.svg',
                                value: this._currLanguage == 'en' ? (_q = this.voterDetails) === null || _q === void 0 ? void 0 : _q.part_no : (_r = this.voterDetails) === null || _r === void 0 ? void 0 : _r.part_no
                            },
                            { title: 'Booth', icon: '../../../assets/images/icons/Vectorward.svg', value: 'Zilha Parishad School Kondhve Dhawade South Facing West Side Room no 2' },
                            { title: 'Societies', icon: '../../../assets/images/icons/Vectorlocation.svg', value: 'DSL' },
                            { title: 'Associations :', icon: '../../../assets/images/icons/Vectorschool.svg', value: 'ABS' },
                            { title: 'Affiliation % :', icon: '../../../assets/images/icons/Vectorschool.svg', value: 'ABC School' },
                            { title: 'Rating :', icon: '../../../assets/images/icons/Vectorrating.svg', value: 'ABC College', isDark: true },
                        ],
                        isPolitical: true
                    }
                ];
                this.api_loading['card'] = false;
            }
            else {
                this.api_loading['card'] = false;
            }
        }, error => {
            this.message.error(error);
            this.api_loading['card'] = false;
        });
    }
    quickViewToggle() {
        this.quickViewVisible = !this.quickViewVisible;
    }
    callMultipleAPI() {
        this.getVoterDetals();
        this.getFollowUpDetails();
        this.getActivityDetails();
    }
    createNewFollow(type, data) {
        var _a, _b, _c, _d, _e, _f;
        if (data) {
            console.log(data === null || data === void 0 ? void 0 : data.activity_date, data === null || data === void 0 ? void 0 : data.followup_datetime, moment__WEBPACK_IMPORTED_MODULE_2__(new Date(data === null || data === void 0 ? void 0 : data.activity_date, data === null || data === void 0 ? void 0 : data.followup_datetime).toString()).format("HH:mm:ss"));
            this.isEdit = true;
            this._currActivityFollowupId = data.id;
            type == 'activity' ? this.getActivityList() : this.getFolloupList();
        }
        else {
            this.isEdit = false;
        }
        this.currFormType = type;
        this.quickViewVisible = true;
        this.fileList = [];
        if (type == 'activity') {
            // console.log( moment(JSON.stringify(data?.followup_datetime)).format("HH:mm:ss"))
            this.followUpForm = this.fb.group({
                followup_datetime: [(data === null || data === void 0 ? void 0 : data.activity_date) ? data === null || data === void 0 ? void 0 : data.activity_date : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                activity_type: [(_a = data === null || data === void 0 ? void 0 : data.activity_type) === null || _a === void 0 ? void 0 : _a.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                comments: [this._currLanguage == 'en' ? (_b = data === null || data === void 0 ? void 0 : data.comments) === null || _b === void 0 ? void 0 : _b.en : (_c = data === null || data === void 0 ? void 0 : data.comments) === null || _c === void 0 ? void 0 : _c.hi, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
        }
        else {
            console.log(JSON.stringify(data === null || data === void 0 ? void 0 : data.followup_datetime), moment__WEBPACK_IMPORTED_MODULE_2__(JSON.stringify(data === null || data === void 0 ? void 0 : data.followup_datetime)).format("HH:mm:ss"));
            this.followUpForm = this.fb.group({
                followup_datetime: [data === null || data === void 0 ? void 0 : data.followup_datetime, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                followup_time: [data === null || data === void 0 ? void 0 : data.followup_datetime, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                followup_type: [(_d = data === null || data === void 0 ? void 0 : data.followup_type) === null || _d === void 0 ? void 0 : _d.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                comments: [this._currLanguage == 'en' ? (_e = data === null || data === void 0 ? void 0 : data.comments) === null || _e === void 0 ? void 0 : _e.en : (_f = data === null || data === void 0 ? void 0 : data.comments) === null || _f === void 0 ? void 0 : _f.hi, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
        }
        ;
    }
    getActivityList() {
        let data = { 'model_name': 'Activity' };
        this.http.getMasterData(data).subscribe((res) => {
            if (res.success) {
                this.activityList = res.data;
            }
        });
    }
    getFolloupList() {
        let data = { 'model_name': 'FollowUp' };
        this.http.getMasterData(data).subscribe((res) => {
            if (res.success) {
                this.followUpList = res.data;
            }
        });
    }
    submitForm(form) {
        console.log(JSON.stringify(Array.from(this._currVoterId)));
        if (this.followUpForm.invalid) {
            return;
        }
        this.api_loading['button_markActivity'] = true;
        let data = new FormData();
        data.append('voter_id', JSON.stringify([this._currVoterId]));
        this.currFormType == 'activity' ? data.append('activity_type', this.followUpForm.get('activity_type').value) : data.append('followup_type', this.followUpForm.get('followup_type').value);
        data.append('comments', this.followUpForm.get('comments').value);
        this.currFormType == 'activity' ?
            data.append('activity_date', moment__WEBPACK_IMPORTED_MODULE_2__(this.followUpForm.get('followup_datetime').value).format("YYYY-MM-DD")) :
            data.append('followup_datetime', moment__WEBPACK_IMPORTED_MODULE_2__(this.followUpForm.get('followup_datetime').value).format("YYYY-MM-DD") + ' ' + moment__WEBPACK_IMPORTED_MODULE_2__(this.followUpForm.get('followup_datetime').value).format("HH:mm:ss"));
        this.fileList.forEach((file, index) => {
            data.append(`file_set`, file); // Assuming file is a File object
        });
        // data.append('file_set', JSON.stringify(Array.from(this.fileList)))
        // this.currFormType == 'followUp' ? data.append('followup_time',moment(this.followUpForm.get('followup_datetime').value).format("HH:mm:ss")):'';
        // if(this.currFormType == 'activity'){console.log('Activity')}else{console.log('FollowUp')}
        let url = (this.currFormType == 'activity' ? ((this.isEdit ? this.http.editVoterActivity(this._currActivityFollowupId, data) : this.http.addVoterActivity(data))) :
            (this.isEdit ? this.http.editVoterFollowup(this._currActivityFollowupId, data) : this.http.addVoterFollowup(data)));
        url.subscribe((res) => {
            if (res.success) {
                this.callMultipleAPI();
                this.quickViewVisible = false;
                this.followUpForm.reset();
                this.message.success(res.message);
                this.api_loading['button_markActivity'] = false;
            }
            else {
                this.message.error(res.message);
                this.api_loading['button_markActivity'] = false;
            }
        }, error => {
            this.api_loading['button_markActivity'] = false;
        });
    }
    openRatingModal() {
    }
    rateVoter() {
        this.api_loading['btn_Rating'] = true;
        let data = new FormData();
        // data['voter_id'] = this._currVoterId
        data.append('rating', JSON.stringify(this.rating));
        this.http.editVoter(this._currVoterId, data).subscribe((res) => {
            if (res.success) {
                this.api_loading['btn_Rating'] = false;
                this.isRatingDrawer = false;
                this.getVoterDetals();
                this.message.success(res.message);
            }
            else {
                this.api_loading['btn_Rating'] = false;
                this.isRatingDrawer = false;
                this.message.success(res.message);
            }
        }, error => {
            this.api_loading['btn_Rating'] = false;
            this.isRatingDrawer = false;
        });
    }
    createVoterProfileForm() {
        var _a, _b, _c;
        // this.isEdit = true
        this.voterProfileForm = this.fb.group({
            name: [this.voterDetails ? (this._currLanguage == 'en' ? (_a = this.voterDetails) === null || _a === void 0 ? void 0 : _a.full_name_en : (_b = this.voterDetails) === null || _b === void 0 ? void 0 : _b.full_name_hi) : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            gender: [this.voterDetails ? (_c = this.voterDetails) === null || _c === void 0 ? void 0 : _c.gender : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            // email:['',[Validators.required]],
            occupation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            area: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            street: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            school: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            college: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    formatter(value) {
        let returnData = '';
        if (value == 1) {
            returnData = 'Pro BJP - 100% BJP';
        }
        else if (value == 2) {
            returnData = 'BJP Positive';
        }
        else if (value == 3) {
            returnData = 'Neutral';
        }
        else if (value == 4) {
            returnData = 'Congress positive';
        }
        else if (value == 5) {
            returnData = 'Pro Congress - 100% congress';
        }
        return returnData;
    }
    deleteEmployee(i) {
        this.fileList.splice(i, 1);
    }
    getAttributeList(keyword) {
        let data = { "voter_id": this._currVoterId };
        this.http.getRelationshipTags(data).subscribe((res) => {
            if (res.success) {
                this.attributeList = res.data;
                this.attributeList.forEach(element => {
                    element['_currTagValue'] = "";
                    element['_isVisible'] = false;
                });
            }
        });
    }
    getRelationshipList(keyword) {
        let data = { "voter_id": this._currVoterId };
        data['for_relationship'] = "YES";
        this.http.getRelationList(data).subscribe((res) => {
            if (res.success) {
                this.relationshipList = res.data;
                console.log(this.relationshipList);
                this.relationshipList.forEach(element => {
                    element['_currTagValue'] = "";
                    element['_isVisible'] = false;
                });
            }
        });
    }
    putVoterFacebookLink() {
        var _a, _b, _c, _d;
        if ((_a = this.facebookForm) === null || _a === void 0 ? void 0 : _a.valid) {
            this.isFacebook = true;
            let formData = new FormData();
            formData.append('facebook_link', (_c = (_b = this.facebookForm) === null || _b === void 0 ? void 0 : _b.get('facebook_link')) === null || _c === void 0 ? void 0 : _c.value);
            this.http
                .putVoterFacebookLink((_d = this.voterDetails) === null || _d === void 0 ? void 0 : _d.epic_no, formData)
                .subscribe((res) => {
                if (res === null || res === void 0 ? void 0 : res.success) {
                    this.message.success('Facebook link saved successfully');
                }
                else {
                    this.message.error(res === null || res === void 0 ? void 0 : res.message);
                }
                this.isFacebook = false;
                this.isVisible = false;
                this.getVoterDetals();
            }, (error) => {
                this.message.error(error === null || error === void 0 ? void 0 : error.message);
                this.isFacebook = false;
                this.isVisible = false;
            });
        }
        else {
            this.message.error('Please fill in all the required fields');
            Object.keys(this.facebookForm.controls).forEach((controlName) => {
                const control = this.facebookForm.get(controlName);
                if (control.invalid) {
                    // console.log(controlName)
                    control.markAsDirty();
                    control.updateValueAndValidity({ onlySelf: true });
                }
            });
        }
    }
    showModal(str) {
        this.modalTitle = str;
        this.isVisible = true;
    }
    handleCancel() {
        this.isVisible = false;
    }
}
VoterProfileComponent.ɵfac = function VoterProfileComponent_Factory(t) { return new (t || VoterProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
VoterProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoterProfileComponent, selectors: [["app-voter-profile"]], decls: 61, vars: 21, consts: [[3, "nzLoading"], [1, "d-flex", "justify-content-between", "p-3", "mt-2"], [1, "d-flex"], ["nzIcon", "user", "width", "80", "height", "80", 1, "mr-3", "rounded-circle", 3, "src"], [1, "d-flex", "flex-column"], [1, "text-dark", "font-size-16"], [1, "text-primary", "mb-2"], [1, "d-flex", "flex-wrap"], [1, "text-primary", "mb-2", "mr-3"], [1, "border", "text-primary", "text-center", "align-self-start", 3, "nzColor"], ["nz-icon", "", "class", "text-warning mr-2", 3, "nzType", "nzTheme", 4, "ngIf"], ["class", "font-size-12 mb-2", 3, "ngClass", 4, "ngIf"], [1, "d-lg-none", "d-flex"], ["nz-dropdown", "", 1, "selectFilter2", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["menu", "nzDropdownMenu"], ["nz-menu", "", "nzSelectable", ""], ["nz-menu-item", ""], ["nz-button", "", "nzType", "link", "nzSize", "small", 1, "border", "mr-3", 3, "click"], ["nz-button", "", "nzType", "link", "routerLink", "/voter/edit-voter", "nzSize", "small", 1, "d-flex", "align-items-center", 2, "border", "1px solid #3C0480", 3, "queryParams", "click"], ["nz-icon", "", "nzType", "form", "nzTheme", "outline", 1, "mr-2"], [1, "d-lg-flex", "d-none", "justify-content-between", "mb-2"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 1, "mb-3", "mr-3", 3, "click"], ["nz-icon", "", "nzType", "facebook", "nzTheme", "outline"], [1, "d-lg-flex", "d-none", "justify-content-start"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 1, "mr-3", 3, "click"], [3, "nzTabPosition", "nzSelectedIndex", "nzSelectedIndexChange", "nzSelectChange"], ["class", "text-gray", 3, "nzDisabled", "nzTitle", "nzForceRender", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["nz-icon", "", 1, "text-warning", "mr-2", 3, "nzType", "nzTheme"], [1, "font-size-12", "mb-2", 3, "ngClass"], [1, "text-gray", 3, "nzDisabled", "nzTitle", "nzForceRender"], ["tabName", ""], [4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [1, "row"], ["class", "col-lg-6 col-12 my-3", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "col-12", "my-3"], [1, "d-flex", "align-items-center", "w-100"], ["alt", "", 1, "mr-3", 3, "src"], [1, "mb-0"], [1, "my-2"], [1, "col-md-12"], [1, "col-md-12", "mb-3"], ["nzTitle", "Activity Information", 3, "nzLoading"], [1, "d-block", "d-lg-none"], [3, "nzData", "nzTotal", "nzFrontPagination", "nzShowSizeChanger", "nzScroll"], ["rowSelectionTable", ""], ["nzWidth", "4rem"], [1, "text-left"], ["nzRight", "", "nzWidth", "6rem"], ["class", "d-lg-block d-none", 4, "ngFor", "ngForOf"], ["nzTitle", "Follow up Information", 3, "nzLoading"], ["nzRight", ""], ["nz-button", "", "nzType", "link", "nzSize", "small", 1, "border", 3, "click"], [1, "d-lg-block", "d-none"], [1, "cardBorder", "my-3"], ["nzDirection", "vertical", 3, "nzProgressDot", "nzCurrent"], [3, "nzTitle", "nzDescription"], ["descriptionTemplate", ""], ["titleTemplate", ""], [1, "d-flex", "justify-content-between"], ["nz-dropdown", "", 1, "m-0", "font-size-16", "font-weight-semibold", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down", "nzTheme", "outline", 1, "ml-2"], [1, "d-flex", "flex-column", "mr-3"], [1, "font-size-14", "mr-3"], ["latestUploadDropDown", "nzDropdownMenu"], ["nz-button", "", "nzType", "link", "clas", "border", 3, "click"], [3, "voterId", "attributeList"], [3, "voterId"], ["height", "500", "nzPlacement", "bottom", 3, "nzWidth", "nzBodyStyle", "nzTitle", "nzClosable", "nzVisible", "nzHeight", "nzOnClose"], [1, "row", "mx-3"], ["nz-form", "", 3, "formGroup"], [1, "row", "mt-3"], ["nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs", "nzErrorTip"], ["formControlName", "followup_datetime"], ["class", "col-md-12", 4, "ngIf"], [1, "text-left", 3, "nzSm", "nzXs"], [1, "d-flex", "flex-wrap", "justify-content-between"], ["nzListType", "text", 3, "nzBeforeUpload", "nzMultiple"], ["nz-button", "", "nzType", "primary", 1, "my-md-4"], ["class", "d-flex flex-column mt-3 w-100", "style", " height: auto; max-height: 10rem; overflow-y: scroll;", 4, "ngIf"], ["class", "col-md-12 mt-5", 4, "ngIf"], ["nzErrorTip", "Please enter comments!", 3, "nzSm", "nzXs"], ["rows", "4", "nz-input", "", "formControlName", "comments", "placeholder", "Enter Comments"], [1, "d-flex", "justify-content-center"], ["nz-button", "", "nzBlock", "", "nzSize", "large", 1, "login-form-button", "font-size-16", "font-weight-semibold", "px-5", 2, "max-width", "30rem", 3, "nzType", "disabled", "nzLoading", "click"], ["filtersTemplate", ""], ["formControlName", "followup_time", 3, "nzFormat"], [1, "d-flex", "flex-column", "mt-3", "w-100", 2, "height", "auto", "max-height", "10rem", "overflow-y", "scroll"], ["class", "d-flex justify-content-between text-muted align-items-center px-2", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "text-muted", "align-items-center", "px-2"], [1, "m-2"], ["nz-icon", "", 1, "text-danger", "ml-2", 3, "nzType", "nzTheme", "click"], ["nzErrorTip", "Please select your activity!", 3, "nzSm", "nzXs"], ["nzPlaceHolder", "Select Actvity", "formControlName", "activity_type", "nzShowSearch", "", "nzAllowClear", "", 3, "nzFocus", "click"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], [1, "col-md-12", "mt-5"], ["nzErrorTip", "Please select your followup type!", 3, "nzSm", "nzXs"], ["nzPlaceHolder", "Select Follow up", "formControlName", "followup_type", "nzShowSearch", "", "nzAllowClear", "", 3, "nzFocus", "click"], [1, "d-flex", "justify-content-between", "align-items-center"], ["nzPlacement", "bottom", 3, "nzWidth", "nzBodyStyle", "nzTitle", "nzClosable", "nzVisible", "nzOnClose"], [1, "d-flex", "justify-content-center", "flex-column"], [1, "col-sm-12", "col-6", "mb-3"], [1, "col-lg-6", "col-md-6", "col-12", "mx-auto"], [3, "ngModel", "nzMarks", "nzMin", "nzMax", "nzTipFormatter", "ngModelChange"], ["for", "", 1, "mb-3"], [1, "font-size-12", "text-primary"], ["nz-button", "", "nzType", "primary", "nzBlock", "", 1, "mx-3", "align-self-center", 2, "max-width", "18rem", 3, "nzLoading", "click"], [3, "nzVisible", "nzTitle", "nzFooter", "nzVisibleChange", "nzOnCancel"], [4, "nzModalContent"], [1, "row", 3, "formGroup"], [1, "col-12", "mb-3"], ["type", "text", "nz-input", "", "formControlName", "facebook_link", 3, "placeholder"], ["facebookError", ""], [1, "col-12", "d-flex", "justify-content-center"], ["nzType", "link", "nz-button", "", 1, "text-primary", "border-primary", "mr-3", 3, "click"], ["nzType", "primary", "nz-button", "", 1, "text-white", "bg-primary", 3, "disabled", "nzLoading", "click"]], template: function VoterProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Rating : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-tag", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, VoterProfileComponent_span_15_Template, 1, 2, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, VoterProfileComponent_label_17_Template, 2, 2, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Actions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nz-dropdown-menu", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterProfileComponent_Template_button_click_26_listener() { ctx.rating = ctx.voterDetails == null ? null : ctx.voterDetails.rating; return ctx.isRatingDrawer = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Rate Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterProfileComponent_Template_button_click_29_listener() { return ctx.createVoterProfileForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterProfileComponent_Template_button_click_33_listener() { ctx.rating = ctx.voterDetails == null ? null : ctx.voterDetails.rating; return ctx.isRatingDrawer = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Rate Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterProfileComponent_Template_button_click_35_listener() { return ctx.createVoterProfileForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterProfileComponent_Template_button_click_39_listener() { return ctx.createNewFollow("activity"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Mark Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterProfileComponent_Template_button_click_41_listener() { return ctx.createNewFollow("followUp"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Follow Up man");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterProfileComponent_Template_button_click_43_listener() { return ctx.showModal("facebook"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterProfileComponent_Template_button_click_47_listener() { return ctx.createNewFollow("activity"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Mark Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterProfileComponent_Template_button_click_49_listener() { return ctx.createNewFollow("followUp"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Follow Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoterProfileComponent_Template_button_click_51_listener() { return ctx.showModal("facebook"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "nz-tabset", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzSelectedIndexChange", function VoterProfileComponent_Template_nz_tabset_nzSelectedIndexChange_56_listener($event) { return ctx._currTabName = $event; })("nzSelectChange", function VoterProfileComponent_Template_nz_tabset_nzSelectChange_56_listener($event) { return ctx.onTabChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, VoterProfileComponent_nz_tab_57_Template, 7, 7, "nz-tab", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, VoterProfileComponent_section_58_Template, 35, 29, "section", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, VoterProfileComponent_section_59_Template, 16, 14, "section", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, VoterProfileComponent_section_60_Template, 3, 3, "section", 28);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.api_loading["card"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "../.././../assets/images/avatars/default.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? ctx.voterDetails == null ? null : ctx.voterDetails.full_name_en : ctx.voterDetails == null ? null : ctx.voterDetails.full_name_hi, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Voter ID : ", ctx._currLanguage == "en" ? ctx.voterDetails == null ? null : ctx.voterDetails.epic_no : ctx.voterDetails == null ? null : ctx.voterDetails.epic_no, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColor", "purple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.voterDetails == null ? null : ctx.voterDetails.rating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.voterDetails == null ? null : ctx.voterDetails.rating) ? (ctx.voterDetails == null ? null : ctx.voterDetails.rating) + "/5" : "No Rating", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.voterDetails == null ? null : ctx.voterDetails.rating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownMenu", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c3, ctx._currVoterId));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c3, ctx._currVoterId));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTabPosition", "top")("nzSelectedIndex", ctx._currTabName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.partyTabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quickViewVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRatingDrawer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modalTitle === "facebook");
    } }, directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__["NzCardComponent"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_8__["NzTagComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropDownADirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropDownDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__["NzMenuDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__["NzMenuItemDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__["NzButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__["NzWaveDirective"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_16__["NzTabSetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_16__["NzTabComponent"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_17__["NzDividerComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__["NzCellFixedDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__["NzTbodyComponent"], ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_19__["NzStepsComponent"], ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_19__["NzStepComponent"], _primary_attributes_primary_attributes_component__WEBPACK_IMPORTED_MODULE_20__["PrimaryAttributesComponent"], _relationship_mapping_relationship_mapping_component__WEBPACK_IMPORTED_MODULE_21__["RelationshipMappingComponent"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_22__["NzDrawerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_23__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_24__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_23__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_24__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_23__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_23__["NzFormControlComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_25__["NzDatePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_26__["NzUploadComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__["NzInputGroupComponent"], ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_28__["NzTimePickerComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_29__["NzSelectComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_29__["NzOptionComponent"], ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_30__["NzSliderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_31__["NzModalComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_31__["NzModalContentDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2b3Rlci1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoterProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-voter-profile',
                templateUrl: './voter-profile.component.html',
                styleUrls: ['./voter-profile.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] }, { type: src_app_service_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] }, { type: src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "ZyQt":
/*!*******************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tag.js ***!
  \*******************************************************************************/
/*! exports provided: NzTagComponent, NzTagModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTagComponent", function() { return NzTagComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTagModule", function() { return NzTagModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/color */ "o8Me");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");











/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */





function NzTagComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzTagComponent_i_1_Template_i_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.closeTag($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = ["*"];
class NzTagComponent {
    constructor(cdr, renderer, elementRef, directionality) {
        this.cdr = cdr;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.directionality = directionality;
        this.isPresetColor = false;
        this.nzMode = 'default';
        this.nzChecked = false;
        this.nzOnClose = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzCheckedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.dir = 'ltr';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-tag');
    }
    updateCheckedStatus() {
        if (this.nzMode === 'checkable') {
            this.nzChecked = !this.nzChecked;
            this.nzCheckedChange.emit(this.nzChecked);
        }
    }
    closeTag(e) {
        this.nzOnClose.emit(e);
        if (!e.defaultPrevented) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        }
    }
    /**
     * @deprecated
     * move to host after View Engine deprecation
     * host: {
     *   '[class]': `isPresetColor ? ('ant-tag-' + nzColor) : ''`
     * }
     */
    clearPresetColor() {
        const hostElement = this.elementRef.nativeElement;
        // /(ant-tag-(?:pink|red|...))/g
        const regexp = new RegExp(`(ant-tag-(?:${[...ng_zorro_antd_core_color__WEBPACK_IMPORTED_MODULE_3__["presetColors"], ...ng_zorro_antd_core_color__WEBPACK_IMPORTED_MODULE_3__["statusColors"]].join('|')}))`, 'g');
        const classname = hostElement.classList.toString();
        const matches = [];
        let match = regexp.exec(classname);
        while (match !== null) {
            matches.push(match[1]);
            match = regexp.exec(classname);
        }
        hostElement.classList.remove(...matches);
    }
    /**
     * @deprecated
     * move to host after View Engine deprecation
     * host: {
     *   '[class]': `isPresetColor ? ('ant-tag-' + nzColor) : ''`
     * }
     */
    setPresetColor() {
        const hostElement = this.elementRef.nativeElement;
        this.clearPresetColor();
        if (!this.nzColor) {
            this.isPresetColor = false;
        }
        else {
            this.isPresetColor = Object(ng_zorro_antd_core_color__WEBPACK_IMPORTED_MODULE_3__["isPresetColor"])(this.nzColor) || Object(ng_zorro_antd_core_color__WEBPACK_IMPORTED_MODULE_3__["isStatusColor"])(this.nzColor);
        }
        if (this.isPresetColor) {
            hostElement.classList.add(`ant-tag-${this.nzColor}`);
        }
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnChanges(changes) {
        const { nzColor } = changes;
        if (nzColor) {
            this.setPresetColor();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTagComponent.ɵfac = function NzTagComponent_Factory(t) { return new (t || NzTagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], 8)); };
NzTagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzTagComponent, selectors: [["nz-tag"]], hostVars: 10, hostBindings: function NzTagComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzTagComponent_click_HostBindingHandler() { return ctx.updateCheckedStatus(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", ctx.isPresetColor ? "" : ctx.nzColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-tag-has-color", ctx.nzColor && !ctx.isPresetColor)("ant-tag-checkable", ctx.nzMode === "checkable")("ant-tag-checkable-checked", ctx.nzChecked)("ant-tag-rtl", ctx.dir === "rtl");
    } }, inputs: { nzMode: "nzMode", nzChecked: "nzChecked", nzColor: "nzColor" }, outputs: { nzOnClose: "nzOnClose", nzCheckedChange: "nzCheckedChange" }, exportAs: ["nzTag"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [["nz-icon", "", "nzType", "close", "class", "ant-tag-close-icon", "tabindex", "-1", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "close", "tabindex", "-1", 1, "ant-tag-close-icon", 3, "click"]], template: function NzTagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTagComponent_i_1_Template, 1, 0, "i", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzMode === "closeable");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconDirective"]], encapsulation: 2, changeDetection: 0 });
NzTagComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] }
];
NzTagComponent.propDecorators = {
    nzMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzChecked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzOnClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzCheckedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzTagComponent.prototype, "nzChecked", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzTagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'nz-tag',
                exportAs: 'nzTag',
                preserveWhitespaces: false,
                template: `
    <ng-content></ng-content>
    <i nz-icon nzType="close" class="ant-tag-close-icon" *ngIf="nzMode === 'closeable'" tabindex="-1" (click)="closeTag($event)"></i>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                host: {
                    '[style.background-color]': `isPresetColor ? '' : nzColor`,
                    '[class.ant-tag-has-color]': `nzColor && !isPresetColor`,
                    '[class.ant-tag-checkable]': `nzMode === 'checkable'`,
                    '[class.ant-tag-checkable-checked]': `nzChecked`,
                    '[class.ant-tag-rtl]': `dir === 'rtl'`,
                    '(click)': 'updateCheckedStatus()'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }]; }, { nzMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzChecked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzOnClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzCheckedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTagModule {
}
NzTagModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NzTagModule });
NzTagModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NzTagModule_Factory(t) { return new (t || NzTagModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzTagModule, { declarations: function () { return [NzTagComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"]]; }, exports: function () { return [NzTagComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzTagModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"]],
                declarations: [NzTagComponent],
                exports: [NzTagComponent]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-tag.js.map

/***/ }),

/***/ "b4ET":
/*!****************************************************************************************!*\
  !*** ./src/app/voter/voter-profile/primary-attributes/primary-attributes.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PrimaryAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryAttributesComponent", function() { return PrimaryAttributesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/http.service */ "9NvV");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");












function PrimaryAttributesComponent_div_2_ng_template_2_nz_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 14);
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", (item_r9 == null ? null : item_r9.name == null ? null : item_r9.name.en) ? item_r9 == null ? null : item_r9.name == null ? null : item_r9.name.en : item_r9 == null ? null : item_r9.name == null ? null : item_r9.name.hi)("nzLabel", ctx_r6._currLanguage == "en" ? item_r9 == null ? null : item_r9.name == null ? null : item_r9.name.en : item_r9 == null ? null : item_r9.name == null ? null : item_r9.name.hi);
} }
function PrimaryAttributesComponent_div_2_ng_template_2_ng_template_6_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 16);
} }
function PrimaryAttributesComponent_div_2_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PrimaryAttributesComponent_div_2_ng_template_2_ng_template_6_span_0_Template, 1, 0, "span", 15);
} if (rf & 2) {
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.attributeList[i_r2]._isVisible);
} }
function PrimaryAttributesComponent_div_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrimaryAttributesComponent_div_2_ng_template_2_Template_nz_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return item_r1._currTagValue = $event; })("nzFocus", function PrimaryAttributesComponent_div_2_ng_template_2_Template_nz_select_nzFocus_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.getTagLIst(item_r1 == null ? null : item_r1.id); })("keyup", function PrimaryAttributesComponent_div_2_ng_template_2_Template_nz_select_keyup_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.test($event, i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PrimaryAttributesComponent_div_2_ng_template_2_nz_option_4_Template, 1, 2, "nz-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrimaryAttributesComponent_div_2_ng_template_2_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const item_r1 = ctx_r20.$implicit; const i_r2 = ctx_r20.index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.addTagForAttribute(item_r1, i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PrimaryAttributesComponent_div_2_ng_template_2_ng_template_6_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nz-spin", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4._currLanguage == "en" ? item_r1 == null ? null : item_r1.name == null ? null : item_r1.name.en : item_r1 == null ? null : item_r1.name == null ? null : item_r1.name.hi);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r1._currTagValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.tagsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzIndicator", _r7);
} }
function PrimaryAttributesComponent_div_2_nz_tag_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tag");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r22 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r22 ? ctx_r5._currLanguage == "en" ? tag_r22 == null ? null : tag_r22.name == null ? null : tag_r22.name.en : tag_r22 == null ? null : tag_r22.name == null ? null : tag_r22.name.hi : "", " ");
} }
function PrimaryAttributesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PrimaryAttributesComponent_div_2_ng_template_2_Template, 9, 4, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PrimaryAttributesComponent_div_2_nz_tag_5_Template, 2, 1, "nz-tag", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1 == null ? null : item_r1.tags);
} }
class PrimaryAttributesComponent {
    constructor(http, message) {
        this.http = http;
        this.message = message;
        this.attributeList = [];
        this.isPresent = false;
    }
    ngOnInit() {
        this._currLanguage = localStorage.getItem("appLanguage") || 'en';
        if (this.voterId && !this.attributeList) {
            let count = 1;
            this.getAttributeList();
            count++;
        }
    }
    getAttributeList(keyword) {
        let data = { "voter_id": this.voterId };
        this.http.getRelationshipTags(data).subscribe((res) => {
            if (res.success) {
                this.attributeList = res.data;
                this.attributeList.forEach(element => {
                    element['_currTagValue'] = "";
                    element['_isVisible'] = false;
                });
            }
        });
    }
    getTagLIst(isSearch, key) {
        let data = { "model_name": "TagMaster" };
        clearTimeout(this.debounce);
        this.debounce = setTimeout(() => {
            this.http.getMasterData(data).subscribe((res) => {
                if (res.success) {
                    this.tagsList = res.data;
                }
            });
        }, 500);
    }
    addTagForAttribute(data, i) {
        this.attributeList[i]._isVisible = true;
        let param = { "voter_id": [this.voterId], "primary_attribute": data === null || data === void 0 ? void 0 : data.id, "tag": data === null || data === void 0 ? void 0 : data._currTagValue };
        this.http.addVoterTasg(param).subscribe((res) => {
            if (res.success) {
                this.message.success(res.message);
                this.getAttributeList();
                this.attributeList[i]._isVisible = false;
            }
            else {
                this.message.error(res.message);
                this.attributeList[i]._isVisible = false;
            }
        });
    }
    test(data, id) {
        var _a;
        this.attributeList[id]._currTagValue = data.target.value;
        if (((_a = this.tagsList) === null || _a === void 0 ? void 0 : _a.lengt) == 0 || this.tagsList == undefined || this.tagsList == null) {
            return;
        }
        let temp = this.tagsList.find(item => { var _a; ((_a = item === null || item === void 0 ? void 0 : item.name) === null || _a === void 0 ? void 0 : _a.en) == this.attributeList[id]._currTagValue; });
    }
}
PrimaryAttributesComponent.ɵfac = function PrimaryAttributesComponent_Factory(t) { return new (t || PrimaryAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"])); };
PrimaryAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrimaryAttributesComponent, selectors: [["app-primary-attributes"]], inputs: { voterId: "voterId", attributeList: "attributeList" }, decls: 3, vars: 1, consts: [[1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [3, "nzTitle"], ["adAttribute", ""], [1, "d-flex", "flex-wrap", "align-items-center"], [4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "flex-wrap", "w-100"], [1, "mr-5"], ["nzPlaceHolder", "Enter Tags to Map", "nzShowSearch", "", "nzAllowClear", "", 1, "selectFilter", "mr-2", 3, "ngModel", "ngModelChange", "nzFocus", "keyup"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nz-icon", "", "nzType", "plus-circle", "nzTheme", "outline", 1, "mr-3", 3, "click"], ["indicatorTemplate", ""], ["nzSimple", "", 3, "nzIndicator"], [3, "nzValue", "nzLabel"], ["nz-icon", "", "nzType", "loading", 4, "ngIf"], ["nz-icon", "", "nzType", "loading"]], template: function PrimaryAttributesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PrimaryAttributesComponent_div_2_Template, 6, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.attributeList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_5__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_9__["NzSpinComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_5__["NzOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_10__["NzTagComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmltYXJ5LWF0dHJpYnV0ZXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrimaryAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-primary-attributes',
                templateUrl: './primary-attributes.component.html',
                styleUrls: ['./primary-attributes.component.css']
            }]
    }], function () { return [{ type: src_app_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] }]; }, { voterId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], attributeList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "k7L/":
/*!******************************************************************!*\
  !*** ./src/app/voter/add-edit-voter/add-edit-voter.component.ts ***!
  \******************************************************************/
/*! exports provided: AddEditVoterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditVoterComponent", function() { return AddEditVoterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/http.service */ "9NvV");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
















function AddEditVoterComponent_nz_option_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 32);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r1.id)("nzLabel", ctx_r0._currLanguage == "en" ? (item_r1 == null ? null : item_r1.name == null ? null : item_r1.name.en) + "/" + (item_r1 == null ? null : item_r1.Ward == null ? null : item_r1.Ward.name == null ? null : item_r1.Ward.name.en) : (item_r1 == null ? null : item_r1.name == null ? null : item_r1.name.hi) + "/" + (item_r1 == null ? null : item_r1.Ward == null ? null : item_r1.Ward.name == null ? null : item_r1.Ward.name.hi));
} }
class AddEditVoterComponent {
    constructor(fb, router, acRoute, message, http) {
        this.fb = fb;
        this.router = router;
        this.acRoute = acRoute;
        this.message = message;
        this.http = http;
        this.isEdit = false;
        this.api_loading = { card: false, button: false };
        this.boothList = [];
        this.wardList = [];
        this.sectorList = [];
    }
    ngOnInit() {
        this._currLanguage = localStorage.getItem("appLanguage") || 'en';
        this.acRoute.queryParams.subscribe((params) => {
            if (params['id']) {
                this.curr_voterId = params.id;
                this.isEdit = true;
                if (this.curr_voterId) {
                    this.getVoterDetails();
                }
            }
            this.createVoter();
        });
    }
    getVoterDetails() {
        this.searchStaticDataGlobalFunction('Booth');
        let data = { id: this.curr_voterId, 'end_point': 'FETCH_VOTER_LIST_API_URL' };
        this.api_loading['card'] = true;
        console.log(this.curr_voterId);
        this.http.getVoterDetails(data).subscribe((res) => {
            if (res.success) {
                this.voterDetails = res.data[0];
                this.createVoter(res.data[0]);
                this.api_loading['card'] = false;
            }
            else {
                this.api_loading['card'] = false;
            }
        }, error => { this.api_loading['card'] = false; });
    }
    createVoter(data) {
        this.voterForm = this.fb.group({
            FIRST_NAME: [(data ? (this._currLanguage == 'en' ? data === null || data === void 0 ? void 0 : data.first_name_en : data === null || data === void 0 ? void 0 : data.first_name_hi) : ''), [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            LAST_NAME: [(data ? (this._currLanguage == 'en' ? data === null || data === void 0 ? void 0 : data.last_name_en : data === null || data === void 0 ? void 0 : data.last_name_hi) : ''), [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            FULL_NAME: [(data ? (this._currLanguage == 'en' ? data === null || data === void 0 ? void 0 : data.full_name_en : data === null || data === void 0 ? void 0 : data.full_name_hi) : '')],
            mobile: [(data ? (this._currLanguage == 'en' ? data === null || data === void 0 ? void 0 : data.mobile : data === null || data === void 0 ? void 0 : data.mobile) : ''), [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            caste: [(data ? (this._currLanguage == 'en' ? data === null || data === void 0 ? void 0 : data.caste : data === null || data === void 0 ? void 0 : data.caste) : ''), [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            RLN_TYPE: [(data ? (this._currLanguage == 'en' ? data === null || data === void 0 ? void 0 : data.rln_type : data === null || data === void 0 ? void 0 : data.rln_type) : '')],
            RLN_FIRST_NAME: [(data ? (this._currLanguage == 'en' ? data === null || data === void 0 ? void 0 : data.rln_first_name_en : data === null || data === void 0 ? void 0 : data.rln_first_name_hi) : '')],
            RLN_LAST_NAME: [(data ? (this._currLanguage == 'en' ? data === null || data === void 0 ? void 0 : data.rln_last_name_en : data === null || data === void 0 ? void 0 : data.rln_last_name_hi) : '')],
            RLN_FULL_NAME: [(data ? (this._currLanguage == 'en' ? data === null || data === void 0 ? void 0 : data.rln_full_name_en : data === null || data === void 0 ? void 0 : data.rln_full_name_hi) : '')],
            // FULL_NAME_WITH_RLN: [(data ? (this._currLanguage == 'en' ? data?.full_name_en_with_rln : data?.full_name_hi_with_rln) : ''), [Validators.required]],
            GENDER: [(data ? (this._currLanguage == 'en' ? data === null || data === void 0 ? void 0 : data.gender : data === null || data === void 0 ? void 0 : data.gender) : '')],
            AGE: [(data ? (this._currLanguage == 'en' ? data === null || data === void 0 ? void 0 : data.age : data === null || data === void 0 ? void 0 : data.age) : ''), [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            EPIC_NO: [(data ? (this._currLanguage == 'en' ? data === null || data === void 0 ? void 0 : data.epic_no : data === null || data === void 0 ? void 0 : data.epic_no) : ''), [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            PSBUILDING_NAME: [(data ? (this._currLanguage == 'en' ? data === null || data === void 0 ? void 0 : data.psbuilding_name_en : data === null || data === void 0 ? void 0 : data.psbuilding_name_hi) : ''),],
            SECTION_NAME: [(data ? (this._currLanguage == 'en' ? data === null || data === void 0 ? void 0 : data.section_name_en : data === null || data === void 0 ? void 0 : data.section_name_hi) : ''),],
            PART_NAME: [(data ? (this._currLanguage == 'en' ? data === null || data === void 0 ? void 0 : data.part_name_en : data === null || data === void 0 ? void 0 : data.part_name_hi) : ''),],
            SLNOINPART: [(data ? (this._currLanguage == 'en' ? data === null || data === void 0 ? void 0 : data.slnoinpart : data === null || data === void 0 ? void 0 : data.slnoinpart) : ''),],
            PART_NO: [(data ? (this._currLanguage == 'en' ? data === null || data === void 0 ? void 0 : data.part_no : data === null || data === void 0 ? void 0 : data.part_no) : ''),],
            booth: [(data ? (this._currLanguage == 'en' ? data === null || data === void 0 ? void 0 : data.booth : data === null || data === void 0 ? void 0 : data.booth) : ''), [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            SECTION_NO: [(data ? (this._currLanguage == 'en' ? data === null || data === void 0 ? void 0 : data.section_no : data === null || data === void 0 ? void 0 : data.section_no) : ''),],
            HOUSE_NO: [(data ? (this._currLanguage == 'en' ? data === null || data === void 0 ? void 0 : data.house_no : data === null || data === void 0 ? void 0 : data.house_no) : ''),],
            facebook_link: [(data ? (this._currLanguage == 'en' ? data === null || data === void 0 ? void 0 : data.facebook_link : data === null || data === void 0 ? void 0 : data.facebook_link) : ''),],
        });
    }
    submitForm() {
        if (this.voterForm.invalid) {
            console.log(this.voterForm);
            return;
        }
        this.api_loading['button'] = true;
        console.log(this.voterForm.value);
        var form_data = new FormData();
        // for ( var key in this.voterForm.controls ) {
        //   console.log(form_data)
        // form_data.append(key,this.voterForm[key];value,this.voterForm.controls[key].value);
        if (this.voterForm.get('FIRST_NAME').value) {
            form_data.append('FIRST_NAME', this.voterForm.get('FIRST_NAME').value);
        }
        // }
        if (this.voterForm.get('LAST_NAME').value) {
            form_data.append('LAST_NAME', this.voterForm.get('LAST_NAME').value);
        }
        if (this.voterForm.get('FULL_NAME').value) {
            form_data.append('FULL_NAME', this.voterForm.get('FULL_NAME').value);
        }
        if (this.voterForm.get('RLN_TYPE').value) {
            form_data.append('RLN_TYPE', this.voterForm.get('RLN_TYPE').value);
        }
        if (this.voterForm.get('mobile').value) {
            form_data.append('mobile', this.voterForm.get('mobile').value);
        }
        if (this.voterForm.get('caste').value) {
            form_data.append('caste', this.voterForm.get('caste').value);
        }
        if (this.voterForm.get('RLN_FIRST_NAME').value) {
            form_data.append('RLN_FIRST_NAME', this.voterForm.get('RLN_FIRST_NAME').value);
        }
        if (this.voterForm.get('RLN_LAST_NAME').value) {
            form_data.append('RLN_LAST_NAME', this.voterForm.get('RLN_LAST_NAME').value);
        }
        if (this.voterForm.get('RLN_FULL_NAME').value) {
            form_data.append('RLN_FULL_NAME', this.voterForm.get('RLN_FULL_NAME').value);
        }
        if (this.voterForm.get('GENDER').value) {
            form_data.append('GENDER', this.voterForm.get('GENDER').value);
        }
        // form_data.append('FULL_NAME_WITH_RLN',this.voterForm.get('FULL_NAME_WITH_RLN').value);
        if (this.voterForm.get('AGE').value) {
            form_data.append('AGE', this.voterForm.get('AGE').value);
        }
        if (this.voterForm.get('EPIC_NO').value) {
            form_data.append('EPIC_NO', this.voterForm.get('EPIC_NO').value);
        }
        if (this.voterForm.get('PSBUILDING_NAME').value) {
            form_data.append('PSBUILDING_NAME', this.voterForm.get('PSBUILDING_NAME').value);
        }
        if (this.voterForm.get('SECTION_NAME').value) {
            form_data.append('SECTION_NAME', this.voterForm.get('SECTION_NAME').value);
        }
        if (this.voterForm.get('PART_NAME').value) {
            form_data.append('PART_NAME', this.voterForm.get('PART_NAME').value);
        }
        if (this.voterForm.get('SLNOINPART').value) {
            form_data.append('SLNOINPART', this.voterForm.get('SLNOINPART').value);
        }
        if (this.voterForm.get('PART_NO').value) {
            form_data.append('PART_NO', this.voterForm.get('PART_NO').value);
        }
        if (this.voterForm.get('booth').value) {
            form_data.append('booth', this.voterForm.get('booth').value);
        }
        if (this.voterForm.get('SECTION_NO').value) {
            form_data.append('SECTION_NO', this.voterForm.get('SECTION_NO').value);
        }
        if (this.voterForm.get('HOUSE_NO').value) {
            form_data.append('HOUSE_NO', this.voterForm.get('HOUSE_NO').value);
        }
        if (this.voterForm.get('facebook_link').value) {
            form_data.append('facebook_link', this.voterForm.get('facebook_link').value);
        }
        let url = this.isEdit == false ? this.http.addVoter(form_data) : this.http.editVoter(this.curr_voterId, form_data);
        url.subscribe((res) => {
            if (res.success) {
                this.message.success(res.message);
                !this.isEdit ? this.router.navigate(['/voter']) : this.router.navigate(['/voter/view-profile'], { queryParams: { id: this.curr_voterId } });
                this.api_loading['button'] = false;
            }
            else {
                this.api_loading['button'] = false;
            }
        }, errpr => {
            this.api_loading['button'] = false;
        });
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
                }
            });
        }, 500);
    }
    cancelForm() {
        // console.log(this.router.url.split('voter')[1].includes('/add-'));
        !this.isEdit ? this.router.navigate(['/voter']) : this.router.navigate(['/voter/view-profile'], { queryParams: { id: this.curr_voterId } });
        // this.router.navigate([this.router.url.split('?')[0]], { queryParams: { tabSection: this.curr_voterId } });
    }
}
AddEditVoterComponent.ɵfac = function AddEditVoterComponent_Factory(t) { return new (t || AddEditVoterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"])); };
AddEditVoterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddEditVoterComponent, selectors: [["app-add-edit-voter"]], decls: 136, vars: 152, consts: [[3, "nzLoading"], ["nz-form", "", 3, "formGroup"], [1, "row"], [1, "col-lg-6", "col-12"], ["nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs", "nzErrorTip"], ["type", "text", "nz-input", "", "formControlName", "FIRST_NAME", 3, "placeholder"], ["type", "text", "nz-input", "", "formControlName", "LAST_NAME", 3, "placeholder"], [1, "text-left", 3, "nzSm", "nzXs"], ["type", "text", "nz-input", "", "formControlName", "FULL_NAME", 3, "placeholder"], ["type", "text", "nz-input", "", "formControlName", "mobile", 3, "placeholder"], ["type", "text", "nz-input", "", "formControlName", "caste", 3, "placeholder"], ["type", "text", "nz-input", "", "formControlName", "GENDER", 3, "placeholder"], ["type", "text", "nz-input", "", "formControlName", "AGE", 3, "placeholder"], ["type", "text", "nz-input", "", "formControlName", "EPIC_NO", 3, "readOnly", "placeholder"], ["type", "text", "nz-input", "", "formControlName", "PSBUILDING_NAME", 3, "placeholder"], ["type", "text", "nz-input", "", "formControlName", "SECTION_NAME", 3, "placeholder"], ["type", "text", "nz-input", "", "formControlName", "PART_NAME", 3, "placeholder"], ["type", "text", "nz-input", "", "formControlName", "SLNOINPART", 3, "placeholder"], ["type", "text", "nz-input", "", "formControlName", "PART_NO", 3, "placeholder"], ["nzShowSearch", "", "formControlName", "booth", "nzAllowClear", "", "nzPlaceHolder", "Select Booth/Ward", 1, "selectFilter", "mb-2", "mr-3", 3, "nzFocus", "keyup"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["type", "text", "nz-input", "", "formControlName", "SECTION_NO", 3, "placeholder"], ["type", "text", "nz-input", "", "formControlName", "HOUSE_NO", 3, "placeholder"], ["type", "text", "nz-input", "", "formControlName", "facebook_link", 3, "placeholder"], ["type", "text", "nz-input", "", "formControlName", "RLN_TYPE", 3, "placeholder"], ["type", "text", "nz-input", "", "formControlName", "RLN_FIRST_NAME", 3, "placeholder"], ["type", "text", "nz-input", "", "formControlName", "RLN_LAST_NAME", 3, "placeholder"], ["type", "text", "nz-input", "", "formControlName", "RLN_FULL_NAME", 3, "placeholder"], [1, "d-flex", "justify-content-center"], ["nz-button", "", "nzType", "primary", 1, "px-5", 3, "disabled", "nzLoading", "click"], ["nz-button", "", "nzType", "link", 1, "ml-3", "px-5", "border", 3, "click"], [3, "nzValue", "nzLabel"]], template: function AddEditVoterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-form-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nz-form-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "nz-form-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "nz-form-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "nz-form-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "nz-form-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "nz-form-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "nz-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFocus", function AddEditVoterComponent_Template_nz_select_nzFocus_87_listener() { return ctx.searchStaticDataGlobalFunction("Booth"); })("keyup", function AddEditVoterComponent_Template_nz_select_keyup_87_listener($event) { return ctx.searchStaticDataGlobalFunction("Booth", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, AddEditVoterComponent_nz_option_88_Template, 1, 2, "nz-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "nz-form-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "nz-form-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "nz-form-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "nz-form-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "nz-form-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "nz-form-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "nz-form-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEditVoterComponent_Template_button_click_132_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEditVoterComponent_Template_button_click_134_listener() { return ctx.cancelForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.api_loading["card"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.voterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "First Name" : "\u092A\u0939\u0932\u093E \u0928\u093E\u092E", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please enter your first name" : "\u0915\u0943\u092A\u092F\u093E \u0905\u092A\u0928\u093E \u092A\u0939\u0932\u093E \u0928\u093E\u092E \u0926\u0947\u0902");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx._currLanguage == "en" ? "First Name" : "\u092A\u0939\u0932\u093E \u0928\u093E\u092E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Last Name" : "\u0909\u092A\u0928\u093E\u092E", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please enter your first name" : "\u0915\u0943\u092A\u092F\u093E \u0905\u092A\u0928\u093E \u0905\u0902\u0924\u093F\u092E \u0928\u093E\u092E \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx._currLanguage == "en" ? "Last Name" : "\u0909\u092A\u0928\u093E\u092E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Full Name" : "\u092A\u0942\u0930\u093E \u0928\u093E\u092E", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please enter your first name" : "\u0915\u0943\u092A\u092F\u093E \u0905\u092A\u0928\u093E \u092A\u0942\u0930\u093E \u0928\u093E\u092E \u0926\u0947\u0902");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx._currLanguage == "en" ? "Full Name" : "\u092A\u0942\u0930\u093E \u0928\u093E\u092E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Mobile" : "\u0917\u0924\u093F\u092E\u093E\u0928", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please enter your Mobile" : "\u0915\u0943\u092A\u092F\u093E \u0905\u092A\u0928\u093E \u0917\u0924\u093F\u092E\u093E\u0928 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx._currLanguage == "en" ? "Mobile" : "\u0917\u0924\u093F\u092E\u093E\u0928");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Caste" : "\u0932\u093F\u0902\u0917", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please enter your Caste" : "\u0915\u0943\u092A\u092F\u093E \u0905\u092A\u0928\u0940 \u091C\u093E\u0924\u093F \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx._currLanguage == "en" ? "Caste" : "\u0932\u093F\u0902\u0917");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Gender" : "\u0932\u093F\u0902\u0917", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please enter your Gender" : "\u0915\u0943\u092A\u092F\u093E \u0905\u092A\u0928\u093E \u0932\u093F\u0902\u0917 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx._currLanguage == "en" ? "Gender" : "\u0932\u093F\u0902\u0917");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Age" : "\u0906\u092F\u0941", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please enter your age" : "\u0915\u0943\u092A\u092F\u093E \u0905\u092A\u0928\u093E \u0906\u092F\u0941 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx._currLanguage == "en" ? "Age" : "\u0906\u092F\u0941");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "PSBUILDING Name" : "PSBUILDING Name", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please enter your PSBUILDING Name" : "Please enter your PSBUILDING Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx._currLanguage == "en" ? "PSBUILDING Name" : "PSBUILDING Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Section Name" : "\u0905\u0928\u0941\u092D\u093E\u0917 \u0915\u093E \u0928\u093E\u092E", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please enter your Section Name" : "\u0905\u0928\u0941\u092D\u093E\u0917 \u0915\u093E \u0928\u093E\u092E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx._currLanguage == "en" ? "Section Name" : "\u0905\u0928\u0941\u092D\u093E\u0917 \u0915\u093E \u0928\u093E\u092E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "PART_NAME" : "PART_NAME", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please enter your PART_NAME" : "Please enter your PART_NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx._currLanguage == "en" ? "PART_NAME" : "PART_NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "SLNOINPART" : "SLNOINPART", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please enter your SLNOINPART" : "Please enter your SLNOINPART");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx._currLanguage == "en" ? "SLNOINPART" : "SLNOINPART");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "PART_NO" : "PART_NO", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please enter your PART_NO" : "Please enter your PART_NO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx._currLanguage == "en" ? "PART_NO" : "PART_NO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Booth" : "Booth", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please sselect your Booth No" : "Please enter your Booth No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.boothList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "SECTION_NO" : "SECTION_NO", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please enter your SECTION_NO" : "Please enter your SECTION_NO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx._currLanguage == "en" ? "SECTION_NO" : "SECTION_NO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "House No" : "\u092E\u0915\u093E\u0928 \u0928\u0902\u092C\u0930", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please enter your House No" : "\u0915\u0943\u092A\u092F\u093E \u0905\u092A\u0928\u093E \u0939\u093E\u0909\u0938 \u0928\u0902\u092C\u0930 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx._currLanguage == "en" ? "House No" : "\u092E\u0915\u093E\u0928 \u0928\u0902\u092C\u0930");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Facebook Link" : "\u092B\u0947\u0938\u092C\u0941\u0915 \u0932\u093F\u0902\u0915", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please enter facebook link" : "\u0915\u0943\u092A\u092F\u093E \u092B\u0947\u0938\u092C\u0941\u0915 \u0932\u093F\u0902\u0915 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx._currLanguage == "en" ? "Facebook Link" : "\u092B\u0947\u0938\u092C\u0941\u0915 \u0932\u093F\u0902\u0915");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Relation Type" : "\u0938\u0902\u092C\u0902\u0927 \u092A\u094D\u0930\u0915\u093E\u0930", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please enter relation type" : "\u0915\u0943\u092A\u092F\u093E \u0905\u092A\u0928\u093E \u0938\u0902\u092C\u0902\u0927 \u092A\u094D\u0930\u0915\u093E\u0930 \u0926\u0947\u0902");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx._currLanguage == "en" ? "Relation Type" : "\u0938\u0902\u092C\u0902\u0927 \u092A\u094D\u0930\u0915\u093E\u0930");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Relation First Name" : "\u0938\u0902\u092C\u0902\u0927 \u092A\u094D\u0930\u0925\u092E \u0928\u093E\u092E", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please enter your first name" : "\u0915\u0943\u092A\u092F\u093E \u0938\u0902\u092C\u0902\u0927 \u092A\u094D\u0930\u0925\u092E \u0928\u093E\u092E \u0926\u0947\u0902");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx._currLanguage == "en" ? "Relation First Name" : "\u0938\u0902\u092C\u0902\u0927 \u092A\u094D\u0930\u0925\u092E \u0928\u093E\u092E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Relation Last Name" : "\u0938\u0902\u092C\u0902\u0927 \u0905\u0902\u0924\u093F\u092E \u0928\u093E\u092E", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please enter your first name" : "\u0938\u0902\u092C\u0902\u0927 \u0905\u0902\u0924\u093F\u092E \u0928\u093E\u092E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx._currLanguage == "en" ? "Relation Last Name" : "\u0915\u0943\u092A\u092F\u093E \u0938\u0902\u092C\u0902\u0927 \u0905\u0902\u0924\u093F\u092E \u0928\u093E\u092E \u0926\u0947\u0902");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx._currLanguage == "en" ? "Relation Full Name" : "\u0938\u0902\u092C\u0902\u0927 \u0915\u093E \u092A\u0942\u0930\u093E \u0928\u093E\u092E", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx._currLanguage == "en" ? "Please enter your first name" : "\u0915\u0943\u092A\u092F\u093E \u0905\u092A\u0928\u093E \u0938\u0902\u092C\u0902\u0927 \u0915\u093E \u092A\u0942\u0930\u093E \u0928\u093E\u092E \u0926\u0947\u0902");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx._currLanguage == "en" ? "Relation Full Name" : "\u0938\u0902\u092C\u0902\u0927 \u0915\u093E \u092A\u0942\u0930\u093E \u0928\u093E\u092E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.voterForm.invalid)("nzLoading", ctx.api_loading["button"]);
    } }, directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__["NzCardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__["NzFormControlComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__["NzSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__["NzOptionComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZWRpdC12b3Rlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEditVoterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-edit-voter',
                templateUrl: './add-edit-voter.component.html',
                styleUrls: ['./add-edit-voter.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] }, { type: src_app_service_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "nNne":
/*!***************************************!*\
  !*** ./src/app/voter/voter.module.ts ***!
  \***************************************/
/*! exports provided: VoterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoterModule", function() { return VoterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _voter_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./voter-routing.module */ "9StV");
/* harmony import */ var _voter_profile_voter_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voter-profile/voter-profile.component */ "TSwT");
/* harmony import */ var _add_edit_voter_add_edit_voter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-edit-voter/add-edit-voter.component */ "k7L/");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "oyxB");
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/steps */ "OEtX");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/drawer */ "F6ss");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ "ix5O");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/slider */ "tAs6");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/upload */ "D9mS");
/* harmony import */ var _voter_list_voter_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./voter-list/voter-list.component */ "4bBO");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "IvDN");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var _voter_profile_primary_attributes_primary_attributes_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./voter-profile/primary-attributes/primary-attributes.component */ "b4ET");
/* harmony import */ var _voter_profile_relationship_mapping_relationship_mapping_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./voter-profile/relationship-mapping/relationship-mapping.component */ "zLDN");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");



































class VoterModule {
}
VoterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VoterModule });
VoterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VoterModule_Factory(t) { return new (t || VoterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _voter_routing_module__WEBPACK_IMPORTED_MODULE_2__["VoterRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"],
            ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_9__["NzAvatarModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconModule"],
            ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_11__["NzTabsModule"],
            ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_12__["NzStepsModule"],
            ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_13__["NzDividerModule"],
            ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__["NzCardModule"],
            ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_15__["NzDrawerModule"],
            ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_16__["NzDropDownModule"],
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_17__["NzSelectModule"],
            ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_18__["NzDatePickerModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_19__["NzInputModule"],
            ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_20__["NzTimePickerModule"],
            ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_21__["NzTagModule"],
            ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_22__["NzSliderModule"],
            ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_23__["NzTableModule"],
            ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_24__["NzUploadModule"],
            ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_26__["NzPageHeaderModule"],
            ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_27__["NzCollapseModule"],
            ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_28__["NzToolTipModule"],
            ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_31__["NzSpinModule"],
            ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_32__["NzModalModule"],
            ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_33__["NzListModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VoterModule, { declarations: [_voter_profile_voter_profile_component__WEBPACK_IMPORTED_MODULE_3__["VoterProfileComponent"],
        _add_edit_voter_add_edit_voter_component__WEBPACK_IMPORTED_MODULE_4__["AddEditVoterComponent"],
        _voter_list_voter_list_component__WEBPACK_IMPORTED_MODULE_25__["VoterListComponent"],
        _voter_profile_primary_attributes_primary_attributes_component__WEBPACK_IMPORTED_MODULE_29__["PrimaryAttributesComponent"],
        _voter_profile_relationship_mapping_relationship_mapping_component__WEBPACK_IMPORTED_MODULE_30__["RelationshipMappingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _voter_routing_module__WEBPACK_IMPORTED_MODULE_2__["VoterRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"],
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_9__["NzAvatarModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconModule"],
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_11__["NzTabsModule"],
        ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_12__["NzStepsModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_13__["NzDividerModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__["NzCardModule"],
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_15__["NzDrawerModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_16__["NzDropDownModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_17__["NzSelectModule"],
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_18__["NzDatePickerModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_19__["NzInputModule"],
        ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_20__["NzTimePickerModule"],
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_21__["NzTagModule"],
        ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_22__["NzSliderModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_23__["NzTableModule"],
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_24__["NzUploadModule"],
        ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_26__["NzPageHeaderModule"],
        ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_27__["NzCollapseModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_28__["NzToolTipModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_31__["NzSpinModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_32__["NzModalModule"],
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_33__["NzListModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _voter_profile_voter_profile_component__WEBPACK_IMPORTED_MODULE_3__["VoterProfileComponent"],
                    _add_edit_voter_add_edit_voter_component__WEBPACK_IMPORTED_MODULE_4__["AddEditVoterComponent"],
                    _voter_list_voter_list_component__WEBPACK_IMPORTED_MODULE_25__["VoterListComponent"],
                    _voter_profile_primary_attributes_primary_attributes_component__WEBPACK_IMPORTED_MODULE_29__["PrimaryAttributesComponent"],
                    _voter_profile_relationship_mapping_relationship_mapping_component__WEBPACK_IMPORTED_MODULE_30__["RelationshipMappingComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _voter_routing_module__WEBPACK_IMPORTED_MODULE_2__["VoterRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"],
                    ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_9__["NzAvatarModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconModule"],
                    ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_11__["NzTabsModule"],
                    ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_12__["NzStepsModule"],
                    ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_13__["NzDividerModule"],
                    ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__["NzCardModule"],
                    ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_15__["NzDrawerModule"],
                    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_16__["NzDropDownModule"],
                    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_17__["NzSelectModule"],
                    ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_18__["NzDatePickerModule"],
                    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_19__["NzInputModule"],
                    ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_20__["NzTimePickerModule"],
                    ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_21__["NzTagModule"],
                    ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_22__["NzSliderModule"],
                    ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_23__["NzTableModule"],
                    ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_24__["NzUploadModule"],
                    ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_26__["NzPageHeaderModule"],
                    ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_27__["NzCollapseModule"],
                    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_28__["NzToolTipModule"],
                    ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_31__["NzSpinModule"],
                    ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_32__["NzModalModule"],
                    ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_33__["NzListModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "tAs6":
/*!**********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-slider.js ***!
  \**********************************************************************************/
/*! exports provided: NzMarks, NzSliderComponent, NzSliderModule, ɵNzSliderHandleComponent, ɵNzSliderMarksComponent, ɵNzSliderService, ɵNzSliderStepComponent, ɵNzSliderTrackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMarks", function() { return NzMarks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSliderComponent", function() { return NzSliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSliderModule", function() { return NzSliderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzSliderHandleComponent", function() { return NzSliderHandleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzSliderMarksComponent", function() { return NzSliderMarksComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzSliderService", function() { return NzSliderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzSliderStepComponent", function() { return NzSliderStepComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzSliderTrackComponent", function() { return NzSliderTrackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");












/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */






const _c0 = ["handle"];
const _c1 = ["slider"];
function NzSliderComponent_nz_slider_step_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-slider-step", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("vertical", ctx_r1.nzVertical)("min", ctx_r1.nzMin)("max", ctx_r1.nzMax)("lowerBound", ctx_r1.bounds.lower)("upperBound", ctx_r1.bounds.upper)("marksArray", ctx_r1.marksArray)("included", ctx_r1.nzIncluded)("reverse", ctx_r1.nzReverse);
} }
function NzSliderComponent_nz_slider_handle_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-slider-handle", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("focusin", function NzSliderComponent_nz_slider_handle_5_Template_nz_slider_handle_focusin_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const handleIndex_r5 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.onHandleFocusIn(handleIndex_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const handle_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("vertical", ctx_r2.nzVertical)("reverse", ctx_r2.nzReverse)("offset", handle_r4.offset)("value", handle_r4.value)("active", handle_r4.active)("tooltipFormatter", ctx_r2.nzTipFormatter)("tooltipVisible", ctx_r2.nzTooltipVisible)("tooltipPlacement", ctx_r2.nzTooltipPlacement)("dir", ctx_r2.dir);
} }
function NzSliderComponent_nz_slider_marks_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-slider-marks", 6);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("vertical", ctx_r3.nzVertical)("min", ctx_r3.nzMin)("max", ctx_r3.nzMax)("lowerBound", ctx_r3.bounds.lower)("upperBound", ctx_r3.bounds.upper)("marksArray", ctx_r3.marksArray)("included", ctx_r3.nzIncluded)("reverse", ctx_r3.nzReverse);
} }
function NzSliderMarksComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 2);
} if (rf & 2) {
    const attr_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-slider-mark-active", attr_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", attr_r1.style)("innerHTML", attr_r1.label, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function NzSliderStepComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 2);
} if (rf & 2) {
    const mark_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-slider-dot-active", mark_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", mark_r1.style);
} }
class NzSliderService {
    constructor() {
        this.isDragging = false;
    }
}
NzSliderService.ɵfac = function NzSliderService_Factory(t) { return new (t || NzSliderService)(); };
NzSliderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: NzSliderService, factory: NzSliderService.ɵfac });

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSliderHandleComponent {
    constructor(sliderService, cdr) {
        this.sliderService = sliderService;
        this.cdr = cdr;
        this.tooltipVisible = 'default';
        this.active = false;
        this.dir = 'ltr';
        this.style = {};
        this.enterHandle = () => {
            if (!this.sliderService.isDragging) {
                this.toggleTooltip(true);
                this.updateTooltipPosition();
                this.cdr.detectChanges();
            }
        };
        this.leaveHandle = () => {
            if (!this.sliderService.isDragging) {
                this.toggleTooltip(false);
                this.cdr.detectChanges();
            }
        };
    }
    ngOnChanges(changes) {
        const { offset, value, active, tooltipVisible, reverse, dir } = changes;
        if (offset || reverse || dir) {
            this.updateStyle();
        }
        if (value) {
            this.updateTooltipTitle();
            this.updateTooltipPosition();
        }
        if (active) {
            if (active.currentValue) {
                this.toggleTooltip(true);
            }
            else {
                this.toggleTooltip(false);
            }
        }
        if ((tooltipVisible === null || tooltipVisible === void 0 ? void 0 : tooltipVisible.currentValue) === 'always') {
            Promise.resolve().then(() => this.toggleTooltip(true, true));
        }
    }
    focus() {
        var _a;
        (_a = this.handleEl) === null || _a === void 0 ? void 0 : _a.nativeElement.focus();
    }
    toggleTooltip(show, force = false) {
        var _a, _b;
        if (!force && (this.tooltipVisible !== 'default' || !this.tooltip)) {
            return;
        }
        if (show) {
            (_a = this.tooltip) === null || _a === void 0 ? void 0 : _a.show();
        }
        else {
            (_b = this.tooltip) === null || _b === void 0 ? void 0 : _b.hide();
        }
    }
    updateTooltipTitle() {
        this.tooltipTitle = this.tooltipFormatter ? this.tooltipFormatter(this.value) : `${this.value}`;
    }
    updateTooltipPosition() {
        if (this.tooltip) {
            Promise.resolve().then(() => { var _a; return (_a = this.tooltip) === null || _a === void 0 ? void 0 : _a.updatePosition(); });
        }
    }
    updateStyle() {
        const vertical = this.vertical;
        const reverse = this.reverse;
        const offset = this.offset;
        const positionStyle = vertical
            ? {
                [reverse ? 'top' : 'bottom']: `${offset}%`,
                [reverse ? 'bottom' : 'top']: 'auto',
                transform: reverse ? null : `translateY(+50%)`
            }
            : Object.assign(Object.assign({}, this.getHorizontalStylePosition()), { transform: `translateX(${reverse ? (this.dir === 'rtl' ? '-' : '+') : this.dir === 'rtl' ? '+' : '-'}50%)` });
        this.style = positionStyle;
        this.cdr.markForCheck();
    }
    getHorizontalStylePosition() {
        let left = this.reverse ? 'auto' : `${this.offset}%`;
        let right = this.reverse ? `${this.offset}%` : 'auto';
        if (this.dir === 'rtl') {
            const tmp = left;
            left = right;
            right = tmp;
        }
        return { left, right };
    }
}
NzSliderHandleComponent.ɵfac = function NzSliderHandleComponent_Factory(t) { return new (t || NzSliderHandleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](NzSliderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"])); };
NzSliderHandleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NzSliderHandleComponent, selectors: [["nz-slider-handle"]], viewQuery: function NzSliderHandleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_9__["NzTooltipDirective"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.handleEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.tooltip = _t.first);
    } }, hostBindings: function NzSliderHandleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseenter", function NzSliderHandleComponent_mouseenter_HostBindingHandler() { return ctx.enterHandle(); })("mouseleave", function NzSliderHandleComponent_mouseleave_HostBindingHandler() { return ctx.leaveHandle(); });
    } }, inputs: { tooltipVisible: "tooltipVisible", active: "active", dir: "dir", vertical: "vertical", reverse: "reverse", offset: "offset", value: "value", tooltipPlacement: "tooltipPlacement", tooltipFormatter: "tooltipFormatter" }, exportAs: ["nzSliderHandle"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 4, consts: [["tabindex", "0", "nz-tooltip", "", 1, "ant-slider-handle", 3, "ngStyle", "nzTooltipTitle", "nzTooltipTrigger", "nzTooltipPlacement"], ["handle", ""]], template: function NzSliderHandleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx.style)("nzTooltipTitle", ctx.tooltipFormatter === null || ctx.tooltipVisible === "never" ? null : ctx.tooltipTitle)("nzTooltipTrigger", null)("nzTooltipPlacement", ctx.tooltipPlacement);
    } }, directives: [ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_9__["NzTooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"]], encapsulation: 2, changeDetection: 0 });
NzSliderHandleComponent.ctorParameters = () => [
    { type: NzSliderService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
];
NzSliderHandleComponent.propDecorators = {
    handleEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['handle', { static: false },] }],
    tooltip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_9__["NzTooltipDirective"], { static: false },] }],
    vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    reverse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    tooltipVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    tooltipPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    tooltipFormatter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    dir: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzSliderHandleComponent.prototype, "active", void 0);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSliderComponent {
    constructor(sliderService, cdr, platform, directionality) {
        this.sliderService = sliderService;
        this.cdr = cdr;
        this.platform = platform;
        this.directionality = directionality;
        this.nzDisabled = false;
        this.nzDots = false;
        this.nzIncluded = true;
        this.nzRange = false;
        this.nzVertical = false;
        this.nzReverse = false;
        this.nzMarks = null;
        this.nzMax = 100;
        this.nzMin = 0;
        this.nzStep = 1;
        this.nzTooltipVisible = 'default';
        this.nzTooltipPlacement = 'top';
        this.nzOnAfterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.value = null;
        this.cacheSliderStart = null;
        this.cacheSliderLength = null;
        this.activeValueIndex = undefined; // Current activated handle's index ONLY for range=true
        this.track = { offset: null, length: null }; // Track's offset and length
        this.handles = []; // Handles' offset
        this.marksArray = null; // "steps" in array type with more data & FILTER out the invalid mark
        this.bounds = { lower: null, upper: null }; // now for nz-slider-step
        this.dir = 'ltr';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
            this.updateTrackAndHandles();
            this.onValueChange(this.getValue(true));
        });
        this.handles = generateHandlers(this.nzRange ? 2 : 1);
        this.marksArray = this.nzMarks ? this.generateMarkItems(this.nzMarks) : null;
        this.bindDraggingHandlers();
        this.toggleDragDisabled(this.nzDisabled);
        if (this.getValue() === null) {
            this.setValue(this.formatValue(null));
        }
    }
    ngOnChanges(changes) {
        const { nzDisabled, nzMarks, nzRange } = changes;
        if (nzDisabled && !nzDisabled.firstChange) {
            this.toggleDragDisabled(nzDisabled.currentValue);
        }
        else if (nzMarks && !nzMarks.firstChange) {
            this.marksArray = this.nzMarks ? this.generateMarkItems(this.nzMarks) : null;
        }
        else if (nzRange && !nzRange.firstChange) {
            this.handles = generateHandlers(nzRange.currentValue ? 2 : 1);
            this.setValue(this.formatValue(null));
        }
    }
    ngOnDestroy() {
        this.unsubscribeDrag();
        this.destroy$.next();
        this.destroy$.complete();
    }
    writeValue(val) {
        this.setValue(val, true);
    }
    onValueChange(_value) { }
    onTouched() { }
    registerOnChange(fn) {
        this.onValueChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.toggleDragDisabled(isDisabled);
    }
    /**
     * Event handler is only triggered when a slider handler is focused.
     */
    onKeyDown(e) {
        if (this.nzDisabled) {
            return;
        }
        const code = e.keyCode;
        const isIncrease = code === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["RIGHT_ARROW"] || code === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["UP_ARROW"];
        const isDecrease = code === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["LEFT_ARROW"] || code === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["DOWN_ARROW"];
        if (!(isIncrease || isDecrease)) {
            return;
        }
        e.preventDefault();
        let step = (isDecrease ? -this.nzStep : this.nzStep) * (this.nzReverse ? -1 : 1);
        step = this.dir === 'rtl' ? step * -1 : step;
        const newVal = this.nzRange ? this.value[this.activeValueIndex] + step : this.value + step;
        this.setActiveValue(Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["ensureNumberInRange"])(newVal, this.nzMin, this.nzMax));
    }
    onHandleFocusIn(index) {
        this.activeValueIndex = index;
    }
    setValue(value, isWriteValue = false) {
        if (isWriteValue) {
            this.value = this.formatValue(value);
            this.updateTrackAndHandles();
        }
        else if (!valuesEqual(this.value, value)) {
            this.value = value;
            this.updateTrackAndHandles();
            this.onValueChange(this.getValue(true));
        }
    }
    getValue(cloneAndSort = false) {
        if (cloneAndSort && this.value && isValueRange(this.value)) {
            return [...this.value].sort((a, b) => a - b);
        }
        return this.value;
    }
    /**
     * Clone & sort current value and convert them to offsets, then return the new one.
     */
    getValueToOffset(value) {
        let normalizedValue = value;
        if (typeof normalizedValue === 'undefined') {
            normalizedValue = this.getValue(true);
        }
        return isValueRange(normalizedValue) ? normalizedValue.map(val => this.valueToOffset(val)) : this.valueToOffset(normalizedValue);
    }
    /**
     * Find the closest value to be activated.
     */
    setActiveValueIndex(pointerValue) {
        const value = this.getValue();
        if (isValueRange(value)) {
            let minimal = null;
            let gap;
            let activeIndex = -1;
            value.forEach((val, index) => {
                gap = Math.abs(pointerValue - val);
                if (minimal === null || gap < minimal) {
                    minimal = gap;
                    activeIndex = index;
                }
            });
            this.activeValueIndex = activeIndex;
            this.handlerComponents.toArray()[activeIndex].focus();
        }
        else {
            this.handlerComponents.toArray()[0].focus();
        }
    }
    setActiveValue(pointerValue) {
        if (isValueRange(this.value)) {
            const newValue = [...this.value];
            newValue[this.activeValueIndex] = pointerValue;
            this.setValue(newValue);
        }
        else {
            this.setValue(pointerValue);
        }
    }
    /**
     * Update track and handles' position and length.
     */
    updateTrackAndHandles() {
        const value = this.getValue();
        const offset = this.getValueToOffset(value);
        const valueSorted = this.getValue(true);
        const offsetSorted = this.getValueToOffset(valueSorted);
        const boundParts = isValueRange(valueSorted) ? valueSorted : [0, valueSorted];
        const trackParts = isValueRange(offsetSorted) ? [offsetSorted[0], offsetSorted[1] - offsetSorted[0]] : [0, offsetSorted];
        this.handles.forEach((handle, index) => {
            handle.offset = isValueRange(offset) ? offset[index] : offset;
            handle.value = isValueRange(value) ? value[index] : value || 0;
        });
        [this.bounds.lower, this.bounds.upper] = boundParts;
        [this.track.offset, this.track.length] = trackParts;
        this.cdr.markForCheck();
    }
    onDragStart(value) {
        this.toggleDragMoving(true);
        this.cacheSliderProperty();
        this.setActiveValueIndex(this.getLogicalValue(value));
        this.setActiveValue(this.getLogicalValue(value));
        this.showHandleTooltip(this.nzRange ? this.activeValueIndex : 0);
    }
    onDragMove(value) {
        this.setActiveValue(this.getLogicalValue(value));
        this.cdr.markForCheck();
    }
    getLogicalValue(value) {
        if (this.nzReverse) {
            if (!this.nzVertical && this.dir === 'rtl') {
                return value;
            }
            return this.nzMax - value + this.nzMin;
        }
        if (!this.nzVertical && this.dir === 'rtl') {
            return this.nzMax - value + this.nzMin;
        }
        return value;
    }
    onDragEnd() {
        this.nzOnAfterChange.emit(this.getValue(true));
        this.toggleDragMoving(false);
        this.cacheSliderProperty(true);
        this.hideAllHandleTooltip();
        this.cdr.markForCheck();
    }
    /**
     * Create user interactions handles.
     */
    bindDraggingHandlers() {
        if (!this.platform.isBrowser) {
            return;
        }
        const sliderDOM = this.slider.nativeElement;
        const orientField = this.nzVertical ? 'pageY' : 'pageX';
        const mouse = {
            start: 'mousedown',
            move: 'mousemove',
            end: 'mouseup',
            pluckKey: [orientField]
        };
        const touch = {
            start: 'touchstart',
            move: 'touchmove',
            end: 'touchend',
            pluckKey: ['touches', '0', orientField],
            filter: (e) => e instanceof TouchEvent
        };
        [mouse, touch].forEach(source => {
            const { start, move, end, pluckKey, filter: filterFunc = () => true } = source;
            source.startPlucked$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(sliderDOM, start).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(filterFunc), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["silentEvent"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["pluck"])(...pluckKey), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((position) => this.findClosestValue(position)));
            source.end$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(document, end);
            source.moveResolved$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(document, move).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(filterFunc), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["silentEvent"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["pluck"])(...pluckKey), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((position) => this.findClosestValue(position)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(source.end$));
        });
        this.dragStart$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(mouse.startPlucked$, touch.startPlucked$);
        this.dragMove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(mouse.moveResolved$, touch.moveResolved$);
        this.dragEnd$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(mouse.end$, touch.end$);
    }
    subscribeDrag(periods = ['start', 'move', 'end']) {
        if (periods.indexOf('start') !== -1 && this.dragStart$ && !this.dragStart_) {
            this.dragStart_ = this.dragStart$.subscribe(this.onDragStart.bind(this));
        }
        if (periods.indexOf('move') !== -1 && this.dragMove$ && !this.dragMove_) {
            this.dragMove_ = this.dragMove$.subscribe(this.onDragMove.bind(this));
        }
        if (periods.indexOf('end') !== -1 && this.dragEnd$ && !this.dragEnd_) {
            this.dragEnd_ = this.dragEnd$.subscribe(this.onDragEnd.bind(this));
        }
    }
    unsubscribeDrag(periods = ['start', 'move', 'end']) {
        if (periods.indexOf('start') !== -1 && this.dragStart_) {
            this.dragStart_.unsubscribe();
            this.dragStart_ = null;
        }
        if (periods.indexOf('move') !== -1 && this.dragMove_) {
            this.dragMove_.unsubscribe();
            this.dragMove_ = null;
        }
        if (periods.indexOf('end') !== -1 && this.dragEnd_) {
            this.dragEnd_.unsubscribe();
            this.dragEnd_ = null;
        }
    }
    toggleDragMoving(movable) {
        const periods = ['move', 'end'];
        if (movable) {
            this.sliderService.isDragging = true;
            this.subscribeDrag(periods);
        }
        else {
            this.sliderService.isDragging = false;
            this.unsubscribeDrag(periods);
        }
    }
    toggleDragDisabled(disabled) {
        if (disabled) {
            this.unsubscribeDrag();
        }
        else {
            this.subscribeDrag(['start']);
        }
    }
    findClosestValue(position) {
        const sliderStart = this.getSliderStartPosition();
        const sliderLength = this.getSliderLength();
        const ratio = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["ensureNumberInRange"])((position - sliderStart) / sliderLength, 0, 1);
        const val = (this.nzMax - this.nzMin) * (this.nzVertical ? 1 - ratio : ratio) + this.nzMin;
        const points = this.nzMarks === null
            ? []
            : Object.keys(this.nzMarks)
                .map(parseFloat)
                .sort((a, b) => a - b);
        if (this.nzStep !== 0 && !this.nzDots) {
            const closestOne = Math.round(val / this.nzStep) * this.nzStep;
            points.push(closestOne);
        }
        const gaps = points.map(point => Math.abs(val - point));
        const closest = points[gaps.indexOf(Math.min(...gaps))];
        // return parseFloat(closest.toFixed(getPrecision(this.nzStep)));
        return this.nzStep === 0 ? closest : parseFloat(closest.toFixed(Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["getPrecision"])(this.nzStep)));
    }
    valueToOffset(value) {
        return Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["getPercent"])(this.nzMin, this.nzMax, value);
    }
    getSliderStartPosition() {
        if (this.cacheSliderStart !== null) {
            return this.cacheSliderStart;
        }
        const offset = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["getElementOffset"])(this.slider.nativeElement);
        return this.nzVertical ? offset.top : offset.left;
    }
    getSliderLength() {
        if (this.cacheSliderLength !== null) {
            return this.cacheSliderLength;
        }
        const sliderDOM = this.slider.nativeElement;
        return this.nzVertical ? sliderDOM.clientHeight : sliderDOM.clientWidth;
    }
    /**
     * Cache DOM layout/reflow operations for performance (may not necessary?)
     */
    cacheSliderProperty(remove = false) {
        this.cacheSliderStart = remove ? null : this.getSliderStartPosition();
        this.cacheSliderLength = remove ? null : this.getSliderLength();
    }
    formatValue(value) {
        if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["isNil"])(value)) {
            return this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin;
        }
        else if (assertValueValid(value, this.nzRange)) {
            return isValueRange(value)
                ? value.map(val => Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["ensureNumberInRange"])(val, this.nzMin, this.nzMax))
                : Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["ensureNumberInRange"])(value, this.nzMin, this.nzMax);
        }
        else {
            return this.nzDefaultValue ? this.nzDefaultValue : this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin;
        }
    }
    /**
     * Show one handle's tooltip and hide others'.
     */
    showHandleTooltip(handleIndex = 0) {
        this.handles.forEach((handle, index) => {
            handle.active = index === handleIndex;
        });
    }
    hideAllHandleTooltip() {
        this.handles.forEach(handle => (handle.active = false));
    }
    generateMarkItems(marks) {
        const marksArray = [];
        for (const key in marks) {
            if (marks.hasOwnProperty(key)) {
                const mark = marks[key];
                const val = typeof key === 'number' ? key : parseFloat(key);
                if (val >= this.nzMin && val <= this.nzMax) {
                    marksArray.push({ value: val, offset: this.valueToOffset(val), config: mark });
                }
            }
        }
        return marksArray.length ? marksArray : null;
    }
}
NzSliderComponent.ɵfac = function NzSliderComponent_Factory(t) { return new (t || NzSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](NzSliderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], 8)); };
NzSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NzSliderComponent, selectors: [["nz-slider"]], viewQuery: function NzSliderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](NzSliderHandleComponent, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.slider = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.handlerComponents = _t);
    } }, hostBindings: function NzSliderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function NzSliderComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } }, inputs: { nzDisabled: "nzDisabled", nzDots: "nzDots", nzIncluded: "nzIncluded", nzRange: "nzRange", nzVertical: "nzVertical", nzReverse: "nzReverse", nzMarks: "nzMarks", nzMax: "nzMax", nzMin: "nzMin", nzStep: "nzStep", nzTooltipVisible: "nzTooltipVisible", nzTooltipPlacement: "nzTooltipPlacement", nzDefaultValue: "nzDefaultValue", nzTipFormatter: "nzTipFormatter" }, outputs: { nzOnAfterChange: "nzOnAfterChange" }, exportAs: ["nzSlider"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(() => NzSliderComponent),
                multi: true
            },
            NzSliderService
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 17, consts: [[1, "ant-slider"], ["slider", ""], [1, "ant-slider-rail"], [3, "vertical", "included", "offset", "length", "reverse", "dir"], [3, "vertical", "min", "max", "lowerBound", "upperBound", "marksArray", "included", "reverse", 4, "ngIf"], [3, "vertical", "reverse", "offset", "value", "active", "tooltipFormatter", "tooltipVisible", "tooltipPlacement", "dir", "focusin", 4, "ngFor", "ngForOf"], [3, "vertical", "min", "max", "lowerBound", "upperBound", "marksArray", "included", "reverse"], [3, "vertical", "reverse", "offset", "value", "active", "tooltipFormatter", "tooltipVisible", "tooltipPlacement", "dir", "focusin"]], template: function NzSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "nz-slider-track", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, NzSliderComponent_nz_slider_step_4_Template, 1, 8, "nz-slider-step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, NzSliderComponent_nz_slider_handle_5_Template, 1, 9, "nz-slider-handle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, NzSliderComponent_nz_slider_marks_6_Template, 1, 8, "nz-slider-marks", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-slider-rtl", ctx.dir === "rtl")("ant-slider-disabled", ctx.nzDisabled)("ant-slider-vertical", ctx.nzVertical)("ant-slider-with-marks", ctx.marksArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("vertical", ctx.nzVertical)("included", ctx.nzIncluded)("offset", ctx.track.offset)("length", ctx.track.length)("reverse", ctx.nzReverse)("dir", ctx.dir);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.marksArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.handles);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.marksArray);
    } }, directives: function () { return [NzSliderTrackComponent, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Dir"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], NzSliderStepComponent, NzSliderHandleComponent, NzSliderMarksComponent]; }, encapsulation: 2, changeDetection: 0 });
NzSliderComponent.ctorParameters = () => [
    { type: NzSliderService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] }
];
NzSliderComponent.propDecorators = {
    slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['slider', { static: true },] }],
    handlerComponents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChildren"], args: [NzSliderHandleComponent,] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    nzDots: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    nzIncluded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    nzRange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    nzVertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    nzReverse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    nzDefaultValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    nzMarks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    nzMax: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    nzMin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    nzStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    nzTooltipVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    nzTooltipPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    nzTipFormatter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    nzOnAfterChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzSliderComponent.prototype, "nzDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzSliderComponent.prototype, "nzDots", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzSliderComponent.prototype, "nzIncluded", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzSliderComponent.prototype, "nzRange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzSliderComponent.prototype, "nzVertical", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzSliderComponent.prototype, "nzReverse", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzSliderComponent.prototype, "nzMax", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzSliderComponent.prototype, "nzMin", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzSliderComponent.prototype, "nzStep", void 0);
function getValueTypeNotMatchError() {
    return new Error(`The "nzRange" can't match the "ngModel"'s type, please check these properties: "nzRange", "ngModel", "nzDefaultValue".`);
}
function isValueRange(value) {
    if (value instanceof Array) {
        return value.length === 2;
    }
    else {
        return false;
    }
}
function generateHandlers(amount) {
    return Array(amount)
        .fill(0)
        .map(() => ({ offset: null, value: null, active: false }));
}
/**
 * Check if value is valid and throw error if value-type/range not match.
 */
function assertValueValid(value, isRange) {
    if ((!isValueRange(value) && isNaN(value)) || (isValueRange(value) && value.some(v => isNaN(v)))) {
        return false;
    }
    return assertValueTypeMatch(value, isRange);
}
/**
 * Assert that if `this.nzRange` is `true`, value is also a range, vice versa.
 */
function assertValueTypeMatch(value, isRange = false) {
    if (isValueRange(value) !== isRange) {
        throw getValueTypeNotMatchError();
    }
    return true;
}
function valuesEqual(valA, valB) {
    if (typeof valA !== typeof valB) {
        return false;
    }
    return isValueRange(valA) && isValueRange(valB) ? Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["arraysEqual"])(valA, valB) : valA === valB;
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSliderMarksComponent {
    constructor() {
        this.lowerBound = null;
        this.upperBound = null;
        this.marksArray = [];
        this.vertical = false;
        this.included = false;
        this.marks = [];
    }
    ngOnChanges(changes) {
        const { marksArray, lowerBound, upperBound, reverse } = changes;
        if (marksArray || reverse) {
            this.buildMarks();
        }
        if (marksArray || lowerBound || upperBound || reverse) {
            this.togglePointActive();
        }
    }
    trackById(_index, mark) {
        return mark.value;
    }
    buildMarks() {
        const range = this.max - this.min;
        this.marks = this.marksArray.map(mark => {
            const { value, offset, config } = mark;
            const style = this.getMarkStyles(value, range, config);
            const label = isConfigObject(config) ? config.label : config;
            return {
                label,
                offset,
                style,
                value,
                config,
                active: false
            };
        });
    }
    getMarkStyles(value, range, config) {
        let style;
        const markValue = this.reverse ? this.max + this.min - value : value;
        if (this.vertical) {
            style = {
                marginBottom: '-50%',
                bottom: `${((markValue - this.min) / range) * 100}%`
            };
        }
        else {
            style = {
                transform: `translate3d(-50%, 0, 0)`,
                left: `${((markValue - this.min) / range) * 100}%`
            };
        }
        if (isConfigObject(config) && config.style) {
            style = Object.assign(Object.assign({}, style), config.style);
        }
        return style;
    }
    togglePointActive() {
        if (this.marks && this.lowerBound !== null && this.upperBound !== null) {
            this.marks.forEach(mark => {
                const value = mark.value;
                const isActive = (!this.included && value === this.upperBound) || (this.included && value <= this.upperBound && value >= this.lowerBound);
                mark.active = isActive;
            });
        }
    }
}
NzSliderMarksComponent.ɵfac = function NzSliderMarksComponent_Factory(t) { return new (t || NzSliderMarksComponent)(); };
NzSliderMarksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NzSliderMarksComponent, selectors: [["nz-slider-marks"]], inputs: { lowerBound: "lowerBound", upperBound: "upperBound", marksArray: "marksArray", vertical: "vertical", included: "included", min: "min", max: "max", reverse: "reverse" }, exportAs: ["nzSliderMarks"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [[1, "ant-slider-mark"], ["class", "ant-slider-mark-text", 3, "ant-slider-mark-active", "ngStyle", "innerHTML", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-slider-mark-text", 3, "ngStyle", "innerHTML"]], template: function NzSliderMarksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzSliderMarksComponent_span_1_Template, 1, 4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.marks)("ngForTrackBy", ctx.trackById);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"]], encapsulation: 2, changeDetection: 0 });
NzSliderMarksComponent.propDecorators = {
    lowerBound: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    upperBound: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    marksArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    included: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    reverse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzSliderMarksComponent.prototype, "vertical", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzSliderMarksComponent.prototype, "included", void 0);
function isConfigObject(config) {
    return typeof config !== 'string';
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSliderStepComponent {
    constructor() {
        this.lowerBound = null;
        this.upperBound = null;
        this.marksArray = [];
        this.vertical = false;
        this.included = false;
        this.steps = [];
    }
    ngOnChanges(changes) {
        const { marksArray, lowerBound, upperBound, reverse } = changes;
        if (marksArray || reverse) {
            this.buildSteps();
        }
        if (marksArray || lowerBound || upperBound || reverse) {
            this.togglePointActive();
        }
    }
    trackById(_index, step) {
        return step.value;
    }
    buildSteps() {
        const orient = this.vertical ? 'bottom' : 'left';
        this.steps = this.marksArray.map(mark => {
            const { value, config } = mark;
            let offset = mark.offset;
            const range = this.max - this.min;
            if (this.reverse) {
                offset = ((this.max - value) / range) * 100;
            }
            return {
                value,
                offset,
                config,
                active: false,
                style: {
                    [orient]: `${offset}%`
                }
            };
        });
    }
    togglePointActive() {
        if (this.steps && this.lowerBound !== null && this.upperBound !== null) {
            this.steps.forEach(step => {
                const value = step.value;
                const isActive = (!this.included && value === this.upperBound) || (this.included && value <= this.upperBound && value >= this.lowerBound);
                step.active = isActive;
            });
        }
    }
}
NzSliderStepComponent.ɵfac = function NzSliderStepComponent_Factory(t) { return new (t || NzSliderStepComponent)(); };
NzSliderStepComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NzSliderStepComponent, selectors: [["nz-slider-step"]], inputs: { lowerBound: "lowerBound", upperBound: "upperBound", marksArray: "marksArray", vertical: "vertical", included: "included", min: "min", max: "max", reverse: "reverse" }, exportAs: ["nzSliderStep"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [[1, "ant-slider-step"], ["class", "ant-slider-dot", 3, "ant-slider-dot-active", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-slider-dot", 3, "ngStyle"]], template: function NzSliderStepComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzSliderStepComponent_span_1_Template, 1, 3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.steps)("ngForTrackBy", ctx.trackById);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"]], encapsulation: 2, changeDetection: 0 });
NzSliderStepComponent.propDecorators = {
    lowerBound: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    upperBound: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    marksArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    included: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    reverse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzSliderStepComponent.prototype, "vertical", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzSliderStepComponent.prototype, "included", void 0);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSliderTrackComponent {
    constructor() {
        this.offset = 0;
        this.reverse = false;
        this.dir = 'ltr';
        this.length = 0;
        this.vertical = false;
        this.included = false;
        this.style = {};
    }
    ngOnChanges() {
        const vertical = this.vertical;
        const reverse = this.reverse;
        const visibility = this.included ? 'visible' : 'hidden';
        const offset = this.offset;
        const length = this.length;
        const positonStyle = vertical
            ? {
                [reverse ? 'top' : 'bottom']: `${offset}%`,
                [reverse ? 'bottom' : 'top']: 'auto',
                height: `${length}%`,
                visibility
            }
            : Object.assign(Object.assign({}, this.getHorizontalStylePosition()), { width: `${length}%`, visibility });
        this.style = positonStyle;
    }
    getHorizontalStylePosition() {
        let left = this.reverse ? 'auto' : `${this.offset}%`;
        let right = this.reverse ? `${this.offset}%` : 'auto';
        if (this.dir === 'rtl') {
            const tmp = left;
            left = right;
            right = tmp;
        }
        return { left, right };
    }
}
NzSliderTrackComponent.ɵfac = function NzSliderTrackComponent_Factory(t) { return new (t || NzSliderTrackComponent)(); };
NzSliderTrackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NzSliderTrackComponent, selectors: [["nz-slider-track"]], inputs: { offset: "offset", reverse: "reverse", dir: "dir", length: "length", vertical: "vertical", included: "included" }, exportAs: ["nzSliderTrack"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[1, "ant-slider-track", 3, "ngStyle"]], template: function NzSliderTrackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx.style);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"]], encapsulation: 2, changeDetection: 0 });
NzSliderTrackComponent.propDecorators = {
    offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    reverse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    dir: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    length: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    included: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], NzSliderTrackComponent.prototype, "offset", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzSliderTrackComponent.prototype, "reverse", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], NzSliderTrackComponent.prototype, "length", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzSliderTrackComponent.prototype, "vertical", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzSliderTrackComponent.prototype, "included", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzSliderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzSliderHandleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                selector: 'nz-slider-handle',
                exportAs: 'nzSliderHandle',
                preserveWhitespaces: false,
                template: `
    <div
      #handle
      class="ant-slider-handle"
      tabindex="0"
      nz-tooltip
      [ngStyle]="style"
      [nzTooltipTitle]="tooltipFormatter === null || tooltipVisible === 'never' ? null : tooltipTitle"
      [nzTooltipTrigger]="null"
      [nzTooltipPlacement]="tooltipPlacement"
    ></div>
  `,
                host: {
                    '(mouseenter)': 'enterHandle()',
                    '(mouseleave)': 'leaveHandle()'
                }
            }]
    }], function () { return [{ type: NzSliderService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }]; }, { tooltipVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], dir: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], handleEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['handle', { static: false }]
        }], tooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_9__["NzTooltipDirective"], { static: false }]
        }], vertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], reverse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], tooltipPlacement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], tooltipFormatter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                selector: 'nz-slider',
                exportAs: 'nzSlider',
                preserveWhitespaces: false,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(() => NzSliderComponent),
                        multi: true
                    },
                    NzSliderService
                ],
                host: {
                    '(keydown)': 'onKeyDown($event)'
                },
                template: `
    <div
      #slider
      class="ant-slider"
      [class.ant-slider-rtl]="dir === 'rtl'"
      [class.ant-slider-disabled]="nzDisabled"
      [class.ant-slider-vertical]="nzVertical"
      [class.ant-slider-with-marks]="marksArray"
    >
      <div class="ant-slider-rail"></div>
      <nz-slider-track
        [vertical]="nzVertical"
        [included]="nzIncluded"
        [offset]="track.offset!"
        [length]="track.length!"
        [reverse]="nzReverse"
        [dir]="dir"
      ></nz-slider-track>
      <nz-slider-step
        *ngIf="marksArray"
        [vertical]="nzVertical"
        [min]="nzMin"
        [max]="nzMax"
        [lowerBound]="$any(bounds.lower)"
        [upperBound]="$any(bounds.upper)"
        [marksArray]="marksArray"
        [included]="nzIncluded"
        [reverse]="nzReverse"
      ></nz-slider-step>
      <nz-slider-handle
        *ngFor="let handle of handles; index as handleIndex"
        [vertical]="nzVertical"
        [reverse]="nzReverse"
        [offset]="handle.offset!"
        [value]="handle.value!"
        [active]="handle.active"
        [tooltipFormatter]="nzTipFormatter"
        [tooltipVisible]="nzTooltipVisible"
        [tooltipPlacement]="nzTooltipPlacement"
        [dir]="dir"
        (focusin)="onHandleFocusIn(handleIndex)"
      ></nz-slider-handle>
      <nz-slider-marks
        *ngIf="marksArray"
        [vertical]="nzVertical"
        [min]="nzMin"
        [max]="nzMax"
        [lowerBound]="$any(bounds.lower)"
        [upperBound]="$any(bounds.upper)"
        [marksArray]="marksArray"
        [included]="nzIncluded"
        [reverse]="nzReverse"
      ></nz-slider-marks>
    </div>
  `
            }]
    }], function () { return [{ type: NzSliderService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }]; }, { nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], nzDots: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], nzIncluded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], nzRange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], nzVertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], nzReverse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], nzMarks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], nzMax: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], nzMin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], nzStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], nzTooltipVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], nzTooltipPlacement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], nzOnAfterChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], slider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['slider', { static: true }]
        }], handlerComponents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChildren"],
            args: [NzSliderHandleComponent]
        }], nzDefaultValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], nzTipFormatter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzSliderMarksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                preserveWhitespaces: false,
                selector: 'nz-slider-marks',
                exportAs: 'nzSliderMarks',
                template: `
    <div class="ant-slider-mark">
      <span
        class="ant-slider-mark-text"
        *ngFor="let attr of marks; trackBy: trackById"
        [class.ant-slider-mark-active]="attr.active"
        [ngStyle]="attr.style!"
        [innerHTML]="attr.label"
      ></span>
    </div>
  `
            }]
    }], function () { return []; }, { lowerBound: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], upperBound: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], marksArray: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], vertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], included: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], reverse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzSliderStepComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                selector: 'nz-slider-step',
                exportAs: 'nzSliderStep',
                preserveWhitespaces: false,
                template: `
    <div class="ant-slider-step">
      <span
        class="ant-slider-dot"
        *ngFor="let mark of steps; trackBy: trackById"
        [class.ant-slider-dot-active]="mark.active"
        [ngStyle]="mark.style!"
      ></span>
    </div>
  `
            }]
    }], function () { return []; }, { lowerBound: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], upperBound: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], marksArray: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], vertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], included: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], reverse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzSliderTrackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                selector: 'nz-slider-track',
                exportAs: 'nzSliderTrack',
                preserveWhitespaces: false,
                template: `
    <div class="ant-slider-track" [ngStyle]="style"></div>
  `
            }]
    }], function () { return []; }, { offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], reverse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], dir: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], length: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], vertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], included: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSliderModule {
}
NzSliderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: NzSliderModule });
NzSliderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function NzSliderModule_Factory(t) { return new (t || NzSliderModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["PlatformModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_9__["NzToolTipModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NzSliderModule, { declarations: function () { return [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["PlatformModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_9__["NzToolTipModule"]]; }, exports: function () { return [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzSliderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                exports: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent],
                declarations: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent],
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["PlatformModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_9__["NzToolTipModule"]]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzMarks {
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-slider.js.map

/***/ }),

/***/ "zLDN":
/*!********************************************************************************************!*\
  !*** ./src/app/voter/voter-profile/relationship-mapping/relationship-mapping.component.ts ***!
  \********************************************************************************************/
/*! exports provided: RelationshipMappingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationshipMappingComponent", function() { return RelationshipMappingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/http.service */ "9NvV");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");


















function RelationshipMappingComponent_div_5_ng_template_2_nz_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 22);
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", (item_r9 == null ? null : item_r9.name == null ? null : item_r9.name.en) ? item_r9 == null ? null : item_r9.name == null ? null : item_r9.name.en : item_r9 == null ? null : item_r9.name == null ? null : item_r9.name.hi)("nzLabel", ctx_r6._currLanguage == "en" ? item_r9 == null ? null : item_r9.name == null ? null : item_r9.name.en : item_r9 == null ? null : item_r9.name == null ? null : item_r9.name.hi);
} }
function RelationshipMappingComponent_div_5_ng_template_2_ng_template_6_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 24);
} }
function RelationshipMappingComponent_div_5_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RelationshipMappingComponent_div_5_ng_template_2_ng_template_6_span_0_Template, 1, 0, "span", 23);
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.attributeList[i_r3]._isVisible);
} }
function RelationshipMappingComponent_div_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RelationshipMappingComponent_div_5_ng_template_2_Template_nz_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return item_r2._currTagValue = $event; })("nzFocus", function RelationshipMappingComponent_div_5_ng_template_2_Template_nz_select_nzFocus_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.getTagLIst(item_r2 == null ? null : item_r2.id); })("keyup", function RelationshipMappingComponent_div_5_ng_template_2_Template_nz_select_keyup_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.test($event, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RelationshipMappingComponent_div_5_ng_template_2_nz_option_4_Template, 1, 2, "nz-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RelationshipMappingComponent_div_5_ng_template_2_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const item_r2 = ctx_r20.$implicit; const i_r3 = ctx_r20.index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.addTagForAttribute(item_r2, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RelationshipMappingComponent_div_5_ng_template_2_ng_template_6_Template, 1, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nz-spin", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5._currLanguage == "en" ? item_r2 == null ? null : item_r2.name == null ? null : item_r2.name.en : item_r2 == null ? null : item_r2.name == null ? null : item_r2.name.hi);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r2._currTagValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.tagsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzIndicator", _r7);
} }
function RelationshipMappingComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RelationshipMappingComponent_div_5_ng_template_2_Template, 9, 4, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Voter:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Label:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0._currLanguage == "en" ? (item_r2 == null ? null : item_r2.to_voter_id[0] == null ? null : item_r2.to_voter_id[0].FIRST_NAME_EN) + (item_r2 == null ? null : item_r2.to_voter_id[0] == null ? null : item_r2.to_voter_id[0].LAST_NAME_EN) : (item_r2 == null ? null : item_r2.to_voter_id[0] == null ? null : item_r2.to_voter_id[0].FIRST_NAME_HI) + (item_r2 == null ? null : item_r2.to_voter_id[0] == null ? null : item_r2.to_voter_id[0].LAST_NAME_HI), " ", " " + (item_r2 == null ? null : item_r2.to_voter_id[0] == null ? null : item_r2.to_voter_id[0].EPIC_NO), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (item_r2 == null ? null : item_r2.tag) ? ctx_r0._currLanguage == "en" ? (item_r2 == null ? null : item_r2.tag == null ? null : item_r2.tag.name == null ? null : item_r2.tag.name.en) + " " : (item_r2 == null ? null : item_r2.tag == null ? null : item_r2.tag.name == null ? null : item_r2.tag.name.hi) + " " : "", " ");
} }
function RelationshipMappingComponent_ng_container_7_nz_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading Data... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RelationshipMappingComponent_ng_container_7_nz_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 22);
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r24.id)("nzLabel", ctx_r23._currLanguage == "en" ? (item_r24 == null ? null : item_r24.first_name_en) + (item_r24 == null ? null : item_r24.last_name_en) + ((item_r24 == null ? null : item_r24.epic_no) ? " " + (item_r24 == null ? null : item_r24.epic_no) : "") : (item_r24 == null ? null : item_r24.last_name_hi) + (item_r24 == null ? null : item_r24.last_name_hi) + ((item_r24 == null ? null : item_r24.epic_no) ? " " + (item_r24 == null ? null : item_r24.epic_no) : ""));
} }
function RelationshipMappingComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-form-label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-form-control", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-form-label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nz-form-control", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFocus", function RelationshipMappingComponent_ng_container_7_Template_nz_select_nzFocus_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.getVoters(); })("keyup", function RelationshipMappingComponent_ng_container_7_Template_nz_select_keyup_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.getVoters($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RelationshipMappingComponent_ng_container_7_nz_option_15_Template, 3, 0, "nz-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RelationshipMappingComponent_ng_container_7_nz_option_16_Template, 1, 2, "nz-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.addRelationShipForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1._currLanguage == "en" ? "Enter Tag Name" : "\u091F\u0948\u0917 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx_r1._currLanguage == "en" ? "Please enter Tag Name" : "\u0915\u0943\u092A\u092F\u093E \u091F\u0948\u0917 \u0928\u093E\u092E \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r1._currLanguage == "en" ? "Enter Tag Name" : "\u091F\u0948\u0917 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1._currLanguage == "en" ? "Assign Voter" : "\u092E\u0924\u0926\u093E\u0924\u093E \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 16)("nzXs", 24)("nzErrorTip", ctx_r1._currLanguage == "en" ? "Please select voter" : "\u0915\u0943\u092A\u092F\u093E \u092E\u0924\u0926\u093E\u0924\u093E \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPlaceHolder", ctx_r1._currLanguage == "en" ? "Assign Voter" : "\u092E\u0924\u0926\u093E\u0924\u093E \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isSelectLoader["voter"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.voters);
} }
class RelationshipMappingComponent {
    constructor(http, message, fb) {
        this.http = http;
        this.message = message;
        this.fb = fb;
        this.attributeList = [];
        this.isAddRelationShip = false;
        this.voters = [];
        this.isSelectLoader = { 'voter': false };
    }
    ngOnInit() {
        this._currLanguage = localStorage.getItem("appLanguage") || 'en';
        if (this.voterId) {
            this.getAttributeList();
        }
    }
    getAttributeList(keyword) {
        let data = { "voter_id": this.voterId };
        data['for_relationship'] = "YES";
        this.http.getRelationList(data).subscribe((res) => {
            if (res.success) {
                this.attributeList = res.data;
                console.log(this.attributeList);
                this.attributeList.forEach(element => {
                    element['_currTagValue'] = "";
                    element['_isVisible'] = false;
                });
            }
        });
    }
    getTagLIst(isSearch, key) {
        let data = { "model_name": "TagMaster" };
        clearTimeout(this.debounce);
        this.debounce = setTimeout(() => {
            this.http.getMasterData(data).subscribe((res) => {
                if (res.success) {
                    this.tagsList = res.data;
                }
            });
        }, 500);
    }
    addTagForAttribute(data, i) {
        var _a;
        this.attributeList[i]._isVisible = true;
        for (let i = 0; i < this.tagsList.length; i++) {
            const element = this.tagsList[i];
            if (((_a = element === null || element === void 0 ? void 0 : element.name) === null || _a === void 0 ? void 0 : _a.en) == data._currTagValue) {
                this.message.warning("The tag is already mapped");
                return;
            }
        }
        let param = { "voter_id": [this.voterId], "primary_attribute": data === null || data === void 0 ? void 0 : data.id, "tag": data === null || data === void 0 ? void 0 : data._currTagValue };
        this.http.addVoterTasg(param).subscribe((res) => {
            if (res.success) {
                this.message.success(res.message);
                this.attributeList[i]._isVisible = false;
                this.getAttributeList();
            }
            else {
                this.message.error(res.message);
                this.attributeList[i]._isVisible = false;
            }
        });
    }
    test(data, id) {
        var _a;
        this.attributeList[id]._currTagValue = data.target.value;
        if (((_a = this.tagsList) === null || _a === void 0 ? void 0 : _a.lengt) == 0 || this.tagsList == undefined || this.tagsList == null) {
            return;
        }
        let temp = this.tagsList.find(item => { var _a; ((_a = item === null || item === void 0 ? void 0 : item.name) === null || _a === void 0 ? void 0 : _a.en) == this.attributeList[id]._currTagValue; });
    }
    addRelationShip() {
        let data = { from_voter_id: this.voterId, to_voter_id: this.addRelationShipForm.get('to_voter_id').value, tag: this.addRelationShipForm.get('tag_name').value };
        this.http.addRelationship(data).subscribe((res) => {
            if (res.success) {
                this.getAttributeList();
            }
        });
    }
    addRelaionModal() {
        this.addRelationShipForm = this.fb.group({
            tag_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            to_voter_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        this.isAddRelationShip = true;
    }
    getVoters(key) {
        this.isSelectLoader['voter'] = true;
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
                        this.isSelectLoader['voter'] = false;
                    }
                });
            }, 500);
        }
        else {
            let data = { 'end_point': 'FETCH_VOTER_LIST_API_URL' };
            this.http.getVoterList(data).subscribe((res) => {
                if (res.success) {
                    this.voters = res.data;
                    this.isSelectLoader['voter'] = false;
                }
            });
        }
    }
}
RelationshipMappingComponent.ɵfac = function RelationshipMappingComponent_Factory(t) { return new (t || RelationshipMappingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
RelationshipMappingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RelationshipMappingComponent, selectors: [["app-relationship-mapping"]], inputs: { voterId: "voterId" }, decls: 8, vars: 2, consts: [[1, "d-flex", "justify-content-end"], ["type", "submit", "nz-button", "", "nzType", "", 1, "mb-2", 2, "margin", "2px", 3, "click"], [1, "row"], ["class", "col-lg-4 col-12", 4, "ngFor", "ngForOf"], ["nzTitle", "Add Relationship", 3, "nzVisible", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], [1, "col-lg-4", "col-12"], [1, "h-100"], ["adAttribute", ""], [1, "d-flex", "flex-wrap", "align-items-center"], [1, "d-flex", "justify-content-start"], [1, "d-flex", "flex-column", "mr-3"], [1, "d-flex", "flex-wrap"], [1, "mr-2"], ["for", ""], [1, "d-flex", "align-items-center", "flex-wrap", "w-100"], [1, "mr-5"], ["nzPlaceHolder", "Enter Tags to Map", "nzShowSearch", "", "nzAllowClear", "", 1, "selectFilter", "mr-2", 3, "ngModel", "ngModelChange", "nzFocus", "keyup"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nz-icon", "", "nzType", "plus-circle", "nzTheme", "outline", 1, "mr-3", 3, "click"], ["indicatorTemplate", ""], ["nzSimple", "", 3, "nzIndicator"], [3, "nzValue", "nzLabel"], ["nz-icon", "", "nzType", "loading", 4, "ngIf"], ["nz-icon", "", "nzType", "loading"], ["nz-form", "", 3, "formGroup"], [1, "col-12"], [1, "text-left", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs", "nzErrorTip"], ["type", "text", "nz-input", "", "formControlName", "tag_name", 3, "placeholder"], ["nzShowSearch", "", "formControlName", "to_voter_id", "nzAllowClear", "", 1, "selectFilter", "mb-2", "mr-3", 3, "nzPlaceHolder", "nzFocus", "keyup"], ["nzDisabled", "", "nzCustomContent", "", 4, "ngIf"], ["nzDisabled", "", "nzCustomContent", ""], ["nz-icon", "", "nzType", "loading", 1, "loading-icon"]], template: function RelationshipMappingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RelationshipMappingComponent_Template_button_click_2_listener() { return ctx.addRelaionModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "+ Add Relationship");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RelationshipMappingComponent_div_5_Template, 17, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-modal", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function RelationshipMappingComponent_Template_nz_modal_nzVisibleChange_6_listener($event) { return ctx.isAddRelationShip = $event; })("nzOnCancel", function RelationshipMappingComponent_Template_nz_modal_nzOnCancel_6_listener() { return ctx.isAddRelationShip = false; })("nzOnOk", function RelationshipMappingComponent_Template_nz_modal_nzOnOk_6_listener() { return ctx.addRelationShip(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RelationshipMappingComponent_ng_container_7_Template, 17, 17, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.attributeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isAddRelationShip);
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__["NzModalComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__["NzModalContentDirective"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__["NzCardComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconDirective"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_12__["NzSpinComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_14__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_14__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__["NzFormControlComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWxhdGlvbnNoaXAtbWFwcGluZy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelationshipMappingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-relationship-mapping',
                templateUrl: './relationship-mapping.component.html',
                styleUrls: ['./relationship-mapping.component.css']
            }]
    }], function () { return [{ type: src_app_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }, { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { voterId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=voter-voter-module-es2015.js.map