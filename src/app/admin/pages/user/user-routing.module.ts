import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [ 
  {
    // { path:'', redirectTo:'dashboard', pathMatch:'full'},
    path: '',
    component: UserComponent,
    children:[
      // {path: '', redirectTo :'user/client', pathMatch:'full' },
      {
        path: 'user/client',
        loadChildren : () =>
          import('./pages/client/client.module').then((m) => m.ClientModule)
      },
      {
        path: 'personal',
        loadChildren : () =>
          import('./pages/personal/personal.module').then((m) => m.PersonalModule)
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
