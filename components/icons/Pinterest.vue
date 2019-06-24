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
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    xml:space="preserve"
  >
    <path
      :class="{ [$style.circle]: useColor }"
      d="M20,10c0,5.5-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0S20,4.5,20,10z"
    />
    <path
      :class="$style.icon"
      d="M7.4,19.7c0,0,0.8-1.2,0.9-2C8.5,17.2,9,14.8,9,14.8c0.3,0.7,1.3,1.2,2.5,1.2c3.2,0,5.3-3,5.3-6.8
      c0-3-2.5-5.7-6.3-5.7c-4.8,0-7.2,3.3-7.2,6.2c0,1.7,0.7,3.3,2,3.8c0.2,0.2,0.5,0,0.5-0.3C5.8,13,6,12.5,6,12.3C6,12,6,12,5.8,11.8
      c-0.3-0.5-0.7-1.2-0.7-2C5.2,7.3,7,5,10.2,5c2.7,0,4.2,1.7,4.2,3.8c0,2.8-1.3,5.3-3.2,5.3c-1,0-1.8-0.8-1.5-2
      c0.3-1.3,0.8-2.7,0.8-3.5S10,7.2,9.2,7.2c-1,0-2,1.2-2,2.7c0,1,0.3,1.5,0.3,1.5S6.3,16,6.2,16.8C6,17.5,6,18.5,6,19.2
      c0,0,0.5,0.2,0.7,0.3c0.1,0,0.3,0.1,0.4,0.1C7.3,19.6,7.4,19.7,7.4,19.7z"
    />
  </svg>
</template>

<script>
export default {
  name: 'Pinterest',

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
  fill: $pinterest-brand-color;
}

.icon {
  fill: $color-white;
}
</style>
