import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { ARTICLES, ARTICLE_BODY } from './blog-data';
import { Faq, FaqItem } from '../../sections/faq/faq';

@Component({
  selector: 'app-blog-article',
  imports: [RouterLink, Faq],
  templateUrl: './blog-article.html',
})
export class BlogArticle {
  private route = inject(ActivatedRoute);

  body = ARTICLE_BODY;
  article = signal(ARTICLES[0]);

  topics = ['Destiny Matrix', 'numerology', 'birth date', 'karmic numbers', 'self-knowledge'];

  faqItems: FaqItem[] = [
    { q: 'What exactly is the topic about?', a: 'A short, clear answer that addresses the most common question readers have about this article.' },
    { q: 'How do I get started?', a: 'Use the related calculator and enter your details — you get an instant result you can explore.' },
    { q: 'How is this different from regular numerology?', a: 'It combines several positions into one comprehensive picture instead of a single number.' },
  ];

  // "Read Also" — alte 3 articole (diferite de cel curent).
  related = computed(() => ARTICLES.filter((a) => a.slug !== this.article().slug).slice(0, 3));

  constructor() {
    this.route.paramMap.subscribe((pm) => {
      const slug = pm.get('slug');
      const found = ARTICLES.find((a) => a.slug === slug);
      if (found) this.article.set(found);
    });
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
