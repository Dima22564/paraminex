<template>
  <div>
    <bread-crumb
      :firstLink="'Home'"
      :firstPath="'/home'"
      :secondLink="'Settings'"
      :secondPath="'/settings'"
    ></bread-crumb>
    <div class="settingsPage">
      <div class="container">
        <div class="row">
          <!-- Aside -->
          <my-aside></my-aside>
          <!-- Aside -->

          <div class="col-xl-9 col-lg-9">
            <h1 class="settingsPage__title">Settings</h1>

            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang="sass">
@import '../../styles/_main-variables'
.settingsPage
  padding-bottom: 42px
  &__title
    margin-bottom: 32px
    +lg
      margin-top: 30px
    +md
      margin-top: 0

.settingItem
  background: $white
  border-radius: 12px
  padding: 24px 0 24px 12px
  box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12)
  +xl
    margin-bottom: 30px
  &_option
    min-height: 341px
    padding: 0 16px 16px 16px
  &__title
    margin-bottom: 24px
    font-size: 20px
    line-height: 28px
    font-weight: 600
    padding-left: 12px
  &__subtitle
    font-size: 16px
    line-height: 24px
    font-weight: 600
    &_center
      margin: auto
  &__top
    display: flex
    align-items: center
    justify-content: space-between
    padding: 12px 0
    margin-bottom: 16px
  &__done
    border: none
    background: none
    color: $primary
    font-size: 16px
    line-height: 24px
    font-weight: 600
    cursor: pointer
    padding: 0
  &__line
    display: flex
    align-items: center
    padding: 12px
    cursor: pointer
    transition: all 0.2s
    border-top-left-radius: 24px
    border-bottom-left-radius: 24px
    justify-content: space-between
    &:hover
      background: $hover-gray
  &__icon
    width: 24px
    height: 24px
    border-radius: 50%
    margin-right: 16px
    display: flex
    align-items: center
    justify-content: center
    flex-shrink: 0
    img
      width: 100%
    .mdi
      color: $white
    &_add
      background: $hover-gray
      .mdi
        color: $gray
        font-size: 18px
  &__name
    margin-right: auto
    &_add
      color: rgba(20, 16, 41, 0.12)
  &__value
    color: $light-gray
    max-width: 75px
    text-overflow: ellipsis
    overflow: hidden
  &__arrow
    color: $light-gray
    font-size: 20px
    margin-left: 16px
    &_add
      color: rgba(20, 16, 41, 0.12)
    &_back
      color: $primary
      font-size: 20px
      cursor: pointer

.settingName
  display: flex
  align-items: flex-start
  &__img
    margin-right: 16px
    width: 48px
    height: 48px
    border-radius: 50%
    flex-shrink: 0
    img
      width: 48px
      height: 48px
      border-radius: 50%
.settingEmail
  display: flex
  flex-direction: column
  &__input
    &:not(:last-of-type)
      margin-bottom: 16px
  &__text
    margin-top: 35px
    font-size: 13px
    line-height: 16px
    color: rgba(20, 16, 41, 0.4)
.settingTwoFa
  &__code
    width: 96px
    height: 96px
    border-radius: 4px
    margin-top: 32px
</style>