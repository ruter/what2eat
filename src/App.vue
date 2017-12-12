<template>
  <div id="app">
    <view-box ref="viewBox">
      <router-view></router-view>
      <tabbar>
        <tabbar-item selected link="/">
          <!--<img slot="icon" src="../assets/demo/icon_nav_button.png">-->
          <img slot="icon"
               src="./assets/rice.png"/>
          <span slot="label">吃什么</span>
        </tabbar-item>
        <tabbar-item link="/feed">
          <!--<img slot="icon" src="../assets/demo/icon_nav_msg.png">-->
          <img slot="icon"
               src="./assets/dog-food.png"/>
          <span slot="label">喂狗粮</span>
        </tabbar-item>
        <tabbar-item link="/donate">
          <!--<img slot="icon" src="../assets/demo/icon_nav_article.png">-->
          <img slot="icon"
               src="./assets/coffee.png"/>
          <span slot="label">赏一杯</span>
        </tabbar-item>
      </tabbar>
      <loading v-model="isLoading"></loading>
    </view-box>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, ViewBox, Loading } from 'vux';
  import { mapState } from 'vuex';

  export default {
    name: 'app',
    components: {
      Tabbar,
      TabbarItem,
      ViewBox,
      Loading,
    },
    computed: {
      ...mapState({
        isLoading: state => state.isLoading,
      }),
    },
  };
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  body {
    background-color: #fbf9fe;
  }
  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
  #app {
    height: 100%;
  }
  .eat-center {
    text-align: center;
  }
  .eat-logo {
    width: 64px;
    height: 64px;
    margin-top: 16px;
  }
</style>
