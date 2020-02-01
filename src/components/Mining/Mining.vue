<template>
  <div>
    <bread-crumb
      :firstLink="'Home'"
      :firstPath="'/home'"
      :secondLink="'Prizm Mining'"
      :secondPath="'/prizm-mining'"
    ></bread-crumb>

    <div class="prizmMining">
      <div class="container">
        <div class="row">
          <!-- Aside -->
          <my-aside></my-aside>
          <!-- Aside -->

          <div class="col-xl-9 col-lg-9">
            <h1 class="prizmMining__title">Prizm Mining</h1>
            <div class="prizmMining__top">
              <div class="prizmMining__my-coin my-coin prizmMining__item">
                <div class="my-coin__imgWrapper">
                  <img src="/img/bitcoin.svg" alt class="my-coin__img" />
                </div>
                <div>
                  <p class="my-coin__text">pzm</p>
                  <p class="my-coin__text_emp">Prizm</p>
                </div>
              </div>
              <div class="my-currency prizmMining__item">
                <p class="my-currency__text">
                  0.89002348
                  <span>pzm</span>
                </p>
                <div class="my-currency__text_emp">
                  12,830.99
                  <span>prb</span>
                </div>
              </div>
              <div class="prizmMining__item prizmMining__btns">
                <button class="my-btn my-btn_transparent" @click="showWithdraw(true)">Withdraw</button>
                <button class="my-btn my-btn_primary" @click="showPopup(true)">Invest</button>
              </div>
            </div>

            <section class="my-paramining">
              <div class="prizmMining__subtitle">
                <h4 class>Paramining</h4>
                <label
                  class="toggler__wrapper toggler_reverse"
                  :class="mining1 ? 'toggler_active' : '' "
                  for="mining1"
                >
                  <div class="toggler">
                    <div class="toggler__way"></div>
                    <div class="toggler__circle"></div>
                  </div>
                  <input type="checkbox" name id="mining1" class="toggler__input" v-model="mining1" />
                  <span class="toggler__placeholder toggler__placeholder_light">Reinvest profits</span>
                </label>
              </div>
              <div class="my-progress">
                <span class="my-progress__num">54%</span>
                <div class="my-progress__wrapper">
                  <span class="my-progress__line"></span>
                </div>
              </div>
              <div class="my-info">
                <div class="my-info__item">
                  <span class="my-info__title">mining body</span>
                  <span class="my-info__num">250 PZM</span>
                </div>
                <div class="my-info__item">
                  <span class="my-info__title">profit</span>
                  <span class="my-info__num">50.9281 PZM</span>
                </div>
                <div class="my-info__item">
                  <span class="my-info__title">Profitability</span>
                  <span class="my-info__num">10%</span>
                </div>
              </div>
            </section>

            <section class="my-calc">
              <div class="prizmMining__subtitle">
                <h4 class>Profitability Calculator</h4>
                <label
                  class="toggler__wrapper toggler_reverse"
                  :class="mining2 ? 'toggler_active' : '' "
                  for="mining2"
                >
                  <div class="toggler">
                    <div class="toggler__way"></div>
                    <div class="toggler__circle"></div>
                  </div>
                  <input type="checkbox" name id="mining2" class="toggler__input" v-model="mining2" />
                  <span class="toggler__placeholder toggler__placeholder_light">Reinvest profits</span>
                </label>
              </div>
              <div class="my-calc__wallet">
                <div class="my-rankSlider">
                  <div class="my-rankSlider__placeholder">
                    <span class="my-rankSlider__wallet">Wallet balance PRIZM</span>
                    <span>{{ walletBalance }}</span>
                  </div>
                  <VueSlideBar
                    v-model="walletBalance"
                    @callbackRange="callbackRange"
                    class="my-rankSlider__slider"
                    :min="0"
                    :max="100000.0"
                  ></VueSlideBar>
                </div>
                <div class="my-info__item">
                  <span class="my-info__num">66,666</span>
                  <span class="my-info__title">pzm</span>
                </div>
              </div>

              <div class="my-calc__profits">
                <div class="my-profitItem">
                  <p class="my-profitItem__month">
                    12
                    <span>months</span>
                  </p>
                  <p class="my-profitItem__emp">term</p>
                </div>
                <div class="my-profitItem">
                  <p class="my-profitItem__month">
                    15
                    <span>%/month</span>
                  </p>
                  <p class="my-profitItem__emp">Profitability</p>
                </div>
                <div class="my-profitItem">
                  <p class="my-profitItem__month">
                    175
                    <span>pzm</span>
                  </p>
                  <p class="my-profitItem__emp">amount</p>
                </div>
              </div>

              <div class="my-calc__table my-calcTable">
                <div class="my-calcTable__titles">
                  <span class="my-calcTable__title my-calcTable__title_w6"></span>
                  <span class="my-calcTable__title">From 100 PRZ</span>
                  <span class="my-calcTable__title">From 5,000 PRZ</span>
                  <span class="my-calcTable__title">From 50,000 PZM</span>
                  <span class="my-calcTable__title">From 100,000 PRZ</span>
                </div>
                <div class="my-calcTable__lines">
                  <div class="my-calcTable__line">
                    <span class="my-calcTable__cell my-calcTable__cell_w6">Daily</span>
                    <div class="my-calcTable__cell">
                      <span class="my-calcTable__mobileTitle">From 100 PRZ</span>
                      <span>0.5%</span>
                    </div>
                    <div class="my-calcTable__cell">
                      <span class="my-calcTable__mobileTitle">From 5,000 PRZ</span>
                      <span>0.6%</span>
                    </div>
                    <div class="my-calcTable__cell">
                      <span class="my-calcTable__mobileTitle">From 50,000 PRZ</span>
                      <span>0.7%</span>
                    </div>
                    <div class="my-calcTable__cell">
                      <span class="my-calcTable__mobileTitle">From 100,000 PRZ</span>
                      <span>0.8%</span>
                    </div>
                  </div>
                  <div class="my-calcTable__line">
                    <span class="my-calcTable__cell my-calcTable__cell_w6">Monthly</span>
                    <div class="my-calcTable__cell">
                      <span class="my-calcTable__mobileTitle">From 100 PRZ</span>
                      <span>0.5%</span>
                    </div>
                    <div class="my-calcTable__cell">
                      <span class="my-calcTable__mobileTitle">From 5,000 PRZ</span>
                      <span>0.6%</span>
                    </div>
                    <div class="my-calcTable__cell">
                      <span class="my-calcTable__mobileTitle">From 50,000 PRZ</span>
                      <span>0.7%</span>
                    </div>
                    <div class="my-calcTable__cell">
                      <span class="my-calcTable__mobileTitle">From 100,000 PRZ</span>
                      <span>0.8%</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="my-stat">
              <div class="prizmMining__subtitle">
                <h4>Statistics</h4>
              </div>
              <div class="my-stat__profits">
                <div class="my-profitItem my-profitItem_w25 my-profitItem_green">
                  <p class="my-profitItem__month my-profitItem__month_green">
                    40.1426
                    <span>pzr</span>
                  </p>
                  <p class="my-profitItem__emp">invested</p>
                </div>
                <div class="my-profitItem my-profitItem_w25 my-profitItem_blue">
                  <p class="my-profitItem__month my-profitItem__month_blue">
                    16.0896
                    <span>pzr</span>
                  </p>
                  <p class="my-profitItem__emp">Earned</p>
                </div>
                <div class="my-profitItem my-profitItem_w25 my-profitItem_violet">
                  <p class="my-profitItem__month my-profitItem__month_violet">
                    14.28
                    <span>%/mo</span>
                  </p>
                  <p class="my-profitItem__emp">avg pl</p>
                </div>
                <div class="my-profitItem my-profitItem_w25 my-profitItem_orange">
                  <p class="my-profitItem__month my-profitItem__month_orange">
                    26.7330
                    <span>pzr</span>
                  </p>
                  <p class="my-profitItem__emp">Referral</p>
                </div>
              </div>
            </section>

            <div class="row">
              <div class="col-xl-4 col-lg-5 col-md-5">
                <section class="my-referral">
                  <div class="prizmMining__subtitle">
                    <h4>Referral Program</h4>
                  </div>
                  <p
                    class="my-referral__text"
                  >Invite familiar investors and get 5% one-time from their first deposit. The bonus will be credited to your PRZ wallet account.</p>
                  <div class="my-referral__link my-option-wrapper_withoutSelect">
                    <p class="my-option__placeholder">Your link</p>
                    <div class="my-option-wrapper my-option-wrapper_unSelect">
                      <input type="text" class="my-option__title" readonly />
                      <div class="my-option__currency">
                        <button class="my-option__subBtn">Copy</button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div class="col-xl-8 col-lg-7 col-md-7">
                <section class="my-miningHistory">
                  <div class="prizmMining__subtitle">
                    <h4>History</h4>
                  </div>
                  <div class="my-miningHistory__titles">
                    <span class="my-miningHistory__title">Investor</span>
                    <span class="my-miningHistory__title my-miningHistory__title_w20">Date</span>
                    <span class="my-miningHistory__title my-miningHistory__title_right">Bonus</span>
                  </div>
                  <div class="my-miningHistory__lines">
                    <div class="my-miningHistory__line">
                      <div class="my-miningHistory__cell my-miningHistory__cell_emp">
                        <span>Cryptonator (41245124)</span>
                      </div>
                      <div class="my-miningHistory__cell my-miningHistory__cell_w20">
                        <span class="my-miningHistory__mobileTitle">Date</span>
                        <span>12 Apr 2019</span>
                      </div>
                      <div class="my-miningHistory__cell my-miningHistory__cell_right">
                        <span class="my-miningHistory__mobileTitle">Bonus</span>
                        <span>0.04857195 PRZ</span>
                      </div>
                    </div>

                    <div class="my-miningHistory__line">
                      <div class="my-miningHistory__cell my-miningHistory__cell_emp">
                        <span>Cryptonator (41245124)</span>
                      </div>
                      <div class="my-miningHistory__cell my-miningHistory__cell_w20">
                        <span class="my-miningHistory__mobileTitle">Date</span>
                        <span>12 Apr 2019</span>
                      </div>
                      <div class="my-miningHistory__cell my-miningHistory__cell_right">
                        <span class="my-miningHistory__mobileTitle">Bonus</span>
                        <span>0.04857195 PRZ</span>
                      </div>
                    </div>

                    <div class="my-miningHistory__line">
                      <div class="my-miningHistory__cell my-miningHistory__cell_emp">
                        <span>Cryptonator (41245124)</span>
                      </div>
                      <div class="my-miningHistory__cell my-miningHistory__cell_w20">
                        <span class="my-miningHistory__mobileTitle">Date</span>
                        <span>12 Apr 2019</span>
                      </div>
                      <div class="my-miningHistory__cell my-miningHistory__cell_right">
                        <span class="my-miningHistory__mobileTitle">Bonus</span>
                        <span>0.04857195 PRZ</span>
                      </div>
                    </div>
                  </div>

                  <div class="my-miningHistory__bottom">
                    <div class="my-miningHistory__my-pagination my-pagination">
                      <span class="mdi mdi-chevron-left my-pagination__arrow"></span>
                      <div class="my-pagination__dots">
                        <span class="my-pagination__dot">1</span>
                        <span class="my-pagination__dot">2</span>
                        <span class="my-pagination__dot my-pagination__dot_active">3</span>
                        <span class="my-pagination__dot">...</span>
                        <span class="my-pagination__dot">8</span>
                      </div>
                      <span class="mdi mdi-chevron-right my-tab my-pagination__arrow"></span>
                    </div>

                    <button class="my-miningHistory__btn">Show More</button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <investPopup></investPopup>

    <withdrawPopup></withdrawPopup>
  </div>
