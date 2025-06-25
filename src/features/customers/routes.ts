import { Routes } from '@angular/router';
import { Customers } from './customers';
import { CustomersApi } from './services/customer-api';
import { List } from './pages/list';
import { Home } from './pages/home';
import { Add } from './pages/add';
import { Calls } from './pages/calls';
export const CUSTOMER_ROUTES: Routes = [
  {
    path: '',
    component: Customers,
    providers: [CustomersApi],
    children: [
      {
        path: '',
        component: Home,
      },
      {
        path: 'list',
        component: List,
      },
      {
        path: 'add',
        component: Add,
      },
      {
        path: 'calls',
        component: Calls,
      },
    ],
  },
];
