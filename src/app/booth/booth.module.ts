import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoothRoutingModule } from './booth-routing.module';
import { BoothListComponent } from './booth-list/booth-list.component';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';


@NgModule({
  declarations: [BoothListComponent],
  imports: [
    CommonModule,
    BoothRoutingModule,
    DemoNgZorroAntdModule
  ]
})
export class BoothModule { }
