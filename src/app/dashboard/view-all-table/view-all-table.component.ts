import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-view-all-table',
  templateUrl: './view-all-table.component.html',
  styleUrls: ['./view-all-table.component.css']
})
export class ViewAllTableComponent implements OnInit {

  constructor(private http:HttpService) { }
  followerPage :1
  followerPageSize :30;
  total_count :any;
  ngOnInit(): void {
  }
  _currUser : any;
  api_loader = {'followerList':false}
  StrongFollowersList : any = []
  getFollowerList(tableFilter?, type?) {
    this.api_loader['followerList'] = true
    let params_data = {}
    params_data['link'] = "https://www.facebook.com/dyadav.bhilai.official",
        params_data['end_point'] = "STRONG_FOLLOWERS_API_URL";
        if(this._currUser){
            params_data[''] = this._currUser;
        }
    if (tableFilter) {
        if (type == 'pageIndex') {
            this.followerPage = tableFilter;
        } else {
            this.followerPageSize = tableFilter;
        }
        params_data['page'] = this.followerPage
        params_data['imit'] = this.followerPageSize
    } else {
        params_data['page'] = this.followerPage
        params_data['imit'] = this.followerPageSize
    }
    this.http.getDataFromBackgroundFunction(params_data).subscribe(
        (res:any) => {
            if (res['data']) {

                this.StrongFollowersList = res['data'];
                this.total_count = res.total_count;
                this.api_loader['followerList'] = false
            } else {
                this.api_loader['followerList'] = false
            }
        }
    );
}
}
