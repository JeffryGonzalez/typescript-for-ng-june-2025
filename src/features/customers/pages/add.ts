import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-customers-add',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="container mx-auto max-w-md p-6">
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-6">Add New Customer</h2>

          <form class="space-y-4">
            <!-- Name Field -->
            <div class="form-control">
              <label class="label" for="customer-name">
                <span class="label-text">Name</span>
              </label>
              <input
                id="customer-name"
                type="text"
                placeholder="Enter customer name"
                class="input input-bordered w-full"
                required
              />
            </div>

            <!-- Company Field -->
            <div class="form-control">
              <label class="label" for="customer-company">
                <span class="label-text">Company</span>
              </label>
              <input
                id="customer-company"
                type="text"
                placeholder="Enter company name"
                class="input input-bordered w-full"
                required
              />
            </div>

            <!-- Email Field -->
            <div class="form-control">
              <label class="label" for="customer-email">
                <span class="label-text">Email Address</span>
              </label>
              <input
                id="customer-email"
                type="email"
                placeholder="Enter email address"
                class="input input-bordered w-full"
                required
              />
            </div>

            <!-- Phone Field -->
            <div class="form-control">
              <label class="label" for="customer-phone">
                <span class="label-text">Phone Number</span>
              </label>
              <input
                id="customer-phone"
                type="tel"
                placeholder="Enter phone number"
                class="input input-bordered w-full"
                required
              />
            </div>

            <!-- Form Actions -->
            <div class="form-control mt-6">
              <div class="flex gap-4">
                <button type="submit" class="btn btn-primary flex-1">
                  Add Customer
                </button>
                <button type="button" class="btn btn-ghost flex-1">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class Add {}
