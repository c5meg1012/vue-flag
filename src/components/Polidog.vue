<template>
  <div>
    <div class="polidog">
      <div class="right">
        <img v-if="rightFlagState === 1" src="../../static/img/polidog_flag_raise_right.png">
        <img v-else src="../../static/img/polidog_flag_right.png">
      </div>
      <div class="left">
        <img v-if="leftFlagState === 1" src="../../static/img/polidog_flag_raise_left.png">
        <img v-else src="../../static/img/polidog_flag_left.png">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'polidog',
    props: {
      leftFlagState: Number,
      rightFlagState: Number
    }
  }
</script>

<style lang="scss">
  .polidog {
    overflow: hidden;
    width: 315px;
    height: 315px;
    margin: 0 auto;
    padding: 30px 0;

    .right,
    .left {
      width: 50%;
      float: left;
    }

    img {
      display: block;
      width: 100%;
    }
  }
</style>
