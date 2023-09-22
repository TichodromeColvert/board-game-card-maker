import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-iww',
  templateUrl: './iww.component.html',
  styleUrls: ['./iww.component.scss']
})
export class IwwComponent implements OnInit {
  uri = 'iww';

  // Values to choose in select elements. Do not change them.

  cardTypes = ["structure", "vehicle", "research", "project", "discovery", "memorial"];
  basicCubes = ["material", "energy", "science", "gold", "exploration"];
  tokens = ["financier", "general", "celebrity"];

  constructor (private fb: FormBuilder) {}

  totalCost = 0;
  totalBonus = 0;
  totalProduction = 0;

  iwwForm: FormGroup = this.fb.group({cardType: this.cardTypes[0], name: new FormControl("", [Validators.required]), numberOfCopies: new FormControl(1, [Validators.min(1)]),
    materialCost: 0, energyCost: 0, scienceCost: 0, goldCost: 0, explorationCost: 0, krystalliumCost: 0, financierCost: 0, generalCost: 0, celebrityCost: 0, krystalliumBonus: 0,
    financierBonus: 0, generalBonus: 0, celebrityBonus: 0, workerBonus: 0, recycling: this.basicCubes[0], victoryPoints: 0, multiplier1: null, multiplier2: null,
    materialProduction: 0, energyProduction: 0, scienceProduction: 0, goldProduction: 0, explorationProduction: 0, krystalliumProduction: 0, cultureProduction: 0,
    financierProduction: 0, generalProduction: 0, celebrityProduction: 0});



  ngOnInit(): void {
    this.iwwForm.valueChanges.subscribe(f => {
      this.totalCost = this.formValuesSum("materialCost", "energyCost", "scienceCost", "goldCost", "explorationCost",
        "krystalliumCost", "financierCost", "generalCost", "celebrityCost");
      this.totalBonus = this.formValuesSum("krystalliumBonus", "financierBonus", "generalBonus", "celebrityBonus", "workerBonus");
      this.totalProduction = this.formValuesSum("materialProduction", "energyProduction", "scienceProduction", "goldProduction", "explorationProduction",
        "krystalliumProduction", "cultureProduction", "financierProduction", "generalProduction", "celebrityProduction");
    });
    this.iwwForm.get("victoryPoints")?.valueChanges.subscribe(v => {if (v == 0) this.iwwForm.get("multiplier1")?.setValue(null)});
    this.iwwForm.get("multiplier1")?.valueChanges.subscribe(v => {if (v == null) this.iwwForm.get("multiplier2")?.setValue(null)});
    
  }

  private absoluteValue(n: number): number {
    return n < 0 ? n * -1 : n;
  }

  private formValuesSum(...values: string[]) {
    let total: number = 0;
    values.forEach(value => total += this.absoluteValue(parseFloat(this.iwwForm.controls[value].value)));
    return total;
  }

  /*private updateCostBarElements(primary: boolean) { // The class of each cost slot must be updated every time the cost is changed
    const costsByOrder = {cube: ['material', 'energy', 'science', 'gold', 'exploration', 'krystallium'], token: ['financier', 'general', 'celebrity']};
    let collection = primary ? this.primaryCostBar?.nativeElement.children : this.secondaryCostBar?.nativeElement.children;
    if (collection != undefined) {
      for (let i = 0; i < collection.length; i++) {
        collection[i].removeAttribute("class");
        collection[i].classList.add("cost");
        var costNumber = 0;
        for (const [key, names] of Object.entries(costsByOrder)) {
          for (const name of names) {
            costNumber += parseFloat(this.iwwForm.controls[name + 'Cost'].value);
            if (costNumber >= parseFloat(collection[i].getAttribute("data-cost-number") as string)) {
              collection[i].classList.add(key);
              collection[i].classList.add(name);
            }
          }
        }
      }
    }  
  }*/
}
