import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { AddEditAccounLinksComponent } from './add-edit-accoun-links/add-edit-accoun-links.component';

const routes: Routes = [

  {
    path: '',
    // canActivate: [NgxPermissionsGuard],
    component: AccountListComponent,
    data: {
      parent: 'Social Media',
      title:'Account Lists',
      isButton: false,
      isHome: false,
      custom_url:'/media-account'
      // headerDisplay: "none",
    }
  },
  {
    path: '',
    // canActivate: [NgxPermissionsGuard],
    data:{
      parent: 'Social Media',
      title:'Account Lists',
      custom_url:'/media-account'
    },
    children:[
      {
        path: 'add-account',
        // canActivate: [NgxPermissionsGuard],
        component: AddEditAccounLinksComponent,
        data: {
          parent: 'Social Media',
          title:'Add Accounts',
          isButton: true,
          isHome: false,
          custom_url:'/add-social-media'
        }
      },
      {
        path: 'edit-account',
        // canActivate: [NgxPermissionsGuard],
        component: AddEditAccounLinksComponent,
        data: {
          title:'Edit Accounts',
          parent: 'Social Media',
          isButton: false,
          isHome: false,
          custom_url:'/edit-social-media'
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
