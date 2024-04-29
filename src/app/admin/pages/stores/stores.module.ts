import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoresRoutingModule } from './stores-routing.module';
import { StoresComponent } from './stores.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    StoresComponent
  ],
  imports: [
    CommonModule,
    StoresRoutingModule,
    SharedModule,
    ComponentsModule
  ]
})
export class StoresModule { }
