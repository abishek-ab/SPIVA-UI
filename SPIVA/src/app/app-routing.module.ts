import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { AuthGuardService } from 'src/app/auth/auth-guard.service';


const routes: Routes = [
  {path :'', component: DashboardComponent},
  {path :'home',canActivate:[AuthGuardService], component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
