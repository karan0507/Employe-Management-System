import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

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
    {id:1,name:'Logout', url:'', icon:'logout',isClick : true},
  ]
  constructor(private modal:NzModalService) { }

  ngOnInit(): void {
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

logoutUserFunction(){}

}
