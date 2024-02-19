
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@/assets/styles/index.css'


const app = createApp(App)

app.use(router)

app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
