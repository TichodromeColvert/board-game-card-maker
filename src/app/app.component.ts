import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

const boardGames = [
  {
    id: "iww",
    name: "It's a Wonderful World"
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Board Game Card Maker';

  games = boardGames;

  constructor (private fb: FormBuilder,
    private router: Router) {}

  chooseGameForm: FormGroup = this.fb.group({boardGame: null});

  ngOnInit(): void {
    this.chooseGameForm.get("boardGame")?.valueChanges.subscribe(f => {
      if (f != this.router.url.substring(1)) this.router.navigateByUrl('/' + f);
    });
  }

  // To make sure the scrolling bar is set to the selected game if accessed from external link
  public routerActivate(uri: string) {
    if (this.chooseGameForm.controls["boardGame"].value === null) this.chooseGameForm.controls["boardGame"].patchValue(uri);
  }

  createCard() {}
}
