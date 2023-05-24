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
    {title:'Date of Birth',icon:'../../../assets/images/icons/FramebirthDay.svg',value:'Prashanth'},
    {title:'Mobile Number',icon:'../../../assets/images/icons/Framephone.svg',value:'909090900'},
    {title:'Email ID',icon:'../../../assets/images/icons/Frameemail.svg',value:'prashanthshah@gmail.com'},
  ]  
  constructor() { }

  ngOnInit(): void {
  }

}
