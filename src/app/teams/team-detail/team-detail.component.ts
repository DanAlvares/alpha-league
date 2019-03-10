import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/interfaces/teams.interface';
import { ApiService } from 'src/app/api/api.service';
import { map } from 'rxjs/operators';
import { Player } from 'src/app/interfaces/players.interface';
import { Game } from 'src/app/interfaces/games.interface';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  public team: Team;
  public teams: Team[];
  public games: Game[];
  public players: Player[];
  public addNewGame: boolean;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    const teamId = this.route.snapshot.params.id;
    this.teams = this.route.snapshot.data.data;
    this.team = this.teams.filter(team => teamId === team.id)[0];
  }

  updateGames(result): void {
    result.game.team_one_name = this.teams.find(team => team.id === result.game.team_one_id).name;
    result.game.team_two_name = this.teams.find(team => team.id === result.game.team_two_id).name;
    this.team.games.unshift(result.game);
    this.addNewGame = false;
  }
}
