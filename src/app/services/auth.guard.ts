import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth-api.service';



export const AuthGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const service = inject(AuthService);
    if (service.loggedIn()) {
      console.log('logged in');
      return true;
    }
    console.log('logged off');
    router.navigate(['/login']);
    return false;
}

/*export const AuthGuardLogged: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const service = inject(AuthService);
  if (!service.loggedIn()) {
    return true;
  }
  router.navigate(['/mi-cuenta']);
  return false;
}
*/
