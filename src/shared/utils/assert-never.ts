export function assertNever(value: never): never {
  throw new Error('Unhandled Switch Branch');
}
