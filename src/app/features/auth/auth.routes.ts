import { Routes } from '@angular/router';
import { AuthComponent } from '../../core/services/auth';
import { Forgot } from './forgot/forgot';
import { Reset } from './reset/reset';

export const AUTH_ROUTES: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'register', component: AuthComponent },
  { path: 'forgot', component: Forgot },
  { path: 'reset', component: Reset },
];
