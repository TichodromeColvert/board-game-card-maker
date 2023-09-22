import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'numberSequence'})
export class NumberSequencePipe implements PipeTransform {
  transform(firstValue: number, lastValue: number): Array<number> {
    if (firstValue > lastValue) return [];
    var nArray = [];
    for (firstValue; firstValue <= lastValue; firstValue++) {
      nArray.push(firstValue);
    }
    console.log
    return nArray;
  }
}