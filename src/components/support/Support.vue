<template>
  <div>
    <bread-crumb
      :firstLink="'Home'"
      :firstPath="'/home'"
      :secondLink="'Support'"
      :secondPath="'/support'"
    ></bread-crumb>

    <div class="my-support">
      <div class="container">
        <div class="row">
          <!-- Aside -->
          <my-aside></my-aside>
          <!-- Aside -->

          <div class="col-xl-9 col-lg-9">
            <h1>Support</h1>
            <p class="my-support__back" @click="hideMess" v-if="isMessShow">Back</p>
            <div class="my-chat">
              <div class="my-chat__users" v-if="isUsersShow">
                <!-- <userChat :name="'Support Center'" :desc="'Roobinium will supsvgdrgeg'"></userChat> -->
                <div class="my-chatUser my-chatUser_add">
                  <div class="my-chatUser__icon my-chatUser__icon_add">
                    <span class="mdi mdi-plus"></span>
                  </div>
                  <div class="my-chatUser__text">
                    <p class="my-chatUser__name my-chatUser__name_add">New Request</p>
                    <p class="my-chatUser__desc my-chatUser__desc_add">Send us a message</p>
                  </div>
                </div>
                <userChat
                  :name="'Support Center'"
                  :desc="'Roobinium will supsvgdrgeg'"
                  :color="'linear-gradient(135deg, #00ffaa, #00bbff 53%, #4579f5)'"
                  :icon="'mdi-equalizer'"
                  :chat="'supportCenter'"
                  :click="showMess"
                ></userChat>
              </div>

              <div class="my-chatContent" v-if="isMessShow">
                <div class="my-chatContent__top">
                  <div class="my-chatUser my-chatUser_selected">
                    <div class="my-chatUser__icon">
                      <span class="mdi mdi-message-settings-outline"></span>
                    </div>
                    <div class="my-chatUser__text">
                      <p class="my-chatUser__name">Support Center</p>
                      <p class="my-chatUser__desc my-chatUser__desc_online">
                        <span class="my-chatUser__online"></span>
                        <span>Online</span>
                      </p>
                    </div>
                  </div>
                  <div class="subSettings__wrapper">
                    <div class="my-chat__settings subSettings" @click="isSubSettingsShow = !isSubSettingsShow">
                      <span class="mdi mdi-dots-horizontal"></span>
                    </div>
                    <div class="subSettings__options" v-show-slide="isSubSettingsShow" @mouseleave="isSubSettingsShow = false">
                      <button class="subSettings__btn">Item One</button>
                      <button class="subSettings__btn">Item One</button>
                      <button class="subSettings__btn">Item One</button>
                    </div>
                  </div>
                </div>
                <div class="my-chatMessages">
                  <div class="my-message">
                    <img src="/img/avatar.jpg" alt class="my-message__img" />
                    <div class="my-message__text">
                      <span class="my-message__name">Angela</span>
                      <p class="my-message__mess my-message__mess_speaker">How can I help you?</p>
                      <span class="my-message__time">3:54 PM</span>
                    </div>
                  </div>

                  <div class="my-message_right">
                    <div class="my-message__text">
                      <p class="my-message__mess my-message__mess_my">How can I help you?</p>
                      <span class="my-message__time my-message__time_right">
                        <span class="mdi mdi-check-all"></span>
                        <span>3:54 PM</span>
                      </span>
                    </div>
                  </div>

                  <div class="my-message">
                    <img src="/img/avatar.jpg" alt class="my-message__img" />
                    <div class="my-message__text">
                      <span class="my-message__name">Angela</span>
                      <p
                        class="my-message__mess my-message__mess_speaker"
                      >Roobinium will support web banners, video advertising, advertising on mobile applications, native advertising, as well as the CPA format.</p>
                      <span class="my-message__time">3:54 PM</span>
                    </div>
                  </div>
                </div>

                <form class="my-chatBottom">
                  <div>
                    <label for="#download" class="my-chatBottom__download">
                      <span class="mdi mdi-paperclip"></span>
                    </label>
                    <input type="file" name id="#download" class="my-chatBottom__downloadInput" />
                  </div>
                  <textarea name id class="my-chatBottom__textInput"></textarea>
                  <button class="my-btn_primary my-chatBottom__btn">
                    <span class="mdi mdi-arrow-up"></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userChat from "./userChat";
