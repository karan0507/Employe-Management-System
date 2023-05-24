import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutPartyComponent } from './about-party/about-party.component';

const routes: Routes = [
  {
    path: '',
    // canActivate: [NgxPermissionsGuard],
    component: HomeComponent,
    data: {
      parent: 'View Profile ',
      isButton: false,
      isHome: true,
      // headerDisplay: "none",
    }
  },
  {
    path: '',
    // canActivate: [NgxPermissionsGuard],
    children: [
      {
        path: 'about-party',
        // canActivate: [NgxPermissionsGuard],
        component:AboutPartyComponent,
        data: {
          parent: 'Congress',
          isButton: true,
          url:'/home',
          isHome: false,
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
