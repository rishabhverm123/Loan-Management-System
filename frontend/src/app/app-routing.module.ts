import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'', pathMatch:'full',redirectTo:'login'
  },
  {
    path:'main',
    loadChildren:()=>
      import('./components/main/main.module').then((m)=>m.MainModule)
  },
  {
    path:'login',
    loadChildren:()=>
      import('./components/login/login.module').then((m)=>m.LoginModule)
  },
  {
    path:'register',
    loadChildren:()=>
      import('./components/register/register.module').then((m)=>m.RegisterModule)
  },
    {
    path:'**',
    redirectTo:'login',
    pathMatch:'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
