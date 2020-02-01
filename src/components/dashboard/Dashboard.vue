<template>
  <div>
    <bread-crumb
      :firstLink="'Home'"
      :firstPath="'/home'"
      :secondLink="'Dashboard'"
      :secondPath="'/dashboard'"
    ></bread-crumb>

    <section class="dashboard">
      <div class="container">
        <div class="row">
          <!-- Aside -->
          <my-aside></my-aside>
          <!-- Aside -->

          <div class="col-xl-9 col-lg-9">
            <!-- Cards  adapted = true -->
            <section class="anonymousCards">
              <div class="dashboard__title">
                <h3>My Anonymous Cards</h3>
                <span class="mdi mdi-alert-circle-outline"></span>
              </div>
              <slick :options="slickSettings" class="anonSlider">
                <div class="anonCard anonCard">
                  <div class="anonCard__bgElem"></div>
                  <div class="anonCard__bgElem anonCard__bgElem_big"></div>
                  <div class="anonCard__logo">
                    <img src="/img/mastercard.svg" alt />
                  </div>
                  <div class="anonCard__dots">
                    <span class="anonCard__dot"></span>
                    <span class="anonCard__dot"></span>
                    <span class="anonCard__dot"></span>
                    <span class="anonCard__dot"></span>
                    <p class="anonCard__num">5824</p>
                    <span class="mdi mdi-chevron-right anonCard__icon"></span>
                  </div>
                </div>

                <div class="anonCard anonCard_orange">
                  <div class="anonCard__bgElem anonCard__bgElem_orange"></div>
                  <div class="anonCard__bgElem anonCard__bgElem_big anonCard__bgElem_orange"></div>
                  <div class="anonCard__logo">
                    <img src="/img/mastercard.svg" alt />
                  </div>
                  <div class="anonCard__dots">
                    <span class="anonCard__dot"></span>
                    <span class="anonCard__dot"></span>
                    <span class="anonCard__dot"></span>
                    <span class="anonCard__dot"></span>
                    <p class="anonCard__num">5824</p>
                    <span class="mdi mdi-chevron-right anonCard__icon"></span>
                  </div>
                </div>

                <div class="anonCard anonCard_add">
                  <div class="anonCard__logo">
                    <img src="/img/mastercard.svg" alt />
                  </div>
                  <div class="anonCard__dots">
                    <span class="anonCard__dot anonCard__dot_gray"></span>
                    <span class="anonCard__dot anonCard__dot_gray"></span>
                    <span class="anonCard__dot anonCard__dot_gray"></span>
                    <span class="anonCard__dot anonCard__dot_gray"></span>
                    <p class="anonCard__num anonCard__num_gray">0000</p>
                    <span class="mdi mdi-plus anonCard__icon anonCard__icon_gray"></span>
                  </div>
                </div>
              </slick>
            </section>

            <!-- Cards  adapted = true -->
            <section class="anonymousCards">
              <div class="dashboard__title">
                <h3>My Accounts</h3>
                <span class="mdi mdi-alert-circle-outline"></span>
              </div>
              <slick :options="slickSettings" class="anonSlider">

                <div class="account">
                  <div class="account__title">
                    <div class="account__icon">
                      <img src="" alt="">
                    </div>
                    <div class="account__text">
                      <p class="account__abb">ETH</p>
                      <p class="account__name">Ethereum</p>
                    </div>
                  </div>
                  <p class="account__num">0.89002348 <span>btc</span></p>
                  <p class="account__num_secondary">12,830.99 <span>prb</span> </p>
                  <div class="account__bottom">
                    <button class="my-btn my-btn_transparent my-btn_transparent_small">
                      <span class="mdi mdi-plus my-btn__icon my-btn__icon_small"></span>
                      <span>Deposit</span>
                    </button>

                    <button class="account__btn">
                      <span class="mdi mdi-dots-horizontal"></span>
                    </button>
                  </div>
                </div>

                <div class="account">
                  <div class="account__title">
                    <div class="account__icon">
                      <img src="" alt="">
                    </div>
                    <div class="account__text">
                      <p class="account__abb">ETH</p>
                      <p class="account__name">Ethereum</p>
                    </div>
                  </div>
                  <p class="account__num">0.89002348 <span>btc</span></p>
                  <p class="account__num_secondary">12,830.99 <span>prb</span> </p>
                  <div class="account__bottom">
                    <button class="my-btn my-btn_transparent my-btn_transparent_small account__deposit_orange">
                      <span class="mdi mdi-plus my-btn__icon my-btn__icon_small"></span>
                      <span>Deposit</span>
                    </button>

                    <button class="account__btn">
                      <span class="mdi mdi-dots-horizontal"></span>
                    </button>
                  </div>
                </div>

                <div class="account account_add">
                  <div class="account__title">
                    <div class="account__icon">
                      <img src="" alt="">
                    </div>
                    <div class="account__text">
                      <p class="account__abb account__abb_disabled">ETH</p>
                      <p class="account__name account__name_disabled">Ethereum</p>
                    </div>
                  </div>
                  <p class="account__num account__num_disabled">0.89002348 <span>btc</span></p>
                  <p class="account__num_secondary account__num_secondary_disabled">12,830.99 <span>prb</span> </p>
                  <div class="account__bottom">
                    <button class="my-btn my-btn_transparent my-btn_transparent_small account__deposit_gray">
                      <span class="mdi mdi-plus my-btn__icon my-btn__icon_small"></span>
                      <span>Add a New Account</span>
                    </button>
                  </div>
                </div>

              </slick>
            </section>

            <!-- Vip  adapted  =  true -->
            <vip :text="'Premium access level for investors. Revolutionizing '" :btn="'Try It Right Now'"></vip>

            <!-- History  adapted = true -->
            <section class="history">
              <div class="history__content">
                <div class="history__top">
                  <h3 class="history__title">Transactions History</h3>
                </div>
                <div class="history__my-table my-table">
                  <div class="my-table__titles">
                    <span class="my-table__title">
                      <span>Date</span>
                      <span class="mdi mdi-chevron-down"></span>
                    </span>
                    <span class="my-table__title">Transaction</span>
                    <span class="my-table__title">Amount</span>
                    <span class="my-table__title">PRB Amount</span>
                    <span class="my-table__title">Status</span>
                  </div>
                  <div class="my-table__lines">

                    <div class="my-table__line">
                      <span class="my-table__cell my-table__cell_date">
                        12 Apr 2019
                      </span>
                      <span class="my-table__cell my-table__cell_transaction">
                        <span v-if="windowSize <= 768" class="my-table__mobile-title">Transaction</span>
                        <span>Deposit</span>
                      </span>
                      <span class="my-table__cell my-table__cell_amount">
                        <span v-if="windowSize <= 768" class="my-table__mobile-title">Amount</span>
                        <span>0.04857195 BTC</span>
                      </span>
                      <span class="my-table__cell my-table__cell_prb">
                        <span v-if="windowSize <= 768" class="my-table__mobile-title">PRB Amount</span>
                        <span>24,742 PRB</span>
                      </span>
                      <span class="my-table__cell my-table__cell_success my-table__cell_status">
                        <span v-if="windowSize <= 768" class="my-table__mobile-title">Status</span>
                        <span>Success</span>
                      </span>
                    </div>

                    <div class="my-table__line">
                      <span class="my-table__cell my-table__cell_date">
                        12 Apr 2019
                      </span>
                      <span class="my-table__cell my-table__cell_transaction">
                        <span v-if="windowSize <= 768" class="my-table__mobile-title">Transaction</span>
                        <span>Deposit</span>
                      </span>
                      <span class="my-table__cell my-table__cell_amount">
                        <span v-if="windowSize <= 768" class="my-table__mobile-title">Amount</span>
                        <span>0.04857195 BTC</span>
                      </span>
                      <span class="my-table__cell my-table__cell_prb">
                        <span v-if="windowSize <= 768" class="my-table__mobile-title">PRB Amount</span>
                        <span>24,742 PRB</span>
                      </span>
                      <span class="my-table__cell my-table__cell_error my-table__cell_status">
                        <span v-if="windowSize <= 768" class="my-table__mobile-title">Status</span>
                        <span>Error</span>
                      </span>
                    </div>

                    <div class="my-table__line">
                      <span class="my-table__cell my-table__cell_date">
                        12 Apr 2019
                      </span>
                      <span class="my-table__cell my-table__cell_transaction">
                        <span v-if="windowSize <= 768" class="my-table__mobile-title">Transaction</span>
                        <span>Deposit</span>
                      </span>
                      <span class="my-table__cell my-table__cell_amount">
                        <span v-if="windowSize <= 768" class="my-table__mobile-title">Amount</span>
                        <span>0.04857195 BTC</span>
                      </span>
                      <span class="my-table__cell my-table__cell_prb">
                        <span v-if="windowSize <= 768" class="my-table__mobile-title">PRB Amount</span>
                        <span>24,742 PRB</span>
                      </span>
                      <span class="my-table__cell my-table__cell_pending my-table__cell_status">
                        <span v-if="windowSize <= 768" class="my-table__mobile-title">Status</span>
                        <span>Pending</span>
                      </span>
                    </div>

                  </div>

                  <div class="my-table__bottom">
                    <div class="my-table__my-pagination my-pagination">
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

                    <button class="my-table__show">Show More</button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import vip from './vip'
