import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CustomerCard } from '../components/customer-card';
import { CustomerListSort } from '../components/customer-list-sort';
import { CustomersStore } from '../stores/customers';

@Component({
  selector: 'app-customers-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CustomerCard, CustomerListSort],
  template: `
    <app-customer-list-sort />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 ">
      @for (customer of store.entities(); track customer.id) {
        <app-customer-card [customer]="customer"></app-customer-card>
      }
    </div>
  `,
  styles: ``,
})
export class List {
  store = inject(CustomersStore);
}
