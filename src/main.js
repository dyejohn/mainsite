import { createApp } from 'vue'
import App from './App.vue'
import routing from "@/routing";

const vueApp = createApp(App)
vueApp.use(routing);
vueApp.mount('#app');

