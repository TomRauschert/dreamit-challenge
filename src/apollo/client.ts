import { ApolloClient, InMemoryCache } from '@apollo/client/core'

const apolloClient = new ApolloClient({
  uri: 'http://localhost:8010/https://www.lottohelden.de/graphql',
  cache: new InMemoryCache()
})

export default apolloClient
