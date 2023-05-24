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
  profileForm : FormGroup;
  _currUserId:any

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
  constructor(private fb:FormBuilder, private message:NzMessageService, private router:Router, 
    private acroute:ActivatedRoute, private http:HttpService) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      first_name:['',[Validators.required]],
      last_name:['',[Validators.required]],
      gender:['',[Validators.required]],
      birth_date:['',[Validators.required]],
      mobile:['',[Validators.required]],
      email:['',[Validators.required]],
    })
    this.acroute.queryParams.subscribe((param:any)=>{
      if(param['id']){
        this._currUserId = param['id']
      }
      if(this._currUserId){
        // this.getUserDetails()
      }
    })
  }

  getUserDetails(){
    let data = {}
    this.http.getUserProfile(data).subscribe((res:any)=>{
      if(res.success){
        this.profileForm = this.fb.group({
          first_name:res.data?.fill,
          last_name:res.data?.fill,
          gender:res.data?.fill,
          birth_date:res.data?.fill,
          mobile:res.data?.fill,
          email:res.data?.fill,
        })
      }
    })
  }
}
