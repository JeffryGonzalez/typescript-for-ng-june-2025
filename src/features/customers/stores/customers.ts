import { patchState, signalStore, withHooks, withMethods } from '@ngrx/signals';
import { setEntities, withEntities } from '@ngrx/signals/entities';
import { CustomerApiItem, CustomersApi } from '../services/customer-api';
import { inject } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { exhaustMap, tap } from 'rxjs';

export const CustomersStore = signalStore(
  withEntities<CustomerApiItem>(),
  withMethods((store) => {
    const service = inject(CustomersApi);
    return {
      _load: rxMethod<void>(
        exhaustMap(() =>
          service
            .getCustomers()
            .pipe(
              tap((customers) => patchState(store, setEntities(customers))),
            ),
        ),
      ),
    };
  }),
  withHooks({
    onInit(store) {
      store._load();
      console.log('The customers store was created!');
    },
    onDestroy(store) {
      // put code here to clean up when / if this store is removed
      console.log('The customers store was destroyed');
    },
  }),
);
