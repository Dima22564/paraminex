<template>
  <div class="row">
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-9 m-sm-auto m-xl-0 m-lg-0 m-md-0">
      <form class="settingItem settingItem_option" @submit.prevent="submit">
        <div class="settingItem__top">
          <router-link to="/settings/main">
            <span class="mdi mdi-chevron-left settingItem__arrow_back"></span>
          </router-link>
          <p class="settingItem__subtitle">{{ this.$route.name }}</p>
          <button class="settingItem__done">Done</button>
        </div>

        <div class="settingEmail">
          <div class="my-input settingEmail__input">
            <input
              type="password"
              class="my-input__input"
              placeholder="Current Password"
              v-model.trim="currentPassword"
              :class="!$v.currentPassword.required ? 'my-input__input_error' : ''"
            />
            <span class="my-input__error" v-if="!$v.currentPassword.required">This field is required</span>
          </div>
          <div class="my-input settingEmail__input">
            <input
              type="password"
              class="my-input__input"
              placeholder="New Password"
              v-model.trim="password"
              :class="!$v.password.required ? 'my-input__input_error' : ''"
            />
            <span v-if="!$v.password.required" class="my-input__error">This field is required</span>
            <span v-if="!$v.password.minLength" class="my-input__error">At least 7 symbols</span>
          </div>
          <div class="my-input settingEmail__input">
            <input
              type="password"
              class="my-input__input"
              placeholder="Confirm Password"
              v-model.trim="repeatPassword"
              :class="!$v.repeatPassword.required ? 'my-input__input_error' : ''"
            />
            <span
              v-if="!$v.repeatPassword.sameAsPassword"
              class="my-input__error"
            >Passwords do not match</span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, sameAs, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      password: "",
      repeatPassword: "",
      currentPassword: ""
    };
  },
  methods: {
    submit() {
      console.log("submit!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        this.$router.push('/settings/main')
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
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
    currentPassword: {
      required
    }
  }
};
</script>

<style lang="sass">
  
</style>