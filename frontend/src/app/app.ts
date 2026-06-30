import { Component } from '@angular/core';

import { Navbar } from './sections/navbar/navbar';
import { Hero } from './sections/hero/hero';
import { HowItWorks } from './sections/how-it-works/how-it-works';
import { Features } from './sections/features/features';
import { Testimonials } from './sections/testimonials/testimonials';
import { Pricing } from './sections/pricing/pricing';
import { Faq } from './sections/faq/faq';
import { Footer } from './sections/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, HowItWorks, Features, Testimonials, Pricing, Faq, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
