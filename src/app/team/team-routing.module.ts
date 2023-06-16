import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamManagementComponent } from './team-management/team-management.component';
import { AdEditTeamComponent } from './ad-edit-team/ad-edit-team.component';

const routes: Routes = [
  {
    path: '',
    // canActivate: [NgxPermissionsGuard],
    
    component: TeamManagementComponent,
    data: {
      title:'Team Management List',
      parent: 'Team Management',
      isButton: false,
      isHome: false,
      custom_url:'/team-management',
    }
  },
  {
    path: '',
    data: {
      title:'Team Management List',
      parent: 'Team Management',
      isButton: false,
      isHome: false,
      custom_url:'/team-management',
    },
    children: [
      {
        path: 'add-team',
        component: AdEditTeamComponent,
        data: {
          parent: 'Team Management',
          title:'Add Team',
          isButton: false,
          isHome: false,
          custom_url:'/team-management/add-team',
          
        }
      },
      {
        path: 'edit-team',
        // canActivate: [NgxPermissionsGuard],
        
        component: AdEditTeamComponent,
        data: {
          parent: 'Team Management',
          title:'Edit Team',
          isButton: false,
          isHome: false,
          custom_url:'/team-management/edit-team',
          
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