export default {
  data() {
    return {
      slickSettings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        variableWidth: true,
        infinite: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      }
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.getDarkMode
    },
    windowSize() {
      return this.$store.getters.getWindowSize
    }
  },
  components: {
    vip
  }
};
</script>

<style lang="sass">
@import '../../styles/_main-variables'

.dashboard
  overflow: hidden
  &__title
    display: flex
    align-items: center
    margin-bottom: 24px
    .mdi
      margin-left: 19px
      color: rgba(20, 16, 41, 0.4)
      font-size: 18px
  .slick-list
    padding: 40px 0 40px 40px
    margin: -40px 0 -40px -40px
  .anonymousCards
    padding-bottom: 32px
  .anonSlider
    .slick-slide
      &:not(:last-child)
        margin-right: 30px

.anonCard
  width: 255px !important
  border-radius: 12px
  padding: 24px
  overflow: hidden
  position: relative
  box-shadow: 0 8px 8px -4px rgba(156, 66, 245, 0.12), 0 16px 24px 0 rgba(156, 66, 245, 0.24), 0 2px 4px -1px rgba(27, 10, 82, 0.12), 0 0 1px 0 rgba(156, 66, 245, 0.24)
  background-image: linear-gradient(119deg, #ff00aa, #9c42f5 53%, #5d2de1)
  &_orange
    box-shadow: 0 8px 8px -4px rgba(245, 92, 69, 0.12), 0 16px 24px 0 rgba(245, 92, 69, 0.24), 0 2px 4px -1px rgba(27, 10, 82, 0.12), 0 0 1px 0 rgba(245, 92, 69, 0.24)
    background-image: linear-gradient(119deg, #ff8800, #f55c45 51%, #e12d81)
  &_add
    background: rgba(20, 16, 41, 0.02)
    box-shadow: none
  &__bgElem
    width: 185px
    height: 106px
    box-shadow: 0 32px 32px -4px rgba(156, 66, 245, 0.12), 0 8px 16px -1px rgba(27, 10, 82, 0.06), 0 0 1px 0 rgba(156, 66, 245, 0.24), inset -24px -24px 24px 0 rgba(27, 10, 82, 0.06)
    background: $primary
    position: absolute
    bottom: -25px
    right: 0
    border-top-right-radius: 35%
    border-top-left-radius: 500%
    border-bottom-left-radius: 30%
    z-index: 2
    &_big
      width: 223px
      height: 126px
      bottom: 0
      border-bottom-left-radius: 0
      z-index: 1
    &_orange
      box-shadow: 0 32px 32px -4px rgba(245, 92, 69, 0.12), 0 8px 16px -1px rgba(27, 10, 82, 0.06), 0 0 1px 0 rgba(245, 92, 69, 0.24), inset -24px -24px 24px 0 rgba(27, 10, 82, 0.06)
      background-color: #f55c45
  &__logo
    width: 38px
    margin-bottom: 41px
    position: relative
    z-index: 10
    img
      width: 100%
  &__dots
    display: flex
    align-items: center
    position: relative
    z-index: 10
  &__dot
    width: 6px
    height: 6px
    border-radius: 50%
    background: $white
    flex-shrink: 0
    &:not(:last-child)
      margin-right: 8px
    &_gray
      background: rgba(20, 16, 41, 0.12)
  &__num
    color: $white
    letter-spacing: 4px
    font-size: 20px
    line-height: 24px
    font-weight: bold
    margin-left: 8px
    position: relative
    z-index: 10
    &_gray
      color: rgba(20, 16, 41, 0.12)
  &__icon
    cursor: pointer
    color: $white
    font-size: 20px
    margin-left: auto
    z-index: 10
    position: relative
    &_gray
      color: rgba(20, 16, 41, 0.4)

.account
  border-radius: 12px
  background: $white
  width: 255px !important
  box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12)
  padding: 24px
  &_add
    background: rgba(20, 16, 41, 0.02)
    box-shadow: none
  &__title
    display: flex
    align-items: center
    margin-bottom: 30px
  &__icon
    width: 48px
    height: 48px
    border-radius: 50%
    background: rgba(93, 45, 225, 0.03)
    flex-shrink: 0
    display: flex
    align-items: center
    justify-content: center
    margin-right: 15px
    &_disabled
      background: rgba(20, 16, 41, 0.02)
      img
        opacity: 0.4
    img
      width: 24px
      height: 24px
      flex-shrink: 0
  &__abb
    line-height: 24px
    letter-spacing: 1px
    font-weight: 600
    color: rgba(20, 16, 41, 0.4)
    &_disabled
      color: rgba(20, 16, 41, 0.12) 
  &__name
    font-size: 18px
    line-height: 24px
    &_disabled
      color: rgba(20, 16, 41, 0.12) 
  &__num
    font-size: 24px
    line-height: 24px
    font-weight: bold
    margin-bottom: 10px
    &_disabled
      color: rgba(20, 16, 41, 0.12) !important 
      span
        color: rgba(20, 16, 41, 0.12) !important 
    &_secondary
      line-height: 24px
      font-weight: bold
      color: $light-gray
      margin-bottom: 30px
      &_disabled
        color: rgba(20, 16, 41, 0.12) !important 
      span
        text-transform: uppercase
    span
      font-size: 14px
      line-height: 16px
      color: $light-gray
      text-transform: uppercase
  &__bottom
    display: flex
    align-items: center
    justify-content: space-between
  &__btn
    width: 36px
    height: 36px
    border-radius: 50%
    display: flex
    align-items: center
    justify-content: center
    background: rgba(20, 16, 41, 0.02)
    border: none
    color: $light-gray
    font-size: 25px
    transition: all 0.2s
    &:hover
      background: rgba(20, 16, 41, 0.04)
  &__deposit
    &_orange
      color: #ff8800
      background: rgba(255, 136, 0, 0.03) !important
      &:hover
        background: rgba(255, 136, 0, 0.06) !important
      span
        color: #ff8800
    &_gray
      background: rgba(20, 16, 41, 0.02) !important
      color: $gray !important
      width: 100%
      .mdi
        color: $gray !important

.history
  padding-bottom: 72px
  &__content
    border-radius: 12px
    box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12)
    background: $white
    padding: 24px
  &__title
    font-size: 20px
    line-height: 28px
    font-weight: 600
  &__top
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 24px

