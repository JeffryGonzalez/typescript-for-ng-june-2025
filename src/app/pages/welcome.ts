import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-welcome',
  imports: [],
  template: `
    <div class="prose pt-12">
      <h1>TypeScript For Angular Developers</h1>
      <p>Proudly Using Angular {{ v.full }}</p>
      <h2>Starter Project</h2>
      <div>
        <h3>Starter Code</h3>
        <p>This is pretty much a basic Angular 20+ Application</p>

        <a
          href="https://site-typescript.vercel.app/"
          target="_blank"
          class="link link-primary"
          >The Class Resources</a
        >
        <ul>
          <li>
            I've migrated to <code>Vitest</code> for our tests.
            <p>
              <small class="pl-4"
                >Note: This isn't a testing class, per-se, but you'll learn some
                testing.</small
              >
            </p>
          </li>
          <li>
            I've added some scripts to the <code>package.json</code> for various
            things.
          </li>
          <li>
            There is some stuff in the <code>/src/shared</code> we will use in
            class.
          </li>
          <li>
            I've added some <code>sherrif</code> rules to help us keep our code
            organized. We'll cover this in the class.
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: ``,
})
export class Welcome {
  v = VERSION;
}
