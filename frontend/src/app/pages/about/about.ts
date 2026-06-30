import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
})
export class About {
  mission = [
    'ASTRA was born from a passion for numerology and the belief that every person has a unique potential encoded in their birth date. Our mission is to make the cosmic map accessible to everyone — in an approachable form, clearly explained, and for free.',
    'We believe that self-knowledge is the key to conscious living. That is why we create tools that help you understand your talents, karmic challenges, relationships and life path based on proven methods.',
  ];

  values = [
    { icon: '🎯', title: 'Clarity', text: 'Complex ideas explained in a simple, friendly way.' },
    { icon: '🔒', title: 'Privacy', text: 'Your data stays yours — secure and never sold.' },
    { icon: '💜', title: 'Care', text: 'Built with attention to detail and respect for our users.' },
  ];
}
