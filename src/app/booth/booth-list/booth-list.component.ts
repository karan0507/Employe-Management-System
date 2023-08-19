import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-booth-list',
  templateUrl: './booth-list.component.html',
  styleUrls: ['./booth-list.component.css']
})
export class BoothListComponent implements OnInit {

  boothList = []
  total_count: number
  page: number = 1
  limit: number = 30

  isVisible: boolean = false
  fileList: any

  exportFileForm: FormGroup
  _currLanguage: any

  constructor(
    private http: HttpService,
    private message: NzMessageService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this._currLanguage = localStorage.getItem("appLanguage") || 'en';
    this.exportFileForm = this.formBuilder.group({
      source_file: [null, [Validators.required]],
      source_type: ['', [Validators.required]]
    })

    this.getBoothList()
  }

  getBoothList(event?: any) {
    let data = {}
    if (event) {
      this.page = event?.pageIndex;
      this.limit = event?.pageSize;
      data['page'] = this.page
      data['limit'] = this.limit
    } else {
      data['page'] = this.page
      data['limit'] = this.limit
    }
    this.http
    .getBoothList(data)
    .subscribe(
      (res: any) => {
        if(res?.success) {
          this.boothList = res?.data
          this.total_count = res?.total_count
        }else {
          this.message.error('Something went wrong')
        }
      }
    )
  }

  // file upload
  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      // this.msg.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      // this.msg.error(`${info.file.name} file upload failed.`);
    }
  }

  onSubmit() {
    let formData = new FormData
    Object.keys(this.exportFileForm.controls)?.forEach(controlName => {
      formData.append(controlName, this.exportFileForm?.get(controlName)?.value)
    })
    this.postBooth(formData)
  }

  postBooth(formData: FormData) {
    this.http
    .postBooth(formData)
    .subscribe(
      (res: any)=> {
        if(res.success) {
          this.message.success('File added successfully')
        }else {
          this.message.error('Something went wrong')
        }
        this.getBoothList()
        this.isVisible = false
      }, (error: any) => {
        this.message.error('Something went wrong')
      }
    )
  }

}
