import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    {
        path: 'home',
        // canActivate: [NgxPermissionsGuard],
        component: DashboardComponent,
        data: {
            title: 'Dashboard ',
            headerDisplay: "none",
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule { }
