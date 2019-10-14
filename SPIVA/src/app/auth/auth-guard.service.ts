import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map, take } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Promise } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  loggedIn: boolean;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, status: RouterStateSnapshot): boolean {


    this.authenticationService.isUserAuthenticated(this.authenticationService.getBearerToken()).subscribe((data) => {
      const logged = data['isAuthenticated'];
      if (logged) {
        this.loggedIn = logged;
      } else {
        this.router.navigate(['']);
        this.loggedIn = logged;
      }
    })
    return this.loggedIn;
  }
}
