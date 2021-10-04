import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDark1Component } from './header-dark1.component';

describe('HeaderDark1Component', () => {
  let component: HeaderDark1Component;
  let fixture: ComponentFixture<HeaderDark1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderDark1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDark1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
