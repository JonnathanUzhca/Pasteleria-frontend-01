import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductComponent } from './pages/product/product.component';
import { StoresComponent } from './pages/stores/stores.component';
import { ClienteComponent } from './pages/user/pages/cliente/cliente.component';
import { InvoicingComponent } from './pages/invoicing/invoicing.component';
import { PersonalComponent } from './pages/user/pages/personal/personal.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'admin',
    component: AdminComponent,
    children : [
      { path: '', redirectTo:'dashboard', pathMatch:'full'},
      // { path: 'dashboard', component: DashboardComponent},
      { path: 'dashboard',loadChildren: () =>
        import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      { path: 'user/client',
          loadChildren: () =>
            import('./pages/user/pages/cliente/cliente.module').then((m) => m.ClienteModule)
      },
      { path: 'user/person',
          loadChildren: () =>
            import('./pages/user/pages/personal/personal.module').then((m) => m.PersonalModule)
      },
      { path: 'product',
          loadChildren: () =>
            import('./pages/product/product.module').then((m) => m.ProductModule)
      },
      { path: 'stores',
          loadChildren : () =>
            import('./pages/stores/stores.module').then((m) => m.StoresModule)
      },
      { path: 'invoicing',
          loadChildren: () =>
            import('./pages/invoicing/invoicing.module').then((m) => m.InvoicingModule)
      }
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
