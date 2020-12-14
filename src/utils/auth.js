import Cookies from "js-cookie";

const TokenKey = "Admin-Token";
const PermissionKey = "Admin-Permission";

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

export function getPermissions() {
  return JSON.parse(Cookies.get(PermissionKey));
}

export function setPermissions(permissions) {
  return Cookies.set(PermissionKey, permissions);
}

export function removePermissions() {
  return Cookies.remove(PermissionKey);
}

export function reload() {
  removeToken();
  removePermissions();
}
