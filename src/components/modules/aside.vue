<template>
  <div class="col-xl-3 col-lg-3 col-md-6">
    <!-- Aside  adapted = true -->
    <aside class="aside">
      <div class="aside__balance">
        <p class="aside__sum">
          4,412
          <span>PRB</span>
        </p>
        <div class="aside__title">
          <p>overall balance</p>
          <span class="mdi mdi-alert-circle-outline"></span>
        </div>
      </div>

      <div class="aside__links" v-if="windowSize > 768">
        <router-link to="/dashboard" class="aside__link" active-class="aside__link_active">
          <span class="mdi mdi-view-dashboard-outline aside__icon"></span>
          <span>Dashboard</span>
        </router-link>
        <router-link to="/payments" class="aside__link" active-class="aside__link_active">
          <span class="mdi mdi-wallet-outline aside__icon"></span>
          <span>Payments</span>
        </router-link>
        <router-link to="/prizm-mining" class="aside__link" active-class="aside__link_active">
          <span class="mdi mdi-equalizer aside__icon"></span>
          <span>Prizm Mining</span>
        </router-link>
        <router-link to="/achievements" class="aside__link" active-class="aside__link_active">
          <span class="mdi mdi-bookmark-outline aside__icon"></span>
          <span>Achievements</span>
        </router-link>
        <router-link to="/vip" class="aside__link" active-class="aside__link_active">
          <span class="mdi mdi-star-outline aside__icon"></span>
          <span>VIP Status</span>
        </router-link>
        <router-link to="/support" class="aside__link" active-class="aside__link_active">
          <span class="mdi mdi-message-settings-outline aside__icon"></span>
          <span>Support</span>
        </router-link>
        <router-link
          to="/settings/main"
          class="aside__link"
          active-class="aside__link_active"
          :class="this.$route.name === 'Name' || this.$route.name === 'Phone' || this.$route.name === 'Email' || this.$route.name === 'Password' || this.$route.name === '2FA' || this.$route.name === 'Debet Card' || this.$route.name === 'Add Wallet' ? 'aside__link_active' : ''"
        >
          <span class="mdi mdi-settings-outline aside__icon"></span>
          <span>Settings</span>
        </router-link>
        <div to="/dashboard" class="aside__link" active-class="aside__link_active">
          <span class="mdi mdi-login-variant aside__icon"></span>
          <span>Sign Out</span>
        </div>
      </div>

      <div class="aside__links-select" v-else>
        <div class="aside__link-main" @click="isMenuOpen = !isMenuOpen">
          <span class="mdi mdi-view-dashboard-outline aside__icon aside__icon_mobile"></span>
          <span class="inner">{{ route }}</span>
          <span
            class="mdi mdi-chevron-down aside__arrow-mobile"
            :class="isMenuOpen ? 'aside__arrow-mobile_active' : ''"
          ></span>
        </div>

        <div class="aside__links-list" v-show-slide="isMenuOpen">
          <router-link
            to="/dashboard"
            class="aside__link aside__link_mobile"
            active-class="aside__link_active"
          >
            <span class="mdi mdi-view-dashboard-outline aside__icon"></span>
            <span>Dashboard</span>
          </router-link>
          <router-link
            to="/payments"
            class="aside__link aside__link_mobile"
            active-class="aside__link_active"
          >
            <span class="mdi mdi-wallet-outline aside__icon"></span>
            <span>Payments</span>
          </router-link>
          <router-link
            to="/prizm-mining"
            class="aside__link aside__link_mobile"
            active-class="aside__link_active"
          >
            <span class="mdi mdi-equalizer aside__icon"></span>
            <span>Prizm Mining</span>
          </router-link>
          <router-link
            to="/achievements"
            class="aside__link aside__link_mobile"
            active-class="aside__link_active"
          >
            <span class="mdi mdi-bookmark-outline aside__icon"></span>
            <span>Achievements</span>
          </router-link>
          <router-link
            to="/vip"
            class="aside__link aside__link_mobile"
            active-class="aside__link_active"
          >
            <span class="mdi mdi-star-outline aside__icon"></span>
            <span>VIP Status</span>
          </router-link>
          <router-link
            to="/support"
            class="aside__link aside__link_mobile"
            active-class="aside__link_active"
          >
            <span class="mdi mdi-message-settings-outline aside__icon"></span>
            <span>Support</span>
          </router-link>
          <router-link
            to="/settings/main"
            class="aside__link aside__link_mobile"
            active-class="aside__link_active"
            :class="this.$route.name === 'Name' || this.$route.name === 'Phone' || this.$route.name === 'Email' || this.$route.name === 'Password' || this.$route.name === '2FA' || this.$route.name === 'Debet Card' || this.$route.name === 'Add Wallet' ? 'aside__link_active' : ''"
          >
            <span class="mdi mdi-settings-outline aside__icon"></span>
            <span>Settings</span>
          </router-link>
          <div
            to="/dashboard"
            class="aside__link aside__link_mobile"
            active-class="aside__link_active"
          >
            <span class="mdi mdi-login-variant aside__icon"></span>
            <span>Sign Out</span>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      route: this.$route.name
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.getDarkMode;
    },
    windowSize() {
      return this.$store.getters.getWindowSize;
    }
  }
};
</script>

