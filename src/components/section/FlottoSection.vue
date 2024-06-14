<template>
  <section class="section" :class="{ 'section--fluid': props.fluid }">
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
interface Props {
  fluid?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  fluid: false
})
</script>

<style scoped lang="scss">
.section {
  max-width: 1200px;

  margin: 0 auto;
  margin-bottom: 5rem;

  padding: 0 1.5rem;

  &--fluid {
    max-width: none;
    padding: 0;
  }
}
</style>
