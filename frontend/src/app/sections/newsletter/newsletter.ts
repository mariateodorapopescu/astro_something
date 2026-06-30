import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ApiService } from '../../api.service';

@Component({
  selector: 'app-newsletter',
  imports: [FormsModule],
  templateUrl: './newsletter.html',
})
export class Newsletter {
  private api = inject(ApiService);

  email = signal('');
  agreed = signal(false);
  subscribed = signal(false);
  error = signal<string | null>(null);

  subscribe(): void {
    this.error.set(null);
    if (!this.email() || !this.agreed()) return;
    this.api.subscribe(this.email()).subscribe({
      next: () => this.subscribed.set(true),
      error: () => this.error.set('Nu pot contacta backend-ul. Pornește serverul Python (uvicorn).'),
    });
  }
}
