import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoterProfileComponent } from './voter-profile/voter-profile.component';
import { AddEditVoterComponent } from './add-edit-voter/add-edit-voter.component';

const routes: Routes = [
  {
    path: '',
    // canActivate: [NgxPermissionsGuard],
    component: VoterProfileComponent,
    data: {
      parent: 'Voter Profile ',
      isButton: true,
      isHome: false,
      url:'/home'
      // headerDisplay: "none",
    }
  },
  {
    path: '',
    // canActivate: [NgxPermissionsGuard],
    data: {
      parent: 'Voter Profile ',
      // headerDisplay: "none",
    },
    children:[
      {
        path: 'add-voter',
        // canActivate: [NgxPermissionsGuard],
        component: AddEditVoterComponent,
        data: {
          parent: 'Add Voter',
          isButton: true,
          isHome: false,
          url:'/home'
        }
      },
      {
        path: 'edit-voter',
        // canActivate: [NgxPermissionsGuard],
        component: AddEditVoterComponent,
        data: {
          parent: 'Edit Voter',
          isButton: true,
          isHome: false,
          url:'/home'
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoterRoutingModule { }
