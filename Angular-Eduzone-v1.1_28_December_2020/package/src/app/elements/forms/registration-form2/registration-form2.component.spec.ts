import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationForm2Component } from './registration-form2.component';

describe('RegistrationForm2Component', () => {
  let component: RegistrationForm2Component;
  let fixture: ComponentFixture<RegistrationForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
