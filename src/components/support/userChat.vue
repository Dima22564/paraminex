<template>
  <div class="my-chatUser" @click="click">
    <div class="my-chatUser__icon" :style="'background: ' + color">
      <span class="mdi mdi-message-settings-outline" :class="icon"></span>
    </div>
    <div class="my-chatUser__text">
      <p class="my-chatUser__name">{{ name }}</p>
      <p class="my-chatUser__desc">{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'desc', 'icon', 'color', 'chat', 'click']
}
</script>

<style lang="sass">
@import '../../styles/_main-variables'
.my-chatUser
  padding: 16px
  display: flex
  align-items: center
  transition: all 0.2s
  border-top-left-radius: 48px
  border-bottom-left-radius: 48px
  &:not(:last-child)
    margin-bottom: 8px
  &:hover
    background: rgba(20, 16, 41, 0.02)
    cursor: pointer
  &_active
    background: rgba(20, 16, 41, 0.02)
  &_selected
    padding: 0
  &__icon
    display: flex
    justify-content: center
    align-items: center
    border-radius: 50%
    width: 48px
    height: 48px
    background-image: linear-gradient(135deg, #ff00aa, #9c42f5 53%, #5d2de1)
    flex-shrink: 0
    margin-right: 16px
    +white
    &_add
      background: rgba(20, 16, 41, 0.02)
      .mdi
        color: $gray
  &__name
    font-size: 16px
    line-height: 24px
    &_add
      color: rgba(20, 16, 41, 0.12)
  &__desc
    font-size: 13px
    line-height: 16px
    max-width: 146px
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap
    color: rgba(20, 16, 41, 0.6)
    &_add
      color: rgba(20, 16, 41, 0.12)
    &_online
      display: flex
      align-items: center
  &__online
    width: 6px
    height: 6px
    border-radius: 50%
    margin-right: 4px
    background: #16b862
</style>
