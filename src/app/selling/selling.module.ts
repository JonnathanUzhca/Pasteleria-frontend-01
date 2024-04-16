import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellingRoutingModule } from './selling-routing.module';
import { SellingComponent } from './selling.component';


@NgModule({
  declarations: [
    SellingComponent
  ],
  imports: [
    CommonModule,
    SellingRoutingModule
  ]
})
export class SellingModule { }
