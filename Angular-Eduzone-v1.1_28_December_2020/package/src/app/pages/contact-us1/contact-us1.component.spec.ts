import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUs1Component } from './contact-us1.component';

describe('ContactUs1Component', () => {
  let component: ContactUs1Component;
  let fixture: ComponentFixture<ContactUs1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUs1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
