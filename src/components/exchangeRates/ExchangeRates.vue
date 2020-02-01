<template>
  <div>
    <bread-crumb
      :firstLink="'Home'"
      :firstPath="'/home'"
      :secondLink="'Exchange Rates'"
      :secondPath="'/exchange-rates'"
    ></bread-crumb>

    <section class="exchangeRates">
      <div class="container">
        <div class="exchangeRates__top">
          <h1>Exchange Rates</h1>
          <p class="exchangeRates__time">12.12.2019 14:41 (UTC +3)</p>
        </div>
        <div class="exchangeTable">
          <div class="exchangeTable__top">
            <p class="exchangeTable__mainTitle">Show course in relation</p>
            <div class="exchangeTable__filter">
              <span class="exchangeTable__filter-item exchangeTable__filter-item_active">RUB (₽)</span>
              <span class="exchangeTable__filter-item">PRB ($)</span>
              <span class="exchangeTable__filter-item">JPY (¥)</span>
              <span class="exchangeTable__filter-item">KZT (₸)</span>
              <span class="exchangeTable__filter-item">UAH (₴)</span>
              <span class="exchangeTable__filter-item">EUR (€)</span>
            </div>
          </div>
          <div class="exchangeTable__search">
            <input type="text" placeholder="Search" />
            <span class="mdi mdi-magnify"></span>
          </div>
          <multiselect
            v-model="value"
            :options="options"
            :close-on-select="true"
            :show-labels="false"
            placeholder=" "
            class="exchangeTable__select"
          ></multiselect>
          <div class="exchangeTable__titles">
            <span class="exchangeTable__title">Currency</span>
            <span class="exchangeTable__title">Purchase (RUB)</span>
            <span class="exchangeTable__title">Sale (RUB)</span>
            <span class="exchangeTable__title">Change (24h)</span>
            <span class="exchangeTable__title">Change (7days)</span>
          </div>
          <div class="exchangeTable__lines">
            <div class="exchangeTable__line">
              <div class="exchangeTable__cell exchangeTable__cell_start">
                <img src="/img/bitcoin.svg" alt class="exchangeTable__img" />
                <span class="exchangeTable__text_emp">
                  BTC
                  <span class="exchangeTable__text_gray">Bitcoin</span>
                </span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Purchase (RUB)</span>
                <span>564 281,35</span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Sale (RUB)</span>
                <span>564 281,35</span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Change (24h)</span>
                <span>564 281,35</span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Change (7days)</span>
                <span>564 281,35</span>
              </div>
            </div>
            <div class="exchangeTable__line">
              <div class="exchangeTable__cell exchangeTable__cell_start">
                <img src="/img/bitcoin.svg" alt class="exchangeTable__img" />
                <span class="exchangeTable__text_emp">
                  BTC
                  <span class="exchangeTable__text_gray">Bitcoin</span>
                </span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Purchase (RUB)</span>
                <span>564 281,35</span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Sale (RUB)</span>
                <span>564 281,35</span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Change (24h)</span>
                <span>564 281,35</span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Change (7days)</span>
                <span>564 281,35</span>
              </div>
            </div>
            <div class="exchangeTable__line">
              <div class="exchangeTable__cell exchangeTable__cell_start">
                <img src="/img/bitcoin.svg" alt class="exchangeTable__img" />
                <span class="exchangeTable__text_emp">
                  BTC
                  <span class="exchangeTable__text_gray">Bitcoin</span>
                </span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Purchase (RUB)</span>
                <span>564 281,35</span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Sale (RUB)</span>
                <span>564 281,35</span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Change (24h)</span>
                <span>564 281,35</span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Change (7days)</span>
                <span>564 281,35</span>
              </div>
            </div>
            <div class="exchangeTable__line">
              <div class="exchangeTable__cell exchangeTable__cell_start">
                <img src="/img/bitcoin.svg" alt class="exchangeTable__img" />
                <span class="exchangeTable__text_emp">
                  BTC
                  <span class="exchangeTable__text_gray">Bitcoin</span>
                </span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Purchase (RUB)</span>
                <span>564 281,35</span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Sale (RUB)</span>
                <span>564 281,35</span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Change (24h)</span>
                <span>564 281,35</span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Change (7days)</span>
                <span>564 281,35</span>
              </div>
            </div>
            <div class="exchangeTable__line">
              <div class="exchangeTable__cell exchangeTable__cell_start">
                <img src="/img/bitcoin.svg" alt class="exchangeTable__img" />
                <span class="exchangeTable__text_emp">
                  BTC
                  <span class="exchangeTable__text_gray">Bitcoin</span>
                </span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Purchase (RUB)</span>
                <span>564 281,35</span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Sale (RUB)</span>
                <span>564 281,35</span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Change (24h)</span>
                <span>564 281,35</span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Change (7days)</span>
                <span>564 281,35</span>
              </div>
            </div>
            <div class="exchangeTable__line">
              <div class="exchangeTable__cell exchangeTable__cell_start">
                <img src="/img/bitcoin.svg" alt class="exchangeTable__img" />
                <span class="exchangeTable__text_emp">
                  BTC
                  <span class="exchangeTable__text_gray">Bitcoin</span>
                </span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Purchase (RUB)</span>
                <span>564 281,35</span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Sale (RUB)</span>
                <span>564 281,35</span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Change (24h)</span>
                <span>564 281,35</span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Change (7days)</span>
                <span>564 281,35</span>
              </div>
            </div>
            <div class="exchangeTable__line">
              <div class="exchangeTable__cell exchangeTable__cell_start">
                <img src="/img/bitcoin.svg" alt class="exchangeTable__img" />
                <span class="exchangeTable__text_emp">
                  BTC
                  <span class="exchangeTable__text_gray">Bitcoin</span>
                </span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Purchase (RUB)</span>
                <span>564 281,35</span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Sale (RUB)</span>
                <span>564 281,35</span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Change (24h)</span>
                <span>564 281,35</span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Change (7days)</span>
                <span>564 281,35</span>
              </div>
            </div>
            <div class="exchangeTable__line">
              <div class="exchangeTable__cell exchangeTable__cell_start">
                <img src="/img/bitcoin.svg" alt class="exchangeTable__img" />
                <span class="exchangeTable__text_emp">
                  BTC
                  <span class="exchangeTable__text_gray">Bitcoin</span>
                </span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Purchase (RUB)</span>
                <span>564 281,35</span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Sale (RUB)</span>
                <span>564 281,35</span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Change (24h)</span>
                <span>564 281,35</span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Change (7days)</span>
                <span>564 281,35</span>
              </div>
            </div>
            <div class="exchangeTable__line">
              <div class="exchangeTable__cell exchangeTable__cell_start">
                <img src="/img/bitcoin.svg" alt class="exchangeTable__img" />
                <span class="exchangeTable__text_emp">
                  BTC
                  <span class="exchangeTable__text_gray">Bitcoin</span>
                </span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Purchase (RUB)</span>
                <span>564 281,35</span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Sale (RUB)</span>
                <span>564 281,35</span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Change (24h)</span>
                <span>564 281,35</span>
              </div>
              <div class="exchangeTable__cell">
                <span class="exchangeTable__mobileTitle">Change (7days)</span>
                <span>564 281,35</span>
              </div>
            </div>
          </div>

          <div class="exchangeTable__my-pagination my-pagination">
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
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      options: [
        "Select option",
        "options",
        "selected",
        "mulitple",
        "label",
        "searchable",
        "clearOnSelect",
        "hideSelected",
        "maxHeight",
        "allowEmpty",
        "showLabels",
        "onChange",
        "touched"
      ]
    };
  }
};
</script>

