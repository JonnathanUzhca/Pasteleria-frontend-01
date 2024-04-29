import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaClientesComponent } from './tabla-clientes/tabla-clientes.component';
import { TablaPersonalComponent } from './tabla-personal/tabla-personal.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TablaClientesComponent
    // TablaPersonalComponent
  ],
  exports:[
    TablaClientesComponent,
    // TablaPersonalComponent
  ]
})
export class ComponentsModule { }
