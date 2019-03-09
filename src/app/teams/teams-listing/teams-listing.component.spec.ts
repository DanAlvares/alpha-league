import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsListingComponent } from './teams-listing.component';
import { HeaderComponent } from 'src/app/core/header/header.component';
import { RouterModule, ActivatedRoute } from '@angular/router';

describe('TeamsListingComponent', () => {
  let component: TeamsListingComponent;
  let fixture: ComponentFixture<TeamsListingComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
