import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsListingComponent } from './teams-listing.component';
import { HeaderComponent } from 'src/app/core/header/header.component';

describe('TeamsListingComponent', () => {
  let component: TeamsListingComponent;
  let fixture: ComponentFixture<TeamsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        TeamsListingComponent
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
