import axios from "axios";
import { MessageBox, Message } from "element-ui";
import store from "@/store";
import { getToken, reload } from "@/utils/auth";
import appConfig from "../../static/app-config.json";
import router from "../router";

// create an axios instance
const service = axios.create({
  baseURL: appConfig.baseUrl, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers["token"] = getToken();
    }
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data;

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
      Message({
        message: res.message || "Error",
        type: "error",
        duration: 5 * 1000
      });

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 403) {
        // to re-login
        MessageBox.confirm(
          "你已经退出,停留在当前页面或者跳转到登录页",
          "重新登录",
          {
            confirmButtonText: "重新登录",
            cancelButtonText: "取消",
            type: "warning"
          }
        ).then(() => {
          reload();
          // 只有在当前路由不是登录页面才跳转
          router.currentRoute.path !== "/sign/login" &&
            router.replace({
              path: "/sign/login"
            });
        });
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  error => {
    console.log("err" + error); // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;
