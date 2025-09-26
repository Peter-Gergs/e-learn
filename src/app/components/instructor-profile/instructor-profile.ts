import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { Instructor } from '../../models/instructor.model';

@Component({
  selector: 'app-instructor-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instructor-profile.html',
  styleUrls: ['./instructor-profile.css'],
})
export class InstructorProfileComponent implements OnInit {
  instructor: Instructor | null = null;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.instructor = this.auth.getCurrentUser();
  }
}
