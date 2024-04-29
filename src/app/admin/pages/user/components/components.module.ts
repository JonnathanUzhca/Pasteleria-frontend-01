import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaClientesComponent } from './tabla-clientes/tabla-clientes.component';
import { TablaPersonalComponent } from './tabla-personal/tabla-personal.component';



@NgModule({
  declarations: [
    TablaClientesComponent,
    TablaPersonalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
