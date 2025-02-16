import { createRouter, createWebHistory } from "vue-router";

import Main from "@/views/Main.vue";

const routes = [{ path: "/", component: Main, name: "Home" }];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
