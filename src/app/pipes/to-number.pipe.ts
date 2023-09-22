import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'toNumber'})
export class ToNumberPipe implements PipeTransform {
    transform(value: number | string): number {
        if (Number.isInteger(value)) return value as number;
        return parseInt(value as string, 10);
    }
}