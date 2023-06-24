import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-ad-edit-team',
  templateUrl: './ad-edit-team.component.html',
  styleUrls: ['./ad-edit-team.component.css']
})
export class AdEditTeamComponent implements OnInit {
  teamForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private acRoute: ActivatedRoute,
    private message: NzMessageService, private http: HttpService, private modal: NzModalService) { }

  _currLanguage: any;
  _currTeamId: any;
  isEdit: boolean = false;
  api_loader = { 'list': false, 'button': false };
  teamDetails: any = []
  statusList: any = []
  _currStatus: any;


  ngOnInit(): void {
    this._currLanguage = localStorage.getItem("appLanguage") || 'en';
    this.acRoute.queryParams.subscribe((params: any) => {
      if (params['id']) {
        this._currTeamId = params.id;
        this.isEdit = true;
        if (this._currTeamId) {
          this.getTeamDetails()
        }
      }
      this.createTeam();
    })
  }
  _curStatusId : any;
  _currTeamData: any;
  getTeamDetails() {
    this.api_loader['list'] = true;
    let data = { id: this._currTeamId, 'end_point': 'FETCH_VOTER_LIST_API_URL' }
    this.http.getTeamList(data).subscribe((res: any) => {
      if (res.success) {
        this.searchStaticDataGlobalFunction('UserStatus');
        this._currTeamData = res.data[0];
        console.log(this._curStatusId = res.data[0]?.status?.id, res.data?.status)
        this.getUserType();
        this.createTeam(this._currTeamData)
      }
    })
  }


  createTeam(data?) {
    this.teamForm = this.fb.group({
      first_name: [(data ? (this._currLanguage == 'en' ? data?.first_name : data?.first_name) : ''), [Validators.required]],
      last_name: [(data ? (this._currLanguage == 'en' ? data?.last_name : data?.last_name) : ''), [Validators.required]],
      user_type: [(data ? data?.user_type?.id : '')],
      designation: [(data ? (this._currLanguage == 'en' ? data?.designation : data?.designation) : ''), [Validators.required]],
      date_of_birth : [data?.date_of_birth ? data?.date_of_birth : ''],
      mobile: [(data ? (this._currLanguage == 'en' ? data?.mobile : data?.mobile) : ''), [Validators.required]],
      email: [(data ? (this._currLanguage == 'en' ? data?.email : data?.email) : '')],
      whatsapp_number: [data?.whatsapp_number ? data?.whatsapp_number : ''],
      landline_number: [data?.landline_number ? data?.landline_number : '',],
      studies: [data?.studies ? data?.studies : ''],
      EPIC_NO: [data?.speed ? data?.speed : '',[Validators.required]],
      residential: [data?.residential ? data?.residential : ''],
    })
  }

  remarks:any = "";
  isUpdateStatus : boolean = false;
  changeTaskStatus(event): void {
    if(this.remarks.length < 3){
      this.message.warning('Please enter remarks');
      return
    }
    // this.quickViewVisible = !this.quickViewVisible;
    this.modal.confirm({
      nzTitle: 'Confirm',  /*+ this.party_name + '?'*/
      nzContent: 'Before changing status',
      nzOkText: 'Confirm',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.onCLickStatusChange(event),
      nzCancelText: 'No',
      nzOnCancel: () => this.modal.closeAll()
    });
  }


  onCLickStatusChange(status) {
    let data  = new FormData();
     data.append('status',this._curStatusId),
     data.append('remarks',this.remarks),
     data.append('internal_user',this._currTeamId)
    this.http.changeTeamStatus(this._currTeamId, data).subscribe((res: any) => {
      if (res.success) {
        this.message.success(res.message);
        this.isUpdateStatus = false;;
        this.remarks = '';
        this._curStatusId = '';
        this.getTeamDetails();
      } else {
        this.message.error(res.message);
      }
    }, error => {
      this.message.error(error);
      this.remarks = '';
        this._curStatusId = '';
    })
  }


  debounce: any;
  boothList: any = [];
  searchStaticDataGlobalFunction(event?) {
    if (event) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        let data = { model_name: event }
        this.http.getMasterData(data).subscribe((res: any) => {
          if (res.success) {
            this.statusList = res.data;
          }
        })
      }, 500);
    } else {
      let data = { model_name: event }
      this.http.getMasterData(data).subscribe((res: any) => {
        if (res.success) {
          this.statusList = res.data;
        }
      })
    }
  }

  userList: any = []
  getUserType() {
    let data = { model_name: 'UserType' };
    this.http.getMasterData(data).subscribe((res: any) => {
      if (res.success) {
        this.userList = res.data;
      }
    })
  }

  designationList: any = []
  getdesignationList() {
    let data = { model_name: 'Designation' };
    this.http.getMasterData(data).subscribe((res: any) => {
      if (res.success) {
        this.designationList = res.data;
      }
    })
  }

  submitForm() {
    let data = new FormData();
    data.append('first_name', this.teamForm.get('first_name').value)
    data.append('last_name', this.teamForm.get('last_name').value)
    data.append('user_type', this.teamForm.get('user_type').value)
    data.append('designation', this.teamForm.get('designation').value)
    data.append('mobile', this.teamForm.get('mobile').value)
    data.append('email', this.teamForm.get('email').value)
    data.append('whatsapp_number', this.teamForm.get('whatsapp_number').value)
    data.append('landline_number', this.teamForm.get('landline_number').value)
    data.append('studies', this.teamForm.get('studies').value)
    data.append('date_of_birth', moment(this.teamForm.get('date_of_birth').value).format("YYYY-MM-DD"))
    
    data.append('speed', this.teamForm.get('speed').value)
    data.append('residential', this.teamForm.get('residential').value)
    this.api_loader['button'] = true;
    let url = this.isEdit ? this.http.editTeamMember(this._currTeamId, data) : this.http.addTeamMember(data);
    url.subscribe((res: any) => {
      if (res.success) {
        if (res.success) {
          this.message.success(res.message);
          this.api_loader['button'] = false;
          this.router.navigateByUrl('/team-management');
        } else {
          this.message.error(res.message);
          this.api_loader['button'] = false;

        }
      }
    },errr=>{
      this.api_loader['button'] = false;
    })
  }

}
