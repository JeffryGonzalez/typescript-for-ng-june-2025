import { delay, http, HttpResponse } from 'msw';

const CUSTOMERS = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '555-1234',
    company: 'Acme Corp',
    lastContacted: '2025-04-20T12:00:00Z', // Optional field for last contacted date
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '555-5678',
    company: 'Widgets Inc',
  },
  {
    id: '3',
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    phone: '555-8765',
    company: 'Tech Solutions',
    lastContacted: new Date().toISOString(), // Current date as last contacted
  },
];

export const customersHandler = [
  http.get('/api/customers', async () => {
    await delay(1500); // Simulate network delay
    return HttpResponse.json(CUSTOMERS);
  }),
];
