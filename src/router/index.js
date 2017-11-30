/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        title: '吃什么'
      },
      component: (resolve) => require(['@/components/Home'], resolve)
    },
    {
      path: '/feed',
      name: 'Feed',
      meta: {
        title: '喂狗粮'
      },
      component: (resolve) => require(['@/components/Feed'], resolve)
    },
    {
      path: '/donate',
      name: 'Donate',
      meta: {
        title: '赏一杯'
      },
      component: (resolve) => require(['@/components/Donate'], resolve)
    },
  ],
});
