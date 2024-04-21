import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SeccionMenuComponent } from './seccion-menu/seccion-menu.component';



@NgModule({
  declarations: [
    SliderComponent,
    SeccionMenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    SliderComponent,
    SeccionMenuComponent
  ]
})
export class ComponentsModule { }
