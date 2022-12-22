import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import router1 from './router/index1'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(router1)

app.mount('#app')
