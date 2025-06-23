// anything in a TS file is "private" to this file.
// it becomes a "module" when you export at least one thing.

export const performanceEvals = [3, 2, 4, 5, 5, 3] as const;

export const myInfo = {
  name: 'Jeff',
  job: 'Developer',
} as const;
