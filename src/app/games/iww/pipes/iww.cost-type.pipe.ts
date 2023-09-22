import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';

const costsByOrder = {cube: ['material', 'energy', 'science', 'gold', 'exploration', 'krystallium'], token: ['financier', 'general', 'celebrity']};

@Pipe({name: 'iwwCostType', pure: false})
export class IwwCostTypePipe implements PipeTransform {
    transform(value: number, form: FormGroup): string {
        var costNumber = 0;
        for (const [key, names] of Object.entries(costsByOrder)) {
            for (const name of names) {
                costNumber += parseFloat(form.controls[name + 'Cost'].value);
                if (costNumber >= value) return key + ' ' + name;
            }
        }
        throw new RangeError();
    }
}