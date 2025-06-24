/* eslint-disable @typescript-eslint/no-unused-vars */
import { describe, it, expect } from 'vitest';
import { Employee, Mailable, Person } from './types';

// You can define types with the interface keyword or the type keyword.
// You do you. (almost) no difference between the two.

// interface Person {
//   id: string;
//   name: {
//     firstName: string;
//     lastName: string;
//   };
//   email: string;
// }
// interface Person {
//     age: number
// }
// late on in that file

describe('using types', () => {
  it('using the interface', () => {
    type AgedPerson = Person & { age: number };
    const bob: AgedPerson = {
      id: '99',
      name: { firstName: 'Robert', lastName: 'Smith' },
      email: 'bob@cure.com',
      age: 42,
    };

    // when you are creating methods, think
    // "What do do I need this thing to HAVE"
    // instead of relying on who it is.
    function sendEmail(who: Mailable) {
      console.log(who.email + ' was emailed');
    }

    function doThis(thing: { count: number; doIt: (x: string) => unknown }) {
      for (let x = 0; x < thing.count; x++) {
        thing.doIt('now');
      }
    }

    doThis({ count: 5, doIt: (x) => console.log(x) });

    const bigThing = {
      id: '1213',
      count: 12,
      doIt: (x: string) => console.log('Big thing', x),
      department: 'QA',
    };

    doThis(bigThing);

    sendEmail(bob);

    const e1 = new Employee();

    sendEmail(e1);
  });
});
