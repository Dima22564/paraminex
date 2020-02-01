<template>
  <div>
    <label
      class="toggler__wrapper my-navigation__toggler"
      :class="model ? 'toggler_active' : '' "
      for="darkMode"
    >
      <div class="toggler">
        <div class="toggler__way"></div>
        <div class="toggler__circle"></div>
      </div>
      <input type="checkbox" name id="darkMode" class="toggler__input" v-model="model" />
      <span class="toggler__placeholder">Dark Mode</span>
    </label>
  </div>
</template>

<script>
export default {
  props: ['model']
}
</script>