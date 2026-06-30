import { Component } from '@angular/core';

import { Hero } from '../../sections/hero/hero';
import { HowItWorks } from '../../sections/how-it-works/how-it-works';
import { Features } from '../../sections/features/features';
import { Testimonials } from '../../sections/testimonials/testimonials';
import { Pricing } from '../../sections/pricing/pricing';
import { Faq } from '../../sections/faq/faq';
import { Cta } from '../../sections/cta/cta';

@Component({
  selector: 'app-home',
  imports: [Hero, HowItWorks, Features, Testimonials, Pricing, Faq, Cta],
  templateUrl: './home.html',
})
export class Home {}
