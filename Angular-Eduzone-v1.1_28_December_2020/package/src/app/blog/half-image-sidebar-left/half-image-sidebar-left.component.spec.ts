import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfImageSidebarLeftComponent } from './half-image-sidebar-left.component';

describe('HalfImageSidebarLeftComponent', () => {
  let component: HalfImageSidebarLeftComponent;
  let fixture: ComponentFixture<HalfImageSidebarLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalfImageSidebarLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfImageSidebarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
