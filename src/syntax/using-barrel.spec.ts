import { expect, test } from 'vitest';
import { add, divide, subtract } from './math';

test('doing some math', () => {
  expect(add(2, 2)).toBe(4);

  expect(subtract(10, 2)).toBe(8);

  expect(divide(10, 2)).toBe(5);
});
