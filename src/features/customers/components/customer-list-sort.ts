import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-customer-list-sort',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="flex justify-between items-center p-4">
      <h2 class="font-bold text-lg">Sort Customers</h2>
      <div class="join">
        <button
          (click)="sortBy.set('name')"
          [disabled]="sortBy() === 'name'"
          class="btn btn-primary join-item"
        >
          Name
        </button>
        <button
          (click)="sortBy.set('company')"
          [disabled]="sortBy() === 'company'"
          class="btn btn-primary join-item"
        >
          Company
        </button>
        <button
          (click)="sortBy.set('lastContacted')"
          [disabled]="sortBy() === 'lastContacted'"
          class="btn btn-primary join-item"
        >
          Last Contacted
        </button>
      </div>
    </div>
  `,
  styles: ``,
})
export class CustomerListSort {
  sortBy = signal('name');
}
