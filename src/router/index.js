import Vue from "vue";
import VueRouter from "vue-router";
import Background from "./modules/User";

Vue.use(VueRouter);

import user from "./modules/User";

const routes = [
  {
    path: "/",
    hideInMenu: true,
    meta: { authority: ["user"] },
    name: "Home",
    component: () => import("@/layout/Home")
  },
  {
    path: "/background",
    hideInMenu: true,
    name: "background",
    meta: { authority: ["admin"] },
    component: () => import("@/layout/Background"),
    children: [user]
  },
  {
    path: "/login",
    hideInMenu: true,
    meta: { authority: ["user"] },
    name: "login",
    component: () => import("@/layout/Login"),
    children: [
      {
        path: "",
        meta: { authority: ["user"] },
        name: "Home",
        component: () => import("@/view/login/index")
      }
    ]
  }
];

routes.push(Background);

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

export default router;
