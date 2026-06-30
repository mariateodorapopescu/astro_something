import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/** Forma raspunsului de la /api/calculate. */
export interface CalculateResult {
  name: string;
  birth_date: string;
  life_path: number;
  life_path_meaning: string;
  expression: number;
  expression_meaning: string;
  day_energy: number;
  summary: string;
}

/**
 * Serviciu pentru a vorbi cu backend-ul Python.
 * Cererile catre "/api/..." sunt redirectate spre backend (vezi proxy.conf.json).
 */
@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);

  health(): Observable<{ status: string }> {
    return this.http.get<{ status: string }>('/api/health');
  }

  /** Trimite numele + data nasterii si primeste calculul numerologic. */
  calculate(name: string, birthDate: string): Observable<CalculateResult> {
    return this.http.post<CalculateResult>('/api/calculate', {
      name,
      birth_date: birthDate,
    });
  }
}
