import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {HomeComponent} from './layout/home/home.component';
//import {LoginComponent} from './layout/login/login.component'

import {FeatureAModule} from './features/feature-a/feature-a.module';
import {BasicsModule} from './features/basics/basics.module';

import {RootAuthGuard} from './guards/root-auth.guard';
import {OnlyLoggedInUsersGuard} from './guards/only-loggedin-users.guard';
import {AlwaysAuthChildrenGuard} from './guards/always-auth-children.guard';
import {DeactivateGuard} from './guards/deactivate.guard';


@NgModule({
  imports: [
    RouterModule.forRoot([
      /* define app module routes here, e.g., to lazily load a module
         (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
       */
         { path: '', redirectTo: 'login', pathMatch: 'full' },
      //   { path: 'login', component: LoginComponent },
         { path: 'home',
          component: HomeComponent,
          canActivate: [RootAuthGuard,OnlyLoggedInUsersGuard],
          canActivateChild: [AlwaysAuthChildrenGuard],
          canDeactivate : [DeactivateGuard ],
         /*For non-lazy loading use -- loadChildren: () => FeatureAModule
         WARNING:Checked in Angular 4.2.4- This will not give proper errors while compiling
         for such non-lazy modules when loaded by above method.
         Use lazy loading to see proper errors in console.
         */
         children: [
           { path: 'basics',  loadChildren: () => BasicsModule},
           { path: 'admin',    loadChildren: './features/admin/admin.module#AdminModule' }, //Lazy.. To see lazy loading in action, check network tab while navigating.
           { path: 'feature-a', loadChildren: './features/feature-a/feature-a.module#FeatureAModule' },// loadChildren: () => FeatureAModule } ,//Using Non-Lazy laoding-- loadChildren: './features/feature-a/feature-a.module#FeatureAModule' },
           { path: 'feature-b', loadChildren: './features/feature-b/feature-b.module#FeatureBModule' } //Lazy.. To see lazy loading in action, check network tab while navigating.
           ]
         }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
