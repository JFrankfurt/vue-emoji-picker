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
    width="16"
    height="16"
    viewBox="0.5 0.5 16 16"
    :class="$style.icon"
  >
    <path fill="none" d="M.5.5h16v16H.5z" />
    <path
      d="M.5 7.5h3v8h-3zM7.207 15.207c.193.19.425.29.677.293H12c.256 0 .512-.098.707-.293l2.5-2.5c.19-.19.288-.457.293-.707V8.5c0-.553-.445-1-1-1h-5L11 5s.5-.792.5-1.5v-1c0-.553-.447-1-1-1l-1 2-4 4v6l1.707 1.707z"
    />
  </svg>
</template>

<style module lang="scss">
@import '~@/sass/_bestyleguide/globals/variables/colors';

.icon {
  fill: $color-white;
}
</style>
