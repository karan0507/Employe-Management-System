import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from '../service/http.service';


interface ItemData {
    href: string;
    title: string;
    avatar: string;
    description: string;
    content: string;
}

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {

    postPage = 1;
    postPageSize = 30;

    followerPage = 1;
    followerPageSize = 30;

    data: ItemData[] = [];

    LatestPostDataSet = [];
    StrongFollowersList = [];

    // matrics  d)
    listMatricsData = [
        { 'name': 'Strong Followers', 'icon': 'check-circle', 'count': 104, 'class': 'ant-avatar-green' },
        { 'name': 'Regional Followers', 'icon': 'usergroup-add', 'count': 96, 'class': 'ant-avatar-blue' },
        { 'name': 'Average likes per post', 'icon': 'field-time', 'count': "0", 'class': 'ant-avatar-purple' },
        { 'name': 'Total negative posts', 'icon': 'field-time', 'count': "0", 'class': 'ant-avatar-purple' },
    ]

    constructor(private http: HttpService, public message: NzMessageService) { }

    ngOnInit(): void {
        this.loadData(1);
        this.getPostList();
        this.getFollowerList()
        // this.getBackgroundDataAPIFunction(params_data, "LATEST_POST_API_URL")

        // this.getBackgroundDataAPIFunction(params_data, "STRONG_FOLLOWERS_API_URL")
        this.getNegativeCount()
    }


    loadData(pi: number): void {
        this.data = new Array(2).fill({}).map((_, index) => ({
            href: 'http://ant.design',
            title: `Post ID - 799486741541605`,
            avatar: 'assets/images/avatars/dy_profile_image.jpg',
            description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content: "माँ कामाख्या देवी के दर्शन करने का सौभाग्य प्राप्त हुआ ।।\n\nGot the privilege to visit Maa Kamakhya Devi."
        }));
    }

    api_loader = { 'postList': false, 'followerList': false }

    getBackgroundDataAPIFunction(params_data, section) {
        this.http.getDataFromBackgroundFunction(params_data).subscribe(
            (res) => {
                if (res['data']) {
                    if (section == "LATEST_POST_API_URL") {
                        this.LatestPostDataSet = res['data']
                        console.log(this.LatestPostDataSet)
                    } else {
                        this.StrongFollowersList = res['data']
                    }

                    console.log(res['data'])
                }
            }
        );
    }

    getPostList(tableFilter?, type?) {
        this.api_loader['postList'] = true
        var params_data = { "link": "https://www.facebook.com/dyadav.bhilai.official", "end_point": "LATEST_POST_API_URL" }

        if (tableFilter) {
            console.log(tableFilter);
            if (type == 'pageIndex') {
                this.postPage = tableFilter;
            } else {
                this.postPageSize = tableFilter;
            }
            params_data['page'] = this.postPage
            params_data['imit'] = this.postPageSize
        } else {
            params_data['page'] = this.postPage
            params_data['imit'] = this.postPageSize
        }
        this.http.getDataFromBackgroundFunction(params_data).subscribe(
            (res) => {
                if (res['data']) {
                    this.LatestPostDataSet = res['data'];
                    console.log("latest Post",this.LatestPostDataSet)
                    this.api_loader['postList'] = false
                } else {
                    this.api_loader['postList'] = false
                }
            }
        );
    }

    getFollowerList(tableFilter?, type?) {
        this.api_loader['followerList'] = true
        let params_data = {}
        params_data['link'] = "https://www.facebook.com/dyadav.bhilai.official",
            params_data['end_point'] = "STRONG_FOLLOWERS_API_URL"
        if (tableFilter) {
            console.log(tableFilter);
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
            (res) => {
                if (res['data']) {
                    
                    this.StrongFollowersList = res['data'];
                    console.log("StrongFollowersList", this.StrongFollowersList);
                    this.api_loader['followerList'] = false
                }else{
                    this.api_loader['followerList'] = false
                }
            }
        );
    }

    _currUserNegative: any;
    getNegativeCount() {
        let data = {}
        data["link"] = "https://www.facebook.com/dyadav.bhilai.official";
        data["end_point"] = "FETCH_DASHBOARD_MATRIC_DATA";

        this.http.getDataFromBackgroundFunction(data).subscribe((res: any) => {
            if (res.success) {
                this.listMatricsData = [
                    { 'name': 'Strong Followers', 'icon': 'cluster', 'count': res.data.total_strong_follower, 'class': 'ant-avatar-cyan' },
                    { 'name': 'Regional Followers', 'icon': 'environment', 'count': res.data.total_regional_follower, 'class': 'ant-avatar-blue' },
                    { 'name': 'Average likes per post', 'icon': 'like', 'count': res.data.average_like_per_post, 'class': 'ant-avatar-green' },
                    { 'name': 'Total negative likes', 'icon': 'dislike', 'count': res.data.total_negative_likes, 'class': 'ant-avatar-red' },
                    { 'name': 'Total negative posts', 'icon': 'stop', 'count': res.data.total_negative_post, 'class': 'ant-avatar-red' },
                ]
            }
        })
    }

    openFacebook(url) {
        console.log(url);
        window.open(url)

    }

}


