import { delay, http, HttpResponse } from 'msw';

let CUSTOMERS = [
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
  {
    id: '4',
    name: 'Jenny Smith',
    email: 'jenny@copany.com',
    phone: '867-5309',
    company: 'MegaCorp',
  },
];

export const customersHandler = [
  http.get('/api/customers', async () => {
    await delay(2000); // Simulate network delay
    return HttpResponse.json(CUSTOMERS);
  }),
  http.post('/api/customers', async ({ request }) => {
    const partial = (await request.json()) as {
      name: string;
      company: string;
      phone: string;
      email: string;
    };

    const newThing = {
      ...partial,
      id: crypto.randomUUID(),
    };
    CUSTOMERS.push(newThing);
    await delay();
    return HttpResponse.json(newThing);
  }),
  http.delete('/api/customers/:id', async ({ params }) => {
    const id = params['id'];
    CUSTOMERS = CUSTOMERS.filter((c) => c.id !== id);
    return HttpResponse.json({ ok: 'deleted that customer' });
  }),
];
