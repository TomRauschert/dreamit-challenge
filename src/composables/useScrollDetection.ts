import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollDetection() {
  const isScrolled = ref(false)

  const updateScroll = () => {
    isScrolled.value = window.scrollY > 0
  }

  onMounted(() => {
    updateScroll()
    window.addEventListener('scroll', updateScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateScroll)
  })

  return { isScrolled }
}
