import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { TeamResolver } from './team.resolver';
import { ApiService } from '../api/api.service';

describe('TeamResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: ApiService, useValue: {}},
      { provide: ActivatedRoute, useValue: {data: { data: [] } } }
    ]
   }));

  it('should be created', () => {
    const service: TeamResolver = TestBed.get(TeamResolver);
    expect(service).toBeTruthy();
  });
});
