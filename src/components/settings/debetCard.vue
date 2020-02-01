<template>
  <div class="row">
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-9 m-sm-auto m-xl-0 m-lg-0 m-md-0">
      <form class="settingItem settingItem_option">
        <div class="settingItem__top">
          <router-link to="/settings/main">
            <span class="mdi mdi-chevron-left settingItem__arrow_back"></span>
          </router-link>
          <p class="settingItem__subtitle settingItem__subtitle_center">{{ this.$route.name }}</p>
        </div>

        <div class="settingPhone">
          <div class="my-input">
            <input
              type="text"
              class="my-input__input"
              placeholder="3345 1252 6374 4389"
              v-model.trim="debetCard"
              :class="!$v.debetCard.numeric || !$v.debetCard.required ? 'my-input__input_error' : ''"
            />
            <span v-if="!$v.debetCard.required" class="my-input__error">This field is required</span>
            <span v-if="!$v.debetCard.numeric" class="my-input__error">Only numbers</span>
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
      debetCard: ""
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
        this.$router.push("/settings/main");
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    }
  },
  validations: {
    debetCard: {
      required,
      numeric
    }
  }
};
</script>

<style lang="sass">
  
</style>