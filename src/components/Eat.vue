<template>
  <div>
    <div class="eat-center">
      <img class="eat-logo" :src="cuisine ? cuisine.icon : require('../assets/groceries.png')"/>
    </div>

    <divider>{{ cuisine ? `吃${cuisine.label}` : '随便吃' }}</divider>

    <div v-transfer-dom>
      <x-dialog v-model="show" class="dialog-demo">
        <div class="img-box">
          <img src="../assets/egg.png" style="max-width:100%">
        </div>
        <divider>吃个蛋</divider>
        <div @click="show=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>
  </div>
</template>

<script>
  import { Divider, XDialog, TransferDomDirective as TransferDom } from 'vux';

  export default {
    name: 'Eat',
    directives: {
      TransferDom,
    },
    components: {
      Divider,
      XDialog,
    },
    data() {
      return {
        show: true,
        cuisine: this.getCuisine(),
      };
    },
    methods: {
      getCuisine() {
        return this.$store.state.cuisine.filter(item => item.link === this.$route.params.cuisine)[0];
      },
    },
    created() {

    },
  };
</script>

<style scoped>
    .img-box {
      height: 180px;
      overflow: hidden;
    }
    .img-box img {
      transform: translate(0, 100%);
    }
    .vux-close {
      margin-top: 8px;
      margin-bottom: 8px;
      position: relative;
      display: inline-block;
      vertical-align: middle;
      color: #999;
      width: 24px;
      height: 24px;
    }
    .vux-close:before, .vux-close:after {
      content: '';
      position: absolute;
      left: 0;
      top: 11px;
      width: 24px;
      height: 1px;
      background-color: currentColor;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
    .vux-close:after {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }
</style>
