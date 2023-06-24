import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { HttpService } from 'src/app/service/http.service';
import { ThemeConstantService } from '../../services/theme-constant.service';
import { GlobalService } from 'src/app/service/global.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{

    searchVisible : boolean = false;
    quickViewVisible : boolean = false;
    isFolded : boolean;
    isExpand : boolean;
    _currLang : any
    _currToggleValue : any
    
    constructor( private themeService: ThemeConstantService, private modal: NzModalService, 
        private http: HttpService, private router: Router, public global:GlobalService, private message: NzMessageService) {}
    
    globalAccData : any;
    ngOnInit(): void {
        // this._currToggleValue ? localStorage.setItem('globalToggleValue','1') : localStorage.setItem('globalToggleValue','2')
        this._currToggleValue = localStorage.getItem('globalToggleValue') == '2' ? true : false;
        this.globalAccData = localStorage.getItem('global_account_data')
        this._currLang = localStorage.getItem('appLanguage') || 'en';
        this.global.globalAccountData.subscribe((res:any)=>{
            if(res){
                this.globalAccData = res;
            }
        })
        this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
        this.themeService.isExpandChanges.subscribe(isExpand => this.isExpand = isExpand);
    }

    toggleFold() {
        this.isFolded = !this.isFolded;
        this.themeService.toggleFold(this.isFolded);
    }

    toggleExpand() {
        this.isFolded = false;
        this.isExpand = !this.isExpand;
        this.themeService.toggleExpand(this.isExpand);
        this.themeService.toggleFold(this.isFolded);
    }

    searchToggle(): void {
        this.searchVisible = !this.searchVisible;
    }

    quickViewToggle(): void {
        // this.quickViewVisible = !this.quickViewVisible;
        this.modal.confirm({
            nzTitle: 'Are you sure ',  /*+ this.party_name + '?'*/
            nzContent: 'You want to logout',
            nzOkText: 'Yes, Logout',
            nzOkType: 'primary',
            nzOkDanger: true,
            nzOnOk: () => this.onClickLogOut(),
            nzCancelText: 'No',
            nzOnCancel: () => this.modal.closeAll()
        });
    }

    onClickLogOut(){
        this.http.logout().subscribe((res : any)=>{
            if(res.success){
                this.message.success(res.message);
                this.modal.closeAll()
                this.router.navigate(['/authentication/login']);
                localStorage.removeItem("iyc_user_token");
                localStorage.removeItem("iyc_user_data");
                localStorage.removeItem('appLanguage');
                localStorage.removeItem('menuItem') ;
                localStorage.removeItem('global_account_data') ;
              }
        
        })
      }

    notificationList = [
        {
            title: 'You received a new message',
            time: '8 min',
            icon: 'mail',
            color: 'ant-avatar-' + 'blue'
        },
        {
            title: 'New user registered',
            time: '7 hours',
            icon: 'user-add',
            color: 'ant-avatar-' + 'cyan'
        },
        {
            title: 'System Alert',
            time: '8 hours',
            icon: 'warning',
            color: 'ant-avatar-' + 'red'
        },
        {
            title: 'You have a new update',
            time: '2 days',
            icon: 'sync',
            color: 'ant-avatar-' + 'gold'
        }
    ];

    switchToggle(){
        this._currToggleValue = !this._currToggleValue;
        if(this._currToggleValue == true){
            this.router.navigateByUrl("/dashboard/home");
        }else{
            this.router.navigateByUrl("/voter");
        }
        !this._currToggleValue ? localStorage.setItem('globalToggleValue','1') : localStorage.setItem('globalToggleValue','2')
        
       setTimeout(() => {
        window.location.reload();
       }, 300);      console.log('dashboard')
      
    }
}
