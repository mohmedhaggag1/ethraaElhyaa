import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Courses3Component } from './courses3.component';

describe('Courses3Component', () => {
  let component: Courses3Component;
  let fixture: ComponentFixture<Courses3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Courses3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Courses3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
