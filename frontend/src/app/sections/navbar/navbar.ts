import { Component, inject } from '@angular/core';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
})
export class Navbar {
  protected theme = inject(ThemeService);
}
