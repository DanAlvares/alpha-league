import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGameComponent } from './new-game.component';
import { FormsModule } from '@angular/forms';

describe('NewGameComponent', () => {
  let component: NewGameComponent;
  let fixture: ComponentFixture<NewGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ NewGameComponent ]
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
