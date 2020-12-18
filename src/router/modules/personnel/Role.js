const role = {
  path: "role",
  name: "角色管理",
  hideInMenu: false,
  meta: { authority: ["superAdmin"] },
  component: () => import("@/view/background/role")
};
export default role;
