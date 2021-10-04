import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid3SidebarComponent } from './grid3-sidebar.component';

describe('Grid3SidebarComponent', () => {
  let component: Grid3SidebarComponent;
  let fixture: ComponentFixture<Grid3SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grid3SidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grid3SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
