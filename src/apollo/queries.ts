import { gql } from '@apollo/client/core'

export const GET_DRAWS = gql`
  query GetDraws($date: String!, $limit: Int!, $type: String!) {
    draw(date: $date, limit: $limit, type: $type) {
      backendError
      draws {
        additionalNumbers
        date
        gameAmount
        jackpot
        megaPlier
        numbers
        odds {
          link
          numberOfWinners
          numbers
          odd
          winningClass
        }
      }
    }
  }
`
