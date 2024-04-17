import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    SliderComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    SliderComponent
  ]
})
export class ComponentsModule { }
