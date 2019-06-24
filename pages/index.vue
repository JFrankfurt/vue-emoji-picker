<template>
  <div class="container">
    <div class="wrapper">
      <EmojiPicker />
    </div>
  </div>
</template>

<script>
import EmojiPicker from '~/components/EmojiPicker'

export default {
  components: {
    EmojiPicker
  }
}
</script>

<style>
.container {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
}
</style>
