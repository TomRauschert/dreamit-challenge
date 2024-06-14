<template>
  <NGradientText
    class="logo"
    gradient="linear-gradient(90deg, rgb(177 52 40) 0%, rgb(217 127 0) 50%, rgb(177 52 40) 100%)"
  >
    FLOTTO
  </NGradientText>
</template>

<script lang="ts" setup>
import { NGradientText } from 'naive-ui'
</script>

<style scoped>
.logo {
  font-size: 1.8rem;
}
</style>
