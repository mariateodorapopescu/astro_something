import { Routes } from '@angular/router';

import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home, title: 'ASTRA — Cosmic Map Calculator' },
  // Paginile noi se vor adauga aici, ex:
  // { path: 'partnership-matrix', component: Partnership },
  // { path: 'child-matrix', component: Child },
  { path: '**', redirectTo: '' },
];
