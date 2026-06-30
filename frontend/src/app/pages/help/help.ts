import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-help',
  imports: [FormsModule, RouterLink],
  templateUrl: './help.html',
})
export class Help {
  query = signal('');

  categories = [
    { icon: '🚀', title: 'Getting Started', count: '4 articles', tint: 'bg-violet-100 dark:bg-violet-500/15' },
    { icon: '⭐', title: 'Destiny Matrix — Individual', count: '5 articles', tint: 'bg-sky-100 dark:bg-sky-500/15' },
    { icon: '❤️', title: 'Partnership Matrix', count: '3 articles', tint: 'bg-rose-100 dark:bg-rose-500/15' },
    { icon: '🧒', title: 'Child Matrix', count: '2 articles', tint: 'bg-violet-100 dark:bg-violet-500/15' },
    { icon: '🧬', title: 'Human Design', count: '4 articles', tint: 'bg-teal-100 dark:bg-teal-500/15' },
    { icon: '👤', title: 'Account & Profiles', count: '3 articles', tint: 'bg-amber-100 dark:bg-amber-500/15' },
    { icon: '💳', title: 'Payments & Orders', count: '5 articles', tint: 'bg-emerald-100 dark:bg-emerald-500/15' },
    { icon: '📊', title: 'User Dashboard', count: '4 articles', tint: 'bg-orange-100 dark:bg-orange-500/15' },
    { icon: '👑', title: 'Premium & Subscription', count: '3 articles', tint: 'bg-amber-100 dark:bg-amber-500/15' },
    { icon: '🛡️', title: 'Privacy & Security', count: '3 articles', tint: 'bg-rose-100 dark:bg-rose-500/15' },
  ];

  popular = [
    { icon: 'ℹ️', title: 'What is ASTRA?', text: 'Discover our portal and learn about the tools we offer for self-discovery.' },
    { icon: '❓', title: 'What is the Destiny Matrix?', text: 'Explanation of the Destiny Matrix system and what it reveals.' },
    { icon: '🧬', title: 'What is Human Design?', text: 'An introduction to the Human Design system and its applications.' },
    { icon: '💳', title: 'Available Payment Methods', text: 'Overview of available payment methods: cards, transfers and more.' },
    { icon: '🧮', title: 'How to Calculate Your Destiny Matrix?', text: 'Step by step: how to use the Destiny Matrix calculator.' },
  ];
}
