const register = {
  path: "register",
  meta: { authority: ["user"] },
  name: "Home",
  component: () => import("@/view/login/index")
};
export default register;
