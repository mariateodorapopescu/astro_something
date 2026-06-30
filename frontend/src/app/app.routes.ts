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
import { Knowledge } from './pages/knowledge/knowledge';
import { Tarot } from './pages/tarot/tarot';
import { Contact } from './pages/contact/contact';
import { Help } from './pages/help/help';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { About } from './pages/about/about';
import { Privacy } from './pages/privacy/privacy';

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
  { path: 'knowledge', component: Knowledge, title: 'ASTRA — Knowledge Center' },
  { path: 'tarot', component: Tarot, title: 'ASTRA — Tarot Online' },
  { path: 'contact', component: Contact, title: 'ASTRA — Contact' },
  { path: 'help', component: Help, title: 'ASTRA — Help Center' },
  { path: 'login', component: Login, title: 'ASTRA — Log in' },
  { path: 'register', component: Register, title: 'ASTRA — Create account' },
  { path: 'about', component: About, title: 'ASTRA — About Us' },
  { path: 'privacy-policy', component: Privacy, title: 'ASTRA — Privacy Policy' },
  { path: '**', redirectTo: '' },
];
