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
    :class="$style.icon"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="14"
    viewBox="0 0 16 14"
  >
    <path
      fill-rule="evenodd"
      d="M13 12v2L9 11l4-3v2h3v2H13zM7.809 14H2.75.0V9.75 9.749C0 8.231 1.234 7 2.75 7 2.753 7 2.757 7 2.76 7H8.537C7.584 8.062 7 9.462 7 11.001 7 12.096 7.298 13.117 7.809 14zM6 5C4.619 5 3.5 3.881 3.5 2.5 3.5 1.119 4.619.0 6 0 7.381.0 8.5 1.119 8.5 2.5 8.5 3.881 7.381 5 6 5z"
    />
  </svg>
</template>

<style module lang="scss">
@import '~@/sass/_bestyleguide/globals/variables/colors';

.icon {
  fill: $color-white;
}
</style>
