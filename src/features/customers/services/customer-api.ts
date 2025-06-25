import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

export type CustomerApiItem = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  lastContacted?: string; // Optional field for last contacted date
};

export class CustomersApi {
  #client = inject(HttpClient);
  #baseUrl = '/api/customers';

  getCustomers() {
    return this.#client.get<CustomerApiItem[]>(this.#baseUrl);
  }
}
