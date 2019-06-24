<!--
  ADOBE CONFIDENTIAL
  ___________________

  Copyright 2019 Adobe
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
  <div :class="$style.root">
    <nav :class="$style.nav">
      <div :class="$style.iconWrapper">
        <Clock :class="$style.icon" />
      </div>
      <div :class="$style.iconWrapper" @click="setCategory('people')">
        <SmileOpen :class="$style.icon" />
      </div>
      <div :class="$style.iconWrapper" @click="setCategory('nature')">
        <Koala :class="$style.icon" />
      </div>
      <div :class="$style.iconWrapper" @click="setCategory('foods')">
        <Pear :class="$style.icon" />
      </div>
      <div :class="$style.iconWrapper" @click="setCategory('activity')">
        <BasketBall :class="$style.icon" />
      </div>
      <div :class="$style.iconWrapper" @click="setCategory('places')">
        <Car :class="$style.icon" />
      </div>
      <div :class="$style.iconWrapper" @click="setCategory('objects')">
        <Lightbulb :class="$style.icon" />
      </div>
      <div :class="$style.iconWrapper" @click="setCategory('symbols')">
        <Heart :class="$style.icon" />
      </div>
      <div :class="$style.iconWrapper" @click="setCategory('flags')">
        <Flag :class="$style.icon" />
      </div>
      <div
        :class="$style.colorOption"
        :style="`background-color: ${colorVariants[activeVariant].color}`"
        @click="toggleColorPicker(true)"
      />
      <Fade>
        <div
          v-if="colorPickerOpen"
          :class="$style.colorPicker"
          @mouseleave="toggleColorPicker(false)"
        >
          <div
            v-for="({ color }, i) in colorVariants"
            :key="color"
            :class="$style.colorOption"
            :style="`background-color: ${color}`"
            @click="setColorVariant(i)"
          />
        </div>
      </Fade>
    </nav>
    <input
      v-model="searchString"
      :class="$style.input"
      :placeholder="placeholder"
      type="text"
    />
    <div :class="$style.pickerArea"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import data from '../assets/emoji.json'

import BasketBall from './icons/BasketBall'
import Car from './icons/Car'
import Clock from './icons/Clock2'
import Flag from './icons/Flag2'
import Fade from './transitions/Fade'
import Heart from './icons/Heart.vue'
import Koala from './icons/Koala'
import Lightbulb from './icons/Lightbulb'
import Pear from './icons/Pear'
import SmileOpen from './icons/SmileOpen'

const FitzpatrickTypes = [
  { codePoint: '', color: '#FDD047' },
  { codePoint: '0x1F3FB', color: '#FCE6C5' },
  { codePoint: '0x1F3FC', color: '#E3BB95' },
  { codePoint: '0x1F3FD', color: '#C3956C' },
  { codePoint: '0x1F3FE', color: '#9F663C' },
  { codePoint: '0x1F3FF', color: '#594439' }
]

export default Vue.extend({
  name: 'EmojiPicker',
  components: {
    BasketBall,
    Car,
    Clock,
    Fade,
    Flag,
    Heart,
    Koala,
    Lightbulb,
    Pear,
    SmileOpen
  },
  data: () => ({
    activeVariant: 0,
    colorPickerOpen: false,
    colorVariants: FitzpatrickTypes,
    data,
    hoveredEmojiName: '',
    searchString: ''
  }),
  computed: {
    placeholder() {
      return this.hoveredEmojiName || 'Search emoji'
    }
  },
  methods: {
    setCategory(category) {
      // scroll to category position in viewport
    },
    setColorVariant(i) {
      this.activeVariant = i
      this.colorPickerOpen = false
    },
    toggleColorPicker(b) {
      this.colorPickerOpen = b
    }
  }
})
</script>

<style module lang="scss">
.root {
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.685);
  color: #000;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px;
  position: relative;
  width: 100%;
}
.colorOption {
  border-radius: 100%;
  cursor: pointer;
  height: 14px;
  margin: 2px;
  width: 14px;
}
.colorPicker {
  align-items: center;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.685);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 6px;
  position: absolute;
  right: 4px;
  top: 12px;
}
.input {
  border: 1px solid #a4a4a4;
  border-radius: 1.3em;
  flex: 1 1 auto;
  font-size: 14px;
  margin: 10px 0;
  max-height: 1em;
  padding: 0.5em 0.5em 0.5em calc(0.5em + 20px);
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #a4a4a4;
  }
}
.nav {
  align-items: center;
  display: flex;
  justify-content: space-around;
  .iconWrapper {
    align-items: center;
    background-color: transparent;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    fill: #a4a4a4;
    height: 33px;
    justify-content: center;
    width: 33px;
    transition: 200ms ease all;
    &:hover {
      background-color: rgba(0, 85, 255, 0.1);
      fill: #191919;
    }
    .icon {
      height: 17px;
      width: 17px;
    }
  }
}
.pickerArea {
  flex: 1 1 auto;
}
</style>
