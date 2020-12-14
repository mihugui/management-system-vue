<template>
  <div>
    <el-form
      ref="loginForm"
      :model="loginForm"
      class="login-form"
      autocomplete="on"
      label-position="left"
    >
      <el-form-item prop="userName">
        <el-input
          v-model="loginForm.userName"
          placeholder="请输入用户名/邮箱"
          prefix-icon="iconfont icon-usercenter1"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          placeholder="请输入密码"
          prefix-icon="iconfont icon-unlock"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loading" @click="login"
          >登录</el-button
        >
        <el-button @click="register">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        userName: "admin",
        password: "admin"
      },
      redirect: "/background",
      loading: false
    };
  },
  methods: {
    // 登录
    login() {
      this.loading = true;
      this.$store
        .dispatch("login/login", this.loginForm)
        .then(() => {
          this.getPermission();
          this.$router.push({
            path: this.redirect || "/",
            query: this.otherQuery
          });
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    // 获取权限
    getPermission() {
      this.$store
        .dispatch("login/getPermission")
        .then(() => {})
        .catch(() => {});
    },
    // 注册
    register() {}
  }
};
</script>

<style lang="scss" scoped></style>
