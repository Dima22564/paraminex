<template>
  <div class="ordersTable">
    <div class="ordersTable__titles">
      <span class="ordersTable__title ordersTable__title_w5">
        Type
      </span>
      <span class="ordersTable__title">
        Quantity
      </span>
      <span class="ordersTable__title">
        Price
      </span>
      <span class="ordersTable__title">
        Amount
      </span>
      <span class="ordersTable__title ordersTable__title_w10">
        Status
      </span>
    </div>

    <div class="ordersTable__lines">
      <div class="ordersTable__line">
        <div class="ordersTable__cell ordersTable__cell_w5 ordersTable__cell_emp">
          <span class="ordersTable__mobileTitle">Type</span>
          <span class="">Buy</span>
        </div>
        <div class="ordersTable__cell">
          <span class="ordersTable__mobileTitle">Quantity</span>
          <span class="">50.92816433 PZM</span>
        </div>
        <div class="ordersTable__cell">
          <span class="ordersTable__mobileTitle">Price</span>
          <span class="">51.00298366 PRB</span>
        </div>
        <div class="ordersTable__cell">
          <span class="ordersTable__mobileTitle">Amount</span>
          <span class="">20.01289986 PRB</span>
        </div>
        <div class="ordersTable__cell ordersTable__cell_w10">
          <span class="ordersTable__mobileTitle">Status</span>
          <span class="status status_cancel">Cancel</span>
        </div>
      </div>

      <div class="ordersTable__line">
        <div class="ordersTable__cell ordersTable__cell_w5 ordersTable__cell_emp">
          <span class="ordersTable__mobileTitle">Type</span>
          <span class="">Buy</span>
        </div>
        <div class="ordersTable__cell">
          <span class="ordersTable__mobileTitle">Quantity</span>
          <span class="">50.92816433 PZM</span>
        </div>
        <div class="ordersTable__cell">
          <span class="ordersTable__mobileTitle">Price</span>
          <span class="">51.00298366 PRB</span>
        </div>
        <div class="ordersTable__cell">
          <span class="ordersTable__mobileTitle">Amount</span>
          <span class="">20.01289986 PRB</span>
        </div>
        <div class="ordersTable__cell ordersTable__cell_w10">
          <span class="ordersTable__mobileTitle">Status</span>
          <span class="status status_done">Done</span>
        </div>
      </div>
      <div class="ordersTable__line">
        <div class="ordersTable__cell ordersTable__cell_w5 ordersTable__cell_emp">
          <span class="ordersTable__mobileTitle">Type</span>
          <span class="">Buy</span>
        </div>
        <div class="ordersTable__cell">
          <span class="ordersTable__mobileTitle">Quantity</span>
          <span class="">50.92816433 PZM</span>
        </div>
        <div class="ordersTable__cell">
          <span class="ordersTable__mobileTitle">Price</span>
          <span class="">51.00298366 PRB</span>
        </div>
        <div class="ordersTable__cell">
          <span class="ordersTable__mobileTitle">Amount</span>
          <span class="">20.01289986 PRB</span>
        </div>
        <div class="ordersTable__cell ordersTable__cell_w10">
          <span class="ordersTable__mobileTitle">Status</span>
          <span class="status status_done">Done</span>
        </div>
      </div>
      <div class="ordersTable__line">
        <div class="ordersTable__cell ordersTable__cell_w5 ordersTable__cell_emp">
          <span class="ordersTable__mobileTitle">Type</span>
          <span class="">Buy</span>
        </div>
        <div class="ordersTable__cell">
          <span class="ordersTable__mobileTitle">Quantity</span>
          <span class="">50.92816433 PZM</span>
        </div>
        <div class="ordersTable__cell">
          <span class="ordersTable__mobileTitle">Price</span>
          <span class="">51.00298366 PRB</span>
        </div>
        <div class="ordersTable__cell">
          <span class="ordersTable__mobileTitle">Amount</span>
          <span class="">20.01289986 PRB</span>
        </div>
        <div class="ordersTable__cell ordersTable__cell_w10">
          <span class="ordersTable__mobileTitle">Status</span>
          <span class="status status_done">Done</span>
        </div>
      </div>
      <div class="ordersTable__line">
        <div class="ordersTable__cell ordersTable__cell_w5">
          <span class="ordersTable__mobileTitle">Type</span>
          <span class="">Buy</span>
        </div>
        <div class="ordersTable__cell">
          <span class="ordersTable__mobileTitle">Quantity</span>
          <span class="">50.92816433 PZM</span>
        </div>
        <div class="ordersTable__cell">
          <span class="ordersTable__mobileTitle">Price</span>
          <span class="">51.00298366 PRB</span>
        </div>
        <div class="ordersTable__cell">
          <span class="ordersTable__mobileTitle">Amount</span>
          <span class="">20.01289986 PRB</span>
        </div>
        <div class="ordersTable__cell ordersTable__cell_w10">
          <span class="ordersTable__mobileTitle">Status</span>
          <span class="status status_done">Done</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="sass">
@import '../../../styles/_main-variables'
.ordersTable
  background: rgba(20, 16, 41, 0.02)
  border-radius: 4px
  padding: 16px 0 16px 16px
  &__titles
    display: flex
    align-items: center
    padding: 12px 16px
    justify-content: space-between
    margin-bottom: 8px
    +md
      display: none
  &__title
    font-size: 14px
    line-height: 24px
    width: 24%
    text-align: right
    padding-right: 16px
    &_w10
      width: 12%
    &_w5
      width: 5%
  &__lines
    max-height: 195px
    overflow-y: auto
    padding-right: 16px
    +md
      max-height: 576px
  &__line
    display: flex
    align-items: center
    justify-content: space-between
    padding: 12px 6px 12px 16px
    +md
      padding: 0 6px 12px 0
      flex-direction: column
      &:not(:last-child)
        margin-bottom: 32px
  &__cell
    font-size: 14px
    line-height: 24px
    color: $light-gray
    width: 24%
    text-align: right
    +md
      width: 100%
      display: flex
      align-items: center
      justify-content: space-between
      &:not(:last-child)
        margin-bottom: 4px
    &_w10
      width: 12%
      +md
        width: 100%
    &_w5
      width: 5%
      +md
        width: 100%
    &_emp
      color: $gray
      +md
        font-size: 16px
        margin-bottom: 16px !important

  &__mobileTitle
    display: none
    color: $gray
    +md
      display: block
  .status
    padding: 10px 16px
    border-radius: 24px
    line-height: 24px
    flex-shrink: 0
    +md
      padding: 6px 16px
      margin-top: 10px
    &_cancel
      background: rgba(20, 16, 41, 0.02)
    &_done
      color: #16b862
</style>
