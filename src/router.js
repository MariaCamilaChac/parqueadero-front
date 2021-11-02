import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/usuarios",
    name: "usuarios",
    component: () => import("./components/UsuariosList")
  },

  {
    path: "/Vehiculo",
    name: "agregar-vehiculo",
    component: () => import("./components/Vehiculo")
  },

  {
    path: "/Parqueadero",
    name: "parqueaderos",
    component: () => import("./components/Parqueadero")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;