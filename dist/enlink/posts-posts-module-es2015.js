(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["posts-posts-module"],{

/***/ "1XP4":
/*!***************************************!*\
  !*** ./src/app/posts/posts.module.ts ***!
  \***************************************/
/*! exports provided: PostsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsModule", function() { return PostsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _posts_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts-routing.module */ "uKRR");
/* harmony import */ var _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-detail/post-detail.component */ "SPWq");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ng_chartjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-chartjs */ "jdj2");
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/badge */ "SKKP");
/* harmony import */ var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/statistic */ "A07A");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-permissions */ "qSrz");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/progress */ "W9fG");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");





/** Import any ng-zorro components as the module required except icon module */



















/** Assign all ng-zorro modules to this array*/
const antdModule = [
    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"],
    ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__["NzCardModule"],
    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormModule"],
    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__["NzSelectModule"],
    ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__["NzTableModule"],
    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconModule"],
    ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_11__["NzAvatarModule"],
    ng_chartjs__WEBPACK_IMPORTED_MODULE_12__["NgChartjsModule"],
    ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_13__["NzBadgeModule"],
    ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_14__["NzStatisticModule"],
    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__["NzInputModule"],
    ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_17__["NzProgressModule"],
    ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_18__["NzTagModule"],
    ng2_search_filter__WEBPACK_IMPORTED_MODULE_19__["Ng2SearchPipeModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
    ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_20__["NzListModule"],
    ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_21__["NzPageHeaderModule"]
];
class PostsModule {
}
PostsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PostsModule });
PostsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PostsModule_Factory(t) { return new (t || PostsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _posts_routing_module__WEBPACK_IMPORTED_MODULE_2__["PostsRoutingModule"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_15__["NgxPermissionsModule"].forChild(),
            ...antdModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PostsModule, { declarations: [_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_3__["PostDetailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _posts_routing_module__WEBPACK_IMPORTED_MODULE_2__["PostsRoutingModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_15__["NgxPermissionsModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__["NzCardModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__["NzSelectModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__["NzTableModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconModule"],
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_11__["NzAvatarModule"],
        ng_chartjs__WEBPACK_IMPORTED_MODULE_12__["NgChartjsModule"],
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_13__["NzBadgeModule"],
        ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_14__["NzStatisticModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__["NzInputModule"],
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_17__["NzProgressModule"],
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_18__["NzTagModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_19__["Ng2SearchPipeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_20__["NzListModule"],
        ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_21__["NzPageHeaderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_3__["PostDetailComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _posts_routing_module__WEBPACK_IMPORTED_MODULE_2__["PostsRoutingModule"],
                    ngx_permissions__WEBPACK_IMPORTED_MODULE_15__["NgxPermissionsModule"].forChild(),
                    ...antdModule
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "SPWq":
/*!************************************************************!*\
  !*** ./src/app/posts/post-detail/post-detail.component.ts ***!
  \************************************************************/
/*! exports provided: PostDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailComponent", function() { return PostDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/http.service */ "9NvV");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");












function PostDetailComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-card", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-avatar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_data_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", 60)("nzIcon", a_data_r19.icon)("ngClass", a_data_r19.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_data_r19.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_data_r19.name);
} }
function PostDetailComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Shared List");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostDetailComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.shareTotalCount, " Results Found ");
} }
function PostDetailComponent_ng_container_37_nz_card_12_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Created By: ", item_r26 == null ? null : item_r26.created_by, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 2, item_r26 == null ? null : item_r26.created_at, "medium"), ")");
} }
function PostDetailComponent_ng_container_37_nz_card_12_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_sec_audit_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", sub_sec_audit_r31.key, " content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sub_sec_audit_r31.old_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sub_sec_audit_r31.new_value);
} }
function PostDetailComponent_ng_container_37_nz_card_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-card", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-collapse", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-collapse-panel", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostDetailComponent_ng_container_37_nz_card_12_ng_template_3_Template, 5, 5, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostDetailComponent_ng_container_37_nz_card_12_div_5_Template, 9, 3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const data_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r23._currentAuditId == data_r21.id ? ctx_r23.api_loader["accordian"] : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzExpandIconPosition", ctx_r23.right);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", _r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r26 == null ? null : item_r26.key_changes);
} }
function PostDetailComponent_ng_container_37_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Reshare ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostDetailComponent_ng_container_37_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzExpandChange", function PostDetailComponent_ng_container_37_Template_td_nzExpandChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const data_r21 = ctx.$implicit; const i_r22 = ctx.index; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.onExpandChange(data_r21.id, $event, i_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nz-page-header", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PostDetailComponent_ng_container_37_nz_card_12_Template, 6, 4, "nz-card", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PostDetailComponent_ng_container_37_ng_template_13_Template, 3, 0, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzExpand", ctx_r6.expandSet.has(data_r21.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r22 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r21.user_details.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzExpand", ctx_r6.expandSet.has(data_r21.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", data_r21 == null ? null : data_r21.auditDataset);
} }
function PostDetailComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Liked List");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostDetailComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r10.likeTotalCount, " Results Found ");
} }
function PostDetailComponent_tr_56_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r36 + 1);
} }
function PostDetailComponent_tr_56_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r38.likePageInd - 1) * ctx_r38.likePageSize + (i_r36 + 1), " ");
} }
function PostDetailComponent_tr_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostDetailComponent_tr_56_td_1_Template, 2, 1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostDetailComponent_tr_56_td_2_Template, 2, 1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r35 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.likePageInd == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.likePageInd > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r35.user_details.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r35.reaction_type);
} }
function PostDetailComponent_ng_template_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Comments List");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostDetailComponent_ng_template_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r16.commentTotalCount, " Results Found ");
} }
function PostDetailComponent_tr_75_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r42 + 1);
} }
function PostDetailComponent_tr_75_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r44.commentPageInd - 1) * ctx_r44.commentPageSize + (i_r42 + 1), " ");
} }
function PostDetailComponent_tr_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostDetailComponent_tr_75_td_1_Template, 2, 1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostDetailComponent_tr_75_td_2_Template, 2, 1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r41 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.commentPageInd == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.commentPageInd > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r41.user_details.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r41.comment_text);
} }
class PostDetailComponent {
    constructor(http, message, acRoute) {
        this.http = http;
        this.message = message;
        this.acRoute = acRoute;
        this.listMatricsData = [
            { 'name': 'Total Likes', 'icon': 'like', 'count': 104, 'class': 'ant-avatar-green' },
            { 'name': 'Total Comments', 'icon': 'comment', 'count': 96, 'class': 'ant-avatar-blue' },
            { 'name': 'Total Shares', 'icon': 'share-alt', 'count': 80, 'class': 'ant-avatar-purple' },
        ];
        this.listOfData = [
            {
                'name': 'A Data',
                're_share': 3
            },
            {
                'name': 'A Data',
                're_share': 3
            },
            {
                'name': 'A Data',
                're_share': 3
            },
            {
                'name': 'A Data',
                're_share': 3
            }
        ];
        this.shareTableData = [];
        this.likesTableData = [];
        this.commentTableData = [];
        this.api_loader = {
            'shared': false,
            'liked': false,
            'comments': false,
        };
        this.expandSet = new Set();
        // Get Shared List 
        this.sharedList = [];
        this.sharePageInd = 1;
        this.shareTotalCount = null;
        this.sharePageSize = 10;
        this.shareTableLoading = false;
        // Get Shared List 
        this.likedList = [];
        this.likePageInd = 1;
        this.likeTotalCount = null;
        this.likePageSize = 10;
        this.likeTableLoading = false;
        // Get Shared List 
        this.commentList = [];
        this.commentPageInd = 1;
        this.commentTotalCount = null;
        this.commentPageSize = 10;
        this.commentTableLoading = false;
    }
    ngOnInit() {
        this.acRoute.queryParams.subscribe((param) => {
            if (param["post_id"]) {
                this._currPostId = param["post_id"];
            }
            if (this._currPostId) {
                var params_data = { "post_id": this._currPostId, "end_point": "POST_DETAIL_API_URL", "type": "" };
                this.getBackgroundDataAPIFunction(params_data, "POST_DETAIL_API_URL");
                this.getSharedList();
                this.getlikedList();
                this.getCommentList();
            }
        });
        // this.getBackgroundDataAPIFunction(params_data, "POST_DETAIL_TABLE_DATA_API_URL", "Share")
        // this.getBackgroundDataAPIFunction(params_data, "POST_DETAIL_TABLE_DATA_API_URL", "Reaction")
        // this.getBackgroundDataAPIFunction(params_data, "POST_DETAIL_TABLE_DATA_API_URL", "Comments")
    }
    getBackgroundDataAPIFunction(params_data, section, type = "") {
        this.http.getDataFromBackgroundFunction(params_data).subscribe((res) => {
            if (res['data']) {
                if (section == "POST_DETAIL_API_URL") {
                    this.postDetailData = res['data'];
                    this.listMatricsData[0]['count'] = res['data']['total_likes'];
                    this.listMatricsData[1]['count'] = res['data']['total_comments'];
                    this.listMatricsData[2]['count'] = res['data']['total_shares'];
                }
                // if (section == "POST_DETAIL_TABLE_DATA_API_URL" && type == "Share") {
                //   this.shareTableData = res['data']
                // }
                // if (section == "POST_DETAIL_TABLE_DATA_API_URL" && type == "Reaction") {
                //   this.likesTableData = res['data']
                // }
                if (section == "POST_DETAIL_TABLE_DATA_API_URL" && type == "Comments") {
                    this.commentTableData = res['data'];
                }
            }
        });
    }
    onExpandChange(id, checked, index) {
        if (checked) {
            this.expandSet.add(id);
            this._currReshareId = id;
            // this.getBackgroundDataAPIFunction();
        }
        else {
            this.expandSet.delete(id);
        }
    }
    getSharedList(tableFilter) {
        this.api_loader['shared'] = true;
        let params_data = {};
        params_data = { "post_id": this._currPostId, "end_point": "POST_DETAIL_TABLE_DATA_API_URL", "type": "Share" };
        if (tableFilter) {
            this.sharePageInd = tableFilter === null || tableFilter === void 0 ? void 0 : tableFilter.pageIndex;
            this.sharePageSize = tableFilter === null || tableFilter === void 0 ? void 0 : tableFilter.pageSize;
            params_data['page'] = this.sharePageInd;
            params_data['limit'] = this.sharePageSize;
        }
        else {
            params_data['page'] = this.sharePageInd;
            params_data['limit'] = this.sharePageSize;
        }
        this.http.getDataFromBackgroundFunction(params_data).subscribe((res) => {
            if (res['data']) {
                this.sharedList = res['data'];
                this.shareTotalCount = res.total_count;
                this.api_loader['shared'] = false;
            }
            else {
                this.api_loader['shared'] = false;
            }
        });
    }
    getlikedList(tableFilter) {
        this.api_loader['liked'] = true;
        let params_data = {};
        params_data = { "post_id": this._currPostId, "end_point": "POST_DETAIL_TABLE_DATA_API_URL", "type": "Reaction" };
        if (tableFilter) {
            this.likePageInd = tableFilter === null || tableFilter === void 0 ? void 0 : tableFilter.pageIndex;
            this.likePageSize = tableFilter === null || tableFilter === void 0 ? void 0 : tableFilter.pageSize;
            params_data['page'] = this.likePageInd;
            params_data['limit'] = this.likePageSize;
        }
        else {
            params_data['page'] = this.likePageInd;
            params_data['limit'] = this.likePageSize;
        }
        this.http.getDataFromBackgroundFunction(params_data).subscribe((res) => {
            if (res['data']) {
                this.likedList = res['data'];
                this.likeTotalCount = res.total_count;
                this.api_loader['liked'] = false;
            }
            else {
                this.api_loader['liked'] = false;
            }
        });
    }
    getCommentList(tableFilter) {
        this.api_loader['comments'] = true;
        let params_data = {};
        params_data = { "post_id": this._currPostId, "end_point": "POST_DETAIL_TABLE_DATA_API_URL", "type": "Comments" };
        // params_data = { "post_id": this._currPostId, "end_point": "POST_DETAIL_TABLE_DATA_API_URL", "type": "Reaction" }
        if (tableFilter) {
            this.commentPageInd = tableFilter === null || tableFilter === void 0 ? void 0 : tableFilter.pageIndex;
            this.commentPageSize = tableFilter === null || tableFilter === void 0 ? void 0 : tableFilter.pageSize;
            params_data['page'] = this.commentPageInd;
            params_data['limit'] = this.commentPageSize;
        }
        else {
            params_data['page'] = this.commentPageInd;
            params_data['limit'] = this.commentPageSize;
        }
        this.http.getDataFromBackgroundFunction(params_data).subscribe((res) => {
            if (res['data']) {
                this.commentList = res['data'];
                this.commentTotalCount = res.total_count;
                this.api_loader['comments'] = false;
            }
            else {
                this.api_loader['comments'] = false;
            }
        });
    }
}
PostDetailComponent.ɵfac = function PostDetailComponent_Factory(t) { return new (t || PostDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
PostDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostDetailComponent, selectors: [["app-post-detail"]], decls: 76, vars: 38, consts: [[2, "height", "20rem", "overflow", "hidden"], [1, "row"], [1, "col-md-3", "mb-3"], [1, "w-100", 3, "src"], [1, "col-md-9"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [3, "nzTitle"], ["titleShared", ""], [1, "totalCount"], ["botTotalCount", ""], [3, "nzData", "nzTotal", "nzFrontPagination", "nzShowSizeChanger", "nzPageIndex", "nzPageSize", "nzShowTotal", "nzLoading", "nzQueryParams"], ["rowSelectionTable", ""], ["nzWidth", "3rem"], ["nzWidth", "14rem"], [4, "ngFor", "ngForOf"], ["likedTitle", ""], ["likedFooter", ""], ["commentTitle", ""], ["comentFooter", ""], [1, "h-100", "d-flex", "align-items-center", "pointer"], [1, "media", "align-items-center"], [3, "nzSize", "nzIcon", "ngClass"], [1, "m-l-15"], [1, "m-b-0"], [1, "m-b-0", "text-dark"], [1, "d-flex"], ["nz-icon", "", "nzType", "notification", "nzTheme", "fill", 1, "mr-3"], [1, "font-weight-semibold"], [3, "nzExpand", "nzExpandChange"], [3, "nzExpand"], [1, "justify-content-center"], [1, "site-page-header", "header_bg_dark", 3, "nzTitle"], ["class", "mb-md-0 border", 3, "nzLoading", 4, "ngFor", "ngForOf"], ["trailTitle", ""], [1, "mb-md-0", "border", 3, "nzLoading"], ["nzAccordion", "", 3, "nzExpandIconPosition"], [3, "nzHeader"], ["trail_header", ""], ["class", "d-flex flex-column mb-2", 4, "ngFor", "ngForOf"], [1, "text-muted", "ml-3", "font-size-12", "font-weight-normal"], [1, "d-flex", "flex-column", "mb-2"], [1, "d-flex", "align-items-center"], [1, ""], ["nz-icon", "", "nzType", "arrow-right", "nzTheme", "outline", 1, "text-danger", "mx-3"], [1, "mr-3"], [1, "ml-md-2"], [1, "mb-0"], ["nz-icon", "", "nzType", "like", "nzTheme", "fill", 1, "mr-3"], ["nzWidth", "4rem", 4, "ngIf"], ["nzWidth", "4rem"], ["nz-icon", "", "nzType", "message", "nzTheme", "fill", 1, "mr-3"]], template: function PostDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PostDetailComponent_div_14_Template, 9, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PostDetailComponent_ng_template_19_Template, 4, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PostDetailComponent_ng_template_22_Template, 3, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nz-table", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzQueryParams", function PostDetailComponent_Template_nz_table_nzQueryParams_24_listener($event) { return ctx.sharedList[0] ? ctx.getSharedList($event) : null; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sr No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Re-Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, PostDetailComponent_ng_container_37_Template, 15, 6, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, PostDetailComponent_ng_template_40_Template, 3, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, PostDetailComponent_ng_template_42_Template, 3, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "nz-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "nz-table", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzQueryParams", function PostDetailComponent_Template_nz_table_nzQueryParams_45_listener($event) { return ctx.likedList[0] ? ctx.getlikedList($event) : null; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Sr No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Reaction Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, PostDetailComponent_tr_56_Template, 7, 4, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, PostDetailComponent_ng_template_59_Template, 3, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, PostDetailComponent_ng_template_61_Template, 3, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "nz-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "nz-table", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzQueryParams", function PostDetailComponent_Template_nz_table_nzQueryParams_64_listener($event) { return ctx.commentList[0] ? ctx.getCommentList($event) : null; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Sr No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, PostDetailComponent_tr_75_Template, 7, 4, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](60);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.postDetailData == null ? null : ctx.postDetailData.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Post ID - ", ctx.postDetailData == null ? null : ctx.postDetailData.post_id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.postDetailData == null ? null : ctx.postDetailData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Post Date - ", (ctx.postDetailData == null ? null : ctx.postDetailData.post_on) ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 35, ctx.postDetailData == null ? null : ctx.postDetailData.post_on, "medium") : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listMatricsData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.sharedList)("nzTotal", ctx.shareTotalCount)("nzFrontPagination", false)("nzShowSizeChanger", true)("nzPageIndex", ctx.sharePageInd)("nzPageSize", ctx.sharePageSize)("nzShowTotal", _r3)("nzLoading", ctx.api_loader["shared"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sharedList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.likedList)("nzTotal", ctx.likeTotalCount)("nzFrontPagination", false)("nzShowSizeChanger", true)("nzPageIndex", ctx.likePageInd)("nzPageSize", ctx.likePageSize)("nzShowTotal", _r9)("nzLoading", ctx.api_loader["liked"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.likedList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.commentList)("nzTotal", ctx.commentTotalCount)("nzFrontPagination", false)("nzShowSizeChanger", true)("nzPageIndex", ctx.commentPageInd)("nzPageSize", ctx.commentPageSize)("nzShowTotal", _r15)("nzLoading", ctx.api_loader["comments"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.commentList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__["NzCardComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__["NzTbodyComponent"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_7__["NzAvatarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__["NzTdAddOnComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__["NzTrExpandDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__["NzTableFixedRowComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_10__["NzPageHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-detail',
                templateUrl: './post-detail.component.html',
                styleUrls: ['./post-detail.component.css']
            }]
    }], function () { return [{ type: _service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "uKRR":
/*!***********************************************!*\
  !*** ./src/app/posts/posts-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PostsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsRoutingModule", function() { return PostsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-detail/post-detail.component */ "SPWq");





const routes = [
    {
        path: 'post-detail',
        // canActivate: [NgxPermissionsGuard],
        component: _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_2__["PostDetailComponent"],
        data: {
            parent: 'Dashboard',
            title: 'Post Detail',
            home: { isVisible: true, url: '/dashboard/home' }
        }
    },
];
class PostsRoutingModule {
}
PostsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PostsRoutingModule });
PostsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PostsRoutingModule_Factory(t) { return new (t || PostsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PostsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=posts-posts-module-es2015.js.map