import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNombreDirectiva]'
})
export class NombreDirectivaDirective {

  // ElementRef es la referencia al tag html
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseenter') onMouseEnter() {
    // this.cambiar('blue');
    // this.nativeElement.style.backgroundColor = 'red';
  }

  // cambiar()

}
