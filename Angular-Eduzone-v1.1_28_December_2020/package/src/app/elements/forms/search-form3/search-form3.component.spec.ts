import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForm3Component } from './search-form3.component';

describe('SearchForm3Component', () => {
  let component: SearchForm3Component;
  let fixture: ComponentFixture<SearchForm3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchForm3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
