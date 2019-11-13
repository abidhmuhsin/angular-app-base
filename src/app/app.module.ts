import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import {LayoutModule} from './layout/layout.module';
import {CoreModule} from './core/core.module';

import {SharedModule } from './shared/shared.module';

import {RootAuthGuard} from './guards/root-auth.guard'
import {OnlyLoggedInUsersGuard} from './guards/only-loggedin-users.guard'
import {AlwaysAuthChildrenGuard} from './guards/always-auth-children.guard'
import {DeactivateGuard} from './guards/deactivate.guard'

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthInterceptor,TimingLogInterceptor,ResponseErrorInterceptor} from './http.interceptor'

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
    CoreModule, /* Provides core services across the app. Only import in AppModule */
    LayoutModule,/* Root Layout declarations. Home/Login components only */
    SharedModule.forRoot(), /* Shared compoenents/pipes/directives for the app */
    HttpClientModule /*New HttpClient only available from angular 4.3+. */
   ],
  declarations: [ AppComponent],
  providers: [
    RootAuthGuard,
    OnlyLoggedInUsersGuard,
    AlwaysAuthChildrenGuard,
    DeactivateGuard,
     { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    //{ provide: HTTP_INTERCEPTORS, useClass: TimingLogInterceptor, multi: true },
    //{ provide: HTTP_INTERCEPTORS, useClass: ResponseErrorInterceptor, multi: true }
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
