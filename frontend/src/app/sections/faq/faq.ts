import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.html',
})
export class Faq {
  // Indexul intrebarii deschise (null = toate inchise).
  openIndex = signal<number | null>(0);

  toggle(i: number): void {
    this.openIndex.set(this.openIndex() === i ? null : i);
  }

  items = [
    { q: 'What is the cosmic map?', a: 'It is a numerology-based system that turns your birth date into a personal map of strengths, challenges and life purpose.' },
    { q: 'How do I use the calculator?', a: 'Just enter your name and birth date, then press calculate. You instantly get a free preview of your map.' },
    { q: 'Is the calculator free?', a: 'Yes, the basic preview is completely free. The full detailed report is available as a paid plan.' },
    { q: 'How quickly will I receive the report?', a: 'The free preview appears instantly. The full PDF report is generated within a few minutes after purchase.' },
  ];
}
