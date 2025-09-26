import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {
  courses: Course[] = [];
  notifications: string[] = [];
  totalCourses: number = 0;
  totalStudents: number = 0;

  constructor(private courseService: CoursesService, private router: Router) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (data) => {
        this.courses = data;
        this.calculateTotals();
        this.generateNotifications();
        this.renderChart();
      },
      error: (err) => console.error('Error loading courses', err)
    });
  }

  calculateTotals() {
    this.totalCourses = this.courses.length;
    this.totalStudents = this.courses.reduce(
      (sum, course) => sum + (course.students?.length || 0),
      0
    );
  }

  generateNotifications() {
    this.notifications = [];
    this.courses.forEach(course => {
      if (course.students && course.students.length > 50) {
        this.notifications.push(`Course "${course.title}" has over 50 students!`);
      }
      if (!course.lectures || course.lectures.length === 0) {
        this.notifications.push(`Course "${course.title}" has no lectures.`);
      }
    });
  }

  goToCreateCourse() {
    this.router.navigate(['/courses/create']);
  }

  goToMessages() {
    alert('Messaging feature coming soon!');
  }

  renderChart() {
    const ctx = document.getElementById('studentsChart') as HTMLCanvasElement;
    if (!ctx) return;

    import('chart.js').then(({ Chart, registerables }) => {
      Chart.register(...registerables);

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.courses.map(c => c.title),
          datasets: [{
            label: 'Students per Course',
            data: this.courses.map(c => c.students?.length || 0),
            backgroundColor: '#007bff',
            borderRadius: 8
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: true, position: 'top' } }
        }
      });
    });
  }
}
