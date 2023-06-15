import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { GlobalService } from 'src/app/service/global.service';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-voter-list',
  templateUrl: './voter-list.component.html',
  styleUrls: ['./voter-list.component.css']
})
export class VoterListComponent implements OnInit {
  quickViewVisible: boolean = false;
  _currSearchValue: any;
  total_count: any;
  _currBooth: any;
  _currWard: any;
  _currSector: any;
  _currBenificary: any;

  api_loader = { 'list': false }
  votersist: any = [
    { user_name: 'Amit Jain', epic_no: '1685419', url: '../.././../assets/images/avatars/dy_post_image.jpg', tags: [{ value: 'Booth no 5' }, { value: 'Ward No 8' }] },
    { user_name: 'Ayesha', epic_no: '1685419', url: '../.././../assets/images/avatars/thumb-9.jpg', tags: [{ value: 'Booth no 5' }, { value: 'Ward No 8' }] },
    { user_name: 'Amit Jain', epic_no: '1685419', url: '../.././../assets/images/avatars/thumb-10.jpg', tags: [{ value: 'Booth no 5' }, { value: 'Ward No 8' }] },
    { user_name: 'Amit Jain', epic_no: '1685419', url: '../.././../assets/images/avatars/thumb-8.jpg', tags: [{ value: 'Booth no 5' }, { value: 'Ward No 8' }] }
  ]

  isBannerVisible: boolean = true;
  _currLanguage: any;
  globalData: any
  constructor(public global: GlobalService, private http: HttpService, private message: NzMessageService) { }

  ngOnInit(): void {
    this._currLanguage = localStorage.getItem("appLanguage") || 'en';
    this.global.globalAccountData.subscribe((res: any) => {
      if (res) {
        this.globalData = res
        this.getVotersList()
      }
    })
  }

  votersList: any = []
  pageIndex = 1;
  globalPageSize = 30;
  getVotersList(tableFilter?) {
    this.api_loader['list'] = true;
    this.votersList = []
    let data = { 'end_point': 'FETCH_VOTER_LIST_API_URL' }
    if (tableFilter) {
      this.pageIndex = tableFilter?.pageIndex;
      this.globalPageSize = tableFilter?.pageSize;
      data['page'] = this.pageIndex
      data['limit'] = this.globalPageSize
    } else {
      data['page'] = this.pageIndex
      data['limit'] = this.globalPageSize
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
    if (this._currBenificary) {
      data['is_benificary'] = this._currBenificary;
    }

    if (this._currSearchValue) {
      let temp = this._currLanguage == 'en' ? 'FULL_NAME_EN' : 'full_name_hi'
      data[temp] = this._currSearchValue;
    }
    this.http.getVoterList(data).subscribe((res: any) => {
      if (res.success) {
        this.votersList = res.data;
        this.total_count = res.total_count
        this.api_loader['list'] = false
      } else {
        this.api_loader['list'] = false
      }
    })
  }

  quickViewToggle(): void {
    this.quickViewVisible = !this.quickViewVisible;
  }

  debounce: any;
  boothList: any = [];
  wardList: any = [];
  sectorList:any = []
  searchStaticDataGlobalFunction(event, data?) {
    clearTimeout(this.debounce);
    this.debounce = setTimeout(() => {
      let data = { model_name: event }
      this.http.getMasterData(data).subscribe((res: any) => {
        if (res.success) {
         if(event == 'Booth'){
          this.boothList = res.data;
         }else if(event == 'Ward'){
          this.wardList = res.data;
         } else if(event == 'Sector'){
          this.sectorList = res.data;
         }
        }
      })
    }, 500);
  }

  resetFilter() {
    this._currSearchValue = null;
    this._currBooth = null;
    this._currSector = null;
    this._currWard = null;
    this.getVotersList()
  }

  getPipeValue(data) {
    let temp = data.split(' ');
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

  switchValue : any;
  currVoterDetails : any;
  getSwitchValue(data) {
    if (data?.status == 'Inactive') {
      this.switchValue = false;
    } else if (data?.status == 'Active') {
      this.switchValue = true
    }
    this.currVoterDetails = data
    return this.switchValue
  }
}
