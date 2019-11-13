import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleCasePipe } from './pipes/title-case.pipe';

import { OverflowTooltipDirective } from './directives/overflow-tooltip.directive';
import { DetectScrollDirective } from './directives/detect-scroll.directive';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OverflowTooltipDirective, DetectScrollDirective, DropdownComponent, TitleCasePipe]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [/*Services to be exported as singleton */]
    };
  }
}