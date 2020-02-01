<template>
  <transition name="fadePopup">
    <div class="popupWrapper" v-if="getPopup.congratsPopupShow === true" @click.self="showPopup(false)">
      <form action class="regForm regForm_small congratsForm">
        <div class="regForm__top congratsForm__top">
          <img src="/img/congrats.svg" alt />
          <span class="mdi mdi-close" @click="showPopup(false)"></span>
        </div>
        <p class="regForm__btn regForm__btn_active">Congrats!</p>
        <p
          class="congratsForm__text"
        >You have successfully reset your password. Now you can sign in to your account. Feel free to enjoy your experience here.</p>
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
      this.$store.commit("congratsPopup", arg);
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
