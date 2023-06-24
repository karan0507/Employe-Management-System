import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  profileForm: FormGroup;
  _currUserId: any
  _currLanguage: any;
  disabledDate = (current: Date): boolean =>
    // Can not select days before today and today
    differenceInCalendarDays(current, new Date()) > 0;
  customRanges = {
    Today: [new Date(), new Date()],
    'Last 7 days': [new Date().setDate(new Date().getDate() - 7), new Date()],
    'This Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1), new Date()],
    'Last Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 1), new Date(new Date().getFullYear(), new Date().getMonth(), -1, 30, 31)],
    'Last 3 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 3), new Date(new Date().getFullYear(), new Date().getMonth(), -1, 30, 31)],
    'Last 6 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 6), new Date(new Date().getFullYear(), new Date().getMonth(), -1, 30, 31)],
    'This Year': [new Date(new Date().getFullYear(), 0, 1), new Date()],
    'Last Year': [new Date(new Date().getFullYear() - 1, 0, 1), new Date(new Date().getFullYear() - 1, 11, 31)],
  };
  _globalAccData: any;
  constructor(private fb: FormBuilder, private message: NzMessageService, private router: Router,
    private acroute: ActivatedRoute, private http: HttpService) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('global_account_data'));
    this.getStateList();
    this._globalAccData = JSON.parse(localStorage.getItem('global_account_data'))
    this._currLanguage = localStorage.getItem("appLanguage") || 'en';
    this.profileForm = this.fb.group({
      name: [this._globalAccData?.name ? (this._currLanguage == 'en' ? this._globalAccData?.name?.en : this._globalAccData?.name?.hi) : '', [Validators.required]],
      mobile: [this._globalAccData?.mobile ? this._globalAccData?.mobile : '', [Validators.required]],
      designation: [this._globalAccData?.designation ? (this._currLanguage == 'en' ? this._globalAccData?.designation?.en : this._globalAccData?.designation?.hi) : '', [Validators.required]],
      about: [this._globalAccData?.about ? (this._currLanguage == 'en' ? this._globalAccData?.about?.en : this._globalAccData?.about?.hi) : '', [Validators.required]],
      party_info: [this._globalAccData?.party_info ? (this._currLanguage == 'en' ? this._globalAccData?.party_info?.en : this._globalAccData?.party_info?.hi) : '', [Validators.required]],
      party_name: [this._globalAccData?.party_name ? (this._currLanguage == 'en' ? this._globalAccData?.party_name?.en : this._globalAccData?.party_name?.hi) : '', [Validators.required]],
      state: [this._globalAccData?.state ? this._globalAccData.state.id : '', [Validators.required]],
      email: [this._globalAccData?.email ? this._globalAccData?.email : '', [Validators.required]],
    })
    this.acroute.queryParams.subscribe((param: any) => {
      if (param['id']) {
        this._currUserId = param['id']
      }
      if (this._currUserId) {
        // this.getUserDetails()
      }
    })
  }

  getUserDetails() {
    let data = {}
    this.http.getUserProfile(data).subscribe((res: any) => {
      if (res.success) {
        console.log(res.data);

        this.profileForm = this.fb.group({
          name: ['', [Validators.required]],
          mobile: ['', [Validators.required]],
          designation: ['', [Validators.required]],
          about: ['', [Validators.required]],
          party_info: ['', [Validators.required]],
          party_name: ['', [Validators.required]],
          state: ['', [Validators.required]],
          email: ['', [Validators.required]],
        })
      }
    })
  }

  stateList: any = []
  getStateList() {
    let data = { 'model_name': 'State' }
    this.http.getMasterData(data).subscribe((res: any) => {
      if (res.success) {
        this.stateList = res.data
      }
    })
  }

  api_loader = { button: false }
  submitProfile() {
    this.api_loader['button'] = true
    let form = new FormData();

    form.append("name",this.profileForm.get('name').value);
    form.append("mobile",this.profileForm.get('mobile').value);
    form.append("designation",this.profileForm.get('designation').value);
    form.append("about",this.profileForm.get('about').value);
    form.append("party_info",this.profileForm.get('party_info').value);
    form.append("party_name",this.profileForm.get('party_name').value);
    form.append("state",this.profileForm.get('state').value);
    form.append("email",this.profileForm.get('email').value);
    this.http.addGlobalAdminData(form).subscribe((res: any) => {
      if (res.success) {
        this.message.success(res.message);
        this.api_loader['button'] = false
      } else {
        this.message.error(res.message);
        this.api_loader['button'] = false

      }
    })
  }

}
