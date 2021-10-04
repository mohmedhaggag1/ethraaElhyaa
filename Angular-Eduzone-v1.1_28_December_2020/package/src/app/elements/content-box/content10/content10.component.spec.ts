import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Content10Component } from './content10.component';

describe('Content10Component', () => {
  let component: Content10Component;
  let fixture: ComponentFixture<Content10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Content10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Content10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
