import { Component, OnInit } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { HttpClient } from '@angular/common/http';

interface UserProfile {
  role: 'student' | 'instructor';
  firstName: string;
  lastName: string;
  email: string;
  bio?: string;
  courses: { id: string; title: string }[];
  _id?: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, TitleCasePipe],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css'],
})
export class Profile implements OnInit {
  user: UserProfile | null = null;
  showEdit = false;
  editUser: UserProfile | null = null;
  errorMessage = '';
  loading = false;

  constructor(private auth: AuthService, private http: HttpClient) {}

  ngOnInit() {
    this.fetchProfile();
  }

  fetchProfile() {
    this.loading = true;
    this.errorMessage = '';
    this.http
      .get<any>('http://localhost:5000/api/users/me', {
        headers: this.auth.getAuthHeaders(),
      })
      .subscribe({
        next: (res) => {
          // Map backend fields to frontend
          this.user = {
            _id: res._id,
            firstName: res.First_Name || res.firstName || '',
            lastName: res.Last_Name || res.lastName || '',
            email: res.email,
            role: res.role,
            bio: res.bio,
            courses: (res.courses || []).map((c: any) => ({ id: c._id || c.id, title: c.title })),
          };
          this.loading = false;
        },
        error: (err) => {
          this.errorMessage = err.error?.message || 'Failed to load profile.';
          this.loading = false;
        },
      });
  }

  startEdit() {
    if (!this.user) return;
    this.editUser = JSON.parse(JSON.stringify(this.user));
    this.showEdit = true;
  }

  saveEdit() {
    if (!this.editUser) return;
    this.loading = true;
    this.errorMessage = '';
    // Map frontend fields to backend
    const payload = {
      First_Name: this.editUser.firstName,
      Last_Name: this.editUser.lastName,
      bio: this.editUser.bio || '',
    };
    this.http
      .put<any>('http://localhost:5000/api/users/me', payload, {
        headers: this.auth.getAuthHeaders(),
      })
      .subscribe({
        next: (res) => {
          this.user = {
            ...this.user!,
            firstName: res.First_Name || res.firstName || '',
            lastName: res.Last_Name || res.lastName || '',
            bio: res.bio,
          };
          this.editUser = null;
          this.showEdit = false;
          this.loading = false;
        },
        error: (err) => {
          this.errorMessage = err.error?.message || 'Failed to update profile.';
          this.loading = false;
        },
      });
  }

  cancelEdit() {
    this.editUser = null;
    this.showEdit = false;
  }
}
