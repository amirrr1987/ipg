import 'virtual:uno.css'
import 'ant-design-vue/dist/reset.css'
import '@/assets/styles/main.less'
import './assets/fonts/css/fontiran.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
