<template>
  <section class="vip">
    <h4 class="vip__title">VIP Status</h4>
    <p class="vip__text">{{ text }}</p>
    <button class="my-btn my-btn_secondary my-btn_small">{{ btn }}</button>
  </section>
</template>

<script>
export default {
  props: ["text", "btn"]
};
</script>

<style lang="sass">
@import '../../styles/_main-variables'
.vip
  margin: 0 0 32px 0
  padding: 24px
  background: url('/img/vip.jpg')
  background-position: center center
  background-size: cover
  border-radius: 12px
  +sm
    background-position: left center
  &__title
    margin-bottom: 24px
  &__text
    line-height: 24px
    color: rgba(224, 224, 255, 0.8)
    max-width: 223px
    margin-bottom: 16px
</style>