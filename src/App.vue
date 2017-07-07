<template>
  <div>
    <div class="polidog">
      <div class="left js_left_flag">
      </div>
      <div class="right js_right_flag">
      </div>
    </div>
    <div class="buttons">
      <div class="item">
        <button class="js_left_button" @click.stop="moveFlag('left')">↑</button>
      </div>
      <div class="item">
        <button class="js_right_button" @click.stop="moveFlag('right')">↑</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    moveFlag (hand) {
      let buttunClass = '.js_' + hand + '_button'
      let button = document.querySelector(buttunClass)
      let flagClass = '.js_' + hand + '_flag'
      let flag = document.querySelector(flagClass)
      this.changeButton(button)
      this.changeFlag(flag)
    },
    changeButton (button) {
      if (button.classList.contains('raise')) {
        button.innerHTML = '↑'
        button.classList.remove('raise')
      } else {
        button.innerHTML = '↓'
        button.classList.add('raise')
      }
    },
    changeFlag (flag) {
      if (flag.classList.contains('raise')) {
        flag.classList.remove('raise')
      } else {
        flag.classList.add('raise')
      }
    }
  }
}
</script>

<style lang="scss">
  .polidog {
    overflow: hidden;
    width: 500px;
    margin: 0 auto;
    padding: 30px 0;

    .right,
    .left {
      width: 50%;
      float: left;
      height: 100px;
      background-color: #000;

      &.raise {
        background-color: #f00;
      }
    }
  }
  .buttons {
    overflow: hidden;
    width: 500px;
    margin: 0 auto;
    padding: 30px 0;

    .item {
      width: 50%;
      float: left;
    }
  }
</style>
