import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ApiService } from '../api/api.service';
import { forkJoin, of, Observable } from 'rxjs';
import { Team, Teams } from '../interfaces/teams.interface';
import { mergeMap } from 'rxjs/operators';
import { Games } from '../interfaces/games.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamResolver implements Resolve<Team[]> {

  constructor(private apiService: ApiService) { }

  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<Team[]> {
    return forkJoin(
      this.apiService.getTeams({}),
      this.apiService.getGames({})
    ).pipe(mergeMap(([teams, games]: [Teams, Games]) => {
        const teamData = teams.data.map(team => {
          team.games = games.data.filter(game => game.team_one_id === team.id);
          return team;
        });
        return of(teamData);
    }));
  }
}
