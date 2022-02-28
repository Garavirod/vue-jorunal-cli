import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* Importación de estilos SCSS */
import './styles/styles.scss'

createApp(App)
    .use( store )
    .use(router)
    .mount('#app')
