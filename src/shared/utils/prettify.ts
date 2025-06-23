/**
 *  Utility type to ensure that the resulting object is a "prettified" version
 */

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
