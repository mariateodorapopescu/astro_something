import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

/**
 * Layout reutilizabil pentru paginile legale (Privacy, Cookie, Terms, Disclaimer).
 * Primeste titlul, intro-ul si sectiunile prin input-uri.
 */
@Component({
  selector: 'app-legal-layout',
  imports: [RouterLink],
  templateUrl: './legal-layout.html',
})
export class LegalLayout {
  title = input('');
  intro = input('');
  sections = input<LegalSection[]>([]);
}
