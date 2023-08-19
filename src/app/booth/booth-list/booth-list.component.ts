import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
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

  constructor(
    private http: HttpService,
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
    this.getBoothList()
  }

  getBoothList(event?: any) {
    let data = {}
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

}
