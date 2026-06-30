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

  // Controleaza meniul "Calculate" (deschis / inchis).
  menuOpen = signal(false);

  // Paginile de calcul, afisate in meniul derulant.
  calcPages = [
    { path: '/', label: 'Individual Matrix', icon: '👤' },
    { path: '/partnership-matrix', label: 'Partnership Matrix', icon: '💞' },
    { path: '/child-matrix', label: 'Child Matrix', icon: '🧒' },
  ];
}
