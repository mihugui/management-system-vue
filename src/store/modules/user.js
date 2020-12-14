import { list } from "@/api/user";

const state = {};

const mutations = {};

const actions = {
  // 用户列表
  list() {
    return new Promise((resolve, reject) => {
      list({})
        .then(response => {
          resolve(response);
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
