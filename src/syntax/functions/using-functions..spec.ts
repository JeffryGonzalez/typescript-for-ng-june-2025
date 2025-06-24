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
const arrayItTest = it.extend({
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
});
describe('array methods', () => {
  arrayItTest('forEach', ({ numbers }) => {
    // numbers.forEach((e, i, c) => {
    //   console.log({ e, i, c });
    // });
    numbers.forEach((n, idx, theWholeArray) =>
      console.log(
        `Got some number! ${n} lives t numbers[${idx}] ${theWholeArray}`,
      ),
    );
  });

  arrayItTest('map', ({ numbers }) => {
    // map is how you get from a => b
    const doubled = numbers.map((a) => a + a);

    expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
    expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    console.log(numbers.map((n) => 'bird!' + n));
  });

  arrayItTest('filter', ({ numbers }) => {
    const evens = numbers.filter(someOfThem).map((d) => d * 2);

    console.log(evens);
  });

  arrayItTest('reduce', ({ numbers }) => {});
});

describe('bowling scores', () => {
  it('reduce example', () => {
    // Given a night of bowling with the Gonzalez family...
    const bowlingScores = [
      { player: 'Jeff', score: 154 },
      { player: 'Stacey', score: 187 },
      { player: 'Henry', score: 133 },
      { player: 'Violet', score: 133 },
    ];

    // We want to derive from this a "GameResults" object that contains the winners, high score, losers, and low score.
    type GameResults = {
      winners: string[];
      highScore: number;
      lowScore: number;
      losers: string[];
    };

    // We create an initial value for the accumulator of the reduce function - there are no winners or losers yet, and the high score is the lowest possible, and the low score is the highest possible.
    const initialResults: GameResults = {
      winners: [],
      highScore: -1, // The high score in bowling is 300.
      lowScore: 301, // The low score in bowling is 0.
      losers: [],
    };

    const results = bowlingScores.reduce((acc, curr) => {
      // We have a new high score! - or a tie.
      if (curr.score > acc.highScore) {
        acc.highScore = curr.score;
        acc.winners = [curr.player];
      } else if (curr.score === acc.highScore) {
        // if it is a tie, just add the player to the list of winners.
        acc.winners.push(curr.player);
      }

      // We have a new low score! - or a tie.
      if (curr.score < acc.lowScore) {
        acc.lowScore = curr.score;
        acc.losers = [curr.player];
      } else if (curr.score === acc.lowScore) {
        // if they are tied, just add the player to the list of losers.
        acc.losers.push(curr.player);
      }

      return acc;
    }, initialResults);

    expect(results.winners).toEqual(['Stacey']);
    expect(results.highScore).toBe(187);
    expect(results.losers).toEqual(['Henry', 'Violet']);
    expect(results.lowScore).toBe(133);
  });
});

function allOfThem() {
  return true;
}
function isEven(n: number) {
  return n % 2 === 0;
}

function someOfThem(n: number, i: number) {
  return isEven(n) && i < 5;
}
