import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-edit.html',
  styleUrls: ['./course-edit.css']
})
export class CourseEditComponent implements OnInit {
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
          this.loading = false;
        },
        error: (err) => {
          console.error('Error fetching course', err);
          this.error = 'Failed to load course';
          this.loading = false;
        }
      });
    } else {
      this.error = 'Invalid course ID';
      this.loading = false;
    }
  }

  save(): void {
  if (this.course) {
    this.courseService.updateCourse(this.course._id, this.course).subscribe({
      next: () => {
        alert('Course updated successfully!');
        this.router.navigate(['/courses']);
      },
      error: (err) => {
        console.error('Error updating course', err);
        this.error = 'Failed to update course';
      }
    });
  }
}

}
