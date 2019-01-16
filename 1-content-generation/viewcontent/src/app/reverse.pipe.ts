import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  pure: false
})
export class ReversePipe implements PipeTransform {

  constructor() {

  }

  transform(value: string, args?: any): any {
    return value.split('').reverse().join('');
  }

}
