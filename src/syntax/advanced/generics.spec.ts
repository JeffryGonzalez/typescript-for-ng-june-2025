import { describe, it, expect } from 'vitest';

describe('Generics', () => {
  it('intro', () => {
    const numbers = [12, 18, 32, 64];

    function head<TheKindOfArray>(nums: TheKindOfArray[]): TheKindOfArray {
      return nums[0];
    }

    const first = head(numbers);

    expect(first).toBe(12);

    const names = ['bruce', 'carl', 'jill'];

    const firstName = head(names);
    expect(firstName).toBe('bruce');
  });
});
