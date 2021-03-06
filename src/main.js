// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import App from './App';
import store from './store';
import router from './router';


FastClick.attach(document.body);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  store.commit('updateLoadingStatus', { isLoading: true });
  next();
});

router.afterEach(() => {
  store.commit('updateLoadingStatus', { isLoading: false });
});

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app-box');
