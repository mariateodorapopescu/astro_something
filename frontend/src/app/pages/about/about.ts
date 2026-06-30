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

  // "What do we offer?" — uneltele noastre.
  offers = [
    { icon: '⭐', title: 'Cosmic Map Calculator', gradient: 'from-fuchsia-500 to-pink-500',
      text: 'Free online calculator. Compute your map in seconds and discover talents, destiny and life path.' },
    { icon: '❤️', title: 'Partnership Matrix', gradient: 'from-rose-400 to-red-500',
      text: 'Check the energy compatibility between two people: shared karma, dynamics and potential.' },
    { icon: '🧒', title: 'Child Matrix', gradient: 'from-violet-500 to-indigo-600',
      text: "Discover your child's talents and developmental potential, with practical parenting tips." },
    { icon: '🧬', title: 'Human Design', gradient: 'from-teal-400 to-emerald-500',
      text: 'Calculate your Human Design for free: energy type, strategy and authority from your birth data.' },
  ];

  method = [
    'Our calculators are based on a numerological system that interprets birth dates through arcana and numerological vibrations. Each position corresponds to an energy, talent or challenge in a given area of life.',
    'We transformed these calculations into a modern, intuitive online experience — accessible to everyone, with clear explanations instead of abstract jargon.',
  ];

  // "Our Values".
  values = [
    { icon: '🔓', title: 'Accessibility', gradient: 'from-emerald-400 to-green-500',
      text: 'A free preview for everyone. We believe self-knowledge should not be a luxury.' },
    { icon: '🛡️', title: 'Security', gradient: 'from-sky-400 to-blue-500',
      text: 'Data encryption and GDPR compliance. Your birth date is used solely for calculations.' },
    { icon: '🌐', title: 'Multi-language', gradient: 'from-violet-500 to-fuchsia-500',
      text: 'All descriptions, analyses and reports — in clear, accessible language.' },
  ];

  socials = [
    { label: 'Facebook', icon: '📘', tint: 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300' },
    { label: 'Instagram', icon: '📷', tint: 'bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300' },
    { label: 'TikTok', icon: '🎵', tint: 'bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-300' },
  ];
}
