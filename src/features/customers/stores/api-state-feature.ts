import { computed } from '@angular/core';
import { signalStoreFeature, withComputed, withState } from '@ngrx/signals';

type ApiState = {
  loaded: boolean;
};
export function withApiState() {
  return signalStoreFeature(
    withState<ApiState>({
      loaded: false,
    }),
    withComputed((store) => {
      return {
        isLoaded: computed(() => store.loaded()),
      };
    }),
  );
}

export function setIsLoaded(): ApiState {
  return {
    loaded: true,
  };
}