</template>

<script>
import investPopup from './invest'
import withdrawPopup from './withdraw'
export default {
  data() {
    return {
      mining1: "",
      mining2: "",
      walletBalance: "0"
    };
  },
  methods: {
    callbackRange() {
      return 1;
    },
    showPopup(arg) {
      this.$store.commit("investPopup", arg);
    },
    showWithdraw(arg) {
      this.$store.commit("withdrawPopup", arg);
    }
  },
  components: {
    investPopup,
    withdrawPopup
  }
};
</script>

<style lang="sass">
@import '../../styles/_main-variables'
.prizmMining
  padding-bottom: 72px
  &__title
    margin-bottom: 32px
    +lg
      margin-top: 32px
    +md
      margin-top: 0
  &__item
    width: 33.3333%
    +lg
      width: 50%
    +md
      width: 100%
      padding: 24px 0
  &__top
    display: flex
    align-items: center
    box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12)
    background: $white
    border-radius: 12px
    padding: 24px
    margin-bottom: 32px
    +lg
      flex-wrap: wrap
    +md
      margin-bottom: 24px
  &__btns
    display: flex
    align-items: center
    justify-content: space-between
    +lg
      width: 100%
      justify-content: center
      margin-top: 16px
      padding: 0
    +md
      margin-top: 0
    button
      &:not(:last-child)
        +lg
          margin-right: 18px
  &__subtitle
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 42px
    +md
      flex-direction: column
      align-items: flex-start
      .toggler__wrapper
        margin-top: 24px
    h4
      color: $gray
