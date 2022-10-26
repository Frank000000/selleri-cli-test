import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// 有时候需要把pinia中的数据持久化存储（存到localstorage或sessionstorage中）
import piniaPersist from 'pinia-plugin-persist'
import Guld from 'guld-ui'

import 'guld-ui/dist/style.css'
import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPersist)

app.use(router).use(pinia).use(Guld)

app.mount('#app')
