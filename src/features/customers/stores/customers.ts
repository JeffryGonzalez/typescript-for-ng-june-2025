import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
} from '@ngrx/signals';
import { setEntities, withEntities } from '@ngrx/signals/entities';
import { CustomerApiItem, CustomersApi } from '../services/customer-api';
import { computed, inject } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { exhaustMap, tap } from 'rxjs';
import { setIsLoaded, withApiState } from './api-state-feature';
import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { withCustomerSorting } from './customer-sort-feature';

export const CustomersStore = signalStore(
  withDevtools('Customers'),
  withEntities<CustomerApiItem>(),
  withApiState(),
  withCustomerSorting(),
  withComputed((store) => {
    return {
      homeStats: computed(() => {
        const entities = store.entities();
        return {
          total: entities.length,
          outOfDate: entities.filter(({ lastContacted }) => {
            if (!lastContacted) return true;
            const lastContactedDate = new Date(lastContacted);
            const today = new Date(); // might want to change this to use the date-fns relative thing, but not now.
            const diffTime = today.getTime() - lastContactedDate.getTime();
            const diffDays = diffTime / (1000 * 3600 * 24);
            return diffDays > 14;
          }).length,
        };
      }),
    };
  }),
  withMethods((store) => {
    const service = inject(CustomersApi);
    return {
      _load: rxMethod<void>(
        exhaustMap(() =>
          service
            .getCustomers()
            .pipe(
              tap((customers) =>
                patchState(store, setEntities(customers), setIsLoaded()),
              ),
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
