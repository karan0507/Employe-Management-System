import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NzMessageService } from "ng-zorro-antd/message";
import { timer } from "rxjs";
import { take, map } from "rxjs/operators";
import { GlobalService } from "src/app/service/global.service";
import { HttpService } from "src/app/service/http.service";
import { NgxPermissionsService } from 'ngx-permissions';
// import * as timer from 'rxjs';

@Component({
  templateUrl: "./login-1.component.html",
})
export class Login1Component {
  loginForm: FormGroup;
  modalHeadingTitle = "Terms of service";
  termConditionModal: boolean = false;
  _currentSection = "loginForm";
  isStockistCode: boolean = false;
  otpBoxValue = "";
  _apiCallLoader = {
    loginloader: false,
    verifyOTP: false,
  };

  count_value = 60;
  realCountertimer: any;
  firebaseFCMTokenValue = "";
  formatedMobileString: any;
  stockistCode: any;

  constructor(
    private globalFunction: GlobalService,
    private fb: FormBuilder,
    private HttpService: HttpService,
    private message: NzMessageService,
    private router: Router,
    private active_route: ActivatedRoute,
    private permissionsService: NgxPermissionsService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
        mobile: [null, [Validators.required, Validators.pattern('^[A-Z]{2}[0-9]{4}$')]],
    });

    this.loginForm.controls['mobile'].valueChanges.subscribe(value => {
        // console.log(value)
        let isnum = /^[A-Z]{2}/.test(value);
        if (isnum) {
            this.loginForm.get('mobile').setValidators([Validators.required, Validators.pattern('^[A-Z]{2}[0-9]{4}$')]);
            this.loginForm.get('mobile').updateValueAndValidity({ emitEvent: false });
            this.isStockistCode = true
        } else {
            this.loginForm.get('mobile').setValidators([Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]);
            this.loginForm.get('mobile').updateValueAndValidity({ emitEvent: false });
            this.isStockistCode = false
        }
    });
    if(localStorage.getItem('iyc_user_data')){
      this.VerifyUserFunction()
    }
  }

  submitForm(form): void {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }
    if (this.loginForm.valid) {
      this.sendOTPAPIFunction(form);
    }
  }

  sendOTPAPIFunction(form) {
    let data = new FormData();
    this.formatedMobileString = this.loginForm.value.mobile.replace(
      /.(?=.{2})/g,
      "X"
    );
    data.append("mobile", form.value.mobile);
    this._apiCallLoader["loginloader"] = true;
    var end_point ="users/v1/auth/send-otp";
    this.HttpService.UserLoginSendOTP(data, end_point).subscribe((res) => {
          this.setTimerFromStart();
          this._apiCallLoader['loginloader'] = false
          if (res.success) {
                this.message.success(res.message)
                this._currentSection = 'OTPVerification'
          }
    }, (err) => {
          this._apiCallLoader['loginloader'] = false
    })
  }

  VerifyUserFunction() {
    var end_point = 'users/v1/auth/verify-user';
    var device_type = this.globalFunction.checkBrowserType();
    let data = new FormData();
    this.HttpService.verifyUserAPI(end_point).subscribe(
      (res) => {
        if (res.result) {
          this.globalFunction.sendUserData(res);
          localStorage.setItem("iyc_user_data", JSON.stringify(res.data));
          this.checkUserLoggedInOrNot(res);
        }
      },
      (err) => {
        this.router.navigate(["/authentication/login"]);
        localStorage.removeItem("iyc_user_data");
        localStorage.removeItem("iyc_user_token");
      }
    );
  }

  checkUserLoggedInOrNot(res?) {
    if (localStorage.getItem('iyc_user_token')) {
      if (localStorage.getItem('iyc_user_data')) {
        if(res.data?.user_type?.name == 'Superuser'){
          this.router.navigate(["/dashboard/home"]);
        } else if(res.data?.user_type?.name == 'Data Operator' || res.data?.user_type?.name == 'Supervisor'){
          this.router.navigate(["/data-operator/home"]);
        }  else if(res.data?.user_type?.name == 'Account Manager'){
          this.router.navigate(["/accounts/vouchers"]);
        }
      }
    }
}

  verifyOTPFunction(form) {
    if (this.otpBoxValue.length < 6) {
      this.message.error("Please enter 6 digit OTP");
      return;
    }
    let data = new FormData();
    data.append("mobile", form.value.mobile);
    var device_type = this.globalFunction.checkBrowserType();
    data.append("otp", this.otpBoxValue);
    this._apiCallLoader["verifyOTP"] = true;
    var end_point = "users/v1/auth/verify-otp";
    this.HttpService.verifyOTPAPI(data, end_point).subscribe(
      (res) => {
        this._apiCallLoader["verifyOTP"] = false;
        if (res.success) {
          this.message.success(res.message);
          localStorage.setItem("iyc_user_token", res.token);
          localStorage.setItem("iyc_user_data", JSON.stringify(res));
          setTimeout(() => {
            var permissions = res.permissions
            permissions.push('');
            this.permissionsService.loadPermissions(permissions);
            
            if(res.data?.user_type?.name == 'Superuser'){
              this.router.navigate(["/dashboard/home"]);
            } else if(res.data?.user_type?.name == 'Data Operator' || res.data?.user_type?.name == 'Supervisor'){
              this.router.navigate(["/data-operator/home"]);
            }
             else if(res.data?.user_type?.name == 'Account Manager'){
              this.router.navigate(["/accounts/vouchers"]);
            }
          }, 0);
        }
      },
      (err) => {
        this._apiCallLoader["verifyOTP"] = false;
      }
    );
  }

  // on OTP input
  onInputChange(event) {
    this.otpBoxValue = event;
  }

  handleCancel() {
    this.termConditionModal = false;
  }

  // setTimer
  setTimerFromStart() {
    this.count_value = 60;
    timer(0, 1000)
      .pipe(
        take(this.count_value),
        map(() => --this.count_value)
      )
      .subscribe((value) => {
        this.realCountertimer = value;
      });
  }
}
