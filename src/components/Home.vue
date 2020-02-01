<template>
  <div>
    <!-- Header adapted = true -->
    <header class="my-header">
      <div class="container">
        <div class="row">
          <div class="col-xl-5 col-lg-5 order-md-10 order-xl-0 order-lg-0 order-sm-10 order-10">
            <p class="my-header__withUs mini-title">42,415,521 With us</p>
            <h1 class="my-header__title">Paraminex</h1>
            <p
              class="my-header__text"
            >A single wallet for cryptocurrencies and fiat. Storage, exchange, replenishment and withdrawal. Everything is carried out within one personal account.</p>
            <div class="my-header__btns">
              <button class="my-btn my-btn_primary my-header__btn">Join Us</button>
              <button class="my-btn my-btn_secondary my-header__btn">
                <span class="mdi mdi-play my-btn__icon"></span>
                <span>How it works</span>
              </button>
            </div>
          </div>

          <div class="col-xl-7 col-lg-7">
            <img src="/img/header.png" alt class="my-header__image" />
          </div>
        </div>
      </div>
    </header>

    <!-- Logos  adapted = true -->
    <section class="logos">
      <div class="container">
        <div class="logos__content">
          <div class="logos__logo">
            <img src="/img/logo-1.svg" alt v-if="isDarkMode === false" />
            <img src="/img/logo-dark-1.svg" alt v-else />
          </div>
          <div class="logos__logo">
            <img src="/img/logo-2.svg" alt />
          </div>
          <div class="logos__logo">
            <img src="/img/logo-3.svg" alt v-if="isDarkMode === false" />
            <img src="/img/logo-dark-3.svg" alt v-else />
          </div>
          <div class="logos__logo">
            <img src="/img/logo-4.svg" alt v-if="isDarkMode === false" />
            <img src="/img/logo-dark-4.svg" alt v-else />
          </div>
          <div class="logos__logo">
            <img src="/img/logo-5.svg" alt />
          </div>
        </div>
      </div>
    </section>

    <!-- Currency  adapted = true -->
    <section class="currency">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-5">
            <p class="currency__miniTitle mini-title">currency with you</p>
            <h2 class="currency__title">
              Over 20 Species
              Crypto and Fiat Currency
            </h2>
            <p
              class="currency__text"
            >A single wallet for cryptocurrencies and fiat. Storage, exchange, replenishment and withdrawal.</p>
          </div>

          <div class="col-xl-7">
            <div class="moreCurrency currency__moreCurrency">
              <div class="moreCurrency__list">
                <div class="moreCurrency__item" v-for="(item, index) in 12" :key="index">
                  <img
                    :src="'/img/currency-' + (index + 1) + '.svg'"
                    alt
                    v-if="isDarkMode === false"
                  />
                  <img :src="'/img/currency-dark-' + (index + 1) + '.svg'" alt v-else />
                </div>
              </div>
              <button class="my-btn my-btn_secondary moreCurrency__btn">More currency</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Choose card  adapted = true  -->
    <section class="chooseCard">
      <div class="container p-0">
        <div class="chooseCard__content">
          <div class="row">
            <div class="col-xl-5 offset-xl-1 col-lg-5 offset-lg-1">
              <div class="chooseCard__desc">
                <p class="chooseCard__miniTitle mini-title mini-title_light">42,415,521 With us</p>
                <h2 class="chooseCard__title">Paraminex Bank Card</h2>
                <p
                  class="chooseCard__text"
                >Pay as conveniently and conveniently. The card can be ordered immediately after registration.</p>
                <img src="/img/cards.png" alt class="chooseCard__img" />
              </div>
            </div>

            <div class="col-xl-5 col-lg-5">
              <form action class="my-form chooseCard__form">
                <p class="my-form__title">Register Now</p>
                <div class="my-input my-form__input">
                  <input
                    type="text"
                    class="my-input__input"
                    placeholder="Email"
                    v-model.trim="email"
                    :class="$v.email.$invalid ? 'my-input__input_error' : ''"
                  />
                  <span class="my-input__error" v-if="!$v.email.required">This field is required</span>
                  <span class="my-input__error" v-if="!$v.email.email">Please enter email</span>
                </div>
                <div class="my-input my-form__input">
                  <input
                    type="password"
                    class="my-input__input"
                    placeholder="Password"
                    v-model.trim="password"
                    :class="$v.password.$invalid ? 'my-input__input_error' : ''"
                  />
                  <span v-if="!$v.password.required" class="my-input__error">This field is required</span>
                  <span v-if="!$v.password.minLength" class="my-input__error">At least 7 symbols</span>
                </div>
                <div class="my-input my-form__input">
                  <input
                    type="password"
                    class="my-input__input"
                    placeholder="Confirm Password"
                    v-model.trim="repeatPassword"
                    :class="$v.repeatPassword.$invalid ? 'my-input__input_error' : ''"
                  />
                  <span
                    v-if="!$v.repeatPassword.sameAsPassword"
                    class="my-input__error"
                  >Passwords do not match</span>
                </div>
                <div class="my-form__input-checkbox-wrapper">
                  <input type="checkbox" name id="#terms" class="regForm__my-checkbox" v-model="terms" />
                  <label for="#terms" class="my-form__checkbox">
                    <span class="my-form__terms">
                      By checking this checkbox I confirm that I agree to the
                      <a
                        href
                      >Terms & Conditions</a>
                    </span>
                  </label>
                </div>

                <button class="my-btn my-btn_primary my-form__btn" @click.prevent="register">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import { email, required, sameAs, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      password: "",
      repeatPassword: "",
      terms: ""
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.getDarkMode;
    }
  },
  methods: {
    register() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
      }
    }
  },
  validations: {
    password: {
      required,
      minLength: minLength(7)
    },
    repeatPassword: {
      sameAsPassword: sameAs("password")
    },
    email: {
      required,
      email
    },
    terms: {
      required
    }
  }
};
</script>

