import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { registerModules } from './register-modules'

import profileModule from './modules/profile'

const app = createApp(App)

registerModules({
  profile_module: profileModule
})

app.use(router)

app.mount('#app')
