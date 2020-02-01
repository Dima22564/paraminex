<template>
  <transition name="fadePopup">
    <div class="popupWrapper" v-if="getReg.regPopupShow === true" @click.self="showPopup(false)">
      <div class="regForm">
        <img src="/img/signIn.jpg" alt class="regForm__img" />
        <div class="regForm__inputs">
          <div class>
            <div class="regForm__top">
              <button
                class="regForm__btn"
                @click="currentTab = 1"
                :class="currentTab === 1 ? 'regForm__btn_active' : ''"
              >Sign Up</button>
              <button
                class="regForm__btn"
                :class="currentTab === 2 ? 'regForm__btn_active' : ''"
                @click="currentTab = 2"
              >Sign In</button>
              <span class="mdi mdi-close" @click="showPopup(false)"></span>
            </div>

            <form v-if="currentTab === 1">
              <div class="my-input regForm__my-input">
                <input
                  type="text"
                  class="my-input__input"
                  placeholder="Login"
                  v-model.trim="login"
                  :class="$v.login.$invalid ? 'my-input__input_error' : ''"
                />
                <span v-if="!$v.login.minLength" class="my-input__error">At least 10 symbols</span>
                <span v-if="!$v.login.required" class="my-input__error">This field is required</span>
              </div>
              <div class="my-input regForm__my-input">
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
              <div class="my-input regForm__my-input">
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

              <div class="regForm__checkbox">
                <input type="checkbox" name id="#terms2" class="regForm__my-checkbox" v-model="terms" />
                <label for="#terms2" class="regForm__label">
                  <span>
                    By checking this checkbox I confirm
                    that I agree to the
                    <a
                      href
                      class="regForm__emp"
                    >Terms & Conditions</a>
                  </span>
                </label>
              </div>

              <button
                class="regForm__submit my-btn my-btn_primary"
                @click.prevent="signUp"
                type="submit"
              >Sign Up</button>
            </form>

            <signIn v-if="currentTab === 2"></signIn>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { required, sameAs, minLength } from "vuelidate/lib/validators";
import signIn from './signIn'

export default {
  data() {
    return {
      currentTab: 1,
      login: "",
      password: "",
      repeatPassword: "",
      terms: ""
    };
  },
  computed: {
    getReg() {
      return this.$store.getters.getPopup;
    }
  },
  methods: {
    showPopup(arg) {
      this.$store.commit("regPopup", arg);
    },
    signUp() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.showPopup(false);
        this.submitStatus = "PENDING";
      }
    }
  },
  components: {
    signIn
  },
  validations: {
    password: {
      required,
      minLength: minLength(7)
    },
    repeatPassword: {
      sameAsPassword: sameAs("password")
    },
    login: {
      minLength: minLength(10),
      required
    },
    terms: {
      required
    }
  }
};
</script>

<style lang="sass">
@import '../../styles/_main-variables'
.fadePopup-enter-active, .fadePopup-leave-active
  transition: opacity .5s
.fadePopup-enter, .fadePopup-leave-to
  opacity: 0
.popupWrapper
  display: flex
  align-items: center
  justify-content: center
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  z-index: 9999
  background: rgba(0, 0, 0, 0.08)
.regForm__my-checkbox:checked ~ label::before
  background-color: $primary !important
  background-image: url('/img/check.svg')
  background-repeat: no-repeat
  background-size: contain
  background-position: center center
.regForm
  display: flex
  max-width: 920px
  box-shadow: 0 32px 32px -4px rgba(20, 16, 41, 0.06), 0 64px 96px 0 rgba(20, 16, 41, 0.12), 0 8px 16px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12)
  border-radius: 12px
  background: $white
  overflow: hidden
  width: 100%
  max-height: calc(100vh - 100px)
  overflow-y: auto
  +lg
    max-width: 360px
    margin: 0 15px
  &_small
    max-width: 445px
    padding: 40px
    display: block
    +md
      padding: 40px 24px
      border-radius: 40px 40px 0 0
  &__img
    width: 50%
    +lg
      display: none
  &__inputs
    padding: 40px
    width: 50%
    +lg
      width: 100%
      padding: 24px
  &__top
    display: flex
    align-items: center
    margin-bottom: 56px
    .mdi
      color: rgba(20, 16, 41, 0.24)
      cursor: pointer
      margin-left: auto
      font-size: 25px
  &__bottom
    display: flex
    align-items: center
    justify-content: space-between
    margin: 40px 0 40px
  &__forget
    font-size: 14px
    line-height: 24px
    color: $light-gray
    cursor: pointer
  &__btn
    padding: 0
    font-size: 24px
    line-height: 24px
    font-weight: 600
    border: none
    background: none
    color: rgba(20, 16, 41, 0.4)
    +lg
      font-size: 20px
    &:not(:last-child)
      margin-right: 40px
    &_active
      color: $gray
  &__my-input
    &:not(:last-child)
      margin-bottom: 24px
  &__submit
    margin: 40px 0 0 auto
    &_m
      margin: 0
  &__checkbox
    display: flex
    align-items: flex-start
  &__my-checkbox
    display: none
  &__emp
    color: $primary
  &__label
    display: flex
    align-items: flex-start
    font-size: 14px
    line-height: 24px
    color: $light-gray
    cursor: pointer
    &::before
      content: ''
      width: 24px
      height: 24px
      border-radius: 4px
      flex-shrink: 0
      margin-right: 16px
      background-color: rgba(20, 16, 41, 0.02)
      cursor: pointer
</style>
