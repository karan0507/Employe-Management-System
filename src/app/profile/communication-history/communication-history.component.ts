import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communication-history',
  templateUrl: './communication-history.component.html',
  styleUrls: ['./communication-history.component.css']
})
export class CommunicationHistoryComponent implements OnInit {
  _currSearchValue : any;
  listOfActivity: any = [
    {name:'Recent Activity',description:'By Ashwin',voter_name:'Society Pooja',added_at:'17 Feb 2023', updated_at:'12:30 PM'},
    {name:'Last Month',description:'By Ashwin',voter_name:'ATM Mehta',added_at:'17 Feb 2023',updated_at:'12:30 PM'},
    {name:'December',description:'By Ashwin',voter_name:'Society Pooja',added_at:'17 Feb 2023',updated_at:'12:30 PM'},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
