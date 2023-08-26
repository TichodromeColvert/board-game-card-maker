import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'absoluteValue'})
export class AbsoluteValuePipe implements PipeTransform {
  transform(value: number): number {
    return value * (value < 0 ? -1 : 1);
  }
}