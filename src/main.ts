import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { pageTitle } from 'vue-page-title'

import './assets/scss/all.scss'

const app = createApp(App)
    app.use(router)
    app.use(pageTitle({ router }));
app.mount('#app')
