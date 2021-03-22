import 'reflect-metadata';
import Vue from 'vue';
import App from './App.vue';

import router from './router';

import { generateStore } from './store';

import buildDependencyContainer from './buildDependencyContainer';

class AppBootstrap {
  constructor() {
    this.loadDependencyContainer();
    this.loadApp();
  }

  loadDependencyContainer = (): void => {
    buildDependencyContainer();
  };

  loadApp = (): void => {
    Vue.config.productionTip = false;

    new Vue({
      router,
      store: generateStore(),
      render: h => h(App)
    }).$mount('#app');
  };
}

// eslint-disable-next-line
new AppBootstrap();
