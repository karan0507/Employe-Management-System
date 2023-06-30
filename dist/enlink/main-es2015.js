(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/pidgeot/Desktop/Codezen/frontend-election-portal/src/main.ts */"zUnb");


/***/ }),

/***/ "0ZK0":
/*!*******************************************!*\
  !*** ./src/app/service/global.service.ts ***!
  \*******************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js */ "wIp5");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ "nSgz");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http.service */ "9NvV");








class GlobalService {
    constructor(message, http) {
        this.message = message;
        this.http = http;
        this.zoneData = [];
        this.districtData = [];
        this.assemblyData = [];
        this.candidateData = [];
        this.loksabhaList = [];
        this.enrollerData = [];
        this.api_call_loader = { 'selectLoader': false };
        // Current App Nav;
        this.globalNavValue = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.globalUserData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
        this.globalAccountData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
    }
    sendUserData(data) {
        this.globalUserData.next(data);
    }
    sendGlobalAccountData(data) {
        this.globalAccountData.next(data);
    }
    setCurrNavValue(data) {
        this.globalNavValue.next(data);
    }
    getDeviceType() {
        var mq = window.matchMedia("(max-width: 720px)");
        if (mq.matches) {
            return 'mobile';
        }
        else {
            return 'desktop';
        }
    }
    amountFromatterFunctionForHO(value) {
        var val;
        val = Math.abs(value);
        if (val >= 10000000) {
            val = (val / 10000000).toFixed(2) + (' Cr');
        }
        else if (val >= 100000) {
            val = (val / 100000).toFixed(2) + (' Lacs');
        }
        else if (val >= 1000) {
            val = (val / 1000).toFixed(2) + (' Thousand');
        }
        if (typeof val == 'string') {
        }
        else {
            val = val.toFixed(2);
        }
        return val;
    }
    checkBrowserType() {
        if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
            return 'Opera';
        }
        else if (navigator.userAgent.indexOf("Chrome") != -1) {
            return 'Chrome';
        }
        else if (navigator.userAgent.indexOf("Safari") != -1) {
            return 'Safari';
        }
        else if (navigator.userAgent.indexOf("Firefox") != -1) {
            return 'Firefox';
        }
        else {
            return 'IE';
        }
    }
    // export(type) {
    //   const generateloader = this.message.loading('Generating File..', { nzDuration: 0 }).messageId;
    //   this.http.exportMaster(type).subscribe((res: any) => {
    //     if (res.size > 41) {
    //       this.message.success('File Exported');
    //       this.downloadFile(type, res);
    //     } else {
    //       this.message.error("No Report to download");
    //     }
    //     this.message.remove(generateloader);
    //     var downloadURL = window.URL.createObjectURL(res);
    //     var link = document.createElement('a');
    //     link.href = downloadURL;
    //     link.download = '' + '.' + '';
    //     link.click();
    //   }, error => {
    //     this.message.remove(generateloader);
    //   })
    // }
    // exportMasterAPI(type,data ) {
    //   const generateloader = this.message.loading('Generating File..', { nzDuration: 0 }).messageId;
    //   this.http.exportMasterAPIWithMultipleFilters(data).subscribe((res: any) => {
    //     this.message.remove(generateloader);
    //     var downloadURL = window.URL.createObjectURL(res);
    //     var link = document.createElement('a');
    //     link.href = downloadURL;
    //     link.download = '' + '.' + '';
    //     link.click();
    //   }, error => {
    //     this.message.remove(generateloader);
    //   })
    // }
    downloadFile(type, data) {
        Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(data, `${type}.xlsx`);
    }
    searchStaticDataGlobalFunction(type, user, event, isEvent, candidate_id) {
        this.api_call_loader['selectLoader'] = true;
        clearTimeout(this.debounce);
        this.debounce = setTimeout(() => {
            let search_param = {
                "search_param": (isEvent == 'string' ? event : event.target.value),
                "page": 1,
                "limit": 10
            };
            if (user == 'user') {
                this.globalMasterUser(type, search_param, candidate_id);
            }
            else if (user == 'master') {
                this.globalMasterFilter(type, search_param);
            }
        }, 500);
    }
    globalMasterFilter(type, search_param) {
        // let temp = this.globalEncryptionFunction(search_param)
        this.api_call_loader['selectLoader'] = true;
        this.http.getGlobalMaster(type, search_param).subscribe((res) => {
            if (res === null || res === void 0 ? void 0 : res.success) {
                this.api_call_loader['selectLoader'] = false;
                if (type == 'ZoneMaster') {
                    this.zoneData = res === null || res === void 0 ? void 0 : res.data;
                }
                else if (type == 'District') {
                    this.districtData = res === null || res === void 0 ? void 0 : res.data;
                }
                else if (type == 'Assembly') {
                    // this.assemblyData
                    this.assemblyData = res === null || res === void 0 ? void 0 : res.data;
                    console.log(this.assemblyData);
                }
                else if (type == 'LoksabhaMaster') {
                    this.loksabhaList = res === null || res === void 0 ? void 0 : res.data;
                }
            }
            else {
                this.api_call_loader['selectLoader'] = false;
                this.message.error(res === null || res === void 0 ? void 0 : res.message);
            }
        });
    }
    globalMasterUser(type, search_param, candidate_id) {
        console.log(candidate_id, 'this is candidate id');
        // let temp = this.globalEncryptionFunction(search_param)
        if (candidate_id) {
            if (!search_param) {
                search_param = { "user_type": candidate_id };
            }
            else {
                search_param['user_type'] = candidate_id;
            }
        }
        this.http.getGlobalUser(type, search_param).subscribe((res) => {
            // return res?.data
            if (res === null || res === void 0 ? void 0 : res.success) {
                if (type == 'Candidate') {
                    this.candidateData = res === null || res === void 0 ? void 0 : res.data;
                }
                else if (type == 'Enroller') {
                    this.enrollerData = res === null || res === void 0 ? void 0 : res.data;
                }
            }
        });
    }
    globalEncryptionFunction(data) {
        data = JSON.stringify(data);
        var key = "JDKWIFKDOWR29201KFOW92028FUDISO2";
        key = crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8.parse(key);
        var iv = crypto_js__WEBPACK_IMPORTED_MODULE_2__["lib"].WordArray.random(16);
        var encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].encrypt(data, key, {
            iv: iv
        });
        var encrypted_data = iv.concat(encrypted.ciphertext).toString(crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Base64);
        var final_data = {
            "enrypted_data": encrypted_data
        };
        return final_data;
    }
    globalDecryptFunction(encrypted_data) {
        var key = "JDKWIFKDOWR29201KFOW92028FUDISO2";
        key = crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8.parse(key);
        var ciphertext = crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Base64.parse(encrypted_data);
        // split IV and ciphertext
        var iv = ciphertext.clone();
        iv.sigBytes = 16;
        iv.clamp();
        ciphertext.words.splice(0, 4); // delete 4 words = 16 bytes
        ciphertext.sigBytes -= 16;
        // decryption
        var decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].decrypt({ ciphertext: ciphertext }, key, {
            iv: iv
        });
        var decrypted_data = decrypted.toString(crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8);
        return decrypted_data;
    }
    numberWithCommas(data) {
        return data.toString().split('.')[0].length > 3 ? data.toString().substring(0, data.toString().split('.')[0].length - 3).replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + data.toString().substring(data.toString().split('.')[0].length - 3) : data.toString();
    }
    exportTableData(data, filename, column_name) {
        console.log(filename, "file to download");
        const ws = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].json_to_sheet(data);
        const wb = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_4__["writeFile"](wb, filename + '.xlsx');
    }
}
GlobalService.ɵfac = function GlobalService_Factory(t) { return new (t || GlobalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"])); };
GlobalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlobalService, factory: GlobalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] }, { type: _http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] }]; }, null); })();


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "9NvV":
/*!*****************************************!*\
  !*** ./src/app/service/http.service.ts ***!
  \*****************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






// import { map } from "rxjs";
class HttpService {
    // url = 'https://iycapi.dixitsir.com/'
    // url = this.valueFunction()
    //     valueFunction(){
    //     var dynamic_url;
    //     if (location.origin == 'https://admin.chatiyc.com') {
    //           dynamic_url = 'https://api.chatiyc.com/'
    //     } else if(location.origin == 'http://iycfront.dixitsir.com/'){
    //           dynamic_url = 'https://iycapi.dixitsir.com/'
    //     }else{
    //       dynamic_url = 'https://api.chatiyc.com/'
    //     }
    //     return dynamic_url
    //     }
    constructor(http) {
        this.http = http;
        this.globalUserPermissionsData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
        // https://api.chatiyc.com/admin
        // url = 'https://iycapi.dixitsir.com/'   
        this.url = 'https://api.chatiyc.com';
    }
    setPermissionValue(data) {
        this.globalUserPermissionsData.next(data);
    }
    UserLoginSendOTP(data, end_point) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this.http.post(this.url + end_point, data, { headers: headers });
    }
    // verify OTP
    verifyOTPAPI(data, end_point) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this.http.post(this.url + end_point, data, { headers: headers });
    }
    createOnline$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'offline').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => false)), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'online').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => true)), new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((sub) => {
            sub.next(navigator.onLine);
            sub.complete();
        }));
    }
    // verify User API
    verifyUserAPI(end_point) {
        return this.http.get(this.url + end_point);
    }
    // logout user
    logoutUserAPI(end_point) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this.http.get(this.url + end_point, { headers: headers });
    }
    getDataFromBackgroundFunction(params_data) {
        return this.http.get(this.url + `/social_media/v1/post-detail/get-data-from-background`, { params: params_data });
    }
    addVoterToList(data) {
        return this.http.post(this.url + `votes/add-enroller-votes`, data);
    }
    getGlobalMaster(data, search_param) {
        return this.http.get(this.url + `master/get-global-master/${data}`, { params: search_param });
        // master/get-global-master/:modelname
    }
    vouchersList(data) {
        return this.http.get(this.url + 'account/get-account-list', { params: data });
    }
    getGlobalUser(user, data) {
        return this.http.get(this.url + 'users/get-global-user/' + user, { params: data });
    }
    paymentOnCommission(data) {
        return this.http.post(this.url + `votes/payment-enroller-votes`, data);
        // votes/payment-enroller-votes
    }
    // votes/add-enroller-votes
    addEditVoucher(data) {
        return this.http.post(this.url + 'account/add-account', data);
    }
    addEnroller(data) {
        return this.http.post(this.url + 'users/add-enroller', data);
    }
    exportMaster(type) {
        return this.http.get(this.url + 'account/export/' + type, { responseType: 'blob' });
    }
    addExpenseLedger(type, data) {
        return this.http.post(this.url + 'account/add-' + type + '-type', data);
    }
    deleteAccount(id) {
        return this.http.delete(this.url + 'account/delete-account/' + id);
    }
    logout() {
        return this.http.get(this.url + '/users/v1/auth/logout-user');
    }
    getEnrollerData(data) {
        return this.http.get(this.url + 'users/get-global-user/Enroller', { params: data });
    }
    editEnrollerData(id, data) {
        return this.http.put(this.url + 'users/edit-enroller/' + id, data);
    }
    getOtpForEnroller(data) {
        return this.http.post(this.url + 'users/iyc/send-otp', data);
    }
    verifyOtpForEnroller(data) {
        return this.http.post(this.url + 'users/iyc/verify-otp', data);
    }
    getDashboardApiCount() {
        return this.http.get(this.url + 'votes/get-total-counts');
    }
    getDashboardGraphCount(data) {
        return this.http.get(this.url + 'votes/get-realtime-graph-data', { params: data });
    }
    getDashboardTableData() {
        return this.http.get(this.url + 'votes/get-analytic-data');
    }
    getAssemblyDashboard(data) {
        return this.http.get(this.url + 'votes/get-assembly-candidate', { params: data });
    }
    getDashboardMetrics4() {
        return this.http.get(this.url + '/social_media/v1/post-detail/get-data-from-background');
    }
    getDistrictWiseData() {
        return this.http.get(this.url + 'votes/get-district-candidate');
    }
    getGSCandidateData(data) {
        return this.http.get(this.url + 'votes/get-gs-candidate', { params: data });
    }
    getOurGraphData(data) {
        return this.http.get(this.url + 'votes/get-our-graph-data', { params: data });
    }
    getDailyVoteCount(data) {
        return this.http.get(this.url + 'votes/get-day-wise-vote-count', { params: data });
    }
    getInsightVotesGraph(data) {
        return this.http.get(this.url + 'votes/get-vote-insight-graph', { params: data });
    }
    exportMasterAPIWithMultipleFilters(data) {
        return this.http.post(this.url + 'account/export-analytics-report', data, { responseType: 'blob' });
    }
    generateDayWiseReport(data) {
        return this.http.post(this.url + 'account/generate-day-wise-report', data, { responseType: 'blob' });
    }
    generateDayWiseReportAssemblyDistrict(data) {
        return this.http.post(this.url + 'account/generate-day-wise-district-assembly-report', data, { responseType: 'blob' });
    }
    getDistrictVotes() {
        return this.http.get(this.url + 'votes/get-district-votes');
    }
    getAssemblyVotes() {
        return this.http.get(this.url + 'votes/get-assembly-votes');
    }
    getSPVotes() {
        return this.http.get(this.url + 'votes/get-candidate-votes');
    }
    // Phase 2 PWA APIs
    getVoterActivity(data) {
        return this.http.get(this.url + '/voters/v1/voter-activity/get-voter-activity', { params: data });
    }
    deleteVoterActivity(id) {
        return this.http.delete(this.url + '/voters/v1/voter-activity/delete-voter-activity/' + id + '/');
    }
    editVoterActivity(id, data) {
        return this.http.put(this.url + '/voters/v1/voter-activity/edit-voter-activity/' + id + `/`, data);
    }
    addVoterActivity(data) {
        return this.http.post(this.url + `/voters/v1/voter-activity/add-voter-activity`, data);
    }
    getVoterFollowup(data) {
        return this.http.get(this.url + '/voters/v1/voter-activity/get-voter-activity', { params: data });
    }
    deleteVoterFollowup(id) {
        return this.http.delete(this.url + '/voters/v1/voter-activity/delete-voter-activity/' + id + '/');
    }
    editVoterFollowup(id, data) {
        return this.http.put(this.url + `/voters/v1/voter-followup/edit-voter-followup/` + id + `/`, data);
    }
    addVoterFollowup(data) {
        return this.http.post(this.url + `/voters/v1/voter-followup/add-voter-followup`, data);
    }
    logOutUser() {
        return this.http.get(this.url + `/users/v1/auth/logout-user`);
    }
    // Get User Profile Details
    getUserProfile(data) {
        return this.http.get(this.url + `/users/v1/auth/get-user-profile`, { params: data });
    }
    getGlobalAdminData(data) {
        return this.http.get(this.url + `/users/v1/user/add-global-account`, { params: data });
    }
    addGlobalAdminData(data) {
        return this.http.post(this.url + `/users/v1/user/add-global-account`, data);
    }
    getVoterList(data) {
        return this.http.get(this.url + `/social_media/v1/post-detail/get-data-from-background`, { params: data });
    }
    getVoterDetails(data) {
        return this.http.get(this.url + `/social_media/v1/post-detail/get-data-from-background`, { params: data });
    }
    addEditVoterActivityList(data) {
        return this.http.get(this.url + `/voters/v1/voter-activity/get-voter-activity`, { params: data });
    }
    getVoterFollowUp(data) {
        return this.http.get(this.url + `/voters/v1/voter-followup/get-voter-followup`, { params: data });
    }
    getMasterData(data) {
        return this.http.get(this.url + `/master/v1/master-get/get-master-data-global`, { params: data });
    }
    // Rating voter
    getVoterRating(data) {
        return this.http.get(this.url + `/master/v1/master-get/get-master-data-global`, { params: data });
    }
    addVoterRating(data) {
        return this.http.get(this.url + `/voters/v1/voter-rating/add-voter-rating`, { params: data });
    }
    editVoterRating(id, data) {
        // data= {voter_id,  rating}
        return this.http.put(this.url + `/voters/v1/voter-rating/edit-voter-rating/` + id + `/`, { params: data });
    }
    deleteoterRating(id) {
        return this.http.delete(this.url + `/voters/v1/voter-rating/delete-voter-rating/` + id + `/`);
    }
    editVoter(id, data) {
        return this.http.put(this.url + `/voters/v1/voter-data/edit-voter-data/` + id + `/`, data);
    }
    addVoter(data) {
        return this.http.post(this.url + `/voters/v1/voter-data/add-voter-data`, data);
    }
    getVoterStatus(data) {
        return this.http.get(this.url + `/master/v1/master-get/get-master-data-global`, data);
    }
    getAuditTrail(data) {
        return this.http.get(this.url + `/platform_central/v1/audit-trail/get-audit-trail`, { params: data });
    }
    // Task Management
    getTaskList(data) {
        return this.http.get(this.url + `/users/v1/task-management/fetch-task-list`, { params: data });
    }
    editTasks(id, data) {
        return this.http.put(this.url + `/users/v1/task-management/edit-task/` + id + `/`, data);
    }
    addTasks(data) {
        return this.http.post(this.url + `/users/v1/task-management/create-task`, data);
    }
    changeTaskStatus(id, data) {
        return this.http.put(this.url + `/users/v1/task-management/edit-task/` + id + `/`, data);
    }
    // Team Management
    getTeamList(data) {
        return this.http.get(this.url + `/users/v1/user-management/get-user`, { params: data });
    }
    editTeamMember(id, data) {
        return this.http.put(this.url + `/users/v1/user-management/edit-user/` + id + `/`, data);
    }
    addTeamMember(data) {
        return this.http.post(this.url + `/users/v1/user-management/add-user`, data);
    }
    changeTeamStatus(id, data) {
        return this.http.post(this.url + `/users/v1/user-management/change-user-status`, data);
    }
    importTask(data) {
        return this.http.post(this.url + `/users/v1/task-management/import-task`, data);
    }
    getAccountListt(data) {
        return this.http.get(this.url + `/social_media/v1/account-link/get-account-links`, { params: data });
    }
    editAccountList(id, data) {
        return this.http.put(this.url + `/social_media/v1/account-link/edit-account-links/` + id + `/`, data);
    }
    addAccountLink(data) {
        return this.http.post(this.url + `/social_media/v1/account-link/add-account-links`, data);
    }
    changeLanguage(data) {
        return this.http.post(this.url + `/users/v1/user/change-user-language`, data);
    }
    addVoterTasg(data) {
        return this.http.post(this.url + `/voters/v1/voter-tag/add-voter-tag`, data);
    }
    getVotersTagList(data) {
        return this.http.get(this.url + `/voters/v1/voter-tag/get-voter-tag`, { params: data });
    }
    addRelationship(data) {
        return this.http.post(this.url + `/voters/v1/voter-tag/add-voter-relationship`, data);
    }
    getRelationshipTags(data) {
        return this.http.get(this.url + `/voters/v1/voter-tag/get-voter-primary-attributes`, { params: data });
    }
    getRelationList(data) {
        return this.http.get(this.url + `/voters/v1/voter-tag/get-voter-relationship`, { params: data });
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ASAD":
/*!********************************************************************!*\
  !*** ./src/app/shared/template/quick-view/quick-view.component.ts ***!
  \********************************************************************/
