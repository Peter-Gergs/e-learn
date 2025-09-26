import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './core/services/auth';
import { Home } from './features/home/home';
import { Forgot } from './features/auth/forgot/forgot';
import { Reset } from './features/auth/reset/reset';
import { Courses } from './features/courses/courses';
import { Contact } from './features/contact/contact';
import { Profile } from './features/profile/profile';
import { Course } from './features/course/course';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'auth/forgot', component: Forgot },
  { path: 'auth/reset', component: Reset },
  { path: 'courses', component: Courses, canActivate: [AuthGuard] },
  { path: 'courses/:id', component: Course, canActivate: [AuthGuard] },
  { path: 'profile', component: Profile, canActivate: [AuthGuard] },
  { path: 'contact', component: Contact },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  static routes = routes;
}
