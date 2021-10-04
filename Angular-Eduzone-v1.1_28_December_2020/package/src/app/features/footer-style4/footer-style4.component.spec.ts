import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterStyle4Component } from './footer-style4.component';

describe('FooterStyle4Component', () => {
  let component: FooterStyle4Component;
  let fixture: ComponentFixture<FooterStyle4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterStyle4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterStyle4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
