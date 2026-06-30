import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.html',
})
export class Privacy {
  intro = 'This Privacy Policy explains how ASTRA.app collects, uses and protects your personal data in compliance with the GDPR and other applicable data protection laws.';

  // Sectiuni generice (placeholder) — inlocuieste cu textul tau legal real.
  sections = [
    { heading: '1. Data Controller',
      paragraphs: [
        'The data controller is the company operating ASTRA.app. (Add your company name, address and contact email here.)',
        'No Data Protection Officer has been appointed. For data protection inquiries, contact us directly.',
      ] },
    { heading: '2. What data we collect',
      paragraphs: [
        'We collect the data you provide (such as name, email and birth date) and basic technical data (such as cookies and usage statistics).',
      ] },
    { heading: '3. How we use your data',
      paragraphs: [
        'Your birth date is used solely to compute your map. Contact details are used to deliver reports and, with your consent, the newsletter.',
      ] },
    { heading: '4. Your rights',
      paragraphs: [
        'You have the right to access, rectify, delete, restrict processing of, and object to the processing of your personal data at any time.',
      ] },
    { heading: '5. Cookies',
      paragraphs: [
        'We use essential cookies for the site to function, and optional cookies (analytics, functional, marketing) only with your consent.',
      ] },
    { heading: '6. Contact',
      paragraphs: [
        'For any privacy-related question, please reach out through the contact page.',
      ] },
  ];
}
