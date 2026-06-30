import { Component } from '@angular/core';

import { Navbar } from './sections/navbar/navbar';
import { Hero } from './sections/hero/hero';
import { HowItWorks } from './sections/how-it-works/how-it-works';
import { Features } from './sections/features/features';
import { Testimonials } from './sections/testimonials/testimonials';
import { Pricing } from './sections/pricing/pricing';
import { Faq } from './sections/faq/faq';
import { Cta } from './sections/cta/cta';
import { Newsletter } from './sections/newsletter/newsletter';
import { Footer } from './sections/footer/footer';
import { TarotModal } from './sections/tarot-modal/tarot-modal';

@Component({
  selector: 'app-root',
  imports: [
    Navbar, Hero, HowItWorks, Features, Testimonials,
    Pricing, Faq, Cta, Newsletter, Footer, TarotModal,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
