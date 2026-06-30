import { Component } from '@angular/core';

import { LegalLayout, LegalSection } from '../../sections/legal-layout/legal-layout';

/**
 * Paginile legale, toate folosind acelasi layout reutilizabil.
 * Continutul e generic (placeholder) — inlocuieste-l cu textul tau legal real.
 */

@Component({
  selector: 'app-cookie-policy',
  imports: [LegalLayout],
  template: `<app-legal-layout [title]="'Cookie Policy'" [intro]="intro" [sections]="sections" />`,
})
export class CookiePolicy {
  intro = 'This Cookie Policy explains what cookies are, how ASTRA.app uses them, and how you can manage your preferences.';
  sections: LegalSection[] = [
    { heading: '1. What are cookies?', paragraphs: [
      'Cookies are small text files stored on your device when you visit a website. They let the site remember your preferences and actions over time.',
      'Cookies do not contain programs or malware. They are widely used for proper functionality, content personalization and traffic analysis.' ] },
    { heading: '2. Types of cookies we use', paragraphs: [
      'Essential (required): necessary for the site to function — security, session management and accessibility. They cannot be disabled.',
      'Analytics: help us understand how visitors use the site. Functional: remember preferences like theme or language. Marketing: used by partners to show relevant ads.' ] },
    { heading: '3. Managing cookies', paragraphs: [
      'You can accept, customize or reject optional cookies via our banner, and change your choice at any time in your browser settings.' ] },
    { heading: '4. Contact', paragraphs: [
      'For any cookie-related question, please reach out through the contact page.' ] },
  ];
}

@Component({
  selector: 'app-terms-of-service',
  imports: [LegalLayout],
  template: `<app-legal-layout [title]="'Terms of Service'" [intro]="intro" [sections]="sections" />`,
})
export class TermsOfService {
  intro = 'These Terms of Service govern your use of ASTRA.app and all related services. Please read them carefully.';
  sections: LegalSection[] = [
    { heading: '1. Acceptance of terms', paragraphs: [
      'By accessing or using the service, you agree to be bound by these Terms. You must be at least 18 years old to use the service.' ] },
    { heading: '2. Provider information', paragraphs: [
      'The service is operated by the company behind ASTRA.app. (Add your provider details here.)' ] },
    { heading: '3. Use of the service', paragraphs: [
      'You agree to use the service lawfully and not to misuse, disrupt or attempt to gain unauthorized access to any part of it.' ] },
    { heading: '4. Payments', paragraphs: [
      'Paid plans are billed as described on the pricing page. Prices and features may change with notice.' ] },
    { heading: '5. Changes', paragraphs: [
      'We may update these Terms from time to time. Continued use of the service constitutes acceptance of the updated Terms.' ] },
    { heading: '6. Contact', paragraphs: [
      'For questions about these Terms, please reach out through the contact page.' ] },
  ];
}

@Component({
  selector: 'app-legal-disclaimer',
  imports: [LegalLayout],
  template: `<app-legal-layout [title]="'Legal Disclaimer'" [intro]="intro" [sections]="sections" />`,
})
export class LegalDisclaimer {
  intro = 'Please read this Legal Disclaimer carefully before using ASTRA.app.';
  sections: LegalSection[] = [
    { heading: '1. Entertainment purposes only', paragraphs: [
      'All content, analyses and reports — including map calculations, Human Design reports, horoscopes and tarot readings — are provided strictly for entertainment and informational purposes only.',
      'These services are based on symbolic systems of numerology and astrology. They are not scientifically validated, and no claims are made regarding their accuracy or reliability.' ] },
    { heading: '2. Not professional advice', paragraphs: [
      'Nothing on this website constitutes medical, legal, financial or psychological advice. Always consult a qualified professional for such matters.' ] },
    { heading: '3. No guarantees', paragraphs: [
      'We make no guarantees about outcomes. Decisions you make based on the content are your own responsibility.' ] },
    { heading: '4. Limitation of liability', paragraphs: [
      'To the extent permitted by law, we are not liable for any damages arising from the use of the service.' ] },
  ];
}
