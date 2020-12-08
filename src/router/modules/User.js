const user = {
  path: "user",
  name: "用户管理",
  hideInMenu: false,
  meta: { authority: ["admin"] },
  component: () => import("@/view/user/index")
};
export default user;
