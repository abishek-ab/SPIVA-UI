import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { AuthGuardService } from 'src/app/auth/auth-guard.service';
import {LoginComponent } from 'src/app/login/login.component'


const routes: Routes = [
  {path :'', component: DashboardComponent},
  {path :'home', component: HomeComponent,canActivate:[AuthGuardService]},
  {path :'login', component: LoginComponent,canActivate:[AuthGuardService]},
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
