import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { Teams, TeamsPayload, Team } from '../interfaces/teams.interface';
import { Game, Games } from '../interfaces/games.interface';
import { Players, PlayersPayload } from '../interfaces/players.interface';
import { ApiRoutes } from './api-routes.enum';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public teams: Team[] = [];

  public games: Game[] = [];

  private endpoint = environment.API_ENDPOINT;

  constructor(private httpClient: HttpClient) { }

  getGamesByTeam(teamId: string) {
    return this.games.filter(game => teamId === game.team_one_id);
  }

  getTeams(payload: TeamsPayload): Observable<Teams> {
    return this.httpClient.post<Teams>(this.endpoint + ApiRoutes.getTeams, payload);
  }

  getPlayers(payload: PlayersPayload): Observable<Players> {
    return this.httpClient.post<Players>(this.endpoint + ApiRoutes.getPlayers, payload);
  }

  getGames(payload: Game): Observable<Games> {
    return this.httpClient.post<Games>(this.endpoint + ApiRoutes.getGames, payload);
  }

  addGame(gameData: Game): Observable<Games> {
    return this.httpClient.post<Games>(this.endpoint + ApiRoutes.addGame, gameData);
  }
}
