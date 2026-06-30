import { Component, OnInit, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import { AuthService, AuthUser } from '../../auth.service';
import { ApiService, HistoryItem } from '../../api.service';

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

  // Istoricul de calcule al userului (toate tipurile).
  history = signal<HistoryItem[]>([]);
  historyLoading = signal(true);
  deletingId = signal<string | null>(null);

  // Eticheta + iconita pentru fiecare tip de calcul.
  private readonly kindMeta: Record<HistoryItem['kind'], { label: string; icon: string }> = {
    individual: { label: 'Individual', icon: '👤' },
    partnership: { label: 'Partnership', icon: '💞' },
    human_design: { label: 'Human Design', icon: '🧬' },
    ascendant: { label: 'Ascendant', icon: '↑' },
  };

  kindLabel(kind: HistoryItem['kind']): string {
    return this.kindMeta[kind].label;
  }

  kindIcon(kind: HistoryItem['kind']): string {
    return this.kindMeta[kind].icon;
  }

  // Cheie unica pentru @for: id-ul se repeta intre tipuri, deci combinam.
  rowKey(c: HistoryItem): string {
    return `${c.kind}-${c.id}`;
  }

  remove(c: HistoryItem): void {
    const key = this.rowKey(c);
    this.deletingId.set(key);
    this.api.deleteCalculation(c.kind, c.id).subscribe({
      next: () => {
        this.history.update((list) => list.filter((x) => this.rowKey(x) !== key));
        this.deletingId.set(null);
      },
      error: () => this.deletingId.set(null),
    });
  }

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
