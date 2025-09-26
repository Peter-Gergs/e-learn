import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard';
import { CoursesComponent } from './components/courses/courses';
import { CourseDetailsComponent } from './components/course-details/course-details';
import { CourseEditComponent } from './components/course-edit/course-edit';
import { InstructorsComponent } from './components/instructors/instructors';
import { InstructorDetailComponent } from './components/instructor-detail/instructor-detail';
import { InstructorProfileComponent } from './components/instructor-profile/instructor-profile';
import { LoginComponent } from './components/auth/login.component';
import { RegisterComponent } from './components/auth/register.component';
import { AuthGuard } from './auth.guard'; 

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, 
  { path: 'dashboard', component: DashboardComponent },

  // Courses
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/:id', component: CourseDetailsComponent },
  { path: 'courses/edit/:id', component: CourseEditComponent, canActivate: [AuthGuard] },

  // Instructors
  { path: 'instructors', component: InstructorsComponent },
  { path: 'instructors/:id/profile', component: InstructorProfileComponent, canActivate: [AuthGuard] },
  { path: 'instructors/:id', component: InstructorDetailComponent },

  // Authentication
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // أي path غلط يرجع للـ dashboard
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];




