<template>
  <div>
    <div class="message">{{question}}</div>
    <div class="message">{{message.isCorrect}}</div>
    <div class="message">{{message.correctAnswerCount}}</div>
    <div class="message">{{time.record}}</div>
  </div>
</template>

<script>
  export default {
    name: 'messages',
    props: {
      question: String,
      message: Object,
      time: Object
    }
  }
</script>

<style lang="scss">
  .message {
    width: 315px;
    text-align: center;
    margin: 0 auto 30px;
  }
</style>
