import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompliantChartComponent } from './compliant-chart.component';

describe('CompliantChartComponent', () => {
  let component: CompliantChartComponent;
  let fixture: ComponentFixture<CompliantChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompliantChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompliantChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
