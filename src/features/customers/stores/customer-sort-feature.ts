import {
  patchState,
  signalStoreFeature,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';

import { CustomerApiItem } from '../services/customer-api';
const SORT_KEYS: (keyof Pick<
  CustomerApiItem,
  'name' | 'company' | 'lastContacted'
>)[] = ['lastContacted', 'company', 'name'];

export type SortKeys = (typeof SORT_KEYS)[number];

export function withCustomerSorting() {
  return signalStoreFeature(
    withProps(() => {
      return {
        sortingOptions: SORT_KEYS,
      };
    }),
    withState({
      sortBy: 'lastContacted' as SortKeys,
    }),
    withMethods((store) => {
      return {
        setSortBy: (sortBy: SortKeys) => patchState(store, { sortBy }),
      };
    }),
  );
}
