import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '@angular/router';
import * as FileSaver from 'file-saver';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { GlobalService } from 'src/app/service/global.service';
import { HttpService } from 'src/app/service/http.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-voter-list',
  templateUrl: './voter-list.component.html',
  styleUrls: ['./voter-list.component.css']
})

export class VoterListComponent implements OnInit {
  quickViewVisible: boolean = false;
  _currSearchValue: any;
  total_count: any;
  isSelectLoader  = {
    "Booth":false,
    "Ward":false,
    "Street":false,
    "Lane":false,
    "Sector":false,
    "Assembly":false,
  }
  _currBooth: any;
  _currWard: any;
  _currSector: any;
  _currBenificary: any;
  activityList : any = [];
followUpList : any= []

  api_loader = { 'list': false, 'accordian':false, 'button_markActivity':false }
  votersist: any = [
    { user_name: 'Amit Jain', epic_no: '1685419', url: '../.././../assets/images/avatars/dy_post_image.jpg', tags: [{ value: 'Booth no 5' }, { value: 'Ward No 8' }] },
    { user_name: 'Ayesha', epic_no: '1685419', url: '../.././../assets/images/avatars/thumb-9.jpg', tags: [{ value: 'Booth no 5' }, { value: 'Ward No 8' }] },
    { user_name: 'Amit Jain', epic_no: '1685419', url: '../.././../assets/images/avatars/thumb-10.jpg', tags: [{ value: 'Booth no 5' }, { value: 'Ward No 8' }] },
    { user_name: 'Amit Jain', epic_no: '1685419', url: '../.././../assets/images/avatars/thumb-8.jpg', tags: [{ value: 'Booth no 5' }, { value: 'Ward No 8' }] }
  ]

  isBannerVisible: boolean = true;
  _currLanguage: any;
  globalData: any



  // Multiple Voter activity and followup add
  isActivityModal : boolean = false;
  isFollowUpModal : boolean = false;
  isEdit:boolean = false;
  followUpForm: FormGroup;

  currFormType : any;
  votersList_Array: any = [];

  dateFormat = "YYYY-MM-dd";
  
  constructor(public global: GlobalService, private fb:FormBuilder, private http: HttpService, private message: NzMessageService) { }

  ngOnInit(): void {
    this._currLanguage = localStorage.getItem("appLanguage") || 'en';
    this.global.globalAccountData.subscribe((res: any) => {
      if (res) {
        this.globalData = res
        this.getVotersList()
      }
    })
  }

