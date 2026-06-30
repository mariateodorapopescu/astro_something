import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { AuthService } from './auth.service';

/**
 * Adauga automat header-ul "Authorization: Bearer <token>" la cererile
 * catre /api/, daca utilizatorul e logat. Asa rutele protejate (ex: /api/me)
 * primesc token-ul fara sa-l atasam manual de fiecare data.
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).token();
  if (token && req.url.startsWith('/api')) {
    req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }
  return next(req);
};
