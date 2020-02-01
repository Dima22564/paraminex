<template>
  <div>
    <bread-crumb
      :firstLink="'Home'"
      :firstPath="'/home'"
      :secondLink="'Achievements'"
      :secondPath="'/achievements'"
    ></bread-crumb>

    <section class="achievements">
      <div class="container">
        <div class="row">
          <!-- Aside -->
          <my-aside></my-aside>
          <!-- Aside -->

          <div class="col-xl-9 col-lg-9">
            <!-- Achievements -->
            <div class="achievements__top">
              <h1 class="achievements__title" v-if="windowSize > 768">Bonuses & Achievements</h1>
              <h1 class="achievements__title" v-else>Achievements</h1>
              <div class="achievements__btns">
                <button
                  @click="isCurrent = true"
                  :class="isCurrent ? 'my-btn my-btn_primary my-btn_primary_small' : 'achievements__completed'"
                >Current</button>
                <button
                  class="achievements__completed"
                  @click="isCurrent = false"
                  :class="!isCurrent ? 'my-btn my-btn_primary my-btn_primary_small' : 'achievements__completed'"
                >Сompleted</button>
              </div>
            </div>

            <div class="row" v-if="windowSize >= 768">
              <!-- Achievement item -->
              <div class="col-xl-4 col-lg-6 col-md-6">
                <div class="achievement-item">
                  <img src="/img/achievements.jpg" alt class="achievement-item__img" />
                  <div class="achievement-item__text">
                    <p class="achievement-item__plus">+1 paramining</p>
                    <p class="achievement-item__title">Write a Review About Paraminex</p>
                    <p
                      class="achievement-item__desc"
                    >New users choose a single wallet based on real reviews from other users.</p>
                    <button class="my-btn my-btn_small my-btn_transparent">Start Now</button>
                  </div>
                </div>
              </div>
              <!-- Achievement item -->

              <!-- Achievement item -->
              <div class="col-xl-4 col-lg-6 col-md-6">
                <div class="achievement-item">
                  <img src="/img/achievements.jpg" alt class="achievement-item__img" />
                  <div class="achievement-item__text">
                    <p class="achievement-item__plus">+1 paramining</p>
                    <p class="achievement-item__title">Write a Review About Paraminex</p>
                    <p
                      class="achievement-item__desc"
                    >New users choose a single wallet based on real reviews from other users.</p>
                    <button class="my-btn my-btn_small my-btn_transparent">Start Now</button>
                  </div>
                </div>
              </div>
              <!-- Achievement item -->

              <!-- Achievement item -->
              <div class="col-xl-4 col-lg-6 col-md-6">
                <div class="achievement-item">
                  <img src="/img/achievements.jpg" alt class="achievement-item__img" />
                  <div class="achievement-item__text">
                    <p class="achievement-item__plus">+1 paramining</p>
                    <p class="achievement-item__title">Write a Review About Paraminex</p>
                    <p
                      class="achievement-item__desc"
                    >New users choose a single wallet based on real reviews from other users.</p>
                    <button class="my-btn my-btn_small my-btn_transparent">Start Now</button>
                  </div>
                </div>
              </div>
              <!-- Achievement item -->

              <!-- Achievement item -->
              <div class="col-xl-4 col-lg-6 col-md-6">
                <div class="achievement-item">
                  <img src="/img/achievements.jpg" alt class="achievement-item__img" />
                  <div class="achievement-item__text">
                    <p class="achievement-item__plus">+1 paramining</p>
                    <p class="achievement-item__title">Write a Review About Paraminex</p>
                    <p
                      class="achievement-item__desc"
                    >New users choose a single wallet based on real reviews from other users.</p>
                    <button class="my-btn my-btn_small my-btn_transparent">Start Now</button>
                  </div>
                </div>
              </div>
              <!-- Achievement item -->
            </div>

            <slick :options="slickSettings" v-else>
              <!-- Achievement item -->
              <div class="achievement-item">
                <img src="/img/achievements.jpg" alt class="achievement-item__img" />
                <div class="achievement-item__text">
                  <p class="achievement-item__plus">+1 paramining</p>
                  <p class="achievement-item__title">Write a Review About Paraminex</p>
                  <p
                    class="achievement-item__desc"
                  >New users choose a single wallet based on real reviews from other users.</p>
                  <button class="my-btn my-btn_small my-btn_transparent">Start Now</button>
                </div>
              </div>
              <!-- Achievement item -->

              <!-- Achievement item -->
              <div class="achievement-item">
                <img src="/img/achievements.jpg" alt class="achievement-item__img" />
                <div class="achievement-item__text">
                  <p class="achievement-item__plus">+1 paramining</p>
                  <p class="achievement-item__title">Write a Review About Paraminex</p>
                  <p
                    class="achievement-item__desc"
                  >New users choose a single wallet based on real reviews from other users.</p>
                  <button class="my-btn my-btn_small my-btn_transparent">Start Now</button>
                </div>
              </div>
              <!-- Achievement item -->

              <!-- Achievement item -->
              <div class="achievement-item">
                <img src="/img/achievements.jpg" alt class="achievement-item__img" />
                <div class="achievement-item__text">
                  <p class="achievement-item__plus">+1 paramining</p>
                  <p class="achievement-item__title">Write a Review About Paraminex</p>
                  <p
                    class="achievement-item__desc"
                  >New users choose a single wallet based on real reviews from other users.</p>
                  <button class="my-btn my-btn_small my-btn_transparent">Start Now</button>
                </div>
              </div>
              <!-- Achievement item -->

              <!-- Achievement item -->
              <div class="achievement-item">
                <img src="/img/achievements.jpg" alt class="achievement-item__img" />
                <div class="achievement-item__text">
                  <p class="achievement-item__plus">+1 paramining</p>
                  <p class="achievement-item__title">Write a Review About Paraminex</p>
                  <p
                    class="achievement-item__desc"
                  >New users choose a single wallet based on real reviews from other users.</p>
                  <button class="my-btn my-btn_small my-btn_transparent">Start Now</button>
                </div>
              </div>
              <!-- Achievement item -->
            </slick>
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
      isCurrent: true,
      slickSettings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        variableWidth: true,
        infinite: false,
        // responsive: [
        //   {
        //     breakpoint: 575,
        //     settings: {
        //       slidesToShow: 1,
        //     }
        //   }
        // ]
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
};
</script>

<style lang="sass">
@import '../../styles/_main-variables'
.achievements
  padding-bottom: 42px
  overflow: hidden
  .slick-list
    padding: 30px 0 30px 10px
    margin: -30px 0 -30px -10px
  .slick-slide
    margin: 0 8px
  &__top
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 32px
    +lg
      margin-top: 32px
    +md
      flex-direction: column
      align-items: flex-start
      margin-top: 0
  &__btns
    display: flex
    align-items: center
  &__title
    font-size: 36px
    line-height: 36px
    +md
      margin-bottom: 24px
  &__completed
    border: none
    padding: 6px 16px
    background: none
    font-size: 14px
    border-radius: 24px

.achievement-item
  border-radius: 12px
  box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12)
  background: $white
  margin-bottom: 32px
  +md
    max-width: 255px
  &__img
    border-top-right-radius: 12px
    border-top-left-radius: 12px
    width: 100%
  &__text
    padding: 16px
  &__plus
    line-height: 24px
    letter-spacing: 1px
    color: $light-gray
    margin-bottom: 4px
    text-transform: uppercase
  &__title
    font-size: 20px
    line-height: 28px
    font-weight: 600
    margin-bottom: 16px
  &__desc
    line-height: 24px
    margin-bottom: 16px
    color: $light-gray
</style>