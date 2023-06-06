import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAppChangeColor]'
})
export class AppChangeColorDirective {

  constructor(e1:ElementRef,e2:ElementRef) { 
    e1.nativeElement.style.color = 'blue';
    e2.nativeElement.style.backgroundColor ='yellow'
  }

}
