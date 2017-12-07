<template>
  <div>
    <div class="eat-center">
      <img class="eat-logo" src="../assets/dog-food.png"/>
    </div>

    <divider>喂作者一波狗粮</divider>

    <group label-width="5em" label-margin-right="1em" label-align="right">
      <!--<x-input title="昵称" v-model="name" placeholder="请填写您的ID"></x-input>-->
      <x-input title="邮箱" v-model="email" placeholder="请填写您的邮箱"></x-input>
      <x-textarea title="反馈意见" v-model="content"
                  :show-counter="true" :autosize="true" :rows="8"
                  placeholder="请留下您的宝贵意见..."></x-textarea>
    </group>

    <div v-transfer-dom>
      <loading :show="isLoading" text="加载中..."></loading>
    </div>

    <toast v-model="isToast" :type="toastType">{{ toastText }}</toast>

    <x-button type="primary" :show-loading="isSubmit" action-type="button" @click.native="handleSubmitFeed">提交</x-button>
  </div>
</template>

<script>
  import { Divider, Group, XButton, XInput, XTextarea, Loading, Toast, TransferDomDirective as TransferDom } from 'vux';
  import AV from '../utils/leancloud';


  class Feedback extends AV.Object {}
  AV.Object.register(Feedback);

  export default {
    name: 'Feed',
    directives: {
      TransferDom,
    },
    components: {
      Divider,
      Group,
      XButton,
      XInput,
      XTextarea,
      Loading,
      Toast,
    },
    data() {
      return {
        email: '',
        content: '',
        isSubmit: false,
        isLoading: false,
        isToast: false,
        toastType: 'success',
        toastText: '提交成功',
      };
    },
    methods: {
      handleSubmitFeed() {
        this.isSubmit = true;
        this.isLoading = true;
        new Feedback().save({
          email: this.email,
          content: this.content,
        }).then(() => {
          this.isSubmit = false;
          this.isLoading = false;
          this.toastType = 'success';
          this.toastText = '提交成功';
          this.isToast = true;
        }).catch(() => {
          this.isSubmit = false;
          this.isLoading = false;
          this.toastType = 'cancel';
          this.toastText = '提交失败';
          this.isToast = true;
        });
      },
    },
    created() {
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  width: 88% !important;
  margin-top: 8px;
}
</style>
