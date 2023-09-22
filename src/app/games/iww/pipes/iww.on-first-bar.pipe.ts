import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'iwwOnFirstBar', pure: false})
export class IwwOnFirstBarPipe implements PipeTransform {
  transform(value: number, totalNumber: number): boolean {
    if (value <= 3 || value % 2 == 1 || totalNumber <= 9) return true;
    return Math.floor(value / 2) + 8 > totalNumber;
  }
}