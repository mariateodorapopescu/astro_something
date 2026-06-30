import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-knowledge',
  imports: [RouterLink],
  templateUrl: './knowledge.html',
})
export class Knowledge {
  featured = [
    { title: 'Arcana I — The Magician', emoji: '🧙', gradient: 'from-violet-600 to-fuchsia-600',
      text: 'Willpower, manifestation and beginnings. The Magician symbolizes conscious creation of reality.' },
    { title: 'Arcana XIII — Death', emoji: '🐎', gradient: 'from-slate-600 to-slate-800',
      text: 'Transformation, conclusion and rebirth. The Death arcana does not signify an end — it is a passage.' },
    { title: 'Arcana XXII — The Fool', emoji: '🃏', gradient: 'from-cyan-500 to-amber-400',
      text: 'A new beginning, freedom and spontaneity. The Fool represents the energy of pure potential.' },
  ];

  // Cele 22 de arcane majore.
  arcana = [
    'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Priest',
    'The Lovers', 'Chariot', 'Justice', 'The Hermit', 'Wheel of Fortune', 'Strength',
    'The Hanged Man', 'Death', 'Temperance', 'The Devil', 'The Tower', 'The Star',
    'The Moon', 'The Sun', 'Judgement', 'The World', 'The Fool',
  ];

  categories = [
    { icon: '🃏', title: 'Arcana', text: 'Discover all 22 Major Arcana and their meaning in the Destiny Matrix.', count: '22 articles' },
    { icon: '📐', title: 'Destiny Matrix Basics', text: 'Fundamental knowledge about the Destiny Matrix system.', count: '6 articles' },
    { icon: '🧬', title: 'Human Design Basics', text: 'Introduction to the Human Design system.', count: '5 articles' },
    { icon: '⚡', title: 'Human Design Types', text: 'The five energy types and how they work.', count: '5 articles' },
    { icon: '🔮', title: 'Human Design Centers', text: 'The nine energy centers of the BodyGraph.', count: '9 articles' },
    { icon: '🧭', title: 'HD Authorities', text: 'How to make decisions with your inner authority.', count: '7 articles' },
  ];
}
