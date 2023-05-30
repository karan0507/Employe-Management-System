import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoterProfileComponent } from './voter-profile/voter-profile.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoterRoutingModule { }
