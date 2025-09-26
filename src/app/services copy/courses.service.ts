import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../core/services/auth.service';

@Injectable({ providedIn: 'root' })
export class CoursesService {
  private apiUrl = 'http://localhost:5000/api/courses';

  constructor(private http: HttpClient, private auth: AuthService) {}

  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, {
      headers: this.auth.getAuthHeaders(),
    });
  }

  getCourseById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, {
      headers: this.auth.getAuthHeaders(),
    });
  }

  enroll(courseId: string): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/${courseId}/enroll`,
      {},
      {
        headers: this.auth.getAuthHeaders(),
      }
    );
  }
}
