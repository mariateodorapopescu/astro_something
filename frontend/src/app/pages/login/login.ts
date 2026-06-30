import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
})
export class Login {
  private auth = inject(AuthService);
  private router = inject(Router);

  email = signal('');
  password = signal('');
  remember = signal(false);
  loading = signal(false);
  message = signal<string | null>(null);

  submit(): void {
    this.message.set(null);
    if (!this.email() || !this.password()) {
      this.message.set('Completeaza email-ul si parola.');
      return;
    }
    this.loading.set(true);
    this.auth.login(this.email(), this.password()).subscribe({
      next: () => this.router.navigateByUrl('/'),
      error: (err) => {
        this.message.set(err?.status === 401 ? 'Email sau parola incorecte.' : 'Nu pot contacta backend-ul.');
        this.loading.set(false);
      },
    });
  }
}
