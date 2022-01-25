import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import '@/assets/css/main.scss';
import router from '@/router/index.js'
import VueSmoothScroll from 'vue3-smooth-scroll'


createApp(App).use(VueSmoothScroll).use(router).mount('#app')
