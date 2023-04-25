import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// router
import Home from "@/views/Home.vue";
import GestionPrestamos from "@/views/GestionPrestamos.vue";
import GestionUsuarios from "@/views/GestionUsuarios.vue";
import GestionDocumental from "@/views/GestionDocumental.vue";
import Estadistica from "@/views/Estadistica.vue";
import Acercade from "@/views/Acercade.vue";
import Login from "@/views/Login.vue";
import NotFound from "@/views/NotFound.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { createPinia } from 'pinia'
//primevue
import 'primevue/resources/themes/saga-blue/theme.css'  //theme
import 'primevue/resources/primevue.min.css'            //core css
import 'primeicons/primeicons.css'                      //icons
import PrimeVue from 'primevue/config'

// Import our custom CSS // bootstrap 5
import "@/scss/styles.scss";
//import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// router
const routes = [
  { path: "/", component: Home, name: 'home' },
  { path: "/gestionPrestamos", component: GestionPrestamos, name:'gestionPrestamos' },
  { path: "/gestionUsuarios", component: GestionUsuarios, name:'gestionUsuarios' },
  { path: "/gestionDocumental", component: GestionDocumental, name:'gestionDocumental' },
  { path: "/estadistica", component: Estadistica, name:'estadistica' },
  { path: "/acercade", component: Acercade, name:'acercade' },
  { path: "/Login", component: Login, name:'Login' },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];
const pinia = createPinia()
const router = createRouter({ 
  history: createWebHashHistory(),
  routes, 
});

import { authStore } from '@/stores/auth'
router.beforeEach(async (to, from) => {
  const auth = authStore()
  if (!auth.esAdmin && to.name !== 'home' && to.name !== 'Login') {
    return { name: 'home' }
  }
})

const app = createApp(App);
app.use(pinia)
app.use(router);
app.use(PrimeVue)

//app.component('font-awesome-icon', FontAwesomeIcon)
app.mount("#app");
//createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
