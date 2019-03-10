import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsListingComponent } from './teams-listing.component';
import { HeaderComponent } from 'src/app/core/header/header.component';
import { RouterModule, ActivatedRoute } from '@angular/router';

describe('TeamsListingComponent', () => {
  let component: TeamsListingComponent;
  let fixture: ComponentFixture<TeamsListingComponent>;

  const MockTeams = [{
    id: '123456',
    name: 'Mock Team',
    city: 'Mock City',
    logo_url: 'mock_url',
    founded: '2019',
    colour: 'red',
    budget: '1000000',
    games: [],
    players: [],
  }];

  const MockGames = {
    id: 'a980b988-1f53-4e29-a9ab-77ae5f27a953',
    date: '2018-09-20T01:01:42.490Z',
    team_one_id: '123456',
    team_two_id: '654321',
    team_one_goals: 2,
    team_two_goals: 1,
    team_one_name: 'Mock Team',
    team_two_name: 'Team Mock'
  };

  const MockActivatedRoute = {
    snapshot: {
        data: {
          data: []
        }
      }
    };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule],
      declarations: [
        HeaderComponent,
        TeamsListingComponent
      ],
      providers: [
      { provide: ActivatedRoute, useValue: MockActivatedRoute }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsListingComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should calculate games WON', () => {
    const gamesWon = component.gamesWon(MockTeams[0]);
    expect(gamesWon).toBe(0);
  });

  it('should calculate games DRAWN', () => {
    const gamesLost = component.gamesLost(MockTeams[0]);
    expect(gamesLost).toBe(0);
  });

  it('should calculate games LOST', () => {
    const gamesDrawn = component.gamesDrawn(MockTeams[0]);
    expect(gamesDrawn).toBe(0);
  });

  it('should calculate TOTAL POINTS', () => {
    const totalPoints = component.totalPoints(MockTeams[0]);
    expect(totalPoints).toBe(0);
  });
});
