import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHello]'
})
export class HelloDirective {

  @Input() appHello:string;

  constructor(private element: ElementRef) {
    console.trace('HelloDirective contructor');
  }//constructor

  @HostListener('mouseenter')
  publiconMouseEnter() {
    this.element.nativeElement.style.backgroundColor = this.appHello;
  }//publiconMouseEnter

  @HostListener('mouseleave')
  publiconMouseLeave() {
    this.element.nativeElement.style.backgroundColor = null;
  }//publiconMouseLeave
}
