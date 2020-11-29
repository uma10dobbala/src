import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesreportDetailsComponent } from './salesreport-details.component';

describe('SalesreportDetailsComponent', () => {
  let component: SalesreportDetailsComponent;
  let fixture: ComponentFixture<SalesreportDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesreportDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesreportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
