<template>
  <div>
    <polidog></polidog>
    <buttons></buttons>
  </div>
</template>

<script>
  import Polidog from './components/Polidog'
  import Buttons from './components/Buttons'

  export default {
    name: 'app',
    components: {
      Polidog,
      Buttons
    }
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