.my-coin
  display: flex
  align-items: center
  &__imgWrapper
    width: 48px
    height: 48px
    border-radius: 50%
    flex-shrink: 0
    background: rgba(156, 66, 245, 0.03)
    display: flex
    align-items: center
    justify-content: center
    margin-right: 24px
  &__img
    width: 20px
    height: 20px
  &__text
    line-height: 24px
    letter-spacing: 1px
    text-transform: uppercase
    font-weight: 600
    color: $light-gray
    &_emp
      font-size: 18px
      line-height: 24px
.my-currency
  &__text
    font-size: 24px
    line-height: 24px
    font-weight: bold
    margin-bottom: 8px
    span
      font-size: 14px
      line-height: 16px
      text-transform: uppercase
    &_emp
      font-size: 14px
      line-height: 24px
      font-weight: bold
      color: $light-gray
      span
        text-transform: uppercase
.my-paramining
  background: $white
  padding: 24px
  border-radius: 12px
  box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12)
  margin-bottom: 32px
  +md
    margin-bottom: 24px
.my-progress
  display: flex
  align-items: center
  margin-bottom: 32px
  &__num
    margin-right: 14px
    font-size: 16px
    line-height: 24px
  &__wrapper
    height: 8px
    background: rgba(20, 16, 41, 0.06)
    border-radius: 4px
    width: 100%
    position: relative
  &__line
    position: absolute
    border-radius: 4px
    height: 8px
    background: $primary
    width: 54%
