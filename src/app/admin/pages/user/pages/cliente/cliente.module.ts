import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/public/components/components.module';
import { AdminComponent } from 'src/app/admin/admin.component';


@NgModule({
  declarations: [
    ClienteComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClienteRoutingModule,
    ComponentsModule
  ]
})
export class ClienteModule { }
