import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Serviciu de exemplu pentru a vorbi cu backend-ul.
 * Cererile catre "/api/..." sunt redirectate automat spre backend
 * (vezi frontend/proxy.conf.json).
 *
 * Folosire intr-o componenta:
 *   private api = inject(ApiService);
 *   this.api.health().subscribe(res => console.log(res));
 */
@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);

  health(): Observable<{ status: string }> {
    return this.http.get<{ status: string }>('/api/health');
  }
}
