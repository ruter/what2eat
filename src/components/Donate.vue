<template>
  <div>
    <div class="eat-center">
      <img class="eat-logo" src="../assets/coffee-cup.png"/>
    </div>

    <divider>打赏作者一杯饮料</divider>

    <div class="eat-center">
      <img class="eat-donate" src="../assets/donate.jpg" alt="赏一杯"/>
      <p class="eat-thanks">感谢您的打赏，「吃什么」将持续为您解决烦恼。</p>
    </div>
  </div>
</template>

<script>
import { Divider } from 'vux';

export default {
  components: {
    Divider,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
  .eat-donate {
    width: 100%;
  }
  .eat-thanks {
    color: #999;
    font-size: 12px;
  }
</style>
