import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoothListComponent } from './booth-list/booth-list.component';

const routes: Routes = [
  {
    path: '',
    component: BoothListComponent,
    data: {
      parent: 'Booth',
      title:'Booth List',
      isButton: false,
      isHome: false,
      custom_url:'/booth'
      // headerDisplay: "none",
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoothRoutingModule { }
