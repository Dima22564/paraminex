<template>
  <form class="deposit payment-form">
    <div class="trade-form__top">
      <p class="payment-form__title trade-form__title">Trade</p>
      <div class="trade-form__btns">
        <button
          class="trade-form__button"
          :class="currentTradeTab === 1 ? 'trade-form__button_active' : ''"
          @click.prevent="currentTradeTab = 1"
        >Sell</button>
        <button
          class="trade-form__button"
          :class="currentTradeTab === 2 ? 'trade-form__button_active' : ''"
          @click.prevent="currentTradeTab = 2"
        >Buy</button>
        <button
          class="trade-form__button"
          :class="currentTradeTab === 3 ? 'trade-form__button_active' : ''"
          @click.prevent="currentTradeTab = 3"
        >Orders</button>
      </div>
    </div>

    <!-- Sell -->
    <sell v-if="currentTradeTab === 1"></sell>
    <!-- Sell -->

    <!-- Buy -->
    <buy v-if="currentTradeTab === 2"></buy>
    <!-- Buy -->

    <!-- Orders -->
    <orders v-if="currentTradeTab === 3"></orders>
    <!-- Orders -->

    <div class="tradeTables">
      <div class="tradeTable tradeTable_green">
        <div class="tradeTable__titles">
          <span class="tradeTable__title">Quantity</span>
          <span class="tradeTable__title">Price</span>
          <span class="tradeTable__title">Amount</span>
        </div>
        <div class="tradeTable__lines">
          <div class="tradeTable__line">
            <div class="tradeTable__cell tradeTable__cell_quantity">
              <span class="tradeTable__mobileTitle">Quantity</span>
              <span>50.0814 PZM</span>
            </div>
            <div class="tradeTable__cell">
              <span class="tradeTable__mobileTitle">Price</span>
              <span>51.2988 PRB</span>
            </div>
            <div class="tradeTable__cell">
              <span class="tradeTable__mobileTitle">Amount</span>
              <span>1286.94 PRB</span>
            </div>
          </div>
          <div class="tradeTable__line">
            <div class="tradeTable__cell tradeTable__cell_quantity">
              <span class="tradeTable__mobileTitle">Quantity</span>
              <span>50.0814 PZM</span>
            </div>
            <div class="tradeTable__cell">
              <span class="tradeTable__mobileTitle">Price</span>
              <span>51.2988 PRB</span>
            </div>
            <div class="tradeTable__cell">
              <span class="tradeTable__mobileTitle">Amount</span>
              <span>1286.94 PRB</span>
            </div>
          </div>
          <div class="tradeTable__line">
            <div class="tradeTable__cell tradeTable__cell_quantity">
              <span class="tradeTable__mobileTitle">Quantity</span>
              <span>50.0814 PZM</span>
            </div>
            <div class="tradeTable__cell">
              <span class="tradeTable__mobileTitle">Price</span>
              <span>51.2988 PRB</span>
            </div>
            <div class="tradeTable__cell">
              <span class="tradeTable__mobileTitle">Amount</span>
              <span>1286.94 PRB</span>
            </div>
          </div>
          <div class="tradeTable__line">
            <div class="tradeTable__cell tradeTable__cell_quantity">
              <span class="tradeTable__mobileTitle">Quantity</span>
              <span>50.0814 PZM</span>
            </div>
            <div class="tradeTable__cell">
              <span class="tradeTable__mobileTitle">Price</span>
              <span>51.2988 PRB</span>
            </div>
            <div class="tradeTable__cell">
              <span class="tradeTable__mobileTitle">Amount</span>
              <span>1286.94 PRB</span>
            </div>
          </div>
        </div>
      </div>

      <div class="tradeTable tradeTable_red">
        <div class="tradeTable__titles">
          <span class="tradeTable__title">Quantity</span>
          <span class="tradeTable__title">Price</span>
          <span class="tradeTable__title">Amount</span>
        </div>
        <div class="tradeTable__lines">
          <div class="tradeTable__line">
            <div class="tradeTable__cell">
              <span class="tradeTable__mobileTitle">Quantity</span>
              <span>50.0814 PZM</span>
            </div>
            <div class="tradeTable__cell">
              <span class="tradeTable__mobileTitle">Price</span>
              <span>51.2988 PRB</span>
            </div>
            <div class="tradeTable__cell">
              <span class="tradeTable__mobileTitle">Amount</span>
              <span>1286.94 PRB</span>
            </div>
          </div>
          <div class="tradeTable__line">
            <div class="tradeTable__cell">
              <span class="tradeTable__mobileTitle">Quantity</span>
              <span>50.0814 PZM</span>
            </div>
            <div class="tradeTable__cell">
              <span class="tradeTable__mobileTitle">Price</span>
              <span>51.2988 PRB</span>
            </div>
            <div class="tradeTable__cell">
              <span class="tradeTable__mobileTitle">Amount</span>
              <span>1286.94 PRB</span>
            </div>
          </div>
          <div class="tradeTable__line">
            <div class="tradeTable__cell">
              <span class="tradeTable__mobileTitle">Quantity</span>
              <span>50.0814 PZM</span>
            </div>
            <div class="tradeTable__cell">
              <span class="tradeTable__mobileTitle">Price</span>
              <span>51.2988 PRB</span>
            </div>
            <div class="tradeTable__cell">
              <span class="tradeTable__mobileTitle">Amount</span>
              <span>1286.94 PRB</span>
            </div>
          </div>
          <div class="tradeTable__line">
            <div class="tradeTable__cell">
              <span class="tradeTable__mobileTitle">Quantity</span>
              <span>50.0814 PZM</span>
            </div>
            <div class="tradeTable__cell">
              <span class="tradeTable__mobileTitle">Price</span>
              <span>51.2988 PRB</span>
            </div>
            <div class="tradeTable__cell">
              <span class="tradeTable__mobileTitle">Amount</span>
              <span>1286.94 PRB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import sell from "./sell";
