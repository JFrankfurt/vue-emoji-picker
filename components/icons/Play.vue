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
    :class="$style.play"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 65 44"
  >
    <g>
      <path
        d="M62,44H3c-1.6,0-3-1.3-3-3V3c0-1.6,1.4-3,3-3h59c1.7,0,3,1.4,3,3v38C65,42.7,63.7,44,62,44z"
      />
    </g>
    <polygon :class="$style.playIcon" points="27,11.5 27,32.5 44,22.4 " />
  </svg>
</template>

<style module lang="scss">
@import '~@/sass/_bestyleguide/globals/variables/colors';

.play {
  fill: #fff;
  transition: fill 0.3s ease;

  .playIcon {
    fill: #191919;
  }

  &:hover {
    fill: $behance-brand-color;

    .playIcon {
      fill: #fff;
    }
  }
}
</style>
