import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth', // Changed selector to a more generic name
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.html',
  styleUrls: ['./auth.css'],
})
export class AuthComponent {
  // Changed class name
  isLoginMode = true;
  errorMessage = '';

  // Login form properties
  username = '';
  password = '';

  // Register form properties
  role = 'student';
  firstName = '';
  lastName = '';
  email = '';
  confirmPassword = '';
  bio = '';

  constructor(private router: Router, private authService: AuthService) {}

  onSwitchMode(isLogin: boolean) {
    this.isLoginMode = isLogin;
    this.errorMessage = ''; // Clear error message when switching
    // You can also reset the form inputs here if needed
  }

  onSubmit() {
    this.errorMessage = ''; // Clear error on new submission

    if (this.isLoginMode) {
      if (this.authService.login(this.username, this.password)) {
        this.router.navigate(['/home']);
      } else {
        this.errorMessage = 'Invalid username or password.';
      }
    } else {
      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'Passwords do not match.';
        return;
      }
      if (this.authService.register(
            this.username,
            this.password,
            this.role,
            {
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email,
              password: this.password,
              role: this.role,
              bio: this.bio
            }
          )) {
        // Registration is handled in AuthService; navigate to home on success
        this.router.navigate(['/home']);
      } else {
        this.errorMessage = 'Registration failed. The username may already exist.';
      }
    }
  }

  onForgotClick(event: Event) {
    event.preventDefault();
    console.log('Forgot password clicked');
    this.router.navigate(['/auth/forgot']);
  }
}
