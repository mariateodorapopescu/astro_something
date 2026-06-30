import { Component } from '@angular/core';

import { Testimonials } from '../../sections/testimonials/testimonials';
import { Features, FeatureCard } from '../../sections/features/features';

interface Plan {
  title: string;
  subtitle: string;
  price: number;
  oldPrice: number | null;
  badge: string | null;
  icon: string;
  features: string[];
  cta?: string;
}

@Component({
  selector: 'app-pricing-page',
  imports: [Testimonials, Features],
  templateUrl: './pricing-page.html',
})
export class PricingPage {
  // Tab-urile sunt navigare rapida: dau scroll la sectiunea respectiva.
  tabs = [
    { id: 'premium', label: 'Premium', icon: '👑' },
    { id: 'matrix', label: 'Destiny Matrix', icon: '⚙️' },
    { id: 'human', label: 'Human Design', icon: '🧬' },
    { id: 'mini', label: 'Mini-Reports', icon: '🧩' },
  ];

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  stats = [
    { value: '10,000+', label: 'Calculated Matrices' },
    { value: '2,500+', label: 'Generated PDF Reports' },
    { value: '★ 4.9/5', label: 'Customer Rating' },
    { value: '100+', label: 'Pages in Every Report' },
  ];

  premiumFeatures = [
    'Full individual matrix (online)', '3 profiles: You, partner, child',
    'Human Design — full access', 'Daily energy + numerological horoscope',
    'Matrix Course (coming soon)', 'Human Design Course (coming soon)',
    'New features and updates', '🔮 Tarot — 10 interpretation credits / month',
    '📊 Weekly and monthly reports', '🗓️ Annual report',
    '👨‍👩‍👧 Clan Management — up to 3 profiles', '🧘 Chakra & transit monitoring',
    '🎁 -50% discount on additional PDF reports',
  ];

  comparison = [
    { feature: 'Main purpose', oneTime: 'In-depth understanding of your destiny map', sub: 'Daily energy navigation' },
    { feature: 'Number of profiles', oneTime: 'Only 1 person', sub: 'Up to 3 profiles (You + Partner + Child)' },
    { feature: 'Recurring reports', oneTime: '— None', sub: 'Weekly, monthly and yearly' },
    { feature: 'Tarot', oneTime: 'Basic access', sub: 'Full interaction (credit packs included)' },
    { feature: 'Data access', oneTime: 'PDF (100+ pages) + online preview', sub: 'Interactive dashboard for 3 people' },
    { feature: 'Daily transits', oneTime: '— None', sub: 'Email and dashboard daily' },
    { feature: 'Discounts', oneTime: '— None', sub: '-50% on every additional full PDF' },
  ];

  subCards: FeatureCard[] = [
    { icon: '📅', title: 'Weekly Report', gradient: 'from-violet-500 to-indigo-500',
      text: 'Every Monday, a new analysis combining Human Design transits, Matrix and current Tarot cards.' },
    { icon: '👨‍👩‍👧', title: 'Clan Management', gradient: 'from-rose-400 to-pink-500',
      text: "Track the energy of loved ones — switch between your child's or partner's Matrix." },
    { icon: '⚙️', title: 'Daily Spiritual Assistant', gradient: 'from-teal-400 to-emerald-500',
      text: "Morning notifications about the day's energy, moon phases and numerological vibration." },
    { icon: '🔮', title: 'Online Tarot', gradient: 'from-amber-400 to-orange-500',
      text: 'A pool of credits for asking questions about finances, love and career based on your profile.' },
    { icon: '❤️', title: 'Chakra Monitoring', gradient: 'from-rose-400 to-red-500',
      text: 'Dynamic notifications about energy center overloads depending on planetary movements.' },
    { icon: '📈', title: 'Monthly & Annual Report', gradient: 'from-sky-400 to-blue-500',
      text: 'Energy forecast for the full month and year — plan ahead and use the best windows.' },
  ];

  benefits = [
    { icon: '⏱️', title: 'Time savings', text: 'No need to analyze transits — you get a ready-made plan every week.' },
    { icon: '✨', title: 'Uniqueness (USP)', text: 'The only solution combining Matrix, Human Design and Tarot in one AI interpretation.' },
    { icon: '🧭', title: 'Real support in decisions', text: 'With Authority analysis and monthly vibration, you know when to act and when to let go.' },
    { icon: '🐷', title: 'Economy', text: 'Access for 3 people and 50% off PDFs — the subscription pays for itself with the first report.' },
    { icon: '🌱', title: 'Continuous growth', text: 'The report archive lets you track how you evolve across recurring planetary cycles.' },
  ];

  // Planuri Destiny Matrix (one-time).
  matrixPlans: Plan[] = [
    { title: 'Partnership Matrix', subtitle: 'For couples', price: 12, oldPrice: null, badge: null, icon: '💞',
      features: ['Compatibility analysis of two people', 'Partnership PDF report (50 pages)', 'Strengths and challenges'] },
    { title: 'Destiny Matrix — Full', subtitle: 'Full Destiny Matrix analysis', price: 20, oldPrice: null, badge: 'BESTSELLER', icon: '⚙️',
      features: ['Full analysis of 22 energies', 'PDF report (100+ pages)', 'Access to interactive matrix', 'Email with downloadable file'] },
    { title: "Child's Matrix", subtitle: "Your child's potential", price: 20, oldPrice: null, badge: null, icon: '🧒',
      features: ["Child's potential analysis", 'Parenting tips', 'PDF report (100 pages)'] },
  ];

