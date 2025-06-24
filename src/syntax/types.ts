export type Person = {
  id: string;
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
};

export type Mailable = {
  email: string;
};

export class Employee implements Mailable {
  id = 'x93839';
  department = 'DEV';
  email = 'bob@aol.com';
}
