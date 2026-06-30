import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.html',
})
export class HowItWorks {
  steps = [
    {
      n: 1,
      title: 'Enter birth date',
      text: 'Type your name and birth date into the calculator. The whole analysis is based only on the date — no time or place needed.',
    },
    {
      n: 2,
      title: 'Map calculation',
      text: 'The algorithm breaks the date into individual numbers, computes their vibration and builds your personal map.',
    },
    {
      n: 3,
      title: 'Read your map',
      text: 'You get a visualization with descriptions: talents, finances, health, relationships and life cycles — all explained.',
    },
  ];
}
