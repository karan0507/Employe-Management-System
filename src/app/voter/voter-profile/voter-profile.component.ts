import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzMarks } from 'ng-zorro-antd/slider/public-api';
import { GlobalService } from 'src/app/service/global.service';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-voter-profile',
  templateUrl: './voter-profile.component.html',
  styleUrls: ['./voter-profile.component.css']
})
export class VoterProfileComponent implements OnInit {
  isEdit:boolean = false;

  followUpForm: FormGroup;
  voterProfileForm : FormGroup;

  api_loading = {
    'card': false,
    'cardActvity': false,
    'cardFollowup': false,
    'button_markActivity': false,
    'button_markFolloup': false,
    'btn_Rating':false
  }
  _currTabName: any;
  partyTabs: any = [
    { id: 1, name: 'General' },
    { id: 2, name: 'Political' },
    { id: 3, name: 'Activity' },]

  profileLogs: any = [
    { title: 'Name', icon: '../../../assets/images/icons/Framevoter_profile.svg', value: 'Amit Jain' },
    { title: 'Gender', icon: '../../../assets/images/icons/Framegender.svg', value: 'Male' },
    { title: 'Date of Birth', icon: '../../../assets/images/icons/Vectorbirthday.svg', value: '22 April 1998' },
    { title: 'Mobile Number', icon: '../../../assets/images/icons/Vectormobile.svg', value: '+91 7081235894' },
    { title: 'Occupatio', icon: '../../../assets/images/icons/Frameorg.svg', value: 'IT Employee' },

    { title: 'Area', icon: '../../../assets/images/icons/Vectorlocation.svg', value: 'DSL' },
    { title: 'Street', icon: '../../../assets/images/icons/Vectorlocation.svg', value: 'ABS' },
    { title: 'School', icon: '../../../assets/images/icons/Vectorschool.svg', value: 'ABC School' },
    { title: 'College', icon: '../../../assets/images/icons/Vectorschool.svg', value: 'ABC College' },
    { title: 'Relatives', icon: '../../../assets/images/icons/Vectorrelatives.svg', value: 'prashanthshah@gmail.com' },
  ]

  politicalList: any = [
    { title: 'Part Name', icon: '../../../assets/images/icons/Framevoter_profile.svg', value: 'Amit Jain' },
    { title: 'Account Number', icon: '../../../assets/images/icons/Vectoracc.svg', value: '1685419' },
    { title: 'Part Number :', icon: '../../../assets/images/icons/Vectoracc.svg', value: '0236511' },
    { title: 'Ward', icon: '../../../assets/images/icons/Vectorward.svg', value: 'Andheri Ward Office' },
    { title: 'Booth', icon: '../../../assets/images/icons/Vectorward.svg', value: 'Zilha Parishad School Kondhve Dhawade South Facing West Side Room no 2' },

    { title: 'Societies', icon: '../../../assets/images/icons/Vectorlocation.svg', value: 'DSL' },
    { title: 'Associations :', icon: '../../../assets/images/icons/Vectorschool.svg', value: 'ABS' },
    { title: 'Affiliation % :', icon: '../../../assets/images/icons/Vectorschool.svg', value: 'ABC School' },
    { title: 'Rating :', icon: '../../../assets/images/icons/Vectorrating.svg', value: 'ABC College', isDark: true },
  ]

  listOfActivity: any = []

  _currVoterId: any
  voterDetails: any;
  _currLanguage: any
  quickViewVisible: boolean = false;
  constructor(private router: Router, private acRoute: ActivatedRoute, private message: NzMessageService,
    private global: GlobalService, private http: HttpService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this._currLanguage = localStorage.getItem("appLanguage") || 'en';
    this.acRoute.queryParams.subscribe((param: any) => {
      if (param['tabSection']) {
        this._currTabName = param['tabSection']
      } else {
        this._currTabName = 0
      }


      if (param['id']) {
        this._currVoterId = param['id']
        this.getVoterDetals()
      }
      if (this._currTabName == 2 && param['id']) {
        this.getActivityDetails()
        this.getFollowUpDetails()
      }
    })
  }

