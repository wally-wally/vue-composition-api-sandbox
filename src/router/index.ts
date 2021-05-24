import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Before from "@/views/Before.vue";
import After from "@/views/After.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: {
      name: "Before",
    },
  },
  {
    path: "/before",
    name: "Before",
    component: Before,
  },
  {
    path: "/after",
    name: "After",
    component: After,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
