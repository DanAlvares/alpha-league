import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersComponent } from './players-listing.component';
import { RouterModule, ActivatedRoute } from '@angular/router';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

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
      declarations: [ PlayersComponent ],
      providers: [
      { provide: ActivatedRoute, useValue: MockActivatedRoute }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
