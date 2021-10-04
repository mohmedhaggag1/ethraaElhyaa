import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Courses2Component } from './courses2.component';

describe('Courses2Component', () => {
  let component: Courses2Component;
  let fixture: ComponentFixture<Courses2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Courses2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Courses2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