export default {
  data() {
    return {
      isUsersShow: true,
      isMessShow: true,
      isSubSettingsShow: false
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.getDarkMode;
    },
    windowSize() {
      return this.$store.getters.getWindowSize;
    }
  },
  methods: {
    showMess() {
      this.isUsersShow = false;
      this.isMessShow = true;
    },
    hideMess() {
      this.isUsersShow = true;
      this.isMessShow = false;
    }
  },
  components: {
    userChat
  },
  mounted() {
    var that = this;
    window.addEventListener("resize", function() {
      if (screen.width >= 768) {
        that.isUsersShow = true;
        that.isMessShow = true;
      } else {
        that.isMessShow = false;
        that.isUsersShow = true;
      }
    });
  }
};
</script>

<style lang="sass">
@import '../../styles/_main-variables'
.my-support
  padding-bottom: 72px
  h1
    +lg
      margin-top: 32px
    +md
      margin-top: 0
  &__back
    color: $primary
    font-weight: 600
    margin-top: 30px
    display: none
    cursor: pointer
    +md
      display: block
.my-chat
  display: flex
  justify-content: space-between
  margin-top: 32px
  &__users
    width: calc(35% - 15px)
    +md
      width: 100%
.my-chatContent
  background: $white
  box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12)
  border-radius: 12px
  width: calc(65% - 15px)
  +md
    width: 100%
  &__top
    padding: 24px
    display: flex
    align-items: center
    justify-content: space-between
    +md
      padding: 15px
.my-chatMessages
  max-height: 340px
  height: 100%
  overflow-y: auto
  padding: 18px 24px 24px
  display: flex
  flex-direction: column
  +md
    padding: 15px 15px 15px
.my-message
  display: flex
  align-items: flex-start
  &:not(:last-child)
    margin-bottom: 24px
  &_right
    align-self: flex-end
  &__img
    width: 36px
    height: 36px
    border-radius: 50%
    flex-shrink: 0
    margin: 20px 16px 0 0
  &__name
    font-size: 10px
    line-height: 16px
    margin-bottom: 4px
    color: rgba(20, 16, 41, 0.4)
    display: block
  &__mess
    padding: 6px 12px
    font-size: 14px
    line-height: 24px
    background: rgba(20, 16, 41, 0.02)
    max-width: 363px
    &_speaker
      border-top-right-radius: 24px
      border-bottom-right-radius: 24px
      border-bottom-left-radius: 24px
    &_my
      background: $primary
      +white
      border-top-right-radius: 24px
      border-bottom-left-radius: 24px
      border-top-left-radius: 24px
  &__time
    margin-top: 10px
    font-size: 10px
    line-height: 16px
    margin-bottom: 4px
    color: rgba(20, 16, 41, 0.4)
    display: block
    display: flex
    align-items: center
    .mdi
      margin-right: 10px
    &_right
      justify-content: flex-end
.my-chatBottom
  padding: 0 24px 24px 24px
  display: flex
  align-items: center
  justify-content: space-between
  +md
    padding: 0 15px 15px 15px
  &__download
    width: 48px
    height: 48px
    border-radius: 50%
    background: rgba(20, 16, 41, 0.02)
    display: flex
    align-items: center
    justify-content: center
    color: rgba(20, 16, 41, 0.6)
    font-size: 26px
    cursor: pointer
  &__downloadInput
    display: none
  &__textInput
    border: none
    overflow-y: auto
    resize: none
    padding: 12px 16px
    font-size: 16px
    line-height: 24px
    background: rgba(20, 16, 41, 0.02)
    border-radius: 4px
    font-family: 'Montserrat', sans-serif !important
    width: 72%
    +sm
      width: 63%
  &__btn
    width: 48px
    height: 48px
    border-radius: 50%
    display: flex
    align-items: center
    justify-content: center
    +white
    font-size: 30px
    border: none
.subSettings
  border-radius: 50%
  width: 48px
  height: 48px
  background: rgba(20, 16, 41, 0.02)
  color: rgba(20, 16, 41, 0.6)
  cursor: pointer
  display: flex
  align-items: center
  justify-content: center
  flex-shrink: 0
  font-size: 25px
  transition: all 0.2s
  &::hover
    background: rgba(20, 16, 41, 0.04)
  &__wrapper
    position: relative
  &__options
    background: $white
    border-radius: 12px
    box-shadow: 0 16px 16px -4px rgba(20, 16, 41, 0.06), 0 4px 8px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12)
    min-width: 160px
    position: absolute
    right: 0
    bottom: 0
    display: flex
    flex-direction: column
    transform: translateY(105%)
    padding: 16px 0
  &__btn
    border: none
    background: none
    padding: 9px 16px
    font-size: 14px
    line-height: 18px
    text-align: left
    transition: all 0.2s
    &:hover
      background: rgba(20, 16, 41, 0.02)
</style>
