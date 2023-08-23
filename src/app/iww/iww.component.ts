import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-iww',
  templateUrl: './iww.component.html',
  styleUrls: ['./iww.component.scss']
})
export class IwwComponent {
  constructor (private fb: FormBuilder) {}

  totalCost = 0;
  totalBonus = 4;

  iwwForm: FormGroup = this.fb.group({type: "structure", materialCost: 0, energyCost: 0, scienceCost: 0, goldCost: 0, explorationCost: 0,krystalliumCost: 0, financierCost: 0,
  generalCost: 0, celebrityCodt: 0, krystalliumBonus: 0, financierBonus: 0, generalBonus: 0, celebrityBonus: 0, workerBonus: 0, recycling: "material", bonusPoints: 0,
  multiplier1: null, multiplier2: null, materialProduction: 0, energyProduction: 0, scienceProduction: 0, goldProduction: 0, explorationProduction: 0, krystalliumProduction: 0,
  cultureProduction: 0, financierProduction: 0, generalProduction: 0, celebrityProduction: 0});

  numSequence(n: number): Array<number> {
    return Array(n + 1);
  }
}
