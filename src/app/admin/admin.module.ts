import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { BodyComponent } from './pages/body/body.component';


@NgModule({
  declarations: [
    AdminComponent,
    BodyComponent,
    // UserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    
    SharedModule,
    BrowserAnimationsModule
  ]
})
export class AdminModule { }
