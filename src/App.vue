<template>
  <div>
    <polidog
      :flagState="flagState">
    </polidog>
    <buttons
      :buttonState="buttonState"
      @setFlagState="setFlagState"
      @setButtonState="setButtonState">
    </buttons>
    <div>{{flagState.right}}</div>
    <div>{{flagState.left}}</div>
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
    },
    data () {
      return {
        flagState: {
          left: -1,
          right: -1
        },
        buttonState: {
          left: 1,
          right: 1
        }
      }
    },
    methods: {
      setFlagState (hand) {
        if (hand === 'left') {
          this.flagState.left *= -1
        } else {
          this.flagState.right *= -1
        }
      },
      setButtonState (hand) {
        if (hand === 'left') {
          this.buttonState.left *= -1
        } else {
          this.buttonState.right *= -1
        }
      }
    }
  }
</script>
