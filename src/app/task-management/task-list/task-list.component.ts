import { Component, OnInit } from '@angular/core';
import { differenceInCalendarDays } from 'date-fns';
import * as saveAs from 'file-saver';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  quickViewVisible: boolean = false;
  date: any;
  disabledDate = (current: Date): boolean =>
    // Can not select days before today and today
    differenceInCalendarDays(current, new Date()) > 0;
  customRanges = {
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
  taskList: any = [];
  total_count: any;
  page = 1;
  globalPageSize = 30;
  api_loader = { 'list': false, 'button': false }
  _currSearchValue: any;
  _currBooth: any;
  _currWard: any;
  _currSector: any;
  _currLanguage: any;
  constructor(private http: HttpService, private message: NzMessageService) { }

  ngOnInit(): void {
    this._currLanguage = localStorage.getItem("appLanguage") || 'en';
    this.getTaskList()
  }


  getTaskList(tableFilter?) {
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

    if (this._currUser) {
      data['internal_user'] = this._currUser;
    }
    if (this.date?.length > 0) {
      this.page = 1;
      data['start_date'] = moment(this.date[0]).format("YYYY-MM-DD")
      data['end_date'] = moment(this.date[1]).format("YYYY-MM-DD")
    }

    if (this._currSearchValue) {
      data['search_param'] = this._currSearchValue;
    }
    this.http.getTaskList(data).subscribe((res: any) => {
      if (res.success) {
        this.taskList = res.data;
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
    this._currLane;
    this._crrAssembly;
    this._currStreet;
    this._currUser;
    this.getTaskList()
  }

  _currUser: any;
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
        }
      })
    }, 500);
  }

  quickViewToggle(): void {
    this.quickViewVisible = !this.quickViewVisible;
  }

  onDownloadSampleFile() {
    const downloadloader = this.message.loading('Downloading File..', { nzDuration: 0 }).messageId;
    let result = '../assets/static_files/TaskManagement.xlsx'
    saveAs(result, 'TaskManagement.xlsx');

    this.message.remove(downloadloader);
  }

  isImport: boolean = false;
  fileList: any = [];
  _currentFileName: any;
  beforeUploadName = (file: NzUploadFile): boolean => {
    console.log(file?.type);

    if (!((file?.type == 'xlsx' || file?.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'))) {
      this.fileList = [];
      this._currentFileName = null;
      this.message.error('Please check the file type')
      return false
    }
    this.fileList = [];
    this.fileList = this.fileList.concat(file);
    this._currentFileName = file;
    return false;
  };

  isOkBtn: boolean = false;
  handleOk() {
    this.isOkBtn = true;
    let formData = new FormData();
    formData.append('file', this._currentFileName);
    this.http.importTask(formData).subscribe((res: any) => {
      if (res.success) {
        this.message.success('File uploaded successfully');
        this.isOkBtn = false;
        this.isImport = false;
        this.fileList = []
        this.getTaskList();
      } else {
        this.isOkBtn = false;
        this.isImport = false;
        this.fileList = []
        this.message.error(res.message);
      }
    })
  }

  internal_user_list: any = [];
  in_user_debounce: any;
  getInternalUser(key?) {

    if (key) {
      clearTimeout(this.in_user_debounce);
      this.in_user_debounce = setTimeout(() => {
        let data = { 'end_point': 'FETCH_VOTER_LIST_API_URL', 'search_param': key.target.value }
        this.http.getTeamList(data).subscribe((res: any) => {
          if (res.success) {
            this.internal_user_list = res.data;
            console.log(this.internal_user_list)
          }
        })
      }, 500);
    } else {
      let data = { 'end_point': 'FETCH_VOTER_LIST_API_URL' }
      this.http.getTeamList(data).subscribe((res: any) => {
        if (res.success) {
          this.internal_user_list = res.data;
          console.log(this.internal_user_list)
        }
      })
    }
  }
}
