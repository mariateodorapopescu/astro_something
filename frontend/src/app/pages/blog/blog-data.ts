// Datele blogului, partajate intre lista (Blog) si pagina de articol (BlogArticle).

export interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readMin: number;
  date: string;
  gradient: string;
  emoji: string;
  featured?: boolean;
}

export const ARTICLES: Article[] = [
  { slug: 'what-is-the-matrix-of-fate', category: 'Destiny Matrix', title: 'What is the Matrix of Fate? A complete guide', emoji: '🧊',
    excerpt: 'The Matrix of Fate is an advanced numerological tool based on your birth date. Discover how to read your matrix.',
    readMin: 17, date: '06.02.2026', gradient: 'from-fuchsia-500 to-cyan-500', featured: true },
  { slug: 'numerology-in-2026', category: 'Numerology', title: 'Numerology in 2026 — how numbers influence your life', emoji: '🔢',
    excerpt: '2026 is a year of vibration 10/1 — new beginnings, leadership and courage. Discover what numerology reveals.',
    readMin: 2, date: '03.02.2026', gradient: 'from-amber-400 to-violet-500', featured: true },
  { slug: 'human-design-energetic-fingerprint', category: 'Human Design', title: 'Human Design — your energetic fingerprint', emoji: '🧬',
    excerpt: 'Human Design combines astrology, I Ching, Kabbalah and quantum physics into a unique self-discovery system.',
    readMin: 2, date: '27.01.2026', gradient: 'from-cyan-400 to-pink-500', featured: true },
  { slug: 'moon-and-mercury-transits', category: 'Astrology', title: 'Moon and Mercury transits: what they mean for you', emoji: '🌙',
    excerpt: 'Discover how the current Moon and Mercury transits can influence your life. Uncover practical advice.',
    readMin: 3, date: '29.06.2026', gradient: 'from-amber-300 to-orange-500' },
  { slug: 'mercury-retrograde-in-cancer', category: 'Astrology', title: 'Mercury retrograde in Cancer: what to expect', emoji: '☿️',
    excerpt: 'Mercury enters retrograde in Cancer, stirring up emotions and past connections...',
    readMin: 4, date: '24.06.2026', gradient: 'from-violet-500 to-orange-400' },
  { slug: 'understanding-human-design', category: 'Human Design', title: 'Understanding Human Design: energy types & life strategies', emoji: '⚡',
    excerpt: 'Dive into the world of Human Design, exploring energy types and life strategies to enhance your decisions.',
    readMin: 4, date: '22.06.2026', gradient: 'from-amber-400 to-rose-500' },
  { slug: 'your-life-path-number', category: 'Numerology', title: 'Your life-path number, explained simply', emoji: '🛤️',
    excerpt: 'Learn how to compute your life-path number and what it says about your strengths and challenges.',
    readMin: 5, date: '18.06.2026', gradient: 'from-violet-500 to-indigo-600' },
  { slug: 'self-knowledge-daily-habits', category: 'Personal growth', title: 'Turning self-knowledge into daily habits', emoji: '🌱',
    excerpt: 'Insights are only useful when applied. Practical ways to turn your map into small daily actions.',
    readMin: 6, date: '12.06.2026', gradient: 'from-emerald-400 to-teal-500' },
  { slug: 'full-moon-calendar-2026', category: 'Astrology news', title: 'Full Moon calendar for the second half of 2026', emoji: '🌕',
    excerpt: 'Mark your calendar: every full moon of the season and how to make the most of each one.',
    readMin: 3, date: '08.06.2026', gradient: 'from-slate-400 to-violet-500' },
];

// Corp generic de articol (placeholder), refolosit pe pagina de articol.
export interface Section {
  id: string;
  heading: string;
  paragraphs: string[];
}

export const ARTICLE_BODY = {
  inBrief: 'This article explains the topic in a clear, practical way — what it is, how it works, how it differs from related ideas, and how to apply it in everyday life.',
  sections: <Section[]>[
    { id: 'intro', heading: 'Introduction',
      paragraphs: [
        'This is a demo article with placeholder content. It shows how a full blog post looks: a title, an author, a hero image, a table of contents and several sections.',
        'Replace this text with your own writing — the layout stays the same.',
      ] },
    { id: 'how-it-works', heading: 'How does it work?',
      paragraphs: [
        'Here you would explain the core idea step by step, using short paragraphs and clear examples so the reader can follow along easily.',
      ] },
    { id: 'difference', heading: 'What makes it different?',
      paragraphs: [
        'A short comparison helps the reader understand where this topic fits relative to similar concepts.',
      ] },
    { id: 'how-to-read', heading: 'How to apply it',
      paragraphs: [
        'Finish with practical, actionable advice the reader can use right away.',
      ] },
  ],
};
