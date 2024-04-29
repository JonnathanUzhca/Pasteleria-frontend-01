import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicingRoutingModule } from './invoicing-routing.module';
import { InvoicingComponent } from './invoicing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    InvoicingRoutingModule,
    ComponentsModule
  ]
})
export class InvoicingModule { }
