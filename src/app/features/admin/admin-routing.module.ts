import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminHomeComponent } from './admin-home/admin-home.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: AdminHomeComponent },
      { path: 'home/:adminIdRouteParam', component: AdminHomeComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
