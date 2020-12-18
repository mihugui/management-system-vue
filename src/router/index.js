import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 用户管理
import personnel from "./modules/personnel/index";

// 登录注册
import login from "./modules/Login";
import register from "./modules/Register";

const routes = [
  {
    path: "/",
    hideInMenu: true,
    meta: { authority: ["guest"] },
    name: "Home",
    redirect: "sign/login",
    component: () => import("@/layout/Home")
  },
  {
    path: "/background",
    hideInMenu: true,
    name: "background",
    meta: { authority: ["admin"] },
    component: () => import("@/layout/background/index"),
    children: [personnel]
  },
  {
    path: "/sign",
    hideInMenu: true,
    meta: { authority: ["guest"] },
    name: "sign",
    component: () => import("@/layout/Login"),
    children: [login, register]
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

export default router;
