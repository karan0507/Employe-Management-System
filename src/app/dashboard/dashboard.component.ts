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

    data: ItemData[] = [];

    LatestPostDataSet = [];
    StrongFollowersList = [];

    // matrics
  listMatricsData = [
    { 'name' : 'Strong Followers', 'icon' : 'check-circle', 'count' : 104, 'class' : 'ant-avatar-green' },
    { 'name' : 'Regional Followers', 'icon' : 'usergroup-add', 'count' : 96, 'class' : 'ant-avatar-blue' },
    { 'name' : 'Average Time', 'icon' : 'field-time', 'count' : "2.34 Hours", 'class' : 'ant-avatar-purple' },
  ]
    
    constructor(private http: HttpService, public message: NzMessageService) { }

    ngOnInit(): void {
        this.loadData(1);

        var params_data = {"link": "https://www.facebook.com/dyadav.bhilai.official", "end_point": "LATEST_POST_API_URL"}
        this.getBackgroundDataAPIFunction(params_data, "LATEST_POST_API_URL")
        params_data['end_point'] = "STRONG_FOLLOWERS_API_URL"
        this.getBackgroundDataAPIFunction(params_data, "STRONG_FOLLOWERS_API_URL")

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



    getBackgroundDataAPIFunction(params_data, section){
        this.http.getDataFromBackgroundFunction(params_data).subscribe(
            (res) => {
                if (res['data']) {
                    if (section == "LATEST_POST_API_URL"){
                        this.LatestPostDataSet = res['data']
                        console.log(this.LatestPostDataSet)
                    } else{
                        this.StrongFollowersList = res['data']
                    }
                    
                    console.log(res['data'])
                }
            }
        );
    }

    openFacebook(url){
        console.log(url);
        window.open(url)

    }

}


