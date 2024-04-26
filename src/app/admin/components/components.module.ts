import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgTableComponent } from './ng-table/ng-table.component';



@NgModule({
  declarations: [
    // NgTableComponent
  ],
  imports: [
    CommonModule,
    NgTableComponent
  ],
  exports:[
    NgTableComponent
  ]
})
export class ComponentsModule { }
