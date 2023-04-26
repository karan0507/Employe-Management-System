import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpErrorResponse, HttpParams } from "@angular/common/http";
import { ReplaySubject, fromEvent, Observable, merge, Observer } from "rxjs";
import { map } from "rxjs/operators";
// import { map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  globalUserPermissionsData = new ReplaySubject<any>();
  // https://api.chatiyc.com/admin
  // url = 'https://iycapi.dixitsir.com/'   
  url ='http://localhost:8000/'
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
      
  constructor(private http: HttpClient) { }

  public setPermissionValue(data): any {
    this.globalUserPermissionsData.next(data);
  }

  public UserLoginSendOTP(data, end_point): any {
    const headers = new HttpHeaders();
    return this.http.post(this.url + end_point, data, { headers: headers });
  }

  // verify OTP
  public verifyOTPAPI(data, end_point): any {
    const headers = new HttpHeaders();
    return this.http.post(this.url + end_point, data, { headers: headers });
  }

  public createOnline$() {
    return merge<boolean>(
      fromEvent(window, 'offline').pipe(map(() => false)),
      fromEvent(window, 'online').pipe(map(() => true)),
      new Observable((sub: Observer<boolean>) => {
        sub.next(navigator.onLine);
        sub.complete();
      })
    );
  }

  // verify User API
  public verifyUserAPI(end_point): any {
    return this.http.get(this.url + end_point);
  }

  // logout user
  public logoutUserAPI(end_point): any {
    const headers = new HttpHeaders();
    return this.http.get(this.url + end_point, { headers: headers });
  }

  public enrollVoterList(toggle) {
    // votes/get-enroller-votes-list?is_payment_recorded=true
    return this.http.get(this.url + `votes/get-enroller-votes-list`, { params: toggle });
  }

  public addVoterToList(data) {
    return this.http.post(this.url + `votes/add-enroller-votes`, data);
  }

  public getGlobalMaster(data, search_param?) {
    return this.http.get(this.url + `master/get-global-master/${data}`, {params: search_param});
    // master/get-global-master/:modelname
  }
  public vouchersList(data) {
    return this.http.get(this.url + 'account/get-account-list', { params: data })
  }

  public getGlobalUser(user, data?) {
    
    return this.http.get(this.url + 'users/get-global-user/' + user, {params: data})
  }

  public paymentOnCommission(data){
    return this.http.post(this.url + `votes/payment-enroller-votes`, data);
    // votes/payment-enroller-votes
  }
  // votes/add-enroller-votes
  public addEditVoucher(data) {
    return this.http.post(this.url + 'account/add-account', data)
  }

  public addEnroller(data) {
    return this.http.post(this.url + 'users/add-enroller', data)
  }

  public exportMaster(type){
    return this.http.get(this.url + 'account/export/'+ type,{responseType: 'blob' })
  }

  public addExpenseLedger(type, data){
    return this.http.post(this.url + 'account/add-'+ type + '-type', data)
  }

  public deleteAccount(id){
    return this.http.delete(this.url + 'account/delete-account/'+id)
  }

  public logout(){
    return this.http.get(this.url + 'users/auth/logout-user')
  }

  public getEnrollerData(data){
    return this.http.get(this.url + 'users/get-global-user/Enroller', {params:data})
  }

  public editEnrollerData(id,data){
    return this.http.put(this.url + 'users/edit-enroller/' + id , data)
  }

  public getOtpForEnroller(data){
    return this.http.post(this.url + 'users/iyc/send-otp', data)
  }

  public verifyOtpForEnroller(data){
    return this.http.post(this.url + 'users/iyc/verify-otp', data)
  }

  public getDashboardApiCount(){
    return this.http.get(this.url + 'votes/get-total-counts')
  }

  public getDashboardGraphCount(data){
    
    return this.http.get(this.url + 'votes/get-realtime-graph-data', {params:data})
  }

  public getDashboardTableData(){
    return this.http.get(this.url + 'votes/get-analytic-data')
  }

public getAssemblyDashboard(data?){
  return this.http.get(this.url + 'votes/get-assembly-candidate',{ params:data})
}

  public getDistrictWiseData(){
    return this.http.get(this.url + 'votes/get-district-candidate')
  }

  public getGSCandidateData(data?){
    return this.http.get(this.url + 'votes/get-gs-candidate', { params:data})
  }

  public getOurGraphData(data){
    return this.http.get(this.url + 'votes/get-our-graph-data', { params:data})
  }

  public getDailyVoteCount(data){
    return this.http.get(this.url + 'votes/get-day-wise-vote-count', { params:data})
  }

  public getInsightVotesGraph(data){
    return this.http.get(this.url + 'votes/get-vote-insight-graph', { params:data})
  }

  public exportMasterAPIWithMultipleFilters(data){
    return this.http.post(this.url + 'account/export-analytics-report', data,{responseType: 'blob' })
  }

  public generateDayWiseReport(data){
    return this.http.post(this.url + 'account/generate-day-wise-report', data,{responseType: 'blob' })
  }
  public generateDayWiseReportAssemblyDistrict(data){
    return this.http.post(this.url + 'account/generate-day-wise-district-assembly-report', data,{responseType: 'blob' })
  }

  public getDistrictVotes(){
    return this.http.get(this.url + 'votes/get-district-votes')
  }

  public getAssemblyVotes(){
    return this.http.get(this.url + 'votes/get-assembly-votes')
  }

  public getSPVotes(){
    return this.http.get(this.url + 'votes/get-candidate-votes')
  }
}
