import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { NzMessageService } from 'ng-zorro-antd/message';
import { NgxPermissionsService } from 'ngx-permissions';
import { Observable } from "rxjs";
import { distinctUntilChanged, filter, map, startWith } from "rxjs/operators";
import { GlobalService } from 'src/app/service/global.service';
import { HttpService } from 'src/app/service/http.service';
import { IBreadcrumb } from "../../shared/interfaces/breadcrumb.type";
import { ThemeConstantService } from '../../shared/services/theme-constant.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
    selector: 'app-common-layout',
    templateUrl: './common-layout.component.html',
})

export class CommonLayoutComponent  {

    breadcrumbs$: Observable<IBreadcrumb[]>;
    contentHeaderDisplay: string;
    isFolded : boolean ;
    isSideNavDark : boolean;
    isExpand: boolean;
    selectedHeaderColor: string;
    showBreadCrumb: any;
    isSlash : boolean = false;

    // Extra Data
    _currHeaderData : any
    constructor(private router: Router,  private activatedRoute: ActivatedRoute, private themeService: ThemeConstantService, private globaldata: GlobalService, private message:NzMessageService,
         private http: HttpService,private permissionsService: NgxPermissionsService, private device:DeviceDetectorService) {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => {
                let child = this.activatedRoute.firstChild;
                while (child) {
                    if (child.firstChild) {
                        child = child.firstChild;
                    } else if (child.snapshot.data && child.snapshot.data['headerDisplay']) {
                        return child.snapshot.data['headerDisplay'];
                    } else {
                        return null;
                    }
                }
                return null;
            })
        ).subscribe( (data: any) => {
            this.contentHeaderDisplay = data;
        });
    }

    ngOnInit() {
        // console.log("This device id=>", this.device.getDeviceInfo(), this.device.device); 
        // alert(JSON.stringify(this.device.getDeviceInfo()))
        if (localStorage.getItem('iyc_user_token')) {
            this.VerifyUserFunction()
        } 
        else {
            if(localStorage.getItem('domain_user')){
                this.message.error('Authentication Data not Found, kindly login again')
                this.router.navigate(['/authentication/login']);
            }else {
                this.router.navigate(['/error-1'])
            }
        }
        // alert('Common Layout working');
        this.breadcrumbs$ = this.router.events.pipe(
            startWith(new NavigationEnd(0, '/', '/')),
            filter(event => event instanceof NavigationEnd),distinctUntilChanged(),
            map(data => this.buildBreadCrumb(this.activatedRoute.root))
        );
        this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
        this.themeService.isSideNavDarkChanges.subscribe(isDark => this.isSideNavDark = isDark);
        this.themeService.selectedHeaderColor.subscribe(color => this.selectedHeaderColor = color);   
        this.themeService.isExpandChanges.subscribe(isExpand => this.isExpand = isExpand);     
    }

    private buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
        let label = '', path = '/', display = null, title, params = '';

        if (route.routeConfig) {
            if (route.routeConfig.data) {
                // console.log(route.routeConfig.path)
                label = route.routeConfig.data['title'];
                if (route.routeConfig.data['custom_url']) {
                    path += route.routeConfig.data['custom_url'];
                } else {
                    path += route.routeConfig.path;
                }
                if (route.routeConfig.data['params']) {
                    params = route.routeConfig.data['params']
                }
                if (route.routeConfig.data['parent'] && route.routeConfig.data['title']) {
                    this.isSlash = true
                }else if(route.routeConfig.data['parent'] && !route.routeConfig.data['title']){
                    this.isSlash = false
                }
                this.showBreadCrumb = route.routeConfig.data['parent'];
                this._currHeaderData = route.routeConfig.data
            }
        }

        const nextUrl = path && path !== '/select-language' ? `${url}${path}` : url;
        const breadcrumb = <IBreadcrumb>{
            label: label, url: nextUrl, title: title
        };

        const newBreadcrumbs = label ? [...breadcrumbs, breadcrumb] : [...breadcrumbs];
        if (route.firstChild) {
            return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
        }
        return newBreadcrumbs;
    }
    UserPermissionDataSubscription : any

    VerifyUserFunction() {
        // var end_point = JSON.parse(localStorage.getItem('biomech_user_data')).user_type.name == 'Stockists' ? 'stockist/client-auth/verify-user' : 'employee/employee-auth/verify-user'
        var end_point = '/users/v1/auth/verify-user';
        var device_type = this.globaldata.checkBrowserType()
        let data = new FormData()
        this.http.verifyUserAPI(end_point).subscribe((res: any) => {
            if (res.success) {
                this.globaldata.sendUserData(res.data);
                // Get GlobalAccount Data
                this.getGlobalAccData()
                localStorage.setItem("iyc_user_data", JSON.stringify(res));
                if(localStorage.getItem('iyc_user_data')){
                    var permissions = JSON.parse(localStorage.getItem('iyc_user_data')).permissions;
                    permissions.push('')
                    this.permissionsService.loadPermissions(permissions);
                  }
                  this.UserPermissionDataSubscription = this.http.globalUserPermissionsData.subscribe((value) => {
                    this.permissionsService.loadPermissions(value);
                  });
            }
            else {
                this.router.navigate(['/authentication/employee-login']);
                localStorage.removeItem('iyc_user_token')
                localStorage.removeItem('iyc_user_data')
                localStorage.removeItem('appLanguage') 
            }
        }, (err) => {
            this.router.navigate(['/authentication/login']);
            localStorage.removeItem('iyc_user_token')
            localStorage.removeItem('iyc_user_data')
            localStorage.removeItem('menuItem') 
        })
    }
    

    globalAccData : any
    _currLang:any
    getGlobalAccData(){
        let data={}
        this.http.getGlobalAdminData(data).subscribe((res:any)=>{
            if(res.success){
                this._currLang = localStorage.getItem('appLanguage')
                this.globalAccData = res.data;
                this.globaldata.sendGlobalAccountData(res.data);
                localStorage.setItem('global_account_data',JSON.stringify(res.data))
            }
        })
    }


}