/*! exports provided: QuickViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickViewComponent", function() { return QuickViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/theme-constant.service */ "PQ0Y");
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/http.service */ "9NvV");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








class QuickViewComponent {
    constructor(themeService, http, message, router) {
        this.themeService = themeService;
        this.http = http;
        this.message = message;
        this.router = router;
        this.allChecked = false;
        this.indeterminate = true;
        this.checkOptionsOne = [
            { label: 'Hindu', value: 'hindu', checked: false },
            { label: 'Muslim', value: 'muslim', checked: false },
            { label: 'Christian', value: 'christian', checked: false }
        ];
    }
    ngOnInit() {
        console.log('In Quick');
        this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
        this.themeService.isSideNavDarkChanges.subscribe(isDark => this.isSideNavDark = isDark);
        this.themeService.selectedHeaderColor.subscribe(color => this.selectedHeaderColor = color);
    }
    changeHeaderColor() {
        this.themeService.changeHeaderColor(this.selectedHeaderColor);
    }
    toggleSideNavDark() {
        this.themeService.toogleSideNavDark(this.isSideNavDark);
    }
    toggleFold() {
        this.themeService.toggleFold(this.isFolded);
    }
    logOutUser() {
        this.http.logOutUser().subscribe((res) => {
            if (res.success) {
                this.message.success(res.message);
                this.router.navigateByUrl('/authentication/login');
            }
        });
    }
    updateAllChecked(type) {
        if (type) {
            this.checkOptionsOne = this.checkOptionsOne.map(item => (Object.assign(Object.assign({}, item), { checked: false })));
            return;
        }
        this.indeterminate = false;
        if (this.allChecked) {
            this.checkOptionsOne = this.checkOptionsOne.map(item => (Object.assign(Object.assign({}, item), { checked: true })));
        }
        else {
            this.checkOptionsOne = this.checkOptionsOne.map(item => (Object.assign(Object.assign({}, item), { checked: false })));
        }
    }
    updateSingleChecked() {
        if (this.checkOptionsOne.every(item => !item.checked)) {
            this.allChecked = false;
            this.indeterminate = false;
        }
        else if (this.checkOptionsOne.every(item => item.checked)) {
            this.allChecked = true;
            this.indeterminate = false;
        }
        else {
            this.indeterminate = true;
        }
    }
}
QuickViewComponent.ɵfac = function QuickViewComponent_Factory(t) { return new (t || QuickViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_1__["ThemeConstantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
QuickViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuickViewComponent, selectors: [["app-quick-view"]], decls: 7, vars: 3, consts: [[1, "d-flex", "justify-content-between"], ["nz-checkbox", "", 3, "ngModel", "nzIndeterminate", "ngModelChange"], [1, "text-primary", "font-weight-semibold", 3, "click"], [2, "width", "70%", 3, "ngModel", "ngModelChange"]], template: function QuickViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuickViewComponent_Template_label_ngModelChange_1_listener($event) { return ctx.allChecked = $event; })("ngModelChange", function QuickViewComponent_Template_label_ngModelChange_1_listener() { return ctx.updateAllChecked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Select All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuickViewComponent_Template_a_click_4_listener() { ctx.updateAllChecked(true); return ctx.allChecked = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Clear All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-checkbox-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuickViewComponent_Template_nz_checkbox_group_ngModelChange_6_listener($event) { return ctx.checkOptionsOne = $event; })("ngModelChange", function QuickViewComponent_Template_nz_checkbox_group_ngModelChange_6_listener() { return ctx.updateSingleChecked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.allChecked)("nzIndeterminate", ctx.indeterminate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checkOptionsOne);
    } }, directives: [ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_5__["NzCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_5__["NzCheckboxGroupComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuickViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quick-view',
                templateUrl: './quick-view.component.html'
            }]
    }], function () { return [{ type: _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_1__["ThemeConstantService"] }, { type: src_app_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }, { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "G7zf":
/*!*******************************************************!*\
  !*** ./src/app/shared/routes/common-layout.routes.ts ***!
  \*******************************************************/
/*! exports provided: CommonLayout_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonLayout_ROUTES", function() { return CommonLayout_ROUTES; });
const CommonLayout_ROUTES = [
    {
        path: 'dashboard',
        loadChildren: () => Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~home-~c8bb761b"), __webpack_require__.e("default~authentication-authentication-module~dashboard-dashboard-module~profile-profile-module~task-~87a63fe1"), __webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~posts~16928289"), __webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~posts~bac7c449"), __webpack_require__.e("common"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ../../dashboard/dashboard.module */ "TDBs")).then(m => m.DashboardModule),
    },
    {
        path: 'posts',
        loadChildren: () => Promise.all(/*! import() | posts-posts-module */[__webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~home-~c8bb761b"), __webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~posts~16928289"), __webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~posts~bac7c449"), __webpack_require__.e("default~account-account-module~posts-posts-module~voter-voter-module"), __webpack_require__.e("common"), __webpack_require__.e("posts-posts-module")]).then(__webpack_require__.bind(null, /*! ../../posts/posts.module */ "1XP4")).then(m => m.PostsModule),
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~home-~c8bb761b"), __webpack_require__.e("default~authentication-authentication-module~dashboard-dashboard-module~profile-profile-module~task-~87a63fe1"), __webpack_require__.e("default~profile-profile-module~voter-voter-module"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ../../profile/profile.module */ "cRhG")).then(m => m.ProfileModule),
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~home-~c8bb761b"), __webpack_require__.e("default~home-home-module~voter-voter-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ../../home/home.module */ "ct+p")).then(m => m.HomeModule),
    },
    {
        path: 'voter',
        loadChildren: () => Promise.all(/*! import() | voter-voter-module */[__webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~home-~c8bb761b"), __webpack_require__.e("default~authentication-authentication-module~dashboard-dashboard-module~profile-profile-module~task-~87a63fe1"), __webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~posts~16928289"), __webpack_require__.e("default~account-account-module~posts-posts-module~voter-voter-module"), __webpack_require__.e("default~home-home-module~voter-voter-module"), __webpack_require__.e("default~task-management-task-management-module~voter-voter-module"), __webpack_require__.e("default~profile-profile-module~voter-voter-module"), __webpack_require__.e("voter-voter-module")]).then(__webpack_require__.bind(null, /*! ../../voter/voter.module */ "nNne")).then(m => m.VoterModule),
    },
    {
        path: 'task-management',
        loadChildren: () => Promise.all(/*! import() | task-management-task-management-module */[__webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~home-~c8bb761b"), __webpack_require__.e("default~authentication-authentication-module~dashboard-dashboard-module~profile-profile-module~task-~87a63fe1"), __webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~posts~16928289"), __webpack_require__.e("default~task-management-task-management-module~voter-voter-module"), __webpack_require__.e("task-management-task-management-module")]).then(__webpack_require__.bind(null, /*! ../../task-management/task-management.module */ "/zXh")).then(m => m.TaskManagementModule),
    },
    {
        path: 'team-management',
        loadChildren: () => Promise.all(/*! import() | team-team-module */[__webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~home-~c8bb761b"), __webpack_require__.e("default~authentication-authentication-module~dashboard-dashboard-module~profile-profile-module~task-~87a63fe1"), __webpack_require__.e("team-team-module")]).then(__webpack_require__.bind(null, /*! ../../team/team.module */ "o5iR")).then(m => m.TeamModule),
    },
    {
        path: 'media-account',
        loadChildren: () => Promise.all(/*! import() | account-account-module */[__webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~home-~c8bb761b"), __webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~posts~16928289"), __webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~posts~bac7c449"), __webpack_require__.e("default~account-account-module~posts-posts-module~voter-voter-module"), __webpack_require__.e("common"), __webpack_require__.e("account-account-module")]).then(__webpack_require__.bind(null, /*! ../../account/account.module */ "jcJX")).then(m => m.AccountModule),
    },
];


/***/ }),

