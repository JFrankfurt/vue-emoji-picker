<template>
  <div>
    <h3>{{ title }}</h3>
    <div>
      <span v-for="emoji in emojiList" :key="emoji.codePoint">
        {{ emoji.codePoint }}
      </span>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Category',
  props: {
    emojiList: {
      default: () => [],
      type: Array
    }
  }
})
</script>
