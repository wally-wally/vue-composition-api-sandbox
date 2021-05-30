import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Before from "@/views/Before/Before.vue";
import After from "@/views/After/After.vue";
import TemplateRef from "@/views/TemplateRef/TemplateRef.vue";

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
  {
    path: "/templateref",
    name: "TemplateRef",
    component: TemplateRef,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
