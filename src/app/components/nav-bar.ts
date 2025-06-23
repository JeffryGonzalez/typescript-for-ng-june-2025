import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <nav class="navbar bg-base-100 shadow-lg">
      <div class="navbar-start">
        <ul class="menu menu-horizontal px-1">
          <li>
            <a class="" routerLink="/">Home</a>
          </li>
        </ul>
      </div>
      <div class="navbar-end"></div>
    </nav>
  `,
  styles: ``,
})
export class NavBar {}
