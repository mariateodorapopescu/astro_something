import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.html',
})
export class Pricing {
  plans = [
    {
      title: 'Individual Map', subtitle: 'Know yourself', price: 19, oldPrice: null,
      badge: null, icon: '👤',
      features: ['Full personal analysis', 'PDF report 100+ pages', 'Map visualization', 'Lifetime access'],
    },
    {
      title: 'Partnership Map', subtitle: 'For couples', price: 11, oldPrice: null,
      badge: null, icon: '💞',
      features: ['Compatibility analysis', 'PDF report 50 pages', 'Shared goals & challenges', 'Requires 2 birth dates'],
    },
    {
      title: 'Child Map', subtitle: 'For children', price: 19, oldPrice: null,
      badge: null, icon: '🧒',
      features: ["Child's talents", 'Parenting guidance', 'Development potential', 'PDF report'],
    },
    {
      title: 'Family Package', subtitle: 'Whole family', price: 40, oldPrice: 51,
      badge: 'PACKAGE', icon: '👨‍👩‍👧',
      features: ['3 maps (You + Partner + Child)', 'Family relationship analysis', 'All PDF reports', 'You save 11 USD'],
    },
  ];
}
