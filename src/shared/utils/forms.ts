import { FormControl, FormGroup } from '@angular/forms';
import { Prettify } from './prettify';

export type FormGroupType<T> = {
  [K in keyof T]: T[K] extends object
    ? FormGroup<Prettify<FormGroupType<T[K]>>>
    : FormControl<T[K]>;
};

/* This is a recursive type that converts a type T into a FormGroup type.
 * If T has properties that are objects, it will create a FormGroup for those properties.
 * If T has properties that are not objects, it will create a FormControl for those properties.
 * The Prettify type is used to ensure that the resulting object is a "prettified" version,
 * meaning that it has no excess properties and is easier to read.
 * This is useful for creating strongly typed forms in Angular.
 */
export function createFormGroup<T>(model: T): FormGroup<FormGroupType<T>> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const group: any = {};
  for (const key in model) {
    if (typeof model[key] === 'object' && model[key] !== null) {
      group[key] = createFormGroup(model[key]);
    } else {
      group[key] = new FormControl(model[key]);
    }
  }
  return new FormGroup(group);
}