<style lang="sass">
@import '../../styles/_main-variables'
.aside
  &__balance
    background: rgba(156, 66, 245, 0.03)
    padding: 24px
    border-radius: 12px
    margin-bottom: 24px
  &__sum
    font-weight: bold
    font-size: 36px
    line-height: 36px
    color: $primary
    letter-spacing: 1px
    margin-bottom: 9px
    span
      font-size: 16px
      line-height: 20px
      letter-spacing: 0
  &__title
    font-size: 14px
    line-height: 24px
    text-transform: uppercase
    display: flex
    align-items: center
    justify-content: space-between
    color: $light-gray
    font-weight: 600
    .mdi
      color: rgba(20, 16, 41, 0.4)
      font-size: 18px
  &__link
    display: flex
    align-items: center
    padding: 12px 24px
    position: relative
    color: $light-gray
    font-size: 16px
    line-height: 24px
    font-weight: 600
    border-top-right-radius: 24px
    border-bottom-right-radius: 24px
    transition: all 0.2s
    cursor: pointer
    &:not(:last-child)
      margin-bottom: 8px
    &:hover
      background: rgba(156, 66, 245, 0.06)
      color: $primary
      &::before
        background: $primary
      .mdi
        color: $primary !important 
    &::before
      content: ''
      position: absolute
      left: 0
      top: 12px
      height: 24px
      width: 2px
      background: transparent
    &_active
      background: rgba(156, 66, 245, 0.03)
      color: $primary
      .mdi
        color: $primary !important
      &::before
        background: $primary
    &_mobile
      border-radius: 24px
      &::before
        display: none
  &__icon
    margin-right: 24px
    font-size: 25px
    color: rgba(20, 16, 41, 0.4)
    &_mobile
      color: $primary
  &__links-select
    position: relative
  &__link-main
    display: flex
    align-items: center
    color: $primary
    font-size: 16px
    line-height: 24px
    padding: 12px 24px
    background: rgba(156, 66, 245, 0.03)
    border-radius: 24px
    cursor: pointer
    margin-bottom: 32px
    font-weight: 600
    span
      &::first-letter
        text-transform: uppercase
  &__arrow-mobile
    margin-left: auto
    color: $primary
    font-size: 22px
    transition: all 0.2s
    &_active
      transform: rotate(180deg)
  &__links-list
    display: flex
    flex-direction: column
    position: absolute
    width: 100%
    bottom: 0
    left: 0
    transform: translateY(102%)
    background: $white
    z-index: 222
    max-height: 350px
    overflow-y: auto !important
    border-radius: 12px
</style>
