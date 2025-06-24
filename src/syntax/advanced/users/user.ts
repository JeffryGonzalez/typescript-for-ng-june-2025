import { Brand } from '../../../shared/utils/brands';
import { failed, Results, succeeded } from '../../../shared/utils/results';

// This is our "Domain" type. This represents a user in our system.
type User = {
  id: string;
  name: string;
  email: string;
  age: number;
};

export type UserCreate = Pick<User, 'name' | 'email' | 'age'>;

type ValidatedUser = Brand<UserCreate, 'validated-user'>;

/*
{
  'name': 'Must be at least four letters',
  'age': 'Have to be at least 13',
  
}

{} - there are no errors

{
    name: 'Bad Name'
}
{
    age: 'Too Young'
}
{
    name: 'bad name',
    age: 'too young'    
}
*/

type ValidationErrors = Partial<Record<keyof UserCreate, string>>;
export function validateUser(
  userToCreate: UserCreate,
): Results<ValidatedUser, ValidationErrors> {
  const errors: ValidationErrors = {};
  let hasErrors = false;
  if (userToCreate.name.trim().length < 4) {
    hasErrors = true;
    errors.name = 'Name is too short';
  }
  if (userToCreate.age < 14) {
    // throw new Error('Buzz off kid');
    hasErrors = true;
    errors.age = 'Too Young';
  }
  if (hasErrors) {
    return failed(errors);
  }

  return succeeded(userToCreate as ValidatedUser);
}

export function saveUser(user: ValidatedUser) {
  // todo
  // call the api, send the stuff, get back the generated props (id)
}
