import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { Prose } from '../../sections/prose/prose';

@Component({
  selector: 'app-ascendant',
  imports: [FormsModule, RouterLink, Prose],
  templateUrl: './ascendant.html',
})
export class Ascendant {
  birthDate = signal('');
  hour = signal('');
  minute = signal('');
  place = signal('');
  result = signal<string | null>(null);

  calculate(): void {
    if (!this.birthDate() || !this.hour() || !this.place()) {
      this.result.set('Completeaza data, ora si locul nasterii pentru un rezultat precis.');
      return;
    }
    // TODO: apel catre backend (calcul astronomic real).
    this.result.set('Ascendentul tau se calculeaza pe baza datelor introduse...');
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
}
