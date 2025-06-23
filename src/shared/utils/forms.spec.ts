/* eslint-disable @typescript-eslint/no-unused-vars */
import { describe, expect, it } from 'vitest';
import { createFormGroup, FormGroupType } from './forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
describe('Forms', () => {
  it('FormGroupType', () => {
    // No expects in this test, just type checking. Change or add types to the Signup type to see if it works.
    type Signup = {
      name: string;
      email: string;
      nickName: string | null; // doesn't like optional types. those stink anyhow.
      auth: {
        password: string;
        confirmPassword: string;
      };
    };

    type SignupForm = FormGroupType<Signup>;

    const form = new FormGroup<SignupForm>({
      name: new FormControl<string>('', { nonNullable: true }),
      email: new FormControl<string>('', { nonNullable: true }),
      nickName: new FormControl<string | null>(null),
      auth: new FormGroup({
        password: new FormControl<string>('', { nonNullable: true }),
        confirmPassword: new FormControl<string>('', { nonNullable: true }),
      }),
    });
  });
  it('createFormGroup', () => {
    // This is an alternative way to create a form group.
    type Signup = {
      name: string;
      email: string;
      nickName: string | null; // doesn't like optional types. those stink anyhow.
      auth: {
        password: string;
        confirmPassword: string;
      };
    };
    const initial: Signup = {
      name: 'Joe Schmidt',
      email: '',
      nickName: null,
      auth: {
        password: '',
        confirmPassword: '',
      },
    };
    const form = createFormGroup(initial);
    expect(form.controls.name.value).toBe('Joe Schmidt');
    form.controls.email.addValidators([Validators.email]);
    form.controls.email.setValue('bozo');
    expect(form.controls.email.valid).toBe(false);
    form.controls.email.setValue('bozo@aol.com');
    expect(form.controls.email.valid).toBe(true);
  });
});
