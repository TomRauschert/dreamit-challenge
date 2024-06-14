<template>
  <NDrawer
    width="100%"
    :show="isActive"
    :placement="placement"
    @update:show="(value) => emit('update:active', value)"
  >
    <NDrawerContent closable title="Navigation">
      <slot></slot>
    </NDrawerContent>
  </NDrawer>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { NDrawer, NDrawerContent, type DrawerPlacement } from 'naive-ui'
import { useRoute } from 'vue-router'

const route = useRoute()

const emit = defineEmits(['update:active'])

const isActive = defineModel({
  default: false
})

const placement = ref<DrawerPlacement>('right')

watch(route, () => {
  isActive.value = false
})
</script>
