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

        <div class="settingPhone">
          <div class="my-input">
            <input
              type="text"
              class="my-input__input"
              placeholder="Phone"
              v-model.trim="tel"
              :class="!$v.tel.numeric || !$v.tel.required ? 'my-input__input_error' : ''"
            />
            <span v-if="!$v.tel.required" class="my-input__error">This field is required</span>
            <span v-if="!$v.tel.numeric" class="my-input__error">Only numbers</span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, numeric } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      tel: ""
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
        setTimeout(() => {
          this.submitStatus = "OK";
          this.$router.push("/settings/main");
        }, 500);
      }
    }
  },
  validations: {
    tel: {
      required,
      numeric
    }
  }
};
</script>

<style lang="sass">
  
</style>