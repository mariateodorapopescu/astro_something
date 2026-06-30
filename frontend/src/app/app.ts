import { Component, OnInit, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private api = inject(ApiService);

  protected readonly title = signal('astro_something');
  // Arata daca backend-ul raspunde. La inceput e "neconectat".
  protected readonly backendStatus = signal('neconectat');

  ngOnInit(): void {
    // Incearca sa contacteze backend-ul. Daca nu ruleaza, ramane "neconectat".
    this.api.health().subscribe({
      next: (res) => this.backendStatus.set(res.status),
      error: () => this.backendStatus.set('neconectat')
    });
  }
}
