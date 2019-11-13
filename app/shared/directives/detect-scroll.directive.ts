import { Directive, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
    selector: '[detect-scroll]',
    //  host: { '(window:scroll)': 'track($event)' }
})
export class DetectScrollDirective {

    @Output()
    private scrolledToTop: EventEmitter<boolean> = new EventEmitter();
    /*
    @Output()
    private scrolledToBottom: EventEmitter<any> = new EventEmitter();
    @Output()
    private  scrolledFromTop :EventEmitter<any> = new EventEmitter();
    */
    private scrollBarOnTop: boolean = true;

    @HostListener('window:scroll', ['$event'])
    onScroll(event) {
        if (window.pageYOffset == 0) {
            this.scrollBarOnTop = true;
            this.scrolledToTop.emit(true);
            return;
        }
        /*
        if (window.pageYOffset+window.innerHeight === document.body.scrollHeight) {
            this.scrolledToBottom.emit();
            return;
        }
        */
        if (this.scrollBarOnTop) {
            // this.scrolledFromTop.emit();
            this.scrollBarOnTop = false;
            this.scrolledToTop.emit(false);
            return;
        }
        // this.scrollChangeEvent.emit(window.pageYOffset+"");
    }

    /*
    -scrolled to bottom
    window.pageYOffset + window.innerHeight = document.body.scrollHeight
    */
    /*
        ngOnInit() {
            window.addEventListener('scroll', this.scroll, true); //third parameter
        }

        ngOnDestroy() {
            window.removeEventListener('scroll', this.scroll, true);
        }
        scroll = (): void => {
          console.log("listner scroll")
          this.track({});
          //handle your scroll here
          //notice the 'odd' function assignment to a class field
          //this is used to be able to remove the event listener
        };
    */
}