/***/ "Isfx":
/*!************************************************************!*\
  !*** ./src/app/shared/template/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/theme-constant.service */ "PQ0Y");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/http.service */ "9NvV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/global.service */ "0ZK0");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/switch */ "EGpF");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");














class HeaderComponent {
    constructor(themeService, modal, http, router, global, message) {
        this.themeService = themeService;
        this.modal = modal;
        this.http = http;
        this.router = router;
        this.global = global;
        this.message = message;
        this.searchVisible = false;
        this.quickViewVisible = false;
        this.notificationList = [
            {
                title: 'You received a new message',
                time: '8 min',
                icon: 'mail',
                color: 'ant-avatar-' + 'blue'
            },
            {
                title: 'New user registered',
                time: '7 hours',
                icon: 'user-add',
                color: 'ant-avatar-' + 'cyan'
            },
            {
                title: 'System Alert',
                time: '8 hours',
                icon: 'warning',
                color: 'ant-avatar-' + 'red'
            },
            {
                title: 'You have a new update',
                time: '2 days',
                icon: 'sync',
                color: 'ant-avatar-' + 'gold'
            }
        ];
    }
    ngOnInit() {
        // this._currToggleValue ? localStorage.setItem('globalToggleValue','1') : localStorage.setItem('globalToggleValue','2')
        this._currToggleValue = localStorage.getItem('globalToggleValue') == '2' ? true : false;
        this.globalAccData = localStorage.getItem('global_account_data');
        this._currLang = localStorage.getItem('appLanguage') || 'en';
        this.global.globalAccountData.subscribe((res) => {
            if (res) {
                this.globalAccData = res;
            }
        });
        this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
        this.themeService.isExpandChanges.subscribe(isExpand => this.isExpand = isExpand);
    }
    toggleFold() {
        this.isFolded = !this.isFolded;
        this.themeService.toggleFold(this.isFolded);
    }
    toggleExpand() {
        this.isFolded = false;
        this.isExpand = !this.isExpand;
        this.themeService.toggleExpand(this.isExpand);
        this.themeService.toggleFold(this.isFolded);
    }
    searchToggle() {
        this.searchVisible = !this.searchVisible;
    }
    quickViewToggle() {
        // this.quickViewVisible = !this.quickViewVisible;
        this.modal.confirm({
            nzTitle: 'Are you sure ',
            nzContent: 'You want to logout',
            nzOkText: 'Yes, Logout',
            nzOkType: 'primary',
            nzOkDanger: true,
            nzOnOk: () => this.onClickLogOut(),
            nzCancelText: 'No',
            nzOnCancel: () => this.modal.closeAll()
        });
    }
    onClickLogOut() {
        this.http.logout().subscribe((res) => {
            if (res.success) {
                this.message.success(res.message);
                this.modal.closeAll();
                this.router.navigate(['/authentication/login']);
                localStorage.removeItem("iyc_user_token");
                localStorage.removeItem("iyc_user_data");
                localStorage.removeItem('appLanguage');
                localStorage.removeItem('menuItem');
                localStorage.removeItem('global_account_data');
            }
        });
    }
    switchToggle() {
        this._currToggleValue = !this._currToggleValue;
        if (this._currToggleValue == true) {
            this.router.navigateByUrl("/dashboard/home");
        }
        else {
            this.router.navigateByUrl("/voter");
        }
        !this._currToggleValue ? localStorage.setItem('globalToggleValue', '1') : localStorage.setItem('globalToggleValue', '2');
        setTimeout(() => {
            window.location.reload();
        }, 300);
        console.log('dashboard');
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_1__["ThemeConstantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__["NzModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 27, vars: 4, consts: [[1, "header"], [1, "logo", "logo-dark"], [1, "logo", "logo-white"], ["href", ""], ["src", "assets/images/logo/logo-white.png", "alt", "Logo"], ["src", "assets/images/logo/logo-fold-white.png", "alt", "Logo", 1, "logo-fold"], [1, "nav-wrap"], [1, "nav-left"], [1, "desktop-toggle"], [3, "click"], ["nz-icon", "", "theme", "outline", 3, "nzType"], [1, "mobile-toggle"], [1, "d-flex", "align-items-center"], [1, "nav-right"], [1, "d-lg-flex", "d-none"], [1, "d-flex", "align-items-center", "mr-3"], [1, "mx-3", 3, "ngModel", "ngModelChange"], ["nz-button", "", "nz-tooltip", "", "nzTooltipTitle", "Export", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_11_listener() { return ctx.toggleFold(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_14_listener() { return ctx.toggleExpand(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Voters List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nz-switch", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_Template_nz_switch_ngModelChange_22_listener() { return ctx.switchToggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Social Media ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_25_listener() { return ctx.quickViewToggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isFolded ? "CM" : "Cadre Management", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx.isFolded ? "menu-unfold" : "menu-fold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx.isExpand ? "menu-fold" : "menu-unfold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._currToggleValue);
    } }, directives: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_9__["NzSwitchComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__["NzWaveDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html'
            }]
    }], function () { return [{ type: _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_1__["ThemeConstantService"] }, { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__["NzModalService"] }, { type: src_app_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_service_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] }, { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"] }]; }, null); })();


/***/ }),

/***/ "IyZr":
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/side-nav.directive.ts ***!
  \*********************************************************/
/*! exports provided: SideNavDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavDirective", function() { return SideNavDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SideNavDirective {
    ngAfterViewChecked() {
        $('.side-nav .side-nav-menu:not(.ant-menu-inline-collapsed) li a').click(function (event) {
            if ($(this).parent().hasClass("ant-menu-submenu-open")) {
                $(this).parent().children('.dropdown-menu').slideUp(200, function () {
                    $(this).parent().removeClass("ant-menu-submenu-open");
                });
            }
            else {
                $(this).parent().parent().children('li.ant-menu-submenu-open').children('.dropdown-menu').slideUp(100);
                $(this).parent().parent().children('li.ant-menu-submenu-open').children('a').removeClass('ant-menu-submenu-open');
                $(this).parent().parent().children('li.ant-menu-submenu-open').removeClass("ant-menu-submenu-open");
                $(this).parent().children('.dropdown-menu').slideDown(100, function () {
                    $(this).parent().addClass("ant-menu-submenu-open");
                });
            }
        });
    }
}
SideNavDirective.ɵfac = function SideNavDirective_Factory(t) { return new (t || SideNavDirective)(); };
SideNavDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SideNavDirective, selectors: [["", "sideNav", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[sideNav]'
            }]
    }], null, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/theme-constant.service */ "PQ0Y");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/search.pipe */ "WfBE");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-permissions */ "qSrz");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");














// import { DeviceDetectorService } from 'ngx-device-detector';
class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
        _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_8__["ThemeConstantService"]
    ], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
            ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__["NzToolTipModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
            ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__["NzModalModule"],
            // DeviceDetectorService,
            // DeviceDetectorService.forRoot()
            ngx_permissions__WEBPACK_IMPORTED_MODULE_10__["NgxPermissionsModule"].forChild(),
        ], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientJsonpModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchPipe"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__["NzToolTipModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__["NzModalModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_10__["NgxPermissionsModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientJsonpModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
        _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientJsonpModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
                    _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchPipe"],
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
                    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__["NzToolTipModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
                    ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__["NzModalModule"],
                    // DeviceDetectorService,
                    // DeviceDetectorService.forRoot()
                    ngx_permissions__WEBPACK_IMPORTED_MODULE_10__["NgxPermissionsModule"].forChild(),
                ],
                declarations: [
                    _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchPipe"]
                ],
                providers: [
                    _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_8__["ThemeConstantService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "PQ0Y":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/theme-constant.service.ts ***!
  \***********************************************************/
/*! exports provided: ThemeConstantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConstantService", function() { return ThemeConstantService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ThemeConstantService {
    constructor() {
        // Theme Config
        this.isMenuFolded = false;
        this.isSideNavDark = false;
        this.headerColor = 'default';
        this.colorConfig = {
            colors: {
                magenta: '#eb2f96',
                magentaLight: 'rgba(235, 47, 150, 0.05)',
                red: '#de4436',
                redLight: 'rgba(222, 68, 54, 0.05)',
                volcano: '#fa541c',
                volcanoLight: 'rgba(250, 84, 28, 0.05)',
                orange: '#fa8c16',
                orangeLight: 'rgba(250, 140, 22, 0.1)',
                gold: '#ffc107',
                goldLight: 'rgba(255, 193, 7, 0.1)',
                lime: '#a0d911',
                limeLight: 'rgba(160, 217, 17, 0.1)',
                green: '#52c41a',
                greenLight: 'rgba(82, 196, 26, 0.1)',
                cyan: "#05c9a7",
                cyanLight: 'rgba(0, 201, 167, 0.1)',
                blue: '#3f87f5',
                blueLight: 'rgba(63, 135, 245, 0.15)',
                geekBlue: '#2f54eb',
                geekBlueLight: 'rgba(47, 84, 235, 0.1)',
                purple: '#886cff',
                purpleLight: 'rgba(136, 108, 255, 0.1)',
                gray: '#53535f',
                grayLight: '#77838f',
                grayLighter: '#ededed',
                grayLightest: '#f1f2f3',
                border: '#edf2f9',
                white: '#ffffff',
                dark: '#2a2a2a',
                transparent: 'rgba(255, 255, 255, 0)'
            }
        };
        this.isMenuFoldedActived = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.isMenuFolded);
        this.isMenuFoldedChanges = this.isMenuFoldedActived.asObservable();
        this.isSideNavDarkActived = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.isSideNavDark);
        this.isSideNavDarkChanges = this.isSideNavDarkActived.asObservable();
        this.isExpandActived = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isExpandChanges = this.isExpandActived.asObservable();
        this.currentHeaderColor = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.headerColor);
        this.selectedHeaderColor = this.currentHeaderColor.asObservable();
    }
    get() {
        return this.colorConfig;
    }
    toggleFold(isFolded) {
        this.isMenuFoldedActived.next(isFolded);
    }
    toogleSideNavDark(isDark) {
        this.isSideNavDarkActived.next(isDark);
    }
    toggleExpand(isExpand) {
        this.isExpandActived.next(isExpand);
    }
    changeHeaderColor(color) {
        this.currentHeaderColor.next(color);
    }
}
ThemeConstantService.ɵfac = function ThemeConstantService_Factory(t) { return new (t || ThemeConstantService)(); };
ThemeConstantService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeConstantService, factory: ThemeConstantService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeConstantService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "S9YW":
/*!***********************************************!*\
  !*** ./src/app/service/custom.interceptor.ts ***!
  \***********************************************/
/*! exports provided: CustomInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomInterceptor", function() { return CustomInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/http.service */ "9NvV");










class CustomInterceptor {
    constructor(message, router, httpService) {
        this.message = message;
        this.router = router;
        this.httpService = httpService;
        this.token = '';
        this.pendingHTTPRequests$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivationStart"]) {
                // Cancel pending calls
                this.cancelPendingRequests();
            }
        });
    }
    intercept(req, next) {
        let check_status;
        this.httpService.createOnline$().subscribe((isOnline) => {
            check_status = isOnline;
        });
        if (check_status) {
            if (!(req.url.includes("users/auth/send-otp") || req.url.includes("stockist/client-auth/verify-otp"))) {
                this.token = localStorage.getItem('iyc_user_token');
                if (this.token) {
                    req = req.clone({
                        setHeaders: {
                            Authorization: `Token ${this.token}`
                        }
                    });
                }
            }
            return next.handle(req)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.onCancelPendingRequests()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((event) => {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                    if (event.body.success == false) {
                        this.message.error(event.body.message);
                    }
                }
                return event;
            }), 
            // Handle errors
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
                if (error.status == 400) {
                    this.message.error(error.error.errors ? error.error.errors : error.error.message);
                }
                else if (error.status == 403) {
                    this.message.error("You don't have permission to access this");
                }
                else if (error.status == 401) {
                    // this.router.navigate(['/authentication/login']);
                    // if(JSON.parse(localStorage.getItem('biomech_user_data')).user_type.name == 'Stockists'){
                    this.router.navigate(['/authentication/login']);
                    // } else{
                    //   this.router.navigate(['/authentication/employee-login']);
                    // }
                    this.message.error("Authorization failed, kindly login again");
                }
                else {
                    this.message.error('Something Went Wrong');
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
            }));
        }
        else {
            this.message.error('Kindly check your network');
        }
    }
    // Cancel Pending HTTP calls
    cancelPendingRequests() {
        this.pendingHTTPRequests$.next();
    }
    onCancelPendingRequests() {
        return this.pendingHTTPRequests$.asObservable();
    }
}
CustomInterceptor.ɵfac = function CustomInterceptor_Factory(t) { return new (t || CustomInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"])); };
CustomInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CustomInterceptor, factory: CustomInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/http.service */ "9NvV");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-permissions */ "qSrz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(HttpService, permissionsService) {
        this.HttpService = HttpService;
        this.permissionsService = permissionsService;
        if (localStorage.getItem('iyc_user_data')) {
            var permissions = JSON.parse(localStorage.getItem('iyc_user_data')).permissions;
            // console.log(permissions);
            if (permissions) {
                permissions.push('');
                this.permissionsService.loadPermissions(permissions);
            }
        }
        // console.log(this.permissionsService);
        // console.log(permissions);
        this.UserPermissionDataSubscription = this.HttpService.globalUserPermissionsData.subscribe((value) => {
            // value.push('')
            this.permissionsService.loadPermissions(value);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html'
            }]
    }], function () { return [{ type: _service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsService"] }]; }, null); })();


/***/ }),

/***/ "Ueqm":
/*!**************************************************************!*\
  !*** ./src/app/layouts/full-layout/full-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: FullLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutComponent", function() { return FullLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class FullLayoutComponent {
    constructor() { }
}
FullLayoutComponent.ɵfac = function FullLayoutComponent_Factory(t) { return new (t || FullLayoutComponent)(); };
FullLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FullLayoutComponent, selectors: [["app-full-layout"]], decls: 1, vars: 0, template: function FullLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-full-layout',
                templateUrl: './full-layout.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "UlaD":
/*!************************************************************!*\
  !*** ./src/app/shared/template/search/search.component.ts ***!
  \************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/search.pipe */ "WfBE");









