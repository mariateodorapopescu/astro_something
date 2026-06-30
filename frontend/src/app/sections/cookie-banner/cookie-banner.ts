import { Component, signal } from '@angular/core';

/**
 * Banner de consimtamant pentru cookies. Apare jos pana cand utilizatorul
 * alege ceva; alegerea se tine minte in localStorage.
 */
@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.html',
})
export class CookieBanner {
  visible = signal(false);
  expanded = signal(false);

  categories = [
    { key: 'analytics', label: 'Analytics', text: 'Help us understand how visitors use the site.', on: signal(false) },
    { key: 'functional', label: 'Functional', text: 'Enable extra features like theme or language.', on: signal(true) },
    { key: 'marketing', label: 'Marketing', text: 'Used by partners to show relevant ads.', on: signal(false) },
  ];

  constructor() {
    if (!localStorage.getItem('cookie-consent')) this.visible.set(true);
  }

  private save(choice: string): void {
    localStorage.setItem('cookie-consent', choice);
    this.visible.set(false);
  }

  acceptAll(): void { this.save('all'); }
  onlyEssential(): void { this.save('essential'); }
  savePreferences(): void { this.save('custom'); }
}
