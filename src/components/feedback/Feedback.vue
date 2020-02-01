<template>
  <div>
    <bread-crumb
      :firstLink="'Home'"
      :firstPath="'/home'"
      :secondLink="'Feedback'"
      :secondPath="'/feedback'"
    ></bread-crumb>

    <!-- Feedback adapted = true -->
    <section class="feedback">
      <div class="container">
        <div class="feedback__top">
          <h1 class="feedback__title">Feedback</h1>
          <div class="feedback__review">
            <span class="feedback__rate">4.8</span>
            <div class="feedback__content">
              <div class="feedback__stars">
                <span class="mdi mdi-star"></span>
                <span class="mdi mdi-star"></span>
                <span class="mdi mdi-star"></span>
                <span class="mdi mdi-star"></span>
                <span class="mdi mdi-star"></span>
              </div>
              <p class="feedback__followers">49 reviews</p>
            </div>
            <button
              class="my-btn my-btn_primary feedback__btn"
              @click="showPopup(true)"
            >Add a review</button>
          </div>
        </div>

        <div class="row feedback__row" v-if="windowSize > 991">
          <div class="col-xl-8 col-lg-8 feedback-item__wrapper_big">
            <div class="feedback-item feedback-item_big">
              <div class="feedback-item__img">
                <img src alt />
              </div>
              <div class="feedback-item__text feedback-item__text_half">
                <div class="feedback-item__top">
                  <p class="feedback-item__title">Love It</p>
                  <div class="feedback-item__stars">
                    <span class="mdi mdi-star"></span>
                    <span class="mdi mdi-star"></span>
                    <span class="mdi mdi-star"></span>
                    <span class="mdi mdi-star"></span>
                    <span class="mdi mdi-star"></span>
                  </div>
                </div>
                <p
                  class="feedback-item__review"
                >Good website to navigate around, payment processed without a hitch, item dispatched within hours of my purchase, item arrived as described & when promised. My website works perfectly. Overall a great company to deal with. I can highly recommend to others. Thanks. 5 Star.</p>
                <div class="feedback-item__bottom">
                  <button class="my-btn my-btn_transparent">Read</button>
                  <div class="feedback-item__social">
                    <a href class="feedback-item__link">
                      <span class="mdi mdi-bitcoin"></span>
                    </a>
                    <a href class="feedback-item__link">
                      <span class="mdi mdi-linkedin-box"></span>
                    </a>
                    <a href class="feedback-item__link">
                      <span class="mdi mdi-twitter"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="col-xl-4 col-lg-4 feedback-item__wrapper"
            v-for="(item, index) in responses"
            :key="index"
          >
            <div class="feedback-item">
              <div class="feedback-item__text">
                <div class="feedback-item__name">
                  <img src alt class="feedback-item__avatar" />
                  <div>
                    <p class="feedback-item__data">{{ item.user }}</p>
                    <p class="feedback-item__place">Los Angeles, CA</p>
                  </div>
                </div>
                <div class="feedback-item__top">
                  <p class="feedback-item__title">{{ item.title }}</p>
                  <div class="feedback-item__stars">
                    <!-- <span
                      class="mdi mdi-star"
                      v-for="(star, index2) in item.rate"
                      :key="index2 + 'star'"
                    ></span>

                    <span
                      class="mdi mdi-star-outline"
                      v-for="(star2, index3) in 5 - item.rate"
                      :key="index3 + 'lostStar'"
                    ></span>-->
                    <StarRating
                      v-model="item.rate"
                      :border-width="2"
                      :star-size="10"
                      border-color="#9c42f5"
                      :show-rating="false"
                      inactive-color="#fafafb"
                      active-color="#9c42f5"
                      :read-only="true"
                    ></StarRating>
                  </div>
                </div>
                <p class="feedback-item__review">{{ item.text }}</p>
                <div class="feedback-item__bottom">
                  <button class="my-btn my-btn_transparent">Read</button>
                  <div class="feedback-item__social">
                    <a href class="feedback-item__link">
                      <span class="mdi mdi-bitcoin"></span>
                    </a>
                    <a href class="feedback-item__link">
                      <span class="mdi mdi-linkedin-box"></span>
                    </a>
                    <a href class="feedback-item__link">
                      <span class="mdi mdi-twitter"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <slick :options="sliderOptions" ref="slick" v-if="windowSize <= 991" class="mySlider">
          <div
            class="col-xl-4 col-lg-4 feedback-item__wrapper"
            v-for="(item, index) in responses"
            :key="index"
          >
            <div class="feedback-item">
              <div class="feedback-item__text">
                <div class="feedback-item__name">
                  <img src alt class="feedback-item__avatar" />
                  <div>
                    <p class="feedback-item__data">{{ item.user }}</p>
                    <p class="feedback-item__place">Los Angeles, CA</p>
                  </div>
                </div>
                <div class="feedback-item__top">
                  <p class="feedback-item__title">{{ item.title }}</p>
                  <div class="feedback-item__stars">
                    <!-- <span
                      class="mdi mdi-star"
                      v-for="(star, index2) in item.rate"
                      :key="index2 + 'star'"
                    ></span>

                    <span
                      class="mdi mdi-star-outline"
                      v-for="(star2, index3) in 5 - item.rate"
                      :key="index3 + 'lostStar'"
                    ></span> -->
                    <StarRating
                      v-model="item.rate"
                      :border-width="2"
                      :star-size="10"
                      border-color="#9c42f5"
                      :show-rating="false"
                      inactive-color="#fafafb"
                      active-color="#9c42f5"
                      :read-only="true"
                    ></StarRating>
                  </div>
                </div>
                <p class="feedback-item__review">{{ item.text }}</p>
                <div class="feedback-item__bottom">
                  <button class="my-btn my-btn_transparent">Read</button>
                  <div class="feedback-item__social">
                    <a href class="feedback-item__link">
                      <span class="mdi mdi-bitcoin"></span>
                    </a>
                    <a href class="feedback-item__link">
                      <span class="mdi mdi-linkedin-box"></span>
                    </a>
                    <a href class="feedback-item__link">
                      <span class="mdi mdi-twitter"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </slick>

        <div class="feedback__controls" ref="feedback__controls" v-if="windowSize <= 991">
          <button @click="prev" class="slick-btn">
            <span class="mdi mdi-arrow-left"></span>
          </button>
          <div class="feedback__dots"></div>
          <button @click="next" class="slick-btn">
            <span class="mdi mdi-arrow-right"></span>
          </button>
        </div>

        <div class="feedback__bottom">
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
        </div>
      </div>
    </section>

    <addReview></addReview>
  </div>
