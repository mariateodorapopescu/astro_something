import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './sections/navbar/navbar';
import { Newsletter } from './sections/newsletter/newsletter';
import { Footer } from './sections/footer/footer';
import { TarotModal } from './sections/tarot-modal/tarot-modal';
import { CookieBanner } from './sections/cookie-banner/cookie-banner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Newsletter, Footer, TarotModal, CookieBanner],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