  public exportExcel(): void {

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.votersList);
    const wb: XLSX.WorkBook = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    this.saveExcelFile(excelBuffer, '.xlsx');
  }

  private saveExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {type: '.xlsx'});
    FileSaver.saveAs(data, fileName + '.xlsx');
  } 

  tempTrail = [   {
    "key_changes": [
        {
            "key": "Updated at",
            "old_value": "2023-06-14T09:39:31.001Z",
            "new_value": "2023-06-14T09:42:06.283Z"
        },
        {
            "key": "Rating",
            "old_value": null,
            "new_value": 5
        }
    ],
    "created_at": "2023-06-14T09:42:06.283156Z",
    "created_by": "8828349328"
},
{
    "key_changes": [
        {
            "key": "Age",
            "old_value": "18",
            "new_value": "25"
        },
        {
            "key": "Updated at",
            "old_value": "2023-06-13T11:33:41.009Z",
            "new_value": "2023-06-13T11:34:48.903Z"
        }
    ],
    "created_at": "2023-06-13T11:34:48.902754Z",
    "created_by": "8828349328"
},]
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

    if (this._currLane) {
      data['lane'] = this._currLane;
    }
    if (this._crrAssembly) {
      data['assembly'] = this._crrAssembly;
    }
    if (this._currStreet) {
      data['street'] = this._currStreet;
    }

    if (this._currBenificary) {
      data['is_benificary'] = this._currBenificary;
    }

    if (this._currSearchValue) {
      let temp = this._currLanguage == 'en' ? 'search_param' : 'search_param'
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

  // current Buttons:
  _currToggleActions : any;
  quickViewToggle(): void {
    this.isActivityModal = false
    this.quickViewVisible = !this.quickViewVisible;
  }

  debounce: any;
  boothList: any = [];
  wardList: any = [];
  sectorList: any = [];
  _crrAssembly:any;
  assemblyList : any = [];
  _currStreet : any;
  streetList:any = [];
  _currLane: any;
  laneList : any = [];

  searchStaticDataGlobalFunction(event, data?) {
    this.isSelectLoader[event] = true;
    if(event == 'Booth'){

    }
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
          }  else if (event == 'Street') {
            this.streetList = res.data;
          }
          else if (event == 'Lane') {
            this.laneList = res.data;
          }
          else if (event == 'Assembly') {
            this.assemblyList = res.data;
          }
          this.isSelectLoader[event] = false;
        }
      })
    }, 500);
  }

  resetFilter() {
    this._currSearchValue = null;
    this._currBooth = null;
    this._currSector = null;
    this._currWard = null;
    this._currLane = null;
    this._currStreet = null;
    this._crrAssembly = null;
    this.pageIndex = 1;
    this.quickViewVisible = false;
    this.getVotersList()
  }

  getPipeValue(data) {
    let temp;
    if(data){
      temp = data.split(' ');
    }else{
      return;
    }
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

  switchValue: any;
  currVoterDetails: any;
  getSwitchValue(data) {
    if (data?.status == 'Inactive') {
      this.switchValue = false;
    } else if (data?.status == 'Active') {
      this.switchValue = true
    }
    this.currVoterDetails = data
    return this.switchValue
  }

  _currentAuditId : any;
  checked: boolean = false;
  indeterminate: boolean = false;
  listOfCurrentPageData: readonly Data[] = [];
  setOfCheckedId = new Set<number>();
  // Table Dropdowns functions
  expandSet = new Set<number>();
  onExpandChange(id: number, checked: boolean, index): void {

    if (checked) {
      this.expandSet.add(id);
      this._currentAuditId = id
      this.getAuditTrail(index);
    } else {
      this.expandSet.delete(id);
    }
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      
      
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
    console.log(this.setOfCheckedId);
  }

  onCurrentPageDataChange(listOfCurrentPageData: Data[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .filter(({ disabled }) => !disabled)
      .forEach(({ id }) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
    this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
  }

  getAuditTrail(arrayIndex){
    this.api_loader['accordian'] = true;
    this.votersList[arrayIndex]['auditDataset']= [];
    console.log(this.votersList[arrayIndex]);
    
    let data = {id:this._currentAuditId, model_name:'electoralchattdataset'}
    this.http.getAuditTrail(data).subscribe((res:any)=>{
      if(res.success){
        this.votersList[arrayIndex]['auditDataset'] = res.data;
        this.api_loader['accordian'] = false;
      }else{
        this.api_loader['accordian'] = false;
      }
      console.log(this.votersList[arrayIndex]['auditDataset'])
    },error=>{
    })
  }

  // Var for activit and followup
  fileList : any = []
  // Activity and FollowUp:
  createNewFollow(type){
    this.currFormType = type;
    this.quickViewVisible = true;
    this.fileList = []
    if (type == 'activity') {
      
      // console.log( moment(JSON.stringify(data?.followup_datetime)).format("HH:mm:ss"))
      this.followUpForm = this.fb.group({
        followup_datetime: [ '',   [Validators.required]],
        activity_type: ['', [Validators.required]],
        task_type: ['', [Validators.required]],
        comments: ['', [Validators.required]]
      })
    } else {
      this.followUpForm = this.fb.group({
        followup_datetime: ['', [Validators.required]],
        followup_time : [null,[Validators.required]],
        followup_type: [null, [Validators.required]],
        task_type: ['', [Validators.required]],
        comments: ['', [Validators.required]]
      })
    }
  }

  getActivityList() {
    let data = {'model_name':'Activity'}
    this.http.getMasterData(data).subscribe((res:any)=>{
      if(res.success) {
        this.activityList = res.data
      }
    })
  }


  getFolloupList(){
    let data = {'model_name':'FollowUp'}
    this.http.getMasterData(data).subscribe((res:any)=>{
      if(res.success) {
        this.followUpList = res.data
      }
    })
  }

  // Task list
  taskList = []
  getTaskList() {
    let data = {}
    data['model_name'] = 'Tasks'
    this.http
    .getMasterData(data)
    .subscribe(
      (res: any) => {
        if(res?.success) {
          this.taskList = res?.data
        }
      }
    )
  }

  submitForm(form?) {
    this.votersList_Array = this.setOfCheckedId;
    let formDatta =new FormData();
    formDatta.append('voters',this.votersList_Array);
    // return 
    if (this.followUpForm.invalid) { return }
    this.api_loader['button_markActivity'] = true
    let data = new FormData();
    data.append('voter_id' , JSON.stringify(Array.from(this.votersList_Array)))
   
    this.currFormType == 'activity' ?   data.append('activity_type', this.followUpForm.get('activity_type').value) : data.append('followup_type', this.followUpForm.get('followup_type').value) ;
    data.append('comments', this.followUpForm.get('comments').value)
    data.append('task_type', this.followUpForm?.get('task_type')?.value)
    this.currFormType == 'activity' ? 
    data.append('activity_date', moment(this.followUpForm.get('followup_datetime').value).format("YYYY-MM-DD")) :
    data.append('followup_datetime', moment(this.followUpForm.get('followup_datetime').value).format("YYYY-MM-DD") + ' ' +moment(this.followUpForm.get('followup_datetime').value).format("HH:mm:ss"));
    this.fileList.forEach((file: any, index: number) => {
      data.append(`file_set`, file); // Assuming file is a File object
    });
    // data.append('file_set', JSON.stringify(Array.from(this.fileList)))
    // this.currFormType == 'followUp' ? data.append('followup_time',moment(this.followUpForm.get('followup_datetime').value).format("HH:mm:ss")):'';
    // if(this.currFormType == 'activity'){console.log('Activity')}else{console.log('FollowUp')}
    let url = (this.currFormType == 'activity' ? this.http.addVoterActivity(data) : this.http.addVoterFollowup(data))
    url.subscribe((res:any)=>{
      if(res.success){
        this.message.success(res.message);
        this.isActivityModal = false
        this.quickViewToggle();
        this.followUpForm.reset();
        this.api_loader['button_markActivity'] = false;
      }else{
        this.message.error(res.message)
        this.api_loader['button_markActivity'] = false
      }
    },error=>{
      this.api_loader['button_markActivity'] = false
    })
  }

}
