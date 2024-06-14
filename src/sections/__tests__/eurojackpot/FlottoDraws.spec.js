import { beforeEach, describe, expect, test } from 'vitest'
import { render, screen, waitFor } from '@testing-library/vue'
import { createMockClient } from 'mock-apollo-client'
import { provideApolloClient } from '@vue/apollo-composable'

import FlottoDraws from '@/sections/eurojackpot/FlottoDraws.vue'

import { GET_DRAWS } from '@/apollo/queries'
import { mocks } from './DrawsMock'

describe('FlottoDraws.vue', () => {
  beforeEach(() => {
    const mockClient = createMockClient()

    mockClient.setRequestHandler(GET_DRAWS, () => Promise.resolve({ data: mocks }))

    provideApolloClient(mockClient)
  })

  test('shows correct draw numbers', async () => {
    render(FlottoDraws)

    await waitFor(() => {
      expect(screen.getByTestId('fetched-data')).toBeInTheDocument()
    })

    const drawNumbers = screen.getAllByTestId('draw-number')

    expect(drawNumbers.length).toBe(7)

    drawNumbers.forEach((element, index) => {
      const numbers = [...mocks.draw.draws[0].numbers, ...mocks.draw.draws[0].additionalNumbers]
      expect(element.textContent).toContain(numbers[index])
    })
  })

  test('render correct table data', async () => {
    render(FlottoDraws)

    await waitFor(() => {
      expect(screen.getByTestId('fetched-data')).toBeInTheDocument()
    })

    const drawsTable = screen.getByTestId('draws-table')
    expect(drawsTable).toBeInTheDocument()

    expect(screen.getByText('87.984,50 €')).toBeInTheDocument()
    expect(screen.getByText('3.225,00 €')).toBeInTheDocument()
    expect(screen.getByText('259,10 €')).toBeInTheDocument()
    expect(screen.getByText('143,80 €')).toBeInTheDocument()
    expect(screen.getByText('81,40 €')).toBeInTheDocument()
    expect(screen.getByText('24,80 €')).toBeInTheDocument()
    expect(screen.getByText('18,40 €')).toBeInTheDocument()
    expect(screen.getByText('14,80 €')).toBeInTheDocument()
    expect(screen.getByText('13,00 €')).toBeInTheDocument()
    expect(screen.getByText('9,70 €')).toBeInTheDocument()

    mocks.draw.draws[0].odds.forEach((odd) => {
      expect(screen.getAllByText(odd.numberOfWinners).length).toBeGreaterThanOrEqual(1)
    })
  })
})
