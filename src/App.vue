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
    <div>{{message}}</div>
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
        answer: {
          left: -1,
          right: -1
        },
        isStarted: false,
        count: 0,
        time: {
          start: undefined,
          record: undefined,
          measuring: undefined
        },
        message: undefined
      }
    },
    methods: {
      initialize () {
        this.isStarted = false
        this.count = 0
        this.flagState.right = -1
        this.flagState.left = -1
        this.answer.right = -1
        this.answer.left = -1
      },
      setFlagState (hand) {
        switch (hand) {
          case 'left':
            this.flagState.left *= -1
            break
          case 'right':
            this.flagState.right *= -1
            break
          case 'center':
            break
        }
        // 暫定
        this.checkAnswer()
        this.createAnswer()
      },
      startGame () {
        this.isStarted = true
        this.createAnswer()
      },
      endGame () {
        if (this.count >= 10) {
          this.initialize()
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
      },
      createAnswer () {
        const ary = [0, 1, 2]
        let random = ary[Math.floor(Math.random() * ary.length)]
        let nowFlagState = Object.assign({}, this.flagState)
        switch (random) {
          case 0:
            this.answer.left = nowFlagState.left * -1
            break
          case 1:
            this.answer.right = nowFlagState.right * -1
            break
          case 2:
            break
        }
        console.log('left' + this.answer.left)
        console.log('right' + this.answer.right)
      },
      checkAnswer () {
        let answerJson = JSON.stringify(this.answer)
        let flagStateJson = JSON.stringify(this.flagState)
        if (answerJson === flagStateJson) {
          this.message = '正解'
        } else {
          this.message = '不正解'
        }
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
