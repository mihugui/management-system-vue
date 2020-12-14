const login = {
  path: "login",
  meta: { authority: ["user"] },
  name: "Home",
  component: () => import("@/view/login/index")
};
export default login;