</template>

<script>
import addReview from "./addReview";
export default {
  data() {
    return {
      sliderOptions: {
        slidesToShow: 2,
        slidesToScroll: 1,
        mobileFirst: true,
        arrows: false,
        dots: true,
        variableWidth: true,
        appendDots: ".feedback__dots"
      }
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.getDarkMode;
    },
    windowSize() {
      return this.$store.getters.getWindowSize;
    },
    responses() {
      return this.$store.getters.getResponses;
    }
  },
  methods: {
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },
    showPopup(arg) {
      this.$store.commit("reviewPopup", arg);
    }
  },
  components: {
    addReview
  }
};
</script>

<style lang="sass">
@import '../../styles/_main-variables'
.feedback
  padding-bottom: 72px
  .slick-list
    padding: 15px
    margin: -15px
    .slick-slide
      &:not(:last-child)
        margin-right: 16px
  &__bottom
    +lg
      display: none
  &__title
    +md
      margin-bottom: 50px
  &__top
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 48px
    +md
      flex-direction: column
      align-items: flex-start
  &__review
    display: flex
    align-items: center
    +sm
      flex-wrap: wrap
      width: 100%
  &__btn
    +sm
      width: 100%
      margin-top: 26px
  &__rate
    margin-right: 8px
    font-size: 36px
    line-height: 40px
    font-weight: bold
  &__content
    margin-right: 28px
  &__stars
    color: $primary
    display: flex
    align-items: center
    cursor: pointer
    .mdi
      &:not(:last-child)
        margin-right: 2px
  &__followers
    line-height: 16px
  &__controls
    display: flex
    align-items: center
    justify-content: center
    margin-top: 24px
    .slick-btn
      background: none
      cursor: pointer
      border: none
      color: rgba(20, 16, 41, 0.4)
      font-size: 27px
    .slick-dots
      display: flex
      margin: 0 16px
      font-size: 0
      line-height: 0
      li
        width: 8px
        height: 8px
        border-radius: 50%
        background: rgba(20, 16, 41, 0.06)
        cursor: pointer
        &:not(:last-child)
          margin-right: 8px
        &.slick-active
          background: $primary
      button
        border: none
        background: none
</style>
