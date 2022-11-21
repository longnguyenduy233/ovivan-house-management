import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { SessionFacadeService } from '../services/session.facade.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenGuard implements CanActivate, CanActivateChild {
  constructor(
    private sessionFacadeService: SessionFacadeService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.sessionFacadeService.isLoggedIn$.pipe(switchMap(isLoggedIn => {
      if (isLoggedIn) {
        return of(true);
      }
      this.router.navigate(["/house-listing"]);
      return of(false);
    }));
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state);
  }
  
}
