import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Partnership } from './pages/partnership/partnership';
import { Child } from './pages/child/child';
import { HumanDesign } from './pages/human-design/human-design';

export const routes: Routes = [
  { path: '', component: Home, title: 'ASTRA — Cosmic Map Calculator' },
  { path: 'partnership-matrix', component: Partnership, title: 'ASTRA — Partnership Matrix' },
  { path: 'child-matrix', component: Child, title: 'ASTRA — Child Matrix' },
  { path: 'human-design', component: HumanDesign, title: 'ASTRA — Human Design' },
  { path: '**', redirectTo: '' },
];
