import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  imports: [FormsModule],
  templateUrl: './hero.html',
})
export class Hero {
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

  // Mesajul afisat dupa apasarea butonului (deocamdata local, fara backend).
  result = signal<string | null>(null);

  calculate(): void {
    if (!this.name() || !this.birthDate()) {
      this.result.set('Completeaza numele si data nasterii.');
      return;
    }
    // TODO: aici vom apela backend-ul (/api/...) ca sa calculam matricea reala.
    this.result.set(`Salut, ${this.name()}! Harta ta se calculeaza pe baza datei ${this.birthDate()}.`);
  }
}
