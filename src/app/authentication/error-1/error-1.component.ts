import { Component } from '@angular/core'
import { Router } from '@angular/router';

@Component({
    templateUrl: './error-1.component.html'
})

export class Error1Component {
    constructor(private router: Router){
      if(!JSON.parse(localStorage.getItem('iyc_user_data'))){
        this.router.navigate(["/authentication/login"]);
      }
    }
    onClickRedirectToAssignedRouter(){
        let res = JSON.parse(localStorage.getItem('iyc_user_data'))
        // if(!JSON.parse(localStorage.getItem('iyc_user_data')){
        //     this.router.navigate(["/authentication/login"]);
        // }
        // console.log(res?.permissions.length == 0);
        if(res?.permissions.length == 0){
              localStorage.removeItem("iyc_user_data");
              res = null;
              // this.router.navigate(["/authentication/login"]);
              // return;
        }
        if(!res){
          this.router.navigate(["/authentication/login"]);
          return;
        }
        if(res.data?.user_type?.name == 'Superuser'){
          this.router.navigate(["/voter"]);
          } else if(res.data?.user_type?.name == 'Data Operator'){
            this.router.navigate(["/voter"]);
          }  else if(res.data?.user_type?.name == 'Account Manager'){
            this.router.navigate(["/accounts/vouchers"]);
          } else{
            this.router.navigate(["/authentication/login"]);
          }
    }
}    