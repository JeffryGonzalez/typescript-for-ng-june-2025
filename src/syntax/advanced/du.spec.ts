import { describe, it, expect } from 'vitest';
import { assertNever } from '../../shared/utils/assert-never';

describe('Discriminated Unions', () => {
  it('Using types for "inheritance" like situations', () => {
    type Person = {
      id: string;
      name: string;
    };

    type FullTimeEmployee = {
      type: 'full-time';
      salary: number;
    } & Person;

    type ParttimeEmployee = {
      type: 'part-time';
      hourlyRate: number;
    } & Person;

    type Retiree = {
      type: 'retiree';
      pension: number;
    } & Person;

    type Contractor = {
      type: 'contractor';
      rate: number;
    } & Person;

    type Vendor = {
      type: 'vendor';
    } & Person;
    type BonusEligible =
      | FullTimeEmployee
      | Retiree
      | ParttimeEmployee
      | Contractor
      | Vendor;

    function giveBonus(person: BonusEligible, percent: number) {
      switch (person.type) {
        case 'full-time':
          return person.salary * percent;

        case 'part-time':
          return person.hourlyRate * 100 * percent;

        case 'retiree':
          return 100;
        case 'contractor':
          return person.rate + 100000 * percent;
        case 'vendor':
          return 50;

        default:
          // if none of the above is satisfied,
          assertNever(person);
      }
    }

    const bob: Retiree = {
      type: 'retiree',
      id: '11',
      name: 'Bob Smith',
      pension: 30000,
    };

    expect(giveBonus(bob, 0.03)).toBe(100);

    const sue: Person = {
      id: '99',
      name: 'Sue Jones',
    };
  });
});
