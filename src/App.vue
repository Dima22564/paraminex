/* eslint-disable */
<template>
  <div id="app" :class="isDarkMode ? 'my-darkTheme' : ''">
    <nav class="my-navigation" v-if="windowSize >= 992">
      <div class="container">
        <div class="my-navigation__content">
          <router-link to="/" class="my-navigation__logo">
            <img src="/img/logo.svg" alt v-if="isDarkMode === false" />
            <img src="/img/logo-dark.svg" alt v-if="isDarkMode === true" />
          </router-link>
          <ul class="my-navigation__links">
            <li class="my-navigation__link">
              <router-link to="/home">Home</router-link>
            </li>
            <li class="my-navigation__link">
              <router-link to="/exchange-rates">Rates</router-link>
            </li>
            <li class="my-navigation__link">
              <router-link to="/faq">FAQ</router-link>
            </li>
            <li class="my-navigation__link">
              <router-link to="/feedback">Feedback</router-link>
            </li>
          </ul>

          <label
            class="toggler__wrapper my-navigation__toggler"
            :class="switchDarkMode ? 'toggler_active' : '' "
            for="darkMode"
          >
            <div class="toggler">
              <div class="toggler__way"></div>
              <div class="toggler__circle"></div>
            </div>
            <input
              type="checkbox"
              name
              id="darkMode"
              class="toggler__input"
              v-model="switchDarkMode"
              @input="setDarkMode"
            />
            <span class="toggler__placeholder">Dark Mode</span>
          </label>

          <div class="my-navigation__langs langs">
            <button class="langs__current" @click="showLangs = !showLangs">
              <img src="/img/russia.svg" alt />
              <span class="langs__text">ru</span>
            </button>
            <ul class="langs__list" v-show-slide="showLangs" @mouseleave="showLangs = false">
              <li class="langs__item">
                <img src="/img/china.svg" alt />
                <span class="langs__text_secondary">English</span>
                <span class="mdi mdi-check langs__check" v-if="!isLangChosen"></span>
              </li>
              <li class="langs__item">
                <img src="/img/united-kingdom.svg" alt />
                <span class="langs__text_secondary">Русский</span>
                <span class="mdi mdi-check langs__check" v-if="isLangChosen"></span>
              </li>
              <li class="langs__item">
                <img src="/img/germany-1.svg" alt />
                <span class="langs__text_secondary">Française</span>
                <span class="mdi mdi-check langs__check" v-if="!isLangChosen"></span>
              </li>
            </ul>
          </div>

          <!-- Sign in button  -->
          <button
            class="my-btn my-btn_primary"
            v-if="isLogIn === null"
            @click="showPopup(true)"
          >Sign In</button>

          <!-- Settings -->
          <div class="my-navigation__settings settings" v-else>
            <div class="settings__btn" @click="showSettings = !showSettings">
              <div class="settings__img">
                <img src="/img/avatar.jpg" alt />
              </div>
              <span
                class="mdi mdi-chevron-down settings__arrow"
                :class="showSettings ? 'settings__arrow_rotate' : ''"
              ></span>
            </div>
            <div
              class="settings__items"
              v-show-slide="showSettings"
              @mouseleave="showSettings = false"
            >
              <span class="settings__name">vino_costa</span>

              <router-link to class="settings__item settings__item_emp">
                <span class="mdi mdi-credit-card-outline settings__icon"></span>
                <span class="settings__text">Balance</span>
                <span class="settings__text_secondary">12,830.99 PRB</span>
              </router-link>

              <router-link
                :to="item.path"
                class="settings__item"
                v-for="(item, index) in links"
                :key="index"
              >
                <span :class="item.icon" class="mdi settings__icon"></span>
                <span class="settings__text">{{ item.text }}</span>
              </router-link>

              <button class="settings__item settings__item_btn">
                <span class="mdi mdi-login-variant settings__icon"></span>
                <span class="settings__text">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <nav
      class="my-navigation_mobile"
      :class="menuHide ? 'my-navigation_mobile_hide' : ''"
      v-if="windowSize < 992 && !menuHide"
    >
      <div class="container">
        <div class="my-navigation_mobile__top">
          <router-link to="/" class="my-navigation_mobile__logo">
            <img src="/img/logo.svg" alt v-if="isDarkMode === false" />
            <img src="/img/logo-dark.svg" alt v-if="isDarkMode === true" />
          </router-link>
          <span
            :class="`mdi ${showMobileMenu ? 'mdi-close': 'mdi-menu'} my-navigation_mobile__menu`"
            @click="showMobileMenu = !showMobileMenu"
          ></span>
        </div>
        <div v-show-slide="showMobileMenu" class="my-navigation_mobile__wrapper">
          <div class="my-navigation_mobile__links">
            <router-link class="my-navigation_mobile__link" to="/home">Home</router-link>
            <router-link class="my-navigation_mobile__link" to="/exchange-rates">Rates</router-link>
            <router-link class="my-navigation_mobile__link" to="/faq">FAQ</router-link>
            <router-link class="my-navigation_mobile__link" to="/feedback">Feedback</router-link>
          </div>

          <label
            class="toggler__wrapper my-navigation_mobile__toggler"
            :class="isDarkMode ? 'toggler_active' : '' "
            for="darkModeMobile"
          >
            <div class="toggler">
              <div class="toggler__way"></div>
              <div class="toggler__circle"></div>
            </div>
            <input
              type="checkbox"
              name
              id="darkModeMobile"
              class="toggler__input"
              v-model="switchDarkMode"
              
            />
            <span class="toggler__placeholder">Dark Mode</span>
          </label>

          <div class="my-navigation_mobile__addition" @click="showMobileLangs">
            <img src="/img/united-kingdom.svg" alt />
            <span class="my-navigation_mobile__text">Language</span>
            <span class="mdi mdi-chevron-right"></span>
          </div>
          <div
            class="my-navigation_mobile__addition my-navigation_mobile__addition_reg"
            v-if="isLogIn"
            @click="showMobileLinks"
          >
            <img src="/img/united-kingdom.svg" alt />
            <span class="my-navigation_mobile__text">Account</span>
            <span class="mdi mdi-chevron-right"></span>
          </div>
          <button
            class="my-btn my-btn_primary my-navigation_mobile__btn"
            v-if="!isLogIn"
            @click="showPopup(true)"
          >Sign Up</button>
        </div>
      </div>
    </nav>

    <nav class="my-navigation-mobile-cabinet" v-if="windowSize <= 992 && !isMobileCabinetHide">
      <div class="container">
        <div class="my-navigation-mobile-cabinet__top">
          <div class="my-navigation-mobile-cabinet__back" @click="backLinks">
            <span class="mdi mdi-chevron-left"></span>
            <span>Back</span>
          </div>
          <span class="my-navigation-mobile-cabinet__name">vino_costa</span>
        </div>

        <div class="my-navigation-mobile-cabinet__links">
          <div class="my-navigation-mobile-cabinet__link my-navigation-mobile-cabinet__link_emp">
            <span class="mdi mdi-credit-card-outline"></span>
            <span class="text">Balance</span>
            <span class="balance">12,830.99 PRB</span>
          </div>

          <router-link
            class="my-navigation-mobile-cabinet__link"
            :to="item.path"
            tag="div"
            v-for="(item, index) in links"
            :key="index"
          >
            <span class="mdi" :class="item.icon"></span>
            <span class="text">{{ item.text }}</span>
          </router-link>

          <div
            class="my-navigation-mobile-cabinet__link my-navigation-mobile-cabinet__link_signOut"
          >
            <span class="mdi mdi-login-variant"></span>
            <span class="text">Sign Out</span>
          </div>
        </div>
      </div>
    </nav>

    <nav class="my-navigation-mobile-langs" v-if="windowSize <= 992 && !isMobileLangsHide">
      <div class="container">
        <div class="my-navigation-mobile-cabinet__top">
          <div class="my-navigation-mobile-cabinet__back" @click="backLang">
            <span class="mdi mdi-chevron-left"></span>
            <span>Back</span>
          </div>
          <span class="my-navigation-mobile-cabinet__name">Language</span>
          <button class="my-navigation-mobile-langs__done">Done</button>
        </div>
        <div class="my-navigation_mobile__addition my-navigation-mobile-langs__addition">
          <img src="/img/united-kingdom.svg" alt />
          <span class="my-navigation_mobile__text">Language</span>
          <span class="mdi mdi-check"></span>
        </div>
        <div class="my-navigation_mobile__addition my-navigation-mobile-langs__addition">
          <img src="/img/united-kingdom.svg" alt />
          <span class="my-navigation_mobile__text">Language</span>
        </div>
        <div class="my-navigation_mobile__addition my-navigation-mobile-langs__addition">
          <img src="/img/united-kingdom.svg" alt />
          <span class="my-navigation_mobile__text">Language</span>
        </div>
      </div>
    </nav>

    <!-- Content view -->
    <router-view></router-view>

    <!-- Footer adapted = true -->
    <footer class="my-footer">
      <div class="container">
        <div class="my-footer__links">
          <router-link to="/home" class="my-footer__logo">
            <img src="/img/logo.svg" alt="" v-if="isDarkMode === false">
            <img src="/img/logo-dark.svg" alt="" v-else>
          </router-link>
          <ul class="my-footer__nav">
            <li class="my-footer__item">
              <router-link to="/home" class="my-footer__link">
                <span>Home</span>
                <span class="mdi mdi-chevron-right" v-if="windowSize <= 575"></span>
              </router-link>
            </li>
            <li class="my-footer__item">
              <router-link to class="my-footer__link">
                <span>RATES</span>
                <span class="mdi mdi-chevron-right" v-if="windowSize <= 575"></span>
              </router-link>
            </li>
            <li class="my-footer__item">
              <router-link to="/faq" class="my-footer__link">
                <span>FAQ</span>
                <span class="mdi mdi-chevron-right" v-if="windowSize <= 575"></span>
              </router-link>
            </li>
            <li class="my-footer__item">
              <router-link to="/feedback" class="my-footer__link">
                <span>FEEDBACk</span>
                <span class="mdi mdi-chevron-right" v-if="windowSize <= 575"></span>
              </router-link>
            </li>
          </ul>

          <div class="my-footer__lang my-footer__social">
            <img src="/img/china.svg" alt />
          </div>

          <ul class="my-footer__socials">
            <li class="my-footer__social">
              <a href>
                <span class="mdi mdi-telegram"></span>
              </a>
            </li>
            <li class="my-footer__social">
              <a href>
                <span class="mdi mdi-bitcoin"></span>
              </a>
            </li>
            <li class="my-footer__social">
              <a href>
                <span class="mdi mdi-facebook"></span>
              </a>
            </li>
            <li class="my-footer__social">
              <a href>
                <span class="mdi mdi-github-circle"></span>
              </a>
            </li>
            <li class="my-footer__social">
              <a href>
                <span class="mdi mdi-linkedin-box"></span>
              </a>
            </li>
            <li class="my-footer__social">
              <a href>
                <span class="mdi mdi-youtube"></span>
              </a>
            </li>
          </ul>
        </div>

        <div class="my-footer__bottom">
          <p class="my-footer__text">© Paraminex, 2019. All rights reserved.</p>
          <a href class="my-footer__text">Terms & Conditions</a>
          <a href class="my-footer__text">Privacy Policy</a>
          <a href class="my-footer__text">Sales & Refunds</a>
          <a href class="my-footer__text">Legal</a>
          <p class="my-footer__text">
            made by
            <a href class="my-footer__text_emp">roobinium</a>
          </p>
        </div>
      </div>
    </footer>
    <!-- Footer adapted = true -->

    <signUp></signUp>

    <passwordRecovery></passwordRecovery>

    <congratsPopup></congratsPopup>

    <oopsPopup></oopsPopup>

    <cardOrderPopup></cardOrderPopup>
  </div>
