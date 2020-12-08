<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main><router-view /></el-main>
      <el-footer><Footer /></el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Footer from "@/layout/Footer";
export default {
  components: {
    Footer
  }
};
</script>

<style></style>
