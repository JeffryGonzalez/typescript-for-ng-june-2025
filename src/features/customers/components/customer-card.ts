import {
  Component,
  ChangeDetectionStrategy,
  input,
  effect,
  inject,
  signal,
  computed,
} from '@angular/core';
import { CustomerApiItem } from '../services/customer-api';
import { DatePipe } from '@angular/common';
import { formatDistance } from 'date-fns';
import { computeMsgId } from '@angular/compiler';

import { CustomersStore } from '../stores/customers';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe],
  template: `
    @let cust = customer();
    <div class="border p-4 h-full flex flex-col justify-between">
      <div>
        <h2 class="font-bold text-accent text-2xl">{{ cust.name }}</h2>
        <p>Email: {{ cust.email }}</p>
        <p>Phone: {{ cust.phone }}</p>
        <p>Company: {{ cust.company }}</p>
        @if (cust.lastContacted) {
          <p>
            Last Contacted:
            {{ cust.lastContacted | date: 'short' }}
          </p>

          <p class="text-xs">({{ lastContactedAgo() }})</p>
        } @else {
          <p>Last Contacted: Not contacted yet</p>
        }
      </div>
      <div class="border-1 border-accent mt-4 p-2 ">
        <button class="btn btn-sm btn-primary p-4 w-full">
          Add To Call List
        </button>
        <button (click)="delete()" class="btn btn-sm btn-error p-4 w-full">
          Delete Customer
        </button>
      </div>
    </div>
  `,
  styles: ``,
})
export class CustomerCard {
  customer = input.required<CustomerApiItem>();
  #now = signal(new Date());
  store = inject(CustomersStore);
  #router = inject(Router);
  lastContactedAgo = computed(() => {
    const when = this.#now();
    const lastContactedDate = this.customer()?.lastContacted;
    if (!lastContactedDate) return '';
    return formatDistance(new Date(lastContactedDate), when) + ' ago';
  });

  delete() {
    this.store.deleteCustomer(this.customer());
    this.#router.navigate(['/customers/list']);
  }

  constructor() {
    effect((onCleanup) => {
      const id = setInterval(() => {
        this.#now.set(new Date());
      }, 1000);
      onCleanup(() => clearInterval(id));
    });
  }
}
