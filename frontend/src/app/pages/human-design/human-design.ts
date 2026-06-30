import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { Prose } from '../../sections/prose/prose';
import { HowItWorks, Step } from '../../sections/how-it-works/how-it-works';
import { Features, FeatureCard } from '../../sections/features/features';
import { Faq, FaqItem } from '../../sections/faq/faq';

@Component({
  selector: 'app-human-design',
  imports: [FormsModule, RouterLink, Prose, HowItWorks, Features, Faq],
  templateUrl: './human-design.html',
})
export class HumanDesign {
  name = signal('');
  birthDate = signal('');
  birthTime = signal('');
  birthPlace = signal('');
  result = signal<string | null>(null);

  calculate(): void {
    if (!this.name() || !this.birthDate()) {
      this.result.set('Completeaza numele si data nasterii.');
      return;
    }
    // TODO: apel catre backend pentru calculul real al BodyGraph-ului.
    this.result.set(`BodyGraph-ul lui ${this.name()} se calculeaza...`);
  }

  // Statisticile afisate sub titlu.
  stats = [
    { value: '5', label: 'Energy types', color: 'text-teal-500' },
    { value: '64', label: 'Genetic gates', color: 'text-cyan-500' },
    { value: '36', label: 'Channels', color: 'text-violet-500' },
    { value: '9', label: 'Energy centers', color: 'text-pink-500' },
  ];

  // Cele 5 tipuri de energie (sectiune specifica acestei pagini).
  energyTypes = [
    { name: 'Generator', dot: 'bg-red-500', pct: '~37% of population', text: 'Life force and sacral energy. Strategy: wait to respond.' },
    { name: 'Manifesting Generator', dot: 'bg-orange-500', pct: '~33% of population', text: 'Multi-tasking and speed. A hybrid of Generator and Manifestor.' },
    { name: 'Projector', dot: 'bg-blue-500', pct: '~20% of population', text: 'Natural guide. Strategy: wait for the invitation.' },
    { name: 'Manifestor', dot: 'bg-green-500', pct: '~8% of population', text: 'Initiator of change. Strategy: inform before you act.' },
    { name: 'Reflector', dot: 'bg-slate-300', pct: '~1% of population', text: 'Mirror of the community. Strategy: wait a full lunar cycle.' },
  ];

  whatIs = [
    'Human Design is a self-knowledge system combining Western and Chinese astrology, I Ching, Kabbalah, the chakra system and quantum physics. It has helped millions of people worldwide better understand their nature.',
    'The system creates your unique energy map called a BodyGraph — a diagram of 9 energy centers, 64 gates and 36 channels. Based on your exact date, time and place of birth, the calculator computes planetary positions and determines your individual Design.',
    'Each person belongs to one of 5 energy types: Generator, Manifesting Generator, Projector, Manifestor or Reflector. Your type determines how your energy interacts with the world and where your inner authority comes from.',
  ];

  cards: FeatureCard[] = [
    { icon: '⚡', title: 'Energy Type', gradient: 'from-teal-400 to-emerald-500',
      text: 'Generator, Projector, Manifestor, Reflector or Manifesting Generator? Your type determines how your energy works in the world.' },
    { icon: '🧭', title: 'Strategy & Authority', gradient: 'from-cyan-400 to-sky-500',
      text: 'Strategy is your decision-making map, and inner Authority shows where to find certainty and trust in your choices.' },
    { icon: '🧬', title: '64 Gates & 9 Centers', gradient: 'from-violet-500 to-indigo-600',
      text: 'Each of 64 gates corresponds to an I Ching hexagram and a DNA codon. 9 energy centers create your unique BodyGraph.' },
  ];

  steps: Step[] = [
    { n: 1, title: 'Enter birth data', text: 'Enter your date of birth. Adding your birth time and place significantly increases accuracy.' },
    { n: 2, title: 'BodyGraph Calculation', text: 'The algorithm computes planetary positions at the moment of birth and 88 days before (Design), generating your unique BodyGraph.' },
    { n: 3, title: 'Read your Design', text: 'You receive a detailed report: energy type, strategy, authority, profile, definition, active centers, gates and channels.' },
  ];

  faqItems: FaqItem[] = [
    { q: 'What is Human Design and how does it work?', a: 'It is a self-knowledge system that builds your BodyGraph from your birth data, revealing your energy type, strategy and authority.' },
    { q: 'Do I need my exact birth time?', a: 'Not strictly, but birth time and place make the calculation much more precise. Without them it is based on the date alone.' },
    { q: 'Is the Human Design calculator free?', a: 'Yes, the basic BodyGraph and type are free. A full detailed report is available as a paid plan.' },
    { q: 'What are the 5 energy types?', a: 'Generator, Manifesting Generator, Projector, Manifestor and Reflector — each with its own strategy for making decisions.' },
  ];
}
