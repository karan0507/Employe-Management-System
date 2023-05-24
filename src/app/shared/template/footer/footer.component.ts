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
        this.global.globalNavValue.subscribe(res=>{
            if(res){
                this.radioValue = res;
            }
        })
    }

    changeAppNav(){
        // this.radioValue = event
        console.log(this.radioValue)
        this.global.setCurrNavValue(this.radioValue)    
        this.router.navigateByUrl("/"+this.radioValue)
    }
}
