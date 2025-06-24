// a "Results" type is a way to say a method/function etc.
// returns either a value if it succeeds or an error (failure) if it doesn't.

export type Failure<E = unknown> = {
  _type: 'Failure';
  error: E;
};

export type Success<T = void> = {
  _type: 'Success';
  value: T;
};

export type Results<T = void, E = unknown> = Success<T> | Failure<E>;

export function succeeded<T = void>(value: T): Success<T> {
  return {
    _type: 'Success',
    value: value,
  };
}

export function failed<E = unknown>(error: E): Failure<E> {
  return {
    _type: 'Failure',
    error,
  };
}

export function isSuccess<T, E = unknown>(
  result: Results<T, E>,
): result is Success<T> {
  return result._type === 'Success';
}

export function isFailure<T, E = unknown>(
  result: Results<T, E>,
): result is Failure<E> {
  return result._type === 'Failure';
}
