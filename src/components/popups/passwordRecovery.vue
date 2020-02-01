<template>
  <div class="popupWrapper" @click.self="showPopup(false)" v-if="getPopup.recoveryPopupShow === true">
    <form action class="regForm regForm_small recoveryForm">
      <div class="regForm__top">
        <p class="regForm__btn regForm__btn_active">Password Recovery</p>
        <span class="mdi mdi-close" @click="showPopup(false)"></span>
      </div>

      <div class="my-input regForm__my-input">
        <input type="text" class="my-input__input" placeholder="Email" v-model.trim="email" :class="$v.email.$invalid ? 'my-input__input_error' : ''" />
        <span class="my-input__error" v-if="!$v.email.required">This field is required</span>
        <span class="my-input__error" v-if="!$v.email.email">Please enter email</span>
      </div>

      <div class="recoveryForm__text">
        <span class="mdi mdi-check"></span>
        <span>We have sent you an email to the specified address with instructions on how to reset your password</span>
      </div>

      <div class="regForm__bottom">
        <span class="regForm__forget" @click="signInPopup">Sign In</span>
        <button class="regForm__submit regForm__submit_m my-btn my-btn_primary" @click.prevent="recoveryPassword">Got It</button>
      </div>
    </form>
  </div>
</template>

<script>
import { email, required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: ''
    };
  },
  computed: {
    getPopup() {
      return this.$store.getters.getPopup;
    }
  },
  methods: {
    showPopup(arg) {
      this.$store.commit("recoveryPopup", arg);
    },
    signInPopup() {
      this.$store.commit('regPopup', true)
      this.$store.commit('recoveryPopup', false)
    },
    recoveryPassword() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.showPopup(false)
        this.submitStatus = "PENDING";
      }
    }
  },
  validations: {
    email: {
      required,
      email
    }
  }
};
</script>

<style lang="sass">
@import '../../styles/_main-variables'
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
.recoveryForm
  &__text
    padding: 16px
    background: rgba(22, 184, 98, 0.02)
    border-radius: 4px
    display: flex
    color: #16b862
    font-size: 14px
    line-height: 24px
    .mdi
      margin-right: 16px
      font-size: 20px
</style>