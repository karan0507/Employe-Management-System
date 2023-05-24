import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-party',
  templateUrl: './about-party.component.html',
  styleUrls: ['./about-party.component.css']
})
export class AboutPartyComponent implements OnInit {

  partyTabs: any = [
    { name: 'About Party' },
    { name: 'MLA' },
    { name: 'Members' },]

  constructor() { }

  ngOnInit(): void {
  }
  

}
