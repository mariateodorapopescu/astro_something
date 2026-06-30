import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
})
export class Footer {
  columns = [
    { title: 'Product', links: ['Calculate', 'Pricing', 'Discover', 'Log in'] },
    { title: 'Company', links: ['About', 'Method', 'Blog', 'Contact'] },
    { title: 'Legal', links: ['Privacy Policy', 'Terms', 'Cookie Policy', 'GDPR'] },
  ];
}
