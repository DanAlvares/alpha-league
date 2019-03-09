import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDetailComponent } from './team-detail.component';
import { TeamPlayersComponent } from './team-players/team-players.component';
import { GamesComponent } from './games/games.component';
import { NewGameComponent } from './games/new-game/new-game.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ApiService } from 'src/app/api/api.service';

describe('TeamDetailComponent', () => {
  let component: TeamDetailComponent;
  let fixture: ComponentFixture<TeamDetailComponent>;

  const MockActivatedRoute = {
    snapshot: {
        params: {
          id: '123456'
        }
      }
    };

    const MockApiService = {
      getPlayers: (payload) => of([])
    };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamDetailComponent, TeamPlayersComponent, GamesComponent, NewGameComponent ],
      providers: [
      { provide: ActivatedRoute, useValue: MockActivatedRoute },
      { provide: ApiService, useValue: MockApiService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
