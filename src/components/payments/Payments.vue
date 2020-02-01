<template>
  <div>
    <bread-crumb
      :firstLink="'Home'"
      :firstPath="'/home'"
      :secondLink="'Payments'"
      :secondPath="'/payments'"
    ></bread-crumb>

    <section class="payments">
      <div class="container">
        <div class="row">
          <!-- Aside -->
          <my-aside></my-aside>
          <!-- Aside -->

          <div class="col-xl-9 col-lg-9">
            <div class="payments__top">
              <h1 class="payments__title">Payments</h1>
              <div class="payments__btns">
                <slick :options="slickOptions">
                  <div class="payments__link" :class="currentTab === 1 ? 'payments__link_active' : ''" @click="currentTab = 1">Deposit</div>
                  <div class="payments__link" :class="currentTab === 2 ? 'payments__link_active' : ''" @click="currentTab = 2">Withdraw</div>
                  <div class="payments__link" :class="currentTab === 3 ? 'payments__link_active' : ''" @click="currentTab = 3">Exchange</div>
                  <div class="payments__link" :class="currentTab === 4 ? 'payments__link_active' : ''" @click="currentTab = 4">Transfer</div>
                  <div class="payments__link" :class="currentTab === 5 ? 'payments__link_active' : ''" @click="currentTab = 5">Trade</div>
                </slick>
              </div>
            </div>

            <!-- Deposit Form -->
            <deposit v-if="currentTab === 1"></deposit>
            <!-- Deposit Form -->

            <!-- Withdraw  form -->
            <withdraw v-if="currentTab === 2"></withdraw>
            <!-- Withdraw  form -->

            <!-- Exchange  form -->
            <exchange v-if="currentTab === 3"></exchange>
            <!-- Exchange  form -->

            <!-- Transfer form -->
            <transfer v-if="currentTab === 4"></transfer>
            <!-- Transfer form -->

            <!-- Trade form -->
            <trade v-if="currentTab === 5"></trade>
            <!-- Trade form -->
          </div>

          <router-view></router-view>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import deposit from './deposit'
import withdraw from './withdraw'
import exchange from './exchange'
import transfer from './transfer'
import trade from './trade/trade'
export default {
  data() {
    return {
      currentTab: 1,
      slickOptions: {
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        dots: false,
        arrows: false,
        infinite: false,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      }
    };
  },
  components: {
    deposit,
    withdraw,
    exchange,
    transfer,
    trade
  }
};
</script>

<style lang="sass">
@import '../../styles/_main-variables'
.payments
  .slick-list
    padding: 30px
  &__top
    display: flex
    align-items: center
    margin-bottom: 32px
    justify-content: space-between
    overflow: hidden
    margin-top: -30px
    +xl
      display: block
      margin-top: 0
    +lg
      margin-top: 30px
    +md
      margin: 0
  &__title
    margin-right: 85px
    +lg
      margin-right: 0
  &__link
    padding: 6px 16px
    font-size: 14px
    line-height: 24px
    border-radius: 24px
    cursor: pointer
    &_active
      box-shadow: 0 8px 8px -4px rgba(156, 66, 245, 0.12), 0 16px 24px 0 rgba(156, 66, 245, 0.24), 0 2px 4px -1px rgba(27, 10, 82, 0.12), 0 0 1px 0 rgba(156, 66, 245, 0.24)
      background-image: linear-gradient(112deg, #ff00aa, #9c42f5 53%, #5d2de1)
      color: $white
  &__deposit-content
    display: flex
    align-items: flex-start
    justify-content: space-between
    margin-bottom: 24px
    +md
      flex-direction: column
  &-form
    &_half
      width: calc(50% - 12px)
      +md
        width: 100%
        &:not(:last-child)
          margin-bottom: 24px
    &_doubled
      display: flex
      align-items: flex-start
      justify-content: space-between
      +md
        flex-direction: column
      &:not(:last-child)
        margin-bottom: 24px
    &__userData
      width: calc( (50%) - 2px )
      +sm
        width: 100%
        &:not(:last-child)
          margin-bottom: 4px
.payment-form
  box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12)
  background: $white
  padding: 24px
  border-radius: 12px
  &__bottom
    display: flex
    align-items: center
    margin-top: 24px
    justify-content: flex-end
  &__commission
    display: flex
    flex-direction: column
    align-items: flex-end
    line-height: 24px
    font-size: 14px
    color: $light-gray
  &__btn
    margin-top: 24px
    margin-left: auto
    &_commission
      margin: 0 0 0 24px
  &__arrow
    width: 36px
    height: 36px
    border-radius: 50%
    background: $white
    display: flex
    align-items: center
    justify-content: center
    font-size: 23px
    color: $light-gray
    margin: 0 -10px 24px
    position: relative
    z-index: 10
    align-self: center
    +md
      display: none
  &__title
    font-size: 20px
    line-height: 28px
    font-weight: 600
    margin-bottom: 40px
    +md
      margin-bottom: 24px
  .multiselect__tags
    background: transparent !important
    padding-top: 0 !important
    padding-bottom: 12px !important
.my-option
  &-wrapper
    display: flex
    align-items: center
    justify-content: space-between
    padding: 9px 16px
    &_selected
      padding: 0
    &_withoutSelect
      background: rgba(20, 16, 41, 0.02)
      min-height: 74px
    &_unSelect
      padding-top: 0
  &__value
    font-size: 14px
    line-height: 18px
    color: $gray
    overflow: hidden
    text-overflow: ellipsis
    max-width: 217px
  &__title
    font-size: 16px
    line-height: 24px
    color: $gray
    overflow: hidden
    text-overflow: ellipsis
    max-width: 50%
    width: 100%
    border: none
    background: transparent
    font-weight: 500
  &__small
    font-size: 14px
    line-height: 24px
    color: $light-gray
    margin-right: 8px
  &__currency
    display: flex
    align-items: center
  &__img
    flex-shrink: 0
  &__placeholder
    margin-bottom: 6px
    padding: 12px 0 0 16px
    color: rgba(20, 16, 41, 0.4)
    font-size: 13px
    line-height: 16px
  &__subplaceholder
    margin-top: 8px
    color: rgba(20, 16, 41, 0.4)
    font-size: 13px
    line-height: 16px
    padding: 0 16px
    display: flex
    justify-content: space-between
  &__subBtn
    padding: 0
    border: none
    background: none
    color: $primary
    font-size: 13px
    line-height: 16px
  &__commission
    margin-left: auto
.payment-select-wrapper
  background: rgba(20, 16, 41, 0.02)
  &_main
    display: flex
    flex-direction: column
    width: calc(50% - 12px)
    +md
      width: 100%
      &:not(:last-child)
        margin-bottom: 24px
    &_userData
      flex-direction: row
      justify-content: space-between
      min-height: 74px
      +sm
        flex-direction: column
  &_userData
  .multiselect
    margin-bottom: 0 !important
    &__select
      top: -16% !important
    &__content
      border-radius: 4px !important
      background: $white !important
      &-wrapper
        box-shadow: 0 16px 16px -4px rgba(20, 16, 41, 0.06), 0 4px 8px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12) !important
        border: none !important
    &__option
      padding: 0 !important
      &--highlight
        background: $primary
        .my-option__small
          color: $white !important
        .my-option__value
          color: $white !important
</style>
