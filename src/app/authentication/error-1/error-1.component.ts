import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  templateUrl: './error-1.component.html'
})

export class Error1Component implements OnInit {
  _currUrl: any;

  constructor(private router: Router, private global: GlobalService) {
    if (!JSON.parse(localStorage.getItem('iyc_user_data'))) {
      this.router.navigate(["/authentication/login"]);
    }
  }


  ngOnInit(): void {
    this.global.global_error_link.subscribe((res:any)=>{
      if(res){
        this._currUrl = res;
        // console.log("==>>>",res)
      }
    })
  }



  onClickRedirectToAssignedRouter() {
    let res = JSON.parse(localStorage.getItem('iyc_user_data'))

    // if(!JSON.parse(localStorage.getItem('iyc_user_data')){
    //     this.router.navigate(["/authentication/login"]);
    // }
    // console.log(res?.permissions.length == 0);
    if (res?.permissions.length == 0) {
      localStorage.removeItem("iyc_user_data");
      res = null;
      // this.router.navigate(["/authentication/login"]);
      // return;
    }
    if (!res) {
      this.router.navigate(["/authentication/login"]);
      return;
    }
    console.log(this._currUrl);
    
    if (res.data?.user_type?.name == 'Superuser') {
      this.router.navigate(["/voter"]);
    } else if (res.data?.user_type?.name == 'Data Operator') {
      this.router.navigate(["/voter"]);
    } else if (res.data?.user_type?.name == 'Account Manager') {
      this.router.navigate(["/accounts/vouchers"]);
    } else {
      this.router.navigate(["/authentication/login"]);
    }
  }
}    