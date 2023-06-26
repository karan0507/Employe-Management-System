import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.css']
})
export class AddEditTaskComponent implements OnInit {

  _currTaskId: any;
  taskDetails: any;
  taskForm: FormGroup;
  _currLanguage: any;
  isEdit: boolean = false;
  api_loading = { card: false, button: false }
  constructor(private fb: FormBuilder, private router: Router, private acRoute: ActivatedRoute, private message: NzMessageService,
    private http: HttpService, private modal: NzModalService) { }

  ngOnInit(): void {
    this._currLanguage = localStorage.getItem("appLanguage") || 'en';
    this.acRoute.queryParams.subscribe((params: any) => {
      if (params['id']) {
        this._currTaskId = params.id;
        this.isEdit = true;
        if (this._currTaskId) {
          this.getInternalUser();
          this.getVoters();
          this.searchMasterData('Sector');
          this.searchMasterData('Booth');
          this.searchMasterData('Ward');
          this.searchMasterData('Street');
          this.searchMasterData('Places');
          this.gettaskLists();
          this.getTaskDetails();
        }
      }
      this.createTask();

    })
    // debugger;
  }

  getTaskDetails() {

    let data = { id: this._currTaskId, 'end_point': 'FETCH_VOTER_LIST_API_URL' }
    this.api_loading['card'] = true;

    this.http.getTaskList(data).subscribe((res: any) => {
      if (res.success) {
        this.taskDetails = res.data[0];

        if (this.taskDetails['sector']?.length > 0) {
          let sector = [];
          this.taskDetails['sector'].forEach(element => {
            sector.push(element.id)
          });
          this.taskDetails['sector'] = sector;
        }

        if (this.taskDetails['street']?.length > 0) {
          let street = [];
          this.taskDetails['street'].forEach(element => {
            street.push(element.id)
          });
          this.taskDetails['street'] = street;
        }


        if (this.taskDetails['places']?.length > 0) {
          let places = [];
          this.taskDetails['places'].forEach(element => {
            places.push(element.id)
          });
          this.taskDetails['places'] = places;
        }

        if (this.taskDetails['ward']?.length > 0) {
          let ward = [];
          this.taskDetails['ward'].forEach(element => {
            ward.push(element.id)
          });
          this.taskDetails['ward'] = ward;
        }

        if (this.taskDetails['booth']?.length > 0) {
          let booth = [];
          this.taskDetails['booth'].forEach(element => {
            booth.push(element.id)
          });
          this.taskDetails['booth'] = booth;
        }



        this.createTask(this.taskDetails)
        this.api_loading['card'] = false;
      } else {
        this.api_loading['card'] = false;
      }
    }, error => { this.api_loading['card'] = false; })
  }


  createTask(data?) {
    this.taskForm = this.fb.group({
      task_type: [(data ? data?.task_type?.id : ''), [Validators.required]],
      name: [(data ? (this._currLanguage == 'en' ? data?.name?.en : data?.name?.hi) : '')],
      discription: [(data ? (this._currLanguage == 'en' ? data?.discription?.en : data?.discription?.hi) : ''), [Validators.required]],
      internal_user: [data ? [data?.internal_user?.id] : [], [Validators.required]],
      voters: [data?.voters ? data?.voters : []],
      booth: [data ? data?.booth : [], [Validators.required]],
      ward: [data?.ward ? data?.ward : [],],
      street: [data?.street ? data?.street : []],
      places: [data?.place ? data?.place?.id : []],
      sector: [data?.sector ? data?.sector : [],],
      task_date: [data?.task_date ? data?.task_date : '', [Validators.required]],
    })

    if (this.taskDetails?.voters?.length > 0) {
      this.taskDetails?.sector.forEach(element => {
        this.taskForm.get('sector').value.push(element.id)
      });
    } else {
      this.taskForm.controls['sector'].setValue([]);
    }
  }

  submitForm() {
    if (this.taskForm.invalid) {
      this.message.warning("Please check the required fields")
      return
    }
    this.api_loading['button'] = true;
    var form_data = new FormData();
    form_data.append('task_type', this.taskForm.get('task_type').value);
    form_data.append('name', this.taskForm.get('name').value);
    form_data.append('discription', this.taskForm.get('discription').value);
    form_data.append('internal_user', JSON.stringify(this.taskForm.get('internal_user').value));
    form_data.append('task_date', this.taskForm.get('task_date').value ? moment(this.taskForm.get('task_date').value).format("YYYY-MM-DD") : '');

    if (this.taskForm.get('voters').value[0]) {
      form_data.append('voters', JSON.stringify(this.taskForm.get('voters').value));
    }
    if (this.taskForm.get('booth').value[0]) {
      form_data.append('booth', JSON.stringify(this.taskForm.get('booth').value));
    }
    if (this.taskForm.get('ward').value[0]) {
      form_data.append('ward', JSON.stringify(this.taskForm.get('ward').value));
    }
    if (this.taskForm.get('street').value[0]) {
      form_data.append('street', JSON.stringify(this.taskForm.get('street').value));
    }
    if (this.taskForm.get('sector').value[0]) {
      form_data.append('sector', JSON.stringify(this.taskForm.get('sector').value));
    }
    if (this.taskForm.get('places').value?.length > 0) {
      form_data.append('place', this.taskForm.get('places').value ? this.taskForm.get('places').value : '');
    }






    let url = this.isEdit == false ? this.http.addTasks(form_data) : this.http.editTasks(this._currTaskId, form_data);
    url.subscribe((res: any) => {
      if (res.success) {
        this.message.success(res.message);
        this.router.navigateByUrl('/task-management');
        this.api_loading['button'] = false;
      } else {
        this.api_loading['button'] = false;
      }
    }, errpr => {
      this.api_loading['button'] = false;
    })
  }

