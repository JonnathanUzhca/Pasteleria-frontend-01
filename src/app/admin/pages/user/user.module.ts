import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientComponent } from './pages/client/client.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UserComponent,
    // ClientComponent
  ],
  // exports:[RouterModule,],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
 
  ]
})
export class UserModule { }
