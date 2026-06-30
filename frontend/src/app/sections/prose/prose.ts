import { Component, input } from '@angular/core';

/**
 * Sectiune simpla cu titlu gradient + cateva paragrafe de text.
 * Folosita pentru blocurile "What is ...?".
 */
@Component({
  selector: 'app-prose',
  templateUrl: './prose.html',
})
export class Prose {
  title = input('');
  paragraphs = input<string[]>([]);
}
