const permission = {
  path: "permission",
  name: "权限管理",
  hideInMenu: false,
  meta: { authority: ["t"] },
  component: () => import("@/view/background/permission")
};
export default permission;
