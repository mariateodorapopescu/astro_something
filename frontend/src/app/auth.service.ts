import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface AuthUser {
  id: number;
  name: string;
  email: string;
}

interface TokenResponse {
  access_token: string;
  token_type: string;
  user: AuthUser;
}

/**
 * Gestioneaza autentificarea: register/login, pastreaza token-ul JWT si
 * utilizatorul curent. Token-ul se salveaza in localStorage ca sa ramana
 * dupa refresh.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);

  readonly token = signal<string | null>(localStorage.getItem('token'));
  readonly user = signal<AuthUser | null>(this.readUser());
  readonly isLoggedIn = computed(() => this.token() !== null);

  private readUser(): AuthUser | null {
    const raw = localStorage.getItem('user');
    return raw ? JSON.parse(raw) : null;
  }

  register(name: string, email: string, password: string): Observable<TokenResponse> {
    return this.http
      .post<TokenResponse>('/api/register', { name, email, password })
      .pipe(tap((res) => this.store(res)));
  }

  login(email: string, password: string): Observable<TokenResponse> {
    return this.http
      .post<TokenResponse>('/api/login', { email, password })
      .pipe(tap((res) => this.store(res)));
  }

  /**
   * Cere backend-ului utilizatorul curent pe baza token-ului (ruta protejata
   * /api/me). Reimprospateaza datele salvate. Daca token-ul e invalid/expirat,
   * interceptorul trimite 401 si componenta face logout.
   */
  me(): Observable<AuthUser> {
    return this.http.get<AuthUser>('/api/me').pipe(
      tap((u) => {
        localStorage.setItem('user', JSON.stringify(u));
        this.user.set(u);
      }),
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.token.set(null);
    this.user.set(null);
  }

  private store(res: TokenResponse): void {
    localStorage.setItem('token', res.access_token);
    localStorage.setItem('user', JSON.stringify(res.user));
    this.token.set(res.access_token);
    this.user.set(res.user);
  }
}
