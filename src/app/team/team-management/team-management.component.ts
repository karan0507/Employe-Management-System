import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.css']
})
export class TeamManagementComponent implements OnInit {
  isSelectLoader  = {
    "Booth":false,
    "Ward":false,
    "Street":false,
    "Lane":false,
    "Sector":false,
    "Assembly":false,
    "GlobalStatusMaster":false
  }


  // Table:
  quickViewVisible: boolean = false;
  teamList: any = [];
  total_count: any;
  page = 1;
  globalPageSize = 30;
  api_loader = { 'list': false, 'button': false }
  _currSearchValue: any;
  _currBooth: any;
  _currWard: any;
  _currSector: any;
  _currLanguage: any;
  _currStatus: any;
  statusList = []


  constructor(private http: HttpService, private message: NzMessageService) { }

  ngOnInit(): void {
    this._currLanguage = localStorage.getItem("appLanguage") || 'en';
    this.getTeamList()
  }


  getTeamList(tableFilter?) {
    this.api_loader['list'] = true
    let data = { 'end_point': 'FETCH_VOTER_LIST_API_URL' }
    if (tableFilter) {
      this.page = tableFilter?.pageIndex;
      this.globalPageSize = tableFilter?.pageSize;
      data['page'] = this.page
      data['limit'] = this.globalPageSize
    } else {
      data['page'] = this.page
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

    if (this._currLane) {
      data['lane'] = this._currLane;
    }
    if (this._crrAssembly) {
      data['assembly'] = this._crrAssembly;
    }
    if (this._currStreet) {
      data['street'] = this._currStreet;
    }
    if (this._currStatus) {
      data['status'] = this._currStatus;
    }
    if(this._currStatus)

    if (this._currSearchValue) {
      data['search_param'] = this._currSearchValue;
    }
    this.http.getTeamList(data).subscribe((res: any) => {
      if (res.success) {
        console.log(res.data);

        this.teamList = res.data;
        this.total_count = res.total_count
        this.api_loader['list'] = false
      } else {
        this.api_loader['list'] = false
      }
    })
  }

  resetFilter() {
    this._currSearchValue = null;
    this._currBooth = null;
    this._currSector = null;
    this._currWard = null;
    this._currLane = null;
    this._crrAssembly = null;
    this._currStreet = null;
    this.page = 1;
    this.quickViewVisible = false;
    this.getTeamList()
  }

  debounce: any;
  boothList: any = [];
  wardList: any = [];
  sectorList: any = [];
  _crrAssembly: any;
  assemblyList: any = [];
  _currStreet: any;
  streetList: any = [];
  _currLane: any;
  laneList: any = [];

  searchStaticDataGlobalFunction(event, data?) {
    this.isSelectLoader[event] = true;
    clearTimeout(this.debounce);
    this.debounce = setTimeout(() => {
      let data = { model_name: event }
      this.http.getMasterData(data).subscribe((res: any) => {
        if (res.success) {
          if (event == 'Booth') {
            this.boothList = res.data;
          } else if (event == 'Ward') {
            this.wardList = res.data;
          } else if (event == 'Sector') {
            this.sectorList = res.data;
          } else if (event == 'Street') {
            this.streetList = res.data;
          }
          else if (event == 'Lane') {
            this.laneList = res.data;
          }
          else if (event == 'Assembly') {
            this.assemblyList = res.data;
          }
          else if (event == 'GlobalStatusMaster') {
            this.statusList = res.data;
          }

          this.isSelectLoader[event] = false;
        }
      })
    }, 500);
  }

  quickViewToggle(): void {
    this.quickViewVisible = !this.quickViewVisible;
  }

}
