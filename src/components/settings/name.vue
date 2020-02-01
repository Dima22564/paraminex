<template>
  <div class="row">
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-9 m-sm-auto m-xl-0 m-lg-0 m-md-0">
      <form class="settingItem settingItem_option" @submit.prevent="changeName">
        <div class="settingItem__top">
          <router-link to="/settings/main">
            <span class="mdi mdi-chevron-left settingItem__arrow_back"></span>
          </router-link>
          <p class="settingItem__subtitle">{{ this.$route.name }}</p>
          <button class="settingItem__done" type="submit">Done</button>
        </div>

        <div class="settingName">
          <div class="settingName__img">
            <img src="/img/avatar.jpg" alt />
          </div>
          <div class="my-input">
            <input type="text" class="my-input__input" placeholder="Name" v-model.trim="userName" :class="!$v.userName.required ? 'my-input__input_error' : ''" />
            <span class="my-input__error" v-if="!$v.userName.required">Field is required</span>
            <span class="my-input__error" v-if="!$v.userName.minLength">At least 10 symbols</span>
          </div>
        </div>

        <p>
          <strong>Name setting works only for demo purposes (without using databases) via method changeName that commits mutation changeUserName</strong>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      userName: this.$store.getters.getUserName,
      valid: false
    };
  },
  methods: {
    changeName() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        this.$router.push('/settings/main')

        // Demo
        const name = this.userName;
        this.$store.commit("changeUserName", name);
        // Demo
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    }
  },
  validations: {
    userName: {
      required,
      minLength: minLength(10)
    }
  }
};
</script>

<style lang="sass">
  
</style>