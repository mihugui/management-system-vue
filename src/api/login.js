import request from "@/utils/request";

export function login(data) {
  return request({
    url: "login",
    method: "post",
    data
  });
}

export function getPermission() {
  return request({
    url: "getPermission",
    method: "post"
  });
}

export function logout() {
  return request({
    url: "logout",
    method: "post"
  });
}
