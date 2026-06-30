import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { ARTICLES, ARTICLE_BODY } from './blog-data';

@Component({
  selector: 'app-blog-article',
  imports: [RouterLink],
  templateUrl: './blog-article.html',
})
export class BlogArticle {
  private route = inject(ActivatedRoute);

  body = ARTICLE_BODY;
  article = signal(ARTICLES[0]);

  constructor() {
    // Cand se schimba slug-ul din URL, gasim articolul corespunzator.
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
