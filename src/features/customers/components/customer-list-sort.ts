import {
  Component,
  ChangeDetectionStrategy,
  signal,
  inject,
} from '@angular/core';
import { CustomersStore } from '../stores/customers';
import { TitleCasePipe } from '@angular/common';
import { CamelCaseToSpaces } from '../pipes/camelCaseToSpaces';

@Component({
  selector: 'app-customer-list-sort',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TitleCasePipe, CamelCaseToSpaces],
  template: `
    <div class="flex justify-between items-center p-4">
      <h2 class="font-bold text-lg">Sort Customers</h2>
      <div class="join">
        @for (key of store.sortingOptions; track key) {
          <button
            (click)="store.setSortBy(key)"
            [disabled]="store.sortBy() === key"
            class="btn btn-primary join-item"
          >
            {{ key | appCamelCaseToSpaces | titlecase }}
          </button>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class CustomerListSort {
  store = inject(CustomersStore);
}
