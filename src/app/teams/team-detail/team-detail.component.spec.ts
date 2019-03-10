import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { TeamDetailComponent } from './team-detail.component';
import { GamesComponent } from './games/games.component';
import { NewGameComponent } from './games/new-game/new-game.component';

import { ApiService } from 'src/app/api/api.service';
import { PlayersListComponent } from 'src/app/shared/players-list/players-list.component';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

describe('TeamDetailComponent', () => {
  let component: TeamDetailComponent;
  let fixture: ComponentFixture<TeamDetailComponent>;

  const MockActivatedRoute = {
    snapshot: {
        params: {
          id: '123456'
        },
        data: {
          data: [{id: '123456' }]
        }
      }
    };

    const MockApiService = {
      getPlayers: (payload) => of([])
    };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterModule ],
      declarations: [ TeamDetailComponent, GamesComponent, NewGameComponent, PlayersListComponent, ModalComponent ],
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
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should update games list', () => {
    component.teams = [{id: '123456', name: 'Mock Team' }] as any;
    component.team = { id: '123456', name: 'Mock Team', games: [{team_one_id: '123456', team_two_id: '123456'}] } as any;

    const newGameResult = { game: { team_one_id: '123456', team_two_id: '123456' } };

    component.updateGames(newGameResult);

    expect(component.addNewGame).toBe(false);
    expect(component.team.games.length).toBe(2);
  });
});
