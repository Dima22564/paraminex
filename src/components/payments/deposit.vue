<template>
  <form class="deposit payment-form">
    <p class="payment-form__title">Deposit</p>

    <div class="payments__deposit-content">
      <div class="payment-select-wrapper_main">
        <div class="payment-select-wrapper">
          <label class="my-option__placeholder">From</label>
          <multiselect
            v-model="from"
            placeholder="From"
            :options="optionsFrom"
            :option-height="104"
            :show-labels="false"
          >
            <template slot="singleLabel" slot-scope="props">
              <div class="my-option-wrapper my-option-wrapper_selected">
                <p class="my-option__title">{{ props.option.value }}</p>
                <div class="my-option__currency">
                  <span class="my-option__small">{{ props.option.currency }}</span>
                  <img src="/img/bitcoin.svg" alt class="my-option__img" />
                </div>
              </div>
            </template>
            <template slot="option" slot-scope="props">
              <div class="my-option-wrapper">
                <p class="my-option__value">{{ props.option.value }}</p>
                <div class="my-option__currency">
                  <span class="my-option__small">{{ props.option.currency }}</span>
                  <img src="/img/bitcoin.svg" alt class="my-option__img" />
                </div>
              </div>
            </template>
          </multiselect>
        </div>
        <p class="my-option__subplaceholder"></p>
      </div>

      <div class="payment-form__arrow">
        <span class="mdi mdi-arrow-right"></span>
      </div>

      <div class="payment-select-wrapper_main">
        <div class="payment-select-wrapper">
          <label class="my-option__placeholder">To</label>
          <multiselect
            v-model="to"
            placeholder="To"
            :options="optionsTo"
            :option-height="104"
            :show-labels="false"
          >
            <template slot="singleLabel" slot-scope="props">
              <div class="my-option-wrapper my-option-wrapper_selected">
                <p class="my-option__title">{{ props.option.value }}</p>
                <div class="my-option__currency">
                  <span class="my-option__small">{{ props.option.currency }}</span>
                  <img src="/img/bitcoin.svg" alt class="my-option__img" />
                </div>
              </div>
            </template>
            <template slot="option" slot-scope="props">
              <div class="my-option-wrapper">
                <p class="my-option__value">{{ props.option.value }}</p>
                <div class="my-option__currency">
                  <span class="my-option__small">{{ props.option.currency }}</span>
                  <img src="/img/bitcoin.svg" alt class="my-option__img" />
                </div>
              </div>
            </template>
          </multiselect>
        </div>
        <p class="my-option__subplaceholder">12,830.99 PRB</p>
      </div>
    </div>

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

    <button class="my-btn my-btn_primary payment-form__btn">Deposit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      from: "",
      to: "",
      optionsTo: [
        {
          value: "rthbtrhtyjtyjty",
          currency: "BTC",
        },
        {
          value: "rthntynhtyntrhtrbh",
          currency: "ETH",
        },
        {
          value: "dfgbdrdthbrtfhrtfhrtfh",
          currency: "ETH",
        },
        {
          value: "gerhtrhtrhrthntrte",
          currency: "BTC",
        },
      ],
      optionsFrom: [
        {
          value: "rthbtrhtyjtyjty",
          currency: "BTC",
        },
        {
          value: "rthntynhtyntrhtrbh",
          currency: "ETH",
        },
        {
          value: "dfgbdrdthbrtfhrtfhrtfh",
          currency: "ETH",
        },
        {
          value: "gerhtrhtrhrthntrte",
          currency: "BTC",
        },
      ]
    };
  }
}
</script>
