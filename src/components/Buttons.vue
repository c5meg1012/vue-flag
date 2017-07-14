<template>
  <div>
    <div class="buttons">
      <div class="item">
        <button class="right" @click.stop="moveFlag('right')" v-bind:disabled="!isStarted">
          <span v-if="flagState.right === -1">↑</span>
          <span v-else>↓</span>
        </button>
      </div>
      <div class="item">
        <button class="center" @click.stop="moveFlag('center')" v-bind:disabled="!isStarted">
          <span>Keep</span>
        </button>
      </div>
      <div class="item">
        <button class="left" @click.stop="moveFlag('left')" v-bind:disabled="!isStarted">
          <span v-if="flagState.left === -1">↑</span>
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
      flagState: Object,
      isStarted: Boolean,
      count: Number
    },
    methods: {
      moveFlag (hand) {
        this.$emit('setFlagState', hand)
        this.$emit('incrementCount')
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
      width: 33.33333%;
      float: left;
      text-align: center;
    }

    button {
      cursor: pointer;
      outline: none;
      -ms-progress-appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      padding: 10px;
      line-height: 1;
      font-size: 24px;
      font-weight: 700;
      border-radius: 50%;

      &:hover {
        opacity: .7;
        transition: .3s;
      }

      &:disabled:hover {
        opacity: 1;
      }
    }

    .right {
      background-color: #e20000;
      border: 2px solid #af0202;
      color: #fff;

      &:disabled {
        background-color: #af0202;
        border: 2px solid #6d0000;
        color: #6d0000;
      }
    }

    .left {
      background-color: #fff;
      border: 2px solid #afafaf;
      color: #000;

      &:disabled {
        background-color: #afafaf;
        border: 2px solid #8e8e8e;
        color: #8e8e8e;
      }
    }

    .center {
      background-color: #ec7373;
      border: 2px solid #bf5e5e;
      color: #fff;

      &:disabled {
        background-color: #ad5757;
        border: 2px solid #8e4646;
        color: #793d3d;
      }
    }
  }
</style>
