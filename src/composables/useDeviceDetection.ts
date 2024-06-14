import { ref, onMounted, onUnmounted } from 'vue'

export function useDeviceDetection() {
  const isMobile = ref(false)
  const isDesktop = ref(false)

  const updateDeviceType = () => {
    const width = window.innerWidth

    isMobile.value = width < 1024
    isDesktop.value = width >= 1024
  }

  onMounted(() => {
    updateDeviceType()
    window.addEventListener('resize', updateDeviceType)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateDeviceType)
  })

  return { isMobile, isDesktop }
}
