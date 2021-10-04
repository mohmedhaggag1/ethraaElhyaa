import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUs2Component } from './contact-us2.component';

describe('ContactUs2Component', () => {
  let component: ContactUs2Component;
  let fixture: ComponentFixture<ContactUs2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUs2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
