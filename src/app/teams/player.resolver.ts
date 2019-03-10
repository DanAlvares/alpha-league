import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ApiService } from '../api/api.service';
import { of, Observable, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Players, Player } from '../interfaces/players.interface';
import { Teams } from '../interfaces/teams.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerResolver implements Resolve<Players> {

  constructor(private apiService: ApiService) { }

  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<Players> {
    return forkJoin(
      this.apiService.getTeams({}),
      this.apiService.getPlayers({})
    ).pipe(mergeMap(([teams, players]: [Teams, Players]) => {
        const playersData = players.data.map(player => {
          player.team_name = teams.data.find(team => team.id === player.team_id).name;
          return player;
        });
        this.apiService.players = players;
        return of({success: true, data: playersData});
    }));
  }
}
