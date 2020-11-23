import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrollToTop]'
})
export class ScrollToTopDirective {
  private position = 150;

  constructor(private eltView : ElementRef) {
    console.log('test');
    if(document.documentElement.scrollTop > this.position || document.body.scrollTop > this.position)
      this.eltView.nativeElement.style.opacity = 1;
    else
      this.eltView.nativeElement.style.opacity = 0;
  } 

  @HostListener("click") onclick() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    }); // For Chrome, Firefox, IE and Opera
  }

  @HostListener("window:scroll") scrolling() {
    if (
      document.documentElement.scrollTop > this.position ||
      document.body.scrollTop > this.position
    ) {
      this.eltView.nativeElement.style.opacity = 1;
    } else {
      this.eltView.nativeElement.style.opacity = 0;
    }
  }
}
