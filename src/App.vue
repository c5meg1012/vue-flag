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
      :question="question"
      :message="message">
    </messages>
    <start-button
      :isStarted="isStarted"
      @startGame="startGame">
    </start-button>
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
          right: -1
        },
        question: undefined,
        colorText: { red: 'あか', white: 'しろ' },
        movementText: {
          raise: ['あげて！', 'さげないで！'],
          lower: ['さげて！', 'あげないで！']
        },
        message: {
          isCorrect: undefined,
          correctAnswerCount: undefined
        }
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
        this.updateQuestion()
      },
      endGame () {
        if (this.count >= 10) {
          let correctAnswerCountToDisplay = this.correctAnswerCount
          this.message.correctAnswerCount = '10問中' + correctAnswerCountToDisplay + '問正解でした！'
          this.initialize()
        }
      },
      updateData (hand) {
        this.incrementCount()
        this.setFlagState(hand)
        this.checkAnswer()
        if (this.count < 10) {
          this.updateQuestion()
        }
      },
      incrementCount () {
        this.count += 1
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
        let answerJson = JSON.stringify(this.answer)
        let flagStateJson = JSON.stringify(this.flagState)
        if (answerJson === flagStateJson) {
          this.message.isCorrect = '正解！(｀・ω・´)'
          this.correctAnswerCount += 1
        } else {
          this.message.isCorrect = '不正解...(´・ω・｀)'
        }
      },
      updateQuestion () {
        let flagColor = this.createAnswer()
        this.question = this.createQuestion(flagColor)
      },
      createAnswer () {
        const array = [0, 1, 2]
        let random = array[Math.floor(Math.random() * array.length)]
        switch (random) {
          case 0:
            this.answer.left = this.flagState.left * -1
            this.answer.right = this.flagState.right
            return 1
          case 1:
            this.answer.left = this.flagState.left
            this.answer.right = this.flagState.right * -1
            return 0
          case 2:
            this.answer.left = this.flagState.left
            this.answer.right = this.flagState.right
            const array2 = [0, 1]
            let random2 = array2[Math.floor(Math.random() * array2.length)]
            return random2
        }
      },
      createQuestion (flagColor) {
        let answerType = this.classifyAnswer()
        let createQuestionText = this.createQuestionText(answerType, flagColor)
        return createQuestionText
      },
      classifyAnswer () {
        let answerType
        if (this.answer.left === 1) {
          answerType = this.answer.right === 1 ? 0 : 1
        } else {
          answerType = this.answer.right === 1 ? 2 : 3
        }
        return answerType
      },
      createQuestionText (answerType, flagColor) {
        let questionText = flagColor === 0 ? this.colorText.red : this.colorText.white
        let array = [0, 1]
        let feint = array[Math.floor(Math.random() * array.length)]
        switch (answerType) {
          case 0:
            questionText += this.movementText.raise[feint]
            break
          case 1:
            questionText += flagColor === 0 ? this.movementText.lower[feint] : this.movementText.raise[feint]
            break
          case 2:
            questionText += flagColor === 0 ? this.movementText.raise[feint] : this.movementText.lower[feint]
            break
          case 3:
            questionText += this.movementText.lower[feint]
            break
        }
        return questionText
      },
      stopWatch () {
        if (this.isStarted) {
          this.time.start = new Date()
          this.time.measuring = setInterval(this.displayTime, 1)
        }
        if (!this.isStarted) {
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
