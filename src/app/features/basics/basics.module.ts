import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicsHomeComponent } from './basics-home/basics-home.component';
import { BasicsRoutingModule } from './basics-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BasicsRoutingModule
  ],
  declarations: [BasicsHomeComponent]
})
export class BasicsModule { }