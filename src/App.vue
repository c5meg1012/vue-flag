<template>
  <div>
    <polidog
      :flagState="flagState">
    </polidog>
    <buttons
      :flagState="flagState"
      :count="count"
      @setFlagState="setFlagState"
      @incrementCount="incrementCount">
    </buttons>
    <div>{{flagState.right}}</div>
    <div>{{flagState.left}}</div>
    <div>{{count}}</div>
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
        count: 0
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
      incrementCount () {
        this.count += 1
      }
    }
  }
</script>
