import { expect, describe, it } from 'vitest';
import {
  isNone,
  isSome,
  mapOption,
  none,
  Option,
  optionalCatch,
  some,
  unwrapOr,
} from '../../../shared/utils/options';

describe('The Options type', () => {
  it('walk through', () => {
    const user = getUserById(2);

    mapOption(user, (u) => {
      console.log(u.name);
    });

    // if the option is none, return this object instead.
    const defaultUser = unwrapOr(getUserById(3), {
      id: -1,
      name: 'Uknown',
    });

    const triedIt = optionalCatch(() => isOldEnough(25));
    if (isSome(triedIt)) {
      expect(triedIt.value).toBe(true);
      console.log('Tried it and it worked', triedIt.value);
    }

    if (isNone(triedIt)) {
      // look, ma! no exceptions
      console.log('tried it and got an error');
    }

    expect(defaultUser.name).toBe('Uknown');

    if (isSome(user)) {
      expect(user.value.name).toBe('Bob Smith');
    }

    if (isNone(user)) {
      console.log('No User Found');
    }
  });
});

type UserLookedUp = { id: number; name: string };

// when you call this, you are going to get a user or nothing.
function getUserById(id: number): Option<UserLookedUp> {
  // make an api call, see if it is there, if it isn't,
  // what do you return?
  if (id % 2 === 0) {
    return some({
      id,
      name: 'Bob Smith',
    });
  } else {
    return none;
  }
}

function isOldEnough(age: number) {
  if (age < 14) throw Error('Too Young');
  return true;
}
