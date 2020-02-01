<template>
  <transition name="fadePopup">
    <div class="popupWrapper" v-if="getPopup.investPopupShow === true" @click.self="showPopup(false)">
      <form action class="regForm regForm_small investForm">
        <div class="regForm__top">
          <p class="regForm__btn regForm__btn_active">Paramining Invest</p>
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
        <div class="addReviewForm__input">
          <p>Rate</p>
          <label
            class="toggler__wrapper toggler_reverse"
            :class="invest ? 'toggler_active' : '' "
            for="invest"
          >
            <div class="toggler">
              <div class="toggler__way"></div>
              <div class="toggler__circle"></div>
            </div>
            <input type="checkbox" name id="invest" class="toggler__input" v-model="invest" />
          </label>
        </div>
        <div class="investForm__profits">
          <div class="investForm__item">
            <span class="investForm__item_emp">Term</span>
            <span>2 years</span>
          </div>
          <div class="investForm__item">
            <span class="investForm__item_emp">pl</span>
            <span>15%/mo</span>
          </div>
        </div>
        <div class="regForm__bottom addReviewForm__bottom">
          <button class="regForm__submit regForm__submit_m my-btn my-btn_primary">Invest</button>
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
      this.$store.commit("investPopup", arg);
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
</style>
