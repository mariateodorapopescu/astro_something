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

export interface HumanDesignResult {
  type: string;
  strategy: string;
  authority: string;
  population: string;
  summary: string;
}

export interface AscendantResult {
  sign: string;
  summary: string;
}

export interface OkResult {
  ok: boolean;
  message: string;
}

/** Un calcul salvat, asa cum vine din istoric (/api/my-calculations). */
export interface CalculationItem {
  id: number;
  name: string;
  birth_date: string;
  life_path: number;
  expression: number;
  created_at: string;
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

  /** Tipul de energie Human Design. */
  humanDesign(name: string, birthDate: string): Observable<HumanDesignResult> {
    return this.http.post<HumanDesignResult>('/api/human-design', {
      name, birth_date: birthDate,
    });
  }

  /** Semnul ascendent. */
  ascendant(birthDate: string, hour: number, place: string): Observable<AscendantResult> {
    return this.http.post<AscendantResult>('/api/ascendant', {
      birth_date: birthDate, hour, place,
    });
  }

  /** Abonare la newsletter. */
  subscribe(email: string): Observable<OkResult> {
    return this.http.post<OkResult>('/api/subscribe', { email });
  }

  /** Trimite un mesaj de contact. */
  contact(data: { name: string; email: string; subject: string; message: string; category: string }): Observable<OkResult> {
    return this.http.post<OkResult>('/api/contact', data);
  }

  /** Istoricul de calcule al userului logat (token atasat de interceptor). */
  myCalculations(): Observable<CalculationItem[]> {
    return this.http.get<CalculationItem[]>('/api/my-calculations');
  }
}
