import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Prose } from '../../sections/prose/prose';

@Component({
  selector: 'app-horoscope',
  imports: [RouterLink, Prose],
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
    'Our daily horoscopes are prepared considering current planetary transits, Moon phases and the unique traits of each sign — covering love, work, health and overall energy.',
  ];
}
