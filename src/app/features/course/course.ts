import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course.html',
  styleUrls: ['./course.css'],
})
export class Course implements OnInit {
  course: any;
  learnList: string[] = [
    'Master the basics and advanced concepts',
    'Hands-on projects and real-world examples',
    'Get instructor feedback and support',
    'Lifetime access to course materials',
    'Certificate of completion',
  ];
  loading = false;
  errorMessage = '';

  constructor(private route: ActivatedRoute, private coursesService: CoursesService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.fetchCourse(id);
      }
    });
  }

  fetchCourse(id: string) {
    this.loading = true;
    this.errorMessage = '';
    this.coursesService.getCourseById(id).subscribe({
      next: (course) => {
        this.course = course;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Failed to load course.';
        this.loading = false;
      },
    });
  }

  enroll(course: any) {
    this.coursesService.enroll(course._id).subscribe({
      next: () => {
        alert(`Enrolled in ${course.title}!`);
      },
      error: (err) => {
        alert(err.error?.message || 'Failed to enroll.');
      },
    });
  }
}
