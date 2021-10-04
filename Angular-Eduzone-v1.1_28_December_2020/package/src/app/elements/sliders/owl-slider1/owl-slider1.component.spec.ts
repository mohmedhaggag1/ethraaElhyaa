import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlSlider1Component } from './owl-slider1.component';

describe('OwlSlider1Component', () => {
  let component: OwlSlider1Component;
  let fixture: ComponentFixture<OwlSlider1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwlSlider1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlSlider1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
