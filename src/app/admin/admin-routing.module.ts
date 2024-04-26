import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductComponent } from './pages/product/product.component';
import { StoresComponent } from './pages/stores/stores.component';
import { ClienteComponent } from './pages/user/pages/cliente/cliente.component';
import { PersonaComponent } from './pages/user/pages/persona/persona.component';
import { InvoicingComponent } from './pages/invoicing/invoicing.component';

const routes: Routes = [
  {
    path:'admin',
    component: AdminComponent,
    children : [
      { path:'', redirectTo:'dashboard', pathMatch:'full'},
      { path: 'dashboard',loadChildren: () =>
        import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      { path: 'user/client', component: ClienteComponent },
      { path: 'user/person', component: PersonaComponent },
      { path: 'product', component: ProductComponent },
      { path: 'stores', component: StoresComponent },
      { path: 'invoicing', component: InvoicingComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    // ClientRoutingModule
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
