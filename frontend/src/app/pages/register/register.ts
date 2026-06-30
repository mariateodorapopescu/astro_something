import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
})
export class Register {
  private auth = inject(AuthService);
  private router = inject(Router);

  name = signal('');
  email = signal('');
  password = signal('');
  confirm = signal('');
  loading = signal(false);
  message = signal<string | null>(null);

  submit(): void {
    this.message.set(null);
    if (!this.name() || !this.email() || !this.password()) {
      this.message.set('Completeaza toate campurile.');
      return;
    }
    if (this.password().length < 8) {
      this.message.set('Parola trebuie sa aiba minim 8 caractere.');
      return;
    }
    if (this.password() !== this.confirm()) {
      this.message.set('Parolele nu coincid.');
      return;
    }
    this.loading.set(true);
    this.auth.register(this.name(), this.email(), this.password()).subscribe({
      next: () => this.router.navigateByUrl('/'),
      error: (err) => {
        this.message.set(err?.status === 409 ? 'Exista deja un cont cu acest email.' : 'Nu pot contacta backend-ul.');
        this.loading.set(false);
      },
    });
  }

  benefits = [
    { icon: '🔮', title: '15 analysis sections', text: 'Full map analysis — personality, talents, karma, relationships.' },
    { icon: '👥', title: 'Profiles for loved ones', text: 'Analyze maps for family, friends and partners.' },
    { icon: '💞', title: 'Partnership Matrix', text: 'Check compatibility and learn to understand your partner.' },
    { icon: '⚡', title: 'Daily Energy', text: 'Daily energy and horoscope based on your map.' },
  ];
}
