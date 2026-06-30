import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ARTICLES } from './blog-data';

@Component({
  selector: 'app-blog',
  imports: [RouterLink],
  templateUrl: './blog.html',
})
export class Blog {
  articles = ARTICLES;

  // Categoria selectata (null = toate).
  selected = signal<string | null>(null);
  // Pagina curenta (pentru paginare).
  page = signal(1);
  pageSize = 6;

  select(cat: string | null): void {
    this.selected.set(cat);
    this.page.set(1); // resetam paginarea cand schimbam categoria
  }

  setPage(p: number): void {
    this.page.set(p);
  }

  // Categoriile cu numar de articole.
  categories = computed(() => {
    const counts = new Map<string, number>();
    for (const a of this.articles) counts.set(a.category, (counts.get(a.category) ?? 0) + 1);
    return [...counts.entries()].map(([name, count]) => ({ name, count }));
  });

  featured = computed(() => this.articles.filter((a) => a.featured));

  // Toate articolele filtrate dupa categorie.
  private filtered = computed(() => {
    const cat = this.selected();
    return this.articles.filter((a) => !cat || a.category === cat);
  });

  totalPages = computed(() => Math.max(1, Math.ceil(this.filtered().length / this.pageSize)));

  // Articolele de pe pagina curenta.
  latest = computed(() => {
    const start = (this.page() - 1) * this.pageSize;
    return this.filtered().slice(start, start + this.pageSize);
  });

  // Pentru textul "Showing X to Y of Z".
  rangeStart = computed(() => this.filtered().length === 0 ? 0 : (this.page() - 1) * this.pageSize + 1);
  rangeEnd = computed(() => Math.min(this.page() * this.pageSize, this.filtered().length));
  total = computed(() => this.filtered().length);
  pages = computed(() => Array.from({ length: this.totalPages() }, (_, i) => i + 1));
}
