<template>
  <transition name="fadePopup">
    <div
      class="popupWrapper"
      v-if="getPopup.cardOrderPopup === true"
      @click.self="showPopup(false)"
    >
      <form action class="regForm regForm_small investForm cardOrderForm">
        <div class="regForm__top">
          <p class="regForm__btn regForm__btn_active">Card Order</p>
          <span class="mdi mdi-close" @click="showPopup(false)"></span>
        </div>
        <div class="cardOrderForm__block">
          <div class="investForm__amount my-option-wrapper_withoutSelect cardOrderForm__input">
            <p class="my-option__placeholder">First Name</p>
            <div class="my-option-wrapper my-option-wrapper_unSelect">
              <input type="text" class="my-option__title cardOrderForm__inputText" />
            </div>
          </div>

          <div class="investForm__amount my-option-wrapper_withoutSelect cardOrderForm__input">
            <p class="my-option__placeholder">Last Name</p>
            <div class="my-option-wrapper my-option-wrapper_unSelect">
              <input type="text" class="my-option__title cardOrderForm__inputText" />
            </div>
          </div>
        </div>

        <div class="investForm__amount my-option-wrapper_withoutSelect">
          <p class="my-option__placeholder">Email</p>
          <div class="my-option-wrapper my-option-wrapper_unSelect">
            <input type="text" class="my-option__title cardOrderForm__inputText" />
          </div>
        </div>

        <div class="cardOrderForm__block">
          <div class="investForm__amount my-option-wrapper_withoutSelect cardOrderForm__input">
            <p class="my-option__placeholder">ZIP Code</p>
            <div class="my-option-wrapper my-option-wrapper_unSelect">
              <input type="text" class="my-option__title cardOrderForm__inputText" />
            </div>
          </div>

          <div class="payment-select-wrapper_main">
            <div class="payment-select-wrapper">
              <label class="my-option__placeholder">Region</label>
              <multiselect
                v-model="region"
                placeholder="Region"
                :options="optionsFrom"
                :option-height="104"
                :show-labels="false"
              >
                <template slot="singleLabel" slot-scope="props">
                  <div class="my-option-wrapper my-option-wrapper_selected">
                    <p class="my-option__title">{{ props.option.value }}</p>
                  </div>
                </template>
                <template slot="option" slot-scope="props">
                  <div class="my-option-wrapper">
                    <p class="my-option__value">{{ props.option.value }}</p>
                  </div>
                </template>
              </multiselect>
            </div>
            <p class="my-option__subplaceholder"></p>
          </div>
        </div>

        <div class="cardOrderForm__block">
          <div class="payment-select-wrapper_main">
            <div class="payment-select-wrapper">
              <label class="my-option__placeholder">City</label>
              <multiselect
                v-model="city"
                placeholder="City"
                :options="cities"
                :option-height="104"
                :show-labels="false"
              >
                <template slot="singleLabel" slot-scope="props">
                  <div class="my-option-wrapper my-option-wrapper_selected">
                    <p class="my-option__title">{{ props.option.value }}</p>
                  </div>
                </template>
                <template slot="option" slot-scope="props">
                  <div class="my-option-wrapper">
                    <p class="my-option__value">{{ props.option.value }}</p>
                  </div>
                </template>
              </multiselect>
            </div>
            <p class="my-option__subplaceholder"></p>
          </div>
          <div class="payment-select-wrapper_main">
            <div class="payment-select-wrapper">
              <label class="my-option__placeholder">Street</label>
              <multiselect
                v-model="street"
                placeholder="Street"
                :options="streets"
                :option-height="104"
                :show-labels="false"
              >
                <template slot="singleLabel" slot-scope="props">
                  <div class="my-option-wrapper my-option-wrapper_selected">
                    <p class="my-option__title">{{ props.option.value }}</p>
                  </div>
                </template>
                <template slot="option" slot-scope="props">
                  <div class="my-option-wrapper">
                    <p class="my-option__value">{{ props.option.value }}</p>
                  </div>
                </template>
              </multiselect>
            </div>
            <p class="my-option__subplaceholder"></p>
          </div>
        </div>

        <div class="cardOrderForm__block">
          <div class="cardOrderForm__smallInput">
            <span>H.</span>
            <input type="text" />
          </div>
          <div class="cardOrderForm__smallInput">
            <span>C.</span>
            <input type="text" />
          </div>
          <div class="cardOrderForm__smallInput">
            <span>S.</span>
            <input type="text" />
          </div>
          <div class="cardOrderForm__smallInput">
            <span>B.</span>
            <input type="text" />
          </div>
        </div>

        <div class="cardOrderForm__delivery">
          <span>Delivery</span>
          <div class="cardOrderForm__deliveryContent">
            <label
              class="cardOrderForm__label"
              for="#free"
              :class="delivery === 'free' ? 'cardOrderForm__label_active' : ''"
            >Post of Russia Free</label>
            <input v-model="delivery" value="free" type="radio" name id="#free" />
            <label
              class="cardOrderForm__label"
              for="#pay"
              :class="delivery === 'express' ? 'cardOrderForm__label_active' : ''"
            >Express (+30 PRB)</label>
            <input v-model="delivery" value="express" type="radio" name id="#pay" />
          </div>
        </div>

        <div class="regForm__bottom cardOrderForm__bottom">
          <p class="withdrawForm__text"><span>Balance</span> <span>451 PRB</span></p>
          <button class="regForm__submit regForm__submit_m my-btn my-btn_primary">Pay 230 PRB</button>
        </div>
      </form>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      region: "",
      street: "",
      city: "",
      delivery: "",
      optionsFrom: [
        {
          value: "rthbtrhtyjtyjty",
          currency: "BTC"
        },
        {
          value: "rthntynhtyntrhtrbh",
          currency: "ETH"
        },
        {
          value: "dfgbdrdthbrtfhrtfhrtfh",
          currency: "ETH"
        },
        {
          value: "gerhtrhtrhrthntrte",
          currency: "BTC"
        }
      ],
      streets: [
        {
          value: "rthbtrhtyjtyjty"
        },
        {
          value: "rthntynhtyntrhtrbh"
        },
        {
          value: "dfgbdrdthbrtfhrtfhrtfh"
        },
        {
          value: "gerhtrhtrhrthntrte"
        }
      ],
      cities: [
        {
          value: "rthbtrhtyjtyjty"
        },
        {
          value: "rthntynhtyntrhtrbh"
        },
        {
          value: "dfgbdrdthbrtfhrtfhrtfh"
        },
        {
          value: "gerhtrhtrhrthntrte"
        }
      ]
    };
  },
  methods: {
    showPopup(arg) {
      this.$store.commit("cardOrderPopup", arg);
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
.cardOrderForm
  &__block
    display: flex
    align-items: flex-start
    justify-content: space-between
    &:not(:last-child)
      margin-bottom: 24px
      +md
        margin-bottom: 12px
        flex-wrap: wrap
  &__bottom
    justify-content: space-between
    p
      display: flex
      flex-direction: column
  &__input
    margin-bottom: 0 !important
    width: calc(50% - 12px)
    +md
      width: 100%
      &:not(:last-child)
        margin-bottom: 12px !important
  &__inputText
    max-width: 100% !important
  .payment-select-wrapper_main
    height: 74px
    +md
      &:not(:last-child)
        margin-bottom: 12px
  .multiselect
    max-height: initial !important
    height: 33px !important
    &__tags
      background: transparent !important
      padding-top: 0 !important
    .my-option
      &__title
        max-width: 100%
  &__smallInput
    width: calc(25% - 12px)
    background: rgba(20, 16, 41, 0.02)
    display: flex
    flex-direction: column
    padding: 16px
    border-radius: 4px
    +md
      width: calc(50% - 6px)
      &:not(:last-child)
        margin-bottom: 12px
    span
      font-size: 13px 
      line-height: 16px
      margin-bottom: 6px
      color: rgba(20, 16, 41, 0.4)
    input
      border: none
      background: none
      color: $gray
      font-size: 16px
      line-height: 24px
      padding: 0
      font-weight: 500
  &__delivery
    display: flex
    flex-direction: column
    span
      margin-bottom: 6px
      font-size: 13px
      line-height: 16px
      color: rgba(20, 16, 41, 0.4)
    input
      display: none
  &__label
    padding: 6px 16px
    font-size: 14px
    line-height: 16px
    color: $light-gray
    cursor: pointer
    &:not(:last-child)
      +md
        margin-bottom: 6px
    &_active
      color: $primary
      border-radius: 18px
      background: rgba(156, 66, 245, 0.03)
</style>
