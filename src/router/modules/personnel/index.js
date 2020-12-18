// 用户管理
import user from "./User";
import role from "./Role";
import permission from "./Permission";

const personnel = {
  path: "personnel",
  name: "用户管理",
  hideInMenu: false,
  meta: { authority: ["admin"], icon: "el-icon-user" },
  component: () => import("@/layout/ChildrenRouter"),
  children: [user, role, permission]
};
export default personnel;