</template>

<script>
import signUp from "./components/popups/signUp";
import passwordRecovery from "./components/popups/passwordRecovery";
import congratsPopup from "./components/popups/congrats";
import oopsPopup from "./components/popups/ooops";
import cardOrderPopup from './components/popups/cardOrder'
export default {
  data() {
    return {
      showLangs: false,
      isLangChosen: true,
      showMobileMenu: false,
      showSettings: false,
      menuHide: false,
      isMobileCabinetHide: true,
      isMobileLangsHide: true,
      switchDarkMode: false,
      links: [
        {
          text: "Dashboard",
          path: "/dashboard",
          icon: "mdi mdi-view-dashboard-outline"
        },
        {
          text: "Payments",
          path: "/payments",
          icon: "mdi mdi-wallet-outline"
        },
        {
          text: "Prizm Mining",
          path: "/prizm-mining",
          icon: "mdi mdi-equalizer"
        },
        {
          text: "Achievements",
          path: "/achievements",
          icon: "mdi mdi-bookmark-outline"
        },
        {
          text: "VIP Status",
          path: "/vip",
          icon: "mdi mdi-star-outline"
        },
        {
          text: "Support",
          path: "/support",
          icon: "mdi mdi-message-settings-outline"
        },
        {
          text: "Settings",
          path: "/settings/main",
          icon: "mdi mdi-settings-outline"
        }
      ]
    };
  },
  computed: {
    windowSize() {
      return this.$store.getters.getWindowSize;
    },
    isDarkMode() {
      return this.$store.getters.getDarkMode;
    },
    isLogIn() {
      return this.$store.getters.getUser;
    }
  },
  methods: {
    // logIn(arg) {
    //   this.$store.commit("changeUser", arg);
    // },
    setDarkMode() {
      if(this.switchDarkMode === true){
        this.$store.commit('toggleDarkMode', false)
        console.log(this.isDarkMode)
      } else {
        this.$store.commit('toggleDarkMode', true)
        console.log(this.isDarkMode)
      }
    },
    showMobileLangs() {
      this.isMobileLangsHide = false;
      this.isMobileCabinetHide = true;
      this.menuHide = true;
    },
    backLang() {
      this.isMobileLangsHide = true;
      this.isMobileCabinetHide = true;
      this.menuHide = false;
    },
    showMobileLinks() {
      this.isMobileLangsHide = true;
      this.isMobileCabinetHide = false;
      this.menuHide = true;
    },
    backLinks() {
      this.isMobileLangsHide = true;
      this.isMobileCabinetHide = true;
      this.menuHide = false;
    },
    showPopup(arg) {
      this.$store.commit("regPopup", arg);
      this.showMobileMenu = false;
      this.showSettings = false;
      this.isMobileCabinetHide = true;
      this.isMobileLangsHide = true;
    },
    showPopupAddCard(arg) {
      this.$store.commit("cardOrderPopup", arg);
    } // this method shows popup Card Order with argument true
  },
  components: {
    signUp,
    passwordRecovery,
    congratsPopup,
    oopsPopup,
    cardOrderPopup
  },
  mounted() {
    var that = this;
    this.isMobileCabinetHide = true;
    this.menuHide = false;
    this.isMobileLangsHide = true;
    this.$store.dispatch("changeWindowSizeAction", window.innerWidth);
    window.addEventListener("resize", function() {
      var windowSize = window.innerWidth;
      that.$store.dispatch("changeWindowSizeAction", windowSize);
    });
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="sass">
@import './styles/_main-variables'
@import './styles/style'
#app
  overflow: hidden
  +lg
    padding-top: 73px
  +sm
    padding-top: 63px
</style>
