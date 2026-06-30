import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.html',
})
export class Testimonials {
  reviews = [
    { initial: 'C', color: 'from-fuchsia-500 to-pink-500', name: 'Caroline M.', plan: 'Individual Map',
      text: 'I was skeptical, but the report was spot on. It described my traits and challenges so accurately it surprised me.' },
    { initial: 'A', color: 'from-sky-400 to-blue-500', name: 'Anna W.', plan: 'Partnership Map',
      text: 'I ordered a report for me and my husband. The partnership map opened our eyes and helped us understand each other better.' },
    { initial: 'M', color: 'from-emerald-400 to-green-500', name: 'Michael T.', plan: 'Individual Map',
      text: 'The PDF report is detailed and well written. The life cycles section surprised me the most.' },
  ];
}
