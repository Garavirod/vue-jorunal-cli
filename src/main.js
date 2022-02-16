import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/* Importación de estilos SCSS */
import './styles/styles.scss'

createApp(App).use(router).mount('#app')
