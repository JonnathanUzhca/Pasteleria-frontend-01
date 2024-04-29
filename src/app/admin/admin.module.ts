import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { BodyComponent } from './pages/body/body.component';
import { ClienteComponent } from './pages/user/pages/cliente/cliente.component';
import { PersonaComponent } from './pages/user/pages/persona/persona.component';
import { StoresComponent } from './pages/stores/stores.component';
import { ProductComponent } from './pages/product/product.component';
import { InvoicingComponent } from './pages/invoicing/invoicing.component';


@NgModule({
  declarations: [
    AdminComponent,
    BodyComponent,
    ClienteComponent,
    // PersonaComponent,
    // StoresComponent,
    // ProductComponent,
    // InvoicingComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    BrowserAnimationsModule

  ]
})
export class AdminModule { }
