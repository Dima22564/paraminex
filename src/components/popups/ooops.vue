<template>
  <transition name="fadePopup">
    <div class="popupWrapper" v-if="getPopup.oopsPopupShow === true" @click.self="showPopup(false)">
      <form action class="regForm regForm_small congratsForm">
        <div class="regForm__top congratsForm__top">
          <img src="/img/oops.svg" alt />
          <span class="mdi mdi-close" @click="showPopup(false)"></span>
        </div>
        <p class="regForm__btn regForm__btn_active">Ooops...</p>
        <p
          class="congratsForm__text"
        >Unfortunately somethign went wrong. We are doing our best right now to fix the problem. Try again after a while.</p>
        <div class="regForm__bottom congratsForm__bottom">
          <button class="regForm__submit regForm__submit_m my-btn my-btn_primary">Got It</button>
        </div>
      </form>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    getPopup() {
      return this.$store.getters.getPopup;
    }
  },
  methods: {
    showPopup(arg) {
      this.$store.commit("oopsPopup", arg);
    }
  }
};
</script>

<style lang="sass">
@import '../../styles/_main-variables'
.congratsForm
  &__top
    align-items: flex-start
  &__text
    margin-top: 24px
    font-size: 16px
    line-height: 28px
    color: $light-gray
  &__bottom
    justify-content: flex-end
</style>
