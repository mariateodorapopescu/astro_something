import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Partnership } from './pages/partnership/partnership';
import { Child } from './pages/child/child';
import { HumanDesign } from './pages/human-design/human-design';
import { PricingPage } from './pages/pricing-page/pricing-page';
import { Horoscope } from './pages/horoscope/horoscope';
import { Ascendant } from './pages/ascendant/ascendant';
import { Blog } from './pages/blog/blog';
import { BlogArticle } from './pages/blog/blog-article';

export const routes: Routes = [
  { path: '', component: Home, title: 'ASTRA — Cosmic Map Calculator' },
  { path: 'partnership-matrix', component: Partnership, title: 'ASTRA — Partnership Matrix' },
  { path: 'child-matrix', component: Child, title: 'ASTRA — Child Matrix' },
  { path: 'human-design', component: HumanDesign, title: 'ASTRA — Human Design' },
  { path: 'pricing', component: PricingPage, title: 'ASTRA — Pricing' },
  { path: 'horoscope', component: Horoscope, title: 'ASTRA — Daily Horoscope' },
  { path: 'ascendant-calculator', component: Ascendant, title: 'ASTRA — Ascendant Calculator' },
  { path: 'blog', component: Blog, title: 'ASTRA — Blog' },
  { path: 'blog/:slug', component: BlogArticle, title: 'ASTRA — Article' },
  { path: '**', redirectTo: '' },
];
