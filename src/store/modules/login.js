import { login, getPermission } from "@/api/login";
import { setToken, getToken, setPermissions } from "@/utils/auth";

const state = {
  token: getToken(),
  permissions: ["guest"]
};

const mutations = {
  SET_TOKEN: (state, token) => {
    console.log(token);
    state.token = token;
  },

  SET_PERMISSION: (state, permissions) => {
    console.log(permissions);
    state.permissions = permissions;
  }
};

const actions = {
  // 用户登录
  login({ commit }, userInfo) {
    const { userName, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ userName: userName.trim(), password: password })
        .then(response => {
          // 设置token
          commit("SET_TOKEN", response.token);
          setToken(response.token);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // 获取权限
  getPermission({ commit }) {
    return new Promise((resolve, reject) => {
      getPermission()
        .then(response => {
          console.log(response);
          let permissions = [];
          for (let permission of response.data.list) {
            permissions.push(permission.code);
          }
          // 设置permissions
          commit("SET_PERMISSION", permissions);
          setPermissions(permissions);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
