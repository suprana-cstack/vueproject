import { createRouter, createWebHistory } from "vue-router";
import Home from "../Views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: () => import("../Views/SignUp.vue"),
  },
  {
    path: "/login",
    name: "LogIn",
    component: () => import("../Views/LogIn.vue"),
  },
];

const router = new createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