import buy from "./buy";
import orders from "./orders";
export default {
  data() {
    return {
      currentTradeTab: 1
    };
  },
  components: {
    sell,
    buy,
    orders
  }
};
</script>

<style lang="sass">
@import '../../../styles/_main-variables'
.trade-form
  &__title
    margin-bottom: 0 !important
    +sm
      margin-bottom: 24px !important
  &__top
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 36px
    +sm
      flex-direction: column
      align-items: flex-start
      margin-bottom: 32px
  &__btns
    display: flex
    align-items: center
    padding: 2px
    background: rgba(20, 16, 41, 0.02)
    border-radius: 4px
  &__button
    padding: 8px 27px
    cursor: pointer
    border: none
    background: none
    font-size: 14px
    line-height: 16px
    border-radius: 1px
    &_active
      background: $white
      box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12)
.tradeTables
  margin-top: 40px
  display: flex
  align-items: flex-start
  justify-content: space-between
  +xl
    flex-direction: column
  +md
    margin-top: 24px
.tradeTable
  width: calc(50% - 12px)
  padding: 16px 0 16px 16px
  position: relative
  border-radius: 4px
  overflow: hidden
  +xl
    width: 100%
  &:not(:last-child)
    +xl
    margin-bottom: 24px
  &::before
    content: ''
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 4px
  &_green
    background: rgba(22, 184, 98, 0.02)
    &::before
      background: #16b862
  &_red
    background: rgba(245, 69, 98, 0.03)
    &::before
      background: #f54562
  &__titles
    display: flex
    align-items: center
    padding: 12px 32px 12px 16px
    margin-bottom: 8px
    +sm
      display: none
  &__title
    width: 33.3333%
    text-align: right
    font-size: 14px
    line-height: 24px
  &__lines
    max-height: 145px
    overflow-y: auto
    padding-right: 16px
    +sm
      max-height: 350px
  &__line
    display: flex
    align-items: center
    padding: 12px 16px
    border-radius: 24px
    transition: all 0.2s
    cursor: pointer
    &:hover
      background: rgba(20, 16, 41, 0.02)
      +sm
        background: none
    +sm
      flex-direction: column
      padding: 12px 0
      &:not(:last-child)
        margin-bottom: 8px

  &__mobileTitle
    display: none
    color: $gray
    +sm
      display: block
  &__cell
    font-size: 14px
    line-height: 24px
    color: $light-gray
    width: 33.3333%
    text-align: right
    +sm
      display: flex
      align-items: center
      width: 100%
      justify-content: space-between
      &:not(:last-child)
        margin-bottom: 4px
    &_quantity
      +sm
        font-size: 16px
        margin-bottom: 16px !important
</style>