  onTabChange(data) {
    console.log(data?.index);

    this._currTabName = data?.index
    this.router.navigate([this.router.url.split('?')[0]], { queryParams: { id: this._currVoterId, tabSection: this._currTabName } });
    console.log('1');
  }


  getActivityDetails() {
    this.api_loading['cardActvity'] = true;
    let data = { 'voter_id': this._currVoterId }
    this.http.getVoterActivity(data).subscribe((res: any) => {
      if (res.success) {
        this.listOfActivity = res.data;
        this.api_loading['cardActvity'] = false;
      } else {
        this.api_loading['cardActvity'] = false;
      }


    })
  }

  followUpList: any = []
  getFollowUpDetails() {
    this.api_loading['cardFollowup'] = true;
    this.followUpList = [];
    let data = { 'voter_id': this._currVoterId }
    this.http.getVoterFollowUp(data).subscribe((res: any) => {
      if (res.success) {
        this.followUpList = res.data
        this.api_loading['cardFollowup'] = false;
      } else {
        this.api_loading['cardFollowup'] = false;
      }
    }, error => {
      this.api_loading['cardFollowup'] = false;

    })

  }


  getVoterDetals() {
    let data = { id: this._currVoterId, 'end_point': 'FETCH_VOTER_LIST_API_URL' }
    this.api_loading['card'] = true;

    this.http.getVoterDetails(data).subscribe((res: any) => {
      if (res.success) {
        this.voterDetails = res.data[0]

        /* Remaining values:
         
        (ac_no, part_no, ) in hindi, ward_no Booth, Societies, Associations, Affiliation, Rating

        // Activity Information Tab Details API, have added the Follow up Details
        */

        this.profileLogs = [
          {
            title: 'Name', icon: '../../../assets/images/icons/Framevoter_profile.svg',
            value: this._currLanguage == 'en' ? this.voterDetails?.full_name_en : this.voterDetails?.full_name_hi,
          },

          {
            title: 'Gender', icon: '../../../assets/images/icons/Framegender.svg',
            value: this._currLanguage == 'en' ? this.voterDetails?.gender : this.voterDetails?.gender
          },

          { title: 'Date of Birth', icon: '../../../assets/images/icons/Vectorbirthday.svg', value: '22 April 1998' },

          { title: 'Mobile Number', icon: '../../../assets/images/icons/Vectormobile.svg', value: '+91 7081235894' },

          { title: 'Occupation', icon: '../../../assets/images/icons/Frameorg.svg', value: 'IT Employee' },

          { title: 'Area', icon: '../../../assets/images/icons/Vectorlocation.svg', value: 'DSL' },
          { title: 'Street', icon: '../../../assets/images/icons/Vectorlocation.svg', value: 'ABS' },
          { title: 'School', icon: '../../../assets/images/icons/Vectorschool.svg', value: 'ABC School' },
          { title: 'College', icon: '../../../assets/images/icons/Vectorschool.svg', value: 'ABC College' },
          {
            title: 'Relatives', icon: '../../../assets/images/icons/Vectorrelatives.svg',
            value: this._currLanguage == 'en' ? this.voterDetails?.rln_first_name_en : this.voterDetails?.rln_first_name_hi
          },
        ]
        this.politicalList = [
          {
            title: 'Party Name', icon: '../../../assets/images/icons/Framevoter_profile.svg',
            value: this._currLanguage == 'en' ? this.voterDetails?.part_name_en : this.voterDetails?.part_name_hi
          },
          {
            title: 'Account Number', icon: '../../../assets/images/icons/Vectoracc.svg',
            value: this._currLanguage == 'en' ? this.voterDetails?.ac_no : this.voterDetails?.ac_no
          },
          {
            title: 'Part Number :', icon: '../../../assets/images/icons/Vectoracc.svg',
            value: this._currLanguage == 'en' ? this.voterDetails?.part_no : this.voterDetails?.part_no
          },
          {
            title: 'Ward', icon: '../../../assets/images/icons/Vectorward.svg',
            value: this._currLanguage == 'en' ? this.voterDetails?.part_no : this.voterDetails?.part_no
          },
          { title: 'Booth', icon: '../../../assets/images/icons/Vectorward.svg', value: 'Zilha Parishad School Kondhve Dhawade South Facing West Side Room no 2' },

          { title: 'Societies', icon: '../../../assets/images/icons/Vectorlocation.svg', value: 'DSL' },
          { title: 'Associations :', icon: '../../../assets/images/icons/Vectorschool.svg', value: 'ABS' },
          { title: 'Affiliation % :', icon: '../../../assets/images/icons/Vectorschool.svg', value: 'ABC School' },
          { title: 'Rating :', icon: '../../../assets/images/icons/Vectorrating.svg', value: 'ABC College', isDark: true },
        ]
        this.api_loading['card'] = false;
        console.log(this.voterDetails, this.profileLogs);

      } else {
        this.api_loading['card'] = false;
      }
    }, error => {
      this.message.error(error);
      this.api_loading['card'] = false;
    });
  }

