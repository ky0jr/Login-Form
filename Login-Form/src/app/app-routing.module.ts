import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './Authentication/register/register.component';
import {LoginComponent} from './Authentication/login/login.component';
import {PagesComponent} from './pages/pages.component';
import {AuthGuard} from './Authentication/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/page',
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'page',
    component: PagesComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
