<template>
  <div>
    <grid>
      <grid-item label="随便吃点什么">
        <img slot="icon" src="../assets/groceries.png"/>
      </grid-item>
    </grid>
    <grid :cols="2">
      <grid-item label="中餐">
        <img slot="icon" src="../assets/rice.png"/>
      </grid-item>
      <grid-item label="西餐">
        <img slot="icon" src="../assets/steak.png"/>
      </grid-item>
      <grid-item label="日料">
        <img slot="icon" src="../assets/sushi.png"/>
      </grid-item>
      <grid-item label="快餐">
        <img slot="icon" src="../assets/fast-food.png"/>
      </grid-item>
      <grid-item label="甜品">
        <img slot="icon" src="../assets/cake.png"/>
      </grid-item>
      <grid-item label="小吃">
        <img slot="icon" src="../assets/barbecue.png"/>
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
