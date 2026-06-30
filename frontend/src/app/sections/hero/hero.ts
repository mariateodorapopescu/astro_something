import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ApiService, CalculateResult } from '../../api.service';

@Component({
  selector: 'app-hero',
  imports: [FormsModule],
  templateUrl: './hero.html',
})
export class Hero {
  private api = inject(ApiService);

  // Lista de beneficii afisata sub descriere.
  benefits = [
    { icon: '✅', label: 'Instant access' },
    { icon: '🔒', label: 'Secure payment' },
    { icon: '📄', label: 'PDF report' },
    { icon: '♾️', label: 'Lifetime access' },
  ];

  // Valorile din formular (legate cu [(ngModel)] in HTML).
  name = signal('');
  birthDate = signal('');

  // Starea calculului.
  loading = signal(false);
  error = signal<string | null>(null);
  result = signal<CalculateResult | null>(null);

  calculate(): void {
    this.error.set(null);
    this.result.set(null);

    if (!this.name() || !this.birthDate()) {
      this.error.set('Completeaza numele si data nasterii.');
      return;
    }

    this.loading.set(true);
    this.api.calculate(this.name(), this.birthDate()).subscribe({
      next: (res) => {
        this.result.set(res);
        this.loading.set(false);
      },
      error: () => {
        // Daca backend-ul nu ruleaza, aratam un mesaj prietenos.
        this.error.set('Nu pot contacta backend-ul. Pornește serverul Python (uvicorn) și încearcă din nou.');
        this.loading.set(false);
      },
    });
  }
}
