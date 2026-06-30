import { Component, HostListener, signal } from '@angular/core';

type Stage = 'hidden' | 'prompt' | 'revealed';

interface Card {
  name: string;
  meaning: string;
}

/**
 * Pop-up "Card of the Day" cu efect de exit-intent:
 * apare o singura data, cand utilizatorul misca mouse-ul spre marginea de sus
 * (semn ca vrea sa inchida tab-ul). Click pe carte => se intoarce si se dezvaluie.
 */
@Component({
  selector: 'app-tarot-modal',
  templateUrl: './tarot-modal.html',
})
export class TarotModal {
  stage = signal<Stage>('hidden');
  card = signal<Card | null>(null);

  private alreadyShown = false;

  private deck: Card[] = [
    { name: 'The Star', meaning: 'Hope, inspiration and renewed faith in the future.' },
    { name: 'The Sun', meaning: 'Joy, success and a burst of positive energy.' },
    { name: 'The Moon', meaning: 'Intuition, dreams and hidden truths coming to light.' },
    { name: 'The Magician', meaning: 'Skill, focus and the power to make things happen.' },
    { name: 'Judgement', meaning: 'Reflection, awakening and an important inner call.' },
    { name: 'The World', meaning: 'Completion, achievement and a sense of wholeness.' },
  ];

  // Cand mouse-ul iese prin partea de sus a ferestrei -> arata pop-up-ul o data.
  @HostListener('document:mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent): void {
    if (this.alreadyShown || event.clientY > 0) return;
    this.alreadyShown = true;
    this.stage.set('prompt');
  }

  reveal(): void {
    const i = Math.floor(Math.random() * this.deck.length);
    this.card.set(this.deck[i]);
    this.stage.set('revealed');
  }

  close(): void {
    this.stage.set('hidden');
  }
}
