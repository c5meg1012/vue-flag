<template>
  <div>
    <div class="buttons">
      <div class="item">
        <button class="right" @click.stop="moveFlag('right')">
          <span v-if="rightButtonState === 1">↑</span>
          <span v-else>↓</span>
        </button>
      </div>
      <div class="item">
        <button class="left" @click.stop="moveFlag('left')">
          <span v-if="leftButtonState === 1">↑</span>
          <span v-else>↓</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'buttons',
    props: {
      leftButtonState: Number,
      rightButtonState: Number
    },
    methods: {
      moveFlag (hand) {
        this.$emit('setFlagState', hand)
        this.$emit('setButtonArrows', hand)
      }
    }
}
</script>

<style lang="scss">
  .buttons {
    overflow: hidden;
    width: 315px;
    margin: 0 auto;
    padding: 30px 0;

    .item {
      width: 50%;
      float: left;
      text-align: center;
    }

    button {
      cursor: pointer;
      outline: none;
      appearance: none;
      padding: 10px;
      line-height: 1;
      font-size: 24px;
      font-weight: 700;
      border-radius: 50%;
    }

    .right {
      background-color: #e20000;
      border: 2px solid #af0202;
      color: #fff;
    }

    .left {
      background-color: #fff;
      border: 2px solid #afafaf;
      color: #000;
    }
  }
</style>
