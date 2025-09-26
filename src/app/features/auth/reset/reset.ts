import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reset.html',
  styleUrls: ['./reset.css'],
})
export class Reset {
  newPassword = '';
  confirmPassword = '';
  token = '';
  errorMessage = '';

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
    this.route.queryParams.subscribe((params) => {
      this.token = params['token'] || '';
    });
  }

  onSubmit() {
    this.errorMessage = '';
    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match!';
      return;
    }
    if (!this.token) {
      this.errorMessage = 'Reset token missing.';
      return;
    }
    this.http
      .post<any>('http://localhost:5000/api/users/reset-password', {
        token: this.token,
        newPassword: this.newPassword,
      })
      .subscribe({
        next: () => {
          alert('Password reset successful!');
          this.router.navigate(['/auth']);
        },
        error: (err) => {
          this.errorMessage = err.error?.message || 'Failed to reset password.';
        },
      });
  }
}
