import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterStyle6Component } from './footer-style6.component';

describe('FooterStyle6Component', () => {
  let component: FooterStyle6Component;
  let fixture: ComponentFixture<FooterStyle6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterStyle6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterStyle6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
