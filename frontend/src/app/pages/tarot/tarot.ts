import { Component } from '@angular/core';

@Component({
  selector: 'app-tarot',
  templateUrl: './tarot.html',
})
export class Tarot {
  spreads = [
    { icon: '☀️', title: 'Card of the Day', text: 'Discover your card of the day and find out what awaits you today.',
      cards: '1 card', login: false },
    { icon: '⚖️', title: 'Yes / No', text: 'Draw two cards to find the answer to your question.',
      cards: '2 cards', login: true },
    { icon: '🔮', title: 'Three Cards', text: 'Past, present and future — see the full picture.',
      cards: '3 cards', login: true },
  ];

  steps = [
    { n: 1, icon: '🎴', title: 'Choose a spread', text: 'Card of the Day is free. Three Cards and Yes/No spreads require credits.' },
    { n: 2, icon: '🤔', title: 'Ask a question', text: 'Focus on what you want to know. The question is optional but helps with interpretation.' },
    { n: 3, icon: '✨', title: 'Reveal cards', text: 'Click the cards to flip them and discover their message.' },
  ];
}
