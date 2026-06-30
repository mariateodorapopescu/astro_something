import { Injectable, signal } from '@angular/core';

type Theme = 'light' | 'dark';

/**
 * Gestioneaza tema (luminoasa / intunecata).
 * Pune sau scoate clasa ".dark" de pe <html>, iar Tailwind isi face restul.
 * Tine minte alegerea in localStorage, deci ramane si dupa refresh.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  // "signal" = o valoare reactiva: cand se schimba, interfata se actualizeaza singura.
  readonly theme = signal<Theme>('dark');

  constructor() {
    const saved = (localStorage.getItem('theme') as Theme | null) ?? 'dark';
    this.set(saved);
  }

  toggle(): void {
    this.set(this.theme() === 'dark' ? 'light' : 'dark');
  }

  private set(theme: Theme): void {
    this.theme.set(theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }
}
