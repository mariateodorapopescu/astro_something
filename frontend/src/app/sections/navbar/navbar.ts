import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
})
export class Navbar {
  protected theme = inject(ThemeService);

  // Controleaza meniurile derulante (care e deschis).
  menuOpen = signal<'calc' | 'discover' | null>(null);

  toggle(menu: 'calc' | 'discover'): void {
    this.menuOpen.set(this.menuOpen() === menu ? null : menu);
  }

  // Paginile de calcul, afisate in meniul "Calculate".
  calcPages = [
    { path: '/', label: 'Individual Matrix', icon: '👤' },
    { path: '/partnership-matrix', label: 'Partnership Matrix', icon: '💞' },
    { path: '/child-matrix', label: 'Child Matrix', icon: '🧒' },
    { path: '/human-design', label: 'Human Design', icon: '🧬' },
  ];

  // Paginile din meniul "Discover".
  discoverPages = [
    { path: '/horoscope', label: 'Daily Horoscope', icon: '🔮' },
    { path: '/ascendant-calculator', label: 'Ascendant Calculator', icon: '↑' },
    { path: '/tarot', label: 'Tarot Online', icon: '🎴' },
    { path: '/knowledge', label: 'Knowledge Center', icon: '📚' },
    { path: '/blog', label: 'Blog', icon: '📰' },
  ];
}
