<template>
  <div>
    <bread-crumb 
      :firstLink="'Home'" 
      :firstPath="'/home'" 
      :secondLink="'FAQ'" 
      :secondPath="'/faq'"
    ></bread-crumb>
    <section class="faq">
      <div class="container">
        <h1 class="faq__title">FAQ</h1>
        <div class="faq__block">
          <p class="faq__subtitle">General Issues</p>
          <faq-item></faq-item>
          <faq-item></faq-item>
          <faq-item></faq-item>
          <faq-item></faq-item>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import faqItem from './modules/faqItem';
export default {
  computed: {
    isDarkMode() {
      return this.$store.getters.getDarkMode;
    }
  },
  components: {
    'faq-item': faqItem
  }
};
</script>

<style lang="sass">
@import '../styles/_main-variables'
.faq
  padding: 0 0 72px 0
  &__title
    margin-bottom: 48px
  &__subtitle
    margin-bottom: 24px
    font-size: 20px
    line-height: 28px
    font-weight: 600
  &__block
    &:not(:last-child)
      margin-bottom: 48px
</style>
