import './assets/main.css'

import { createApp, h, provide } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ApolloClient from './apollo/client'
import { ApolloClients } from '@vue/apollo-composable'

const app = createApp({
  setup() {
    provide(ApolloClients, {
      default: ApolloClient
    })
  },
  render: () => h(App)
})

app.use(createPinia())
app.use(router)

app.mount('#app')