.my-info
  display: flex
  justify-content: space-between
  +md
    flex-wrap: wrap
  &__item
    width: calc(33.333% - 12px)
    background: $hover-gray
    padding: 12px 16px
    border-radius: 4px
    display: flex
    align-items: center
    justify-content: space-between
    +xl
      flex-direction: column
      align-items: flex-start
    +md
      flex-direction: row
      align-items: center
      width: 100%
      &:not(:last-child)
        margin-bottom: 16px
  &__title
    text-transform: uppercase
    letter-spacing: 1px
    font-size: 14px
    line-height: 24px
    color: $light-gray
    font-weight: 600
  &__num
    font-size: 16px
    line-height: 24px
.my-calc
  background: $white
  padding: 24px
  border-radius: 12px
  box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12)
  margin-bottom: 32px
  +md
    margin-bottom: 24px
  &__wallet
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 34px
    +md
      flex-direction: column
      align-items: flex-start
  &__profits
    margin-bottom: 24px
    display: flex
    justify-content: space-between
    +md
      flex-direction: column
  &__table
    padding: 16px
    background: rgba(20, 16, 41, 0.02)
    border-radius: 4px
.my-rankSlider
  width: calc(66.6666% - 12px)
  +md
    width: 100%
    margin-bottom: 34px
  &__placeholder
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 18px
    font-size: 14px
    line-height: 16px
  &__wallet
    color: rgba(20, 16, 41, 0.4)
  &__slider
    padding-top: 0 !important
    .vue-slide-bar-tooltip
      width: 24px !important
      height: 24px !important
      border-radius: 50% !important
      font-size: 0 !important
      display: block !important
      top: 16px !important
      background: $white !important
      box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12)
      border: none !important
      &::before
        display: none !important
    .vue-slide-bar-process
      background: $primary !important
.my-stat
  background: $white
  padding: 24px
  border-radius: 12px
  box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12)
  margin-bottom: 32px
  +md
    margin-bottom: 24px
  &__profits
    display: flex
    justify-content: space-between
    +md
      flex-direction: column
