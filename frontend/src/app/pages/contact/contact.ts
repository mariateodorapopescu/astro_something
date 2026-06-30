import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
})
export class Contact {
  name = signal('');
  email = signal('');
  category = signal('');
  subject = signal('');
  message = signal('');
  sent = signal(false);

  categories = ['General question', 'Billing', 'Technical issue', 'Feedback', 'Other'];

  send(): void {
    if (!this.name() || !this.email() || !this.subject() || !this.message()) return;
    // TODO: trimite mesajul catre backend (/api/contact).
    this.sent.set(true);
  }
}
