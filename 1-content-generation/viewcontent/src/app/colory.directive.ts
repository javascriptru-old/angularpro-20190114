import { Directive, HostBinding, Attribute } from '@angular/core';

@Directive({
  selector: '[colory]',
  exportAs: 'colory'
})
export class ColoryDirective {

  @HostBinding('style.color') color = 'red'; 

  constructor() { }

  changeColor(color: string) {
    this.color = color;
  } 

}
