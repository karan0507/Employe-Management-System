(function () {
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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/pidgeot/Desktop/Codezen/frontend-election-portal/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0ZK0":
    /*!*******************************************!*\
      !*** ./src/app/service/global.service.ts ***!
      \*******************************************/

    /*! exports provided: GlobalService */

    /***/
    function ZK0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalService", function () {
        return GlobalService;
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


      var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! crypto-js */
      "wIp5");
      /* harmony import */


      var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! xlsx */
      "nSgz");
      /* harmony import */


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "PScX");
      /* harmony import */


      var _http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./http.service */
      "9NvV");

      var GlobalService = /*#__PURE__*/function () {
        function GlobalService(message, http) {
          _classCallCheck(this, GlobalService);

          this.message = message;
          this.http = http;
          this.zoneData = [];
          this.districtData = [];
          this.assemblyData = [];
          this.candidateData = [];
          this.loksabhaList = [];
          this.enrollerData = [];
          this.api_call_loader = {
            'selectLoader': false
          }; // Current App Nav;

          this.globalNavValue = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
          this.globalUserData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
          this.globalAccountData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
        }

        _createClass(GlobalService, [{
          key: "sendUserData",
          value: function sendUserData(data) {
            this.globalUserData.next(data);
          }
        }, {
          key: "sendGlobalAccountData",
          value: function sendGlobalAccountData(data) {
            this.globalAccountData.next(data);
          }
        }, {
          key: "setCurrNavValue",
          value: function setCurrNavValue(data) {
            this.globalNavValue.next(data);
          }
        }, {
          key: "getDeviceType",
          value: function getDeviceType() {
            var mq = window.matchMedia("(max-width: 720px)");

            if (mq.matches) {
              return 'mobile';
            } else {
              return 'desktop';
            }
          }
        }, {
          key: "amountFromatterFunctionForHO",
          value: function amountFromatterFunctionForHO(value) {
            var val;
            val = Math.abs(value);

            if (val >= 10000000) {
              val = (val / 10000000).toFixed(2) + ' Cr';
            } else if (val >= 100000) {
              val = (val / 100000).toFixed(2) + ' Lacs';
            } else if (val >= 1000) {
              val = (val / 1000).toFixed(2) + ' Thousand';
            }

            if (typeof val == 'string') {} else {
              val = val.toFixed(2);
            }

            return val;
          }
        }, {
          key: "checkBrowserType",
          value: function checkBrowserType() {
            if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
              return 'Opera';
            } else if (navigator.userAgent.indexOf("Chrome") != -1) {
              return 'Chrome';
            } else if (navigator.userAgent.indexOf("Safari") != -1) {
              return 'Safari';
            } else if (navigator.userAgent.indexOf("Firefox") != -1) {
              return 'Firefox';
            } else {
              return 'IE';
            }
          } // export(type) {
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

        }, {
          key: "downloadFile",
          value: function downloadFile(type, data) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(data, "".concat(type, ".xlsx"));
          }
        }, {
          key: "searchStaticDataGlobalFunction",
          value: function searchStaticDataGlobalFunction(type, user, event, isEvent, candidate_id) {
            var _this = this;

            this.api_call_loader['selectLoader'] = true;
            clearTimeout(this.debounce);
            this.debounce = setTimeout(function () {
              var search_param = {
                "search_param": isEvent == 'string' ? event : event.target.value,
                "page": 1,
                "limit": 10
              };

              if (user == 'user') {
                _this.globalMasterUser(type, search_param, candidate_id);
              } else if (user == 'master') {
                _this.globalMasterFilter(type, search_param);
              }
            }, 500);
          }
        }, {
          key: "globalMasterFilter",
          value: function globalMasterFilter(type, search_param) {
            var _this2 = this;

            // let temp = this.globalEncryptionFunction(search_param)
            this.api_call_loader['selectLoader'] = true;
            this.http.getGlobalMaster(type, search_param).subscribe(function (res) {
              if (res === null || res === void 0 ? void 0 : res.success) {
                _this2.api_call_loader['selectLoader'] = false;

                if (type == 'ZoneMaster') {
                  _this2.zoneData = res === null || res === void 0 ? void 0 : res.data;
                } else if (type == 'District') {
                  _this2.districtData = res === null || res === void 0 ? void 0 : res.data;
                } else if (type == 'Assembly') {
                  // this.assemblyData
                  _this2.assemblyData = res === null || res === void 0 ? void 0 : res.data;
                  console.log(_this2.assemblyData);
                } else if (type == 'LoksabhaMaster') {
                  _this2.loksabhaList = res === null || res === void 0 ? void 0 : res.data;
                }
              } else {
                _this2.api_call_loader['selectLoader'] = false;

                _this2.message.error(res === null || res === void 0 ? void 0 : res.message);
              }
            });
          }
        }, {
          key: "globalMasterUser",
          value: function globalMasterUser(type, search_param, candidate_id) {
            var _this3 = this;

            console.log(candidate_id, 'this is candidate id'); // let temp = this.globalEncryptionFunction(search_param)

            if (candidate_id) {
              if (!search_param) {
                search_param = {
                  "user_type": candidate_id
                };
              } else {
                search_param['user_type'] = candidate_id;
              }
            }

            this.http.getGlobalUser(type, search_param).subscribe(function (res) {
              // return res?.data
              if (res === null || res === void 0 ? void 0 : res.success) {
                if (type == 'Candidate') {
                  _this3.candidateData = res === null || res === void 0 ? void 0 : res.data;
                } else if (type == 'Enroller') {
                  _this3.enrollerData = res === null || res === void 0 ? void 0 : res.data;
                }
              }
            });
          }
        }, {
          key: "globalEncryptionFunction",
          value: function globalEncryptionFunction(data) {
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
        }, {
          key: "globalDecryptFunction",
          value: function globalDecryptFunction(encrypted_data) {
            var key = "JDKWIFKDOWR29201KFOW92028FUDISO2";
            key = crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8.parse(key);
            var ciphertext = crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Base64.parse(encrypted_data); // split IV and ciphertext

            var iv = ciphertext.clone();
            iv.sigBytes = 16;
            iv.clamp();
            ciphertext.words.splice(0, 4); // delete 4 words = 16 bytes

            ciphertext.sigBytes -= 16; // decryption

            var decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].decrypt({
              ciphertext: ciphertext
            }, key, {
              iv: iv
            });
            var decrypted_data = decrypted.toString(crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8);
            return decrypted_data;
          }
        }, {
          key: "numberWithCommas",
          value: function numberWithCommas(data) {
            return data.toString().split('.')[0].length > 3 ? data.toString().substring(0, data.toString().split('.')[0].length - 3).replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + data.toString().substring(data.toString().split('.')[0].length - 3) : data.toString();
          }
        }, {
          key: "exportTableData",
          value: function exportTableData(data, filename, column_name) {
            console.log(filename, "file to download");
            var ws = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].json_to_sheet(data);
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_append_sheet(wb, ws, 'Sheet1');
            /* save to file */

            xlsx__WEBPACK_IMPORTED_MODULE_4__["writeFile"](wb, filename + '.xlsx');
          }
        }]);

        return GlobalService;
      }();

      GlobalService.ɵfac = function GlobalService_Factory(t) {
        return new (t || GlobalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]));
      };

      GlobalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GlobalService,
        factory: GlobalService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"]
          }, {
            type: _http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    1:
    /*!************************!*\
      !*** crypto (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "9NvV":
    /*!*****************************************!*\
      !*** ./src/app/service/http.service.ts ***!
      \*****************************************/

    /*! exports provided: HttpService */

    /***/
    function NvV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpService", function () {
        return HttpService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M"); // import { map } from "rxjs";


      var HttpService = /*#__PURE__*/function () {
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
        function HttpService(http) {
          _classCallCheck(this, HttpService);

          this.http = http;
          this.globalUserPermissionsData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](); // https://api.chatiyc.com/admin
          // url = 'https://iycapi.dixitsir.com/'   

          this.url = 'https://api.chatiyc.com';
        }

        _createClass(HttpService, [{
          key: "setPermissionValue",
          value: function setPermissionValue(data) {
            this.globalUserPermissionsData.next(data);
          }
        }, {
          key: "UserLoginSendOTP",
          value: function UserLoginSendOTP(data, end_point) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            return this.http.post(this.url + end_point, data, {
              headers: headers
            });
          } // verify OTP

        }, {
          key: "verifyOTPAPI",
          value: function verifyOTPAPI(data, end_point) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            return this.http.post(this.url + end_point, data, {
              headers: headers
            });
          }
        }, {
          key: "createOnline$",
          value: function createOnline$() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'offline').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
              return false;
            })), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'online').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
              return true;
            })), new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (sub) {
              sub.next(navigator.onLine);
              sub.complete();
            }));
          } // verify User API

        }, {
          key: "verifyUserAPI",
          value: function verifyUserAPI(end_point) {
            return this.http.get(this.url + end_point);
          } // logout user

        }, {
          key: "logoutUserAPI",
          value: function logoutUserAPI(end_point) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            return this.http.get(this.url + end_point, {
              headers: headers
            });
          }
        }, {
          key: "getDataFromBackgroundFunction",
          value: function getDataFromBackgroundFunction(params_data) {
            return this.http.get(this.url + "/social_media/v1/post-detail/get-data-from-background", {
              params: params_data
            });
          }
        }, {
          key: "addVoterToList",
          value: function addVoterToList(data) {
            return this.http.post(this.url + "votes/add-enroller-votes", data);
          }
        }, {
          key: "getGlobalMaster",
          value: function getGlobalMaster(data, search_param) {
            return this.http.get(this.url + "master/get-global-master/".concat(data), {
              params: search_param
            }); // master/get-global-master/:modelname
          }
        }, {
          key: "vouchersList",
          value: function vouchersList(data) {
            return this.http.get(this.url + 'account/get-account-list', {
              params: data
            });
          }
        }, {
          key: "getGlobalUser",
          value: function getGlobalUser(user, data) {
            return this.http.get(this.url + 'users/get-global-user/' + user, {
              params: data
            });
          }
        }, {
          key: "paymentOnCommission",
          value: function paymentOnCommission(data) {
            return this.http.post(this.url + "votes/payment-enroller-votes", data); // votes/payment-enroller-votes
          } // votes/add-enroller-votes

        }, {
          key: "addEditVoucher",
          value: function addEditVoucher(data) {
            return this.http.post(this.url + 'account/add-account', data);
          }
        }, {
          key: "addEnroller",
          value: function addEnroller(data) {
            return this.http.post(this.url + 'users/add-enroller', data);
          }
        }, {
          key: "exportMaster",
          value: function exportMaster(type) {
            return this.http.get(this.url + 'account/export/' + type, {
              responseType: 'blob'
            });
          }
        }, {
          key: "addExpenseLedger",
          value: function addExpenseLedger(type, data) {
            return this.http.post(this.url + 'account/add-' + type + '-type', data);
          }
        }, {
          key: "deleteAccount",
          value: function deleteAccount(id) {
            return this.http["delete"](this.url + 'account/delete-account/' + id);
          }
        }, {
          key: "logout",
          value: function logout() {
            return this.http.get(this.url + '/users/v1/auth/logout-user');
          }
        }, {
          key: "getEnrollerData",
          value: function getEnrollerData(data) {
            return this.http.get(this.url + 'users/get-global-user/Enroller', {
              params: data
            });
          }
        }, {
          key: "editEnrollerData",
          value: function editEnrollerData(id, data) {
            return this.http.put(this.url + 'users/edit-enroller/' + id, data);
          }
        }, {
          key: "getOtpForEnroller",
          value: function getOtpForEnroller(data) {
            return this.http.post(this.url + 'users/iyc/send-otp', data);
          }
        }, {
          key: "verifyOtpForEnroller",
          value: function verifyOtpForEnroller(data) {
            return this.http.post(this.url + 'users/iyc/verify-otp', data);
          }
        }, {
          key: "getDashboardApiCount",
          value: function getDashboardApiCount() {
            return this.http.get(this.url + 'votes/get-total-counts');
          }
        }, {
          key: "getDashboardGraphCount",
          value: function getDashboardGraphCount(data) {
            return this.http.get(this.url + 'votes/get-realtime-graph-data', {
              params: data
            });
          }
        }, {
          key: "getDashboardTableData",
          value: function getDashboardTableData() {
            return this.http.get(this.url + 'votes/get-analytic-data');
          }
        }, {
          key: "getAssemblyDashboard",
          value: function getAssemblyDashboard(data) {
            return this.http.get(this.url + 'votes/get-assembly-candidate', {
              params: data
            });
          }
        }, {
          key: "getDashboardMetrics4",
          value: function getDashboardMetrics4() {
            return this.http.get(this.url + '/social_media/v1/post-detail/get-data-from-background');
          }
        }, {
          key: "getDistrictWiseData",
          value: function getDistrictWiseData() {
            return this.http.get(this.url + 'votes/get-district-candidate');
          }
        }, {
          key: "getGSCandidateData",
          value: function getGSCandidateData(data) {
            return this.http.get(this.url + 'votes/get-gs-candidate', {
              params: data
            });
          }
        }, {
          key: "getOurGraphData",
          value: function getOurGraphData(data) {
            return this.http.get(this.url + 'votes/get-our-graph-data', {
              params: data
            });
          }
        }, {
          key: "getDailyVoteCount",
          value: function getDailyVoteCount(data) {
            return this.http.get(this.url + 'votes/get-day-wise-vote-count', {
              params: data
            });
          }
        }, {
          key: "getInsightVotesGraph",
          value: function getInsightVotesGraph(data) {
            return this.http.get(this.url + 'votes/get-vote-insight-graph', {
              params: data
            });
          }
        }, {
          key: "exportMasterAPIWithMultipleFilters",
          value: function exportMasterAPIWithMultipleFilters(data) {
            return this.http.post(this.url + 'account/export-analytics-report', data, {
              responseType: 'blob'
            });
          }
        }, {
          key: "generateDayWiseReport",
          value: function generateDayWiseReport(data) {
            return this.http.post(this.url + 'account/generate-day-wise-report', data, {
              responseType: 'blob'
            });
          }
        }, {
          key: "generateDayWiseReportAssemblyDistrict",
          value: function generateDayWiseReportAssemblyDistrict(data) {
            return this.http.post(this.url + 'account/generate-day-wise-district-assembly-report', data, {
              responseType: 'blob'
            });
          }
        }, {
          key: "getDistrictVotes",
          value: function getDistrictVotes() {
            return this.http.get(this.url + 'votes/get-district-votes');
          }
        }, {
          key: "getAssemblyVotes",
          value: function getAssemblyVotes() {
            return this.http.get(this.url + 'votes/get-assembly-votes');
          }
        }, {
          key: "getSPVotes",
          value: function getSPVotes() {
            return this.http.get(this.url + 'votes/get-candidate-votes');
          } // Phase 2 PWA APIs

        }, {
          key: "getVoterActivity",
          value: function getVoterActivity(data) {
            return this.http.get(this.url + '/voters/v1/voter-activity/get-voter-activity', {
              params: data
            });
          }
        }, {
          key: "deleteVoterActivity",
          value: function deleteVoterActivity(id) {
            return this.http["delete"](this.url + '/voters/v1/voter-activity/delete-voter-activity/' + id + '/');
          }
        }, {
          key: "editVoterActivity",
          value: function editVoterActivity(id, data) {
            return this.http.put(this.url + '/voters/v1/voter-activity/edit-voter-activity/' + id + "/", data);
          }
        }, {
          key: "addVoterActivity",
          value: function addVoterActivity(data) {
            return this.http.post(this.url + "/voters/v1/voter-activity/add-voter-activity", data);
          }
        }, {
          key: "getVoterFollowup",
          value: function getVoterFollowup(data) {
            return this.http.get(this.url + '/voters/v1/voter-activity/get-voter-activity', {
              params: data
            });
          }
        }, {
          key: "deleteVoterFollowup",
          value: function deleteVoterFollowup(id) {
            return this.http["delete"](this.url + '/voters/v1/voter-activity/delete-voter-activity/' + id + '/');
          }
        }, {
          key: "editVoterFollowup",
          value: function editVoterFollowup(id, data) {
            return this.http.put(this.url + "/voters/v1/voter-followup/edit-voter-followup/" + id + "/", data);
          }
        }, {
          key: "addVoterFollowup",
          value: function addVoterFollowup(data) {
            return this.http.post(this.url + "/voters/v1/voter-followup/add-voter-followup", data);
          }
        }, {
          key: "logOutUser",
          value: function logOutUser() {
            return this.http.get(this.url + "/users/v1/auth/logout-user");
          } // Get User Profile Details

        }, {
          key: "getUserProfile",
          value: function getUserProfile(data) {
            return this.http.get(this.url + "/users/v1/auth/get-user-profile", {
              params: data
            });
          }
        }, {
          key: "getGlobalAdminData",
          value: function getGlobalAdminData(data) {
            return this.http.get(this.url + "/users/v1/user/add-global-account", {
              params: data
            });
          }
        }, {
          key: "addGlobalAdminData",
          value: function addGlobalAdminData(data) {
            return this.http.post(this.url + "/users/v1/user/add-global-account", data);
          }
        }, {
          key: "getVoterList",
          value: function getVoterList(data) {
            return this.http.get(this.url + "/social_media/v1/post-detail/get-data-from-background", {
              params: data
            });
          }
        }, {
          key: "getVoterDetails",
          value: function getVoterDetails(data) {
            return this.http.get(this.url + "/social_media/v1/post-detail/get-data-from-background", {
              params: data
            });
          }
        }, {
          key: "addEditVoterActivityList",
          value: function addEditVoterActivityList(data) {
            return this.http.get(this.url + "/voters/v1/voter-activity/get-voter-activity", {
              params: data
            });
          }
        }, {
          key: "getVoterFollowUp",
          value: function getVoterFollowUp(data) {
            return this.http.get(this.url + "/voters/v1/voter-followup/get-voter-followup", {
              params: data
            });
          }
        }, {
          key: "getMasterData",
          value: function getMasterData(data) {
            return this.http.get(this.url + "/master/v1/master-get/get-master-data-global", {
              params: data
            });
          } // Rating voter

        }, {
          key: "getVoterRating",
          value: function getVoterRating(data) {
            return this.http.get(this.url + "/master/v1/master-get/get-master-data-global", {
              params: data
            });
          }
        }, {
          key: "addVoterRating",
          value: function addVoterRating(data) {
            return this.http.get(this.url + "/voters/v1/voter-rating/add-voter-rating", {
              params: data
            });
          }
        }, {
          key: "editVoterRating",
          value: function editVoterRating(id, data) {
            // data= {voter_id,  rating}
            return this.http.put(this.url + "/voters/v1/voter-rating/edit-voter-rating/" + id + "/", {
              params: data
            });
          }
        }, {
          key: "deleteoterRating",
          value: function deleteoterRating(id) {
            return this.http["delete"](this.url + "/voters/v1/voter-rating/delete-voter-rating/" + id + "/");
          }
        }, {
          key: "editVoter",
          value: function editVoter(id, data) {
            return this.http.put(this.url + "/voters/v1/voter-data/edit-voter-data/" + id + "/", data);
          }
        }, {
          key: "addVoter",
          value: function addVoter(data) {
            return this.http.post(this.url + "/voters/v1/voter-data/add-voter-data", data);
          }
        }, {
          key: "getVoterStatus",
          value: function getVoterStatus(data) {
            return this.http.get(this.url + "/master/v1/master-get/get-master-data-global", data);
          }
        }, {
          key: "getAuditTrail",
          value: function getAuditTrail(data) {
            return this.http.get(this.url + "/platform_central/v1/audit-trail/get-audit-trail", {
              params: data
            });
          } // Task Management

        }, {
          key: "getTaskList",
          value: function getTaskList(data) {
            return this.http.get(this.url + "/users/v1/task-management/fetch-task-list", {
              params: data
            });
          }
        }, {
          key: "editTasks",
          value: function editTasks(id, data) {
            return this.http.put(this.url + "/users/v1/task-management/edit-task/" + id + "/", data);
          }
        }, {
          key: "addTasks",
          value: function addTasks(data) {
            return this.http.post(this.url + "/users/v1/task-management/create-task", data);
          }
        }, {
          key: "changeTaskStatus",
          value: function changeTaskStatus(id, data) {
            return this.http.put(this.url + "/users/v1/task-management/edit-task/" + id + "/", data);
          } // Team Management

        }, {
          key: "getTeamList",
          value: function getTeamList(data) {
            return this.http.get(this.url + "/users/v1/user-management/get-user", {
              params: data
            });
          }
        }, {
          key: "editTeamMember",
          value: function editTeamMember(id, data) {
            return this.http.put(this.url + "/users/v1/user-management/edit-user/" + id + "/", data);
          }
        }, {
          key: "addTeamMember",
          value: function addTeamMember(data) {
            return this.http.post(this.url + "/users/v1/user-management/add-user", data);
          }
        }, {
          key: "changeTeamStatus",
          value: function changeTeamStatus(id, data) {
            return this.http.post(this.url + "/users/v1/user-management/change-user-status", data);
          }
        }, {
          key: "importTask",
          value: function importTask(data) {
            return this.http.post(this.url + "/users/v1/task-management/import-task", data);
          }
        }, {
          key: "getAccountListt",
          value: function getAccountListt(data) {
            return this.http.get(this.url + "/social_media/v1/account-link/get-account-links", {
              params: data
            });
          }
        }, {
          key: "editAccountList",
          value: function editAccountList(id, data) {
            return this.http.put(this.url + "/social_media/v1/account-link/edit-account-links/" + id + "/", data);
          }
        }, {
          key: "addAccountLink",
          value: function addAccountLink(data) {
            return this.http.post(this.url + "/social_media/v1/account-link/add-account-links", data);
          }
        }, {
          key: "changeLanguage",
          value: function changeLanguage(data) {
            return this.http.post(this.url + "/users/v1/user/change-user-language", data);
          }
        }, {
          key: "addVoterTasg",
          value: function addVoterTasg(data) {
            return this.http.post(this.url + "/voters/v1/voter-tag/add-voter-tag", data);
          }
        }, {
          key: "getVotersTagList",
          value: function getVotersTagList(data) {
            return this.http.get(this.url + "/voters/v1/voter-tag/get-voter-tag", {
              params: data
            });
          }
        }, {
          key: "addRelationship",
          value: function addRelationship(data) {
            return this.http.post(this.url + "/voters/v1/voter-tag/add-voter-relationship", data);
          }
        }, {
          key: "getRelationshipTags",
          value: function getRelationshipTags(data) {
            return this.http.get(this.url + "/voters/v1/voter-tag/get-voter-primary-attributes", {
              params: data
            });
          }
        }, {
          key: "getRelationList",
          value: function getRelationList(data) {
            return this.http.get(this.url + "/voters/v1/voter-tag/get-voter-relationship", {
              params: data
            });
          }
        }]);

        return HttpService;
      }();

      HttpService.ɵfac = function HttpService_Factory(t) {
        return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HttpService,
        factory: HttpService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ASAD":
    /*!********************************************************************!*\
      !*** ./src/app/shared/template/quick-view/quick-view.component.ts ***!
      \********************************************************************/

    /*! exports provided: QuickViewComponent */

    /***/
    function ASAD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuickViewComponent", function () {
        return QuickViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/theme-constant.service */
      "PQ0Y");
      /* harmony import */


      var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service/http.service */
      "9NvV");
      /* harmony import */


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "PScX");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/checkbox */
      "TaO5");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var QuickViewComponent = /*#__PURE__*/function () {
        function QuickViewComponent(themeService, http, message, router) {
          _classCallCheck(this, QuickViewComponent);

          this.themeService = themeService;
          this.http = http;
          this.message = message;
          this.router = router;
          this.allChecked = false;
          this.indeterminate = true;
          this.checkOptionsOne = [{
            label: 'Hindu',
            value: 'hindu',
            checked: false
          }, {
            label: 'Muslim',
            value: 'muslim',
            checked: false
          }, {
            label: 'Christian',
            value: 'christian',
            checked: false
          }];
        }

        _createClass(QuickViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            console.log('In Quick');
            this.themeService.isMenuFoldedChanges.subscribe(function (isFolded) {
              return _this4.isFolded = isFolded;
            });
            this.themeService.isSideNavDarkChanges.subscribe(function (isDark) {
              return _this4.isSideNavDark = isDark;
            });
            this.themeService.selectedHeaderColor.subscribe(function (color) {
              return _this4.selectedHeaderColor = color;
            });
          }
        }, {
          key: "changeHeaderColor",
          value: function changeHeaderColor() {
            this.themeService.changeHeaderColor(this.selectedHeaderColor);
          }
        }, {
          key: "toggleSideNavDark",
          value: function toggleSideNavDark() {
            this.themeService.toogleSideNavDark(this.isSideNavDark);
          }
        }, {
          key: "toggleFold",
          value: function toggleFold() {
            this.themeService.toggleFold(this.isFolded);
          }
        }, {
          key: "logOutUser",
          value: function logOutUser() {
            var _this5 = this;

            this.http.logOutUser().subscribe(function (res) {
              if (res.success) {
                _this5.message.success(res.message);

                _this5.router.navigateByUrl('/authentication/login');
              }
            });
          }
        }, {
          key: "updateAllChecked",
          value: function updateAllChecked(type) {
            if (type) {
              this.checkOptionsOne = this.checkOptionsOne.map(function (item) {
                return Object.assign(Object.assign({}, item), {
                  checked: false
                });
              });
              return;
            }

            this.indeterminate = false;

            if (this.allChecked) {
              this.checkOptionsOne = this.checkOptionsOne.map(function (item) {
                return Object.assign(Object.assign({}, item), {
                  checked: true
                });
              });
            } else {
              this.checkOptionsOne = this.checkOptionsOne.map(function (item) {
                return Object.assign(Object.assign({}, item), {
                  checked: false
                });
              });
            }
          }
        }, {
          key: "updateSingleChecked",
          value: function updateSingleChecked() {
            if (this.checkOptionsOne.every(function (item) {
              return !item.checked;
            })) {
              this.allChecked = false;
              this.indeterminate = false;
            } else if (this.checkOptionsOne.every(function (item) {
              return item.checked;
            })) {
              this.allChecked = true;
              this.indeterminate = false;
            } else {
              this.indeterminate = true;
            }
          }
        }]);

        return QuickViewComponent;
      }();

      QuickViewComponent.ɵfac = function QuickViewComponent_Factory(t) {
        return new (t || QuickViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_1__["ThemeConstantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      QuickViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: QuickViewComponent,
        selectors: [["app-quick-view"]],
        decls: 7,
        vars: 3,
        consts: [[1, "d-flex", "justify-content-between"], ["nz-checkbox", "", 3, "ngModel", "nzIndeterminate", "ngModelChange"], [1, "text-primary", "font-weight-semibold", 3, "click"], [2, "width", "70%", 3, "ngModel", "ngModelChange"]],
        template: function QuickViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuickViewComponent_Template_label_ngModelChange_1_listener($event) {
              return ctx.allChecked = $event;
            })("ngModelChange", function QuickViewComponent_Template_label_ngModelChange_1_listener() {
              return ctx.updateAllChecked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Select All ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuickViewComponent_Template_a_click_4_listener() {
              ctx.updateAllChecked(true);
              return ctx.allChecked = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Clear All");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-checkbox-group", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuickViewComponent_Template_nz_checkbox_group_ngModelChange_6_listener($event) {
              return ctx.checkOptionsOne = $event;
            })("ngModelChange", function QuickViewComponent_Template_nz_checkbox_group_ngModelChange_6_listener() {
              return ctx.updateSingleChecked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.allChecked)("nzIndeterminate", ctx.indeterminate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checkOptionsOne);
          }
        },
        directives: [ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_5__["NzCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_5__["NzCheckboxGroupComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuickViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-quick-view',
            templateUrl: './quick-view.component.html'
          }]
        }], function () {
          return [{
            type: _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_1__["ThemeConstantService"]
          }, {
            type: src_app_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
          }, {
            type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "G7zf":
    /*!*******************************************************!*\
      !*** ./src/app/shared/routes/common-layout.routes.ts ***!
      \*******************************************************/

    /*! exports provided: CommonLayout_ROUTES */

    /***/
    function G7zf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonLayout_ROUTES", function () {
        return CommonLayout_ROUTES;
      });

      var CommonLayout_ROUTES = [{
        path: 'dashboard',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | dashboard-dashboard-module */
          [__webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~home-~c8bb761b"), __webpack_require__.e("default~authentication-authentication-module~dashboard-dashboard-module~profile-profile-module~task-~87a63fe1"), __webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~posts~16928289"), __webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~posts~bac7c449"), __webpack_require__.e("common"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
          /*! ../../dashboard/dashboard.module */
          "TDBs")).then(function (m) {
            return m.DashboardModule;
          });
        }
      }, {
        path: 'posts',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | posts-posts-module */
          [__webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~home-~c8bb761b"), __webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~posts~16928289"), __webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~posts~bac7c449"), __webpack_require__.e("default~account-account-module~posts-posts-module~voter-voter-module"), __webpack_require__.e("common"), __webpack_require__.e("posts-posts-module")]).then(__webpack_require__.bind(null,
          /*! ../../posts/posts.module */
          "1XP4")).then(function (m) {
            return m.PostsModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | profile-profile-module */
          [__webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~home-~c8bb761b"), __webpack_require__.e("default~authentication-authentication-module~dashboard-dashboard-module~profile-profile-module~task-~87a63fe1"), __webpack_require__.e("default~profile-profile-module~voter-voter-module"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null,
          /*! ../../profile/profile.module */
          "cRhG")).then(function (m) {
            return m.ProfileModule;
          });
        }
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | home-home-module */
          [__webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~home-~c8bb761b"), __webpack_require__.e("default~home-home-module~voter-voter-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
          /*! ../../home/home.module */
          "ct+p")).then(function (m) {
            return m.HomeModule;
          });
        }
      }, {
        path: 'voter',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | voter-voter-module */
          [__webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~home-~c8bb761b"), __webpack_require__.e("default~authentication-authentication-module~dashboard-dashboard-module~profile-profile-module~task-~87a63fe1"), __webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~posts~16928289"), __webpack_require__.e("default~account-account-module~posts-posts-module~voter-voter-module"), __webpack_require__.e("default~home-home-module~voter-voter-module"), __webpack_require__.e("default~task-management-task-management-module~voter-voter-module"), __webpack_require__.e("default~profile-profile-module~voter-voter-module"), __webpack_require__.e("voter-voter-module")]).then(__webpack_require__.bind(null,
          /*! ../../voter/voter.module */
          "nNne")).then(function (m) {
            return m.VoterModule;
          });
        }
      }, {
        path: 'task-management',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | task-management-task-management-module */
          [__webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~home-~c8bb761b"), __webpack_require__.e("default~authentication-authentication-module~dashboard-dashboard-module~profile-profile-module~task-~87a63fe1"), __webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~posts~16928289"), __webpack_require__.e("default~task-management-task-management-module~voter-voter-module"), __webpack_require__.e("task-management-task-management-module")]).then(__webpack_require__.bind(null,
          /*! ../../task-management/task-management.module */
          "/zXh")).then(function (m) {
            return m.TaskManagementModule;
          });
        }
      }, {
        path: 'team-management',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | team-team-module */
          [__webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~home-~c8bb761b"), __webpack_require__.e("default~authentication-authentication-module~dashboard-dashboard-module~profile-profile-module~task-~87a63fe1"), __webpack_require__.e("team-team-module")]).then(__webpack_require__.bind(null,
          /*! ../../team/team.module */
          "o5iR")).then(function (m) {
            return m.TeamModule;
          });
        }
      }, {
        path: 'media-account',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | account-account-module */
          [__webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~home-~c8bb761b"), __webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~posts~16928289"), __webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~posts~bac7c449"), __webpack_require__.e("default~account-account-module~posts-posts-module~voter-voter-module"), __webpack_require__.e("common"), __webpack_require__.e("account-account-module")]).then(__webpack_require__.bind(null,
          /*! ../../account/account.module */
          "jcJX")).then(function (m) {
            return m.AccountModule;
          });
        }
      }];
      /***/
    },

    /***/
    "Isfx":
    /*!************************************************************!*\
      !*** ./src/app/shared/template/header/header.component.ts ***!
      \************************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function Isfx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/theme-constant.service */
      "PQ0Y");
      /* harmony import */


      var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-zorro-antd/modal */
      "dEAy");
      /* harmony import */


      var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/service/http.service */
      "9NvV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/service/global.service */
      "0ZK0");
      /* harmony import */


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "PScX");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/switch */
      "EGpF");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(themeService, modal, http, router, global, message) {
          _classCallCheck(this, HeaderComponent);

          this.themeService = themeService;
          this.modal = modal;
          this.http = http;
          this.router = router;
          this.global = global;
          this.message = message;
          this.searchVisible = false;
          this.quickViewVisible = false;
          this.notificationList = [{
            title: 'You received a new message',
            time: '8 min',
            icon: 'mail',
            color: 'ant-avatar-' + 'blue'
          }, {
            title: 'New user registered',
            time: '7 hours',
            icon: 'user-add',
            color: 'ant-avatar-' + 'cyan'
          }, {
            title: 'System Alert',
            time: '8 hours',
            icon: 'warning',
            color: 'ant-avatar-' + 'red'
          }, {
            title: 'You have a new update',
            time: '2 days',
            icon: 'sync',
            color: 'ant-avatar-' + 'gold'
          }];
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            // this._currToggleValue ? localStorage.setItem('globalToggleValue','1') : localStorage.setItem('globalToggleValue','2')
            this._currToggleValue = localStorage.getItem('globalToggleValue') == '2' ? true : false;
            this.globalAccData = localStorage.getItem('global_account_data');
            this._currLang = localStorage.getItem('appLanguage') || 'en';
            this.global.globalAccountData.subscribe(function (res) {
              if (res) {
                _this6.globalAccData = res;
              }
            });
            this.themeService.isMenuFoldedChanges.subscribe(function (isFolded) {
              return _this6.isFolded = isFolded;
            });
            this.themeService.isExpandChanges.subscribe(function (isExpand) {
              return _this6.isExpand = isExpand;
            });
          }
        }, {
          key: "toggleFold",
          value: function toggleFold() {
            this.isFolded = !this.isFolded;
            this.themeService.toggleFold(this.isFolded);
          }
        }, {
          key: "toggleExpand",
          value: function toggleExpand() {
            this.isFolded = false;
            this.isExpand = !this.isExpand;
            this.themeService.toggleExpand(this.isExpand);
            this.themeService.toggleFold(this.isFolded);
          }
        }, {
          key: "searchToggle",
          value: function searchToggle() {
            this.searchVisible = !this.searchVisible;
          }
        }, {
          key: "quickViewToggle",
          value: function quickViewToggle() {
            var _this7 = this;

            // this.quickViewVisible = !this.quickViewVisible;
            this.modal.confirm({
              nzTitle: 'Are you sure ',
              nzContent: 'You want to logout',
              nzOkText: 'Yes, Logout',
              nzOkType: 'primary',
              nzOkDanger: true,
              nzOnOk: function nzOnOk() {
                return _this7.onClickLogOut();
              },
              nzCancelText: 'No',
              nzOnCancel: function nzOnCancel() {
                return _this7.modal.closeAll();
              }
            });
          }
        }, {
          key: "onClickLogOut",
          value: function onClickLogOut() {
            var _this8 = this;

            this.http.logout().subscribe(function (res) {
              if (res.success) {
                _this8.message.success(res.message);

                _this8.modal.closeAll();

                _this8.router.navigate(['/authentication/login']);

                localStorage.removeItem("iyc_user_token");
                localStorage.removeItem("iyc_user_data");
                localStorage.removeItem('appLanguage');
                localStorage.removeItem('menuItem');
                localStorage.removeItem('global_account_data');
              }
            });
          }
        }, {
          key: "switchToggle",
          value: function switchToggle() {
            this._currToggleValue = !this._currToggleValue;

            if (this._currToggleValue == true) {
              this.router.navigateByUrl("/dashboard/home");
            } else {
              this.router.navigateByUrl("/voter");
            }

            !this._currToggleValue ? localStorage.setItem('globalToggleValue', '1') : localStorage.setItem('globalToggleValue', '2');
            setTimeout(function () {
              window.location.reload();
            }, 300);
            console.log('dashboard');
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_1__["ThemeConstantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__["NzModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 27,
        vars: 4,
        consts: [[1, "header"], [1, "logo", "logo-dark"], [1, "logo", "logo-white"], ["href", ""], ["src", "assets/images/logo/logo-white.png", "alt", "Logo"], ["src", "assets/images/logo/logo-fold-white.png", "alt", "Logo", 1, "logo-fold"], [1, "nav-wrap"], [1, "nav-left"], [1, "desktop-toggle"], [3, "click"], ["nz-icon", "", "theme", "outline", 3, "nzType"], [1, "mobile-toggle"], [1, "d-flex", "align-items-center"], [1, "nav-right"], [1, "d-lg-flex", "d-none"], [1, "d-flex", "align-items-center", "mr-3"], [1, "mx-3", 3, "ngModel", "ngModelChange"], ["nz-button", "", "nz-tooltip", "", "nzTooltipTitle", "Export", 3, "click"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_11_listener() {
              return ctx.toggleFold();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_14_listener() {
              return ctx.toggleExpand();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_Template_nz_switch_ngModelChange_22_listener() {
              return ctx.switchToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Social Media ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_25_listener() {
              return ctx.quickViewToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Logout ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isFolded ? "CM" : "Cadre Management", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx.isFolded ? "menu-unfold" : "menu-fold");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx.isExpand ? "menu-fold" : "menu-unfold");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx._currToggleValue);
          }
        },
        directives: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_9__["NzSwitchComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__["NzWaveDirective"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html'
          }]
        }], function () {
          return [{
            type: _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_1__["ThemeConstantService"]
          }, {
            type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__["NzModalService"]
          }, {
            type: src_app_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: src_app_service_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]
          }, {
            type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "IyZr":
    /*!*********************************************************!*\
      !*** ./src/app/shared/directives/side-nav.directive.ts ***!
      \*********************************************************/

    /*! exports provided: SideNavDirective */

    /***/
    function IyZr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SideNavDirective", function () {
        return SideNavDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SideNavDirective = /*#__PURE__*/function () {
        function SideNavDirective() {
          _classCallCheck(this, SideNavDirective);
        }

        _createClass(SideNavDirective, [{
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            $('.side-nav .side-nav-menu:not(.ant-menu-inline-collapsed) li a').click(function (event) {
              if ($(this).parent().hasClass("ant-menu-submenu-open")) {
                $(this).parent().children('.dropdown-menu').slideUp(200, function () {
                  $(this).parent().removeClass("ant-menu-submenu-open");
                });
              } else {
                $(this).parent().parent().children('li.ant-menu-submenu-open').children('.dropdown-menu').slideUp(100);
                $(this).parent().parent().children('li.ant-menu-submenu-open').children('a').removeClass('ant-menu-submenu-open');
                $(this).parent().parent().children('li.ant-menu-submenu-open').removeClass("ant-menu-submenu-open");
                $(this).parent().children('.dropdown-menu').slideDown(100, function () {
                  $(this).parent().addClass("ant-menu-submenu-open");
                });
              }
            });
          }
        }]);

        return SideNavDirective;
      }();

      SideNavDirective.ɵfac = function SideNavDirective_Factory(t) {
        return new (t || SideNavDirective)();
      };

      SideNavDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: SideNavDirective,
        selectors: [["", "sideNav", ""]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[sideNav]'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/tooltip */
      "nJia");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/theme-constant.service */
      "PQ0Y");
      /* harmony import */


      var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pipes/search.pipe */
      "WfBE");
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");
      /* harmony import */


      var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/modal */
      "dEAy"); // import { DeviceDetectorService } from 'ngx-device-detector';


      var SharedModule = /*#__PURE__*/_createClass(function SharedModule() {
        _classCallCheck(this, SharedModule);
      });

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        providers: [_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_8__["ThemeConstantService"]],
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__["NzToolTipModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__["NzModalModule"], // DeviceDetectorService,
        // DeviceDetectorService.forRoot()
        ngx_permissions__WEBPACK_IMPORTED_MODULE_10__["NgxPermissionsModule"].forChild()], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientJsonpModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchPipe"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__["NzToolTipModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__["NzModalModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_10__["NgxPermissionsModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientJsonpModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"], _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchPipe"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientJsonpModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"], _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchPipe"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__["NzToolTipModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__["NzModalModule"], // DeviceDetectorService,
            // DeviceDetectorService.forRoot()
            ngx_permissions__WEBPACK_IMPORTED_MODULE_10__["NgxPermissionsModule"].forChild()],
            declarations: [_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchPipe"]],
            providers: [_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_8__["ThemeConstantService"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "PQ0Y":
    /*!***********************************************************!*\
      !*** ./src/app/shared/services/theme-constant.service.ts ***!
      \***********************************************************/

    /*! exports provided: ThemeConstantService */

    /***/
    function PQ0Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThemeConstantService", function () {
        return ThemeConstantService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var ThemeConstantService = /*#__PURE__*/function () {
        function ThemeConstantService() {
          _classCallCheck(this, ThemeConstantService);

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

        _createClass(ThemeConstantService, [{
          key: "get",
          value: function get() {
            return this.colorConfig;
          }
        }, {
          key: "toggleFold",
          value: function toggleFold(isFolded) {
            this.isMenuFoldedActived.next(isFolded);
          }
        }, {
          key: "toogleSideNavDark",
          value: function toogleSideNavDark(isDark) {
            this.isSideNavDarkActived.next(isDark);
          }
        }, {
          key: "toggleExpand",
          value: function toggleExpand(isExpand) {
            this.isExpandActived.next(isExpand);
          }
        }, {
          key: "changeHeaderColor",
          value: function changeHeaderColor(color) {
            this.currentHeaderColor.next(color);
          }
        }]);

        return ThemeConstantService;
      }();

      ThemeConstantService.ɵfac = function ThemeConstantService_Factory(t) {
        return new (t || ThemeConstantService)();
      };

      ThemeConstantService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ThemeConstantService,
        factory: ThemeConstantService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeConstantService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /***/

    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
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
        if (!__webpack_require__.o(map, req)) {
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
      /***/
    },

    /***/
    "S9YW":
    /*!***********************************************!*\
      !*** ./src/app/service/custom.interceptor.ts ***!
      \***********************************************/

    /*! exports provided: CustomInterceptor */

    /***/
    function S9YW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomInterceptor", function () {
        return CustomInterceptor;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "PScX");
      /* harmony import */


      var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/service/http.service */
      "9NvV");

      var CustomInterceptor = /*#__PURE__*/function () {
        function CustomInterceptor(message, router, httpService) {
          var _this9 = this;

          _classCallCheck(this, CustomInterceptor);

          this.message = message;
          this.router = router;
          this.httpService = httpService;
          this.token = '';
          this.pendingHTTPRequests$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivationStart"]) {
              // Cancel pending calls
              _this9.cancelPendingRequests();
            }
          });
        }

        _createClass(CustomInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var _this10 = this;

            var check_status;
            this.httpService.createOnline$().subscribe(function (isOnline) {
              check_status = isOnline;
            });

            if (check_status) {
              if (!(req.url.includes("users/auth/send-otp") || req.url.includes("stockist/client-auth/verify-otp"))) {
                this.token = localStorage.getItem('iyc_user_token');

                if (this.token) {
                  req = req.clone({
                    setHeaders: {
                      Authorization: "Token ".concat(this.token)
                    }
                  });
                }
              }

              return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.onCancelPendingRequests()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                  if (event.body.success == false) {
                    _this10.message.error(event.body.message);
                  }
                }

                return event;
              }), // Handle errors
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                if (error.status == 400) {
                  _this10.message.error(error.error.errors ? error.error.errors : error.error.message);
                } else if (error.status == 403) {
                  _this10.message.error("You don't have permission to access this");
                } else if (error.status == 401) {
                  // this.router.navigate(['/authentication/login']);
                  // if(JSON.parse(localStorage.getItem('biomech_user_data')).user_type.name == 'Stockists'){
                  _this10.router.navigate(['/authentication/login']); // } else{
                  //   this.router.navigate(['/authentication/employee-login']);
                  // }


                  _this10.message.error("Authorization failed, kindly login again");
                } else {
                  _this10.message.error('Something Went Wrong');
                }

                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
              }));
            } else {
              this.message.error('Kindly check your network');
            }
          } // Cancel Pending HTTP calls

        }, {
          key: "cancelPendingRequests",
          value: function cancelPendingRequests() {
            this.pendingHTTPRequests$.next();
          }
        }, {
          key: "onCancelPendingRequests",
          value: function onCancelPendingRequests() {
            return this.pendingHTTPRequests$.asObservable();
          }
        }]);

        return CustomInterceptor;
      }();

      CustomInterceptor.ɵfac = function CustomInterceptor_Factory(t) {
        return new (t || CustomInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]));
      };

      CustomInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: CustomInterceptor,
        factory: CustomInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./service/http.service */
      "9NvV");
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/_createClass(function AppComponent(HttpService, permissionsService) {
        var _this11 = this;

        _classCallCheck(this, AppComponent);

        this.HttpService = HttpService;
        this.permissionsService = permissionsService;

        if (localStorage.getItem('iyc_user_data')) {
          var permissions = JSON.parse(localStorage.getItem('iyc_user_data')).permissions; // console.log(permissions);

          if (permissions) {
            permissions.push('');
            this.permissionsService.loadPermissions(permissions);
          }
        } // console.log(this.permissionsService);
        // console.log(permissions);


        this.UserPermissionDataSubscription = this.HttpService.globalUserPermissionsData.subscribe(function (value) {
          // value.push('')
          _this11.permissionsService.loadPermissions(value);
        });
      });

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html'
          }]
        }], function () {
          return [{
            type: _service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
          }, {
            type: ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Ueqm":
    /*!**************************************************************!*\
      !*** ./src/app/layouts/full-layout/full-layout.component.ts ***!
      \**************************************************************/

    /*! exports provided: FullLayoutComponent */

    /***/
    function Ueqm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FullLayoutComponent", function () {
        return FullLayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var FullLayoutComponent = /*#__PURE__*/_createClass(function FullLayoutComponent() {
        _classCallCheck(this, FullLayoutComponent);
      });

      FullLayoutComponent.ɵfac = function FullLayoutComponent_Factory(t) {
        return new (t || FullLayoutComponent)();
      };

      FullLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FullLayoutComponent,
        selectors: [["app-full-layout"]],
        decls: 1,
        vars: 0,
        template: function FullLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullLayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-full-layout',
            templateUrl: './full-layout.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "UlaD":
    /*!************************************************************!*\
      !*** ./src/app/shared/template/search/search.component.ts ***!
      \************************************************************/

    /*! exports provided: SearchComponent */

    /***/
    function UlaD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
        return SearchComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng-zorro-antd/input */
      "PTRe");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/avatar */
      "ZE2D");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../pipes/search.pipe */
      "WfBE");

      function SearchComponent_ng_container_3_h5_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Files");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SearchComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;
          var count_r6 = ctx.ngForOf;
          var i_r7 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r7 < 1 && count_r6.length !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzIcon", item_r5.icon)("ngClass", item_r5.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.desc);
        }
      }

      function SearchComponent_ng_container_6_h5_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Members");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SearchComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var item_r9 = ctx.$implicit;
          var count_r10 = ctx.ngForOf;
          var i_r11 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r11 < 1 && count_r10.length !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSrc", item_r9.img);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.desc);
        }
      }

      function SearchComponent_ng_container_9_h5_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "News");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SearchComponent_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var item_r13 = ctx.$implicit;
          var count_r14 = ctx.ngForOf;
          var i_r15 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r15 < 1 && count_r14.length !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSrc", item_r13.img);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.desc);
        }
      }

      function SearchComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 17);
        }
      }

      var SearchComponent = /*#__PURE__*/_createClass(function SearchComponent() {
        _classCallCheck(this, SearchComponent);

        this.files = [{
          title: 'Quater Report.exl',
          desc: 'by Finance',
          icon: 'file-excel',
          color: 'ant-avatar-' + 'cyan'
        }, {
          title: 'Documentaion.docx',
          desc: 'by Developers',
          icon: 'file-word',
          color: 'ant-avatar-' + 'blue'
        }, {
          title: 'Recipe.txt',
          desc: 'by The Chef',
          icon: 'file-text',
          color: 'ant-avatar-' + 'purple'
        }, {
          title: 'Project Requirement.pdf',
          desc: 'by Project Manager',
          icon: 'file-pdf',
          color: 'ant-avatar-' + 'red'
        }];
        this.members = [{
          title: 'Erin Gonzales',
          desc: 'UI/UX Designer',
          img: 'assets/images/avatars/thumb-1.jpg'
        }, {
          title: 'Darryl Day',
          desc: 'Software Engineer',
          img: 'assets/images/avatars/thumb-2.jpg'
        }, {
          title: 'Marshall Nichols ',
          desc: 'Data Analyst',
          img: 'assets/images/avatars/thumb-3.jpg'
        }];
        this.feeds = [{
          title: '5 Best Handwriting Fonts',
          desc: '25 Nov 2018',
          img: 'assets/images/others/img-1.jpg'
        }];
      });

      SearchComponent.ɵfac = function SearchComponent_Factory(t) {
        return new (t || SearchComponent)();
      };

      SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SearchComponent,
        selectors: [["app-search"]],
        decls: 13,
        vars: 17,
        consts: [[3, "nzPrefix"], ["type", "text", "nz-input", "", "placeholder", "Search", 3, "ngModel", "ngModelChange"], [1, "m-t-30"], [4, "ngFor", "ngForOf"], ["class", "d-flex m-b-30", 4, "ngFor", "ngForOf"], ["prefixTemplate", ""], ["class", "m-b-20", 4, "ngIf"], [1, "d-flex", "m-b-30"], [3, "nzIcon", "ngClass"], [1, "m-l-15"], [1, "text-dark", "m-b-0", "font-weight-semibold"], [1, "m-b-0", "text-muted", "font-size-13"], [1, "m-b-20"], [3, "nzSrc"], [1, "m-b-0", "text-dark", "font-weight-semibold"], ["nz-icon", "", "nzType", "clock-circle", "theme", "outline"], [1, "m-l-10"], ["nz-icon", "", "nzType", "search"]],
        template: function SearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-input-group", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_1_listener($event) {
              return ctx.search = $event;
            });

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
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPrefix", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 5, ctx.files, "title", ctx.search));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](7, 9, ctx.members, "title", ctx.search));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 13, ctx.feeds, "title", ctx.search));
          }
        },
        directives: [ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__["NzInputGroupComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__["NzInputGroupWhitSuffixOrPrefixDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_5__["NzAvatarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"]],
        pipes: [_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_7__["SearchPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-search',
            templateUrl: './search.component.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Wdt6":
    /*!******************************************************************!*\
      !*** ./src/app/layouts/common-layout/common-layout.component.ts ***!
      \******************************************************************/

    /*! exports provided: CommonLayoutComponent */

    /***/
    function Wdt6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonLayoutComponent", function () {
        return CommonLayoutComponent;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared/services/theme-constant.service */
      "PQ0Y");
      /* harmony import */


      var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/global.service */
      "0ZK0");
      /* harmony import */


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "PScX");
      /* harmony import */


      var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/service/http.service */
      "9NvV");
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");
      /* harmony import */


      var ngx_device_detector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-device-detector */
      "9YtQ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_template_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../shared/template/header/header.component */
      "Isfx");
      /* harmony import */


      var _shared_template_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../shared/template/side-nav/side-nav.component */
      "jnn0");
      /* harmony import */


      var _shared_template_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../shared/template/footer/footer.component */
      "okld");
      /* harmony import */


      var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/breadcrumb */
      "yNE/");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");

      function CommonLayoutComponent_div_4_div_1_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 15);
        }
      }

      function CommonLayoutComponent_div_4_div_1_h5_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.showBreadCrumb);
        }
      }

      function CommonLayoutComponent_div_4_div_1_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CommonLayoutComponent_div_4_div_1_nz_breadcrumb_item_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-breadcrumb-item", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var breadcrumb_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", breadcrumb_r9.url)("queryParams", breadcrumb_r9.params);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", breadcrumb_r9.label, " ");
        }
      }

      function CommonLayoutComponent_div_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1._currHeaderData == null ? null : ctx_r1._currHeaderData.home == null ? null : ctx_r1._currHeaderData.home.isVisible);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx_r1.breadcrumbs$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isSlash);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, ctx_r1.breadcrumbs$));
        }
      }

      function CommonLayoutComponent_div_4_div_2_h4_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var breadcrumbs_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", breadcrumbs_r11[breadcrumbs_r11.length - 1].label, "");
        }
      }

      function CommonLayoutComponent_div_4_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommonLayoutComponent_div_4_div_2_h4_1_Template, 2, 1, "h4", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r2.breadcrumbs$));
        }
      }

      function CommonLayoutComponent_div_4_h4_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var breadcrumbs_r12 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.showBreadCrumb ? "mt-4" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumbs_r12[breadcrumbs_r12.length - 1] == null ? null : breadcrumbs_r12[breadcrumbs_r12.length - 1].label);
        }
      }

      function CommonLayoutComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommonLayoutComponent_div_4_div_1_Template, 9, 8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CommonLayoutComponent_div_4_div_2_Template, 3, 3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CommonLayoutComponent_div_4_h4_3_Template, 2, 2, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !ctx_r0.showBreadCrumb ? "d-flex align-items-center" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showBreadCrumb);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.router.url.includes("dashboard"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx_r0.breadcrumbs$));
        }
      }

      var _c0 = function _c0(a0, a1, a2) {
        return {
          "is-folded": a0,
          "is-side-nav-dark": a1,
          "is-expand": a2
        };
      };

      var CommonLayoutComponent = /*#__PURE__*/function () {
        function CommonLayoutComponent(router, activatedRoute, themeService, globaldata, message, http, permissionsService, device) {
          var _this12 = this;

          _classCallCheck(this, CommonLayoutComponent);

          this.router = router;
          this.activatedRoute = activatedRoute;
          this.themeService = themeService;
          this.globaldata = globaldata;
          this.message = message;
          this.http = http;
          this.permissionsService = permissionsService;
          this.device = device;
          this.isSlash = false;
          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            var child = _this12.activatedRoute.firstChild;

            while (child) {
              if (child.firstChild) {
                child = child.firstChild;
              } else if (child.snapshot.data && child.snapshot.data['headerDisplay']) {
                return child.snapshot.data['headerDisplay'];
              } else {
                return null;
              }
            }

            return null;
          })).subscribe(function (data) {
            _this12.contentHeaderDisplay = data;
          });
        }

        _createClass(CommonLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            // console.log("This device id=>", this.device.getDeviceInfo(), this.device.device); 
            // alert(JSON.stringify(this.device.getDeviceInfo()))
            if (localStorage.getItem('iyc_user_token')) {
              this.VerifyUserFunction();
            } else {
              this.message.error('Authentication Data not Found, kindly login again');
              this.router.navigate(['/authentication/login']);
            } // alert('Common Layout working');


            this.breadcrumbs$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(new _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"](0, '/', '/')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
              return _this13.buildBreadCrumb(_this13.activatedRoute.root);
            }));
            this.themeService.isMenuFoldedChanges.subscribe(function (isFolded) {
              return _this13.isFolded = isFolded;
            });
            this.themeService.isSideNavDarkChanges.subscribe(function (isDark) {
              return _this13.isSideNavDark = isDark;
            });
            this.themeService.selectedHeaderColor.subscribe(function (color) {
              return _this13.selectedHeaderColor = color;
            });
            this.themeService.isExpandChanges.subscribe(function (isExpand) {
              return _this13.isExpand = isExpand;
            });
          }
        }, {
          key: "buildBreadCrumb",
          value: function buildBreadCrumb(route) {
            var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var breadcrumbs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            var label = '',
                path = '/',
                display = null,
                title,
                params = '';

            if (route.routeConfig) {
              if (route.routeConfig.data) {
                // console.log(route.routeConfig.path)
                label = route.routeConfig.data['title'];

                if (route.routeConfig.data['custom_url']) {
                  path += route.routeConfig.data['custom_url'];
                } else {
                  path += route.routeConfig.path;
                }

                if (route.routeConfig.data['params']) {
                  params = route.routeConfig.data['params'];
                }

                if (route.routeConfig.data['parent'] && route.routeConfig.data['title']) {
                  this.isSlash = true;
                } else if (route.routeConfig.data['parent'] && !route.routeConfig.data['title']) {
                  this.isSlash = false;
                }

                this.showBreadCrumb = route.routeConfig.data['parent'];
                this._currHeaderData = route.routeConfig.data;
              }
            }

            var nextUrl = path && path !== '/select-language' ? "".concat(url).concat(path) : url;
            var breadcrumb = {
              label: label,
              url: nextUrl,
              title: title
            };
            var newBreadcrumbs = label ? [].concat(_toConsumableArray(breadcrumbs), [breadcrumb]) : _toConsumableArray(breadcrumbs);

            if (route.firstChild) {
              return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
            }

            return newBreadcrumbs;
          }
        }, {
          key: "VerifyUserFunction",
          value: function VerifyUserFunction() {
            var _this14 = this;

            // var end_point = JSON.parse(localStorage.getItem('biomech_user_data')).user_type.name == 'Stockists' ? 'stockist/client-auth/verify-user' : 'employee/employee-auth/verify-user'
            var end_point = '/users/v1/auth/verify-user';
            var device_type = this.globaldata.checkBrowserType();
            var data = new FormData();
            this.http.verifyUserAPI(end_point).subscribe(function (res) {
              if (res.success) {
                _this14.globaldata.sendUserData(res.data); // Get GlobalAccount Data


                _this14.getGlobalAccData();

                localStorage.setItem("iyc_user_data", JSON.stringify(res));

                if (localStorage.getItem('iyc_user_data')) {
                  var permissions = JSON.parse(localStorage.getItem('iyc_user_data')).permissions;
                  permissions.push('');

                  _this14.permissionsService.loadPermissions(permissions);
                }

                _this14.UserPermissionDataSubscription = _this14.http.globalUserPermissionsData.subscribe(function (value) {
                  _this14.permissionsService.loadPermissions(value);
                });
              } else {
                _this14.router.navigate(['/authentication/employee-login']);

                localStorage.removeItem('iyc_user_token');
                localStorage.removeItem('iyc_user_data');
                localStorage.removeItem('appLanguage');
              }
            }, function (err) {
              _this14.router.navigate(['/authentication/login']);

              localStorage.removeItem('iyc_user_token');
              localStorage.removeItem('iyc_user_data');
              localStorage.removeItem('menuItem');
            });
          }
        }, {
          key: "getGlobalAccData",
          value: function getGlobalAccData() {
            var _this15 = this;

            var data = {};
            this.http.getGlobalAdminData(data).subscribe(function (res) {
              if (res.success) {
                _this15._currLang = localStorage.getItem('appLanguage');
                _this15.globalAccData = res.data;

                _this15.globaldata.sendGlobalAccountData(res.data);

                localStorage.setItem('global_account_data', JSON.stringify(res.data));
              }
            });
          }
        }]);

        return CommonLayoutComponent;
      }();

      CommonLayoutComponent.ɵfac = function CommonLayoutComponent_Factory(t) {
        return new (t || CommonLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_3__["ThemeConstantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_8__["DeviceDetectorService"]));
      };

      CommonLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CommonLayoutComponent,
        selectors: [["app-common-layout"]],
        decls: 8,
        vars: 10,
        consts: [[3, "ngClass"], [1, "d-md-block", "d-none"], [1, "page-container", "pt-3", "pt-5"], ["class", "bg-white main-content h-unset pt-5 pb-3", 3, "ngClass", 4, "ngIf"], [1, "main-content", "p-3", "py-5", 3, "ngClass"], [1, "d-md-none", "d-flex"], [1, "bg-white", "main-content", "h-unset", "pt-5", "pb-3", 3, "ngClass"], ["class", "main-content-header d-flex justify-content-between mb-0 py-2 flex-wrap", 4, "ngIf"], [4, "ngIf"], ["class", "font-weight-semibold d-none", 3, "ngClass", 4, "ngIf"], [1, "main-content-header", "d-flex", "justify-content-between", "mb-0", "py-2", "flex-wrap"], [1, "d-flex", "flex-wrap", "align-items-center"], ["class", "font-size-16 font-weight-semibold mx-3", "routerLink", "/dashboard/home", "nz-icon", "", "nzType", "home", "nzTheme", "fill", 4, "ngIf"], ["class", "page-title mr-2 mb-0", 4, "ngIf"], ["class", "pl-2", 4, "ngFor", "ngForOf"], ["routerLink", "/dashboard/home", "nz-icon", "", "nzType", "home", "nzTheme", "fill", 1, "font-size-16", "font-weight-semibold", "mx-3"], [1, "page-title", "mr-2", "mb-0"], [1, "pl-2"], [3, "routerLink", "queryParams"], ["class", "font-weight-semibold", 4, "ngIf"], [1, "font-weight-semibold"], [1, "font-weight-semibold", "d-none", 3, "ngClass"]],
        template: function CommonLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("common-layout ", "is-" + ctx.selectedHeaderColor, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c0, ctx.isFolded, ctx.isSideNavDark, ctx.isExpand));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contentHeaderDisplay !== "none");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.contentHeaderDisplay !== "none" ? "pt-5" : "");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _shared_template_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _shared_template_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_11__["SideNavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_template_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_13__["NzBreadCrumbComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__["NzIconDirective"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_13__["NzBreadCrumbItemComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonLayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-common-layout',
            templateUrl: './common-layout.component.html'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_3__["ThemeConstantService"]
          }, {
            type: src_app_service_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]
          }, {
            type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"]
          }, {
            type: src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]
          }, {
            type: ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsService"]
          }, {
            type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_8__["DeviceDetectorService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "WfBE":
    /*!*********************************************!*\
      !*** ./src/app/shared/pipes/search.pipe.ts ***!
      \*********************************************/

    /*! exports provided: SearchPipe */

    /***/
    function WfBE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchPipe", function () {
        return SearchPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SearchPipe = /*#__PURE__*/function () {
        function SearchPipe() {
          _classCallCheck(this, SearchPipe);
        }

        _createClass(SearchPipe, [{
          key: "transform",
          value: function transform(value, keys, term) {
            if (!term) return value;
            return (value || []).filter(function (item) {
              return keys.split(',').some(function (key) {
                return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key]);
              });
            });
          }
        }]);

        return SearchPipe;
      }();

      SearchPipe.ɵfac = function SearchPipe_Factory(t) {
        return new (t || SearchPipe)();
      };

      SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "search",
        type: SearchPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'search'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd/i18n */
      "Rm4T");
      /* harmony import */


      var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/breadcrumb */
      "yNE/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/locales/en */
      "tAZD");
      /* harmony import */


      var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _shared_template_template_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./shared/template/template.module */
      "u6u5");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./shared/shared.module */
      "PCNd");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./layouts/common-layout/common-layout.component */
      "Wdt6");
      /* harmony import */


      var _layouts_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./layouts/full-layout/full-layout.component */
      "Ueqm");
      /* harmony import */


      var ng_chartjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-chartjs */
      "jdj2");
      /* harmony import */


      var _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./shared/services/theme-constant.service */
      "PQ0Y");
      /* harmony import */


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "PScX");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _service_custom_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./service/custom.interceptor */
      "S9YW");
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @agm/core */
      "pxUr");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/service-worker */
      "Jho9");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR"); // import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
      // import { NgxGoogleMapModule } from 'ngx-google-map';


      Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6___default.a);

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__["NZ_I18N"],
          useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__["en_US"]
        }, {
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["PathLocationStrategy"]
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HTTP_INTERCEPTORS"],
          useClass: _service_custom_interceptor__WEBPACK_IMPORTED_MODULE_17__["CustomInterceptor"],
          multi: true
        }, // {
        //     provide: DeviceDetectorService,
        //     useClass: UniversalDeviceDetectorService
        // },
        _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_14__["ThemeConstantService"], ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__["NzMessageService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["NzBreadCrumbModule"], _shared_template_template_module__WEBPACK_IMPORTED_MODULE_8__["TemplateModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__["NzMessageModule"], ng_chartjs__WEBPACK_IMPORTED_MODULE_13__["NgChartjsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_19__["AgmCoreModule"].forRoot({
          apiKey: '',
          libraries: ['drawing']
        }), // NgxGoogleMapModule,
        // NgxGoogleMapsModule,
        // NgxGoogleMapsModule.forRoot({
        //     key: '', // your Google API key retrieved from the Google Developer Console
        //     language: 'en', // see https://developers.google.com/maps/documentation/javascript/localization
        //     libraries: 'geometry', // see https://developers.google.com/maps/documentation/javascript/libraries
        //     loadScript: true, // whether or not the <script> tag of the Google Maps API should be loaded
        //     options: { panControl: true, panControlOptions: { position: 9 } }, // see https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapOptions
        //     region: 'US', // see https://developers.google.com/maps/documentation/javascript/localization#Region
        //   }),
        ngx_permissions__WEBPACK_IMPORTED_MODULE_18__["NgxPermissionsModule"].forRoot(), _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["ServiceWorkerModule"].register('ngsw-worker.js', {
          enabled: src_environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].production,
          // Register the ServiceWorker as soon as the application is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_11__["CommonLayoutComponent"], _layouts_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_12__["FullLayoutComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["NzBreadCrumbModule"], _shared_template_template_module__WEBPACK_IMPORTED_MODULE_8__["TemplateModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__["NzMessageModule"], ng_chartjs__WEBPACK_IMPORTED_MODULE_13__["NgChartjsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_19__["AgmCoreModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_18__["NgxPermissionsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["ServiceWorkerModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_11__["CommonLayoutComponent"], _layouts_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_12__["FullLayoutComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["NzBreadCrumbModule"], _shared_template_template_module__WEBPACK_IMPORTED_MODULE_8__["TemplateModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__["NzMessageModule"], ng_chartjs__WEBPACK_IMPORTED_MODULE_13__["NgChartjsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_19__["AgmCoreModule"].forRoot({
              apiKey: '',
              libraries: ['drawing']
            }), // NgxGoogleMapModule,
            // NgxGoogleMapsModule,
            // NgxGoogleMapsModule.forRoot({
            //     key: '', // your Google API key retrieved from the Google Developer Console
            //     language: 'en', // see https://developers.google.com/maps/documentation/javascript/localization
            //     libraries: 'geometry', // see https://developers.google.com/maps/documentation/javascript/libraries
            //     loadScript: true, // whether or not the <script> tag of the Google Maps API should be loaded
            //     options: { panControl: true, panControlOptions: { position: 9 } }, // see https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapOptions
            //     region: 'US', // see https://developers.google.com/maps/documentation/javascript/localization#Region
            //   }),
            ngx_permissions__WEBPACK_IMPORTED_MODULE_18__["NgxPermissionsModule"].forRoot(), _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["ServiceWorkerModule"].register('ngsw-worker.js', {
              enabled: src_environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].production,
              // Register the ServiceWorker as soon as the application is stable
              // or after 30 seconds (whichever comes first).
              registrationStrategy: 'registerWhenStable:30000'
            })],
            exports: [// ProfileImgPipePipe
            ],
            providers: [{
              provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__["NZ_I18N"],
              useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__["en_US"]
            }, {
              provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"],
              useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["PathLocationStrategy"]
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HTTP_INTERCEPTORS"],
              useClass: _service_custom_interceptor__WEBPACK_IMPORTED_MODULE_17__["CustomInterceptor"],
              multi: true
            }, // {
            //     provide: DeviceDetectorService,
            //     useClass: UniversalDeviceDetectorService
            // },
            _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_14__["ThemeConstantService"], ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__["NzMessageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "jnn0":
    /*!****************************************************************!*\
      !*** ./src/app/shared/template/side-nav/side-nav.component.ts ***!
      \****************************************************************/

    /*! exports provided: SideNavComponent */

    /***/
    function jnn0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SideNavComponent", function () {
        return SideNavComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _side_nav_routes_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./side-nav-routes.config */
      "ztfw");
      /* harmony import */


      var _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/theme-constant.service */
      "PQ0Y");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var _directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../directives/side-nav.directive */
      "IyZr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");

      function SideNavComponent_ng_container_2_li_1_a_1_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", item_r1.icon)("theme", item_r1.iconTheme);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return [a0, a1];
      };

      function SideNavComponent_ng_container_2_li_1_a_1_i_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, item_r1.iconTheme, item_r1.icon));
        }
      }

      function SideNavComponent_ng_container_2_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_a_1_i_1_Template, 1, 2, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_li_1_a_1_i_2_Template, 1, 4, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.iconType == "nzIcon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.iconType == "fontawesome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
        }
      }

      function SideNavComponent_ng_container_2_li_1_a_2_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", item_r1.icon)("theme", item_r1.iconTheme);
        }
      }

      function SideNavComponent_ng_container_2_li_1_a_2_i_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, item_r1.iconTheme, item_r1.icon));
        }
      }

      function SideNavComponent_ng_container_2_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_ng_container_2_li_1_a_2_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r15.closeMobileMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_a_2_i_1_Template, 1, 2, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_li_1_a_2_i_2_Template, 1, 4, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r1.path);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.iconType == "nzIcon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.iconType == "fontawesome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_li_1_a_1_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
        }

        if (rf & 2) {
          var subItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", subItem_r19.icon)("theme", subItem_r19.iconTheme);
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_li_1_a_1_i_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
        }

        if (rf & 2) {
          var subItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, subItem_r19.iconTheme, subItem_r19.icon));
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_li_1_a_1_i_1_Template, 1, 2, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_li_1_ul_3_li_1_a_1_i_2_Template, 1, 4, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r19.iconType == "nzIcon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r19.iconType == "fontawesome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subItem_r19.title);
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_li_1_a_2_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
        }

        if (rf & 2) {
          var subItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", subItem_r19.icon)("theme", subItem_r19.iconTheme);
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_li_1_a_2_i_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
        }

        if (rf & 2) {
          var subItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, subItem_r19.iconTheme, subItem_r19.icon));
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_ng_container_2_li_1_ul_3_li_1_a_2_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

            return ctx_r32.closeMobileMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_li_1_a_2_i_1_Template, 1, 2, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_li_1_ul_3_li_1_a_2_i_2_Template, 1, 4, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", subItem_r19.path);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r19.iconType == "nzIcon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r19.iconType == "fontawesome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subItem_r19.title);
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_li_1_a_1_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
        }

        if (rf & 2) {
          var subItem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", subItem_r36.icon)("theme", subItem_r36.iconTheme);
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_li_1_a_1_i_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
        }

        if (rf & 2) {
          var subItem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, subItem_r36.iconTheme, subItem_r36.icon));
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_li_1_a_1_i_1_Template, 1, 2, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_li_1_a_1_i_2_Template, 1, 4, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subItem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r36.iconType == "nzIcon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r36.iconType == "fontawesome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subItem_r36.title);
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_li_1_a_2_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
        }

        if (rf & 2) {
          var subItem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", subItem_r36.icon)("theme", subItem_r36.iconTheme);
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_li_1_a_2_i_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
        }

        if (rf & 2) {
          var subItem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, subItem_r36.iconTheme, subItem_r36.icon));
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_li_1_a_2_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);

            return ctx_r48.closeMobileMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_li_1_a_2_i_1_Template, 1, 2, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_li_1_a_2_i_2_Template, 1, 4, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subItem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", subItem_r36.path);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r36.iconType == "nzIcon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r36.iconType == "fontawesome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subItem_r36.title);
        }
      }

      var _c1 = function _c1() {
        return {
          exact: true
        };
      };

      function SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_li_1_a_1_Template, 6, 3, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_li_1_a_2_Template, 5, 4, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subItem_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", subItem_r36.submenu.length > 0 ? "ant-menu-submenu ant-menu-submenu-inline" : "ant-menu-item")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r36.submenu.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r36.submenu.length === 0);
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_li_1_Template, 3, 5, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", subItem_r19.submenu);
        }
      }

      var _c2 = function _c2() {
        return {
          exact: false
        };
      };

      function SideNavComponent_ng_container_2_li_1_ul_3_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_li_1_a_1_Template, 6, 3, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_li_1_ul_3_li_1_a_2_Template, 5, 4, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SideNavComponent_ng_container_2_li_1_ul_3_li_1_ul_3_Template, 2, 1, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subItem_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", subItem_r19.submenu.length > 0 ? "ant-menu-submenu ant-menu-submenu-inline" : "ant-menu-item")("routerLinkActive", subItem_r19.submenu.length > 0 ? "ant-menu-submenu-open" : "ant-menu-item-selected")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r19.submenu.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r19.submenu.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r19.submenu.length > 0);
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_li_1_Template, 4, 7, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.submenu);
        }
      }

      function SideNavComponent_ng_container_2_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_a_1_Template, 6, 3, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_li_1_a_2_Template, 5, 4, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SideNavComponent_ng_container_2_li_1_ul_3_Template, 2, 1, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r1.submenu.length > 0 ? "ant-menu-submenu ant-menu-submenu-inline" : "ant-menu-item")("routerLinkActive", item_r1.submenu.length > 0 ? "ant-menu-submenu-open" : "ant-menu-item-selected")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.submenu.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.submenu.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.submenu.length > 0);
        }
      }

      var _c3 = function _c3(a0) {
        return [a0];
      };

      function SideNavComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_Template, 4, 7, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c3, item_r1 == null ? null : item_r1.permission));
        }
      }

      var _c4 = function _c4(a0, a1) {
        return {
          "ant-menu-inline-collapsed": a0,
          "ant-menu-dark": a1
        };
      };

      var SideNavComponent = /*#__PURE__*/function () {
        function SideNavComponent(themeService) {
          _classCallCheck(this, SideNavComponent);

          this.themeService = themeService;
        }

        _createClass(SideNavComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.menuItems = _side_nav_routes_config__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (menuItem) {
              return menuItem;
            });
            this.themeService.isMenuFoldedChanges.subscribe(function (isFolded) {
              return _this16.isFolded = isFolded;
            });
            this.themeService.isExpandChanges.subscribe(function (isExpand) {
              return _this16.isExpand = isExpand;
            });
            this.themeService.isSideNavDarkChanges.subscribe(function (isDark) {
              return _this16.isSideNavDark = isDark;
            }); // console.log(this.menuItems);
          }
        }, {
          key: "closeMobileMenu",
          value: function closeMobileMenu() {
            if (window.innerWidth < 992) {
              this.isFolded = false;
              this.isExpand = !this.isExpand;
              this.themeService.toggleExpand(this.isExpand);
              this.themeService.toggleFold(this.isFolded);
            }
          }
        }]);

        return SideNavComponent;
      }();

      SideNavComponent.ɵfac = function SideNavComponent_Factory(t) {
        return new (t || SideNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_2__["ThemeConstantService"]));
      };

      SideNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SideNavComponent,
        selectors: [["app-sidenav"]],
        decls: 3,
        vars: 5,
        consts: [["sideNav", "", 1, "side-nav"], [1, "ant-menu", "ant-menu-root", "ant-menu-inline", "side-nav-menu", 3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngxPermissionsOnly"], [3, "ngClass", "routerLinkActive", "routerLinkActiveOptions"], ["href", "javascript:void(0);", "class", "ant-menu-submenu-title", 4, "ngIf"], [3, "routerLink", "click", 4, "ngIf"], ["class", "ant-menu ant-menu-inline ant-menu-sub dropdown-menu", 4, "ngIf"], ["href", "javascript:void(0);", 1, "ant-menu-submenu-title"], ["nz-icon", "", 3, "nzType", "theme", 4, "ngIf"], ["class", "m-r-10", 3, "ngClass", 4, "ngIf"], [1, "ant-menu-submenu-arrow"], ["nz-icon", "", 3, "nzType", "theme"], [1, "m-r-10", 3, "ngClass"], [3, "routerLink", "click"], [1, "ant-menu", "ant-menu-inline", "ant-menu-sub", "dropdown-menu"], [3, "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0);", "class", "ant-menu-submenu-title p-l-50", 4, "ngIf"], ["class", "p-l-30", 3, "routerLink", "click", 4, "ngIf"], ["href", "javascript:void(0);", 1, "ant-menu-submenu-title", "p-l-50"], [1, "p-l-30", 3, "routerLink", "click"], ["routerLinkActive", "ant-menu-item-selected", 3, "ngClass", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], ["routerLinkActive", "ant-menu-item-selected", 3, "ngClass", "routerLinkActiveOptions"], ["class", "p-l-50", 3, "routerLink", "click", 4, "ngIf"], [1, "p-l-50", 3, "routerLink", "click"]],
        template: function SideNavComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perfect-scrollbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_Template, 2, 3, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c4, ctx.isFolded, ctx.isSideNavDark));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
          }
        },
        directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarComponent"], _directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_4__["SideNavDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxPermissionsDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sidenav',
            templateUrl: './side-nav.component.html'
          }]
        }], function () {
          return [{
            type: _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_2__["ThemeConstantService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "okld":
    /*!************************************************************!*\
      !*** ./src/app/shared/template/footer/footer.component.ts ***!
      \************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function okld(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/service/global.service */
      "0ZK0");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd/radio */
      "bE2y");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");

      var FooterComponent = /*#__PURE__*/function () {
        // about-party, home    (Voters)
        function FooterComponent(global, router) {
          _classCallCheck(this, FooterComponent);

          this.global = global;
          this.router = router;
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log('res');
            this.radioValue = localStorage.getItem('menuItem') ? localStorage.getItem('menuItem') : 'voter'; // this.global.globalNavValue.subscribe(res=>{
            //     console.log(res);
            //     if(res){
            //         this.radioValue = res;
            //     }else{
            //         this.global.setCurrNavValue('home') 
            //     }
            // })
          }
        }, {
          key: "changeAppNav",
          value: function changeAppNav() {
            // this.radioValue = event
            console.log(this.radioValue); // this.global.setCurrNavValue(this.radioValue)

            localStorage.setItem('menuItem', this.radioValue);
            this.router.navigateByUrl("/" + this.radioValue);
          }
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 23,
        vars: 5,
        consts: [[1, "footer"], [1, "footer-content", "justify-content-between", "w-100"], [1, "d-flex", "justify-content-between", "w-100", 3, "ngModel", "ngModelChange"], ["nz-radio-button", "", 2, "border", "0", 3, "nzValue"], [1, "d-flex", "flex-column", 2, "font", "small-caption"], ["nz-icon", "", "nzType", "audit", "nzTheme", "outline", 1, "font-size-22"], [1, "font-size-12", "mt-2"], ["nz-icon", "", "nzType", "schedule", "nzTheme", "outline", 1, "font-size-22"], ["nz-icon", "", "nzType", "reconciliation", "nzTheme", "outline", 1, "font-size-22"], ["nz-icon", "", "nzType", "more", "nzTheme", "outline", 1, "font-size-22"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-radio-group", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FooterComponent_Template_nz_radio_group_ngModelChange_2_listener($event) {
              return ctx.radioValue = $event;
            })("ngModelChange", function FooterComponent_Template_nz_radio_group_ngModelChange_2_listener() {
              return ctx.changeAppNav();
            });

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
          }

          if (rf & 2) {
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
          }
        },
        directives: [ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_3__["NzRadioGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_3__["NzRadioComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_3__["NzRadioButtonDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html'
          }]
        }], function () {
          return [{
            type: src_app_service_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "puSG":
    /*!*****************************************************!*\
      !*** ./src/app/shared/routes/full-layout.routes.ts ***!
      \*****************************************************/

    /*! exports provided: FullLayout_ROUTES */

    /***/
    function puSG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FullLayout_ROUTES", function () {
        return FullLayout_ROUTES;
      });

      var FullLayout_ROUTES = [{
        path: 'authentication',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | authentication-authentication-module */
          [__webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~home-~c8bb761b"), __webpack_require__.e("default~authentication-authentication-module~dashboard-dashboard-module~profile-profile-module~task-~87a63fe1"), __webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~posts~16928289"), __webpack_require__.e("default~account-account-module~authentication-authentication-module~dashboard-dashboard-module~posts~bac7c449"), __webpack_require__.e("authentication-authentication-module")]).then(__webpack_require__.bind(null,
          /*! ../../authentication/authentication.module */
          "OpKh")).then(function (m) {
            return m.AuthenticationModule;
          });
        }
      }];
      /***/
    },

    /***/
    "u6u5":
    /*!****************************************************!*\
      !*** ./src/app/shared/template/template.module.ts ***!
      \****************************************************/

    /*! exports provided: TemplateModule */

    /***/
    function u6u5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplateModule", function () {
        return TemplateModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared.module */
      "PCNd");
      /* harmony import */


      var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/avatar */
      "ZE2D");
      /* harmony import */


      var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/badge */
      "SKKP");
      /* harmony import */


      var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/radio */
      "bE2y");
      /* harmony import */


      var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/dropdown */
      "Nqz0");
      /* harmony import */


      var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/list */
      "Ff2k");
      /* harmony import */


      var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/drawer */
      "F6ss");
      /* harmony import */


      var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/divider */
      "5vDB");
      /* harmony import */


      var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/switch */
      "EGpF");
      /* harmony import */


      var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/input */
      "PTRe");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./header/header.component */
      "Isfx");
      /* harmony import */


      var _search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./search/search.component */
      "UlaD");
      /* harmony import */


      var _quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./quick-view/quick-view.component */
      "ASAD");
      /* harmony import */


      var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./side-nav/side-nav.component */
      "jnn0");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./footer/footer.component */
      "okld");
      /* harmony import */


      var _directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../directives/side-nav.directive */
      "IyZr");
      /* harmony import */


      var _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../services/theme-constant.service */
      "PQ0Y");
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ng-zorro-antd/checkbox */
      "TaO5");

      var antdModule = [ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__["NzAvatarModule"], ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_5__["NzBadgeModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__["NzRadioModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_7__["NzDropDownModule"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__["NzListModule"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_9__["NzDrawerModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_10__["NzDividerModule"], ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_11__["NzSwitchModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__["NzInputModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonModule"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_23__["NzCheckboxModule"]];

      var TemplateModule = /*#__PURE__*/_createClass(function TemplateModule() {
        _classCallCheck(this, TemplateModule);
      });

      TemplateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TemplateModule
      });
      TemplateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TemplateModule_Factory(t) {
          return new (t || TemplateModule)();
        },
        providers: [_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_20__["ThemeConstantService"]],
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]].concat(antdModule, [_angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_21__["NgxPermissionsModule"].forChild()]), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TemplateModule, {
          declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"], _quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_16__["QuickViewComponent"], _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_17__["SideNavComponent"], _directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_19__["SideNavDirective"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__["NzAvatarModule"], ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_5__["NzBadgeModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__["NzRadioModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_7__["NzDropDownModule"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__["NzListModule"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_9__["NzDrawerModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_10__["NzDividerModule"], ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_11__["NzSwitchModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__["NzInputModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonModule"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_23__["NzCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_21__["NgxPermissionsModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"], _quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_16__["QuickViewComponent"], _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_17__["SideNavComponent"], _directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_19__["SideNavDirective"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplateModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"], _quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_16__["QuickViewComponent"], _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_17__["SideNavComponent"], _directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_19__["SideNavDirective"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]].concat(antdModule, [_angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_21__["NgxPermissionsModule"].forChild()]),
            declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"], _quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_16__["QuickViewComponent"], _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_17__["SideNavComponent"], _directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_19__["SideNavDirective"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"]],
            providers: [_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_20__["ThemeConstantService"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _layouts_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layouts/full-layout/full-layout.component */
      "Ueqm");
      /* harmony import */


      var _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./layouts/common-layout/common-layout.component */
      "Wdt6");
      /* harmony import */


      var _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/routes/full-layout.routes */
      "puSG");
      /* harmony import */


      var _shared_routes_common_layout_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shared/routes/common-layout.routes */
      "G7zf");
      /* harmony import */


      var _authentication_error_1_error_1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./authentication/error-1/error-1.component */
      "zjjP");

      var appRoutes = [{
        path: '',
        // redirectTo: '/dashboard/home',
        redirectTo: '/voter',
        pathMatch: 'full'
      }, {
        path: '',
        component: _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_3__["CommonLayoutComponent"],
        children: _shared_routes_common_layout_routes__WEBPACK_IMPORTED_MODULE_5__["CommonLayout_ROUTES"]
      }, {
        path: '',
        component: _layouts_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_2__["FullLayoutComponent"],
        children: _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_4__["FullLayout_ROUTES"]
      }, {
        path: '**',
        component: _authentication_error_1_error_1_component__WEBPACK_IMPORTED_MODULE_6__["Error1Component"]
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"],
          anchorScrolling: 'enabled',
          scrollPositionRestoration: 'enabled'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
              preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"],
              anchorScrolling: 'enabled',
              scrollPositionRestoration: 'enabled'
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zjjP":
    /*!*************************************************************!*\
      !*** ./src/app/authentication/error-1/error-1.component.ts ***!
      \*************************************************************/

    /*! exports provided: Error1Component */

    /***/
    function zjjP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Error1Component", function () {
        return Error1Component;
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


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");

      var Error1Component = /*#__PURE__*/function () {
        function Error1Component(router) {
          _classCallCheck(this, Error1Component);

          this.router = router;

          if (!JSON.parse(localStorage.getItem('iyc_user_data'))) {
            this.router.navigate(["/authentication/login"]);
          }
        }

        _createClass(Error1Component, [{
          key: "onClickRedirectToAssignedRouter",
          value: function onClickRedirectToAssignedRouter() {
            var _a, _b, _c, _d, _e, _f;

            var res = JSON.parse(localStorage.getItem('iyc_user_data')); // if(!JSON.parse(localStorage.getItem('iyc_user_data')){
            //     this.router.navigate(["/authentication/login"]);
            // }
            // console.log(res?.permissions.length == 0);

            if ((res === null || res === void 0 ? void 0 : res.permissions.length) == 0) {
              localStorage.removeItem("iyc_user_data");
              res = null; // this.router.navigate(["/authentication/login"]);
              // return;
            }

            if (!res) {
              this.router.navigate(["/authentication/login"]);
              return;
            }

            if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.user_type) === null || _b === void 0 ? void 0 : _b.name) == 'Superuser') {
              this.router.navigate(["/voter"]);
            } else if (((_d = (_c = res.data) === null || _c === void 0 ? void 0 : _c.user_type) === null || _d === void 0 ? void 0 : _d.name) == 'Data Operator') {
              this.router.navigate(["/voter"]);
            } else if (((_f = (_e = res.data) === null || _e === void 0 ? void 0 : _e.user_type) === null || _f === void 0 ? void 0 : _f.name) == 'Account Manager') {
              this.router.navigate(["/accounts/vouchers"]);
            } else {
              this.router.navigate(["/authentication/login"]);
            }
          }
        }]);

        return Error1Component;
      }();

      Error1Component.ɵfac = function Error1Component_Factory(t) {
        return new (t || Error1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      Error1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Error1Component,
        selectors: [["ng-component"]],
        decls: 28,
        vars: 0,
        consts: [[1, "container-fluid", "p-v-20", "h-100"], [1, "d-flex", "flex-column", "justify-content-between", "h-100"], [1, "d-none", "d-md-block", "p-h-40"], ["alt", "", "src", "assets/images/logo/logo.png", 1, "img-fluid"], [1, "container"], [1, "row", "align-items-center"], [1, "col-md-5"], [1, "p-v-30"], [1, "font-weight-semibold", "display-1", "text-primary", "lh-1-2"], [1, "font-weight-light", "font-size-30"], [1, "lead", "m-b-30"], ["nz-button", "", "nzType", "primary", 3, "click"], [1, "col-md-6", "m-l-auto"], ["src", "assets/images/others/error-1.png", "alt", "", 1, "img-fluid"], [1, "d-none", "d-md-flex", "p-h-40", "justify-content-between"], [1, ""], [1, "list-inline"], [1, "list-inline-item"], ["href", "", 1, "text-dark", "text-link"]],
        template: function Error1Component_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Error1Component_Template_a_click_14_listener() {
              return ctx.onClickRedirectToAssignedRouter();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\xA9 2019 ThemeNate");

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
          }
        },
        directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Error1Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: './error-1.component.html'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    },

    /***/
    "ztfw":
    /*!********************************************************************!*\
      !*** ./src/app/shared/template/side-nav/side-nav-routes.config.ts ***!
      \********************************************************************/

    /*! exports provided: ROUTES */

    /***/
    function ztfw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });

      var ROUTES = [{
        path: "/dashboard/home",
        title: "Dashboard",
        iconType: "nzIcon",
        iconTheme: "outline",
        icon: "dashboard",
        permission: localStorage.getItem('globalToggleValue') == '1' ? false : '',
        submenu: []
      }, {
        path: "/media-account",
        title: "Social Media List",
        iconType: "nzIcon",
        iconTheme: "outline",
        icon: "share-alt",
        permission: localStorage.getItem('globalToggleValue') == '1' ? false : '',
        submenu: []
      }, {
        path: "/voter",
        title: "Voter",
        iconType: "nzIcon",
        iconTheme: "outline",
        icon: "user-add",
        permission: '',
        submenu: []
      }, {
        path: "/team-management",
        title: "Team Management",
        iconType: "nzIcon",
        iconTheme: "outline",
        icon: "team",
        permission: '',
        submenu: []
      }, {
        path: "/task-management",
        title: "Task Management",
        iconType: "nzIcon",
        iconTheme: "outline",
        icon: "solution",
        permission: '',
        submenu: []
      }, {
        path: "/profile",
        title: "More",
        iconType: "nzIcon",
        iconTheme: "outline",
        icon: "dashboard",
        permission: '',
        submenu: []
      }];
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map