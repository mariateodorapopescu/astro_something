import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Prose } from '../../sections/prose/prose';
import { Features, FeatureCard } from '../../sections/features/features';
import { Faq, FaqItem } from '../../sections/faq/faq';

@Component({
  selector: 'app-horoscope',
  imports: [RouterLink, Prose, Features, Faq],
  templateUrl: './horoscope.html',
})
export class Horoscope {
  // Cele 12 zodii cu simbol si interval de date.
  signs = [
    { name: 'Aries', symbol: '♈', range: '21.03 – 19.04' },
    { name: 'Taurus', symbol: '♉', range: '20.04 – 20.05' },
    { name: 'Gemini', symbol: '♊', range: '21.05 – 20.06' },
    { name: 'Cancer', symbol: '♋', range: '21.06 – 22.07' },
    { name: 'Leo', symbol: '♌', range: '23.07 – 22.08' },
    { name: 'Virgo', symbol: '♍', range: '23.08 – 22.09' },
    { name: 'Libra', symbol: '♎', range: '23.09 – 22.10' },
    { name: 'Scorpio', symbol: '♏', range: '23.10 – 21.11' },
    { name: 'Sagittarius', symbol: '♐', range: '22.11 – 21.12' },
    { name: 'Capricorn', symbol: '♑', range: '22.12 – 19.01' },
    { name: 'Aquarius', symbol: '♒', range: '20.01 – 18.02' },
    { name: 'Pisces', symbol: '♓', range: '19.02 – 20.03' },
  ];

  whatIs = [
    'A daily horoscope is an astrological forecast based on current planetary positions and their influence on each zodiac sign. Every day, the alignment of celestial bodies changes, affecting your energy, emotions and circumstances.',
    'Our daily horoscopes are prepared considering current planetary transits, Moon phases and astrological aspects. This helps you plan your day better and harness favorable energies.',
    'The 12 zodiac signs are divided into 4 elements: fire (Aries, Leo, Sagittarius), earth (Taurus, Virgo, Capricorn), air (Gemini, Libra, Aquarius) and water (Cancer, Scorpio, Pisces).',
  ];

  // "Discover more on ASTRA" — alte unelte.
  discoverCards: FeatureCard[] = [
    { icon: '✦', title: 'Destiny Matrix', gradient: 'from-violet-500 to-indigo-500',
      text: 'Calculate your Destiny Matrix — a numerological map of potential based on your birth date.' },
    { icon: '🧬', title: 'Human Design', gradient: 'from-teal-400 to-emerald-500',
      text: 'Calculate your energy type, strategy and authority in the Human Design system.' },
    { icon: '🔮', title: 'Tarot Online', gradient: 'from-rose-400 to-pink-500',
      text: 'Draw a tarot card and discover the message of the Major Arcana.' },
  ];

  faqItems: FaqItem[] = [
    { q: 'How often is the daily horoscope updated?', a: 'Every day — a fresh forecast is generated for each sign based on the current planetary positions.' },
    { q: 'Are daily horoscopes accurate?', a: 'They are general guidance based on your sign. For a precise personal reading, use your full birth chart.' },
    { q: 'Do I need to register to read horoscopes?', a: 'No — the daily horoscope is free and available without an account.' },
  ];
}
