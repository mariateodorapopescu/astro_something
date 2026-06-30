import { Component, OnInit, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import { AuthService, AuthUser } from '../../auth.service';
import { ApiService, CalculationItem } from '../../api.service';

/**
 * Pagina de cont. La initializare cere /api/me (ruta protejata) ca sa
 * confirme ca token-ul e valid si sa arate datele venite direct de la
 * backend. Daca token-ul e expirat/invalid (401), face logout si trimite
 * la login.
 */
@Component({
  selector: 'app-account',
  imports: [RouterLink, DatePipe],
  templateUrl: './account.html',
})
export class Account implements OnInit {
  private auth = inject(AuthService);
  private api = inject(ApiService);
  private router = inject(Router);

  user = signal<AuthUser | null>(this.auth.user());
  loading = signal(true);
  error = signal<string | null>(null);

  // Istoricul de calcule al userului.
  history = signal<CalculationItem[]>([]);
  historyLoading = signal(true);

  ngOnInit(): void {
    this.auth.me().subscribe({
      next: (u) => {
        this.user.set(u);
        this.loading.set(false);
      },
      error: (err) => {
        if (err?.status === 401) {
          this.auth.logout();
          this.router.navigateByUrl('/login');
          return;
        }
        this.error.set('Nu pot incarca datele contului.');
        this.loading.set(false);
      },
    });

    this.api.myCalculations().subscribe({
      next: (items) => {
        this.history.set(items);
        this.historyLoading.set(false);
      },
      error: () => this.historyLoading.set(false),
    });
  }

  // Initialele pentru avatar (ex. "Maria Popescu" -> "MP").
  initials(name: string): string {
    return name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0]!.toUpperCase())
      .join('');
  }

  logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('/');
  }
}
