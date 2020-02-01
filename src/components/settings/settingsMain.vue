<template>
  <div class="row">
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-9 m-sm-auto">
      <div class="settingItem">
        <p class="settingItem__title">Personal</p>

        <router-link to="/settings/name" tag="div" class="settingItem__line">
          <div class="settingItem__icon" style="background: #5d2de1">
            <span class="mdi mdi-account"></span>
          </div>
          <span class="settingItem__name">Name</span>
          <span class="settingItem__value">{{ userName }}</span>
          <span class="mdi mdi-chevron-right settingItem__arrow"></span>
        </router-link>

        <router-link to="/settings/phone" tag="div" class="settingItem__line">
          <div class="settingItem__icon" style="background: #c32de1">
            <span class="mdi mdi-phone"></span>
          </div>
          <span class="settingItem__name">Phone</span>
          <span class="settingItem__value">vino_costa</span>
          <span class="mdi mdi-chevron-right settingItem__arrow"></span>
        </router-link>

        <router-link to="/settings/email" tag="div" class="settingItem__line">
          <div class="settingItem__icon" style="background: #4579f5">
            <span class="mdi mdi-email"></span>
          </div>
          <span class="settingItem__name">Email</span>
          <span class="settingItem__value">vino_costa</span>
          <span class="mdi mdi-chevron-right settingItem__arrow"></span>
        </router-link>

        <router-link to="/settings/password" tag="div" class="settingItem__line">
          <div class="settingItem__icon" style="background: #ff5e00">
            <span class="mdi mdi-shield-half-full"></span>
          </div>
          <span class="settingItem__name">Password</span>
          <span class="settingItem__value">• • • • • •</span>
          <span class="mdi mdi-chevron-right settingItem__arrow"></span>
        </router-link>

        <router-link to="/settings/twoFa" class="settingItem__line">
          <div class="settingItem__icon" style="background: #9c42f5">
            <span class="mdi mdi-wifi"></span>
          </div>
          <span class="settingItem__name">2FA</span>
          <label
            class="toggler__wrapper settings__toggler"
            :class="TwoFA ? 'toggler_active' : '' "
            for="TwoFA"
          >
            <div class="toggler">
              <div class="toggler__way"></div>
              <div class="toggler__circle"></div>
            </div>
            <input type="checkbox" name id="TwoFA" class="toggler__input" v-model="TwoFA" />
          </label>
        </router-link>
      </div>
    </div>

    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-9 m-sm-auto">
      <div class="settingItem">
        <p class="settingItem__title">Payment</p>

        <router-link to="/settings/debet-card" tag="div" class="settingItem__line">
          <div class="settingItem__icon" style="background: #5d2de1">
            <span class="mdi mdi-credit-card"></span>
          </div>
          <span class="settingItem__name">Debit Card</span>
          <span class="settingItem__value">4389</span>
          <span class="mdi mdi-chevron-right settingItem__arrow"></span>
        </router-link>

        <router-link to tag="div" class="settingItem__line">
          <div class="settingItem__icon">
            <img src="/img/bitcoin.svg" alt />
          </div>
          <span class="settingItem__name">BTC Wallet</span>
          <span class="settingItem__value"></span>
          <span class="mdi mdi-chevron-right settingItem__arrow"></span>
        </router-link>

        <router-link to tag="div" class="settingItem__line">
          <div class="settingItem__icon">
            <img src="/img/eth.svg" alt />
          </div>
          <span class="settingItem__name">ETH Wallet</span>
          <span class="settingItem__value"></span>
          <span class="mdi mdi-chevron-right settingItem__arrow"></span>
        </router-link>

        <router-link to tag="div" class="settingItem__line">
          <div class="settingItem__icon">
            <img src="/img/pzm.svg" alt />
          </div>
          <span class="settingItem__name">PZM Wallet</span>
          <span class="settingItem__value"></span>
          <span class="mdi mdi-chevron-right settingItem__arrow"></span>
        </router-link>

        <router-link to="/settings/add-wallet" tag="div" class="settingItem__line">
          <div class="settingItem__icon settingItem__icon_add">
            <span class="mdi mdi-plus"></span>
          </div>
          <span class="settingItem__name settingItem__name_add">Add Wallet</span>
          <span class="settingItem__value"></span>
          <span class="mdi mdi-chevron-right settingItem__arrow settingItem__arrow_add"></span>
        </router-link>
      </div>
    </div>

    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-9 m-sm-auto m-lg-0 m-md-0">
      <div class="settingItem">
        <p class="settingItem__title">Notifications</p>

        <div class="settingItem__line">
          <span class="settingItem__name">Sign In</span>
          <label
            class="toggler__wrapper settings__toggler"
            :class="signInNotification ? 'toggler_active' : '' "
            for="signInNotification"
          >
            <div class="toggler">
              <div class="toggler__way"></div>
              <div class="toggler__circle"></div>
            </div>
            <input
              type="checkbox"
              name
              id="signInNotification"
              class="toggler__input"
              v-model="signInNotification"
            />
          </label>
        </div>

        <div class="settingItem__line">
          <span class="settingItem__name">Deposit</span>
          <label
            class="toggler__wrapper settings__toggler"
            :class="depositNotification ? 'toggler_active' : '' "
            for="depositNotification"
          >
            <div class="toggler">
              <div class="toggler__way"></div>
              <div class="toggler__circle"></div>
            </div>
            <input
              type="checkbox"
              name
              id="depositNotification"
              class="toggler__input"
              v-model="depositNotification"
            />
          </label>
        </div>

        <div class="settingItem__line">
          <span class="settingItem__name">Withdrawal</span>
          <label
            class="toggler__wrapper settings__toggler"
            :class="withdrawNotification ? 'toggler_active' : '' "
            for="withdrawNotification"
          >
            <div class="toggler">
              <div class="toggler__way"></div>
              <div class="toggler__circle"></div>
            </div>
            <input
              type="checkbox"
              name
              id="withdrawNotification"
              class="toggler__input"
              v-model="withdrawNotification"
            />
          </label>
        </div>

        <div class="settingItem__line">
          <span class="settingItem__name">New Message</span>
          <label
            class="toggler__wrapper settings__toggler"
            :class="messageNotification ? 'toggler_active' : '' "
            for="messageNotification"
          >
            <div class="toggler">
              <div class="toggler__way"></div>
              <div class="toggler__circle"></div>
            </div>
            <input
              type="checkbox"
              name
              id="messageNotification"
              class="toggler__input"
              v-model="messageNotification"
            />
          </label>
        </div>

        <div class="settingItem__line">
          <span class="settingItem__name">Update</span>
          <label
            class="toggler__wrapper settings__toggler"
            :class="updateNotification ? 'toggler_active' : '' "
            for="updateNotification"
          >
            <div class="toggler">
              <div class="toggler__way"></div>
              <div class="toggler__circle"></div>
            </div>
            <input
              type="checkbox"
              name
              id="updateNotification"
              class="toggler__input"
              v-model="updateNotification"
            />
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      TwoFA: true,
      updateNotification: true,
      messageNotification: true,
      withdrawNotification: false,
      depositNotification: false,
      signInNotification: true
    };
  },
  computed: {
    userName() {
      return this.$store.getters.getUserName
    }
  }
}
</script>


<style lang="sass">
  
</style>