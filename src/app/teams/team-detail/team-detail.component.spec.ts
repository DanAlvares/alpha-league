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
    expect(component).toBeTruthy();
  });
});
