import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth-api.service'; // Asegúrate de tener un servicio de autenticación

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuthenticated = this.authService.loggedIn();
    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/']); // Redirige a la página de inicio si no está autenticado
      return false;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthGuardLogged implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuthenticated = this.authService.loggedIn();
    if (!isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/']); // Redirige a la página de inicio si no está autenticado
      return false;
    }
  }
}
