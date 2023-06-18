import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { GlobalService } from 'src/app/service/global.service';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  api_loader = {
    'list': false,
    'button': false,
  }
  accountList: any = [];
  total_count: any;
  pageIndex = 1;
  globalPageSize = 30;
  _currSearchValue : any;
  _currLanguage : any;
  globalData : any;
  constructor(private http:HttpService, private message:NzMessageService, private global : GlobalService) { }

  ngOnInit(): void {
    this._currLanguage = localStorage.getItem("appLanguage") || 'en';
    this.global.globalAccountData.subscribe((res: any) => {
      if (res) {
        this.globalData = res
        this.getaccountList()
      }
    })
  }

  getaccountList(tableFilter?){
    this.api_loader['list'] = true;
    this.accountList = []
    // 'end_point': 'FETCH_VOTER_LIST_API_URL'
    let data = {  }
    // if (tableFilter) {
    //   this.pageIndex = tableFilter?.pageIndex;
    //   this.globalPageSize = tableFilter?.pageSize;
    //   data['page'] = this.pageIndex
    //   data['limit'] = this.globalPageSize
    // } else {
    //   data['page'] = this.pageIndex
    //   data['limit'] = this.globalPageSize
    // }
    // if (this._currBooth) {
    //   data['booth'] = this._currBooth;
    // }
    // if (this._currWard) {
    //   data['ward'] = this._currWard;
    // }
    // if (this._currSector) {
    //   data['sector'] = this._currSector;
    // }

    // if (this._currLane) {
    //   data['lane'] = this._currLane;
    // }
    // if (this._crrAssembly) {
    //   data['assembly'] = this._crrAssembly;
    // }
    // if (this._currStreet) {
    //   data['street'] = this._currStreet;
    // }

    // if (this._currBenificary) {
    //   data['is_benificary'] = this._currBenificary;
    // }

    if (this._currSearchValue) {
      let temp = this._currLanguage == 'en' ? 'search_param' : 'search_param'
      data[temp] = this._currSearchValue;
    }
    this.http.getAccountListt(data).subscribe((res: any) => {
      if (res.success) {
        this.accountList = res.data;
        this.total_count = res.total_count
        this.api_loader['list'] = false
      } else {
        this.api_loader['list'] = false
      }
    })
  }

}
