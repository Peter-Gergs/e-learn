import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/users';
  private tokenKey = 'coursehub_jwt';

  constructor(private router: Router, private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password }).pipe(
      tap((res: any) => {
        if (res.token) {
          localStorage.setItem(this.tokenKey, res.token);
        }
      })
    );
  }

  register(
    username: string,
    password: string,
    role: string,
    user: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      role: string;
      bio?: string;
    }
  ): Observable<any> {
    // Map frontend fields to backend
    const payload = {
      First_Name: user.firstName,
      Last_Name: user.lastName,
      email: user.email,
      password: user.password,
      role: user.role,
      bio: user.bio || '',
    };
    return this.http.post(`${this.apiUrl}/register`, payload);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/auth']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    });
  }
}