  quickViewToggle(): void {
    this.quickViewVisible = !this.quickViewVisible;
    
  }

  callMultipleAPI(){
    this.getVoterDetals();
    this.getFollowUpDetails();
    this.getActivityDetails();
  }

  activityList: any = []
  currFormType = ''
  createNewFollow(type?) {
    this.currFormType = type;
    this.quickViewVisible = true;
    if (type == 'activity') {
      this.followUpForm = this.fb.group({
        followup_datetime: ['', Validators.required],
        activity_type: ['', [Validators.required]],
        comments: ['', [Validators.required]]
      })
    } else {
      this.followUpForm = this.fb.group({
        followup_datetime: ['', Validators.required],
        followup_type: ['', [Validators.required]],
        comments: ['', [Validators.required]]
      })
    }
  }

  getActivityList() {
    let data = {'model_name':'Activity'}
    this.http.getMasterData(data).subscribe((res:any)=>{
      if(res.success) {
        this.activityList = res.data
      }
    })
  }


  getFolloupList(){
    let data = {'model_name':'FollowUp'}
    this.http.getMasterData(data).subscribe((res:any)=>{
      if(res.success) {
        this.followUpList = res.data
      }
    })
  }

  submitForm(form?) {
    if (this.followUpForm.invalid) { return }
    this.api_loading['button_markActivity'] = true
    let data = new FormData();
    data.append('voter_id', this._currVoterId)
    this.currFormType == 'activity' ?   data.append('activity_type', this.followUpForm.get('activity_type').value) : data.append('followup_type', this.followUpForm.get('followup_type').value) ;
    data.append('comments', this.followUpForm.get('comments').value)

    this.currFormType == 'activity' ? 
    data.append('activity_date', moment(this.followUpForm.get('followup_datetime').value).format("YYYY-MM-DD HH:mm:ss")) :
    data.append('followup_datetime', moment(this.followUpForm.get('followup_datetime').value).format("YYYY-MM-DD HH:mm:ss"));
    
    let url =  this.currFormType == 'activity' ? this.http.addVoterActivity(data) : this.http.addVoterFollowup(data)
    url.subscribe((res:any)=>{
      if(res.success){
        this.callMultipleAPI();
        this.quickViewVisible = false
        this.followUpForm.reset();
        this.message.success(res.message)
        this.api_loading['button_markActivity'] = false;
      }else{
        this.message.error(res.message)
        this.api_loading['button_markActivity'] = false
      }
    },error=>{
      this.api_loading['button_markActivity'] = false
    })
  }
  
