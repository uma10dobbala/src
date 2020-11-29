import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalesReportComponent } from './add-sales-report.component';

describe('AddSalesReportComponent', () => {
  let component: AddSalesReportComponent;
  let fixture: ComponentFixture<AddSalesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSalesReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSalesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
