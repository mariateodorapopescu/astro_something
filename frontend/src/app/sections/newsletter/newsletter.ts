import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  imports: [FormsModule],
  templateUrl: './newsletter.html',
})
export class Newsletter {
  email = signal('');
  agreed = signal(false);
  subscribed = signal(false);

  subscribe(): void {
    if (!this.email() || !this.agreed()) return;
    // TODO: aici vom trimite email-ul catre backend (/api/...).
    this.subscribed.set(true);
  }
}
