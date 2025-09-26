import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-details.html',
  styleUrls: ['./course-details.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Course | null = null;
  loading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private courseService: CoursesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.courseService.getCourseById(id).subscribe({
        next: (data) => {
          this.course = data;
          if (!this.course.students) this.course.students = [];
          this.loading = false;
        },
        error: (err) => {
          console.error('Error fetching course', err);
          this.error = 'Failed to load course';
          this.loading = false;
        }
      });
    }
  }

  enroll(studentId: string) {
    if (!this.course) return;

    if (!this.course.students) this.course.students = [];

    if (!this.course.students.includes(studentId)) {
      this.course.students.push(studentId);

      this.courseService.updateCourse(this.course._id, this.course).subscribe({
        next: () => {
          alert(`You have enrolled in "${this.course!.title}" 🎉`);
        },
        error: (err) => {
          console.error('Error enrolling', err);
          this.error = 'Failed to enroll in course';
        }
      });
    } else {
      alert('You are already enrolled in this course.');
    }
  }

  backToCourses() {
    this.router.navigate(['/courses']);
  }
}
