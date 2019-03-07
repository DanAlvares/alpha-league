import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Teams, TeamsPayload } from '../interfaces/teams.interface';
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
}
