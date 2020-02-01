<template>
  <div class="row">
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-9 m-sm-auto m-xl-0 m-lg-0 m-md-0">
      <div class="settingItem settingItem_option">
        <div class="settingItem__top">
          <router-link to="/settings/main">
            <span class="mdi mdi-chevron-left settingItem__arrow_back"></span>
          </router-link>
          <p class="settingItem__subtitle">{{ this.$route.name }}</p>
          <button class="settingItem__done">Done</button>
        </div>

        <div class="settingTwoFa">
          <div class="my-input settingEmail__input">
            <input type="text" class="my-input__input" placeholder="Email"/>
            <span class="my-input__error">Error message</span>
          </div>
          <div class="my-input settingEmail__input">
            <input type="text" class="my-input__input my-input__input_copy" placeholder="New Email"/>
            <button class="my-input__copy">Copy</button>
            <span class="my-input__error">Error message</span>
          </div>

          <img src="/img/qrCode.jpg" alt="" class="settingTwoFa__code">
          
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
};
</script>

<style lang="sass">
  
</style>