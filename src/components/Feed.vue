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
    <x-button type="primary" :show-loading="isSubmit" action-type="button" @click.native="handleSubmitFeed">提交</x-button>
  </div>
</template>

<script>
  import { Divider, Group, XButton, XInput, XTextarea } from 'vux';

  export default {
    name: 'Feed',
    components: {
      Divider,
      Group,
      XButton,
      XInput,
      XTextarea,
    },
    data() {
      return {
        email: '',
        content: '',
        isSubmit: false,
      };
    },
    methods: {
      handleSubmitFeed() {
        this.isSubmit = true;
      },
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
