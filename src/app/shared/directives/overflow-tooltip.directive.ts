import { Directive, ElementRef, Inject, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[overflow-tooltip]'
})
export class OverflowTooltipDirective implements AfterViewInit {

  constructor(@Inject(ElementRef) private element: ElementRef) { }

   ngAfterViewInit() {
   if (this.element.nativeElement.offsetWidth < this.element.nativeElement.scrollWidth ) {
        this.element.nativeElement.title = this.element.nativeElement.textContent;
    }
   }

}
