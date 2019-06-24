<!--
  ADOBE CONFIDENTIAL
  ___________________

  Copyright 2018 Adobe
  All Rights Reserved.

  NOTICE: All information contained herein is, and remains
  the property of Adobe and its suppliers, if any. The intellectual
  and technical concepts contained herein are proprietary to Adobe
  and its suppliers and are protected by all applicable intellectual
  property laws, including trade secret and copyright laws.
  Dissemination of this information or reproduction of this material
  is strictly forbidden unless prior written permission is obtained
  from Adobe.
-->

<template>
  <!--
    Note: if you need a dynamic duration, here's how you can do it
    https://vuejsdevelopers.com/2018/02/26/vue-js-reusable-transitions/
  -->
  <transition
    :enter-active-class="$style.enterActive"
    :leave-active-class="$style.leaveActive"
    :mode="mode"
  >
    <slot></slot>
  </transition>
</template>

<script>
export default {
  props: {
    mode: {
      default: 'out-in',
      type: String
    }
  }
}
</script>

<style module lang="scss">
.enterActive {
  animation: fade 0.3s;
}

.leaveActive {
  animation: fade 0.3s reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
