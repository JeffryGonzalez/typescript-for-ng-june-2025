import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-customers-calls',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="container mx-auto p-6">
      <h2 class="text-2xl font-bold mb-4">Customer Calls</h2>
      <p>No calls scheduled.</p>
    </div>
  `,
  styles: ``,
})
export class Calls {}
