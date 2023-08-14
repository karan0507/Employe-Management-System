import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as FileSaver from 'file-saver';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/service/http.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-leader-task-list',
  templateUrl: './leader-task-list.component.html',
  styleUrls: ['./leader-task-list.component.css']
})
export class LeaderTaskListComponent implements OnInit {

  leaderList: any = [];
  total_count = 0;
  page = 1;
  globalPageSize = 30;
  api_loader  = {'list':false}

  date :any;
  _currBooth : any;
  _currWard : any;
  _currSector : any;
  _currLane : any;
  _crrAssembly : any;
  _currStreet : any;
  _currUser : any;
  _currSearchValue : any;
  filter_type = "ALL";
  constructor(private http:HttpService,private message:NzMessageService,private router: Router, private acroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.acroute.queryParams.subscribe((res:any)=>{
      if(res['tabSection']){
        this.filter_type = res['tabSection'] == 1 ? "TODAT" : "ALL";
        this._currTabName = res['tabSection'];

      }else{
        this.filter_type = "ALL"
        this._currTabName = 0;
      }
    })
    this.getLeaderTaskList();
  }

  getLeaderTaskList(tableFilter?){
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
    if(this.filter_type){
      this.filter_type = this._currTabName == 1 ? 'TODAY' : 'ALL';
      data['filter_type'] = this.filter_type;
    }
    if (this.date?.length > 0) {
      this.page = 1;
      data['start_date'] = moment(this.date[0]).format("YYYY-MM-DD")
      data['end_date'] = moment(this.date[1]).format("YYYY-MM-DD")
    }

    if (this._currSearchValue) {
      data['search_param'] = this._currSearchValue;
    }
    this.http.getLeaderTaskList(data).subscribe((res: any) => {
      if (res.success) {
        this.leaderList = res.data;
        this.total_count = res.total_count
        this.api_loader['list'] = false
      } else {
        this.api_loader['list'] = false
      }
    })
  }

  
  public exportExcel(): void {

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.leaderList);
    const wb: XLSX.WorkBook = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    this.saveExcelFile(excelBuffer, '.xlsx');
  }

  private saveExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {type: '.xlsx'});
    FileSaver.saveAs(data, 'leader_task' + '.xlsx');
  } 

  partyTabs: any = [];
  _currTabName:any;
  onTabChange(data) {
    console.log(data,'data');
    this._currTabName = data?.index;
    this.getLeaderTaskList();
    this.router.navigate([this.router.url.split('?')[0]], { queryParams: { id: data?.id, tabSection: this._currTabName } });
  }

  downloadPDF(){
    const blob = new Blob([this.leaderList], {type: 'application/pdf'});
    let filename = 'myPdfFile';
    let url= URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}
