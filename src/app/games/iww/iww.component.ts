import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-iww',
  templateUrl: './iww.component.html',
  styleUrls: ['./iww.component.scss']
})
export class IwwComponent implements OnInit {

  // Values to choose in select elements. Do not change them.

  cardTypes = ["structure", "vehicle", "research", "project", "discovery", "memorial"];
  basicCubes = ["material", "energy", "science", "gold", "exploration"];
  tokens = ["financier", "general", "celebrity"];

  constructor (private fb: FormBuilder) {}

  totalCost = 0;
  totalBonus = 0;
  totalProduction = 0;

  iwwForm: FormGroup = this.fb.group({type: this.cardTypes[0], name: new FormControl("", [Validators.required]), numnberOfCopies: new FormControl(1, [Validators.min(1)]),
    materialCost: 0, energyCost: 0, scienceCost: 0, goldCost: 0, explorationCost: 0, krystalliumCost: 0, financierCost: 0, generalCost: 0, celebrityCost: 0, krystalliumBonus: 0,
    financierBonus: 0, generalBonus: 0, celebrityBonus: 0, workerBonus: 0, recycling: this.basicCubes[0], victoryPoints: 0, multiplier1: null, multiplier2: null,
    materialProduction: 0, energyProduction: 0, scienceProduction: 0, goldProduction: 0, explorationProduction: 0, krystalliumProduction: 0, cultureProduction: 0,
    financierProduction: 0, generalProduction: 0, celebrityProduction: 0});

  private absoluteValue(n: number): number {
    return n < 0 ? n * -1 : n;
  }

  ngOnInit(): void {
    this.iwwForm.valueChanges.subscribe(f => {
      this.totalCost = this.iwwForm.value["materialCost"] + this.iwwForm.value["energyCost"] + this.iwwForm.value["scienceCost"] + this.iwwForm.value["goldCost"]
        + this.iwwForm.value["explorationCost"] + this.iwwForm.value["krystalliumCost"] + this.iwwForm.value["financierCost"] + this.iwwForm.value["generalCost"]
        + this.iwwForm.value["celebrityCost"];
      this.totalBonus = this.iwwForm.value["krystalliumBonus"] + this.iwwForm.value["financierBonus"] + this.iwwForm.value["generalBonus"] + this.iwwForm.value["celebrityBonus"]
        + this.iwwForm.value["workerBonus"];
      this.totalProduction = this.absoluteValue(this.iwwForm.value["materialProduction"]) + this.absoluteValue(this.iwwForm.value["energyProduction"])
        + this.absoluteValue(this.iwwForm.value["scienceProduction"]) + this.absoluteValue(this.iwwForm.value["goldProduction"])
        + this.absoluteValue(this.iwwForm.value["explorationProduction"]) + this.absoluteValue(this.iwwForm.value["krystalliumProduction"])
        + this.absoluteValue(this.iwwForm.value["cultureProduction"]) + this.absoluteValue(this.iwwForm.value["financierProduction"])
        + this.absoluteValue(this.iwwForm.value["generalProduction"]) + this.absoluteValue(this.iwwForm.value["celebrityProduction"]);
    });
    this.iwwForm.get("victoryPoints")?.valueChanges.subscribe(v => {if (v == 0) this.iwwForm.get("multiplier1")?.setValue(null)});
    this.iwwForm.get("multiplier1")?.valueChanges.subscribe(v => {if (v == null) this.iwwForm.get("multiplier2")?.setValue(null)});
  }
}
