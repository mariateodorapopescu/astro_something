import { Component, signal } from '@angular/core';

import { Testimonials } from '../../sections/testimonials/testimonials';
import { Features, FeatureCard } from '../../sections/features/features';

type Tab = 'premium' | 'matrix' | 'human' | 'mini';

interface Plan {
  title: string;
  subtitle: string;
  price: number;
  oldPrice: number | null;
  badge: string | null;
  icon: string;
  features: string[];
}

@Component({
  selector: 'app-pricing-page',
  imports: [Testimonials, Features],
  templateUrl: './pricing-page.html',
})
export class PricingPage {
  // Tab-ul activ din pagina de preturi.
  tab = signal<Tab>('premium');

  tabs: { key: Tab; label: string; icon: string }[] = [
    { key: 'premium', label: 'Premium', icon: '👑' },
    { key: 'matrix', label: 'Destiny Matrix', icon: '⚙️' },
    { key: 'human', label: 'Human Design', icon: '🧬' },
    { key: 'mini', label: 'Mini-Reports', icon: '🧩' },
  ];

  // Statisticile din partea de sus.
  stats = [
    { value: '10,000+', label: 'Calculated Matrices' },
    { value: '2,500+', label: 'Generated PDF Reports' },
    { value: '★ 4.9/5', label: 'Customer Rating' },
    { value: '100+', label: 'Pages in Every Report' },
  ];

  // Beneficiile abonamentului Premium (doua coloane in template).
  premiumFeatures = [
    'Full individual matrix (online)', '3 profiles: You, partner, child',
    'Human Design — full access', 'Daily energy + numerological horoscope',
    'Matrix Course (coming soon)', 'Human Design Course (coming soon)',
    'New features and updates', '🔮 Tarot — 10 interpretation credits / month',
    '📊 Weekly and monthly reports', '🗓️ Annual report',
    '👨‍👩‍👧 Clan Management — up to 3 profiles', '🧘 Chakra & transit monitoring',
    '🎁 -50% discount on additional PDF reports',
  ];

  // Tabelul comparativ one-time vs abonament.
  comparison = [
    { feature: 'Main purpose', oneTime: 'In-depth understanding of your destiny map', sub: 'Daily energy navigation' },
    { feature: 'Number of profiles', oneTime: 'Only 1 person', sub: 'Up to 3 profiles (You + Partner + Child)' },
    { feature: 'Recurring reports', oneTime: '— None', sub: 'Weekly, monthly and yearly' },
    { feature: 'Tarot', oneTime: 'Basic access', sub: 'Full interaction (credit packs included)' },
    { feature: 'Data access', oneTime: 'PDF (100+ pages) + online preview', sub: 'Interactive dashboard for 3 people' },
    { feature: 'Daily transits', oneTime: '— None', sub: 'Email and dashboard daily' },
    { feature: 'Discounts', oneTime: '— None', sub: '-50% on every additional full PDF' },
  ];

  // "What you get with a subscription" — refolosim grid-ul de carduri.
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
      text: 'Energy forecast for the full month and year — plan ahead and take advantage of the best windows.' },
  ];

  // "Key subscription benefits" — lista cu iconita + text.
  benefits = [
    { icon: '⏱️', title: 'Time savings', text: 'No need to analyze transits — you get a ready-made "flight plan" every week.' },
    { icon: '✨', title: 'Uniqueness (USP)', text: 'The only solution combining Matrix Destiny with Human Design and Tarot in one AI interpretation.' },
    { icon: '🧭', title: 'Real support in decisions', text: 'With Authority analysis and monthly vibration, you know when to act and when to let go.' },
    { icon: '🐷', title: 'Economy', text: 'Access for 3 people and 50% discounts on PDFs — the subscription pays for itself with the first report.' },
    { icon: '🌱', title: 'Continuous growth', text: 'The report archive lets you track how you evolve and respond to recurring planetary cycles.' },
  ];

  // Planurile one-time (tab Destiny Matrix).
  matrixPlans: Plan[] = [
    { title: 'Partnership Matrix', subtitle: 'For couples', price: 11, oldPrice: null, badge: null, icon: '💞',
      features: ['Compatibility analysis of two people', 'Partnership PDF report (50 pages)', 'Shared goals & challenges'] },
    { title: 'Destiny Matrix — Full', subtitle: 'Full Destiny Matrix analysis', price: 19, oldPrice: null, badge: 'BESTSELLER', icon: '⚙️',
      features: ['Full analysis of 22 energies', 'PDF report (100+ pages)', 'Matrix visualization', 'Lifetime access'] },
    { title: "Child's Matrix", subtitle: "Your child's potential", price: 19, oldPrice: null, badge: null, icon: '🧒',
      features: ["Child's potential analysis", 'Parenting tips', 'Development forecast'] },
  ];

  humanPlan: Plan = {
    title: 'Human Design — Full', subtitle: 'Your complete BodyGraph', price: 24, oldPrice: null, badge: null, icon: '🧬',
    features: ['Full BodyGraph chart', 'Type, strategy & authority', 'All gates, channels & centers', 'PDF report'],
  };

  miniPlans: Plan[] = [
    { title: 'Single Position', subtitle: 'One matrix position', price: 3, oldPrice: null, badge: null, icon: '🧩',
      features: ['One chosen position explained', 'Instant online result'] },
    { title: 'Tarot Spread', subtitle: '3-card reading', price: 2, oldPrice: null, badge: null, icon: '🔮',
      features: ['3-card spread', 'AI interpretation'] },
    { title: 'Daily Forecast', subtitle: 'Your energy today', price: 1, oldPrice: null, badge: null, icon: '☀️',
      features: ['Today\'s numerological vibration', 'Lucky focus of the day'] },
  ];
}
