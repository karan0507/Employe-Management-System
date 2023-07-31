import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaderScheduleRoutingModule } from './leader-schedule-routing.module';
import { LeaderTaskListComponent } from './leader-task-list/leader-task-list.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { SharedModule } from '../shared/shared.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddLeaderTaskComponent } from './add-leader-task/add-leader-task.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';


@NgModule({
  declarations: [LeaderTaskListComponent, AddLeaderTaskComponent],
  imports: [
    CommonModule,
    LeaderScheduleRoutingModule,
    NzCardModule,
    SharedModule,
    NzButtonModule,
    NzIconModule,
    NzTableModule,
    NzFormModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzDatePickerModule
  ]
})
export class LeaderScheduleModule { }
