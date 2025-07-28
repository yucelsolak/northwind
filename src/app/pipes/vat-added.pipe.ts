import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, arg1:number): number {
    var result:number;
    result = value + (value * (arg1 / 100));

    return result;
  }

}
