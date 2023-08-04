import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountListComponent } from './account-list/account-list.component';
import { AddEditAccounLinksComponent } from './add-edit-accoun-links/add-edit-accoun-links.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgChartjsModule } from 'ng-chartjs';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';


@NgModule({
  declarations: [AccountListComponent, AddEditAccounLinksComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    NzButtonModule,
    NzCardModule,
    NzFormModule,
    NzSelectModule,
    NzTableModule,
    NzIconModule,
    NzAvatarModule,
    NgChartjsModule,
    NzBadgeModule,
    NzStatisticModule,
    NzInputModule,
    NzProgressModule,
    NzTagModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    NzListModule,
    NzPageHeaderModule,
    NzDropDownModule,
    NzModalModule,
    NzDrawerModule
  ]
})
export class AccountModule { }
