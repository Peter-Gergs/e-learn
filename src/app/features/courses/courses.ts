import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';

interface Course {
  _id: string;
  title: string;
  description: string;
  category: string;
  level: string;
  price: number;
  instructor: string;
  students: number;
  lectures: number;
  image: string;
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.html',
  styleUrls: ['./courses.css'],
})
export class Courses implements OnInit {
  courses: Course[] = [];
  categories: string[] = [];
  levels: string[] = [];
  filter = {
    category: '',
    level: '',
    price: '',
  };
  loading = false;
  errorMessage = '';

  constructor(private router: Router, private coursesService: CoursesService) {}

  ngOnInit() {
    this.fetchCourses();
  }

  fetchCourses() {
    this.loading = true;
    this.errorMessage = '';
    this.coursesService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
        this.categories = Array.from(new Set(this.courses.map((c) => c.category)));
        this.levels = Array.from(new Set(this.courses.map((c) => c.level)));
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Failed to load courses.';
        this.loading = false;
      },
    });
  }

  filteredCourses() {
    return this.courses.filter((course) => {
      const cat = !this.filter.category || course.category === this.filter.category;
      const lvl = !this.filter.level || course.level === this.filter.level;
      const price =
        !this.filter.price ||
        (this.filter.price === 'free' && course.price === 0) ||
        (this.filter.price === 'paid' && course.price > 0);
      return cat && lvl && price;
    });
  }

  clearFilter() {
    this.filter = { category: '', level: '', price: '' };
  }

  viewDetails(course: Course) {
    this.router.navigate(['/courses', course._id]);
  }

  enroll(course: Course) {
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
