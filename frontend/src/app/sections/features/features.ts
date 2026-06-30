import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.html',
})
export class Features {
  // "gradient" = clasele Tailwind pentru cercul colorat din spatele iconitei.
  cards = [
    { icon: '💎', title: 'Your Talents', gradient: 'from-fuchsia-500 to-pink-500',
      text: 'Reveal your innate abilities and strengths that help you reach success in life.' },
    { icon: '💙', title: 'Relationships', gradient: 'from-sky-400 to-blue-500',
      text: 'Understand your bonds with partner, family and children on a deeper level.' },
    { icon: '🪙', title: 'Finances', gradient: 'from-amber-400 to-orange-500',
      text: 'Discover your financial channel and learn how to attract abundance.' },
    { icon: '🌱', title: 'Spiritual Growth', gradient: 'from-emerald-400 to-green-500',
      text: 'Understand your spiritual path and the lessons encoded in your birth date.' },
    { icon: '❤️', title: 'Health', gradient: 'from-rose-400 to-red-500',
      text: 'Learn about the body areas that need special attention, revealed by your map.' },
    { icon: '🕐', title: 'Life Cycles', gradient: 'from-violet-500 to-indigo-500',
      text: 'Find out what each period of your life brings through the analysis of cycles.' },
  ];
}
