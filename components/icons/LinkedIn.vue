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
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 20 20"
    xml:space="preserve"
  >
    <path
      :class="{ [$style.circle]: useColor }"
      d="M20,10c0,5.5-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0S20,4.5,20,10z"
    />
    <path
      :class="$style.icon"
      d="M7.5,5.2c0-0.8-0.7-1.5-1.7-1.5S4.2,4.3,4.2,5.2s0.7,1.5,1.7,1.5l0,0C6.8,6.7,7.5,6,7.5,5.2z"
    />
    <rect :class="$style.icon" x="4.7" y="8" width="2.5" height="7" />
    <path
      :class="$style.icon"
      d="M16.2,11.2c0-2.3-1.2-3.7-2.8-3.7c-1,0-1.8,0.7-2,1.5l-0.2-1H8.7c0,0.3,0,1.7,0,1.7V15h2.5v-3.8c0-1,0.5-1.7,1.2-1.7c0.8,0,1.3,0.3,1.3,1.7v3.7h2.5V11.2z"
    />
  </svg>
</template>

<script>
export default {
  name: 'Linkedin',

  props: {
    useColor: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style module lang="scss">
@import '~@/sass/_bestyleguide/globals/variables/colors';
@import '~@/sass/_bestyleguide/globals/variables/social_share_icons';

.circle {
  fill: $linkedin-brand-color;
}

.icon {
  fill: $color-white;
}
</style>