<style lang="sass">
@import '../styles/_main-variables'
.my-header
  padding-top: 10px
  &__withUs
    margin: 86px 0 24px
    +lg
      margin: 36px 0 24px
    +sm
      margin: 0 0 16px
  &__title
    margin-bottom: 48px
    +sm
      margin-bottom: 32px
  &__text
    font-size: 20px
    line-height: 36px
    margin-bottom: 32px
    color: $light-gray
    +sm
      font-size: 18px
      line-height: 32px
      margin-bottom: 24px
  &__btns
    display: flex
    align-items: center
    +sm
      flex-direction: column
  &__btn
    +sm
      width: 100%
    &:not(:last-child)
      margin-right: 24px
      +sm
        margin: 0 0 16px 0
  &__image
    width: 100%


.logos
  padding: 72px 0
  &__content
    border-radius: 12px
    box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12)
    display: flex
    align-items: center
    height: 93px
    background: $white
    +md
      flex-direction: column
      height: initial
      padding: 16px
  &__logo
    width: 20%
    display: flex
    align-items: center
    justify-content: center
    +md
      width: 100%
      height: 93px

.currency
  padding: 72px 0 108px
  &__miniTitle
    margin-bottom: 24px
  &__title
    margin-bottom: 48px
  &__text
    font-size: 20px
    line-height: 36px
    margin-bottom: 32px
    color: $light-gray
    +sm
      font-size: 18px
      line-height: 32px
      margin-bottom: 24px

.moreCurrency
  border-radius: 12px
  box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12)
  padding: 16px 17px
  background: $white
  +sm
    padding: 0 0 16px 0
  &__list
    display: flex
    align-items: center
    flex-wrap: wrap
    justify-content: space-between
  &__item
    margin: 16px 15px
  &__btn
    margin: 32px 15px 16px auto
    +sm
      margin-bottom: 0

.chooseCard
  padding: 72px 0
  background: $white 
  &__content
    background-image: linear-gradient(126deg, #ff00aa, #9c42f5 53%, #5d2de1 100%)
    border-radius: 24px
    padding-top: 95px
    +lg
      padding: 80px 32px 32px 32px
  &__desc
    display: flex
    flex-direction: column
  &__text
    font-size: 20px
    line-height: 36px
    color: rgba(255, 255, 255, 0.8)
  &__miniTitle
    align-self: flex-start
  &__title
    color: $white
    margin: 24px 0 48px
    padding-right: 70px
    +lg
      padding-right: 0
  &__text
    padding-right: 61px
    +lg
      padding-right: 0
  &__img
    width: 100%
    transform: translateY(50px)
    +lg
      transform: translateY(0)
      width: 60%
      margin: 27px 0 0 0
      align-self: center
    +sm
      width: 100%

.my-form
  background: $white
  padding: 32px
  border-radius: 12px
  +sm
    padding: 24px
  &__title
    font-size: 24px
    line-height: 32px
    margin-bottom: 30px
    font-weight: 600
  &__input
    &:not(:last-child)
      margin-bottom: 20px
  &__checkbox
    margin: 20px 0
    display: flex
    align-items: flex-start
    &::before
      content: ''
      width: 24px
      height: 24px
      border-radius: 4px
      margin-right: 8px 
      background-color: $hover-gray
      flex-shrink: 0
      cursor: pointer
      transition: all 0.2s
      &:hover
        background-color: rgba(20, 16, 41, 0.04)
  &__input-checkbox
    display: none
    &:checked ~ .my-form__checkbox::before
      background-image: url('/img/check.svg')
      background-color: $primary  
      background-position: center center
      background-repeat: no-repeat
  &__btn
    margin: 20px 0 0 auto

  &__terms
    font-size: 14px
    line-height: 24px
    color: $light-gray
    a
      color: $primary
    
</style>
