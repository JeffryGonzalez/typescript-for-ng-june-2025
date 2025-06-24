import { describe, it, expect } from 'vitest';
import { saveUser, UserCreate, validateUser } from './user';
import { isFailure, isSuccess } from '../../../shared/utils/results';

// These have changed my life, man. Love it. Use it all the time
// IN SHARED CODE

describe('Working with Users', () => {
  it('creating, validating, saving users', () => {
    // in order to create a "User" in our system, you must:
    // note: this is a general pattern, just using "User" as an example.
    // create a user
    const userToCreate: UserCreate = {
      name: 'Jill Jones',
      age: 42,
      email: 'jill@aol.com',
    };
    // validate the user

    const validationResponse = validateUser(userToCreate);
    // then you can do things with the user (like save them), update them, etc.

    if (isSuccess(validationResponse)) {
      console.log(validationResponse);
     
      saveUser(validationResponse.value);
    }
    if (isFailure(validationResponse)) {
      console.log(validationResponse.error);
    }
  });
});
