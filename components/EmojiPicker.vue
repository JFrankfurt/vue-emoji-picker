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
      <div
        :class="[
          $style.iconWrapper,
          {
            [$style.activeCategory]: activeCategory === 'recent',
            [$style.disabled]: !hasRecentEmoji
          }
        ]"
        @click="setActiveCategory('recent')"
      >
        <Clock :class="$style.icon" />
      </div>
      <div
        :class="[
          $style.iconWrapper,
          { [$style.activeCategory]: activeCategory === 'people' }
        ]"
        @click="setActiveCategory('people')"
      >
        <SmileOpen :class="$style.icon" />
      </div>
      <div
        :class="[
          $style.iconWrapper,
          { [$style.activeCategory]: activeCategory === 'nature' }
        ]"
        @click="setActiveCategory('nature')"
      >
        <Koala :class="$style.icon" />
      </div>
      <div
        :class="[
          $style.iconWrapper,
          { [$style.activeCategory]: activeCategory === 'foods' }
        ]"
        @click="setActiveCategory('foods')"
      >
        <Pear :class="$style.icon" />
      </div>
      <div
        :class="[
          $style.iconWrapper,
          { [$style.activeCategory]: activeCategory === 'activity' }
        ]"
        @click="setActiveCategory('activity')"
      >
        <BasketBall :class="$style.icon" />
      </div>
      <div
        :class="[
          $style.iconWrapper,
          { [$style.activeCategory]: activeCategory === 'places' }
        ]"
        @click="setActiveCategory('places')"
      >
        <Car :class="$style.icon" />
      </div>
      <div
        :class="[
          $style.iconWrapper,
          { [$style.activeCategory]: activeCategory === 'objects' }
        ]"
        @click="setActiveCategory('objects')"
      >
        <Lightbulb :class="$style.icon" />
      </div>
      <div
        :class="[
          $style.iconWrapper,
          { [$style.activeCategory]: activeCategory === 'symbols' }
        ]"
        @click="setActiveCategory('symbols')"
      >
        <Heart :class="$style.icon" />
      </div>
      <div
        :class="[
          $style.iconWrapper,
          { [$style.activeCategory]: activeCategory === 'flags' }
        ]"
        @click="setActiveCategory('flags')"
      >
        <Flag :class="$style.icon" />
      </div>
      <div
        :class="[$style.colorOption, $style.active]"
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
    <label :class="$style.inputLabel">
      <Search :class="[$style.icon, $style.search]" />
      <input
        v-model="searchString"
        :class="$style.input"
        :placeholder="placeholder"
        type="text"
      />
    </label>
    <div :class="$style.pickerWrapper">
      <div :class="$style.pickerArea">
        <span
          v-for="emoji in filteredEmojiSet"
          :key="emoji.unified"
          :class="$style.emoji"
          @mouseenter="setHoveredEmojiName(emoji)"
          @mouseleave="setHoveredEmojiName()"
          @click="selectEmoji(emoji)"
        >
          {{ emoji.unified }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import data from '../assets/emoji-new.json'

import BasketBall from './icons/BasketBall'
import Car from './icons/Car'
import Clock from './icons/Clock2'
import Flag from './icons/Flag2'
import Fade from './transitions/Fade'
import Heart from './icons/Heart.vue'
import Koala from './icons/Koala'
import Lightbulb from './icons/Lightbulb'
import Pear from './icons/Pear'
import Search from './icons/Search'
import SmileOpen from './icons/SmileOpen'

const FitzpatrickTypes = [
  { code: '', color: '#FDD047' },
  { code: '1F3FB', color: '#FCE6C5' },
  { code: '1F3FC', color: '#E3BB95' },
  { code: '1F3FD', color: '#C3956C' },
  { code: '1F3FE', color: '#9F663C' },
  { code: '1F3FF', color: '#594439' }
]

function toCodePoint(str) {
  return str
    ? String.fromCodePoint(...str.split('-').map(fragment => `0x${fragment}`))
    : ''
}

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
    Search,
    SmileOpen
  },
  data: () => ({
    activeCategory: 'people',
    activeVariant: 0,
    colorPickerOpen: false,
    colorVariants: FitzpatrickTypes,
    data,
    hoveredEmojiName: '',
    searchString: ''
  }),
  computed: {
    hasRecentEmoji() {
      const categoryIndex = this.data.categories
        .map(c => c.id)
        .indexOf('recent')
      return this.data.categories[categoryIndex].emojis.length > 0
    },
    placeholder() {
      return this.hoveredEmojiName || 'Search Emoji'
    },
    filteredEmojiSet() {
      if (this.searchString) {
        const aliasMap = {}
        Object.entries(this.data.aliases).forEach(([alias, id]) => {
          const search = this.searchString.toLowerCase().replace(/ /gi, '_')
          if (alias.includes(search)) {
            aliasMap[alias] = id
          }
        })
        const filterFunc = this.filterEmoji(aliasMap)
        return Object.keys(this.data.emojis)
          .filter(filterFunc)
          .map(this.idToActiveColorEmoji)
      } else {
        const category = this.activeCategory || 'people'
        const categoryIndex = this.data.categories
          .map(c => c.id)
          .indexOf(category)
        return this.data.categories[categoryIndex].emojis.map(
          this.idToActiveColorEmoji
        )
      }
    }
  },
  watch: {
    searchString(val) {
      this.activeCategory = ''
    }
  },
  created() {
    // emoji codepoints cant be stored in json, so we parse them at mount.
    this.data.categories.forEach((category, i) => {
      category.emojis.forEach(id => {
        const emoji = this.data.emojis[id]
        if (emoji.skin_variations) {
          Object.entries(emoji.skin_variations).forEach(([key, val]) => {
            emoji.skin_variations[key] = toCodePoint(val)
          })
        }
        if (emoji.unified) {
          emoji.unified = toCodePoint(emoji.unified)
        }
      })
    })
  },
  methods: {
    filterEmoji(aliasMap) {
      return emojiId => {
        const emoji = this.data.emojis[emojiId]
        Object.values(aliasMap).forEach(id => {
          if (emoji.id === id) {
            return true
          }
        })
        const search = this.searchString.toLowerCase()
        const search_ = search.replace(/ /gi, '_')
        if (
          emoji.id.includes(search) ||
          emoji.id.includes(search_) ||
          `:${emoji.id}:`.includes(search) ||
          `:${emoji.id}:`.includes(search_) ||
          emoji.name.toLowerCase().includes(search)
        ) {
          return true
        }
      }
    },
    idToActiveColorEmoji(id) {
      const emoji = { ...this.data.emojis[id] }
      const color =
        this.activeVariant > 0 && this.colorVariants[this.activeVariant].code
      if (color && emoji.skin_variations) {
        emoji.unified = emoji.skin_variations[color]
      }
      return emoji
    },
    selectEmoji(emoji) {
      this.$emit('emoji-picked', emoji.unified)
      const categoryIndex = this.data.categories
        .map(c => c.id)
        .indexOf('recent')
      let data = this.data.categories[categoryIndex].emojis
      data = data.filter(id => id !== emoji.id)
      data.unshift(emoji.id)
      this.data.categories[categoryIndex].emojis = data
    },
    setActiveCategory(category) {
      const categoryIndex = this.data.categories
        .map(c => c.id)
        .indexOf(category)
      if (this.data.categories[categoryIndex].emojis.length > 0) {
        this.activeCategory = category
      }
    },
    setColorVariant(i) {
      this.activeVariant = i
      this.colorPickerOpen = false
    },
    setHoveredEmojiName(emoji) {
      this.hoveredEmojiName = emoji ? `:${emoji.id}:` : ''
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
  padding-top: 10px;
  position: relative;
  width: 100%;
  max-width: 340px;
}
.colorOption {
  border-radius: 100%;
  cursor: pointer;
  height: 14px;
  margin: 2px;
  width: 14px;
  &.active {
    margin: 8px;
  }
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
  right: 10px;
  top: 12px;
  z-index: 2;
}
.emoji {
  align-items: center;
  cursor: pointer;
  display: flex;
  flex: 1 1 auto;
  font-size: 24px;
  justify-content: center;
  max-width: 26px;
  padding: 2px 4px;
}
.input {
  border: 1px solid #a4a4a4;
  border-radius: 1.3em;
  flex: 1 1 auto;
  font-size: 14px;
  max-height: 1em;
  padding: 0.5em 0.5em 0.5em calc(0.5em + 20px);
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #a4a4a4;
  }
}
.inputLabel {
  position: relative;
  display: flex;
  flex: 1 1 auto;
  margin: 8px;
}
.icon {
  height: 17px;
  width: 17px;
}
.iconWrapper {
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  fill: #a4a4a4;
  height: 31px;
  justify-content: center;
  width: 31px;
  transition: 200ms ease all;
  &:hover {
    background-color: rgba(0, 85, 255, 0.1);
    fill: #191919;
  }
  &.activeCategory {
    background-color: rgba(0, 85, 255, 0.05);
    fill: #191919;
  }
  &.disabled {
    background-color: transparent;
    cursor: default;
    fill: #adadad;
  }
}
.nav {
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin: 0 8px;
  width: calc(100% - 16px);
}
.pickerArea {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-left: 8px;
  position: relative;
}
.pickerWrapper {
  flex: 1 1 auto;
  height: 200px;
  min-width: 340px;
  overflow-y: auto;
}
.search {
  fill: #a4a4a4;
  left: 8px;
  position: absolute;
  top: 7px;
}
</style>
