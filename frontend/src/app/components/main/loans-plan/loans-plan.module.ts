import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoansPlanRoutingModule } from './loans-plan-routing.module';
import { LoansPlanComponent } from './loans-plan.component';


@NgModule({
  declarations: [
    LoansPlanComponent
  ],
  imports: [
    CommonModule,
    LoansPlanRoutingModule
  ]
})
export class LoansPlanModule { }
