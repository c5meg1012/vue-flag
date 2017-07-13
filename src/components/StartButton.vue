<template>
  <div class="startbutton">
    <button class="start" @click.stop="startGame()" v-bind:disabled="isStarted">
      START！
    </button>
  </div>
</template>

<script>
  export default {
    name: 'start-button',
    props: {
      isStarted: Boolean
    },
    methods: {
      startGame () {
        this.$emit('startGame')
      }
    }
  }
</script>

<style lang="scss">
  .startbutton {
    width: 315px;
    margin: 0 auto;

    button {
      cursor: pointer;
      display: block;
      width: 100%;
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
      border-radius: 4px;
      background-color: #005d0c;
      border: 0;
      color: #fff;

      &:hover {
        opacity: .7;
        transition: .3s;
      }

      &:disabled {
        background-color: #001f04;
        color: #005d0c;
      }

      &:disabled:hover {
        opacity: 1;
      }
    }
  }
</style>
