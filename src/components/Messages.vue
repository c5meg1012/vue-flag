<template>
  <div>
    <div class="message">{{message}}</div>
    <div class="time">{{time.record}}</div>
  </div>
</template>

<script>
  export default {
    name: 'messages',
    props: {
      message: String,
      time: Object
    }
  }
</script>

<style lang="scss">
  .message,
  .time {
    width: 315px;
    text-align: center;
    margin: 0 auto 30px;
  }
</style>
