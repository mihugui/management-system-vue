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

<style scoped>
.main {
  background-color: #f9f9f9;
}
.header {
  border-bottom: 1px solid #e6e6e6;
  z-index: 1500;
}
</style>
