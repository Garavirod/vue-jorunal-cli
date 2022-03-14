import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Service } from './services/service'

/* Importación de estilos SCSS */
import './styles/styles.scss'

let vue = createApp(App)
    .use( store )
    .use(router)
    .mount('#app')

Service.prototype.$vue = vue;