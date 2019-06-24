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
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(-1654 -928)">
      <circle
        :class="{ [$style.circle]: useColor }"
        transform="translate(1654 928)"
        cx="16"
        cy="16"
        r="16"
      />
      <path
        :class="$style.icon"
        d="M1671.395 953v-7.3h2.45l.367-2.846h-2.817v-1.815c0-.826.226-1.384 1.412-1.384h1.5v-2.542a19.964 19.964 0 0 0-2.192-.113 3.425 3.425 0 0 0-3.658 3.756v2.1H1666v2.844h2.457v7.3z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'Facebook',

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
  fill: $facebook-brand-color;
}

.icon {
  fill: $color-white;
}
</style>
