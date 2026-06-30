import { Component, input } from '@angular/core';

export interface Step {
  n: number;
  title: string;
  text: string;
}

/**
 * Sectiune reutilizabila "in 3 pasi". Primeste titlul, subtitlul si pasii
 * prin input-uri, deci o putem folosi pe orice pagina cu alt continut.
 */
@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.html',
})
export class HowItWorks {
  title = input('How does the calculator work?');
  subtitle = input('Calculate your cosmic map in three simple steps — for free.');
  steps = input<Step[]>([
    { n: 1, title: 'Enter birth date', text: 'Type your name and birth date into the calculator. The whole analysis is based only on the date — no time or place needed.' },
    { n: 2, title: 'Map calculation', text: 'The algorithm breaks the date into individual numbers, computes their vibration and builds your personal map.' },
    { n: 3, title: 'Read your map', text: 'You get a visualization with descriptions: talents, finances, health, relationships and life cycles — all explained.' },
  ]);
}
