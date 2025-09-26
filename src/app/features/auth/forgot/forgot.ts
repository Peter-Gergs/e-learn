import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forgot.html',
  styleUrls: ['./forgot.css'],
})
export class Forgot {
  email = '';
  otp = '';
  resetToken = '';
  isOtpSent = false;
  isOtpVerified = false;
  errorMessage = '';

  constructor(private router: Router, private http: HttpClient) {}

  onRequestOtp() {
    this.errorMessage = '';
    this.http
      .post<any>('http://localhost:5000/api/users/forgot-password', { email: this.email })
      .subscribe({
        next: (res) => {
          this.isOtpSent = true;
          this.resetToken = res.resetToken || '';
          alert('OTP sent to your email!');
        },
        error: (err) => {
          this.errorMessage = err.error?.message || 'Failed to send OTP.';
        },
      });
  }

  onVerifyOtp() {
    // In real app, OTP would be verified by backend. Here, we just check if token exists.
    if (this.resetToken && this.otp) {
      // Pass token to reset page (could use query param or service)
      this.router.navigate(['/auth/reset'], { queryParams: { token: this.resetToken } });
    } else {
      alert('Invalid OTP or token.');
    }
  }
}
