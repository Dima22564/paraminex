<template>
  <div>
    <div class="payments-form_doubled">
      <div class="payments-form_half">
        <div class="payments-form__amount my-option-wrapper_withoutSelect">
          <p class="my-option__placeholder">Amount</p>
          <div class="my-option-wrapper my-option-wrapper_unSelect">
            <input type="text" class="my-option__title">
            <div class="my-option__currency">
              <span class="my-option__small">BTC</span>
              <img src="/img/bitcoin.svg" alt class="my-option__img" />
            </div>
          </div>
        </div>
        <p class="my-option__subplaceholder">
          <span class="my-option__commission">Commission 0,9%</span>
        </p>
      </div>

      <div class="payments-form_half">
        <div class="payments-form__amount my-option-wrapper_withoutSelect">
          <p class="my-option__placeholder">Amount</p>
          <div class="my-option-wrapper my-option-wrapper_unSelect">
            <input type="text" class="my-option__title">
            <div class="my-option__currency">
              <span class="my-option__small">BTC</span>
              <img src="/img/bitcoin.svg" alt class="my-option__img" />
            </div>
          </div>
        </div>
        <p class="my-option__subplaceholder">
          12,830.99 PRB
          <button class="my-option__subBtn">All</button>
        </p>
      </div>
    </div>

    <div class="payments-form_doubled">
      <div class="payments-form_half">
        <div class="payments-form__amount my-option-wrapper_withoutSelect">
          <p class="my-option__placeholder">Amount</p>
          <div class="my-option-wrapper my-option-wrapper_unSelect">
            <input type="text" class="my-option__title">
            <div class="my-option__currency">
              <span class="my-option__small">BTC</span>
              <img src="/img/bitcoin.svg" alt class="my-option__img" />
            </div>
          </div>
        </div>
      </div>

      <div class="payments-form_half payments-form_trade">
        <div class="payments-form__amount my-option-wrapper_withoutSelect">
          <p class="my-option__placeholder">Amount</p>
          <div class="my-option-wrapper my-option-wrapper_unSelect">
            <input type="text" class="my-option__title">
            <div class="my-option__currency">
              <span class="my-option__small">BTC</span>
              <img src="/img/bitcoin.svg" alt class="my-option__img" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="payment-form__bottom">
      <p class="payment-form__commission">
        <span>Commission</span>
        <span>14 PRB</span>
      </p>
      <button class="my-btn my-btn_primary payment-form__btn payment-form__btn_commission">Buy PZM</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass">
</style>
