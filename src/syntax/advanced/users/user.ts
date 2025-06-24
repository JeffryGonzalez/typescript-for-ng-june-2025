import { Brand } from '../../../shared/utils/brands';

// This is our "Domain" type. This represents a user in our system.
type User = {
  id: string;
  name: string;
  email: string;
  age: number;
};

export type UserCreate = Pick<User, 'name' | 'email' | 'age'>;

type ValidatedUser = Brand<UserCreate, 'validated-user'>;

export function validateUser(userToCreate: UserCreate): ValidatedUser {
  if (userToCreate.name.trim().length < 4) {
    throw new Error('Bad User Name - needs blah blah blah');
  }
  if (userToCreate.age < 14) {
    throw new Error('Buzz off kid');
  }
  return userToCreate as ValidatedUser;
}

export function saveUser(user: ValidatedUser) {
  // todo
  // call the api, send the stuff, get back the generated props (id)
}
