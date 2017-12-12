/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cuisine: [
      { label: '中餐', icon: require('../assets/rice.png'), link: 'Chinese' },
      { label: '西餐', icon: require('../assets/steak.png'), link: 'Western' },
      { label: '日料', icon: require('../assets/sushi.png'), link: 'Japanese' },
      { label: '快餐', icon: require('../assets/fast-food.png'), link: 'fast' },
      { label: '甜品', icon: require('../assets/cake.png'), link: 'dessert' },
      { label: '小吃', icon: require('../assets/barbecue.png'), link: 'snack' }
    ],
    isLoading: false
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    }
  }
});
