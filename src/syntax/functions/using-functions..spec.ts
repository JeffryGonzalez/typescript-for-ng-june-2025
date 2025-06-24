import { describe, it, expect } from 'vitest';

describe('Function Stuff', () => {
  it('Named Functions', () => {
    const result = add(2, 2);
    expect(result.result).toBe(4);

    function add(a: number, b: number) {
      return { a, b, result: a + b };
    }
  });

  it('arrow functions', () => {
    type MathOp = (a: number, b: number) => number;

    const add: MathOp = (a, b) => a + b;

    expect(add(10, 2)).toBe(12);

    const subtract: MathOp = (x, y) => {
      console.log('fixing to do some math here, folks!');
      return x + y;
    };

    // expect(subtract(20, 8)).toBe(12);

    function doMathButLogIt(
      messagPrefix: string,
      a: number,
      b: number,
      op: MathOp,
    ) {
      const result = op(a, b);
      console.log(`Just did some math: ${messagPrefix}: ${result}`);
      return result;
    }

    doMathButLogIt('are you sure?', 10, 12, add); // "higher ordered function" (a function that takes a function)
    doMathButLogIt('tacos', 8, 8, subtract);

    doMathButLogIt('bird', 100, 10, (a, b) => a * b);
  });
});
