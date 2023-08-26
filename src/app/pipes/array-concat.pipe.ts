import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'arrayConcat'})
export class ArrayConcatPipe implements PipeTransform {
  transform(array1: any[], ...otherArrays: any[]): any[] {
    var arrayToReturn = array1;
    for (var i = 0; i < otherArrays.length; i++) {
        arrayToReturn = arrayToReturn.concat(otherArrays[i]);
    }
    return arrayToReturn;
  }
}