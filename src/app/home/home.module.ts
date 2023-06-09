import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { TemplateModule } from "../shared/template/template.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { SharedModule } from '../shared/shared.module';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { AboutPartyComponent } from './about-party/about-party.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ProfileImgPipe} from '../pipes/profile-img-pipe.pipe';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';


@NgModule({
    declarations: [HomeComponent, AboutPartyComponent, ProfileImgPipe],
    imports: [
        CommonModule,
        HomeRoutingModule,
        NzInputModule,
        NzDividerModule,
        NzButtonModule,
        NzTabsModule,
        NzIconModule,
        NzDrawerModule,
        TemplateModule,
        FormsModule,
        ReactiveFormsModule,
        NzFormModule,
        NzTagModule,
        SharedModule,
        NzCardModule,
        NzTableModule,
        NzSelectModule,
        NzAvatarModule
    ]
})
export class HomeModule { }
