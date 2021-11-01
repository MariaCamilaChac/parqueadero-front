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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;