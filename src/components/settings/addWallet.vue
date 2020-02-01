<template>
  <div class="row">
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-9 m-sm-auto m-xl-0 m-lg-0 m-md-0">
      <div class="settingItem settingItem_option">
        <div class="settingItem__top">
          <router-link to="/settings/main">
            <span class="mdi mdi-chevron-left settingItem__arrow_back"></span>
          </router-link>
          <p class="settingItem__subtitle">{{ this.$route.name }}</p>
          <button class="settingItem__done" @click.prevent="submit">Done</button>
        </div>

        <multiselect
          class="addWallet"
          :close-on-select="true"
          :options="options"
          :selectLabel="''"
          :deselectLabel="''"
          v-model="wallet"
          :class="!this.$v.wallet.$invalid ? '' : 'my-input__input_error'"
        ></multiselect>

        <div class="settingPhone">
          <div class="my-input">
            <input
              type="text"
              class="my-input__input"
              placeholder="Phone"
              v-model.trim="walletPhone"
              :class="!$v.walletPhone.numeric || !$v.walletPhone.required ? 'my-input__input_error' : ''"
            />
            <span v-if="!$v.walletPhone.required" class="my-input__error">This field is required</span>
            <span v-if="!$v.walletPhone.numeric" class="my-input__error">Only numbers</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, numeric } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      wallet: "",
      walletPhone: "",
      options: [
        "Ethereum",
        "Ethereum1",
        "Ethereum2",
        "Ethereum3",
        "Ethereum4",
        "Ethereum5",
        "Ethereum6",
        "Ethereum7",
        "Ethereum8",
        "Ethereum9"
      ]
    };
  },
  methods: {
    submit() {
      this.$v.$touch();
      console.log(this.$v)
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        this.$router.push("/settings/main");
        this.submitStatus = "OK";
      }
    }
  },
  validations: {
    walletPhone: {
      required,
      numeric
    },
    wallet: {
      required
    }
  }
};
</script>

<style lang="sass">
.multiselect
  margin-bottom: 16px
  border: 2px solid transparent
  border-radius: 4px !important
  box-sizing: border-box !important
  &__placeholder
    margin-bottom: 0 !important
    font-size: 16px !important
    line-height: 24px !important
    padding: 0 !important
  &__input
    margin-bottom: 0 !important
    font-size: 16px !important
    line-height: 24px !important
    padding: 0 !important
    background: transparent !important
  &__single
    background: transparent !important
    font-size: 16px !important
    line-height: 24px !important
    color: rgba(20, 16, 41, 0.8) !important
    padding: 0 !important
    margin: 0 !important
  &__tags
    background: rgba(20, 16, 41, 0.02) !important
    border: none !important
    cursor: pointer
    padding-top: 12px !important
    padding-bottom: 12px !important
    padding-left: 16px !important

 
</style>