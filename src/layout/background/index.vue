<template>
  <el-container>
    <el-aside width="200px"><Aside /></el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main><router-view /></el-main>
      <el-footer><Footer /></el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Footer from "@/layout/Footer.vue";
import Aside from "@/layout/background/Aside.vue";
export default {
  components: {
    Footer,
    Aside
  }
};
</script>

<style></style>
