import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { Teams, TeamsPayload, Team } from '../interfaces/teams.interface';
import { Game, Games, GameResult } from '../interfaces/games.interface';
import { Players, PlayersPayload } from '../interfaces/players.interface';
import { ApiRoutes } from './api-routes.enum';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public teams: Team[];

  public players: Players;

  public games: Games;

  private endpoint = environment.API_ENDPOINT;

  constructor(private httpClient: HttpClient) { }

  getTeams(payload: TeamsPayload): Observable<Teams> {
    return this.httpClient.post<Teams>(this.endpoint + ApiRoutes.getTeams, payload);
  }

  getPlayers(payload: PlayersPayload): Observable<Players> {
    if (this.players) { return of(this.players); }
    return this.httpClient.post<Players>(this.endpoint + ApiRoutes.getPlayers, payload);
  }

  getGames(payload: Game): Observable<Games> {
    return this.httpClient.post<Games>(this.endpoint + ApiRoutes.getGames, payload);
  }

  addGame(gameData: Game): Observable<GameResult> {
    return this.httpClient.post<GameResult>(this.endpoint + ApiRoutes.addGame, gameData);
  }
}
