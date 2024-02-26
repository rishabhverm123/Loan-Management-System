import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo:'dashboard'
      },
      // {
      //   path:'**',
      //   pathMatch:'full',
      //   redirectTo:''
      // },
      {
        path:'dashboard',
        loadChildren:()=>
          import('./dashboard/dashboard.module').then((m)=>m.DashboardModule)
      },
      {
        path:'customers',
        loadChildren:()=>
          import('./customer/customer.module').then((m)=>m.CustomerModule)
      },
      {
        path:'invoice',
        loadChildren:()=>
          import('./invoice/invoice.module').then((m)=>m.InvoiceModule)
      },
      {
        path:'loans',
        loadChildren:()=>
          import('./loans/loans.module').then((m)=>m.LoansModule)
      },
      {
        path:'loan-plans',
        loadChildren:()=>
          import('./loans-plan/loans-plan.module').then((m)=>m.LoansPlanModule)
      },
      {
        path:'payments',
        loadChildren:()=>
          import('./payments/payments.module').then((m)=>m.PaymentsModule)
      },
      {
        path:'reports',
        loadChildren:()=>
          import('./reports/reports.module').then((m)=>m.ReportsModule)
      },
      {
        path:'settings',
        loadChildren:()=>
          import('./settings/settings.module').then((m)=>m.SettingsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
