import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-customers',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h2 class="text-2xl font-black">Customers</h2>
    <div class="flex flex-row gap-4">
      <a routerLink="/customers" class="link">Customers</a>
      <a routerLink="./list" class="link">List</a>
      <a routerLink="./add" class="link">Add</a>
      <a routerLink="./calls" class="link">Calls</a>
    </div>
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: ``,
})
export class Customers {}
