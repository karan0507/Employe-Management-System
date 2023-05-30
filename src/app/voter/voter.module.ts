import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoterRoutingModule } from './voter-routing.module';
import { VoterProfileComponent } from './voter-profile/voter-profile.component';
import { AddEditVoterComponent } from './add-edit-voter/add-edit-voter.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzSliderModule } from 'ng-zorro-antd/slider';


@NgModule({
  declarations: [
    VoterProfileComponent,
    AddEditVoterComponent
  ],
  imports: [
    CommonModule,
    VoterRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule,
    NzAvatarModule,
    NzIconModule,
    NzTabsModule,
    NzStepsModule,
    NzDividerModule,
    NzCardModule,
    NzDrawerModule,
    NzDropDownModule,
    NzSelectModule,
    NzDatePickerModule,
    NzInputModule,
    NzTimePickerModule,
    NzTagModule,
    NzSliderModule
  ]
})
export class VoterModule { }
