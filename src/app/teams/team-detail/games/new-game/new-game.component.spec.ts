import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGameComponent } from './new-game.component';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { ApiService } from 'src/app/api/api.service';

describe('NewGameComponent', () => {
  let component: NewGameComponent;
  let fixture: ComponentFixture<NewGameComponent>;

  const MockApiService = {
    addGame: (payload) => of({})
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ NewGameComponent ],
      providers: [
        { provide: ApiService, useValue: MockApiService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
