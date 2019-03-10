import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Game } from 'src/app/interfaces/games.interface';
import { Team } from 'src/app/interfaces/teams.interface';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent {
  @Input() teamId: string;

  @Input() teams: Team[];

  @Output() gameResult = new EventEmitter();

  public gameData: Game = {
    date: '',
    team_one_id: this.teamId,
    team_two_id: '',
    team_one_goals: null,
    team_two_goals: null,
  };

  constructor(private apiService: ApiService) { }

  addGame(form) {
    if (form.valid) {
      this.gameData.team_one_id = this.teamId;
      this.gameData.date = new Date(this.gameData.date).toISOString();

      this.apiService.addGame(this.gameData).subscribe(res => {
        this.close(res.result[0]);
      });
    }
  }

  close(game) {
    this.gameResult.emit({game});
  }

}
