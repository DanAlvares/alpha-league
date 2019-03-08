import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { ApiService } from './api.service';
import { ApiRoutes } from './api-routes.enum';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

describe('ApiService', () => {
  let apiService: ApiService;
  let httpClient: HttpClient;

  const MockHttpClient = {
    post: () => of({}),
  };

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiService,
      {
        provide: HttpClient,
        useValue: MockHttpClient
      }
    ]
  }));

  beforeEach(() => {
    apiService = TestBed.get(ApiService);
    httpClient = TestBed.get(HttpClient);
    spyOn(httpClient, 'post').and.callThrough();
  });

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  describe('Teams', () => {
    it('should get teams', () => {
      const expectedEndpoint = environment.API_ENDPOINT + ApiRoutes.getTeams;
      const MockTeamsRequest = { name: 'Benfica' };
      apiService.getTeams(MockTeamsRequest);
      expect(httpClient.post).toHaveBeenCalledWith(expectedEndpoint, MockTeamsRequest);
    });
  });

  describe('Players', () => {
    it('should get players of a team', () => {
      const expectedEndpoint = environment.API_ENDPOINT + ApiRoutes.getPlayers;
      const MockPlayersRequest = { team_id: '3097fe71-57da-4c84-8efd-33bb9bae9d21' };
      apiService.getPlayers(MockPlayersRequest);
      expect(httpClient.post).toHaveBeenCalledWith(expectedEndpoint, MockPlayersRequest);
    });
  });

  describe('Games', () => {
    it('should get games of a team', () => {
      const expectedEndpoint = environment.API_ENDPOINT + ApiRoutes.getGames;
      const MockGamesRequest = { team_one_id: '3097fe71-57da-4c84-8efd-33bb9bae9d21' };
      apiService.getGames(MockGamesRequest);
      expect(httpClient.post).toHaveBeenCalledWith(expectedEndpoint, MockGamesRequest);
    });

    it('should add a new game', () => {
      const expectedEndpoint = environment.API_ENDPOINT + ApiRoutes.addGame;
      const MockGameData = {
        date: '2018-08-04T07:41:55.172Z',
        team_one_id: '59d6e27e-685c-48a3-8d31-c546efcda0f0',
        team_one_goals: 2,
        team_two_goals: 4
      };
      apiService.addGame(MockGameData);
      expect(httpClient.post).toHaveBeenCalledWith(expectedEndpoint, MockGameData);
    });
  });
});
