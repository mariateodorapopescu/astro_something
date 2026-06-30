import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
})
export class Register {
  name = signal('');
  email = signal('');
  password = signal('');
  confirm = signal('');
  message = signal<string | null>(null);

  submit(): void {
    if (!this.name() || !this.email() || !this.password()) {
      this.message.set('Completeaza toate campurile.');
      return;
    }
    if (this.password() !== this.confirm()) {
      this.message.set('Parolele nu coincid.');
      return;
    }
    // TODO: inregistrare reala prin backend (/api/register).
    this.message.set('Inregistrare demonstrativa — backend-ul nu e conectat inca.');
  }

  benefits = [
    { icon: '🔮', title: '15 analysis sections', text: 'Full map analysis — personality, talents, karma, relationships.' },
    { icon: '👥', title: 'Profiles for loved ones', text: 'Analyze maps for family, friends and partners.' },
    { icon: '💞', title: 'Partnership Matrix', text: 'Check compatibility and learn to understand your partner.' },
    { icon: '⚡', title: 'Daily Energy', text: 'Daily energy and horoscope based on your map.' },
  ];
}
