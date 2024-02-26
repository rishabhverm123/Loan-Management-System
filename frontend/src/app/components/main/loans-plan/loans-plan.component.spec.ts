import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansPlanComponent } from './loans-plan.component';

describe('LoansPlanComponent', () => {
  let component: LoansPlanComponent;
  let fixture: ComponentFixture<LoansPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoansPlanComponent]
    });
    fixture = TestBed.createComponent(LoansPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
