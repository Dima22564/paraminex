<template>
  <form>
    <div class="my-input regForm__my-input">
      <input
        type="text"
        class="my-input__input"
        placeholder="Email"
        v-model.trim="signInEmail"
        :class="$v.signInEmail.$invalid ? 'my-input__input_error' : ''"
      />
      <span class="my-input__error" v-if="!$v.signInEmail.required">This field is required</span>
      <span class="my-input__error" v-if="!$v.signInEmail.email">Please enter email</span>
    </div>
    <div class="my-input regForm__my-input">
      <input
        type="password"
        class="my-input__input"
        placeholder="Password"
        v-model.trim="signInPassword"
        :class="$v.signInPassword.$invalid ? 'my-input__input_error' : ''"
      />
      <span v-if="!$v.signInPassword.required" class="my-input__error">This field is required</span>
    </div>
    <div class="my-input regForm__my-input">
      <input
        type="text"
        class="my-input__input"
        placeholder="2FA Code"
        v-model.trim="twoFA"
        :class="$v.twoFA.$invalid ? 'my-input__input_error' : ''"
      />
      <span v-if="!$v.twoFA.required" class="my-input__error">This field is required</span>
    </div>

    <div class="regForm__bottom">
      <span class="regForm__forget" @click="recoveryPopup">Forgot your password?</span>
      <button
        class="regForm__submit regForm__submit_m my-btn my-btn_primary"
        @click.prevent="signIn"
      >Sign In</button>
    </div>
  </form>
</template>

<script>
import { email, required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      signInEmail: "",
      signInPassword: "",
      twoFA: ""
    };
  },
  methods: {
    recoveryPopup() {
      this.$store.commit("regPopup", false);
      this.$store.commit("recoveryPopup", true);
    },
    showPopup(arg) {
      this.$store.commit("regPopup", arg);
    },
    signIn() {
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
  validations: {
    signInEmail: {
      email,
      required
    },
    signInPassword: {
      required
    },
    twoFA: {
      required
    }
  }
};
</script>