function SearchComponent_ng_container_3_h5_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchComponent_ng_container_3_h5_1_Template, 2, 0, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-avatar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const count_r6 = ctx.ngForOf;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r7 < 1 && count_r6.length !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzIcon", item_r5.icon)("ngClass", item_r5.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.desc);
} }
function SearchComponent_ng_container_6_h5_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Members");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchComponent_ng_container_6_h5_1_Template, 2, 0, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-avatar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const count_r10 = ctx.ngForOf;
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r11 < 1 && count_r10.length !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSrc", item_r9.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.desc);
} }
function SearchComponent_ng_container_9_h5_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "News");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchComponent_ng_container_9_h5_1_Template, 2, 0, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-avatar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const count_r14 = ctx.ngForOf;
    const i_r15 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r15 < 1 && count_r14.length !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSrc", item_r13.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.desc);
} }
function SearchComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 17);
} }
class SearchComponent {
    constructor() {
        this.files = [
            {
                title: 'Quater Report.exl',
                desc: 'by Finance',
                icon: 'file-excel',
                color: 'ant-avatar-' + 'cyan'
            },
            {
                title: 'Documentaion.docx',
                desc: 'by Developers',
                icon: 'file-word',
                color: 'ant-avatar-' + 'blue'
            },
            {
                title: 'Recipe.txt',
                desc: 'by The Chef',
                icon: 'file-text',
                color: 'ant-avatar-' + 'purple'
            },
            {
                title: 'Project Requirement.pdf',
                desc: 'by Project Manager',
                icon: 'file-pdf',
                color: 'ant-avatar-' + 'red'
            }
        ];
        this.members = [
            {
                title: 'Erin Gonzales',
                desc: 'UI/UX Designer',
                img: 'assets/images/avatars/thumb-1.jpg',
            },
            {
                title: 'Darryl Day',
                desc: 'Software Engineer',
                img: 'assets/images/avatars/thumb-2.jpg',
            },
            {
                title: 'Marshall Nichols ',
                desc: 'Data Analyst',
                img: 'assets/images/avatars/thumb-3.jpg',
            }
        ];
        this.feeds = [
            {
                title: '5 Best Handwriting Fonts',
                desc: '25 Nov 2018',
                img: 'assets/images/others/img-1.jpg',
            }
        ];
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 13, vars: 17, consts: [[3, "nzPrefix"], ["type", "text", "nz-input", "", "placeholder", "Search", 3, "ngModel", "ngModelChange"], [1, "m-t-30"], [4, "ngFor", "ngForOf"], ["class", "d-flex m-b-30", 4, "ngFor", "ngForOf"], ["prefixTemplate", ""], ["class", "m-b-20", 4, "ngIf"], [1, "d-flex", "m-b-30"], [3, "nzIcon", "ngClass"], [1, "m-l-15"], [1, "text-dark", "m-b-0", "font-weight-semibold"], [1, "m-b-0", "text-muted", "font-size-13"], [1, "m-b-20"], [3, "nzSrc"], [1, "m-b-0", "text-dark", "font-weight-semibold"], ["nz-icon", "", "nzType", "clock-circle", "theme", "outline"], [1, "m-l-10"], ["nz-icon", "", "nzType", "search"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-input-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_1_listener($event) { return ctx.search = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchComponent_ng_container_3_Template, 9, 5, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SearchComponent_ng_container_6_Template, 9, 4, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SearchComponent_ng_container_9_Template, 11, 4, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SearchComponent_ng_template_11_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPrefix", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 5, ctx.files, "title", ctx.search));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](7, 9, ctx.members, "title", ctx.search));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 13, ctx.feeds, "title", ctx.search));
    } }, directives: [ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__["NzInputGroupComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__["NzInputGroupWhitSuffixOrPrefixDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_5__["NzAvatarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"]], pipes: [_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_7__["SearchPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "Wdt6":
/*!******************************************************************!*\
  !*** ./src/app/layouts/common-layout/common-layout.component.ts ***!
  \******************************************************************/
/*! exports provided: CommonLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonLayoutComponent", function() { return CommonLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/theme-constant.service */ "PQ0Y");
/* harmony import */ var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/global.service */ "0ZK0");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/http.service */ "9NvV");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-permissions */ "qSrz");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-device-detector */ "9YtQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_template_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/template/header/header.component */ "Isfx");
/* harmony import */ var _shared_template_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/template/side-nav/side-nav.component */ "jnn0");
/* harmony import */ var _shared_template_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/template/footer/footer.component */ "okld");
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ "yNE/");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");

















