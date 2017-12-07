<template>
  <div>
    <grid>
      <grid-item label="随便吃点什么" link="/eat">
        <img slot="icon" src="../assets/groceries.png"/>
      </grid-item>
    </grid>
    <grid :cols="2">
      <grid-item v-for="item in $store.state.cuisine" :label="item.label" :link="'/eat/' + item.link" :key="item.link">
        <img slot="icon" :src="item.icon"/>
      </grid-item>
    </grid>
  </div>
</template>

<script>
  import { Grid, GridItem } from 'vux';

  export default {
    name: 'Home',
    components: {
      Grid,
      GridItem,
    },
    data() {
      return {};
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
