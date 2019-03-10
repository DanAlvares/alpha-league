import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ApiService } from '../api/api.service';
import { forkJoin, of, Observable } from 'rxjs';
import { Team, Teams } from '../interfaces/teams.interface';
import { mergeMap } from 'rxjs/operators';
import { Games } from '../interfaces/games.interface';
import { Players } from '../interfaces/players.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamResolver implements Resolve<Team[]> {

  constructor(private apiService: ApiService) { }

  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<Team[]> {
    if (this.apiService.teams) { return of(this.apiService.teams); }

    return forkJoin(
      this.apiService.getTeams({}),
      this.apiService.getGames({}),
      this.apiService.getPlayers({})
    ).pipe(mergeMap(([teams, games, players]: [Teams, Games, Players]) => {
        games.data = games.data.map(game => {
          game.team_one_name = teams.data.find(team => team.id === game.team_one_id).name;
          game.team_two_name = teams.data.find(team => team.id === game.team_two_id).name;
          return game;
        });
        const teamData = teams.data.map(team => {
          team.games = games.data.filter(game => game.team_one_id === team.id || game.team_two_id === team.id);
          team.players = players.data.filter(player => player.team_id === team.id);
          return team;
        });
        this.apiService.teams = teamData;
        this.apiService.players = players;
        this.apiService.games = games;
        return of(teamData);
    }));
  }
}
