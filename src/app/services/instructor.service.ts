
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Instructor } from '../models/instructor.model';

// @Injectable({ providedIn: 'root' })
// export class InstructorService {
//   private apiUrl = 'http://localhost:3000/api/instructors'; // لينك الـ backend

//   constructor(private http: HttpClient) {}

//   getInstructors(): Observable<Instructor[]> {
//     return this.http.get<Instructor[]>(this.apiUrl);
//   }

//   getInstructorById(id: number): Observable<Instructor> {
//     return this.http.get<Instructor>(`${this.apiUrl}/${id}`);
//   }

//   addInstructor(instructor: Instructor): Observable<Instructor> {
//     return this.http.post<Instructor>(this.apiUrl, instructor);
//   }

//   editInstructor(instructor: Instructor): Observable<Instructor> {
//     return this.http.put<Instructor>(`${this.apiUrl}/${instructor.id}`, instructor);
//   }

//   deleteInstructor(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/${id}`);
//   }
// }
// services/instructor.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Instructor } from '../models/instructor.model';

@Injectable({
  providedIn: 'root'
})
export class InstructorsService {
  private apiUrl = 'http://localhost:5000/api/instructors'; // غيره حسب الباك بتاعك

  constructor(private http: HttpClient) {}

  getInstructors(): Observable<Instructor[]> {
    return this.http.get<Instructor[]>(this.apiUrl);
  }

  getInstructorById(id: string): Observable<Instructor> {
    return this.http.get<Instructor>(`${this.apiUrl}/${id}`);
  }

  createInstructor(instructor: Instructor): Observable<Instructor> {
    return this.http.post<Instructor>(this.apiUrl, instructor);
  }

  updateInstructor(id: string, instructor: Instructor): Observable<Instructor> {
    return this.http.put<Instructor>(`${this.apiUrl}/${id}`, instructor);
  }

  deleteInstructor(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}


