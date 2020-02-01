<template>
  <div class="popupWrapper" v-if="getPopup.reviewPopupShow === true">
    <form class="regForm regForm_small addReviewForm">
      <div class="regForm__top">
        <p class="regForm__btn regForm__btn_active">Write a Review</p>
        <span class="mdi mdi-close" @click="showPopup(false)"></span>
      </div>

      <div class="my-input regForm__my-input">
        <input
          type="text"
          class="my-input__input"
          placeholder="Headline"
          v-model.trim="reviewTitle"
          :class="$v.reviewTitle.$invalid ? 'my-input__input_error' : ''"
        />
        <span v-if="!$v.reviewTitle.required" class="my-input__error">This field is required</span>
      </div>

      <div class="my-input regForm__my-input">
        <textarea
          name
          id
          class="my-input__input my-input__input_textarea"
          v-model.trim="reviewText"
          :class="$v.reviewText.$invalid ? 'my-input__input_error' : ''"
        ></textarea>
        <span v-if="!$v.reviewText.required" class="my-input__error">This field is required</span>
      </div>

      <div class="addReviewForm__input">
        <p>Rate</p>
        <div class="addReviewForm__stars">
          <StarRating
            v-model="rate"
            :border-width="2"
            :star-size="10"
            border-color="#9c42f5"
            :show-rating="false"
            inactive-color="#fafafb"
            active-color="#9c42f5"
          ></StarRating>
        </div>
      </div>

      <div class="regForm__bottom addReviewForm__bottom">
        <button
          class="regForm__submit regForm__submit_m my-btn my-btn_primary"
          @click.prevent="createReview"
        >Send</button>
      </div>
    </form>
  </div>
</template>

<script>
import $ from "jquery";
import { required } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      reviewTitle: "",
      reviewText: "",
      rate: 0
    };
  },
  computed: {
    getPopup() {
      return this.$store.getters.getPopup;
    }
  },
  methods: {
    showPopup(arg) {
      this.$store.commit("reviewPopup", arg);
    },
    signInPopup() {
      this.$store.commit("regPopup", true);
      this.$store.commit("recoveryPopup", false);
    },
    createReview() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.showPopup(false);
        this.submitStatus = "PENDING";
        const review = {
          id: this.$store.getters.getResponses.length + 1,
          user: this.$store.getters.getUser,
          title: this.reviewTitle,
          text: this.reviewText,
          rate: this.rate
        };
        this.$store.dispatch("createReview", review);
        this.$store.commit("reviewPopup", false);
        if (screen.width <= 991) {
          $(".mySlider").slick("unslick");
          this.$nextTick(() => {
            $(".mySlider").slick();
            this.$parent.$refs.slick.reSlick();
          });
        }
      }
    }
  },
  validations: {
    reviewTitle: {
      required
    },
    reviewText: {
      required
    }
  }
};
</script>

<style lang="sass">
@import '../../styles/_main-variables'
.addReviewForm
  &__input
    background: rgba(20, 16, 41, 0.02)
    padding: 12px 16px
    border-radius: 4px
    display: flex
    align-items: center
    justify-content: space-between
    p
      color: $light-gray
      font-size: 13px
      line-height: 16px
  &__stars
    display: flex
    align-items: center
    .mdi
      color: $primary
      cursor: pointer
      &:not(:last-child)
        margin-right: 5px
  &__bottom
    justify-content: flex-end
</style>
