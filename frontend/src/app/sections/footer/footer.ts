import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
})
export class Footer {
  columns = [
    { title: 'Products', links: ['Individual Map', 'Partnership Map', 'Child Map', 'Human Design', 'Blog', 'Pricing'] },
    { title: 'Information', links: ['About Us', 'Privacy Policy', 'Cookie Policy', 'Terms of Service', 'Help Center', 'Contact'] },
    { title: 'Account', links: ['Log in', 'Create Account'] },
  ];

  socials = [
    { label: 'Facebook', icon: '📘' },
    { label: 'Instagram', icon: '📷' },
    { label: 'TikTok', icon: '🎵' },
  ];
}