  rating = 0
  isRatingDrawer:boolean = false;
  openRatingModal(){

  }

  marks: NzMarks = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
  }

  rateVoter(){
    this.api_loading['btn_Rating'] = true;
    let data= {}
    data['voter_id'] = this._currVoterId
    data['rating'] = this.rating
    this.http.addVoterRating(data).subscribe((res:any)=>{
      if(res.success){
        this.api_loading['btn_Rating'] = false
        this.isRatingDrawer = false
        this.message.success(res.message)
      }else{
        this.api_loading['btn_Rating'] = false
        this.isRatingDrawer = false
        this.message.success(res.message)
      }
    },error=>{
      this.api_loading['btn_Rating'] = false
      this.isRatingDrawer = false
    })
  }

  createVoterProfileForm(){
    this.isEdit = true
    this.voterProfileForm = this.fb.group({
      name:[this.voterDetails ? (this._currLanguage == 'en' ? this.voterDetails?.full_name_en : this.voterDetails?.full_name_hi) : '',[Validators.required]],
      gender:[this.voterDetails ? this.voterDetails?.gender  : '',[Validators.required]],
      dob:['',[Validators.required]],
      mobile:['',[Validators.required]],
      // email:['',[Validators.required]],
      occupation:['',[Validators.required]],
      area:['',[Validators.required]],
      street:['',[Validators.required]],
      school:['',[Validators.required]],
      college:['',[Validators.required]],
    })
  }
}




