import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
})
export class Footer {
  // Fiecare link are o eticheta si o ruta (path). '#' = placeholder fara pagina dedicata.
  columns = [
    { title: 'Products', links: [
      { label: 'Individual Map', path: '/' },
      { label: 'Partnership Map', path: '/partnership-matrix' },
      { label: 'Child Map', path: '/child-matrix' },
      { label: 'Human Design', path: '/human-design' },
      { label: 'Blog', path: '/blog' },
      { label: 'Pricing', path: '/pricing' },
    ] },
    { title: 'Information', links: [
      { label: 'About Us', path: '/about' },
      { label: 'Privacy Policy', path: '/privacy-policy' },
      { label: 'Cookie Policy', path: '/privacy-policy' },
      { label: 'Terms of Service', path: '/privacy-policy' },
      { label: 'Help Center', path: '/help' },
      { label: 'Contact', path: '/contact' },
    ] },
    { title: 'Account', links: [
      { label: 'Log in', path: '/login' },
      { label: 'Create Account', path: '/register' },
    ] },
  ];

  socials = [
    { label: 'Facebook', icon: '📘' },
    { label: 'Instagram', icon: '📷' },
    { label: 'TikTok', icon: '🎵' },
  ];
}
