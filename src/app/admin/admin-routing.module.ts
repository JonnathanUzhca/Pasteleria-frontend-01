import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductComponent } from './pages/product/product.component';
import { StoresComponent } from './pages/stores/stores.component';
import { InvoicingComponent } from './pages/invoicing/invoicing.component';
import { ClientComponent } from './pages/user/pages/client/client.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {
    path:'admin',
    component: AdminComponent,
    children : [
      { path:'', redirectTo:'dashboard', pathMatch:'full'},
      { path: 'dashboard',loadChildren: () =>
        import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      { path: 'user', 
        component: UserComponent,
        // children: [
        //   {
        //     path:'client',
        //     loadChildren: () =>
        //       import('./pages/user/pages/client/client.module').then((m) => m.ClientModule)
        //   }
        // ]
      },
      { path: 'product', component: ProductComponent },
      { path: 'stores', component: StoresComponent },
      { path: 'invoicing', component: InvoicingComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
