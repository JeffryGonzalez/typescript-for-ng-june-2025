import { Routes } from '@angular/router';
import { Welcome } from './pages/welcome';

export const routes: Routes = [
  {
    path: '',
    component: Welcome,
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('../features/customers/routes').then((m) => m.CUSTOMER_ROUTES),
  },
];
