export type PositiveInteger<T extends number> = `${T}` extends
  | `-${string}` // '-3'
  | `${string}.${string}` // 3.33
  | '0' // 0
  ? never
  : T;
