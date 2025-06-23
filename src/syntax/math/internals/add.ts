import { logMathOperation } from './logger';

export function add(a: number, b: number) {
  const result = a + b;
  logMathOperation(result);
  return result;
}
