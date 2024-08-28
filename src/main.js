import './assets/main.css'

import { VueQueryPlugin } from '@tanstack/vue-query'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const titleApp = import.meta.env.VITE_APP_TITLE
document.title = titleApp

const app = createApp(App)

app.use(router)
app.use(VueQueryPlugin)

app.mount('#app')
