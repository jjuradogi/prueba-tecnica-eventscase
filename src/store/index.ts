import Vue from 'vue';
import Vuex, { Store } from 'vuex';

import { buildStoreModule } from './storeBuilder';

import { ITodoState } from './ToDo/itodo.state';

export interface StateInterface {
  todo: ITodoState;
}

Vue.use(Vuex);

export const store = new Vuex.Store<StateInterface>({});

export function generateStore(): Store<StateInterface> {
  buildStoreModule();

  return store;
}
