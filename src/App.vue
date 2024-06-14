<template>
  <n-config-provider :theme-overrides="themeOverrides" :theme="darkTheme">
    <nav class="navbar">
      <FlottoNavbar />
    </nav>
    <NEl tag="div" class="container" style="background-color: var(--base-color)">
      <main class="main">
        <RouterView />
      </main>
      <footer class="footer">
        <FlottoFooter />
      </footer>
    </NEl>
  </n-config-provider>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import FlottoNavbar from './components/navbar/FlottoNavbar.vue'
import FlottoFooter from './components/footer/FlottoFooter.vue'

import { NConfigProvider, NEl, darkTheme } from 'naive-ui'

/**
 * Use this for type hints under js file
 * @type import('naive-ui').GlobalThemeOverrides
 */
const themeOverrides = {
  common: {
    baseColor: '#2c2c31'
  }
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr auto;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    'main main main'
    'footer footer footer';

  min-height: 100vh;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}
</style>
