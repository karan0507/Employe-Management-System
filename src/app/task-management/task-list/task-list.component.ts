import { Component, OnInit } from '@angular/core';
import * as saveAs from 'file-saver';
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
  // Table:
  taskList:any = [];
  total_count : any;
  page = 1;
  globalPageSize = 30;
  api_loader = {'list':false, 'button':false}
  _currSearchValue : any;
_currBooth : any;
_currWard : any;
_currSector : any;
_currLanguage: any;
  constructor(private http:HttpService, private message:NzMessageService) { }

  ngOnInit(): void {
    this._currLanguage = localStorage.getItem("appLanguage") || 'en';
    this.getTaskList()
  }


  getTaskList(tableFilter?){
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


    if (this._currSearchValue) {
      let temp = this._currLanguage == 'en' ? 'full_name_en' : 'full_name_hi'
      data[temp] = this._currSearchValue;
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
    this.getTaskList()
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

  quickViewToggle(): void {
    this.quickViewVisible = !this.quickViewVisible;
  }

  onDownloadSampleFile() {
    const downloadloader = this.message.loading('Downloading File..', { nzDuration: 0 }).messageId;
    let result = '../assets/static_files/TaskManagement.xlsx'
    saveAs(result, 'TaskManagement.xlsx');

    this.message.remove(downloadloader);
  }

  isImport : boolean = false;
  fileList : any = [];
  _currentFileName : any;
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

  isOkBtn : boolean = false;
  handleOk(){
    this.isOkBtn = true;
      let formData = new FormData();
      formData.append('file',this._currentFileName);
      this.http.importTask(formData).subscribe((res:any)=>{
        if(res.success){
          this.message.success('File uploaded successfully');
          this.isOkBtn = false;
          this.isImport = false;
          this.fileList = []
          this.getTaskList();
        }else{
          this.isOkBtn = false;
          this.isImport = false;
          this.fileList = []
          this.message.error(res.message);
        }
      })
  }
}
