import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent {
  @Input() teamId: string;

  public gameData = {
    date: '',
    team_id: this.teamId,
    team_one_score: '',
    team_two_score: '',
  };

  constructor() { }

  addGame(form) {
    if (form.valid) {

    }
  }

}
