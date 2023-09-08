import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-add-edit-accoun-links',
  templateUrl: './add-edit-accoun-links.component.html',
  styleUrls: ['./add-edit-accoun-links.component.css']
})
export class AddEditAccounLinksComponent implements OnInit {
  // link, link_type, social_handle
  // ['FOR', 'AGAINSST']
  // ['FACEBOOK', 'TWITTER', 'LINKED-IN', 'INSTAGRAM']
  _currAccountId: any;
  accountDetails: any;
  accountForm: FormGroup;
  _currLanguage: any;
  isEdit: boolean = false;
  api_loading = { card: false, button: false }
  socialMediaList : any = ['FACEBOOK', 'TWITTER', 'LINKED-IN', 'INSTAGRAM'];
  linkTypeList : any = ['FOR', 'AGAINST']
  constructor(private fb: FormBuilder, private router: Router, private acRoute: ActivatedRoute, private message: NzMessageService,
    private http: HttpService, private modal: NzModalService) { }

  ngOnInit(): void {
    this._currLanguage = localStorage.getItem("appLanguage") || 'en';
    this.createAccountForm()
    this.acRoute.queryParams.subscribe((params: any) => {
      if (params['id']) {
        this._currAccountId = params.id;
        this.isEdit = true;
        if (this._currAccountId) {
          this.getaccountDetails();
        }
      }

    })
  }

  getaccountDetails() { 
    let data = { id: this._currAccountId}
    this.api_loading['card'] = true;
    this.http.getAccountListt(data).subscribe((res: any) => {
      if (res.success) {
        this.accountDetails = res.data[0];
        console.log('Task Details');

        this.patchValue()
        this.api_loading['card'] = false;
      } else {
        this.api_loading['card'] = false;
      }
    }, error => { this.api_loading['card'] = false; })
  }


  createAccountForm() {
    this.accountForm = this.fb.group({
      name: [null, [Validators.required]],
      link: [null, [Validators.required]],
      link_type: [null, [Validators.required]],
      social_handle: [null, [Validators.required]],
    })
    
  }

  patchValue() {
    Object?.keys(this.accountForm.controls)?.forEach(controlName => {
      this.accountForm?.get(controlName)?.patchValue(this.accountDetails[controlName] || '')
    })
  }

  submitForm() {
    if (this.accountForm.invalid) { return }
    this.api_loading['button'] = true;
    var form_data = new FormData();
    form_data.append('name', this.accountForm?.get('name')?.value)
    form_data.append('link', this.accountForm.get('link').value);
    form_data.append('link_type', this.accountForm.get('link_type').value);
    form_data.append('social_handle', this.accountForm.get('social_handle').value);

    let url = this.isEdit == false ? this.http.addAccountLink(form_data) : this.http.editAccountList(this._currAccountId, form_data);
    url.subscribe((res: any) => {
      if (res.success) {
        this.message.success(res.message);
        this.router.navigateByUrl('/media-account');
        this.api_loading['button'] = false;
      } else {
        this.api_loading['button'] = false;
      }
    }, errpr => {
      this.api_loading['button'] = false;
    })
  }

}
