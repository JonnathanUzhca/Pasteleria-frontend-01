import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { BodyComponent } from './pages/body/body.component';
import { UserModule } from './pages/user/user.module';


@NgModule({
  declarations: [
    AdminComponent,
    BodyComponent,
    // UserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    UserModule,
    SharedModule,
    BrowserAnimationsModule
  ]
})
export class AdminModule { }
