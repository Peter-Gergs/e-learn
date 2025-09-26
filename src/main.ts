import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { App } from './app/app';
import { DashboardComponent } from './app/components/dashboard/dashboard';
import { CoursesComponent } from './app/components/courses/courses';
import { CourseDetailsComponent } from './app/components/course-details/course-details';
import { CourseEditComponent } from './app/components/course-edit/course-edit';
import { InstructorsComponent } from './app/components/instructors/instructors';
import { InstructorDetailComponent } from './app/components/instructor-detail/instructor-detail';

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // أول ما تدخل
      { path: 'dashboard', component: DashboardComponent },     // صفحة الداشبورد
      { path: 'courses', component: CoursesComponent },
      { path: 'courses/:id', component: CourseDetailsComponent },
      { path: 'courses/edit/:id', component: CourseEditComponent },
      { path: 'instructors', component: InstructorsComponent },
      { path: 'instructors/:id', component: InstructorDetailComponent },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' } // أي مسار غريب يرجع للداشبورد
    ])
  ]
}).catch(err => console.error(err));