  // Planuri Human Design (verde turcoaz).
  humanPlans: Plan[] = [
    { title: 'Human Design — Premium Report', subtitle: 'In-depth analysis', price: 35, oldPrice: null, badge: null, icon: '👑',
      features: ['Everything from Basic', 'Centers, channels, gates', 'Detailed report 50+ pages'], cta: 'Calculate & Buy' },
    { title: 'Human Design + Destiny Matrix — Bundle', subtitle: 'Two reports in one', price: 43, oldPrice: 55, badge: 'SAVINGS BUNDLE', icon: '🧩',
      features: ['Human Design Premium', 'Full Matrix Destiny', 'Both reports in one price'], cta: 'Calculate & Buy' },
  ];

  // Mini-rapoarte (cate o singura sectiune din matrice), toate 4 USD.
  miniReports: Plan[] = [
    { title: 'Soul & Life Mission', subtitle: '', price: 4, oldPrice: null, badge: null, icon: '🧩',
      features: ['Single matrix section', 'Instant online access'], cta: 'Buy Now' },
    { title: 'Life Cycles & Heritage', subtitle: '', price: 4, oldPrice: null, badge: null, icon: '🧩',
      features: ['Single matrix section', 'Instant online access'], cta: 'Buy Now' },
    { title: 'Karma & Spirituality', subtitle: '', price: 4, oldPrice: null, badge: null, icon: '🧩',
      features: ['Single matrix section', 'Instant online access'], cta: 'Buy Now' },
    { title: 'Finances & Talents', subtitle: '', price: 4, oldPrice: null, badge: null, icon: '🧩',
      features: ['Single matrix section', 'Instant online access'], cta: 'Buy Now' },
    { title: 'Relationships & Love', subtitle: '', price: 4, oldPrice: null, badge: null, icon: '🧩',
      features: ['Single matrix section', 'Instant online access'], cta: 'Buy Now' },
  ];

  // "Is this for you?" — doua coloane.
  forYou = [
    'You feel stuck and wonder why certain patterns repeat',
    'You want to understand your natural talents and life purpose',
    'You are curious about the deeper meaning behind your birth date',
    'You value self-knowledge and personal growth',
    'You want practical insights, not vague predictions',
  ];
  notForYou = [
    'You expect magic solutions without any self-reflection',
    'You are not open to exploring your inner patterns',
    'You want a quick horoscope, not a deep analysis',
  ];

  // "Why choose us?" — carduri.
  whyCards: FeatureCard[] = [
    { icon: '⚡', title: 'Instant delivery', gradient: 'from-violet-500 to-indigo-500',
      text: 'PDF reports ready in minutes. E-books available immediately after purchase.' },
    { icon: '🛡️', title: 'Secure payment', gradient: 'from-teal-400 to-emerald-500',
      text: 'We support Stripe and major payment processors. Your data is fully protected.' },
    { icon: '🎧', title: 'Support', gradient: 'from-rose-400 to-pink-500',
      text: 'Have questions? Our team will answer every question.' },
    { icon: '♾️', title: 'Lifetime access', gradient: 'from-amber-400 to-orange-500',
      text: 'Purchased reports and e-books are yours — no time limits.' },
    { icon: '✅', title: 'Delivery guarantee', gradient: 'from-emerald-400 to-green-500',
      text: "Report didn't arrive or something didn't work? We'll fix it immediately or refund you." },
  ];

  // "Real benefits you'll feel in your life" — carduri cu tag + doua puncte.
  realBenefits = [
    { icon: '🧠', title: 'Understanding your patterns', tag: 'Inner peace', tagColor: 'bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300',
      points: [
        { label: 'No more self-blame', text: "your traits aren't flaws, but your unique energetic design." },
        { label: 'Accepting emotions', text: 'learn to fully experience emotions instead of fighting them.' },
      ] },
    { icon: '❤️', title: 'Better relationships with others', tag: 'Harmony', tagColor: 'bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300',
      points: [
        { label: 'User manual for loved ones', text: 'understand why your partner or child needs a different approach.' },
        { label: 'Avoiding conflicts', text: 'learn on which days your energy is explosive and avoid arguments.' },
      ] },
    { icon: '🚀', title: 'Effectiveness in action', tag: 'Money & Career', tagColor: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',
      points: [
        { label: 'Choosing the perfect moment', text: 'act when your energy supports you instead of forcing it.' },
        { label: 'Natural strengths', text: 'lean into your innate talents for faster results.' },
      ] },
    { icon: '🧭', title: 'Agency and self-confidence', tag: 'Control', tagColor: 'bg-teal-100 text-teal-700 dark:bg-teal-500/15 dark:text-teal-300',
      points: [
        { label: 'Your own compass', text: 'trust your inner authority instead of outside opinions.' },
        { label: 'Calm certainty', text: 'make decisions with a clear sense of what is right for you.' },
      ] },
  ];
}
