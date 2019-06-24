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
    ref="container"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 119 119"
    xml:space="preserve"
    :class="{ [$style.active]: isActive }"
  >
    <circle :class="$style.circle" cx="59.5" cy="59.5" r="59.5" />
    <path
      :class="$style.bubble"
      d="M71.7,52.9c0-3.8-3.1-6.8-6.8-6.8l0,0H49v-7.6c0-2.5,2-4.5,4.5-4.5h31.8c2.5,0,4.5,2,4.5,4.5
    v21.2c0,2.5-2,4.5-4.5,4.5h-4.5v8.3c0,0.4-0.3,0.8-0.8,0.8c-0.2,0-0.4-0.1-0.5-0.2l-7.8-7.4L71.7,52.9z"
    />
    <path
      :class="$style.bubble"
      d="M63.3,56.2v19.7c0,0.4-0.3,0.8-0.8,0.8H46.2c-0.2,0-0.4,0.1-0.5,0.2L40.6,82v-4.5
    c0-0.4-0.3-0.8-0.8-0.8h-4.5c-0.4,0-0.8-0.3-0.8-0.8V56.2c0-0.4,0.3-0.8,0.8-0.8h27.3C63,55.5,63.3,55.8,63.3,56.2z M63.3,51H34.5
    C32,51,30,53,30,55.5v21.1c0,2.5,2,4.5,4.5,4.5h1.5v8.2c0,0.6,0.5,1.1,1.1,1.1c0.3,0,0.5-0.1,0.7-0.3l9.9-9h15.7
    c2.5,0,4.5-2,4.5-4.5v0V55.5C67.8,53,65.8,51,63.3,51C63.3,51,63.3,51,63.3,51z"
    />
  </svg>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style module lang="scss">
@import '~@/sass/_bestyleguide/globals/variables';

.circle {
  fill: $grey-6;
}

.bubble {
  fill: $grey-3;
}

.active {
  .circle {
    fill: #f5f8ff;
  }

  .bubble {
    fill: $behance-brand-color;
  }
}
</style>
