import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from "src/app/service/global.service";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})

export class FooterComponent implements OnInit{
    
    radioValue : any;
    // about-party, home    (Voters)
    constructor(private global:GlobalService, public router:Router){}

    ngOnInit(){
        console.log('res');
     this.radioValue = localStorage.getItem('menuItem') ? localStorage.getItem('menuItem') : 'voter'
        // this.global.globalNavValue.subscribe(res=>{
        //     console.log(res);
            
        //     if(res){
        //         this.radioValue = res;
        //     }else{
        //         this.global.setCurrNavValue('home') 
        //     }
        // })
    }

    changeAppNav(){
        // this.radioValue = event
        console.log(this.radioValue)
        // this.global.setCurrNavValue(this.radioValue)
        localStorage.setItem('menuItem',this.radioValue)    
        this.router.navigateByUrl("/"+this.radioValue)
    }
}
