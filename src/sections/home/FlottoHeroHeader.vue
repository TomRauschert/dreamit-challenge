<template>
  <FlottoSection fluid>
    <NFlex class="hero-header" vertical align="center" justify="center">
      <h1 class="hero-header__heading">Gewinne mit Flotto!</h1>
      <h2 class="hero-header__subtitle">Der schnellste Weg zu großen Preisen.</h2>
      <NFlex justify="center">
        <RouterLink to="/eurojackpot">
          <NButton strong secondary round type="primary" class="hero-header__action-button">
            Gewinnzahlen ansehen
          </NButton>
        </RouterLink>
      </NFlex>
    </NFlex>
  </FlottoSection>
</template>

<script setup lang="ts">
import FlottoSection from '@/components/section/FlottoSection.vue'
import { NButton, NFlex } from 'naive-ui'
</script>

<style scoped lang="scss">
.hero-header {
  height: 100vh;
  min-height: 35rem;

  padding: 1rem;
  padding-top: 7rem;

  background: linear-gradient(
    180deg,
    rgb(26, 26, 29) 12%,
    rgb(221 48 22) 55%,
    rgb(44, 44, 49) 100%
  );

  &__heading {
    font-size: calc(2rem + 1vmin);
    font-weight: 900;
    color: white;
  }

  &__subtitle {
    font-size: 1.2rem;
    font-weight: 600;
    color: white;
  }

  &__action-button {
    margin-top: 2rem;
  }

  &__image {
  }
}
</style>
