import Vue from 'vue';
import Vuex, { Store } from 'vuex';

import { buildStoreModule } from './storeBuilder';

export interface StateInterface {}

Vue.use(Vuex);

export const store = new Vuex.Store<StateInterface>({});

export function generateStore(): Store<StateInterface> {
  buildStoreModule();

  return store;
}
