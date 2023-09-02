import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoothRoutingModule } from './booth-routing.module';
import { BoothListComponent } from './booth-list/booth-list.component';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BoothListComponent],
  imports: [
    CommonModule,
    BoothRoutingModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class BoothModule { }
