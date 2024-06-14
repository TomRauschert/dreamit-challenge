import FlottoNavbar from '../../navbar/FlottoNavbar.vue'
import router from '@/router'
import { describe, expect, test } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/vue'

const links = [
  {
    href: '/',
    text: 'HOME'
  },
  {
    href: '/',
    text: 'FLOTTO'
  },
  {
    href: '/eurojackpot',
    text: 'EUROJACKPOT'
  }
]

function searchForLinks() {
  links.forEach(({ href, text }) => {
    const linkElement = screen.getByRole('link', { name: text })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement.closest('a')).toHaveAttribute('href', href)
  })
}

describe('FlottoNavbar.vue', () => {
  test('displays links on mobile view', async () => {
    render(FlottoNavbar, {
      global: {
        plugins: [router]
      }
    })

    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1023
    })

    await window.dispatchEvent(new Event('resize'))

    const toggleButton = screen.getByRole('button', { name: /Toggle Navigation/i })

    await fireEvent.click(toggleButton)

    searchForLinks()
  })

  test('displays links on desktop view', async () => {
    render(FlottoNavbar, {
      global: {
        plugins: [router]
      }
    })

    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024
    })

    await window.dispatchEvent(new Event('resize'))

    searchForLinks()
  })
})
