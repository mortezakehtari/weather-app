import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../login/service/auth.service';



@Injectable({
  providedIn: 'root'
})

export class AuthGurad {

  constructor(private authService: AuthService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean | undefined> | boolean {
    return this.authService.isAuthenticated()
      .then(
        (authenticate) => {
          if (authenticate)
            return true;
          else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      )
  }
  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean | undefined> | boolean {
    return this.canActivate(route, state);
  }
}
