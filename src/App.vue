<template>
  <div>
    <polidog
      :flagState="flagState">
    </polidog>
    <buttons
      :flagState="flagState"
      :isStarted="isStarted"
      :count="count"
      @updateData="updateData">
    </buttons>
    <messages
      :time="time"
      :message="message">
    </messages>
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
  import Messages from './components/Messages'
  import StartButton from './components/StartButton'

  export default {
    name: 'app',
    components: {
      Polidog,
      Buttons,
      Messages,
      StartButton
    },
    data () {
      return {
        isStarted: false,
        time: {
          start: undefined,
          record: undefined,
          measuring: undefined
        },
        count: 0,
        correctAnswerCount: 0,
        flagState: {
          left: -1,
          right: -1
        },
        answer: {
          left: -1,
          right: -1,
          type: 3
        },
        message: undefined
      }
    },
    methods: {
      initialize () {
        this.isStarted = false
        this.count = 0
        this.correctAnswerCount = 0
        this.flagState.right = -1
        this.flagState.left = -1
        this.answer.right = -1
        this.answer.left = -1
      },
      startGame () {
        this.isStarted = true
        this.createAnswer()
      },
      endGame () {
        if (this.count >= 10) {
          let correctAnswerCountToDisplay = this.correctAnswerCount
          this.message = '10問中' + correctAnswerCountToDisplay + '問正解でした！'
          this.initialize()
        }
      },
      updateData (hand) {
        this.setFlagState(hand)
        this.checkAnswer()
        this.createAnswer()
        this.classifyAnswer()
        this.incrementCount()
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
      },
      checkAnswer () {
        let nowAnswer = Object.assign({}, {left: this.answer.left, right: this.answer.right})
        let answerJson = JSON.stringify(nowAnswer)
        let flagStateJson = JSON.stringify(this.flagState)
        if (answerJson === flagStateJson) {
          this.message = '正解'
          this.correctAnswerCount += 1
        } else {
          this.message = '不正解'
        }
      },
      createAnswer () {
        const ary = [0, 1, 2]
        let random = ary[Math.floor(Math.random() * ary.length)]

        switch (random) {
          case 0:
            this.answer.left = this.flagState.left * -1
            this.answer.right = this.flagState.right
            console.log('Q:left ' + this.answer.left)
            console.log('Q:right ' + this.answer.right)
            break
          case 1:
            this.answer.left = this.flagState.left
            this.answer.right = this.flagState.right * -1
            console.log('Q:left ' + this.answer.left)
            console.log('Q:right ' + this.answer.right)
            break
          case 2:
            this.answer.left = this.flagState.left
            this.answer.right = this.flagState.right
            console.log('Q:left ' + this.answer.left)
            console.log('Q:right ' + this.answer.right)
            break
        }
      },
      classifyAnswer () {
        switch (this.answer.left) {
          case 1:
            if (this.answer.right === 1) {
              this.answer.type = 0
            } else {
              this.answer.type = 1
            }
            break
          case -1:
            if (this.answer.right === 1) {
              this.answer.type = 2
            } else {
              this.answer.type = 3
            }
            break
        }
      },
      // createQuestion () {
      // },
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
        this.time.record = hour + '時間' + minute + '分' + second + '秒' + msecond
      }
    },
    watch: {
      count: 'endGame',
      isStarted: 'stopWatch'
    }
  }
</script>
