import { Routes } from '@angular/router';
import { Appointments } from './appointments';
export const APPOINTMENT_ROUTES: Routes = [
  {
    path: '',
    component: Appointments,
    children: [],
  },
];
