import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { TeamResolver } from './team.resolver';
import { ApiService } from '../api/api.service';
import { of } from 'rxjs';

const MockApiService = {
  getTeams: ({}) => of([]),
  getPlayers: ({}) => of([]),
  getGames: ({}) => of([])
};

describe('TeamResolverService', () => {
  let service: TeamResolver;
  let apiService: ApiService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: ApiService, useValue: MockApiService },
      { provide: ActivatedRoute, useValue: {data: { data: [] } } }
    ]
  }));

  beforeEach(() => {
    service = TestBed.get(TeamResolver);
    apiService = TestBed.get(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should resolve data', () => {
    spyOn(apiService, 'getTeams').and.returnValue(of({data: []}));
    spyOn(apiService, 'getPlayers').and.returnValue(of({data: []}));
    spyOn(apiService, 'getGames').and.returnValue(of({data: []}));

    service.resolve();

    expect(apiService.getPlayers).toHaveBeenCalledWith({});
    expect(apiService.getTeams).toHaveBeenCalledWith({});
    expect(apiService.getGames).toHaveBeenCalledWith({});
  });
});
