import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** Import any ng-zorro components as the module required except icon module */
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NgChartjsModule } from 'ng-chartjs';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzListModule } from 'ng-zorro-antd/list';
/** Assign all ng-zorro modules to this array*/
const antdModule = [
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
    NzListModule
]

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        DashboardRoutingModule,
        NzDividerModule,
        NzDatePickerModule,
        NgxPermissionsModule.forChild(),
        ...antdModule
    ],
    exports: [],
    declarations: [
        DashboardComponent,
        CandidateDashboardComponent
    ]
})
export class DashboardModule { }
