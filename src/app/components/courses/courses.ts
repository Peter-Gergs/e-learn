// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { CourseService } from '../../services/courses.service';
// import { Course } from '../../models/course.model';

// @Component({
//   selector: 'app-courses',
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   templateUrl: './courses.html',
//   styleUrls: ['./courses.css']
// })
// export class CoursesComponent {
//   courses: Course[] = [];

//   constructor(private courseService: CourseService) {
//     this.courses = this.courseService.getCourses();
//   }

//   // حذف الكورس
//   deleteCourse(course: Course) {
//     if (confirm(`Delete course "${course.title}"?`)) {
//       this.courseService.deleteCourse(course.id);
//       this.courses = this.courseService.getCourses();
//     }
//   }

//   // تعديل الكورس - هيوجهك لصفحة Edit Course
//   editCourse(course: Course) {
//     // نفترض عندك routing زي /courses/edit/:id
//     window.location.href = `/courses/edit/${course.id}`;
//   }

//   // إضافة كورس جديد
//   addCourse() {
//     const newId = Math.max(...this.courses.map(c => c.id)) + 1;
//     this.courseService.addCourse({
//       id: newId,
//       title: 'New Course',
//       description: 'New course description',
//       instructor: 'Unknown',
//       duration: '1 month',
//       students: 0,
//       price: 0,
//       image: 'https://via.placeholder.com/400x200?text=New+Course'
//     });
//     this.courses = this.courseService.getCourses();
//   }
// }
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './courses.html',
  styleUrls: ['./courses.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  loading = true;
  error: string | null = null;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe({
      next: (data) => {
        this.courses = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load courses';
        this.loading = false;
        console.error(err);
      }
    });
  }

  deleteCourse(id: string) {
    if (confirm('Are you sure you want to delete this course?')) {
      this.coursesService.deleteCourse(id).subscribe(() => {
        this.courses = this.courses.filter(c => c._id !== id);
      });
    }
  }
}

