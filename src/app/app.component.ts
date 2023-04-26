import { Component } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { HttpService } from './service/http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    UserPermissionDataSubscription : any
    constructor(
        private HttpService: HttpService,
        private permissionsService: NgxPermissionsService
        ) 
        {
          if(localStorage.getItem('iyc_user_data')){
            var permissions = JSON.parse(localStorage.getItem('iyc_user_data')).permissions;
            // console.log(permissions);
            if(permissions){
            permissions.push('');
            this.permissionsService.loadPermissions(permissions);
            }
            
          }
          // console.log(this.permissionsService);
          // console.log(permissions);
          this.UserPermissionDataSubscription = this.HttpService.globalUserPermissionsData.subscribe((value) => {
            // value.push('')
            this.permissionsService.loadPermissions(value);
          });
        }
}
