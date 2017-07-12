<template>
  <div>
    <div class="polidog">
      <div class="right js_right_flag">
      </div>
      <div class="left js_left_flag">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'polidog'
    // methods: {
    //   moveFlag (hand) {
    //     let buttunClass = '.js_' + hand + '_button'
    //     let button = document.querySelector(buttunClass)
    //     let flagClass = '.js_' + hand + '_flag'
    //     let flag = document.querySelector(flagClass)
    //     this.changeButton(button)
    //     this.changeFlag(flag)
    //   },
    //   changeButton (button) {
    //     if (button.classList.contains('raise')) {
    //       button.innerHTML = '↑'
    //       button.classList.remove('raise')
    //     } else {
    //       button.innerHTML = '↓'
    //       button.classList.add('raise')
    //     }
    //   },
    //   changeFlag (flag) {
    //     if (flag.classList.contains('raise')) {
    //       flag.classList.remove('raise')
    //     } else {
    //       flag.classList.add('raise')
    //     }
    //   }
    // }
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
      height: 0;
      padding-top: 315px;
    }

    .right {
      background-image: url('../../static/img/polidog_flag_right.png');
      background-repeat: no-repeat;
      background-position: 2px center;
      background-size: cover;

      &.raise {
        background-image: url('../../static/img/polidog_flag_raise_right.png');
        background-position: 0 center;
      }
    }

    .left {
      background-image: url('../../static/img/polidog_flag_left.png');
      background-repeat: no-repeat;
      background-size: cover;

      &.raise {
        background-image: url('../../static/img/polidog_flag_raise_left.png');
      }
    }
  }
</style>
