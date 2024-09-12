import { createApp } from 'vue';
import App from './App.vue';
import router from './Router';  // Asegúrate de que "Router" coincida con el nombre de la carpeta

const app = createApp(App);

app.use(router);

app.mount('#app');
