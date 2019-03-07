import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Teams, TeamsPayload } from '../interfaces/teams.interface';
import { Game, Games } from '../interfaces/games.interface';
import { Players, PlayersPayload } from '../interfaces/players.interface';
import { ApiRoutes } from './api-routes.enum';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private endpoint = environment.API_ENDPOINT;

  constructor(private httpClient: HttpClient) { }

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