  taskList: any = [];
  task_debounce: any;
  gettaskLists(key?) {
    if (key) {
      clearTimeout(this.task_debounce);
      this.task_debounce = setTimeout(() => {
        let data = { model_name: 'Tasks' }
        this.http.getMasterData(data).subscribe((res: any) => {
          if (res.success) {
            this.taskList = res.data;
          }
        })
      }, 500);
    } else {
      let data = { model_name: 'Tasks' }
      this.http.getMasterData(data).subscribe((res: any) => {
        if (res.success) {
          this.taskList = res.data;
        }
      })
    }
  }

  internal_user_list: any = [];
  in_user_debounce: any;
  getInternalUser(key?) {

    if (key) {
      clearTimeout(this.in_user_debounce);
      this.in_user_debounce = setTimeout(() => {
        let data = { 'end_point': 'FETCH_VOTER_LIST_API_URL' }
        this.http.getTeamList(data).subscribe((res: any) => {
          if (res.success) {
            this.internal_user_list = res.data;
          }
        })
      }, 500);
    } else {
      let data = { 'end_point': 'FETCH_VOTER_LIST_API_URL' }
      this.http.getTeamList(data).subscribe((res: any) => {
        if (res.success) {
          this.internal_user_list = res.data;
        }
      })
    }
  }

  voters: any = [];
  voter_debounce: any;
  getVoters(key?) {
    if (key) {
      clearTimeout(this.voter_debounce);
      this.voter_debounce = setTimeout(() => {
        let data = { 'end_point': 'FETCH_VOTER_LIST_API_URL' }
        if (key) {
          data['search_param'] = key.target.value
        }
        this.http.getVoterList(data).subscribe((res: any) => {
          if (res.success) {
            this.voters = res.data;
          }
        })
      }, 500);
    } else {
      let data = { 'end_point': 'FETCH_VOTER_LIST_API_URL' }
      this.http.getVoterList(data).subscribe((res: any) => {
        if (res.success) {
          this.voters = res.data;
        }
      })
    }
  }


  changeTaskStatus(event): void {
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
    let data = { 'status': status }
    this.http.editTasks(this._currTaskId, data).subscribe((res: any) => {
      if (res.success) {
        this.message.success(res.message);
        this.getTaskDetails();
      } else {
        this.message.error(res.message);
      }
    }, error => {
      this.message.error(error);
    })
  }



  debounce: any;
  boothList: any = [];
  wardList: any = [];
  sectorList: any = [];
  _crrAssembly: any;
  assemblyList: any = [];
  _currStreet: any;
  streetList: any = [];
  _currLane: any;
  laneList: any = [];
  placeList: any = []
  searchMasterData(event, data?) {
    let param = {}
    if (data) {
      clearTimeout(this.debounce);

      this.debounce = setTimeout(() => {
        //  if(event == 'Places'){
        //    param = { master_model: event }
        //  }else{
        //    param = { model_name: event }
        //  }
        param = { model_name: event }
        this.http.getMasterData(param).subscribe((res: any) => {
          if (res.success) {
            if (event == 'Booth') {
              this.boothList = res.data;
            } else if (event == 'Ward') {
              this.wardList = res.data;
            } else if (event == 'Sector') {
              this.sectorList = res.data;
            } else if (event == 'Street') {
              this.streetList = res.data;
            }
            else if (event == 'Lane') {
              this.laneList = res.data;
            }
            else if (event == 'Assembly') {
              this.assemblyList = res.data;
            } else if (event == 'Places') {
              this.placeList = res.data;
            }

          }
        })
      }, 500);
    } else {
      param = { model_name: event }
      this.http.getMasterData(param).subscribe((res: any) => {
        console.log(event);

        if (res.success) {
          if (event == 'Booth') {

            this.boothList = res.data;
            console.log(res.data, this.boothList);

          } else if (event == 'Ward') {
            this.wardList = res.data;
          } else if (event == 'Sector') {
            this.sectorList = res.data;
          } else if (event == 'Street') {
            this.streetList = res.data;
          }
          else if (event == 'Lane') {
            this.laneList = res.data;
          }
          else if (event == 'Assembly') {
            this.assemblyList = res.data;
          } else if (event == 'Places') {
            this.placeList = res.data;
          }

        }
      })
    }
  }
}