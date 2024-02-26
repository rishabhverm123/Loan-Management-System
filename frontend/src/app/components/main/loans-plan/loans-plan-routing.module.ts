import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansPlanComponent } from './loans-plan.component';

const routes: Routes = [
  {
    path:'',
    component:LoansPlanComponent,
    outlet:'outlet_right_body'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoansPlanRoutingModule { }
