import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { HttpService } from './http.service';
import * as CryptoJS from 'crypto-js';
import { saveAs } from "file-saver";
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  zoneData: any = []
  districtData: any = []
  assemblyData: any = []
  candidateData: any = []
  loksabhaList: any = []
  enrollerData: any = []
  debounce: any
  api_call_loader: any = { 'selectLoader': false }

  // Current App Nav;
  public globalNavValue = new BehaviorSubject<any>('');
  public global_error_link = new BehaviorSubject<any>('');


  globalUserPermissionsData = new ReplaySubject<any>();
  constructor(public message: NzMessageService, public http: HttpService) { }

  public globalUserData = new ReplaySubject<any>();
  public globalAccountData = new ReplaySubject<any>();

  sendUserData(data: any) {
    this.globalUserData.next(data);
  }

  public setErrorLink(url){
    this.global_error_link.next(url)
  }

  public setPermissionValue(data): any {
    this.globalUserPermissionsData.next(data);
  }

  sendGlobalAccountData(data: any) {
    this.globalAccountData.next(data);
  }

  setCurrNavValue(data){
    this.globalNavValue.next(data)
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
    var val: any
    val = Math.abs(value)
    if (val >= 10000000) {
      val = (val / 10000000).toFixed(2) + (' Cr');
    } else if (val >= 100000) {
      val = (val / 100000).toFixed(2) + (' Lacs');
    } else if (val >= 1000) {
      val = (val / 1000).toFixed(2) + (' Thousand');
    }
    if (typeof val == 'string') {
    } else {
      val = val.toFixed(2)
    }
    return val;
  }

  checkBrowserType() {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
      return 'Opera'
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
      return 'Chrome'
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
      return 'Safari'
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
      return 'Firefox'
    } else {
      return 'IE'
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
    saveAs(data, `${type}.xlsx`);
  }

  searchStaticDataGlobalFunction(type, user, event, isEvent?, candidate_id?) {
    this.api_call_loader['selectLoader'] = true
    clearTimeout(this.debounce);
    this.debounce = setTimeout(() => {
      let search_param = {
        "search_param": (isEvent == 'string' ? event : event.target.value),
        "page": 1,
        "limit": 10
      }
      if (user == 'user') {
        this.globalMasterUser(type, search_param, candidate_id)
      } else if (user == 'master') {
        this.globalMasterFilter(type, search_param)
      }
    }, 500);
  }


  globalMasterFilter(type, search_param?) {
    // let temp = this.globalEncryptionFunction(search_param)
    this.api_call_loader['selectLoader'] = true
    this.http.getGlobalMaster(type, search_param).subscribe((res: any) => {
      if (res?.success) {
        this.api_call_loader['selectLoader'] = false
        if (type == 'ZoneMaster') {
          this.zoneData = res?.data
        } else if (type == 'District') {
          this.districtData = res?.data
        } else if (type == 'Assembly') {
          // this.assemblyData
          this.assemblyData = res?.data
          console.log(this.assemblyData);

        } else if (type == 'LoksabhaMaster') {
          this.loksabhaList = res?.data
        }
      } else {
        this.api_call_loader['selectLoader'] = false
        this.message.error(res?.message)
      }
    })
  }

  globalMasterUser(type, search_param?, candidate_id?) {
    console.log(candidate_id, 'this is candidate id')
    // let temp = this.globalEncryptionFunction(search_param)
    if (candidate_id) {
      if (!search_param) {
        search_param = { "user_type": candidate_id }
      } else {
        search_param['user_type'] = candidate_id
      }
    }
    this.http.getGlobalUser(type, search_param).subscribe((res: any) => {
      // return res?.data
      if (res?.success) {
        if (type == 'Candidate') {
          this.candidateData = res?.data
        } else if (type == 'Enroller') {
          this.enrollerData = res?.data
        }
      }
    })
  }

  globalEncryptionFunction(data) {
    data = JSON.stringify(data)
    var key = "JDKWIFKDOWR29201KFOW92028FUDISO2"
    key = CryptoJS.enc.Utf8.parse(key);
    var iv = CryptoJS.lib.WordArray.random(16);
    var encrypted = CryptoJS.AES.encrypt(data, key, {
      iv: iv
    });
    var encrypted_data = iv.concat(encrypted.ciphertext).toString(CryptoJS.enc.Base64);
    var final_data = {
      "enrypted_data": encrypted_data
    }
    return final_data
  }


  globalDecryptFunction(encrypted_data) {
    var key = "JDKWIFKDOWR29201KFOW92028FUDISO2"
    key = CryptoJS.enc.Utf8.parse(key);

    var ciphertext = CryptoJS.enc.Base64.parse(encrypted_data);

    // split IV and ciphertext
    var iv = ciphertext.clone();
    iv.sigBytes = 16;
    iv.clamp();
    ciphertext.words.splice(0, 4); // delete 4 words = 16 bytes
    ciphertext.sigBytes -= 16;

    // decryption
    var decrypted = CryptoJS.AES.decrypt({ ciphertext: ciphertext }, key, {
      iv: iv
    });

    var decrypted_data = decrypted.toString(CryptoJS.enc.Utf8);
    return decrypted_data
  }

  numberWithCommas(data) {
    return data.toString().split('.')[0].length > 3 ? data.toString().substring(0, data.toString().split('.')[0].length - 3).replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + data.toString().substring(data.toString().split('.')[0].length - 3) : data.toString();
  }



  exportTableData(data, filename, column_name) {
    console.log(filename, "file to download")
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, filename + '.xlsx');
  }
}
