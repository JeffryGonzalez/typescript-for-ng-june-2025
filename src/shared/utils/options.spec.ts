import { describe, expect, it } from 'vitest';
import { isSome, mapOption, none, some, unwrap, type Option } from './options';

describe('Options', () => {
  it('demo 1', () => {
    function isEven(num: number): Option<number> {
      if (num % 2 === 0) {
        return some(num);
      } else {
        return none;
      }
    }

    const result1 = isEven(4);
    //@ts-expect-error can't get to value until you check if it's Some
    expect(result1.value).toBe(4);

    switch (result1._type) {
      case 'Some':
        expect(result1.value).toBe(4);
        break;
      case 'None':
        throw new Error('Expected Some, but got None');
    }

    expect(isSome(result1)).toBe(true);
    expect(isSome(none)).toBe(false);

    if (isSome(result1)) {
      expect(result1.value).toBe(4);
    }

    expect(unwrap(result1)).toBe(4);

    mapOption(isEven(5), (x) =>
      expect.fail(`Expected None, but got Some with value ${x}`),
    );

    const doubledIfThere = mapOption(isEven(6), (x) => {
      expect(x).toBe(6);
      return x + x;
    });

    if (isSome(doubledIfThere)) {
      expect(doubledIfThere.value).toBe(12);
    }
  });
});
