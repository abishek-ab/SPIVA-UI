import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
import { Promise } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthServiceService,private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, status: RouterStateSnapshot): boolean {

    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      //this.router.navigate(['/']);
      return false;
    }

  }

} 
