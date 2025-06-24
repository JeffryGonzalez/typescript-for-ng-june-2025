import { describe, it, expect, test } from 'vitest';

describe('Just some random stuff', () => {
  it('returning object literals from functions', () => {
    type MathOpResult = {
      a: number;
      b: number;
      result: number;
    };
    // function add(first: number, second: number): MapOpResult {
    //   return {
    //     a:first,
    //     b:second,
    //     result: first + second,
    //   };
    // }

    const add = (a: number, b: number): MathOpResult => ({
      a,
      b,
      result: a + b,
    });

    const answer = add(10, 20);
    expect(answer.result).toBe(30);
    expect(answer.a).toBe(10); // etc.
  });

  it('spread operator', () => {
    // the "spread" operator is a use of the ... operator. There is another use too.
    type Person = {
      name: string;
      job: string;
      office: string;
      age: number;
    };
    const person: Person = {
      name: 'Rob',
      job: 'Developer',
      office: 'Woods',
      age: 23,
    };

    const updatedPerson: Person = { ...person, age: 24 };

    expect(person).toEqual({
      name: 'Rob',
      job: 'Developer',
      office: 'Woods',
      age: 23,
    });

    expect(updatedPerson).toEqual({
      name: 'Rob',
      job: 'Developer',
      office: 'Woods',
      age: 24,
    });
  });

  it('spreading on arrays', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const newNumbers = [0, ...numbers, 10];

    expect(newNumbers).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('using with (es2023)', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    //numbers[2] = 12; // Mutating! Probably a bad idea.
    // const newNumbers = numbers.filter((n) => (n === 3 ? 12 : n));

    // expect(newNumbers).toEqual([1, 2, 12, 4, 5, 6, 7, 8, 9]);

    const newNumbers2 = numbers.with(3, 12);
    expect(newNumbers2).toEqual([1, 2, 3, 12, 5, 6, 7, 8, 9]);
  });
});
