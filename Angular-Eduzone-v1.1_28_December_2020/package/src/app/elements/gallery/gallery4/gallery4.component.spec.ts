import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery4Component } from './gallery4.component';

describe('Gallery4Component', () => {
  let component: Gallery4Component;
  let fixture: ComponentFixture<Gallery4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gallery4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallery4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
