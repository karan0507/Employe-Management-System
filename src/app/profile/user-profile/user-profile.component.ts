import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  prfileCataloug : any = [
    {id:1,name:'Change Language', url:'', icon:'zhihu'},
    {id:1,name:'Communication History', url:'/profile/commounication-history', icon:'notification'},
    {id:1,name:'FAQ’s & Help', url:'', icon:'info-circle'},
  ]

  isChangeLanguage : boolean = false;
  constructor(private modal:NzModalService, private http:HttpService, private message: NzMessageService,
    private router:Router) { }

  _globalAccData:any;
  ngOnInit(): void {
    this._globalAccData = JSON.parse(localStorage.getItem('iyc_user_data')).data
    // this._globalAccData = this._globalAccData.data
    console.log(this._globalAccData)
  }

  showLogoutModalConfirm(): void {
    this.modal.confirm({
        nzTitle: 'Are you sure ',  /*+ this.party_name + '?'*/
        nzContent: 'You want to logout',
        nzOkText: 'Yes, Logout',
        nzOkType: 'primary',
        nzOkDanger: true,
        nzOnOk: () => this.logoutUserFunction(),
        nzCancelText: 'No',
        nzOnCancel: () => console.log('Cancel')
    });
}

logoutUserFunction(){
  this.http.logOutUser().subscribe((res:any)=>{
    if(res.success){
      this.message.success(res.message);
      this.router.navigateByUrl('/authentication/login')
      localStorage.removeItem('iyc_user_token')
      localStorage.removeItem('iyc_user_data') 
      localStorage.removeItem('appLanguage') 
      localStorage.removeItem('menuItem') 
      localStorage.removeItem('global_account_data')
    }
  })
}

_currLanguage : any;
handleOk(){
  if(this._currLanguage == ''){
    this.message.error('Please select language')
    return
  }
  let data = {'language':this._currLanguage}
  this.http.changeLanguage(data).subscribe((res:any)=>{
    if(res.success){
      this.message.success(res.message);
      this.isChangeLanguage = false;
    }else{
      this.message.error(res.message);
      this.isChangeLanguage = false;
    }
  })
}

}
