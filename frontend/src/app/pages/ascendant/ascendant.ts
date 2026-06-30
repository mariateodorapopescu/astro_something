import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { ApiService, AscendantResult } from '../../api.service';
import { Prose } from '../../sections/prose/prose';
import { Faq, FaqItem } from '../../sections/faq/faq';

@Component({
  selector: 'app-ascendant',
  imports: [FormsModule, RouterLink, Prose, Faq],
  templateUrl: './ascendant.html',
})
export class Ascendant {
  private api = inject(ApiService);

  birthDate = signal('');
  hour = signal('');
  minute = signal('');
  place = signal('');

  loading = signal(false);
  error = signal<string | null>(null);
  result = signal<AscendantResult | null>(null);

  calculate(): void {
    this.error.set(null);
    this.result.set(null);
    if (!this.birthDate() || !this.hour() || !this.place()) {
      this.error.set('Completeaza data, ora si locul nasterii pentru un rezultat precis.');
      return;
    }
    this.loading.set(true);
    this.api.ascendant(this.birthDate(), Number(this.hour()) || 0, this.place()).subscribe({
      next: (res) => { this.result.set(res); this.loading.set(false); },
      error: () => {
        this.error.set('Nu pot contacta backend-ul. Pornește serverul Python (uvicorn).');
        this.loading.set(false);
      },
    });
  }

  whatIs = [
    'The ascendant (Latin: ascendens — "rising") is the zodiac sign that rises on the eastern horizon at the moment of your birth. It is one of the three most important elements of a natal chart, alongside your Sun sign and Moon sign.',
    'While the Sun sign describes your inner essence and the Moon sign your emotions, the ascendant determines how others perceive you. It\'s your "social mask" — the first impression you make and the way you approach new situations.',
    'The ascendant changes approximately every 2 hours, which is why an exact birth time is essential for its calculation.',
  ];

  // Cele 12 semne ascendente cu element + planeta guvernatoare.
  signs = [
    { name: 'Aries', symbol: '♈', element: 'Fire', planet: 'Mars' },
    { name: 'Taurus', symbol: '♉', element: 'Earth', planet: 'Venus' },
    { name: 'Gemini', symbol: '♊', element: 'Air', planet: 'Mercury' },
    { name: 'Cancer', symbol: '♋', element: 'Water', planet: 'Moon' },
    { name: 'Leo', symbol: '♌', element: 'Fire', planet: 'Sun' },
    { name: 'Virgo', symbol: '♍', element: 'Earth', planet: 'Mercury' },
    { name: 'Libra', symbol: '♎', element: 'Air', planet: 'Venus' },
    { name: 'Scorpio', symbol: '♏', element: 'Water', planet: 'Pluto' },
    { name: 'Sagittarius', symbol: '♐', element: 'Fire', planet: 'Jupiter' },
    { name: 'Capricorn', symbol: '♑', element: 'Earth', planet: 'Saturn' },
    { name: 'Aquarius', symbol: '♒', element: 'Air', planet: 'Uranus' },
    { name: 'Pisces', symbol: '♓', element: 'Water', planet: 'Neptune' },
  ];

  faqItems: FaqItem[] = [
    { q: 'What is the difference between ascendant and zodiac sign?', a: 'Your zodiac (Sun) sign reflects your inner essence, while the ascendant reflects how others perceive you — your outward first impression.' },
    { q: 'Why do I need an exact birth time?', a: 'The ascendant changes about every 2 hours, so even a small difference in time can change your rising sign.' },
    { q: 'Can I calculate my ascendant without a birth time?', a: 'A rough estimate is possible, but the result may be inaccurate. For a reliable ascendant, an exact birth time is needed.' },
    { q: 'How accurate is this calculator?', a: 'It uses precise astronomical calculations, so with an accurate birth time and place the result is reliable.' },
    { q: 'What is the "Big Three"?', a: 'Your Sun sign, Moon sign and Ascendant together — the three pillars that shape your astrological profile.' },
  ];
}
