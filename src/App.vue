<template>
  <div>
    <polidog
      :flagState="flagState">
    </polidog>
    <buttons
      :flagState="flagState"
      :isStarted="isStarted"
      :count="count"
      @setFlagState="setFlagState"
      @incrementCount="incrementCount">
    </buttons>
    <div id="time" class="time">{{time.record}}</div>
    <start-button
      :isStarted="isStarted"
      @startGame="startGame">
    </start-button>
    <div>{{flagState.right}}</div>
    <div>{{flagState.left}}</div>
  </div>
</template>

<script>
  import Polidog from './components/Polidog'
  import Buttons from './components/Buttons'
  import StartButton from './components/StartButton'

  export default {
    name: 'app',
    components: {
      Polidog,
      Buttons,
      StartButton
    },
    data () {
      return {
        flagState: {
          left: -1,
          right: -1
        },
        isStarted: false,
        count: 0,
        time: {
          start: undefined,
          record: undefined,
          measuring: undefined
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
      startGame () {
        this.isStarted = true
      },
      endGame () {
        if (this.count >= 10) {
          this.isStarted = false
          this.count = 0
        }
      },
      incrementCount () {
        this.count += 1
      },
      stopWatch () {
        if (this.isStarted === true) {
          this.time.start = new Date()
          this.time.measuring = setInterval(this.displayTime, 1)
        }
        if (this.isStarted === false) {
          this.displayTime()
          clearInterval(this.time.measuring)
        }
      },
      displayTime () {
        let stop = new Date()
        let allTime = stop.getTime() - this.time.start.getTime()
        let hour = Math.floor(allTime / (60 * 60 * 1000))
        allTime = allTime - (hour * 60 * 60 * 1000)
        let minute = Math.floor(allTime / (60 * 1000))
        allTime = allTime - (minute * 60 * 1000)
        let second = Math.floor(allTime / 1000)
        let msecond = allTime % 1000
        this.time.record = hour + ':' + minute + ':' + second + ':' + msecond
      }
    },
    watch: {
      count: 'endGame',
      isStarted: 'stopWatch'
    }
  }
</script>

<style lang="scss">
  .time {
    width: 315px;
    text-align: center;
    margin: 0 auto 30px;
  }
</style>
