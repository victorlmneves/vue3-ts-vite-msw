import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { worker } from '@/mocks/browser'

if (import.meta.env.DEV) {
  worker.start()
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
