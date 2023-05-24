import { Component } from '@angular/core';
import { ThemeConstantService } from '../../services/theme-constant.service';
import { HttpService } from 'src/app/service/http.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
    selector: 'app-quick-view',
    templateUrl: './quick-view.component.html'
})



export class QuickViewComponent {
  
    selectedHeaderColor: string;
    isSideNavDark : boolean;
    isFolded : boolean;

    constructor( private themeService: ThemeConstantService, private http: HttpService,
        private message:NzMessageService, private router:Router) {}

    ngOnInit(): void {
        console.log('In Quick');
        
        this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
        this.themeService.isSideNavDarkChanges.subscribe(isDark => this.isSideNavDark = isDark);
        this.themeService.selectedHeaderColor.subscribe(color => this.selectedHeaderColor = color);
    }

    changeHeaderColor() {
        this.themeService.changeHeaderColor(this.selectedHeaderColor)
    }

    toggleSideNavDark() {
        this.themeService.toogleSideNavDark(this.isSideNavDark);
    }

    toggleFold() {
        this.themeService.toggleFold(this.isFolded);
    }
    
    logOutUser(){
        this.http.logOutUser().subscribe((res:any)=>{
            if(res.success){
                this.message.success(res.message);
                this.router.navigateByUrl('/authentication/login')
            }
        });
    }

}