.my-table
  &__mobile-title
    color: $gray
  &__titles
    display: flex
    margin-bottom: 12px
    align-items: center
    padding: 12px 16px
    justify-content: space-between
    font-size: 14px
    +md
      display: none
  &__show
    border: none
    padding: 8px 16px
    background: $hover-gray
    border-radius: 18px
    font-size: 14px
    line-height: 20px
    transition: all 0.2s
    +sm
      align-self: flex-start
      margin-bottom: 32px
    &:hover
      background: rgba(20, 16, 41, 0.04)
    &_disabled
      color: rgba(20, 16, 41, 0.24)
  &__title
    line-height: 24px
    width: 20%
    &_left
      text-align: left
    &_right
      text-align: right
  &__lines
    margin-bottom: 24px
  &__line
    display: flex
    align-items: center
    justify-content: space-between
    padding: 12px 16px
    cursor: pointer
    transition: all 0.2s
    border-radius: 24px
    font-size: 14px
    +md
      flex-direction: column
    +sm
      padding: 12px 0
    &:hover
      background: $hover-gray
      +sm
        background: none
  &__cell
    width: 20%
    color: $light-gray
    line-height: 24px
    +md
      display: flex
      align-items: center
      justify-content: space-between
      width: 100%
      &:not(:last-child)
        margin-bottom: 4px
    &_date
      color: $gray
      cursor: pointer
      +md
        margin-bottom: 16px !important
        font-size: 16px
    &_transaction
    &_amount
    &_prb
    &_status
    &_success
      color: #16b862
    &_error
      color: #f54562
    &_pending
      color: #ffaa00
  &__bottom
    display: flex
    align-items: center
    justify-content: space-between
    +sm
      flex-direction: column-reverse
</style>