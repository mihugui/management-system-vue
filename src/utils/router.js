import router from "../router/index";

export function getRouter(name) {
  for (let route of router.options.routes) {
    if (route.name == name) {
      return route;
    }
  }
}
