import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './libs/remSize'
import config from '@/config'
import 'element-plus/dist/index.css'

const app = createApp(App);
app.config.globalProperties.$config = config;

app.use(store).use(router).mount('#app')