import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

const boardGames = [
  {
    id: "iww",
    name: "It's a Wonderful World"
  }, {}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Board Game Card Maker';

  constructor (private fb: FormBuilder) {}

  chooseGameForm: FormGroup = this.fb.group({boardGame: null});

  ngOnInit(): void {
    this.chooseGameForm.get("boardGameForm")?.valueChanges.subscribe(f => {});
  }

  createCard() {}
}
