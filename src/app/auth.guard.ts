import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  var userId = sessionStorage.getItem('userId');

  userId ? inject(Router).navigate(['/dashboard']) : '';
  return true;

};
