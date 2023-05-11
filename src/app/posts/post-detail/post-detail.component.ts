import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  listMatricsData = [
    { 'name' : 'Total Likes', 'icon' : 'like', 'count' : 104, 'class' : 'ant-avatar-green' },
    { 'name' : 'Total Comments', 'icon' : 'comment', 'count' : 96, 'class' : 'ant-avatar-blue' },
    { 'name' : 'Total Shares', 'icon' : 'share-alt', 'count' : "2.34 Hours", 'class' : 'ant-avatar-purple' },
  ]


  listOfData = [
    {
      'name': 'A Data',
      're_share': 3
    },
    {
      'name': 'A Data',
      're_share': 3
    },
    {
      'name': 'A Data',
      're_share': 3
    },
    {
      'name': 'A Data',
      're_share': 3
    }
  ];

  postDetailData : any;
  shareTableData = []
  likesTableData = []
  commentTableData = []

  constructor(private http: HttpService, public message: NzMessageService) { }

  ngOnInit(): void {
    var params_data = {"post_id": "799486741541605", "end_point": "POST_DETAIL_API_URL", "type": ""}
    this.getBackgroundDataAPIFunction(params_data, "POST_DETAIL_API_URL")
    params_data = {"post_id": "799486741541605", "end_point": "POST_DETAIL_TABLE_DATA_API_URL", "type": "Share"}
    this.getBackgroundDataAPIFunction(params_data, "POST_DETAIL_TABLE_DATA_API_URL", "Share")
    params_data = {"post_id": "799486741541605", "end_point": "POST_DETAIL_TABLE_DATA_API_URL", "type": "Reaction"}
    this.getBackgroundDataAPIFunction(params_data, "POST_DETAIL_TABLE_DATA_API_URL", "Reaction")
    params_data = {"post_id": "799486741541605", "end_point": "POST_DETAIL_TABLE_DATA_API_URL", "type": "Comments"}
    this.getBackgroundDataAPIFunction(params_data, "POST_DETAIL_TABLE_DATA_API_URL", "Comments")

  }

  getBackgroundDataAPIFunction(params_data, section, type=""){
    this.http.getDataFromBackgroundFunction(params_data).subscribe(
      (res) => {
        if (res['data']) {

          if(section == "POST_DETAIL_API_URL"){
            this.postDetailData = res['data']
            this.listMatricsData[0]['count'] = res['data']['total_likes']
            this.listMatricsData[2]['count'] = res['data']['total_comments']
            this.listMatricsData[3]['count'] = res['data']['total_shares']
          }
          if(section == "POST_DETAIL_TABLE_DATA_API_URL" && type == "Share"){
            this.shareTableData = res['data']
          }
          if(section == "POST_DETAIL_TABLE_DATA_API_URL" && type == "Reaction"){
            this.likesTableData = res['data']
          }
          if(section == "POST_DETAIL_TABLE_DATA_API_URL" && type == "Comments"){
            this.commentTableData = res['data']
          }
          

          // for(var x in this.listMatricsData){
          //   if (this.listMatricsData[x]['Total Likes']){
          //     this.listMatricsData[x]['Total Likes'] = res['data']['total_likes']
          //   }
          // }
          console.log(res['data'])
        }
      }
    );
  }

}
