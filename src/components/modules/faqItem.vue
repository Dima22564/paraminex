<template>
  <div class="faq-item">
    <div class="faq-item__top" @click="isFaqShow = !isFaqShow">
      <p class="faq-item__question">What is the essence of Paraminex service?</p>
      <span class="mdi mdi-plus faq-item__icon"></span>
    </div>
    <p
      class="faq-item__text"
      :class="isFaqShow ? 'faq-item__text_active' : ''"
      v-show-slide="isFaqShow"
    >Paraminex is a multi-currency cryptocurrency wallet. You can store the currency, exchange it, earn in Prizm currency or send the currency to a friend. In addition, the system has a VIP status and regular bonuses for regular customers</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFaqShow: false
    };
  }
};
</script>

<style lang="sass">
@import '../../styles/_main-variables'
.faq-item
  border-radius: 12px
  box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12)
  padding: 24px
  &:not(:last-child)
    margin-bottom: 16px
  &__top
    display: flex
    align-items: flex-start
    justify-content: space-between
    font-size: 18px
    line-height: 24px
    color: $gray
    cursor: pointer
  &__icon
    color: rgba(20, 16, 41, 0.4)
    font-size: 28px
  &__text
    color: $light-gray
    transition: all 0.2s
    margin-top: 0
    line-height: 24px
    font-size: 14px
    &_active
      margin-top: 24px
</style>
