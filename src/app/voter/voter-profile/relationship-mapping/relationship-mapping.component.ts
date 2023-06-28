import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-relationship-mapping',
  templateUrl: './relationship-mapping.component.html',
  styleUrls: ['./relationship-mapping.component.css']
})
export class RelationshipMappingComponent implements OnInit {
  @Input() voterId;
  attributeList:any = [];
  tagList : any = [];
  constructor(private http:HttpService) { }

  ngOnInit(): void {
    console.log(this.voterId);
    this._currLanguage = localStorage.getItem("appLanguage") || 'en';
    if(this.voterId){
      this.getAttributeList();
    }
  }

  _currLanguage : any;
  getAttributeList(keyword?){
    let data = {  "voter_id":this.voterId }
    this.http.getRelationshipTags(data).subscribe((res:any)=>{
      if(res.success){
        this.attributeList = res.data
      }
    })
  }

  _currPrimaryAttributeID : any;
  getTagLIst(){
    let data = new FormData();
    data.append("voter_id",this.voterId);
    data.append("primary_attribute",this._currPrimaryAttributeID)
  }
}