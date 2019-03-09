import { TestBed } from '@angular/core/testing';

import { TeamResolver } from './team.resolver';

describe('Team.ResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamResolver = TestBed.get(TeamResolver);
    expect(service).toBeTruthy();
  });
});
