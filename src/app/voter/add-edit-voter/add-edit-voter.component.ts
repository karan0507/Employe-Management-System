import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-add-edit-voter',
  templateUrl: './add-edit-voter.component.html',
  styleUrls: ['./add-edit-voter.component.css']
})
export class AddEditVoterComponent implements OnInit {

  curr_voterId: any;
  voterDetails: any;
  voterForm: FormGroup;
  _currLanguage: any;
  isEdit: boolean = false;
  api_loading = { card: false, button: false }
  constructor(private fb: FormBuilder, private router: Router, private acRoute: ActivatedRoute, private message: NzMessageService,
    private http: HttpService) { }

  ngOnInit(): void {
    this._currLanguage = localStorage.getItem("appLanguage") || 'en';
    this.acRoute.queryParams.subscribe((params: any) => {
      if (params['id']) {
        this.curr_voterId = params.id;
        this.isEdit = true;
        if (this.curr_voterId) {
          this.getVoterDetails()
        }
      }
      this.createVoter();
    })
  }

  getVoterDetails() {
    let data = { id: this.curr_voterId, 'end_point': 'FETCH_VOTER_LIST_API_URL' }
    this.api_loading['card'] = true;

    this.http.getVoterDetails(data).subscribe((res: any) => {
      if (res.success) {
        this.voterDetails = res.data[0];
        this.createVoter(res.data[0])
        this.api_loading['card'] = false;
      } else {
        this.api_loading['card'] = false;
      }
    }, error => { this.api_loading['card'] = false; })
  }


  createVoter(data?) {
    this.voterForm = this.fb.group({
      FIRST_NAME: [(data ? (this._currLanguage == 'en' ? data?.first_name_en : data?.first_name_hi) : ''), [Validators.required]],
      LAST_NAME: [(data ? (this._currLanguage == 'en' ? data?.last_name_en : data?.last_name_hi) : ''), [Validators.required]],
      FULL_NAME: [(data ? (this._currLanguage == 'en' ? data?.full_name_en : data?.full_name_hi) : ''), [Validators.required]],

      RLN_TYPE: [(data ? (this._currLanguage == 'en' ? data?.rln_type : data?.rln_type) : ''), [Validators.required]], //Check

      RLN_FIRST_NAME: [(data ? (this._currLanguage == 'en' ? data?.rln_first_name_en : data?.rln_first_name_hi) : ''), [Validators.required]],
      RLN_LAST_NAME: [(data ? (this._currLanguage == 'en' ? data?.rln_last_name_en : data?.rln_last_name_hi) : ''), [Validators.required]],
      RLN_FULL_NAME: [(data ? (this._currLanguage == 'en' ? data?.rln_full_name_en : data?.rln_full_name_hi) : ''), [Validators.required]],
      FULL_NAME_WITH_RLN: [(data ? (this._currLanguage == 'en' ? data?.full_name_en_with_rln : data?.full_name_hi_with_rln) : ''), [Validators.required]],
      GENDER: [(data ? (this._currLanguage == 'en' ? data?.gender : data?.gender) : ''), [Validators.required]],
      AGE: [(data ? (this._currLanguage == 'en' ? data?.age : data?.age) : ''), [Validators.required]],
      EPIC_NO: [(data ? (this._currLanguage == 'en' ? data?.epic_no : data?.epic_no) : ''), [Validators.required]],
      PSBUILDING_NAME: [(data ? (this._currLanguage == 'en' ? data?.psbuilding_name_en : data?.psbuilding_name_hi) : ''), [Validators.required]],
      SECTION_NAME: [(data ? (this._currLanguage == 'en' ? data?.section_name_en : data?.section_name_hi) : ''), [Validators.required]],
      PART_NAME: [(data ? (this._currLanguage == 'en' ? data?.part_name_en : data?.part_name_hi) : ''), [Validators.required]],
      SLNOINPART: [(data ? (this._currLanguage == 'en' ? data?.slnoinpart : data?.slnoinpart) : ''), [Validators.required]],
      PART_NO: [(data ? (this._currLanguage == 'en' ? data?.part_no : data?.part_no) : ''), [Validators.required]],
      SECTION_NO: [(data ? (this._currLanguage == 'en' ? data?.section_no : data?.section_no) : ''), [Validators.required]],
      HOUSE_NO: [(data ? (this._currLanguage == 'en' ? data?.house_no : data?.house_no) : ''), [Validators.required]],

    })
  }

  submitForm() {
    if (this.voterForm.invalid) { return }
    this.api_loading['button'] = true;
    console.log(this.voterForm.value);
    var form_data = new FormData();

    // for ( var key in this.voterForm.controls ) {
    //   console.log(form_data)
    // form_data.append(key,this.voterForm[key];value,this.voterForm.controls[key].value);
    // }
    form_data.append('FIRST_NAME',this.voterForm.get('FIRST_NAME').value);
    form_data.append('LAST_NAME',this.voterForm.get('LAST_NAME').value);
    form_data.append('FULL_NAME',this.voterForm.get('FULL_NAME').value);
    form_data.append('RLN_TYPE',this.voterForm.get('RLN_TYPE').value);

    form_data.append('RLN_FIRST_NAME',this.voterForm.get('RLN_FIRST_NAME').value);
    form_data.append('RLN_LAST_NAME',this.voterForm.get('RLN_LAST_NAME').value);
    form_data.append('RLN_FULL_NAME',this.voterForm.get('RLN_FULL_NAME').value);
    form_data.append('FULL_NAME_WITH_RLN',this.voterForm.get('FULL_NAME_WITH_RLN').value);
    form_data.append('GENDER',this.voterForm.get('GENDER').value);
    form_data.append('AGE',this.voterForm.get('AGE').value);
    form_data.append('EPIC_NO',this.voterForm.get('EPIC_NO').value);
    form_data.append('PSBUILDING_NAME',this.voterForm.get('PSBUILDING_NAME').value);
    form_data.append('SECTION_NAME',this.voterForm.get('SECTION_NAME').value);
    form_data.append('PART_NAME',this.voterForm.get('PART_NAME').value);
    form_data.append('SLNOINPART',this.voterForm.get('SLNOINPART').value);
    form_data.append('PART_NO',this.voterForm.get('PART_NO').value);
    form_data.append('SECTION_NO',this.voterForm.get('SECTION_NO').value);
    form_data.append('HOUSE_NO',this.voterForm.get('HOUSE_NO').value);
    let url = this.isEdit == false ? this.http.addVoter(form_data) : this.http.editVoter(this.curr_voterId, form_data);
    url.subscribe((res: any) => {
      if (res.success) {
        this.message.success(res.message);
        this.router.navigateByUrl('/home');
        this.api_loading['button'] = false;
      } else {
        this.api_loading['button'] = false;
      }
    }, errpr => {
      this.api_loading['button'] = false;
    })
  }
}
