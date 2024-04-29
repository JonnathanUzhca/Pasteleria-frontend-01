import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { BodyComponent } from './pages/body/body.component';
// import { ClienteComponent } from './pages/user/pages/cliente/cliente.component';
// import { StoresComponent } from './pages/stores/stores.component';
// import { ProductComponent } from './pages/product/product.component';
// import { InvoicingComponent } from './pages/invoicing/invoicing.component';
// import { PersonalComponent } from './pages/user/pages/personal/personal.component';
import { ComponentsModule } from './pages/user/components/components.module';


@NgModule({
  declarations: [
    AdminComponent,
    BodyComponent,
    // ClienteComponent,
    // PersonalComponent,
    // StoresComponent,
    // ProductComponent,
    // InvoicingComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ComponentsModule

  ]
})
export class AdminModule { }
