import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Faq, FaqItem } from '../../sections/faq/faq';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, Faq],
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

  faqItems: FaqItem[] = [
    { q: 'How can I track my ticket?', a: 'After submitting, you receive an email with a tracking link. Logged-in users can also see their tickets in the dashboard.' },
    { q: 'How quickly will I get a response?', a: 'We try to respond within 24 hours. On business days the response time is usually shorter.' },
    { q: 'I have a payment issue — what should I do?', a: 'Select the "Billing" category and describe the issue. Include your order number if you have one.' },
    { q: 'Do I need to be logged in?', a: 'No — you can submit a ticket as a guest. Logged-in users get full access to their ticket history.' },
  ];

  send(): void {
    if (!this.name() || !this.email() || !this.subject() || !this.message()) return;
    // TODO: trimite mesajul catre backend (/api/contact).
    this.sent.set(true);
  }
}
