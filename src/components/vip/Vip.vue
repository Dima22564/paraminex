<template>
  <div>
    <bread-crumb
      :firstLink="'Home'"
      :firstPath="'/home'"
      :secondLink="'Vip Status'"
      :secondPath="'/vip'"
    ></bread-crumb>

    <section class="vipStatus">
      <div class="container">
        <div class="row">
          <!-- Aside -->
          <my-aside></my-aside>
          <!-- Aside -->

          <div class="col-xl-9 col-lg-9">
            <h1 class="vipStatus__title">VIP Status</h1>

            <!-- Vip  adapted  =  true -->
            <vip
              :text="'Premium access level for investors. Revolutionizing '"
              :btn="'Become a VIP (50 PRZ)'"
            ></vip>

            <!-- Vip slider  adapted = true -->
            <section class="VipSlider">
              <slick :options="slickSettings">
                <!-- Vip item  -->
                <div class="vipItem">
                  <div class="vipItem__img vipItem__img_blue">
                    <img src="/img/vip-1.svg" alt />
                  </div>
                  <p class="vipItem__title">10% Discount</p>
                  <p
                    class="vipItem__text"
                  >To an anonymous card from Paraminex service. Regular price 200 $, for VIP - 180 $</p>
                </div>
                <!-- Vip item  -->

                <!-- Vip item  -->
                <div class="vipItem">
                  <div class="vipItem__img vipItem__img_violet">
                    <img src="/img/vip-2.svg" alt />
                  </div>
                  <p class="vipItem__title">10% Discount</p>
                  <p
                    class="vipItem__text"
                  >To an anonymous card from Paraminex service. Regular price 200 $, for VIP - 180 $</p>
                </div>
                <!-- Vip item  -->

                <!-- Vip item  -->
                <div class="vipItem">
                  <div class="vipItem__img vipItem__img_orange">
                    <img src="/img/vip-3.svg" alt />
                  </div>
                  <p class="vipItem__title">10% Discount</p>
                  <p
                    class="vipItem__text"
                  >To an anonymous card from Paraminex service. Regular price 200 $, for VIP - 180 $</p>
                </div>
                <!-- Vip item  -->
              </slick>

            </section>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import vip from "../dashboard/vip";
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
              slidesToShow: 2
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      }
    };
  },
  components: {
    vip,
  }
};
</script>

<style lang="sass">
@import '../../styles/_main-variables'
.vipStatus
  &__title
    margin-bottom: 32px
    +lg
      margin-top: 32px
    +md
      margin-top: 0
  .VipSlider
    padding-bottom: 80px
    .slick-list
      padding: 15px 0 15px 15px
      margin: -15px 0 -15px -15px
    .slick-slide
      &:not(:last-child)
        margin-right: 27px
.vipItem
  background: $white
  border-radius: 12px
  padding: 16px
  max-width: 255px
  box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12)
  &__img
    border-radius: 50%
    display: flex
    align-items: center
    justify-content: center
    width: 96px
    height: 96px
    margin-bottom: 24px
    &_blue
      background: rgba(0, 187, 255, 0.03)
    &_violet
      background: rgba(195, 45, 225, 0.03)
    &_orange
      background: rgba(255, 94, 0, 0.03)
  &__title
    margin-bottom: 16px
    font-size: 20px
    line-height: 28px
    font-weight: 600
  &__text
    line-height: 24px
    color: $light-gray
</style>