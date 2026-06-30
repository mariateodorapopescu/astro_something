import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { Prose } from '../../sections/prose/prose';
import { HowItWorks, Step } from '../../sections/how-it-works/how-it-works';
import { Features, FeatureCard } from '../../sections/features/features';
import { Faq, FaqItem } from '../../sections/faq/faq';

@Component({
  selector: 'app-child',
  imports: [FormsModule, RouterLink, Prose, HowItWorks, Features, Faq],
  templateUrl: './child.html',
})
export class Child {
  name = signal('');
  birthDate = signal('');
  result = signal<string | null>(null);

  calculate(): void {
    if (!this.name() || !this.birthDate()) {
      this.result.set('Completeaza numele si data nasterii copilului.');
      return;
    }
    // TODO: apel catre backend pentru calculul real.
    this.result.set(`Harta copilului ${this.name()} se calculeaza...`);
  }

  whatIs = [
    "The Child Matrix is a special version of the numerological matrix designed with parents in mind. It analyzes the child's birth date and reveals their innate talents, predispositions, developmental potential and key life stages.",
    "Our free Child Matrix Calculator interprets results in an educational context — instead of abstract concepts, you receive practical parenting tips: how to develop the child's talents, which activities to choose and how to guide them through challenging stages.",
  ];

  steps: Step[] = [
    { n: 1, title: "Enter the child's birth date", text: 'Enter the name and birth date of the child. It works based on the date alone — no birth time or place required.' },
    { n: 2, title: 'Algorithm calculates the matrix', text: 'The system analyzes the numerological vibrations of the birth date and creates a matrix specially interpreted for child development.' },
    { n: 3, title: 'Read talents and guidance', text: "You'll receive a matrix visualization with talents, predispositions, parenting tips and a development forecast — clear for every parent." },
  ];

  cards: FeatureCard[] = [
    { icon: '✨', title: 'Talents and abilities', gradient: 'from-amber-400 to-orange-500',
      text: "Discover your child's natural predispositions — artistic, academic, athletic or social." },
    { icon: '🎯', title: "Child's life purpose", gradient: 'from-sky-400 to-blue-500',
      text: 'Understand the destiny and direction your child naturally follows according to the matrix.' },
    { icon: '❤️', title: 'Parent-child relationship', gradient: 'from-rose-400 to-red-500',
      text: 'Practical tips on building a deep relationship with your child and communicating effectively.' },
    { icon: '📈', title: 'Development forecast', gradient: 'from-emerald-400 to-green-500',
      text: "Key stages and turning points in your child's life — when to support and when to give freedom." },
    { icon: '🎓', title: 'Education and growth', gradient: 'from-violet-500 to-indigo-600',
      text: "Which activities, teaching styles and environments best support your child's development." },
    { icon: '🌱', title: 'Karma and lessons', gradient: 'from-fuchsia-500 to-pink-500',
      text: 'Karmic challenges your child brings and how to work through them together as parent and child.' },
  ];

  faqItems: FaqItem[] = [
    { q: 'What is the Child Matrix?', a: "A numerological matrix designed for parents that reveals a child's talents, potential and developmental stages." },
    { q: "From what age can a child's matrix be calculated?", a: 'From birth — the analysis is based on the birth date, so it works at any age.' },
    { q: 'Is the Child Matrix calculator free?', a: 'Yes, the basic preview is free. The full report with parenting guidance is a paid plan.' },
    { q: 'What data is needed?', a: "Only the child's name and birth date. No birth time or place is required." },
  ];
}
