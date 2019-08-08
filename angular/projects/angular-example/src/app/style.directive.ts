import { Directive } from '@angular/core';
import { ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
 element;
  constructor(el: ElementRef) {
    // console.log("native element: "+el.nativeElement);
    this.element = el.nativeElement;
    this.element.style.backgroundColor = "pink";

   }
   @HostListener('click') onClick() {
    this.element.style.backgroundColor = "grey";
    // console.log(this.element);
}

}