function CommonLayoutComponent_div_4_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 15);
} }
function CommonLayoutComponent_div_4_div_1_h5_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.showBreadCrumb);
} }
function CommonLayoutComponent_div_4_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommonLayoutComponent_div_4_div_1_nz_breadcrumb_item_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-breadcrumb-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadcrumb_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", breadcrumb_r9.url)("queryParams", breadcrumb_r9.params);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", breadcrumb_r9.label, " ");
} }
function CommonLayoutComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CommonLayoutComponent_div_4_div_1_span_2_Template, 1, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CommonLayoutComponent_div_4_div_1_h5_3_Template, 2, 1, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-breadcrumb");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CommonLayoutComponent_div_4_div_1_span_6_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CommonLayoutComponent_div_4_div_1_nz_breadcrumb_item_7_Template, 3, 3, "nz-breadcrumb-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1._currHeaderData == null ? null : ctx_r1._currHeaderData.home == null ? null : ctx_r1._currHeaderData.home.isVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx_r1.breadcrumbs$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isSlash);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, ctx_r1.breadcrumbs$));
} }
function CommonLayoutComponent_div_4_div_2_h4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadcrumbs_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", breadcrumbs_r11[breadcrumbs_r11.length - 1].label, "");
} }
function CommonLayoutComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommonLayoutComponent_div_4_div_2_h4_1_Template, 2, 1, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r2.breadcrumbs$));
} }
function CommonLayoutComponent_div_4_h4_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadcrumbs_r12 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.showBreadCrumb ? "mt-4" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumbs_r12[breadcrumbs_r12.length - 1] == null ? null : breadcrumbs_r12[breadcrumbs_r12.length - 1].label);
} }
function CommonLayoutComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommonLayoutComponent_div_4_div_1_Template, 9, 8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CommonLayoutComponent_div_4_div_2_Template, 3, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CommonLayoutComponent_div_4_h4_3_Template, 2, 2, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !ctx_r0.showBreadCrumb ? "d-flex align-items-center" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showBreadCrumb);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.router.url.includes("dashboard"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx_r0.breadcrumbs$));
} }
const _c0 = function (a0, a1, a2) { return { "is-folded": a0, "is-side-nav-dark": a1, "is-expand": a2 }; };
class CommonLayoutComponent {
    constructor(router, activatedRoute, themeService, globaldata, message, http, permissionsService, device) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.themeService = themeService;
        this.globaldata = globaldata;
        this.message = message;
        this.http = http;
        this.permissionsService = permissionsService;
        this.device = device;
        this.isSlash = false;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
            let child = this.activatedRoute.firstChild;
            while (child) {
                if (child.firstChild) {
                    child = child.firstChild;
                }
                else if (child.snapshot.data && child.snapshot.data['headerDisplay']) {
                    return child.snapshot.data['headerDisplay'];
                }
                else {
                    return null;
                }
            }
            return null;
        })).subscribe((data) => {
            this.contentHeaderDisplay = data;
        });
    }
    ngOnInit() {
        // console.log("This device id=>", this.device.getDeviceInfo(), this.device.device); 
        // alert(JSON.stringify(this.device.getDeviceInfo()))
        if (localStorage.getItem('iyc_user_token')) {
            this.VerifyUserFunction();
        }
        else {
            this.message.error('Authentication Data not Found, kindly login again');
            this.router.navigate(['/authentication/login']);
        }
        // alert('Common Layout working');
        this.breadcrumbs$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(new _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"](0, '/', '/')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => this.buildBreadCrumb(this.activatedRoute.root)));
        this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
        this.themeService.isSideNavDarkChanges.subscribe(isDark => this.isSideNavDark = isDark);
        this.themeService.selectedHeaderColor.subscribe(color => this.selectedHeaderColor = color);
        this.themeService.isExpandChanges.subscribe(isExpand => this.isExpand = isExpand);
    }
    buildBreadCrumb(route, url = '', breadcrumbs = []) {
        let label = '', path = '/', display = null, title, params = '';
        if (route.routeConfig) {
            if (route.routeConfig.data) {
                // console.log(route.routeConfig.path)
                label = route.routeConfig.data['title'];
                if (route.routeConfig.data['custom_url']) {
                    path += route.routeConfig.data['custom_url'];
                }
                else {
                    path += route.routeConfig.path;
                }
                if (route.routeConfig.data['params']) {
                    params = route.routeConfig.data['params'];
                }
                if (route.routeConfig.data['parent'] && route.routeConfig.data['title']) {
                    this.isSlash = true;
                }
                else if (route.routeConfig.data['parent'] && !route.routeConfig.data['title']) {
                    this.isSlash = false;
                }
                this.showBreadCrumb = route.routeConfig.data['parent'];
                this._currHeaderData = route.routeConfig.data;
            }
        }
        const nextUrl = path && path !== '/select-language' ? `${url}${path}` : url;
        const breadcrumb = {
            label: label, url: nextUrl, title: title
        };
        const newBreadcrumbs = label ? [...breadcrumbs, breadcrumb] : [...breadcrumbs];
        if (route.firstChild) {
            return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
        }
        return newBreadcrumbs;
    }
    VerifyUserFunction() {
        // var end_point = JSON.parse(localStorage.getItem('biomech_user_data')).user_type.name == 'Stockists' ? 'stockist/client-auth/verify-user' : 'employee/employee-auth/verify-user'
        var end_point = '/users/v1/auth/verify-user';
        var device_type = this.globaldata.checkBrowserType();
        let data = new FormData();
        this.http.verifyUserAPI(end_point).subscribe((res) => {
            if (res.success) {
                this.globaldata.sendUserData(res.data);
                // Get GlobalAccount Data
                this.getGlobalAccData();
                localStorage.setItem("iyc_user_data", JSON.stringify(res));
                if (localStorage.getItem('iyc_user_data')) {
                    var permissions = JSON.parse(localStorage.getItem('iyc_user_data')).permissions;
                    permissions.push('');
                    this.permissionsService.loadPermissions(permissions);
                }
                this.UserPermissionDataSubscription = this.http.globalUserPermissionsData.subscribe((value) => {
                    this.permissionsService.loadPermissions(value);
                });
            }
            else {
                this.router.navigate(['/authentication/employee-login']);
                localStorage.removeItem('iyc_user_token');
                localStorage.removeItem('iyc_user_data');
                localStorage.removeItem('appLanguage');
            }
        }, (err) => {
            this.router.navigate(['/authentication/login']);
            localStorage.removeItem('iyc_user_token');
            localStorage.removeItem('iyc_user_data');
            localStorage.removeItem('menuItem');
        });
    }
    getGlobalAccData() {
        let data = {};
        this.http.getGlobalAdminData(data).subscribe((res) => {
            if (res.success) {
                this._currLang = localStorage.getItem('appLanguage');
                this.globalAccData = res.data;
                this.globaldata.sendGlobalAccountData(res.data);
                localStorage.setItem('global_account_data', JSON.stringify(res.data));
            }
        });
    }
}
CommonLayoutComponent.ɵfac = function CommonLayoutComponent_Factory(t) { return new (t || CommonLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_3__["ThemeConstantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_8__["DeviceDetectorService"])); };
CommonLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommonLayoutComponent, selectors: [["app-common-layout"]], decls: 8, vars: 10, consts: [[3, "ngClass"], [1, "d-md-block", "d-none"], [1, "page-container", "pt-3", "pt-5"], ["class", "bg-white main-content h-unset pt-5 pb-3", 3, "ngClass", 4, "ngIf"], [1, "main-content", "p-3", "py-5", 3, "ngClass"], [1, "d-md-none", "d-flex"], [1, "bg-white", "main-content", "h-unset", "pt-5", "pb-3", 3, "ngClass"], ["class", "main-content-header d-flex justify-content-between mb-0 py-2 flex-wrap", 4, "ngIf"], [4, "ngIf"], ["class", "font-weight-semibold d-none", 3, "ngClass", 4, "ngIf"], [1, "main-content-header", "d-flex", "justify-content-between", "mb-0", "py-2", "flex-wrap"], [1, "d-flex", "flex-wrap", "align-items-center"], ["class", "font-size-16 font-weight-semibold mx-3", "routerLink", "/dashboard/home", "nz-icon", "", "nzType", "home", "nzTheme", "fill", 4, "ngIf"], ["class", "page-title mr-2 mb-0", 4, "ngIf"], ["class", "pl-2", 4, "ngFor", "ngForOf"], ["routerLink", "/dashboard/home", "nz-icon", "", "nzType", "home", "nzTheme", "fill", 1, "font-size-16", "font-weight-semibold", "mx-3"], [1, "page-title", "mr-2", "mb-0"], [1, "pl-2"], [3, "routerLink", "queryParams"], ["class", "font-weight-semibold", 4, "ngIf"], [1, "font-weight-semibold"], [1, "font-weight-semibold", "d-none", 3, "ngClass"]], template: function CommonLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CommonLayoutComponent_div_4_Template, 5, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("common-layout ", "is-" + ctx.selectedHeaderColor, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c0, ctx.isFolded, ctx.isSideNavDark, ctx.isExpand));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contentHeaderDisplay !== "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.contentHeaderDisplay !== "none" ? "pt-5" : "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _shared_template_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _shared_template_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_11__["SideNavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_template_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_13__["NzBreadCrumbComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__["NzIconDirective"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_13__["NzBreadCrumbItemComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-common-layout',
                templateUrl: './common-layout.component.html',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_3__["ThemeConstantService"] }, { type: src_app_service_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }, { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] }, { type: src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] }, { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsService"] }, { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_8__["DeviceDetectorService"] }]; }, null); })();


/***/ }),

/***/ "WfBE":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/search.pipe.ts ***!
  \*********************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SearchPipe {
    transform(value, keys, term) {
        if (!term)
            return value;
        return (value || []).filter((item) => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
    }
}
SearchPipe.ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(); };
SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "search", type: SearchPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'search'
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ "yNE/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/en */ "tAZD");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _shared_template_template_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/template/template.module */ "u6u5");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/common-layout/common-layout.component */ "Wdt6");
/* harmony import */ var _layouts_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/full-layout/full-layout.component */ "Ueqm");
/* harmony import */ var ng_chartjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-chartjs */ "jdj2");
/* harmony import */ var _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/services/theme-constant.service */ "PQ0Y");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _service_custom_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/custom.interceptor */ "S9YW");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-permissions */ "qSrz");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/environments/environment */ "AytR");
















