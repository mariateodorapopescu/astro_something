import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
})
export class Login {
  email = signal('');
  password = signal('');
  remember = signal(false);
  message = signal<string | null>(null);

  submit(): void {
    if (!this.email() || !this.password()) {
      this.message.set('Completeaza email-ul si parola.');
      return;
    }
    // TODO: autentificare reala prin backend (/api/login).
    this.message.set('Autentificare demonstrativa — backend-ul nu e conectat inca.');
  }
}
