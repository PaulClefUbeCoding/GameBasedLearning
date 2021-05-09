import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mathgamep2Component } from './mathgamep2.component';

describe('Mathgamep2Component', () => {
  let component: Mathgamep2Component;
  let fixture: ComponentFixture<Mathgamep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mathgamep2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mathgamep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
