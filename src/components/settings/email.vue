<template>
  <div class="row">
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-9 m-sm-auto m-xl-0 m-lg-0 m-md-0">
      <form class="settingItem settingItem_option">
        <div class="settingItem__top">
          <router-link to="/settings/main">
            <span class="mdi mdi-chevron-left settingItem__arrow_back"></span>
          </router-link>
          <p class="settingItem__subtitle">{{ this.$route.name }}</p>
          <button class="settingItem__done" @click.prevent="changeEmail">Done</button>
        </div>

        <div class="settingEmail">
          <div class="my-input settingEmail__input">
            <input type="email" class="my-input__input" placeholder="Email" v-model.trim="email" :class="!$v.email.required || !$v.email.email? 'my-input__input_error' : ''" />
            <span class="my-input__error" v-if="!$v.email.required">This field is required</span>
            <span class="my-input__error" v-if="!$v.email.email">Please enter email</span>
          </div>
          <div class="my-input settingEmail__input">
            <input
              type="email"
              class="my-input__input"
              placeholder="New Email"
              v-model.trim="newEmail"
              :class="!$v.newEmail.required || !$v.newEmail.email ? 'my-input__input_error' : ''"
            />
            <span class="my-input__error" v-if="!$v.newEmail.required">This field is required</span>
            <span class="my-input__error" v-if="!$v.newEmail.email">Please enter email</span>
          </div>

          <p
            class="settingEmail__text"
          >To change your email you will receive two confirmation letters. First to the old email, then to the new</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      newEmail: ""
    };
  },
  validations: {
    email: {
      required,
      email
    },
    newEmail: {
      required,
      email
    }
  },
  methods: {
    changeEmail() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        this.$router.push('/settings/main')

        
      }
    }
  }
};
</script>

<style lang="sass">
  
</style>