/*



                        <section *ngIf="isEdit">
                            <form nz-form [formGroup]="voterProfileForm">
                                <div class="row mt-3">
                                    <div class="col-md-12">
                                        <nz-form-item>
                                            <div class="d-flex justify-content-between w-100">
                                                <label>Name</label>
                                                <div><img src="../../../assets/images/icons/Framevoter_profile.svg"
                                                        alt=""></div>
                                            </div>
                                            <nz-form-control [nzSm]="16" [nzXs]="24"
                                                nzErrorTip="Please check your customer code!">
                                                <input type="text" [readonly]="true" nz-input formControlName="name"
                                                    placeholder="Customer Code" />
                                            </nz-form-control>
                                        </nz-form-item>
                                    </div>

                                    <div class="col-md-12">
                                        <nz-form-item>
                                            <div class="d-flex justify-content-between w-100">
                                                <label>Gender</label>
                                                <div><img src="../../../assets/images/icons/Framevoter_profile.svg"
                                                        alt=""></div>
                                            </div>
                                            <nz-form-control [nzSm]="16" [nzXs]="24"
                                                nzErrorTip="Please enter your gender!">
                                                <input type="text" [readonly]="true" nz-input formControlName="gender"
                                                    placeholder="Gender" />
                                            </nz-form-control>
                                        </nz-form-item>
                                    </div>




                                    <div class="col-md-12">
                                        <nz-form-item>
                                            <div class="d-flex justify-content-between w-100">
                                                <label>Date Of Birth</label>
                                                <div><img src="../../../assets/images/icons/Vectorbirthday.svg" alt="">
                                                </div>
                                            </div>
                                            <nz-form-control [nzSm]="16" [nzXs]="24"
                                                nzErrorTip="Please select your birthdate!">
                                                <nz-date-picker formControlName="dob"></nz-date-picker>
                                            </nz-form-control>
                                        </nz-form-item>
                                    </div>
                                    <div class="col-md-12">
                                        <nz-form-item>
                                            <div class="d-flex justify-content-between w-100">
                                                <label>Mobile Number</label>
                                                <div><img src="../../../assets/images/icons/Framephone.svg"
                                                        alt=""></div>
                                            </div>
                                            <nz-form-control [nzSm]="16" [nzXs]="24"
                                                nzErrorTip="Please enter your gender!">
                                                <input type="text" [readonly]="true" nz-input formControlName="mobile"
                                                    placeholder="Enter Mobile Number" />
                                            </nz-form-control>
                                        </nz-form-item>
                                    </div>
                                    <div class="col-md-12">
                                        <nz-form-item>
                                            <div class="d-flex justify-content-between w-100">
                                                <label>Occupation</label>
                                                <div><img src="../../../assets/images/icons/Frameorg.svg"
                                                        alt=""></div>
                                            </div>
                                            <nz-form-control [nzSm]="16" [nzXs]="24"
                                                nzErrorTip="Please enter your Occupation">
                                                <input type="text" [readonly]="true" nz-input formControlName="occupation"
                                                    placeholder="Enter Occupation" />
                                            </nz-form-control>
                                        </nz-form-item>
                                    </div>
                                    <div class="col-md-12">
                                        <nz-form-item>
                                            <div class="d-flex justify-content-between w-100">
                                                <label>Area</label>
                                                <div><img src="../../../assets/images/icons/Vectorlocation.svg"
                                                        alt=""></div>
                                            </div>
                                            <nz-form-control [nzSm]="16" [nzXs]="24"
                                                nzErrorTip="Please enter your area!">
                                                <input type="text" [readonly]="true" nz-input formControlName="area"
                                                    placeholder="Enter Area" />
                                            </nz-form-control>
                                        </nz-form-item>
                                    </div>
                                    <div class="col-md-12">
                                        <nz-form-item>
                                            <div class="d-flex justify-content-between w-100">
                                                <label>Street</label>
                                                <div><img src="../../../assets/images/icons/Vectorlocation.svg"
                                                        alt=""></div>
                                            </div>
                                            <nz-form-control [nzSm]="16" [nzXs]="24"
                                                nzErrorTip="Please enter your gender!">
                                                <input type="text" [readonly]="true" nz-input formControlName="gender"
                                                    placeholder="Gender" />
                                            </nz-form-control>
                                        </nz-form-item>
                                    </div>
                                    <div class="col-md-12">
                                        <nz-form-item>
                                            <div class="d-flex justify-content-between w-100">
                                                <label>School</label>
                                                <div><img src="../../../assets/images/icons/Framevoter_profile.svg"
                                                        alt=""></div>
                                            </div>
                                            <nz-form-control [nzSm]="16" [nzXs]="24"
                                                nzErrorTip="Please enter your gender!">
                                                <input type="text" [readonly]="true" nz-input formControlName="gender"
                                                    placeholder="Gender" />
                                            </nz-form-control>
                                        </nz-form-item>
                                    </div>
                                    <div class="col-md-12">
                                        <nz-form-item>
                                            <div class="d-flex justify-content-between w-100">
                                                <label>College</label>
                                                <div><img src="../../../assets/images/icons/Framevoter_profile.svg"
                                                        alt=""></div>
                                            </div>
                                            <nz-form-control [nzSm]="16" [nzXs]="24"
                                                nzErrorTip="Please enter your gender!">
                                                <input type="text" [readonly]="true" nz-input formControlName="college"
                                                    placeholder="Enter School" />
                                            </nz-form-control>
                                        </nz-form-item>
                                    </div>

                                    <!-- <div class="col-md-12">
                                        <nz-form-item>
                                            <nz-form-label [nzSm]="8" [nzXs]="24" class=" text-left" nzRequired>Date
                                            </nz-form-label>
                                            <nz-form-control [nzSm]="16" [nzXs]="24"
                                                [nzErrorTip]="'Please select Date'">
                                                <nz-input-group>
                                                    [nzDisabledDate]="disabledDate"
                                                    <nz-date-picker
                                                        formControlName="followup_datetime"></nz-date-picker>
                                                </nz-input-group>
                                            </nz-form-control>
                                        </nz-form-item>
                                    </div> -->
                                </div>
                            </form>
                        </section>



*/ 