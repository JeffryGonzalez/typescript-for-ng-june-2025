import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Brand, brandEntities } from '../../../shared/utils/brands';
import { map } from 'rxjs';

export type RawCustomerApiItem = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  lastContacted?: string; // Optional field for last contacted date
};

export type CustomerApiItem = Brand<RawCustomerApiItem, 'customer-api-item'>;

export type CustomerCreate = Omit<RawCustomerApiItem, 'id' | 'lastContacted'>;

export class CustomersApi {
  #client = inject(HttpClient);
  #baseUrl = '/api/customers';

  getCustomers() {
    return this.#client
      .get<RawCustomerApiItem[]>(this.#baseUrl)
      .pipe(map((items) => items.map((item) => item as CustomerApiItem)));
  }

  addCustomer(customer: CustomerCreate) {
    return this.#client
      .post<RawCustomerApiItem>(this.#baseUrl, customer)
      .pipe(map((item) => item as CustomerApiItem));
  }
}
