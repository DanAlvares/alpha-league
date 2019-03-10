import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGameComponent } from './new-game.component';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { ApiService } from 'src/app/api/api.service';

describe('NewGameComponent', () => {
  let component: NewGameComponent;
  let fixture: ComponentFixture<NewGameComponent>;
  let apiService: ApiService;

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
    apiService = TestBed.get(ApiService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a game if valid', () => {
    component.gameData = { date: '2019-03-31' };
    spyOn(apiService, 'addGame').and.returnValue(of({result: []}));
    component.addGame({valid: true});
    expect(apiService.addGame).toHaveBeenCalled();
  });

  it('should NOT create a game if invalid', () => {
    spyOn(apiService, 'addGame');
    component.addGame({valid: false});
    expect(apiService.addGame).not.toHaveBeenCalled();
  });

  it('should emit the result', () => {
    spyOn(component.gameResult, 'emit');
    component.close({});
    expect(component.gameResult.emit).toHaveBeenCalled();
  });
});
