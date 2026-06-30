import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { ApiService, PartnershipResult } from '../../api.service';
import { Prose } from '../../sections/prose/prose';
import { HowItWorks, Step } from '../../sections/how-it-works/how-it-works';
import { Features, FeatureCard } from '../../sections/features/features';
import { Faq, FaqItem } from '../../sections/faq/faq';

@Component({
  selector: 'app-partnership',
  imports: [FormsModule, RouterLink, Prose, HowItWorks, Features, Faq],
  templateUrl: './partnership.html',
})
export class Partnership {
  private api = inject(ApiService);

  // Formularul pentru cele doua persoane.
  name1 = signal('');
  date1 = signal('');
  name2 = signal('');
  date2 = signal('');

  loading = signal(false);
  error = signal<string | null>(null);
  result = signal<PartnershipResult | null>(null);

  calculate(): void {
    this.error.set(null);
    this.result.set(null);
    if (!this.name1() || !this.date1() || !this.name2() || !this.date2()) {
      this.error.set('Completeaza numele si data nasterii pentru ambele persoane.');
      return;
    }
    this.loading.set(true);
    this.api.calculatePartnership(this.name1(), this.date1(), this.name2(), this.date2()).subscribe({
      next: (res) => { this.result.set(res); this.loading.set(false); },
      error: () => {
        this.error.set('Nu pot contacta backend-ul. Pornește serverul Python (uvicorn).');
        this.loading.set(false);
      },
    });
  }

  // --- Continut pentru sectiunile reutilizabile ---

  whatIs = [
    'The Partnership Matrix (also known as the compatibility matrix) is an advanced numerological tool. Using the birth dates of two people, it calculates shared energy points, shared karma, relationship dynamics and relationship potential.',
    'The compatibility calculator compares the individual matrices of both partners, finds energy connection points and reveals the lessons they need to work through together — emotional, intellectual, spiritual and financial compatibility.',
  ];

  steps: Step[] = [
    { n: 1, title: 'Enter two birth dates', text: 'Enter the names and birth dates of both partners. Only the dates are needed — no birth time or place required.' },
    { n: 2, title: 'Compatibility calculation', text: 'The algorithm compares the numerological vibrations of both people, calculates shared energy points and relationship dynamics.' },
    { n: 3, title: 'Read your result', text: "You'll receive a compatibility matrix with analysis of shared areas, relationship karma and guidance for the future." },
  ];

  cards: FeatureCard[] = [
    { icon: '❤️', title: 'Emotional compatibility', gradient: 'from-rose-400 to-red-500',
      text: 'Check how your emotional energies align and what patterns you repeat in the relationship.' },
    { icon: '☯️', title: 'Relationship karma', gradient: 'from-violet-500 to-indigo-600',
      text: 'Discover shared karmic lessons and the purpose for which you met on your path.' },
    { icon: '🔥', title: 'Energy dynamics', gradient: 'from-amber-400 to-orange-500',
      text: 'Learn where you complement each other and where friction occurs in the relationship.' },
    { icon: '💬', title: 'Communication', gradient: 'from-sky-400 to-blue-500',
      text: 'Learn how to communicate effectively with your partner at every level.' },
    { icon: '🪙', title: 'Partner finances', gradient: 'from-emerald-400 to-green-500',
      text: 'Check financial compatibility and how you can build abundance together.' },
    { icon: '🌱', title: 'Shared growth', gradient: 'from-fuchsia-500 to-pink-500',
      text: 'Discover the growth potential of your relationship and how to grow spiritually together.' },
  ];

  faqItems: FaqItem[] = [
    { q: 'What is the Partnership Matrix?', a: 'It is a compatibility analysis of two people based on their birth dates, revealing shared energy, karma and relationship dynamics.' },
    { q: 'How to calculate partner compatibility?', a: 'Enter both names and birth dates, then press calculate. You instantly get a free compatibility preview.' },
    { q: 'Is the compatibility calculator free?', a: 'Yes, the basic compatibility preview is free. The full report is available as a paid plan.' },
    { q: 'Does it only work for romantic couples?', a: 'No — it works for any pair: partners, friends, family or business partners.' },
  ];
}
