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
    
    constructor(private http: HttpService, public message: NzMessageService) { }

    ngOnInit(): void {
        this.loadData(1);
    }


    loadData(pi: number): void {
        this.data = new Array(2).fill({}).map((_, index) => ({
          href: 'http://ant.design',
          title: `ant design part ${index} (page: ${pi})`,
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources ' +
            '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
        }));
    }

}


