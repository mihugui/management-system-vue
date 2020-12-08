import { login } from "@/api/user";
import { setToken } from "@/utils/auth";

const state = {
  token: ""
};

const mutations = {
  SET_TOKEN: (state, token) => {
    console.log(token);
    state.token = token;
  }
};

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { userName, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ userName: userName.trim(), password: password })
        .then(response => {
          commit("SET_TOKEN", response.token);
          setToken(response.token);
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
