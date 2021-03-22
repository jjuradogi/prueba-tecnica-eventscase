import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: '',
    component: () => import(/* webpackChunkName: "about" */ '../layouts/App.layout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
