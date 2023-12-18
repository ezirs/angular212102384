import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const otentikasiGuard: CanActivateFn = (route, state) => {
  console.log('Otentikasi dimulai...');

  var userId = sessionStorage.getItem('userId')
  console.log('userId: ' + userId);

  if (userId == null) {
    inject(Router).navigate(['/login']);
  } else if (userId == undefined) {
    inject(Router).navigate(['/login']);
  } else if (userId == '') {
    inject(Router).navigate(['/login']);
  } else {
    return true;
  }

  inject(Router).navigate(['/login']);

  return false;
};
