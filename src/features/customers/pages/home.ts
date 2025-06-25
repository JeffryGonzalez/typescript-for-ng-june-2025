import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CustomersStore } from '../stores/customers';

@Component({
  selector: 'app-customers-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <h2 class="text-2xl font-black">Customer Management</h2>

      @let stats = store.homeStats();
      <div class=" bg-base-200 p-4 ring-1 ring-accent mt-4">
        <h3>Stats</h3>
        <p>You have {{ stats.total }} Customers</p>
        <p>
          {{ stats.outOfDate }} have not been contaced in the last two weeks.
        </p>
      </div>
    </div>
  `,
  styles: ``,
})
export class Home {
  store = inject(CustomersStore);
}
