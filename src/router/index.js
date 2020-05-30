import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/components/Index";
import Signin from "@/components/Signin";
import Main from "@/components/Main";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/signin",
    component: Index,
    meta: {},
    children: [
      {
        path: "signin",
        component: Signin,
        meta: {}
      },
      {
        path: "main",
        component: Main,
        meta: {}
      }
    ]
  }
];

const router = new VueRouter({
  routes: routes
});

export default router;
