import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue from 'vue'
import VSnow from "vsnow";
 


createApp(App).use(router).use(VSnow).mount('#app')