// import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';










// import { NgxGoogleMapModule } from 'ngx-google-map';
Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__["NZ_I18N"],
            useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__["en_US"],
        },
        {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["PathLocationStrategy"]
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HTTP_INTERCEPTORS"],
            useClass: _service_custom_interceptor__WEBPACK_IMPORTED_MODULE_17__["CustomInterceptor"],
            multi: true
        },
        // {
        //     provide: DeviceDetectorService,
        //     useClass: UniversalDeviceDetectorService
        // },
        _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_14__["ThemeConstantService"], ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__["NzMessageService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["NzBreadCrumbModule"],
            _shared_template_template_module__WEBPACK_IMPORTED_MODULE_8__["TemplateModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__["NzMessageModule"],
            ng_chartjs__WEBPACK_IMPORTED_MODULE_13__["NgChartjsModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_19__["AgmCoreModule"].forRoot({
                apiKey: '',
                libraries: ['drawing']
            }),
            // NgxGoogleMapModule,
            // NgxGoogleMapsModule,
            // NgxGoogleMapsModule.forRoot({
            //     key: '', // your Google API key retrieved from the Google Developer Console
            //     language: 'en', // see https://developers.google.com/maps/documentation/javascript/localization
            //     libraries: 'geometry', // see https://developers.google.com/maps/documentation/javascript/libraries
            //     loadScript: true, // whether or not the <script> tag of the Google Maps API should be loaded
            //     options: { panControl: true, panControlOptions: { position: 9 } }, // see https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapOptions
            //     region: 'US', // see https://developers.google.com/maps/documentation/javascript/localization#Region
            //   }),
            ngx_permissions__WEBPACK_IMPORTED_MODULE_18__["NgxPermissionsModule"].forRoot(),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: src_environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].production,
                // Register the ServiceWorker as soon as the application is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
        _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_11__["CommonLayoutComponent"],
        _layouts_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_12__["FullLayoutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["NzBreadCrumbModule"],
        _shared_template_template_module__WEBPACK_IMPORTED_MODULE_8__["TemplateModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__["NzMessageModule"],
        ng_chartjs__WEBPACK_IMPORTED_MODULE_13__["NgChartjsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_19__["AgmCoreModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_18__["NgxPermissionsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["ServiceWorkerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                    _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_11__["CommonLayoutComponent"],
                    _layouts_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_12__["FullLayoutComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["NzBreadCrumbModule"],
                    _shared_template_template_module__WEBPACK_IMPORTED_MODULE_8__["TemplateModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                    ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__["NzMessageModule"],
                    ng_chartjs__WEBPACK_IMPORTED_MODULE_13__["NgChartjsModule"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_19__["AgmCoreModule"].forRoot({
                        apiKey: '',
                        libraries: ['drawing']
                    }),
                    // NgxGoogleMapModule,
                    // NgxGoogleMapsModule,
                    // NgxGoogleMapsModule.forRoot({
                    //     key: '', // your Google API key retrieved from the Google Developer Console
                    //     language: 'en', // see https://developers.google.com/maps/documentation/javascript/localization
                    //     libraries: 'geometry', // see https://developers.google.com/maps/documentation/javascript/libraries
                    //     loadScript: true, // whether or not the <script> tag of the Google Maps API should be loaded
                    //     options: { panControl: true, panControlOptions: { position: 9 } }, // see https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapOptions
                    //     region: 'US', // see https://developers.google.com/maps/documentation/javascript/localization#Region
                    //   }),
                    ngx_permissions__WEBPACK_IMPORTED_MODULE_18__["NgxPermissionsModule"].forRoot(),
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["ServiceWorkerModule"].register('ngsw-worker.js', {
                        enabled: src_environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].production,
                        // Register the ServiceWorker as soon as the application is stable
                        // or after 30 seconds (whichever comes first).
                        registrationStrategy: 'registerWhenStable:30000'
                    }),
                ],
                exports: [
                // ProfileImgPipePipe
                ],
                providers: [
                    {
                        provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__["NZ_I18N"],
                        useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__["en_US"],
                    },
                    {
                        provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"],
                        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["PathLocationStrategy"]
                    },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HTTP_INTERCEPTORS"],
                        useClass: _service_custom_interceptor__WEBPACK_IMPORTED_MODULE_17__["CustomInterceptor"],
                        multi: true
                    },
                    // {
                    //     provide: DeviceDetectorService,
                    //     useClass: UniversalDeviceDetectorService
                    // },
                    _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_14__["ThemeConstantService"], ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__["NzMessageService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "jnn0":
/*!****************************************************************!*\
  !*** ./src/app/shared/template/side-nav/side-nav.component.ts ***!
  \****************************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _side_nav_routes_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-nav-routes.config */ "ztfw");
/* harmony import */ var _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/theme-constant.service */ "PQ0Y");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/side-nav.directive */ "IyZr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-permissions */ "qSrz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");











function SideNavComponent_ng_container_2_li_1_a_1_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", item_r1.icon)("theme", item_r1.iconTheme);
} }
const _c0 = function (a0, a1) { return [a0, a1]; };
function SideNavComponent_ng_container_2_li_1_a_1_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, item_r1.iconTheme, item_r1.icon));
} }
function SideNavComponent_ng_container_2_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_a_1_i_1_Template, 1, 2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_li_1_a_1_i_2_Template, 1, 4, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.iconType == "nzIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.iconType == "fontawesome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
} }
function SideNavComponent_ng_container_2_li_1_a_2_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", item_r1.icon)("theme", item_r1.iconTheme);
} }
function SideNavComponent_ng_container_2_li_1_a_2_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, item_r1.iconTheme, item_r1.icon));
} }
function SideNavComponent_ng_container_2_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_ng_container_2_li_1_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r15.closeMobileMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_a_2_i_1_Template, 1, 2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_li_1_a_2_i_2_Template, 1, 4, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.iconType == "nzIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.iconType == "fontawesome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
} }
function SideNavComponent_ng_container_2_li_1_ul_3_li_1_a_1_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
} if (rf & 2) {
    const subItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", subItem_r19.icon)("theme", subItem_r19.iconTheme);
} }
function SideNavComponent_ng_container_2_li_1_ul_3_li_1_a_1_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
} if (rf & 2) {
    const subItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, subItem_r19.iconTheme, subItem_r19.icon));
} }
function SideNavComponent_ng_container_2_li_1_ul_3_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_li_1_a_1_i_1_Template, 1, 2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_li_1_ul_3_li_1_a_1_i_2_Template, 1, 4, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r19.iconType == "nzIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r19.iconType == "fontawesome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subItem_r19.title);
} }
function SideNavComponent_ng_container_2_li_1_ul_3_li_1_a_2_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
} if (rf & 2) {
    const subItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", subItem_r19.icon)("theme", subItem_r19.iconTheme);
} }
function SideNavComponent_ng_container_2_li_1_ul_3_li_1_a_2_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
} if (rf & 2) {
    const subItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, subItem_r19.iconTheme, subItem_r19.icon));
} }
function SideNavComponent_ng_container_2_li_1_ul_3_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_ng_container_2_li_1_ul_3_li_1_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r32.closeMobileMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_li_1_a_2_i_1_Template, 1, 2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_li_1_ul_3_li_1_a_2_i_2_Template, 1, 4, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", subItem_r19.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r19.iconType == "nzIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r19.iconType == "fontawesome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subItem_r19.title);
} }
function SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_li_1_a_1_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
} if (rf & 2) {
    const subItem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", subItem_r36.icon)("theme", subItem_r36.iconTheme);
} }
function SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_li_1_a_1_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
} if (rf & 2) {
    const subItem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, subItem_r36.iconTheme, subItem_r36.icon));
} }
function SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_li_1_a_1_i_1_Template, 1, 2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_li_1_a_1_i_2_Template, 1, 4, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subItem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r36.iconType == "nzIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r36.iconType == "fontawesome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subItem_r36.title);
} }
function SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_li_1_a_2_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
} if (rf & 2) {
    const subItem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", subItem_r36.icon)("theme", subItem_r36.iconTheme);
} }
function SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_li_1_a_2_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
} if (rf & 2) {
    const subItem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, subItem_r36.iconTheme, subItem_r36.icon));
} }
function SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_li_1_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7); return ctx_r48.closeMobileMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_li_1_a_2_i_1_Template, 1, 2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_li_1_a_2_i_2_Template, 1, 4, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subItem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", subItem_r36.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r36.iconType == "nzIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r36.iconType == "fontawesome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subItem_r36.title);
} }
const _c1 = function () { return { exact: true }; };
function SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_li_1_a_1_Template, 6, 3, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_li_1_a_2_Template, 5, 4, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subItem_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", subItem_r36.submenu.length > 0 ? "ant-menu-submenu ant-menu-submenu-inline" : "ant-menu-item")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r36.submenu.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r36.submenu.length === 0);
} }
function SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_li_1_Template, 3, 5, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", subItem_r19.submenu);
} }
const _c2 = function () { return { exact: false }; };
function SideNavComponent_ng_container_2_li_1_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_li_1_a_1_Template, 6, 3, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_li_1_ul_3_li_1_a_2_Template, 5, 4, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_Template, 2, 1, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subItem_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", subItem_r19.submenu.length > 0 ? "ant-menu-submenu ant-menu-submenu-inline" : "ant-menu-item")("routerLinkActive", subItem_r19.submenu.length > 0 ? "ant-menu-submenu-open" : "ant-menu-item-selected")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r19.submenu.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r19.submenu.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r19.submenu.length > 0);
} }
function SideNavComponent_ng_container_2_li_1_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_li_1_Template, 4, 7, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.submenu);
} }
function SideNavComponent_ng_container_2_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_a_1_Template, 6, 3, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_li_1_a_2_Template, 5, 4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SideNavComponent_ng_container_2_li_1_ul_3_Template, 2, 1, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r1.submenu.length > 0 ? "ant-menu-submenu ant-menu-submenu-inline" : "ant-menu-item")("routerLinkActive", item_r1.submenu.length > 0 ? "ant-menu-submenu-open" : "ant-menu-item-selected")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.submenu.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.submenu.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.submenu.length > 0);
} }
const _c3 = function (a0) { return [a0]; };
function SideNavComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_Template, 4, 7, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c3, item_r1 == null ? null : item_r1.permission));
} }
const _c4 = function (a0, a1) { return { "ant-menu-inline-collapsed": a0, "ant-menu-dark": a1 }; };
class SideNavComponent {
    constructor(themeService) {
        this.themeService = themeService;
    }
    ngOnInit() {
        this.menuItems = _side_nav_routes_config__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(menuItem => menuItem);
        this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
        this.themeService.isExpandChanges.subscribe(isExpand => this.isExpand = isExpand);
        this.themeService.isSideNavDarkChanges.subscribe(isDark => this.isSideNavDark = isDark);
        // console.log(this.menuItems);
    }
    closeMobileMenu() {
        if (window.innerWidth < 992) {
            this.isFolded = false;
            this.isExpand = !this.isExpand;
            this.themeService.toggleExpand(this.isExpand);
            this.themeService.toggleFold(this.isFolded);
        }
    }
}
SideNavComponent.ɵfac = function SideNavComponent_Factory(t) { return new (t || SideNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_2__["ThemeConstantService"])); };
SideNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideNavComponent, selectors: [["app-sidenav"]], decls: 3, vars: 5, consts: [["sideNav", "", 1, "side-nav"], [1, "ant-menu", "ant-menu-root", "ant-menu-inline", "side-nav-menu", 3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngxPermissionsOnly"], [3, "ngClass", "routerLinkActive", "routerLinkActiveOptions"], ["href", "javascript:void(0);", "class", "ant-menu-submenu-title", 4, "ngIf"], [3, "routerLink", "click", 4, "ngIf"], ["class", "ant-menu ant-menu-inline ant-menu-sub dropdown-menu", 4, "ngIf"], ["href", "javascript:void(0);", 1, "ant-menu-submenu-title"], ["nz-icon", "", 3, "nzType", "theme", 4, "ngIf"], ["class", "m-r-10", 3, "ngClass", 4, "ngIf"], [1, "ant-menu-submenu-arrow"], ["nz-icon", "", 3, "nzType", "theme"], [1, "m-r-10", 3, "ngClass"], [3, "routerLink", "click"], [1, "ant-menu", "ant-menu-inline", "ant-menu-sub", "dropdown-menu"], [3, "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0);", "class", "ant-menu-submenu-title p-l-50", 4, "ngIf"], ["class", "p-l-30", 3, "routerLink", "click", 4, "ngIf"], ["href", "javascript:void(0);", 1, "ant-menu-submenu-title", "p-l-50"], [1, "p-l-30", 3, "routerLink", "click"], ["routerLinkActive", "ant-menu-item-selected", 3, "ngClass", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], ["routerLinkActive", "ant-menu-item-selected", 3, "ngClass", "routerLinkActiveOptions"], ["class", "p-l-50", 3, "routerLink", "click", 4, "ngIf"], [1, "p-l-50", 3, "routerLink", "click"]], template: function SideNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perfect-scrollbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_Template, 2, 3, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c4, ctx.isFolded, ctx.isSideNavDark));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarComponent"], _directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_4__["SideNavDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxPermissionsDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidenav',
                templateUrl: './side-nav.component.html'
            }]
    }], function () { return [{ type: _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_2__["ThemeConstantService"] }]; }, null); })();


