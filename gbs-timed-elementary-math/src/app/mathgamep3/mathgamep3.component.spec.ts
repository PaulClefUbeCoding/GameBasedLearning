import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mathgamep3Component } from './mathgamep3.component';

describe('Mathgamep3Component', () => {
  let component: Mathgamep3Component;
  let fixture: ComponentFixture<Mathgamep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mathgamep3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mathgamep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
