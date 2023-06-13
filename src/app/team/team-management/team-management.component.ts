import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.css']
})
export class TeamManagementComponent implements OnInit {
 // Table:
 teamList:any = [];
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
   this.getTeamList()
 }


 getTeamList(tableFilter?){
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
   this.getTeamList()
 }

 debounce: any;
 boothList: any = [];
 searchStaticDataGlobalFunction(event?) {
   clearTimeout(this.debounce);
   this.debounce = setTimeout(() => {
     let data = { model_name: event }
     this.http.getMasterData(data).subscribe((res: any) => {
       if (res.success) {
         this.boothList = res.data;
       }
     })
   }, 500);
 }
}
