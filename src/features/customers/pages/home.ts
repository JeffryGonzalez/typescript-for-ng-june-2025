import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-customers-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <h2 class="text-2xl font-black">Customer Management</h2>

      <div class=" bg-base-200 p-4 ring-1 ring-accent mt-4">
        <h3>Stats</h3>
        <p>You have X Customers</p>
        <p>X have not been contaced in the last two weeks.</p>
      </div>
    </div>
  `,
  styles: ``,
})
export class Home {}
