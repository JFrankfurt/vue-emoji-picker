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
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      :class="$style.play"
      d="M9,15.66a1.06,1.06,0,0,0,1.58.92l5.88-3.32a1,1,0,0,0,0-1.8L10.58,8.14A1.06,1.06,0,0,0,9,9.05Z"
    />
    <circle :class="$style.circle" cx="12" cy="12" r="11" />
  </svg>
</template>

<style module lang="scss">
.play {
  fill: #0057ff;
}

.circle {
  fill: none;
  stroke: #0057ff;
  stroke-width: 2px;
}
</style>
