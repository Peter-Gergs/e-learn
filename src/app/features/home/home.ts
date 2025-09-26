import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  constructor(private router: Router) {}

  goToCourses() {
    this.router.navigate(['/courses']);
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
