import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  quickViewVisible : boolean = false;
  _currSearchValue : any;
  votersist:any = [
    {user_name:'Amit Jain',epic_no:'1685419',url:'../.././../assets/images/avatars/dy_post_image.jpg', tags:[{value:'Booth no 5'},{value:'Ward No 8'}]},
    {user_name:'Ayesha',epic_no:'1685419',url:'../.././../assets/images/avatars/thumb-9.jpg', tags:[{value:'Booth no 5'},{value:'Ward No 8'}]},
    {user_name:'Amit Jain',epic_no:'1685419',url:'../.././../assets/images/avatars/thumb-10.jpg', tags:[{value:'Booth no 5'},{value:'Ward No 8'}]},
    {user_name:'Amit Jain',epic_no:'1685419',url:'../.././../assets/images/avatars/thumb-8.jpg', tags:[{value:'Booth no 5'},{value:'Ward No 8'}]}
  ]
  constructor() { }


  
  ngOnInit(): void {
  }

  quickViewToggle(): void {
    this.quickViewVisible = !this.quickViewVisible;
  }

}
