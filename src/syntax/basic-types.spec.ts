/* eslint-disable @typescript-eslint/no-unused-vars */
import { describe, it, expect, test } from 'vitest';
import { myInfo, performanceEvals } from './data';
import birdSnoot, { subtract as sub } from './utils';

test('Can use the toSorted Thing', () => {
  const numbers = [10, 20, 19, 3, 12, 108, 1];

  const newNumbers = numbers.toSorted();

  expect(newNumbers).toEqual([1, 10, 108, 12, 19, 20, 3]);
});

test('let vs. const', () => {
  // do something with the performanceEvals

  performanceEvals.forEach((e) => console.log(e));

  // get the myInfo thingy and do stuff with it.
  // myInfo = {
  //   name: 'Jeffry',
  //   job: 'Walmart Greeter'
  // };
  //   myInfo.name = 'Jeffry';
  expect(birdSnoot(22, 10)).toBe(32);
  expect(sub(10, 2)).toBe(8);
});
