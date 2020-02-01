<template>
  <div>
    <section class="bread-crumb">
      <div class="container">
        <div class="bread-crumb__content">
          <router-link class="bread-crumb__link" :to="firstPath">{{ firstLink }}</router-link>
          <router-link class="bread-crumb__link" :to="secondPath">{{ secondLink }}</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["firstLink", "secondLink", "firstPath", "secondPath"]
};
</script>

<style lang="sass">
@import '../../styles/_main-variables'
.bread-crumb
  padding: 0
  background: $white
  margin: 24px 0
  &__content
    display: flex
    align-items: center
  &__link
    font-size: 16px
    line-height: 24px
    color: $light-gray
    display: flex
    align-items: center
    &:not(:last-child)
      &::after
        content: ''
        width: 12px
        height: 12px
        margin: 0 8px
        background: url('/img/arrow-right.svg')
        background-position: center center
        background-repeat: no-repeat
        background-size: contain
    &:last-child
      color: $gray
</style>