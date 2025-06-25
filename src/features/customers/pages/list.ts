import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { CustomersApi } from '../services/customer-api';
import { CustomerCard } from '../components/customer-card';
import { CustomerListSort } from '../components/customer-list-sort';

@Component({
  selector: 'app-customers-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CustomerCard, CustomerListSort],
  template: `
    <app-customer-list-sort />
    @if (customers.hasValue()) {
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 ">
        @for (customer of customers.value(); track customer.id) {
          <app-customer-card [customer]="customer"></app-customer-card>
        }
      </div>
    } @else {
      <p>Loading...</p>
    }
  `,
  styles: ``,
})
export class List {
  #service = inject(CustomersApi);

  customers = rxResource({
    stream: () => this.#service.getCustomers(),
  });
}
