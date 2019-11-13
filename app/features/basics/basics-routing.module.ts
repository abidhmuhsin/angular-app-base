import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BasicsHomeComponent } from './basics-home/basics-home.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      //{ path: '', redirectTo: '', pathMatch: 'full' },
      { path: '', component: BasicsHomeComponent },
      { path: ':userIdRouteParam', component: BasicsHomeComponent, data: {sampleData:'static-injected-data'} }
    ])
  ],
  exports: [RouterModule]
})
export class BasicsRoutingModule { }
