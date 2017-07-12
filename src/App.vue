<template>
  <div>
    <polidog
      :leftFlagState="leftFlagState"
      :rightFlagState="rightFlagState">
    </polidog>
    <buttons
      :leftButtonState="leftButtonState"
      :rightButtonState="rightButtonState"
      @setFlagState="setFlagState"
      @setButtonArrows="setButtonArrows">
    </buttons>
    <div>{{rightFlagState}}</div>
    <div>{{leftFlagState}}</div>
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
        leftFlagState: -1,
        rightFlagState: -1,
        leftButtonState: 1,
        rightButtonState: 1
      }
    },
    methods: {
      setFlagState (hand) {
        if (hand === 'left') {
          this.leftFlagState *= -1
        } else {
          this.rightFlagState *= -1
        }
      },
      setButtonArrows (hand) {
        if (hand === 'left') {
          this.leftButtonState *= -1
        } else {
          this.rightButtonState *= -1
        }
      }
    }
  }
</script>
