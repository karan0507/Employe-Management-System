import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  profileLogs : any = [
    {title:'First name', icon:'../../../assets/images/icons/FrameuserInfo.svg', value:'Prashanth'},
    {title:'Last name',icon:'../../../assets/images/icons/FrameuserInfo.svg',value:'Shah'},
    {title:'Gender',icon:'../../../assets/images/icons/Framegender.svg',value:'Male'},
    {title:'Date of Birth',icon:'../../../assets/images/icons/FramebirthDay.svg',value:'22 April 1998'},
    {title:'Mobile Number',icon:'../../../assets/images/icons/Framephone.svg',value:'909090900'},
    {title:'Email ID',icon:'../../../assets/images/icons/Frameemail.svg',value:'prashanthshah@gmail.com'},
  ]  
  constructor() { }

  _currGlobalData:any;
  ngOnInit(): void {
    this._currGlobalData = JSON.parse(localStorage.getItem('iyc_user_data'));
    console.log("profile",this._currGlobalData)
    this.profileLogs  = [
      {title:'First name', icon:'../../../assets/images/icons/FrameuserInfo.svg', value:this._currGlobalData?.data?.first_name},
      {title:'Last name',icon:'../../../assets/images/icons/FrameuserInfo.svg',value:this._currGlobalData?.data?.last_name},
      {title:'Gender',icon:'../../../assets/images/icons/Framegender.svg',value:'Male'},
      {title:'Date of Birth',icon:'../../../assets/images/icons/FramebirthDay.svg',value:this._currGlobalData?.data?.date_of_birth},
      {title:'Mobile Number',icon:'../../../assets/images/icons/Framephone.svg',value:this._currGlobalData?.data?.mobile},
      {title:'Email ID',icon:'../../../assets/images/icons/Frameemail.svg',value:this._currGlobalData?.data?.email},
    ]  
  }

}