/***/ }),

/***/ "okld":
/*!************************************************************!*\
  !*** ./src/app/shared/template/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/global.service */ "0ZK0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/radio */ "bE2y");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");








class FooterComponent {
    // about-party, home    (Voters)
    constructor(global, router) {
        this.global = global;
        this.router = router;
    }
    ngOnInit() {
        console.log('res');
        this.radioValue = localStorage.getItem('menuItem') ? localStorage.getItem('menuItem') : 'voter';
        // this.global.globalNavValue.subscribe(res=>{
        //     console.log(res);
        //     if(res){
        //         this.radioValue = res;
        //     }else{
        //         this.global.setCurrNavValue('home') 
        //     }
        // })
    }
    changeAppNav() {
        // this.radioValue = event
        console.log(this.radioValue);
        // this.global.setCurrNavValue(this.radioValue)
        localStorage.setItem('menuItem', this.radioValue);
        this.router.navigateByUrl("/" + this.radioValue);
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 23, vars: 5, consts: [[1, "footer"], [1, "footer-content", "justify-content-between", "w-100"], [1, "d-flex", "justify-content-between", "w-100", 3, "ngModel", "ngModelChange"], ["nz-radio-button", "", 2, "border", "0", 3, "nzValue"], [1, "d-flex", "flex-column", 2, "font", "small-caption"], ["nz-icon", "", "nzType", "audit", "nzTheme", "outline", 1, "font-size-22"], [1, "font-size-12", "mt-2"], ["nz-icon", "", "nzType", "schedule", "nzTheme", "outline", 1, "font-size-22"], ["nz-icon", "", "nzType", "reconciliation", "nzTheme", "outline", 1, "font-size-22"], ["nz-icon", "", "nzType", "more", "nzTheme", "outline", 1, "font-size-22"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-radio-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FooterComponent_Template_nz_radio_group_ngModelChange_2_listener($event) { return ctx.radioValue = $event; })("ngModelChange", function FooterComponent_Template_nz_radio_group_ngModelChange_2_listener() { return ctx.changeAppNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Voters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", "voter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", "task-management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", "reconciliation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", "profile");
    } }, directives: [ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_3__["NzRadioGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_3__["NzRadioComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_3__["NzRadioButtonDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html'
            }]
    }], function () { return [{ type: src_app_service_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "puSG":
/*!*****************************************************!*\
  !*** ./src/app/shared/routes/full-layout.routes.ts ***!
  \*****************************************************/
/*! exports provided: FullLayout_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayout_ROUTES", function() { return FullLayout_ROUTES; });
const FullLayout_ROUTES = [
    {
        path: 'authentication',
        loadChildren: () => Promise.all(/*! import() | authentication-authentication-module */[__webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~home-~c8bb761b"), __webpack_require__.e("default~authentication-authentication-module~dashboard-dashboard-module~profile-profile-module~task-~87a63fe1"), __webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~posts~16928289"), __webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~posts~bac7c449"), __webpack_require__.e("authentication-authentication-module")]).then(__webpack_require__.bind(null, /*! ../../authentication/authentication.module */ "OpKh")).then(m => m.AuthenticationModule)
    }
];


/***/ }),

/***/ "u6u5":
/*!****************************************************!*\
  !*** ./src/app/shared/template/template.module.ts ***!
  \****************************************************/
/*! exports provided: TemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateModule", function() { return TemplateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.module */ "PCNd");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "ZE2D");
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/badge */ "SKKP");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/radio */ "bE2y");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/list */ "Ff2k");
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/drawer */ "F6ss");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/switch */ "EGpF");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/header.component */ "Isfx");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search/search.component */ "UlaD");
/* harmony import */ var _quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./quick-view/quick-view.component */ "ASAD");
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./side-nav/side-nav.component */ "jnn0");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./footer/footer.component */ "okld");
/* harmony import */ var _directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../directives/side-nav.directive */ "IyZr");
/* harmony import */ var _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../services/theme-constant.service */ "PQ0Y");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-permissions */ "qSrz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");


























