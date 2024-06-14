<template>
  <NCard round class="action-card" content-style="padding: 0; box-shadow: var(--box-shadow-2)">
    <NFlex class="action-card__content">
      <h3 class="action-card__content__heading">{{ props.heading }}</h3>
      <p v-for="(text, index) in props.text" :key="index" class="action-card__content__text">
        {{ text }}
      </p>

      <NButton
        strong
        class="action-card__content__button"
        type="primary"
        @click="router.push(props.buttonTo)"
      >
        {{ props.buttonText }}
      </NButton>
    </NFlex>
  </NCard>
</template>

<script setup lang="ts">
import { NButton, NCard, NFlex } from 'naive-ui'
import { useRouter } from 'vue-router'

interface Props {
  heading: string
  text: string[]
  buttonTo: string
  buttonText: string
}

const props = defineProps<Props>()

const router = useRouter()
</script>

<style scoped lang="scss">
.action-card {
  overflow: hidden;

  position: relative;

  height: 25rem;
  max-width: 20rem;

  border-radius: 0.8rem;

  &__background-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
    -webkit-filter: brightness(0.5);
    -moz-filter: brightness(0.5);
    -ms-filter: brightness(0.5);
    -o-filter: brightness(0.5);
    filter: brightness(0.5);
  }

  &__content {
    position: absolute;

    top: 0;
    bottom: 0;

    left: 0;
    right: 0;

    padding: 1.5rem;

    &__heading {
      font-size: 1.5rem;
      font-weight: 900;
      margin-bottom: 2rem;
    }

    &__text {
      margin-bottom: 0.5rem;

      font-size: 1.2rem;
      font-weight: 500;
      line-height: 1.7rem;
    }

    &__button {
      width: 100%;
    }
  }
}
</style>
