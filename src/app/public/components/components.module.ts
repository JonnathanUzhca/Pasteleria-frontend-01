import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SeccionMenuComponent } from './seccion-menu/seccion-menu.component';
import { SeccionProductComponent } from './seccion-product/seccion-product.component';
import { SeccionContadorComponent } from './seccion-contador/seccion-contador.component';



@NgModule({
  declarations: [
    SliderComponent,
    SeccionMenuComponent,
    SeccionProductComponent,
    SeccionContadorComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    SliderComponent,
    SeccionMenuComponent,
    SeccionProductComponent,
    SeccionContadorComponent
  ]
})
export class ComponentsModule { }
