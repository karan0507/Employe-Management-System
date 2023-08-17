import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoothRoutingModule } from './booth-routing.module';
import { BoothListComponent } from './booth-list/booth-list.component';


@NgModule({
  declarations: [BoothListComponent],
  imports: [
    CommonModule,
    BoothRoutingModule
  ]
})
export class BoothModule { }
