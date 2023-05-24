import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CommunicationHistoryComponent } from './communication-history/communication-history.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: '',
    // canActivate: [NgxPermissionsGuard],
    component: UserProfileComponent,
    data: {
        parent: 'View Profile ',
        isButton:true,
        headerDisplay: "none",
    }
},
{
  path: '',
  data: {
      // parent: 'View Profile ',
  },
  children: [{
    path: 'commounication-history',
    // canActivate: [NgxPermissionsGuard],
    component: CommunicationHistoryComponent,
    data: {
        parent: 'Commounication History ',
        isButton:true,
        url:'/profile',
    }
},
{
  path: 'view-profile',
  // canActivate: [NgxPermissionsGuard],
  component: ViewProfileComponent,
  data: {
      parent: 'View Profile',
      isButton:true,
      url:'/profile',
  }
},
{
  path: 'edit-profile',
  // canActivate: [NgxPermissionsGuard],
  component: EditProfileComponent,
  data: {
      parent: 'Edit Profile',
      isButton:true,
      url:'/profile',
  }
}

]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
