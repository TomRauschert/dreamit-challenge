<template>
  <NEl tag="nav" class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <NFlex class="navbar__mobile" v-if="isMobile" justify="space-between" align="center">
      <RouterLink to="/">
        <FlottoLogo />
      </RouterLink>

      <NButton @click="toggleMenu" aria-label="Toggle Navigation">
        <FontAwesomeIcon :icon="faBars"></FontAwesomeIcon>
      </NButton>

      <FlottoMobileNavbarDrawer
        v-model="isMobileDrawerActive"
        @update:active="(value) => (isMobileDrawerActive = value)"
      >
        <div class="navbar__mobile__link" v-for="(link, index) in links" :key="index">
          <RouterLink :to="link.to">
            {{ link.name }}
          </RouterLink>
        </div>
      </FlottoMobileNavbarDrawer>
    </NFlex>

    <NFlex class="navbar__desktop" v-if="isDesktop" justify="space-between" align="center">
      <RouterLink to="/">
        <FlottoLogo />
      </RouterLink>

      <div class="navbar__desktop__links">
        <RouterLink v-for="(link, index) in links" :key="index" :to="link.to">
          {{ link.name }}
        </RouterLink>
      </div>
    </NFlex>
  </NEl>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useDeviceDetection } from '@/composables/useDeviceDetection'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NEl, NFlex, NButton } from 'naive-ui'
import FlottoMobileNavbarDrawer from './FlottoMobileNavbarDrawer.vue'
import FlottoLogo from '../logo/FlottoLogo.vue'
import { useScrollDetection } from '@/composables/useScrollDetection'

const { isMobile, isDesktop } = useDeviceDetection()
const { isScrolled } = useScrollDetection()

const isMobileDrawerActive = ref(false)

type Link = {
  to: string
  name: string
}

const links: Link[] = [
  {
    to: '/',
    name: 'HOME'
  },
  {
    to: '/eurojackpot',
    name: 'EUROJACKPOT'
  }
]

const toggleMenu = () => {
  isMobileDrawerActive.value = !isMobileDrawerActive.value
}
</script>

<style scoped lang="scss">
.navbar {
  z-index: 100;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;

  padding: 1rem 2rem;

  transition: all 200ms linear;

  &--scrolled {
    background-color: var(--base-color);
    box-shadow: var(--box-shadow-2);
  }

  &__mobile,
  &__desktop {
    width: 100%;
  }

  &__mobile {
    &__link {
      margin-block: 1rem;
    }

    &__link > a {
      color: white;
      text-decoration: none;
    }
  }

  &__desktop {
    max-width: 1440px;
    margin: 0 auto;

    &__links {
      display: flex;
      gap: 2rem;
    }

    &__links > * {
      color: white;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
