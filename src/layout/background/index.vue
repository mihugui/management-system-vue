<template>
  <el-container>
    <el-aside width="200px"><Aside /></el-aside>
    <el-container>
      <el-header class="header"><Header /></el-header>
      <el-main class="main"><router-view /></el-main>
      <el-footer><Footer /></el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Footer from "@/layout/Footer.vue";
import Aside from "@/layout/background/Aside.vue";
import Header from "@/layout/background/Header.vue";
export default {
  components: {
    Footer,
    Aside,
    Header
  }
};
</script>

<style scope>
.main {
  background-color: #f9f9f9;
}
.header {
  padding: 5px 5px 0px 0px;
  min-width: 800px;
}
</style>
