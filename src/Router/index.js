import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import RegistroPage from '../views/Registro.vue';
import InicioSesionPage from '../views/Inicio.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/registro',
    name: 'RegistroPage',
    component: RegistroPage,
  },
  {
    path: '/inicio',
    name: 'InicioSesionPage',
    component: InicioSesionPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