const antdModule = [
    ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__["NzAvatarModule"],
    ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_5__["NzBadgeModule"],
    ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__["NzRadioModule"],
    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_7__["NzDropDownModule"],
    ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__["NzListModule"],
    ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_9__["NzDrawerModule"],
    ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_10__["NzDividerModule"],
    ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_11__["NzSwitchModule"],
    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__["NzInputModule"],
    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonModule"],
    ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_23__["NzCheckboxModule"]
];
class TemplateModule {
}
TemplateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TemplateModule });
TemplateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TemplateModule_Factory(t) { return new (t || TemplateModule)(); }, providers: [
        _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_20__["ThemeConstantService"]
    ], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            ...antdModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_21__["NgxPermissionsModule"].forChild(),
        ], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TemplateModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"],
        _quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_16__["QuickViewComponent"],
        _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_17__["SideNavComponent"],
        _directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_19__["SideNavDirective"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__["NzAvatarModule"],
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_5__["NzBadgeModule"],
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__["NzRadioModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_7__["NzDropDownModule"],
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__["NzListModule"],
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_9__["NzDrawerModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_10__["NzDividerModule"],
        ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_11__["NzSwitchModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__["NzInputModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonModule"],
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_23__["NzCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_21__["NgxPermissionsModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"],
        _quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_16__["QuickViewComponent"],
        _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_17__["SideNavComponent"],
        _directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_19__["SideNavDirective"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                    _search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"],
                    _quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_16__["QuickViewComponent"],
                    _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_17__["SideNavComponent"],
                    _directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_19__["SideNavDirective"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"]
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    ...antdModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
                    ngx_permissions__WEBPACK_IMPORTED_MODULE_21__["NgxPermissionsModule"].forChild(),
                ],
                declarations: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                    _search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"],
                    _quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_16__["QuickViewComponent"],
                    _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_17__["SideNavComponent"],
                    _directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_19__["SideNavDirective"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"]
                ],
                providers: [
                    _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_20__["ThemeConstantService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/full-layout/full-layout.component */ "Ueqm");
/* harmony import */ var _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/common-layout/common-layout.component */ "Wdt6");
/* harmony import */ var _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/routes/full-layout.routes */ "puSG");
/* harmony import */ var _shared_routes_common_layout_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/routes/common-layout.routes */ "G7zf");
/* harmony import */ var _authentication_error_1_error_1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication/error-1/error-1.component */ "zjjP");









const appRoutes = [
    {
        path: '',
        // redirectTo: '/dashboard/home',
        redirectTo: '/voter',
        pathMatch: 'full',
    },
    {
        path: '',
        component: _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_3__["CommonLayoutComponent"],
        children: _shared_routes_common_layout_routes__WEBPACK_IMPORTED_MODULE_5__["CommonLayout_ROUTES"]
    },
    {
        path: '',
        component: _layouts_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_2__["FullLayoutComponent"],
        children: _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_4__["FullLayout_ROUTES"]
    },
    {
        path: '**',
        component: _authentication_error_1_error_1_component__WEBPACK_IMPORTED_MODULE_6__["Error1Component"]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"],
                anchorScrolling: 'enabled',
                scrollPositionRestoration: 'enabled'
            })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
                        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"],
                        anchorScrolling: 'enabled',
                        scrollPositionRestoration: 'enabled'
                    })
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zjjP":
/*!*************************************************************!*\
  !*** ./src/app/authentication/error-1/error-1.component.ts ***!
  \*************************************************************/
/*! exports provided: Error1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error1Component", function() { return Error1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");





class Error1Component {
    constructor(router) {
        this.router = router;
        if (!JSON.parse(localStorage.getItem('iyc_user_data'))) {
            this.router.navigate(["/authentication/login"]);
        }
    }
    onClickRedirectToAssignedRouter() {
        var _a, _b, _c, _d, _e, _f;
        let res = JSON.parse(localStorage.getItem('iyc_user_data'));
        // if(!JSON.parse(localStorage.getItem('iyc_user_data')){
        //     this.router.navigate(["/authentication/login"]);
        // }
        // console.log(res?.permissions.length == 0);
        if ((res === null || res === void 0 ? void 0 : res.permissions.length) == 0) {
            localStorage.removeItem("iyc_user_data");
            res = null;
            // this.router.navigate(["/authentication/login"]);
            // return;
        }
        if (!res) {
            this.router.navigate(["/authentication/login"]);
            return;
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.user_type) === null || _b === void 0 ? void 0 : _b.name) == 'Superuser') {
            this.router.navigate(["/voter"]);
        }
        else if (((_d = (_c = res.data) === null || _c === void 0 ? void 0 : _c.user_type) === null || _d === void 0 ? void 0 : _d.name) == 'Data Operator') {
            this.router.navigate(["/voter"]);
        }
        else if (((_f = (_e = res.data) === null || _e === void 0 ? void 0 : _e.user_type) === null || _f === void 0 ? void 0 : _f.name) == 'Account Manager') {
            this.router.navigate(["/accounts/vouchers"]);
        }
        else {
            this.router.navigate(["/authentication/login"]);
        }
    }
}
Error1Component.ɵfac = function Error1Component_Factory(t) { return new (t || Error1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
Error1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Error1Component, selectors: [["ng-component"]], decls: 28, vars: 0, consts: [[1, "container-fluid", "p-v-20", "h-100"], [1, "d-flex", "flex-column", "justify-content-between", "h-100"], [1, "d-none", "d-md-block", "p-h-40"], ["alt", "", "src", "assets/images/logo/logo.png", 1, "img-fluid"], [1, "container"], [1, "row", "align-items-center"], [1, "col-md-5"], [1, "p-v-30"], [1, "font-weight-semibold", "display-1", "text-primary", "lh-1-2"], [1, "font-weight-light", "font-size-30"], [1, "lead", "m-b-30"], ["nz-button", "", "nzType", "primary", 3, "click"], [1, "col-md-6", "m-l-auto"], ["src", "assets/images/others/error-1.png", "alt", "", 1, "img-fluid"], [1, "d-none", "d-md-flex", "p-h-40", "justify-content-between"], [1, ""], [1, "list-inline"], [1, "list-inline-item"], ["href", "", 1, "text-dark", "text-link"]], template: function Error1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Whoops! Looks like you got lost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "We couldn't find what you were looking for.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Error1Component_Template_a_click_14_listener() { return ctx.onClickRedirectToAssignedRouter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Go Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u00A9 2019 ThemeNate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Legal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Error1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './error-1.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "ztfw":
/*!********************************************************************!*\
  !*** ./src/app/shared/template/side-nav/side-nav-routes.config.ts ***!
  \********************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
const ROUTES = [
    {
        path: "/dashboard/home",
        title: "Dashboard",
        iconType: "nzIcon",
        iconTheme: "outline",
        icon: "dashboard",
        permission: (localStorage.getItem('globalToggleValue') == '1') ? false : '',
        submenu: [],
    },
    {
        path: "/media-account",
        title: "Social Media List",
        iconType: "nzIcon",
        iconTheme: "outline",
        icon: "share-alt",
        permission: (localStorage.getItem('globalToggleValue') == '1') ? false : '',
        submenu: [],
    },
    {
        path: "/voter",
        title: "Voter",
        iconType: "nzIcon",
        iconTheme: "outline",
        icon: "user-add",
        permission: '',
        submenu: [],
    },
    {
        path: "/team-management",
        title: "Team Management",
        iconType: "nzIcon",
        iconTheme: "outline",
        icon: "team",
        permission: '',
        submenu: [],
    },
    {
        path: "/task-management",
        title: "Task Management",
        iconType: "nzIcon",
        iconTheme: "outline",
        icon: "solution",
        permission: '',
        submenu: [],
    },
    {
        path: "/profile",
        title: "More",
        iconType: "nzIcon",
        iconTheme: "outline",
        icon: "dashboard",
        permission: '',
        submenu: [],
    }
];


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map