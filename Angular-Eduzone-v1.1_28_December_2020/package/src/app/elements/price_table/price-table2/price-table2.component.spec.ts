import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceTable2Component } from './price-table2.component';

describe('PriceTable2Component', () => {
  let component: PriceTable2Component;
  let fixture: ComponentFixture<PriceTable2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceTable2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
