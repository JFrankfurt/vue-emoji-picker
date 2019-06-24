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
      d="M17.5,6.3c-0.5,0.2-1,0.3-1.7,0.5c0.7-0.3,1-0.8,1.2-1.5c-0.5,0.3-1.2,0.5-1.8,0.7c-0.5-0.5-1.2-0.8-2-0.8c-1.5,0-2.8,1.3-2.8,2.8c0,0.2,0,0.5,0,0.7C8,8.5,5.8,7.3,4.5,5.7c-0.2,0.5-0.3,1-0.3,1.5c0,1,0.5,1.8,1.3,2.3C5,9.5,4.7,9.3,4.2,9.2l0,0c0,1.3,1,2.5,2.3,2.8c-0.2,0-0.5,0.2-0.7,0.2s-0.3,0-0.5,0c0.3,1.2,1.3,1.8,2.7,2c-1,0.8-2.2,1.3-3.5,1.3c-0.2,0-0.5,0-0.7,0c1.3,0.8,2.8,1.2,4.3,1.2c5.2,0,8-4.3,8-8c0-0.2,0-0.3,0-0.3C16.7,7.5,17.2,7,17.5,6.3z"
    />
  </svg>
</template>

<script>
export default {
  name: 'Twitter',

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
  fill: $twitter-brand-color;
}

.icon {
  fill: $color-white;
}
</style>
