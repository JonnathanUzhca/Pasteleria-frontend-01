import { NgModule } from '@angular/core';

import { QuicklinkStrategy } from "ngx-quicklink";
import { RouterModule, Routes } from '@angular/router';
import { PublicRoutingModule } from './public/public-routing.module';
import { Error404Component } from './shared/error404/error404.component';
import { Error500Component } from './shared/error500/error500.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { SellingRoutingModule } from './selling/selling-routing.module';

const routes: Routes = [
  {path: "erro", component:Error500Component},
  {path: "notfound" ,component:Error404Component},
  {path: "**", redirectTo: "notfound", pathMatch: "full"}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
      useHash: true ,
      preloadingStrategy: QuicklinkStrategy,
      enableTracing: false,
      paramsInheritanceStrategy: "always",
  }),
  PublicRoutingModule,
  AdminRoutingModule,
  SellingRoutingModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
