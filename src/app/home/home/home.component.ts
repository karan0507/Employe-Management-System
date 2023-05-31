import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { GlobalService } from 'src/app/service/global.service';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  quickViewVisible : boolean = false;
  _currSearchValue : any;
  api_loader = {'list':false}
  votersist:any = [
    {user_name:'Amit Jain',epic_no:'1685419',url:'../.././../assets/images/avatars/dy_post_image.jpg', tags:[{value:'Booth no 5'},{value:'Ward No 8'}]},
    {user_name:'Ayesha',epic_no:'1685419',url:'../.././../assets/images/avatars/thumb-9.jpg', tags:[{value:'Booth no 5'},{value:'Ward No 8'}]},
    {user_name:'Amit Jain',epic_no:'1685419',url:'../.././../assets/images/avatars/thumb-10.jpg', tags:[{value:'Booth no 5'},{value:'Ward No 8'}]},
    {user_name:'Amit Jain',epic_no:'1685419',url:'../.././../assets/images/avatars/thumb-8.jpg', tags:[{value:'Booth no 5'},{value:'Ward No 8'}]}
  ]

  isBannerVisible: boolean = true;
  _currLanguage : any;
  globalData : any
  constructor(public global:GlobalService, private http:HttpService, private message:NzMessageService) { }
  
  ngOnInit(): void {
    this._currLanguage = localStorage.getItem("appLanguage") || 'en';
    this.global.globalAccountData.subscribe((res:any)=>{
      if(res){
        this.globalData = res
        this.getVotersList()
      }
    })
  }

  votersList:any = []
  pageIndex= 1;
  globalPageSize = 30;
  getVotersList(){
    this.api_loader['list'] = true
    let data = {'end_point':'FETCH_VOTER_LIST_API_URL'}
    data['page'] = this.pageIndex;
    data['limit'] = this.globalPageSize;
      this.http.getVoterList(data).subscribe((res:any)=>{
        if(res.success){
          this.votersList = res.data;
          this.api_loader['list'] = false
        }else{
           this.api_loader['list'] = false
        }
      })
  }

  quickViewToggle(): void {
    this.quickViewVisible = !this.quickViewVisible;
  }

}