<style lang="sass">
@import '../../styles/_main-variables'
.exchangeRates
  padding-bottom: 72px
  &__top
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 48px
    +md
      flex-direction: column
      align-items: flex-start
  &__time
    font-size: 20px
    line-height: 28px
    font-weight: 600
    +md
      margin-top: 48px
.exchangeTable
  border-radius: 12px
  box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12)
  background: $white
  padding: 28px 0 28px 24px
  +md
    padding: 16px 0 16px 16px
  &__top
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 24px
    +lg
      flex-direction: column
      align-items: flex-start
      margin-bottom: 24px
  &__mainTitle
    font-size: 20px
    line-height: 28px
    font-weight: 600
    +lg
      margin-bottom: 0
  &__filter
    display: flex
    align-items: center
    +md
      display: none
  &__filter-item
    padding: 6px 16px
    border-radius: 24px
    font-size: 14px
    line-height: 24px
    color: $light-gray
    cursor: pointer
    &_active
      color: $primary
      background: rgba(156, 66, 245, 0.03)
    &:not(:last-child)
      margin-right: 16px
  &__search
    position: relative
    margin-bottom: 20px
    padding-right: 24px
    +md
      padding-right: 16px
      margin-bottom: 16px
    input
      border: none
      padding: 10px 36px
      border-radius: 18px
      background: rgba(20, 16, 41, 0.02)
      font-size: 14px
      line-height: 16px
      color: $gray
      width: 100%
      &::placeholder
        color: $light-gray
    .mdi
      position: absolute
      top: 10px
      left: 14px
      color: $light-gray
  &__titles
    display: flex
    align-items: center
    padding: 12px 16px
    justify-content: space-between
    padding-right: 40px
    +md
      display: none
      padding-right: 16px
  &__title
    font-size: 14px
    line-height: 24px
    width: 19%
    font-weight: 500
  &__lines
    max-height: 470px
    overflow-y: auto
    padding-right: 24px
    +md
      padding-right: 16px
  &__line
    display: flex
    align-items: center
    justify-content: space-between
    padding: 12px 16px
    +md
      flex-direction: column
      width: 100%
      &:not(:last-child)
        margin-bottom: 10px
  &__cell
    width: 19%
    font-size: 14px
    line-height: 24px
    color: $light-gray
    display: flex
    align-items: center
    &_start
      justify-content: flex-start !important
      +md
        margin-bottom: 16px !important
    &:not(:last-child)
      margin-bottom: 4px
    +md
      width: 100%
      justify-content: space-between
  &__mobileTitle
    display: none
    color: $gray
    +md
      display: block
  &__img
    width: 20px
    line-height: 20px
    margin-right: 18px
  &__text
    &_emp
      color: $gray
      font-weight: 600
    &_gray
      color: $light-gray
      font-weight: 500
  &__my-pagination
    margin-top: 40px
    +md
      justify-content: center
  &__select
    display: none !important
    +md
      display: block !important
      width: calc(100% - 16px) !important
    .multiselect
      &__tags
        border-radius: 24px !important
        font-size: 14px !important
        line-height: 24px !important
        padding: 6px 16px !important
      &__single
        font-size: 14px !important
        line-height: 24px !important
        color: $primary !important
      &__option
        font-size: 14px !important
        line-height: 24px !important
        &--highlight
          background: $primary !important
</style>
