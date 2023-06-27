import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-primary-attributes',
  templateUrl: './primary-attributes.component.html',
  styleUrls: ['./primary-attributes.component.css']
})
export class PrimaryAttributesComponent implements OnInit {
  @Input() voterId;
  attributeList:any = []
  constructor(private http:HttpService) { }

  ngOnInit(): void {
    console.log(this.voterId);
    
    this.getTagsList();
  }


  getTagsList(keyword?){
    let data = {}
    // this.http.getVotersTagList()
  }

}
