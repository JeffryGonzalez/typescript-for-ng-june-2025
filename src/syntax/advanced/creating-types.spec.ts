import { describe, it, expect } from 'vitest';
import { PositiveInteger } from '../../shared/utils/positive-number';

describe('creating types', () => {
  it('using types to do stuff', () => {
    // -3 => '-3'

    function addToCart<T extends number>(
      what: string,
      qty: PositiveInteger<T>,
    ) {
      if (qty <= 0) {
        // -32.33
        throw Error('Quantity is bad');
      }
    }

    addToCart('beer', 3);
    addToCart('eggs', 12);
    addToCart('chips', 18);
  });
});