.my-referral
  background: $white
  padding: 24px
  border-radius: 12px
  height: 100%
  display: flex
  flex-direction: column
  box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12)
  &__text
    font-size: 14px
    line-height: 24px
    color: $light-gray
    margin-bottom: 68px
  &__link
    margin-top: auto
    .my-option__title
      max-width: 77%
.my-miningHistory
  background: $white
  padding: 24px 0 24px 24px
  border-radius: 12px
  box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12)
  +md
    margin-top: 24px
  &__titles
    display: flex
    align-items: center
    padding: 12px 40px 12px 16px
    justify-content: space-between
    font-size: 14px
    line-height: 24px
    margin-bottom: 8px
    +lg
      display: none
  &__title
    width: 37%
    &_w20
      width: 25%
      padding-left: 30px
    &_right
      text-align: right
  &__lines
    max-height: 145px
    overflow-y: auto
    margin-bottom: 24px
    +lg
      max-height: 200px
    +md
      max-height: 385px
  &__line
    padding: 12px 40px 12px 16px
    display: flex
    align-items: center
    justify-content: space-between
    border-radius: 4px
    transition: all 0.2s
    +lg
      flex-direction: column
    +md
      padding: 16px 40px 16px 0
    &:hover
      background: rgba(20, 16, 41, 0.02)
      cursor: pointer
  &__mobileTitle
    display: none
    color: $gray
    +lg
      display: block
  &__cell
    width: 37%
    font-size: 14px
    line-height: 24px
    color: $light-gray
    +lg
      display: flex
      align-items: center
      width: 100%
      justify-content: space-between
      &:not(:last-child)
        margin-bottom: 4px
    &_emp
     color: $gray
     +lg
      font-size: 16px
      margin-bottom: 16px !important
    &_w20
      width: 25%
      padding-left: 30px
      +lg
        width: 100%
        padding-left: 0
    &_right
      text-align: right
  &__bottom
    display: flex
    align-items: center
    justify-content: space-between
    padding-right: 40px
    +xl
      flex-direction: column-reverse
      align-items: flex-start
  &__btn
    border: none
    font-size: 14px
    line-height: 20px
    padding: 8px 16px
    border-radius: 18px
    background: $hover-gray
    transition: all 0.2s
    +xl
      margin-bottom: 32px
    &:hover
      background: rgba(20, 16, 41, 0.04)
.my-profitItem
  background: rgba(20, 16, 41, 0.02)
  width: calc(33.3333% - 12px)
  border-radius: 4px
  padding: 24px
  +md
    width: 100%
    &:not(:last-child)
      margin-bottom: 24px
  &_w25
    width: calc(25% - 12px)
    +md
      width: 100%
      &:not(:last-child)
        margin-bottom: 24px
  &_green
    background: rgba(22, 184, 98, 0.02)
  &_blue
    background: rgba(0, 187, 255, 0.03)
  &_violet
    background: rgba(195, 45, 225, 0.03)
  &_orange
    background: rgba(255, 94, 0, 0.03)
  &__month
    font-size: 24px
    line-height: 24px
    font-weight: bold
    letter-spacing: -1px
    text-transform: uppercase
    &_green
      color: #16b862
    &_blue
      color: #00bbff
    &_violet
      color: #c32de1
    &_orange
      color: #ff5e00
    span
      font-size: 14px
      line-height: 24px
      letter-spacing: 1px
      font-weight: 600
  &__emp
    line-height: 24px
    text-transform: uppercase
    letter-spacing: 1px
    color: $light-gray
    font-size: 14px
    font-weight: 600
.my-calcTable
  &__titles
    padding: 12px 16px
    font-size: 14px
    line-height: 24px
    display: flex
    margin-bottom: 8px
    +md
      display: none
  &__title
    width: 23%
    text-align: right
    &_w6
      width: 6%
  &__line
    display: flex
    align-items: center
    padding: 12px 16px
    +md
      flex-direction: column
      width: 100%
      padding: 16px 12px
  &__mobileTitle
    display: none
    +md
      display: block
  &__cell
    width: 23%
    text-align: right
    color: $light-gray
    font-size: 14px
    line-height: 24px
    +md
      width: 100%
      display: flex
      align-items: center
      justify-content: space-between
      &:not(:last-child)
        margin-bottom: 4px
    &_w6
      width: 6%
      text-align: left
      color: $gray
      +md
        width: 100%
        font-size: 16px
        margin-bottom: 16px !important
</style>
