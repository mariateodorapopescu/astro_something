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

/** Forma raspunsului de la /api/calculate-partnership. */
export interface PartnershipResult {
  life_path1: number;
  life_path2: number;
  score: number;
  label: string;
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

  /** Compatibilitatea a doua persoane. */
  calculatePartnership(
    name1: string, birthDate1: string, name2: string, birthDate2: string,
  ): Observable<PartnershipResult> {
    return this.http.post<PartnershipResult>('/api/calculate-partnership', {
      name1, birth_date1: birthDate1, name2, birth_date2: birthDate2,
    });
  }
}
