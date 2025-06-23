import { logMathOperation } from './logger';

export const divide = (a: number, b: number) => {
  const result = a / b;
  logMathOperation(result, 'A division has happened!');
  return result;
};
