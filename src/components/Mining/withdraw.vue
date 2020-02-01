<template>
  <transition name="fadePopup">
    <div class="popupWrapper" v-if="getPopup.withdrawPopupShow === true" @click.self="showPopup(false)">
      <form action class="regForm regForm_small investForm">
        <div class="regForm__top">
          <p class="regForm__btn regForm__btn_active investForm__title">Paramining Withdraw</p>
          <span class="mdi mdi-close" @click="showPopup(false)"></span>
        </div>
        <div class="investForm__amount my-option-wrapper_withoutSelect">
          <p class="my-option__placeholder">From</p>
          <div class="my-option-wrapper my-option-wrapper_unSelect">
            <input type="text" class="my-option__title" />
            <div class="my-option__currency">
              <span class="my-option__small">PZM</span>
              <img src="/img/bitcoin.svg" alt class="my-option__img" />
            </div>
          </div>
        </div>
        <div class="investForm__amount my-option-wrapper_withoutSelect">
          <p class="my-option__placeholder">Amount</p>
          <div class="my-option-wrapper my-option-wrapper_unSelect">
            <input type="text" class="my-option__title" />
            <div class="my-option__currency">
              <span class="my-option__small">PZM</span>
              <img src="/img/bitcoin.svg" alt class="my-option__img" />
            </div>
          </div>
        </div>
        <a href="" class="investForm__all">All</a>
        <div class="regForm__bottom addReviewForm__bottom">
          <p class="withdrawForm__text">Will be credited to Prizm wallet within 12 hours</p>
          <button class="regForm__submit regForm__submit_m my-btn my-btn_primary">Withdraw</button>
        </div>
      </form>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      invest: false
    };
  },
  methods: {
    showPopup(arg) {
      this.$store.commit("withdrawPopup", arg);
    }
  },
  computed: {
    getPopup() {
      return this.$store.getters.getPopup;
    }
  }
};
</script>

<style lang="sass">
@import '../../styles/_main-variables'
.investForm
  &__amount
    &:not(:last-child)
      margin-bottom: 24px
  &__title
    +md
      margin-right: 0 !important
  &__all
    color: $primary
    font-size: 13px
    line-height: 16px
    width: 100%
    text-align: right
    display: block
    margin-top: -10px
  &__profits
    display: flex
    align-items: center
    justify-content: space-between
    margin-top: 24px
    +md
      flex-direction: column
      margin-top: 16px
  &__item
    border-radius: 4px
    padding: 12px 16px
    display: flex
    align-items: center
    justify-content: space-between
    font-size: 14px
    line-height: 24px
    width: calc(50% - 12px)
    background: rgba(20, 16, 41, 0.02)
    +md
      width: 100%
      &:not(:last-child)
        margin-bottom: 16px
    &_emp
      text-transform: uppercase
      color: rgba(20, 16, 41, 0.6)
      letter-spacing: 1px
.withdrawForm
  &__text
    color: $light-gray
    font-size: 14px
    line-height: 24px
    padding-right: 30px
</style>
