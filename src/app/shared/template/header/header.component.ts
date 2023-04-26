import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { HttpService } from 'src/app/service/http.service';
import { ThemeConstantService } from '../../services/theme-constant.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{

    searchVisible : boolean = false;
    quickViewVisible : boolean = false;
    isFolded : boolean;
    isExpand : boolean;

    constructor( private themeService: ThemeConstantService, private modal: NzModalService, private http: HttpService, private router: Router) {}

    ngOnInit(): void {
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
        this.http.logout().subscribe((res)=>{
          this.modal.closeAll()
          this.router.navigate(['/authentication/login']);
          localStorage.removeItem("iyc_user_token");
          localStorage.removeItem("iyc_user_data")
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
}
