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
    { 'name': 'Total Likes', 'icon': 'like', 'count': 104, 'class': 'ant-avatar-green' },
    { 'name': 'Total Comments', 'icon': 'comment', 'count': 96, 'class': 'ant-avatar-blue' },
    { 'name': 'Total Shares', 'icon': 'share-alt', 'count': 80, 'class': 'ant-avatar-purple' },
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

  postDetailData: any;
  shareTableData = []
  likesTableData = []
  commentTableData = []

  api_loader = {
    'shared': false,
    'liked': false,
    'comments': false,
  }
  constructor(private http: HttpService, public message: NzMessageService) { }

  ngOnInit(): void {
    var params_data = { "post_id": "799486741541605", "end_point": "POST_DETAIL_API_URL", "type": "" }
    this.getBackgroundDataAPIFunction(params_data, "POST_DETAIL_API_URL")
    this.getSharedList();
    this.getlikedList();
    this.getCommentList();
    // this.getBackgroundDataAPIFunction(params_data, "POST_DETAIL_TABLE_DATA_API_URL", "Share")

    // this.getBackgroundDataAPIFunction(params_data, "POST_DETAIL_TABLE_DATA_API_URL", "Reaction")
    
    // this.getBackgroundDataAPIFunction(params_data, "POST_DETAIL_TABLE_DATA_API_URL", "Comments")

  }


  getBackgroundDataAPIFunction(params_data, section, type = "") {
    this.http.getDataFromBackgroundFunction(params_data).subscribe(
      (res) => {
        if (res['data']) {

          if (section == "POST_DETAIL_API_URL") {
            this.postDetailData = res['data']
            this.listMatricsData[0]['count'] = res['data']['total_likes']
            this.listMatricsData[1]['count'] = res['data']['total_comments']
            this.listMatricsData[2]['count'] = res['data']['total_shares']
          }
          // if (section == "POST_DETAIL_TABLE_DATA_API_URL" && type == "Share") {
          //   this.shareTableData = res['data']
          // }
          // if (section == "POST_DETAIL_TABLE_DATA_API_URL" && type == "Reaction") {
          //   this.likesTableData = res['data']
          // }
          if (section == "POST_DETAIL_TABLE_DATA_API_URL" && type == "Comments") {
            this.commentTableData = res['data']
          }

        }
      }
    );
  }

  _currReshareId: any
  expandSet = new Set<number>();
  onExpandChange(id: number, checked: boolean, index): void {

    if (checked) {
      this.expandSet.add(id);
      this._currReshareId = id
      // this.getBackgroundDataAPIFunction();
    } else {
      this.expandSet.delete(id);
    }
  }

  // Get Shared List 
  sharedList: any = [];
  sharePageInd = 1;
  shareTotalCount = null;
  sharePageSize = 5;
  shareTableLoading = false;

  getSharedList(tableFilter?) {
    this.api_loader['shared'] = true
    let params_data = {}

    params_data = { "post_id": "799486741541605", "end_point": "POST_DETAIL_TABLE_DATA_API_URL", "type": "Share" }
    if (tableFilter) {
      this.sharePageInd = tableFilter?.pageIndex;
      this.sharePageSize = tableFilter?.pageSize;
      params_data['page'] = this.sharePageInd
      params_data['limit'] = this.sharePageSize
    } else {
      params_data['page'] = this.sharePageInd
      params_data['limit'] = this.sharePageSize
    }

    this.http.getDataFromBackgroundFunction(params_data).subscribe(
      (res: any) => {
        if (res['data']) {
          this.sharedList = res['data'];
          this.shareTotalCount = res.total_count;
          this.api_loader['shared'] = false
        } else {
          this.api_loader['shared'] = false
        }
      }
    );


  }


  // Get Shared List 
  likedList: any = [];
  likePageInd = 1;
  likeTotalCount = null;
  likePageSize = 5;
  likeTableLoading = false;
  getlikedList(tableFilter?) {
    this.api_loader['liked'] = true
    let params_data = {}
    params_data = { "post_id": "799486741541605", "end_point": "POST_DETAIL_TABLE_DATA_API_URL", "type": "Reaction" }
    if (tableFilter) {
      this.likePageInd = tableFilter?.pageIndex;
      this.likePageSize = tableFilter?.pageSize;
      params_data['page'] = this.likePageInd
      params_data['limit'] = this.likePageSize
    } else {
      params_data['page'] = this.likePageInd
      params_data['limit'] = this.likePageSize
    }

    this.http.getDataFromBackgroundFunction(params_data).subscribe(
      (res: any) => {
        if (res['data']) {
          this.likedList = res['data'];
          this.likeTotalCount = res.total_count;
          this.api_loader['liked'] = false
        } else {
          this.api_loader['liked'] = false
        }
      }
    );


  }

  // Get Shared List 
  commentList: any = [];
  commentPageInd = 1;
  commentTotalCount = null;
  commentPageSize = 5;
  commentTableLoading = false;
  getCommentList(tableFilter?) {

    this.api_loader['comments'] = true
    let params_data = {}
    params_data = { "post_id": "799486741541605", "end_point": "POST_DETAIL_TABLE_DATA_API_URL", "type": "Comments" }
    // params_data = { "post_id": "799486741541605", "end_point": "POST_DETAIL_TABLE_DATA_API_URL", "type": "Reaction" }
    if (tableFilter) {
      this.commentPageInd = tableFilter?.pageIndex;
      this.commentPageSize = tableFilter?.pageSize;
      params_data['page'] = this.commentPageInd
      params_data['limit'] = this.commentPageSize
    } else {
      params_data['page'] = this.commentPageInd
      params_data['limit'] = this.commentPageSize
    }

    this.http.getDataFromBackgroundFunction(params_data).subscribe(
      (res: any) => {
        if (res['data']) {
          this.commentList = res['data'];
          this.commentTotalCount = res.total_count;
          
          this.api_loader['comments'] = false
        } else {
          this.api_loader['comments'] = false
        }
      }
    );


  }
}
