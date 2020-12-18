const user = {
  path: "user",
  name: "人员管理",
  hideInMenu: false,
  meta: { authority: ["admin"] },
  component: () => import("@/view/background/user")
};
export default user;
