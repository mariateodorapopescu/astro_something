import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Article {
  category: string;
  title: string;
  excerpt: string;
  readMin: number;
  date: string;
  gradient: string;
  emoji: string;
  featured?: boolean;
}

@Component({
  selector: 'app-blog',
  imports: [RouterLink],
  templateUrl: './blog.html',
})
export class Blog {
  // Categoria selectata (null = toate).
  selected = signal<string | null>(null);

  select(cat: string | null): void {
    this.selected.set(cat);
  }

  articles: Article[] = [
    { category: 'Destiny Matrix', title: 'What is the Matrix of Fate? A complete guide', emoji: '🧊',
      excerpt: 'The Matrix of Fate is an advanced numerological tool based on your birth date. Discover how to read your matrix.',
      readMin: 17, date: '06.02.2026', gradient: 'from-fuchsia-500 to-cyan-500', featured: true },
    { category: 'Numerology', title: 'Numerology in 2026 — how numbers influence your life', emoji: '🔢',
      excerpt: '2026 is a year of vibration 10/1 — new beginnings, leadership and courage. Discover what numerology reveals.',
      readMin: 2, date: '03.02.2026', gradient: 'from-amber-400 to-violet-500', featured: true },
    { category: 'Human Design', title: 'Human Design — your energetic fingerprint', emoji: '🧬',
      excerpt: 'Human Design combines astrology, I Ching, Kabbalah and quantum physics into a unique self-discovery system.',
      readMin: 2, date: '27.01.2026', gradient: 'from-cyan-400 to-pink-500', featured: true },
    { category: 'Astrology', title: 'Moon and Mercury transits: what they mean for you', emoji: '🌙',
      excerpt: 'Discover how the current Moon and Mercury transits can influence your life. Uncover practical advice.',
      readMin: 3, date: '29.06.2026', gradient: 'from-amber-300 to-orange-500' },
    { category: 'Astrology', title: 'Mercury retrograde in Cancer: what to expect', emoji: '☿️',
      excerpt: 'Mercury enters retrograde in Cancer, stirring up emotions and past connections...',
      readMin: 4, date: '24.06.2026', gradient: 'from-violet-500 to-orange-400' },
    { category: 'Human Design', title: 'Understanding Human Design: energy types & life strategies', emoji: '⚡',
      excerpt: 'Dive into the world of Human Design, exploring energy types and life strategies to enhance your decisions.',
      readMin: 4, date: '22.06.2026', gradient: 'from-amber-400 to-rose-500' },
    { category: 'Numerology', title: 'Your life-path number, explained simply', emoji: '🛤️',
      excerpt: 'Learn how to compute your life-path number and what it says about your strengths and challenges.',
      readMin: 5, date: '18.06.2026', gradient: 'from-violet-500 to-indigo-600' },
    { category: 'Personal growth', title: 'Turning self-knowledge into daily habits', emoji: '🌱',
      excerpt: 'Insights are only useful when applied. Practical ways to turn your map into small daily actions.',
      readMin: 6, date: '12.06.2026', gradient: 'from-emerald-400 to-teal-500' },
    { category: 'Astrology news', title: 'Full Moon calendar for the second half of 2026', emoji: '🌕',
      excerpt: 'Mark your calendar: every full moon of the season and how to make the most of each one.',
      readMin: 3, date: '08.06.2026', gradient: 'from-slate-400 to-violet-500' },
  ];

  // Categoriile cu numar de articole (calculate din lista).
  categories = computed(() => {
    const counts = new Map<string, number>();
    for (const a of this.articles) counts.set(a.category, (counts.get(a.category) ?? 0) + 1);
    return [...counts.entries()].map(([name, count]) => ({ name, count }));
  });

  featured = computed(() => this.articles.filter((a) => a.featured));

  latest = computed(() => {
    const cat = this.selected();
    return this.articles.filter((a) => !cat || a.category === cat);
  });
}
